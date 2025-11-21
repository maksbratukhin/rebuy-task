import type { Meta, StoryObj } from '@storybook/angular';
import { BackButtonComponent } from './back-button.component';
import { action } from '@storybook/addon-actions';

const meta: Meta<BackButtonComponent> = {
  component: BackButtonComponent,
  title: 'UI/BackButton',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BackButtonComponent>;

export const Default: Story = {
  render: () => ({
    props: {
      clicked: action('clicked'),
    },
    template: '<rb-back-button (clicked)="clicked()"></rb-back-button>',
  }),
};

