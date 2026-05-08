# Awesome Deno [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="https://github.com/denolib/awesome-deno/raw/main/deno-logo.png" align="right" width="100">](https://deno.land)

Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.

This list is a collection of the best Deno modules and resources.

## Contents

- [Docs](#docs)
  - [Official Docs](#official-docs)
  - [External Docs](#external-docs)
- [Modules](#modules)
  - [Automation](#automation)
  - [CLI utils](#cli-utils)
  - [Cloud APIs](#cloud-apis)
  - [Database](#database)
  - [Editor framework](#editor-framework)
  - [Frontend framework](#frontend-framework)
  - [Game engine](#game-engine)
  - [Logging](#logging)
  - [Machine Learning](#machine-learning)
  - [Mail](#mail)
  - [Markdown](#markdown)
  - [Math](#math)
  - [Static site generator](#static-site-generator)
  - [String utils](#string-utils)
  - [Social Platform APIs](#social-platform-apis)
  - [Template engine](#template-engine)
  - [Testing](#testing)
  - [Utils](#utils)
  - [Web framework](#web-framework)
  - [WebSocket](#websocket)
  - [Web utils](#web-utils)
  - [Webview](#webview)
  - [XML](#xml)
- [Registries](#registries)
- [Showcases](#showcases)
- [Tools](#tools)
- [Integrations](#integrations)
- [Articles](#articles)
- [Blogs/Newsletters](#blogsnewsletters)
- [Presentations](#presentations)
- [Resources](#resources)
  - [Books](#books)
- [Resources in Other Languages](#resources-in-other-languages)
  - [Chinese](#chinese)
  - [Hebrew](#hebrew)
  - [Indonesian](#indonesian)
  - [Italian](#italian)
  - [Japanese](#japanese)
  - [Korean](#korean)
  - [Russian](#russian)
  - [Spanish](#spanish)
  - [Darija (Arabe marocain)](#darija)
  - [Kurdish (Central)](#kurdish-central)

## Docs

### Official Docs

- [Deno API Reference](https://docs.deno.com/api)
- [Deno Manual](https://docs.deno.com)
- [Deno Standard Library](https://jsr.io/@std)
- [Official Site](https://deno.com)

### External Docs

- [V8 Docs for Deno](https://denolib.github.io/v8-docs/)

## Modules

### Automation
- [swissknife ![GitHub Repo Stars](https://img.shields.io/github/stars/fakoua/SwissKnife) ![GitHub last commit](https://img.shields.io/github/last-commit/fakoua/SwissKnife)](https://github.com/fakoua/SwissKnife) - SwissKnife - Deno Swiss Knife tools for Windows.

### CLI utils
- [cac ![GitHub Repo Stars](https://img.shields.io/github/stars/cacjs/cac) ![GitHub last commit](https://img.shields.io/github/last-commit/cacjs/cac)](https://github.com/cacjs/cac) - Simple yet powerful framework for building command-line apps.
- [charmd ![GitHub Repo Stars](https://img.shields.io/github/stars/littletof/charmd) ![GitHub last commit](https://img.shields.io/github/last-commit/littletof/charmd)](https://github.com/littletof/charmd) - A simple, extendable markdown renderer for your terminal.
- [cli-spinner ![GitHub Repo Stars](https://img.shields.io/github/stars/ameerthehacker/deno-cli-spinners) ![GitHub last commit](https://img.shields.io/github/last-commit/ameerthehacker/deno-cli-spinners)](https://github.com/ameerthehacker/deno-cli-spinners) - Show spinners in the terminal while running long tasks.
- [cliffy ![GitHub Repo Stars](https://img.shields.io/github/stars/c4spar/cliffy) ![GitHub last commit](https://img.shields.io/github/last-commit/c4spar/cliffy)](https://github.com/c4spar/cliffy) - The complete solution for building interactive command-line tools.
- [clite ![GitHub Repo Stars](https://img.shields.io/github/stars/jersou/clite-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/jersou/clite-parser)](https://github.com/jersou/clite-parser) - Automatic CLI generation from a class.
- [commit-sage-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/AhmedOsman101/commit-sage-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/AhmedOsman101/commit-sage-cli)](https://github.com/AhmedOsman101/commit-sage-cli) - Generates Conventional Commit messages with AI based on Git repository changes.
- [tui ![GitHub Repo Stars](https://img.shields.io/github/stars/Im-Beast/deno_tui) ![GitHub last commit](https://img.shields.io/github/last-commit/Im-Beast/deno_tui)](https://github.com/Im-Beast/deno_tui) - Module which allows easy creation of Terminal User Interfaces.
- [yargs ![GitHub Repo Stars](https://img.shields.io/github/stars/yargs/yargs) ![GitHub last commit](https://img.shields.io/github/last-commit/yargs/yargs)](https://github.com/yargs/yargs) - The modern, pirate-themed successor to optimist.

### Cloud APIs
- [aws-api](https://aws-api.deno.dev/) - From-scratch Typescript AWS API client built for Deno.
- [googleapis](https://googleapis.deno.dev/) - Auto-generated Google API clients for Deno.

### Database
- [@iuioiua/redis](https://jsr.io/@iuioiua/redis) - Fast, lightweight Redis client built upon the Web Streams API.
- [aloedb ![GitHub Repo Stars](https://img.shields.io/github/stars/Kirlovon/aloedb) ![GitHub last commit](https://img.shields.io/github/last-commit/Kirlovon/aloedb)](https://github.com/Kirlovon/aloedb) - Light, Embeddable, NoSQL database for Deno without dependencies.
- [deno_mongo ![GitHub Repo Stars](https://img.shields.io/github/stars/denodrivers/mongo) ![GitHub last commit](https://img.shields.io/github/last-commit/denodrivers/mongo)](https://github.com/denodrivers/mongo) - MongoDB database driver.
- [deno_mysql ![GitHub Repo Stars](https://img.shields.io/github/stars/denodrivers/mysql) ![GitHub last commit](https://img.shields.io/github/last-commit/denodrivers/mysql)](https://github.com/denodrivers/mysql) - MySQL database driver.
- [denodb ![GitHub Repo Stars](https://img.shields.io/github/stars/eveningkid/denodb) ![GitHub last commit](https://img.shields.io/github/last-commit/eveningkid/denodb)](https://github.com/eveningkid/denodb) - MySQL, SQLite, MariaDB, PostgreSQL and MongoDB ORM for Deno.
- [dongoose ![GitHub Repo Stars](https://img.shields.io/github/stars/roonie007/dongoose) ![GitHub last commit](https://img.shields.io/github/last-commit/roonie007/dongoose)](https://github.com/roonie007/dongoose) - A simple and easy to use ORM for Deno KV.
- [maxminddb ![GitHub Repo Stars](https://img.shields.io/github/stars/josh-hemphill/maxminddb-wasm) ![GitHub last commit](https://img.shields.io/github/last-commit/josh-hemphill/maxminddb-wasm)](https://github.com/josh-hemphill/maxminddb-wasm) - A library that enables the usage of MaxmindDB geoIP database files
- [nessie ![GitHub Repo Stars](https://img.shields.io/github/stars/halvardssm/deno-nessie) ![GitHub last commit](https://img.shields.io/github/last-commit/halvardssm/deno-nessie)](https://github.com/halvardssm/deno-nessie) - Create, migrate and rollback migrations for PostgreSQL, MySQL and SQLite.
- [postgres ![GitHub Repo Stars](https://img.shields.io/github/stars/denodrivers/postgres) ![GitHub last commit](https://img.shields.io/github/last-commit/denodrivers/postgres)](https://github.com/denodrivers/postgres) - Driver for PostgreSQL database.
- [redis ![GitHub Repo Stars](https://img.shields.io/github/stars/denodrivers/redis) ![GitHub last commit](https://img.shields.io/github/last-commit/denodrivers/redis)](https://github.com/denodrivers/redis) - An experimental implementation of redis client for deno.
- [yongo ![GitHub Repo Stars](https://img.shields.io/github/stars/yooneskh/yongo) ![GitHub last commit](https://img.shields.io/github/last-commit/yooneskh/yongo)](https://github.com/yooneskh/yongo) - Subset of Mongoose api in deno (like populate) but will not fully copy mongoose

### Editor framework

- [Denops ![GitHub Repo Stars](https://img.shields.io/github/stars/vim-denops/denops.vim) ![GitHub last commit](https://img.shields.io/github/last-commit/vim-denops/denops.vim)](https://github.com/vim-denops/denops.vim) - 🐜 An ecosystem to write Vim/Neovim plugins with Deno.

### Frontend framework
- [fresh ![GitHub Repo Stars](https://img.shields.io/github/stars/denoland/fresh) ![GitHub last commit](https://img.shields.io/github/last-commit/denoland/fresh)](https://github.com/denoland/fresh) - The next-gen web framework.
- [packup ![GitHub Repo Stars](https://img.shields.io/github/stars/kt3k/packup) ![GitHub last commit](https://img.shields.io/github/last-commit/kt3k/packup)](https://github.com/kt3k/packup) - Zero-config web application packager for Deno.
- [ultra ![GitHub Repo Stars](https://img.shields.io/github/stars/exhibitionist-digital/ultra) ![GitHub last commit](https://img.shields.io/github/last-commit/exhibitionist-digital/ultra)](https://github.com/exhibitionist-digital/ultra) - 💎 Modern Streaming React Framework in Deno.

### Game engine
- [caviar ![GitHub Repo Stars](https://img.shields.io/github/stars/load1n9/caviar) ![GitHub last commit](https://img.shields.io/github/last-commit/load1n9/caviar)](https://github.com/load1n9/caviar) - ⚡ Blazing fast, modern, Game Engine powered by WebGPU for Deno and the browser
- [sdl2 ![GitHub Repo Stars](https://img.shields.io/github/stars/littledivy/deno_sdl2) ![GitHub last commit](https://img.shields.io/github/last-commit/littledivy/deno_sdl2)](https://github.com/littledivy/deno_sdl2) - SDL2 module for Deno

### Image
- [ImageScript ![GitHub Repo Stars](https://img.shields.io/github/stars/matmen/ImageScript) ![GitHub last commit](https://img.shields.io/github/last-commit/matmen/ImageScript)](https://github.com/matmen/ImageScript) - Image processing in JavaScript, utilizing WebAssembly for performance.
- [monke ![GitHub Repo Stars](https://img.shields.io/github/stars/retraigo/monke) ![GitHub last commit](https://img.shields.io/github/last-commit/retraigo/monke)](https://github.com/retraigo/monke) - Color quantization and dithering library with extra image filters (blur, invert, etc).

### Logging
- [LogTape ![GitHub Repo Stars](https://img.shields.io/github/stars/dahlia/logtape) ![GitHub last commit](https://img.shields.io/github/last-commit/dahlia/logtape)](https://github.com/dahlia/logtape) - Simple logging library with zero dependencies for Deno/Node.js/Bun/browsers.

### Machine learning
- [appraisal ![GitHub Repo Stars](https://img.shields.io/github/stars/retraigo/appraisal) ![GitHub last commit](https://img.shields.io/github/last-commit/retraigo/appraisal)](https://github.com/retraigo/appraisal) - Feature extraction and conversion.
- [classy-lala ![GitHub Repo Stars](https://img.shields.io/github/stars/retraigo/la-classy) ![GitHub last commit](https://img.shields.io/github/last-commit/retraigo/la-classy)](https://github.com/retraigo/la-classy) - Single-layer perceptrons for supervised learning tasks.
- [netsaur ![GitHub Repo Stars](https://img.shields.io/github/stars/denosaurs/netsaur) ![GitHub last commit](https://img.shields.io/github/last-commit/denosaurs/netsaur)](https://github.com/denosaurs/netsaur) - Powerful machine learning, accelerated by WebGPU

### Mail
- [deno-smtp ![GitHub Repo Stars](https://img.shields.io/github/stars/manyuanrong/deno-smtp) ![GitHub last commit](https://img.shields.io/github/last-commit/manyuanrong/deno-smtp)](https://github.com/manyuanrong/deno-smtp) - A smtp mail sender for deno.

### Markdown
- [LiteMarkup ![GitHub Repo Stars](https://img.shields.io/github/stars/tuures/LiteMarkup) ![GitHub last commit](https://img.shields.io/github/last-commit/tuures/LiteMarkup)](https://github.com/tuures/LiteMarkup) - AST-first parser. Under 3 KB gzipped, zero dependencies.

### Math
- [neo ![GitHub Repo Stars](https://img.shields.io/github/stars/denosaurs/neo) ![GitHub last commit](https://img.shields.io/github/last-commit/denosaurs/neo)](https://github.com/denosaurs/neo/) - Matrix and other math, accelerated by WebGPU

### Static site generator
- [lume ![GitHub Repo Stars](https://img.shields.io/github/stars/lumeland/lume) ![GitHub last commit](https://img.shields.io/github/last-commit/lumeland/lume)](https://github.com/lumeland/lume) - A static site generator similar to Jekyll or Eleventy with support for multiple file formats.
- [pagic ![GitHub Repo Stars](https://img.shields.io/github/stars/xcatliu/pagic) ![GitHub last commit](https://img.shields.io/github/last-commit/xcatliu/pagic)](https://github.com/xcatliu/pagic) - The easiest way to generate static html page from markdown, built with Deno.

### String utils
- [written ![GitHub Repo Stars](https://img.shields.io/github/stars/vixalien/written) ![GitHub last commit](https://img.shields.io/github/last-commit/vixalien/written)](https://github.com/vixalien/written) - A provides a set of utilities for manipulating text, with a focus on providing typographic tools rather than pure string manipulation.

### Social Platform APIs
- [discordeno ![GitHub Repo Stars](https://img.shields.io/github/stars/discordeno/discordeno) ![GitHub last commit](https://img.shields.io/github/last-commit/discordeno/discordeno)](https://github.com/discordeno/discordeno) - Discord API library for Deno
- [grammY ![GitHub Repo Stars](https://img.shields.io/github/stars/grammyjs/grammY) ![GitHub last commit](https://img.shields.io/github/last-commit/grammyjs/grammY)](https://github.com/grammyjs/grammY) - Telegram Bot API framework for Deno.
- [MTKruto ![GitHub Repo Stars](https://img.shields.io/github/stars/MTKruto/MTKruto) ![GitHub last commit](https://img.shields.io/github/last-commit/MTKruto/MTKruto)](https://github.com/MTKruto/MTKruto) - Deno-first, cross-runtime client library for Telegram's MTProto API.


### Template engine
- [dejs ![GitHub Repo Stars](https://img.shields.io/github/stars/syumai/dejs) ![GitHub last commit](https://img.shields.io/github/last-commit/syumai/dejs)](https://github.com/syumai/dejs) - Ejs template engine for deno.
- [eta ![GitHub Repo Stars](https://img.shields.io/github/stars/bgub/eta) ![GitHub last commit](https://img.shields.io/github/last-commit/bgub/eta)](https://github.com/bgub/eta) - Fast, lightweight, and configurable embedded template engine.
- [handlebars ![GitHub Repo Stars](https://img.shields.io/github/stars/alosaur/handlebars) ![GitHub last commit](https://img.shields.io/github/last-commit/alosaur/handlebars)](https://github.com/alosaur/handlebars) - Handlebars template engine for deno

### Testing
- [deno-puppeteer ![GitHub Repo Stars](https://img.shields.io/github/stars/lucacasonato/deno-puppeteer) ![GitHub last commit](https://img.shields.io/github/last-commit/lucacasonato/deno-puppeteer)](https://github.com/lucacasonato/deno-puppeteer) - A library which provides a high-level API to control Chromium or Chrome over the DevTools Protocol.
- [qunitx ![GitHub Repo Stars](https://img.shields.io/github/stars/izelnakri/qunitx) ![GitHub last commit](https://img.shields.io/github/last-commit/izelnakri/qunitx)](https://github.com/izelnakri/qunitx) - Zero dependency, fully customizable, mature, universal test API that can run interchangably in node.js, Deno & browser, using default runtime test runners.
- [rhum ![GitHub Repo Stars](https://img.shields.io/github/stars/drashland/rhum) ![GitHub last commit](https://img.shields.io/github/last-commit/drashland/rhum)](https://github.com/drashland/rhum) - A lightweight testing framework for Deno.
- [superdeno ![GitHub Repo Stars](https://img.shields.io/github/stars/cmorten/superdeno) ![GitHub last commit](https://img.shields.io/github/last-commit/cmorten/superdeno)](https://github.com/cmorten/superdeno) - Super-agent driven library for testing Deno HTTP servers.
- [superoak ![GitHub Repo Stars](https://img.shields.io/github/stars/cmorten/superoak) ![GitHub last commit](https://img.shields.io/github/last-commit/cmorten/superoak)](https://github.com/cmorten/superoak) - HTTP assertions for Oak made easy via SuperDeno.
- [tepi](https://deno.land/x/tepi) - A .http Test Runner
- [unexpected ![GitHub Repo Stars](https://img.shields.io/github/stars/unexpectedjs/unexpected) ![GitHub last commit](https://img.shields.io/github/last-commit/unexpectedjs/unexpected)](https://github.com/unexpectedjs/unexpected) - Extensible BDD assertion toolkit.

### Utils
- [buckets ![GitHub Repo Stars](https://img.shields.io/github/stars/jacoborus/deno-buckets) ![GitHub last commit](https://img.shields.io/github/last-commit/jacoborus/deno-buckets)](https://github.com/jacoborus/deno-buckets) - Bundle assets and scripts in a single executable file.
- [colors ![GitHub Repo Stars](https://img.shields.io/github/stars/retraigo/colors) ![GitHub last commit](https://img.shields.io/github/last-commit/retraigo/colors)](https://github.com/retraigo/colors) - Color conversions and operations in TypeScript.
- [computed_types ![GitHub Repo Stars](https://img.shields.io/github/stars/neuledge/computed-types) ![GitHub last commit](https://img.shields.io/github/last-commit/neuledge/computed-types)](https://github.com/neuledge/computed-types) - Joi like validators for Typescript and Deno.
- [croner ![GitHub Repo Stars](https://img.shields.io/github/stars/Hexagon/croner) ![GitHub last commit](https://img.shields.io/github/last-commit/Hexagon/croner)](https://github.com/Hexagon/croner) - Cron library with advanced scheduling features, well-documented API, and zero dependencies.
- [deno-config ![GitHub Repo Stars](https://img.shields.io/github/stars/yooneskh/deno-unified-config) ![GitHub last commit](https://img.shields.io/github/last-commit/yooneskh/deno-unified-config)](https://github.com/yooneskh/deno-unified-config) - Utility to streamline deno app configuration management through cli, .env and json files
- [deno_kv_fs ![GitHub Repo Stars](https://img.shields.io/github/stars/hviana/deno_kv_fs) ![GitHub last commit](https://img.shields.io/github/last-commit/hviana/deno_kv_fs)](https://github.com/hviana/deno_kv_fs) Deno KV file system, compatible with Deno deploy. Makes use of Web Streams API.
- [denon ![GitHub Repo Stars](https://img.shields.io/github/stars/denosaurs/denon) ![GitHub last commit](https://img.shields.io/github/last-commit/denosaurs/denon)](https://github.com/denosaurs/denon/blob/master/mod.ts) - A file watcher with a for-await generator.
- [dinoenv](https://deno.land/x/dinoenv) - tiny library to manage environment variables with deno.
- [durationjs ![GitHub Repo Stars](https://img.shields.io/github/stars/retraigo/duration.js) ![GitHub last commit](https://img.shields.io/github/last-commit/retraigo/duration.js)](https://github.com/retraigo/duration.js) - Get formatted time duration from a timestamp or a human-readable string.
- [esm-itter ![GitHub Repo Stars](https://img.shields.io/github/stars/tillsanders/esm-itter) ![GitHub last commit](https://img.shields.io/github/last-commit/tillsanders/esm-itter)](https://github.com/tillsanders/esm-itter) – A strongly typed fork of the popular EventEmitter3 with a focus on EcmaScript module syntax, TypeScript and modern tooling.
- [evt ![GitHub Repo Stars](https://img.shields.io/github/stars/garronej/evt) ![GitHub last commit](https://img.shields.io/github/last-commit/garronej/evt)](https://github.com/garronej/evt) - Type safe replacement for EventEmitter.
- [fastest-validator ![GitHub Repo Stars](https://img.shields.io/github/stars/icebob/fastest-validator) ![GitHub last commit](https://img.shields.io/github/last-commit/icebob/fastest-validator)](https://github.com/icebob/fastest-validator) - Schema validator for all javascript platforms
- [fortuna ![GitHub Repo Stars](https://img.shields.io/github/stars/retraigo/fortuna) ![GitHub last commit](https://img.shields.io/github/last-commit/retraigo/fortuna)](https://github.com/retraigo/fortuna) - Weighted gacha system.
- [garn-validator ![GitHub Repo Stars](https://img.shields.io/github/stars/jupegarnica/garn-validator) ![GitHub last commit](https://img.shields.io/github/last-commit/jupegarnica/garn-validator)](https://github.com/jupegarnica/garn-validator) - Create validations with ease.
- [locale-kit](https://deno.land/x/localekit) ([GitHub ![GitHub Repo Stars](https://img.shields.io/github/stars/locale-kit/locale-kit) ![GitHub last commit](https://img.shields.io/github/last-commit/locale-kit/locale-kit)](https://github.com/locale-kit/locale-kit)) - A internationalisation/localisation/translation (i18n/l10n/t9n) library with a wrapper for Fresh and support for plurals and dynamic replacement.
- [optionals ![GitHub Repo Stars](https://img.shields.io/github/stars/OliverBrotchie/optionals) ![GitHub last commit](https://img.shields.io/github/last-commit/OliverBrotchie/optionals)](https://github.com/OliverBrotchie/optionals) - Rust-like error handling and options with exhaustive pattern matching.
- [PLS ![GitHub Repo Stars](https://img.shields.io/github/stars/xorgram/pls) ![GitHub last commit](https://img.shields.io/github/last-commit/xorgram/pls)](https://github.com/xorgram/pls) - Use 2 lines to persist localStorage in any database, including, but not limited to, MongoDB, PostgreSQL and Redis.
- [qrcode ![GitHub Repo Stars](https://img.shields.io/github/stars/denorg/qrcode) ![GitHub last commit](https://img.shields.io/github/last-commit/denorg/qrcode)](https://github.com/denorg/qrcode) - QR code image generator for Deno.
- [rubico ![GitHub Repo Stars](https://img.shields.io/github/stars/a-synchronous/rubico) ![GitHub last commit](https://img.shields.io/github/last-commit/a-synchronous/rubico)](https://github.com/a-synchronous/rubico) - 🏞 [a]synchronous function composition; it just works.
- [solc ![GitHub Repo Stars](https://img.shields.io/github/stars/deno-web3/solc) ![GitHub last commit](https://img.shields.io/github/last-commit/deno-web3/solc)](https://github.com/deno-web3/solc) - 💎 Solidity bindings for Deno.
- [switcher4deno ![GitHub Repo Stars](https://img.shields.io/github/stars/switcherapi/switcher-client-deno) ![GitHub last commit](https://img.shields.io/github/last-commit/switcherapi/switcher-client-deno)](https://github.com/switcherapi/switcher-client-deno) - Feature Flag Deno SDK client for Switcher-API.
- [wu-diff-js ![GitHub Repo Stars](https://img.shields.io/github/stars/bokuweb/wu-diff-js) ![GitHub last commit](https://img.shields.io/github/last-commit/bokuweb/wu-diff-js)](https://github.com/bokuweb/wu-diff-js) - A diff library to compute differences between two slices using wu(the O(NP)) algorithm.

### Validation

- [zod ![GitHub Repo Stars](https://img.shields.io/github/stars/colinhacks/zod) ![GitHub last commit](https://img.shields.io/github/last-commit/colinhacks/zod)](https://github.com/colinhacks/zod) - TypeScript-first schema validation with static type inference.

### Web framework
- [alosaur ![GitHub Repo Stars](https://img.shields.io/github/stars/alosaur/alosaur) ![GitHub last commit](https://img.shields.io/github/last-commit/alosaur/alosaur)](https://github.com/alosaur/alosaur) - Alosaur - Deno web framework with many ES Decorators.
- [aqua ![GitHub Repo Stars](https://img.shields.io/github/stars/predetermined/aqua) ![GitHub last commit](https://img.shields.io/github/last-commit/predetermined/aqua)](https://github.com/predetermined/aqua) - A minimal and fast web framework for Deno.
- [danet ![GitHub Repo Stars](https://img.shields.io/github/stars/Savory/Danet) ![GitHub last commit](https://img.shields.io/github/last-commit/Savory/Danet)](https://github.com/Savory/Danet) - A Savory web framework for Deno heavily inspired by [Nest.js](https://nestjs.com).
- [drash ![GitHub Repo Stars](https://img.shields.io/github/stars/drashland/drash) ![GitHub last commit](https://img.shields.io/github/last-commit/drashland/drash)](https://github.com/drashland/drash) - A REST microframework for Deno's HTTP server with zero dependencies.
- [faster ![GitHub Repo Stars](https://img.shields.io/github/stars/hviana/faster) ![GitHub last commit](https://img.shields.io/github/last-commit/hviana/faster)](https://github.com/hviana/faster) - A fast and optimized middleware server with a set of useful middlwares.
- [faster_react ![GitHub Repo Stars](https://img.shields.io/github/stars/hviana/faster_react) ![GitHub last commit](https://img.shields.io/github/last-commit/hviana/faster_react)](https://github.com/hviana/faster_react) - Full Stack web framework with React + Faster. Fully compatible with Deno Deploy.
- [hono ![GitHub Repo Stars](https://img.shields.io/github/stars/honojs/hono) ![GitHub last commit](https://img.shields.io/github/last-commit/honojs/hono)](https://github.com/honojs/hono) - Ultrafast web framework for Cloudflare Workers, Deno, and Bun. Fast, but not only fast.
- [oak ![GitHub Repo Stars](https://img.shields.io/github/stars/oakserver/oak) ![GitHub last commit](https://img.shields.io/github/last-commit/oakserver/oak)](https://github.com/oakserver/oak) - A middleware framework for Deno's net server.
  - [oak-http-proxy ![GitHub Repo Stars](https://img.shields.io/github/stars/cmorten/oak-http-proxy) ![GitHub last commit](https://img.shields.io/github/last-commit/cmorten/oak-http-proxy)](https://github.com/cmorten/oak-http-proxy) - Proxy middleware for Deno Oak HTTP servers.
  - [oak-routing-ctrl ![GitHub Repo Stars](https://img.shields.io/github/stars/Thesephi/oak-routing-ctrl) ![GitHub last commit](https://img.shields.io/github/last-commit/Thesephi/oak-routing-ctrl)](https://github.com/Thesephi/oak-routing-ctrl) - TypeScript Decorators for easy scaffolding API services with the oak framework.
- [opine ![GitHub Repo Stars](https://img.shields.io/github/stars/cmorten/opine) ![GitHub last commit](https://img.shields.io/github/last-commit/cmorten/opine)](https://github.com/cmorten/opine) - Fast, minimalist web framework ported from ExpressJS.
  - [opine-http-proxy ![GitHub Repo Stars](https://img.shields.io/github/stars/cmorten/opine-http-proxy) ![GitHub last commit](https://img.shields.io/github/last-commit/cmorten/opine-http-proxy)](https://github.com/cmorten/opine-http-proxy) - Proxy middleware for Deno Opine HTTP servers.

### WebSocket
- [dropper ![GitHub Repo Stars](https://img.shields.io/github/stars/denyncrawford/dropper-deno) ![GitHub last commit](https://img.shields.io/github/last-commit/denyncrawford/dropper-deno)](https://github.com/denyncrawford/dropper-deno) - Custom event-based WebSockets framework for building real-time apps on Deno 🦕
- [wocket ![GitHub Repo Stars](https://img.shields.io/github/stars/drashland/wocket) ![GitHub last commit](https://img.shields.io/github/last-commit/drashland/wocket)](https://github.com/drashland/wocket) - A WebSocket library for Deno.

### Web utils
- [djwt ![GitHub Repo Stars](https://img.shields.io/github/stars/Zaubrik/djwt) ![GitHub last commit](https://img.shields.io/github/last-commit/Zaubrik/djwt)](https://github.com/Zaubrik/djwt) - Make JSON Web Tokens (JWT) on Deno based on JWT and JWS specifications.
- [forwarded ![GitHub Repo Stars](https://img.shields.io/github/stars/deno-libs/forwarded) ![GitHub last commit](https://img.shields.io/github/last-commit/deno-libs/forwarded)](https://github.com/deno-libs/forwarded) - Deno port of `forwarded` library.
- [fresh_chart ![GitHub Repo Stars](https://img.shields.io/github/stars/denoland/fresh_charts) ![GitHub last commit](https://img.shields.io/github/last-commit/denoland/fresh_charts)](https://github.com/denoland/fresh_charts) - A server-side-rendered charting library for Fresh.
- [gentleRpc ![GitHub Repo Stars](https://img.shields.io/github/stars/timonson/gentle_rpc) ![GitHub last commit](https://img.shields.io/github/last-commit/timonson/gentle_rpc)](https://github.com/timonson/gentle_rpc) - A JSON-RPC 2.0 TypeScript library for Deno and the browser.
- [gql ![GitHub Repo Stars](https://img.shields.io/github/stars/deno-libs/gql) ![GitHub last commit](https://img.shields.io/github/last-commit/deno-libs/gql)](https://github.com/deno-libs/gql) - Universal GraphQL HTTP middleware.
- [graphql-tag ![GitHub Repo Stars](https://img.shields.io/github/stars/deno-libs/graphql_tag) ![GitHub last commit](https://img.shields.io/github/last-commit/deno-libs/graphql_tag)](https://github.com/deno-libs/graphql_tag) - GraphQL schema AST from template literal.
- [nats ![GitHub Repo Stars](https://img.shields.io/github/stars/nats-io/nats.deno) ![GitHub last commit](https://img.shields.io/github/last-commit/nats-io/nats.deno)](https://github.com/nats-io/nats.deno) - A Deno client for the [NATS messaging system](https://nats.io/).
- [obsidian ![GitHub Repo Stars](https://img.shields.io/github/stars/open-source-labs/obsidian) ![GitHub last commit](https://img.shields.io/github/last-commit/open-source-labs/obsidian)](https://github.com/open-source-labs/obsidian) - A native GraphQL caching client and server module.
- [react-icons](https://react-icons.deno.dev/) - React Icons converted to preact for deno fresh.
- [router ![GitHub Repo Stars](https://img.shields.io/github/stars/zhmushan/router) ![GitHub last commit](https://img.shields.io/github/last-commit/zhmushan/router)](https://github.com/zhmushan/router) - A high-performance basic router works anywhere.
- [rpc ![GitHub Repo Stars](https://img.shields.io/github/stars/deno-libs/rpc) ![GitHub last commit](https://img.shields.io/github/last-commit/deno-libs/rpc)](https://github.com/deno-libs/rpc) - JSONRPC server implementation for Deno.
- [ts-prometheus ![GitHub Repo Stars](https://img.shields.io/github/stars/marcopacini/ts_prometheus) ![GitHub last commit](https://img.shields.io/github/last-commit/marcopacini/ts_prometheus)](https://github.com/marcopacini/ts_prometheus) - A prometheus client.

### Webview
- [webview ![GitHub Repo Stars](https://img.shields.io/github/stars/webview/webview_deno) ![GitHub last commit](https://img.shields.io/github/last-commit/webview/webview_deno)](https://github.com/webview/webview_deno) - Deno bindings for webview, a tiny library for creating web-based desktop GUIs.

### XML
- [sax-ts ![GitHub Repo Stars](https://img.shields.io/github/stars/Maxim-Mazurok/sax-ts) ![GitHub last commit](https://img.shields.io/github/last-commit/Maxim-Mazurok/sax-ts)](https://github.com/Maxim-Mazurok/sax-ts) - SAX-style XML parser ported from [sax-js ![GitHub Repo Stars](https://img.shields.io/github/stars/isaacs/sax-js) ![GitHub last commit](https://img.shields.io/github/last-commit/isaacs/sax-js)](https://github.com/isaacs/sax-js).

## Registries

- [crux.land](https://crux.land/) - A free registry service meant for hosting small ( < 10kB) single deno scripts.
- [Deno PKG](https://denopkg.com/) - An easier way to use code from GitHub in your Deno project.
- [deno.land/x/](https://deno.land/x/) - The official 3rd party module registry.
- [nest.land](https://nest.land) - An immutable, blockchain powered Deno package registry. 🥚

## Showcases

- [Deno Rest ![GitHub Repo Stars](https://img.shields.io/github/stars/Prolifode/deno_rest) ![GitHub last commit](https://img.shields.io/github/last-commit/Prolifode/deno_rest)](https://github.com/Prolifode/deno_rest) - A Boilerplate for deno RESTful apis.
- [Edrys ![GitHub Repo Stars](https://img.shields.io/github/stars/edrys-org/edrys) ![GitHub last commit](https://img.shields.io/github/last-commit/edrys-org/edrys)](https://github.com/edrys-org/edrys) - Remote Teaching Software
- [GitHub Profile Trophy ![GitHub Repo Stars](https://img.shields.io/github/stars/ryo-ma/github-profile-trophy) ![GitHub last commit](https://img.shields.io/github/last-commit/ryo-ma/github-profile-trophy)](https://github.com/ryo-ma/github-profile-trophy) - 🏆 Add dynamically generated GitHub Trophy on your readme
- [ShopSavvy Deno Deploy ![GitHub Repo Stars](https://img.shields.io/github/stars/shopsavvy/deno-deploy-shopsavvy) ![GitHub last commit](https://img.shields.io/github/last-commit/shopsavvy/deno-deploy-shopsavvy)](https://github.com/shopsavvy/deno-deploy-shopsavvy) - Deno Deploy router with Hono for product search, real-time pricing, and price history.
- [The Official Showcase](https://deno.land/showcase) - The official showcase of Deno.
- [UsingDeno](https://usingdeno.com) - Curated list of Web Applications & Projects using Deno 🦕.

## Tools

- [clone ![GitHub Repo Stars](https://img.shields.io/github/stars/ekaragodin/clone) ![GitHub last commit](https://img.shields.io/github/last-commit/ekaragodin/clone)](https://github.com/ekaragodin/clone) - A simple utility for the convenient clone.
- [denoflow ![GitHub Repo Stars](https://img.shields.io/github/stars/denoflow/denoflow) ![GitHub last commit](https://img.shields.io/github/last-commit/denoflow/denoflow)](https://github.com/denoflow/denoflow) - Configuration as code, use YAML to write automated workflows that run on Deno, with any Deno modules, Typescript/Javascript codes
- [denoify ![GitHub Repo Stars](https://img.shields.io/github/stars/garronej/denoify) ![GitHub last commit](https://img.shields.io/github/last-commit/garronej/denoify)](https://github.com/garronej/denoify) - For NPM module authors that would like to support Deno but do not want to write and maintain a port.
- [denoliver ![GitHub Repo Stars](https://img.shields.io/github/stars/joakimunge/denoliver) ![GitHub last commit](https://img.shields.io/github/last-commit/joakimunge/denoliver)](https://github.com/joakimunge/denoliver) - A simple, dependency free file server with live reload.
- [denomander ![GitHub Repo Stars](https://img.shields.io/github/stars/siokas/denomander) ![GitHub last commit](https://img.shields.io/github/last-commit/siokas/denomander)](https://github.com/siokas/denomander) - Deno command-line interfaces inspired from commander.js.
- [denon ![GitHub Repo Stars](https://img.shields.io/github/stars/denosaurs/denon) ![GitHub last commit](https://img.shields.io/github/last-commit/denosaurs/denon)](https://github.com/denosaurs/denon) - A daemon script runner, like nodemon. Built in and for Deno.
- [denopendabot ![GitHub Repo Stars](https://img.shields.io/github/stars/apps/denopendabot) ![GitHub last commit](https://img.shields.io/github/last-commit/apps/denopendabot)](https://github.com/apps/denopendabot) - Dependabot for Deno projects.
- [denopkg ![GitHub Repo Stars](https://img.shields.io/github/stars/egoist-labs/denopkg.com) ![GitHub last commit](https://img.shields.io/github/last-commit/egoist-labs/denopkg.com)](https://github.com/egoist-labs/denopkg.com) - An easier way to use code from GitHub in your Deno project.
- [Deno Dig ![GitHub Repo Stars](https://img.shields.io/github/stars/theGEBIRGE/DenoDig) ![GitHub last commit](https://img.shields.io/github/last-commit/theGEBIRGE/DenoDig)](https://github.com/theGEBIRGE/DenoDig) - A tool for extracting application code and npm packages from stand-alone Deno executables.
- [deno_docker ![GitHub Repo Stars](https://img.shields.io/github/stars/denoland/deno_docker) ![GitHub last commit](https://img.shields.io/github/last-commit/denoland/deno_docker)](https://github.com/denoland/deno_docker) - Latest dockerfiles and images for Deno - alpine, centos, debian, ubuntu.
- [dmm ![GitHub Repo Stars](https://img.shields.io/github/stars/drashland/dmm) ![GitHub last commit](https://img.shields.io/github/last-commit/drashland/dmm)](https://github.com/drashland/dmm) - Lightweight Deno Module Manager
- [dnt ![GitHub Repo Stars](https://img.shields.io/github/stars/denoland/dnt) ![GitHub last commit](https://img.shields.io/github/last-commit/denoland/dnt)](https://github.com/denoland/dnt) - Deno to npm package build tool.
- [dpm ![GitHub Repo Stars](https://img.shields.io/github/stars/dpmland/dpm) ![GitHub last commit](https://img.shields.io/github/last-commit/dpmland/dpm)](https://github.com/dpmland/dpm) - Deno Package Manager, a NPM | Yarn Experience for Deno
- dvm
  - [asdf-community/asdf-deno ![GitHub Repo Stars](https://img.shields.io/github/stars/asdf-community/asdf-deno) ![GitHub last commit](https://img.shields.io/github/last-commit/asdf-community/asdf-deno)](https://github.com/asdf-community/asdf-deno) - Deno plugin for [asdf](https://asdf-vm.com/)
  - [justjavac/dvm ![GitHub Repo Stars](https://img.shields.io/github/stars/justjavac/dvm) ![GitHub last commit](https://img.shields.io/github/last-commit/justjavac/dvm)](https://github.com/justjavac/dvm) - Deno Version Manager: manage multiple active Deno versions.
  - [axetroy/dvm ![GitHub Repo Stars](https://img.shields.io/github/stars/axetroy/dvm) ![GitHub last commit](https://img.shields.io/github/last-commit/axetroy/dvm)](https://github.com/axetroy/dvm) - Version manger for Deno without runtime dependencies.
  - [ghosind/dvm ![GitHub Repo Stars](https://img.shields.io/github/stars/ghosind/dvm) ![GitHub last commit](https://img.shields.io/github/last-commit/ghosind/dvm)](https://github.com/ghosind/dvm) - A lightweight Deno Version Manager for Linux/MacOS.
- [entype ![GitHub Repo Stars](https://img.shields.io/github/stars/bcheidemann/entype) ![GitHub last commit](https://img.shields.io/github/last-commit/bcheidemann/entype)](https://github.com/bcheidemann/entype) - A CLI tool used to generate type definitions for serialised data, currently supporting JSON to Rust and TypeScript.
- [kopo-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/littletof/kopo-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/littletof/kopo-cli)](https://github.com/littletof/kopo-cli) - A Deno registry browser in the terminal.
- [make-deno-edition ![GitHub Repo Stars](https://img.shields.io/github/stars/bevry/make-deno-edition) ![GitHub last commit](https://img.shields.io/github/last-commit/bevry/make-deno-edition)](https://github.com/bevry/make-deno-edition) - Automatically makes package.json projects (such as npm packages and node.js modules) compatible with Deno.
- [pup ![GitHub Repo Stars](https://img.shields.io/github/stars/Hexagon/pup) ![GitHub last commit](https://img.shields.io/github/last-commit/Hexagon/pup)](https://github.com/Hexagon/pup) - Advanced process manager for Deno. With autorestart, fs watch, cron start, process telemetry, ipc, clustering, load balancer and more.
- [studio-pack-generator ![GitHub Repo Stars](https://img.shields.io/github/stars/jersou/studio-pack-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/jersou/studio-pack-generator)](https://github.com/jersou/studio-pack-generator) - Convert a folder or a RSS URL to Studio pack for Lunii device
- [trex ![GitHub Repo Stars](https://img.shields.io/github/stars/crewdevio/Trex) ![GitHub last commit](https://img.shields.io/github/last-commit/crewdevio/Trex)](https://github.com/crewdevio/Trex) - Package management like npm for deno.
- [udd ![GitHub Repo Stars](https://img.shields.io/github/stars/hayd/deno-udd) ![GitHub last commit](https://img.shields.io/github/last-commit/hayd/deno-udd)](https://github.com/hayd/deno-udd) - Update Deno dependencies: updates import statements to their latest published version.
- [vscode-deno ![GitHub Repo Stars](https://img.shields.io/github/stars/denoland/vscode_deno) ![GitHub last commit](https://img.shields.io/github/last-commit/denoland/vscode_deno)](https://github.com/denoland/vscode_deno) - VS Code extension that provides Deno support using the `TypeScript Deno language service plugin`.

## Integrations

- [Netlify Edge Functions](https://docs.netlify.com/edge-functions/overview/) - Edge Functions connect the Netlify platform and workflow.
- [Slack Custom Functions](https://api.slack.com/future/functions/custom) - Build custom Run On Slack functions using Deno.
- [Smallweb](https://www.smallweb.run/) - A personal cloud contained in a single directory. You can customize the server behavior using Deno.
- [Supabase Edge Functions](https://supabase.com/docs/guides/functions) - Edge Functions are server-side TypeScript functions, distributed globally at the edge.
- [Astro](https://docs.astro.build/en/guides/deploy/deno/) - Deploy a server-side rendered Astro site to Deno Deploy.

## Blogs/Newsletters
- [Craig's Deno Diary](https://deno-blog.com) - A blog focussing on Deno tech & lib howtos.
- [Deno Blog](https://deno.com/blog) - The official blog of the Deno Company.
- [Deno News](https://deno.news) - A newsletter of Deno articles, news and cool projects.

## Articles

- [Develop with Deno and Visual Studio Code](https://medium.com/@kitsonk/develop-with-deno-and-visual-studio-code-225ce7c5b1ba)
- [First thoughts on Deno, the JavaScript/TypeScript run-time](https://43081j.com/2019/01/first-look-at-deno)
- [Getting started with Deno](https://dev.to/wuz/getting-started-with-deno-e1m)
- [What's Deno, and how is it different from Node.js?](https://dev.to/bnevilleoneill/what-s-deno-and-how-is-it-different-from-node-js-366g)
- [Write a small API using Deno](https://dev.to/kryz/write-a-small-api-using-deno-1cl0)
- [Deno on Cloud Run](https://medium.com/google-cloud/deno-on-cloud-run-89ae64d1664d)
- [Learn Deno: Chat app](https://aralroca.com/blog/learn-deno-chat-app)
- [From Node to Deno](https://dev.to/aralroca/from-node-to-deno-5gpn)
- [Create a simple Note-taking app with Deno](https://dev.to/jeferson_sb/create-a-simple-note-taking-app-with-deno-3k7g)
- [Building API's using Deno, Oak and MYSQL](https://codeforgeek.com/building-api-server-using-deno-and-mysql/)
- [Create your first News CLI app using Deno](https://medium.com/javascript-in-plain-english/creating-your-first-news-cli-app-using-deno-e1470398c627)
- [Continuous Integration with Deno](https://semaphoreci.com/blog/continuous-integration-with-deno)
- [The Hidden Superpower of Deno: xeval](https://stefanbuck.com/blog/hidden-superpower-deno-xeval)
- Deno REST API with Oak Tutorial Series [0](https://www.robinwieruch.de/deno-tutorial), [1](https://www.robinwieruch.de/deno-oak), [2](https://www.robinwieruch.de/deno-oak-rest-api)
- [Getting Started with Deno](https://sabe.io/tutorials/getting-started-with-deno)
- [How to deploy a Deno app using Docker](https://sabe.io/tutorials/how-to-deploy-deno-app-docker)

## Presentations

- [10 Things I Regret About Node.js - Ryan Dahl - JSConf EU 2018](https://www.youtube.com/watch?v=M3BM9TB-8yA)
  - [Slides](https://tinyclouds.org/jsconf2018.pdf)
- [JSDC 2018#A01 - Deno, A New Server-Side Runtime By Ryan Dahl](https://www.youtube.com/watch?v=FlTG0UXRAkE)
- [Ryan Dahl. Deno, a new way to JavaScript. JS Fest 2019 Spring](https://www.youtube.com/watch?v=z6JRlx5NC9E)
  - [Slides](https://www.slideshare.net/JSFestUA/js-fest-2019-ryan-dahl-deno-a-new-way-to-javascript)
- [Rafał Pocztarski — From Node.js to Deno - JavaScript/TypeScript runtime built with V8 and Rust [EN]](https://www.youtube.com/watch?v=Aib1OZLy0_c)
- [Ryan Dahl: A secure runtime for JavaScript and TypeScript | js.la April 2019](https://www.youtube.com/watch?v=RAmqgbv247s)
  - [Slides](https://docs.google.com/presentation/d/1CSQVTeH5tFzE4AZVXIpx9Xwew5YS-gxJZ03eRFtNeIc/edit)
- [Ryan Dahl: Deno, a new way to JavaScript - HolyJS 2019 Piter](https://www.youtube.com/watch?v=HjdJzNoT_qg)
  - [Slides](https://docs.google.com/presentation/d/1BjvZx5S8noVfFINptH4jfKfqh9jB9nXlFC0I3oIDtg4/edit)
- [Rafał Pocztarski - What is Deno? A new runtime for modern JavaScript and TypeScript backends for 2020s - Deno Warsaw](https://www.youtube.com/watch?v=aI5A9zvYSjk)
- [Michał Sabiniarz - How to contribute to Deno? - Deno Warsaw](https://www.youtube.com/watch?v=LAtjnKLbPpw)
- [Bartek Iwańczuk - Deno internals, how modern runtime is built - Deno Warsaw](https://www.youtube.com/watch?v=qt7fbmypAFk)
  - [Slides](https://docs.google.com/presentation/d/1LYNGpyjx9PemL-P__7hVC8mSqkX-jL8VQLMhCRehy00/edit?usp=sharing)
- [Ryan Dahl & Kitson Kelly: Deno is a New Way to JavaScript - TSConf 2019](https://www.youtube.com/watch?v=1gIiZfSbEAE)
- [Bert Belder - Deno - dotJS 2019](https://www.youtube.com/watch?v=puXyo1jGQys)
- [Kitson P. Kelly - Deno, and The Future of JavaScript Runtimes - CityJS Conf 2020](https://www.youtube.com/watch?v=2eRyZpX4qvI)
- [Matías Insaurralde - Deno: an experimental approach on V8 interoperability [EN subtitles] - NodeConf Argentina 2019](https://www.youtube.com/watch?v=N0BRE-0n2cU)
  - [Slides](https://speakerdeck.com/matiasinsaurralde/deno-an-experimental-approach-on-v8-interoperability)

## Resources

### Books
- [Modern Web Development with Deno](https://bpbonline.com/products/modern-web-development-with-deno)

## Resources in Other Languages

### Chinese

- [Deno 并不是下一代 Node.js](https://juejin.im/post/5b14a390e51d4506c1300bbc)
- [玩 Deno 遇到问题的解决方案](https://juejin.im/post/5b1245b3f265da6e4c6cf249)
- [让我们一起来学习别人学不动的 Deno](https://segmentfault.com/a/1190000015151287)
- [Design Mistakes in Node zh-CN](https://zhuanlan.zhihu.com/p/37637923)
- [Node之父ry：Node中的设计错误](https://mp.weixin.qq.com/s/7XAiYw18c8YZc-fXk0-wrw)
- [Node之父 - Deno，一个新的JS运行时](https://www.bilibili.com/video/av52038617)

### Hebrew

- [Deno intro in Hebrew (slides in English)](https://www.youtube.com/watch?v=9tJ_LkI6_qw)

### Indonesian

- [Berkenalan dengan Deno](https://medium.com/@redhajuanda/berkenalan-dengan-dengan-deno-c48cdf3aa31e)
- [Perkenalan Deno dan Instalasi](https://youtu.be/V_kpUTJSd9c)
- [Deno Land Indonesia Telegram group](https://t.me/deno_id)

### Italian

- [Deno - L'anagramma di Node](https://www.slideshare.net/FrancescoSciuti/deno-lanagramma-di-node)

### Japanese

- [deno-ja](https://deno-ja.deno.dev/) - Deno Japanese User Group.
- [Node.js における設計ミス By Ryan Dahl](https://yosuke-furukawa.hatenablog.com/entry/2018/06/07/080335)
- [mizchi/deno_code_reading.md](https://gist.github.com/mizchi/31e5628751330b624a0e8ada9e739b1e)
- [Design Mistakes in Node & Deno #kng5 / deno](https://speakerdeck.com/masashi/deno)
- [Dive into Deno：プロセス起動からTypeScriptが実行されるまで](https://blog.leko.jp/post/code-reading-of-deno-boot-process/)

### Korean

- [Deno Korea](https://deno.kr/) - Deno Korean User Group.

### Russian

- [Telegram channel](https://t.me/denoland_ru)
- [Telegram chat](https://t.me/denoland)

### Spanish

- [Hola Deno! . 🦕](https://medium.com/javascript-espa%C3%B1ol/hola-deno-f31f9f6f2c84)
- [Así puedes crear tu primera API REST con Deno](https://medium.com/@mpampols/as%C3%AD-puedes-crear-tu-primera-api-rest-con-deno-a9094ee5c0b2)
- [Primeros pasos con Deno 🦕 El sucesor de NodeJS desarrollado con Rust y TypeScript](https://medium.com/@manurua/primeros-pasos-con-deno-el-nuevo-nodejs-desarrollado-con-rust-y-typescript-b9ac14f7d0c7)
- [Primer vistazo con deno](https://dev.to/buttercubz/first-look-with-deno-spanish-30dh)

### Darija

- [A first look at Deno | BlaBlaConf 2021 🇲🇦](https://www.youtube.com/watch?v=Y_etUvzAa4s)

### Kurdish (Central)

- [A short introduction to Deno](https://devs.krd/about-deno)
