# Storybook 9 Component Library

This project now includes comprehensive Storybook 9 documentation for all components in the `@/components` folder.

## 🚀 Getting Started

To start Storybook:

```bash
npm run storybook
```

To build Storybook for production:

```bash
npm run build-storybook
```

## 📚 Available Components

### Core Components

#### 1. **Accordion** (`src/components/accordion/`)

- **Stories**: Default, Multiple, LongContent
- **Features**: Collapsible content sections with smooth animations
- **Built with**: HTML details/summary elements

#### 2. **Button** (`src/components/button/`)

- **Stories**: Primary, Secondary, Text, Disabled, Small, Medium, FullWidth, AsLink, WithClickHandler, AllVariants
- **Features**: Multiple styles, sizes, states, and can render as link or button
- **Props**: `style`, `size`, `fullWidth`, `disabled`, `href`, `onClick`

#### 3. **Modal** (`src/components/modal/`)

- **Stories**: Default, Small, Large, ExtraLarge, WithCustomCloseButton, NoTitle, AllSizes
- **Features**: Different sizes, customizable close button, localStorage state saving
- **Built with**: Headless UI Dialog

#### 4. **Tabs** (`src/components/tabs/`)

- **Stories**: Default, ManyTabs, DisabledTab, ControlledTabs
- **Features**: Accessible tab navigation with keyboard support
- **Built with**: Radix UI Tabs

#### 5. **Carousel** (`src/components/carousel/`)

- **Stories**: Default, WithoutNavigationButtons, WithoutDotButtons, MinimalCarousel, ManySlides, ImageCarousel
- **Features**: Touch/wheel gestures, navigation buttons, dot indicators
- **Built with**: Embla Carousel

### Navigation Components

#### 6. **Breadcrumbs** (`src/components/breadcrumbs/`)

- **Stories**: HomeOnly, SingleLevel, TwoLevels, ThreeLevels, DeepNavigation, BlogNavigation, EcommerceNavigation, DocumentationNavigation, LongTitles, AllExamples
- **Features**: Responsive navigation hierarchy, auto-scroll on mobile
- **Props**: `path` array with title and url

#### 7. **Dropdown** (`src/components/dropdown/`)

- **Stories**: Default, NavigationMenu, ProductCategories, UserActions, SingleItem, ManyItems, LongLabels, LanguageSelector, AdminMenu, MultipleDropdowns
- **Features**: Smooth animations, keyboard navigation
- **Built with**: Headless UI Menu

#### 8. **Navigation Menu** (`src/components/ui/navigation-menu`)

- **Stories**: Default, SimpleMenu, EcommerceMenu
- **Features**: Complex dropdown menus with rich content
- **Built with**: Radix UI Navigation Menu

### Layout Components

#### 9. **Grid** (`src/components/containers/grid`)

- **Stories**: TwoColumns, ThreeColumns, FourColumns, FiveColumns, SixColumns, ProductGrid, TeamGrid, AllColumnSizes
- **Features**: Responsive grid with 2-6 columns, mobile-first breakpoints
- **Props**: `cols` (2-6)

#### 10. **Heading** (`src/components/heading/`)

- **Stories**: Default, AllLevels, AllSizes, ExtraLarge, Large, Medium, Small, ExtraSmall, WithSpecialCharacters, CustomClassName, ContentHierarchy
- **Features**: Semantic HTML levels, visual sizes, auto-generated IDs
- **Props**: `level` (h1-h4), `size` (xl-xs)

### Feedback Components

#### 11. **Notification** (`src/components/notification/`)

- **Stories**: Standard, Success, Warning, Error, LongContent, WithRichContent, AllTypes, FormValidation, SystemMessages, ShoppingCart, Interactive
- **Features**: Different types, dismissible, ARIA attributes
- **Props**: `type` (standard, success, warning, error)

#### 12. **Toaster** (`src/components/toaster/`)

- **Stories**: Default, AllTypes, WithActions, CustomDuration, PromiseToast, EcommerceExample, FormValidationExample
- **Features**: Toast notifications with actions, promises, custom durations
- **Built with**: Sonner

### Content Components

#### 13. **Rich Text** (`src/components/rich-text/`)

- **Stories**: Default, BlogPost, Documentation, Article, SimpleContent, ListsAndTables
- **Features**: Typography styling for markdown content
- **Built with**: Tailwind CSS Typography

## 🎨 Storybook Features

### Addons Included

- **@storybook/addon-docs**: Automatic documentation generation
- **@storybook/addon-a11y**: Accessibility testing
- **@chromatic-com/storybook**: Visual testing
- **@storybook/addon-vitest**: Unit testing integration

### Configuration

- **Framework**: Next.js with Vite
- **Styling**: Tailwind CSS with custom configuration
- **TypeScript**: Full TypeScript support
- **Auto-docs**: Automatic documentation for all components

## 📖 Story Types

Each component includes multiple story types:

1. **Default**: Basic usage example
2. **Variants**: Different visual styles and configurations
3. **Interactive**: Stories with user interaction
4. **Real-world Examples**: Practical use cases (e.g., e-commerce, forms)
5. **Edge Cases**: Long content, many items, special characters

## 🔧 Development

### Adding New Stories

1. Create a `.stories.tsx` file next to your component
2. Follow the existing pattern:

```typescript
import type { Meta, StoryObj } from "@storybook/react";
import YourComponent from "./your-component";

const meta: Meta<typeof YourComponent> = {
  title: "Components/YourComponent",
  component: YourComponent,
  parameters: {
    layout: "centered", // or "padded"
    docs: {
      description: {
        component: "Description of your component",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    // Define controls for props
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // Default props
  },
};
```

### Best Practices

1. **Use descriptive story names** that explain the use case
2. **Include comprehensive examples** covering all major props and states
3. **Add documentation** using the `docs` parameter
4. **Test accessibility** using the a11y addon
5. **Consider real-world usage** in your examples

## 🌟 Key Features

- **Comprehensive Coverage**: All components in `@/components` have stories
- **Interactive Examples**: Many stories include interactive elements
- **Real-world Scenarios**: E-commerce, forms, navigation examples
- **Accessibility**: Built-in a11y testing and ARIA attributes
- **TypeScript**: Full type safety and IntelliSense
- **Responsive Design**: Stories demonstrate mobile-first responsive behavior
- **Modern Tooling**: Storybook 9 with latest addons and features

## 📱 Responsive Testing

Many components include responsive behavior that can be tested in Storybook:

- Use the viewport addon to test different screen sizes
- Grid components show responsive column behavior
- Navigation components adapt to mobile layouts
- Carousel components support touch gestures

## 🎯 Use Cases Covered

- **E-commerce**: Product grids, shopping cart notifications, category navigation
- **Forms**: Validation feedback, input components, submission states
- **Content**: Blog posts, documentation, rich text formatting
- **Navigation**: Breadcrumbs, menus, tabs, dropdowns
- **Feedback**: Notifications, toasts, loading states
- **Layout**: Responsive grids, containers, spacing

This Storybook setup provides a comprehensive design system and component library that can be used for development, testing, and documentation purposes.
