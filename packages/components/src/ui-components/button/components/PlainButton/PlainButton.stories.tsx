import { Story } from '@storybook/react';
import * as React from 'react';

import PlainButton, { PlainButtonProps } from './PlainButton';

export default {
  title: 'Core/Components/Button/PlainButton',
  component: PlainButton,
  argTypes: {
    variant: {
      options: ['primary', 'destructive', 'disclosure'],
    },
    size: {
      options: ['sm', 'md'],
    },
    isLoading: {
      control: 'boolean',
    },
    onClick: {
      action: 'clicked',
    },
    selected: {
      control: 'boolean',
    },
  },
};

const Template: Story<PlainButtonProps> = ({ variant, size, isLoading, icon, iconPosition, onClick, selected }) => (
  <PlainButton
    type="button"
    variant={variant}
    size={size}
    isLoading={isLoading}
    icon={icon}
    iconPosition={iconPosition}
    onClick={onClick}
    selected={selected}
  >
    Push Me
  </PlainButton>
);

export const Example: Story<PlainButtonProps> = Template.bind({});
Example.args = {
  variant: 'primary',
  size: 'sm',
  isLoading: false,
};

export const WithIcon: Story<PlainButtonProps> = Template.bind({});
WithIcon.args = {
  ...Example.args,
  icon: undefined,
  iconPosition: 'left',
};

export const DisclosureButton: Story<PlainButtonProps> = ({
  variant,
  size,
  disabled,
  isLoading,
  onClick,
  selected,
}) => (
  <PlainButton
    type="button"
    variant={variant}
    size={size}
    disabled={disabled}
    isLoading={isLoading}
    icon={undefined}
    iconPosition="right"
    onClick={onClick}
    selected={selected}
  >
    Push Me
  </PlainButton>
);
DisclosureButton.args = {
  ...Example.args,
  variant: 'disclosure',
  icon: undefined,
  iconPosition: 'left',
};
