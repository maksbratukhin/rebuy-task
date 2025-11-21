import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  component: CardComponent,
  title: 'UI/Card',
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
    hover: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    padding: 'md',
    hover: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <rb-card [padding]="padding" [hover]="hover">
        <h3 class="text-lg font-semibold mb-2">Card Title</h3>
        <p class="text-gray-600">This is a card component with some content inside.</p>
      </rb-card>
    `,
  }),
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    hover: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <rb-card [padding]="padding" [hover]="hover">
        <img src="https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=500&q=80" alt="Sample" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-lg font-semibold">Card with Image</h3>
        </div>
      </rb-card>
    `,
  }),
};

export const SmallPadding: Story = {
  args: {
    padding: 'sm',
  },
  render: (args) => ({
    props: args,
    template: `
      <rb-card [padding]="padding">
        <p class="text-sm">Small padding card</p>
      </rb-card>
    `,
  }),
};

export const LargePadding: Story = {
  args: {
    padding: 'lg',
  },
  render: (args) => ({
    props: args,
    template: `
      <rb-card [padding]="padding">
        <h2 class="text-2xl font-bold mb-4">Large Padding</h2>
        <p>This card has generous spacing around its content.</p>
      </rb-card>
    `,
  }),
};

export const NoHover: Story = {
  args: {
    padding: 'md',
    hover: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <rb-card [padding]="padding" [hover]="hover">
        <p>This card doesn't have hover effects.</p>
      </rb-card>
    `,
  }),
};
