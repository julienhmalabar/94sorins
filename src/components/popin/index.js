import $ from 'jquery';

import Component from 'core/Component';
import { MouseEvent } from 'core/Events';

class Popin extends Component {

	// --------------------------------------------------------------o Private
	
	_initContent() {

		super._initContent();

		this._name = this.$container.attr('data-popin');

		this._isOpened = false;

		this.$popinButtons = $('.popin-button-' + this._name);
		this.$closeButton = this.$container.find('.popin-close-button');

	}

	_initEvents() {

		super._initEvents();

		this.$popinButtons
			.on(MouseEvent.CLICK, ::this._onPopinButtonClick);

		this.$closeButton
			.on(MouseEvent.CLICK, ::this._onCloseButtonClick);

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

	}

	_onCloseButtonClick() {

		if (this._isOpened === false) {
			return;
		}

		this._isOpened = false;

		this.$container.removeClass('opened');

	}


	// --------------------------------------------------------------o Public

}


export default Popin;