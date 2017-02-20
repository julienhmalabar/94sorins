'use strict';

let touch = false
let mousedown = ''
let mouseup = ''
let mousemove = ''

if ('onmousedown' in window) {
	touch = true
	mousedown += ' mousedown'
	mouseup += ' mouseup'
	mousemove += ' mousemove'
}

if ('ontouchstart' in window) {
	touch = true
	mousedown += ' touchstart'
	mouseup += ' touchend'
	mousemove += ' touchmove'
}


export const Event = {
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
}

export const MouseEvent = {
	MOVE: mousemove,
	DOWN: mousedown,
	UP: mouseup,
	WHEEL: 'mousewheel',
	ENTER: 'mouseenter',
	LEAVE: 'mouseleave',
	CLICK: 'click',
};

export const KeyboardEvent = {

	KEYDOWN: 'keydown',
	KEYUP: 'keyup',
	KEYPRESS: 'keypress'

}

export const Tab = {

	ENTER: 'tab:enter',
	LEAVE: 'tab:leave'

}