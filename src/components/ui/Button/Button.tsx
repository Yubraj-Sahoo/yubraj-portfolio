import "./Button.css";

interface ButtonProps {
    /** Content displayed inside the button */
    children: React.ReactNode;

    /** Button color variant */
    variant?: "primary" | "secondary" | "ghost";

    /** Border radius style */
    radius?: "rectangular" | "circle-1" | "circle-2" | "circle-3";

    /** Displays the button as an outlined variant */
    outlined?: boolean;

    /** Button size */
    size?: "sm" | "md" | "lg";

    /** Converts the button into an anchor element */
    href?: string;

    /** Button type */
    type?: "button" | "submit" | "reset";

    /** Disables the button */
    disabled?: boolean;

    /** Target attribute for anchor */
    target?: "_blank" | "_self";

    /** Rel attribute for anchor */
    rel?: string;

    /** Additional CSS classes */
    className?: string;

    /** Click event handler */
    onClick?: () => void;
}

/**
 * Reusable Button component.
 *
 * Features:
 * - Supports button and anchor rendering.
 * - Multiple color variants.
 * - Optional outlined style.
 * - Three sizes.
 * - Three border radius options.
 * - Fully customizable through CSS classes.
 *
 * @example
 * <Button>Primary</Button>
 *
 * @example
 * <Button variant="secondary">
 *     Secondary
 * </Button>
 *
 * @example
 * <Button outlined>
 *     Outlined
 * </Button>
 *
 * @example
 * <Button
 *     href="https://github.com"
 *     target="_blank"
 * >
 *     GitHub
 * </Button>
 */
export const Button = ({
                           children,
                           variant = "primary",
                           radius = "rectangular",
                           outlined = false,
                           size = "md",
                           href,
                           type = "button",
                           disabled = false,
                           target,
                           rel,
                           className = "",
                           onClick,
                       }: ButtonProps) => {
    const classes = [
        "app-btn",
        `app-btn-${variant}`,
        `app-btn-${size}`,
        `app-btn-radius-${radius}`,
        outlined && "app-btn-outlined",
        className,
    ]
        .filter(Boolean)
        .join(" ");

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                target={target}
                rel={rel}
                onClick={onClick}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            className={classes}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
};