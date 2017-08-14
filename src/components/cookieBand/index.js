import $ from 'jquery';

import { MouseEvent } from 'core/Events';
import Cookies from 'core/Cookies';

class BackToTopButton {

	// --------------------------------------------------------------o Private

	init() {

		this.$container = $('.cookie-band');
		this.$closeButton = this.$container.find('.close-button');

		if (Cookies.get('allowed')) {
			this._remove();
			this._setAnalytics();
		}
		else {
			this.$container.addClass('opened');
		}

		this._initEvents();

	}

	_initEvents() {

		this.$closeButton
			.on(MouseEvent.CLICK, ::this._onCloseButtonClick);

	}

	_remove() {

		Cookies.set('allowed', true);
		this.$container.remove();

	}

	_setAnalytics() {

		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', ANALYTICS_ID, 'auto');
		ga('send', 'pageview');
	}


	// --------------------------------------------------------------o Listeners

	_onCloseButtonClick(e) {

		this._remove();
		this._setAnalytics();

	}


	// --------------------------------------------------------------o Public

}


export default new BackToTopButton();