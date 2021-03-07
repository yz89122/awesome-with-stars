# Awesome Erlang [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Analytics](https://ga-beacon.appspot.com/UA-82766782-1/awesome-erlang?flat&useReferer)](https://github.com/drobakowski/awesome-erlang)
A curated list of amazingly awesome Erlang libraries, resources and shiny thing inspired by [awesome-elixir ![GitHub Repo Stars](https://img.shields.io/github/stars/h4cc/awesome-elixir) ![GitHub last commit](https://img.shields.io/github/last-commit/h4cc/awesome-elixir)](https://github.com/h4cc/awesome-elixir).

- [Awesome Erlang](#awesome-Erlang)
    - [Package Management](#package-management)
    - [Release Management](#release-management)
    - [Configuration Management](#configuration-management)
    - [Codebase Maintenance](#codebase-maintenance)
    - [Web Frameworks](#web-frameworks)
    - [Web Framework Components](#web-framework-components)
    - [HTTP](#http)
    - [Testing](#testing)
    - [Logging](#logging)
    - [Monitoring](#monitoring)
    - [Deployment](#deployment)
    - [Distributed Systems](#distributed-systems)
    - [Code Analysis](#code-analysis)
    - [Build Tools](#build-tools)
    - [Geolocation](#geolocation)
    - [Debugging](#debugging)
    - [Actors](#actors)
    - [Date and Time](#date-and-time)
    - [ORM and Datamapping](#orm-and-datamapping)
    - [Queue](#queue)
    - [Authentication](#authentication)
    - [Text and Numbers](#text-and-numbers)
    - [REST and API](#rest-and-api)
    - [Caching](#caching)
    - [Third Party APIs](#third-party-apis)
    - [Networking](#networking)
    - [Internet of Things](#internet-of-things)
    - [Algorithms and Datastructures](#algorithms-and-datastructures)
    - [Translations and Internationalizations](#translations-and-internationalizations)
    - [Miscellaneous](#miscellaneous)
- [Resources](#resources)
    - [Websites](#websites)
    - [Books](#books)
    - [Web Reading](#web-reading)
    - [Erlang Reading](#Erlang-reading)
    - [Screencasts](#screencasts)
- [Other Awesome Lists](#other-awesome-lists)
- [Contributing](#contributing)

## Package Management
*Libraries and tools for package and dependency management.*

* [hex.pm](https://hex.pm/) - A package manager for the Erlang ecosystem.

## Release Management
*Libraries and tools for release management.*

* [relx ![GitHub Repo Stars](https://img.shields.io/github/stars/erlware/relx) ![GitHub last commit](https://img.shields.io/github/last-commit/erlware/relx)](https://github.com/erlware/relx) - A release assembler for Erlang.

## Configuration Management
*Libraries and tools related to configuration management.*

* [stillir ![GitHub Repo Stars](https://img.shields.io/github/stars/heroku/stillir) ![GitHub last commit](https://img.shields.io/github/last-commit/heroku/stillir)](https://github.com/heroku/stillir) - Cache environment variables as Erlang app variables.

## Codebase Maintenance
*Libraries and tools to maintain a clean codebase.*

* [elvis ![GitHub Repo Stars](https://img.shields.io/github/stars/inaka/elvis) ![GitHub last commit](https://img.shields.io/github/last-commit/inaka/elvis)](https://github.com/inaka/elvis) - Erlang Style Reviewer.

## Web Frameworks
*Web development frameworks.*

* [Axiom ![GitHub Repo Stars](https://img.shields.io/github/stars/tsujigiri/axiom) ![GitHub last commit](https://img.shields.io/github/last-commit/tsujigiri/axiom)](https://github.com/tsujigiri/axiom) - A micro-framework, inspired by Ruby's [Sinatra ![GitHub Repo Stars](https://img.shields.io/github/stars/sinatra/sinatra) ![GitHub last commit](https://img.shields.io/github/last-commit/sinatra/sinatra)](https://github.com/sinatra/sinatra).
* [ChicagoBoss ![GitHub Repo Stars](https://img.shields.io/github/stars/ChicagoBoss/ChicagoBoss) ![GitHub last commit](https://img.shields.io/github/last-commit/ChicagoBoss/ChicagoBoss)](https://github.com/ChicagoBoss/ChicagoBoss) - A server framework inspired by Rails and written in Erlang.
* [cowboy ![GitHub Repo Stars](https://img.shields.io/github/stars/ninenines/cowboy) ![GitHub last commit](https://img.shields.io/github/last-commit/ninenines/cowboy)](https://github.com/ninenines/cowboy) - A simple HTTP server.
* [Giallo ![GitHub Repo Stars](https://img.shields.io/github/stars/kivra/giallo) ![GitHub last commit](https://img.shields.io/github/last-commit/kivra/giallo)](https://github.com/kivra/giallo) - A small and flexible web framework on top of [Cowboy ![GitHub Repo Stars](https://img.shields.io/github/stars/ninenines/cowboy) ![GitHub last commit](https://img.shields.io/github/last-commit/ninenines/cowboy)](https://github.com/ninenines/cowboy).
* [MochiWeb ![GitHub Repo Stars](https://img.shields.io/github/stars/mochi/mochiweb) ![GitHub last commit](https://img.shields.io/github/last-commit/mochi/mochiweb)](https://github.com/mochi/mochiweb) - An Erlang library for building lightweight HTTP servers.
* [N2O ![GitHub Repo Stars](https://img.shields.io/github/stars/synrc/n2o) ![GitHub last commit](https://img.shields.io/github/last-commit/synrc/n2o)](https://github.com/synrc/n2o) - WebSocket Application Server.
* [Nitrogen ![GitHub Repo Stars](https://img.shields.io/github/stars/nitrogen/nitrogen) ![GitHub last commit](https://img.shields.io/github/last-commit/nitrogen/nitrogen)](https://github.com/nitrogen/nitrogen) - Framework to build web applications (including front-end) in pure Erlang.
* [Zotonic ![GitHub Repo Stars](https://img.shields.io/github/stars/zotonic/zotonic) ![GitHub last commit](https://img.shields.io/github/last-commit/zotonic/zotonic)](https://github.com/zotonic/zotonic) - High speed, real-time web framework and content management system.

## Web Framework Components
*Standalone component from web development frameworks.*

* [cb_admin ![GitHub Repo Stars](https://img.shields.io/github/stars/ChicagoBoss/cb_admin) ![GitHub last commit](https://img.shields.io/github/last-commit/ChicagoBoss/cb_admin)](https://github.com/ChicagoBoss/cb_admin) - An admin interface for Chicago Boss.
* [cb_websocket_controller ![GitHub Repo Stars](https://img.shields.io/github/stars/dkuhlman/cb_websocket_controller) ![GitHub last commit](https://img.shields.io/github/last-commit/dkuhlman/cb_websocket_controller)](https://github.com/dkuhlman/cb_websocket_controller) - A template for implementing a Websocket controller for ChicagoBoss.
* [giallo_session ![GitHub Repo Stars](https://img.shields.io/github/stars/kivra/giallo_session) ![GitHub last commit](https://img.shields.io/github/last-commit/kivra/giallo_session)](https://github.com/kivra/giallo_session) - A session management library for the Giallo web framework.
* [simple_bridge ![GitHub Repo Stars](https://img.shields.io/github/stars/nitrogen/simple_bridge) ![GitHub last commit](https://img.shields.io/github/last-commit/nitrogen/simple_bridge)](https://github.com/nitrogen/simple_bridge) - An abstraction layer providing a unified interface to popular Erlang web servers (Cowboy, Inets, Mochiweb, Webmachine, and Yaws).

## HTTP
*Libraries for working with HTTP and scraping websites.*

* [bullet ![GitHub Repo Stars](https://img.shields.io/github/stars/ninenines/bullet) ![GitHub last commit](https://img.shields.io/github/last-commit/ninenines/bullet)](https://github.com/ninenines/bullet) - Simple, reliable, efficient streaming for Cowboy.
* [gun ![GitHub Repo Stars](https://img.shields.io/github/stars/ninenines/gun) ![GitHub last commit](https://img.shields.io/github/last-commit/ninenines/gun)](https://github.com/ninenines/gun) - Erlang HTTP client with support for HTTP/1.1, SPDY and Websocket.
* [hackney ![GitHub Repo Stars](https://img.shields.io/github/stars/benoitc/hackney) ![GitHub last commit](https://img.shields.io/github/last-commit/benoitc/hackney)](https://github.com/benoitc/hackney) - Simple HTTP client in Erlang.
* [ibrowse ![GitHub Repo Stars](https://img.shields.io/github/stars/cmullaparthi/ibrowse) ![GitHub last commit](https://img.shields.io/github/last-commit/cmullaparthi/ibrowse)](https://github.com/cmullaparthi/ibrowse) - Erlang HTTP client.
* [lhttpc ![GitHub Repo Stars](https://img.shields.io/github/stars/esl/lhttpc) ![GitHub last commit](https://img.shields.io/github/last-commit/esl/lhttpc)](https://github.com/esl/lhttpc) - A lightweight HTTP/1.1 client implemented in Erlang.
* [shotgun ![GitHub Repo Stars](https://img.shields.io/github/stars/inaka/shotgun) ![GitHub last commit](https://img.shields.io/github/last-commit/inaka/shotgun)](https://github.com/inaka/shotgun) - For the times you need more than just a gun.

## Testing
*Libraries for testing codebases and generating test data.*

* [PropEr ![GitHub Repo Stars](https://img.shields.io/github/stars/manopapad/proper) ![GitHub last commit](https://img.shields.io/github/last-commit/manopapad/proper)](https://github.com/manopapad/proper) - A QuickCheck-inspired property-based testing tool for Erlang.
* [tracerl ![GitHub Repo Stars](https://img.shields.io/github/stars/esl/tracerl) ![GitHub last commit](https://img.shields.io/github/last-commit/esl/tracerl)](https://github.com/esl/tracerl) - Dynamic tracing tests and utilities for Erlang/OTP

## Logging
*Libraries for generating and working with log files.*

* [lager ![GitHub Repo Stars](https://img.shields.io/github/stars/basho/lager) ![GitHub last commit](https://img.shields.io/github/last-commit/basho/lager)](https://github.com/basho/lager) - A logging framework for Erlang/OTP.
* [lager_amqp_backend ![GitHub Repo Stars](https://img.shields.io/github/stars/jbrisbin/lager_amqp_backend) ![GitHub last commit](https://img.shields.io/github/last-commit/jbrisbin/lager_amqp_backend)](https://github.com/jbrisbin/lager_amqp_backend) - AMQP RabbitMQ Lager backend.
* [lager_hipchat ![GitHub Repo Stars](https://img.shields.io/github/stars/synlay/lager_hipchat) ![GitHub last commit](https://img.shields.io/github/last-commit/synlay/lager_hipchat)](https://github.com/synlay/lager_hipchat) - HipChat backend for lager.
* [lager_loggly ![GitHub Repo Stars](https://img.shields.io/github/stars/kivra/lager_loggly) ![GitHub last commit](https://img.shields.io/github/last-commit/kivra/lager_loggly)](https://github.com/kivra/lager_loggly) - Loggly backend for lager.
* [lager_smtp ![GitHub Repo Stars](https://img.shields.io/github/stars/blinkov/lager_smtp) ![GitHub last commit](https://img.shields.io/github/last-commit/blinkov/lager_smtp)](https://github.com/blinkov/lager_smtp) - SMTP backend for lager.
* [lager_slack ![GitHub Repo Stars](https://img.shields.io/github/stars/furmanOFF/lager_slack) ![GitHub last commit](https://img.shields.io/github/last-commit/furmanOFF/lager_slack)](https://github.com/furmanOFF/lager_slack) - Simple Slack backend for lager.
* [logplex ![GitHub Repo Stars](https://img.shields.io/github/stars/heroku/logplex) ![GitHub last commit](https://img.shields.io/github/last-commit/heroku/logplex)](https://github.com/heroku/logplex) - Heroku log router.

## Monitoring
*Libraries for gathering metrics and monitoring.*

* [entop ![GitHub Repo Stars](https://img.shields.io/github/stars/mazenharake/entop) ![GitHub last commit](https://img.shields.io/github/last-commit/mazenharake/entop)](https://github.com/mazenharake/entop) - A top-like Erlang node monitoring tool.
* [eper ![GitHub Repo Stars](https://img.shields.io/github/stars/massemanet/eper) ![GitHub last commit](https://img.shields.io/github/last-commit/massemanet/eper)](https://github.com/massemanet/eper) - A loose collection of Erlang Performance related tools.
* [Exometer ![GitHub Repo Stars](https://img.shields.io/github/stars/Feuerlabs/exometer) ![GitHub last commit](https://img.shields.io/github/last-commit/Feuerlabs/exometer)](https://github.com/Feuerlabs/exometer) - An Erlang instrumentation package.
* [folsom ![GitHub Repo Stars](https://img.shields.io/github/stars/boundary/folsom) ![GitHub last commit](https://img.shields.io/github/last-commit/boundary/folsom)](https://github.com/boundary/folsom) - An Erlang based metrics system inspired by Coda Hale's [metrics ![GitHub Repo Stars](https://img.shields.io/github/stars/codahale/metrics) ![GitHub last commit](https://img.shields.io/github/last-commit/codahale/metrics)](https://github.com/codahale/metrics).
* [statsderl ![GitHub Repo Stars](https://img.shields.io/github/stars/lpgauth/statsderl) ![GitHub last commit](https://img.shields.io/github/last-commit/lpgauth/statsderl)](https://github.com/lpgauth/statsderl) - A statsd Erlang client.
* [vmstats ![GitHub Repo Stars](https://img.shields.io/github/stars/ferd/vmstats) ![GitHub last commit](https://img.shields.io/github/last-commit/ferd/vmstats)](https://github.com/ferd/vmstats) - Tiny Erlang app that works in conjunction with statsderl in order to generate information on the Erlang VM for graphite logs.

## Deployment
*Libraries and tools related to deployment of Erlang/OTP applications.*

* [docker-erlang ![GitHub Repo Stars](https://img.shields.io/github/stars/synlay/docker-erlang) ![GitHub last commit](https://img.shields.io/github/last-commit/synlay/docker-erlang)](https://github.com/synlay/docker-erlang) - Basic Docker Container Images for Erlang/OTP.

## Distributed Systems
 *Tools for stress/load testing, latency issues, etc. across microservices.*

 * [Typhoon ![GitHub Repo Stars](https://img.shields.io/github/stars/fogfish/typhoon) ![GitHub last commit](https://img.shields.io/github/last-commit/fogfish/typhoon)](https://github.com/fogfish/typhoon) - Stress and load testing tool for distributed systems that simulates traffic from a test cluster toward a system-under-test (SUT) and visualizes related latencies.
## Code Analysis
*Libraries and tools for analysing, parsing and manipulation codebases.*

* [Concuerror ![GitHub Repo Stars](https://img.shields.io/github/stars/parapluu/Concuerror) ![GitHub last commit](https://img.shields.io/github/last-commit/parapluu/Concuerror)](https://github.com/parapluu/Concuerror) - Concuerror is a systematic testing tool for concurrent Erlang programs.
* [eflame ![GitHub Repo Stars](https://img.shields.io/github/stars/proger/eflame) ![GitHub last commit](https://img.shields.io/github/last-commit/proger/eflame)](https://github.com/proger/eflame) - A Flame Graph profiler for Erlang.
* [geas ![GitHub Repo Stars](https://img.shields.io/github/stars/crownedgrouse/geas) ![GitHub last commit](https://img.shields.io/github/last-commit/crownedgrouse/geas)](https://github.com/crownedgrouse/geas) - Geas is a tool that will detect the runnable official Erlang release window for your project, including its dependencies and provides many useful informations.

## Build Tools
*Project build and automation tools.*

* [rebar ![GitHub Repo Stars](https://img.shields.io/github/stars/rebar/rebar) ![GitHub last commit](https://img.shields.io/github/last-commit/rebar/rebar)](https://github.com/rebar/rebar) - Erlang build tool that makes it easy to compile and test Erlang applications, port drivers and releases.
* [rebar3 ![GitHub Repo Stars](https://img.shields.io/github/stars/rebar/rebar3) ![GitHub last commit](https://img.shields.io/github/last-commit/rebar/rebar3)](https://github.com/rebar/rebar3) - A build tool for Erlang which can manage Erlang packages from [Hex.pm](https://hex.pm/). See more at [rebar3.org](https://www.rebar3.org/)
* [sync ![GitHub Repo Stars](https://img.shields.io/github/stars/rustyio/sync) ![GitHub last commit](https://img.shields.io/github/last-commit/rustyio/sync)](https://github.com/rustyio/sync) - On-the-fly recompiling for Erlang.

## Geolocation
*Libraries for geocoding addresses and working with latitudes and longitudes.*

* [erl-rstar ![GitHub Repo Stars](https://img.shields.io/github/stars/armon/erl-rstar) ![GitHub last commit](https://img.shields.io/github/last-commit/armon/erl-rstar)](https://github.com/armon/erl-rstar) - An Erlang implementation of the R*-tree spacial data structure.
* [GeoCouch ![GitHub Repo Stars](https://img.shields.io/github/stars/couchbase/geocouch) ![GitHub last commit](https://img.shields.io/github/last-commit/couchbase/geocouch)](https://github.com/couchbase/geocouch) - A spatial extension for Couchbase and Apache CouchDB.
* [Teles ![GitHub Repo Stars](https://img.shields.io/github/stars/armon/teles) ![GitHub last commit](https://img.shields.io/github/last-commit/armon/teles)](https://github.com/armon/teles) - An Erlang network service for manipulating geographic data.

## Debugging
*Libraries and tools for debugging code and applications.*

* [tx ![GitHub Repo Stars](https://img.shields.io/github/stars/kvakvs/tx) ![GitHub last commit](https://img.shields.io/github/last-commit/kvakvs/tx)](https://github.com/kvakvs/tx) - An HTML Erlang term viewer, starts own webserver and displays any term you give it from your Erlang node.

## Actors
*Libraries and tools for working with actors and such.*

* [poolboy ![GitHub Repo Stars](https://img.shields.io/github/stars/devinus/poolboy) ![GitHub last commit](https://img.shields.io/github/last-commit/devinus/poolboy)](https://github.com/devinus/poolboy) - A hunky Erlang worker pool factory.

## Date and Time
*Libraries for working with dates and times.*

* [erlang_localtime ![GitHub Repo Stars](https://img.shields.io/github/stars/dmitryme/erlang_localtime) ![GitHub last commit](https://img.shields.io/github/last-commit/dmitryme/erlang_localtime)](https://github.com/dmitryme/erlang_localtime) - Erlang library for conversion from one local time to another.
* [qdate ![GitHub Repo Stars](https://img.shields.io/github/stars/choptastic/qdate) ![GitHub last commit](https://img.shields.io/github/last-commit/choptastic/qdate)](https://github.com/choptastic/qdate) - Erlang date, time, and timezone management: formatting, conversion, and date arithmetic.

## ORM and Datamapping
*Libraries that implement object-relational mapping or datamapping techniques.*

* [boss_db ![GitHub Repo Stars](https://img.shields.io/github/stars/ErlyORM/boss_db) ![GitHub last commit](https://img.shields.io/github/last-commit/ErlyORM/boss_db)](https://github.com/ErlyORM/boss_db) - A sharded, caching, pooling, evented ORM for Erlang.
* [epgsql ![GitHub Repo Stars](https://img.shields.io/github/stars/epgsql/epgsql) ![GitHub last commit](https://img.shields.io/github/last-commit/epgsql/epgsql)](https://github.com/epgsql/epgsql) - PostgreSQL Driver for Erlang.
* [mysql-otp ![GitHub Repo Stars](https://img.shields.io/github/stars/mysql-otp/mysql-otp) ![GitHub last commit](https://img.shields.io/github/last-commit/mysql-otp/mysql-otp)](https://github.com/mysql-otp/mysql-otp) - MySQL/OTP – MySQL driver for Erlang/OTP.
* [pgsql_migration ![GitHub Repo Stars](https://img.shields.io/github/stars/artemeff/pgsql_migration) ![GitHub last commit](https://img.shields.io/github/last-commit/artemeff/pgsql_migration)](https://github.com/artemeff/pgsql_migration) – PostgreSQL migrations for Erlang.

## Queue
*Libraries for working with event and task queues.*

* [dq ![GitHub Repo Stars](https://img.shields.io/github/stars/darach/dq) ![GitHub last commit](https://img.shields.io/github/last-commit/darach/dq)](https://github.com/darach/dq) - Distributed Fault Tolerant Queue library.
* [ebqueue ![GitHub Repo Stars](https://img.shields.io/github/stars/rgrinberg/ebqueue) ![GitHub last commit](https://img.shields.io/github/last-commit/rgrinberg/ebqueue)](https://github.com/rgrinberg/ebqueue) - Tiny simple blocking queue in erlang.
* [pqueue ![GitHub Repo Stars](https://img.shields.io/github/stars/okeuday/pqueue) ![GitHub last commit](https://img.shields.io/github/last-commit/okeuday/pqueue)](https://github.com/okeuday/pqueue) - Erlang Priority Queues.
* [tinymq ![GitHub Repo Stars](https://img.shields.io/github/stars/ChicagoBoss/tinymq) ![GitHub last commit](https://img.shields.io/github/last-commit/ChicagoBoss/tinymq)](https://github.com/ChicagoBoss/tinymq) - A diminutive, in-memory message queue for Erlang.

## Authentication
*Libraries for implementing authentications schemes.*

* [oauth2 ![GitHub Repo Stars](https://img.shields.io/github/stars/kivra/oauth2) ![GitHub last commit](https://img.shields.io/github/last-commit/kivra/oauth2)](https://github.com/kivra/oauth2) - Erlang Oauth2 implementation.

## Text and Numbers
*Libraries for parsing and manipulating text and numbers.*

* [ejsv ![GitHub Repo Stars](https://img.shields.io/github/stars/patternmatched/ejsv) ![GitHub last commit](https://img.shields.io/github/last-commit/patternmatched/ejsv)](https://github.com/patternmatched/ejsv) - Erlang JSON schema validator.
* [eql ![GitHub Repo Stars](https://img.shields.io/github/stars/artemeff/eql) ![GitHub last commit](https://img.shields.io/github/last-commit/artemeff/eql)](https://github.com/artemeff/eql) - Erlang with SQL or not.
* [jiffy ![GitHub Repo Stars](https://img.shields.io/github/stars/davisp/jiffy) ![GitHub last commit](https://img.shields.io/github/last-commit/davisp/jiffy)](https://github.com/davisp/jiffy) - JSON NIFs for Erlang.
* [jsx ![GitHub Repo Stars](https://img.shields.io/github/stars/talentdeficit/jsx) ![GitHub last commit](https://img.shields.io/github/last-commit/talentdeficit/jsx)](https://github.com/talentdeficit/jsx) - An erlang application for consuming, producing and manipulating json.
* [miffy ![GitHub Repo Stars](https://img.shields.io/github/stars/expelledboy/miffy) ![GitHub last commit](https://img.shields.io/github/last-commit/expelledboy/miffy)](https://github.com/expelledboy/miffy) - Jiffy wrapper which returns pretty maps.
* [qsp ![GitHub Repo Stars](https://img.shields.io/github/stars/artemeff/qsp) ![GitHub last commit](https://img.shields.io/github/last-commit/artemeff/qsp)](https://github.com/artemeff/qsp) - Enhanced query string parser for Erlang.
* [rec2json ![GitHub Repo Stars](https://img.shields.io/github/stars/lordnull/rec2json) ![GitHub last commit](https://img.shields.io/github/last-commit/lordnull/rec2json)](https://github.com/lordnull/rec2json) - Generate JSON encoder/decoder from record specs.

## REST and API
*Libraries and web tools for developing REST-ful APIs.*

* [leptus ![GitHub Repo Stars](https://img.shields.io/github/stars/s1n4/leptus) ![GitHub last commit](https://img.shields.io/github/last-commit/s1n4/leptus)](https://github.com/s1n4/leptus) - Leptus is an Erlang REST framework that runs on top of cowboy.
* [rooster ![GitHub Repo Stars](https://img.shields.io/github/stars/FelipeBB/rooster) ![GitHub last commit](https://img.shields.io/github/last-commit/FelipeBB/rooster)](https://github.com/FelipeBB/rooster) - rooster is a lightweight REST framework that runs on top of mochiweb.

## Caching
*Libraries for caching data.*

* [cache ![GitHub Repo Stars](https://img.shields.io/github/stars/fogfish/cache) ![GitHub last commit](https://img.shields.io/github/last-commit/fogfish/cache)](https://github.com/fogfish/cache) - In-memory Segmented Cache

## Third Party APIs
*Libraries for accessing third party APIs.*

* [google-token-erlang ![GitHub Repo Stars](https://img.shields.io/github/stars/ruel/google-token-erlang) ![GitHub last commit](https://img.shields.io/github/last-commit/ruel/google-token-erlang)](https://github.com/ruel/google-token-erlang) - Google ID token verifier for Erlang.
* [restc ![GitHub Repo Stars](https://img.shields.io/github/stars/kivra/restclient) ![GitHub last commit](https://img.shields.io/github/last-commit/kivra/restclient)](https://github.com/kivra/restclient) - An Erlang REST client
* [oauth2c ![GitHub Repo Stars](https://img.shields.io/github/stars/kivra/oauth2_client) ![GitHub last commit](https://img.shields.io/github/last-commit/kivra/oauth2_client)](https://github.com/kivra/oauth2_client) - An Erlang oAuth 2 client (uses restc)

## Networking
*Libraries and tools for using network related stuff.*

* [barrel_tcp ![GitHub Repo Stars](https://img.shields.io/github/stars/benoitc-attic/barrel_tcp) ![GitHub last commit](https://img.shields.io/github/last-commit/benoitc-attic/barrel_tcp)](https://github.com/benoitc-attic/barrel_tcp) - barrel_tcp is a generic TCP acceptor pool with low latency in Erlang.
* [gen_rpc ![GitHub Repo Stars](https://img.shields.io/github/stars/priestjim/gen_rpc) ![GitHub last commit](https://img.shields.io/github/last-commit/priestjim/gen_rpc)](https://github.com/priestjim/gen_rpc) - A scalable RPC library for Erlang-VM based languages.
* [gen_tcp_server ![GitHub Repo Stars](https://img.shields.io/github/stars/rpt/gen_tcp_server) ![GitHub last commit](https://img.shields.io/github/last-commit/rpt/gen_tcp_server)](https://github.com/rpt/gen_tcp_server) - A library that takes the concept of gen_server and introduces the same mechanics for operating a TCP server.
* [gossiperl ![GitHub Repo Stars](https://img.shields.io/github/stars/gossiperl/gossiperl) ![GitHub last commit](https://img.shields.io/github/last-commit/gossiperl/gossiperl)](https://github.com/gossiperl/gossiperl) - Language agnostic gossip middleware and message bus written in Erlang.
* [nat_upnp ![GitHub Repo Stars](https://img.shields.io/github/stars/benoitc/nat_upnp) ![GitHub last commit](https://img.shields.io/github/last-commit/benoitc/nat_upnp)](https://github.com/benoitc/nat_upnp) - Erlang library to map your internal port to an external using UNP IGD.
* [ranch ![GitHub Repo Stars](https://img.shields.io/github/stars/ninenines/ranch) ![GitHub last commit](https://img.shields.io/github/last-commit/ninenines/ranch)](https://github.com/ninenines/ranch) - Socket acceptor pool for TCP protocols.

## Internet of Things
*Libraries and tools for interacting with the physical world.*

* [GRiSP](https://grisp.org/) - Run the Erlang VM on an IoT board with many hardware interfaces and low-level drivers using a small realtime unikernel called RTEMS
* [lemma_erlang ![GitHub Repo Stars](https://img.shields.io/github/stars/noam-io/lemma_erlang) ![GitHub last commit](https://img.shields.io/github/last-commit/noam-io/lemma_erlang)](https://github.com/noam-io/lemma_erlang) - A lemma for IDEO's Noam internet-of-things prototyping platform.

## Algorithms and Datastructures
*Libraries and implementations of algorithms and datastructures.*

* [datum ![GitHub Repo Stars](https://img.shields.io/github/stars/fogfish/datum) ![GitHub last commit](https://img.shields.io/github/last-commit/fogfish/datum)](https://github.com/fogfish/datum) - A pure functional and generic programming for Erlang
* [erlando ![GitHub Repo Stars](https://img.shields.io/github/stars/travelping/erlando) ![GitHub last commit](https://img.shields.io/github/last-commit/travelping/erlando)](https://github.com/travelping/erlando) - A set of syntax extensions like currying and monads for Erlang.
* [statebox ![GitHub Repo Stars](https://img.shields.io/github/stars/mochi/statebox) ![GitHub last commit](https://img.shields.io/github/last-commit/mochi/statebox)](https://github.com/mochi/statebox) - Erlang state "monad" with merge/conflict-resolution capabilities.
* [riak_dt ![GitHub Repo Stars](https://img.shields.io/github/stars/basho/riak_dt) ![GitHub last commit](https://img.shields.io/github/last-commit/basho/riak_dt)](https://github.com/basho/riak_dt) - Erlang library of state based CRDTs.

## Translations and Internationalizations
*Libraries providing translations or internationalizations.*

## Miscellaneous
*Useful libraries or tools that don't fit in the categories above.*

* [erlang-history ![GitHub Repo Stars](https://img.shields.io/github/stars/ferd/erlang-history) ![GitHub last commit](https://img.shields.io/github/last-commit/ferd/erlang-history)](https://github.com/ferd/erlang-history) - Hacks to add shell history to Erlang's shell.
* [erld ![GitHub Repo Stars](https://img.shields.io/github/stars/ShoreTel-Inc/erld) ![GitHub last commit](https://img.shields.io/github/last-commit/ShoreTel-Inc/erld)](https://github.com/ShoreTel-Inc/erld) - erld is a small program designed to solve the problem of running Erlang programs as a UNIX daemon.

# Resources
Various resources, such as books, websites and articles, for improving your Erlang development skills and knowledge.

## Websites
*Useful web and Erlang-related websites and newsletters.*

* [Erlang Bookmarks ![GitHub Repo Stars](https://img.shields.io/github/stars/0xAX/erlang-bookmarks) ![GitHub last commit](https://img.shields.io/github/last-commit/0xAX/erlang-bookmarks)](https://github.com/0xAX/erlang-bookmarks/wiki/Erlang-bookmarks) - All about erlang programming language [powerd by community].
* [Erlang Central](https://erlangcentral.org/) - An awesome collections of erlang resource along with live community chat for discussing and seeking help.
* [Planet Erlang](http://www.planeterlang.com/) - Planet site/RSS feed of blog posts covering topics across the Erlang ecosystem.
* [Spawned Shelter](http://spawnedshelter.com/) - Erlang Spawned Shelter. A collection of the best articles, videos and presentations related to Erlang.

## Books
*Fantastic books and e-books.*

* [Erlang and Elixir for Imperative Programmers](https://leanpub.com/erlangandelixirforimperativeprogrammers) - Introduction to Erlang and Elixir in the context of functional concepts by Wolfgang Loder (2016)
* [Learn You Some Erlang](http://learnyousomeerlang.com/) - Learn you some Erlang - for great good! A very thorough resource covering everything from beginning Erlang programming to large-scale development and deployment.
* [Stuff Goes Bad - ERLANG IN ANGER](http://www.erlang-in-anger.com/) - This book intends to be a little guide about how to be the Erlang medic in a time of war.

## Web Reading
*General web-development-related reading materials.*

## Erlang Reading
*Erlang-releated reading materials.*

* [The Joy of Erlang; Or, How To Ride A Toruk](http://www.evanmiller.org/joy-of-erlang.html) - The Joy of Erlang; Or, How To Ride A Toruk A fast track introduction to Erlang that teaches the language by walking through a few example projects.

## Screencasts
*Cool video tutorials.*

# Contributing
Please see [CONTRIBUTING ![GitHub Repo Stars](https://img.shields.io/github/stars/drobakowski/awesome-erlang) ![GitHub last commit](https://img.shields.io/github/last-commit/drobakowski/awesome-erlang)](https://github.com/drobakowski/awesome-erlang/blob/master/CONTRIBUTING.md) for details.
