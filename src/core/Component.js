import EventEmitter from 'eventemitter2';
import TemplateRenderer from 'core/TemplateRenderer';
import $ from 'jquery';
import Viewport from 'core/Viewport';

import { Event } from 'core/Events';

import data from 'data/data.json';

class Component extends EventEmitter {
	
	constructor(data) {

		super({ wildcard: true });

		this.data = data || {};

		this._addGlobalData();
		
	}


	// --------------------------------------------------------------o Private

	_render(template) {

		// Convert string template into template string (need to find a better way than eval)

		let output = TemplateRenderer.render(this.template, this.data);
		this.$container = $(output);

		this._initContent();
		this._initEvents();

	}

	_addGlobalData() {

		// Add all global variables
		for (let key in data) {
			if (key === key.toUpperCase()) {
				this.data[key] = data[key];
			}
		}

	}

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
