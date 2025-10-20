# Getting Started: VS Code, Extensions, Homebrew & Git

Before we start, please make sure you have **Visual Studio Code**, the listed **extensions**, **Homebrew**, and **Git** installed on your computer.  
Follow the steps below to get everything ready for .

## 1) Install Visual Studio Code

Download and install Visual Studio Code from the official website: https://code.visualstudio.com/

Once installed, open VS Code and proceed to install the extensions below.

## 2) Install VS Code Extensions

Please install the following extensions to make working with code easier:

- **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)** — Launch a local development server with live reload.
- **[p5.vscode](https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode)** — Syntax highlighting and snippets for p5.js.
- **[p5js snippets](https://marketplace.visualstudio.com/items?itemName=acidic9.p5js-snippets)** — Useful p5.js code snippets.  
- **[Prettier – Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)** — Automatically formats your code.
- **[Rainbow CSV](https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv)** — Color highlighting for CSV files.
- **[Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)** — Lightweight API testing tool.

### How to install an extension
1. Open **VS Code**.
2. Go to the **Extensions** view (left sidebar icon) or press `⇧⌘X` (macOS) / `Ctrl+Shift+X` (Windows/Linux).
3. Search for the extension name (e.g., “Live Server”).
4. Click **Install**.

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
- For a nice overview over the awesome capabilities of the Terminal we recommend [CLI for Artists + Designers](https://ffd8.github.io/cli-for-artists-and-designers/). 