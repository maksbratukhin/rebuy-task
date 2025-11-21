import type { Meta, StoryObj } from '@storybook/angular';
import { MessageBoxComponent } from './message-box.component';

const meta: Meta<MessageBoxComponent> = {
  component: MessageBoxComponent,
  title: 'UI/MessageBox',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error'],
    },
  },
};

export default meta;
type Story = StoryObj<MessageBoxComponent>;

export const Success: Story = {
  args: {
    message: 'Purchase successful! Your order has been placed.',
    type: 'success',
  },
};

export const Error: Story = {
  args: {
    message: 'Insufficient stock available. Only 2 items left.',
    type: 'error',
  },
};

export const LongMessage: Story = {
  args: {
    message: 'This is a very long message that demonstrates how the message box handles text that spans multiple lines and provides adequate spacing for readability.',
    type: 'success',
  },
};

