import MalabarPage from 'lib/MalabarPage';

import { MouseEvent } from 'core/Events';
import Slider from 'components/Slider';
import MainHeader from 'components/MainHeader';

class Agency extends MalabarPage {

	// --------------------------------------------------------------o Private
	_initContent() {

		super._initContent();

		this.$breadcrumb = this.$container.find('.breadcrumb');
		this.$breadcrumbItems = this.$breadcrumb.find('li');

		// ---o Init breadcrumb
		this.slider = this.sliders[0];
		this.$breadcrumbItems.eq(this.slider.currentIndex).addClass('active');

		this.$bottomButton = this.$container.find('.button-bottom');
	}

	_initEvents() {

		super._initEvents();

		this.$breadcrumbItems
			.on(MouseEvent.CLICK, ::this._onBreadcrumbItemClick);

		this.slider
			.on(Slider.CHANGE + '.agency', ::this._onSliderChange);

		this.$bottomButton
			.on(MouseEvent.CLICK, this._onBottomButtonClick);

	}

	// --------------------------------------------------------------o Listeners

	_onBreadcrumbItemClick() {



	}

	_onSliderChange() {

		this.$breadcrumbItems.filter('.active').removeClass('active');
		this.$breadcrumbItems.eq(this.slider.currentIndex).addClass('active');

	}

	_onBottomButtonClick() {

		MainHeader.openWorks();

	}


	// --------------------------------------------------------------o Public

}

export default Agency;
