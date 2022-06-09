import "./WingNavigation.css";

export interface NavigationItem {
    label: string;
    onClick?: () => void;
};

export interface WingNavigationProps {
    left?: NavigationItem[];
    right?: NavigationItem[];
};

function Link(item:NavigationItem) {
    return (
        <div
            className="cogi-uikit-wingnavigation-link"
            onClick={() => item.onClick?.()}
        >
            {item.label}
        </div>
    )
};

function NavigationWing({ items, type } : { items: NavigationItem[], type:'left'|'right' }) {

    return (
        <div className={`cogi-uikit-wingnavigation-wing cogi-uikit-wingnavigation-wing-${type}`}>
            {items.map((itemProps, index) => <Link key={index} {...itemProps}/>)}
        </div>
    );
};

function NavigationCenter() {
    return (
        <div className="cogi-uikit-wingnavigation-center">
            #CogiSphere::
        </div> 
    );
};

export default function WingNavigation(props: WingNavigationProps) {
    return (
        <nav className="cogi-uikit-wingnavigation">
            <NavigationWing type="left" items={props.left || []}/>
            <NavigationCenter/>
            <NavigationWing type="right" items={props.right || []}/>
        </nav> 
    );
};