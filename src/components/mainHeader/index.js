import EventEmitter from 'eventemitter2';
import $ from 'jquery';

import Component from 'core/Component';
import Viewport from 'core/Viewport';
import { MouseEvent, Event } from 'core/Events';
import ImageUtils from 'core/ImageUtils';
import ViewsManager from 'core/ViewsManager';

class MainHeader extends EventEmitter {

	static _Class = {
		MENU_OPENED: 'opened',
		MENU_PRE_OPENED: 'pre-opened',
		SUB_MENU_OPENED: 'sub-menu-opened',
	}

	init() {

		this._initContent();
		this._initEvents();

	}

	// --------------------------------------------------------------o Private

	_initContent () {

		this.$pageContainer = $('.page-container');

		this.$container = $('.main-header');
		this.$mainMenu = this.$container.find('.main-menu');
		this.$openButton = this.$container.find('.open-button');
		this.$closeButton = this.$container.find('.close-button');

		this.$subMenuButton = this.$container.find('.sub-menu').prev();
		this.$subMenuBackButtons = this.$container.find('.sub-menu .back-button');
		this.$subMenuItems = this.$container.find('.sub-menu li');

		this.$subMenuPicturesContainer = this.$container.find('.case-studies-pictures');
		this.$subMenuPictures = this.$subMenuPicturesContainer.find('img');

		this.isMenuOpened = false;

		this.isLogoColored = false;
		this.isLogoColorLocked = false;

		this._onViewsManagerRequestEnd();

	}

	_initEvents() {

		this.$openButton
			.on(MouseEvent.CLICK, ::this._onOpenButtonClick);

		this.$closeButton
			.on(MouseEvent.CLICK, ::this._onCloseButtonClick);

		this.$subMenuButton
			.on(MouseEvent.CLICK, ::this._onSubMenuButtonClick);

		this.$subMenuItems
			.on(MouseEvent.ENTER, ::this._onSubMenuItemEnter)
			.on(MouseEvent.LEAVE, ::this._onSubMenuItemLeave);

		this.$subMenuBackButtons
			.on(MouseEvent.CLICK, ::this._onSubMenuBackButtonClick);

		this.$subMenuPicturesContainer
			.on(MouseEvent.CLICK, ::this._onSubMenuPicturesContainerClick);

		this.$subMenuPictures.each( (key, picture) => {
			if (picture.complete) {
				this._resizeSubMenuPicture(picture);
			}
			else {
				picture.onload = () => {
					this._resizeSubMenuPicture(picture);
				}
			}
		});

		Viewport
			.on(Event.RESIZE + '.header', ::this._onResize)
			.on(Event.SCROLL + '.header', ::this._onScroll);

		ViewsManager
			.on(ViewsManager.REQUEST_START + '.header', ::this._onViewsManagerRequestStart)
			.on(ViewsManager.REQUEST_END + '.header', ::this._onViewsManagerRequestEnd);

	}

	_resizeSubMenuPicture(picture) {

		if (!picture.complete || this.isMenuOpened === false) {
			return;
		}

		let $picture = $(picture);

		let dims = ImageUtils.getCoverSizeImage(
			picture.naturalWidth,
			picture.naturalHeight,
			this.$subMenuPicturesContainer.width(),
			this.$subMenuPicturesContainer.height()
		);

		$picture.css(dims);

	}

	// --------------------------------------------------------------o Listeners

	_onOpenButtonClick() {

		this.openMenu();

	}

	_onCloseButtonClick() {

		this.closeMenu();

	}

	_onSubMenuButtonClick(event) {

		if (this.$mainMenu.hasClass(MainHeader._Class.SUB_MENU_OPENED)) {
			return;
		}

		this.$mainMenu.addClass(MainHeader._Class.SUB_MENU_OPENED);
		$(event.currentTarget).addClass(MainHeader._Class.SUB_MENU_OPENED);

	}

	_onSubMenuItemEnter(e) {

		let $item = $(e.currentTarget);
		let index = $item.index();
		
		this.$subMenuPictures.eq(index).parent().addClass('active');

	}

	_onSubMenuItemLeave(e) {

		let $item = $(e.currentTarget);
		let index = $item.index();
		
		this.$subMenuPictures.eq(index).parent().removeClass('active');

	}

	_onSubMenuBackButtonClick() {

		this.$mainMenu.removeClass(MainHeader._Class.SUB_MENU_OPENED);
		$(event.currentTarget).parents('.sub-menu').removeClass(MainHeader._Class.SUB_MENU_OPENED);

	}

	_onSubMenuPicturesContainerClick() {

		this.closeMenu();

	}

	_onViewsManagerRequestStart() {

		this.closeMenu();

	}

	_onViewsManagerRequestEnd() {

		if (ViewsManager.currentClass && ['job', 'article', 'legals', 'press', 'p404'].indexOf(ViewsManager.currentClass.slug) > -1) {
			this.colorLogo(true);
		}
		else {
			this.whitewashLogo(false);
		}

	}

	_onResize() {

		this.$subMenuPictures.each( (key, picture) => {
			this._resizeSubMenuPicture(picture);
		});

	}

	_onScroll(scrollTop) {

		if (this.isLogoColorLocked) {
			return;
		}

		if (scrollTop.current > Viewport.height * 0.9 - 50 && this.isLogoColored === false) {
			this.colorLogo();
		}
		else if (scrollTop.current <= Viewport.height * 0.9 - 50 && this.isLogoColored === true) {
			this.whitewashLogo();
		}
	}

	// --------------------------------------------------------------o Public

	openMenu() {

		if (this.isMenuOpened === true) {
			return
		}

		this.isMenuOpened = true;
		this._savedScroll = Viewport.scrollTop.current;

		this.$pageContainer.addClass('fixed').css('top', - this._savedScroll);

		this.$container.addClass(MainHeader._Class.MENU_PRE_OPENED);
		this.$container[0].offsetHeight;
		this.$container
			.addClass(MainHeader._Class.MENU_OPENED)
			.removeClass(MainHeader._Class.MENU_PRE_OPENED)
			.css('top', 0);

		Viewport.$body.addClass('menu-opened');

		this.$subMenuBackButtons.trigger(MouseEvent.CLICK);

		this._onResize();

	}

	closeMenu() {

		if (this.isMenuOpened === false) {
			return
		}

		this.isMenuOpened = false;

		this.$pageContainer.removeClass('fixed').css('top', 0);
		Viewport.$window.scrollTop(this._savedScroll);

		this.$container
			.removeClass(MainHeader._Class.MENU_OPENED)
			.css('top', - Viewport.scrollTop.current);

		Viewport.$body.removeClass('menu-opened');

	}

	hide() {

		this.$container.addClass('hidden');

	}

	show() {

		this.$container.removeClass('hidden');

	}

	openWorks() {

		this.openMenu();
		this.$subMenuButton.eq(0).trigger(MouseEvent.CLICK);

	}

	colorLogo(locked = false) {
	
		this.$container.addClass('logo-colored');
		this.isLogoColored = true;

		this.isLogoColorLocked = locked;

	}

	whitewashLogo(locked = false) {

		this.$container.removeClass('logo-colored');
		this.isLogoColored = false;

		this.isLogoColorLocked = locked;

	}

}


export default new MainHeader();
