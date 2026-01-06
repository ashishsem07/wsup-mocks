import Image from "next/image";
import { MessageCircle } from "lucide-react";

interface CharacterCardProps {
    name: string;
    description: string;
    imageUrl: string;
    chatCount: string;
    tags?: string[];
}

export function CharacterCard({
    name,
    description,
    imageUrl,
    chatCount,
    tags = [],
}: CharacterCardProps) {
    return (
        <div className="group relative rounded-xl overflow-hidden bg-card border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">{name}</h3>
                    <p className="text-xs text-gray-300 line-clamp-2 mb-3">{description}</p>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-gray-400">
                            <MessageCircle className="w-3.5 h-3.5" />
                            <span>{chatCount}</span>
                        </div>
                        {tags.length > 0 && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-gray-300 border border-white/10">
                                {tags[0]}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
