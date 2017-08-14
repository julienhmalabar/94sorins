import raf from 'raf';

import Component from 'core/Component';
import { Event, MouseEvent } from 'core/Events';
import Viewport from 'core/Viewport';
import ImageUtils from 'core/ImageUtils';
import MainHeader from 'components/MainHeader';


class HeroPicture extends Component {

	// --------------------------------------------------------------o Private

	_initContent() {

		super._initContent();

		this._scrollTop = {
			current: 0,
			destination: 0,
			prev: 0
		};

		this._ease = 0.7;

		this._containerHeight = 0;
		this._isHidden = false;

		this.$figure = this.$container.find('figure');

		this.$content = this.$container.find('figcaption');
		this.$scrollButton = this.$container.find('.scroll-button');

		this.$placeHolder = this.$container.siblings('.hero-picture-placeholder');

		this.isBackgroundPictureLoaded = false;
		this.isSmall = this.$container.hasClass('small');

		if (Viewport.width > 600) {
			let $video = this.$figure.find('video');

			if ($video.length) {
				$video
					.addClass('playable')
					.get(0).play();
			}
		}

	}

	_initEvents() {

		super._initEvents();

		Viewport
			.on(Event.SCROLL + '.heroPicture', ::this._onScroll);

		this.$scrollButton
			.on(MouseEvent.CLICK, ::this._onScrollButtonClick);

	}

	_updatePosition() {

		if (MainHeader.isMenuOpened === true) {
			return;
		}

		this._scrollTop.current += (this._scrollTop.destination - this._scrollTop.current) * this._ease;

		if (this._scrollTop.current === this._scrollTop.destination) {
			return;
		}

		if (Math.abs(this._scrollTop.destination - this._scrollTop.current) < 0.1) {
			this._scrollTop.current = this._scrollTop.destination;
		}

		if (this._scrollTop.current > this._containerHeight) {
			if (this._isHidden === false) {
				this._isHidden = true;
				this.$container.addClass('hidden');
			}
			return;
		}
		else {
			if (this._isHidden === true) {
				this._isHidden = false;
				this.$container.removeClass('hidden');
			}
		}

		this.$figure.css({'transform': 'translate3d(0, ' + (- this._scrollTop.current * 0.3) + 'px, 0)'});
		this.$content.css({
			'transform': 'translate3d(0, ' + (- this._scrollTop.current * 0.5) + 'px, 0)',
			'opacity': '1'
		});
		this.$scrollButton.css({
			'transform': 'translate3d(0, ' + (- this._scrollTop.current) + 'px, 0)',
			'opacity': (1 - (this._scrollTop.current / (this._containerHeight / 10))) 
		});

		raf(::this._updatePosition);

	}

	// --------------------------------------------------------------o Listeners

	_onScroll(scrollTop) {

		this._scrollTop.destination = scrollTop.current;

		this._updatePosition();

	}

	_onScrollButtonClick() {

		Viewport.scrollTo(this.$container.height());

	}

	_onResize() {

		var height = this.isSmall ? 500 : Viewport.height * 0.90;

		if (Viewport.responsiveState === 'mobile') {
			height = this.isSmall ? 300 : Viewport.height * 0.75;
		}

		this.$container.css({
			'height': height
		});

		this.$placeHolder.css({
			'height': height
		});

		this._containerHeight = height;

	}

	// --------------------------------------------------------------o Resize


	// --------------------------------------------------------------o Public

}


export default HeroPicture;