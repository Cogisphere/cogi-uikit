import React, { Component, ReactNode } from "react";
import "./AppFrame.css";

export interface AppFrameProps {

    /**
     *  A ReactNode to insert into the top part of the AppFrame.
     */
    top?: ReactNode;

    /**
     *  A ReactNode to insert into the bottom part of the AppFrame.
     */
    bottom?: ReactNode;
    
    /**
     *  The content of the AppFrame.
     */
    children?: ReactNode;
};

export function AppFrame({ top, bottom, children }: AppFrameProps) {
    return (
        <div className="cogi-uikit-appframe">
            {top && (<div className="cogi-uikit-appframe-top">{top}</div>)}
            {children}
            {bottom && (<div className="cogi-uikit-appframe-bottom">{bottom}</div>)}
        </div>
    );
};