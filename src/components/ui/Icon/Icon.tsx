import type {IconProps} from "./IconProps";

/**
 * Reusable Icon component.
 *
 * @author Yubraj Sahoo
 */
export const Icon = ({
                         icon: IconComponent,
                         size = 24,
                         color = "currentColor",
                         className = "",
                         label,
                         onClick,
                     }: IconProps) => (
    <IconComponent
        size={size}
        color={color}
        className={className}
        aria-label={label}
        title={label}
        role={onClick ? "button" : "img"}
        tabIndex={onClick ? 0 : undefined}
        onClick={onClick}
    />
);
