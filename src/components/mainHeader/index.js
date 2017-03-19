import $ from 'jquery';

import Component from 'core/Component';
import Viewport from 'core/Viewport';
import { MouseEvent, Event } from 'core/Events';

class MainHeader extends Component {

	static _Class = {
		MENU_OPENED: 'opened',
		MENU_PRE_OPENED: 'pre-opened',
		SUB_MENU_OPENED: 'sub-menu-opened',
	}

	// --------------------------------------------------------------o Private

	_initContent () {

		super._initContent();

		this.$container = $('.main-header');
		this.$mainMenu = this.$container.find('.main-menu');
		this.$openButton = this.$container.find('.open-button');
		this.$closeButton = this.$container.find('.close-button');

		this.$subMenuItems = this.$container.find('.sub-menu').prev();
		this.$subMenuBackButtons = this.$container.find('.sub-menu .back-button');

		this._isMenuOpened = false;

	}

	_initEvents() {

		super._initEvents();

		this.$openButton
			.on(MouseEvent.CLICK, ::this._onOpenButtonClick);

		this.$closeButton
			.on(MouseEvent.CLICK, ::this._onCloseButtonClick);

		this.$subMenuItems
			.on(MouseEvent.CLICK, ::this._onSubMenuItemClick);

		this.$subMenuBackButtons
			.on(MouseEvent.CLICK, ::this._onSubMenuBackButtonClick);

	}

	// --------------------------------------------------------------o Listeners

	_onOpenButtonClick() {

		this.openMenu();

	}

	_onCloseButtonClick() {

		this.closeMenu();

	}

	_onSubMenuItemClick(event) {

		console.log(this.$mainMenu.hasClass(MainHeader._Class.SUB_MENU_OPENED));
		if (this.$mainMenu.hasClass(MainHeader._Class.SUB_MENU_OPENED)) {
			return;
		}

		this.$mainMenu.addClass(MainHeader._Class.SUB_MENU_OPENED);
		$(event.currentTarget).addClass(MainHeader._Class.SUB_MENU_OPENED);

	}

	_onSubMenuBackButtonClick() {

		console.log('ok');

		this.$mainMenu.removeClass(MainHeader._Class.SUB_MENU_OPENED);
		$(event.currentTarget).parents('.sub-menu').removeClass(MainHeader._Class.SUB_MENU_OPENED);

	}

	// --------------------------------------------------------------o Public

	openMenu() {

		if (this._isMenuOpened === true) {
			return
		}

		this.$container.addClass(MainHeader._Class.MENU_PRE_OPENED);
		this.$container[0].offsetHeight;
		this.$container
			.addClass(MainHeader._Class.MENU_OPENED)
			.removeClass(MainHeader._Class.MENU_PRE_OPENED);

	}

	closeMenu() {

		if (this._isMenuOpened === true) {
			return
		}

		this.$container.removeClass(MainHeader._Class.MENU_OPENED);

	}

}


export default new MainHeader();
