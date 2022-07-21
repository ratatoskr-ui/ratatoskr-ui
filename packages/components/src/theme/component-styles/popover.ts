import { Theme } from '@ratatoskr-ui/components';
import { ComponentThemeConfig } from '../../system';

const popoverContent: ComponentThemeConfig = {
  baseStyle: ({ theme }: { theme: Theme }) => ({
    '--popover-border': theme.colors.greylight01,
    '--popover-background': theme.colors.greylight01,
    backgroundColor: 'var(--popover-background)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'var(--popover-border)',
    borderRadius: 'sm',
    boxShadow: 4,
    zIndex: 1000,
  }),
};

const popover = {
  popoverContent,
};

export default popover;
