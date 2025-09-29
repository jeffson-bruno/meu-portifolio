# Copilot Instructions for AI Coding Agents

## Project Overview
This is a Next.js portfolio site using TypeScript and Tailwind CSS. The codebase is organized for clarity and modularity, with a focus on reusable components and maintainable structure.

## Architecture & Structure
- **Pages & Layouts:**
  - Main entry: `src/app/page.tsx` (home page)
  - Global styles: `src/app/globals.css`
  - Layout wrapper: `src/app/layout.tsx`
- **Components:**
  - All UI components are in `src/components/` (e.g., `Header.tsx`, `Footer.tsx`, `ProjectCard.tsx`).
  - Components are functional React components using TypeScript.
- **Assets:**
  - Images are stored in `public/img/` and `public/imgs/`.

## Developer Workflows
- **Build:**
  - Use `npm run build` to build the project.
- **Development:**
  - Use `npm run dev` to start the local development server.
- **Styling:**
  - Tailwind CSS is configured via `tailwind.config.js` and `postcss.config.js`.
  - Global styles are in `src/app/globals.css`.
- **TypeScript:**
  - TypeScript configuration is in `tsconfig.json`.

## Patterns & Conventions
- **Component Naming:**
  - Use PascalCase for component files and exports.
- **Props:**
  - Prefer explicit TypeScript interfaces for props.
- **Sectioning:**
  - Major sections (e.g., Projects, Contact) are implemented as separate components for clarity and reusability.
- **Animations:**
  - UI effects (e.g., fade-in) are handled by dedicated components like `FadeInSection.tsx`.

## Integration Points
- **No backend integration** is present; all data is static or imported directly into components.
- **External dependencies:**
  - Next.js, React, Tailwind CSS, PostCSS.

## Example: Adding a New Section
1. Create a new component in `src/components/` (e.g., `AboutMe.tsx`).
2. Import and use it in `src/app/page.tsx`.
3. Add any required styles to `globals.css` or use Tailwind utility classes.

## Key Files
- `src/app/page.tsx`: Main page composition
- `src/components/`: All reusable UI components
- `tailwind.config.js`, `postcss.config.js`: Styling configuration
- `tsconfig.json`: TypeScript settings

---
For questions or unclear conventions, ask for clarification or review recent changes in the above files.
