# Awesome TinkerPop [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

![alt tag](https://raw.githubusercontent.com/mohataher/awesome-tinkerpop/master/tinkerpop-splash.png)


A curated list of only awesome TinkerPop libraries on Github.

>Apache TinkerPop™ is a graph computing framework for both graph databases (OLTP) and graph analytic systems (OLAP).

### Table of Contents
* [TinkerPop3](#tinkerpop3)
	- [Implementations](#tinkerpop3-implementations)
	- [Wrappers/Clients](#wrappers)
	- [Query Languages](#qlang)
* [TinkerPop2](#tinkerpop2)
* [Communites](#communites)
* [People to Follow](#people-to-follow)
* [Tutorials and Resources](#tutorials-and-resources)
* [How to Contribute](#contributing)
* [License](#license)

### <A NAME="tinkerpop3"></A>TinkerPop3 Libraries
#### <A NAME="tinkerpop3-implementations"></A>Implementations
* [TinkerPop3 implementation ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/tinkerpop) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/tinkerpop)](https://github.com/apache/tinkerpop) - Mirror of Apache TinkerPop.
* [sqlg ![GitHub Repo Stars](https://img.shields.io/github/stars/pietermartin/sqlg) ![GitHub last commit](https://img.shields.io/github/last-commit/pietermartin/sqlg)](https://github.com/pietermartin/sqlg) - Sqlg is a implementation of TinkerPop3 on a RDBMS.
* [blazegraph ![GitHub Repo Stars](https://img.shields.io/github/stars/blazegraph/database) ![GitHub last commit](https://img.shields.io/github/last-commit/blazegraph/database)](https://github.com/blazegraph/database) - TinkerPop3 [implementation ![GitHub Repo Stars](https://img.shields.io/github/stars/blazegraph/tinkerpop3) ![GitHub last commit](https://img.shields.io/github/last-commit/blazegraph/tinkerpop3)](https://github.com/blazegraph/tinkerpop3) for Blaze Graph; a high performance graph database.
* [tinkergraph-js ![GitHub Repo Stars](https://img.shields.io/github/stars/jbmusso/tinkergraph-js) ![GitHub last commit](https://img.shields.io/github/last-commit/jbmusso/tinkergraph-js)](https://github.com/jbmusso/tinkergraph-js) - A pure JavaScript implementation of TinkerPop's TinkerGraph in-memory graph database.
* [gremlin-javascript ![GitHub Repo Stars](https://img.shields.io/github/stars/jbmusso/gremlin-javascript) ![GitHub last commit](https://img.shields.io/github/last-commit/jbmusso/gremlin-javascript)](https://github.com/jbmusso/gremlin-javascript) - JavaScript graph database client for TinkerPop3 Gremlin Server.
* [Elastic Gremlin ![GitHub Repo Stars](https://img.shields.io/github/stars/rmagen/elastic-gremlin) ![GitHub last commit](https://img.shields.io/github/last-commit/rmagen/elastic-gremlin)](https://github.com/rmagen/elastic-gremlin) - TinkerPop3 implementation on Elasticsearch backend.
* [Hadoop (Giraph)](http://tinkerpop.apache.org/docs/current/reference/#giraphgraphcomputer) - OLAP graph processor using Giraph.
* [Hadoop (Spark)](http://tinkerpop.apache.org/docs/current/reference/#sparkgraphcomputer) - OLAP graph processor using Spark.
* [IBM Graph](https://console.ng.bluemix.net/catalog/services/ibm-graph/) - OLTP graph database as a service.
* [Neo4j](http://tinkerpop.apache.org/docs/currentg/#neo4j-gremlin) - OLTP graph database.
* [Stardog](http://stardog.com/) - RDF graph database with OLTP and OLAP support.
* [TinkerGraph](http://tinkerpop.apache.org/docs/current/reference/#tinkergraph-gremlin) - In-memory OLTP and OLAP reference implementation.
* [Unipop ![GitHub Repo Stars](https://img.shields.io/github/stars/rmagen/unipop) ![GitHub last commit](https://img.shields.io/github/last-commit/rmagen/unipop)](https://github.com/rmagen/unipop) - OLTP Elasticsearch and JDBC backed graph.
* [DuctileDB ![GitHub Repo Stars](https://img.shields.io/github/stars/PureSolTechnologies/DuctileDB) ![GitHub last commit](https://img.shields.io/github/last-commit/PureSolTechnologies/DuctileDB)](https://github.com/PureSolTechnologies/DuctileDB) - Ductile DB is a graph database based on Hadoop/HBase which provides a vast set of features.
* [hgraphdb ![GitHub Repo Stars](https://img.shields.io/github/stars/rayokota/hgraphdb) ![GitHub last commit](https://img.shields.io/github/last-commit/rayokota/hgraphdb)](https://github.com/rayokota/hgraphdb) - HBase as a TinkerPop Graph Database.
* [JanusGraph ![GitHub Repo Stars](https://img.shields.io/github/stars/JanusGraph/janusgraph) ![GitHub last commit](https://img.shields.io/github/last-commit/JanusGraph/janusgraph)](https://github.com/JanusGraph/janusgraph) - JanusGraph: an open-source, distributed graph database http://janusgraph.org 
* [JanusGraph for DynamoDB (Amazon) ![GitHub Repo Stars](https://img.shields.io/github/stars/awslabs/dynamodb-janusgraph-storage-backend) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/dynamodb-janusgraph-storage-backend)](https://github.com/awslabs/dynamodb-janusgraph-storage-backend) - The Amazon DynamoDB storage backend for JanusGraph.
* [orientdb-gremlin ![GitHub Repo Stars](https://img.shields.io/github/stars/orientechnologies/orientdb-gremlin) ![GitHub last commit](https://img.shields.io/github/last-commit/orientechnologies/orientdb-gremlin)](https://github.com/orientechnologies/orientdb-gremlin) - TinkerPop3 Graph Structure Implementation for OrientDB.


#### <A NAME="wrappers"></A>Wrappers/Clients
##### C# .NET
*   [Teva Gremlin](https://www.nuget.org/packages/Teva.Common.Data.Gremlin/) (.NET - C#) - A Gremlin Server driver for .NET.

##### Clojure
* [ogre ![GitHub Repo Stars](https://img.shields.io/github/stars/clojurewerkz/ogre) ![GitHub last commit](https://img.shields.io/github/last-commit/clojurewerkz/ogre)](https://github.com/clojurewerkz/ogre) - Clojure library for querying TinkerPop graphs.
* [scalajs-gremlin-client ![GitHub Repo Stars](https://img.shields.io/github/stars/viagraphs/scalajs-gremlin-client) ![GitHub last commit](https://img.shields.io/github/last-commit/viagraphs/scalajs-gremlin-client)](https://github.com/viagraphs/scalajs-gremlin-client) (scala) - A Gremlin-Server client with ad-hoc extensible, reactive, typeclass based API.

##### Go
* [go-gremlin ![GitHub Repo Stars](https://img.shields.io/github/stars/go-gremlin/gremlin) ![GitHub last commit](https://img.shields.io/github/last-commit/go-gremlin/gremlin)](https://github.com/go-gremlin/gremlin) - Go graph database client for TinkerPop3 Gremlin Server.
* [Gremgo ![GitHub Repo Stars](https://img.shields.io/github/stars/qasaur/gremgo) ![GitHub last commit](https://img.shields.io/github/last-commit/qasaur/gremgo)](https://github.com/qasaur/gremgo) - A fast, efficient, and easy-to-use Go client for the TinkerPop graph database stack.
* [grammes ![GitHub Repo Stars](https://img.shields.io/github/stars/northwesternmutual/grammes) ![GitHub last commit](https://img.shields.io/github/last-commit/northwesternmutual/grammes)](https://github.com/northwesternmutual/grammes) - A Go package built to communicate with Apache TinkerPop™ Graph computing framework using Gremlin.

##### Haskell
* [greskell-websocket ![GitHub Repo Stars](https://img.shields.io/github/stars/debug-ito/greskell) ![GitHub last commit](https://img.shields.io/github/last-commit/debug-ito/greskell)](https://github.com/debug-ito/greskell) - Haskell client for TinkerPop3 Gremlin Server.

##### Java
* [gremlin-driver](http://tinkerpop.apache.org/docs/current/reference/#connecting-via-java) (java) - A Gremlin Server driver for Java.
* [neo4j-tinkerpop-api ![GitHub Repo Stars](https://img.shields.io/github/stars/neo4j-contrib/neo4j-tinkerpop-api) ![GitHub last commit](https://img.shields.io/github/last-commit/neo4j-contrib/neo4j-tinkerpop-api)](https://github.com/neo4j-contrib/neo4j-tinkerpop-api) - Apache Licensed Neo4j API for TinkerPop3.
* [neo4j-gremlin-bolt ![GitHub Repo Stars](https://img.shields.io/github/stars/SteelBridgeLabs/neo4j-gremlin-bolt) ![GitHub last commit](https://img.shields.io/github/last-commit/SteelBridgeLabs/neo4j-gremlin-bolt)](https://github.com/SteelBridgeLabs/neo4j-gremlin-bolt) - Allows use of the Apache Tinkerpop Java API with the neo4j server using the BOLT protocol.
* [Ferma ![GitHub Repo Stars](https://img.shields.io/github/stars/Syncleus/Ferma) ![GitHub last commit](https://img.shields.io/github/last-commit/Syncleus/Ferma)](https://github.com/Syncleus/Ferma) - An ORM / OGM for the TinkerPop graph stack.

##### Javascript
* [ts-tinkerpop ![GitHub Repo Stars](https://img.shields.io/github/stars/RedSeal-co/ts-tinkerpop) ![GitHub last commit](https://img.shields.io/github/last-commit/RedSeal-co/ts-tinkerpop)](https://github.com/RedSeal-co/ts-tinkerpop) - Utilities for using TinkerPop3 via the node-java API in Typescript.
* [gremlin-javascript ![GitHub Repo Stars](https://img.shields.io/github/stars/jbmusso/gremlin-javascript) ![GitHub last commit](https://img.shields.io/github/last-commit/jbmusso/gremlin-javascript)](https://github.com/jbmusso/gremlin-javascript) (js) - A Gremlin Server driver for JavaScript.

##### PHP
* [gremlin-php ![GitHub Repo Stars](https://img.shields.io/github/stars/PommeVerte/gremlin-php) ![GitHub last commit](https://img.shields.io/github/last-commit/PommeVerte/gremlin-php)](https://github.com/PommeVerte/gremlin-php) - gremlin-server php driver compatible with TinkerPop3. It will allow you to connect to gremlin-server and it's backends (Neo4J, Titan, etc.).

##### Python
* [Mogwai ![GitHub Repo Stars](https://img.shields.io/github/stars/platinummonkey/mogwai) ![GitHub last commit](https://img.shields.io/github/last-commit/platinummonkey/mogwai)](https://github.com/platinummonkey/mogwai) - TinkerPop3 Graph Database Library for Python.
* [python-gremlin-rest ![GitHub Repo Stars](https://img.shields.io/github/stars/windj007/python-gremlin-rest) ![GitHub last commit](https://img.shields.io/github/last-commit/windj007/python-gremlin-rest)](https://github.com/windj007/python-gremlin-rest) - A REST-based client for Gremlin Server.
* [gremlinclient ![GitHub Repo Stars](https://img.shields.io/github/stars/davebshow/gremlinclient) ![GitHub last commit](https://img.shields.io/github/last-commit/davebshow/gremlinclient)](https://github.com/davebshow/gremlinclient) - An asynchronous Python 2/3 client for Gremlin Server that allows for flexible coroutine syntax - Trollius, Tornado, Asyncio.
* [aiogremlin ![GitHub Repo Stars](https://img.shields.io/github/stars/davebshow/aiogremlin) ![GitHub last commit](https://img.shields.io/github/last-commit/davebshow/aiogremlin)](https://github.com/davebshow/aiogremlin) (python) - A Python 3 library based on asyncio and aiohttp that uses websockets to communicate with the Gremlin Server.
* [gremlinrestclient](http://gremlinrestclient.readthedocs.org/en/latest/) (python) - Python 2/3 library that uses HTTP to communicate with the Gremlin Server over REST.
* [goblin ![GitHub Repo Stars](https://img.shields.io/github/stars/ZEROFAIL/goblin) ![GitHub last commit](https://img.shields.io/github/last-commit/ZEROFAIL/goblin)](https://github.com/ZEROFAIL/goblin) - OGM for TinkerPop3 Gremlin Server.
* [goblin 3.5 ![GitHub Repo Stars](https://img.shields.io/github/stars/davebshow/goblin) ![GitHub last commit](https://img.shields.io/github/last-commit/davebshow/goblin)](https://github.com/davebshow/goblin) - A Python 3.5 rewrite of the TinkerPop 3 OGM Goblin.

##### Reactive
* [reactive-gremlin ![GitHub Repo Stars](https://img.shields.io/github/stars/coreyauger/reactive-gremlin) ![GitHub last commit](https://img.shields.io/github/last-commit/coreyauger/reactive-gremlin)](https://github.com/coreyauger/reactive-gremlin) (scala) - An Akka HTTP Websocket Connector.

##### Scala
* [Gremlin Scala ![GitHub Repo Stars](https://img.shields.io/github/stars/mpollmeier/gremlin-scala) ![GitHub last commit](https://img.shields.io/github/last-commit/mpollmeier/gremlin-scala)](https://github.com/mpollmeier/gremlin-scala) - Scala wrapper for Apache TinkerPop3 Graph DSL.
* [blueprints-scala ![GitHub Repo Stars](https://img.shields.io/github/stars/anvie/blueprints-scala) ![GitHub last commit](https://img.shields.io/github/last-commit/anvie/blueprints-scala)](https://github.com/anvie/blueprints-scala) - Tinkerpop Blueprints Scala.

#### <A NAME="qlang"></A>Query Languages
* [gremlin-py ![GitHub Repo Stars](https://img.shields.io/github/stars/emehrkay/gremlinpy) ![GitHub last commit](https://img.shields.io/github/last-commit/emehrkay/gremlinpy)](https://github.com/emehrkay/gremlinpy) - Write pure Python Gremlin that can be sent to Gremlin Server.
* [gremlin-scala ![GitHub Repo Stars](https://img.shields.io/github/stars/mpollmeier/gremlin-scala) ![GitHub last commit](https://img.shields.io/github/last-commit/mpollmeier/gremlin-scala)](https://github.com/mpollmeier/gremlin-scala) - A Scala language wrapper for TinkerPop3.
* [gremlin-template-string ![GitHub Repo Stars](https://img.shields.io/github/stars/jbmusso/gremlin-template-string) ![GitHub last commit](https://img.shields.io/github/last-commit/jbmusso/gremlin-template-string)](https://github.com/jbmusso/gremlin-template-string) - A Javascript Gremlin language builder.
* [ipython-gremlin ![GitHub Repo Stars](https://img.shields.io/github/stars/davebshow/ipython-gremlin) ![GitHub last commit](https://img.shields.io/github/last-commit/davebshow/ipython-gremlin)](https://github.com/davebshow/ipython-gremlin) - Gremlin in IPython and Jupyter.
* [ogre](http://ogre.clojurewerkz.org/) - A Clojure language wrapper for TinkerPop3.
* [Peapod ![GitHub Repo Stars](https://img.shields.io/github/stars/bayofmany/peapod) ![GitHub last commit](https://img.shields.io/github/last-commit/bayofmany/peapod)](https://github.com/bayofmany/peapod) - A new object-graph-wrapper for the Tinkerpop3 graph stack.
* [sparql-gremlin ![GitHub Repo Stars](https://img.shields.io/github/stars/dkuppitz/sparql-gremlin) ![GitHub last commit](https://img.shields.io/github/last-commit/dkuppitz/sparql-gremlin)](https://github.com/dkuppitz/sparql-gremlin) - A SPARQL to Gremlin traversal compiler.
* [sql-gremlin ![GitHub Repo Stars](https://img.shields.io/github/stars/twilmes/sql-gremlin) ![GitHub last commit](https://img.shields.io/github/last-commit/twilmes/sql-gremlin)](https://github.com/twilmes/sql-gremlin) - A SQL to Gremlin traversal compiler.
* [greskell ![GitHub Repo Stars](https://img.shields.io/github/stars/debug-ito/greskell) ![GitHub last commit](https://img.shields.io/github/last-commit/debug-ito/greskell)](https://github.com/debug-ito/greskell) - Haskell binding for Gremlin graph query language
* [Cypher for Gremlin ![GitHub Repo Stars](https://img.shields.io/github/stars/opencypher/cypher-for-gremlin) ![GitHub last commit](https://img.shields.io/github/last-commit/opencypher/cypher-for-gremlin)](https://github.com/opencypher/cypher-for-gremlin) -  Cypher for Gremlin adds Cypher support to any Gremlin graph database.

### <A NAME="tinkerpop2"></A>TinkerPop 2 Libraries
* [Ferma ![GitHub Repo Stars](https://img.shields.io/github/stars/Syncleus/Ferma) ![GitHub last commit](https://img.shields.io/github/last-commit/Syncleus/Ferma)](https://github.com/Syncleus/Ferma) - An ORM / OGM for the TinkerPop graph stack.
* [Frames ![GitHub Repo Stars](https://img.shields.io/github/stars/tinkerpop/frames) ![GitHub last commit](https://img.shields.io/github/last-commit/tinkerpop/frames)](https://github.com/tinkerpop/frames) - An Object to Graph Framework.
* [Archimedes ![GitHub Repo Stars](https://img.shields.io/github/stars/clojurewerkz/archimedes) ![GitHub last commit](https://img.shields.io/github/last-commit/clojurewerkz/archimedes)](https://github.com/clojurewerkz/archimedes) - Clojure library for Blueprints (part of the TinkerPop graph stack).
* [AccumuloGraph ![GitHub Repo Stars](https://img.shields.io/github/stars/JHUAPL/AccumuloGraph) ![GitHub last commit](https://img.shields.io/github/last-commit/JHUAPL/AccumuloGraph)](https://github.com/JHUAPL/AccumuloGraph) - An implementation of TinkerPop Blueprints using Accumulo.
* [Frontenac ![GitHub Repo Stars](https://img.shields.io/github/stars/Loupi/Frontenac) ![GitHub last commit](https://img.shields.io/github/last-commit/Loupi/Frontenac)](https://github.com/Loupi/Frontenac) - A .NET port of the TinkerPop Stack.
* [Mogwai ![GitHub Repo Stars](https://img.shields.io/github/stars/platinummonkey/mogwai) ![GitHub last commit](https://img.shields.io/github/last-commit/platinummonkey/mogwai)](https://github.com/platinummonkey/mogwai) - TinkerPop 2 Graph Database Library for Python.
* [spring-data-gremlin ![GitHub Repo Stars](https://img.shields.io/github/stars/gjrwebber/spring-data-gremlin) ![GitHub last commit](https://img.shields.io/github/last-commit/gjrwebber/spring-data-gremlin)](https://github.com/gjrwebber/spring-data-gremlin) - Spring data gremlin makes it easier to implement Graph based repositories. This module extends Spring Data to allow support for potentially any Graph database that implements the TinkerPop Blueprints 2.x API.
* [blueprints-scala ![GitHub Repo Stars](https://img.shields.io/github/stars/anvie/blueprints-scala) ![GitHub last commit](https://img.shields.io/github/last-commit/anvie/blueprints-scala)](https://github.com/anvie/blueprints-scala) - TinkerPop Blueprints Scala.

## <A NAME="communites"></A>Communities
* [Gremlin-users](https://groups.google.com/forum/#!forum/gremlin-users) - Mailing list for Gremlin users.
* [Stack Overflow](http://stackoverflow.com/questions/tagged/tinkerpop3) - Stack Overflow has a relatively active community.
* [TinkerPop-dev](http://mail-archives.apache.org/mod_mbox/incubator-tinkerpop-dev/) - Mailing list for TP3 deverlopers.

## <A NAME="people-to-follow"></A>People to Follow 
* [Marko Rodriguez](https://markorodriguez.com/) - Founder of TinkerPop and Aurelius.
* [Stephen Mallette](https://twitter.com/spmallette?lang=en-gb) - Senior developer for Gremlin, TinkerPop and Titan DB.
* [Daniel Kuppitz](https://about.me/daniel.kuppitz) - One of the main developers of Gremlin.
* [Jason Plurad](https://github.com/pluradj) - Senior Developer at IBM. TinkerPop committer and active on the community.

## <A NAME="tutorials-and-resources"></A>Tutorials and Resources
* [Introduction to Gremlin](http://tinkerpop.apache.org/gremlin.html) - Official introduction to the Gremlin language.
* [Datastax Introduction](https://academy.datastax.com/resources/getting-started-tinkerpop-and-gremlin) - A tutorial provided by Datastax to Gremlin and TinkerPop3.
* [TinkerPop Book](http://www.tinkerpopbook.com/) - A long promised book for Tinkeprop but never fulfilled until now. You cans till request a notification.
* [Linux Foundation Presentation](http://events.linuxfoundation.org/sites/events/files/slides/ApacheCon2015TinkerPop3.pdf) - A presentation by Linux Foundation given by David Robinson at IBM aboit Apache TinkerPop3.
* [Getting Started with TinkerPop](http://tinkerpop.apache.org/docs/current/tutorials/getting-started/) - Learn the basics of getting up and going with TinkerPop.
* [The Gremlin Console](http://tinkerpop.apache.org/docs/current/tutorials/the-gremlin-console/) - Discusses uses cases of the Gremlin Console and usage patterns.
* [Gremlin Recipes](http://tinkerpop.apache.org/docs/3.2.1-SNAPSHOT/recipes/) - Reference for common traversal patterns and style.
* [Gremlin Language Variants](http://tinkerpop.apache.org/docs/3.2.1-SNAPSHOT/tutorials/gremlin-language-variants/) - Learn how to embed Gremlin in a host programming language.
* [SQL2Gremlin](http://sql2gremlin.com/) - Learn Gremlin using typical patterns found when querying data with SQL.
* [Getting Started with Graph Databases](https://academy.datastax.com/demos/getting-started-graph-databases) - Compares relational databases to graph databases and SQL to Gremlin.
* [Graph ![GitHub Repo Stars](https://img.shields.io/github/stars/krlawrence/graph) ![GitHub last commit](https://img.shields.io/github/last-commit/krlawrence/graph)](https://github.com/krlawrence/graph) - Graph Databases, Gremlin and TinkerPop - A Tutorial.


## <A NAME="contributing"></A>How to Contribute
![alt tag](https://github.com/mohataher/awesome-tinkerpop/raw/master/awesome-tinkerpop.jpg)

Please follow the [guidelines here](contributing.md). Please, make sure your contribution and PR are awesome!

## <A NAME="license"></A>License
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](http://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [@mohataher](https://github.com/mohataher) has waived all copyright and related or neighboring rights to this work.
