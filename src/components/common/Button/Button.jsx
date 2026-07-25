import "./Button.css";

export const Button = ({
                           children,
                           href,
                           onClick,
                           type = "button",
                           variant = "primary",
                           size = "md",
                           textSize = "md",
                           disabled = false,
                           target,
                           rel,
                           className = "",
                       }) => {

    const buttonClass = `
        custom-btn
        custom-btn-${variant}
        custom-btn-${size}
        text-${textSize}
        ${className}
    `.trim();

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={buttonClass}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={buttonClass}
        >
            {children}
        </button>
    );
};