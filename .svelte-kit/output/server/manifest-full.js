export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "idyll/_app",
	assets: new Set([".nojekyll","bibliography.bib","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DKuSRgxj.js",app:"_app/immutable/entry/app.C4WMxWga.js",imports:["_app/immutable/entry/start.DKuSRgxj.js","_app/immutable/chunks/Ce2hWQpJ.js","_app/immutable/chunks/CItAwhV8.js","_app/immutable/entry/app.C4WMxWga.js","_app/immutable/chunks/CItAwhV8.js","_app/immutable/chunks/C1ssvtQe.js","_app/immutable/chunks/C8lB4Yry.js","_app/immutable/chunks/DNs2nGif.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
