import { SearchIcon } from '@heroicons/react/solid';
import { Story } from '@storybook/react';
import * as React from 'react';

import IconButtonAnchor, { IconButtonAnchorProps } from './IconButtonAnchor';

export default {
  title: 'Core/Components/Button/IconButtonAnchor',
  component: IconButtonAnchor,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'destructive'],
    },
    size: {
      options: ['sm', 'md', 'lg'],
    },
    href: {
      control: 'text',
    },
    target: {
      control: 'text',
    },
  },
};

export const Example: Story<IconButtonAnchorProps> = ({
  variant,
  size,
  href,
  target,
}) => (
  <IconButtonAnchor
    aria-label="Hit Me"
    rel="noopener noreferrer"
    variant={variant}
    size={size}
    href={href}
    target={target}
  >
    <SearchIcon />
  </IconButtonAnchor>
);

Example.args = {
  variant: 'primary',
  size: 'md',
  href: 'https://www.youtube.com/watch?v=fdixQDPA2h0',
  target: '_blank',
};
