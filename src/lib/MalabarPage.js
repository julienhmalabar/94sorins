import Page from 'core/Page';

import $ from 'jquery';

// Import components
import HeroPicture from 'components/HeroPicture';
import Slider from 'components/Slider';
import GridGallery from 'components/GridGallery';
import Gallery from 'components/Gallery';
import Popin from 'components/Popin';
import Accordion from 'components/Accordion';


class MalabarPage extends Page {

	// --------------------------------------------------------------o Private

	_initContent() {

		super._initContent();

		this._initHeroPictures();
		this._initSliders();
		this._initGridGalleries();
		this._initGalleries();
		this._initPopins();
		this._initAccordions();
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

	_initGridGalleries() {

		let gridGalleries = this.$container.find('.grid-gallery');
		if (gridGalleries.length) {
			this.gridGalleries = [];
			gridGalleries.each( (key) => {
				this.gridGalleries.push(new GridGallery(gridGalleries.eq(key)));
			})
		}
	}

	_initGalleries() {

		let galleries = this.$container.find('.gallery');
		if (galleries.length) {
			this.galleries = [];
			galleries.each( (key) => {
				this.galleries.push(new Gallery(galleries.eq(key)));
			})
		}
	}

	_initPopins() {

		let popins = this.$container.find('.popin');
		if (popins.length) {
			this.popins = [];
			popins.each( (key) => {
				this.popins.push(new Popin(popins.eq(key)));
			})
		}
	}

	_initAccordions() {

		let accordions = this.$container.find('.accordion');
		if (accordions.length) {
			this.accordions = [];
			accordions.each( (key) => {
				this.accordions.push(new Accordion(accordions.eq(key)));
			})
		}
	}

	// --------------------------------------------------------------o Listeners



}


export default MalabarPage;
