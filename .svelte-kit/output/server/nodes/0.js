import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DGSF2OSM.js","_app/immutable/chunks/H_k49oe3.js","_app/immutable/chunks/Bi5EmiG7.js","_app/immutable/chunks/mMqUwDix.js"];
export const stylesheets = ["_app/immutable/assets/0.DRixais7.css"];
export const fonts = [];
