Kinsley White's personal portfolio/resume site — built with React + Vite + TypeScript.

Website: https://kinsleywhite.com

## Development

```
npm install
npm run dev
```

## Editing content

Resume content (experience, skills, education, certifications) lives in `src/data/resume.ts` — edit that file to update the site without touching the component markup.

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.
