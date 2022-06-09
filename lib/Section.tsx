import { ReactNode } from "react";

export interface SectionProps {
    children: ReactNode;
};

export default function Section({ children } : SectionProps) {

    return (
        <section className="cogi-uikit-section">
            {children}
        </section>
    );
};