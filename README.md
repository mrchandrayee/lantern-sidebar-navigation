# Lantern — Animated Sidebar Navigation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/lantern-sidebar-navigation/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable reconstruction of the uploaded 5.4-second screen recording.

## Video observations

The video shows a dark desktop-style admin panel titled **LANTERN — HTML · CSS · JS**. A narrow left navigation contains six items: Overview, Orders, Clients, Products, Reports and Settings. A glowing vintage lantern travels vertically beside the currently selected item. The selected label brightens and a small warm amber dot appears at the right.

The main panel updates its heading and short description. The video visibly demonstrates Overview, Reports and Orders. The three code cards below the interface are labelled `index.html`, `lantern.css` and `lantern.js`.

## Included interactions

- Six working navigation items.
- Animated lantern that moves to the active navigation row.
- Warm amber glow and active indicator dot.
- Dynamic page title and description.
- URL hash updates for shareable active sections.
- Responsive layout and reduced-motion support.
- CSS-drawn/SVG lantern artwork; no external images or libraries.

## Run locally

No dependencies or build step are required:

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Project structure

```text
lantern-sidebar-navigation/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Accuracy note

The screen recording is 720×1280 and lasts about 5.4 seconds. The small source-code cards are not fully legible, so the UI and behavior are reconstructed from the visible frames rather than presented as the creator's verbatim source. The six navigation destinations are front-end demo pages; connect them to your own routes/data for production.
