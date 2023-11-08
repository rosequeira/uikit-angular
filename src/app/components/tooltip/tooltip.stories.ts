import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { TooltipComponent } from './tooltip.component';
import { TooltipDirective } from '@webed/angular-tooltip';

const meta: Meta<TooltipComponent> = {
  title: 'Componentes/Tooltip',
  component: TooltipComponent,
  tags: ['autodocs'],
  render: (args: TooltipComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    titulo: {
      //description: 'Texto del boton',
      control: { type: 'text' }
    },
    texto: {
        //description: 'Texto del boton',
        control: { type: 'text' }
    }
  },
};

export default meta;
type Story = StoryObj<TooltipComponent>;

export const Primary: Story = {
  decorators: [
    moduleMetadata({
      imports: [TooltipDirective],
    }),
  ],
  args: {
    titulo: 'Titulo Card',
    texto:'texto tooltip'
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
