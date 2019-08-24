/**
 * This file is part of the O2System Blender package.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author         Steeve Andrian Salim
 * @copyright      Copyright (c) Steeve Andrian Salim
 */
// ------------------------------------------------------------------------

let blender = require('o2system-blender');

/*
 |--------------------------------------------------------------------------
 | Blender Asset Management
 |--------------------------------------------------------------------------
 |
 | Blender provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

blender.js('src/app.js', 'dist/').sass('src/app.scss', 'dist/');

// Full API
// blender.js(src, output);
// blender.react(src, output); <-- Identical to blender.js(), but registers React Babel compilation.
// blender.preact(src, output); <-- Identical to blender.js(), but registers Preact compilation.
// blender.coffee(src, output); <-- Identical to blender.js(), but registers CoffeeScript compilation.
// blender.ts(src, output); <-- TypeScript support. Requires tsconfig.json to exist in the same folder as webpack.blender.js
// blender.extract(vendorLibs);
// blender.sass(src, output);
// blender.less(src, output);
// blender.stylus(src, output);
// blender.postCss(src, output, [require('postcss-some-plugin')()]);
// blender.browserSync('my-site.test');
// blender.combine(files, destination);
// blender.babel(files, destination); <-- Identical to blender.combine(), but also includes Babel compilation.
// blender.copy(from, to);
// blender.copyDirectory(fromDir, toDir);
// blender.minify(file);
// blender.sourceMaps(); // Enable sourcemaps
// blender.version(); // Enable versioning.
// blender.disableNotifications();
// blender.setPublicPath('path/to/public');
// blender.setResourceRoot('prefix/for/resource/locators');
// blender.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// blender.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// blender.babelConfig({}); <-- Merge extra Babel configuration (plugins, etc.) with Blender's default.
// blender.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// blender.override(function (webpackConfig) {}) <-- Will be triggered once the webpack config object has been fully generated by blender.
// blender.dump(); <-- Dump the generated webpack config object to the console.
// blender.extend(name, handler) <-- Extend Blender's API with your own components.
// blender.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   globalVueStyles: file, // Variables file to be imported in every component.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   terser: {}, // Terser-specific options. https://github.com/webpack-contrib/terser-webpack-plugin#options
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });