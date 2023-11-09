import type { Meta, StoryObj } from '@storybook/angular';
import { MessageComponent } from './message.component';

const meta: Meta<MessageComponent> = {
  title: 'Componentes/Message',
  component: MessageComponent,
  tags: ['autodocs'],
  render: (args: MessageComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    state: {
      options: ['caution', 'error','succes', 'informative' ],
      control: { type: 'select' }, // automatically inferred when 'options' is defined
    },
    size: {
      options: ['size-s', 'size-m'],
      control: { type: 'select' }, // automatically inferred when 'options' is defined
    },
    materialDS: {
        control: { type: 'text' }
    },
    showClose:{
      control:{ type: 'boolean'}
    }
  },
};

export default meta;
type Story = StoryObj<MessageComponent>;

export const Primary: Story = {
  args: {
    showClose: false,
    state: 'succes',
    size: 'size-s',
    materialDS: 'error'
  },
};
