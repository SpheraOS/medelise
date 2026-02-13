/**
 * Centralized Image Registry
 * ──────────────────────────
 * All content image paths referenced from `public/images/`.
 * Import from here instead of hardcoding paths in components.
 *
 * Usage:
 *   import { IMAGES } from '@/constants/images';
 *   <Image src={IMAGES.quality.macbookMockup} alt="..." ... />
 */

export const IMAGES = {
    /** Quality Section — MacBook mockup assets */
    quality: {
        /** MacBook Pro SVG mockup — desktop version with medical dashboard */
        macbookMockup: '/images/quality/macbook-mockup.svg',

        /** MacBook Pro PNG — tablet/mobile fallback */
        macbookTablet: '/images/quality/macbook-tablet.png',
    },

    /** Portal Section — Patient Portal imagery */
    portal: {
        /** Main composition image — 588×380 placeholder */
        mainImage: '/images/portal/main-image.svg',

        /** Side accent image — 204×312 placeholder */
        sideImage: '/images/portal/side-image.svg',
    },

    /** Watch — Apple Watch Ultra assets */
    watch: {
        /** Apple Watch Ultra with Medelise notifications on screen */
        iwatchNotifications: '/images/watch/iwatch-ultra-notifications.png',
    },
} as const;

/** Type-safe image section key */
export type ImageSection = keyof typeof IMAGES;
