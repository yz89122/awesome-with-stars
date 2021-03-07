<a href="https://promisesaplus.com/">
    <img src="https://promisesaplus.com/assets/logo-small.png" alt="Promises/A+ logo" align="right" />
</a>

# Awesome Promises [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> A curated list of useful resources for JavaScript Promises

Inspired by the [awesome ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome)](https://github.com/sindresorhus/awesome) list thing. Not to be confused with other awesome promises like "I promise you a million dollars" or "I promise you'll stay fit and never have to go to the gym again".

**Table of Contents**

- [Resources, Blogs, and Books](#resources-blogs-and-books)
- [Promises/A+ Implementations (ES6/ES2015 compatible)](#promisesa-implementations-es6es2015-compatible)
  - [Strict Implementations](#strict-implementations)
  - [Implementations with extras](#implementations-with-extras)
  - [Fallbacks](#fallbacks)
- [Convenience Utilities](#convenience-utilities)

## Resources, Blogs, and Books

### For beginners
* [Promise Cookbook ![GitHub Repo Stars](https://img.shields.io/github/stars/mattdesl/promise-cookbook) ![GitHub last commit](https://img.shields.io/github/last-commit/mattdesl/promise-cookbook)](https://github.com/mattdesl/promise-cookbook) - The why, what, and how. "A brief introduction [...] primarily aimed at frontend developers".
* [Promises for Asynchronous Programming](http://exploringjs.com/es6/ch_promises.html) - Chapter from [Exploring ES6](http://exploringjs.com/)
* [You Don't Know JS: Promises ![GitHub Repo Stars](https://img.shields.io/github/stars/getify/You-Dont-Know-JS) ![GitHub last commit](https://img.shields.io/github/last-commit/getify/You-Dont-Know-JS)](https://github.com/getify/You-Dont-Know-JS/blob/master/async%20&%20performance/ch3.md) - Chapter from [You Don't Know JS: Async & Performance ![GitHub Repo Stars](https://img.shields.io/github/stars/getify/You-Dont-Know-JS) ![GitHub last commit](https://img.shields.io/github/last-commit/getify/You-Dont-Know-JS)](https://github.com/getify/You-Dont-Know-JS/tree/master/async%20%26%20performance)
* [JavaScript Promises: an Introduction](https://developers.google.com/web/fundamentals/getting-started/primers/promises) - Basics of JavaScript's native promise implementation.
* [JavaScript with Promises](http://shop.oreilly.com/product/0636920032151.do) - from O'Reilly. Short and to-the-point. Uses native and bluebird.
* [Promise it won't hurt ![GitHub Repo Stars](https://img.shields.io/github/stars/stevekane/promise-it-wont-hurt) ![GitHub last commit](https://img.shields.io/github/last-commit/stevekane/promise-it-wont-hurt)](https://github.com/stevekane/promise-it-wont-hurt) - An interactive [nodeschool](https://nodeschool.io/) workshop
* [ES6 Kata Promises](http://es6katas.org/) - Promises Katas : [Basics](http://tddbin.com/#?kata=es6/language/promise/basics)
* [ES6 Promises in Depth](https://ponyfoo.com/articles/es6-promises-in-depth)
* [An Incremental Tutorial on Promises](http://www.sohamkamani.com/blog/2016/08/28/incremenal-tutorial-to-promises/) - An FAQ styled tutorial for beginners.

### Deep Dive
* [Promise Fun ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/promise-fun) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/promise-fun)](https://github.com/sindresorhus/promise-fun) - @sindresorhus's notes, patterns, and solutions to common Promise problems
* [You're Missing the Point of Promises](https://blog.domenic.me/youre-missing-the-point-of-promises/) - Promises are much more than callback aggregation, and that jQuery's implementation (prior to 3.0) isn't enough.
* [We have a problem with promises](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html) - "Many of us are using promises without really understanding them."
* [Promise anti-patterns ![GitHub Repo Stars](https://img.shields.io/github/stars/petkaantonov/bluebird) ![GitHub last commit](https://img.shields.io/github/last-commit/petkaantonov/bluebird)](https://github.com/petkaantonov/bluebird/wiki/Promise-anti-patterns) - Common misuses and how to avoid them.
* [Promise anti-patterns (2)](http://taoofcode.net/promise-anti-patterns/) - Another set of promises anti-patterns
* [Promise Ponderings, (Anti-)Patterns, and Apologies](https://sdgluck.github.io/2015/08/24/promise-ponderings-patterns-apologies/) - Promise behaviour demonstrated and explained by common questions and their answers.
* [Javascript Promises...In Wicked Detail](http://www.mattgreer.org/articles/promises-in-wicked-detail/) - Recreate the promise implementation
* [Writing Promise-Using Specifications](https://www.w3.org/2001/tag/doc/promises-guide) - "This document gives guidance on how to write specifications that create, accept, or manipulate promises"
* [Async functions - making promises friendly](https://developers.google.com/web/fundamentals/getting-started/primers/async-functions)

### References
* [Promises/A+ specification](https://promisesaplus.com/)
* [caniuse promises](http://caniuse.com/#feat=promises)
* [Fates and States ![GitHub Repo Stars](https://img.shields.io/github/stars/domenic/promises-unwrapping) ![GitHub last commit](https://img.shields.io/github/last-commit/domenic/promises-unwrapping)](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) - Quick definitions of possible states.
* [Promisees](https://bevacqua.github.io/promisees/) - Promise visualization playground for the adventurous.

## Promises/A+ Implementations (ES6/ES2015 compatible)

### Strict Implementations
These implement no more or less than the es6 spec. They make great polyfills and are exceptionally compatible with native promises.

* [pinkie ![GitHub Repo Stars](https://img.shields.io/github/stars/floatdrop/pinkie) ![GitHub last commit](https://img.shields.io/github/last-commit/floatdrop/pinkie)](https://github.com/floatdrop/pinkie) - Ponyfill. Node-oriented, but [browserifyable ![GitHub Repo Stars](https://img.shields.io/github/stars/substack/node-browserify) ![GitHub last commit](https://img.shields.io/github/last-commit/substack/node-browserify)](https://github.com/substack/node-browserify). *Extremely* small implementation.
* [native-promise-only ![GitHub Repo Stars](https://img.shields.io/github/stars/getify/native-promise-only) ![GitHub last commit](https://img.shields.io/github/last-commit/getify/native-promise-only)](https://github.com/getify/native-promise-only) - Polyfill. Browser and node-compatible.
* [es6-promise ![GitHub Repo Stars](https://img.shields.io/github/stars/stefanpenner/es6-promise) ![GitHub last commit](https://img.shields.io/github/last-commit/stefanpenner/es6-promise)](https://github.com/stefanpenner/es6-promise) - Opt-in polyfill. A strict-spec subset of rsvp.js.
* [lie ![GitHub Repo Stars](https://img.shields.io/github/stars/calvinmetcalf/lie) ![GitHub last commit](https://img.shields.io/github/last-commit/calvinmetcalf/lie)](https://github.com/calvinmetcalf/lie) - Small, browserifyable with an opt-in polyfill.

### Implementations with extras
All of these provide more features than the language yet remain compatible. Node + Browsers for all.

* [bluebird ![GitHub Repo Stars](https://img.shields.io/github/stars/petkaantonov/bluebird) ![GitHub last commit](https://img.shields.io/github/last-commit/petkaantonov/bluebird)](https://github.com/petkaantonov/bluebird) - Fully featured, extremely performant. Long stack traces & generator/coroutine support.
* [creed ![GitHub Repo Stars](https://img.shields.io/github/stars/briancavalier/creed) ![GitHub last commit](https://img.shields.io/github/last-commit/briancavalier/creed)](https://github.com/briancavalier/creed) - Hyper performant & full featured like Bluebird, but FP-oriented. Coroutines, generators, promises, ES2015 iterables, & fantasy-land spec.
* [rsvp.js ![GitHub Repo Stars](https://img.shields.io/github/stars/tildeio/rsvp.js) ![GitHub last commit](https://img.shields.io/github/last-commit/tildeio/rsvp.js)](https://github.com/tildeio/rsvp.js/) - Lightweight with a few extras. Compatible down to IE6!
* [Q ![GitHub Repo Stars](https://img.shields.io/github/stars/kriskowal/q) ![GitHub last commit](https://img.shields.io/github/last-commit/kriskowal/q)](https://github.com/kriskowal/q) - One of the original implementations. Long stack traces and other goodies.
* [then/promise ![GitHub Repo Stars](https://img.shields.io/github/stars/then/promise) ![GitHub last commit](https://img.shields.io/github/last-commit/then/promise)](https://github.com/then/promise) - Small with `nodeify`, `denodify` and `done()` additions.
* [when.js ![GitHub Repo Stars](https://img.shields.io/github/stars/cujojs/when) ![GitHub last commit](https://img.shields.io/github/last-commit/cujojs/when)](https://github.com/cujojs/when) - Packed with control flow, functional, and utility methods.


### Fallbacks
* [native-or-bluebird](https://www.npmjs.com/package/native-or-bluebird) - Helps transition to completely native.
* [pinkie-promise ![GitHub Repo Stars](https://img.shields.io/github/stars/floatdrop/pinkie-promise) ![GitHub last commit](https://img.shields.io/github/last-commit/floatdrop/pinkie-promise)](https://github.com/floatdrop/pinkie-promise) - Use native, or fall back to `pinkie`. Great for node library authors.
* [any-promise ![GitHub Repo Stars](https://img.shields.io/github/stars/kevinbeaty/any-promise) ![GitHub last commit](https://img.shields.io/github/last-commit/kevinbeaty/any-promise)](https://github.com/kevinbeaty/any-promise) - Loads the first available implementation. Safe for browserify.

## Convenience Utilities
Native and strictly spec-compliant promises are awesome for compatibility, future-proofness, library authors, and browsers. However, libraries like bluebird patch goodies onto the `Promise` constructor and prototype. Solution? tiny modules of course!

### sindresorhus's many Promise utilities ([see notes ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/promise-fun) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/promise-fun)](https://github.com/sindresorhus/promise-fun))
* [delay ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/delay) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/delay)](https://github.com/sindresorhus/delay) - Delay a promise a specified amount of time.
* [pify ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/pify) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/pify)](https://github.com/sindresorhus/pify) - Promisify ("denodify") a callback-style function.
* [loud-rejection ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/loud-rejection) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/loud-rejection)](https://github.com/sindresorhus/loud-rejection) - Make unhandled promise rejections fail loudly instead of the default silent fail.
* [hard-rejection ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/hard-rejection) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/hard-rejection)](https://github.com/sindresorhus/hard-rejection) - Make unhandled promise rejections fail hard right away instead of the default silent fail
* [p-queue ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-queue) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-queue)](https://github.com/sindresorhus/p-queue) - Promise queue with concurrency control
* [p-break ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-break) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-break)](https://github.com/sindresorhus/p-break) - Break out of a promise chain
* [p-lazy ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-lazy) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-lazy)](https://github.com/sindresorhus/p-lazy) - Create a lazy promise that defers execution until `.then()` or `.catch()` is called
* [p-defer ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-defer) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-defer)](https://github.com/sindresorhus/p-defer) - Create a deferred promise
* [p-if ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-if) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-if)](https://github.com/sindresorhus/p-if) - Conditional promise chains
* [p-tap ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-tap) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-tap)](https://github.com/sindresorhus/p-tap) - Tap into a promise chain without affecting its value or state
* [p-map ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-map) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-map)](https://github.com/sindresorhus/p-map) - Map over promises concurrently
* [p-all ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-all) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-all)](https://github.com/sindresorhus/p-all) - Run promise-returning & async functions concurrently with optional limited concurrency
* [p-limit ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-limit) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-limit)](https://github.com/sindresorhus/p-limit) - Run multiple promise-returning & async functions with limited concurrency
* [p-times ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-times) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-times)](https://github.com/sindresorhus/p-times) - Run promise-returning & async functions a specific number of times concurrently
* [p-catch-if ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-catch-if) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-catch-if)](https://github.com/sindresorhus/p-catch-if) - Conditional promise catch handler
* [p-time ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-time) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-time)](https://github.com/sindresorhus/p-time) - Measure the time a promise takes to resolve
* [p-log ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-log) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-log)](https://github.com/sindresorhus/p-log) - Log the value/error of a promise
* [p-filter ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-filter) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-filter)](https://github.com/sindresorhus/p-filter) - Filter promises concurrently
* [p-settle ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-settle) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-settle)](https://github.com/sindresorhus/p-settle) - Settle promises concurrently and get their fulfillment value or rejection reason
* [p-memoize ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-memoize) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-memoize)](https://github.com/sindresorhus/p-memoize) - Memoize promise-returning & async functions
* [p-whilst ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-whilst) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-whilst)](https://github.com/sindresorhus/p-whilst) - Calls a function repeatedly while a condition returns true and then resolves the promise
* [p-throttle ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-throttle) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-throttle)](https://github.com/sindresorhus/p-throttle) - Throttle promise-returning & async functions
* [p-debounce ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-debounce) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-debounce)](https://github.com/sindresorhus/p-debounce) - Debounce promise-returning & async functions
* [p-retry ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-retry) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-retry)](https://github.com/sindresorhus/p-retry) - Retry a promise-returning or async function
* [p-wait-for ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-wait-for) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-wait-for)](https://github.com/sindresorhus/p-wait-for) - Wait for a condition to be true
* [p-timeout ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-timeout) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-timeout)](https://github.com/sindresorhus/p-timeout) - Timeout a promise after a specified amount of time
* [p-race ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-race) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-race)](https://github.com/sindresorhus/p-race) - A better `Promise.race()`
* [p-try ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-try) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-try)](https://github.com/sindresorhus/p-try) - `Promise#try()` ponyfill - Starts a promise chain
* [p-finally ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-finally) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-finally)](https://github.com/sindresorhus/p-finally) - `Promise#finally()` ponyfill - Invoked when the promise is settled regardless of outcome
* [p-any ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-any) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-any)](https://github.com/sindresorhus/p-any) - Wait for any promise to be fulfilled
* [p-some ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-some) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-some)](https://github.com/sindresorhus/p-some) - Wait for a specified number of promises to be fulfilled
* [p-pipe ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-pipe) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-pipe)](https://github.com/sindresorhus/p-pipe) - Compose promise-returning & async functions into a reusable pipeline
* [p-each-series ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-each-series) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-each-series)](https://github.com/sindresorhus/p-each-series) - Iterate over promises serially
* [p-map-series ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-map-series) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-map-series)](https://github.com/sindresorhus/p-map-series) - Map over promises serially
* [p-reduce ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-reduce) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-reduce)](https://github.com/sindresorhus/p-reduce) - Reduce a list of values using promises into a promise for a value
* [p-props ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/p-props) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/p-props)](https://github.com/sindresorhus/p-props) - Like `Promise.all()` but for `Map` and `Object`

### Others
* [promise-method ![GitHub Repo Stars](https://img.shields.io/github/stars/wbinnssmith/promise-method) ![GitHub last commit](https://img.shields.io/github/last-commit/wbinnssmith/promise-method)](https://github.com/wbinnssmith/promise-method) - Standalone `bluebird.method`. Turn a synchronously-returning method into a promise-returning one.
* [is-promise ![GitHub Repo Stars](https://img.shields.io/github/stars/then/is-promise) ![GitHub last commit](https://img.shields.io/github/last-commit/then/is-promise)](https://github.com/then/is-promise) - Determine if something looks like a Promise.
* [sprom ![GitHub Repo Stars](https://img.shields.io/github/stars/then/sprom) ![GitHub last commit](https://img.shields.io/github/last-commit/then/sprom)](https://github.com/then/sprom) - Resolve when a stream ends. Optional buffering (be careful with this!)
* [task.js ![GitHub Repo Stars](https://img.shields.io/github/stars/mozilla/task.js) ![GitHub last commit](https://img.shields.io/github/last-commit/mozilla/task.js)](https://github.com/mozilla/task.js) - Write async functions in a blocking style using promises and generators. Like `bluebird.coroutine`.
* [co ![GitHub Repo Stars](https://img.shields.io/github/stars/tj/co) ![GitHub last commit](https://img.shields.io/github/last-commit/tj/co)](https://github.com/tj/co) - Like `task.js` and `bluebird.coroutine`, but supports thunks too.
* [lie-fs](https://www.npmjs.com/package/lie-fs) - Promise wrappers for Node's FS API.
* [promise-do-until ![GitHub Repo Stars](https://img.shields.io/github/stars/busterc/promise-do-until) ![GitHub last commit](https://img.shields.io/github/last-commit/busterc/promise-do-until)](https://github.com/busterc/promise-do-until) - Calls a function repeatedly until a condition returns true and then resolves the promise.
* [promise-do-whilst ![GitHub Repo Stars](https://img.shields.io/github/stars/busterc/promise-do-whilst) ![GitHub last commit](https://img.shields.io/github/last-commit/busterc/promise-do-whilst)](https://github.com/busterc/promise-do-whilst) - Calls a function repeatedly while a condition returns true and then resolves the promise.
* [promise-semaphore ![GitHub Repo Stars](https://img.shields.io/github/stars/samccone/promise-semaphore) ![GitHub last commit](https://img.shields.io/github/last-commit/samccone/promise-semaphore)](https://github.com/samccone/promise-semaphore) - Push a set of work to be done in a configurable serial fashion
* [promise-nodeify ![GitHub Repo Stars](https://img.shields.io/github/stars/kevinoid/promise-nodeify) ![GitHub last commit](https://img.shields.io/github/last-commit/kevinoid/promise-nodeify)](https://github.com/kevinoid/promise-nodeify) - Standalone `nodeify` method which calls a Node-style callback on resolution or rejection.

## License
Licensed under the [Creative Commons CC0 License](https://creativecommons.org/publicdomain/zero/1.0/).
