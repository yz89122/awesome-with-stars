# Awesome PocketBase [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Curated list of awesome [PocketBase](https://pocketbase.io) resources.

PocketBase is an open source backend consisting of embedded database (SQLite) with realtime subscriptions, built-in auth management, convenient dashboard UI and simple REST-ish API.

## Contents

- [Official Packages](#official-packages)
- [React](#react)
- [Svelte](#svelte)
- [Vue](#vue)
- [Dart/Flutter](#dartflutter)
- [C#](#c)
- [D](#d)
- [Node.js](#nodejs)
- [Unofficial PocketBase Clients (SDKs)](#unofficial-pocketbase-clients-sdks)
- [Hosting](#hosting)
- [Native Go Plugins](#native-go-plugins)
- [TypeScript tools](#typescript-tools)
- [SQLite tools](#sqlite-tools)
- [Other tools](#other-tools)
- [Showcases](#showcases)

## Official Packages

- [Golang Server ![GitHub Repo Stars](https://img.shields.io/github/stars/pocketbase/pocketbase) ![GitHub last commit](https://img.shields.io/github/last-commit/pocketbase/pocketbase)](https://github.com/pocketbase/pocketbase/releases/) - The main PocketBase server.
- [JavaScript SDK ![GitHub Repo Stars](https://img.shields.io/github/stars/pocketbase/js-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/pocketbase/js-sdk)](https://github.com/pocketbase/js-sdk) - Browser and Node.js for interacting with the PocketBase API.
- [Dart SDK ![GitHub Repo Stars](https://img.shields.io/github/stars/pocketbase/dart-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/pocketbase/dart-sdk)](https://github.com/pocketbase/dart-sdk) - Multi-platform SDK for interacting with the PocketBase Web API.

## React

- [PocketBase React ![GitHub Repo Stars](https://img.shields.io/github/stars/tobicrain/pocketbase-react) ![GitHub last commit](https://img.shields.io/github/last-commit/tobicrain/pocketbase-react)](https://github.com/tobicrain/pocketbase-react) - Unofficial React SDK (React, React Native, Expo) for interacting with the PocketBase JavaScript SDK.
- [PocketBase Next.js App Template ![GitHub Repo Stars](https://img.shields.io/github/stars/tsensei/nextjs-pocketbase-starter-template) ![GitHub last commit](https://img.shields.io/github/last-commit/tsensei/nextjs-pocketbase-starter-template)](https://github.com/tsensei/nextjs-pocketbase-starter-template) - PocketBase Next.js Template with server & browser client using cookies.

## Svelte

- [svelte-query-pocketbase ![GitHub Repo Stars](https://img.shields.io/github/stars/goknsh/svelte-query-pocketbase) ![GitHub last commit](https://img.shields.io/github/last-commit/goknsh/svelte-query-pocketbase)](https://github.com/goknsh/svelte-query-pocketbase) - TanStack Query wrappers around PocketBase for Svelte and SvelteKit that updates the query cache in realtime.
- [SvelteKit Starter ![GitHub Repo Stars](https://img.shields.io/github/stars/spinspire/pocketbase-sveltekit-starter) ![GitHub last commit](https://img.shields.io/github/last-commit/spinspire/pocketbase-sveltekit-starter)](https://github.com/spinspire/pocketbase-sveltekit-starter) - A starter-kit showing how to use customized PocketBase as a backend to SvelteKit frontend.
- [SvelteKit Auth ![GitHub Repo Stars](https://img.shields.io/github/stars/danawoodman/sveltekit-auth-example) ![GitHub last commit](https://img.shields.io/github/last-commit/danawoodman/sveltekit-auth-example)](https://github.com/danawoodman/sveltekit-auth-example) - This project is designed as a sample implementation reference for getting authentication setup using SvelteKit.
- [SvelteKit PocketBase Auth ![GitHub Repo Stars](https://img.shields.io/github/stars/jianyuan/pocketbase-sveltekit-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/jianyuan/pocketbase-sveltekit-auth)](https://github.com/jianyuan/pocketbase-sveltekit-auth) - This project demonstrates how to integrate PocketBase with SvelteKit. The project includes login and registration pages, as well as examples of how to retrieve the current user. You can watch a video of the creation of this project on YouTube at [this link](https://youtu.be/AxPB3e-3yEM).
- [pocketbase-sveltekit-static ![GitHub Repo Stars](https://img.shields.io/github/stars/Egor-S/pocketbase-sveltekit-static) ![GitHub last commit](https://img.shields.io/github/last-commit/Egor-S/pocketbase-sveltekit-static)](https://github.com/Egor-S/pocketbase-sveltekit-static) - A minimalist template with configured authorization featuring a single Docker image (from 55 MB) for deploying.

## Vue

- [Vue 3 + Vite starter kit ![GitHub Repo Stars](https://img.shields.io/github/stars/StefanVDWeide/pocketbase-vue) ![GitHub last commit](https://img.shields.io/github/last-commit/StefanVDWeide/pocketbase-vue)](https://github.com/StefanVDWeide/pocketbase-vue) - A starter kit for Vue 3 + Vite + PocketBase.
  - [Tutorial](https://studioterabyte.nl/en/blog/pocketbase-vue-3)
- [Quasar starter kit ![GitHub Repo Stars](https://img.shields.io/github/stars/aaronblondeau/pocketbase_quasar_starter) ![GitHub last commit](https://img.shields.io/github/last-commit/aaronblondeau/pocketbase_quasar_starter)](https://github.com/aaronblondeau/pocketbase_quasar_starter)
- [PocketNuxt ![GitHub Repo Stars](https://img.shields.io/github/stars/j-wil/pocket-nuxt) ![GitHub last commit](https://img.shields.io/github/last-commit/j-wil/pocket-nuxt)](https://github.com/j-wil/pocket-nuxt) - A Nuxt3 PocketBase starter that builds into a single binary.

## Dart/Flutter

- [PocketBase Drift ![GitHub Repo Stars](https://img.shields.io/github/stars/rodydavis/pocketbase_drift) ![GitHub last commit](https://img.shields.io/github/last-commit/rodydavis/pocketbase_drift)](https://github.com/rodydavis/pocketbase_drift) - A PocketBase client cached with Drift.
- [Dart Generator ![GitHub Repo Stars](https://img.shields.io/github/stars/rodydavis/pocketbase_dart_generator) ![GitHub last commit](https://img.shields.io/github/last-commit/rodydavis/pocketbase_dart_generator)](https://github.com/rodydavis/pocketbase_dart_generator) - Generate type safe client SDKs for use in local SQLite, JSON or GraphQL resolvers.
- [PocketBase Server Flutter ![GitHub Repo Stars](https://img.shields.io/github/stars/rohitsangwan01/pocketbase_server_flutter) ![GitHub last commit](https://img.shields.io/github/last-commit/rohitsangwan01/pocketbase_server_flutter)](https://github.com/rohitsangwan01/pocketbase_server_flutter) - A Flutter plugin to run PocketBase server directly from Android/iOS.

## C#

- [ORM and code generator ![GitHub Repo Stars](https://img.shields.io/github/stars/iluvadev/PocketBaseClient-csharp) ![GitHub last commit](https://img.shields.io/github/last-commit/iluvadev/PocketBaseClient-csharp)](https://github.com/iluvadev/PocketBaseClient-csharp) - An ORM to manage your PocketBase Application.

## D

- [libpb ![GitHub Repo Stars](https://img.shields.io/github/stars/Hax-io/libpb) ![GitHub last commit](https://img.shields.io/github/last-commit/Hax-io/libpb)](https://github.com/Hax-io/libpb) - PocketBase client wrapper for D with automatic serialization and deserialization to and from JSON.

## Node.js

- [gobot ![GitHub Repo Stars](https://img.shields.io/github/stars/benallfree/gobot) ![GitHub last commit](https://img.shields.io/github/last-commit/benallfree/gobot)](https://github.com/benallfree/gobot) - PocketBase as an npm package. CLI and API.

## Unofficial PocketBase Clients (SDKs)

- [Go ![GitHub Repo Stars](https://img.shields.io/github/stars/pluja/pocketbase) ![GitHub last commit](https://img.shields.io/github/last-commit/pluja/pocketbase)](https://github.com/pluja/pocketbase)
- [Kotlin ![GitHub Repo Stars](https://img.shields.io/github/stars/agrevster/pocketbase-kotlin) ![GitHub last commit](https://img.shields.io/github/last-commit/agrevster/pocketbase-kotlin)](https://github.com/agrevster/pocketbase-kotlin)
- [Python (Sync) ![GitHub Repo Stars](https://img.shields.io/github/stars/vaphes/pocketbase) ![GitHub last commit](https://img.shields.io/github/last-commit/vaphes/pocketbase)](https://github.com/vaphes/pocketbase)
- [Python (Async) ![GitHub Repo Stars](https://img.shields.io/github/stars/thijsmie/pocketbase) ![GitHub last commit](https://img.shields.io/github/last-commit/thijsmie/pocketbase)](https://github.com/thijsmie/pocketbase)
- [C# ![GitHub Repo Stars](https://img.shields.io/github/stars/PRCV1/pocketbase-csharp-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/PRCV1/pocketbase-csharp-sdk)](https://github.com/PRCV1/pocketbase-csharp-sdk)
- [Rust ![GitHub Repo Stars](https://img.shields.io/github/stars/sreedevk/pocketbase-sdk-rust) ![GitHub last commit](https://img.shields.io/github/last-commit/sreedevk/pocketbase-sdk-rust)](https://github.com/sreedevk/pocketbase-sdk-rust)
- [PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/mkay-development/pocketbase-php-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/mkay-development/pocketbase-php-sdk)](https://github.com/mkay-development/pocketbase-php-sdk)

## Hosting

- [pockethost.io](https://pockethost.io) - Hosted and managed PocketBase with email and SSL support. Up and running in 30 seconds. Supports JavaScript and TypeScript serverless cloud functions.
- [PocketBase Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/muchobien/pocketbase-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/muchobien/pocketbase-docker)](https://github.com/muchobien/pocketbase-docker) - Docker setup supporting multiple architectures and automatically updated with PocketBase releases.
- [DigitalOcean ![GitHub Repo Stars](https://img.shields.io/github/stars/pocketbase/pocketbase) ![GitHub last commit](https://img.shields.io/github/last-commit/pocketbase/pocketbase)](https://github.com/pocketbase/pocketbase/discussions/512) - Guide to deploy in a Droplet.
- [Fly.io ![GitHub Repo Stars](https://img.shields.io/github/stars/pocketbase/pocketbase) ![GitHub last commit](https://img.shields.io/github/last-commit/pocketbase/pocketbase)](https://github.com/pocketbase/pocketbase/discussions/537) - Guide to deploy for free in Fly.io.
- [LocalXpose](https://localxpose.io/docs/tutorials/expose-pocketbase-backend) - Allow public access to a localhost instance.
- [PocketBase Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/kdpuvvadi/pocketbase) ![GitHub last commit](https://img.shields.io/github/last-commit/kdpuvvadi/pocketbase)](https://github.com/kdpuvvadi/pocketbase) - Docker images supporting multiple architectures and updated with latest PocketBase releases.
- [PocketBase on Dokku ![GitHub Repo Stars](https://img.shields.io/github/stars/blockshiftnetwork/dokku-pocketbase) ![GitHub last commit](https://img.shields.io/github/last-commit/blockshiftnetwork/dokku-pocketbase)](https://github.com/blockshiftnetwork/dokku-pocketbase) - Deploy PocketBase instances on Dokku effortlessly. 

## Native Go Plugins

- [Telegram auth ![GitHub Repo Stars](https://img.shields.io/github/stars/iamelevich/pocketbase-plugin-telegram-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/iamelevich/pocketbase-plugin-telegram-auth)](https://github.com/iamelevich/pocketbase-plugin-telegram-auth) - Add Telegram auth (Widget button and WebApp).
- [Ngrok ![GitHub Repo Stars](https://img.shields.io/github/stars/iamelevich/pocketbase-plugin-ngrok) ![GitHub last commit](https://img.shields.io/github/last-commit/iamelevich/pocketbase-plugin-ngrok)](https://github.com/iamelevich/pocketbase-plugin-ngrok) - Expose local PocketBase to the internet with ngrok.
- [Proxy ![GitHub Repo Stars](https://img.shields.io/github/stars/iamelevich/pocketbase-plugin-proxy) ![GitHub last commit](https://img.shields.io/github/last-commit/iamelevich/pocketbase-plugin-proxy)](https://github.com/iamelevich/pocketbase-plugin-proxy) - Proxy requests to another other host. Can be useful when you want to use separate server as frontend (like Next.js), but serve everything with same port.
- [Webhooks](https://gist.github.com/cugu/9e74f75dcad3df74370c71ff3c02085a) - Add webhook support in the admin UI to send `create`, `update` and `delete` events on selected collections via POST request to other systems.

## TypeScript tools

- [pb_hooks starter kit ![GitHub Repo Stars](https://img.shields.io/github/stars/benallfree/ts-pb-hooks-starter) ![GitHub last commit](https://img.shields.io/github/last-commit/benallfree/ts-pb-hooks-starter)](https://github.com/benallfree/ts-pb-hooks-starter) - Build PocketBase JavaScript hooks using TypeScript.
- [PocketBase Typegen ![GitHub Repo Stars](https://img.shields.io/github/stars/patmood/pocketbase-typegen) ![GitHub last commit](https://img.shields.io/github/last-commit/patmood/pocketbase-typegen)](https://github.com/patmood/pocketbase-typegen) - Generate TypeScript types from the SQLite db file.
- [typed-pocketbase ![GitHub Repo Stars](https://img.shields.io/github/stars/david-plugge/typed-pocketbase) ![GitHub last commit](https://img.shields.io/github/last-commit/david-plugge/typed-pocketbase)](https://github.com/david-plugge/typed-pocketbase) - Generate types from your PocketBase instance and enjoy fully type-safe queries.

## SQLite tools

- [Marmot ![GitHub Repo Stars](https://img.shields.io/github/stars/maxpert/marmot) ![GitHub last commit](https://img.shields.io/github/last-commit/maxpert/marmot)](https://github.com/maxpert/marmot) - A distributed SQLite replicator [with PocketBase tutorial](https://www.youtube.com/watch?v=Zapupe_FREc).
- [Litestream](https://litestream.io/) - Streaming SQLite replication.
- [PocketBase+Litestream example ![GitHub Repo Stars](https://img.shields.io/github/stars/TylerSustare/pocketbase-framework-litestream) ![GitHub last commit](https://img.shields.io/github/last-commit/TylerSustare/pocketbase-framework-litestream)](https://github.com/TylerSustare/pocketbase-framework-litestream) - Template showing Litestream running with PocketBase.
- [PocketBase with Litestream ![GitHub Repo Stars](https://img.shields.io/github/stars/bscott/pocketbase-litestream) ![GitHub last commit](https://img.shields.io/github/last-commit/bscott/pocketbase-litestream)](https://github.com/bscott/pocketbase-litestream/) - Docker example of PocketBase saving/restoring from Litestream.

## Other tools

- [PocketBaseUML](https://pocketbase-uml.github.io/) - A free, open-source web application that generates UML diagrams based on PocketBase databases.
- [PocketBaseMobile ![GitHub Repo Stars](https://img.shields.io/github/stars/rohitsangwan01/pocketbase_mobile) ![GitHub last commit](https://img.shields.io/github/last-commit/rohitsangwan01/pocketbase_mobile)](https://github.com/rohitsangwan01/pocketbase_mobile) - Android and iOS frameworks for running PocketBase from mobile.
- [PocketBase+Stripe ![GitHub Repo Stars](https://img.shields.io/github/stars/mrwyndham/pocketbase-stripe) ![GitHub last commit](https://img.shields.io/github/last-commit/mrwyndham/pocketbase-stripe)](https://github.com/mrwyndham/pocketbase-stripe) - Go extended PocketBase for Stripe subscription integration.
- [pbf ![GitHub Repo Stars](https://img.shields.io/github/stars/nedpals/pbf) ![GitHub last commit](https://img.shields.io/github/last-commit/nedpals/pbf)](https://github.com/nedpals/pbf) - Library for serializing and deserializing PocketBase filter syntax.
- [PocketBase Templates ![GitHub Repo Stars](https://img.shields.io/github/stars/Pocket-Space/pocketbase-templates) ![GitHub last commit](https://img.shields.io/github/last-commit/Pocket-Space/pocketbase-templates)](https://github.com/Pocket-Space/pocketbase-templates) - A open-source collection of PocketBase schemas to quickly get started.
- [pocketbase-queue ![GitHub Repo Stars](https://img.shields.io/github/stars/joseferben/pocketbase-queue) ![GitHub last commit](https://img.shields.io/github/last-commit/joseferben/pocketbase-queue)](https://github.com/joseferben/pocketbase-queue) - A type-safe queue for background tasks using PocketBase.
- [PocketBase GPT](https://chat.openai.com/g/g-Owo2FBp4K-pocketbase-gpt) - A GPT that has all of PocketBase's documentation uploaded to it, to give more accurate and up-to-date answers.

## Showcases

- [Vimsnake ![GitHub Repo Stars](https://img.shields.io/github/stars/patmood/vim_snake) ![GitHub last commit](https://img.shields.io/github/last-commit/patmood/vim_snake)](https://github.com/patmood/vim_snake) - A realtime WASM game where Vim commands are used as controller inputs.
- [ToDo ![GitHub Repo Stars](https://img.shields.io/github/stars/rajesh6161/pocketbaseTodo) ![GitHub last commit](https://img.shields.io/github/last-commit/rajesh6161/pocketbaseTodo)](https://github.com/rajesh6161/pocketbaseTodo) - React-based To-Do demo app.
- [Realtime Blog ![GitHub Repo Stars](https://img.shields.io/github/stars/rajesh6161/pbRealtimeBlog) ![GitHub last commit](https://img.shields.io/github/last-commit/rajesh6161/pbRealtimeBlog)](https://github.com/rajesh6161/pbRealtimeBlog) - A React-based realtime blog demo.
- [oAuth ![GitHub Repo Stars](https://img.shields.io/github/stars/rajesh6161/pocketbase-oauth-demo) ![GitHub last commit](https://img.shields.io/github/last-commit/rajesh6161/pocketbase-oauth-demo)](https://github.com/rajesh6161/pocketbase-oauth-demo) - A React-based oAuth demo.
- [Flutter Chat App ![GitHub Repo Stars](https://img.shields.io/github/stars/rohitsangwan01/flutter_pocketbase_chat) ![GitHub last commit](https://img.shields.io/github/last-commit/rohitsangwan01/flutter_pocketbase_chat)](https://github.com/rohitsangwan01/flutter_pocketbase_chat) - A chat app using PocketBase in Flutter.
- [JustJot](https://justjot.app) - A keyboard-first note-taking full-featured Progressive Web App. [frontend repo ![GitHub Repo Stars](https://img.shields.io/github/stars/JunoNgx/justjot-frontend) ![GitHub last commit](https://img.shields.io/github/last-commit/JunoNgx/justjot-frontend)](https://github.com/JunoNgx/justjot-frontend) / [backend repo ![GitHub Repo Stars](https://img.shields.io/github/stars/JunoNgx/justjot-backend) ![GitHub last commit](https://img.shields.io/github/last-commit/JunoNgx/justjot-backend)](https://github.com/JunoNgx/justjot-backend)
- [Cookie auth demo ![GitHub Repo Stars](https://img.shields.io/github/stars/davidbarton/pocketbase-cookie-auth-demo) ![GitHub last commit](https://img.shields.io/github/last-commit/davidbarton/pocketbase-cookie-auth-demo)](https://github.com/davidbarton/pocketbase-cookie-auth-demo) - A demo of cookie based authentication flow for PocketBase.
