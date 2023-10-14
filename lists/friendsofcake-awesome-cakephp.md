# Awesome CakePHP [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
A curated list of amazingly awesome **CakePHP 4.x+** plugins, resources and shiny things.

Plugins with the "🍰" icon have CakePHP 5 compatible release too (minimum "beta").

If you are looking for previous CakePHP resources please visit:
- the [CakePHP 2.x version ![GitHub Repo Stars](https://img.shields.io/github/stars/FriendsOfCake/awesome-cakephp) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/awesome-cakephp)](https://github.com/FriendsOfCake/awesome-cakephp/tree/cake2) of this awesome list
- the [CakePHP 3.x version ![GitHub Repo Stars](https://img.shields.io/github/stars/FriendsOfCake/awesome-cakephp) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/awesome-cakephp)](https://github.com/FriendsOfCake/awesome-cakephp/tree/cake3) of this awesome list
- this wiki with a [list of not-yet upgraded plugins ![GitHub Repo Stars](https://img.shields.io/github/stars/FriendsOfCake/awesome-cakephp) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/awesome-cakephp)](https://github.com/FriendsOfCake/awesome-cakephp/wiki#plugins-not-yet-upgraded-from-2x-to-3x)

Additional lists you might find useful:
- [CakePHP Plugins](https://plugins.cakephp.org)
- [Awesome PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/ziadoz/awesome-php) ![GitHub last commit](https://img.shields.io/github/last-commit/ziadoz/awesome-php)](https://github.com/ziadoz/awesome-php)
- [Awesome Awesomeness ![GitHub Repo Stars](https://img.shields.io/github/stars/bayandin/awesome-awesomeness) ![GitHub last commit](https://img.shields.io/github/last-commit/bayandin/awesome-awesomeness)](https://github.com/bayandin/awesome-awesomeness)

> For those wondering; this list differs from plugins.cakephp.org by supporting
> plugin subparts (instead of only the whole plugin/repo), more granular
> grouping and the primary focus on task-specific functionality.

## Table of Contents

- [Plugins](#plugins)
	- [APM](#apm)
	- [Architecture](#architecture)
	- [Asset Management](#asset-management)
	- [Auditing / Logging](#auditing--logging)
	- [Authentication and Authorization](#authentication-and-authorization)
	- [Caching](#caching)
	- [Code Analysis](#code-analysis)
	- [Debugging](#debugging)
	- [Dependency Injection](#dependency-injection)
	- [E-commerce](#e-commerce)
	- [Email](#email)
	- [Environment](#environment)
	- [File Manipulation](#file-manipulation)
	- [Filtering and Validation](#filtering-and-validation)
	- [Geolocation](#geolocation)
	- [HTTP](#http)
	- [I18n](#i18n)
	- [Imagery](#imagery)
	- [Libs](#libs)
	- [Markup](#markup)
	- [Migration](#migration)
	- [Miscellaneous](#miscellaneous)
	- [Navigation](#navigation)
	- [NoSQL](#nosql)
	- [Notifications](#notifications)
	- [ORM / Database / Datamapping](#orm--database--datamapping)
	- [PDF](#pdf)
	- [Queue](#queue)
	- [REST and API](#rest-and-api)
	- [Search](#search)
	- [Security](#security)
	- [SEO](#seo)
	- [Skeleton](#skeleton)
	- [Social](#social)
	- [Templating](#templating)
	- [Testing](#testing)
	- [Third Party APIs](#third-party-apis)
- [Software](#software)
	- [Development Environment](#development-environment)
- [Web Applications](#web-applications)
	- [CMS and applications built on CakePHP](#cms-and-applications-built-on-cakephp)
	- [Demo](#demo)
- [Resources](#resources)
	- [Help](#help)
	- [CakePHP Websites](#cakephp-websites)
	- [CakePHP Books and Articles](#cakephp-books-and-articles)
	- [CakePHP Videos](#cakephp-videos)
	- [CakePHP Tutorials](#cakephp-tutorials)
	- [CakePHP Reading and Listening](#cakephp-reading-and-listening)
	- [CakePHP Internals Reading](#cakephp-internals-reading)
- [Conferences](#conferences)
- [Contributing](#contributing)

# Plugins

## APM
*Plugins for Application Performance Monitoring.*


## Architecture

- 🍰 [Burzum/CakeServiceLayer plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/burzum/cakephp-service-layer) ![GitHub last commit](https://img.shields.io/github/last-commit/burzum/cakephp-service-layer)](https://github.com/burzum/cakephp-service-layer) - Service layer and domain/business model implementation.

## Asset Management
*Tools for managing, compressing and minifying website assets.*

- 🍰 [AssetCompress plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/markstory/asset_compress) ![GitHub last commit](https://img.shields.io/github/last-commit/markstory/asset_compress)](https://github.com/markstory/asset_compress) - A complete asset manager for CakePHP.
- 🍰 [AssetMix plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/ishanvyas22/asset-mix) ![GitHub last commit](https://img.shields.io/github/last-commit/ishanvyas22/asset-mix)](https://github.com/ishanvyas22/asset-mix) - Provides integration with [Laravel Mix](https://laravel-mix.com) asset compilation.

## Auditing / Logging
*Plugins for auditing and logging.*

- [AuditStash plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/lorenzo/audit-stash) ![GitHub last commit](https://img.shields.io/github/last-commit/lorenzo/audit-stash)](https://github.com/lorenzo/audit-stash) - Flexible and rock solid audit log tracking.
- 🍰 [DatabaseLog plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/CakePHP-DatabaseLog) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/CakePHP-DatabaseLog)](https://github.com/dereuromark/CakePHP-DatabaseLog) - Simple and stand-alone logging to database instead of files.
- 🍰 [Muffin/Footprint plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/UseMuffin/Footprint) ![GitHub last commit](https://img.shields.io/github/last-commit/UseMuffin/Footprint)](https://github.com/UseMuffin/Footprint) - Plugin to allow passing currently logged in user to model layer.
- [Version plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/josegonzalez/cakephp-version) ![GitHub last commit](https://img.shields.io/github/last-commit/josegonzalez/cakephp-version)](https://github.com/josegonzalez/cakephp-version) - A plugin that facilitates versioned database entities.

## Authentication and Authorization
*Plugins and libraries for implementing authentication and authorization.*

- [Acl plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/acl) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/acl)](https://github.com/cakephp/acl/) - Managing ACL as database approach.
- [ADmad/JwtAuth plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/ADmad/cakephp-jwt-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/ADmad/cakephp-jwt-auth)](https://github.com/ADmad/cakephp-jwt-auth) - A plugin for authenticating using JSON Web Tokens.
- [ADmad/SocialAuth plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/ADmad/cakephp-social-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/ADmad/cakephp-social-auth)](https://github.com/ADmad/cakephp-social-auth) - A plugin which allows you to authenticate using social providers like Facebook/Google/Twitter etc. using [SocialConnect/auth ![GitHub Repo Stars](https://img.shields.io/github/stars/SocialConnect/auth) ![GitHub last commit](https://img.shields.io/github/last-commit/SocialConnect/auth)](https://github.com/SocialConnect/auth) social sign on library.
- [ApiTokenAuthenticator plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/rrd108/api-token-authenticator) ![GitHub last commit](https://img.shields.io/github/last-commit/rrd108/api-token-authenticator)](https://github.com/rrd108/api-token-authenticator) - A simple token authentication plugin for CakePHP REST APIs.
- 🍰 [Authentication plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/authentication) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/authentication)](https://github.com/cakephp/authentication) - Official CakePHP authentication middleware plugin.
- 🍰 [Authorization plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/authorization) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/authorization)](https://github.com/cakephp/authorization) - Official CakePHP authorization stack.
- 🍰 [CakeDC/Users plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/CakeDC/users) ![GitHub last commit](https://img.shields.io/github/last-commit/CakeDC/users)](https://github.com/CakeDC/users) - Complete user management (admin panel, remember me, etc), Social login (FB, Twitter, LinkedIn, Google, Instagram), RBAC, API and more.
- [Muffin/Tokenize plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/UseMuffin/Tokenize) ![GitHub last commit](https://img.shields.io/github/last-commit/UseMuffin/Tokenize)](https://github.com/UseMuffin/Tokenize) - Event driven behavior for easily generating single-use security tokens.
- 🍰 [TinyAuth plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-tinyauth) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-tinyauth)](https://github.com/dereuromark/cakephp-tinyauth) - Authentication and role based (single/multi) authorization as very light-weight approach.
- 🍰 [Tools:Passwordable ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-tools)](https://github.com/dereuromark/cakephp-tools) - Containing [Passwordable behavior ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-tools)](https://github.com/dereuromark/cakephp-tools/blob/master/docs/Behavior/Passwordable.md) for a DRY approach on password hashing.
- [TwoFactorAuth plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/andrej-griniuk/cakephp-two-factor-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/andrej-griniuk/cakephp-two-factor-auth)](https://github.com/andrej-griniuk/cakephp-two-factor-auth) - Allows two factor authentication using Google Authenticator or similar app to generate one-time codes. Based on [RobThree/TwoFactorAuth ![GitHub Repo Stars](https://img.shields.io/github/stars/RobThree/TwoFactorAuth) ![GitHub last commit](https://img.shields.io/github/last-commit/RobThree/TwoFactorAuth)](https://github.com/RobThree/TwoFactorAuth) library.

## Caching
*Plugins for caching data.*

- [Cache plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-cache) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-cache)](https://github.com/dereuromark/cakephp-cache) - For caching views (HTML, CSV, JSON, XML, ...) as static cache files.

## Code Analysis
*Plugins for analysing, parsing and manipulation codebases.*

- 🍰 [CakeDC/PHPStan ![GitHub Repo Stars](https://img.shields.io/github/stars/CakeDC/cakephp-phpstan) ![GitHub last commit](https://img.shields.io/github/last-commit/CakeDC/cakephp-phpstan)](https://github.com/CakeDC/cakephp-phpstan) - A PHPStan extension to resolve CakePHP magic around getter return types for the static analyzer.
- 🍰 [IdeHelper plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-ide-helper) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-ide-helper)](https://github.com/dereuromark/cakephp-ide-helper) - Helps to make IDE support better by adding annotations to your existing code similar to what baking does to new code.
- 🍰 [IdeHelperExtra plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-ide-helper-extra) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-ide-helper-extra)](https://github.com/dereuromark/cakephp-ide-helper-extra) - Useful IdeHelper addons for other plugins or custom use cases.
- [TestHelper plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-test-helper) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-test-helper)](https://github.com/dereuromark/cakephp-test-helper) - Provides testing enhancements and TDD support as browser backend.

## Debugging
*Plugins for debugging and local development.*

- [AssociationsDebugger plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/zunnu/associations-debugger) ![GitHub last commit](https://img.shields.io/github/last-commit/zunnu/associations-debugger)](https://github.com/zunnu/associations-debugger) - A plugin that draws your model associations as diagram.
- 🍰 [CakephpWhoops plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-whoops) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-whoops)](https://github.com/dereuromark/cakephp-whoops) - PHP errors and exceptions for cool kids with [filp/whoops ![GitHub Repo Stars](https://img.shields.io/github/stars/filp/whoops) ![GitHub last commit](https://img.shields.io/github/last-commit/filp/whoops)](https://github.com/filp/whoops).
- 🍰 [DebugKit plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/debug_kit) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/debug_kit)](https://github.com/cakephp/debug_kit) - The de-facto standard for debugging.
- [Execution order ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/executionorder) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/executionorder)](https://github.com/dereuromark/executionorder) - A demo app to display the execution order of files, methods and callbacks.
- 🍰 [Sentry plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/lordsimal/cakephp-sentry) ![GitHub last commit](https://img.shields.io/github/last-commit/lordsimal/cakephp-sentry)](https://github.com/lordsimal/cakephp-sentry) A plugin to seamlessly integrate Sentry for errors and exceptions.
- 🍰 [Setup plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-setup) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-setup)](https://github.com/dereuromark/cakephp-setup) - A lightweight setup plugin containing debugging and maintenance tools.

## Dependency Injection
*Plugins that implement the dependency injection design pattern.*


## E-commerce
*Plugins and applications for taking payments and building online e-commerce stores.*


## Email
*Plugins for sending and parsing email.*

- [EmailQueue plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/lorenzo/cakephp-email-queue) ![GitHub last commit](https://img.shields.io/github/last-commit/lorenzo/cakephp-email-queue)](https://github.com/lorenzo/cakephp-email-queue) - Email queue plugin with a preview and sender shell.
- [Mailgun plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/narendravaghela/cakephp-mailgun) ![GitHub last commit](https://img.shields.io/github/last-commit/narendravaghela/cakephp-mailgun)](https://github.com/narendravaghela/cakephp-mailgun) - Email transport plugin for sending email via Mailgun.

## Environment
*Plugins for environment.*


## File Manipulation
*Plugins for file manipulation.*

- [FileStorage plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-file-storage) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-file-storage)](https://github.com/dereuromark/cakephp-file-storage) - Flexible file storage and upload plugin.
- [Josbeir/Filesystem plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/josbeir/cakephp-filesystem) ![GitHub last commit](https://img.shields.io/github/last-commit/josbeir/cakephp-filesystem)](https://github.com/josbeir/cakephp-filesystem) - Abstract [Flysystem](https://flysystem.thephpleague.com/) + file entity based upload plugin.
- 🍰 [Josegonzalez/Upload plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/FriendsOfCake/cakephp-upload) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/cakephp-upload)](https://github.com/FriendsOfCake/cakephp-upload) - A customisable plugin that uses [Flysystem](https://flysystem.thephpleague.com/) to write to multiple backends (Dropbox, FTP, S3, Local, etc.).

## Filtering and Validation
*Plugins for filtering and validating data.*


## Geolocation
*Plugins for geocoding addresses and working with latitudes and longitudes.*

- 🍰 [Geo plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-geo) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-geo)](https://github.com/dereuromark/cakephp-geo) - Containing [Geocoder behavior](https://www.dereuromark.de/2012/06/12/geocoding-with-cakephp/) and [GoogleMaps helper](https://www.dereuromark.de/2010/12/21/googlemapsv3-cakephp-helper/).

## HTTP
*Plugins for HTTP and client abstraction*

- [Http/Adapter/Cake library ![GitHub Repo Stars](https://img.shields.io/github/stars/php-http/cakephp-adapter) ![GitHub last commit](https://img.shields.io/github/last-commit/php-http/cakephp-adapter)](https://github.com/php-http/cakephp-adapter) - Adapter for [HTTPlug ![GitHub Repo Stars](https://img.shields.io/github/stars/php-http/httplug) ![GitHub last commit](https://img.shields.io/github/last-commit/php-http/httplug)](https://github.com/php-http/httplug) HTTP client abstraction.

## I18n
*Plugins for I18n (Internationalization) and L10n (Localization).*

- 🍰 [ADmad/I18n plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/ADmad/cakephp-i18n) ![GitHub last commit](https://img.shields.io/github/last-commit/ADmad/cakephp-i18n)](https://github.com/ADmad/cakephp-i18n) - A plugin with I18n related tools.
- [Cake/Localized plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/localized) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/localized)](https://github.com/cakephp/localized) - Localized validation and ready-to-use translation PO files.
- [Translate plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-translate) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-translate)](https://github.com/dereuromark/cakephp-translate) - Manage translations of your static content the easy way via web backend, incl. import from POT files, auto-suggest and auto-translate via API.

## Imagery
*Plugins for manipulating images.*

- 🍰 [ADmad/Glide plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/ADmad/cakephp-glide) ![GitHub last commit](https://img.shields.io/github/last-commit/ADmad/cakephp-glide)](https://github.com/ADmad/cakephp-glide) - A plugin for using [Glide](https://glide.thephpleague.com/) image manipulation library.

## Libs
*Useful libraries or tools that don't fit in any of the other categories.*

- [Capcake ![GitHub Repo Stars](https://img.shields.io/github/stars/jadb/capcake) ![GitHub last commit](https://img.shields.io/github/last-commit/jadb/capcake)](https://github.com/jadb/capcake) - Deploy CakePHP applications using Capistrano.
- [Chronos ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/chronos) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/chronos)](https://github.com/cakephp/chronos) - A simple standalone DateTime API extension (successor of Carbon).
- [Composer Installers ![GitHub Repo Stars](https://img.shields.io/github/stars/composer/installers) ![GitHub last commit](https://img.shields.io/github/last-commit/composer/installers)](https://github.com/composer/installers) - A multi framework Composer library installer.
- [Composer](https://getcomposer.org/)/[Packagist](https://packagist.org/) - A package and dependency manager.
- [Graphviz ![GitHub Repo Stars](https://img.shields.io/github/stars/alexandresalome/graphviz) ![GitHub last commit](https://img.shields.io/github/last-commit/alexandresalome/graphviz)](https://github.com/alexandresalome/graphviz) - A Graphviz library.
- [Rocketeer ![GitHub Repo Stars](https://img.shields.io/github/stars/rocketeers/rocketeer) ![GitHub last commit](https://img.shields.io/github/last-commit/rocketeers/rocketeer)](https://github.com/rocketeers/rocketeer) - PHP task runner and deployment package.
- 🍰 [makallio85/YamlRoute plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/makallio85/yaml-route) ![GitHub last commit](https://img.shields.io/github/last-commit/makallio85/yaml-route)](https://github.com/makallio85/yaml-route) - Configure routes with simple YAML files.

## Markup
*Plugins for working with markup.*

- 🍰 [Markup plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-markup) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-markup)](https://github.com/dereuromark/cakephp-markup) - Allows to use PHP or JS based syntax highlighting.

## Migration
*Plugins and resources around migration and upgrading.*

- 🍰 [Migrations plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/migrations) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/migrations)](https://github.com/cakephp/migrations) - (DB) Migration plugin.
- [Upgrade app ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/upgrade) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/upgrade)](https://github.com/cakephp/upgrade) - Official upgrade app for 2.x=>3.x and 3.x=>4.x.
- [Upgrade app (extended) ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/upgrade) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/upgrade)](https://github.com/dereuromark/upgrade) - An extended upgrade app for 2.x=>3.x, between 3.x and some 4.x snippets.
- [Upgrade/Migration Guide](https://book.cakephp.org/4.0/en/appendices.html) - Official migration guide.

## Miscellaneous
*Misc plugins and libraries.*

- 🍰 [Ajax plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-ajax) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-ajax)](https://github.com/dereuromark/cakephp-ajax) - A plugin to ease handling AJAX requests.
- 🍰 [CakeDC/Enum plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/CakeDC/enum) ![GitHub last commit](https://img.shields.io/github/last-commit/CakeDC/enum)](https://github.com/CakeDC/enum) - A plugin to add enumeration list support to your app.
- 🍰 [CakeDto plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-dto) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-dto)](https://github.com/dereuromark/cakephp-dto) - Quickly generate useful data transfer objects for your app (mutable/immutable), replacing messy arrays and leveraging your IDE through typehinting and autocomplete.
- [CakeImpersonate plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/jomweb/CakeImpersonate) ![GitHub last commit](https://img.shields.io/github/last-commit/jomweb/CakeImpersonate)](https://github.com/jomweb/CakeImpersonate) - A component that stores the current authentication session and creates new session for impersonating Users. User can revert back to original authentication sessions without the need to re-login.
- 🍰 [Calendar plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-calendar) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-calendar)](https://github.com/dereuromark/cakephp-calendar) - For generating basic calendars. Includes IcalView for ICS calendar file generation.
- 🍰 [Feedback plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-feedback) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-feedback)](https://github.com/dereuromark/cakephp-feedback) - Allow visitors to send quick and easy feedback incl. a screenshot via sidebar form.
- 🍰 [Flash plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-flash) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-flash)](https://github.com/dereuromark/cakephp-flash) - More powerful flash messages for your application.
- 🍰 [OPCache Preloader ![GitHub Repo Stars](https://img.shields.io/github/stars/cnizzardini/cakephp-preloader) ![GitHub last commit](https://img.shields.io/github/last-commit/cnizzardini/cakephp-preloader)](https://github.com/cnizzardini/cakephp-preloader) - An OPCache Preloader for CakePHP applications. 
- 🍰 [Setup:Maintenance ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-setup) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-setup)](https://github.com/dereuromark/cakephp-setup/blob/master/docs/Maintenance/Maintenance.md) - Maintenance shell to go into maintenance mode for all requests with optional IP whitelisting.
- 🍰 [Shim plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-shim) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-shim)](https://github.com/dereuromark/cakephp-shim) - A plugin containing useful shims and improvements as basis for your application.
- 🍰 [Tools plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-tools)](https://github.com/dereuromark/cakephp-tools) - Containing lots of useful libs, helpers, behaviors, components, shells and more.

## Navigation
*Tools for building navigation structures.*

- 🍰 [Icings/Menu plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/icings/menu) ![GitHub last commit](https://img.shields.io/github/last-commit/icings/menu)](https://github.com/icings/menu) - A [KnpMenu ![GitHub Repo Stars](https://img.shields.io/github/stars/KnpLabs/KnpMenu) ![GitHub last commit](https://img.shields.io/github/last-commit/KnpLabs/KnpMenu)](https://github.com/KnpLabs/KnpMenu) seasoned menu plugin for CakePHP.

## NoSQL
*Plugins for working with "NoSQL" backends.*

## Notifications
*Plugins for working with notification software.*


## ORM / Database / Datamapping
*Plugins that implement object-relational mapping or data-mapping techniques.*

- 🍰 [ADmad/Sequence plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/ADmad/cakephp-sequence) ![GitHub last commit](https://img.shields.io/github/last-commit/ADmad/cakephp-sequence)](https://github.com/ADmad/cakephp-sequence) - Behavior for maintaining ordered list of records.
- 🍰 [CakeDecimal plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-decimal) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-decimal)](https://github.com/dereuromark/cakephp-decimal) - A value object approach on handling decimals.
- 🍰 [Duplicatable plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/riesenia/cakephp-duplicatable) ![GitHub last commit](https://img.shields.io/github/last-commit/riesenia/cakephp-duplicatable)](https://github.com/riesenia/cakephp-duplicatable) - Behavior for duplicating entities including related data.
- [Lampager/Cake plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/lampager/lampager-cakephp) ![GitHub last commit](https://img.shields.io/github/last-commit/lampager/lampager-cakephp)](https://github.com/lampager/lampager-cakephp) - Rapid pagination without using OFFSET.
- 🍰 [Muffin/Orderly plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/usemuffin/orderly) ![GitHub last commit](https://img.shields.io/github/last-commit/usemuffin/orderly)](https://github.com/usemuffin/orderly) - Allows setting default order for your tables.
- [Muffin/Sti plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/UseMuffin/Sti) ![GitHub last commit](https://img.shields.io/github/last-commit/UseMuffin/Sti)](https://github.com/UseMuffin/Sti) - Single Table Inheritance for CakePHP. 
- 🍰 [Muffin/Trash plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/usemuffin/trash) ![GitHub last commit](https://img.shields.io/github/last-commit/usemuffin/trash)](https://github.com/usemuffin/trash) - Soft-delete behavior for CakePHP.
- [Robotusers/TableInheritance plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/robotusers/cakephp-table-inheritance) ![GitHub last commit](https://img.shields.io/github/last-commit/robotusers/cakephp-table-inheritance)](https://github.com/robotusers/cakephp-table-inheritance) - Singe Table Inheritance (STI) plugin.
- [RowLocker plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/lorenzo/row-locker) ![GitHub last commit](https://img.shields.io/github/last-commit/lorenzo/row-locker)](https://github.com/lorenzo/row-locker) - Exclusive locks for rows in your tables.
- [Muffin/Webservices ORM plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/usemuffin/webservice) ![GitHub last commit](https://img.shields.io/github/last-commit/usemuffin/webservice)](https://github.com/usemuffin/webservice) - An ORM like interface for webservices.
- [Connehito/CakephpMasterReplica plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/Connehito/cakephp-master-replica) ![GitHub last commit](https://img.shields.io/github/last-commit/Connehito/cakephp-master-replica)](https://github.com/Connehito/cakephp-master-replica) - Switch master/replica database connections.
- [Itosho/EasyQuery plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/itosho/easy-query) ![GitHub last commit](https://img.shields.io/github/last-commit/itosho/easy-query)](https://github.com/itosho/easy-query) - Behavior for easily generating some complicated queries like (bulk) insert/upsert etc.
- 🍰 [Icings/Partitionable plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/icings/partitionable) ![GitHub last commit](https://img.shields.io/github/last-commit/icings/partitionable)](https://github.com/icings/partitionable) - Partitionable associations allowing for basic limiting per group.

## PDF
*Plugins and software for working with PDF files.*

- 🍰 [CakePdf plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/FriendsOfCake/CakePdf) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/CakePdf)](https://github.com/FriendsOfCake/CakePdf) - A plugin around PDF generation.

## Queue
*Plugins for working with event and task queues.*

- [CakeQueuesadilla plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/josegonzalez/cakephp-queuesadilla) ![GitHub last commit](https://img.shields.io/github/last-commit/josegonzalez/cakephp-queuesadilla)](https://github.com/josegonzalez/cakephp-queuesadilla) - A plugin that provides queueing integration with a variety of backends (BeanstalkD, MySQL, Redis, etc.).
- 🍰 [Queue plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-queue) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-queue)](https://github.com/dereuromark/cakephp-queue) - A minimal and dependency-free queue solution.
- 🍰 [Queue plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/queue) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/queue)](https://github.com/cakephp/queue) - CakePHP core queue system for the [php-queue](https://php-enqueue.github.io) queue library.

## REST and API
*Plugins and web tools for developing REST-ful APIs.*

- 🍰 [CRUD plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/FriendsOfCake/crud) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/crud)](https://github.com/FriendsOfCake/crud) - CakePHP Application development on steroids - rapid prototyping / scaffolding & production-ready code.
- [Alt3/Swagger plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/alt3/cakephp-swagger) ![GitHub last commit](https://img.shields.io/github/last-commit/alt3/cakephp-swagger)](https://github.com/alt3/cakephp-swagger) - Swagger 2.0 documentation for your CakePHP APIs using swagger-php and swagger-ui.
- 🍰 [CakeDC/Api plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/CakeDC/cakephp-api) ![GitHub last commit](https://img.shields.io/github/last-commit/CakeDC/cakephp-api)](https://github.com/CakeDC/cakephp-api) - All-in-one solution to provide a complete API. It includes versioning, renderers, CRUD, authentication, extensions (paginate, filter, HATEOAS), and much more.
- [FractalTransformerView plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/andrej-griniuk/cakephp-fractal-transformer-view) ![GitHub last commit](https://img.shields.io/github/last-commit/andrej-griniuk/cakephp-fractal-transformer-view)](https://github.com/andrej-griniuk/cakephp-fractal-transformer-view) - A plugin which allows using [Fractal transformers](https://fractal.thephpleague.com/transformers/) for your API output.
- [MixerApi](https://mixerapi.com) - Streamline development of modern RESTful APIs for your team's CakePHP project.
- [SwaggerBake plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/cnizzardini/cakephp-swagger-bake) ![GitHub last commit](https://img.shields.io/github/last-commit/cnizzardini/cakephp-swagger-bake)](https://github.com/cnizzardini/cakephp-swagger-bake) - This plugin automatically builds OpenAPI from your existing models and routes for display in Swagger and Redoc.

## Search
*Plugins and software for indexing and performing search queries on data.*

- 🍰 [Cake/ElasticSearch plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/elastic-search) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/elastic-search)](https://github.com/cakephp/elastic-search) - Alternative ORM using [Elasticsearch](https://www.elastic.co/) as its backend.
- 🍰 [PlumSearch plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/skie/plum_search) ![GitHub last commit](https://img.shields.io/github/last-commit/skie/plum_search)](https://github.com/skie/plum_search) - Implements custom, flexible and extendable search strategies. Implements PRG pattern.
- 🍰 [Search plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/FriendsOfCake/search) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/search)](https://github.com/FriendsOfCake/search) - Provides easy searching/filtering for paginated views using PRG pattern.
- 🍰 [Tags plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-tags) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-tags)](https://github.com/dereuromark/cakephp-tags) - For tagging and finding tagged records.

## Security
*Plugins and information around security, preventing vulnerabilities and protection against XSS and alike.*

- [Bruteforce ![GitHub Repo Stars](https://img.shields.io/github/stars/Ali1/cakephp-bruteforce) ![GitHub last commit](https://img.shields.io/github/last-commit/Ali1/cakephp-bruteforce)](https://github.com/Ali1/cakephp-bruteforce/) - Simple way to add Brute Force Protection to your installation without involving database.
- 🍰 [Captcha plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-captcha) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-captcha)](https://github.com/dereuromark/cakephp-captcha) - Simple, unobtrusive and extendable captcha solution providing by default an image based math captcha.
- 🍰 [Expose plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-expose) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-expose)](https://github.com/dereuromark/cakephp-expose) - Expose entities through additional UUIDs instead of their AIID primary keys to obfuscate those IDs and data associated with these numerically ordered values.
- 🍰 [Muffin/Obfuscate plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/usemuffin/obfuscate) ![GitHub last commit](https://img.shields.io/github/last-commit/usemuffin/obfuscate)](https://github.com/usemuffin/obfuscate) - Primary key obfuscation/shortening using UUIDs, HashIds, Optimus, Tiny and/or custom obfuscation strategies.
- 🍰 [Muffin/Throttle plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/usemuffin/throttle) ![GitHub last commit](https://img.shields.io/github/last-commit/usemuffin/throttle)](https://github.com/usemuffin/throttle) - A plugin for rate limiting (API) requests.
- [Recaptcha plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/ctlabvn/Recaptcha) ![GitHub last commit](https://img.shields.io/github/last-commit/ctlabvn/Recaptcha)](https://github.com/ctlabvn/Recaptcha) - Simple, lightweight Google Recaptcha v2.

## SEO
*Search Engine Optimization.*

- 🍰 [Muffin/Slug plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/UseMuffin/Slug) ![GitHub last commit](https://img.shields.io/github/last-commit/UseMuffin/Slug)](https://github.com/UseMuffin/Slug) - A plugin for generating slugs and finding records by slug. Uses a pluggable architecture which allows using your own slug generator class.
- 🍰 [Tools:Slugged ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-tools)](https://github.com/dereuromark/cakephp-tools) - Containing Slugged behavior to auto-generate URL-compatible slugs from titles.

## Skeleton
*Plugins and repositories around app skeletons.*

- [App template ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/app) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/app)](https://github.com/cakephp/app) - An empty CakePHP project for use with composer.

## Social
*Plugins around social features.*

- 🍰 [Ratings plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-ratings) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-ratings)](https://github.com/dereuromark/cakephp-ratings) - Allows users to rate records and displays ratings.

## Templating
*Plugins for templating and lexing.*

- 🍰 [Bake plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/bake) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/bake)](https://github.com/cakephp/bake) - Provides code generation functionality.
- 🍰 [BootstrapUI plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/friendsofcake/bootstrap-ui) ![GitHub last commit](https://img.shields.io/github/last-commit/friendsofcake/bootstrap-ui)](https://github.com/friendsofcake/bootstrap-ui) - Bootstrap 4/5 integration.
- 🍰 [CsvView plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/FriendsOfCake/cakephp-csvview) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/cakephp-csvview)](https://github.com/FriendsOfCake/cakephp-csvview) - A view class to easily generate CSV.
- 🍰 [Feed plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-feed) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-feed)](https://github.com/dereuromark/cakephp-feed) - Containing an RssView class to easily generate (complex) RSS feeds.
- 🍰 [Meta plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-meta) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-meta)](https://github.com/dereuromark/cakephp-meta) - Makes handling meta tags and SEO-relevant HTML markup DRY and easy.
- 🍰 [Tools:Tree ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-tools)](https://github.com/dereuromark/cakephp-tools) - Tree helper to work with Core Tree behavior and handle tree structure output.
- 🍰 [TwigView plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/twig-view) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/twig-view)](https://github.com/cakephp/twig-view) - A plugin to use the Twig Templating Language for views.

## Testing
*Plugins/Tools for testing codebases and generating test data.*

- [CakePHP Codeception module ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/codeception) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/codeception)](https://github.com/cakephp/codeception) - The official CakePHP integration with [Codeception](https://codeception.com).
- [CakePHP CodeSniffer rules ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/cakephp-codesniffer) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/cakephp-codesniffer)](https://github.com/cakephp/cakephp-codesniffer) - The official CakePHP CS rules.
- 🍰 [CakephpFixtureFactories plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/pakacuda/cakephp-fixture-factories) ![GitHub last commit](https://img.shields.io/github/last-commit/pakacuda/cakephp-fixture-factories)](https://github.com/pakacuda/cakephp-fixture-factories) - Create your fixtures dynamically on a test basis, accelerate the writing and maintenance of your tests.
- [Faker plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/gourmet/faker) ![GitHub last commit](https://img.shields.io/github/last-commit/gourmet/faker)](https://github.com/gourmet/faker) - [Faker ![GitHub Repo Stars](https://img.shields.io/github/stars/fzaninotto/Faker) ![GitHub last commit](https://img.shields.io/github/last-commit/fzaninotto/Faker)](https://github.com/fzaninotto/Faker) support for CakePHP fixtures.
- [Fixtures plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/LubosRemplik/CakePHP-Fixtures) ![GitHub last commit](https://img.shields.io/github/last-commit/LubosRemplik/CakePHP-Fixtures)](https://github.com/LubosRemplik/CakePHP-Fixtures) - Fixtures plugin to read existing fixtures and create table/insert data for quick start with app.
- 🍰 [FriendsOfCake/Fixturize plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/FriendsOfCake/fixturize) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/fixturize)](https://github.com/FriendsOfCake/fixturize) - More efficient inserting fixtures when running test suites by decreasing amount of inserts (mysql only).

## Third Party APIs
*Plugins for accessing third party APIs.*


# Software
*Software for creating a development environment.*

## Development Environment
*Software and tools for creating a sandboxed development environment.*

- 🍰 [CakePHP Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/cnizzardini/cakephp-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/cnizzardini/cakephp-docker)](https://github.com/cnizzardini/cakephp-docker) - A cakephp/app template for docker.
- [CakePHP Vagrant Setup ![GitHub Repo Stars](https://img.shields.io/github/stars/cpierce/cakephp-vagrant-setup) ![GitHub last commit](https://img.shields.io/github/last-commit/cpierce/cakephp-vagrant-setup)](https://github.com/cpierce/cakephp-vagrant-setup) - Tool for spinning up multiple CakePHP vanilla dev environments.
- [Devilbox](https://devilbox.readthedocs.io/en/latest/) - A docker development environment for (CakePHP) apps to be auto-setup including a lot of tools.
- [Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/stefanvangastel/docker-cakephp) ![GitHub last commit](https://img.shields.io/github/last-commit/stefanvangastel/docker-cakephp)](https://github.com/stefanvangastel/docker-cakephp) - CakePHP in a docker container environment.
- 🍰 [Galley](https://gitlab.com/amayer5125/galley) - A small Docker dev environment for CakePHP development which includes a simple command line utility.
- [NetBeans ![GitHub Repo Stars](https://img.shields.io/github/stars/junichi11/cakephp3-netbeans) ![GitHub last commit](https://img.shields.io/github/last-commit/junichi11/cakephp3-netbeans)](https://github.com/junichi11/cakephp3-netbeans) -  This package provides support for CakePHP in NetBeans 8.1+.
- [Oven ![GitHub Repo Stars](https://img.shields.io/github/stars/CakeDC/oven) ![GitHub last commit](https://img.shields.io/github/last-commit/CakeDC/oven)](https://github.com/CakeDC/oven) - Setup your favorite framework with 1 file and 1 click.
- [Puppet](https://puppetlabs.com/) - A server automation framework and application.
- [Vagrant](https://www.vagrantup.com/) - A portable development environment utility.

IDE specific compatibility information and tips can be found [here ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/cakephp-ide-helper) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-ide-helper)](https://github.com/dereuromark/cakephp-ide-helper/wiki#ide-support-and-tips).

## Web Applications

## CMS and applications built on CakePHP

- [baserCMS ![GitHub Repo Stars](https://img.shields.io/github/stars/baserproject/basercms) ![GitHub last commit](https://img.shields.io/github/last-commit/baserproject/basercms)](https://github.com/baserproject/basercms) - This is a website development framework with RESTful APIs. Installable as a plugin for CakePHP 4.x.
- [Croogo](https://croogo.org) - CMS software (see 5.0 branch).

## Demo
*Web-based (demo) applications and tools.*

- [BlogMVC ![GitHub Repo Stars](https://img.shields.io/github/stars/Kareylo/BlogMVC-CakePHP3) ![GitHub last commit](https://img.shields.io/github/last-commit/Kareylo/BlogMVC-CakePHP3)](https://github.com/Kareylo/BlogMVC-CakePHP3) - A simple Blog example with CakePHP based on [BlogMVC Project ![GitHub Repo Stars](https://img.shields.io/github/stars/Grafikart/BlogMVC) ![GitHub last commit](https://img.shields.io/github/last-commit/Grafikart/BlogMVC)](https://github.com/Grafikart/BlogMVC).
- [Bookmarkr ![GitHub Repo Stars](https://img.shields.io/github/stars/lorenzo/cakephp3-bookmarkr) ![GitHub last commit](https://img.shields.io/github/last-commit/lorenzo/cakephp3-bookmarkr)](https://github.com/lorenzo/cakephp3-bookmarkr) A bookmarking application built with the CRUD plugin.
- [CakeFest](http://cakefest.dereuromark.de/) - Demo application around the annual CakePHP Conference "CakeFest".
- [Fluentd + Grafana Loki demo application ![GitHub Repo Stars](https://img.shields.io/github/stars/ishanvyas22/cakephp-loki-demo) ![GitHub last commit](https://img.shields.io/github/last-commit/ishanvyas22/cakephp-loki-demo)](https://github.com/ishanvyas22/cakephp-loki-demo) - A demo application to send CakePHP docker container logs to [Grafana Loki](https://grafana.com/logs/) via [Fluentd](https://www.fluentd.org/).
- [RealWorld ![GitHub Repo Stars](https://img.shields.io/github/stars/gothinkster/cakephp-realworld-example-app) ![GitHub last commit](https://img.shields.io/github/last-commit/gothinkster/cakephp-realworld-example-app)](https://github.com/gothinkster/cakephp-realworld-example-app) - Example CakePHP codebase containing real world examples (CRUD, auth, advanced patterns and more) that adheres to the [RealWorld ![GitHub Repo Stars](https://img.shields.io/github/stars/gothinkster/realworld-example-apps) ![GitHub last commit](https://img.shields.io/github/last-commit/gothinkster/realworld-example-apps)](https://github.com/gothinkster/realworld-example-apps) spec and API.
- [Sandbox](https://sandbox.dereuromark.de) - A sandbox CakePHP application with lots of demos and plugin showcasings.
- [Query Examples ![GitHub Repo Stars](https://img.shields.io/github/stars/lorenzo/cakephp3-examples) ![GitHub last commit](https://img.shields.io/github/last-commit/lorenzo/cakephp3-examples)](https://github.com/lorenzo/cakephp3-examples) Advanced query building examples.
- [Xeta ![GitHub Repo Stars](https://img.shields.io/github/stars/XetaIO/Xeta) ![GitHub last commit](https://img.shields.io/github/last-commit/XetaIO/Xeta)](https://github.com/XetaIO/Xeta) - A resource to help people starting with CakePHP.
- [Vue.js Demo App ![GitHub Repo Stars](https://img.shields.io/github/stars/ishanvyas22/cakephpvue-spa) ![GitHub last commit](https://img.shields.io/github/last-commit/ishanvyas22/cakephpvue-spa)](https://github.com/ishanvyas22/cakephpvue-spa) - A CakePHP + VueJS single page application skeleton.

# Resources
Various resources, such as books, websites and articles, for improving your CakePHP development skills and knowledge.

## Help
*Where to get help.*

- [CakePHP-FR.org](http://cakephp-fr.org) - The french community website.
- [Official CakePHP Forum](https://discourse.cakephp.org/) - This is for generic questions and alike.
- [IRC Channel](https://www.dereuromark.de/2013/01/27/irc-cakephp-channel/) - Live chat/discussion with other devs and core devs.
- [stackoverflow.com/questions/tagged/cakephp](https://stackoverflow.com/questions/tagged/cakephp) - This is for specific questions, ideally along with some example code.

## CakePHP Websites
*Useful and current CakePHP-related websites and blogs.*

- [CakeDC](http://www.cakedc.com/articles) - Articles around CakePHP.
- [dereuromark.de](https://www.dereuromark.de) - An extensive CakePHP core dev blog.
- [jedistirfry.co.uk](http://jedistirfry.co.uk) - A CakePHP related dev blog.
- [josediazgonzalez.com](http://josediazgonzalez.com/) - A mainly CakePHP related core dev blog.
- [mark-story.com](http://mark-story.com) - CakePHP lead dev blog.

## CakePHP Books and Articles
*Fantastic CakePHP-related (e)books and other reading material.*

## CakePHP Videos
*Fantastic CakePHP-related videos.*

- [CakePHP](https://www.youtube.com/user/CakePHP) - Channel about CakePHP videos.


## CakePHP Tutorials
*Must-do tutorials.*

- [Official Blog tutorial](https://book.cakephp.org/4.0/en/tutorials-and-examples/blog/blog.html)
- [Official Content Management Tutorial](https://book.cakephp.org/4/en/tutorials-and-examples/cms/installation.html)

## CakePHP Reading and Listening
*Documentation and CakePHP-related reading and listening materials.*

- [CakePHP Cookbook(!)](https://book.cakephp.org/) - The official CakePHP documentation.

## CakePHP Internals Reading
*Reading materials related to the CakePHP internals and decisions.*

- [Top 10 (and more) core contributors ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/cakephp) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/cakephp)](https://github.com/cakephp/cakephp/graphs/contributors) - Give 'em a hand.

# Conferences

## Official
*International conference.*

- [cakefest.org](https://cakefest.org/) - Annual CakePHP Conference.

## MeetUps
*Regional meet-ups.*

- [CakePHP-DE](https://www.meetup.com/CakePHP-DE) - MeetUps in Germany.

# Contributing
Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Credits
awesome-cakephp has been created by [dereuromark](https://github.com/dereuromark) and is currently maintained by him and the FriendsOfCake group. Thank you to all [contributors ![GitHub Repo Stars](https://img.shields.io/github/stars/FriendsOfCake/awesome-cakephp) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/awesome-cakephp)](https://github.com/FriendsOfCake/awesome-cakephp/graphs/contributors), too.
