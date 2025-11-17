Resume website — small static CV site

Files
- `index.html` — single page resume
- `styles.css` — main CSS
- `script.js` — theme toggle, smooth scroll, small helpers

How to use
1. Open `resume-site/index.html` in a browser (double-click or `open` from terminal) for Vitalii Rusakov.
2. Edit content in `index.html` to match your details: name, experience, links, and projects. Update your email to vitaliyrusakov@gmail.com.
3. Replace the `resume.pdf` link with your actual PDF file and add it to the folder. Update contact links to point to your GitHub/LinkedIn and add your `resume.pdf` if you want the download button to work.

Deploying
- Quick: use GitHub Pages. Add the site to your repo (it's in `resume-site/`), then enable Pages from `main` branch and choose `/resume-site` as root, or move files to root.

Customization tips
- Change typography via Google Fonts in `index.html`.
- Use `:root.dark` colors for dark theme variables in `styles.css`.
- Add images and screenshots in the `assets/` folder, and update the HTML accordingly.

Contact
 Want a version with LinkedIn or contact form, I can add it — or I can make this a JSON-driven resume that loads entries dynamically from a `resume.json` file.
