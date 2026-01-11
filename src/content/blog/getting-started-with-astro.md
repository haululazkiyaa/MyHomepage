---
title: "Getting Started with Astro: A Modern Web Framework"
excerpt: "Learn how to build lightning-fast websites with Astro, the modern static site generator that ships zero JavaScript by default."
thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=533&fit=crop"
category: "Web Development"
tags: ["Astro", "JavaScript", "Web Development", "SSG"]
author: "Muhammad Haulul Azkiyaa"
publishedDate: 2024-01-15
readTime: "5 min read"
---

Astro is a revolutionary framework that's changing how we build modern websites. Unlike traditional frameworks, Astro ships zero JavaScript by default, resulting in incredibly fast page loads.

## Why Choose Astro?

There are several compelling reasons to use Astro for your next project:

- Lightning-fast performance with minimal JavaScript
- Component framework agnostic - use React, Vue, Svelte, or plain HTML
- Built-in optimizations like automatic image optimization
- Excellent developer experience with hot module replacement

## Getting Started

To create a new Astro project, simply run:

```bash
npm create astro@latest
```

Follow the prompts to set up your project structure and choose your preferred configuration.

### Project Structure

An Astro project has a clean, intuitive structure:

1. **src/pages/** - Your page components and routes
2. **src/components/** - Reusable UI components
3. **src/layouts/** - Page layout templates
4. **public/** - Static assets like images and fonts

## Building Your First Page

Creating pages in Astro is straightforward. Here's a simple example:

```astro
---
const title = 'My First Astro Page';
---

<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <h1>{title}</h1>
  </body>
</html>
```

## Conclusion

Astro provides an excellent foundation for building fast, modern websites. Its unique approach to JavaScript delivery makes it perfect for content-focused sites that prioritize performance.
