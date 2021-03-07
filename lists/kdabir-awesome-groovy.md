Awesome Groovy [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
==============

Curated list of awesome groovy libraries, frameworks and resources. Inspired by many other awesome-* repositories. This awesome collection is also available on [Groovy.ZEEF.com](https://groovy.zeef.com/kunal.dabir).


- [Awesome Groovy](#awesome-groovy)
    - [Build Tools, Setup and CI](#build-tools-setup-and-ci)
    - [Concurrency](#concurrency)
    - [Database](#database)
    - [Desktop App Frameworks](#rich-applications)
    - [HTTP](#http)
    - [IDE and Editor Support](#ide-and-editor-support)
    - [Testing](#testing)
    - [Code analysis](#code-analysis)
    - [Web Frameworks](#web-frameworks)
    - [Transpilers](#transpilers)
    - [Static Web](#static-web)
    - [Language Utilities](#language-utilities)
    - [File System Utilities](#file-system-utilities)
    - [File Format DSL](#file-format-dsl)
    - [Scripting Tools](#scripting-tools)
    - [Rule Engines](#rule-engines)
- [Resources](#resources)
- [Contributing](#contributing)
- [Credits](#credits)

## Build tools, setup and CI
* [Gradle](https://www.gradle.org/) - A powerful build system for the JVM
* [GMavenPlus ![GitHub Repo Stars](https://img.shields.io/github/stars/groovy/GMavenPlus) ![GitHub last commit](https://img.shields.io/github/last-commit/groovy/GMavenPlus)](https://github.com/groovy/GMavenPlus) - A rewrite of GMaven, a Maven plugin for Groovy
* [SDKMAN](https://sdkman.io) - The Software Development Kit Manager (Previously known as GVM)
* [skeletal ![GitHub Repo Stars](https://img.shields.io/github/stars/cbmarcum/skeletal) ![GitHub last commit](https://img.shields.io/github/last-commit/cbmarcum/skeletal)](https://github.com/cbmarcum/skeletal) - A simple project creation tool that uses packaged templates (successor of Lazybones)
* [Lazybones ![GitHub Repo Stars](https://img.shields.io/github/stars/pledbrook/lazybones) ![GitHub last commit](https://img.shields.io/github/last-commit/pledbrook/lazybones)](https://github.com/pledbrook/lazybones) - A simple project creation tool that uses packaged project templates.
* [Jenkins job-dsl-plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/jenkinsci/job-dsl-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/jenkinsci/job-dsl-plugin)](https://github.com/jenkinsci/job-dsl-plugin) - A Groovy DSL for Jenkins Jobs
* [travis-groovy ![GitHub Repo Stars](https://img.shields.io/github/stars/kdabir/travis-groovy) ![GitHub last commit](https://img.shields.io/github/last-commit/kdabir/travis-groovy)](https://github.com/kdabir/travis-groovy) - execute groovy scripts on travis-ci
* [Android Groovy Shell](https://play.google.com/store/apps/details?id=com.tambapps.android.grooidshell) - code and execute groovy scripts directly on your smartphone

## IDE and Editor Support
* [IntelliJ IDEA](http://www.jetbrains.com/idea/) - The Most Intelligent IDE for the Java Platform
* [Groovy Grails Tool Suite](https://marketplace.eclipse.org/content/groovygrails-tool-suite-ggts-eclipse) -  Eclipse-based IDE optimized for developing, debugging and executing Groovy and Grails applications
* [Groovy Web Console](http://groovyconsole.appspot.com) - The online Groovy console
* [LightTable Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/rundis/LightTable-Groovy) ![GitHub last commit](https://img.shields.io/github/last-commit/rundis/LightTable-Groovy)](https://github.com/rundis/LightTable-Groovy) - LightTable Support
* [SpaceVim](https://spacevim.org/layers/lang/groovy/) - SpaceVim `lang#groovy` layer
* [Sublime Text 2/3](https://gist.github.com/kdabir/2203530) - Run groovy scripts from Sublime Text

## Web Frameworks

* [Grails ![GitHub Repo Stars](https://img.shields.io/github/stars/grails/grails) ![GitHub last commit](https://img.shields.io/github/last-commit/grails/grails)](https://github.com/grails/grails) - A powerful web application framework based on the Groovy language
* [Micronaut](http://micronaut.io/) - A brand new microservices framework created by the Grails team
* [Spring-Boot](https://projects.spring.io/spring-boot) - Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that can you can "just run". Use Groovy as your coding language.
* [Gaelyk ![GitHub Repo Stars](https://img.shields.io/github/stars/gaelyk/gaelyk) ![GitHub last commit](https://img.shields.io/github/last-commit/gaelyk/gaelyk)](https://github.com/gaelyk/gaelyk) - A lightweight Groovy toolkit for Google App Engine Java
* [Glide ![GitHub Repo Stars](https://img.shields.io/github/stars/kdabir/glide) ![GitHub last commit](https://img.shields.io/github/last-commit/kdabir/glide)](https://github.com/kdabir/glide) - Create awesome apps on Google App Engine in a snap
* [Ratpack ![GitHub Repo Stars](https://img.shields.io/github/stars/ratpack/ratpack) ![GitHub last commit](https://img.shields.io/github/last-commit/ratpack/ratpack)](https://github.com/ratpack/ratpack) - A toolkit for JVM web applications
* [gServ ![GitHub Repo Stars](https://img.shields.io/github/stars/javaConductor/gserv) ![GitHub last commit](https://img.shields.io/github/last-commit/javaConductor/gserv)](https://github.com/javaConductor/gserv) - A Groovy toolkit for creating SPAs and REST based micro-services without the need for a container (Tomcat, JBoss, etc.).

## Database
* [GORM](https://gorm.grails.org) - Grails ORM, but can be used stand-alone without Grails
* [Gmongo ![GitHub Repo Stars](https://img.shields.io/github/stars/poiati/gmongo) ![GitHub last commit](https://img.shields.io/github/last-commit/poiati/gmongo)](https://github.com/poiati/gmongo) - A Groovy wrapper to the mongodb Java driver
* [Gstorm ![GitHub Repo Stars](https://img.shields.io/github/stars/kdabir/gstorm) ![GitHub last commit](https://img.shields.io/github/last-commit/kdabir/gstorm)](https://github.com/kdabir/gstorm) - A simple ORM for simple databases and CSV files to be used in groovy scripts
* [Tayra ![GitHub Repo Stars](https://img.shields.io/github/stars/EqualExperts/Tayra) ![GitHub last commit](https://img.shields.io/github/last-commit/EqualExperts/Tayra)](https://github.com/EqualExperts/Tayra) - Incremental backup tool for MongoDB
* [Groovy-liquibase ![GitHub Repo Stars](https://img.shields.io/github/stars/tlberglund/groovy-liquibase) ![GitHub last commit](https://img.shields.io/github/last-commit/tlberglund/groovy-liquibase)](https://github.com/tlberglund/groovy-liquibase) - Yet Another Groovy DSL for Liquibase
* [Effigy ![GitHub Repo Stars](https://img.shields.io/github/stars/cjstehno/effigy) ![GitHub last commit](https://img.shields.io/github/last-commit/cjstehno/effigy)](https://github.com/cjstehno/effigy) - Groovy annotation-driven JDBC row mapping framework (abandoned)
* [elasticsearch-groovy ![GitHub Repo Stars](https://img.shields.io/github/stars/elastic/elasticsearch-groovy) ![GitHub last commit](https://img.shields.io/github/last-commit/elastic/elasticsearch-groovy)](https://github.com/elastic/elasticsearch-groovy) - Elasticsearch Groovy client

## Rich Application

* [Griffon](http://griffon-framework.org/) - Griffon is an application framework for developing desktop applications in the JVM
* [GroovyFx](http://groovyfx.org/) - GroovyFX provides a Groovy binding for JavaFX 2.0.

## HTTP
* [Http-Builder ![GitHub Repo Stars](https://img.shields.io/github/stars/jgritman/httpbuilder) ![GitHub last commit](https://img.shields.io/github/last-commit/jgritman/httpbuilder)](https://github.com/jgritman/httpbuilder) - HTTPBuilder is the easiest way to manipulate HTTP-based resources from the JVM
* [HTTP Builder NG ![GitHub Repo Stars](https://img.shields.io/github/stars/http-builder-ng/http-builder-ng) ![GitHub last commit](https://img.shields.io/github/last-commit/http-builder-ng/http-builder-ng)](https://github.com/http-builder-ng/http-builder-ng) - HTTP Builder NG is a modern Groovy DSL for making http requests.
* [HTTP Builder NG Gradle Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/http-builder-ng/gradle-http-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/http-builder-ng/gradle-http-plugin)](https://github.com/http-builder-ng/gradle-http-plugin) - Gradle plugin providing HTTP Builder NG support in a Gradle build configuration.
* [AsyncRestClient ![GitHub Repo Stars](https://img.shields.io/github/stars/eginez/AsyncRestClient) ![GitHub last commit](https://img.shields.io/github/last-commit/eginez/AsyncRestClient)](https://github.com/eginez/AsyncRestClient) - Combine the power of RESTClient with RxGroovy for async http calls
* [Groovy-wslite ![GitHub Repo Stars](https://img.shields.io/github/stars/jwagenleitner/groovy-wslite) ![GitHub last commit](https://img.shields.io/github/last-commit/jwagenleitner/groovy-wslite)](https://github.com/jwagenleitner/groovy-wslite) - Lightweight SOAP and REST webservice clients for Groovy
* [Hyperpoet ![GitHub Repo Stars](https://img.shields.io/github/stars/tambapps/hyperpoet) ![GitHub last commit](https://img.shields.io/github/last-commit/tambapps/hyperpoet)](https://github.com/tambapps/hyperpoet) - Easy-to-use and customizable HTTP client for Groovy

## Testing
* [Spock ![GitHub Repo Stars](https://img.shields.io/github/stars/spockframework/spock) ![GitHub last commit](https://img.shields.io/github/last-commit/spockframework/spock)](https://github.com/spockframework/spock) - The Enterprise-ready testing and specification framework.
* [Geb ![GitHub Repo Stars](https://img.shields.io/github/stars/geb/geb) ![GitHub last commit](https://img.shields.io/github/last-commit/geb/geb)](https://github.com/geb/geb) - Very Groovy Browser Automation
* [Betamax ![GitHub Repo Stars](https://img.shields.io/github/stars/betamaxteam/betamax) ![GitHub last commit](https://img.shields.io/github/last-commit/betamaxteam/betamax)](https://github.com/betamaxteam/betamax) - Betamax is a tool for mocking external HTTP resources such as web services and REST APIs in your tests.
* [HTTP Mock Server ![GitHub Repo Stars](https://img.shields.io/github/stars/TouK/http-mock-server) ![GitHub last commit](https://img.shields.io/github/last-commit/TouK/http-mock-server)](https://github.com/TouK/http-mock-server) - HTTP Mock Server allows to mock HTTP request using groovy closures.
* [Ersatz Mock Server ![GitHub Repo Stars](https://img.shields.io/github/stars/cjstehno/ersatz) ![GitHub last commit](https://img.shields.io/github/last-commit/cjstehno/ersatz)](https://github.com/cjstehno/ersatz) - A simple and expressive simulated HTTP server for testing client code with configurable responses.
* [Dru](https://agorapulse.github.io/dru/) - Data Reconstruction Utility loads data from external sources JSON, YML for easy testing GORM, DynamoDB or just plain POJOs.
* [Gru](https://agorapulse.github.io/gru/) - Groovy HTTP Testing Framework for running integration and semi-ingetration tests for any HTTP backend with native unit test support for Grails and Spring MVC.

## Concurrency
* [GPars ![GitHub Repo Stars](https://img.shields.io/github/stars/GPars/GPars) ![GitHub last commit](https://img.shields.io/github/last-commit/GPars/GPars)](https://github.com/GPars/GPars) - The GPars concurrency and parallelism framework for the JVM
* [RxGroovy ![GitHub Repo Stars](https://img.shields.io/github/stars/ReactiveX/RxGroovy) ![GitHub last commit](https://img.shields.io/github/last-commit/ReactiveX/RxGroovy)](https://github.com/ReactiveX/RxGroovy) - RxJava bindings for Groovy
* [Vertx](https://vertx.io/) - Vert.x is a lightweight, high performance application platform for the JVM

## Code Analysis
* [CodeNarc](http://codenarc.sourceforge.net/) - Static analysis tool for Groovy
* [Sonar-Groovy ![GitHub Repo Stars](https://img.shields.io/github/stars/pmayweg/sonar-groovy) ![GitHub last commit](https://img.shields.io/github/last-commit/pmayweg/sonar-groovy)](https://github.com/pmayweg/sonar-groovy) - SonarQube Groovy plugin

## Transpilers
* [Grooscript ![GitHub Repo Stars](https://img.shields.io/github/stars/chiquitinxx/grooscript) ![GitHub last commit](https://img.shields.io/github/last-commit/chiquitinxx/grooscript)](https://github.com/chiquitinxx/grooscript) - Converts your Groovy code to Javascript

## Static Web
* [Grain ![GitHub Repo Stars](https://img.shields.io/github/stars/sysgears/grain) ![GitHub last commit](https://img.shields.io/github/last-commit/sysgears/grain)](https://github.com/sysgears/grain) - Static Web Site Building Framework For Groovy
* [Gaiden ![GitHub Repo Stars](https://img.shields.io/github/stars/kobo/gaiden) ![GitHub last commit](https://img.shields.io/github/last-commit/kobo/gaiden)](https://github.com/kobo/gaiden) - Gaiden is a tool that makes it easy to create documentation with Markdown.

## Language Utilities
* [Functionalgroovy ![GitHub Repo Stars](https://img.shields.io/github/stars/mperry/functionalgroovy) ![GitHub last commit](https://img.shields.io/github/last-commit/mperry/functionalgroovy)](https://github.com/mperry/functionalgroovy) - Functional programming in Groovy
* [Groovy-stream ![GitHub Repo Stars](https://img.shields.io/github/stars/timyates/groovy-stream) ![GitHub last commit](https://img.shields.io/github/last-commit/timyates/groovy-stream)](https://github.com/timyates/groovy-stream) - A collection of classes to give a fluent builder for Streams (Lazy Groovy Generators)
* [Flipside ![GitHub Repo Stars](https://img.shields.io/github/stars/johnnywey/flipside) ![GitHub last commit](https://img.shields.io/github/last-commit/johnnywey/flipside)](https://github.com/johnnywey/flipside) - Simple Groovy options library
* [groovy-common-extensions ![GitHub Repo Stars](https://img.shields.io/github/stars/timyates/groovy-common-extensions) ![GitHub last commit](https://img.shields.io/github/last-commit/timyates/groovy-common-extensions)](https://github.com/timyates/groovy-common-extensions) - Lets you add things commonly useful to the Groovy language via the extension system
* [groovy-extra-list-behaviour ![GitHub Repo Stars](https://img.shields.io/github/stars/dnahodil/groovy-extra-list-behaviour) ![GitHub last commit](https://img.shields.io/github/last-commit/dnahodil/groovy-extra-list-behaviour)](https://github.com/dnahodil/groovy-extra-list-behaviour) - Adds extra methods to Lists via the extension system
* [GPerfUtils](https://github.com/gperfutils) - Groovy-based tools verifying performance of your code
  * [gprof ![GitHub Repo Stars](https://img.shields.io/github/stars/gperfutils/gprof) ![GitHub last commit](https://img.shields.io/github/last-commit/gperfutils/gprof)](https://github.com/gperfutils/gprof) - The profiling module for Groovy
  * [gbench ![GitHub Repo Stars](https://img.shields.io/github/stars/gperfutils/gbench) ![GitHub last commit](https://img.shields.io/github/last-commit/gperfutils/gbench)](https://github.com/gperfutils/gbench) - The benchmarking module for Groovy
* [Fuzzy-CSV ![GitHub Repo Stars](https://img.shields.io/github/stars/kayr/fuzzy-csv) ![GitHub last commit](https://img.shields.io/github/last-commit/kayr/fuzzy-csv)](https://github.com/kayr/fuzzy-csv) - Simple lightweight data processing library, useful for shaping/processing your tabular data before its consumed by another service or library.

## Data Processing
* [Nextflow](https://www.nextflow.io/) - Groovy DSL for Data-driven computational pipelines

## File System Utilities
* [Groovy-Vfs ![GitHub Repo Stars](https://img.shields.io/github/stars/ysb33r/groovy-vfs) ![GitHub last commit](https://img.shields.io/github/last-commit/ysb33r/groovy-vfs)](https://github.com/ysb33r/groovy-vfs) - A DSL for Groovy on top of Apache VFS2
* [Directree ![GitHub Repo Stars](https://img.shields.io/github/stars/kdabir/directree) ![GitHub last commit](https://img.shields.io/github/last-commit/kdabir/directree)](https://github.com/kdabir/directree) - A Simple DSL to create Directory Tree with Text Files

## DSLs
* [document-builder ![GitHub Repo Stars](https://img.shields.io/github/stars/craigburke/document-builder) ![GitHub last commit](https://img.shields.io/github/last-commit/craigburke/document-builder)](https://github.com/craigburke/document-builder) - A document builder for Groovy for PDF or Word documents.
* [spreadsheet-builder](http://spreadsheet.dsl.builders/) - Spreadsheet builder provides convenient way how to create MS Excel OfficeOpenXML Documents (XSLX)
* [GroovyCSV](http://xlson.com/groovycsv/) - A simple CSV parsing library for groovy
* [Groogle](https://groogle.gitlab.io/groogle/latest/index.html) - A Groovy DSL written to use Google services APIs.

## Scripting Tools
* [EasyDokkaPlugin ![GitHub Repo Stars](https://img.shields.io/github/stars/Vorlonsoft/EasyDokkaPlugin) ![GitHub last commit](https://img.shields.io/github/last-commit/Vorlonsoft/EasyDokkaPlugin)](https://github.com/Vorlonsoft/EasyDokkaPlugin) - Gradle script plugin to generate documentation by Dokka documentation engine for Java and Kotlin
* [GradleMavenPush ![GitHub Repo Stars](https://img.shields.io/github/stars/Vorlonsoft/GradleMavenPush) ![GitHub last commit](https://img.shields.io/github/last-commit/Vorlonsoft/GradleMavenPush)](https://github.com/Vorlonsoft/GradleMavenPush) - Gradle script plugin to upload Gradle Artifacts to Maven repositories
* [picocli ![GitHub Repo Stars](https://img.shields.io/github/stars/remkop/picocli) ![GitHub last commit](https://img.shields.io/github/last-commit/remkop/picocli)](https://github.com/remkop/picocli) - Parser library and framework for CLI. Usage help with ANSI colors. Autocomplete. Nested subcommands and more.
* [sshoogr ![GitHub Repo Stars](https://img.shields.io/github/stars/aestasit/sshoogr) ![GitHub last commit](https://img.shields.io/github/last-commit/aestasit/sshoogr)](https://github.com/aestasit/sshoogr) - DSL library for working with remote servers through SSH.


## Rule Engines
* [grules ![GitHub Repo Stars](https://img.shields.io/github/stars/zhaber/grules) ![GitHub last commit](https://img.shields.io/github/last-commit/zhaber/grules)](https://github.com/zhaber/grules) - rule engine for data preprocessing
* [n-cube ![GitHub Repo Stars](https://img.shields.io/github/stars/jdereg/n-cube) ![GitHub last commit](https://img.shields.io/github/last-commit/jdereg/n-cube)](https://github.com/jdereg/n-cube) - a Rules Engine, Decision Table, Decision Tree, Templating Engine, and Enterprise Spreadsheet, built as a hyper-space.

# Resources

## Official Resources
* [The official groovy home](http://www.groovy-lang.org/) - Groovy's new home
* [Groovy's source ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/groovy) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/groovy)](https://github.com/apache/groovy) - Groovy's source code mirrored on Github
* [Groovy mailing lists](http://www.groovy-lang.org/mailing-lists.html) - Note the new mailing list
* [Official Documentation](http://www.groovy-lang.org/documentation.html) - the definitive source of groovy documentation

## Try Groovy in Browser
* [Groovy Web Console](https://gwc-experiment.appspot.com/)
* [Groovy Playground](https://groovy-playground.appspot.com/)

## Groovy Code Examples
* [MrHaKi's Goodness](http://mrhaki.blogspot.com/) - Look out for entries titled "Groovy Goodness" , "Grails Goodness", Gradle Goodness"
* [PLEAC Groovy](http://pleac.sourceforge.net/pleac_groovy/) - Groovy is one of the 3 languages out of 32, having completed 100% of PLEAC examples.

## Staying up to date
* [Groovy Calamari](http://groovycalamari.com/) - Weekly curated publication about the Groovy Ecosystem
* [Groovy Weekly](http://glaforge.appspot.com/category/Groovy%20Weekly) - Groovy weekly newsletter
* [Grails Diary](https://grydeske.dk/news/index) - Particulary useful for Grails developers
* [Groovy Podcast](https://nofluffjuststuff.com/groovypodcast) - Ken Kousen and Baruch Sadogursky discuss news and insight from the Groovy ecosystem.

## Interactive Learning
* [Groovy-Koans](http://nadavc.github.io/groovykoans/) - Collection of small exercises in the form of unit tests

## Blogs of core committer
* [Guillaume Laforge's blog](http://glaforge.appspot.com/)
* [Cédric Champeau's blog](http://melix.github.io/blog/)
* [Jochen Theodorou's blog](http://blackdragsview.blogspot.com/)
* [Grails Team blog](http://grailsblog.objectcomputing.com/)

## Conferences
* [Community Over Code](https://communityovercode.org/) - have a Groovy Track
* [Greachconf](http://greachconf.com) (discontinued)
* [GR8Conf Europe](https://gr8conf.eu) (discontinued)
* [GR8Conf USA](http://gr8conf.us) (discontinued)

# Contributing

Fork this repository, edit this file and send a pull request.

## Using awesome.groovy script

You can use the `awesome.groovy` script to search awesome projects on github and generate the entry prepoulated with project name, repo url and description in markdown format. All you need to do is place it under right group in the markdown list in `README.md`.

### Examples

to find out repos where language is groovy and whose name contain gpars and

    ./awesome.groovy -l groovy gpars

to find out repos by user 'kdabir' and name contains glide

    ./awesome.groovy -u kdabir glide

to find out repos whose name contains glide

    ./awesome.groovy glide

If you are lazy to download the repo, an easy way is:

    groovy "https://git.io/awesome" -l groovy glide

# Credits

To all the awesome-* repos out there and their aggreators like [this ![GitHub Repo Stars](https://img.shields.io/github/stars/erichs/awesome-awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/erichs/awesome-awesome)](https://github.com/erichs/awesome-awesome) and [this ![GitHub Repo Stars](https://img.shields.io/github/stars/bayandin/awesome-awesomeness) ![GitHub last commit](https://img.shields.io/github/last-commit/bayandin/awesome-awesomeness)](https://github.com/bayandin/awesome-awesomeness).
