import React from "react";
import { Paint } from "@cogisphere/cogi-colors";
import "./PaintCard.css";

export interface PaintCardProps {

    /**
     *  The paint to show.
     */
    paint: Paint;

    /**
     *  A possible controls that can be overlaid over the paint card.
     */
    controls: React.ReactNode;
};

/**
 *  This is a component that renders a small card with the paint
 *  color and name.
 */
export function PaintCard({ paint, controls }: PaintCardProps) {

    return (<div className="cogi-uikit-paintcard">
        <span className="cogi-uikit-paintcard-label">{paint.name}</span>
        <div className="cogi-uikit-paintcard-color" style={{ backgroundColor: paint.color.toHex() }}>
            {controls && (<div className="cogi-uikit-paintcard-controls">{controls}</div>)}
        </div>
    </div>);
};
