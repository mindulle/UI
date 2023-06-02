import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../src';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'General/Button',
  component: Button,
}

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Priamry: Story = {
  args: {
    children: 'A lovely Button component.',
    // arguments for your story
    name: 'test name'
  },
};
