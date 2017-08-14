import $ from 'jquery';

import Component from 'core/Component';
import { MouseEvent } from 'core/Events';

class Slider extends Component {

	static CHANGE = 'slider:change';

	// --------------------------------------------------------------o Private

	_initContent() {

		super._initContent();

		this.$slides = this.$container.find('.slides li');	
		this.$nav = this.$container.find('.slider-nav');

		if (this.$nav.length) {
			this.$navItems = this.$nav.find('.slider-nav-item');
		}

		if (this.$container.attr('data-timer')) {
			this._sliderDuration = this.$container.attr('data-timer');
			this._launchTimer();
		}

		this.$stepsNav = this.$container.find('.slider-steps');

		if (this.$stepsNav.length) {
			this.$steps = this.$stepsNav.find('li');
		}

		this.prevIndex = undefined;
		this.currIndex = undefined;
		this.slidesLength = this.$slides.length;

		this.hide();

		this._goToSlide(0);

	}

	_initEvents() {

		super._initEvents();

		if (this.$nav.length) {
			this.$navItems
				.on(MouseEvent.CLICK, this._onNavItemClick.bind(this));
		}

		if (this.$steps) {
			this.$steps
				.on(MouseEvent.CLICK, this._onBallClick.bind(this));
		}

	}

	_launchTimer() {

		if (this._timer) {
			clearTimeout(this._timer);
		}
		this._timer = setTimeout( () => {
			this._nextSlide();
		}, this._sliderDuration);

	}

	_prevSlide() {

		let index = this.currIndex - 1;
		let noStateChange = false;

		if (index < 0) {
			index = this.$slides.length - 1;
			noStateChange = true;
		}

		this._goToSlide(index, noStateChange);

	}

	_nextSlide() {

		let index = this.currIndex + 1;
		let noStateChange = false;

		if (index > this.slidesLength - 1) {
			index = 0;
			noStateChange = true;
		}

		this._goToSlide(index, noStateChange)

	}

	_goToSlide(index, noStateChange) {

		if (index === this.currIndex) {
			return;
		}

		this.states = ['prev', 'next'];

		this.prevIndex = this.currIndex;
		this.currIndex = index;

		if (this.prevIndex > this.currIndex) {
			this.states.reverse();
		}

		if (noStateChange == true) {
			this.states.reverse();
		}

		this.$slides.eq(this.prevIndex).removeClass(this.states[1]).addClass(this.states[0]);

		let currentSlide = this.$slides.eq(this.currIndex);

		currentSlide.addClass(this.states[1] + ' no-transition-all').removeClass(this.states[0]);
		currentSlide[0].offsetHeight;

		if (this.$steps) {
			this.$steps.eq(this.prevIndex).removeClass('active');
			this.$steps.eq(this.currentIndex).addClass('active');
		}

		currentSlide.removeClass(this.states[1] + ' no-transition-all');

		if (this._timer) {
			this._launchTimer();
		}
				
		this.emit(Slider.CHANGE +'.*', noStateChange);


	}

	// --------------------------------------------------------------o Listeners

	_onNavItemClick(e) {

		let $this = $(e.currentTarget);
		let klass = $this.attr('class') || '';

		if (klass.match('slider-prev')) {
			this._prevSlide();
		}
		else if (klass.match('slider-next')) {
			this._nextSlide();
		}
		else {
			this.goTo($this.index());
		}
	}

	_onBallClick(e) {

		let $this = $(e.currentTarget);
		let index = $this.index();

		this.goTo(index);

	}

	// --------------------------------------------------------------o Public

	goTo(index, noStateChange) {

		this._goToSlide(index, noStateChange);

	}

	next() {

		this._nextSlide();

	}

	prev() {

		this._prevSlide();

	}

	hide() {

		this.currIndex = -1;
		this.$slides.addClass('no-transition next');

	}

	// --------------------------------------------------------------o Public

	get currentIndex() {

		return this.currIndex;

	}
}


export default Slider;
