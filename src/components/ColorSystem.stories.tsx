import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

interface ColorPaletteProps {
  title: string;
  colorGroup: string;
  shades: number[];
}

const ColorPalette = ({ title, colorGroup, shades }: ColorPaletteProps) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-2">
      {shades.map((shade) => (
        <div key={shade} className="space-y-1.5">
          <div 
            className={`w-full h-12 rounded-md bg-${colorGroup}-${shade}`} 
            style={{ 
              backgroundColor: `var(--${colorGroup}-${shade})` 
            }}
          ></div>
          <div className="text-xs">
            <div>{shade}</div>
            <div className="font-mono text-neutral-500">{colorGroup}-{shade}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SurfacePalette = () => {
  const surfaces = [
    { name: 'background', label: 'Background' },
    { name: 'foreground', label: 'Foreground' },
    { name: 'card', label: 'Card' },
    { name: 'card-foreground', label: 'Card Foreground' },
    { name: 'popover', label: 'Popover' },
    { name: 'popover-foreground', label: 'Popover Foreground' },
    { name: 'primary', label: 'Primary' },
    { name: 'primary-foreground', label: 'Primary Foreground' },
    { name: 'secondary', label: 'Secondary' },
    { name: 'secondary-foreground', label: 'Secondary Foreground' },
    { name: 'muted', label: 'Muted' },
    { name: 'muted-foreground', label: 'Muted Foreground' },
    { name: 'accent', label: 'Accent' },
    { name: 'accent-foreground', label: 'Accent Foreground' },
    { name: 'destructive', label: 'Destructive' },
    { name: 'destructive-foreground', label: 'Destructive Foreground' },
    { name: 'border', label: 'Border' },
    { name: 'input', label: 'Input' },
    { name: 'ring', label: 'Ring' },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-3">Surface Colors</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {surfaces.map((surface) => (
          <div key={surface.name} className="space-y-1.5">
            <div 
              className="w-full h-12 rounded-md border border-neutral-200 dark:border-neutral-700"
              style={{ backgroundColor: `hsl(var(--surface-${surface.name}))` }}
            ></div>
            <div className="text-sm">
              <div>{surface.label}</div>
              <div className="font-mono text-xs text-neutral-500">surface-{surface.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ColorSystem = () => {
  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const colorGroups = [
    { title: 'Primary Colors', colorGroup: 'primary' },
    { title: 'Secondary Colors', colorGroup: 'secondary' },
    { title: 'Accent Colors', colorGroup: 'accent' },
    { title: 'Neutral Colors', colorGroup: 'neutral' },
    { title: 'Success Colors', colorGroup: 'success' },
    { title: 'Warning Colors', colorGroup: 'warning' },
    { title: 'Error Colors', colorGroup: 'error' },
    { title: 'Info Colors', colorGroup: 'info' },
  ];

  return (
    <div className="p-6 bg-white dark:bg-neutral-950 rounded-lg border border-neutral-200 dark:border-neutral-800">
      <h2 className="text-2xl font-bold mb-6">Color System</h2>
      <p className="mb-6 text-neutral-600 dark:text-neutral-400">
        Our design system uses a comprehensive color palette built on semantic color roles with consistent shades across all color families.
        All colors follow WCAG accessibility guidelines for proper contrast ratios.
      </p>
      
      <SurfacePalette />
      
      <div className="space-y-8">
        {colorGroups.map((group) => (
          <ColorPalette 
            key={group.colorGroup} 
            title={group.title} 
            colorGroup={group.colorGroup} 
            shades={shades.filter(s => s !== 950)} 
          />
        ))}
      </div>
      
      <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <h3 className="text-lg font-semibold mb-4">Usage Guidelines</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium">Surface Colors</h4>
            <p className="text-neutral-600 dark:text-neutral-400">Used for different UI layers and contexts, providing consistent theming across light and dark modes.</p>
          </div>
          <div>
            <h4 className="font-medium">Primary Colors</h4>
            <p className="text-neutral-600 dark:text-neutral-400">Used for primary actions, key UI elements, and brand identity.</p>
          </div>
          <div>
            <h4 className="font-medium">Secondary Colors</h4>
            <p className="text-neutral-600 dark:text-neutral-400">Used for secondary UI elements, supporting actions, and complementary components.</p>
          </div>
          <div>
            <h4 className="font-medium">Accent Colors</h4>
            <p className="text-neutral-600 dark:text-neutral-400">Used for emphasis, highlighting, and to draw attention to specific UI elements.</p>
          </div>
          <div>
            <h4 className="font-medium">Neutral Colors</h4>
            <p className="text-neutral-600 dark:text-neutral-400">Used for text, backgrounds, borders, and dividers to create visual hierarchy.</p>
          </div>
          <div>
            <h4 className="font-medium">Semantic Colors</h4>
            <p className="text-neutral-600 dark:text-neutral-400">Used to communicate meaning: success (green), warning (amber), error (red), and info (blue).</p>
          </div>
        </div>
      </div>
      
      <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800">
        <h3 className="text-lg font-semibold mb-4">Best Practices</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-success-600 dark:text-success-400 mb-2">Do's</h4>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>Use semantic colors consistently for their intended purposes</li>
              <li>Maintain sufficient contrast ratios for accessibility</li>
              <li>Use surface colors to create visual hierarchy</li>
              <li>Consider color blindness when designing interfaces</li>
              <li>Test color combinations in both light and dark modes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-error-600 dark:text-error-400 mb-2">Don'ts</h4>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 dark:text-neutral-400">
              <li>Don't rely solely on color to convey information</li>
              <li>Avoid using too many different colors in one interface</li>
              <li>Don't mix semantic colors inappropriately</li>
              <li>Avoid low contrast color combinations</li>
              <li>Don't use colors that clash with brand guidelines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Foundation/Color System',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A comprehensive color system for the design system.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => <ColorSystem />,
};