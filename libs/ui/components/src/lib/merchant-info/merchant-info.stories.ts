import type { Meta, StoryObj } from '@storybook/angular';
import { MerchantInfoComponent } from './merchant-info.component';

const meta: Meta<MerchantInfoComponent> = {
  component: MerchantInfoComponent,
  title: 'UI/MerchantInfo',
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'range', min: 0, max: 5, step: 0.1 },
    },
  },
};

export default meta;
type Story = StoryObj<MerchantInfoComponent>;

export const HighRated: Story = {
  args: {
    name: 'TechStore Plus',
    rating: 4.9,
  },
};

export const GoodRated: Story = {
  args: {
    name: 'Electronics Hub',
    rating: 4.2,
  },
};

export const AverageRated: Story = {
  args: {
    name: 'Budget Devices',
    rating: 3.5,
  },
};

