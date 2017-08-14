// ---o Core
import $ from 'jquery';

// ---o Init keyboard events
import Keyboard from 'core/Keyboard';

// ---o Init cookies
import Cookies from 'core/Cookies';

// ---o Init the rest of the core
import Viewport from 'core/Viewport';
import ViewsManager from 'core/ViewsManager';
import Router from 'core/Router';
import data from './data/data.json';

import SocialSharing from 'core/SocialSharing';

// ---o Import main elements 
import MainHeader from 'components/MainHeader';
import MainFooter from 'components/MainFooter';
import ButtonBackToTop from 'components/ButtonBackToTop';
import CookieBand from 'components/CookieBand';
import PopinInscription from 'components/PopinInscription';

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
ButtonBackToTop.init();
CookieBand.init();
MainHeader.init();
MainFooter.init();
PopinInscription.init();
