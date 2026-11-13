# Carlos Lao’s portfolio

Personal website for Carlos Lao, a software engineer in San Francisco. The site features a short bio, skills, projects, and a downloadable résumé. [Visit cdrlao.com](https://cdrlao.com).

## Run locally

Use Node.js 20 and npm.

```sh
npm ci
npm start
```

Open [localhost:3000](http://localhost:3000). Run `npm run build` to generate the production site in `build/`.

## Update the site

- Edit the bio and contact links in `src/sections/About.js` and `src/sections/Contact.js`. Update the project list in `src/assets/projects/index.js`.
- Edit the layout and typography in `src/styles/App.css`.
- Replace `src/assets/resume.pdf` to update the résumé linked from the homepage.
- Edit the page title and search description in `public/index.html`.

## Publish

From a clean checkout of the branch you want to publish, run `npm run deploy`. This builds the site and publishes `build/` to the `gh-pages` branch. GitHub Pages uses the custom domain in `public/CNAME`.

After publishing, open the live site on desktop and mobile and check that **View résumé** opens the updated PDF.
