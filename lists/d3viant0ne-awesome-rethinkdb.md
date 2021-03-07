<h3 align="center">
	<img width="120" src="https://github.com/d3viant0ne/awesome-rethinkdb/blob/master/media/rethinkdb.jpg" alt="RethinkDB">
	<br>
</h3>
## Awesome RethinkDB [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> A curated list of awesome RethinkDB resources, libraries, tools and applications

Inspired by the [awesome ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome)](https://github.com/sindresorhus/awesome) list. Feel free to improve this list by [contributing](CONTRIBUTING.md)!

### Table of Contents
 - [Resources](#resources)
  - [Documentation](#documentation)
  - [Community](#community)
 - [JavaScript](#javascript-libraries)
 - [Python](#python-libraries)
 - [Ruby](#ruby-libraries)
 - [Java](#java-libraries)
 - [Additional Languages](#additional-languages)
  - [Community Supported](#community-supported-drivers)
 - [Research and Training](#research-and-training)
  - [Articles](#articles)
  - [Talks](#talks)
  - [RethinkDB Examples](#rethinkdb-examples)
  - [Community Examples](#community-examples)
 - [Tools](#tools)
  - [Administration](#administrative-tools)
  - [Deployment](#deployment)

<br>
> <h3>RethinkDB Ecosystem</h3>

#### Documentation

- [RethinkDB](http://rethinkdb.com/docs/) - RethinkDB Documentation
- [ReQL API](http://rethinkdb.com/api/javascript/) - JavaScript ReQL command reference

#### Community

- [Request Slack Invite](http://slack.rethinkdb.com/)
- [RethinkDB StackOverflow](http://stackoverflow.com/tags/rethinkdb)
- [RethinkDB Blog](https://www.rethinkdb.com/blog/)
- [RethinkDB Google Group](https://groups.google.com/forum/#!forum/rethinkdb)
- [RethinkDB YouTube Channel](https://www.youtube.com/channel/UC1kJkmSWt_snLDfuXgJnLnQ)
- [RethinkDB Reddit](https://www.reddit.com/r/rethinkdb/) 

<br>
> <h3>JavaScript Libraries</h3>

##### Drivers

- [RethinkDB JavaScript](https://www.rethinkdb.com/docs/install-drivers/javascript/) - Officially Supported JavaScript Driver.
 - Maintainer: `RethinkDB Team`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)]( https://github.com/rethinkdb) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/rethinkdb) 
- [RethinkDB Dash ![GitHub Repo Stars](https://img.shields.io/github/stars/neumino/rethinkdbdash) ![GitHub last commit](https://img.shields.io/github/last-commit/neumino/rethinkdbdash)](https://github.com/neumino/rethinkdbdash) - An advanced Node.js driver for RethinkDB with connection pool and Streams Support.
 - Maintainer: `Michel`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/neumino) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/neumino) 

##### ORM

- [Thinky ![GitHub Repo Stars](https://img.shields.io/github/stars/neumino/thinky) ![GitHub last commit](https://img.shields.io/github/last-commit/neumino/thinky)](https://github.com/neumino/thinky) - JavaScript ORM for RethinkDB
 - Maintainer: `Michel`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/neumino) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/neumino) 
- [JSData RethinkDB ![GitHub Repo Stars](https://img.shields.io/github/stars/js-data/js-data-rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/js-data/js-data-rethinkdb)](https://github.com/js-data/js-data-rethinkdb) - RethinkDB adapter for the js-data ORM.
 - Maintainer: `JS Data Organization`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/js-data)

##### Extension Libraries

- [RethinkDB Pool ![GitHub Repo Stars](https://img.shields.io/github/stars/hden/rethinkdb-pool) ![GitHub last commit](https://img.shields.io/github/last-commit/hden/rethinkdb-pool)](https://github.com/hden/rethinkdb-pool) - Connection-pool for RethinkDB.
 - Maintainer: `Hao-kang Den`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/hden) 
- [Express Session RethinkDB ![GitHub Repo Stars](https://img.shields.io/github/stars/armenfilipetyan/express-session-rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/armenfilipetyan/express-session-rethinkdb)](https://github.com/armenfilipetyan/express-session-rethinkdb) - RethinkDB session store for Express 4.x.
 - Maintainer: `@armenfilipetyan`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/armenfilipetyan) 
 
##### Technology Integrations

- [Hapi RethinkDB CRUD ![GitHub Repo Stars](https://img.shields.io/github/stars/athlite/hapi-rethinkdb-crud) ![GitHub last commit](https://img.shields.io/github/last-commit/athlite/hapi-rethinkdb-crud)](https://github.com/athlite/hapi-rethinkdb-crud) - CRUD handlers for Hapi interaction with Rethinkdb.
 - Maintainer: `Thomas Eng`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/athlite) 
- [Sails Hook Thinky ![GitHub Repo Stars](https://img.shields.io/github/stars/mwielbut/sails-hook-thinky) ![GitHub last commit](https://img.shields.io/github/last-commit/mwielbut/sails-hook-thinky)](https://github.com/mwielbut/sails-hook-thinky) - A hook to enable the Thinky ORM for RethinkDB in Sails.
 - Maintainer: `Matt Wielbut`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/mwielbut) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/mwielbut) 
- [KOA RethinkDB ![GitHub Repo Stars](https://img.shields.io/github/stars/hden/koa-rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/hden/koa-rethinkdb)](https://github.com/hden/koa-rethinkdb) - Koa middleware that gets you a RethinkDB client.
 - Maintainer: `Hao-kang Den`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/hden) 
- [RabbitMQ](http://rethinkdb.com/docs/rabbitmq/javascript/) - Integrating RethinkDB with RabbitMQ
 - Maintainer: `RethinkDB Team`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)]( https://github.com/rethinkdb) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/rethinkdb) 

**[Back to top](#table-of-contents)**

<br>
> <h3>Python Libraries</h3>

##### Drivers

- [RethinkDB Python](https://www.rethinkdb.com/docs/install-drivers/python/) - Officially Supported JavaScript Driver.
 - Maintainer: `RethinkDB Team`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)]( https://github.com/rethinkdb) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/rethinkdb)

##### ORM

- [Remodel ![GitHub Repo Stars](https://img.shields.io/github/stars/linkyndy/remodel) ![GitHub last commit](https://img.shields.io/github/last-commit/linkyndy/remodel)](https://github.com/linkyndy/remodel) - Very simple yet powerful and extensible Object Document Mapper for RethinkDB, written in Python.
 - Maintainer: `Andrei Horak`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/linkyndy) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/linkyndy)
- [Rethink ![GitHub Repo Stars](https://img.shields.io/github/stars/caoimhghin/rethink) ![GitHub last commit](https://img.shields.io/github/last-commit/caoimhghin/rethink)](https://github.com/caoimhghin/rethink) - Python RethinkDB Object Mapper Interface Inspired by Appengine NDB.
 - Maintainer: `Kevin Amerson`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/caoimhghin) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/kevinamerson)

##### Technology Integrations

- [flask-rethinkdb ![GitHub Repo Stars](https://img.shields.io/github/stars/linkyndy/flask-rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/linkyndy/flask-rethinkdb)](https://github.com/linkyndy/flask-rethinkdb) - Adds RethinkDB support to Flask.
 - Maintainer: `Andrei Horak`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/linkyndy) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/linkyndy)
- [RabbitMQ](https://www.rethinkdb.com/docs/rabbitmq/python/) - Integrating RethinkDB with RabbitMQ
 - Maintainer: `RethinkDB Team`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)]( https://github.com/rethinkdb) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/rethinkdb) 

**[Back to top](#table-of-contents)**

<br>
> <h3>Ruby Libraries</h3>

##### Drivers

- [RethinkDB Ruby](http://rethinkdb.com/docs/install-drivers/ruby/) - Officially Supported Ruby Driver.
 - Maintainer: `RethinkDB Team`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)]( https://github.com/rethinkdb) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/rethinkdb)

##### ORM

- [NoBrainer ![GitHub Repo Stars](https://img.shields.io/github/stars/nviennot/nobrainer) ![GitHub last commit](https://img.shields.io/github/last-commit/nviennot/nobrainer)](https://github.com/nviennot/nobrainer) - Ruby ORM for RethinkDB.
 - Maintainer: `Nicolas Viennot`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/nviennot) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/nviennot)

##### Technology Integrations

- [Epiphy ![GitHub Repo Stars](https://img.shields.io/github/stars/kureikain/epiphy) ![GitHub last commit](https://img.shields.io/github/last-commit/kureikain/epiphy)](https://github.com/kureikain/epiphy) - Lightweight RethinkDB ORM.
 - Maintainer: `Vinh Quốc Nguyễn`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/kureikain) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/kureikain)
- [lotus-rethinkdb ![GitHub Repo Stars](https://img.shields.io/github/stars/angeloashmore/lotus-rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/angeloashmore/lotus-rethinkdb)](https://github.com/angeloashmore/lotus-rethinkdb) - RethinkDB adapter for Lotus::Model.
 - Maintainer: `Angelo Ashmore`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/angeloashmore) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/angeloashmore)
- [RabbitMQ](https://www.rethinkdb.com/docs/rabbitmq/ruby/) - Integrating RethinkDB with RabbitMQ
 - Maintainer: `RethinkDB Team`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)]( https://github.com/rethinkdb) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/rethinkdb) 

**[Back to top](#table-of-contents)**

<br>
> <h3>Java Libraries</h3>

##### Drivers

- [RethinkDB Java](http://rethinkdb.com/docs/install-drivers/java/) - Officially Supported Java Driver.
 - Maintainer: `RethinkDB Team`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)]( https://github.com/rethinkdb) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/rethinkdb)
- [Rethinker ![GitHub Repo Stars](https://img.shields.io/github/stars/futurechimp/rethinker) ![GitHub last commit](https://img.shields.io/github/last-commit/futurechimp/rethinker)](https://github.com/futurechimp/rethinker) - A simplistic serialisation library for use alongside the official RethinkDb Java driver.
 - Maintainer: `Dave Hrycyszyn`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/futurechimp) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/futurechimp)
- [Rethinkdb4j ![GitHub Repo Stars](https://img.shields.io/github/stars/tony-brewerio/rethinkdb4j) ![GitHub last commit](https://img.shields.io/github/last-commit/tony-brewerio/rethinkdb4j)](https://github.com/tony-brewerio/rethinkdb4j) - Asynchronous Netty-based RethinkDB driver for Java.
 - Maintainer: `Anton Ustyuzhanin`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/tony-brewerio)


##### ORM

- [RethinkDB Java ORM ![GitHub Repo Stars](https://img.shields.io/github/stars/PeterKnego/rethinkdb-java-orm) ![GitHub last commit](https://img.shields.io/github/last-commit/PeterKnego/rethinkdb-java-orm)](https://github.com/PeterKnego/rethinkdb-java-orm) - A custom POJO converter for RethinkDB Java driver.
 - Maintainer: `Peter Knego`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)](https://github.com/PeterKnego) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/peterknego)

##### Technology Integrations

- [RabbitMQ](https://www.rethinkdb.com/docs/rabbitmq/java/) - Integrating RethinkDB with RabbitMQ
 - Maintainer: `RethinkDB Team`  [![Github ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/github.png)]( https://github.com/rethinkdb) [![Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/encharm/Font-Awesome-SVG-PNG) ![GitHub last commit](https://img.shields.io/github/last-commit/encharm/Font-Awesome-SVG-PNG)](https://github.com/encharm/Font-Awesome-SVG-PNG/blob/master/black/png/16/twitter.png)](https://twitter.com/rethinkdb) 

**[Back to top](#table-of-contents)**

<br>
> <h3>Additional Languages</h3>

#### Community Supported Drivers

- [C# ![GitHub Repo Stars](https://img.shields.io/github/stars/bchavez/RethinkDb.Driver) ![GitHub last commit](https://img.shields.io/github/last-commit/bchavez/RethinkDb.Driver)](https://github.com/bchavez/RethinkDb.Driver) - A C#/.NET RethinkDB driver striving for 100% ReQL API coverage.
- [C++ ![GitHub Repo Stars](https://img.shields.io/github/stars/AtnNn/librethinkdbxx) ![GitHub last commit](https://img.shields.io/github/last-commit/AtnNn/librethinkdbxx)](https://github.com/AtnNn/librethinkdbxx) - RethinkDB driver for C++.
- [Clojure ![GitHub Repo Stars](https://img.shields.io/github/stars/apa512/clj-rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/apa512/clj-rethinkdb)](https://github.com/apa512/clj-rethinkdb) - A RethinkDB client for Clojure.
- [Dart ![GitHub Repo Stars](https://img.shields.io/github/stars/billysometimes/rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/billysometimes/rethinkdb)](https://github.com/billysometimes/rethinkdb) - A Dart driver for RethinkDB v2.0.3.
- [Elixir ![GitHub Repo Stars](https://img.shields.io/github/stars/hamiltop/rethinkdb-elixir) ![GitHub last commit](https://img.shields.io/github/last-commit/hamiltop/rethinkdb-elixir)](https://github.com/hamiltop/rethinkdb-elixir) - Multiplexed RethinkDB client in pure Elixir.
- [Go ![GitHub Repo Stars](https://img.shields.io/github/stars/dancannon/gorethink) ![GitHub last commit](https://img.shields.io/github/last-commit/dancannon/gorethink)](https://github.com/dancannon/gorethink) - Go language driver for RethinkDB. 
- [Haskell ![GitHub Repo Stars](https://img.shields.io/github/stars/AtnNn/haskell-rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/AtnNn/haskell-rethinkdb)](https://github.com/AtnNn/haskell-rethinkdb) - RethinkDB client library for Haskell.
- [Lisp ![GitHub Repo Stars](https://img.shields.io/github/stars/orthecreedence/cl-rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/orthecreedence/cl-rethinkdb)](https://github.com/orthecreedence/cl-rethinkdb) - RethinkDB driver for Common Lisp.
- [Lua ![GitHub Repo Stars](https://img.shields.io/github/stars/grandquista/Lua-ReQL) ![GitHub last commit](https://img.shields.io/github/last-commit/grandquista/Lua-ReQL)](https://github.com/grandquista/Lua-ReQL) - Rethinkdb driver in Lua.
- [Objective-C ![GitHub Repo Stars](https://img.shields.io/github/stars/dparnell/rethink-db-client) ![GitHub last commit](https://img.shields.io/github/last-commit/dparnell/rethink-db-client)](https://github.com/dparnell/rethink-db-client) - A RethinkDB client written in Objective-C. 
- [Perl ![GitHub Repo Stars](https://img.shields.io/github/stars/njlg/perl-rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/njlg/perl-rethinkdb)](https://github.com/njlg/perl-rethinkdb) - A Pure Perl RethinkDB Driver.
- [PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/danielmewes/php-rql) ![GitHub last commit](https://img.shields.io/github/last-commit/danielmewes/php-rql)](https://github.com/danielmewes/php-rql) - A PHP client driver for the RethinkDB query language (ReQL).
- [Scala ![GitHub Repo Stars](https://img.shields.io/github/stars/kclay/rethink-scala) ![GitHub last commit](https://img.shields.io/github/last-commit/kclay/rethink-scala)](https://github.com/kclay/rethink-scala) - Scala Driver for RethinkDB.

**[Back to top](#table-of-contents)**

<br>
> <h3> Research And Training</h3>

#### Articles

- [Shahid Shaikh | 08-Mar-16](https://codeforgeek.com/2016/03/building-real-time-polling-app-rethinkdb-nodejs/) - Building real time polling app using RethinkDB and Nodejs.
- [Dr. Gleb Bahmutov PhD | 08-Feb-16](https://glebbahmutov.com/blog/redux-and-rethinkdb/) - Redux and RethinkDB
- [Scott Hasbrouck | 13-Mar-16](http://www.scotthasbrouck.com/blog/2016/3/13/using-socketio-with-rethinkdb-changefeeds-to-build-a-reactive-backend) - Using Socket.Io With RethinkDB Changefeeds To Build A Reactive JavaScript Stack
- [Khalid Abuhakmeh | 15-Nov-15](http://www.khalidabuhakmeh.com/getting-started-with-rethinkdb-and-asp-net-5) - Getting Started With RethinkDB and ASP.NET 5.
- [Slava Akhmechet | 01-Sept-15](http://www.infoworld.com/article/2975838/database/build-real-time-web-apps-with-rethinkdb.html) - Build real-time Web apps with RethinkDB.
- [Justin for Fanout | 20-May-15](http://blog.fanout.io/2015/05/20/building-a-realtime-api-with-rethinkdb/) - Building a realtime API with RethinkDB.
- [Nicholas Duffy | 30-Apr-15](https://strongloop.com/strongblog/rethinkdb-connector-loopback-node-js-framework/) - Getting Started with the RethinkDB Connector for LoopBack.
- [Rob Conery | 17-Apr-15](http://rob.conery.io/2015/04/17/rethinkdb-2-0-is-amazing/) - RethinkDB 2.0 Is Amazing.
- [Gordon Dent | 01-Apr-15](https://www.airpair.com/rethinkdb/posts/moving-from-sql-to-rethinkdb) - A Comprehensive Guide to moving from SQL to RethinkDB.
- [Gordon Dent | 11-Mar-15](http://blog.workshape.io/we-use-rethinkdb-at-workshapeio/) - We use RethinkDB at Workshape.io.

#### Talks

- [Michael Glukhovsky at Clevertech | 30-Mar-16](https://www.youtube.com/watch?v=28XKxLPv0Hs) - RethinkDB Presentation to Clevertech.
- [Ryan Paul at ForwardJS | 21-Jan-16](https://www.youtube.com/watch?v=xCU9RHDWXIY) - RethinkDB: Database for realtime apps.
- [Rob Conery at DevDay 2015 | 17-Sept-15](https://www.youtube.com/watch?v=Ee1v_SuECRk) - Rethinking NoSQL.
- [Jorge Silva at RethinkDB Meetup | 29-June-15](https://www.youtube.com/watch?v=vJtDNRsUozk) - Data Modeling in RethinkDB.
- [Ben Tranter | 05-Apr-15](https://www.youtube.com/watch?v=d01rLeIjTLE) - A Simple REST API with Express, RethinkDB, and Thinky.
 - [Associated Source ![GitHub Repo Stars](https://img.shields.io/github/stars/bentranter/ampersand-rethink-express) ![GitHub last commit](https://img.shields.io/github/last-commit/bentranter/ampersand-rethink-express)](https://github.com/bentranter/ampersand-rethink-express)
- [Ryan Paul at Mattermark | 17-Feb-15](https://www.youtube.com/watch?v=dhb63boH8E8) - Build a realtime RethinkDB cluster monitoring app with live graphs.
 - [Associated Blog Post](http://rethinkdb.com/blog/realtime-cluster-monitoring/) - A realtime RethinkDB cluster monitoring app with live graphs.

#### RethinkDB Examples

- [RethinkDB NodeJS Chat ![GitHub Repo Stars](https://img.shields.io/github/stars/rethinkdb/rethinkdb-example-nodejs-chat) ![GitHub last commit](https://img.shields.io/github/last-commit/rethinkdb/rethinkdb-example-nodejs-chat)](https://github.com/rethinkdb/rethinkdb-example-nodejs-chat) - A node.js chat application running on rethinkdb.
- [RethinkDB Flask Backbone ToDo ![GitHub Repo Stars](https://img.shields.io/github/stars/rethinkdb/rethinkdb-example-flask-backbone-todo) ![GitHub last commit](https://img.shields.io/github/last-commit/rethinkdb/rethinkdb-example-flask-backbone-todo)](https://github.com/rethinkdb/rethinkdb-example-flask-backbone-todo) - A canonical backbone todo application running on flask and RethinkDB.
- [RethinkDB ccoenraets/nodecellar Fork ![GitHub Repo Stars](https://img.shields.io/github/stars/rethinkdb/nodecellar-rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/rethinkdb/nodecellar-rethinkdb)](https://github.com/rethinkdb/nodecellar-rethinkdb) - Sample app built with Backbone.js,Bootstrap, Node.js, Express, RethinkDB.
- [RethinkDB PubNub Live Blog ![GitHub Repo Stars](https://img.shields.io/github/stars/rethinkdb/rethinkdb-pubnub-liveblog) ![GitHub last commit](https://img.shields.io/github/last-commit/rethinkdb/rethinkdb-pubnub-liveblog)](https://github.com/rethinkdb/rethinkdb-pubnub-liveblog) - PubNub / Express Blog Example App.
- [RethinkDB Angular Express Promise ![GitHub Repo Stars](https://img.shields.io/github/stars/rethinkdb/rethinkdb-example-nodejs) ![GitHub last commit](https://img.shields.io/github/last-commit/rethinkdb/rethinkdb-example-nodejs)](https://github.com/rethinkdb/rethinkdb-example-nodejs/tree/master/todo-angular-express-promise) - Promise based Todo example with RethinkDB, ExpressJS and AngularJS .
- [RethinkDB Angular Express ![GitHub Repo Stars](https://img.shields.io/github/stars/rethinkdb/rethinkdb-example-nodejs) ![GitHub last commit](https://img.shields.io/github/last-commit/rethinkdb/rethinkdb-example-nodejs)](https://github.com/rethinkdb/rethinkdb-example-nodejs/tree/master/todo-angular-express) - Todo example with RethinkDB, ExpressJS and AngularJS.
- [RethinkDB Angular KOA ![GitHub Repo Stars](https://img.shields.io/github/stars/rethinkdb/rethinkdb-example-nodejs) ![GitHub last commit](https://img.shields.io/github/last-commit/rethinkdb/rethinkdb-example-nodejs)](https://github.com/rethinkdb/rethinkdb-example-nodejs/tree/master/todo-angular-koa) - Todo example with RethinkDB, KoaJS and AngularJS. 

#### Community Examples

- [RethinkDB Chat ![GitHub Repo Stars](https://img.shields.io/github/stars/thejsj/rethinkdb-chat) ![GitHub last commit](https://img.shields.io/github/last-commit/thejsj/rethinkdb-chat)](https://github.com/thejsj/rethinkdb-chat) - A simple chat applications built with RethinkDB + Sockets.
- [RethinkDB Reactjs ![GitHub Repo Stars](https://img.shields.io/github/stars/arkency/rethinkdb-reactjs) ![GitHub last commit](https://img.shields.io/github/last-commit/arkency/rethinkdb-reactjs)](https://github.com/arkency/rethinkdb-reactjs) - rethinkdb + react.js + ActionController::Live (Rails) + Server Side Events.
- [Realtime Chat RethinkDB ![GitHub Repo Stars](https://img.shields.io/github/stars/Unrestricted-Coding/realtime-chat-RethinkDB) ![GitHub last commit](https://img.shields.io/github/last-commit/Unrestricted-Coding/realtime-chat-RethinkDB)](https://github.com/Unrestricted-Coding/realtime-chat-RethinkDB) - A realtime chatroom built with RethinkDB
- [Boot RethinkDB ![GitHub Repo Stars](https://img.shields.io/github/stars/geowarin/boot-rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/geowarin/boot-rethinkdb)](https://github.com/geowarin/boot-rethinkdb) - Chat example with spring boot and RethinkDB.
- [Go RethinkDB ToDo ![GitHub Repo Stars](https://img.shields.io/github/stars/dancannon/GoRethink_TodoDemo) ![GitHub last commit](https://img.shields.io/github/last-commit/dancannon/GoRethink_TodoDemo)](https://github.com/dancannon/GoRethink_TodoDemo) - Go RethinkDB Todo List Example Application.
- [Meguca ![GitHub Repo Stars](https://img.shields.io/github/stars/bakape/meguca) ![GitHub last commit](https://img.shields.io/github/last-commit/bakape/meguca)](https://github.com/bakape/meguca) - High performance real-time imageboard in Go, TypeScript and RethinkDB.
- [VueJS RethinkDB ![GitHub Repo Stars](https://img.shields.io/github/stars/alexcheninfo/vuejs-rethinkdb-example) ![GitHub last commit](https://img.shields.io/github/last-commit/alexcheninfo/vuejs-rethinkdb-example)](https://github.com/alexcheninfo/vuejs-rethinkdb-example) - Vuejs + Express + RethinkDB example.
- [3ree ![GitHub Repo Stars](https://img.shields.io/github/stars/GordyD/3ree) ![GitHub last commit](https://img.shields.io/github/last-commit/GordyD/3ree)](https://github.com/GordyD/3ree) - An example universal JS application written with the 3REE stack, React + Redux + RethinkDB + Express.
- [Meteor GraphQL ![GitHub Repo Stars](https://img.shields.io/github/stars/AdamBrodzinski/Meteor-RethinkDB-GraphQL) ![GitHub last commit](https://img.shields.io/github/last-commit/AdamBrodzinski/Meteor-RethinkDB-GraphQL)](https://github.com/AdamBrodzinski/Meteor-RethinkDB-GraphQL) - A Meteor and RethinkDB Example Using GraphQL.

**[Back to top](#table-of-contents)**

<br>
> <h3>Tools</h3>

#### Administrative Tools

- [Chateau ![GitHub Repo Stars](https://img.shields.io/github/stars/neumino/chateau) ![GitHub last commit](https://img.shields.io/github/last-commit/neumino/chateau)](https://github.com/neumino/chateau) - Another (awesome) data explorer for RethinkDB.
- [RethinkDB CLI ![GitHub Repo Stars](https://img.shields.io/github/stars/athlite/rethinkdb-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/athlite/rethinkdb-cli)](https://github.com/athlite/rethinkdb-cli) - CLI and REPL for Rethinkdb.
- [RethinkDB Nightly ![GitHub Repo Stars](https://img.shields.io/github/stars/robconery/rethinkdb_nightly) ![GitHub last commit](https://img.shields.io/github/last-commit/robconery/rethinkdb_nightly)](https://github.com/robconery/rethinkdb_nightly) - A node module that will execute a nightly backup and push it to S3.

#### Deployment

- [Vagrant ![GitHub Repo Stars](https://img.shields.io/github/stars/RyanAmos/rethinkdb-vagrant) ![GitHub last commit](https://img.shields.io/github/last-commit/RyanAmos/rethinkdb-vagrant)](https://github.com/RyanAmos/rethinkdb-vagrant) - Install RethinkDB using Vagrant.
- [Puppet ![GitHub Repo Stars](https://img.shields.io/github/stars/tmont/puppet-rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/tmont/puppet-rethinkdb)](https://github.com/tmont/puppet-rethinkdb) - Puppet module for RethinkDB.
- [Chef ![GitHub Repo Stars](https://img.shields.io/github/stars/AVVSDevelopment/chef-rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/AVVSDevelopment/chef-rethinkdb)](https://github.com/AVVSDevelopment/chef-rethinkdb) - Chef RethinkDB cookbook.
- [Wrecker ![GitHub Repo Stars](https://img.shields.io/github/stars/mies/box-rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/mies/box-rethinkdb)](https://github.com/mies/box-rethinkdb) - Wercker box for RethinkDB.
- [Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/crosbymichael/Dockerfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/crosbymichael/Dockerfiles)](https://github.com/crosbymichael/Dockerfiles/blob/master/rethinkdb/Dockerfile) - Single node Dockerfile.

<br>
> <h3>License</h3>

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
