'use strict'

class TextUtils {

	handleize (str) {

		str = str.toLowerCase();

		// ---o Replace accents
		let diacritics =[
			/[\300-\306]/g, /[\340-\346]/g,  // A, a
			/[\310-\313]/g, /[\350-\353]/g,  // E, e
			/[\314-\317]/g, /[\354-\357]/g,  // I, i
			/[\322-\330]/g, /[\362-\370]/g,  // O, o
			/[\331-\334]/g, /[\371-\374]/g,  // U, u
			/[\321]/g, /[\361]/g, // N, n
			/[\307]/g, /[\347]/g, // C, c
		];

		let chars = ['A','a','E','e','I','i','O','o','U','u','N','n','C','c'];

		for (var i = 0; i < diacritics.length; i++) {
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

	lowercaseFirstLetter(str) {

		return str.charAt(0).toLowerCase() + str.slice(1);

	}
}

export default new TextUtils()
