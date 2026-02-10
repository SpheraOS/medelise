import { cn } from '@/lib/cn'
import { HTMLAttributes } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> { }

/**
 * Card component
 * Base UI component ready for Figma Dev Mode customization
 */
export function Card({ className, ...props }: CardProps) {
    return (
        <div
            className={cn(
                'rounded-lg border border-gray-200 bg-white shadow-sm',
                className
            )}
            {...props}
        />
    )
}

export function CardHeader({ className, ...props }: CardProps) {
    return <div className={cn('p-6 pb-4', className)} {...props} />
}

export function CardContent({ className, ...props }: CardProps) {
    return <div className={cn('p-6 pt-0', className)} {...props} />
}

export function CardFooter({ className, ...props }: CardProps) {
    return <div className={cn('p-6 pt-4', className)} {...props} />
}
