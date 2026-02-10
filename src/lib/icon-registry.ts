/**
 * Icon Registry - Type-safe icon names
 * Auto-generated from icon files
 */

export const UI_ICONS = {
    // Actions
    EDIT: 'ui/actions/edit',
    DELETE: 'ui/actions/delete',
    SAVE: 'ui/actions/save',
    ADD: 'ui/actions/add',
    REMOVE: 'ui/actions/remove',

    // Navigation
    ARROW_LEFT: 'ui/navigation/arrow-left',
    ARROW_RIGHT: 'ui/navigation/arrow-right',
    ARROW_UP: 'ui/navigation/arrow-up',
    ARROW_DOWN: 'ui/navigation/arrow-down',
    CHEVRON_LEFT: 'ui/navigation/chevron-left',
    CHEVRON_RIGHT: 'ui/navigation/chevron-right',
    MENU: 'ui/navigation/menu',
    HOME: 'ui/navigation/home',

    // Status
    CHECK: 'ui/status/check',
    CHECK_CIRCLE: 'ui/status/check-circle',
    ERROR: 'ui/status/error',
    WARNING: 'ui/status/warning',
    INFO: 'ui/status/info',

    // Media
    PLAY: 'ui/media/play',
    PAUSE: 'ui/media/pause',
    STOP: 'ui/media/stop',
    VOLUME: 'ui/media/volume',

    // Communication
    MAIL: 'ui/communication/mail',
    PHONE: 'ui/communication/phone',
    CHAT: 'ui/communication/chat',
} as const

export const PAYMENT_ICONS = {
    // Cards
    VISA: 'payment/cards/visa',
    MASTERCARD: 'payment/cards/mastercard',
    AMEX: 'payment/cards/amex',

    // Wallets
    PAYPAL: 'payment/wallets/paypal',
    GOOGLE_PAY: 'payment/wallets/google-pay',
    APPLE_PAY: 'payment/wallets/apple-pay',

    // Crypto
    BITCOIN: 'payment/crypto/bitcoin',
    ETHEREUM: 'payment/crypto/ethereum',
} as const

export const SOCIAL_ICONS = {
    FACEBOOK: 'social/facebook',
    TWITTER: 'social/twitter',
    INSTAGRAM: 'social/instagram',
    LINKEDIN: 'social/linkedin',
    YOUTUBE: 'social/youtube',
    TIKTOK: 'social/tiktok',
} as const

/**
 * All available icon names
 */
export type IconName =
    | (typeof UI_ICONS)[keyof typeof UI_ICONS]
    | (typeof PAYMENT_ICONS)[keyof typeof PAYMENT_ICONS]
    | (typeof SOCIAL_ICONS)[keyof typeof SOCIAL_ICONS]
    | string  // Allow dynamic icon names

/**
 * Helper to get icon path
 */
export function getIconPath(name: IconName): string {
    return `/icons/${name}.svg`
}
