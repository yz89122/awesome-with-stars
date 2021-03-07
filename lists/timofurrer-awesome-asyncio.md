# Awesome asyncio [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> A carefully curated list of awesome Python asyncio frameworks, libraries, software and resources.

The Python [asyncio](https://docs.python.org/3/library/asyncio.html) module introduced to the standard library with Python 3.4 provides infrastructure for writing single-threaded concurrent code using coroutines, multiplexing I/O access over sockets and other resources, running network clients and servers, and other related primitives.

Asyncio is not really a brand-new technology however it appears to be very trending since a few years - especially in the Python community and with the release of Python 3.4 in March 2014.
Thus, it's pretty hard to keep yourself up-to-date with the most awesome packages out there.
Find some of those *awesome* packages here and if you are missing one we count on you to [create an Issue or a Pull Request ![GitHub Repo Stars](https://img.shields.io/github/stars/timofurrer/awesome-asyncio) ![GitHub last commit](https://img.shields.io/github/last-commit/timofurrer/awesome-asyncio)](https://github.com/timofurrer/awesome-asyncio/blob/master/CONTRIBUTING.md) with your suggestion.


## Contents

* [Web Frameworks](#web-frameworks)
* [Message Queues](#message-queues)
* [Database Drivers](#database-drivers)
* [Networking](#networking)
* [GraphQL](#graphql)
* [Testing](#testing)
* [Alternative Loops](#alternative-loops)
* [Misc](#misc)
* [Writings](#writings)
* [Talks](#talks)
* [Alternatives to asyncio](#alternatives-to-asyncio)

***

## Web Frameworks

*Libraries to build web applications.*

* [FastAPI ![GitHub Repo Stars](https://img.shields.io/github/stars/tiangolo/fastapi) ![GitHub last commit](https://img.shields.io/github/last-commit/tiangolo/fastapi)](https://github.com/tiangolo/fastapi) - A very high performance Python 3.6+ API framework based on type hints. Powered by Starlette and Pydantic.
* [Django](https://www.djangoproject.com/) - An established, high-level Python web framework with a huge community and ecosystem.
* [Starlette ![GitHub Repo Stars](https://img.shields.io/github/stars/encode/starlette) ![GitHub last commit](https://img.shields.io/github/last-commit/encode/starlette)](https://github.com/encode/starlette) - A lightweight ASGI framework/toolkit for building high performance services.
* [aiohttp ![GitHub Repo Stars](https://img.shields.io/github/stars/KeepSafe/aiohttp) ![GitHub last commit](https://img.shields.io/github/last-commit/KeepSafe/aiohttp)](https://github.com/KeepSafe/aiohttp) - Http client/server for asyncio (PEP-3156).
* [sanic ![GitHub Repo Stars](https://img.shields.io/github/stars/channelcat/sanic) ![GitHub last commit](https://img.shields.io/github/last-commit/channelcat/sanic)](https://github.com/channelcat/sanic) - Python 3.5+ web server that's written to go fast.
* [Quart ![GitHub Repo Stars](https://img.shields.io/github/stars/pallets/quart) ![GitHub last commit](https://img.shields.io/github/last-commit/pallets/quart)](https://github.com/pallets/quart) - An asyncio web microframework with the same API as Flask.
* [autobahn ![GitHub Repo Stars](https://img.shields.io/github/stars/crossbario/autobahn-python) ![GitHub last commit](https://img.shields.io/github/last-commit/crossbario/autobahn-python)](https://github.com/crossbario/autobahn-python) - WebSocket and WAMP supporting asyncio and Twisted, for clients and servers.
* [websockets ![GitHub Repo Stars](https://img.shields.io/github/stars/aaugustin/websockets) ![GitHub last commit](https://img.shields.io/github/last-commit/aaugustin/websockets)](https://github.com/aaugustin/websockets/) - A library for building WebSocket servers and clients in Python with a focus on correctness and simplicity.
* [Tornado](http://www.tornadoweb.org/en/stable/) - Performant web framework and asynchronous networking library.
* [uvicorn ![GitHub Repo Stars](https://img.shields.io/github/stars/encode/uvicorn) ![GitHub last commit](https://img.shields.io/github/last-commit/encode/uvicorn)](https://github.com/encode/uvicorn) - The lightning-fast ASGI server.


## Message Queues

*Libraries to implement applications using message queues.*

* [aioamqp ![GitHub Repo Stars](https://img.shields.io/github/stars/Polyconseil/aioamqp) ![GitHub last commit](https://img.shields.io/github/last-commit/Polyconseil/aioamqp)](https://github.com/Polyconseil/aioamqp) - AMQP implementation using asyncio.
* [pyzmq ![GitHub Repo Stars](https://img.shields.io/github/stars/zeromq/pyzmq) ![GitHub last commit](https://img.shields.io/github/last-commit/zeromq/pyzmq)](https://github.com/zeromq/pyzmq) - Python bindings for ZeroMQ.
* [aiozmq ![GitHub Repo Stars](https://img.shields.io/github/stars/aio-libs/aiozmq) ![GitHub last commit](https://img.shields.io/github/last-commit/aio-libs/aiozmq)](https://github.com/aio-libs/aiozmq) - Alternative Asyncio integration with ZeroMQ.
* [crossbar ![GitHub Repo Stars](https://img.shields.io/github/stars/crossbario/crossbar) ![GitHub last commit](https://img.shields.io/github/last-commit/crossbario/crossbar)](https://github.com/crossbario/crossbar) - Crossbar.io is a networking platform for distributed and microservice applications.
* [asyncio-nats ![GitHub Repo Stars](https://img.shields.io/github/stars/nats-io/asyncio-nats) ![GitHub last commit](https://img.shields.io/github/last-commit/nats-io/asyncio-nats)](https://github.com/nats-io/asyncio-nats) - Client for the NATS messaging system.
* [aiokafka ![GitHub Repo Stars](https://img.shields.io/github/stars/aio-libs/aiokafka) ![GitHub last commit](https://img.shields.io/github/last-commit/aio-libs/aiokafka)](https://github.com/aio-libs/aiokafka) - Client for Apache Kafka.

## Database Drivers

*Libraries to connect to databases.*

* [asyncpg ![GitHub Repo Stars](https://img.shields.io/github/stars/MagicStack/asyncpg) ![GitHub last commit](https://img.shields.io/github/last-commit/MagicStack/asyncpg)](https://github.com/MagicStack/asyncpg) - Fast PostgreSQL Database Client Library for Python/asyncio.
* [asyncpgsa ![GitHub Repo Stars](https://img.shields.io/github/stars/CanopyTax/asyncpgsa) ![GitHub last commit](https://img.shields.io/github/last-commit/CanopyTax/asyncpgsa)](https://github.com/CanopyTax/asyncpgsa) - Asyncpg with sqlalchemy core support.
* [aiopg ![GitHub Repo Stars](https://img.shields.io/github/stars/aio-libs/aiopg) ![GitHub last commit](https://img.shields.io/github/last-commit/aio-libs/aiopg)](https://github.com/aio-libs/aiopg/) - Library for accessing a PostgreSQL database.
* [aiomysql ![GitHub Repo Stars](https://img.shields.io/github/stars/aio-libs/aiomysql) ![GitHub last commit](https://img.shields.io/github/last-commit/aio-libs/aiomysql)](https://github.com/aio-libs/aiomysql) - Library for accessing a MySQL database
* [aioodbc ![GitHub Repo Stars](https://img.shields.io/github/stars/aio-libs/aioodbc) ![GitHub last commit](https://img.shields.io/github/last-commit/aio-libs/aioodbc)](https://github.com/aio-libs/aioodbc) - Library for accessing a ODBC databases.
* [motor ![GitHub Repo Stars](https://img.shields.io/github/stars/mongodb/motor) ![GitHub last commit](https://img.shields.io/github/last-commit/mongodb/motor)](https://github.com/mongodb/motor) - The async Python driver for MongoDB.
* [redis-py ![GitHub Repo Stars](https://img.shields.io/github/stars/redis/redis-py) ![GitHub last commit](https://img.shields.io/github/last-commit/redis/redis-py)](https://github.com/redis/redis-py) - Redis Python Client (which includes [aioreadis ![GitHub Repo Stars](https://img.shields.io/github/stars/aio-libs/aioredis) ![GitHub last commit](https://img.shields.io/github/last-commit/aio-libs/aioredis)](https://github.com/aio-libs/aioredis) now).
* [aiocouchdb ![GitHub Repo Stars](https://img.shields.io/github/stars/aio-libs/aiocouchdb) ![GitHub last commit](https://img.shields.io/github/last-commit/aio-libs/aiocouchdb)](https://github.com/aio-libs/aiocouchdb) - CouchDB client built on top of aiohttp (asyncio).
* [aioinflux ![GitHub Repo Stars](https://img.shields.io/github/stars/plugaai/aioinflux) ![GitHub last commit](https://img.shields.io/github/last-commit/plugaai/aioinflux)](https://github.com/plugaai/aioinflux) - InfluxDB client built on top of aiohttp.
* [aioes ![GitHub Repo Stars](https://img.shields.io/github/stars/aio-libs/aioes) ![GitHub last commit](https://img.shields.io/github/last-commit/aio-libs/aioes)](https://github.com/aio-libs/aioes) - Asyncio compatible driver for elasticsearch.
* [peewee-async ![GitHub Repo Stars](https://img.shields.io/github/stars/05bit/peewee-async) ![GitHub last commit](https://img.shields.io/github/last-commit/05bit/peewee-async)](https://github.com/05bit/peewee-async) - ORM implementation based on [peewee ![GitHub Repo Stars](https://img.shields.io/github/stars/coleifer/peewee) ![GitHub last commit](https://img.shields.io/github/last-commit/coleifer/peewee)](https://github.com/coleifer/peewee) and aiopg.
* [GINO ![GitHub Repo Stars](https://img.shields.io/github/stars/fantix/gino) ![GitHub last commit](https://img.shields.io/github/last-commit/fantix/gino)](https://github.com/fantix/gino) - is a lightweight asynchronous Python ORM based on [SQLAlchemy](https://www.sqlalchemy.org/) core, with [asyncpg ![GitHub Repo Stars](https://img.shields.io/github/stars/MagicStack/asyncpg) ![GitHub last commit](https://img.shields.io/github/last-commit/MagicStack/asyncpg)](https://github.com/MagicStack/asyncpg) dialect.
* [Tortoise ORM ![GitHub Repo Stars](https://img.shields.io/github/stars/tortoise/tortoise-orm) ![GitHub last commit](https://img.shields.io/github/last-commit/tortoise/tortoise-orm)](https://github.com/tortoise/tortoise-orm) - native multi-backend ORM with Django-like API and easy relations management.
* [Databases ![GitHub Repo Stars](https://img.shields.io/github/stars/encode/databases) ![GitHub last commit](https://img.shields.io/github/last-commit/encode/databases)](https://github.com/encode/databases) - Async database access for SQLAlchemy core, with support for PostgreSQL, MySQL, and SQLite.
* [Prisma Client Python ![GitHub Repo Stars](https://img.shields.io/github/stars/RobertCraigie/prisma-client-py) ![GitHub last commit](https://img.shields.io/github/last-commit/RobertCraigie/prisma-client-py)](https://github.com/RobertCraigie/prisma-client-py) - An auto-generated, fully type safe ORM powered by Pydantic and tailored specifically for your schema - supports SQLite, PostgreSQL, MySQL, MongoDB, MariaDB and more.
* [Piccolo ![GitHub Repo Stars](https://img.shields.io/github/stars/piccolo-orm/piccolo) ![GitHub last commit](https://img.shields.io/github/last-commit/piccolo-orm/piccolo)](https://github.com/piccolo-orm/piccolo) - An ORM / query builder which can work in async and sync modes, with a nice admin GUI, and ASGI middleware.
* [Beanie](https://beanie-odm.dev) - An async MongoDB ODM built on [motor ![GitHub Repo Stars](https://img.shields.io/github/stars/mongodb/motor) ![GitHub last commit](https://img.shields.io/github/last-commit/mongodb/motor)](https://github.com/mongodb/motor) and [Pydantic](https://pydantic-docs.helpmanual.io).

## Networking

*Libraries to communicate in your network.*

* [AsyncSSH ![GitHub Repo Stars](https://img.shields.io/github/stars/ronf/asyncssh) ![GitHub last commit](https://img.shields.io/github/last-commit/ronf/asyncssh)](https://github.com/ronf/asyncssh) - Provides an asynchronous client and server implementation of the SSHv2 protocol.
* [aiodns ![GitHub Repo Stars](https://img.shields.io/github/stars/saghul/aiodns) ![GitHub last commit](https://img.shields.io/github/last-commit/saghul/aiodns)](https://github.com/saghul/aiodns) - Simple DNS resolver for asyncio.
* [aioping ![GitHub Repo Stars](https://img.shields.io/github/stars/stellarbit/aioping) ![GitHub last commit](https://img.shields.io/github/last-commit/stellarbit/aioping)](https://github.com/stellarbit/aioping) - Fast asyncio implementation of ICMP (ping) protocol.
* [httpx ![GitHub Repo Stars](https://img.shields.io/github/stars/encode/httpx) ![GitHub last commit](https://img.shields.io/github/last-commit/encode/httpx)](https://github.com/encode/httpx) - asynchronous HTTP client for Python 3 with [requests ![GitHub Repo Stars](https://img.shields.io/github/stars/psf/requests) ![GitHub last commit](https://img.shields.io/github/last-commit/psf/requests)](https://github.com/psf/requests) compatible API.

## GraphQL

*Libraries to build GraphQL servers.*

* [Ariadne](https://ariadnegraphql.org) - Schema-first Python library for implementing GraphQL servers.
* [Tartiflette](https://tartiflette.io/) - Schema-first Python 3.6+ GraphQL engine built on top of `libgraphqlparser`.
* [Strawberry](https://strawberry.rocks) - Code-first Python 3 GraphQL server with Django, Flask and FastAPI/Starlette support.

## Testing

*Libraries to test asyncio based applications.*

* [aiomock ![GitHub Repo Stars](https://img.shields.io/github/stars/nhumrich/aiomock) ![GitHub last commit](https://img.shields.io/github/last-commit/nhumrich/aiomock)](https://github.com/nhumrich/aiomock/) - A python mock library that supports async methods.
* [asynctest ![GitHub Repo Stars](https://img.shields.io/github/stars/Martiusweb/asynctest) ![GitHub last commit](https://img.shields.io/github/last-commit/Martiusweb/asynctest)](https://github.com/Martiusweb/asynctest/) - Enhance the standard unittest package with features for testing. asyncio libraries
* [pytest-asyncio ![GitHub Repo Stars](https://img.shields.io/github/stars/pytest-dev/pytest-asyncio) ![GitHub last commit](https://img.shields.io/github/last-commit/pytest-dev/pytest-asyncio)](https://github.com/pytest-dev/pytest-asyncio) - Pytest support for asyncio.
* [aresponses ![GitHub Repo Stars](https://img.shields.io/github/stars/CircleUp/aresponses) ![GitHub last commit](https://img.shields.io/github/last-commit/CircleUp/aresponses)](https://github.com/CircleUp/aresponses) - Asyncio http mocking. Similar to the [responses ![GitHub Repo Stars](https://img.shields.io/github/stars/getsentry/responses) ![GitHub last commit](https://img.shields.io/github/last-commit/getsentry/responses)](https://github.com/getsentry/responses) library used for [requests ![GitHub Repo Stars](https://img.shields.io/github/stars/requests/requests) ![GitHub last commit](https://img.shields.io/github/last-commit/requests/requests)](https://github.com/requests/requests).
* [aioresponses ![GitHub Repo Stars](https://img.shields.io/github/stars/pnuckowski/aioresponses) ![GitHub last commit](https://img.shields.io/github/last-commit/pnuckowski/aioresponses)](https://github.com/pnuckowski/aioresponses) - Helper for mock/fake web requests in Python aiohttp package.

## Alternative Loops

*Alternative asyncio loop implementations.*

* [uvloop ![GitHub Repo Stars](https://img.shields.io/github/stars/MagicStack/uvloop) ![GitHub last commit](https://img.shields.io/github/last-commit/MagicStack/uvloop)](https://github.com/MagicStack/uvloop) - Ultra fast implementation of asyncio event loop on top of libuv.

## Misc

*Other awesome asyncio libraries.*

* [aiochan ![GitHub Repo Stars](https://img.shields.io/github/stars/zh217/aiochan) ![GitHub last commit](https://img.shields.io/github/last-commit/zh217/aiochan)](https://github.com/zh217/aiochan) - CSP-style concurrency with channels, select and multiprocessing on top of asyncio.
* [aiocache ![GitHub Repo Stars](https://img.shields.io/github/stars/argaen/aiocache) ![GitHub last commit](https://img.shields.io/github/last-commit/argaen/aiocache)](https://github.com/argaen/aiocache) - Cache manager for different backends.
* [aiofiles ![GitHub Repo Stars](https://img.shields.io/github/stars/Tinche/aiofiles) ![GitHub last commit](https://img.shields.io/github/last-commit/Tinche/aiofiles)](https://github.com/Tinche/aiofiles/) - File support for asyncio.
* [aiopath ![GitHub Repo Stars](https://img.shields.io/github/stars/alexdelorenzo/aiopath) ![GitHub last commit](https://img.shields.io/github/last-commit/alexdelorenzo/aiopath)](https://github.com/alexdelorenzo/aiopath) - Asynchronous `pathlib` for asyncio.
* [aiodebug ![GitHub Repo Stars](https://img.shields.io/github/stars/qntln/aiodebug) ![GitHub last commit](https://img.shields.io/github/last-commit/qntln/aiodebug)](https://github.com/qntln/aiodebug) - A tiny library for monitoring and testing asyncio programs.
* [aiorun ![GitHub Repo Stars](https://img.shields.io/github/stars/cjrh/aiorun) ![GitHub last commit](https://img.shields.io/github/last-commit/cjrh/aiorun)](https://github.com/cjrh/aiorun) - A `run()` function that handles all the usual boilerplate for startup and graceful shutdown.
* [aiosc ![GitHub Repo Stars](https://img.shields.io/github/stars/artfwo/aiosc) ![GitHub last commit](https://img.shields.io/github/last-commit/artfwo/aiosc)](https://github.com/artfwo/aiosc) -  Lightweight Open Sound Control implementation.
* [aioserial ![GitHub Repo Stars](https://img.shields.io/github/stars/changyuheng/aioserial) ![GitHub last commit](https://img.shields.io/github/last-commit/changyuheng/aioserial)](https://github.com/changyuheng/aioserial) - A drop-in replacement of [pySerial ![GitHub Repo Stars](https://img.shields.io/github/stars/pyserial/pyserial) ![GitHub last commit](https://img.shields.io/github/last-commit/pyserial/pyserial)](https://github.com/pyserial/pyserial).
* [aiozipkin ![GitHub Repo Stars](https://img.shields.io/github/stars/aio-libs/aiozipkin) ![GitHub last commit](https://img.shields.io/github/last-commit/aio-libs/aiozipkin)](https://github.com/aio-libs/aiozipkin) - Distributed tracing instrumentation for asyncio with zipkin
* [asgiref ![GitHub Repo Stars](https://img.shields.io/github/stars/django/asgiref) ![GitHub last commit](https://img.shields.io/github/last-commit/django/asgiref)](https://github.com/django/asgiref) - Backend utils for ASGI to WSGI integration, includes sync_to_async and async_to_sync function wrappers.
* [async_property ![GitHub Repo Stars](https://img.shields.io/github/stars/ryananguiano/async_property) ![GitHub last commit](https://img.shields.io/github/last-commit/ryananguiano/async_property)](https://github.com/ryananguiano/async_property) - Python decorator for async properties.
* [ruia ![GitHub Repo Stars](https://img.shields.io/github/stars/howie6879/ruia) ![GitHub last commit](https://img.shields.io/github/last-commit/howie6879/ruia)](https://github.com/howie6879/ruia) - An async web scraping micro-framework based on asyncio.
* [kubernetes_asyncio ![GitHub Repo Stars](https://img.shields.io/github/stars/tomplus/kubernetes_asyncio) ![GitHub last commit](https://img.shields.io/github/last-commit/tomplus/kubernetes_asyncio)](https://github.com/tomplus/kubernetes_asyncio) - Asynchronous client library for Kubernetes.
* [aiomisc ![GitHub Repo Stars](https://img.shields.io/github/stars/aiokitchen/aiomisc) ![GitHub last commit](https://img.shields.io/github/last-commit/aiokitchen/aiomisc)](https://github.com/aiokitchen/aiomisc) - Miscellaneous utils for `asyncio`.
* [taskiq](https://taskiq-python.github.io/) - Asynchronous distributed task manager (like celery, but async). 

## Writings

*Documentation, blog posts, and other awesome writing about asyncio.*

* [Official asyncio documentation](https://docs.python.org/3/library/asyncio.html) - Asynchronous I/O, event loop, coroutines and tasks.
* [Short well-written intro to asyncio](http://masnun.com/2015/11/13/python-generators-coroutines-native-coroutines-and-async-await.html) - Generators, Coroutines, Native Coroutines and async/await.
* [AsyncIO for the Working Python Developer](https://hackernoon.com/asyncio-for-the-working-python-developer-5c468e6e2e8e) - A gentle introduction to asynchronous programming from basic examples working up to URL fetching.
* [Test limits of Python aiohttp](https://pawelmhm.github.io/asyncio/python/aiohttp/2016/04/22/asyncio-aiohttp.html) - Making 1 million requests with python-aiohttp.
* [ASGI (Asynchronous Server Gateway Interface)](https://asgi.readthedocs.io/en/latest/) - A spiritual successor to WSGI, intended to provide a standard interface between async-capable Python web servers, frameworks, and applications.
* [First Principles Introduction to Asyncio](https://hackernoon.com/a-simple-introduction-to-pythons-asyncio-595d9c9ecf8c) - A no-buzzword first principles introduction to the internal workings of asyncio.
* [Developing and Testing an Asynchronous API with FastAPI and Pytest](https://testdriven.io/blog/fastapi-crud/) - This tutorial looks at how to develop and test an asynchronous API with FastAPI using Test-Driven Development (TDD).
* [Python Concurrency with asyncio](https://www.manning.com/books/python-concurrency-with-asyncio) - Learn how to speed up slow Python code with concurrent programming and the cutting-edge asyncio library.

## Talks

*Recordings of awesome talks about asyncio.*

* [Topics of Interest (Python Asyncio)](https://youtu.be/ZzfHjytDceU) | [screencast](https://youtu.be/lYe8W04ERnY) | [slides](https://speakerdeck.com/dabeaz/topics-of-interest-async) - PyCon Brasil 2015 keynote (David Beazley).
* [Python Asynchronous I/O Walkthrough](https://www.youtube.com/playlist?list=PLpEcQSRWP2IjVRlTUptdD05kG-UkJynQT) - 8-part code walkthrough (Philip Guo).
* [Async/await in Python 3.5 and why it is awesome](https://www.youtube.com/watch?v=m28fiN9y_r8&t=132s) - EuroPython 2016 (Yury Selivanov).
* [Fear and Awaiting in Async: A Savage Journey to the Heart of the Coroutine Dream](https://www.youtube.com/watch?v=E-1Y4kSsAFc) | [screencast](https://www.youtube.com/watch?v=Bm96RqNGbGo) - PyOhio 2016 keynote (David Beazley).
* [Asynchronous Python for the Complete Beginner](https://www.youtube.com/watch?v=iG6fr81xHKA) | [slides](https://speakerdeck.com/pycon2017/miguel-grinberg-asynchronous-python-for-the-complete-beginner) - PyCon 2017 (Miguel Grinberg).
* [Demystifying Python's Async and Await Keywords](https://www.youtube.com/watch?v=F19R_M4Nay4) - JetBrains TV 2020 (Michael Kennedy)

## Alternatives to asyncio

*Alternative approaches to async programming in Python, some of which attempt to support some compatibility with `asyncio`, others are not compatible at all.*

* [curio ![GitHub Repo Stars](https://img.shields.io/github/stars/dabeaz/curio) ![GitHub last commit](https://img.shields.io/github/last-commit/dabeaz/curio)](https://github.com/dabeaz/curio) - The coroutine concurrency library.
  * [Curio-Asyncio Bridge ![GitHub Repo Stars](https://img.shields.io/github/stars/dabeaz/curio) ![GitHub last commit](https://img.shields.io/github/last-commit/dabeaz/curio)](https://github.com/dabeaz/curio/issues/190) - basic curio -> asyncio coroutine bridge.
* [trio ![GitHub Repo Stars](https://img.shields.io/github/stars/python-trio/trio) ![GitHub last commit](https://img.shields.io/github/last-commit/python-trio/trio)](https://github.com/python-trio/trio) - Pythonic async I/O for humans and snake people.
  * [trio-asyncio ![GitHub Repo Stars](https://img.shields.io/github/stars/python-trio/trio-asyncio) ![GitHub last commit](https://img.shields.io/github/last-commit/python-trio/trio-asyncio)](https://github.com/python-trio/trio-asyncio) - re-implementation of the asyncio mainloop on top of Trio.
* [AnyIO ![GitHub Repo Stars](https://img.shields.io/github/stars/agronholm/anyio) ![GitHub last commit](https://img.shields.io/github/last-commit/agronholm/anyio)](https://github.com/agronholm/anyio) - High level asynchronous concurrency and networking framework that works on top of either trio or asyncio.
