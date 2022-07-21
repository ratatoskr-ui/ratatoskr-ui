import * as React from 'react';

import { Stack, Box } from '../../layout';
import { Heading } from '../../typography';

import { Button, IconButton } from '../button';
import { Avatar } from '../avatar';
import { BoxFooter, BoxHeader, CloseButton } from '.';
import { ArrowLeftIcon } from '@heroicons/react/outline';

export default {
  title: 'Core/Components/Box Header Footer/Header',
  component: [BoxHeader, BoxFooter],
  parameters: {
    backgrounds: {
      default: 'dark',
      value: [
        {
          name: 'dark',
          value: '#fcf1f1',
        },
      ],
    },
  },
};

const argTypes = {
  size: {
    options: ['sm', 'lg'],
    control: { type: 'radio' },
  },
};

export const BasicExample = ({ size, centerTitle }: { size: 'sm' | 'lg'; centerTitle: boolean }) => {
  return (
    <Box p="md" width={400}>
      <BoxHeader
        size={size}
        centerTitle={centerTitle}
        title={
          <Heading scale={size === 'sm' ? 300 : 500} id="stories-title" textAlign="center">
            Title
          </Heading>
        }
      />
    </Box>
  );
};
BasicExample.argTypes = argTypes;
BasicExample.args = {
  size: 'sm',
  centerTitle: true,
  hideCloseButton: false,
};

export const BackAndCloseIcon = ({ size }: { size: 'sm' | 'lg' }) => {
  return (
    <Box p="md" width={400}>
      <BoxHeader
        size={size}
        closeButton={<CloseButton />}
        backButton={
          <IconButton variant="plain" size={size}>
            <ArrowLeftIcon aria-hidden width={24} fill="currentColor" />
          </IconButton>
        }
        title={
          <Heading scale={size === 'sm' ? 300 : 500} id="stories-title" textAlign="center">
            Title
          </Heading>
        }
      />
    </Box>
  );
};

BackAndCloseIcon.argTypes = argTypes;
BackAndCloseIcon.args = {
  size: 'sm',
};

export const AvatarHeader = ({ size }: { size: 'sm' | 'lg' }) => {
  return (
    <Box p="md" width={400}>
      <BoxHeader
        size={size}
        closeButton={<CloseButton />}
        title={
          <Stack alignItems="center" direction="horizontal" spacing="sm">
            <Avatar name="A M" bg="blue07" size={size} />
            <Heading scale={size === 'sm' ? 300 : 500} id="stories-title" textAlign="center">
              Jessica
            </Heading>
          </Stack>
        }
      />
    </Box>
  );
};

AvatarHeader.argTypes = argTypes;
AvatarHeader.args = {
  size: 'sm',
};

export const TitleAndButton = ({ size }: { size: 'sm' | 'lg' }) => {
  return (
    <Box p="md">
      <BoxHeader
        backButton
        size={size}
        title={
          <Heading scale={size === 'sm' ? 300 : 500} id="stories-title" textAlign="center">
            Title
          </Heading>
        }
        actions={
          <Button size="sm" variant="primary">
            Label
          </Button>
        }
      />
    </Box>
  );
};

TitleAndButton.argTypes = argTypes;
TitleAndButton.args = {
  size: 'sm',
};
