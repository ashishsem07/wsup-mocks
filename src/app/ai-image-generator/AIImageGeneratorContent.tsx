'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { faqs, features, examples, promptTemplates } from './data';
import { ImageGenerator } from '@/components/ImageGenerator';
import { Header } from '@/components/Header';

const JsonLd = () => {
    const faqData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
    );
};

export function AIImageGeneratorContent() {
    const generatorRef = useRef<HTMLDivElement>(null);
    const [selectedPrompt, setSelectedPrompt] = React.useState('');

    const scrollToGenerator = () => {
        if (generatorRef.current) {
            const yOffset = -80; // Offset for fixed header if any
            const element = generatorRef.current;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const handleExampleClick = (prompt: string, style: string) => {
        console.log('Example clicked:', prompt, style);
        setSelectedPrompt(prompt);
        // Style handling can be added later if ImageGenerator supports it via props
        scrollToGenerator();
    };

    const handlePromptClick = (prompt: string) => {
        console.log('Prompt clicked:', prompt);
        setSelectedPrompt(prompt);
        scrollToGenerator();
    };

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark pb-20 md:pb-0">
            <JsonLd />
            <Header />

            {/* Hero Section - Above the Fold Generator */}
            <section ref={generatorRef} className="pt-8 pb-12 px-4 md:pt-12 md:pb-20">
                <div className="max-w-6xl mx-auto text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
                        AI Image Generator for Instant Image Creation
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Turn your imagination into reality. Describe what you want to see, and watch our AI bring it to life in seconds.
                    </p>

                    {/* Generator UI Component */}
                    <ImageGenerator
                        initialPrompt={selectedPrompt}
                        onPromptChange={setSelectedPrompt}
                    />
                </div>
            </section>

            {/* Intro Copy */}
            <section className="py-12 px-4 bg-gray-50 dark:bg-white/5">
                <div className="max-w-4xl mx-auto space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                    <p>
                        wsup.ai is a powerful AI image generator that lets you create high-quality images from simple text prompts. With advanced AI image generation, you can turn ideas into visuals in seconds—no design skills required.
                    </p>
                    <p>
                        Whether you&apos;re creating art, characters, illustrations, or concept visuals, our image generator helps you bring imagination to life. Simply describe what you want, choose a style, and let AI handle the rest.
                    </p>
                    <p>
                        Use wsup.ai for creative projects, storytelling, social media visuals, or experimentation with AI-powered image creation—all directly in your browser.
                    </p>
                </div>
            </section>

            {/* Examples Gallery */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto space-y-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Examples of AI Image Generation</h2>
                        <p className="text-gray-600 dark:text-gray-400">See what you can create with AI</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {examples.map((example, index) => (
                            <div
                                key={example.id}
                                onClick={() => handleExampleClick(example.prompt, example.style)}
                                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={example.image}
                                    alt={example.prompt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    loading={index < 4 ? 'eager' : 'lazy'}
                                    priority={index < 4}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                                    <p className="text-white text-xs line-clamp-2">{example.prompt}</p>
                                    <span className="text-primary-300 text-[10px] mt-1 uppercase tracking-wider font-bold">{example.style}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Prompt Templates */}
            <section className="py-16 px-4 bg-gray-50 dark:bg-white/5">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Popular AI Image Prompts</h2>
                        <p className="text-gray-600 dark:text-gray-400">Click to use any of these templates</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {promptTemplates.map((prompt, index) => (
                            <button
                                key={index}
                                onClick={() => handlePromptClick(prompt)}
                                className="text-left p-4 rounded-xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors group"
                            >
                                <p className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                    &quot;{prompt}&quot;
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto space-y-12">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Why Use wsup.ai for Image Creation?</h2>
                        <p className="text-gray-600 dark:text-gray-400">Built for creators, by creators</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 space-y-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 px-4 bg-gray-50 dark:bg-white/5">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">AI Image Generation FAQs</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <details key={index} className="group bg-white dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
                                <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                                    <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                                    <span className="material-symbols-outlined text-gray-400 transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <div className="px-4 pb-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
