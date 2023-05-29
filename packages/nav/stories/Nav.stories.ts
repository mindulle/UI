import type { Meta, StoryObj } from '@storybook/react';

import { Nav } from '../src';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Navigation/Nav',
  component: Nav,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args: {
    children: 'A lovely Nav component.',
    // arguments for your story
  },
};
