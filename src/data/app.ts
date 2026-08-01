import type {AppInfo} from "../types/app";
import logo from "../../public/favicon.png";

/**
 * Application information.
 *
 * Shared across the portfolio application.
 *
 * @author Yubraj Sahoo
 */
export const APP_INFO: AppInfo = {
    name: "Yubraj Sahoo",
    logo,
    role: "Full Stack Java Developer",

    tagline:
        "I build scalable, reliable and user-friendly web applications using modern technologies.",

    experience: "3+ Years of Experience",

    email: "yubraj2000yubraj@gmail.com",

    phone: "+91 6370119126",

    location: "Odisha, India",

    resumeUrl: "/resume.pdf",

    website: "https://yubrajsahoo.dev",

    copyright: `© ${new Date().getFullYear()} Yubraj Sahoo. All rights reserved.`,
};