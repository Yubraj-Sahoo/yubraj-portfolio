import type {IconType} from 'react-icons';

export interface AboutContent {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    ctaLabel: string;
    ctaHref: string;
}

export interface Statistic {
    icon: IconType;
    value: string;
    label: string;
}
