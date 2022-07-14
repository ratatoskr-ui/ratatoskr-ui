# Accordion

An accordion displays summary information that can be expanded to reveal content or collapsed to hide it. Can be used to group or hide complex regions to keep the page clean.

> Delivers large amounts of content in a small space through progressive disclosure

This component is essentially a wrapper for Radix UI Accordion component. Read [their documentation](https://www.radix-ui.com/docs/primitives/components/accordion)

## Usage

To use this component within your React app, import as follows:

```jsx
import { Accordion } from '@ratatoskr-ui/components';

export default function MyApp({ children }) {
  return {
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
            Content
          </Box>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  };
}
```