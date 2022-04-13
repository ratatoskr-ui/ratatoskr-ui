import * as React from 'react';
import { IdProvider } from '@radix-ui/react-id';
import { ThemeProvider } from 'styled-components';

import { theme as defaultTheme, Theme } from '../theme';
import injectGlobalStyles from './injectGlobalStyles';

export interface SteadfastProviderProps {
  /**
   * If you want to extend the global styles set to `true` and inject them
   * manually via `injectGlobalStyles`.
   */
  disableInjection?: boolean;
  /** Custom theme object. */
  theme?: Theme;
  children: React.ReactNode
}

const { GlobalStyles } = injectGlobalStyles();

const SteadfastProvider: React.FC<SteadfastProviderProps> = ({ children, disableInjection, theme = defaultTheme }) => {
  return (
    <ThemeProvider theme={theme}>
      <IdProvider>
          {!disableInjection && <GlobalStyles />}
          {children}
      </IdProvider>
    </ThemeProvider>
  );
};

SteadfastProvider.displayName = 'SteadfastProvider';

export default SteadfastProvider;
