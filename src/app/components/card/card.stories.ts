import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';
import { TooltipComponent } from '../tooltip/tooltip.component';
import { TooltipDirective } from '@webed/angular-tooltip';

const meta: Meta<CardComponent> = {
  title: 'Componentes/Card',
  component: CardComponent,
  tags: ['autodocs'],
  render: (args: CardComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    title: {
      //description: 'Texto del boton',
      control: { type: 'text' }
    },
    titleTool: {
        //description: 'Texto del boton',
        control: { type: 'text' }
    },
    textTool: {
        //description: 'Texto del boton',
        control: { type: 'text' }
    },
    load: {
        //description: 'Acción cargando',
        control: { type: 'boolean' }
      },
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Primary: Story = {
  decorators: [
    moduleMetadata({
      declarations: [TooltipComponent],
      imports: [TooltipDirective],
    }),
  ],
  args: {
    title: 'Titulo Card',
    titleTool:'Titulo tooltip',
    textTool: 'esto es una prueba',
    load: false
  },
};

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

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
