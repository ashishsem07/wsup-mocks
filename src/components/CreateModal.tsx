"use client";

import { useUI } from "@/context/UIContext";
import { useEffect, useState } from "react";
import Link from "next/link";

export function CreateModal() {
    const { isCreateModalOpen, closeCreateModal } = useUI();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isCreateModalOpen) {
            // Small delay to ensure the DOM is mounted and transition can play
            const timer = setTimeout(() => setIsVisible(true), 10);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300); // Wait for animation
            return () => clearTimeout(timer);
        }
    }, [isCreateModalOpen]);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-50 md:hidden flex flex-col justify-end transition-opacity duration-300 ${isCreateModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"
                onClick={closeCreateModal}
            ></div>
            <div className={`relative w-full bg-white dark:bg-surface-dark rounded-t-[32px] overflow-hidden pb-8 transition-transform duration-300 ${isCreateModalOpen ? "translate-y-0" : "translate-y-full"}`}>
                <div className="w-full flex justify-center pt-3 pb-2">
                    <div className="w-10 h-1 bg-gray-300 dark:bg-gray-600 rounded-full opacity-50"></div>
                </div>
                <div className="px-6 pt-2">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Create</h2>
                        <button
                            onClick={closeCreateModal}
                            className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400"
                        >
                            <span className="material-symbols-outlined text-xl">close</span>
                        </button>
                    </div>
                    <button className="w-full flex items-center gap-4 p-4 mb-6 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 active:scale-95 transition-transform group border border-indigo-100 dark:border-indigo-500/20">
                        <div className="w-12 h-12 rounded-xl bg-indigo-500 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30">
                            <span className="material-symbols-outlined text-2xl">person_add</span>
                        </div>
                        <div className="flex-1 text-left">
                            <span className="block text-lg font-bold text-gray-900 dark:text-white">Create Character</span>
                            <span className="block text-xs text-gray-500 dark:text-gray-400 mt-0.5">Design a new AI companion</span>
                        </div>
                        <span className="material-symbols-outlined text-gray-400">chevron_right</span>
                    </button>
                    <div className="mb-3">
                        <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Tools</h3>
                    </div>
                    <div className="space-y-2">
                        <Link
                            href="/ai-image-generator"
                            onClick={closeCreateModal}
                            className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 active:bg-gray-100 dark:active:bg-white/10 transition-colors text-left group"
                        >
                            <div className="w-10 h-10 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400">
                                <span className="material-symbols-outlined">image</span>
                            </div>
                            <span className="flex-1 text-base font-medium text-gray-900 dark:text-gray-100">AI Image Generator</span>
                        </Link>
                        <button className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 active:bg-gray-100 dark:active:bg-white/10 transition-colors text-left group">
                            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                <span className="material-symbols-outlined">movie</span>
                            </div>
                            <div className="flex-1 flex items-center gap-2">
                                <span className="text-base font-medium text-gray-900 dark:text-gray-100">AI Video Generator</span>
                                <span className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-[10px] font-bold text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">COMING SOON</span>
                            </div>
                        </button>
                        <button className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 active:bg-gray-100 dark:active:bg-white/10 transition-colors text-left group">
                            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                                <span className="material-symbols-outlined">auto_stories</span>
                            </div>
                            <span className="flex-1 text-base font-medium text-gray-900 dark:text-gray-100">Story Generator</span>
                        </button>
                        <button className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 active:bg-gray-100 dark:active:bg-white/10 transition-colors text-left group">
                            <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                                <span className="material-symbols-outlined">view_quilt</span>
                            </div>
                            <span className="flex-1 text-base font-medium text-gray-900 dark:text-gray-100">Comic Generator</span>
                        </button>
                    </div>
                    <div className="h-8"></div>
                </div>
            </div>
        </div>
    );
}
