import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

// Define button variants using CVA
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
        secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800',
        tertiary: 'bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-800',
        outline: 'border border-neutral-300 bg-transparent hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-800',
        ghost: 'bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800',
        link: 'bg-transparent underline-offset-4 hover:underline text-primary-600 dark:text-primary-400 hover:bg-transparent',
        success: 'bg-success-600 text-white hover:bg-success-700 active:bg-success-800',
        warning: 'bg-warning-600 text-white hover:bg-warning-700 active:bg-warning-800',
        error: 'bg-error-600 text-white hover:bg-error-700 active:bg-error-800',
        info: 'bg-info-600 text-white hover:bg-info-700 active:bg-info-800',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-12 px-6 text-lg',
        icon: 'h-10 w-10 p-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';