# awesome-graphql [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) ![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/chentsulin/awesome-graphql/awesome_bot.yml?logo=githubactions&label=Awesome%20Bot)

> Awesome list of GraphQL

If you want to contribute to this list (please do), send me a pull request.

## Table of Contents

<!-- MarkdownTOC depth=4 -->

- [awesome-graphql  ](#awesome-graphql--)
  - [Table of Contents](#table-of-contents)
  - [Specifications](#specifications)
  - [Foundations](#foundations)
  - [Communities](#communities)
  - [Meetups](#meetups)
  - [Implementations](#implementations)
    - [JavaScript/TypeScript](#javascripttypescript)
      - [Clients](#clients)
        - [Frontend Framework Integrations](#frontend-framework-integrations)
          - [React](#react)
      - [Servers](#servers)
        - [Databases \& ORMs](#databases--orms)
        - [PubSub](#pubsub)
      - [Custom Scalars](#custom-scalars)
      - [Type](#type)
      - [Miscellaneous](#miscellaneous)
      - [JavaScript Examples](#javascript-examples)
      - [TypeScript Examples](#typescript-examples)
    - [Ruby](#ruby)
      - [Ruby Examples](#ruby-examples)
    - [PHP](#php)
      - [PHP Examples](#php-examples)
    - [Python](#python)
      - [Python Examples](#python-examples)
    - [Java](#java)
      - [Custom Scalars](#custom-scalars-1)
      - [Java Examples](#java-examples)
    - [Kotlin](#kotlin)
      - [Kotlin Examples](#kotlin-examples)
    - [C/C++](#cc)
    - [Go](#go)
      - [Go Examples](#go-examples)
    - [Scala](#scala)
      - [Scala Examples](#scala-examples)
    - [.NET](#net)
      - [.NET Examples](#net-examples)
    - [Elixir](#elixir)
      - [Elixir Examples](#elixir-examples)
    - [Haskell](#haskell)
    - [SQL](#sql)
    - [Lua](#lua)
    - [Elm](#elm)
    - [Clojure](#clojure)
      - [Clojure Examples](#clojure-examples)
    - [Swift](#swift)
    - [OCaml](#ocaml)
    - [Android](#android)
      - [Android Examples](#android-examples)
    - [iOS](#ios)
      - [iOS Examples](#ios-examples)
    - [ClojureScript](#clojurescript)
    - [ReasonML](#reasonml)
    - [Dart](#dart)
    - [Rust](#rust)
      - [Rust Examples](#rust-examples)
    - [D (dlang)](#d-dlang)
    - [R (Rstat)](#r-rstat)
    - [Julia](#julia)
    - [Crystal](#crystal)
    - [Ballerina](#ballerina)
      - [Ballerina Samples](#ballerina-samples)
  - [Tools](#tools)
    - [Tools - Editors \& IDEs \& Explorers](#tools---editors--ides--explorers)
    - [Tools - Testing](#tools---testing)
    - [Tools - Security](#tools---security)
    - [Tools - Browser Extensions](#tools---browser-extensions)
    - [Tools - Prototyping](#tools---prototyping)
    - [Tools - Docs](#tools---docs)
    - [Tools - Editor Plugins](#tools---editor-plugins)
    - [Tools - Miscellaneous](#tools---miscellaneous)
  - [Databases](#databases)
  - [Services](#services)
    - [CDN](#cdn)
    - [CMS](#cms)
  - [Books](#books)
  - [Videos](#videos)
  - [Podcasts](#podcasts)
  - [Style Guides](#style-guides)
  - [Blogs](#blogs)
    - [Blogs - Security](#blogs---security)
  - [Posts](#posts)
  - [Tutorials](#tutorials)
  - [License](#license)

<!-- /MarkdownTOC -->

<a name="spec" />

## Specifications

- [GraphQL ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql/graphql-spec) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql/graphql-spec)](https://github.com/graphql/graphql-spec) - Working draft of the specification for GraphQL.
- [GraphQL over HTTP ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql/graphql-over-http) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql/graphql-over-http)](https://github.com/graphql/graphql-over-http) - Working draft of "GraphQL over HTTP" specification.
- [GraphQL Relay](https://relay.dev/docs/guides/graphql-server-specification/) - Relay-compliant GraphQL server specification.
- [OpenCRUD ![GitHub Repo Stars](https://img.shields.io/github/stars/opencrud/opencrud) ![GitHub last commit](https://img.shields.io/github/last-commit/opencrud/opencrud)](https://github.com/opencrud/opencrud) - OpenCRUD is a GraphQL CRUD API specification for databases.
- [Apollo Federation](https://www.apollographql.com/docs/federation/federation-spec/) - Apollo Federation specification
- [GraphQXL](https://gabotechs.github.io/graphqxl/) - GraphQXL is an extension of the GraphQL language with some additional features that help creating big and scalable server-side schemas.
- [GraphQL Scalars](https://www.graphql-scalars.com/) - hosts community defined custom Scalar specifications for use with @specifiedBy.

<a name="foundation" />

## Foundations

- [GraphQL Foundation](https://graphql.org/foundation/) - GraphQL Foundation under the Linux Foundation

<a name="community" />

## Communities

- [Discord - GraphQL](https://discord.graphql.org/) - Official GraphQL.org discord channel.
- [GraphQL Weekly](https://www.graphqlweekly.com/) - A weekly newsletter highlighting resources and news from the GraphQL community.
- [Apollo GraphQL Community](https://community.apollographql.com/) - Connect with other developers and share knowledge about every part of the Apollo GraphQL platform.
- [Discord - Reactiflux](http://join.reactiflux.com/) - Join `#help-graphql` on the Reactiflux Discord server.
- [Facebook](https://www.facebook.com/groups/795330550572866/) - Group for discussions, articles and knowledge sharing.
- [X](https://x.com/search?q=%23GraphQL) - Use the hashtag `#graphql`.
- [StackOverflow](https://stackoverflow.com/questions/tagged/graphql) - Questions and answers. Use the tag `graphql`.
- [GraphQL APIs ![GitHub Repo Stars](https://img.shields.io/github/stars/APIs-guru/graphql-apis) ![GitHub last commit](https://img.shields.io/github/last-commit/APIs-guru/graphql-apis)](https://github.com/APIs-guru/graphql-apis) - A collective list of public GraphQL APIs.
- [/r/GraphQL](https://www.reddit.com/r/graphql/) - A Subreddit for interesting and informative GraphQL content and discussions.

<a name="meetup" />

## Meetups

- [Relay Meetup](https://relaymeetup.com/) - A global, online meetup on Relay, the GraphQL client.
- [Amsterdam](https://www.meetup.com/Amsterdam-GraphQL-Meetup/)
- [Bangalore](https://www.meetup.com/graphql-bangalore/)
- [Berlin](https://www.meetup.com/graphql-berlin/)
- [Buenos Aires](https://www.meetup.com/es-ES/GraphQL-BA/)
- [Copenhagen](https://www.meetup.com/Copenhagen-GraphQL-Meetup-Group/)
- [Dallas-Fort Worth](https://www.meetup.com/DFW-GraphQL-Meetup/)
- [Hamburg](https://www.meetup.com/GraphQL-Hamburg/)
- [London](https://www.meetup.com/GraphQL-London/)
- [Melbourne](https://www.meetup.com/GraphQL-Melbourne/)
- [Munich](https://www.meetup.com/GraphQL-Munich/)
- [New York City](https://www.meetup.com/GraphQL-NYC/)
- [San Francisco](https://www.meetup.com/GraphQL-SF/)
- [Seattle](https://www.meetup.com/Seattle-GraphQL/)
- [Sydney](https://www.meetup.com/GraphQL-Sydney/)
- [Tel Aviv](https://www.meetup.com/GraphQL-TLV/)
- [Wrocław](https://www.meetup.com/GraphQL-Wroclaw/)
- [Singapore](https://www.meetup.com/GraphQL-SG/)
- [Zurich](https://www.meetup.com/GraphQL-Zurich/)

<a name="impl" />

## Implementations

<a name="js" />

### JavaScript/TypeScript

- [graphql-js ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql/graphql-js) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql/graphql-js)](https://github.com/graphql/graphql-js) - A reference implementation of GraphQL for JavaScript.
- [graphql-jit ![GitHub Repo Stars](https://img.shields.io/github/stars/zalando-incubator/graphql-jit) ![GitHub last commit](https://img.shields.io/github/last-commit/zalando-incubator/graphql-jit)](https://github.com/zalando-incubator/graphql-jit) - GraphQL execution using a JIT compiler.

#### Clients

- [apollo-client ![GitHub Repo Stars](https://img.shields.io/github/stars/apollographql/apollo-client) ![GitHub last commit](https://img.shields.io/github/last-commit/apollographql/apollo-client)](https://github.com/apollographql/apollo-client) - A fully-featured, production ready caching GraphQL client for every UI framework and GraphQL server.
- [graphql-request ![GitHub Repo Stars](https://img.shields.io/github/stars/prisma-labs/graphql-request) ![GitHub last commit](https://img.shields.io/github/last-commit/prisma-labs/graphql-request)](https://github.com/prisma-labs/graphql-request) - A minimal GraphQL client for Node and browsers.
- [typescript-graphql-request](https://graphql-code-generator.com/docs/plugins/typescript-graphql-request) - Use GraphQL Request as a fully typed SDK.
- [graphql-zeus ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-editor/graphql-zeus) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-editor/graphql-zeus)](https://github.com/graphql-editor/graphql-zeus) - GraphQL Zeus creates autocomplete client library for `JavaScript` or `TypeScript` which provides autocompletion for strongly typed queries.
- [graphqurl ![GitHub Repo Stars](https://img.shields.io/github/stars/hasura/graphqurl) ![GitHub last commit](https://img.shields.io/github/last-commit/hasura/graphqurl)](https://github.com/hasura/graphqurl) - curl for GraphQL with autocomplete, subscriptions and GraphiQL. Also a dead-simple universal javascript GraphQL client.
- [aws-amplify ![GitHub Repo Stars](https://img.shields.io/github/stars/aws-amplify/amplify-js) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-amplify/amplify-js)](https://github.com/aws-amplify/amplify-js) - A client library developed by Amazon for caching, analytics and more that includes a way to fetch GraphQL queries.
- [gqty ![GitHub Repo Stars](https://img.shields.io/github/stars/gqty-dev/gqty) ![GitHub last commit](https://img.shields.io/github/last-commit/gqty-dev/gqty)](https://github.com/gqty-dev/gqty) - A No GraphQL client for TypeScript
- [genql ![GitHub Repo Stars](https://img.shields.io/github/stars/remorses/genql) ![GitHub last commit](https://img.shields.io/github/last-commit/remorses/genql)](https://github.com/remorses/genql) - Type safe TypeScript client for any GraphQL API.

##### Frontend Framework Integrations

- [vue-apollo ![GitHub Repo Stars](https://img.shields.io/github/stars/vuejs/vue-apollo) ![GitHub last commit](https://img.shields.io/github/last-commit/vuejs/vue-apollo)](https://github.com/vuejs/vue-apollo) - Apollo/GraphQL integration for VueJS.
- [apollo-angular ![GitHub Repo Stars](https://img.shields.io/github/stars/kamilkisiela/apollo-angular) ![GitHub last commit](https://img.shields.io/github/last-commit/kamilkisiela/apollo-angular)](https://github.com/kamilkisiela/apollo-angular) - A fully-featured, production ready caching GraphQL client for Angular and every GraphQL server.
- [svelte-apollo ![GitHub Repo Stars](https://img.shields.io/github/stars/timhall/svelte-apollo) ![GitHub last commit](https://img.shields.io/github/last-commit/timhall/svelte-apollo)](https://github.com/timhall/svelte-apollo) - Svelte integration for Apollo GraphQL.
- [ember-apollo-client ![GitHub Repo Stars](https://img.shields.io/github/stars/ember-graphql/ember-apollo-client) ![GitHub last commit](https://img.shields.io/github/last-commit/ember-graphql/ember-apollo-client)](https://github.com/ember-graphql/ember-apollo-client) - An ember-cli addon for Apollo Client and GraphQL.
- [apollo-elements ![GitHub Repo Stars](https://img.shields.io/github/stars/apollo-elements/apollo-elements) ![GitHub last commit](https://img.shields.io/github/last-commit/apollo-elements/apollo-elements)](https://github.com/apollo-elements/apollo-elements) - GraphQL web components that work in any frontend framework.
- [sveltekit-kitql ![GitHub Repo Stars](https://img.shields.io/github/stars/jycouet/kitql) ![GitHub last commit](https://img.shields.io/github/last-commit/jycouet/kitql)](https://github.com/jycouet/kitql) - A set of tools, helping you building efficient apps in a fast way with SvelteKit and GraphQL.

###### React

- [react-apollo](https://www.apollographql.com/docs/react/) - The core @apollo/client library provides built-in integration with React.
- [relay ![GitHub Repo Stars](https://img.shields.io/github/stars/facebook/relay) ![GitHub last commit](https://img.shields.io/github/last-commit/facebook/relay)](https://github.com/facebook/relay) - Relay is a JavaScript framework for building data-driven React applications.
- [urql ![GitHub Repo Stars](https://img.shields.io/github/stars/FormidableLabs/urql) ![GitHub last commit](https://img.shields.io/github/last-commit/FormidableLabs/urql)](https://github.com/FormidableLabs/urql) - A simple caching GraphQL client for React.
- [graphql-hooks ![GitHub Repo Stars](https://img.shields.io/github/stars/nearform/graphql-hooks) ![GitHub last commit](https://img.shields.io/github/last-commit/nearform/graphql-hooks)](https://github.com/nearform/graphql-hooks) - Minimal hooks-first GraphQL client with caching and server-side rendering support.
- [mst-gql ![GitHub Repo Stars](https://img.shields.io/github/stars/mobxjs/mst-gql) ![GitHub last commit](https://img.shields.io/github/last-commit/mobxjs/mst-gql)](https://github.com/mobxjs/mst-gql) - Bindings for mobx-state-tree and GraphQL.
- [micro-graphql-react ![GitHub Repo Stars](https://img.shields.io/github/stars/arackaf/micro-graphql-react) ![GitHub last commit](https://img.shields.io/github/last-commit/arackaf/micro-graphql-react)](https://github.com/arackaf/micro-graphql-react) - A lightweight utility for adding GraphQL to React. components. Includes simple caching and uses GET requests that could additionally be cached through a service-worker.
- [@gqty/react ![GitHub Repo Stars](https://img.shields.io/github/stars/gqty-dev/gqty) ![GitHub last commit](https://img.shields.io/github/last-commit/gqty-dev/gqty)](https://github.com/gqty-dev/gqty) - A No GraphQL client for TypeScript

#### Servers

- [apollo-server ![GitHub Repo Stars](https://img.shields.io/github/stars/apollographql/apollo-server) ![GitHub last commit](https://img.shields.io/github/last-commit/apollographql/apollo-server)](https://github.com/apollographql/apollo-server) - Spec-compliant and production ready JavaScript GraphQL server that lets you develop in a schema-first way. Built for Express, Connect, Hapi, Koa, and more.
- [hapi-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/SimonDegraeve/hapi-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/SimonDegraeve/hapi-graphql)](https://github.com/SimonDegraeve/hapi-graphql) - Create a GraphQL HTTP server with Hapi.
- [hapi-plugin-graphiql ![GitHub Repo Stars](https://img.shields.io/github/stars/rse/hapi-plugin-graphiql) ![GitHub last commit](https://img.shields.io/github/last-commit/rse/hapi-plugin-graphiql)](https://github.com/rse/hapi-plugin-graphiql) - HAPI plugin for GraphiQL integration.
- [graphql-api-koa ![GitHub Repo Stars](https://img.shields.io/github/stars/jaydenseric/graphql-api-koa) ![GitHub last commit](https://img.shields.io/github/last-commit/jaydenseric/graphql-api-koa)](https://github.com/jaydenseric/graphql-api-koa) - GraphQL Koa middleware that implements GraphQL.js from scratch and supports native ESM.
- [koa-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/chentsulin/koa-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/chentsulin/koa-graphql)](https://github.com/chentsulin/koa-graphql) - GraphQL Koa Middleware.
- [graphql-koa-scripts ![GitHub Repo Stars](https://img.shields.io/github/stars/ryanhs/graphql-koa-scripts) ![GitHub last commit](https://img.shields.io/github/last-commit/ryanhs/graphql-koa-scripts)](https://github.com/ryanhs/graphql-koa-scripts) - GraphQL Koa 1 file simplified. usefull for quick test
- [gql ![GitHub Repo Stars](https://img.shields.io/github/stars/deno-libs/gql) ![GitHub last commit](https://img.shields.io/github/last-commit/deno-libs/gql)](https://github.com/deno-libs/gql) - Universal GraphQL HTTP middleware for Deno.
- [mercurius ![GitHub Repo Stars](https://img.shields.io/github/stars/mercurius-js/mercurius) ![GitHub last commit](https://img.shields.io/github/last-commit/mercurius-js/mercurius)](https://github.com/mercurius-js/mercurius) - GraphQL plugin for Fastify.
- [graphql-yoga ![GitHub Repo Stars](https://img.shields.io/github/stars/prisma-labs/graphql-yoga) ![GitHub last commit](https://img.shields.io/github/last-commit/prisma-labs/graphql-yoga)](https://github.com/prisma-labs/graphql-yoga) - Fully-featured GraphQL Server with focus on easy setup, performance and great developer experience.
- [graphitejs ![GitHub Repo Stars](https://img.shields.io/github/stars/graphitejs/server) ![GitHub last commit](https://img.shields.io/github/last-commit/graphitejs/server)](https://github.com/graphitejs/server) - Framework NodeJS for GraphQL.
- [graphql-helix ![GitHub Repo Stars](https://img.shields.io/github/stars/contrawork/graphql-helix) ![GitHub last commit](https://img.shields.io/github/last-commit/contrawork/graphql-helix)](https://github.com/contrawork/graphql-helix) - A highly evolved GraphQL HTTP Server.
- [pylon ![GitHub Repo Stars](https://img.shields.io/github/stars/getcronit/pylon) ![GitHub last commit](https://img.shields.io/github/last-commit/getcronit/pylon)](https://github.com/getcronit/pylon) - Write full-feature APIs with just functions. No more boilerplate code, no more setup. Just write functions and deploy.

##### Databases & ORMs

- [graphql-sequelize ![GitHub Repo Stars](https://img.shields.io/github/stars/mickhansen/graphql-sequelize) ![GitHub last commit](https://img.shields.io/github/last-commit/mickhansen/graphql-sequelize)](https://github.com/mickhansen/graphql-sequelize) - Sequelize helpers for GraphQL.
- [graphql-bookshelf ![GitHub Repo Stars](https://img.shields.io/github/stars/brysgo/graphql-bookshelf) ![GitHub last commit](https://img.shields.io/github/last-commit/brysgo/graphql-bookshelf)](https://github.com/brysgo/graphql-bookshelf) - Some help defining GraphQL schema around BookshelfJS models.
- [join-monster ![GitHub Repo Stars](https://img.shields.io/github/stars/acarl005/join-monster) ![GitHub last commit](https://img.shields.io/github/last-commit/acarl005/join-monster)](https://github.com/acarl005/join-monster) - A GraphQL-to-SQL query execution layer for batch data fetching.

##### PubSub

- [graphql-ably-pubsub](https://www.npmjs.com/package/graphql-ably-pubsub) - Ably PubSub implementation for GraphQL to publish mutation updates and subscribe to the result through a subscription query.

#### Custom Scalars

- [graphql-scalars ![GitHub Repo Stars](https://img.shields.io/github/stars/Urigo/graphql-scalars) ![GitHub last commit](https://img.shields.io/github/last-commit/Urigo/graphql-scalars)](https://github.com/Urigo/graphql-scalars) - A library of custom GraphQL Scalars for creating precise type-safe GraphQL schemas.

#### Type

- [type-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/19majkel94/type-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/19majkel94/type-graphql)](https://github.com/19majkel94/type-graphql) - Create GraphQL schema and resolvers with TypeScript, using classes and decorators!
- [graphql-nexus ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-nexus/nexus) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-nexus/nexus)](https://github.com/graphql-nexus/nexus) - Code-First, Type-Safe, GraphQL Schema Construction.
- [graphql-code-generator ![GitHub Repo Stars](https://img.shields.io/github/stars/dotansimha/graphql-code-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/dotansimha/graphql-code-generator)](https://github.com/dotansimha/graphql-code-generator): GraphQL code generator with flexible support for custom plugins and templates like TypeScript (frontend and backend), React Hooks, resolvers signatures and more.
- [pothos ![GitHub Repo Stars](https://img.shields.io/github/stars/hayes/pothos) ![GitHub last commit](https://img.shields.io/github/last-commit/hayes/pothos)](https://github.com/hayes/pothos) - Pothos is a plugin based GraphQL schema builder for typescript. It makes building graphql schemas in typescript easy, fast and enjoyable.
- [garph ![GitHub Repo Stars](https://img.shields.io/github/stars/stepci/garph) ![GitHub last commit](https://img.shields.io/github/last-commit/stepci/garph)](https://github.com/stepci/garph) - Garph is full-stack framework for building type-safe GraphQL APIs in TypeScript.
- [gqloom ![GitHub Repo Stars](https://img.shields.io/github/stars/modevol-com/gqloom) ![GitHub last commit](https://img.shields.io/github/last-commit/modevol-com/gqloom)](https://github.com/modevol-com/gqloom) - GQLoom is a GraphQL weaver for TypeScript/JavaScript that weaves GraphQL schema and resolvers using [Valibot ![GitHub Repo Stars](https://img.shields.io/github/stars/fabian-hiller/valibot) ![GitHub last commit](https://img.shields.io/github/last-commit/fabian-hiller/valibot)](https://github.com/fabian-hiller/valibot), [Zod ![GitHub Repo Stars](https://img.shields.io/github/stars/colinhacks/zod) ![GitHub last commit](https://img.shields.io/github/last-commit/colinhacks/zod)](https://github.com/colinhacks/zod), or [Yup ![GitHub Repo Stars](https://img.shields.io/github/stars/jquense/yup) ![GitHub last commit](https://img.shields.io/github/last-commit/jquense/yup)](https://github.com/jquense/yup).
- [fast-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/idurar/fast-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/idurar/fast-graphql)](https://github.com/idurar/fast-graphql) - Graphql Tools to Structure, Combine Resolvers and Merge Schema Definitions for Node.js, Next.Js and Graphql Apollo server
- [graphql-to-type ![GitHub Repo Stars](https://img.shields.io/github/stars/lkster/graphql-to-type) ![GitHub last commit](https://img.shields.io/github/last-commit/lkster/graphql-to-type)](https://github.com/lkster/graphql-to-type) - GraphQL query parser written entirely in TypeScript's type system for creating interfaces based on provided query
- [gql.tada ![GitHub Repo Stars](https://img.shields.io/github/stars/0no-co/gql.tada) ![GitHub last commit](https://img.shields.io/github/last-commit/0no-co/gql.tada)](https://github.com/0no-co/gql.tada) - GraphQL document authoring library, inferring the result and variables types of GraphQL queries and fragments in the TypeScript type system.

#### Miscellaneous

- [graphql-tools ![GitHub Repo Stars](https://img.shields.io/github/stars/apollographql/graphql-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/apollographql/graphql-tools)](https://github.com/apollographql/graphql-tools) - Tool library for building and maintaining GraphQL-JS servers.
- [graphql-tag ![GitHub Repo Stars](https://img.shields.io/github/stars/apollographql/graphql-tag) ![GitHub last commit](https://img.shields.io/github/last-commit/apollographql/graphql-tag)](https://github.com/apollographql/graphql-tag) - A JavaScript template literal tag that parses GraphQL queries.
- [load-gql ![GitHub Repo Stars](https://img.shields.io/github/stars/KunalSin9h/load-gql) ![GitHub last commit](https://img.shields.io/github/last-commit/KunalSin9h/load-gql)](https://github.com/KunalSin9h/load-gql) - A tiny, zero dependency GraphQL schema loader from files and folders.
- [graphql-compose ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-compose/graphql-compose) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-compose/graphql-compose)](https://github.com/graphql-compose/graphql-compose) - Tool which allows you to construct flexible graphql schema from different data sources via plugins.
- [graphql-modules ![GitHub Repo Stars](https://img.shields.io/github/stars/Urigo/graphql-modules) ![GitHub last commit](https://img.shields.io/github/last-commit/Urigo/graphql-modules)](https://github.com/Urigo/graphql-modules) - Separate GraphQL server into smaller, reusable parts by modules or features.
- [graphql-shield ![GitHub Repo Stars](https://img.shields.io/github/stars/maticzav/graphql-shield) ![GitHub last commit](https://img.shields.io/github/last-commit/maticzav/graphql-shield)](https://github.com/maticzav/graphql-shield) - A library that helps creating a permission layer for a graphql api.
- [graphql-shield-generator ![GitHub Repo Stars](https://img.shields.io/github/stars/omar-dulaimi/graphql-shield-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/omar-dulaimi/graphql-shield-generator)](https://github.com/omar-dulaimi/graphql-shield-generator) - Emits a GraphQL Shield from your GraphQL schema.
- [graphqlgate ![GitHub Repo Stars](https://img.shields.io/github/stars/oslabs-beta/GraphQL-Gate) ![GitHub last commit](https://img.shields.io/github/last-commit/oslabs-beta/GraphQL-Gate)](https://github.com/oslabs-beta/GraphQL-Gate) - A GraphQL rate-limiting library with query complexity analysis for Node.js
- [graphql-let ![GitHub Repo Stars](https://img.shields.io/github/stars/piglovesyou/graphql-let) ![GitHub last commit](https://img.shields.io/github/last-commit/piglovesyou/graphql-let)](https://github.com/piglovesyou/graphql-let) - A webpack loader to import type-protected codegen results directly from GraphQL documents
- [graphql-config ![GitHub Repo Stars](https://img.shields.io/github/stars/kamilkisiela/graphql-config) ![GitHub last commit](https://img.shields.io/github/last-commit/kamilkisiela/graphql-config)](https://github.com/kamilkisiela/graphql-config) - One configuration for all your GraphQL tools (supported by most tools, editors & IDEs).
- [graphql-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/urigo/graphql-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/urigo/graphql-cli)](https://github.com/urigo/graphql-cli) - A command line tool for common GraphQL development workflows.
- [graphql-toolkit ![GitHub Repo Stars](https://img.shields.io/github/stars/ardatan/graphql-toolkit) ![GitHub last commit](https://img.shields.io/github/last-commit/ardatan/graphql-toolkit)](https://github.com/ardatan/graphql-toolkit) - A set of utils for faster development of GraphQL tools (Schema and documents loading, Schema merging and more).
- [graphql-mesh ![GitHub Repo Stars](https://img.shields.io/github/stars/urigo/graphql-mesh) ![GitHub last commit](https://img.shields.io/github/last-commit/urigo/graphql-mesh)](https://github.com/urigo/graphql-mesh) - use GraphQL query language to access data in remote APIs that don't run GraphQL (and also ones that do run GraphQL).
- [sofa ![GitHub Repo Stars](https://img.shields.io/github/stars/Urigo/sofa) ![GitHub last commit](https://img.shields.io/github/last-commit/Urigo/sofa)](https://github.com/Urigo/sofa) - Generate REST API from your GraphQL API.
- [graphback ![GitHub Repo Stars](https://img.shields.io/github/stars/aerogear/graphback) ![GitHub last commit](https://img.shields.io/github/last-commit/aerogear/graphback)](https://github.com/aerogear/graphback) - Framework and CLI to add a GraphQLCRUD API layer to a GraphQL server using data models.
- [graphql-middleware ![GitHub Repo Stars](https://img.shields.io/github/stars/maticzav/graphql-middleware) ![GitHub last commit](https://img.shields.io/github/last-commit/maticzav/graphql-middleware)](https://github.com/maticzav/graphql-middleware) - Split up your GraphQL resolvers in middleware functions.
- [graphql-relay-js ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql/graphql-relay-js) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql/graphql-relay-js)](https://github.com/graphql/graphql-relay-js) - A library to help construct a graphql-js server supporting react-relay.
- [graphql-normalizr ![GitHub Repo Stars](https://img.shields.io/github/stars/monojack/graphql-normalizr) ![GitHub last commit](https://img.shields.io/github/last-commit/monojack/graphql-normalizr)](https://github.com/monojack/graphql-normalizr) - Normalize GraphQL responses for persisting in the client cache/state.
- [babel-plugin-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/ooflorent/babel-plugin-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/ooflorent/babel-plugin-graphql)](https://github.com/ooflorent/babel-plugin-graphql) - Babel plugin that compile GraphQL tagged template strings.
- [eslint-plugin-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/apollographql/eslint-plugin-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/apollographql/eslint-plugin-graphql)](https://github.com/apollographql/eslint-plugin-graphql) - An ESLint plugin that checks your GraphQL strings against a schema.
- [graphql-ws ![GitHub Repo Stars](https://img.shields.io/github/stars/enisdenjo/graphql-ws) ![GitHub last commit](https://img.shields.io/github/last-commit/enisdenjo/graphql-ws)](https://github.com/enisdenjo/graphql-ws) - Coherent, zero-dependency, lazy, simple, GraphQL over WebSocket Protocol compliant server and client.
- [graphql-live-query ![GitHub Repo Stars](https://img.shields.io/github/stars/n1ru4l/graphql-live-query) ![GitHub last commit](https://img.shields.io/github/last-commit/n1ru4l/graphql-live-query)](https://github.com/n1ru4l/graphql-live-query) - Realtime GraphQL Live Queries with JavaScript.
- [GraphVinci ![GitHub Repo Stars](https://img.shields.io/github/stars/Comcast/graphvinci) ![GitHub last commit](https://img.shields.io/github/last-commit/Comcast/graphvinci)](https://github.com/Comcast/graphvinci) - An interactive schema visualizer for GraphQL APIs.
- [supertest-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/alexstrat/supertest-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/alexstrat/supertest-graphql)](https://github.com/alexstrat/supertest-graphql) - Extends [supertest ![GitHub Repo Stars](https://img.shields.io/github/stars/visionmedia/supertest) ![GitHub last commit](https://img.shields.io/github/last-commit/visionmedia/supertest)](https://github.com/visionmedia/supertest) to easily test a GraphQL endpoint
- [schemathesis ![GitHub Repo Stars](https://img.shields.io/github/stars/schemathesis/schemathesis) ![GitHub last commit](https://img.shields.io/github/last-commit/schemathesis/schemathesis)](https://github.com/schemathesis/schemathesis) - Runs arbitrary queries matching a GraphQL schema to find server errors.
- [microfiber ![GitHub Repo Stars](https://img.shields.io/github/stars/anvilco/graphql-introspection-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/anvilco/graphql-introspection-tools)](https://github.com/anvilco/graphql-introspection-tools) - Query and manipulate GraphQL introspection query results in useful ways.
- [graphql-armor ![GitHub Repo Stars](https://img.shields.io/github/stars/Escape-Technologies/graphql-armor) ![GitHub last commit](https://img.shields.io/github/last-commit/Escape-Technologies/graphql-armor)](https://github.com/Escape-Technologies/graphql-armor) - An instant security layer for production GraphQL Endpoints.
- [goctopus ![GitHub Repo Stars](https://img.shields.io/github/stars/Escape-Technologies/goctopus) ![GitHub last commit](https://img.shields.io/github/last-commit/Escape-Technologies/goctopus)](https://github.com/Escape-Technologies/goctopus) - an incredibly fast GraphQL discovery & fingerprinting toolbox.
- [GraphQL Constraint Directive ![GitHub Repo Stars](https://img.shields.io/github/stars/confuser/graphql-constraint-directive) ![GitHub last commit](https://img.shields.io/github/last-commit/confuser/graphql-constraint-directive)](https://github.com/confuser/graphql-constraint-directive) - Allows using @constraint as a directive to validate input data. Inspired by Constraints Directives RFC and OpenAPI
- [Validator.js Wrapper Directive ![GitHub Repo Stars](https://img.shields.io/github/stars/ktutnik/graphql-directive) ![GitHub last commit](https://img.shields.io/github/last-commit/ktutnik/graphql-directive)](https://github.com/ktutnik/graphql-directive/tree/master/packages/validator) - A comprehensive list of validator directive wraps Validator.js functionalities
- [WunderGraph Cosmo ![GitHub Repo Stars](https://img.shields.io/github/stars/wundergraph/cosmo) ![GitHub last commit](https://img.shields.io/github/last-commit/wundergraph/cosmo)](https://github.com/wundergraph/cosmo) - The Open-Source GraphQL Federation Solution with Full Lifecycle API Management for (Federated) GraphQL. Schema Registry, composition checks, analytics, metrics, tracing and routing.
- [graphql-go-tools ![GitHub Repo Stars](https://img.shields.io/github/stars/wundergraph/graphql-go-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/wundergraph/graphql-go-tools)](https://github.com/wundergraph/graphql-go-tools) - A graphQL Router / API Gateway framework written in Golang, focussing on correctness, extensibility, and high-performance. Supports Federation v1 & v2, Subscriptions & more.
- [graphql-sunset ![GitHub Repo Stars](https://img.shields.io/github/stars/sophiabits/graphql-sunset) ![GitHub last commit](https://img.shields.io/github/last-commit/sophiabits/graphql-sunset)](https://github.com/sophiabits/graphql-sunset) - Quickly and easily add support for the `Sunset` header to your GraphQL server, to better communicate upcoming breaking changes.

<a name="js-example" />

#### JavaScript Examples

- [React Starter Kit ![GitHub Repo Stars](https://img.shields.io/github/stars/kriasoft/react-starter-kit) ![GitHub last commit](https://img.shields.io/github/last-commit/kriasoft/react-starter-kit)](https://github.com/kriasoft/react-starter-kit) - front-end starter kit using React, Relay, GraphQL, and JAM stack architecture.
- [SWAPI GraphQL Wrapper ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql/swapi-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql/swapi-graphql)](https://github.com/graphql/swapi-graphql) - A GraphQL schema and server wrapping SWAPI.
- [Relay TodoMVC ![GitHub Repo Stars](https://img.shields.io/github/stars/taion/relay-todomvc) ![GitHub last commit](https://img.shields.io/github/last-commit/taion/relay-todomvc)](https://github.com/taion/relay-todomvc) - Relay TodoMVC with routing.
- [Apollo Client documentation](https://www.apollographql.com/docs/react) - Documentation and example for building GraphQL apps using apollo client.
- [Apollo Server tools documentation](https://www.apollographql.com/docs/apollo-server/) - Documentation, tutorial and examples for building GraphQL server and connecting to SQL, MongoDB and REST endpoints.
- [F8 App 2017 ![GitHub Repo Stars](https://img.shields.io/github/stars/fbsamples/f8app) ![GitHub last commit](https://img.shields.io/github/last-commit/fbsamples/f8app)](https://github.com/fbsamples/f8app) - Source code of the official F8 app of 2016, powered by React Native and other Facebook open source projects.
- [Apollo React example for Github GraphQL API ![GitHub Repo Stars](https://img.shields.io/github/stars/katopz/react-apollo-graphql-github-example) ![GitHub last commit](https://img.shields.io/github/last-commit/katopz/react-apollo-graphql-github-example)](https://github.com/katopz/react-apollo-graphql-github-example) - Usage Examples Apollo React for Github GraphQL API with create-react-app.
- [Next.js TypeScript and GraphQL Example ![GitHub Repo Stars](https://img.shields.io/github/stars/zeit/next.js) ![GitHub last commit](https://img.shields.io/github/last-commit/zeit/next.js)](https://github.com/zeit/next.js/tree/canary/examples/with-typescript-graphql) - A type-protected GraphQL example on Next.js running [graphql-codegen](https://graphql-code-generator.com/) under the hood
- [GraphQL StackBlitz Starter](https://stackblitz.com/fork/graphql) – A live, editable demo spinning up in about 2 seconds and running in a browser.
- [NAPERG ![GitHub Repo Stars](https://img.shields.io/github/stars/alan345/naperg) ![GitHub last commit](https://img.shields.io/github/last-commit/alan345/naperg)](https://github.com/alan345/naperg) - Fullstack Boilerplate GraphQL. Made with React & Prisma + authentication & roles.
- [VulcanJS](http://vulcanjs.org) - The full-stack React+GraphQL framework
- [RAN Toolkit ![GitHub Repo Stars](https://img.shields.io/github/stars/sly777/ran) ![GitHub last commit](https://img.shields.io/github/last-commit/sly777/ran)](https://github.com/sly777/ran) - Production-ready toolkit/boilerplate with support for GraphQL, SSR, Hot-reload, CSS-in-JS, caching, and more.

<a name="ts-example" />

#### TypeScript Examples

- [Node.js API Starter ![GitHub Repo Stars](https://img.shields.io/github/stars/kriasoft/nodejs-api-starter) ![GitHub last commit](https://img.shields.io/github/last-commit/kriasoft/nodejs-api-starter)](https://github.com/kriasoft/nodejs-api-starter) - Yarn v2 based monorepo template (code-first GraphQL API, PostgreSQL, PnP, Zero-install, serverless).
- [Next.js Apollo TypeScript Starter ![GitHub Repo Stars](https://img.shields.io/github/stars/borisowsky/nextjs-apollo-ts-starter) ![GitHub last commit](https://img.shields.io/github/last-commit/borisowsky/nextjs-apollo-ts-starter)](https://github.com/borisowsky/nextjs-apollo-ts-starter) - Next.js starter project focused on developer experience.
- [GraphQL Starter ![GitHub Repo Stars](https://img.shields.io/github/stars/cerino-ligutom/GraphQL-Starter) ![GitHub last commit](https://img.shields.io/github/last-commit/cerino-ligutom/GraphQL-Starter)](https://github.com/cerino-ligutom/GraphQL-Starter) - A boilerplate for TypeScript + Node Express + Apollo GraphQL APIs.
- [Mocked Managed Federation - Apollo Server 3 ![GitHub Repo Stars](https://img.shields.io/github/stars/setchy/apollo-server-3-mocked-federation) ![GitHub last commit](https://img.shields.io/github/last-commit/setchy/apollo-server-3-mocked-federation)](https://github.com/setchy/apollo-server-3-mocked-federation) - An example of how to mock a managed federation Supgraph using Apollo Server 3.x
- [Mocked Managed Federation - Apollo Server 4 ![GitHub Repo Stars](https://img.shields.io/github/stars/setchy/apollo-server-4-mocked-federation) ![GitHub last commit](https://img.shields.io/github/last-commit/setchy/apollo-server-4-mocked-federation)](https://github.com/setchy/apollo-server-4-mocked-federation) - An example of how to mock a managed federation Supgraph using Apollo Server 4.x
- [Next.js Advanced Graphql Crud MongoDB Starter ![GitHub Repo Stars](https://img.shields.io/github/stars/idurar/starter-advanced-graphql-crud-next-js-mongodb) ![GitHub last commit](https://img.shields.io/github/last-commit/idurar/starter-advanced-graphql-crud-next-js-mongodb)](https://github.com/idurar/starter-advanced-graphql-crud-next-js-mongodb) - Starter Generic CRUD with Advanced Apollo Graphql server with Next.js and Mongodb (TypeScript)

<a name="rb" />

### Ruby

- [graphql-ruby ![GitHub Repo Stars](https://img.shields.io/github/stars/rmosolgo/graphql-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/rmosolgo/graphql-ruby)](https://github.com/rmosolgo/graphql-ruby) - Ruby implementation of Facebook's GraphQL.
- [graphql-batch ![GitHub Repo Stars](https://img.shields.io/github/stars/Shopify/graphql-batch) ![GitHub last commit](https://img.shields.io/github/last-commit/Shopify/graphql-batch)](https://github.com/Shopify/graphql-batch) - A query batching executor for the graphql gem.
- [graphql-auth ![GitHub Repo Stars](https://img.shields.io/github/stars/o2web/graphql-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/o2web/graphql-auth)](https://github.com/o2web/graphql-auth) - A JWT auth wrapper working with devise.
- [agoo ![GitHub Repo Stars](https://img.shields.io/github/stars/ohler55/agoo) ![GitHub last commit](https://img.shields.io/github/last-commit/ohler55/agoo)](https://github.com/ohler55/agoo) - Ruby web server that implements Facebook's GraphQL.
- [GQLi ![GitHub Repo Stars](https://img.shields.io/github/stars/contentful-labs/gqli.rb) ![GitHub last commit](https://img.shields.io/github/last-commit/contentful-labs/gqli.rb)](https://github.com/contentful-labs/gqli.rb) - A GraphQL client and DSL. Allowing to write queries in native Ruby.

<a name="rb-example" />

#### Ruby Examples

- [graphql-ruby-demo ![GitHub Repo Stars](https://img.shields.io/github/stars/rmosolgo/graphql-ruby-demo) ![GitHub last commit](https://img.shields.io/github/last-commit/rmosolgo/graphql-ruby-demo)](https://github.com/rmosolgo/graphql-ruby-demo) - Use graphql-ruby to expose a Rails app.
- [github-graphql-rails-example ![GitHub Repo Stars](https://img.shields.io/github/stars/github/github-graphql-rails-example) ![GitHub last commit](https://img.shields.io/github/last-commit/github/github-graphql-rails-example)](https://github.com/github/github-graphql-rails-example) - Example Rails app using GitHub's GraphQL API.
- [relay-on-rails ![GitHub Repo Stars](https://img.shields.io/github/stars/nethsix/relay-on-rails) ![GitHub last commit](https://img.shields.io/github/last-commit/nethsix/relay-on-rails)](https://github.com/nethsix/relay-on-rails) - Barebones starter kit for Relay application with Rails GraphQL server.
- [relay-rails-blog ![GitHub Repo Stars](https://img.shields.io/github/stars/gauravtiwari/relay-rails-blog) ![GitHub last commit](https://img.shields.io/github/last-commit/gauravtiwari/relay-rails-blog)](https://github.com/gauravtiwari/relay-rails-blog) - A graphql, relay and standard rails application powered demo weblog.
- [to_eat_app ![GitHub Repo Stars](https://img.shields.io/github/stars/jcdavison/to_eat_app) ![GitHub last commit](https://img.shields.io/github/last-commit/jcdavison/to_eat_app)](https://github.com/jcdavison/to_eat_app) - A sample graphql/rails/relay application with a related 3-part article series.
- [agoo-demo ![GitHub Repo Stars](https://img.shields.io/github/stars/ohler55/agoo) ![GitHub last commit](https://img.shields.io/github/last-commit/ohler55/agoo)](https://github.com/ohler55/agoo/tree/develop/example/graphql) - Use of the Agoo server to demonstrate a simple GraphQL application.
- [rails-devise-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/zauberware/rails-devise-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/zauberware/rails-devise-graphql)](https://github.com/zauberware/rails-devise-graphql) - A rails 6 boilerplate with devise, graphql & JWT auth.

<a name="php" />

### PHP

- [graphql-php ![GitHub Repo Stars](https://img.shields.io/github/stars/webonyx/graphql-php) ![GitHub last commit](https://img.shields.io/github/last-commit/webonyx/graphql-php)](https://github.com/webonyx/graphql-php) - A PHP port of GraphQL reference implementation.
- [graphql-relay-php ![GitHub Repo Stars](https://img.shields.io/github/stars/ivome/graphql-relay-php) ![GitHub last commit](https://img.shields.io/github/last-commit/ivome/graphql-relay-php)](https://github.com/ivome/graphql-relay-php) - Relay helpers for webonyx/graphql-php implementation of GraphQL.
- [lighthouse ![GitHub Repo Stars](https://img.shields.io/github/stars/nuwave/lighthouse) ![GitHub last commit](https://img.shields.io/github/last-commit/nuwave/lighthouse)](https://github.com/nuwave/lighthouse) - A PHP package that allows to serve a GraphQL endpoint from your Laravel application.
- [graphql-laravel ![GitHub Repo Stars](https://img.shields.io/github/stars/rebing/graphql-laravel) ![GitHub last commit](https://img.shields.io/github/last-commit/rebing/graphql-laravel)](https://github.com/rebing/graphql-laravel) - Laravel wrapper for Facebook's GraphQL.
- [overblog/graphql-bundle ![GitHub Repo Stars](https://img.shields.io/github/stars/overblog/GraphQLBundle) ![GitHub last commit](https://img.shields.io/github/last-commit/overblog/GraphQLBundle)](https://github.com/overblog/GraphQLBundle) - This bundle provides tools to build a complete GraphQL server in your Symfony App. Supports react-relay.
- [wp-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/wp-graphql/wp-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/wp-graphql/wp-graphql)](https://github.com/wp-graphql/wp-graphql) - GraphQL API for WordPress.
- [graphqlite ![GitHub Repo Stars](https://img.shields.io/github/stars/thecodingmachine/graphqlite) ![GitHub last commit](https://img.shields.io/github/last-commit/thecodingmachine/graphqlite)](https://github.com/thecodingmachine/graphqlite) - Framework agnostic library that allows you to write GraphQL server by annotating your PHP classes.
- [siler ![GitHub Repo Stars](https://img.shields.io/github/stars/leocavalcante/siler) ![GitHub last commit](https://img.shields.io/github/last-commit/leocavalcante/siler)](https://github.com/leocavalcante/siler) - Plain-old functions providing a declarative API for GraphQL servers with Subscriptions support.
- [graphql-request-builder ![GitHub Repo Stars](https://img.shields.io/github/stars/dpauli/php-graphql-request-builder) ![GitHub last commit](https://img.shields.io/github/last-commit/dpauli/php-graphql-request-builder)](https://github.com/dpauli/php-graphql-request-builder) - Builds request payload in GraphQL structure.
- [drupal/graphql](https://www.drupal.org/project/graphql) - Craft and expose a GraphQL schema for Drupal 9 and 10.

<a name="php-example" />

#### PHP Examples

- [siler-graphgl ![GitHub Repo Stars](https://img.shields.io/github/stars/leocavalcante/siler) ![GitHub last commit](https://img.shields.io/github/last-commit/leocavalcante/siler)](https://github.com/leocavalcante/siler/tree/main/examples/graphql) - An example GraphQL server written with Siler.

<a name="py" />

### Python

- [graphql-parser ![GitHub Repo Stars](https://img.shields.io/github/stars/tryolabs/graphql-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/tryolabs/graphql-parser)](https://github.com/tryolabs/graphql-parser) - GraphQL parser for Python.
- [graphql-core ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-python/graphql-core) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-python/graphql-core)](https://github.com/graphql-python/graphql-core) - GraphQL implementation for Python based on GraphQL.js v16.3.0 reference implementation
- [graphql-relay-py ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-python/graphql-relay-py) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-python/graphql-relay-py)](https://github.com/graphql-python/graphql-relay-py) - A library to help construct a graphql-py server supporting react-relay.
- [graphql-parser-python ![GitHub Repo Stars](https://img.shields.io/github/stars/tallstreet/graphql-parser-python) ![GitHub last commit](https://img.shields.io/github/last-commit/tallstreet/graphql-parser-python)](https://github.com/tallstreet/graphql-parser-python) - A python wrapper around libgraphqlparser.
- [graphene ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-python/graphene) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-python/graphene)](https://github.com/graphql-python/graphene) - A package for creating GraphQL schemas/types in a Pythonic easy way.
- [graphene-gae ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-python/graphene-gae) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-python/graphene-gae)](https://github.com/graphql-python/graphene-gae) - Adds GraphQL support to Google AppEngine (GAE).
- [django-graphiql ![GitHub Repo Stars](https://img.shields.io/github/stars/GraphQL-python-archive/django-graphiql) ![GitHub last commit](https://img.shields.io/github/last-commit/GraphQL-python-archive/django-graphiql)](https://github.com/GraphQL-python-archive/django-graphiql) - Integrate GraphiQL easily into your Django project.
- [flask-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-python/flask-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-python/flask-graphql)](https://github.com/graphql-python/flask-graphql) - Adds GraphQL support to your Flask application.
- [python-graphql-client ![GitHub Repo Stars](https://img.shields.io/github/stars/prisma/python-graphql-client) ![GitHub last commit](https://img.shields.io/github/last-commit/prisma/python-graphql-client)](https://github.com/prisma/python-graphql-client) - Simple GraphQL client for Python 2.7+
- [python-graphjoiner ![GitHub Repo Stars](https://img.shields.io/github/stars/healx/python-graphjoiner) ![GitHub last commit](https://img.shields.io/github/last-commit/healx/python-graphjoiner)](https://github.com/healx/python-graphjoiner) - Create GraphQL APIs using joins, SQL or otherwise.
- [graphene-django ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-python/graphene-django) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-python/graphene-django)](https://github.com/graphql-python/graphene-django) - A Django integration for Graphene.
- [Flask-GraphQL-Auth ![GitHub Repo Stars](https://img.shields.io/github/stars/callsign-viper/Flask-GraphQL-Auth) ![GitHub last commit](https://img.shields.io/github/last-commit/callsign-viper/Flask-GraphQL-Auth)](https://github.com/callsign-viper/Flask-GraphQL-Auth) - An authentication library for Flask inspired from flask-jwt-extended.
- [tartiflette ![GitHub Repo Stars](https://img.shields.io/github/stars/dailymotion/tartiflette) ![GitHub last commit](https://img.shields.io/github/last-commit/dailymotion/tartiflette)](https://github.com/dailymotion/tartiflette) - GraphQL Implementation, SDL First, for python 3.6+ / asyncio.
- [tartiflette-aiohttp ![GitHub Repo Stars](https://img.shields.io/github/stars/dailymotion/tartiflette-aiohttp) ![GitHub last commit](https://img.shields.io/github/last-commit/dailymotion/tartiflette-aiohttp)](https://github.com/dailymotion/tartiflette-aiohttp) - Wrapper of Tartiflette to expose GraphQL API over HTTP based on aiohttp / 3.6+ / asyncio, [official tutorial available on tartiflette.io](https://tartiflette.io/docs/tutorial/getting-started).
- [Ariadne ![GitHub Repo Stars](https://img.shields.io/github/stars/mirumee/ariadne) ![GitHub last commit](https://img.shields.io/github/last-commit/mirumee/ariadne)](https://github.com/mirumee/ariadne) - library for implementing GraphQL servers using schema-first approach. Asynchronous query execution, batteries included for ASGI, WSGI and popular webframeworks, [fully documented](https://ariadnegraphql.org).
- [django-graphql-auth ![GitHub Repo Stars](https://img.shields.io/github/stars/PedroBern/django-graphql-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/PedroBern/django-graphql-auth)](https://github.com/PedroBern/django-graphql-auth) - Django registration and authentication with GraphQL.
- [strawberry ![GitHub Repo Stars](https://img.shields.io/github/stars/strawberry-graphql/strawberry) ![GitHub last commit](https://img.shields.io/github/last-commit/strawberry-graphql/strawberry)](https://github.com/strawberry-graphql/strawberry) - A new GraphQL library for Python.
- [turms ![GitHub Repo Stars](https://img.shields.io/github/stars/jhnnsrs/turms) ![GitHub last commit](https://img.shields.io/github/last-commit/jhnnsrs/turms)](https://github.com/jhnnsrs/turms) - A pythonic graphql codegenerator built around graphql-core and pydantic
- [rath ![GitHub Repo Stars](https://img.shields.io/github/stars/jhnnsrs/rath) ![GitHub last commit](https://img.shields.io/github/last-commit/jhnnsrs/rath)](https://github.com/jhnnsrs/rath) - An apollo like graphql client with async and sync interface
- [sgqlc ![GitHub Repo Stars](https://img.shields.io/github/stars/profusion/sgqlc) ![GitHub last commit](https://img.shields.io/github/last-commit/profusion/sgqlc)](https://github.com/profusion/sgqlc) - Simple GraphQL Client makes working with GraphQL API responses easier in Python.

<a name="py-example" />

#### Python Examples

- [swapi-graphene ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-python/swapi-graphene) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-python/swapi-graphene)](https://github.com/graphql-python/swapi-graphene) - A GraphQL schema and server using [Graphene](https://graphene-python.org).
- [Python Backend Tutorial](https://hasura.io/learn/graphql/backend-stack/languages/python/) - A tutorial on creating a GraphQL server with [Strawberry](https://strawberry.rocks/) and a client with [Qlient](https://qlient-org.github.io/python-qlient/site/).

<a name="java" />

### Java

- [graphql-java ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-java/graphql-java) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-java/graphql-java)](https://github.com/graphql-java/graphql-java) - GraphQL Java implementation.
- [DGS Framework ![GitHub Repo Stars](https://img.shields.io/github/stars/Netflix/dgs-framework) ![GitHub last commit](https://img.shields.io/github/last-commit/Netflix/dgs-framework)](https://github.com/Netflix/dgs-framework) - A GraphQL server framework for Spring Boot, developed by Netflix.
- [graphql-java-generator](https://github.com/graphql-java-generator) - A [Maven plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-java-generator/graphql-maven-plugin-project) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-java-generator/graphql-maven-plugin-project)](https://github.com/graphql-java-generator/graphql-maven-plugin-project) and a [Gradle plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-java-generator/graphql-gradle-plugin-project) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-java-generator/graphql-gradle-plugin-project)](https://github.com/graphql-java-generator/graphql-gradle-plugin-project) that can generate both the **Client** and the **Server** (POJOs and utility classes). The server part is based on graphql-java, and hides all its boilerplate codes.
- [gaphql-java-type-generator ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-java/graphql-java-type-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-java/graphql-java-type-generator)](https://github.com/graphql-java/graphql-java-type-generator) - Auto-generates types for use with GraphQL Java
- [schemagen-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/bpatters/schemagen-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/bpatters/schemagen-graphql)](https://github.com/bpatters/schemagen-graphql) - Schema generation and execution package that turns POJO's into a GraphQL Java queryable set of objects. Enables exposing any service as a GraphQL service using Annotations.
- [graphql-java-annotations ![GitHub Repo Stars](https://img.shields.io/github/stars/Enigmatis/graphql-java-annotations) ![GitHub last commit](https://img.shields.io/github/last-commit/Enigmatis/graphql-java-annotations)](https://github.com/Enigmatis/graphql-java-annotations) - Provides annotations-based syntax for schema definition with GraphQL Java.
- [graphql-java-tools ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-java-kickstart/graphql-java-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-java-kickstart/graphql-java-tools)](https://github.com/graphql-java-kickstart/graphql-java-tools) - Schema-first graphql-java convenience library that makes it easy to bring your own implementations as data resolvers. Inspired by [graphql-tools ![GitHub Repo Stars](https://img.shields.io/github/stars/apollographql/graphql-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/apollographql/graphql-tools)](https://github.com/apollographql/graphql-tools) for JS.
- [graphql-java-codegen-maven-plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/kobylynskyi/graphql-java-codegen-maven-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/kobylynskyi/graphql-java-codegen-maven-plugin)](https://github.com/kobylynskyi/graphql-java-codegen-maven-plugin) - Schema-first maven plugin for generating Java types and Resolver interfaces. Works perfectly in conjunction with graphql-java-tools. Inspired by [swagger-codegen-maven-plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/swagger-api/swagger-codegen) ![GitHub last commit](https://img.shields.io/github/last-commit/swagger-api/swagger-codegen)](https://github.com/swagger-api/swagger-codegen/tree/master/modules/swagger-codegen-maven-plugin).
- [graphql-java-codegen-gradle-plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/kobylynskyi/graphql-java-codegen-gradle-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/kobylynskyi/graphql-java-codegen-gradle-plugin)](https://github.com/kobylynskyi/graphql-java-codegen-gradle-plugin) - Schema-first gradle plugin for generating Java types and Resolver interfaces. Works perfectly in conjunction with graphql-java-tools. Inspired by [gradle-swagger-generator-plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/int128/gradle-swagger-generator-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/int128/gradle-swagger-generator-plugin)](https://github.com/int128/gradle-swagger-generator-plugin).
- [graphql-java-servlet ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-java-kickstart/graphql-java-servlet) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-java-kickstart/graphql-java-servlet)](https://github.com/graphql-java-kickstart/graphql-java-servlet) - A framework-agnostic java servlet for exposing graphql-java query endpoints with GET, POST, and multipart uploads.
- [manifold-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/manifold-systems/manifold) ![GitHub last commit](https://img.shields.io/github/last-commit/manifold-systems/manifold)](https://github.com/manifold-systems/manifold/tree/master/manifold-deps-parent/manifold-graphql) - Comprehensive GraphQL client use. Schema-first. Type-safe GraphQL types, queries, and results, no code generators, no POJOs, no annotations. Excellent [IDE support](http://manifold.systems/images/graphql.mp4) with IntelliJ IDEA and Android Studio. See the [Java example](#example-java) below.
- [spring-graphql-common ![GitHub Repo Stars](https://img.shields.io/github/stars/oembedler/spring-graphql-common) ![GitHub last commit](https://img.shields.io/github/last-commit/oembedler/spring-graphql-common)](https://github.com/oembedler/spring-graphql-common) - Spring Framework GraphQL Library.
- [graphql-spring-boot ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-java-kickstart/graphql-spring-boot) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-java-kickstart/graphql-spring-boot)](https://github.com/graphql-java-kickstart/graphql-spring-boot) - GraphQL and GraphiQL Spring Framework Boot Starters.
- [vertx-graphql-service-discovery ![GitHub Repo Stars](https://img.shields.io/github/stars/engagingspaces/vertx-graphql-service-discovery) ![GitHub last commit](https://img.shields.io/github/last-commit/engagingspaces/vertx-graphql-service-discovery)](https://github.com/engagingspaces/vertx-graphql-service-discovery) - Asynchronous GraphQL service discovery and querying for your microservices.
- [vertx-dataloader ![GitHub Repo Stars](https://img.shields.io/github/stars/engagingspaces/vertx-dataloader) ![GitHub last commit](https://img.shields.io/github/last-commit/engagingspaces/vertx-dataloader)](https://github.com/engagingspaces/vertx-dataloader) - Port of Facebook DataLoader for efficient, asynchronous batching and caching in clustered GraphQL environments.
- [graphql-spqr ![GitHub Repo Stars](https://img.shields.io/github/stars/leangen/GraphQL-SPQR) ![GitHub last commit](https://img.shields.io/github/last-commit/leangen/GraphQL-SPQR)](https://github.com/leangen/GraphQL-SPQR) - Java 8+ API for rapid development of GraphQL services.
- [Light Java GraphQL ![GitHub Repo Stars](https://img.shields.io/github/stars/networknt/light-graphql-4j) ![GitHub last commit](https://img.shields.io/github/last-commit/networknt/light-graphql-4j)](https://github.com/networknt/light-graphql-4j): A lightweight, fast microservices framework with all cross-cutting concerns addressed and ready to plug in GraphQL schema.
- [Elide](https://elide.io): A Java library that can expose a JPA annotated data model as a GraphQL service over any relational database.
- [federation-jvm ![GitHub Repo Stars](https://img.shields.io/github/stars/apollographql/federation-jvm) ![GitHub last commit](https://img.shields.io/github/last-commit/apollographql/federation-jvm)](https://github.com/apollographql/federation-jvm) - Apollo Federation on the JVM.
- [graphql-orchestrator-java ![GitHub Repo Stars](https://img.shields.io/github/stars/graph-quilt/graphql-orchestrator-java) ![GitHub last commit](https://img.shields.io/github/last-commit/graph-quilt/graphql-orchestrator-java)](https://github.com/graph-quilt/graphql-orchestrator-java) GraphQL Orchestrator/Gateway library that supports Schema Stitching and Apollo Federation directives to combine schema from multiple GraphQL microservices into a single unified schema.
- [graphql-java-extended-validation ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-java/graphql-java-extended-validation) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-java/graphql-java-extended-validation)](https://github.com/graphql-java/graphql-java-extended-validation) - Provides extended validation of fields and field arguments for graphql-java.
- [dgs-extended-formatters ![GitHub Repo Stars](https://img.shields.io/github/stars/setchy/dgs-extended-formatters) ![GitHub last commit](https://img.shields.io/github/last-commit/setchy/dgs-extended-formatters)](https://github.com/setchy/dgs-extended-formatters) - An experimental set of DGS Directives for common formatting use-cases.

#### Custom Scalars

- [graphql-java-datetime ![GitHub Repo Stars](https://img.shields.io/github/stars/donbeave/graphql-java-datetime) ![GitHub last commit](https://img.shields.io/github/last-commit/donbeave/graphql-java-datetime)](https://github.com/donbeave/graphql-java-datetime) - GraphQL ISO Date is a set of RFC 3339 compliant date/time scalar types to be used with graphql-java.
- [graphql-java-extended-scalars ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-java/graphql-java-extended-scalars) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-java/graphql-java-extended-scalars)](https://github.com/graphql-java/graphql-java-extended-scalars) - Extended scalars for graphql-java.

<a name="java-example" />

#### Java Examples

- [light-java-graphql examples ![GitHub Repo Stars](https://img.shields.io/github/stars/networknt/light-example-4j) ![GitHub last commit](https://img.shields.io/github/last-commit/networknt/light-example-4j)](https://github.com/networknt/light-example-4j/tree/master/graphql) - Examples of Light Java GraphQL and tutorials.
- [graphql-spqr-samples ![GitHub Repo Stars](https://img.shields.io/github/stars/leangen/graphql-spqr-samples) ![GitHub last commit](https://img.shields.io/github/last-commit/leangen/graphql-spqr-samples)](https://github.com/leangen/graphql-spqr-samples) - An example GraphQL server written with Spring MVC and GraphQL-SPQR.
- [manifold-graphql sample ![GitHub Repo Stars](https://img.shields.io/github/stars/manifold-systems/manifold-sample-graphql-app) ![GitHub last commit](https://img.shields.io/github/last-commit/manifold-systems/manifold-sample-graphql-app)](https://github.com/manifold-systems/manifold-sample-graphql-app) - A simple application, both client and server, demonstrating the Manifold GraphQL library.
- [graphql-java-kickstart_samples ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-java-kickstart/samples) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-java-kickstart/samples)](https://github.com/graphql-java-kickstart/samples) - Samples for using the GraphQL Java Kickstart projects.
- [graphql-java-kickstart-federation-example ![GitHub Repo Stars](https://img.shields.io/github/stars/setchy/graphql-java-kickstart-federation-example) ![GitHub last commit](https://img.shields.io/github/last-commit/setchy/graphql-java-kickstart-federation-example)](https://github.com/setchy/graphql-java-kickstart-federation-example) - A GraphQL Java Kickstart federation example.
- [dgs-federation-example ![GitHub Repo Stars](https://img.shields.io/github/stars/Netflix/dgs-federation-example) ![GitHub last commit](https://img.shields.io/github/last-commit/Netflix/dgs-federation-example)](https://github.com/Netflix/dgs-federation-example) - A Netflix DGS federation example.
- [Spring Boot backend tutorial](https://hasura.io/learn/graphql/backend-stack/languages/java/) - A tutorial creating a GraphQL server and client using Spring Boot and Netflix DGS.

<a name="kotlin" />

### Kotlin

- [graphql-kotlin ![GitHub Repo Stars](https://img.shields.io/github/stars/ExpediaGroup/graphql-kotlin) ![GitHub last commit](https://img.shields.io/github/last-commit/ExpediaGroup/graphql-kotlin)](https://github.com/ExpediaGroup/graphql-kotlin) - GraphQL Kotlin implementation.
- [manifold-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/manifold-systems/manifold) ![GitHub last commit](https://img.shields.io/github/last-commit/manifold-systems/manifold)](https://github.com/manifold-systems/manifold/tree/master/manifold-deps-parent/manifold-graphql) - Comprehensive GraphQL client use. Schema-first. Type-safe GraphQL types, queries, and results, no code generators, no POJOs, no annotations. Excellent [IDE support](http://manifold.systems/images/graphql.mp4) with IntelliJ IDEA and Android Studio. See the [Kotlin example](#example-kotlin) below.
- [KGraphQL ![GitHub Repo Stars](https://img.shields.io/github/stars/aPureBase/KGraphQL) ![GitHub last commit](https://img.shields.io/github/last-commit/aPureBase/KGraphQL)](https://github.com/aPureBase/KGraphQL): Pure Kotlin implementation to setup a GraphQL server.
- [Kobby ![GitHub Repo Stars](https://img.shields.io/github/stars/ermadmi78/kobby) ![GitHub last commit](https://img.shields.io/github/last-commit/ermadmi78/kobby)](https://github.com/ermadmi78/kobby) - Codegen plugin of [Kotlin DSL Client](https://blog.kotlin-academy.com/how-to-generate-kotlin-dsl-client-by-graphql-schema-707fd0c55284) by GraphQL schema. The generated DSL supports execution of complex GraphQL queries, mutation and subscriptions in Kotlin with syntax similar to native GraphQL syntax.
- [Graphkt ![GitHub Repo Stars](https://img.shields.io/github/stars/cufyorg/graphkt) ![GitHub last commit](https://img.shields.io/github/last-commit/cufyorg/graphkt)](https://github.com/cufyorg/graphkt) - A DSL based graphql server library for kotlin, backed by graphql-java.

<a name="kotlin-example" />

#### Kotlin Examples

- [manifold-graphql sample ![GitHub Repo Stars](https://img.shields.io/github/stars/manifold-systems/manifold-sample-kotlin-app) ![GitHub last commit](https://img.shields.io/github/last-commit/manifold-systems/manifold-sample-kotlin-app)](https://github.com/manifold-systems/manifold-sample-kotlin-app) - A simple GraphQL application, both client and server, demonstrating the Manifold GraphQL library with Kotlin.

<a name="c" />

### C/C++

- [libgraphqlparser ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql/libgraphqlparser) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql/libgraphqlparser)](https://github.com/graphql/libgraphqlparser) - A GraphQL query parser in C++ with C and C++ APIs.
- [agoo-c ![GitHub Repo Stars](https://img.shields.io/github/stars/ohler55/agoo-c) ![GitHub last commit](https://img.shields.io/github/last-commit/ohler55/agoo-c)](https://github.com/ohler55/agoo-c) - A high performance GraphQL server written in C. [benchmarks ![GitHub Repo Stars](https://img.shields.io/github/stars/the-benchmarker/graphql-benchmarks) ![GitHub last commit](https://img.shields.io/github/last-commit/the-benchmarker/graphql-benchmarks)](https://github.com/the-benchmarker/graphql-benchmarks)
- [cppgraphqlgen ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/cppgraphqlgen) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/cppgraphqlgen)](https://github.com/Microsoft/cppgraphqlgen) - C++ GraphQL schema service generator.
- [CaffQL ![GitHub Repo Stars](https://img.shields.io/github/stars/caffeinetv/CaffQL) ![GitHub last commit](https://img.shields.io/github/last-commit/caffeinetv/CaffQL)](https://github.com/caffeinetv/CaffQL) - Generates C++ client types and request/response serialization from a GraphQL introspection query.

<a name="go" />

### Go

- [graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-go/graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-go/graphql)](https://github.com/graphql-go/graphql) - An implementation of GraphQL for Go follows graphql-js
- [graphql-go ![GitHub Repo Stars](https://img.shields.io/github/stars/graph-gophers/graphql-go) ![GitHub last commit](https://img.shields.io/github/last-commit/graph-gophers/graphql-go)](https://github.com/graph-gophers/graphql-go) - GraphQL server with a focus on ease of use.
- [gqlgen ![GitHub Repo Stars](https://img.shields.io/github/stars/99designs/gqlgen) ![GitHub last commit](https://img.shields.io/github/last-commit/99designs/gqlgen)](https://github.com/99designs/gqlgen) - Go generate based graphql server library.
- [graphql-relay-go ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-go/relay) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-go/relay)](https://github.com/graphql-go/relay) - A Go/Golang library to help construct a server supporting react-relay.
- [graphjin ![GitHub Repo Stars](https://img.shields.io/github/stars/dosco/graphjin) ![GitHub last commit](https://img.shields.io/github/last-commit/dosco/graphjin)](https://github.com/dosco/graphjin): Build APIs in 5 minutes with GraphQL. An instant GraphQL to SQL compiler.
- [graphql-go-tools ![GitHub Repo Stars](https://img.shields.io/github/stars/wundergraph/graphql-go-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/wundergraph/graphql-go-tools)](https://github.com/wundergraph/graphql-go-tools) - A graphQL Router / API Gateway framework written in Golang, focussing on correctness, extensibility, and high-performance. Supports Federation v1 & v2, Subscriptions & more.

<a name="go-example" />

#### Go Examples

- [golang-relay-starter-kit ![GitHub Repo Stars](https://img.shields.io/github/stars/sogko/golang-relay-starter-kit) ![GitHub last commit](https://img.shields.io/github/last-commit/sogko/golang-relay-starter-kit)](https://github.com/sogko/golang-relay-starter-kit) - Barebones starting point for a Relay application with Golang GraphQL server.
- [todomvc-relay-go ![GitHub Repo Stars](https://img.shields.io/github/stars/sogko/todomvc-relay-go) ![GitHub last commit](https://img.shields.io/github/last-commit/sogko/todomvc-relay-go)](https://github.com/sogko/todomvc-relay-go) - Port of the React/Relay TodoMVC app, driven by a Golang GraphQL backend.
- [go-graphql-subscription-example ![GitHub Repo Stars](https://img.shields.io/github/stars/ccamel/go-graphql-subscription-example) ![GitHub last commit](https://img.shields.io/github/last-commit/ccamel/go-graphql-subscription-example)](https://github.com/ccamel/go-graphql-subscription-example) - A GraphQL schema and server that demonstrates GraphQL [subscriptions ![GitHub Repo Stars](https://img.shields.io/github/stars/apollographql/subscriptions-transport-ws) ![GitHub last commit](https://img.shields.io/github/last-commit/apollographql/subscriptions-transport-ws)](https://github.com/apollographql/subscriptions-transport-ws/blob/v0.9.4/PROTOCOL.md) (over Websocket) to consume [Apache Kafka](https://kafka.apache.org/) messages.
- [Go Backend Tutorial](https://hasura.io/learn/graphql/backend-stack/languages/go/) - A tutorial showing how to make a Go GraphQL server and client using code generation.

<a name="scala" />

### Scala

- [sangria ![GitHub Repo Stars](https://img.shields.io/github/stars/sangria-graphql/sangria) ![GitHub last commit](https://img.shields.io/github/last-commit/sangria-graphql/sangria)](https://github.com/sangria-graphql/sangria) - Scala GraphQL server implementation.
- [sangria-relay ![GitHub Repo Stars](https://img.shields.io/github/stars/sangria-graphql/sangria-relay) ![GitHub last commit](https://img.shields.io/github/last-commit/sangria-graphql/sangria-relay)](https://github.com/sangria-graphql/sangria-relay) - Sangria Relay Support.
- [caliban ![GitHub Repo Stars](https://img.shields.io/github/stars/ghostdogpr/caliban) ![GitHub last commit](https://img.shields.io/github/last-commit/ghostdogpr/caliban)](https://github.com/ghostdogpr/caliban) - Caliban is a purely functional library for creating GraphQL backends in Scala.

<a name="scala-example" />

#### Scala Examples

- [sangria-akka-http-example ![GitHub Repo Stars](https://img.shields.io/github/stars/sangria-graphql/sangria-akka-http-example) ![GitHub last commit](https://img.shields.io/github/last-commit/sangria-graphql/sangria-akka-http-example)](https://github.com/sangria-graphql/sangria-akka-http-example) - An example GraphQL server written with akka-http and [sangria](https://sangria-graphql.github.io/)
- [sangria-playground ![GitHub Repo Stars](https://img.shields.io/github/stars/sangria-graphql/sangria-playground) ![GitHub last commit](https://img.shields.io/github/last-commit/sangria-graphql/sangria-playground)](https://github.com/sangria-graphql/sangria-playground) - An example of GraphQL server written with Play and sangria.

<a name="dotnet" />

### .NET

- [graphql-dotnet ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-dotnet/graphql-dotnet) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-dotnet/graphql-dotnet)](https://github.com/graphql-dotnet/graphql-dotnet) - GraphQL for .NET.
- [graphql-net ![GitHub Repo Stars](https://img.shields.io/github/stars/ckimes89/graphql-net) ![GitHub last commit](https://img.shields.io/github/last-commit/ckimes89/graphql-net)](https://github.com/ckimes89/graphql-net) - GraphQL to IQueryable for .NET.
- [Hot Chocolate ![GitHub Repo Stars](https://img.shields.io/github/stars/ChilliCream/hotchocolate) ![GitHub last commit](https://img.shields.io/github/last-commit/ChilliCream/hotchocolate)](https://github.com/ChilliCream/hotchocolate) - GraphQL server for .Net Core and .NET Framework.
- [Snowflaqe ![GitHub Repo Stars](https://img.shields.io/github/stars/Zaid-Ajaj/Snowflaqe) ![GitHub last commit](https://img.shields.io/github/last-commit/Zaid-Ajaj/Snowflaqe)](https://github.com/Zaid-Ajaj/Snowflaqe) - Type-safe GraphQL code generator for F# and [Fable ![GitHub Repo Stars](https://img.shields.io/github/stars/fable-compiler/Fable) ![GitHub last commit](https://img.shields.io/github/last-commit/fable-compiler/Fable)](https://github.com/fable-compiler/Fable)
- [EntityGraphQL ![GitHub Repo Stars](https://img.shields.io/github/stars/EntityGraphQL/EntityGraphQL) ![GitHub last commit](https://img.shields.io/github/last-commit/EntityGraphQL/EntityGraphQL)](https://github.com/EntityGraphQL/EntityGraphQL) - library to build a GraphQL API on top of data model with the extensibility to bring multiple data sources together in the single GraphQL schema.
- [ZeroQL ![GitHub Repo Stars](https://img.shields.io/github/stars/byme8/ZeroQL) ![GitHub last commit](https://img.shields.io/github/last-commit/byme8/ZeroQL)](https://github.com/byme8/ZeroQL) - type-safe GraphQL client with Linq-like interface for C#

<a name="net-example" />

#### .NET Examples

- [.NET backend tutorial](https://hasura.io/learn/graphql/backend-stack/languages/dotnet/) - A tutorial creating a GraphQL server and client with .NET.

<a name="elixir" />

### Elixir

- [absinthe-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/absinthe-graphql/absinthe) ![GitHub last commit](https://img.shields.io/github/last-commit/absinthe-graphql/absinthe)](https://github.com/absinthe-graphql/absinthe) - Fully Featured Elixir GraphQL Library.
- [graphql-elixir ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-elixir/graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-elixir/graphql)](https://github.com/graphql-elixir/graphql) - GraphQL Elixir. (No longer maintained)
- [plug_graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-elixir/plug_graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-elixir/plug_graphql)](https://github.com/graphql-elixir/plug_graphql) - Plug integration for GraphQL Elixir.
- [graphql_relay ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-elixir/graphql_relay) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-elixir/graphql_relay)](https://github.com/graphql-elixir/graphql_relay) - Relay helpers for GraphQL Elixir.
- [graphql_parser ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-elixir/graphql_parser) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-elixir/graphql_parser)](https://github.com/graphql-elixir/graphql_parser) - Elixir bindings for [libgraphqlparser ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql/libgraphqlparser) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql/libgraphqlparser)](https://github.com/graphql/libgraphqlparser)
- [graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/asonge/graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/asonge/graphql)](https://github.com/asonge/graphql) - Elixir GraphQL parser.
- [plot ![GitHub Repo Stars](https://img.shields.io/github/stars/peburrows/plot) ![GitHub last commit](https://img.shields.io/github/last-commit/peburrows/plot)](https://github.com/peburrows/plot) - GraphQL parser and resolver for Elixir.

<a name="elixir-example" />

#### Elixir Examples

- [hello_graphql_phoenix ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-elixir/hello_graphql_phoenix) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-elixir/hello_graphql_phoenix)](https://github.com/graphql-elixir/hello_graphql_phoenix) - Examples of GraphQL Elixir Plug endpoints mounted in Phoenix

<a name="haskell" />

### Haskell

- [graphql-haskell ![GitHub Repo Stars](https://img.shields.io/github/stars/jdnavarro/graphql-haskell) ![GitHub last commit](https://img.shields.io/github/last-commit/jdnavarro/graphql-haskell)](https://github.com/jdnavarro/graphql-haskell) - GraphQL AST and parser for Haskell.
- [morpheus-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/morpheusgraphql/morpheus-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/morpheusgraphql/morpheus-graphql)](https://github.com/morpheusgraphql/morpheus-graphql) - Haskell GraphQL Api, Client and Tools.

<a name="sql" />

### SQL

- [GraphpostgresQL ![GitHub Repo Stars](https://img.shields.io/github/stars/solidsnack/GraphpostgresQL) ![GitHub last commit](https://img.shields.io/github/last-commit/solidsnack/GraphpostgresQL)](https://github.com/solidsnack/GraphpostgresQL) - GraphQL for Postgres.
- [sql-to-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/rexxars/sql-to-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/rexxars/sql-to-graphql)](https://github.com/rexxars/sql-to-graphql) - Generate a GraphQL API based on your SQL database structure.
- [PostGraphile ![GitHub Repo Stars](https://img.shields.io/github/stars/graphile/postgraphile) ![GitHub last commit](https://img.shields.io/github/last-commit/graphile/postgraphile)](https://github.com/graphile/postgraphile) - Lightning-fast GraphQL APIs for PostgreSQL: highly customisable; extensible via plugins; realtime.
- [Hasura ![GitHub Repo Stars](https://img.shields.io/github/stars/hasura/graphql-engine) ![GitHub last commit](https://img.shields.io/github/last-commit/hasura/graphql-engine)](https://github.com/hasura/graphql-engine) - Hasura gives Instant Realtime GraphQL APIs over PostgreSQL. Works with an existing database too.
- [subZero](https://subzero.cloud/) - GraphQL & REST API for your database

<a name="lua" />

### Lua

- [graphql-lua ![GitHub Repo Stars](https://img.shields.io/github/stars/bjornbytes/graphql-lua) ![GitHub last commit](https://img.shields.io/github/last-commit/bjornbytes/graphql-lua)](https://github.com/bjornbytes/graphql-lua) - GraphQL for Lua.

<a name="elm" />

### Elm

- [elm-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/dillonkearns/elm-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/dillonkearns/elm-graphql)](https://github.com/dillonkearns/elm-graphql) - GraphQL for Elm.

<a name="clojure" />

### Clojure

- [graphql-clj ![GitHub Repo Stars](https://img.shields.io/github/stars/tendant/graphql-clj) ![GitHub last commit](https://img.shields.io/github/last-commit/tendant/graphql-clj)](https://github.com/tendant/graphql-clj) - A Clojure library designed to provide GraphQL implementation.
- [Lacinia ![GitHub Repo Stars](https://img.shields.io/github/stars/walmartlabs/lacinia) ![GitHub last commit](https://img.shields.io/github/last-commit/walmartlabs/lacinia)](https://github.com/walmartlabs/lacinia) - GraphQL implementation in pure Clojure.
- [graphql-query ![GitHub Repo Stars](https://img.shields.io/github/stars/district0x/graphql-query) ![GitHub last commit](https://img.shields.io/github/last-commit/district0x/graphql-query)](https://github.com/district0x/graphql-query) - Clojure(Script) GraphQL query generation.

<a name="clojure-example" />

#### Clojure Examples

- [Clojure Game Geek ![GitHub Repo Stars](https://img.shields.io/github/stars/walmartlabs/clojure-game-geek) ![GitHub last commit](https://img.shields.io/github/last-commit/walmartlabs/clojure-game-geek)](https://github.com/walmartlabs/clojure-game-geek) - Example code for the Lacinia GraphQL framework tutorial.

<a name="swift" />

### Swift

- [GraphQL ![GitHub Repo Stars](https://img.shields.io/github/stars/GraphQLSwift/GraphQL) ![GitHub last commit](https://img.shields.io/github/last-commit/GraphQLSwift/GraphQL)](https://github.com/GraphQLSwift/GraphQL) - The Swift implementation for GraphQL.

<a name="ocaml" />

### OCaml

- [ocaml-graphql-server ![GitHub Repo Stars](https://img.shields.io/github/stars/andreas/ocaml-graphql-server) ![GitHub last commit](https://img.shields.io/github/last-commit/andreas/ocaml-graphql-server)](https://github.com/andreas/ocaml-graphql-server) - GraphQL servers in OCaml.

<a name="android" />

### Android

- [apollo-android ![GitHub Repo Stars](https://img.shields.io/github/stars/apollographql/apollo-android) ![GitHub last commit](https://img.shields.io/github/last-commit/apollographql/apollo-android)](https://github.com/apollographql/apollo-android) - 📟 A strongly-typed, caching GraphQL client for Android, written in Java.
- [manifold-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/manifold-systems/manifold) ![GitHub last commit](https://img.shields.io/github/last-commit/manifold-systems/manifold)](https://github.com/manifold-systems/manifold/tree/master/manifold-deps-parent/manifold-graphql) - Comprehensive GraphQL client use. Schema-first. Type-safe GraphQL types, queries, and results, no code generators, no POJOs, no annotations. Excellent [IDE support](http://manifold.systems/images/graphql.mp4) with IntelliJ IDEA and Android Studio. See the [Java example](#example-java) below.

<a name="android-example" />

#### Android Examples

- [apollo-frontpage-android-app ![GitHub Repo Stars](https://img.shields.io/github/stars/rnitame/apollo-frontpage-android-app) ![GitHub last commit](https://img.shields.io/github/last-commit/rnitame/apollo-frontpage-android-app)](https://github.com/rnitame/apollo-frontpage-android-app) - 📄 Apollo "hello world" app, for Android.

<a name="ios" />

### iOS

- [apollo-ios ![GitHub Repo Stars](https://img.shields.io/github/stars/apollographql/apollo-ios) ![GitHub last commit](https://img.shields.io/github/last-commit/apollographql/apollo-ios)](https://github.com/apollographql/apollo-ios) - 📱 A strongly-typed, caching GraphQL client for iOS, written in Swift.
- [ApolloDeveloperKit ![GitHub Repo Stars](https://img.shields.io/github/stars/manicmaniac/ApolloDeveloperKit) ![GitHub last commit](https://img.shields.io/github/last-commit/manicmaniac/ApolloDeveloperKit)](https://github.com/manicmaniac/ApolloDeveloperKit) - Apollo Client Devtools bridge for [Apollo iOS].
- [Graphaello ![GitHub Repo Stars](https://img.shields.io/github/stars/nerdsupremacist/Graphaello) ![GitHub last commit](https://img.shields.io/github/last-commit/nerdsupremacist/Graphaello)](https://github.com/nerdsupremacist/Graphaello) - Type Safe GraphQL directly from SwiftUI.
- [GQLite iOS SDK](https://graphqlite.com/sdk-ios) - GQLite iOS SDK is a toolkit to work with GraphQL servers easily.

<a name="ios-example" />

#### iOS Examples

- [frontpage-ios-app ![GitHub Repo Stars](https://img.shields.io/github/stars/apollographql/frontpage-ios-app) ![GitHub last commit](https://img.shields.io/github/last-commit/apollographql/frontpage-ios-app)](https://github.com/apollographql/frontpage-ios-app) - �� Apollo "hello world" app, for iOS.

<a name="clojurescript" />

### ClojureScript

- [re-graph ![GitHub Repo Stars](https://img.shields.io/github/stars/oliyh/re-graph) ![GitHub last commit](https://img.shields.io/github/last-commit/oliyh/re-graph)](https://github.com/oliyh/re-graph) - A GraphQL client for ClojureScript with bindings for re-frame applications.
- [graphql-query ![GitHub Repo Stars](https://img.shields.io/github/stars/district0x/graphql-query) ![GitHub last commit](https://img.shields.io/github/last-commit/district0x/graphql-query)](https://github.com/district0x/graphql-query) - Clojure(Script) GraphQL query generation.

<a name="reasonml" />

### ReasonML

- [reason-apollo ![GitHub Repo Stars](https://img.shields.io/github/stars/apollographql/reason-apollo) ![GitHub last commit](https://img.shields.io/github/last-commit/apollographql/reason-apollo)](https://github.com/apollographql/reason-apollo) - ReasonML binding for Apollo Client.
- [ReasonQL ![GitHub Repo Stars](https://img.shields.io/github/stars/sainthkh/reasonql) ![GitHub last commit](https://img.shields.io/github/last-commit/sainthkh/reasonql)](https://github.com/sainthkh/reasonql) - Type-safe and simple GraphQL Client for ReasonML developers.
- [reason-urql ![GitHub Repo Stars](https://img.shields.io/github/stars/FormidableLabs/reason-urql) ![GitHub last commit](https://img.shields.io/github/last-commit/FormidableLabs/reason-urql)](https://github.com/FormidableLabs/reason-urql) - ReasonML binding for urql Client.

<a name="dart" />

### Dart

- [graphql-flutter ![GitHub Repo Stars](https://img.shields.io/github/stars/zino-app/graphql-flutter) ![GitHub last commit](https://img.shields.io/github/last-commit/zino-app/graphql-flutter)](https://github.com/zino-app/graphql-flutter) - A GraphQL client for Flutter.
- [Artemis ![GitHub Repo Stars](https://img.shields.io/github/stars/comigor/artemis) ![GitHub last commit](https://img.shields.io/github/last-commit/comigor/artemis)](https://github.com/comigor/artemis) - A GraphQL type and query generator for Dart/Flutter.

<a name="rust" />

### Rust

- [async-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/async-graphql/async-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/async-graphql/async-graphql)](https://github.com/async-graphql/async-graphql) - High-performance server-side library that supports all GraphQL specifications.
- [juniper ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-rust/juniper) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-rust/juniper)](https://github.com/graphql-rust/juniper) - GraphQL server library for Rust.
- [graphql-client ![GitHub Repo Stars](https://img.shields.io/github/stars/tomhoule/graphql-client) ![GitHub last commit](https://img.shields.io/github/last-commit/tomhoule/graphql-client)](https://github.com/tomhoule/graphql-client) - GraphQL client library for Rust with WebAssembly (wasm) support.
- [graphql-parser ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-rust/graphql-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-rust/graphql-parser)](https://github.com/graphql-rust/graphql-parser) - A parser, formatter and AST for the GraphQL query and schema definition language for Rust.
- [tailcall ![GitHub Repo Stars](https://img.shields.io/github/stars/tailcallhq/tailcall) ![GitHub last commit](https://img.shields.io/github/last-commit/tailcallhq/tailcall)](https://github.com/tailcallhq/tailcall) - A platform for building high-performance GraphQL backends.

<a name="rust-example" />

#### Rust Examples

- [Warp GraphQL Juniper](https://graphql-rust.github.io/)
- [Tailcall](https://tailcall.run/docs/)

<a name="d" />

### D (dlang)

- [graphqld ![GitHub Repo Stars](https://img.shields.io/github/stars/burner/graphqld) ![GitHub last commit](https://img.shields.io/github/last-commit/burner/graphqld)](https://github.com/burner/graphqld) - GraphQL server library for D.

<a name="r" />

### R (Rstat)

- [ghql ![GitHub Repo Stars](https://img.shields.io/github/stars/ropensci/ghql) ![GitHub last commit](https://img.shields.io/github/last-commit/ropensci/ghql)](https://github.com/ropensci/ghql) - General purpose GraphQL R client.
- [graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/ropensci/graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/ropensci/graphql)](https://github.com/ropensci/graphql) - Bindings to the 'libgraphqlparser' C++ library. Parses GraphQL syntax and exports the AST in JSON format.
- [gqlr ![GitHub Repo Stars](https://img.shields.io/github/stars/schloerke/gqlr) ![GitHub last commit](https://img.shields.io/github/last-commit/schloerke/gqlr)](https://github.com/schloerke/gqlr) - R GraphQL Implementation.

<a name="julia" />

### Julia

- [Diana.jl ![GitHub Repo Stars](https://img.shields.io/github/stars/codeneomatrix/Diana.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/codeneomatrix/Diana.jl)](https://github.com/codeneomatrix/Diana.jl) - A Julia GraphQL client/server implementation.
- [GraphQLClient.jl ![GitHub Repo Stars](https://img.shields.io/github/stars/DeloitteDigitalAPAC/GraphQLClient.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/DeloitteDigitalAPAC/GraphQLClient.jl)](https://github.com/DeloitteDigitalAPAC/GraphQLClient.jl) - A Julia GraphQL client for seamless integration with a server.

<a name="crystal" />

### Crystal

- [graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-crystal/graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-crystal/graphql)](https://github.com/graphql-crystal/graphql) - GraphQL server library.
- [graphql-crystal ![GitHub Repo Stars](https://img.shields.io/github/stars/ziprandom/graphql-crystal) ![GitHub last commit](https://img.shields.io/github/last-commit/ziprandom/graphql-crystal)](https://github.com/ziprandom/graphql-crystal) - library inspired by [graphql-ruby ![GitHub Repo Stars](https://img.shields.io/github/stars/rmosolgo/graphql-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/rmosolgo/graphql-ruby)](https://github.com/rmosolgo/graphql-ruby) & [go-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/playlyfe/go-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/playlyfe/go-graphql)](https://github.com/playlyfe/go-graphql) & [graphql-parser ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-dotnet/parser) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-dotnet/parser)](https://github.com/graphql-dotnet/parser).
- [crystal-gql ![GitHub Repo Stars](https://img.shields.io/github/stars/itsezc/crystal-gql) ![GitHub last commit](https://img.shields.io/github/last-commit/itsezc/crystal-gql)](https://github.com/itsezc/crystal-gql) - GraphQL client shard inspired by Apollo client.
- [graphql.cr ![GitHub Repo Stars](https://img.shields.io/github/stars/garymardell/graphql.cr) ![GitHub last commit](https://img.shields.io/github/last-commit/garymardell/graphql.cr)](https://github.com/garymardell/graphql.cr) - GraphQL shard.

### Ballerina

- [graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/ballerina-platform/module-ballerina-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/ballerina-platform/module-ballerina-graphql)](https://github.com/ballerina-platform/module-ballerina-graphql) - Ballerina standard library for GraphQL. This library provides a GraphQL client and server implementations including builtin support for GraphQL subscriptions.
- [graphql CLI ![GitHub Repo Stars](https://img.shields.io/github/stars/ballerina-platform/graphql-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/ballerina-platform/graphql-tools)](https://github.com/ballerina-platform/graphql-tools) - A CLI tool to generate Ballerina code from GraphQL schema and GraphQL schema from Ballerina code. It also provides functionality to generate usage-specific GraphQL clients using GraphQL schemas and documents.

#### Ballerina Samples

- [Ballerina GraphQL Examples ![GitHub Repo Stars](https://img.shields.io/github/stars/ballerina-platform/module-ballerina-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/ballerina-platform/module-ballerina-graphql)](https://github.com/ballerina-platform/module-ballerina-graphql/tree/master/examples)
- [Convert Weather REST API to GraphQL API ![GitHub Repo Stars](https://img.shields.io/github/stars/ThisaruGuruge/weather-rest-api-to-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/ThisaruGuruge/weather-rest-api-to-graphql)](https://github.com/ThisaruGuruge/weather-rest-api-to-graphql)

<a name="tools" />

## Tools

### Tools - Editors & IDEs & Explorers

- [GraphiQL ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql/graphiql) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql/graphiql)](https://github.com/graphql/graphiql) - An in-browser IDE for exploring GraphQL.
- [GraphQL Editor ![GitHub Repo Stars](https://img.shields.io/github/stars/graphql-editor/graphql-editor) ![GitHub last commit](https://img.shields.io/github/last-commit/graphql-editor/graphql-editor)](https://github.com/graphql-editor/graphql-editor) - Visual Editor & GraphQL IDE.
- [GraphQL Voyager ![GitHub Repo Stars](https://img.shields.io/github/stars/APIs-guru/graphql-voyager) ![GitHub last commit](https://img.shields.io/github/last-commit/APIs-guru/graphql-voyager)](https://github.com/APIs-guru/graphql-voyager) - Represent any GraphQL API as an interactive graph.
- [Altair GraphQL Client ![GitHub Repo Stars](https://img.shields.io/github/stars/altair-graphql/altair) ![GitHub last commit](https://img.shields.io/github/last-commit/altair-graphql/altair)](https://github.com/altair-graphql/altair) - A beautiful feature-rich GraphQL Client for all platforms.
- [Brangr ![GitHub Repo Stars](https://img.shields.io/github/stars/networkimprov/brangr) ![GitHub last commit](https://img.shields.io/github/last-commit/networkimprov/brangr)](https://github.com/networkimprov/brangr) - A unique, user-friendly data browser/viewer for any GraphQL service, with attractive result layouts.
- [Insomnia](https://insomnia.rest/) - A full-featured API client with first-party GraphQL query editor.
- [Postman](https://learning.postman.com/docs/sending-requests/supported-api-frameworks/graphql/) - An HTTP Client that supports editing GraphQL queries.
- [Bruno ![GitHub Repo Stars](https://img.shields.io/github/stars/usebruno/bruno) ![GitHub last commit](https://img.shields.io/github/last-commit/usebruno/bruno)](https://github.com/usebruno/bruno) - Fast, open source API client, which stores collections offline-only in a Git-friendly plain text markup language.
- [Escape GraphMan ![GitHub Repo Stars](https://img.shields.io/github/stars/Escape-Technologies/graphman) ![GitHub last commit](https://img.shields.io/github/last-commit/Escape-Technologies/graphman)](https://github.com/Escape-Technologies/graphman) - Generate a complete Postman collection from a GraphQL endpoint.
- [Apollo Sandbox](https://sandbox.apollo.dev/) - The quickest way to navigate and test your GraphQL endpoints.
- [GraphQL Birdseye ![GitHub Repo Stars](https://img.shields.io/github/stars/Novvum/graphql-birdseye) ![GitHub last commit](https://img.shields.io/github/last-commit/Novvum/graphql-birdseye)](https://github.com/Novvum/graphql-birdseye) – View any GraphQL schema as a dynamic and interactive graph.
- [AST Explorer](https://astexplorer.net/) - Select "GraphQL" at the top, explore the GraphQL AST and highlight different parts by clicking in the query.
- [Firecamp - GraphQL Playground](https://firecamp.io/graphql) - The fastest collaborative GraphQL playground.
- [CraftQL ![GitHub Repo Stars](https://img.shields.io/github/stars/yamafaktory/craftql) ![GitHub last commit](https://img.shields.io/github/last-commit/yamafaktory/craftql)](https://github.com/yamafaktory/craftql) - A CLI tool to visualize GraphQL schemas and to output a graph data structure as a graphviz .dot format.
- [gqt ![GitHub Repo Stars](https://img.shields.io/github/stars/eerimoq/gqt) ![GitHub last commit](https://img.shields.io/github/last-commit/eerimoq/gqt)](https://github.com/eerimoq/gqt) - Build and execute GraphQL queries in the terminal.

<a name="tool-testing" />

### Tools - Testing

- [Step CI](https://stepci.com) - Open-Source API Testing and Monitoring with GraphQL support
- [graphql-to-karate ![GitHub Repo Stars](https://img.shields.io/github/stars/wbaldoumas/graphql-to-karate) ![GitHub last commit](https://img.shields.io/github/last-commit/wbaldoumas/graphql-to-karate)](https://github.com/wbaldoumas/graphql-to-karate) - Generate Karate API tests from your GraphQL schemas

<a name="tool-security" />

### Tools - Security

- [GraphCrawler - The all-in-one GraphQL Security toolkit ![GitHub Repo Stars](https://img.shields.io/github/stars/gsmith257-cyber/GraphCrawler) ![GitHub last commit](https://img.shields.io/github/last-commit/gsmith257-cyber/GraphCrawler)](https://github.com/gsmith257-cyber/GraphCrawler) - The all-in-one automated penetration tester toolkit for GraphQL, written in Python
- [Escape - The GraphQL Security Scanner](https://graphql.security/) - One-click security scan of your GraphQL endpoints. Free, no login required.
- [Escape Graphinder - GraphQL Subdomain Enumeration ![GitHub Repo Stars](https://img.shields.io/github/stars/Escape-Technologies/graphinder) ![GitHub last commit](https://img.shields.io/github/last-commit/Escape-Technologies/graphinder)](https://github.com/Escape-Technologies/graphinder) – Blazing fast GraphQL endpoints finder using subdomain enumeration, scripts analysis and bruteforce.
- [StackHawk - GraphQL Vulnerability Scanner](https://www.stackhawk.com/blog/automated-graphql-security-testing) - [StackHawk](https://www.stackhawk.com)
- [Tinfoil Security - GraphQL Security Scanner](https://www.tinfoilsecurity.com/blog/graphql-security-scanning) - [Tinfoil Security](https://www.tinfoilsecurity.com/solutions/api-scanner)
- [InQL Scanner ![GitHub Repo Stars](https://img.shields.io/github/stars/doyensec/inql) ![GitHub last commit](https://img.shields.io/github/last-commit/doyensec/inql)](https://github.com/doyensec/inql) - A Burp Extension for GraphQL Security Testing
- [GraphQL Raider](https://portswigger.net/bappstore/4841f0d78a554ca381c65b26d48207e6) [BurpSuite](https://portswigger.net/burp)
- [WAF for graphQL](https://lab.wallarm.com/api-security-solution/) - Web Application Firewall for graphQL APIs
- [GraphQL Intruder ![GitHub Repo Stars](https://img.shields.io/github/stars/davinerd/gql_intruder) ![GitHub last commit](https://img.shields.io/github/last-commit/davinerd/gql_intruder)](https://github.com/davinerd/gql_intruder) - Plugin based python script to perform GraphQL vulnerability assessment.
- [GraphQL Cop ![GitHub Repo Stars](https://img.shields.io/github/stars/dolevf/graphql-cop) ![GitHub last commit](https://img.shields.io/github/last-commit/dolevf/graphql-cop)](https://github.com/dolevf/graphql-cop) - Security Audit Utility for GraphQL
- [GraphQLer ![GitHub Repo Stars](https://img.shields.io/github/stars/omar2535/GraphQLer) ![GitHub last commit](https://img.shields.io/github/last-commit/omar2535/GraphQLer)](https://github.com/omar2535/GraphQLer) - Dependency-aware dynamic GraphQL testing tool

### Tools - Browser Extensions

- [Apollo Client Developer Tools ![GitHub Repo Stars](https://img.shields.io/github/stars/apollographql/apollo-client-devtools) ![GitHub last commit](https://img.shields.io/github/last-commit/apollographql/apollo-client-devtools)](https://github.com/apollographql/apollo-client-devtools) - GraphQL debugging tools for Apollo Client in the Chrome developer console
- [GraphQL Network Inspector](https://chrome.google.com/webstore/detail/graphql-network-inspector/ndlbedplllcgconngcnfmkadhokfaaln) - A simple and clean chrome dev-tools extension for GraphQL network inspection.

### Tools - Prototyping

- [GraphQL Faker ![GitHub Repo Stars](https://img.shields.io/github/stars/APIs-guru/graphql-faker) ![GitHub last commit](https://img.shields.io/github/last-commit/APIs-guru/graphql-faker)](https://github.com/APIs-guru/graphql-faker) - 🎲 Mock or extend your GraphQL API with faked data. No coding required.
- [GraphQL Designer](http://graphqldesigner.com/) - A developer's web-app tool to rapidly prototype a full stack CRUD implementation of GraphQL with React.

### Tools - Docs

- [graphdoc ![GitHub Repo Stars](https://img.shields.io/github/stars/2fd/graphdoc) ![GitHub last commit](https://img.shields.io/github/last-commit/2fd/graphdoc)](https://github.com/2fd/graphdoc) - Static page generator for documenting GraphQL Schema.
- [gqldoc ![GitHub Repo Stars](https://img.shields.io/github/stars/Code-Hex/gqldoc) ![GitHub last commit](https://img.shields.io/github/last-commit/Code-Hex/gqldoc)](https://github.com/Code-Hex/gqldoc) - The easiest way to make API documents for GraphQL.
- [spectaql ![GitHub Repo Stars](https://img.shields.io/github/stars/anvilco/spectaql) ![GitHub last commit](https://img.shields.io/github/last-commit/anvilco/spectaql)](https://github.com/anvilco/spectaql) - Autogenerate static GraphQL API documentation.
- [graphql-markdown](https://graphql-markdown.github.io/) - Flexible documentation for GraphQL powered with Docusaurus.

### Tools - Editor Plugins

- [Apollo GraphQL VSCode Extension](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo) - Rich editor support for GraphQL client and server development that seamlessly integrates with the Apollo platform
- [js-graphql-intellij-plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/jimkyndemeyer/js-graphql-intellij-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/jimkyndemeyer/js-graphql-intellij-plugin)](https://github.com/jimkyndemeyer/js-graphql-intellij-plugin/) - GraphQL language support for IntelliJ IDEA and WebStorm, including Relay.QL tagged templates in JavaScript and TypeScript.
- [vim-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/jparise/vim-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/jparise/vim-graphql)](https://github.com/jparise/vim-graphql) - A Vim plugin that provides GraphQL file detection and syntax highlighting.
- [Apollo Workbench](https://marketplace.visualstudio.com/items?itemName=apollographql.apollo-workbench) - Tooling to help you develop and mock federated schemas using Apollo Federation.
- [graphql-autocomplete ![GitHub Repo Stars](https://img.shields.io/github/stars/orionsoft/atom-graphql-autocomplete) ![GitHub last commit](https://img.shields.io/github/last-commit/orionsoft/atom-graphql-autocomplete)](https://github.com/orionsoft/atom-graphql-autocomplete) - Autocomplete and lint from a GraphQL endpoint in Atom.

### Tools - Miscellaneous

- [graphql-code-generator ![GitHub Repo Stars](https://img.shields.io/github/stars/dotansimha/graphql-code-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/dotansimha/graphql-code-generator)](https://github.com/dotansimha/graphql-code-generator) - GraphQL code generator based on schema and documents.
- [swagger-to-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/yarax/swagger-to-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/yarax/swagger-to-graphql)](https://github.com/yarax/swagger-to-graphql) - GraphQL types builder based on REST API described in Swagger. Allows to migrate to GraphQL from REST for 5 minutes
- [ts-graphql-plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/Quramy/ts-graphql-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/Quramy/ts-graphql-plugin)](https://github.com/Quramy/ts-graphql-plugin) - A language service plugin complete and validate GraphQL query in TypeScript template strings.
- [apollo-tracing ![GitHub Repo Stars](https://img.shields.io/github/stars/apollographql/apollo-tracing) ![GitHub last commit](https://img.shields.io/github/last-commit/apollographql/apollo-tracing)](https://github.com/apollographql/apollo-tracing) - GraphQL extension that enables you to easily get resolver-level performance information as part of a GraphQL response.
- [json-graphql-server ![GitHub Repo Stars](https://img.shields.io/github/stars/marmelab/json-graphql-server) ![GitHub last commit](https://img.shields.io/github/last-commit/marmelab/json-graphql-server)](https://github.com/marmelab/json-graphql-server) - Get a full fake GraphQL API with zero coding in less than 30 seconds, based on a JSON data file.
- [Prisma ![GitHub Repo Stars](https://img.shields.io/github/stars/prisma/prisma) ![GitHub last commit](https://img.shields.io/github/last-commit/prisma/prisma)](https://github.com/prisma/prisma) - Turn your database into a GraphQL API. Prisma lets you design your data model and have a production ready GraphQL API online in minutes.
- [Typetta ![GitHub Repo Stars](https://img.shields.io/github/stars/twinlogix/typetta) ![GitHub last commit](https://img.shields.io/github/last-commit/twinlogix/typetta)](https://github.com/twinlogix/typetta) - Node.js ORM written in TypeScript for type lovers. Typetta is the perfect ORM for the GraphQL + NodeJS + Typescript stack.
- [tuql ![GitHub Repo Stars](https://img.shields.io/github/stars/bradleyboy/tuql) ![GitHub last commit](https://img.shields.io/github/last-commit/bradleyboy/tuql)](https://github.com/bradleyboy/tuql) - Automatically create a GraphQL server from any sqlite database.
- [Bit ![GitHub Repo Stars](https://img.shields.io/github/stars/teambit/bit) ![GitHub last commit](https://img.shields.io/github/last-commit/teambit/bit)](https://github.com/teambit/bit) - Organize GraphQL API as components to be consumed with NPM or modified from any project, [example-explanation](https://hackernoon.com/make-your-graphql-api-easier-to-adopt-through-components-74b022f195c1)).
- [openapi-to-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/ibm/openapi-to-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/ibm/openapi-to-graphql)](https://github.com/ibm/openapi-to-graphql) - Take any OpenAPI Specification (OAS) or swagger and create a GraphQL interface - Two minute video and resources [here](https://developer.ibm.com/open/projects/openapi-to-graphql/)
- [Retool](https://retool.com/) – Internal tools builder on top of your GraphQL APIs + GraphQL IDE with a schema explorer.
- [dataloader-codegen ![GitHub Repo Stars](https://img.shields.io/github/stars/Yelp/dataloader-codegen) ![GitHub last commit](https://img.shields.io/github/last-commit/Yelp/dataloader-codegen)](https://github.com/Yelp/dataloader-codegen) - An opinionated JavaScript library for automatically generating predictable, type safe DataLoaders over a set of resources (e.g. HTTP endpoints).
- [raphql-inspector ![GitHub Repo Stars](https://img.shields.io/github/stars/kamilkisiela/graphql-inspector) ![GitHub last commit](https://img.shields.io/github/last-commit/kamilkisiela/graphql-inspector)](https://github.com/kamilkisiela/graphql-inspector): alidate schema, get schema change notifications, validate operations, find breaking changes, look for similar types, schema coverage.
- [amplication ![GitHub Repo Stars](https://img.shields.io/github/stars/amplication/amplication) ![GitHub last commit](https://img.shields.io/github/last-commit/amplication/amplication)](https://github.com/amplication/amplication): Amplication is an open‑source low code development tool. It builds database applications with REST API and GraphQL for CRUD with relations, sorting, filtering, pagination.
- [Blendbase ![GitHub Repo Stars](https://img.shields.io/github/stars/blendbase/blendbase) ![GitHub last commit](https://img.shields.io/github/last-commit/blendbase/blendbase)](https://github.com/blendbase/blendbase): Single open-source GraphQL API to connect CRMs to your SaaS. Query any customer CRM system (Salesforce, Hubspot and more) with a single API query from your SaaS app.
- [microfiber ![GitHub Repo Stars](https://img.shields.io/github/stars/anvilco/graphql-introspection-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/anvilco/graphql-introspection-tools)](https://github.com/anvilco/graphql-introspection-tools) - Query and manipulate GraphQL introspection query results in useful ways.
- [ILLA Cloud](https://www.illacloud.com/) – Open-source low-code tool building platform provides an easy way to integrate with GraphQL with minimal configurations
- [DronaHQ](https://www.dronahq.com/) - Build internal tools, dashboards, admin panel on top of GraphQL data in minutes
- [Dynaboard](https://dynaboard.com) - Generate low-code web apps from any GraphQL API using AI.
  <a name="databases" />

## Databases

- [Cube](https://cube.dev) - [Headless BI](https://cube.dev/blog/headless-bi) for building data applications with SQL, REST, and [GraphQL API](https://cube.dev/docs/backend/graphql). Connect any database or data warehouse and instantly get a GraphQL API with sub-second latency on top of it. - [Source Code ![GitHub Repo Stars](https://img.shields.io/github/stars/cube-js/cube.js) ![GitHub last commit](https://img.shields.io/github/last-commit/cube-js/cube.js)](https://github.com/cube-js/cube.js)
- [Dgraph](https://dgraph.io/) - Scalable, distributed, low latency, high throughput Graph database with GraphQL as the query language
- [EdgeDB](https://edgedb.com/) - The next generation object-relational database with native GraphQL support.
- [FaunaDB](https://fauna.com) - Relational NoSQL database with [GraphQL schema import.](https://fauna.com/blog/getting-started-with-graphql-part-1-importing-and-querying-your-schema) Supports joins, indexes, and multi-region ACID transactions with serverless pay-per-use pricing.
- [ArangoDB](https://arangodb.com/) - Native multi-model database with [GraphQL integration](https://www.arangodb.com/docs/3.4/foxx-reference-modules-graph-ql.html) via the built-in [Foxx Microservices Framework](https://www.arangodb.com/docs/stable/foxx.html).
- [Weaviate ![GitHub Repo Stars](https://img.shields.io/github/stars/semi-technologies/weaviate) ![GitHub last commit](https://img.shields.io/github/last-commit/semi-technologies/weaviate)](https://github.com/semi-technologies/weaviate) - Weaviate is a cloud-native, modular, real-time vector search engine with a [GraphQL interface](https://weaviate.io/developers/weaviate/api/graphql) built to scale your machine learning models.

<a name="services" />

## Services

- [AWS AppSync](https://aws.amazon.com/appsync/) - Scalable managed GraphQL service with subscriptions for building real-time and offline-first apps
- [FakeQL](https://fakeql.com/) - GraphQL API mocking as a service ... because GraphQL API mocking should be easy!
- [Moesif API Analytics](https://www.moesif.com/features/graphql-analytics) - A GraphQL analaytics and monitoring service to find functional and performance issues.
- [Booster framework](https://booster.cloud/) - An open-source framework that makes you _completely_ forget about infrastructure and allows you to focus exclusively on your business logic. It autogenerates a GraphQL API for your models, supporting mutations, queries, and subscriptions.
- [Hypi](https://hypi.io/) - Low-code, scalable, serverless backend as a service. Your GraphQL & REST over GraphQL backend in minutes.
- [Nhost](https://nhost.io/) - Open source Firebase alternative with GraphQL
- [Saleor ![GitHub Repo Stars](https://img.shields.io/github/stars/mirumee/saleor) ![GitHub last commit](https://img.shields.io/github/last-commit/mirumee/saleor)](https://github.com/mirumee/saleor/) - GraphQL-first headless e-commerce platform.
- [Stargate](https://stargate.io/docs/latest/quickstart/qs-graphql-cql-first.html) - Open source data gateway currently supporting Apache Cassandra&reg; and DataStax Enterprise.
- [Grafbase](https://grafbase.com) - Instant GraphQL APIs for any data source.

### CDN

- [GraphCDN](https://graphcdn.io/) - GraphQL CDN for caching GraphQL APIs.

### CMS

- [DatoCMS](https://www.datocms.com/) - CDN-based GraphQL based Headless Content Management System.
- [Apito](https://apito.io/) - A Cloud Based Headless CMS with CDN, Webhooks, Team Collaborations, Content Revision, Cloud Functions.
- [Hygraph](https://hygraph.com/) - Build Scalable Content Experiences.
- [Cosmic](https://www.cosmicjs.com/) - GraphQL-powered Headless CMS and API toolkit.
- [Graphweaver](https://graphweaver.com/) - Turn multiple datasources into a single GraphQL API.

<a name="book" />

## Books

- [The GraphQL Guide](https://graphql.guide) by John Resig and Loren Sands-Ramshaw
- [Craft GraphQL APIs in Elixir with Absinthe](https://pragprog.com/book/wwgraphql/craft-graphql-apis-in-elixir-with-absinthe) by Bruce Williams and Ben Wilson
- [The Road to GraphQL](https://www.roadtographql.com/)
- [Learning GraphQL and Relay](https://www.packtpub.com/web-development/learning-graphql-and-relay) by Samer Buna
- [Practical GraphQL](https://leanpub.com/book-graphql) by Daniel Schmitz
- [Production Ready GraphQL](https://book.productionreadygraphql.com) by Marc-André Giroux
- [Full Stack GraphQL Applications](https://www.manning.com/books/fullstack-graphql-applications) by William Lyon

<a name="video" />

## Videos

- [GraphQL: The Documentary](https://www.youtube.com/watch?v=783ccP__No8)
- [Zero to GraphQL in 30 Minutes](https://www.youtube.com/embed/UBGzsb2UkeY)
- [Data fetching for React applications at Facebook](https://www.youtube.com/watch?v=9sc8Pyc51uU)
- [React Native & Relay: Bringing Modern Web Techniques to Mobile](https://www.youtube.com/watch?v=X6YbAKiLCLU)
- [Exploring GraphQL](https://www.youtube.com/watch?v=WQLzZf34FJ8)
- [Creating a GraphQL Server](https://www.youtube.com/watch?v=gY48GW87Feo)
- [GraphQL at The Financial Times](https://www.youtube.com/watch?v=S0s935RKKB4)
- [Relay: An Application Framework For React](https://www.youtube.com/watch?v=IrgHurBjQbg)
- [Building and Deploying Relay with Facebook](https://www.youtube.com/watch?t=643&v=Pxdgu2XIAAg)
- [Introduction to GraphQL](https://vimeo.com/144817545)
- [Exploring GraphQL@Scale](https://www.youtube.com/watch?v=_9RgHXqH8J0)
- [What's Next for Phoenix by Chris McCord](https://www.youtube.com/watch?v=IMUpYOc9z3c&feature=youtu.be)
- [GraphQL with Nick Schrock](https://www.youtube.com/watch?v=Ed6oJXKt3-M)
- [Build a GraphQL server for Node.js using PostgreSQL/MySQL](https://www.youtube.com/watch?v=DNPVqK_woRQ)
- [GraphQL server tutorial for Node.js with SQL, MongoDB and REST](https://www.youtube.com/watch?v=PHabPhgRUuU)
- [JavaScript Air Episode 023: Transitioning from REST to GraphQL](https://www.youtube.com/watch?v=ENqDNIp1Nd8)
- [GraphQL Future at react-europe 2016](https://www.youtube.com/watch?v=ViXL0YQnioU)
- [GraphQL at Facebook at react-europe 2016](https://www.youtube.com/watch?v=etax3aEe2dA)
- [Building native mobile apps with GraphQL at react-europe 2016](https://www.youtube.com/watch?v=z5rz3saDPJ8)
- [Build a GraphQL Server](https://www.youtube.com/watch?v=PEcJxkylcRM&list=PLillGF-RfqbYZty73_PHBqKRDnv7ikh68)
- [GraphQL Tutorial](https://www.youtube.com/watch?v=Y0lDGjwRYKw&list=PL4cUxeGkcC9iK6Qhn-QLcXCXPQUov1U7f)
- [Five years of GraphQL](https://www.youtube.com/watch?v=s8meG38iZAM)
- [GraphQL is for Everyone by Moon Highway](https://moonhighway.teachable.com/p/graphql-is-for-everyone)

<a name="podcast" />

## Podcasts

- [GraphQL.FM](https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy8zNjE5NmViMC9wb2RjYXN0L3Jzcw==) by Marc-Andre Giroux and Tony Ghita.

<a name="style-guide" />

## Style Guides

- [Shopify GraphQL Design Tutorial ![GitHub Repo Stars](https://img.shields.io/github/stars/Shopify/graphql-design-tutorial) ![GitHub last commit](https://img.shields.io/github/last-commit/Shopify/graphql-design-tutorial)](https://github.com/Shopify/graphql-design-tutorial) - This tutorial was originally created by Shopify for internal purposes. It's based on lessons learned from creating and evolving production schemas at Shopify over almost 3 years.
- [GitLab GraphQL API Style Guide](https://docs.gitlab.com/ee/development/api_graphql_styleguide.html) - This document outlines the style guide for the GitLab GraphQL API.
- [Yelp GraphQL Guidelines](https://yelp.github.io/graphql-guidelines/) - This repo contains documentation and guidelines for a standardized and mostly reasonable approach to GraphQL (at Yelp).
- [Principled GraphQL](https://principledgraphql.com/) - Apollo's 10 GraphQL Principles, broken out into three categories, in a format inspired by the Twelve Factor App.

<a name="blogs" />

## Blogs

- [Official GraphQL blog](https://graphql.org/blog/)
- [Building Apollo](https://blog.apollographql.com/)
- [The Guild blog](https://medium.com/the-guild)
- [Production Ready GraphQL blog](https://productionreadygraphql.com)

<a name="security-blog" />

### Blogs - Security

- [Escape - The GraphQL Security Blog](https://blog.escape.tech) - Learn about GraphQL security, performance, testing and building production-ready APIs with the latest tools and best practices of the GraphQL ecosystem.
- [9 GraphQL Security Best Practices](https://blog.escape.tech/9-graphql-security-best-practices/)
- [Discovering GraphQL Endpoints and SQLi Vulnerabilities](https://medium.com/@localh0t/discovering-graphql-endpoints-and-sqli-vulnerabilities-5d39f26cea2e)
- [Securing GraphQL API](https://lab.wallarm.com/securing-graphql-api/)
- [Security Points to Consider Before Implementing GraphQL](https://nordicapis.com/security-points-to-consider-before-implementing-graphql/)
- [GraphQL for Pentesters](https://www.acceis.fr/graphql-for-pentesters/) - Introduction to Basic Concepts, Security Considerations & Reconnaissance, Vulnerabilities and Attacks, Offensive Tools.
- [Authorization Patterns in GraphQL](https://www.osohq.com/post/graphql-authorization)

<a name="post" />

## Posts

- [GraphQL federation example with Apollo Federation and Apollo GraphOS](https://cube.dev/blog/graphql-federation-example-with-apollo-federation-and-apollo-graphos)
- [GraphQL federation with Hasura GraphQL Engine and Cube](https://cube.dev/blog/graphql-federation-with-hasura-graphql-engine)
- [Using DataLoader to batch GraphQL requests](https://medium.com/@gajus/using-dataloader-to-batch-requests-c345f4b23433)
- [Introducing Relay and GraphQL](https://reactjs.org/blog/2015/02/20/introducing-relay-and-graphql.html)
- [GraphQL Introduction](https://reactjs.org/blog/2015/05/01/graphql-introduction.html)
- [Unofficial Relay FAQ](https://gist.github.com/wincent/598fa75e22bdfa44cf47)
- [Your First GraphQL Server](https://medium.com/the-graphqlhub/your-first-graphql-server-3c766ab4f0a2)
- [GraphQL Overview - Getting Started with GraphQL and Node.js](https://blog.risingstack.com/graphql-overview-getting-started-with-graphql-and-nodejs/)
- [4 Reasons you should try out GraphQL](https://medium.freecodecamp.org/introduction-to-graphql-1d8011b80159)
- [Moving from REST to GraphQL](https://medium.com/@frikille/moving-from-rest-to-graphql-e3650b6f5247)
- [Writing a Basic API with GraphQL](http://davidandsuzi.com/writing-a-basic-api-with-graphql/)
- [Building a GraphQL Server with Node.js and SQL](https://www.reindex.io/blog/building-a-graphql-server-with-node-js-and-sql/)
- [GraphQL at The Financial Times](https://www.slideshare.net/LondonReact/graph-ql)
- [From REST to GraphQL](https://jacobwgillespie.com/2015-10-09-from-rest-to-graphql)
- [GraphQL: A data query language](https://graphql.org/blog/graphql-a-query-language/)
- [Subscriptions in GraphQL and Relay](https://graphql.org/blog/subscriptions-in-graphql-and-relay/)
- [Relay 101: Building A Hacker News Client](https://medium.com/@clayallsopp/relay-101-building-a-hacker-news-client-bb8b2bdc76e6)
- [GraphQL Shorthand Notation Cheatsheet](https://wehavefaces.net/graphql-shorthand-notation-cheatsheet-17cd715861b6)
- [The GitHub GraphQL API](https://githubengineering.com/the-github-graphql-api/)
- [Github GraphQL API React Example](https://medium.com/@katopz/github-graphql-api-react-example-eace824d7b61)
- [Testing a GraphQL Server using Jest](https://medium.com/entria/testing-a-graphql-server-using-jest-4e00d0e4980e)
- [How to implement viewerCanSee in GraphQL](https://medium.com/entria/how-to-implement-viewercansee-in-graphql-78cc48de7464)
- [Preventing traversal attacks on your GraphQL API](https://blog.morethancode.dev/preventing-traversal-attacks-in-your-graphql-api/)
- [Mock your GraphQL server realistically with faker.js](https://dev.to/yvonnickfrin/mock-your-graphql-server-realistically-with-faker-js-25oo)
- [Create an infinite loading list with React and GraphQL](https://dev.to/yvonnickfrin/create-an-infinite-loading-list-with-react-and-graphql-19hh)
- [REST vs GraphQL](https://www.moesif.com/blog/technical/graphql/REST-vs-GraphQL-APIs-the-good-the-bad-the-ugly/)
- [Authentication and Authorization for GraphQL APIs](https://www.moesif.com/blog/technical/api-design/Steps-to-Building-Authentication-and-Authorization-For-GraphQL-APIs/)
- [Build a GraphQL API with Siler on top of Swoole](https://www.swoole.co.uk/article/Build-a-GraphQL-API-on-top-of-Swoole)
- [Fluent GraphQL clients: how to write queries like a boss](https://hasura.io/blog/fluent-graphql-clients-how-to-write-queries-like-a-boss/)
- [Level up your serverless game with a GraphQL data-as-a-service layer](https://hasura.io/blog/level-up-your-serverless-game-with-a-graphql-data-as-a-service-layer/)
- [A deep-dive into Relay, the friendly & opinionated GraphQL client](https://hasura.io/blog/deep-dive-into-relay-graphql-client/)
- [make your graphql api easier to adopt through components](https://hackernoon.com/make-your-graphql-api-easier-to-adopt-through-components-74b022f195c1)
- [Undocumented: keeping parts of your GraphQL schema hidden from introspection](https://www.useanvil.com/blog/engineering/undocumented-directive/)
- [GraphQL Subscriptions with Apache Kafka in Ballerina](https://medium.com/ballerina-techblog/graphql-subscriptions-with-apache-kafka-in-ballerina-b3c296d333cd)
- [How to Test your GraphQL Endpoints](https://escape.tech/blog/8-most-common-graphql-vulnerabilities/)
- [Why Automatic Persisted Queries Don't Scale](https://blog.tailcall.run/the-truth-about-scaling-automatic-persisted-queries/)

<a name="tutorials" />

## Tutorials

- [How to GraphQL](https://www.howtographql.com) - Fullstack Tutorial Website with Tracks for all Major Frameworks & Languages including React, Apollo, Relay, JavaScript, Ruby, Java, Elixir and many more.
- [Apollo Odyssey](https://odyssey.apollographql.com/) - Apollo's free interactive learning platform.
- [learning-graphql ![GitHub Repo Stars](https://img.shields.io/github/stars/mugli/learning-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/mugli/learning-graphql)](https://github.com/mugli/learning-graphql) - An attempt to learn GraphQL.
- [GraphQL Roadmap](https://roadmap.sh/graphql) - Step by step guide to learn GraphQL.
- [GraphQL Security Academy](https://escape.tech/academy/) - a free and interactive platform to learn GraphQL security: how to find, exploit and fix GraphQL vulnerabilities.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Chen-Tsu Lin](https://github.com/chentsulin) has waived all copyright and related or neighboring rights to this work.
