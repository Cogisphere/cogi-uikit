import { ReactNode } from "react";
import "./AppFrame.css";

export interface AppFrameProps {
    children?: ReactNode;
};

export function AppFrame({ children }: AppFrameProps) {
    return (<div className="cogi-uikit-appframe">
        {children}
    </div>);
};