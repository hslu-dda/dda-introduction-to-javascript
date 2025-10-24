# Git for p5.js Beginners

## What is Git?

Git is a version control system for your code. It tracks all the changes you make to your project and lets you:

- Go back to earlier versions if something breaks
- See exactly what you changed and when
- Work with others on the same project without conflicts

Think of it as a super-powered undo button with a complete history of your work.

## Key Concepts

### Repository (Repo)

A folder that Git is tracking. Your p5.js project folder becomes a repository once you initialize Git.

### Commit

A saved snapshot of your work at a specific moment. It's like hitting "Save" but with a description of what changed. Each commit creates a point you can return to later.

### Staging Area

A place where you prepare files before committing them. You choose which changes to include in your next commit.

## Essential Commands

### Setting Up (One-Time)

Before using Git for the first time on your computer, tell Git who you are:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Starting a New Project

Navigate to your p5.js project folder and initialize Git:

```bash
git init
```

This creates a hidden `.git` folder that tracks everything. You only do this once per project.

### Need to know commands

#### 1. Check What Changed

```bash
git status
```

This shows:

- Which files you've modified
- Which files are staged (ready to commit)
- Which files are untracked (new files Git doesn't know about yet)

This command helps you understand what's happening.

#### 2. Stage Your Changes

```bash
git add sketch.js
```

This prepares `sketch.js` to be committed. Or, to add all changed files at once:

```bash
git add .
```

The `.` means "everything in this folder."

#### 3. Commit Your Changes

```bash
git commit -m "Added bouncing ball animation"
```

This saves a snapshot with a message describing what you did. The message should be short but descriptive.

#### 4. View Your History

```bash
git log
```

This shows all your commits. Press `q` to quit the log view.

For a shorter, cleaner view:

```bash
git log --oneline
```

## Your Typical Workflow

Here's what you'll do over and over:

1. Work on your p5.js sketch (add features, fix bugs, etc.)
2. `git status` - see what files changed
3. `git add .` - stage all your changes
4. `git commit -m "describe what you did"` - save a snapshot
5. Repeat!

## Good Commit Practices

### Commit Often

Don't wait until the project is done. Commit whenever you:

- Get a feature working
- Fix a bug
- Finish a small task

### Write Good Messages

❌ Bad: "updated stuff"  
❌ Bad: "fixed it"  
✅ Good: "made ball bounce off all four walls"  
✅ Good: "changed background color to dark blue"  
✅ Good: "fixed ball going off bottom of screen"

### What to Commit

- Do commit: `.js`, `.html`, `.css` files
- Don't commit: large files, personal settings, temporary files

### Creating a .gitignore File

Create a file called `.gitignore` in your project folder to tell Git what to ignore. This is especially important before your first commit!

**Create the file:**
add a file to your root directory called `.gitignore`

**Add these lines to it:**

```
# Operating System Files
.DS_Store
.db

# Node modules
node_modules/


# Editor Files
.vscode/


# Logs and temporary files
\*.log
*.tmp

```

## Common Scenarios

### "I broke everything! How do I go back?"

View your commit history:

```bash
git log --oneline
```

Go back to a previous commit (replace `abc1234` with the actual commit hash):

```bash
git checkout abc1234
```

To return to the latest version:

```bash
git checkout main
```

### "What did I change in this file?"

```bash
git diff sketch.js
```

This shows exactly what lines changed since your last commit.

### "I want to undo my last commit"

To undo the commit but keep your changes:

```bash
git reset --soft HEAD~1
```

To undo the commit AND the changes (careful!):

```bash
git reset --hard HEAD~1
```

## Quick Reference

| Command                   | What It Does                 |
| ------------------------- | ---------------------------- |
| `git init`                | Start tracking a new project |
| `git status`              | See what's changed           |
| `git add .`               | Stage all changes            |
| `git add filename`        | Stage a specific file        |
| `git commit -m "message"` | Save a snapshot              |
| `git log`                 | View commit history          |
| `git log --oneline`       | View compact history         |
| `git diff`                | See what changed             |

## Example

Try this with one of your p5.js projects:

1. `cd` into your project folder
2. `git init` - initialize the repository
3. `git add .` - stage all files
4. `git commit -m "Initial commit"` - save your first snapshot
5. Make a small change to your sketch (change a color, size, etc.)
6. `git status` - see that Git noticed
7. `git add .` - stage the change
8. `git commit -m "changed circle color to red"` - save the change
9. `git log` - see your two commits!

## Tips

- Use `git status` all the time - it's your friend
- Commit early, commit often
- Write commit messages that future you will understand
- If you're about to try something risky, make a commit first
- Git saves your project history locally - it's not automatically backed up online (that's what GitHub is for…)

---

_Remember: Git is a safety net. The more you use it, the more comfortable you'll become, and the more confidently you can experiment with your code knowing you can always go back!_

<br>
<br>
<br>

# Connecting to an Online Repository (GitHub)

Once you're comfortable with local Git, you can backup your work online and share it with others using GitHub.

### First Time Setup: Create a GitHub Account

1. Go to [github.com](https://github.com) and sign up for a free account
2. Verify your email address

### Option 1: Starting with an Existing Local Project

If you already have a project with Git commits on your computer:

#### 1. Create a New Repository on GitHub

- Go to GitHub and click the "+" icon → "New repository"
- Give it a name (like "my-p5js-project")
- **Don't** check "Initialize with README" (you already have files)
- Click "Create repository"

#### 2. Connect Your Local Project to GitHub

GitHub will show you commands. Copy and paste them into your terminal:

```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

**What this does:**

- `git remote add origin [URL]` - tells Git where your online repo is
- `git branch -M main` - renames your branch to "main" (standard convention)
- `git push -u origin main` - uploads your commits to GitHub

### Option 2: Starting from Scratch on GitHub

If you're starting a brand new project:

#### 1. Create Repository on GitHub First

- Click "+" → "New repository"
- Name it
- Check "Add a README file"
- Click "Create repository"

#### 2. Clone It to Your Computer

```bash
git clone https://github.com/yourusername/your-repo-name.git
```

This downloads the repository to your computer. Now `cd` into that folder and start working!

### Daily Workflow with GitHub

Once connected, your workflow becomes:

1. Make changes to your code
2. `git status` - see what changed
3. `git add .` - stage changes
4. `git commit -m "your message"` - save locally
5. `git push` - upload to GitHub

### Essential GitHub Commands

#### Push (Upload Your Changes)

```bash
git push
```

Sends your new commits from your computer to GitHub. Do this regularly to backup your work!

#### Pull (Download Changes)

```bash
git pull
```

Gets the latest changes from GitHub. Use this if:

- You're working on multiple computers
- Someone else added commits
- You edited files directly on GitHub

#### Check Your Connection

```bash
git remote -v
```

Shows which online repository you're connected to.

### Working on Multiple Computers

Let's say you work on your project at school and at home:

**At school (first time):**

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
# work on your project
git add .
git commit -m "added feature at school"
git push
```

**At home:**

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
# work on your project
git add .
git commit -m "added feature at home"
git push
```

**Back at school (next day):**

```bash
cd your-repo-name
git pull  # get your home changes first!
# continue working
git add .
git commit -m "continued work at school"
git push
```

**Remember:** Always `git pull` before you start working if you use multiple computers!

### Viewing Your Project Online

After pushing, you can:

- View your code on GitHub in a browser
- Share the URL with others
- Use GitHub Pages to host your p5.js sketch live on the web!

### GitHub Pages (Hosting Your Sketch)

To make your p5.js sketch viewable online:

1. Go to your repository on GitHub
2. Click "Settings" → "Pages"
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait a minute, then visit: `https://yourusername.github.io/your-repo-name/`

Your sketch is now live on the internet!

### Common Issues

**"Permission denied" when pushing?**

- You might need to set up authentication
- Use a Personal Access Token or SSH key (ask your teacher for help with this)

**"Your branch is behind"?**

- Someone else pushed changes, or you pushed from another computer
- Run `git pull` first, then `git push`

**Accidentally pushed sensitive information?**

- Don't put passwords or API keys in your code!
- If you do, change the password immediately and ask your teacher for help

### Quick Reference: GitHub Commands

| Command                       | What It Does                                   |
| ----------------------------- | ---------------------------------------------- |
| `git clone [URL]`             | Copy a repository from GitHub to your computer |
| `git remote add origin [URL]` | Connect your local repo to GitHub              |
| `git push`                    | Upload your commits to GitHub                  |
| `git pull`                    | Download changes from GitHub                   |
| `git remote -v`               | See which online repo you're connected to      |

---
