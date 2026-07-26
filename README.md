# METEORS Band Website

Static website for METEORS, a modern rock, funk, pop, and groove-based band. The site uses the supplied METEORS artwork as its visual foundation and is ready for later deployment to an Ubuntu/Nginx server.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- No build tools, frameworks, npm packages, remote fonts, or external UI libraries

## Folder Structure

```text
meteors-band-website/
├── AGENTS.md
├── README.md
├── .gitignore
├── index.html
├── assets/
│   ├── README.md
│   ├── audio/
│   ├── icons/
│   ├── images/
│   │   ├── meteors-background.png
│   │   ├── meteors-banner.png
│   │   ├── meteors-poster-landscape.png
│   │   └── meteors-poster-square.png
│   └── video/
├── css/
│   └── styles.css
└── js/
    └── main.js
```

## Preview on Windows

From the project folder, run:

```powershell
Start-Process .\index.html
```

The website works directly from the local file system.

## Editing Guide

To edit the band biography, open `index.html` and search for:

```html
<!-- EDIT: Replace with official METEORS biography -->
```

To change the tagline, update the hero text in `index.html`:

```html
Groove in motion.
Rock energy. Funk rhythm. Pop instinct.
```

To change colors, edit the CSS variables near the top of `css/styles.css`.

To replace images, add new files to `assets/images/`, preserve useful aspect ratios, update image paths in `index.html`, and keep meaningful `alt` text. Do not overwrite the supplied artwork unless that is an intentional approved change.

To add band members, duplicate or remove `.member-card` blocks in the Band section of `index.html`. Replace the placeholder name, role, biography, social link, and optional avatar/photo.

To add music files, place MP3 files in `assets/audio/`, then replace the placeholder buttons in the Music section with real audio links or accessible audio controls. Avoid adding broken `<audio>` elements before sources exist.

To add YouTube links, replace the `https://example.com/...` placeholder links in the Media and Contact sections with official URLs. Do not embed videos until official URLs are supplied.

To add concert dates, use the commented event pattern in the Live section of `index.html`. Only add confirmed dates, venues, cities, and ticket links.

To update booking details, search for `booking@example.com` in `index.html` and replace it with the official booking email.

## GitHub Repository

To create a private GitHub repository later, create the private repo on GitHub first, then add its remote locally.

Common Git commands:

```powershell
git status
git add .
git commit -m "Add METEORS static website"
git branch -M main
git remote add origin YOUR_PRIVATE_REPOSITORY_URL
git push -u origin main
```

Deployment should be configured separately.

## Optional Image Optimization

For production, consider creating WebP copies of large artwork and using `<picture>` elements with PNG fallbacks. Keep the original PNG files intact and do not replace them without approval.
