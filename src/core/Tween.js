import EventEmitter from 'eventemitter2';
import raf from 'raf';
import Ease from 'core/Ease'

class Tween extends EventEmitter {

	constructor() {

		super({ wildcard: true });

		this.tweens = []

	}

	// ------------------------------------------------------------o Private

	_onUpdate () {

		let currentTime = +new Date()
		let inc = 0

		for (let tween of this.tweens) {

			tween.currentTime = currentTime - tween.startTime - tween.delay

			if (tween.currentTime > 0) {

				for (let key in tween.data) {

					let data = tween.data[key]
					let elapsed = tween.currentTime / tween.duration

					tween.output[key] = data.startValue - (data.startValue - data.endValue) * (Ease[tween.ease] || Ease.linear)(elapsed)

				}

				if (tween.currentTime < tween.duration && typeof tween.onProgress == 'function') {
					tween.onProgress.call(this, tween.output)
				}
				else if (tween.currentTime >= tween.duration && typeof tween.onComplete == 'function') {

					for (let key in tween.data) {

						let data = tween.data[key]
						tween.output[key] = data.endValue

					}
					tween.onComplete.call(this, tween.output)
				}

				if (tween.currentTime >= tween.duration) {
					this.tweens.splice(inc, 1)
				}
			}

			inc++

		}

		if (this.tweens.length > 0) {
			this.rAF = requestAnimationFrame( ::this._onUpdate )
		}


	}

	// ------------------------------------------------------------o Public

	to (data, options) {

		let ntween = {}
		ntween.startTime = +new Date()
		ntween.currentTime = 0
		ntween.delay = options.delay || 0
		ntween.duration = options.duration
		ntween.ease = options.ease
		ntween.easedProgress = 0
		ntween.onProgress = options.onProgress
		ntween.onComplete = options.onComplete

		ntween.data = []
		ntween.output = []

		for (let value in data) {

			if (['duration', 'ease', 'delay'].indexOf(value) > -1) {
				console.log('%c Tweeeeeeen: Cannot animate the \'' + value + '\' property ', 'background: #ffbbbb; color: #ff1414;')
				break;
			}

			if (data[value] !== undefined && options[value] !== undefined) {
				ntween.data[value] = {
					startValue: data[value],
					endValue: options[value]
				}

				ntween.output[value] = data[value]
			}
		}

		// ---o Start rAF if not

		if (this.tweens.length === 0) {
			this.rAF = requestAnimationFrame( ::this._onUpdate )
		}

		this.tweens.push(ntween)



	}

	// ---o To do

	from () {


	}

}

export default new Tween()