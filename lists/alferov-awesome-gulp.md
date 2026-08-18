# Awesome Gulp [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> A curated list of awesome [gulp ![GitHub Repo Stars](https://img.shields.io/github/stars/gulpjs/gulp) ![GitHub last commit](https://img.shields.io/github/last-commit/gulpjs/gulp)](https://github.com/gulpjs/gulp) resources, plugins, and boilerplates for a better development workflow automation.

_Looking for something else? Take a look at other [awesome lists ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome)](https://github.com/sindresorhus/awesome)._

## Contribution

:octocat: All contributions welcome. Feel free to contribute ([guidelines](contributing.md)).

## Contents

- [Legend](#legend)
- [Resources](#resources)
  - [General Resources](#general-resources)
  - [Official Documentation](#official-documentation)
  - [Community](#community)
  - [Tutorials](#tutorials)
    - [Gulp Tutorials](#gulp-tutorials)
    - [Gulp 4 Tutorials](#gulp-4-tutorials)
    - [Gulp with Browserify](#gulp-with-browserify)
    - [Gulp with Angular](#gulp-with-browserify)
    - [Gulp with Angular and Browserify](#gulp-with-angular-and-browserify)
    - [Gulp with Angular and Webpack](#gulp-with-angular-and-webpack)
    - [Gulp with React and Browserify](#gulp-with-react-and-browserify)
    - [Gulp with Ember](#gulp-with-ember)
  - [Miscellaneous Resources](#miscellaneous-resources)
- [Plugins](#plugins)
  - [Compilation](#compilation)
  - [Transpilation](#transpilation)
  - [Concatenation](#concatenation)
  - [Minification](#minification)
  - [Optimization](#optimization)
  - [Injecting Assets](#injecting-assets)
  - [Templating](#templating)
  - [Linting](#linting)
  - [Live Reload](#live-reload)
  - [Caching](#caching)
  - [Flow Control](#flow-control)
  - [Logging](#logging)
  - [Testing](#testing)
  - [Miscellaneous Plugins](#miscellaneous-plugins)
- [Scaffolding](#scaffolding)
  - [Boilerplates](#boilerplates)
  - [Yeoman Generators](#yeoman-generators)
- [Miscellaneous](#miscellaneous)

## Legend

[:no_entry:] - A deprecation notice;

## Resources

### General Resources

- [Official Website](http://gulpjs.com/)
- [Github Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/gulpjs/gulp) ![GitHub last commit](https://img.shields.io/github/last-commit/gulpjs/gulp)](https://github.com/gulpjs/gulp)
- [Plugin Registry](http://gulpjs.com/plugins/)
- [NPM Module](https://www.npmjs.com/package/gulp)
- [Blacklisted Plugins ![GitHub Repo Stars](https://img.shields.io/github/stars/gulpjs/plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/gulpjs/plugins)](https://github.com/gulpjs/plugins/blob/master/src/blackList.json)

### Official Documentation

- [Getting Started ![GitHub Repo Stars](https://img.shields.io/github/stars/gulpjs/gulp) ![GitHub last commit](https://img.shields.io/github/last-commit/gulpjs/gulp)](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
- [API Documentation ![GitHub Repo Stars](https://img.shields.io/github/stars/gulpjs/gulp) ![GitHub last commit](https://img.shields.io/github/last-commit/gulpjs/gulp)](https://github.com/gulpjs/gulp/blob/master/docs/API.md)
- [CLI Documentation ![GitHub Repo Stars](https://img.shields.io/github/stars/gulpjs/gulp) ![GitHub last commit](https://img.shields.io/github/last-commit/gulpjs/gulp)](https://github.com/gulpjs/gulp/tree/master/docs#articles)
- [Writing a Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/gulpjs/gulp) ![GitHub last commit](https://img.shields.io/github/last-commit/gulpjs/gulp)](https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md)
- [Recipes ![GitHub Repo Stars](https://img.shields.io/github/stars/gulpjs/gulp) ![GitHub last commit](https://img.shields.io/github/last-commit/gulpjs/gulp)](https://github.com/gulpjs/gulp/tree/master/docs/recipes)

### Community

- [StackOverflow](http://stackoverflow.com/questions/tagged/gulp)
- [Twitter](https://twitter.com/gulpjs)

### Tutorials

#### Gulp Tutorials

- [Building with Gulp](https://www.smashingmagazine.com/2014/06/building-with-gulp/)
- [Automate Your Tasks Easily with Gulp.js](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js)
- [Gulp - The Vision, History, and Future of the Project](https://medium.com/@contrahacks/gulp-3828e8126466)
- [Introduction to Gulp.js](http://stefanimhoff.de/tag/gulp/)
- [Video: Learning Gulp](http://leveluptuts.com/tutorials/learning-gulp)
- [Using Gulp to Inject Scripts and Styles Tags Directly into Your HTML](http://blog.johnnyreilly.com/2015/02/using-gulp-in-asp-net-instead-of-web-optimization.html)
- [5 Lessons Learned Using Gulp.js](http://denbuzze.com/post/5-lessons-learned-using-gulpjs/)
- [Automating Linkage: How I Learned to Stop Worrying and Love the Build](http://conan.is/bower/gulp/wiredep/javascript/2014/08/18/automating_linkage-or-how-i-learned-to-stop-worrying-and-love-the-build.html)
- [Setting Up Gulp Tasks for the First Time](https://www.codementor.io/development-process/tutorial/how-to-set-up-gulp-beginner-guide#/)
- [Why You Shouldn’t Create a Gulp Plugin (or, How to Stop Worrying and Learn to Love Existing Node Packages)](http://blog.overzealous.com/post/74121048393/why-you-shouldnt-create-a-gulp-plugin-or-how-to)
- [6 Gulp Best Practices You Can Use Today to Radically Improve Your Development Experience](http://blog.rangle.io/angular-gulp-bestpractices/)
- [Gulp for Beginners](https://css-tricks.com/gulp-for-beginners/)

#### Gulp 4 Tutorials

- [Migrating to Gulp 4 by Example](https://blog.wearewizards.io/migrating-to-gulp-4-by-example)
- [Gulp 4: The new task execution system - gulp.parallel and gulp.series](http://fettblog.eu/gulp-4-parallel-and-series/)

#### Gulp with Browserify

- [Gulp + Browserify, the Gulp-y Way](https://medium.com/@sogko/gulp-browserify-the-gulp-y-way-bb359b3f9623)
- [Gulp + Browserify](https://viget.com/extend/gulp-browserify-starter-faq)
- [Fast Browserify Builds with Watchify ![GitHub Repo Stars](https://img.shields.io/github/stars/gulpjs/gulp) ![GitHub last commit](https://img.shields.io/github/last-commit/gulpjs/gulp)](https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md)

#### Gulp with Angular

- [What Every Angular Project Likely Needs - and a Gulp Build to Provide It](http://blog.jhades.org/what-every-angular-project-likely-needs-and-a-gulp-build-to-provide-it/)

#### Gulp with Angular and Browserify

- [Advanced AngularJS Structure with Gulp, Node and Browserify](http://omarfouad.com/blog/2015/03/21/advanced-angularjs-structure-with-gulp-node-and-browserify/)

#### Gulp with Angular and Webpack

- [Angular, Webpack and Gulp for an SPA: Part I](https://luwenhuang.wordpress.com/2015/01/18/refactoring-an-angular-app-to-use-webpack-and-gulp/)
- [Angular, Webpack and Gulp for an SPA: Part II](https://luwenhuang.wordpress.com/2015/01/19/angular-webpack-and-gulp-for-an-spa-part-ii/)
- [Angular, Webpack and Gulp for an SPA: Part III](https://luwenhuang.wordpress.com/2015/01/28/angular-webpack-and-gulp-for-an-spa-part-iii/)

#### Gulp with React and Browserify

- [Browserify and Gulp with React](https://hacks.mozilla.org/2014/08/browserify-and-gulp-with-react/)
- [Taking React to the Next Level: Mixins, Gulp, and Browserify](http://pomax.github.io/1420592591221/taking-react-to-the-next-level-mixins-gulp-and-browserify)

#### Gulp with Ember

- [Improving Your Ember.js Workflow Using Gulp.js](http://www.sitepoint.com/improving-ember-js-workflow-using-gulp-js/)

#### Gulp with WordPress

- [Advanced WordPress Development Using Gulp](https://premium.wpmudev.org/blog/advanced-wordpress-development-using-gulp/)

### Miscellaneous Resources

- [Gulp Cheatsheet ![GitHub Repo Stars](https://img.shields.io/github/stars/osscafe/gulp-cheatsheet) ![GitHub last commit](https://img.shields.io/github/last-commit/osscafe/gulp-cheatsheet)](https://github.com/osscafe/gulp-cheatsheet)
- [Playground for Gulp Recipes ![GitHub Repo Stars](https://img.shields.io/github/stars/johnpapa/gulp-patterns) ![GitHub last commit](https://img.shields.io/github/last-commit/johnpapa/gulp-patterns)](https://github.com/johnpapa/gulp-patterns)

## Plugins

### Compilation

- [gulp-sass ![GitHub Repo Stars](https://img.shields.io/github/stars/dlmanning/gulp-sass) ![GitHub last commit](https://img.shields.io/github/last-commit/dlmanning/gulp-sass)](https://github.com/dlmanning/gulp-sass) - Sass → CSS with [libsass ![GitHub Repo Stars](https://img.shields.io/github/stars/sass/libsass) ![GitHub last commit](https://img.shields.io/github/last-commit/sass/libsass)](https://github.com/sass/libsass).
- [gulp-ruby-sass ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-ruby-sass) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-ruby-sass)](https://github.com/sindresorhus/gulp-ruby-sass) - Sass → CSS with Ruby Sass.
- [gulp-compass ![GitHub Repo Stars](https://img.shields.io/github/stars/appleboy/gulp-compass) ![GitHub last commit](https://img.shields.io/github/last-commit/appleboy/gulp-compass)](https://github.com/appleboy/gulp-compass) - Sass → CSS with Ruby Sass & Compass.
- [gulp-less ![GitHub Repo Stars](https://img.shields.io/github/stars/plus3network/gulp-less) ![GitHub last commit](https://img.shields.io/github/last-commit/plus3network/gulp-less)](https://github.com/plus3network/gulp-less) - [Less ![GitHub Repo Stars](https://img.shields.io/github/stars/less/less.js) ![GitHub last commit](https://img.shields.io/github/last-commit/less/less.js)](https://github.com/less/less.js) → CSS.
- [gulp-stylus ![GitHub Repo Stars](https://img.shields.io/github/stars/stevelacy/gulp-stylus) ![GitHub last commit](https://img.shields.io/github/last-commit/stevelacy/gulp-stylus)](https://github.com/stevelacy/gulp-stylus) - [Stylus ![GitHub Repo Stars](https://img.shields.io/github/stars/stylus/stylus) ![GitHub last commit](https://img.shields.io/github/last-commit/stylus/stylus)](https://github.com/stylus/stylus) → CSS.
- [gulp-postcss ![GitHub Repo Stars](https://img.shields.io/github/stars/postcss/gulp-postcss) ![GitHub last commit](https://img.shields.io/github/last-commit/postcss/gulp-postcss)](https://github.com/postcss/gulp-postcss) - Pipe CSS through [PostCSS ![GitHub Repo Stars](https://img.shields.io/github/stars/postcss/postcss) ![GitHub last commit](https://img.shields.io/github/last-commit/postcss/postcss)](https://github.com/postcss/postcss) processors with a single parse.
- [gulp-coffee ![GitHub Repo Stars](https://img.shields.io/github/stars/contra/gulp-coffee) ![GitHub last commit](https://img.shields.io/github/last-commit/contra/gulp-coffee)](https://github.com/contra/gulp-coffee) - [Coffeescript ![GitHub Repo Stars](https://img.shields.io/github/stars/jashkenas/coffeescript) ![GitHub last commit](https://img.shields.io/github/last-commit/jashkenas/coffeescript)](https://github.com/jashkenas/coffeescript) → JavaScript.
- [gulp-typescript ![GitHub Repo Stars](https://img.shields.io/github/stars/ivogabe/gulp-typescript) ![GitHub last commit](https://img.shields.io/github/last-commit/ivogabe/gulp-typescript)](https://github.com/ivogabe/gulp-typescript) - [TypeScript ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/TypeScript) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/TypeScript)](https://github.com/Microsoft/TypeScript) → JavaScript.
- [gulp-react ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-react) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-react)](https://github.com/sindresorhus/gulp-react) - Facebook [React ![GitHub Repo Stars](https://img.shields.io/github/stars/facebook/react) ![GitHub last commit](https://img.shields.io/github/last-commit/facebook/react)](https://github.com/facebook/react) JSX templates → JavaScript.
- [webpack-stream ![GitHub Repo Stars](https://img.shields.io/github/stars/shama/webpack-stream) ![GitHub last commit](https://img.shields.io/github/last-commit/shama/webpack-stream)](https://github.com/shama/webpack-stream) - Run [webpack ![GitHub Repo Stars](https://img.shields.io/github/stars/webpack/webpack) ![GitHub last commit](https://img.shields.io/github/last-commit/webpack/webpack)](https://github.com/webpack/webpack) as a stream to conveniently integrate with gulp.

### Transpilation

- [gulp-babel ![GitHub Repo Stars](https://img.shields.io/github/stars/babel/gulp-babel) ![GitHub last commit](https://img.shields.io/github/last-commit/babel/gulp-babel)](https://github.com/babel/gulp-babel) - ES6 → ES5 with [babel ![GitHub Repo Stars](https://img.shields.io/github/stars/babel/babel) ![GitHub last commit](https://img.shields.io/github/last-commit/babel/babel)](https://github.com/babel/babel).
- [gulp-traceur ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-traceur) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-traceur)](https://github.com/sindresorhus/gulp-traceur) - ES6 → ES5 using [Traceur ![GitHub Repo Stars](https://img.shields.io/github/stars/google/traceur-compiler) ![GitHub last commit](https://img.shields.io/github/last-commit/google/traceur-compiler)](https://github.com/google/traceur-compiler).
- [gulp-regenerator ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-regenerator) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-regenerator)](https://github.com/sindresorhus/gulp-regenerator) - ES6 → ES5 with [Regenerator ![GitHub Repo Stars](https://img.shields.io/github/stars/facebook/regenerator) ![GitHub last commit](https://img.shields.io/github/last-commit/facebook/regenerator)](https://github.com/facebook/regenerator).
- [gulp-es6-transpiler ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-es6-transpiler) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-es6-transpiler)](https://github.com/sindresorhus/gulp-es6-transpiler) - [:no_entry:] ES6 → ES5 with [es6-transpiler ![GitHub Repo Stars](https://img.shields.io/github/stars/termi/es6-transpiler) ![GitHub last commit](https://img.shields.io/github/last-commit/termi/es6-transpiler)](https://github.com/termi/es6-transpiler).
- [gulp-myth ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-myth) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-myth)](https://github.com/sindresorhus/gulp-myth) - [Myth ![GitHub Repo Stars](https://img.shields.io/github/stars/segmentio/myth) ![GitHub last commit](https://img.shields.io/github/last-commit/segmentio/myth)](https://github.com/segmentio/myth) - a polyfill for future versions of the CSS spec.
- [gulp-cssnext ![GitHub Repo Stars](https://img.shields.io/github/stars/MoOx/gulp-cssnext) ![GitHub last commit](https://img.shields.io/github/last-commit/MoOx/gulp-cssnext)](https://github.com/MoOx/gulp-cssnext) - [:no_entry:] Use tomorrow's CSS syntax, today, using [cssnext ![GitHub Repo Stars](https://img.shields.io/github/stars/MoOx/postcss-cssnext) ![GitHub last commit](https://img.shields.io/github/last-commit/MoOx/postcss-cssnext)](https://github.com/MoOx/postcss-cssnext).

### Concatenation

- [gulp-concat ![GitHub Repo Stars](https://img.shields.io/github/stars/contra/gulp-concat) ![GitHub last commit](https://img.shields.io/github/last-commit/contra/gulp-concat)](https://github.com/contra/gulp-concat) - Concatenate files.

### Minification

- [gulp-clean-css ![GitHub Repo Stars](https://img.shields.io/github/stars/scniro/gulp-clean-css) ![GitHub last commit](https://img.shields.io/github/last-commit/scniro/gulp-clean-css)](https://github.com/scniro/gulp-clean-css) - Minify CSS with [clean-css ![GitHub Repo Stars](https://img.shields.io/github/stars/jakubpawlowicz/clean-css) ![GitHub last commit](https://img.shields.io/github/last-commit/jakubpawlowicz/clean-css)](https://github.com/jakubpawlowicz/clean-css).
- [gulp-csso ![GitHub Repo Stars](https://img.shields.io/github/stars/ben-eb/gulp-csso) ![GitHub last commit](https://img.shields.io/github/last-commit/ben-eb/gulp-csso)](https://github.com/ben-eb/gulp-csso) - Minify CSS with [CSSO ![GitHub Repo Stars](https://img.shields.io/github/stars/css/csso) ![GitHub last commit](https://img.shields.io/github/last-commit/css/csso)](https://github.com/css/csso).
- [gulp-uglify ![GitHub Repo Stars](https://img.shields.io/github/stars/terinjokes/gulp-uglify) ![GitHub last commit](https://img.shields.io/github/last-commit/terinjokes/gulp-uglify)](https://github.com/terinjokes/gulp-uglify) - Minify JavaScript with [UglifyJS2 ![GitHub Repo Stars](https://img.shields.io/github/stars/mishoo/UglifyJS2) ![GitHub last commit](https://img.shields.io/github/last-commit/mishoo/UglifyJS2)](https://github.com/mishoo/UglifyJS2).
- [gulp-htmlmin ![GitHub Repo Stars](https://img.shields.io/github/stars/jonschlinkert/gulp-htmlmin) ![GitHub last commit](https://img.shields.io/github/last-commit/jonschlinkert/gulp-htmlmin)](https://github.com/jonschlinkert/gulp-htmlmin) - Minify HTML with [html-minifier ![GitHub Repo Stars](https://img.shields.io/github/stars/kangax/html-minifier) ![GitHub last commit](https://img.shields.io/github/last-commit/kangax/html-minifier)](https://github.com/kangax/html-minifier).
- [gulp-imagemin ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-imagemin) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-imagemin)](https://github.com/sindresorhus/gulp-imagemin) - Minify PNG, JPEG, GIF and SVG images with [imagemin ![GitHub Repo Stars](https://img.shields.io/github/stars/imagemin/imagemin) ![GitHub last commit](https://img.shields.io/github/last-commit/imagemin/imagemin)](https://github.com/imagemin/imagemin).
- [gulp-svgmin ![GitHub Repo Stars](https://img.shields.io/github/stars/ben-eb/gulp-svgmin) ![GitHub last commit](https://img.shields.io/github/last-commit/ben-eb/gulp-svgmin)](https://github.com/ben-eb/gulp-svgmin) - Minify SVG files with gulp.

### Optimization

- [gulp-uncss ![GitHub Repo Stars](https://img.shields.io/github/stars/ben-eb/gulp-uncss) ![GitHub last commit](https://img.shields.io/github/last-commit/ben-eb/gulp-uncss)](https://github.com/ben-eb/gulp-uncss) - Remove unused CSS selectors with [UnCSS ![GitHub Repo Stars](https://img.shields.io/github/stars/giakki/uncss) ![GitHub last commit](https://img.shields.io/github/last-commit/giakki/uncss)](https://github.com/giakki/uncss).
- [gulp-css-base64 ![GitHub Repo Stars](https://img.shields.io/github/stars/zckrs/gulp-css-base64) ![GitHub last commit](https://img.shields.io/github/last-commit/zckrs/gulp-css-base64)](https://github.com/zckrs/gulp-css-base64) - Transform all resources found (those within a url() declaration) in CSS files into base64-encoded data URI strings.
- [gulp-svg2png ![GitHub Repo Stars](https://img.shields.io/github/stars/akoenig/gulp-svg2png) ![GitHub last commit](https://img.shields.io/github/last-commit/akoenig/gulp-svg2png)](https://github.com/akoenig/gulp-svg2png) - Convert SVGs to PNGs.
- [gulp-responsive ![GitHub Repo Stars](https://img.shields.io/github/stars/mahnunchik/gulp-responsive) ![GitHub last commit](https://img.shields.io/github/last-commit/mahnunchik/gulp-responsive)](https://github.com/mahnunchik/gulp-responsive) - Generate images at different sizes.
- [gulp-svgstore ![GitHub Repo Stars](https://img.shields.io/github/stars/w0rm/gulp-svgstore) ![GitHub last commit](https://img.shields.io/github/last-commit/w0rm/gulp-svgstore)](https://github.com/w0rm/gulp-svgstore) - Combine svg files into one with `<symbol>` elements.
- [gulp-iconfont ![GitHub Repo Stars](https://img.shields.io/github/stars/nfroidure/gulp-iconfont) ![GitHub last commit](https://img.shields.io/github/last-commit/nfroidure/gulp-iconfont)](https://github.com/nfroidure/gulp-iconfont) - Create icon fonts from several SVG icons.

### Injecting Assets

- [gulp-useref ![GitHub Repo Stars](https://img.shields.io/github/stars/jonkemp/gulp-useref) ![GitHub last commit](https://img.shields.io/github/last-commit/jonkemp/gulp-useref)](https://github.com/jonkemp/gulp-useref) - Parse build blocks in HTML files to replace references to non-optimized scripts or stylesheets.
- [gulp-inject ![GitHub Repo Stars](https://img.shields.io/github/stars/klei/gulp-inject) ![GitHub last commit](https://img.shields.io/github/last-commit/klei/gulp-inject)](https://github.com/klei/gulp-inject) - Transform each file to a string and inject each transformed string into placeholders in the target stream files.
- [wiredep ![GitHub Repo Stars](https://img.shields.io/github/stars/taptapship/wiredep) ![GitHub last commit](https://img.shields.io/github/last-commit/taptapship/wiredep)](https://github.com/taptapship/wiredep) - Wire Bower dependencies to your source code.

### Templating

- [gulp-angular-templatecache ![GitHub Repo Stars](https://img.shields.io/github/stars/miickel/gulp-angular-templatecache) ![GitHub last commit](https://img.shields.io/github/last-commit/miickel/gulp-angular-templatecache)](https://github.com/miickel/gulp-angular-templatecache) - Concatenate and register AngularJS templates in the $templateCache.
- [gulp-jade ![GitHub Repo Stars](https://img.shields.io/github/stars/phated/gulp-jade) ![GitHub last commit](https://img.shields.io/github/last-commit/phated/gulp-jade)](https://github.com/phated/gulp-jade) - [Jade ![GitHub Repo Stars](https://img.shields.io/github/stars/pugjs/jade) ![GitHub last commit](https://img.shields.io/github/last-commit/pugjs/jade)](https://github.com/pugjs/jade) → HTML.
- [gulp-handlebars ![GitHub Repo Stars](https://img.shields.io/github/stars/lazd/gulp-handlebars) ![GitHub last commit](https://img.shields.io/github/last-commit/lazd/gulp-handlebars)](https://github.com/lazd/gulp-handlebars) - [Handlebars ![GitHub Repo Stars](https://img.shields.io/github/stars/wycats/handlebars.js) ![GitHub last commit](https://img.shields.io/github/last-commit/wycats/handlebars.js)](https://github.com/wycats/handlebars.js) templates → JavaScript.
- [gulp-hb ![GitHub Repo Stars](https://img.shields.io/github/stars/shannonmoeller/gulp-hb) ![GitHub last commit](https://img.shields.io/github/last-commit/shannonmoeller/gulp-hb)](https://github.com/shannonmoeller/gulp-hb) - [Handlebars ![GitHub Repo Stars](https://img.shields.io/github/stars/wycats/handlebars.js) ![GitHub last commit](https://img.shields.io/github/last-commit/wycats/handlebars.js)](https://github.com/wycats/handlebars.js) templates → HTML.
- [gulp-nunjucks ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-nunjucks) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-nunjucks)](https://github.com/sindresorhus/gulp-nunjucks) - [Nunjucks ![GitHub Repo Stars](https://img.shields.io/github/stars/mozilla/nunjucks) ![GitHub last commit](https://img.shields.io/github/last-commit/mozilla/nunjucks)](https://github.com/mozilla/nunjucks) templates → JavaScript.
- [gulp-dustjs ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-dust) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-dust)](https://github.com/sindresorhus/gulp-dust) - [Dust ![GitHub Repo Stars](https://img.shields.io/github/stars/linkedin/dustjs) ![GitHub last commit](https://img.shields.io/github/last-commit/linkedin/dustjs)](https://github.com/linkedin/dustjs) templates → JavaScript.
- [gulp-riot ![GitHub Repo Stars](https://img.shields.io/github/stars/e-jigsaw/gulp-riot) ![GitHub last commit](https://img.shields.io/github/last-commit/e-jigsaw/gulp-riot)](https://github.com/e-jigsaw/gulp-riot) - [Riot ![GitHub Repo Stars](https://img.shields.io/github/stars/riot/riot) ![GitHub last commit](https://img.shields.io/github/last-commit/riot/riot)](https://github.com/riot/riot) templates ��� JavaScript.
- [gulp-markdown ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-markdown) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-markdown)](https://github.com/sindresorhus/gulp-markdown) - Markdown → HTML.
- [gulp-template ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-template) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-template)](https://github.com/sindresorhus/gulp-template) - [Lodash ![GitHub Repo Stars](https://img.shields.io/github/stars/lodash/lodash) ![GitHub last commit](https://img.shields.io/github/last-commit/lodash/lodash)](https://github.com/lodash/lodash) templates → JavaScript.
- [gulp-swig ![GitHub Repo Stars](https://img.shields.io/github/stars/colynb/gulp-swig) ![GitHub last commit](https://img.shields.io/github/last-commit/colynb/gulp-swig)](https://github.com/colynb/gulp-swig) - [Swig ![GitHub Repo Stars](https://img.shields.io/github/stars/paularmstrong/swig) ![GitHub last commit](https://img.shields.io/github/last-commit/paularmstrong/swig)](https://github.com/paularmstrong/swig) templates → HTML.
- [gulp-remark ![GitHub Repo Stars](https://img.shields.io/github/stars/denysdovhan/gulp-remark) ![GitHub last commit](https://img.shields.io/github/last-commit/denysdovhan/gulp-remark)](https://github.com/denysdovhan/gulp-remark) - Gulp plugin for [remark ![GitHub Repo Stars](https://img.shields.io/github/stars/wooorm/remark) ![GitHub last commit](https://img.shields.io/github/last-commit/wooorm/remark)](https://github.com/wooorm/remark) - markdown processor powered by plugins

### Linting

- [gulp-csslint](https://www.npmjs.com/package/gulp-csslint) - Automated linting of CSS with [CSSLint ![GitHub Repo Stars](https://img.shields.io/github/stars/CSSLint/csslint) ![GitHub last commit](https://img.shields.io/github/last-commit/CSSLint/csslint)](https://github.com/CSSLint/csslint).
- [gulp-htmlhint ![GitHub Repo Stars](https://img.shields.io/github/stars/bezoerb/gulp-htmlhint) ![GitHub last commit](https://img.shields.io/github/last-commit/bezoerb/gulp-htmlhint)](https://github.com/bezoerb/gulp-htmlhint) - [HTMLHint ![GitHub Repo Stars](https://img.shields.io/github/stars/yaniswang/HTMLHint) ![GitHub last commit](https://img.shields.io/github/last-commit/yaniswang/HTMLHint)](https://github.com/yaniswang/HTMLHint) wrapper to validate your HTML.
- [gulp-jshint ![GitHub Repo Stars](https://img.shields.io/github/stars/spalger/gulp-jshint) ![GitHub last commit](https://img.shields.io/github/last-commit/spalger/gulp-jshint)](https://github.com/spalger/gulp-jshint) - Detect errors and potential problems in JavaScript with [JSHint ![GitHub Repo Stars](https://img.shields.io/github/stars/jshint/jshint) ![GitHub last commit](https://img.shields.io/github/last-commit/jshint/jshint)](https://github.com/jshint/jshint).
- [gulp-jscs ![GitHub Repo Stars](https://img.shields.io/github/stars/jscs-dev/gulp-jscs) ![GitHub last commit](https://img.shields.io/github/last-commit/jscs-dev/gulp-jscs)](https://github.com/jscs-dev/gulp-jscs) - Check JavaScript code style with [jscs ![GitHub Repo Stars](https://img.shields.io/github/stars/jscs-dev/node-jscs) ![GitHub last commit](https://img.shields.io/github/last-commit/jscs-dev/node-jscs)](https://github.com/jscs-dev/node-jscs).
- [gulp-coffeelint ![GitHub Repo Stars](https://img.shields.io/github/stars/janraasch/gulp-coffeelint) ![GitHub last commit](https://img.shields.io/github/last-commit/janraasch/gulp-coffeelint)](https://github.com/janraasch/gulp-coffeelint) - A style checker that helps keep [CoffeeScript ![GitHub Repo Stars](https://img.shields.io/github/stars/jashkenas/coffeescript) ![GitHub last commit](https://img.shields.io/github/last-commit/jashkenas/coffeescript)](https://github.com/jashkenas/coffeescript) code clean.
- [gulp-tslint ![GitHub Repo Stars](https://img.shields.io/github/stars/panuhorsmalahti/gulp-tslint) ![GitHub last commit](https://img.shields.io/github/last-commit/panuhorsmalahti/gulp-tslint)](https://github.com/panuhorsmalahti/gulp-tslint) - [TypeScript ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/TypeScript) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/TypeScript)](https://github.com/Microsoft/TypeScript) linter plugin for gulp.
- [gulp-eslint ![GitHub Repo Stars](https://img.shields.io/github/stars/adametry/gulp-eslint) ![GitHub last commit](https://img.shields.io/github/last-commit/adametry/gulp-eslint)](https://github.com/adametry/gulp-eslint) - Identify and report on patterns found in ECMAScript/JavaScript code.
- [gulp-w3cjs ![GitHub Repo Stars](https://img.shields.io/github/stars/callumacrae/gulp-w3cjs) ![GitHub last commit](https://img.shields.io/github/last-commit/callumacrae/gulp-w3cjs)](https://github.com/callumacrae/gulp-w3cjs) - Validate HTML with [w3cjs ![GitHub Repo Stars](https://img.shields.io/github/stars/thomasdavis/w3cjs) ![GitHub last commit](https://img.shields.io/github/last-commit/thomasdavis/w3cjs)](https://github.com/thomasdavis/w3cjs).
- [gulp-lesshint ![GitHub Repo Stars](https://img.shields.io/github/stars/lesshint/gulp-lesshint) ![GitHub last commit](https://img.shields.io/github/last-commit/lesshint/gulp-lesshint)](https://github.com/lesshint/gulp-lesshint) - Lint less files with [lesshint ![GitHub Repo Stars](https://img.shields.io/github/stars/lesshint/lesshint) ![GitHub last commit](https://img.shields.io/github/last-commit/lesshint/lesshint)](https://github.com/lesshint/lesshint).
- [gulp-check-unused-css ![GitHub Repo Stars](https://img.shields.io/github/stars/zalando/gulp-check-unused-css) ![GitHub last commit](https://img.shields.io/github/last-commit/zalando/gulp-check-unused-css)](https://github.com/zalando/gulp-check-unused-css) - Check your HTML templates for unused CSS classes.

### Live Reload

- [browser-sync ![GitHub Repo Stars](https://img.shields.io/github/stars/BrowserSync/browser-sync) ![GitHub last commit](https://img.shields.io/github/last-commit/BrowserSync/browser-sync)](https://github.com/BrowserSync/browser-sync) - Keep multiple browsers & devices in sync when building websites ([recipes ![GitHub Repo Stars](https://img.shields.io/github/stars/BrowserSync/gulp-browser-sync) ![GitHub last commit](https://img.shields.io/github/last-commit/BrowserSync/gulp-browser-sync)](https://github.com/BrowserSync/gulp-browser-sync)).
- [gulp-livereload ![GitHub Repo Stars](https://img.shields.io/github/stars/vohof/gulp-livereload) ![GitHub last commit](https://img.shields.io/github/last-commit/vohof/gulp-livereload)](https://github.com/vohof/gulp-livereload) - Gulp plugin for livereload.

### Caching

- [gulp-changed ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-changed) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-changed)](https://github.com/sindresorhus/gulp-changed) - Only pass through changed files.
- [gulp-cached ![GitHub Repo Stars](https://img.shields.io/github/stars/contra/gulp-cached) ![GitHub last commit](https://img.shields.io/github/last-commit/contra/gulp-cached)](https://github.com/contra/gulp-cached) - A simple in-memory file cache.
- [gulp-remember ![GitHub Repo Stars](https://img.shields.io/github/stars/ahaurw01/gulp-remember) ![GitHub last commit](https://img.shields.io/github/last-commit/ahaurw01/gulp-remember)](https://github.com/ahaurw01/gulp-remember) - Remember and recall files passed through it.
- [gulp-newer ![GitHub Repo Stars](https://img.shields.io/github/stars/tschaub/gulp-newer) ![GitHub last commit](https://img.shields.io/github/last-commit/tschaub/gulp-newer)](https://github.com/tschaub/gulp-newer) - Pass through newer source files only.

### Flow Control

- [merge-stream ![GitHub Repo Stars](https://img.shields.io/github/stars/grncdr/merge-stream) ![GitHub last commit](https://img.shields.io/github/last-commit/grncdr/merge-stream)](https://github.com/grncdr/merge-stream) - Merge multiple streams into one interleaved stream.
- [streamqueue ![GitHub Repo Stars](https://img.shields.io/github/stars/nfroidure/StreamQueue) ![GitHub last commit](https://img.shields.io/github/last-commit/nfroidure/StreamQueue)](https://github.com/nfroidure/StreamQueue) - Pipe queued streams progressively.
- [run-sequence ![GitHub Repo Stars](https://img.shields.io/github/stars/OverZealous/run-sequence) ![GitHub last commit](https://img.shields.io/github/last-commit/OverZealous/run-sequence)](https://github.com/OverZealous/run-sequence) - Run a series of dependent gulp tasks in order.
- [gulp-if ![GitHub Repo Stars](https://img.shields.io/github/stars/robrich/gulp-if) ![GitHub last commit](https://img.shields.io/github/last-commit/robrich/gulp-if)](https://github.com/robrich/gulp-if) - Conditionally run a task.

### Logging

- [gulp-notify ![GitHub Repo Stars](https://img.shields.io/github/stars/mikaelbr/gulp-notify) ![GitHub last commit](https://img.shields.io/github/last-commit/mikaelbr/gulp-notify)](https://github.com/mikaelbr/gulp-notify) - Notification plugin for gulp.
- [gulp-size ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-size) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-size)](https://github.com/sindresorhus/gulp-size) - Display the size of your project.
- [gulp-debug ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-debug) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-debug)](https://github.com/sindresorhus/gulp-debug) - Debug vinyl file streams to see what files are run through your gulp pipeline.
- [gulp-beer ![GitHub Repo Stars](https://img.shields.io/github/stars/lordgiotto/gulp-beer) ![GitHub last commit](https://img.shields.io/github/last-commit/lordgiotto/gulp-beer)](https://github.com/lordgiotto/gulp-beer) - Better Error Reporting with interactive system notifications and custom server for error displaying.

### Testing

- [gulp-mocha ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-mocha) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-mocha)](https://github.com/sindresorhus/gulp-mocha) - Run [Mocha ![GitHub Repo Stars](https://img.shields.io/github/stars/mochajs/mocha) ![GitHub last commit](https://img.shields.io/github/last-commit/mochajs/mocha)](https://github.com/mochajs/mocha) tests.
- [gulp-jasmine ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-jasmine) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-jasmine)](https://github.com/sindresorhus/gulp-jasmine) - Run [Jasmine 2 ![GitHub Repo Stars](https://img.shields.io/github/stars/jasmine/jasmine) ![GitHub last commit](https://img.shields.io/github/last-commit/jasmine/jasmine)](https://github.com/jasmine/jasmine) tests in Node.js.
- [gulp-protractor ![GitHub Repo Stars](https://img.shields.io/github/stars/mllrsohn/gulp-protractor) ![GitHub last commit](https://img.shields.io/github/last-commit/mllrsohn/gulp-protractor)](https://github.com/mllrsohn/gulp-protractor) - Gulp wrapper for [Protractor ![GitHub Repo Stars](https://img.shields.io/github/stars/angular/protractor) ![GitHub last commit](https://img.shields.io/github/last-commit/angular/protractor)](https://github.com/angular/protractor) tests.
- [gulp-coverage ![GitHub Repo Stars](https://img.shields.io/github/stars/dylanb/gulp-coverage) ![GitHub last commit](https://img.shields.io/github/last-commit/dylanb/gulp-coverage)](https://github.com/dylanb/gulp-coverage) - Coverage reporting for Node.js that is independent of the test runner.
- [gulp-karma ![GitHub Repo Stars](https://img.shields.io/github/stars/karma-runner/gulp-karma) ![GitHub last commit](https://img.shields.io/github/last-commit/karma-runner/gulp-karma)](https://github.com/karma-runner/gulp-karma) - Karma test runner for gulp.
- [gulp-ava ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-ava) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-ava)](https://github.com/sindresorhus/gulp-ava)- Run [AVA ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/ava) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/ava)](https://github.com/sindresorhus/ava) tests with gulp.

### Miscellaneous Plugins

- [gulp-util ![GitHub Repo Stars](https://img.shields.io/github/stars/gulpjs/gulp-util) ![GitHub last commit](https://img.shields.io/github/last-commit/gulpjs/gulp-util)](https://github.com/gulpjs/gulp-util) - Set of useful utilities.
- [gulp-plumber ![GitHub Repo Stars](https://img.shields.io/github/stars/floatdrop/gulp-plumber) ![GitHub last commit](https://img.shields.io/github/last-commit/floatdrop/gulp-plumber)](https://github.com/floatdrop/gulp-plumber) - Prevent pipe breaking caused by errors.
- [gulp-load-plugins ![GitHub Repo Stars](https://img.shields.io/github/stars/jackfranklin/gulp-load-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/jackfranklin/gulp-load-plugins)](https://github.com/jackfranklin/gulp-load-plugins) - Automatically load in gulp plugins.
- [main-bower-files ![GitHub Repo Stars](https://img.shields.io/github/stars/ck86/main-bower-files) ![GitHub last commit](https://img.shields.io/github/last-commit/ck86/main-bower-files)](https://github.com/ck86/main-bower-files) - Simplify build process setup by dynamically getting the library files.
- [autoprefixer ![GitHub Repo Stars](https://img.shields.io/github/stars/postcss/autoprefixer) ![GitHub last commit](https://img.shields.io/github/last-commit/postcss/autoprefixer)](https://github.com/postcss/autoprefixer) - Parse CSS and add vendor prefixes to rules by Can I Use.
- [gulp-sourcemaps ![GitHub Repo Stars](https://img.shields.io/github/stars/floridoo/gulp-sourcemaps) ![GitHub last commit](https://img.shields.io/github/last-commit/floridoo/gulp-sourcemaps)](https://github.com/floridoo/gulp-sourcemaps) - Provide source map support.
- [gulp-replace ![GitHub Repo Stars](https://img.shields.io/github/stars/lazd/gulp-replace) ![GitHub last commit](https://img.shields.io/github/last-commit/lazd/gulp-replace)](https://github.com/lazd/gulp-replace) - A string replace plugin for gulp.
- [gulp-rename ![GitHub Repo Stars](https://img.shields.io/github/stars/hparra/gulp-rename) ![GitHub last commit](https://img.shields.io/github/last-commit/hparra/gulp-rename)](https://github.com/hparra/gulp-rename) - Rename files easily.
- [gulp-rev ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-rev) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-rev)](https://github.com/sindresorhus/gulp-rev) - Static asset revisioning by appending content hash to filenames: unicorn.css → unicorn-d41d8cd98f.css.
- [del ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/del) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/del)](https://github.com/sindresorhus/del) - Delete files/folders using globs.
- [gulp-exec ![GitHub Repo Stars](https://img.shields.io/github/stars/robrich/gulp-exec) ![GitHub last commit](https://img.shields.io/github/last-commit/robrich/gulp-exec)](https://github.com/robrich/gulp-exec) - Run a shell command.
- [gulp-strip-debug ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-strip-debug) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-strip-debug)](https://github.com/sindresorhus/gulp-strip-debug) - Strip console, alert, and debugger statements from JavaScript code.
- [gulp-cssimport ![GitHub Repo Stars](https://img.shields.io/github/stars/unlight/gulp-cssimport) ![GitHub last commit](https://img.shields.io/github/last-commit/unlight/gulp-cssimport)](https://github.com/unlight/gulp-cssimport) - Parses a CSS file, finds imports, grabs the content of the linked file and replaces the import statement with it.
- [gulp-inline-css ![GitHub Repo Stars](https://img.shields.io/github/stars/jonkemp/gulp-inline-css) ![GitHub last commit](https://img.shields.io/github/last-commit/jonkemp/gulp-inline-css)](https://github.com/jonkemp/gulp-inline-css) - Inline your CSS properties into the style attribute in an HTML file.
- [gulp-gh-pages ![GitHub Repo Stars](https://img.shields.io/github/stars/shinnn/gulp-gh-pages) ![GitHub last commit](https://img.shields.io/github/last-commit/shinnn/gulp-gh-pages)](https://github.com/shinnn/gulp-gh-pages) - Publish contents to Github pages.
- [gulp-ng-annotate ![GitHub Repo Stars](https://img.shields.io/github/stars/Kagami/gulp-ng-annotate) ![GitHub last commit](https://img.shields.io/github/last-commit/Kagami/gulp-ng-annotate)](https://github.com/Kagami/gulp-ng-annotate) - Add AngularJS dependency injection annotations with [ng-annotate ![GitHub Repo Stars](https://img.shields.io/github/stars/olov/ng-annotate) ![GitHub last commit](https://img.shields.io/github/last-commit/olov/ng-annotate)](https://github.com/olov/ng-annotate).
- [gulp-bump ![GitHub Repo Stars](https://img.shields.io/github/stars/stevelacy/gulp-bump) ![GitHub last commit](https://img.shields.io/github/last-commit/stevelacy/gulp-bump)](https://github.com/stevelacy/gulp-bump) - Bump any semver JSON version.
- [gulp-file-include ![GitHub Repo Stars](https://img.shields.io/github/stars/coderhaoxin/gulp-file-include) ![GitHub last commit](https://img.shields.io/github/last-commit/coderhaoxin/gulp-file-include)](https://github.com/coderhaoxin/gulp-file-include) - Include files with gulp.
- [gulp-zip ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-zip) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-zip)](https://github.com/sindresorhus/gulp-zip) - ZIP compress files.
- [gulp-git ![GitHub Repo Stars](https://img.shields.io/github/stars/stevelacy/gulp-git) ![GitHub last commit](https://img.shields.io/github/last-commit/stevelacy/gulp-git)](https://github.com/stevelacy/gulp-git) - Run Git commands with gulp.
- [gulp-filter ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-filter) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-filter)](https://github.com/sindresorhus/gulp-filter) - Filter files in a vinyl stream using globbing.
- [gulp-preprocess ![GitHub Repo Stars](https://img.shields.io/github/stars/jas/gulp-preprocess) ![GitHub last commit](https://img.shields.io/github/last-commit/jas/gulp-preprocess)](https://github.com/jas/gulp-preprocess) - Preprocess files based on custom context or environment configuration.
- [gulp-eval ![GitHub Repo Stars](https://img.shields.io/github/stars/gulp-bem/gulp-eval) ![GitHub last commit](https://img.shields.io/github/last-commit/gulp-bem/gulp-eval)](https://github.com/gulp-bem/gulp-eval) - Eval JS-expression or require CommonJS modules and JSON files.

## Scaffolding

### Boilerplates

- [web-starter-kit ![GitHub Repo Stars](https://img.shields.io/github/stars/google/web-starter-kit) ![GitHub last commit](https://img.shields.io/github/last-commit/google/web-starter-kit)](https://github.com/google/web-starter-kit) - Google Web Starter Kit.
- [gulp-plugin-boilerplate ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-plugin-boilerplate) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-plugin-boilerplate)](https://github.com/sindresorhus/gulp-plugin-boilerplate) - Boilerplate to kickstart creating gulp plugins.
- [polymer-starter-kit ![GitHub Repo Stars](https://img.shields.io/github/stars/polymerelements/polymer-starter-kit) ![GitHub last commit](https://img.shields.io/github/last-commit/polymerelements/polymer-starter-kit)](https://github.com/polymerelements/polymer-starter-kit) - A starting point for Polymer 1.0 apps.
- [este ![GitHub Repo Stars](https://img.shields.io/github/stars/este/este) ![GitHub last commit](https://img.shields.io/github/last-commit/este/este)](https://github.com/este/este) - The most complete React/Flux dev stack and starter kit for isomorphic functional web apps.
- [mnml ![GitHub Repo Stars](https://img.shields.io/github/stars/mrmrs/mnml) ![GitHub last commit](https://img.shields.io/github/last-commit/mrmrs/mnml)](https://github.com/mrmrs/mnml) - Minimal boilerplate to start a responsive HTML5/Sass project.
- [kraken ![GitHub Repo Stars](https://img.shields.io/github/stars/cferdinandi/kraken) ![GitHub last commit](https://img.shields.io/github/last-commit/cferdinandi/kraken)](https://github.com/cferdinandi/kraken) - A lightweight, mobile-first boilerplate for front-end web developers.
- [angularjs-gulp-browserify-boilerplate ![GitHub Repo Stars](https://img.shields.io/github/stars/jakemmarsh/angularjs-gulp-browserify-boilerplate) ![GitHub last commit](https://img.shields.io/github/last-commit/jakemmarsh/angularjs-gulp-browserify-boilerplate)](https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate) - Boilerplate using AngularJS, Sass, gulp, and Browserify.
- [hapi-ninja ![GitHub Repo Stars](https://img.shields.io/github/stars/poeticninja/hapi-ninja) ![GitHub last commit](https://img.shields.io/github/last-commit/poeticninja/hapi-ninja)](https://github.com/poeticninja/hapi-ninja) - A Node.js, Hapi, and Swig boilerplate.
- [laravel-5-boilerplate ![GitHub Repo Stars](https://img.shields.io/github/stars/rappasoft/laravel-5-boilerplate) ![GitHub last commit](https://img.shields.io/github/last-commit/rappasoft/laravel-5-boilerplate)](https://github.com/rappasoft/laravel-5-boilerplate) - A Laravel 5 boilerplate project.
- [react-starterkit ![GitHub Repo Stars](https://img.shields.io/github/stars/wbkd/react-starterkit) ![GitHub last commit](https://img.shields.io/github/last-commit/wbkd/react-starterkit)](https://github.com/wbkd/react-starterkit) - React starter kit that contains react-router, Reflux, jest, webpack, gulp and Stylus.
- [gulp-front ![GitHub Repo Stars](https://img.shields.io/github/stars/zoxon/gulp-front) ![GitHub last commit](https://img.shields.io/github/last-commit/zoxon/gulp-front)](https://github.com/zoxon/gulp-front) - Frontend boilerplate and modular BEM css framework based on gulp, pug, stylus, postcss, webpack and babel.
- [Front End Starter ![GitHub Repo Stars](https://img.shields.io/github/stars/Puritanic/Frontend-Starter-Kit) ![GitHub last commit](https://img.shields.io/github/last-commit/Puritanic/Frontend-Starter-Kit)](https://github.com/Puritanic/Frontend-Starter-Kit) - A boilerplate for frontend projects powered by Gulp, HTML5 bolierplate, Sass, PostCss and Webpack(for Babel transpiling).

### Yeoman Generators

- [generator-gulp-webapp ![GitHub Repo Stars](https://img.shields.io/github/stars/yeoman/generator-gulp-webapp) ![GitHub last commit](https://img.shields.io/github/last-commit/yeoman/generator-gulp-webapp)](https://github.com/yeoman/generator-gulp-webapp) - A gulp generator for modern webapps.
- [generator-gulp-angular ![GitHub Repo Stars](https://img.shields.io/github/stars/Swiip/generator-gulp-angular) ![GitHub last commit](https://img.shields.io/github/last-commit/Swiip/generator-gulp-angular)](https://github.com/Swiip/generator-gulp-angular) - Yeoman generator for AngularJS with gulp.
- [generator-react-gulp-browserify ![GitHub Repo Stars](https://img.shields.io/github/stars/randylien/generator-react-gulp-browserify) ![GitHub last commit](https://img.shields.io/github/last-commit/randylien/generator-react-gulp-browserify)](https://github.com/randylien/generator-react-gulp-browserify) - A Yeoman Generator for React library. It includes gulp, Browserify, Browsersync and Bootstrap.
- [generator-node-gulp ![GitHub Repo Stars](https://img.shields.io/github/stars/youngmountain/generator-node-gulp) ![GitHub last commit](https://img.shields.io/github/last-commit/youngmountain/generator-node-gulp)](https://github.com/youngmountain/generator-node-gulp) - A Node.js module generator including gulp and Mocha.
- [generator-gulp-bootstrap ![GitHub Repo Stars](https://img.shields.io/github/stars/niallobrien/generator-gulp-bootstrap) ![GitHub last commit](https://img.shields.io/github/last-commit/niallobrien/generator-gulp-bootstrap)](https://github.com/niallobrien/generator-gulp-bootstrap) - Yeoman generator for Bootstrap, gulp & libsass.
- [generator-angulpify ![GitHub Repo Stars](https://img.shields.io/github/stars/jgoux/generator-angulpify) ![GitHub last commit](https://img.shields.io/github/last-commit/jgoux/generator-angulpify)](https://github.com/jgoux/generator-angulpify) - Yeoman generator involving AngularJS, gulp and Browserify.
- [generator-ionic-gulp ![GitHub Repo Stars](https://img.shields.io/github/stars/tmaximini/generator-ionic-gulp) ![GitHub last commit](https://img.shields.io/github/last-commit/tmaximini/generator-ionic-gulp)](https://github.com/tmaximini/generator-ionic-gulp) - A Yeoman generator for Ionic Projects with gulp.
- [generator-gulp-plugin-boilerplate ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/generator-gulp-plugin-boilerplate) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/generator-gulp-plugin-boilerplate)](https://github.com/sindresorhus/generator-gulp-plugin-boilerplate) - Scaffold out a [gulp plugin boilerplate ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-plugin-boilerplate) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-plugin-boilerplate)](https://github.com/sindresorhus/gulp-plugin-boilerplate).
- [generator-jekyllized ![GitHub Repo Stars](https://img.shields.io/github/stars/sondr3/generator-jekyllized) ![GitHub last commit](https://img.shields.io/github/last-commit/sondr3/generator-jekyllized)](https://github.com/sondr3/generator-jekyllized) - Jekyll workflow with gulp, Sass, AutoPrefixer, asset optimization and cache busting and much more.

## Miscellaneous

- [elixir ![GitHub Repo Stars](https://img.shields.io/github/stars/laravel/elixir) ![GitHub last commit](https://img.shields.io/github/last-commit/laravel/elixir)](https://github.com/laravel/elixir) - A clean, fluent API for defining basic gulp tasks for your Laravel applications.
- [gulp-app ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gulp-app) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gulp-app)](https://github.com/sindresorhus/gulp-app) - Gulp as an app (OS X).
- [lmn-gulp-tasks ![GitHub Repo Stars](https://img.shields.io/github/stars/Lostmyname/lmn-gulp-tasks) ![GitHub last commit](https://img.shields.io/github/last-commit/Lostmyname/lmn-gulp-tasks)](https://github.com/Lostmyname/lmn-gulp-tasks) - Example of gulp tasks unit testing.
- [gulp-chef](http://gulp-cookery.github.io/gulp-chef/) - An elegant, intuitive way to reuse gulp tasks.

## License

[![CC0](http://i.creativecommons.org/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Philipp Alferov](https://github.com/alferov) has waived all copyright and related or neighboring rights to this work.
