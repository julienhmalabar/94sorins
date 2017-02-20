// ---o Core
import $ from 'jquery';

// ---o Init keyboard events
import Keyboard from 'core/Keyboard';

// ---o Init the rest of the core
import Viewport from 'core/Viewport';
import ViewsManager from 'core/ViewsManager';
import Router from 'core/Router';
import data from './data/data.json';

// Import views
let requiredPages = require('./pages/**/*.js', {mode: 'hash'});

let pages = {};
for (let key in requiredPages) {
	let page = requiredPages[key].default;
	let pageName = key.split('/')[0];

	// When only one template created
	if (pageName === 'index') {
		pageName = 'homepage';
	}

	pages[pageName] = {
		class: page,
		data: data[pageName]
	}
}

// ---o Order init for cycling thing
ViewsManager.init(pages);
Router.init();
