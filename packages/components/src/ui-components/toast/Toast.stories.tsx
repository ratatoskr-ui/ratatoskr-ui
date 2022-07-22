import { action } from '@storybook/addon-actions';
import { Button } from '../button';
import * as React from 'react';
import { Box } from '../../layout';
import useToast from './useToast';

export default {
  title: 'Core/Components/Toast',
};

export const Example = () => {
  const { addToast } = useToast();
  return (
    <Box sx={{ '> :not([hidden]) ~ :not([hidden])': { marginLeft: 'md' } }}>
      <Button type="button" onClick={() => addToast({ message: 'Single line' })}>
        Single line
      </Button>
      <Button
        type="button"
        onClick={() =>
          addToast({ message: 'Single line with action', actionText: 'Action', onAction: () => action('click') })
        }
      >
        Single line with action
      </Button>
      <Button
        type="button"
        onClick={() =>
          addToast({
            message: 'Single line',
            dismissible: true,
          })
        }
      >
        Single line dismissable
      </Button>
      <Button
        type="button"
        onClick={() =>
          addToast({
            message:
              'Multiple line. Lorem ipsum dolor sit, consectetur adipiscing elit. Cras morbi enim, nisl in.',
          })
        }
      >
        Multiple line
      </Button>
      <Button
        type="button"
        onClick={() =>
          addToast({
            message:
              'Multiple line. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras morbi enim, nisl in.',
            actionText: 'Action',
            onAction: () => action('click'),
          })
        }
      >
        Multiple line with action
      </Button>

      <Button
        type="button"
        onClick={() =>
          addToast({
            message: 'Error',
            status: 'error',
            dismissAfter: 5000,
          })
        }
      >
        Error with action
      </Button>
    </Box>
  );
};
