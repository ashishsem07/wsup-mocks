# Video Model Selection for Creator Posts

**Author:** Ashish
**Date:** 2026-02-25
**Status:** Draft
**Priority:** P1

---

## Problem

When creators make a video post on wsup.ai, they have no choice over the video generation model — the system picks one. Users creating video posts from character images have different needs: some want fast/cheap clips, others want cinematic quality with audio. Currently, video posts take 3–6 minutes to render with no transparency into what model is used, and no way to optimize for cost or quality. The `char_image_to_video` transaction source already exists in BQ, confirming this is an active feature with measurable usage.

## Goal

Let creators choose from 2–3 SOTA video models with built-in audio when creating a video post, with clear tradeoffs on quality, speed, and credit cost.

**Primary metric:** Video post completion rate (posts published / model selected)
**Secondary metrics:** Revenue per video post (credits consumed), model selection distribution

## Non-Goals

- Text-to-video from scratch (this is image-to-video from character images only)
- Video editing or trimming after generation
- Audio-off toggle (all generations include audio by default to differentiate from image posts)

---

## Solution

### Model Lineup

| Model | Provider | Audio | Resolution | Duration | API Cost/sec | 5s Cost | 5s Credits (at cost) | Sell Price (credits) | Margin |
|-------|----------|-------|------------|----------|-------------|---------|---------------------|---------------------|--------|
| **Kling 2.6** | Kuaishou | Native (voice + SFX + ambience) | Up to 1080p | 5s / 10s | $0.14/s | $0.70 | 140 | 200 | 1.43x |
| **Veo 3.1** | Google (Vertex AI) | Native | Up to 1080p | 5–8s | $0.15/s | $0.75 | 150 | 250 | 1.67x |
| **Sora 2.0** | OpenAI (via fal.ai) | Native | 720p / 1080p | 5–10s | $0.30/s (720p), $0.50/s (1080p) | $1.50 (720p) | 300 | 450 | 1.50x |

**Recommended default selection:** Kling 2.6 (cheapest, good quality, fast).

### Credit Pricing Summary

| Model | 5s Video | 10s Video |
|-------|----------|-----------|
| Kling 2.6 | 200 credits | 400 credits |
| Veo 3.1 | 250 credits | 500 credits |
| Sora 2.0 (720p) | 450 credits | 900 credits |
| Sora 2.0 (1080p) | 750 credits | 1,500 credits |

For reference: current image gen costs 25 credits. Video is 8–30x more expensive, which is expected given the compute cost and audio generation.

### What the User Sees

#### Screen: Create Video Post — Model Selection

This screen appears after the user taps "Create Post" → selects a character → chooses "Video" as post type. It replaces the current single-model flow.

**Layout:**
- Top bar: back arrow + "Create Video Post" title
- Character preview: selected character image (thumbnail)
- Prompt input: text field for video prompt/description
- **Model selection cards:** 3 horizontal-scrollable cards, one per model
- Bottom: "Generate Video" CTA button + credit balance display

**Components:**

| Element | Type | Behavior | States |
|---------|------|----------|--------|
| Model card — Kling 2.6 | Selection card | Tap to select. Shows model name, "Best Value" badge, audio icon, credit cost, sample quality tag | Default (pre-selected), selected (highlighted border), disabled (insufficient credits) |
| Model card — Veo 3.1 | Selection card | Tap to select. Shows model name, "Highest Quality" badge, audio icon, credit cost | Default, selected, disabled |
| Model card — Sora 2.0 | Selection card | Tap to select. Shows model name, "Premium" badge, audio icon, credit cost, resolution toggle (720p/1080p) | Default, selected, disabled |
| Prompt input | Text input | User enters a description of the video scene. Optional — if empty, system generates a prompt from character context | Empty, filled, error (>500 chars) |
| Generate Video button | Primary CTA | Initiates video generation. Shows credit cost of selected model | Default, loading (spinner), disabled (no model selected or insufficient credits) |
| Credit balance | Text label | Shows current credit balance. Turns red if below selected model cost | Normal, insufficient (red + "Get Credits" link) |
| Duration toggle | Segmented control | Switches between 5s (default) and 10s. Updates credit cost in real time for the selected model. Positioned above or within the model cards area. | 5s selected (default), 10s selected |
| Resolution toggle (Sora only) | Toggle/Segmented control | Switches between 720p (cheaper) and 1080p within the Sora card. Updates credit cost in real time | 720p selected (default), 1080p selected |

**Model Card Content:**

Each card displays:
- Model name + provider logo
- Badge: "Best Value" / "Highest Quality" / "Premium"
- Audio indicator: speaker icon + "Audio included"
- Credit cost: e.g., "200 credits" (bold)
- Quality tag: "1080p" / "720p–1080p"
- Estimated render time: "~2 min" / "~3 min" / "~4 min"

**User Flow:**
1. User navigates to Create Post → selects character → picks "Video"
2. System shows model selection screen with Kling 2.6 pre-selected
3. User optionally switches duration from 5s (default) to 10s — all card prices update (2x)
4. User optionally enters a prompt describing the scene
5. User taps a different model card to compare (credit cost updates)
6. User taps "Generate Video (250 credits)"
7. System deducts credits and starts generation
8. Screen transitions to loading state with progress indicator and estimated time
9. On completion, user previews the video (with audio playback)
10. User taps "Publish" to post to feed, or "Regenerate" to try again (same credit cost)

**Edge Cases:**
- **Insufficient credits:** Model card shows "Get Credits" badge instead of cost. Tapping card opens credit purchase modal. Generate button stays disabled.
- **Empty state (no characters):** Redirect to character creation flow.
- **Generation failure:** Show error toast "Video generation failed. Credits refunded." + retry button. Refund credits to user's balance.
- **Loading state:** Full-screen overlay with animated progress bar, model name, estimated time remaining. "Cancel" link available (credits refunded if cancelled before completion).
- **Model unavailable (API outage):** Card shows "Temporarily unavailable" with gray overlay. Other models remain selectable.

#### Screen: Video Preview & Publish

After generation completes:

**Layout:**
- Full-width video player with play/pause, audio toggle, progress bar
- Below video: character name, prompt used
- Action bar: "Publish to Feed" (primary CTA), "Regenerate" (secondary), "Discard" (tertiary)

**Components:**

| Element | Type | Behavior | States |
|---------|------|----------|--------|
| Video player | Media player | Auto-plays on load with audio. Loops. | Playing, paused |
| Publish button | Primary CTA | Publishes video as a feed post | Default, loading, success (redirects to feed) |
| Regenerate button | Secondary button | Re-runs generation with same model + prompt. Deducts credits again. | Default, disabled (insufficient credits) |
| Discard button | Text button | Deletes generated video. Confirmation modal first. Credits NOT refunded. | Default |

### Platform Differences

| Behavior | Web | Mobile (iOS/Android) |
|----------|-----|---------------------|
| Model card layout | Horizontal row (3 cards visible) | Horizontal scroll (2.5 cards visible, peek) |
| Video preview | Inline player | Native video player |
| Credit purchase | Web payment modal (Stripe/CCBill) | IAP flow |
| Resolution toggle (Sora) | Inline segmented control | Same |

---

## Tracking

### New Events to Implement

| Event Name | Type | Trigger | Table | Key extraData Fields |
|------------|------|---------|-------|---------------------|
| `{client}-feVideoModelSelectionVisible` | Frontend | Model selection screen loads | `now-ai-stats` | `{ characterId, availableModels: ["kling_2.6","veo_3.1","sora_2.0"] }` |
| `{client}-feVideoModelSelected` | Frontend | User taps a model card | `now-ai-stats` | `{ model: "kling_2.6", creditCost: 200, resolution: "1080p" }` |
| `{client}-feVideoPromptEntered` | Frontend | User submits a prompt (non-empty) | `now-ai-stats` | `{ model, promptLength }` |
| `{client}-feVideoDurationToggled` | Frontend | User switches between 5s and 10s | `now-ai-stats` | `{ duration: "10s", model }` |
| `{client}-feVideoGenerateClicked` | Frontend | User taps Generate Video button | `now-ai-stats` | `{ model, creditCost, resolution, duration, hasPrompt: true }` |
| `{client}-beVideoGenerationStarted` | Backend | Generation request sent to model API | `now-ai-stats` | `{ model, resolution, duration, apiCost }` |
| `{client}-beVideoGenerationCompleted` | Backend | Video successfully generated | `now-ai-stats` | `{ model, resolution, duration, renderTimeMs, apiCost }` |
| `{client}-beVideoGenerationFailed` | Backend | Generation failed or timed out | `now-ai-stats` | `{ model, errorType, creditsRefunded: true }` |
| `{client}-feVideoPreviewPlayed` | Frontend | User plays the preview | `now-ai-stats` | `{ model, playDurationSec }` |
| `{client}-feVideoPublished` | Frontend | User taps Publish | `now-ai-stats` | `{ model, creditCost, resolution }` |
| `{client}-feVideoRegenerateClicked` | Frontend | User taps Regenerate | `now-ai-stats` | `{ model, creditCost, attemptNumber }` |
| `{client}-feVideoDiscarded` | Frontend | User taps Discard | `now-ai-stats` | `{ model }` |
| `{client}-feVideoInsufficientCredits` | Frontend | User sees insufficient credits state | `now-ai-stats` | `{ model, creditCost, currentBalance }` |
| `{client}-feVideoModelUnavailable` | Frontend | A model card shows unavailable state | `now-ai-stats` | `{ model }` |

### Existing Events to Reuse

| Existing Event | What It Tells Us |
|---------------|-----------------|
| `nowgg-feCharImageToVideoBtnClicked` | Entry point — user initiates video from character image. Baseline metric for pre-feature comparison. |
| `nowgg-feCharImageToVideoModalDebitBtnClicked` | Current debit confirmation. Will be replaced by new flow but useful for A/B baseline. |
| `nowgg-feRegenerateCharImageToVideoBtnClicked` | Current regeneration. Compare regeneration rate pre/post. |
| `char_image_to_video` (transactions) | Current credit deduction source. Update to include `model` in extraData. |

### Transactions Table Update

Add to `prod-berlin.analytics.now-ai-transactions`:

| Source Value | When | extraData |
|-------------|------|-----------|
| `video_post_kling` | Kling 2.6 generation debit | `{ model, resolution, duration, creditCost }` |
| `video_post_veo` | Veo 3.1 generation debit | `{ model, resolution, duration, creditCost }` |
| `video_post_sora` | Sora 2.0 generation debit | `{ model, resolution, duration, creditCost }` |
| `video_post_refund` | Credits refunded (failure/cancel) | `{ model, refundAmount, reason }` |

### Success Dashboard

| Metric | Baseline | Target (30d) | How to Measure |
|--------|----------|-------------|----------------|
| Video post completion rate | Current rate (measure from existing events) | +20% relative | `feVideoPublished / feVideoModelSelectionVisible` |
| Revenue per video post | Current `char_image_to_video` avg credits | +40% (higher-tier model upsell) | AVG credits from video transaction sources |
| Model selection distribution | N/A | Kling 50%, Veo 35%, Sora 15% | COUNT by model from `feVideoModelSelected` |
| Generation failure rate | TBD | <5% per model | `beVideoGenerationFailed / beVideoGenerationStarted` per model |
| Regeneration rate | Current regen rate | <30% (quality satisfaction) | `feVideoRegenerateClicked / beVideoGenerationCompleted` |

---

## Scope

| In Scope | Out of Scope |
|----------|-------------|
| Model selection UI (3 models) | Custom duration beyond 5s/10s |
| Duration toggle (5s default, 10s option) | Fine-grained duration slider |
| Credit-based pricing per model | Subscription/unlimited plans for video |
| Audio-on by default for all models | Audio-off toggle |
| Image-to-video (from character image) | Text-to-video (no source image) |
| Video preview with audio playback | Video editing/trimming tools |
| Credit refund on failure/cancel | Partial refunds for partial renders |
| Web + mobile (iOS/Android) | BlueStacks, embed widget |
| 720p + 1080p (Sora resolution toggle) | 4K output |

## Dependencies

| Dependency | Owner | Status | Blocker? |
|-----------|-------|--------|----------|
| Vertex AI API access (Veo 3.1) | Backend / Google Cloud | Needs provisioning | Yes |
| Kling 2.6 API key + integration | Backend | Needs provisioning | Yes |
| fal.ai account for Sora 2.0 | Backend | Needs provisioning | Yes |
| Credit deduction system update (per-model pricing) | Backend | Existing system, needs extension | Yes |
| Web payments live (for credit purchase upsell) | Payments team | In progress (P0) | No — feature works with existing credits, but monetization impact limited without web payments |

## Open Questions

- [ ] Should Sora 2.0 default to 720p or 1080p? (720p is 40% cheaper — better for conversion)
- [ ] Do we need a "compare models" tooltip or is the card info sufficient?
- [ ] Should generation failures auto-retry once before refunding, or refund immediately?
- [ ] Rate limiting: max video generations per user per day to control API costs?
- [ ] Should Sora 2.0 be launch or held back for a v2 given it's 2–3x more expensive than the others?

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Audio always on | Yes, all models generate with audio | Core differentiator of video vs image posts. Simplifies UX — no toggle needed. |
| Duration: 5s default + 10s option | Toggle, not slider | Two clean options. 10s = 2x credits (linear pricing). Keeps UI simple while giving power users longer clips. |
| Kling 2.6 as default | Pre-selected on load | Cheapest option, good quality. Reduces sticker shock for first-time users. |
| 3 models, not 2 | Kling + Veo + Sora | Price anchoring: Sora makes Veo look reasonable, Kling is the accessible option. Classic good/better/best tiering. |
| Credit pricing with ~1.5x margin | See pricing table | Covers API cost + infrastructure + margin. Competitive with platform norms (image gen is ~2x margin). |
| Refund on failure | Full refund | Trust-building. Video gen has higher failure rates than image gen — users shouldn't pay for failures. |

---

## Milestones

| Phase | Deliverable | Target Date |
|-------|------------|-------------|
| Design | Wireframes for model selection + preview screens | |
| API Integration | Kling 2.6 + Veo 3.1 + Sora 2.0 backend integration | |
| Dev | Model selection UI + credit deduction + preview flow | |
| QA | Cross-platform testing (web + iOS + Android) | |
| Soft Launch | Ship to 10% of creators, monitor failure rates + model distribution | |
| Full Launch | Ship to 100% | |

## Launch Checklist

- [ ] Design reviewed and approved
- [ ] All 3 model APIs integrated and tested (Kling, Veo, Sora)
- [ ] Credit deduction works per-model with correct pricing
- [ ] Refund flow works on generation failure and cancellation
- [ ] Tracking events implemented and verified in BQ (`now-ai-stats` + `now-ai-transactions`)
- [ ] QA pass on web + mobile (iOS + Android)
- [ ] Edge cases tested (insufficient credits, model unavailable, generation failure, cancel mid-generation)
- [ ] Performance check (model selection screen LCP < 2.5s, CLS < 0.1)
- [ ] Rate limiting configured per user per day
- [ ] API cost monitoring dashboard live (alert if daily spend exceeds threshold)
- [ ] Safety review: ensure generated videos pass content moderation before publishing
