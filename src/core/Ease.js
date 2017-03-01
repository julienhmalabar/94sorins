class Ease {

	/**
	 *	t = currentTime
	 *	b = startValue
	 *	c = change
	 *	d = duration
	 */

	linear (k) {

		return k;

	}

	quadIn (k) {

		return k * k;

	}

	quadOut (k) {

		return k * (2 - k);

	}

	quadInOut (k) {

		if ((k *= 2) < 1) {
			return 0.5 * k * k;
		}

		return - 0.5 * (--k * (k - 2) - 1);

	}

	cubicIn (k) {

		return k * k * k;

	}

	cubicOut (k) {

		return --k * k * k + 1;

	}

	cubicInOut (k) {

		if ((k *= 2) < 1) {
			return 0.5 * k * k;
		}

		return - 0.5 * (--k * (k - 2) - 1);

	}

	quartIn (k) {

		return k * k * k * k;

	}

	quartOut (k) {

		return 1 - (--k * k * k * k);

	}

	quartInOut (k) {

		if ((k *= 2) < 1) {
			return 0.5 * k * k * k * k;
		}

		return - 0.5 * ((k -= 2) * k * k * k - 2);

	}

	quintIn (k) {

		return k * k * k * k * k;

	}

	quintOut (k) {

		return --k * k * k * k * k + 1;

	}

	quintInOut (k) {

		if ((k *= 2) < 1) {
			return 0.5 * k * k * k * k * k;
		}

		return 0.5 * ((k -= 2) * k * k * k * k + 2);

	}

	sineIn (k) {

		return 1 - Math.cos(k * Math.PI / 2);

	}

	sineOut (k) {

		return Math.sin(k * Math.PI / 2);

	}

	sineInOut (k) {

		return 0.5 * (1 - Math.cos(Math.PI * k));

	}

	expoIn (k) {

		return k === 0 ? 0 : Math.pow(1024, k - 1);

	}

	expoOut (k) {

		return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);

	}

	expoInOut (k) {

		if (k === 0) {
			return 0;
		}

		if (k === 1) {
			return 1;
		}

		if ((k *= 2) < 1) {
			return 0.5 * Math.pow(1024, k - 1);
		}

		return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);

	}

	circIn (k) {

		return 1 - Math.sqrt(1 - k * k);

	}

	circOut (k) {

		return Math.sqrt(1 - (--k * k));

	}

	circInOut (k) {

		if ((k *= 2) < 1) {
			return - 0.5 * (Math.sqrt(1 - k * k) - 1);
		}

		return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);

	}

	ElasticIn (k) {

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

		return - (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));

	}

	elasticOut (k) {

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

		return (a * Math.pow(2, - 10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1);

	}

	elasticInOut (k) {

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
			return - 0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
		}

		return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;

	}

	backIn (k) {

		var s = 1.70158;

		return k * k * ((s + 1) * k - s);

	}

	backOut (k) {

		var s = 1.70158;

		return --k * k * ((s + 1) * k + s) + 1;

	}

	backInOut (k) {

		var s = 1.70158 * 1.525;

		if ((k *= 2) < 1) {
			return 0.5 * (k * k * ((s + 1) * k - s));
		}

		return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);

	}



}

export default new Ease()