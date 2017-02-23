import $ from 'jquery';

import Component from 'core/Component';
import Viewport from 'core/Viewport';
import { MouseEvent, Event } from 'core/Events';

class MainHeader extends Component {

	static _Class = {
		MENU_OPENED: 'menu-opened'
	}

	// --------------------------------------------------------------o Private

	_initContent () {

		super._initContent();

		this.$container = $('.main-header');
		this.$mainMenu = this.$container.find('.main-menu');
		this.$openButton = this.$container.find('.open-button');
		this.$closeButton = this.$container.find('.close-button');

		this._isMenuOpened = false;

	}

	_initEvents() {

		super._initEvents();

		this.$openButton
			.on(MouseEvent.CLICK, ::this._onOpenButtonClick);

		this.$closeButton
			.on(MouseEvent.CLICK, ::this._onCloseButtonClick);

	}

	// --------------------------------------------------------------o Listeners

	_onOpenButtonClick() {

		this.openMenu();

	}

	_onCloseButtonClick() {

		this.closeMenu();

	}

	// --------------------------------------------------------------o Public

	openMenu() {

		if (this._isMenuOpened === true) {
			return
		}

		this.$container.addClass(MainHeader._Class.MENU_OPENED);

	}

	closeMenu() {

		if (this._isMenuOpened === true) {
			return
		}

		this.$container.removeClass(MainHeader._Class.MENU_OPENED);

	}

}


export default new MainHeader();
