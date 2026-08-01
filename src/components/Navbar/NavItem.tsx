import type {NavLink} from "../../types/navbar";

/**
 * Props for NavItem
 *
 * @author Yubraj Sahoo
 */
interface Props {
    item: NavLink;
    active: boolean;
    onClick: () => void;
}

/**
 * Nav bar item for Navbar portfolio.
 *
 * @param param0 the key
 * @param param0.item the NavLink
 * @param param0.active is nav item active
 * @param param0.onClick on click for nav item
 * @constructor
 *
 * @author Yubraj Sahoo
 */
export const NavItem = ({item, active, onClick}: Props) => {
    return (
        <li className="nav-item">
            <a
                href={item.href}
                onClick={onClick}
                className={`nav-link ${active ? "active" : ""}`}
                aria-current={active ? "page" : undefined}
            >
                {item.label}
            </a>
        </li>
    );
};