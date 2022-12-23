import React from "react";
import { Paint } from "@cogisphere/cogi-colors";
import "./PaintCard.css";

export interface PaintCardProps {
    paint: Paint;
};

/**
 *  This is a component that renders a small card with the paint
 *  color and name.
 */
export function PaintCard({ paint }: PaintCardProps) {

    return (<div className="cogi-uikit-paintcard">
        <span className="cogi-uikit-paintcard-label">{paint.name}</span>
        <div className="cogi-uikit-paintcard-color" style={{ backgroundColor: paint.color.toHex() }}></div>
    </div>);
};
