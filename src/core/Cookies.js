class Cookies {

	set(name, value, expirationDays) {

		expirationDays = expirationDays ? expirationDays : 31;
		let date = new Date();
		date.setTime(date.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
		let expires = "expires="+ date.toUTCString();

		document.cookie = name + '=' + value + ';' + expires;

	}

	get(name) {

		name = name + '=';
		let decodedCookie = decodeURIComponent(document.cookie);
		let ca = decodedCookie.split(';');
		for (let i = 0; i <ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return '';
	}

	delete(name) {
		document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}

}

export default new Cookies();
