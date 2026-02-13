# pixel-cv

Simple personal CV/portfolio website in Pixel style.

The homepage content is data-driven from `public/cv.json`, you can update their profile, experience, skills, projects, and contact details without touching React components.

## What this project is

- A single-page personal CV/portfolio site
- Responsive layout for desktop and mobile
- Personal data loaded from `public/cv.json`
- Header logo and favicon loaded from `public/logo.png`

## How to run

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:5173/
```

## How to update your content

Edit `public/cv.json` and update values such as:

- `name`
- `title`
- `email`
- `location`
- `bio`
- `socials`
- `experience`
- `skills`
- `projects`
- `education`

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## Build for production

```bash
npm run build
```
