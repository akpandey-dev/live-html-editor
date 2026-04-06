# Live HTML Editor

An interactive, browser-based HTML editor that allows users to write, edit, and preview HTML, CSS, and JavaScript in real time.

Live HTML Editor provides a lightweight development environment inside the browser, enabling instant experimentation with frontend code using a modular structure and a single-file distributable build.

---

⚠️ Disclaimer
This project is intended for educational and experimental purposes only. It is not a full-scale IDE. Some features may be limited, and behavior may vary across browsers.

---

## Usage

### Option 1 — Quick Use (Recommended)

1. Download `dist/live-html-editor.html`
2. Open in any browser
3. Start coding immediately

* Works offline. 
* No installation required.

---

### Option 2 — Development Mode

1. Clone the repository
2. Open:

```
  src/index.html
```

3. Edit files in `src/`

4. Build when needed:

```
  python scripts/build.py
```

Recommended for learning and development.

---

## Features

* Live editing of HTML, CSS, and JavaScript
* Instant preview using iframe sandbox
* Toggle JS and CSS editors
* Export as single HTML file
* Import external files
* Adjustable font size and word wrap
* Dark/light mode
* Reset/clear editors
* Floating toolbar
* Lightweight and dependency-free

---

## Project Structure

```
live-html-editor/
│
├── index.html              # Entry / landing page (GitHub Pages)
│
├── src/                    # Development source code
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── dist/                   # Final build (for users)
│   └── live-html-editor.html  # Single-file app
│
├── scripts/                # Build tools
│   └── build.py
│
├── README.md
├── LICENSE
└── .gitignore
```

---

### Build System

Run:

```
python scripts/build.py
```

This will:

* Combine HTML, CSS, and JavaScript
* Bundle into a single file
* Output to `dist/`

---

## Architecture Overview

This project uses two modes:

### Development Mode

* Modular structure
* Local server support
* Easy to extend

### Production Mode

* Single HTML file
* Fully portable
* Works offline

---

## Technology Stack

* HTML5
* CSS3
* Vanilla JavaScript
* Python (tooling and build script only)

---

## Limitations

* Not a full IDE
* No debugging tools
* No collaboration features
* Browser-dependent behavior

---

## Live Demo

Try it here:
https://akpandey-dev.github.io/live-html-editor

---

## Contributing

* Open for learning and experimentation
* Bugs may exist
* Improvements are welcome

---

## License

Open-source for educational and experimental use.
