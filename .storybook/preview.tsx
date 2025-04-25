import type { Preview } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "../src/components/theme/ThemeProvider";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f8fafc',
        },
        {
          name: 'dark',
          value: '#0f172a',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider defaultTheme="light">
        <div className="p-4">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;