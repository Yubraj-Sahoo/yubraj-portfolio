import type {IconType} from "react-icons";

/**
 * Props for the Icon component.
 *
 * @author Yubraj Sahoo
 */
export interface IconProps {
    icon: IconType,
    label?: string,
    size?: number | string;
    color?: string;
    className?: string;
    onClick?: () => void;
}