# ANSM Portfolio Frontend

This directory contains the React frontend built with Vite and TypeScript.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
   The app will reload automatically thanks to Vite's HMR.

## Build

Create an optimized production build with:
```bash
npm run build
```

Preview the built files locally using:
```bash
npm run preview
```
The output is written to the `dist` folder.

## Deployment Notes

Deploy the contents of `dist` to your hosting provider (e.g., Vercel or Netlify). Because this is a React single-page application powered by Vite, configure the server to serve `index.html` for unknown routes.
