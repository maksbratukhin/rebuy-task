import type { Meta, StoryObj } from '@storybook/angular';
import { StockInfoComponent } from './stock-info.component';

const meta: Meta<StockInfoComponent> = {
  component: StockInfoComponent,
  title: 'UI/StockInfo',
  tags: ['autodocs'],
  argTypes: {
    stock: {
      control: { type: 'number', min: 0, max: 100 },
    },
  },
};

export default meta;
type Story = StoryObj<StockInfoComponent>;

export const InStock: Story = {
  args: {
    stock: 12,
  },
};

export const LowStock: Story = {
  args: {
    stock: 2,
  },
};

export const OutOfStock: Story = {
  args: {
    stock: 0,
  },
};

export const HighStock: Story = {
  args: {
    stock: 50,
  },
};

