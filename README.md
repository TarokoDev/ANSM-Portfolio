# ANSM Portfolio

This repository contains the source code for Austin Nathaniel Soriano Miranda's personal portfolio website. The front-end is built with React and Vite and showcases projects using 3D scenes created with Spline and Three.js.

## Purpose

The goal of this project is twofold: to present who I am, including my skills and projects — and to deepen my understanding of frontend development. The original version (current main branch) was intentionally built without UI frameworks to reinforce core concepts in React, JavaScript, HTML, and CSS. Writing raw CSS helped me better understand the fundamentals and improve as a developer. 

## What's next

1. Add more projects that I built into the projects section
2. Transition from CSS to using Tailwind CSS framework
3. Maybe replace custom components (buttons, links, cards, etc) with bullet-proof components like ShadCN/UI.
4. Take advantage of OpenAI codex to have better understanding of codebase, suggest improvements, and faster development.

## Branches

main - The original code written in React, HTML, CSS, Javascript, you may encounter spaghetti code. This branch is deployed to Netlify.

v1 - A copy of the main branch.

v2 - Optimise and refactor code of copy of main branch. Transition from CSS to TailwindCSS (Work-in-progress)

## Setup


```bash
cd frontend
npm install
npm run dev
```

## Building for Production

Run the following to generate an optimized build:

```bash
npm run build
```

## Major Dependencies

The project relies on several libraries, including:

- [React](https://reactjs.org/) & [Vite](https://vitejs.dev/)
- [Three.js](https://threejs.org/) and [Spline](https://spline.design/) for 3D scenes
- [Material UI](https://mui.com/) (MUI)
- [FontAwesome](https://fontawesome.com/)

## Live Site

A deployed version is available at [https://austinmiranda.netlify.app](https://austinmiranda.netlify.app) if you would like to see the portfolio in action.

## Contributing

Contributions are welcome. Fork the repository, create a branch for your changes, and open a pull request. For substantial changes, consider opening an issue first to discuss your ideas.
