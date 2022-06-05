export interface SelectableUIProps {
    selected?: boolean;
    selectable?: boolean;
    onSelected?: () => void;
    onDeselected?: () => void;
};