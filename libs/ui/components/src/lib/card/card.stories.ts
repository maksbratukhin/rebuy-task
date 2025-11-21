import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'UI/Card',
  tags: ['autodocs'],
  argTypes: {
    hover: {
      control: 'boolean',
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    hover: true,
    padding: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <rb-card [hover]="hover" [padding]="padding">
        <h3 class="text-lg font-semibold mb-2">Card Title</h3>
        <p class="text-gray-600">This is a card component with default settings.</p>
      </rb-card>
    `,
  }),
};

export const WithoutHover: Story = {
  args: {
    hover: false,
    padding: 'md',
  },
  render: (args) => ({
    props: args,
    template: `
      <rb-card [hover]="hover" [padding]="padding">
        <h3 class="text-lg font-semibold mb-2">Static Card</h3>
        <p class="text-gray-600">This card does not have hover effects.</p>
      </rb-card>
    `,
  }),
};

export const NoPadding: Story = {
  args: {
    hover: true,
    padding: 'none',
  },
  render: (args) => ({
    props: args,
    template: `
      <rb-card [hover]="hover" [padding]="padding">
        <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80" alt="Sample" class="w-full" />
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">Image Card</h3>
          <p class="text-gray-600">Card with no padding for full-width images.</p>
        </div>
      </rb-card>
    `,
  }),
};

export const LargePadding: Story = {
  args: {
    hover: true,
    padding: 'lg',
  },
  render: (args) => ({
    props: args,
    template: `
      <rb-card [hover]="hover" [padding]="padding">
        <h3 class="text-lg font-semibold mb-2">Large Padding Card</h3>
        <p class="text-gray-600">This card has large padding for more spacious content.</p>
      </rb-card>
    `,
  }),
};

