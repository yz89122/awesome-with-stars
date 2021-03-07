# Awesome Meteor [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

A curated list of awesome Meteor Packages, libraries and software.

The official Meteor resources page can be found [here](https://www.meteor.com/tools/resources)

- [Awesome Meteor](#awesome-meteor)
  - [Getting Started](#getting-started)
  - [Collections](#collections)
  - [Forms and Templates](#forms-and-templates)
  - [Users and Authentication](#users-and-authentication)
  - [REST](#rest)
  - [Files](#files)
  - [Routers](#routers)
  - [Debugging Tools](#debugging-tools)
  - [Editor Plugins](#editor-plugins)
  - [Search, sort and paginate](#search-sort-paginate)
  - [Mobile](#mobile)
  - [Offline](#offline)
  - [Testing](#testing)
  - [SEO](#seo)
  - [Data Visualization](#data-visualization)
  - [Analytics](#analytics)
  - [Cron Jobs](#cron-jobs)
  - [Administration](#administration)
  - [Performance](#performance)
  - [Monitoring](#monitoring)
  - [Deployment](#deployment)
    - [Docker Images](#docker-images)
  - [Front End Frameworks](#front-end-frameworks)
  - [Alternative Databases](#alternative-databases)
  - [Boilerplate](#boilerplate)
  - [Open Source Apps](#open-source-apps)
  - [Internationalization](#internationalization)
  - [Scaffolding](#scaffolding)
  - [Tooling](#tooling)
- [Resources](#resources)
  - [Books](#books)
  - [Courses](#courses)
    - [Free](#free)
    - [Paid](#paid)
  - [Tutorials](#tutorials)
  - [Blogs](#blogs)
  - [Websites](#websites)
  - [Q&A](#q&a)
  - [Community Newsletters](#community-newsletters)	
  - [Twitter](#twitter)
  - [Related](#related)
- [Built With Meteor](#built-with-meteor)
- [Contributing](#contributing)

---

## Getting Started

_Where to start_

- [Official Meteor tutorial](https://www.meteor.com/tutorials/react/creating-an-app)
- [Official Guide](http://guide.meteor.com/)

## Collections

_Helpers and expensions for collections_

- [simple-schema ![GitHub Repo stars](https://img.shields.io/github/stars/aldeed/simple-schema-js) ![GitHub last commit](https://img.shields.io/github/last-commit/aldeed/simple-schema-js)](https://github.com/aldeed/simple-schema-js) - A JavaScript schema validation package that supports direct validation of MongoDB update modifier objects.
- [aldeed:collection2 ![GitHub Repo stars](https://img.shields.io/github/stars/aldeed/meteor-collection2) ![GitHub last commit](https://img.shields.io/github/last-commit/aldeed/meteor-collection2)](https://github.com/aldeed/meteor-collection2/) - Automatic validation of insert and update operations on the client and server.
- [dburles:collection-helpers ![GitHub Repo stars](https://img.shields.io/github/stars/dburles/meteor-collection-helpers) ![GitHub last commit](https://img.shields.io/github/last-commit/dburles/meteor-collection-helpers)](https://github.com/dburles/meteor-collection-helpers/) – Transform your collections with helpers that you define.
- [matb33:collection-hooks ![GitHub Repo stars](https://img.shields.io/github/stars/Meteor-Community-Packages/meteor-collection-hooks) ![GitHub last commit](https://img.shields.io/github/last-commit/Meteor-Community-Packages/meteor-collection-hooks)](https://github.com/Meteor-Community-Packages/meteor-collection-hooks) - Extends Mongo.Collection with before/after hooks for insert/update/remove/find/findOne.
- [reywood:publish-composite ![GitHub Repo stars](https://img.shields.io/github/stars/Meteor-Community-Packages/meteor-publish-composite) ![GitHub last commit](https://img.shields.io/github/last-commit/Meteor-Community-Packages/meteor-publish-composite)](https://github.com/Meteor-Community-Packages/meteor-publish-composite) - publish a set of related documents from various collections using a reactive join.
- [jagi:astronomy ![GitHub Repo stars](https://img.shields.io/github/stars/jagi/meteor-astronomy) ![GitHub last commit](https://img.shields.io/github/last-commit/jagi/meteor-astronomy)](https://github.com/jagi/meteor-astronomy/) - The Model layer for Meteor.
- [cultofcoders:grapher ![GitHub Repo stars](https://img.shields.io/github/stars/cult-of-coders/grapher) ![GitHub last commit](https://img.shields.io/github/last-commit/cult-of-coders/grapher)](https://github.com/cult-of-coders/grapher) - Grapher: Meteor Collection Joins + Reactive GraphQL like queries.
- [sakulstra:aggregate ![GitHub Repo stars](https://img.shields.io/github/stars/sakulstra/meteor-aggregate) ![GitHub last commit](https://img.shields.io/github/last-commit/sakulstra/meteor-aggregate)](https://github.com/sakulstra/meteor-aggregate) - Add proper aggregation support for Meteor.
- [quave:collections ![GitHub Repo stars](https://img.shields.io/github/stars/quavedev/collections) ![GitHub last commit](https://img.shields.io/github/last-commit/quavedev/collections)](https://github.com/quavedev/collections) - Create collections in a standard way.

## REST

_REST support for Meteor_

- [maka:rest](https://atmospherejs.com/maka/rest) - automatically make your Meteor app accessible over HTTP and DDP alike.
- [vatfree:restivus ![GitHub Repo stars](https://img.shields.io/github/stars/vatfree/meteor-restivus) ![GitHub last commit](https://img.shields.io/github/last-commit/vatfree/meteor-restivus)](https://github.com/vatfree/meteor-restivus) - Make REST endpoints for your Meteor app with incredible ease.

## Forms and Templates

_Helpers for templates_

- [uniforms ![GitHub Repo stars](https://img.shields.io/github/stars/vazco/uniforms) ![GitHub last commit](https://img.shields.io/github/last-commit/vazco/uniforms)](https://github.com/vazco/uniforms) - Bunch of React components and helpers to easily generate and validate forms. [Seamlessly integrate with `simpl-schema`](https://uniforms.tools/docs/installation).
- [aldeed:autoform ![GitHub Repo stars](https://img.shields.io/github/stars/aldeed/meteor-autoform) ![GitHub last commit](https://img.shields.io/github/last-commit/aldeed/meteor-autoform)](https://github.com/aldeed/meteor-autoform) - UI components and helpers to easily create basic forms with automatic insert and update events, and automatic reactive validation.
- [ostrio:templatehelpers ![GitHub Repo stars](https://img.shields.io/github/stars/VeliovGroup/Meteor-Template-helpers) ![GitHub last commit](https://img.shields.io/github/last-commit/VeliovGroup/Meteor-Template-helpers)](https://github.com/VeliovGroup/Meteor-Template-helpers) - Utility helpers for your Blaze templates.
- [aldeed:template-extension ![GitHub Repo stars](https://img.shields.io/github/stars/aldeed/meteor-template-extension) ![GitHub last commit](https://img.shields.io/github/last-commit/aldeed/meteor-template-extension)](https://github.com/aldeed/meteor-template-extension) - A Meteor package: Replace already defined templates, inherit helpers and events from other templates.
- [kadira:blaze-layout ![GitHub Repo stars](https://img.shields.io/github/stars/TeamGrid/blaze-layout) ![GitHub last commit](https://img.shields.io/github/last-commit/TeamGrid/blaze-layout)](https://github.com/TeamGrid/blaze-layout) - Layout Manager for Blaze (works well with Meteor FlowRouter)

## Users and Authentication

_Tools for handling users and authentication_

- [accounts-js ![GitHub Repo stars](https://img.shields.io/github/stars/accounts-js/accounts) ![GitHub last commit](https://img.shields.io/github/last-commit/accounts-js/accounts)](https://github.com/accounts-js/accounts) - A suite of packages aims to provide all the tools you need to build a flexible authentication and accounts management solution for your application.
- [alanning:roles ![GitHub Repo stars](https://img.shields.io/github/stars/Meteor-Community-Packages/meteor-roles) ![GitHub last commit](https://img.shields.io/github/last-commit/Meteor-Community-Packages/meteor-roles)](https://github.com/Meteor-Community-Packages/meteor-roles) - Roles support for the built-in accounts packages.
- [meteor-user-status ![GitHub Repo stars](https://img.shields.io/github/stars/Meteor-Community-Packages/meteor-user-status) ![GitHub last commit](https://img.shields.io/github/last-commit/Meteor-Community-Packages/meteor-user-status)](https://github.com/Meteor-Community-Packages/meteor-user-status) - Keeps track of users and their meta data.

## Administration

_Tools for administrating your Meteor apps_

- [Meteor Candy](https://www.meteorcandy.com/) - Fastest and easier way to add an admin panel to your app.
- [yogiben:admin ![GitHub Repo stars](https://img.shields.io/github/stars/yogiben/meteor-admin) ![GitHub last commit](https://img.shields.io/github/last-commit/yogiben/meteor-admin)](https://github.com/yogiben/meteor-admin) - A complete admin dashboard solution.
- [houston:admin ![GitHub Repo stars](https://img.shields.io/github/stars/gterrono/houston) ![GitHub last commit](https://img.shields.io/github/last-commit/gterrono/houston)](https://github.com/gterrono/houston) - A zero-config, Django Admin-like admin for Meteor.
- [zodern:pure-admin ![GitHub Repo stars](https://img.shields.io/github/stars/zodern/meteor-pure-admin) ![GitHub last commit](https://img.shields.io/github/last-commit/zodern/meteor-pure-admin)](https://github.com/zodern/meteor-pure-admin) - An isolated, customizable admin panel for Meteor.

## Monitoring

_Tools for monitoring your Meteor apps_

- [kschingiz:meteor-elastic-apm ![GitHub Repo stars](https://img.shields.io/github/stars/kschingiz/meteor-elastic-apm) ![GitHub last commit](https://img.shields.io/github/last-commit/kschingiz/meteor-elastic-apm)](https://github.com/kschingiz/meteor-elastic-apm) - Perfomance Monitoring for Meteor based on Elastic APM
- [monti-apm-agent ![GitHub Repo stars](https://img.shields.io/github/stars/monti-apm/monti-apm-agent) ![GitHub last commit](https://img.shields.io/github/last-commit/monti-apm/monti-apm-agent)](https://github.com/monti-apm/monti-apm-agent) - Performance Monitoring for Meteor
- [lmachens:kadira ![GitHub Repo stars](https://img.shields.io/github/stars/lmachens/kadira) ![GitHub last commit](https://img.shields.io/github/last-commit/lmachens/kadira)](https://github.com/lmachens/kadira) - Performance Monitoring for Meteor

## Performance

_Tools for speeding up your Meteor apps_

- [cultofcoders:redis-oplog ![GitHub Repo stars](https://img.shields.io/github/stars/cult-of-coders/redis-oplog) ![GitHub last commit](https://img.shields.io/github/last-commit/cult-of-coders/redis-oplog)](https://github.com/cult-of-coders/redis-oplog) - Redis Oplog implementation to fully replace MongoDB Oplog in Meteor
- [staringatlights:fast-render ![GitHub Repo stars](https://img.shields.io/github/stars/abecks/meteor-fast-render) ![GitHub last commit](https://img.shields.io/github/last-commit/abecks/meteor-fast-render)](https://github.com/abecks/meteor-fast-render) - An active fork of fast-render
- [epotek:method-cache ![GitHub Repo stars](https://img.shields.io/github/stars/e-Potek/method-cache) ![GitHub last commit](https://img.shields.io/github/last-commit/e-Potek/method-cache)](https://github.com/e-Potek/method-cache) - Meteor method caching using DataLoader
- [maestroqadev:pub-sub-lite ![GitHub Repo stars](https://img.shields.io/github/stars/adtribute/pub-sub-lite) ![GitHub last commit](https://img.shields.io/github/last-commit/adtribute/pub-sub-lite)](https://github.com/adtribute/pub-sub-lite) - Transform publications to be non-reactive.
- [artillery-engine-meteor ![GitHub Repo stars](https://img.shields.io/github/stars/kschingiz/artillery-engine-meteor) ![GitHub last commit](https://img.shields.io/github/last-commit/kschingiz/artillery-engine-meteor)](https://github.com/kschingiz/artillery-engine-meteor) - Artillery load testing for MeteorJS applications.

## Deployment

_Tools for deploying and maintaining Meteor apps_

- [meteor-up ![GitHub Repo stars](https://img.shields.io/github/stars/zodern/meteor-up) ![GitHub last commit](https://img.shields.io/github/last-commit/zodern/meteor-up)](https://github.com/zodern/meteor-up) – Meteor Deployments.
- [meteor-google-cloud ![GitHub Repo stars](https://img.shields.io/github/stars/EducationLink/meteor-google-cloud) ![GitHub last commit](https://img.shields.io/github/last-commit/EducationLink/meteor-google-cloud)](https://github.com/EducationLink/meteor-google-cloud) - Automate Meteor deployments on Google Cloud App Engine Flexible
- [mup-aws-beanstalk ![GitHub Repo stars](https://img.shields.io/github/stars/zodern/mup-aws-beanstalk) ![GitHub last commit](https://img.shields.io/github/last-commit/zodern/mup-aws-beanstalk)](https://github.com/zodern/mup-aws-beanstalk) - Deploy Meteor apps to AWS Elastic Beanstalk using Meteor Up
- [meteor-azure ![GitHub Repo stars](https://img.shields.io/github/stars/fractal-code/meteor-azure) ![GitHub last commit](https://img.shields.io/github/last-commit/fractal-code/meteor-azure)](https://github.com/fractal-code/meteor-azure) - Automate Meteor deployments on Azure App Service
- [pm2-meteor ![GitHub Repo stars](https://img.shields.io/github/stars/andruschka/pm2-meteor) ![GitHub last commit](https://img.shields.io/github/last-commit/andruschka/pm2-meteor)](https://github.com/andruschka/pm2-meteor) - Simplest way to deploy, scale and run Meteor Apps with PM2.
- [meteor-hero ![GitHub Repo stars](https://img.shields.io/github/stars/jkrup/meteor-hero) ![GitHub last commit](https://img.shields.io/github/last-commit/jkrup/meteor-hero)](https://github.com/jkrup/meteor-hero) - Deploy MeteorJS applications for free with one command utilizing Heroku's service.
- [meteor-kubernetes-guide ![GitHub Repo stars](https://img.shields.io/github/stars/Gregivy/meteor-kubernetes-guide) ![GitHub last commit](https://img.shields.io/github/last-commit/Gregivy/meteor-kubernetes-guide)](https://github.com/Gregivy/meteor-kubernetes-guide) - Deploy a Meteor app with Kubernetes.
- [meteorhacks:cluster ![GitHub Repo stars](https://img.shields.io/github/stars/lmachens/cluster) ![GitHub last commit](https://img.shields.io/github/last-commit/lmachens/cluster)](https://github.com/lmachens/cluster) - Clustering solution for Meteor with load balancing and service discovery
- [demeteorizer ![GitHub Repo stars](https://img.shields.io/github/stars/onmodulus/demeteorizer) ![GitHub last commit](https://img.shields.io/github/last-commit/onmodulus/demeteorizer)](https://github.com/onmodulus/demeteorizer) - Converts a Meteor app into a "standard" Node.js application
- [percolate:migrations ![GitHub Repo stars](https://img.shields.io/github/stars/percolatestudio/meteor-migrations) ![GitHub last commit](https://img.shields.io/github/last-commit/percolatestudio/meteor-migrations)](https://github.com/percolatestudio/meteor-migrations) - Simple migration system for Meteor
- [yamup ![GitHub Repo stars](https://img.shields.io/github/stars/bordalix/yamup) ![GitHub last commit](https://img.shields.io/github/last-commit/bordalix/yamup)](https://github.com/bordalix/yamup) - Deploy Meteor apps to your own Ubuntu server (EC2, ...) without dockers

## Docker Images

- [meteor-docker ![GitHub Repo stars](https://img.shields.io/github/stars/zodern/meteor-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/zodern/meteor-docker)](https://github.com/zodern/meteor-docker)
- [meteor-base ![GitHub Repo stars](https://img.shields.io/github/stars/disney/meteor-base) ![GitHub last commit](https://img.shields.io/github/last-commit/disney/meteor-base)](https://github.com/disney/meteor-base)
- [docker-meteor ![GitHub Repo stars](https://img.shields.io/github/stars/tozd/docker-meteor) ![GitHub last commit](https://img.shields.io/github/last-commit/tozd/docker-meteor)](https://github.com/tozd/docker-meteor)

## Routers

_Routers for Blaze_

- [ostrio:flow-router-extra ![GitHub Repo stars](https://img.shields.io/github/stars/VeliovGroup/flow-router) ![GitHub last commit](https://img.shields.io/github/last-commit/VeliovGroup/flow-router)](https://github.com/VeliovGroup/flow-router) - Carefully extended `flow-router` package. Up-to-date version with support of latest Meteor's releases.
- [msavin:parrot ![GitHub Repo stars](https://img.shields.io/github/stars/msavin/Parrot) ![GitHub last commit](https://img.shields.io/github/last-commit/msavin/Parrot)](https://github.com/msavin/Parrot) - Web router specially designed for building SPAs using Meteor
- [meteorhacks:picker ![GitHub Repo stars](https://img.shields.io/github/stars/meteorhacks/picker) ![GitHub last commit](https://img.shields.io/github/last-commit/meteorhacks/picker)](https://github.com/meteorhacks/picker) - Server Side Router for Meteor.
- [iron:router ![GitHub Repo stars](https://img.shields.io/github/stars/iron-meteor/iron-router) ![GitHub last commit](https://img.shields.io/github/last-commit/iron-meteor/iron-router)](https://github.com/iron-meteor/iron-router) - A router that works on the server and the browser, designed specifically for Meteor. 

## Offline

_Tools for Meteor offline support_

- [ground:db ![GitHub Repo stars](https://img.shields.io/github/stars/GroundMeteor/db) ![GitHub last commit](https://img.shields.io/github/last-commit/GroundMeteor/db)](https://github.com/GroundMeteor/db) - GroundDB is a thin layer providing Meteor offline database and methods.
- [npdev:collections ![GitHub Repo stars](https://img.shields.io/github/stars/CaptainN/npdev-collections) ![GitHub last commit](https://img.shields.io/github/last-commit/CaptainN/npdev-collections)](https://github.com/CaptainN/npdev-collections) - An easy way to create offline collections with SSR for Meteor
- [meteor-service-worker ![GitHub Repo stars](https://img.shields.io/github/stars/NitroBAY/meteor-service-worker) ![GitHub last commit](https://img.shields.io/github/last-commit/NitroBAY/meteor-service-worker)](https://github.com/NitroBAY/meteor-service-worker) - Meteor specific service worker implementaion.
- [quave:pwa ![GitHub Repo stars](https://img.shields.io/github/stars/quavedev/pwa) ![GitHub last commit](https://img.shields.io/github/last-commit/quavedev/pwa)](https://github.com/quavedev/pwa) - A Meteor package that allows you to configure your PWA.

## Testing

_Testing tools_

- [meteortesting:mocha ![GitHub Repo stars](https://img.shields.io/github/stars/meteortesting/meteor-mocha) ![GitHub last commit](https://img.shields.io/github/last-commit/meteortesting/meteor-mocha)](https://github.com/meteortesting/meteor-mocha) - Mocha test driver package for Meteor.
- [lmieulet:meteor-coverage ![GitHub Repo stars](https://img.shields.io/github/stars/serut/meteor-coverage) ![GitHub last commit](https://img.shields.io/github/last-commit/serut/meteor-coverage)](https://github.com/serut/meteor-coverage) - Test coverage for Meteor.
- [hubroedu:mocha ![GitHub Repo stars](https://img.shields.io/github/stars/hubroedu/meteor-mocha) ![GitHub last commit](https://img.shields.io/github/last-commit/hubroedu/meteor-mocha)](https://github.com/hubroedu/meteor-mocha/) - Decaffed cultofcoders:mocha fork.
- [antwaremx:meteorman ![GitHub Repo stars](https://img.shields.io/github/stars/antwaremx/meteorman) ![GitHub last commit](https://img.shields.io/github/last-commit/antwaremx/meteorman)](https://github.com/antwaremx/meteorman) - Meteorman: A DDP Client with GUI to test Meteor methods and publications (like Postman).

## SEO

_Search Engine Optimization tools_

- [ostrio:spiderable-middleware ![GitHub Repo stars](https://img.shields.io/github/stars/VeliovGroup/spiderable-middleware) ![GitHub last commit](https://img.shields.io/github/last-commit/VeliovGroup/spiderable-middleware)](https://github.com/VeliovGroup/spiderable-middleware/) - Prerendering (_a.k.a. Spiderable_) with support of ES6 (ECMAScript2015) - Meteor app crawled perfectly by search engines.

## Files

_Handling files in Meteor_

- [ostrio:files ![GitHub Repo stars](https://img.shields.io/github/stars/VeliovGroup/Meteor-Files) ![GitHub last commit](https://img.shields.io/github/last-commit/VeliovGroup/Meteor-Files)](https://github.com/VeliovGroup/Meteor-Files) - Upload files via DDP, HTTP and WebRTC/DC. To Meteor server FS, AWS, GridFS, DropBox or Google Drive. Fast, secure and robust.
- [@reactioncommerce/file-collections ![GitHub Repo stars](https://img.shields.io/github/stars/reactioncommerce/reaction-file-collections) ![GitHub last commit](https://img.shields.io/github/last-commit/reactioncommerce/reaction-file-collections)](https://github.com/reactioncommerce/reaction-file-collections) - Reaction FileCollections is a set of NPM packages that provide the ability to support file uploads, storage, and downloads in Node and Meteor apps, and in browser JavaScript.
- [netanelgilad:excel ![GitHub Repo stars](https://img.shields.io/github/stars/netanelgilad/meteor-excel) ![GitHub last commit](https://img.shields.io/github/last-commit/netanelgilad/meteor-excel)](https://github.com/netanelgilad/meteor-excel) - Parsing and generating excel files (xlsx, xls).
- [mikkelking:slingshot ![GitHub Repo stars](https://img.shields.io/github/stars/Back2bikes/meteor-slingshot) ![GitHub last commit](https://img.shields.io/github/last-commit/Back2bikes/meteor-slingshot)](https://github.com/Back2bikes/meteor-slingshot) - Upload files directly to AWS S3, Google Cloud Storage and others in meteor.

## Search, sort and paginate

_Search, sort and paginate related tools_

- [percolate:find-from-publication ![GitHub Repo stars](https://img.shields.io/github/stars/versolearning/find-from-publication) ![GitHub last commit](https://img.shields.io/github/last-commit/versolearning/find-from-publication)](https://github.com/versolearning/find-from-publication) - Enable finding all documents that have been published by a given publication.
- [meteor-publish-join ![GitHub Repo stars](https://img.shields.io/github/stars/nlhuykhang/meteor-publish-join) ![GitHub last commit](https://img.shields.io/github/last-commit/nlhuykhang/meteor-publish-join)](https://github.com/nlhuykhang/meteor-publish-join#readme) - A performant NPM package for publishing non-reactive or aggregated values.
- [tmeasday:publish-counts ![GitHub Repo stars](https://img.shields.io/github/stars/percolatestudio/publish-counts) ![GitHub last commit](https://img.shields.io/github/last-commit/percolatestudio/publish-counts)](https://github.com/percolatestudio/publish-counts) - Publish the count of a cursor, in real time.
- [meteorhacks:search-source ![GitHub Repo stars](https://img.shields.io/github/stars/meteorhacks/search-source) ![GitHub last commit](https://img.shields.io/github/last-commit/meteorhacks/search-source)](https://github.com/meteorhacks/search-source) - Reactive Data Source for Search.
- [matteodem:easy-search ![GitHub Repo stars](https://img.shields.io/github/stars/matteodem/meteor-easy-search) ![GitHub last commit](https://img.shields.io/github/last-commit/matteodem/meteor-easy-search)](https://github.com/matteodem/meteor-easy-search) - Easy-to-use search with Blaze Components (+ Elastic Search Support)
- [alethes:pages ![GitHub Repo stars](https://img.shields.io/github/stars/alethes/meteor-pages) ![GitHub last commit](https://img.shields.io/github/last-commit/alethes/meteor-pages)](https://github.com/alethes/meteor-pages) - Out of the box Meteor pagination.

## Mobile

_Mobile Development_

- [meteor-push ![GitHub Repo stars](https://img.shields.io/github/stars/activitree/meteor-push) ![GitHub last commit](https://img.shields.io/github/last-commit/activitree/meteor-push)](https://github.com/activitree/meteor-push) - Push notifications for cordova (ios, android) browser (Chrome, Safari, Firefox).
- [quave:universal-links ![GitHub Repo stars](https://img.shields.io/github/stars/quavedev/universal-links) ![GitHub last commit](https://img.shields.io/github/last-commit/quavedev/universal-links)](https://github.com/quavedev/universal-links) - A Meteor package that allows you to expose your native iOS settings to enable Universal Links. 
- [meteoric:ionic ![GitHub Repo stars](https://img.shields.io/github/stars/meteoric/meteor-ionic) ![GitHub last commit](https://img.shields.io/github/last-commit/meteoric/meteor-ionic)](https://github.com/meteoric/meteor-ionic) - Ionic components for Meteor.
- [driftyco:ionic ![GitHub Repo stars](https://img.shields.io/github/stars/driftyco/ionic) ![GitHub last commit](https://img.shields.io/github/last-commit/driftyco/ionic)](https://github.com/driftyco/ionic) - Official Ionic support for Meteor.
- [martijnwalraven:meteor-ios ![GitHub Repo stars](https://img.shields.io/github/stars/martijnwalraven/meteor-ios) ![GitHub last commit](https://img.shields.io/github/last-commit/martijnwalraven/meteor-ios)](https://github.com/martijnwalraven/meteor-ios) - Integrates native iOS apps with the Meteor platform through DDP.
- [delight-im/Android-DDP ![GitHub Repo stars](https://img.shields.io/github/stars/delight-im/Android-DDP) ![GitHub last commit](https://img.shields.io/github/last-commit/delight-im/Android-DDP)](https://github.com/delight-im/Android-DDP) - DDP for clients on Android.
- [okland:accounts-phone ![GitHub Repo stars](https://img.shields.io/github/stars/okland/accounts-phone) ![GitHub last commit](https://img.shields.io/github/last-commit/okland/accounts-phone)](https://github.com/okland/accounts-phone) - A login service based on mobile phone number for Meteor.
- [okland:camera-ui ![GitHub Repo stars](https://img.shields.io/github/stars/okland/camera-ui) ![GitHub last commit](https://img.shields.io/github/last-commit/okland/camera-ui)](https://github.com/okland/camera-ui) - Meteor package for taking photos with user interface, one function call on desktop and mobile. Allows to choose between camera to photoLibrary on mobile.
- [percolatestudio/cordova-plugin-safe-reload ![GitHub Repo stars](https://img.shields.io/github/stars/percolatestudio/cordova-plugin-safe-reload) ![GitHub last commit](https://img.shields.io/github/last-commit/percolatestudio/cordova-plugin-safe-reload)](https://github.com/percolatestudio/cordova-plugin-safe-reload) - Cordova plugin to watch and recover after a broken Meteor Hot Code Push.

## Data Visualization

_Data Visualization in Meteor: charts, maps, tables, etc._

- [aldeed:tabular ![GitHub Repo stars](https://img.shields.io/github/stars/aldeed/meteor-tabular) ![GitHub last commit](https://img.shields.io/github/last-commit/aldeed/meteor-tabular)](https://github.com/aldeed/meteor-tabular) - Reactive datatables for large or small datasets.
- [aslagle:reactive-table ![GitHub Repo stars](https://img.shields.io/github/stars/aslagle/reactive-table) ![GitHub last commit](https://img.shields.io/github/last-commit/aslagle/reactive-table)](https://github.com/aslagle/reactive-table/) - Reactive table for Meteor, using Blaze.
- [luixal:blaze-paginated-custom-list ![GitHub Repo stars](https://img.shields.io/github/stars/luixal/meteor-blaze-paginated-custom-list) ![GitHub last commit](https://img.shields.io/github/last-commit/luixal/meteor-blaze-paginated-custom-list)](https://github.com/luixal/meteor-blaze-paginated-custom-list) - Reactive and paginated item list.
- [luixal:meteor-apexcharts ![GitHub Repo stars](https://img.shields.io/github/stars/luixal/meteor-apexcharts) ![GitHub last commit](https://img.shields.io/github/last-commit/luixal/meteor-apexcharts)](https://github.com/luixal/meteor-apexcharts) - Reactive ApexCharts library packaged for Meteor.

## Analytics

_Analytics_

- [okgrow:analytics ![GitHub Repo stars](https://img.shields.io/github/stars/okgrow/analytics) ![GitHub last commit](https://img.shields.io/github/last-commit/okgrow/analytics)](https://github.com/okgrow/analytics/) - Google Analytics, Mixpanel, KISSmetrics (and more) integration for meteor.
- [quave:analytics ![GitHub Repo stars](https://img.shields.io/github/stars/quavedev/analytics) ![GitHub last commit](https://img.shields.io/github/last-commit/quavedev/analytics)](https://github.com/quavedev/analytics) - A Meteor package that allows you to send your page views and more to Google Analytics.

## Cron Jobs

_Cron Jobs in Meteor_

- [msavin:sjobs ![GitHub Repo stars](https://img.shields.io/github/stars/msavin/stevejobs) ![GitHub last commit](https://img.shields.io/github/last-commit/msavin/stevejobs)](https://github.com/msavin/stevejobs/) - A Meteor-first jobs queue / task scheduler.
- [percolate:synced-cron ![GitHub Repo stars](https://img.shields.io/github/stars/percolatestudio/meteor-synced-cron) ![GitHub last commit](https://img.shields.io/github/last-commit/percolatestudio/meteor-synced-cron)](https://github.com/percolatestudio/meteor-synced-cron) - Cron system for Meteor. It supports syncronizing jobs between multiple processes.
- [ostrio:cron-jobs ![GitHub Repo stars](https://img.shields.io/github/stars/VeliovGroup/Meteor-CRON-jobs) ![GitHub last commit](https://img.shields.io/github/last-commit/VeliovGroup/Meteor-CRON-jobs)](https://github.com/VeliovGroup/Meteor-CRON-jobs) - Package with similar API to native `setTimeout` and `setInterval` methods, but synced between all running Meteor (NodeJS) instances.

## Debugging Tools

_Debugging Tools_

- [meteor-devtools-evolved ![GitHub Repo stars](https://img.shields.io/github/stars/leonardoventurini/meteor-devtools-evolved) ![GitHub last commit](https://img.shields.io/github/last-commit/leonardoventurini/meteor-devtools-evolved)](https://github.com/leonardoventurini/meteor-devtools-evolved) - A chrome extension.
- [msavin:mongol ![GitHub Repo stars](https://img.shields.io/github/stars/msavin/Mongol) ![GitHub last commit](https://img.shields.io/github/last-commit/msavin/Mongol)](https://github.com/msavin/Mongol/) - Visual Editing Tool for Meteor for MongoDB Collections.
- [msavin:jetsetter ![GitHub Repo stars](https://img.shields.io/github/stars/msavin/JetSetter) ![GitHub last commit](https://img.shields.io/github/last-commit/msavin/JetSetter)](https://github.com/msavin/JetSetter) - Visual Get/Set Tool for Meteor Session Variables.
- [babrahams:constellation ![GitHub Repo stars](https://img.shields.io/github/stars/JackAdams/constellation-distro) ![GitHub last commit](https://img.shields.io/github/last-commit/JackAdams/constellation-distro)](https://github.com/JackAdams/constellation-distro/) - An extensible dev console for Meteor.

## Editor Plugins

- [meteor-api](https://atom.io/packages/meteor-api) - Meteor addons for Atom.
- [meteor-zsh ![GitHub Repo stars](https://img.shields.io/github/stars/robbyrussell/oh-my-zsh) ![GitHub last commit](https://img.shields.io/github/last-commit/robbyrussell/oh-my-zsh)](https://github.com/robbyrussell/oh-my-zsh/wiki/Plugins#meteor) - Completion for the meteor command.

## Scaffolding

_Scaffolding_

- [Meteor Kitchen](http://www.meteorkitchen.com/) - Code generator for Meteor.
- [iron-cli ![GitHub Repo stars](https://img.shields.io/github/stars/iron-meteor/iron-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/iron-meteor/iron-cli)](https://github.com/iron-meteor/iron-cli) - A scaffolding command line tool for Meteor applications.
- [maka-cli ![GitHub Repo stars](https://img.shields.io/github/stars/maka-io/maka-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/maka-io/maka-cli)](https://github.com/maka-io/maka-cli) - Maka-CLI is a command line tool, which organizes a web application's file structure and automates everyday package installation tasks for various application frameworks.

## Tooling

- [ESLint-plugin-Meteor ![GitHub Repo stars](https://img.shields.io/github/stars/dferber90/eslint-plugin-meteor) ![GitHub last commit](https://img.shields.io/github/last-commit/dferber90/eslint-plugin-meteor)](https://github.com/dferber90/eslint-plugin-meteor/) - ESLint plugin for Meteor.

## Boilerplate

- [Pup ![GitHub Repo stars](https://img.shields.io/github/stars/cleverbeagle/pup) ![GitHub last commit](https://img.shields.io/github/last-commit/cleverbeagle/pup)](https://github.com/cleverbeagle/pup)
- [matteodem - meteor-boilerplate ![GitHub Repo stars](https://img.shields.io/github/stars/matteodem/meteor-boilerplate) ![GitHub last commit](https://img.shields.io/github/last-commit/matteodem/meteor-boilerplate)](https://github.com/matteodem/meteor-boilerplate)
- [React with Webpack + Meteor as a backend](http://julian.io/react-with-webpack-meteor-as-a-backend/)

## Open source apps

- [Rocket.Chat](https://rocket.chat/) - Realtime chat application built with Meteor.
- [Wekan ![GitHub Repo stars](https://img.shields.io/github/stars/wekan/wekan) ![GitHub last commit](https://img.shields.io/github/last-commit/wekan/wekan)](https://github.com/wekan/wekan) - Open source Trello-like kanban.
- [Unchained Shop ![GitHub Repo stars](https://img.shields.io/github/stars/unchainedshop/unchained) ![GitHub last commit](https://img.shields.io/github/last-commit/unchainedshop/unchained)](https://github.com/unchainedshop/unchained) - Open source Commerce platform developed with Meteor.
- [VulcanJS ![GitHub Repo stars](https://img.shields.io/github/stars/VulcanJS/Vulcan) ![GitHub last commit](https://img.shields.io/github/last-commit/VulcanJS/Vulcan)](https://github.com/VulcanJS/Vulcan) - A toolkit to quickly build apps with React, GraphQL & Meteor.
- [Crowducate Platform ![GitHub Repo stars](https://img.shields.io/github/stars/Crowducate/crowducate-platform) ![GitHub last commit](https://img.shields.io/github/last-commit/Crowducate/crowducate-platform)](https://github.com/Crowducate/crowducate-platform) - Open source education platform Powered by Meteor.
- [Nosqlclient ![GitHub Repo stars](https://img.shields.io/github/stars/nosqlclient/nosqlclient) ![GitHub last commit](https://img.shields.io/github/last-commit/nosqlclient/nosqlclient)](https://github.com/nosqlclient/nosqlclient) - MongoDB management tool.

## Front End Frameworks

_Alternative Front End Frameworks to Blaze_

- [React](http://react-in-meteor.readthedocs.org/en/latest/) - Working with React and Meteor.
- [Vue ![GitHub Repo stars](https://img.shields.io/github/stars/Akryum/meteor-vue-component) ![GitHub last commit](https://img.shields.io/github/last-commit/Akryum/meteor-vue-component)](https://github.com/Akryum/meteor-vue-component) - Working with Vue and Meteor (plus single-file components & apollo support).
- [Svelte ![GitHub Repo stars](https://img.shields.io/github/stars/meteor-svelte/meteor-svelte) ![GitHub last commit](https://img.shields.io/github/last-commit/meteor-svelte/meteor-svelte)](https://github.com/meteor-svelte/meteor-svelte) - Build cybernetically enhanced web apps with Meteor and Svelte.
- [Angular 2 ![GitHub Repo stars](https://img.shields.io/github/stars/Urigo/angular2-meteor) ![GitHub last commit](https://img.shields.io/github/last-commit/Urigo/angular2-meteor)](https://github.com/Urigo/angular2-meteor) - Working with Angular 2 and Meteor.
- [Angular ![GitHub Repo stars](https://img.shields.io/github/stars/Urigo/angular-meteor) ![GitHub last commit](https://img.shields.io/github/last-commit/Urigo/angular-meteor)](https://github.com/Urigo/angular-meteor) - Working with Angular and Meteor.
- [Famo.us ![GitHub Repo stars](https://img.shields.io/github/stars/gadicc/meteor-famous-views) ![GitHub last commit](https://img.shields.io/github/last-commit/gadicc/meteor-famous-views)](https://github.com/gadicc/meteor-famous-views/) - Famo.us and Meteor.
- [frozeman:build-client ![GitHub Repo stars](https://img.shields.io/github/stars/frozeman/meteor-build-client) ![GitHub last commit](https://img.shields.io/github/last-commit/frozeman/meteor-build-client)](https://github.com/frozeman/meteor-build-client) - A tool to bundle the client part of a Meteor app.
- [Asteroid ![GitHub Repo stars](https://img.shields.io/github/stars/mondora/asteroid) ![GitHub last commit](https://img.shields.io/github/last-commit/mondora/asteroid)](https://github.com/mondora/asteroid) - An alternative client for a Meteor backend.
- [ddp.js ![GitHub Repo stars](https://img.shields.io/github/stars/mondora/ddp.js) ![GitHub last commit](https://img.shields.io/github/last-commit/mondora/ddp.js)](https://github.com/mondora/ddp.js) - Isomorphic JavaScript DDP client.
- [elm ![GitHub Repo stars](https://img.shields.io/github/stars/ni-ko-o-kin/meteor-elm-example) ![GitHub last commit](https://img.shields.io/github/last-commit/ni-ko-o-kin/meteor-elm-example)](https://github.com/ni-ko-o-kin/meteor-elm-example) - elm as the view layer for a meteor based project.

## Alternative Databases

_Alternative Databases for MongoDB_

- [vlasky:mysql ![GitHub Repo stars](https://img.shields.io/github/stars/vlasky/meteor-mysql) ![GitHub last commit](https://img.shields.io/github/last-commit/vlasky/meteor-mysql)](https://github.com/vlasky/meteor-mysql) - Reactive MySQL for Meteor
- [meteor-pg ![GitHub Repo stars](https://img.shields.io/github/stars/Richie765/meteor-pg) ![GitHub last commit](https://img.shields.io/github/last-commit/Richie765/meteor-pg)](https://github.com/Richie765/meteor-pg) - New and improved PostgreSQL support for Meteor
- [ostrio:neo4jdriver ![GitHub Repo stars](https://img.shields.io/github/stars/VeliovGroup/ostrio-neo4jdriver) ![GitHub last commit](https://img.shields.io/github/last-commit/VeliovGroup/ostrio-neo4jdriver)](https://github.com/VeliovGroup/ostrio-neo4jdriver/) - Neo4j Driver for Meteor, with support of GrapheneDB
- [numtel:pg ![GitHub Repo stars](https://img.shields.io/github/stars/numtel/meteor-pg) ![GitHub last commit](https://img.shields.io/github/last-commit/numtel/meteor-pg)](https://github.com/numtel/meteor-pg) - Reactive PostgreSQL for Meteor
- [simple:rethink ![GitHub Repo stars](https://img.shields.io/github/stars/Slava/meteor-rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/Slava/meteor-rethinkdb)](https://github.com/Slava/meteor-rethinkdb) - RethinkDB integration for Meteor

# Resources

_Where to discover new Meteor things_

## Books

- [Meteor Explained](https://gumroad.com/l/meteor-explained)
- [Secure Meteor](https://www.securemeteor.com/)
- [meteor-tuts](https://www.meteor-tuts.com/) - Free
- [Meteor Tips](http://meteortips.com/) - Free
- [Pro Meteor](https://pdfslide.net/documents/pro-meteor-book.html) - Free
- [Meteor Cookbook ![GitHub Repo stars](https://img.shields.io/github/stars/awatson1978/meteor-cookbook) ![GitHub last commit](https://img.shields.io/github/last-commit/awatson1978/meteor-cookbook)](https://github.com/awatson1978/meteor-cookbook)

## Courses

- #### Free

  _Most of these free courses are by [Scott Tolinski](https://github.com/stolinski), please make sure to check out some his paid stuff over at [leveluptutorials](https://www.leveluptutorials.com/)_

  - [Meteor 1.4 For Everyone](https://www.leveluptutorials.com/tutorials/meteor-1-4-for-everyone)
  - [Intermediate Meteor](https://www.leveluptutorials.com/tutorials/intermediate-meteor)
  - [Meteor For Everyone Tutorials](https://www.leveluptutorials.com/tutorials/meteor-for-everyone-tutorials)
  - [Meteor 1.4 + React For Everyone Tutorials](https://www.leveluptutorials.com/tutorials/meteor-1-4-react-for-everyone-tutorials)
  - [Meteor & React For Everyone](https://www.leveluptutorials.com/tutorials/meteor-react-for-everyone)
  - [Level 2 Meteor + React Tutorials](https://www.leveluptutorials.com/tutorials/level-2-meteor-react-tutorials)
  - [User Accounts in Meteor](https://www.leveluptutorials.com/tutorials/user-accounts-in-meteor)
  - [Full-stack GraphQL with Apollo, Meteor & React](https://www.leveluptutorials.com/tutorials/full-stack-graphql-with-apollo-meteor-and-react)
  - [EventedMind](https://learn-meteor.netlify.app/)

- #### Paid
  - [leveluptutorials](https://www.leveluptutorials.com/) - Contains some free tutorials.
  - [Udemy - Meteor and React for Realtime Apps](https://www.udemy.com/course/meteor-react-tutorial/)
  - [tuts+ - Single Page Web Apps with Meteor](http://code.tutsplus.com/courses/single-page-web-apps-with-meteor)
  - [Udemy - Realtime Applications with Meteor and Vue](https://www.udemy.com/course/meteor-vue) - Course in Spanish.

## Tutorials

- [Building a CMS-powered blog in Meteor](https://buttercms.com/blog/meteor-cms-blog-tutorial)
- [scotch.io - Building a Slack Clone in Meteor](https://scotch.io/tutorials/building-a-slack-clone-in-meteor-js-getting-started)
- [Meteor Learning ![GitHub Repo stars](https://img.shields.io/github/stars/ericdouglas/Meteor-Learning) ![GitHub last commit](https://img.shields.io/github/last-commit/ericdouglas/Meteor-Learning)](https://github.com/ericdouglas/Meteor-Learning) - List of resources to learn
- [Phusion Passenger: Meteor tutorial ![GitHub Repo stars](https://img.shields.io/github/stars/phusion/passenger) ![GitHub last commit](https://img.shields.io/github/last-commit/phusion/passenger)](https://github.com/phusion/passenger/wiki/Phusion-Passenger:-Meteor-tutorial)
- [When a Meteor finally hits production](https://medium.com/@davidyahalomi/when-a-meteor-finally-hits-production-6c37b81f795b) - Blog post about deploying Meteor apps
- [Transform any Meteor App into a PWA](https://dev.to/jankapunkt/transform-any-meteor-app-into-a-pwa-4k44)

## Blogs

- [Official Meteor blog](http://blog.meteor.com)
- [The Meteor podcast](http://podcast.crater.io)

## Websites

- [Official website](https://www.meteor.com/)
- [Official Documentation](http://docs.meteor.com/)
- [Official Guide](http://guide.meteor.com/)
- [Atmosphere](https://atmospherejs.com/) - The catalog of Meteor packages, resources and tools.
- [Discover Meteor](https://book.discovermeteor.com/)
- [Meteorpedia](http://www.meteorpedia.com) ([infrequently](http://www.meteorpedia.com/special/RecentChanges/) updated)
- [Meetups](http://meteor.meetup.com/)
- [Reddit](https://www.reddit.com/r/meteor)
- [YouTube](https://www.youtube.com/channel/UC3fBiJrFFMhKlsWM46AsAYw) videos from meetups around the world
- [Unofficial Meteor FAQ ![GitHub Repo stars](https://img.shields.io/github/stars/oortcloud/unofficial-meteor-faq) ![GitHub last commit](https://img.shields.io/github/last-commit/oortcloud/unofficial-meteor-faq)](https://github.com/oortcloud/unofficial-meteor-faq)
- [The Meteor Chef](https://themeteorchef.com)

### Q&A

- [Stack Overflow](http://stackoverflow.com/questions/tagged/meteor?sort=newest&pagesize=15)
- [Meteor forums](https://forums.meteor.com/)
- [Meteor Community Organization Slack Channel ![GitHub Repo stars](https://img.shields.io/github/stars/Meteor-Community-Packages/organization) ![GitHub last commit](https://img.shields.io/github/last-commit/Meteor-Community-Packages/organization)](https://github.com/Meteor-Community-Packages/organization#slack)

### Community Newsletters

- [zodern](https://zodern.me/newsletter.html)
- [StorytellerCZ](https://forums.meteor.com/t/meteor-community-newsletter/50598)

## Twitter

- [Official Meteor](https://twitter.com/meteorjs)

## Related

- [Awesome Meteor Jobs ![GitHub Repo stars](https://img.shields.io/github/stars/harryadel/awesome-meteor-jobs) ![GitHub last commit](https://img.shields.io/github/last-commit/harryadel/awesome-meteor-jobs)](https://github.com/harryadel/awesome-meteor-jobs)
- [Awesome Meteor Developers ![GitHub Repo stars](https://img.shields.io/github/stars/harryadelb/awesome-meteor-developers) ![GitHub last commit](https://img.shields.io/github/last-commit/harryadelb/awesome-meteor-developers)](https://github.com/harryadelb/awesome-meteor-developers)
- [Awesome Blaze ![GitHub Repo stars](https://img.shields.io/github/stars/arggh/awesome-blaze) ![GitHub last commit](https://img.shields.io/github/last-commit/arggh/awesome-blaze)](https://github.com/arggh/awesome-blaze)

## Built With Meteor

_Commercial Grade Applications Built With Meteor_

- [Qualia](https://www.qualia.com/) - Real Estate Startup
- [Code Signal](https://codesignal.com/) - Skills-based assessment platform
- [Pathable](Pathable) - Events managment suite
- [MaestroQA](https://www.maestroqa.com/) - Quality assurance software

# [Contributing ![GitHub Repo stars](https://img.shields.io/github/stars/urigo/awesome-meteor) ![GitHub last commit](https://img.shields.io/github/last-commit/urigo/awesome-meteor)](https://github.com/urigo/awesome-meteor/blob/master/CONTRIBUTING.md)

Your contributions are always welcome!

Thank you @gillesfabio for creating this repo!
