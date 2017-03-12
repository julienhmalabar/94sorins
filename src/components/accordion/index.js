import Component from 'core/Component';

import $ from 'jquery';
import { MouseEvent } from 'core/Events';

class Accordion extends Component {

	// --------------------------------------------------------------o Private

	_initContent() {

		super._initContent();

		this.$items = this.$container.find('.item');

	}

	_initEvents() {

		super._initEvents();

		this.$items.find('.title')
			.on(MouseEvent.CLICK, ::this._onItemClick);

	}

	// --------------------------------------------------------------o Listeners

	_onItemClick(e) {

		let $item = $(e.currentTarget);
		let $parent = $item.parent();
		let isOpened = $parent.hasClass('active');

		let $currentItem = this.$items.filter('.active');
		let $currentTextContainer = $currentItem.find('.text-container');
		
		$currentItem.removeClass('active');
		$currentTextContainer.css('height', 0);

		if (isOpened) {
			return;
		}

		let $textContainer = $parent.find('.text-container');
		let $text = $parent.find('.text');
		$item.parent().addClass('active');
		$textContainer.css('height', $text.outerHeight());

	}


	// --------------------------------------------------------------o Public

}


export default Accordion;