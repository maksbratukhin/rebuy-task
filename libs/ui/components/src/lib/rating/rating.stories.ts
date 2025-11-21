import type { Meta, StoryObj } from '@storybook/angular';
import { RatingComponent } from './rating.component';

const meta: Meta<RatingComponent> = {
  component: RatingComponent,
  title: 'UI/Rating',
  tags: ['autodocs'],
  argTypes: {
    rating: {
      control: { type: 'number', min: 0, max: 5, step: 0.1 },
    },
    showValue: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<RatingComponent>;

export const FiveStars: Story = {
  args: {
    rating: 5.0,
    showValue: true,
  },
};

export const FourPointFive: Story = {
  args: {
    rating: 4.5,
    showValue: true,
  },
};

export const FourStars: Story = {
  args: {
    rating: 4.0,
    showValue: true,
  },
};

export const ThreePointFive: Story = {
  args: {
    rating: 3.5,
    showValue: true,
  },
};

export const TwoStars: Story = {
  args: {
    rating: 2.0,
    showValue: true,
  },
};

export const WithoutValue: Story = {
  args: {
    rating: 4.8,
    showValue: false,
  },
};

