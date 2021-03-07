# Awesome Java [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of awesome Java frameworks, libraries and software.

## Contents

- [Projects](#projects)
  - [Bean Mapping](#bean-mapping)
  - [Build](#build)
  - [Bytecode Manipulation](#bytecode-manipulation)
  - [Caching](#caching)
  - [CLI](#cli)
  - [Cluster Management](#cluster-management)
  - [Code Analysis](#code-analysis)
  - [Code Coverage](#code-coverage)
  - [Code Generators](#code-generators)
  - [Compiler-compiler](#compiler-compiler)
  - [Computer Vision](#computer-vision)
  - [Configuration](#configuration)
  - [Constraint Satisfaction Problem Solver](#constraint-satisfaction-problem-solver)
  - [CSV](#csv)
  - [Data Structures](#data-structures)
  - [Database](#database)
  - [Date and Time](#date-and-time)
  - [Dependency Injection](#dependency-injection)
  - [Development](#development)
  - [Distributed Applications](#distributed-applications)
  - [Distributed Transactions](#distributed-transactions)
  - [Distribution](#distribution)
  - [Document Processing](#document-processing)
  - [Financial](#financial)
  - [Formal Verification](#formal-verification)
  - [Functional Programming](#functional-programming)
  - [Game Development](#game-development)
  - [Geospatial](#geospatial)
  - [GUI](#gui)
  - [High Performance](#high-performance)
  - [HTTP Clients](#http-clients)
  - [Hypermedia Types](#hypermedia-types)
  - [IDE](#ide)
  - [Imagery](#imagery)
  - [Introspection](#introspection)
  - [Job Scheduling](#job-scheduling)
  - [JSON](#json)
  - [JVM and JDK](#jvm-and-jdk)
  - [Logging](#logging)
  - [Machine Learning](#machine-learning)
  - [Messaging](#messaging)
  - [Microservice](#microservice)
  - [Miscellaneous](#miscellaneous)
  - [Mobile Development](#mobile-development)
  - [Monitoring](#monitoring)
  - [Native](#native)
  - [Natural Language Processing](#natural-language-processing)
  - [Networking](#networking)
  - [ORM](#orm)
  - [PaaS](#paas)
  - [PDF](#pdf)
  - [Performance analysis](#performance-analysis)
  - [Platform](#platform)
  - [Processes](#processes)
  - [Reactive libraries](#reactive-libraries)
  - [REST Frameworks](#rest-frameworks)
  - [Science](#science)
  - [Search](#search)
  - [Security](#security)
  - [Serialization](#serialization)
  - [Server](#server)
  - [Template Engine](#template-engine)
  - [Testing](#testing)
  - [Utility](#utility)
  - [Version Managers](#version-managers)
  - [Web Crawling](#web-crawling)
  - [Web Frameworks](#web-frameworks)
  - [Workflow Orchestration Engines](#workflow-orchestration-engines)
- [Resources](#resources)
  - [Related Awesome Lists](#awesome-lists)
  - [Communities](#communities)
  - [Frontends](#frontends)
  - [Influential Books](#influential-books)
  - [Podcasts and Screencasts](#podcasts-and-screencasts)
  - [People](#people)
  - [Websites](#websites)

## Projects

### Bean Mapping

_Frameworks that ease bean mapping._

- [dOOv ![GitHub Repo Stars](https://img.shields.io/github/stars/doov-io/doov) ![GitHub last commit](https://img.shields.io/github/last-commit/doov-io/doov)](https://github.com/doov-io/doov) - Provides fluent API for typesafe domain model validation and mapping. It uses annotations, code generation and a type safe DSL to make bean validation and mapping fast and easy.
- [JMapper ![GitHub Repo Stars](https://img.shields.io/github/stars/jmapper-framework/jmapper-core) ![GitHub last commit](https://img.shields.io/github/last-commit/jmapper-framework/jmapper-core)](https://github.com/jmapper-framework/jmapper-core) - Uses byte code manipulation for lightning-fast mapping. Supports annotations and API or XML configuration.
- [MapStruct ![GitHub Repo Stars](https://img.shields.io/github/stars/mapstruct/mapstruct) ![GitHub last commit](https://img.shields.io/github/last-commit/mapstruct/mapstruct)](https://github.com/mapstruct/mapstruct) - Code generator that simplifies mappings between different bean types, based on a convention-over-configuration approach.
- [ModelMapper ![GitHub Repo Stars](https://img.shields.io/github/stars/modelmapper/modelmapper) ![GitHub last commit](https://img.shields.io/github/last-commit/modelmapper/modelmapper)](https://github.com/modelmapper/modelmapper) - Intelligent object mapping library that automatically maps objects to each other.
- [Orika ![GitHub Repo Stars](https://img.shields.io/github/stars/orika-mapper/orika) ![GitHub last commit](https://img.shields.io/github/last-commit/orika-mapper/orika)](https://github.com/orika-mapper/orika) - JavaBean-mapping framework that recursively copies (among other capabilities) data from one object to another.
- [reMap ![GitHub Repo Stars](https://img.shields.io/github/stars/remondis-it/remap) ![GitHub last commit](https://img.shields.io/github/last-commit/remondis-it/remap)](https://github.com/remondis-it/remap) - Lambda and method handle-based mapping which requires code and not annotations if objects have different names.
- [Selma ![GitHub Repo Stars](https://img.shields.io/github/stars/xebia-france/selma) ![GitHub last commit](https://img.shields.io/github/last-commit/xebia-france/selma)](https://github.com/xebia-france/selma) - Annotation processor-based bean mapper.

### Build

_Tools that handle the build cycle and dependencies of an application._

- [Apache Maven](https://maven.apache.org) - Declarative build and dependency management that favors convention over configuration. It might be preferable to Apache Ant, which uses a rather procedural approach and can be difficult to maintain.
- [Bazel](https://bazel.build) - Tool from Google that builds code quickly and reliably.
- [Buck ![GitHub Repo Stars](https://img.shields.io/github/stars/facebook/buck) ![GitHub last commit](https://img.shields.io/github/last-commit/facebook/buck)](https://github.com/facebook/buck) - Encourages the creation of small, reusable modules consisting of code and resources.
- [Gradle](https://gradle.org) - Incremental builds programmed via Groovy instead of declaring XML. Works well with Maven's dependency management.

### Bytecode Manipulation

_Libraries to manipulate bytecode programmatically._

- [ASM](https://asm.ow2.io) - All-purpose, low-level bytecode manipulation and analysis.
- [Byte Buddy](https://bytebuddy.net) - Further simplifies bytecode generation with a fluent API.
- [bytecode-viewer ![GitHub Repo Stars](https://img.shields.io/github/stars/Konloch/bytecode-viewer) ![GitHub last commit](https://img.shields.io/github/last-commit/Konloch/bytecode-viewer)](https://github.com/Konloch/bytecode-viewer) - Java 8 Jar & Android APK reverse engineering suite. (GPL-3.0-only)
- [Byteman](https://byteman.jboss.org) - Manipulate bytecode at runtime via DSL (rules); mainly for testing/troubleshooting. (LGPL-2.1-or-later)
- [cglib ![GitHub Repo Stars](https://img.shields.io/github/stars/cglib/cglib) ![GitHub last commit](https://img.shields.io/github/last-commit/cglib/cglib)](https://github.com/cglib/cglib) - Bytecode generation library.
- [Javassist ![GitHub Repo Stars](https://img.shields.io/github/stars/jboss-javassist/javassist) ![GitHub last commit](https://img.shields.io/github/last-commit/jboss-javassist/javassist)](https://github.com/jboss-javassist/javassist) - Tries to simplify bytecode editing.
- [Maker ![GitHub Repo Stars](https://img.shields.io/github/stars/cojen/maker) ![GitHub last commit](https://img.shields.io/github/last-commit/cojen/maker)](https://github.com/cojen/maker) - Provides low level bytecode generation.
- [Mixin ![GitHub Repo Stars](https://img.shields.io/github/stars/SpongePowered/Mixin) ![GitHub last commit](https://img.shields.io/github/last-commit/SpongePowered/Mixin)](https://github.com/SpongePowered/Mixin) - Manipulate bytecode at runtime using real Java code.
- [Perses ![GitHub Repo Stars](https://img.shields.io/github/stars/nicolasmanic/perses) ![GitHub last commit](https://img.shields.io/github/last-commit/nicolasmanic/perses)](https://github.com/nicolasmanic/perses) - Dynamically injects failure/latency at the bytecode level according to principles of chaos engineering.
- [Recaf](https://www.coley.software/Recaf/) - JVM reverse engineering toolkit, essentially an IDE for Java bytecode.

### Caching

_Libraries that provide caching facilities._

- [cache2k](https://cache2k.org) - In-memory high performance caching library.
- [Caffeine ![GitHub Repo Stars](https://img.shields.io/github/stars/ben-manes/caffeine) ![GitHub last commit](https://img.shields.io/github/last-commit/ben-manes/caffeine)](https://github.com/ben-manes/caffeine) - High-performance, near-optimal caching library.
- [Ehcache](http://www.ehcache.org) - Distributed general-purpose cache.
- [Infinispan](https://infinispan.org) - Highly concurrent key/value datastore used for caching.

### CLI

_Libraries for everything related to the CLI._

- [ASCII Table ![GitHub Repo Stars](https://img.shields.io/github/stars/vdmeer/asciitable) ![GitHub last commit](https://img.shields.io/github/last-commit/vdmeer/asciitable)](https://github.com/vdmeer/asciitable) - Library to draw tables in ASCII.
- [Airline ![GitHub Repo Stars](https://img.shields.io/github/stars/airlift/airline) ![GitHub last commit](https://img.shields.io/github/last-commit/airlift/airline)](https://github.com/airlift/airline) - Annotation-based framework for parsing Git-like command-line arguments.
- [args4j](http://args4j.kohsuke.org) - Small library to parse command-line arguments.
- [Jansi ![GitHub Repo Stars](https://img.shields.io/github/stars/fusesource/jansi) ![GitHub last commit](https://img.shields.io/github/last-commit/fusesource/jansi)](https://github.com/fusesource/jansi) - ANSI escape codes to format console output.
- [Java ASCII Render ![GitHub Repo Stars](https://img.shields.io/github/stars/indvd00m/java-ascii-render) ![GitHub last commit](https://img.shields.io/github/last-commit/indvd00m/java-ascii-render)](https://github.com/indvd00m/java-ascii-render) - Graphical primitives for the console.
- [JCommander](http://jcommander.org) - Command-line argument-parsing framework with custom types and validation via implementing interfaces.
- [jbock ![GitHub Repo Stars](https://img.shields.io/github/stars/jbock-java/jbock) ![GitHub last commit](https://img.shields.io/github/last-commit/jbock-java/jbock)](https://github.com/jbock-java/jbock) - Reflectionless command line parser.
- [Jexer](https://gitlab.com/klamonte/jexer) - Advanced console (and Swing) text user interface (TUI) library, with mouse-draggable windows, built-in terminal window manager, and sixel image support. Looks like [Turbo Vision](https://en.wikipedia.org/wiki/Turbo_Vision).
- [JLine ![GitHub Repo Stars](https://img.shields.io/github/stars/jline/jline3) ![GitHub last commit](https://img.shields.io/github/last-commit/jline/jline3)](https://github.com/jline/jline3) - Includes features from modern shells like completion or history.
- [JOpt Simple](https://jopt-simple.github.io/jopt-simple/) - Fluent parser that uses the POSIX#getopt and GNU#getopt_long syntaxes.
- [picocli](https://picocli.info) - ANSI colors and styles in usage help with annotation-based POSIX/GNU/any syntax, subcommands, strong typing for both options and positional args.
- [Text-IO ![GitHub Repo Stars](https://img.shields.io/github/stars/beryx/text-io) ![GitHub last commit](https://img.shields.io/github/last-commit/beryx/text-io)](https://github.com/beryx/text-io) - Aids the creation of full console-based applications.
- [Lanterna ![GitHub Repo Stars](https://img.shields.io/github/stars/mabe02/lanterna) ![GitHub last commit](https://img.shields.io/github/last-commit/mabe02/lanterna)](https://github.com/mabe02/lanterna) - Easy console text-GUI library, similar to curses. (LGPL-3.0-only)

### Cluster Management

_Frameworks that can dynamically manage applications inside of a cluster._

- [Apache Aurora](https://aurora.apache.org) - Mesos framework for long-running services and cron jobs.
- [Singularity](http://getsingularity.com) - Mesos framework that makes deployment and operations easy. It supports web services, background workers, scheduled jobs, and one-off tasks.

### Code Analysis

_Tools that provide metrics and quality measurements._

- [Checkstyle ![GitHub Repo Stars](https://img.shields.io/github/stars/checkstyle/checkstyle) ![GitHub last commit](https://img.shields.io/github/last-commit/checkstyle/checkstyle)](https://github.com/checkstyle/checkstyle) - Static analysis of coding conventions and standards. (LGPL-2.1-or-later)
- [Error Prone ![GitHub Repo Stars](https://img.shields.io/github/stars/google/error-prone) ![GitHub last commit](https://img.shields.io/github/last-commit/google/error-prone)](https://github.com/google/error-prone) - Catches common programming mistakes as compile-time errors.
- [Error Prone Support ![GitHub Repo Stars](https://img.shields.io/github/stars/PicnicSupermarket/error-prone-support) ![GitHub last commit](https://img.shields.io/github/last-commit/PicnicSupermarket/error-prone-support)](https://github.com/PicnicSupermarket/error-prone-support) - Error Prone extensions: extra bug checkers and a large battery of Refaster templates.
- [Infer ![GitHub Repo Stars](https://img.shields.io/github/stars/facebook/infer) ![GitHub last commit](https://img.shields.io/github/last-commit/facebook/infer)](https://github.com/facebook/infer) - Modern static analysis tool for verifying the correctness of code.
- [jQAssistant](https://jqassistant.org) - Static code analysis with Neo4J-based query language. (GPL-3.0-only)
- [NullAway ![GitHub Repo Stars](https://img.shields.io/github/stars/uber/NullAway) ![GitHub last commit](https://img.shields.io/github/last-commit/uber/NullAway)](https://github.com/uber/NullAway) - Eliminates NullPointerExceptions with low build-time overhead.
- [PMD ![GitHub Repo Stars](https://img.shields.io/github/stars/pmd/pmd) ![GitHub last commit](https://img.shields.io/github/last-commit/pmd/pmd)](https://github.com/pmd/pmd) - Source code analysis for finding bad coding practices.
- [p3c ![GitHub Repo Stars](https://img.shields.io/github/stars/alibaba/p3c) ![GitHub last commit](https://img.shields.io/github/last-commit/alibaba/p3c)](https://github.com/alibaba/p3c) - Provides Alibaba's coding guidelines for PMD, IDEA and Eclipse.
- [RefactorFirst ![GitHub Repo Stars](https://img.shields.io/github/stars/jimbethancourt/RefactorFirst) ![GitHub last commit](https://img.shields.io/github/last-commit/jimbethancourt/RefactorFirst)](https://github.com/jimbethancourt/RefactorFirst) - Identifies and prioritizes God Classes and Highly Coupled classes.
- [SonarJava ![GitHub Repo Stars](https://img.shields.io/github/stars/SonarSource/sonar-java) ![GitHub last commit](https://img.shields.io/github/last-commit/SonarSource/sonar-java)](https://github.com/SonarSource/sonar-java) - Static analyzer for SonarQube & SonarLint. (LGPL-3.0-only)
- [Spoon ![GitHub Repo Stars](https://img.shields.io/github/stars/INRIA/spoon) ![GitHub last commit](https://img.shields.io/github/last-commit/INRIA/spoon)](https://github.com/INRIA/spoon) - Library for analyzing and transforming Java source code.
- [Spotbugs ![GitHub Repo Stars](https://img.shields.io/github/stars/spotbugs/spotbugs) ![GitHub last commit](https://img.shields.io/github/last-commit/spotbugs/spotbugs)](https://github.com/spotbugs/spotbugs) - Static analysis of bytecode to find potential bugs. (LGPL-2.1-only)


### Code Coverage

_Frameworks and tools that enable code coverage metrics collection for test suites._

- [Clover](https://www.atlassian.com/software/clover) - Relies on source-code instrumentation instead of bytecode instrumentation.
- [Cobertura](https://cobertura.github.io/cobertura/) - Relies on offline (or static) bytecode instrumentation and class loading to collect code coverage metrics. (GPL-2.0-only)
- [JaCoCo](https://www.eclemma.org/jacoco/) - Framework that enables collection of code coverage metrics, using both offline and runtime bytecode instrumentation.

### Code Generators

_Tools that generate patterns for repetitive code in order to reduce verbosity and error-proneness._

- [ADT4J ![GitHub Repo Stars](https://img.shields.io/github/stars/sviperll/adt4j) ![GitHub last commit](https://img.shields.io/github/last-commit/sviperll/adt4j)](https://github.com/sviperll/adt4j) - JSR-269 code generator for algebraic data types.
- [Auto ![GitHub Repo Stars](https://img.shields.io/github/stars/google/auto) ![GitHub last commit](https://img.shields.io/github/last-commit/google/auto)](https://github.com/google/auto) - Generates factory, service, and value classes.
- [Avaje Http Server](https://avaje.io/http/) - Generates Lightweight JAX-RS style http servers using Javalin or Helidon (Nima) SE.
- [Bootify ![c]](https://bootify.io) - Browser-based Spring Boot app generation with JPA model and REST API.
- [FreeBuilder ![GitHub Repo Stars](https://img.shields.io/github/stars/inferred/FreeBuilder) ![GitHub last commit](https://img.shields.io/github/last-commit/inferred/FreeBuilder)](https://github.com/inferred/FreeBuilder) - Automatically generates the Builder pattern.
- [Geci ![GitHub Repo Stars](https://img.shields.io/github/stars/verhas/javageci) ![GitHub last commit](https://img.shields.io/github/last-commit/verhas/javageci)](https://github.com/verhas/javageci) - Discovers files that need generated code, updates automatically and writes to the source with a convenient API.
- [Immutables](https://immutables.github.io) - Annotation processors to generate simple, safe and consistent value objects.
- [JavaPoet ![GitHub Repo Stars](https://img.shields.io/github/stars/square/javapoet) ![GitHub last commit](https://img.shields.io/github/last-commit/square/javapoet)](https://github.com/square/javapoet) - API to generate source files.
- [JHipster ![GitHub Repo Stars](https://img.shields.io/github/stars/jhipster/generator-jhipster) ![GitHub last commit](https://img.shields.io/github/last-commit/jhipster/generator-jhipster)](https://github.com/jhipster/generator-jhipster) - Yeoman source code generator for Spring Boot and AngularJS.
- [Joda-Beans](https://www.joda.org/joda-beans/) - Small framework that adds queryable properties to Java, enhancing JavaBeans.
- [JPA Buddy ![c]](https://www.jpa-buddy.com) - Plugin for IntelliJ IDEA. Provides visual tools for generating JPA entities, Spring Data JPA repositories, Liquibase changelogs and SQL scripts. Offers automatic Liquibase/Flyway script generation by comparing model to DB, and reverse engineering JPA entities from DB tables.
- [Lombok](https://projectlombok.org) - Code generator that aims to reduce verbosity.
- [Record-Builder ![GitHub Repo Stars](https://img.shields.io/github/stars/Randgalt/record-builder) ![GitHub last commit](https://img.shields.io/github/last-commit/Randgalt/record-builder)](https://github.com/Randgalt/record-builder) - Companion builder class, withers and templates for Java records.
- [Telosys](https://www.telosys.org/) - Simple and light code generator available as an Eclipse Plugin and also as a CLI.

### Compiler-compiler

_Frameworks that help to create parsers, interpreters or compilers._

- [ANTLR](https://www.antlr.org) - Complex full-featured framework for top-down parsing.
- [JavaCC](https://javacc.github.io/javacc/) - Parser generator that generates top-down parsers. Allows lexical state switching and permits extended BNF specifications.
- [JFlex](https://jflex.de) - Lexical analyzer generator.

### Computer Vision

_Libraries which seek to gain high level information from images and videos._

- [BoofCV](https://boofcv.org) - Library for image processing, camera calibration, tracking, SFM, MVS, 3D vision, QR Code and much more.
- [ImageJ](https://imagej.net/ImageJ) - Medical image processing application with an API.
- [JavaCV ![GitHub Repo Stars](https://img.shields.io/github/stars/bytedeco/javacv) ![GitHub last commit](https://img.shields.io/github/last-commit/bytedeco/javacv)](https://github.com/bytedeco/javacv) - Java interface to OpenCV, FFmpeg, and much more.

### Configuration

_Libraries that provide external configuration._

- [avaje config](https://avaje.io/config/) - Loads yaml and properties files, supports dynamic configuration, plugins, file-watching and config event listeners.
- [centraldogma ![GitHub Repo Stars](https://img.shields.io/github/stars/line/centraldogma) ![GitHub last commit](https://img.shields.io/github/last-commit/line/centraldogma)](https://github.com/line/centraldogma) - Highly-available version-controlled service configuration repository based on Git, ZooKeeper and HTTP/2.
- [cfg4j ![GitHub Repo Stars](https://img.shields.io/github/stars/cfg4j/cfg4j) ![GitHub last commit](https://img.shields.io/github/last-commit/cfg4j/cfg4j)](https://github.com/cfg4j/cfg4j) - Modern configuration library for distributed apps written in Java.
- [config ![GitHub Repo Stars](https://img.shields.io/github/stars/lightbend/config) ![GitHub last commit](https://img.shields.io/github/last-commit/lightbend/config)](https://github.com/lightbend/config) - Configuration library supporting Java properties, JSON or its human optimized superset HOCON.
- [Configurate ![GitHub Repo Stars](https://img.shields.io/github/stars/SpongePowered/Configurate) ![GitHub last commit](https://img.shields.io/github/last-commit/SpongePowered/Configurate)](https://github.com/SpongePowered/Configurate) - Configuration library with support for various configuration formats and transformations.
- [Curator Framework](https://curator.apache.org/) - High-level API for Apache ZooKeeper.
- [dotenv ![GitHub Repo Stars](https://img.shields.io/github/stars/shyiko/dotenv) ![GitHub last commit](https://img.shields.io/github/last-commit/shyiko/dotenv)](https://github.com/shyiko/dotenv) - Twelve-factor configuration library which uses environment-specific files.
- [Externalized Properties ![GitHub Repo Stars](https://img.shields.io/github/stars/joel-jeremy/externalized-properties) ![GitHub last commit](https://img.shields.io/github/last-commit/joel-jeremy/externalized-properties)](https://github.com/joel-jeremy/externalized-properties) - Lightweight yet powerful configuration library which supports resolution of properties from external sources and an extensible post-processing/conversion mechanism.
- [ini4j](http://ini4j.sourceforge.net) - Provides an API for handling Windows' INI files.
- [KAConf ![GitHub Repo Stars](https://img.shields.io/github/stars/mariomac/kaconf) ![GitHub last commit](https://img.shields.io/github/last-commit/mariomac/kaconf)](https://github.com/mariomac/kaconf) - Annotation-based configuration system for Java and Kotlin.
- [microconfig](https://microconfig.io) - Configuration system designed for microservices which helps to separate configuration from code. The configuration for different services can have common and specific parts and can be dynamically distributed.
- [owner ![GitHub Repo Stars](https://img.shields.io/github/stars/lviggiano/owner) ![GitHub last commit](https://img.shields.io/github/last-commit/lviggiano/owner)](https://github.com/lviggiano/owner) - Reduces boilerplate of properties.

### Constraint Satisfaction Problem Solver

_Libraries that help with implementing optimization and satisfiability problems._

- [Choco](https://choco-solver.org) - Off-the-shelf constraint satisfaction problem solver that uses constraint programming techniques.
- [JaCoP ![GitHub Repo Stars](https://img.shields.io/github/stars/radsz/jacop) ![GitHub last commit](https://img.shields.io/github/last-commit/radsz/jacop)](https://github.com/radsz/jacop) - Includes an interface for the FlatZinc language, enabling it to execute MiniZinc models. (AGPL-3.0)
- [OptaPlanner](https://www.optaplanner.org) - Business planning and resource scheduling optimization solver.
- [Timefold ![GitHub Repo Stars](https://img.shields.io/github/stars/TimefoldAI/timefold-solver) ![GitHub last commit](https://img.shields.io/github/last-commit/TimefoldAI/timefold-solver)](https://github.com/TimefoldAI/timefold-solver) - Flexible solver with Spring/Quarkus support and quickstarts for the Vehicle Routing Problem, Maintenance Scheduling, Employee Shift Scheduling and much more.

### CSV

_Frameworks and libraries that simplify reading/writing CSV data._

- [FastCSV ![GitHub Repo Stars](https://img.shields.io/github/stars/osiegmar/FastCSV) ![GitHub last commit](https://img.shields.io/github/last-commit/osiegmar/FastCSV)](https://github.com/osiegmar/FastCSV) - Performance-optimized, dependency-free and RFC 4180 compliant.
- [jackson-dataformat-csv ![GitHub Repo Stars](https://img.shields.io/github/stars/FasterXML/jackson-dataformat-csv) ![GitHub last commit](https://img.shields.io/github/last-commit/FasterXML/jackson-dataformat-csv)](https://github.com/FasterXML/jackson-dataformat-csv) - Jackson extension for reading and writing CSV.
- [opencsv](http://opencsv.sourceforge.net) - Simple CSV parser.
- [Super CSV](https://super-csv.github.io/super-csv/) - Powerful CSV parser with support for Dozer, Joda-Time and Java 8.
- [uniVocity-parsers ![GitHub Repo Stars](https://img.shields.io/github/stars/uniVocity/univocity-parsers) ![GitHub last commit](https://img.shields.io/github/last-commit/uniVocity/univocity-parsers)](https://github.com/uniVocity/univocity-parsers) - One of the fastest and most feature-complete parsers. Also comes with parsers for TSV and fixed-width records.

### Data Structures

_Efficient and specific data structures._

- [Apache Avro](https://avro.apache.org) - Data interchange format with dynamic typing, untagged data, and absence of manually assigned IDs.
- [Apache Orc](https://orc.apache.org) - Fast and efficient columnar storage format for Hadoop-based workloads.
- [Apache Parquet](https://parquet.apache.org) - Columnar storage format based on assembly algorithms from Google's paper on Dremel.
- [Apache Thrift](https://thrift.apache.org) - Data interchange format that originated at Facebook.
- [Big Queue ![GitHub Repo Stars](https://img.shields.io/github/stars/bulldog2011/bigqueue) ![GitHub last commit](https://img.shields.io/github/last-commit/bulldog2011/bigqueue)](https://github.com/bulldog2011/bigqueue) - Fast and persistent queue based on memory-mapped files.
- [HyperMinHash-java ![GitHub Repo Stars](https://img.shields.io/github/stars/LiveRamp/HyperMinHash-java) ![GitHub last commit](https://img.shields.io/github/last-commit/LiveRamp/HyperMinHash-java)](https://github.com/LiveRamp/HyperMinHash-java) - Probabilistic data structure for computing union, intersection, and set cardinality in loglog space.
- [Persistent Collection ![GitHub Repo Stars](https://img.shields.io/github/stars/hrldcpr/pcollections) ![GitHub last commit](https://img.shields.io/github/last-commit/hrldcpr/pcollections)](https://github.com/hrldcpr/pcollections) - Persistent and immutable analogue of the Java Collections Framework.
- [Protobuf ![GitHub Repo Stars](https://img.shields.io/github/stars/protocolbuffers/protobuf) ![GitHub last commit](https://img.shields.io/github/last-commit/protocolbuffers/protobuf)](https://github.com/protocolbuffers/protobuf) - Google's data interchange format.
- [RoaringBitmap ![GitHub Repo Stars](https://img.shields.io/github/stars/RoaringBitmap/RoaringBitmap) ![GitHub last commit](https://img.shields.io/github/last-commit/RoaringBitmap/RoaringBitmap)](https://github.com/RoaringBitmap/RoaringBitmap) - Fast and efficient compressed bitmap.
- [SBE ![GitHub Repo Stars](https://img.shields.io/github/stars/real-logic/simple-binary-encoding) ![GitHub last commit](https://img.shields.io/github/last-commit/real-logic/simple-binary-encoding)](https://github.com/real-logic/simple-binary-encoding) - Simple Binary Encoding, one of the fastest message formats around.
- [Tape ![GitHub Repo Stars](https://img.shields.io/github/stars/square/tape) ![GitHub last commit](https://img.shields.io/github/last-commit/square/tape)](https://github.com/square/tape) - Lightning-fast, transactional, file-based FIFO.
- [Wire ![GitHub Repo Stars](https://img.shields.io/github/stars/square/wire) ![GitHub last commit](https://img.shields.io/github/last-commit/square/wire)](https://github.com/square/wire) - Clean, lightweight protocol buffers.

### Database

_Everything that simplifies interactions with the database._

- [Apache Calcite](https://calcite.apache.org) - Dynamic data management framework. It contains many of the pieces that comprise a typical database management system.
- [Apache Drill](https://drill.apache.org) - Distributed, schema on-the-fly, ANSI SQL query engine for Big Data exploration.
- [Apache Phoenix](https://phoenix.apache.org) - High-performance relational database layer over HBase for low-latency applications.
- [ArangoDB ![GitHub Repo Stars](https://img.shields.io/github/stars/arangodb/arangodb-java-driver) ![GitHub last commit](https://img.shields.io/github/last-commit/arangodb/arangodb-java-driver)](https://github.com/arangodb/arangodb-java-driver) - ArangoDB Java driver.
- [Chronicle Map ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenHFT/Chronicle-Map) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenHFT/Chronicle-Map)](https://github.com/OpenHFT/Chronicle-Map) - Efficient, in-memory (opt. persisted to disk), off-heap key-value store.
- [Debezium](https://debezium.io/) - Low latency data streaming platform for change data capture.
- [druid](https://druid.apache.org) - High-performance, column-oriented, distributed data store.
- [eXist ![GitHub Repo Stars](https://img.shields.io/github/stars/eXist-db/exist) ![GitHub last commit](https://img.shields.io/github/last-commit/eXist-db/exist)](https://github.com/eXist-db/exist) - NoSQL document database and application platform. (LGPL-2.1-only)
- [FlexyPool ![GitHub Repo Stars](https://img.shields.io/github/stars/vladmihalcea/flexy-pool) ![GitHub last commit](https://img.shields.io/github/last-commit/vladmihalcea/flexy-pool)](https://github.com/vladmihalcea/flexy-pool) - Brings metrics and failover strategies to the most common connection pooling solutions.
- [Flyway](https://flywaydb.org) - Simple database migration tool.
- [H2](https://h2database.com) - Small SQL database notable for its in-memory functionality.
- [HikariCP ![GitHub Repo Stars](https://img.shields.io/github/stars/brettwooldridge/HikariCP) ![GitHub last commit](https://img.shields.io/github/last-commit/brettwooldridge/HikariCP)](https://github.com/brettwooldridge/HikariCP) - High-performance JDBC connection pool.
- [HSQLDB](https://hsqldb.org/) - HyperSQL 100% Java database.
- [JDBI](http://jdbi.org) - Convenient abstraction of JDBC.
- [Jedis ![GitHub Repo Stars](https://img.shields.io/github/stars/xetorthio/jedis) ![GitHub last commit](https://img.shields.io/github/last-commit/xetorthio/jedis)](https://github.com/xetorthio/jedis) - Small client for interaction with Redis, with methods for commands.
- [Jest ![GitHub Repo Stars](https://img.shields.io/github/stars/searchbox-io/Jest) ![GitHub last commit](https://img.shields.io/github/last-commit/searchbox-io/Jest)](https://github.com/searchbox-io/Jest) - Client for the Elasticsearch REST API.
- [jetcd ![GitHub Repo Stars](https://img.shields.io/github/stars/justinsb/jetcd) ![GitHub last commit](https://img.shields.io/github/last-commit/justinsb/jetcd)](https://github.com/justinsb/jetcd) - Client library for etcd.
- [Jinq ![GitHub Repo Stars](https://img.shields.io/github/stars/my2iu/Jinq) ![GitHub last commit](https://img.shields.io/github/last-commit/my2iu/Jinq)](https://github.com/my2iu/Jinq) - Typesafe database queries via symbolic execution of Java 8 Lambdas (on top of JPA or jOOQ).
- [jOOQ](https://www.jooq.org) - Generates typesafe code based on SQL schema.
- [Leaf ![GitHub Repo Stars](https://img.shields.io/github/stars/Meituan-Dianping/Leaf) ![GitHub last commit](https://img.shields.io/github/last-commit/Meituan-Dianping/Leaf)](https://github.com/Meituan-Dianping/Leaf) - Distributed ID generate service.
- [Lettuce](https://lettuce.io/) - Lettuce is a scalable Redis client for building non-blocking Reactive applications.
- [Liquibase](http://www.liquibase.org) - Database-independent library for tracking, managing and applying database schema changes.
- [MapDB](http://www.mapdb.org) - Embedded database engine that provides concurrent collections backed on disk or in off-heap memory.
- [MariaDB4j ![GitHub Repo Stars](https://img.shields.io/github/stars/vorburger/MariaDB4j) ![GitHub last commit](https://img.shields.io/github/last-commit/vorburger/MariaDB4j)](https://github.com/vorburger/MariaDB4j) - Launcher for MariaDB that requires no installation or external dependencies.
- [Modality ![GitHub Repo Stars](https://img.shields.io/github/stars/arkanovicz/modality) ![GitHub last commit](https://img.shields.io/github/last-commit/arkanovicz/modality)](https://github.com/arkanovicz/modality) - Lightweight ORM with database reverse engineering features.
- [OpenDJ ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenIdentityPlatform/OpenDJ) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenIdentityPlatform/OpenDJ)](https://github.com/OpenIdentityPlatform/OpenDJ) - LDAPv3 compliant directory service, developed for the Java platform, providing a high performance, highly available, and secure store for the identities.
- [Querydsl](http://www.querydsl.com) - Typesafe unified queries.
- [QueryStream ![GitHub Repo Stars](https://img.shields.io/github/stars/querystream/querystream) ![GitHub last commit](https://img.shields.io/github/last-commit/querystream/querystream)](https://github.com/querystream/querystream) - Build JPA Criteria queries using a Stream-like API.
- [QuestDB ![GitHub Repo Stars](https://img.shields.io/github/stars/questdb/questdb) ![GitHub last commit](https://img.shields.io/github/last-commit/questdb/questdb)](https://github.com/questdb/questdb) - High-performance SQL database for time series. Supports InfluxDB line protocol, PostgreSQL wire protocol, and REST.
- [Realm ![GitHub Repo Stars](https://img.shields.io/github/stars/realm/realm-java) ![GitHub last commit](https://img.shields.io/github/last-commit/realm/realm-java)](https://github.com/realm/realm-java) - Mobile database to run directly inside phones, tablets or wearables.
- [Redisson ![GitHub Repo Stars](https://img.shields.io/github/stars/redisson/redisson) ![GitHub last commit](https://img.shields.io/github/last-commit/redisson/redisson)](https://github.com/redisson/redisson) - Allows for distributed and scalable data structures on top of a Redis server.
- [requery ![GitHub Repo Stars](https://img.shields.io/github/stars/requery/requery) ![GitHub last commit](https://img.shields.io/github/last-commit/requery/requery)](https://github.com/requery/requery) - Modern, lightweight but powerful object mapping and SQL generator. Easily map to or create databases, or perform queries and updates from any Java-using platform.
- [Speedment ![GitHub Repo Stars](https://img.shields.io/github/stars/speedment/speedment) ![GitHub last commit](https://img.shields.io/github/last-commit/speedment/speedment)](https://github.com/speedment/speedment) - Database access library that utilizes Java 8's Stream API for querying.
- [Spring Data JPA MongoDB Expressions ![GitHub Repo Stars](https://img.shields.io/github/stars/mhewedy/spring-data-jpa-mongodb-expressions) ![GitHub last commit](https://img.shields.io/github/last-commit/mhewedy/spring-data-jpa-mongodb-expressions)](https://github.com/mhewedy/spring-data-jpa-mongodb-expressions) - Allows you to use MongoDB query language to query your relational database.
- [Trino](https://trino.io) - Distributed SQL query engine for big data.
- [Vibur DBCP](https://www.vibur.org) - JDBC connection pool library with advanced performance monitoring capabilities.
- [Xodus ![GitHub Repo Stars](https://img.shields.io/github/stars/JetBrains/xodus) ![GitHub last commit](https://img.shields.io/github/last-commit/JetBrains/xodus)](https://github.com/JetBrains/xodus) - Highly concurrent transactional schema-less and ACID-compliant embedded database.
- [CosId ![GitHub Repo Stars](https://img.shields.io/github/stars/Ahoo-Wang/CosId) ![GitHub last commit](https://img.shields.io/github/last-commit/Ahoo-Wang/CosId)](https://github.com/Ahoo-Wang/CosId) - Universal, flexible, high-performance distributed ID generator.

### Date and Time

_Libraries related to handling date and time._

- [iCal4j ![GitHub Repo Stars](https://img.shields.io/github/stars/ical4j/ical4j) ![GitHub last commit](https://img.shields.io/github/last-commit/ical4j/ical4j)](https://github.com/ical4j/ical4j) - Parse and build iCalendar [RFC 5545](https://tools.ietf.org/html/rfc5545) data models.
- [Jollyday ![GitHub Repo Stars](https://img.shields.io/github/stars/svendiedrichsen/jollyday) ![GitHub last commit](https://img.shields.io/github/last-commit/svendiedrichsen/jollyday)](https://github.com/svendiedrichsen/jollyday) - Determines the holidays for a given year, country/name and eventually state/region.
- [ThreeTen-Extra ![GitHub Repo Stars](https://img.shields.io/github/stars/ThreeTen/threeten-extra) ![GitHub last commit](https://img.shields.io/github/last-commit/ThreeTen/threeten-extra)](https://github.com/ThreeTen/threeten-extra) - Additional date-time classes that complement those in JDK 8.
- [Time4J ![GitHub Repo Stars](https://img.shields.io/github/stars/MenoData/Time4J) ![GitHub last commit](https://img.shields.io/github/last-commit/MenoData/Time4J)](https://github.com/MenoData/Time4J) - Advanced date and time library. (LGPL-2.1-only)

### Dependency Injection

_Libraries that help to realize the [Inversion of Control](https://en.wikipedia.org/wiki/Inversion_of_control) paradigm._

- [Apache DeltaSpike](https://deltaspike.apache.org) - CDI extension framework.
- [Avaje Inject](https://avaje.io/inject/) - Microservice-focused compile-time injection framework without reflection.
- [Dagger](https://dagger.dev/) - Compile-time injection framework without reflection.
- [Feather ![GitHub Repo Stars](https://img.shields.io/github/stars/zsoltherpai/feather) ![GitHub last commit](https://img.shields.io/github/last-commit/zsoltherpai/feather)](https://github.com/zsoltherpai/feather) - Ultra-lightweight, JSR-330-compliant dependency injection library.
- [Governator ![GitHub Repo Stars](https://img.shields.io/github/stars/Netflix/governator) ![GitHub last commit](https://img.shields.io/github/last-commit/Netflix/governator)](https://github.com/Netflix/governator) - Extensions and utilities that enhance Google Guice.
- [Guice ![GitHub Repo Stars](https://img.shields.io/github/stars/google/guice) ![GitHub last commit](https://img.shields.io/github/last-commit/google/guice)](https://github.com/google/guice) - Lightweight and opinionated framework that completes Dagger.
- [HK2](https://javaee.github.io/hk2/) - Lightweight and dynamic dependency injection framework.
- [JayWire ![GitHub Repo Stars](https://img.shields.io/github/stars/vanillasource/jaywire) ![GitHub last commit](https://img.shields.io/github/last-commit/vanillasource/jaywire)](https://github.com/vanillasource/jaywire) - Lightweight dependency injection framework. (LGPL-3.0-only)

### Development

_Augmentation of the development process at a fundamental level._

- [AspectJ](https://www.eclipse.org/aspectj/) - Seamless aspect-oriented programming extension.
- [DCEVM](https://dcevm.github.io) - JVM modification that allows unlimited redefinition of loaded classes at runtime. (GPL-2.0-only)
- [Faux Pas ![GitHub Repo Stars](https://img.shields.io/github/stars/zalando/faux-pas) ![GitHub last commit](https://img.shields.io/github/last-commit/zalando/faux-pas)](https://github.com/zalando/faux-pas) - Library that simplifies error handling by circumventing the issue that none of the functional interfaces in the Java Runtime is allowed by default to throw checked exceptions.
- [HotswapAgent ![GitHub Repo Stars](https://img.shields.io/github/stars/HotswapProjects/HotswapAgent) ![GitHub last commit](https://img.shields.io/github/last-commit/HotswapProjects/HotswapAgent)](https://github.com/HotswapProjects/HotswapAgent) - Unlimited runtime class and resource redefinition. (GPL-2.0-only)
- [JavaParser ![GitHub Repo Stars](https://img.shields.io/github/stars/javaparser/javaparser) ![GitHub last commit](https://img.shields.io/github/last-commit/javaparser/javaparser)](https://github.com/javaparser/javaparser) - Parse, modify and generate Java code.
- [JavaSymbolSolver ![GitHub Repo Stars](https://img.shields.io/github/stars/javaparser/javasymbolsolver) ![GitHub last commit](https://img.shields.io/github/last-commit/javaparser/javasymbolsolver)](https://github.com/javaparser/javasymbolsolver) - Symbol solver.
- [Manifold ![GitHub Repo Stars](https://img.shields.io/github/stars/manifold-systems/manifold) ![GitHub last commit](https://img.shields.io/github/last-commit/manifold-systems/manifold)](https://github.com/manifold-systems/manifold) - Re-energizes Java with powerful features like type-safe metaprogramming, structural typing and extension methods.
- [NoException](https://noexception.machinezoo.com) - Allows checked exceptions in functional interfaces and converts exceptions to Optional return.
- [SneakyThrow ![GitHub Repo Stars](https://img.shields.io/github/stars/rainerhahnekamp/sneakythrow) ![GitHub last commit](https://img.shields.io/github/last-commit/rainerhahnekamp/sneakythrow)](https://github.com/rainerhahnekamp/sneakythrow) - Ignores checked exceptions without bytecode manipulation. Can also be used inside Java 8 stream operations.
- [Tail](https://nrktkt.github.io/tail/) - Enable infinite recursion using tail call optimization.

### Distributed Applications

_Libraries and frameworks for writing distributed and fault-tolerant applications._

- [Apache Geode](https://geode.apache.org) - In-memory data management system that provides reliable asynchronous event notifications and guaranteed message delivery.
- [Apache Storm](https://storm.apache.org) - Realtime computation system.
- [Apache ZooKeeper](https://zookeeper.apache.org) - Coordination service with distributed configuration, synchronization, and naming registry for large distributed systems.
- [Atomix](https://atomix.io) - Fault-tolerant distributed coordination framework.
- [Axon](https://axoniq.io) - Framework for creating CQRS applications.
- [Dropwizard Circuit Breaker ![GitHub Repo Stars](https://img.shields.io/github/stars/mtakaki/dropwizard-circuitbreaker) ![GitHub last commit](https://img.shields.io/github/last-commit/mtakaki/dropwizard-circuitbreaker)](https://github.com/mtakaki/dropwizard-circuitbreaker) - Circuit breaker design pattern for Dropwizard. (GPL-2.0-only)
- [Failsafe ![GitHub Repo Stars](https://img.shields.io/github/stars/jhalterman/failsafe) ![GitHub last commit](https://img.shields.io/github/last-commit/jhalterman/failsafe)](https://github.com/jhalterman/failsafe) - Simple failure handling with retries and circuit breakers.
- [Hazelcast ![GitHub Repo Stars](https://img.shields.io/github/stars/hazelcast/hazelcast) ![GitHub last commit](https://img.shields.io/github/last-commit/hazelcast/hazelcast)](https://github.com/hazelcast/hazelcast) - Highly scalable in-memory datagrid with a free open-source version.
- [JGroups](http://www.jgroups.org) - Toolkit for reliable messaging and cluster creation.
- [Quasar](http://docs.paralleluniverse.co/quasar/) - Lightweight threads and actors for the JVM.
- [resilience4j ![GitHub Repo Stars](https://img.shields.io/github/stars/resilience4j/resilience4j) ![GitHub last commit](https://img.shields.io/github/last-commit/resilience4j/resilience4j)](https://github.com/resilience4j/resilience4j) - Functional fault tolerance library.
- [OpenIG ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenIdentityPlatform/OpenIG) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenIdentityPlatform/OpenIG)](https://github.com/OpenIdentityPlatform/OpenIG) - High-performance reverse proxy server with specialized session management and credential replay functionality.
- [ScaleCube Services ![GitHub Repo Stars](https://img.shields.io/github/stars/scalecube/scalecube-services) ![GitHub last commit](https://img.shields.io/github/last-commit/scalecube/scalecube-services)](https://github.com/scalecube/scalecube-services) - Embeddable Cluster-Membership library based on SWIM and gossip protocol.
- [Zuul ![GitHub Repo Stars](https://img.shields.io/github/stars/Netflix/zuul) ![GitHub last commit](https://img.shields.io/github/last-commit/Netflix/zuul)](https://github.com/Netflix/zuul) - Gateway service that provides dynamic routing, monitoring, resiliency, security, and more.

### Distributed Transactions

_Distributed transactions provide a mechanism for ensuring consistency of data updates in the presence of concurrent access and partial failures._

- [Atomikos](https://www.atomikos.com) - Provides transactions for REST, SOA and microservices with support for JTA and XA.
- [Bitronix ![GitHub Repo Stars](https://img.shields.io/github/stars/bitronix/btm) ![GitHub last commit](https://img.shields.io/github/last-commit/bitronix/btm)](https://github.com/bitronix/btm) - Simple but complete implementation of the JTA 1.1 API.
- [Narayana](https://narayana.io) - Provides support for traditional ACID and compensation transactions, also complies with JTA, JTS and other standards. (LGPL-2.1-only)
- [Seata ![GitHub Repo Stars](https://img.shields.io/github/stars/seata/seata) ![GitHub last commit](https://img.shields.io/github/last-commit/seata/seata)](https://github.com/seata/seata) - Delivers high performance and easy to use distributed transaction services under a microservices architecture.

### Distribution

_Tools that handle the distribution of applications in native formats._

- [Artipie ![GitHub Repo Stars](https://img.shields.io/github/stars/artipie/artipie) ![GitHub last commit](https://img.shields.io/github/last-commit/artipie/artipie)](https://github.com/artipie/artipie) - Binary artifact management toolkit which hosts them on the file system or S3.
- [Boxfuse ![c]](https://boxfuse.com) - Deployment of JVM applications to AWS using the principles of immutable infrastructure.
- [Capsule ![GitHub Repo Stars](https://img.shields.io/github/stars/puniverse/capsule) ![GitHub last commit](https://img.shields.io/github/last-commit/puniverse/capsule)](https://github.com/puniverse/capsule) - Simple and powerful packaging and deployment. A fat JAR on steroids, or a "Docker for Java" that supports JVM-optimized containers.
- [Central Repository](https://search.maven.org) - Largest binary component repository available as a free service to the open-source community. Default used by Apache Maven, and available in all other build tools.
- [Cloudsmith ![c]](https://cloudsmith.io) - Fully managed package management SaaS with support for Maven/Gradle/SBT with a free tier.
- [Getdown ![GitHub Repo Stars](https://img.shields.io/github/stars/threerings/getdown) ![GitHub last commit](https://img.shields.io/github/last-commit/threerings/getdown)](https://github.com/threerings/getdown) - A system for deploying Java applications to end-user computers and keeping them up to date. Developed as an alternative to Java Web Start.
- [IzPack](http://izpack.org) - Setup authoring tool for cross-platform deployments.
- [JavaPackager ![GitHub Repo Stars](https://img.shields.io/github/stars/fvarrui/JavaPackager) ![GitHub last commit](https://img.shields.io/github/last-commit/fvarrui/JavaPackager)](https://github.com/fvarrui/JavaPackager) - Maven and Gradle plugin which provides an easy way to package Java applications in native Windows, Mac OS X or GNU/Linux executables, and generate installers for them.
- [jDeploy](https://www.jdeploy.com) - Deploy desktop apps as native Mac, Windows or Linux bundles.
- [jlink.online ![GitHub Repo Stars](https://img.shields.io/github/stars/AdoptOpenJDK/jlink.online) ![GitHub last commit](https://img.shields.io/github/last-commit/AdoptOpenJDK/jlink.online)](https://github.com/AdoptOpenJDK/jlink.online) - Builds optimized runtimes over HTTP.
- [Nexus ![c]](https://www.sonatype.com) - Binary management with proxy and caching capabilities.
- [packr ![GitHub Repo Stars](https://img.shields.io/github/stars/libgdx/packr) ![GitHub last commit](https://img.shields.io/github/last-commit/libgdx/packr)](https://github.com/libgdx/packr) - Packs JARs, assets and the JVM for native distribution on Windows, Linux and macOS.
- [really-executable-jars-maven-plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/brianm/really-executable-jars-maven-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/brianm/really-executable-jars-maven-plugin)](https://github.com/brianm/really-executable-jars-maven-plugin) - Maven plugin for making self-executing JARs.

### Document Processing

_Libraries that assist with processing office document formats._

- [Apache POI](https://poi.apache.org) - Supports OOXML (XLSX, DOCX, PPTX) as well as OLE2 (XLS, DOC or PPT).
- [documents4j](https://documents4j.com/#/) - API for document format conversion using third-party converters such as MS Word.
- [docx4j](https://www.docx4java.org/trac/docx4j) - Create and manipulate Microsoft Open XML files.
- [fastexcel ![GitHub Repo Stars](https://img.shields.io/github/stars/dhatim/fastexcel) ![GitHub last commit](https://img.shields.io/github/last-commit/dhatim/fastexcel)](https://github.com/dhatim/fastexcel) - High performance library to read and write large Excel (XLSX) worksheets.
- [zerocell ![GitHub Repo Stars](https://img.shields.io/github/stars/creditdatamw/zerocell) ![GitHub last commit](https://img.shields.io/github/last-commit/creditdatamw/zerocell)](https://github.com/creditdatamw/zerocell) - Annotation-based API for reading data from Excel sheets into POJOs with focus on reduced overhead.

### Financial

_Libraries related to the financial domain._

- [Cassandre ![GitHub Repo Stars](https://img.shields.io/github/stars/cassandre-tech/cassandre-trading-bot) ![GitHub last commit](https://img.shields.io/github/last-commit/cassandre-tech/cassandre-trading-bot)](https://github.com/cassandre-tech/cassandre-trading-bot) - Trading bot framework.
- [Parity ![GitHub Repo Stars](https://img.shields.io/github/stars/paritytrading/parity) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytrading/parity)](https://github.com/paritytrading/parity) - Platform for trading venues.
- [Philadelphia ![GitHub Repo Stars](https://img.shields.io/github/stars/paritytrading/philadelphia) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytrading/philadelphia)](https://github.com/paritytrading/philadelphia) - Low-latency financial information exchange.
- [Square ![GitHub Repo Stars](https://img.shields.io/github/stars/square/connect-java-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/square/connect-java-sdk)](https://github.com/square/connect-java-sdk) - Integration with the Square API.
- [Stripe ![GitHub Repo Stars](https://img.shields.io/github/stars/stripe/stripe-java) ![GitHub last commit](https://img.shields.io/github/last-commit/stripe/stripe-java)](https://github.com/stripe/stripe-java) - Integration with the Stripe API.
- [ta4j ![GitHub Repo Stars](https://img.shields.io/github/stars/ta4j/ta4j) ![GitHub last commit](https://img.shields.io/github/last-commit/ta4j/ta4j)](https://github.com/ta4j/ta4j) - Library for technical analysis.

### Formal Verification

_Formal-methods tools: proof assistants, model checking, symbolic execution, etc._

- [CATG ![GitHub Repo Stars](https://img.shields.io/github/stars/ksen007/janala2) ![GitHub last commit](https://img.shields.io/github/last-commit/ksen007/janala2)](https://github.com/ksen007/janala2) - Concolic unit testing engine. Automatically generates unit tests using formal methods.
- [Checker Framework](https://checkerframework.org) - Pluggable type systems. Includes nullness types, physical units, immutability types and more. (GPL-2.0-only WITH Classpath-exception-2.0)
- [Daikon](https://plse.cs.washington.edu/daikon/) - Detects likely program invariants and generates JML specs based on those invariants.
- [Java Path Finder (JPF) ![GitHub Repo Stars](https://img.shields.io/github/stars/javapathfinder/jpf-core) ![GitHub last commit](https://img.shields.io/github/last-commit/javapathfinder/jpf-core)](https://github.com/javapathfinder/jpf-core) - JVM formal verification tool containing a model checker and more. Created by NASA.
- [JMLOK 2.0](https://massoni.computacao.ufcg.edu.br/home/jmlok) - Detects inconsistencies between code and JML specification through feedback-directed random tests generation, and suggests a likely cause for each nonconformance detected. (GPL-3.0-only)
- [KeY](https://www.key-project.org) - Formal software development tool that aims to integrate design, implementation, formal specification, and formal verification of object-oriented software as seamlessly as possible. Uses JML for specification and symbolic execution for verification. (GPL-2.0-or-later)
- [OpenJML](http://www.openjml.org) - Translates JML specifications into SMT-LIB format and passes the proof problems implied by the program to backend solvers. (GPL-2.0-only)

### Functional Programming

_Libraries that facilitate functional programming._

- [Cyclops ![GitHub Repo Stars](https://img.shields.io/github/stars/aol/cyclops) ![GitHub last commit](https://img.shields.io/github/last-commit/aol/cyclops)](https://github.com/aol/cyclops) - Monad and stream utilities, comprehensions, pattern matching, functional extensions for all JDK collections, future streams, trampolines and much more.
- [derive4j ![GitHub Repo Stars](https://img.shields.io/github/stars/derive4j/derive4j) ![GitHub last commit](https://img.shields.io/github/last-commit/derive4j/derive4j)](https://github.com/derive4j/derive4j) - Java 8 annotation processor and framework for deriving algebraic data types constructors, pattern-matching and morphisms. (GPL-3.0-only)
- [Fugue](https://bitbucket.org/atlassian/fugue) - Functional extensions to Guava.
- [Functional Java](http://www.functionaljava.org) - Implements numerous basic and advanced programming abstractions that assist composition-oriented development.
- [jOOλ ![GitHub Repo Stars](https://img.shields.io/github/stars/jOOQ/jOOL) ![GitHub last commit](https://img.shields.io/github/last-commit/jOOQ/jOOL)](https://github.com/jOOQ/jOOL) - Extension to Java 8 that aims to fix gaps in lambda by providing numerous missing types and a rich set of sequential Stream API additions.
- [protonpack ![GitHub Repo Stars](https://img.shields.io/github/stars/poetix/protonpack) ![GitHub last commit](https://img.shields.io/github/last-commit/poetix/protonpack)](https://github.com/poetix/protonpack) - Collection of stream utilities.
- [StreamEx ![GitHub Repo Stars](https://img.shields.io/github/stars/amaembo/streamex) ![GitHub last commit](https://img.shields.io/github/last-commit/amaembo/streamex)](https://github.com/amaembo/streamex) - Enhances Java 8 Streams.
- [Vavr](https://www.vavr.io) - Functional component library that provides persistent data types and functional control structures.

### Game Development

_Frameworks that support the development of games._

- [FXGL](https://almasb.github.io/FXGL/) - JavaFX Game Development Framework.
- [JBox2D](http://www.jbox2d.org/) - Port of the renowned C++ 2D physics engine.
- [jMonkeyEngine](https://jmonkeyengine.org) - Game engine for modern 3D development.
- [libGDX](https://libgdx.com) - All-round cross-platform, high-level framework.
- [Litiengine](https://litiengine.com/) - AWT-based, lightweight 2D game engine.
- [LWJGL](https://www.lwjgl.org) - Robust framework that abstracts libraries like OpenGL/CL/AL.
- [Mini2Dx](https://mini2dx.org) - Beginner-friendly, master-ready framework for rapidly prototyping and building 2D games.
- [Void2D ![GitHub Repo Stars](https://img.shields.io/github/stars/xzripper/Void2D) ![GitHub last commit](https://img.shields.io/github/last-commit/xzripper/Void2D)](https://github.com/xzripper/Void2D) - High-level 2D game engine with built-in physics based on Swing.

### Geospatial

_Libraries for working with geospatial data and algorithms._

- [Apache SIS](https://sis.apache.org) - Library for developing geospatial applications.
- [Geo ![GitHub Repo Stars](https://img.shields.io/github/stars/davidmoten/geo) ![GitHub last commit](https://img.shields.io/github/last-commit/davidmoten/geo)](https://github.com/davidmoten/geo) - GeoHash utilities in Java.
- [GeoTools](https://geotools.org) - Library that provides tools for geospatial data. (LGPL-2.1-only)
- [GraphHopper ![GitHub Repo Stars](https://img.shields.io/github/stars/graphhopper/graphhopper) ![GitHub last commit](https://img.shields.io/github/last-commit/graphhopper/graphhopper)](https://github.com/graphhopper/graphhopper) - Road-routing engine. Used as a Java library or standalone web service.
- [H2GIS](http://www.h2gis.org) - Spatial extension of the H2 database. (LGPL-3.0-only)
- [Jgeohash](https://astrapi69.github.io/jgeohash/) - Library for using the GeoHash algorithm.
- [Mapsforge ![GitHub Repo Stars](https://img.shields.io/github/stars/mapsforge/mapsforge) ![GitHub last commit](https://img.shields.io/github/last-commit/mapsforge/mapsforge)](https://github.com/mapsforge/mapsforge) - Map rendering based on OpenStreetMap data. (LGPL-3.0-only)
- [Spatial4j ![GitHub Repo Stars](https://img.shields.io/github/stars/locationtech/spatial4j) ![GitHub last commit](https://img.shields.io/github/last-commit/locationtech/spatial4j)](https://github.com/locationtech/spatial4j) - General-purpose spatial/geospatial library.

### GUI

_Libraries to create modern graphical user interfaces._

- [JavaFX](https://wiki.openjdk.java.net/display/OpenJFX/Main) - Successor of Swing.
- [Scene Builder](https://gluonhq.com/products/scene-builder/) - Visual layout tool for JavaFX applications.
- [SWT](https://www.eclipse.org/swt/) - Graphical widget toolkit.

### High Performance

_Everything about high-performance computation, from collections to specific libraries._

- [Agrona ![GitHub Repo Stars](https://img.shields.io/github/stars/real-logic/Agrona) ![GitHub last commit](https://img.shields.io/github/last-commit/real-logic/Agrona)](https://github.com/real-logic/Agrona) - Data structures and utility methods that are common in high-performance applications.
- [Disruptor](https://lmax-exchange.github.io/disruptor/) - Inter-thread messaging library.
- [Eclipse Collections ![GitHub Repo Stars](https://img.shields.io/github/stars/eclipse/eclipse-collections) ![GitHub last commit](https://img.shields.io/github/last-commit/eclipse/eclipse-collections)](https://github.com/eclipse/eclipse-collections) - Collections framework inspired by Smalltalk.
- [fastutil](http://fastutil.di.unimi.it) - Fast and compact type-specific collections.
- [HPPC](https://labs.carrotsearch.com/hppc.html) - Primitive collections.
- [JCTools ![GitHub Repo Stars](https://img.shields.io/github/stars/JCTools/JCTools) ![GitHub last commit](https://img.shields.io/github/last-commit/JCTools/JCTools)](https://github.com/JCTools/JCTools) - Concurrency tools currently missing from the JDK.
- [Koloboke ![GitHub Repo Stars](https://img.shields.io/github/stars/leventov/Koloboke) ![GitHub last commit](https://img.shields.io/github/last-commit/leventov/Koloboke)](https://github.com/leventov/Koloboke) - Carefully designed extension of the Java Collections Framework with primitive specializations and more.

### HTTP Clients

_Libraries that assist with creating HTTP requests and/or binding responses._

- [Apache HttpComponents](https://hc.apache.org/) - A toolset of low-level Java components focused on HTTP and associated protocols.
- [Async Http Client ![GitHub Repo Stars](https://img.shields.io/github/stars/AsyncHttpClient/async-http-client) ![GitHub last commit](https://img.shields.io/github/last-commit/AsyncHttpClient/async-http-client)](https://github.com/AsyncHttpClient/async-http-client) - Asynchronous HTTP and WebSocket client library.
- [Avaje Http Client](https://avaje.io/http-client) - A wrapper on JDK 11's HttpClient that adds Feign-like interface among other enhancements.
- [Feign ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenFeign/feign) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenFeign/feign)](https://github.com/OpenFeign/feign) - HTTP client binder inspired by Retrofit, JAXRS-2.0, and WebSocket.
- [Google HTTP Client ![GitHub Repo Stars](https://img.shields.io/github/stars/googleapis/google-http-java-client) ![GitHub last commit](https://img.shields.io/github/last-commit/googleapis/google-http-java-client)](https://github.com/googleapis/google-http-java-client) - Pluggable HTTP transport abstraction with support for java.net.HttpURLConnection, Apache HTTP Client, Android, Google App Engine, XML, Gson, Jackson and Protobuf.
- [methanol ![GitHub Repo Stars](https://img.shields.io/github/stars/mizosoft/methanol) ![GitHub last commit](https://img.shields.io/github/last-commit/mizosoft/methanol)](https://github.com/mizosoft/methanol) - HTTP client extensions library.
- [Retrofit](https://square.github.io/retrofit/) - Typesafe REST client.
- [Ribbon ![GitHub Repo Stars](https://img.shields.io/github/stars/Netflix/ribbon) ![GitHub last commit](https://img.shields.io/github/last-commit/Netflix/ribbon)](https://github.com/Netflix/ribbon) - Client-side IPC library that is battle-tested in the cloud.
- [Riptide ![GitHub Repo Stars](https://img.shields.io/github/stars/zalando/riptide) ![GitHub last commit](https://img.shields.io/github/last-commit/zalando/riptide)](https://github.com/zalando/riptide) - Client-side response routing for Spring's RestTemplate.
- [unirest-java ![GitHub Repo Stars](https://img.shields.io/github/stars/Kong/unirest-java) ![GitHub last commit](https://img.shields.io/github/last-commit/Kong/unirest-java)](https://github.com/Kong/unirest-java) - Simplified, lightweight HTTP client library.

### Hypermedia Types

_Libraries that handle serialization to hypermedia types._

- [hate ![GitHub Repo Stars](https://img.shields.io/github/stars/blackdoor/hate) ![GitHub last commit](https://img.shields.io/github/last-commit/blackdoor/hate)](https://github.com/blackdoor/hate) - Builds hypermedia-friendly objects according to HAL specification.
- [JSON-LD ![GitHub Repo Stars](https://img.shields.io/github/stars/jsonld-java/jsonld-java) ![GitHub last commit](https://img.shields.io/github/last-commit/jsonld-java/jsonld-java)](https://github.com/jsonld-java/jsonld-java) - JSON-LD implementation.
- [Siren4J ![GitHub Repo Stars](https://img.shields.io/github/stars/eserating-chwy/siren4j) ![GitHub last commit](https://img.shields.io/github/last-commit/eserating-chwy/siren4j)](https://github.com/eserating-chwy/siren4j) - Library for the Siren specification.

### IDE

_Integrated development environments that try to simplify several aspects of development._

- [Eclipse](https://www.eclipse.org) - Established open-source project with support for lots of plugins and languages.
- [IntelliJ IDEA ![c]](https://www.jetbrains.com/idea/) - Supports many JVM languages and provides good options for Android development. The commercial edition targets the enterprise sector.
- [jGRASP](https://www.jgrasp.org) - Created to provide software visualizations that work in conjunction with the debugger such as Control Structure Diagrams, UML class diagrams and Object Viewer.
- [NetBeans](https://netbeans.apache.org) - Provides integration for several Java SE and EE features, from database access to HTML5.
- [Visual Studio Code](https://code.visualstudio.com/docs/languages/java) - Provides Java support for lightweight projects with a simple, modern workflow by using extensions from the internal marketplace.

### Imagery

_Libraries that assist with the creation, evaluation or manipulation of graphical images._

- [Imgscalr ![GitHub Repo Stars](https://img.shields.io/github/stars/rkalla/imgscalr) ![GitHub last commit](https://img.shields.io/github/last-commit/rkalla/imgscalr)](https://github.com/rkalla/imgscalr) - Simple, efficient and hardware-accelerated image-scaling library implemented in pure Java 2D.
- [Tess4J ![GitHub Repo Stars](https://img.shields.io/github/stars/nguyenq/tess4j) ![GitHub last commit](https://img.shields.io/github/last-commit/nguyenq/tess4j)](https://github.com/nguyenq/tess4j) - JNA wrapper for Tesseract OCR API.
- [Thumbnailator ![GitHub Repo Stars](https://img.shields.io/github/stars/coobird/thumbnailator) ![GitHub last commit](https://img.shields.io/github/last-commit/coobird/thumbnailator)](https://github.com/coobird/thumbnailator) - High-quality thumbnail generation library.
- [TwelveMonkeys ![GitHub Repo Stars](https://img.shields.io/github/stars/haraldk/TwelveMonkeys) ![GitHub last commit](https://img.shields.io/github/last-commit/haraldk/TwelveMonkeys)](https://github.com/haraldk/TwelveMonkeys) - Collection of plugins that extend the number of supported image file formats.
- [ZXing ![GitHub Repo Stars](https://img.shields.io/github/stars/zxing/zxing) ![GitHub last commit](https://img.shields.io/github/last-commit/zxing/zxing)](https://github.com/zxing/zxing) - Multi-format 1D/2D barcode image processing library.
- [image-comparison ![GitHub Repo Stars](https://img.shields.io/github/stars/romankh3/image-comparison) ![GitHub last commit](https://img.shields.io/github/last-commit/romankh3/image-comparison)](https://github.com/romankh3/image-comparison) - Library that compares 2 images with the same sizes and shows the differences visually by drawing rectangles. Some parts of the image can be excluded from the comparison.

### Introspection

_Libraries that help make the Java introspection and reflection API easier and faster to use._

- [ClassGraph ![GitHub Repo Stars](https://img.shields.io/github/stars/classgraph/classgraph) ![GitHub last commit](https://img.shields.io/github/last-commit/classgraph/classgraph)](https://github.com/classgraph/classgraph) - ClassGraph (formerly FastClasspathScanner) is an uber-fast, ultra-lightweight, parallelized classpath scanner and module scanner for Java, Scala, Kotlin and other JVM languages.
- [jOOR ![GitHub Repo Stars](https://img.shields.io/github/stars/jOOQ/jOOR) ![GitHub last commit](https://img.shields.io/github/last-commit/jOOQ/jOOR)](https://github.com/jOOQ/jOOR) - jOOR stands for jOOR Object Oriented Reflection. It is a simple wrapper for the java.lang.reflect package.
- [Mirror](http://projetos.vidageek.net/mirror/mirror/) - Mirror was created to bring light to a simple problem, usually named ReflectionUtil, which is on almost all projects that rely on reflection to do advanced tasks.
- [Objenesis](http://objenesis.org) - Allows dynamic instantiation without default constructor, e.g. constructors which have required arguments, side effects or throw exceptions.
- [ReflectASM ![GitHub Repo Stars](https://img.shields.io/github/stars/EsotericSoftware/reflectasm) ![GitHub last commit](https://img.shields.io/github/last-commit/EsotericSoftware/reflectasm)](https://github.com/EsotericSoftware/reflectasm) - ReflectASM is a very small Java library that provides high performance reflection by using code generation.
- [Reflections ![GitHub Repo Stars](https://img.shields.io/github/stars/ronmamo/reflections) ![GitHub last commit](https://img.shields.io/github/last-commit/ronmamo/reflections)](https://github.com/ronmamo/reflections) - Reflections scans your classpath, indexes the metadata, allows you to query it on runtime and may save and collect that information for many modules within your project.

### Job Scheduling

_Libraries for scheduling background jobs._

- [JobRunr ![GitHub Repo Stars](https://img.shields.io/github/stars/jobrunr/jobrunr) ![GitHub last commit](https://img.shields.io/github/last-commit/jobrunr/jobrunr)](https://github.com/jobrunr/jobrunr) - Job scheduling library which utilizes lambdas for fire-and-forget, delayed and recurring jobs. Guarantees execution by single scheduler instance using optimistic locking. Has features for persistence, minimal dependencies and is embeddable.
- [Quartz ![GitHub Repo Stars](https://img.shields.io/github/stars/quartz-scheduler/quartz) ![GitHub last commit](https://img.shields.io/github/last-commit/quartz-scheduler/quartz)](https://github.com/quartz-scheduler/quartz) - Feature-rich, open source job scheduling library that can be integrated within virtually any Java application.
- [Sundial ![GitHub Repo Stars](https://img.shields.io/github/stars/knowm/Sundial) ![GitHub last commit](https://img.shields.io/github/last-commit/knowm/Sundial)](https://github.com/knowm/Sundial) - Lightweight framework to simply define jobs, define triggers and start the scheduler.
- [Wisp ![GitHub Repo Stars](https://img.shields.io/github/stars/Coreoz/Wisp) ![GitHub last commit](https://img.shields.io/github/last-commit/Coreoz/Wisp)](https://github.com/Coreoz/Wisp) - Simple library with minimal footprint and straightforward API.
- [db-scheduler ![GitHub Repo Stars](https://img.shields.io/github/stars/kagkarlsson/db-scheduler) ![GitHub last commit](https://img.shields.io/github/last-commit/kagkarlsson/db-scheduler)](https://github.com/kagkarlsson/db-scheduler) - Persistent and cluster-friendly scheduler.
- [easy-batch ![GitHub Repo Stars](https://img.shields.io/github/stars/j-easy/easy-batch) ![GitHub last commit](https://img.shields.io/github/last-commit/j-easy/easy-batch)](https://github.com/j-easy/easy-batch) - Set up batch jobs with simple processing pipelines. Records are read in sequence from a data source, processed in pipeline and written in batches to a data sink.
- [shedlock ![GitHub Repo Stars](https://img.shields.io/github/stars/lukas-krecan/ShedLock) ![GitHub last commit](https://img.shields.io/github/last-commit/lukas-krecan/ShedLock)](https://github.com/lukas-krecan/ShedLock) - Makes sure that your scheduled tasks are executed at most once at the same time. If a task is being executed on one node, it acquires a lock which prevents execution of the same task from another node or thread.

### JSON

_Libraries for serializing and deserializing JSON to and from Java objects._

- [Avaje Jsonb](https://avaje.io/jsonb/) - Reflection-free Json binding via source code generation with Jackson-like annotations.
- [DSL-JSON ![GitHub Repo Stars](https://img.shields.io/github/stars/ngs-doo/dsl-json) ![GitHub last commit](https://img.shields.io/github/last-commit/ngs-doo/dsl-json)](https://github.com/ngs-doo/dsl-json) - JSON library with advanced compile time databinding.
- [Genson](http://genson.io) - Powerful and easy-to-use Java-to-JSON conversion library.
- [Gson ![GitHub Repo Stars](https://img.shields.io/github/stars/google/gson) ![GitHub last commit](https://img.shields.io/github/last-commit/google/gson)](https://github.com/google/gson) - Serializes objects to JSON and vice versa. Good performance with on-the-fly usage.
- [HikariJSON ![GitHub Repo Stars](https://img.shields.io/github/stars/brettwooldridge/HikariJSON) ![GitHub last commit](https://img.shields.io/github/last-commit/brettwooldridge/HikariJSON)](https://github.com/brettwooldridge/HikariJSON) - High-performance JSON parser, 2x faster than Jackson.
- [jackson-modules-java8 ![GitHub Repo Stars](https://img.shields.io/github/stars/FasterXML/jackson-modules-java8) ![GitHub last commit](https://img.shields.io/github/last-commit/FasterXML/jackson-modules-java8)](https://github.com/FasterXML/jackson-modules-java8) - Set of Jackson modules for Java 8 datatypes and features.
- [Jackson-datatype-money ![GitHub Repo Stars](https://img.shields.io/github/stars/zalando/jackson-datatype-money) ![GitHub last commit](https://img.shields.io/github/last-commit/zalando/jackson-datatype-money)](https://github.com/zalando/jackson-datatype-money) - Open-source Jackson module to support JSON serialization and deserialization of JavaMoney data types.
- [Jackson ![GitHub Repo Stars](https://img.shields.io/github/stars/FasterXML/jackson) ![GitHub last commit](https://img.shields.io/github/last-commit/FasterXML/jackson)](https://github.com/FasterXML/jackson) - Similar to GSON, but offers performance gains if you need to instantiate the library more often.
- [JSON-io ![GitHub Repo Stars](https://img.shields.io/github/stars/jdereg/json-io) ![GitHub last commit](https://img.shields.io/github/last-commit/jdereg/json-io)](https://github.com/jdereg/json-io) - Convert Java to JSON. Convert JSON to Java. Pretty print JSON. Java JSON serializer.
- [jsoniter](http://jsoniter.com) - Fast and flexible library with iterator and lazy parsing API.
- [LoganSquare ![GitHub Repo Stars](https://img.shields.io/github/stars/bluelinelabs/LoganSquare) ![GitHub last commit](https://img.shields.io/github/last-commit/bluelinelabs/LoganSquare)](https://github.com/bluelinelabs/LoganSquare) - JSON parsing and serializing library based on Jackson's streaming API. Outperforms GSON & Jackson's library.
- [Moshi ![GitHub Repo Stars](https://img.shields.io/github/stars/square/moshi) ![GitHub last commit](https://img.shields.io/github/last-commit/square/moshi)](https://github.com/square/moshi) - Modern JSON library, less opinionated and uses built-in types like List and Map.
- [Yasson ![GitHub Repo Stars](https://img.shields.io/github/stars/eclipse-ee4j/yasson) ![GitHub last commit](https://img.shields.io/github/last-commit/eclipse-ee4j/yasson)](https://github.com/eclipse-ee4j/yasson) - Binding layer between classes and JSON documents similar to JAXB.
- [fastjson ![GitHub Repo Stars](https://img.shields.io/github/stars/alibaba/fastjson) ![GitHub last commit](https://img.shields.io/github/last-commit/alibaba/fastjson)](https://github.com/alibaba/fastjson) - Very fast processor with no additional dependencies and full data binding.
- [Jolt ![GitHub Repo Stars](https://img.shields.io/github/stars/bazaarvoice/jolt) ![GitHub last commit](https://img.shields.io/github/last-commit/bazaarvoice/jolt)](https://github.com/bazaarvoice/jolt) - JSON to JSON transformation tool.
- [JsonPath ![GitHub Repo Stars](https://img.shields.io/github/stars/json-path/JsonPath) ![GitHub last commit](https://img.shields.io/github/last-commit/json-path/JsonPath)](https://github.com/json-path/JsonPath) - Extract data from JSON using XPATH-like syntax.
- [JsonSurfer ![GitHub Repo Stars](https://img.shields.io/github/stars/jsurfer/JsonSurfer) ![GitHub last commit](https://img.shields.io/github/last-commit/jsurfer/JsonSurfer)](https://github.com/jsurfer/JsonSurfer) - Streaming JsonPath processor dedicated to processing big and complicated JSON data.

### JVM and JDK

_Current implementations of the JVM/JDK._

- [Adopt Open JDK](https://adoptopenjdk.net) - Community-driven OpenJDK builds, including both HotSpot and OpenJ9.
- [Avian ![GitHub Repo Stars](https://img.shields.io/github/stars/ReadyTalk/avian) ![GitHub last commit](https://img.shields.io/github/last-commit/ReadyTalk/avian)](https://github.com/ReadyTalk/avian) - JVM with JIT, AOT modes and iOS port.
- [Corretto](https://aws.amazon.com/corretto/) - No-cost, multiplatform, production-ready distribution of OpenJDK by Amazon. (GPL-2.0-only WITH Classpath-exception-2.0)
- [Dragonwell8 ![GitHub Repo Stars](https://img.shields.io/github/stars/alibaba/dragonwell8) ![GitHub last commit](https://img.shields.io/github/last-commit/alibaba/dragonwell8)](https://github.com/alibaba/dragonwell8) - Downstream version of OpenJDK optimized for online e-commerce, financial, logistics applications.
- [Graal ![GitHub Repo Stars](https://img.shields.io/github/stars/oracle/graal) ![GitHub last commit](https://img.shields.io/github/last-commit/oracle/graal)](https://github.com/oracle/graal) - Polyglot embeddable JVM. (GPL-2.0-only WITH Classpath-exception-2.0)
- [Liberica JDK](https://bell-sw.com) - Built from OpenJDK, thoroughly tested and passed the JCK. (GPL-2.0-only WITH Classpath-exception-2.0)
- [OpenJ9 ![GitHub Repo Stars](https://img.shields.io/github/stars/eclipse/openj9) ![GitHub last commit](https://img.shields.io/github/last-commit/eclipse/openj9)](https://github.com/eclipse/openj9) - High performance, enterprise-calibre, flexibly licensed, openly-governed cross-platform JVM extending and augmenting the runtime technology components from the Eclipse OMR and OpenJDK project.
- [Open JDK](https://openjdk.java.net) - Open JDK community home. (GPL-2.0-only WITH Classpath-exception-2.0)
- [ParparVM ![GitHub Repo Stars](https://img.shields.io/github/stars/codenameone/CodenameOne) ![GitHub last commit](https://img.shields.io/github/last-commit/codenameone/CodenameOne)](https://github.com/codenameone/CodenameOne/tree/master/vm) - VM with non-blocking, concurrent GC for iOS. (GPL-2.0-only WITH Classpath-exception-2.0)
- [RedHat Open JDK](https://developers.redhat.com/products/openjdk/overview) - RedHat's OpenJDK distribution. (GPL-2.0-only WITH Classpath-exception-2.0)
- [SAP Machine](https://sap.github.io/SapMachine/) - SAP's no-cost, rigorously tested and JCK-verified OpenJDK friendly fork. (GPL-2.0-only WITH Classpath-exception-2.0)
- [Zulu](https://www.azul.com/products/zulu-community/) - OpenJDK builds for Windows, Linux, and macOS. (GPL-2.0-only WITH Classpath-exception-2.0)

### Logging

_Libraries that log the behavior of an application._

- [Apache Log4j 2](https://logging.apache.org/log4j/) - Complete rewrite with a powerful plugin and configuration architecture.
- [Echopraxia ![GitHub Repo Stars](https://img.shields.io/github/stars/tersesystems/echopraxia) ![GitHub last commit](https://img.shields.io/github/last-commit/tersesystems/echopraxia)](https://github.com/tersesystems/echopraxia) - API designed around structured logging, rich context, and conditional logging. There are Logback and Log4J2 implementations, but Echopraxia's API is completely dependency-free, meaning it can be implemented with any logging API.
- [Graylog](https://www.graylog.org) - Open-source aggregator suited for extended role and permission management. (GPL-3.0-only)
- [Kibana](https://www.elastic.co/kibana) - Analyzes and visualizes log files. Some features require payment.
- [Logback](http://logback.qos.ch) - Robust logging library with interesting configuration options via Groovy.
- [Logbook ![GitHub Repo Stars](https://img.shields.io/github/stars/zalando/logbook) ![GitHub last commit](https://img.shields.io/github/last-commit/zalando/logbook)](https://github.com/zalando/logbook) - Extensible, open-source library for HTTP request and response logging.
- [Logstash](https://www.elastic.co/logstash) - Tool for managing log files.
- [p6spy ![GitHub Repo Stars](https://img.shields.io/github/stars/p6spy/p6spy) ![GitHub last commit](https://img.shields.io/github/last-commit/p6spy/p6spy)](https://github.com/p6spy/p6spy) - Enables logging for all JDBC transactions without changes to the code.
- [SLF4J](http://www.slf4j.org) - Abstraction layer/simple logging facade.
- [tinylog](https://tinylog.org/v2/) - Lightweight logging framework with static logger class.
- [OpenTracing Toolbox ![GitHub Repo Stars](https://img.shields.io/github/stars/zalando/opentracing-toolbox) ![GitHub last commit](https://img.shields.io/github/last-commit/zalando/opentracing-toolbox)](https://github.com/zalando/opentracing-toolbox) - Collection of libraries that build on top of OpenTracing and provide extensions and plugins to existing instrumentations.

### Machine Learning

_Tools that provide specific statistical algorithms for learning from data._

- [Apache Flink](https://flink.apache.org) - Fast, reliable, large-scale data processing engine.
- [Apache Mahout](https://mahout.apache.org) - Scalable algorithms focused on collaborative filtering, clustering and classification.
- [DatumBox](http://www.datumbox.com) - Provides several algorithms and pre-trained models for natural language processing.
- [Deeplearning4j](https://deeplearning4j.org) - Distributed and multi-threaded deep learning library.
- [DJL](https://djl.ai) - High-level and engine-agnostic framework for deep learning.
- [H2O ![c]](https://www.h2o.ai) - Analytics engine for statistics over big data.
- [Intelligent java ![GitHub Repo Stars](https://img.shields.io/github/stars/Barqawiz/IntelliJava) ![GitHub last commit](https://img.shields.io/github/last-commit/Barqawiz/IntelliJava)](https://github.com/Barqawiz/IntelliJava) - Seamlessly integrate with remote deep learning and language models programmatically.
- [JSAT ![GitHub Repo Stars](https://img.shields.io/github/stars/EdwardRaff/JSAT) ![GitHub last commit](https://img.shields.io/github/last-commit/EdwardRaff/JSAT)](https://github.com/EdwardRaff/JSAT) - Algorithms for pre-processing, classification, regression, and clustering with support for multi-threaded execution. (GPL-3.0-only)
- [m2cgen ![GitHub Repo Stars](https://img.shields.io/github/stars/BayesWitnesses/m2cgen) ![GitHub last commit](https://img.shields.io/github/last-commit/BayesWitnesses/m2cgen)](https://github.com/BayesWitnesses/m2cgen) - CLI tool to transpile models into native code.
- [oj! Algorithms](https://www.ojalgo.org/) - High-performance mathematics, linear algebra and optimisation needed for data science, machine learning and scientific computing.
- [Oryx 2 ![GitHub Repo Stars](https://img.shields.io/github/stars/OryxProject/oryx) ![GitHub last commit](https://img.shields.io/github/last-commit/OryxProject/oryx)](https://github.com/OryxProject/oryx) - Framework for building real-time, large-scale machine learning applications. Includes end-to-end applications for collaborative filtering, classification, regression, and clustering.
- [Siddhi ![GitHub Repo Stars](https://img.shields.io/github/stars/siddhi-io/siddhi) ![GitHub last commit](https://img.shields.io/github/last-commit/siddhi-io/siddhi)](https://github.com/siddhi-io/siddhi) - Cloud native streaming and complex event processing engine.
- [Smile ![GitHub Repo Stars](https://img.shields.io/github/stars/haifengl/smile) ![GitHub last commit](https://img.shields.io/github/last-commit/haifengl/smile)](https://github.com/haifengl/smile) - Statistical Machine Intelligence and Learning Engine provides a set of machine learning algorithms and a visualization library.
- [Tribuo](https://tribuo.org/) - Provides tools for classification, regression, clustering, model development and interfaces with other libraries such as scikit-learn, pytorch and TensorFlow.
- [Weka](https://www.cs.waikato.ac.nz/ml/weka/) - Collection of algorithms for data mining tasks ranging from pre-processing to visualization. (GPL-3.0-only)

### Messaging

_Tools that help send messages between clients to ensure protocol independency._

- [Aeron ![GitHub Repo Stars](https://img.shields.io/github/stars/real-logic/Aeron) ![GitHub last commit](https://img.shields.io/github/last-commit/real-logic/Aeron)](https://github.com/real-logic/Aeron) - Efficient, reliable, unicast and multicast message transport.
- [Apache ActiveMQ](https://activemq.apache.org) - Message broker that implements JMS and converts synchronous to asynchronous communication.
- [Apache Camel](https://camel.apache.org) - Glues together different transport APIs via Enterprise Integration Patterns.
- [Apache Kafka](https://kafka.apache.org) - High-throughput distributed messaging system.
- [Apache Pulsar](https://pulsar.apache.org) - Distributed pub/sub-messaging system.
- [Apache RocketMQ](https://rocketmq.apache.org) - Fast, reliable, and scalable distributed messaging platform.
- [Apache Qpid](https://qpid.apache.org) - Apache Qpid makes messaging tools that speak AMQP and support many languages and platforms.
- [Deezpatch ![GitHub Repo Stars](https://img.shields.io/github/stars/joel-jeremy/deezpatch) ![GitHub last commit](https://img.shields.io/github/last-commit/joel-jeremy/deezpatch)](https://github.com/joel-jeremy/deezpatch) - Simple, lightweight, and performant dispatch library for decoupling messages (requests and events) and message handlers.
- [EventBus ![GitHub Repo Stars](https://img.shields.io/github/stars/greenrobot/EventBus) ![GitHub last commit](https://img.shields.io/github/last-commit/greenrobot/EventBus)](https://github.com/greenrobot/EventBus) - Simple publish/subscribe event bus.
- [Hermes](http://hermes.allegro.tech) - Fast and reliable message broker built on top of Kafka.
- [JeroMQ ![GitHub Repo Stars](https://img.shields.io/github/stars/zeromq/jeromq) ![GitHub last commit](https://img.shields.io/github/last-commit/zeromq/jeromq)](https://github.com/zeromq/jeromq) - Implementation of ZeroMQ.
- [Nakadi ![GitHub Repo Stars](https://img.shields.io/github/stars/zalando/nakadi) ![GitHub last commit](https://img.shields.io/github/last-commit/zalando/nakadi)](https://github.com/zalando/nakadi) - Provides a RESTful API on top of Kafka.
- [RabbitMQ Java client ![GitHub Repo Stars](https://img.shields.io/github/stars/rabbitmq/rabbitmq-java-client) ![GitHub last commit](https://img.shields.io/github/last-commit/rabbitmq/rabbitmq-java-client)](https://github.com/rabbitmq/rabbitmq-java-client) - RabbitMQ client.
- [Smack ![GitHub Repo Stars](https://img.shields.io/github/stars/igniterealtime/Smack) ![GitHub last commit](https://img.shields.io/github/last-commit/igniterealtime/Smack)](https://github.com/igniterealtime/Smack) - Cross-platform XMPP client library.
- [NATS client ![GitHub Repo Stars](https://img.shields.io/github/stars/nats-io/nats.java) ![GitHub last commit](https://img.shields.io/github/last-commit/nats-io/nats.java)](https://github.com/nats-io/nats.java) - NATS client.

### Microservice

_Tools for creating and managing microservices._

- [ActiveRPC](https://rpc.activej.io) - Lightweight and fast library for complex high-load distributed applications and Memcached-like solutions.
- [Apollo](https://spotify.github.io/apollo/) - Libraries for writing composable microservices.
- [Armeria ![GitHub Repo Stars](https://img.shields.io/github/stars/line/armeria) ![GitHub last commit](https://img.shields.io/github/last-commit/line/armeria)](https://github.com/line/armeria) - Asynchronous RPC/REST client/server library built on top of Java 8, Netty, HTTP/2, Thrift and gRPC.
- [consul-api ![GitHub Repo Stars](https://img.shields.io/github/stars/Ecwid/consul-api) ![GitHub last commit](https://img.shields.io/github/last-commit/Ecwid/consul-api)](https://github.com/Ecwid/consul-api) - Client for the Consul API: a distributed, highly available and datacenter-aware registry/discovery service.
- [Eureka ![GitHub Repo Stars](https://img.shields.io/github/stars/Netflix/eureka) ![GitHub last commit](https://img.shields.io/github/last-commit/Netflix/eureka)](https://github.com/Netflix/eureka) - REST-based service registry for resilient load balancing and failover.
- [Helidon](https://helidon.io) - Two-style approach for writing microservices: Functional-reactive and as an implementation of MicroProfile.
- [JDA ![GitHub Repo Stars](https://img.shields.io/github/stars/DV8FromTheWorld/JDA) ![GitHub last commit](https://img.shields.io/github/last-commit/DV8FromTheWorld/JDA)](https://github.com/DV8FromTheWorld/JDA) - Wrapping of the Discord REST API and its WebSocket events.
- [KeenType ![GitHub Repo Stars](https://img.shields.io/github/stars/DaveJarvis/KeenType) ![GitHub last commit](https://img.shields.io/github/last-commit/DaveJarvis/KeenType)](https://github.com/DaveJarvis/KeenType) - Modernized version of a Java-based implementation of the New Typesetting System, which was heavily based on Donald E. Knuth's original TeX.
- [kubernetes-client ![GitHub Repo Stars](https://img.shields.io/github/stars/fabric8io/kubernetes-client) ![GitHub last commit](https://img.shields.io/github/last-commit/fabric8io/kubernetes-client)](https://github.com/fabric8io/kubernetes-client) - Client provides access to the full Kubernetes & OpenShift REST APIs via a fluent DSL.
- [Micronaut](https://micronaut.io) - Modern full-stack framework with focus on modularity, minimal memory footprint and startup time.
- [Nacos](https://nacos.io) - Dynamic service discovery, configuration and service management platform for building cloud native applications.
- [OpenAI-Java ![GitHub Repo Stars](https://img.shields.io/github/stars/TheoKanning/openai-java) ![GitHub last commit](https://img.shields.io/github/last-commit/TheoKanning/openai-java)](https://github.com/TheoKanning/openai-java) - Java libraries for using OpenAI's GPT-3 API.
- [Quarkus](https://quarkus.io) - Kubernetes stack tailored for the HotSpot and Graal VM.
- [Sentinel ![GitHub Repo Stars](https://img.shields.io/github/stars/alibaba/Sentinel) ![GitHub last commit](https://img.shields.io/github/last-commit/alibaba/Sentinel)](https://github.com/alibaba/Sentinel) - Flow control component enabling reliability, resilience and monitoring for microservices.

### Miscellaneous

_Everything else._

- [AWS SDK for Java 2.0 ![GitHub Repo Stars](https://img.shields.io/github/stars/aws/aws-sdk-java-v2) ![GitHub last commit](https://img.shields.io/github/last-commit/aws/aws-sdk-java-v2)](https://github.com/aws/aws-sdk-java-v2) - Wrapper around AWS' API.
- [CQEngine ![GitHub Repo Stars](https://img.shields.io/github/stars/npgall/cqengine) ![GitHub last commit](https://img.shields.io/github/last-commit/npgall/cqengine)](https://github.com/npgall/cqengine) - Ultra-fast, SQL-like queries on Java collections.
- [Design Patterns ![GitHub Repo Stars](https://img.shields.io/github/stars/iluwatar/java-design-patterns) ![GitHub last commit](https://img.shields.io/github/last-commit/iluwatar/java-design-patterns)](https://github.com/iluwatar/java-design-patterns) - Implementation and explanation of the most common design patterns.
- [FF4J ![GitHub Repo Stars](https://img.shields.io/github/stars/ff4j/ff4j) ![GitHub last commit](https://img.shields.io/github/last-commit/ff4j/ff4j)](https://github.com/ff4j/ff4j) - Feature Flags for Java.
- [FizzBuzz Enterprise Edition ![GitHub Repo Stars](https://img.shields.io/github/stars/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition) ![GitHub last commit](https://img.shields.io/github/last-commit/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition)](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition) - No-nonsense implementation of FizzBuzz made by serious businessmen for serious business purposes. (No explicit license)
- [J2ObjC ![GitHub Repo Stars](https://img.shields.io/github/stars/google/j2objc) ![GitHub last commit](https://img.shields.io/github/last-commit/google/j2objc)](https://github.com/google/j2objc) - Java-to-Objective-C translator for porting Android libraries to iOS.
- [JBake](https://jbake.org) - Static website generator.
- [JBot ![GitHub Repo Stars](https://img.shields.io/github/stars/rampatra/jbot) ![GitHub last commit](https://img.shields.io/github/last-commit/rampatra/jbot)](https://github.com/rampatra/jbot) - Framework for building chatbots. (GPL-3.0-only)
- [JCuda](http://jcuda.org) - JCuda offers Java bindings for CUDA and CUDA-related libraries.
- [Jimfs ![GitHub Repo Stars](https://img.shields.io/github/stars/google/jimfs) ![GitHub last commit](https://img.shields.io/github/last-commit/google/jimfs)](https://github.com/google/jimfs) - In-memory file system.
- [JObfuscator![c]](https://www.pelock.com/products/jobfuscator) - Source code obfuscator.
- [Joda-Money](https://www.joda.org/joda-money/) - Basic currency and money classes and algorithms not provided by the JDK.
- [jOOX ![GitHub Repo Stars](https://img.shields.io/github/stars/jooq/joox) ![GitHub last commit](https://img.shields.io/github/last-commit/jooq/joox)](https://github.com/jooq/joox) - Simple wrapper for the org.w3c.dom package, to allow for fluent XML document creation and manipulation with an API inspired by jQuery.
- [JPad](http://jpad.io) - Snippet runner.
- [jsweet ![GitHub Repo Stars](https://img.shields.io/github/stars/cincheo/jsweet) ![GitHub last commit](https://img.shields.io/github/last-commit/cincheo/jsweet)](https://github.com/cincheo/jsweet) - Source transpiler to TypeScript/JavaScript.
- [Maven Wrapper ![GitHub Repo Stars](https://img.shields.io/github/stars/takari/maven-wrapper) ![GitHub last commit](https://img.shields.io/github/last-commit/takari/maven-wrapper)](https://github.com/takari/maven-wrapper) - Analogue of Gradle Wrapper for Maven, allows building projects without installing maven.
- [Membrane Service Proxy ![GitHub Repo Stars](https://img.shields.io/github/stars/membrane/service-proxy) ![GitHub last commit](https://img.shields.io/github/last-commit/membrane/service-proxy)](https://github.com/membrane/service-proxy) - Open-source, reverse-proxy framework.
- [MinimalFTP ![GitHub Repo Stars](https://img.shields.io/github/stars/Guichaguri/MinimalFTP) ![GitHub last commit](https://img.shields.io/github/last-commit/Guichaguri/MinimalFTP)](https://github.com/Guichaguri/MinimalFTP) - Lightweight, small and customizable FTP server.
- [LittleProxy ![GitHub Repo Stars](https://img.shields.io/github/stars/adamfisk/LittleProxy) ![GitHub last commit](https://img.shields.io/github/last-commit/adamfisk/LittleProxy)](https://github.com/adamfisk/LittleProxy) - High performance HTTP proxy atop Netty's event-based networking library.
- [Modern Java - A Guide to Java 8 ![GitHub Repo Stars](https://img.shields.io/github/stars/winterbe/java8-tutorial) ![GitHub last commit](https://img.shields.io/github/last-commit/winterbe/java8-tutorial)](https://github.com/winterbe/java8-tutorial) - Popular Java 8 guide.
- [Modernizer ![GitHub Repo Stars](https://img.shields.io/github/stars/gaul/modernizer-maven-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/gaul/modernizer-maven-plugin)](https://github.com/gaul/modernizer-maven-plugin) - Detect uses of legacy Java APIs.
- [OctoLinker ![GitHub Repo Stars](https://img.shields.io/github/stars/OctoLinker/OctoLinker) ![GitHub last commit](https://img.shields.io/github/last-commit/OctoLinker/OctoLinker)](https://github.com/OctoLinker/OctoLinker) - Browser extension which allows to navigate through code on GitHub more efficiently.
- [OpenRefine](http://openrefine.org) - Tool for working with messy data: cleaning, transforming, extending it with web services and linking it to databases.
- [PipelinR ![GitHub Repo Stars](https://img.shields.io/github/stars/sizovs/pipelinr) ![GitHub last commit](https://img.shields.io/github/last-commit/sizovs/pipelinr)](https://github.com/sizovs/pipelinr) - Small utility library for using handlers and commands with pipelines.
- [Polyglot for Maven ![GitHub Repo Stars](https://img.shields.io/github/stars/takari/polyglot-maven) ![GitHub last commit](https://img.shields.io/github/last-commit/takari/polyglot-maven)](https://github.com/takari/polyglot-maven) - Extensions for Maven 3.3.1+ that allows writing the POM model in dialects other than XML.
- [RR4J ![GitHub Repo Stars](https://img.shields.io/github/stars/Kartikvk1996/RR4J) ![GitHub last commit](https://img.shields.io/github/last-commit/Kartikvk1996/RR4J)](https://github.com/Kartikvk1996/RR4J) - RR4J is a tool that records java bytecode execution and later allows developers to replay locally.
- [Simple Java Mail ![GitHub Repo Stars](https://img.shields.io/github/stars/bbottema/simple-java-mail) ![GitHub last commit](https://img.shields.io/github/last-commit/bbottema/simple-java-mail)](https://github.com/bbottema/simple-java-mail) - Mailing with a clean and fluent API.
- [Smooks ![GitHub Repo Stars](https://img.shields.io/github/stars/smooks/smooks) ![GitHub last commit](https://img.shields.io/github/last-commit/smooks/smooks)](https://github.com/smooks/smooks) - Framework for fragment-based message processing. (Apache-2.0 OR LGPL-3.0-or-later)
- [Svix ![GitHub Repo Stars](https://img.shields.io/github/stars/svix/svix-webhooks) ![GitHub last commit](https://img.shields.io/github/last-commit/svix/svix-webhooks)](https://github.com/svix/svix-webhooks/tree/main/java) - Library for the Svix API to send webhooks and verify signatures.
- [Togglz](https://www.togglz.org) - Implementation of the Feature Toggles pattern.
- [TypeTools ![GitHub Repo Stars](https://img.shields.io/github/stars/jhalterman/typetools) ![GitHub last commit](https://img.shields.io/github/last-commit/jhalterman/typetools)](https://github.com/jhalterman/typetools) - Tools for resolving generic types.
- [XMLBeam ![GitHub Repo Stars](https://img.shields.io/github/stars/SvenEwald/xmlbeam) ![GitHub last commit](https://img.shields.io/github/last-commit/SvenEwald/xmlbeam)](https://github.com/SvenEwald/xmlbeam) - Processes XML by using annotations or XPath within code.
- [yGuard ![GitHub Repo Stars](https://img.shields.io/github/stars/yWorks/yGuard) ![GitHub last commit](https://img.shields.io/github/last-commit/yWorks/yGuard)](https://github.com/yWorks/yGuard) - Obfuscation via renaming and shrinking.

### Mobile Development

_Tools for creating or managing mobile applications._

- [Codename One](https://www.codenameone.com) - Cross-platform solution for writing native mobile apps. (GPL-2.0-only WITH Classpath-exception-2.0)
- [MobileUI](https://mobileui.dev) - Cross-platform framework for developing mobile apps with native UI in Java and Kotlin.
- [Multi-OS Engine](https://multi-os-engine.org) - Open-source, cross-platform engine to develop native mobile (iOS, Android, etc.) apps.

### Monitoring

_Tools that monitor applications in production._

- [Automon ![GitHub Repo Stars](https://img.shields.io/github/stars/stevensouza/automon) ![GitHub last commit](https://img.shields.io/github/last-commit/stevensouza/automon)](https://github.com/stevensouza/automon) - Combines the power of AOP with monitoring and/or logging tools.
- [Failsafe Actuator ![GitHub Repo Stars](https://img.shields.io/github/stars/zalando/failsafe-actuator) ![GitHub last commit](https://img.shields.io/github/last-commit/zalando/failsafe-actuator)](https://github.com/zalando/failsafe-actuator) - Out of the box monitoring of Failsafe Circuit Breaker in Spring-Boot environment.
- [Glowroot](https://glowroot.org) - Open-source Java APM.
- [HertzBeat ![GitHub Repo Stars](https://img.shields.io/github/stars/dromara/hertzbeat) ![GitHub last commit](https://img.shields.io/github/last-commit/dromara/hertzbeat)](https://github.com/dromara/hertzbeat) - Real-time monitoring system with custom-monitor and agentless.
- [inspectIT](https://www.inspectit.rocks) - Captures detailed run-time information via hooks that can be changed on the fly. It supports tracing over multiple systems via the OpenTracing API and can correlate the data with end user monitoring.
- [Instrumental ![c]](https://instrumentalapp.com) - Real-time Java application performance monitoring. A commercial service with free development accounts.
- [JavaMelody ![GitHub Repo Stars](https://img.shields.io/github/stars/javamelody/javamelody) ![GitHub last commit](https://img.shields.io/github/last-commit/javamelody/javamelody)](https://github.com/javamelody/javamelody) - Performance monitoring and profiling.
- [Jaeger client ![GitHub Repo Stars](https://img.shields.io/github/stars/jaegertracing/jaeger-client-java) ![GitHub last commit](https://img.shields.io/github/last-commit/jaegertracing/jaeger-client-java)](https://github.com/jaegertracing/jaeger-client-java) - Jaeger client.
- [jmxtrans ![GitHub Repo Stars](https://img.shields.io/github/stars/jmxtrans/jmxtrans) ![GitHub last commit](https://img.shields.io/github/last-commit/jmxtrans/jmxtrans)](https://github.com/jmxtrans/jmxtrans) - Connect to multiple JVMs and query them for their attributes via JMX. Its query language is based on JSON, which allows non-Java programmers to access the JVM attributes. Supports different output writes, including Graphite, Ganglia, and StatsD.
- [Jolokia](https://jolokia.org) - JMX over REST.
- [Metrics ![GitHub Repo Stars](https://img.shields.io/github/stars/dropwizard/metrics) ![GitHub last commit](https://img.shields.io/github/last-commit/dropwizard/metrics)](https://github.com/dropwizard/metrics) - Expose metrics via JMX or HTTP and send them to a database.
- [Datadog ![c]](https://github.com/DataDog/dd-trace-java) - Modern monitoring & analytics.
- [nudge4j ![GitHub Repo Stars](https://img.shields.io/github/stars/lorenzoongithub/nudge4j) ![GitHub last commit](https://img.shields.io/github/last-commit/lorenzoongithub/nudge4j)](https://github.com/lorenzoongithub/nudge4j) - Remote developer console from the browser for Java 8 via bytecode injection.
- [Pinpoint ![GitHub Repo Stars](https://img.shields.io/github/stars/naver/pinpoint) ![GitHub last commit](https://img.shields.io/github/last-commit/naver/pinpoint)](https://github.com/naver/pinpoint) - Open-source APM tool.
- [Prometheus ![GitHub Repo Stars](https://img.shields.io/github/stars/prometheus/client_java) ![GitHub last commit](https://img.shields.io/github/last-commit/prometheus/client_java)](https://github.com/prometheus/client_java) - Provides a multi-dimensional data model, DSL, autonomous server nodes and much more.
- [Sentry ![c]](https://github.com/getsentry/sentry-java) - Integration with [Sentry ![GitHub Repo Stars](https://img.shields.io/github/stars/getsentry/sentry) ![GitHub last commit](https://img.shields.io/github/last-commit/getsentry/sentry)](https://github.com/getsentry/sentry), an application error tracking and performance analysis platform.
- [SPM ![c]](https://github.com/sematext/sematext-agent-java) - Performance monitor with distributing transaction tracing for JVM apps.
- [Stagemonitor ![GitHub Repo Stars](https://img.shields.io/github/stars/stagemonitor/stagemonitor) ![GitHub last commit](https://img.shields.io/github/last-commit/stagemonitor/stagemonitor)](https://github.com/stagemonitor/stagemonitor) - Open-source performance monitoring and transaction tracing for JVM apps.
- [Sysmon ![GitHub Repo Stars](https://img.shields.io/github/stars/palantir/Sysmon) ![GitHub last commit](https://img.shields.io/github/last-commit/palantir/Sysmon)](https://github.com/palantir/Sysmon) - Lightweight platform monitoring tool for Java VMs.
- [zipkin](https://zipkin.io) - Distributed tracing system which gathers timing data needed to troubleshoot latency problems in microservice architectures.
- [hippo4j ![GitHub Repo Stars](https://img.shields.io/github/stars/opengoofy/hippo4j) ![GitHub last commit](https://img.shields.io/github/last-commit/opengoofy/hippo4j)](https://github.com/opengoofy/hippo4j/blob/develop/README-EN.md) - Dynamic and observable thread pool framework.

### Native

_For working with platform-specific native libraries._

- [Aparapi ![GitHub Repo Stars](https://img.shields.io/github/stars/Syncleus/aparapi) ![GitHub last commit](https://img.shields.io/github/last-commit/Syncleus/aparapi)](https://github.com/Syncleus/aparapi) - Converts bytecode to OpenCL which allows execution on GPUs.
- [JavaCPP ![GitHub Repo Stars](https://img.shields.io/github/stars/bytedeco/javacpp) ![GitHub last commit](https://img.shields.io/github/last-commit/bytedeco/javacpp)](https://github.com/bytedeco/javacpp) - Provides efficient and easy access to native C++.
- [JNA ![GitHub Repo Stars](https://img.shields.io/github/stars/java-native-access/jna) ![GitHub last commit](https://img.shields.io/github/last-commit/java-native-access/jna)](https://github.com/java-native-access/jna) - Work with native libraries without writing JNI. Also provides interfaces to common system libraries.
- [JNR ![GitHub Repo Stars](https://img.shields.io/github/stars/jnr/jnr-ffi) ![GitHub last commit](https://img.shields.io/github/last-commit/jnr/jnr-ffi)](https://github.com/jnr/jnr-ffi) - Work with native libraries without writing JNI. Also provides interfaces to common system libraries. Same goals as JNA, but faster, and serves as the basis for the upcoming [Project Panama](http://openjdk.java.net/projects/panama).

### Natural Language Processing

_Libraries that specialize in processing text._

- [CogCompNLP ![GitHub Repo Stars](https://img.shields.io/github/stars/CogComp/cogcomp-nlp) ![GitHub last commit](https://img.shields.io/github/last-commit/CogComp/cogcomp-nlp)](https://github.com/CogComp/cogcomp-nlp) - Provides common annotators for plain text input. (Research and Academic Use License)
- [CoreNLP](https://nlp.stanford.edu/software/corenlp.shtml) - Provides a set of fundamental tools for tasks like tagging, named entity recognition, and sentiment analysis. (GPL-3.0-or-later)
- [DKPro](https://dkpro.github.io) - Collection of reusable NLP tools for linguistic pre-processing, machine learning, lexical resources, etc.
- [LingPipe](http://alias-i.com/lingpipe/) - Toolkit for tasks ranging from POS tagging to sentiment analysis.

### Networking

_Libraries for building network servers._

- [Commons-networking ![GitHub Repo Stars](https://img.shields.io/github/stars/CiscoSE/commons-networking) ![GitHub last commit](https://img.shields.io/github/last-commit/CiscoSE/commons-networking)](https://github.com/CiscoSE/commons-networking) - Client for server-sent events (SSE).
- [Comsat ![GitHub Repo Stars](https://img.shields.io/github/stars/puniverse/comsat) ![GitHub last commit](https://img.shields.io/github/last-commit/puniverse/comsat)](https://github.com/puniverse/comsat) - Integrates standard Java web-related APIs with Quasar fibers and actors.
- [Dubbo ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/dubbo) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/dubbo)](https://github.com/apache/dubbo) - High-performance RPC framework.
- [Grizzly](https://javaee.github.io/grizzly/) - NIO framework. Used as a network layer in Glassfish.
- [gRPC ![GitHub Repo Stars](https://img.shields.io/github/stars/grpc/grpc-java) ![GitHub last commit](https://img.shields.io/github/last-commit/grpc/grpc-java)](https://github.com/grpc/grpc-java) - RPC framework based on protobuf and HTTP/2.
- [KryoNet ![GitHub Repo Stars](https://img.shields.io/github/stars/EsotericSoftware/kryonet) ![GitHub last commit](https://img.shields.io/github/last-commit/EsotericSoftware/kryonet)](https://github.com/EsotericSoftware/kryonet) - Provides a clean and simple API for efficient TCP and UDP client/server network communication using NIO and Kryo.
- [MINA](https://mina.apache.org) - Abstract, event-driven async I/O API for network operations over TCP/IP and UDP/IP via Java NIO.
- [Netty](https://netty.io) - Framework for building high-performance network applications.
- [Drift ![GitHub Repo Stars](https://img.shields.io/github/stars/airlift/drift) ![GitHub last commit](https://img.shields.io/github/last-commit/airlift/drift)](https://github.com/airlift/drift) - Easy-to-use, annotation-based library for creating Thrift clients and serializable types.
- [ServiceTalk ![GitHub Repo Stars](https://img.shields.io/github/stars/apple/servicetalk) ![GitHub last commit](https://img.shields.io/github/last-commit/apple/servicetalk)](https://github.com/apple/servicetalk) - Framework built on Netty with APIs tailored to specific protocols and support for multiple programming paradigms.
- [sshj ![GitHub Repo Stars](https://img.shields.io/github/stars/hierynomus/sshj) ![GitHub last commit](https://img.shields.io/github/last-commit/hierynomus/sshj)](https://github.com/hierynomus/sshj) - Programmatically use SSH, SCP or SFTP.
- [TLS Channel ![GitHub Repo Stars](https://img.shields.io/github/stars/marianobarrios/tls-channel) ![GitHub last commit](https://img.shields.io/github/last-commit/marianobarrios/tls-channel)](https://github.com/marianobarrios/tls-channel) - Implements a ByteChannel interface over SSLEngine, enabling easy-to-use (socket-like) TLS.
- [Undertow](http://undertow.io) - Web server providing both blocking and non-blocking APIs based on NIO. Used as a network layer in WildFly. (LGPL-2.1-only)
- [urnlib ![GitHub Repo Stars](https://img.shields.io/github/stars/slub/urnlib) ![GitHub last commit](https://img.shields.io/github/last-commit/slub/urnlib)](https://github.com/slub/urnlib) - Represent, parse and encode URNs, as in RFC 2141. (GPL-3.0-only)
- [Fluency ![GitHub Repo Stars](https://img.shields.io/github/stars/komamitsu/fluency) ![GitHub last commit](https://img.shields.io/github/last-commit/komamitsu/fluency)](https://github.com/komamitsu/fluency) - High throughput data ingestion logger to Fluentd and Fluent Bit.

### ORM

_APIs that handle the persistence of objects._

- [Apache Cayenne](https://cayenne.apache.org) - Provides a clean, static API for data access. Also includes a GUI Modeler for working with database mappings, and DB reverse engineering and generation.
- [Doma ![GitHub Repo Stars](https://img.shields.io/github/stars/domaframework/doma) ![GitHub last commit](https://img.shields.io/github/last-commit/domaframework/doma)](https://github.com/domaframework/doma) - Database access framework that verifies and generates source code at compile time using annotation processing as well as native SQL templates called two-way SQL.
- [Ebean](https://ebean.io) - Provides simple and fast data access.
- [EclipseLink](https://www.eclipse.org/eclipselink/) - Supports a number of persistence standards: JPA, JAXB, JCA and SDO.
- [Hibernate](http://hibernate.org/orm/) - Robust and widely used, with an active community. (LGPL-2.1-only)
- [MyBatis ![GitHub Repo Stars](https://img.shields.io/github/stars/mybatis/mybatis-3) ![GitHub last commit](https://img.shields.io/github/last-commit/mybatis/mybatis-3)](https://github.com/mybatis/mybatis-3) - Couples objects with stored procedures or SQL statements.
- [ObjectiveSql ![GitHub Repo Stars](https://img.shields.io/github/stars/braisdom/ObjectiveSql) ![GitHub last commit](https://img.shields.io/github/last-commit/braisdom/ObjectiveSql)](https://github.com/braisdom/ObjectiveSql) - ActiveRecord ORM for rapid development and convention over configuration.
- [Permazen ![GitHub Repo Stars](https://img.shields.io/github/stars/permazen/permazen) ![GitHub last commit](https://img.shields.io/github/last-commit/permazen/permazen)](https://github.com/permazen/permazen) - Language-natural persistence layer.
- [SimpleFlatMapper ![GitHub Repo Stars](https://img.shields.io/github/stars/arnaudroger/SimpleFlatMapper) ![GitHub last commit](https://img.shields.io/github/last-commit/arnaudroger/SimpleFlatMapper)](https://github.com/arnaudroger/SimpleFlatMapper) - Simple database and CSV mapper.

### PaaS

_Java platform as a service._

- [AWS Elastic Beanstalk ![c]](https://aws.amazon.com/elasticbeanstalk/) - AWS-based, with support for Tomcat and Jetty.
- [AWS Lambda ![c]](https://aws.amazon.com/lambda/) - Serverless computation.
- [Google Cloud ![c]](https://cloud.google.com) - Google's cloud infrastructure.
- [Heroku ![c]](https://www.heroku.com) - Abstract computing environments.
- [Microsoft Azure ![c]](https://azure.microsoft.com/en-us/) - Microsoft's cloud infrastructure.
- [OpenShift ![c]](https://www.openshift.com) - Provides additionally an on-premise solution.

### PDF

_Tools to help with PDF files._

- [Apache FOP](https://xmlgraphics.apache.org/fop/) - Creates PDFs from XSL-FO.
- [Apache PDFBox](https://pdfbox.apache.org) - Toolbox for creating and manipulating PDFs.
- [Dynamic Jasper](http://dynamicjasper.com) - Abstraction layer to JasperReports. (LGPL-3.0-only)
- [DynamicReports ![GitHub Repo Stars](https://img.shields.io/github/stars/dynamicreports/dynamicreports) ![GitHub last commit](https://img.shields.io/github/last-commit/dynamicreports/dynamicreports)](https://github.com/dynamicreports/dynamicreports) - Simplifies JasperReports. (LGPL-3.0-only)
- [Eclipse BIRT](https://www.eclipse.org/birt) - Report engine for creating PDF and other formats (DOCX, XLSX, HTML, etc) using Eclipse-based visual editor.
- [flyingsaucer ![GitHub Repo Stars](https://img.shields.io/github/stars/flyingsaucerproject/flyingsaucer) ![GitHub last commit](https://img.shields.io/github/last-commit/flyingsaucerproject/flyingsaucer)](https://github.com/flyingsaucerproject/flyingsaucer) - XML/XHTML and CSS 2.1 renderer. (LGPL-2.1-or-later)
- [iText ![c]](https://itextpdf.com/en) - Creates PDF files programmatically.
- [JasperReports](https://community.jaspersoft.com/project/jasperreports-library) - Complex reporting engine. (LGPL-3.0-only)
- [Open HTML to PDF ![GitHub Repo Stars](https://img.shields.io/github/stars/danfickle/openhtmltopdf) ![GitHub last commit](https://img.shields.io/github/last-commit/danfickle/openhtmltopdf)](https://github.com/danfickle/openhtmltopdf) - Properly supports modern PDF standards based on flyingsaucer and Apache PDFBox.
- [OpenPDF ![GitHub Repo Stars](https://img.shields.io/github/stars/LibrePDF/OpenPDF) ![GitHub last commit](https://img.shields.io/github/last-commit/LibrePDF/OpenPDF)](https://github.com/LibrePDF/OpenPDF) - Open-source iText fork. (LGPL-3.0-only & MPL-2.0)
- [Tabula ![GitHub Repo Stars](https://img.shields.io/github/stars/tabulapdf/tabula-java) ![GitHub last commit](https://img.shields.io/github/last-commit/tabulapdf/tabula-java)](https://github.com/tabulapdf/tabula-java) - Extracts tables from PDF files.

### Performance analysis

_Tools for performance analysis, profiling and benchmarking._

- [fastThread ![c]](https://fastthread.io) - Analyze and visualize thread dumps with a free cloud-based upload interface.
- [GCeasy ![c]](https://gceasy.io) - Tool to analyze and visualize GC logs. It provides a free cloud-based upload interface.
- [honest-profiler ![GitHub Repo Stars](https://img.shields.io/github/stars/jvm-profiling-tools/honest-profiler) ![GitHub last commit](https://img.shields.io/github/last-commit/jvm-profiling-tools/honest-profiler)](https://github.com/jvm-profiling-tools/honest-profiler) - Low-overhead, bias-free sampling profiler.
- [jHiccup ![GitHub Repo Stars](https://img.shields.io/github/stars/giltene/jHiccup) ![GitHub last commit](https://img.shields.io/github/last-commit/giltene/jHiccup)](https://github.com/giltene/jHiccup) - Logs and records platform JVM stalls.
- [JITWatch ![GitHub Repo Stars](https://img.shields.io/github/stars/AdoptOpenJDK/jitwatch) ![GitHub last commit](https://img.shields.io/github/last-commit/AdoptOpenJDK/jitwatch)](https://github.com/AdoptOpenJDK/jitwatch) - Analyze the JIT compiler optimisations made by the HotSpot JVM.
- [JMH](http://openjdk.java.net/projects/code-tools/jmh/) - Harness for building, running, and analysing nano/micro/milli/macro benchmarks written in Java and other languages targeting the JVM. (GPL-2.0 only WITH Classpath-exception-2.0)
- [LatencyUtils ![GitHub Repo Stars](https://img.shields.io/github/stars/LatencyUtils/LatencyUtils) ![GitHub last commit](https://img.shields.io/github/last-commit/LatencyUtils/LatencyUtils)](https://github.com/LatencyUtils/LatencyUtils) - Utilities for latency measurement and reporting.

### Platform

_Frameworks that are suites of multiple libraries encompassing several categories._

#### Apache Commons

- [BCEL](http://commons.apache.org/proper/commons-bcel/) - Byte Code Engineering Library - analyze, create, and manipulate Java class files.
- [BeanUtils](http://commons.apache.org/proper/commons-beanutils/) - Easy-to-use wrappers around the Java reflection and introspection APIs.
- [BeanUtils2](http://commons.apache.org/sandbox/commons-beanutils2/) - Redesign of Commons BeanUtils.
- [BSF](http://commons.apache.org/proper/commons-bsf/) - Bean Scripting Framework - interface to scripting languages, including JSR-223.
- [Chain](http://commons.apache.org/proper/commons-chain/) - Chain of Responsibility pattern implementation.
- [ClassScan](http://commons.apache.org/sandbox/commons-classscan/) - Find Class interfaces, methods, fields, and annotations without loading.
- [CLI](http://commons.apache.org/proper/commons-cli/) - Command-line arguments parser.
- [CLI2](http://commons.apache.org/sandbox/commons-cli2/) - Redesign of Commons CLI.
- [Codec](http://commons.apache.org/proper/commons-codec/) - General encoding/decoding algorithms, e.g. phonetic, base64 or URL.
- [Collections](http://commons.apache.org/proper/commons-collections/) - Extends or augments the Java Collections Framework.
- [Compress](http://commons.apache.org/proper/commons-compress/) - Defines an API for working with tar, zip and bzip2 files.
- [Configuration](http://commons.apache.org/proper/commons-configuration/) - Reading of configuration/preferences files in various formats.
- [Convert](http://commons.apache.org/sandbox/commons-convert/) - Commons-Convert aims to provide a single library dedicated to the task of converting an object of one type to another.
- [CSV](http://commons.apache.org/proper/commons-csv/) - Component for reading and writing comma separated value files.
- [Daemon](http://commons.apache.org/proper/commons-daemon/) - Alternative invocation mechanism for unix-daemon-like java code.
- [DBCP](http://commons.apache.org/proper/commons-dbcp/) - Database connection pooling services.
- [DbUtils](http://commons.apache.org/proper/commons-dbutils/) - JDBC helper library.
- [Digester](http://commons.apache.org/proper/commons-digester/) - XML-to-Java-object mapping utility.
- [Email](http://commons.apache.org/proper/commons-email/) - Library for sending e-mail from Java.
- [Exec](http://commons.apache.org/proper/commons-exec/) - API for dealing with external process execution and environment management in Java.
- [FileUpload](http://commons.apache.org/proper/commons-fileupload/) - File upload capability for your servlets and web applications.
- [Finder](http://commons.apache.org/sandbox/commons-finder/) - Java library inspired by the UNIX find command.
- [Flatfile](http://commons.apache.org/sandbox/commons-flatfile/) - Java library for working with flat data structures.
- [Functor](http://commons.apache.org/proper/commons-functor/) - Function that can be manipulated as an object, or an object representing a single, generic function.
- [Graph](http://commons.apache.org/sandbox/commons-graph/) - General purpose graph APIs and algorithms.
- [I18n](http://commons.apache.org/sandbox/commons-i18n/) - Adds the feature of localized message bundles that consist of one or many localized texts that belong together.
- [Id](http://commons.apache.org/sandbox/commons-id/) - Id is a component used to generate identifiers.
- [Imaging](http://commons.apache.org/proper/commons-imaging/) - Image library.
- [IO](http://commons.apache.org/proper/commons-io/) - Collection of I/O utilities.
- [Javaflow](http://commons.apache.org/sandbox/commons-javaflow/) - Continuation implementation to capture the state of the application.
- [JCI](http://commons.apache.org/proper/commons-jci/) - Java Compiler Interface.
- [JCS](http://commons.apache.org/proper/commons-jcs/) - Java Caching System.
- [Jelly](http://commons.apache.org/proper/commons-jelly/) - XML based scripting and processing engine.
- [Jexl](http://commons.apache.org/proper/commons-jexl/) - Expression language which extends the Expression Language of the JSTL.
- [JNet](http://commons.apache.org/sandbox/commons-jnet/) - JNet allows to use dynamically register url stream handlers through the java.net API.
- [JXPath](http://commons.apache.org/proper/commons-jxpath/) - Utilities for manipulating Java Beans using the XPath syntax.
- [Lang](http://commons.apache.org/proper/commons-lang/) - Provides extra functionality for classes in java.lang.
- [Logging](https://commons.apache.org/proper/commons-logging/) - Wrapper around a variety of logging API implementations.
- [Math](http://commons.apache.org/proper/commons-math/) - Lightweight, self-contained mathematics and statistics components.
- [Monitoring](http://commons.apache.org/sandbox/commons-monitoring/) - Monitoring aims to provide a simple but extensible monitoring solution for Java applications.
- [Nabla](http://commons.apache.org/sandbox/commons-nabla/) - Nabla provides automatic differentiation classes that can generate derivative of any function implemented in the Java language.
- [Net](http://commons.apache.org/proper/commons-net/) - Collection of network utilities and protocol implementations.
- [OGNL](http://commons.apache.org/proper/commons-ognl/) - Object-graph navigation language.
- [OpenPGP](http://commons.apache.org/sandbox/commons-openpgp/) - Interface to signing and verifying data using OpenPGP.
- [Performance](http://commons.apache.org/sandbox/commons-performance/) - Small framework for microbenchmark clients, with implementations for Commons DBCP and Pool.
- [Pipeline](http://commons.apache.org/sandbox/commons-pipeline/) - Provides a set of pipeline utilities designed around work queues that run in parallel to sequentially process data objects.
- [Pool](http://commons.apache.org/proper/commons-pool/) - Generic object pooling component.
- [Proxy](http://commons.apache.org/proper/commons-proxy/) - Library for creating dynamic proxies.
- [RDF](https://commons.apache.org/proper/commons-rdf/) - Common implementation of RDF 1.1 that could be implemented by systems on the JVM.
- [RNG](https://commons.apache.org/proper/commons-rng/) - Commons Rng provides implementations of pseudo-random numbers generators.
- [SCXML](http://commons.apache.org/proper/commons-scxml/) - Implementation of the State Chart XML specification aimed at creating and maintaining a Java SCXML engine.
- [Validator](http://commons.apache.org/proper/commons-validator/) - Framework to define validators and validation rules in an xml file.
- [VFS](http://commons.apache.org/proper/commons-vfs/) - Virtual File System component for treating files, FTP, SMB, ZIP and such like as a single logical file system.
- [Weaver](http://commons.apache.org/proper/commons-weaver/) - Provides an easy way to enhance (weave) compiled bytecode.

#### Other

- [CUBA Platform](https://www.cuba-platform.com/) - High-level framework for developing enterprise applications with a rich web interface, based on Spring, EclipseLink and Vaadin.
- [Light-4J ![GitHub Repo Stars](https://img.shields.io/github/stars/networknt/light-4j) ![GitHub last commit](https://img.shields.io/github/last-commit/networknt/light-4j)](https://github.com/networknt/light-4j/) - Fast, lightweight and productive microservices framework with built-in [security ![GitHub Repo Stars](https://img.shields.io/github/stars/networknt/light-oauth2) ![GitHub last commit](https://img.shields.io/github/last-commit/networknt/light-oauth2)](https://github.com/networknt/light-oauth2/).
- [Orienteer ![GitHub Repo Stars](https://img.shields.io/github/stars/OrienteerBAP/Orienteer) ![GitHub last commit](https://img.shields.io/github/last-commit/OrienteerBAP/Orienteer)](https://github.com/OrienteerBAP/Orienteer/) - Open-source business application platform for rapid configuration/development of CRM, ERP, LMS and other applications.
- [Spring](https://spring.io/projects/) - Provides many packages for dependency injection, aspect-oriented programming, security, etc.

### Processes

_Libraries that help the management of operating system processes._

- [ch.vorburger.exec ![GitHub Repo Stars](https://img.shields.io/github/stars/vorburger/ch.vorburger.exec) ![GitHub last commit](https://img.shields.io/github/last-commit/vorburger/ch.vorburger.exec)](https://github.com/vorburger/ch.vorburger.exec) - Convenient API around Apache Commons Exec.
- [zt-exec ![GitHub Repo Stars](https://img.shields.io/github/stars/zeroturnaround/zt-exec) ![GitHub last commit](https://img.shields.io/github/last-commit/zeroturnaround/zt-exec)](https://github.com/zeroturnaround/zt-exec) - Provides a unified API to Apache Commons Exec and ProcessBuilder.
- [zt-process-killer ![GitHub Repo Stars](https://img.shields.io/github/stars/zeroturnaround/zt-process-killer) ![GitHub last commit](https://img.shields.io/github/last-commit/zeroturnaround/zt-process-killer)](https://github.com/zeroturnaround/zt-process-killer) - Stops processes started from Java or the system processes via PID.

### Reactive libraries

_Libraries for developing reactive applications._

- [Akka](https://akka.io) - Toolkit and runtime for building concurrent, distributed, fault-tolerant and event-driven applications.
- [Reactive Streams ![GitHub Repo Stars](https://img.shields.io/github/stars/reactive-streams/reactive-streams-jvm) ![GitHub last commit](https://img.shields.io/github/last-commit/reactive-streams/reactive-streams-jvm)](https://github.com/reactive-streams/reactive-streams-jvm) - Provides a standard for asynchronous stream processing with non-blocking backpressure.
- [Reactor ![GitHub Repo Stars](https://img.shields.io/github/stars/reactor/reactor-core) ![GitHub last commit](https://img.shields.io/github/last-commit/reactor/reactor-core)](https://github.com/reactor/reactor-core) - Library for building reactive fast-data applications.
- [RxJava ![GitHub Repo Stars](https://img.shields.io/github/stars/ReactiveX/RxJava) ![GitHub last commit](https://img.shields.io/github/last-commit/ReactiveX/RxJava)](https://github.com/ReactiveX/RxJava) - Allows for composing asynchronous and event-based programs using observable sequences.
- [vert.x](https://vertx.io) - Polyglot event-driven application framework.

### REST Frameworks

_Frameworks specifically for creating RESTful services._

- [Dropwizard ![GitHub Repo Stars](https://img.shields.io/github/stars/dropwizard/dropwizard) ![GitHub last commit](https://img.shields.io/github/last-commit/dropwizard/dropwizard)](https://github.com/dropwizard/dropwizard) - Opinionated framework for setting up modern web applications with Jetty, Jackson, Jersey and Metrics.
- [Elide](https://elide.io) - Opinionated framework for JSON- or GraphQL-APIs based on a JPA data model.
- [Jersey](https://jersey.github.io) - JAX-RS reference implementation.
- [Microserver ![GitHub Repo Stars](https://img.shields.io/github/stars/aol/micro-server) ![GitHub last commit](https://img.shields.io/github/last-commit/aol/micro-server)](https://github.com/aol/micro-server) - Convenient, extensible microservices plugin system for Spring & Spring Boot. With more than 30 plugins and growing, it supports both micro-monolith and pure microservices styles.
- [Rapidoid](https://www.rapidoid.org) - Simple, secure and extremely fast framework consisting of an embedded HTTP server, GUI components and dependency injection.
- [rest.li ![GitHub Repo Stars](https://img.shields.io/github/stars/linkedin/rest.li) ![GitHub last commit](https://img.shields.io/github/last-commit/linkedin/rest.li)](https://github.com/linkedin/rest.li) - Framework for building robust, scalable RESTful architectures using typesafe bindings and asynchronous, non-blocking IO with an end-to-end developer workflow that promotes clean practices, uniform interface design and consistent data modeling.
- [RESTEasy](https://resteasy.github.io) - Fully certified and portable implementation of the JAX-RS specification.
- [RestExpress ![GitHub Repo Stars](https://img.shields.io/github/stars/RestExpress/RestExpress) ![GitHub last commit](https://img.shields.io/github/last-commit/RestExpress/RestExpress)](https://github.com/RestExpress/RestExpress) - Thin wrapper on the JBoss Netty HTTP stack that provides scaling and performance.
- [Restlet Framework ![GitHub Repo Stars](https://img.shields.io/github/stars/restlet/restlet-framework-java) ![GitHub last commit](https://img.shields.io/github/last-commit/restlet/restlet-framework-java)](https://github.com/restlet/restlet-framework-java) - Pioneering framework with powerful routing and filtering capabilities, and a unified client and server API.
- [Spark](http://sparkjava.com) - Sinatra inspired framework.
- [Crnk](http://www.crnk.io) - Implementation of the JSON API specification to build resource-oriented REST endpoints with sorting, filtering, paging, linking, object graphs, type-safety, bulk updates, integrations and more.
- [springdoc-openapi ![GitHub Repo Stars](https://img.shields.io/github/stars/springdoc/springdoc-openapi) ![GitHub last commit](https://img.shields.io/github/last-commit/springdoc/springdoc-openapi)](https://github.com/springdoc/springdoc-openapi) - Automates the generation of API documentation using Spring Boot projects.
- [Swagger](https://swagger.io) - Standard, language-agnostic interface to REST APIs.

### Science

_Libraries for scientific computing, analysis and visualization._

- [BioJava](https://biojava.org/) - Facilitates processing biological data by providing algorithms, file format parsers, sequencing and 3D visualization commonly used in bioinformatics.
- [Chart-FX ![GitHub Repo Stars](https://img.shields.io/github/stars/GSI-CS-CO/chart-fx) ![GitHub last commit](https://img.shields.io/github/last-commit/GSI-CS-CO/chart-fx)](https://github.com/GSI-CS-CO/chart-fx) - Scientific charting library with focus on performance optimised real-time data visualisation at 25 Hz update rates for large data sets.
- [DataMelt](https://datamelt.org/) - Environment for scientific computation, data analysis and data visualization. (GPL-3.0-or-later)
- [Erdos ![GitHub Repo Stars](https://img.shields.io/github/stars/Erdos-Graph-Framework/Erdos) ![GitHub last commit](https://img.shields.io/github/last-commit/Erdos-Graph-Framework/Erdos)](https://github.com/Erdos-Graph-Framework/Erdos) - Modular, light and easy graph framework for theoretic algorithms.
- [GraphStream](http://graphstream-project.org) - Library for modeling and analyzing dynamic graphs.
- [JFreeChart](http://www.jfree.org/jfreechart/) - 2D chart library for Swing, JavaFX and server-side applications. (LGPL-2.1-only)
- [JGraphT ![GitHub Repo Stars](https://img.shields.io/github/stars/jgrapht/jgrapht) ![GitHub last commit](https://img.shields.io/github/last-commit/jgrapht/jgrapht)](https://github.com/jgrapht/jgrapht) - Graph library that provides mathematical graph-theory objects and algorithms.
- [JGraphX ![GitHub Repo Stars](https://img.shields.io/github/stars/jgraph/jgraphx) ![GitHub last commit](https://img.shields.io/github/last-commit/jgraph/jgraphx)](https://github.com/jgraph/jgraphx) - Library for visualizing (mainly Swing) and interacting with node-edge graphs.
- [LogicNG ![GitHub Repo Stars](https://img.shields.io/github/stars/logic-ng/LogicNG) ![GitHub last commit](https://img.shields.io/github/last-commit/logic-ng/LogicNG)](https://github.com/logic-ng/LogicNG) - Library for creating, manipulating and solving Boolean and Pseudo-Boolean formulas.
- [Mines Java Toolkit ![GitHub Repo Stars](https://img.shields.io/github/stars/MinesJTK/jtk) ![GitHub last commit](https://img.shields.io/github/last-commit/MinesJTK/jtk)](https://github.com/MinesJTK/jtk) - Library for geophysical scientific computation, visualization and digital signal analysis.
- [Morpheus ![GitHub Repo Stars](https://img.shields.io/github/stars/zavtech/morpheus-core) ![GitHub last commit](https://img.shields.io/github/last-commit/zavtech/morpheus-core)](https://github.com/zavtech/morpheus-core) - Provides a versatile two-dimensional memory efficient tabular data structure called a DataFrame to enable efficient in-memory analytics for scientific computing on the JVM.
- [Orson-Charts ![GitHub Repo Stars](https://img.shields.io/github/stars/jfree/orson-charts) ![GitHub last commit](https://img.shields.io/github/last-commit/jfree/orson-charts)](https://github.com/jfree/orson-charts) - Generates a wide variety of 3D charts that can be displayed with Swing and JavaFX or exported to PDF, SVG, PNG and JPEG. (GPL-3.0-only)
- [Tablesaw ![GitHub Repo Stars](https://img.shields.io/github/stars/jtablesaw/tablesaw) ![GitHub last commit](https://img.shields.io/github/last-commit/jtablesaw/tablesaw)](https://github.com/jtablesaw/tablesaw) - Includes a data-frame, an embedded column store, and hundreds of methods to transform, summarize, or filter data.
- [XChart ![GitHub Repo Stars](https://img.shields.io/github/stars/knowm/XChart) ![GitHub last commit](https://img.shields.io/github/last-commit/knowm/XChart)](https://github.com/knowm/XChart) - Light-weight library for plotting data. Many customizable chart types are available.

### Search

_Engines that index documents for search and analysis._

- [Apache Lucene](https://lucene.apache.org) - High-performance, full-featured, cross-platform, text search engine library.
- [Apache Solr](https://lucene.apache.org/solr/) - Enterprise search engine optimized for high-volume traffic.
- [Elasticsearch](https://www.elastic.co) - Distributed, multitenant-capable, full-text search engine with a RESTful web interface and schema-free JSON documents.
- [Indexer4j ![GitHub Repo Stars](https://img.shields.io/github/stars/haeungun/indexer4j) ![GitHub last commit](https://img.shields.io/github/last-commit/haeungun/indexer4j)](https://github.com/haeungun/indexer4j) - Simple and light full text indexing and searching library.

### Security

_Libraries that handle security, authentication, authorization or session management._

- [Apache Shiro](https://shiro.apache.org) - Performs authentication, authorization, cryptography and session management.
- [Bouncy Castle](https://www.bouncycastle.org/java.html) - All-purpose cryptographic library and JCA provider offering a wide range of functions, from basic helpers to PGP/SMIME operations.
- [DependencyCheck ![GitHub Repo Stars](https://img.shields.io/github/stars/jeremylong/DependencyCheck) ![GitHub last commit](https://img.shields.io/github/last-commit/jeremylong/DependencyCheck)](https://github.com/jeremylong/DependencyCheck) - Detects publicly disclosed vulnerabilities contained within a project's dependencies.
- [Cryptomator](https://cryptomator.org) - Multiplatform, transparent, client-side encryption of files in the cloud. (GPL-3.0-only)
- [Hdiv ![GitHub Repo Stars](https://img.shields.io/github/stars/hdiv/hdiv) ![GitHub last commit](https://img.shields.io/github/last-commit/hdiv/hdiv)](https://github.com/hdiv/hdiv) - Runtime application that repels application security risks included in the OWASP Top 10, including SQL injection, cross-site scripting, cross-site request forgery, data tampering, and brute force attacks.
- [jjwt ![GitHub Repo Stars](https://img.shields.io/github/stars/jwtk/jjwt) ![GitHub last commit](https://img.shields.io/github/last-commit/jwtk/jjwt)](https://github.com/jwtk/jjwt) - JSON web token for Java and Android.
- [jwt-java ![GitHub Repo Stars](https://img.shields.io/github/stars/BastiaanJansen/jwt-java) ![GitHub last commit](https://img.shields.io/github/last-commit/BastiaanJansen/jwt-java)](https://github.com/BastiaanJansen/jwt-java) - Easily create and parse JSON Web Tokens and create customized JWT validators using a fluent API.
- [Jwks RSA ![GitHub Repo Stars](https://img.shields.io/github/stars/auth0/jwks-rsa-java) ![GitHub last commit](https://img.shields.io/github/last-commit/auth0/jwks-rsa-java)](https://github.com/auth0/jwks-rsa-java) - JSON Web Key Set parser.
- [Kalium ![GitHub Repo Stars](https://img.shields.io/github/stars/abstractj/kalium) ![GitHub last commit](https://img.shields.io/github/last-commit/abstractj/kalium)](https://github.com/abstractj/kalium) - Binding for the Networking and Cryptography (NaCl) library.
- [Keycloak](https://www.keycloak.org) - Integrated SSO and IDM for browser apps and RESTful web services.
- [Keywhiz ![GitHub Repo Stars](https://img.shields.io/github/stars/square/keywhiz) ![GitHub last commit](https://img.shields.io/github/last-commit/square/keywhiz)](https://github.com/square/keywhiz) - System for distributing and managing secrets.
- [Nbvcxz ![GitHub Repo Stars](https://img.shields.io/github/stars/GoSimpleLLC/nbvcxz) ![GitHub last commit](https://img.shields.io/github/last-commit/GoSimpleLLC/nbvcxz)](https://github.com/GoSimpleLLC/nbvcxz) - Advanced password strength estimation.
- [OACC](http://oaccframework.org) - Provides permission-based authorization services.
- [OpenAM ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenIdentityPlatform/OpenAM) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenIdentityPlatform/OpenAM)](https://github.com/OpenIdentityPlatform/OpenAM) - Access management solution that includes authentication, SSO, authorization, federation, entitlements and web services security.
- [OTP-Java ![GitHub Repo Stars](https://img.shields.io/github/stars/BastiaanJansen/OTP-Java) ![GitHub last commit](https://img.shields.io/github/last-commit/BastiaanJansen/OTP-Java)](https://github.com/BastiaanJansen/OTP-Java) - One-time password generator library according to RFC 4226 (HOTP) and RFC 6238 (TOTP).
- [pac4j ![GitHub Repo Stars](https://img.shields.io/github/stars/pac4j/pac4j) ![GitHub last commit](https://img.shields.io/github/last-commit/pac4j/pac4j)](https://github.com/pac4j/pac4j) - Security engine.
- [Passay](http://www.passay.org/) - Enforce password policy by validating candidate passwords against a configurable rule set.
- [Password4j ![GitHub Repo Stars](https://img.shields.io/github/stars/Password4j/password4j) ![GitHub last commit](https://img.shields.io/github/last-commit/Password4j/password4j)](https://github.com/Password4j/password4j) - User-friendly cryptographic library that supports Argon2, Bcrypt, Scrypt, PBKDF2 and various other cryptographic hash functions.
- [SecurityBuilder ![GitHub Repo Stars](https://img.shields.io/github/stars/tersesystems/securitybuilder) ![GitHub last commit](https://img.shields.io/github/last-commit/tersesystems/securitybuilder)](https://github.com/tersesystems/securitybuilder) - Fluent Builder API for JCA and JSSE classes and especially X.509 certificates.
- [SSLContext-Kickstart ![GitHub Repo Stars](https://img.shields.io/github/stars/Hakky54/sslcontext-kickstart) ![GitHub last commit](https://img.shields.io/github/last-commit/Hakky54/sslcontext-kickstart)](https://github.com/Hakky54/sslcontext-kickstart) - High-level SSL context builder for configuring HTTP clients with SSL/TLS.
- [Themis ![GitHub Repo Stars](https://img.shields.io/github/stars/cossacklabs/themis) ![GitHub last commit](https://img.shields.io/github/last-commit/cossacklabs/themis)](https://github.com/cossacklabs/themis) - Multi-platform high-level cryptographic library provides easy-to-use encryption for protecting sensitive data: secure messaging with forward secrecy, secure data storage (AES256GCM); suits for building end-to-end encrypted applications.
- [Tink ![GitHub Repo Stars](https://img.shields.io/github/stars/google/tink) ![GitHub last commit](https://img.shields.io/github/last-commit/google/tink)](https://github.com/google/tink) - Provides a simple and misuse-proof API for common cryptographic tasks.
- [Topaz](https://www.topaz.sh) - Fine-grained authorization for applications with support for RBAC, ABAC, and ReBAC. 

### Serialization

_Libraries that handle serialization with high efficiency._

- [FlatBuffers ![GitHub Repo Stars](https://img.shields.io/github/stars/google/flatbuffers) ![GitHub last commit](https://img.shields.io/github/last-commit/google/flatbuffers)](https://github.com/google/flatbuffers) - Memory-efficient serialization library that can access serialized data without unpacking and parsing it.
- [FST ![GitHub Repo Stars](https://img.shields.io/github/stars/RuedigerMoeller/fast-serialization) ![GitHub last commit](https://img.shields.io/github/last-commit/RuedigerMoeller/fast-serialization)](https://github.com/RuedigerMoeller/fast-serialization) - JDK-compatible, high-performance object graph serialization.
- [Kryo ![GitHub Repo Stars](https://img.shields.io/github/stars/EsotericSoftware/kryo) ![GitHub last commit](https://img.shields.io/github/last-commit/EsotericSoftware/kryo)](https://github.com/EsotericSoftware/kryo) - Fast and efficient object graph serialization framework.
- [MessagePack ![GitHub Repo Stars](https://img.shields.io/github/stars/msgpack/msgpack-java) ![GitHub last commit](https://img.shields.io/github/last-commit/msgpack/msgpack-java)](https://github.com/msgpack/msgpack-java) - Efficient binary serialization format.
- [PHP Serializer ![GitHub Repo Stars](https://img.shields.io/github/stars/marcospassos/java-php-serializer) ![GitHub last commit](https://img.shields.io/github/last-commit/marcospassos/java-php-serializer)](https://github.com/marcospassos/java-php-serializer) - Serializing objects in the PHP serialization format.

### Server

_Servers specifically used to deploy applications._

- [Apache Tomcat](https://tomcat.apache.org) - Robust, all-round server for Servlet and JSP.
- [Apache TomEE](https://tomee.apache.org) - Tomcat plus Java EE.
- [Jetty](https://www.eclipse.org/jetty/) - Provides a Web server and javax.servlet container, plus support for HTTP/2, WebSocket, OSGi, JMX, JNDI, JAAS and many other integrations.
- [nanohttpd ![GitHub Repo Stars](https://img.shields.io/github/stars/NanoHttpd/nanohttpd) ![GitHub last commit](https://img.shields.io/github/last-commit/NanoHttpd/nanohttpd)](https://github.com/NanoHttpd/nanohttpd) - Tiny, easily embeddable HTTP server.
- [WildFly](https://www.wildfly.org) - Formerly known as JBoss and developed by Red Hat with extensive Java EE support. (LGPL-2.1-only)

### Template Engine

_Tools that substitute expressions in a template._

- [Freemarker](https://freemarker.apache.org) - Library to generate text output (HTML web pages, e-mails, configuration files, source code, etc.) based on templates and changing data.
- [Handlebars.java](https://jknack.github.io/handlebars.java/) - Logicless and semantic Mustache templates.
- [Jade4J ![GitHub Repo Stars](https://img.shields.io/github/stars/neuland/jade4j) ![GitHub last commit](https://img.shields.io/github/last-commit/neuland/jade4j)](https://github.com/neuland/jade4j) - Implementation of Pug (formerly known as Jade).
- [Jamal ![GitHub Repo Stars](https://img.shields.io/github/stars/verhas/jamal) ![GitHub last commit](https://img.shields.io/github/last-commit/verhas/jamal)](https://github.com/verhas/jamal) - Extendable template engine embedded into Maven/JavaDoc, supporting multiple extensions (Groovy, Ruby, JavaScript, JShell, PlantUml) with support for snippet handling.
- [jstachio ![GitHub Repo Stars](https://img.shields.io/github/stars/jstachio/jstachio) ![GitHub last commit](https://img.shields.io/github/last-commit/jstachio/jstachio)](https://github.com/jstachio/jstachio) - Typesafe Mustache templating engine.
- [jte ![GitHub Repo Stars](https://img.shields.io/github/stars/casid/jte) ![GitHub last commit](https://img.shields.io/github/last-commit/casid/jte)](https://github.com/casid/jte) - Compiles to classes, and uses an easy syntax, several features to make development easier and provides fast execution and a small footprint.
- [Jtwig ![GitHub Repo Stars](https://img.shields.io/github/stars/jtwig/jtwig) ![GitHub last commit](https://img.shields.io/github/last-commit/jtwig/jtwig)](https://github.com/jtwig/jtwig) - Modular, configurable and fully tested template engine.
- [Pebble](https://pebbletemplates.io) - Inspired by Twig and separates itself with its inheritance feature and its easy-to-read syntax. It ships with built-in autoescaping for security and it includes integrated support for internationalization.
- [Rocker ![GitHub Repo Stars](https://img.shields.io/github/stars/fizzed/rocker) ![GitHub last commit](https://img.shields.io/github/last-commit/fizzed/rocker)](https://github.com/fizzed/rocker) - Optimized, memory efficient and speedy template engine producing statically typed, plain objects.
- [StringTemplate ![GitHub Repo Stars](https://img.shields.io/github/stars/antlr/stringtemplate4) ![GitHub last commit](https://img.shields.io/github/last-commit/antlr/stringtemplate4)](https://github.com/antlr/stringtemplate4) - Template engine for generating source code, web pages, emails, or any other formatted text output.
- [Thymeleaf](https://www.thymeleaf.org) - Aims to be a substitute for JSP and works for XML files.

### Testing

_Tools that test from model to the view._

#### Asynchronous

_Tools that simplify testing asynchronous services._

- [Awaitility ![GitHub Repo Stars](https://img.shields.io/github/stars/awaitility/awaitility) ![GitHub last commit](https://img.shields.io/github/last-commit/awaitility/awaitility)](https://github.com/awaitility/awaitility) - DSL for synchronizing asynchronous operations.
- [ConcurrentUnit ![GitHub Repo Stars](https://img.shields.io/github/stars/jhalterman/concurrentunit) ![GitHub last commit](https://img.shields.io/github/last-commit/jhalterman/concurrentunit)](https://github.com/jhalterman/concurrentunit) - Toolkit for testing multi-threaded and asynchronous applications.
- [GreenMail](http://www.icegreen.com/greenmail/) - In-memory email server for integration testing. Supports SMTP, POP3 and IMAP including SSL. (GPL-2.0-only)
- [Hoverfly Java ![GitHub Repo Stars](https://img.shields.io/github/stars/SpectoLabs/hoverfly-java) ![GitHub last commit](https://img.shields.io/github/last-commit/SpectoLabs/hoverfly-java)](https://github.com/SpectoLabs/hoverfly-java) - Native bindings for Hoverfly, a proxy which allows you to simulate HTTP services.
- [Karate ![GitHub Repo Stars](https://img.shields.io/github/stars/intuit/karate) ![GitHub last commit](https://img.shields.io/github/last-commit/intuit/karate)](https://github.com/intuit/karate) - DSL that combines API test-automation, mocks and performance-testing making testing REST/HTTP services easy.
- [REST Assured ![GitHub Repo Stars](https://img.shields.io/github/stars/rest-assured/rest-assured) ![GitHub last commit](https://img.shields.io/github/last-commit/rest-assured/rest-assured)](https://github.com/rest-assured/rest-assured) - DSL for easy testing of REST/HTTP services.
- [WebTau ![GitHub Repo Stars](https://img.shields.io/github/stars/testingisdocumenting/webtau) ![GitHub last commit](https://img.shields.io/github/last-commit/testingisdocumenting/webtau)](https://github.com/testingisdocumenting/webtau) - Test across REST-API, Graph QL, Browser, Database, CLI and Business Logic with consistent set of matchers and concepts.

#### BDD

_Testing for the software development process that emerged from TDD and was heavily influenced by DDD and OOAD._

- [Cucumber ![GitHub Repo Stars](https://img.shields.io/github/stars/cucumber/cucumber-jvm) ![GitHub last commit](https://img.shields.io/github/last-commit/cucumber/cucumber-jvm)](https://github.com/cucumber/cucumber-jvm) - Provides a way to describe features in a plain language which customers can understand.
- [Cukes-REST ![GitHub Repo Stars](https://img.shields.io/github/stars/ctco/cukes) ![GitHub last commit](https://img.shields.io/github/last-commit/ctco/cukes)](https://github.com/ctco/cukes) - Collection of Gherkin steps for REST-service testing using Cucumber.
- [J8Spec ![GitHub Repo Stars](https://img.shields.io/github/stars/j8spec/j8spec) ![GitHub last commit](https://img.shields.io/github/last-commit/j8spec/j8spec)](https://github.com/j8spec/j8spec) - Follows a Jasmine-like syntax.
- [JBehave](https://jbehave.org) - Extensively configurable framework that describes stories.
- [JGiven](http://jgiven.org) - Provides a fluent API which allows for simpler composition.
- [Lamdba Behave ![GitHub Repo Stars](https://img.shields.io/github/stars/RichardWarburton/lambda-behave) ![GitHub last commit](https://img.shields.io/github/last-commit/RichardWarburton/lambda-behave)](https://github.com/RichardWarburton/lambda-behave) - Aims to provide a fluent API to write tests in long and descriptive sentences that read like plain English.
- [Serenity BDD ![GitHub Repo Stars](https://img.shields.io/github/stars/serenity-bdd/serenity-core) ![GitHub last commit](https://img.shields.io/github/last-commit/serenity-bdd/serenity-core)](https://github.com/serenity-bdd/serenity-core) - Automated Acceptance testing and reporting library that works with Cucumber, JBehave and JUnit to make it easier to write high quality executable specifications.

#### Fixtures

_Everything related to the creation and handling of random data._

- [Beanmother ![GitHub Repo Stars](https://img.shields.io/github/stars/keepcosmos/beanmother) ![GitHub last commit](https://img.shields.io/github/last-commit/keepcosmos/beanmother)](https://github.com/keepcosmos/beanmother) - Sets up beans from YAML fixtures.
- [Fixture Factory ![GitHub Repo Stars](https://img.shields.io/github/stars/six2six/fixture-factory) ![GitHub last commit](https://img.shields.io/github/last-commit/six2six/fixture-factory)](https://github.com/six2six/fixture-factory) - Generates fake objects from a template.
- [jFairy ![GitHub Repo Stars](https://img.shields.io/github/stars/Devskiller/jfairy) ![GitHub last commit](https://img.shields.io/github/last-commit/Devskiller/jfairy)](https://github.com/Devskiller/jfairy) - Fake data generator.
- [Instancio ![GitHub Repo Stars](https://img.shields.io/github/stars/instancio/instancio) ![GitHub last commit](https://img.shields.io/github/last-commit/instancio/instancio)](https://github.com/instancio/instancio) - Automates data setup in unit tests by generating fully-populated, reproducible objects. Includes JUnit 5 extension.
- [Randomized Testing ![GitHub Repo Stars](https://img.shields.io/github/stars/randomizedtesting/randomizedtesting) ![GitHub last commit](https://img.shields.io/github/last-commit/randomizedtesting/randomizedtesting)](https://github.com/randomizedtesting/randomizedtesting) - JUnit test runner and plugins for running JUnit tests with pseudo-randomness.
- [Java Faker ![GitHub Repo Stars](https://img.shields.io/github/stars/DiUS/java-faker) ![GitHub last commit](https://img.shields.io/github/last-commit/DiUS/java-faker)](https://github.com/DiUS/java-faker) - Port of Ruby's fake data generator.
- [Mockneat ![GitHub Repo Stars](https://img.shields.io/github/stars/nomemory/mockneat) ![GitHub last commit](https://img.shields.io/github/last-commit/nomemory/mockneat)](https://github.com/nomemory/mockneat) - Another fake data generator.

#### Frameworks

_Provide environments to run tests for a specific use case._

- [ArchUnit ![GitHub Repo Stars](https://img.shields.io/github/stars/TNG/ArchUnit) ![GitHub last commit](https://img.shields.io/github/last-commit/TNG/ArchUnit)](https://github.com/TNG/ArchUnit) - Test library for specifying and asserting architecture rules.
- [Apache JMeter](http://jmeter.apache.org) - Functional testing and performance measurements.
- [Arquillian](http://arquillian.org) - Integration and functional testing platform for Java EE containers.
- [Citrus](https://citrusframework.org) - Integration testing framework that focuses on both client- and server-side messaging.
- [Gatling](https://gatling.io) - Load testing tool designed for ease of use, maintainability and high performance.
- [JUnit](https://junit.org/junit5/) - Common testing framework.
- [jqwik](https://jqwik.net) - Engine for property-based testing built on JUnit 5.
- [Pact JVM ![GitHub Repo Stars](https://img.shields.io/github/stars/DiUS/pact-jvm) ![GitHub last commit](https://img.shields.io/github/last-commit/DiUS/pact-jvm)](https://github.com/DiUS/pact-jvm) - Consumer-driven contract testing.
- [PIT](http://pitest.org) - Fast mutation-testing framework for evaluating fault-detection abilities of existing JUnit or TestNG test suites.

#### Matchers

_Libraries that provide custom matchers._

- [AssertJ](https://joel-costigliola.github.io/assertj/) - Fluent assertions that improve readability.
- [Hamcrest](http://hamcrest.org/JavaHamcrest/) - Matchers that can be combined to create flexible expressions of intent.
- [JSONAssert](http://jsonassert.skyscreamer.org) - Simplifies testing JSON strings.
- [JsonUnit ![GitHub Repo Stars](https://img.shields.io/github/stars/lukas-krecan/JsonUnit) ![GitHub last commit](https://img.shields.io/github/last-commit/lukas-krecan/JsonUnit)](https://github.com/lukas-krecan/JsonUnit) - Library that simplifies JSON comparison in tests.
- [Truth](https://truth.dev) - Google's fluent assertion and proposition framework.
- [XMLUnit ![GitHub Repo Stars](https://img.shields.io/github/stars/xmlunit/xmlunit) ![GitHub last commit](https://img.shields.io/github/last-commit/xmlunit/xmlunit)](https://github.com/xmlunit/xmlunit) - Simplifies testing for XML output.

#### Miscellaneous

_Other stuff related to testing._

- [ConsoleCaptor ![GitHub Repo Stars](https://img.shields.io/github/stars/Hakky54/console-captor) ![GitHub last commit](https://img.shields.io/github/last-commit/Hakky54/console-captor)](https://github.com/Hakky54/console-captor) - Captures console output for unit testing purposes.
- [junit-dataprovider ![GitHub Repo Stars](https://img.shields.io/github/stars/TNG/junit-dataprovider) ![GitHub last commit](https://img.shields.io/github/last-commit/TNG/junit-dataprovider)](https://github.com/TNG/junit-dataprovider) - TestNG-like data provider/runner for JUnit.
- [LogCaptor ![GitHub Repo Stars](https://img.shields.io/github/stars/Hakky54/log-captor) ![GitHub last commit](https://img.shields.io/github/last-commit/Hakky54/log-captor)](https://github.com/Hakky54/log-captor) - Captures log entries for unit testing purposes.
- [log-capture ![GitHub Repo Stars](https://img.shields.io/github/stars/dm-drogeriemarkt/log-capture) ![GitHub last commit](https://img.shields.io/github/last-commit/dm-drogeriemarkt/log-capture)](https://github.com/dm-drogeriemarkt/log-capture) - Captures log entries and provides assertions for unit and integration testing.
- [Mutability Detector ![GitHub Repo Stars](https://img.shields.io/github/stars/MutabilityDetector/MutabilityDetector) ![GitHub last commit](https://img.shields.io/github/last-commit/MutabilityDetector/MutabilityDetector)](https://github.com/MutabilityDetector/MutabilityDetector) - Reports whether instances of a given class are immutable.
- [raml-tester ![GitHub Repo Stars](https://img.shields.io/github/stars/nidi3/raml-tester) ![GitHub last commit](https://img.shields.io/github/last-commit/nidi3/raml-tester)](https://github.com/nidi3/raml-tester) - Tests if a request/response matches a given RAML definition.
- [TestContainers ![GitHub Repo Stars](https://img.shields.io/github/stars/testcontainers/testcontainers-java) ![GitHub last commit](https://img.shields.io/github/last-commit/testcontainers/testcontainers-java)](https://github.com/testcontainers/testcontainers-java) - Provides throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container.
- [pojo-tester](https://www.pojo.pl) - Automatically performs tests on basic POJO methods. (LGPL-3.0-only)

#### Mocking

_Tools which mock collaborators to help testing single, isolated units._

- [JMockit](http://jmockit.github.io) - Integration testing, API mocking and faking, and code coverage.
- [Mockito ![GitHub Repo Stars](https://img.shields.io/github/stars/mockito/mockito) ![GitHub last commit](https://img.shields.io/github/last-commit/mockito/mockito)](https://github.com/mockito/mockito) - Mocking framework that lets you write tests with a clean and simple API.
- [MockServer](https://www.mock-server.com) - Allows mocking of systems integrated with HTTPS.
- [Moco ![GitHub Repo Stars](https://img.shields.io/github/stars/dreamhead/moco) ![GitHub last commit](https://img.shields.io/github/last-commit/dreamhead/moco)](https://github.com/dreamhead/moco) - Concise web services for stubs and mocks.
- [PowerMock ![GitHub Repo Stars](https://img.shields.io/github/stars/powermock/powermock) ![GitHub last commit](https://img.shields.io/github/last-commit/powermock/powermock)](https://github.com/powermock/powermock) - Mocks static methods, constructors, final classes and methods, private methods, and removal of static initializers.
- [WireMock](http://wiremock.org) - Stubs and mocks web services.

### Utility

_Libraries which provide general utility functions._

- [Arthas ![GitHub Repo Stars](https://img.shields.io/github/stars/alibaba/arthas) ![GitHub last commit](https://img.shields.io/github/last-commit/alibaba/arthas)](https://github.com/alibaba/arthas) - Allows to troubleshoot production issues for applications without modifying code or restarting servers.
- [bucket4j ![GitHub Repo Stars](https://img.shields.io/github/stars/vladimir-bukhtoyarov/bucket4j) ![GitHub last commit](https://img.shields.io/github/last-commit/vladimir-bukhtoyarov/bucket4j)](https://github.com/vladimir-bukhtoyarov/bucket4j) - Rate limiting library based on token-bucket algorithm.
- [cactoos ![GitHub Repo Stars](https://img.shields.io/github/stars/yegor256/cactoos) ![GitHub last commit](https://img.shields.io/github/last-commit/yegor256/cactoos)](https://github.com/yegor256/cactoos) - Collection of object-oriented primitives.
- [Chocotea ![GitHub Repo Stars](https://img.shields.io/github/stars/cleopatra27/chocotea) ![GitHub last commit](https://img.shields.io/github/last-commit/cleopatra27/chocotea)](https://github.com/cleopatra27/chocotea) - Generates postman collection, environment and integration tests from java code.
- [CRaSH](http://www.crashub.org) - Provides a shell into a JVM that's running CRaSH. Used by Spring Boot and others. (LGPL-2.1-or-later)
- [Dex ![GitHub Repo Stars](https://img.shields.io/github/stars/PatMartin/Dex) ![GitHub last commit](https://img.shields.io/github/last-commit/PatMartin/Dex)](https://github.com/PatMartin/Dex) - Java/JavaFX tool capable of powerful ETL and data visualization.
- [Embulk ![GitHub Repo Stars](https://img.shields.io/github/stars/embulk/embulk) ![GitHub last commit](https://img.shields.io/github/last-commit/embulk/embulk)](https://github.com/embulk/embulk) - Bulk data loader that helps data transfer between various databases, storages, file formats, and cloud services.
- [fswatch ![GitHub Repo Stars](https://img.shields.io/github/stars/vorburger/ch.vorburger.fswatch) ![GitHub last commit](https://img.shields.io/github/last-commit/vorburger/ch.vorburger.fswatch)](https://github.com/vorburger/ch.vorburger.fswatch) - Micro library to watch for directory file system changes, simplifying java.nio.file.WatchService.
- [Gephi ![GitHub Repo Stars](https://img.shields.io/github/stars/gephi/gephi) ![GitHub last commit](https://img.shields.io/github/last-commit/gephi/gephi)](https://github.com/gephi/gephi) - Cross-platform for visualizing and manipulating large graph networks. (GPL-3.0-only)
- [Guava ![GitHub Repo Stars](https://img.shields.io/github/stars/google/guava) ![GitHub last commit](https://img.shields.io/github/last-commit/google/guava)](https://github.com/google/guava) - Collections, caching, primitives support, concurrency libraries, common annotations, string processing, I/O, and more.
- [JADE](http://jade.tilab.com) - Framework and environment for building and debugging multi-agent systems. (LGPL-2.0-only)
- [Java Diff Utils](https://java-diff-utils.github.io/java-diff-utils/) - Utilities for text or data comparison and patching.
- [JavaVerbalExpressions ![GitHub Repo Stars](https://img.shields.io/github/stars/VerbalExpressions/JavaVerbalExpressions) ![GitHub last commit](https://img.shields.io/github/last-commit/VerbalExpressions/JavaVerbalExpressions)](https://github.com/VerbalExpressions/JavaVerbalExpressions) - Library that helps with constructing difficult regular expressions.
- [JGit](https://www.eclipse.org/jgit/) - Lightweight, pure Java library implementing the Git version control system.
- [minio-java ![GitHub Repo Stars](https://img.shields.io/github/stars/minio/minio-java) ![GitHub last commit](https://img.shields.io/github/last-commit/minio/minio-java)](https://github.com/minio/minio-java) - Provides simple APIs to access any Amazon S3-compatible object storage server.
- [Protégé](https://protege.stanford.edu) - Provides an ontology editor and a framework to build knowledge-based systems.
- [Underscore-java ![GitHub Repo Stars](https://img.shields.io/github/stars/javadev/underscore-java) ![GitHub last commit](https://img.shields.io/github/last-commit/javadev/underscore-java)](https://github.com/javadev/underscore-java) - Port of Underscore.js functions.

### Version Managers

_Utilities that help create the development shell environment and switch between different Java versions._

- [jabba ![GitHub Repo Stars](https://img.shields.io/github/stars/shyiko/jabba) ![GitHub last commit](https://img.shields.io/github/last-commit/shyiko/jabba)](https://github.com/shyiko/jabba) - Java Version Manager inspired by nvm. Supports macOS, Linux and Windows.
- [jenv ![GitHub Repo Stars](https://img.shields.io/github/stars/jenv/jenv) ![GitHub last commit](https://img.shields.io/github/last-commit/jenv/jenv)](https://github.com/jenv/jenv) - Java Version Manager inspired by rbenv. Can configure globally or per project. Tested on Debian and macOS.
- [SDKMan ![GitHub Repo Stars](https://img.shields.io/github/stars/sdkman/sdkman-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/sdkman/sdkman-cli)](https://github.com/sdkman/sdkman-cli) - Java Version Manager inspired by RVM and rbenv. Supports UNIX-based platforms and Windows.

### Web Crawling

_Libraries that analyze the content of websites._

- [Apache Nutch](https://nutch.apache.org) - Highly extensible, highly scalable web crawler for production environments.
- [Crawler4j ![GitHub Repo Stars](https://img.shields.io/github/stars/yasserg/crawler4j) ![GitHub last commit](https://img.shields.io/github/last-commit/yasserg/crawler4j)](https://github.com/yasserg/crawler4j) - Simple and lightweight web crawler.
- [jsoup](https://jsoup.org) - Scrapes, parses, manipulates and cleans HTML.
- [StormCrawler](http://stormcrawler.net) - SDK for building low-latency and scalable web crawlers.
- [webmagic ![GitHub Repo Stars](https://img.shields.io/github/stars/code4craft/webmagic) ![GitHub last commit](https://img.shields.io/github/last-commit/code4craft/webmagic)](https://github.com/code4craft/webmagic) - Scalable crawler with downloading, url management, content extraction and persistent.

### Web Frameworks

_Frameworks that handle the communication between the layers of a web application._

- [ActiveJ](https://activej.io) - Lightweight asynchronous framework built from the ground up for developing high-performance web applications.
- [Apache Tapestry](https://tapestry.apache.org) - Component-oriented framework for creating dynamic, robust, highly scalable web applications.
- [Apache Wicket](https://wicket.apache.org) - Component-based web application framework similar to Tapestry, with a stateful GUI.
- [Blade ![GitHub Repo Stars](https://img.shields.io/github/stars/lets-blade/blade) ![GitHub last commit](https://img.shields.io/github/last-commit/lets-blade/blade)](https://github.com/lets-blade/blade) - Lightweight, modular framework that aims to be elegant and simple.
- [Bootique](https://bootique.io) - Minimally opinionated framework for runnable apps.
- [Firefly](http://www.fireflysource.com) - Asynchronous framework for rapid development of high-performance web application.
- [Javalin](https://javalin.io/) - Microframework for web applications.
- [Jooby](http://www.jooby.org) - Scalable, fast and modular micro-framework that offers multiple programming models.
- [Ninja](http://www.ninjaframework.org) - Full-stack web framework.
- [Pippo](http://www.pippo.ro) - Small, highly modularized, Sinatra-like framework.
- [Play](https://www.playframework.com) - Built on Akka, it provides predictable and minimal resource consumption (CPU, memory, threads) for highly-scalable applications in Java and Scala.
- [PrimeFaces](https://www.primefaces.org) - JSF framework with both free and commercial/support versions and frontend components.
- [Ratpack](https://ratpack.io) - Set of libraries that facilitate fast, efficient, evolvable and well-tested HTTP applications.
- [Takes ![GitHub Repo Stars](https://img.shields.io/github/stars/yegor256/takes) ![GitHub last commit](https://img.shields.io/github/last-commit/yegor256/takes)](https://github.com/yegor256/takes) - Opinionated web framework which is built around the concepts of True Object-Oriented Programming and immutability.
- [Vaadin](https://vaadin.com) - Event-driven framework that uses standard web components. Server-side architecture with Ajax on the client side.

### Workflow Orchestration Engines

- [Cadence](https://cadenceworkflow.io) - Stateful code platform from Uber.
- [flowable ![GitHub Repo Stars](https://img.shields.io/github/stars/flowable/flowable-engine) ![GitHub last commit](https://img.shields.io/github/last-commit/flowable/flowable-engine)](https://github.com/flowable/flowable-engine) - Compact and efficient workflow and business process management platform.
- [Temporal](https://temporal.io) - Microservice orchestration platform, forked from Cadence but gRPC based.

## Resources

### Related Awesome Lists

_Awesome Lists related to the Java & JVM ecosystem._

- [Awesome Annotation Processing ![GitHub Repo Stars](https://img.shields.io/github/stars/gunnarmorling/awesome-annotation-processing) ![GitHub last commit](https://img.shields.io/github/last-commit/gunnarmorling/awesome-annotation-processing)](https://github.com/gunnarmorling/awesome-annotation-processing)
- [Awesome Graal ![GitHub Repo Stars](https://img.shields.io/github/stars/neomatrix369/awesome-graal) ![GitHub last commit](https://img.shields.io/github/last-commit/neomatrix369/awesome-graal)](https://github.com/neomatrix369/awesome-graal)
- [Awesome Gradle Plugins ![GitHub Repo Stars](https://img.shields.io/github/stars/ksoichiro/awesome-gradle) ![GitHub last commit](https://img.shields.io/github/last-commit/ksoichiro/awesome-gradle)](https://github.com/ksoichiro/awesome-gradle)
- [AwesomeJavaFX ![GitHub Repo Stars](https://img.shields.io/github/stars/mhrimaz/AwesomeJavaFX) ![GitHub last commit](https://img.shields.io/github/last-commit/mhrimaz/AwesomeJavaFX)](https://github.com/mhrimaz/AwesomeJavaFX)
- [Awesome JVM ![GitHub Repo Stars](https://img.shields.io/github/stars/deephacks/awesome-jvm) ![GitHub last commit](https://img.shields.io/github/last-commit/deephacks/awesome-jvm)](https://github.com/deephacks/awesome-jvm)
- [Awesome Microservices ![GitHub Repo Stars](https://img.shields.io/github/stars/mfornos/awesome-microservices) ![GitHub last commit](https://img.shields.io/github/last-commit/mfornos/awesome-microservices)](https://github.com/mfornos/awesome-microservices)
- [Awesome REST ![GitHub Repo Stars](https://img.shields.io/github/stars/marmelab/awesome-rest) ![GitHub last commit](https://img.shields.io/github/last-commit/marmelab/awesome-rest)](https://github.com/marmelab/awesome-rest)
- [Awesome Selenium ![GitHub Repo Stars](https://img.shields.io/github/stars/christian-bromann/awesome-selenium) ![GitHub last commit](https://img.shields.io/github/last-commit/christian-bromann/awesome-selenium)](https://github.com/christian-bromann/awesome-selenium)
- [ciandcd ![GitHub Repo Stars](https://img.shields.io/github/stars/ciandcd/awesome-ciandcd) ![GitHub last commit](https://img.shields.io/github/last-commit/ciandcd/awesome-ciandcd)](https://github.com/ciandcd/awesome-ciandcd)
- [Useful Java Links ![GitHub Repo Stars](https://img.shields.io/github/stars/Vedenin/useful-java-links) ![GitHub last commit](https://img.shields.io/github/last-commit/Vedenin/useful-java-links)](https://github.com/Vedenin/useful-java-links)
- [Java Concurrency Checklist ![GitHub Repo Stars](https://img.shields.io/github/stars/code-review-checklists/java-concurrency) ![GitHub last commit](https://img.shields.io/github/last-commit/code-review-checklists/java-concurrency)](https://github.com/code-review-checklists/java-concurrency)
- [Java Developer Roadmap ![GitHub Repo Stars](https://img.shields.io/github/stars/s4kibs4mi/java-developer-roadmap) ![GitHub last commit](https://img.shields.io/github/last-commit/s4kibs4mi/java-developer-roadmap)](https://github.com/s4kibs4mi/java-developer-roadmap)

### Communities

_Active discussions._

- [r/java](https://www.reddit.com/r/java/) - Subreddit for the Java community.
- [Stack Overflow](https://stackoverflow.com/questions/tagged/java) - Question/answer platform.
- [VirtualJUG](https://virtualjug.com) - Virtual Java User Group.

### Frontends

_Websites that provide a frontend for this list. Please note, there won't be an official website. We don't associate with a particular website and everybody is allowed to create one._

- [java.libhunt.com](https://java.libhunt.com)

### Influential Books

_Books that made a big impact and are still worth reading._

- [Core Java Volume I--Fundamentals](https://www.amazon.com/Core-Java-I-Fundamentals-10th/dp/0134177304)
- [Core Java, Volume II--Advanced Features](https://www.amazon.com/Core-Java-II-Advanced-Features-10th/dp/0134177290)
- [Effective Java (3rd Edition)](https://www.amazon.com/Effective-Java-3rd-Joshua-Bloch/dp/0134685997)
- [Java Concurrency in Practice](https://www.amazon.com/Java-Concurrency-Practice-Brian-Goetz/dp/0321349601)
- [Thinking in Java](https://www.amazon.com/Thinking-Java-Edition-Bruce-Eckel/dp/0131872486)
- [Head First Java (3rd Edition)](https://www.oreilly.com/library/view/head-first-java/9781492091646/)

### Podcasts and Screencasts

_Something to look at or listen to while programming._

- [140 Second Ducklings](https://twitter.com/debugagent/status/1491075324805001219) - Short videos on Twitter explaining Java debugging in depth.
- [A Bootiful Podcast](https://bootifulpodcast.fm)
- [Foojay Podcast](https://foojay.io/today/category/podcast/)
- [Inside Java](https://inside.java/podcast) (Official)
- [Java Off Heap](http://www.javaoffheap.com)
- [The Java Council](https://virtualjug.com/#podcast)
- [The Java Posse](http://www.javaposse.com) - Discontinued as of 02/2015.

### People

#### Twitter

_Active accounts to follow. Descriptions from Twitter._

- [Adam Bien](https://twitter.com/AdamBien) - Freelance author, JavaOne Rockstar speaker, consultant, Java Champion.
- [Aleksey Shipilëv](https://twitter.com/shipilev) - Performance geek, benchmarking czar, concurrency bug hunter.
- [Antonio Goncalves](https://twitter.com/agoncal) - Java Champion, JUG Leader, Devoxx France, Java EE 6/7, JCP, Author.
- [Arun Gupta](https://twitter.com/arungupta) - Java Champion, JavaOne Rockstar, JUG Leader, Devoxx4Kids-er, VP of Developer Advocacy at Couchbase.
- [Brian Goetz](https://twitter.com/BrianGoetz) - Java Language Architect at Oracle.
- [Bruno Borges](https://twitter.com/brunoborges) - Product Manager/Java Jock at Oracle.
- [Chris Engelbert](https://twitter.com/noctarius2k) - Open Source Enthusiast, Speaker, Developer, Developer Advocacy at TimescaleDB.
- [Chris Richardson](https://twitter.com/crichardson) - Software architect, consultant, and serial entrepreneur, Java Champion, JavaOne Rock Star, \*POJOs in Action- author.
- [Ed Burns](https://twitter.com/edburns) - Consulting Member of the Technical Staff at Oracle.
- [Eugen Paraschiv](https://twitter.com/baeldung) - Author of the Spring Security Course.
- [Heinz Kabutz](https://twitter.com/heinzkabutz) - Java Champion, speaker, author of The Java Specialists' Newsletter, concurrency performance expert.
- [Holly Cummins](https://twitter.com/holly_cummins) - Technical Lead of IBM London's Bluemix Garage, Java Champion, developer, author, JavaOne rockstar.
- [James Weaver](https://twitter.com/JavaFXpert) - Java/JavaFX/IoT developer, author and speaker.
- [Java EE](https://twitter.com/Java_EE) - Official Java EE Twitter account.
- [Java Magazine](https://twitter.com/Oraclejavamag) - Official Java Magazine account.
- [Java](https://twitter.com/java) - Official Java Twitter account.
- [Javin Paul](https://twitter.com/javinpaul) - Well-known Java blogger.
- [Josh Long](https://twitter.com/starbuxman) - Spring Advocate at Pivotal, author of O'Reilly's Cloud Native Java- and Building Microservices with Spring Boot, JavaOne Rock Star.
- [Lukas Eder](https://twitter.com/lukaseder) - Java Champion, speaker, Founder and CEO Data Geekery (jOOQ).
- [Mani Sarkar](https://twitter.com/theNeomatrix369) - Java champion, Polyglot, Software Crafter involved with @graalvm, AI/ML/DL, Data Science, Developer communities, speaker & blogger. Creator of couple of awesome lists like this one.
- [Mario Fusco](https://twitter.com/mariofusco) - RedHatter, JUG coordinator, frequent speaker and author.
- [Mark Heckler](https://twitter.com/MkHeck) - Pivotal Principal Technologist and Developer Advocate, conference speaker, published author, and Java Champion, focusing on Internet of Things and the cloud.
- [Mark Reinhold](https://twitter.com/mreinhold) - Chief Architect, Java Platform Group, Oracle.
- [Markus Eisele](https://twitter.com/myfear) - Java EE evangelist, Red Hat.
- [Martijn Verburg](https://twitter.com/karianna) - London JUG co-leader, speaker, author, Java Champion and much more.
- [Martin Thompson](https://twitter.com/mjpt777) - Pasty faced performance gangster.
- [Monica Beckwith](https://twitter.com/mon_beck) - Performance consultant, JavaOne Rock Star.
- [OpenJDK](https://twitter.com/OpenJDK) - Official OpenJDK account.
- [Peter Lawrey](https://twitter.com/PeterLawrey) - Peter Lawrey, Java performance expert.
- [Randy Shoup](https://twitter.com/randyshoup) - Stitch Fix VP Engineering, speaker, JavaOne Rock Star.
- [Reza Rahman](https://twitter.com/reza_rahman) - Java EE/GlassFish/WebLogic evangelist, author, speaker, open source hacker.
- [Sander Mak](https://twitter.com/Sander_Mak) - Java Champion, author.
- [Simon Maple](https://twitter.com/sjmaple) - Java Champion, VirtualJUG founder, LJC leader, RebelLabs author.
- [Spencer Gibb](https://twitter.com/spencerbgibb) - Software Engineer, Dad, Geek, Co-founder and Lead of Spring Cloud Core @pivotal.
- [Stephen Colebourne](https://twitter.com/jodastephen) - Java Champion, speaker.
- [Trisha Gee](https://twitter.com/trisha_gee) - Java Champion and speaker.
- [Venkat Subramaniam](https://twitter.com/venkat_s) - Author, University of Houston professor, MicroSoft MVP award recipient, JavaOne Rock Star, Java Champion.
- [Vlad Mihalcea](https://twitter.com/vlad_mihalcea) - Java Champion working on Hypersistence Optimizer, database aficionado, author of High-Performance Java Persistence book.

#### Other

- [Groundbreakers](https://apexapps.oracle.com/pls/apex/f?p=119297:3::::::) - Oracle ACEs, Groundbreaker Ambassadors and Java Champions.

### Websites

_Sites to read._

- [Baeldung](https://www.baeldung.com)
- [Dzone](https://dzone.com)
- [foojay.io](https://foojay.io)
- [Google Java Style](https://google.github.io/styleguide/javaguide.html)
- [InfoQ](https://www.infoq.com)
- [Java Algorithms and Clients](https://algs4.cs.princeton.edu/code)
- [Java, SQL, and jOOQ](https://blog.jooq.org)
- [Java.net](https://community.oracle.com/community/java)
- [Javalobby](https://dzone.com/java-jdk-development-tutorials-tools-news)
- [JavaWorld](https://www.javaworld.com)
- [JAXenter](https://jaxenter.com)
- [RebelLabs](https://zeroturnaround.com/rebellabs)
- [OverOps Blog](https://blog.overops.com)
- [TheServerSide.com](http://www.theserverside.com)
- [Vanilla Java](https://vanilla-java.github.io)
- [Voxxed](https://www.voxxed.com)
- [Java Weekly](https://discu.eu/weekly/java/)

## Contributing

Contributions are very welcome!

Please have a look at the [CONTRIBUTING ![GitHub Repo Stars](https://img.shields.io/github/stars/akullpp/awesome-java) ![GitHub last commit](https://img.shields.io/github/last-commit/akullpp/awesome-java)](https://github.com/akullpp/awesome-java/blob/master/CONTRIBUTING.md) guidelines and [the validation tools ![GitHub Repo Stars](https://img.shields.io/github/stars/akullpp/awesome-java-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/akullpp/awesome-java-lint)](https://github.com/akullpp/awesome-java-lint).

[c]: https://cdn.rawgit.com/akullpp/23246ca832bda82bb505230bf3538e2a/raw/d9bcdb769bf025292f9c6bc1290f01f1fcd1f864/commercial.svg
