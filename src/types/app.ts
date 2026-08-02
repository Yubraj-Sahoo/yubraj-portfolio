/**
 * Represents application information.
 *
 * Used across Navbar, Hero, Footer and SEO.
 *
 * @author Yubraj Sahoo
 */
export interface AppInfo {
    /** Greeting message */
    greetings: string;

    /** Portfolio owner name */
    name: string;

    /** Application logo */
    logo: string;

    /** Professional title */
    role: string;

    /** Short introduction */
    tagline: string;

    /** Number of years of experience */
    experience: string;

    /** avatar */
    avatar: string;

    /** Primary email */
    email: string;

    /** Contact phone number */
    phone: string;

    /** Current location */
    location: string;

    /** Resume download URL */
    resumeUrl: string;

    /** Portfolio base URL */
    website: string;

    /** Footer copyright text */
    copyright: string;
}