import { Search } from '@mui/icons-material';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ReactNode } from 'react';
import { MyButton } from 'shared/ui/MyButton';
import type { MyButtonProps } from 'shared/ui/MyButton/ui/MyButton'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: MyButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: { control: 'select', options: ['outlined', 'contained', 'text']},
    color: { control: 'select', options: ['error', 'success', 'secondary', 'primary', 'info', 'warning']},
    disabled: {control: 'boolean'},
    size: {control: 'select', options: ['small', 'medium', 'large'], defaultValue: 'medium'},
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<MyButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SecondaryContained: Story = {
  args: {
    color: 'secondary',
    children: 'Secondary',
    variant: 'contained'
  },
};

export const PrimaryOutlined: Story = {
  args: {
    color: 'primary',
    children: 'Primary',
    variant: 'outlined'
  },
};

export const LargeTextErrorWithIcon: Story = {
  args: {
    size: 'large',
    children: 'Large',
    color: 'error'
  },
};