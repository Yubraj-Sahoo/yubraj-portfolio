import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import {useActiveNavItem} from '../../hooks/useActiveNavItem';

class IntersectionObserverMock {
    static instances: IntersectionObserverMock[] = [];
    private readonly callback: IntersectionObserverCallback;

    readonly observe = vi.fn();
    readonly disconnect = vi.fn();
    readonly unobserve = vi.fn();

    constructor(callback: IntersectionObserverCallback) {
        this.callback = callback;
        IntersectionObserverMock.instances.push(this);
    }

    trigger(entries: IntersectionObserverEntry[]) {
        this.callback(entries, this as unknown as IntersectionObserver);
    }
}

const createEntry = (
    sectionId: string,
    isIntersecting: boolean,
    intersectionRatio = 0,
): IntersectionObserverEntry => ({
    target: document.getElementById(sectionId)!,
    isIntersecting,
    intersectionRatio,
} as unknown as IntersectionObserverEntry);

describe('useActiveNavItem', () => {
    beforeEach(() => {
        IntersectionObserverMock.instances = [];
        document.body.innerHTML = '<section id="home"></section><section id="about"></section>';
        vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        document.body.innerHTML = '';
    });

    test('observes the navigation sections that exist on the page', () => {
        renderHook(() => useActiveNavItem());

        const observer = IntersectionObserverMock.instances[0];

        expect(observer.observe).toHaveBeenCalledWith(document.getElementById('home'));
        expect(observer.observe).toHaveBeenCalledWith(document.getElementById('about'));
        expect(observer.observe).toHaveBeenCalledTimes(2);
    });

    test('sets the active item to the most visible intersecting section', () => {
        const { result } = renderHook(() => useActiveNavItem());
        const observer = IntersectionObserverMock.instances[0];

        act(() => {
            observer.trigger([
                createEntry('home', true, 0.2),
                createEntry('about', true, 0.6),
            ]);
        });

        expect(result.current.activeNavItem).toBe('about');
        expect(window.location.hash).toBe('#about');
    });

    test('does not change the active item for sections outside the viewport', () => {
        const { result } = renderHook(() => useActiveNavItem());
        const observer = IntersectionObserverMock.instances[0];

        act(() => {
            observer.trigger([createEntry('about', false)]);
        });

        expect(result.current.activeNavItem).toBe('home');
    });

    test('disconnects the observer when unmounted', () => {
        const { unmount } = renderHook(() => useActiveNavItem());
        const observer = IntersectionObserverMock.instances[0];

        unmount();

        expect(observer.disconnect).toHaveBeenCalledOnce();
    });
});
