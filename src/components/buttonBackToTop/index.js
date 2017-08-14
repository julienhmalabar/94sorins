import $ from 'jquery';
import EventEmitter from 'eventemitter2';

import Viewport from 'core/Viewport';
import { MouseEvent } from 'core/Events';

class BackToTopButton extends EventEmitter {

	// --------------------------------------------------------------o Private

	init() {

		this.$container = $('.button-back-to-top');

		this._initEvents();

	}

	_initEvents() {

		this.$container
			.on(MouseEvent.CLICK, ::this._onContainerClick);

	}


	// --------------------------------------------------------------o Listeners

	_onContainerClick(e) {

		Viewport.scrollTo(0);

	}


	// --------------------------------------------------------------o Public

}


export default new BackToTopButton();