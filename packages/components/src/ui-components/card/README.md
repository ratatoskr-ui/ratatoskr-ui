# Card
Cards are used to group information about subjects and their related actions. Cards can include images, text, buttons, links, and data visualizations.

## Usage

### `<Card />`

To use this component in your app, import as follows:

```jsx
import { Box, Card } from '@ratatoskr-ui/component';

export default function Component() {
  return (
    <Card elevation={1}>
      <img
        alt="Example"
        src="https://64.media.tumblr.com/98da5de8e9832eb1c73d6180ce4648c0/36ac9104848b7e00-b5/s400x600/cca94e0d1cb3b61c62fc0a88151fbc92336693ad.jpg"
        style={{
          height: 248,
          objectFit: 'cover',
          width: '100%',
        }}
      />
      <Box padding="sm" flex="1 1 auto">
        <Heading scale={500}>An Example Card</Heading>
        <Paragraph marginTop="xs" marginBottom={0}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi omnis, reiciendis doloremque quisquam sequi
          vel eaque aperiam vitae facere quia atque, hic, unde animi asperiores repudiandae quis ab enim repellat?
        </Paragraph>
      </Box>
    </Card>
  );
}
```

This component composes the `Box` component, so you can also use the styled-system hooks defined in said component

```jsx
import { Box, Card } from '@ratatoskr-ui/component';

// Example for card with `sm` border radius.
export default function Component({ children }) {
  return (
    <Card elevation={1} borderRadius="sm">
      {children}
    </Card>
  );
}
```


#### Props

| Property | Type            | Required | Default   | Description                                     |
| -------- | --------------- | -------- | --------- | ----------------------------------------------- |
| actions  | React.ReactNode | -        | undefined | Additional action buttons that appear on hover. |
| image    | string          | -        | undefined | Any image to add to the card.                   |
| imageAlt | string          | -        | undefined | Alt text to the card image.                     |
