/**
 * Represents application information.
 *
 * Used across Navbar, Hero, Footer and SEO.
 *
 * @author Yubraj Sahoo
 */
export interface AppInfo {
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