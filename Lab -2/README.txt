SANGAM — CULTURAL FEST REGISTRATION FORM
==========================================

A creative, single-page registration form for a cultural festival,
built with plain HTML, CSS and JavaScript — no frameworks, no
build step, no dependencies to install.

FILES
-----
index.html   The page structure and content (form fields, hero panel).
style.css    All visual styling — colours, layout, responsive rules,
             the "ticket" and "badge" design details.
script.js    Form-submit handling, the success screen, and the
             confetti animation. No external libraries used.

HOW TO VIEW IT
---------------
Just double-click index.html to open it in any browser. Because the
three files are linked by relative paths (style.css, script.js),
keep all three files together in the same folder — don't move or
rename just one of them, or the page will lose its styling or
interactivity.

HOW TO PUT IT ONLINE (GitHub Pages)
-------------------------------------
1. Create a new repository on GitHub.
2. Upload index.html, style.css and script.js to it (drag and drop
   via "Add file" > "Upload files").
3. Go to Settings > Pages, set Source to "Deploy from a branch",
   choose the main branch and the / (root) folder, then Save.
4. After about a minute, GitHub will give you a live link like
   https://yourusername.github.io/your-repo-name/

NOTES
-----
- The form uses Google Fonts (Unbounded and Manrope) loaded from a
  CDN link in index.html. It needs an internet connection to load
  those fonts, but will still work correctly with a plain system
  font if offline — nothing breaks.
- There is no backend: submitting the form does not send data
  anywhere. It shows a personalised "success ticket" confirmation
  right in the browser using the details you typed in. To collect
  real registrations, you would need to connect the form to a
  service (like Google Forms, a spreadsheet, or your own server) —
  ask if you'd like help adding that.
