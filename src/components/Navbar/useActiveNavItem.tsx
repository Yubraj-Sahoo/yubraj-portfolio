import {useEffect, useState} from 'react';
import {NAV_LINKS} from '../../data';

/** Tracks the navigation item whose matching section is currently in view. */
export const useActiveNavItem = () => {
    const [activeNavItem, setActiveNavItem] = useState('home');

    const updateActiveNavItem = (sectionId: string) => {
        setActiveNavItem(sectionId);

        if (window.location.hash !== `#${sectionId}`) {
            window.history.replaceState(null, '', `#${sectionId}`);
        }
    };

    useEffect(() => {
        if (!('IntersectionObserver' in window)) return;

        const sections = NAV_LINKS
            .map(({id}) => document.getElementById(id))
            .filter((section): section is HTMLElement => section !== null);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visibleSection) {
                    updateActiveNavItem(visibleSection.target.id);
                }
            },
            {
                // Ignore the top navbar area and detect sections near the middle of the page.
                rootMargin: '-35% 0px -55% 0px',
                threshold: [0, 0.1, 0.25, 0.5],
            },
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return {activeNavItem, setActiveNavItem: updateActiveNavItem};
};
