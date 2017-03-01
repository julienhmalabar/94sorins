import raf from 'raf';

import Component from 'core/Component';
import { Event, MouseEvent } from 'core/Events';
import Viewport from 'core/Viewport';
import ImageUtils from 'core/ImageUtils';


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

		this.$backgroundPicture = this.$container.find('img');
		this.$content = this.$container.find('figcaption');
		this.$scrollButton = this.$container.find('.scroll-button');

		this._isBackgroundPictureLoaded = false;

	}

	_initEvents() {

		super._initEvents();

		Viewport
			.on(Event.SCROLL + '.heroPicture', ::this._onScroll);

		if (this.$backgroundPicture[0].complete) {
			this._onBackgroundPictureLoaded();
		}
		else {
			this.$backgroundPicture
				.on('loaded', ::this._onBackgroundPictureLoaded);
		}

		this.$scrollButton
			.on(MouseEvent.CLICK, ::this._onScrollButtonClick);

	}

	_updatePosition() {

		this._scrollTop.current += (this._scrollTop.destination - this._scrollTop.current) * this._ease;

		if (this._scrollTop.current === this._scrollTop.destination) {
			return;
		}

		if (Math.abs(this._scrollTop.destination - this._scrollTop.current) < 0.1) {
			this._scrollTop.current = this._scrollTop.destination;
		}

		this.$backgroundPicture.css({'transform': 'translate3d(0, ' + (- this._scrollTop.current * 0.3) + 'px, 0)'});
		this.$content.css({
			'transform': 'translate3d(0, ' + (- this._scrollTop.current * 0.5) + 'px, 0)',
			'opacity': '1'
		});
		this.$scrollButton.css({
			'transform': 'translate3d(0, ' + (- this._scrollTop.current) + 'px, 0)',
			'opacity': '1'
		});

		raf(::this._updatePosition);

	}

	// --------------------------------------------------------------o Listeners

	_onScroll(scrollTop) {

		this._scrollTop.destination = scrollTop.current;

		this._updatePosition();

	}

	_onBackgroundPictureLoaded() {

		this._isBackgroundPictureLoaded = true;
		this._resizeBackgroundPicture();

	}

	_onScrollButtonClick() {

		Viewport.scrollTo(this.$container.height());

	}

	_onResize() {

		if (this._isBackgroundPictureLoaded) {
			this._resizeBackgroundPicture();
		}

	}

	// --------------------------------------------------------------o Resize

	_resizeBackgroundPicture() {

		let dims = ImageUtils.getCoverSizeImage(
			this.$backgroundPicture.width(),
			this.$backgroundPicture.height(),
			this.$container.width(),
			this.$container.height()
		);

		this.$backgroundPicture.css(dims);

	}


	// --------------------------------------------------------------o Public

}


export default HeroPicture;