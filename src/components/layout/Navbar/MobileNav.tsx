import {useState} from "react";
import {APP_INFO, NAV_LINKS} from "../../../data";
import {Logo} from "./Logo";
import {GiHamburgerMenu} from "react-icons/gi";
import {AiOutlineClose} from "react-icons/ai";
import {Button} from "../../ui";

interface MobileNavProps {
    activeNavItem?: string;
    onActiveNavItemChange?: (itemId: string) => void;
}

const MobileNav = ({activeNavItem: controlledActiveNavItem, onActiveNavItemChange}: MobileNavProps) => {
    const [open, setOpen] = useState(false);
    const [internalActiveNavItem, setInternalActiveNavItem] = useState("home");
    const activeNavItem = controlledActiveNavItem ?? internalActiveNavItem;

    const setActiveNavItem = (itemId: string) => {
        setInternalActiveNavItem(itemId);
        onActiveNavItemChange?.(itemId);
    };

    const hamburgerIcon = (
        <GiHamburgerMenu
            className="hamburger"
            size="30px"
            onClick={() => setOpen(!open)}
        />
    );

    const closeIcon = (
        <AiOutlineClose
            className="hamburger"
            size="30px"
            onClick={() => setOpen(!open)}
        />
    );

    const handleLinkClick = (itemId: string) => {
        setActiveNavItem(itemId);
        setOpen(false);
    };

    const handleHireMeClick = () => {
        setOpen(false);
    };

    return (
        <div className="mobile-nav">
            <Logo onClick={() => setActiveNavItem("home")}/>
            {open ? closeIcon : hamburgerIcon}
            <ul className={`mobile-nav-links ${open ? "open" : ""}`}>
                {NAV_LINKS.map((item) => (
                    <li key={item.id}>
                        <a
                            href={item.href}
                            className={activeNavItem === item.id ? "active" : ""}
                            onClick={() => handleLinkClick(item.id)}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
                {APP_INFO.config.showHireButton && (
                    <Button key={`hire-mobile`} variant={`primary`} size={`sm`} radius={`circle-1`} href="#hire"
                            onClick={handleHireMeClick}>
                        Hire Me
                    </Button>
                )}
            </ul>
        </div>
    );
};

export default MobileNav;
