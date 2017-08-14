import $ from 'jquery';

import Component from 'core/Component';
import { MouseEvent } from 'core/Events';
import MainHeader from 'components/MainHeader';

class Popin extends Component {

	static OPENED = 'popin:opened';
	static CLOSED = 'popin:closed';

	// --------------------------------------------------------------o Private
	
	_initContent() {

		super._initContent();

		this._name = this.$container.attr('data-popin');

		this._isOpened = false;

		this.$popinButtons = $('.popin-button-' + this._name);
		this.$closeButton = this.$container.find('.popin-close-button');
		this.$overlay = this.$container.find('.overlay');

	}

	_initEvents() {

		super._initEvents();

		this.$popinButtons
			.on(MouseEvent.CLICK, ::this._onPopinButtonClick);

		this.$closeButton
			.on(MouseEvent.CLICK, ::this._onCloseButtonClick);

		if (this.$overlay.length) {
			this.$overlay
				.on(MouseEvent.CLICK, ::this._onOverlayClick);
		}

	}

	// --------------------------------------------------------------o Listeners

	_onPopinButtonClick() {

		if (this._isOpened === true) {
			return;
		}

		this._isOpened = true;

		this.$container.addClass('pre-opened');
		this.$container[0].offsetHeight;
		this.$container.addClass('opened').removeClass('pre-opened');

		this.emit(Popin.OPENED);

		MainHeader.hide();

	}

	_onCloseButtonClick() {

		this.close();

	}

	_onOverlayClick() {

		this.close();

	}


	// --------------------------------------------------------------o Public

	close() {
		
		if (this._isOpened === false) {
			return;
		}

		this._isOpened = false;

		this.$container.removeClass('opened');

		this.emit(Popin.CLOSED);

		MainHeader.show();

	}

}


export default Popin;