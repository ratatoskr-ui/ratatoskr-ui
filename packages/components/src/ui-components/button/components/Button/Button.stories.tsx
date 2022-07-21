import * as React from 'react';
import { Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

import { SearchIcon } from '@heroicons/react/solid';

export default {
  title: 'Core/Components/Button/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'destructive', 'outline-destructive'],
    },
    size: {
      options: ['sm', 'md', 'lg'],
    },
    block: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    selected: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    onClick: {
      action: 'clicked',
    },
  },
};

const Template: Story<ButtonProps> = ({
  variant,
  size,
  block,
  disabled,
  isLoading,
  selected,
  icon,
  iconPosition,
  onClick,
}) => (
  <Button
    type="button"
    variant={variant}
    size={size}
    block={block}
    disabled={disabled}
    isLoading={isLoading}
    selected={selected}
    icon={icon}
    iconPosition={iconPosition}
    onClick={onClick}
  >
    Hit Me
  </Button>
);

export const Example: Story<ButtonProps> = Template.bind({});
Example.args = {
  variant: 'primary',
  size: 'md',
  block: false,
  disabled: false,
  isLoading: false,
  selected: false,
};

export const WithIcon: Story<ButtonProps> = Template.bind({});
WithIcon.args = {
  ...Example.args,
  icon: SearchIcon,
  iconPosition: 'left',
};

export const DisclosureButton: Story<ButtonProps> = ({ size, block, disabled, isLoading, onClick }) => (
  <Button
    type="button"
    size={size}
    block={block}
    disabled={disabled}
    isLoading={isLoading}
    icon={undefined}
    iconPosition="right"
    onClick={onClick}
  >
    Hit Me
  </Button>
);
