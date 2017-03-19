import EventEmitter from 'eventemitter2';
import Router from 'core/Router';
import Page from 'core/Page';
import Viewport from 'core/Viewport';
import TextUtils from 'core/TextUtils';

import $ from 'jquery';

import data from 'data/data.json'

/*
	Create new object only for template data
*/

class ViewsManager extends EventEmitter {

	REQUEST_START = 'router:request_start';
	REQUEST_END = 'router:request_end';

	constructor() {

		super({ wildcard: true });

		// ---o Set an unlimited numbers of listeners
		this.setMaxListeners(0);

	}

	init(pages) {

		this.pages = pages;

		this.currentClass = undefined;
		this.prevClass = undefined;

		this.isPageFixed = false;

		this.pageContainer = $('.page-container');

		this._initEvents();

	}

	// --------------------------------------------------------------o Private

	_initEvents () {

		Router
			.on(Router.REQUEST_START, this._onRouterStart.bind(this))
			.on(Router.REQUEST_END, this._onRouterEnd.bind(this));

	}


	// --------------------------------------------------------------o Listeners

	_onRouterStart (res) {

		let pageSlug = TextUtils.lowercaseFirstLetter(res.class.slug);

		if (this.currentClass && pageSlug === this.currentClass.slug) {
			if (this.currentClass.shouldStayOnSamePage(res) === true) {
				this.emit(this.REQUEST_START + '.*', res);
				this.samePage = true;
				return;
			}
		}

		// ---o Handle last page
		let prevSlug = undefined;
		if (this.currentClass !== undefined) {
			this.prevClass = this.currentClass;
			prevSlug = this.prevClass.slug;
		}

		// ---o Handle new page
		let page = this.pages[pageSlug];

		this.currentClass = new page.class(pageSlug, prevSlug);

		// ---o Exit prev class
		if (this.prevClass) {
			this.prevClass.once(this.prevClass.EXITED, this._onPageExited.bind(this));
			this.prevClass.exit();
		}

		this.emit(this.REQUEST_START + '.*');

	}

	_onRouterEnd (response) {

		if (this.samePage === true) {
			this.samePage = false;
			return;
		}

		if (Router.currentRoute.class === undefined) {
			throw('Error: Class doesn\'t exist. Please create one or check the URL.');
			return;
		}

		if (response) {	

			let template = $(response.text).filter('.page-container').html();

			this.currentClass.loaded = true;
			this.currentClass.enter(template);

			this.emit(this.REQUEST_END + '.*');
		}
		else {
			this.currentClass.loaded = true;
			this.currentClass.enter();
		}
		
	}

	_onPagePreEntered() {



	}	

	_onPageEntered() {



	}

	_onPageExited() {

		//this.currentClass.enter();

	}

}

export default new ViewsManager();
