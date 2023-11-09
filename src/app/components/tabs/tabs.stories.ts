import type { Meta, StoryObj } from '@storybook/angular';
import { TabsComponent } from './tabs.component';

const meta: Meta<TabsComponent> = {
  title: 'Componentes/Tabs',
  component: TabsComponent,
  tags: ['autodocs'],
  render: (args: TabsComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    tiTable: {
      control: { type: 'text' }
    },
    extend: {
      control: { type: 'boolean' }
    },
  },
};

export default meta;
type Story = StoryObj<TabsComponent>;

export const Primary: Story = {
  args: {
    tabs : [
      {
      index: 0,
      txtTabs: 'PERSONA',
      id: 'hola',
      classIcon: 'hola'
      },
      {
      index: 1,
      txtTabs: 'EMPRESA',
      id: 'hola2',
      classIcon: 'hola'
      },
      {
        index: 3,
        txtTabs: 'PERSONA',
        id: 'hola',
        classIcon: 'hola'
        },
       
  ],
  tabFocus : 0,
  tiTable: 'Titulo tabla',
  extend: false
  },
};
