import * as React from 'react';
import { Story } from '@storybook/react';

import { Box } from '../../../layout';
import { Heading } from '../../../typography';
import Avatar, { AvatarProps } from './Avatar';
import { UserCircleIcon } from "@heroicons/react/solid";

export default {
  title: 'Core/Components/Avatar',
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
    name: {
      control: 'text',
    },
    src: {
      control: 'text',
    },
    notificationBadge: {
      control: 'text',
    },
  },
};

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const WithInitialName = Template.bind({});
WithInitialName.args = {
  size: 'lg',
  name: 'Kiriyama Rei',
};

export const WithImage = Template.bind({});
WithImage.args = {
  size: 'lg',
  name: 'Kiriyama Rei',
  src: 'https://64.media.tumblr.com/98da5de8e9832eb1c73d6180ce4648c0/36ac9104848b7e00-b5/s400x600/cca94e0d1cb3b61c62fc0a88151fbc92336693ad.jpg',
};

export const WithIcons: Story<AvatarProps> = args => <Avatar icon={UserCircleIcon} {...args} />;
WithIcons.args = {
  size: 'lg',
  name: 'Kiriyama Rei',
  color: 'greymed04',
  bg: 'greylight03',
};

export const WithLabel: Story<AvatarProps> = ({ name, ...args }) => (
  <Box display="inline-flex" alignItems="center">
    <Avatar name={name} {...args} />
    <Heading as="span" ml="xs" scale={300}>
      {name}
    </Heading>
  </Box>
);
WithLabel.args = {
  size: 'lg',
  name: 'Kiriyama Rei',
  src: 'https://64.media.tumblr.com/98da5de8e9832eb1c73d6180ce4648c0/36ac9104848b7e00-b5/s400x600/cca94e0d1cb3b61c62fc0a88151fbc92336693ad.jpg',
};

export const WithPresence: Story<AvatarProps> = ({ name, ...args }) => {
  return (
    <Box display="inline-flex" alignItems="center">
      <Avatar name={name} presence={<Box width="100%" height="100%" backgroundColor={'red07'} />} {...args} />
    </Box>
  );
};
WithPresence.args = {
  size: 'lg',
  name: 'Kiriyama Rei',
  src: 'https://64.media.tumblr.com/98da5de8e9832eb1c73d6180ce4648c0/36ac9104848b7e00-b5/s400x600/cca94e0d1cb3b61c62fc0a88151fbc92336693ad.jpg',
};

export const WithNotificationBadge: Story<AvatarProps> = ({ name, notificationBadge, ...args }) => {
  return (
    <Box display="inline-flex" alignItems="center">
      <Avatar name={name} notificationBadge={notificationBadge} {...args} />
    </Box>
  );
};
WithNotificationBadge.args = {
  size: 'lg',
  name: 'Kiriyama Rei',
  src: 'https://64.media.tumblr.com/98da5de8e9832eb1c73d6180ce4648c0/36ac9104848b7e00-b5/s400x600/cca94e0d1cb3b61c62fc0a88151fbc92336693ad.jpg',
  notificationBadge: '99',
};
