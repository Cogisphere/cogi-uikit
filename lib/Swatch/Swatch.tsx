import React from "react";
import { Color, Paint } from "@cogisphere/cogi-colors";
import { SwatchColor } from "./SwatchColor";
import "./Swatch.css";

export interface SwatchProps {

    /**
     *  The colors that should be shown in the swatch.
     */
    colors: Iterable<Paint|Color>;
};

export function Swatch({ colors }: SwatchProps) {
    return (
        <div className="cogi-uikit-swatch">
            {[...colors].map((c: Color | Paint, idx: number) => (<SwatchColor key={idx} color={c}/>))}
        </div>
    );
};