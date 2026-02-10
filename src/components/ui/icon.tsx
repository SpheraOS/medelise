import { cn } from '@/lib/cn'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    /**
     * Icon name in format: category/name
     * Examples: "ui/check", "payment/visa", "flag/ro"
     */
    name: string
    /**
     * Icon size in pixels (default: 24)
     */
    size?: number
    /**
     * Additional CSS classes
     */
    className?: string
}

/**
 * Dynamic Icon component - loads icons from public/icons directory
 * Supports all icon categories: flags, payment, social, brands, ui, medical
 *
 * @example
 * <Icon name="ui/check" className="text-green-600" />
 * <Icon name="payment/visa" size={32} />
 * <Icon name="flag/ro" />
 */
export function Icon({ name, size = 24, className, ...props }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('inline-block flex-shrink-0', className)}
            aria-hidden="true"
            {...props}
        >
            {/* Using mask to load external SVG */}
            <image
                href={`/icons/${name}.svg`}
                width="24"
                height="24"
                preserveAspectRatio="xMidYMid meet"
            />
        </svg>
    )
}

/**
 * Icon categories for type safety
 */
export const ICON_CATEGORIES = {
    FLAGS: 'flags',
    PAYMENT: 'payment',
    SOCIAL: 'social',
    BRANDS: 'brands',
    UI: 'ui',
    MEDICAL: 'medical',
} as const

export type IconCategory = (typeof ICON_CATEGORIES)[keyof typeof ICON_CATEGORIES]
