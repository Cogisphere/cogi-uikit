import React from "react";
import { Color, Paint } from "@cogisphere/cogi-colors";
import { SwatchColor } from "./SwatchColor";
import { SwatchControls } from "./SwatchControls";
import "./Swatch.css";

export interface SwatchProps {

    /**
     *  The colors that should be shown in the swatch.
     */
    colors: Iterable<Paint|Color>;

    /**
     *  Should swatch controls be displayed on each swatch color?
     */
    controls?: boolean;

    /**
     *  A callback called when user wants to remove a specific
     *  color.
     */
    onRemove?: (target: Color|Paint) => void;
};

export function Swatch({ colors, onRemove, controls = false }: SwatchProps) {
    return (
        <div className="cogi-uikit-swatch">
            {[...colors].map((c: Color | Paint, idx: number) => {

                const control = controls ? (<SwatchControls onRemove={() => void onRemove?.(c)}/>) : null;
                
                return (<SwatchColor key={idx} color={c} controls={control}/>);
            })}
        </div>
    );
};