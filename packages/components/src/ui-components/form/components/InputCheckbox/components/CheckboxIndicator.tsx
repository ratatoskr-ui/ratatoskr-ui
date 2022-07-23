import * as React from 'react';
import { CheckIcon, MinusIcon } from '@heroicons/react/solid';
import { Box } from '../../../../../layout';
import { UnstyledButton } from '../../../../button/components/UnstyledButton';
import { useComponentStyles } from '../../../../../system';

export interface CheckboxContainerProps
  extends React.ComponentPropsWithoutRef<'button'> {
  errors?: boolean;
}

export const CheckboxContainer = React.forwardRef<
  HTMLButtonElement,
  CheckboxContainerProps
>(({ children, disabled, errors, ...rest }, ref) => {
  const checkboxButtonStyle = useComponentStyles('checkboxButton', {
    errors,
    disabled,
  });
  const checkboxUnselectedBoxStyle = useComponentStyles(
    'checkboxUnselectedBox',
    { errors, disabled }
  );
  return (
    <UnstyledButton
      ref={ref}
      type="button"
      sx={checkboxButtonStyle}
      {...rest}
      disabled={disabled}
    >
      <Box sx={checkboxUnselectedBoxStyle} />
      {children}
    </UnstyledButton>
  );
});

export interface CheckboxIndicatorProps {
  errors?: boolean;
  disabled?: boolean;
}

export function CheckboxIndicator({
  errors,
  disabled,
}: CheckboxIndicatorProps) {
  const checkboxIndicatorStyle = useComponentStyles('checkboxIndicator', {
    errors,
    disabled,
  });
  return (
    <Box sx={checkboxIndicatorStyle}>
      <CheckIcon width={14} fill="currentColor" />
    </Box>
  );
}

export function CheckboxIndeterminate({
  errors,
  disabled,
}: CheckboxIndicatorProps) {
  const checkboxIndicatorStyle = useComponentStyles('checkboxIndicator', {
    errors,
    disabled,
  });
  return (
    <Box sx={checkboxIndicatorStyle}>
      <MinusIcon width={14} fill="currentColor" />
    </Box>
  );
}
