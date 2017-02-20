class Utils {

	shuffle(ar) {

		let currentIndex = ar.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = ar[currentIndex];
			ar[currentIndex] = ar[randomIndex];
			ar[randomIndex] = temporaryValue;
		}

		return ar;

	}

	clone(obj) {

		if (null == obj || "object" != typeof obj) {
			return obj;
		}
		
		let copy = obj.constructor();
		for (let attr in obj) {
			if (obj.hasOwnProperty(attr)) {
				copy[attr] = obj[attr];
			}
		}
		
		return copy;

	}

}

export default new Utils()
