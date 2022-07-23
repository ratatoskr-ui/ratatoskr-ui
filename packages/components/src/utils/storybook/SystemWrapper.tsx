/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { DecoratorFn } from '@storybook/react';
import { RatatoskrProvider } from '../../global-provider';

import 'typeface-inter';

const SystemWrapper: DecoratorFn = (storyFn) => (
  <RatatoskrProvider>{storyFn()}</RatatoskrProvider>
);

export default SystemWrapper;
