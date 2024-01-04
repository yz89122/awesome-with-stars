# Awesome PHP ![](https://github.com/ziadoz/awesome-php/workflows/Awesome%20Bot/badge.svg)

A curated list of amazingly awesome PHP libraries, resources and shiny things.

## Contributing and Collaborating
Please see [CONTRIBUTING ![GitHub Repo Stars](https://img.shields.io/github/stars/ziadoz/awesome-php) ![GitHub last commit](https://img.shields.io/github/last-commit/ziadoz/awesome-php)](https://github.com/ziadoz/awesome-php/blob/master/CONTRIBUTING.md), [CODE-OF-CONDUCT ![GitHub Repo Stars](https://img.shields.io/github/stars/ziadoz/awesome-php) ![GitHub last commit](https://img.shields.io/github/last-commit/ziadoz/awesome-php)](https://github.com/ziadoz/awesome-php/blob/master/CODE-OF-CONDUCT.md) and [COLLABORATING ![GitHub Repo Stars](https://img.shields.io/github/stars/ziadoz/awesome-php) ![GitHub last commit](https://img.shields.io/github/last-commit/ziadoz/awesome-php)](https://github.com/ziadoz/awesome-php/blob/master/COLLABORATING.md) for details.

## Table of Contents
- [Awesome PHP](#awesome-php)
    - [Composer Repositories](#composer-repositories)
    - [Dependency Management](#dependency-management)
    - [Dependency Management Extras](#dependency-management-extras)
    - [Frameworks](#frameworks)
    - [Framework Extras](#framework-extras)
    - [Content Management Systems](#content-management-systems-cms)
    - [Components](#components)
    - [Micro Frameworks](#micro-frameworks)
    - [Micro Framework Extras](#micro-framework-extras)
    - [Routers](#routers)
    - [Templating](#templating)
    - [Static Site Generators](#static-site-generators)
    - [HTTP](#http)
    - [Scraping](#scraping)
    - [Middlewares](#middlewares)
    - [URL](#url)
    - [Email](#email)
    - [Files](#Files)
    - [Streams](#streams)
    - [Dependency Injection](#dependency-injection)
    - [Imagery](#imagery)
    - [Testing](#testing)
    - [Continuous Integration](#continuous-integration)
    - [Documentation](#documentation)
    - [Security](#security)
    - [Passwords](#passwords)
    - [Code Analysis](#code-analysis)
    - [Code Quality](#code-quality)
    - [Static Analysis](#static-analysis)
    - [Architectural](#architectural)
    - [Debugging and Profiling](#debugging-and-profiling)
    - [Build Tools](#build-tools)
    - [Task Runners](#task-runners)
    - [Navigation](#navigation)
    - [Asset Management](#asset-management)
    - [Geolocation](#geolocation)
    - [Date and Time](#date-and-time)
    - [Event](#event)
    - [Logging](#logging)
    - [E-commerce](#e-commerce)
    - [PDF](#pdf)
    - [Office](#office)
    - [Database](#database)
    - [Migrations](#migrations)
    - [NoSQL](#nosql)
    - [Queue](#queue)
    - [Search](#search)
    - [Command Line](#command-line)
    - [Authentication and Authorization](#authentication-and-authorization)
    - [Markup and CSS](#markup-and-css)
    - [JSON](#json)
    - [Strings](#strings)
    - [Numbers](#numbers)
    - [Filtering and Validation](#filtering-and-validation)
    - [API](#api)
    - [Caching and Locking](#caching-and-locking)
    - [Data Structure and Storage](#data-structure-and-storage)
    - [Notifications](#notifications)
    - [Deployment](#deployment)
    - [Internationalisation and Localisation](#internationalisation-and-localisation)
    - [Serverless](#serverless)
    - [Configuration](#configuration)
    - [Third Party APIs](#third-party-apis)
    - [Extensions](#extensions)
    - [Miscellaneous](#miscellaneous)
- [Software](#software)
    - [PHP Installation](#php-installation)
    - [Development Environment](#development-environment)
    - [Virtual Machines](#virtual-machines)
    - [Text Editors and IDEs](#text-editors-and-ides)
    - [Web Applications](#web-applications)
    - [Infrastructure](#infrastructure)
- [Resources](#resources)
    - [PHP Websites](#php-websites)
    - [PHP Books](#php-books)
    - [PHP Videos](#php-videos)
    - [PHP Podcasts](#php-podcasts)
    - [PHP Newsletters](#php-newsletters)
    - [PHP Reading](#php-reading)
    - [PHP Internals Reading](#php-internals-reading)

### Composer Repositories
*Composer Repositories.*

* [Firegento](https://packages.firegento.com/) - Magento Module Composer Repository.
* [Packagist](https://packagist.org/) - The PHP Package Repository.
* [Private Packagist](https://packagist.com/) - Composer package archive as a service for PHP.
* [WordPress Packagist](https://wpackagist.org/) - Manage your plugins with Composer.

### Dependency Management
*Libraries for dependency and package management.*

* [Composer Installers ![GitHub Repo Stars](https://img.shields.io/github/stars/composer/installers) ![GitHub last commit](https://img.shields.io/github/last-commit/composer/installers)](https://github.com/composer/installers) - A  multi framework Composer library installer.
* [Composer](https://getcomposer.org/) - A package and dependency manager.
* [Phive](https://phar.io/) - A PHAR manager.
* [Pickle ![GitHub Repo Stars](https://img.shields.io/github/stars/FriendsOfPHP/pickle) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfPHP/pickle)](https://github.com/FriendsOfPHP/pickle) - A PHP extension installer.

### Dependency Management Extras
*Extras related to dependency management.*

* [Composed ![GitHub Repo Stars](https://img.shields.io/github/stars/joshdifabio/composed) ![GitHub last commit](https://img.shields.io/github/last-commit/joshdifabio/composed)](https://github.com/joshdifabio/composed) - A library to parse your project's Composer environment at runtime.
* [Composer Merge Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/wikimedia/composer-merge-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/wikimedia/composer-merge-plugin)](https://github.com/wikimedia/composer-merge-plugin) - A composer plugin to merge several `composer.json` files.
* [Composer Normalize ![GitHub Repo Stars](https://img.shields.io/github/stars/ergebnis/composer-normalize) ![GitHub last commit](https://img.shields.io/github/last-commit/ergebnis/composer-normalize)](https://github.com/ergebnis/composer-normalize) - A plugin for normalising `composer.json` files. 
* [Composer Patches ![GitHub Repo Stars](https://img.shields.io/github/stars/cweagans/composer-patches) ![GitHub last commit](https://img.shields.io/github/last-commit/cweagans/composer-patches)](https://github.com/cweagans/composer-patches) - A plugin for Composer to apply patches.
* [Composer Require Checker ![GitHub Repo Stars](https://img.shields.io/github/stars/maglnet/ComposerRequireChecker) ![GitHub last commit](https://img.shields.io/github/last-commit/maglnet/ComposerRequireChecker)](https://github.com/maglnet/ComposerRequireChecker) - CLI tool to analyze composer dependencies and verify that no unknown symbols are used in the sources of a package.
* [Composer Unused ![GitHub Repo Stars](https://img.shields.io/github/stars/composer-unused/composer-unused) ![GitHub last commit](https://img.shields.io/github/last-commit/composer-unused/composer-unused)](https://github.com/composer-unused/composer-unused) - A CLI Tool to scan for unused composer packages.
* [Prestissimo ![GitHub Repo Stars](https://img.shields.io/github/stars/hirak/prestissimo) ![GitHub last commit](https://img.shields.io/github/last-commit/hirak/prestissimo)](https://github.com/hirak/prestissimo) - A composer plugin which enables parallel install process.
* [Repman](https://repman.io) - A private PHP package repository manager and Packagist proxy.
* [Satis ![GitHub Repo Stars](https://img.shields.io/github/stars/composer/satis) ![GitHub last commit](https://img.shields.io/github/last-commit/composer/satis)](https://github.com/composer/satis) - A static Composer repository generator.
* [Tooly ![GitHub Repo Stars](https://img.shields.io/github/stars/tommy-muehle/tooly-composer-script) ![GitHub last commit](https://img.shields.io/github/last-commit/tommy-muehle/tooly-composer-script)](https://github.com/tommy-muehle/tooly-composer-script) - A library to manage PHAR files in project using Composer.
* [Toran Proxy](https://toranproxy.com) - A static Composer repository and proxy.

### Frameworks
*Web development frameworks.*

* [CakePHP](https://cakephp.org/) - A rapid application development framework.
* [Laminas](https://getlaminas.org/) - A framework comprised of individual components (previously Zend Framework).
* [Laravel](https://laravel.com/) - A web application framework with expressive, elegant syntax.
* [Nette](https://nette.org) - A web framework comprised of mature components.
* [Phalcon](https://phalcon.io/en-us) - A framework implemented as a C extension.
* [Spiral](https://spiral.dev/) - A high performance PHP/Go framework.
* [Symfony](https://symfony.com/) - A set of reusable components and a web framework.
* [Yii2 ![GitHub Repo Stars](https://img.shields.io/github/stars/yiisoft/yii2) ![GitHub last commit](https://img.shields.io/github/last-commit/yiisoft/yii2)](https://github.com/yiisoft/yii2/) - A fast, secure, and efficient web framework.

### Framework Extras
*Extras related to web development frameworks.*

* [CakePHP CRUD ![GitHub Repo Stars](https://img.shields.io/github/stars/friendsofcake/crud) ![GitHub last commit](https://img.shields.io/github/last-commit/friendsofcake/crud)](https://github.com/friendsofcake/crud) - A Rapid Application Development (RAD) plugin for CakePHP.
* [Knp RAD Components](https://rad.knplabs.com/) - A set of Rapid Application Development (RAD) components for Symfony.
* [LaravelS ![GitHub Repo Stars](https://img.shields.io/github/stars/hhxsv5/laravel-s) ![GitHub last commit](https://img.shields.io/github/last-commit/hhxsv5/laravel-s)](https://github.com/hhxsv5/laravel-s) - Glue for using Swoole in Laravel or Lumen.
* [Symfony CMF ![GitHub Repo Stars](https://img.shields.io/github/stars/symfony-cmf/symfony-cmf) ![GitHub last commit](https://img.shields.io/github/last-commit/symfony-cmf/symfony-cmf)](https://github.com/symfony-cmf/symfony-cmf) - A Content Management Framework to create custom CMS.
* [Livewire](https://laravel-livewire.com/) - A full-stack framework for Laravel that takes the pain out of building dynamic UIs.

### Content Management Systems (CMS)
*Tools for managing digital content.*

* [Backdrop](https://backdropcms.org) - A CMS targeting small-to-medium sized business and non-profits (a fork of Drupal).
* [Concrete5](https://www.concretecms.com/) - A CMS targeting users with a minimum of technical skills.
* [CraftCMS ![GitHub Repo Stars](https://img.shields.io/github/stars/craftcms/cms) ![GitHub last commit](https://img.shields.io/github/last-commit/craftcms/cms)](https://github.com/craftcms/cms) - A flexible, user-friendly CMS for creating custom digital experiences on the web and beyond.
* [Drupal](https://www.drupal.org) - An enterprise level CMS.
* [Grav ![GitHub Repo Stars](https://img.shields.io/github/stars/getgrav/grav) ![GitHub last commit](https://img.shields.io/github/last-commit/getgrav/grav)](https://github.com/getgrav/grav) - A modern flat-file CMS.
* [Joomla](https://www.joomla.org/) - Another leading CMS.
* [Kirby](https://getkirby.com/) - A flat-file CMS that adapts to any project.
* [Magento](https://business.adobe.com/products/magento/magento-commerce.html) - The most popular ecommerce platform.
* [Moodle](https://moodle.org/) - An open-source learning platform.
* [Pico CMS](https://picocms.org/) - A stupidly simple, blazing fast, flat file CMS.
* [Statamic](https://statamic.com/) - Build beautiful, easy to manage websites.
* [WordPress](https://wordpress.org/) - A blogging platform and CMS.

### Components
*Standalone components from web development frameworks and development groups.*

* [Aura](https://auraphp.com/) - Independent components, fully decoupled from each other and from any framework.
* [CakePHP Plugins](https://plugins.cakephp.org/) - A directory of CakePHP plugins.
* [Laravel Components](https://github.com/illuminate) - The Laravel Framework components.
* [League of Extraordinary Packages](https://thephpleague.com/) - A PHP package development group.
* [Spatie Open Source](https://spatie.be/open-source) - A collection of open source PHP and Laravel packages.
* [Symfony Components](https://symfony.com/components) - The components that make Symfony.
* [Laminas Components](https://docs.laminas.dev/components/) - The components that make the Laminas Framework.

### Micro Frameworks
*Micro frameworks and routers.*

* [Laravel-Zero](https://laravel-zero.com) - A micro-framework for console applications.
* [Lumen](https://lumen.laravel.com/) - A micro-framework by Laravel.
* [Mezzio](https://getexpressive.org/) - A micro-framework by Laminas.
* [Radar ![GitHub Repo Stars](https://img.shields.io/github/stars/radarphp/Radar.Adr) ![GitHub last commit](https://img.shields.io/github/last-commit/radarphp/Radar.Adr)](https://github.com/radarphp/Radar.Adr) - An Action-Domain-Responder implementation for PHP.
* [Silly ![GitHub Repo Stars](https://img.shields.io/github/stars/mnapoli/silly) ![GitHub last commit](https://img.shields.io/github/last-commit/mnapoli/silly)](https://github.com/mnapoli/silly) - A micro-framework for CLI applications.
* [Slim](https://www.slimframework.com/) - Another simple micro framework.

### Micro Framework Extras
*Extras related to micro frameworks and routers.*

* [Slim Skeleton ![GitHub Repo Stars](https://img.shields.io/github/stars/slimphp/Slim-Skeleton) ![GitHub last commit](https://img.shields.io/github/last-commit/slimphp/Slim-Skeleton)](https://github.com/slimphp/Slim-Skeleton) - A skeleton for Slim.
* [Slim Twig View ![GitHub Repo Stars](https://img.shields.io/github/stars/slimphp/Slim-Views) ![GitHub last commit](https://img.shields.io/github/last-commit/slimphp/Slim-Views)](https://github.com/slimphp/Slim-Views) - Integrate Twig into Slim.
* [Slim PHP View ![GitHub Repo Stars](https://img.shields.io/github/stars/slimphp/PHP-View) ![GitHub last commit](https://img.shields.io/github/last-commit/slimphp/PHP-View)](https://github.com/slimphp/PHP-View) - A simple PHP renderer for Slim.

### Routers
*Libraries for handling application routing.*

* [Aura.Router ![GitHub Repo Stars](https://img.shields.io/github/stars/auraphp/Aura.Router) ![GitHub last commit](https://img.shields.io/github/last-commit/auraphp/Aura.Router)](https://github.com/auraphp/Aura.Router) - A full-featured routing library.
* [Fast Route ![GitHub Repo Stars](https://img.shields.io/github/stars/nikic/FastRoute) ![GitHub last commit](https://img.shields.io/github/last-commit/nikic/FastRoute)](https://github.com/nikic/FastRoute) - A fast routing library.
* [Klein ![GitHub Repo Stars](https://img.shields.io/github/stars/klein/klein.php) ![GitHub last commit](https://img.shields.io/github/last-commit/klein/klein.php)](https://github.com/klein/klein.php) - A flexible router.
* [Pux ![GitHub Repo Stars](https://img.shields.io/github/stars/c9s/Pux) ![GitHub last commit](https://img.shields.io/github/last-commit/c9s/Pux)](https://github.com/c9s/Pux) - Another fast routing library.
* [Route ![GitHub Repo Stars](https://img.shields.io/github/stars/thephpleague/route) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/route)](https://github.com/thephpleague/route) - A routing library built on top of Fast Route.

### Templating
*Libraries and tools for templating and lexing.*

* [Latte](https://latte.nette.org/) - The safest and truly intuitive templates for PHP.
* [MtHaml ![GitHub Repo Stars](https://img.shields.io/github/stars/arnaud-lb/MtHaml) ![GitHub last commit](https://img.shields.io/github/last-commit/arnaud-lb/MtHaml)](https://github.com/arnaud-lb/MtHaml) - A PHP implementation of the HAML template language.
* [Mustache ![GitHub Repo Stars](https://img.shields.io/github/stars/bobthecow/mustache.php) ![GitHub last commit](https://img.shields.io/github/last-commit/bobthecow/mustache.php)](https://github.com/bobthecow/mustache.php) - A PHP implementation of the Mustache template language.
* [PHPTAL](https://phptal.org/) - A PHP implementation of the [TAL](https://en.wikipedia.org/wiki/Template_Attribute_Language) templating language.
* [Plates](http://platesphp.com/) - A native PHP templating library.
* [Smarty](https://www.smarty.net/) - A template engine to complement PHP.
* [Twig](https://twig.symfony.com/) - A comprehensive templating language.

### Static Site Generators
*Tools for pre-processing content to generate web pages.*

* [Couscous](http://couscous.io) - Couscous turns Markdown documentation into beautiful websites. It's GitHub Pages on steroids.
* [Jigsaw](https://jigsaw.tighten.com/) - Simple static sites with Laravel's Blade.
* [Sculpin](https://sculpin.io) - A tool that converts Markdown and Twig into static HTML.
* [Spress](http://spress.yosymfony.com) - An extensible tool that converts Markdown and Twig into HTML.

### HTTP
*Libraries for working with HTTP.*

* [Buzz ![GitHub Repo Stars](https://img.shields.io/github/stars/kriswallsmith/Buzz) ![GitHub last commit](https://img.shields.io/github/last-commit/kriswallsmith/Buzz)](https://github.com/kriswallsmith/Buzz) - Another HTTP client.
* [Guzzle]( https://github.com/guzzle/guzzle) - A comprehensive HTTP client.
* [HTTPlug](http://httplug.io) - An HTTP client abstraction without binding to a specific implementation.
* [Nyholm PSR-7 ![GitHub Repo Stars](https://img.shields.io/github/stars/Nyholm/psr7) ![GitHub last commit](https://img.shields.io/github/last-commit/Nyholm/psr7)](https://github.com/Nyholm/psr7) - A super lightweight PSR-7 implementation. Very strict and very fast.
* [PHP VCR](https://php-vcr.github.io/) - A library for recording and replaying HTTP requests.
* [Requests ![GitHub Repo Stars](https://img.shields.io/github/stars/WordPress/Requests) ![GitHub last commit](https://img.shields.io/github/last-commit/WordPress/Requests)](https://github.com/WordPress/Requests) - A simple HTTP library.
* [Retrofit ![GitHub Repo Stars](https://img.shields.io/github/stars/tebru/retrofit-php) ![GitHub last commit](https://img.shields.io/github/last-commit/tebru/retrofit-php)](https://github.com/tebru/retrofit-php) - A library to ease creation of REST API clients.
* [Symfony HTTP Client ![GitHub Repo Stars](https://img.shields.io/github/stars/symfony/http-client) ![GitHub last commit](https://img.shields.io/github/last-commit/symfony/http-client)](https://github.com/symfony/http-client) - A component to fetch HTTP resources synchronously or asynchronously.
* [Laminas Diactoros ![GitHub Repo Stars](https://img.shields.io/github/stars/laminas/laminas-diactoros) ![GitHub last commit](https://img.shields.io/github/last-commit/laminas/laminas-diactoros)](https://github.com/laminas/laminas-diactoros) - PSR-7 HTTP Message implementation.

### Scraping
*Libraries for scraping websites.*

* [Chrome PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/chrome-php/chrome) ![GitHub last commit](https://img.shields.io/github/last-commit/chrome-php/chrome)](https://github.com/chrome-php/chrome) - Instrument headless Chrome/Chromium instances from PHP. 
* [DiDOM ![GitHub Repo Stars](https://img.shields.io/github/stars/Imangazaliev/DiDOM) ![GitHub last commit](https://img.shields.io/github/last-commit/Imangazaliev/DiDOM)](https://github.com/Imangazaliev/DiDOM) - A super fast HTML scrapper and parser.
* [Embed ![GitHub Repo Stars](https://img.shields.io/github/stars/oscarotero/Embed) ![GitHub last commit](https://img.shields.io/github/last-commit/oscarotero/Embed)](https://github.com/oscarotero/Embed) - An information extractor from any web service or page.
* [Goutte ![GitHub Repo Stars](https://img.shields.io/github/stars/FriendsOfPHP/Goutte) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfPHP/Goutte)](https://github.com/FriendsOfPHP/Goutte) - A simple web scraper.
* [Symfony Panther ![GitHub Repo Stars](https://img.shields.io/github/stars/symfony/panther) ![GitHub last commit](https://img.shields.io/github/last-commit/symfony/panther)](https://github.com/symfony/panther) - A browser testing and web crawling library for PHP and Symfony.
* [PHP Spider ![GitHub Repo Stars](https://img.shields.io/github/stars/mvdbos/php-spider) ![GitHub last commit](https://img.shields.io/github/last-commit/mvdbos/php-spider)](https://github.com/mvdbos/php-spider) - A configurable and extensible PHP web spider.

### Middlewares
*Libraries for building application using middlewares.*

* [PSR-7 Middlewares ![GitHub Repo Stars](https://img.shields.io/github/stars/oscarotero/psr7-middlewares) ![GitHub last commit](https://img.shields.io/github/last-commit/oscarotero/psr7-middlewares)](https://github.com/oscarotero/psr7-middlewares) - Inspiring collection of handy middlewares.
* [Relay ![GitHub Repo Stars](https://img.shields.io/github/stars/relayphp/Relay.Relay) ![GitHub last commit](https://img.shields.io/github/last-commit/relayphp/Relay.Relay)](https://github.com/relayphp/Relay.Relay) - A PHP 5.5 PSR-7 middleware dispatcher.
* [Stack](https://github.com/stackphp) - A library of stackable middleware for Symfony.
* [Laminas Stratigility ![GitHub Repo Stars](https://img.shields.io/github/stars/laminas/laminas-stratigility) ![GitHub last commit](https://img.shields.io/github/last-commit/laminas/laminas-stratigility)](https://github.com/laminas/laminas-stratigility) - Middleware for PHP built on top of PSR-7.

### URL
*Libraries for parsing URLs.*

* [PHP Domain Parser ![GitHub Repo Stars](https://img.shields.io/github/stars/jeremykendall/php-domain-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/jeremykendall/php-domain-parser)](https://github.com/jeremykendall/php-domain-parser) - A domain suffix parser library.
* [Purl ![GitHub Repo Stars](https://img.shields.io/github/stars/jwage/purl) ![GitHub last commit](https://img.shields.io/github/last-commit/jwage/purl)](https://github.com/jwage/purl) - A URL manipulation library.
* [sabre/uri ![GitHub Repo Stars](https://img.shields.io/github/stars/sabre-io/uri) ![GitHub last commit](https://img.shields.io/github/last-commit/sabre-io/uri)](https://github.com/sabre-io/uri) - A functional URI manipulation library.
* [Uri ![GitHub Repo Stars](https://img.shields.io/github/stars/thephpleague/uri) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/uri)](https://github.com/thephpleague/uri) - Another URL manipulation library.

### Email
*Libraries for sending and parsing email.*

* [CssToInlineStyles ![GitHub Repo Stars](https://img.shields.io/github/stars/tijsverkoyen/CssToInlineStyles) ![GitHub last commit](https://img.shields.io/github/last-commit/tijsverkoyen/CssToInlineStyles)](https://github.com/tijsverkoyen/CssToInlineStyles) - A library to inline CSS in email templates.
* [Email Reply Parser ![GitHub Repo Stars](https://img.shields.io/github/stars/willdurand/EmailReplyParser) ![GitHub last commit](https://img.shields.io/github/last-commit/willdurand/EmailReplyParser)](https://github.com/willdurand/EmailReplyParser) - An email reply parser library.
* [Email Validator ![GitHub Repo Stars](https://img.shields.io/github/stars/nojacko/email-validator) ![GitHub last commit](https://img.shields.io/github/last-commit/nojacko/email-validator)](https://github.com/nojacko/email-validator) - A small email address validation library.
* [Fetch ![GitHub Repo Stars](https://img.shields.io/github/stars/tedious/Fetch) ![GitHub last commit](https://img.shields.io/github/last-commit/tedious/Fetch)](https://github.com/tedious/Fetch) - An IMAP library.
* [Mautic ![GitHub Repo Stars](https://img.shields.io/github/stars/mautic/mautic) ![GitHub last commit](https://img.shields.io/github/last-commit/mautic/mautic)](https://github.com/mautic/mautic) - Email marketing automation
* [PHPMailer ![GitHub Repo Stars](https://img.shields.io/github/stars/PHPMailer/PHPMailer) ![GitHub last commit](https://img.shields.io/github/last-commit/PHPMailer/PHPMailer)](https://github.com/PHPMailer/PHPMailer) - Another mailer solution.
* [PHP IMAP ![GitHub Repo Stars](https://img.shields.io/github/stars/barbushin/php-imap) ![GitHub last commit](https://img.shields.io/github/last-commit/barbushin/php-imap)](https://github.com/barbushin/php-imap) - A library to access mailboxes via POP3, IMAP and NNTP.
* [Stampie ![GitHub Repo Stars](https://img.shields.io/github/stars/Stampie/Stampie) ![GitHub last commit](https://img.shields.io/github/last-commit/Stampie/Stampie)](https://github.com/Stampie/Stampie) - A library for email services such as [SendGrid](https://sendgrid.com/), [PostMark](https://postmarkapp.com), [MailGun](https://www.mailgun.com/) and [MailChimp](https://mailchimp.com/features/transactional-email/).
* [SwiftMailer](https://swiftmailer.symfony.com) - A mailer solution.
* [Symfony Mailer ![GitHub Repo Stars](https://img.shields.io/github/stars/symfony/mailer) ![GitHub last commit](https://img.shields.io/github/last-commit/symfony/mailer)](https://github.com/symfony/mailer) - A powerful library for creating and sending emails.

### Files
*Libraries for file manipulation and MIME type detection.*

* [CSV ![GitHub Repo Stars](https://img.shields.io/github/stars/thephpleague/csv) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/csv)](https://github.com/thephpleague/csv) - A CSV data manipulation library.
* [Flysystem ![GitHub Repo Stars](https://img.shields.io/github/stars/thephpleague/Flysystem) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/Flysystem)](https://github.com/thephpleague/Flysystem) - Abstraction for local and remote filesystems.
* [Gaufrette ![GitHub Repo Stars](https://img.shields.io/github/stars/KnpLabs/Gaufrette) ![GitHub last commit](https://img.shields.io/github/last-commit/KnpLabs/Gaufrette)](https://github.com/KnpLabs/Gaufrette) - A filesystem abstraction layer.
* [PHP FFmpeg ![GitHub Repo Stars](https://img.shields.io/github/stars/PHP-FFmpeg/PHP-FFmpeg) ![GitHub last commit](https://img.shields.io/github/last-commit/PHP-FFmpeg/PHP-FFmpeg)](https://github.com/PHP-FFmpeg/PHP-FFmpeg/) - A wrapper for the [FFmpeg](https://www.ffmpeg.org/) video library.
* [UnifiedArchive ![GitHub Repo Stars](https://img.shields.io/github/stars/wapmorgan/UnifiedArchive) ![GitHub last commit](https://img.shields.io/github/last-commit/wapmorgan/UnifiedArchive)](https://github.com/wapmorgan/UnifiedArchive) - A unified reader and writer of compressed archives.

### Streams
*Libraries for working with streams.*

* [ByteStream](https://amphp.org/byte-stream/) - An asynchronous stream abstraction.
* [Streamer ![GitHub Repo Stars](https://img.shields.io/github/stars/fzaninotto/Streamer) ![GitHub last commit](https://img.shields.io/github/last-commit/fzaninotto/Streamer)](https://github.com/fzaninotto/Streamer) - A simple object-orientated stream wrapper library.

### Dependency Injection
*Libraries that implement the dependency injection design pattern.*

* [Aura.Di ![GitHub Repo Stars](https://img.shields.io/github/stars/auraphp/Aura.Di) ![GitHub last commit](https://img.shields.io/github/last-commit/auraphp/Aura.Di)](https://github.com/auraphp/Aura.Di) - A serializable dependency injection container with constructor and setter injection, interface and trait awareness, configuration inheritance, and much more.
* [Acclimate ![GitHub Repo Stars](https://img.shields.io/github/stars/AcclimateContainer/acclimate-container) ![GitHub last commit](https://img.shields.io/github/last-commit/AcclimateContainer/acclimate-container)](https://github.com/AcclimateContainer/acclimate-container) - A common interface to dependency injection containers and service locators.
* [Auryn ![GitHub Repo Stars](https://img.shields.io/github/stars/rdlowrey/Auryn) ![GitHub last commit](https://img.shields.io/github/last-commit/rdlowrey/Auryn)](https://github.com/rdlowrey/Auryn) - A recursive dependency injector.
* [Container ![GitHub Repo Stars](https://img.shields.io/github/stars/thephpleague/container) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/container)](https://github.com/thephpleague/container) - Another flexible dependency injection container.
* [Disco ![GitHub Repo Stars](https://img.shields.io/github/stars/bitExpert/disco) ![GitHub last commit](https://img.shields.io/github/last-commit/bitExpert/disco)](https://github.com/bitExpert/disco) - A PSR-11 compatible, annotation-based dependency injection container.
* [PHP-DI](https://php-di.org/) - A dependency injection container that supports autowiring.
* [Pimple](https://pimple.symfony.com/) - A tiny dependency injection container.
* [Symfony DI ![GitHub Repo Stars](https://img.shields.io/github/stars/symfony/dependency-injection) ![GitHub last commit](https://img.shields.io/github/last-commit/symfony/dependency-injection)](https://github.com/symfony/dependency-injection) - A dependency injection container component.

### Imagery
*Libraries for manipulating images.*

* [Color Extractor ![GitHub Repo Stars](https://img.shields.io/github/stars/thephpleague/color-extractor) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/color-extractor)](https://github.com/thephpleague/color-extractor) - A library for extracting colours from images.
* [Glide ![GitHub Repo Stars](https://img.shields.io/github/stars/thephpleague/glide) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/glide)](https://github.com/thephpleague/glide) - An on-demand image manipulation library.
* [Image Hash ![GitHub Repo Stars](https://img.shields.io/github/stars/jenssegers/imagehash) ![GitHub last commit](https://img.shields.io/github/last-commit/jenssegers/imagehash)](https://github.com/jenssegers/imagehash) - A library for generating perceptual image hashes.
* [Image Optimizer ![GitHub Repo Stars](https://img.shields.io/github/stars/psliwa/image-optimizer) ![GitHub last commit](https://img.shields.io/github/last-commit/psliwa/image-optimizer)](https://github.com/psliwa/image-optimizer) - A library for optimizing images.
* [Imagine](https://imagine.readthedocs.io/en/latest/index.html) - An image manipulation library.
* [Intervention Image ![GitHub Repo Stars](https://img.shields.io/github/stars/Intervention/image) ![GitHub last commit](https://img.shields.io/github/last-commit/Intervention/image)](https://github.com/Intervention/image) - Another image manipulation library.
* [PHP Image Workshop ![GitHub Repo Stars](https://img.shields.io/github/stars/Sybio/ImageWorkshop) ![GitHub last commit](https://img.shields.io/github/last-commit/Sybio/ImageWorkshop)](https://github.com/Sybio/ImageWorkshop) - Another image manipulation library.

### Testing
*Libraries for testing codebases and generating test data.*

* [Alice ![GitHub Repo Stars](https://img.shields.io/github/stars/nelmio/alice) ![GitHub last commit](https://img.shields.io/github/last-commit/nelmio/alice)](https://github.com/nelmio/alice) - An expressive fixture generation library.
* [AspectMock ![GitHub Repo Stars](https://img.shields.io/github/stars/Codeception/AspectMock) ![GitHub last commit](https://img.shields.io/github/last-commit/Codeception/AspectMock)](https://github.com/Codeception/AspectMock) - A mocking framework for PHPUnit/Codeception.
* [Atoum ![GitHub Repo Stars](https://img.shields.io/github/stars/atoum/atoum) ![GitHub last commit](https://img.shields.io/github/last-commit/atoum/atoum)](https://github.com/atoum/atoum) - A simple testing library.
* [Behat](https://docs.behat.org/en/latest/) - A behaviour driven development (BDD) testing framework.
* [Codeception ![GitHub Repo Stars](https://img.shields.io/github/stars/Codeception/Codeception) ![GitHub last commit](https://img.shields.io/github/last-commit/Codeception/Codeception)](https://github.com/Codeception/Codeception) - A full stack testing framework.
* [Faker ![GitHub Repo Stars](https://img.shields.io/github/stars/fakerphp/faker) ![GitHub last commit](https://img.shields.io/github/last-commit/fakerphp/faker)](https://github.com/fakerphp/faker) - A fake data generator library.
* [Foundry ![GitHub Repo Stars](https://img.shields.io/github/stars/zenstruck/foundry) ![GitHub last commit](https://img.shields.io/github/last-commit/zenstruck/foundry)](https://github.com/zenstruck/foundry) - A fixture factory generation library for Doctrine.
* [HTTP Mock ![GitHub Repo Stars](https://img.shields.io/github/stars/InterNations/http-mock) ![GitHub last commit](https://img.shields.io/github/last-commit/InterNations/http-mock)](https://github.com/InterNations/http-mock) - A library for mocking HTTP requests in unit tests.
* [Infection ![GitHub Repo Stars](https://img.shields.io/github/stars/infection/infection) ![GitHub last commit](https://img.shields.io/github/last-commit/infection/infection)](https://github.com/infection/infection) - An AST-based PHP Mutation testing framework.
* [Kahlan ![GitHub Repo Stars](https://img.shields.io/github/stars/kahlan/kahlan) ![GitHub last commit](https://img.shields.io/github/last-commit/kahlan/kahlan)](https://github.com/kahlan/kahlan) - Full stack Unit/BDD testing framework with built-in stub, mock and code-coverage support.
* [Mink](https://mink.behat.org/en/latest/) - Web acceptance testing.
* [Mockery ![GitHub Repo Stars](https://img.shields.io/github/stars/mockery/mockery) ![GitHub last commit](https://img.shields.io/github/last-commit/mockery/mockery)](https://github.com/mockery/mockery) - A mock object library for testing.
* [ParaTest ![GitHub Repo Stars](https://img.shields.io/github/stars/paratestphp/paratest) ![GitHub last commit](https://img.shields.io/github/last-commit/paratestphp/paratest)](https://github.com/paratestphp/paratest) - A parallel testing library for PHPUnit.
* [Pest](https://pestphp.com/) - A testing framework with a focus on simplicity.
* [Peridot ![GitHub Repo Stars](https://img.shields.io/github/stars/peridot-php/peridot) ![GitHub last commit](https://img.shields.io/github/last-commit/peridot-php/peridot)](https://github.com/peridot-php/peridot) - An event driven test framework.
* [Phake ![GitHub Repo Stars](https://img.shields.io/github/stars/phake/phake) ![GitHub last commit](https://img.shields.io/github/last-commit/phake/phake)](https://github.com/phake/phake) - Another mock object library for testing.
* [Pho ![GitHub Repo Stars](https://img.shields.io/github/stars/danielstjules/pho) ![GitHub last commit](https://img.shields.io/github/last-commit/danielstjules/pho)](https://github.com/danielstjules/pho) - Another behaviour driven development testing framework.
* [PHP-Mock ![GitHub Repo Stars](https://img.shields.io/github/stars/php-mock/php-mock) ![GitHub last commit](https://img.shields.io/github/last-commit/php-mock/php-mock)](https://github.com/php-mock/php-mock) - A mock library for built-in PHP functions (e.g. time()).
* [PHP MySQL Engine ![GitHub Repo Stars](https://img.shields.io/github/stars/vimeo/php-mysql-engine) ![GitHub last commit](https://img.shields.io/github/last-commit/vimeo/php-mysql-engine)](https://github.com/vimeo/php-mysql-engine) -  A MySQL engine written in pure PHP. 
* [PHPSpec ![GitHub Repo Stars](https://img.shields.io/github/stars/phpspec/phpspec) ![GitHub last commit](https://img.shields.io/github/last-commit/phpspec/phpspec)](https://github.com/phpspec/phpspec) - A design by specification unit testing library.
* [PHPT](https://qa.php.net/write-test.php) - A test tool used by PHP itself.
* [PHPUnit ![GitHub Repo Stars](https://img.shields.io/github/stars/sebastianbergmann/phpunit) ![GitHub last commit](https://img.shields.io/github/last-commit/sebastianbergmann/phpunit)](https://github.com/sebastianbergmann/phpunit) - A unit testing framework.
* [Prophecy ![GitHub Repo Stars](https://img.shields.io/github/stars/phpspec/prophecy) ![GitHub last commit](https://img.shields.io/github/last-commit/phpspec/prophecy)](https://github.com/phpspec/prophecy) - A highly opinionated mocking framework.
* [VFS Stream ![GitHub Repo Stars](https://img.shields.io/github/stars/bovigo/vfsStream) ![GitHub last commit](https://img.shields.io/github/last-commit/bovigo/vfsStream)](https://github.com/bovigo/vfsStream) - A virtual filesystem stream wrapper for testing.

### Continuous Integration
*Libraries and applications for continuous integration.*

* [CircleCI](https://circleci.com) - A continuous integration platform.
* [GitlabCi](https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/) - Let GitLab CI test, build, deploy your code. TravisCi like.
* [Jenkins](https://www.jenkins.io/) - A continuous integration platform with [PHP support](https://www.jenkins.io/solutions/php/).
* [JoliCi ![GitHub Repo Stars](https://img.shields.io/github/stars/jolicode/JoliCi) ![GitHub last commit](https://img.shields.io/github/last-commit/jolicode/JoliCi)](https://github.com/jolicode/JoliCi) - A continuous integration client written in PHP and powered by Docker.
* [PHPCI ![GitHub Repo Stars](https://img.shields.io/github/stars/dancryer/phpci) ![GitHub last commit](https://img.shields.io/github/last-commit/dancryer/phpci)](https://github.com/dancryer/phpci) - An open source continuous integration platform for PHP.
* [SemaphoreCI](https://semaphoreci.com/) - A continuous integration platform for open source and private projects.
* [Shippable](https://jfrog.com/blog/weve-acquired-shippable-to-complete-devops-pipeline-automation-from-code-to-production/) - A Docker based continious integration platform for open source and private projects.
* [Travis CI](https://travis-ci.org/) - A continuous integration platform.
* [Setup PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/shivammathur/setup-php) ![GitHub last commit](https://img.shields.io/github/last-commit/shivammathur/setup-php)](https://github.com/shivammathur/setup-php) - A GitHub Action for PHP.

### Documentation
*Libraries for generating project documentation.*

* [APIGen ![GitHub Repo Stars](https://img.shields.io/github/stars/apigen/apigen) ![GitHub last commit](https://img.shields.io/github/last-commit/apigen/apigen)](https://github.com/apigen/apigen) - Another API documentation generator.
* [daux.io ![GitHub Repo Stars](https://img.shields.io/github/stars/dauxio/daux.io) ![GitHub last commit](https://img.shields.io/github/last-commit/dauxio/daux.io)](https://github.com/dauxio/daux.io) - A documentation generator which uses Markdown files.
* [PHP Documentor 2 ![GitHub Repo Stars](https://img.shields.io/github/stars/phpDocumentor/phpDocumentor) ![GitHub last commit](https://img.shields.io/github/last-commit/phpDocumentor/phpDocumentor)](https://github.com/phpDocumentor/phpDocumentor) - A documentation generator.
* [phpDox](https://phpdox.net/) - A documentation generator for PHP projects (that is not limited to API documentation).
* [zircote/swagger-php ![GitHub Repo Stars](https://img.shields.io/github/stars/zircote/swagger-php) ![GitHub last commit](https://img.shields.io/github/last-commit/zircote/swagger-php)](https://github.com/zircote/swagger-php) - Generate OpenAPI documentation for your RESTful API.

### Security
*Libraries for generating secure random numbers, encrypting data and scanning and testing for vulnerabilities.*

* [Halite](https://paragonie.com/project/halite) - A simple library for encryption using [libsodium ![GitHub Repo Stars](https://img.shields.io/github/stars/jedisct1/libsodium) ![GitHub last commit](https://img.shields.io/github/last-commit/jedisct1/libsodium)](https://github.com/jedisct1/libsodium).
* [HTML Purifier ![GitHub Repo Stars](https://img.shields.io/github/stars/ezyang/htmlpurifier) ![GitHub last commit](https://img.shields.io/github/last-commit/ezyang/htmlpurifier)](https://github.com/ezyang/htmlpurifier) - A standards compliant HTML filter.
* [IniScan ![GitHub Repo Stars](https://img.shields.io/github/stars/psecio/iniscan) ![GitHub last commit](https://img.shields.io/github/last-commit/psecio/iniscan)](https://github.com/psecio/iniscan) - A tool that scans PHP INI files for security.
* [Optimus ![GitHub Repo Stars](https://img.shields.io/github/stars/jenssegers/optimus) ![GitHub last commit](https://img.shields.io/github/last-commit/jenssegers/optimus)](https://github.com/jenssegers/optimus) - Id obfuscation based on Knuth's multiplicative hashing method.
* [PHPGGC ![GitHub Repo Stars](https://img.shields.io/github/stars/ambionics/phpggc) ![GitHub last commit](https://img.shields.io/github/last-commit/ambionics/phpggc)](https://github.com/ambionics/phpggc) - A library of PHP unserializable payloads along with a tool to generate them.
* [PHP Encryption ![GitHub Repo Stars](https://img.shields.io/github/stars/defuse/php-encryption) ![GitHub last commit](https://img.shields.io/github/last-commit/defuse/php-encryption)](https://github.com/defuse/php-encryption) - Secure PHP Encryption Library.
* [PHP SSH ![GitHub Repo Stars](https://img.shields.io/github/stars/Herzult/php-ssh) ![GitHub last commit](https://img.shields.io/github/last-commit/Herzult/php-ssh)](https://github.com/Herzult/php-ssh) - An experimental object orientated SSH wrapper library.
* [PHPSecLib](http://phpseclib.sourceforge.net/) - A pure PHP secure communications library.
* [random_compat ![GitHub Repo Stars](https://img.shields.io/github/stars/paragonie/random_compat) ![GitHub last commit](https://img.shields.io/github/last-commit/paragonie/random_compat)](https://github.com/paragonie/random_compat) - PHP 5.x support for `random_bytes()` and `random_int()`
* [RandomLib ![GitHub Repo Stars](https://img.shields.io/github/stars/ircmaxell/RandomLib) ![GitHub last commit](https://img.shields.io/github/last-commit/ircmaxell/RandomLib)](https://github.com/ircmaxell/RandomLib) - A library for generating random numbers and strings.
* [Symfony Security Monitoring](https://security.symfony.com/) - A web tool to check your Composer dependencies for security advisories, previously known as "SensioLabs Security Check".
* [SQLMap ![GitHub Repo Stars](https://img.shields.io/github/stars/sqlmapproject/sqlmap) ![GitHub last commit](https://img.shields.io/github/last-commit/sqlmapproject/sqlmap)](https://github.com/sqlmapproject/sqlmap) - An automatic SQL injection and database takeover tool. 
* [TCrypto ![GitHub Repo Stars](https://img.shields.io/github/stars/timoh6/TCrypto) ![GitHub last commit](https://img.shields.io/github/last-commit/timoh6/TCrypto)](https://github.com/timoh6/TCrypto) - A simple encrypted key-value storage library.
* [VAddy](https://vaddy.net/) - A continuous security testing platform for web applications.
* [Zap](https://owasp.org/www-project-zap/) - An integrated penetration testing tool for web applications.

### Passwords
*Libraries and tools for working with and storing passwords.*

* [GenPhrase ![GitHub Repo Stars](https://img.shields.io/github/stars/timoh6/GenPhrase) ![GitHub last commit](https://img.shields.io/github/last-commit/timoh6/GenPhrase)](https://github.com/timoh6/GenPhrase) - A library for generating secure random passphrases.
* [Password Compat ![GitHub Repo Stars](https://img.shields.io/github/stars/ircmaxell/password_compat) ![GitHub last commit](https://img.shields.io/github/last-commit/ircmaxell/password_compat)](https://github.com/ircmaxell/password_compat) - A compatibility library for the new PHP 5.5 password functions.
* [Password Policy ![GitHub Repo Stars](https://img.shields.io/github/stars/ircmaxell/password-policy) ![GitHub last commit](https://img.shields.io/github/last-commit/ircmaxell/password-policy)](https://github.com/ircmaxell/password-policy) - A password policy library for PHP and JavaScript.
* [Password Validator ![GitHub Repo Stars](https://img.shields.io/github/stars/jeremykendall/password-validator) ![GitHub last commit](https://img.shields.io/github/last-commit/jeremykendall/password-validator)](https://github.com/jeremykendall/password-validator) - A library for validating and upgrading password hashes.
* [Password-Generator ![GitHub Repo Stars](https://img.shields.io/github/stars/hackzilla/password-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/hackzilla/password-generator)](https://github.com/hackzilla/password-generator) - PHP library to generate random passwords.
* [PHP Password Lib ![GitHub Repo Stars](https://img.shields.io/github/stars/ircmaxell/PHP-PasswordLib) ![GitHub last commit](https://img.shields.io/github/last-commit/ircmaxell/PHP-PasswordLib)](https://github.com/ircmaxell/PHP-PasswordLib) - A library for generating and validating passwords.
* [phpass](https://www.openwall.com/phpass/) - A portable password hashing framework.
* [Zxcvbn PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/bjeavons/zxcvbn-php) ![GitHub last commit](https://img.shields.io/github/last-commit/bjeavons/zxcvbn-php)](https://github.com/bjeavons/zxcvbn-php) - A realistic PHP password strength estimate library based on Zxcvbn JS.

### Code Analysis
*Libraries and tools for analysing, parsing and manipulating codebases.*

* [Better Reflection ![GitHub Repo Stars](https://img.shields.io/github/stars/Roave/BetterReflection) ![GitHub last commit](https://img.shields.io/github/last-commit/Roave/BetterReflection)](https://github.com/Roave/BetterReflection) - AST-based reflection library that allows analysis and manipulation of code
* [Code Climate](https://codeclimate.com) - An automated code review.
* [GrumPHP ![GitHub Repo Stars](https://img.shields.io/github/stars/phpro/grumphp) ![GitHub last commit](https://img.shields.io/github/last-commit/phpro/grumphp)](https://github.com/phpro/grumphp) - A PHP code-quality tool.
* [PHP Parser ![GitHub Repo Stars](https://img.shields.io/github/stars/nikic/PHP-Parser) ![GitHub last commit](https://img.shields.io/github/last-commit/nikic/PHP-Parser)](https://github.com/nikic/PHP-Parser) - A PHP parser written in PHP.
* [PHP Semantic Versioning Checker ![GitHub Repo Stars](https://img.shields.io/github/stars/tomzx/php-semver-checker) ![GitHub last commit](https://img.shields.io/github/last-commit/tomzx/php-semver-checker)](https://github.com/tomzx/php-semver-checker) - A command line utility that compares two source sets and determines the appropriate semantic versioning to apply.
* [Phpactor ![GitHub Repo Stars](https://img.shields.io/github/stars/phpactor/phpactor) ![GitHub last commit](https://img.shields.io/github/last-commit/phpactor/phpactor)](https://github.com/phpactor/phpactor) - PHP completion, refactoring and introspection tool.
* [PHPLOC ![GitHub Repo Stars](https://img.shields.io/github/stars/sebastianbergmann/phploc) ![GitHub last commit](https://img.shields.io/github/last-commit/sebastianbergmann/phploc)](https://github.com/sebastianbergmann/phploc) - A tool for quickly measuring the size of a PHP project.
* [PHPQA ![GitHub Repo Stars](https://img.shields.io/github/stars/EdgedesignCZ/phpqa) ![GitHub last commit](https://img.shields.io/github/last-commit/EdgedesignCZ/phpqa)](https://github.com/EdgedesignCZ/phpqa) - A tool for running QA tools (phploc, phpcpd, phpcs, pdepend, phpmd, phpmetrics).
* [Qafoo Quality Analyzer ![GitHub Repo Stars](https://img.shields.io/github/stars/Qafoo/QualityAnalyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/Qafoo/QualityAnalyzer)](https://github.com/Qafoo/QualityAnalyzer) - A tool to visualize metrics and source code.
* [Rector ![GitHub Repo Stars](https://img.shields.io/github/stars/rectorphp/rector) ![GitHub last commit](https://img.shields.io/github/last-commit/rectorphp/rector)](https://github.com/rectorphp/rector) - A tool to upgrade and refactor code.
* [Scrutinizer](https://scrutinizer-ci.com/) - A web tool to [scrutinise PHP code ![GitHub Repo Stars](https://img.shields.io/github/stars/scrutinizer-ci/php-analyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/scrutinizer-ci/php-analyzer)](https://github.com/scrutinizer-ci/php-analyzer).
* [UBench ![GitHub Repo Stars](https://img.shields.io/github/stars/devster/ubench) ![GitHub last commit](https://img.shields.io/github/last-commit/devster/ubench)](https://github.com/devster/ubench) - A simple micro benchmark library.

### Code Quality
*Libraries for managing code quality, formatting and linting.*

* [CaptainHook ![GitHub Repo Stars](https://img.shields.io/github/stars/captainhookphp/captainhook) ![GitHub last commit](https://img.shields.io/github/last-commit/captainhookphp/captainhook)](https://github.com/captainhookphp/captainhook) - An easy-to-use and flexible Git hook library. 
* [PHP CodeSniffer ![GitHub Repo Stars](https://img.shields.io/github/stars/squizlabs/PHP_CodeSniffer) ![GitHub last commit](https://img.shields.io/github/last-commit/squizlabs/PHP_CodeSniffer)](https://github.com/squizlabs/PHP_CodeSniffer) - A library that detects PHP, CSS and JS coding standard violations.
* [PHP CS Fixer ![GitHub Repo Stars](https://img.shields.io/github/stars/FriendsOfPHP/PHP-CS-Fixer) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfPHP/PHP-CS-Fixer)](https://github.com/FriendsOfPHP/PHP-CS-Fixer) - A coding standards fixer library.
* [PHP Mess Detector ![GitHub Repo Stars](https://img.shields.io/github/stars/phpmd/phpmd) ![GitHub last commit](https://img.shields.io/github/last-commit/phpmd/phpmd)](https://github.com/phpmd/phpmd) - A library that scans code for bugs, sub-optimal code, unused parameters and more.
* [PHPCheckstyle ![GitHub Repo Stars](https://img.shields.io/github/stars/PHPCheckstyle/phpcheckstyle) ![GitHub last commit](https://img.shields.io/github/last-commit/PHPCheckstyle/phpcheckstyle)](https://github.com/PHPCheckstyle/phpcheckstyle) - A tool to help adhere to certain coding conventions.
* [PHPCPD ![GitHub Repo Stars](https://img.shields.io/github/stars/sebastianbergmann/phpcpd) ![GitHub last commit](https://img.shields.io/github/last-commit/sebastianbergmann/phpcpd)](https://github.com/sebastianbergmann/phpcpd) - A library that detects copied and pasted code.

### Static Analysis
*Libraries for performing static analysis of PHP code.*

* [Exakat ![GitHub Repo Stars](https://img.shields.io/github/stars/exakat/exakat) ![GitHub last commit](https://img.shields.io/github/last-commit/exakat/exakat)](https://github.com/exakat/exakat) - A static analysis engine for PHP.
* [Deptrac ![GitHub Repo Stars](https://img.shields.io/github/stars/qossmic/deptrac) ![GitHub last commit](https://img.shields.io/github/last-commit/qossmic/deptrac)](https://github.com/qossmic/deptrac) - A static code analysis tool that helps to enforce rules for dependencies between software layers.
* [Mondrian ![GitHub Repo Stars](https://img.shields.io/github/stars/Trismegiste/Mondrian) ![GitHub last commit](https://img.shields.io/github/last-commit/Trismegiste/Mondrian)](https://github.com/Trismegiste/Mondrian) - A code analysis tool using Graph Theory.
* [phan ![GitHub Repo Stars](https://img.shields.io/github/stars/phan/phan) ![GitHub last commit](https://img.shields.io/github/last-commit/phan/phan)](https://github.com/phan/phan) - A static analyzer based on PHP 7+ and the php-ast extension.
* [PHP Architecture Tester ![GitHub Repo Stars](https://img.shields.io/github/stars/carlosas/phpat) ![GitHub last commit](https://img.shields.io/github/last-commit/carlosas/phpat)](https://github.com/carlosas/phpat) - Easy to use architecture testing tool for PHP.
* [PHPCompatibility ![GitHub Repo Stars](https://img.shields.io/github/stars/PHPCompatibility/PHPCompatibility) ![GitHub last commit](https://img.shields.io/github/last-commit/PHPCompatibility/PHPCompatibility)](https://github.com/PHPCompatibility/PHPCompatibility) - A PHP compatibility checker for PHP CodeSniffer.
* [PhpDependencyAnalysis ![GitHub Repo Stars](https://img.shields.io/github/stars/mamuz/PhpDependencyAnalysis) ![GitHub last commit](https://img.shields.io/github/last-commit/mamuz/PhpDependencyAnalysis)](https://github.com/mamuz/PhpDependencyAnalysis) - A tool to create customisable dependency graphs.
* [PHP Metrics ![GitHub Repo Stars](https://img.shields.io/github/stars/phpmetrics/PhpMetrics) ![GitHub last commit](https://img.shields.io/github/last-commit/phpmetrics/PhpMetrics)](https://github.com/phpmetrics/PhpMetrics) - A static metric library.
* [PHP Migration ![GitHub Repo Stars](https://img.shields.io/github/stars/monque/PHP-Migration) ![GitHub last commit](https://img.shields.io/github/last-commit/monque/PHP-Migration)](https://github.com/monque/PHP-Migration) - A static analyzer for PHP version migration.
* [PHPStan ![GitHub Repo Stars](https://img.shields.io/github/stars/phpstan/phpstan) ![GitHub last commit](https://img.shields.io/github/last-commit/phpstan/phpstan)](https://github.com/phpstan/phpstan) - A PHP Static Analysis Tool.
* [Psalm ![GitHub Repo Stars](https://img.shields.io/github/stars/vimeo/psalm) ![GitHub last commit](https://img.shields.io/github/last-commit/vimeo/psalm)](https://github.com/vimeo/psalm) - A static analysis tool for finding errors in PHP applications.

### Architectural
*Libraries related to design patterns, programming approaches and ways to organize code.*

* [Design Patterns PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/DesignPatternsPHP/DesignPatternsPHP) ![GitHub last commit](https://img.shields.io/github/last-commit/DesignPatternsPHP/DesignPatternsPHP)](https://github.com/DesignPatternsPHP/DesignPatternsPHP ) - A repository of software patterns implemented in PHP.
* [Finite](https://yohan.giarel.li/Finite/) - A simple PHP finite state machine.
* [Functional PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/lstrojny/functional-php) ![GitHub last commit](https://img.shields.io/github/last-commit/lstrojny/functional-php)](https://github.com/lstrojny/functional-php) - A functional programming library.
* [Iter ![GitHub Repo Stars](https://img.shields.io/github/stars/nikic/iter) ![GitHub last commit](https://img.shields.io/github/last-commit/nikic/iter)](https://github.com/nikic/iter) - A library that provides iteration primitives using generators.
* [Patchwork](https://patchwork2.org/) - A library for redefining userland functions.
* [Pipeline ![GitHub Repo Stars](https://img.shields.io/github/stars/thephpleague/pipeline) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/pipeline)](https://github.com/thephpleague/pipeline) - A pipeline pattern implementation.
* [Porter ![GitHub Repo Stars](https://img.shields.io/github/stars/ScriptFUSION/Porter) ![GitHub last commit](https://img.shields.io/github/last-commit/ScriptFUSION/Porter)](https://github.com/ScriptFUSION/Porter) - Data import abstraction library for consuming Web APIs and other data sources.
* [RulerZ ![GitHub Repo Stars](https://img.shields.io/github/stars/K-Phoen/rulerz) ![GitHub last commit](https://img.shields.io/github/last-commit/K-Phoen/rulerz)](https://github.com/K-Phoen/rulerz) - A powerful rule engine and implementation of the Specification pattern.

### Debugging and Profiling
*Libraries and tools for debugging errors and profiling code.*

* [APM](https://pecl.php.net/package/APM) - Monitoring extension collecting errors and statistics into SQLite/MySQL/StatsD.
* [Barbushin PHP Console ![GitHub Repo Stars](https://img.shields.io/github/stars/barbushin/php-console) ![GitHub last commit](https://img.shields.io/github/last-commit/barbushin/php-console)](https://github.com/barbushin/php-console) - Another web debugging console using Google Chrome.
* [Blackfire.io](https://www.blackfire.io) - A low-overhead code profiler.
* [Kint ![GitHub Repo Stars](https://img.shields.io/github/stars/kint-php/kint) ![GitHub last commit](https://img.shields.io/github/last-commit/kint-php/kint)](https://github.com/kint-php/kint) - A debugging and profiling tool.
* [Metrics ![GitHub Repo Stars](https://img.shields.io/github/stars/beberlei/metrics) ![GitHub last commit](https://img.shields.io/github/last-commit/beberlei/metrics)](https://github.com/beberlei/metrics) - A simple metrics API library.
* [PCOV ![GitHub Repo Stars](https://img.shields.io/github/stars/krakjoe/pcov) ![GitHub last commit](https://img.shields.io/github/last-commit/krakjoe/pcov)](https://github.com/krakjoe/pcov) - A self contained code coverage compatible driver.
* [PHP Console ![GitHub Repo Stars](https://img.shields.io/github/stars/Seldaek/php-console) ![GitHub last commit](https://img.shields.io/github/last-commit/Seldaek/php-console)](https://github.com/Seldaek/php-console) - A web debugging console.
* [PHP Debug Bar](http://phpdebugbar.com/) - A debugging toolbar.
* [PHPBench ![GitHub Repo Stars](https://img.shields.io/github/stars/phpbench/phpbench) ![GitHub last commit](https://img.shields.io/github/last-commit/phpbench/phpbench)](https://github.com/phpbench/phpbench) - A benchmarking Framework.
* [PHPSpy ![GitHub Repo Stars](https://img.shields.io/github/stars/adsr/phpspy) ![GitHub last commit](https://img.shields.io/github/last-commit/adsr/phpspy)](https://github.com/adsr/phpspy) - A low-overhead sampling profiler.
* [Symfony VarDumper ![GitHub Repo Stars](https://img.shields.io/github/stars/symfony/var-dumper) ![GitHub last commit](https://img.shields.io/github/last-commit/symfony/var-dumper)](https://github.com/symfony/var-dumper) - A variable dumper component.
* [Tideways.io](https://tideways.com/) - Monitoring and profiling tool.
* [Tracy ![GitHub Repo Stars](https://img.shields.io/github/stars/nette/tracy) ![GitHub last commit](https://img.shields.io/github/last-commit/nette/tracy)](https://github.com/nette/tracy) - A simple error detection, logging and time measuring library.
* [Whoops ![GitHub Repo Stars](https://img.shields.io/github/stars/filp/whoops) ![GitHub last commit](https://img.shields.io/github/last-commit/filp/whoops)](https://github.com/filp/whoops) - A pretty error handling library.
* [xDebug ![GitHub Repo Stars](https://img.shields.io/github/stars/xdebug/xdebug) ![GitHub last commit](https://img.shields.io/github/last-commit/xdebug/xdebug)](https://github.com/xdebug/xdebug) - A debug and profile tool for PHP.
* [XHProf ![GitHub Repo Stars](https://img.shields.io/github/stars/phacility/xhprof) ![GitHub last commit](https://img.shields.io/github/last-commit/phacility/xhprof)](https://github.com/phacility/xhprof) - A profiling tool originally developed by Facebook.
* [Z-Ray](https://www.zend.com/products/z-ray) - A debug and profile tool for Zend Server.

### Build Tools
*Project build and automation tools.*

* [Box ![GitHub Repo Stars](https://img.shields.io/github/stars/box-project/box) ![GitHub last commit](https://img.shields.io/github/last-commit/box-project/box)](https://github.com/box-project/box) - A utility to build PHAR files.
* [Construct ![GitHub Repo Stars](https://img.shields.io/github/stars/jonathantorres/construct) ![GitHub last commit](https://img.shields.io/github/last-commit/jonathantorres/construct)](https://github.com/jonathantorres/construct) - A PHP project/micro-package generator.
* [Phing](https://www.phing.info/) - A PHP project build system inspired by Apache Ant.
* [RMT ![GitHub Repo Stars](https://img.shields.io/github/stars/liip/RMT) ![GitHub last commit](https://img.shields.io/github/last-commit/liip/RMT)](https://github.com/liip/RMT) - A library for versioning and releasing software.

### Task Runners
*Libraries for automating and running tasks.*

* [Bldr](https://bldr.io/) - A PHP Task runner built on Symfony components.
* [Jobby ![GitHub Repo Stars](https://img.shields.io/github/stars/jobbyphp/jobby) ![GitHub last commit](https://img.shields.io/github/last-commit/jobbyphp/jobby)](https://github.com/jobbyphp/jobby) - A PHP cron job manager without modifying crontab.
* [Robo ![GitHub Repo Stars](https://img.shields.io/github/stars/consolidation/Robo) ![GitHub last commit](https://img.shields.io/github/last-commit/consolidation/Robo)](https://github.com/consolidation/Robo) - A PHP Task runner with object-orientated configurations.
* [Task](https://taskphp.github.io/) - A pure PHP task runner inspired by Grunt and Gulp.

### Navigation
*Tools for building navigation structures.*

* [KnpMenu ![GitHub Repo Stars](https://img.shields.io/github/stars/KnpLabs/KnpMenu) ![GitHub last commit](https://img.shields.io/github/last-commit/KnpLabs/KnpMenu)](https://github.com/KnpLabs/KnpMenu) - A menu library.
* [Menu ![GitHub Repo Stars](https://img.shields.io/github/stars/spatie/menu) ![GitHub last commit](https://img.shields.io/github/last-commit/spatie/menu)](https://github.com/spatie/menu) - A flexible menu library with a fluent interface.

### Asset Management
*Tools for managing, compressing and minifying website assets.*

* [JShrink ![GitHub Repo Stars](https://img.shields.io/github/stars/tedious/JShrink) ![GitHub last commit](https://img.shields.io/github/last-commit/tedious/JShrink)](https://github.com/tedious/JShrink) - A JavaScript minifier library.
* [Laravel Mix ![GitHub Repo Stars](https://img.shields.io/github/stars/laravel-mix/laravel-mix) ![GitHub last commit](https://img.shields.io/github/last-commit/laravel-mix/laravel-mix)](https://github.com/laravel-mix/laravel-mix ) - An elegant wrapper around Webpack for the 80% use case.
* [Symfony Asset ![GitHub Repo Stars](https://img.shields.io/github/stars/symfony/asset) ![GitHub last commit](https://img.shields.io/github/last-commit/symfony/asset)](https://github.com/symfony/asset) - Manages URL generation and versioning of web assets.
* [Symfony Encore ![GitHub Repo Stars](https://img.shields.io/github/stars/symfony/webpack-encore) ![GitHub last commit](https://img.shields.io/github/last-commit/symfony/webpack-encore)](https://github.com/symfony/webpack-encore) - A simple but powerful API for processing and compiling assets built around Webpack.

### Geolocation
*Libraries for geocoding addresses and working with latitudes and longitudes.*

* [Country List ![GitHub Repo Stars](https://img.shields.io/github/stars/umpirsky/country-list) ![GitHub last commit](https://img.shields.io/github/last-commit/umpirsky/country-list)](https://github.com/umpirsky/country-list) - A list of all countries with names and ISO 3166-1 codes.
* [GeoCoder](https://geocoder-php.org/) - A geocoding library.
* [GeoJSON ![GitHub Repo Stars](https://img.shields.io/github/stars/jmikola/geojson) ![GitHub last commit](https://img.shields.io/github/last-commit/jmikola/geojson)](https://github.com/jmikola/geojson) - A GeoJSON implementation.
* [GeoTools ![GitHub Repo Stars](https://img.shields.io/github/stars/thephpleague/geotools) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/geotools)](https://github.com/thephpleague/geotools) - A library of geo-related tools.
* [PHPGeo ![GitHub Repo Stars](https://img.shields.io/github/stars/mjaschen/phpgeo) ![GitHub last commit](https://img.shields.io/github/last-commit/mjaschen/phpgeo)](https://github.com/mjaschen/phpgeo) - A simple geo library.

### Date and Time
*Libraries for working with dates and times.*

* [CalendR](https://yohan.giarel.li/CalendR/) - A calendar management library.
* [Carbon ![GitHub Repo Stars](https://img.shields.io/github/stars/briannesbitt/Carbon) ![GitHub last commit](https://img.shields.io/github/last-commit/briannesbitt/Carbon)](https://github.com/briannesbitt/Carbon) - A simple DateTime API extension.
* [Chronos ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/chronos) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/chronos)](https://github.com/cakephp/chronos) - A DateTime API extension supporting both mutable and immutable date/time.
* [Moment.php ![GitHub Repo Stars](https://img.shields.io/github/stars/fightbulc/moment.php) ![GitHub last commit](https://img.shields.io/github/last-commit/fightbulc/moment.php)](https://github.com/fightbulc/moment.php) - Moment.js inspired PHP DateTime handler with i18n support.
* [Yasumi ![GitHub Repo Stars](https://img.shields.io/github/stars/azuyalabs/yasumi) ![GitHub last commit](https://img.shields.io/github/last-commit/azuyalabs/yasumi)](https://github.com/azuyalabs/yasumi) - An library to help you calculate the dates and names of holidays.

### Event
*Libraries that are event-driven or implement non-blocking event loops.*
* [Amp ![GitHub Repo Stars](https://img.shields.io/github/stars/amphp/amp) ![GitHub last commit](https://img.shields.io/github/last-commit/amphp/amp)](https://github.com/amphp/amp) - An event driven non-blocking I/O library.
* [Broadway ![GitHub Repo Stars](https://img.shields.io/github/stars/broadway/broadway) ![GitHub last commit](https://img.shields.io/github/last-commit/broadway/broadway)](https://github.com/broadway/broadway) - An event source and CQRS library.
* [CakePHP Event ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/event) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/event)](https://github.com/cakephp/event) - An event dispatcher library.
* [Elephant.io ![GitHub Repo Stars](https://img.shields.io/github/stars/Wisembly/Elephant.io) ![GitHub last commit](https://img.shields.io/github/last-commit/Wisembly/Elephant.io)](https://github.com/Wisembly/Elephant.io) - Yet another web socket library.
* [Evenement ![GitHub Repo Stars](https://img.shields.io/github/stars/igorw/evenement) ![GitHub last commit](https://img.shields.io/github/last-commit/igorw/evenement)](https://github.com/igorw/evenement) - An event dispatcher library.
* [Event ![GitHub Repo Stars](https://img.shields.io/github/stars/thephpleague/event) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/event)](https://github.com/thephpleague/event) - An event library with a focus on domain events.
* [Pawl ![GitHub Repo Stars](https://img.shields.io/github/stars/ratchetphp/Pawl) ![GitHub last commit](https://img.shields.io/github/last-commit/ratchetphp/Pawl)](https://github.com/ratchetphp/Pawl) - An asynchronous web socket client.
* [Prooph Event Store ![GitHub Repo Stars](https://img.shields.io/github/stars/prooph/event-store) ![GitHub last commit](https://img.shields.io/github/last-commit/prooph/event-store)](https://github.com/prooph/event-store) - An event source component to persist event messages
* [PHP Defer ![GitHub Repo Stars](https://img.shields.io/github/stars/php-defer/php-defer) ![GitHub last commit](https://img.shields.io/github/last-commit/php-defer/php-defer)](https://github.com/php-defer/php-defer) - Golang's defer statement for PHP.
* [Ratchet ![GitHub Repo Stars](https://img.shields.io/github/stars/ratchetphp/Ratchet) ![GitHub last commit](https://img.shields.io/github/last-commit/ratchetphp/Ratchet)](https://github.com/ratchetphp/Ratchet) - A web socket library.
* [ReactPHP ![GitHub Repo Stars](https://img.shields.io/github/stars/reactphp/reactphp) ![GitHub last commit](https://img.shields.io/github/last-commit/reactphp/reactphp)](https://github.com/reactphp/reactphp) - An event driven non-blocking I/O library.
* [RxPHP ![GitHub Repo Stars](https://img.shields.io/github/stars/ReactiveX/RxPHP) ![GitHub last commit](https://img.shields.io/github/last-commit/ReactiveX/RxPHP)](https://github.com/ReactiveX/RxPHP) - A reactive extension library.
* [Swoole ![GitHub Repo Stars](https://img.shields.io/github/stars/swoole/swoole-src) ![GitHub last commit](https://img.shields.io/github/last-commit/swoole/swoole-src)](https://github.com/swoole/swoole-src) - An event-driven asynchronous and concurrent networking communication framework with high performance for PHP written in C.
* [Workerman ![GitHub Repo Stars](https://img.shields.io/github/stars/walkor/Workerman) ![GitHub last commit](https://img.shields.io/github/last-commit/walkor/Workerman)](https://github.com/walkor/Workerman) - An event driven non-blocking I/O library.

### Logging
*Libraries for generating and working with log files.*

* [Monolog ![GitHub Repo Stars](https://img.shields.io/github/stars/Seldaek/monolog) ![GitHub last commit](https://img.shields.io/github/last-commit/Seldaek/monolog)](https://github.com/Seldaek/monolog) - A comprehensive logger.

### E-commerce
*Libraries and applications for taking payments and building online e-commerce stores.*

* [Money ![GitHub Repo Stars](https://img.shields.io/github/stars/moneyphp/money) ![GitHub last commit](https://img.shields.io/github/last-commit/moneyphp/money)](https://github.com/moneyphp/money) - A PHP implementation of Fowler's money pattern.
* [Brick\Money ![GitHub Repo Stars](https://img.shields.io/github/stars/brick/money) ![GitHub last commit](https://img.shields.io/github/last-commit/brick/money)](https://github.com/brick/money) - A money library for PHP, with support for contexts, cash roundings, currency conversion.
* [OmniPay ![GitHub Repo Stars](https://img.shields.io/github/stars/thephpleague/omnipay) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/omnipay)](https://github.com/thephpleague/omnipay) - A framework agnostic multi-gateway payment processing library.
* [Payum ![GitHub Repo Stars](https://img.shields.io/github/stars/payum/payum) ![GitHub last commit](https://img.shields.io/github/last-commit/payum/payum)](https://github.com/payum/payum) - A payment abstraction library.
* [Shopware ![GitHub Repo Stars](https://img.shields.io/github/stars/shopware/shopware) ![GitHub last commit](https://img.shields.io/github/last-commit/shopware/shopware)](https://github.com/shopware/shopware) - Highly customizable e-commerce software
* [Swap ![GitHub Repo Stars](https://img.shields.io/github/stars/florianv/swap) ![GitHub last commit](https://img.shields.io/github/last-commit/florianv/swap)](https://github.com/florianv/swap) - An exchange rates library.
* [Sylius](https://sylius.com/) - An open source e-commerce solution.

### PDF
*Libraries and software for working with PDF files.*

* [Dompdf ![GitHub Repo Stars](https://img.shields.io/github/stars/dompdf/dompdf) ![GitHub last commit](https://img.shields.io/github/last-commit/dompdf/dompdf)](https://github.com/dompdf/dompdf) - A HTML to PDF converter.
* [PHPPdf ![GitHub Repo Stars](https://img.shields.io/github/stars/psliwa/PHPPdf) ![GitHub last commit](https://img.shields.io/github/last-commit/psliwa/PHPPdf)](https://github.com/psliwa/PHPPdf) - A library for generating PDFs and images from XML.
* [Snappy ![GitHub Repo Stars](https://img.shields.io/github/stars/KnpLabs/snappy) ![GitHub last commit](https://img.shields.io/github/last-commit/KnpLabs/snappy)](https://github.com/KnpLabs/snappy) - A PDF and image generation library.
* [WKHTMLToPDF ![GitHub Repo Stars](https://img.shields.io/github/stars/wkhtmltopdf/wkhtmltopdf) ![GitHub last commit](https://img.shields.io/github/last-commit/wkhtmltopdf/wkhtmltopdf)](https://github.com/wkhtmltopdf/wkhtmltopdf) - A tool to convert HTML to PDF.

### Office
*Libraries for working with office suite documents.*

* [PHPPowerPoint ![GitHub Repo Stars](https://img.shields.io/github/stars/PHPOffice/PHPPresentation) ![GitHub last commit](https://img.shields.io/github/last-commit/PHPOffice/PHPPresentation)](https://github.com/PHPOffice/PHPPresentation) - A library for working with Microsoft PowerPoint Presentations.
* [PHPWord ![GitHub Repo Stars](https://img.shields.io/github/stars/PHPOffice/PHPWord) ![GitHub last commit](https://img.shields.io/github/last-commit/PHPOffice/PHPWord)](https://github.com/PHPOffice/PHPWord) - A library for working with Microsoft Word documents.
* [PHPSpreadsheet ![GitHub Repo Stars](https://img.shields.io/github/stars/PHPOffice/PhpSpreadsheet) ![GitHub last commit](https://img.shields.io/github/last-commit/PHPOffice/PhpSpreadsheet)](https://github.com/PHPOffice/PhpSpreadsheet) - A pure PHP library for reading and writing spreadsheet files (successor of PHPExcel).
* [Spout ![GitHub Repo Stars](https://img.shields.io/github/stars/box/spout) ![GitHub last commit](https://img.shields.io/github/last-commit/box/spout)](https://github.com/box/spout) - Read and write spreadsheet files (CSV, XLSX and ODS), in a fast and scalable way .

### Database
*Libraries for interacting with databases using object-relational mapping (ORM) or datamapping techniques.*

* [Atlas.Orm ![GitHub Repo Stars](https://img.shields.io/github/stars/atlasphp/Atlas.Orm) ![GitHub last commit](https://img.shields.io/github/last-commit/atlasphp/Atlas.Orm)](https://github.com/atlasphp/Atlas.Orm) - A data mapper implementation for your persistence model in PHP.
* [Aura.Sql ![GitHub Repo Stars](https://img.shields.io/github/stars/auraphp/Aura.Sql) ![GitHub last commit](https://img.shields.io/github/last-commit/auraphp/Aura.Sql)](https://github.com/auraphp/Aura.Sql) - Provides an extension to the native PDO along with a profiler and connection locator.
* [Aura.SqlQuery ![GitHub Repo Stars](https://img.shields.io/github/stars/auraphp/Aura.SqlQuery) ![GitHub last commit](https://img.shields.io/github/last-commit/auraphp/Aura.SqlQuery)](https://github.com/auraphp/Aura.SqlQuery) - Independent query builders for MySQL, PostgreSQL, SQLite, and Microsoft SQL Server.
* [Baum ![GitHub Repo Stars](https://img.shields.io/github/stars/etrepat/baum) ![GitHub last commit](https://img.shields.io/github/last-commit/etrepat/baum)](https://github.com/etrepat/baum) - A nested set implementation for Eloquent.
* [CakePHP ORM ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/orm) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/orm)](https://github.com/cakephp/orm) - Object-Relational Mapper, implemented using the DataMapper pattern.
* [Cycle ORM ![GitHub Repo Stars](https://img.shields.io/github/stars/cycle/orm) ![GitHub last commit](https://img.shields.io/github/last-commit/cycle/orm)](https://github.com/cycle/orm) - PHP DataMapper, ORM.
* [Doctrine Extensions ![GitHub Repo Stars](https://img.shields.io/github/stars/doctrine-extensions/DoctrineExtensions) ![GitHub last commit](https://img.shields.io/github/last-commit/doctrine-extensions/DoctrineExtensions)](https://github.com/doctrine-extensions/DoctrineExtensions ) - A collection of Doctrine behavioural extensions.
* [Doctrine](https://www.doctrine-project.org/) - A comprehensive DBAL and ORM.
* [Laravel Eloquent ![GitHub Repo Stars](https://img.shields.io/github/stars/illuminate/database) ![GitHub last commit](https://img.shields.io/github/last-commit/illuminate/database)](https://github.com/illuminate/database) - A simple ORM.
* [Pomm ![GitHub Repo Stars](https://img.shields.io/github/stars/chanmix51/Pomm) ![GitHub last commit](https://img.shields.io/github/last-commit/chanmix51/Pomm)](https://github.com/chanmix51/Pomm) - An Object Model Manager for PostgreSQL.
* [ProxyManager ![GitHub Repo Stars](https://img.shields.io/github/stars/Ocramius/ProxyManager) ![GitHub last commit](https://img.shields.io/github/last-commit/Ocramius/ProxyManager)](https://github.com/Ocramius/ProxyManager) - A set of utilities to generate proxy objects for data mappers.
* [RedBean](https://redbeanphp.com/index.php) - A lightweight, configuration-less ORM.
* [Slimdump ![GitHub Repo Stars](https://img.shields.io/github/stars/webfactory/slimdump) ![GitHub last commit](https://img.shields.io/github/last-commit/webfactory/slimdump)](https://github.com/webfactory/slimdump) - An easy dumper tool for MySQL.
* [Spot2 ![GitHub Repo Stars](https://img.shields.io/github/stars/spotorm/spot2) ![GitHub last commit](https://img.shields.io/github/last-commit/spotorm/spot2)](https://github.com/spotorm/spot2) - A MySQL datamapper ORM.

### Migrations
Libraries to help manage database schemas and migrations.

* [Doctrine Migrations](https://www.doctrine-project.org/projects/migrations.html) - A migration library for Doctrine.
* [Migrations ![GitHub Repo Stars](https://img.shields.io/github/stars/icomefromthenet/Migrations) ![GitHub last commit](https://img.shields.io/github/last-commit/icomefromthenet/Migrations)](https://github.com/icomefromthenet/Migrations) - A migration management library.
* [Phinx ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/phinx) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/phinx)](https://github.com/cakephp/phinx) - Another database migration library.
* [PHPMig ![GitHub Repo Stars](https://img.shields.io/github/stars/davedevelopment/phpmig) ![GitHub last commit](https://img.shields.io/github/last-commit/davedevelopment/phpmig)](https://github.com/davedevelopment/phpmig) - Another migration management library.
* [Ruckusing ![GitHub Repo Stars](https://img.shields.io/github/stars/ruckus/ruckusing-migrations) ![GitHub last commit](https://img.shields.io/github/last-commit/ruckus/ruckusing-migrations)](https://github.com/ruckus/ruckusing-migrations) - Database migrations for PHP ala ActiveRecord Migrations with support for MySQL, Postgres, SQLite.

### NoSQL
*Libraries for working with "NoSQL" backends.*

* [PHPMongo ![GitHub Repo Stars](https://img.shields.io/github/stars/sokil/php-mongo) ![GitHub last commit](https://img.shields.io/github/last-commit/sokil/php-mongo)](https://github.com/sokil/php-mongo) - A MongoDB ORM.
* [Predis ![GitHub Repo Stars](https://img.shields.io/github/stars/predis/predis) ![GitHub last commit](https://img.shields.io/github/last-commit/predis/predis)](https://github.com/predis/predis) - A feature complete Redis library.

### Queue
*Libraries for working with event and task queues.*

* [Bernard ![GitHub Repo Stars](https://img.shields.io/github/stars/bernardphp/bernard) ![GitHub last commit](https://img.shields.io/github/last-commit/bernardphp/bernard)](https://github.com/bernardphp/bernard) - A multibackend abstraction library.
* [BunnyPHP ![GitHub Repo Stars](https://img.shields.io/github/stars/jakubkulhan/bunny) ![GitHub last commit](https://img.shields.io/github/last-commit/jakubkulhan/bunny)](https://github.com/jakubkulhan/bunny) - A performant pure-PHP AMQP (RabbitMQ) sync and also async (ReactPHP) library.
* [Pheanstalk ![GitHub Repo Stars](https://img.shields.io/github/stars/pheanstalk/pheanstalk) ![GitHub last commit](https://img.shields.io/github/last-commit/pheanstalk/pheanstalk)](https://github.com/pheanstalk/pheanstalk) - A Beanstalkd client library.
* [PHP AMQP ![GitHub Repo Stars](https://img.shields.io/github/stars/php-amqplib/php-amqplib) ![GitHub last commit](https://img.shields.io/github/last-commit/php-amqplib/php-amqplib)](https://github.com/php-amqplib/php-amqplib) - A pure PHP AMQP library.
* [Tarantool Queue ![GitHub Repo Stars](https://img.shields.io/github/stars/tarantool-php/queue) ![GitHub last commit](https://img.shields.io/github/last-commit/tarantool-php/queue)](https://github.com/tarantool-php/queue) - PHP bindings for Tarantool Queue.
* [Thumper ![GitHub Repo Stars](https://img.shields.io/github/stars/php-amqplib/Thumper) ![GitHub last commit](https://img.shields.io/github/last-commit/php-amqplib/Thumper)](https://github.com/php-amqplib/Thumper) - A RabbitMQ pattern library.
* [Enqueue ![GitHub Repo Stars](https://img.shields.io/github/stars/php-enqueue/enqueue-dev) ![GitHub last commit](https://img.shields.io/github/last-commit/php-enqueue/enqueue-dev)](https://github.com/php-enqueue/enqueue-dev) - A message queue packages for PHP that supports RabbitMQ, AMQP, STOMP, Amazon SQS, Redis and Doctrine transports. 

### Search
*Libraries and software for indexing and performing search queries on data.*

* [Elastica ![GitHub Repo Stars](https://img.shields.io/github/stars/ruflin/Elastica) ![GitHub last commit](https://img.shields.io/github/last-commit/ruflin/Elastica)](https://github.com/ruflin/Elastica) - A client library for ElasticSearch.
* [ElasticSearch PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/elastic/elasticsearch-php) ![GitHub last commit](https://img.shields.io/github/last-commit/elastic/elasticsearch-php)](https://github.com/elastic/elasticsearch-php) - The official client library for [ElasticSearch](https://www.elastic.co/).
* [Solarium](https://www.solarium-project.org/) - A client library for [Solr](https://solr.apache.org/).
* [SphinxQL Query Builder](https://foolcode.github.io/SphinxQL-Query-Builder/) - A query library for the [Sphinx](https://sphinxsearch.com/) and [Manticore](https://manticoresearch.com/) search engines.

### Command Line
*Libraries related to the command line.*

* [Aura.Cli ![GitHub Repo Stars](https://img.shields.io/github/stars/auraphp/Aura.Cli) ![GitHub last commit](https://img.shields.io/github/last-commit/auraphp/Aura.Cli)](https://github.com/auraphp/Aura.Cli) - Provides the equivalent of request ( Context ) and response ( Stdio ) objects for the command line interface, including Getopt support, and an independent Help object for describing commands.
* [Boris ![GitHub Repo Stars](https://img.shields.io/github/stars/borisrepl/boris) ![GitHub last commit](https://img.shields.io/github/last-commit/borisrepl/boris)](https://github.com/borisrepl/boris) - A tiny PHP REPL.
* [Cilex ![GitHub Repo Stars](https://img.shields.io/github/stars/Cilex/Cilex) ![GitHub last commit](https://img.shields.io/github/last-commit/Cilex/Cilex)](https://github.com/Cilex/Cilex) - A micro framework for building command line tools.
* [CLI Menu ![GitHub Repo Stars](https://img.shields.io/github/stars/php-school/cli-menu) ![GitHub last commit](https://img.shields.io/github/last-commit/php-school/cli-menu)](https://github.com/php-school/cli-menu) - A library for building CLI menus.
* [CLIFramework ![GitHub Repo Stars](https://img.shields.io/github/stars/c9s/CLIFramework) ![GitHub last commit](https://img.shields.io/github/last-commit/c9s/CLIFramework)](https://github.com/c9s/CLIFramework) - A command-line framework supports zsh/bash completion generation, subcommands and option constraints. It also powers phpbrew.
* [CLImate ![GitHub Repo Stars](https://img.shields.io/github/stars/thephpleague/climate) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/climate)](https://github.com/thephpleague/climate) - A library for outputting colours and special formatting.
* [Commando ![GitHub Repo Stars](https://img.shields.io/github/stars/nategood/commando) ![GitHub last commit](https://img.shields.io/github/last-commit/nategood/commando)](https://github.com/nategood/commando) - Another simple command line opt parser.
* [Cron Expression ![GitHub Repo Stars](https://img.shields.io/github/stars/mtdowling/cron-expression) ![GitHub last commit](https://img.shields.io/github/last-commit/mtdowling/cron-expression)](https://github.com/mtdowling/cron-expression) - A library to calculate cron run dates.
* [GetOpt ![GitHub Repo Stars](https://img.shields.io/github/stars/getopt-php/getopt-php) ![GitHub last commit](https://img.shields.io/github/last-commit/getopt-php/getopt-php)](https://github.com/getopt-php/getopt-php) - A command line opt parser.
* [GetOptionKit ![GitHub Repo Stars](https://img.shields.io/github/stars/c9s/GetOptionKit) ![GitHub last commit](https://img.shields.io/github/last-commit/c9s/GetOptionKit)](https://github.com/c9s/GetOptionKit) - Another command line opt parser.
* [PsySH ![GitHub Repo Stars](https://img.shields.io/github/stars/bobthecow/psysh) ![GitHub last commit](https://img.shields.io/github/last-commit/bobthecow/psysh)](https://github.com/bobthecow/psysh) - Another PHP REPL.
* [ShellWrap ![GitHub Repo Stars](https://img.shields.io/github/stars/MrRio/shellwrap) ![GitHub last commit](https://img.shields.io/github/last-commit/MrRio/shellwrap)](https://github.com/MrRio/shellwrap) - A simple command line wrapper library.

### Authentication and Authorization
*Libraries for implementing user authentication and authorization.*

* [Aura.Auth ![GitHub Repo Stars](https://img.shields.io/github/stars/auraphp/Aura.Auth) ![GitHub last commit](https://img.shields.io/github/last-commit/auraphp/Aura.Auth)](https://github.com/auraphp/Aura.Auth) - Provides authentication functionality and session tracking using various adapters.
* [SocialConnect Auth ![GitHub Repo Stars](https://img.shields.io/github/stars/socialConnect/auth) ![GitHub last commit](https://img.shields.io/github/last-commit/socialConnect/auth)](https://github.com/socialConnect/auth) - An open source social sign (OAuth1\OAuth2\OpenID\OpenIDConnect).
* [Json Web Token ![GitHub Repo Stars](https://img.shields.io/github/stars/lcobucci/jwt) ![GitHub last commit](https://img.shields.io/github/last-commit/lcobucci/jwt)](https://github.com/lcobucci/jwt) - Json Tokens to authenticate and transmit information.
* [OAuth 1.0 Client ![GitHub Repo Stars](https://img.shields.io/github/stars/thephpleague/oauth1-client) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/oauth1-client)](https://github.com/thephpleague/oauth1-client) - An OAuth 1.0 client library.
* [OAuth 2.0 Client ![GitHub Repo Stars](https://img.shields.io/github/stars/thephpleague/oauth2-client) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/oauth2-client)](https://github.com/thephpleague/oauth2-client) - An OAuth 2.0 client library.
* [OAuth2 Server](https://bshaffer.github.io/oauth2-server-php-docs/) - Another OAuth2 server implementation.
* [OAuth2 Server](https://oauth2.thephpleague.com/) - An OAuth2 authentication server, resource server and client library.
* [Opauth ![GitHub Repo Stars](https://img.shields.io/github/stars/opauth/opauth) ![GitHub last commit](https://img.shields.io/github/last-commit/opauth/opauth)](https://github.com/opauth/opauth) - A multi-provider authentication framework.
* [Paseto ![GitHub Repo Stars](https://img.shields.io/github/stars/paragonie/paseto) ![GitHub last commit](https://img.shields.io/github/last-commit/paragonie/paseto)](https://github.com/paragonie/paseto) - Platform-Agnostic Security Tokens.
* [PHP oAuthLib ![GitHub Repo Stars](https://img.shields.io/github/stars/Lusitanian/PHPoAuthLib) ![GitHub last commit](https://img.shields.io/github/last-commit/Lusitanian/PHPoAuthLib)](https://github.com/Lusitanian/PHPoAuthLib) - Another OAuth library.
* [Sentinel Social](https://cartalyst.com/manual/sentinel-social/2.0) - A library for social network authentication.
* [Sentinel](https://cartalyst.com/manual/sentinel/2.0) - A framework agnostic authentication & authorisation library.
* [TwitterOAuth ![GitHub Repo Stars](https://img.shields.io/github/stars/abraham/twitteroauth) ![GitHub last commit](https://img.shields.io/github/last-commit/abraham/twitteroauth)](https://github.com/abraham/twitteroauth) - A Twitter OAuth library.

### Markup and CSS
*Libraries for working with markup and CSS formats.

* [Cebe Markdown ![GitHub Repo Stars](https://img.shields.io/github/stars/cebe/markdown) ![GitHub last commit](https://img.shields.io/github/last-commit/cebe/markdown)](https://github.com/cebe/markdown) - An fast and extensible Markdown parser.
* [CommonMark PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/thephpleague/commonmark) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/commonmark)](https://github.com/thephpleague/commonmark) - Highly-extensible Markdown parser which fully supports the [CommonMark spec](https://spec.commonmark.org/).
* [Decoda ![GitHub Repo Stars](https://img.shields.io/github/stars/milesj/decoda) ![GitHub last commit](https://img.shields.io/github/last-commit/milesj/decoda)](https://github.com/milesj/decoda) - A lightweight markup parser library.
* [Essence ![GitHub Repo Stars](https://img.shields.io/github/stars/essence/essence) ![GitHub last commit](https://img.shields.io/github/last-commit/essence/essence)](https://github.com/essence/essence) - A library for extracting web media.
* [Embera ![GitHub Repo Stars](https://img.shields.io/github/stars/mpratt/Embera) ![GitHub last commit](https://img.shields.io/github/last-commit/mpratt/Embera)](https://github.com/mpratt/Embera) - An Oembed consumer library.
* [HTML to Markdown ![GitHub Repo Stars](https://img.shields.io/github/stars/thephpleague/html-to-markdown) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/html-to-markdown)](https://github.com/thephpleague/html-to-markdown) - Converts HTML into Markdown.
* [HTML5 PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/Masterminds/html5-php) ![GitHub last commit](https://img.shields.io/github/last-commit/Masterminds/html5-php)](https://github.com/Masterminds/html5-php) - An HTML5 parser and serializer library.
* [Parsedown ![GitHub Repo Stars](https://img.shields.io/github/stars/erusev/parsedown) ![GitHub last commit](https://img.shields.io/github/last-commit/erusev/parsedown)](https://github.com/erusev/parsedown) - Another Markdown parser.
* [PHP CSS Parser ![GitHub Repo Stars](https://img.shields.io/github/stars/sabberworm/PHP-CSS-Parser) ![GitHub last commit](https://img.shields.io/github/last-commit/sabberworm/PHP-CSS-Parser)](https://github.com/sabberworm/PHP-CSS-Parser) - A Parser for CSS Files written in PHP.
* [PHP Markdown ![GitHub Repo Stars](https://img.shields.io/github/stars/michelf/php-markdown) ![GitHub last commit](https://img.shields.io/github/last-commit/michelf/php-markdown)](https://github.com/michelf/php-markdown) - A Markdown parser.
* [Shiki PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/spatie/shiki-php) ![GitHub last commit](https://img.shields.io/github/last-commit/spatie/shiki-php)](https://github.com/spatie/shiki-php) - A [Shiki ![GitHub Repo Stars](https://img.shields.io/github/stars/shikijs/shiki) ![GitHub last commit](https://img.shields.io/github/last-commit/shikijs/shiki)](https://github.com/shikijs/shiki) code highlighting package in PHP.
* [VObject ![GitHub Repo Stars](https://img.shields.io/github/stars/sabre-io/vobject) ![GitHub last commit](https://img.shields.io/github/last-commit/sabre-io/vobject)](https://github.com/sabre-io/vobject) - A library for parsing VCard and iCalendar objects.

### JSON
*Libraries for working with JSON.*

* [JSON Lint ![GitHub Repo Stars](https://img.shields.io/github/stars/Seldaek/jsonlint) ![GitHub last commit](https://img.shields.io/github/last-commit/Seldaek/jsonlint)](https://github.com/Seldaek/jsonlint) - A JSON lint utility.
* [JSONMapper ![GitHub Repo Stars](https://img.shields.io/github/stars/JsonMapper/JsonMapper) ![GitHub last commit](https://img.shields.io/github/last-commit/JsonMapper/JsonMapper)](https://github.com/JsonMapper/JsonMapper) - A library for mapping JSON to PHP objects.

### Strings
*Libraries for parsing and manipulating strings.*

* [Agent ![GitHub Repo Stars](https://img.shields.io/github/stars/jenssegers/agent) ![GitHub last commit](https://img.shields.io/github/last-commit/jenssegers/agent)](https://github.com/jenssegers/agent) - A PHP desktop/mobile user agent parser, based on Mobiledetect.
* [ANSI to HTML5 ![GitHub Repo Stars](https://img.shields.io/github/stars/sensiolabs/ansi-to-html) ![GitHub last commit](https://img.shields.io/github/last-commit/sensiolabs/ansi-to-html)](https://github.com/sensiolabs/ansi-to-html) - An ANSI to HTML5 converter library.
* [Color Jizz ![GitHub Repo Stars](https://img.shields.io/github/stars/mikeemoo/ColorJizz-PHP) ![GitHub last commit](https://img.shields.io/github/last-commit/mikeemoo/ColorJizz-PHP)](https://github.com/mikeemoo/ColorJizz-PHP) - A library for manipulating and converting colours.
* [Device Detector ![GitHub Repo Stars](https://img.shields.io/github/stars/matomo-org/device-detector) ![GitHub last commit](https://img.shields.io/github/last-commit/matomo-org/device-detector)](https://github.com/matomo-org/device-detector) - Another library for parsing user agent strings.
* [Jieba-PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/fukuball/jieba-php) ![GitHub last commit](https://img.shields.io/github/last-commit/fukuball/jieba-php)](https://github.com/fukuball/jieba-php) - A PHP port of Python's jieba. Chinese text segmentation for natural language processing.
* [Mobile-Detect ![GitHub Repo Stars](https://img.shields.io/github/stars/serbanghita/Mobile-Detect) ![GitHub last commit](https://img.shields.io/github/last-commit/serbanghita/Mobile-Detect)](https://github.com/serbanghita/Mobile-Detect) - A lightweight PHP class for detecting mobile devices (including tablets).
* [Patchwork UTF-8 ![GitHub Repo Stars](https://img.shields.io/github/stars/nicolas-grekas/Patchwork-UTF8) ![GitHub last commit](https://img.shields.io/github/last-commit/nicolas-grekas/Patchwork-UTF8)](https://github.com/nicolas-grekas/Patchwork-UTF8) - A portable library for working with UTF-8 strings.
* [Portable ASCII ![GitHub Repo Stars](https://img.shields.io/github/stars/voku/portable-ascii) ![GitHub last commit](https://img.shields.io/github/last-commit/voku/portable-ascii)](https://github.com/voku/portable-ascii) - A library to convert strings to ascii.
* [Portable UTF-8 ![GitHub Repo Stars](https://img.shields.io/github/stars/voku/portable-utf8) ![GitHub last commit](https://img.shields.io/github/last-commit/voku/portable-utf8)](https://github.com/voku/portable-utf8) - A string manipulation library with UTF-8 safe replacement methods.
* [Slugify ![GitHub Repo Stars](https://img.shields.io/github/stars/cocur/slugify) ![GitHub last commit](https://img.shields.io/github/last-commit/cocur/slugify)](https://github.com/cocur/slugify) - A library to convert strings to slugs.
* [SQL Formatter ![GitHub Repo Stars](https://img.shields.io/github/stars/jdorn/sql-formatter) ![GitHub last commit](https://img.shields.io/github/last-commit/jdorn/sql-formatter)](https://github.com/jdorn/sql-formatter/) - A library for formatting SQL statements.
* [Stringy ![GitHub Repo Stars](https://img.shields.io/github/stars/voku/Stringy) ![GitHub last commit](https://img.shields.io/github/last-commit/voku/Stringy)](https://github.com/voku/Stringy) - A string manipulation library with multibyte support.
* [UA Parser ![GitHub Repo Stars](https://img.shields.io/github/stars/tobie/ua-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/tobie/ua-parser)](https://github.com/tobie/ua-parser/tree/master/php) - A library for parsing user agent strings.
* [URLify ![GitHub Repo Stars](https://img.shields.io/github/stars/jbroadway/urlify) ![GitHub last commit](https://img.shields.io/github/last-commit/jbroadway/urlify)](https://github.com/jbroadway/urlify) - A PHP port of Django's URLify.js.
* [UUID ![GitHub Repo Stars](https://img.shields.io/github/stars/ramsey/uuid) ![GitHub last commit](https://img.shields.io/github/last-commit/ramsey/uuid)](https://github.com/ramsey/uuid) - A library for generating UUIDs.

### Numbers
*Libraries for working with numbers.*

* [Brick\Math ![GitHub Repo Stars](https://img.shields.io/github/stars/brick/math) ![GitHub last commit](https://img.shields.io/github/last-commit/brick/math)](https://github.com/brick/math) - A library providing large number support: `BigInteger`, `BigDecimal` and `BigRational`.
* [ByteUnits ![GitHub Repo Stars](https://img.shields.io/github/stars/gabrielelana/byte-units) ![GitHub last commit](https://img.shields.io/github/last-commit/gabrielelana/byte-units)](https://github.com/gabrielelana/byte-units) - A library to parse, format and convert byte units in binary and metric systems.
* [DecimalObject ![GitHub Repo Stars](https://img.shields.io/github/stars/spryker/decimal-object) ![GitHub last commit](https://img.shields.io/github/last-commit/spryker/decimal-object)](https://github.com/spryker/decimal-object) - A value object to handle decimals/floats easily and more precisely.
* [IP ![GitHub Repo Stars](https://img.shields.io/github/stars/darsyn/ip) ![GitHub last commit](https://img.shields.io/github/last-commit/darsyn/ip)](https://github.com/darsyn/ip) - An immutable value object for working with IPv4 and IPv6 addresses.
* [LibPhoneNumber for PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/giggsey/libphonenumber-for-php) ![GitHub last commit](https://img.shields.io/github/last-commit/giggsey/libphonenumber-for-php)](https://github.com/giggsey/libphonenumber-for-php) - A PHP implementation of Google's phone number handling library.
* [PHP Conversion ![GitHub Repo Stars](https://img.shields.io/github/stars/Crisu83/php-conversion) ![GitHub last commit](https://img.shields.io/github/last-commit/Crisu83/php-conversion)](https://github.com/Crisu83/php-conversion) - Another library for converting between units of measure.
* [PHP Units of Measure ![GitHub Repo Stars](https://img.shields.io/github/stars/triplepoint/php-units-of-measure) ![GitHub last commit](https://img.shields.io/github/last-commit/triplepoint/php-units-of-measure)](https://github.com/triplepoint/php-units-of-measure) - A library for converting between units of measure.
* [MathPHP ![GitHub Repo Stars](https://img.shields.io/github/stars/markrogoyski/math-php) ![GitHub last commit](https://img.shields.io/github/last-commit/markrogoyski/math-php)](https://github.com/markrogoyski/math-php) - A math library for PHP. 

### Filtering and Validation
*Libraries for filtering and validating data.*

* [Assert ![GitHub Repo Stars](https://img.shields.io/github/stars/beberlei/assert) ![GitHub last commit](https://img.shields.io/github/last-commit/beberlei/assert)](https://github.com/beberlei/assert) - A validation library with a rich set of assertions. Supports assertion chaining and lazy assertions.
* [Aura.Filter ![GitHub Repo Stars](https://img.shields.io/github/stars/auraphp/Aura.Filter) ![GitHub last commit](https://img.shields.io/github/last-commit/auraphp/Aura.Filter)](https://github.com/auraphp/Aura.Filter) - Provides tools to validate and sanitize objects and arrays.
* [CakePHP Validation ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/validation) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/validation)](https://github.com/cakephp/validation) - Another validation library.
* [Filterus ![GitHub Repo Stars](https://img.shields.io/github/stars/ircmaxell/filterus) ![GitHub last commit](https://img.shields.io/github/last-commit/ircmaxell/filterus)](https://github.com/ircmaxell/filterus) - A simple PHP filtering library.
* [ISO-codes ![GitHub Repo Stars](https://img.shields.io/github/stars/ronanguilloux/IsoCodes) ![GitHub last commit](https://img.shields.io/github/last-commit/ronanguilloux/IsoCodes)](https://github.com/ronanguilloux/IsoCodes) - A library for validating inputs according standards from ISO, International Finance, Public Administrations, GS1, Book Industry, Phone numbers & Zipcodes for many countries.
* [JSON Schema ![GitHub Repo Stars](https://img.shields.io/github/stars/justinrainbow/json-schema) ![GitHub last commit](https://img.shields.io/github/last-commit/justinrainbow/json-schema)](https://github.com/justinrainbow/json-schema) - A [JSON Schema](https://json-schema.org/) validation library.
* [MetaYaml ![GitHub Repo Stars](https://img.shields.io/github/stars/romaricdrigon/MetaYaml) ![GitHub last commit](https://img.shields.io/github/last-commit/romaricdrigon/MetaYaml)](https://github.com/romaricdrigon/MetaYaml) - A schema validation library that supports YAML, JSON and XML.
* [Respect Validation ![GitHub Repo Stars](https://img.shields.io/github/stars/Respect/Validation) ![GitHub last commit](https://img.shields.io/github/last-commit/Respect/Validation)](https://github.com/Respect/Validation) - A simple validation library.
* [Upload ![GitHub Repo Stars](https://img.shields.io/github/stars/brandonsavage/Upload) ![GitHub last commit](https://img.shields.io/github/last-commit/brandonsavage/Upload)](https://github.com/brandonsavage/Upload) - A library for handling file uploads and validation.
* [Valitron ![GitHub Repo Stars](https://img.shields.io/github/stars/vlucas/valitron) ![GitHub last commit](https://img.shields.io/github/last-commit/vlucas/valitron)](https://github.com/vlucas/valitron) - Another validation library.
* [Volan ![GitHub Repo Stars](https://img.shields.io/github/stars/serkin/Volan) ![GitHub last commit](https://img.shields.io/github/last-commit/serkin/Volan)](https://github.com/serkin/Volan) - Another simplified validation library.

### API
*Libraries and web tools for developing APIs.*

* [API Platform](https://api-platform.com ) - Expose in minutes an hypermedia REST API that embraces JSON-LD, Hydra format.
* [Laminas API Tool Skeleton ![GitHub Repo Stars](https://img.shields.io/github/stars/laminas-api-tools/api-tools-skeleton) ![GitHub last commit](https://img.shields.io/github/last-commit/laminas-api-tools/api-tools-skeleton)](https://github.com/laminas-api-tools/api-tools-skeleton) - An API builder built with the Laminas Framework.
* [Drest ![GitHub Repo Stars](https://img.shields.io/github/stars/leedavis81/drest) ![GitHub last commit](https://img.shields.io/github/last-commit/leedavis81/drest)](https://github.com/leedavis81/drest) - A library for exposing Doctrine entities as REST resource endpoints.
* [HAL ![GitHub Repo Stars](https://img.shields.io/github/stars/blongden/hal) ![GitHub last commit](https://img.shields.io/github/last-commit/blongden/hal)](https://github.com/blongden/hal) - A Hypertext Application Language (HAL) builder library.
* [Hateoas ![GitHub Repo Stars](https://img.shields.io/github/stars/willdurand/Hateoas) ![GitHub last commit](https://img.shields.io/github/last-commit/willdurand/Hateoas)](https://github.com/willdurand/Hateoas) - A HATEOAS REST web service library.
* [Jane ![GitHub Repo Stars](https://img.shields.io/github/stars/janephp/janephp) ![GitHub last commit](https://img.shields.io/github/last-commit/janephp/janephp)](https://github.com/janephp/janephp/) - An OpenApi client generator with validation support.
* [Negotiation ![GitHub Repo Stars](https://img.shields.io/github/stars/willdurand/Negotiation) ![GitHub last commit](https://img.shields.io/github/last-commit/willdurand/Negotiation)](https://github.com/willdurand/Negotiation) - A content negotiation library.
* [Restler ![GitHub Repo Stars](https://img.shields.io/github/stars/Luracast/Restler) ![GitHub last commit](https://img.shields.io/github/last-commit/Luracast/Restler)](https://github.com/Luracast/Restler) - A lightweight framework to expose PHP methods as RESTful web API.
* [wsdl2phpgenerator ![GitHub Repo Stars](https://img.shields.io/github/stars/wsdl2phpgenerator/wsdl2phpgenerator) ![GitHub last commit](https://img.shields.io/github/last-commit/wsdl2phpgenerator/wsdl2phpgenerator)](https://github.com/wsdl2phpgenerator/wsdl2phpgenerator) - A tool to generate PHP classes from SOAP WSDL files.

### Caching and Locking
*Libraries for caching data and acquiring locks.*

* [APIx Cache ![GitHub Repo Stars](https://img.shields.io/github/stars/apix/cache) ![GitHub last commit](https://img.shields.io/github/last-commit/apix/cache)](https://github.com/apix/cache) - A thin PSR-6 cache wrapper to various caching backends emphasising cache tagging and indexing.
* [CacheTool ![GitHub Repo Stars](https://img.shields.io/github/stars/gordalina/cachetool) ![GitHub last commit](https://img.shields.io/github/last-commit/gordalina/cachetool)](https://github.com/gordalina/cachetool) - A tool to clear APC/opcode caches from the command line.
* [CakePHP Cache ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/cache) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/cache)](https://github.com/cakephp/cache) - A caching library.
* [Doctrine Cache ![GitHub Repo Stars](https://img.shields.io/github/stars/doctrine/cache) ![GitHub last commit](https://img.shields.io/github/last-commit/doctrine/cache)](https://github.com/doctrine/cache) - A caching library.
* [Metaphore ![GitHub Repo Stars](https://img.shields.io/github/stars/sobstel/metaphore) ![GitHub last commit](https://img.shields.io/github/last-commit/sobstel/metaphore)](https://github.com/sobstel/metaphore) - Cache slam defense using a semaphore to prevent dogpile effect.
* [Stash ![GitHub Repo Stars](https://img.shields.io/github/stars/tedious/Stash) ![GitHub last commit](https://img.shields.io/github/last-commit/tedious/Stash)](https://github.com/tedious/Stash) - Another library for caching.
* [Laminas Cache ![GitHub Repo Stars](https://img.shields.io/github/stars/laminas/laminas-cache) ![GitHub last commit](https://img.shields.io/github/last-commit/laminas/laminas-cache)](https://github.com/laminas/laminas-cache) - Another caching library.
* [Lock ![GitHub Repo Stars](https://img.shields.io/github/stars/php-lock/lock) ![GitHub last commit](https://img.shields.io/github/last-commit/php-lock/lock)](https://github.com/php-lock/lock) - A lock library to provide exclusive execution.

### Data Structure and Storage
*Libraries that implement data structure or storage techniques.*

* [CakePHP Collection ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/collection) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/collection)](https://github.com/cakephp/collection) - A simple collections library.
* [Fractal ![GitHub Repo Stars](https://img.shields.io/github/stars/thephpleague/fractal) ![GitHub last commit](https://img.shields.io/github/last-commit/thephpleague/fractal)](https://github.com/thephpleague/fractal) - A library for converting complex data structures to JSON output.
* [Ginq ![GitHub Repo Stars](https://img.shields.io/github/stars/akanehara/ginq) ![GitHub last commit](https://img.shields.io/github/last-commit/akanehara/ginq)](https://github.com/akanehara/ginq) - Another PHP library based on .NET's LINQ.
* [JsonMapper ![GitHub Repo Stars](https://img.shields.io/github/stars/cweiske/jsonmapper) ![GitHub last commit](https://img.shields.io/github/last-commit/cweiske/jsonmapper)](https://github.com/cweiske/jsonmapper) - A library that maps nested JSON structures onto PHP classes.
* [JSON Machine ![GitHub Repo Stars](https://img.shields.io/github/stars/halaxa/json-machine) ![GitHub last commit](https://img.shields.io/github/last-commit/halaxa/json-machine)](https://github.com/halaxa/json-machine) - Provides iteration over huge JSONs using simple `foreach`
* [Knapsack ![GitHub Repo Stars](https://img.shields.io/github/stars/DusanKasan/Knapsack) ![GitHub last commit](https://img.shields.io/github/last-commit/DusanKasan/Knapsack)](https://github.com/DusanKasan/Knapsack) - Collection library inspired by Clojure's sequences.
* [msgpack.php ![GitHub Repo Stars](https://img.shields.io/github/stars/rybakit/msgpack.php) ![GitHub last commit](https://img.shields.io/github/last-commit/rybakit/msgpack.php)](https://github.com/rybakit/msgpack.php) - A pure PHP implementation of the [MessagePack](https://msgpack.org/) serialization format.
* [PINQ ![GitHub Repo Stars](https://img.shields.io/github/stars/TimeToogo/Pinq) ![GitHub last commit](https://img.shields.io/github/last-commit/TimeToogo/Pinq)](https://github.com/TimeToogo/Pinq) - A PHP library based on .NET's LINQ (Language Integrated Query).
* [Serializer ![GitHub Repo Stars](https://img.shields.io/github/stars/schmittjoh/serializer) ![GitHub last commit](https://img.shields.io/github/last-commit/schmittjoh/serializer)](https://github.com/schmittjoh/serializer) - A library for serialising and de-serialising data.
* [YaLinqo ![GitHub Repo Stars](https://img.shields.io/github/stars/Athari/YaLinqo) ![GitHub last commit](https://img.shields.io/github/last-commit/Athari/YaLinqo)](https://github.com/Athari/YaLinqo) - Yet Another LINQ to Objects for PHP.
* [Laminas Serializer ![GitHub Repo Stars](https://img.shields.io/github/stars/laminas/laminas-serializer) ![GitHub last commit](https://img.shields.io/github/last-commit/laminas/laminas-serializer)](https://github.com/laminas/laminas-serializer) - Another library for serialising and de-serialising data.

### Notifications
*Libraries for working with notification software.*

* [JoliNotif ![GitHub Repo Stars](https://img.shields.io/github/stars/jolicode/JoliNotif) ![GitHub last commit](https://img.shields.io/github/last-commit/jolicode/JoliNotif)](https://github.com/jolicode/JoliNotif) - A cross-platform library for desktop notification (support for Growl, notify-send, toaster, etc)
* [Notification Pusher ![GitHub Repo Stars](https://img.shields.io/github/stars/Ph3nol/NotificationPusher) ![GitHub last commit](https://img.shields.io/github/last-commit/Ph3nol/NotificationPusher)](https://github.com/Ph3nol/NotificationPusher) - A standalone library for device push notifications.
* [Notificato ![GitHub Repo Stars](https://img.shields.io/github/stars/mac-cain13/notificato) ![GitHub last commit](https://img.shields.io/github/last-commit/mac-cain13/notificato)](https://github.com/mac-cain13/notificato) - A library for handling push notifications.
* [Notificator ![GitHub Repo Stars](https://img.shields.io/github/stars/namshi/notificator) ![GitHub last commit](https://img.shields.io/github/last-commit/namshi/notificator)](https://github.com/namshi/notificator) - A lightweight notification library.
* [Php-pushwoosh ![GitHub Repo Stars](https://img.shields.io/github/stars/gomoob/php-pushwoosh) ![GitHub last commit](https://img.shields.io/github/last-commit/gomoob/php-pushwoosh)](https://github.com/gomoob/php-pushwoosh) - A PHP Library to easily send push notifications with the Pushwoosh REST Web Services.

### Deployment
*Libraries for project deployment.*

* [Deployer ![GitHub Repo Stars](https://img.shields.io/github/stars/deployphp/deployer) ![GitHub last commit](https://img.shields.io/github/last-commit/deployphp/deployer)](https://github.com/deployphp/deployer) - A deployment tool.
* [Envoy ![GitHub Repo Stars](https://img.shields.io/github/stars/laravel/envoy) ![GitHub last commit](https://img.shields.io/github/last-commit/laravel/envoy)](https://github.com/laravel/envoy) - A tool to run SSH tasks with PHP.
* [Rocketeer ![GitHub Repo Stars](https://img.shields.io/github/stars/rocketeers/rocketeer) ![GitHub last commit](https://img.shields.io/github/last-commit/rocketeers/rocketeer)](https://github.com/rocketeers/rocketeer) - A fast and easy deployer for the PHP world.

### Internationalisation and Localisation
*Libraries for Internationalization (I18n) and Localization (L10n).*

* [Aura.Intl ![GitHub Repo Stars](https://img.shields.io/github/stars/auraphp/Aura.Intl) ![GitHub last commit](https://img.shields.io/github/last-commit/auraphp/Aura.Intl)](https://github.com/auraphp/Aura.Intl) - Provides internationalization (I18N) tools, specifically package-oriented per-locale message translation.
* [CakePHP I18n ![GitHub Repo Stars](https://img.shields.io/github/stars/cakephp/i18n) ![GitHub last commit](https://img.shields.io/github/last-commit/cakephp/i18n)](https://github.com/cakephp/i18n) - Message translation and localization for dates and numbers.

### Serverless
*Libraries and tools to help build serverless web applications.*

* [Bref](https://bref.sh/) - Serverless PHP on AWS Lambda.
* [OpenWhisk](https://openwhisk.apache.org/) - An open-source serverless cloud platform.
* [Serverless Framework](https://www.serverless.com/framework) - An open-source framework for building serverless applications.
* [Laravel Vapor](https://vapor.laravel.com/) - A serverless deployment platform for Laravel, powered by AWS.

## Configuration
*Libraries and tools for configuration.*

* [PHP Dotenv ![GitHub Repo Stars](https://img.shields.io/github/stars/vlucas/phpdotenv) ![GitHub last commit](https://img.shields.io/github/last-commit/vlucas/phpdotenv)](https://github.com/vlucas/phpdotenv) - Parse and load environment variables from `.env` files.
* [Symfony Dotenv ![GitHub Repo Stars](https://img.shields.io/github/stars/symfony/dotenv) ![GitHub last commit](https://img.shields.io/github/last-commit/symfony/dotenv)](https://github.com/symfony/dotenv)- Parse and load environment variables from `.env` files.
* [Yo! Symfony TOML ![GitHub Repo Stars](https://img.shields.io/github/stars/yosymfony/toml) ![GitHub last commit](https://img.shields.io/github/last-commit/yosymfony/toml)](https://github.com/yosymfony/toml) - A PHP parser for [TOML ![GitHub Repo Stars](https://img.shields.io/github/stars/toml-lang/toml) ![GitHub last commit](https://img.shields.io/github/last-commit/toml-lang/toml)](https://github.com/toml-lang/toml). 

### Third Party APIs
*Libraries for accessing third party APIs.*

* [Amazon Web Service SDK ![GitHub Repo Stars](https://img.shields.io/github/stars/aws/aws-sdk-php) ![GitHub last commit](https://img.shields.io/github/last-commit/aws/aws-sdk-php)](https://github.com/aws/aws-sdk-php) - The official PHP AWS SDK library.
* [AsyncAWS](https://async-aws.com/) - An unofficial asynchronous PHP AWS SDK.
* [Campaign Monitor](https://campaignmonitor.github.io/createsend-php/) - The official Campaign Monitor PHP library.
* [Github ![GitHub Repo Stars](https://img.shields.io/github/stars/KnpLabs/php-github-api) ![GitHub last commit](https://img.shields.io/github/last-commit/KnpLabs/php-github-api)](https://github.com/KnpLabs/php-github-api) - A library to interface with the Github API.
* [Mailgun ![GitHub Repo Stars](https://img.shields.io/github/stars/mailgun/mailgun-php) ![GitHub last commit](https://img.shields.io/github/last-commit/mailgun/mailgun-php)](https://github.com/mailgun/mailgun-php) The official Mailgun PHP API.
* [Square ![GitHub Repo Stars](https://img.shields.io/github/stars/square/connect-php-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/square/connect-php-sdk)](https://github.com/square/connect-php-sdk) - The official Square PHP SDK for payments and other Square APIs.
* [Stripe ![GitHub Repo Stars](https://img.shields.io/github/stars/stripe/stripe-php) ![GitHub last commit](https://img.shields.io/github/last-commit/stripe/stripe-php)](https://github.com/stripe/stripe-php) - The official Stripe PHP library.
* [Twilio ![GitHub Repo Stars](https://img.shields.io/github/stars/twilio/twilio-php) ![GitHub last commit](https://img.shields.io/github/last-commit/twilio/twilio-php)](https://github.com/twilio/twilio-php) - The official Twilio PHP REST API.

### Extensions
*Libraries to help build PHP extensions.*

* [PHP CPP](https://www.php-cpp.com/) - A C++ library for developing PHP extensions.
* [Zephir ![GitHub Repo Stars](https://img.shields.io/github/stars/zephir-lang/zephir) ![GitHub last commit](https://img.shields.io/github/last-commit/zephir-lang/zephir)](https://github.com/zephir-lang/zephir ) - A compiled language between PHP and C++ for developing PHP extensions.

### Miscellaneous
*Useful libraries or utilities that don't fit into the categories above.*

* [Annotations ![GitHub Repo Stars](https://img.shields.io/github/stars/doctrine/annotations) ![GitHub last commit](https://img.shields.io/github/last-commit/doctrine/annotations)](https://github.com/doctrine/annotations) - An annotation library (part of Doctrine).
* [BotMan ![GitHub Repo Stars](https://img.shields.io/github/stars/botman/botman) ![GitHub last commit](https://img.shields.io/github/last-commit/botman/botman)](https://github.com/botman/botman) - A framework agnostic PHP library to build cross-platform chat bots.
* [ClassPreloader ![GitHub Repo Stars](https://img.shields.io/github/stars/ClassPreloader/ClassPreloader) ![GitHub last commit](https://img.shields.io/github/last-commit/ClassPreloader/ClassPreloader)](https://github.com/ClassPreloader/ClassPreloader) - A library for optimising autoloading.
* [Hprose-PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/hprose/hprose-php) ![GitHub last commit](https://img.shields.io/github/last-commit/hprose/hprose-php)](https://github.com/hprose/hprose-php) - A cross-language RPC.
* [noCAPTCHA ![GitHub Repo Stars](https://img.shields.io/github/stars/ARCANEDEV/noCAPTCHA) ![GitHub last commit](https://img.shields.io/github/last-commit/ARCANEDEV/noCAPTCHA)](https://github.com/ARCANEDEV/noCAPTCHA) - Helper for Google's noCAPTCHA (reCAPTCHA).
* [Pagerfanta ![GitHub Repo Stars](https://img.shields.io/github/stars/whiteoctober/Pagerfanta) ![GitHub last commit](https://img.shields.io/github/last-commit/whiteoctober/Pagerfanta)](https://github.com/whiteoctober/Pagerfanta) - A pagination library.
* [Safe ![GitHub Repo Stars](https://img.shields.io/github/stars/thecodingmachine/safe) ![GitHub last commit](https://img.shields.io/github/last-commit/thecodingmachine/safe)](https://github.com/thecodingmachine/safe) - All PHP functions, rewritten to throw exceptions instead of returning false.
* [SuperClosure ![GitHub Repo Stars](https://img.shields.io/github/stars/jeremeamia/super_closure) ![GitHub last commit](https://img.shields.io/github/last-commit/jeremeamia/super_closure)](https://github.com/jeremeamia/super_closure) - A library that allows Closures to be serialized.

# Software
*Software for creating a development environment.*

### PHP Installation
*Tools to help install and manage PHP on your computer.*

* [Brew PHP Switcher ![GitHub Repo Stars](https://img.shields.io/github/stars/philcook/brew-php-switcher) ![GitHub last commit](https://img.shields.io/github/last-commit/philcook/brew-php-switcher)](https://github.com/philcook/brew-php-switcher) - Brew PHP switcher.
* [HomeBrew](https://brew.sh/) - A package manager for OSX.
* [Laravel Valet](https://laravel.com/docs/master/valet) - A development environment for macOS.
* [PHP Brew ![GitHub Repo Stars](https://img.shields.io/github/stars/phpbrew/phpbrew) ![GitHub last commit](https://img.shields.io/github/last-commit/phpbrew/phpbrew)](https://github.com/phpbrew/phpbrew) - A PHP version manager and installer.
* [PHP Build ![GitHub Repo Stars](https://img.shields.io/github/stars/php-build/php-build) ![GitHub last commit](https://img.shields.io/github/last-commit/php-build/php-build)](https://github.com/php-build/php-build) - Another PHP version installer.
* [PHP OSX](https://php-osx.liip.ch/) - A PHP installer for OSX.

### Development Environment
*Software and tools for creating and sharing a development environment.*

* [Ansible](https://www.ansible.com/) - A radically simple orchestration framework.
* [Docker](https://www.docker.com/) - A containerization platform.
* [Docker PHP Extension Installer ![GitHub Repo Stars](https://img.shields.io/github/stars/mlocati/docker-php-extension-installer) ![GitHub last commit](https://img.shields.io/github/last-commit/mlocati/docker-php-extension-installer)](https://github.com/mlocati/docker-php-extension-installer) - Easily install PHP extensions in Docker containers.
* [Expose ![GitHub Repo Stars](https://img.shields.io/github/stars/beyondcode/expose) ![GitHub last commit](https://img.shields.io/github/last-commit/beyondcode/expose)](https://github.com/beyondcode/expose) - An open source PHP tunneling service.
* [Lando](https://lando.dev/) - Push-button development environments.
* [Laravel Homestead](https://laravel.com/docs/master/homestead) - A local development environment for Laravel. 
* [Laradock](http://laradock.io/) - A full PHP development environment based on Docker.
* [Puppet](https://puppet.com/) - A server automation framework and application.
* [Takeout ![GitHub Repo Stars](https://img.shields.io/github/stars/tighten/takeout) ![GitHub last commit](https://img.shields.io/github/last-commit/tighten/takeout)](https://github.com/tighten/takeout) - A Docker-based development-only dependency manager.
* [Vagrant](https://www.vagrantup.com/) - A portable development environment utility.

### Virtual Machines
*Alternative PHP virtual machines.*

* [Hack](https://hacklang.org/) - A programming language for HHVM.
* [HHVM ![GitHub Repo Stars](https://img.shields.io/github/stars/facebook/hhvm) ![GitHub last commit](https://img.shields.io/github/last-commit/facebook/hhvm)](https://github.com/facebook/hhvm) - A Virtual Machine, Runtime and JIT for PHP by Facebook.
* [PeachPie ![GitHub Repo Stars](https://img.shields.io/github/stars/peachpiecompiler/peachpie) ![GitHub last commit](https://img.shields.io/github/last-commit/peachpiecompiler/peachpie)](https://github.com/peachpiecompiler/peachpie) - PHP compiler and runtime for .NET and .NET Core.

### Text Editors and IDEs
*Text Editors and Integrated Development Environments (IDE) with support for PHP.*

* [Eclipse for PHP Developers](https://www.eclipse.org/downloads/) - A PHP IDE based on the Eclipse platform.
* [Apache NetBeans](https://netbeans.apache.org/) - An IDE with support for PHP and HTML5.
* [PhpStorm](https://www.jetbrains.com/phpstorm/) - A commercial PHP IDE.
* [VS Code](https://code.visualstudio.com/) - An open source code editor.

### Web Applications
*Web-based applications and tools.*

* [3V4L](https://3v4l.org/) - An online PHP & HHVM shell.
* [Adminer](https://www.adminer.org/) - Database management in a single PHP file.
* [Cachet ![GitHub Repo Stars](https://img.shields.io/github/stars/cachethq/cachet) ![GitHub last commit](https://img.shields.io/github/last-commit/cachethq/cachet)](https://github.com/cachethq/cachet) - The open source status page system.
* [DBV ![GitHub Repo Stars](https://img.shields.io/github/stars/victorstanciu/dbv) ![GitHub last commit](https://img.shields.io/github/last-commit/victorstanciu/dbv)](https://github.com/victorstanciu/dbv) - A database version control application.
* [Lychee ![GitHub Repo Stars](https://img.shields.io/github/stars/electerious/Lychee) ![GitHub last commit](https://img.shields.io/github/last-commit/electerious/Lychee)](https://github.com/electerious/Lychee) - An easy to use and great looking photo-management-system.
* [MailCatcher ![GitHub Repo Stars](https://img.shields.io/github/stars/sj26/mailcatcher) ![GitHub last commit](https://img.shields.io/github/last-commit/sj26/mailcatcher)](https://github.com/sj26/mailcatcher) - A web tool for capturing and viewing emails.
* [phpMyAdmin ![GitHub Repo Stars](https://img.shields.io/github/stars/phpmyadmin/phpmyadmin) ![GitHub last commit](https://img.shields.io/github/last-commit/phpmyadmin/phpmyadmin)](https://github.com/phpmyadmin/phpmyadmin) - A web interface for MySQL/MariaDB.
* [PHP Queue ![GitHub Repo Stars](https://img.shields.io/github/stars/CoderKungfu/php-queue) ![GitHub last commit](https://img.shields.io/github/last-commit/CoderKungfu/php-queue)](https://github.com/CoderKungfu/php-queue) - An application for managing queueing backends.
* [phpRedisAdmin ![GitHub Repo Stars](https://img.shields.io/github/stars/ErikDubbelboer/phpRedisAdmin) ![GitHub last commit](https://img.shields.io/github/last-commit/ErikDubbelboer/phpRedisAdmin)](https://github.com/ErikDubbelboer/phpRedisAdmin) - A simple web interface to manage [Redis](https://redis.io/) databases.
* [PHPSandbox](https://phpsandbox.io) - An online IDE for PHP in the browser.

### Infrastructure
*Infrastructure for providing PHP applications and services.*

* [appserver.io ![GitHub Repo Stars](https://img.shields.io/github/stars/appserver-io/appserver) ![GitHub last commit](https://img.shields.io/github/last-commit/appserver-io/appserver)](https://github.com/appserver-io/appserver) - A multithreaded application server for PHP, written in PHP.
* [php-pm ![GitHub Repo Stars](https://img.shields.io/github/stars/php-pm/php-pm) ![GitHub last commit](https://img.shields.io/github/last-commit/php-pm/php-pm)](https://github.com/php-pm/php-pm) - A process manager, supercharger and load balancer for PHP applications.
* [RoadRunner ![GitHub Repo Stars](https://img.shields.io/github/stars/roadrunner-server/roadrunner) ![GitHub last commit](https://img.shields.io/github/last-commit/roadrunner-server/roadrunner)](https://github.com/roadrunner-server/roadrunner) - High-performance PHP application server, load-balancer and process manager.

# Resources
Various resources, such as books, websites and articles, for improving your PHP development skills and knowledge.

### PHP Websites
*Useful PHP-related websites.*

* [libs.garden: PHP](https://libs.garden/php) - An overview of fastest growing PHP libraries.
* [Nomad PHP](https://nomadphp.com/) - A online PHP learning resource.
* [Laravel News](https://laravel-news.com/) - The official Laravel blog.
* [PHP Annotated Monthly](https://blog.jetbrains.com/phpstorm/tag/php-annotated-monthly/) - A monthly digest of PHP news.
* [PHP Best Practices](https://phpbestpractices.org/) - A PHP best practice guide.
* [PHP FIG](https://www.php-fig.org/) - The PHP Framework Interoperability Group.
* [PHP Package Development Standards](http://php-pds.com) - Package development standards for PHP.
* [PHP School](https://www.phpschool.io/) - Open Source Learning for PHP.
* [PHP Security](https://phpsecurity.readthedocs.io/en/latest/index.html) - A guide to PHP security.
* [PHP The Right Way](https://phptherightway.com/) - A PHP best practice quick reference guide.
* [PHP UG](https://php.ug) - A website to help people locate their nearest PHP user group (UG).
* [PHP Versions](http://phpversions.info/) - Lists which versions of PHP are available on several popular web hosts.
* [PHP Watch](https://php.watch/) - PHP articles, news, upcoming changes, RFCs and more.
* [PHP Weekly](https://www.phpweekly.com/archive.html) - A weekly PHP newsletter.
* [Seven PHP](https://7php.com/) - A website that interviews members of the PHP community.

### PHP Books
*Fantastic PHP-related books.*

* [Domain-Driven Design in PHP](https://leanpub.com/ddd-in-php) - Real examples written in PHP showcasing DDD Architectural Styles.
* [Functional Programming in PHP](https://www.functionalphp.com/) - This book will show you how to leverage these new PHP5.3+ features by understanding functional programming principles
* [Grumpy PHPUnit](https://leanpub.com/grumpy-phpunit) - A book about unit testing with PHPUnit by Chris Hartjes.
* [Mastering Object-Orientated PHP](https://www.brandonsavage.net/) - A book about object-orientated PHP by Brandon Savage.
* [Modern PHP New Features and Good Practices](https://www.oreilly.com/library/view/~/9781491905173/) - A book about new PHP features and best practices by Josh Lockhart.
* [Modernizing Legacy Applications in PHP](https://leanpub.com/mlaphp) - A book about modernizing legacy PHP applications by Paul M. Jones.
* [PHP 7 Upgrade Guide](https://leanpub.com/php7) - An ebook covering all of the features and changes in PHP 7 by Colin O'Dell.
* [PHP Pandas](https://daylerees.com/php-pandas/) - A book about learning to write PHP by Dayle Rees.
* [Scaling PHP Applications](https://www.scalingphpbook.com) - An ebook about scaling PHP applications by Steve Corona.
* [Securing PHP: Core Concepts](https://leanpub.com/securingphp-coreconcepts) - A book about common security terms and practices for PHP by Chris Cornutt.
* [Signaling PHP](https://leanpub.com/signalingphp) - A book about catching PCNTL signals in CLI scripts by Cal Evans.
* [The Grumpy Programmer's Guide to Building Testable PHP Applications](https://leanpub.com/grumpy-testing) - A book about building testing PHP applications by Chris Hartjes.
* [XML Parsing with PHP](https://www.phparch.com/books/xml-parsing-with-php/) - This book covers parsing and validating XML documents, leveraging XPath expressions, and working with namespaces as well as how to create and modify XML files programmatically.

### PHP Videos
*Fantastic PHP-related videos.*

* [Nomad PHP Lightning Talks](https://www.youtube.com/c/nomadphp) - 10 to 15 minute Lightning Talks by PHP community members.
* [PHP UK Conference](https://www.youtube.com/user/phpukconference/videos) - A collection of videos from the PHP UK Conference.
* [Programming with Anthony](https://www.youtube.com/playlist?list=PLM-218uGSX3DQ3KsB5NJnuOqPqc5CW2kW) - A video series by Anthony Ferrara.
* [Taking PHP Seriously](https://www.infoq.com/presentations/php-history/) - A talk outlining PHP's strengths by Keith Adams of Facebook.
* [Laracasts](https://laracasts.com) - Screencasts about Laravel, Vue JS and more.
* [Laravel YouTube Channel](https://www.youtube.com/channel/UCfO2GiQwb-cwJTb1CuRSkwg) - The official Laravel YouTube channel.
* [SymfonyCasts](https://symfonycasts.com/) - Screencasts and tutorials about PHP and Symfony.

### PHP Podcasts
*Podcasts with a focus on PHP topics.*

* [Laravel Podcast](https://laravelpodcast.com/) - Laravel and PHP development news and discussion.
* [PHP Internals News](https://phpinternals.news) - A podcast about PHP internals.
* [PHP Roundtable](https://phproundtable.com/) - The PHP Roundtable is a casual gathering of developers discussing topics that PHP nerds care about.
* [PHP Town Hall](https://phptownhall.com/) - A casual PHP podcast by Ben Edmunds and Phil Sturgeon.
* [Voices of the ElePHPant](https://voicesoftheelephpant.com/) Interviews with the people that make the PHP community special.

### PHP Newsletters
*PHP-related news directly to your inbox.*

* [PHP Weekly](https://www.phpweekly.com/) - A weekly newsletter about PHP.

### PHP Reading
*PHP-related reading materials.*

* [php[architect]](https://www.phparch.com/magazine/) - A monthly magazine dedicated to PHP.

### PHP Internals Reading
*Reading materials related to the PHP internals or performance.*

* [PHP RFCs](https://wiki.php.net/rfc) - The home of PHP RFCs (Request for Comments).
* [Externals](https://externals.io/) - PHP internal discussions. 
* [PHP RFC Watch](https://php-rfc-watch.beberlei.de/) - Watch the latest PHP [RFCs](https://wiki.php.net/rfc).
* [PHP Internals Book](https://www.phpinternalsbook.com/) - An online book about PHP internals, written by three core developers.
