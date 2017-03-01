import EventEmitter from 'eventemitter2';

import Viewport from 'core/Viewport';
import { Event } from 'core/Events';
import TextUtils from 'core/TextUtils';

// Init Views Manager
import ViewsManager from 'core/ViewsManager';
import $ from 'jquery';

// Import components
import HeroPicture from 'components/HeroPicture';


class Page extends EventEmitter {
	
	PRE_ENTERED = 'page:pre_entered';
	ENTERED = 'page:entered';
	EXITED = 'page:exited';

	constructor(slug, prevSlug) {

		super({ wildcard: true });

		this.data = {};

		// ---o Set an unlimited numbers of listeners
		this.setMaxListeners(0);

		this.slug = slug;
		this.prevSlug = prevSlug;
		this._isLoaded = false;
		this._isPreRendered = false;
		this._isRendered = false;
		this._isPreEntered = false;
		this._isEntered = false;

		//this._preEnter();
		this._initContent();
		this._initEvents();
		
	}


	// --------------------------------------------------------------o Private
		
	_preEnter() {

		this._isPreEntered = true;
		//ViewsManager.pageContainer.append(this.$container);

		if (this._isLoaded === true && this._isRendered === false) {
			this.enter();
		}

	}

	_preRender() {

		if (this._isLoaded === true) {
			this._render();
			return;
		}

		// Convert string template into template string (need to find a better way than eval)
		let template = ViewsManager.pages[this.slug].template;
		this.$container = $(template);

	}

	_render() {

		this._isRendered = true;

		this.$container = $(this.template);
		ViewsManager.pageContainer.html(this.$container);

		this._initContent();
		this._initEvents();

		Viewport.resize();

		this.enter();

	}

	_initContent() {

		const pageSlug = TextUtils.lowercaseFirstLetter(this.constructor.name);

		this.$container = $('.page-' + pageSlug);

	}

	_initEvents() {

		if (this._onResize) {
			Viewport
				.on(Event.RESIZE + '.' + this.constructor.name, this._onResize.bind(this));
		}

		// ---o Only launch the ticker when the page needs it
		if (this._onUpdate) {
			Viewport
				.on(Event.TICK + '.' + this.constructor.name, this._onUpdate.bind(this));
		}

		if (this._onResponsiveChange) {
			Viewport
				.on(Viewport.RESPONSIVE_CHANGE + '.' + this.constructor.name, this._onResponsiveChange.bind(this));
		}

	}
	
	// --------------------------------------------------------------o Listeners



	// --------------------------------------------------------------o Public

	enter (template) {

		if (template) {
			this.template = template;
		}

		if (this._isRendered === false) {
			//this._isEntered = true;
		}

		if (this._isRendered === true || this._isPreEntered === false) {
			return;
		}

		if (this._isLoaded === true) {
			this._render();
			return;
		}

	}

	exit () {

		this.emit(this.EXITED);

		this.destroy();

	}

	destroy () {

		if (this.$container) {
			this.$container.remove();
		}

		if (this._onResize) {
			Viewport
				.removeAllListeners(Event.RESIZE + '.' + this.constructor.name);
		}

		if (this._onUpdate) {
			Viewport
				.removeAllListeners(Event.TICK + '.' + this.constructor.name);
		}


	}

	shouldStayOnSamePage(res) {

		return false;

	}

	// --------------------------------------------------------------o Setters

	set loaded(val) {

		this._isLoaded = true;

	}

}


export default Page;
