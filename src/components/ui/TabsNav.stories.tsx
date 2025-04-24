import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './TabsNav';
import { FileText, Settings, Users } from 'lucide-react';

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Tabs organize content into multiple sections and allow users to navigate between them.'
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultTab: {
      control: 'text',
      description: 'ID of the tab that should be active by default',
    },
    onTabChange: { action: 'tab changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <Tabs className="w-full max-w-md" {...args}>
      <TabsList>
        <TabsTrigger id="tab1">Account</TabsTrigger>
        <TabsTrigger id="tab2">Profile</TabsTrigger>
        <TabsTrigger id="tab3">Settings</TabsTrigger>
      </TabsList>
      <TabsContent id="tab1">
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-lg font-medium mb-2">Account Information</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Manage your account details and preferences.
          </p>
        </div>
      </TabsContent>
      <TabsContent id="tab2">
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-lg font-medium mb-2">User Profile</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Update your profile information and visibility settings.
          </p>
        </div>
      </TabsContent>
      <TabsContent id="tab3">
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-lg font-medium mb-2">System Settings</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Configure application settings and preferences.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultTab: 'tab1',
  },
};

export const WithIcons: Story = {
  render: (args) => (
    <Tabs className="w-full max-w-md" {...args}>
      <TabsList>
        <TabsTrigger id="tab1" className="gap-2">
          <FileText className="h-4 w-4" />
          <span>Documents</span>
        </TabsTrigger>
        <TabsTrigger id="tab2" className="gap-2">
          <Users className="h-4 w-4" />
          <span>Team</span>
        </TabsTrigger>
        <TabsTrigger id="tab3" className="gap-2">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent id="tab1">
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-lg font-medium mb-2">Document Management</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Access, share, and manage your documents.
          </p>
        </div>
      </TabsContent>
      <TabsContent id="tab2">
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-lg font-medium mb-2">Team Collaboration</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Manage team members and collaboration settings.
          </p>
        </div>
      </TabsContent>
      <TabsContent id="tab3">
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-lg font-medium mb-2">Account Settings</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Configure your account settings and preferences.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultTab: 'tab1',
  },
};

export const DisabledTab: Story = {
  render: (args) => (
    <Tabs className="w-full max-w-md" {...args}>
      <TabsList>
        <TabsTrigger id="tab1">Active Tab</TabsTrigger>
        <TabsTrigger id="tab2" disabled>Disabled Tab</TabsTrigger>
        <TabsTrigger id="tab3">Another Tab</TabsTrigger>
      </TabsList>
      <TabsContent id="tab1">
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-lg font-medium mb-2">Active Tab Content</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            This is the content for the active tab. Notice the disabled tab cannot be selected.
          </p>
        </div>
      </TabsContent>
      <TabsContent id="tab2">
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">
          <p>This content should not be visible because the tab is disabled.</p>
        </div>
      </TabsContent>
      <TabsContent id="tab3">
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-lg font-medium mb-2">Another Tab Content</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            This is the content for another available tab.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultTab: 'tab1',
  },
};

export const FullWidth: Story = {
  render: (args) => (
    <Tabs className="w-full max-w-md" {...args}>
      <TabsList className="w-full">
        <TabsTrigger id="tab1" className="flex-1">First</TabsTrigger>
        <TabsTrigger id="tab2" className="flex-1">Second</TabsTrigger>
        <TabsTrigger id="tab3" className="flex-1">Third</TabsTrigger>
      </TabsList>
      <TabsContent id="tab1">
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-lg font-medium mb-2">First Tab Content</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Content for the first tab with full-width tab navigation.
          </p>
        </div>
      </TabsContent>
      <TabsContent id="tab2">
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-lg font-medium mb-2">Second Tab Content</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Content for the second tab with full-width tab navigation.
          </p>
        </div>
      </TabsContent>
      <TabsContent id="tab3">
        <div className="p-4 rounded-md border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-lg font-medium mb-2">Third Tab Content</h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Content for the third tab with full-width tab navigation.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultTab: 'tab1',
  },
};

export const CustomStyles: Story = {
  render: (args) => (
    <Tabs className="w-full max-w-md" {...args}>
      <TabsList className="bg-neutral-100 p-1 rounded-t-lg dark:bg-neutral-800">
        <TabsTrigger 
          id="tab1" 
          className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow dark:data-[state=active]:bg-neutral-900"
        >
          First
        </TabsTrigger>
        <TabsTrigger 
          id="tab2" 
          className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow dark:data-[state=active]:bg-neutral-900"
        >
          Second
        </TabsTrigger>
        <TabsTrigger 
          id="tab3" 
          className="rounded-md data-[state=active]:bg-white data-[state=active]:shadow dark:data-[state=active]:bg-neutral-900"
        >
          Third
        </TabsTrigger>
      </TabsList>
      <TabsContent id="tab1" className="p-4 bg-white rounded-b-lg border border-t-0 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700">
        <h3 className="text-lg font-medium mb-2">Custom Styled First Tab</h3>
        <p className="text-neutral-600 dark:text-neutral-400">
          This tab has custom styling applied to make it more visually distinct.
        </p>
      </TabsContent>
      <TabsContent id="tab2" className="p-4 bg-white rounded-b-lg border border-t-0 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700">
        <h3 className="text-lg font-medium mb-2">Custom Styled Second Tab</h3>
        <p className="text-neutral-600 dark:text-neutral-400">
          This tab has custom styling applied to make it more visually distinct.
        </p>
      </TabsContent>
      <TabsContent id="tab3" className="p-4 bg-white rounded-b-lg border border-t-0 border-neutral-200 dark:bg-neutral-900 dark:border-neutral-700">
        <h3 className="text-lg font-medium mb-2">Custom Styled Third Tab</h3>
        <p className="text-neutral-600 dark:text-neutral-400">
          This tab has custom styling applied to make it more visually distinct.
        </p>
      </TabsContent>
    </Tabs>
  ),
  args: {
    defaultTab: 'tab1',
  },
};