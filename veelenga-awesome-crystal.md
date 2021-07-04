<p align="center"><img src="https://github.com/veelenga/awesome-crystal/raw/master/logo/logotype_horizontal.png" alt="awesome-crystal"></p>

# Awesome Crystal
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Build Status](https://api.travis-ci.org/veelenga/awesome-crystal.svg)](https://travis-ci.org/veelenga/awesome-crystal)

A curated list of awesome Crystal code and resources. Inspired by [awesome ![GitHub Repo stars](https://img.shields.io/github/stars/sindresorhus/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome)](https://github.com/sindresorhus/awesome) and [awesome-awesomeness ![GitHub Repo stars](https://img.shields.io/github/stars/bayandin/awesome-awesomeness) ![GitHub last commit](https://img.shields.io/github/last-commit/bayandin/awesome-awesomeness)](https://github.com/bayandin/awesome-awesomeness).
The goal is to have projects mostly stable and useful for the community.

Search [Crystal Shards](https://crystalshards.xyz) or follow announcements [Crystal [ANN]](https://crystal-ann.com) for more.

Contributions are welcome. Please take a quick look at the [contribution guidelines ![GitHub Repo stars](https://img.shields.io/github/stars/veelenga/awesome-crystal) ![GitHub last commit](https://img.shields.io/github/last-commit/veelenga/awesome-crystal)](https://github.com/veelenga/awesome-crystal/blob/master/.github/CONTRIBUTING.md) first.

* [Awesome Crystal](#awesome-crystal)
  * [Algorithms and Data structures](#algorithms-and-data-structures)
  * [Blockchain](#blockchain)
  * [C Bindings](#c-bindings)
  * [Caching](#caching)
  * [CLI Builders](#cli-builders)
  * [CLI Utils](#cli-utils)
  * [Code Analysis and Metrics](#code-analysis-and-metrics)
  * [Compression](#compression)
  * [Configuration](#configuration)
  * [Converters](#converters)
  * [Cryptography](#cryptography)
  * [Data Formats](#data-formats)
  * [Data Generators](#data-generators)
  * [Database Drivers/Clients](#database-driversclients)
  * [Database Tools](#database-tools)
  * [Debugging](#debugging)
  * [Dependency Injection](#dependency-injection)
  * [Email](#email)
  * [Environment Management](#environment-management)
  * [Examples and funny stuff](#examples-and-funny-stuff)
  * [Framework Components](#framework-components)
  * [Game Development](#game-development)
  * [GUI Development](#gui-development)
  * [HTML Builders](#html-builders)
  * [HTML/XML parsing](#htmlxml-parsing)
  * [HTTP](#http)
  * [Image Processing](#image-processing)
  * [Implementations/Compilers](#implementationscompilers)
  * [Logging and monitoring](#logging-and-monitoring)
  * [Machine Learning](#machine-learning)
  * [Markdown/Text Processors](#markdowntext-processors)
  * [Misc](#misc)
  * [Network Protocols](#network-protocols)
  * [Networking](#networking)
  * [ORM/ODM Extensions](#ormodm-extensions)
  * [Package Management](#package-management)
  * [Processes and Threads](#processes-and-threads)
  * [Project Generators](#project-generators)
  * [Queues and Messaging](#queues-and-messaging)
  * [Routing](#routing)
  * [Scheduling](#scheduling)
  * [Science and Data analysis](#science-and-data-analysis)
  * [Search](#search)
  * [Serverless Computing](#serverless-computing)
  * [System](#system)
  * [Task management](#task-management)
  * [Template Engine](#template-engine)
  * [Testing](#testing)
  * [Third-party APIs](#third-party-apis)
  * [Validation](#validation)
  * [Web Frameworks](#web-frameworks)
* [Community](#community)
  * [Unofficial](#unofficial)
* [Resources](#resources)
  * [Official Documentation Translations](#official-documentation-translations)
* [Services and Apps](#services-and-apps)
* [Tools](#tools)
  * [DevOps](#devops)
  * [Editor Plugins](#editor-plugins)
  * [LSP Language Server Protocol Implementations](#lsp-language-server-protocol-implementations)
  * [Shell Plugins](#shell-plugins)

## Algorithms and Data structures
 * [bisect ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/bisect) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/bisect)](https://github.com/spider-gazelle/bisect) - Inserting values into a sorted array
 * [blurhash.cr ![GitHub Repo stars](https://img.shields.io/github/stars/Sija/blurhash.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/Sija/blurhash.cr)](https://github.com/Sija/blurhash.cr) - [BlurHash ![GitHub Repo stars](https://img.shields.io/github/stars/woltapp/blurhash) ![GitHub last commit](https://img.shields.io/github/last-commit/woltapp/blurhash)](https://github.com/woltapp/blurhash) implementation
 * [crie ![GitHub Repo stars](https://img.shields.io/github/stars/c910335/crie) ![GitHub last commit](https://img.shields.io/github/last-commit/c910335/crie)](https://github.com/c910335/crie) - Compile-time Trie
 * [CrOTP ![GitHub Repo stars](https://img.shields.io/github/stars/philnash/crotp) ![GitHub last commit](https://img.shields.io/github/last-commit/philnash/crotp)](https://github.com/philnash/crotp) - HOTP and TOTP implementation for two factor authentication
 * [crystal-linked-list ![GitHub Repo stars](https://img.shields.io/github/stars/abvdasker/crystal-linked-list) ![GitHub last commit](https://img.shields.io/github/last-commit/abvdasker/crystal-linked-list)](https://github.com/abvdasker/crystal-linked-list) - Implementation of Linked List
 * [crystaledge ![GitHub Repo stars](https://img.shields.io/github/stars/unn4m3d/crystaledge) ![GitHub last commit](https://img.shields.io/github/last-commit/unn4m3d/crystaledge)](https://github.com/unn4m3d/crystaledge) - A pure Vector Math library
 * [crystalg ![GitHub Repo stars](https://img.shields.io/github/stars/tobyapi/crystalg) ![GitHub last commit](https://img.shields.io/github/last-commit/tobyapi/crystalg)](https://github.com/tobyapi/crystalg) - A Generic Algorithm Library
 * [crystalline ![GitHub Repo stars](https://img.shields.io/github/stars/jtomschroeder/crystalline) ![GitHub last commit](https://img.shields.io/github/last-commit/jtomschroeder/crystalline)](https://github.com/jtomschroeder/crystalline) - A collection of containers and algorithms
 * [edits.cr ![GitHub Repo stars](https://img.shields.io/github/stars/tcrouch/edits.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/tcrouch/edits.cr)](https://github.com/tcrouch/edits.cr) - Collection of edit distance algorithms
 * [fzy ![GitHub Repo stars](https://img.shields.io/github/stars/hugopl/fzy) ![GitHub last commit](https://img.shields.io/github/last-commit/hugopl/fzy)](https://github.com/hugopl/fzy) - A Crystal port of awesome Fzy project fuzzy finder algorithm
 * [graphlb ![GitHub Repo stars](https://img.shields.io/github/stars/mettuaditya/graphlb) ![GitHub last commit](https://img.shields.io/github/last-commit/mettuaditya/graphlb)](https://github.com/mettuaditya/graphlb) - Collection of graph datastructure and algorithms
 * [haversine ![GitHub Repo stars](https://img.shields.io/github/stars/geocrystal/haversine) ![GitHub last commit](https://img.shields.io/github/last-commit/geocrystal/haversine)](https://github.com/geocrystal/haversine) - An Implementation of the Haversine formula
 * [kd_tree ![GitHub Repo stars](https://img.shields.io/github/stars/geocrystal/kd_tree) ![GitHub last commit](https://img.shields.io/github/last-commit/geocrystal/kd_tree)](https://github.com/geocrystal/kd_tree) - An implementation of "K-Dimensional Tree" and "N-Nearest Neighbors"
 * [ksuid.cr ![GitHub Repo stars](https://img.shields.io/github/stars/Sija/ksuid.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/Sija/ksuid.cr)](https://github.com/Sija/ksuid.cr) - K-Sortable Globally Unique IDs
 * [markov ![GitHub Repo stars](https://img.shields.io/github/stars/mccallofthewild/markov) ![GitHub last commit](https://img.shields.io/github/last-commit/mccallofthewild/markov)](https://github.com/mccallofthewild/markov) - Build Markov Chains and run Markov Processes
 * [multiset.cr ![GitHub Repo stars](https://img.shields.io/github/stars/tcrouch/multiset.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/tcrouch/multiset.cr)](https://github.com/tcrouch/multiset.cr) - Implementation of a multiset
 * [qr-code ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/qr-code) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/qr-code)](https://github.com/spider-gazelle/qr-code) - QR Code generator
 * [radix ![GitHub Repo stars](https://img.shields.io/github/stars/luislavena/radix) ![GitHub last commit](https://img.shields.io/github/last-commit/luislavena/radix)](https://github.com/luislavena/radix) - Radix Tree implementation
 * [s2_cells ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/s2_cells) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/s2_cells)](https://github.com/spider-gazelle/s2_cells) - [S2 Geometry](https://s2geometry.io/devguide/s2cell_hierarchy.html) for spatial indexing
 * [splay_tree_map ![GitHub Repo stars](https://img.shields.io/github/stars/wyhaines/splay_tree_map.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/wyhaines/splay_tree_map.cr)](https://github.com/wyhaines/splay_tree_map.cr) - Splay Tree implementation that conforms to the Hash ducktype

## Blockchain
 * [Axentro ![GitHub Repo stars](https://img.shields.io/github/stars/Axentro/Axentro) ![GitHub last commit](https://img.shields.io/github/last-commit/Axentro/Axentro)](https://github.com/Axentro/Axentro) - A custom blockchain platform
 * [Cocol ![GitHub Repo stars](https://img.shields.io/github/stars/cocol-project/cocol) ![GitHub last commit](https://img.shields.io/github/last-commit/cocol-project/cocol)](https://github.com/cocol-project/cocol) - A minimal blockchain testbed
 * [secp256k1.cr ![GitHub Repo stars](https://img.shields.io/github/stars/q9f/secp256k1.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/q9f/secp256k1.cr)](https://github.com/q9f/secp256k1.cr) - Elliptic curve used in the public-private-key cryptography

## C bindings
 * [clang.cr ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-lang/clang.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-lang/clang.cr)](https://github.com/crystal-lang/clang.cr) - Libclang bindings
 * [crt.cr ![GitHub Repo stars](https://img.shields.io/github/stars/maiha/crt.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/maiha/crt.cr)](https://github.com/maiha/crt.cr) - Bindings for libncursesw and crt
 * [crystal-hunspell ![GitHub Repo stars](https://img.shields.io/github/stars/mamantoha/crystal-hunspell) ![GitHub last commit](https://img.shields.io/github/last-commit/mamantoha/crystal-hunspell)](https://github.com/mamantoha/crystal-hunspell) - Bindings for [Hunspell](https://hunspell.github.io/)
 * [curl-crystal ![GitHub Repo stars](https://img.shields.io/github/stars/blocknotes/curl-crystal) ![GitHub last commit](https://img.shields.io/github/last-commit/blocknotes/curl-crystal)](https://github.com/blocknotes/curl-crystal) - Bindings for [libcurl](https://curl.haxx.se/libcurl/)
 * [duktape.cr ![GitHub Repo stars](https://img.shields.io/github/stars/jessedoyle/duktape.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/jessedoyle/duktape.cr)](https://github.com/jessedoyle/duktape.cr) - Bindings for the [Duktape ![GitHub Repo stars](https://img.shields.io/github/stars/svaarala/duktape) ![GitHub last commit](https://img.shields.io/github/last-commit/svaarala/duktape)](https://github.com/svaarala/duktape) javascript engine
 * [gphoto2.cr ![GitHub Repo stars](https://img.shields.io/github/stars/Sija/gphoto2.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/Sija/gphoto2.cr)](https://github.com/Sija/gphoto2.cr) - Bindings for the [libgphoto2](http://www.gphoto.org/) library
 * [icu.cr ![GitHub Repo stars](https://img.shields.io/github/stars/olbat/icu.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/olbat/icu.cr)](https://github.com/olbat/icu.cr) - Bindings for the [ICU](http://site.icu-project.org/) library
 * [libnotify.cr ![GitHub Repo stars](https://img.shields.io/github/stars/splattael/libnotify.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/splattael/libnotify.cr)](https://github.com/splattael/libnotify.cr) - Bindings for Libnotify
 * [pcap.cr ![GitHub Repo stars](https://img.shields.io/github/stars/maiha/pcap.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/maiha/pcap.cr)](https://github.com/maiha/pcap.cr) - Bindings for libpcap
 * [pledge.cr ![GitHub Repo stars](https://img.shields.io/github/stars/chris-huxtable/pledge.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/chris-huxtable/pledge.cr)](https://github.com/chris-huxtable/pledge.cr) - Bindings for OpenBSD's `pledge(2)`
 * [ssh2.cr ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/ssh2.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/ssh2.cr)](https://github.com/spider-gazelle/ssh2.cr) - Bindings for libssh2 library
 * [syslog.cr ![GitHub Repo stars](https://img.shields.io/github/stars/chris-huxtable/syslog.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/chris-huxtable/syslog.cr)](https://github.com/chris-huxtable/syslog.cr) - Bindings for `syslog`
 * [x_do.cr ![GitHub Repo stars](https://img.shields.io/github/stars/woodruffw/x_do.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/woodruffw/x_do.cr)](https://github.com/woodruffw/x_do.cr) - Bindings for libxdo ([`xdotool` ![GitHub Repo stars](https://img.shields.io/github/stars/jordansissel/xdotool) ![GitHub last commit](https://img.shields.io/github/last-commit/jordansissel/xdotool)](https://github.com/jordansissel/xdotool))

## Caching
 * [crystal-memcached ![GitHub Repo stars](https://img.shields.io/github/stars/comandeo/crystal-memcached) ![GitHub last commit](https://img.shields.io/github/last-commit/comandeo/crystal-memcached)](https://github.com/comandeo/crystal-memcached) - Implementation of a memcached client

## CLI Builders
 * [admiral ![GitHub Repo stars](https://img.shields.io/github/stars/jwaldrip/admiral.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/jwaldrip/admiral.cr)](https://github.com/jwaldrip/admiral.cr) - A robust DSL for writing command line interfaces
 * [clicr ![GitHub Repo stars](https://img.shields.io/github/stars/j8r/clicr) ![GitHub last commit](https://img.shields.io/github/last-commit/j8r/clicr)](https://github.com/j8r/clicr) -  A simple declarative command line interface builder
 * [clim ![GitHub Repo stars](https://img.shields.io/github/stars/at-grandpa/clim) ![GitHub last commit](https://img.shields.io/github/last-commit/at-grandpa/clim)](https://github.com/at-grandpa/clim) - Slim command line interface builder
 * [commander ![GitHub Repo stars](https://img.shields.io/github/stars/mrrooijen/commander) ![GitHub last commit](https://img.shields.io/github/last-commit/mrrooijen/commander)](https://github.com/mrrooijen/commander) - Command-line interface builder
 * [Keimeno ![GitHub Repo stars](https://img.shields.io/github/stars/robacarp/keimeno) ![GitHub last commit](https://img.shields.io/github/last-commit/robacarp/keimeno)](https://github.com/robacarp/keimeno) -  A lightweight text user interface library in Crystal
 * [OptionParser](https://crystal-lang.org/api/OptionParser.html) - command-line options processing (Crystal stdlib)
 * [Phreak ![GitHub Repo stars](https://img.shields.io/github/stars/shinzlet/phreak) ![GitHub last commit](https://img.shields.io/github/last-commit/shinzlet/phreak)](https://github.com/shinzlet/phreak) - A highly flexible Crystal CLI builder in the style of OptionParser

## CLI Utils
 * [climate ![GitHub Repo stars](https://img.shields.io/github/stars/Sija/climate.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/Sija/climate.cr)](https://github.com/Sija/climate.cr) - Tiny tool to make your CLI output 🌈  coloured
 * [coin ![GitHub Repo stars](https://img.shields.io/github/stars/caian-org/coin) ![GitHub last commit](https://img.shields.io/github/last-commit/caian-org/coin)](https://github.com/caian-org/coin) - Command-line application that performs currency conversion via the [Fixer API](https://fixer.io)
 * [cride ![GitHub Repo stars](https://img.shields.io/github/stars/j8r/cride) ![GitHub last commit](https://img.shields.io/github/last-commit/j8r/cride)](https://github.com/j8r/cride) - A light CLI text editor/IDE
 * [lff ![GitHub Repo stars](https://img.shields.io/github/stars/mkdika/lff-cr) ![GitHub last commit](https://img.shields.io/github/last-commit/mkdika/lff-cr)](https://github.com/mkdika/lff-cr) - Simple and straightforward large files finder utility in command line
 * [meet ![GitHub Repo stars](https://img.shields.io/github/stars/ryanprior/meet) ![GitHub last commit](https://img.shields.io/github/last-commit/ryanprior/meet)](https://github.com/ryanprior/meet) - Start a jitsi meeting quickly from the comfort of your command line
 * [oq ![GitHub Repo stars](https://img.shields.io/github/stars/Blacksmoke16/oq) ![GitHub last commit](https://img.shields.io/github/last-commit/Blacksmoke16/oq)](https://github.com/Blacksmoke16/oq) - A performant, and portable jq wrapper to facilitate the consumption and output of formats other than JSON; using [jq ![GitHub Repo stars](https://img.shields.io/github/stars/stedolan/jq) ![GitHub last commit](https://img.shields.io/github/last-commit/stedolan/jq)](https://github.com/stedolan/jq) filters to transform the data
 * [progress_bar.cr ![GitHub Repo stars](https://img.shields.io/github/stars/TPei/progress_bar.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/TPei/progress_bar.cr)](https://github.com/TPei/progress_bar.cr) - A simple and customizable progress bar
 * [tablo ![GitHub Repo stars](https://img.shields.io/github/stars/hutou/tablo) ![GitHub last commit](https://img.shields.io/github/last-commit/hutou/tablo)](https://github.com/hutou/tablo) - A flexible terminal table generator
 * [tallboy ![GitHub Repo stars](https://img.shields.io/github/stars/epoch/tallboy) ![GitHub last commit](https://img.shields.io/github/last-commit/epoch/tallboy)](https://github.com/epoch/tallboy) - Generate ASCII character tables with support for spanning cells over multiple columns

## Code Analysis and Metrics
 * [ameba ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-ameba/ameba) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-ameba/ameba)](https://github.com/crystal-ameba/ameba) - A static code analysis tool
 * [linguist.cr ![GitHub Repo stars](https://img.shields.io/github/stars/microgit-com/linguist.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/microgit-com/linguist.cr)](https://github.com/microgit-com/linguist.cr) - Using multiple ways to find programming language used in files, based on Github's Linguist

## Compression
 * [Crystar ![GitHub Repo stars](https://img.shields.io/github/stars/naqvis/crystar) ![GitHub last commit](https://img.shields.io/github/last-commit/naqvis/crystar)](https://github.com/naqvis/crystar) - Readers and writers of Tar archive format
 * [Gzip](https://crystal-lang.org/api/Compress/Gzip.html) - readers and writers of gzip format (Crystal stdlib)
 * [polylines.cr ![GitHub Repo stars](https://img.shields.io/github/stars/BuonOmo/polylines.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/BuonOmo/polylines.cr)](https://github.com/BuonOmo/polylines.cr) — compression of series of coordinates
 * [snappy ![GitHub Repo stars](https://img.shields.io/github/stars/naqvis/snappy) ![GitHub last commit](https://img.shields.io/github/last-commit/naqvis/snappy)](https://github.com/naqvis/snappy) -  Snappy compression format reader/writer for Crystal
 * [Zip](https://crystal-lang.org/api/Compress/Zip.html) - readers and writers of zip format (Crystal stdlib)
 * [Zlib](https://crystal-lang.org/api/Compress/Zlib.html) - readers and writers of zlib format (Crystal stdlib)
 * [zstd.cr ![GitHub Repo stars](https://img.shields.io/github/stars/didactic-drunk/zstd.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/didactic-drunk/zstd.cr)](https://github.com/didactic-drunk/zstd.cr) - Bindings for [Zstandard ![GitHub Repo stars](https://img.shields.io/github/stars/facebook/zstd) ![GitHub last commit](https://img.shields.io/github/last-commit/facebook/zstd)](https://github.com/facebook/zstd) compression library

## Configuration
 * [cr-dotenv ![GitHub Repo stars](https://img.shields.io/github/stars/gdotdesign/cr-dotenv) ![GitHub last commit](https://img.shields.io/github/last-commit/gdotdesign/cr-dotenv)](https://github.com/gdotdesign/cr-dotenv) - Loads .env file
 * [Envy ![GitHub Repo stars](https://img.shields.io/github/stars/grottopress/envy) ![GitHub last commit](https://img.shields.io/github/last-commit/grottopress/envy)](https://github.com/grottopress/envy) - Load environment variables from YAML
 * [envyable ![GitHub Repo stars](https://img.shields.io/github/stars/philnash/envyable.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/philnash/envyable.cr)](https://github.com/philnash/envyable.cr) -  A simple YAML to ENV config loader
 * [habitat ![GitHub Repo stars](https://img.shields.io/github/stars/luckyframework/habitat) ![GitHub last commit](https://img.shields.io/github/last-commit/luckyframework/habitat)](https://github.com/luckyframework/habitat) - Type safe configuration for your classes and modules
 * [totem ![GitHub Repo stars](https://img.shields.io/github/stars/icyleaf/totem) ![GitHub last commit](https://img.shields.io/github/last-commit/icyleaf/totem)](https://github.com/icyleaf/totem) - Load and parse a configuration in JSON, YAML, dotenv formats

## Converters
 * [base62.cr ![GitHub Repo stars](https://img.shields.io/github/stars/Sija/base62.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/Sija/base62.cr)](https://github.com/Sija/base62.cr) - Base62 encoder/decoder, well suited for url-shortening
 * [money ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-money/money) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-money/money)](https://github.com/crystal-money/money) - Handling money and currency conversion with ease (almost complete port of [RubyMoney ![GitHub Repo stars](https://img.shields.io/github/stars/RubyMoney/money) ![GitHub last commit](https://img.shields.io/github/last-commit/RubyMoney/money)](https://github.com/RubyMoney/money))
 * [sass.cr ![GitHub Repo stars](https://img.shields.io/github/stars/straight-shoota/sass.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/straight-shoota/sass.cr)](https://github.com/straight-shoota/sass.cr) - Compile SASS/SCSS to CSS ([libsass ![GitHub Repo stars](https://img.shields.io/github/stars/sass/libsass) ![GitHub last commit](https://img.shields.io/github/last-commit/sass/libsass)](https://github.com/sass/libsass/) binding)
 * [wkhtmltopdf-crystal ![GitHub Repo stars](https://img.shields.io/github/stars/blocknotes/wkhtmltopdf-crystal) ![GitHub last commit](https://img.shields.io/github/last-commit/blocknotes/wkhtmltopdf-crystal)](https://github.com/blocknotes/wkhtmltopdf-crystal) - Bindings / wrapper for libwkhtmltox (HTML to PDF / image converter)

## Cryptography
 * [cmac ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/cmac) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/cmac)](https://github.com/spider-gazelle/cmac) - Crystal implementation of Cipher-based Message Authentication Code (CMAC)
 * [sodium.cr ![GitHub Repo stars](https://img.shields.io/github/stars/didactic-drunk/sodium.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/didactic-drunk/sodium.cr)](https://github.com/didactic-drunk/sodium.cr) - Crystal wrapper for the libsodium crypto API

## Data Formats
 * [BinData ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/bindata) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/bindata)](https://github.com/spider-gazelle/bindata) - Binary data parser helper with an [ASN.1](https://en.wikipedia.org/wiki/Abstract_Syntax_Notation_One) parser
 * [config.cr ![GitHub Repo stars](https://img.shields.io/github/stars/chris-huxtable/config.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/chris-huxtable/config.cr)](https://github.com/chris-huxtable/config.cr) - Easy to use configuration format parser
 * [crinder ![GitHub Repo stars](https://img.shields.io/github/stars/c910335/crinder) ![GitHub last commit](https://img.shields.io/github/last-commit/c910335/crinder)](https://github.com/c910335/crinder) - Class based json renderer
 * [Crystalizer ![GitHub Repo stars](https://img.shields.io/github/stars/j8r/crystalizer) ![GitHub last commit](https://img.shields.io/github/last-commit/j8r/crystalizer)](https://github.com/j8r/crystalizer) - (De)serialize any Crystal object; supporting JSON, YAML, and Byte formats out of the box
 * [CSV](https://crystal-lang.org/api/CSV.html) - parsing and generating for comma-separated values (Crystal stdlib)
 * [front_matter.cr ![GitHub Repo stars](https://img.shields.io/github/stars/chris-huxtable/front_matter.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/chris-huxtable/front_matter.cr)](https://github.com/chris-huxtable/front_matter.cr) - Separates a files front matter from its content
 * [geoip2.cr ![GitHub Repo stars](https://img.shields.io/github/stars/delef/geoip2.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/delef/geoip2.cr)](https://github.com/delef/geoip2.cr) - GeoIP2 reader
 * [HAR ![GitHub Repo stars](https://img.shields.io/github/stars/NeuraLegion/har) ![GitHub last commit](https://img.shields.io/github/last-commit/NeuraLegion/har)](https://github.com/NeuraLegion/har) - HAR (HTTP Archive) parser
 * [INI](https://crystal-lang.org/api/INI.html) - INI file parser (Crystal stdlib)
 * [JSON](https://crystal-lang.org/api/JSON.html) - parsing and generating JSON documents (Crystal stdlib)
 * [JSON::OnSteroids ![GitHub Repo stars](https://img.shields.io/github/stars/anykeyh/json_on_steroids) ![GitHub last commit](https://img.shields.io/github/last-commit/anykeyh/json_on_steroids)](https://github.com/anykeyh/json_on_steroids) - handle and mutate JSON document easily
 * [maxminddb.cr ![GitHub Repo stars](https://img.shields.io/github/stars/delef/maxminddb.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/delef/maxminddb.cr)](https://github.com/delef/maxminddb.cr) - MaxMindDB reader
 * [toml.cr ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-community/toml.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-community/toml.cr)](https://github.com/crystal-community/toml.cr) - TOML parser
 * [XML](https://crystal-lang.org/api/XML.html) - parsing and generating XML documents (Crystal stdlib)
 * [YAML](https://crystal-lang.org/api/YAML.html) - parsing and generating YAML documents (Crystal stdlib)

## Data Generators
 * [faker ![GitHub Repo stars](https://img.shields.io/github/stars/askn/faker) ![GitHub last commit](https://img.shields.io/github/last-commit/askn/faker)](https://github.com/askn/faker) - A library for generating fake data
 * [hashids.cr ![GitHub Repo stars](https://img.shields.io/github/stars/splattael/hashids.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/splattael/hashids.cr)](https://github.com/splattael/hashids.cr) - A library to generate YouTube-like ids from one or many numbers
 * [prime ![GitHub Repo stars](https://img.shields.io/github/stars/wontruefree/prime) ![GitHub last commit](https://img.shields.io/github/last-commit/wontruefree/prime)](https://github.com/wontruefree/prime) - A prime number generator

## Database Drivers/Clients
 * [couchdb.cr ![GitHub Repo stars](https://img.shields.io/github/stars/TechMagister/couchdb.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/TechMagister/couchdb.cr)](https://github.com/TechMagister/couchdb.cr) - CouchDB client
 * [cryomongo ![GitHub Repo stars](https://img.shields.io/github/stars/elbywan/cryomongo) ![GitHub last commit](https://img.shields.io/github/last-commit/elbywan/cryomongo)](https://github.com/elbywan/cryomongo) - MongoDB driver
 * [crystal-db ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-lang/crystal-db) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-lang/crystal-db)](https://github.com/crystal-lang/crystal-db) - Common db api
 * [crystal-ldap ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/crystal-ldap) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/crystal-ldap)](https://github.com/spider-gazelle/crystal-ldap) - LDAP client
 * [crystal-mysql ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-lang/crystal-mysql) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-lang/crystal-mysql)](https://github.com/crystal-lang/crystal-mysql) - MySQL connector for Crystal
 * [crystal-pg ![GitHub Repo stars](https://img.shields.io/github/stars/will/crystal-pg) ![GitHub last commit](https://img.shields.io/github/last-commit/will/crystal-pg)](https://github.com/will/crystal-pg) - A Postgres driver
 * [crystal-redis ![GitHub Repo stars](https://img.shields.io/github/stars/stefanwille/crystal-redis) ![GitHub last commit](https://img.shields.io/github/last-commit/stefanwille/crystal-redis)](https://github.com/stefanwille/crystal-redis) - Full featured Redis client
 * [crystal-rethinkdb ![GitHub Repo stars](https://img.shields.io/github/stars/kingsleyh/crystal-rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/kingsleyh/crystal-rethinkdb)](https://github.com/kingsleyh/crystal-rethinkdb) - Driver for RethinkDB / RebirthDB
 * [crystal-sqlite3 ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-lang/crystal-sqlite3) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-lang/crystal-sqlite3)](https://github.com/crystal-lang/crystal-sqlite3) - SQLite3 bindings
 * [leveldb ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-community/leveldb) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-community/leveldb)](https://github.com/crystal-community/leveldb) - Crystal bindings for LevelDB
 * [rocksdb.cr ![GitHub Repo stars](https://img.shields.io/github/stars/maiha/rocksdb.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/maiha/rocksdb.cr)](https://github.com/maiha/rocksdb.cr) - RocksDB client

## Database Tools
 * [migrate ![GitHub Repo stars](https://img.shields.io/github/stars/vladfaust/migrate.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/vladfaust/migrate.cr)](https://github.com/vladfaust/migrate.cr) - A simpler database migration tool with transactions
 * [queryit ![GitHub Repo stars](https://img.shields.io/github/stars/hugopl/queryit) ![GitHub last commit](https://img.shields.io/github/last-commit/hugopl/queryit)](https://github.com/hugopl/queryit) - A setupless terminal based SQL query runner

## Debugging
* [backtracer.cr ![GitHub Repo stars](https://img.shields.io/github/stars/Sija/backtracer.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/Sija/backtracer.cr)](https://github.com/Sija/backtracer.cr) - Shard aiming to assist with parsing backtraces into a structured form
* [debug.cr ![GitHub Repo stars](https://img.shields.io/github/stars/Sija/debug.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/Sija/debug.cr)](https://github.com/Sija/debug.cr) - `debug!(…)` macro for `pp`-style debugging

## Dependency Injection
 * [Athena Dependency Injection ![GitHub Repo stars](https://img.shields.io/github/stars/athena-framework/dependency-injection) ![GitHub last commit](https://img.shields.io/github/last-commit/athena-framework/dependency-injection)](https://github.com/athena-framework/dependency-injection) - Robust dependency injection service container framework
 * [Crystal-DI ![GitHub Repo stars](https://img.shields.io/github/stars/funk-yourself/crystal-di) ![GitHub last commit](https://img.shields.io/github/last-commit/funk-yourself/crystal-di)](https://github.com/funk-yourself/crystal-di) - Lightweight DI Container
 * [HardWire ![GitHub Repo stars](https://img.shields.io/github/stars/jerometwell/hardwire) ![GitHub last commit](https://img.shields.io/github/last-commit/jerometwell/hardwire)](https://github.com/jerometwell/hardwire) - A compile-time non-intrusive dependency injection system
 * [syringe ![GitHub Repo stars](https://img.shields.io/github/stars/Bonemind/syringe) ![GitHub last commit](https://img.shields.io/github/last-commit/Bonemind/syringe)](https://github.com/Bonemind/syringe) - A simple and basic dependency injection shard for crystal

## Email
 * [carbon ![GitHub Repo stars](https://img.shields.io/github/stars/luckyframework/carbon) ![GitHub last commit](https://img.shields.io/github/last-commit/luckyframework/carbon)](https://github.com/luckyframework/carbon) - Fun, testable, and adapter-based email library
 * [crystal-email ![GitHub Repo stars](https://img.shields.io/github/stars/arcage/crystal-email) ![GitHub last commit](https://img.shields.io/github/last-commit/arcage/crystal-email)](https://github.com/arcage/crystal-email) - Simple e-mail sending library
 * [CrystalEmail](https://git.sceptique.eu/Sceptique/CrystalEmail) - A RFC compliant Email validator
 * [sendgrid.cr ![GitHub Repo stars](https://img.shields.io/github/stars/dlanileonardo/sendgrid.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/dlanileonardo/sendgrid.cr)](https://github.com/dlanileonardo/sendgrid.cr) - Simple Sendgrid Client

## Environment Management
 * [asdf-crystal ![GitHub Repo stars](https://img.shields.io/github/stars/marciogm/asdf-crystal) ![GitHub last commit](https://img.shields.io/github/last-commit/marciogm/asdf-crystal)](https://github.com/marciogm/asdf-crystal) - Plugin for asdf version manager
 * [crenv ![GitHub Repo stars](https://img.shields.io/github/stars/crenv/crenv) ![GitHub last commit](https://img.shields.io/github/last-commit/crenv/crenv)](https://github.com/crenv/crenv) - Crystal version manager
 * [rcm.cr ![GitHub Repo stars](https://img.shields.io/github/stars/maiha/rcm.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/maiha/rcm.cr)](https://github.com/maiha/rcm.cr) - Redis Cluster Manager

## Examples and funny stuff
 * [blackjack-cr ![GitHub Repo stars](https://img.shields.io/github/stars/gdonald/blackjack-cr) ![GitHub last commit](https://img.shields.io/github/last-commit/gdonald/blackjack-cr)](https://github.com/gdonald/blackjack-cr) - Console Blackjack
 * [crystal-patterns ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-community/crystal-patterns) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-community/crystal-patterns)](https://github.com/crystal-community/crystal-patterns) - Examples of GOF patters
 * [crystalworld ![GitHub Repo stars](https://img.shields.io/github/stars/vladfaust/crystalworld) ![GitHub last commit](https://img.shields.io/github/last-commit/vladfaust/crystalworld)](https://github.com/vladfaust/crystalworld) - [realworld.io](https://realworld.io) back-end API implementation
 * [exercism-crystal ![GitHub Repo stars](https://img.shields.io/github/stars/exercism/crystal) ![GitHub last commit](https://img.shields.io/github/last-commit/exercism/crystal)](https://github.com/exercism/crystal) - Exercism exercises
 * [try.cr ![GitHub Repo stars](https://img.shields.io/github/stars/maiha/try.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/maiha/try.cr)](https://github.com/maiha/try.cr) - Try monad

## Framework Components
 * [Athena Event Dispatcher ![GitHub Repo stars](https://img.shields.io/github/stars/athena-framework/event-dispatcher) ![GitHub last commit](https://img.shields.io/github/last-commit/athena-framework/event-dispatcher)](https://github.com/athena-framework/event-dispatcher) - A Mediator and Observer pattern event library
 * [Athena Negotiation ![GitHub Repo stars](https://img.shields.io/github/stars/athena-framework/negotiation) ![GitHub last commit](https://img.shields.io/github/last-commit/athena-framework/negotiation)](https://github.com/athena-framework/negotiation) - Framework agnostic content negotiation library
 * [device_detector ![GitHub Repo stars](https://img.shields.io/github/stars/creadone/device_detector) ![GitHub last commit](https://img.shields.io/github/last-commit/creadone/device_detector)](https://github.com/creadone/device_detector) - Shard for detect device by user agent string
 * [Exception Page ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-loot/exception_page) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-loot/exception_page)](https://github.com/crystal-loot/exception_page) - An exceptional exception page for Crystal web libraries and frameworks
 * [graphql ![GitHub Repo stars](https://img.shields.io/github/stars/graphql-crystal/graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-crystal/graphql)](https://github.com/graphql-crystal/graphql) - Type-safe [GraphQL](http://graphql.org) server implementation
 * [graphql-crystal ![GitHub Repo stars](https://img.shields.io/github/stars/ziprandom/graphql-crystal) ![GitHub last commit](https://img.shields.io/github/last-commit/ziprandom/graphql-crystal)](https://github.com/ziprandom/graphql-crystal) - [GraphQL](http://graphql.org) implementation
 * [kemal-session ![GitHub Repo stars](https://img.shields.io/github/stars/kemalcr/kemal-session) ![GitHub last commit](https://img.shields.io/github/last-commit/kemalcr/kemal-session)](https://github.com/kemalcr/kemal-session) - Session handler for Kemal
 * [mochi ![GitHub Repo stars](https://img.shields.io/github/stars/awcrotwell/mochi) ![GitHub last commit](https://img.shields.io/github/last-commit/awcrotwell/mochi)](https://github.com/awcrotwell/mochi) - Authentication shard inspired by Devise supporting: Authenticable, Confirmable, Invitable & more
 * [motion.cr ![GitHub Repo stars](https://img.shields.io/github/stars/awcrotwell/motion.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/awcrotwell/motion.cr)](https://github.com/awcrotwell/motion.cr) - Object oriented frontend library for Amber
 * [multi-auth ![GitHub Repo stars](https://img.shields.io/github/stars/msa7/multi_auth) ![GitHub last commit](https://img.shields.io/github/last-commit/msa7/multi_auth)](https://github.com/msa7/multi_auth) - Standardized multi-provider OAuth2 authentication (inspired by omniauth)
 * [praetorian ![GitHub Repo stars](https://img.shields.io/github/stars/ilanusse/praetorian) ![GitHub last commit](https://img.shields.io/github/last-commit/ilanusse/praetorian)](https://github.com/ilanusse/praetorian) - Minimalist authorization library inspired by Pundit
 * [Shield ![GitHub Repo stars](https://img.shields.io/github/stars/grottopress/shield) ![GitHub last commit](https://img.shields.io/github/last-commit/grottopress/shield)](https://github.com/grottopress/shield) - Comprehensive security for *Lucky* framework
 * [shrine.cr ![GitHub Repo stars](https://img.shields.io/github/stars/jetrockets/shrine.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/jetrockets/shrine.cr)](https://github.com/jetrockets/shrine.cr) - File Attachment toolkit for Crystal applications. Heavily inspired by Shrine for Ruby
 * [tourmaline ![GitHub Repo stars](https://img.shields.io/github/stars/protoncr/tourmaline) ![GitHub last commit](https://img.shields.io/github/last-commit/protoncr/tourmaline)](https://github.com/protoncr/tourmaline) - Telegram bot framework with an API loosely based on [telegraf.js](https://telegraf.js.org/)

## Game Development
 * [CrSFML ![GitHub Repo stars](https://img.shields.io/github/stars/oprypin/crsfml) ![GitHub last commit](https://img.shields.io/github/last-commit/oprypin/crsfml)](https://github.com/oprypin/crsfml) - Bindings to [SFML](https://www.sfml-dev.org/) multimedia/game library
 * [crystal-chipmunk ![GitHub Repo stars](https://img.shields.io/github/stars/oprypin/crystal-chipmunk) ![GitHub last commit](https://img.shields.io/github/last-commit/oprypin/crystal-chipmunk)](https://github.com/oprypin/crystal-chipmunk) - Bindings to [Chipmunk](http://chipmunk-physics.net/), a fast and lightweight 2D game physics library
 * [crystal-imgui-sfml ![GitHub Repo stars](https://img.shields.io/github/stars/oprypin/crystal-imgui-sfml) ![GitHub last commit](https://img.shields.io/github/last-commit/oprypin/crystal-imgui-sfml)](https://github.com/oprypin/crystal-imgui-sfml) - Bindings to integrate [Dear ImGui ![GitHub Repo stars](https://img.shields.io/github/stars/ocornut/imgui) ![GitHub last commit](https://img.shields.io/github/last-commit/ocornut/imgui)](https://github.com/ocornut/imgui) into an [SFML](https://www.sfml-dev.org/) project
 * [entitas.cr ![GitHub Repo stars](https://img.shields.io/github/stars/spoved/entitas.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/spoved/entitas.cr)](https://github.com/spoved/entitas.cr) - A Entity Component System Framework for Crystal

## GUI Development
 * [crystal-imgui ![GitHub Repo stars](https://img.shields.io/github/stars/oprypin/crystal-imgui) ![GitHub last commit](https://img.shields.io/github/last-commit/oprypin/crystal-imgui)](https://github.com/oprypin/crystal-imgui) - Bindings to [Dear ImGui ![GitHub Repo stars](https://img.shields.io/github/stars/ocornut/imgui) ![GitHub last commit](https://img.shields.io/github/last-commit/ocornut/imgui)](https://github.com/ocornut/imgui), an immediate-mode graphical UI library
 * [Iu ![GitHub Repo stars](https://img.shields.io/github/stars/grkek/iu) ![GitHub last commit](https://img.shields.io/github/last-commit/grkek/iu)](https://github.com/grkek/iu) - UI framework based on the [Fusion/libui.cr ![GitHub Repo stars](https://img.shields.io/github/stars/Fusion/libui.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/Fusion/libui.cr)](https://github.com/Fusion/libui.cr) library, with custom elements and modified bindings from [hedron-crystal/hedron ![GitHub Repo stars](https://img.shields.io/github/stars/hedron-crystal/hedron) ![GitHub last commit](https://img.shields.io/github/last-commit/hedron-crystal/hedron)](https://github.com/hedron-crystal/hedron)

## HTML Builders
 * [form_builder.cr ![GitHub Repo stars](https://img.shields.io/github/stars/westonganger/form_builder.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/westonganger/form_builder.cr)](https://github.com/westonganger/form_builder.cr) - Dead simple HTML form builder for Crystal with built-in support for many popular UI libraries such as Bootstrap

## HTML/XML Parsing
 * [docx_cr_converter ![GitHub Repo stars](https://img.shields.io/github/stars/aristotelesbr2014/docx_cr_converter) ![GitHub last commit](https://img.shields.io/github/last-commit/aristotelesbr2014/docx_cr_converter)](https://github.com/aristotelesbr2014/docx_cr_converter) - parse DOCX Word
 * [gumbo-crystal ![GitHub Repo stars](https://img.shields.io/github/stars/blocknotes/gumbo-crystal) ![GitHub last commit](https://img.shields.io/github/last-commit/blocknotes/gumbo-crystal)](https://github.com/blocknotes/gumbo-crystal) - Bindings for [Gumbo ![GitHub Repo stars](https://img.shields.io/github/stars/google/gumbo-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/google/gumbo-parser)](https://github.com/google/gumbo-parser), an HTML5 parsing library made by Google
 * [myhtml ![GitHub Repo stars](https://img.shields.io/github/stars/kostya/myhtml) ![GitHub last commit](https://img.shields.io/github/last-commit/kostya/myhtml)](https://github.com/kostya/myhtml) - Fast HTML5 Parser that includes CSS selectors

## HTTP
 * [Cable ![GitHub Repo stars](https://img.shields.io/github/stars/cable-cr/cable) ![GitHub last commit](https://img.shields.io/github/last-commit/cable-cr/cable)](https://github.com/cable-cr/cable) - An ActionCable "port" to Crystal, framework agnostic, 100% compatible with the ActionCable JS Client
 * [cossack ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-community/cossack) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-community/cossack)](https://github.com/crystal-community/cossack) - Simple flexible HTTP client
 * [crest ![GitHub Repo stars](https://img.shields.io/github/stars/mamantoha/crest) ![GitHub last commit](https://img.shields.io/github/last-commit/mamantoha/crest)](https://github.com/mamantoha/crest) - Simple HTTP and REST client, inspired by the Ruby's RestClient gem
 * [crul ![GitHub Repo stars](https://img.shields.io/github/stars/porras/crul) ![GitHub last commit](https://img.shields.io/github/last-commit/porras/crul)](https://github.com/porras/crul) - Command line HTTP client
 * [digest-auth ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/digest-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/digest-auth)](https://github.com/spider-gazelle/digest-auth) - Digest authentication
 * [halite ![GitHub Repo stars](https://img.shields.io/github/stars/icyleaf/halite) ![GitHub last commit](https://img.shields.io/github/last-commit/icyleaf/halite)](https://github.com/icyleaf/halite) - Crystal HTTP Requests with a chainable REST API, built-in sessions and loggers
 * [http-multiserver.cr ![GitHub Repo stars](https://img.shields.io/github/stars/vladfaust/http-multiserver.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/vladfaust/http-multiserver.cr)](https://github.com/vladfaust/http-multiserver.cr) - Mounting multiple servers via routes (a.k.a. URL mapping)
 * [http-params-serializable ![GitHub Repo stars](https://img.shields.io/github/stars/vladfaust/http-params-serializable) ![GitHub last commit](https://img.shields.io/github/last-commit/vladfaust/http-params-serializable)](https://github.com/vladfaust/http-params-serializable) - HTTP params (de)serialization, applicable to URL queries and URL-encoded forms
 * [http-protection ![GitHub Repo stars](https://img.shields.io/github/stars/rogeriozambon/http-protection) ![GitHub last commit](https://img.shields.io/github/last-commit/rogeriozambon/http-protection)](https://github.com/rogeriozambon/http-protection) - Protection against typical web attacks
 * [http2 ![GitHub Repo stars](https://img.shields.io/github/stars/ysbaddaden/http2) ![GitHub last commit](https://img.shields.io/github/last-commit/ysbaddaden/http2)](https://github.com/ysbaddaden/http2) - HTTP/2 Protocol Implementation
 * [HTTP::Client](https://crystal-lang.org/api/HTTP/Client.html) - HTTP client (Crystal stdlib)
 * [HTTP::Server](https://crystal-lang.org/api/HTTP/Server.html) - HTTP server (Crystal stdlib)
 * [HTTP::WebSocket](https://crystal-lang.org/api/HTTP/WebSocket.html) - HTTP WebSocket client (Crystal stdlib)
 * [link-header ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/link-header) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/link-header)](https://github.com/spider-gazelle/link-header) - HTTP Link Header Parser
 * [ntlm ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/ntlm) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/ntlm)](https://github.com/spider-gazelle/ntlm) - NTLM authentication
 * [proxy-fetcher.cr ![GitHub Repo stars](https://img.shields.io/github/stars/nbulaj/proxy-fetcher.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/nbulaj/proxy-fetcher.cr)](https://github.com/nbulaj/proxy-fetcher.cr) - Proxy lists fetching & validating library
 * [sse.cr ![GitHub Repo stars](https://img.shields.io/github/stars/y2k2mt/sse.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/y2k2mt/sse.cr)](https://github.com/y2k2mt/sse.cr) - [Server-Sent Events](https://www.w3.org/TR/2009/WD-eventsource-20090421) client

## Image processing
 * [celestine ![GitHub Repo stars](https://img.shields.io/github/stars/celestinecr/celestine) ![GitHub last commit](https://img.shields.io/github/last-commit/celestinecr/celestine)](https://github.com/celestinecr/celestine) - Create SVG images using a DSL
 * [stumpy_png ![GitHub Repo stars](https://img.shields.io/github/stars/stumpycr/stumpy_png) ![GitHub last commit](https://img.shields.io/github/last-commit/stumpycr/stumpy_png)](https://github.com/stumpycr/stumpy_png) - Read and write PNG images

## Implementations/Compilers
 * [charly](https://github.com/charly-lang) - Charly Programming Language
 * [cltk ![GitHub Repo stars](https://img.shields.io/github/stars/ziprandom/cltk) ![GitHub last commit](https://img.shields.io/github/last-commit/ziprandom/cltk)](https://github.com/ziprandom/cltk) - A crystal port of the Ruby Language Toolkit
 * [crisp ![GitHub Repo stars](https://img.shields.io/github/stars/rhysd/Crisp) ![GitHub last commit](https://img.shields.io/github/last-commit/rhysd/Crisp)](https://github.com/rhysd/Crisp) - Lisp dialect implemented with Crystal
 * [LinCAS-lang](https://github.com/LinCAS-lang) - A programming language for scientific computation
 * [mint-lang ![GitHub Repo stars](https://img.shields.io/github/stars/mint-lang/mint) ![GitHub last commit](https://img.shields.io/github/last-commit/mint-lang/mint)](https://github.com/mint-lang/mint) - A refreshing programming language for the front-end web
 * [myst-lang](https://github.com/myst-lang/) - A practical, dynamic language designed to be written and understood as easily and efficiently as possible
 * [runic-lang](https://github.com/runic-lang) - In-design toy language

## Logging and monitoring
 * [crafana ![GitHub Repo stars](https://img.shields.io/github/stars/spoved/crafana.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/spoved/crafana.cr)](https://github.com/spoved/crafana.cr) - A [Grafana](https://grafana.com/) library to help autogenerate dashboards
 * [Log](https://crystal-lang.org/api/Log.html) - logging utility (Crystal stdlib)
 * [statsd.cr ![GitHub Repo stars](https://img.shields.io/github/stars/miketheman/statsd.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/miketheman/statsd.cr)](https://github.com/miketheman/statsd.cr) - [Statsd ![GitHub Repo stars](https://img.shields.io/github/stars/etsy/statsd) ![GitHub last commit](https://img.shields.io/github/last-commit/etsy/statsd)](https://github.com/etsy/statsd) client library

## Machine Learning
 * [ai4cr ![GitHub Repo stars](https://img.shields.io/github/stars/drhuffman12/ai4cr) ![GitHub last commit](https://img.shields.io/github/last-commit/drhuffman12/ai4cr)](https://github.com/drhuffman12/ai4cr) - Artificial Intelligence (based on https://github.com/SergioFierens/ai4r)
 * [Cadmium ![GitHub Repo stars](https://img.shields.io/github/stars/cadmiumcr/cadmium) ![GitHub last commit](https://img.shields.io/github/last-commit/cadmiumcr/cadmium)](https://github.com/cadmiumcr/cadmium) - NLP library based heavily on [natural ![GitHub Repo stars](https://img.shields.io/github/stars/NaturalNode/natural) ![GitHub last commit](https://img.shields.io/github/last-commit/NaturalNode/natural)](https://github.com/NaturalNode/natural)
 * [crystal-fann ![GitHub Repo stars](https://img.shields.io/github/stars/NeuraLegion/crystal-fann) ![GitHub last commit](https://img.shields.io/github/last-commit/NeuraLegion/crystal-fann)](https://github.com/NeuraLegion/crystal-fann) - FANN (Fast Artifical Neural Network) binding
 * [mxnet.cr ![GitHub Repo stars](https://img.shields.io/github/stars/toddsundsted/mxnet.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/toddsundsted/mxnet.cr)](https://github.com/toddsundsted/mxnet.cr) - Bindings for [MXNet](https://mxnet.incubator.apache.org/)
 * [shainet ![GitHub Repo stars](https://img.shields.io/github/stars/NeuraLegion/shainet) ![GitHub last commit](https://img.shields.io/github/last-commit/NeuraLegion/shainet)](https://github.com/NeuraLegion/shainet) - SHAInet (Neural Network in pure crystal)

## Markdown/Text Processors
 * [markd ![GitHub Repo stars](https://img.shields.io/github/stars/icyleaf/markd) ![GitHub last commit](https://img.shields.io/github/last-commit/icyleaf/markd)](https://github.com/icyleaf/markd) - Yet another markdown parser built for speed, Compliant to CommonMark specification

## Misc
 * [aasm.cr ![GitHub Repo stars](https://img.shields.io/github/stars/veelenga/aasm.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/veelenga/aasm.cr)](https://github.com/veelenga/aasm.cr) - Easy to use finite state machine for Crystal classes
 * [any_hash.cr ![GitHub Repo stars](https://img.shields.io/github/stars/Sija/any_hash.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/Sija/any_hash.cr)](https://github.com/Sija/any_hash.cr) - Recursive Hash with better JSON::Any included
 * [anyolite ![GitHub Repo stars](https://img.shields.io/github/stars/Anyolite/anyolite) ![GitHub last commit](https://img.shields.io/github/last-commit/Anyolite/anyolite)](https://github.com/Anyolite/anyolite) - Full mruby interpreter with simple bindings, allowing for easy scripting support in projects
 * [burocracia.cr ![GitHub Repo stars](https://img.shields.io/github/stars/vinibrsl/burocracia.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/vinibrsl/burocracia.cr)](https://github.com/vinibrsl/burocracia.cr) - burocracia.cr the dependecyless shard to validate, generate and format Brazilian burocracias such as CPF, CNPJ and CEP
 * [callbacks ![GitHub Repo stars](https://img.shields.io/github/stars/vladfaust/callbacks.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/vladfaust/callbacks.cr)](https://github.com/vladfaust/callbacks.cr) - Expressive callbacks module
 * [circuit_breaker ![GitHub Repo stars](https://img.shields.io/github/stars/TPei/circuit_breaker) ![GitHub last commit](https://img.shields.io/github/last-commit/TPei/circuit_breaker)](https://github.com/TPei/circuit_breaker) - Implementation of the circuit breaker pattern
 * [CrSignals ![GitHub Repo stars](https://img.shields.io/github/stars/firejox/CrSignals) ![GitHub last commit](https://img.shields.io/github/last-commit/firejox/CrSignals)](https://github.com/firejox/CrSignals) - Signals/slots notification library
 * [crystal-binary_parser ![GitHub Repo stars](https://img.shields.io/github/stars/DanSnow/crystal-binary_parser) ![GitHub last commit](https://img.shields.io/github/last-commit/DanSnow/crystal-binary_parser)](https://github.com/DanSnow/crystal-binary_parser) - Binary parser
 * [crystal-web-framework-stars ![GitHub Repo stars](https://img.shields.io/github/stars/isaced/crystal-web-framework-stars) ![GitHub last commit](https://img.shields.io/github/last-commit/isaced/crystal-web-framework-stars)](https://github.com/isaced/crystal-web-framework-stars) - Web frameworks for Crystal, most starred on Github
 * [crz ![GitHub Repo stars](https://img.shields.io/github/stars/dhruvrajvanshi/crz) ![GitHub last commit](https://img.shields.io/github/last-commit/dhruvrajvanshi/crz)](https://github.com/dhruvrajvanshi/crz) - Functional programming library
 * [emoji.cr ![GitHub Repo stars](https://img.shields.io/github/stars/veelenga/emoji.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/veelenga/emoji.cr)](https://github.com/veelenga/emoji.cr) - Emoji library
 * [gphoto2-web.cr ![GitHub Repo stars](https://img.shields.io/github/stars/Sija/gphoto2-web.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/Sija/gphoto2-web.cr)](https://github.com/Sija/gphoto2-web.cr) - Web API for libgphoto2
 * [i18n.cr ![GitHub Repo stars](https://img.shields.io/github/stars/vladfaust/i18n.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/vladfaust/i18n.cr)](https://github.com/vladfaust/i18n.cr) - Internationalization shard
 * [immutable ![GitHub Repo stars](https://img.shields.io/github/stars/lucaong/immutable) ![GitHub last commit](https://img.shields.io/github/last-commit/lucaong/immutable)](https://github.com/lucaong/immutable) - Implementation of thread-safe, persistent, immutable collections
 * [iterm2 ![GitHub Repo stars](https://img.shields.io/github/stars/toddsundsted/iterm2) ![GitHub last commit](https://img.shields.io/github/last-commit/toddsundsted/iterm2)](https://github.com/toddsundsted/iterm2) - Display images within the terminal using the ITerm2 Inline Images Protocol
 * [monads ![GitHub Repo stars](https://img.shields.io/github/stars/alex-lairan/monads) ![GitHub last commit](https://img.shields.io/github/last-commit/alex-lairan/monads)](https://github.com/alex-lairan/monads) - Monad implementation
 * [pinger ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/pinger) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/pinger)](https://github.com/spider-gazelle/pinger) - Ping IP addresses and DNS entries without requiring sudo
 * [port_midi ![GitHub Repo stars](https://img.shields.io/github/stars/jimm/crystal_port_midi) ![GitHub last commit](https://img.shields.io/github/last-commit/jimm/crystal_port_midi)](https://github.com/jimm/crystal_port_midi) - Crystal C bindings for the PortMIDI cross-platform MIDI I/O library
 * [retriable.cr ![GitHub Repo stars](https://img.shields.io/github/stars/Sija/retriable.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/Sija/retriable.cr)](https://github.com/Sija/retriable.cr) - Simple DSL to retry failed code blocks
 * [serf-handler.cr ![GitHub Repo stars](https://img.shields.io/github/stars/wyhaines/serf-handler.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/wyhaines/serf-handler.cr)](https://github.com/wyhaines/serf-handler.cr) - Framework for building Serf handlers, with a suite of useful builtin capabilities
 * [simple_retry ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/simple_retry) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/simple_retry)](https://github.com/spider-gazelle/simple_retry) - Simple tool for retrying failed code blocks
 * [sslscan.cr ![GitHub Repo stars](https://img.shields.io/github/stars/NeuraLegion/sslscan.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/NeuraLegion/sslscan.cr)](https://github.com/NeuraLegion/sslscan.cr) - Crystal shard wrapping the rbsec/sslscan utility
 * [version_tools ![GitHub Repo stars](https://img.shields.io/github/stars/anicholson/crystal-version-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/anicholson/crystal-version-tools)](https://github.com/anicholson/crystal-version-tools) - Version-dependent behaviour, specified at compile-time
 * [wafalyzer ![GitHub Repo stars](https://img.shields.io/github/stars/NeuraLegion/wafalyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/NeuraLegion/wafalyzer)](https://github.com/NeuraLegion/wafalyzer) - Web Application Firewall (WAF) Detector - shard + cli
 * [zaru_crystal ![GitHub Repo stars](https://img.shields.io/github/stars/szTheory/zaru_crystal) ![GitHub last commit](https://img.shields.io/github/last-commit/szTheory/zaru_crystal)](https://github.com/szTheory/zaru_crystal) - Filename sanitization

## Network Protocols
 * [amqp-client.cr ![GitHub Repo stars](https://img.shields.io/github/stars/cloudamqp/amqp-client.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudamqp/amqp-client.cr)](https://github.com/cloudamqp/amqp-client.cr) - AMQP 0-9.1, a messaging protocol, implemented by eg. RabbitMQ
 * [connect-proxy ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/connect-proxy) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/connect-proxy)](https://github.com/spider-gazelle/connect-proxy) - Connect method style of HTTP tunnelling / HTTP proxy
 * [cr-xmpp ![GitHub Repo stars](https://img.shields.io/github/stars/naqvis/cr-xmpp) ![GitHub last commit](https://img.shields.io/github/last-commit/naqvis/cr-xmpp)](https://github.com/naqvis/cr-xmpp) - XMPP/Jabber Library
 * [Crirc ![GitHub Repo stars](https://img.shields.io/github/stars/Meoowww/Crirc) ![GitHub last commit](https://img.shields.io/github/last-commit/Meoowww/Crirc)](https://github.com/Meoowww/Crirc) - IRC protocol implementation (Client, Server, Bots)
 * [crystal-dns](https://gitlab.com/jgillich/crystal-dns) - DNS protocol implementation and resolver
 * [crystal-json-socket ![GitHub Repo stars](https://img.shields.io/github/stars/foi/crystal-json-socket) ![GitHub last commit](https://img.shields.io/github/last-commit/foi/crystal-json-socket)](https://github.com/foi/crystal-json-socket) - JSON-socket client & server implementation. Inspired by and compatible with [node-json-socket ![GitHub Repo stars](https://img.shields.io/github/stars/sebastianseilund/node-json-socket) ![GitHub last commit](https://img.shields.io/github/last-commit/sebastianseilund/node-json-socket)](https://github.com/sebastianseilund/node-json-socket/) and [ruby-json-socket ![GitHub Repo stars](https://img.shields.io/github/stars/foi/ruby-json-socket) ![GitHub last commit](https://img.shields.io/github/last-commit/foi/ruby-json-socket)](https://github.com/foi/ruby-json-socket)
 * [crystal-mqtt ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/crystal-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/crystal-mqtt)](https://github.com/spider-gazelle/crystal-mqtt) - A MQTT client
 * [crystal-snmp ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/crystal-snmp) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/crystal-snmp)](https://github.com/spider-gazelle/crystal-snmp) - An SNMP implementation with version 1, 2c and 3 support
 * [fast_irc.cr ![GitHub Repo stars](https://img.shields.io/github/stars/RX14/fast_irc.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/RX14/fast_irc.cr)](https://github.com/RX14/fast_irc.cr) - Fast IRC parser/generator
 * [jwt ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-community/jwt) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-community/jwt)](https://github.com/crystal-community/jwt) - Implementation of JWT (JSON Web Token)
 * [mDNS ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/mdns) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/mdns)](https://github.com/spider-gazelle/mdns) - DNS Service Discovery and multicast DNS
 * [msgpack-crystal ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-community/msgpack-crystal) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-community/msgpack-crystal)](https://github.com/crystal-community/msgpack-crystal) - MessagePack library
 * [OAuth](https://crystal-lang.org/api/OAuth.html) - OAuth consumer (Crystal stdlib)
 * [OAuth2](https://crystal-lang.org/api/OAuth2.html) - OAuth2 client (Crystal stdlib)
 * [OpenSSL](https://crystal-lang.org/api/OpenSSL.html) - bindings to libssl (Crystal stdlib)
 * [simple_rpc ![GitHub Repo stars](https://img.shields.io/github/stars/kostya/simple_rpc) ![GitHub last commit](https://img.shields.io/github/last-commit/kostya/simple_rpc)](https://github.com/kostya/simple_rpc) - RPC Server and Client for Crystal. Implements msgpack-rpc protocol
 * [stomp ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/stomp) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/stomp)](https://github.com/spider-gazelle/stomp) - STOMP protocol
 * [telnet.cr ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/telnet.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/telnet.cr)](https://github.com/spider-gazelle/telnet.cr) - Telnet protocol
 * [transfer_more](https://git.sceptique.eu/Sceptique/transfer_more) - Clone of transfer.sh to uploads files

## Networking
 * [ipaddress.cr ![GitHub Repo stars](https://img.shields.io/github/stars/Sija/ipaddress.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/Sija/ipaddress.cr)](https://github.com/Sija/ipaddress.cr) - Library to handle IPv4 and IPv6 addresses

## ORM/ODM Extensions
 * [avram ![GitHub Repo stars](https://img.shields.io/github/stars/luckyframework/avram) ![GitHub last commit](https://img.shields.io/github/last-commit/luckyframework/avram)](https://github.com/luckyframework/avram) - A database wrapper for reading, writing, and migrating Postgres databases
 * [clear ![GitHub Repo stars](https://img.shields.io/github/stars/anykeyh/clear) ![GitHub last commit](https://img.shields.io/github/last-commit/anykeyh/clear)](https://github.com/anykeyh/clear) - ORM specialized to PostgreSQL only but with advanced features
 * [crecto ![GitHub Repo stars](https://img.shields.io/github/stars/Crecto/crecto) ![GitHub last commit](https://img.shields.io/github/last-commit/Crecto/crecto)](https://github.com/Crecto/crecto) - Database wrapper, based on Ecto
 * [granite ![GitHub Repo stars](https://img.shields.io/github/stars/amberframework/granite) ![GitHub last commit](https://img.shields.io/github/last-commit/amberframework/granite)](https://github.com/amberframework/granite) - ORM for Postgres, Mysql, Sqlite
 * [jennifer.cr ![GitHub Repo stars](https://img.shields.io/github/stars/imdrasil/jennifer.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/imdrasil/jennifer.cr)](https://github.com/imdrasil/jennifer.cr) - Active Record pattern implementation with flexible query chainable builder and migration system
 * [onyx-sql ![GitHub Repo stars](https://img.shields.io/github/stars/onyxframework/sql) ![GitHub last commit](https://img.shields.io/github/last-commit/onyxframework/sql)](https://github.com/onyxframework/sql) - DB-agnostic SQL ORM with beautiful DSL and type-safe Query builder
 * [rethinkdb-orm ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/rethinkdb-orm) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/rethinkdb-orm)](https://github.com/spider-gazelle/rethinkdb-orm) - ORM for RethinkDB / RebirthDB

## Package Management
 * [shards ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-lang/shards) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-lang/shards)](https://github.com/crystal-lang/shards) - Dependency manager for the Crystal

## Processes and Threads
 * [await_async ![GitHub Repo stars](https://img.shields.io/github/stars/anykeyh/await_async) ![GitHub last commit](https://img.shields.io/github/last-commit/anykeyh/await_async)](https://github.com/anykeyh/await_async) - Add keywords await & async in Crystal Lang
 * [neph ![GitHub Repo stars](https://img.shields.io/github/stars/tbrand/neph) ![GitHub last commit](https://img.shields.io/github/last-commit/tbrand/neph)](https://github.com/tbrand/neph) - A modern command line job processor that can execute jobs concurrently
 * [promise ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/promise) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/promise)](https://github.com/spider-gazelle/promise) - A Promise implementation with type inference
 * [werk ![GitHub Repo stars](https://img.shields.io/github/stars/marghidanu/werk) ![GitHub last commit](https://img.shields.io/github/last-commit/marghidanu/werk)](https://github.com/marghidanu/werk) - Dead simple task runner with concurrent support, ideal for local CI

## Project Generators
 * [crystal_lib ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-lang/crystal_lib) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-lang/crystal_lib)](https://github.com/crystal-lang/crystal_lib) - Automatic binding generator for native libraries
 * [fez ![GitHub Repo stars](https://img.shields.io/github/stars/jwoertink/fez) ![GitHub last commit](https://img.shields.io/github/last-commit/jwoertink/fez)](https://github.com/jwoertink/fez) - A Kemal application generator
 * [libgen ![GitHub Repo stars](https://img.shields.io/github/stars/olbat/libgen) ![GitHub last commit](https://img.shields.io/github/last-commit/olbat/libgen)](https://github.com/olbat/libgen) - Automatic bindings generator configured using JSON/YAML files

## Queues and Messaging
 * [mosquito ![GitHub Repo stars](https://img.shields.io/github/stars/mosquito-cr/mosquito) ![GitHub last commit](https://img.shields.io/github/last-commit/mosquito-cr/mosquito)](https://github.com/mosquito-cr/mosquito/) - Redis backed periodic and ad hoc job processing
 * [NATS.io ![GitHub Repo stars](https://img.shields.io/github/stars/nats-io/nats.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/nats-io/nats.cr)](https://github.com/nats-io/nats.cr) - NATS client
 * [sidekiq.cr ![GitHub Repo stars](https://img.shields.io/github/stars/mperham/sidekiq.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/mperham/sidekiq.cr)](https://github.com/mperham/sidekiq.cr) - Simple, efficient job processing

## Routing
 * [orion ![GitHub Repo stars](https://img.shields.io/github/stars/obsidian/orion) ![GitHub last commit](https://img.shields.io/github/last-commit/obsidian/orion)](https://github.com/obsidian/orion) - A minimal, rails-esque routing library
 * [router.cr ![GitHub Repo stars](https://img.shields.io/github/stars/tbrand/router.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/tbrand/router.cr)](https://github.com/tbrand/router.cr) - Minimum but powerful http router for HTTP::Server

## Scheduling
 * [crystime](https://gitlab.com/crystallabs/crystime) - Advanced time, calendar, schedule, and remind library
 * [schedule.cr ![GitHub Repo stars](https://img.shields.io/github/stars/hugoabonizio/schedule.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/hugoabonizio/schedule.cr)](https://github.com/hugoabonizio/schedule.cr) - Run periodic tasks
 * [tasker ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/tasker) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/tasker)](https://github.com/spider-gazelle/tasker) - A high precision scheduler including timezone aware cron jobs

## Science and Data analysis
 * [alea ![GitHub Repo stars](https://img.shields.io/github/stars/nin93/alea) ![GitHub last commit](https://img.shields.io/github/last-commit/nin93/alea)](https://github.com/nin93/alea) - Repeatable sampling, CDF and other utilities to work with probability distributions
 * [ishi ![GitHub Repo stars](https://img.shields.io/github/stars/toddsundsted/ishi) ![GitHub last commit](https://img.shields.io/github/last-commit/toddsundsted/ishi)](https://github.com/toddsundsted/ishi) - Graph plotting package with a small API and sensible defaults powered by gnuplot
 * [linalg ![GitHub Repo stars](https://img.shields.io/github/stars/konovod/linalg) ![GitHub last commit](https://img.shields.io/github/last-commit/konovod/linalg)](https://github.com/konovod/linalg) - Linear algebra library inspired by MATLAB and SciPy.linalg
 * [num.cr ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-data/num.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-data/num.cr)](https://github.com/crystal-data/num.cr) - Numerical computing library supporting N-Dimensional data
 * [predict.cr ![GitHub Repo stars](https://img.shields.io/github/stars/RX14/predict.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/RX14/predict.cr)](https://github.com/RX14/predict.cr) - Satellite prediction library using the sgp4 model
 * [quartz ![GitHub Repo stars](https://img.shields.io/github/stars/RomainFranceschini/quartz) ![GitHub last commit](https://img.shields.io/github/last-commit/RomainFranceschini/quartz)](https://github.com/RomainFranceschini/quartz) - Modeling and simulation framework

## Search
 * [hermes ![GitHub Repo stars](https://img.shields.io/github/stars/imdrasil/hermes.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/imdrasil/hermes.cr)](https://github.com/imdrasil/hermes.cr) - Data Mapper pattern implementation for ElastiSearch
 * [soegen ![GitHub Repo stars](https://img.shields.io/github/stars/Ragmaanir/soegen) ![GitHub last commit](https://img.shields.io/github/last-commit/Ragmaanir/soegen)](https://github.com/Ragmaanir/soegen) - Elasticsearch client for Crystal similar to the stretcher gem for ruby

## Serverless Computing
 * [crystal_openfaas ![GitHub Repo stars](https://img.shields.io/github/stars/TPei/crystal_openfaas) ![GitHub last commit](https://img.shields.io/github/last-commit/TPei/crystal_openfaas)](https://github.com/TPei/crystal_openfaas/) - Template to enable crystal as first class citizens in OpenFaaS
 * [FaaStRuby](https://faastruby.io) - Serverless Software Development Platform for Ruby and Crystal
 * [secrets-env ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/secrets-env) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/secrets-env)](https://github.com/spider-gazelle/secrets-env) - Extends ENV module to read values injected by docker / kubernetes secrets and other orchestration tools

## System
 * [baked_file_system ![GitHub Repo stars](https://img.shields.io/github/stars/schovi/baked_file_system) ![GitHub last commit](https://img.shields.io/github/last-commit/schovi/baked_file_system)](https://github.com/schovi/baked_file_system) - Virtual file system implementation
 * [hardware ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-community/hardware) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-community/hardware)](https://github.com/crystal-community/hardware) - Get CPU, Memory and Network informations of the running OS and its processes

## Task management
 * [cake ![GitHub Repo stars](https://img.shields.io/github/stars/axvm/cake) ![GitHub last commit](https://img.shields.io/github/last-commit/axvm/cake)](https://github.com/axvm/cake) - Production-ready Make-like utility tool
 * [sam ![GitHub Repo stars](https://img.shields.io/github/stars/imdrasil/sam.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/imdrasil/sam.cr)](https://github.com/imdrasil/sam.cr) - Another one Rake-like task manager with namespacing and arguments system

## Template Engine
 * [crinja ![GitHub Repo stars](https://img.shields.io/github/stars/straight-shoota/crinja) ![GitHub last commit](https://img.shields.io/github/last-commit/straight-shoota/crinja)](https://github.com/straight-shoota/crinja) - An implementation of the [Jinja2 template engine](http://jinja.pocoo.org/)
 * [crustache ![GitHub Repo stars](https://img.shields.io/github/stars/MakeNowJust/crustache) ![GitHub last commit](https://img.shields.io/github/last-commit/MakeNowJust/crustache)](https://github.com/MakeNowJust/crustache) - [{{Mustache}}](https://mustache.github.io) for Crystal
 * [ECR (Embedded Crystal)](https://crystal-lang.org/api/ECR.html) - compile time template language which uses plain crystal expressions (Crystal stdlib)
 * [Jbuilder ![GitHub Repo stars](https://img.shields.io/github/stars/shootingfly/jbuilder) ![GitHub last commit](https://img.shields.io/github/last-commit/shootingfly/jbuilder)](https://github.com/shootingfly/jbuilder) - Generate JSON objects with a Builder-style DSL, inspired by jbuilder
 * [Kilt ![GitHub Repo stars](https://img.shields.io/github/stars/jeromegn/kilt) ![GitHub last commit](https://img.shields.io/github/last-commit/jeromegn/kilt)](https://github.com/jeromegn/kilt) - Abstraction layer for template engines
 * [Slang ![GitHub Repo stars](https://img.shields.io/github/stars/jeromegn/slang) ![GitHub last commit](https://img.shields.io/github/last-commit/jeromegn/slang)](https://github.com/jeromegn/slang) - Lightweight, terse, templating language inspired by Ruby's Slim
 * [teeplate ![GitHub Repo stars](https://img.shields.io/github/stars/mosop/teeplate) ![GitHub last commit](https://img.shields.io/github/last-commit/mosop/teeplate)](https://github.com/mosop/teeplate) - A library for rendering multiple template files
 * [Water ![GitHub Repo stars](https://img.shields.io/github/stars/shootingfly/water) ![GitHub last commit](https://img.shields.io/github/last-commit/shootingfly/water)](https://github.com/shootingfly/water) - A library for writing HTML in plain Crystal

## Testing
 * [Athena Spec ![GitHub Repo stars](https://img.shields.io/github/stars/athena-framework/spec) ![GitHub last commit](https://img.shields.io/github/last-commit/athena-framework/spec)](https://github.com/athena-framework/spec) - Common/helpful [Spec](https://crystal-lang.org/api/Spec.html) compliant testing utilities
 * [crotest ![GitHub Repo stars](https://img.shields.io/github/stars/emancu/crotest) ![GitHub last commit](https://img.shields.io/github/last-commit/emancu/crotest)](https://github.com/emancu/crotest) - A tiny and simple test framework
 * [crytic ![GitHub Repo stars](https://img.shields.io/github/stars/hanneskaeufler/crytic) ![GitHub last commit](https://img.shields.io/github/last-commit/hanneskaeufler/crytic)](https://github.com/hanneskaeufler/crytic) - Mutation testing framework
 * [LuckyFlow ![GitHub Repo stars](https://img.shields.io/github/stars/luckyframework/lucky_flow) ![GitHub last commit](https://img.shields.io/github/last-commit/luckyframework/lucky_flow)](https://github.com/luckyframework/lucky_flow) - Automated browser tests similar to Capybara
 * [mass-spec ![GitHub Repo stars](https://img.shields.io/github/stars/c910335/mass-spec) ![GitHub last commit](https://img.shields.io/github/last-commit/c910335/mass-spec)](https://github.com/c910335/mass-spec) - Web API testing library
 * [microtest ![GitHub Repo stars](https://img.shields.io/github/stars/Ragmaanir/microtest) ![GitHub last commit](https://img.shields.io/github/last-commit/Ragmaanir/microtest)](https://github.com/Ragmaanir/microtest) - Small opinionated testing library focusing on power asserts
 * [minitest.cr ![GitHub Repo stars](https://img.shields.io/github/stars/ysbaddaden/minitest.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/ysbaddaden/minitest.cr)](https://github.com/ysbaddaden/minitest.cr) - Library for unit tests and assertions
 * [mocks.cr ![GitHub Repo stars](https://img.shields.io/github/stars/waterlink/mocks.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/waterlink/mocks.cr)](https://github.com/waterlink/mocks.cr) - Mocking library for Crystal
 * [Spec](https://crystal-lang.org/api/Spec.html) - spec framework (Crystal stdlib)
 * [spectator](https://gitlab.com/arctic-fox/spectator) - Feature rich spec framework that uses the modern expect syntax
 * [timecop.cr ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-community/timecop.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-community/timecop.cr)](https://github.com/crystal-community/timecop.cr) - Library for mocking with `Time.now`. Inspired by the [timecop ruby gem ![GitHub Repo stars](https://img.shields.io/github/stars/travisjeffery/timecop) ![GitHub last commit](https://img.shields.io/github/last-commit/travisjeffery/timecop)](https://github.com/travisjeffery/timecop)
 * [vcr ![GitHub Repo stars](https://img.shields.io/github/stars/spoved/vcr.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/spoved/vcr.cr)](https://github.com/spoved/vcr.cr) - A HTTP capture and replay implementation for crystal
 * [webdriver_pump ![GitHub Repo stars](https://img.shields.io/github/stars/bwilczek/webdriver_pump) ![GitHub last commit](https://img.shields.io/github/last-commit/bwilczek/webdriver_pump)](https://github.com/bwilczek/webdriver_pump) - Page Object library. Inspired by Ruby's [WatirPump ![GitHub Repo stars](https://img.shields.io/github/stars/bwilczek/watir_pump) ![GitHub last commit](https://img.shields.io/github/last-commit/bwilczek/watir_pump)](https://github.com/bwilczek/watir_pump)
 * [webmock.cr ![GitHub Repo stars](https://img.shields.io/github/stars/manastech/webmock.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/manastech/webmock.cr)](https://github.com/manastech/webmock.cr) - Library for stubbing `HTTP::Client` requests

## Third-party APIs
 * [aws-signer.cr ![GitHub Repo stars](https://img.shields.io/github/stars/beanieboi/aws-signer.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/beanieboi/aws-signer.cr)](https://github.com/beanieboi/aws-signer.cr) - This library signs your HTTP requests using AWS v4
 * [awscr-s3 ![GitHub Repo stars](https://img.shields.io/github/stars/taylorfinnell/awscr-s3) ![GitHub last commit](https://img.shields.io/github/last-commit/taylorfinnell/awscr-s3)](https://github.com/taylorfinnell/awscr-s3) - AWS S3 interface
 * [awscr-signer ![GitHub Repo stars](https://img.shields.io/github/stars/taylorfinnell/awscr-signer) ![GitHub last commit](https://img.shields.io/github/last-commit/taylorfinnell/awscr-signer)](https://github.com/taylorfinnell/awscr-signer) - Sign HTTP::Request objects and generate presigned post forms
 * [crystal-consul ![GitHub Repo stars](https://img.shields.io/github/stars/rogerwelin/crystal-consul) ![GitHub last commit](https://img.shields.io/github/last-commit/rogerwelin/crystal-consul)](https://github.com/rogerwelin/crystal-consul) - Consul API client
 * [crystal-darksky ![GitHub Repo stars](https://img.shields.io/github/stars/sb89/crystal-darksky) ![GitHub last commit](https://img.shields.io/github/last-commit/sb89/crystal-darksky)](https://github.com/sb89/crystal-darksky) - Wrapper for the [Dark Sky](https://darksky.net) API
 * [crystal-swapi ![GitHub Repo stars](https://img.shields.io/github/stars/sb89/crystal-swapi) ![GitHub last commit](https://img.shields.io/github/last-commit/sb89/crystal-swapi)](https://github.com/sb89/crystal-swapi) - Star Wars API (SWAPI) wrapper
 * [crystal_slack ![GitHub Repo stars](https://img.shields.io/github/stars/manastech/crystal_slack) ![GitHub last commit](https://img.shields.io/github/last-commit/manastech/crystal_slack)](https://github.com/manastech/crystal_slack) - A tool that parses Slack slash commands or send incoming web hooks
 * [GDAX ![GitHub Repo stars](https://img.shields.io/github/stars/mccallofthewild/gdax) ![GitHub last commit](https://img.shields.io/github/last-commit/mccallofthewild/gdax)](https://github.com/mccallofthewild/gdax) - GDAX REST and WebSocket API Wrapper with request signing
 * [gitlab.cr ![GitHub Repo stars](https://img.shields.io/github/stars/icyleaf/gitlab.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/icyleaf/gitlab.cr)](https://github.com/icyleaf/gitlab.cr) - GitLab API wrapper
 * [google ![GitHub Repo stars](https://img.shields.io/github/stars/PlaceOS/google) ![GitHub last commit](https://img.shields.io/github/last-commit/PlaceOS/google)](https://github.com/PlaceOS/google) - Google API wrapper
 * [host_meta ![GitHub Repo stars](https://img.shields.io/github/stars/toddsundsted/host_meta) ![GitHub last commit](https://img.shields.io/github/last-commit/toddsundsted/host_meta)](https://github.com/toddsundsted/host_meta) - A Web Host Metadata (https://tools.ietf.org/html/rfc6415) client
 * [kube-client.cr ![GitHub Repo stars](https://img.shields.io/github/stars/spoved/kube-client.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/spoved/kube-client.cr)](https://github.com/spoved/kube-client.cr) - Kubernetes API Client
 * [mixpanel-crystal ![GitHub Repo stars](https://img.shields.io/github/stars/petoem/mixpanel-crystal) ![GitHub last commit](https://img.shields.io/github/last-commit/petoem/mixpanel-crystal)](https://github.com/petoem/mixpanel-crystal) - A library for sending events to Mixpanel
 * [mollie.cr ![GitHub Repo stars](https://img.shields.io/github/stars/tilitribe/mollie.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/tilitribe/mollie.cr)](https://github.com/tilitribe/mollie.cr) - [Mollie](https://www.mollie.com/en/) Payments API wrapper (Creditcard, PayPal, Apple Pay, Sofort, Klarna, ...)
 * [office365 ![GitHub Repo stars](https://img.shields.io/github/stars/PlaceOS/office365) ![GitHub last commit](https://img.shields.io/github/last-commit/PlaceOS/office365)](https://github.com/PlaceOS/office365) - Microsoft Graph API wrapper
 * [pinboard.cr ![GitHub Repo stars](https://img.shields.io/github/stars/oz/pinboard.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/oz/pinboard.cr)](https://github.com/oz/pinboard.cr) - [Pinboard](https://pinboard.in) API
 * [raven.cr ![GitHub Repo stars](https://img.shields.io/github/stars/sija/raven.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/sija/raven.cr)](https://github.com/sija/raven.cr) - Raven is a client for [Sentry ![GitHub Repo stars](https://img.shields.io/github/stars/getsentry/sentry) ![GitHub last commit](https://img.shields.io/github/last-commit/getsentry/sentry)](https://github.com/getsentry/sentry)
 * [stripe.cr ![GitHub Repo stars](https://img.shields.io/github/stars/confact/stripe.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/confact/stripe.cr)](https://github.com/confact/stripe.cr) - Stripe api wrapper
 * [tmdb.cr ![GitHub Repo stars](https://img.shields.io/github/stars/mmacia/tmdb.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/mmacia/tmdb.cr)](https://github.com/mmacia/tmdb.cr) - The Movie DB (TMDb) api wrapper
 * [twitter-crystal ![GitHub Repo stars](https://img.shields.io/github/stars/sferik/twitter-crystal) ![GitHub last commit](https://img.shields.io/github/last-commit/sferik/twitter-crystal)](https://github.com/sferik/twitter-crystal) - A library to access the Twitter API
 * [web_finger ![GitHub Repo stars](https://img.shields.io/github/stars/toddsundsted/web_finger) ![GitHub last commit](https://img.shields.io/github/last-commit/toddsundsted/web_finger)](https://github.com/toddsundsted/web_finger) - A WebFinger (https://tools.ietf.org/html/rfc7033) client
 * [ynab.cr ![GitHub Repo stars](https://img.shields.io/github/stars/jaredsmithse/ynab.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/jaredsmithse/ynab.cr)](https://github.com/jaredsmithse/ynab.cr) - A library to interact with your YNAB data

## Validation
 * [accord ![GitHub Repo stars](https://img.shields.io/github/stars/neovintage/accord) ![GitHub last commit](https://img.shields.io/github/last-commit/neovintage/accord)](https://github.com/neovintage/accord) - Shareable validation library for Crystal Objects
 * [Athena Validator ![GitHub Repo stars](https://img.shields.io/github/stars/athena-framework/validator) ![GitHub last commit](https://img.shields.io/github/last-commit/athena-framework/validator)](https://github.com/athena-framework/validator) - Robust & flexible validation framework
 * [validations ![GitHub Repo stars](https://img.shields.io/github/stars/vladfaust/validations.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/vladfaust/validations.cr)](https://github.com/vladfaust/validations.cr) - Validations mixin
 * [validator ![GitHub Repo stars](https://img.shields.io/github/stars/Nicolab/crystal-validator) ![GitHub last commit](https://img.shields.io/github/last-commit/Nicolab/crystal-validator)](https://github.com/Nicolab/crystal-validator) - Data check and validation

## Web Frameworks
 * [amber ![GitHub Repo stars](https://img.shields.io/github/stars/amberframework/amber) ![GitHub last commit](https://img.shields.io/github/last-commit/amberframework/amber)](https://github.com/amberframework/amber) - Open source efficient and cohesive web application framework
 * [Athena ![GitHub Repo stars](https://img.shields.io/github/stars/athena-framework/athena) ![GitHub last commit](https://img.shields.io/github/last-commit/athena-framework/athena)](https://github.com/athena-framework/athena) - A web framework comprised of reusable, independent components
 * [grip ![GitHub Repo stars](https://img.shields.io/github/stars/grip-framework/grip) ![GitHub last commit](https://img.shields.io/github/last-commit/grip-framework/grip)](https://github.com/grip-framework/grip) - The microframework for writing powerful web applications
 * [kemal ![GitHub Repo stars](https://img.shields.io/github/stars/kemalcr/kemal) ![GitHub last commit](https://img.shields.io/github/last-commit/kemalcr/kemal)](https://github.com/kemalcr/kemal) - Lightning Fast, Super Simple web framework. Inspired by Sinatra
 * [lucky ![GitHub Repo stars](https://img.shields.io/github/stars/luckyframework/lucky) ![GitHub last commit](https://img.shields.io/github/last-commit/luckyframework/lucky)](https://github.com/luckyframework/lucky) - Catch bugs early, forget about most performance issues, and spend more time on code instead of debugging and writing tests
 * [runcobo ![GitHub Repo stars](https://img.shields.io/github/stars/runcobo/runcobo) ![GitHub last commit](https://img.shields.io/github/last-commit/runcobo/runcobo)](https://github.com/runcobo/runcobo) - An api framework with simple, intuitive and consistent DSL, using jbuilder to render json
 * [Shivneri ![GitHub Repo stars](https://img.shields.io/github/stars/ujjwalguptaofficial/shivneri) ![GitHub last commit](https://img.shields.io/github/last-commit/ujjwalguptaofficial/shivneri)](https://github.com/ujjwalguptaofficial/shivneri) - Component based MVC web framework for crystal targeting good code structures, modularity & performance
 * [spider-gazelle ![GitHub Repo stars](https://img.shields.io/github/stars/spider-gazelle/spider-gazelle) ![GitHub last commit](https://img.shields.io/github/last-commit/spider-gazelle/spider-gazelle)](https://github.com/spider-gazelle/spider-gazelle) - A Rails esque web framework with a focus on speed and extensibility

# Community
 * [Chicago Crystal Podcast](https://podcast.chicagocrystal.org)
 * [Chicago Crystal YouTube](https://www.youtube.com/channel/UCI1RvHPG6S9mw4eRoJfH2kA)
 * [Crystal weekly newsletters](http://crystalweekly.com/)
 * [Gitter](https://gitter.im/crystal-lang/crystal)
 * [Google Group](https://groups.google.com/forum/?fromgroups#!forum/crystal-lang)
 * [IRC](http://irc.lc/freenode/crystal-lang) - #crystal-lang on Freenode
 * [Metaruby](https://metaruby.com/c/crystal-forum) - Crystal Forum on Metaruby
 * [Reddit](https://www.reddit.com/r/crystal_programming/)
 * [Stackoverflow](https://stackoverflow.com/tags/crystal-lang/info)

## Unofficial
 * [Chinese-speaking Telegram Group](https://t.me/crystal_cn) - 来吧！TG 中文圈的朋友们！
 * [Crystal Programming Discord Server](https://discord.gg/YS7YvQy) - Unofficial Discord server dedicated to the Crystal Programming Language
 * [Portuguese-speaking Telegram Group](https://t.me/crystalbrasil) - Bem vindos ao Crystal Brasil!
 * [Russian-speaking Telegram Group](https://t.me/crystal_ru) - Добро пожаловать, товарищ!

# Resources
 * [Crystal for Rubyists](http://www.crystalforrubyists.com/) - Free book to bootstrap your Crystal journey
 * [Crystal Mastery](https://crystalmastery.io/) - Screencasts for learning Crystal
 * [crystal-koans ![GitHub Repo stars](https://img.shields.io/github/stars/ilmanzo/crystal-koans) ![GitHub last commit](https://img.shields.io/github/last-commit/ilmanzo/crystal-koans)](https://github.com/ilmanzo/crystal-koans) - Learn Crystal by writing unit tests
 * [crystal-lang.org](https://crystal-lang.org) - Official language site
 * [devdocs.io](https://devdocs.io/crystal/) - API Documentation Browser with Crystal support
 * [getgood.at](https://getgood.at/in-a-day/crystal) - Learn Crystal in a Day
 * [Programming Crystal](https://pragprog.com/book/crystal/programming-crystal) - PragProg book to start your Crystal journey

## Official Documentation Translations
 * [br.crystal-lang.org](http://br.crystal-lang.org/) - Brazilian
 * [ja.crystal-lang.org](http://ja.crystal-lang.org/) - Japanese
 * [kr.crystal-lang.org](https://kr.crystal-lang.org/) - Korean
 * [ru.crystal-lang.org](http://ru.crystal-lang.org/) - Russian
 * [tw.crystal-lang.org](http://tw.crystal-lang.org/) - Chinese Traditional

# Services and Apps
 * [carc.in](https://carc.in/) - A web service that runs your code and displays the result
 * [Crank ![GitHub Repo stars](https://img.shields.io/github/stars/arktisklada/crank) ![GitHub last commit](https://img.shields.io/github/last-commit/arktisklada/crank)](https://github.com/arktisklada/crank) - A Procfile-based application manager (like Foreman)
 * [cry ![GitHub Repo stars](https://img.shields.io/github/stars/elorest/cry) ![GitHub last commit](https://img.shields.io/github/last-commit/elorest/cry)](https://github.com/elorest/cry) - Ability to execute crystal code in a fashion similar to Ruby's pry edit
 * [Crystal [ANN]](https://crystal-ann.com) - Announce new project, blog post, version update or any other Crystal work
 * [crystalshards.herokuapp.com](https://crystalshards.herokuapp.com/), [crystalshards.xyz](http://crystalshards.xyz/) - Web services that list all available Crystal shards
 * [Crystular](http://www.crystular.org) - Regular expression tester
 * [DeBot ![GitHub Repo stars](https://img.shields.io/github/stars/jhass/DeBot) ![GitHub last commit](https://img.shields.io/github/last-commit/jhass/DeBot)](https://github.com/jhass/DeBot) - IRC bot written in Crystal
 * [icr ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-community/icr) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-community/icr)](https://github.com/crystal-community/icr) - Interactive console for Crystal (like IRB for Ruby)
 * [Invidious ![GitHub Repo stars](https://img.shields.io/github/stars/iv-org/invidious) ![GitHub last commit](https://img.shields.io/github/last-commit/iv-org/invidious)](https://github.com/iv-org/invidious) - Invidious is an alternative front-end to YouTube
 * [mpngin ![GitHub Repo stars](https://img.shields.io/github/stars/thewalkingtoast/mpngin) ![GitHub last commit](https://img.shields.io/github/last-commit/thewalkingtoast/mpngin)](https://github.com/thewalkingtoast/mpngin) - A URL shortener with simple stats
 * [quicktype](https://quicktype.io/) - Generate models and serializers from JSON, JSON Schema, GraphQL, and TypeScript
 * [shards.info](http://shards.info/) - Web service that lists all repositories on GitHub that have Crystal code in them. The sources are available on [GitHub ![GitHub Repo stars](https://img.shields.io/github/stars/mamantoha/shards-info) ![GitHub last commit](https://img.shields.io/github/last-commit/mamantoha/shards-info)](https://github.com/mamantoha/shards-info)

# Tools
 * [ast_helper ![GitHub Repo stars](https://img.shields.io/github/stars/bcardiff/crystal-ast-helper) ![GitHub last commit](https://img.shields.io/github/last-commit/bcardiff/crystal-ast-helper)](https://github.com/bcardiff/crystal-ast-helper) - Helper tool to debug parser and formatter
 * [crystal-base ![GitHub Repo stars](https://img.shields.io/github/stars/ruivieira/crystal-base) ![GitHub last commit](https://img.shields.io/github/last-commit/ruivieira/crystal-base)](https://github.com/ruivieira/crystal-base) - CentOS base docker image for Crystal development
 * [crystal-dash-docset ![GitHub Repo stars](https://img.shields.io/github/stars/Sija/crystal-dash-docset) ![GitHub last commit](https://img.shields.io/github/last-commit/Sija/crystal-dash-docset)](https://github.com/Sija/crystal-dash-docset) - [Dash](https://kapeli.com/dash) docset generator
 * [public_suffix ![GitHub Repo stars](https://img.shields.io/github/stars/toddsundsted/public_suffix) ![GitHub last commit](https://img.shields.io/github/last-commit/toddsundsted/public_suffix)](https://github.com/toddsundsted/public_suffix) - A small library designed to make the Public Suffix List (https://publicsuffix.org/) easier to use

## DevOps
 * [ansible-crystal ![GitHub Repo stars](https://img.shields.io/github/stars/CorbanR/ansible-crystal) ![GitHub last commit](https://img.shields.io/github/last-commit/CorbanR/ansible-crystal)](https://github.com/CorbanR/ansible-crystal) - Ansible playbook for installing crystal
 * [DPPM ![GitHub Repo stars](https://img.shields.io/github/stars/DFabric/dppm) ![GitHub last commit](https://img.shields.io/github/last-commit/DFabric/dppm)](https://github.com/DFabric/dppm) - An easy, universal way to install and manage applications as packages (mostly Linux)

## Editor Plugins
 * Acme:
   * [acmecrystal ![GitHub Repo stars](https://img.shields.io/github/stars/ilanpillemer/acmecrystal) ![GitHub last commit](https://img.shields.io/github/last-commit/ilanpillemer/acmecrystal)](https://github.com/ilanpillemer/acmecrystal) - Reformats crystal code in acme
 * Atom
   * [crystal-tools](https://atom.io/packages/crystal-tools) - Enables built in tools in Crystal compiler
   * [language-crystal-actual](https://atom.io/packages/language-crystal-actual) - Crystal language support in Atom
 * Emacs
   * [crystal-mode](https://melpa.org/#/crystal-mode) - Crystal language support for Emacs ([crystal-lang-tools/emacs-crystal-mode ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-lang-tools/emacs-crystal-mode) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-lang-tools/emacs-crystal-mode)](https://github.com/crystal-lang-tools/emacs-crystal-mode))
 * Geany
   * [geany-crystal ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-lang-tools/geany-crystal) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-lang-tools/geany-crystal)](https://github.com/crystal-lang-tools/geany-crystal) - Crystal support for the [Geany editor](https://www.geany.org/)
 * Spacemacs
   * [crystal-spacemacs-layer ![GitHub Repo stars](https://img.shields.io/github/stars/juanedi/crystal-spacemacs-layer) ![GitHub last commit](https://img.shields.io/github/last-commit/juanedi/crystal-spacemacs-layer)](https://github.com/juanedi/crystal-spacemacs-layer) - Spacemacs contribution layer for Crystal
 * Sublime
   * [sublime-crystal ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-lang-tools/sublime-crystal) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-lang-tools/sublime-crystal)](https://github.com/crystal-lang-tools/sublime-crystal) - Crystal syntax highlighting for sublime Text
 * TextMate
   * [Crystal.tmbundle ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-lang-tools/Crystal.tmbundle) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-lang-tools/Crystal.tmbundle)](https://github.com/crystal-lang-tools/Crystal.tmbundle) - Crystal syntax highlighting, compile, format command, snippets
 * Vim
   * [vim-crystal ![GitHub Repo stars](https://img.shields.io/github/stars/vim-crystal/vim-crystal) ![GitHub last commit](https://img.shields.io/github/last-commit/vim-crystal/vim-crystal)](https://github.com/vim-crystal/vim-crystal) - Vim filetype support for Crystal
   * [vim-slang ![GitHub Repo stars](https://img.shields.io/github/stars/elorest/vim-slang) ![GitHub last commit](https://img.shields.io/github/last-commit/elorest/vim-slang)](https://github.com/elorest/vim-slang) - Vim filetype support for Slang Templating Engine
 * Visual Studio Code
   * [vscode-crystal-lang ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-lang-tools/vscode-crystal-lang) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-lang-tools/vscode-crystal-lang)](https://github.com/crystal-lang-tools/vscode-crystal-lang) - Formatter, linter and syntax highlighting for `cr` and `ecr` files

## LSP Language Server Protocol Implementations
 * [crystalline ![GitHub Repo stars](https://img.shields.io/github/stars/elbywan/crystalline) ![GitHub last commit](https://img.shields.io/github/last-commit/elbywan/crystalline)](https://github.com/elbywan/crystalline) - Crystalline is an implementation of the Language Server Protocol written in and for the Crystal Language
 * [scry ![GitHub Repo stars](https://img.shields.io/github/stars/crystal-lang-tools/scry) ![GitHub last commit](https://img.shields.io/github/last-commit/crystal-lang-tools/scry)](https://github.com/crystal-lang-tools/scry) - Code analysis server for Crystal implementing the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/)

## Shell plugins
 * [crun ![GitHub Repo stars](https://img.shields.io/github/stars/Val/crun) ![GitHub last commit](https://img.shields.io/github/last-commit/Val/crun)](https://github.com/Val/crun) - Crystal Run : shebang wrapper for Crystal
 * [crystal-zsh ![GitHub Repo stars](https://img.shields.io/github/stars/veelenga/crystal-zsh) ![GitHub last commit](https://img.shields.io/github/last-commit/veelenga/crystal-zsh)](https://github.com/veelenga/crystal-zsh) - .oh-my-zsh plugin
