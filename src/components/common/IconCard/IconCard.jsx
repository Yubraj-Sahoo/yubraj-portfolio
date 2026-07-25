import "./IconCard.css";

export const IconCard = ({
                             icon: Icon,
                             title,
                             href,
                             className = "",
                             size = 30,
                         }) => {

    const content = (
        <div
            className={`icon-card ${className}`}
            title={title}
        >
            <Icon
                size={size}
                className="icon-card__icon"
            />
        </div>
    );

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={title}
                className="text-decoration-none"
            >
                {content}
            </a>
        );
    }

    return content;
};