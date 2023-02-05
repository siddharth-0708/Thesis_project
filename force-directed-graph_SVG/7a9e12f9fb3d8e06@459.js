function _1(md){return(
md`# Example Components

This notebook contains shared utilities for [D3 charts](/collection/@d3/charts).`
)}

function _name(Inputs){return(
Inputs.text({label: "Name", value: "ExampleChart"})
)}

function _3(howto,name){return(
howto(name, {open: true})
)}

function _4(howto,name){return(
howto(name, {open: true, specifier: "@d3/example", imports: {d3: "d3", d3Sankey: "d3-sankey"}})
)}

function _currentSpecifier()
{
  const {pathname} = new URL(document.baseURI);
  return pathname.slice(pathname.startsWith("/d/") ? 3 : 1);
}


function _howto(currentSpecifier,htl,md,Inputs){return(
function howto(name, options = {}) {
}
)}

function _7(altplot){return(
altplot(`Plot.barY(alphabet, {x: "letter", y: "frequency"}).plot()`, {open: true})
)}

function _altplot(htl,md,Inputs){return(
function altplot(code = "", {open} = {}) {
  return htl.html`<details open=${open} style="max-width: 640px; background: #fffced; box-sizing: border-box; padding: 10px 20px;"><summary style="font-weight: bold; cursor: pointer; outline: none;">Is there an easier way? 🤯</summary>
<div style="margin-bottom: -1em;">${md`
Yes! While D3’s low-level abstraction is expressive, you might find it overkill for basic charts. For exploratory data analysis, or just to visualize data quickly, consider [Observable Plot](/@observablehq/plot) instead. Plot is free, [open-source](https://github.com/observablehq/plot), built on top of D3, and maintained by the same people as D3.

For example, the above chart can be written as:

~~~js
${code}
~~~

${Inputs.button("Copy code", {reduce: () => navigator.clipboard.writeText(code)})}

Try pasting this code into a new cell to see.

`}</div>
</details>`;
}
)}

function _linkplot(htl,md){return(
function linkplot(link = "", {open, title} = {}) {
  return htl.html`<details open=${open} style="max-width: 640px; background: #fffced; box-sizing: border-box; padding: 10px 20px;"><summary style="font-weight: bold; cursor: pointer; outline: none;">Is there an easier way? 🤯</summary>
<div style="margin-bottom: -1em;">${md`
Yes! While D3’s low-level abstraction is expressive, you might find it overkill for basic charts. For exploratory data analysis, or just to visualize data quickly, consider [Observable Plot](/@observablehq/plot) instead. Plot is free, [open-source](https://github.com/observablehq/plot), built on top of D3, and maintained by the same people as D3.

For example, <a href=${link}>${title || link}</a> reproduces the above chart, with Plot.

`}</div>
</details>`;
}
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("viewof name")).define("viewof name", ["Inputs"], _name);
  main.variable(observer("name")).define("name", ["Generators", "viewof name"], (G, _) => G.input(_));
  main.variable(observer()).define(["howto","name"], _3);
  main.variable(observer()).define(["howto","name"], _4);
  main.variable(observer("currentSpecifier")).define("currentSpecifier", _currentSpecifier);
  main.variable(observer("howto")).define("howto", ["currentSpecifier","htl","md","Inputs"], _howto);
  main.variable(observer()).define(["altplot"], _7);
  main.variable(observer("altplot")).define("altplot", ["htl","md","Inputs"], _altplot);
  main.variable(observer("linkplot")).define("linkplot", ["htl","md"], _linkplot);
  return main;
}
