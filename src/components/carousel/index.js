import $ from 'jquery';
import Component from 'core/Component';
import raf from 'raf';

import Viewport from 'core/Viewport';
import { MouseEvent } from 'core/Events';

class Carousel extends Component {

	// --------------------------------------------------------------o Private

	_initContent() {

		super._initContent();

		this.$carouselList = this.$container.find('.pictures');
		this.currentIndex = 0;
		this.position = {
			current: 0,
			prev: 0,
			dest: 0,
			init: 0
		};

		this.mouseX = {
			init: 0,
			prev: 0,
			current: 0
		};

		this.isDragging = false;

		this.defaultEase = 0.15;
		this.ease = this.defaultEase;
		this.marginBetweenPictures = 0;
		this.maxPosition = 0;
		this.minPosition = 0;

		this._listPictures();

	}

	_initEvents() {

		super._initEvents();

		this.$pictures
			.on(MouseEvent.CLICK, ::this._onPictureClick);

		//this.$carouselList
		//	.on(MouseEvent.DOWN, ::this._onMouseDown);

	}

	_listPictures() {

		this.pictures = [];
		this.$pictures = this.$container.find('.pictures img');

		this.$pictures.each( (key, pic) => {
			let $pic = $(pic);
			this.pictures.push({
				$elm: $pic,
				elm: pic,
				width: ~~ $pic.attr('data-width'),
				height: ~~ $pic.attr('data-height')
			});
		});

		this._onResize();

	}

	_resizeCarousel() {



	}

	_updatePosition() {

		this.position.current += (this.position.dest - this.position.current) * this.ease;

		if (this.position.dest === this.position.current && this.ease !== 1) {
			return;
		}

		if (Math.abs(this.position.current - this.position.dest) < 0.1) {
			this.position.current = this.position.dest;
		}

		this.$carouselList.css('transform', 'translate3d(' + this.position.current + 'px, 0, 0)');

		raf(::this._updatePosition);
	}

	_goToIndex(index, force = false) {

		if (index === this.currentIndex && force === false) {
			return;
		}

		this.currentIndex = index;

		let pos = this.initLeftMargin;

		$.each(this.pictures, (key, pic) => {
			if (key < this.currentIndex) {
				pos -= pic.currentWidth + this.marginBetweenPictures;
			}
			else if (key === this.currentIndex) {
				pos -= (pic.currentWidth + this.marginBetweenPictures) * 0.5;
			}
		});

		this._goToPos(pos, force);

	}

	_goToPos(pos, force) {

		if (pos > this.minPosition) {
			pos = this.minPosition;
		}
		else if (pos < this.maxPosition) {
			pos = this.maxPosition;
		}

		this.position.dest = pos;
		this._updatePosition();

	}


	// --------------------------------------------------------------o Listeners

	_onPictureClick(e) {

		let $pic = $(e.currentTarget);
		let $parent = $pic.parent();
		let index = $parent.index();

		this.ease = this.defaultEase;
		this._goToIndex(index);

	}

	_onMouseDown(event) {

		let e = (event.type == 'touchstart') ? event.originalEvent.touches[0] : event;

        if ([0, 1].indexOf(event.which) == -1) {             // test if it's a left click
        	return;
        }

        this.isDragging = true;
        this.ease = 1;

        this.position.init = this.position.current;
        this.mouseX.init = e.pageX;

		Viewport.$body
			.on(MouseEvent.UP + '.carousel', ::this._onMouseUp)
			.on(MouseEvent.MOVE + '.carousel', ::this._onMouseMove);



	}

	_onMouseMove(event) {

		let e = (event.type == 'touchmove') ? event.originalEvent.touches[0] : event;

		this.mouseX.prev = this.mouseX.current;
		this.mouseX.current = - (this.mouseX.init - e.pageX);

		this._goToPos(this.position.init + this.mouseX.current, true);

		event.preventDefault();

	}

	_onMouseUp() {

		this.isDragging = false;

		this.ease = this.defaultEase;
		let pos = this.position.init + this.mouseX.current - (this.mouseX.prev - this.mouseX.current) * 7;
		let index = 0;

		$.each(this.pictures, (key, pic) => {
			if (pos < pic.leftPos && pos > pic.leftPos - pic.width - this.marginBetweenPictures) {
				index = key;
			}
		});

		this._goToIndex(index, true);

		Viewport.$body
			.off(MouseEvent.UP + '.carousel')
			.off(MouseEvent.MOVE + '.carousel');
	}

	_onResize() {

		this.marginBetweenPictures = parseInt(this.$carouselList.find('li').eq(0).css('margin-left').replace('px', '')) * 2;
		this.containerHeight = Math.min(Viewport.height - 300, 1000);

		this.$container.css('height', this.containerHeight);

		this.maxPosition = 0;
		this.initLeftMargin = 0;
		this.initRightMargin = 0;
		this.incPos = 0;
		let carouselListWidth = 0;
		const landscapeMaxWidth = Viewport.width - this.marginBetweenPictures * 4;
		const portraitMaxWidth = 400;

		$.each(this.pictures, (key, pic) => {
			let width = pic.width > pic.height ? landscapeMaxWidth : portraitMaxWidth;
			let height = (pic.height / pic.width) * width;

			if (height > this.containerHeight) {
				height = this.containerHeight;
				width = (pic.width / pic.height) * height;
			}

			pic.$elm.css({
				width: width,
				height: height
			});

			pic.currentWidth = width;

			carouselListWidth += width + this.marginBetweenPictures;
			if (key === 0) {
				this.initLeftMargin = Viewport.width * 0.5;
				this.maxPosition = this.initLeftMargin;
				this.incPos = this.initLeftMargin - (width + this.marginBetweenPictures) * 0.5;
			}
			else {

			}

			this.maxPosition -= width;

			if (key === this.pictures.length - 1) {
				this.maxPosition -= width * 0.5 + this.marginBetweenPictures;
			}

			pic.leftPos = this.incPos;
			this.incPos = pic.leftPos - width - this.marginBetweenPictures;

		});

		this.minPosition = this.initLeftMargin - (this.pictures[0].currentWidth + this.marginBetweenPictures) * 0.5;

		this.$carouselList.css('width', carouselListWidth);

		this.ease = 1;
		this._goToIndex(this.currentIndex, true);

	}


	// --------------------------------------------------------------o Public

}


export default Carousel;