import { Button } from '../ui-components';
import * as React from 'react';
import { theme } from '../theme';
import RatatoskrProvider from './RatatoskrProvider';

export default {
  title: 'Core/Foundations/RatatoskrProvider',
  component: RatatoskrProvider,
  parameters: {
    jsx: { skip: 1 },
  },
};

export const ThemeProvider = () => {
  return (
    <RatatoskrProvider>
      <Button variant='primary'>
        Button Primary
      </Button>
    </RatatoskrProvider>
  );
};

export const DefaultTheme = () => {
  return <pre>{JSON.stringify(theme, null, 2)}</pre>;
};
