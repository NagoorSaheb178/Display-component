import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Data Display/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tags are compact elements that represent an input, attribute, or action.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'accent', 'success', 'warning', 'error', 'info', 'outline'],
      description: 'The visual style of the tag',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the tag',
    },
    removable: {
      control: 'boolean',
      description: 'Whether the tag has a remove button',
    },
    onRemove: { action: 'removed' },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Default Tag',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Tag',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Tag',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Accent Tag',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success Tag',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning Tag',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Error Tag',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'Info Tag',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Tag',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Tag',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Tag',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Tag',
  },
};

export const Removable: Story = {
  args: {
    children: 'Removable Tag',
    removable: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="default">Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="accent">Accent</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
      <Tag variant="info">Info</Tag>
      <Tag variant="outline">Outline</Tag>
    </div>
  ),
};

export const TagGroup: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="primary" removable>React</Tag>
      <Tag variant="primary" removable>TypeScript</Tag>
      <Tag variant="primary" removable>TailwindCSS</Tag>
      <Tag variant="success">Frontend</Tag>
      <Tag variant="info">UI Design</Tag>
    </div>
  ),
};