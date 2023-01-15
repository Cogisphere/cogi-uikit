import React from "react";
import { Paint } from "@cogisphere/cogi-colors";
import "./PaintCard.css";

export interface PaintCardProps {

    /**
     *  The paint to show.
     */
    paint: Paint;

    /**
     *  A callback triggered when user clicks on a paint card.
     */
    onClick?: (paint: Paint) => void;
};

/**
 *  This is a component that renders a small card with the paint
 *  color and name.
 */
export function PaintCard({ paint, onClick }: PaintCardProps) {

    return (<div className="cogi-uikit-paintcard" onClick={() => onClick?.(paint) }>
        <span className="cogi-uikit-paintcard-label">{paint.name}</span>
        <div className="cogi-uikit-paintcard-color" style={{ backgroundColor: paint.color.toHex() }}></div>
    </div>);
};
