'use strict';

// ---------------------------------------------------------------------o modules

import gulp 			from 'gulp';
import YAML 			from 'yamljs';

import fs 				from 'fs';


// ---------------------------------------------------------------------o config

const config = YAML.load('./builder/config.yml');



// ---------------------------------------------------------------------o task

gulp.task('data', () => {
	
	let files = fs.readdirSync(config.src + config.data.src);
	let content = '';

	for (let i = 0; i < files.length; i++){
		let file = files[i];
		let fileNoExt = file.split('.')[0];
		let ext = file.split('.')[1];

		if (file !== fileNoExt && file[0] !== '.' && (ext === 'yaml' || ext === 'yml')) {
			content += fs.readFileSync(config.src + config.data.src + file, 'utf8') + '\n';
		}
	}

	let json = YAML.parse(content);
	let jsonContent = JSON.stringify(json);

	generateViewFiles(json._routes);

	for (let i = 0; i < config.data.dest.length; i++) {
		fs.writeFileSync(config.data.dest[i], jsonContent, 'utf8');
	}

})

function generateViewFiles (routes) {

	for (let route in routes) {
		let view = routes[route].slug;
		let slug = view.substr(0, 1).toLowerCase() + view.substr(1)
		let path = config.src + 'pages/' + slug;
		let folderExists = fs.existsSync(path);

		if (folderExists === true) {
			continue;
		}

		fs.mkdirSync(path);
		let templateFolder = './builder/templateFiles/view';
		let files = fs.readdirSync(templateFolder);

		for (let file of files) {
			let content = fs.readFileSync(templateFolder + '/' + file, 'utf8') + '';
			content = content
						.replace(/{{ slug }}/g, slug)
						.replace(/{{ camelSlug }}/g, view)
						// /!\TODO: until find a way to read content of javascript file without trying to execute it
						.replace(/\/\*START/g, '')
						.replace(/END\*\//g, '');

			fs.writeFileSync(path + '/' + file, content, 'utf8');
		}

	}

}









