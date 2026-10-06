# ছারছীনা দরবার শরীফ | Sarsina Darbar Sharif

A modern, bilingual (Bangla default, English toggle) institutional website built with React + Vite.

## Run

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Edit Bangla / English text

All UI text lives in `src/data/translations.js` under `bn` and `en`. Edit the strings there — the site updates instantly on save.

## Add / change images

Image sources are in `src/data/gallery.js`. Each item is:

```js
{ title: { bn: '...', en: '...' }, image: W('FILENAME'), source: 'Wikimedia Commons' }
```

`W()` builds a `commons.wikimedia.org/wiki/Special:FilePath/` URL. Replace the filename with a real file from the Wikimedia Commons category, or use any direct image URL.

## Add a news item

Edit `src/data/translations.js` → `news.items` (both `bn` and `en`).

## Add future Mahfil information

Edit `src/data/translations.js` → `mahfil.schedule` and `mahfil.eventTitle`.

## Deploy

- **GitHub Pages**: build with `npm run build`, push the `dist/` folder to a `gh-pages` branch (works out of the box because we use `HashRouter` and relative base `./`).
- **Vercel**: import the repo, framework preset "Vite", build command `npm run build`, output `dist`.
- **Netlify**: build command `npm run build`, publish directory `dist`.

## Structure

```
src/
  components/   Navbar, Footer, Hero, Gallery, cards, etc.
  pages/        Home, About, History, Pirs, Madrasa, Publications, Mahfil, GalleryPage, News, Contact
  data/         translations.js, content.js, gallery.js
  context/      LanguageContext.jsx
  App.jsx, main.jsx, styles.css
```
"# sarsina-darbar-sharif" 
