import type { Meta, StoryObj } from '@storybook/angular';
import { ErrorStateComponent } from './error-state.component';

const meta: Meta<ErrorStateComponent> = {
  component: ErrorStateComponent,
  title: 'UI/ErrorState',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ErrorStateComponent>;

export const Default: Story = {
  args: {
    title: 'Oops! Something went wrong',
    message: 'We encountered an issue loading the content. Please try again.',
    showRetry: true,
  },
};

export const NoRetryButton: Story = {
  args: {
    title: 'Content Not Available',
    message: 'The content you are looking for is temporarily unavailable.',
    showRetry: false,
  },
};

export const APIConnectionError: Story = {
  args: {
    title: 'Unable to Load Offers',
    message: 'Unable to connect to the server. Please ensure the API is running and try again.',
    showRetry: true,
  },
};

export const NotFound: Story = {
  args: {
    title: 'Not Found',
    message: 'The requested resource was not found.',
    showRetry: false,
  },
};

export const ServerError: Story = {
  args: {
    title: 'Server Error',
    message: 'Server error occurred. Please try again later.',
    showRetry: true,
  },
};

