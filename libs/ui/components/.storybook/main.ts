import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/angular',
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  previewHead: (head) => `
    ${head}
    <style>
      @import "tailwindcss";
    </style>
  `,
};

export default config;
