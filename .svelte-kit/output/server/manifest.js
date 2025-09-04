export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "idyll/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.CSl_ENOC.js",app:"_app/immutable/entry/app.Bk2eA1WK.js",imports:["_app/immutable/entry/start.CSl_ENOC.js","_app/immutable/chunks/B6LC_KA8.js","_app/immutable/chunks/Bi5EmiG7.js","_app/immutable/entry/app.Bk2eA1WK.js","_app/immutable/chunks/Bi5EmiG7.js","_app/immutable/chunks/BvO4f8lS.js","_app/immutable/chunks/H_k49oe3.js","_app/immutable/chunks/B2PaAi5o.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/idyll/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
