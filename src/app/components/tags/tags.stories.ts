import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TagsComponent } from './tags.component';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { TooltipDirective } from '@webed/angular-tooltip';

const meta: Meta<TagsComponent> = {
  title: 'Componentes/Tags',
  component: TagsComponent,
  tags: ['autodocs'],
  render: (args: TagsComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    category: {
      control: { type: 'select' },
    },
    title: {
        //description: 'Texto del boton',
        control: { type: 'text' }
    },
    classTags: {
        //description: 'Texto del boton',
        control: { type: 'text' }
    }
  },
};

export default meta;
type Story = StoryObj<TagsComponent>;

export const State: Story = {
  args: {
    category: 'alert',
    title:'alerta',
    classTags: 'state',
  },
  argTypes: {
    category: {
      options: ['alert', 'disabled', 'information', 'success', 'warning'],
    },
  }
};

export const Risk: Story = {
  args: {
    category: 'medio',
    title:'alerta',
    classTags: 'risk',
  },
  argTypes: {
    category: {
      options: ['muy-bajo', 'bajo', 'medio', 'alto', 'muy-alto'],
    },
  }
};

export const Risklight: Story = {
  args: {
    category: 'medio',
    title:'alerta',
    classTags: 'risklight',
  },
  argTypes: {
    category: {
      options: ['muy-bajo', 'bajo', 'medio', 'alto', 'muy-alto'],
    },
  }
};

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
