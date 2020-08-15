/**
 * @file Compress images
 * @author Beatriz Sopeña Merino <beatrizsmerino@gmail.com>
 * @copyright (2020)
 * @see {@link package.json}
 */





/**
* @const chalk
* @type NPM Package
* @requires chalk npm run chalk --save-dev
* @see {@link https://www.npmjs.com/package/chalk}
*/
const chalk = require('chalk');




/**
 * @const compressImages
 * @type NPM Package
 * @requires compress-images npm run compress-images --save-dev
 * @see {@link https://www.npmjs.com/package/compress-images}
 */
const { compress } = require('compress-images/promise');



/**
 * @function compressImages 
 * @description Minify size images compression with extension: jpg/jpeg, svg, png, gif.
 * @param {string} inputPath Path of the images to compress
 * @param {string} outputPath Path of the folder to save the images compressed
 * @requires compress-images - NPM Package compress-images/promise
 * @see {@link https://github.com/semiromid/compress-images}
 */
function compressImages(inputPath, outputPath) {
	const processImages = async (onProgress) => {
		const result = await compress({
			source: inputPath + '*.{jpg,JPG,jpeg,JPEG,png,svg,gif}',
			destination: outputPath,
			onProgress,
			enginesSetup: {
				jpg: { engine: 'mozjpeg', command: ['-quality', '60'] },
				png: { engine: 'pngquant', command: ['--quality=20-50'] },
				svg: { engine: 'svgo', command: ['--multipass'] },
				gif: { engine: 'gifsicle', command: ['--colors', '64', '--use-col=web'] },
			}
		});

		const { statistics, errors } = result;
		// statistics - all processed images list
		// errors - all errors happened list
	};

	processImages((error, statistic, completed) => {
		// console.info("-------------");
		if (error) {
			console.info(chalk.red.bold(`Error happen while processing: ${error}`));
			return;
		}
		if (completed) {
			console.info(chalk.green.bold(`Sucefully processed: ${completed}`));
		}
		// console.info(statistic);
		// console.info("-------------");
	});
}



(function () {
	compressImages('static/src/images/', 'static/dist/images/');
	compressImages('static/src/images/content/**/', 'static/dist/images/content/');
	compressImages('static/src/images/favicon/**/', 'static/dist/images/favicon/');
	compressImages('static/src/images/icons/icomoon/svg-png/SVG/', 'static/dist/images/icons/svg/');
})();