interface BookNowButtonProps {
    variant?: 'primary' | 'inverted';
    size?: 'default' | 'small';
    className?: string;
}

/**
 * Reusable "Book Now" CTA button.
 *
 * Variants:
 *  - primary  → indigo bg, white text  (default navbar CTA)
 *  - inverted → white bg, indigo text  (mega menu / tablet)
 *
 * Sizes:
 *  - default → 123 × 38
 *  - small   → 100 × 32
 */
export default function BookNowButton({
    variant = 'primary',
    size = 'default',
    className = '',
}: BookNowButtonProps) {
    const dims =
        size === 'default'
            ? { width: 123, height: 38, fontSize: 14 }
            : { width: 100, height: 32, fontSize: 12 };

    const colors =
        variant === 'primary'
            ? { background: 'var(--color-primary)', color: 'white', border: 'none' }
            : { background: 'white', color: 'var(--color-primary)', border: '1px solid var(--color-primary)' };

    return (
        <button
            className={`cursor-pointer rounded-lg font-body font-normal transition-all duration-300 hover:brightness-110 hover:scale-105 ${className}`}
            style={{
                width: dims.width,
                height: dims.height,
                fontSize: dims.fontSize,
                ...colors,
            }}
        >
            Book Now
        </button>
    );
}
