import React from "react";
import { Plus } from "./raw/Plus";
import { Cross } from "./raw/Cross";
import { IntoInventory } from "./raw/IntoInventory";
import "./Icon.css";

export const Icons = {
    "plus": Plus,
    "cross": Cross,
    "into-inventory": IntoInventory
};

export type IconsName = keyof typeof Icons;

export interface IconProps {
    which: IconsName;
};

export function Icon({ which }: IconProps) {

    const IconComponent = Icons[which];

    return (
        <IconComponent/>
    );
};