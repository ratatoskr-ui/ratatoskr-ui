/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { DecoratorFn } from '@storybook/react';
import { SteadfastProvider } from '../../global-provider';

import 'typeface-inter';

const SystemWrapper: DecoratorFn = storyFn => <SteadfastProvider>{storyFn()}</SteadfastProvider>;

export default SystemWrapper;
