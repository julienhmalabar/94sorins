import $ from 'jquery';
import raf from 'raf';

import MalabarPage from 'lib/MalabarPage';
import Viewport from 'core/Viewport';
import { Event } from 'core/Events';

class Homepage extends MalabarPage {

	// --------------------------------------------------------------o Private

	_initContent() {

		super._initContent();

		this._scrollTop = {
			current: 0,
			destination: 0,
			prev: 0
		};

		this._initShapes();

	}

	_initEvents() {

		super._initEvents();

		Viewport
			.on(Event.SCROLL + '.heroPicture', ::this._onScroll);

	}

	_initShapes() {

		let types = ['circle', 'triangle', 'band'];

		this.$shapesContainer = this.$container.find('.shapes-container');
		this.shapes = [];
		let shapesContainerWidth = this.$shapesContainer.width();
		let shapesContainerHeight = this.$shapesContainer.height();
		let shapesNumber = 10;

		for (let i = 0; i < shapesNumber; i++) {
			let type = types[~~ (Math.random() * types.length)];
			let $shape = $('<div class="' + type + '"><span></span></div>');
			let $innerShape = $shape.find('span');
			let width = 20;
			let height = 20;

			if (type === 'band') {
				width = ~~ (20 + Math.random() * 20);
				height = ~~ (5 + Math.random() * 10);
				$innerShape.css('transform', 'rotate(' + ~~ (Math.random() * 360) + 'deg)');
			}
			else if (type === 'circle') {
				width = ~~ (10 + Math.random() * 30);
				height = width;
			}
			else if (type === 'triangle') {
				width = 0;
				height = 0;
				let size = ~~ (10 + Math.random() * 20);
				$innerShape.css({					
					'border-left': size + 'px solid transparent',
					'border-right': size + 'px solid transparent',
					'border-bottom-width': size + 'px',
					'transform': 'rotate(' + ~~ (Math.random() * 360) + 'deg)'
				});
			}

			$innerShape.css({
				'height': height,
				'width': width,
				'opacity': Math.random() * 0.8 + 0.2
			});

			$shape.css({
				'left': 20 + Math.random() * (shapesContainerWidth - 50),
				'top': 20 + Math.random() * (shapesContainerHeight - 50)
			});

			this.$shapesContainer.append($shape);
			this.shapes.push({
				speed: 2 + Math.random() * 5 - 3,
				item: $shape
			});
		}

	}

	_updateShapesPosition() {

		this._scrollTop.current += (this._scrollTop.destination - this._scrollTop.current) * 0.1;

		if (this._scrollTop.current === this._scrollTop.destination) {
			return;
		}

		if (Math.abs(this._scrollTop.destination - this._scrollTop.current) < 0.1) {
			this._scrollTop.current = this._scrollTop.destination;
		}

		$.each(this.shapes, (key, shape) => {
			var position = this._scrollTop.current / Viewport.scrollHeight * shape.speed * 100;
			shape.item.css('transform', 'translate3d(0, ' + position + 'px, 0)');
		});

		raf(::this._updateShapesPosition);

	}

	// --------------------------------------------------------------o Listeners

	_onScroll(scrollTop) {

		this._scrollTop.destination = scrollTop.current;

		this._updateShapesPosition();

	}


	// --------------------------------------------------------------o Public

	_onResize() {



	}


	_onUpdate() {



	}

}


export default Homepage;
