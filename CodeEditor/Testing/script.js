import {
  EditorView,
  basicSetup,
} from "https://codemirror.net/6/standalone/basic-setup.js";
import { html } from "https://codemirror.net/6/standalone/lang-html.js";
import { css } from "https://codemirror.net/6/standalone/lang-css.js";
import { javascript } from "https://codemirror.net/6/standalone/lang-javascript.js";

let htmlEditor = new EditorView({
  doc: "<!-- Type HTML here, try Emmet: div>ul>li*3 -->",
  extensions: [basicSetup, html()],
  parent: document.getElementById("html-code"),
});

let cssEditor = new EditorView({
  doc: "/* Write CSS here */",
  extensions: [basicSetup, css()],
  parent: document.getElementById("css-code"),
});

let jsEditor = new EditorView({
  doc: "// Write JavaScript here",
  extensions: [basicSetup, javascript()],
  parent: document.getElementById("js-code"),
});

// Live preview update every 500ms
setInterval(() => {
  const htmlCode = htmlEditor.state.doc.toString();
  const cssCode = cssEditor.state.doc.toString();
  const jsCode = jsEditor.state.doc.toString();

  const output = document.getElementById("output");
  const doc = output.contentDocument || output.contentWindow.document;
  doc.open();
  doc.write(`${htmlCode}<style>${cssCode}</style><script>${jsCode}<\/script>`);
  doc.close();
}, 500);
