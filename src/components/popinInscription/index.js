import $ from 'jquery';

import {MouseEvent} from 'core/Events';
import Popin from 'components/Popin';

class PopinInscription {

	init() {

		this._initContent();
		this._initEvents();

	}

	// --------------------------------------------------------------o Private

	_initContent() {

		this.$container = $('.form-inscription');

		this.$form = this.$container.find('form');
		this.$validation = this.$container.find('.validation');

		this.$buttonSubmit = this.$container.find('.button-submit');

		this.popin = new Popin($('.popin-inscription'));

	}

	_initEvents() {

		this.$buttonSubmit
			.on(MouseEvent.CLICK, ::this._onButtonSubmitClick);

		this.popin
			.on(Popin.OPENED, ::this._onPopinOpened);

	}

	_validateEmail() {

		this.$form.addClass('hidden');
		this.$validation.addClass('displayed');

	}

	// --------------------------------------------------------------o Listeners

	_onButtonSubmitClick() {

		// Do the request for the email.
		// In the callback call the following method.
		this._validateEmail();

	}

	_onPopinOpened() {

		this.$form.removeClass('hidden');
		this.$validation.removeClass('displayed');

	}


	// --------------------------------------------------------------o Public

}


export default new PopinInscription();