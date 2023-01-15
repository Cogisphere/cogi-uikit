import React from "react";

export interface SwatchControlsProps {

    /**
     *  When the controls should be removed.
     */
    onRemove: () => void;
};

/**
 *  This is a component that should be rendered on top of a swatch
 *  color to display controls.
 */
export function SwatchControls({ onRemove }: SwatchControlsProps) {

    return (
        <div>
            <button onClick={() => onRemove() }>&times;</button>
        </div>
    );
};