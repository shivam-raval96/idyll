import { d as slot, c as pop, p as push } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  push();
  $$payload.out += `<main class="svelte-12lf3ey"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main>`;
  pop();
}
export {
  _layout as default
};
