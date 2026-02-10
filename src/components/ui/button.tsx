import { cn } from '@/lib/cn'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

/**
 * Button component
 * Base UI component ready for Figma Dev Mode customization
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-lg font-medium transition-colors',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                    'disabled:pointer-events-none disabled:opacity-50',
                    {
                        'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600':
                            variant === 'primary',
                        'bg-gray-100 text-gray-900 hover:bg-gray-200 focus-visible:ring-gray-400':
                            variant === 'secondary',
                        'border border-gray-300 bg-transparent hover:bg-gray-50 focus-visible:ring-gray-400':
                            variant === 'outline',
                        'hover:bg-gray-100 focus-visible:ring-gray-400': variant === 'ghost',
                    },
                    {
                        'px-3 py-1.5 text-sm': size === 'sm',
                        'px-4 py-2 text-base': size === 'md',
                        'px-6 py-3 text-lg': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        )
    }
)

Button.displayName = 'Button'
