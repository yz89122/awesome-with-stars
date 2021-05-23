# Awesome CakePHP [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
A curated list of amazingly awesome **CakePHP 3.x+** plugins, resources and shiny things.

Plugins with the ":strawberry:" icon have CakePHP 4 compatible release too.

If you are looking for CakePHP 2.x resources please visit:
- the [CakePHP 2.x version ![GitHub Repo stars](https://img.shields.io/github/stars/FriendsOfCake/awesome-cakephp) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/awesome-cakephp)](https://github.com/FriendsOfCake/awesome-cakephp/tree/cake2) of this awesome list
- this wiki with a [list of not-yet upgraded plugins ![GitHub Repo stars](https://img.shields.io/github/stars/FriendsOfCake/awesome-cakephp) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/awesome-cakephp)](https://github.com/FriendsOfCake/awesome-cakephp/wiki#plugins-not-yet-upgraded-from-2x-to-3x)

Additional lists you might find useful:
- [CakePHP Plugins](https://plugins.cakephp.org)
- [Awesome PHP ![GitHub Repo stars](https://img.shields.io/github/stars/ziadoz/awesome-php) ![GitHub last commit](https://img.shields.io/github/last-commit/ziadoz/awesome-php)](https://github.com/ziadoz/awesome-php)
- [Awesome Awesomeness ![GitHub Repo stars](https://img.shields.io/github/stars/bayandin/awesome-awesomeness) ![GitHub last commit](https://img.shields.io/github/last-commit/bayandin/awesome-awesomeness)](https://github.com/bayandin/awesome-awesomeness)

> For those wondering; this list differs from plugins.cakephp.org by supporting
> plugin subparts (instead of only the whole plugin/repo), more granular
> grouping and the primary focus on task specific functionality.

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

- [NewRelic plugin ![GitHub Repo stars](https://img.shields.io/github/stars/jippi/cakephp-newrelic) ![GitHub last commit](https://img.shields.io/github/last-commit/jippi/cakephp-newrelic)](https://github.com/jippi/cakephp-newrelic/tree/cake3) - A complete plugin that enables full New Relic integration for a CakePHP application, including CLI naming, exceptions sending, custom timings, etc.
- [NewRelic plugin ![GitHub Repo stars](https://img.shields.io/github/stars/brunitto/cakephp-new-relic) ![GitHub last commit](https://img.shields.io/github/last-commit/brunitto/cakephp-new-relic)](https://github.com/brunitto/cakephp-new-relic) - A simple plugin that enables just name transaction and browser timing using the New Relic PHP agent.

## Architecture

- :strawberry: [Burzum/CakeServiceLayer plugin ![GitHub Repo stars](https://img.shields.io/github/stars/burzum/cakephp-service-layer) ![GitHub last commit](https://img.shields.io/github/last-commit/burzum/cakephp-service-layer)](https://github.com/burzum/cakephp-service-layer) - Service layer and domain/business model implementation.

## Asset Management
*Tools for managing, compressing and minifying website assets.*

- :strawberry: [AssetCompress plugin ![GitHub Repo stars](https://img.shields.io/github/stars/markstory/asset_compress) ![GitHub last commit](https://img.shields.io/github/last-commit/markstory/asset_compress)](https://github.com/markstory/asset_compress) - A complete asset manager for CakePHP.
- :strawberry: [AssetMix plugin ![GitHub Repo stars](https://img.shields.io/github/stars/ishanvyas22/asset-mix) ![GitHub last commit](https://img.shields.io/github/last-commit/ishanvyas22/asset-mix)](https://github.com/ishanvyas22/asset-mix) - Provides integration with [Laravel Mix](https://laravel-mix.com) asset compilation.
- [Assets plugin ![GitHub Repo stars](https://img.shields.io/github/stars/mirko-pagliai/cakephp-assets) ![GitHub last commit](https://img.shields.io/github/last-commit/mirko-pagliai/cakephp-assets)](https://github.com/mirko-pagliai/cakephp-assets) - Dynamic and "on the fly" asset files.
- [Less plugin ![GitHub Repo stars](https://img.shields.io/github/stars/elboletaire/less-cake-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/elboletaire/less-cake-plugin)](https://github.com/elboletaire/less-cake-plugin) - Less parser plugin for CakePHP.
- [MinifyHtml plugin ![GitHub Repo stars](https://img.shields.io/github/stars/WyriHaximus/MinifyHtml) ![GitHub last commit](https://img.shields.io/github/last-commit/WyriHaximus/MinifyHtml)](https://github.com/WyriHaximus/MinifyHtml) - Compress HTML output.

## Auditing / Logging
*Plugins for auditing and logging.*

- :strawberry: [AuditStash plugin ![GitHub Repo stars](https://img.shields.io/github/stars/lorenzo/audit-stash) ![GitHub last commit](https://img.shields.io/github/last-commit/lorenzo/audit-stash)](https://github.com/lorenzo/audit-stash) - Flexible and rock solid audit log tracking.
- :strawberry: [DatabaseLog plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/CakePHP-DatabaseLog) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/CakePHP-DatabaseLog)](https://github.com/dereuromark/CakePHP-DatabaseLog) - Simple and stand-alone logging to database instead of files.
- :strawberry: [Muffin/Footprint plugin ![GitHub Repo stars](https://img.shields.io/github/stars/UseMuffin/Footprint) ![GitHub last commit](https://img.shields.io/github/last-commit/UseMuffin/Footprint)](https://github.com/UseMuffin/Footprint) - Plugin to allow passing currently logged in user to model layer.
- [Version plugin ![GitHub Repo stars](https://img.shields.io/github/stars/josegonzalez/cakephp-version) ![GitHub last commit](https://img.shields.io/github/last-commit/josegonzalez/cakephp-version)](https://github.com/josegonzalez/cakephp-version) - A plugin that facilitates versioned database entities.

## Authentication and Authorization
*Plugins and libraries for implementing authentication and authorization.*

- :strawberry: [Acl plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cakephp/acl) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/acl)](https://github.com/cakephp/acl/) - Managing ACL as database approach.
- :strawberry: [ADmad/JwtAuth plugin ![GitHub Repo stars](https://img.shields.io/github/stars/ADmad/cakephp-jwt-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/ADmad/cakephp-jwt-auth)](https://github.com/ADmad/cakephp-jwt-auth) - A plugin for authenticating using JSON Web Tokens.
- :strawberry: [ADmad/SocialAuth plugin ![GitHub Repo stars](https://img.shields.io/github/stars/ADmad/cakephp-social-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/ADmad/cakephp-social-auth)](https://github.com/ADmad/cakephp-social-auth) - A plugin which allows you to authenticate using social providers like Facebook/Google/Twitter etc. using [SocialConnect/auth ![GitHub Repo stars](https://img.shields.io/github/stars/SocialConnect/auth) ![GitHub last commit](https://img.shields.io/github/last-commit/SocialConnect/auth)](https://github.com/SocialConnect/auth) social sign on library.
- :strawberry: [Authentication plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cakephp/authentication) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/authentication)](https://github.com/cakephp/authentication) - Official CakePHP authentication middleware plugin.
- :strawberry: [Authorization plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cakephp/authorization) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/authorization)](https://github.com/cakephp/authorization) - Official CakePHP authorization stack.
- [CakeDC/NavAuth plugin ![GitHub Repo stars](https://img.shields.io/github/stars/CakeDC/cakephp-nav-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/CakeDC/cakephp-nav-auth)](https://github.com/CakeDC/cakephp-nav-auth) - A plugin for authenticating against Navision® service using SOAP or OData services. It includes NTLM authentication and more.
- :strawberry: [CakeDC/Users plugin ![GitHub Repo stars](https://img.shields.io/github/stars/CakeDC/users) ![GitHub last commit](https://img.shields.io/github/last-commit/CakeDC/users)](https://github.com/CakeDC/users) - Complete user management (admin panel, remember me, etc), Social login (FB, Twitter, LinkedIn, Google, Instagram), RBAC, API and more.
- [CookieAuth plugin ![GitHub Repo stars](https://img.shields.io/github/stars/Xety/Cake3-CookieAuth) ![GitHub last commit](https://img.shields.io/github/last-commit/Xety/Cake3-CookieAuth)](https://github.com/Xety/Cake3-CookieAuth) - A simple Cake 3 plugin to automatically authenticate users with Cookies.
- [HierAuth plugin ![GitHub Repo stars](https://img.shields.io/github/stars/btaens/cakephp-hier-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/btaens/cakephp-hier-auth)](https://github.com/btaens/cakephp-hier-auth) - A CakePHP plugin for hierarchical, role based, simple authorization.
- [Muffin/OAuth2 plugin ![GitHub Repo stars](https://img.shields.io/github/stars/usemuffin/oauth2) ![GitHub last commit](https://img.shields.io/github/last-commit/usemuffin/oauth2)](https://github.com/usemuffin/oauth2) - OAuth2 authentication using the [`league/oauth2-client` ![GitHub Repo stars](https://img.shields.io/github/stars/thephpleague/oauth2-client) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/oauth2-client)](https://github.com/thephpleague/oauth2-client).
- :strawberry: [Muffin/Tokenize plugin ![GitHub Repo stars](https://img.shields.io/github/stars/UseMuffin/Tokenize) ![GitHub last commit](https://img.shields.io/github/last-commit/UseMuffin/Tokenize)](https://github.com/UseMuffin/Tokenize) - Event driven behavior for easily generating single-use security tokens.
- [MultiTenant plugin ![GitHub Repo stars](https://img.shields.io/github/stars/pronique/multitenant) ![GitHub last commit](https://img.shields.io/github/last-commit/pronique/multitenant)](https://github.com/pronique/multitenant) - Easily build SaaS enabled web applications.
- :strawberry: [TinyAuth plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-tinyauth) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-tinyauth)](https://github.com/dereuromark/cakephp-tinyauth) - Authentication and role based (single/multi) authorization as very light-weight approach.
- :strawberry: [Tools:Passwordable ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-tools)](https://github.com/dereuromark/cakephp-tools) - Containing [Passwordable behavior ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-tools)](https://github.com/dereuromark/cakephp-tools/blob/master/docs/Behavior/Passwordable.md) for a DRY approach on password hashing.
- :strawberry: [TwoFactorAuth plugin ![GitHub Repo stars](https://img.shields.io/github/stars/andrej-griniuk/cakephp-two-factor-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/andrej-griniuk/cakephp-two-factor-auth)](https://github.com/andrej-griniuk/cakephp-two-factor-auth) - Allows two factor authentication using Google Authenticator or similar app to generate one-time codes. Based on [RobThree/TwoFactorAuth ![GitHub Repo stars](https://img.shields.io/github/stars/RobThree/TwoFactorAuth) ![GitHub last commit](https://img.shields.io/github/last-commit/RobThree/TwoFactorAuth)](https://github.com/RobThree/TwoFactorAuth) library.
- [UserPermissions plugin ![GitHub Repo stars](https://img.shields.io/github/stars/AlessandroMinoccheri/UserPermissions) ![GitHub last commit](https://img.shields.io/github/last-commit/AlessandroMinoccheri/UserPermissions)](https://github.com/AlessandroMinoccheri/UserPermissions) -  Allow groups of users or single users to view a specific page.

## Caching
*Plugins for caching data.*

- :strawberry: [Cache plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-cache) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-cache)](https://github.com/dereuromark/cakephp-cache) - For caching views (HTML, CSV, JSON, XML, ...) as static cache files.

## Code Analysis
*Plugins for analysing, parsing and manipulation codebases.*

- :strawberry: [IdeHelper plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-ide-helper) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-ide-helper)](https://github.com/dereuromark/cakephp-ide-helper) - Helps to make IDE support better by adding annotations to your existing code similar to what baking does to new code.
- :strawberry: [TestHelper plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-test-helper) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-test-helper)](https://github.com/dereuromark/cakephp-test-helper) - Provides testing enhancements and TDD support as browser backend.

## Debugging
*Plugins for debugging.*

- [Airbrake plugin ![GitHub Repo stars](https://img.shields.io/github/stars/chrisShick/AirbrakeCake) ![GitHub last commit](https://img.shields.io/github/last-commit/chrisShick/AirbrakeCake)](https://github.com/chrisShick/AirbrakeCake) A plugin to seamlessly integrate Airbrake with CakePHP for errors and exceptions.
- [AssociationsDebugger plugin ![GitHub Repo stars](https://img.shields.io/github/stars/zunnu/associations-debugger) ![GitHub last commit](https://img.shields.io/github/last-commit/zunnu/associations-debugger)](https://github.com/zunnu/associations-debugger) - A plugin that draws your model associations as diagram.
- :strawberry: [CakephpWhoops plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-whoops) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-whoops)](https://github.com/dereuromark/cakephp-whoops) - PHP errors and exceptions for cool kids with [filp/whoops ![GitHub Repo stars](https://img.shields.io/github/stars/filp/whoops) ![GitHub last commit](https://img.shields.io/github/last-commit/filp/whoops)](https://github.com/filp/whoops).
- :strawberry: [DebugKit plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cakephp/debug_kit) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/debug_kit)](https://github.com/cakephp/debug_kit) - The de-facto standard for debugging.
- [ErrorEmail plugin ![GitHub Repo stars](https://img.shields.io/github/stars/ebrigham1/cakephp-error-email) ![GitHub last commit](https://img.shields.io/github/last-commit/ebrigham1/cakephp-error-email)](https://github.com/ebrigham1/cakephp-error-email) - A plugin to email exception/error information to your dev team.
- :strawberry: [Execution order ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/executionorder) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/executionorder)](https://github.com/dereuromark/executionorder) - A demo app to display the execution order of files, methods and callbacks.
- [Psa/FixtureCheck plugin ![GitHub Repo stars](https://img.shields.io/github/stars/World-Architects/cakephp-fixture-check) ![GitHub last commit](https://img.shields.io/github/last-commit/World-Architects/cakephp-fixture-check)](https://github.com/World-Architects/cakephp-fixture-check) - A plugin to help detect mismatches in live DB and fixtures in order to make fixture based tests more reliable and deployments safer.
- :strawberry: [Sentry plugin ![GitHub Repo stars](https://img.shields.io/github/stars/Connehito/cake-sentry) ![GitHub last commit](https://img.shields.io/github/last-commit/Connehito/cake-sentry)](https://github.com/Connehito/cake-sentry) A plugin to seamlessly integrate Sentry with CakePHP for errors and exceptions.
- :strawberry: [Setup plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-setup) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-setup)](https://github.com/dereuromark/cakephp-setup) - A lightweight setup plugin containing debugging and maintenance tools.

## Dependency Injection
*Plugins that implement the dependency injection design pattern.*

- [PimpleDi plugin ![GitHub Repo stars](https://img.shields.io/github/stars/rochamarcelo/cake-pimple-di) ![GitHub last commit](https://img.shields.io/github/last-commit/rochamarcelo/cake-pimple-di)](https://github.com/rochamarcelo/cake-pimple-di) Allows dependency injection based on Pimple library.
- [PipingBag plugin ![GitHub Repo stars](https://img.shields.io/github/stars/lorenzo/piping-bag) ![GitHub last commit](https://img.shields.io/github/last-commit/lorenzo/piping-bag)](https://github.com/lorenzo/piping-bag) - Dependency injection container plugin that adds the ability to configure object instances and their dependencies before they are used, and to store them into a container class for easy access.

## E-commerce
*Plugins and applications for taking payments and building online e-commerce stores.*

- [PaypalWPP plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cpierce/paypal-wpp) ![GitHub last commit](https://img.shields.io/github/last-commit/cpierce/paypal-wpp)](https://github.com/cpierce/paypal-wpp) - For communicating with Paypal Web Payments Pro for transactions and information about your account.

## Email
*Plugins for sending and parsing email.*

- [Elastic Email plugin ![GitHub Repo stars](https://img.shields.io/github/stars/sprintcube/cakephp-elastic-email) ![GitHub last commit](https://img.shields.io/github/last-commit/sprintcube/cakephp-elastic-email)](https://github.com/sprintcube/cakephp-elastic-email) - Email transport plugin for sending email via Elastic Email API.
- :strawberry: [EmailQueue plugin ![GitHub Repo stars](https://img.shields.io/github/stars/lorenzo/cakephp-email-queue) ![GitHub last commit](https://img.shields.io/github/last-commit/lorenzo/cakephp-email-queue)](https://github.com/lorenzo/cakephp-email-queue) - Email queue plugin with a preview and sender shell.
- [Gourmet/Email plugin ![GitHub Repo stars](https://img.shields.io/github/stars/gourmet/email) ![GitHub last commit](https://img.shields.io/github/last-commit/gourmet/email)](https://github.com/gourmet/email) - Email helper, layout and more.
- :strawberry: [Mailgun plugin ![GitHub Repo stars](https://img.shields.io/github/stars/narendravaghela/cakephp-mailgun) ![GitHub last commit](https://img.shields.io/github/last-commit/narendravaghela/cakephp-mailgun)](https://github.com/narendravaghela/cakephp-mailgun) - Email transport plugin for sending email via Mailgun.
- [SendGrid plugin ![GitHub Repo stars](https://img.shields.io/github/stars/sprintcube/cakephp-sendgrid) ![GitHub last commit](https://img.shields.io/github/last-commit/sprintcube/cakephp-sendgrid)](https://github.com/sprintcube/cakephp-sendgrid) - Email transport plugin for sending email via SendGrid API.

## Environment
*Plugins for environment.*

- [Environments plugin ![GitHub Repo stars](https://img.shields.io/github/stars/josegonzalez/cakephp-environments) ![GitHub last commit](https://img.shields.io/github/last-commit/josegonzalez/cakephp-environments)](https://github.com/josegonzalez/cakephp-environments) - Plugin to handle environments.
- [Gourmet/Aroma plugin ![GitHub Repo stars](https://img.shields.io/github/stars/gourmet/aroma) ![GitHub last commit](https://img.shields.io/github/last-commit/gourmet/aroma)](https://github.com/gourmet/aroma) - Database based configuration.
- [Settings plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cakemanager/cakephp-settings) ![GitHub last commit](https://img.shields.io/github/last-commit/cakemanager/cakephp-settings)](https://github.com/cakemanager/cakephp-settings) - A plugin to manage your settings via your database.

## File Manipulation
*Plugins for file manipulation.*

- :strawberry: [FileStorage plugin ![GitHub Repo stars](https://img.shields.io/github/stars/burzum/cakephp-file-storage) ![GitHub last commit](https://img.shields.io/github/last-commit/burzum/cakephp-file-storage)](https://github.com/burzum/cakephp-file-storage) - Abstract file storage and upload plugin.
- [FlyPie plugin ![GitHub Repo stars](https://img.shields.io/github/stars/WyriHaximus/FlyPie) ![GitHub last commit](https://img.shields.io/github/last-commit/WyriHaximus/FlyPie)](https://github.com/WyriHaximus/FlyPie) - Abstract filesystem access using Flysystem.
- [Image plugin ![GitHub Repo stars](https://img.shields.io/github/stars/josbeir/image) ![GitHub last commit](https://img.shields.io/github/last-commit/josbeir/image)](https://github.com/josbeir/image) - Image behavior that works much like Cake's built in TranslateBehavior.
- :strawberry: [Josbeir/Filesystem plugin ![GitHub Repo stars](https://img.shields.io/github/stars/josbeir/cakephp-filesystem) ![GitHub last commit](https://img.shields.io/github/last-commit/josbeir/cakephp-filesystem)](https://github.com/josbeir/cakephp-filesystem) - Abstract [Flysystem](https://flysystem.thephpleague.com/) + file entity based upload plugin.
- :strawberry: [Josegonzalez/Upload plugin ![GitHub Repo stars](https://img.shields.io/github/stars/FriendsOfCake/cakephp-upload) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/cakephp-upload)](https://github.com/FriendsOfCake/cakephp-upload) - A customisable plugin that uses [Flysystem](https://flysystem.thephpleague.com/) to write to multiple backends (Dropbox, FTP, S3, Local, etc.).
- [Proffer plugin ![GitHub Repo stars](https://img.shields.io/github/stars/davidyell/CakePHP3-Proffer) ![GitHub last commit](https://img.shields.io/github/last-commit/davidyell/CakePHP3-Proffer)](https://github.com/davidyell/CakePHP3-Proffer) - A customisable upload plugin with thumbnail generation.
- [Xety/Cake3Upload plugin ![GitHub Repo stars](https://img.shields.io/github/stars/Xety/Cake3-Upload) ![GitHub last commit](https://img.shields.io/github/last-commit/Xety/Cake3-Upload)](https://github.com/Xety/Cake3-Upload) - A little plugin to upload file.

## Filtering and Validation
*Plugins for filtering and validating data.*

- [Gourmet/Filters plugin ![GitHub Repo stars](https://img.shields.io/github/stars/gourmet/filters) ![GitHub last commit](https://img.shields.io/github/last-commit/gourmet/filters)](https://github.com/gourmet/filters) - Extra dispatcher filters (maintenance, robots, ip, etc).
- [Gourmet/Validation plugin ![GitHub Repo stars](https://img.shields.io/github/stars/gourmet/validation) ![GitHub last commit](https://img.shields.io/github/last-commit/gourmet/validation)](https://github.com/gourmet/validation) - Extra validation providers (Respect, IsoCodes, etc.) and rules.
- [HtmlPurifier plugin ![GitHub Repo stars](https://img.shields.io/github/stars/burzum/cakephp-html-purifier) ![GitHub last commit](https://img.shields.io/github/last-commit/burzum/cakephp-html-purifier)](https://github.com/burzum/cakephp-html-purifier) - Purifier Plugin that features a trait, behavior and helper to allow you to get sanitization and filtering where you need it. You can configure multiple sets of filter rules as well.
- [HtmlPurifier plugin ![GitHub Repo stars](https://img.shields.io/github/stars/chrisShick/CakePHP3-HtmlPurifier) ![GitHub last commit](https://img.shields.io/github/last-commit/chrisShick/CakePHP3-HtmlPurifier)](https://github.com/chrisShick/CakePHP3-HtmlPurifier) - Purifier Plugin Behavior that cleanses data before it is marshaled into the entity and/or before saving.

## Geolocation
*Plugins for geocoding addresses and working with latitudes and longitudes.*

- :strawberry: [Geo plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-geo) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-geo)](https://github.com/dereuromark/cakephp-geo) - Containing [Geocoder behavior](https://www.dereuromark.de/2012/06/12/geocoding-with-cakephp/) and [GoogleMaps helper](https://www.dereuromark.de/2010/12/21/googlemapsv3-cakephp-helper/).

## HTTP
*Plugins for HTTP and client abstraction*

- :strawberry: [Http/Adapter/Cake library ![GitHub Repo stars](https://img.shields.io/github/stars/php-http/cakephp-adapter) ![GitHub last commit](https://img.shields.io/github/last-commit/php-http/cakephp-adapter)](https://github.com/php-http/cakephp-adapter) - Adapter for [HTTPlug ![GitHub Repo stars](https://img.shields.io/github/stars/php-http/httplug) ![GitHub last commit](https://img.shields.io/github/last-commit/php-http/httplug)](https://github.com/php-http/httplug) HTTP client abstraction.

## I18n
*Plugins for I18n (Internationalization) and L10n (Localization).*

- :strawberry: [ADmad/I18n plugin ![GitHub Repo stars](https://img.shields.io/github/stars/ADmad/cakephp-i18n) ![GitHub last commit](https://img.shields.io/github/last-commit/ADmad/cakephp-i18n)](https://github.com/ADmad/cakephp-i18n) - A plugin with I18n related tools.
- :strawberry: [Cake/Localized plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cakephp/localized) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/localized)](https://github.com/cakephp/localized) - Localized validation and ready-to-use translation PO files.
- :strawberry: [ShadowTranslate plugin ![GitHub Repo stars](https://img.shields.io/github/stars/AD7six/cakephp-shadow-translate) ![GitHub last commit](https://img.shields.io/github/last-commit/AD7six/cakephp-shadow-translate)](https://github.com/AD7six/cakephp-shadow-translate) - A plugin with shadow table based replacement for core's Translate behavior.
- [Transifex plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-transifex) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-transifex)](https://github.com/dereuromark/cakephp-transifex) - Managing i18n PO files and translations via Transifex API.
- [Translate plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-translate) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-translate)](https://github.com/dereuromark/cakephp-translate) - Manage translations of your static content the easy way via web backend, incl. import from POT files, auto-suggest and auto-translate via API.
- [Translation plugin ![GitHub Repo stars](https://img.shields.io/github/stars/ava007/wnk_translation) ![GitHub last commit](https://img.shields.io/github/last-commit/ava007/wnk_translation)](https://github.com/ava007/wnk_translation) - Extract pot files, translate string (manually, google, community), export translations to pot files.

## Imagery
*Plugins for manipulating images.*

- :strawberry: [ADmad/Glide plugin ![GitHub Repo stars](https://img.shields.io/github/stars/ADmad/cakephp-glide) ![GitHub last commit](https://img.shields.io/github/last-commit/ADmad/cakephp-glide)](https://github.com/ADmad/cakephp-glide) - A plugin for using [Glide](https://glide.thephpleague.com/) image manipulation library.
- [HtmlToImageView plugin ![GitHub Repo stars](https://img.shields.io/github/stars/andrej-griniuk/cakephp-html-to-image-view) ![GitHub last commit](https://img.shields.io/github/last-commit/andrej-griniuk/cakephp-html-to-image-view)](https://github.com/andrej-griniuk/cakephp-html-to-image-view) - Render HTML view as image (jpg or png) using [wkhtmltoimage](https://wkhtmltopdf.org).
- [Imagine plugin ![GitHub Repo stars](https://img.shields.io/github/stars/burzum/cakephp-imagine-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/burzum/cakephp-imagine-plugin)](https://github.com/burzum/cakephp-imagine-plugin) - An image manipulation plugin and wrapper around [Imagine ![GitHub Repo stars](https://img.shields.io/github/stars/avalanche123/Imagine) ![GitHub last commit](https://img.shields.io/github/last-commit/avalanche123/Imagine)](https://github.com/avalanche123/Imagine).
- [Thumber plugin ![GitHub Repo stars](https://img.shields.io/github/stars/mirko-pagliai/cakephp-thumber) ![GitHub last commit](https://img.shields.io/github/last-commit/mirko-pagliai/cakephp-thumber)](https://github.com/mirko-pagliai/cakephp-thumber) - A plugin to create thumbnails using [intervention/image ![GitHub Repo stars](https://img.shields.io/github/stars/Intervention/image) ![GitHub last commit](https://img.shields.io/github/last-commit/Intervention/image)](https://github.com/Intervention/image).

## Libs
*Useful libraries or tools that don't fit in any of the other categories.*

- [Capcake ![GitHub Repo stars](https://img.shields.io/github/stars/jadb/capcake) ![GitHub last commit](https://img.shields.io/github/last-commit/jadb/capcake)](https://github.com/jadb/capcake) - Deploy CakePHP applications using Capistrano.
- [Chronos ![GitHub Repo stars](https://img.shields.io/github/stars/cakephp/chronos) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/chronos)](https://github.com/cakephp/chronos) - A simple standalone DateTime API extension (successor of Carbon).
- [Composer Installers ![GitHub Repo stars](https://img.shields.io/github/stars/composer/installers) ![GitHub last commit](https://img.shields.io/github/last-commit/composer/installers)](https://github.com/composer/installers) - A multi framework Composer library installer.
- [Composer](https://getcomposer.org/)/[Packagist](https://packagist.org/) - A package and dependency manager.
- [Graphviz ![GitHub Repo stars](https://img.shields.io/github/stars/alexandresalome/graphviz) ![GitHub last commit](https://img.shields.io/github/last-commit/alexandresalome/graphviz)](https://github.com/alexandresalome/graphviz) - A Graphviz library.
- [Jenkins](https://jenkins.io/) - The free alternative for private (GitHub) repos.
- [Rocketeer ![GitHub Repo stars](https://img.shields.io/github/stars/rocketeers/rocketeer) ![GitHub last commit](https://img.shields.io/github/last-commit/rocketeers/rocketeer)](https://github.com/rocketeers/rocketeer) - PHP task runner and deployment package.
- [Travis CI](https://travis-ci.org/) - A continuous integration platform - de-facto standard for testing (GitHub) repos.
- [YamlRoute ![GitHub Repo stars](https://img.shields.io/github/stars/makallio85/yaml-route) ![GitHub last commit](https://img.shields.io/github/last-commit/makallio85/yaml-route)](https://github.com/makallio85/yaml-route) - Configure routes with simple YAML files.

## Markup
*Plugins for working with markup.*

- [Gourmet/CommonMark plugin ![GitHub Repo stars](https://img.shields.io/github/stars/gourmet/common-mark) ![GitHub last commit](https://img.shields.io/github/last-commit/gourmet/common-mark)](https://github.com/gourmet/common-mark) - Adds [CommonMark](https://commonmark.org/) Markdown parsing.
- :strawberry: [Markup plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-markup) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-markup)](https://github.com/dereuromark/cakephp-markup) - Allows to use PHP or JS based syntax highlighting.

## Migration
*Plugins and resources around migration and upgrading.*

- :strawberry: [Migrations plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cakephp/migrations) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/migrations)](https://github.com/cakephp/migrations) - (DB) Migration plugin.
- :strawberry: [Upgrade app ![GitHub Repo stars](https://img.shields.io/github/stars/cakephp/upgrade) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/upgrade)](https://github.com/cakephp/upgrade) - Official upgrade app for 2.x=>3.x and 3.x=>4.x.
- :strawberry: [Upgrade app (extended) ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/upgrade) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/upgrade)](https://github.com/dereuromark/upgrade) - An extended upgrade app for 2.x=>3.x, between 3.x and some 4.x snippets.
- [Upgrade/Migration Guide](https://book.cakephp.org/3.0/en/appendices.html) - Official migration guide.

## Miscellaneous
*Misc plugins and libraries.*

- [ActionsClass plugin ![GitHub Repo stars](https://img.shields.io/github/stars/HavokInspiration/cakephp-actions-class) ![GitHub last commit](https://img.shields.io/github/last-commit/HavokInspiration/cakephp-actions-class)](https://github.com/HavokInspiration/cakephp-actions-class) - Gives you the ability to manage your Controller actions as single classes.
- :strawberry: [Ajax plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-ajax) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-ajax)](https://github.com/dereuromark/cakephp-ajax) - A plugin to ease handling AJAX requests.
- [CakeAdmin plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cakemanager/cakephp-cakeadmin) ![GitHub last commit](https://img.shields.io/github/last-commit/cakemanager/cakephp-cakeadmin)](https://github.com/cakemanager/cakephp-cakeadmin) - A non-stable user management plugin with a built-in admin area.
- [CakeDC/Enum plugin ![GitHub Repo stars](https://img.shields.io/github/stars/CakeDC/enum) ![GitHub last commit](https://img.shields.io/github/last-commit/CakeDC/enum)](https://github.com/CakeDC/enum) - A plugin to add enumeration list support to your app.
- :strawberry: [CakeDto plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-dto) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-dto)](https://github.com/dereuromark/cakephp-dto) - Quickly generate useful data transfer objects for your app (mutable/immutable), replacing messy arrays and leveraging your IDE through typehinting and autocomplete.
- :strawberry: [CakeImpersonate plugin ![GitHub Repo stars](https://img.shields.io/github/stars/jomweb/CakeImpersonate) ![GitHub last commit](https://img.shields.io/github/last-commit/jomweb/CakeImpersonate)](https://github.com/jomweb/CakeImpersonate) - A component that stores the current authentication session and creates new session for impersonating Users. User can revert back to original authentication sessions without the need to re-login.
- [CakeMiddlewares ![GitHub Repo stars](https://img.shields.io/github/stars/chrisShick/CakeMiddlewares) ![GitHub last commit](https://img.shields.io/github/last-commit/chrisShick/CakeMiddlewares)](https://github.com/chrisShick/CakeMiddlewares) - A collection of Cakephp Middlewares.
- :strawberry: [Calendar plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-calendar) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-calendar)](https://github.com/dereuromark/cakephp-calendar) - For generating basic calendars. Includes IcalView for ICS calendar file generation.
- [Comments plugin ![GitHub Repo stars](https://img.shields.io/github/stars/Kareylo/CakePHP-Comments) ![GitHub last commit](https://img.shields.io/github/last-commit/Kareylo/CakePHP-Comments)](https://github.com/Kareylo/CakePHP-Comments) - A fully customizable Comments plugin.
- [CurrencyConverter plugin ![GitHub Repo stars](https://img.shields.io/github/stars/AlessandroMinoccheri/cakephp-currency-converter) ![GitHub last commit](https://img.shields.io/github/last-commit/AlessandroMinoccheri/cakephp-currency-converter)](https://github.com/AlessandroMinoccheri/cakephp-currency-converter) - A plugin to convert currency into another one.
- [Dashboard plugin ![GitHub Repo stars](https://img.shields.io/github/stars/gourmet/dashboard) ![GitHub last commit](https://img.shields.io/github/last-commit/gourmet/dashboard)](https://github.com/gourmet/dashboard) - Build beautiful dashboards for your cakes.
- [DatabaseBackup plugin ![GitHub Repo stars](https://img.shields.io/github/stars/mirko-pagliai/cakephp-database-backup) ![GitHub last commit](https://img.shields.io/github/last-commit/mirko-pagliai/cakephp-database-backup)](https://github.com/mirko-pagliai/cakephp-database-backup) - A plugin to export, import and manage database backups.
- :strawberry: [Feedback plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-feedback) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-feedback)](https://github.com/dereuromark/cakephp-feedback) - Allow visitors to send quick and easy feedback incl. a screenshot via sidebar form.
- :strawberry: [Flash plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-flash) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-flash)](https://github.com/dereuromark/cakephp-flash) - More powerful flash messages for your application.
- :strawberry: [OPCache Preloader ![GitHub Repo stars](https://img.shields.io/github/stars/cnizzardini/cakephp-preloader) ![GitHub last commit](https://img.shields.io/github/last-commit/cnizzardini/cakephp-preloader)](https://github.com/cnizzardini/cakephp-preloader) - An OPCache Preloader for CakePHP 4.x applications. 
- [OrcaServices/Heartbeat plugin ![GitHub Repo stars](https://img.shields.io/github/stars/orca-services/cakephp-heartbeat) ![GitHub last commit](https://img.shields.io/github/last-commit/orca-services/cakephp-heartbeat)](https://github.com/orca-services/cakephp-heartbeat/) - Monitor the hearbeat of your application (e.g. whether the database is available and up-to-date).
- [Inertia plugin ![GitHub Repo stars](https://img.shields.io/github/stars/ishanvyas22/cakephp-inertiajs) ![GitHub last commit](https://img.shields.io/github/last-commit/ishanvyas22/cakephp-inertiajs)](https://github.com/ishanvyas22/cakephp-inertiajs) - Server side adapter for Inertia.js.
- [Interval plugin ![GitHub Repo stars](https://img.shields.io/github/stars/LubosRemplik/CakePHP-Interval) ![GitHub last commit](https://img.shields.io/github/last-commit/LubosRemplik/CakePHP-Interval)](https://github.com/LubosRemplik/CakePHP-Interval) - Converts seconds to human readable string (string to seconds), uses business hours (1 week = 5 days, 1 day = 8 hours).
- [LinkScanner ![GitHub Repo stars](https://img.shields.io/github/stars/mirko-pagliai/cakephp-link-scanner) ![GitHub last commit](https://img.shields.io/github/last-commit/mirko-pagliai/cakephp-link-scanner)](https://github.com/mirko-pagliai/cakephp-link-scanner) - A plugin for recursively scanning links.
- [Robotusers/Tactician plugin ![GitHub Repo stars](https://img.shields.io/github/stars/robotusers/cakephp-tactician) ![GitHub last commit](https://img.shields.io/github/last-commit/robotusers/cakephp-tactician)](https://github.com/robotusers/cakephp-tactician) - Tools for Tactician command bus integration.
- :strawberry: [Setup:Maintenance ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-setup) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-setup)](https://github.com/dereuromark/cakephp-setup/blob/master/docs/Maintenance/Maintenance.md) - Maintenance shell to go into maintenance mode for all requests with optional IP whitelisting.
- :strawberry: [Shim plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-shim) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-shim)](https://github.com/dereuromark/cakephp-shim) - A plugin containing useful shims and improvements as basis for your application.
- [TokenVerify plugin ![GitHub Repo stars](https://img.shields.io/github/stars/mosaxiv/cakephp-token-verify) ![GitHub last commit](https://img.shields.io/github/last-commit/mosaxiv/cakephp-token-verify)](https://github.com/mosaxiv/cakephp-token-verify) - Easily issue tokens that can be used for mail authentication.
- :strawberry: [Tools plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-tools)](https://github.com/dereuromark/cakephp-tools) - Containing lots of useful libs, helpers, behaviors, components, shells and more.
- [UserTools plugin ![GitHub Repo stars](https://img.shields.io/github/stars/burzum/cakephp-user-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/burzum/cakephp-user-tools)](https://github.com/burzum/cakephp-user-tools) - User tools for login, registration, password reset and more. Works out of the box CRUD like and is highly configurable.
- [Utils plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cakemanager/cakephp-utils) ![GitHub last commit](https://img.shields.io/github/last-commit/cakemanager/cakephp-utils)](https://github.com/cakemanager/cakephp-utils) - Containing useful components (Authorizer, Menu) and behaviors (WhoDidIt, Uploadable, Metas, Stateable).
- [Wrench plugin ![GitHub Repo stars](https://img.shields.io/github/stars/HavokInspiration/wrench) ![GitHub last commit](https://img.shields.io/github/last-commit/HavokInspiration/wrench)](https://github.com/HavokInspiration/wrench) - Maintenance Mode plugin. Easily extensible and customizable.
- [Yaml plugin ![GitHub Repo stars](https://img.shields.io/github/stars/guemidiborhane/Cake-Yaml) ![GitHub last commit](https://img.shields.io/github/last-commit/guemidiborhane/Cake-Yaml)](https://github.com/guemidiborhane/Cake-Yaml) - For using YAML config files instead of PHP arrays.

## Navigation
*Tools for building navigation structures.*

- :strawberry: [Icings/Menu plugin ![GitHub Repo stars](https://img.shields.io/github/stars/icings/menu) ![GitHub last commit](https://img.shields.io/github/last-commit/icings/menu)](https://github.com/icings/menu) - A [KnpMenu ![GitHub Repo stars](https://img.shields.io/github/stars/KnpLabs/KnpMenu) ![GitHub last commit](https://img.shields.io/github/last-commit/KnpLabs/KnpMenu)](https://github.com/KnpLabs/KnpMenu) seasoned menu plugin for CakePHP.

## NoSQL
*Plugins for working with "NoSQL" backends.*

- [Monga plugin ![GitHub Repo stars](https://img.shields.io/github/stars/lewestopher/cakephp-monga) ![GitHub last commit](https://img.shields.io/github/last-commit/lewestopher/cakephp-monga)](https://github.com/lewestopher/cakephp-monga) - Provides access to MongoDB datasource using [`thephpleague/monga` ![GitHub Repo stars](https://img.shields.io/github/stars/thephpleague/monga) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/monga)](https://github.com/thephpleague/monga).

## Notifications
*Plugins for working with notification software.*

- [ker0x/CakeGcm plugin ![GitHub Repo stars](https://img.shields.io/github/stars/ker0x/CakeGCM) ![GitHub last commit](https://img.shields.io/github/last-commit/ker0x/CakeGCM)](https://github.com/ker0x/CakeGCM) - A plugin to send downstream messages to an Android or iOS device through Google Cloud Messaging.
- [Notifier plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cakemanager/cakephp-notifier) ![GitHub last commit](https://img.shields.io/github/last-commit/cakemanager/cakephp-notifier)](https://github.com/cakemanager/cakephp-notifier) - A plugin that makes creating and reading notifications easy.
- [ker0x/Push plugin ![GitHub Repo stars](https://img.shields.io/github/stars/ker0x/cakephp-push) ![GitHub last commit](https://img.shields.io/github/last-commit/ker0x/cakephp-push)](https://github.com/ker0x/cakephp-push) - A plugin to send push notifications through services like Firebase Cloud Messaging.

## ORM / Database / Datamapping
*Plugins that implement object-relational mapping or data-mapping techniques.*

- :strawberry: [ADmad/Sequence plugin ![GitHub Repo stars](https://img.shields.io/github/stars/ADmad/cakephp-sequence) ![GitHub last commit](https://img.shields.io/github/last-commit/ADmad/cakephp-sequence)](https://github.com/ADmad/cakephp-sequence) - Behavior for maintaining ordered list of records.
- :strawberry: [CakeDecimal plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-decimal) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-decimal)](https://github.com/dereuromark/cakephp-decimal) - A value object approach on handling decimals.
- :strawberry: [Duplicatable plugin ![GitHub Repo stars](https://img.shields.io/github/stars/riesenia/cakephp-duplicatable) ![GitHub last commit](https://img.shields.io/github/last-commit/riesenia/cakephp-duplicatable)](https://github.com/riesenia/cakephp-duplicatable) - Behavior for duplicating entities including related data.
- [Fetchable plugin ![GitHub Repo stars](https://img.shields.io/github/stars/riesenia/cakephp-fetchable) ![GitHub last commit](https://img.shields.io/github/last-commit/riesenia/cakephp-fetchable)](https://github.com/riesenia/cakephp-fetchable) - Behavior for fetching entities from cache / memory.
- :strawberry: [Lampager/Cake plugin ![GitHub Repo stars](https://img.shields.io/github/stars/lampager/lampager-cakephp) ![GitHub last commit](https://img.shields.io/github/last-commit/lampager/lampager-cakephp)](https://github.com/lampager/lampager-cakephp) - Rapid pagination without using OFFSET.
- [JeremyHarris/LazyLoad plugin ![GitHub Repo stars](https://img.shields.io/github/stars/jeremyharris/cakephp-lazyload) ![GitHub last commit](https://img.shields.io/github/last-commit/jeremyharris/cakephp-lazyload)](https://github.com/jeremyharris/cakephp-lazyload) - An association lazy loader for entities.
- [Lqdt/OrmJson plugin ![GitHub Repo stars](https://img.shields.io/github/stars/liqueurdetoile/cakephp-orm-json) ![GitHub last commit](https://img.shields.io/github/last-commit/liqueurdetoile/cakephp-orm-json)](https://github.com/liqueurdetoile/cakephp-orm-json) - Behavior and Trait for selecting, finding, getting and setting properties and values inside JSON type fields through CakePHP ORM.
- [Money plugin ![GitHub Repo stars](https://img.shields.io/github/stars/gourmet/money) ![GitHub last commit](https://img.shields.io/github/last-commit/gourmet/money)](https://github.com/gourmet/money) - Money data type for CakePHP entities using [sebastianbergmann/money ![GitHub Repo stars](https://img.shields.io/github/stars/sebastianbergmann/money) ![GitHub last commit](https://img.shields.io/github/last-commit/sebastianbergmann/money)](https://github.com/sebastianbergmann/money).
- :strawberry: [Muffin/Orderly plugin ![GitHub Repo stars](https://img.shields.io/github/stars/usemuffin/orderly) ![GitHub last commit](https://img.shields.io/github/last-commit/usemuffin/orderly)](https://github.com/usemuffin/orderly) - Allows setting default order for your tables.
- :strawberry: [Muffin/Sti plugin ![GitHub Repo stars](https://img.shields.io/github/stars/UseMuffin/Sti) ![GitHub last commit](https://img.shields.io/github/last-commit/UseMuffin/Sti)](https://github.com/UseMuffin/Sti) - Single Table Inheritance for CakePHP. 
- :strawberry: [Muffin/Trash plugin ![GitHub Repo stars](https://img.shields.io/github/stars/usemuffin/trash) ![GitHub last commit](https://img.shields.io/github/last-commit/usemuffin/trash)](https://github.com/usemuffin/trash) - Soft-delete behavior for CakePHP.
- [PersistRelatedData plugin ![GitHub Repo stars](https://img.shields.io/github/stars/riesenia/persist-related-data) ![GitHub last commit](https://img.shields.io/github/last-commit/riesenia/persist-related-data)](https://github.com/riesenia/persist-related-data) - Behavior for persisting selected fields of related models.
- [Robotusers/Excel plugin ![GitHub Repo stars](https://img.shields.io/github/stars/robotusers/cakephp-excel) ![GitHub last commit](https://img.shields.io/github/last-commit/robotusers/cakephp-excel)](https://github.com/robotusers/cakephp-excel) - ORM wrapper for PHPExcel.
- :strawberry: [Robotusers/TableInheritance plugin ![GitHub Repo stars](https://img.shields.io/github/stars/robotusers/cakephp-table-inheritance) ![GitHub last commit](https://img.shields.io/github/last-commit/robotusers/cakephp-table-inheritance)](https://github.com/robotusers/cakephp-table-inheritance) - Singe Table Inheritance (STI) plugin.
- :strawberry: [RowLocker plugin ![GitHub Repo stars](https://img.shields.io/github/stars/lorenzo/row-locker) ![GitHub last commit](https://img.shields.io/github/last-commit/lorenzo/row-locker)](https://github.com/lorenzo/row-locker) - Exclusive locks for rows in your tables.
- [Serializeable Data Types plugin ![GitHub Repo stars](https://img.shields.io/github/stars/burzum/cakephp-serialize-data-types) ![GitHub last commit](https://img.shields.io/github/last-commit/burzum/cakephp-serialize-data-types)](https://github.com/burzum/cakephp-serialize-data-types) - Serialize DB content as JSON or using phps serializing functions.
- :strawberry: [Muffin/Webservices ORM plugin ![GitHub Repo stars](https://img.shields.io/github/stars/usemuffin/webservice) ![GitHub last commit](https://img.shields.io/github/last-commit/usemuffin/webservice)](https://github.com/usemuffin/webservice) - An ORM like interface for webservices.
- :strawberry: [Connehito/CakephpMasterReplica plugin ![GitHub Repo stars](https://img.shields.io/github/stars/Connehito/cakephp-master-replica) ![GitHub last commit](https://img.shields.io/github/last-commit/Connehito/cakephp-master-replica)](https://github.com/Connehito/cakephp-master-replica) - Switch master/replica database connections.
- :strawberry: [Itosho/EasyQuery plugin ![GitHub Repo stars](https://img.shields.io/github/stars/itosho/easy-query) ![GitHub last commit](https://img.shields.io/github/last-commit/itosho/easy-query)](https://github.com/itosho/easy-query) - Behavior for easily generating some complicated queries like (bulk) insert/upsert etc.

## PDF
*Plugins and software for working with PDF files.*

- :strawberry: [CakePdf plugin ![GitHub Repo stars](https://img.shields.io/github/stars/FriendsOfCake/CakePdf) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/CakePdf)](https://github.com/FriendsOfCake/CakePdf) - A plugin around PDF generation.

## Queue
*Plugins for working with event and task queues.*

- [CakeResque plugin ![GitHub Repo stars](https://img.shields.io/github/stars/wa0x6e/Cake-Resque) ![GitHub last commit](https://img.shields.io/github/last-commit/wa0x6e/Cake-Resque)](https://github.com/wa0x6e/Cake-Resque) - A plugin for Resque, a library for creating background jobs.
- :strawberry: [CakeQueuesadilla plugin ![GitHub Repo stars](https://img.shields.io/github/stars/josegonzalez/cakephp-queuesadilla) ![GitHub last commit](https://img.shields.io/github/last-commit/josegonzalez/cakephp-queuesadilla)](https://github.com/josegonzalez/cakephp-queuesadilla) - A plugin that provides queueing integration with a variety of backends (BeanstalkD, MySQL, Redis, etc.).
- [Gearman plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cvo-technologies/cakephp-gearman) ![GitHub last commit](https://img.shields.io/github/last-commit/cvo-technologies/cakephp-gearman)](https://github.com/cvo-technologies/cakephp-gearman) - A plugin for offloading CakePHP tasks to a Gearman Job Server.
- :strawberry: [Queue plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-queue) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-queue)](https://github.com/dereuromark/cakephp-queue) - A minimal and dependency-free queue solution.

## REST and API
*Plugins and web tools for developing REST-ful APIs.*

- :strawberry: [Alt3/Swagger plugin ![GitHub Repo stars](https://img.shields.io/github/stars/alt3/cakephp-swagger) ![GitHub last commit](https://img.shields.io/github/last-commit/alt3/cakephp-swagger)](https://github.com/alt3/cakephp-swagger) - Swagger 2.0 documentation for your CakePHP APIs using swagger-php and swagger-ui.
- [Alt3/ValidationExposer plugin ![GitHub Repo stars](https://img.shields.io/github/stars/alt3/cakephp-validation-exposer) ![GitHub last commit](https://img.shields.io/github/last-commit/alt3/cakephp-validation-exposer)](https://github.com/alt3/cakephp-validation-exposer) - Easily expose your application's validation rules.
- [ApiPagination plugin ![GitHub Repo stars](https://img.shields.io/github/stars/bcrowe/cakephp-api-pagination) ![GitHub last commit](https://img.shields.io/github/last-commit/bcrowe/cakephp-api-pagination)](https://github.com/bcrowe/cakephp-api-pagination) - Injects pagination information from CakePHP's Paginator into serialized JsonView and XmlView responses.
- :strawberry: [CakeDC/Api plugin ![GitHub Repo stars](https://img.shields.io/github/stars/CakeDC/cakephp-api) ![GitHub last commit](https://img.shields.io/github/last-commit/CakeDC/cakephp-api)](https://github.com/CakeDC/cakephp-api) - All-in-one solution to provide a complete API. It includes versioning, renderers, CRUD, authentication, extensions (paginate, filter, HATEOAS), and much more.
- [Cors plugin ![GitHub Repo stars](https://img.shields.io/github/stars/ozee31/cakephp-cors) ![GitHub last commit](https://img.shields.io/github/last-commit/ozee31/cakephp-cors)](https://github.com/ozee31/cakephp-cors) - Activate CORS with Middleware.
- [Cors plugin ![GitHub Repo stars](https://img.shields.io/github/stars/snelg/cakephp-cors) ![GitHub last commit](https://img.shields.io/github/last-commit/snelg/cakephp-cors)](https://github.com/snelg/cakephp-cors) - A lightweight plugin for adding CORS headers to specified endpoints.
- [CrudJsonApi plugin ![GitHub Repo stars](https://img.shields.io/github/stars/FriendsOfCake/crud-json-api) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/crud-json-api)](https://github.com/FriendsOfCake/crud-json-api) - Crud listener for building [JSON API](https://jsonapi.org/) compliant APIs.
- :strawberry: [FractalTransformerView plugin ![GitHub Repo stars](https://img.shields.io/github/stars/andrej-griniuk/cakephp-fractal-transformer-view) ![GitHub last commit](https://img.shields.io/github/last-commit/andrej-griniuk/cakephp-fractal-transformer-view)](https://github.com/andrej-griniuk/cakephp-fractal-transformer-view) - A plugin which allows using [Fractal transformers](https://fractal.thephpleague.com/transformers/) for your API output.
- :strawberry: [SwaggerBake plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cnizzardini/cakephp-swagger-bake) ![GitHub last commit](https://img.shields.io/github/last-commit/cnizzardini/cakephp-swagger-bake)](https://github.com/cnizzardini/cakephp-swagger-bake) - This plugin automatically builds your Swagger UI documentation from your existing models and routes. A redoc option is also available.

## Search
*Plugins and software for indexing and performing search queries on data.*

- :strawberry: [Cake/ElasticSearch plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cakephp/elastic-search) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/elastic-search)](https://github.com/cakephp/elastic-search) - Alternative ORM using [Elasticsearch](https://www.elastic.co/) as its backend.
- :strawberry: [PlumSearch plugin ![GitHub Repo stars](https://img.shields.io/github/stars/skie/plum_search) ![GitHub last commit](https://img.shields.io/github/last-commit/skie/plum_search)](https://github.com/skie/plum_search) - Search plugin implements custom, flexible and extendable search strategies. Implements PRG pattern.
- :strawberry: [Search plugin ![GitHub Repo stars](https://img.shields.io/github/stars/FriendsOfCake/search) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/search)](https://github.com/FriendsOfCake/search) - Provides easy searching/filtering for paginated views using PRG pattern.
- [SphinxSearch plugin ![GitHub Repo stars](https://img.shields.io/github/stars/voycey/cakephp-sphinxsearch) ![GitHub last commit](https://img.shields.io/github/last-commit/voycey/cakephp-sphinxsearch)](https://github.com/voycey/cakephp-sphinxsearch) - Basic behaviour implementation for querying SphinxSearch indexes.
- :strawberry: [Tags plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-tags) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-tags)](https://github.com/dereuromark/cakephp-tags) - For tagging and finding tagged records.

## Security
*Plugins and information around security, preventing vulnerabilities and protection against XSS and alike.*

- :strawberry: [Bruteforce ![GitHub Repo stars](https://img.shields.io/github/stars/Ali1/cakephp-bruteforce) ![GitHub last commit](https://img.shields.io/github/last-commit/Ali1/cakephp-bruteforce)](https://github.com/Ali1/cakephp-bruteforce/) - Simple way to add Brute Force Protection to your installation without involving database.
- [BryanCrowe/EncryptedType ![GitHub Repo stars](https://img.shields.io/github/stars/bcrowe/cakephp-encrypted-type) ![GitHub last commit](https://img.shields.io/github/last-commit/bcrowe/cakephp-encrypted-type)](https://github.com/bcrowe/cakephp-encrypted-type) - Simple solution that enables Encrypted data types to be stored in the database.
- :strawberry: [Captcha plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-captcha) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-captcha)](https://github.com/dereuromark/cakephp-captcha) - Simple, unobstrusive and extendable captcha solution providing by default an image based math captcha.
- [CipherBehavior plugin ![GitHub Repo stars](https://img.shields.io/github/stars/adayth/cakephp-cipher-behavior) ![GitHub last commit](https://img.shields.io/github/last-commit/adayth/cakephp-cipher-behavior)](https://github.com/adayth/cakephp-cipher-behavior) - Cipher your entities data with this behavior. Encryption is done at PHP level using CakePHP Security class.
- :strawberry: [Expose plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-expose) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-expose)](https://github.com/dereuromark/cakephp-expose) - Expose entities through additional UUIDs instead of their AIID primary keys to obfuscate those IDs and data associated with these numerically ordered values.
- :strawberry: [Muffin/Obfuscate plugin ![GitHub Repo stars](https://img.shields.io/github/stars/usemuffin/obfuscate) ![GitHub last commit](https://img.shields.io/github/last-commit/usemuffin/obfuscate)](https://github.com/usemuffin/obfuscate) - Primary key obfuscation/shortening using UUIDs, HashIds, Optimus, Tiny and/or custom obfuscation strategies.
- :strawberry: [Muffin/Throttle plugin ![GitHub Repo stars](https://img.shields.io/github/stars/usemuffin/throttle) ![GitHub last commit](https://img.shields.io/github/last-commit/usemuffin/throttle)](https://github.com/usemuffin/throttle) - A plugin for rate limiting (API) requests.
- :strawberry: [Recaptcha plugin ![GitHub Repo stars](https://img.shields.io/github/stars/ctlabvn/Recaptcha) ![GitHub last commit](https://img.shields.io/github/last-commit/ctlabvn/Recaptcha)](https://github.com/ctlabvn/Recaptcha) - Simple, lightweight Google Recaptcha v2.
- [Recaptcha Mailhide plugin ![GitHub Repo stars](https://img.shields.io/github/stars/mirko-pagliai/cakephp-recaptcha-mailhide) ![GitHub last commit](https://img.shields.io/github/last-commit/mirko-pagliai/cakephp-recaptcha-mailhide)](https://github.com/mirko-pagliai/cakephp-recaptcha-mailhide) - A plugin that allows you to hide email addresses using reCAPTCHA.
- [StopSpam plugin ![GitHub Repo stars](https://img.shields.io/github/stars/mirko-pagliai/cakephp-stop-spam) ![GitHub last commit](https://img.shields.io/github/last-commit/mirko-pagliai/cakephp-stop-spam)](https://github.com/mirko-pagliai/cakephp-stop-spam) - A plugin that allows you to check if a username, email address or IP address has been reported as a spammer.

## SEO
*Search Engine Optimization.*

- :strawberry: [Muffin/Slug plugin ![GitHub Repo stars](https://img.shields.io/github/stars/UseMuffin/Slug) ![GitHub last commit](https://img.shields.io/github/last-commit/UseMuffin/Slug)](https://github.com/UseMuffin/Slug) - A plugin for generating slugs and finding records by slug. Uses a pluggable architecture which allows using your own slug generator class.
- [Seo plugin ![GitHub Repo stars](https://img.shields.io/github/stars/orgasmicnightmare/cakephp-seo) ![GitHub last commit](https://img.shields.io/github/last-commit/orgasmicnightmare/cakephp-seo)](https://github.com/orgasmicnightmare/cakephp-seo) - Auto-creates and manages your SEO tags.
- [Sluggable plugin ![GitHub Repo stars](https://img.shields.io/github/stars/Xety/Cake3-Sluggable) ![GitHub last commit](https://img.shields.io/github/last-commit/Xety/Cake3-Sluggable)](https://github.com/Xety/Cake3-Sluggable) - A simple Cake3 plugin to slug fields and find records by slug.
- :strawberry: [Tools:Slugged ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-tools)](https://github.com/dereuromark/cakephp-tools) - Containing Slugged behavior to auto-generate URL-compatible slugs from titles.

## Skeleton
*Plugins and repositories around app skeletons.*

- :strawberry: [App template ![GitHub Repo stars](https://img.shields.io/github/stars/cakephp/app) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/app)](https://github.com/cakephp/app) - An empty CakePHP project for use with composer.
- :strawberry: [Crud plugin ![GitHub Repo stars](https://img.shields.io/github/stars/FriendsOfCake/crud) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/crud)](https://github.com/FriendsOfCake/crud) - CakePHP Application development on steroids - rapid prototyping / scaffolding & production ready code.
- :strawberry: [MixerApi/Bake ![GitHub Repo stars](https://img.shields.io/github/stars/mixerapi/bake) ![GitHub last commit](https://img.shields.io/github/last-commit/mixerapi/bake)](https://github.com/mixerapi/bake) - Bake theme for generating RESTful controllers.
- [Plugin Skeleton ![GitHub Repo stars](https://img.shields.io/github/stars/Xety/Cake3-PluginSkeleton) ![GitHub last commit](https://img.shields.io/github/last-commit/Xety/Cake3-PluginSkeleton)](https://github.com/Xety/Cake3-PluginSkeleton) - A skeleton example to create a Cake3 plugin.

## Social
*Plugins around social features.*

- [CakeDC/Forum plugin ![GitHub Repo stars](https://img.shields.io/github/stars/CakeDC/cakephp-forum) ![GitHub last commit](https://img.shields.io/github/last-commit/CakeDC/cakephp-forum)](https://github.com/CakeDC/cakephp-forum) - Forum plugin including categories, threads and replies, reporting messages, moderators, admin interface and more.
- :strawberry: [Ratings plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-ratings) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-ratings)](https://github.com/dereuromark/cakephp-ratings) - Allows users to rate records and displays ratings.
- [SocialShare plugin ![GitHub Repo stars](https://img.shields.io/github/stars/drmonkeyninja/cakephp-social-share) ![GitHub last commit](https://img.shields.io/github/last-commit/drmonkeyninja/cakephp-social-share)](https://github.com/drmonkeyninja/cakephp-social-share) - Link generator for sharing content on social networks.

## Templating
*Plugins for templating and lexing.*

- [Address plugin ![GitHub Repo stars](https://img.shields.io/github/stars/drmonkeyninja/cakephp-address) ![GitHub last commit](https://img.shields.io/github/last-commit/drmonkeyninja/cakephp-address)](https://github.com/drmonkeyninja/cakephp-address) - An address helper that outputs a marked up address.
- :strawberry: [Bake plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cakephp/bake) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/bake)](https://github.com/cakephp/bake) - Provides code generation functionality.
- [Bootstrap plugin ![GitHub Repo stars](https://img.shields.io/github/stars/elboletaire/twbs-cake-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/elboletaire/twbs-cake-plugin)](https://github.com/elboletaire/twbs-cake-plugin) - A Bootstrap 3 plugin with support for LESS.
- :strawberry: [BootstrapUI plugin ![GitHub Repo stars](https://img.shields.io/github/stars/friendsofcake/bootstrap-ui) ![GitHub last commit](https://img.shields.io/github/last-commit/friendsofcake/bootstrap-ui)](https://github.com/friendsofcake/bootstrap-ui) - Bootstrap 3 integration.
- [CakeExcel plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dakota/CakeExcel) ![GitHub last commit](https://img.shields.io/github/last-commit/dakota/CakeExcel)](https://github.com/dakota/CakeExcel) - An Excel view to generate XLSX files.
- [Chocolate plugin ![GitHub Repo stars](https://img.shields.io/github/stars/commercial-hippie/chocolate) ![GitHub last commit](https://img.shields.io/github/last-commit/commercial-hippie/chocolate)](https://github.com/commercial-hippie/chocolate) - Front-End framework FormHelper extensions.
- [CommonMark plugin ![GitHub Repo stars](https://img.shields.io/github/stars/gourmet/common-mark) ![GitHub last commit](https://img.shields.io/github/last-commit/gourmet/common-mark)](https://github.com/gourmet/common-mark) - Adds [CommonMark](https://commonmark.org) (markdown) support to models and views.
- :strawberry: [CsvView plugin ![GitHub Repo stars](https://img.shields.io/github/stars/FriendsOfCake/cakephp-csvview) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/cakephp-csvview)](https://github.com/FriendsOfCake/cakephp-csvview) - A view class to easily generate CSV.
- [Datalist plugin ![GitHub Repo stars](https://img.shields.io/github/stars/rrd108/cakephp-datalist) ![GitHub last commit](https://img.shields.io/github/last-commit/rrd108/cakephp-datalist)](https://github.com/rrd108/cakephp-datalist) - Support for HTML5 datalist element with the possibility to create new entries into associated models.
- :strawberry: [Feed plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-feed) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-feed)](https://github.com/dereuromark/cakephp-feed) - Containing an RssView class to easily generate (complex) RSS feeds.
- [InlineCss plugin ![GitHub Repo stars](https://img.shields.io/github/stars/drmonkeyninja/cakephp-inline-css) ![GitHub last commit](https://img.shields.io/github/last-commit/drmonkeyninja/cakephp-inline-css)](https://github.com/drmonkeyninja/cakephp-inline-css) - A plugin to convert HTML style blocks to inline CSS on a View template (intended for use with email templates).
- [JadeView plugin ![GitHub Repo stars](https://img.shields.io/github/stars/clthck/cakephp-jade) ![GitHub last commit](https://img.shields.io/github/last-commit/clthck/cakephp-jade)](https://github.com/clthck/cakephp-jade) - Jade template engine plugin.
- [Liquid plugin ![GitHub Repo stars](https://img.shields.io/github/stars/gourmet/liquid) ![GitHub last commit](https://img.shields.io/github/last-commit/gourmet/liquid)](https://github.com/gourmet/liquid) - A plugin to use the Liquid templating language for views.
- :strawberry: [Meta plugin ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-meta) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-meta)](https://github.com/dereuromark/cakephp-meta) - Makes handling meta tags and SEO relevant HTML markup DRY and easy.
- [SocialMeta plugin ![GitHub Repo stars](https://img.shields.io/github/stars/gourmet/social-meta) ![GitHub last commit](https://img.shields.io/github/last-commit/gourmet/social-meta)](https://github.com/gourmet/social-meta) - Adds support for Facebook's OpenGraph and Twitter's Card meta tags.
- :strawberry: [TwigView plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cakephp/twig-view) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/twig-view)](https://github.com/cakephp/twig-view) - A plugin to use the Twig Templating Language for views.
- [VideoEmbed plugin ![GitHub Repo stars](https://img.shields.io/github/stars/drmonkeyninja/cakephp-video-helper) ![GitHub last commit](https://img.shields.io/github/last-commit/drmonkeyninja/cakephp-video-helper)](https://github.com/drmonkeyninja/cakephp-video-helper) - Helper for embedding YouTube, Vimeo and Dailymotion videos.

## Testing
*Plugins/Tools for testing codebases and generating test data.*

- [CakePHP Codeception module ![GitHub Repo stars](https://img.shields.io/github/stars/cakephp/codeception) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/codeception)](https://github.com/cakephp/codeception) - The official CakePHP integration with [Codeception](https://codeception.com).
- [CakePHP CodeSniffer rules ![GitHub Repo stars](https://img.shields.io/github/stars/cakephp/cakephp-codesniffer) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/cakephp-codesniffer)](https://github.com/cakephp/cakephp-codesniffer) - The official CakePHP CS rules.
- :strawberry: [CakephpFixtureFactories plugin ![GitHub Repo stars](https://img.shields.io/github/stars/pakacuda/cakephp-fixture-factories) ![GitHub last commit](https://img.shields.io/github/last-commit/pakacuda/cakephp-fixture-factories)](https://github.com/pakacuda/cakephp-fixture-factories) - Create your fixtures dynamically on a test basis, accelerate the writing and maintainance of your tests.
- [Faker plugin ![GitHub Repo stars](https://img.shields.io/github/stars/gourmet/faker) ![GitHub last commit](https://img.shields.io/github/last-commit/gourmet/faker)](https://github.com/gourmet/faker) - [Faker ![GitHub Repo stars](https://img.shields.io/github/stars/fzaninotto/Faker) ![GitHub last commit](https://img.shields.io/github/last-commit/fzaninotto/Faker)](https://github.com/fzaninotto/Faker) support for CakePHP fixtures.
- [Fixtures plugin ![GitHub Repo stars](https://img.shields.io/github/stars/LubosRemplik/CakePHP-Fixtures) ![GitHub last commit](https://img.shields.io/github/last-commit/LubosRemplik/CakePHP-Fixtures)](https://github.com/LubosRemplik/CakePHP-Fixtures) - Fixtures plugin to read existing fixtures and create table/insert data for quick start with app.
- [FriendsOfCake/Fixturize plugin ![GitHub Repo stars](https://img.shields.io/github/stars/FriendsOfCake/fixturize) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/fixturize)](https://github.com/FriendsOfCake/fixturize) - More efficient inserting fixtures when running test suites by decreasing amount of inserts (mysql only).
- [Gourmet/Muffin plugin ![GitHub Repo stars](https://img.shields.io/github/stars/gourmet/muffin) ![GitHub last commit](https://img.shields.io/github/last-commit/gourmet/muffin)](https://github.com/gourmet/muffin) - [FactoryMuffin ![GitHub Repo stars](https://img.shields.io/github/stars/thephpleague/factory-muffin) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/factory-muffin)](https://github.com/thephpleague/factory-muffin) support for CakePHP fixture records.

## Third Party APIs
*Plugins for accessing third party APIs.*

- [CakeTmdb plugin ![GitHub Repo stars](https://img.shields.io/github/stars/drmonkeyninja/cakephp-tmdb) ![GitHub last commit](https://img.shields.io/github/last-commit/drmonkeyninja/cakephp-tmdb)](https://github.com/drmonkeyninja/cakephp-tmdb) - The Movie Database (TMDB) API integration.
- [CloudflareDeploy Plugin ![GitHub Repo stars](https://img.shields.io/github/stars/challgren/cakephp-cloudflare-deploy) ![GitHub last commit](https://img.shields.io/github/last-commit/challgren/cakephp-cloudflare-deploy)](https://github.com/challgren/cakephp-cloudflare-deploy) - Useful console commands for deploying CakePHP apps using Cloudflare.
- [GitHub plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cvo-technologies/cakephp-github) ![GitHub last commit](https://img.shields.io/github/last-commit/cvo-technologies/cakephp-github)](https://github.com/cvo-technologies/cakephp-github) - Allows access to the GitHub REST APIs using the [Webservice ![GitHub Repo stars](https://img.shields.io/github/stars/UseMuffin/Webservice) ![GitHub last commit](https://img.shields.io/github/last-commit/UseMuffin/Webservice)](https://github.com/UseMuffin/Webservice) ORM.
- [Jira plugin ![GitHub Repo stars](https://img.shields.io/github/stars/fr3nch13/cakephp-jira) ![GitHub last commit](https://img.shields.io/github/last-commit/fr3nch13/cakephp-jira)](https://github.com/fr3nch13/cakephp-jira) - Provides a helper to allow access to Jira's REST API using [lesstif/php-jira-rest-client ![GitHub Repo stars](https://img.shields.io/github/stars/lesstif/php-jira-rest-client) ![GitHub last commit](https://img.shields.io/github/last-commit/lesstif/php-jira-rest-client)](https://github.com/lesstif/php-jira-rest-client) as the Vendor. Currently read-only access.
- [Ratchet plugin ![GitHub Repo stars](https://img.shields.io/github/stars/WyriHaximus/Ratchet) ![GitHub last commit](https://img.shields.io/github/last-commit/WyriHaximus/Ratchet)](https://github.com/WyriHaximus/Ratchet) - Brings the Ratchet websocket package to CakePHP.
- [Salesforce plugin ![GitHub Repo stars](https://img.shields.io/github/stars/voycey/cakephp-salesforce) ![GitHub last commit](https://img.shields.io/github/last-commit/voycey/cakephp-salesforce)](https://github.com/voycey/cakephp-salesforce) - Allows use of CakePHP's ORM to Query and Interact with Salesforce Enterprise Instances.
- [Twitter plugin ![GitHub Repo stars](https://img.shields.io/github/stars/cvo-technologies/cakephp-twitter) ![GitHub last commit](https://img.shields.io/github/last-commit/cvo-technologies/cakephp-twitter)](https://github.com/cvo-technologies/cakephp-twitter) - Allows access to the Twitter REST and streaming APIs using the [Webservice ![GitHub Repo stars](https://img.shields.io/github/stars/UseMuffin/Webservice) ![GitHub last commit](https://img.shields.io/github/last-commit/UseMuffin/Webservice)](https://github.com/UseMuffin/Webservice) ORM.

# Software
*Software for creating a development environment.*

## Development Environment
*Software and tools for creating a sandboxed development environment.*

- [CakePHP.gitignore ![GitHub Repo stars](https://img.shields.io/github/stars/github/gitignore) ![GitHub last commit](https://img.shields.io/github/last-commit/github/gitignore)](https://github.com/github/gitignore/blob/master/CakePHP.gitignore) - The .gitignore file proposals.
- :strawberry: [CakePHP Docker ![GitHub Repo stars](https://img.shields.io/github/stars/cnizzardini/cakephp-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/cnizzardini/cakephp-docker)](https://github.com/cnizzardini/cakephp-docker) - A cakephp/app template for docker and kubernetes setup.
- [CakePHP Vagrant Setup ![GitHub Repo stars](https://img.shields.io/github/stars/cpierce/cakephp-vagrant-setup) ![GitHub last commit](https://img.shields.io/github/last-commit/cpierce/cakephp-vagrant-setup)](https://github.com/cpierce/cakephp-vagrant-setup) - Tool for spinning up multiple CakePHP 3.x Vanilla Dev Environments.
- [Devilbox](https://devilbox.readthedocs.io/en/latest/) - A docker development environment for (CakePHP) apps to be auto-setup including a lot of tools.
- [Docker ![GitHub Repo stars](https://img.shields.io/github/stars/stefanvangastel/docker-cakephp) ![GitHub last commit](https://img.shields.io/github/last-commit/stefanvangastel/docker-cakephp)](https://github.com/stefanvangastel/docker-cakephp) - CakePHP in a docker container environment.
- [Mixer ![GitHub Repo stars](https://img.shields.io/github/stars/CakeDC/mixer) ![GitHub last commit](https://img.shields.io/github/last-commit/CakeDC/mixer)](https://github.com/CakeDC/mixer) - A plugin to discover and manage CakePHP plugins.
- [NetBeans ![GitHub Repo stars](https://img.shields.io/github/stars/junichi11/cakephp3-netbeans) ![GitHub last commit](https://img.shields.io/github/last-commit/junichi11/cakephp3-netbeans)](https://github.com/junichi11/cakephp3-netbeans) -  This package provides support for CakePHP in NetBeans 8.1+.
- [Oven ![GitHub Repo stars](https://img.shields.io/github/stars/CakeDC/oven) ![GitHub last commit](https://img.shields.io/github/last-commit/CakeDC/oven)](https://github.com/CakeDC/oven) - Setup your favorite framework with 1 file and 1 click.
- [PhpStorm plugin ![GitHub Repo stars](https://img.shields.io/github/stars/skie/PhpStorm) ![GitHub last commit](https://img.shields.io/github/last-commit/skie/PhpStorm)](https://github.com/skie/PhpStorm) -  CakePHP auto-completion support for console commands in PhpStorm IDE.
- [Puppet](https://puppetlabs.com/) - A server automation framework and application.
- [Vagrant](https://www.vagrantup.com/) - A portable development environment utility.

IDE specific compatibility information and tips can be found [here ![GitHub Repo stars](https://img.shields.io/github/stars/dereuromark/cakephp-ide-helper) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/cakephp-ide-helper)](https://github.com/dereuromark/cakephp-ide-helper/wiki#ide-support-and-tips).

## Web Applications

## CMS and applications built on CakePHP

- [CakeBlog ![GitHub Repo stars](https://img.shields.io/github/stars/gwhitcher/CakeBlog) ![GitHub last commit](https://img.shields.io/github/last-commit/gwhitcher/CakeBlog)](https://github.com/gwhitcher/CakeBlog) - Open source blog software.
- [Croogo](https://croogo.org) - CMS software
- [QuickApps-CMS ![GitHub Repo stars](https://img.shields.io/github/stars/quickapps/cms) ![GitHub last commit](https://img.shields.io/github/last-commit/quickapps/cms)](https://github.com/quickapps/cms) - Open source content management system.

## Demo
*Web-based (demo) applications and tools.*

- [BlogMVC ![GitHub Repo stars](https://img.shields.io/github/stars/Kareylo/BlogMVC-CakePHP3) ![GitHub last commit](https://img.shields.io/github/last-commit/Kareylo/BlogMVC-CakePHP3)](https://github.com/Kareylo/BlogMVC-CakePHP3) - A simple Blog example with CakePHP based on [BlogMVC Project ![GitHub Repo stars](https://img.shields.io/github/stars/Grafikart/BlogMVC) ![GitHub last commit](https://img.shields.io/github/last-commit/Grafikart/BlogMVC)](https://github.com/Grafikart/BlogMVC).
- [Bookmarkr ![GitHub Repo stars](https://img.shields.io/github/stars/lorenzo/cakephp3-bookmarkr) ![GitHub last commit](https://img.shields.io/github/last-commit/lorenzo/cakephp3-bookmarkr)](https://github.com/lorenzo/cakephp3-bookmarkr) A bookmarking application built with the CRUD plugin.
- [CakeFest](http://cakefest.dereuromark.de/) - Demo application around the annual CakePHP Conference "CakeFest".
- [Croogo 3.x](http://demo.croogo.org/3.0) - Croogo 3.x demo
- [RealWorld ![GitHub Repo stars](https://img.shields.io/github/stars/gothinkster/cakephp-realworld-example-app) ![GitHub last commit](https://img.shields.io/github/last-commit/gothinkster/cakephp-realworld-example-app)](https://github.com/gothinkster/cakephp-realworld-example-app) - Example CakePHP codebase containing real world examples (CRUD, auth, advanced patterns and more) that adheres to the [RealWorld ![GitHub Repo stars](https://img.shields.io/github/stars/gothinkster/realworld-example-apps) ![GitHub last commit](https://img.shields.io/github/last-commit/gothinkster/realworld-example-apps)](https://github.com/gothinkster/realworld-example-apps) spec and API.
- [Sandbox](https://sandbox.dereuromark.de) - A sandbox CakePHP application with lots of demos and plugin showcasings.
- [Query Examples ![GitHub Repo stars](https://img.shields.io/github/stars/lorenzo/cakephp3-examples) ![GitHub last commit](https://img.shields.io/github/last-commit/lorenzo/cakephp3-examples)](https://github.com/lorenzo/cakephp3-examples) Advanced query building examples.
- [Xeta ![GitHub Repo stars](https://img.shields.io/github/stars/XetaIO/Xeta) ![GitHub last commit](https://img.shields.io/github/last-commit/XetaIO/Xeta)](https://github.com/XetaIO/Xeta) - A resource to help people starting with CakePHP.
- [Vue.js Demo App ![GitHub Repo stars](https://img.shields.io/github/stars/ishanvyas22/cakephpvue-spa) ![GitHub last commit](https://img.shields.io/github/last-commit/ishanvyas22/cakephpvue-spa)](https://github.com/ishanvyas22/cakephpvue-spa) - A CakePHP + VueJS single page application skeleton.

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
- [waltherlalk.com](http://waltherlalk.com) - A CakePHP related core dev blog.

## CakePHP Books and Articles
*Fantastic CakePHP-related (e)books and other reading material.*

## CakePHP Videos
*Fantastic CakePHP-related videos.*

- [CakePHP](https://www.youtube.com/user/CakePHP) - Channel about CakePHP videos.


## CakePHP Tutorials
*Must-do tutorials.*

- [Official Blog tutorial](https://book.cakephp.org/3.0/en/tutorials-and-examples/blog/blog.html)

## CakePHP Reading and Listening
*Documentation and CakePHP-related reading and listening materials.*

- [CakePHP Cookbook(!)](https://book.cakephp.org/) - The official CakePHP documentation.

## CakePHP Internals Reading
*Reading materials related to the CakePHP internals and decisions.*

- [Top 10 (and more) core contributors ![GitHub Repo stars](https://img.shields.io/github/stars/cakephp/cakephp) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/cakephp)](https://github.com/cakephp/cakephp/graphs/contributors) - Give 'em a hand.

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
awesome-cakephp has been created by [dereuromark](https://github.com/dereuromark) and is currently maintained by him and the FriendsOfCake group. Thank you to all [contributors ![GitHub Repo stars](https://img.shields.io/github/stars/FriendsOfCake/awesome-cakephp) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfCake/awesome-cakephp)](https://github.com/FriendsOfCake/awesome-cakephp/graphs/contributors), too.
