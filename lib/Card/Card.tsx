import React, { ReactNode, useEffect, useState } from "react";
import { SelectableUIProps } from "../SelectableUI";
import "./Card.css";

export interface CardProps extends SelectableUIProps {

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

export function Card(props: CardProps) {

    const {
        title,
        image,
        imageAlt,
        actionTitle,
        onAction,
        selected,
        selectable,
        onSelected, 
        onDeselected,
        children
    } = props;

    const [ active, setActive ] = useState<boolean>(false);

    const onCardClick = (e:React.MouseEvent) => {

        // if the click happens in a button or similar control element, we don't
        // want to handle it as select action.
        if ((e.target as HTMLElement).closest('button, input, select, textarea')) return;

        if (active) setActive(false);
        else setActive(true);

        if (active) onDeselected?.();
        else onSelected?.();
    };

    useEffect(() => {

        if (!selectable || selected === undefined) return;

        setActive(selected);

    }, [ selected, selectable ]);

    const css = ['cogi-uikit-card' ];
    if (active) css.push('cogi-uikit-card-active');

    return (
        <div className={css.join(' ')} onClick={selectable ? onCardClick : () => {}}>
            {image && <div className={['cogi-uikit-card-image', `cogi-uikit-card-image-${props.imageSize || "medium"}`].join(' ')}>
                <img src={image} alt={imageAlt || ''}/>
            </div>}
            {title && <header>
                {title}
                {selectable && <span className="cogi-uikit-card-selector"/>}
                {actionTitle && onAction && <button onClick={() => onAction()}>{actionTitle}</button>}
            </header>}
            <div>{children}</div>
        </div> 
    );
};