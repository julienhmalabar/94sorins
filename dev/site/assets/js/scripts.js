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

},{"./../../core/Component":8,"./../../core/Events":10,"jquery":"jquery"}],2:[function(require,module,exports){
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

},{"./../../core/Component":8}],3:[function(require,module,exports){
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

},{"./../../core/Component":8}],4:[function(require,module,exports){
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

			this.$backgroundPicture = this.$container.find('img');
			this.$content = this.$container.find('figcaption');
			this.$scrollButton = this.$container.find('.scroll-button');

			this._isBackgroundPictureLoaded = false;
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			_get(HeroPicture.prototype.__proto__ || Object.getPrototypeOf(HeroPicture.prototype), '_initEvents', this).call(this);

			_Viewport2.default.on(_Events.Event.SCROLL + '.heroPicture', this._onScroll.bind(this));

			if (this.$backgroundPicture[0].complete) {
				this._onBackgroundPictureLoaded();
			} else {
				this.$backgroundPicture.on('loaded', this._onBackgroundPictureLoaded.bind(this));
			}

			this.$scrollButton.on(_Events.MouseEvent.CLICK, this._onScrollButtonClick.bind(this));
		}
	}, {
		key: '_updatePosition',
		value: function _updatePosition() {

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

			this.$backgroundPicture.css({ 'transform': 'translate3d(0, ' + -this._scrollTop.current * 0.3 + 'px, 0)' });
			this.$content.css({
				'transform': 'translate3d(0, ' + -this._scrollTop.current * 0.5 + 'px, 0)',
				'opacity': '1'
			});
			this.$scrollButton.css({
				'transform': 'translate3d(0, ' + -this._scrollTop.current + 'px, 0)',
				'opacity': '1'
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
		key: '_onBackgroundPictureLoaded',
		value: function _onBackgroundPictureLoaded() {

			this._isBackgroundPictureLoaded = true;
			this._resizeBackgroundPicture();
		}
	}, {
		key: '_onScrollButtonClick',
		value: function _onScrollButtonClick() {

			_Viewport2.default.scrollTo(this.$container.height());
		}
	}, {
		key: '_onResize',
		value: function _onResize() {

			this._containerHeight = this.$container.height();

			if (this._isBackgroundPictureLoaded) {
				this._resizeBackgroundPicture();
			}
		}

		// --------------------------------------------------------------o Resize

	}, {
		key: '_resizeBackgroundPicture',
		value: function _resizeBackgroundPicture() {

			var dims = _ImageUtils2.default.getCoverSizeImage(this.$backgroundPicture.width(), this.$backgroundPicture.height(), this.$container.width(), this.$container.height());

			this.$backgroundPicture.css(dims);
		}

		// --------------------------------------------------------------o Public

	}]);

	return HeroPicture;
}(_Component3.default);

exports.default = HeroPicture;

},{"./../../core/Component":8,"./../../core/Events":10,"./../../core/ImageUtils":11,"./../../core/Viewport":17,"raf":"raf"}],5:[function(require,module,exports){
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

var _Viewport = require('./../../core/Viewport');

var _Viewport2 = _interopRequireDefault(_Viewport);

var _Events = require('./../../core/Events');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainHeader = function (_Component) {
	_inherits(MainHeader, _Component);

	function MainHeader() {
		_classCallCheck(this, MainHeader);

		return _possibleConstructorReturn(this, (MainHeader.__proto__ || Object.getPrototypeOf(MainHeader)).apply(this, arguments));
	}

	_createClass(MainHeader, [{
		key: '_initContent',


		// --------------------------------------------------------------o Private

		value: function _initContent() {

			_get(MainHeader.prototype.__proto__ || Object.getPrototypeOf(MainHeader.prototype), '_initContent', this).call(this);

			this.$container = (0, _jquery2.default)('.main-header');
			this.$mainMenu = this.$container.find('.main-menu');
			this.$openButton = this.$container.find('.open-button');
			this.$closeButton = this.$container.find('.close-button');

			this.$subMenuItems = this.$container.find('.sub-menu').prev();
			this.$subMenuBackButtons = this.$container.find('.sub-menu .back-button');

			this._isMenuOpened = false;
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			_get(MainHeader.prototype.__proto__ || Object.getPrototypeOf(MainHeader.prototype), '_initEvents', this).call(this);

			this.$openButton.on(_Events.MouseEvent.CLICK, this._onOpenButtonClick.bind(this));

			this.$closeButton.on(_Events.MouseEvent.CLICK, this._onCloseButtonClick.bind(this));

			this.$subMenuItems.on(_Events.MouseEvent.CLICK, this._onSubMenuItemClick.bind(this));

			this.$subMenuBackButtons.on(_Events.MouseEvent.CLICK, this._onSubMenuBackButtonClick.bind(this));
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
		key: '_onSubMenuItemClick',
		value: function _onSubMenuItemClick(event) {

			console.log(this.$mainMenu.hasClass(MainHeader._Class.SUB_MENU_OPENED));
			if (this.$mainMenu.hasClass(MainHeader._Class.SUB_MENU_OPENED)) {
				return;
			}

			this.$mainMenu.addClass(MainHeader._Class.SUB_MENU_OPENED);
			(0, _jquery2.default)(event.currentTarget).addClass(MainHeader._Class.SUB_MENU_OPENED);
		}
	}, {
		key: '_onSubMenuBackButtonClick',
		value: function _onSubMenuBackButtonClick() {

			console.log('ok');

			this.$mainMenu.removeClass(MainHeader._Class.SUB_MENU_OPENED);
			(0, _jquery2.default)(event.currentTarget).parents('.sub-menu').removeClass(MainHeader._Class.SUB_MENU_OPENED);
		}

		// --------------------------------------------------------------o Public

	}, {
		key: 'openMenu',
		value: function openMenu() {

			if (this._isMenuOpened === true) {
				return;
			}

			this.$container.addClass(MainHeader._Class.MENU_PRE_OPENED);
			this.$container[0].offsetHeight;
			this.$container.addClass(MainHeader._Class.MENU_OPENED).removeClass(MainHeader._Class.MENU_PRE_OPENED);
		}
	}, {
		key: 'closeMenu',
		value: function closeMenu() {

			if (this._isMenuOpened === true) {
				return;
			}

			this.$container.removeClass(MainHeader._Class.MENU_OPENED);
		}
	}]);

	return MainHeader;
}(_Component3.default);

MainHeader._Class = {
	MENU_OPENED: 'opened',
	MENU_PRE_OPENED: 'pre-opened',
	SUB_MENU_OPENED: 'sub-menu-opened'
};
exports.default = new MainHeader();

},{"./../../core/Component":8,"./../../core/Events":10,"./../../core/Viewport":17,"jquery":"jquery"}],6:[function(require,module,exports){
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
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			_get(Popin.prototype.__proto__ || Object.getPrototypeOf(Popin.prototype), '_initEvents', this).call(this);

			this.$popinButtons.on(_Events.MouseEvent.CLICK, this._onPopinButtonClick.bind(this));

			this.$closeButton.on(_Events.MouseEvent.CLICK, this._onCloseButtonClick.bind(this));
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
		}
	}, {
		key: '_onCloseButtonClick',
		value: function _onCloseButtonClick() {

			if (this._isOpened === false) {
				return;
			}

			this._isOpened = false;

			this.$container.removeClass('opened');
		}

		// --------------------------------------------------------------o Public

	}]);

	return Popin;
}(_Component3.default);

exports.default = Popin;

},{"./../../core/Component":8,"./../../core/Events":10,"jquery":"jquery"}],7:[function(require,module,exports){
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

			this.$slides = this.$container.find('li');
			this.$nav = this.$container.find('.slider-nav');

			if (this.$nav) {
				this.$navItems = this.$nav.find('.slider-nav-item');
			}

			if (this.$container.attr('data-timer')) {
				this._sliderDuration = this.$container.attr('data-timer');
				this._launchTimer();
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

			if (this.$nav) {
				this.$navItems.on(_Events.MouseEvent.CLICK, this._onNavItemClick.bind(this));
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

},{"./../../core/Component":8,"./../../core/Events":10,"jquery":"jquery"}],8:[function(require,module,exports){
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

},{"./Events":10,"./Viewport":17,"eventemitter2":"eventemitter2","jquery":"jquery"}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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

},{"./Events":10,"./Viewport":17,"eventemitter2":"eventemitter2"}],13:[function(require,module,exports){
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
			_ViewsManager2.default.pageContainer.html(this.$container);

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

			this.emit(this.EXITED);

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

},{"./../components/HeroPicture":4,"./Events":10,"./TextUtils":15,"./Viewport":17,"./ViewsManager":18,"eventemitter2":"eventemitter2","jquery":"jquery"}],14:[function(require,module,exports){
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

			var _loop = function _loop(path) {

				var route = routes[path];

				(0, _page2.default)(ROOT_PATH + path, function (ctx) {

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

},{"./../data/data.json":19,"eventemitter2":"eventemitter2","jquery":"jquery","page":"page","superagent":"superagent"}],15:[function(require,module,exports){
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
	}]);

	return TextUtils;
}();

exports.default = new TextUtils();

},{}],16:[function(require,module,exports){
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

},{"./Ease":9,"eventemitter2":"eventemitter2","raf":"raf"}],17:[function(require,module,exports){
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

			this.width = this.$window.width();
			this.height = this.$window.height();
			this.screenWidth = screen.width;
			this.screenHeight = screen.height;

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
					console.log(data.value);
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

},{"./Events":10,"./Tween":16,"eventemitter2":"eventemitter2","jquery":"jquery"}],18:[function(require,module,exports){
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

			var pageSlug = _TextUtils2.default.lowercaseFirstLetter(res.class.slug);

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

},{"./../data/data.json":19,"./Page":13,"./Router":14,"./TextUtils":15,"./Viewport":17,"eventemitter2":"eventemitter2","jquery":"jquery"}],19:[function(require,module,exports){
module.exports={"_routes":{"/":{"class":"Homepage","slug":"homepage"},"/agence":{"class":"Agency","slug":"agency"},"/talents":{"class":"Talents","slug":"talents"},"/perspectives":{"class":"Perspectives","slug":"perspectives"},"/contact":{"class":"Contact","slug":"contact"},"/etudes-de-cas/*":{"class":"CaseStudy","slug":"case-study"},"/articles/*":{"class":"Article","slug":"article"},"/jobs/*":{"class":"Job","slug":"job"}}}
},{}],20:[function(require,module,exports){
'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _Keyboard = require('./core/Keyboard');

var _Keyboard2 = _interopRequireDefault(_Keyboard);

var _Viewport = require('./core/Viewport');

var _Viewport2 = _interopRequireDefault(_Viewport);

var _ViewsManager = require('./core/ViewsManager');

var _ViewsManager2 = _interopRequireDefault(_ViewsManager);

var _Router = require('./core/Router');

var _Router2 = _interopRequireDefault(_Router);

var _data = require('./data/data.json');

var _data2 = _interopRequireDefault(_data);

var _MainHeader = require('./components/MainHeader');

var _MainHeader2 = _interopRequireDefault(_MainHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Import views


// ---o Init keyboard events
var requiredPages = {'agency/index': require('./pages/agency/index.js'),'article/index': require('./pages/article/index.js'),'case-study/index': require('./pages/case-study/index.js'),'contact/index': require('./pages/contact/index.js'),'homepage/index': require('./pages/homepage/index.js'),'job/index': require('./pages/job/index.js'),'perspectives/index': require('./pages/perspectives/index.js'),'talents/index': require('./pages/talents/index.js')};

// ---o Import main elements 


// ---o Init the rest of the core
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

},{"./components/MainHeader":5,"./core/Keyboard":12,"./core/Router":14,"./core/Viewport":17,"./core/ViewsManager":18,"./data/data.json":19,"./pages/agency/index.js":22,"./pages/article/index.js":23,"./pages/case-study/index.js":24,"./pages/contact/index.js":25,"./pages/homepage/index.js":26,"./pages/job/index.js":27,"./pages/perspectives/index.js":28,"./pages/talents/index.js":29,"jquery":"jquery"}],21:[function(require,module,exports){
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

		// --------------------------------------------------------------o Listeners


	}]);

	return MalabarPage;
}(_Page3.default);

exports.default = MalabarPage;

},{"./../components/Accordion":1,"./../components/Gallery":2,"./../components/GridGallery":3,"./../components/HeroPicture":4,"./../components/Popin":6,"./../components/Slider":7,"./../core/Page":13,"jquery":"jquery"}],22:[function(require,module,exports){
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
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			_get(Agency.prototype.__proto__ || Object.getPrototypeOf(Agency.prototype), '_initEvents', this).call(this);

			this.$breadcrumbItems.on(_Events.MouseEvent.CLICK, this._onBreadcrumbItemClick.bind(this));

			this.slider.on(_Slider2.default.CHANGE + '.agency', this._onSliderChange.bind(this));
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

		// --------------------------------------------------------------o Public

	}]);

	return Agency;
}(_MalabarPage3.default);

exports.default = Agency;

},{"./../../components/Slider":7,"./../../core/Events":10,"./../../lib/MalabarPage":21}],23:[function(require,module,exports){
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

},{"./../../lib/MalabarPage":21}],24:[function(require,module,exports){
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

},{"./../../lib/MalabarPage":21}],25:[function(require,module,exports){
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

},{"./../../lib/MalabarPage":21}],26:[function(require,module,exports){
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
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			_get(Homepage.prototype.__proto__ || Object.getPrototypeOf(Homepage.prototype), '_initEvents', this).call(this);
		}

		// --------------------------------------------------------------o Listeners


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

},{"./../../lib/MalabarPage":21}],27:[function(require,module,exports){
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

},{"./../../lib/MalabarPage":21}],28:[function(require,module,exports){
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

var Perspectives = function (_MalabarPage) {
	_inherits(Perspectives, _MalabarPage);

	function Perspectives() {
		_classCallCheck(this, Perspectives);

		return _possibleConstructorReturn(this, (Perspectives.__proto__ || Object.getPrototypeOf(Perspectives)).apply(this, arguments));
	}

	return Perspectives;
}(_MalabarPage3.default);

exports.default = Perspectives;

},{"./../../lib/MalabarPage":21}],29:[function(require,module,exports){
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

},{"./../../lib/MalabarPage":21}]},{},[20])

//# sourceMappingURL=maps/scripts.js.map
