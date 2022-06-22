import * as React from 'react';
import { Box } from '../../../../../layout';
import { UnstyledButton } from '../../../../button/components/UnstyledButton';
import { MdCheck, MdOutlineRemove } from "react-icons/md";
import { useComponentStyles } from '../../../../../system';

export interface CheckboxContainerProps extends React.ComponentPropsWithoutRef<'button'> {
  errors?: boolean;
}

export const CheckboxContainer = React.forwardRef<HTMLButtonElement, CheckboxContainerProps>(
  ({ children, disabled, errors, ...rest }, ref) => {
    const checkboxButtonStyle = useComponentStyles('checkboxButton', { errors, disabled });
    const checkboxUnselectedBoxStyle = useComponentStyles('checkboxUnselectedBox', { errors, disabled });
    return (
      <UnstyledButton ref={ref} type="button" sx={checkboxButtonStyle} {...rest} disabled={disabled}>
        <Box sx={checkboxUnselectedBoxStyle} />
        {children}
      </UnstyledButton>
    );
  }
);

export interface CheckboxIndicatorProps {
  errors?: boolean;
  disabled?: boolean;
}

export const CheckboxIndicator = ({ errors, disabled }: CheckboxIndicatorProps) => {
  const checkboxIndicatorStyle = useComponentStyles('checkboxIndicator', { errors, disabled });
  return (
    <Box sx={checkboxIndicatorStyle}>
      <MdCheck size={8} fill="currentColor" />
    </Box>
  );
};

export const CheckboxIndeterminate = ({ errors, disabled }: CheckboxIndicatorProps) => {
  const checkboxIndicatorStyle = useComponentStyles('checkboxIndicator', { errors, disabled });
  return (
    <Box sx={checkboxIndicatorStyle}>
      <MdOutlineRemove size={8} fill="currentColor" />
    </Box>
  );
};
