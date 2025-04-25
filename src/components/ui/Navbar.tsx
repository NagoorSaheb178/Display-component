import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { ThemeToggle } from '../theme/ThemeToggle';
import { Button } from './Button';

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  brandName: string;
  brandLogo?: React.ReactNode;
  items: NavItem[];
  actions?: React.ReactNode;
}

export function Navbar({
  brandName,
  brandLogo,
  items,
  actions,
  className,
  ...props
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={cn(
        'bg-white dark:bg-neutral-900 shadow-sm border-b border-neutral-200 dark:border-neutral-800',
        className
      )}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand name */}
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {brandLogo && (
                <div className="mr-2">
                  {brandLogo}
                </div>
              )}
              <span className="text-lg font-medium text-neutral-900 dark:text-white">
                {brandName}
              </span>
            </div>
            
            {/* Desktop navigation links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4 sm:items-center">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={cn(
                    'inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    item.isActive
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-neutral-600 hover:text-primary-600 dark:text-neutral-300 dark:hover:text-primary-400'
                  )}
                  aria-current={item.isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          
          {/* Desktop actions */}
          <div className="hidden sm:flex sm:items-center sm:space-x-2">
            <ThemeToggle />
            {actions}
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <ThemeToggle className="mr-2" />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={cn(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  item.isActive
                    ? 'bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400'
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-primary-600 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-primary-400'
                )}
                aria-current={item.isActive ? 'page' : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
          {actions && (
            <div className="px-5 pt-4 pb-3 border-t border-neutral-200 dark:border-neutral-700">
              <div className="space-y-2">
                {actions}
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}