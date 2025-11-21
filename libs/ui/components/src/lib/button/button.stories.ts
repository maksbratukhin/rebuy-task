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
  },
  render: (args) => ({
    props: args,
    template: `<rb-button [variant]="variant" [size]="size" [disabled]="disabled">Click Me</rb-button>`,
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<rb-button [variant]="variant" [size]="size" [disabled]="disabled">Click Me</rb-button>`,
  }),
};

export const Success: Story = {
  args: {
    variant: 'success',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<rb-button [variant]="variant" [size]="size" [disabled]="disabled">Success</rb-button>`,
  }),
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<rb-button [variant]="variant" [size]="size" [disabled]="disabled">Delete</rb-button>`,
  }),
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<rb-button [variant]="variant" [size]="size" [disabled]="disabled">Small Button</rb-button>`,
  }),
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `<rb-button [variant]="variant" [size]="size" [disabled]="disabled">Large Button</rb-button>`,
  }),
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `<rb-button [variant]="variant" [size]="size" [disabled]="disabled">Disabled</rb-button>`,
  }),
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    fullWidth: true,
  },
  render: (args) => ({
    props: args,
    template: `<rb-button [variant]="variant" [size]="size" [disabled]="disabled" [fullWidth]="fullWidth">Full Width Button</rb-button>`,
  }),
};

