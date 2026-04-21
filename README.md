
# TODO.com

A blog and notes website to write about music, math and whatever else. Please remember to check all the TODO marks through the project

Like this ones:
- Adding mermaid for diagrams
- Changing the quotation style into notes to the side of markdown files
- Visualizing PDFs
- Styling most of the site
- Designing more scratches for text
- Replacing the landing's images


## Development

Using [Sass](https://sass-lang.com/) to make css less difficult to work with. Each page is made in [Markdown](https://www.markdownguide.org/), using [Marked.js](https://marked.js.org/) to parse those files into HTML.

The hosting is up for grabs, but [GitHub Pages](https://pages.github.com/) is still an option

## Notes

To host a local server and avoid some restrictions to file previews, use [http-server](https://www.npmjs.com/package/http-server) to serve the files (once installed run the command in the root of the project):

```bash
http-server
```

Thanks to using Sass, I have to compile the files into css. With the `watch` command, any change in the `/sass/` folder is automatically compiled to `/css/`.

```bash
sass --watch style/sass/main.scss:style/style.css
```
