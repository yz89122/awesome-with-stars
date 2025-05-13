<!--lint disable double-link-->

# Awesome FastAPI | [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome)

> A curated list of awesome things related to FastAPI.

[FastAPI](https://fastapi.tiangolo.com/) is a modern, high-performance, batteries-included Python web framework that's perfect for building RESTful APIs.

## Contents

- [Third-Party Extensions](#third-party-extensions)
  - [Admin](#admin)
  - [Auth](#auth)
  - [Databases](#databases)
  - [Developer Tools](#developer-tools)
  - [Email](#email)
  - [Utils](#utils)
- [Resources](#resources)
  - [Official Resources](#official-resources)
  - [External Resources](#external-resources)
  - [Podcasts](#podcasts)
  - [Articles](#articles)
  - [Tutorials](#tutorials)
  - [Talks](#talks)
  - [Videos](#videos)
  - [Courses](#courses)
  - [Best Practices](#best-practices)
- [Hosting](#hosting)
  - [PaaS](#paas)
  - [IaaS](#iaas)
  - [Serverless](#serverless)
- [Projects](#projects)
  - [Boilerplate](#boilerplate)
  - [Docker Images](#docker-images)
  - [Open Source Projects](#open-source-projects)
- [Sponsors](#sponsors)

## Third-Party Extensions

### Admin

- [FastAPI Admin ![GitHub Repo Stars](https://img.shields.io/github/stars/fastapi-admin/fastapi-admin) ![GitHub last commit](https://img.shields.io/github/last-commit/fastapi-admin/fastapi-admin)](https://github.com/fastapi-admin/fastapi-admin) - Functional admin panel that provides a user interface for performing CRUD operations on your data. Currently only works with the Tortoise ORM.
- [FastAPI Amis Admin ![GitHub Repo Stars](https://img.shields.io/github/stars/amisadmin/fastapi-amis-admin) ![GitHub last commit](https://img.shields.io/github/last-commit/amisadmin/fastapi-amis-admin)](https://github.com/amisadmin/fastapi-amis-admin) - A high-performance, efficient and easily extensible FastAPI admin framework.
- [Piccolo Admin ![GitHub Repo Stars](https://img.shields.io/github/stars/piccolo-orm/piccolo_admin) ![GitHub last commit](https://img.shields.io/github/last-commit/piccolo-orm/piccolo_admin)](https://github.com/piccolo-orm/piccolo_admin) - A powerful and modern admin GUI, using the Piccolo ORM.
- [SQLAlchemy Admin ![GitHub Repo Stars](https://img.shields.io/github/stars/aminalaee/sqladmin) ![GitHub last commit](https://img.shields.io/github/last-commit/aminalaee/sqladmin)](https://github.com/aminalaee/sqladmin) - Admin Panel for FastAPI/Starlette that works with SQLAlchemy models.
- [Starlette Admin ![GitHub Repo Stars](https://img.shields.io/github/stars/jowilf/starlette-admin) ![GitHub last commit](https://img.shields.io/github/last-commit/jowilf/starlette-admin)](https://github.com/jowilf/starlette-admin) - Admin framework for FastAPI/Starlette, supporting SQLAlchemy, SQLModel, MongoDB, and ODMantic.


### Auth

- [AuthX ![GitHub Repo Stars](https://img.shields.io/github/stars/yezz123/AuthX) ![GitHub last commit](https://img.shields.io/github/last-commit/yezz123/AuthX)](https://github.com/yezz123/AuthX) - Customizable Authentications and Oauth2 management for FastAPI.
- [FastAPI Auth ![GitHub Repo Stars](https://img.shields.io/github/stars/dmontagu/fastapi-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/dmontagu/fastapi-auth)](https://github.com/dmontagu/fastapi-auth) - Pluggable auth that supports the OAuth2 Password Flow with JWT access and refresh tokens.
- [FastAPI Azure Auth ![GitHub Repo Stars](https://img.shields.io/github/stars/Intility/fastapi-azure-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/Intility/fastapi-azure-auth)](https://github.com/Intility/fastapi-azure-auth) - Azure AD authentication for your APIs with single and multi tenant support.
- [FastAPI Cloud Auth ![GitHub Repo Stars](https://img.shields.io/github/stars/tokusumi/fastapi-cloudauth) ![GitHub last commit](https://img.shields.io/github/last-commit/tokusumi/fastapi-cloudauth)](https://github.com/tokusumi/fastapi-cloudauth) - Simple integration between FastAPI and cloud authentication services (AWS Cognito, Auth0, Firebase Authentication).
- [FastAPI Login ![GitHub Repo Stars](https://img.shields.io/github/stars/MushroomMaula/fastapi_login) ![GitHub last commit](https://img.shields.io/github/last-commit/MushroomMaula/fastapi_login)](https://github.com/MushroomMaula/fastapi_login) - Account management and authentication (based on [Flask-Login ![GitHub Repo Stars](https://img.shields.io/github/stars/maxcountryman/flask-login) ![GitHub last commit](https://img.shields.io/github/last-commit/maxcountryman/flask-login)](https://github.com/maxcountryman/flask-login)).
- [FastAPI JWT Auth ![GitHub Repo Stars](https://img.shields.io/github/stars/IndominusByte/fastapi-jwt-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/IndominusByte/fastapi-jwt-auth)](https://github.com/IndominusByte/fastapi-jwt-auth) - JWT auth (based on [Flask-JWT-Extended ![GitHub Repo Stars](https://img.shields.io/github/stars/vimalloc/flask-jwt-extended) ![GitHub last commit](https://img.shields.io/github/last-commit/vimalloc/flask-jwt-extended)](https://github.com/vimalloc/flask-jwt-extended)).
- [FastAPI Permissions ![GitHub Repo Stars](https://img.shields.io/github/stars/holgi/fastapi-permissions) ![GitHub last commit](https://img.shields.io/github/last-commit/holgi/fastapi-permissions)](https://github.com/holgi/fastapi-permissions) - Row-level permissions.
- [FastAPI Security ![GitHub Repo Stars](https://img.shields.io/github/stars/jacobsvante/fastapi-security) ![GitHub last commit](https://img.shields.io/github/last-commit/jacobsvante/fastapi-security)](https://github.com/jacobsvante/fastapi-security) - Implements authentication and authorization as dependencies in FastAPI.
- [FastAPI Simple Security ![GitHub Repo Stars](https://img.shields.io/github/stars/mrtolkien/fastapi_simple_security) ![GitHub last commit](https://img.shields.io/github/last-commit/mrtolkien/fastapi_simple_security)](https://github.com/mrtolkien/fastapi_simple_security) - Out-of-the-box API key security manageable through path operations.
- [FastAPI Users ![GitHub Repo Stars](https://img.shields.io/github/stars/fastapi-users/fastapi-users) ![GitHub last commit](https://img.shields.io/github/last-commit/fastapi-users/fastapi-users)](https://github.com/fastapi-users/fastapi-users) - Account management, authentication, authorization.

### Databases

#### ORMs

- [Edgy ORM ![GitHub Repo Stars](https://img.shields.io/github/stars/dymmond/edgy) ![GitHub last commit](https://img.shields.io/github/last-commit/dymmond/edgy)](https://github.com/dymmond/edgy) - Complex databases made simple.
- [FastAPI SQLAlchemy ![GitHub Repo Stars](https://img.shields.io/github/stars/mfreeborn/fastapi-sqlalchemy) ![GitHub last commit](https://img.shields.io/github/last-commit/mfreeborn/fastapi-sqlalchemy)](https://github.com/mfreeborn/fastapi-sqlalchemy) - Simple integration between FastAPI and [SQLAlchemy](https://www.sqlalchemy.org/).
- [Fastapi-SQLA ![GitHub Repo Stars](https://img.shields.io/github/stars/dialoguemd/fastapi-sqla) ![GitHub last commit](https://img.shields.io/github/last-commit/dialoguemd/fastapi-sqla)](https://github.com/dialoguemd/fastapi-sqla) - SQLAlchemy extension for FastAPI with support for pagination, asyncio, and pytest.
- [FastAPIwee ![GitHub Repo Stars](https://img.shields.io/github/stars/Ignisor/FastAPIwee) ![GitHub last commit](https://img.shields.io/github/last-commit/Ignisor/FastAPIwee)](https://github.com/Ignisor/FastAPIwee) - A simple way to create REST API based on [PeeWee ![GitHub Repo Stars](https://img.shields.io/github/stars/coleifer/peewee) ![GitHub last commit](https://img.shields.io/github/last-commit/coleifer/peewee)](https://github.com/coleifer/peewee) models.
- [GINO ![GitHub Repo Stars](https://img.shields.io/github/stars/python-gino/gino) ![GitHub last commit](https://img.shields.io/github/last-commit/python-gino/gino)](https://github.com/python-gino/gino) - A lightweight asynchronous ORM built on top of SQLAlchemy core for Python asyncio.
  - [FastAPI Example ![GitHub Repo Stars](https://img.shields.io/github/stars/leosussan/fastapi-gino-arq-uvicorn) ![GitHub last commit](https://img.shields.io/github/last-commit/leosussan/fastapi-gino-arq-uvicorn)](https://github.com/leosussan/fastapi-gino-arq-uvicorn)
- [ORM ![GitHub Repo Stars](https://img.shields.io/github/stars/encode/orm) ![GitHub last commit](https://img.shields.io/github/last-commit/encode/orm)](https://github.com/encode/orm) - An async ORM.
- [ormar](https://collerek.github.io/ormar/) - Ormar is an async ORM that uses Pydantic validation and can be used directly in FastAPI requests and responses so you are left with only one set of models to maintain. Alembic migrations included.
  - [FastAPI Example](https://collerek.github.io/ormar/latest/fastapi/) - Using FastAPI with ormar.
- [Piccolo ![GitHub Repo Stars](https://img.shields.io/github/stars/piccolo-orm/piccolo) ![GitHub last commit](https://img.shields.io/github/last-commit/piccolo-orm/piccolo)](https://github.com/piccolo-orm/piccolo) - An async ORM and query builder, supporting Postgres and SQLite, with batteries (migrations, security, etc).
  - [FastAPI Examples ![GitHub Repo Stars](https://img.shields.io/github/stars/piccolo-orm/piccolo_examples) ![GitHub last commit](https://img.shields.io/github/last-commit/piccolo-orm/piccolo_examples)](https://github.com/piccolo-orm/piccolo_examples) - Using FastAPI with Piccolo.
- [Prisma Client Python ![GitHub Repo Stars](https://img.shields.io/github/stars/RobertCraigie/prisma-client-py) ![GitHub last commit](https://img.shields.io/github/last-commit/RobertCraigie/prisma-client-py)](https://github.com/RobertCraigie/prisma-client-py) - An auto-generated, fully type safe ORM powered by Pydantic and tailored specifically for your schema - supports SQLite, PostgreSQL, MySQL, MongoDB, MariaDB and more.
  - [FastAPI Example ![GitHub Repo Stars](https://img.shields.io/github/stars/RobertCraigie/prisma-client-py) ![GitHub last commit](https://img.shields.io/github/last-commit/RobertCraigie/prisma-client-py)](https://github.com/RobertCraigie/prisma-client-py/tree/main/examples/fastapi-basic)
- [Tortoise ORM](https://tortoise.github.io) - An easy-to-use asyncio ORM (Object Relational Mapper) inspired by Django.
  - [FastAPI Example](https://tortoise.github.io/examples/fastapi.html) - An example of the Tortoise-ORM FastAPI integration.
  - [Tutorial: Setting up Tortoise ORM with FastAPI](https://web.archive.org/web/20200523174158/https://robwagner.dev/tortoise-fastapi-setup/)
  - [Aerich ![GitHub Repo Stars](https://img.shields.io/github/stars/tortoise/aerich) ![GitHub last commit](https://img.shields.io/github/last-commit/tortoise/aerich)](https://github.com/tortoise/aerich) - Tortoise ORM migrations tools.
- [Saffier ORM ![GitHub Repo Stars](https://img.shields.io/github/stars/tarsil/saffier) ![GitHub last commit](https://img.shields.io/github/last-commit/tarsil/saffier)](https://github.com/tarsil/saffier) - The only Python ORM you will ever need.
- [SQLModel](https://sqlmodel.tiangolo.com/) - SQLModel (which is powered by Pydantic and SQLAlchemy) is a library for interacting with SQL databases from Python code, with Python objects.

#### Query Builders

- [asyncpgsa ![GitHub Repo Stars](https://img.shields.io/github/stars/CanopyTax/asyncpgsa) ![GitHub last commit](https://img.shields.io/github/last-commit/CanopyTax/asyncpgsa)](https://github.com/CanopyTax/asyncpgsa) - A wrapper around [asyncpg ![GitHub Repo Stars](https://img.shields.io/github/stars/MagicStack/asyncpg) ![GitHub last commit](https://img.shields.io/github/last-commit/MagicStack/asyncpg)](https://github.com/MagicStack/asyncpg) for use with [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/).
- [Databases ![GitHub Repo Stars](https://img.shields.io/github/stars/encode/databases) ![GitHub last commit](https://img.shields.io/github/last-commit/encode/databases)](https://github.com/encode/databases) - Async SQL query builder that works on top of the [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/core/) expression language.
- [PyPika ![GitHub Repo Stars](https://img.shields.io/github/stars/kayak/pypika) ![GitHub last commit](https://img.shields.io/github/last-commit/kayak/pypika)](https://github.com/kayak/pypika) - A SQL query builder that exposes the full richness of the SQL language.

#### ODMs

- [Beanie ![GitHub Repo Stars](https://img.shields.io/github/stars/BeanieODM/beanie) ![GitHub last commit](https://img.shields.io/github/last-commit/BeanieODM/beanie)](https://github.com/BeanieODM/beanie) - Asynchronous Python ODM for MongoDB, based on [Motor](https://motor.readthedocs.io/en/stable/) and [Pydantic](https://docs.pydantic.dev/latest/), which supports data and schema migrations out of the box.
- [MongoEngine](http://mongoengine.org/) - A Document-Object Mapper (think ORM, but for document databases) for working with MongoDB from Python.
- [Motor](https://motor.readthedocs.io/) - Asynchronous Python driver for MongoDB.
- [ODMantic](https://art049.github.io/odmantic/) - AsyncIO MongoDB ODM integrated with [Pydantic](https://docs.pydantic.dev/latest/).
- [PynamoDB ![GitHub Repo Stars](https://img.shields.io/github/stars/pynamodb/PynamoDB) ![GitHub last commit](https://img.shields.io/github/last-commit/pynamodb/PynamoDB)](https://github.com/pynamodb/PynamoDB) - A pythonic interface to Amazon's DynamoDB.

#### Other Tools

- [Pydantic-SQLAlchemy ![GitHub Repo Stars](https://img.shields.io/github/stars/tiangolo/pydantic-sqlalchemy) ![GitHub last commit](https://img.shields.io/github/last-commit/tiangolo/pydantic-sqlalchemy)](https://github.com/tiangolo/pydantic-sqlalchemy) - Convert SQLAlchemy models to [Pydantic](https://docs.pydantic.dev/latest/) models.
- [FastAPI-CamelCase](https://nf1s.github.io/fastapi-camelcase/) - CamelCase JSON support for FastAPI utilizing [Pydantic](https://docs.pydantic.dev/latest/).
  - [CamelCase Models with FastAPI and Pydantic](https://medium.com/analytics-vidhya/camel-case-models-with-fast-api-and-pydantic-5a8acb6c0eee) - Accompanying blog post from the author of the extension.

### Developer Tools

- [FastAPI Code Generator ![GitHub Repo Stars](https://img.shields.io/github/stars/koxudaxi/fastapi-code-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/koxudaxi/fastapi-code-generator)](https://github.com/koxudaxi/fastapi-code-generator) - Create a FastAPI app from an OpenAPI file, enabling schema-driven development.
- [FastAPI Client Generator ![GitHub Repo Stars](https://img.shields.io/github/stars/dmontagu/fastapi_client) ![GitHub last commit](https://img.shields.io/github/last-commit/dmontagu/fastapi_client)](https://github.com/dmontagu/fastapi_client) - Generate a mypy- and IDE-friendly API client from an OpenAPI spec.
- [FastAPI Cruddy Framework ![GitHub Repo Stars](https://img.shields.io/github/stars/mdconaway/fastapi-cruddy-framework) ![GitHub last commit](https://img.shields.io/github/last-commit/mdconaway/fastapi-cruddy-framework)](https://github.com/mdconaway/fastapi-cruddy-framework) - A companion library to FastAPI designed to bring the development productivity of Ruby on Rails, Ember.js or Sails.js to the FastAPI ecosystem.
- [FastAPI MVC ![GitHub Repo Stars](https://img.shields.io/github/stars/fastapi-mvc/fastapi-mvc) ![GitHub last commit](https://img.shields.io/github/last-commit/fastapi-mvc/fastapi-mvc)](https://github.com/fastapi-mvc/fastapi-mvc) - Developer productivity tool for making high-quality FastAPI production-ready APIs.
- [FastAPI Profiler ![GitHub Repo Stars](https://img.shields.io/github/stars/sunhailin-Leo/fastapi_profiler) ![GitHub last commit](https://img.shields.io/github/last-commit/sunhailin-Leo/fastapi_profiler)](https://github.com/sunhailin-Leo/fastapi_profiler) - A FastAPI Middleware of joerick/pyinstrument to check your service performance.
- [FastAPI Versioning ![GitHub Repo Stars](https://img.shields.io/github/stars/DeanWay/fastapi-versioning) ![GitHub last commit](https://img.shields.io/github/last-commit/DeanWay/fastapi-versioning)](https://github.com/DeanWay/fastapi-versioning) - API versioning.
- [Jupyter Notebook REST API ![GitHub Repo Stars](https://img.shields.io/github/stars/Invictify/Jupter-Notebook-REST-API) ![GitHub last commit](https://img.shields.io/github/last-commit/Invictify/Jupter-Notebook-REST-API)](https://github.com/Invictify/Jupter-Notebook-REST-API) - Run your Jupyter notebooks as RESTful API endpoints.
- [Manage FastAPI ![GitHub Repo Stars](https://img.shields.io/github/stars/ycd/manage-fastapi) ![GitHub last commit](https://img.shields.io/github/last-commit/ycd/manage-fastapi)](https://github.com/ycd/manage-fastapi) - CLI tool for generating and managing FastAPI projects.
- [msgpack-asgi ![GitHub Repo Stars](https://img.shields.io/github/stars/florimondmanca/msgpack-asgi) ![GitHub last commit](https://img.shields.io/github/last-commit/florimondmanca/msgpack-asgi)](https://github.com/florimondmanca/msgpack-asgi) - Automatic [MessagePack](https://msgpack.org/) content negotiation.

### Email

- [FastAPI Mail ![GitHub Repo Stars](https://img.shields.io/github/stars/sabuhish/fastapi-mail) ![GitHub last commit](https://img.shields.io/github/last-commit/sabuhish/fastapi-mail)](https://github.com/sabuhish/fastapi-mail) - Lightweight mail system for sending emails and attachments (individual and bulk).

### Utils

- [Apitally ![GitHub Repo Stars](https://img.shields.io/github/stars/apitally/apitally-py) ![GitHub last commit](https://img.shields.io/github/last-commit/apitally/apitally-py)](https://github.com/apitally/apitally-py) - API analytics, monitoring, and request logging for FastAPI.
- [ASGI Correlation ID ![GitHub Repo Stars](https://img.shields.io/github/stars/snok/asgi-correlation-id) ![GitHub last commit](https://img.shields.io/github/last-commit/snok/asgi-correlation-id)](https://github.com/snok/asgi-correlation-id) - Request ID logging middleware.
- [FastAPI Cache ![GitHub Repo Stars](https://img.shields.io/github/stars/comeuplater/fastapi_cache) ![GitHub last commit](https://img.shields.io/github/last-commit/comeuplater/fastapi_cache)](https://github.com/comeuplater/fastapi_cache) - A simple lightweight cache system.
- [FastAPI Cache ![GitHub Repo Stars](https://img.shields.io/github/stars/long2ice/fastapi-cache) ![GitHub last commit](https://img.shields.io/github/last-commit/long2ice/fastapi-cache)](https://github.com/long2ice/fastapi-cache) - A tool to cache FastAPI response and function results, with support for Redis, Memcached, DynamoDB, and in-memory backends.
- [FastAPI Chameleon ![GitHub Repo Stars](https://img.shields.io/github/stars/mikeckennedy/fastapi-chameleon) ![GitHub last commit](https://img.shields.io/github/last-commit/mikeckennedy/fastapi-chameleon)](https://github.com/mikeckennedy/fastapi-chameleon) - Adds integration of the Chameleon template language to FastAPI.
- [FastAPI CloudEvents ![GitHub Repo Stars](https://img.shields.io/github/stars/sasha-tkachev/fastapi-cloudevents) ![GitHub last commit](https://img.shields.io/github/last-commit/sasha-tkachev/fastapi-cloudevents)](https://github.com/sasha-tkachev/fastapi-cloudevents) - [CloudEvents](https://cloudevents.io/) integration for FastAPI.
- [FastAPI Contrib ![GitHub Repo Stars](https://img.shields.io/github/stars/identixone/fastapi_contrib) ![GitHub last commit](https://img.shields.io/github/last-commit/identixone/fastapi_contrib)](https://github.com/identixone/fastapi_contrib) - Opinionated set of utilities: pagination, auth middleware, permissions, custom exception handlers, MongoDB support, and Opentracing middleware.
- [FastAPI CRUDRouter ![GitHub Repo Stars](https://img.shields.io/github/stars/awtkns/fastapi-crudrouter) ![GitHub last commit](https://img.shields.io/github/last-commit/awtkns/fastapi-crudrouter)](https://github.com/awtkns/fastapi-crudrouter) - A FastAPI router that automatically creates and documents CRUD routes for your models.
- [FastAPI Events ![GitHub Repo Stars](https://img.shields.io/github/stars/melvinkcx/fastapi-events) ![GitHub last commit](https://img.shields.io/github/last-commit/melvinkcx/fastapi-events)](https://github.com/melvinkcx/fastapi-events) - Asynchronous event dispatching/handling library for FastAPI and Starlette.
- [FastAPI FeatureFlags ![GitHub Repo Stars](https://img.shields.io/github/stars/Pytlicek/fastapi-featureflags) ![GitHub last commit](https://img.shields.io/github/last-commit/Pytlicek/fastapi-featureflags)](https://github.com/Pytlicek/fastapi-featureflags) - Simple implementation of feature flags for FastAPI.
- [FastAPI Jinja ![GitHub Repo Stars](https://img.shields.io/github/stars/AGeekInside/fastapi-jinja) ![GitHub last commit](https://img.shields.io/github/last-commit/AGeekInside/fastapi-jinja)](https://github.com/AGeekInside/fastapi-jinja) - Adds integration of the Jinja template language to FastAPI.
- [FastAPI Lazy ![GitHub Repo Stars](https://img.shields.io/github/stars/yezz123/fastango) ![GitHub last commit](https://img.shields.io/github/last-commit/yezz123/fastango)](https://github.com/yezz123/fastango) - Lazy package to start your project using FastAPI.
- [FastAPI Limiter ![GitHub Repo Stars](https://img.shields.io/github/stars/long2ice/fastapi-limiter) ![GitHub last commit](https://img.shields.io/github/last-commit/long2ice/fastapi-limiter)](https://github.com/long2ice/fastapi-limiter) - A request rate limiter for FastAPI.
- [FastAPI Listing ![GitHub Repo Stars](https://img.shields.io/github/stars/danielhasan1/fastapi-listing) ![GitHub last commit](https://img.shields.io/github/last-commit/danielhasan1/fastapi-listing)](https://github.com/danielhasan1/fastapi-listing) - A library to design/build listing APIs using component-based architecture, inbuilt query paginator, sorter, django-admin like filters & much more.
- [FastAPI MQTT ![GitHub Repo Stars](https://img.shields.io/github/stars/sabuhish/fastapi-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/sabuhish/fastapi-mqtt)](https://github.com/sabuhish/fastapi-mqtt) - An extension for the MQTT protocol.
- [FastAPI Opentracing ![GitHub Repo Stars](https://img.shields.io/github/stars/wesdu/fastapi-opentracing) ![GitHub last commit](https://img.shields.io/github/last-commit/wesdu/fastapi-opentracing)](https://github.com/wesdu/fastapi-opentracing) - Opentracing middleware and database tracing support for FastAPI.
- [FastAPI Pagination ![GitHub Repo Stars](https://img.shields.io/github/stars/uriyyo/fastapi-pagination) ![GitHub last commit](https://img.shields.io/github/last-commit/uriyyo/fastapi-pagination)](https://github.com/uriyyo/fastapi-pagination) - Pagination for FastAPI.
- [FastAPI Plugins ![GitHub Repo Stars](https://img.shields.io/github/stars/madkote/fastapi-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/madkote/fastapi-plugins)](https://github.com/madkote/fastapi-plugins) - Redis and Scheduler plugins.
- [FastAPI ServiceUtils ![GitHub Repo Stars](https://img.shields.io/github/stars/skallfass/fastapi_serviceutils) ![GitHub last commit](https://img.shields.io/github/last-commit/skallfass/fastapi_serviceutils)](https://github.com/skallfass/fastapi_serviceutils) - Generator for creating API services.
- [FastAPI SocketIO ![GitHub Repo Stars](https://img.shields.io/github/stars/pyropy/fastapi-socketio) ![GitHub last commit](https://img.shields.io/github/last-commit/pyropy/fastapi-socketio)](https://github.com/pyropy/fastapi-socketio) - Easy integration for FastAPI and SocketIO.
- [FastAPI Utilities ![GitHub Repo Stars](https://img.shields.io/github/stars/fastapiutils/fastapi-utils) ![GitHub last commit](https://img.shields.io/github/last-commit/fastapiutils/fastapi-utils)](https://github.com/fastapiutils/fastapi-utils) - Reusable utilities: class-based views, response inferring router, periodic tasks, timing middleware, SQLAlchemy session, OpenAPI spec simplification.
- [FastAPI Websocket Pub/Sub ![GitHub Repo Stars](https://img.shields.io/github/stars/authorizon/fastapi_websocket_pubsub) ![GitHub last commit](https://img.shields.io/github/last-commit/authorizon/fastapi_websocket_pubsub)](https://github.com/authorizon/fastapi_websocket_pubsub) - The classic pub/sub pattern made easily accessible and scalable over the web and across your cloud in realtime.
- [FastAPI Websocket RPC ![GitHub Repo Stars](https://img.shields.io/github/stars/authorizon/fastapi_websocket_rpc) ![GitHub last commit](https://img.shields.io/github/last-commit/authorizon/fastapi_websocket_rpc)](https://github.com/authorizon/fastapi_websocket_rpc) - RPC (bidirectional JSON RPC) over Websockets made easy, robust, and production ready.
- [OpenTelemetry FastAPI Instrumentation ![GitHub Repo Stars](https://img.shields.io/github/stars/open-telemetry/opentelemetry-python-contrib) ![GitHub last commit](https://img.shields.io/github/last-commit/open-telemetry/opentelemetry-python-contrib)](https://github.com/open-telemetry/opentelemetry-python-contrib/tree/main/instrumentation/opentelemetry-instrumentation-fastapi) - Library provides automatic and manual instrumentation of FastAPI web frameworks, instrumenting http requests served by applications utilizing the framework.
- [Prerender Python Starlette ![GitHub Repo Stars](https://img.shields.io/github/stars/BeeMyDesk/prerender-python-starlette) ![GitHub last commit](https://img.shields.io/github/last-commit/BeeMyDesk/prerender-python-starlette)](https://github.com/BeeMyDesk/prerender-python-starlette) - Starlette middleware for Prerender.
- [Prometheus FastAPI Instrumentator ![GitHub Repo Stars](https://img.shields.io/github/stars/trallnag/prometheus-fastapi-instrumentator) ![GitHub last commit](https://img.shields.io/github/last-commit/trallnag/prometheus-fastapi-instrumentator)](https://github.com/trallnag/prometheus-fastapi-instrumentator) - A configurable and modular Prometheus Instrumentator for your FastAPI application.
- [SlowApi ![GitHub Repo Stars](https://img.shields.io/github/stars/laurents/slowapi) ![GitHub last commit](https://img.shields.io/github/last-commit/laurents/slowapi)](https://github.com/laurents/slowapi) - Rate limiter (based on [Flask-Limiter](https://flask-limiter.readthedocs.io)).
- [Starlette Context ![GitHub Repo Stars](https://img.shields.io/github/stars/tomwojcik/starlette-context) ![GitHub last commit](https://img.shields.io/github/last-commit/tomwojcik/starlette-context)](https://github.com/tomwojcik/starlette-context) - Allows you to store and access the request data anywhere in your project, useful for logging.
- [Starlette Exporter ![GitHub Repo Stars](https://img.shields.io/github/stars/stephenhillier/starlette_exporter) ![GitHub last commit](https://img.shields.io/github/last-commit/stephenhillier/starlette_exporter)](https://github.com/stephenhillier/starlette_exporter) - One more prometheus integration for FastAPI and Starlette.
- [Starlette OpenTracing ![GitHub Repo Stars](https://img.shields.io/github/stars/acidjunk/starlette-opentracing) ![GitHub last commit](https://img.shields.io/github/last-commit/acidjunk/starlette-opentracing)](https://github.com/acidjunk/starlette-opentracing) - Opentracing support for Starlette and FastAPI.
- [Starlette Prometheus ![GitHub Repo Stars](https://img.shields.io/github/stars/perdy/starlette-prometheus) ![GitHub last commit](https://img.shields.io/github/last-commit/perdy/starlette-prometheus)](https://github.com/perdy/starlette-prometheus) - Prometheus integration for FastAPI and Starlette.
- [Strawberry GraphQL ![GitHub Repo Stars](https://img.shields.io/github/stars/strawberry-graphql/strawberry) ![GitHub last commit](https://img.shields.io/github/last-commit/strawberry-graphql/strawberry)](https://github.com/strawberry-graphql/strawberry) - Python GraphQL library based on dataclasses.

## Resources

### Official Resources

- [Documentation](https://fastapi.tiangolo.com/) - Comprehensive documentation.
- [Tutorial](https://fastapi.tiangolo.com/tutorial/) - Official tutorial showing you how to use FastAPI with most of its features, step by step.
- [Source Code ![GitHub Repo Stars](https://img.shields.io/github/stars/fastapi/fastapi) ![GitHub last commit](https://img.shields.io/github/last-commit/fastapi/fastapi)](https://github.com/fastapi/fastapi) - Hosted on GitHub.
- [Discord](https://discord.com/invite/VQjSZaeJmf) - Chat with other FastAPI users.

### External Resources

- [TestDriven.io FastAPI](https://testdriven.io/blog/topics/fastapi/) - Multiple FastAPI-specific articles that focus on developing and testing production-ready RESTful APIs, serving up machine learning models, and more.

### Podcasts

- [Build The Next Generation Of Python Web Applications With FastAPI](https://www.pythonpodcast.com/fastapi-web-application-framework-episode-259/) - In this episode of [Podcast Init](https://www.pythonpodcast.com/), the creator of FastAPI, [Sebastián Ramirez](https://tiangolo.com/), shares his motivations for building FastAPI and how it works under the hood.
- [FastAPI on PythonBytes](https://pythonbytes.fm/episodes/show/123/time-to-right-the-py-wrongs?time_in_sec=855) - Nice overview of the project.

### Articles

- [FastAPI has Ruined Flask Forever for Me](https://towardsdatascience.com/fastapi-has-ruined-flask-forever-for-me-73916127da)
- [Why we switched from Flask to FastAPI for production machine learning](https://medium.com/@calebkaiser/why-we-switched-from-flask-to-fastapi-for-production-machine-learning-765aab9b3679) - In-depth look at why you may want to move from Flask to FastAPI.

### Tutorials

- [Async SQLAlchemy with FastAPI](https://stribny.name/posts/fastapi-asyncalchemy/) - Learn how to use SQLAlchemy asynchronously.
- [Build and Secure an API in Python with FastAPI](https://blog.yezz.me/blog/Build-and-Secure-an-API-in-Python-with-FastAPI) - Secure and maintain an API based on FastAPI and SQLAlchemy.
- [Deploy a Dockerized FastAPI App to Google Cloud Platform](https://towardsdatascience.com/deploy-a-dockerized-fastapi-app-to-google-cloud-platform-24f72266c7ef) - A short guide to deploying a Dockerized Python app to Google Cloud Platform using Cloud Run and a SQL instance.
- [Deploy Machine Learning Models with Keras, FastAPI, Redis and Docker](https://medium.com/analytics-vidhya/deploy-machine-learning-models-with-keras-fastapi-redis-and-docker-4940df614ece)
- [Deploying Iris Classifications with FastAPI and Docker](https://towardsdatascience.com/deploying-iris-classifications-with-fastapi-and-docker-7c9b83fdec3a) - Dockerizing a FastAPI application.
- [Developing and Testing an Asynchronous API with FastAPI and Pytest](https://testdriven.io/blog/fastapi-crud/) - Develop and test an asynchronous API with FastAPI, Postgres, Pytest, and Docker using Test-Driven Development.
- [FastAPI for Flask Users](https://amitness.com/posts/fastapi-vs-flask) - Learn FastAPI with a side-by-side code comparison to Flask.
- [Getting started with GraphQL in Python with FastAPI and Ariadne](https://blog.yezz.me/blog/Getting-started-with-GraphQL-in-Python-with-FastAPI-and-Ariadne) - Generate a FullStack playground using FastAPI, GraphQL and Ariadne.
- [Implementing FastAPI Services – Abstraction and Separation of Concerns](https://camillovisini.com/coding/abstracting-fastapi-services) - FastAPI application and service structure for a more maintainable codebase.
- [Introducing FARM Stack - FastAPI, React, and MongoDB](https://www.mongodb.com/developer/languages/python/farm-stack-fastapi-react-mongodb/) - Getting started with a complete FastAPI web application stack.
- [Multitenancy with FastAPI, SQLAlchemy and PostgreSQL](https://mergeboard.com/blog/6-multitenancy-fastapi-sqlalchemy-postgresql/) - Learn how to make FastAPI applications multi-tenant ready.
- [Porting Flask to FastAPI for ML Model Serving](https://www.pluralsight.com/tech-blog/porting-flask-to-fastapi-for-ml-model-serving/) - Comparison of Flask vs FastAPI.
- [Real-time data streaming using FastAPI and WebSockets](https://stribny.name/posts/real-time-data-streaming-using-fastapi-and-websockets/) - Learn how to stream data from FastAPI directly into a real-time chart.
- [Running FastAPI applications in production](https://stribny.name/posts/fastapi-production/) - Use Gunicorn with systemd for production deployments.
- [Serving Machine Learning Models with FastAPI in Python](https://medium.com/@8B_EC/tutorial-serving-machine-learning-models-with-fastapi-in-python-c1a27319c459) - Use FastAPI to quickly and easily deploy and serve machine learning models in Python as a RESTful API.
- [Streaming video with FastAPI](https://stribny.name/posts/fastapi-video/) - Learn how to serve video streams.
- [Using Hypothesis and Schemathesis to Test FastAPI](https://testdriven.io/blog/fastapi-hypothesis/) - Apply property-based testing to FastAPI.

### Talks

- [PyConBY 2020: Serve ML models easily with FastAPI](https://www.youtube.com/watch?v=z9K5pwb0rt8) - From the talk by Sebastian Ramirez you will learn how to easily build a production-ready web (JSON) API for your ML models with FastAPI, including best practices by default.
- [PyCon UK 2019: FastAPI from the ground up](https://www.youtube.com/watch?v=3DLwPcrE5mA) - This talk shows how to build a simple REST API for a database from the ground up using FastAPI.

### Videos

- [Building a Stock Screener with FastAPI](https://www.youtube.com/watch?v=5GorMC2lPpk) - A you build a web-based stock screener with FastAPI, you'll be introduced to many of FastAPI's features, including Pydantic models, dependency injection, background tasks, and SQLAlchemy integration.
- [Building Web APIs Using FastAPI](https://www.youtube.com/watch?v=Pe66M8mn-wA) - Use FastAPI to build a web application programming interface (RESTful API).
- [FastAPI - A Web Framework for Python](https://www.youtube.com/watch?v=PUhio8CprhI&list=PL5gdMNl42qynpY-o43Jk3evfxEKSts3HS) - See how to do numeric validations with FastAPI.
- [FastAPI vs. Django vs. Flask](https://www.youtube.com/watch?v=9YBAOYQOzWs) - Which framework is best for Python in 2020? Which uses async/await the best? Which is the fastest?
- [Serving Machine Learning Models As API with FastAPI](https://www.youtube.com/watch?v=mkDxuRvKUL8) - Build a machine learning API with FastAPI.

### Courses

- [Test-Driven Development with FastAPI and Docker](https://testdriven.io/courses/tdd-fastapi/) - Learn how to build, test, and deploy a text summarization microservice with Python, FastAPI, and Docker.
- [Modern APIs with FastAPI and Python](https://training.talkpython.fm/courses/getting-started-with-fastapi) - A course designed to get you creating new APIs running in the cloud with FastAPI quickly.
- [Full Web Apps with FastAPI Course](https://training.talkpython.fm/courses/full-html-web-applications-with-fastapi) - You'll learn to build full web apps with FastAPI, equivalent to what you can do with Flask or Django.
- [The Definitive Guide to Celery and FastAPI](https://testdriven.io/courses/fastapi-celery/) - Learn how to add Celery to a FastAPI application to provide asynchronous task processing.

### Best Practices

- [FastAPI Best Practices ![GitHub Repo Stars](https://img.shields.io/github/stars/zhanymkanov/fastapi-best-practices) ![GitHub last commit](https://img.shields.io/github/last-commit/zhanymkanov/fastapi-best-practices)](https://github.com/zhanymkanov/fastapi-best-practices) - Collection of best practices in a GitHub repo.

## Hosting

### PaaS

(Platforms-as-a-Service)

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/)
- [Deta](https://www.deta.sh/) ([example](https://dev.to/athulcajay/fastapi-deta-ni5))
- [Fly](https://fly.io) ([tutorial](https://fly.io/docs/python/frameworks/fastapi/), [Deploy from a Git repo ![GitHub Repo Stars](https://img.shields.io/github/stars/fly-apps/hello-fastapi) ![GitHub last commit](https://img.shields.io/github/last-commit/fly-apps/hello-fastapi)](https://github.com/fly-apps/hello-fastapi))
- [Google App Engine](https://cloud.google.com/appengine)
- [Heroku](https://www.heroku.com/) ([Step-by-step tutorial](https://tutlinks.com/create-and-deploy-fastapi-app-to-heroku/), [ML model on Heroku tutorial](https://testdriven.io/blog/fastapi-machine-learning/))
- [Microsoft Azure App Service](https://azure.microsoft.com/en-us/products/app-service/)

### IaaS

(Infrastructure-as-a-Service)

- [AWS EC2](https://aws.amazon.com/ec2/)
- [Google Compute Engine](https://cloud.google.com/compute)
- [Digital Ocean](https://www.digitalocean.com/)
- [Linode](https://www.linode.com/)

### Serverless

Frameworks:

- [Chalice ![GitHub Repo Stars](https://img.shields.io/github/stars/aws/chalice) ![GitHub last commit](https://img.shields.io/github/last-commit/aws/chalice)](https://github.com/aws/chalice)
- [Mangum](https://mangum.io/) - Adapter for running ASGI applications with AWS Lambda and API Gateway.
- [Vercel](https://vercel.com/) - (formerly Zeit) ([example ![GitHub Repo Stars](https://img.shields.io/github/stars/Snailedlt/Markdown-Videos) ![GitHub last commit](https://img.shields.io/github/last-commit/Snailedlt/Markdown-Videos)](https://github.com/Snailedlt/Markdown-Videos)).

Compute:

- [AWS Lambda](https://aws.amazon.com/lambda/) ([example ![GitHub Repo Stars](https://img.shields.io/github/stars/iwpnd/fastapi-aws-lambda-example) ![GitHub last commit](https://img.shields.io/github/last-commit/iwpnd/fastapi-aws-lambda-example)](https://github.com/iwpnd/fastapi-aws-lambda-example))
- [Google Cloud Functions](https://cloud.google.com/functions)
- [Azure Functions](https://azure.microsoft.com/en-us/products/functions/)
- [Google Cloud Run](https://cloud.google.com/run) ([example ![GitHub Repo Stars](https://img.shields.io/github/stars/anthonycorletti/cloudrun-fastapi) ![GitHub last commit](https://img.shields.io/github/last-commit/anthonycorletti/cloudrun-fastapi)](https://github.com/anthonycorletti/cloudrun-fastapi))

## Projects

### Boilerplate

- [Full Stack FastAPI and PostgreSQL - Base Project Generator ![GitHub Repo Stars](https://img.shields.io/github/stars/fastapi/full-stack-fastapi-template) ![GitHub last commit](https://img.shields.io/github/last-commit/fastapi/full-stack-fastapi-template)](https://github.com/fastapi/full-stack-fastapi-template) - Full Stack FastAPI Template
, which includes FastAPI, React, SQLModel, PostgreSQL, Docker, GitHub Actions, automatic HTTPS, and more (developed by the creator of FastAPI, [Sebastián Ramírez](https://github.com/tiangolo)).
- [FastAPI and Tortoise ORM ![GitHub Repo Stars](https://img.shields.io/github/stars/prostomarkeloff/fastapi-tortoise) ![GitHub last commit](https://img.shields.io/github/last-commit/prostomarkeloff/fastapi-tortoise)](https://github.com/prostomarkeloff/fastapi-tortoise) - Powerful but simple template for web APIs w/ FastAPI (as web framework) and Tortoise-ORM (for working via database without headache).
- [FastAPI Model Server Skeleton ![GitHub Repo Stars](https://img.shields.io/github/stars/eightBEC/fastapi-ml-skeleton) ![GitHub last commit](https://img.shields.io/github/last-commit/eightBEC/fastapi-ml-skeleton)](https://github.com/eightBEC/fastapi-ml-skeleton) - Skeleton app to serve machine learning models production-ready.
- [cookiecutter-spacy-fastapi ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/cookiecutter-spacy-fastapi) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/cookiecutter-spacy-fastapi)](https://github.com/microsoft/cookiecutter-spacy-fastapi) - Quick deployments of spaCy models with FastAPI.
- [cookiecutter-fastapi ![GitHub Repo Stars](https://img.shields.io/github/stars/arthurhenrique/cookiecutter-fastapi) ![GitHub last commit](https://img.shields.io/github/last-commit/arthurhenrique/cookiecutter-fastapi)](https://github.com/arthurhenrique/cookiecutter-fastapi) - Cookiecutter template for FastAPI projects using: Machine Learning, Poetry, Azure Pipelines and pytest.
- [openapi-python-client ![GitHub Repo Stars](https://img.shields.io/github/stars/openapi-generators/openapi-python-client) ![GitHub last commit](https://img.shields.io/github/last-commit/openapi-generators/openapi-python-client)](https://github.com/openapi-generators/openapi-python-client) - Generate modern FastAPI Python clients (via FastAPI) from OpenAPI.
- [Pywork ![GitHub Repo Stars](https://img.shields.io/github/stars/vutran1710/YeomanPywork) ![GitHub last commit](https://img.shields.io/github/last-commit/vutran1710/YeomanPywork)](https://github.com/vutran1710/YeomanPywork) - [Yeoman](https://yeoman.io/) generator to scaffold a FastAPI app.
- [fastapi-gino-arq-uvicorn ![GitHub Repo Stars](https://img.shields.io/github/stars/leosussan/fastapi-gino-arq-uvicorn) ![GitHub last commit](https://img.shields.io/github/last-commit/leosussan/fastapi-gino-arq-uvicorn)](https://github.com/leosussan/fastapi-gino-arq-uvicorn) - Template for a high-performance async REST API, in Python. FastAPI + GINO + Arq + Uvicorn (w/ Redis and PostgreSQL).
- [FastAPI and React Template ![GitHub Repo Stars](https://img.shields.io/github/stars/Buuntu/fastapi-react) ![GitHub last commit](https://img.shields.io/github/last-commit/Buuntu/fastapi-react)](https://github.com/Buuntu/fastapi-react) - Full stack cookiecutter boilerplate using FastAPI, TypeScript, Docker, PostgreSQL, and React.
- [FastAPI Nano ![GitHub Repo Stars](https://img.shields.io/github/stars/rednafi/fastapi-nano) ![GitHub last commit](https://img.shields.io/github/last-commit/rednafi/fastapi-nano)](https://github.com/rednafi/fastapi-nano) - Simple FastAPI template with factory pattern architecture.
- [FastAPI template ![GitHub Repo Stars](https://img.shields.io/github/stars/s3rius/FastAPI-template) ![GitHub last commit](https://img.shields.io/github/last-commit/s3rius/FastAPI-template)](https://github.com/s3rius/FastAPI-template) - Flexible, lightweight FastAPI project generator. It includes support for SQLAlchemy, multiple databases, CI/CD, Docker, and Kubernetes.
- [FastAPI on Google Cloud Run ![GitHub Repo Stars](https://img.shields.io/github/stars/anthonycorletti/cloudrun-fastapi) ![GitHub last commit](https://img.shields.io/github/last-commit/anthonycorletti/cloudrun-fastapi)](https://github.com/anthonycorletti/cloudrun-fastapi) - Boilerplate for API building with FastAPI, SQLModel, and Google Cloud Run.
- [FastAPI with Firestore ![GitHub Repo Stars](https://img.shields.io/github/stars/anthonycorletti/firestore-fastapi) ![GitHub last commit](https://img.shields.io/github/last-commit/anthonycorletti/firestore-fastapi)](https://github.com/anthonycorletti/firestore-fastapi) - Boilerplate for API building with FastAPI and Google Cloud Firestore.
- [fastapi-alembic-sqlmodel-async ![GitHub Repo Stars](https://img.shields.io/github/stars/jonra1993/fastapi-alembic-sqlmodel-async) ![GitHub last commit](https://img.shields.io/github/last-commit/jonra1993/fastapi-alembic-sqlmodel-async)](https://github.com/jonra1993/fastapi-alembic-sqlmodel-async) - This is a project template which uses FastAPI, Alembic, and async SQLModel as ORM.
- [fastapi-starter-project ![GitHub Repo Stars](https://img.shields.io/github/stars/mirzadelic/fastapi-starter-project) ![GitHub last commit](https://img.shields.io/github/last-commit/mirzadelic/fastapi-starter-project)](https://github.com/mirzadelic/fastapi-starter-project) - A project template which uses FastAPI, SQLModel, Alembic, Pytest, Docker, GitHub Actions CI.
- [Full Stack FastAPI and MongoDB - Base Project Generator ![GitHub Repo Stars](https://img.shields.io/github/stars/mongodb-labs/full-stack-fastapi-mongodb) ![GitHub last commit](https://img.shields.io/github/last-commit/mongodb-labs/full-stack-fastapi-mongodb)](https://github.com/mongodb-labs/full-stack-fastapi-mongodb) - Full stack, modern web application generator, which includes FastAPI, MongoDB, Docker, Celery, React frontend, automatic HTTPS and more.
- [Uvicorn Poetry FastAPI Project Template ![GitHub Repo Stars](https://img.shields.io/github/stars/max-pfeiffer/uvicorn-poetry-fastapi-project-template) ![GitHub last commit](https://img.shields.io/github/last-commit/max-pfeiffer/uvicorn-poetry-fastapi-project-template)](https://github.com/max-pfeiffer/uvicorn-poetry-fastapi-project-template) - Cookiecutter project template for starting a FastAPI application. Runs in a Docker container with Uvicorn ASGI server on Kubernetes. Supports AMD64 and ARM64 CPU architectures.

### Docker Images

- [inboard ![GitHub Repo Stars](https://img.shields.io/github/stars/br3ndonland/inboard) ![GitHub last commit](https://img.shields.io/github/last-commit/br3ndonland/inboard)](https://github.com/br3ndonland/inboard) - Docker images to power your FastAPI apps and help you ship faster.
- [uvicorn-gunicorn-fastapi-docker ![GitHub Repo Stars](https://img.shields.io/github/stars/tiangolo/uvicorn-gunicorn-fastapi-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/tiangolo/uvicorn-gunicorn-fastapi-docker)](https://github.com/tiangolo/uvicorn-gunicorn-fastapi-docker) - Docker image with Uvicorn managed by Gunicorn for high-performance FastAPI web applications in Python 3.7 and 3.6 with performance auto-tuning.
- [uvicorn-gunicorn-poetry ![GitHub Repo Stars](https://img.shields.io/github/stars/max-pfeiffer/uvicorn-gunicorn-poetry) ![GitHub last commit](https://img.shields.io/github/last-commit/max-pfeiffer/uvicorn-gunicorn-poetry)](https://github.com/max-pfeiffer/uvicorn-gunicorn-poetry) - Docker image with Gunicorn using Uvicorn workers for running Python web applications. Uses Poetry for managing dependencies and setting up a virtual environment. Supports AMD64 and ARM64 CPU architectures.
- [uvicorn-poetry ![GitHub Repo Stars](https://img.shields.io/github/stars/max-pfeiffer/uvicorn-poetry) ![GitHub last commit](https://img.shields.io/github/last-commit/max-pfeiffer/uvicorn-poetry)](https://github.com/max-pfeiffer/uvicorn-poetry) - Docker image with Uvicorn ASGI server for running Python web applications on Kubernetes. Uses Poetry for managing dependencies and setting up a virtual environment. Supports AMD64 and ARM64 CPU architectures.

### Open Source Projects

- [Astrobase ![GitHub Repo Stars](https://img.shields.io/github/stars/anthonycorletti/astrobase) ![GitHub last commit](https://img.shields.io/github/last-commit/anthonycorletti/astrobase)](https://github.com/anthonycorletti/astrobase) - Simple, fast, and secure deployments anywhere.
- [Awesome FastAPI Projects ![GitHub Repo Stars](https://img.shields.io/github/stars/Kludex/awesome-fastapi-projects) ![GitHub last commit](https://img.shields.io/github/last-commit/Kludex/awesome-fastapi-projects)](https://github.com/Kludex/awesome-fastapi-projects) - Organized list of projects that use FastAPI.
- [Bitcart ![GitHub Repo Stars](https://img.shields.io/github/stars/bitcart/bitcart) ![GitHub last commit](https://img.shields.io/github/last-commit/bitcart/bitcart)](https://github.com/bitcart/bitcart) - Platform for merchants, users and developers which offers easy setup and use.
- [Bali ![GitHub Repo Stars](https://img.shields.io/github/stars/bali-framework/bali) ![GitHub last commit](https://img.shields.io/github/last-commit/bali-framework/bali)](https://github.com/bali-framework/bali) - Simplify Cloud Native Microservices development base on FastAPI and gRPC.
- [Bunnybook ![GitHub Repo Stars](https://img.shields.io/github/stars/pietrobassi/bunnybook) ![GitHub last commit](https://img.shields.io/github/last-commit/pietrobassi/bunnybook)](https://github.com/pietrobassi/bunnybook) - A tiny social network built with FastAPI, React+RxJs, Neo4j, PostgreSQL, and Redis.
- [Coronavirus-tg-api ![GitHub Repo Stars](https://img.shields.io/github/stars/egbakou/coronavirus-tg-api) ![GitHub last commit](https://img.shields.io/github/last-commit/egbakou/coronavirus-tg-api)](https://github.com/egbakou/coronavirus-tg-api) - API for tracking the global coronavirus (COVID-19, SARS-CoV-2) outbreak.
- [Dispatch ![GitHub Repo Stars](https://img.shields.io/github/stars/Netflix/dispatch) ![GitHub last commit](https://img.shields.io/github/last-commit/Netflix/dispatch)](https://github.com/Netflix/dispatch) - Manage security incidents.
- FastAPI CRUD Example:
  - [Async flavor ![GitHub Repo Stars](https://img.shields.io/github/stars/testdrivenio/fastapi-crud-async) ![GitHub last commit](https://img.shields.io/github/last-commit/testdrivenio/fastapi-crud-async)](https://github.com/testdrivenio/fastapi-crud-async)
  - [Sync Flavor ![GitHub Repo Stars](https://img.shields.io/github/stars/testdrivenio/fastapi-crud-sync) ![GitHub last commit](https://img.shields.io/github/last-commit/testdrivenio/fastapi-crud-sync)](https://github.com/testdrivenio/fastapi-crud-sync)
- [FastAPI with Observability ![GitHub Repo Stars](https://img.shields.io/github/stars/Blueswen/fastapi-observability) ![GitHub last commit](https://img.shields.io/github/last-commit/Blueswen/fastapi-observability)](https://github.com/Blueswen/fastapi-observability) - Observe FastAPI app with three pillars of observability: Traces (Tempo), Metrics (Prometheus), Logs (Loki) on Grafana through OpenTelemetry and OpenMetrics.
- [DogeAPI ![GitHub Repo Stars](https://img.shields.io/github/stars/yezz123/DogeAPI) ![GitHub last commit](https://img.shields.io/github/last-commit/yezz123/DogeAPI)](https://github.com/yezz123/DogeAPI) - API with high performance to create a simple blog and CRUD with OAuth2PasswordBearer.
- [FastAPI Websocket Broadcast ![GitHub Repo Stars](https://img.shields.io/github/stars/kthwaite/fastapi-websocket-broadcast) ![GitHub last commit](https://img.shields.io/github/last-commit/kthwaite/fastapi-websocket-broadcast)](https://github.com/kthwaite/fastapi-websocket-broadcast) - Websocket 'broadcast' demo.
- [FastAPI with Celery, RabbitMQ, and Redis ![GitHub Repo Stars](https://img.shields.io/github/stars/GregaVrbancic/fastapi-celery) ![GitHub last commit](https://img.shields.io/github/last-commit/GregaVrbancic/fastapi-celery)](https://github.com/GregaVrbancic/fastapi-celery) - Minimal example utilizing FastAPI and Celery with RabbitMQ for task queue, Redis for Celery backend, and Flower for monitoring the Celery tasks.
- [JeffQL ![GitHub Repo Stars](https://img.shields.io/github/stars/yezz123/JeffQL) ![GitHub last commit](https://img.shields.io/github/last-commit/yezz123/JeffQL)](https://github.com/yezz123/JeffQL/) - Simple authentication and login API using GraphQL and JWT.
- [JSON-RPC Server ![GitHub Repo Stars](https://img.shields.io/github/stars/smagafurov/fastapi-jsonrpc) ![GitHub last commit](https://img.shields.io/github/last-commit/smagafurov/fastapi-jsonrpc)](https://github.com/smagafurov/fastapi-jsonrpc) - JSON-RPC server based on FastAPI.
- [Mailer ![GitHub Repo Stars](https://img.shields.io/github/stars/rclement/mailer) ![GitHub last commit](https://img.shields.io/github/last-commit/rclement/mailer)](https://github.com/rclement/mailer) - Dead-simple mailer micro-service for static websites.
- [Markdown-Videos ![GitHub Repo Stars](https://img.shields.io/github/stars/Snailedlt/Markdown-Videos) ![GitHub last commit](https://img.shields.io/github/last-commit/Snailedlt/Markdown-Videos)](https://github.com/Snailedlt/Markdown-Videos) - API for generating thumbnails to embed into your markdown content.
- [Nemo ![GitHub Repo Stars](https://img.shields.io/github/stars/harshitsinghai77/nemo-backend) ![GitHub last commit](https://img.shields.io/github/last-commit/harshitsinghai77/nemo-backend)](https://github.com/harshitsinghai77/nemo-backend) - Be productive with Nemo.
- [OPAL (Open Policy Administration Layer) ![GitHub Repo Stars](https://img.shields.io/github/stars/authorizon/opal) ![GitHub last commit](https://img.shields.io/github/last-commit/authorizon/opal)](https://github.com/authorizon/opal) - Real-time authorization updates on top of Open-Policy; built with FastAPI, Typer, and FastAPI WebSocket pub/sub.
- [Polar ![GitHub Repo Stars](https://img.shields.io/github/stars/polarsource/polar) ![GitHub last commit](https://img.shields.io/github/last-commit/polarsource/polar)](https://github.com/polarsource/polar) - A funding and monetization platform for developers, built with FastAPI, SQLAlchemy, Alembic, and Arq.
- [RealWorld Example App - mongo ![GitHub Repo Stars](https://img.shields.io/github/stars/markqiu/fastapi-mongodb-realworld-example-app) ![GitHub last commit](https://img.shields.io/github/last-commit/markqiu/fastapi-mongodb-realworld-example-app)](https://github.com/markqiu/fastapi-mongodb-realworld-example-app)
- [RealWorld Example App - postgres ![GitHub Repo Stars](https://img.shields.io/github/stars/nsidnev/fastapi-realworld-example-app) ![GitHub last commit](https://img.shields.io/github/last-commit/nsidnev/fastapi-realworld-example-app)](https://github.com/nsidnev/fastapi-realworld-example-app)
- [redis-streams-fastapi-chat ![GitHub Repo Stars](https://img.shields.io/github/stars/leonh/redis-streams-fastapi-chat) ![GitHub last commit](https://img.shields.io/github/last-commit/leonh/redis-streams-fastapi-chat)](https://github.com/leonh/redis-streams-fastapi-chat) - A simple Redis Streams backed chat app using Websockets, Asyncio and FastAPI/Starlette.
- [Sprites as a service ![GitHub Repo Stars](https://img.shields.io/github/stars/ljvmiranda921/sprites-as-a-service) ![GitHub last commit](https://img.shields.io/github/last-commit/ljvmiranda921/sprites-as-a-service)](https://github.com/ljvmiranda921/sprites-as-a-service) - Generate your personal 8-bit avatars using Cellular Automata.
- [Slackers ![GitHub Repo Stars](https://img.shields.io/github/stars/uhavin/slackers) ![GitHub last commit](https://img.shields.io/github/last-commit/uhavin/slackers)](https://github.com/uhavin/slackers) - Slack webhooks API.
- [TermPair ![GitHub Repo Stars](https://img.shields.io/github/stars/cs01/termpair) ![GitHub last commit](https://img.shields.io/github/last-commit/cs01/termpair)](https://github.com/cs01/termpair) - View and control terminals from your browser with end-to-end encryption.
- [Universities ![GitHub Repo Stars](https://img.shields.io/github/stars/ycd/universities) ![GitHub last commit](https://img.shields.io/github/last-commit/ycd/universities)](https://github.com/ycd/universities) - API service for obtaining information about +9600 universities worldwide.

## Sponsors

Please support this open source project by checking out our sponsors:

<a href="https://testdriven.io/courses/tdd-fastapi/?ref=awesome-fastapi" target="_blank" title="Learn to build high-quality web apps with best practices"><img src="https://github.com/mjhea0/awesome-fastapi/raw/main/images/testdriven.svg"></a>
