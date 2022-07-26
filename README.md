# SvelteKit

SvelteKit is a framework for building extremely high-performance web apps.

## Resources

- [Svelte Docs](https://svelte.dev/docs)
- [SvelteKit Docs](https://kit.svelte.dev/docs/introduction)
- [Fireship.io - Svelte 3 Reaction & QuickStart Tutorial](https://www.youtube.com/watch?v=043h4ugAj4c)

## Initial Setup

```
npm create svelte@latest my-app
cd my-app
npm install
npm run dev
```

## Project Structure

[https://kit.svelte.dev/docs/project-structure](https://kit.svelte.dev/docs/project-structure)

You create pages by adding files to the src/routes directory of your project. These will be server-rendered so that a user's first visit to your app is as fast as possible, then a client-side app takes over.

```
my-project/
├ src/
│ ├ lib/
│ │ └ [your lib files]
│ ├ params/
│ │ └ [your param matchers]
│ ├ routes/
│ │ └ [your routes]
│ ├ app.html
│ └ hooks.js
├ static/
│ └ [your static assets]
├ package.json
├ svelte.config.js
├ tsconfig.json
└ vite.config.js
```

## Examples

- http://127.0.0.1:5173/basics
- http://127.0.0.1:5173/stores
- http://127.0.0.1:5173/components
