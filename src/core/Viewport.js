import EventEmitter from 'eventemitter2';
import $ from 'jquery';

import {Event, KeyboardEvent, Tab} from 'core/Events';

class Viewport extends EventEmitter {

	constructor() {

		super({ wildcard: true });

		// ---o Set an unlimited numbers of listeners
		this.setMaxListeners(0);

		this.$window = $(window);
		this.$body = $('body');
		this.$document = $(document);

		this.width = this.$window.width();
		this.height = this.$window.height();
		this.screenWidth = screen.width;
		this.screenHeight = screen.height;

		this.tabLeft = false;
		this.isBodyFixed = false;
		this.savedScroll = 0;

		this.scrollTop = {};
		this.scrollTop.curr = 0;
		this.scrollTop.perc = 0;
		this.scrollTop.max = 1;

		this._initContent();
		this._initEvents();

	}

	// ------------------------------------------------------------o Private

	_initContent () {

		this._onResize();

	}

	_initEvents () {

		this.$window
			.on('load resize', this._onResize.bind(this))
			.on('blur', this._onWindowBlur.bind(this))
			.on('focus', this._onWindowFocus.bind(this))
			.on('scroll', this._onWindowFocus.bind(this))

		//this.$document[0].addEventListener('scroll', this._onScroll.bind(this), { passive: true });
		
		$(document)
			.on('wheel scroll', this._onScroll.bind(this));

	}

	_checkResponsive() {

		let responsiveState = window.getComputedStyle(
			this.$body[0], ':before'
		).getPropertyValue('content').replace(/"/g, '');

		if (!this.responsiveState || responsiveState !== this.responsiveState) {
			this.responsiveState = responsiveState;
			this.emit(Event.RESPONSIVE_CHANGE + '.*', responsiveState);
		}

	}

	// ------------------------------------------------------------o Listeners

	_onResize () {

		this._checkResponsive();

		this.width = this.$window.width();
		this.height = this.$window.height();
		this.screenWidth = screen.width;
		this.screenHeight = screen.height;

		this.updateScroll();

		this.emit(Event.RESIZE + '.*');

	}  

	_onWindowBlur () {

		this.tabLeft = true;

		this.emit(Tab.LEAVE + '.*');

	}  

	_onWindowFocus () {

		this.tabLeft = false;

		this.emit(Tab.ENTER + '.*');

	}

	_onScroll() {

		this.scrollTop.curr = this.$window.scrollTop();
		this.scrollTop.perc = this.scrollTop.curr / this.scrollTop.max;

		if (Math.abs(this.scrollTop.perc - ~~ this.scrollTop.perc) < 0.001) {
			this.scrollTop.perc = ~~ this.scrollTop.perc;
		}

	}

	_onUpdate() {

		this.emit(Event.TICK + '.*');

	}

	// ------------------------------------------------------------o Public

	fixBody() {

		if (this.isBodyFixed === true) {
			return;
		}


		this.savedScroll = this.$window.scrollTop();
		this.isBodyFixed = true;
		this.$body.addClass('fixed').css('top', - this.savedScroll);

	}

	unfixBody() {

		if (this.isBodyFixed === false) {
			return;
		}

		this.isBodyFixed = false;
		this.$body.removeClass('fixed');

		this.$body.css('top', 0);
		this.$window.scrollTop(this.savedScroll);

	}

	resize() {

		this._onResize();

	}

	updateScroll() {

		this.scrollTop.max = this.$body.height() - this.height;

	}

	scrollTo(val, fast) {

		if (val === this.scrollTop.curr) {
			return;
		}

		if (fast === true) {
			this.$document.scrollTop(val);
			return;
		}

		let scroll = {
			val: this.scrollTop.curr
		}

		let pxDiff = scroll.val - val;
		let absPxDiff = Math.abs(pxDiff);

		if (absPxDiff > this.height) {
			if (pxDiff < 0) {
				scroll.val = val - this.height;
			}
			else {
				scroll.val = val + this.height;
			}
		}

		let time = Math.abs(scroll.val - val) / 750;

		/*TweenLite.to(scroll, time, {val: val, ease: Power4.easeOut, onUpdate: () => {
			this.$document.scrollTop(scroll.val);
		}});*/

	}


}

export default new Viewport()
