import { ReactNode } from "react";
import "./Card.css";

export interface CardProps {
    title?: string;
    children: ReactNode;
};

export default function Card({ title, children }: CardProps) {

    return (
        <div className="cogi-uikit-card">
            {title && <header>{title}</header>}
            <div>{children}</div>
        </div> 
    );
};