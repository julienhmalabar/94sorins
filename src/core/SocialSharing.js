import $ from 'jquery'
import {MouseEvent} from 'core/Events'
import Viewport from 'core/Viewport'

class SocialSharing {

	constructor() {

		this.$links = $('.social-link')

		this._initEvents()

	}

	// ------------------------------------------------------------o Private

	_initEvents () {

		$(document)
			.on(MouseEvent.CLICK, '.social-link', ::this._onLinkClick)

	}

	_onLinkClick (e) {

		e.preventDefault()

		let $this = $(e.currentTarget)
		let type = $this.attr('data-type')
		let url = $this.attr('data-url')
		let sharedUrl = ''

		if (type === 'twitter') {
			let text = $this.attr('data-text')
			sharedUrl = 'https://twitter.com/intent/tweet?text=' + text + '&url=' + url + '&original_referer=' + url
		}
		else if (type === 'facebook') {
			sharedUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + url
		}
		else if (type === 'google') {
			sharedUrl = 'hhttps://plus.google.com/share?url=' + url
		}
		else if (type === 'pinterest') {
			let media = $this.attr('data-media')
			sharedUrl = 'https://www.pinterest.com/pin/create/button/?media=' + media + '&url=' + url
		}

		let width = 800
		let height = 500

		let leftPosition = (Viewport.width / 2) - ((width / 2) + 10);
		let topPosition = (Viewport.height / 2) - ((height / 2) + 50);

		let options = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no"

		window.open(sharedUrl, '', options);

	}  

}

export default new SocialSharing()