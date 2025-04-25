import React from 'react';

export default {
  title: 'Design System/Color System',
  parameters: {
    docs: {
      description: {
        component: 'Token-based color system supporting light/dark themes and WCAG-compliant contrast ratios.',
      },
    },
  },
};

export const AllTokens = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
    <ColorSwatch name="Primary" variable="--color-primary-600" />
    <ColorSwatch name="Secondary" variable="--color-secondary-600" />
    <ColorSwatch name="Accent" variable="--color-accent-600" />
    <ColorSwatch name="Success" variable="--color-success-600" />
    <ColorSwatch name="Warning" variable="--color-warning-600" />
    <ColorSwatch name="Error" variable="--color-error-600" />
    <ColorSwatch name="Info" variable="--color-info-600" />
    <ColorSwatch name="Neutral 100" variable="--color-neutral-100" />
    <ColorSwatch name="Neutral 900" variable="--color-neutral-900" />
    {/* Add more swatches as needed */}
  </div>
);

function ColorSwatch({ name, variable }: { name: string; variable: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div
        style={{
          background: `var(${variable})`,
          width: 40,
          height: 40,
          borderRadius: 6,
          border: '1px solid #ccc',
        }}
        aria-label={`${name} color swatch`}
        role="img"
      />
      <span style={{ marginTop: 4, fontSize: 12 }}>{name}</span>
    </div>
  );
}

// Remove or comment out these exports:
//
// export const UsageExample = () => (
//   <div>
//     <p>
//       Example usage: <span style={{ color: 'var(--color-primary-600)' }}>Primary text</span>
//     </p>
//     <p>
//       Background: <span style={{ background: 'var(--color-neutral-100)', padding: 4 }}>Neutral 100</span>
//     </p>
//   </div>
// );
//
// UsageExample.storyName = 'Usage Example';
//
// export const AccessibilityNotes = () => (
//   <div>
//     <h4>Accessibility Notes</h4>
//     <ul>
//       <li>All color tokens meet WCAG AA contrast requirements for text and UI elements.</li>
//       <li>Ensure sufficient contrast between foreground and background for readability.</li>
//       <li>Test color combinations in both light and dark themes.</li>
//     </ul>
//   </div>
// );
//
// AccessibilityNotes.storyName = 'Accessibility Notes';
AllTokens.storyName = 'All Color Tokens';