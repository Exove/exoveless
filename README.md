# Basic Starter

Starter kit for building your site with Next.js and Drupal. UI is built with Typescript, Headless UI, Tailwind CSS and InstantSearch.

## Get started

- Use node version 16
- Copy and rename .env.example as .env.local
- Install node packages by running `yarn`
- Start dev mode by `yarn dev` or preview built project with `yarn preview`

## Hosting

Backend is served externally from Pantheon (see .env.example).

Next.js site is running on Vercel https://nextjs-for-drupal.vercel.app/ and Netlify https://superb-syrniki-5494f8.netlify.app/ These have CI with the GitHub repo.

Search is running as SaaS by Algolia.

## Development tools

Project includes workspace file for VSCode (nextjs.code-workspace).

Recommended VSCode extensions:

- Prettier - Code formatting
- Tailwind CSS IntelliSense
- Headwind
- ESLint
