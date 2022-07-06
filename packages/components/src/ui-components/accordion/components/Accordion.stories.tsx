import { Story } from '@storybook/react';
import * as React from 'react';
import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from '.';
import { Box } from '../../../layout';

export default {
  title: 'Core/Components/Accordion',
  argTypes: {
    size: {
      options: ['md', 'lg'],
      control: { type: 'radio' },
    },
    type: {
      options: ['single', 'multiple'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      value: [
        {
          name: 'dark',
          value: '#b6b2b2',
        },
      ],
    },
  },
};

export const SingleAccordion: Story<{ size: 'md' | 'lg' }> = ({ size }) => {
  return (
    <Accordion
      type="single"
      defaultValue="item-1"
      collapsible
      style={{
        width: 300,
        backgroundColor: 'greylight01',
        p: 'md',
      }}
    >
      <AccordionItem value="item-1">
        <AccordionHeader size={size}>Title</AccordionHeader>
        <AccordionContent>
          <Box py="sm" px="xs">
            This is content
          </Box>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader size={size}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, atque?</AccordionHeader>
        <AccordionContent>
          <Box py="sm" px="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, eos.
          </Box>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionHeader size={size}>Nested Accordion</AccordionHeader>
        <AccordionContent>
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            style={{
              width: '100%',
              backgroundColor: 'greylight01',
              p: 'md',
            }}
          >
            <AccordionItem value="item-1">
              <AccordionHeader size={size}>Title</AccordionHeader>
              <AccordionContent>
                <Box py="sm" px="xs">
                  This is content
                </Box>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionHeader size={size}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, maiores.</AccordionHeader>
              <AccordionContent>
                <Box py="sm" px="xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nam cupiditate ab, illo ipsam impedit reiciendis nulla debitis. Quisquam, iusto!
                </Box>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
SingleAccordion.args = {
  size: 'md',
};

export const MultipleAccordion: Story<{ size: 'md' | 'lg' }> = ({ size }) => {
  return (
    <Accordion
      type="multiple"
      defaultValue={['item-1']}
      style={{
        width: 300,
        backgroundColor: 'greylight01',
        p: 'md',
      }}
    >
      <AccordionItem value="item-1">
        <AccordionHeader size={size}>Title</AccordionHeader>
        <AccordionContent>
          <Box py="sm" px="xs">
            This is content
          </Box>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader size={size}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</AccordionHeader>
        <AccordionContent>
          <Box py="sm" px="xs">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis possimus eligendi nulla minus laudantium culpa sequi minima quis facere et dolor ducimus architecto saepe in facilis, impedit velit corrupti consectetur nobis? Cumque doloribus possimus sapiente unde eligendi, sed repellendus inventore placeat consequatur facilis, quaerat dicta. Cumque laborum neque facilis ab.
          </Box>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionHeader size={size}>Nested Accordion</AccordionHeader>
        <AccordionContent>
          <Accordion
            type="single"
            defaultValue="item-1"
            collapsible
            style={{
              width: '100%',
              backgroundColor: 'greylight01',
              p: 'md',
            }}
          >
            <AccordionItem value="item-1">
              <AccordionHeader size={size}>Title</AccordionHeader>
              <AccordionContent>
                <Box py="sm" px="xs">
                  This is content
                </Box>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionHeader size={size}>Lorem ipsum dolor sit amet.</AccordionHeader>
              <AccordionContent>
                <Box py="sm" px="xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </Box>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
MultipleAccordion.args = {
  size: 'md',
};
