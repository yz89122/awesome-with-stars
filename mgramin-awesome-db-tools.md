# Awesome Database Tools [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Community driven list of database tools

Here we will collect information about awesome useful and awesome experimental tools that simplify working with databases for DBA, DevOps, Developers and mere mortals.

Feel free to add information about your own db-tools or your favorite third-party db-tools.

## Contents
- [IDE](#ide)
- [GUI Managers/Clients](#gui-managersclients)
- [CLI tools](#cli-tools)
- [DB-schema navigation and visualization](#db-schema-navigation-and-visualization)
- [Modelers](#modelers)
- [Migration tools](#migration-tools)
- [Code generation tools](#code-generation-tools)
- [Wrappers](#wrappers)
- [Backup tools](#backup-tools)
- [Replication/Data operation](#replicationdata-operation)
- [Scripts](#scripts)
- [Monitoring/Statistics/Perfomance](#monitoringstatisticsperfomance)
  - [Prometheus](#prometheus)
  - [Zabbix](#zabbix)
- [Testing](#testing)
  - [Data generator](#data-generator)
- [Administration](#administration)
- [HA/Failover/Sharding](#hafailoversharding)
- [Kubernetes](#kubernetes)
- [Configuration Tuning](#configuration-tuning)
- [DevOps](#devops)
- [Schema samples](#schema-samples)
- [Reporting](#reporting)
- [Distributions](#distributions)
- [Security](#security)
- [Code formatters](#code-formatters)


## IDE
- [AnySQL Maestro](https://www.sqlmaestro.com/products/anysql/maestro) - Premier multi-purpose admin tool for database management, control and development.
- [Aqua Data Studio](https://www.aquafold.com/aquadatastudio) - Aqua Data Studio is productivity software for Database Developers, DBAs, and Analysts.
- [Database .net](http://fishcodelib.com/Database.htm) - Multiple database management tool with support for 20+ databases.
- [DataGrip](https://www.jetbrains.com/datagrip) - Cross-Platform IDE for Databases & SQL by JetBrains.
- [DBeaver ![GitHub Repo stars](https://img.shields.io/github/stars/dbeaver/dbeaver) ![GitHub last commit](https://img.shields.io/github/last-commit/dbeaver/dbeaver)](https://github.com/dbeaver/dbeaver) - Free universal database manager and SQL client.
- [dbForge Studio for MySQL](https://www.devart.com/dbforge/mysql/studio) - Universal IDE for MySQL and MariaDB database development, management, and administration.
- [dbForge Studio for Oracle](https://www.devart.com/dbforge/oracle/studio) - Powerful IDE for Oracle management, administration, and development.
- [dbForge Studio for PostgreSQL](https://www.devart.com/dbforge/postgresql/studio) - GUI tool for managing and developing databases and objects.
- [dbForge Studio for SQL Server](https://www.devart.com/dbforge/sql/studio) - Powerful integrated development environment for SQL Server development, management, administration, data analysis, and reporting.
- [dbKoda ![GitHub Repo stars](https://img.shields.io/github/stars/SouthbankSoftware/dbkoda) ![GitHub last commit](https://img.shields.io/github/last-commit/SouthbankSoftware/dbkoda)](https://github.com/SouthbankSoftware/dbkoda) - Modern (JavaScript/Electron framework), open source IDE for MongoDB. It has features to support development, administration and performance tuning on MongoDB databases.
- [IBExpert](http://www.ibexpert.net/ibe) - Comprehensive GUI tool for Firebird and InterBase.
- [HeidiSQL ![GitHub Repo stars](https://img.shields.io/github/stars/HeidiSQL/HeidiSQL) ![GitHub last commit](https://img.shields.io/github/last-commit/HeidiSQL/HeidiSQL)](https://github.com/HeidiSQL/HeidiSQL) - A lightweight client for managing MySQL, MSSQL and PostgreSQL, written in Delphi.
- [MySQL Workbench](https://www.mysql.com/products/workbench) - MySQL Workbench is a unified visual tool for database architects, developers, and DBAs.
- [Navicat](https://www.navicat.com/en/products#navicat) - A database development tool that allows you to simultaneously connect to MySQL, MariaDB, SQL Server, Oracle, PostgreSQL, and SQLite databases from a single application.
- [Oracle SQL Developer](http://www.oracle.com/technetwork/developer-tools/sql-developer) - Oracle SQL Developer is a free, integrated development environment that simplifies the development and management of Oracle Database in both traditional and Cloud deployments.
- [pgAdmin](https://www.pgadmin.org) - The most popular and feature rich Open Source administration and development platform for PostgreSQL, the most advanced Open Source database in the world.
- [pgAdmin3](https://www.bigsql.org/pgadmin3) - Long Term Support for pgAdmin3.
- [PL/SQL Developer](https://www.allroundautomations.com/products/pl-sql-developer) - IDE that is specifically targeted at the development of stored program units for Oracle Databases.
- [PostgreSQL Maestro](https://www.sqlmaestro.com/products/postgresql/maestro) - Complete and powerful database management, admin and development tool for PostgreSQL.
- [Toad](https://www.quest.com/toad/) - Toad is the premier database solution for developers, admins and data analysts. Manage complex database changes with a single database management tool.
- [Toad Edge](https://www.toadworld.com/products/toad-edge) - Simplified database development tool for MySQL and Postgres.
- [TOra ![GitHub Repo stars](https://img.shields.io/github/stars/tora-tool/tora) ![GitHub last commit](https://img.shields.io/github/last-commit/tora-tool/tora)](https://github.com/tora-tool/tora) - TOra is an open source SQL IDE for Oracle, MySQL and PostgreSQL dbs.
- [Valentina Studio](https://www.valentina-db.com/en/valentina-studio-overview) - Create, administer, query and explore Valentina DB, MySQL, MariaDB, PostgreSQL and SQLite databases for FREE.


## GUI Managers/Clients
- [Adminer ![GitHub Repo stars](https://img.shields.io/github/stars/vrana/adminer) ![GitHub last commit](https://img.shields.io/github/last-commit/vrana/adminer)](https://github.com/vrana/adminer) - Database management in a single PHP file.
- [Beekeeper Studio ![GitHub Repo stars](https://img.shields.io/github/stars/beekeeper-studio/beekeeper-studio) ![GitHub last commit](https://img.shields.io/github/last-commit/beekeeper-studio/beekeeper-studio)](https://github.com/beekeeper-studio/beekeeper-studio) - Open Source SQL Editor and Database Manager with a privacy commitment in their mission statement.
- [DbVisualizer](https://www.dbvis.com) - Universal database tool for developers, DBAs and analysts.
- [HouseOps ![GitHub Repo stars](https://img.shields.io/github/stars/HouseOps/HouseOps) ![GitHub last commit](https://img.shields.io/github/last-commit/HouseOps/HouseOps)](https://github.com/HouseOps/HouseOps) - Enterprise ClickHouse Ops UI for you run querys, monitoring ClickHouse health and make a lot of others thinks.
- [JackDB](https://www.jackdb.com) - Direct SQL access to all your data, no matter where it lives.
- [OmniDB ![GitHub Repo stars](https://img.shields.io/github/stars/OmniDB/OmniDB) ![GitHub last commit](https://img.shields.io/github/last-commit/OmniDB/OmniDB)](https://github.com/OmniDB/OmniDB) - Web tool for database management.
- [Pgweb ![GitHub Repo stars](https://img.shields.io/github/stars/sosedoff/pgweb) ![GitHub last commit](https://img.shields.io/github/last-commit/sosedoff/pgweb)](https://github.com/sosedoff/pgweb) - Web-based database browser for PostgreSQL, written in Go and works on macOS, Linux and Windows machines.
- [phpLiteAdmin](https://www.phpliteadmin.org) - Web-based SQLite database admin tool written in PHP with support for SQLite3 and SQLite2.
- [phpMyAdmin ![GitHub Repo stars](https://img.shields.io/github/stars/phpmyadmin/phpmyadmin) ![GitHub last commit](https://img.shields.io/github/last-commit/phpmyadmin/phpmyadmin)](https://github.com/phpmyadmin/phpmyadmin) - A web interface for MySQL and MariaDB.
- [psequel](http://www.psequel.com) - PSequel provides a clean and simple interface for you to perform common PostgreSQL tasks quickly.
- [PopSQL](https://popsql.com) - Modern, collaborative SQL editor for your team.
- [Postico](https://eggerapps.at/postico) - A Modern PostgreSQL Client for the Mac.
- [Robo 3T ![GitHub Repo stars](https://img.shields.io/github/stars/Studio3T/robomongo) ![GitHub last commit](https://img.shields.io/github/last-commit/Studio3T/robomongo)](https://github.com/Studio3T/robomongo) - Robo 3T (formerly Robomongo) is a shell-centric cross-platform MongoDB management tool.
- [Sequel Pro ![GitHub Repo stars](https://img.shields.io/github/stars/sequelpro/sequelpro) ![GitHub last commit](https://img.shields.io/github/last-commit/sequelpro/sequelpro)](https://github.com/sequelpro/sequelpro) - Sequel Pro is a fast, easy-to-use Mac database management application for working with MySQL & MariaDB databases.
- [SQL Operations Studio ![GitHub Repo stars](https://img.shields.io/github/stars/microsoft/sqlopsstudio) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/sqlopsstudio)](https://github.com/microsoft/sqlopsstudio) - A data management tool that enables working with SQL Server, Azure SQL DB and SQL DW from Windows, macOS and Linux.
- [SQLite Expert](http://www.sqliteexpert.com/index.html) - Graphical interface supports all SQLite features.
- [sqlpad ![GitHub Repo stars](https://img.shields.io/github/stars/rickbergfalk/sqlpad) ![GitHub last commit](https://img.shields.io/github/last-commit/rickbergfalk/sqlpad)](https://github.com/rickbergfalk/sqlpad) - Web-based SQL editor run in your own private cloud.
- [SQLPro](https://www.macpostgresclient.com) - A simple, powerful Postgres manager for macOS.
- [SQuirreL](https://sourceforge.net/projects/squirrel-sql) - Graphical SQL client written in Java that will allow you to view the structure of a JDBC compliant database, browse the data in tables, issue SQL commands etc.
- [SQLTools ![GitHub Repo stars](https://img.shields.io/github/stars/mtxr/vscode-sqltools) ![GitHub last commit](https://img.shields.io/github/last-commit/mtxr/vscode-sqltools)](https://github.com/mtxr/vscode-sqltools) - Database management for VSCode.
- [SQLyog](https://www.webyog.com/product/sqlyog) - The most complete and easy to use MySQL GUI.
- [Tabix ![GitHub Repo stars](https://img.shields.io/github/stars/tabixio/tabix) ![GitHub last commit](https://img.shields.io/github/last-commit/tabixio/tabix)](https://github.com/tabixio/tabix) - SQL Editor & Open source simple business intelligence for Clickhouse.
- [TablePlus ![GitHub Repo stars](https://img.shields.io/github/stars/TablePlus/TablePlus) ![GitHub last commit](https://img.shields.io/github/last-commit/TablePlus/TablePlus)](https://github.com/TablePlus/TablePlus) - Modern, native, and friendly GUI tool for relational databases: MySQL, PostgreSQL, SQLite & more.
- [TeamPostgreSQL](http://www.teampostgresql.com) - PostgreSQL Web Administration GUI - use your PostgreSQL databases from anywhere, with rich, lightning-fast AJAX web interface.


## CLI tools
- [ipython-sql ![GitHub Repo stars](https://img.shields.io/github/stars/catherinedevlin/ipython-sql) ![GitHub last commit](https://img.shields.io/github/last-commit/catherinedevlin/ipython-sql)](https://github.com/catherinedevlin/ipython-sql) - Connect to a database for issue SQL commands within IPython or IPython Notebook.
- [iredis ![GitHub Repo stars](https://img.shields.io/github/stars/laixintao/iredis) ![GitHub last commit](https://img.shields.io/github/last-commit/laixintao/iredis)](https://github.com/laixintao/iredis) - A Cli for Redis with AutoCompletion and Syntax Highlighting.
- [pgcenter ![GitHub Repo stars](https://img.shields.io/github/stars/lesovsky/pgcenter) ![GitHub last commit](https://img.shields.io/github/last-commit/lesovsky/pgcenter)](https://github.com/lesovsky/pgcenter) - Top-like admin tool for PostgreSQL.
- [pg_activity ![GitHub Repo stars](https://img.shields.io/github/stars/julmon/pg_activity) ![GitHub last commit](https://img.shields.io/github/last-commit/julmon/pg_activity)](https://github.com/julmon/pg_activity) - Top like application for PostgreSQL server activity monitoring.
- [pg_top ![GitHub Repo stars](https://img.shields.io/github/stars/markwkm/pg_top) ![GitHub last commit](https://img.shields.io/github/last-commit/markwkm/pg_top)](https://github.com/markwkm/pg_top) - 'top' for PostgreSQL.
- [pspg ![GitHub Repo stars](https://img.shields.io/github/stars/okbob/pspg) ![GitHub last commit](https://img.shields.io/github/last-commit/okbob/pspg)](https://github.com/okbob/pspg) - Postgres Pager.
- [SQLcl](http://www.oracle.com/technetwork/developer-tools/sqlcl/overview/index.html) - Oracle SQL Developer Command Line (SQLcl) is a free command line interface for Oracle Database.
- [usql ![GitHub Repo stars](https://img.shields.io/github/stars/xo/usql) ![GitHub last commit](https://img.shields.io/github/last-commit/xo/usql)](https://github.com/xo/usql) - A universal command-line interface for PostgreSQL, MySQL, Oracle Database, SQLite3, Microsoft SQL Server, [and many other databases ![GitHub Repo stars](https://img.shields.io/github/stars/xo/usql) ![GitHub last commit](https://img.shields.io/github/last-commit/xo/usql)](https://github.com/xo/usql#database-support) including NoSQL and non-relational databases!

### dbcli
- [athenacli ![GitHub Repo stars](https://img.shields.io/github/stars/dbcli/athenacli) ![GitHub last commit](https://img.shields.io/github/last-commit/dbcli/athenacli)](https://github.com/dbcli/athenacli) - AthenaCLI is a CLI tool for AWS Athena service that can do auto-completion and syntax highlighting.
- [litecli ![GitHub Repo stars](https://img.shields.io/github/stars/dbcli/litecli) ![GitHub last commit](https://img.shields.io/github/last-commit/dbcli/litecli)](https://github.com/dbcli/litecli) - CLI for SQLite Databases with auto-completion and syntax highlighting.
- [mssql-cli ![GitHub Repo stars](https://img.shields.io/github/stars/dbcli/mssql-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/dbcli/mssql-cli)](https://github.com/dbcli/mssql-cli) - A command-line client for SQL Server with auto-completion and syntax highlighting.
- [mycli ![GitHub Repo stars](https://img.shields.io/github/stars/dbcli/mycli) ![GitHub last commit](https://img.shields.io/github/last-commit/dbcli/mycli)](https://github.com/dbcli/mycli) - A Terminal Client for MySQL with AutoCompletion and Syntax Highlighting.
- [pgcli ![GitHub Repo stars](https://img.shields.io/github/stars/dbcli/pgcli) ![GitHub last commit](https://img.shields.io/github/last-commit/dbcli/pgcli)](https://github.com/dbcli/pgcli) - Postgres CLI with autocompletion and syntax highlighting.
- [vcli ![GitHub Repo stars](https://img.shields.io/github/stars/dbcli/vcli) ![GitHub last commit](https://img.shields.io/github/last-commit/dbcli/vcli)](https://github.com/dbcli/vcli) - Vertica CLI with auto-completion and syntax highlighting.


## DB-schema navigation and visualization
- [dbdiagram.io](https://dbdiagram.io) - Quick and simple tool for help you draw your database relationship diagrams and flow quickly using simple DSL language.
- [ERAlchemy ![GitHub Repo stars](https://img.shields.io/github/stars/Alexis-benoist/eralchemy) ![GitHub last commit](https://img.shields.io/github/last-commit/Alexis-benoist/eralchemy)](https://github.com/Alexis-benoist/eralchemy) - Entity Relation Diagrams generation tool.
- [SchemaCrawler ![GitHub Repo stars](https://img.shields.io/github/stars/schemacrawler/SchemaCrawler) ![GitHub last commit](https://img.shields.io/github/last-commit/schemacrawler/SchemaCrawler)](https://github.com/schemacrawler/SchemaCrawler) - A free database schema discovery and comprehension tool.
- [Schema Spy ![GitHub Repo stars](https://img.shields.io/github/stars/schemaspy/schemaspy) ![GitHub last commit](https://img.shields.io/github/last-commit/schemaspy/schemaspy)](https://github.com/schemaspy/schemaspy) - Generating your database to HTML documentation, including Entity Relationship diagrams.
- [tbls ![GitHub Repo stars](https://img.shields.io/github/stars/k1LoW/tbls) ![GitHub last commit](https://img.shields.io/github/last-commit/k1LoW/tbls)](https://github.com/k1LoW/tbls) - CI-Friendly tool for document a database, written in Go.


## Modelers
- [Navicat Data Modeler](https://www.navicat.com/en/products/navicat-data-modeler) - A powerful and cost-effective database design tool which helps you build high-quality conceptual, logical and physical data models.
- [Oracle SQL Developer Data Modeler](http://www.oracle.com/technetwork/developer-tools/datamodeler/overview/index.html) - Oracle SQL Developer Data Modeler is a free graphical tool that enhances productivity and simplifies data modeling tasks.
- [pgmodeler ![GitHub Repo stars](https://img.shields.io/github/stars/pgmodeler/pgmodeler) ![GitHub last commit](https://img.shields.io/github/last-commit/pgmodeler/pgmodeler)](https://github.com/pgmodeler/pgmodeler) - Data modeling tool designed for PostgreSQL.


## Migration tools
- [2bass ![GitHub Repo stars](https://img.shields.io/github/stars/CourseOrchestra/2bass) ![GitHub last commit](https://img.shields.io/github/last-commit/CourseOrchestra/2bass)](https://github.com/CourseOrchestra/2bass) - Database configuration-as-code tool that utilizes concept of idempotent DDL scripts.
- [flyway ![GitHub Repo stars](https://img.shields.io/github/stars/flyway/flyway) ![GitHub last commit](https://img.shields.io/github/last-commit/flyway/flyway)](https://github.com/flyway/flyway) - Database migration tool.
- [gh-ost ![GitHub Repo stars](https://img.shields.io/github/stars/github/gh-ost) ![GitHub last commit](https://img.shields.io/github/last-commit/github/gh-ost)](https://github.com/github/gh-ost) - Online schema migration for MySQL.
- [liquibase ![GitHub Repo stars](https://img.shields.io/github/stars/liquibase/liquibase) ![GitHub last commit](https://img.shields.io/github/last-commit/liquibase/liquibase)](https://github.com/liquibase/liquibase) - Database-independent library for tracking, managing and applying database schema changes.
- [migra ![GitHub Repo stars](https://img.shields.io/github/stars/djrobstep/migra) ![GitHub last commit](https://img.shields.io/github/last-commit/djrobstep/migra)](https://github.com/djrobstep/migra) - Like diff but for PostgreSQL schemas.
- [node-pg-migrate ![GitHub Repo stars](https://img.shields.io/github/stars/salsita/node-pg-migrate) ![GitHub last commit](https://img.shields.io/github/last-commit/salsita/node-pg-migrate)](https://github.com/salsita/node-pg-migrate) - Node.js database migration management built exclusively for postgres. (But can also be used for other DBs conforming to SQL standard - e.g. CockroachDB.)
- [Prisma Migrate ![GitHub Repo stars](https://img.shields.io/github/stars/prisma/migrate) ![GitHub last commit](https://img.shields.io/github/last-commit/prisma/migrate)](https://github.com/prisma/migrate) - Declarative database schema migration tool that uses a declarative data modeling syntax to describe your database schema.
- [Pyrseas ![GitHub Repo stars](https://img.shields.io/github/stars/perseas/Pyrseas) ![GitHub last commit](https://img.shields.io/github/last-commit/perseas/Pyrseas)](https://github.com/perseas/Pyrseas) - Provides utilities to describe a PostgreSQL database schema as YAML.
- [SchemaHero ![GitHub Repo stars](https://img.shields.io/github/stars/schemahero/schemahero) ![GitHub last commit](https://img.shields.io/github/last-commit/schemahero/schemahero)](https://github.com/schemahero/schemahero) - A Kubernetes operator for declarative database schema management (gitops for database schemas).
- [Sqitch ![GitHub Repo stars](https://img.shields.io/github/stars/sqitchers/sqitch) ![GitHub last commit](https://img.shields.io/github/last-commit/sqitchers/sqitch)](https://github.com/sqitchers/sqitch) - Sensible database-native change management for framework-free development and dependable deployment.
- [yuniql ![GitHub Repo stars](https://img.shields.io/github/stars/rdagumampan/yuniql) ![GitHub last commit](https://img.shields.io/github/last-commit/rdagumampan/yuniql)](https://github.com/rdagumampan/yuniql) - Yet another schema versioning and migration tool just made with native .NET Core 3.0+ and hopefully better.

## Code generation tools
- [ddl-generator ![GitHub Repo stars](https://img.shields.io/github/stars/catherinedevlin/ddl-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/catherinedevlin/ddl-generator)](https://github.com/catherinedevlin/ddl-generator) - Infers SQL DDL (Data Definition Language) from table data.
- [scheme2ddl ![GitHub Repo stars](https://img.shields.io/github/stars/qwazer/scheme2ddl) ![GitHub last commit](https://img.shields.io/github/last-commit/qwazer/scheme2ddl)](https://github.com/qwazer/scheme2ddl) - Command line util for export Oracle schema to set of ddl init scripts with ability to filter undesirable information, separate DDL in different files, pretty format output.


## Wrappers
- [DreamFactory ![GitHub Repo stars](https://img.shields.io/github/stars/dreamfactorysoftware/dreamfactory) ![GitHub last commit](https://img.shields.io/github/last-commit/dreamfactorysoftware/dreamfactory)](https://github.com/dreamfactorysoftware/dreamfactory) - A open source REST API backend for mobile, web, and IoT applications.
- [FBSQL Frontend Backend SQL ![GitHub Repo stars](https://img.shields.io/github/stars/fbsql/fbsql) ![GitHub last commit](https://img.shields.io/github/last-commit/fbsql/fbsql)](https://github.com/fbsql/fbsql) - Work (secure) with your backend database within HTML.
- [Hasura GraphQL Engine ![GitHub Repo stars](https://img.shields.io/github/stars/hasura/graphql-engine) ![GitHub last commit](https://img.shields.io/github/last-commit/hasura/graphql-engine)](https://github.com/hasura/graphql-engine) - Blazing fast, instant realtime GraphQL APIs on Postgres with fine grained access control, also trigger webhooks on database events.
- [jl-sql ![GitHub Repo stars](https://img.shields.io/github/stars/avz/jl-sql) ![GitHub last commit](https://img.shields.io/github/last-commit/avz/jl-sql)](https://github.com/avz/jl-sql) - SQL for JSON and CSV streams.
- [mysql_fdw ![GitHub Repo stars](https://img.shields.io/github/stars/EnterpriseDB/mysql_fdw) ![GitHub last commit](https://img.shields.io/github/last-commit/EnterpriseDB/mysql_fdw)](https://github.com/EnterpriseDB/mysql_fdw) - PostgreSQL foreign data wrapper for MySQL.
- [Oracle REST Data Services](http://www.oracle.com/technetwork/developer-tools/rest-data-services) - A mid-tier Java application, ORDS maps HTTP(S) verbs (GET, POST, PUT, DELETE, etc.) to database transactions and returns any results formatted using JSON.
- [Prisma ![GitHub Repo stars](https://img.shields.io/github/stars/prismagraphql/prisma) ![GitHub last commit](https://img.shields.io/github/last-commit/prismagraphql/prisma)](https://github.com/prismagraphql/prisma) -  Prisma turns your database into a realtime GraphQL API.
- [PostgREST ![GitHub Repo stars](https://img.shields.io/github/stars/PostgREST/postgrest) ![GitHub last commit](https://img.shields.io/github/last-commit/PostgREST/postgrest)](https://github.com/PostgREST/postgrest) - REST API for any Postgres database.
- [prest ![GitHub Repo stars](https://img.shields.io/github/stars/prest/prest) ![GitHub last commit](https://img.shields.io/github/last-commit/prest/prest)](https://github.com/prest/prest) - Is a way to serve a RESTful API from any databases written in Go.
- [restSQL ![GitHub Repo stars](https://img.shields.io/github/stars/restsql/restsql) ![GitHub last commit](https://img.shields.io/github/last-commit/restsql/restsql)](https://github.com/restsql/restsql) - SQL generator with Java and HTTP APIs, uses a simple RESTful HTTP API with XML or JSON serialization.
- [resquel ![GitHub Repo stars](https://img.shields.io/github/stars/formio/resquel) ![GitHub last commit](https://img.shields.io/github/last-commit/formio/resquel)](https://github.com/formio/resquel) - Easily convert your SQL database into a REST API.
- [Saltcorn ![GitHub Repo stars](https://img.shields.io/github/stars/saltcorn/saltcorn) ![GitHub last commit](https://img.shields.io/github/last-commit/saltcorn/saltcorn)](https://github.com/saltcorn/saltcorn) - Open source no-code builder for web datatabase applications. Server and drag-and-drop UI builder, data stored in PostgreSQL or SQLite.
- [sandman2 ![GitHub Repo stars](https://img.shields.io/github/stars/jeffknupp/sandman2) ![GitHub last commit](https://img.shields.io/github/last-commit/jeffknupp/sandman2)](https://github.com/jeffknupp/sandman2) - Automatically generate a RESTful API service for your legacy database.
- [sql-boot ![GitHub Repo stars](https://img.shields.io/github/stars/CrocInc/sql-boot) ![GitHub last commit](https://img.shields.io/github/last-commit/CrocInc/sql-boot)](https://github.com/CrocInc/sql-boot) - Advanced REST and UI wrapper for your SQL-queries.


## Backup tools
- [pgbackrest ![GitHub Repo stars](https://img.shields.io/github/stars/pgbackrest/pgbackrest) ![GitHub last commit](https://img.shields.io/github/last-commit/pgbackrest/pgbackrest)](https://github.com/pgbackrest/pgbackrest) - Reliable PostgreSQL Backup & Restore.
- [BaRMan ![GitHub Repo stars](https://img.shields.io/github/stars/2ndquadrant-it/barman) ![GitHub last commit](https://img.shields.io/github/last-commit/2ndquadrant-it/barman)](https://github.com/2ndquadrant-it/barman) - Backup and Recovery Manager for PostgreSQL.


## Replication/Data operation
- [Datasette ![GitHub Repo stars](https://img.shields.io/github/stars/simonw/datasette) ![GitHub last commit](https://img.shields.io/github/last-commit/simonw/datasette)](https://github.com/simonw/datasette) - A tool for exploring and publishing data.
- [dtle ![GitHub Repo stars](https://img.shields.io/github/stars/actiontech/dtle) ![GitHub last commit](https://img.shields.io/github/last-commit/actiontech/dtle)](https://github.com/actiontech/dtle) - Distributed Data Transfer Service for MySQL.
- [pgsync ![GitHub Repo stars](https://img.shields.io/github/stars/ankane/pgsync) ![GitHub last commit](https://img.shields.io/github/last-commit/ankane/pgsync)](https://github.com/ankane/pgsync) - Sync Postgres data between databases.
- [pg_chameleon ![GitHub Repo stars](https://img.shields.io/github/stars/the4thdoctor/pg_chameleon) ![GitHub last commit](https://img.shields.io/github/last-commit/the4thdoctor/pg_chameleon)](https://github.com/the4thdoctor/pg_chameleon) - MySQL to PostgreSQL replica system written in Python 3. The system use the library mysql-replication to pull the row images from MySQL which are stored into PostgreSQL as JSONB.
- [PGDeltaStream ![GitHub Repo stars](https://img.shields.io/github/stars/hasura/pgdeltastream) ![GitHub last commit](https://img.shields.io/github/last-commit/hasura/pgdeltastream)](https://github.com/hasura/pgdeltastream) - A Golang webserver to stream Postgres changes atleast-once over websockets, using Postgres logical decoding feature.
- [repmgr ![GitHub Repo stars](https://img.shields.io/github/stars/2ndQuadrant/repmgr) ![GitHub last commit](https://img.shields.io/github/last-commit/2ndQuadrant/repmgr)](https://github.com/2ndQuadrant/repmgr) - The Most Popular Replication Manager for PostgreSQL.


## Scripts
- [pgx_scripts ![GitHub Repo stars](https://img.shields.io/github/stars/pgexperts/pgx_scripts) ![GitHub last commit](https://img.shields.io/github/last-commit/pgexperts/pgx_scripts)](https://github.com/pgexperts/pgx_scripts) - A collection of useful little scripts for database analysis and administration, created by our team at PostgreSQL Experts.
- [pgsql-bloat-estimation ![GitHub Repo stars](https://img.shields.io/github/stars/ioguix/pgsql-bloat-estimation) ![GitHub last commit](https://img.shields.io/github/last-commit/ioguix/pgsql-bloat-estimation)](https://github.com/ioguix/pgsql-bloat-estimation) - Queries to mesure statistical bloat in indexes and tables for PostgreSQL.
- [pgWikiDont](https://gitlab.com/depesz/pgWikiDont) - SQL test that checks if your database follows rules from <https://wiki.postgresql.org/wiki/Don't_Do_This>.
- [pg-utils ![GitHub Repo stars](https://img.shields.io/github/stars/dataegret/pg-utils) ![GitHub last commit](https://img.shields.io/github/last-commit/dataegret/pg-utils)](https://github.com/dataegret/pg-utils) - Useful PostgreSQL utilities.
- [Postgres cheat sheet](https://postgrescheatsheet.com) - Useful SQL-scripts and commands by <timescale.com>.
- [postgres_dba ![GitHub Repo stars](https://img.shields.io/github/stars/NikolayS/postgres_dba) ![GitHub last commit](https://img.shields.io/github/last-commit/NikolayS/postgres_dba)](https://github.com/NikolayS/postgres_dba) - The missing set of useful tools for Postgres DBAs and all engineers.
- [postgres_queries_and_commands.sql](https://gist.github.com/rgreenjr/3637525) - Useful PostgreSQL Queries and Commands.
- [TPT ![GitHub Repo stars](https://img.shields.io/github/stars/tanelpoder/tpt-oracle) ![GitHub last commit](https://img.shields.io/github/last-commit/tanelpoder/tpt-oracle)](https://github.com/tanelpoder/tpt-oracle) - These sqlplus scripts are for Oracle Database performance optimization & troubleshooting.


## Monitoring/Statistics/Perfomance
- [ASH Viewer ![GitHub Repo stars](https://img.shields.io/github/stars/akardapolov/ASH-Viewer) ![GitHub last commit](https://img.shields.io/github/last-commit/akardapolov/ASH-Viewer)](https://github.com/akardapolov/ASH-Viewer) - Provides a graphical view of active session history data within the Oracle and PostgreSQL DB.
- [Monyog](https://www.webyog.com/product/monyog) - Agentless & Cost-effective MySQL Monitoring Tool.
- [mssql-monitoring ![GitHub Repo stars](https://img.shields.io/github/stars/microsoft/mssql-monitoring) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/mssql-monitoring)](https://github.com/microsoft/mssql-monitoring) - Monitor your SQL Server on Linux performance using collectd, InfluxDB and Grafana.
- [Navicat Monitor](https://www.navicat.com/en/products/navicat-monitor) - A safe, simple and agentless remote server monitoring tool that is packed with powerful features to make your monitoring effective as possible.
- [Percona Monitoring and Management ![GitHub Repo stars](https://img.shields.io/github/stars/percona/pmm) ![GitHub last commit](https://img.shields.io/github/last-commit/percona/pmm)](https://github.com/percona/pmm) - Open source platform for managing and monitoring MySQL and MongoDB performance.
- [pganalyze collector ![GitHub Repo stars](https://img.shields.io/github/stars/pganalyze/collector) ![GitHub last commit](https://img.shields.io/github/last-commit/pganalyze/collector)](https://github.com/pganalyze/collector) - Pganalyze statistics collector for gathering PostgreSQL metrics and log data.
- [postgres-checkup](https://gitlab.com/postgres-ai/postgres-checkup) - New-generation diagnostics tool that allows users to do a deep analysis of the health of Postgres databases.
- [pgDash](https://pgdash.io) - Measure and track every aspect of your PostgreSQL databases.
- [PgHero ![GitHub Repo stars](https://img.shields.io/github/stars/ankane/pghero) ![GitHub last commit](https://img.shields.io/github/last-commit/ankane/pghero)](https://github.com/ankane/pghero) - A performance dashboard for Postgres - health checks, suggested indexes, and more.
- [pgmetrics ![GitHub Repo stars](https://img.shields.io/github/stars/rapidloop/pgmetrics) ![GitHub last commit](https://img.shields.io/github/last-commit/rapidloop/pgmetrics)](https://github.com/rapidloop/pgmetrics) - Collect and display information and stats from a running PostgreSQL server.
- [pgMustard](https://www.pgmustard.com) - A user interface for Postgres explain plans, plus tips to improve performance.
- [pgstats ![GitHub Repo stars](https://img.shields.io/github/stars/gleu/pgstats) ![GitHub last commit](https://img.shields.io/github/last-commit/gleu/pgstats)](https://github.com/gleu/pgstats) - Collects PostgreSQL statistics, and either saves them in CSV files or print them on the stdout.
- [pgwatch2 ![GitHub Repo stars](https://img.shields.io/github/stars/cybertec-postgresql/pgwatch2) ![GitHub last commit](https://img.shields.io/github/last-commit/cybertec-postgresql/pgwatch2)](https://github.com/cybertec-postgresql/pgwatch2) - Flexible self-contained PostgreSQL metrics monitoring/dashboarding solution.
- [Telegraf PostgreSQL plugin ![GitHub Repo stars](https://img.shields.io/github/stars/influxdata/telegraf) ![GitHub last commit](https://img.shields.io/github/last-commit/influxdata/telegraf)](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/postgresql) - Provides metrics for your postgres database.

### Prometheus
- [pgSCV ![GitHub Repo stars](https://img.shields.io/github/stars/weaponry/pgscv) ![GitHub last commit](https://img.shields.io/github/last-commit/weaponry/pgscv)](https://github.com/weaponry/pgscv) - Metrics exporter for PostgreSQL and Postgres-related services.
- [postgres_exporter ![GitHub Repo stars](https://img.shields.io/github/stars/wrouesnel/postgres_exporter) ![GitHub last commit](https://img.shields.io/github/last-commit/wrouesnel/postgres_exporter)](https://github.com/wrouesnel/postgres_exporter) - Prometheus exporter for PostgreSQL server metrics.

### Zabbix
- [Mamonsu ![GitHub Repo stars](https://img.shields.io/github/stars/postgrespro/mamonsu) ![GitHub last commit](https://img.shields.io/github/last-commit/postgrespro/mamonsu)](https://github.com/postgrespro/mamonsu) - Monitoring agent for PostgreSQL.
- [Orabbix](http://www.smartmarmot.com/wiki/index.php?title=Orabbix) - Orabbix is a plugin designed to work with Zabbix Enterprise Monitor to provide multi-tiered monitoring, performance and availability reporting and measurement for Oracle Databases, along with server performance metrics.
- [pg_monz ![GitHub Repo stars](https://img.shields.io/github/stars/pg-monz/pg_monz) ![GitHub last commit](https://img.shields.io/github/last-commit/pg-monz/pg_monz)](https://github.com/pg-monz/pg_monz) - This is the Zabbix monitoring template for PostgreSQL Database.
- [Pyora ![GitHub Repo stars](https://img.shields.io/github/stars/bicofino/Pyora) ![GitHub last commit](https://img.shields.io/github/last-commit/bicofino/Pyora)](https://github.com/bicofino/Pyora) - Python script to monitor Oracle Databases.
- [ZabbixDBA ![GitHub Repo stars](https://img.shields.io/github/stars/anetrusov/ZabbixDBA) ![GitHub last commit](https://img.shields.io/github/last-commit/anetrusov/ZabbixDBA)](https://github.com/anetrusov/ZabbixDBA) - ZabbixDBA is fast, flexible, and continuously developing plugin to monitor your RDBMS.


## Testing
- [DbFit ![GitHub Repo stars](https://img.shields.io/github/stars/dbfit/dbfit) ![GitHub last commit](https://img.shields.io/github/last-commit/dbfit/dbfit)](https://github.com/dbfit/dbfit) - A database testing framework that supports easy test-driven development of your database code.
- [RegreSQL ![GitHub Repo stars](https://img.shields.io/github/stars/dimitri/regresql) ![GitHub last commit](https://img.shields.io/github/last-commit/dimitri/regresql)](https://github.com/dimitri/regresql) - Regression Testing your SQL queries.


### Data generator
- [Databene Benerator](https://sourceforge.net/projects/benerator) - It is a framework for generating realistic and valid high-volume test data for your system under test (avoiding the Datalite anti-pattern).
- [dbForge Data Generator for MySQL](https://www.devart.com/dbforge/mysql/data-generator) - Powerful GUI tool for creating massive volumes of realistic test data.
- [dbForge Data Generator for Oracle](https://www.devart.com/dbforge/oracle/data-generator) - Small but mighty GUI tool for populating Oracle schemas with tons of realistic test data.
- [dbForge Data Generator for SQL Server](https://www.devart.com/dbforge/sql/data-generator) - Powerful GUI tool for a fast generation of meaningful test data for databases.


## Administration
- [pgbadger ![GitHub Repo stars](https://img.shields.io/github/stars/dalibo/pgbadger) ![GitHub last commit](https://img.shields.io/github/last-commit/dalibo/pgbadger)](https://github.com/dalibo/pgbadger) - A fast PostgreSQL Log Analyzer.
- [pgbedrock ![GitHub Repo stars](https://img.shields.io/github/stars/Squarespace/pgbedrock) ![GitHub last commit](https://img.shields.io/github/last-commit/Squarespace/pgbedrock)](https://github.com/Squarespace/pgbedrock) - Manage a Postgres cluster's roles, role memberships, schema ownership, and privileges.
- [pgslice ![GitHub Repo stars](https://img.shields.io/github/stars/ankane/pgslice) ![GitHub last commit](https://img.shields.io/github/last-commit/ankane/pgslice)](https://github.com/ankane/pgslice) - Postgres partitioning as easy as pie.


## HA/Failover/Sharding
- [Citus ![GitHub Repo stars](https://img.shields.io/github/stars/citusdata/citus) ![GitHub last commit](https://img.shields.io/github/last-commit/citusdata/citus)](https://github.com/citusdata/citus) - Postgres extension that distributes your data and your queries across multiple nodes.
- [patroni ![GitHub Repo stars](https://img.shields.io/github/stars/zalando/patroni) ![GitHub last commit](https://img.shields.io/github/last-commit/zalando/patroni)](https://github.com/zalando/patroni) - A template for PostgreSQL High Availability with ZooKeeper, etcd, or Consul.
- [Percona XtraDB Cluster ![GitHub Repo stars](https://img.shields.io/github/stars/percona/percona-xtradb-cluster) ![GitHub last commit](https://img.shields.io/github/last-commit/percona/percona-xtradb-cluster)](https://github.com/percona/percona-xtradb-cluster) - A High Scalability Solution for MySQL Clustering and High Availability.
- [stolon ![GitHub Repo stars](https://img.shields.io/github/stars/sorintlab/stolon) ![GitHub last commit](https://img.shields.io/github/last-commit/sorintlab/stolon)](https://github.com/sorintlab/stolon) - Cloud native PostgreSQL manager for PostgreSQL high availability.
- [pg_auto_failover ![GitHub Repo stars](https://img.shields.io/github/stars/citusdata/pg_auto_failover) ![GitHub last commit](https://img.shields.io/github/last-commit/citusdata/pg_auto_failover)](https://github.com/citusdata/pg_auto_failover) - Postgres extension and service for automated failover and high-availability.
- [pglookout ![GitHub Repo stars](https://img.shields.io/github/stars/aiven/pglookout) ![GitHub last commit](https://img.shields.io/github/last-commit/aiven/pglookout)](https://github.com/aiven/pglookout) - PostgreSQL replication monitoring and failover daemon.
- [PostgreSQL Automatic Failover ![GitHub Repo stars](https://img.shields.io/github/stars/ClusterLabs/PAF) ![GitHub last commit](https://img.shields.io/github/last-commit/ClusterLabs/PAF)](https://github.com/ClusterLabs/PAF) - High-Availibility for Postgres, based on industry references Pacemaker and Corosync.
- [postgresql_cluster ![GitHub Repo stars](https://img.shields.io/github/stars/vitabaks/postgresql_cluster) ![GitHub last commit](https://img.shields.io/github/last-commit/vitabaks/postgresql_cluster)](https://github.com/vitabaks/postgresql_cluster) - PostgreSQL High-Availability Cluster (based on "Patroni" and "DCS(etcd)"). Automating deployment with Ansible.
- [Vitess ![GitHub Repo stars](https://img.shields.io/github/stars/vitessio/vitess) ![GitHub last commit](https://img.shields.io/github/last-commit/vitessio/vitess)](https://github.com/vitessio/vitess) - Database clustering system for horizontal scaling of MySQL through generalized sharding.


## Kubernetes
- [KubeDB](https://kubedb.com) - Making running production-grade databases easy on Kubernetes.
- [Postgres operator ![GitHub Repo stars](https://img.shields.io/github/stars/zalando/postgres-operator) ![GitHub last commit](https://img.shields.io/github/last-commit/zalando/postgres-operator)](https://github.com/zalando/postgres-operator) - The Postgres Operator enables highly-available PostgreSQL clusters on Kubernetes (K8s) powered by Patroni.
- [Spilo ![GitHub Repo stars](https://img.shields.io/github/stars/zalando/spilo) ![GitHub last commit](https://img.shields.io/github/last-commit/zalando/spilo)](https://github.com/zalando/spilo) - HA PostgreSQL Clusters with Docker.
- [StackGres](https://gitlab.com/ongresinc/stackgres) - Enterprise-grade, Full Stack PostgreSQL on Kubernetes.


## Configuration Tuning
- [MySQLTuner-perl ![GitHub Repo stars](https://img.shields.io/github/stars/major/MySQLTuner-perl) ![GitHub last commit](https://img.shields.io/github/last-commit/major/MySQLTuner-perl)](https://github.com/major/MySQLTuner-perl) - Script written in Perl that allows you to review a MySQL installation quickly and make adjustments to increase performance and stability.
- [PGConfigurator](https://pgconfigurator.cybertec-postgresql.com) - Free online tool to generate an optimized `postgresql.conf`.
- [pgtune ![GitHub Repo stars](https://img.shields.io/github/stars/gregs1104/pgtune) ![GitHub last commit](https://img.shields.io/github/last-commit/gregs1104/pgtune)](https://github.com/gregs1104/pgtune) - PostgreSQL configuration wizard.
- [postgresqltuner.pl ![GitHub Repo stars](https://img.shields.io/github/stars/jfcoz/postgresqltuner) ![GitHub last commit](https://img.shields.io/github/last-commit/jfcoz/postgresqltuner)](https://github.com/jfcoz/postgresqltuner) - Simple script to analyse your PostgreSQL database configuration, and give tuning advice.


## DevOps
- [DBmaestro](https://www.dbmaestro.com) - DBmaestro accelerates release cycles & supports agility across the entire IT ecosystem.
- [Spawn](https://spawn.cc/) - Cloud service for creating instant database copies for development and CI. No more local db installs, instant recovery to arbitrary save points, isolated copies for each feature branch or test. Instant provisioning regardless of database size.
- [Toad DevOps Toolkit](https://www.quest.com/products/toad-devops-toolkit/) - Toad DevOps Toolkit executes key database development functions within your DevOps workflow —without compromising quality, performance or reliability.


## Schema samples
- [Oracle Database Sample Schemas ![GitHub Repo stars](https://img.shields.io/github/stars/oracle/db-sample-schemas) ![GitHub last commit](https://img.shields.io/github/last-commit/oracle/db-sample-schemas)](https://github.com/oracle/db-sample-schemas) - Oracle Database Sample Schemas.


## Reporting
- [Poli ![GitHub Repo stars](https://img.shields.io/github/stars/shzlw/poli) ![GitHub last commit](https://img.shields.io/github/last-commit/shzlw/poli)](https://github.com/shzlw/poli) - An easy-to-use SQL reporting application built for SQL lovers.


## Distributions
- [DBdeployer ![GitHub Repo stars](https://img.shields.io/github/stars/datacharmer/dbdeployer) ![GitHub last commit](https://img.shields.io/github/last-commit/datacharmer/dbdeployer)](https://github.com/datacharmer/dbdeployer) - Tool that deploys MySQL database servers easily.
- [dbatools ![GitHub Repo stars](https://img.shields.io/github/stars/sqlcollaborative/dbatools) ![GitHub last commit](https://img.shields.io/github/last-commit/sqlcollaborative/dbatools)](https://github.com/sqlcollaborative/dbatools) - PowerShell module that you may think of like a command-line SQL Server Management Studio.
- [Postgres.app ![GitHub Repo stars](https://img.shields.io/github/stars/PostgresApp/PostgresApp) ![GitHub last commit](https://img.shields.io/github/last-commit/PostgresApp/PostgresApp)](https://github.com/PostgresApp/PostgresApp) - Full-featured PostgreSQL installation packaged as a standard Mac app.
- [BigSQL](https://www.bigsql.org) - A developer-friendly distribution of Postgres.
- [Elephant Shed ![GitHub Repo stars](https://img.shields.io/github/stars/credativ/elephant-shed) ![GitHub last commit](https://img.shields.io/github/last-commit/credativ/elephant-shed)](https://github.com/credativ/elephant-shed) - Web-based PostgreSQL management front-end that bundles several utilities and applications for use with PostgreSQL.


## Security
- [Acra ![GitHub Repo stars](https://img.shields.io/github/stars/cossacklabs/acra) ![GitHub last commit](https://img.shields.io/github/last-commit/cossacklabs/acra)](https://github.com/cossacklabs/acra) - Database security suite. Database proxy with field-level encryption, search through encrypted data, SQL injections prevention, intrusion detection, honeypots. Supports client-side and proxy-side ("transparent") encryption. SQL, NoSQL.
- [Databunker ![GitHub Repo stars](https://img.shields.io/github/stars/securitybunker/databunker) ![GitHub last commit](https://img.shields.io/github/last-commit/securitybunker/databunker)](https://github.com/securitybunker/databunker) - Special GDPR compliant secure vault for customer records built on top of regular DB.


## Code formatters
- [CodeBuff ![GitHub Repo stars](https://img.shields.io/github/stars/antlr/codebuff) ![GitHub last commit](https://img.shields.io/github/last-commit/antlr/codebuff)](https://github.com/antlr/codebuff) - Language-agnostic pretty-printing through machine learning.


## Contributing
- Your contributions are always welcome! Please read the [contribution guidelines](contributing.md) first.
