(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Component2 = require('./../../core/Component');

var _Component3 = _interopRequireDefault(_Component2);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Events = require('./../../core/Events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = function (_Component) {
	_inherits(Accordion, _Component);

	function Accordion() {
		_classCallCheck(this, Accordion);

		return _possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
	}

	_createClass(Accordion, [{
		key: '_initContent',


		// --------------------------------------------------------------o Private

		value: function _initContent() {

			_get(Accordion.prototype.__proto__ || Object.getPrototypeOf(Accordion.prototype), '_initContent', this).call(this);

			this.$items = this.$container.find('.item');
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			_get(Accordion.prototype.__proto__ || Object.getPrototypeOf(Accordion.prototype), '_initEvents', this).call(this);

			this.$items.find('.title').on(_Events.MouseEvent.CLICK, this._onItemClick.bind(this));
		}

		// --------------------------------------------------------------o Listeners

	}, {
		key: '_onItemClick',
		value: function _onItemClick(e) {

			var $item = (0, _jquery2.default)(e.currentTarget);
			var $parent = $item.parent();
			var isOpened = $parent.hasClass('active');

			var $currentItem = this.$items.filter('.active');
			var $currentTextContainer = $currentItem.find('.text-container');

			$currentItem.removeClass('active');
			$currentTextContainer.css('height', 0);

			if (isOpened) {
				return;
			}

			var $textContainer = $parent.find('.text-container');
			var $text = $parent.find('.text');
			$item.parent().addClass('active');
			$textContainer.css('height', $text.outerHeight());
		}

		// --------------------------------------------------------------o Public

	}]);

	return Accordion;
}(_Component3.default);

exports.default = Accordion;

},{"./../../core/Component":13,"./../../core/Events":16,"jquery":"jquery"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _eventemitter = require('eventemitter2');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _Viewport = require('./../../core/Viewport');

var _Viewport2 = _interopRequireDefault(_Viewport);

var _Events = require('./../../core/Events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BackToTopButton = function (_EventEmitter) {
	_inherits(BackToTopButton, _EventEmitter);

	function BackToTopButton() {
		_classCallCheck(this, BackToTopButton);

		return _possibleConstructorReturn(this, (BackToTopButton.__proto__ || Object.getPrototypeOf(BackToTopButton)).apply(this, arguments));
	}

	_createClass(BackToTopButton, [{
		key: 'init',


		// --------------------------------------------------------------o Private

		value: function init() {

			this.$container = (0, _jquery2.default)('.button-back-to-top');

			this._initEvents();
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			this.$container.on(_Events.MouseEvent.CLICK, this._onContainerClick.bind(this));
		}

		// --------------------------------------------------------------o Listeners

	}, {
		key: '_onContainerClick',
		value: function _onContainerClick(e) {

			_Viewport2.default.scrollTo(0);
		}

		// --------------------------------------------------------------o Public

	}]);

	return BackToTopButton;
}(_eventemitter2.default);

exports.default = new BackToTopButton();

},{"./../../core/Events":16,"./../../core/Viewport":24,"eventemitter2":"eventemitter2","jquery":"jquery"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Component2 = require('./../../core/Component');

var _Component3 = _interopRequireDefault(_Component2);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _Viewport = require('./../../core/Viewport');

var _Viewport2 = _interopRequireDefault(_Viewport);

var _Events = require('./../../core/Events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_Component) {
	_inherits(Carousel, _Component);

	function Carousel() {
		_classCallCheck(this, Carousel);

		return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
	}

	_createClass(Carousel, [{
		key: '_initContent',


		// --------------------------------------------------------------o Private

		value: function _initContent() {

			_get(Carousel.prototype.__proto__ || Object.getPrototypeOf(Carousel.prototype), '_initContent', this).call(this);

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
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			_get(Carousel.prototype.__proto__ || Object.getPrototypeOf(Carousel.prototype), '_initEvents', this).call(this);

			this.$pictures.on(_Events.MouseEvent.CLICK, this._onPictureClick.bind(this));

			//this.$carouselList
			//	.on(MouseEvent.DOWN, ::this._onMouseDown);
		}
	}, {
		key: '_listPictures',
		value: function _listPictures() {
			var _this2 = this;

			this.pictures = [];
			this.$pictures = this.$container.find('.pictures img');

			this.$pictures.each(function (key, pic) {
				var $pic = (0, _jquery2.default)(pic);
				_this2.pictures.push({
					$elm: $pic,
					elm: pic,
					width: ~~$pic.attr('data-width'),
					height: ~~$pic.attr('data-height')
				});
			});

			this._onResize();
		}
	}, {
		key: '_resizeCarousel',
		value: function _resizeCarousel() {}
	}, {
		key: '_updatePosition',
		value: function _updatePosition() {

			this.position.current += (this.position.dest - this.position.current) * this.ease;

			if (this.position.dest === this.position.current && this.ease !== 1) {
				return;
			}

			if (Math.abs(this.position.current - this.position.dest) < 0.1) {
				this.position.current = this.position.dest;
			}

			this.$carouselList.css('transform', 'translate3d(' + this.position.current + 'px, 0, 0)');

			(0, _raf2.default)(this._updatePosition.bind(this));
		}
	}, {
		key: '_goToIndex',
		value: function _goToIndex(index) {
			var _this3 = this;

			var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


			if (index === this.currentIndex && force === false) {
				return;
			}

			this.currentIndex = index;

			var pos = this.initLeftMargin;

			_jquery2.default.each(this.pictures, function (key, pic) {
				if (key < _this3.currentIndex) {
					pos -= pic.currentWidth + _this3.marginBetweenPictures;
				} else if (key === _this3.currentIndex) {
					pos -= (pic.currentWidth + _this3.marginBetweenPictures) * 0.5;
				}
			});

			this._goToPos(pos, force);
		}
	}, {
		key: '_goToPos',
		value: function _goToPos(pos, force) {

			if (pos > this.minPosition) {
				pos = this.minPosition;
			} else if (pos < this.maxPosition) {
				pos = this.maxPosition;
			}

			this.position.dest = pos;
			this._updatePosition();
		}

		// --------------------------------------------------------------o Listeners

	}, {
		key: '_onPictureClick',
		value: function _onPictureClick(e) {

			var $pic = (0, _jquery2.default)(e.currentTarget);
			var $parent = $pic.parent();
			var index = $parent.index();

			this.ease = this.defaultEase;
			this._goToIndex(index);
		}
	}, {
		key: '_onMouseDown',
		value: function _onMouseDown(event) {

			var e = event.type == 'touchstart' ? event.originalEvent.touches[0] : event;

			if ([0, 1].indexOf(event.which) == -1) {
				// test if it's a left click
				return;
			}

			this.isDragging = true;
			this.ease = 1;

			this.position.init = this.position.current;
			this.mouseX.init = e.pageX;

			_Viewport2.default.$body.on(_Events.MouseEvent.UP + '.carousel', this._onMouseUp.bind(this)).on(_Events.MouseEvent.MOVE + '.carousel', this._onMouseMove.bind(this));
		}
	}, {
		key: '_onMouseMove',
		value: function _onMouseMove(event) {

			var e = event.type == 'touchmove' ? event.originalEvent.touches[0] : event;

			this.mouseX.prev = this.mouseX.current;
			this.mouseX.current = -(this.mouseX.init - e.pageX);

			this._goToPos(this.position.init + this.mouseX.current, true);

			event.preventDefault();
		}
	}, {
		key: '_onMouseUp',
		value: function _onMouseUp() {
			var _this4 = this;

			this.isDragging = false;

			this.ease = this.defaultEase;
			var pos = this.position.init + this.mouseX.current - (this.mouseX.prev - this.mouseX.current) * 7;
			var index = 0;

			_jquery2.default.each(this.pictures, function (key, pic) {
				if (pos < pic.leftPos && pos > pic.leftPos - pic.width - _this4.marginBetweenPictures) {
					index = key;
				}
			});

			this._goToIndex(index, true);

			_Viewport2.default.$body.off(_Events.MouseEvent.UP + '.carousel').off(_Events.MouseEvent.MOVE + '.carousel');
		}
	}, {
		key: '_onResize',
		value: function _onResize() {
			var _this5 = this;

			this.marginBetweenPictures = parseInt(this.$carouselList.find('li').eq(0).css('margin-left').replace('px', '')) * 2;
			this.containerHeight = Math.min(_Viewport2.default.height - 300, 1000);

			this.$container.css('height', this.containerHeight);

			this.maxPosition = 0;
			this.initLeftMargin = 0;
			this.initRightMargin = 0;
			this.incPos = 0;
			var carouselListWidth = 0;
			var landscapeMaxWidth = _Viewport2.default.width - this.marginBetweenPictures * 4;
			var portraitMaxWidth = 400;

			_jquery2.default.each(this.pictures, function (key, pic) {
				var width = pic.width > pic.height ? landscapeMaxWidth : portraitMaxWidth;
				var height = pic.height / pic.width * width;

				if (height > _this5.containerHeight) {
					height = _this5.containerHeight;
					width = pic.width / pic.height * height;
				}

				pic.$elm.css({
					width: width,
					height: height
				});

				pic.currentWidth = width;

				carouselListWidth += width + _this5.marginBetweenPictures;
				if (key === 0) {
					_this5.initLeftMargin = _Viewport2.default.width * 0.5;
					_this5.maxPosition = _this5.initLeftMargin;
					_this5.incPos = _this5.initLeftMargin - (width + _this5.marginBetweenPictures) * 0.5;
				} else {}

				_this5.maxPosition -= width;

				if (key === _this5.pictures.length - 1) {
					_this5.maxPosition -= width * 0.5 + _this5.marginBetweenPictures;
				}

				pic.leftPos = _this5.incPos;
				_this5.incPos = pic.leftPos - width - _this5.marginBetweenPictures;
			});

			this.minPosition = this.initLeftMargin - (this.pictures[0].currentWidth + this.marginBetweenPictures) * 0.5;

			this.$carouselList.css('width', carouselListWidth);

			this.ease = 1;
			this._goToIndex(this.currentIndex, true);
		}

		// --------------------------------------------------------------o Public

	}]);

	return Carousel;
}(_Component3.default);

exports.default = Carousel;

},{"./../../core/Component":13,"./../../core/Events":16,"./../../core/Viewport":24,"jquery":"jquery","raf":"raf"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Events = require('./../../core/Events');

var _Cookies = require('./../../core/Cookies');

var _Cookies2 = _interopRequireDefault(_Cookies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BackToTopButton = function () {
	function BackToTopButton() {
		_classCallCheck(this, BackToTopButton);
	}

	_createClass(BackToTopButton, [{
		key: 'init',


		// --------------------------------------------------------------o Private

		value: function init() {

			this.$container = (0, _jquery2.default)('.cookie-band');
			this.$closeButton = this.$container.find('.close-button');

			if (_Cookies2.default.get('allowed')) {
				this._remove();
				this._setAnalytics();
			} else {
				this.$container.addClass('opened');
			}

			this._initEvents();
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			this.$closeButton.on(_Events.MouseEvent.CLICK, this._onCloseButtonClick.bind(this));
		}
	}, {
		key: '_remove',
		value: function _remove() {

			_Cookies2.default.set('allowed', true);
			this.$container.remove();
		}
	}, {
		key: '_setAnalytics',
		value: function _setAnalytics() {

			(function (i, s, o, g, r, a, m) {
				i['GoogleAnalyticsObject'] = r;i[r] = i[r] || function () {
					(i[r].q = i[r].q || []).push(arguments);
				}, i[r].l = 1 * new Date();a = s.createElement(o), m = s.getElementsByTagName(o)[0];a.async = 1;a.src = g;m.parentNode.insertBefore(a, m);
			})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

			ga('create', ANALYTICS_ID, 'auto');
			ga('send', 'pageview');
		}

		// --------------------------------------------------------------o Listeners

	}, {
		key: '_onCloseButtonClick',
		value: function _onCloseButtonClick(e) {

			this._remove();
			this._setAnalytics();
		}

		// --------------------------------------------------------------o Public

	}]);

	return BackToTopButton;
}();

exports.default = new BackToTopButton();

},{"./../../core/Cookies":14,"./../../core/Events":16,"jquery":"jquery"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Component2 = require('./../../core/Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
	_inherits(Gallery, _Component);

	function Gallery() {
		_classCallCheck(this, Gallery);

		return _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).apply(this, arguments));
	}

	return Gallery;
}(_Component3.default);

exports.default = Gallery;

},{"./../../core/Component":13}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Component2 = require('./../../core/Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridGallery = function (_Component) {
	_inherits(GridGallery, _Component);

	function GridGallery() {
		_classCallCheck(this, GridGallery);

		return _possibleConstructorReturn(this, (GridGallery.__proto__ || Object.getPrototypeOf(GridGallery)).apply(this, arguments));
	}

	return GridGallery;
}(_Component3.default);

exports.default = GridGallery;

},{"./../../core/Component":13}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _Component2 = require('./../../core/Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Events = require('./../../core/Events');

var _Viewport = require('./../../core/Viewport');

var _Viewport2 = _interopRequireDefault(_Viewport);

var _ImageUtils = require('./../../core/ImageUtils');

var _ImageUtils2 = _interopRequireDefault(_ImageUtils);

var _MainHeader = require('./../MainHeader');

var _MainHeader2 = _interopRequireDefault(_MainHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeroPicture = function (_Component) {
	_inherits(HeroPicture, _Component);

	function HeroPicture() {
		_classCallCheck(this, HeroPicture);

		return _possibleConstructorReturn(this, (HeroPicture.__proto__ || Object.getPrototypeOf(HeroPicture)).apply(this, arguments));
	}

	_createClass(HeroPicture, [{
		key: '_initContent',


		// --------------------------------------------------------------o Private

		value: function _initContent() {

			_get(HeroPicture.prototype.__proto__ || Object.getPrototypeOf(HeroPicture.prototype), '_initContent', this).call(this);

			this._scrollTop = {
				current: 0,
				destination: 0,
				prev: 0
			};

			this._ease = 0.7;

			this._containerHeight = 0;
			this._isHidden = false;

			this.$figure = this.$container.find('figure');

			this.$content = this.$container.find('figcaption');
			this.$scrollButton = this.$container.find('.scroll-button');

			this.$placeHolder = this.$container.siblings('.hero-picture-placeholder');

			this.isBackgroundPictureLoaded = false;
			this.isSmall = this.$container.hasClass('small');

			if (_Viewport2.default.width > 600) {
				var $video = this.$figure.find('video');

				if ($video.length) {
					$video.addClass('playable').get(0).play();
				}
			}
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			_get(HeroPicture.prototype.__proto__ || Object.getPrototypeOf(HeroPicture.prototype), '_initEvents', this).call(this);

			_Viewport2.default.on(_Events.Event.SCROLL + '.heroPicture', this._onScroll.bind(this));

			this.$scrollButton.on(_Events.MouseEvent.CLICK, this._onScrollButtonClick.bind(this));
		}
	}, {
		key: '_updatePosition',
		value: function _updatePosition() {

			if (_MainHeader2.default.isMenuOpened === true) {
				return;
			}

			this._scrollTop.current += (this._scrollTop.destination - this._scrollTop.current) * this._ease;

			if (this._scrollTop.current === this._scrollTop.destination) {
				return;
			}

			if (Math.abs(this._scrollTop.destination - this._scrollTop.current) < 0.1) {
				this._scrollTop.current = this._scrollTop.destination;
			}

			if (this._scrollTop.current > this._containerHeight) {
				if (this._isHidden === false) {
					this._isHidden = true;
					this.$container.addClass('hidden');
				}
				return;
			} else {
				if (this._isHidden === true) {
					this._isHidden = false;
					this.$container.removeClass('hidden');
				}
			}

			this.$figure.css({ 'transform': 'translate3d(0, ' + -this._scrollTop.current * 0.3 + 'px, 0)' });
			this.$content.css({
				'transform': 'translate3d(0, ' + -this._scrollTop.current * 0.5 + 'px, 0)',
				'opacity': '1'
			});
			this.$scrollButton.css({
				'transform': 'translate3d(0, ' + -this._scrollTop.current + 'px, 0)',
				'opacity': 1 - this._scrollTop.current / (this._containerHeight / 10)
			});

			(0, _raf2.default)(this._updatePosition.bind(this));
		}

		// --------------------------------------------------------------o Listeners

	}, {
		key: '_onScroll',
		value: function _onScroll(scrollTop) {

			this._scrollTop.destination = scrollTop.current;

			this._updatePosition();
		}
	}, {
		key: '_onScrollButtonClick',
		value: function _onScrollButtonClick() {

			_Viewport2.default.scrollTo(this.$container.height());
		}
	}, {
		key: '_onResize',
		value: function _onResize() {

			var height = this.isSmall ? 500 : _Viewport2.default.height * 0.90;

			if (_Viewport2.default.responsiveState === 'mobile') {
				height = this.isSmall ? 300 : _Viewport2.default.height * 0.75;
			}

			this.$container.css({
				'height': height
			});

			this.$placeHolder.css({
				'height': height
			});

			this._containerHeight = height;
		}

		// --------------------------------------------------------------o Resize


		// --------------------------------------------------------------o Public

	}]);

	return HeroPicture;
}(_Component3.default);

exports.default = HeroPicture;

},{"./../../core/Component":13,"./../../core/Events":16,"./../../core/ImageUtils":17,"./../../core/Viewport":24,"./../MainHeader":9,"raf":"raf"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = require('eventemitter2');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Popin = require('./../Popin');

var _Popin2 = _interopRequireDefault(_Popin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainFooter = function (_EventEmitter) {
	_inherits(MainFooter, _EventEmitter);

	function MainFooter() {
		_classCallCheck(this, MainFooter);

		return _possibleConstructorReturn(this, (MainFooter.__proto__ || Object.getPrototypeOf(MainFooter)).apply(this, arguments));
	}

	_createClass(MainFooter, [{
		key: 'init',
		value: function init() {}
	}]);

	return MainFooter;
}(_eventemitter2.default);

exports.default = new MainFooter();

},{"./../Popin":10,"eventemitter2":"eventemitter2","jquery":"jquery"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = require('eventemitter2');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Component = require('./../../core/Component');

var _Component2 = _interopRequireDefault(_Component);

var _Viewport = require('./../../core/Viewport');

var _Viewport2 = _interopRequireDefault(_Viewport);

var _Events = require('./../../core/Events');

var _ImageUtils = require('./../../core/ImageUtils');

var _ImageUtils2 = _interopRequireDefault(_ImageUtils);

var _ViewsManager = require('./../../core/ViewsManager');

var _ViewsManager2 = _interopRequireDefault(_ViewsManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainHeader = function (_EventEmitter) {
	_inherits(MainHeader, _EventEmitter);

	function MainHeader() {
		_classCallCheck(this, MainHeader);

		return _possibleConstructorReturn(this, (MainHeader.__proto__ || Object.getPrototypeOf(MainHeader)).apply(this, arguments));
	}

	_createClass(MainHeader, [{
		key: 'init',
		value: function init() {

			this._initContent();
			this._initEvents();
		}

		// --------------------------------------------------------------o Private

	}, {
		key: '_initContent',
		value: function _initContent() {

			this.$pageContainer = (0, _jquery2.default)('.page-container');

			this.$container = (0, _jquery2.default)('.main-header');
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
	}, {
		key: '_initEvents',
		value: function _initEvents() {
			var _this2 = this;

			this.$openButton.on(_Events.MouseEvent.CLICK, this._onOpenButtonClick.bind(this));

			this.$closeButton.on(_Events.MouseEvent.CLICK, this._onCloseButtonClick.bind(this));

			this.$subMenuButton.on(_Events.MouseEvent.CLICK, this._onSubMenuButtonClick.bind(this));

			this.$subMenuItems.on(_Events.MouseEvent.ENTER, this._onSubMenuItemEnter.bind(this)).on(_Events.MouseEvent.LEAVE, this._onSubMenuItemLeave.bind(this));

			this.$subMenuBackButtons.on(_Events.MouseEvent.CLICK, this._onSubMenuBackButtonClick.bind(this));

			this.$subMenuPicturesContainer.on(_Events.MouseEvent.CLICK, this._onSubMenuPicturesContainerClick.bind(this));

			this.$subMenuPictures.each(function (key, picture) {
				if (picture.complete) {
					_this2._resizeSubMenuPicture(picture);
				} else {
					picture.onload = function () {
						_this2._resizeSubMenuPicture(picture);
					};
				}
			});

			_Viewport2.default.on(_Events.Event.RESIZE + '.header', this._onResize.bind(this)).on(_Events.Event.SCROLL + '.header', this._onScroll.bind(this));

			_ViewsManager2.default.on(_ViewsManager2.default.REQUEST_START + '.header', this._onViewsManagerRequestStart.bind(this)).on(_ViewsManager2.default.REQUEST_END + '.header', this._onViewsManagerRequestEnd.bind(this));
		}
	}, {
		key: '_resizeSubMenuPicture',
		value: function _resizeSubMenuPicture(picture) {

			if (!picture.complete || this.isMenuOpened === false) {
				return;
			}

			var $picture = (0, _jquery2.default)(picture);

			var dims = _ImageUtils2.default.getCoverSizeImage(picture.naturalWidth, picture.naturalHeight, this.$subMenuPicturesContainer.width(), this.$subMenuPicturesContainer.height());

			$picture.css(dims);
		}

		// --------------------------------------------------------------o Listeners

	}, {
		key: '_onOpenButtonClick',
		value: function _onOpenButtonClick() {

			this.openMenu();
		}
	}, {
		key: '_onCloseButtonClick',
		value: function _onCloseButtonClick() {

			this.closeMenu();
		}
	}, {
		key: '_onSubMenuButtonClick',
		value: function _onSubMenuButtonClick(event) {

			if (this.$mainMenu.hasClass(MainHeader._Class.SUB_MENU_OPENED)) {
				return;
			}

			this.$mainMenu.addClass(MainHeader._Class.SUB_MENU_OPENED);
			(0, _jquery2.default)(event.currentTarget).addClass(MainHeader._Class.SUB_MENU_OPENED);
		}
	}, {
		key: '_onSubMenuItemEnter',
		value: function _onSubMenuItemEnter(e) {

			var $item = (0, _jquery2.default)(e.currentTarget);
			var index = $item.index();

			this.$subMenuPictures.eq(index).parent().addClass('active');
		}
	}, {
		key: '_onSubMenuItemLeave',
		value: function _onSubMenuItemLeave(e) {

			var $item = (0, _jquery2.default)(e.currentTarget);
			var index = $item.index();

			this.$subMenuPictures.eq(index).parent().removeClass('active');
		}
	}, {
		key: '_onSubMenuBackButtonClick',
		value: function _onSubMenuBackButtonClick() {

			this.$mainMenu.removeClass(MainHeader._Class.SUB_MENU_OPENED);
			(0, _jquery2.default)(event.currentTarget).parents('.sub-menu').removeClass(MainHeader._Class.SUB_MENU_OPENED);
		}
	}, {
		key: '_onSubMenuPicturesContainerClick',
		value: function _onSubMenuPicturesContainerClick() {

			this.closeMenu();
		}
	}, {
		key: '_onViewsManagerRequestStart',
		value: function _onViewsManagerRequestStart() {

			this.closeMenu();
		}
	}, {
		key: '_onViewsManagerRequestEnd',
		value: function _onViewsManagerRequestEnd() {

			if (_ViewsManager2.default.currentClass && ['job', 'article', 'legals', 'press', 'p404'].indexOf(_ViewsManager2.default.currentClass.slug) > -1) {
				this.colorLogo(true);
			} else {
				this.whitewashLogo(false);
			}
		}
	}, {
		key: '_onResize',
		value: function _onResize() {
			var _this3 = this;

			this.$subMenuPictures.each(function (key, picture) {
				_this3._resizeSubMenuPicture(picture);
			});
		}
	}, {
		key: '_onScroll',
		value: function _onScroll(scrollTop) {

			if (this.isLogoColorLocked) {
				return;
			}

			if (scrollTop.current > _Viewport2.default.height * 0.9 - 50 && this.isLogoColored === false) {
				this.colorLogo();
			} else if (scrollTop.current <= _Viewport2.default.height * 0.9 - 50 && this.isLogoColored === true) {
				this.whitewashLogo();
			}
		}

		// --------------------------------------------------------------o Public

	}, {
		key: 'openMenu',
		value: function openMenu() {

			if (this.isMenuOpened === true) {
				return;
			}

			this.isMenuOpened = true;
			this._savedScroll = _Viewport2.default.scrollTop.current;

			this.$pageContainer.addClass('fixed').css('top', -this._savedScroll);

			this.$container.addClass(MainHeader._Class.MENU_PRE_OPENED);
			this.$container[0].offsetHeight;
			this.$container.addClass(MainHeader._Class.MENU_OPENED).removeClass(MainHeader._Class.MENU_PRE_OPENED).css('top', 0);

			_Viewport2.default.$body.addClass('menu-opened');

			this.$subMenuBackButtons.trigger(_Events.MouseEvent.CLICK);

			this._onResize();
		}
	}, {
		key: 'closeMenu',
		value: function closeMenu() {

			if (this.isMenuOpened === false) {
				return;
			}

			this.isMenuOpened = false;

			this.$pageContainer.removeClass('fixed').css('top', 0);
			_Viewport2.default.$window.scrollTop(this._savedScroll);

			this.$container.removeClass(MainHeader._Class.MENU_OPENED).css('top', -_Viewport2.default.scrollTop.current);

			_Viewport2.default.$body.removeClass('menu-opened');
		}
	}, {
		key: 'hide',
		value: function hide() {

			this.$container.addClass('hidden');
		}
	}, {
		key: 'show',
		value: function show() {

			this.$container.removeClass('hidden');
		}
	}, {
		key: 'openWorks',
		value: function openWorks() {

			this.openMenu();
			this.$subMenuButton.eq(0).trigger(_Events.MouseEvent.CLICK);
		}
	}, {
		key: 'colorLogo',
		value: function colorLogo() {
			var locked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


			this.$container.addClass('logo-colored');
			this.isLogoColored = true;

			this.isLogoColorLocked = locked;
		}
	}, {
		key: 'whitewashLogo',
		value: function whitewashLogo() {
			var locked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


			this.$container.removeClass('logo-colored');
			this.isLogoColored = false;

			this.isLogoColorLocked = locked;
		}
	}]);

	return MainHeader;
}(_eventemitter2.default);

MainHeader._Class = {
	MENU_OPENED: 'opened',
	MENU_PRE_OPENED: 'pre-opened',
	SUB_MENU_OPENED: 'sub-menu-opened'
};
exports.default = new MainHeader();

},{"./../../core/Component":13,"./../../core/Events":16,"./../../core/ImageUtils":17,"./../../core/Viewport":24,"./../../core/ViewsManager":25,"eventemitter2":"eventemitter2","jquery":"jquery"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Component2 = require('./../../core/Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Events = require('./../../core/Events');

var _MainHeader = require('./../MainHeader');

var _MainHeader2 = _interopRequireDefault(_MainHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Popin = function (_Component) {
	_inherits(Popin, _Component);

	function Popin() {
		_classCallCheck(this, Popin);

		return _possibleConstructorReturn(this, (Popin.__proto__ || Object.getPrototypeOf(Popin)).apply(this, arguments));
	}

	_createClass(Popin, [{
		key: '_initContent',


		// --------------------------------------------------------------o Private

		value: function _initContent() {

			_get(Popin.prototype.__proto__ || Object.getPrototypeOf(Popin.prototype), '_initContent', this).call(this);

			this._name = this.$container.attr('data-popin');

			this._isOpened = false;

			this.$popinButtons = (0, _jquery2.default)('.popin-button-' + this._name);
			this.$closeButton = this.$container.find('.popin-close-button');
			this.$overlay = this.$container.find('.overlay');
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			_get(Popin.prototype.__proto__ || Object.getPrototypeOf(Popin.prototype), '_initEvents', this).call(this);

			this.$popinButtons.on(_Events.MouseEvent.CLICK, this._onPopinButtonClick.bind(this));

			this.$closeButton.on(_Events.MouseEvent.CLICK, this._onCloseButtonClick.bind(this));

			if (this.$overlay.length) {
				this.$overlay.on(_Events.MouseEvent.CLICK, this._onOverlayClick.bind(this));
			}
		}

		// --------------------------------------------------------------o Listeners

	}, {
		key: '_onPopinButtonClick',
		value: function _onPopinButtonClick() {

			if (this._isOpened === true) {
				return;
			}

			this._isOpened = true;

			this.$container.addClass('pre-opened');
			this.$container[0].offsetHeight;
			this.$container.addClass('opened').removeClass('pre-opened');

			this.emit(Popin.OPENED);

			_MainHeader2.default.hide();
		}
	}, {
		key: '_onCloseButtonClick',
		value: function _onCloseButtonClick() {

			this.close();
		}
	}, {
		key: '_onOverlayClick',
		value: function _onOverlayClick() {

			this.close();
		}

		// --------------------------------------------------------------o Public

	}, {
		key: 'close',
		value: function close() {

			if (this._isOpened === false) {
				return;
			}

			this._isOpened = false;

			this.$container.removeClass('opened');

			this.emit(Popin.CLOSED);

			_MainHeader2.default.show();
		}
	}]);

	return Popin;
}(_Component3.default);

Popin.OPENED = 'popin:opened';
Popin.CLOSED = 'popin:closed';
exports.default = Popin;

},{"./../../core/Component":13,"./../../core/Events":16,"./../MainHeader":9,"jquery":"jquery"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Events = require('./../../core/Events');

var _Popin = require('./../Popin');

var _Popin2 = _interopRequireDefault(_Popin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PopinInscription = function () {
	function PopinInscription() {
		_classCallCheck(this, PopinInscription);
	}

	_createClass(PopinInscription, [{
		key: 'init',
		value: function init() {

			this._initContent();
			this._initEvents();
		}

		// --------------------------------------------------------------o Private

	}, {
		key: '_initContent',
		value: function _initContent() {

			this.$container = (0, _jquery2.default)('.form-inscription');

			this.$form = this.$container.find('form');
			this.$validation = this.$container.find('.validation');

			this.$buttonSubmit = this.$container.find('.button-submit');

			this.popin = new _Popin2.default((0, _jquery2.default)('.popin-inscription'));
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			this.$buttonSubmit.on(_Events.MouseEvent.CLICK, this._onButtonSubmitClick.bind(this));

			this.popin.on(_Popin2.default.OPENED, this._onPopinOpened.bind(this));
		}
	}, {
		key: '_validateEmail',
		value: function _validateEmail() {

			this.$form.addClass('hidden');
			this.$validation.addClass('displayed');
		}

		// --------------------------------------------------------------o Listeners

	}, {
		key: '_onButtonSubmitClick',
		value: function _onButtonSubmitClick() {

			// Do the request for the email.
			// In the callback call the following method.
			this._validateEmail();
		}
	}, {
		key: '_onPopinOpened',
		value: function _onPopinOpened() {

			this.$form.removeClass('hidden');
			this.$validation.removeClass('displayed');
		}

		// --------------------------------------------------------------o Public

	}]);

	return PopinInscription;
}();

exports.default = new PopinInscription();

},{"./../../core/Events":16,"./../Popin":10,"jquery":"jquery"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Component2 = require('./../../core/Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Events = require('./../../core/Events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slider = function (_Component) {
	_inherits(Slider, _Component);

	function Slider() {
		_classCallCheck(this, Slider);

		return _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).apply(this, arguments));
	}

	_createClass(Slider, [{
		key: '_initContent',


		// --------------------------------------------------------------o Private

		value: function _initContent() {

			_get(Slider.prototype.__proto__ || Object.getPrototypeOf(Slider.prototype), '_initContent', this).call(this);

			this.$slides = this.$container.find('.slides li');
			this.$nav = this.$container.find('.slider-nav');

			if (this.$nav.length) {
				this.$navItems = this.$nav.find('.slider-nav-item');
			}

			if (this.$container.attr('data-timer')) {
				this._sliderDuration = this.$container.attr('data-timer');
				this._launchTimer();
			}

			this.$stepsNav = this.$container.find('.slider-steps');

			if (this.$stepsNav.length) {
				this.$steps = this.$stepsNav.find('li');
			}

			this.prevIndex = undefined;
			this.currIndex = undefined;
			this.slidesLength = this.$slides.length;

			this.hide();

			this._goToSlide(0);
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			_get(Slider.prototype.__proto__ || Object.getPrototypeOf(Slider.prototype), '_initEvents', this).call(this);

			if (this.$nav.length) {
				this.$navItems.on(_Events.MouseEvent.CLICK, this._onNavItemClick.bind(this));
			}

			if (this.$steps) {
				this.$steps.on(_Events.MouseEvent.CLICK, this._onBallClick.bind(this));
			}
		}
	}, {
		key: '_launchTimer',
		value: function _launchTimer() {
			var _this2 = this;

			if (this._timer) {
				clearTimeout(this._timer);
			}
			this._timer = setTimeout(function () {
				_this2._nextSlide();
			}, this._sliderDuration);
		}
	}, {
		key: '_prevSlide',
		value: function _prevSlide() {

			var index = this.currIndex - 1;
			var noStateChange = false;

			if (index < 0) {
				index = this.$slides.length - 1;
				noStateChange = true;
			}

			this._goToSlide(index, noStateChange);
		}
	}, {
		key: '_nextSlide',
		value: function _nextSlide() {

			var index = this.currIndex + 1;
			var noStateChange = false;

			if (index > this.slidesLength - 1) {
				index = 0;
				noStateChange = true;
			}

			this._goToSlide(index, noStateChange);
		}
	}, {
		key: '_goToSlide',
		value: function _goToSlide(index, noStateChange) {

			if (index === this.currIndex) {
				return;
			}

			this.states = ['prev', 'next'];

			this.prevIndex = this.currIndex;
			this.currIndex = index;

			if (this.prevIndex > this.currIndex) {
				this.states.reverse();
			}

			if (noStateChange == true) {
				this.states.reverse();
			}

			this.$slides.eq(this.prevIndex).removeClass(this.states[1]).addClass(this.states[0]);

			var currentSlide = this.$slides.eq(this.currIndex);

			currentSlide.addClass(this.states[1] + ' no-transition-all').removeClass(this.states[0]);
			currentSlide[0].offsetHeight;

			if (this.$steps) {
				this.$steps.eq(this.prevIndex).removeClass('active');
				this.$steps.eq(this.currentIndex).addClass('active');
			}

			currentSlide.removeClass(this.states[1] + ' no-transition-all');

			if (this._timer) {
				this._launchTimer();
			}

			this.emit(Slider.CHANGE + '.*', noStateChange);
		}

		// --------------------------------------------------------------o Listeners

	}, {
		key: '_onNavItemClick',
		value: function _onNavItemClick(e) {

			var $this = (0, _jquery2.default)(e.currentTarget);
			var klass = $this.attr('class') || '';

			if (klass.match('slider-prev')) {
				this._prevSlide();
			} else if (klass.match('slider-next')) {
				this._nextSlide();
			} else {
				this.goTo($this.index());
			}
		}
	}, {
		key: '_onBallClick',
		value: function _onBallClick(e) {

			var $this = (0, _jquery2.default)(e.currentTarget);
			var index = $this.index();

			this.goTo(index);
		}

		// --------------------------------------------------------------o Public

	}, {
		key: 'goTo',
		value: function goTo(index, noStateChange) {

			this._goToSlide(index, noStateChange);
		}
	}, {
		key: 'next',
		value: function next() {

			this._nextSlide();
		}
	}, {
		key: 'prev',
		value: function prev() {

			this._prevSlide();
		}
	}, {
		key: 'hide',
		value: function hide() {

			this.currIndex = -1;
			this.$slides.addClass('no-transition next');
		}

		// --------------------------------------------------------------o Public

	}, {
		key: 'currentIndex',
		get: function get() {

			return this.currIndex;
		}
	}]);

	return Slider;
}(_Component3.default);

Slider.CHANGE = 'slider:change';
exports.default = Slider;

},{"./../../core/Component":13,"./../../core/Events":16,"jquery":"jquery"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = require('eventemitter2');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Viewport = require('./Viewport');

var _Viewport2 = _interopRequireDefault(_Viewport);

var _Events = require('./Events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_EventEmitter) {
	_inherits(Component, _EventEmitter);

	function Component(container) {
		_classCallCheck(this, Component);

		var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, { wildcard: true }));

		_this.$container = container;

		_this._initContent();
		_this._initEvents();

		return _this;
	}

	// --------------------------------------------------------------o Private

	_createClass(Component, [{
		key: '_initContent',
		value: function _initContent() {}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			if (this._onResize) {
				_Viewport2.default.on(_Events.Event.RESIZE + '.' + this.constructor.name, this._onResize.bind(this));
			}

			// ---o Only launch the ticker when the page needs it
			if (this._onUpdate) {
				TweenMax.ticker.addEventListener("tick", this._onUpdate.bind(this));
			}
		}

		// --------------------------------------------------------------o Listeners


		// --------------------------------------------------------------o Public


	}]);

	return Component;
}(_eventemitter2.default);

exports.default = Component;

},{"./Events":16,"./Viewport":24,"eventemitter2":"eventemitter2","jquery":"jquery"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cookies = function () {
	function Cookies() {
		_classCallCheck(this, Cookies);
	}

	_createClass(Cookies, [{
		key: 'set',
		value: function set(name, value, expirationDays) {

			expirationDays = expirationDays ? expirationDays : 31;
			var date = new Date();
			date.setTime(date.getTime() + expirationDays * 24 * 60 * 60 * 1000);
			var expires = "expires=" + date.toUTCString();

			document.cookie = name + '=' + value + ';' + expires;
		}
	}, {
		key: 'get',
		value: function get(name) {

			name = name + '=';
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return '';
		}
	}, {
		key: 'delete',
		value: function _delete(name) {
			document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
		}
	}]);

	return Cookies;
}();

exports.default = new Cookies();

},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ease = function () {
	function Ease() {
		_classCallCheck(this, Ease);
	}

	_createClass(Ease, [{
		key: "linear",


		/**
   *	t = currentTime
   *	b = startValue
   *	c = change
   *	d = duration
   */

		value: function linear(k) {

			return k;
		}
	}, {
		key: "quadIn",
		value: function quadIn(k) {

			return k * k;
		}
	}, {
		key: "quadOut",
		value: function quadOut(k) {

			return k * (2 - k);
		}
	}, {
		key: "quadInOut",
		value: function quadInOut(k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k;
			}

			return -0.5 * (--k * (k - 2) - 1);
		}
	}, {
		key: "cubicIn",
		value: function cubicIn(k) {

			return k * k * k;
		}
	}, {
		key: "cubicOut",
		value: function cubicOut(k) {

			return --k * k * k + 1;
		}
	}, {
		key: "cubicInOut",
		value: function cubicInOut(k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k;
			}

			return -0.5 * (--k * (k - 2) - 1);
		}
	}, {
		key: "quartIn",
		value: function quartIn(k) {

			return k * k * k * k;
		}
	}, {
		key: "quartOut",
		value: function quartOut(k) {

			return 1 - --k * k * k * k;
		}
	}, {
		key: "quartInOut",
		value: function quartInOut(k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k;
			}

			return -0.5 * ((k -= 2) * k * k * k - 2);
		}
	}, {
		key: "quintIn",
		value: function quintIn(k) {

			return k * k * k * k * k;
		}
	}, {
		key: "quintOut",
		value: function quintOut(k) {

			return --k * k * k * k * k + 1;
		}
	}, {
		key: "quintInOut",
		value: function quintInOut(k) {

			if ((k *= 2) < 1) {
				return 0.5 * k * k * k * k * k;
			}

			return 0.5 * ((k -= 2) * k * k * k * k + 2);
		}
	}, {
		key: "sineIn",
		value: function sineIn(k) {

			return 1 - Math.cos(k * Math.PI / 2);
		}
	}, {
		key: "sineOut",
		value: function sineOut(k) {

			return Math.sin(k * Math.PI / 2);
		}
	}, {
		key: "sineInOut",
		value: function sineInOut(k) {

			return 0.5 * (1 - Math.cos(Math.PI * k));
		}
	}, {
		key: "expoIn",
		value: function expoIn(k) {

			return k === 0 ? 0 : Math.pow(1024, k - 1);
		}
	}, {
		key: "expoOut",
		value: function expoOut(k) {

			return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
		}
	}, {
		key: "expoInOut",
		value: function expoInOut(k) {

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if ((k *= 2) < 1) {
				return 0.5 * Math.pow(1024, k - 1);
			}

			return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
		}
	}, {
		key: "circIn",
		value: function circIn(k) {

			return 1 - Math.sqrt(1 - k * k);
		}
	}, {
		key: "circOut",
		value: function circOut(k) {

			return Math.sqrt(1 - --k * k);
		}
	}, {
		key: "circInOut",
		value: function circInOut(k) {

			if ((k *= 2) < 1) {
				return -0.5 * (Math.sqrt(1 - k * k) - 1);
			}

			return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
		}
	}, {
		key: "ElasticIn",
		value: function ElasticIn(k) {

			var s;
			var a = 0.1;
			var p = 0.4;

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if (!a || a < 1) {
				a = 1;
				s = p / 4;
			} else {
				s = p * Math.asin(1 / a) / (2 * Math.PI);
			}

			return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
		}
	}, {
		key: "elasticOut",
		value: function elasticOut(k) {

			var s;
			var a = 0.1;
			var p = 0.4;

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if (!a || a < 1) {
				a = 1;
				s = p / 4;
			} else {
				s = p * Math.asin(1 / a) / (2 * Math.PI);
			}

			return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
		}
	}, {
		key: "elasticInOut",
		value: function elasticInOut(k) {

			var s;
			var a = 0.1;
			var p = 0.4;

			if (k === 0) {
				return 0;
			}

			if (k === 1) {
				return 1;
			}

			if (!a || a < 1) {
				a = 1;
				s = p / 4;
			} else {
				s = p * Math.asin(1 / a) / (2 * Math.PI);
			}

			if ((k *= 2) < 1) {
				return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
			}

			return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
		}
	}, {
		key: "backIn",
		value: function backIn(k) {

			var s = 1.70158;

			return k * k * ((s + 1) * k - s);
		}
	}, {
		key: "backOut",
		value: function backOut(k) {

			var s = 1.70158;

			return --k * k * ((s + 1) * k + s) + 1;
		}
	}, {
		key: "backInOut",
		value: function backInOut(k) {

			var s = 1.70158 * 1.525;

			if ((k *= 2) < 1) {
				return 0.5 * (k * k * ((s + 1) * k - s));
			}

			return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
		}
	}]);

	return Ease;
}();

exports.default = new Ease();

},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var touch = false;
var mousedown = '';
var mouseup = '';
var mousemove = '';

if ('onmousedown' in window) {
	touch = true;
	mousedown += ' mousedown';
	mouseup += ' mouseup';
	mousemove += ' mousemove';
}

if ('ontouchstart' in window) {
	touch = true;
	mousedown += ' touchstart';
	mouseup += ' touchend';
	mousemove += ' touchmove';
}

var Event = exports.Event = {
	RESIZE: 'resize',
	RAF: 'requestAnimationFrame',

	SCROLL: 'scroll',

	KEYDOWN: 'keydown',
	KEYUP: 'keyup',

	COMPLETE: 'complete',
	EACH: 'each',

	CHANGE: 'change',
	BLUR: 'blur',
	FOCUS: 'focus',

	TICK: 'tick'
};

var MouseEvent = exports.MouseEvent = {
	MOVE: mousemove,
	DOWN: mousedown,
	UP: mouseup,
	WHEEL: 'mousewheel',
	ENTER: 'mouseenter',
	LEAVE: 'mouseleave',
	CLICK: 'click'
};

var KeyboardEvent = exports.KeyboardEvent = {

	KEYDOWN: 'keydown',
	KEYUP: 'keyup',
	KEYPRESS: 'keypress'

};

var Tab = exports.Tab = {

	ENTER: 'tab:enter',
	LEAVE: 'tab:leave'

};

},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageUtils = function () {
	function ImageUtils() {
		_classCallCheck(this, ImageUtils);
	}

	_createClass(ImageUtils, [{
		key: 'getCoverSizeImage',
		value: function getCoverSizeImage(picWidth, picHeight, containerWidth, containerHeight) {

			var pw = picWidth,
			    ph = picHeight,
			    cw = containerWidth || window.screenWidth,
			    ch = containerHeight || window.screenHeight,
			    pr = pw / ph,
			    cr = cw / ch;

			if (cr < pr) {
				return {
					'width': ch * pr,
					'height': ch,
					'top': 0,
					'left': -(ch * pr - cw) * 0.5
				};
			} else {
				return {
					'width': cw,
					'height': cw / pr,
					'top': -(cw / pr - ch) * 0.5,
					'left': 0
				};
			}
		}
	}]);

	return ImageUtils;
}();

exports.default = new ImageUtils();

},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = require('eventemitter2');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _Viewport = require('./Viewport');

var _Viewport2 = _interopRequireDefault(_Viewport);

var _Events = require('./Events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Keyboard = function (_EventEmitter) {
	_inherits(Keyboard, _EventEmitter);

	function Keyboard() {
		_classCallCheck(this, Keyboard);

		var _this = _possibleConstructorReturn(this, (Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(this, { wildcard: true }));

		_this.keycode_names = {
			91: 'cmd',
			17: 'ctrl',
			32: 'space',
			16: 'shift',
			18: 'alt',
			20: 'caps',
			9: 'tab',
			13: 'enter',
			8: 'backspace',
			38: 'up',
			39: 'right',
			40: 'down',
			37: 'left',
			27: 'esc'
		};

		_this.downs = [];

		_this._initEvents();
		_this._generateEvents();

		return _this;
	}

	_createClass(Keyboard, [{
		key: '_initEvents',
		value: function _initEvents() {

			_Viewport2.default.$document.on(_Events.KeyboardEvent.KEYDOWN, this._onKeyDown.bind(this)).on(_Events.KeyboardEvent.KEYUP, this._onKeyUp.bind(this));
		}
	}, {
		key: '_onKeyUp',
		value: function _onKeyUp(e) {

			if (this.downs.includes(e.keyCode)) {

				var index = this.downs.indexOf(e.keyCode);
				var character = this._keycodeToCharacter(e.keyCode);

				this.emit(_Events.KeyboardEvent[character.toUpperCase()] + '.*');

				this.downs.splice(index, 1);
			}
		}
	}, {
		key: '_onKeyDown',
		value: function _onKeyDown(e) {

			this.downs.push(e.keyCode);
		}
	}, {
		key: '_generateEvents',
		value: function _generateEvents() {

			for (var i = 0; i < 130; i++) {

				var character = this._keycodeToCharacter(i);

				if (character !== '') {
					_Events.KeyboardEvent[character.toUpperCase()] = 'keypressed:' + character;
				}
			}
		}
	}, {
		key: '_keycodeToCharacter',
		value: function _keycodeToCharacter(keycode) {

			var output = this.keycode_names[keycode];

			if (!output) {
				output = String.fromCharCode(keycode).toLowerCase();
			}

			return output;
		}
	}]);

	return Keyboard;
}(_eventemitter2.default);

exports.default = new Keyboard();

},{"./Events":16,"./Viewport":24,"eventemitter2":"eventemitter2"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = require('eventemitter2');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _Viewport = require('./Viewport');

var _Viewport2 = _interopRequireDefault(_Viewport);

var _Events = require('./Events');

var _TextUtils = require('./TextUtils');

var _TextUtils2 = _interopRequireDefault(_TextUtils);

var _ViewsManager = require('./ViewsManager');

var _ViewsManager2 = _interopRequireDefault(_ViewsManager);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _HeroPicture = require('./../components/HeroPicture');

var _HeroPicture2 = _interopRequireDefault(_HeroPicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Init Views Manager


// Import components


var Page = function (_EventEmitter) {
	_inherits(Page, _EventEmitter);

	function Page(slug, prevSlug) {
		_classCallCheck(this, Page);

		var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, { wildcard: true }));

		_this.PRE_ENTERED = 'page:pre_entered';
		_this.ENTERED = 'page:entered';
		_this.EXITED = 'page:exited';


		_this.data = {};

		// ---o Set an unlimited numbers of listeners
		_this.setMaxListeners(0);

		_this.slug = slug;
		_this.prevSlug = prevSlug;
		_this._isLoaded = false;
		_this._isPreRendered = false;
		_this._isRendered = false;
		_this._isPreEntered = false;
		_this._isEntered = false;

		//this._preEnter();
		//this._initContent();
		//this._initEvents();

		return _this;
	}

	// --------------------------------------------------------------o Private

	_createClass(Page, [{
		key: '_preEnter',
		value: function _preEnter() {

			this._isPreEntered = true;
			//ViewsManager.pageContainer.append(this.$container);

			if (this._isLoaded === true && this._isRendered === false) {
				this.enter();
			}
		}
	}, {
		key: '_preRender',
		value: function _preRender() {

			if (this._isLoaded === true) {
				this._render();
				return;
			}

			// Convert string template into template string (need to find a better way than eval)
			var template = _ViewsManager2.default.pages[this.slug].template;
			this.$container = (0, _jquery2.default)(template);
		}
	}, {
		key: '_render',
		value: function _render() {

			this._isRendered = true;

			this.$container = this.template ? (0, _jquery2.default)(this.template) : _ViewsManager2.default.pageContainer.children();
			_ViewsManager2.default.pageContainer.append(this.$container);

			this.$container[0].offsetHeight;
			this.$container.addClass('displayed');

			_ViewsManager2.default.pageContainer.css('height', 'auto').removeClass('in-transition');

			this._initContent();
			this._initEvents();

			_Viewport2.default.resize();

			//this.enter();
		}
	}, {
		key: '_initContent',
		value: function _initContent() {

			var pageSlug = _TextUtils2.default.lowercaseFirstLetter(this.constructor.name);

			this.$container = (0, _jquery2.default)('.page-' + pageSlug);
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			if (this._onResize) {
				_Viewport2.default.on(_Events.Event.RESIZE + '.' + this.constructor.name, this._onResize.bind(this));
			}

			// ---o Only launch the ticker when the page needs it
			if (this._onUpdate) {
				_Viewport2.default.on(_Events.Event.TICK + '.' + this.constructor.name, this._onUpdate.bind(this));
			}

			if (this._onResponsiveChange) {
				_Viewport2.default.on(_Viewport2.default.RESPONSIVE_CHANGE + '.' + this.constructor.name, this._onResponsiveChange.bind(this));
			}
		}

		// --------------------------------------------------------------o Listeners


		// --------------------------------------------------------------o Public

	}, {
		key: 'enter',
		value: function enter(template) {
			if (template) {
				this.template = template;
			}
			this._render();
			/*
   	if (this._isRendered === false) {
   	//this._isEntered = true;
   }
   	if (this._isRendered === true || this._isPreEntered === false) {
   	return;
   }
   	if (this._isLoaded === true) {
   	this._render();
   	return;
   }*/
		}
	}, {
		key: 'exit',
		value: function exit() {

			_ViewsManager2.default.pageContainer.css('height', this.$container.height()).addClass('in-transition');
			this.$container.addClass('removed').css('top', _Viewport2.default.scrollTop.current);
			this.destroy();
		}
	}, {
		key: 'destroy',
		value: function destroy() {

			if (this.$container) {
				this.$container.remove();
			}

			if (this._onResize) {
				_Viewport2.default.removeAllListeners(_Events.Event.RESIZE + '.' + this.constructor.name);
			}

			if (this._onUpdate) {
				_Viewport2.default.removeAllListeners(_Events.Event.TICK + '.' + this.constructor.name);
			}
		}
	}, {
		key: 'shouldStayOnSamePage',
		value: function shouldStayOnSamePage(res) {

			return false;
		}

		// --------------------------------------------------------------o Setters

	}, {
		key: 'loaded',
		set: function set(val) {

			this._isLoaded = true;
		}
	}]);

	return Page;
}(_eventemitter2.default);

exports.default = Page;

},{"./../components/HeroPicture":7,"./Events":16,"./TextUtils":22,"./Viewport":24,"./ViewsManager":25,"eventemitter2":"eventemitter2","jquery":"jquery"}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = require('eventemitter2');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _page = require('page');

var _page2 = _interopRequireDefault(_page);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _data = require('./../data/data.json');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Router = function (_EventEmitter) {
	_inherits(Router, _EventEmitter);

	function Router() {
		_classCallCheck(this, Router);

		// ---o Set an unlimited numbers of listeners
		var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this, { wildcard: true }));

		_this.REQUEST_START = 'router:request_start';
		_this.REQUEST_END = 'router:request_end';
		_this.REQUEST_PENDING = 'router:request_pending';
		_this.setMaxListeners(0);
		return _this;
	}

	_createClass(Router, [{
		key: 'init',
		value: function init() {
			var _this2 = this;

			this.firstRequest = false;
			this.currentRoute = undefined;

			var routes = _data2.default._routes;
			var is404 = true;

			var _loop = function _loop(path) {

				var route = routes[path];

				(0, _page2.default)(ROOT_PATH + path, function (ctx) {

					is404 = false;

					if (typeof route !== 'string') {
						if (route.redirect) {
							(0, _page2.default)(route.redirect);
							return;
						}
					}

					_this2.prevRoute = _this2.currentRoute;

					_this2.currentRoute = {
						routePath: path,
						path: ctx.path,
						params: ctx.params,
						class: route
					};

					_this2.emit(_this2.REQUEST_START, _this2.currentRoute);

					if (_this2.firstRequest === true) {

						_this2.request(ctx.path);

						return;
					}

					_this2.firstRequest = true;

					_this2.emit(_this2.REQUEST_END);
				});
			};

			for (var path in routes) {
				_loop(path);
			};

			// 404 pages
			(0, _page2.default)('*', function (ctx) {
				_this2.currentRoute = {
					routePath: ctx.path,
					path: ctx.path,
					params: ctx.params,
					class: {
						class: 'p404',
						slug: 'p404'
					}
				};
				_this2.emit(_this2.REQUEST_START, _this2.currentRoute);

				if (_this2.firstRequest === true) {
					_this2.request(ctx.path);
					return;
				}

				_this2.firstRequest = true;
				_this2.emit(_this2.REQUEST_END);
			});

			(0, _page2.default)();
		}

		// --------------------------o Private

		// --------------------------o Public

	}, {
		key: 'request',
		value: function request(url) {
			var _this3 = this;

			_superagent2.default.get(url).set('X-Requested-With', 'XMLHttpRequest').end(function (err, response) {

				if (err !== null) {
					return;
				}

				_this3.emit(_this3.REQUEST_END, response);
			});
		}
	}, {
		key: 'pushURL',
		value: function pushURL(path) {

			window.history.pushState({ 'path': path }, '', path, '');
		}
	}, {
		key: 'replaceURL',
		value: function replaceURL(path) {

			window.history.replaceState({ 'path': path }, '', path, '');
		}
	}]);

	return Router;
}(_eventemitter2.default);

exports.default = new Router();

},{"./../data/data.json":26,"eventemitter2":"eventemitter2","jquery":"jquery","page":"page","superagent":"superagent"}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Events = require('./Events');

var _Viewport = require('./Viewport');

var _Viewport2 = _interopRequireDefault(_Viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SocialSharing = function () {
	function SocialSharing() {
		_classCallCheck(this, SocialSharing);

		this.$links = (0, _jquery2.default)('.social-link');

		this._initEvents();
	}

	// ------------------------------------------------------------o Private

	_createClass(SocialSharing, [{
		key: '_initEvents',
		value: function _initEvents() {

			(0, _jquery2.default)(document).on(_Events.MouseEvent.CLICK, '.social-link', this._onLinkClick.bind(this));
		}
	}, {
		key: '_onLinkClick',
		value: function _onLinkClick(e) {

			e.preventDefault();

			var $this = (0, _jquery2.default)(e.currentTarget);
			var type = $this.attr('data-type');
			var url = $this.attr('data-url');
			var sharedUrl = '';

			if (type === 'twitter') {
				var text = $this.attr('data-text');
				sharedUrl = 'https://twitter.com/intent/tweet?text=' + text + '&url=' + url + '&original_referer=' + url;
			} else if (type === 'facebook') {
				sharedUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url;
			} else if (type === 'google') {
				sharedUrl = 'hhttps://plus.google.com/share?url=' + url;
			} else if (type === 'pinterest') {
				var media = $this.attr('data-media');
				sharedUrl = 'https://www.pinterest.com/pin/create/button/?media=' + media + '&url=' + url;
			}

			var width = 800;
			var height = 500;

			var leftPosition = _Viewport2.default.width / 2 - (width / 2 + 10);
			var topPosition = _Viewport2.default.height / 2 - (height / 2 + 50);

			var options = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";

			window.open(sharedUrl, '', options);
		}
	}]);

	return SocialSharing;
}();

exports.default = new SocialSharing();

},{"./Events":16,"./Viewport":24,"jquery":"jquery"}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextUtils = function () {
	function TextUtils() {
		_classCallCheck(this, TextUtils);
	}

	_createClass(TextUtils, [{
		key: 'handleize',
		value: function handleize(str) {

			str = str.toLowerCase();

			// ---o Replace accents
			var diacritics = [/[\300-\306]/g, /[\340-\346]/g, // A, a
			/[\310-\313]/g, /[\350-\353]/g, // E, e
			/[\314-\317]/g, /[\354-\357]/g, // I, i
			/[\322-\330]/g, /[\362-\370]/g, // O, o
			/[\331-\334]/g, /[\371-\374]/g, // U, u
			/[\321]/g, /[\361]/g, // N, n
			/[\307]/g, /[\347]/g];

			var chars = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u', 'N', 'n', 'C', 'c'];

			for (var i = 0; i < diacritics.length; i++) {
				str = str.replace(diacritics[i], chars[i]);
			}

			var toReplace = ['"', "'", "\\", "(", ")", "[", "]"];

			// For the old browsers
			for (var i = 0; i < toReplace.length; ++i) {
				str = str.replace(toReplace[i], "-");
			}

			str = str.replace(/\W+/, "-");

			if (str.charAt(str.length - 1) == "-") {
				str = str.replace(/-+\z/, "");
			}

			if (str.charAt(0) == "-") {
				str = str.replace(/\A-+/, "");
			}

			return str;
		}
	}, {
		key: 'lowercaseFirstLetter',
		value: function lowercaseFirstLetter(str) {

			return str.charAt(0).toLowerCase() + str.slice(1);
		}
	}, {
		key: 'pascalize',
		value: function pascalize(str) {
			return str.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
				return g1.toUpperCase() + g2.toLowerCase();
			});
		}
	}, {
		key: 'camelize',
		value: function camelize(str) {
			return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
				return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
			}).replace(/\s+/g, '');
		}
	}]);

	return TextUtils;
}();

exports.default = new TextUtils();

},{}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = require('eventemitter2');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _Ease = require('./Ease');

var _Ease2 = _interopRequireDefault(_Ease);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tween = function (_EventEmitter) {
	_inherits(Tween, _EventEmitter);

	function Tween() {
		_classCallCheck(this, Tween);

		var _this = _possibleConstructorReturn(this, (Tween.__proto__ || Object.getPrototypeOf(Tween)).call(this, { wildcard: true }));

		_this.tweens = [];

		return _this;
	}

	// ------------------------------------------------------------o Private

	_createClass(Tween, [{
		key: '_onUpdate',
		value: function _onUpdate() {

			var currentTime = +new Date();
			var inc = 0;

			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = this.tweens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var tween = _step.value;


					tween.currentTime = currentTime - tween.startTime - tween.delay;

					if (tween.currentTime > 0) {

						for (var key in tween.data) {

							var data = tween.data[key];
							var elapsed = tween.currentTime / tween.duration;

							tween.output[key] = data.startValue - (data.startValue - data.endValue) * (_Ease2.default[tween.ease] || _Ease2.default.linear)(elapsed);
						}

						if (tween.currentTime < tween.duration && typeof tween.onProgress == 'function') {
							tween.onProgress.call(this, tween.output);
						} else if (tween.currentTime >= tween.duration && typeof tween.onComplete == 'function') {

							for (var _key in tween.data) {

								var _data = tween.data[_key];
								tween.output[_key] = _data.endValue;
							}
							tween.onComplete.call(this, tween.output);
						}

						if (tween.currentTime >= tween.duration) {
							this.tweens.splice(inc, 1);
						}
					}

					inc++;
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			if (this.tweens.length > 0) {
				this.rAF = requestAnimationFrame(this._onUpdate.bind(this));
			}
		}

		// ------------------------------------------------------------o Public

	}, {
		key: 'to',
		value: function to(data, options) {

			var ntween = {};
			ntween.startTime = +new Date();
			ntween.currentTime = 0;
			ntween.delay = options.delay || 0;
			ntween.duration = options.duration;
			ntween.ease = options.ease;
			ntween.easedProgress = 0;
			ntween.onProgress = options.onProgress;
			ntween.onComplete = options.onComplete;

			ntween.data = [];
			ntween.output = [];

			for (var value in data) {

				if (['duration', 'ease', 'delay'].indexOf(value) > -1) {
					console.log('%c Tweeeeeeen: Cannot animate the \'' + value + '\' property ', 'background: #ffbbbb; color: #ff1414;');
					break;
				}

				if (data[value] !== undefined && options[value] !== undefined) {
					ntween.data[value] = {
						startValue: data[value],
						endValue: options[value]
					};

					ntween.output[value] = data[value];
				}
			}

			// ---o Start rAF if not

			if (this.tweens.length === 0) {
				this.rAF = requestAnimationFrame(this._onUpdate.bind(this));
			}

			this.tweens.push(ntween);
		}

		// ---o To do

	}, {
		key: 'from',
		value: function from() {}
	}]);

	return Tween;
}(_eventemitter2.default);

exports.default = new Tween();

},{"./Ease":15,"eventemitter2":"eventemitter2","raf":"raf"}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = require('eventemitter2');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Events = require('./Events');

var _Tween = require('./Tween');

var _Tween2 = _interopRequireDefault(_Tween);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Viewport = function (_EventEmitter) {
	_inherits(Viewport, _EventEmitter);

	function Viewport() {
		_classCallCheck(this, Viewport);

		// ---o Set an unlimited numbers of listeners
		var _this = _possibleConstructorReturn(this, (Viewport.__proto__ || Object.getPrototypeOf(Viewport)).call(this, { wildcard: true }));

		_this.setMaxListeners(0);

		_this.$window = (0, _jquery2.default)(window);
		_this.$body = (0, _jquery2.default)('body');
		_this.$document = (0, _jquery2.default)(document);

		_this.width = _this.$window.width();
		_this.height = _this.$window.height();
		_this.screenWidth = screen.width;
		_this.screenHeight = screen.height;

		_this.tabLeft = false;
		_this.isBodyFixed = false;
		_this.savedScroll = 0;

		_this.scrollTop = {};
		_this.scrollTop.current = 0;
		_this.scrollTop.perc = 0;
		_this.scrollTop.max = 1;

		_this._initContent();
		_this._initEvents();

		return _this;
	}

	// ------------------------------------------------------------o Private

	_createClass(Viewport, [{
		key: '_initContent',
		value: function _initContent() {

			this._onResize();
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			this.$window.on('load resize', this._onResize.bind(this)).on('blur', this._onWindowBlur.bind(this)).on('focus', this._onWindowFocus.bind(this)).on('scroll', this._onWindowFocus.bind(this));

			//this.$document[0].addEventListener('scroll', this._onScroll.bind(this), { passive: true });

			(0, _jquery2.default)(document).on('wheel scroll', this._onScroll.bind(this));
		}
	}, {
		key: '_checkResponsive',
		value: function _checkResponsive() {

			var responsiveState = window.getComputedStyle(this.$body[0], ':before').getPropertyValue('content').replace(/"/g, '');

			if (!this.responsiveState || responsiveState !== this.responsiveState) {
				this.responsiveState = responsiveState;
				this.emit(_Events.Event.RESPONSIVE_CHANGE + '.*', responsiveState);
			}
		}

		// ------------------------------------------------------------o Listeners

	}, {
		key: '_onResize',
		value: function _onResize() {

			this._checkResponsive();

			this.width = this.$window[0].innerWidth;
			this.height = this.$window[0].innerHeight;
			this.screenWidth = screen.width;
			this.screenHeight = screen.height;
			this.scrollHeight = this.$body.height() - this.height;

			this.updateScroll();

			this.emit(_Events.Event.RESIZE + '.*');
		}
	}, {
		key: '_onWindowBlur',
		value: function _onWindowBlur() {

			this.tabLeft = true;

			this.emit(_Events.Tab.LEAVE + '.*');
		}
	}, {
		key: '_onWindowFocus',
		value: function _onWindowFocus() {

			this.tabLeft = false;

			this.emit(_Events.Tab.ENTER + '.*');
		}
	}, {
		key: '_onScroll',
		value: function _onScroll() {

			this.scrollTop.current = this.$window.scrollTop();
			this.scrollTop.perc = this.scrollTop.current / this.scrollTop.max;

			if (Math.abs(this.scrollTop.perc - ~~this.scrollTop.perc) < 0.001) {
				this.scrollTop.perc = ~~this.scrollTop.perc;
			}

			this.emit(_Events.Event.SCROLL + '.*', this.scrollTop);
		}
	}, {
		key: '_onUpdate',
		value: function _onUpdate() {

			this.emit(_Events.Event.TICK + '.*');
		}

		// ------------------------------------------------------------o Public

	}, {
		key: 'fixBody',
		value: function fixBody() {

			if (this.isBodyFixed === true) {
				return;
			}

			this.savedScroll = this.$window.scrollTop();
			this.isBodyFixed = true;
			this.$body.addClass('fixed').css('top', -this.savedScroll);
		}
	}, {
		key: 'unfixBody',
		value: function unfixBody() {

			if (this.isBodyFixed === false) {
				return;
			}

			this.isBodyFixed = false;
			this.$body.removeClass('fixed');

			this.$body.css('top', 0);
			this.$window.scrollTop(this.savedScroll);
		}
	}, {
		key: 'resize',
		value: function resize() {

			this._onResize();
		}
	}, {
		key: 'updateScroll',
		value: function updateScroll() {

			this.scrollTop.max = this.$body.height() - this.height;
		}
	}, {
		key: 'scrollTo',
		value: function scrollTo(val, fast) {
			var _this2 = this;

			if (val === this.scrollTop.current) {
				return;
			}

			if (fast === true) {
				this.$document.scrollTop(val);
				return;
			}

			var scroll = {
				val: this.scrollTop.current
			};

			var pxDiff = scroll.val - val;
			var absPxDiff = Math.abs(pxDiff);

			if (absPxDiff > this.height) {
				if (pxDiff < 0) {
					scroll.val = val - this.height;
				} else {
					scroll.val = val + this.height;
				}
			}

			var time = Math.abs(scroll.val - val) / 750;

			var scrollTop = { value: this.scrollTop.current };

			_Tween2.default.to(scrollTop, {
				value: val,
				duration: 1000,
				ease: 'quintOut',
				onProgress: function onProgress(data) {
					_this2.$window.scrollTop(data.value);
				},
				onComplete: function onComplete(data) {
					_this2.$window.scrollTop(data.value);
				}
			});

			/*TweenLite.to(scroll, time, {val: val, ease: Power4.easeOut, onUpdate: () => {
   	this.$document.scrollTop(scroll.val);
   }});*/
		}
	}]);

	return Viewport;
}(_eventemitter2.default);

exports.default = new Viewport();

},{"./Events":16,"./Tween":23,"eventemitter2":"eventemitter2","jquery":"jquery"}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _eventemitter = require('eventemitter2');

var _eventemitter2 = _interopRequireDefault(_eventemitter);

var _Router = require('./Router');

var _Router2 = _interopRequireDefault(_Router);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

var _Viewport = require('./Viewport');

var _Viewport2 = _interopRequireDefault(_Viewport);

var _TextUtils = require('./TextUtils');

var _TextUtils2 = _interopRequireDefault(_TextUtils);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _data = require('./../data/data.json');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
	Create new object only for template data
*/

var ViewsManager = function (_EventEmitter) {
	_inherits(ViewsManager, _EventEmitter);

	function ViewsManager() {
		_classCallCheck(this, ViewsManager);

		// ---o Set an unlimited numbers of listeners
		var _this = _possibleConstructorReturn(this, (ViewsManager.__proto__ || Object.getPrototypeOf(ViewsManager)).call(this, { wildcard: true }));

		_this.REQUEST_START = 'router:request_start';
		_this.REQUEST_END = 'router:request_end';
		_this.setMaxListeners(0);

		return _this;
	}

	_createClass(ViewsManager, [{
		key: 'init',
		value: function init(pages) {

			this.pages = pages;

			this.currentClass = undefined;
			this.prevClass = undefined;

			this.isPageFixed = false;

			this.pageContainer = (0, _jquery2.default)('.page-container');

			this._initEvents();
		}

		// --------------------------------------------------------------o Private

	}, {
		key: '_initEvents',
		value: function _initEvents() {

			_Router2.default.on(_Router2.default.REQUEST_START, this._onRouterStart.bind(this)).on(_Router2.default.REQUEST_END, this._onRouterEnd.bind(this));
		}

		// --------------------------------------------------------------o Listeners

	}, {
		key: '_onRouterStart',
		value: function _onRouterStart(res) {

			var pageSlug = res.class.view || res.class.slug;

			if (this.currentClass && pageSlug === this.currentClass.slug) {
				if (this.currentClass.shouldStayOnSamePage(res) === true) {
					this.emit(this.REQUEST_START + '.*', res);
					this.samePage = true;
					return;
				}
			}

			// ---o Handle last page
			var prevSlug = undefined;
			if (this.currentClass !== undefined) {
				this.prevClass = this.currentClass;
				prevSlug = this.prevClass.slug;
			}

			// ---o Handle new page
			var page = this.pages[pageSlug];

			this.currentClass = new page.class(pageSlug, prevSlug);

			// ---o Exit prev class
			if (this.prevClass) {
				this.prevClass.once(this.prevClass.EXITED, this._onPageExited.bind(this));
				this.prevClass.exit();
			}

			this.emit(this.REQUEST_START + '.*');
		}
	}, {
		key: '_onRouterEnd',
		value: function _onRouterEnd(response) {

			if (this.samePage === true) {
				this.samePage = false;
				return;
			}

			if (_Router2.default.currentRoute.class === undefined) {
				throw 'Error: Class doesn\'t exist. Please create one or check the URL.';
				return;
			}

			if (response) {
				var template = (0, _jquery2.default)(response.text).filter('.page-container').html();

				this.currentClass.loaded = true;
				this.currentClass.enter(template);
				document.title = (0, _jquery2.default)(response.text).filter('title').text();
				_Viewport2.default.scrollTo(0, true);

				this.emit(this.REQUEST_END + '.*');
			} else {
				this.currentClass.loaded = true;
				this.currentClass.enter();
			}
		}
	}, {
		key: '_onPagePreEntered',
		value: function _onPagePreEntered() {}
	}, {
		key: '_onPageEntered',
		value: function _onPageEntered() {}
	}, {
		key: '_onPageExited',
		value: function _onPageExited() {

			//this.currentClass.enter();

		}
	}]);

	return ViewsManager;
}(_eventemitter2.default);

exports.default = new ViewsManager();

},{"./../data/data.json":26,"./Page":19,"./Router":20,"./TextUtils":22,"./Viewport":24,"eventemitter2":"eventemitter2","jquery":"jquery"}],26:[function(require,module,exports){
module.exports={"analyticsId":"ua-","_routes":{"/":{"slug":"homepage"},"/agence-communication-digitale":{"slug":"agency"},"/talents":{"slug":"talents"},"/blog-creation-digitale":{"slug":"perspectives"},"/blog-creation-digitale/page/:pageNumber":{"slug":"perspectives"},"/contact":{"slug":"contact"},"/communiques-de-presse":{"slug":"press"},"/references/*":{"slug":"case-study","postType":"case-studies"},"/articles/*":{"slug":"article","postType":"articles"},"/jobs/*":{"slug":"job","postType":"jobs"},"/mentions-legales":{"slug":"legals","postType":"legals","view":"simple-page"},"/conditions-generales-de-vente":{"slug":"terms","postType":"terms","view":"simple-page"}}}
},{}],27:[function(require,module,exports){
'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Keyboard = require('./core/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _Cookies = require('./core/Cookies');

var _Cookies2 = _interopRequireDefault(_Cookies);

var _Viewport = require('./core/Viewport');

var _Viewport2 = _interopRequireDefault(_Viewport);

var _ViewsManager = require('./core/ViewsManager');

var _ViewsManager2 = _interopRequireDefault(_ViewsManager);

var _Router = require('./core/Router');

var _Router2 = _interopRequireDefault(_Router);

var _data = require('./data/data.json');

var _data2 = _interopRequireDefault(_data);

var _SocialSharing = require('./core/SocialSharing');

var _SocialSharing2 = _interopRequireDefault(_SocialSharing);

var _MainHeader = require('./components/MainHeader');

var _MainHeader2 = _interopRequireDefault(_MainHeader);

var _MainFooter = require('./components/MainFooter');

var _MainFooter2 = _interopRequireDefault(_MainFooter);

var _ButtonBackToTop = require('./components/ButtonBackToTop');

var _ButtonBackToTop2 = _interopRequireDefault(_ButtonBackToTop);

var _CookieBand = require('./components/CookieBand');

var _CookieBand2 = _interopRequireDefault(_CookieBand);

var _PopinInscription = require('./components/PopinInscription');

var _PopinInscription2 = _interopRequireDefault(_PopinInscription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import views


// ---o Init the rest of the core


// ---o Init keyboard events
var requiredPages = {'agency/index': require('./pages/agency/index.js'),'article/index': require('./pages/article/index.js'),'case-study/index': require('./pages/case-study/index.js'),'contact/index': require('./pages/contact/index.js'),'homepage/index': require('./pages/homepage/index.js'),'job/index': require('./pages/job/index.js'),'legals/index': require('./pages/legals/index.js'),'p404/index': require('./pages/p404/index.js'),'perspectives/index': require('./pages/perspectives/index.js'),'press/index': require('./pages/press/index.js'),'simple-page/index': require('./pages/simple-page/index.js'),'simplePage/index': require('./pages/simplePage/index.js'),'talents/index': require('./pages/talents/index.js'),'terms/index': require('./pages/terms/index.js')};

// ---o Import main elements 


// ---o Init cookies
// ---o Core


var pages = {};
for (var key in requiredPages) {
	var page = requiredPages[key].default;
	var pageName = key.split('/')[0];

	// When only one template created
	if (pageName === 'index') {
		pageName = 'homepage';
	}

	pages[pageName] = {
		class: page,
		data: _data2.default[pageName]
	};
}

// ---o Order init for cycling thing
_ViewsManager2.default.init(pages);
_Router2.default.init();
_ButtonBackToTop2.default.init();
_CookieBand2.default.init();
_MainHeader2.default.init();
_MainFooter2.default.init();
_PopinInscription2.default.init();

},{"./components/ButtonBackToTop":2,"./components/CookieBand":4,"./components/MainFooter":8,"./components/MainHeader":9,"./components/PopinInscription":11,"./core/Cookies":14,"./core/Keyboard":18,"./core/Router":20,"./core/SocialSharing":21,"./core/Viewport":24,"./core/ViewsManager":25,"./data/data.json":26,"./pages/agency/index.js":29,"./pages/article/index.js":30,"./pages/case-study/index.js":31,"./pages/contact/index.js":32,"./pages/homepage/index.js":33,"./pages/job/index.js":34,"./pages/legals/index.js":35,"./pages/p404/index.js":36,"./pages/perspectives/index.js":37,"./pages/press/index.js":38,"./pages/simple-page/index.js":39,"./pages/simplePage/index.js":40,"./pages/talents/index.js":41,"./pages/terms/index.js":42,"jquery":"jquery"}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Page2 = require('./../core/Page');

var _Page3 = _interopRequireDefault(_Page2);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _HeroPicture = require('./../components/HeroPicture');

var _HeroPicture2 = _interopRequireDefault(_HeroPicture);

var _Slider = require('./../components/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _GridGallery = require('./../components/GridGallery');

var _GridGallery2 = _interopRequireDefault(_GridGallery);

var _Gallery = require('./../components/Gallery');

var _Gallery2 = _interopRequireDefault(_Gallery);

var _Popin = require('./../components/Popin');

var _Popin2 = _interopRequireDefault(_Popin);

var _Accordion = require('./../components/Accordion');

var _Accordion2 = _interopRequireDefault(_Accordion);

var _Carousel = require('./../components/Carousel');

var _Carousel2 = _interopRequireDefault(_Carousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import components


var MalabarPage = function (_Page) {
	_inherits(MalabarPage, _Page);

	function MalabarPage() {
		_classCallCheck(this, MalabarPage);

		return _possibleConstructorReturn(this, (MalabarPage.__proto__ || Object.getPrototypeOf(MalabarPage)).apply(this, arguments));
	}

	_createClass(MalabarPage, [{
		key: '_initContent',


		// --------------------------------------------------------------o Private

		value: function _initContent() {

			_get(MalabarPage.prototype.__proto__ || Object.getPrototypeOf(MalabarPage.prototype), '_initContent', this).call(this);

			this._initHeroPictures();
			this._initSliders();
			this._initGridGalleries();
			this._initGalleries();
			this._initPopins();
			this._initAccordions();
			this._initCarousels();
			this._loadPictures();
		}
	}, {
		key: '_loadPictures',
		value: function _loadPictures() {

			(0, _jquery2.default)('img[data-src]').each(function (key, img) {
				img.src = img.getAttribute('data-src');
				img.removeAttribute('data-src');
			});
		}

		// --------------------------------------------------------------o Components

	}, {
		key: '_initHeroPictures',
		value: function _initHeroPictures() {
			var _this2 = this;

			var heroPictures = this.$container.find('.hero-picture');
			if (heroPictures.length) {
				this.heroPictures = [];
				heroPictures.each(function (key) {
					_this2.heroPictures.push(new _HeroPicture2.default(heroPictures.eq(key)));
				});
			}
		}
	}, {
		key: '_initSliders',
		value: function _initSliders() {
			var _this3 = this;

			var sliders = this.$container.find('.slider');
			if (sliders.length) {
				this.sliders = [];
				sliders.each(function (key) {
					_this3.sliders.push(new _Slider2.default(sliders.eq(key)));
				});
			}
		}
	}, {
		key: '_initGridGalleries',
		value: function _initGridGalleries() {
			var _this4 = this;

			var gridGalleries = this.$container.find('.grid-gallery');
			if (gridGalleries.length) {
				this.gridGalleries = [];
				gridGalleries.each(function (key) {
					_this4.gridGalleries.push(new _GridGallery2.default(gridGalleries.eq(key)));
				});
			}
		}
	}, {
		key: '_initGalleries',
		value: function _initGalleries() {
			var _this5 = this;

			var galleries = this.$container.find('.gallery');
			if (galleries.length) {
				this.galleries = [];
				galleries.each(function (key) {
					_this5.galleries.push(new _Gallery2.default(galleries.eq(key)));
				});
			}
		}
	}, {
		key: '_initPopins',
		value: function _initPopins() {
			var _this6 = this;

			var popins = this.$container.find('.popin');
			if (popins.length) {
				this.popins = [];
				popins.each(function (key) {
					_this6.popins.push(new _Popin2.default(popins.eq(key)));
				});
			}
		}
	}, {
		key: '_initAccordions',
		value: function _initAccordions() {
			var _this7 = this;

			var accordions = this.$container.find('.accordion');
			if (accordions.length) {
				this.accordions = [];
				accordions.each(function (key) {
					_this7.accordions.push(new _Accordion2.default(accordions.eq(key)));
				});
			}
		}
	}, {
		key: '_initCarousels',
		value: function _initCarousels() {
			var _this8 = this;

			var carousels = this.$container.find('.carousel');
			if (carousels.length) {
				this.carousels = [];
				carousels.each(function (key) {
					_this8.carousels.push(new _Carousel2.default(carousels.eq(key)));
				});
			}
		}

		// --------------------------------------------------------------o Listeners


	}]);

	return MalabarPage;
}(_Page3.default);

exports.default = MalabarPage;

},{"./../components/Accordion":1,"./../components/Carousel":3,"./../components/Gallery":5,"./../components/GridGallery":6,"./../components/HeroPicture":7,"./../components/Popin":10,"./../components/Slider":12,"./../core/Page":19,"jquery":"jquery"}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _MalabarPage2 = require('./../../lib/MalabarPage');

var _MalabarPage3 = _interopRequireDefault(_MalabarPage2);

var _Events = require('./../../core/Events');

var _Slider = require('./../../components/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _MainHeader = require('./../../components/MainHeader');

var _MainHeader2 = _interopRequireDefault(_MainHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Agency = function (_MalabarPage) {
	_inherits(Agency, _MalabarPage);

	function Agency() {
		_classCallCheck(this, Agency);

		return _possibleConstructorReturn(this, (Agency.__proto__ || Object.getPrototypeOf(Agency)).apply(this, arguments));
	}

	_createClass(Agency, [{
		key: '_initContent',


		// --------------------------------------------------------------o Private
		value: function _initContent() {

			_get(Agency.prototype.__proto__ || Object.getPrototypeOf(Agency.prototype), '_initContent', this).call(this);

			this.$breadcrumb = this.$container.find('.breadcrumb');
			this.$breadcrumbItems = this.$breadcrumb.find('li');

			// ---o Init breadcrumb
			this.slider = this.sliders[0];
			this.$breadcrumbItems.eq(this.slider.currentIndex).addClass('active');

			this.$bottomButton = this.$container.find('.button-bottom');
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			_get(Agency.prototype.__proto__ || Object.getPrototypeOf(Agency.prototype), '_initEvents', this).call(this);

			this.$breadcrumbItems.on(_Events.MouseEvent.CLICK, this._onBreadcrumbItemClick.bind(this));

			this.slider.on(_Slider2.default.CHANGE + '.agency', this._onSliderChange.bind(this));

			this.$bottomButton.on(_Events.MouseEvent.CLICK, this._onBottomButtonClick);
		}

		// --------------------------------------------------------------o Listeners

	}, {
		key: '_onBreadcrumbItemClick',
		value: function _onBreadcrumbItemClick() {}
	}, {
		key: '_onSliderChange',
		value: function _onSliderChange() {

			this.$breadcrumbItems.filter('.active').removeClass('active');
			this.$breadcrumbItems.eq(this.slider.currentIndex).addClass('active');
		}
	}, {
		key: '_onBottomButtonClick',
		value: function _onBottomButtonClick() {

			_MainHeader2.default.openWorks();
		}

		// --------------------------------------------------------------o Public

	}]);

	return Agency;
}(_MalabarPage3.default);

exports.default = Agency;

},{"./../../components/MainHeader":9,"./../../components/Slider":12,"./../../core/Events":16,"./../../lib/MalabarPage":28}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MalabarPage2 = require('./../../lib/MalabarPage');

var _MalabarPage3 = _interopRequireDefault(_MalabarPage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Article = function (_MalabarPage) {
	_inherits(Article, _MalabarPage);

	function Article() {
		_classCallCheck(this, Article);

		return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));
	}

	return Article;
}(_MalabarPage3.default);

exports.default = Article;

},{"./../../lib/MalabarPage":28}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _MalabarPage2 = require('./../../lib/MalabarPage');

var _MalabarPage3 = _interopRequireDefault(_MalabarPage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CaseStudy = function (_MalabarPage) {
	_inherits(CaseStudy, _MalabarPage);

	function CaseStudy() {
		_classCallCheck(this, CaseStudy);

		return _possibleConstructorReturn(this, (CaseStudy.__proto__ || Object.getPrototypeOf(CaseStudy)).apply(this, arguments));
	}

	_createClass(CaseStudy, [{
		key: '_initContent',


		// --------------------------------------------------------------o Private

		value: function _initContent() {

			_get(CaseStudy.prototype.__proto__ || Object.getPrototypeOf(CaseStudy.prototype), '_initContent', this).call(this);

			console.log('ok');
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			_get(CaseStudy.prototype.__proto__ || Object.getPrototypeOf(CaseStudy.prototype), '_initEvents', this).call(this);
		}

		// --------------------------------------------------------------o Listeners


		// --------------------------------------------------------------o Public

	}]);

	return CaseStudy;
}(_MalabarPage3.default);

exports.default = CaseStudy;

},{"./../../lib/MalabarPage":28}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MalabarPage2 = require('./../../lib/MalabarPage');

var _MalabarPage3 = _interopRequireDefault(_MalabarPage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_MalabarPage) {
	_inherits(Contact, _MalabarPage);

	function Contact() {
		_classCallCheck(this, Contact);

		return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
	}

	return Contact;
}(_MalabarPage3.default);

exports.default = Contact;

},{"./../../lib/MalabarPage":28}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _raf = require('raf');

var _raf2 = _interopRequireDefault(_raf);

var _MalabarPage2 = require('./../../lib/MalabarPage');

var _MalabarPage3 = _interopRequireDefault(_MalabarPage2);

var _Viewport = require('./../../core/Viewport');

var _Viewport2 = _interopRequireDefault(_Viewport);

var _Events = require('./../../core/Events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Homepage = function (_MalabarPage) {
	_inherits(Homepage, _MalabarPage);

	function Homepage() {
		_classCallCheck(this, Homepage);

		return _possibleConstructorReturn(this, (Homepage.__proto__ || Object.getPrototypeOf(Homepage)).apply(this, arguments));
	}

	_createClass(Homepage, [{
		key: '_initContent',


		// --------------------------------------------------------------o Private

		value: function _initContent() {

			_get(Homepage.prototype.__proto__ || Object.getPrototypeOf(Homepage.prototype), '_initContent', this).call(this);

			this._scrollTop = {
				current: 0,
				destination: 0,
				prev: 0
			};

			this._initShapes();
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			_get(Homepage.prototype.__proto__ || Object.getPrototypeOf(Homepage.prototype), '_initEvents', this).call(this);

			_Viewport2.default.on(_Events.Event.SCROLL + '.heroPicture', this._onScroll.bind(this));
		}
	}, {
		key: '_initShapes',
		value: function _initShapes() {

			var types = ['circle', 'triangle', 'band'];

			this.$shapesContainer = this.$container.find('.shapes-container');
			this.shapes = [];
			var shapesContainerWidth = this.$shapesContainer.width();
			var shapesContainerHeight = this.$shapesContainer.height();
			var shapesNumber = 10;

			for (var i = 0; i < shapesNumber; i++) {
				var type = types[~~(Math.random() * types.length)];
				var $shape = (0, _jquery2.default)('<div class="' + type + '"><span></span></div>');
				var $innerShape = $shape.find('span');
				var width = 20;
				var height = 20;

				if (type === 'band') {
					width = ~~(20 + Math.random() * 20);
					height = ~~(5 + Math.random() * 10);
					$innerShape.css('transform', 'rotate(' + ~~(Math.random() * 360) + 'deg)');
				} else if (type === 'circle') {
					width = ~~(10 + Math.random() * 30);
					height = width;
				} else if (type === 'triangle') {
					width = 0;
					height = 0;
					var size = ~~(10 + Math.random() * 20);
					$innerShape.css({
						'border-left': size + 'px solid transparent',
						'border-right': size + 'px solid transparent',
						'border-bottom-width': size + 'px',
						'transform': 'rotate(' + ~~(Math.random() * 360) + 'deg)'
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
	}, {
		key: '_updateShapesPosition',
		value: function _updateShapesPosition() {
			var _this2 = this;

			this._scrollTop.current += (this._scrollTop.destination - this._scrollTop.current) * 0.1;

			if (this._scrollTop.current === this._scrollTop.destination) {
				return;
			}

			if (Math.abs(this._scrollTop.destination - this._scrollTop.current) < 0.1) {
				this._scrollTop.current = this._scrollTop.destination;
			}

			_jquery2.default.each(this.shapes, function (key, shape) {
				var position = _this2._scrollTop.current / _Viewport2.default.scrollHeight * shape.speed * 100;
				shape.item.css('transform', 'translate3d(0, ' + position + 'px, 0)');
			});

			(0, _raf2.default)(this._updateShapesPosition.bind(this));
		}

		// --------------------------------------------------------------o Listeners

	}, {
		key: '_onScroll',
		value: function _onScroll(scrollTop) {

			this._scrollTop.destination = scrollTop.current;

			this._updateShapesPosition();
		}

		// --------------------------------------------------------------o Public

	}, {
		key: '_onResize',
		value: function _onResize() {}
	}, {
		key: '_onUpdate',
		value: function _onUpdate() {}
	}]);

	return Homepage;
}(_MalabarPage3.default);

exports.default = Homepage;

},{"./../../core/Events":16,"./../../core/Viewport":24,"./../../lib/MalabarPage":28,"jquery":"jquery","raf":"raf"}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MalabarPage2 = require('./../../lib/MalabarPage');

var _MalabarPage3 = _interopRequireDefault(_MalabarPage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Job = function (_MalabarPage) {
	_inherits(Job, _MalabarPage);

	function Job() {
		_classCallCheck(this, Job);

		return _possibleConstructorReturn(this, (Job.__proto__ || Object.getPrototypeOf(Job)).apply(this, arguments));
	}

	return Job;
}(_MalabarPage3.default);

exports.default = Job;

},{"./../../lib/MalabarPage":28}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MalabarPage2 = require('./../../lib/MalabarPage');

var _MalabarPage3 = _interopRequireDefault(_MalabarPage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var legals = function (_MalabarPage) {
	_inherits(legals, _MalabarPage);

	function legals() {
		_classCallCheck(this, legals);

		return _possibleConstructorReturn(this, (legals.__proto__ || Object.getPrototypeOf(legals)).apply(this, arguments));
	}

	return legals;
}(_MalabarPage3.default);

exports.default = legals;

},{"./../../lib/MalabarPage":28}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MalabarPage2 = require('./../../lib/MalabarPage');

var _MalabarPage3 = _interopRequireDefault(_MalabarPage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var p404 = function (_MalabarPage) {
	_inherits(p404, _MalabarPage);

	function p404() {
		_classCallCheck(this, p404);

		return _possibleConstructorReturn(this, (p404.__proto__ || Object.getPrototypeOf(p404)).apply(this, arguments));
	}

	return p404;
}(_MalabarPage3.default);

exports.default = p404;

},{"./../../lib/MalabarPage":28}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _MalabarPage2 = require('./../../lib/MalabarPage');

var _MalabarPage3 = _interopRequireDefault(_MalabarPage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Perspectives = function (_MalabarPage) {
	_inherits(Perspectives, _MalabarPage);

	function Perspectives() {
		_classCallCheck(this, Perspectives);

		return _possibleConstructorReturn(this, (Perspectives.__proto__ || Object.getPrototypeOf(Perspectives)).apply(this, arguments));
	}

	_createClass(Perspectives, [{
		key: '_render',


		// --------------------------------------------------------------o Private

		value: function _render() {
			_get(Perspectives.prototype.__proto__ || Object.getPrototypeOf(Perspectives.prototype), '_render', this).call(this);

			console.log(this.$container);
		}

		// --------------------------------------------------------------o Listeners


		// --------------------------------------------------------------o Public

	}]);

	return Perspectives;
}(_MalabarPage3.default);

exports.default = Perspectives;

},{"./../../lib/MalabarPage":28}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MalabarPage2 = require('./../../lib/MalabarPage');

var _MalabarPage3 = _interopRequireDefault(_MalabarPage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var press = function (_MalabarPage) {
	_inherits(press, _MalabarPage);

	function press() {
		_classCallCheck(this, press);

		return _possibleConstructorReturn(this, (press.__proto__ || Object.getPrototypeOf(press)).apply(this, arguments));
	}

	return press;
}(_MalabarPage3.default);

exports.default = press;

},{"./../../lib/MalabarPage":28}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MalabarPage2 = require('./../../lib/MalabarPage');

var _MalabarPage3 = _interopRequireDefault(_MalabarPage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimplePage = function (_MalabarPage) {
	_inherits(SimplePage, _MalabarPage);

	function SimplePage() {
		_classCallCheck(this, SimplePage);

		return _possibleConstructorReturn(this, (SimplePage.__proto__ || Object.getPrototypeOf(SimplePage)).apply(this, arguments));
	}

	return SimplePage;
}(_MalabarPage3.default);

exports.default = SimplePage;

},{"./../../lib/MalabarPage":28}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MalabarPage2 = require('./../../lib/MalabarPage');

var _MalabarPage3 = _interopRequireDefault(_MalabarPage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var simplePage = function (_MalabarPage) {
	_inherits(simplePage, _MalabarPage);

	function simplePage() {
		_classCallCheck(this, simplePage);

		return _possibleConstructorReturn(this, (simplePage.__proto__ || Object.getPrototypeOf(simplePage)).apply(this, arguments));
	}

	return simplePage;
}(_MalabarPage3.default);

exports.default = simplePage;

},{"./../../lib/MalabarPage":28}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MalabarPage2 = require('./../../lib/MalabarPage');

var _MalabarPage3 = _interopRequireDefault(_MalabarPage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Talents = function (_MalabarPage) {
	_inherits(Talents, _MalabarPage);

	function Talents() {
		_classCallCheck(this, Talents);

		return _possibleConstructorReturn(this, (Talents.__proto__ || Object.getPrototypeOf(Talents)).apply(this, arguments));
	}

	return Talents;
}(_MalabarPage3.default);

exports.default = Talents;

},{"./../../lib/MalabarPage":28}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MalabarPage2 = require('./../../lib/MalabarPage');

var _MalabarPage3 = _interopRequireDefault(_MalabarPage2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Terms = function (_MalabarPage) {
	_inherits(Terms, _MalabarPage);

	function Terms() {
		_classCallCheck(this, Terms);

		return _possibleConstructorReturn(this, (Terms.__proto__ || Object.getPrototypeOf(Terms)).apply(this, arguments));
	}

	return Terms;
}(_MalabarPage3.default);

exports.default = Terms;

},{"./../../lib/MalabarPage":28}]},{},[27])

//# sourceMappingURL=maps/scripts.js.map
