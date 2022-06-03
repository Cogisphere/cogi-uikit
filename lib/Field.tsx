import { ReactNode } from "react";
import "./Field.css";

/**
 *  A component which exposes a field. Most fields would be used inside
 *  forms, but it might be also used in other places.
 */

export interface FieldProps {
    label?: string;
    children: ReactNode;
};

export default function Field(props: FieldProps) {
    return (
        <div className="cogi-uikit-field">
            {props.label && <label>{props.label}</label>}
            {props.children}
        </div> 
    );
};