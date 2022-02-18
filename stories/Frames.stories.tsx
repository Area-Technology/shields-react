import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Frame, FrameProps } from '../src/Frame';

const meta: Meta = {
  title: 'Frames',
  component: Frame,
  argTypes: {
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

const Template: Story<FrameProps> = (args) => <Frame {...args} />;

export const Default = Template.bind({});

Default.args = {
  frameId: 1,
};
