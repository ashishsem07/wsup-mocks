'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const MOCK_IMAGES = [
    "https://storage.googleapis.com/pai-images/fb8426982db045f299f976c667d44678.jpeg",
    "https://storage.googleapis.com/pai-images/8e043b27c03a459983962047d12c9305.jpeg",
    "https://storage.googleapis.com/pai-images/ae73d371f6544525b36a79d1071b764c.jpeg",
    "https://storage.googleapis.com/pai-images/5617260836524174aa7303d664d325e0.jpeg"
];

export function ImageGenerator() {
    const [prompt, setPrompt] = useState('');
    const [style, setStyle] = useState('anime');
    const [ratio, setRatio] = useState('1:1');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [resultImage, setResultImage] = useState<string | null>(null);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleGenerate = async () => {
        if (!prompt.trim()) {
            setShowError(true);
            setErrorMessage('Please enter a prompt.');
            return;
        }

        setShowError(false);
        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            const randomImage = MOCK_IMAGES[Math.floor(Math.random() * MOCK_IMAGES.length)];
            setResultImage(randomImage);
            setStatus('success');
        }, 2000);
    };

    const handleCopyPrompt = () => {
        navigator.clipboard.writeText(prompt);
        // Could add a toast notification here
    };

    const handleDownload = () => {
        // Download functionality would go here
        console.log('Download image');
    };

    const handleRegenerate = () => {
        handleGenerate();
    };

    return (
        <div className="mt-8 bg-white dark:bg-surface-dark rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6 md:p-8 text-left transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Controls */}
                <div className="space-y-6">
                    {/* Prompt Input */}
                    <div className="space-y-2">
                        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                            Describe your image
                        </label>
                        <textarea
                            id="prompt"
                            value={prompt}
                            onChange={(e) => {
                                setPrompt(e.target.value);
                                if (showError && e.target.value.trim()) {
                                    setShowError(false);
                                }
                            }}
                            rows={4}
                            className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border ${showError
                                    ? 'border-red-500 focus:ring-red-500'
                                    : 'border-gray-200 dark:border-gray-700 focus:ring-primary-500'
                                } focus:ring-2 focus:border-transparent outline-none transition-all resize-none text-gray-900 dark:text-white placeholder-gray-400`}
                            placeholder="A cinematic anime character standing in neon rain, ultra-detailed"
                        />
                        {showError && (
                            <p className="text-sm text-red-500 mt-1">{errorMessage}</p>
                        )}
                    </div>

                    {/* Controls */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Art Style
                            </label>
                            <select
                                value={style}
                                onChange={(e) => setStyle(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-primary-500 outline-none text-gray-900 dark:text-white"
                            >
                                <option value="anime">Anime</option>
                                <option value="realistic">Realistic</option>
                                <option value="illustration">Illustration</option>
                                <option value="cinematic">Cinematic</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Aspect Ratio
                            </label>
                            <div className="flex gap-2">
                                {['1:1', '16:9', '9:16'].map((r) => (
                                    <button
                                        key={r}
                                        onClick={() => setRatio(r)}
                                        className={`flex-1 py-2.5 rounded-xl border text-xs font-medium transition-colors ${ratio === r
                                                ? 'bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300'
                                                : 'bg-gray-50 dark:bg-white/5 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10'
                                            }`}
                                    >
                                        {r}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Generate Button */}
                    <button
                        onClick={handleGenerate}
                        disabled={status === 'loading'}
                        className={`w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform ${status === 'loading'
                                ? 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                                : 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white shadow-primary-500/25 hover:scale-[1.02] active:scale-[0.98]'
                            }`}
                    >
                        {status === 'loading' ? (
                            <span className="flex items-center justify-center gap-2">
                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Generating...
                            </span>
                        ) : (
                            'Generate Image'
                        )}
                    </button>
                    <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                        No credit card required · Generate in seconds
                    </p>
                </div>

                {/* Right Column: Preview */}
                <div className="relative aspect-square lg:aspect-auto lg:h-full bg-gray-50 dark:bg-black/20 rounded-xl border-2 border-dashed border-gray-200 dark:border-gray-800 overflow-hidden flex items-center justify-center">
                    {status === 'success' && resultImage ? (
                        <div className="relative w-full h-full group">
                            <Image
                                src={resultImage}
                                alt={prompt}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                                <button
                                    onClick={handleDownload}
                                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
                                    title="Download"
                                >
                                    <span className="material-symbols-outlined">download</span>
                                </button>
                                <button
                                    onClick={handleRegenerate}
                                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
                                    title="Regenerate"
                                >
                                    <span className="material-symbols-outlined">refresh</span>
                                </button>
                                <button
                                    onClick={handleCopyPrompt}
                                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
                                    title="Copy prompt"
                                >
                                    <span className="material-symbols-outlined">content_copy</span>
                                </button>
                                <button
                                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors opacity-50 cursor-not-allowed"
                                    title="Turn into Comic (Coming Soon)"
                                    disabled
                                >
                                    <span className="material-symbols-outlined">auto_stories</span>
                                </button>
                                <button
                                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors opacity-50 cursor-not-allowed"
                                    title="Turn into Story (Coming Soon)"
                                    disabled
                                >
                                    <span className="material-symbols-outlined">book</span>
                                </button>
                            </div>
                        </div>
                    ) : status === 'loading' ? (
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 mx-auto border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
                            <p className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">Creating your masterpiece...</p>
                        </div>
                    ) : status === 'error' ? (
                        <div className="text-center space-y-4 p-8">
                            <div className="w-20 h-20 mx-auto rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
                                <span className="material-symbols-outlined text-4xl text-red-500">error</span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">Generation Failed</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Please try again</p>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center space-y-4 p-8">
                            <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center">
                                <span className="material-symbols-outlined text-4xl text-gray-300 dark:text-gray-600">image</span>
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium text-gray-900 dark:text-white">Your generated image will appear here</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">Enter a prompt and click Generate</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
