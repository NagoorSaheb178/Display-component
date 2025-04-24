import React, { createContext, useContext, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

type AccordionContextType = {
  expanded: Record<string, boolean>;
  toggle: (id: string) => void;
  allowMultiple: boolean;
};

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  allowMultiple?: boolean;
  defaultExpanded?: string[];
}

export function Accordion({
  children,
  allowMultiple = false,
  defaultExpanded = [],
  className,
  ...props
}: AccordionProps) {
  const initialState = defaultExpanded.reduce<Record<string, boolean>>(
    (acc, id) => ({ ...acc, [id]: true }),
    {}
  );

  const [expanded, setExpanded] = useState<Record<string, boolean>>(initialState);

  const toggle = (id: string) => {
    setExpanded((prev) => {
      // If not allowing multiple, close all others
      if (!allowMultiple) {
        return { [id]: !prev[id] };
      }
      return { ...prev, [id]: !prev[id] };
    });
  };

  return (
    <AccordionContext.Provider value={{ expanded, toggle, allowMultiple }}>
      <div className={cn('divide-y divide-neutral-200 dark:divide-neutral-700', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  disabled?: boolean;
}

export function AccordionItem({
  children,
  id,
  disabled = false,
  className,
  ...props
}: AccordionItemProps) {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion');
  }

  return (
    <div
      className={cn('py-2', disabled && 'opacity-50 cursor-not-allowed', className)}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { id, disabled });
        }
        return child;
      })}
    </div>
  );
}

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  disabled?: boolean;
}

export function AccordionTrigger({
  children,
  id,
  disabled,
  className,
  ...props
}: AccordionTriggerProps) {
  const context = useContext(AccordionContext);
  if (!context || !id) {
    throw new Error('AccordionTrigger must be used within an AccordionItem with a valid id');
  }

  const { expanded, toggle } = context;
  const isExpanded = expanded[id] || false;

  return (
    <button
      type="button"
      onClick={() => toggle(id)}
      aria-expanded={isExpanded}
      disabled={disabled}
      className={cn(
        'flex w-full items-center justify-between py-2 text-left text-base font-medium transition-all hover:text-primary-600 dark:hover:text-primary-400',
        isExpanded && 'text-primary-600 dark:text-primary-400',
        disabled && 'cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          'h-4 w-4 shrink-0 transition-transform duration-200',
          isExpanded && 'rotate-180'
        )}
      />
    </button>
  );
}

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  id?: string;
}

export function AccordionContent({
  children,
  id,
  className,
  ...props
}: AccordionContentProps) {
  const context = useContext(AccordionContext);
  if (!context || !id) {
    throw new Error('AccordionContent must be used within an AccordionItem with a valid id');
  }

  const { expanded } = context;
  const isExpanded = expanded[id] || false;

  return isExpanded ? (
    <div
      className={cn('pt-2 pb-1 text-sm', className)}
      {...props}
    >
      {children}
    </div>
  ) : null;
}