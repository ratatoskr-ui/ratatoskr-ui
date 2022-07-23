import { ArrowLeftIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { theme } from '../../theme';
import { Button, IconButton } from '../button';
import { ButtonGroup } from '../button-group';
import PageHeader from './PageHeader';

export default {
  title: 'Core/Components/Page Header',
  component: PageHeader,
};

export function Example() {
  return <PageHeader title="Title" />;
}
export function WithActions() {
  return (
    <PageHeader
      title="Title"
      actions={
        <ButtonGroup size="md">
          <Button
            type="button"
            icon={ArrowLeftIcon}
            iconPosition="right"
            onClick={action('click')}
          >
            Label
          </Button>
          <Button variant="primary">Label</Button>
        </ButtonGroup>
      }
    />
  );
}

export function WithBackButton() {
  return (
    <PageHeader
      title="Title"
      actions={
        <ButtonGroup size="md">
          <Button
            type="button"
            icon={ChevronDownIcon}
            iconPosition="right"
            onClick={action('click')}
          >
            Label
          </Button>
          <Button variant="primary">Label</Button>
        </ButtonGroup>
      }
      backButton={
        <IconButton variant="plain" aria-label="Back" size="lg">
          <ArrowLeftIcon aria-hidden fill={theme.colors.greydark02} />
        </IconButton>
      }
    />
  );
}

export function WithChildren() {
  return (
    <PageHeader
      title="Title"
      actions={
        <ButtonGroup size="md">
          <Button
            type="button"
            icon={ChevronDownIcon}
            iconPosition="right"
            onClick={action('click')}
          >
            Label
          </Button>
          <Button variant="primary">Label</Button>
        </ButtonGroup>
      }
      backButton={
        <IconButton variant="plain" aria-label="Back" size="lg">
          <ArrowLeftIcon aria-hidden fill="currentColor" />
        </IconButton>
      }
    >
      Filter Section
    </PageHeader>
  );
}
