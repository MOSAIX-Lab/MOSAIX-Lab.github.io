# How to update the MOSAIX Lab website

The site is built with Jekyll, using the lab's own design (no outside theme).
GitHub Pages publishes it automatically: **you never build it by hand.** Every
time you commit a change to the `master` branch on github.com, the live site at
https://mosaix-lab.github.io updates within 1–2 minutes.

To check a build, open the repo's **Actions** tab. A green check means the site
went live; a red X means the change has an error and the old version stays up.

## Where everything lives

| What you want to change | File to edit |
|---|---|
| Home page text (headline, intro, recruiting band) | `index.md` |
| "Zoom across scales" panel on the home page | `_data/scales.yml` |
| Research themes (home page rows and Research page) | `_data/research.yml` (`themes:`) |
| Lab equipment list | `_data/research.yml` (`facilities:`) |
| Research page intro and "Our approach" section | `_pages/projects.md` |
| Your bio, photo and links; adding students | `_data/people.yml` |
| Join Us page (reasons, openings, how to apply) | `_pages/join.md` |
| Publications | `_pages/publications.md` |
| Teaching | `_pages/teaching.md` |
| Top menu | `_data/navigation.yml` |
| Colors and fonts | `assets/css/mosaix.css` (the `:root` block at the top) |
| Pictures | `assets/images/` |

Files ending in `.yml` are lists of settings. Keep the indentation (spaces, not
tabs) and the quote marks exactly as they are, and copy an existing entry when
adding a new one.

Words wrapped in `<em>` … `</em>` in a headline appear in green italics, and
`<br>` starts a new line.

## Editing a file

1. On github.com, open the file and click the pencil icon.
2. Make your change.
3. Click **Commit changes**.

## Common tasks

- **Add a publication:** in `_pages/publications.md`, add a new line starting
  with `1. ` at the top of the *Journal papers* or *Conference papers* list.
  Every line starts with `1.` and the site numbers them automatically.
- **Add a course:** in `_pages/teaching.md`, add a `## Course name (CODE)`
  heading followed by its description.
- **Add a student:** in `_data/people.yml`, follow the example under
  `students:`. Replace `students: []` with `students:` and add entries below
  it, like this:

  ```
  students:
    - name: "Jane Doe"
      role: "Ph.D. student"
      project: "Molecular dynamics of nanofilled epoxies"
      photo: /assets/images/people/jane-doe.jpg
  ```

  Upload the photo to `assets/images/people/` first. Without a photo, the
  student's initials are shown.
- **Update the Ph.D. opening:** edit the `badge:` line for Ph.D. in
  `_pages/join.md`, and the `opening:` line in `index.md`. Delete both lines to
  hide them.
- **Add an image:** upload it into `assets/images/` (Add file → Upload files).
- **Add a new page:** create a file in `_pages/` (for example `_pages/news.md`)
  that starts with

  ```
  ---
  title: "News"
  permalink: /news/
  eyebrow: "News"
  heading: "Lab <em>news.</em>"
  intro: "One sentence under the headline."
  ---
  ```

  followed by ordinary Markdown text (`## Heading`, `- bullet`, `**bold**`,
  `[link text](https://...)`). Then add it to `_data/navigation.yml`.

Don't put pages in the `_data` folder. Jekyll only reads settings files from it
and never turns its contents into web pages.
