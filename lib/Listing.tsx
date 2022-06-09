import { ReactNode } from "react";
import "./Listing.css";

export interface ListingProps {
    children: ReactNode;
};

export default function Listing(props:ListingProps) {
    return (
        <div className="cogi-uikit-listing">
            {props.children}
        </div>
    );
};