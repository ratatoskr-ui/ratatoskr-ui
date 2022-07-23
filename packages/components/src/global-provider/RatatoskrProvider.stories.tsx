import * as React from 'react';
import { Button } from '../ui-components';
import { theme } from '../theme';
import RatatoskrProvider from './RatatoskrProvider';

export default {
  title: 'Core/Foundations/RatatoskrProvider',
  component: RatatoskrProvider,
  parameters: {
    jsx: { skip: 1 },
  },
};

export function ThemeProvider() {
  return (
    <RatatoskrProvider>
      <Button variant="primary">Button Primary</Button>
    </RatatoskrProvider>
  );
}

export function DefaultTheme() {
  return <pre>{JSON.stringify(theme, null, 2)}</pre>;
}
