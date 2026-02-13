import Image from "next/image";
import { MessageCircle } from "lucide-react";

const FEATURED_ITEMS = [
    {
        id: 1,
        title: "the new girl",
        subtitle: "Leonardo, Vol. 1",
        imageUrl: "https://placehold.co/300x150/2a2a2a/FFF?text=New+Girl",
        icon: "message",
    },
    {
        id: 2,
        title: "Chris",
        subtitle: "Chris Van inherited...",
        imageUrl: "https://placehold.co/300x150/1a3a3a/FFF?text=Chris",
        icon: "chat",
    },
];

export function FeaturedSection() {
    return (
        <div className="mb-6">
            <h2 className="text-xs font-bold text-muted uppercase tracking-wider mb-3 px-4">
                Featured
            </h2>
            <div className="flex gap-4 overflow-x-auto px-4 pb-4 no-scrollbar snap-x">
                {FEATURED_ITEMS.map((item) => (
                    <div
                        key={item.id}
                        className="flex-none w-[280px] h-[80px] bg-card rounded-full border border-white/10 flex items-center overflow-hidden snap-center relative"
                    >
                        {/* Image Side */}
                        <div className="relative w-20 h-full">
                            <Image
                                src={item.imageUrl}
                                alt={item.title}
                                fill
                                className="object-cover"
                            />
                            {/* Icon Badge */}
                            <div className="absolute bottom-1 right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center border-2 border-card">
                                <MessageCircle className="w-3 h-3 text-white" />
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="flex-1 px-4 pr-6 min-w-0">
                            <h3 className="font-bold text-white truncate">{item.title}</h3>
                            <p className="text-xs text-muted truncate">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
