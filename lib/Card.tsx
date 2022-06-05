import { ReactNode } from "react";
import "./Card.css";

export interface CardProps {

    /**
     *  The title of the card. It will be placed on the top of the card.
     */
    title?: string;

    /**
     *  When a title is placed it's possible to configure a primary action
     *  of the card. To do this it's needed to configure an action title
     *  and onAction callback which is executed when the action is clicked
     *  by the user.
     */
    onAction?: () => void;
    actionTitle?: string;

    /**
     *  Cards can have images mounted inside. When an image property
     *  is provided it will render the image inside the card and it's
     *  possible to configure the image with an alt text and predefined
     *  size.
     */
    image?: string;
    imageAlt?: string;
    imageSize?: "small"|"medium"|"large";

    /**
     *  Children are placed inside the card content area.
     */
    children: ReactNode;
};

export default function Card(props: CardProps) {

    const {
        title,
        image,
        imageAlt,
        actionTitle,
        onAction,
        children
    } = props;

    return (
        <div className="cogi-uikit-card">
            {image && <div className={['cogi-uikit-card-image', `cogi-uikit-card-image-${props.imageSize || "medium"}`].join(' ')}>
                <img src={image} alt={imageAlt || ''}/>
            </div>}
            {title && <header>
                {title}
                {actionTitle && onAction && <button onClick={() => onAction()}>{actionTitle}</button>}
            </header>}
            <div>{children}</div>
        </div> 
    );
};