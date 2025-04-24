import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

const tagVariants = cva(
  'inline-flex items-center rounded-full border font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700',
        primary: 'border-transparent bg-primary-100 text-primary-800 hover:bg-primary-200 dark:bg-primary-900 dark:text-primary-100 dark:hover:bg-primary-800',
        secondary: 'border-transparent bg-secondary-100 text-secondary-800 hover:bg-secondary-200 dark:bg-secondary-900 dark:text-secondary-100 dark:hover:bg-secondary-800',
        accent: 'border-transparent bg-accent-100 text-accent-800 hover:bg-accent-200 dark:bg-accent-900 dark:text-accent-100 dark:hover:bg-accent-800',
        success: 'border-transparent bg-success-100 text-success-800 hover:bg-success-200 dark:bg-success-900 dark:text-success-100 dark:hover:bg-success-800',
        warning: 'border-transparent bg-warning-100 text-warning-800 hover:bg-warning-200 dark:bg-warning-900 dark:text-warning-100 dark:hover:bg-warning-800',
        error: 'border-transparent bg-error-100 text-error-800 hover:bg-error-200 dark:bg-error-900 dark:text-error-100 dark:hover:bg-error-800',
        info: 'border-transparent bg-info-100 text-info-800 hover:bg-info-200 dark:bg-info-900 dark:text-info-100 dark:hover:bg-info-800',
        outline: 'border-neutral-300 bg-transparent hover:bg-neutral-100 dark:border-neutral-600 dark:hover:bg-neutral-800',
      },
      size: {
        sm: 'h-6 text-xs px-2 py-0.5',
        md: 'h-8 text-sm px-3 py-1',
        lg: 'h-10 text-base px-4 py-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {
  onRemove?: () => void;
  removable?: boolean;
}

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ className, variant, size, onRemove, removable = false, children, ...props }, ref) => {
    return (
      <div
        className={cn(tagVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        <span className="mr-1">{children}</span>
        {removable && (
          <button
            type="button"
            onClick={onRemove}
            className="ml-1 flex-shrink-0 rounded-full p-0.5 hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-700 dark:hover:text-neutral-100 transition-colors"
            aria-label="Remove tag"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>
    );
  }
);

Tag.displayName = 'Tag';