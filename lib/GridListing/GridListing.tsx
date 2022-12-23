import React from "react";
import { ReactNode } from "react";
import "./GridListing.css";

export interface GridListingProps {

    children: ReactNode;
};

/**
 *  This is a component that creates a listing where all elements
 *  are placed inside a grid.
 */
export function GridListing({ children }: GridListingProps) {

    return (
        <div className="cogi-uikit-gridlisting">
            {children}
        </div>
    );
};