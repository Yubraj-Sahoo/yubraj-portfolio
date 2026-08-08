/**
 * Represents application information.
 *
 * Used across Navbar, Hero, Footer and SEO.
 *
 * @author Yubraj Sahoo
 */
export interface AppInfo {
  personal: {
    /** Portfolio owner name */
    name: string;

    /** Primary email */
    email: string;

    /** Contact phone number */
    phone: string;

    /** Current location */
    location: string;

    /** avatar */
    avatar: string;
  };

  professional: {
    /** Professional title */
    role: string;

    /** Number of years of experience */
    experience: string;

    /** Resume download URL */
    resumeUrl: string;
  };

  application: {
    /** Greeting message */
    greetings: string;

    /** Application logo */
    logo: string;

    /** Portfolio base URL */
    website: string;

    /** Footer copyright text */
    copyright: string;
  };

  content: {
    /** Short introduction */
    tagline: string;
  };
}