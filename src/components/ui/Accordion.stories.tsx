import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Data Display/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Accordions display an expandable/collapsible list of sections.'
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    allowMultiple: {
      control: 'boolean',
      description: 'Allow multiple sections to be expanded at once',
    },
    defaultExpanded: {
      control: 'object',
      description: 'Array of IDs for items that should be expanded by default',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => (
    <Accordion className="w-full max-w-md" {...args}>
      <AccordionItem id="item-1">
        <AccordionTrigger>What is a design system?</AccordionTrigger>
        <AccordionContent>
          A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications. It serves as a single source of truth for an organization.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-2">
        <AccordionTrigger>Why use a design system?</AccordionTrigger>
        <AccordionContent>
          Design systems help create consistent user experiences across products, speed up development time, promote collaboration between teams, and reduce design and technical debt.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-3">
        <AccordionTrigger>Is Storybook required?</AccordionTrigger>
        <AccordionContent>
          While not strictly required, Storybook is highly recommended for documenting, testing, and showcasing components in a design system. It helps teams understand how to use components correctly.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  args: {
    allowMultiple: false,
    defaultExpanded: ['item-1'],
  },
};

export const MultipleExpanded: Story = {
  render: () => (
    <Accordion allowMultiple defaultExpanded={['item-1', 'item-3']} className="w-full max-w-md">
      <AccordionItem id="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          This is the content for section 1. Multiple sections can be expanded simultaneously.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          This is the content for section 2. Try clicking another section without closing this one.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-3">
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>
          This is the content for section 3. Notice how multiple sections can stay open.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const DisabledItem: Story = {
  render: () => (
    <Accordion className="w-full max-w-md">
      <AccordionItem id="item-1">
        <AccordionTrigger>Available Section</AccordionTrigger>
        <AccordionContent>
          This is a normal section that can be expanded and collapsed.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-2" disabled>
        <AccordionTrigger>Disabled Section</AccordionTrigger>
        <AccordionContent>
          This content won't be accessible because the section is disabled.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-3">
        <AccordionTrigger>Another Available Section</AccordionTrigger>
        <AccordionContent>
          This is another normal section that can be expanded and collapsed.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Accordion className="w-full max-w-md rounded-md border border-neutral-200 dark:border-neutral-700 p-2">
      <AccordionItem id="item-1" className="rounded-md bg-neutral-50 dark:bg-neutral-800 p-2 mb-2">
        <AccordionTrigger className="text-lg font-semibold">
          Custom Styled Accordion
        </AccordionTrigger>
        <AccordionContent className="bg-white dark:bg-neutral-900 p-3 rounded-md mt-2">
          This accordion has custom styling applied to it, demonstrating how the component can be visually customized.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="item-2" className="rounded-md bg-neutral-50 dark:bg-neutral-800 p-2">
        <AccordionTrigger className="text-lg font-semibold">
          Another Custom Section
        </AccordionTrigger>
        <AccordionContent className="bg-white dark:bg-neutral-900 p-3 rounded-md mt-2">
          The styling can be customized to match your application's design requirements.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Nested: Story = {
  render: () => (
    <Accordion className="w-full max-w-md">
      <AccordionItem id="parent-1">
        <AccordionTrigger>Parent Section 1</AccordionTrigger>
        <AccordionContent>
          <p className="mb-2">This is parent section 1 content.</p>
          <Accordion className="ml-4">
            <AccordionItem id="child-1-1">
              <AccordionTrigger>Child Section 1-1</AccordionTrigger>
              <AccordionContent>
                This is nested content for child section 1-1.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem id="child-1-2">
              <AccordionTrigger>Child Section 1-2</AccordionTrigger>
              <AccordionContent>
                This is nested content for child section 1-2.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem id="parent-2">
        <AccordionTrigger>Parent Section 2</AccordionTrigger>
        <AccordionContent>
          <p className="mb-2">This is parent section 2 content.</p>
          <Accordion className="ml-4">
            <AccordionItem id="child-2-1">
              <AccordionTrigger>Child Section 2-1</AccordionTrigger>
              <AccordionContent>
                This is nested content for child section 2-1.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};