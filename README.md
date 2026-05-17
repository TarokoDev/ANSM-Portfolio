# ANSM Portfolio

Personal portfolio site for **Austin Nathaniel Soriano Miranda** — a single-page React app built with Vite. The home section features an interactive 3D scene (Spline), and the site scrolls through Home, About, and Projects.

**Live site:** [austinmiranda.netlify.app](https://austinmiranda.netlify.app)

## Purpose

This project serves two goals: showcase my skills and projects, and keep sharpening frontend fundamentals. The original layout was built with plain CSS Modules (no utility framework) to stay close to React, HTML, and CSS. A refactored **v2** UI now ships alongside a frozen **v1** snapshot so visitors can compare versions from the in-app settings menu.

## Features

- **Scroll-based sections** — anchor navigation via `react-scroll` (Home → About → Projects)
- **v1 / v2 switcher** — gear icon opens Settings; choice is saved in `localStorage` (`portfolio-version`)
- **Content as data** — copy, links, skills, and project cards live in `*Data.js` files (no backend)
- **Spline 3D hero** — scene URL configured in `HomeData.js`
- **Motion** — Framer Motion for navbar, settings dialog, and section transitions

## Project structure

```
frontend/
├── public/              # Static assets (images, resume.pdf)
├── src/
│   ├── App.jsx          # Section shell + v1/v2 switching
│   ├── components/
│   │   ├── navbar/      # v2 navbar
│   │   ├── v1/navbar/   # v1 navbar
│   │   ├── settings/    # Settings dialog (version picker)
│   │   └── buttons/
│   └── pages/
│       ├── home/        # v2 sections
│       ├── about/
│       ├── projects/
│       └── v1/          # v1 snapshot (home, about, projects)
```

To edit site content, update the matching `*Data.js` under `pages/` (v2, default) or `pages/v1/` (legacy snapshot).

## Setup

From the repository root:

```bash
cd frontend
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # production build → dist/
npm run lint     # ESLint (zero warnings allowed)
npm run preview  # serve the production build locally
```

## Branches

| Branch | Description |
|--------|-------------|
| `main` | Production branch (Netlify). Includes both v1 and v2 UIs with the runtime switcher. |
| `v1` | Historical branch — original site before the v1 snapshot was embedded on `main`. |
| `v2` | Reserved for Tailwind CSS migration (currently aligned with `main`; work in progress). |

## Tech stack

- [React](https://react.dev/) 18 + [Vite](https://vitejs.dev/)
- [Spline](https://spline.design/) (`@splinetool/react-spline`) and [Three.js](https://threejs.org/) for 3D
- [Framer Motion](https://www.framer.com/motion/) for animations
- [react-scroll](https://github.com/fisshy/react-scroll) for section navigation
- [Material UI](https://mui.com/) icons, [Font Awesome](https://fontawesome.com/) icons
- **Styling:** CSS Modules (`.module.css` per component)

## Roadmap

1. Add more projects to the Projects section
2. Migrate styling to **Tailwind CSS** (tracked on the `v2` branch)
3. Evaluate component libraries (e.g. ShadCN/UI) for shared UI primitives

## Contributing

Contributions are welcome. Fork the repo, create a branch for your changes, and open a pull request. For larger changes, open an issue first to discuss the approach.
