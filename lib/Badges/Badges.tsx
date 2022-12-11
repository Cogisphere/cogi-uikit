import React from "react";
import { Badge, BadgeProps } from "../Badge";

export interface BadgesProps {
    badges: BadgeProps[];
};

export function Badges(props: BadgesProps) {
    return (
        <div className="cogi-uikit-badges">{props.badges.map((badgeProps: BadgeProps, idx: number) => (
            <Badge key={idx} {...badgeProps}/>
        ))}</div>
    )
};