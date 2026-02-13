/**
 * Centralized Icon Registry
 * ─────────────────────────
 * All UI icon paths referenced from `public/icons/`.
 * Import from here instead of hardcoding paths in components.
 *
 * Usage:
 *   import { ICONS } from '@/constants/icons';
 *   <Image src={ICONS.menu} alt="Menu" ... />
 */

export const ICONS = {
    /** Hamburger menu — 3 horizontal lines (navbar mobile/tablet) */
    menu: '/icons/icon-menu.png',

    /** Close / X — dismiss overlays, menus (navbar mobile/tablet) */
    close: '/icons/icon-close.png',

    /** Chevron down — dropdown indicator (navbar submenu) */
    chevronDown: '/icons/icon-chevron-down.png',

    /** Arrow left — carousel previous (testimonials, sliders) */
    arrowLeft: '/icons/icon-arrow-left.png',

    /** Arrow right — carousel next (testimonials, sliders) */
    arrowRight: '/icons/icon-arrow-right.png',

    /** Search — magnifying glass icon */
    search: '/icons/icon-search.png',

    /** Ambulance — emergency transport (portal section) */
    ambulance: '/icons/icon-ambulance.svg',

    /** Box — package / delivery (portal section) */
    box: '/icons/icon-box.svg',

    /** Check — check mark in circle (portal section) */
    check: '/icons/icon-check.svg',

    /** Stethoscope — medical examination (portal section) */
    stethoscope: '/icons/icon-stethoscope.svg',

    /** Timer — countdown / scheduling (portal section) */
    timer: '/icons/icon-timer.svg',
    arrowUpRight: '/icons/icon-arrow-up-right.svg',
} as const;

/** Type-safe icon key */
export type IconKey = keyof typeof ICONS;
