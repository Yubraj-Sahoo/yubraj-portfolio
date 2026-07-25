import {useState} from "react";
import {Logo} from "./Logo.jsx";
import {NavbarLink} from "./NavbarLink.jsx";
import {NAVBAR_ITEMS} from "../../constants/navbar-items.js";
import "./Navbar.css";
import {Button} from "../common/index.js";

export const Navbar = () => {
    const [activeItem, setActiveItem] = useState(
        NAVBAR_ITEMS[0].name
    );

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (item) => {
        setActiveItem(item.name);
        setIsOpen(false);
    };

    return (
        <nav
            className="
                navbar
                navbar-expand-lg
                fixed-top
                bg-navbar
                shadow
                py-2
            "
        >
            <div className="container">

                <Logo/>

                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
                >
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

                        {NAVBAR_ITEMS
                            .filter(value => value.isEnabled)
                            .map((item) => (
                            <NavbarLink
                                key={item.name}
                                {...item}
                                active={activeItem === item.name}
                                onClick={() => handleClick(item)}
                            />
                        ))}

                        <li className="nav-item mt-3 mt-lg-0 w-100 w-lg-auto">
                            <Button
                                variant="primary"
                                href="#hire"
                                size="sm"
                                textSize="sm"
                            >
                                Hire Me
                            </Button>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
    );
};