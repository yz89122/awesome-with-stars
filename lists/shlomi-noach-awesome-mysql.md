# awesome-mysql

A curated list of awesome MySQL free and opensource software, libraries and resources. [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

This list accepts and encourages pull requests. See [CONTRIBUTING ![GitHub Repo Stars](https://img.shields.io/github/stars/shlomi-noach/awesome-mysql) ![GitHub last commit](https://img.shields.io/github/last-commit/shlomi-noach/awesome-mysql)](https://github.com/shlomi-noach/awesome-mysql/blob/master/CONTRIBUTING.md)

### Contents

- [Awesome MySQL](#awesome-mysql)
    - [Analysis](#analysis)
    - [Backup](#backup)
    - [Benchmarking](#benchmarking)
    - [Binlog Replication](#binlog-replication)
    - [ChatOps](#chatops)
    - [Configuration](#configuration)
    - [Connectors](#connectors)
    - [Deployment](#deployment)
    - [Development](#development)
    - [GUI](#gui)
    - [HA](#ha)
    - [Proxy](#proxy)
    - [Replication](#replication)
    - [Schema](#schema)
    - [Security](#security)
    - [Server](#server)
    - [Sharding](#sharding)
    - [Toolkits](#toolkits)

- [Resources](#resources)
    - [E-Books](#e-books)
    - [Media](#media)
    - [Newsletters](#newsletters)


## Analysis

*Performance, structure & data analysis tools*

- [Anemometer ![GitHub Repo Stars](https://img.shields.io/github/stars/box/Anemometer) ![GitHub last commit](https://img.shields.io/github/last-commit/box/Anemometer)](https://github.com/box/Anemometer) - Box SQL slow query monitor.
- [innodb-ruby ![GitHub Repo Stars](https://img.shields.io/github/stars/jeremycole/innodb_ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/jeremycole/innodb_ruby)](https://github.com/jeremycole/innodb_ruby) - A parser for InnoDB file formats, in Ruby.
- [innotop ![GitHub Repo Stars](https://img.shields.io/github/stars/innotop/innotop) ![GitHub last commit](https://img.shields.io/github/last-commit/innotop/innotop)](https://github.com/innotop/innotop) - a 'top' clone for MySQL with many features and flexibility.
- [MySQL Explain Analyzer ![GitHub Repo Stars](https://img.shields.io/github/stars/Preetam/explain-analyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/Preetam/explain-analyzer)](https://github.com/Preetam/explain-analyzer) - A web-based analyzer of `EXPLAIN FORMAT=JSON` output, providing comments, scalability analysis and permalinks for saved samples.
- [mysql-statsd ![GitHub Repo Stars](https://img.shields.io/github/stars/db-art/mysql-statsd) ![GitHub last commit](https://img.shields.io/github/last-commit/db-art/mysql-statsd)](https://github.com/db-art/mysql-statsd) - A Python daemon to collect information from MySQL and send it via StatsD to Graphite.
- [MySQLTuner-perl ![GitHub Repo Stars](https://img.shields.io/github/stars/major/MySQLTuner-perl) ![GitHub last commit](https://img.shields.io/github/last-commit/major/MySQLTuner-perl)](https://github.com/major/MySQLTuner-perl) - A script that allows you to review a MySQL installation quickly and make adjustments to increase performance and stability.
- [Prometheus ![GitHub Repo Stars](https://img.shields.io/github/stars/prometheus/prometheus) ![GitHub last commit](https://img.shields.io/github/last-commit/prometheus/prometheus)](https://github.com/prometheus/prometheus)/[mysqld_exporter ![GitHub Repo Stars](https://img.shields.io/github/stars/prometheus/mysqld_exporter) ![GitHub last commit](https://img.shields.io/github/last-commit/prometheus/mysqld_exporter)](https://github.com/prometheus/mysqld_exporter) - Time series database for real-time monitoring and alerting.
- [pstop ![GitHub Repo Stars](https://img.shields.io/github/stars/sjmudd/ps-top) ![GitHub last commit](https://img.shields.io/github/last-commit/sjmudd/ps-top)](https://github.com/sjmudd/ps-top) - a top-like program for MySQL, collecting, aggregating and displaying information from performance_schema.
- [Wireshark](https://gitlab.com/wireshark/wireshark/) - a protocol analyzer that can decode the MySQL protocol.

## Backup

*Backup/restore/recovery tools*

- [Dumpling ![GitHub Repo Stars](https://img.shields.io/github/stars/pingcap/tidb) ![GitHub last commit](https://img.shields.io/github/last-commit/pingcap/tidb)](https://github.com/pingcap/tidb/tree/master/dumpling) - Logical, parallel backup/dumper tool for MySQL/TiDB written in GoLang - support csv format output and integrated as library
- [MyDumper ![GitHub Repo Stars](https://img.shields.io/github/stars/mydumper/mydumper) ![GitHub last commit](https://img.shields.io/github/last-commit/mydumper/mydumper)](https://github.com/mydumper/mydumper) - Logical, parallel backup/dumper tool for MySQL
- [Percona Xtrabackup ![GitHub Repo Stars](https://img.shields.io/github/stars/percona/percona-xtrabackup) ![GitHub last commit](https://img.shields.io/github/last-commit/percona/percona-xtrabackup)](https://github.com/percona/percona-xtrabackup) - an open-source hot backup utility for MySQL - based servers that doesn’t lock your database during the backup.

## Benchmarking

*Tools to stress your servers*

- [go-tpc ![GitHub Repo Stars](https://img.shields.io/github/stars/pingcap/go-tpc) ![GitHub last commit](https://img.shields.io/github/last-commit/pingcap/go-tpc)](https://github.com/pingcap/go-tpc) - A golang port of [TPCC](http://www.tpc.org/tpcc/) and [TPCH](http://www.tpc.org/tpch/) benchmark for MySQL.
- [iibench-mysql ![GitHub Repo Stars](https://img.shields.io/github/stars/tmcallaghan/iibench-mysql) ![GitHub last commit](https://img.shields.io/github/last-commit/tmcallaghan/iibench-mysql)](https://github.com/tmcallaghan/iibench-mysql) - Java based version of the Index Insertion Benchmark for MySQL/Percona/MariaDB.
- [Sysbench ![GitHub Repo Stars](https://img.shields.io/github/stars/akopytov/sysbench) ![GitHub last commit](https://img.shields.io/github/last-commit/akopytov/sysbench)](https://github.com/akopytov/sysbench) - a modular, cross-platform and multi-threaded benchmark tool.
- [TPCC-MySQL ![GitHub Repo Stars](https://img.shields.io/github/stars/Percona-Lab/tpcc-mysql) ![GitHub last commit](https://img.shields.io/github/last-commit/Percona-Lab/tpcc-mysql)](https://github.com/Percona-Lab/tpcc-mysql) (archived) - A port of the popular [TPCC](http://www.tpc.org/tpcc/) benchmark for MySQL.

## Binlog-Replication

- [DM ![GitHub Repo Stars](https://img.shields.io/github/stars/pingcap/tiflow) ![GitHub last commit](https://img.shields.io/github/last-commit/pingcap/tiflow)](https://github.com/pingcap/tiflow) - A High-Availability data migration platform which supports migrating data from MySQL/MariaDB to TiDB and merging shard tables
- [Kingbus ![GitHub Repo Stars](https://img.shields.io/github/stars/flike/kingbus) ![GitHub last commit](https://img.shields.io/github/last-commit/flike/kingbus)](https://github.com/flike/kingbus) - A distributed MySQL binlog storage system built on Raft
- [mysql-ripple ![GitHub Repo Stars](https://img.shields.io/github/stars/google/mysql-ripple) ![GitHub last commit](https://img.shields.io/github/last-commit/google/mysql-ripple)](https://github.com/google/mysql-ripple) (archived) - Ripple, a server that can serve as a middleman in MySQL replication

## ChatOps

*Scripts integrated into chat rooms*

- [Hubot MySQL ChatOps ![GitHub Repo Stars](https://img.shields.io/github/stars/samlambert/hubot-mysql-chatops) ![GitHub last commit](https://img.shields.io/github/last-commit/samlambert/hubot-mysql-chatops)](https://github.com/samlambert/hubot-mysql-chatops)

## Configuration

*MySQL sample configuration and advisors*

- [mysql-compatibility-config ![GitHub Repo Stars](https://img.shields.io/github/stars/morgo/mysql-compatibility-config) ![GitHub last commit](https://img.shields.io/github/last-commit/morgo/mysql-compatibility-config)](https://github.com/morgo/mysql-compatibility-config) - make MySQL configuration behave more like newer (or older) releases of MySQL.

## Connectors

*MySQL connectors for various programming languages*

- [DBD::MariaDB ![GitHub Repo Stars](https://img.shields.io/github/stars/perl5-dbi/DBD-MariaDB) ![GitHub last commit](https://img.shields.io/github/last-commit/perl5-dbi/DBD-MariaDB)](https://github.com/perl5-dbi/DBD-MariaDB) - MariaDB and MySQL driver for the Perl5 Database Interface.
- [DBD::mysql ![GitHub Repo Stars](https://img.shields.io/github/stars/perl5-dbi/DBD-mysql) ![GitHub last commit](https://img.shields.io/github/last-commit/perl5-dbi/DBD-mysql)](https://github.com/perl5-dbi/DBD-mysql) - MySQL driver for the Perl5 Database Interface.
- [go-sql-driver ![GitHub Repo Stars](https://img.shields.io/github/stars/go-sql-driver/mysql) ![GitHub last commit](https://img.shields.io/github/last-commit/go-sql-driver/mysql)](https://github.com/go-sql-driver/mysql) - a lightweight and fast MySQL-Driver for Go's (golang) database/sql package.
- [libAttachSQL ![GitHub Repo Stars](https://img.shields.io/github/stars/libattachsql/libattachsql) ![GitHub last commit](https://img.shields.io/github/last-commit/libattachsql/libattachsql)](https://github.com/libattachsql/libattachsql) - libAttachSQL is a lightweight, non-blocking C API for MySQL servers.
- [MariaDB Connector/J ![GitHub Repo Stars](https://img.shields.io/github/stars/mariadb-corporation/mariadb-connector-j) ![GitHub last commit](https://img.shields.io/github/last-commit/mariadb-corporation/mariadb-connector-j)](https://github.com/mariadb-corporation/mariadb-connector-j) - LGPL-licensed MariaDB Client Library for Java Applications.
- [mex-mariadb ![GitHub Repo Stars](https://img.shields.io/github/stars/markuman/mex-mariadb) ![GitHub last commit](https://img.shields.io/github/last-commit/markuman/mex-mariadb)](https://github.com/markuman/mex-mariadb) - MIT licensed MariaDB/MySQL Client Library for GNU Octave and Matlab.
- [MySQL C API](https://dev.mysql.com/downloads/c-api/) - Official C driver for MySQL.
- [MySQL Connector/C++ ![GitHub Repo Stars](https://img.shields.io/github/stars/mysql/mysql-connector-cpp) ![GitHub last commit](https://img.shields.io/github/last-commit/mysql/mysql-connector-cpp)](https://github.com/mysql/mysql-connector-cpp) - Official C/C++ driver for MySQL.
- [MySQL Connector/J ![GitHub Repo Stars](https://img.shields.io/github/stars/mysql/mysql-connector-j) ![GitHub last commit](https://img.shields.io/github/last-commit/mysql/mysql-connector-j)](https://github.com/mysql/mysql-connector-j) - a standardized database driver for the Java platforms and development.
- [MySQL Connector/NET ![GitHub Repo Stars](https://img.shields.io/github/stars/mysql/mysql-connector-net) ![GitHub last commit](https://img.shields.io/github/last-commit/mysql/mysql-connector-net)](https://github.com/mysql/mysql-connector-net) - a standardized database driver for .Net platforms and development.
- [MySQL Connector/Node.js ![GitHub Repo Stars](https://img.shields.io/github/stars/mysql/mysql-connector-nodejs) ![GitHub last commit](https://img.shields.io/github/last-commit/mysql/mysql-connector-nodejs)](https://github.com/mysql/mysql-connector-nodejs) - Official Node.js driver for MySQL.
- [MySQL Connector/Python ![GitHub Repo Stars](https://img.shields.io/github/stars/mysql/mysql-connector-python) ![GitHub last commit](https://img.shields.io/github/last-commit/mysql/mysql-connector-python)](https://github.com/mysql/mysql-connector-python) - a standardized database driver for Python platforms and development.
- [mysqlclient-python ![GitHub Repo Stars](https://img.shields.io/github/stars/PyMySQL/mysqlclient) ![GitHub last commit](https://img.shields.io/github/last-commit/PyMySQL/mysqlclient)](https://github.com/PyMySQL/mysqlclient) - MySQL database connector for Python.
- [node-mysql ![GitHub Repo Stars](https://img.shields.io/github/stars/mysqljs/node) ![GitHub last commit](https://img.shields.io/github/last-commit/mysqljs/node)](https://github.com/mysqljs/node) - A pure Nodejs Javascript client implementing the MySQL protocol.
- [PHP mysqlnd](https://www.php.net/manual/en/book.mysqlnd.php) - MySQL native driver for PHP.
- [PyMySQL ![GitHub Repo Stars](https://img.shields.io/github/stars/PyMySQL/PyMySQL) ![GitHub last commit](https://img.shields.io/github/last-commit/PyMySQL/PyMySQL)](https://github.com/PyMySQL/PyMySQL) - MySQL database connector for Python.
- [Ruby Mysql2 gem ![GitHub Repo Stars](https://img.shields.io/github/stars/brianmario/mysql2) ![GitHub last commit](https://img.shields.io/github/last-commit/brianmario/mysql2)](https://github.com/brianmario/mysql2) - MySQL driver for Ruby and Rails projects.
- [MyZql ![GitHub Repo Stars](https://img.shields.io/github/stars/speed2exe/myzql) ![GitHub last commit](https://img.shields.io/github/last-commit/speed2exe/myzql)](https://github.com/speed2exe/myzql) - MySQL and MariaDB driver in native Zig.

## Deployment

*MySQL deployment tools*

- [dbdeployer ![GitHub Repo Stars](https://img.shields.io/github/stars/datacharmer/dbdeployer) ![GitHub last commit](https://img.shields.io/github/last-commit/datacharmer/dbdeployer)](https://github.com/datacharmer/dbdeployer) (archived) - A tool that installs one or more MySQL servers within seconds, easily, securely, and with full control.
- [MySQL Docker](https://hub.docker.com/_/mysql/) - Official Docker images.


## Development

*Tools to support MySQL-related development*

- [Flywaydb ![GitHub Repo Stars](https://img.shields.io/github/stars/flyway/flyway) ![GitHub last commit](https://img.shields.io/github/last-commit/flyway/flyway)](https://github.com/flyway/flyway) - Database migrations; Evolve your database schema easily and reliably across all your instances
- [Liquibase ![GitHub Repo Stars](https://img.shields.io/github/stars/liquibase/liquibase) ![GitHub last commit](https://img.shields.io/github/last-commit/liquibase/liquibase)](https://github.com/liquibase/liquibase) - Source control for your database
- [Shift ![GitHub Repo Stars](https://img.shields.io/github/stars/square/shift) ![GitHub last commit](https://img.shields.io/github/last-commit/square/shift)](https://github.com/square/shift) - An application that helps you run schema migrations on MySQL databases
- [Skeema ![GitHub Repo Stars](https://img.shields.io/github/stars/skeema/skeema) ![GitHub last commit](https://img.shields.io/github/last-commit/skeema/skeema)](https://github.com/skeema/skeema) - Declarative pure-SQL schema management system for MySQL and MariaDB, with support for sharding and external online schema change tools
- [SQLE ![GitHub Repo Stars](https://img.shields.io/github/stars/actiontech/sqle) ![GitHub last commit](https://img.shields.io/github/last-commit/actiontech/sqle)](https://github.com/actiontech/sqle/blob/main/README_en.md) - SQLE is a SQL audit platform for DBA or developer
- [Test database ![GitHub Repo Stars](https://img.shields.io/github/stars/datacharmer/test_db) ![GitHub last commit](https://img.shields.io/github/last-commit/datacharmer/test_db)](https://github.com/datacharmer/test_db) - A sample MySQL database with an integrated test suite, used to test applications and servers

## GUI

*GUI frontends & applications*

- [Adminer ![GitHub Repo Stars](https://img.shields.io/github/stars/vrana/adminer) ![GitHub last commit](https://img.shields.io/github/last-commit/vrana/adminer)](https://github.com/vrana/adminer/) - Database management in a single PHP file.
- [DBeaver ![GitHub Repo Stars](https://img.shields.io/github/stars/dbeaver/dbeaver) ![GitHub last commit](https://img.shields.io/github/last-commit/dbeaver/dbeaver)](https://github.com/dbeaver/dbeaver/) - A cross-platform SQL and NoSQL database client.
- [HeidiSQL ![GitHub Repo Stars](https://img.shields.io/github/stars/HeidiSQL/HeidiSQL) ![GitHub last commit](https://img.shields.io/github/last-commit/HeidiSQL/HeidiSQL)](https://github.com/HeidiSQL/HeidiSQL) - MySQL GUI frontend for Windows.
- [ILLA Cloud ![GitHub Repo Stars](https://img.shields.io/github/stars/illacloud/illa-builder) ![GitHub last commit](https://img.shields.io/github/last-commit/illacloud/illa-builder)](https://github.com/illacloud/illa-builder) - Low-code internal tool builder integrated with Mysql, can be used as GUI for Mysql. 
- [mycli ![GitHub Repo Stars](https://img.shields.io/github/stars/dbcli/mycli) ![GitHub last commit](https://img.shields.io/github/last-commit/dbcli/mycli)](https://github.com/dbcli/mycli) - A Terminal Client for MySQL with AutoCompletion and Syntax Highlighting.
- [MySQL Shell ![GitHub Repo Stars](https://img.shields.io/github/stars/mysql/mysql-shell) ![GitHub last commit](https://img.shields.io/github/last-commit/mysql/mysql-shell)](https://github.com/mysql/mysql-shell/) - Advanced client and code editor for MySQL that supports development and administration for the MySQL Server and MySQL InnoDB cluster (AdminAPI) with an interactive JavaScript, Python, or SQL interface.
- [MySQL Workbench ![GitHub Repo Stars](https://img.shields.io/github/stars/mysql/mysql-workbench) ![GitHub last commit](https://img.shields.io/github/last-commit/mysql/mysql-workbench)](https://github.com/mysql/mysql-workbench) - provides DBAs and developers an integrated tools environment for database design & modeling; SQL devleopment; database administration.
- [Ocelot GUI ![GitHub Repo Stars](https://img.shields.io/github/stars/ocelot-inc/ocelotgui) ![GitHub last commit](https://img.shields.io/github/last-commit/ocelot-inc/ocelotgui)](https://github.com/ocelot-inc/ocelotgui) - GUI client for MySQL or MariaDB, including debugger.
- [OmniDB: Web tool for database management ![GitHub Repo Stars](https://img.shields.io/github/stars/OmniDB/OmniDB) ![GitHub last commit](https://img.shields.io/github/last-commit/OmniDB/OmniDB)](https://github.com/OmniDB/OmniDB)
- [Percona Monitoring and Management ![GitHub Repo Stars](https://img.shields.io/github/stars/percona/pmm) ![GitHub last commit](https://img.shields.io/github/last-commit/percona/pmm)](https://github.com/percona/pmm) - An open-source platform for managing and monitoring MySQL performance.
- [phpMyAdmin ![GitHub Repo Stars](https://img.shields.io/github/stars/phpmyadmin/phpmyadmin) ![GitHub last commit](https://img.shields.io/github/last-commit/phpmyadmin/phpmyadmin)](https://github.com/phpmyadmin/phpmyadmin) - a free software tool written in PHP, intended to handle the administration of MySQL over the Web.
- [pspg ![GitHub Repo Stars](https://img.shields.io/github/stars/okbob/pspg) ![GitHub last commit](https://img.shields.io/github/last-commit/okbob/pspg)](https://github.com/okbob/pspg) - provides a pager with enhanced visualization and navigation for tabular data. Originally implemented for PostgreSQL, but also supports MySQL.
- [Sequel Ace ![GitHub Repo Stars](https://img.shields.io/github/stars/Sequel-Ace/Sequel-Ace) ![GitHub last commit](https://img.shields.io/github/last-commit/Sequel-Ace/Sequel-Ace)](https://github.com/Sequel-Ace/Sequel-Ace) - a Mac database management application for working with MySQL databases.
- [SQLyog Community edition ![GitHub Repo Stars](https://img.shields.io/github/stars/webyog/sqlyog-community) ![GitHub last commit](https://img.shields.io/github/last-commit/webyog/sqlyog-community)](https://github.com/webyog/sqlyog-community) - SQLyog Community edition. For Windows, works fine under wine in Mac and Linux
- [WebDB ![GitHub Repo Stars](https://img.shields.io/github/stars/WebDB-App/app) ![GitHub last commit](https://img.shields.io/github/last-commit/WebDB-App/app)](https://github.com/WebDB-App/app) – Open Source and Efficient Database IDE. Featuring Easy server connection, Modern ERD, Intelligent data generator, AI assistant, NoSQL structure manager, Time machine and Powerful query editor

## HA

*High availability solutions*

- [Galera Cluster ![GitHub Repo Stars](https://img.shields.io/github/stars/codership/galera) ![GitHub last commit](https://img.shields.io/github/last-commit/codership/galera)](https://github.com/codership/galera) - a true Multimaster Cluster based on synchronous replication.
- [mha4mysql-node ![GitHub Repo Stars](https://img.shields.io/github/stars/yoshinorim/mha4mysql-node) ![GitHub last commit](https://img.shields.io/github/last-commit/yoshinorim/mha4mysql-node)](https://github.com/yoshinorim/mha4mysql-node) and [mha4mysql-manager ![GitHub Repo Stars](https://img.shields.io/github/stars/yoshinorim/mha4mysql-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/yoshinorim/mha4mysql-manager)](https://github.com/yoshinorim/mha4mysql-manager) (both unmaintained) - Master High Availability Manager and tools for MySQL.
- [Orchestrator ![GitHub Repo Stars](https://img.shields.io/github/stars/openark/orchestrator) ![GitHub last commit](https://img.shields.io/github/last-commit/openark/orchestrator)](https://github.com/openark/orchestrator) - MySQL replication topology management and High Availability solution.
- [Percona Replication Manager ![GitHub Repo Stars](https://img.shields.io/github/stars/percona/replication-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/percona/replication-manager)](https://github.com/percona/replication-manager) - Asynchronous MySQL replication manager agent for Pacemaker. Supports file and GTID based replication, geo-distributed clusters using booth.
- [replication-manager ![GitHub Repo Stars](https://img.shields.io/github/stars/signal18/replication-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/signal18/replication-manager)](https://github.com/signal18/replication-manager) - a high availability solution to manage MariaDB 10.x and MySQL & Percona Server 5.7 GTID replication topologies.

## Proxy

*Proxies to MySQL*

- [MySQL Proxy ![GitHub Repo Stars](https://img.shields.io/github/stars/mysql/mysql-proxy) ![GitHub last commit](https://img.shields.io/github/last-commit/mysql/mysql-proxy)](https://github.com/mysql/mysql-proxy) (deprecated) - A simple program that sits between your client and MySQL server(s) that can monitor, analyze or transform their communication.
- [MySQL Router](https://dev.mysql.com/doc/mysql-router/en/) - MySQL Router is part of InnoDB cluster, and is a lightweight middleware that provides transparent routing between your application and back-end MySQL Servers.
- [ProxySQL ![GitHub Repo Stars](https://img.shields.io/github/stars/sysown/proxysql) ![GitHub last commit](https://img.shields.io/github/last-commit/sysown/proxysql)](https://github.com/sysown/proxysql) - High performance proxy for MySQL.

## Replication

*Replication related software*

* [data-diff ![GitHub Repo Stars](https://img.shields.io/github/stars/datafold/data-diff) ![GitHub last commit](https://img.shields.io/github/last-commit/datafold/data-diff)](https://github.com/datafold/data-diff) - Command-line tool and Python library to efficiently diff rows across two different databases.


## Schema

*Add-on schemas*

- [common_schema ![GitHub Repo Stars](https://img.shields.io/github/stars/shlomi-noach/common_schema) ![GitHub last commit](https://img.shields.io/github/last-commit/shlomi-noach/common_schema)](https://github.com/shlomi-noach/common_schema) - DBA's framework for MySQL, providing a function library, views library and QueryScript interpreter.
- [sys ![GitHub Repo Stars](https://img.shields.io/github/stars/mysql/mysql-sys) ![GitHub last commit](https://img.shields.io/github/last-commit/mysql/mysql-sys)](https://github.com/mysql/mysql-sys) - A collection of views, functions and procedures to help MySQL administrators get insight in to MySQL Database usage.


## Security

*Tools that prevents leaking of sensitive data from database (encryption, masking and tokenization, honey-pots, etc)*

- [Acra ![GitHub Repo Stars](https://img.shields.io/github/stars/cossacklabs/acra) ![GitHub last commit](https://img.shields.io/github/last-commit/cossacklabs/acra)](https://github.com/cossacklabs/acra) - SQL database protection suite: strong selective encryption, SQL injections prevention, intrusion detection system.

## Server

*MySQL server flavors*

- [MariaDB ![GitHub Repo Stars](https://img.shields.io/github/stars/MariaDB/server) ![GitHub last commit](https://img.shields.io/github/last-commit/MariaDB/server)](https://github.com/MariaDB/server) - Community developed fork of MySQL server.
- [MySQL Server & MySQL Cluster ![GitHub Repo Stars](https://img.shields.io/github/stars/mysql/mysql-server) ![GitHub last commit](https://img.shields.io/github/last-commit/mysql/mysql-server)](https://github.com/mysql/mysql-server) - Official Oracle's MySQL server & MySQL Cluster distribution.
- [Percona Server ![GitHub Repo Stars](https://img.shields.io/github/stars/percona/percona-server) ![GitHub last commit](https://img.shields.io/github/last-commit/percona/percona-server)](https://github.com/percona/percona-server) - An enhanced, drop-in MySQL replacement.
- [TiDB ![GitHub Repo Stars](https://img.shields.io/github/stars/pingcap/tidb) ![GitHub last commit](https://img.shields.io/github/last-commit/pingcap/tidb)](https://github.com/pingcap/tidb) - A distributed HTAP database compatible with the MySQL protocol.

## Sharding

*Sharding solutions/frameworks*

- [Jetpants ![GitHub Repo Stars](https://img.shields.io/github/stars/tumblr/jetpants) ![GitHub last commit](https://img.shields.io/github/last-commit/tumblr/jetpants)](https://github.com/tumblr/jetpants) - An automation suite for managing large range sharding clusters, by Tumblr.
- [Vitess ![GitHub Repo Stars](https://img.shields.io/github/stars/vitessio/vitess) ![GitHub last commit](https://img.shields.io/github/last-commit/vitessio/vitess)](https://github.com/vitessio/vitess) - vitess provides servers and tools which facilitate scaling of MySQL databases for large scale web services.


## Toolkits

*Toolkits, general purpose scripts*

- [gh-ost ![GitHub Repo Stars](https://img.shields.io/github/stars/github/gh-ost) ![GitHub last commit](https://img.shields.io/github/last-commit/github/gh-ost)](https://github.com/github/gh-ost/) - GitHub's online schema migration for MySQL.
- [go-mysql ![GitHub Repo Stars](https://img.shields.io/github/stars/go-mysql-org/go-mysql) ![GitHub last commit](https://img.shields.io/github/last-commit/go-mysql-org/go-mysql)](https://github.com/go-mysql-org/go-mysql) - A pure go library to handle MySQL network protocol and replication.
- [MySQL Utilities ![GitHub Repo Stars](https://img.shields.io/github/stars/mysql/mysql-utilities) ![GitHub last commit](https://img.shields.io/github/last-commit/mysql/mysql-utilities)](https://github.com/mysql/mysql-utilities) (deprecated) - a collection of command-line utilities, written in Python, that are used for maintaining and administering MySQL servers, either individually, or within Replication hierarchies.
- [Percona Toolkit ![GitHub Repo Stars](https://img.shields.io/github/stars/percona/percona-toolkit) ![GitHub last commit](https://img.shields.io/github/last-commit/percona/percona-toolkit)](https://github.com/percona/percona-toolkit) - a collection of advanced command-line tools to perform a variety of MySQL server and system tasks that are too difficult or complex to perform manually.
- [UnDROP ![GitHub Repo Stars](https://img.shields.io/github/stars/twindb/undrop-for-innodb) ![GitHub last commit](https://img.shields.io/github/last-commit/twindb/undrop-for-innodb)](https://github.com/twindb/undrop-for-innodb) - a tool to recover data from dropped or corrupted InnoDB tables.

# Resources

*At this stage "resources" will not include websites, blogs, slides, presentation videos, etc. in fear of list size*

## e-books

*e-books as well as relevant materials on and around MySQL*

- [Database Systems Lecture Notes](http://spots.augusta.edu/caubert/db/ln/) - lecture notes on Database Systems (available in pdf, html, odt and markdown) including a Chapter on SQL that covers basic set-up, exercises and problems.
- [SQL-exercise ![GitHub Repo Stars](https://img.shields.io/github/stars/XD-DENG/SQL-exercise) ![GitHub last commit](https://img.shields.io/github/last-commit/XD-DENG/SQL-exercise)](https://github.com/XD-DENG/SQL-exercise) - contains several SQL exercises, including the schema description figure, SQL code to build schema, questions and solutions in SQL. Based on wikibook [SQL Exercises](https://en.wikibooks.org/wiki/SQL_Exercises).

## Media

*Public, ongoing video & audio casts. This excludes conference presentations in fear of list size*

## Newsletters

*Newsletters require an email address, by definition. List below are newsletters that require nothing but an email address*
