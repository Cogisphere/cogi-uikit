import React from "react";
import { Icon, IconsName } from "../Icon";
import "./ContextualControlsItem.css";

export interface ContextualControlsItemProps {
    
    /**
     *  The label of the control.
     */
    label?: string;

    /**
     *  An icon that should be shown as the item.
     */
    icon?: IconsName;

    /**
     *  A callback to call when user clicks the item.
     */
    onClick?: () => void;
};

export function ContextualControlsItem({label, icon, onClick }: ContextualControlsItemProps) {
    return (
        <button className="cogi-uikit-contextualcontrols-item" onClick={onClick}>
            {icon && (<Icon which={icon} />)}
            {label && (<span>{label}</span>)}
        </button>
    );
};