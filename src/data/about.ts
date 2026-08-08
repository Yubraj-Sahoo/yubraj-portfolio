import {FiAward, FiClock, FiLayers, FiTarget} from 'react-icons/fi';
import type {AboutContent, Statistic} from '../types';

export const ABOUT_CONTENT: AboutContent = {
    eyebrow: 'ABOUT ME',
    title: 'Passionate Java Developer',
    paragraphs: [
        'Full Stack Java Developer with 3 years of experience in designing, developing, and deploying robust web applications. Proficient in Java, Spring Boot, React, and modern cloud technologies.',
        'I love solving problems and turning ideas into impactful digital products.',
    ],
    ctaLabel: 'Know More About Me',
    ctaHref: '#experience',
};

export const ABOUT_STATISTICS: Statistic[] = [
    {icon: FiClock, value: '3+', label: 'Years Experience'},
    {icon: FiAward, value: '15+', label: 'Projects Completed'},
    {icon: FiLayers, value: '10+', label: 'Technologies'},
    {icon: FiTarget, value: '100%', label: 'Commitment'},
];
