"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, PlusCircle, MessageSquare, Flame, Search, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navItems = [
    { name: "Stories", href: "/", icon: Home },
    { name: "Explore", href: "/explore", icon: Compass },
    { name: "Create Character", href: "/create", icon: PlusCircle },
    { name: "Create a Post", href: "/post", icon: MessageSquare },
];

export function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-sidebar rounded-md text-foreground"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar Container */}
            <aside
                className={cn(
                    "fixed top-0 left-0 z-40 h-screen w-64 bg-sidebar border-r border-white/10 transition-transform duration-300 ease-in-out lg:translate-x-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex flex-col h-full p-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-8 px-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold text-white">
                            W
                        </div>
                        <span className="text-xl font-bold tracking-tight">wsup.ai</span>
                    </div>

                    {/* Search */}
                    <div className="relative mb-6">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-card text-sm text-foreground pl-9 pr-4 py-2 rounded-full border border-white/10 focus:outline-none focus:border-primary/50"
                        />
                    </div>

                    {/* Spicy Toggle */}
                    <div className="flex items-center justify-between bg-card p-3 rounded-xl mb-6 border border-white/5">
                        <div className="flex items-center gap-2">
                            <Flame className="w-5 h-5 text-orange-500" />
                            <span className="font-medium">Spicy</span>
                        </div>
                        <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/10">
                            <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav className="space-y-1 flex-1">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-white/10 text-white"
                                            : "text-muted hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    <Icon className="w-5 h-5" />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Recent Chats Stub */}
                    <div className="mt-6 mb-6">
                        <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-3 px-2">
                            Recent Chats
                        </h3>
                        <div className="space-y-1">
                            <button className="w-full text-left px-3 py-2 text-sm text-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                Group Chat
                            </button>
                        </div>
                    </div>

                    {/* Footer Links */}
                    <div className="mt-auto pt-4 border-t border-white/10 text-xs text-muted flex flex-col gap-2">
                        <div className="flex gap-3">
                            <Link href="#" className="hover:text-white">Privacy Policy</Link>
                            <Link href="#" className="hover:text-white">Terms of use</Link>
                        </div>
                        <p>© 2024 wsup.ai</p>
                    </div>
                </div>
            </aside>
        </>
    );
}
