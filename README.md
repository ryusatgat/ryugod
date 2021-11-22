☞ [Korean](README_ko.md)
# Ryugod (https://www.ryugod.com)
- This site provides a development environment for simple testing.
- You can try running 'Linux Shell' and multiple program languages ​​without login.
- It provides online compilers for C language, C++, Java, etc. and supports **syntax highlighting** function for all languages.
- You can upload and download files to/from the server.
- You can add source files by drag and drop.
- You can easily share the source code you wrote with your friends.
- Try copying the editor source and pasting it on the bulletin board. It is nicely pasted.
- This site is optimized for 'Chrome' and 'Edge Browser'.

# Load source using hyperlink
- You can add a source to a hyperlink and load it directly into the editor.
- For language identifiers, refer to the URL for each language of this site, such as `bash`, `c`, `cc`, or `javascript`.
- The length of the entire URL must not exceed 15,000 bytes.
- The `pako` compressed library is required.
- If you press the `Ctrl+Shift+F10` shortcut key, the hyperlink of the source code in the editor is copied to the clipboard.
```js
// JavaScript example
const base_url = 'https://www.ryugod.com/pages/ide/' + "language delimiter"
const url = `${base_url}/source:${Buffer.from(pako.deflate("source to display
"))
    .toString('base64').replace(/\//g, "_")}`
const tag = `<a href="${url}">🚀 Test your code</a>`
```