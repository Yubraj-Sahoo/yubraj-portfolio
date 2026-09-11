import type {NavLink} from "./types";
import {APP_INFO} from "../app";

export const NAV_LINKS: NavLink[] = [
    ...(APP_INFO.config.enableHero ? [{
        id: "home",
        label: "Home",
        href: "#home"
    }] : []),
    ...(APP_INFO.config.enableAbout ? [{
        id: "about",
        label: "About",
        href: "#about",
    }] : []),
    ...(APP_INFO.config.enableSkills ? [{
        id: "skills",
        label: "Skills",
        href: "#skills",
    }] : []),
    ...(APP_INFO.config.enableExperience ? [{
        id: "experience",
        label: "Experience",
        href: "#experience",
    }] : []),
    ...(APP_INFO.config.enableProjects ? [{
        id: "projects",
        label: "Projects",
        href: "#projects",
    }] : []),
    ...(APP_INFO.config.enableContact ? [{
        id: "contact",
        label: "Contact",
        href: "#contact",
    }] : []),
];
