import React from "react";
import classes from "./Badge.module.css";
/**
 *  A small component to show a badge with text.
 */
export default function Badge(props: BadgeProps) {
    return (
        <span className={classes.root}>{props.label}</span>
    );
};

export interface BadgeProps {
    label: string;
};
