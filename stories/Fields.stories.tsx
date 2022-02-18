import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Field, FieldProps } from '../src/Field';

const meta: Meta = {
  title: 'Fields',
  component: Field,
  argTypes: {
    fieldId: {
      control: {
        type: 'range',
        min: 0,
        max: 299,
      },
    },
    colors: {
      table: {
        disable: true,
      },
    },
    color1: {
      control: {
        type: 'color',
      },
    },
    color2: {
      control: {
        type: 'color',
      },
    },
    color3: {
      control: {
        type: 'color',
      },
    },
    color4: {
      control: {
        type: 'color',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<{
  fieldId: number;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
}> = ({ fieldId, color1, color2, color3, color4 }) => (
  <Field fieldId={fieldId} colors={[color1, color2, color3, color4]} />
);

export const Default = Template.bind({});

Default.args = {
  fieldId: 0,
  color1: '#f00',
  color2: '#0f0',
  color3: '#00f',
  color4: '#f0f',
};
