import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Componentes/Boton',
  component: ButtonComponent,
  tags: ['autodocs'],
  render: (args: ButtonComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    id: {
      control: { type: 'text' }
    },
      btnClass: {
        options: ['txt-btn-blue', 'txt-btn-gris', 'outline-btn-blue','outline-btn-gris','filled-btn-yellow','filled-btn-gris', 'outline-btn-white', 'filled-btn-white'],
        control: { type: 'select' }, 
      },
      size: {
        options: ['size-l', 'size-m', 'size-s',],
        control: { type: 'select' }, 
      },

      label: {
          control: { type: 'text' }
        },

      materialDS: {
          //description: 'agregar nombre del icono de Material Icons',
          control: { type: 'text' }
        },
      extend: {
          //description: 'boton al 100%"',
          control: { type: 'boolean' }
        },
      disabled: {
          //description: 'Boton deshabilitado',
          control: { type: 'boolean' }
        },
      loading: {
          //description: 'Acción cargando',
          control: { type: 'boolean' }
        },
        load: {
          //description: 'Acción cargando',
          control: { type: 'boolean' }
        },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    id: 'btn-pagina-accion',
    btnClass: 'txt-btn-blue',
    size: 'size-m',
    label: 'Boton',
    materialDS: 'add',
    extend: false,
    disabled: false,
    loading: false,
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
