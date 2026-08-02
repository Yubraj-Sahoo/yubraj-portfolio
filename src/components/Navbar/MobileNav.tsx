import { useState } from "react";
import { NAV_LINKS } from "../../data";
import { Logo } from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../common/Button";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home");

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
      <Logo onClick={() => setActiveNavItem("home")} />
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
        <Button key={`hire-mobile`} variant={`primary`} size={`sm`} radius={`circle-1`} href="#hire" onClick={handleHireMeClick}>
          Hire Me
        </Button>
      </ul>
    </div>
  );
};

export default MobileNav;