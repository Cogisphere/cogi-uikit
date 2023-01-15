import React from "react";
import { Color, Paint } from "@cogisphere/cogi-colors";
import "./SwatchColor.css";

export interface SwatchColorProps {

    /**
     *  The color or paint that should be represented in
     *  the swatch color.
     */
    color: Color | Paint;

    /**
     *  Optional react node that acts as controls of the
     *  swatch color.
     */
    controls?: React.ReactNode;
};

/**
 *  This is a component describing a color inside
 *  a Swatch component.
 */
export function SwatchColor({ controls, color }: SwatchColorProps) {

    const actualColor = color instanceof Color ? color : color.color;
        
    return (
        <div className="cogi-uikit-swatchcolor">
            <div className="cogi-uikit-swatchcolor-color" style={{ backgroundColor: actualColor.toHex() }}></div>
            {controls && (<div className="cogi-uikit-swatchcolor-controls">{controls}</div>)}
        </div>
    );
};