let htmlEditor, cssEditor, jsEditor;
require.config({
  paths: { vs: "https://unpkg.com/monaco-editor@0.45.0/min/vs" },
});

require(["vs/editor/editor.main"], function () {
  htmlEditor = monaco.editor.create(document.getElementById("html-code"), {
    value:
      "<!-- Type tags like div and press Ctrl+Space -->" ,
    language: "html",
    theme: "vs-dark",
    automaticLayout: true,
  });

  cssEditor = monaco.editor.create(document.getElementById("css-code"), {
    value: "/* CSS supports Emmet like m10 or p20 */",
    language: "css",
    theme: "vs-dark",
    automaticLayout: true,
  });

  jsEditor = monaco.editor.create(document.getElementById("js-code"), {
    value: "// JS works with autocompletion",
    language: "javascript",
    theme: "vs-dark",
    automaticLayout: true,
  });

  setInterval(run, 500);
});
function run() {
  const html = htmlEditor.getValue();
  const css = `<style>${cssEditor.getValue()}</style>`;
  const js = `<script>${jsEditor.getValue()}<\/script>`;

  const output = document.getElementById("output");
  const doc = output.contentDocument || output.contentWindow.document;
  doc.open();
  doc.write(html + css + js);
  doc.close();
}
