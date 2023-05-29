import type { Meta, StoryObj } from '@storybook/react';

import { DatePicker } from '../src';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'DataEntry/DatePicker',
  component: DatePicker,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args: {
    children: 'A lovely DatePicker component.',
    // arguments for your story
  },
};
