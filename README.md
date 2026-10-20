# KS SHAFIN Portfolio

## Folder structure
```
ks-shafin-portfolio/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── profile.png          <- your photo
    ├── certificates/        <- optional local certificate images
    └── projects/            <- optional project thumbnails
```

## Run locally
Open `index.html` in a browser, or serve the folder (recommended, so GitHub requests behave like production):
```
python -m http.server 8000      # then visit http://localhost:8000
```
An internet connection is needed for fonts and icon CDNs.

## Add your profile image
Save the photo as `assets/profile.png` (square or 4:5 works best). Until it exists, a "KS" placeholder shows.

## Connect your GitHub certificate repository
In `script.js`, edit `CONFIG`: `GITHUB_OWNER`, `GITHUB_REPO`, `CERTIFICATE_FOLDER` (and optionally `GITHUB_BRANCH`).
- The repo must be **public**. The unauthenticated GitHub API allows ~60 requests/hour per visitor IP; a friendly message appears if exceeded.
- PNG, JPG, JPEG and WebP files in the folder appear after a page refresh.
- Give nicer titles via `CERT_META`, keyed by exact file name.
- Private repo? Never put a token in frontend code. Use a small backend/serverless proxy that holds the token, or host the images with the site and list them in `LOCAL_CERTS`.
- If GitHub fails, `LOCAL_CERTS` is used as the fallback.

## Projects, achievements, skills
- `PROJECTS`: add objects `{name, desc, tags, image, github, demo}`. Delete the two `sample: true` placeholders. An empty array shows an empty state.
- `ACHIEVEMENTS`: add `{title, desc, year, org, link, icon}`; it is empty on purpose.
- `SKILLS`: each entry is `"Name|icon"`. Use `dev:python` style (Devicon) or a Font Awesome class. Remove or rename freely.

## Contact & social
Fill `CONTACT` in `script.js`. Empty values show "not added yet" placeholders. There is no contact form because one needs a backend.

## Social links ("Let's Connect")
Fill `CONTACT` in `script.js` with `facebook`, `instagram`, `github`, `linkedin`, `snapchat` (and `email`). A card with no URL shows an "Add link" placeholder and is not clickable. Add or reorder platforms in the `SOCIALS` array.

## Motion system
Shared easing/duration tokens (`--ease`, `--dur`) live at the top of the "ENHANCEMENTS" block in `style.css`. Cursor effects (magnetic pull, card tilt, hero parallax) are in `initPointer()` in `script.js` and only run on mouse devices without reduced-motion.
