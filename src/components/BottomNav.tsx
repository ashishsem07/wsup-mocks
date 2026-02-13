"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUI } from "@/context/UIContext";

export function BottomNav() {
    const pathname = usePathname();
    const { openCreateModal } = useUI();

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 flex justify-between px-6 py-2 z-30 pb-safe">
            <Link href="/" className={`flex flex-col items-center gap-1.5 p-1 transition-colors w-16 ${pathname === '/' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                <span className={`material-symbols-outlined text-[28px] font-light ${pathname === '/' ? 'fill-1' : ''}`}>view_stream</span>
                <span className="text-[10px] font-medium tracking-wide">Stories</span>
            </Link>
            <Link href="/explore" className={`flex flex-col items-center gap-1.5 p-1 transition-colors w-16 ${pathname === '/explore' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                <span className={`material-symbols-outlined text-[28px] font-light ${pathname === '/explore' ? 'fill-1' : ''}`}>auto_awesome</span>
                <span className="text-[10px] font-medium tracking-wide">Explore</span>
            </Link>
            <button
                onClick={openCreateModal}
                className="flex flex-col items-center gap-1.5 p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors w-16"
            >
                <span className="material-symbols-outlined text-[28px] font-light">add_circle</span>
                <span className="text-[10px] font-medium tracking-wide">Create</span>
            </button>
            <Link href="/chats" className={`flex flex-col items-center gap-1.5 p-1 transition-colors w-16 ${pathname === '/chats' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                <span className={`material-symbols-outlined text-[28px] font-light ${pathname === '/chats' ? 'fill-1' : ''}`}>chat_bubble</span>
                <span className="text-[10px] font-medium tracking-wide">Chats</span>
            </Link>
            <Link href="/profile" className={`flex flex-col items-center gap-1.5 p-1 transition-colors w-16 ${pathname === '/profile' ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                <span className={`material-symbols-outlined text-[28px] font-light ${pathname === '/profile' ? 'fill-1' : ''}`}>account_circle</span>
                <span className="text-[10px] font-medium tracking-wide">Profile</span>
            </Link>
        </div>
    );
}
