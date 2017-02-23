import EventEmitter from 'eventemitter2';
import $ from 'jquery';
import Viewport from 'core/Viewport';

import { Event } from 'core/Events';

class Component extends EventEmitter {
	
	constructor(container) {

		super({ wildcard: true });

		this.$container = container;

		this._initContent();
		this._initEvents();
		
	}


	// --------------------------------------------------------------o Private

	_initContent() {



	}

	_initEvents() {

		if (this._onResize) {
			Viewport
				.on(Event.RESIZE + '.' + this.constructor.name, this._onResize.bind(this));
		}

		// ---o Only launch the ticker when the page needs it
		if (this._onUpdate) {
			TweenMax.ticker
				.addEventListener("tick", this._onUpdate.bind(this));
		}

	}

	// --------------------------------------------------------------o Listeners



	// --------------------------------------------------------------o Public
	

}


export default Component;
