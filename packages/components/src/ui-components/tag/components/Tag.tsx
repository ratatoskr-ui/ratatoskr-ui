import * as React from 'react';
import { XCircleIcon } from '@heroicons/react/solid';
import { Box, Stack } from '../../../layout';
import { Text } from '../../../typography';
import { useComponentStyles } from '../../../system';
import { UnstyledButton, UnstyledButtonProps } from '../../button';

export interface TagProps
  extends Omit<UnstyledButtonProps, 'size'>,
    React.ComponentPropsWithoutRef<'button'> {
  /** Additional CSS classes to give to the component. */
  className?: string;
  /** Additional CSS properties to give to the component. */
  style?: React.CSSProperties;
  /** Add a custom icon to the left of the icon. */
  icon?: React.ReactNode;
  /** Set `true` to display the Close icon in the Tag. */
  hasCloseIcon?: boolean;
  /** Triggers when the Tag is clicked. */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** selected state */
  selected?: boolean;
}

const Tag = React.forwardRef<HTMLButtonElement, TagProps>(
  (
    {
      className,
      style,
      children,
      icon,
      hasCloseIcon = false,
      onClick,
      sx,
      type = 'button',
      selected,
      ...rest
    },
    ref
  ) => {
    const boxStyles = useComponentStyles('tagRoot', { selected });

    return (
      <UnstyledButton
        ref={ref}
        style={style}
        className={className}
        sx={{ ...boxStyles, ...sx }}
        type={type}
        onClick={onClick}
        {...rest}
      >
        <Stack direction="horizontal" spacing={'xxs'} alignItems={'center'}>
          {icon}
          <Text scale={200}>{children}</Text>
          {hasCloseIcon && (
            <Box width={16} height={16}>
              <XCircleIcon fill="currentColor" aria-hidden="true" width={16} />
            </Box>
          )}
        </Stack>
      </UnstyledButton>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;
