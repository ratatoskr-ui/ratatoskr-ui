# Breadcrumb

> The breadcrumb is a secondary navigation pattern that helps a user understand the hierarchy among levels and navigate back through them.

[WAI-ARIA Authoring Practices 1.1 - Section 3.4: Breadcrumb](https://www.w3.org/TR/wai-aria-practices-1.1/#breadcrumb)

## Usage

To use this component within your app, import as follows:

```jsx
import { Breadcrumb, BreadcrumbItem } from '@ratatoskr-ui/components';

export default function BasicExample() {
  return (
    <Breadcrumb
      items={[
        <BreadcrumbItem href="/">Home</BreadcrumbItem>,
        <BreadcrumbItem href="/item-1">Item 1</BreadcrumbItem>,
        <BreadcrumbItem href="/item-2">Item 2</BreadcrumbItem>,
      ]}
    />
  );
}
```

### Custom separators

By default, breadcrumbs use the slash character (`/`) as the separator. However, if you want to include a custom SVG icon as a separator, you can use the `separator` prop.

```jsx
import { MdOutlineAdd } from 'react-icons/md';
import { Breadcrumb, BreadcrumbItem } from '@ratatoskr-ui/components';

export default function BasicExample() {
  return (
    <Breadcrumb
      items={[
        <BreadcrumbItem href="/">Home</BreadcrumbItem>,
        <BreadcrumbItem href="/item-1">Item 1</BreadcrumbItem>,
        <BreadcrumbItem href="/item-2">Item 2</BreadcrumbItem>,
      ]}
      separator={MdOutlineAdd}
    />
  );
}
```
