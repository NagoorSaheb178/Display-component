import React, { createContext, useContext, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

type TabsContextType = {
  activeTab: string;
  setActiveTab: (id: string) => void;
};

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultTab?: string;
  onTabChange?: (id: string) => void;
}

export function Tabs({
  children,
  defaultTab,
  onTabChange,
  className,
  ...props
}: TabsProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || '');

  // Select first tab if none selected and we have children
  useEffect(() => {
    if (!activeTab && React.Children.count(children) > 0) {
      const firstTabId = React.Children.toArray(children)
        .find((child) => React.isValidElement(child) && child.type === TabsList)
        ?.props?.children?.find?.(
          (tabChild: React.ReactElement) => React.isValidElement(tabChild) && tabChild.type === TabsTrigger
        )?.props?.id;

      if (firstTabId) {
        setActiveTab(firstTabId);
      }
    }
  }, [activeTab, children]);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    if (onTabChange) onTabChange(id);
  };

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab: handleTabChange }}>
      <div className={cn('space-y-2', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
}

export function TabsList({
  children,
  orientation = 'horizontal',
  className,
  ...props
}: TabsListProps) {
  return (
    <div
      role="tablist"
      className={cn(
        'flex border-b border-neutral-200 dark:border-neutral-700',
        orientation === 'vertical' && 'flex-col border-b-0 border-r',
        className
      )}
      aria-orientation={orientation}
      {...props}
    >
      {children}
    </div>
  );
}

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  disabled?: boolean;
}

export function TabsTrigger({
  children,
  id,
  disabled = false,
  className,
  ...props
}: TabsTriggerProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabsTrigger must be used within a Tabs component');
  }

  const { activeTab, setActiveTab } = context;
  const isActive = activeTab === id;

  return (
    <button
      role="tab"
      type="button"
      id={`tab-${id}`}
      aria-selected={isActive}
      aria-controls={`tabpanel-${id}`}
      tabIndex={isActive ? 0 : -1}
      disabled={disabled}
      onClick={() => setActiveTab(id)}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap px-3 py-2 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        isActive
          ? 'border-b-2 border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400'
          : 'text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
}

export function TabsContent({
  children,
  id,
  className,
  ...props
}: TabsContentProps) {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('TabsContent must be used within a Tabs component');
  }

  const { activeTab } = context;
  const isActive = activeTab === id;

  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${id}`}
      aria-labelledby={`tab-${id}`}
      className={cn('pt-2', className)}
      {...props}
    >
      {children}
    </div>
  );
}