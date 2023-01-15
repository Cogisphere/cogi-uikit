import React from "react";
import "./Shelf.css";

export interface ShelfProps {
    children: React.ReactNode;
};

/**
 *  This is a component that renderes a container at the bottom of the position
 *  parent and always stays visible to the user.
 */
export function Shelf({ children } : ShelfProps) {
    return (
        <div className="cogi-uikit-shelf">
            {children}
        </div>
    );
};