import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ShieldID, ShieldIDProps } from '../src/ShieldID';

const meta: Meta = {
  title: 'ShieldIDs',
  component: ShieldID,
  argTypes: {
    shieldId: {
      control: {
        type: 'number',
        min: 1,
        max: 5000,
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<ShieldIDProps> = ({ shieldId }) => (
  <ShieldID shieldId={shieldId} />
);

export const Default = Template.bind({});

Default.args = {
  shieldId: 1,
};
