// TODO: rename to `componentStyles/form/index.ts`
import { transparentize } from 'polished';
import { DefaultTheme } from 'styled-components';
import type { ComponentThemeConfig } from '../../../system';
import formSelect from './select';
import formToggle from './toggle';

// TODO: move to `componentStyles/form/utils.ts`
const inputBase = (theme: DefaultTheme, rounded = false) => ({
  appearance: 'none',
  backgroundColor: `var(--form-bg-color, ${theme.colors.greylight01})`,
  borderColor: `var(--form-border-color, ${theme.colors.greylight05})`,
  borderWidth: '1px',
  borderRadius: rounded ? 9999 : 'sm',
  borderStyle: 'solid',
  color: theme.colors.greydark02,
  display: 'block',
  fontSize: '12px',
  lineHeight: '18px',
  padding: 0,
  '--shadow': '0 0 #0000',
});

// TODO: move to `componentStyles/form/utils.ts`
const inputFocusBase = (theme: DefaultTheme) => ({
  outline: '2px solid transparent',
  'outline-offset': '2px',
  '--ring-inset': 'var(--empty,/*!*/ /*!*/)',
  '--ring-width': '2px',
  '--ring-offset-width': '0px',
  '--ring-offset-color': '#fff',
  '--ring-color': transparentize(0.7, theme.colors.blue06),
  '--ring-offset-shadow':
    'var(--ring-inset) 0 0 0 var(--ring-offset-width) var(--ring-offset-color)',
  '--ring-shadow': `var(--ring-inset) 0 0 0 calc(var(--ring-width) + var(--ring-offset-width)) var(--ring-color)`,
  'box-shadow': 'var(--ring-offset-shadow), var(--ring-shadow), var(--shadow)',
});

// TODO: move to `componentStyles/form/text.ts`
const inputText: ComponentThemeConfig = {
  baseStyle: ({
    theme,
    rounded,
  }: {
    theme: DefaultTheme;
    rounded?: boolean;
  }) => ({
    ...inputBase(theme, rounded),
    '&:focus': {
      ...inputFocusBase(theme),
    },
    '&[disabled]': {
      '--form-bg-color': theme.colors.greylight02,
      '--form-border-color': transparentize(0.5, theme.colors.greylight05),
      color: theme.colors.greymed01,
      cursor: 'not-allowed',
      '&::placeholder': {
        color: theme.colors.greymed01,
      },
    },
  }),
  propToScaleMap: [
    ['size', 'sizes'],
    ['variant', 'variants'],
  ],
  scales: {
    sizes: {
      md: {
        height: '32px',
      },
      lg: {
        height: '40px',
      },
    },
    variants: {
      default: ({ theme }: { theme: DefaultTheme }) => ({
        '&:not([disabled])': {
          '--form-bg-color': theme.colors.greylight01,
          '--form-border-color': theme.colors.greylight05,
          '&:hover': {
            '--form-bg-color': theme.colors.greylight03,
            '--form-border-color': theme.colors.greymed01,
          },
          '&:focus, &:active': {
            '--form-bg-color': theme.colors.greylight01,
            '--form-border-color': theme.colors.blue06,
            '--ring-color': transparentize(0.3, theme.colors.blue03),
          },
          '&::placeholder': {
            color: theme.colors.greymed01,
          },
        },
      }),
      error: ({ theme }: { theme: DefaultTheme }) => ({
        '&:not([disabled])': {
          '--form-bg-color': theme.colors.red01,
          '--form-border-color': theme.colors.red07,
          '&:hover': {
            '--form-bg-color': theme.colors.red01,
            '--form-border-color': theme.colors.red07,
          },
          '&:focus, &:active': {
            '--form-bg-color': theme.colors.red01,
            '--form-border-color': theme.colors.red07,
            '--ring-color': transparentize(0.7, theme.colors.red07),
          },
          '&::placeholder': {
            color: theme.colors.greymed01,
          },
        },
      }),
    },
  },
};

// TODO: move to `componentStyles/form/textarea.ts`
const inputTextarea: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: DefaultTheme }) => ({
    ...inputBase(theme),
    '&:focus': {
      ...inputFocusBase(theme),
    },
    '&[disabled]': {
      '--form-bg-color': theme.colors.greylight02,
      '--form-border-color': transparentize(0.5, theme.colors.greylight05),
      color: theme.colors.greymed01,
      cursor: 'not-allowed',
      '&::placeholder': {
        color: theme.colors.greymed01,
      },
    },
  }),
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      default: ({ theme }: { theme: DefaultTheme }) => ({
        '&:not([disabled])': {
          '--form-bg-color': theme.colors.greylight01,
          '--form-border-color': theme.colors.greylight05,
          '&:hover': {
            '--form-bg-color': theme.colors.greylight03,
            '--form-border-color': theme.colors.greymed01,
          },
          '&:focus, &:active': {
            '--form-bg-color': theme.colors.greylight01,
            '--form-border-color': theme.colors.blue06,
            '--ring-color': transparentize(0.3, theme.colors.blue03),
          },
          '&::placeholder': {
            color: theme.colors.greymed01,
          },
        },
      }),
      error: ({ theme }: { theme: DefaultTheme }) => ({
        '&:not([disabled])': {
          '--form-bg-color': theme.colors.red01,
          '--form-border-color': theme.colors.red07,
          '&:hover': {
            '--form-bg-color': theme.colors.red01,
            '--form-border-color': theme.colors.red07,
          },
          '&:focus, &:active': {
            '--form-bg-color': theme.colors.red01,
            '--form-border-color': theme.colors.red07,
            '--ring-color': transparentize(0.7, theme.colors.red07),
          },
          '&::placeholder': {
            color: theme.colors.greymed01,
          },
        },
      }),
    },
  },
};

// TODO: move to `componentStyles/form/tags.ts`
const inputTags: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: DefaultTheme }) => ({
    ...inputBase(theme),
    '&:focus-within, &:focus, &:active': {
      ...inputFocusBase(theme),
    },
    '&[disabled]': {
      '--form-bg-color': theme.colors.greylight02,
      '--form-border-color': transparentize(0.5, theme.colors.greylight05),
      color: theme.colors.greymed01,
      cursor: 'not-allowed',
      '&::placeholder': {
        color: theme.colors.greymed01,
      },
    },
  }),
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      default: ({ theme }: { theme: DefaultTheme }) => ({
        '&:not([disabled])': {
          '--form-bg-color': theme.colors.greylight01,
          '--form-border-color': theme.colors.greylight05,
          '&:hover': {
            '--form-bg-color': theme.colors.greylight03,
            '--form-border-color': theme.colors.greymed01,
          },
          '&:focus-within, &:focus, &:active': {
            '--form-bg-color': theme.colors.greylight01,
            '--form-border-color': theme.colors.blue06,
            '--ring-color': transparentize(0.7, theme.colors.blue06),
          },
          '&::placeholder': {
            color: theme.colors.greymed01,
          },
        },
      }),
      focused: ({ theme }: { theme: DefaultTheme }) => ({
        '&:not([disabled])': {
          '--form-bg-color': theme.colors.greylight01,
          '--form-border-color': theme.colors.blue06,
          '--ring-color': transparentize(0.7, theme.colors.blue06),
          '&:hover, &:focus-within, &:focus, &:active': {
            '--form-bg-color': theme.colors.greylight01,
            '--form-border-color': theme.colors.blue06,
            '--ring-color': transparentize(0.7, theme.colors.blue06),
          },
          '&::placeholder': {
            color: theme.colors.greymed01,
          },
        },
      }),
      error: ({ theme }: { theme: DefaultTheme }) => ({
        '&:not([disabled])': {
          '--form-bg-color': theme.colors.red01,
          '--form-border-color': theme.colors.red07,
          '&:hover': {
            '--form-bg-color': theme.colors.red01,
            '--form-border-color': theme.colors.red07,
          },
          '&:focus-within, &:focus, &:active': {
            '--form-bg-color': theme.colors.red01,
            '--form-border-color': theme.colors.red07,
            '--ring-color': transparentize(0.7, theme.colors.red07),
          },
          '&::placeholder': {
            color: theme.colors.greymed01,
          },
        },
      }),
      disabled: ({ theme }: { theme: DefaultTheme }) => ({
        '--form-bg-color': theme.colors.greylight02,
        '--form-border-color': transparentize(0.5, theme.colors.greylight05),
        color: theme.colors.greymed01,
        cursor: 'not-allowed',
        '&::placeholder': {
          color: theme.colors.greymed01,
        },
      }),
    },
  },
};

// TODO: move to `componentStyles/form/message.ts`
const inputMessage: ComponentThemeConfig = {
  propToScaleMap: [['variant', 'variants']],
  scales: {
    variants: {
      default: {
        color: 'greymed05',
      },
      success: {
        color: 'green08',
      },
      warning: {
        color: 'yellow08',
      },
      critical: {
        color: 'red07',
      },
      info: {
        color: 'indigo06',
      },
    },
  },
};

const form = {
  inputText,
  inputTextarea,
  inputTags,
  inputMessage,
  ...formSelect,
  ...formToggle,
};

export default form;
