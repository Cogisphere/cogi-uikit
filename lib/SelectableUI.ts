/**
 *  This is an interface descriging a UI part that is selectable.
 */
export interface SelectableUIProps {
    
    /**
     *  Should the component be selected on the momenent of instantiation?
     */
    selected?: boolean;
    
    /**
     *  Is the component currently selectable?
     */
    selectable?: boolean;

    /**
     *  A callback called when user wants to select the component.
     */
    onSelected?: () => void;
    
    /**
     *  A callback called when user wants to deselect the component.
     */
    onDeselected?: () => void;
};