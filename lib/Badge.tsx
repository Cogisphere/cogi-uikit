import React from "react";
import "./Badge.css";
/**
 *  A small component to show a badge with text.
 */
export default function Badge(props: BadgeProps) {
    return (
        <span className="cogi-uikit-badge">{props.label}</span>
    );
};

export interface BadgeProps {
    label: string;
};
