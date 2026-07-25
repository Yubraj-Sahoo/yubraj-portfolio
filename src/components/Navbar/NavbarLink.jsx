export const NavbarLink = ({
                            name,
                            endPoint,
                            active,
                            onClick,
                        }) => {
    return (
        <li className="nav-item">
            <a
                href={endPoint}
                onClick={onClick}
                className={`nav-link ${
                    active
                        ? "active-nav-link"
                        : "text-white"
                }`}
            >
                {name}
            </a>
        </li>
    );
};