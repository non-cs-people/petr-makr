

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.29b4472f.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.8ebe6acb.js","_app/immutable/chunks/singletons.44648173.js"];
export const stylesheets = [];
export const fonts = [];
