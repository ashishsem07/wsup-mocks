import React from 'react';
import { Metadata } from 'next';
import { AIImageGeneratorContent } from './AIImageGeneratorContent';

export const metadata: Metadata = {
    title: 'AI Image Generator – Create Images from Text for Free | wsup.ai',
    description: 'Create stunning images with AI image generation. Turn text into high-quality visuals in seconds using wsup.ai\'s free AI image generator. Try it instantly.',
    openGraph: {
        title: 'AI Image Generator – Create Images from Text for Free | wsup.ai',
        description: 'Create stunning images with AI image generation. Turn text into high-quality visuals in seconds using wsup.ai\'s free AI image generator. Try it instantly.',
        url: 'https://wsup.ai/ai-image-generator',
        type: 'website',
        images: [
            {
                url: 'https://wsup.ai/og-image-generator.jpg', // Placeholder
                width: 1200,
                height: 630,
                alt: 'AI Image Generator Preview',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Image Generator – Create Images from Text for Free | wsup.ai',
        description: 'Create stunning images with AI image generation. Turn text into high-quality visuals in seconds using wsup.ai\'s free AI image generator. Try it instantly.',
        images: ['https://wsup.ai/og-image-generator.jpg'], // Placeholder
    },
    alternates: {
        canonical: 'https://wsup.ai/ai-image-generator',
    },
};


export default function AIImageGeneratorPage() {
    return <AIImageGeneratorContent />;
}
