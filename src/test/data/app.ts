import type { AppInfo } from '../../types';

export const MOCKED_APP_INFO: AppInfo = {
  personal: {
    name: 'Yubraj Sahoo',
    email: 'yubraj@example.com',
    phone: '+91 9876543210',
    location: 'Hyderabad, India',
    avatar: '/avatar.png',
  },
  professional: {
    role: 'Full Stack Java Developer',
    experience: '3+ Years',
    resumeUrl: '/resume.pdf',
  },
  application: {
    greetings: "Hi, I'm",
    logo: '/logo.png',
    website: 'https://yubraj.dev',
    copyright: '© 2026 Yubraj Sahoo',
  },
  content: {
    tagline: 'Building scalable applications',
  },
  config:{
    showHireButton: true,
  }
};