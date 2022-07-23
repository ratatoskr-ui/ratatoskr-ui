import * as React from 'react';
import { render } from '@testing-library/react';
import {
  FormLabel,
  InputText,
  InputTextarea,
  InputMessage,
  InputCheckbox,
  InputRadioLabel,
  InputRadio,
} from './components';
import { Box } from '../../layout/box';
import { Text } from '../../typography';
import { Stack } from '../../layout/stack';

describe('components/Form', () => {
  test('renders standard text input correctly', () => {
    const { getByTestId } = render(
      <Stack spacing="xs">
        <FormLabel htmlFor="textDummy">Text input</FormLabel>
        <InputText data-testid="text-input" placeholder="Type here..." />
      </Stack>
    );

    const input = getByTestId('text-input');
    expect(input).toBeInTheDocument();
  });

  test('renders textarea correctly', () => {
    const { getByTestId } = render(
      <Stack spacing="xs">
        <FormLabel htmlFor="textarea">Text area</FormLabel>
        <InputTextarea
          data-testid="text-input"
          rows={4}
          placeholder="Type here..."
        />
      </Stack>
    );

    const input = getByTestId('text-input');
    expect(input).toBeInTheDocument();
  });

  test('renders error state correctly', () => {
    const { getByText } = render(
      <Stack spacing="xs">
        <FormLabel>Email Address</FormLabel>
        <InputText errors placeholder="Type here..." />
        <InputMessage data-testid="input-error">
          Please enter an email address.
        </InputMessage>
      </Stack>
    );

    const input = getByText('Please enter an email address.');

    expect(input).toBeInTheDocument();
  });

  test('renders disabled input correctly', () => {
    const { getByTestId } = render(
      <Stack spacing="xs">
        <FormLabel htmlFor="disabled">Disabled input</FormLabel>
        <InputText
          data-testid="disabled-input"
          disabled
          placeholder="Can't touch this"
        />
      </Stack>
    );

    const input = getByTestId('disabled-input');
    expect(input).toHaveAttribute('disabled');
  });

  test('renders checkbox input correctly', () => {
    const { getByTestId } = render(
      <Box display="inline-flex" flexDirection="row" alignItems="center">
        <InputCheckbox
          id="checkbox"
          data-testid="checkbox-input"
          name="checkbox"
        />
        <Text as="label" scale={200} color={'greydark02'} ml="xs" htmlFor="c1">
          Checkbox
        </Text>
      </Box>
    );

    const input = getByTestId('checkbox-input');
    expect(input).toBeInTheDocument();
  });

  test('renders radio input correctly', () => {
    const { getByTestId } = render(
      <InputRadioLabel htmlFor="radio">
        <InputRadio id="radio" data-testid="radio-input" name="radio" />
        Radio
      </InputRadioLabel>
    );

    const input = getByTestId('radio-input');
    expect(input).toBeInTheDocument();
  });
});
