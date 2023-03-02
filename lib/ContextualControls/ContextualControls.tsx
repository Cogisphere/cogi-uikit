import React from "react";
import { ContextualControlsItem, ContextualControlsItemProps } from "./ContextualControlsItem";
import "./ContextualControls.css";

export interface ContextualControlsProps {

    /**
     *  The items that should be rendered in the controls.
     */
    items: ContextualControlsItemProps[];
};

/**
 *  This is a component that renders small controls that can be mounted
 *  in different `controls` properties of different components. These
 *  controls are meant to be compact and provide management over the component
 *  it is rendered over.
 */
export function ContextualControls({ items }: ContextualControlsProps) {
    return (<div className="cogi-uikit-contextualcontrols">
        {items.map(props => (<ContextualControlsItem {...props}/>))}
    </div>);
};