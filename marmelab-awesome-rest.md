# Awesome REST [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

A collaborative list of great resources about RESTful API architecture, development, test, and performance. Feel free to contribute to this on-going list.

* [Design](#design)
* [Standards](#standards)
* [Clients](#clients)
  * [PHP](#php-clients)
  * [Client-side JavaScript](#javascript-clients)
  * [Node.js](#nodejs-clients)
  * [Ruby](#ruby-clients)
  * [Go](#go-clients)
* [Servers](#servers)
  * [Directly On Top Of A RMDB](#directly-on-top-of-a-rmdb)
  * [Node.js](#nodejs)
  * [PHP](#php)
  * [Symfony2](#symfony2)
  * [Python](#python)
  * [Ruby](#ruby)
  * [Go](#go)
  * [Java](#java)
  * [Haskell](#haskell)
* [Testing](#testing)
  * [Querying](#querying)
  * [Mocking](#mocking)
  * [Public REST APIs To Use In Tests](#public-rest-apis-to-use-in-tests)
* [Documentation](#documentation)
* [API Gateway](#api-gateway)
* [SaaS Tools](#saas-tools)
* [Miscellaneous](#miscellaneous)



## Design

* [Architectural Styles and
the Design of Network-based Software Architectures](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm) - Roy Fielding's dissertation defining REST
* [HTTP API design guide extracted from work on the Heroku Platform API ![GitHub Repo stars](https://img.shields.io/github/stars/interagent/http-api-design) ![GitHub last commit](https://img.shields.io/github/last-commit/interagent/http-api-design)](https://github.com/interagent/http-api-design)
* [Best Practices for Designing a Pragmatic RESTful API](http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)
* [How to design a REST API?](http://blog.octo.com/en/design-a-rest-api/) - Full guide tackling security, pagination, filtering, versioning, partial answers, CORS, etc.
* [Richardson Maturity Model](http://martinfowler.com/articles/richardsonMaturityModel.html) - Explained by Martin Fowler, originally presented by Leonard Richardson at the [QCon 2008](https://www.crummy.com/writing/speaking/2008-QCon/act3.html).
* [Enterprise Integration Using REST](http://martinfowler.com/articles/enterpriseREST.html) - Discusses the constraints and flexibility that you have with nonpublic APIs, and lessons learned from doing large scale RESTful integration across multiple teams.
* [HATEOAS](http://timelessrepo.com/haters-gonna-hateoas) - Clear explanation on what HATEOAS is, and why you should use it.
* [How to GET a cup of coffee](http://www.infoq.com/articles/webber-rest-workflow/)
* [REST API Tutorial](http://www.restapitutorial.com/) - RestApiTutorial.com is dedicated to tracking REST API best practices and making resources available to enable quick reference and self education for the development crafts-person.
* [Microsoft REST API Guidelines ![GitHub Repo stars](https://img.shields.io/github/stars/Microsoft/api-guidelines) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/api-guidelines)](https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#readme) - The Microsoft REST API Guidelines, as a design principle, encourages application developers to have resources accessible to them via a RESTful HTTP interface.
* [API-Security-Checklist ![GitHub Repo stars](https://img.shields.io/github/stars/shieldfy/API-Security-Checklist) ![GitHub last commit](https://img.shields.io/github/last-commit/shieldfy/API-Security-Checklist)](https://github.com/shieldfy/API-Security-Checklist) - Best practices about REST API security

## Standards

* [JSON API](http://jsonapi.org/) - Standard for building APIs in JSON.
* [RAML](http://raml.org/) - Simple and succinct way to describe RESTful API.
* [JSend](http://labs.omniti.com/labs/jsend) - Simple specification that lays down some rules for how JSON responses from web servers should be formatted.
* [OData](http://www.odata.org/) - Open protocol to allow the creation and consumption of queryable and interoperable RESTful APIs. Quite complex.
* [HAL](https://tools.ietf.org/html/draft-kelly-json-hal-06) - Simple format that gives a consistent and easy way to hyperlink between resources in your API (see: [HATEOAS](#hateoas)).
* [JSON-LD](http://json-ld.org/) - Standard for describing Linked Data and hypermedia relations in JSON (W3C).
* [Hydra](http://www.hydra-cg.com/) - Vocabulary for Hypermedia-Driven Web APIs (W3C).
* [Schema.org](http://schema.org) - Collection of schemas describing common data models.
* [OpenAPI](https://openapis.org/) - Formerly known as the Swagger Specification, OpenAPI specifcation is the world’s most popular description format for defining Restful APIs.

## Clients

### PHP Clients

* [Guzzle](http://guzzle.readthedocs.org/en/latest/) - HTTP client and framework for consuming RESTful web services.
* [Buzz ![GitHub Repo stars](https://img.shields.io/github/stars/kriswallsmith/buzz) ![GitHub last commit](https://img.shields.io/github/last-commit/kriswallsmith/buzz)](https://github.com/kriswallsmith/buzz) - Another lightweight HTTP client.
* [unirest for PHP ![GitHub Repo stars](https://img.shields.io/github/stars/Mashape/unirest-php) ![GitHub last commit](https://img.shields.io/github/last-commit/Mashape/unirest-php)](https://github.com/Mashape/unirest-php) - Simplified, lightweight HTTP client library.

### JavaScript Clients

* [restangular ![GitHub Repo stars](https://img.shields.io/github/stars/mgonto/restangular) ![GitHub last commit](https://img.shields.io/github/last-commit/mgonto/restangular)](https://github.com/mgonto/restangular) - AngularJS service to handle REST API properly and easily.
* [restful.js ![GitHub Repo stars](https://img.shields.io/github/stars/marmelab/restful.js) ![GitHub last commit](https://img.shields.io/github/last-commit/marmelab/restful.js)](https://github.com/marmelab/restful.js) - JS client for interacting with server-side RESTful resources.
* [traverson ![GitHub Repo stars](https://img.shields.io/github/stars/basti1302/traverson) ![GitHub last commit](https://img.shields.io/github/last-commit/basti1302/traverson)](https://github.com/basti1302/traverson) - A Hypermedia API/HATEOAS Client for Node.js and the Browser
* [raml-client-generator ![GitHub Repo stars](https://img.shields.io/github/stars/mulesoft/raml-client-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/mulesoft/raml-client-generator)](https://github.com/mulesoft/raml-client-generator) - Generates static client libs for js.

### Node.js Clients

 * [restler ![GitHub Repo stars](https://img.shields.io/github/stars/danwrong/restler) ![GitHub last commit](https://img.shields.io/github/last-commit/danwrong/restler)](https://github.com/danwrong/restler) - REST client library for node.js.
 * [unirest for Node.js ![GitHub Repo stars](https://img.shields.io/github/stars/Mashape/unirest-nodejs) ![GitHub last commit](https://img.shields.io/github/last-commit/Mashape/unirest-nodejs)](https://github.com/Mashape/unirest-nodejs) - Simplified, lightweight HTTP client library.

### Ruby Clients

* [RESTClient ![GitHub Repo stars](https://img.shields.io/github/stars/rest-client/rest-client) ![GitHub last commit](https://img.shields.io/github/last-commit/rest-client/rest-client)](https://github.com/rest-client/rest-client) - Simple HTTP and REST client for Ruby, inspired by microframework syntax for specifying actions.
* [Spyke ![GitHub Repo stars](https://img.shields.io/github/stars/balvig/spyke) ![GitHub last commit](https://img.shields.io/github/last-commit/balvig/spyke)](https://github.com/balvig/spyke) - Interact with REST services in an ActiveRecord-like manner.
* [excon ![GitHub Repo stars](https://img.shields.io/github/stars/excon/excon) ![GitHub last commit](https://img.shields.io/github/last-commit/excon/excon)](https://github.com/excon/excon) - Usable, fast, simple Ruby HTTP 1.1. It works great as a general HTTP(s) client and is particularly well suited to usage in API clients.
* [httparty ![GitHub Repo stars](https://img.shields.io/github/stars/jnunemaker/httparty) ![GitHub last commit](https://img.shields.io/github/last-commit/jnunemaker/httparty)](https://github.com/jnunemaker/httparty) - Makes HTTP fun again!
* [Net::HTTP](http://ruby-doc.org/stdlib/libdoc/net/http/rdoc/Net/HTTP.html) - Net::HTTP provides a rich library which can be used to build HTTP user-agents.
* [raml-ruby-client-generator ![GitHub Repo stars](https://img.shields.io/github/stars/zlx/raml-ruby-client-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/zlx/raml-ruby-client-generator)](https://github.com/zlx/raml-ruby-client-generator) - Auto generate API client from a RAML file.

### Go Clients

* [gopencils ![GitHub Repo stars](https://img.shields.io/github/stars/bndr/gopencils) ![GitHub last commit](https://img.shields.io/github/last-commit/bndr/gopencils)](https://github.com/bndr/gopencils) - Small and simple package to easily consume REST APIs.
* [resty ![GitHub Repo stars](https://img.shields.io/github/stars/go-resty/resty) ![GitHub last commit](https://img.shields.io/github/last-commit/go-resty/resty)](https://github.com/go-resty/resty) - Simple HTTP and REST client for Go inspired by Ruby rest-client.

## Servers

### Directly On Top Of A RMDB

* [postgrest ![GitHub Repo stars](https://img.shields.io/github/stars/begriffs/postgrest) ![GitHub last commit](https://img.shields.io/github/last-commit/begriffs/postgrest)](https://github.com/begriffs/postgrest) - Serve a fully RESTful API directly from an existing PostgreSQL database.
* [MySQL HTTP plugin](http://blog.ulf-wendel.de/2014/mysql-5-7-http-plugin-mysql/) - Simple REST-like / CRUD server for any MySQL database.
* [pREST ![GitHub Repo stars](https://img.shields.io/github/stars/prest/prest) ![GitHub last commit](https://img.shields.io/github/last-commit/prest/prest)](https://github.com/prest/prest) - A fully RESTful API from any existing PostgreSQL database written in Go.

### Node.js

* [node-restify ![GitHub Repo stars](https://img.shields.io/github/stars/restify/node-restify) ![GitHub last commit](https://img.shields.io/github/last-commit/restify/node-restify)](https://github.com/restify/node-restify) - Framework specifically meant for REST API.
* [Sails.js](http://sailsjs.org/) - Node.js Web framework embedding a command to generate automatically a REST API.
* [mers ![GitHub Repo stars](https://img.shields.io/github/stars/jspears/mers) ![GitHub last commit](https://img.shields.io/github/last-commit/jspears/mers)](https://github.com/jspears/mers) - Express service exposing Mongoose finders as RESTful API.
* [Baucis ![GitHub Repo stars](https://img.shields.io/github/stars/wprl/baucis) ![GitHub last commit](https://img.shields.io/github/last-commit/wprl/baucis)](https://github.com/wprl/baucis) - Build scalable REST API based on your Mongoose entities.
* [flatiron/resourceful ![GitHub Repo stars](https://img.shields.io/github/stars/flatiron/resourceful) ![GitHub last commit](https://img.shields.io/github/last-commit/flatiron/resourceful)](https://github.com/flatiron/resourceful) - Isomorphic Resource engine for JavaScript.
* [loopback](http://loopback.io/) - Powerful Node.js framework for creating APIs and easily connecting to backend data sources.
* [Feathers](http://feathersjs.com/) - is a real-time, micro-service web framework that gives you control over your data via RESTful resources, sockets and flexible plug-ins.
* [Expressa ![GitHub Repo stars](https://img.shields.io/github/stars/thomas4019/expressa) ![GitHub last commit](https://img.shields.io/github/last-commit/thomas4019/expressa)](https://github.com/thomas4019/expressa) - Express middleware for creating APIs from JSON schemas with a simple admin editor and permissions model.
* [rest-hapi ![GitHub Repo stars](https://img.shields.io/github/stars/JKHeadley/rest-hapi) ![GitHub last commit](https://img.shields.io/github/last-commit/JKHeadley/rest-hapi)](https://github.com/JKHeadley/rest-hapi) - Generate RESTful API based on mongoose models that supports relational data.
* [Nestjsx/crud ![GitHub Repo stars](https://img.shields.io/github/stars/nestjsx/crud) ![GitHub last commit](https://img.shields.io/github/last-commit/nestjsx/crud)](https://github.com/nestjsx/crud) - Generate CRUD controllers and services for RESTful API with NestJS and TypeORM.

### PHP

* [Microrest ![GitHub Repo stars](https://img.shields.io/github/stars/marmelab/microrest.php) ![GitHub last commit](https://img.shields.io/github/last-commit/marmelab/microrest.php)](https://github.com/marmelab/microrest.php) - Micro-web application providing a REST API on top of any relational database.
* [Negotiation ![GitHub Repo stars](https://img.shields.io/github/stars/willdurand/Negotiation) ![GitHub last commit](https://img.shields.io/github/last-commit/willdurand/Negotiation)](https://github.com/willdurand/Negotiation) - Content negotiation library.
* [Drest ![GitHub Repo stars](https://img.shields.io/github/stars/leedavis81/drest) ![GitHub last commit](https://img.shields.io/github/last-commit/leedavis81/drest)](https://github.com/leedavis81/drest) - Library for exposing Doctrine entities as REST resource endpoints.
* [Restler ![GitHub Repo stars](https://img.shields.io/github/stars/Luracast/Restler) ![GitHub last commit](https://img.shields.io/github/last-commit/Luracast/Restler)](https://github.com/Luracast/Restler) - Lightweight framework to expose PHP methods as RESTful web API.
* [HAL ![GitHub Repo stars](https://img.shields.io/github/stars/blongden/hal) ![GitHub last commit](https://img.shields.io/github/last-commit/blongden/hal)](https://github.com/blongden/hal) - Hypertext Application Language (HAL) builder library.
* [Apigility ![GitHub Repo stars](https://img.shields.io/github/stars/zfcampus/zf-apigility-skeleton) ![GitHub last commit](https://img.shields.io/github/last-commit/zfcampus/zf-apigility-skeleton)](https://github.com/zfcampus/zf-apigility-skeleton) - API builder built with Zend Framework 2.
* [phprest ![GitHub Repo stars](https://img.shields.io/github/stars/phprest/phprest) ![GitHub last commit](https://img.shields.io/github/last-commit/phprest/phprest)](https://github.com/phprest/phprest) - Specialized REST microframework for PHP.
* [Hateoas ![GitHub Repo stars](https://img.shields.io/github/stars/willdurand/Hateoas) ![GitHub last commit](https://img.shields.io/github/last-commit/willdurand/Hateoas)](https://github.com/willdurand/Hateoas) - PHP library to support implementing representations for HATEOAS REST web services.
* [Fusio ![GitHub Repo stars](https://img.shields.io/github/stars/apioo/fusio) ![GitHub last commit](https://img.shields.io/github/last-commit/apioo/fusio)](https://github.com/apioo/fusio) - Open source API management platform.

#### Symfony2

* [REST APIs with Symfony2: the Right Way](http://williamdurand.fr/2012/08/02/rest-apis-with-symfony2-the-right-way/) - Complete guide to build a state-of-the-art REST API with Symfony2 framework.
* [FOSRestBundle ![GitHub Repo stars](https://img.shields.io/github/stars/FriendsOfSymfony/FOSRestBundle) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfSymfony/FOSRestBundle)](https://github.com/FriendsOfSymfony/FOSRestBundle) - Bundle handling view, routing, error handling, etc. for your REST API.
* [stanlemon/rest-bundle ![GitHub Repo stars](https://img.shields.io/github/stars/stanlemon/rest-bundle) ![GitHub last commit](https://img.shields.io/github/last-commit/stanlemon/rest-bundle)](https://github.com/stanlemon/rest-bundle) - Build a REST API based on Doctrine entities using conventions over configuration.
* [lakion/Lionframe](http://lakion.com/lionframe) - Glu between several community libraries to ease API development.
* [BazingaHateoasBundle ![GitHub Repo stars](https://img.shields.io/github/stars/willdurand/BazingaHateoasBundle) ![GitHub last commit](https://img.shields.io/github/last-commit/willdurand/BazingaHateoasBundle)](https://github.com/willdurand/BazingaHateoasBundle) - Integrate the [Hateoas ![GitHub Repo stars](https://img.shields.io/github/stars/willdurand/Hateoas) ![GitHub last commit](https://img.shields.io/github/last-commit/willdurand/Hateoas)](https://github.com/willdurand/Hateoas) library into a Symfony2 application.
* [Symfony REST Edition ![GitHub Repo stars](https://img.shields.io/github/stars/gimler/symfony-rest-edition) ![GitHub last commit](https://img.shields.io/github/last-commit/gimler/symfony-rest-edition)](https://github.com/gimler/symfony-rest-edition) - Start with a Symfony2 application with all REST-friendly bundles pre-configured.
* [NgAdminGeneratorBundle ![GitHub Repo stars](https://img.shields.io/github/stars/marmelab/NgAdminGeneratorBundle) ![GitHub last commit](https://img.shields.io/github/last-commit/marmelab/NgAdminGeneratorBundle)](https://github.com/marmelab/NgAdminGeneratorBundle) - Boostrap ng-admin configuration based on `stanlemon/rest-bundle`.
* [DunglasApiBundle ![GitHub Repo stars](https://img.shields.io/github/stars/dunglas/DunglasApiBundle) ![GitHub last commit](https://img.shields.io/github/last-commit/dunglas/DunglasApiBundle)](https://github.com/dunglas/DunglasApiBundle) - Build a REST API which follow Hydra/JSON-LD specification.
* [API Platform ![GitHub Repo stars](https://img.shields.io/github/stars/api-platform/api-platform) ![GitHub last commit](https://img.shields.io/github/last-commit/api-platform/api-platform)](https://github.com/api-platform/api-platform) - Specialize Symfony edition for the creation of hypermedia REST APIs.
* [NelmioApiDocBundle ![GitHub Repo stars](https://img.shields.io/github/stars/nelmio/NelmioApiDocBundle) ![GitHub last commit](https://img.shields.io/github/last-commit/nelmio/NelmioApiDocBundle)](https://github.com/nelmio/NelmioApiDocBundle) - Generate documentation for your REST API from annotations.

### Python

* [Django REST framework](http://www.django-rest-framework.org/) - Powerful and flexible toolkit that makes it easy to build Web APIs.
* [django-tastypie](http://tastypieapi.org/) - Creating delicious APIs for Django apps.
* [flask-restful](http://flask-restful.readthedocs.org/) - Extension for Flask that adds support for quickly building REST APIs.
* [flask-restless](https://flask-restless.readthedocs.org/en/latest/) - Flask extension for generating ReSTful APIs for database models defined with SQLAlchemy (or Flask-SQLAlchemy).
* [hug](http://www.hug.rest/) - Lightweight and fast API Framework.
* [sandman ![GitHub Repo stars](https://img.shields.io/github/stars/jeffknupp/sandman) ![GitHub last commit](https://img.shields.io/github/last-commit/jeffknupp/sandman)](https://github.com/jeffknupp/sandman) - Automated REST APIs for existing database-driven systems.
* [restless](http://restless.readthedocs.org/en/latest/) - Framework agnostic REST framework based on lessons learned from TastyPie.
* [savory-pie ![GitHub Repo stars](https://img.shields.io/github/stars/RueLaLa/savory-pie) ![GitHub last commit](https://img.shields.io/github/last-commit/RueLaLa/savory-pie)](https://github.com/RueLaLa/savory-pie/) - REST API building library (django, and others).
* [Python Eve](http://python-eve.org/) - Eve is an open source Python REST API framework designed for human beings. It allows to effortlessly build and deploy highly customizable, fully featured RESTful Web Services.
* [Ramses](https://ramses.readthedocs.org/en/stable/) - Makes RAML files executable by generating production-ready APIs from them at runtime.
* [Flask-Potion ![GitHub Repo stars](https://img.shields.io/github/stars/biosustain/potion) ![GitHub last commit](https://img.shields.io/github/last-commit/biosustain/potion)](https://github.com/biosustain/potion) - Flask-Potion is a powerful Flask extension for building RESTful JSON APIs. It also provides several Clients for easier access to the API.
* [apistar ![GitHub Repo stars](https://img.shields.io/github/stars/encode/apistar) ![GitHub last commit](https://img.shields.io/github/last-commit/encode/apistar)](https://github.com/encode/apistar) - A smart Web API framework, designed for Python 3. 
* [Falcon ![GitHub Repo stars](https://img.shields.io/github/stars/falconry/falcon) ![GitHub last commit](https://img.shields.io/github/last-commit/falconry/falcon)](https://github.com/falconry/falcon) - Falcon is a bare-metal Python web API framework for building high-performance microservices, app backends, and higher-level frameworks.
* [FastAPI ![GitHub Repo stars](https://img.shields.io/github/stars/tiangolo/fastapi) ![GitHub last commit](https://img.shields.io/github/last-commit/tiangolo/fastapi)](https://github.com/tiangolo/fastapi) - FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints. With automatic API documentation using Swagger UI and ReDoc, based on OpenAPI and JSON Schema.

### Ruby

* [Grape](http://www.ruby-grape.org) - Opinionated micro-framework for creating REST-like APIs in Ruby.
* [Rails](http://guides.rubyonrails.org/api_app.html) - RailsGuides: Using Rails for API-only applications.

### Go

* [gocrud ![GitHub Repo stars](https://img.shields.io/github/stars/manishrjain/gocrud) ![GitHub last commit](https://img.shields.io/github/last-commit/manishrjain/gocrud)](https://github.com/manishrjain/gocrud): Go library to simplify creating, updating and deleting arbitrary depth structured data — to make building REST services fast and easy.
* [go-json-rest ![GitHub Repo stars](https://img.shields.io/github/stars/ant0ine/go-json-rest) ![GitHub last commit](https://img.shields.io/github/last-commit/ant0ine/go-json-rest)](https://github.com/ant0ine/go-json-rest) - Thin layer on top of `net/http` that helps building RESTful APIs easily.
* [sleepy ![GitHub Repo stars](https://img.shields.io/github/stars/dougblack/sleepy) ![GitHub last commit](https://img.shields.io/github/last-commit/dougblack/sleepy)](https://github.com/dougblack/sleepy) - RESTful micro-framework written in Go.
* [restit ![GitHub Repo stars](https://img.shields.io/github/stars/yookoala/restit) ![GitHub last commit](https://img.shields.io/github/last-commit/yookoala/restit)](https://github.com/yookoala/restit) - Go micro framework to help writing RESTful API integration test.
* [go-relax ![GitHub Repo stars](https://img.shields.io/github/stars/codehack/go-relax) ![GitHub last commit](https://img.shields.io/github/last-commit/codehack/go-relax)](https://github.com/codehack/go-relax) - Framework of pluggable components to build RESTful API's.
* [go-rest ![GitHub Repo stars](https://img.shields.io/github/stars/ungerik/go-rest) ![GitHub last commit](https://img.shields.io/github/last-commit/ungerik/go-rest)](https://github.com/ungerik/go-rest) - Small and evil REST framework for Go.
* [go-restful ![GitHub Repo stars](https://img.shields.io/github/stars/emicklei/go-restful) ![GitHub last commit](https://img.shields.io/github/last-commit/emicklei/go-restful)](https://github.com/emicklei/go-restful) - A declarative highly readable framework for building restful API's.
* [Goat ![GitHub Repo stars](https://img.shields.io/github/stars/bahlo/goat) ![GitHub last commit](https://img.shields.io/github/last-commit/bahlo/goat)](https://github.com/bahlo/goat) - Minimalistic REST API server in Go.
* [Resoursea ![GitHub Repo stars](https://img.shields.io/github/stars/resoursea/api) ![GitHub last commit](https://img.shields.io/github/last-commit/resoursea/api)](https://github.com/resoursea/api) - REST framework for quickly writing resource based services.
* [Zerver ![GitHub Repo stars](https://img.shields.io/github/stars/cosiner/zerver) ![GitHub last commit](https://img.shields.io/github/last-commit/cosiner/zerver)](https://github.com/cosiner/zerver) - Zerver is a expressive, modular, feature completed RESTful framework.

### Java

* [RestExpress ![GitHub Repo stars](https://img.shields.io/github/stars/RestExpress/RestExpress) ![GitHub last commit](https://img.shields.io/github/last-commit/RestExpress/RestExpress)](https://github.com/RestExpress/RestExpress) - Netty-based, highly performant, lightweight, container-less, plugin-extensible, framework that is ideal for microservice architectures.
* [Vertx-Web ![GitHub Repo stars](https://img.shields.io/github/stars/vert-x3/vertx-web) ![GitHub last commit](https://img.shields.io/github/last-commit/vert-x3/vertx-web)](https://github.com/vert-x3/vertx-web) - Vert.x-Web is a set of building blocks for building web applications with Vert.x, a toolkit for building reactive applications on the JVM.
* [Dropwizard ![GitHub Repo stars](https://img.shields.io/github/stars/dropwizard/dropwizard) ![GitHub last commit](https://img.shields.io/github/last-commit/dropwizard/dropwizard)](https://github.com/dropwizard/dropwizard) - A framework for developing ops-friendly, high-performance, RESTful web services.

### Scala

* [Chaos ![GitHub Repo stars](https://img.shields.io/github/stars/mesosphere/chaos) ![GitHub last commit](https://img.shields.io/github/last-commit/mesosphere/chaos)](https://github.com/mesosphere/chaos) - A lightweight framework for writing REST services in Scala.


### Haskell
* [Rest for Haskell ![GitHub Repo stars](https://img.shields.io/github/stars/silkapp/rest) ![GitHub last commit](https://img.shields.io/github/last-commit/silkapp/rest)](https://github.com/silkapp/rest) - This package allows you to create REST APIs in Haskell. These APIs can be run in different web frameworks. They can also be used to automatically generate documentation as well as client libraries.

## Testing

### Querying

* [httpie ![GitHub Repo stars](https://img.shields.io/github/stars/jkbrzt/httpie) ![GitHub last commit](https://img.shields.io/github/last-commit/jkbrzt/httpie)](https://github.com/jkbrzt/httpie) - Command line HTTP client, far more dev-friendly than `curl`.
* [Postman REST Client](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm) - Chrome extension essential to test manually REST API.
* [resty ![GitHub Repo stars](https://img.shields.io/github/stars/micha/resty) ![GitHub last commit](https://img.shields.io/github/last-commit/micha/resty)](https://github.com/micha/resty) - Little command line REST client that you can use in pipelines (bash or zsh).
* [jq ![GitHub Repo stars](https://img.shields.io/github/stars/stedolan/jq) ![GitHub last commit](https://img.shields.io/github/last-commit/stedolan/jq)](https://github.com/stedolan/jq) - Command line JSON processor, to use in combination with a command-line HTTP client like cURL.
* [HttpMaster](http://www.httpmaster.net) - GUI tool for testing REST APIs and services. Windows OS only.
* [Http-console ![GitHub Repo stars](https://img.shields.io/github/stars/cloudhead/http-console) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudhead/http-console)](https://github.com/cloudhead/http-console) - Command line interface for HTTP that let you *speak HTTP like a local*
* [HTTP Prompt ![GitHub Repo stars](https://img.shields.io/github/stars/eliangcs/http-prompt) ![GitHub last commit](https://img.shields.io/github/last-commit/eliangcs/http-prompt)](https://github.com/eliangcs/http-prompt) - HTTP Prompt is an interactive command-line HTTP client featuring autocomplete and syntax highlighting, built on HTTPie and prompt_toolkit.
* [rest-assured ![GitHub Repo stars](https://img.shields.io/github/stars/rest-assured/rest-assured) ![GitHub last commit](https://img.shields.io/github/last-commit/rest-assured/rest-assured)](https://github.com/rest-assured/rest-assured) - Java DSL for easy testing of REST services.
* [Insomnia ![GitHub Repo stars](https://img.shields.io/github/stars/getinsomnia/insomnia) ![GitHub last commit](https://img.shields.io/github/last-commit/getinsomnia/insomnia)](https://github.com/getinsomnia/insomnia) - Cross-platform HTTP and GraphQL Client
* [ExtendsClass](https://extendsclass.com/rest-client-online.html) - Make HTTP requests with a simple web-based HTTP client.
* [TestMace](https://testmace.com) - Cross-platform simple but powerful IDE for API automation testing.
* [Milkman ![GitHub Repo stars](https://img.shields.io/github/stars/warmuuh/milkman) ![GitHub last commit](https://img.shields.io/github/last-commit/warmuuh/milkman)](https://github.com/warmuuh/milkman) - Extensible cross-platform request/response workbench, not only for http calls.

### Mocking

* [RequestBin](https://requestbin.com/) - Inspect and debug webhook requests sent by your clients or third-party APIs.
* [httpbin](http://httpbin.org) - HTTP request and response service - a/k/a Swiss Army Knife for HTTP.
* [FakeRest ![GitHub Repo stars](https://img.shields.io/github/stars/marmelab/FakeRest) ![GitHub last commit](https://img.shields.io/github/last-commit/marmelab/FakeRest)](https://github.com/marmelab/FakeRest) - Patch XMLHttpRequest to fake a REST API client-side.
* [json-server ![GitHub Repo stars](https://img.shields.io/github/stars/typicode/json-server) ![GitHub last commit](https://img.shields.io/github/last-commit/typicode/json-server)](https://github.com/typicode/json-server) - Serve a REST API from fixture files using quick prototyping.
* [Mocky.io](http://www.mocky.io/) - Free online service to create fake HTTP responses.
* [Swagger API Mock ![GitHub Repo stars](https://img.shields.io/github/stars/bulkismaslom/swagger-api-mock) ![GitHub last commit](https://img.shields.io/github/last-commit/bulkismaslom/swagger-api-mock)](https://github.com/bulkismaslom/swagger-api-mock) - Mock RESTful API based on swagger schema
* [Request Baskets ![GitHub Repo stars](https://img.shields.io/github/stars/darklynx/request-baskets) ![GitHub last commit](https://img.shields.io/github/last-commit/darklynx/request-baskets)](https://github.com/darklynx/request-baskets) - Service to collect HTTP requests and inspect them via RESTful API or web UI.
* [DuckRails ![GitHub Repo stars](https://img.shields.io/github/stars/iridakos/duckrails) ![GitHub last commit](https://img.shields.io/github/last-commit/iridakos/duckrails)](https://github.com/iridakos/duckrails) - Mock quickly & dynamically API endpoints.
* [Mockoon](https://mockoon.com) - Easily create mock APIs locally. No remote deployment, no account required, open source.

### Public REST APIs To Use In Tests
* [Deck of Cards API](http://deckofcardsapi.com) - Open API for simulating a deck of cards.
* [ProgrammableWeb](http://www.programmableweb.com/apis/directory) - The world's largest API repository.
* [Public APIS](https://www.publicapis.com/) - Explore The Largest API Directory In The Galaxy.
* [Marvel Comics API](http://developer.marvel.com/) - Query characters, stories, events about Marvel superheroes.
* [JSON Placeholder](http://jsonplaceholder.typicode.com/) - Free online REST service that you can use whenever you need some fake data.
* [APIs.guru](http://APIs.guru) - Wikipedia for Web APIs, each API has OpenAPI/Swagger description.

## Documentation

* [Swagger](http://swagger.io/) - Documentation/querying web interface for REST APIs.
* [API doc](http://apidocjs.com/) - Inline Documentation for RESTful web APIs.
* [raml2html ![GitHub Repo stars](https://img.shields.io/github/stars/raml2html/raml2html) ![GitHub last commit](https://img.shields.io/github/last-commit/raml2html/raml2html)](https://github.com/raml2html/raml2html) - Generates HTML documentation from a RAML file.
* [ReDoc ![GitHub Repo stars](https://img.shields.io/github/stars/Rebilly/ReDoc) ![GitHub last commit](https://img.shields.io/github/last-commit/Rebilly/ReDoc)](https://github.com/Rebilly/ReDoc/) - OpenAPI/Swagger-powered three-panel documentation.
* [Slate ![GitHub Repo stars](https://img.shields.io/github/stars/lord/slate) ![GitHub last commit](https://img.shields.io/github/last-commit/lord/slate)](https://github.com/lord/slate) - Beautiful and responsive three-panel API documentation using Middleman.
* [Optic ![GitHub Repo stars](https://img.shields.io/github/stars/opticdev/optic) ![GitHub last commit](https://img.shields.io/github/last-commit/opticdev/optic)](https://github.com/opticdev/optic) - Maintain an accurate API specification without writing OpenAPI/Swagger. Works with any Stack

## API Gateway

* [Kong ![GitHub Repo stars](https://img.shields.io/github/stars/Kong/kong) ![GitHub last commit](https://img.shields.io/github/last-commit/Kong/kong)](https://github.com/Kong/kong) - Scalable, distributed, and plugin oriented API gateway backed by Nginx.
* [Tyk API Gateway ![GitHub Repo stars](https://img.shields.io/github/stars/TykTechnologies/tyk) ![GitHub last commit](https://img.shields.io/github/last-commit/TykTechnologies/tyk)](https://github.com/TykTechnologies/tyk) - Lightweight API gateway with analytics logging, written in Go.
* [API Umbrella ![GitHub Repo stars](https://img.shields.io/github/stars/NREL/api-umbrella) ![GitHub last commit](https://img.shields.io/github/last-commit/NREL/api-umbrella)](https://github.com/NREL/api-umbrella) - API management platform for exposing web services, with web interface and analytics, written in Lua.
* [WSO2 API Management ![GitHub Repo stars](https://img.shields.io/github/stars/wso2/product-apim) ![GitHub last commit](https://img.shields.io/github/last-commit/wso2/product-apim)](https://github.com/wso2/product-apim) - API management tool with lightweight gateway and API lifecycle manangement, written in Java.
* [Express Gateway ![GitHub Repo stars](https://img.shields.io/github/stars/ExpressGateway/express-gateway) ![GitHub last commit](https://img.shields.io/github/last-commit/ExpressGateway/express-gateway)](https://github.com/ExpressGateway/express-gateway) - Microservices API Gateway built on top of ExpressJS (Node.js).
* [KrakenD ![GitHub Repo stars](https://img.shields.io/github/stars/devopsfaith/krakend) ![GitHub last commit](https://img.shields.io/github/last-commit/devopsfaith/krakend)](https://github.com/devopsfaith/krakend) Ultra performant API Gateway with middleware. Written in Go.

## SaaS Tools

* [Runscope](https://www.runscope.com/) - Automated API Monitoring & Testing.
* [Ping-API](https://ping-api.com/) - Automated API Monitoring & Testing.
* [import.io Magic](https://magic.import.io/) - Create a REST API from any website in one click.
* [Apiary](https://apiary.io/) - Collaborative design, instant API mock, generated documentation, integrated code samples, debugging and automated testing.
* [Amazon API Gateway](https://aws.amazon.com/api-gateway/) - Amazon API Gateway is a fully managed service that makes it easy for developers to create, publish, maintain, monitor, and secure APIs at any scale.
* [Apigee](https://apigee.com) - Apigee is the leading provider of API technology and services for enterprises and developers.
* [3scale](https://www.3scale.net/) - Nginx based API gateway to integrate internal and external API services with 3scale's API Management Platform.
* [Assertible](https://assertible.com) - Continuously test and monitor your APIs after deployments and across environments.
* [Moesif](https://www.moesif.com) - API Analytics for Debugging, Monitoring, and Usage Tracking for RESTful and GraphQL.
* [Beeceptor](https://beeceptor.com/) - An HTTP inspecting, mocking and proxing service. Gives named endpoints for creating mock API endpoints and simulate responses.

## Miscellaneous

* [react-admin ![GitHub Repo stars](https://img.shields.io/github/stars/marmelab/react-admin) ![GitHub last commit](https://img.shields.io/github/last-commit/marmelab/react-admin)](https://github.com/marmelab/react-admin) - Add a ReactJS admin GUI to any RESTful API.
* [ng-admin ![GitHub Repo stars](https://img.shields.io/github/stars/marmelab/ng-admin) ![GitHub last commit](https://img.shields.io/github/last-commit/marmelab/ng-admin)](https://github.com/marmelab/ng-admin) - Add an AngularJS admin GUI to any RESTful API.
* [swagger-codegen ![GitHub Repo stars](https://img.shields.io/github/stars/swagger-api/swagger-codegen) ![GitHub last commit](https://img.shields.io/github/last-commit/swagger-api/swagger-codegen)](https://github.com/swagger-api/swagger-codegen) - Auto generation of client libraries or server stubs given an OpenAPI specification (formerly known as the Swagger Specification).
* [Lumber ![GitHub Repo stars](https://img.shields.io/github/stars/ForestAdmin/lumber) ![GitHub last commit](https://img.shields.io/github/last-commit/ForestAdmin/lumber)](https://github.com/ForestAdmin/lumber) - Generate the admin interface of your application.

## License

[![Creative Commons License](http://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)

This work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).
