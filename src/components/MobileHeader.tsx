import { Bell, Coins } from "lucide-react";
import Link from "next/link";

export function MobileHeader() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 h-14 px-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
                <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center font-bold text-white text-sm">
                    W
                </div>
                <span className="text-lg font-bold tracking-tight text-white">wsup.ai</span>
            </Link>

            {/* Right Icons */}
            <div className="flex items-center gap-3">
                <button className="p-2 text-muted hover:text-white transition-colors">
                    <Bell className="w-5 h-5" />
                </button>

                {/* Reddit Icon Stub (using a circle for now as Lucide doesn't have brand icons by default in all versions) */}
                <button className="w-8 h-8 rounded-full bg-[#FF4500] flex items-center justify-center text-white font-bold text-xs">
                    R
                </button>

                {/* Panda Icon Stub */}
                <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xl">
                    🐼
                </button>

                {/* Coins Pill */}
                <div className="flex items-center gap-1.5 bg-[#1a1a1a] border border-yellow-500/30 px-3 py-1 rounded-full">
                    <Coins className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold text-white">103</span>
                </div>
            </div>
        </header>
    );
}
