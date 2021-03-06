import * as React from 'react';
import { action } from '@storybook/addon-actions';

import { Story } from '@storybook/react';
import {
  ClockIcon,
  DotsVerticalIcon,
  UserCircleIcon,
} from '@heroicons/react/solid';
import Card, { CardElevation } from './Card';
import { Box, Stack, Wrap, WrapItem } from '../../../layout';
import { Heading, Paragraph } from '../../../typography';
import { Button, IconButton } from '../../button';
import { Avatar } from '../../avatar';
import { CardHeader } from '../CardHeader';
import { Badge } from '../../badge';

export default {
  title: 'Core/Components/Card',
  argTypes: {
    elevation: {
      options: [1, 2, 3, 4, 5],
      control: { type: 'radio' },
    },
  },
};

export const BodyCard: Story<{ elevation: CardElevation }> = ({
  elevation,
}) => {
  return (
    <Box display="inline-flex">
      <Card p="lg" elevation={elevation}>
        <Stack spacing="md">
          <Avatar icon={ClockIcon} bg="yellow01" color="yellow07" />
          <Stack spacing="xs">
            <Heading scale={400}>Deno</Heading>
            <Paragraph scale={400} color="grey07">
              A secure runtime for JavaScript and TypeScript
            </Paragraph>
          </Stack>
          <Button block size="lg" onClick={action('click')}>
            Select
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export function Tags() {
  return (
    <Box display="inline-flex">
      <Card p="md" width={300}>
        <Stack spacing="md">
          <CardHeader
            title="Deno"
            avatar={
              <Avatar
                size="md"
                icon={UserCircleIcon}
                bg="yellow01"
                color="yellow07"
              />
            }
            actions={
              <IconButton variant="plain" size="sm" onClick={action('click')}>
                <DotsVerticalIcon fill="currentColor" aria-hidden />
              </IconButton>
            }
          />
          <Stack spacing="xs">
            <Wrap spacing="xxs">
              <WrapItem>
                <Badge>Badge 1</Badge>
              </WrapItem>
              <WrapItem>
                <Badge>Badge 2</Badge>
              </WrapItem>
              <WrapItem>
                <Badge>Badge 3</Badge>
              </WrapItem>
            </Wrap>
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
}

export function HorizontalCard() {
  return (
    <Card p="xl">
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack spacing="md" direction="horizontal" alignItems="center">
          <Avatar
            size={'xl'}
            name="Title"
            src="https://64.media.tumblr.com/98da5de8e9832eb1c73d6180ce4648c0/36ac9104848b7e00-b5/s400x600/cca94e0d1cb3b61c62fc0a88151fbc92336693ad.jpg"
          />
          <Box>
            <Stack spacing="xs">
              <Heading scale={400}>????????????</Heading>
              <Badge variant="info">5th-dan</Badge>
            </Stack>
          </Box>
        </Stack>
        <Stack
          spacing="20px"
          direction="horizontal"
          alignItems="center"
          ml="md"
        >
          <Stack
            spacing="xs"
            direction="horizontal"
            alignItems="center"
            color="greymed04"
          >
            <UserCircleIcon width={16} fill="currentColor" aria-hidden />
            <Paragraph as="span" scale={300}>
              kiriyama.rei@koinworks.com
            </Paragraph>
          </Stack>
          <Stack
            spacing="xs"
            direction="horizontal"
            alignItems="center"
            color="greymed04"
          >
            <ClockIcon width={16} fill="currentColor" aria-hidden />
            <Paragraph as="span" scale={300}>
              Tokyo (Asia)
            </Paragraph>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
}
