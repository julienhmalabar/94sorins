import MalabarPage from 'lib/MalabarPage';

import { MouseEvent } from 'core/Events';
import Slider from 'components/Slider';

class Agency extends MalabarPage {

	// --------------------------------------------------------------o Private
	_initContent() {

		super._initContent();

		this.$breadcrumb = this.$container.find('.breadcrumb');
		this.$breadcrumbItems = this.$breadcrumb.find('li');

		// ---o Init breadcrumb
		this.slider = this.sliders[0];
		this.$breadcrumbItems.eq(this.slider.currentIndex).addClass('active');
	}

	_initEvents() {

		super._initEvents();

		this.$breadcrumbItems
			.on(MouseEvent.CLICK, ::this._onBreadcrumbItemClick);

		this.slider
			.on(Slider.CHANGE + '.agency', ::this._onSliderChange);

	}

	// --------------------------------------------------------------o Listeners

	_onBreadcrumbItemClick() {



	}

	_onSliderChange() {

		this.$breadcrumbItems.filter('.active').removeClass('active');
		this.$breadcrumbItems.eq(this.slider.currentIndex).addClass('active');

	}


	// --------------------------------------------------------------o Public

}


export default Agency;
