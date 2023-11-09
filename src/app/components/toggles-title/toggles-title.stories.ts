import type { Meta, StoryObj } from '@storybook/angular';
import { TogglesTitleComponent } from './toggles-title.component';

const meta: Meta<TogglesTitleComponent> = {
  title: 'Componentes/TogglesTitle',
  component: TogglesTitleComponent,
  tags: ['autodocs'],
  render: (args: TogglesTitleComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
   
  },
};

export default meta;
type Story = StoryObj<TogglesTitleComponent>;

export const Primary: Story = {
  args: {
    listado : [
      {title: 'Nacional'},
      {title: 'Internacional'}    
    ]
  },
};
