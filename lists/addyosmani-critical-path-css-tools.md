Critical-path (Above-the-fold) CSS Tools [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
==========================================

> Tools to help prioritize above-the-fold CSS

### Prioritize above-the-fold content first.

For best performance, PageSpeed Insights [recommends](https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent) inlining the critical (above-the-fold) CSS of your page directly into your HTML. This eliminates additional roundtrips and allows the browser to paint the above-fold experience to your user's screen sooner. The main idea is:

* Determine the above-the-fold styles for a page and write them between `<style>` tags in the head.
* Load all other stylesheets in the footer, ideally asynchronously.

The following is a list of tools to help generate, inline and report on critical-path CSS.

## Node modules


* [Penthouse ![GitHub Repo Stars](https://img.shields.io/github/stars/pocketjoso/penthouse) ![GitHub last commit](https://img.shields.io/github/last-commit/pocketjoso/penthouse)](https://github.com/pocketjoso/penthouse) - by Jonas Ohlsson generates critical-path CSS
* [Critical ![GitHub Repo Stars](https://img.shields.io/github/stars/addyosmani/critical) ![GitHub last commit](https://img.shields.io/github/last-commit/addyosmani/critical)](https://github.com/addyosmani/critical) - by Addy Osmani generates & inlines critical-path CSS (uses Penthouse, [Oust ![GitHub Repo Stars](https://img.shields.io/github/stars/addyosmani/oust) ![GitHub last commit](https://img.shields.io/github/last-commit/addyosmani/oust)](https://github.com/addyosmani/oust) and inline-styles)
* [CriticalCSS ![GitHub Repo Stars](https://img.shields.io/github/stars/filamentgroup/criticalcss) ![GitHub last commit](https://img.shields.io/github/last-commit/filamentgroup/criticalcss)](https://github.com/filamentgroup/criticalcss) - by FilamentGroup finds & outputs critical CSS


## Server-side modules

* [mod_pagespeed ![GitHub Repo Stars](https://img.shields.io/github/stars/pagespeed/mod_pagespeed) ![GitHub last commit](https://img.shields.io/github/last-commit/pagespeed/mod_pagespeed)](https://github.com/pagespeed/mod_pagespeed) - Apache module for automatic PageSpeed optimization
* [ngx_pagespeed ![GitHub Repo Stars](https://img.shields.io/github/stars/pagespeed/ngx_pagespeed) ![GitHub last commit](https://img.shields.io/github/last-commit/pagespeed/ngx_pagespeed)](https://github.com/pagespeed/ngx_pagespeed) - Nginx module for automatic PageSpeed optimization

## Grunt tasks

* [grunt-penthouse ![GitHub Repo Stars](https://img.shields.io/github/stars/fatso83/grunt-penthouse) ![GitHub last commit](https://img.shields.io/github/last-commit/fatso83/grunt-penthouse)](https://github.com/fatso83/grunt-penthouse)
* [grunt-critical-css ![GitHub Repo Stars](https://img.shields.io/github/stars/filamentgroup/grunt-criticalcss) ![GitHub last commit](https://img.shields.io/github/last-commit/filamentgroup/grunt-criticalcss)](https://github.com/filamentgroup/grunt-criticalcss)
* [grunt-critical ![GitHub Repo Stars](https://img.shields.io/github/stars/bezoerb/grunt-critical) ![GitHub last commit](https://img.shields.io/github/last-commit/bezoerb/grunt-critical)](https://github.com/bezoerb/grunt-critical)

## CasperJS

* [critical-css-casperjs ![GitHub Repo Stars](https://img.shields.io/github/stars/ibrennan/critical-css-casperjs) ![GitHub last commit](https://img.shields.io/github/last-commit/ibrennan/critical-css-casperjs)](https://github.com/ibrennan/critical-css-casperjs) - CasperJS script to pull critical CSS information from pages

## PhantomJS

* [dr-css-inliner ![GitHub Repo Stars](https://img.shields.io/github/stars/drdk/dr-css-inliner) ![GitHub last commit](https://img.shields.io/github/last-commit/drdk/dr-css-inliner)](https://github.com/drdk/dr-css-inliner) - PhantomJS script to inline above-the-fold CSS on a page.

## Inline sources (styles, scripts)

* [inline-styles ![GitHub Repo Stars](https://img.shields.io/github/stars/maxogden/inline-styles) ![GitHub last commit](https://img.shields.io/github/last-commit/maxogden/inline-styles)](https://github.com/maxogden/inline-styles) - by Max Ogden, replaces `<link>` tags with inline `<style>` tags + inlines CSS url() calls with data URIs
* [gulp-inline-source ![GitHub Repo Stars](https://img.shields.io/github/stars/fmal/gulp-inline-source) ![GitHub last commit](https://img.shields.io/github/last-commit/fmal/gulp-inline-source)](https://github.com/fmal/gulp-inline-source) - by Filip Malinowski, replaces `<link>` tags with inline `<style>` tags, and replaces `<script src="">` tags with their inline content
* [inline-critical ![GitHub Repo Stars](https://img.shields.io/github/stars/bezoerb/inline-critical) ![GitHub last commit](https://img.shields.io/github/last-commit/bezoerb/inline-critical)](https://github.com/bezoerb/inline-critical) - by Ben Zörb, inline critical path CSS and load existing stylesheets with `loadCSS`
* [isomorphic-style-loader ![GitHub Repo Stars](https://img.shields.io/github/stars/kriasoft/isomorphic-style-loader) ![GitHub last commit](https://img.shields.io/github/last-commit/kriasoft/isomorphic-style-loader)](https://github.com/kriasoft/isomorphic-style-loader/) for Webpack - allows to extract critical CSS for any given page/screen in React apps and inline it into HTML during server-side rendering (SSR). See [React Starter Kit ![GitHub Repo Stars](https://img.shields.io/github/stars/kriasoft/react-starter-kit) ![GitHub last commit](https://img.shields.io/github/last-commit/kriasoft/react-starter-kit)](https://github.com/kriasoft/react-starter-kit) as an example.

## Async load CSS

Async loading should be used to fetch the rest of your site-wide styles after you've inlined your critical-path CSS.

* [loadCSS ![GitHub Repo Stars](https://img.shields.io/github/stars/filamentgroup/loadCSS) ![GitHub last commit](https://img.shields.io/github/last-commit/filamentgroup/loadCSS)](https://github.com/filamentgroup/loadCSS) - loads CSS asynchronously using JS. [Research](https://gist.github.com/scottjehl/87176715419617ae6994) that led to this is also available.
* [async & conditional loading](https://gist.github.com/matt-bailey/602b40c77a5d3381ff26) - POC script for loading CSS files asynchronously and conditionally based on body tag classes
* [asyncLoader ![GitHub Repo Stars](https://img.shields.io/github/stars/n0mad01/asyncLoader) ![GitHub last commit](https://img.shields.io/github/last-commit/n0mad01/asyncLoader)](https://github.com/n0mad01/asyncLoader) - async script/stylesheet loader
* [basket.js](http://addyosmani.github.io/basket.js/) - async script/resource loader with support for localStorage caching. Can be [extended ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewwakeling/basket-css-example) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewwakeling/basket-css-example)](https://github.com/andrewwakeling/basket-css-example) to load stylesheets.

Note: The Guardian currently also cache their global styles into localStorage for subsequent page loads. More info in this [comment](https://gist.github.com/scottjehl/87176715419617ae6994).

## Online tools

* [Penthouse online](https://jonassebastianohlsson.com/criticalpathcssgenerator/)

## Bookmarklets/Extensions

* [Snippet](https://gist.github.com/PaulKinlan/6284142) by Paul Kinlan. Patrick Hamann has an [exercise](http://patrickhamann.com/workshops/performance/tasks/2_Critical_Path/2_2.html) using the snippet you can try out.
* [Snippet](https://gist.github.com/scottjehl/b6129da04733e4e0f9a4) by Scott Jehl
* [CSSVacuum ![GitHub Repo Stars](https://img.shields.io/github/stars/ndreckshage/CSSVacuum) ![GitHub last commit](https://img.shields.io/github/last-commit/ndreckshage/CSSVacuum)](https://github.com/ndreckshage/CSSVacuum) by ndreckshage

## Render-blocking issues detection

* [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) - Online tool that measures the performance of a page for mobile devices and desktop devices. It fetches the url twice, once with a mobile user-agent, and once with a desktop-user agent. 
* [PSI ![GitHub Repo Stars](https://img.shields.io/github/stars/addyosmani/psi) ![GitHub last commit](https://img.shields.io/github/last-commit/addyosmani/psi)](https://github.com/addyosmani/psi) - Node module for PageSpeed Insights reporting as part of your build process. Use directly with Gulp or use [grunt-pagespeed ![GitHub Repo Stars](https://img.shields.io/github/stars/jrcryer/grunt-pagespeed) ![GitHub last commit](https://img.shields.io/github/last-commit/jrcryer/grunt-pagespeed)](https://github.com/jrcryer/grunt-pagespeed) if a Grunt user. For local testing, a write-up using this task and [ngrok](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/) is available.
* [PageSpeed Insights DevTools extension](https://chrome.google.com/webstore/detail/pagespeed-insights-by-goo/gplegfbjlmmehdoakndmohflojccocli?hl=en) - Chrome extension for running PageSpeed tests from inside the browser.
* [PageSpeed Insights Checker for mobile extension](https://chrome.google.com/webstore/detail/pagespeed-insights-checke/mkjmodmicmpjedhoekkmafdgpocdkbna?hl=en) - checks Mobile PageSpeed score for every page and gives you a handy preview.

## Supplementary tools

* [UnCSS ![GitHub Repo Stars](https://img.shields.io/github/stars/giakki/uncss) ![GitHub last commit](https://img.shields.io/github/last-commit/giakki/uncss)](https://github.com/giakki/uncss) removes unused CSS from pages, allowing you to reduce the global CSS you may need to load in for your site. Tasks are available for [Grunt ![GitHub Repo Stars](https://img.shields.io/github/stars/addyosmani/grunt-uncss) ![GitHub last commit](https://img.shields.io/github/last-commit/addyosmani/grunt-uncss)](https://github.com/addyosmani/grunt-uncss), [Gulp ![GitHub Repo Stars](https://img.shields.io/github/stars/ben-eb/gulp-uncss) ![GitHub last commit](https://img.shields.io/github/last-commit/ben-eb/gulp-uncss)](https://github.com/ben-eb/gulp-uncss) and [other](https://addyosmani.com/blog/removing-unused-css/) build tools.

