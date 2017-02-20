import EventEmitter from 'eventemitter2';
import page from 'page';
import request from 'superagent';
import $ from 'jquery';

import data from 'data/data.json';

class Router extends EventEmitter {

	REQUEST_START = 'router:request_start';
	REQUEST_END = 'router:request_end';
	REQUEST_PENDING = 'router:request_pending';

	constructor() {

		super({ wildcard: true });

		// ---o Set an unlimited numbers of listeners
		this.setMaxListeners(0);
	}

	init() {

		this.firstRequest = false;
		this.currentRoute = undefined;

		let routes = data._routes;

		for (let path in routes) {

			let route = routes[path];

			page(ROOT_PATH + path, (ctx) => {

				if (typeof(route) !== 'string') {
					if (route.redirect) {
						page(route.redirect);
						return;
					}
				}

				this.prevRoute = this.currentRoute;

				this.currentRoute = {
					routePath: path,
					path: ctx.path,
					params: ctx.params,
					class: route
				}

				this.emit(this.REQUEST_START, this.currentRoute);

				if (this.firstRequest === true) {

					this.request(ctx.path);

					return;
				}

				this.firstRequest = true;
				
				this.emit(this.REQUEST_END);

			})

		};

		page();

	}

	// --------------------------o Private

	// --------------------------o Public

	request (url) {

		request
			.get(url)
			.set('X-Requested-With', 'XMLHttpRequest')
			.end( (err, response) => {

				if (err !== null) {

					return;
				}

				this.emit(this.REQUEST_END, response);

			});

	}

	pushURL (path) {

		window.history.pushState({'path': path}, '', path, '');

	}

	replaceURL (path) {

		window.history.replaceState({'path': path}, '', path, '');

	}

}


export default new Router();
