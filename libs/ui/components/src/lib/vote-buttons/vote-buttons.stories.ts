import type { Meta, StoryObj } from '@storybook/angular';
import { VoteButtonsComponent } from './vote-buttons.component';
import { action } from '@storybook/addon-actions';

const meta: Meta<VoteButtonsComponent> = {
  component: VoteButtonsComponent,
  title: 'UI/VoteButtons',
  tags: ['autodocs'],
  argTypes: {
    votes: {
      control: { type: 'number', min: -100, max: 1000 },
    },
    size: {
      control: 'select',
      options: ['sm', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<VoteButtonsComponent>;

export const Small: Story = {
  args: {
    votes: 245,
    size: 'sm',
  },
  render: (args) => ({
    props: {
      ...args,
      voteUp: action('voteUp'),
      voteDown: action('voteDown'),
    },
    template: '<rb-vote-buttons [votes]="votes" [size]="size" (voteUp)="voteUp()" (voteDown)="voteDown()"></rb-vote-buttons>',
  }),
};

export const Large: Story = {
  args: {
    votes: 189,
    size: 'lg',
  },
  render: (args) => ({
    props: {
      ...args,
      voteUp: action('voteUp'),
      voteDown: action('voteDown'),
    },
    template: '<rb-vote-buttons [votes]="votes" [size]="size" (voteUp)="voteUp()" (voteDown)="voteDown()"></rb-vote-buttons>',
  }),
};

export const ZeroVotes: Story = {
  args: {
    votes: 0,
    size: 'sm',
  },
  render: (args) => ({
    props: {
      ...args,
      voteUp: action('voteUp'),
      voteDown: action('voteDown'),
    },
    template: '<rb-vote-buttons [votes]="votes" [size]="size" (voteUp)="voteUp()" (voteDown)="voteDown()"></rb-vote-buttons>',
  }),
};

export const NegativeVotes: Story = {
  args: {
    votes: -15,
    size: 'sm',
  },
  render: (args) => ({
    props: {
      ...args,
      voteUp: action('voteUp'),
      voteDown: action('voteDown'),
    },
    template: '<rb-vote-buttons [votes]="votes" [size]="size" (voteUp)="voteUp()" (voteDown)="voteDown()"></rb-vote-buttons>',
  }),
};

