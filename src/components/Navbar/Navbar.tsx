import {useState, useEffect} from "react";
import {Logo} from "./Logo";
import {NavItem} from "./NavItem";
import {NAV_LINKS} from "../../data";
import MobileNav from "./MobileNav";

import "./Navbar.css";
import {Button} from "../common/Button";

/**
 * Navbar component for portfolio
 *
 * @constructor
 * @author Yubraj Sahoo
 */
const Navbar = () => {
    const [activeNavItem, setActiveNavItem] = useState("home");
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav className={`navbar fixed-top nav-color app-components`}>
            <div className={`container-fluid navbar-pad`}>
                {isMobile ? (
                    <MobileNav />
                ) : (
                    <>
                        <Logo onClick={() => setActiveNavItem("home")} />
                        <ul className={`navbar-nav flex-row gap-4 ms-auto navbar-pad`}>
                            {NAV_LINKS.map((item) => (
                                <NavItem
                                    key={item.id}
                                    item={item}
                                    active={activeNavItem === item.id}
                                    onClick={() => setActiveNavItem(item.id)}
                                />
                            ))}
                            <Button key={`hire`} variant={`primary`} size={`sm`} radius={`circle-1`} href="#hire">
                                Hire Me
                            </Button>
                        </ul>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;