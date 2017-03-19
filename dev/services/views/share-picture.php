


<!DOCTYPE html>
<!--[if IE 9 ]><html class="ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--><html><!--<![endif]-->
<head>

	<title>Save your picture!</title>

	<style>

		@font-face {
			font-family: 'Calibre';
			src: url("../fonts/calibre-regular.eot");
			src: url("../fonts/calibre-regular.eot?#iefix") format('embedded-opentype'), url("../fonts/calibre-regular.svg") format('svg'), url("../fonts/calibre-regular.woff") format('woff'), url("../fonts/calibre-regular.ttf") format('truetype');
			font-weight: 400;
			font-style: normal;
		}
		@font-face {
			font-family: 'Calibre';
			src: url("../fonts/calibre-medium.eot");
			src: url("../fonts/calibre-medium.eot?#iefix") format('embedded-opentype'), url("../fonts/calibre-medium.svg") format('svg'), url("../fonts/calibre-medium.woff") format('woff'), url("../fonts/calibre-medium.ttf") format('truetype');
			font-weight: 500;
			font-style: normal;
		}
		@font-face {
			font-family: 'Calibre';
			src: url("../fonts/calibre-semibold.eot");
			src: url("../fonts/calibre-semibold.eot?#iefix") format('embedded-opentype'), url("../fonts/calibre-semibold.svg") format('svg'), url("../fonts/calibre-semibold.woff") format('woff'), url("../fonts/calibre-semibold.ttf") format('truetype');
			font-weight: 600;
			font-style: normal;
		}
	</style>

</head>
<body>

	<script>

	<?php 
		$data = 'var data = {';
		foreach ($params as $key=>$value) {
			$data .= "'" . $key . "': '" . $value . "', ";
		}
		$data = substr($data, 0, -2);
		$data .= '};';

		echo $data . "\n";
	?>

	</script>

	<canvas id="picture"></canvas>

	<script>

		var onBackgroundImageLoaded = function () {

			render();
			saveCanvas();

		}


		// -------------------------------------------------------------o Utils

		var handleize = function (string) {

			return string.toLowerCase()
				.replace(/ /g,'-')
				.replace(/[^\w-]+/g,'');

		}

		// -------------------------------------------------------------o Functions

		var render = function () {

			ctx.drawImage(backgroundImage,0 ,0, 500, 300);

			ctx.font = "20px Georgia";
			ctx.fillText(data.type, 10,50);

			ctx.font = "30px Verdana";

			// Create gradient
			var gradient=ctx.createLinearGradient(0,0,canvas.width,0);
			gradient.addColorStop("0","magenta");
			gradient.addColorStop("0.5","blue");
			gradient.addColorStop("1.0","red");
			// Fill with gradient
			ctx.fillStyle=gradient;
			ctx.fillText(data.title,10,90);


		}

		var saveCanvas = function () {

			var dataURL = canvas.toDataURL();
			var request = new XMLHttpRequest();

			request.open('POST', 'http://services.seeds/savePicture', true);
			request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

			request.onreadystatechange = function() {
				if (request.readyState == 4 && request.status == 200) {
					console.log('request succeed');
				}
			}

			request.send('filename=' + data.type + '-' + handleize(data.title) + '&dataurl=' + dataURL);


		}

		// -------------------------------------------------------------o Init canvas

		var canvas = document.getElementById('picture');
		var ctx = canvas.getContext('2d');

		canvas.width = 500;
		canvas.height = 300;

		var backgroundImage = new Image();
		backgroundImage.onload = onBackgroundImageLoaded;
		backgroundImage.src = 'http://admin.seeds/wp-content/uploads/2016/02/13_bg-1.jpg';
		backgroundImage.setAttribute('crossOrigin', 'anonymous');

	</script>


</body>
</html>