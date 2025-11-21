import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'UI/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    fullWidth: false,
  },
  render: (args) => ({
    props: args,
    template: '<rb-button [variant]="variant" [size]="size" [disabled]="disabled" [fullWidth]="fullWidth">Click Me</rb-button>',
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: '<rb-button [variant]="variant" [size]="size">Secondary Button</rb-button>',
  }),
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: '<rb-button [variant]="variant" [size]="size">Success Button</rb-button>',
  }),
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
  },
  render: (args) => ({
    props: args,
    template: '<rb-button [variant]="variant" [size]="size">Danger Button</rb-button>',
  }),
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => ({
    props: args,
    template: '<rb-button [size]="size">Small Button</rb-button>',
  }),
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => ({
    props: args,
    template: '<rb-button [size]="size">Large Button</rb-button>',
  }),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: '<rb-button [disabled]="disabled">Disabled Button</rb-button>',
  }),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  render: (args) => ({
    props: args,
    template: '<rb-button [fullWidth]="fullWidth">Full Width Button</rb-button>',
  }),
};
