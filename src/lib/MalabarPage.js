import Page from 'core/Page';

import $ from 'jquery';

// Import components
import HeroPicture from 'components/HeroPicture';
import Slider from 'components/Slider';


class MalabarPage extends Page {

	// --------------------------------------------------------------o Private

	_initContent() {

		super._initContent();

		this._initHeroPictures();
		this._initSliders();

		this._loadPictures();

	}

	_loadPictures() {

		$('img[data-src]').each( (key, img) => {
			img.src = img.getAttribute('data-src');
			img.removeAttribute('data-src');
		});

	}

	// --------------------------------------------------------------o Components

	_initHeroPictures() {
		
		let heroPictures = this.$container.find('.hero-picture');
		if (heroPictures.length) {
			this.heroPictures = [];
			heroPictures.each( (key) => {
				this.heroPictures.push(new HeroPicture(heroPictures.eq(key)));
			})
		}
	}

	_initSliders() {

		let sliders = this.$container.find('.slider');
		if (sliders.length) {
			this.sliders = [];
			sliders.each( (key) => {
				this.sliders.push(new Slider(sliders.eq(key)));
			})
		}
	}

	// --------------------------------------------------------------o Listeners



}


export default MalabarPage;
