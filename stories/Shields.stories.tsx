import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Shield } from '../src/Shield';

const meta: Meta = {
  title: 'Shields',
  component: Shield,
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
    hardwareId: {
      control: {
        type: 'range',
        min: 0,
        max: 120,
      },
    },
    frameId: {
      control: {
        type: 'range',
        min: 0,
        max: 5,
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
  frameId: number;
  hardwareId: number;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
}> = ({ fieldId, frameId, hardwareId, color1, color2, color3, color4 }) => (
  <Shield
    fieldId={fieldId}
    colors={[color1, color2, color3, color4]}
    hardwareId={hardwareId}
    frameId={frameId}
  />
);

export const Default = Template.bind({});

Default.args = {
  fieldId: 1,
  color1: '#f00',
  color2: '#0f0',
  color3: '#00f',
  color4: '#f0f',
  hardwareId: 1,
  frameId: 1,
};
