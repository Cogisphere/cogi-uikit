import { Color } from "Color";
import React from "react";
import "./Badge.css";
/**
 *  A small component to show a badge with text inside. The badge can be used to
 *  create a tag, indicate some kind of status, or counter.
 */
export default function Badge(props: BadgeProps) {

    const styles = [
        "cogi-uikit-badge",
        `cogi-uikit-badge-color-${props.color || 'dark'}`
    ];

    return (
        <span className={styles.join(' ')}>{props.label}</span>
    );
};

export interface BadgeProps {
    label: string;
    color?: Color;
};
