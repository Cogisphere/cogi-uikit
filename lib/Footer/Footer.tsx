import React, { ReactNode } from "react";
import "./Footer.css";

export interface FooterProps {
    children?: ReactNode;
};

export function Footer({children}: FooterProps) {
    return (
        <footer className="cogi-uikit-footer uikit-styles-interlace">
            {children}
        </footer>
    );
};