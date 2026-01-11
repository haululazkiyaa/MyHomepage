---
title: "Advanced TypeScript Types: Utility Types and Type Guards"
excerpt: "Dive deep into TypeScript's advanced type system, including utility types, conditional types, and type guards."
thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=533&fit=crop"
category: "TypeScript"
tags: ["TypeScript", "Types", "Programming", "JavaScript"]
author: "Muhammad Haulul Azkiyaa"
publishedDate: 2024-05-12
readTime: "8 min read"
---

TypeScript's type system is incredibly powerful. Let's explore advanced features that can make your code more type-safe and maintainable.

## Utility Types

TypeScript provides several built-in utility types:

### 1. Partial&lt;T&gt;

Makes all properties optional:

```typescript
interface User {
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
```

### 2. Pick&lt;T, K&gt; and Omit&lt;T, K&gt;

Select or exclude specific properties:

- **Pick** - Select specific properties
- **Omit** - Exclude specific properties

### 3. Record&lt;K, T&gt;

Create an object type with specific key and value types:

```typescript
type PageInfo = Record<string, { title: string; url: string }>;
```

## Type Guards

Type guards help narrow down types at runtime:

### typeof Type Guards

```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

### instanceof Type Guards

```typescript
if (error instanceof Error) {
  console.log(error.message);
}
```

## Conditional Types

Create types based on conditions:

```typescript
type IsString<T> = T extends string ? true : false;
```

## Mapped Types

Transform properties of existing types:

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

## Template Literal Types

Create types from string templates:

```typescript
type EventName = `on${Capitalize<string>}`;
```

## Best Practices

1. Use utility types to avoid code duplication
2. Implement type guards for runtime type safety
3. Leverage conditional types for complex type logic
4. Keep types simple and readable

## Conclusion

Advanced TypeScript types provide powerful tools for creating type-safe applications. Mastering these features will make your code more robust and maintainable.
