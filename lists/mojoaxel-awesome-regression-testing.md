# Awesome Visual Regression Testing [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> Curated list of awesome visual regression testing resources.

Regression testing is a type of software testing which verifies that software which was previously developed and tested still performs the same way after it was changed or interfaced with other software. The purpose of regression testing is to ensure that changes to the software have not introduced new faults.

## Foreword

This is intended to be an *incomplete* list of resources about visual regression testing. It is not tailored to a specific area or role (Developer/QA/UX-Designer). Note that this is for all areas of regression software testing *after* the code in question is written. For a awesome list on general software testing see e.g. [awesome-testing ![GitHub Repo Stars](https://img.shields.io/github/stars/TheJambo/awesome-testing) ![GitHub last commit](https://img.shields.io/github/last-commit/TheJambo/awesome-testing)](https://github.com/TheJambo/awesome-testing).

Finally, I'm sure everyone who reads this list has one thing they want to add. Please read the [How to Contribute](.github/CONTRIBUTING.md) page and **Feel free to add to the list!!**. If you think this is helpful **Please give a Star ⭐️**.

## Contents

- [General information](#general-information)
- [Browser automation](#browser-automation)
- [Tools and frameworks](#tools-and-frameworks)
- [Online services](#online-services)
- [Blog posts](#blog-posts)
- [Slideshows, talks and videos](#slideshows-talks-and-videos)
- [Deprecated](#deprecated)
- [Miscellaneous](#Miscellaneous)
  - [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)
  - [License](#license)

## General information

- [Wikipedia: Regression testing](https://en.wikipedia.org/wiki/Regression_testing)
- [Survey of screenshot-based CSS testing tools](https://gist.github.com/cvrebert/adf91e429906a4d746cd)

## Browser automation

- [Selenium ![GitHub Repo Stars](https://img.shields.io/github/stars/SeleniumHQ/selenium) ![GitHub last commit](https://img.shields.io/github/last-commit/SeleniumHQ/selenium)](https://github.com/SeleniumHQ/selenium) - Browser automation framework and ecosystem.
- [SlimerJS ![GitHub Repo Stars](https://img.shields.io/github/stars/laurentj/slimerjs) ![GitHub last commit](https://img.shields.io/github/last-commit/laurentj/slimerjs)](https://github.com/laurentj/slimerjs) - Scriptable browser like PhantomJS, based on Firefox.
- [Webdriver.io ![GitHub Repo Stars](https://img.shields.io/github/stars/webdriverio/webdriverio) ![GitHub last commit](https://img.shields.io/github/last-commit/webdriverio/webdriverio)](https://github.com/webdriverio/webdriverio/) - Node.js bindings implementation for the W3C WebDriver protocol.
- [Cypress.io](https://www.cypress.io/) - An automation framework that runs in-browser.

## Tools and frameworks

- [OSnap ![GitHub Repo Stars](https://img.shields.io/github/stars/eWert-Online/osnap) ![GitHub last commit](https://img.shields.io/github/last-commit/eWert-Online/osnap)](https://github.com/eWert-Online/osnap) - The speedy and easy to use Snapshot Testing tool for your project (1200 snapshots will run in under 3 minutes).
- [basset](https://basset.io) - Open source platform for generating and reviewing visual differences. Supports multiple browsers, integrations for github and slack.
- [AyeSpy ![GitHub Repo Stars](https://img.shields.io/github/stars/newsuk/ayespy) ![GitHub last commit](https://img.shields.io/github/last-commit/newsuk/ayespy)](https://github.com/newsuk/ayespy) - 44 image comparisons in 90 seconds.
- [Wraith ![GitHub Repo Stars](https://img.shields.io/github/stars/BBC-News/wraith) ![GitHub last commit](https://img.shields.io/github/last-commit/BBC-News/wraith)](https://github.com/BBC-News/wraith) - Easy to use ruby tool with docker support.
- [BackstopJS ![GitHub Repo Stars](https://img.shields.io/github/stars/garris/BackstopJS) ![GitHub last commit](https://img.shields.io/github/last-commit/garris/BackstopJS)](https://github.com/garris/BackstopJS) - Config-driven automated screenshot test framework.
- [Galen ![GitHub Repo Stars](https://img.shields.io/github/stars/galenframework/galen) ![GitHub last commit](https://img.shields.io/github/last-commit/galenframework/galen)](https://github.com/galenframework/galen) - Java framework based on [Selenium ![GitHub Repo Stars](https://img.shields.io/github/stars/SeleniumHQ/selenium) ![GitHub last commit](https://img.shields.io/github/last-commit/SeleniumHQ/selenium)](https://github.com/SeleniumHQ/selenium).
- [Creevey ![GitHub Repo Stars](https://img.shields.io/github/stars/wKich/creevey) ![GitHub last commit](https://img.shields.io/github/last-commit/wKich/creevey)](https://github.com/wKich/creevey) - Cross-browser visual testing with magic. Feature-rich tool with UI Runner, Tests Hot Reloading, Docker and Storybook integration.
- [CSSCritic ![GitHub Repo Stars](https://img.shields.io/github/stars/cburgmer/csscritic) ![GitHub last commit](https://img.shields.io/github/last-commit/cburgmer/csscritic)](https://github.com/cburgmer/csscritic) - Lightweight CSS regression testing.
- [Spectre ![GitHub Repo Stars](https://img.shields.io/github/stars/wearefriday/spectre) ![GitHub last commit](https://img.shields.io/github/last-commit/wearefriday/spectre)](https://github.com/wearefriday/spectre) - Provides image comparison capabilities and an admin interface for managing screenshots.
- [Shoov ![GitHub Repo Stars](https://img.shields.io/github/stars/shoov/shoov) ![GitHub last commit](https://img.shields.io/github/last-commit/shoov/shoov)](https://github.com/shoov/shoov) - UI regression and functional testing focused on Drupal 7 sites.
- [qd_screenshottests](https://www.drupal.org/project/qd_screenshottests) - CasperJS-based UI regression and functional testing focused on Drupal 8 sites.
- [Look-alike ![GitHub Repo Stars](https://img.shields.io/github/stars/kdzwinel/Look-alike) ![GitHub last commit](https://img.shields.io/github/last-commit/kdzwinel/Look-alike)](https://github.com/kdzwinel/Look-alike) - Chrome Extension for taking and comparing screenshots.
- [Hardy ![GitHub Repo Stars](https://img.shields.io/github/stars/thingsinjars/Hardy) ![GitHub last commit](https://img.shields.io/github/last-commit/thingsinjars/Hardy)](https://github.com/thingsinjars/Hardy) - Selenium-driven, cucumber-powered CSS testing.
- [TestCafe ![GitHub Repo Stars](https://img.shields.io/github/stars/DevExpress/testcafe) ![GitHub last commit](https://img.shields.io/github/last-commit/DevExpress/testcafe)](https://github.com/DevExpress/testcafe) - Automated browser testing for the modern web development stack.
- [Needle ![GitHub Repo Stars](https://img.shields.io/github/stars/python-needle/needle) ![GitHub last commit](https://img.shields.io/github/last-commit/python-needle/needle)](https://github.com/python-needle/needle) - Needle is a tool for testing visuals with Selenium and nose (Python).
- [gatling ![GitHub Repo Stars](https://img.shields.io/github/stars/gabrielrotbart/gatling) ![GitHub last commit](https://img.shields.io/github/last-commit/gabrielrotbart/gatling)](https://github.com/gabrielrotbart/gatling) - Integrated visual RSpec matcher which makes real visual testing easy (Ruby).
- [grunt-photobox ![GitHub Repo Stars](https://img.shields.io/github/stars/stefanjudis/grunt-photobox) ![GitHub last commit](https://img.shields.io/github/last-commit/stefanjudis/grunt-photobox)](https://github.com/stefanjudis/grunt-photobox) - Plugin to prevent your project of broken layout via screenshot photo sessions of your site.
- [vrtest ![GitHub Repo Stars](https://img.shields.io/github/stars/nathanmarks/vrtest) ![GitHub last commit](https://img.shields.io/github/last-commit/nathanmarks/vrtest)](https://github.com/nathanmarks/vrtest) - JavaScript library for running visual regression tests on your components cross browser via selenium.
- [Happo ![GitHub Repo Stars](https://img.shields.io/github/stars/Galooshi/happo) ![GitHub last commit](https://img.shields.io/github/last-commit/Galooshi/happo)](https://github.com/Galooshi/happo) - Visual diffing in CI for user interfaces.
- [reg-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/bokuweb/reg-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/bokuweb/reg-cli)](https://github.com/bokuweb/reg-cli) - Visual regression test tool which output easy-to-read single file html report.
- [Nightmare ![GitHub Repo Stars](https://img.shields.io/github/stars/segmentio/nightmare) ![GitHub last commit](https://img.shields.io/github/last-commit/segmentio/nightmare)](https://github.com/segmentio/nightmare) - High-level browser automation library based on Electron.
- [Puppeteer ![GitHub Repo Stars](https://img.shields.io/github/stars/GoogleChrome/puppeteer) ![GitHub last commit](https://img.shields.io/github/last-commit/GoogleChrome/puppeteer)](https://github.com/GoogleChrome/puppeteer) - Headless Google Chrome Node API.
- [Playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/playwright) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/playwright)](https://github.com/microsoft/playwright) - Node library to automate Chromium, Firefox and WebKit with a single API.
- [reg-suit ![GitHub Repo Stars](https://img.shields.io/github/stars/reg-viz/reg-suit) ![GitHub last commit](https://img.shields.io/github/last-commit/reg-viz/reg-suit)](https://github.com/reg-viz/reg-suit) - Visual regression testing suite which compares images, stores snapshots, and notifies the difference to your GitHub repo.
- [Chimp ![GitHub Repo Stars](https://img.shields.io/github/stars/xolvio/chimp) ![GitHub last commit](https://img.shields.io/github/last-commit/xolvio/chimp)](https://github.com/xolvio/chimp) - Develop acceptance tests & end-to-end tests with realtime feedback.
- [Differencify ![GitHub Repo Stars](https://img.shields.io/github/stars/NimaSoroush/differencify) ![GitHub last commit](https://img.shields.io/github/last-commit/NimaSoroush/differencify)](https://github.com/NimaSoroush/differencify) - A library for visual regression testing using [Puppeteer ![GitHub Repo Stars](https://img.shields.io/github/stars/GoogleChrome/puppeteer) ![GitHub last commit](https://img.shields.io/github/last-commit/GoogleChrome/puppeteer)](https://github.com/GoogleChrome/puppeteer).
- [ResembleJS ![GitHub Repo Stars](https://img.shields.io/github/stars/Huddle/Resemble.js) ![GitHub last commit](https://img.shields.io/github/last-commit/Huddle/Resemble.js)](https://github.com/Huddle/Resemble.js) - Analyse and compare images with Javascript and HTML5.
- [Muppeteer ![GitHub Repo Stars](https://img.shields.io/github/stars/HuddleEng/Muppeteer) ![GitHub last commit](https://img.shields.io/github/last-commit/HuddleEng/Muppeteer)](https://github.com/HuddleEng/Muppeteer) - Visual regression testing framework for Chrome using [Mocha](https://mochajs.org/) and [Puppeteer ![GitHub Repo Stars](https://img.shields.io/github/stars/GoogleChrome/puppeteer) ![GitHub last commit](https://img.shields.io/github/last-commit/GoogleChrome/puppeteer)](https://github.com/GoogleChrome/puppeteer).
- [ember-visual-test ![GitHub Repo Stars](https://img.shields.io/github/stars/Cropster/ember-visual-test) ![GitHub last commit](https://img.shields.io/github/last-commit/Cropster/ember-visual-test)](https://github.com/Cropster/ember-visual-test) - Simple visual regression testing for [Ember](https://emberjs.com/).
- [AET ![GitHub Repo Stars](https://img.shields.io/github/stars/Cognifide/aet) ![GitHub last commit](https://img.shields.io/github/last-commit/Cognifide/aet)](https://github.com/Cognifide/aet) - Scalable testing tool providing visual regression testing, accessibility and performance validation, markup analysis and more.
- [Wendigo ![GitHub Repo Stars](https://img.shields.io/github/stars/angrykoala/wendigo) ![GitHub last commit](https://img.shields.io/github/last-commit/angrykoala/wendigo)](https://github.com/angrykoala/wendigo) - Test-oriented browser automation library based on Puppeteer.
- [Loki ![GitHub Repo Stars](https://img.shields.io/github/stars/oblador/loki) ![GitHub last commit](https://img.shields.io/github/last-commit/oblador/loki)](https://github.com/oblador/loki) - Visual regression testing for Storybook using Chrome in docker et al.
- [Zombie.js](http://zombie.js.org/) - Insanely fast, headless full-stack testing using Node.js.
- [CodeceptJS ![GitHub Repo Stars](https://img.shields.io/github/stars/codeception/codeceptjs) ![GitHub last commit](https://img.shields.io/github/last-commit/codeception/codeceptjs)](https://github.com/codeception/codeceptjs/) - Modern Era Acceptance Testing Framework for NodeJS.
- [FuncUnit ![GitHub Repo Stars](https://img.shields.io/github/stars/bitovi/funcunit) ![GitHub last commit](https://img.shields.io/github/last-commit/bitovi/funcunit)](https://github.com/bitovi/funcunit) - A functional test suite based on jQuery
- [Nightwatch ![GitHub Repo Stars](https://img.shields.io/github/stars/nightwatchjs/nightwatch) ![GitHub last commit](https://img.shields.io/github/last-commit/nightwatchjs/nightwatch)](https://github.com/nightwatchjs/nightwatch) - Automated testing and continuous integration framework based on Node.js and using the Webdriver protocol.
- [Protractor ![GitHub Repo Stars](https://img.shields.io/github/stars/angular/protractor) ![GitHub last commit](https://img.shields.io/github/last-commit/angular/protractor)](https://github.com/angular/protractor) - E2E test framework for Angular apps.
- [jest-puppeteer-react ![GitHub Repo Stars](https://img.shields.io/github/stars/Hapag-Lloyd/jest-puppeteer-react) ![GitHub last commit](https://img.shields.io/github/last-commit/Hapag-Lloyd/jest-puppeteer-react)](https://github.com/Hapag-Lloyd/jest-puppeteer-react) - Visual regression testing with Jest and puppeteer for React components
- [jest-image-snapshot ![GitHub Repo Stars](https://img.shields.io/github/stars/americanexpress/jest-image-snapshot) ![GitHub last commit](https://img.shields.io/github/last-commit/americanexpress/jest-image-snapshot)](https://github.com/americanexpress/jest-image-snapshot) - Jest matcher that performs image comparisons using [pixelmatch](https://www.npmjs.com/package/pixelmatch)
- [test-crawler ![GitHub Repo Stars](https://img.shields.io/github/stars/apiel/test-crawler) ![GitHub last commit](https://img.shields.io/github/last-commit/apiel/test-crawler)](https://github.com/apiel/test-crawler) - Visual regression testing, by crawling a website and providing snapshot comparison reports.
- [wdio-visual-regression ![GitHub Repo Stars](https://img.shields.io/github/stars/ennjin/wdio-visual-regression) ![GitHub last commit](https://img.shields.io/github/last-commit/ennjin/wdio-visual-regression)](https://github.com/ennjin/wdio-visual-regression) - Visual regression tool for webdriver.io
- [Selenide ![GitHub Repo Stars](https://img.shields.io/github/stars/selenide/selenide) ![GitHub last commit](https://img.shields.io/github/last-commit/selenide/selenide)](https://github.com/selenide/selenide) - Framework powered by Selenium WebDriver for writing easy-to-read and easy-to-maintain automated tests in Java.
- [Karma](http://karma-runner.github.io/latest/index.html) - A test runner by the AngularJS team, that fits all our needs.
- [Touca ![GitHub Repo Stars](https://img.shields.io/github/stars/trytouca/trytouca) ![GitHub last commit](https://img.shields.io/github/last-commit/trytouca/trytouca)](https://github.com/trytouca/trytouca) - Open source continuous regression testing without the hassle of managing snapshot files.
- [Lost Pixel ![GitHub Repo Stars](https://img.shields.io/github/stars/lost-pixel/lost-pixel) ![GitHub last commit](https://img.shields.io/github/last-commit/lost-pixel/lost-pixel)](https://github.com/lost-pixel/lost-pixel) - Holistic visual regression testing for full pages, components (via Storybook and Ladle integration), and custom shots (e.g. via Cypress).

## Online services

- [BrowserStack](https://www.browserstack.com) - Free for Open Source. Supports [Selenium Webdriver ![GitHub Repo Stars](https://img.shields.io/github/stars/SeleniumHQ/selenium) ![GitHub last commit](https://img.shields.io/github/last-commit/SeleniumHQ/selenium)](https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver).
- [BugBug.io](https://bugbug.io/) - Lightweight test automation tool for web applications. Easy to learn and doesn't require coding. It's free, with unlimited tests. For an additional monthly fee, you also get cloud monitoring and CI/CD integration.
- [HeadSpin](https://www.headspin.io/) - HeadSpin's Regression testing gives you a powerful comparison tool for analysing degradation across new app builds, OS releases, feature additions, locations, and more.
- [TestGrid](https://www.testgrid.io/) - Perform End to End test automation be it cross browser testing, mobile app testing, performance testing or API testing on cloud or on-premise.
- [LambdaTest](https://www.lambdatest.com/) - Perform Automated and Live Interactive Cross Browser Testing on 2000+ Real Browsers and Operating Systems Online.
- [screener.io](https://screener.io) - For React, looks open source.
- [applitools](https://applitools.com) - Cloud base visual tests.
- [percy.io](https://percy.io) - Continuous visual reviews for web apps.
- [screenster.io](http://screenster.io) - Cloud based automation testing platform for web and mobile UI.
- [browserling](https://www.browserling.com) - LIVE interactive cross-browser testing.
- [Browser Shots](http://browsershots.org) - Screenshots only.
- [Ghost Inspector](https://ghostinspector.com) - See [introduction video](https://vimeo.com/ghostinspector/intro).
- [CrossBrowserTesting](https://crossbrowsertesting.com) - Manual & exploratory testing on 1500+ real browsers and mobile devices.
- [Argos-CI](https://www.argos-ci.com) - Automate visual regression testing.
- [Diffy](https://diffy.website) - Cloud based visual regression tool. Uses puppeteer and proprietary comparison algorithm (detect layout shifts). Great scalability with AWS Lambda.
- [Chromatic](https://www.chromatic.com/) - Visual testing and UI review for component libraries. Cloud-based. [Video](https://youtu.be/6KDLJBcutQE)
- [VisWiz.io](https://www.viswiz.io) - Flexible visual regression testing service.
- [Happo](https://happo.io/) - Cloud-based screenshot testing service with support for multiple browsers.
- [Visual Knight](https://visual-knight.io/) - Cloud-based visual testing platform with realtime results for testing tools.
- [Axcept](https://axcept.io) - Testing for the whole team. Up to 100 tests in parallel. Endpoint Mocking. Code Coverage. 
- [Fluxguard](https://fluxguard.com) - Screenshot pixel and DOM change comparisons and regressions.
- [Vidiff](https://vidiff.com) - Cloud-based visual regression testing across stages.
- [Reflect](https://reflect.run) - Visual regression testing and test automation tool.
- [Visual Regression Tracker ![GitHub Repo Stars](https://img.shields.io/github/stars/Visual-Regression-Tracker/Visual-Regression-Tracker) ![GitHub last commit](https://img.shields.io/github/last-commit/Visual-Regression-Tracker/Visual-Regression-Tracker)](https://github.com/Visual-Regression-Tracker/Visual-Regression-Tracker) - Open Source selfhosted service for visual regression testing
- [Micoo ![GitHub Repo Stars](https://img.shields.io/github/stars/Mikuu/Micoo) ![GitHub last commit](https://img.shields.io/github/last-commit/Mikuu/Micoo)](https://github.com/Mikuu/Micoo) - Open source service for all UI application visual regression solution
- [TestingBot](https://testingbot.com) - Provides +3600 browsers to run automated visual tests. Free for Open Source.
- [Preflight](https://preflight.com) - Easiest Visual regression testing and Automated Web Testing tool. (Limited) free use.
- [Preflight: Cypress Recorder](https://cypress.preflight.com) - Create AI-powered Cypress Tests/POM models in your browser and automate Email & Visual testing for Cypress.
- [Meticulous.ai](https://meticulous.ai) - Easily create frontend tests without writing code. Use Meticulous to record workflows on your web app. You can then replay those flows on new frontend code, and create a test by diffing two replays.
- [testRigor](https://testrigor.com) - E2E functional test automation tool for web, mobile, and desktop tests.
- [VRTs - Visual Regression Tests](https://bleech.de/en/products/visual-regression-tests/) – WordPress plugin auto-updating screenshots on content updates, preventing false positives.
- [Testomat.io Reporter ![GitHub Repo Stars](https://img.shields.io/github/stars/testomatio/reporter) ![GitHub last commit](https://img.shields.io/github/last-commit/testomatio/reporter)](https://github.com/testomatio/reporter) - Allows to collect tests to a Test Case Management System (TCMS) like testomat.io and sync manual and automated tests in one place.

## Blog posts

- [Kevin Lamping: The 5 best visual regression testing tools](http://www.creativebloq.com/features/the-5-best-visual-regression-testing-tools) - Compares: Wraith, PhantomCSS, Gemini, WebdriverCSS and Spectre.
- [Garris Shipon: Visual Regression Testing For Angular Applications](https://davidwalsh.name/visual-regression-testing-angular-applications) -  Tutorial using BackstopJS.
- [Angela Riggs: Visual Regression Testing with BackstopJS](https://www.metaltoad.com/blog/visual-regression-testing-backstopjs) - Tutorial using BackstopJS.
- [Garris Shipon: Automating CSS Regression Testing](https://css-tricks.com/automating-css-regression-testing/) - Tutorial using BackstopJS.
- [Phillip Gourley: Making visual regression useful](https://medium.com/@philgourley/making-visual-regression-useful-acfae27e5031) - Why you should use BackstopJS.
- [Pavels Jelisejevs: Visual Regression Testing with PhantomCSS](https://www.sitepoint.com/visual-regression-testing-with-phantomcss) - Introduction to PhantomCSS.
- [Chromeless, Chrominator, Chromy, Navalia, Lambdium, GhostJS, AutoGCD](https://medium.com/@kensoh/chromeless-chrominator-chromy-navalia-lambdium-ghostjs-autogcd-ef34bcd26907) - Headless Chrome is shaking up traditional approaches to test automation.
- [Visual regression testing using Jest, Chromeless and AWS Lambda ![GitHub Repo Stars](https://img.shields.io/github/stars/novemberfiveco/visual-regression-testing-jest-chromeless) ![GitHub last commit](https://img.shields.io/github/last-commit/novemberfiveco/visual-regression-testing-jest-chromeless)](https://github.com/novemberfiveco/visual-regression-testing-jest-chromeless) - Tutorial using Chromeless and jest-image-snapshot.
- [Make visual regression testing easier](https://medium.com/@nima.soroush.h/make-visual-regression-testing-easier-4a3dc7073737) - Introduction to [Differencify ![GitHub Repo Stars](https://img.shields.io/github/stars/NimaSoroush/differencify) ![GitHub last commit](https://img.shields.io/github/last-commit/NimaSoroush/differencify)](https://github.com/NimaSoroush/differencify) and how to use it.
- [Visual Regression Testing with Puppeteer & Jest](https://www.viswiz.io/help/tutorials/puppeteer) - Tutorial to setup visual testing with Puppeteer, Jest and VisWiz.io.
- [Keeping a React Design System consistent: using visual regression testing to save time and headaches](https://techblog.commercetools.com/keeping-a-react-design-system-consistent-f055160d5166) - Using percy, and jest puppeteer to visually test a React component library.
- [Visual Regression Test with WebdriverIO & WebdriverCSS](https://medium.com/@dalenguyen/visual-regression-test-with-webdriverio-webdrivercss-d7675a1812b2) - Tutorial using WebdriverIO and WebdriverCSS with Spec Reporter
- [Automated screenshot comparison tests with headless Chrome, Puppeteer and Pixelmatch, in Bitbucket pipeline](https://jakobzanker.de/blog/automated-screenshot-comparison-test-with-headless-chrome-in-bitbucket-pipeline/)
- [Automatic visual diffing with Puppeteer](https://meowni.ca/posts/2017-puppeteer-tests/)
- [theheadless.dev](https://theheadless.dev) - Blog with practical guides and runnable examples on Playwright and Puppeteer.
- [Visual regression testing for Hugo with Github-CI and BackstopJS](https://jameskiefer.com/posts/visual-regression-testing-for-hugo-with-github-ci-and-backstopjs/) - How to automate regression testing for Hugo with BackstopJS
- [UI Visual Regression Testing with Micoo](https://mikuu.medium.com/ui-visual-regression-testing-with-micoo-12c7a4a036b9) - Introduction about how to do visual regression testing with Micoo service
- [Poor man's visual regression testing](https://idkshite.com/posts/compare-visual-changes) - Improved manual visual regression testing with the PerfectPixel chrome plugin.
- [Everything you need to know about Visual Regression Testing in 2022](https://david-x.medium.com/the-state-of-visual-regression-testing-in-2022-5de10ffe8f6f) - Intro to visual regression testing with tools updated as of 2022. 

## Slideshows, talks and videos

- [CSS Regression Testing with Wraith](https://youtu.be/gE_19L0l2q0) - Screencast: Basic introduction to wraith, a screenshot comparison tool.
- [Visual Regression Testing with Shoov](https://youtu.be/CBBiJ6YlXLc) - How to setup shoov and get your first test written.
- [Visual Regression Testing with PhantomCSS](https://youtu.be/Vp8vnXMjIfw) - Talk by Jon Bellah on how to use PhantomCSS during wordpress development.
- [Visual Regression Testing: Sanity Checks With BackstopJS](https://youtu.be/l8lGj8Zh0k4) - Screencast with code demo and best practices.
- [Screenster Tutorial](https://youtu.be/Zy8y_dGzZXI) - Tutorial on how to create visual automated tests with Screenster.
- [Look-alike - visual regression testing tool](https://youtu.be/vTyoQuC0To8) - Demo what the Look-alike Chrome extension is, how it works and how and why it was build.
- [Screencast on CSS critic - a lightweight testing framework for CSS](https://youtu.be/AqQ2bNPtF60) - How to write your first CSS test with CSS critic, make it pass, break it, and make it pass again.
- [Visual Regression Testing - from a tool to a process](https://speakerdeck.com/nikhilverma/visual-regression-testing-from-a-tool-to-a-process) by Nikhil Verma - How the Mobile Web team in Badoo converted and integrated PhantomCSS into their workflow and connected it to their CI process.
- [Cypress in 100 Seconds](https://www.youtube.com/watch?v=BQqzfHQkREo&ab_channel=Fireship) - Introduction video by Fireship. 

## Deprecated

The following projects are no longer maintained actively but are still worth mentioning because of their user base.

- [PhantomJS ![GitHub Repo Stars](https://img.shields.io/github/stars/ariya/phantomjs) ![GitHub last commit](https://img.shields.io/github/last-commit/ariya/phantomjs)](https://github.com/ariya/phantomjs) - Scriptable Headless WebKit. No longer maintained since 2 June 2018.
- [PhantomCSS ![GitHub Repo Stars](https://img.shields.io/github/stars/Huddle/PhantomCSS) ![GitHub last commit](https://img.shields.io/github/last-commit/Huddle/PhantomCSS)](https://github.com/Huddle/PhantomCSS) - Visual/CSS regression testing with PhantomJS or SlimerJS. No longer maintained since 22 Dec 2017.
- [PhantomFlow ![GitHub Repo Stars](https://img.shields.io/github/stars/Huddle/PhantomFlow) ![GitHub last commit](https://img.shields.io/github/last-commit/Huddle/PhantomFlow)](https://github.com/Huddle/PhantomFlow) - Experimental approach to UI testing, based on Decision Trees.
- [DalekJS ![GitHub Repo Stars](https://img.shields.io/github/stars/dalekjs/dalek) ![GitHub last commit](https://img.shields.io/github/last-commit/dalekjs/dalek)](https://github.com/dalekjs/dalek) - Automated cross browser testing with JavaScript. No longer maintained since 4 Jun 2017.
- [dpxdt ![GitHub Repo Stars](https://img.shields.io/github/stars/bslatkin/dpxdt) ![GitHub last commit](https://img.shields.io/github/last-commit/bslatkin/dpxdt)](https://github.com/bslatkin/dpxdt) - End-to-end testing with Python.
- [Visual Review ![GitHub Repo Stars](https://img.shields.io/github/stars/xebia/VisualReview) ![GitHub last commit](https://img.shields.io/github/last-commit/xebia/VisualReview)](https://github.com/xebia/VisualReview) - A human-friendly tool for testing and reviewing visual regressions.
- [Huxley ![GitHub Repo Stars](https://img.shields.io/github/stars/facebookarchive/huxley) ![GitHub last commit](https://img.shields.io/github/last-commit/facebookarchive/huxley)](https://github.com/facebookarchive/huxley) - Python framework based on [Selenium Webdriver ![GitHub Repo Stars](https://img.shields.io/github/stars/SeleniumHQ/selenium) ![GitHub last commit](https://img.shields.io/github/last-commit/SeleniumHQ/selenium)](https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver).
- [WebdriverCSS ![GitHub Repo Stars](https://img.shields.io/github/stars/webdriverio/webdrivercss) ![GitHub last commit](https://img.shields.io/github/last-commit/webdriverio/webdrivercss)](https://github.com/webdriverio/webdrivercss) - WebdriverCSS sits on top of [Webdriver.io ![GitHub Repo Stars](https://img.shields.io/github/stars/webdriverio/webdriverio) ![GitHub last commit](https://img.shields.io/github/last-commit/webdriverio/webdriverio)](https://github.com/webdriverio/webdriverio/) and hooks into [Selenium ![GitHub Repo Stars](https://img.shields.io/github/stars/SeleniumHQ/selenium) ![GitHub last commit](https://img.shields.io/github/last-commit/SeleniumHQ/selenium)](https://github.com/SeleniumHQ/selenium).
- [Gemini ![GitHub Repo Stars](https://img.shields.io/github/stars/gemini-testing/gemini) ![GitHub last commit](https://img.shields.io/github/last-commit/gemini-testing/gemini)](https://github.com/gemini-testing/gemini) - Feature rich framework with support for [Selenium ![GitHub Repo Stars](https://img.shields.io/github/stars/SeleniumHQ/selenium) ![GitHub last commit](https://img.shields.io/github/last-commit/SeleniumHQ/selenium)](https://github.com/SeleniumHQ/selenium) and  [CasperJS ![GitHub Repo Stars](https://img.shields.io/github/stars/casperjs/casperjs) ![GitHub last commit](https://img.shields.io/github/last-commit/casperjs/casperjs)](https://github.com/casperjs/casperjs). Gemini is deprecated, use hermione instead.
- [OcularJS ![GitHub Repo Stars](https://img.shields.io/github/stars/mmacartney10/ocularjs) ![GitHub last commit](https://img.shields.io/github/last-commit/mmacartney10/ocularjs)](https://github.com/mmacartney10/ocularjs) - uses [PhantomJS ![GitHub Repo Stars](https://img.shields.io/github/stars/ariya/phantomjs) ![GitHub last commit](https://img.shields.io/github/last-commit/ariya/phantomjs)](https://github.com/ariya/phantomjs).
- [trifleJS ![GitHub Repo Stars](https://img.shields.io/github/stars/sdesalas/trifleJS) ![GitHub last commit](https://img.shields.io/github/last-commit/sdesalas/trifleJS)](https://github.com/sdesalas/trifleJS) - Headless automation for Internet Explorer. (last update 2016)
- [CasperJS ![GitHub Repo Stars](https://img.shields.io/github/stars/casperjs/casperjs) ![GitHub last commit](https://img.shields.io/github/last-commit/casperjs/casperjs)](https://github.com/casperjs/casperjs) - Navigation scripting and testing utility for PhantomJS and SlimerJS. (archived 2018)
- [Navalia ![GitHub Repo Stars](https://img.shields.io/github/stars/joelgriffith/navalia) ![GitHub last commit](https://img.shields.io/github/last-commit/joelgriffith/navalia)](https://github.com/joelgriffith/navalia) - Browser Automation based on headless Chrome and GraphQL. (archived 2018)
- [Chromeless ![GitHub Repo Stars](https://img.shields.io/github/stars/graphcool/chromeless) ![GitHub last commit](https://img.shields.io/github/last-commit/graphcool/chromeless)](https://github.com/graphcool/chromeless) - Chrome automation made simple. Runs locally or headless on AWS Lambda. (archived 2018)

## Miscellaneous

### Contributing

See the [Contribution Guide](.github/CONTRIBUTING.md) for details on how to contribute.

### Code of Conduct

See the [Code of Conduct](.github/CODE-OF-CONDUCT.md) for details. Basically it comes down to:
> In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and orientation.

### License

[![CC-BY-SA](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-sa.svg)](http://creativecommons.org/licenses/by-sa/4.0/)

This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
License holders are [all contributors ![GitHub Repo Stars](https://img.shields.io/github/stars/mojoaxel/awesome-regression-testing) ![GitHub last commit](https://img.shields.io/github/last-commit/mojoaxel/awesome-regression-testing)](https://github.com/mojoaxel/awesome-regression-testing/graphs/contributors).
