import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { Button } from './Button';
import { Tag } from './Tag';
import { Box, LineChart, LayoutGrid, Settings, User } from 'lucide-react';

const meta: Meta<typeof Navbar> = {
  title: 'Navigation/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive navigation bar component for application headers.'
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    brandName: {
      control: 'text',
      description: 'The name of your brand/product displayed in the navbar',
    },
    brandLogo: {
      control: 'object',
      description: 'Icon or image component representing your brand',
    },
    items: {
      control: 'object',
      description: 'Array of navigation items (label, href, isActive)',
    },
    actions: {
      control: 'object',
      description: 'React nodes for action buttons in the navbar',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    brandName: 'Enterprise UI',
    brandLogo: <Box className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
    items: [
      { label: 'Dashboard', href: '#', isActive: true },
      { label: 'Projects', href: '#' },
      { label: 'Reports', href: '#' },
      { label: 'Settings', href: '#' },
    ],
    actions: (
      <>
        <Button variant="outline" size="sm">Sign In</Button>
        <Button size="sm">Sign Up</Button>
      </>
    ),
  },
};

export const WithNotifications: Story = {
  args: {
    brandName: 'Analytics Pro',
    brandLogo: <LineChart className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
    items: [
      { label: 'Overview', href: '#', isActive: true },
      { label: 'Reports', href: '#' },
      { label: 'Analytics', href: '#' },
      { label: 'Integrations', href: '#' },
    ],
    actions: (
      <>
        <Tag variant="primary" size="sm" className="mr-2">New</Tag>
        <Button variant="outline" size="sm" className="relative">
          Notifications
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-error-500 text-[10px] text-white">
            4
          </span>
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </>
    ),
  },
};

export const DarkMode: Story = {
  render: (args) => (
    <div className="dark">
      <Navbar {...args} />
    </div>
  ),
  args: {
    brandName: 'Night Mode',
    brandLogo: <Settings className="h-6 w-6 text-primary-400" />,
    items: [
      { label: 'Dashboard', href: '#', isActive: true },
      { label: 'Customers', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Reports', href: '#' },
    ],
    actions: (
      <>
        <Button variant="outline" size="sm">Account</Button>
        <Button size="sm">Upgrade</Button>
      </>
    ),
  },
};

export const MinimalWithIcons: Story = {
  args: {
    brandName: 'Streamline',
    brandLogo: <LayoutGrid className="h-6 w-6 text-primary-600 dark:text-primary-400" />,
    items: [
      { 
        label: 'Dashboard', 
        href: '#', 
        isActive: true,
      },
      { 
        label: 'Analytics', 
        href: '#',
      },
      { 
        label: 'Settings', 
        href: '#',
      },
    ],
    actions: (
      <Button variant="ghost" size="icon">
        <User className="h-5 w-5" />
      </Button>
    ),
  },
};

export const ResponsiveExample: Story = {
  render: () => (
    <div className="resize-x max-w-[1200px] min-w-[320px] overflow-auto border border-neutral-300 dark:border-neutral-700 mx-auto">
      <div className="p-4 bg-neutral-100 dark:bg-neutral-800 text-center text-sm">
        ↔️ Resize this container to see how the navbar adapts to different screen sizes
      </div>
      <Navbar 
        brandName="Responsive UI"
        brandLogo={<Box className="h-6 w-6 text-primary-600 dark:text-primary-400" />}
        items={[
          { label: 'Dashboard', href: '#', isActive: true },
          { label: 'Projects', href: '#' },
          { label: 'Team', href: '#' },
          { label: 'Reports', href: '#' },
          { label: 'Settings', href: '#' },
        ]}
        actions={(
          <>
            <Button variant="outline" size="sm">Account</Button>
            <Button size="sm">Upgrade</Button>
          </>
        )}
      />
      <div className="p-8">
        <h1 className="text-2xl font-semibold mb-4">Dashboard Overview</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Welcome to your dashboard! This is example content to demonstrate the responsive navbar.
        </p>
      </div>
    </div>
  ),
};