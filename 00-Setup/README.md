# Getting Started: VS Code, Extensions, Homebrew & Git

Before we start, please make sure you have **Visual Studio Code**, the listed **extensions**, **Homebrew**, and **Git** installed on your computer.  
Follow the steps below to get everything ready.

## 1) Install Visual Studio Code

Download and install Visual Studio Code from the official website: https://code.visualstudio.com/

Once installed, open VS Code and proceed to install the extensions below.

## 2) Install VS Code Extensions

Please install the following extensions to make working with code easier:

- **[p5.js 2.x Project Generator](https://marketplace.visualstudio.com/items?itemName=Irti.p5js-project-generator)** — Generates new p5.js 2.x projects and adds autocomplete, hover docs and parameter hints for p5.js. Replaces the old _p5.vscode_ and _p5js snippets_ extensions (please uninstall them, they are built for p5.js 1.x).
  - **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)** — Launch a local development server with live reload.

- **[Prettier – Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)** — Automatically formats your code.
- **[Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)** — Color highlighting for CSV files.
- **[Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)** — Lightweight API testing tool.

### How to install an extension

1. Open **VS Code**.
2. Go to the **Extensions** view (left sidebar icon) or press `⇧⌘X` (macOS) / `Ctrl+Shift+X` (Windows/Linux).
3. Search for the extension name (e.g., “Live Server”).
4. Click **Install**.

### Set up Prettier

Prettier does not format anything automatically after installation. Set it up once:

1. Open the settings with `⌘,` (macOS) / `Ctrl+,` (Windows/Linux).
2. Search for **Default Formatter** and choose **Prettier – Code formatter**.
3. Search for **Format On Save** and tick the checkbox.

From now on your code is formatted every time you save (`⌘S` / `Ctrl+S`). You can also format manually with `⇧⌥F` (macOS) / `Shift+Alt+F` (Windows/Linux).

Alternatively add this to your `settings.json` (Command Palette → _Preferences: Open User Settings (JSON)_):

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

If nothing happens, another formatter is probably set as default. Right-click in the file → _Format Document With…_ → _Configure Default Formatter_.

### Create a new p5.js project

With the **p5.js 2.x Project Generator** you create a new sketch in a few seconds:

1. Open **VS Code** and open the folder in which the new project should live.
2. Open the Command Palette with `⇧⌘P` (macOS) / `Ctrl+Shift+P` (Windows/Linux).
3. Type **“Create a new p5.js 2.x Project”** and hit **Enter**.  
   (Alternative: right-click a folder in the Explorer and choose **“Create p5.js 2.x Project Here”**.)
4. Choose the parent folder and enter a **project name**.
5. Choose how p5.js is loaded:
   - **Online (CDN)** — needs internet, smallest project.
   - **Offline (Local)** — p5.js is copied into the project. Choose _Full_ for friendly error messages while learning, _Minified_ for the smaller file.
6. Addons: choose **Basic p5.js only** (p5.sound only if you need audio).
7. Open the generated `index.html` and start the **Live Server** (right-click → _Open with Live Server_, or click **Go Live** in the bottom right). Your sketch opens in the browser and reloads when you save.

Your code goes into `sketch.js`; `setup()` and `draw()` are already there.

## 3) Install Homebrew (macOS)

**Homebrew** is a package manager for macOS—think of it like an “App Store” for developer tools. You’ll use it to install software from the Terminal.

### Steps

1. Open **Terminal** (`Applications → Utilities → Terminal` on macOS). (If you are on Windows you first need to install [PowerShell](https://learn.microsoft.com/de-de/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.5))
2. On macOS Paste the following command and press from [brew.sh](https://brew.sh/) and hit **Enter**:

   ```bash
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```

3. Follow the on-screen instructions until the installation is complete.
4. On Windows please follow the guide on [brew.sh](https://brew.sh/).

## 4) Install Git

After Homebrew is installed, install **Git** with:

```bash
brew install git
```

We’ll explain what Git is and how we’ll use it at the beginning of the workshop.

### (Optional) Quick Checks

You can verify the installations from your Terminal:

```bash
git --version
```

```bash
brew --version
```

If those commands print version numbers (e.g., `git version 2.x.x`), you’re good to go!

## 5) Knowledge Ressources

- For a simple introduction to Git that doesn't overcomplicate things, check out [Git for Dummies](https://www.youtube.com/watch?v=mJ-qvsxPHpY) (we don't think you are dumb obviously, git is just a very deep rabbithole 🐇).
- For a Git Cheat Sheet see [here](https://education.github.com/git-cheat-sheet-education.pdf).
- For a nice overview over the awesome capabilities of the Terminal we recommend [CLI for Artists + Designers](https://ffd8.github.io/cli-for-artists-and-designers/).
