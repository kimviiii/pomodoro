# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

## Code Style Guidelines
- Use functional components with React hooks
- Import order: React, external packages, internal components, CSS modules
- Use named exports for components: `export default ComponentName`
- CSS modules for styling with kebab-case class names
- Use camelCase for variables/functions, PascalCase for components
- Destructure props in component parameters
- Keep components small and focused on a single responsibility
- Handle UI states explicitly (loading, error, empty, success)
- Use descriptive variable names that reflect purpose
- Format times with padStart(2, "0") for consistent display
- Use constants for magic numbers and reusable values