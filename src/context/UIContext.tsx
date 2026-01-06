"use client";

import React, { createContext, useContext, useState } from "react";

interface UIContextType {
    isCreateModalOpen: boolean;
    openCreateModal: () => void;
    closeCreateModal: () => void;
    toggleCreateModal: () => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: React.ReactNode }) {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const openCreateModal = () => setIsCreateModalOpen(true);
    const closeCreateModal = () => setIsCreateModalOpen(false);
    const toggleCreateModal = () => setIsCreateModalOpen((prev) => !prev);

    return (
        <UIContext.Provider
            value={{
                isCreateModalOpen,
                openCreateModal,
                closeCreateModal,
                toggleCreateModal,
            }}
        >
            {children}
        </UIContext.Provider>
    );
}

export function useUI() {
    const context = useContext(UIContext);
    if (context === undefined) {
        throw new Error("useUI must be used within a UIProvider");
    }
    return context;
}
