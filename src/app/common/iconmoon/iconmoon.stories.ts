import type { Meta, StoryObj } from '@storybook/angular';
import { IconmoonComponent } from './iconmoon.component';

const meta: Meta<IconmoonComponent> = {
  title: 'variables/iconos',
  component: IconmoonComponent,
  tags: ['autodocs'],
  render: (args: IconmoonComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {

  },
};

export default meta;
type Story = StoryObj<IconmoonComponent>;

export const Primary: Story = {
  args: {
    
  },
};

