export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","robots.txt"]),
	mimeTypes: {".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.d5eece36.js","app":"_app/immutable/entry/app.c8e3e2fc.js","imports":["_app/immutable/entry/start.d5eece36.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.44648173.js","_app/immutable/entry/app.c8e3e2fc.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.8ebe6acb.js"],"stylesheets":[],"fonts":[]},
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
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
