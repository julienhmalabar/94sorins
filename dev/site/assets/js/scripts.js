(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

			this.$backgroundPicture = this.$container.find('img');
			this.$content = this.$container.find('figcaption');
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			_Viewport2.default.on(_Events.Event.SCROLL + '.heroPicture', this._onScroll.bind(this));
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

			this.$backgroundPicture.css({ 'transform': 'translate3d(0, ' + -this._scrollTop.current * 0.3 + 'px, 0)' });
			this.$content.css({
				'transform': 'translate3d(0, ' + -this._scrollTop.current * 0.5 + 'px, 0)',
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

		// --------------------------------------------------------------o Public

	}]);

	return HeroPicture;
}(_Component3.default);

exports.default = HeroPicture;

},{"./../../core/Component":3,"./../../core/Events":4,"./../../core/Viewport":9,"raf":"raf"}],2:[function(require,module,exports){
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

			this._isMenuOpened = false;
		}
	}, {
		key: '_initEvents',
		value: function _initEvents() {

			_get(MainHeader.prototype.__proto__ || Object.getPrototypeOf(MainHeader.prototype), '_initEvents', this).call(this);

			this.$openButton.on(_Events.MouseEvent.CLICK, this._onOpenButtonClick.bind(this));

			this.$closeButton.on(_Events.MouseEvent.CLICK, this._onCloseButtonClick.bind(this));
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

		// --------------------------------------------------------------o Public

	}, {
		key: 'openMenu',
		value: function openMenu() {

			if (this._isMenuOpened === true) {
				return;
			}

			this.$container.addClass(MainHeader._Class.MENU_OPENED);
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
	MENU_OPENED: 'menu-opened'
};
exports.default = new MainHeader();

},{"./../../core/Component":3,"./../../core/Events":4,"./../../core/Viewport":9,"jquery":"jquery"}],3:[function(require,module,exports){
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

},{"./Events":4,"./Viewport":9,"eventemitter2":"eventemitter2","jquery":"jquery"}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
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

},{"./Events":4,"./Viewport":9,"eventemitter2":"eventemitter2"}],6:[function(require,module,exports){
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
		_this._initContent();
		_this._initEvents();

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

			this.$container = (0, _jquery2.default)(this.template);
			_ViewsManager2.default.pageContainer.html(this.$container);

			this._initContent();
			this._initEvents();

			_Viewport2.default.resize();

			this.enter();
		}
	}, {
		key: '_initContent',
		value: function _initContent() {

			var pageSlug = _TextUtils2.default.lowercaseFirstLetter(this.constructor.name);

			this.$container = (0, _jquery2.default)('.page-' + pageSlug);

			this._initHeroPicture();
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

		// --------------------------------------------------------------o Components

	}, {
		key: '_initHeroPicture',
		value: function _initHeroPicture() {
			var _this2 = this;

			var heroPictures = this.$container.find('.hero-picture');
			console.log(heroPictures);
			if (heroPictures.length) {
				this.heroPictures = [];
				heroPictures.each(function (key) {
					_this2.heroPictures.push(new _HeroPicture2.default(heroPictures.eq(key)));
				});
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

			if (this._isRendered === false) {
				//this._isEntered = true;
			}

			if (this._isRendered === true || this._isPreEntered === false) {
				return;
			}

			if (this._isLoaded === true) {
				this._render();
				return;
			}
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

},{"./../components/HeroPicture":1,"./Events":4,"./TextUtils":8,"./Viewport":9,"./ViewsManager":10,"eventemitter2":"eventemitter2","jquery":"jquery"}],7:[function(require,module,exports){
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

},{"./../data/data.json":11,"eventemitter2":"eventemitter2","jquery":"jquery","page":"page","superagent":"superagent"}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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

			/*TweenLite.to(scroll, time, {val: val, ease: Power4.easeOut, onUpdate: () => {
   	this.$document.scrollTop(scroll.val);
   }});*/
		}
	}]);

	return Viewport;
}(_eventemitter2.default);

exports.default = new Viewport();

},{"./Events":4,"eventemitter2":"eventemitter2","jquery":"jquery"}],10:[function(require,module,exports){
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
				this.currentClass.template = (0, _jquery2.default)(response.text).filter('.page-container').html();

				this.currentClass.loaded = true;

				this.currentClass.enter();

				this.emit(this.REQUEST_END + '.*');
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

			this.currentClass.enter();
		}
	}]);

	return ViewsManager;
}(_eventemitter2.default);

exports.default = new ViewsManager();

},{"./../data/data.json":11,"./Page":6,"./Router":7,"./TextUtils":8,"./Viewport":9,"eventemitter2":"eventemitter2","jquery":"jquery"}],11:[function(require,module,exports){
module.exports={"_routes":{"/":{"class":"Homepage","slug":"homepage"},"/agence":{"class":"Agency","slug":"agency"},"/etudes-de-cas/*":{"class":"CaseStudy","slug":"case-study"}}}
},{}],12:[function(require,module,exports){
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
var requiredPages = {'agency/index': require('./pages/agency/index.js'),'case-study/index': require('./pages/case-study/index.js'),'homepage/index': require('./pages/homepage/index.js')};

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

},{"./components/MainHeader":2,"./core/Keyboard":5,"./core/Router":7,"./core/Viewport":9,"./core/ViewsManager":10,"./data/data.json":11,"./pages/agency/index.js":13,"./pages/case-study/index.js":14,"./pages/homepage/index.js":15,"jquery":"jquery"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Page2 = require('./../../core/Page');

var _Page3 = _interopRequireDefault(_Page2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Agency = function (_Page) {
	_inherits(Agency, _Page);

	function Agency() {
		_classCallCheck(this, Agency);

		return _possibleConstructorReturn(this, (Agency.__proto__ || Object.getPrototypeOf(Agency)).apply(this, arguments));
	}

	return Agency;
}(_Page3.default);

exports.default = Agency;

},{"./../../core/Page":6}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Page2 = require('./../../core/Page');

var _Page3 = _interopRequireDefault(_Page2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CaseStudy = function (_Page) {
	_inherits(CaseStudy, _Page);

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
}(_Page3.default);

exports.default = CaseStudy;

},{"./../../core/Page":6}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _Page2 = require('./../../core/Page');

var _Page3 = _interopRequireDefault(_Page2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Homepage = function (_Page) {
	_inherits(Homepage, _Page);

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
}(_Page3.default);

exports.default = Homepage;

},{"./../../core/Page":6}]},{},[12])

//# sourceMappingURL=maps/scripts.js.map
