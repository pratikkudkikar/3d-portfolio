# Pratik Kudkikar — 3D Portfolio

A modern 3D portfolio website built with Vite, React, Three.js, Tailwind CSS, and Framer Motion. Features a geometric 3D hero scene, smooth animations, and a fully responsive layout.

## Tech Stack

| Tool | Purpose |
|------|---------|
| Vite + React | Fast development & build |
| Three.js / @react-three/fiber | 3D rotating geometric hero scene |
| @react-three/drei | Three.js helpers & utilities |
| Tailwind CSS v3 | Utility-first styling |
| Framer Motion | Smooth scroll & entrance animations |

## Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Opens at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

Output is in the `dist/` folder.

### Preview production build

```bash
npm run preview
```

## Customize Your Content

All personal content lives in a single file:

```
src/constants/index.js
```

Edit `USER`, `ABOUT_BULLETS`, `SKILLS`, `PROJECTS`, and `PHILOSOPHY` to update your information without touching any component code.

## Deploy

### Vercel (recommended)

1. Push to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. Framework preset: **Vite** (auto-detected).
4. Click **Deploy**.

### GitHub Pages

1. Install the deploy helper:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
3. In `vite.config.js`, set the base path to your repo name:
   ```js
   base: '/3d-portfolio/'
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In GitHub repository Settings → Pages → set source to **gh-pages** branch.

## Project Structure

```
src/
├── constants/
│   └── index.js          ← all user data (edit this)
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Philosophy.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── canvas/
│       └── GeometricScene.jsx  ← Three.js 3D scene
├── App.jsx
├── main.jsx
└── index.css
```

## License

MIT