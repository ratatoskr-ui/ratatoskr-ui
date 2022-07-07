import { Theme } from '@ratatoskr-ui/components';
import type { ComponentThemeConfig, ComponentThemeScaleFn } from '../../system';

const paginationButtonBaseStyle: ComponentThemeScaleFn<{ theme: Theme; isActive: boolean }> = ({
  theme,
  isActive,
}) => ({
  display: 'inline-flex',
  outline: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  height: '32px',
  width: '32px',
  textAlign: 'center',
  borderRadius: 'sm',
  border: '1px solid transparent',
  userSelect: 'none',
  '&:hover': {
    backgroundColor: theme.colors.greylight03,
  },
  '&:focus': {
    backgroundColor: theme.colors.grey01,
    border: '2px solid rgba(175, 214, 255, 0.7)',
  },
  '&:active': {
    borderColor: theme.colors.blue05,
    backgroundColor: theme.colors.blue01,
  },
  ...(isActive
    ? {
        '&:hover': {
          backgroundColor: theme.colors.blue07,
        },
        '&:focus': {
          backgroundColor: theme.colors.blue07,
        },
        '&:active': {
          backgroundColor: theme.colors.blue07,
        },
        backgroundColor: theme.colors.blue07,
        color: theme.colors.white,
      }
    : {}),
});

const paginationButton: ComponentThemeConfig = {
  baseStyle: paginationButtonBaseStyle,
};
const pagination = {
  paginationButton,
};

export default pagination;
