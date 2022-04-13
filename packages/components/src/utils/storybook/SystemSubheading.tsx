import * as React from 'react';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { Box } from '../../layout';
import { Heading } from '../../typography';
import { theme } from '../../theme';

interface SystemSubheadingProps extends SpaceProps{
  children? : React.ReactNode
}

const HorizontalRule = styled('hr')<SystemSubheadingProps>`
  ${space}
  border: none;
  border-top: 1px solid ${themeGet('colors.grey04', theme.colors.grey04)};
`;

const SystemSubheading: React.FC<SystemSubheadingProps> = ({ children, ...rest }) => (
  <Box {...rest}>
    <Heading scale={600}>{children}</Heading>
    <HorizontalRule mt="sm" mb={0} />
  </Box>
);

SystemSubheading.displayName = 'SystemSubheading';

export default SystemSubheading;
