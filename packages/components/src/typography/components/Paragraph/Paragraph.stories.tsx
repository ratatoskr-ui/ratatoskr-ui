import * as React from 'react';
import { Story } from '@storybook/react';

import { theme } from '../../../theme';
import Paragraph, { ParagraphProps } from './Paragraph';

export default {
  title: 'Core/Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    scale: {
      options: [200, 300, 400, 500],
    },
    fontFamily: {
      options: Object.keys(theme.fonts),
    },
    fontWeight: {
      options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
};

const Template: Story<ParagraphProps> = ({ scale, fontFamily, fontWeight }) => (
  <Paragraph {...{ scale, fontFamily, fontWeight }}>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae esse
    reprehenderit fugit, quas doloremque, itaque minus maxime iste tempora
    molestiae veniam incidunt deleniti ut distinctio quod eius, reiciendis
    voluptates repellat maiores recusandae animi cumque dolor deserunt
    assumenda. Molestiae, cum asperiores?
  </Paragraph>
);

export const Example = Template.bind({});
Example.args = {
  scale: 400,
  fontFamily: 'system',
};
