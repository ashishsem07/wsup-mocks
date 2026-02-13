import { CharacterCard } from "./CharacterCard";

// Mock Data for initial display
const MOCK_CHARACTERS = [
    {
        id: 1,
        name: "Anya",
        description: "Your friendly neighbor who loves to bake and chat about daily life.",
        imageUrl: "https://placehold.co/400x600/2a2a2a/FFF?text=Anya",
        chatCount: "1.2m",
        tags: ["Friendly"],
    },
    {
        id: 2,
        name: "Cyber-X",
        description: "An advanced AI from the year 3000 sent to warn humanity.",
        imageUrl: "https://placehold.co/400x600/1a3a3a/FFF?text=Cyber-X",
        chatCount: "850k",
        tags: ["Sci-Fi"],
    },
    {
        id: 3,
        name: "Elara",
        description: "A mystical elf ranger seeking companions for a quest.",
        imageUrl: "https://placehold.co/400x600/3a1a1a/FFF?text=Elara",
        chatCount: "2.5m",
        tags: ["Fantasy"],
    },
    {
        id: 4,
        name: "Dr. Smith",
        description: "A brilliant but eccentric scientist who needs help with experiments.",
        imageUrl: "https://placehold.co/400x600/1a1a3a/FFF?text=Dr.+Smith",
        chatCount: "500k",
        tags: ["Smart"],
    },
    {
        id: 5,
        name: "Luna",
        description: "A mysterious girl who only appears at night.",
        imageUrl: "https://placehold.co/400x600/3a3a1a/FFF?text=Luna",
        chatCount: "3.1m",
        tags: ["Mystery"],
    },
    {
        id: 6,
        name: "Max",
        description: "A golden retriever who somehow learned to text.",
        imageUrl: "https://placehold.co/400x600/3a2a1a/FFF?text=Max",
        chatCount: "5.0m",
        tags: ["Cute"],
    },
    {
        id: 7,
        name: "Kael",
        description: "Demon king looking for a worthy opponent.",
        imageUrl: "https://placehold.co/400x600/4a1a1a/FFF?text=Kael",
        chatCount: "900k",
        tags: ["Villain"],
    },
    {
        id: 8,
        name: "Seraphina",
        description: "Angel of guidance.",
        imageUrl: "https://placehold.co/400x600/4a4a4a/FFF?text=Seraphina",
        chatCount: "1.1m",
        tags: ["Divine"],
    },
];

export function CharacterGrid() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
            {MOCK_CHARACTERS.map((char) => (
                <CharacterCard
                    key={char.id}
                    name={char.name}
                    description={char.description}
                    imageUrl={char.imageUrl}
                    chatCount={char.chatCount}
                    tags={char.tags}
                />
            ))}
            {/* Duplicate for visual volume */}
            {MOCK_CHARACTERS.map((char) => (
                <CharacterCard
                    key={`${char.id}-duplicate`}
                    name={char.name}
                    description={char.description}
                    imageUrl={char.imageUrl}
                    chatCount={char.chatCount}
                    tags={char.tags}
                />
            ))}
        </div>
    );
}
