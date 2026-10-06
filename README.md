# ForwardStack

A modern, high-performance digital solutions agency website built with **React**, **TypeScript**, and **Tailwind CSS**.

## Stack Highlights
- **Vite + React (TypeScript)**: Blazing fast HMR and optimized production bundles.
- **Tailwind CSS v4**: Utility-first styling with zero-runtime CSS.
- **Lucide Icons**: Crisp modern iconography.
- **Deploy Ready**: Fully static, production-grade output in `dist/`.

---

## 🚀 Instant Deployment Guide

### Option 1: Vercel (Easiest & Free)
1. Push this directory to your GitHub/GitLab repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel automatically detects Vite:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your site will be live on an HTTPS custom domain in ~30 seconds.

Alternatively, using the Vercel CLI:
```bash
npx vercel
```

---

### Option 2: Netlify (Drag & Drop or Git)
1. Run the build command:
   ```bash
   npm run build
   ```
2. Go to [netlify.com](https://netlify.com) and log in.
3. Drag and drop the `dist/` folder directly into Netlify's **Deploy** drop zone, or link your Git repository.

---

### Option 3: GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
2. In `vite.config.ts`, set the base to your repo name:
   ```ts
   base: '/<REPO_NAME>/'
   ```
3. Run `npx gh-pages -d dist`.

---

## 💻 Local Development

To run locally:

```bash
npm run dev
```

To build for production:

```bash
npm run build
```

To preview the built production site locally:

```bash
npm run preview
```
