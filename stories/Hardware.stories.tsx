import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Hardware, HardwareProps } from '../src/Hardware';

const meta: Meta = {
  title: 'Hardware',
  component: Hardware,
  argTypes: {
    hardwareId: {
      control: {
        type: 'range',
        min: 0,
        max: 120,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<HardwareProps> = (args) => <Hardware {...args} />;

export const Default = Template.bind({});

Default.args = {
  hardwareId: 0,
};
