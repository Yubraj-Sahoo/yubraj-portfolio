import type {AppInfo} from '../types';
import logo from '../../public/favicon.png';
import avatar from '../assets/images/avatar.png';

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
        avatar,
    },
    professional: {
        role: 'Full Stack Java Developer',
        experience: '3+ Years of Experience',
        resumeUrl: '/resume.pdf',
    },
    application: {
        greetings: "Hi, I'm",
        logo,
        website: 'https://yubrajsahoo.dev',
        copyright: `© ${new Date().getFullYear()} Yubraj Sahoo. All rights reserved.`,
    },
    content: {
        tagline:
            'I build scalable, reliable and user-friendly web applications using modern technologies.',
    },
    config: {
        showHireButton: false,
    },
};
