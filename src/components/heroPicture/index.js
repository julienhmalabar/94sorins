import raf from 'raf';

import Component from 'core/Component';
import { Event } from 'core/Events';
import Viewport from 'core/Viewport';


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

	}

	_initEvents() {

		Viewport
			.on(Event.SCROLL + '.heroPicture', ::this._onScroll);

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

		raf(::this._updatePosition);

	}

	// --------------------------------------------------------------o Listeners

	_onScroll(scrollTop) {

		this._scrollTop.destination = scrollTop.current;

		this._updatePosition();

	}


	// --------------------------------------------------------------o Public

}


export default HeroPicture;