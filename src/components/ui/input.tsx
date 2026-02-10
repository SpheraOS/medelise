import { cn } from '@/lib/cn'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean
}

/**
 * Input component
 * Base UI component ready for Figma Dev Mode customization
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={cn(
                    'w-full rounded-lg border px-3 py-2 text-sm transition-colors',
                    'focus:outline-none focus:ring-2 focus:ring-offset-1',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                    error
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-blue-600',
                    className
                )}
                {...props}
            />
        )
    }
)

Input.displayName = 'Input'
