import type { Meta, StoryObj } from '@storybook/angular';
import { OfferHeaderComponent } from './offer-header.component';

const meta: Meta<OfferHeaderComponent> = {
  component: OfferHeaderComponent,
  title: 'UI/OfferHeader',
  tags: ['autodocs'],
  argTypes: {
    condition: {
      control: 'select',
      options: ['new', 'like-new', 'good', 'acceptable'],
    },
  },
};

export default meta;
type Story = StoryObj<OfferHeaderComponent>;

export const Electronics: Story = {
  args: {
    category: 'Electronics',
    condition: 'like-new',
    title: 'iPhone 14 Pro',
  },
};

export const Gaming: Story = {
  args: {
    category: 'Gaming',
    condition: 'new',
    title: 'PlayStation 5',
  },
};

export const Books: Story = {
  args: {
    category: 'Books',
    condition: 'good',
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
  },
};

