import EventEmitter from 'eventemitter2';
import Viewport from 'core/Viewport';
import {Event, KeyboardEvent} from 'core/Events';

class Keyboard extends EventEmitter {

	constructor () {

		super({wildcard: true});

		this.keycode_names = {
			91 : 'cmd',
			17 : 'ctrl',
			32 : 'space',
			16 : 'shift',
			18 : 'alt',
			20 : 'caps',
			9  : 'tab',
			13 : 'enter',
			8  : 'backspace',
			38 : 'up',
			39 : 'right',
			40 : 'down',
			37 : 'left',
			27 : 'esc'
		};

		this.downs = [];

		this._initEvents();
		this._generateEvents();
		
	}

	_initEvents () {

		Viewport.$document
			.on(KeyboardEvent.KEYDOWN, ::this._onKeyDown)
			.on(KeyboardEvent.KEYUP, ::this._onKeyUp);

	}

	_onKeyUp (e) {

		if (this.downs.includes(e.keyCode)) {

			let index = this.downs.indexOf(e.keyCode);
			let character = this._keycodeToCharacter(e.keyCode);

			this.emit(KeyboardEvent[character.toUpperCase()] + '.*');

			this.downs.splice(index, 1);

		}


	}

	_onKeyDown (e) {

		this.downs.push(e.keyCode);


	}

	_generateEvents () {

		for (let i = 0; i < 130; i++) {

			let character = this._keycodeToCharacter(i);

			if (character !== '') {
				KeyboardEvent[character.toUpperCase()] = 'keypressed:' + character;
			}

		}

	}

	_keycodeToCharacter (keycode) {

		let output = this.keycode_names[keycode];

		if (!output ){
			output = String.fromCharCode(keycode).toLowerCase();
		}

		return output;

	}




}

export default new Keyboard();
