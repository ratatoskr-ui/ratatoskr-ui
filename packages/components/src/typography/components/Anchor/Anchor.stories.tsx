import * as React from 'react';
import { Text } from '../Text';

import Anchor from './Anchor';

export default {
  title: 'Core/Typography/Anchor',
  component: Anchor,
};

export function Example() {
  return (
    <Text>
      <Anchor
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/watch?v=P_mQpbCSQOo"
        scale={400}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
        excepturi!
      </Anchor>
    </Text>
  );
}
