import type { Meta, StoryObj } from '@storybook/angular';
import { BackButtonComponent } from './back-button.component';

const meta: Meta<BackButtonComponent> = {
  component: BackButtonComponent,
  title: 'UI/BackButton',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BackButtonComponent>;

export const Default: Story = {
  render: () => ({
    template: '<rb-back-button></rb-back-button>',
  }),
};

