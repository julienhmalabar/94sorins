'use strict'

class ImageUtils {

	getCoverSizeImage (picWidth, picHeight, containerWidth, containerHeight) {

		let
			pw = picWidth,
			ph = picHeight,
			cw = containerWidth || window.screenWidth,
			ch = containerHeight || window.screenHeight,

			pr = pw / ph,
			cr = cw / ch

		if (cr < pr) {
			return {
				'width': ch * pr,
				'height': ch,
				'top': 0,
				'left': - ((ch * pr) - cw) * 0.5
			}
		}
		else {
			return {
				'width': cw,
				'height': cw / pr,
				'top': - ((cw / pr) - ch) * 0.5,
				'left': 0
			}
		}

	}
}

export default new ImageUtils()