/**
 * Inject KaTeX stylesheet and small CJK-oriented display fixes.
 */
const katexCssHref = "https://cdn.jsdelivr.net/npm/katex@0.16.45/dist/katex.min.css";

hexo.extend.injector.register(
  "head_end",
  () =>
    [
      `<link rel="stylesheet" href="${katexCssHref}">`,
      "<style>",
      ".katex{font-size:1.05em;text-indent:0;text-rendering:auto;}",
      ".katex-display{overflow-x:auto;overflow-y:hidden;padding:0.2em 0;}",
      ".katex-display>.katex{max-width:100%;}",
      ".katex-display>.katex>.katex-html{max-width:100%;}",
      ".katex-display>.katex>.katex-html[aria-hidden=\"true\"]{display:inline-block;min-width:100%;}",
      ".katex .base{white-space:nowrap;}",
      "</style>",
    ].join(""),
  "default"
);
