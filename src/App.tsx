import React from 'react';
import { Box, LineChart, User } from 'lucide-react';
import { ThemeProvider } from './components/theme-provider';
import { Navbar } from './components/ui/Navbar';
import { Button } from './components/ui/Button';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/Accordion';
import { Tag } from './components/ui/Tag';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/TabsNav';
import { ThemeToggle } from './components/theme/ThemeToggle';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
        <Navbar
          brandName="Enterprise Design System"
          brandLogo={<Box className="h-6 w-6 text-primary-600 dark:text-primary-400" />}
          items={[
            { label: 'Dashboard', href: '#', isActive: true },
            { label: 'Components', href: '#' },
            { label: 'Documentation', href: '#' },
            { label: 'Settings', href: '#' },
          ]}
          actions={(
            <>
              <Button variant="outline" size="sm">Account</Button>
              <Button size="sm">Get Started</Button>
            </>
          )}
        />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-text-light-primary dark:text-text-dark-primary text-3xl font-bold">
                Enterprise Design System
              </h1>
              <p className="text-text-light-secondary dark:text-text-dark-secondary mt-2 text-lg">
                A comprehensive design system for enterprise applications.
              </p>
            </div>
            <ThemeToggle />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center text-neutral-900 dark:text-white">
                <LineChart className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" />
                Color System
              </h2>
              <p className="text-neutral-600 dark:text-white mb-4">
                Our design system includes a comprehensive color system with semantic colors
                for various use cases.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="h-8 w-8 rounded-md bg-primary-600"></div>
                <div className="h-8 w-8 rounded-md bg-secondary-600"></div>
                <div className="h-8 w-8 rounded-md bg-accent-600"></div>
                <div className="h-8 w-8 rounded-md bg-success-600"></div>
                <div className="h-8 w-8 rounded-md bg-warning-600"></div>
                <div className="h-8 w-8 rounded-md bg-error-600"></div>
                <div className="h-8 w-8 rounded-md bg-info-600"></div>
              </div>
              <Button variant="outline">View Color System</Button>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center text-neutral-900 dark:text-white">
                <User className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" />
                Component Library
              </h2>
              <p className="text-neutral-600 dark:text-white mb-4">
                Our component library includes a variety of UI components for building enterprise applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Button size="sm">Button</Button>
                <Tag variant="primary">Tag</Tag>
                <Button variant="outline" size="sm">Outline</Button>
                <Tag variant="success">Success</Tag>
              </div>
              <Button variant="outline">Browse Components</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">Accordion Component</h2>
              <Accordion className="w-full" defaultExpanded={['item-1']}>
                <AccordionItem id="item-1">
                  <AccordionTrigger>What is a design system?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 dark:text-white">
                    A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem id="item-2">
                  <AccordionTrigger>Why use a design system?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 dark:text-white">
                    Design systems help create consistent user experiences across products, speed up development time, promote collaboration, and reduce technical debt.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem id="item-3">
                  <AccordionTrigger>How do I get started?</AccordionTrigger>
                  <AccordionContent className="text-neutral-600 dark:text-white">
                    Start by exploring our documentation and component library. You can install our package via npm and begin using the components in your project.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">Tabs Component</h2>
              <Tabs className="w-full" defaultTab="tab1">
                <TabsList>
                  <TabsTrigger id="tab1">Overview</TabsTrigger>
                  <TabsTrigger id="tab2">Features</TabsTrigger>
                  <TabsTrigger id="tab3">Usage</TabsTrigger>
                </TabsList>
                <TabsContent id="tab1">
                  <div className="mt-2">
                    <p className="text-neutral-600 dark:text-white">
                      Our design system provides a comprehensive set of UI components, design tokens, and guidelines for building enterprise applications.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent id="tab2">
                  <div className="mt-2">
                    <ul className="list-disc pl-5 text-neutral-600 dark:text-white space-y-1">
                      <li>Comprehensive color system</li>
                      <li>Accessible components</li>
                      <li>Dark mode support</li>
                      <li>Responsive design</li>
                    </ul>
                  </div>
                </TabsContent>
                <TabsContent id="tab3">
                  <div className="mt-2">
                    <p className="text-neutral-600 dark:text-white">
                      All components are fully documented in Storybook with examples, props documentation, and accessibility guidelines.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;