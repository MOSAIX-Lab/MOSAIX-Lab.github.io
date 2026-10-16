# How to update the MOSAIX Lab website

The site is built with Jekyll and the Minimal Mistakes theme, and GitHub Pages
publishes it automatically. **You never build it by hand:** every time you
commit a change to the `master` branch on github.com, the live site at
https://mosaix-lab.github.io updates within 1–2 minutes.

To check a build, open the repo's **Actions** tab. A green check means the site
went live; a red X means the change has an error and the old version stays up.

## Which file is which page

| Page on the site | File to edit | Web address |
|---|---|---|
| Home | `index.md` | `/` |
| About | `_pages/about.md` | `/about/` |
| Teaching | `_pages/teaching.md` | `/teaching/` |
| Publications | `_pages/category-archive.md` | `/publications/` |
| Members | `_pages/tag-archive.md` | `/members/` |
| Projects | *(not created yet; shows the "under construction" page)* | `/projects/` |
| Top menu | `_data/navigation.yml` | — |
| Pictures | `assets/images/` | — |

Note that Publications and Members live in files that kept the theme's original
names (`category-archive.md`, `tag-archive.md`). The **web address** comes from
the `permalink:` line at the top of each file, not from the file name.

## Editing a page

1. On github.com, open the file and click the pencil icon.
2. Edit the text below the second `---` line. That part is ordinary Markdown:
   `## Heading`, `- bullet`, `**bold**`, `[link text](https://...)`.
3. Click **Commit changes**.

Leave the block between the two `---` lines at the top alone unless you mean to
change the title or address. It's sensitive to indentation and quote marks.

## Common tasks

- **Add a publication:** in `_pages/category-archive.md`, add a new `- ` line at
  the top of the *Journal Papers* or *Conference Papers* list.
- **Add a course:** in `_pages/teaching.md`, add another `## Course Name (CODE)`
  heading followed by its description.
- **Add an image:** upload it into `assets/images/` (Add file → Upload files),
  then reference it with `![description](/assets/images/filename.jpg)`.
- **Add a new page (e.g. Projects):** create `_pages/projects.md` that starts with

  ```
  ---
  title: "Projects"
  permalink: /projects/
  layout: single
  author_profile: true
  ---
  ```

  The menu already links to `/projects/`, so it starts working as soon as the
  file exists.
- **Add a menu item:** add a `- title:` / `url:` pair to `_data/navigation.yml`.

Don't put pages in the `_data` folder. Jekyll only reads settings files from it
and never turns its contents into web pages.
