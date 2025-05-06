# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- Install all dependencies: `npm run install:all`
- Start dev server: `npm run dev`
- Compile: `npm run compile`
- Package extension: `npm run package`
- Build .vsix file: `npm run build`
- Run all tests: `npm test`
- Run extension tests: `npm run test:extension`
- Run specific test: `npm run test:extension -- -t "test name pattern"`
- Lint: `npm run lint`
- Type check: `npm run check-types`
- Generate types: `npm run generate-types`

## Coding Style Guidelines

- **Tabs/Spacing**: Use tabs with width of 4, max line length 120 chars
- **Semicolons**: No semicolons at the end of statements
- **TypeScript**: Strict mode enabled, use explicit typing
- **Naming**: camelCase for variables/functions, PascalCase for classes/interfaces
- **Imports**: Use camelCase or PascalCase for imports
- **Variables**: Prefix unused variables with `_` (e.g., `_unused`)
- **Formatting**: Use Prettier for consistent formatting
- **Testing**: Write unit tests in `__tests__` folders with `.test.ts` suffix
- **Git Flow**: Never commit directly to main branch, create a branch for changes
- **Changesets**: Create changesets for new features/fixes with `npm run changeset`

Before committing, ensure code passes linting and type checking. Use ES2022 features with TS.
