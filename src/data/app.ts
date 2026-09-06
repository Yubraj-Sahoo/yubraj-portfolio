import type {AppInfo} from '../types';

/**
 * Application information.
 *
 * Shared across the portfolio application.
 *
 * @author Yubraj Sahoo
 */
export const APP_INFO: AppInfo = {
    personal: {
        name: 'Yubraj Sahoo',
        email: 'yubraj2000yubraj@gmail.com',
        phone: '+91 6370119126',
        location: 'Odisha, India',
        avatar: "https://res.cloudinary.com/ojlrwmxy/image/upload/v1788723215/dev-portfolio/upload/image/avatar.png",
    },
    professional: {
        role: 'Full Stack Java Developer',
        experience: '3+ Years of Experience',
        resumeUrl: '/resume.pdf',
    },
    application: {
        greetings: "Hi, I'm",
        logo: "https://res.cloudinary.com/ojlrwmxy/image/upload/v1788723186/dev-portfolio/upload/image/logo.png",
        website: "https://yubraj-portfolio.pages.dev",
        copyright: `© ${new Date().getFullYear()} Yubraj Sahoo. All rights reserved.`,
    },
    content: {
        tagline:
            'I build scalable, reliable and user-friendly web applications using modern technologies.',
    },
    config: {
        showHireButton: false,
        enableResume: true,
        enableContact: false,
        enableExperience: false,
    },
};
