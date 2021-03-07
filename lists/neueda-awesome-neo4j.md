Awesome Neo4j
==============
[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
[![Build Status](https://api.travis-ci.org/neueda/awesome-neo4j.svg?branch=master )](https://travis-ci.org/neueda/awesome-neo4j)

A curated list of awesome [Neo4j](https://neo4j.com/) resources.  
Inspired by the `awesome-*` trend on GitHub.

The goal is to build a categorized community-driven collection of very well-known resources.  
Sharing, suggestions and contributions are always welcome!

Thanks to all [contributors ![GitHub Repo Stars](https://img.shields.io/github/stars/Neueda/awesome-neo4j) ![GitHub last commit](https://img.shields.io/github/last-commit/Neueda/awesome-neo4j)](https://github.com/Neueda/awesome-neo4j/graphs/contributors).

Maintained by [Neueda R&D](http://labs.neueda.com/).

Table of Contents
=================

  * [Basics](#basics)
  * [Connectors](#connectors)
    * [Bolt](#bolt)
    * [REST API](#rest-api)
      * [Java](#java)
      * [Ruby](#ruby)
      * [Python](#python)
      * [PHP](#php)
      * [Other](#other)
  * [Cloud](#cloud)
  * [Packages](#packages)
  * [Docker](#docker)
  * [Full\-text search](#full-text-search)
  * [Import](#import)
  * [Benchmarking](#benchmarking)
  * [Extensions](#extensions)
  * [Stored Procedures](#stored-procedures)
  * [Development](#development)
  * [Editors](#editors)
  * [Shell](#shell)
  * [Visualization](#visualization)
  * [Tools](#tools)
  * [Resources](#resources)
    * [Learn](#learn)
    * [Certification](#certification)
    * [Bolt](#bolt-1)
    * [Books](#books)
    * [Miscellaneous](#miscellaneous)
  * [License](#license)

Created by [gh-md-toc ![GitHub Repo Stars](https://img.shields.io/github/stars/ekalinin/github-markdown-toc.go) ![GitHub last commit](https://img.shields.io/github/last-commit/ekalinin/github-markdown-toc.go)](https://github.com/ekalinin/github-markdown-toc.go)

# Basics

- [Official documentation](https://neo4j.com/docs/)
- [Cypher Refcard](https://neo4j.com/docs/cypher-refcard/current/)
- [Developer resources](https://neo4j.com/developer/get-started/)
- [Gists](http://graphgist.neo4j.com/) - With Neo4j GraphGists you can describe and model your domain in a simple text file and render it as a rich, interactive page in any browser. Perfect to document a specific domain, use-case, question or graph problem.
- [Neo4j Examples](https://github.com/neo4j-examples) - Examples for Neo4j and Library Usage.

# Related project

- [openCypher](http://www.opencypher.org/) - openCypher is an open source project to bring a new public implementation of the industry’s most widely adopted graph query language: Cypher.
- [Bolt Protocol](https://boltprotocol.org) - The Bolt network protocol is a highly efficient, lightweight client-server protocol designed for database applications.

# Connectors

## Bolt

- [neo4j-java-driver ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4j/neo4j-java-driver) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4j/neo4j-java-driver)](https://github.com/neo4j/neo4j-java-driver) - Java driver for Neo4j binary protocol.
- [neo4j-python-driver ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4j/neo4j-python-driver) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4j/neo4j-python-driver)](https://github.com/neo4j/neo4j-python-driver) - Python driver for Neo4j binary protocol.
- [neo4j-javascript-driver ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4j/neo4j-javascript-driver) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4j/neo4j-javascript-driver)](https://github.com/neo4j/neo4j-javascript-driver) - JavaScript driver for Neo4j binary protocol.
- [neo4j-dotnet-driver ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4j/neo4j-dotnet-driver) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4j/neo4j-dotnet-driver)](https://github.com/neo4j/neo4j-dotnet-driver) - .Net driver for Neo4j (Bolt).
- [neo4j-bolt-php ![GitHub Repo Stars](https://img.shields.io/github/stars/graphaware/neo4j-bolt-php) ![GitHub last commit](https://img.shields.io/github/last-commit/graphaware/neo4j-bolt-php)](https://github.com/graphaware/neo4j-bolt-php) - PHP driver for Neo4j binary protocol.
- [libneo4j-client ![GitHub Repo Stars](https://img.shields.io/github/stars/cleishm/libneo4j-client) ![GitHub last commit](https://img.shields.io/github/last-commit/cleishm/libneo4j-client)](https://github.com/cleishm/libneo4j-client) - libneo4j-client is a client library written in C for Neo4j. It is not intended as a complete driver, but rather as a foundation on which basic tools and drivers for various languages may be built. libneo4j-client takes care of all the detail of establishing a session with a Neo4j server, sending statements for evaluation, and retrieving results.
- [neo4j-spark-connector ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4j-contrib/neo4j-spark-connector) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4j-contrib/neo4j-spark-connector)](https://github.com/neo4j-contrib/neo4j-spark-connector) - Neo4j-Spark-Connector based on Neo4j 3.0's Bolt protocol
- [neo4j-elixir-driver ![GitHub Repo Stars](https://img.shields.io/github/stars/mschae/boltex) ![GitHub last commit](https://img.shields.io/github/last-commit/mschae/boltex)](https://github.com/mschae/boltex) - Elixir driver for the neo4j bolt protocol
- [neo4j-elixir-wrapper ![GitHub Repo Stars](https://img.shields.io/github/stars/florinpatrascu/bolt_sips) ![GitHub last commit](https://img.shields.io/github/last-commit/florinpatrascu/bolt_sips)](https://github.com/florinpatrascu/bolt_sips) - Neo4j driver for Elixir, wrapped around the Bolt protocol. Fork of the Boltex.

## REST API

### Java

- [neo4j-ogm ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4j/neo4j-ogm) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4j/neo4j-ogm)](https://github.com/neo4j/neo4j-ogm) - Object-Graph Mapping Library for Neo4j.
- [spring-data-neo4j ![GitHub Repo Stars](https://img.shields.io/github/stars/spring-projects/spring-data-neo4j) ![GitHub last commit](https://img.shields.io/github/last-commit/spring-projects/spring-data-neo4j)](https://github.com/spring-projects/spring-data-neo4j) - Provides support to increase developer productivity in Java when using the neo4j graph database.
- [neo4j-jdbc ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4j-contrib/neo4j-jdbc) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4j-contrib/neo4j-jdbc)](https://github.com/neo4j-contrib/neo4j-jdbc) - Neo4j JDBC driver.
- [jcypher ![GitHub Repo Stars](https://img.shields.io/github/stars/Wolfgang-Schuetzelhofer/jcypher) ![GitHub last commit](https://img.shields.io/github/last-commit/Wolfgang-Schuetzelhofer/jcypher)](https://github.com/Wolfgang-Schuetzelhofer/jcypher) - Java access to Neo4J graph databases at multiple levels of abstraction.

### Ruby

- [neo4jrb ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4jrb/neo4j) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4jrb/neo4j)](https://github.com/neo4jrb/neo4j) - An active model wrapper for the Neo4j Graph Database for Ruby.
- [neography ![GitHub Repo Stars](https://img.shields.io/github/stars/maxdemarzi/neography) ![GitHub last commit](https://img.shields.io/github/last-commit/maxdemarzi/neography)](https://github.com/maxdemarzi/neography) - A thin Ruby wrapper to the Neo4j Rest API.

### Python

- [py2neo ![GitHub Repo Stars](https://img.shields.io/github/stars/nigelsmall/py2neo) ![GitHub last commit](https://img.shields.io/github/last-commit/nigelsmall/py2neo)](https://github.com/nigelsmall/py2neo) - Py2neo is a comprehensive toolkit for working with Neo4j from within Python applications or from the command line.
- [neomodel ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4j-contrib/neomodel) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4j-contrib/neomodel)](https://github.com/neo4j-contrib/neomodel) - An Object Graph Mapper (OGM) for the neo4j graph database, built on the awesome py2neo.

### PHP

- [Neo4j-PHP-OGM ![GitHub Repo Stars](https://img.shields.io/github/stars/graphaware/neo4j-php-ogm) ![GitHub last commit](https://img.shields.io/github/last-commit/graphaware/neo4j-php-ogm)](https://github.com/graphaware/neo4j-php-ogm) - Doctrine style Object Graph Mapper for Neo4j
- [neo4jphp ![GitHub Repo Stars](https://img.shields.io/github/stars/jadell/neo4jphp) ![GitHub last commit](https://img.shields.io/github/last-commit/jadell/neo4jphp)](https://github.com/jadell/neo4jphp) - PHP wrapper of the Neo4j REST interface.
- [NeoEloquent ![GitHub Repo Stars](https://img.shields.io/github/stars/Vinelab/NeoEloquent) ![GitHub last commit](https://img.shields.io/github/last-commit/Vinelab/NeoEloquent)](https://github.com/Vinelab/NeoEloquent) - A Neo4j ORM - Based on Eloquent.
- [neo4j-php-client ![GitHub Repo Stars](https://img.shields.io/github/stars/graphaware/neo4j-php-client) ![GitHub last commit](https://img.shields.io/github/last-commit/graphaware/neo4j-php-client)](https://github.com/graphaware/neo4j-php-client/tree/4.0) - PHP Client for Neo4j leveraging the Http and Bolt protocols.
- [Spider ![GitHub Repo Stars](https://img.shields.io/github/stars/spider/spider) ![GitHub last commit](https://img.shields.io/github/last-commit/spider/spider)](https://github.com/spider/spider) - A simple, flexible, and beautiful graph-data abstraction for php.

### Other

- [node-neo4j ![GitHub Repo Stars](https://img.shields.io/github/stars/thingdom/node-neo4j) ![GitHub last commit](https://img.shields.io/github/last-commit/thingdom/node-neo4j)](https://github.com/thingdom/node-neo4j) - REST API client for Node.
- [Neo4jClient ![GitHub Repo Stars](https://img.shields.io/github/stars/Readify/Neo4jClient) ![GitHub last commit](https://img.shields.io/github/last-commit/Readify/Neo4jClient)](https://github.com/Readify/Neo4jClient) - .NET client binding.
- [neoism ![GitHub Repo Stars](https://img.shields.io/github/stars/jmcvetta/neoism) ![GitHub last commit](https://img.shields.io/github/last-commit/jmcvetta/neoism)](https://github.com/jmcvetta/neoism) - Client for Golang.
- [neocons ![GitHub Repo Stars](https://img.shields.io/github/stars/michaelklishin/neocons) ![GitHub last commit](https://img.shields.io/github/last-commit/michaelklishin/neocons)](https://github.com/michaelklishin/neocons) - A feature rich idiomatic Clojure client for the REST API.
- [RNeo4j ![GitHub Repo Stars](https://img.shields.io/github/stars/nicolewhite/RNeo4j) ![GitHub last commit](https://img.shields.io/github/last-commit/nicolewhite/RNeo4j)](https://github.com/nicolewhite/RNeo4j) - Driver for R.
- [AnormCypher ![GitHub Repo Stars](https://img.shields.io/github/stars/AnormCypher/AnormCypher) ![GitHub last commit](https://img.shields.io/github/last-commit/AnormCypher/AnormCypher)](https://github.com/AnormCypher/AnormCypher) - Scala library based on Anorm in the Play Framework.

# Cloud

- [GrapheneDB](https://www.graphenedb.com/) - The world's first fully managed
Neo4j graph database.
- [GraphStory](https://www.graphstory.com/) - Neo4j enterprise cloud provider

# Packages

- [Debian Packages](http://debian.neo4j.org/)
- [Yum Repo](http://yum.neo4j.org/stable/)

# Docker

- [docker-neo4j ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4j/docker-neo4j) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4j/docker-neo4j)](https://github.com/neo4j/docker-neo4j) - Docker Images for the Neo4j Graph Database.
- [docker-neo4j-cluster ![GitHub Repo Stars](https://img.shields.io/github/stars/ekino/docker-neo4j-cluster) ![GitHub last commit](https://img.shields.io/github/last-commit/ekino/docker-neo4j-cluster)](https://github.com/ekino/docker-neo4j-cluster) - Up & Running Neo4j cluster in no time.

# Full-text search

- [GraphAware Neo4j Elasticsearch Integration ![GitHub Repo Stars](https://img.shields.io/github/stars/graphaware/neo4j-to-elasticsearch) ![GitHub last commit](https://img.shields.io/github/last-commit/graphaware/neo4j-to-elasticsearch)](https://github.com/graphaware/neo4j-to-elasticsearch) - GraphAware Framework Module for Integrating Neo4j with Elasticsearch.
- [GraphAware Graph-Aided Search ![GitHub Repo Stars](https://img.shields.io/github/stars/graphaware/graph-aided-search) ![GitHub last commit](https://img.shields.io/github/last-commit/graphaware/graph-aided-search)](https://github.com/graphaware/graph-aided-search) - Elasticsearch plugin offering Neo4j integration for Personalized Search.
- [neo4j-elasticsearch ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4j-contrib/neo4j-elasticsearch) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4j-contrib/neo4j-elasticsearch)](https://github.com/neo4j-contrib/neo4j-elasticsearch) - Neo4j ElasticSearch Integration.

# Import

- [GraphAware Neo4j Importer ![GitHub Repo Stars](https://img.shields.io/github/stars/graphaware/neo4j-importer) ![GitHub last commit](https://img.shields.io/github/last-commit/graphaware/neo4j-importer)](https://github.com/graphaware/neo4j-importer) - Java importer skeleton for complicated, business-logic-heavy high-performance Neo4j imports directly from SQL databases, CSV files, etc.
- [neo4j-csv-firehose ![GitHub Repo Stars](https://img.shields.io/github/stars/sarmbruster/neo4j-csv-firehose) ![GitHub last commit](https://img.shields.io/github/last-commit/sarmbruster/neo4j-csv-firehose)](https://github.com/sarmbruster/neo4j-csv-firehose) - Enables Neo4j’s `LOAD CSV` Cypher command to load from other datasources as well.
- [neo4j-rdbms-import ![GitHub Repo Stars](https://img.shields.io/github/stars/jexp/neo4j-rdbms-import) ![GitHub last commit](https://img.shields.io/github/last-commit/jexp/neo4j-rdbms-import)](https://github.com/jexp/neo4j-rdbms-import) - An automatic importer for relational databases into Neo4j.
- [Doc manager for Neo4j ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4j-contrib/neo4j_doc_manager) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4j-contrib/neo4j_doc_manager)](https://github.com/neo4j-contrib/neo4j_doc_manager) - The Neo4j Doc Manager takes MongoDB documents and makes it easy to query them for relationships by making them available in a Neo4j graph structure, following the format specified by Mongo Connector.
- [neoloadcsvskelgen ![GitHub Repo Stars](https://img.shields.io/github/stars/wadael/neoloadcsvskelgen) ![GitHub last commit](https://img.shields.io/github/last-commit/wadael/neoloadcsvskelgen)](https://github.com/wadael/neoloadcsvskelgen) - Will output a skeleton of LOAD CSV Cypher code, from very little input (filename, separator, hints). Save time, avoid typos. 

# Benchmarking

- [neoprofiler ![GitHub Repo Stars](https://img.shields.io/github/stars/moxious/neoprofiler) ![GitHub last commit](https://img.shields.io/github/last-commit/moxious/neoprofiler)](https://github.com/moxious/neoprofiler) - Neo4J database profiling utility.

# Extensions

- [GraphAware Neo4j UUID ![GitHub Repo Stars](https://img.shields.io/github/stars/graphaware/neo4j-uuid) ![GitHub last commit](https://img.shields.io/github/last-commit/graphaware/neo4j-uuid)](https://github.com/graphaware/neo4j-uuid) - GraphAware Runtime Module that assigns a UUID to all nodes in the graph transparently.
- [GraphAware Neo4j ChangeFeed ![GitHub Repo Stars](https://img.shields.io/github/stars/graphaware/neo4j-changefeed) ![GitHub last commit](https://img.shields.io/github/last-commit/graphaware/neo4j-changefeed)](https://github.com/graphaware/neo4j-changefeed) - A GraphAware Framework Runtime Module allowing users to find out what were the latest changes performed on the graph.
- [GraphAware Neo4j TimeTree ![GitHub Repo Stars](https://img.shields.io/github/stars/graphaware/neo4j-timetree) ![GitHub last commit](https://img.shields.io/github/last-commit/graphaware/neo4j-timetree)](https://github.com/graphaware/neo4j-timetree) - Java and REST APIs for working with time-representing tree in Neo4j.
- [GraphAware Neo4j Recommendation Engine ![GitHub Repo Stars](https://img.shields.io/github/stars/graphaware/neo4j-reco) ![GitHub last commit](https://img.shields.io/github/last-commit/graphaware/neo4j-reco)](https://github.com/graphaware/neo4j-reco) - Neo4j-based recommendation engine module with real-time and pre-computed recommendations.
- [GraphAware Neo4j Algorithms ![GitHub Repo Stars](https://img.shields.io/github/stars/graphaware/neo4j-algorithms) ![GitHub last commit](https://img.shields.io/github/last-commit/graphaware/neo4j-algorithms)](https://github.com/graphaware/neo4j-algorithms) - Custom graph algorithms for Neo4j with own Java and REST APIs.
- [GraphAware Neo4j Warmup ![GitHub Repo Stars](https://img.shields.io/github/stars/graphaware/neo4j-warmup) ![GitHub last commit](https://img.shields.io/github/last-commit/graphaware/neo4j-warmup)](https://github.com/graphaware/neo4j-warmup) - Simple library that warms up Neo4j caches with a single REST call.
- [GraphAware Neo4j RestTest ![GitHub Repo Stars](https://img.shields.io/github/stars/graphaware/neo4j-resttest) ![GitHub last commit](https://img.shields.io/github/last-commit/graphaware/neo4j-resttest)](https://github.com/graphaware/neo4j-resttest) - GraphAware RestTest is a simple library for testing code that talks to Neo4j running in standalone server mode.
- [GraphAware Neo4j Expire ![GitHub Repo Stars](https://img.shields.io/github/stars/graphaware/neo4j-expire) ![GitHub last commit](https://img.shields.io/github/last-commit/graphaware/neo4j-expire)](https://github.com/graphaware/neo4j-expire) - GraphAware Expire is a simple library that automatically deletes nodes and relationships from the database when they've reached their expiration date or time-to-live (TTL).
- [Spatial ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4j-contrib/spatial) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4j-contrib/spatial)](https://github.com/neo4j-contrib/spatial) - Neo4j Spatial is a library of utilities for Neo4j that faciliates the enabling of spatial operations on data.
- [Graphify ![GitHub Repo Stars](https://img.shields.io/github/stars/Graphify/graphify) ![GitHub last commit](https://img.shields.io/github/last-commit/Graphify/graphify)](https://github.com/Graphify/graphify) - Graphify is a Neo4j unmanaged extension used for document and text classification using graph-based hierarchical pattern recognition.
- [neo4j-tx-participation ![GitHub Repo Stars](https://img.shields.io/github/stars/jexp/neo4j-tx-participation) ![GitHub last commit](https://img.shields.io/github/last-commit/jexp/neo4j-tx-participation)](https://github.com/jexp/neo4j-tx-participation) - This is a Neo4j Server Extension to make Neo4j REST-API participate in transactions started by the transactional Cypher endpoint.

# Stored Procedures

- [Apoc : Awesome Procedures on Cypher ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4j-contrib/neo4j-apoc-procedures) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4j-contrib/neo4j-apoc-procedures)](https://github.com/neo4j-contrib/neo4j-apoc-procedures) - Collection of useful procedures for Neo4j 3.x
- [Graphgen ![GitHub Repo Stars](https://img.shields.io/github/stars/graphaware/neo4j-graphgen-procedure) ![GitHub last commit](https://img.shields.io/github/last-commit/graphaware/neo4j-graphgen-procedure)](https://github.com/graphaware/neo4j-graphgen-procedure) - Neo4j procedure for generating test data easily with Cypher

# Development

- [Maven repositories](https://m2.neo4j.org/index.html) - Neo4j Maven repositories (releases, snapshots).
- [GraphAware Neo4j Framework ![GitHub Repo Stars](https://img.shields.io/github/stars/graphaware/neo4j-framework) ![GitHub last commit](https://img.shields.io/github/last-commit/graphaware/neo4j-framework)](https://github.com/graphaware/neo4j-framework)- GraphAware Framework speeds up development with Neo4j by providing a platform for building useful generic as well as domain-specific functionality, analytical capabilities, (iterative) graph algorithms, etc.
- [cypher-dsl ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4j-contrib/cypher-dsl) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4j-contrib/cypher-dsl)](https://github.com/neo4j-contrib/cypher-dsl) - A Java DSL for the Cypher Query Language and an optional Query DSL mode.
- [Liquigraph ![GitHub Repo Stars](https://img.shields.io/github/stars/liquigraph/liquigraph) ![GitHub last commit](https://img.shields.io/github/last-commit/liquigraph/liquigraph)](https://github.com/liquigraph/liquigraph) - Database migrations management tool, based on how Liquibase works.
- [blueprints ![GitHub Repo Stars](https://img.shields.io/github/stars/tinkerpop/blueprints) ![GitHub last commit](https://img.shields.io/github/last-commit/tinkerpop/blueprints)](https://github.com/tinkerpop/blueprints) - Blueprints is a collection of interfaces, implementations, ouplementations, and test suites for the property graph data model. Blueprints is analogous to the JDBC, but for graph databases.
- [structr ![GitHub Repo Stars](https://img.shields.io/github/stars/structr/structr) ![GitHub last commit](https://img.shields.io/github/last-commit/structr/structr)](https://github.com/structr/structr) - Graph Application Platform based on Neo4j.
- [Reco4PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/graphaware/reco4php) ![GitHub last commit](https://img.shields.io/github/last-commit/graphaware/reco4php)](https://github.com/graphaware/reco4php) - Neo4j based Recommendation Engine Framework for PHP.

# Editors

- [jetbrains-plugin-graph-database-support ![GitHub Repo Stars](https://img.shields.io/github/stars/neueda/jetbrains-plugin-graph-database-support) ![GitHub last commit](https://img.shields.io/github/last-commit/neueda/jetbrains-plugin-graph-database-support)](https://github.com/neueda/jetbrains-plugin-graph-database-support) - Graph Databases support for Jetbrains family IDE's.
- [cypher-vim-syntax ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4j-contrib/cypher-vim-syntax) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4j-contrib/cypher-vim-syntax)](https://github.com/neo4j-contrib/cypher-vim-syntax) - Very basic Vim syntax for Cypher.

# Shell

- [cycli ![GitHub Repo Stars](https://img.shields.io/github/stars/nicolewhite/cycli) ![GitHub last commit](https://img.shields.io/github/last-commit/nicolewhite/cycli)](https://github.com/nicolewhite/cycli) - A Command Line Interface for Cypher.
- [neo4j-shell-tools ![GitHub Repo Stars](https://img.shields.io/github/stars/jexp/neo4j-shell-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/jexp/neo4j-shell-tools)](https://github.com/jexp/neo4j-shell-tools) - A bunch of import/export tools for the neo4j-shell.

# Visualization

- [neoclipse ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4j-contrib/neoclipse) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4j-contrib/neoclipse)](https://github.com/neo4j-contrib/neoclipse) - Neoclipse is a tool to view, edit and explore Neo4j databases.
- [Gephi ![GitHub Repo Stars](https://img.shields.io/github/stars/gephi/gephi) ![GitHub last commit](https://img.shields.io/github/last-commit/gephi/gephi)](https://github.com/gephi/gephi) - Gephi is an award-winning open-source platform for visualizing and manipulating large graphs.
- [Linkurious](https://linkurio.us/) - Linkurious helps search and visualize your graph data through a simple web-based interface.
- [yFiles for HTML](https://www.yworks.com/products/yfiles-for-html) - yFiles is a commercial generic graph visualization programming library that comes with [a demo to visualize your neo4j databases in JavaScript](http://live.yworks.com/demos/#neo4j). It's also the basis for the [free neo4j Graph Explorer app](https://www.yworks.com/neo4j-explorer/).

# Tools

- [Graphgen](http://graphgen.graphaware.com) - Graph Generation engine based on the Cypher DSL.
- [store-utils ![GitHub Repo Stars](https://img.shields.io/github/stars/jexp/store-utils) ![GitHub last commit](https://img.shields.io/github/last-commit/jexp/store-utils)](https://github.com/jexp/store-utils) - Utilities to compact, copy, fix, analyse Neo4j stores.
- [ineo ![GitHub Repo Stars](https://img.shields.io/github/stars/cohesivestack/ineo) ![GitHub last commit](https://img.shields.io/github/last-commit/cohesivestack/ineo)](https://github.com/cohesivestack/ineo)- A simple but useful Neo4j instance manager.
- [yFiles neo4j Graph Explorer](https://www.yworks.com/blog/neo4j-node-design) - A simple, free online tool to visualize your graph data and database schema.

## Learn

- [Getting Started with Neo4j](https://neo4j.com/graphacademy/online-training/getting-started-graph-databases-using-neo4j/)
- [Neo4j in Production](https://neo4j.com/graphacademy/online-training/neo4j-production/)
- [Neo4j Koans ![GitHub Repo Stars](https://img.shields.io/github/stars/jimwebber/neo4j-tutorial) ![GitHub last commit](https://img.shields.io/github/last-commit/jimwebber/neo4j-tutorial)](https://github.com/jimwebber/neo4j-tutorial) - A koan-style tutorial in Java for Neo4j.

## Certification

- [Neo4j Certification](https://neo4j.com/graphacademy/neo4j-certification/) - Become a Neo4j-Certified Professional.

## Miscellaneous

- [Neo4j's Idea board](https://trello.com/b/2zFtvDnV/public-idea-board)
- [Hardware Sizing Calculator](https://neo4j.com/hardware-sizing-calculator/)

# License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Neueda R&D](https://github.com/Neueda) has waived all copyright and related or neighboring rights to this work.
