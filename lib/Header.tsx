import "./Header.css";

export interface HeaderProps {
    title: string;
    level?: 1|2|3;
};

export default function Header({ title, level }:HeaderProps) {

    const actualLevel = level || 1;

    return (<>
        {actualLevel === 1 && <h1 className="cogi-uikit-header">{title}</h1>}
        {actualLevel === 2 && <h2 className="cogi-uikit-header">{title}</h2>}
        {actualLevel === 3 && <h3 className="cogi-uikit-header">{title}</h3>}
    </>);
};