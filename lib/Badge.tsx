import React from "react";
import css from "./Badge.module.css";
/**
 *  A small component to show a badge with text.
 */
export default function Badge(props: BadgeProps) {
    return (
        <span className={css.badge}>{props.label}</span>
    );
};

export interface BadgeProps {
    label: string;
};
