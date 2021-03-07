# Awesome Selenium [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Build Status](https://travis-ci.org/christian-bromann/awesome-selenium.svg?branch=master)](https://travis-ci.org/christian-bromann/awesome-selenium)

> A curated list of delightful [Selenium](http://www.seleniumhq.org/) [resources](#resources).

Inspired by the [awesome ![GitHub Repo stars](https://img.shields.io/github/stars/sindresorhus/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome)](https://github.com/sindresorhus/awesome) list thing.

## Resources

- [Tools](#tools)
- [CSS Regression Testing](#css-regression-testing)
- [Containers](#containers)
- [Driver](#driver)
- [Desktop Tools](#desktop-tools)
- [Selenium Grid](#selenium-grid)
- [Cloud Services](#cloud-services)
- [Device Farms](#device-farms)
- [Web Scraping / Mining](#web-scraping--mining)
- [Specifications](#specifications)
- [Blogs](#blogs)

### Tools

#### Javascript

- [selenium-webdriver ![GitHub Repo stars](https://img.shields.io/github/stars/SeleniumHQ/selenium) ![GitHub last commit](https://img.shields.io/github/last-commit/SeleniumHQ/selenium)](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs) - The official WebDriver JavaScript bindings from the Selenium project.
- [WD ![GitHub Repo stars](https://img.shields.io/github/stars/admc/wd) ![GitHub last commit](https://img.shields.io/github/last-commit/admc/wd)](https://github.com/admc/wd) - WebDriver/Selenium 2 node.js client.
- [WebdriverIO](http://webdriver.io) - better implementation of WebDriver bindings with predefined 50+ actions.
- [CasperJS](http://casperjs.org/) - open source navigation scripting & testing utility.
- [Zombie.js](http://zombie.js.org/) - Insanely fast, headless full-stack testing.
- [DalekJS](http://dalekjs.com/) - Automated cross browser testing.
- [SlimerJS](http://slimerjs.org/) - A scriptable browser for Web developers.
- [Nightwatch](http://nightwatchjs.org/) - efficient and straightforward Javascript End-to-End tests.
- [yiewd ![GitHub Repo stars](https://img.shields.io/github/stars/jlipps/yiewd) ![GitHub last commit](https://img.shields.io/github/last-commit/jlipps/yiewd)](https://github.com/jlipps/yiewd) - WD.js wrapper using latest Harmony generators! Get rid of the callback pyramid with yield.
- [Karma](http://karma-runner.github.io/0.12/index.html) - Brings a productive testing environment to developers for unit testing (mostly AngularJS).
- [Protractor](https://angular.github.io/protractor/) - Protractor is an end-to-end test framework for AngularJS applications.
- [CodeceptJS](http://codecept.io/) - Modern Era Acceptance Testing Framework for NodeJS.
- [Nightmare.js](http://www.nightmarejs.org/) - A high-level browser automation library.

#### Ruby

- [Selenium with Ruby](http://seleniumhq.github.io/selenium/docs/api/rb/index.html) - Selenium Ruby bindings
- [Watir](http://watir.github.io) - Automated testing that doesn’t hurt
- [Anemone ![GitHub Repo stars](https://img.shields.io/github/stars/chriskite/anemone) ![GitHub last commit](https://img.shields.io/github/last-commit/chriskite/anemone)](https://github.com/chriskite/anemone) - Anemone web-spider framework.
- [Mechanize](http://docs.seattlerb.org/mechanize/) - automating interaction with websites.
- [Spidr ![GitHub Repo stars](https://img.shields.io/github/stars/postmodern/spidr) ![GitHub last commit](https://img.shields.io/github/last-commit/postmodern/spidr)](https://github.com/postmodern/spidr) - web spidering library that can spider a site, multiple domains, certain links or infinitely.
- [cobweb](https://rubygems.org/gems/cobweb) - web crawler that can use resque to cluster crawls to quickly crawl extremely large sites.
- [Capybara](https://rubygems.org/gems/capybara) - an integration testing tool for rack based web applications. It simulates how a user would interact with a website.

#### PHP
- [Facebook WebDriver ![GitHub Repo stars](https://img.shields.io/github/stars/facebook/php-webdriver) ![GitHub last commit](https://img.shields.io/github/last-commit/facebook/php-webdriver)](https://github.com/facebook/php-webdriver) - A PHP client for webdriver.
- [Selenium Setup ![GitHub Repo stars](https://img.shields.io/github/stars/bogdananton/Selenium-Setup) ![GitHub last commit](https://img.shields.io/github/last-commit/bogdananton/Selenium-Setup)](https://github.com/bogdananton/Selenium-Setup) - A tool for PHP developers to start their own Selenium server.
- [Steward ![GitHub Repo stars](https://img.shields.io/github/stars/lmc-eu/steward) ![GitHub last commit](https://img.shields.io/github/last-commit/lmc-eu/steward)](https://github.com/lmc-eu/steward) - A test runner integrating php-webdriver with PHPUnit.

#### Python

- [Selenium with Python](http://selenium-python.readthedocs.io/) - Selenium Python bindings
- [Helium ![GitHub Repo stars](https://img.shields.io/github/stars/mherrmann/selenium-python-helium) ![GitHub last commit](https://img.shields.io/github/last-commit/mherrmann/selenium-python-helium)](https://github.com/mherrmann/selenium-python-helium) - Helium makes Selenium easier and faster to use
- [Selene ![GitHub Repo stars](https://img.shields.io/github/stars/yashaka/selene) ![GitHub last commit](https://img.shields.io/github/last-commit/yashaka/selene)](https://github.com/yashaka/selene) - Selenide-inspired concise and readable automated test framework, supports Ajax well like Selenide.
- [Pomade ![GitHub Repo stars](https://img.shields.io/github/stars/saucelabs/pomade) ![GitHub last commit](https://img.shields.io/github/last-commit/saucelabs/pomade)](https://github.com/saucelabs/pomade) - SauceLabs integrated test runner for Selenium test.
- [mechanize](http://wwwsearch.sourceforge.net/mechanize/) - Stateful programmatic web browsing.
- [Robot](http://robotframework.org/) - Robot Framework is a generic test automation framework for acceptance testing and ATDD.
- [behave-webdriver ![GitHub Repo stars](https://img.shields.io/github/stars/spyoungtech/behave-webdriver) ![GitHub last commit](https://img.shields.io/github/last-commit/spyoungtech/behave-webdriver)](https://github.com/spyoungtech/behave-webdriver) behavior driven testing with Selenium and Python.

#### Java

- [Selenium with Java](http://seleniumhq.github.io/selenium/docs/api/java/index.html) - Selenium Java bindings
- [Conductor](http://conductor.ddavison.io) - Turbo-boosted Selenium framework that makes test writing a breeze.
- [darcy ![GitHub Repo stars](https://img.shields.io/github/stars/darcy-framework/darcy-webdriver) ![GitHub last commit](https://img.shields.io/github/last-commit/darcy-framework/darcy-webdriver)](https://github.com/darcy-framework/darcy-webdriver) - Page object framework for structured, maintainable automation.
- [Selenide ![GitHub Repo stars](https://img.shields.io/github/stars/codeborne/selenide) ![GitHub last commit](https://img.shields.io/github/last-commit/codeborne/selenide)](https://github.com/codeborne/selenide) - A framework for writing easy-to-read and easy-to-maintain automated tests using a Fluent API. Selenide has a magic trick that resolves most problems with Ajax and timeouts.
- [Galen Framework](http://galenframework.com/) - Automated testing of look and feel for your responsive websites.
- [Serenity](http://www.thucydides.info/) - It is an open source library for writing better quality automated acceptance tests faster. (Formerly Thucydides).
- [seleniumQuery ![GitHub Repo stars](https://img.shields.io/github/stars/seleniumQuery/seleniumQuery) ![GitHub last commit](https://img.shields.io/github/last-commit/seleniumQuery/seleniumQuery)](https://github.com/seleniumQuery/seleniumQuery) - jQuery-like cross-driver interface in Java for WebDriver. Designed as a thin layer, it can be used alone or on top of your favorite framework just to make some cases (e.g. asserting/waiting) simpler when needed.
- [WebDriverManager ![GitHub Repo stars](https://img.shields.io/github/stars/bonigarcia/webdrivermanager) ![GitHub last commit](https://img.shields.io/github/last-commit/bonigarcia/webdrivermanager)](https://github.com/bonigarcia/webdrivermanager) - Automatic management of Selenium WebDriver binaries.

#### C#

- [Selenium with C#](http://seleniumhq.github.io/selenium/docs/api/dotnet/index.html) - Selenium C# bindings
- [Atata ![GitHub Repo stars](https://img.shields.io/github/stars/atata-framework/atata) ![GitHub last commit](https://img.shields.io/github/last-commit/atata-framework/atata)](https://github.com/atata-framework/atata) - Automated web testing full featured framework based on Selenium WebDriver.
- [Strontium ![GitHub Repo stars](https://img.shields.io/github/stars/jimevans/strontium) ![GitHub last commit](https://img.shields.io/github/last-commit/jimevans/strontium)](https://github.com/jimevans/strontium) - A .NET implementation (but outdated) for Selenium/WebDriver (Remote) Server

#### Groovy

- [Geb](http://www.gebish.org/) - It can be used for scripting, scraping and general automation — or equally as a functional/web/acceptance testing solution via integration with testing frameworks such as Spock, JUnit & TestNG.

#### Dart

- [dart.webdriver ![GitHub Repo stars](https://img.shields.io/github/stars/google/webdriver.dart) ![GitHub last commit](https://img.shields.io/github/last-commit/google/webdriver.dart)](https://github.com/google/webdriver.dart) - Provides WebDriver bindings for Dart. These use the WebDriver JSON interface, and as such, require the use of the WebDriver remote server. 

### CSS Regression Testing

- [PhantomCSS ![GitHub Repo stars](https://img.shields.io/github/stars/Huddle/PhantomCSS) ![GitHub last commit](https://img.shields.io/github/last-commit/Huddle/PhantomCSS)](https://github.com/Huddle/PhantomCSS) - Visual/CSS regression testing with PhantomJS.
- [WebdriverCSS ![GitHub Repo stars](https://img.shields.io/github/stars/webdriverio/webdrivercss) ![GitHub last commit](https://img.shields.io/github/last-commit/webdriverio/webdrivercss)](https://github.com/webdriverio/webdrivercss) - Regression testing tool for [WebdriverIO](http://webdriver.io) (currently deprecated, please use [wdio-screenshot](https://www.npmjs.com/package/wdio-screenshot) for the time being).

### Containers

#### Docker

- [elgalu/docker-selenium ![GitHub Repo stars](https://img.shields.io/github/stars/elgalu/docker-selenium) ![GitHub last commit](https://img.shields.io/github/last-commit/elgalu/docker-selenium)](https://github.com/elgalu/docker-selenium) - Selenium in Docker with Chrome & Firefox plus video recording support.
- [Ggr ![GitHub Repo stars](https://img.shields.io/github/stars/aerokube/ggr) ![GitHub last commit](https://img.shields.io/github/last-commit/aerokube/ggr)](https://github.com/aerokube/ggr) - A lightweight load balancer used to create big Selenium clusters.
- [SeleniumHQ/docker-selenium ![GitHub Repo stars](https://img.shields.io/github/stars/SeleniumHQ/docker-selenium) ![GitHub last commit](https://img.shields.io/github/last-commit/SeleniumHQ/docker-selenium)](https://github.com/SeleniumHQ/docker-selenium) - Docker images for Selenium Standalone Server, Hub, and Node configurations with Chrome and Firefox.
- [Selenoid ![GitHub Repo stars](https://img.shields.io/github/stars/aerokube/selenoid) ![GitHub last commit](https://img.shields.io/github/last-commit/aerokube/selenoid)](https://github.com/aerokube/selenoid) - A lightweight Selenium hub implementation launching browsers in Docker containers.
- [zalando/zalenium ![GitHub Repo stars](https://img.shields.io/github/stars/zalando/zalenium) ![GitHub last commit](https://img.shields.io/github/last-commit/zalando/zalenium)](https://github.com/zalando/zalenium) - Allows anyone to have a disposable and flexible Selenium Grid infrastructure
- [bravostudiodev/bravo-grid ![GitHub Repo stars](https://img.shields.io/github/stars/bravostudiodev/bravo-grid) ![GitHub last commit](https://img.shields.io/github/last-commit/bravostudiodev/bravo-grid)](https://github.com/bravostudiodev/bravo-grid) - Docker image/setup for Selenium Grid Extras (see under Selenium Grid section), for providing remote Sikuli test/automation execution and grid node file upload/download support.

#### Kubernetes
- [kubernetes/examples ![GitHub Repo stars](https://img.shields.io/github/stars/kubernetes/examples) ![GitHub last commit](https://img.shields.io/github/last-commit/kubernetes/examples)](https://github.com/kubernetes/examples/tree/master/staging/selenium) - Example deployment of Selenium Hub and Nodes on a Kubernetes cluster
- [Moon ![GitHub Repo stars](https://img.shields.io/github/stars/aerokube/moon) ![GitHub last commit](https://img.shields.io/github/last-commit/aerokube/moon)](https://github.com/aerokube/moon) - A commercial closed-source enterprise Selenium implementation using Kubernetes to launch browsers
- [Callisto ![GitHub Repo stars](https://img.shields.io/github/stars/wrike/callisto) ![GitHub last commit](https://img.shields.io/github/last-commit/wrike/callisto)](https://github.com/wrike/callisto) - An open-source tool to launch browsers in Kubernetes. Separate is created for each selenium session.
- [WebGrid ![GitHub Repo stars](https://img.shields.io/github/stars/TilBlechschmidt/WebGrid) ![GitHub last commit](https://img.shields.io/github/last-commit/TilBlechschmidt/WebGrid)](https://github.com/TilBlechschmidt/WebGrid) - An open-source, decentralized, scalable and robust selenium-grid equivalent.

### Driver

#### Desktop (browsers)

- [Firefox ![GitHub Repo stars](https://img.shields.io/github/stars/SeleniumHQ/selenium) ![GitHub last commit](https://img.shields.io/github/last-commit/SeleniumHQ/selenium)](https://github.com/SeleniumHQ/selenium/wiki/FirefoxDriver) - Firefox driver (for FF < v48) is included in the selenium-server-standalone.jar available in the downloads.
- [Geckodriver ![GitHub Repo stars](https://img.shields.io/github/stars/mozilla/geckodriver) ![GitHub last commit](https://img.shields.io/github/last-commit/mozilla/geckodriver)](https://github.com/mozilla/geckodriver) - Firefox driver (for FF > v48), supported with Selenium >= v3
- [Chrome](https://sites.google.com/a/chromium.org/chromedriver/home) - ChromeDriver is a standalone server which implements WebDriver's wire protocol for Chromium.
- [Internet Explorer ![GitHub Repo stars](https://img.shields.io/github/stars/SeleniumHQ/selenium) ![GitHub last commit](https://img.shields.io/github/last-commit/SeleniumHQ/selenium)](https://github.com/SeleniumHQ/selenium/wiki/InternetExplorerDriver) - The InternetExplorerDriver is a standalone server which implements WebDriver's wire protocol.
- [Edgedriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/) - Microsoft Webdriver server for Edge
- [Safari ![GitHub Repo stars](https://img.shields.io/github/stars/SeleniumHQ/selenium) ![GitHub last commit](https://img.shields.io/github/last-commit/SeleniumHQ/selenium)](https://github.com/SeleniumHQ/selenium/wiki/SafariDriver) - The SafariDriver is implemented as a Safari browser extension. The driver inverts the traditional client/server relationship and communicates with the WebDriver client using WebSockets (only supported for Safari <= v9, all new Safari version comming with macOS Sierra come with an integrated SafariDriver that is closed source by Apple).
- [Opera ![GitHub Repo stars](https://img.shields.io/github/stars/operasoftware/operachromiumdriver) ![GitHub last commit](https://img.shields.io/github/last-commit/operasoftware/operachromiumdriver)](https://github.com/operasoftware/operachromiumdriver/blob/master/README.md) - OperaDriver is a vendor-supported WebDriver implementation developed by Opera Software and volunteers that implements WebDriver API for Opera.

#### Mobile (browsers and apps)

- [Appium](http://appium.io/) - Appium is an open source test automation framework for use with native and hybrid mobile apps. It drives iOS, Android Apps using the WebDriver protocol.
- [Selendroid](http://selendroid.io/mobileWeb.html) - Selendroid is based on the Android instrumentation framework.
- [ios-driver](http://ios-driver.github.io/ios-driver/) - Test any IOS native, hybrid, or mobile web application using Selenium / WebDriver.
- [WebDriverAgent ![GitHub Repo stars](https://img.shields.io/github/stars/manishPatwari/WebDriverAgent) ![GitHub last commit](https://img.shields.io/github/last-commit/manishPatwari/WebDriverAgent)](https://github.com/manishPatwari/WebDriverAgent) - a WebDriver server for iOS to remote control devices via WebDriver API.

#### Desktop GUI Automation (non-browser-centric)

- [WinAppDriver ![GitHub Repo stars](https://img.shields.io/github/stars/Microsoft/WinAppDriver) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/WinAppDriver)](https://github.com/Microsoft/WinAppDriver) - Microsoft's WebDriver implementation for Windows application automation.
- [Winium ![GitHub Repo stars](https://img.shields.io/github/stars/2gis/Winium) ![GitHub last commit](https://img.shields.io/github/last-commit/2gis/Winium)](https://github.com/2gis/Winium) - Automation framework for Windows platforms. It is free. It is opensource. It is Selenium-based. Supports: Windows Desktop (WPF, WinForms); Windows Store or Universal Apps for Windows Phone; Windows Phone Silverlight Apps.
- [QtWebDriver ![GitHub Repo stars](https://img.shields.io/github/stars/cisco-open-source/qtwebdriver) ![GitHub last commit](https://img.shields.io/github/last-commit/cisco-open-source/qtwebdriver)](https://github.com/cisco-open-source/qtwebdriver) - For using WebDriver to automate Qt-based GUI applications.
- [AutoItDriverServer ![GitHub Repo stars](https://img.shields.io/github/stars/daluu/AutoItDriverServer) ![GitHub last commit](https://img.shields.io/github/last-commit/daluu/AutoItDriverServer)](https://github.com/daluu/AutoItDriverServer) - Selenium server to control/drive AutoIt via (Remote)WebDriver API.
- [AutoPyDriverServer ![GitHub Repo stars](https://img.shields.io/github/stars/daluu/AutoPyDriverServer) ![GitHub last commit](https://img.shields.io/github/last-commit/daluu/AutoPyDriverServer)](https://github.com/daluu/AutoPyDriverServer) - Selenium server to control/drive AutoPy via (Remote)WebDriver API.
- [Appium for Mac](https://appium.io/docs/en/drivers/mac/) - Appium/WebDriver implementation for automating Mac OS X desktop.
- [SilkAppDriver ![GitHub Repo stars](https://img.shields.io/github/stars/MicroFocus/SilkAppDriver) ![GitHub last commit](https://img.shields.io/github/last-commit/MicroFocus/SilkAppDriver)](https://github.com/MicroFocus/SilkAppDriver) - Selenium server to control/drive the commercial SilkTest platform via (Remote)WebDriver API.

### Desktop Tools

- [SWD Page Recorder ![GitHub Repo stars](https://img.shields.io/github/stars/dzharii/swd-recorder) ![GitHub last commit](https://img.shields.io/github/last-commit/dzharii/swd-recorder)](https://github.com/dzharii/swd-recorder) - Windows Desktop application that makes it easy to create, test and debug new Selenium Webdriver PageObject classes. It works with C#, Java, Python and Ruby out of the box and you may add own code generation templates.
- [SWET ![GitHub Repo stars](https://img.shields.io/github/stars/sergueik/SWET) ![GitHub last commit](https://img.shields.io/github/last-commit/sergueik/SWET)](https://github.com/sergueik/SWET) - A successor to SWD Page Recorder, for the same functionality.
- [Looking Glass ![GitHub Repo stars](https://img.shields.io/github/stars/dmolchanenko/LookingGlass) ![GitHub last commit](https://img.shields.io/github/last-commit/dmolchanenko/LookingGlass)](https://github.com/dmolchanenko/LookingGlass) - Java application that offers a cross-browser element inspector and Selenium code generator.
- [Ranorex Selocity](https://www.ranorex.com/selocity/browser-extension/) - A Firebug/FirePath/Firefinder and Selenium IDE alternative for browser element inspection from the creators of Ranorex.
- [Silk WebDriver](https://www.microfocus.com/products/silk-portfolio/silk-webdriver/) - A Selenium IDE alternative for record, playback, and script export, from the creators of SilkTest.
- [Fire IE Selenium](https://code.google.com/archive/p/fire-ie-selenium/) - Microsoft Excel-based tool providing element inspection for Internet Explorer browser.

### Selenium Grid

- [Selenium Grid Extras ![GitHub Repo stars](https://img.shields.io/github/stars/groupon/Selenium-Grid-Extras) ![GitHub last commit](https://img.shields.io/github/last-commit/groupon/Selenium-Grid-Extras)](https://github.com/groupon/Selenium-Grid-Extras) - A framework that provides additional features beyond the basic Selenium Grid like video recording.
- [SeLion ![GitHub Repo stars](https://img.shields.io/github/stars/paypal/SeLion) ![GitHub last commit](https://img.shields.io/github/last-commit/paypal/SeLion)](https://github.com/paypal/SeLion) - A (Java) framework for running Selenium tests with additional features beyond the basic Selenium Grid functionality, particularly like stability improvements, etc.
- [Selenium Grid Extensions ![GitHub Repo stars](https://img.shields.io/github/stars/sterodium/selenium-grid-extensions) ![GitHub last commit](https://img.shields.io/github/last-commit/sterodium/selenium-grid-extensions)](https://github.com/sterodium/selenium-grid-extensions) - A set of extensions for Selenium Grid that provide additional features like running Sikuli tests/automation remotely, upload/download files on a grid node.

### Cloud Services

- [Sauce Labs](https://saucelabs.com) - Cross browser testing made awesome. Selenium testing, mobile testing, JS unit testing on 300+ OS/browser platforms. Get started for free.
- [Browserstack](https://www.browserstack.com/) - Test your website for cross browser compatibility on real browsers. Instant access to multiple desktop and mobile browsers. Get Free Trial.
- [LambdaTest](https://www.lambdatest.com/selenium-automation) - Test your website for cross browser compatibility on 2000+ real browsers & OS. Get Free Trial.
- [TestingBot](https://testingbot.com) - TestingBot provides easy cross browser testing with Selenium in the cloud.
- [Aerokube Browsers](https://browsers.aerokube.com) - Lightning fast online Selenium testing platform with unlimited billing plans and reasonable pricing.
- [Moon Cloud](https://aerokube.com/moon/#cloud) - Your dedicated Selenium cluster in public cloud platform with per-minute billing and unlimited number of browsers.
- [Mail7](https://www.mail7.io/) - Disposable email service to automate the email workflow testing, [This document](https://docs.mail7.io/tutorials/registration-and-login-automation-using-selenium-with-disposable-email) explains how to implement Mail7 with Selenium

### Device Farms

- [OpenSTF ![GitHub Repo stars](https://img.shields.io/github/stars/openstf/stf) ![GitHub last commit](https://img.shields.io/github/last-commit/openstf/stf)](https://github.com/openstf/stf) - A framework for running your own device farm, geared toward Android, but also iOS.

### Web Scraping / Mining

- [Scrapy](http://scrapy.org) - **Python**, mainly a scraper/miner - fast, well documented and, can be linked with [Django Dynamic Scraper](http://django-dynamic-scraper.readthedocs.org/en/latest/) for nice mining deployments, or [Scrapy Cloud](http://scrapinghub.com/scrapy-cloud.html) for PaaS (server-less) deployment, works in terminal or an server stand-alone process, can be used with **Celery**, built on top of **Twisted**.
- [Node-Crawler ![GitHub Repo stars](https://img.shields.io/github/stars/sylvinus/node-crawler) ![GitHub last commit](https://img.shields.io/github/last-commit/sylvinus/node-crawler)](https://github.com/sylvinus/node-crawler) - **Node.js** Web Crawler/Spider for NodeJS + server-side jQuery.

### Specifications

- [The WebDriver Wire Protocol ![GitHub Repo stars](https://img.shields.io/github/stars/SeleniumHQ/selenium) ![GitHub last commit](https://img.shields.io/github/last-commit/SeleniumHQ/selenium)](https://github.com/SeleniumHQ/selenium/wiki/JsonWireProtocol) - All implementations of WebDriver that communicate with the browser, or a RemoteWebDriver server shall use a common wire protocol.
- [WebDriver](http://www.w3.org/TR/webdriver/) - This specification defines the WebDriver API, a platform and language-neutral interface and associated wire protocol that allows programs or scripts to introspect into, and control the behavior of, a web browser.

### Blogs

- [Official Selenium Blog](https://seleniumhq.wordpress.com/) - The official blog by SeleniumHQ.
- [Elemental Selenium](http://elementalselenium.com/) - A free, once-weekly e-mail on how to use Selenium like a Pro.
- [Assert Selenium](http://www.assertselenium.com/) - Selenium Automation in a Right way - A Selenium only blog.
- [SauceLabs Blog](https://saucelabs.com/blog) - Blog curated by SauceLabs.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Christian Bromann](http://www.christian-bromann.com/) has waived all copyright and related or neighboring rights to this work.
