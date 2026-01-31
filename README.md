# RAF MSFS 24 — Static Site (GitHub Pages)

This repo is a simple dark-mode static website for the RAF MSFS 24 community. It contains:
- index.html (home)
- events.html + events.json (client-rendered events)
- rules.html, about.html (simple pages)
- styles.css (clean dark theme)
- script.js (loads events.json and shows next event)

How to publish on GitHub Pages
1. Create a new repository on GitHub named `raf-msfs24-site` under your account `TNT1234Dev`.
   - Option A: Create via the GitHub website and upload these files.
   - Option B: Create locally and push (commands below).

2. Local push commands (run in your project folder):
```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
# If you already created the repo on GitHub:
git remote add origin https://github.com/TNT1234Dev/raf-msfs24-site.git
git push -u origin main
```

3. In the repo on GitHub: Settings → Pages → Source → choose branch `main` and folder `/ (root)`. Save.
4. After a minute or two the site will be available at:
   `https://TNT1234Dev.github.io/raf-msfs24-site`

Customizing content
- Edit `events.json` to add/edit events. Use ISO 8601 datetimes (UTC) like `"2026-02-07T19:00:00Z"`.
- Edit `index.html`, `rules.html`, `about.html` to update copy.
- Update `styles.css` to change the color scheme.

Notes and suggestions
- No authentication or signups are included (per your request).
- If later you want signups or role-restricted pages, I recommend Firebase Authentication (works with GitHub Pages); I can add scaffolding for that when you're ready.
- For any Discord-related features (invite, widget), I can add placeholders and instructions; right now nothing Discord-related is embedded.

If you want, I can:
- Provide a ready ZIP of these files to upload directly, or
- Prepare a single commit and push it for you if you create the empty GitHub repo and paste the repo URL here. I can then push the prepared files into it.

Tell me which you prefer and I’ll follow up.
