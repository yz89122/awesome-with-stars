<div align="center">
  <a href="https://awesome-cl.com" target="_blank">
    <img src="https://i.imgur.com/jLVXhpc.png">
  </a>
</div>

# Awesome Common Lisp [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Assertible status](https://assertible.com/apis/102e334d-f9a8-4565-9353-7572de775cae/status?api_token=8b55a286830323effb)](https://assertible.com/docs/guide/deployments)

A curated list of _awesome_ Common Lisp libraries.

For awesome *software*, see [lisp-lang.org's success stories](http://lisp-lang.org/success/) and the [awesome-cl-software ![GitHub Repo Stars](https://img.shields.io/github/stars/azzamsa/awesome-cl-software) ![GitHub last commit](https://img.shields.io/github/last-commit/azzamsa/awesome-cl-software)](https://github.com/azzamsa/awesome-cl-software) list.

All libraries listed here are available from [Quicklisp][16] unless
stated otherwise. The ones marked with a ⭐ are so widespread and
solid that they became community standards. You can't be wrong with
them. This is the case for Quicklisp, BordeauxThreads and
such. Libraries denoted with a 👍 are the ones we like and want to
promote here at the Awesome-cl list. They proved solid, they may solve
a problem better than a community standard but they aren't as
widespread, or not considered as stable. For example, we prefer
Spinneret over Cl-Who.

Add something new! See the [contributing](#contributing) section for adding something to the
list.

This is released under the GNU Free Documentation License - its text
is provided in the LICENSE file. This repository is also mirrored on
[NotABug](https://notabug.org/CodyReichert/awesome-cl) - a **fully-free** (as in libre)
alternative to Github.  Preference is given to [free software][13] and
sellers who aren't evil for physical resources.

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->
**Table of Contents**

- [Artificial Intelligence (AI, LLMs)](#artificial-intelligence-ai-llms)
- [Audio](#audio)
- [Build Systems](#build-systems)
- [Compilers, code generators](#compilers-code-generators)
    - [APL](#apl)
    - [C, C++](#c-c)
- [Cryptography](#cryptography)
- [Cryptocurrencies](#cryptocurrencies)
- [Database](#database)
    - [ORMs](#orms)
    - [Persistent object databases](#persistent-object-databases)
    - [Graph databases](#graph-databases)
    - [Wrappers](#wrappers)
    - [Migration tools](#migration-tools)
    - [To third parties](#to-third-parties)
    - [Tools](#tools)
- [Data Structures](#data-structures)
- [Docker images](#docker-images)
- [Foreign Function Interface, languages interop](#foreign-function-interface-languages-interop)
    - [C](#c)
    - [Clojure](#clojure)
    - [Erlang](#erlang)
    - [Java](#java)
    - [Objective-C](#objective-c)
    - [Python](#python)
    - [.Net Core](#net-core)
    - [Miscellaneous](#miscellaneous)
- [Game Development](#game-development)
- [Graphics](#graphics)
- [GUI](#gui)
    - [Mobile](#mobile)
- [Implementations](#implementations)
- [JSON](#json)
- [YAML](#yaml)
- [Language extensions](#language-extensions)
    - [Pattern matching](#pattern-matching)
    - [Portability layers](#portability-layers)
    - [Changing the syntax](#changing-the-syntax)
    - [CLOS extensions](#clos-extensions)
    - [Function extensions](#function-extensions)
    - [Iteration](#iteration)
    - [Lambda shorthands](#lambda-shorthands)
    - [Non-deterministic, logic programming](#non-deterministic-logic-programming)
    - [Reactive programming](#reactive-programming)
    - [Contract programming](#contract-programming)
    - [Typing](#typing)
    - [Theorem provers](#theorem-provers)
- [Learning and Tutorials](#learning-and-tutorials)
    - [Online](#online)
    - [Beginner](#beginner)
    - [Intermediate](#intermediate)
    - [Advanced](#advanced)
    - [Coding platforms](#coding-platforms)
    - [Web Development](#web-development)
    - [Reference](#reference)
    - [Offline](#offline)
    - [Beginner](#beginner-1)
    - [Intermediate](#intermediate-1)
    - [Advanced](#advanced-1)
    - [Other books](#other-books)
    - [Community](#community)
- [Library Manager](#library-manager)
    - [Interfaces to other package managers](#interfaces-to-other-package-managers)
- [Machine Learning](#machine-learning)
- [Natural Language Processing](#natural-language-processing)
- [Network and Internet](#network-and-internet)
    - [HTTP clients](#http-clients)
    - [HTTP Servers](#http-servers)
        - [Hunchentoot plugins](#hunchentoot-plugins)
        - [Clack plugins](#clack-plugins)
    - [Web frameworks](#web-frameworks)
        - [Isomorphic web frameworks](#isomorphic-web-frameworks)
    - [Parsing html](#parsing-html)
    - [Querying HTML/DOM, web scraping](#querying-htmldom-web-scraping)
    - [HTML generators and templates](#html-generators-and-templates)
    - [URI and IP handling](#uri-and-ip-handling)
    - [Javascript](#javascript)
    - [Deployment](#deployment)
    - [Monitoring](#monitoring)
    - [Websockets](#websockets)
    - [Web development utilities](#web-development-utilities)
        - [Assets management](#assets-management)
        - [Browser tests](#browser-tests)
        - [Form handling](#form-handling)
        - [User login and password management](#user-login-and-password-management)
        - [Web project skeletons and generators](#web-project-skeletons-and-generators)
    - [Others](#others)
        - [Email](#email)
        - [OpenAPI, OData, OpenRPC](#openapi-odata-openrpc)
        - [Static site generators](#static-site-generators)
        - [Third-party APIs](#third-party-apis)
- [Numerical and Scientific](#numerical-and-scientific)
    - [Matrix libraries](#matrix-libraries)
    - [Statistics](#statistics)
    - [Units](#units)
    - [Utils](#utils)
- [Parallelism and Concurrency](#parallelism-and-concurrency)
    - [Actors pattern](#actors-pattern)
    - [Event processing](#event-processing)
    - [Job processing](#job-processing)
- [Regular expressions and string parsing](#regular-expressions-and-string-parsing)
- [Scripting](#scripting)
    - [Running scripts](#running-scripts)
    - [Command-line options parsers](#command-line-options-parsers)
    - [Readline, ncurses and other graphical helpers](#readline-ncurses-and-other-graphical-helpers)
    - [Shells, shells interfaces](#shells-shells-interfaces)
    - [System administration](#system-administration)
    - [Other scripting utilities](#other-scripting-utilities)
- [Text Editor Resources](#text-editor-resources)
    - [Emacs](#emacs)
    - [Vim & Neovim](#vim--neovim)
    - [Eclipse](#eclipse)
    - [Lem](#lem)
    - [Atom, Pulsar](#atom-pulsar)
    - [Sublime Text](#sublime-text)
    - [VSCode](#vscode)
    - [JetBrains](#jetbrains)
    - [Geany (experimental)](#geany-experimental)
    - [Notebooks](#notebooks)
    - [REPLs](#repls)
    - [Online editors](#online-editors)
    - [Apps](#apps)
- [Text and binary parsers](#text-and-binary-parsers)
- [Text Processing](#text-processing)
- [Tools](#tools-1)
- [Unit Testing](#unit-testing)
- [Utilities](#utilities)
    - [Caching](#caching)
    - [Compression / decompression](#compression--decompression)
    - [Configuration](#configuration)
    - [CSV](#csv)
    - [Date and time](#date-and-time)
    - [Data validation](#data-validation)
    - [Developer utilities](#developer-utilities)
    - [Documentation builders](#documentation-builders)
    - [Files and directories](#files-and-directories)
    - [Git](#git)
    - [i18n](#i18n)
    - [Linting, code formatting](#linting-code-formatting)
    - [Literate programming](#literate-programming)
    - [Logging](#logging)
    - [Macro helpers](#macro-helpers)
    - [Markdown](#markdown)
    - [PDF](#pdf)
    - [Plotting](#plotting)
    - [Project skeletons](#project-skeletons)
    - [Security](#security)
    - [System interface](#system-interface)
    - [XML](#xml)
    - [Other](#other)
- [Contributing](#contributing)

<!-- markdown-toc end -->

Artificial Intelligence (AI, LLMs)
==========================================

* [llama.cl ![GitHub Repo Stars](https://img.shields.io/github/stars/snunez1/llama.cl) ![GitHub last commit](https://img.shields.io/github/last-commit/snunez1/llama.cl)](https://github.com/snunez1/llama.cl) - a Common Lisp port of Karpathy's llama2.c to idiomatic Common Lisp. MIT.

Around the OpenAI API:

* [openai-openapi-client](https://codeberg.org/kilianmh/openai-openapi-client) - semi-automatically generated Openapi client updated frequently from the [official Openapi specification ![GitHub Repo Stars](https://img.shields.io/github/stars/openai/openai-openapi) ![GitHub last commit](https://img.shields.io/github/last-commit/openai/openai-openapi)](https://github.com/openai/openai-openapi/blob/master/openapi.yaml). AGPL-3.
  * available on Ultralisp.
* [cl-completions ![GitHub Repo Stars](https://img.shields.io/github/stars/atgreen/cl-completions) ![GitHub last commit](https://img.shields.io/github/last-commit/atgreen/cl-completions)](https://github.com/atgreen/cl-completions) - LLM completions.
  * makes it easy to create GPT functions in Common Lisp.
  * Ollama support.
* [cl-embeddings ![GitHub Repo Stars](https://img.shields.io/github/stars/atgreen/cl-embeddings) ![GitHub last commit](https://img.shields.io/github/last-commit/atgreen/cl-embeddings)](https://github.com/atgreen/cl-embeddings) - LLM embeddings.
* [cl-chroma ![GitHub Repo Stars](https://img.shields.io/github/stars/atgreen/cl-chroma) ![GitHub last commit](https://img.shields.io/github/last-commit/atgreen/cl-chroma)](https://github.com/atgreen/cl-chroma) - the vector DB interface.

demos: [cl-rag-example ![GitHub Repo Stars](https://img.shields.io/github/stars/atgreen/cl-rag-example) ![GitHub last commit](https://img.shields.io/github/last-commit/atgreen/cl-rag-example)](https://github.com/atgreen/cl-rag-example) and [cl-chat ![GitHub Repo Stars](https://img.shields.io/github/stars/atgreen/cl-chat) ![GitHub last commit](https://img.shields.io/github/last-commit/atgreen/cl-chat)](https://github.com/atgreen/cl-chat), a LLM chat library and web UI.

Educational:

* [PAIP-lisp ![GitHub Repo Stars](https://img.shields.io/github/stars/norvig/paip-lisp) ![GitHub last commit](https://img.shields.io/github/last-commit/norvig/paip-lisp)](https://github.com/norvig/paip-lisp) - Lisp code for the textbook ["Paradigms of Artificial Intelligence Programming"](https://norvig.github.io/paip-lisp/#/).
* [AIMA-lisp ![GitHub Repo Stars](https://img.shields.io/github/stars/aimacode/aima-lisp) ![GitHub last commit](https://img.shields.io/github/last-commit/aimacode/aima-lisp)](https://github.com/aimacode/aima-lisp) -  Common Lisp implementation of algorithms from Russell and Norvig's "Artificial Intelligence - A Modern Approach".


Audio
=====

Music composition:

* [OpenMusic ![GitHub Repo Stars](https://img.shields.io/github/stars/openmusic-project/openmusic) ![GitHub last commit](https://img.shields.io/github/last-commit/openmusic-project/openmusic)](https://github.com/openmusic-project/openmusic/) visual programming / computer-aided composition environment. [GPL3][2]. Developped at [IRCAM](https://www.stms-lab.fr/team/representations-musicales/), France.
* [OM7 ![GitHub Repo Stars](https://img.shields.io/github/stars/openmusic-project/om7) ![GitHub last commit](https://img.shields.io/github/last-commit/openmusic-project/om7)](https://github.com/openmusic-project/om7) - a new implementation of the OpenMusic visual programming and computer-aided composition environment including a number of improvements on graphical interface, computational mode, and connection to external software libraries. [GPL3][2].
  * an extension: [rq ![GitHub Repo Stars](https://img.shields.io/github/stars/openmusic-project/RQ) ![GitHub last commit](https://img.shields.io/github/last-commit/openmusic-project/RQ)](https://github.com/openmusic-project/RQ) - a library for rhythm transcription in OpenMusic (version 6.10 and later). [demo video](https://www.youtube.com/watch?v=XVEllB0TtVs). [GPL3][2].
* [Incudine](http://incudine.sourceforge.net/) -  Music/DSP programming environment for Common Lisp. Useful to design software synthesizers or sound plugins from scratch. It is also a compositional tool that allows to produce high quality sounds controllable at the sample level, defining and redefining the digital signal processors and the musical structures on-the-fly.
* [CLM](https://ccrma.stanford.edu/software/clm/) - Common Lisp Music is a music synthesis and signal processing package in the Music V family. It provides much the same functionality as Stk, Csound, SuperCollider, PD, CMix, cmusic, and Arctic — a collection of functions that create and manipulate sounds, aimed primarily at composers (in CLM's case anyway).
  * [common-tones ![GitHub Repo Stars](https://img.shields.io/github/stars/theraphonics/common-tones) ![GitHub last commit](https://img.shields.io/github/last-commit/theraphonics/common-tones)](https://github.com/theraphonics/common-tones) - a fork of CLM5 with modern Lisp (ASDF, cffi…). [BSD_3Clause][15].
* [Slippery Chicken ![GitHub Repo Stars](https://img.shields.io/github/stars/mdedwards/slippery-chicken) ![GitHub last commit](https://img.shields.io/github/last-commit/mdedwards/slippery-chicken)](https://github.com/mdedwards/slippery-chicken/) - Algorithmic composition library which outputs Midi, Common Music Notation, pdf-score via Lilypond and sound via Common Lisp Music. [GPL3][2].
  * with documentation: https://michael-edwards.org/sc/
* [Common Music ![GitHub Repo Stars](https://img.shields.io/github/stars/ormf/cm) ![GitHub last commit](https://img.shields.io/github/last-commit/ormf/cm)](https://github.com/ormf/cm) - the repository of an
  ancient version of Common Music (version 2.12.0), the presumably
  last version which ran on Common Lisp dating from around 2007-09,
  before work on Common Music shifted to (scheme-based) cm3.
  * note: old project but working.
  * [cm-incudine ![GitHub Repo Stars](https://img.shields.io/github/stars/ormf/cm-incudine) ![GitHub last commit](https://img.shields.io/github/last-commit/ormf/cm-incudine)](https://github.com/ormf/cm-incudine) - extends Common Music 2 with realtime capabilities. GPL2.
* [cl-patterns ![GitHub Repo Stars](https://img.shields.io/github/stars/defaultxr/cl-patterns) ![GitHub last commit](https://img.shields.io/github/last-commit/defaultxr/cl-patterns)](https://github.com/defaultxr/cl-patterns) - a system for composing music via Lisp code, heavily inspired by SuperCollider’s patterns system, with aims to implement much of it, but in a more robust, expressive, consistent, reflective, and lispy way. Audio output through SuperCollider, with preliminary support for Incudine, and MIDI through ALSA.
* [Music ![GitHub Repo Stars](https://img.shields.io/github/stars/MegaLoler/Music) ![GitHub last commit](https://img.shields.io/github/last-commit/MegaLoler/Music)](https://github.com/MegaLoler/Music) - A framework for musical expression in Lisp with a focus on music theory (built from scratch, unrelated to Common Music).

Decoders, sound processing:

* [Harmony](https://shirakumo.github.io/harmony) - A real-time sound processing and playback system. [zlib][33].
  * "provides you with audio processing tools as well as an audio server to play back music, sfx, and so forth."
  * using [cl-mixed ![GitHub Repo Stars](https://img.shields.io/github/stars/Shirakumo/cl-mixed) ![GitHub last commit](https://img.shields.io/github/last-commit/Shirakumo/cl-mixed)](https://github.com/Shirakumo/cl-mixed) for the mixing and sound processing library.
* [easy-audio ![GitHub Repo Stars](https://img.shields.io/github/stars/shamazmazum/easy-audio) ![GitHub last commit](https://img.shields.io/github/last-commit/shamazmazum/easy-audio)](https://github.com/shamazmazum/easy-audio) - a collection of audio decoders and metadata readers.

others:

* [scheduler ![GitHub Repo Stars](https://img.shields.io/github/stars/byulparan/scheduler) ![GitHub last commit](https://img.shields.io/github/last-commit/byulparan/scheduler)](https://github.com/byulparan/scheduler) - The time based musical event scheduler for Common Lisp. [Apache2.0][89].
* [Common Music Notation](https://ccrma.stanford.edu/software/cmn/) - Common Music Notation (CMN) provides a package of functions to hierarchically describe a musical score. Public domain.
* [osc ![GitHub Repo Stars](https://img.shields.io/github/stars/zzkt/osc) ![GitHub last commit](https://img.shields.io/github/last-commit/zzkt/osc)](https://github.com/zzkt/osc) - an implementation of the Open Sound Protocol. [LGPL2.1][11].

bindings and clients to other software and libraries:

* [cl-mpg123 ![GitHub Repo Stars](https://img.shields.io/github/stars/Shirakumo/cl-mpg123) ![GitHub last commit](https://img.shields.io/github/last-commit/Shirakumo/cl-mpg123)](https://github.com/Shirakumo/cl-mpg123), [cl-opus ![GitHub Repo Stars](https://img.shields.io/github/stars/Shirakumo/cl-opus) ![GitHub last commit](https://img.shields.io/github/last-commit/Shirakumo/cl-opus)](https://github.com/Shirakumo/cl-opus) (OGG/Opus), [cl-vorbis ![GitHub Repo Stars](https://img.shields.io/github/stars/Shirakumo/cl-vorbis) ![GitHub last commit](https://img.shields.io/github/last-commit/Shirakumo/cl-vorbis)](https://github.com/Shirakumo/cl-vorbis) (OGG/Vorbis), [cl-SoLoud ![GitHub Repo Stars](https://img.shields.io/github/stars/Shirakumo/cl-soloud) ![GitHub last commit](https://img.shields.io/github/last-commit/Shirakumo/cl-soloud)](https://github.com/Shirakumo/cl-soloud), [cl-out123 ![GitHub Repo Stars](https://img.shields.io/github/stars/Shirakumo/cl-out123) ![GitHub last commit](https://img.shields.io/github/last-commit/Shirakumo/cl-out123)](https://github.com/Shirakumo/cl-out123) (libout123), [cl-flac ![GitHub Repo Stars](https://img.shields.io/github/stars/Shirakumo/cl-flac) ![GitHub last commit](https://img.shields.io/github/last-commit/Shirakumo/cl-flac)](https://github.com/Shirakumo/cl-flac)
* [csound ![GitHub Repo Stars](https://img.shields.io/github/stars/csound/csound) ![GitHub last commit](https://img.shields.io/github/last-commit/csound/csound)](https://github.com/csound/csound) - A sound and music computing system. Includes CFFI and FFI interfaces for Common Lisp.
* [cl-collider ![GitHub Repo Stars](https://img.shields.io/github/stars/byulparan/cl-collider) ![GitHub last commit](https://img.shields.io/github/last-commit/byulparan/cl-collider)](https://github.com/byulparan/cl-collider) - A [SuperCollider](http://supercollider.github.io/) client for CommonLisp. With a [tutorial ![GitHub Repo Stars](https://img.shields.io/github/stars/defaultxr/cl-collider-tutorial) ![GitHub last commit](https://img.shields.io/github/last-commit/defaultxr/cl-collider-tutorial)](https://github.com/defaultxr/cl-collider-tutorial) and [live coding demos](https://www.youtube.com/watch?v=xzTH_ZqaFKI). Public domain.
* [cl-openal ![GitHub Repo Stars](https://img.shields.io/github/stars/zkat/cl-openal) ![GitHub last commit](https://img.shields.io/github/last-commit/zkat/cl-openal)](https://github.com/zkat/cl-openal) - bindings for the OpenAL audio library. Public domain.

and more audio software targetting musicians on [awesome-cl-software#audio ![GitHub Repo Stars](https://img.shields.io/github/stars/CodyReichert/awesome-cl) ![GitHub last commit](https://img.shields.io/github/last-commit/CodyReichert/awesome-cl)](https://github.com/CodyReichert/awesome-cl#audio) (Opus Modus, OpenMusic…).



Build Systems
=============

* ⭐[ASDF](https://common-lisp.net/project/asdf/) - Another System Definition Facility; a build system for Common Lisp. [Expat][14]. Quicklisp (see [library manager](#library-manager)) uses ASDF under the hood.
  * [known ASDF extensions](https://common-lisp.net/project/asdf/#extensions), such as `asdf-system-connections`, that lets you specify systems that are automatically loaded when two other systems are loaded, to connect them.
* [asdf-linguist ![GitHub Repo Stars](https://img.shields.io/github/stars/eudoxia0/asdf-linguist) ![GitHub last commit](https://img.shields.io/github/last-commit/eudoxia0/asdf-linguist)](https://github.com/eudoxia0/asdf-linguist) - Extensions for ASDF. [Expat][14].
* [asdf-viz ![GitHub Repo Stars](https://img.shields.io/github/stars/guicho271828/asdf-viz) ![GitHub last commit](https://img.shields.io/github/last-commit/guicho271828/asdf-viz)](https://github.com/guicho271828/asdf-viz) - a tool to visualize the library dependencies of ASDF systems, the call graph of a function and the class inheritances. [LLGPL][8].

See also:

* [modularize ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/modularize) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/modularize)](https://github.com/Shinmera/modularize) -  A modularization framework for Common Lisp. [zlib][33].
  * provides a common interface to segregate major application components.
  * for instance, by adding module definition options you can introduce mechanisms to tie modules together in functionality, hook into each other and so on.
  * acts as a wrapper around `defpackage` and integrates into ASDF.

Compilers, code generators
==========================

APL
---

* [April ![GitHub Repo Stars](https://img.shields.io/github/stars/phantomics/april) ![GitHub last commit](https://img.shields.io/github/last-commit/phantomics/april)](https://github.com/phantomics/april) - The APL programming language (a subset thereof) compiling to Common Lisp. Replace hundreds of lines of number-crunching code with a single line of APL. [Apache2][89].


C, C++
------

* [cmacro ![GitHub Repo Stars](https://img.shields.io/github/stars/eudoxia0/cmacro) ![GitHub last commit](https://img.shields.io/github/last-commit/eudoxia0/cmacro)](https://github.com/eudoxia0/cmacro) - Lisp macros for C. [MIT][200].
* [C-mera ![GitHub Repo Stars](https://img.shields.io/github/stars/kiselgra/c-mera) ![GitHub last commit](https://img.shields.io/github/last-commit/kiselgra/c-mera)](https://github.com/kiselgra/c-mera) - a source-to-source compiler that utilizes Lisp's macro system for meta programming of C-like languages. [GPL3][2].
* [lispc ![GitHub Repo Stars](https://img.shields.io/github/stars/eratosthenesia/lispc) ![GitHub last commit](https://img.shields.io/github/last-commit/eratosthenesia/lispc)](https://github.com/eratosthenesia/lispc) - a powerful "lispsy" macrolanguage for C. [MIT][200].
* [with-c-syntax ![GitHub Repo Stars](https://img.shields.io/github/stars/y2q-actionman/with-c-syntax) ![GitHub last commit](https://img.shields.io/github/last-commit/y2q-actionman/with-c-syntax)](https://github.com/y2q-actionman/with-c-syntax) - a fun package which introduces the C language syntax into Common Lisp. (Yes, this package is not for practical coding, I think.) WTFPL Licence.
* [ecrepl](https://gitlab.common-lisp.net/ecl/ecrepl) - an interactive REPL for the C language. [BSD_2Clause][17].
* [Software-Evolution-Library ![GitHub Repo Stars](https://img.shields.io/github/stars/GrammaTech/sel) ![GitHub last commit](https://img.shields.io/github/last-commit/GrammaTech/sel)](https://github.com/GrammaTech/sel) - The SEL enables the programmatic modification and evaluation of software (C/C++ support using Clang, compiled assembler, and linked ELF binaries). [GPL3][2].
* [vacietis ![GitHub Repo Stars](https://img.shields.io/github/stars/vsedach/Vacietis) ![GitHub last commit](https://img.shields.io/github/last-commit/vsedach/Vacietis)](https://github.com/vsedach/Vacietis) -  C to Common Lisp compiler. [LGPL3][9].

Cryptography
============

* ⭐ [Ironclad ![GitHub Repo Stars](https://img.shields.io/github/stars/sharplispers/ironclad) ![GitHub last commit](https://img.shields.io/github/last-commit/sharplispers/ironclad)](https://github.com/sharplispers/ironclad) - A library of crypto functions for Common Lisp. Not considered secure, but is still useful for the message digest functions. [Expat][14].
* [crypto-shortcuts ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/crypto-shortcuts) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/crypto-shortcuts)](https://github.com/Shinmera/crypto-shortcuts) - Collection of common crypto shortcuts. [zlib][33].
* [trivial-ssh ![GitHub Repo Stars](https://img.shields.io/github/stars/eudoxia0/trivial-ssh) ![GitHub last commit](https://img.shields.io/github/last-commit/eudoxia0/trivial-ssh)](https://github.com/eudoxia0/trivial-ssh) - An SSH client library. [Expat][14].
* [cl-ssh-keys ![GitHub Repo Stars](https://img.shields.io/github/stars/dnaeon/cl-ssh-keys) ![GitHub last commit](https://img.shields.io/github/last-commit/dnaeon/cl-ssh-keys)](https://github.com/dnaeon/cl-ssh-keys) - Common Lisp system for generating and parsing of OpenSSH keys. [BSD_3Clause][15].
* [cl-bcrypt ![GitHub Repo Stars](https://img.shields.io/github/stars/dnaeon/cl-bcrypt) ![GitHub last commit](https://img.shields.io/github/last-commit/dnaeon/cl-bcrypt)](https://github.com/dnaeon/cl-bcrypt) - Common Lisp system for parsing and generating bcrypt password hashes. [BSD_3Clause][15].
  * see also [cl-pass ![GitHub Repo Stars](https://img.shields.io/github/stars/eudoxia0/cl-pass) ![GitHub last commit](https://img.shields.io/github/last-commit/eudoxia0/cl-pass)](https://github.com/eudoxia0/cl-pass), using pbkdf2.
* [gpgme](https://www.gnupg.org/download/index.en.html#gpgme) (GnuPG Made Easy) is the standard library to access GnuPG functions from programming languages. It provides an official Common Lisp system.
  * [gpgme lisp sources](https://git.gnupg.org/cgi-bin/gitweb.cgi?p=gpgme.git;a=tree;f=lang/cl;h=05151bdf839e513f534a1b423d59332a2e46fd5d;hb=HEAD) (not in Quicklisp). GPL2.
* [cl-frugal-uuid ![GitHub Repo Stars](https://img.shields.io/github/stars/ak-coram/cl-frugal-uuid) ![GitHub last commit](https://img.shields.io/github/last-commit/ak-coram/cl-frugal-uuid)](https://github.com/ak-coram/cl-frugal-uuid/) -  Common Lisp UUID library with zero dependencies. [MIT][200].

Cryptocurrencies
================

* [bitcoin-core-rpc](https://codeberg.org/kilianmh/bitcoin-core-rpc/) - a (hopefully) complete Bitcoin Core RPC client. [AGPL-3.0+][agpl3]
* [bp ![GitHub Repo Stars](https://img.shields.io/github/stars/rodentrabies/bp) ![GitHub last commit](https://img.shields.io/github/last-commit/rodentrabies/bp)](https://github.com/rodentrabies/bp) - Bitcoin Protocol components in Common Lisp. [MIT][200].
* [cl-monero-tools ![GitHub Repo Stars](https://img.shields.io/github/stars/glv2/cl-monero-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/glv2/cl-monero-tools)](https://github.com/glv2/cl-monero-tools) -  Common Lisp toolbox to work with the Monero cryptocurrency. [GPL3][2]. Not in Quicklisp.
* [peercoin-blockchain-parser ![GitHub Repo Stars](https://img.shields.io/github/stars/glv2/peercoin-blockchain-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/glv2/peercoin-blockchain-parser)](https://github.com/glv2/peercoin-blockchain-parser) - parse the blockchain contained in a file and export some of its data to a text file, a SQL script or a database. It can also create a database using the RPC of a Peercoin daemon as source of data instead of a blockchain file. LGPL3. Not in Quicklisp.
* [peercoin-calculator ![GitHub Repo Stars](https://img.shields.io/github/stars/glv2/peercoin-calculator) ![GitHub last commit](https://img.shields.io/github/last-commit/glv2/peercoin-calculator)](https://github.com/glv2/peercoin-calculator) - This program gives you the probability of generating a POS or POW block within 10 minutes, 24 hours, 31 days, 90 days and 1 year, as well as the reward that can be expected. GUI in Qt. [GPL3][2]. Not in Quicklisp.
* [peercoin-vote ![GitHub Repo Stars](https://img.shields.io/github/stars/glv2/peercoin-vote) ![GitHub last commit](https://img.shields.io/github/last-commit/glv2/peercoin-vote)](https://github.com/glv2/peercoin-vote) -  A voting system based on data from the blockchain (addresses and balances). [GPL3][2]. Not in Quicklisp.
* [stacks-api ![GitHub Repo Stars](https://img.shields.io/github/stars/kilianmh/stacks-api) ![GitHub last commit](https://img.shields.io/github/last-commit/kilianmh/stacks-api)](https://github.com/kilianmh/stacks-api) - a Stacks API client. [AGPL-3.0][89]

See also [legochain ![GitHub Repo Stars](https://img.shields.io/github/stars/defunkydrummer/legochain) ![GitHub last commit](https://img.shields.io/github/last-commit/defunkydrummer/legochain)](https://github.com/defunkydrummer/legochain), a simple educational blockchain; [emotiq ![GitHub Repo Stars](https://img.shields.io/github/stars/emotiq/emotiq) ![GitHub last commit](https://img.shields.io/github/last-commit/emotiq/emotiq)](https://github.com/emotiq/emotiq), a next-generation blockchain with an innovative natural-language approach to smart contracts built in Common Lisp (stopped).

Database
========

* [cl-yesql ![GitHub Repo Stars](https://img.shields.io/github/stars/ruricolist/cl-yesql) ![GitHub last commit](https://img.shields.io/github/last-commit/ruricolist/cl-yesql)](https://github.com/ruricolist/cl-yesql) - SQL statements live in their own files, in SQL syntax, and are imported into Lisp as functions. You are not limited to the features a DSL supports. Based on Clojure's Yesql. [MIT][200].

See also:

* [endatabas ![GitHub Repo Stars](https://img.shields.io/github/stars/endatabas/endb) ![GitHub last commit](https://img.shields.io/github/last-commit/endatabas/endb)](https://github.com/endatabas/endb) - Schemaless SQL document database with full history. [AGPL-3.0][89].
  - built in Common Lisp and Rust.
  - in development, alpha product scheduled for Q2 of 2024. [roadmap](https://docs.endatabas.com/appendix/roadmap.html).

ORMs
----

* ⭐ [clsql](http://www.cliki.net/CLSQL) - An SQL database with a Common Lisp interface. [LLGPL][8].
* 👍 [mito ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/mito) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/mito)](https://github.com/fukamachi/mito) - An ORM for Common Lisp with migrations, relationships and PostgreSQL support [BSD_3Clause][15].
  * [mitho-auth ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/mito-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/mito-auth)](https://github.com/fukamachi/mito-auth), a mixin class for use authorization
  * [mito-attachment ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/mito-attachment) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/mito-attachment)](https://github.com/fukamachi/mito-attachment), a mixin class for file management outside of RDBMS.
* [cl-dbi ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/cl-dbi) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/cl-dbi)](https://github.com/fukamachi/cl-dbi) - A database-independent interface for Common Lisp. [LLGPL][8].
  * [dbd-oracle ![GitHub Repo Stars](https://img.shields.io/github/stars/sergadin/dbd-oracle) ![GitHub last commit](https://img.shields.io/github/last-commit/sergadin/dbd-oracle)](https://github.com/sergadin/dbd-oracle) - an Oracle database driver for CL-DBI. [LLGPL][8].
* [crane ![GitHub Repo Stars](https://img.shields.io/github/stars/eudoxia0/crane) ![GitHub last commit](https://img.shields.io/github/last-commit/eudoxia0/crane)](https://github.com/eudoxia0/crane) - Another ORM. [Expat][14].
* [datafly ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/datafly) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/datafly)](https://github.com/fukamachi/datafly) - A lightweight database library. [3-clause BSD][15].
* [sxql ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/sxql) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/sxql)](https://github.com/fukamachi/sxql) - A DSL for generating SQL. [3-clause BSD][15].

Persistent object databases
---------------------------

* [bknr.datastore ![GitHub Repo Stars](https://img.shields.io/github/stars/hanshuebner/bknr-datastore) ![GitHub last commit](https://img.shields.io/github/last-commit/hanshuebner/bknr-datastore)](https://github.com/hanshuebner/bknr-datastore) - a CLOS-based lisp-only database in RAM with transaction logging persistence. [Manual](https://www.common-lisp.net/project/bknr/html/documentation.html). [licence][208].
  * see also this [good introductory blog post](https://ashok-khanna.medium.com/persistent-in-memory-data-storage-in-common-lisp-b-k-n-r-37f8ae76042f)
  * an example web application using bknr.datastore: [screenshotbot-oss ![GitHub Repo Stars](https://img.shields.io/github/stars/screenshotbot/screenshotbot-oss) ![GitHub last commit](https://img.shields.io/github/last-commit/screenshotbot/screenshotbot-oss)](https://github.com/screenshotbot/screenshotbot-oss).
  * See also [bknr.cluster ![GitHub Repo Stars](https://img.shields.io/github/stars/tdrhq/bknr.cluster) ![GitHub last commit](https://img.shields.io/github/last-commit/tdrhq/bknr.cluster)](https://github.com/tdrhq/bknr.cluster), if you want a highly-available replicated version of bknr.datastore.
* [ubiquitous ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/ubiquitous) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/ubiquitous)](https://github.com/Shinmera/ubiquitous) - A library providing easy-to-use persistent configuration storage. [zlib][33].
* [cl-prevalence](https://common-lisp.net/project/cl-prevalence/) - in-memory database system. Implementation of Object Prevalence, in which business objects are kept live in memory and transactions are journaled for system recovery. [github fork ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/cl-prevalence) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/cl-prevalence)](https://github.com/40ants/cl-prevalence). [LLGPL][8].
  * See also [cl-prevalence-multimaster ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/cl-prevalence-multimaster) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/cl-prevalence-multimaster)](https://github.com/40ants/cl-prevalence-multimaster), to syncronize multiple cl-prevalence systems state.
* [cl-naive-store](https://gitlab.com/Harag/cl-naive-store) - a naive persisted, in memory (lazy loading), indexed, document store for Common Lisp. [MIT][200].
  - see [the introductory blog post](https://zaries.wordpress.com/2022/05/31/cl-naive-store/)
  - dare we add: used in production by the author's company (ASTN Group, see awesome-lisp-companies)

See also [Clache ![GitHub Repo Stars](https://img.shields.io/github/stars/html/clache) ![GitHub last commit](https://img.shields.io/github/last-commit/html/clache)](https://github.com/html/clache), that can save any object on disk.


Graph databases
---------------

* [AllegroGraph](https://allegrograph.com/) - a high-performance, multi-model (document and graph), entity-event knowledge graph technology.
  * Proprietary, with a free version of a limit of 5 million RDF triples.
  * with a [hosted version](https://allegrograph.cloud/)
  * AllegroGraph 8.0 (released December, 2023) "incorporates Large Language Model (LLM) components directly into SPARQL along with vector generation and vector storage for a comprehensive AI Knowledge Graph solution."
* [cl-agraph ![GitHub Repo Stars](https://img.shields.io/github/stars/vseloved/cl-agraph) ![GitHub last commit](https://img.shields.io/github/last-commit/vseloved/cl-agraph)](https://github.com/vseloved/cl-agraph), a minimal client for AllegroGraph.
* [neo4cl](https://codeberg.org/Equill/neo4cl) - a library for interacting with Neo4J. Sends Cypher queries to a Neo4J server, and decodes the responses into something useful for processing in CL. [Apache2][89].
  * and maybe: [cl-neo4j ![GitHub Repo Stars](https://img.shields.io/github/stars/kraison/cl-neo4j) ![GitHub last commit](https://img.shields.io/github/last-commit/kraison/cl-neo4j)](https://github.com/kraison/cl-neo4j) - a thin neo4j RESTFUL client interface.
* [vivace-graph ![GitHub Repo Stars](https://img.shields.io/github/stars/kraison/vivace-graph-v3) ![GitHub last commit](https://img.shields.io/github/last-commit/kraison/vivace-graph-v3)](https://github.com/kraison/vivace-graph-v3) - graph database & Prolog implementation. Takes design inspiration from CouchDB, neo4j and AllegroGraph. It implements an ACID-compliant object graph model with user-defined indexes and map-reduce views. It also implements a master / slave replication scheme for redundancy and horizontal read scaling. Querying the graph is accomplished via a number of Lisp methods or via a Prolog-like query language. [MIT][200].
  * "I have used Vivace Graph as an online catalog for millions of products, as the back end for a complex, adaptable VoIP-based IVR, as well as data store for several complex big data analysis systems, and finally as the engine for two recommender systems." (issue #23)
  * "Why is vivace graph so fast? I have been comparing it with SQL-based approach and Neo4j, and vivace graph is much, much faster."

and also:

* [restagraph](https://codeberg.org/Equill/restagraph) - an app that dynamically generates REST APIs for a Neo4j database, using a schema defined within the database. [GPL3][2].

<!-- lost in translation: (it was slow anyways) -->
<!-- * [facts ![GitHub Repo Stars](https://img.shields.io/github/stars/cl-facts/facts) ![GitHub last commit](https://img.shields.io/github/last-commit/cl-facts/facts)](https://github.com/cl-facts/facts) - an in-memory graph database with transactions and rollbacks, logging/replay and dumping/loading to/from disk. BSD-style license (ISC). -->


Wrappers
--------

* ⭐ [postmodern](http://marijnhaverbeke.nl/postmodern/) - A library for interacting with PostgreSQL. [zlib][33].
* [cl-sqlite ![GitHub Repo Stars](https://img.shields.io/github/stars/dmitryvk/cl-sqlite) ![GitHub last commit](https://img.shields.io/github/last-commit/dmitryvk/cl-sqlite)](https://github.com/dmitryvk/cl-sqlite) - Bindings for SQLite. Public domain.
* [cl-memcached ![GitHub Repo Stars](https://img.shields.io/github/stars/quasi/cl-memcached) ![GitHub last commit](https://img.shields.io/github/last-commit/quasi/cl-memcached)](https://github.com/quasi/cl-memcached) - Fast, thread-safe interface to the Memcached object caching system. [Expat][14].
* [cl-redis ![GitHub Repo Stars](https://img.shields.io/github/stars/vseloved/cl-redis) ![GitHub last commit](https://img.shields.io/github/last-commit/vseloved/cl-redis)](https://github.com/vseloved/cl-redis) - Redis client. [Expat][14].
* [cl-disque ![GitHub Repo Stars](https://img.shields.io/github/stars/CodyReichert/cl-disque) ![GitHub last commit](https://img.shields.io/github/last-commit/CodyReichert/cl-disque)](https://github.com/CodyReichert/cl-disque) - Disque client. [3-clause BSD][15].
* [cl-rethinkdb ![GitHub Repo Stars](https://img.shields.io/github/stars/orthecreedence/cl-rethinkdb) ![GitHub last commit](https://img.shields.io/github/last-commit/orthecreedence/cl-rethinkdb)](https://github.com/orthecreedence/cl-rethinkdb) - RethinkDB client. [Expat][14].
* [cl-mango ![GitHub Repo Stars](https://img.shields.io/github/stars/cmoore/cl-mango) ![GitHub last commit](https://img.shields.io/github/last-commit/cmoore/cl-mango)](https://github.com/cmoore/cl-mango/) -  A minimalist CouchDB 2.x database client. BSD_3Clause.
  * See also [clouchdb](https://common-lisp.net/project/clouchdb/) - Library for interacting with CouchDB. [FreeBSD][39].
* [lmdb ![GitHub Repo Stars](https://img.shields.io/github/stars/antimer/lmdb) ![GitHub last commit](https://img.shields.io/github/last-commit/antimer/lmdb)](https://github.com/antimer/lmdb) - Bindings to [LMDB](http://www.lmdb.tech/doc/), the Lightning Memory-mapped Database, an ACID key-value database with MultiVersion Concurrency Control.
* [cl-ndbapi ![GitHub Repo Stars](https://img.shields.io/github/stars/datagraph/cl-ndbapi) ![GitHub last commit](https://img.shields.io/github/last-commit/datagraph/cl-ndbapi)](https://github.com/datagraph/cl-ndbapi) - bindings to the C++ NDB API of [RonDB](https://www.rondb.com/), "the world's fastest key value store", by [Dydra](https://dydra.com/home). GPLv2.
* [cl-duckdb ![GitHub Repo Stars](https://img.shields.io/github/stars/ak-coram/cl-duckdb) ![GitHub last commit](https://img.shields.io/github/last-commit/ak-coram/cl-duckdb)](https://github.com/ak-coram/cl-duckdb) -  Common Lisp CFFI wrapper around the DuckDB C API. [MIT][200].

Migration tools
---------------

(recall that Mito handles migrations)

* [cl-migratum ![GitHub Repo Stars](https://img.shields.io/github/stars/dnaeon/cl-migratum) ![GitHub last commit](https://img.shields.io/github/last-commit/dnaeon/cl-migratum)](https://github.com/dnaeon/cl-migratum) - a system which provides facilities for performing database schema migrations, designed to work with various databases. [BSD_3Clause][15].
* [postmodern-passenger-pigeon ![GitHub Repo Stars](https://img.shields.io/github/stars/fisxoj/postmodern-passenger-pigeon) ![GitHub last commit](https://img.shields.io/github/last-commit/fisxoj/postmodern-passenger-pigeon)](https://github.com/fisxoj/postmodern-passenger-pigeon/) - a migration manager for postmodern. No licence specified.


To third parties
----------------

* [dyna ![GitHub Repo Stars](https://img.shields.io/github/stars/Rudolph-Miller/dyna) ![GitHub last commit](https://img.shields.io/github/last-commit/Rudolph-Miller/dyna)](https://github.com/Rudolph-Miller/dyna) - an AWS DynamoDB ORM. [MIT][200].
* [cl-influxdb ![GitHub Repo Stars](https://img.shields.io/github/stars/mmaul/cl-influxdb) ![GitHub last commit](https://img.shields.io/github/last-commit/mmaul/cl-influxdb)](https://github.com/mmaul/cl-influxdb/) - an interface to the Time Series Database InfluxDB. [MIT][200].
* [pzmq ![GitHub Repo Stars](https://img.shields.io/github/stars/orivej/pzmq) ![GitHub last commit](https://img.shields.io/github/last-commit/orivej/pzmq)](https://github.com/orivej/pzmq) -  ZeroMQ 4.0+ Common Lisp bindings. Unlicense.

Tools
-----

* ⭐ [pgloader ![GitHub Repo Stars](https://img.shields.io/github/stars/dimitri/pgloader) ![GitHub last commit](https://img.shields.io/github/last-commit/dimitri/pgloader)](https://github.com/dimitri/pgloader) - a data loading tool for PostgreSQL. [PostgreSQL Licence][205].
  * obligatory blog post: [Why is pgloader so much faster?](https://tapoueh.org/blog/2014/05/why-is-pgloader-so-much-faster/) (hint: it was re-written from Python to Common Lisp)


Data Structures
===============

* 👍 [str ![GitHub Repo Stars](https://img.shields.io/github/stars/vindarel/cl-str) ![GitHub last commit](https://img.shields.io/github/last-commit/vindarel/cl-str)](https://github.com/vindarel/cl-str) - a modern, simple and consistent string manipulation library. [MIT][200].
* 👍 [FSet](https://common-lisp.net/project/fset) - A functional, set-theoretic collections data structure library. [LLGPL][8].
  * an extension: [jfon](https://git.sr.ht/~skin/jfon) - an attempt at porting JZON (JSON parsing library) to FSet.
* [sycamore ![GitHub Repo Stars](https://img.shields.io/github/stars/ndantam/sycamore) ![GitHub last commit](https://img.shields.io/github/last-commit/ndantam/sycamore)](https://github.com/ndantam/sycamore) -  a fast, purely functional data structure library. [BSD_3Clause][15].
  - comparison: [FSet vs. Sycamore](https://scottlburson2.blogspot.com/2024/10/comparison-fset-vs-sycamore.html)
* [trivial-extensible-sequences ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/trivial-extensible-sequences) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/trivial-extensible-sequences)](https://github.com/Shinmera/trivial-extensible-sequences) - Portability library for the extensible sequences protocol ([SBCL documentation](http://www.sbcl.org/manual/#Extensible-Sequences)). [zlib][33].
* [bst ![GitHub Repo Stars](https://img.shields.io/github/stars/glv2/bst) ![GitHub last commit](https://img.shields.io/github/last-commit/glv2/bst)](https://github.com/glv2/bst) - Binary Search Tree. [GPL3][2].
* [pileup](http://nikodemus.github.io/pileup/) - a portable, performant, and thread-safe binary heap for Common Lisp. [MIT][200].
* [cl-ctrie ![GitHub Repo Stars](https://img.shields.io/github/stars/danlentz/cl-ctrie) ![GitHub last commit](https://img.shields.io/github/last-commit/danlentz/cl-ctrie)](https://github.com/danlentz/cl-ctrie) -
lock-free, concurrent, key/value index with efficient memory-mapped persistence and fast transient storage models. [MIT][200].
* [cl-data-structures ![GitHub Repo Stars](https://img.shields.io/github/stars/sirherrbatka/cl-data-structures) ![GitHub last commit](https://img.shields.io/github/last-commit/sirherrbatka/cl-data-structures)](https://github.com/sirherrbatka/cl-data-structures) - a portable collection of data structures and algorithms (mainly dicts and sequences, with some statistical functions). [BSD][15].
* [listopia ![GitHub Repo Stars](https://img.shields.io/github/stars/Dimercel/listopia) ![GitHub last commit](https://img.shields.io/github/last-commit/Dimercel/listopia)](https://github.com/Dimercel/listopia) - a list manipulation library inspired by Haskell's Data.List. [LLGPL][8].
* [hash-set ![GitHub Repo Stars](https://img.shields.io/github/stars/samebchase/hash-set) ![GitHub last commit](https://img.shields.io/github/last-commit/samebchase/hash-set)](https://github.com/samebchase/hash-set/) - a convenience library implementing hash sets on top of CL hash tables [The Unlicense][5]
* [bit-smasher ![GitHub Repo Stars](https://img.shields.io/github/stars/thephoeron/bit-smasher) ![GitHub last commit](https://img.shields.io/github/last-commit/thephoeron/bit-smasher)](https://github.com/thephoeron/bit-smasher) -  Common Lisp library for handling bit vectors, bit vector arithmetic, and type conversions. [MIT][200].
* [cl-containers](https://common-lisp.net/project/cl-containers/) - an extensive library of data structures and utilities - queues, trees, heaps, doubly-linked lists, sets, bags,... [MIT][200]
* [cl-competitive ![GitHub Repo Stars](https://img.shields.io/github/stars/privet-kitty/cl-competitive) ![GitHub last commit](https://img.shields.io/github/last-commit/privet-kitty/cl-competitive)](https://github.com/privet-kitty/cl-competitive) - Common Lisp algorithms collection for competitive programming. Public domain, CCO or MIT.
* [nonempty ![GitHub Repo Stars](https://img.shields.io/github/stars/fosskers/cl-nonempty) ![GitHub last commit](https://img.shields.io/github/last-commit/fosskers/cl-nonempty)](https://github.com/fosskers/cl-nonempty) -  Non-empty collections for Common Lisp.  [LGPL3][9].
* [cl-hash-util ![GitHub Repo Stars](https://img.shields.io/github/stars/orthecreedence/cl-hash-util) ![GitHub last commit](https://img.shields.io/github/last-commit/orthecreedence/cl-hash-util)](https://github.com/orthecreedence/cl-hash-util) - Hash-table creation, access, and manipulation utilities. [MIT][200].
* [cl-permutation ![GitHub Repo Stars](https://img.shields.io/github/stars/stylewarning/cl-permutation) ![GitHub last commit](https://img.shields.io/github/last-commit/stylewarning/cl-permutation)](https://github.com/stylewarning/cl-permutation) -  Permutations and permutation groups in Common Lisp. [BSD_3Clause][15].

Accessing data structures:

* 👍 [access ![GitHub Repo Stars](https://img.shields.io/github/stars/AccelerationNet/access) ![GitHub last commit](https://img.shields.io/github/last-commit/AccelerationNet/access)](https://github.com/AccelerationNet/access/) - Consistent and nested access to most common data structures. [BSD_3Clause][15].
* [modf ![GitHub Repo Stars](https://img.shields.io/github/stars/smithzvk/modf) ![GitHub last commit](https://img.shields.io/github/last-commit/smithzvk/modf)](https://github.com/smithzvk/modf) - a setf-like macro for functional programming.

Other data structures:

* [bitfield ![GitHub Repo Stars](https://img.shields.io/github/stars/marcoheisig/bitfield) ![GitHub last commit](https://img.shields.io/github/last-commit/marcoheisig/bitfield)](https://github.com/marcoheisig/bitfield) - Efficiently represent several finite sets or small integers as a single non-negative integer. [MIT][200].


Docker images
=============

* [cl-docker-images](https://common-lisp.net/project/cl-docker-images/) - Docker images for ABCL, CCL, ECL, and SBCL on Windows (amd64) and Alpine and Debian (amd64, arm64, arm/v7) [BSD_2Clause][17].
* [base-lisp-image ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/base-lisp-image) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/base-lisp-image)](https://github.com/40ants/base-lisp-image) - base
  Docker image for Common Lisp projects with SBCL or CCL and the latest
  ASDF, Qlot and Roswell.
* [archlinux-cl ![GitHub Repo Stars](https://img.shields.io/github/stars/yitzchak/archlinux-cl) ![GitHub last commit](https://img.shields.io/github/last-commit/yitzchak/archlinux-cl)](https://github.com/yitzchak/archlinux-cl) - Docker Arch Linux image with Common Lisp implementations (7 to this day). MIT.


Foreign Function Interface, languages interop
=============================================

## C ##

* ⭐ [CFFI ![GitHub Repo Stars](https://img.shields.io/github/stars/cffi/cffi) ![GitHub last commit](https://img.shields.io/github/last-commit/cffi/cffi)](https://github.com/cffi/cffi) - Portable, easy-to-use C foreign function interface. [Expat][14].
  * [cffi-ops ![GitHub Repo Stars](https://img.shields.io/github/stars/bohonghuang/cffi-ops) ![GitHub last commit](https://img.shields.io/github/last-commit/bohonghuang/cffi-ops)](https://github.com/bohonghuang/cffi-ops) - helps write concise CFFI-related code.
  * [cffi-objects ![GitHub Repo Stars](https://img.shields.io/github/stars/bohonghuang/cffi-object) ![GitHub last commit](https://img.shields.io/github/last-commit/bohonghuang/cffi-object)](https://github.com/bohonghuang/cffi-object) - enables fast and convenient interoperation with foreign objects.
* 👍[cl-autowrap ![GitHub Repo Stars](https://img.shields.io/github/stars/rpav/cl-autowrap) ![GitHub last commit](https://img.shields.io/github/last-commit/rpav/cl-autowrap)](https://github.com/rpav/cl-autowrap) - Automatically parses header files into CFFI definitions. [FreeBSD][39].
* [cl-bindgen ![GitHub Repo Stars](https://img.shields.io/github/stars/sdilts/cl-bindgen) ![GitHub last commit](https://img.shields.io/github/last-commit/sdilts/cl-bindgen)](https://github.com/sdilts/cl-bindgen) - A command line tool and library for creating Common Lisp language bindings from C header files. [MIT][200].
* [cl-gobject-introspection ![GitHub Repo Stars](https://img.shields.io/github/stars/andy128k/cl-gobject-introspection) ![GitHub last commit](https://img.shields.io/github/last-commit/andy128k/cl-gobject-introspection)](https://github.com/andy128k/cl-gobject-introspection) - [Gobject Introspection](https://gi.readthedocs.io/en/latest/) FFI. Automatic bindings to call into the C library. [BSD][15]. Generate a lisp interface with [gir2cl ![GitHub Repo Stars](https://img.shields.io/github/stars/kat-co/gir2cl) ![GitHub last commit](https://img.shields.io/github/last-commit/kat-co/gir2cl)](https://github.com/kat-co/gir2cl). [LGPL3][9].
* [cl-cxx-jit ![GitHub Repo Stars](https://img.shields.io/github/stars/Islam0mar/CL-CXX-JIT) ![GitHub last commit](https://img.shields.io/github/last-commit/Islam0mar/CL-CXX-JIT)](https://github.com/Islam0mar/CL-CXX-JIT) -  Common Lisp and C++ interoperation with JIT. [MIT][200].

## Clojure

* [ABCLJ ![GitHub Repo Stars](https://img.shields.io/github/stars/lsevero/abclj) ![GitHub last commit](https://img.shields.io/github/last-commit/lsevero/abclj)](https://github.com/lsevero/abclj) - dead easy  Clojure to Common lisp interop. EPL-2.0.

In development:

* [Cloture ![GitHub Repo Stars](https://img.shields.io/github/stars/ruricolist/cloture) ![GitHub last commit](https://img.shields.io/github/last-commit/ruricolist/cloture)](https://github.com/ruricolist/cloture) - Clojure in Common Lisp.

> Cloture is in very early (pre-alpha) stages, but it has progressed far enough to load clojure.test, allowing the test suite to actually be written in Clojure.

See also those libraries:

* [cl-oju ![GitHub Repo Stars](https://img.shields.io/github/stars/eigenhombre/cl-oju) ![GitHub last commit](https://img.shields.io/github/last-commit/eigenhombre/cl-oju)](https://github.com/eigenhombre/cl-oju/) - a few idioms, mostly relating to sequences, that I miss when writing Common Lisp. [MIT][200].
* [clj-con ![GitHub Repo Stars](https://img.shields.io/github/stars/dtenny/clj-con) ![GitHub last commit](https://img.shields.io/github/last-commit/dtenny/clj-con)](https://github.com/dtenny/clj-con) - Clojure-style concurrency operations in Common Lisp. [MIT][200].
* [clj-re ![GitHub Repo Stars](https://img.shields.io/github/stars/dtenny/clj-re) ![GitHub last commit](https://img.shields.io/github/last-commit/dtenny/clj-re)](https://github.com/dtenny/clj-re/) - Clojure-style regular expression functions.
* [clj-arrows ![GitHub Repo Stars](https://img.shields.io/github/stars/dtenny/clj-arrows) ![GitHub last commit](https://img.shields.io/github/last-commit/dtenny/clj-arrows)](https://github.com/dtenny/clj-arrows) -  Clojure-compatible threading/transformation/arrow macros for Common Lisp.
* [with-redefs ![GitHub Repo Stars](https://img.shields.io/github/stars/dtenny/with-redefs) ![GitHub last commit](https://img.shields.io/github/last-commit/dtenny/with-redefs)](https://github.com/dtenny/with-redefs) - enables rebinding of global functions, inspired by Clojure's with-redefs.

## Erlang ##

* [CLERIC ![GitHub Repo Stars](https://img.shields.io/github/stars/flambard/CLERIC) ![GitHub last commit](https://img.shields.io/github/last-commit/flambard/CLERIC)](https://github.com/flambard/CLERIC) - a Common Lisp Erlang Interface. An implementation of the Erlang distribution protocol, comparable with erl_interface and jinterface. [MIT][200].

## Java ##

* [cl+j](https://common-lisp.net/project/cl-plus-j/) - A JNI-based interface to a JVM via CFFI. Not available on Quicklisp. Does not reliably work with all implementations. [Expat][14].

## Objective-C ##

* [objc-lisp-bridge ![GitHub Repo Stars](https://img.shields.io/github/stars/fiddlerwoaroof/objc-lisp-bridge) ![GitHub last commit](https://img.shields.io/github/last-commit/fiddlerwoaroof/objc-lisp-bridge)](https://github.com/fiddlerwoaroof/objc-lisp-bridge) -  A portable reader and bridge for interacting with Objective-C and Cocoa. [MIT][200].

## Python ##

* [burgled-batteries ![GitHub Repo Stars](https://img.shields.io/github/stars/pinterface/burgled-batteries) ![GitHub last commit](https://img.shields.io/github/last-commit/pinterface/burgled-batteries)](https://github.com/pinterface/burgled-batteries) - A bridge between Python and Common Lisp. The goal is that Lisp programs can use Python libraries. Not available on Quicklisp. [MIT][200].
* [cl4py ![GitHub Repo Stars](https://img.shields.io/github/stars/marcoheisig/cl4py) ![GitHub last commit](https://img.shields.io/github/last-commit/marcoheisig/cl4py)](https://github.com/marcoheisig/cl4py) - The library cl4py (pronounce as clappy) allows Python programs to call Common Lisp libraries. [MIT][200].
* [py4cl ![GitHub Repo Stars](https://img.shields.io/github/stars/bendudson/py4cl) ![GitHub last commit](https://img.shields.io/github/last-commit/bendudson/py4cl)](https://github.com/bendudson/py4cl) - A library that allows Common Lisp code to access Python libraries. It is basically the inverse of cl4py. [MIT][200].
  * its fork [py4cl2 ![GitHub Repo Stars](https://img.shields.io/github/stars/digikar99/py4cl2) ![GitHub last commit](https://img.shields.io/github/last-commit/digikar99/py4cl2)](https://github.com/digikar99/py4cl2), at first less stable, now more developped and faster.
  * [py4cl2-cffi ![GitHub Repo Stars](https://img.shields.io/github/stars/digikar99/py4cl2-cffi) ![GitHub last commit](https://img.shields.io/github/last-commit/digikar99/py4cl2-cffi)](https://github.com/digikar99/py4cl2-cffi) - CFFI based alternative to py4cl2.
    * "When capable, the CFFI approach can be a 50 times faster than py4cl2."

See also [async-process ![GitHub Repo Stars](https://img.shields.io/github/stars/cxxxr/async-process) ![GitHub last commit](https://img.shields.io/github/last-commit/cxxxr/async-process)](https://github.com/cxxxr/async-process/).

* [cl-python ![GitHub Repo Stars](https://img.shields.io/github/stars/metawilm/cl-python) ![GitHub last commit](https://img.shields.io/github/last-commit/metawilm/cl-python)](https://github.com/metawilm/cl-python) - an implementation of Python in Common Lisp. [LLGPL][8], not under active development.


## .Net Core

* [Bike ![GitHub Repo Stars](https://img.shields.io/github/stars/Lovesan/bike) ![GitHub last commit](https://img.shields.io/github/last-commit/Lovesan/bike)](https://github.com/Lovesan/bike) - a cross-platform .Net Core interface. [MIT][200].

## Miscellaneous ##

* [Foil](http://foil.sourceforge.net/) - A foreign object interface; works with the JVM and CLI. Not available on Quicklisp. [CPL 1.0][47].

For Emacs Lisp:

* [CEDAR](https://gitlab.com/sasanidas/cedar) - an advance interactive development environment aiming to be Emacs compatible with all the features that come with it. (WIP)
* [CLOCC's elisp.lisp](https://sourceforge.net/p/clocc/hg/ci/default/tree/src/cllib/elisp.lisp) - Emacs Lisp in Common Lisp.
  * implementation of the Emacs Lisp language as a Common Lisp package. [1999]
  * does not attempt to reimplement the library of functions provided in Emacs to manipulate buffers and other related objects, so it focuses on the "pure" Emacs Lisp language; but it was able to run the non-UI parts of the Emacs Calendar. (S. Monnier, M. Sperber)


Game Development
================

* [Trial ![GitHub Repo Stars](https://img.shields.io/github/stars/shirakumo/trial) ![GitHub last commit](https://img.shields.io/github/last-commit/shirakumo/trial)](https://github.com/shirakumo/trial) - Trial is an OpenGL game engine with a heavy focus on modularity. It is supposed to provide a large toolkit of useful bits and pieces from which you can create a game. [zlib][33].
  * the [Kandria](https://kandria.com/) game is built with Trial.
* [trivial-gamekit](https://borodust.org/projects/trivial-gamekit/getting-started/) – with this small framework you would be able to make simple 2D games: draw basic geometric forms, images and text, play sounds and listen to mouse and keyboard input. [MIT][200].
* [virality ![GitHub Repo Stars](https://img.shields.io/github/stars/bufferswap/ViralityEngine) ![GitHub last commit](https://img.shields.io/github/last-commit/bufferswap/ViralityEngine)](https://github.com/bufferswap/ViralityEngine) - A component-based game engine written in Common Lisp [MIT][200].
* [Xelf](https://gitlab.com/dto/xelf/) - Extensible game library. Not available on Quicklisp. [GNU LGPL2.1][11].

Utilities:

* [cl-gamepad](https://shirakumo.github.io/cl-gamepad) - Access to gamepads and joysticks on Windows, Mac OS, and Linux. [zlib][33].
* [cl-mpg123](https://shirakumo.github.io/cl-mpg123) and [cl-out123](https://shirakumo.github.io/cl-out123), bindings libraries for libmpg123 and libout123 respectively, giving you fast and easy to use mp3 decoding and cross-platform audio output. [zlib][33].

Graphics
========

These are libraries for working with graphics, rather than making GUIs (i.e. widget toolkits), which have their own section.

* ⭐ [Sketch ![GitHub Repo Stars](https://img.shields.io/github/stars/vydd/sketch) ![GitHub last commit](https://img.shields.io/github/last-commit/vydd/sketch)](https://github.com/vydd/sketch) - A CL framework for the creation of electronic art, graphics, and lots more. [MIT][200].
* [cl-svg ![GitHub Repo Stars](https://img.shields.io/github/stars/wmannis/cl-svg) ![GitHub last commit](https://img.shields.io/github/last-commit/wmannis/cl-svg)](https://github.com/wmannis/cl-svg) - A basic library for producing SVG files. [Expat][14].
* [dufy ![GitHub Repo Stars](https://img.shields.io/github/stars/privet-kitty/dufy) ![GitHub last commit](https://img.shields.io/github/last-commit/privet-kitty/dufy)](https://github.com/privet-kitty/dufy) - exact color manipulation and conversion in various color models. [MIT][200].
* [opticl ![GitHub Repo Stars](https://img.shields.io/github/stars/slyrus/opticl) ![GitHub last commit](https://img.shields.io/github/last-commit/slyrus/opticl)](https://github.com/slyrus/opticl) - a library for representing and processing images. [BSD_2Clause][17].
* [Varjo ![GitHub Repo Stars](https://img.shields.io/github/stars/cbaggers/varjo) ![GitHub last commit](https://img.shields.io/github/last-commit/cbaggers/varjo)](https://github.com/cbaggers/varjo) - Lisp to GLSL translator. [BSD_2Clause][17].
* [Vecto](http://www.xach.com/lisp/vecto/) - Simple vector drawing library. [FreeBSD][39].
* [zpng](http://www.xach.com/lisp/zpng/) - A library for creating PNG files. [FreeBSD][39].
* [pngload-fast ![GitHub Repo Stars](https://img.shields.io/github/stars/lisp-mirror/pngload) ![GitHub last commit](https://img.shields.io/github/last-commit/lisp-mirror/pngload)](https://github.com/lisp-mirror/pngload) - A PNG (Portable Network Graphics) image format decoder in portable Common Lisp with an emphasis on speed. [MIT][200].
* [imago ![GitHub Repo Stars](https://img.shields.io/github/stars/tokenrove/imago) ![GitHub last commit](https://img.shields.io/github/last-commit/tokenrove/imago)](https://github.com/tokenrove/imago) -  image manipulation library for Common Lisp.
  * supports images in png, pcx, portable bitmap (.pnm), Truevision TGA (.tga) and jpeg formats
  * allows for: resizing, rotation, emboss effect, inverting colors, adjusting contrast, manipulating color elements, composing pictures, drawing simple primitives…
  * is integrated with common-lisp-jupyter.

Those are bindings:

* [cl-raylib ![GitHub Repo Stars](https://img.shields.io/github/stars/bohonghuang/claw-raylib) ![GitHub last commit](https://img.shields.io/github/last-commit/bohonghuang/claw-raylib)](https://github.com/bohonghuang/claw-raylib) NEW in 2023 - fully auto-generated Common Lisp bindings to Raylib and Raygui using claw and cffi-object. Apache 2.0.
* [glfw ![GitHub Repo Stars](https://img.shields.io/github/stars/shirakumo/glfw) ![GitHub last commit](https://img.shields.io/github/last-commit/shirakumo/glfw)](https://github.com/shirakumo/glfw) NEW in 2023 - An up-to-date Common Lisp bindings library to the most recent GLFW OpenGL context management library.
* [common-cv ![GitHub Repo Stars](https://img.shields.io/github/stars/byulparan/common-cv) ![GitHub last commit](https://img.shields.io/github/last-commit/byulparan/common-cv)](https://github.com/byulparan/common-cv) - the OpenCV (Open Source Computer Vision Library) binding library for CommonLisp. No license specified.
* [cl-cairo2 ![GitHub Repo Stars](https://img.shields.io/github/stars/rpav/cl-cairo2) ![GitHub last commit](https://img.shields.io/github/last-commit/rpav/cl-cairo2)](https://github.com/rpav/cl-cairo2) - Cairo bindings. [Boost 1.0][54]
* [cl-gd](http://weitz.de/cl-gd/) - A library providing an interface to the GD graphics library. [FreeBSD][39].
* [cl-horde3d ![GitHub Repo Stars](https://img.shields.io/github/stars/anwyn/cl-horde3d) ![GitHub last commit](https://img.shields.io/github/last-commit/anwyn/cl-horde3d)](https://github.com/anwyn/cl-horde3d/) - FFI bindings to the Horde3D graphics library. Not available on Quicklisp. [EPL 1.0][59]
* [cl-jpeg ![GitHub Repo Stars](https://img.shields.io/github/stars/sharplispers/cl-jpeg) ![GitHub last commit](https://img.shields.io/github/last-commit/sharplispers/cl-jpeg)](https://github.com/sharplispers/cl-jpeg) - Baseline JPEG encoder and decoder library. [3-clause BSD][15].
* [cl-liballegro ![GitHub Repo Stars](https://img.shields.io/github/stars/resttime/cl-liballegro) ![GitHub last commit](https://img.shields.io/github/last-commit/resttime/cl-liballegro)](https://github.com/resttime/cl-liballegro) - Interface and bindings to the Allegro 5 game programming library. [zlib][33].
* [cl-opengl ![GitHub Repo Stars](https://img.shields.io/github/stars/3b/cl-opengl) ![GitHub last commit](https://img.shields.io/github/last-commit/3b/cl-opengl)](https://github.com/3b/cl-opengl) - CFFI bindings to OpenGL, GLU and GLUT APIs. [3-clause BSD][15].
* [cl-sdl2 ![GitHub Repo Stars](https://img.shields.io/github/stars/lispgames/cl-sdl2) ![GitHub last commit](https://img.shields.io/github/last-commit/lispgames/cl-sdl2)](https://github.com/lispgames/cl-sdl2) - Bindings for SDL2 using C2FFI. [Expat][14].
* [CLinch ![GitHub Repo Stars](https://img.shields.io/github/stars/BradWBeer/CLinch) ![GitHub last commit](https://img.shields.io/github/last-commit/BradWBeer/CLinch)](https://github.com/BradWBeer/CLinch) - Common Lisp 2D/3D graphics engine for OpenGL. [FreeBSD][39].
* [donuts ![GitHub Repo Stars](https://img.shields.io/github/stars/tkych/donuts) ![GitHub last commit](https://img.shields.io/github/last-commit/tkych/donuts)](https://github.com/tkych/donuts) - Graphviz interface for Common Lisp. [Expat][14].
* [lispbuilder-sdl ![GitHub Repo Stars](https://img.shields.io/github/stars/lispbuilder/lispbuilder) ![GitHub last commit](https://img.shields.io/github/last-commit/lispbuilder/lispbuilder)](https://github.com/lispbuilder/lispbuilder) - A set of bindings for SDL. [Expat][14].
* [lisp-magick-wand ![GitHub Repo Stars](https://img.shields.io/github/stars/TBRSS/lisp-magick-wand) ![GitHub last commit](https://img.shields.io/github/last-commit/TBRSS/lisp-magick-wand)](https://github.com/TBRSS/lisp-magick-wand) - ImageMagick bindings. [BSD][15]. Not in Quicklisp.
* [okra](https://www.common-lisp.net/project/okra/manual.html) - CFFI bindings to Ogre. Not available on Quicklisp. [3-clause BSD][15].
* [cl-cuda ![GitHub Repo Stars](https://img.shields.io/github/stars/takagi/cl-cuda) ![GitHub last commit](https://img.shields.io/github/last-commit/takagi/cl-cuda)](https://github.com/takagi/cl-cuda) - A library to use NVIDIA CUDA in Common Lisp programs. [LLGPL][8].

GUI
===

For an overview and a tutorial on GUI toolkits, see [the Cookbook/GUI](https://lispcookbook.github.io/cl-cookbook/gui.html).

* [LispWork's CAPI](http://www.lispworks.com/products/capi.html) - A portable GUI toolkit, with mobile runtime. Proprietary, but comes with a free version.
* [Allegro's Common Graphics](https://franz.com/products/allegro-common-lisp/acl_gui_tools.lhtml)- a library of functions for writing windowized GUIs for Windows, Mac and Linux. Proprietary with a free version.
  - since Allegro 10.1 (March, 2022), the IDE and the Common Graphics toolkit [runs in the browser](https://franz.com/ftp/pri/acl/cgjs/doc.html).
* 👍 [Qtools ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/qtools) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/qtools)](https://github.com/Shinmera/qtools/) - A Qt toolkit, based on CommonQt. [zlib][33] Also [Qtools-ui ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/qtools-ui) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/qtools-ui)](https://github.com/Shinmera/qtools-ui) (premade UI components), with [videos](https://www.youtube.com/watch?v=KwASFOhYta4&index=7&list=PLkDl6Irujx9Mh3BWdBmt4JtIrwYgihTWp).
* ⭐ [CommonQt ![GitHub Repo Stars](https://img.shields.io/github/stars/commonqt/commonqt) ![GitHub last commit](https://img.shields.io/github/last-commit/commonqt/commonqt)](https://github.com/commonqt/commonqt) - A Common Lisp binding for Qt4 via QtSmoke. [FreeBSD][39].
  * [CommonQt5 ![GitHub Repo Stars](https://img.shields.io/github/stars/commonqt/commonqt5) ![GitHub last commit](https://img.shields.io/github/last-commit/commonqt/commonqt5)](https://github.com/commonqt/commonqt5/) - bindings for Qt5.
    * warn: currently difficult to install. Used in production© by SISCOG.
* ⭐ [ltk](http://www.peter-herth.de/ltk/) - A binding for the Tk toolkit. [LLGPL][8] or [GNU LGPL2.1][11].
  * [LTk Examples](https://peterlane.netlify.app/ltk-examples/) - Provides LTk examples for the tkdocs tutorial.
  * [LTk Plotchart](https://peterlane.netlify.app/ltk-plotchart/) - A wrapper around the tklib/plotchart library to work with LTk. This includes over 20 different chart types (xy-plots, gantt charts, 3d-bar charts etc...).
* [nodgui](https://codeberg.org/cage/nodgui) - Bindings for the Tk toolkit, based on Ltk, with syntax sugar and additional widgets. [LLGPL][8].
  * 🎨 supports [tk custom themes](https://wiki.tcl-lang.org/page/List+of+ttk+Themes), such as [ttkthemes](https://ttkthemes.readthedocs.io/en/latest/themes.html) and [Forest-ttk-theme ![GitHub Repo Stars](https://img.shields.io/github/stars/rdbende/Forest-ttk-theme) ![GitHub last commit](https://img.shields.io/github/last-commit/rdbende/Forest-ttk-theme)](https://github.com/rdbende/Forest-ttk-theme).
  * supports an SDL frame as an alternative to the Tk canvas when fast rendering is needed. For 2D (pixel-based) and 3D rendering (using openGL).
* [IUP ![GitHub Repo Stars](https://img.shields.io/github/stars/lispnik/iup) ![GitHub last commit](https://img.shields.io/github/last-commit/lispnik/iup)](https://github.com/lispnik/iup/) - CFFI bindings to the [IUP](https://www.tecgraf.puc-rio.br/iup/) Portable User Interface library (pre-ALPHA).
  - IUP is cross-platform (Windows, macOS, GNU/Linux, with new Android, iOs, Cocoa and Web Assembly drivers), has many widgets, has a small api and is actively developed.
  - has a web view.
* 🆕 [cl-gtk4 ![GitHub Repo Stars](https://img.shields.io/github/stars/bohonghuang/cl-gtk4) ![GitHub last commit](https://img.shields.io/github/last-commit/bohonghuang/cl-gtk4)](https://github.com/bohonghuang/cl-gtk4) -  GTK4/Libadwaita/WebKit binding for Common Lisp. [LGPL3][9].
* [cl-cffi-gtk ![GitHub Repo Stars](https://img.shields.io/github/stars/crategus/cl-cffi-gtk) ![GitHub last commit](https://img.shields.io/github/last-commit/crategus/cl-cffi-gtk)](https://github.com/crategus/cl-cffi-gtk) - Binding for GTK+3. [GNU LGPL2.1][11].
  - a tutorial: [Learn Common Lisp by Example: GTK GUI with SBCL](https://dev.to/goober99/learn-common-lisp-by-example-gtk-gui-with-sbcl-5e5c)
* [cl-gtk2 ![GitHub Repo Stars](https://img.shields.io/github/stars/dmitryvk/cl-gtk2) ![GitHub last commit](https://img.shields.io/github/last-commit/dmitryvk/cl-gtk2)](https://github.com/dmitryvk/cl-gtk2) - A binding for GTK+2. [LLGPL][8].

But that's not all.

* for Electron, see:
  * [Electron-lisp-boilerplate ![GitHub Repo Stars](https://img.shields.io/github/stars/mikelevins/electron-lisp-boilerplate) ![GitHub last commit](https://img.shields.io/github/last-commit/mikelevins/electron-lisp-boilerplate)](https://github.com/mikelevins/electron-lisp-boilerplate) - a rudimentary boilerplate for building Electron apps that start a Lisp process.
  * [ceramic](https://ceramic.github.io/) - a wrapper around simpler tools to create and build an Electron app for Common Lisp. It is currently broken and unmaintained, but some tools are workth having a look at.
  * NOTE: the main idea in embedding a lisp web app in Electron is to start the lisp webserver as an async process from Electron's `main.js` file, and to point the Electron window to the localhost URL. That's it.
* [CocoaInterface ![GitHub Repo Stars](https://img.shields.io/github/stars/plkrueger/CocoaInterface) ![GitHub last commit](https://img.shields.io/github/last-commit/plkrueger/CocoaInterface)](https://github.com/plkrueger/CocoaInterface/) -
Cocoa interface for Clozure Common Lisp. Build Cocoa user interface
windows dynamically using Lisp code and bypass the typical Xcode
processes. It has
[good documentation and a tutorial ![GitHub Repo Stars](https://img.shields.io/github/stars/plkrueger/CocoaInterface) ![GitHub last commit](https://img.shields.io/github/last-commit/plkrueger/CocoaInterface)](https://github.com/plkrueger/CocoaInterface/blob/master/Documentation/UserInterfaceTutorial.pdf).
* [McCLIM](https://common-lisp.net/project/mcclim/) - An implementation of the Common Lisp Interface Manager, version II. [GNU LGPL2.1][11].
* [cl-webkit ![GitHub Repo Stars](https://img.shields.io/github/stars/joachifm/cl-webkit) ![GitHub last commit](https://img.shields.io/github/last-commit/joachifm/cl-webkit)](https://github.com/joachifm/cl-webkit) - A binding to WebKitGTK+. Also adds web browsing capabilities to an application, leveraging the full power of the WebKit browsing engine. [MIT][200].
* [ftw ![GitHub Repo Stars](https://img.shields.io/github/stars/fjames86/ftw) ![GitHub last commit](https://img.shields.io/github/last-commit/fjames86/ftw)](https://github.com/fjames86/ftw) - A Win32 GUI library. [MIT][200].
* [eql, eql5, eql5-android](https://gitlab.com/eql) - Embedded Qt4 and Qt5 Lisp, embedded in ECL, embeddable in Qt. Port of EQL5 to the Android platform. [MIT][200].
* [bodge-nuklear ![GitHub Repo Stars](https://img.shields.io/github/stars/borodust/bodge-nuklear) ![GitHub last commit](https://img.shields.io/github/last-commit/borodust/bodge-nuklear)](https://github.com/borodust/bodge-nuklear) - Wrapper over the [Nuklear ![GitHub Repo Stars](https://img.shields.io/github/stars/Immediate-Mode-UI/Nuklear) ![GitHub last commit](https://img.shields.io/github/last-commit/Immediate-Mode-UI/Nuklear)](https://github.com/Immediate-Mode-UI/Nuklear) immediate mode GUI library. [MIT][200].
* [vk ![GitHub Repo Stars](https://img.shields.io/github/stars/JolifantoBambla/vk) ![GitHub last commit](https://img.shields.io/github/last-commit/JolifantoBambla/vk)](https://github.com/JolifantoBambla/vk) -  Common Lisp/CFFI bindings for the Vulkan API. [MIT][200].

Other utilities:

* [file-select ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/file-select) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/file-select)](https://github.com/Shinmera/file-select) -  A library to invoke the native system file dialog to select or create files. Zlib.

See also this [demo to use Java Swing from ABCL ![GitHub Repo Stars](https://img.shields.io/github/stars/defunkydrummer/abcl-jazz) ![GitHub last commit](https://img.shields.io/github/last-commit/defunkydrummer/abcl-jazz)](https://github.com/defunkydrummer/abcl-jazz).

Mobile
------

* [LispWork's mobile runtime](http://www.lispworks.com/products/lw4mr.html) - Android and iOs.  Proprietary.
* [LQML](https://gitlab.com/eql/lqml) - a lightweight ECL binding to QML (both Qt5 and Qt6) derived from EQL5. LGPL and public domain.

[hello-allien ![GitHub Repo Stars](https://img.shields.io/github/stars/Gleefre/hello-alien) ![GitHub last commit](https://img.shields.io/github/last-commit/Gleefre/hello-alien)](https://github.com/Gleefre/hello-alien/), SBCL built for an Android application (very new, 2023).


Implementations
===============

* ⭐ [SBCL](http://www.sbcl.org/index.html) - Steel Bank Common Lisp. A fork of CMUCL; compiles to efficient machine code. [Standard compliance][13]. Public domain, with some parts under [Expat][14] and [3-clause BSD][15].
  * see also: [sbcl-librarian ![GitHub Repo Stars](https://img.shields.io/github/stars/quil-lang/sbcl-librarian) ![GitHub last commit](https://img.shields.io/github/last-commit/quil-lang/sbcl-librarian)](https://github.com/quil-lang/sbcl-librarian) -  Dynamic library delivery tools for SBCL. Create shared libraries that can be called from C or Python. MIT. [Blog post](https://mstmetent.blogspot.com/2022/04/using-lisp-libraries-from-other.html). [Tutorial](https://lispcookbook.github.io/cl-cookbook/dynamic-libraries.html).
  * [SBCL-GOODIES ![GitHub Repo Stars](https://img.shields.io/github/stars/sionescu/sbcl-goodies) ![GitHub last commit](https://img.shields.io/github/last-commit/sionescu/sbcl-goodies)](https://github.com/sionescu/sbcl-goodies) - Distributing binaries with Common Lisp and foreign libraries: libssl, libcrypto and libfixposix are statically baked in. [MIT][200].
  * [Nightly Windows builds of SBCL ![GitHub Repo Stars](https://img.shields.io/github/stars/olnw/sbcl-builds) ![GitHub last commit](https://img.shields.io/github/last-commit/olnw/sbcl-builds)](https://github.com/olnw/sbcl-builds) -  Nightly builds of SBCL using MSYS2 UCRT64. See also [Roswell's SBCL MSI builds ![GitHub Repo Stars](https://img.shields.io/github/stars/roswell/sbcl_bin) ![GitHub last commit](https://img.shields.io/github/last-commit/roswell/sbcl_bin)](https://github.com/roswell/sbcl_bin/releases/).
  * [SBCL on Chocolatey for Windows](https://community.chocolatey.org/packages/sbcl) (unofficial)
* ⭐ [CCL](//ccl.clozure.com/) - Clozure Common Lisp; compiler-only implementation, generates native code.  [LLGPL][8].
* [ECL](https://common-lisp.net/project/ecl/) - Embeddable Common Lisp; compiles to C. [GNU LGPL2.1][11].
  * [eclweb ![GitHub Repo Stars](https://img.shields.io/github/stars/chee/eclweb) ![GitHub last commit](https://img.shields.io/github/last-commit/chee/eclweb)](https://github.com/chee/eclweb) is [a proof-of-concept REPL inside a browser](https://repl.chee.party/) using Web Assembly (WASM).
* [ABCL](https://common-lisp.net/project/armedbear/) - Armed Bear Common Lisp; targets the JVM, compiles to bytecode. [Standard conformance][4]. [GNU GPL3][2] with [Classpath exception][3].
  * [abcl-memory-compiler](https://gitlab.com/cl-projects/abcl-memory-compiler) - a way to compile Java source code to create Java classes at runtime with ABCL. [Apache2][89].
* [CLASP ![GitHub Repo Stars](https://img.shields.io/github/stars/drmeister/clasp) ![GitHub last commit](https://img.shields.io/github/last-commit/drmeister/clasp)](https://github.com/drmeister/clasp) - a new Common Lisp implementation that seamlessly interoperates with C++ libraries and programs using LLVM for compilation to native code. This allows Clasp to take advantage of a vast array of preexisting libraries and programs, such as out of the scientific computing ecosystem. [LGPL2.1][11] (and others).

Proprietary:

* [LispWorks](http://www.lispworks.com/) - an integrated cross-platform development tool for Common Lisp.
  * reputed features include: the CAPI cross-platform and native GUI toolkit, the LispWorks IDE, the mobile platforme runtime (iOs, Android), its Java interface, the tree shaker to build lighter binaries, its KnowledgeWorks system for "rule-based, object-oriented, logical, functional and database programming", and more.
  * has a free edition, with limitations (heap size limit, time limit).
* [Allegro CL](https://franz.com/products/allegro-common-lisp/) - provides the full ANSI Common Lisp standard with many extensions.
  * reputed features include: the AllegroCache object persistence database system, the KnowledgeGraph system, its concurrent garbage collector, its web-based IDE, and more.
  * has a free edition. It includes AllegroCache, with a size limit.

Other implementations, mainly for historical purposes:

* [CMUCL](//www.cons.org/cmucl/) - An implementation from Carnegie Mellon University. Public domain. SBCL is a fork of CMUCL.
* [GNU CLISP](http://www.clisp.org/) - A GNU implementation; contains a compiler and an interpreter. [Standard conformance][6]. [GNU GPL3][2]. They develop [on Gitlab](https://gitlab.com/gnu-clisp/clisp).
  * compiles to bytecode, its default REPL is more user friendly than SBCL's (with symbol completion and readline integration).
  * however, it is not actively developed, it doesn't comply entirely to the ANSI standard, it is less performant than SBCL and it is lacking compatibility features.
* [Corman Lisp ![GitHub Repo Stars](https://img.shields.io/github/stars/sharplispers/cormanlisp) ![GitHub last commit](https://img.shields.io/github/last-commit/sharplispers/cormanlisp)](https://github.com/sharplispers/cormanlisp) - a Common Lisp development environment for Microsoft Windows running on Intel platforms. [MIT][200].

You can check the implementations' compatibility to common extensions here: [portability.cl](https://portability.cl).

See also:

* [cl-all ![GitHub Repo Stars](https://img.shields.io/github/stars/shinmera/cl-all) ![GitHub last commit](https://img.shields.io/github/last-commit/shinmera/cl-all)](https://github.com/shinmera/cl-all) - A script to run Lisp snippets in multiple implementations. This allows you to quickly compare implementation behaviour and differences. [zlib][33].


JSON
====

* 👍 [jzon ![GitHub Repo Stars](https://img.shields.io/github/stars/Zulu-Inuoe/jzon) ![GitHub last commit](https://img.shields.io/github/last-commit/Zulu-Inuoe/jzon)](https://github.com/Zulu-Inuoe/jzon/) - a correct, safe and fast JSON parser. [MIT][200].
  * jzon is the only CL JSON library which correctly declines all invalid inputs per the official JSON test suite and accepts all valid inputs per that suite.
  * it doesn't crash on invalid input (jsown), doesn't choke on large datasets (Jonathan), and more.
  * v1.0 released in the Quicklisp dist of February, 2023.
  * "I believe jzon to be the superior choice and hope for it to become the new, true de-facto library in the world of JSON-in-CL once and for all."
* [shasht ![GitHub Repo Stars](https://img.shields.io/github/stars/yitzchak/shasht) ![GitHub last commit](https://img.shields.io/github/last-commit/yitzchak/shasht)](https://github.com/yitzchak/shasht) -  Common Lisp JSON reading and writing for the Kzinti. [MIT][14].
  - " Shasht is one of the two new libraries that I particularly like and is already in quicklisp. It is fast, it handles null correctly, it encodes CLOS objects, structures and hash-tables. It can also do incremental encoding." Sabra Crolleton.
* [cl-json ![GitHub Repo Stars](https://img.shields.io/github/stars/sharplispers/cl-json) ![GitHub last commit](https://img.shields.io/github/last-commit/sharplispers/cl-json)](https://github.com/sharplispers/cl-json) - A highly customizable JSON encoder and decoder. [MIT][14].
  * "cl-json and yason are still the work horses if you need fine control, but speed is not their forte." @sabracrolleton

See this [extensive comparison](https://sabracrolleton.github.io/json-review) of many more JSON libraries.

JSON tools:

* [NJSON ![GitHub Repo Stars](https://img.shields.io/github/stars/atlas-engineer/njson) ![GitHub last commit](https://img.shields.io/github/last-commit/atlas-engineer/njson)](https://github.com/atlas-engineer/njson) - Parser-agnostic JSON indexing (with JSON Pointer support), destructuring, and validation framework. [BSD][15].
* [json-mop ![GitHub Repo Stars](https://img.shields.io/github/stars/gschjetne/json-mop) ![GitHub last commit](https://img.shields.io/github/last-commit/gschjetne/json-mop)](https://github.com/gschjetne/json-mop) - A metaclass for bridging CLOS and JSON objects. [MIT][200].
  * depends on YASON
  * for JSON libraries that don't do it natively (jzon, shasht and cl-json are able to *encode* CLOS objects to JSON out of the box, and cl-json has the ability to *decode* JSON objects into a "fluid-class" CLOS object.)
* [cl-json-pointer ![GitHub Repo Stars](https://img.shields.io/github/stars/y2q-actionman/cl-json-pointer) ![GitHub last commit](https://img.shields.io/github/last-commit/y2q-actionman/cl-json-pointer)](https://github.com/y2q-actionman/cl-json-pointer) - A JSON Pointer implementation. [MIT][200].
* [cl-jwk ![GitHub Repo Stars](https://img.shields.io/github/stars/dnaeon/cl-jwk) ![GitHub last commit](https://img.shields.io/github/last-commit/dnaeon/cl-jwk)](https://github.com/dnaeon/cl-jwk) -  Common Lisp system for decoding public JSON Web Keys (JWK). BSD License.

and search for JSON RPC below.


YAML
====

* 👍 [cl-yaml ![GitHub Repo Stars](https://img.shields.io/github/stars/eudoxia0/cl-yaml.git) ![GitHub last commit](https://img.shields.io/github/last-commit/eudoxia0/cl-yaml.git)](https://github.com/eudoxia0/cl-yaml.git) - a YAML parser and emitter built on top of libyaml. [MIT][200].
* [nyaml ![GitHub Repo Stars](https://img.shields.io/github/stars/jasom/nyaml) ![GitHub last commit](https://img.shields.io/github/last-commit/jasom/nyaml)](https://github.com/jasom/nyaml) - A lisp native YAML parser. MIT.
* [cl-yacclyaml ![GitHub Repo Stars](https://img.shields.io/github/stars/mabragor/cl-yaclyaml) ![GitHub last commit](https://img.shields.io/github/last-commit/mabragor/cl-yaclyaml)](https://github.com/mabragor/cl-yaclyaml) - a pure lisp YAML processor (loader, but not yet dumper). [GPL3][2].


Language extensions
===================

* ⭐ [alexandria](https://common-lisp.net/project/alexandria/) - A general-purpose utility library. Public domain.
* 👍 [serapeum ![GitHub Repo Stars](https://img.shields.io/github/stars/TBRSS/serapeum) ![GitHub last commit](https://img.shields.io/github/last-commit/TBRSS/serapeum)](https://github.com/TBRSS/serapeum/) - Another general-purpose utility library. [Expat][14].
* [rutils ![GitHub Repo Stars](https://img.shields.io/github/stars/vseloved/rutils) ![GitHub last commit](https://img.shields.io/github/last-commit/vseloved/rutils)](https://github.com/vseloved/rutils) - radical yet reasonable syntactic utilities for Common Lisp. [MIT][200].
* [generic-cl ![GitHub Repo Stars](https://img.shields.io/github/stars/alex-gutev/generic-cl) ![GitHub last commit](https://img.shields.io/github/last-commit/alex-gutev/generic-cl)](https://github.com/alex-gutev/generic-cl/) - Generic function interface to standard Common Lisp functions (equality, comparison, arithmetic, objects, iterator, sequences,…). [MIT][200].
  * see also the more lightweight [equals ![GitHub Repo Stars](https://img.shields.io/github/stars/karlosz/equals) ![GitHub last commit](https://img.shields.io/github/last-commit/karlosz/equals)](https://github.com/karlosz/equals/) [MIT][200].
* [anaphora](https://common-lisp.net/project/anaphora/) - A collection of anaphoric macros. Public domain.
* [arrow-macros ![GitHub Repo Stars](https://img.shields.io/github/stars/hipeta/arrow-macros) ![GitHub last commit](https://img.shields.io/github/last-commit/hipeta/arrow-macros)](https://github.com/hipeta/arrow-macros) - Clojure-like threading macros. [MIT][200].
* [hu.dwim.walker ![GitHub Repo Stars](https://img.shields.io/github/stars/hu-dwim/hu.dwim.walker) ![GitHub last commit](https://img.shields.io/github/last-commit/hu-dwim/hu.dwim.walker)](https://github.com/hu-dwim/hu.dwim.walker) - a code walker and unwalker (aka AST parser and unparser). [BSD][15]. See also [this blog post](http://40ants.com/lisp-project-of-the-day/2020/04/0044-hu.dwim.walker.html).

Pattern matching
--------------------

* ⭐ [trivia ![GitHub Repo Stars](https://img.shields.io/github/stars/guicho271828/trivia) ![GitHub last commit](https://img.shields.io/github/last-commit/guicho271828/trivia)](https://github.com/guicho271828/trivia/) - Optimized pattern-matching library. [LLGPL][8].


Portability layers
------------------

A large list of portability layers is collected here: [portability.cl/](https://portability.cl/). Here are some of them:

* [trivial-arguments ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/trivial-arguments) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/trivial-arguments)](https://github.com/Shinmera/trivial-arguments) - A portable library to retrieve the arguments list of a function. [zlib][33].
* [definitions ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/definitions) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/definitions)](https://github.com/Shinmera/definitions) - a general definitions introspection library. It gives you the ability to retrieve definitions or bindings associated with designators such as symbols, packages, and names in general. [zlib][33].
* [dissect](https://shinmera.github.io/dissect) - when a lot of projects use the “trivial-backtrace” system that just gives them a string with a backtrace, Dissect allows you to capture, step, and completely inspect the stack trace on a variety of Lisp implementations. Also very useful for logging and other situations where execution is automatically continued, but the information of the current stack is still useful to store somewhere. [zlib][33].
  * [ndebug ![GitHub Repo Stars](https://img.shields.io/github/stars/atlas-engineer/ndebug) ![GitHub last commit](https://img.shields.io/github/last-commit/atlas-engineer/ndebug)](https://github.com/atlas-engineer/ndebug) - Framework for portable GUI (or any non-standard) debuggers, based on [dissect](https://shinmera.github.io/dissect) and [trivial-custom-debugger ![GitHub Repo Stars](https://img.shields.io/github/stars/phoe/trivial-custom-debugger) ![GitHub last commit](https://img.shields.io/github/last-commit/phoe/trivial-custom-debugger)](https://github.com/phoe/trivial-custom-debugger). [BSD][15].

Changing the syntax
-------------------

* [cl-annot ![GitHub Repo Stars](https://img.shields.io/github/stars/m2ym/cl-annot) ![GitHub last commit](https://img.shields.io/github/last-commit/m2ym/cl-annot)](https://github.com/m2ym/cl-annot) - Python-like annotations for Common Lisp. [LLGPL][8].
  * [cl-annot-revisit ![GitHub Repo Stars](https://img.shields.io/github/stars/y2q-actionman/cl-annot-revisit) ![GitHub last commit](https://img.shields.io/github/last-commit/y2q-actionman/cl-annot-revisit)](https://github.com/y2q-actionman/cl-annot-revisit/) -  re-implementation of cl-annot. WTFPL.
* [cl-syntax ![GitHub Repo Stars](https://img.shields.io/github/stars/m2ym/cl-syntax) ![GitHub last commit](https://img.shields.io/github/last-commit/m2ym/cl-syntax)](https://github.com/m2ym/cl-syntax) - Reader syntax conventions. [LLGPL][8].
* [cl-reader ![GitHub Repo Stars](https://img.shields.io/github/stars/digikar99/reader) ![GitHub last commit](https://img.shields.io/github/last-commit/digikar99/reader)](https://github.com/digikar99/reader) - A utility library intended at providing reader macros for lambdas, mapping, accessors, hash-tables and hash-sets. [MIT][200].
* [clamp ![GitHub Repo Stars](https://img.shields.io/github/stars/malisper/Clamp) ![GitHub last commit](https://img.shields.io/github/last-commit/malisper/Clamp)](https://github.com/malisper/Clamp) - Arc language's brevity and conciseness to Common Lisp. [Artistic License 2.0][51].
  * also [arc-compat ![GitHub Repo Stars](https://img.shields.io/github/stars/g000001/arc-compat) ![GitHub last commit](https://img.shields.io/github/last-commit/g000001/arc-compat)](https://github.com/g000001/arc-compat) -  Arc compatible package. Perl Foundation's Artistic Licence 2.0.

For strings:

* ⭐ [cl-interpol ![GitHub Repo Stars](https://img.shields.io/github/stars/edicl/cl-interpol) ![GitHub last commit](https://img.shields.io/github/last-commit/edicl/cl-interpol)](https://github.com/edicl/cl-interpol/) - A set of reader modifications to allow string interpolation. [BSD][15].
* [mstrings](https://git.sr.ht/~shunter/mstrings) -  a reader macro to provide visually appealing multiline blocks. An M-string trims leading whitespace, concatenates lines together, etc. [BSD_3Clause][15].
* [pythonic-string-reader ![GitHub Repo Stars](https://img.shields.io/github/stars/smithzvk/pythonic-string-reader) ![GitHub last commit](https://img.shields.io/github/last-commit/smithzvk/pythonic-string-reader)](https://github.com/smithzvk/pythonic-string-reader) - A simple and unobtrusive read table modification inspired by Python's three quote strings. [BSD_3Clause][15].
* [cl-heredoc ![GitHub Repo Stars](https://img.shields.io/github/stars/outergod/cl-heredoc) ![GitHub last commit](https://img.shields.io/github/last-commit/outergod/cl-heredoc)](https://github.com/outergod/cl-heredoc) - a ["heredocs" ![GitHub Repo Stars](https://img.shields.io/github/stars/outergod/cl-heredoc) ![GitHub last commit](https://img.shields.io/github/last-commit/outergod/cl-heredoc)](https://github.com/outergod/cl-heredoc) dispatcher. [GPL3][2]. Allows to write: `#>eof>Write whatever (you) "want", no matter what characters, until the magic end sequence has been reached.eof`


CLOS extensions
---------------

* ⭐ [closer-mop ![GitHub Repo Stars](https://img.shields.io/github/stars/pcostanza/closer-mop) ![GitHub last commit](https://img.shields.io/github/last-commit/pcostanza/closer-mop)](https://github.com/pcostanza/closer-mop) - A compatibility layer that rectifies many absent or incorrect MOP features. [Expat][14].
* [specialization-store ![GitHub Repo Stars](https://img.shields.io/github/stars/markcox80/specialization-store) ![GitHub last commit](https://img.shields.io/github/last-commit/markcox80/specialization-store)](https://github.com/markcox80/specialization-store/) - generic functions based on types. Simplified BSD License variant.
* [filtered-functions ![GitHub Repo Stars](https://img.shields.io/github/stars/pcostanza/filtered-functions) ![GitHub last commit](https://img.shields.io/github/last-commit/pcostanza/filtered-functions)](https://github.com/pcostanza/filtered-functions) - enable the use of arbitrary predicates for selecting and applying methods. [MIT][200].
* [inlined-generic-function ![GitHub Repo Stars](https://img.shields.io/github/stars/guicho271828/inlined-generic-function) ![GitHub last commit](https://img.shields.io/github/last-commit/guicho271828/inlined-generic-function)](https://github.com/guicho271828/inlined-generic-function) -
Bringing the speed of Static Dispatch to CLOS. [LLGPL][8].
* [static-dispatch ![GitHub Repo Stars](https://img.shields.io/github/stars/alex-gutev/static-dispatch) ![GitHub last commit](https://img.shields.io/github/last-commit/alex-gutev/static-dispatch)](https://github.com/alex-gutev/static-dispatch) - allows standard generic function dispatch to be performed statically (at compile time) rather than dynamically (runtime). This is similar to what is known as "overloading" in languages such as C++ and Java. [MIT][200].
* [dynamic-mixins ![GitHub Repo Stars](https://img.shields.io/github/stars/rpav/dynamic-mixins) ![GitHub last commit](https://img.shields.io/github/last-commit/rpav/dynamic-mixins)](https://github.com/rpav/dynamic-mixins) - simple, dynamic class combination. [BSD_2Clause][17].
* [fast-generic-functions ![GitHub Repo Stars](https://img.shields.io/github/stars/marcoheisig/fast-generic-functions) ![GitHub last commit](https://img.shields.io/github/last-commit/marcoheisig/fast-generic-functions)](https://github.com/marcoheisig/fast-generic-functions) - Seal your generic functions for an extra boost in performance. [MIT][200].
* [polymorphic functions ![GitHub Repo Stars](https://img.shields.io/github/stars/digikar99/polymorphic-functions) ![GitHub last commit](https://img.shields.io/github/last-commit/digikar99/polymorphic-functions)](https://github.com/digikar99/polymorphic-functions) - A function type to dispatch on types instead of classes with partial support for dispatching on optional and keyword argument types. Still experimental (May, 2021). [MIT][200].
  - polymorphic-functions dispatch on the types of the arguments supplied to it. This helps dispatching on specialized arrays as well as user-defined types.
  - for differences with specialization-store and fast-generic-functions, see its README.

Writing terser defclass forms:

* [defclass-std ![GitHub Repo Stars](https://img.shields.io/github/stars/lisp-maintainers/defclass-std) ![GitHub last commit](https://img.shields.io/github/last-commit/lisp-maintainers/defclass-std)](https://github.com/lisp-maintainers/defclass-std) - a shortcut macro to write DEFCLASS and PRINT-OBJECT forms quickly. [LLGPL][8].
* [nclasses ![GitHub Repo Stars](https://img.shields.io/github/stars/atlas-engineer/nclasses) ![GitHub last commit](https://img.shields.io/github/last-commit/atlas-engineer/nclasses)](https://github.com/atlas-engineer/nclasses) - Syntactic sugar for class and generic function declarations. Features type inference, automatic accessors, inline initform syntax, automatic exports, and other conveniences. [BSD][15].

And also:

* [slot-extra-options ![GitHub Repo Stars](https://img.shields.io/github/stars/some-mthfka/slot-extra-options) ![GitHub last commit](https://img.shields.io/github/last-commit/some-mthfka/slot-extra-options)](https://github.com/some-mthfka/slot-extra-options) - lets you build a metaclass which in turn lets you specify extra slot options in its classes. [LGPL3][9].

Function extensions
-------------------

* [cl-hooks ![GitHub Repo Stars](https://img.shields.io/github/stars/scymtym/architecture.hooks) ![GitHub last commit](https://img.shields.io/github/last-commit/scymtym/architecture.hooks)](https://github.com/scymtym/architecture.hooks/) - Hooks extension point mechanism (as known, e.g., from GNU Emacs). LGPL.
* [method-hooks](https://gitlab.com/Gnuxie/method-hooks) - When CLOS method combination allow only one hook per method, this library allows an arbitrary number of them. Mozilla Public Licence.
* [cl-advice ![GitHub Repo Stars](https://img.shields.io/github/stars/lisp-mirror/budden-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/lisp-mirror/budden-tools)](https://github.com/lisp-mirror/budden-tools/blob/213ab2b52a1b0c0b496efd30c3b5143f5c8e1ff2/cl-advice/README.md) - an attempt of portable layer advice library for SBCL, CCL, LispWorks and Allegro. Not in Quicklisp.
* [nhooks ![GitHub Repo Stars](https://img.shields.io/github/stars/atlas-engineer/nhooks) ![GitHub last commit](https://img.shields.io/github/last-commit/atlas-engineer/nhooks)](https://github.com/atlas-engineer/nhooks) - an enhanced implementation of hooks (extension points) with crucial improvements.

Iteration
---------

* ⭐ [iterate](https://common-lisp.net/project/iterate/) - An iteration construct for Common Lisp which is extensible and Lispier. [MIT][200].
* [for](https://shinmera.github.io/for/) - A concise, lispy and extensible iteration macro. Unlike loop it is extensible and sensible, and unlike iterate it does not require code-walking and is easier to extend. [zlib][33].
* [series](https://series.sourceforge.net/) - Functional style without any runtime penalty at all. [MIT][200].
* [trivial-do ![GitHub Repo Stars](https://img.shields.io/github/stars/yitzchak/trivial-do) ![GitHub last commit](https://img.shields.io/github/last-commit/yitzchak/trivial-do)](https://github.com/yitzchak/trivial-do/) -  Additional dolist style macros for Common Lisp. [MIT][200].
* [doplus ![GitHub Repo Stars](https://img.shields.io/github/stars/alessiostalla/doplus) ![GitHub last commit](https://img.shields.io/github/last-commit/alessiostalla/doplus)](https://github.com/alessiostalla/doplus) – another extensible iteration library, similar to :for.
* [cl-transducers](https://git.sr.ht/~fosskers/cl-transducers) - Ergonomic, efficient data processing. [LGPL3][9].
  * "Transducers are an ergonomic and extremely memory-efficient way to process a data source. Here “data source” means simple collections like Lists or Vectors, but also potentially large files or generators of infinite data."
  * "It is, in general, the most complete implementation of the Transducer pattern."
  * a "modern" API with `map`, `filter`, `take`, `repeat`, `cycle`, `fold`…
* [snakes ![GitHub Repo Stars](https://img.shields.io/github/stars/BnMcGn/snakes) ![GitHub last commit](https://img.shields.io/github/last-commit/BnMcGn/snakes)](https://github.com/BnMcGn/snakes) - Python style generators for Common Lisp. Includes a port of itertools. [Apache2][89].
* [picl ![GitHub Repo Stars](https://img.shields.io/github/stars/anlsh/picl) ![GitHub last commit](https://img.shields.io/github/last-commit/anlsh/picl)](https://github.com/anlsh/picl) - An (almost) complete port of Python's itertools package, complete with laziness where applicable, and not relying on cl-cont. [MIT][200].
* [gtwiwtg](https://cicadas.surf/cgit/colin/gtwiwtg.git/about/) - A lazy sequences library. Similar to 'series' but not as complete. However it has a 'modern' API with stuff like `take`, `filter`, `for`, `fold`, etc. that is easy to use.
* [gmap ![GitHub Repo Stars](https://img.shields.io/github/stars/slburson/misc-extensions) ![GitHub last commit](https://img.shields.io/github/last-commit/slburson/misc-extensions)](https://github.com/slburson/misc-extensions/blob/master/src/gmap.lisp) - A concise and extensible iteration facility that has the advantage of integrating well with FSet (see the Data Structures section), as it was written by the same author. In Quicklisp as part of `misc-extensions`. Public domain.


Lambda shorthands
-----------------

* [fn ![GitHub Repo Stars](https://img.shields.io/github/stars/cbaggers/fn) ![GitHub last commit](https://img.shields.io/github/last-commit/cbaggers/fn)](https://github.com/cbaggers/fn) - a couple of lambda shorthand macros. `(fn* (+ _ _))  -->  (lambda (_) (+ _ _))`. Public domain.
* [f-underscore](https://gitlab.common-lisp.net/bpm/f-underscore) - a tiny library of functional programming utils. `(f_ (+ _ _)) -> (lambda (_) (+ _ _))`. Public domain.
* [cl-punch ![GitHub Repo Stars](https://img.shields.io/github/stars/windymelt/cl-punch) ![GitHub last commit](https://img.shields.io/github/last-commit/windymelt/cl-punch)](https://github.com/windymelt/cl-punch/) - Scala-like anonymous lambda literals. `(mapcar ^(* 2 _) '(1 2 3 4 5))`. [MIT][200].


See also [Rutils ![GitHub Repo Stars](https://img.shields.io/github/stars/vseloved/rutils) ![GitHub last commit](https://img.shields.io/github/last-commit/vseloved/rutils)](https://github.com/vseloved/rutils).


Non-deterministic, logic programming
------------------------------------

* [cl-prolog2 ![GitHub Repo Stars](https://img.shields.io/github/stars/guicho271828/cl-prolog2) ![GitHub last commit](https://img.shields.io/github/last-commit/guicho271828/cl-prolog2)](https://github.com/guicho271828/cl-prolog2) - Common Interface to ISO Prolog implementations from Common Lisp. [MIT][200].
* [Screamer ![GitHub Repo Stars](https://img.shields.io/github/stars/nikodemus/screamer) ![GitHub last commit](https://img.shields.io/github/last-commit/nikodemus/screamer)](https://github.com/nikodemus/screamer) - augment Common
  Lisp with practically all of the functionality of both Prolog and
  constraint logic programming
  languages. [Blog post](https://chriskohlhepp.wordpress.com/reasoning-systems/specification-driven-programming-in-common-lisp/)
  solving Project Euler puzzles. [MIT][200].
* [Screamer+ ![GitHub Repo Stars](https://img.shields.io/github/stars/yakovzaytsev/screamer-plus) ![GitHub last commit](https://img.shields.io/github/last-commit/yakovzaytsev/screamer-plus)](https://github.com/yakovzaytsev/screamer-plus) - increasing the expressiveness of SCREAMER. [MIT][200].
* [AP5](https://ap5.com/) - allows users to program in a model of first order logic or a relational database. 1989, updated 2024. Public domain.
* [Temperance ![GitHub Repo Stars](https://img.shields.io/github/stars/sjl/temperance) ![GitHub last commit](https://img.shields.io/github/last-commit/sjl/temperance)](https://github.com/sjl/temperance) - logic programming. [MIT][200]. A focus on performance, with General Game Playing in mind.

Reactive programming
--------------------

* [Cells ![GitHub Repo Stars](https://img.shields.io/github/stars/kennytilton/cells) ![GitHub last commit](https://img.shields.io/github/last-commit/kennytilton/cells)](https://github.com/kennytilton/cells) - an implementation of the dataflow programming paradigm, reactive spreadsheet-like expressiveness for CLOS. Used to build an [algebra learning system](http://tiltontec.com/). With [documentation ![GitHub Repo Stars](https://img.shields.io/github/stars/stefano/cells-doc) ![GitHub last commit](https://img.shields.io/github/last-commit/stefano/cells-doc)](https://github.com/stefano/cells-doc/). Lisp LGPL.
* [lwcells ![GitHub Repo Stars](https://img.shields.io/github/stars/kchanqvq/lwcells) ![GitHub last commit](https://img.shields.io/github/last-commit/kchanqvq/lwcells)](https://github.com/kchanqvq/lwcells) - Light Weight Cells.
  * LWCELLS is a dataflow extension to Common Lisp. It maintains a consistent state of cells according to functions specifying their relation. LWCELLS is designed to be simple, clean, compositional and flexible.

Contract programming
--------------------

* [quid-pro-quo ![GitHub Repo Stars](https://img.shields.io/github/stars/sellout/quid-pro-quo) ![GitHub last commit](https://img.shields.io/github/last-commit/sellout/quid-pro-quo)](https://github.com/sellout/quid-pro-quo) - a contract
  programming library in the style of Eiffel’s Design by Contract��™. Public domain.

Typing
------

* 👍 [Coalton ![GitHub Repo Stars](https://img.shields.io/github/stars/coalton-lang/coalton) ![GitHub last commit](https://img.shields.io/github/last-commit/coalton-lang/coalton)](https://github.com/coalton-lang/coalton/) - an efficient, statically typed functional programming language that supercharges Common Lisp. [MIT][200].
* 👍 [trivial-types ![GitHub Repo Stars](https://img.shields.io/github/stars/m2ym/trivial-types) ![GitHub last commit](https://img.shields.io/github/last-commit/m2ym/trivial-types)](https://github.com/m2ym/trivial-types) - provides missing but important type definitions such as `proper-list`, `association-list`, `property-list` and `tuple`. [LLGPL][8].
* [defstar](https://bitbucket.org/eeeickythump/defstar/src/master/) - a collection of macros for easy inclusion of type declarations for arguments in lambda lists. [GNU GPL3][2]
* [algebraic-data-types ![GitHub Repo Stars](https://img.shields.io/github/stars/stylewarning/cl-algebraic-data-type) ![GitHub last commit](https://img.shields.io/github/last-commit/stylewarning/cl-algebraic-data-type)](https://github.com/stylewarning/cl-algebraic-data-type) - defining algebraic data types in a similar spirit to Haskell or Standard ML, as well as for operating on them. [BSD_3Clause][15].

See also:

* [typo ![GitHub Repo Stars](https://img.shields.io/github/stars/marcoheisig/Typo) ![GitHub last commit](https://img.shields.io/github/last-commit/marcoheisig/Typo)](https://github.com/marcoheisig/Typo/) -  A portable type inference library for Common Lisp. [MIT][200].
* experimental: [PELTADOT](https://gitlab.com/digikar/peltadot/) - PELTADOT Extends Lisp’s Types And Dispatches Over Them.

Theorem provers
-------------------

* [ACL2](https://www.cs.utexas.edu/users/moore/acl2/) - a logic and programming language in which you can model computer systems, together with a tool to help you prove properties of those models.
  * used in the industry since the 1990s.
  * it supports a subset of the ANSI standard Common Lisp programming language.
  * "Companies that have used ACL2 regularly include AMD, Centaur Technology, IBM, Intel, Kestrel Institute, Motorola/Freescale, Oracle and Rockwell Collins." ([source](https://royalsocietypublishing.org/doi/10.1098/rsta.2015.0399))
  * [Proofpad ![GitHub Repo Stars](https://img.shields.io/github/stars/calebegg/proof-pad) ![GitHub last commit](https://img.shields.io/github/last-commit/calebegg/proof-pad)](https://github.com/calebegg/proof-pad/), an online IDE for ACL2.
  * [ACL2-kernel ![GitHub Repo Stars](https://img.shields.io/github/stars/tani/acl2-kernel) ![GitHub last commit](https://img.shields.io/github/last-commit/tani/acl2-kernel)](https://github.com/tani/acl2-kernel), a Jupyter Kernel for ACL2.
  * [ACL2 Sedan](http://acl2s.ccs.neu.edu/acl2s/doc/), an Eclipse plugin that provides a modern IDE for ACL2, used with students at universities.
    * paper: [Using ACL2 to teach students about software testing](https://cgi.cse.unsw.edu.au/~eptcs/content.cgi?ACL22022).
* NASA's [PVS](https://pvs.csl.sri.com/), the Prototype Verification System, and [NASAlib ![GitHub Repo Stars](https://img.shields.io/github/stars/nasa/pvslib) ![GitHub last commit](https://img.shields.io/github/last-commit/nasa/pvslib)](https://github.com/nasa/pvslib), a collection of formal development libraries.
  * its 63 top-level libraries span the fields of: real analysis, limits, continuity, derivatives, integrals; complex integration; directed graphs; exact real arithmetic including trig functions; interval arithmetic and numerical approximations; linear algebra; 2-D, 3-D, 4-D, and n-dimensional vectors… and more.

Learning and Tutorials
=====================

## Online ##

Beginner
--------

* [Learn X in Y minutes - Where X = Common Lisp](https://learnxinyminutes.com/docs/common-lisp/) - Small Common Lisp tutorial covering the essentials.
* [Lisp Koans][201] - The project guides the learner progressively through many Common Lisp language features.
* [Practical Common Lisp][206] - A good introductory text to Common Lisp, with practical examples.
  * better read with [a Firefox add-on: Practical-cl beautified ![GitHub Repo Stars](https://img.shields.io/github/stars/vale981/practical-cl-beautified) ![GitHub last commit](https://img.shields.io/github/last-commit/vale981/practical-cl-beautified)](https://github.com/vale981/practical-cl-beautified).
  * translated in [Chinese simplified](https://binghe.github.io/pcl-cn/)
* [Common LISP: A Gentle Introduction to Symbolic Computation](http://www.cs.cmu.edu/afs/cs.cmu.edu/user/dst/www/LispBook/index.html) - A nice introduction into the language.
* [Successful Lisp](http://successful-lisp.blogspot.com/) - A good book for beginners with some programming background.
* [Lisp Quickstart](https://cs.gmu.edu/~sean/lisp/LispTutorial.html) - A good tutorial to get up and code Common Lisp quickly.
* [Casting SPELs in LISP](http://www.lisperati.com/casting.html) - A fun way to learn LISP while reading a comic book.
* 📹 [Common Lisp Programming: from novice to effective developer](https://www.udemy.com/course/common-lisp-programming/?referralCode=2F3D698BBC4326F94358) - A learning video series on the Udemy platform (*full content under paid access*). By an active lisper and community contributor (@vindarel). [Github home ![GitHub Repo Stars](https://img.shields.io/github/stars/vindarel/common-lisp-course-in-videos) ![GitHub last commit](https://img.shields.io/github/last-commit/vindarel/common-lisp-course-in-videos)](https://github.com/vindarel/common-lisp-course-in-videos/).
  > Thanks for supporting my work on Udemy. I can send a free link to students, just contact me.
* [Loving Common Lisp, or the Savvy Programmer's Secret Weapon](https://leanpub.com/lovinglisp) - Quick introduction to Common Lisp with many examples. A particular focus is on how to use Large Language Models (LLMs).

Intermediate
------------

* [The Common Lisp Cookbook](https://lispcookbook.github.io/cl-cookbook/)
* [Lisp Tips ![GitHub Repo Stars](https://img.shields.io/github/stars/lisp-tips/lisp-tips) ![GitHub last commit](https://img.shields.io/github/last-commit/lisp-tips/lisp-tips)](https://github.com/lisp-tips/lisp-tips/issues/) - A blog with useful tips and tricks.
* [Lisp project of the day](http://40ants.com/lisp-project-of-the-day/) - A blog showcasing many Lisp libraries.
* A gentle introduction to Compile-Time Computing - [Part 1](https://medium.com/@MartinCracauer/a-gentle-introduction-to-compile-time-computing-part-1-d4d96099cea0), [Part 2](https://medium.com/@MartinCracauer/a-gentle-introduction-to-compile-time-computing-part-2-cb0a46f6cfe8), [Part 3 (Safely dealing with scientific units of variables at compile time)](https://medium.com/@MartinCracauer/a-gentle-introduction-to-compile-time-computing-part-3-scientific-units-8e41d8a727ca)
* [Static type checking in the programmable programming language](https://medium.com/@MartinCracauer/static-type-checking-in-the-programmable-programming-language-lisp-79bb79eb068a)

Advanced
--------

* [Let Over Lambda][156] - A book on advanced macro techniques. The first six chapters are available online.
* [On Lisp](http://www.paulgraham.com/onlisp.html) - Paul Graham's amazing book on Lisp macros (and other interesting things).
* [Programming Algorithms in Lisp](https://link.springer.com/book/10.1007/978-1-4842-6428-7) - Updated version of "[Programming Algorithms](https://leanpub.com/progalgs)"; A comprehensive guide to writing efficient programs with data structures and algorithms in Lisp.

And a couple learning resources for SBCL internals:

* [SBCL internals](https://simonsafar.com/2020/sbcl/)
* [sbcl-wiki ![GitHub Repo Stars](https://img.shields.io/github/stars/guicho271828/sbcl-wiki) ![GitHub last commit](https://img.shields.io/github/last-commit/guicho271828/sbcl-wiki)](https://github.com/guicho271828/sbcl-wiki/wiki) - an open wiki to document SBCL's internals.


Coding platforms
----------------

* [Codewars](https://docs.codewars.com/languages/commonlisp/) - a code training platform, with Common Lisp support (SBCL).

Web Development
--------

* [Section on Web Development in The Common Lisp Cookbook](https://lispcookbook.github.io/cl-cookbook/web.html) - An introductory tutorial covering web server setup, routing, weblocks, templating, error handling, packaging, hot reloading, database connection, and deployment, amongst other topics in the current lisp web development ecosystem.
* [Lisp for the Web](https://leanpub.com/lispweb) - A book that walks you through building a voting web application in three tiers.
* [Lisp Web Tales](https://leanpub.com/lispwebtales) - Simple tutorials using [hunchentoot](http://edicl.github.io/hunchentoot/), [cl-redis ![GitHub Repo Stars](https://img.shields.io/github/stars/vseloved/cl-redis) ![GitHub last commit](https://img.shields.io/github/last-commit/vseloved/cl-redis)](https://github.com/vseloved/cl-redis), [restas ![GitHub Repo Stars](https://img.shields.io/github/stars/archimag/restas) ![GitHub last commit](https://img.shields.io/github/last-commit/archimag/restas)](https://github.com/archimag/restas), [SEXML ![GitHub Repo Stars](https://img.shields.io/github/stars/madnificent/SEXML) ![GitHub last commit](https://img.shields.io/github/last-commit/madnificent/SEXML)](https://github.com/madnificent/SEXML), [Postmodern ![GitHub Repo Stars](https://img.shields.io/github/stars/marijnh/Postmodern) ![GitHub last commit](https://img.shields.io/github/last-commit/marijnh/Postmodern)](https://github.com/marijnh/Postmodern), and more.

Reference
---------

* NEW! [CL CommunitySpec](https://cl-community-spec.github.io/pages/index.html) - a rendition of the Common Lisp ANSI Specification draft.
  * with an interactive search, syntax highlighting! And open-source.
* NEW! [novaspec](https://novaspec.org/) - a modern rendition of the CL ANSI draft.
  * not open-source?

* [Common Lisp Quick Reference](http://clqr.boundp.org/index.html) - A distilled, pocket-size version of the ANSI CL spec. Available for download as a PDF.
* [CLHS](http://www.lispworks.com/documentation/lw50/CLHS/Front/index.htm) - The Common Lisp HyperSpec; the ANSI CL standard, in hypertext form.
* [CLOS MOP specification](https://clos-mop.hexstreamsoft.com/) - A modern public domain online version of chapters 5 and 6 of The Art of the Metaobject Protocol
* [Common Lisp Standard Draft (pdf)](https://franz.com/support/documentation/cl-ansi-standard-draft-w-sidebar.pdf) - The standard draft of the Common Lisp specifications, in a well formatted PDF with a sidebar.
  * also [dpans2texi ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/dpans2texi) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/dpans2texi)](https://github.com/mmontone/dpans2texi/releases/) - the standard draft converted to Texinfo and published as a well formatted PDF.
* [Common Lisp the Language](http://www.cs.cmu.edu/Groups/AI/html/cltl/cltl2.html) - The original standard for Common Lisp before the ANSI spec.
  * [CLtL2, in PDF format ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/cltl2-doc) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/cltl2-doc)](https://github.com/mmontone/cltl2-doc)
* [Minispec](https://lamberta.github.io/minispec/) - A friendlier, but less-complete, version of CLHS. Also contains documentation for some commonly-used CL libraries (such as Alexandria).
* [Simplified Common Lisp reference](http://jtra.cz/stuff/lisp/sclr/index.html) - The simplified version of CLHS.
* [CDR](https://cdr.common-lisp.dev/) - Common Lisp Document Repository. a repository of documents that are of interest to the Common Lisp community. The most important property of a CDR document is that it will never change: if you refer to it, you can be sure that your reference will always refer to exactly the same document.
  - the Common Lisp Document Repository is hosted at [Zenodo](https://zenodo.org/communities/cdr/).

## Offline ##

The CLHS is available offline via an [archive](ftp://ftp.lispworks.com/pub/software_tools/reference/HyperSpec-7-0.tar.gz) and as doc sets in [Dash](https://kapeli.com/dash), [Zeal](https://zealdocs.org/) and [Velocity](https://velocity.silverlakesoftware.com/).

Beginner
--------

* [Land of Lisp](http://landoflisp.com/) - A fun, game-oriented introduction to Common Lisp.
* [Practical Common Lisp][206] - A good introductory text to Common Lisp, with practical examples.

Intermediate
------------

* [ANSI Common Lisp](http://www.paulgraham.com/acl.html) - A thorough, practical covering of the entire language, with exercises. Not recommended as a starter text, due to [some caveats][20].
* [Common Lisp Recipes](http://weitz.de/cl-recipes/) - **Common Lisp Recipes** is a collection of solutions to problems and answers to questions you are likely to encounter when writing real-world applications in Common Lisp. Published in 2015.

Advanced
--------

* [Let Over Lambda][156] - A book on advanced macro techniques. All eight chapters are available in the print copy.
* [Object-Oriented Programming in Common Lisp: A Programmer's Guide to CLOS][21] - An old, but very thorough book on CLOS.
* [Paradigms of Artificial Intelligence Programming: Case Studies in Common Lisp][157] - A book on programming AI that covers some advanced Lisp.
  * with a web version: [https://norvig.github.io/paip-lisp/](https://norvig.github.io/paip-lisp/#/)
  * [PAIP-lisp ![GitHub Repo Stars](https://img.shields.io/github/stars/norvig/paip-lisp) ![GitHub last commit](https://img.shields.io/github/last-commit/norvig/paip-lisp)](https://github.com/norvig/paip-lisp) -  Lisp code for the textbook "Paradigms of Artificial Intelligence Programming".
* [Norvig's Lisp style](https://www.cs.umd.edu/~nau/cmsc421/norvig-lisp-style.pdf)
  * and [lisp-lang.org's style guide](https://lisp-lang.org/style-guide/)

Other books
-----------

* [Building Problem Solvers](https://www.qrg.northwestern.edu/bps/readme.html) ([PDF](http://www.qrg.northwestern.edu/bps/BPS-Searchable.pdf)) by Ken Forbus and Johan de Kleer, made available for free by MIT Press - a  unique book among standard artificial intelligence texts in combining science and engineering, theory and craft to describe the construction of AI reasoning systems, and including code illustrating the ideas.

Community
---------

* [/r/Common_Lisp](https://www.reddit.com/r/Common_Lisp/) - subreddit about Common Lisp
* [/r/learnlisp](https://www.reddit.com/r/learnlisp/) - a subreddit to ask questions and get help about Lisp
* [common-lisp.net](https://common-lisp.net)
* [lisp-lang.org](https://lisp-lang.org/)
* [Lisp Discord Server](https://discord.gg/hhk46CE)
* [#commonlisp](https://irclog.tymoon.eu/libera/%23commonlisp) on Libera Chat - main Common Lisp IRC channel.
* [#lisp](https://irclog.tymoon.eu/libera/%23lisp) on Libera Chat - IRC channel for all Lisp dialects.
* #clschool on Libera Chat - IRC channel for learning Common Lisp.
* #lispcafe on Libera Chat - IRC channel for off-topic discussions.
* [Planet Lisp](http://planet.lisp.org/) - A meta blog that collects the contents of various Lisp-related blogs.
* [Common Lisp chat](https://chat.hexstreamsoft.com/) - Keybase team with well-defined rules and retention policies.

Library Manager
===============

* ⭐ [Quicklisp][16] - A library manager containing many libraries, with easy depencency management. [Expat][14].
  * [ql-https ![GitHub Repo Stars](https://img.shields.io/github/stars/rudolfochrist/ql-https) ![GitHub last commit](https://img.shields.io/github/last-commit/rudolfochrist/ql-https)](https://github.com/rudolfochrist/ql-https) - shell out to cURL and use HTTPS by default.
  * [Quicklisp bundles](https://quicklisp.org/beta/bundles.html) -  self-contained sets of systems that are exported from Quicklisp and loadable without involving Quicklisp.
* 👍 (NEW! as of May, 2023) [ocicl ![GitHub Repo Stars](https://img.shields.io/github/stars/ocicl/ocicl) ![GitHub last commit](https://img.shields.io/github/last-commit/ocicl/ocicl)](https://github.com/ocicl/ocicl) - a new and experimental alternative to Quicklisp, built on tools from the world of containers. [MIT][200].
* [Ultralisp](http://ultralisp.org/) - A Quicklisp distribution which updates every 5 minutes and to which one can add his project in one click. [BSD][15].
* [Roswell ![GitHub Repo Stars](https://img.shields.io/github/stars/roswell/roswell) ![GitHub last commit](https://img.shields.io/github/last-commit/roswell/roswell)](https://github.com/roswell/roswell) - a Lisp implementation installer, script launcher and more. [MIT][200].
* [Qlot ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/qlot) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/qlot)](https://github.com/fukamachi/qlot) - A project-local library installer, similar to Bundler or Virtualenv. [Expat][14].
  * how to [use it from the Lisp REPL ![GitHub Repo Stars](https://img.shields.io/github/stars/svetlyak40wt/qlot-without-roswell) ![GitHub last commit](https://img.shields.io/github/last-commit/svetlyak40wt/qlot-without-roswell)](https://github.com/svetlyak40wt/qlot-without-roswell) without Roswell.
* [Quicksys](https://lisp.com.br/quicksys/) - install systems from multiple Quicklisp distributions. [MIT][200].
* [Quickutil ![GitHub Repo Stars](https://img.shields.io/github/stars/stylewarning/quickutil) ![GitHub last commit](https://img.shields.io/github/last-commit/stylewarning/quickutil)](https://github.com/stylewarning/quickutil) - A utility manager, similar to Quicklisp, but for small utilities rather than whole libraries. [3-clause BSD][15].

see also:

* [CLPM](https://www.clpm.dev) - A package manager for Common Lisp that strives to cleanly separate the package manager process itself from the client image that uses it. [BSD_2Clause][17].
  * CLPM comes as a pre-built binary, supports HTTPS by default, supports installing multiple package versions, supports versioned systems, and more.
* [trivial-system-loader ![GitHub Repo Stars](https://img.shields.io/github/stars/atgreen/trivial-system-loader) ![GitHub last commit](https://img.shields.io/github/last-commit/atgreen/trivial-system-loader)](https://github.com/atgreen/trivial-system-loader) -  A system installation/loading abstraction for Common Lisp.
  * play nice with people using another library manager than Quicklisp: instead of hard-coding `(ql:quickload :mysystem)`, use `(tsl:load-system :mysystem)`. tsl:load-system will first try to use ocicl if available, then quicklisp, then plain asdf:load-system.

might help:

* [redist ![GitHub Repo Stars](https://img.shields.io/github/stars/shirakumo/redist) ![GitHub last commit](https://img.shields.io/github/last-commit/shirakumo/redist)](https://github.com/shirakumo/redist) - facilities to produce Quicklisp distributions.
* [quick-patch ![GitHub Repo Stars](https://img.shields.io/github/stars/tdrhq/quick-patch) ![GitHub last commit](https://img.shields.io/github/last-commit/tdrhq/quick-patch)](https://github.com/tdrhq/quick-patch/) -  easily override quicklisp projects without using git submodules. MPL-2.0.
* [print-licenses ![GitHub Repo Stars](https://img.shields.io/github/stars/vindarel/print-licenses) ![GitHub last commit](https://img.shields.io/github/last-commit/vindarel/print-licenses)](https://github.com/vindarel/print-licenses) - print licenses used by a project and its dependencies. [MIT][200].
* [asdf-dependency-graph ![GitHub Repo Stars](https://img.shields.io/github/stars/digikar99/asdf-dependency-graph) ![GitHub last commit](https://img.shields.io/github/last-commit/digikar99/asdf-dependency-graph)](https://github.com/digikar99/asdf-dependency-graph/) - A minimal wrapper around `dot` to generate an image of the dependencies graph.

### Interfaces to other package managers

* [linux-packaging](https://gitlab.com/ralt/linux-packaging) - build .deb, .rpm or .pkg packages for your application with a single ASDF declaration. Uses fpm under the hood. [MIT][200].
* [qldeb ![GitHub Repo Stars](https://img.shields.io/github/stars/ralt/qldeb) ![GitHub last commit](https://img.shields.io/github/last-commit/ralt/qldeb)](https://github.com/ralt/qldeb) -  Quicklisp systems to debian packages, along with [deb-packager ![GitHub Repo Stars](https://img.shields.io/github/stars/ralt/deb-packager) ![GitHub last commit](https://img.shields.io/github/last-commit/ralt/deb-packager)](https://github.com/ralt/deb-packager) (simply create a debian package by defining an s-expression) and an introductory [blog post](http://margaine.com/2015/12/22/quicklisp-packagecloud-debian-packages.html). Both [MIT][200].
* [ql-to-deb ![GitHub Repo Stars](https://img.shields.io/github/stars/dimitri/ql-to-deb) ![GitHub last commit](https://img.shields.io/github/last-commit/dimitri/ql-to-deb)](https://github.com/dimitri/ql-to-deb) -  Update cl-* debian packages from Quicklisp releases. WTFPL.
* [dh-quicklisp-buildapp ![GitHub Repo Stars](https://img.shields.io/github/stars/ralt/dh-quicklisp-buildapp) ![GitHub last commit](https://img.shields.io/github/last-commit/ralt/dh-quicklisp-buildapp)](https://github.com/ralt/dh-quicklisp-buildapp) - debhelper utility to let you compile your quicklisp-based Common Lisp code into a buildapp binary in a .deb with almost no effort. [MIT][200].
* [cl-brewer ![GitHub Repo Stars](https://img.shields.io/github/stars/can3p/cl-brewer) ![GitHub last commit](https://img.shields.io/github/last-commit/can3p/cl-brewer)](https://github.com/can3p/cl-brewer) - Homebrew formula builder for (command line) common lisp applications. Public domain.
* [flatpack-common-lisp](https://gitlab.com/ralph-schleicher/flatpak-common-lisp) - A BuildStream project for building Flatpak based runtime environments for Common Lisp applications.
* [alien-works-delivery ![GitHub Repo Stars](https://img.shields.io/github/stars/borodust/alien-works-delivery) ![GitHub last commit](https://img.shields.io/github/last-commit/borodust/alien-works-delivery)](https://github.com/borodust/alien-works-delivery) - WIP system for delivering Common Lisp applications as executable bundles. For now it only supports AppImage format for Linux and MSIX for Windows, but .APK for Android and later MacOSX and iOS bundle formats are planned too.
* [cl-nix-lite ![GitHub Repo Stars](https://img.shields.io/github/stars/hraban/cl-nix-lite) ![GitHub last commit](https://img.shields.io/github/last-commit/hraban/cl-nix-lite)](https://github.com/hraban/cl-nix-lite) -  Common Lisp module for Nix, without Quicklisp. [AGPL-3.0][51]


See also:

- [asdf-sbcl ![GitHub Repo Stars](https://img.shields.io/github/stars/smashedtoatoms/asdf-sbcl) ![GitHub last commit](https://img.shields.io/github/last-commit/smashedtoatoms/asdf-sbcl)](https://github.com/smashedtoatoms/asdf-sbcl), a plugin for the universal package manager.
- 📹 [this Youtube video](https://www.youtube.com/watch?v=lGS4sr6AzKw) (by 40ants, 2023) on how to use alien-works-delivery and linux-packaging.

Machine Learning
================

* [MGL ![GitHub Repo Stars](https://img.shields.io/github/stars/melisgl/mgl) ![GitHub last commit](https://img.shields.io/github/last-commit/melisgl/mgl)](https://github.com/melisgl/mgl) - a machine learning library for backpropagation neural networks, boltzmann machines, gaussian processes and more. [MIT][200].
  * some parts originally contributed by Ravenpack International.
  * used by its [author](https://github.com/melisgl) to [win ![GitHub Repo Stars](https://img.shields.io/github/stars/melisgl/higgsml) ![GitHub last commit](https://img.shields.io/github/last-commit/melisgl/higgsml)](https://github.com/melisgl/higgsml) the Higgs Boson Machine Learning Challenge.
  * more about the author: he also won the Google [AI Challenge](https://en.wikipedia.org/wiki/AI_Challenge) in 2010 using Common Lisp, but without MGL, as no machine learning was needed. A [related talk](https://www.youtube.com/watch?v=7sgERtZkycU) (59', 2013).
* [clml ![GitHub Repo Stars](https://img.shields.io/github/stars/mmaul/clml) ![GitHub last commit](https://img.shields.io/github/last-commit/mmaul/clml)](https://github.com/mmaul/clml) - originally developed by Mathematicl Systems Inc., a Japanese company. With a [tutorial](https://mmaul.github.io/clml.tutorials//2015/08/08/CLML-Time-Series-Part-1.html). [LLGPL][8].
* [antik](https://www.common-lisp.net/project/antik/) -  a foundation for scientific and engineering computation in Common Lisp. GPL. Also [mgl-mat ![GitHub Repo Stars](https://img.shields.io/github/stars/melisgl/mgl-mat) ![GitHub last commit](https://img.shields.io/github/last-commit/melisgl/mgl-mat)](https://github.com/melisgl/mgl-mat) and [LLA ![GitHub Repo Stars](https://img.shields.io/github/stars/tpapp/lla) ![GitHub last commit](https://img.shields.io/github/last-commit/tpapp/lla)](https://github.com/tpapp/lla).

Credit: borretti.me's [State of CL Ecosystem 2015](http://borretti.me/article/common-lisp-sotu-2015#machine-learning).


Natural Language Processing
===========================

* 🚀 [sparser ![GitHub Repo Stars](https://img.shields.io/github/stars/ddmcdonald/sparser) ![GitHub last commit](https://img.shields.io/github/last-commit/ddmcdonald/sparser)](https://github.com/ddmcdonald/sparser) - A natural language understanding system for English. [Eclipse][209].
  * > a model-driven, rule-based language text analysis system for large volume, high-precision information extraction. At its heart, Sparser is a bottom-up, phrase-structure-based chart parser, optimized for semantic grammars and partial parsing.
* [cl-nlp ![GitHub Repo Stars](https://img.shields.io/github/stars/vseloved/cl-nlp) ![GitHub last commit](https://img.shields.io/github/last-commit/vseloved/cl-nlp)](https://github.com/vseloved/cl-nlp) - Natural language processing toolset. [Apache2.0][89].
* [babel2 ![GitHub Repo Stars](https://img.shields.io/github/stars/lucas8/Babel2) ![GitHub last commit](https://img.shields.io/github/last-commit/lucas8/Babel2)](https://github.com/lucas8/Babel2/) - A Fluid Construction Grammar implementation, computational framework, and unification-based grammar formalism [Apache2.0][89].



Network and Internet
====================

See [Cliki](http://www.cliki.net/Web) for more.

HTTP clients
------------
* 👍 [Dexador ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/dexador) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/dexador)](https://github.com/fukamachi/dexador) - An HTTP client, that aims at replacing Drakma. [MIT][200].
* [Carrier ![GitHub Repo Stars](https://img.shields.io/github/stars/orthecreedence/carrier) ![GitHub last commit](https://img.shields.io/github/last-commit/orthecreedence/carrier)](https://github.com/orthecreedence/carrier) - A lightweight, async HTTP client built on top of cl-async and fast-http. [MIT][200].
* [fast-http ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/fast-http) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/fast-http)](https://github.com/fukamachi/fast-http) - A fast HTTP request/response parser for Common Lisp. [MIT][200].
* [http2 ![GitHub Repo Stars](https://img.shields.io/github/stars/zellerin/http2) ![GitHub last commit](https://img.shields.io/github/last-commit/zellerin/http2)](https://github.com/zellerin/http2/) -  HTTP/2 implementation in Common Lisp. [MIT][200].


HTTP Servers
------------

* ⭐ [Hunchentoot](http://weitz.de/hunchentoot/) - A web server. [2-clause BSD][207]
* 👍[Clack ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/clack) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/clack)](https://github.com/fukamachi/clack) - A web application environment inspired by Rack and WSGI. [LLGPL][8].  Provides a unified interface to a webserver of choice (default is Hunchentoot). With more [getting started guide](https://jasom.github.io/clack-tutorial/posts/getting-started-with-clack/).
* [zaserve ![GitHub Repo Stars](https://img.shields.io/github/stars/gendl/aserve) ![GitHub last commit](https://img.shields.io/github/last-commit/gendl/aserve)](https://github.com/gendl/aserve) - A portable fork of AllegroServe, by Franz Inc.  [LLGPL][8].
* [wookie ![GitHub Repo Stars](https://img.shields.io/github/stars/orthecreedence/wookie) ![GitHub last commit](https://img.shields.io/github/last-commit/orthecreedence/wookie)](https://github.com/orthecreedence/wookie) - Asynchronous HTTP server. [Expat][14].
* [woo ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/woo) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/woo)](https://github.com/fukamachi/woo) - A fast non-blocking HTTP server on top of libev. [MIT][200].
* [cl-http2-protocol ![GitHub Repo Stars](https://img.shields.io/github/stars/akamai/cl-http2-protocol) ![GitHub last commit](https://img.shields.io/github/last-commit/akamai/cl-http2-protocol)](https://github.com/akamai/cl-http2-protocol) - a pure Common Lisp transport agnostic implementation of the HTTP/2 protocol at draft-14. [MIT][200].

### Hunchentoot plugins

* 👍 [easy-routes ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/easy-routes) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/easy-routes)](https://github.com/mmontone/easy-routes) - a routes handling system on top of Hunchentoot. It supports dispatch based on HTTP method, arguments extraction from the url path, decorators, url generation from route name, etc. [MIT][200].
* [hunchentoot-cgi ![GitHub Repo Stars](https://img.shields.io/github/stars/slyrus/hunchentoot-cgi) ![GitHub last commit](https://img.shields.io/github/last-commit/slyrus/hunchentoot-cgi)](https://github.com/slyrus/hunchentoot-cgi) - a library for executing CGI scripts from the hunchentoot webserver. [BSD][207].
* [hunchentoot-multi-acceptor ![GitHub Repo Stars](https://img.shields.io/github/stars/moderninterpreters/hunchentoot-multi-acceptor) ![GitHub last commit](https://img.shields.io/github/last-commit/moderninterpreters/hunchentoot-multi-acceptor)](https://github.com/moderninterpreters/hunchentoot-multi-acceptor/) - Route multiple domains (virtual hosts) on a single hunchentoot acceptor using a single port. [Apache2.0][89].
* [hunchentoot-errors ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/hunchentoot-errors) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/hunchentoot-errors)](https://github.com/mmontone/hunchentoot-errors) - Augments Hunchentoot error pages and logs with request and session information. [MIT][200].
* [hunchentoot-stuck-connection-monitor ![GitHub Repo Stars](https://img.shields.io/github/stars/avodonosov/hunchentoot-stuck-connection-monitor) ![GitHub last commit](https://img.shields.io/github/last-commit/avodonosov/hunchentoot-stuck-connection-monitor)](https://github.com/avodonosov/hunchentoot-stuck-connection-monitor/) - Monitors hunchentoot connections and logs the connections stuck in the same state for a long time.
  - offers an option to shutdown the stuck connections sockets manually or automatically, thus unblocking the connection threads and preventing thread and socket leakage. [BSD_2Clause][17].

See also:

* [cl-tbnl-gserver-tmgr ![GitHub Repo Stars](https://img.shields.io/github/stars/mdbergmann/cl-tbnl-gserver-tmgr) ![GitHub last commit](https://img.shields.io/github/last-commit/mdbergmann/cl-tbnl-gserver-tmgr)](https://github.com/mdbergmann/cl-tbnl-gserver-tmgr) -  Hunchentoot Gserver-based taskmanager. cl-gserver is an actor-like message-passing library (see below in "Actors pattern"). Experimental.

### Clack plugins

* [tiny-routes ![GitHub Repo Stars](https://img.shields.io/github/stars/jeko2000/tiny-routes) ![GitHub last commit](https://img.shields.io/github/last-commit/jeko2000/tiny-routes)](https://github.com/jeko2000/tiny-routes) -  A tiny routing library for Common Lisp targeting Clack. [BSD_3Clause][15].
* [clack-errors ![GitHub Repo Stars](https://img.shields.io/github/stars/eudoxia0/clack-errors) ![GitHub last commit](https://img.shields.io/github/last-commit/eudoxia0/clack-errors)](https://github.com/eudoxia0/clack-errors) - Error page middleware for Clack. [LLGPL][8].
* [clath ![GitHub Repo Stars](https://img.shields.io/github/stars/BnMcGn/clath) ![GitHub last commit](https://img.shields.io/github/last-commit/BnMcGn/clath)](https://github.com/BnMcGn/clath) - a single sign-on
  middleware for Clack. It allows basic login with OAuth1.0a, OAuth2
  and OpenID. At the time of writing, it supports authentication from
  Google, Twitter, LinkedIn, StackExchange, Reddit and Github. [Apache2.0][89].
* [clack-pretend ![GitHub Repo Stars](https://img.shields.io/github/stars/BnMcGn/clack-pretend) ![GitHub last commit](https://img.shields.io/github/last-commit/BnMcGn/clack-pretend)](https://github.com/BnMcGn/clack-pretend) - a testing
  and debugging tool for clack. [Apache2.0][89].
* [hermetic ![GitHub Repo Stars](https://img.shields.io/github/stars/eudoxia0/hermetic) ![GitHub last commit](https://img.shields.io/github/last-commit/eudoxia0/hermetic)](https://github.com/eudoxia0/hermetic) - Security for Clack-based web applications. [Expat][14].
* [live-reload ![GitHub Repo Stars](https://img.shields.io/github/stars/knobo/live-reload) ![GitHub last commit](https://img.shields.io/github/last-commit/knobo/live-reload)](https://github.com/knobo/live-reload) - Live reload prototype for clack. [LLGPL][8].
* [clack-static-asset-middleware ![GitHub Repo Stars](https://img.shields.io/github/stars/fisxoj/clack-static-asset-middleware) ![GitHub last commit](https://img.shields.io/github/last-commit/fisxoj/clack-static-asset-middleware)](https://github.com/fisxoj/clack-static-asset-middleware) - a cache-busting static asset middleware for the clack. [MIT][200].
* [lack-expression-cache ![GitHub Repo Stars](https://img.shields.io/github/stars/daninus14/lack-compression-cache) ![GitHub last commit](https://img.shields.io/github/last-commit/daninus14/lack-compression-cache)](https://github.com/daninus14/lack-compression-cache) -  lack middleware for compressing and caching static resources. MIT.
* [lack-rerouter ![GitHub Repo Stars](https://img.shields.io/github/stars/daninus14/lack-rerouter) ![GitHub last commit](https://img.shields.io/github/last-commit/daninus14/lack-rerouter)](https://github.com/daninus14/lack-rerouter) -  lack middleware to reroute URIs of requests. MIT.

For routing, we can also use Snooze (see below).

Web frameworks
--------------

* [Caveman ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/caveman) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/caveman)](https://github.com/fukamachi/caveman) - A powerful web framework. [LLGPL][8].
  Example projects: [Quickdocs](https://github.com/quickdocs)
* [ningle ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/ningle) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/ningle)](https://github.com/fukamachi/ningle) - A super-micro web framework. [LLGPL][8].
  - [jingle ![GitHub Repo Stars](https://img.shields.io/github/stars/dnaeon/cl-jingle) ![GitHub last commit](https://img.shields.io/github/last-commit/dnaeon/cl-jingle)](https://github.com/dnaeon/cl-jingle) - based on ningle, adds  bells and whistles, such as middlewares.
    - includes an OpenAPI and Swagger UI demo.
* [radiance ![GitHub Repo Stars](https://img.shields.io/github/stars/Shirakumo/radiance) ![GitHub last commit](https://img.shields.io/github/last-commit/Shirakumo/radiance)](https://github.com/Shirakumo/radiance) - A web application environment and framework . [zlib][33].

REST-focused frameworks:

* 👍 [Snooze ![GitHub Repo Stars](https://img.shields.io/github/stars/joaotavora/snooze) ![GitHub last commit](https://img.shields.io/github/last-commit/joaotavora/snooze)](https://github.com/joaotavora/snooze) - A RESTful web framework. Web server agnostic. Currently has support for Hunchentoot and Clack. Routes are just functions and HTTP conditions are just Lisp conditions. [LLGPL][8].
* [cl-rest-server ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/cl-rest-server) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/cl-rest-server)](https://github.com/mmontone/cl-rest-server) - a library for writing REST web APIs. Features validation with schemas, annotations for logging, caching, permissions or authentication, documentation via Swagger, etc. [MIT][200].

See OpenAPI, OData and other libraries below.

### Isomorphic web frameworks

* [CLOG ![GitHub Repo Stars](https://img.shields.io/github/stars/rabbibotton/clog) ![GitHub last commit](https://img.shields.io/github/last-commit/rabbibotton/clog)](https://github.com/rabbibotton/clog) - The Common Lisp Omnificent GUI. Uses web technology to produce graphical user interfaces for applications locally or remotely. [BSD_3Clause][15].
  - CLOG is based on the ideas of GNOGA, a framework the author wrote for Ada and used in commercial production code since 2013.
* [Weblocks (Reblocks) ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/reblocks) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/reblocks)](https://github.com/40ants/reblocks) - A widgets-based framework with a built-in ajax update mechanism that "solves the JavaScript problem". [LLGPL][8].
  - example code bases: [Ultralisp ![GitHub Repo Stars](https://img.shields.io/github/stars/ultralisp/ultralisp) ![GitHub last commit](https://img.shields.io/github/last-commit/ultralisp/ultralisp)](https://github.com/ultralisp/ultralisp/), [krasnodar ![GitHub Repo Stars](https://img.shields.io/github/stars/lct23/krasnodar) ![GitHub last commit](https://img.shields.io/github/last-commit/lct23/krasnodar)](https://github.com/lct23/krasnodar), a dashboard made for a hackaton (2024) ([demo video](https://diode.zone/videos/watch/9e379a86-c530-4e9d-b8be-7437b1f7200b)).
* [Interactive SSR ![GitHub Repo Stars](https://img.shields.io/github/stars/interactive-ssr/client) ![GitHub last commit](https://img.shields.io/github/last-commit/interactive-ssr/client)](https://github.com/interactive-ssr/client/blob/master/main.org/) - ISSR allows you to make interactive web pages without writing client scripting. No knowledge about Javascript or DOM is necessary.
  - it is not unlike Phoenix LiveView or Hotwire.


Parsing html
---------------
* 👍 [Plump][71] - A lenient HTML/XML parser, tolerant on malformed markup. [zlib][33]. Best used with [lquery][72] and [clss ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/CLSS) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/CLSS)](https://github.com/Shinmera/CLSS).

See also:

* [cl-html5-parser ![GitHub Repo Stars](https://img.shields.io/github/stars/rotatef/cl-html5-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/rotatef/cl-html5-parser)](https://github.com/rotatef/cl-html5-parser) -  HTML5 parser for Common Lisp. GPL3.0.
  * a port of the Python library html5lib.
  * compared to Plump: Plump is a mix of an XML and an HTML parser and breaks on some HTML rules ([example ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/plump) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/plump)](https://github.com/Shinmera/plump/issues/50)), while cl-html5-parser is a fully compliant HTML parser.

Querying HTML/DOM, web scraping
---------------------------------------

* 👍 [lquery][72] - A jQuery-like HTML/DOM manipulation library. [zlib][33].
* [scrapycl](https://40ants.com/scrapycl/) - web scraping framework for writing crawlers in Common Lisp. Unlicense.
  * relying on lquery.

See also the XML section below for xpath libraries and more.


HTML generators and templates
-----------------------------

* 👍 [spinneret ![GitHub Repo Stars](https://img.shields.io/github/stars/ruricolist/spinneret) ![GitHub last commit](https://img.shields.io/github/last-commit/ruricolist/spinneret)](https://github.com/ruricolist/spinneret) - Common Lisp HTML5 generator. [Expat][14].
* ⭐ [cl-who](http://weitz.de/cl-who/) - The venerable HTML generator. [FreeBSD][39].
* ⭐ [Djula ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/djula) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/djula)](https://github.com/mmontone/djula) - A port of Django's template engine to Common Lisp. [Expat][14].
  - [cl-djula-tailwind ![GitHub Repo Stars](https://img.shields.io/github/stars/rajasegar/cl-djula-tailwind) ![GitHub last commit](https://img.shields.io/github/last-commit/rajasegar/cl-djula-tailwind)](https://github.com/rajasegar/cl-djula-tailwind) - use TailwindCSS classe in your Djula templates without any JavaScript or Node.js tooling.
  - [djula-template-designer ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/djula-template-designer) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/djula-template-designer)](https://github.com/mmontone/djula-template-designer) - a template designer tool.
* [TEN ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/ten) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/ten)](https://github.com/mmontone/ten) - the completness of Djula meets the usability of Eco. [MIT][200].
* [eco ![GitHub Repo Stars](https://img.shields.io/github/stars/eudoxia0/eco) ![GitHub last commit](https://img.shields.io/github/last-commit/eudoxia0/eco)](https://github.com/eudoxia0/eco) - Fast, flexible, designer-friendly template engine. [Expat][14].
* [cl-closure-template ![GitHub Repo Stars](https://img.shields.io/github/stars/archimag/cl-closure-template) ![GitHub last commit](https://img.shields.io/github/last-commit/archimag/cl-closure-template)](https://github.com/archimag/cl-closure-template) - Implementation of Google's Closure templates, where compiling a template creates a function that generates the result. [LLGPL][8].
* [flute ![GitHub Repo Stars](https://img.shields.io/github/stars/ailisp/flute) ![GitHub last commit](https://img.shields.io/github/last-commit/ailisp/flute)](https://github.com/ailisp/flute) - An easily composable HTML5 generation library with the most simplistic syntax. [MIT][200].
* [clip](https://shinmera.github.io/clip) - An HTML template processor where the templates are written in HTML. [zlib][33].
* [lsx ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/lsx) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/lsx)](https://github.com/fukamachi/lsx/) and [markup ![GitHub Repo Stars](https://img.shields.io/github/stars/moderninterpreters/markup) ![GitHub last commit](https://img.shields.io/github/last-commit/moderninterpreters/markup)](https://github.com/moderninterpreters/markup) - Two JSX-like templating engines, where HTML tags are Common Lisp code. `markup` comes with an Emacs package.

URI and IP handling
-------------------

* [quri ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/quri) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/quri)](https://github.com/fukamachi/quri) - Another URI library for
  Common Lisp. Supports userinfo, IPv6 hostname, encoding/decoding
  utilities,… [BSD_3Clause][15].
* [cl-slug ![GitHub Repo Stars](https://img.shields.io/github/stars/EuAndreh/cl-slug) ![GitHub last commit](https://img.shields.io/github/last-commit/EuAndreh/cl-slug)](https://github.com/EuAndreh/cl-slug) - a small library to make slugs, mainly for URIs, transform in CamelCase, remove accentuation and punctuation, for english and beyound. [LLGPL][8].
* [netaddr ![GitHub Repo Stars](https://img.shields.io/github/stars/ynadji/netaddr) ![GitHub last commit](https://img.shields.io/github/last-commit/ynadji/netaddr)](https://github.com/ynadji/netaddr) -  A network address manipulation library for Common Lisp. MIT.
  * for manipulating IP addresses, subnets, ranges, and sets. It is inspired by its namesake library in Python, netaddr.

Javascript
----------

* ⭐ [Parenscript](https://common-lisp.net/project/parenscript/) - A translator from Common Lisp to Javascript. [3-clause BSD][15]. See [Trident-mode ![GitHub Repo Stars](https://img.shields.io/github/stars/johnmastro/trident-mode.el) ![GitHub last commit](https://img.shields.io/github/last-commit/johnmastro/trident-mode.el)](https://github.com/johnmastro/trident-mode.el), an Emacs mode that provides live interaction with the browser.[unlicence][5].
  * [paren6 ![GitHub Repo Stars](https://img.shields.io/github/stars/BnMcGn/paren6) ![GitHub last commit](https://img.shields.io/github/last-commit/BnMcGn/paren6)](https://github.com/BnMcGn/paren6/) - a set of ES6 macros for Parenscript.
* [JSCL ![GitHub Repo Stars](https://img.shields.io/github/stars/jscl-project/jscl) ![GitHub last commit](https://img.shields.io/github/last-commit/jscl-project/jscl)](https://github.com/jscl-project/jscl) - A CL-to-JS compiler designed to be self-hosting from day one. Lacks CLOS, format and loop.
* [CL-JavaScript](http://marijnhaverbeke.nl/cl-javascript/) - A translator from Javascript to Common Lisp. Not available on Quicklisp. [Expat][14].
* [parse-js](http://marijnhaverbeke.nl/parse-js/) - A package for parsing ECMAScript 3. [zlib][33].
* [remote-js ![GitHub Repo Stars](https://img.shields.io/github/stars/ceramic/remote-js) ![GitHub last commit](https://img.shields.io/github/last-commit/ceramic/remote-js)](https://github.com/ceramic/remote-js) - send JavaScript from Common Lisp to a browser. [MIT][200].
* [sigil ![GitHub Repo Stars](https://img.shields.io/github/stars/BnMcGn/sigil) ![GitHub last commit](https://img.shields.io/github/last-commit/BnMcGn/sigil)](https://github.com/BnMcGn/sigil) - A Parenscript to Javascript command line compiler and REPL. [MIT][200].

In development:

* [Valtan ![GitHub Repo Stars](https://img.shields.io/github/stars/cxxxr/valtan) ![GitHub last commit](https://img.shields.io/github/last-commit/cxxxr/valtan)](https://github.com/cxxxr/valtan) -  Common Lisp to JavaScript compiler.
* [JACL](https://tailrecursion.com/JACL/) - an experimental Lisp system for the Web browser platform to explore new techniques for developing large Single Page Applications with Lisp.


Utilities for **React**:

* [cl-react ![GitHub Repo Stars](https://img.shields.io/github/stars/helmutkian/cl-react) ![GitHub last commit](https://img.shields.io/github/last-commit/helmutkian/cl-react)](https://github.com/helmutkian/cl-react) -  Common Lisp (Parenscript) utilities for building web apps in ReactJs. MIT.
* [Panic ![GitHub Repo Stars](https://img.shields.io/github/stars/michaeljforster/panic) ![GitHub last commit](https://img.shields.io/github/last-commit/michaeljforster/panic)](https://github.com/michaeljforster/panic), a Parenscript library for React. Not in Quicklisp. [MIT][200]. Its [TodoMVC example ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/todomvc) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/todomvc)](https://github.com/40ants/todomvc/blob/common-lisp-example/examples/common-lisp-react/src/app.lisp).
* [Parenscriptx ![GitHub Repo Stars](https://img.shields.io/github/stars/jasom/parenscriptx) ![GitHub last commit](https://img.shields.io/github/last-commit/jasom/parenscriptx)](https://github.com/jasom/parenscriptx) -  Parenscript Macros to aid generating react code. [MIT][200].
* [jscl-react ![GitHub Repo Stars](https://img.shields.io/github/stars/nilesr/jscl-react) ![GitHub last commit](https://img.shields.io/github/last-commit/nilesr/jscl-react)](https://github.com/nilesr/jscl-react) -  A web framework for writing react components in common lisp using jscl. No license specified.


See also:

* [trident-mode ![GitHub Repo Stars](https://img.shields.io/github/stars/johnmastro/trident-mode.el) ![GitHub last commit](https://img.shields.io/github/last-commit/johnmastro/trident-mode.el)](https://github.com/johnmastro/trident-mode.el), an Emacs minor mode for live Parenscript interaction.


Deployment
----------

* 👍 [deploy](https://shinmera.github.io/deploy) - A toolkit for binary deployment of Lisp applications, with extra support for foreign shared libraries. [zlib][33].
* [common-lisp-heroku-example ![GitHub Repo Stars](https://img.shields.io/github/stars/fstamour/common-lisp-heroku-example) ![GitHub last commit](https://img.shields.io/github/last-commit/fstamour/common-lisp-heroku-example)](https://github.com/fstamour/common-lisp-heroku-example) -  Example of Common Lisp server on Heroku using Docker.
* [cube ![GitHub Repo Stars](https://img.shields.io/github/stars/xh4/cube) ![GitHub last commit](https://img.shields.io/github/last-commit/xh4/cube)](https://github.com/xh4/cube) - Kubernetes client library for Common LISP generated from the Swagger specification. [MIT][200].
* [s2i-lisp ![GitHub Repo Stars](https://img.shields.io/github/stars/container-lisp/s2i-lisp) ![GitHub last commit](https://img.shields.io/github/last-commit/container-lisp/s2i-lisp)](https://github.com/container-lisp/s2i-lisp) - Source-to-Image builder image based on CentOS or alternatively RHEL7 for building Common LISP images for OpenShift (and also Docker). It features an up-to-date SBCL with Quicklisp installation, SLIME or SLY integration and allows customization via environment variables. [Apache2][89]
* [cl-aws-runtime-test ![GitHub Repo Stars](https://img.shields.io/github/stars/y2q-actionman/cl-aws-custom-runtime-test) ![GitHub last commit](https://img.shields.io/github/last-commit/y2q-actionman/cl-aws-custom-runtime-test)](https://github.com/y2q-actionman/cl-aws-custom-runtime-test) - An example of using Common Lisp (SBCL) as a custom runtime on AWS lambda. WTFPL.
* [40ants/ci ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/ci) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/ci)](https://github.com/40ants/ci/) -  Highly opionated Github Actions workflow builder for Common Lisp projects.
  * with: a linter, lisp critic, tests runner, test matrix, doc building, caching…
* [make-common-lisp-program ![GitHub Repo Stars](https://img.shields.io/github/stars/melusina-org/make-common-lisp-program) ![GitHub last commit](https://img.shields.io/github/last-commit/melusina-org/make-common-lisp-program)](https://github.com/melusina-org/make-common-lisp-program/) -  GitHub action to build an executable Common Lisp program on Ubuntu, MacOS and Windows. MIT.

See also:

- [Platform.sh](https://platform.sh/blog/2019/lisp/) has Common Lisp support, so has [OVH](https://docs.ovh.com/ie/en/web-paas/languages-lisp/) through their Web PaaS partnership.
- [Heliohost](https://www.heliohost.org/) for a free hosting solution.
- [Cloud Init file for SBCL](https://git.sr.ht/%7Emarcuskammer/cloudinit/tree/main/item/sbcl-nginx.yml) - an init file for providers supporting the cloudinit format (DigitalOcean etc).

Monitoring
----------

* [prometheus.cl ![GitHub Repo Stars](https://img.shields.io/github/stars/deadtrickster/prometheus.cl) ![GitHub last commit](https://img.shields.io/github/last-commit/deadtrickster/prometheus.cl)](https://github.com/deadtrickster/prometheus.cl) - Prometheus.io client. Grafana dashboard for SBCL and Hunchentoot metrics (memory, threads, requests per second,…). [MIT][200].
  * [prometheus-g ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/prometheus-gc) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/prometheus-gc)](https://github.com/40ants/prometheus-gc) - Extension for prometheus.cl which collects metrics about garbage collector state.
* [cl-sentry-client ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/cl-sentry-client) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/cl-sentry-client)](https://github.com/mmontone/cl-sentry-client) - a Sentry client for Common Lisp, the cloud-based error monitoring system. [MIT][200].
* [rollbar.lisp ![GitHub Repo Stars](https://img.shields.io/github/stars/adventuring/rollbar.lisp) ![GitHub last commit](https://img.shields.io/github/last-commit/adventuring/rollbar.lisp)](https://github.com/adventuring/rollbar.lisp) - interface to [Rollbar.com](https://rollbar.com/), an error tracking software.


Websockets
----------

* 👍 [usocket ![GitHub Repo Stars](https://img.shields.io/github/stars/usocket/usocket) ![GitHub last commit](https://img.shields.io/github/last-commit/usocket/usocket)](https://github.com/usocket/usocket) - A portable TCP and UDP socket interface. [Expat][14].
* [Portal ![GitHub Repo Stars](https://img.shields.io/github/stars/charJe/portal) ![GitHub last commit](https://img.shields.io/github/last-commit/charJe/portal)](https://github.com/charJe/portal) - Portable websockets for Common Lisp, using usocket. [LLGPL][8].
* [clws ![GitHub Repo Stars](https://img.shields.io/github/stars/3b/clws) ![GitHub last commit](https://img.shields.io/github/last-commit/3b/clws)](https://github.com/3b/clws) -  websockets server in CL, built on IOlib and libfixposix. No licence specified.
* [Hunchensocket ![GitHub Repo Stars](https://img.shields.io/github/stars/joaotavora/hunchensocket) ![GitHub last commit](https://img.shields.io/github/last-commit/joaotavora/hunchensocket)](https://github.com/joaotavora/hunchensocket) -  RFC6455 compliant WebSockets for Common Lisp, as an extension to Hunchentoot. [MIT][200].
* [websocket-driver ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/websocket-driver) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/websocket-driver)](https://github.com/fukamachi/websocket-driver) - based on Clack.
* [iolib ![GitHub Repo Stars](https://img.shields.io/github/stars/sionescu/iolib) ![GitHub last commit](https://img.shields.io/github/last-commit/sionescu/iolib)](https://github.com/sionescu/iolib) - I/O library. [Expat][14].
  * "IOlib is to be a better and more modern I/O library than the standard Common Lisp library. It contains: a socket library, a DNS resolver, an I/O multiplexer, a pathname library and file-system utilities."

*Editor's note: at the time of writing, it seems we don't have a full-featured websocket implementation for Common Lisp. We can however recommend Portal, and we invite you to double-check the current issues of Hunchensocket and websocket-driver.*


Web development utilities
-------------------------

### Assets management

* [Rock ![GitHub Repo Stars](https://img.shields.io/github/stars/eudoxia0/rock) ![GitHub last commit](https://img.shields.io/github/last-commit/eudoxia0/rock)](https://github.com/eudoxia0/rock) - an asset manager for
  Common Lisp. It's basically a combination of Bower and
  webassets. [MIT][200].

### Browser tests

* [cl-webdriver-client ![GitHub Repo Stars](https://img.shields.io/github/stars/copyleft/cl-webdriver-client) ![GitHub last commit](https://img.shields.io/github/last-commit/copyleft/cl-webdriver-client)](https://github.com/copyleft/cl-webdriver-client/) - a binding library to WebDriver (supports Selenium 4.0).

### Form handling

* 👍 [cl-forms ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/cl-forms) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/cl-forms)](https://github.com/mmontone/cl-forms) -  Web forms handling library for Common lisp. [MIT][200].

### User login and password management

* [cl-authentic ![GitHub Repo Stars](https://img.shields.io/github/stars/charJe/cl-authentic) ![GitHub last commit](https://img.shields.io/github/last-commit/charJe/cl-authentic)](https://github.com/charJe/cl-authentic) -  Password management for Common Lisp (web) applications. [LLGPL][8].
  - safe password storage: cleartext-free, using your choice of hash algorithm through ironclad, storage in an SQL database,
  - password reset mechanism with one-time tokens (suitable for mailing to users for confirmation),
  - user creation optionally with confirmation tokens (suitable for mailing to users),
* [mito-email-auth ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/mito-email-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/mito-email-auth)](https://github.com/40ants/mito-email-auth) - Helper to authenticate a website's users by sending them unique code by email.

* [cl-cas ![GitHub Repo Stars](https://img.shields.io/github/stars/fferrere/cl-cas) ![GitHub last commit](https://img.shields.io/github/last-commit/fferrere/cl-cas)](https://github.com/fferrere/cl-cas) - A library to help [CAS authenticaton](https://apereo.github.io/cas/6.0.x/protocol/CAS-Protocol.html) to Common Lisp web applications. Not in Quicklisp.
  * [cas-middleware ![GitHub Repo Stars](https://img.shields.io/github/stars/fferrere/cas-middleware) ![GitHub last commit](https://img.shields.io/github/last-commit/fferrere/cas-middleware)](https://github.com/fferrere/cas-middleware) - CAS authenticaton middleware for Caveman.
  * [cas-demo ![GitHub Repo Stars](https://img.shields.io/github/stars/fferrere/cas-demo) ![GitHub last commit](https://img.shields.io/github/last-commit/fferrere/cas-demo)](https://github.com/fferrere/cas-demo) - a demo project.

See also mito-auth and the Hunchentoot and Clack plugins above.

### Web project skeletons and generators

* [cl-cookieweb ![GitHub Repo Stars](https://img.shields.io/github/stars/vindarel/cl-cookieweb) ![GitHub last commit](https://img.shields.io/github/last-commit/vindarel/cl-cookieweb)](https://github.com/vindarel/cl-cookieweb) - a  Cookiecutter template to start a web project. [BSD_3Clause][15]. Not in Quicklisp.
  * Provides a working toy web app with the Hunchentoot web server, easy-routes, Djula templates, styled with Bulma, based on SQLite, with migrations, an example table definition and a test suite using FiveAM.
* [make-like ![GitHub Repo Stars](https://img.shields.io/github/stars/container-lisp/make-like) ![GitHub last commit](https://img.shields.io/github/last-commit/container-lisp/make-like)](https://github.com/container-lisp/make-like) - an application template builder for LIKE (Lisp In Kubernetes + Emacs) applications. [Apache2.0][51].
  * Makefile, podman support, GitHub Actions, Prometheus metrics support, TOML-style config.ini, easy-route preconfigured with health-check and more.
* [cl-webapp-seed ![GitHub Repo Stars](https://img.shields.io/github/stars/rajasegar/cl-webapp-seed) ![GitHub last commit](https://img.shields.io/github/last-commit/rajasegar/cl-webapp-seed)](https://github.com/rajasegar/cl-webapp-seed) - a simple web application boilerplate. Uses Hunchentoot, cl-who, deploys easily to Heroku. [MIT][200].

Others
------

* [css-lite ![GitHub Repo Stars](https://img.shields.io/github/stars/paddymul/css-lite) ![GitHub last commit](https://img.shields.io/github/last-commit/paddymul/css-lite)](https://github.com/paddymul/css-lite) - A CSS grammar. [Expat][14].
* [find-port ![GitHub Repo Stars](https://img.shields.io/github/stars/eudoxia0/find-port) ![GitHub last commit](https://img.shields.io/github/last-commit/eudoxia0/find-port)](https://github.com/eudoxia0/find-port) -  Programmatically find open ports. [MIT][200].
* [cl-wget ![GitHub Repo Stars](https://img.shields.io/github/stars/cl-wget/cl-wget) ![GitHub last commit](https://img.shields.io/github/last-commit/cl-wget/cl-wget)](https://github.com/cl-wget/cl-wget) - Makes retrieving large files or mirroring entire websites easy. [AGPL-3.0][51].
* [trivial-download ![GitHub Repo Stars](https://img.shields.io/github/stars/eudoxia0/trivial-download) ![GitHub last commit](https://img.shields.io/github/last-commit/eudoxia0/trivial-download)](https://github.com/eudoxia0/trivial-download) - Download files. [MIT][200].
* [cl-cookie ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/cl-cookie) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/cl-cookie)](https://github.com/fukamachi/cl-cookie) HTTP Cookie (jar) manager: parse and write (set-)cookie headers, compare cookies, optional cookie attribute sanity check. [MIT][200]
* [dns-client ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/dns-client) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/dns-client)](https://github.com/Shinmera/dns-client) - DNS record client. See [documentation](https://shinmera.github.io/dns-client/). [zlib][33].


### Email

* [trivial-imap ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/trivial-imap) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/trivial-imap)](https://github.com/40ants/trivial-imap) - tries to make easy some common cases of working with IMAP servers, like reading emails from the server. A thin wrapper over post-office library (which is a fork of Franz's cl-imap). [BSD][15].
* [Postmaster ![GitHub Repo Stars](https://img.shields.io/github/stars/eudoxia0/postmaster) ![GitHub last commit](https://img.shields.io/github/last-commit/eudoxia0/postmaster)](https://github.com/eudoxia0/postmaster) - A simple, easy-to-use SMTP/IMAP library. [Expat][14].
* [cl-smtp](https://gitlab.common-lisp.net/cl-smtp/cl-smtp) - CL-SMTP is a simple lisp smtp client.
* [sendgrid ![GitHub Repo Stars](https://img.shields.io/github/stars/vindarel/cl-sendgrid) ![GitHub last commit](https://img.shields.io/github/last-commit/vindarel/cl-sendgrid)](https://github.com/vindarel/cl-sendgrid) - send emails with Sendgrid's API. [MIT][200].
* [mailgun ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/mailgun) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/mailgun)](https://github.com/40ants/mailgun) - A thin wrapper to post HTML emails through mailgun.com. [unlicence][5].
* [cl-ses ![GitHub Repo Stars](https://img.shields.io/github/stars/CodyReichert/cl-ses) ![GitHub last commit](https://img.shields.io/github/last-commit/CodyReichert/cl-ses)](https://github.com/CodyReichert/cl-ses/) - Library for AWS SES. [Expat][14].

### OpenAPI, OData, OpenRPC

* NEW! [openapi-generator](https://codeberg.org/kilianmh/openapi-generator) - OpenAPI client code generator. [AGPL-3.0][51].
  * Generation of OpenAPI ASDF/Quicklisp-loadable projects within one command,
  * Support for path, (arbitrary) query, (arbitrary) header, (json) content parameters,
  * Conversion of an OpenAPI spec into CLOS object -> explore API within inspector,
  * Conversion of OpenAPI-2.0 or YAML files to OpenAPI-3.0 JSON with swagger converter (network connection required),
  * etc.
* [apispec ![GitHub Repo Stars](https://img.shields.io/github/stars/cxxxr/apispec) ![GitHub last commit](https://img.shields.io/github/last-commit/cxxxr/apispec)](https://github.com/cxxxr/apispec) -  A Common Lisp library for handling Web API requests and responses. [BSD_3Clause][15].
  - takes an OpenAPI3 yaml specification and allows to validate and parse HTTP request headers, parameters and bodies.
* [cl-odata-client ![GitHub Repo Stars](https://img.shields.io/github/stars/copyleft/cl-odata-client) ![GitHub last commit](https://img.shields.io/github/last-commit/copyleft/cl-odata-client)](https://github.com/copyleft/cl-odata-client) - Common Lisp client library for accessing [OData services](https://www.odata.org). [MIT][200].
* [OpenRPC ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/openrpc) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/openrpc)](https://github.com/40ants/openrpc) - OpenRPC implementation for Common Lisp. [BSD][15].
  - Automatic OpenRPC spec generation
  - Automatic JSON-RPC client building by OpenRPC spec. This includes creation of Common Lisp classes and methods for making RPC requests and returning native CL objects.
  - all JSON marshalling is done under the hood.
- [jsonrpc ![GitHub Repo Stars](https://img.shields.io/github/stars/cxxxr/jsonrpc) ![GitHub last commit](https://img.shields.io/github/last-commit/cxxxr/jsonrpc)](https://github.com/cxxxr/jsonrpc) -  JSON-RPC 2.0 server/client for Common Lisp. [BSD][15].


### Static site generators

* [coleslaw ![GitHub Repo Stars](https://img.shields.io/github/stars/kingcons/coleslaw) ![GitHub last commit](https://img.shields.io/github/last-commit/kingcons/coleslaw)](https://github.com/kingcons/coleslaw) and its
  [coleslaw-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/coleslaw-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/coleslaw-cli)](https://github.com/40ants/coleslaw-cli) - Flexible
  Lisp Blogware similar to Frog, Jekyll, or Hakyll. [BSD][15].

### Third-party APIs

* [Aws-sign4 ![GitHub Repo Stars](https://img.shields.io/github/stars/rotatef/aws-sign4) ![GitHub last commit](https://img.shields.io/github/last-commit/rotatef/aws-sign4)](https://github.com/rotatef/aws-sign4) - Common Lisp library for Amazon Web Services signing version 4. [GNU GPL3][2].
* [aws-sdk-lisp ![GitHub Repo Stars](https://img.shields.io/github/stars/pokepay/aws-sdk-lisp) ![GitHub last commit](https://img.shields.io/github/last-commit/pokepay/aws-sdk-lisp)](https://github.com/pokepay/aws-sdk-lisp/) - Provides interfaces for each AWS services as individual systems. [BSD_2Clause][17].
  * incluse dozens of services: dsn, appstream, athena, cloudfront, codedeploy, cognito-*, directconnect, dynamodb, dms, elasticache, email, events, kinesis, machinelearning, monitoring, s3, sms, storagegateway, workspaces…
* [zs3 ![GitHub Repo Stars](https://img.shields.io/github/stars/xach/zs3) ![GitHub last commit](https://img.shields.io/github/last-commit/xach/zs3)](https://github.com/xach/zs3) - A library for working with Amazon's Simple Storage
Service (S3) and CloudFront service. [BSD][15].
* [north](https://shinmera.github.io/north) - The successor to the South (Simple OaUTH) library, implementing the full oAuth 1.0a protocol, both client and server sides. Using North you can easily become an oAuth provider or consumer. [zlib][33].
* [Ciao ![GitHub Repo Stars](https://img.shields.io/github/stars/kjinho/ciao) ![GitHub last commit](https://img.shields.io/github/last-commit/kjinho/ciao)](https://github.com/kjinho/ciao) - an easy-to-use Common Lisp OAuth 2.0 client library. It is a port of the Racket OAuth 2.0 Client to Common Lisp. [LGPL3][9].
* [avatar-api ![GitHub Repo Stars](https://img.shields.io/github/stars/eudoxia0/avatar-api) ![GitHub last commit](https://img.shields.io/github/last-commit/eudoxia0/avatar-api)](https://github.com/eudoxia0/avatar-api) - Get avatars from Google+, Gravatar and others. [Expat][14].
* [chirp ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/chirp) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/chirp)](https://github.com/Shinmera/chirp) - A Twitter client library. [zlib][33].
* [tooter ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/tooter) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/tooter)](https://github.com/Shinmera/tooter) - a client library implementing the full v1 REST API protocol for Mastodon. [zlib][33].
* [cl-irc](https://www.common-lisp.net/project/cl-irc/) - An IRC client library. [Expat][14].
* [cl-mediawiki ![GitHub Repo Stars](https://img.shields.io/github/stars/AccelerationNet/cl-mediawiki) ![GitHub last commit](https://img.shields.io/github/last-commit/AccelerationNet/cl-mediawiki)](https://github.com/AccelerationNet/cl-mediawiki) - a wrapper around the MediaWiki api. [MIT][200].
* [cl-openid ![GitHub Repo Stars](https://img.shields.io/github/stars/cl-openid/cl-openid) ![GitHub last commit](https://img.shields.io/github/last-commit/cl-openid/cl-openid)](https://github.com/cl-openid/cl-openid) - An implementation of OpenID. [LLGPL][8].
* [cl-pushover ![GitHub Repo Stars](https://img.shields.io/github/stars/TeMPOraL/cl-pushover) ![GitHub last commit](https://img.shields.io/github/last-commit/TeMPOraL/cl-pushover)](https://github.com/TeMPOraL/cl-pushover) -  Common Lisp bindings to Pushover. [MIT][200].
* [humbler ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/humbler) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/humbler)](https://github.com/Shinmera/humbler) - A Tumblr API interface. [zlib][33].
* [multiposter ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/multiposter) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/multiposter)](https://github.com/Shinmera/multiposter) - post to multiple services simultaneously. [zlib][33].
* [stripe ![GitHub Repo Stars](https://img.shields.io/github/stars/boogsbunny/stripe) ![GitHub last commit](https://img.shields.io/github/last-commit/boogsbunny/stripe)](https://github.com/boogsbunny/stripe) - a client for the Stripe payment system. [MIT][200].
* [lisp-pay ![GitHub Repo Stars](https://img.shields.io/github/stars/K1D77A/lisp-pay) ![GitHub last commit](https://img.shields.io/github/last-commit/K1D77A/lisp-pay)](https://github.com/K1D77A/lisp-pay) - Wrappers around various payment processors: Paypal, Stripe, Coinpayments and BTCPayServer. [MIT][200].
* [lunamech-matrix-api ![GitHub Repo Stars](https://img.shields.io/github/stars/K1D77A/lunamech-matrix-api) ![GitHub last commit](https://img.shields.io/github/last-commit/K1D77A/lunamech-matrix-api)](https://github.com/K1D77A/lunamech-matrix-api) - A complete wrapper over the Client -> Server Matrix API. [MIT][200].
* [cl-telegram-bot](https://40ants.com/cl-telegram-bot/) - Telegram bot API. [MIT][200].
  * [cl-telegram-bot-auto-api ![GitHub Repo Stars](https://img.shields.io/github/stars/aartaka/cl-telegram-bot-auto-api) ![GitHub last commit](https://img.shields.io/github/last-commit/aartaka/cl-telegram-bot-auto-api)](https://github.com/aartaka/cl-telegram-bot-auto-api) - Alternative Telegram Bot API bindings, auto-generated from Telegram website. [3-clause BSD][15].


Numerical and Scientific
========================

* ⭐ [maxima](http://maxima.sourceforge.net/) - Computer Algebra System. [GNU GPL3][2].
  * [wxMaxima](https://wxmaxima-developers.github.io/wxmaxima/): a graphical frontend.
  * [Maxima on Android](https://play.google.com/store/apps/details?id=jp.yhonda), built with ECL.
  * [Maxima on Jupyter ![GitHub Repo Stars](https://img.shields.io/github/stars/robert-dodier/maxima-jupyter) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-dodier/maxima-jupyter)](https://github.com/robert-dodier/maxima-jupyter)
  * it can be used via [SageMath](https://www.sagemath.org/) and [KDE Cantor](https://apps.kde.org/cantor/). Of course, with Emacs: [maxima-mode](https://gitlab.com/sasanidas/maxima) ([screenshot](https://community.linuxmint.com/img/screenshots/maxima-emacs.png)) and [maxima-interface ![GitHub Repo Stars](https://img.shields.io/github/stars/jmbr/maxima-interface) ![GitHub last commit](https://img.shields.io/github/last-commit/jmbr/maxima-interface)](https://github.com/jmbr/maxima-interface) to ease the interface between Maxima and Common Lisp.
  * it can be used [from a Lisp REPL](https://mahmoodsheikh36.github.io/post/20230510181916-maxima_in_lisp/).
* [numcl ![GitHub Repo Stars](https://img.shields.io/github/stars/numcl/numcl) ![GitHub last commit](https://img.shields.io/github/last-commit/numcl/numcl)](https://github.com/numcl/numcl) - Numpy clone in Common Lisp. [LGPL3][9].
* [GSLL](https://common-lisp.net/project/gsll/) - GNU Scientific Library for Lisp; allows the use of the GSL from Common Lisp. [GNU LGPL2.1][11].
* [Xecto ![GitHub Repo Stars](https://img.shields.io/github/stars/pkhuong/Xecto) ![GitHub last commit](https://img.shields.io/github/last-commit/pkhuong/Xecto)](https://github.com/pkhuong/Xecto) - A library for regular array parallelism. [3-clause BSD][15].
* [Petalisp ![GitHub Repo Stars](https://img.shields.io/github/stars/marcoheisig/Petalisp) ![GitHub last commit](https://img.shields.io/github/last-commit/marcoheisig/Petalisp)](https://github.com/marcoheisig/Petalisp) - an attempt to
  generate high performance code for parallel computers by
  JIT-compiling array definitions. It works on a more
  fundamental level than NumPy, by providing even more powerful
  N-dimensional arrays, but just a few building blocks for working on
  them. [AGPL-3.0][agpl3].
* [cl-ana ![GitHub Repo Stars](https://img.shields.io/github/stars/ghollisjr/cl-ana) ![GitHub last commit](https://img.shields.io/github/last-commit/ghollisjr/cl-ana)](https://github.com/ghollisjr/cl-ana) - Common Lisp data analysis library with emphasis on modularity and conceptual clarity. It aims to be a general purpose framework for analyzing small and large scale datasets, including binned data analysis and visualization. [GNU GPL3][2].
* [avm ![GitHub Repo Stars](https://img.shields.io/github/stars/takagi/avm) ![GitHub last commit](https://img.shields.io/github/last-commit/takagi/avm)](https://github.com/takagi/avm) - Efficient and expressive arrayed vector math library with multi-threading and CUDA support. [MIT][200].
* [array-operations ![GitHub Repo Stars](https://img.shields.io/github/stars/bendudson/array-operations) ![GitHub last commit](https://img.shields.io/github/last-commit/bendudson/array-operations)](https://github.com/bendudson/array-operations) - a collection of functions and macros for manipulating Common Lisp arrays and performing numerical calculations with them. [MIT][200].
* [cl-geometry ![GitHub Repo Stars](https://img.shields.io/github/stars/Ramarren/cl-geometry) ![GitHub last commit](https://img.shields.io/github/last-commit/Ramarren/cl-geometry)](https://github.com/Ramarren/cl-geometry/) - a system for two dimensional computational geometry for Common Lisp. [MIT][200].
* [Vellum ![GitHub Repo Stars](https://img.shields.io/github/stars/sirherrbatka/vellum) ![GitHub last commit](https://img.shields.io/github/last-commit/sirherrbatka/vellum)](https://github.com/sirherrbatka/vellum) - Data Frames for Common Lisp. BSD_2Clause.
* [rtg-math ![GitHub Repo Stars](https://img.shields.io/github/stars/cbaggers/rtg-math) ![GitHub last commit](https://img.shields.io/github/last-commit/cbaggers/rtg-math)](https://github.com/cbaggers/rtg-math/) - a selection of the math routines most commonly needed for making realtime graphics in lisp (2, 3 and 4 component vectors, 3x3 and 4x4 matrices, quaternions, spherical and polar coordinates). BSD_2Clause.


Planning solvers:

* [linear-programming](https://neil-lindquist.github.io/linear-programming/) – a library for solving linear programming problems. [MIT][200].
* [shop3 ![GitHub Repo Stars](https://img.shields.io/github/stars/shop-planner/shop3) ![GitHub last commit](https://img.shields.io/github/last-commit/shop-planner/shop3)](https://github.com/shop-planner/shop3) - a Hierarchical Task Network (HTN) AI planner. Mozilla Public License.


NEW! If you have precise needs, blurry needs or simply questions, the repository [Common Lisp numsci call for needs ![GitHub Repo Stars](https://img.shields.io/github/stars/digikar99/common-lisp-numsci-call-for-needs) ![GitHub last commit](https://img.shields.io/github/last-commit/digikar99/common-lisp-numsci-call-for-needs)](https://github.com/digikar99/common-lisp-numsci-call-for-needs) is a new place to discuss them.


Matrix libraries
----------------

* [magicl ![GitHub Repo Stars](https://img.shields.io/github/stars/quil-lang/magicl) ![GitHub last commit](https://img.shields.io/github/last-commit/quil-lang/magicl)](https://github.com/quil-lang/magicl) - Matrix Algebra proGrams In Common Lisp based on BLAS/LAPACK and Expokit, by Rigetti Computing. [BSD_3Clause][15].
* [lisp-matrix ![GitHub Repo Stars](https://img.shields.io/github/stars/blindglobe/lisp-matrix) ![GitHub last commit](https://img.shields.io/github/last-commit/blindglobe/lisp-matrix)](https://github.com/blindglobe/lisp-matrix) - A matrix package. [FreeBSD][39].
* [3d-matrices](https://shinmera.github.io/3d-matrices) - A library implementing common matrix calculations, with an emphasis on 2x2,3x3, and 4x4 matrices as commonly used in graphics. It provides some numerical functions as well, but those are not the focus. The library is heavily optimised, so it is not made of pretty code. [zlib][33].
* [clem ![GitHub Repo Stars](https://img.shields.io/github/stars/slyrus/clem) ![GitHub last commit](https://img.shields.io/github/last-commit/slyrus/clem)](https://github.com/slyrus/clem) - a matrix library. [BSD_2Clause][17].

Statistics
---------

* 👍 [lisp-stat](https://github.com/lisp-stat) - an environment for statistical computing, conceptually similar to R, that is also suitable for front-line production deployments. "It grew out of a desire to have an environment for rapidly prototyping analytical and A.I. solutions, and move directly to production environments with minimal friction."
  * https://lisp-stat.dev/
  * inspired by Luke Tierney's [XLisp-Stat](https://homepage.stat.uiowa.edu/~luke/xls/xlsinfo/) (a predecessor of R), ships a compatibility library for it, otherwise builds on other and newer libraries.

See also [common-lisp-stat ![GitHub Repo Stars](https://img.shields.io/github/stars/blindglobe/common-lisp-stat) ![GitHub last commit](https://img.shields.io/github/last-commit/blindglobe/common-lisp-stat)](https://github.com/blindglobe/common-lisp-stat/), Common Lisp statistics library. [FreeBSD][39], staling.

Units
-----

* [physical-quantities ![GitHub Repo Stars](https://img.shields.io/github/stars/mrossini-ethz/physical-quantities) ![GitHub last commit](https://img.shields.io/github/last-commit/mrossini-ethz/physical-quantities)](https://github.com/mrossini-ethz/physical-quantities) - a library that provides a numeric type with optional unit and/or uncertainty for computations with automatic error propagation. GPL2

Utils
-----

* [cmu-infix ![GitHub Repo Stars](https://img.shields.io/github/stars/rigetti/cmu-infix) ![GitHub last commit](https://img.shields.io/github/last-commit/rigetti/cmu-infix)](https://github.com/rigetti/cmu-infix) - A library for writing infix mathematical notation in Common Lisp. See also [polisher ![GitHub Repo Stars](https://img.shields.io/github/stars/mrcdr/polisher) ![GitHub last commit](https://img.shields.io/github/last-commit/mrcdr/polisher)](https://github.com/mrcdr/polisher).


Parallelism and Concurrency
===========================

* ⭐ [BordeauxThreads](https://common-lisp.net/project/bordeaux-threads/) - Portable, shared-state concurrency. [Expat][14].
* ⭐ [lparallel ![GitHub Repo Stars](https://img.shields.io/github/stars/sharplispers/lparallel) ![GitHub last commit](https://img.shields.io/github/last-commit/sharplispers/lparallel)](https://github.com/sharplispers/lparallel) - A library for parallel programming. [3-clause BSD][15]. Originally on [lmj/lparallel ![GitHub Repo Stars](https://img.shields.io/github/stars/lmj/lparallel) ![GitHub last commit](https://img.shields.io/github/last-commit/lmj/lparallel)](https://github.com/lmj/lparallel).
* [lfarm ![GitHub Repo Stars](https://img.shields.io/github/stars/lmj/lfarm) ![GitHub last commit](https://img.shields.io/github/last-commit/lmj/lfarm)](https://github.com/lmj/lfarm) - distributing work across machines (on top of lparallel and usocket). [BSD_3Clause][15]
* [calispel ![GitHub Repo Stars](https://img.shields.io/github/stars/hawkir/calispel) ![GitHub last commit](https://img.shields.io/github/last-commit/hawkir/calispel)](https://github.com/hawkir/calispel) - [CSP](https://en.wikipedia.org/wiki/Communicating_sequential_processes)-like channels for common lisp. With blocking, optionally buffered channels and a "CSP select" statement. ISC-style.
  - "It is complete, flexible and easy to use. I would recommend Calispel over Lparallel and ChanL." @Ambrevar. [discussion ![GitHub Repo Stars](https://img.shields.io/github/stars/CodyReichert/awesome-cl) ![GitHub last commit](https://img.shields.io/github/last-commit/CodyReichert/awesome-cl)](https://github.com/CodyReichert/awesome-cl/issues/290)
* [chanl ![GitHub Repo Stars](https://img.shields.io/github/stars/zkat/chanl) ![GitHub last commit](https://img.shields.io/github/last-commit/zkat/chanl)](https://github.com/zkat/chanl) - Portable, channel-based concurrency. [Expat][14], with parts under [3-clause BSD][15].
* [cl-async ![GitHub Repo Stars](https://img.shields.io/github/stars/orthecreedence/cl-async) ![GitHub last commit](https://img.shields.io/github/last-commit/orthecreedence/cl-async)](https://github.com/orthecreedence/cl-async) - A library for general-purpose, non-blocking programming. [Expat][14].
* [Moira ![GitHub Repo Stars](https://img.shields.io/github/stars/TBRSS/moira) ![GitHub last commit](https://img.shields.io/github/last-commit/TBRSS/moira)](https://github.com/TBRSS/moira) -  Monitor and restart background threads. In-lisp process supervisor. [MIT][200].
* [trivial-monitored-thread](https://gitlab.com/ediethelm/trivial-monitored-thread) -
  a Common Lisp library offering a way of spawning threads and being
  informed when one any of them crash and die. [MIT][200].
* [cl-gearman ![GitHub Repo Stars](https://img.shields.io/github/stars/taksatou/cl-gearman) ![GitHub last commit](https://img.shields.io/github/last-commit/taksatou/cl-gearman)](https://github.com/taksatou/cl-gearman) - a library for the [Gearman ![GitHub Repo Stars](https://img.shields.io/github/stars/gearman/gearmand) ![GitHub last commit](https://img.shields.io/github/last-commit/gearman/gearmand)](https://github.com/gearman/gearmand/) distributed job system. [LLGPL][8].
* [swank-crew ![GitHub Repo Stars](https://img.shields.io/github/stars/brown/swank-crew) ![GitHub last commit](https://img.shields.io/github/last-commit/brown/swank-crew)](https://github.com/brown/swank-crew) - distributed computation framework implemented using Swank Client. [BSD_3Clause][15].
* [cl-coroutine ![GitHub Repo Stars](https://img.shields.io/github/stars/takagi/cl-coroutine) ![GitHub last commit](https://img.shields.io/github/last-commit/takagi/cl-coroutine)](https://github.com/takagi/cl-coroutine) - a coroutine library. It uses the CL-CONT continuations library in its implementation. [MIT][200].
* [STMX ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos72/stmx) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos72/stmx)](https://github.com/cosmos72/stmx) -  High performance Transactional Memory for Common Lisp. [LLGPL][8].
* [Blackbird](https://orthecreedence.github.io/blackbird/) - a Promise implementation for Common Lisp [MIT][200].
  * see also [promise ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/promise) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/promise)](https://github.com/Shinmera/promise) - a basic promise datastructure, with timeouts. ZLIB.

See also:

* [cl-etcd ![GitHub Repo Stars](https://img.shields.io/github/stars/atgreen/cl-etcd) ![GitHub last commit](https://img.shields.io/github/last-commit/atgreen/cl-etcd)](https://github.com/atgreen/cl-etcd) - Run etcd as an asynchronous inferior process.  [etcd](https://etcd.io/) is a strongly consistent, distributed key-value store. [AGPL-3.0][agpl3].

Actors pattern
--------------

* 👍 [Sento ![GitHub Repo Stars](https://img.shields.io/github/stars/mdbergmann/cl-gserver) ![GitHub last commit](https://img.shields.io/github/last-commit/mdbergmann/cl-gserver)](https://github.com/mdbergmann/cl-gserver) - Sento (formerly cl-gserver) is a 'message passing' library/framework with actors similar to Erlang or Akka. It supports creating systems that should work reactive, require parallel computing and event based message handling. [Apache2][89].

See also:

* [Actors ![GitHub Repo Stars](https://img.shields.io/github/stars/aarvid/Actors) ![GitHub last commit](https://img.shields.io/github/last-commit/aarvid/Actors)](https://github.com/aarvid/Actors) package for LispWorks ([announce](https://www.reddit.com/r/Common_Lisp/comments/77vsft/david_mcclains_actors_package_for_lispworks/)) [MIT][200].
* [lisp-actors ![GitHub Repo Stars](https://img.shields.io/github/stars/dbmcclain/Lisp-Actors) ![GitHub last commit](https://img.shields.io/github/last-commit/dbmcclain/Lisp-Actors)](https://github.com/dbmcclain/Lisp-Actors), an "ongoing investigation into the use of the Actor model in Common Lisp, which has had the benefit of real-world application".
  * it was part of the [Emotiq blockchain ![GitHub Repo Stars](https://img.shields.io/github/stars/emotiq/emotiq) ![GitHub last commit](https://img.shields.io/github/last-commit/emotiq/emotiq)](https://github.com/emotiq/emotiq/blob/dev/src/test/blockchain-test.lisp) (a discontinued project)
  * does remoting, includes a threading abstraction layer library similar to Bordeaux-Threads.
  * ! it lacks unit tests.


Event processing
----------------

* [simple-tasks ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/simple-tasks) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/simple-tasks)](https://github.com/Shinmera/simple-tasks) - A very simple task scheduling framework. [zlib][33].
* [deeds ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/deeds) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/deeds)](https://github.com/Shinmera/deeds) - Deeds is an Extensible Event Delivery System. It allows for efficient event delivery to multiple handlers with a complex event filtering system. [zlib][33].
* [cl-flow ![GitHub Repo Stars](https://img.shields.io/github/stars/borodust/cl-flow) ![GitHub last commit](https://img.shields.io/github/last-commit/borodust/cl-flow)](https://github.com/borodust/cl-flow/) -  Data-flowish computation tree library for non-blocking concurrent Common Lisp. [MIT][200].
* [event-glue ![GitHub Repo Stars](https://img.shields.io/github/stars/orthecreedence/event-glue) ![GitHub last commit](https://img.shields.io/github/last-commit/orthecreedence/event-glue)](https://github.com/orthecreedence/event-glue) - simple eventing abstraction. No dependencies. It can be used anywhere you need a generic event handling system. [MIT][200].


Job processing
--------------


* [SBCL's timers](http://www.sbcl.org/manual/#Timers), system-wide event schedulers.
* [psychiq ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/psychiq) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/psychiq)](https://github.com/fukamachi/psychiq) - redis-based background job processing for Common Lisp applications. Inspired by Ruby's Sidekiq and compatible with its web UI. [LLGPL][8].
* [cl-cron ![GitHub Repo Stars](https://img.shields.io/github/stars/ciel-lang/cl-cron) ![GitHub last commit](https://img.shields.io/github/last-commit/ciel-lang/cl-cron)](https://github.com/ciel-lang/cl-cron) - A simple tool that provides cron like facilities. [GPL3][2].
* [clerk ![GitHub Repo Stars](https://img.shields.io/github/stars/tsikov/clerk) ![GitHub last commit](https://img.shields.io/github/last-commit/tsikov/clerk)](https://github.com/tsikov/clerk) - a cron-like scheduler with sane DSL. [MIT][200].


Regular expressions and string parsing
===============================================

* ⭐ [cl-ppcre](http://weitz.de/cl-ppcre/) - Portable, Perl-compatible regular expressions. [FreeBSD][39].
* [one-more-re-nightmare ![GitHub Repo Stars](https://img.shields.io/github/stars/no-defun-allowed/one-more-re-nightmare) ![GitHub last commit](https://img.shields.io/github/last-commit/no-defun-allowed/one-more-re-nightmare)](https://github.com/no-defun-allowed/one-more-re-nightmare) - a fast-ish regular expression compiler in Common Lisp. [BSD_2Clause][17].

See also:

* [rexxparse ![GitHub Repo Stars](https://img.shields.io/github/stars/dtenny/rexxparse) ![GitHub last commit](https://img.shields.io/github/last-commit/dtenny/rexxparse)](https://github.com/dtenny/rexxparse) -  A string parsing tool inspired by the REXX PARSE construct. MIT.

See also clj-re above.


Scripting
=========

Running scripts
---------------

*Implementations can run files with `--load`, SBCL has `--script`,
but there is a start-up time specially when loading libraries. Can we
do better? We can always build a binary.*

* 👍 [Roswell ![GitHub Repo Stars](https://img.shields.io/github/stars/roswell/roswell) ![GitHub last commit](https://img.shields.io/github/last-commit/roswell/roswell)](https://github.com/roswell/roswell#scripting-with-roswell) - a script installer and launcher, that makes it easy to distribute Lisp scripts and programs. [MIT][200].
  * *compiles a binary under the hood*
* [ScriptL ![GitHub Repo Stars](https://img.shields.io/github/stars/rpav/ScriptL) ![GitHub last commit](https://img.shields.io/github/last-commit/rpav/ScriptL)](https://github.com/rpav/ScriptL) - Shell scripting made Lisp-like! Or, live-coding remote function calls for the shell. Write a command in the REPL, and run it instantly in the shell. [LLGPL][8].
  * similar and maybe simpler: [lserver](https://notabug.org/quasus/lserver/)
* [CIEL ![GitHub Repo Stars](https://img.shields.io/github/stars/ciel-lang/CIEL) ![GitHub last commit](https://img.shields.io/github/last-commit/ciel-lang/CIEL)](https://github.com/ciel-lang/CIEL/) - CIEL Is an Extended Lisp is a collection of dozens of libraries useful for mundane tasks (HTTP, JSON, regexps…). [unclear licence]
  * It also comes as a binary that is able to run scripts from sources. Scripts that use the built-in libraries start fast without a compilation step.
  * *in beta as of 2024*
* NEW in 2024 [kiln ![GitHub Repo Stars](https://img.shields.io/github/stars/ruricolist/kiln) ![GitHub last commit](https://img.shields.io/github/last-commit/ruricolist/kiln)](https://github.com/ruricolist/kiln) - an infrastructure (managing a hidden multicall binary) to make Lisp scripting efficient and ergonomic. [MIT][200].
  * Kiln makes it practical to write very small scripts. Kiln scripts are fast and cheap to the point where it makes sense to expose even small pieces of Lisp functionality to the shell.


Command-line options parsers
----------------------------

* 👍 [Clingon ![GitHub Repo Stars](https://img.shields.io/github/stars/dnaeon/clingon) ![GitHub last commit](https://img.shields.io/github/last-commit/dnaeon/clingon)](https://github.com/dnaeon/clingon) - a rich command-line options parser system.
  * it may have the richest feature set: subcommands, generation of bash completion, support for various kinds of options (integers, booleans, counter, enums…), extensible…
* [Adopt ![GitHub Repo Stars](https://img.shields.io/github/stars/sjl/adopt) ![GitHub last commit](https://img.shields.io/github/last-commit/sjl/adopt)](https://github.com/sjl/adopt/) - A Damn OPTion parsing library. [MIT][200].


Readline, ncurses and other graphical helpers
--------------------------------------------

* [cl-readline ![GitHub Repo Stars](https://img.shields.io/github/stars/vindarel/cl-readline) ![GitHub last commit](https://img.shields.io/github/last-commit/vindarel/cl-readline)](https://github.com/vindarel/cl-readline) - a set of
  functions to edit lines as they are typed in, to maintain a list of
  previously-entered command lines, to recall and reedit them and
  perform csh-like history expansion.  Emacs and vi editing
  modes. [GPL3][2].
* [Linedit](https://common-lisp.net/project/linedit) - Readline-style
  library that provides customizable line-editing
  features. [MIT-style][210].
* [cl-charms ![GitHub Repo Stars](https://img.shields.io/github/stars/HiTECNOLOGYs/cl-charms) ![GitHub last commit](https://img.shields.io/github/last-commit/HiTECNOLOGYs/cl-charms)](https://github.com/HiTECNOLOGYs/cl-charms) - an
  interface to `libcurses` in Common Lisp. It provides both a raw,
  low-level interface to libcurses via CFFI, and a more higher-level
  lispier interface. [MIT][200].
* [replic ![GitHub Repo Stars](https://img.shields.io/github/stars/vindarel/replic) ![GitHub last commit](https://img.shields.io/github/last-commit/vindarel/replic)](https://github.com/vindarel/replic/) - helpers to turn existing code into a readline application, with a focus on defining the completion of the commands' arguments. Also comes as a ready to use executable, that transforms a user's lispy init file into readline commands. [MIT][200].
* [cl-ansi-term ![GitHub Repo Stars](https://img.shields.io/github/stars/vindarel/cl-ansi-term) ![GitHub last commit](https://img.shields.io/github/last-commit/vindarel/cl-ansi-term)](https://github.com/vindarel/cl-ansi-term) - print
  colorized text, horizontal lines, progress bars, (un)ordered lists
  and tables on ANSI-compliant terminals. [GPL3][2].
* [cl-progress-bar ![GitHub Repo Stars](https://img.shields.io/github/stars/sirherrbatka/cl-progress-bar) ![GitHub last commit](https://img.shields.io/github/last-commit/sirherrbatka/cl-progress-bar)](https://github.com/sirherrbatka/cl-progress-bar/) - progress bars, just like in Quicklisp ! [MIT][200].
  * and [progressons ![GitHub Repo Stars](https://img.shields.io/github/stars/vindarel/progressons) ![GitHub last commit](https://img.shields.io/github/last-commit/vindarel/progressons)](https://github.com/vindarel/progressons), a progress bar on one line, for real an dumb terminals. MIT.

Shells, shells interfaces
-------------------------

* [Lish ![GitHub Repo Stars](https://img.shields.io/github/stars/nibbula/lish) ![GitHub last commit](https://img.shields.io/github/last-commit/nibbula/lish)](https://github.com/nibbula/lish) - `lish` may someday be a lisp shell. [GPL3][2].
  * supports tab-completion of executables in the path and Lisp symbols, allows to write and to mix shell commands and Lisp code, has a tiny REPL and an interactive debugger, and more.
* [shcl ![GitHub Repo Stars](https://img.shields.io/github/stars/bradleyjensen/shcl) ![GitHub last commit](https://img.shields.io/github/last-commit/bradleyjensen/shcl)](https://github.com/bradleyjensen/shcl) - a POSIX-like shell in Common Lisp. [Apache2.0][89].
* [Shelly ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/shelly) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/shelly)](https://github.com/fukamachi/shelly) - execute Common Lisp
  functions like a shell command, without the need to write a command
  line arguments parser. And it also can be used as a Make-like
  build-tool. [FreeBSD][39].
* [unix-in-lisp ![GitHub Repo Stars](https://img.shields.io/github/stars/PuellaeMagicae/unix-in-lisp) ![GitHub last commit](https://img.shields.io/github/last-commit/PuellaeMagicae/unix-in-lisp)](https://github.com/PuellaeMagicae/unix-in-lisp) -  Mount Unix system into Common Lisp image.
  * Unix concepts are directly/shallowly embedded into Lisp (Unix commands become Lisp macros, Unix file become Lisp variables, Unix streams become lazy Lisp sequences, etc).

Lisp utilities:

* [cmd ![GitHub Repo Stars](https://img.shields.io/github/stars/ruricolist/cmd) ![GitHub last commit](https://img.shields.io/github/last-commit/ruricolist/cmd)](https://github.com/ruricolist/cmd) - utility for running external programs. Protects against shell interpolation, built with multi-threaded programs in mind, Windows support. [MIT][200].
  * `uiop:run-program` (synchronous) and `uiop:launch-program` (async) are shipped with ASDF and available on all modern implementations. See the [CL Cookbook: running external programs](https://lispcookbook.github.io/cl-cookbook/os.html#running-external-programs).
* [Clesh ![GitHub Repo Stars](https://img.shields.io/github/stars/Neronus/Clesh) ![GitHub last commit](https://img.shields.io/github/last-commit/Neronus/Clesh)](https://github.com/Neronus/Clesh) - extends Common Lisp to embed shell code in a manner similar to perl's backtick. [FreeBSD][39].

System administration
---------------------

* [Consfigurator](https://spwhitton.name/tech/code/consfigurator/) - Lisp declarative configuration management system.  You can use it to configure hosts as root, deploy services as unprivileged users, build and deploy containers, and produce disc images. [GPL3][2].
* [cl-unix-cybernetics ![GitHub Repo Stars](https://img.shields.io/github/stars/cl-unix-cybernetics/cl-unix-cybernetics) ![GitHub last commit](https://img.shields.io/github/last-commit/cl-unix-cybernetics/cl-unix-cybernetics)](https://github.com/cl-unix-cybernetics/cl-unix-cybernetics) (previously Adams) - UNIX system administration in Common Lisp. Not unlike Ansible, Chef or Puppet. [ISC][22].
  - You describe your systems (hosts) using resources having properties. The properties are then probed and synchronized using only /bin/sh on the remote host, and /usr/bin/ssh on the control host.

Other scripting utilities
-------------------------

* [clawk ![GitHub Repo Stars](https://img.shields.io/github/stars/sharplispers/clawk) ![GitHub last commit](https://img.shields.io/github/last-commit/sharplispers/clawk)](https://github.com/sharplispers/clawk) - an AWK implementation embedded into Common Lisp, to search files for lines and perform specified actions on its fields. BSD-style.
* [lqn ![GitHub Repo Stars](https://img.shields.io/github/stars/inconvergent/lqn) ![GitHub last commit](https://img.shields.io/github/last-commit/inconvergent/lqn)](https://github.com/inconvergent/lqn) -  query language and terminal utility for querying and transforming Lisp, JSON and other text files. written in Common Lisp. [MIT][200].

And also, stalled projects:

* [WCL ![GitHub Repo Stars](https://img.shields.io/github/stars/wadehennessey/wcl) ![GitHub last commit](https://img.shields.io/github/last-commit/wadehennessey/wcl)](https://github.com/wadehennessey/wcl) [stalled] - allow hundreds of Lisp
applications to be realistically available at once, while allowing
several of them to run concurrently.  WCL accomplishes this by
providing Common Lisp as a Unix shared library that can be linked with
Lisp and C code to produce efficient applications.  For example, the
executable for a Lisp version of the canonical `Hello World!`
program requires only 20k bytes on 32 bit x86 Linux.  WCL also
supports a full development environment, including dynamic file
loading and debugging.  A modified version of GDB is used to debug WCL
programs, providing support for mixed language debugging.
    - a [paper](https://dl.acm.org/doi/abs/10.1145/141478.141560): "Delivering efficient Common Lisp applications under Unix".


Text Editor Resources
=====================

This contains plugins and other goodies for various text editors.

* [Parinfer](https://shaunlebron.github.io/parinfer/) - Parinfer is a way to edit lisp code that helps to keep both the indentation and the parenthesis balanced. It is easy to start with and yet it offers advanced features à la Paredit. It is available on many editors (Emacs, Vim, Neovim, Atom, Sublime Text, Visual Studio Code, LightTable, CodeMirror,…).

## Emacs ##

* ⭐ [Slime ![GitHub Repo Stars](https://img.shields.io/github/stars/slime/slime) ![GitHub last commit](https://img.shields.io/github/last-commit/slime/slime)](https://github.com/slime/slime) - Superior Lisp Interaction Mode for Emacs; a full-blown environment for Common Lisp inside of Emacs. Public domain.
* 👍 [Sly ![GitHub Repo Stars](https://img.shields.io/github/stars/joaotavora/sly) ![GitHub last commit](https://img.shields.io/github/last-commit/joaotavora/sly)](https://github.com/joaotavora/sly) - SLY is a fork of SLIME and contains multiple improvements upon it, such as Sly stickers.

Starter kits:

* 👍 [Portacle](https://shinmera.github.io/portacle/) - A portable and multiplatform Common Lisp environment: SBCL, Quicklisp, Emacs, Slime, Git.
* [Emacs4CL ![GitHub Repo Stars](https://img.shields.io/github/stars/susam/emacs4cl) ![GitHub last commit](https://img.shields.io/github/last-commit/susam/emacs4cl)](https://github.com/susam/emacs4cl) - A tiny Emacs initialization file to quickly set up vanilla Emacs for Common Lisp programming. Comes with a line-by-line explanation of every line of code in the initialization file.
* [plain-common-lisp ![GitHub Repo Stars](https://img.shields.io/github/stars/pascalcombier/plain-common-lisp) ![GitHub last commit](https://img.shields.io/github/last-commit/pascalcombier/plain-common-lisp)](https://github.com/pascalcombier/plain-common-lisp/) -  A trivial way to get a native Common Lisp environment on Windows.
  * ships SBCL, Quicklisp, Emacs and Slime.
  * with example programs for a console program, accessing the Win32 API, displaying a GUI with IUP, running an OpenGL window.
* [cl-devel2](https://hub.docker.com/r/eshamster/cl-devel2/) - a Docker container for Common Lisp development environment. Ships SBCL, CCL, Roswell and Emacs25 with Slime.

Tools:

- [Quicksearch ![GitHub Repo Stars](https://img.shields.io/github/stars/lisp-maintainers/quicksearch) ![GitHub last commit](https://img.shields.io/github/last-commit/lisp-maintainers/quicksearch)](https://github.com/lisp-maintainers/quicksearch) - search for projects on GitHub, Quicklisp, Cliki and Bitbucket. MIT.

Slime extensions:

* [slime-star ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/slime-star) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/slime-star)](https://github.com/mmontone/slime-star) - a SLIME configuration with extensions pre-installed, with also some custom utilities and menus:
  - the Lisp system browser
  - [SLIME doc contrib ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/slime-doc-contribs) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/slime-doc-contribs)](https://github.com/mmontone/slime-doc-contribs) - enhance the default help buffer.
  - [Quicklisp systems ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/quicklisp-systems) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/quicklisp-systems)](https://github.com/mmontone/quicklisp-systems) - Search, browse and load Quicklisp systems from Emacs.
  - [Slime breakpoints ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/slime-breakpoints) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/slime-breakpoints)](https://github.com/mmontone/slime-breakpoints)
  - [Slite ![GitHub Repo Stars](https://img.shields.io/github/stars/tdrhq/slite) ![GitHub last commit](https://img.shields.io/github/last-commit/tdrhq/slite)](https://github.com/tdrhq/slite/) - a test runner for FiveAM.
  - [Quicklisp-apropos ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/quicklisp-apropos) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/quicklisp-apropos)](https://github.com/mmontone/quicklisp-apropos) - Perform `apropos` queries across libraries in Quicklisp (full-text search on symbol names, classes, documentation…).
  - [slime-critic ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/slime-critic) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/slime-critic)](https://github.com/mmontone/slime-critic) - the lisp critic gently critiques your code for bad patterns.

Sly extensions:

* [sly-overlay](https://git.sr.ht/~fosskers/sly-overlay) - an extension for Sly that enables the overlay of Common Lisp evaluation results directly into the buffer in the spirit of CIDER (Clojure), Eros (Emacs Lisp) and the Lem editor.

## Vim & Neovim ##

* [SLIMV ![GitHub Repo Stars](https://img.shields.io/github/stars/kovisoft/slimv) ![GitHub last commit](https://img.shields.io/github/last-commit/kovisoft/slimv)](https://github.com/kovisoft/slimv) - Superior Lisp Interaction Mode for Vim; a full-blown environment for Common Lisp inside of Vim. No license specified.
* [Vlime ![GitHub Repo Stars](https://img.shields.io/github/stars/vlime/vlime) ![GitHub last commit](https://img.shields.io/github/last-commit/vlime/vlime)](https://github.com/vlime/vlime) - VLIME: Vim plus Lisp Is Mostly Evil. A Common Lisp dev environment for Vim (and Neovim). [MIT][200].
* [quicklisp.nvim](https://gitlab.com/HiPhish/quicklisp.nvim) - A Quicklisp frontend for Neovim.
* [Slimv_box ![GitHub Repo Stars](https://img.shields.io/github/stars/justin2004/slimv_box) ![GitHub last commit](https://img.shields.io/github/last-commit/justin2004/slimv_box)](https://github.com/justin2004/slimv_box) - slimv in a Docker container.


## Eclipse ##

* [Dandelion ![GitHub Repo Stars](https://img.shields.io/github/stars/Ragnaroek/dandelion) ![GitHub last commit](https://img.shields.io/github/last-commit/Ragnaroek/dandelion)](https://github.com/Ragnaroek/dandelion) - a Common Lisp plugin for the Eclipse IDE.

## Lem ##

* [Lem ![GitHub Repo Stars](https://img.shields.io/github/stars/lem-project/lem) ![GitHub last commit](https://img.shields.io/github/last-commit/lem-project/lem)](https://github.com/lem-project/lem) - a ready to use, Emacs-like, Slime-based
  editor tailored for Common Lisp development out of the box, as well as other programming languages with its built-in LSP client. With ncurses, Electron and SDL2 interfaces. [MIT][200].
  * [Lem 2.0 ![GitHub Repo Stars](https://img.shields.io/github/stars/lem-project/lem) ![GitHub last commit](https://img.shields.io/github/last-commit/lem-project/lem)](https://github.com/lem-project/lem/releases/tag/v2.0.0), released on May, 2023, added the SDL2 frontend, thus mouse support, graphic capabilities and Windows support, among other new features.
  * see also: an [opengl frontend ![GitHub Repo Stars](https://img.shields.io/github/stars/pupcraft/lem-opengl) ![GitHub last commit](https://img.shields.io/github/last-commit/pupcraft/lem-opengl)](https://github.com/pupcraft/lem-opengl), [Lem in Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/lem-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/lem-docker)](https://github.com/40ants/lem-docker), [lem-pareto ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/lem-pareto) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/lem-pareto)](https://github.com/40ants/lem-pareto).

* 🚀 [Lem on the cloud](https://www.youtube.com/watch?v=IMN7feOQOak) (video presentation)
  * "Rooms is a product that runs Lem, a text editor created in Common Lisp, in the Cloud and can be used by multiple users."
  * NEW as of April, 2024.


## Atom, Pulsar ##

* [SLIMA ![GitHub Repo Stars](https://img.shields.io/github/stars/neil-lindquist/slima) ![GitHub last commit](https://img.shields.io/github/last-commit/neil-lindquist/slima)](https://github.com/neil-lindquist/slima) allows you to
  interactively develop Common Lisp code, turning Atom (or now Pulsar) into a
  pretty good, and actively developped, Lisp IDE. [MIT][200].

## Sublime Text ##

* [Sublime Text](http://www.sublimetext.com/3) (proprietary) has
  Common Lisp support with its SublimeREPL and
  [Slyblime ![GitHub Repo Stars](https://img.shields.io/github/stars/s-clerc/slyblime) ![GitHub last commit](https://img.shields.io/github/last-commit/s-clerc/slyblime)](https://github.com/s-clerc/slyblime) packages. Slyblime
  is an implementation of SLY and it uses the same backend (SLYNK). It
  ships advanced features including a debugger with stack frame
  inspection.

## VSCode ##

* [commonlisp-vscode](https://marketplace.visualstudio.com/items?itemName=ailisp.commonlisp-vscode) - an extension to support syntax highlight, auto completion, documentation on hover, go to definition, compile & load file, REPL. It is [On GitHub ![GitHub Repo Stars](https://img.shields.io/github/stars/ailisp/commonlisp-vscode) ![GitHub last commit](https://img.shields.io/github/last-commit/ailisp/commonlisp-vscode)](https://github.com/ailisp/commonlisp-vscode/).
* [alive ![GitHub Repo Stars](https://img.shields.io/github/stars/nobody-famous/alive) ![GitHub last commit](https://img.shields.io/github/last-commit/nobody-famous/alive)](https://github.com/nobody-famous/alive) -  Common Lisp Extension for VSCode. Public domain.
  * see the Cookbook: [using VSCode with Alive](https://lispcookbook.github.io/cl-cookbook/vscode-alive.html)
* [strict-paredit-vscode](https://marketplace.visualstudio.com/items?itemName=ailisp.strict-paredit) - structural editing and navigation like Emacs.

## JetBrains

* [SLT ![GitHub Repo Stars](https://img.shields.io/github/stars/Enerccio/SLT) ![GitHub last commit](https://img.shields.io/github/last-commit/Enerccio/SLT)](https://github.com/Enerccio/SLT) -  an IDE Plugin for Itellij/Jetbrains IDE lineup implementing support for Common Lisp via SBCL and Slime/Swank.
  - 🎉 NEW! Released in Jan, 2023.

## Geany (experimental) ##

* [Geany-lisp ![GitHub Repo Stars](https://img.shields.io/github/stars/jasom/geany-lisp) ![GitHub last commit](https://img.shields.io/github/last-commit/jasom/geany-lisp)](https://github.com/jasom/geany-lisp) is an experimental lisp mode for the [Geany](https://geany.org/) editor.

## Notebooks ##

* [common-lisp-jupyter ![GitHub Repo Stars](https://img.shields.io/github/stars/yitzchak/common-lisp-jupyter) ![GitHub last commit](https://img.shields.io/github/last-commit/yitzchak/common-lisp-jupyter)](https://github.com/yitzchak/common-lisp-jupyter) - A Common Lisp kernel for Jupyter along with a library for building Jupyter kernels, based on Maxima-Jupyter by Robert Dodier which was based on cl-jupyter by Frederic Peschanski. [MIT][200].
  * [jupyterlab-debugger-restarts ![GitHub Repo Stars](https://img.shields.io/github/stars/yitzchak/jupyterlab-debugger-restarts) ![GitHub last commit](https://img.shields.io/github/last-commit/yitzchak/jupyterlab-debugger-restarts)](https://github.com/yitzchak/jupyterlab-debugger-restarts) - restart functionality for the JupyterLab debugger.
  * [Cytoscape widget ![GitHub Repo Stars](https://img.shields.io/github/stars/yitzchak/cytoscape-clj) ![GitHub last commit](https://img.shields.io/github/last-commit/yitzchak/cytoscape-clj)](https://github.com/yitzchak/cytoscape-clj) -  Cytoscape.js widget for common-lisp-jupyter.
  * [Kekule widget ![GitHub Repo Stars](https://img.shields.io/github/stars/yitzchak/kekule-clj) ![GitHub last commit](https://img.shields.io/github/last-commit/yitzchak/kekule-clj)](https://github.com/yitzchak/kekule-clj) -  Kekule.js widget for common-lisp-jupyter.
  * [molecule viewer ![GitHub Repo Stars](https://img.shields.io/github/stars/yitzchak/jupyterlab-molviewer) ![GitHub last commit](https://img.shields.io/github/last-commit/yitzchak/jupyterlab-molviewer)](https://github.com/yitzchak/jupyterlab-molviewer) - A molecule viewer for JupyterLab using ngl.
  * [ngl widget ![GitHub Repo Stars](https://img.shields.io/github/stars/yitzchak/ngl-clj) ![GitHub last commit](https://img.shields.io/github/last-commit/yitzchak/ngl-clj)](https://github.com/yitzchak/ngl-clj) -  A ngl widget (protein viewer) for common-lisp-jupyter.
  * [sheet widget ![GitHub Repo Stars](https://img.shields.io/github/stars/yitzchak/sheet-clj) ![GitHub last commit](https://img.shields.io/github/last-commit/yitzchak/sheet-clj)](https://github.com/yitzchak/sheet-clj) -  Data grid widget for common-lisp-jupyter.
* [cl-jupyter ![GitHub Repo Stars](https://img.shields.io/github/stars/fredokun/cl-jupyter) ![GitHub last commit](https://img.shields.io/github/last-commit/fredokun/cl-jupyter)](https://github.com/fredokun/cl-jupyter) - A Common Lisp kernel for Jupyter notebooks [custom licence ![GitHub Repo Stars](https://img.shields.io/github/stars/fredokun/cl-jupyter) ![GitHub last commit](https://img.shields.io/github/last-commit/fredokun/cl-jupyter)](https://github.com/fredokun/cl-jupyter/blob/master/LICENSE).
* [Darkmatter ![GitHub Repo Stars](https://img.shields.io/github/stars/tamamu/darkmatter) ![GitHub last commit](https://img.shields.io/github/last-commit/tamamu/darkmatter)](https://github.com/tamamu/darkmatter) - A
  notebook-style Common Lisp environment. [MIT][200].

## REPLs ##

* [cl-repl ![GitHub Repo Stars](https://img.shields.io/github/stars/lisp-maintainers/cl-repl) ![GitHub last commit](https://img.shields.io/github/last-commit/lisp-maintainers/cl-repl)](https://github.com/lisp-maintainers/cl-repl) - an ipython-like REPL. With completion, shell commands, magic commands, debugger, etc. [GPL3][2]. With [colorthemes ![GitHub Repo Stars](https://img.shields.io/github/stars/koji-kojiro/lem-pygments-colorthemes) ![GitHub last commit](https://img.shields.io/github/last-commit/koji-kojiro/lem-pygments-colorthemes)](https://github.com/koji-kojiro/lem-pygments-colorthemes).
  * new as of 2024: it now provides multi-line input and binary releases. Simply download a binary (Ubuntu so far) and run it.
* [sbcli ![GitHub Repo Stars](https://img.shields.io/github/stars/hellerve/sbcli) ![GitHub last commit](https://img.shields.io/github/last-commit/hellerve/sbcli)](https://github.com/hellerve/sbcli) - a readline REPL for SBCL. With completion, quick commands, optional syntax highlighting (with pygments), and no interactive debugger. [GPL3][2].
* [magic-ed ![GitHub Repo Stars](https://img.shields.io/github/stars/sanel/magic-ed) ![GitHub last commit](https://img.shields.io/github/last-commit/sanel/magic-ed)](https://github.com/sanel/magic-ed) - a tiny editing facility, where you can directly load, edit, manipulate and evaluate file or file content from the REPL, when going to a full IDE is too much. [MIT][200].

## Online editors ##

* [Judge0 IDE](https://ide.judge0.com/?lUpj) is an online editor which supports Common Lisp (SBCL). [MIT][200].
* [Riju](https://riju.codes/commonlisp), a "fast online playground for every programming language", supports Common Lisp (SBCL).

## Apps ##

* [CodePlayground](https://codeplayground.app/) - an iPhone and iPad app with Lisp support via CCL.

Text and binary parsers
============================

* ⭐ [esrap ![GitHub Repo Stars](https://img.shields.io/github/stars/scymtym/esrap) ![GitHub last commit](https://img.shields.io/github/last-commit/scymtym/esrap)](https://github.com/scymtym/esrap) - Packrat parser. [Expat][14].
* [alexa ![GitHub Repo Stars](https://img.shields.io/github/stars/quil-lang/alexa) ![GitHub last commit](https://img.shields.io/github/last-commit/quil-lang/alexa)](https://github.com/quil-lang/alexa) -  A Lexical Analyzer Generator. [BSD_3Clause][15].
  - ALEXA is a tool similar to lex or flex for generating lexical analyzers. Unlike tools like lex, however, ALEXA defines a domain-specific language within your Lisp program, so you don't need to invoke a separate tool.
* [cl-yacc ![GitHub Repo Stars](https://img.shields.io/github/stars/jech/cl-yacc) ![GitHub last commit](https://img.shields.io/github/last-commit/jech/cl-yacc)](https://github.com/jech/cl-yacc) - a LALR(1) parser generator. [MIT][200].
* [cl-shlex ![GitHub Repo Stars](https://img.shields.io/github/stars/ruricolist/cl-shlex) ![GitHub last commit](https://img.shields.io/github/last-commit/ruricolist/cl-shlex)](https://github.com/ruricolist/cl-shlex/) - simple lexical analyzer for shell-like syntaxes. [MIT][200].
* [smug ![GitHub Repo Stars](https://img.shields.io/github/stars/drewc/smug) ![GitHub last commit](https://img.shields.io/github/last-commit/drewc/smug)](https://github.com/drewc/smug) - parser combinators for Common Lisp. SMUG makes it simple to create quick extensible recursive descent parsers without funky syntax or impenetrable macrology. [MIT][200].
* [parseq ![GitHub Repo Stars](https://img.shields.io/github/stars/mrossini-ethz/parseq) ![GitHub last commit](https://img.shields.io/github/last-commit/mrossini-ethz/parseq)](https://github.com/mrossini-ethz/parseq) - a library for parsing sequences such as strings and lists using parsing expression grammars. Inspired by Esrap. GPL2.
* [lisp-binary ![GitHub Repo Stars](https://img.shields.io/github/stars/j3pic/lisp-binary) ![GitHub last commit](https://img.shields.io/github/last-commit/j3pic/lisp-binary)](https://github.com/j3pic/lisp-binary) - A library to easily read and write complex binary formats. [GPL3][2].
* [uclp ![GitHub Repo Stars](https://img.shields.io/github/stars/ravi-delia/uclp) ![GitHub last commit](https://img.shields.io/github/last-commit/ravi-delia/uclp)](https://github.com/ravi-delia/uclp) -  An experimental implementation of parsing expression grammars (PEGs, a la Janet) in Common Lisp. MIT.

see also:

* [texp ![GitHub Repo Stars](https://img.shields.io/github/stars/eugeneia/texp) ![GitHub last commit](https://img.shields.io/github/last-commit/eugeneia/texp)](https://github.com/eugeneia/texp/) - A DSL to generate TeX. [AGPL-3.0][agpl3].

Text Processing
===============

* [montezuma ![GitHub Repo Stars](https://img.shields.io/github/stars/sharplispers/montezuma) ![GitHub last commit](https://img.shields.io/github/last-commit/sharplispers/montezuma)](https://github.com/sharplispers/montezuma/) -  Full-text indexing and search for Common Lisp. [Expat][14].
* [mk-string-metrics ![GitHub Repo Stars](https://img.shields.io/github/stars/cbaggers/mk-string-metrics) ![GitHub last commit](https://img.shields.io/github/last-commit/cbaggers/mk-string-metrics)](https://github.com/cbaggers/mk-string-metrics) -
  Calculate various string metrics efficiently in Common Lisp
  (Damerau-Levenshtein, Hamming, Jaro, Jaro-Winkler, Levenshtein,
  etc). [MIT][200].
* [wiki-lang-detect ![GitHub Repo Stars](https://img.shields.io/github/stars/vseloved/wiki-lang-detect) ![GitHub last commit](https://img.shields.io/github/last-commit/vseloved/wiki-lang-detect)](https://github.com/vseloved/wiki-lang-detect) -
Text language identification using Wikipedia data. No license specified.
* [cl-phonetic ![GitHub Repo Stars](https://img.shields.io/github/stars/bgutter/cl-phonetic) ![GitHub last commit](https://img.shields.io/github/last-commit/bgutter/cl-phonetic)](https://github.com/bgutter/cl-phonetic) - Phonetic pattern matching library for Common Lisp (intended to replace the Sylvia library for Python). [MIT][200].
* [cl-string-generator ![GitHub Repo Stars](https://img.shields.io/github/stars/pokepay/cl-string-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/pokepay/cl-string-generator)](https://github.com/pokepay/cl-string-generator) -  Generate string from regular expression. [MIT][200].
* [trivial-sanitize](https://notabug.org/cage/trivial-sanitize) -  clean html strings: `"<a>foo</a>"` → `"foo"`. [LLGPL][8].

See also:

* [Resolve ![GitHub Repo Stars](https://img.shields.io/github/stars/GrammaTech/resolve) ![GitHub last commit](https://img.shields.io/github/last-commit/GrammaTech/resolve)](https://github.com/GrammaTech/resolve) - A software for AST-based diff calculation, display, and automated resolution. Written in C++ and CL, you'll find Lisp utilities.

Tools
=====

These are applications or bits of code that make development in Common Lisp easier without being Common Lisp libraries themselves.

* [quicksearch ![GitHub Repo Stars](https://img.shields.io/github/stars/tkych/quicksearch) ![GitHub last commit](https://img.shields.io/github/last-commit/tkych/quicksearch)](https://github.com/tkych/quicksearch) - Look up online libraries from the REPL. [Expat][14].
* [lake ![GitHub Repo Stars](https://img.shields.io/github/stars/takagi/lake) ![GitHub last commit](https://img.shields.io/github/last-commit/takagi/lake)](https://github.com/takagi/lake) - a GNU make like build utility. [MIT][200].


Unit Testing
============

* ⭐ [FiveAM ![GitHub Repo Stars](https://img.shields.io/github/stars/sionescu/fiveam) ![GitHub last commit](https://img.shields.io/github/last-commit/sionescu/fiveam)](https://github.com/sionescu/fiveam) - Simple regression testing framework. [FreeBSD][39].
  * [fiveam-matchers ![GitHub Repo Stars](https://img.shields.io/github/stars/tdrhq/fiveam-matchers) ![GitHub last commit](https://img.shields.io/github/last-commit/tdrhq/fiveam-matchers)](https://github.com/tdrhq/fiveam-matchers/) -  an extensible, composable matchers library for fiveam. [Apache2.0][89].
* [Parachute ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/parachute) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/parachute)](https://github.com/Shinmera/parachute) - An extensible and cross-compatible testing framework. With test dependencies, conditions, fixtures and restarts. [zlib][33].
* [CLUnit2](https://notabug.org/cage/clunit2/) - A unit testing library. [MIT][200].
* [Mockingbird ![GitHub Repo Stars](https://img.shields.io/github/stars/Chream/mockingbird) ![GitHub last commit](https://img.shields.io/github/last-commit/Chream/mockingbird)](https://github.com/Chream/mockingbird) - A small
  stubbing and mocking library for Common Lisp. Can also check wether
  a stubbed function was called, how many times and with which
  arguments. [MIT][200].
* [cl-mock ![GitHub Repo Stars](https://img.shields.io/github/stars/Ferada/cl-mock) ![GitHub last commit](https://img.shields.io/github/last-commit/Ferada/cl-mock)](https://github.com/Ferada/cl-mock) - Another mocking library. It has more features than Mockingbird, like pattern matching on the mocked call, etc.
* [Check-it ![GitHub Repo Stars](https://img.shields.io/github/stars/DalekBaldwin/check-it) ![GitHub last commit](https://img.shields.io/github/last-commit/DalekBaldwin/check-it)](https://github.com/DalekBaldwin/check-it) - A QuickCheck-style randomized property-based testing. [LLGPL][8].
* [cl-coveralls ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/cl-coveralls) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/cl-coveralls)](https://github.com/fukamachi/cl-coveralls) - a helper
  library to post test coverage to Coveralls. See [SBCL's code coverage tool](http://www.sbcl.org/manual/index.html#sb_002dcover). [FreeBSD][39].
* [CheckL ![GitHub Repo Stars](https://img.shields.io/github/stars/rpav/CheckL) ![GitHub last commit](https://img.shields.io/github/last-commit/rpav/CheckL)](https://github.com/rpav/CheckL/) - Why write programs in Common Lisp but tests like Java? Meet CheckL!
  * a testing library that checks the current test value against the previous one and offers restarts.

See also:

* [testieren](https://cicadas.surf/cgit/colin/testiere.git/about/) - a testing utility where tests are included at the top of a `defun/t` form. They are run when you recompile your functions interactively. With mocking and stubbing support. [GPL3][2].
* [cl-hamcrest ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/cl-hamcrest) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/cl-hamcrest)](https://github.com/40ants/cl-hamcrest) -  a set of [Hamcrest](https://hamcrest.org/) matchers that can be combined to create flexible expressions of intent. Helps make your unittests more readable by using  assertions such as `has-plist-entries`, `has-slots`, `has-length`, `contains`, `contains-in-any-order`, `has-all`… [BSD_3Clause][15].

Editor utilities:

* [Slite ![GitHub Repo Stars](https://img.shields.io/github/stars/tdrhq/slite) ![GitHub last commit](https://img.shields.io/github/last-commit/tdrhq/slite)](https://github.com/tdrhq/slite/) - a SLIme-based TEst runner for FiveAM Tests. [Apache2.0][89]
  - Slite interactively runs your Common Lisp tests (at the time of writing only FiveAM is supported). It allows you to see the summary of test failures, jump to test definitions, rerun tests with the debugger, all from inside Emacs.

For more: [Sabra Crolleton's extensive test frameworks comparison](https://sabracrolleton.github.io/testing-framework).


Utilities
=========

Caching
-------

* [clache ![GitHub Repo Stars](https://img.shields.io/github/stars/html/clache) ![GitHub last commit](https://img.shields.io/github/last-commit/html/clache)](https://github.com/html/clache) - General caching facility. Cache any Lisp object on disk or in memory. A cache can be persistent or have an expiration time. [LLGPL][8].
* [function-cache ![GitHub Repo Stars](https://img.shields.io/github/stars/AccelerationNet/function-cache) ![GitHub last commit](https://img.shields.io/github/last-commit/AccelerationNet/function-cache)](https://github.com/AccelerationNet/function-cache) -  A Common Lisp function caching / memoization library. [BSD][15].


Compression / decompression
---------------------------

* [chipz ![GitHub Repo Stars](https://img.shields.io/github/stars/froydnj/chipz) ![GitHub last commit](https://img.shields.io/github/last-commit/froydnj/chipz)](https://github.com/froydnj/chipz) - A decompression library. [3-clause BSD][15].
* [Salza2](http://www.xach.com/lisp/salza2/) - A library for creating compressed data. [FreeBSD][39].
* [zippy ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/zippy) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/zippy)](https://github.com/Shinmera/zippy) -  A ZIP archive format library based on 3bz. [zlib][33].
* [archive ![GitHub Repo Stars](https://img.shields.io/github/stars/froydnj/archive) ![GitHub last commit](https://img.shields.io/github/last-commit/froydnj/archive)](https://github.com/froydnj/archive) - a library for reading and creating archive (tar, cpio) files. [BSD_3Clause][15]. A pure Common Lisp replacement for the `tar` program.
  * see its recent fork [cl-tar](https://common-lisp.net/project/cl-tar/) (2021). [Announce](https://www.timmons.dev/posts/new-project-cl-tar.html).


Configuration
-------------

* 👍 [py-configparser](https://common-lisp.net/project/py-configparser/) - reads and writes Python's ConfigParser-like configuration files. [MIT][200].
* [envy ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/envy) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/envy)](https://github.com/fukamachi/envy) - Configuration switcher. [FreeBSD][39].
* [chameleon ![GitHub Repo Stars](https://img.shields.io/github/stars/sheepduke/chameleon) ![GitHub last commit](https://img.shields.io/github/last-commit/sheepduke/chameleon)](https://github.com/sheepduke/chameleon/) - a configuration management library shipped with profile support. [MIT][200].

CSV
---

* ⭐ [cl-csv ![GitHub Repo Stars](https://img.shields.io/github/stars/AccelerationNet/cl-csv) ![GitHub last commit](https://img.shields.io/github/last-commit/AccelerationNet/cl-csv)](https://github.com/AccelerationNet/cl-csv) - A library for parsing CSV files. [3-clause BSD][15].
* [cl-decimals ![GitHub Repo Stars](https://img.shields.io/github/stars/tlikonen/cl-decimals) ![GitHub last commit](https://img.shields.io/github/last-commit/tlikonen/cl-decimals)](https://github.com/tlikonen/cl-decimals) - Decimal number parser and formatter. Public domain.
* [auto-text ![GitHub Repo Stars](https://img.shields.io/github/stars/defunkydrummer/auto-text) ![GitHub last commit](https://img.shields.io/github/last-commit/defunkydrummer/auto-text)](https://github.com/defunkydrummer/auto-text) - automatic (encoding, end of line, column width, csv delimiter etc) detection for text files. [MIT][200]. See also [inquisitor ![GitHub Repo Stars](https://img.shields.io/github/stars/t-sin/inquisitor) ![GitHub last commit](https://img.shields.io/github/last-commit/t-sin/inquisitor)](https://github.com/t-sin/inquisitor) for detection of asian and far eastern languages.
* [csv-validator ![GitHub Repo Stars](https://img.shields.io/github/stars/KoenvdBerg/csv-validator) ![GitHub last commit](https://img.shields.io/github/last-commit/KoenvdBerg/csv-validator)](https://github.com/KoenvdBerg/csv-validator) - Validates tabular CSV data using predefined validations, inspired from its Python homologue "Great Expectations". [BSD_3Clause][15].


Date and time
-------------

* ⭐ [local-time](https://common-lisp.net/project/local-time/) - A development library for manipulating date and time information in a semi-standard manner. [3-clause BSD][15].
* [fuzzy-dates ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/fuzzy-dates) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/fuzzy-dates)](https://github.com/Shinmera/fuzzy-dates) -  A library to fuzzily parse date and time strings. Zlib.
* [cl-date-time-parser ![GitHub Repo Stars](https://img.shields.io/github/stars/tkych/cl-date-time-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/tkych/cl-date-time-parser)](https://github.com/tkych/cl-date-time-parser) - Parse date-time-string, liberally. Hides the difference between date-time formats, and enables to manage date and time as the one date-time format. [MIT][200].
* [chronicity ![GitHub Repo Stars](https://img.shields.io/github/stars/chaitanyagupta/chronicity) ![GitHub last commit](https://img.shields.io/github/last-commit/chaitanyagupta/chronicity)](https://github.com/chaitanyagupta/chronicity) - A natural language date and time parse, to parse strings like "3 days from now". [BSD_3Clause][15].
* [local-time-duration ![GitHub Repo Stars](https://img.shields.io/github/stars/enaeher/local-time-duration) ![GitHub last commit](https://img.shields.io/github/last-commit/enaeher/local-time-duration)](https://github.com/enaeher/local-time-duration) -
Duration processing library built on top of local-time. [MIT][200].
  * see this fork: [humanize-duration ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/humanize-duration) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/humanize-duration)](https://github.com/40ants/humanize-duration), that outputs only significant parts of a duration object. Has localization suport.
* [iso-8601-date](https://gitlab.com/DataLinkDroid/iso-8601-date) - Miscellaneous date routines in Common Lisp, based around the ISO 8601 string representation. [LLGPL][8].
* [calendar-times ![GitHub Repo Stars](https://img.shields.io/github/stars/copyleft/calendar-times) ![GitHub last commit](https://img.shields.io/github/last-commit/copyleft/calendar-times)](https://github.com/copyleft/calendar-times) - a calendar time library implemented on top of the LOCAL-TIME library. It features zoned calendar times and calculations.
  * see also: [calendar-date ![GitHub Repo Stars](https://img.shields.io/github/stars/takagi/calendar-date) ![GitHub last commit](https://img.shields.io/github/last-commit/takagi/calendar-date)](https://github.com/takagi/calendar-date) - a Gregorian calendar date library. [MIT][200].
* [periods ![GitHub Repo Stars](https://img.shields.io/github/stars/jwiegley/periods) ![GitHub last commit](https://img.shields.io/github/last-commit/jwiegley/periods)](https://github.com/jwiegley/periods) - manipulating date/time objects at a higher level. With series-compatible data structure. [BSD_3Clause][15].
  * with [some documentation](https://lisp-maintainers.github.io/periods/)
* [stopclock ![GitHub Repo Stars](https://img.shields.io/github/stars/Gleefre/stopclock) ![GitHub last commit](https://img.shields.io/github/last-commit/Gleefre/stopclock)](https://github.com/Gleefre/stopclock) - a library for measuring time using (stop)clocks. It allows you to create a clock, pause it, resume it and change its speed. [Apache2.0][89].

See also the book [Calendrical calculations](https://www.cambridge.org/us/academic/subjects/computer-science/computing-general-interest/calendrical-calculations-ultimate-edition-4th-edition?format=HB#resources), by Edward M. Reingold, Nachum Dershowitz, Cambridge Press. It provides Lisp sources.

Data validation
---------------

* [ratify ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/ratify) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/ratify)](https://github.com/Shinmera/ratify) - A collection of utilities to ratify, validate and parse inputs. [zlib][33].
* [clavier ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/clavier) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/clavier)](https://github.com/mmontone/clavier) - General purpose validation library for Common Lisp. [MIT][200].
* [json-schema ![GitHub Repo Stars](https://img.shields.io/github/stars/fisxoj/json-schema) ![GitHub last commit](https://img.shields.io/github/last-commit/fisxoj/json-schema)](https://github.com/fisxoj/json-schema) - A library for validating data against schemas of drafts 4, 6, 7, and 2019-09 of the [JSON Schema](https://json-schema.org/) standard. [LLGPL][8].
* [sanity-clause ![GitHub Repo Stars](https://img.shields.io/github/stars/fisxoj/sanity-clause) ![GitHub last commit](https://img.shields.io/github/last-commit/fisxoj/sanity-clause)](https://github.com/fisxoj/sanity-clause) - a data serialization/contract library for Common Lisp. Schemas can be property lists or class-based, allowing to check slots' types during `make-instance`. [LLGPL][8].
* [cl-semver ![GitHub Repo Stars](https://img.shields.io/github/stars/cldm/cl-semver) ![GitHub last commit](https://img.shields.io/github/last-commit/cldm/cl-semver)](https://github.com/cldm/cl-semver) - Implementation of the [Semantic Versioning](https://semver.org) Specification. [MIT][200]

Developer utilities
-------------------

Common Lisp implementations have plenty of debugging tools. See: [Cookbook / debugging](https://lispcookbook.github.io/cl-cookbook/debugging.html). Those are additional utilities.


* [repl-utilities ![GitHub Repo Stars](https://img.shields.io/github/stars/m-n/repl-utilities) ![GitHub last commit](https://img.shields.io/github/last-commit/m-n/repl-utilities)](https://github.com/m-n/repl-utilities) - Ease
common tasks at the REPL (print documentation, print external symbols,
call hooks when loading a package,…). [BSD_2Clause][17].
* [flight-recorder ![GitHub Repo Stars](https://img.shields.io/github/stars/vseloved/flight-recorder) ![GitHub last commit](https://img.shields.io/github/last-commit/vseloved/flight-recorder)](https://github.com/vseloved/flight-recorder) - a robust REPL history facility.
* [tracer ![GitHub Repo Stars](https://img.shields.io/github/stars/TeMPOraL/tracer) ![GitHub last commit](https://img.shields.io/github/last-commit/TeMPOraL/tracer)](https://github.com/TeMPOraL/tracer) - tracing profiler for Common Lisp, with output suitable for display in Chrome’s/Chromium’s Tracing Viewer. [MIT][200].
* [cl-flamegraph ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/cl-flamegraph) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/cl-flamegraph)](https://github.com/40ants/cl-flamegraph) - A wrapper around SBCL's statistical profiler, to generate FlameGraph charts for Common Lisp programs. [BSD][15].
* [supertrace ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/supertrace) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/supertrace)](https://github.com/fukamachi/supertrace) - Superior Common Lisp `trace` functionality for debugging/profiling. Trace many functions at once, use before and after hooks. [BSD_2Clause][17].
* [printv ![GitHub Repo Stars](https://img.shields.io/github/stars/danlentz/printv) ![GitHub last commit](https://img.shields.io/github/last-commit/danlentz/printv)](https://github.com/danlentz/printv) -  A batteries-included tracing and debug-logging macro. [Apache2][89].
* [journal ![GitHub Repo Stars](https://img.shields.io/github/stars/melisgl/journal) ![GitHub last commit](https://img.shields.io/github/last-commit/melisgl/journal)](https://github.com/melisgl/journal) - a library for logging, tracing, record-and-replay testing and persistence. MIT.
* [brake ![GitHub Repo Stars](https://img.shields.io/github/stars/varjagg/brake) ![GitHub last commit](https://img.shields.io/github/last-commit/varjagg/brake)](https://github.com/varjagg/brake) -  An extended breakpoint facility for Common Lisp. [MIT][200].

and also:

* [GTFL](http://www.martin-loetzsch.de/gtfl/) - A graphical terminal for Lisp, meant for Lisp programmers who want to debug or visualize their own algorithms. A graphical trace in the browser. BSD-style.
* [trivial-benchmark ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/trivial-benchmark) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/trivial-benchmark)](https://github.com/Shinmera/trivial-benchmark) - Tiny benchmarking library. [zlib][33].
  * a similar macro (`benchmark`) is part of [trivial-time ![GitHub Repo Stars](https://img.shields.io/github/stars/aartaka/trivial-time) ![GitHub last commit](https://img.shields.io/github/last-commit/aartaka/trivial-time)](https://github.com/aartaka/trivial-time), providing support for more implementations (ABCL, Allegro, CCL, CLISP, ECL).
  * Indeed, most trivial-benchmark's metrics are only implemented on SBCL. On other implementations, it measures real and user-space time (and not bytes allocated (it does for ECL), system run-time or GC run-time).
* [glyphs ![GitHub Repo Stars](https://img.shields.io/github/stars/ahungry/glyphs) ![GitHub last commit](https://img.shields.io/github/last-commit/ahungry/glyphs)](https://github.com/ahungry/glyphs/) - A library for cutting down the verboseness of Common Lisp in places. [GNU GPL3][2].
* [Lisp REPL core dumper](https://gitlab.com/ambrevar/lisp-repl-core-dumper/) -
A portable wrapper to generate Lisp cores on demand to start REPL blazing fast.
It can preload provided systems to help build a collection of specialized
Lisp cores.


Documentation builders
----------------------

* [Staple ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/staple) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/staple)](https://github.com/Shinmera/staple) - a tool to generate documentation pages using an HTML template. Uses the existing README, adds docstrings, crossreferences and links to the CLHS. [zlib][33].
* [mgl-pax ![GitHub Repo Stars](https://img.shields.io/github/stars/melisgl/mgl-pax) ![GitHub last commit](https://img.shields.io/github/last-commit/melisgl/mgl-pax)](https://github.com/melisgl/mgl-pax) - Exploratory
programming environment and documentation generator. one may
accomplish similar effects as with Literate Programming, but
documentation is generated from code, not vice versa. Code is first,
code must look pretty, documentation is code. [MIT][200].
  - see this [40ants/doc ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/doc) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/doc)](https://github.com/40ants/doc) fork: a lighter core system, a JavaScript search index, multiple format output, HTML themes, RSS and Atom feed for the Changelog and more.
* [sphinxcontrib-cldomain](https://sphinxcontrib-cldomain.russellsim.org/) -
  Extending Sphinx to cover Common Lisp. To build documentation with
  the same ease as sphinx would a Python project. [GPL3][2]
  - crossreferences, links to the CLHS, symbol index, search, and all Sphinx features.
* [Codex ![GitHub Repo Stars](https://img.shields.io/github/stars/CommonDoc/codex) ![GitHub last commit](https://img.shields.io/github/last-commit/CommonDoc/codex)](https://github.com/CommonDoc/codex) - A beautiful documentation system for Common Lisp. [MIT][200].
* [QBook ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/qbook) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/qbook)](https://github.com/mmontone/qbook) - generates HTML (or LaTeX) formatted code listings of Common Lisp source files. [BSD_3Clause][15].
  - all comments started with 4 `;` (";;;;") are interpreted as documentation. Enhance the documentation with headings and directives.
  - QBook acts as "a lightweight literate programming system, where Lisp code is not rendered inline, but in separate sections, and that makes the document more pleasant to navigate." @mmontone
* [Declt ![GitHub Repo Stars](https://img.shields.io/github/stars/didierverna/declt) ![GitHub last commit](https://img.shields.io/github/last-commit/didierverna/declt)](https://github.com/didierverna/declt) - Reference manual generator for Common Lisp libraries. Builds a texinfo document that can be further processed into various formats, such as HTML or PDF. BSD.
* [cl-bibtex ![GitHub Repo Stars](https://img.shields.io/github/stars/mkoeppe/cl-bibtex) ![GitHub last commit](https://img.shields.io/github/last-commit/mkoeppe/cl-bibtex)](https://github.com/mkoeppe/cl-bibtex) - A compatible re-implementation of the BibTeX program in Common Lisp, with a BST-to-CL compiler. [GNU LGPL2.1][11].

See also:

* [docbrowser ![GitHub Repo Stars](https://img.shields.io/github/stars/lokedhs/docbrowser) ![GitHub last commit](https://img.shields.io/github/last-commit/lokedhs/docbrowser)](https://github.com/lokedhs/docbrowser) - a server that generates documentation for the loaded systems on the fly.
  - Its main page presents a list of all loaded systems in your Lisp image. Click on one system, and you get a page with three panes: functions, classes and variables. Click on a function to see its source, in context, with line numbers. Click on classes to see their slots and specializing functions.
* [cl-livedocs ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/cl-livedocs) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/cl-livedocs)](https://github.com/mmontone/cl-livedocs) - similar and newer, based on Webinfo, with full text search enabled by default.

An overview blog post with even more documentation generators: https://lisp-journey.gitlab.io/blog/overview-of-documentation-generators/ and a dedicated site with reviews and demos: https://cl-doc-systems.github.io/

You might also like: [literate programming systems](#literate-programming).


Files and directories
---------------------

* ⭐ [uiop](https://common-lisp.net/project/asdf/uiop.html) and its `pathname` package
  (replaces [cl-fad](http://weitz.de/cl-fad/)). uiop is part of ASDF3
  and as thus is shipped in many implementations. [MIT][200].
* [osicat](https://common-lisp.net/project/osicat/) - A lightweight operating system interface on POSIX-like systems (directory iteration and deletion, environment variables, file permissions, etc) [Expat][14].
* [pathname-utils ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/pathname-utils) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/pathname-utils)](https://github.com/Shinmera/pathname-utils) - A collection of utilities to help with pathname operations. [zlib][33].
  * [filesystem-utils ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/filesystem-utils) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/filesystem-utils)](https://github.com/Shinmera/filesystem-utils) - deal with common problems with filesystems, such as listing files, probing file types, determining default directories, etc.
  * no dependencies, doesn't access the filesystem.
  * [file-attributes ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/file-attributes) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/file-attributes)](https://github.com/Shinmera/file-attributes) -  access to common file attributes (uid, gid, permissions, ctime, mtime, atime).
* [filepaths ![GitHub Repo Stars](https://img.shields.io/github/stars/fosskers/filepaths) ![GitHub last commit](https://img.shields.io/github/last-commit/fosskers/filepaths)](https://github.com/fosskers/filepaths) -  Modern and consistent filepath manipulation for Common Lisp. [LGPL3][9].
  * no dependencies, doesn't access the filesystem.
* [ppath](https://codeberg.org/fourier/ppath) - Common Lisp's implementation of the Python's os.path module. [BSD][15].
* [mmap ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/mmap) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/mmap)](https://github.com/Shinmera/mmap) - Portable mmap file memory mapping utility library. [zlib][33].
* [fof](https://gitlab.com/ambrevar/fof) - File-object finder Common Lisp library. Enable rapid file search, inspection and manipulation. [GPL3][2].
* [nfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/atlas-engineer/nfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/atlas-engineer/nfiles)](https://github.com/atlas-engineer/nfiles) - File persistence, watching, data synchronization, (per user profile) path resolution, and structured data retrieval. Has pre-defined classes for configuration files, remote fetched files, data files, Lisp-readable files and many others. [BSD][15].

File watching libraries:

* [file-notify ![GitHub Repo Stars](https://img.shields.io/github/stars/shinmera/file-notify) ![GitHub last commit](https://img.shields.io/github/last-commit/shinmera/file-notify)](https://github.com/shinmera/file-notify) - a cross-platform library for file change detection. [zlib][33].

Git
---

* [cl-git](https://cl-git.russellsim.org/) - a CFFI interface to the libgit2 library. [LGPL3][9].
* [legit](https://shinmera.github.io/legit/) - an interface to the Git binary. [zlib][33].
* [git-api ![GitHub Repo Stars](https://img.shields.io/github/stars/fourier/git-api) ![GitHub last commit](https://img.shields.io/github/last-commit/fourier/git-api)](https://github.com/fourier/git-api) - Common Lisp library to access a git repository. It doesn't need git or libgit installed. [BSD][15].

See also the [Lem editor's Git interface](https://lem-project.github.io/usage/usage/#version-control-with-lemlegit-git-experimental)!

i18n
----

* [cl-i18n](https://notabug.org/cage/cl-i18n) - an i18n library. Load translations from GNU gettext text or binary files or from its native format. Localisation helpers of plural forms. [LLGPL][8].
* [gettext ![GitHub Repo Stars](https://img.shields.io/github/stars/rotatef/gettext) ![GitHub last commit](https://img.shields.io/github/last-commit/rotatef/gettext)](https://github.com/rotatef/gettext) -  a port of the gettext runtime to Common Lisp. [GPL3][2].
* [translate ![GitHub Repo Stars](https://img.shields.io/github/stars/dkochmanski/translate) ![GitHub last commit](https://img.shields.io/github/last-commit/dkochmanski/translate)](https://github.com/dkochmanski/translate) - seamless language localization. LLGPL.
* [enchant ![GitHub Repo Stars](https://img.shields.io/github/stars/tlikonen/cl-enchant) ![GitHub last commit](https://img.shields.io/github/last-commit/tlikonen/cl-enchant)](https://github.com/tlikonen/cl-enchant) - bindings for the Enchant spell-checker library. Public domain.
* [oxenfurt ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/oxenfurt) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/oxenfurt)](https://github.com/Shinmera/oxenfurt) - A  client library for the Oxford dictionary API. [zlib][33].
* [language-codes](https://shinmera.github.io/language-codes) - A database library for ISO language codes. [zlib][33]
* [system-locale](https://shinmera.github.io/system-locale) - A library to retrieve the user's preferred language, so that your application may choose a sensible default. [zlib][33].
* [multilang-documentation](https://shinmera.github.io/multilang-documentation) - Allows writing docstrings in multiple languages, for truly internationally documented libraries. [zlib][33].

Linting, code formatting
------------------------

* [sblint ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/sblint) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/sblint)](https://github.com/fukamachi/sblint) - a linter for Common Lisp source code using SBCL, suited for Reviewdog ([slides](http://www.slideshare.net/fukamachi/sblint)). [BSD_2Clause][17].
* [trivial-formatter ![GitHub Repo Stars](https://img.shields.io/github/stars/hyotang666/trivial-formatter) ![GitHub last commit](https://img.shields.io/github/last-commit/hyotang666/trivial-formatter)](https://github.com/hyotang666/trivial-formatter) - code formatter for Common Lisp. [MIT][200].

and also: [lisp-format ![GitHub Repo Stars](https://img.shields.io/github/stars/eschulte/lisp-format) ![GitHub last commit](https://img.shields.io/github/last-commit/eschulte/lisp-format)](https://github.com/eschulte/lisp-format) and [cl-indentify ![GitHub Repo Stars](https://img.shields.io/github/stars/yitzchak/cl-indentify) ![GitHub last commit](https://img.shields.io/github/last-commit/yitzchak/cl-indentify)](https://github.com/yitzchak/cl-indentify).

Literate programming
--------------------

* [literate-lisp ![GitHub Repo Stars](https://img.shields.io/github/stars/jingtaozf/literate-lisp) ![GitHub last commit](https://img.shields.io/github/last-commit/jingtaozf/literate-lisp)](https://github.com/jingtaozf/literate-lisp) -  Load Common Lisp code blocks from Emacs' Org files. [MIT][200].
* [erudite ![GitHub Repo Stars](https://img.shields.io/github/stars/mmontone/erudite) ![GitHub last commit](https://img.shields.io/github/last-commit/mmontone/erudite)](https://github.com/mmontone/erudite) - Literate Programming System built with interactive development in mind. [MIT][200].
* [papyrus ![GitHub Repo Stars](https://img.shields.io/github/stars/tani/papyrus) ![GitHub last commit](https://img.shields.io/github/last-commit/tani/papyrus)](https://github.com/tani/papyrus) - Papyrus makes your markdown executable with the reader macro of Common Lisp.[MIT][200]


Logging
-------

* ⭐ [log4cl ![GitHub Repo Stars](https://img.shields.io/github/stars/sharplispers/log4cl) ![GitHub last commit](https://img.shields.io/github/last-commit/sharplispers/log4cl)](https://github.com/sharplispers/log4cl/) - Logging framework modelled after Log4J. [Apache2.0][89]. Advanced integration with Slime.
  * [log4cl-json ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/log4cl-json) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/log4cl-json)](https://github.com/40ants/log4cl-json) - JSON appender extension. [BSD][15].
* [verbose](https://shinmera.github.io/verbose) - A fast and highly configurable logging framework. [zlib][33].
* [a-cl-logger ![GitHub Repo Stars](https://img.shields.io/github/stars/AccelerationNet/a-cl-logger) ![GitHub last commit](https://img.shields.io/github/last-commit/AccelerationNet/a-cl-logger)](https://github.com/AccelerationNet/a-cl-logger) - Logging library providing context sensitive logging of more than just strings to more than just local files or output streams. Features logstash support, json support, logger hierarchies, context sensitive logging, objects printed as an inspectable presentation,…

To third parties:

* [cl-fluent-logger ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/cl-fluent-logger) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/cl-fluent-logger)](https://github.com/fukamachi/cl-fluent-logger) - A Common Lisp structured logger for [Fluentd](https://www.fluentd.org/).

See also: [extensive comparison of logging libraries](https://sabracrolleton.github.io/logging-comparison).

Macro helpers
-------------

* [easy-macros ![GitHub Repo Stars](https://img.shields.io/github/stars/tdrhq/easy-macros) ![GitHub last commit](https://img.shields.io/github/last-commit/tdrhq/easy-macros)](https://github.com/tdrhq/easy-macros/) -  an easy way to write 90% of your macros. [Apache2.0][89].
* [trivial-with-current-source-from ![GitHub Repo Stars](https://img.shields.io/github/stars/scymtym/trivial-with-current-source-form) ![GitHub last commit](https://img.shields.io/github/last-commit/scymtym/trivial-with-current-source-form)](https://github.com/scymtym/trivial-with-current-source-form/) - Helps macro writers produce better errors for macro users. [GPL3][2].

Markdown
--------

* [3bmd ![GitHub Repo Stars](https://img.shields.io/github/stars/3b/3bmd) ![GitHub last commit](https://img.shields.io/github/last-commit/3b/3bmd)](https://github.com/3b/3bmd) - a markdown -> html converter. [MIT][200].

PDF
---

* [cl-typesetting ![GitHub Repo Stars](https://img.shields.io/github/stars/mbattyani/cl-typesetting) ![GitHub last commit](https://img.shields.io/github/last-commit/mbattyani/cl-typesetting)](https://github.com/mbattyani/cl-typesetting) and [cl-pdf ![GitHub Repo Stars](https://img.shields.io/github/stars/mbattyani/cl-pdf) ![GitHub last commit](https://img.shields.io/github/last-commit/mbattyani/cl-pdf)](https://github.com/mbattyani/cl-pdf) - cross-platform Common Lisp libraries for generating PDF files. [FreeBSD][39].
* [cl-pslib](https://notabug.org/cage/cl-pslib) - a (thin) wrapper around the [pslib](http://pslib.sourceforge.net/) library for generating PostScript files. Also [cl-pslib-barcode](https://notabug.org/cage/cl-pslib-barcode). [LLGPL][8].

Plotting
--------

* [vgplot ![GitHub Repo Stars](https://img.shields.io/github/stars/volkers/vgplot) ![GitHub last commit](https://img.shields.io/github/last-commit/volkers/vgplot)](https://github.com/volkers/vgplot) - an interface to the
  gnuplot plotting utility with the intention to resemble some of
  the plot commands of octave or matlab. [GPL3][2].
* [eazy-gnuplot ![GitHub Repo Stars](https://img.shields.io/github/stars/guicho271828/eazy-gnuplot) ![GitHub last commit](https://img.shields.io/github/last-commit/guicho271828/eazy-gnuplot)](https://github.com/guicho271828/eazy-gnuplot) - a
  lispy, structure-less Gnuplot library. With its
  [cookbook](http://guicho271828.github.io/eazy-gnuplot/). [LLGPL][8]
* [kai ![GitHub Repo Stars](https://img.shields.io/github/stars/komi1230/kai) ![GitHub last commit](https://img.shields.io/github/last-commit/komi1230/kai)](https://github.com/komi1230/kai) - A high-level plotter library for Common Lisp. A wrapper around the [Plotly](https://plotly.com/javascript/) JS library. [MIT][200].
* [ADW-Charting](https://common-lisp.net/project/adw-charting/) - A simple chart drawing library written completely in Common Lisp. Also includes a backend to Google's chart service. BSD-like.

Plotting with text:

* [cl-text-plot ![GitHub Repo Stars](https://img.shields.io/github/stars/moneylobster/cl-text-plot) ![GitHub last commit](https://img.shields.io/github/last-commit/moneylobster/cl-text-plot)](https://github.com/moneylobster/cl-text-plot/) -  Plot with text in Common Lisp. No licence specified.
* [cl-spark ![GitHub Repo Stars](https://img.shields.io/github/stars/tkych/cl-spark) ![GitHub last commit](https://img.shields.io/github/last-commit/tkych/cl-spark)](https://github.com/tkych/cl-spark) - sparkline strings for the console: `(spark '(1 1 2 3 5 8))` => "▁▁▂▃▅▇". [MIT][200].

See also the chart facilities of IUP and ltk-plotchart (GUI section).

Project skeletons
-----------------

* [cl-project ![GitHub Repo Stars](https://img.shields.io/github/stars/fukamachi/cl-project) ![GitHub last commit](https://img.shields.io/github/last-commit/fukamachi/cl-project)](https://github.com/fukamachi/cl-project) - General modern project skeletons. [LLGPL][8].
* [cl-project-with-docs ![GitHub Repo Stars](https://img.shields.io/github/stars/40ants/cl-project-with-docs) ![GitHub last commit](https://img.shields.io/github/last-commit/40ants/cl-project-with-docs)](https://github.com/40ants/cl-project-with-docs) - uses Sphinx and reStructured text to render nice and readable HTML documentation. [BSD][15].
* [cl-cookieproject ![GitHub Repo Stars](https://img.shields.io/github/stars/vindarel/cl-cookieproject) ![GitHub last commit](https://img.shields.io/github/last-commit/vindarel/cl-cookieproject)](https://github.com/vindarel/cl-cookieproject) -  Generate a ready-to-use Common Lisp project. Not in Quicklisp. [BSD_3Clause][15].
  * test definitions, entry point to run from sources, build a binary, Roswell integration…

Security
--------

* [cl-isolated ![GitHub Repo Stars](https://img.shields.io/github/stars/kanru/cl-isolated) ![GitHub last commit](https://img.shields.io/github/last-commit/kanru/cl-isolated)](https://github.com/kanru/cl-isolated) - A restricted environment for Common Lisp code evaluation [AGPL-3.0][agpl3].
* [secret-values ![GitHub Repo Stars](https://img.shields.io/github/stars/rotatef/secret-values) ![GitHub last commit](https://img.shields.io/github/last-commit/rotatef/secret-values)](https://github.com/rotatef/secret-values) -  A Common Lisp library to reduce the risk of accidentally revealing secret values such as passwords.
  * [privacy-output-stream ![GitHub Repo Stars](https://img.shields.io/github/stars/atgreen/privacy-output-stream) ![GitHub last commit](https://img.shields.io/github/last-commit/atgreen/privacy-output-stream)](https://github.com/atgreen/privacy-output-stream) - an output stream that masks secret strings with `****`, based on secret-values. MIT.

System interface
--------------------

* [machine-state ![GitHub Repo Stars](https://img.shields.io/github/stars/Shinmera/machine-state) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinmera/machine-state)](https://github.com/Shinmera/machine-state/) -  Retrieve machine state information about CPU time, memory usage, thread processing time, etc.

XML
---

* [CXML](https://common-lisp.net/project/cxml/) - XML parser and serializer, with a range of extension libraries. [LLGPL][8].
  - 👍 has an incremental parser, allowing to parse big files.
  - see the [FXML ![GitHub Repo Stars](https://img.shields.io/github/stars/ruricolist/FXML) ![GitHub last commit](https://img.shields.io/github/last-commit/ruricolist/FXML)](https://github.com/ruricolist/FXML) fork, with fixes and new features. You should use it if your are parsing potentially ill-formed or malicious XML, or if you need to use Klacks with namespaces.
* [Plump][71] - A lenient XML parser. [zlib][33].
* [xpath ![GitHub Repo Stars](https://img.shields.io/github/stars/sharplispers/xpath) ![GitHub last commit](https://img.shields.io/github/last-commit/sharplispers/xpath)](https://github.com/sharplispers/xpath) ([homepage](https://common-lisp.net/project/plexippus-xpath/atdoc/index.html) - Implementation of the XML Path Language (XPath) Version 1.0. [BSD_2Clause][17].
* [s-xml](http://cliki.net/S-XML) - A basic parser. [LLGPL][8].
* [xmls ![GitHub Repo Stars](https://img.shields.io/github/stars/rpgoldman/xmls) ![GitHub last commit](https://img.shields.io/github/last-commit/rpgoldman/xmls)](https://github.com/rpgoldman/xmls) - A small, simple, non-validating XML parser. [3-clause BSD][15].
* [cl-feedparser ![GitHub Repo Stars](https://img.shields.io/github/stars/TBRSS/cl-feedparser) ![GitHub last commit](https://img.shields.io/github/last-commit/TBRSS/cl-feedparser)](https://github.com/TBRSS/cl-feedparser) - A Common Lisp (RSS, Atom) feed parser. [LLGPL][8]
* [Buildnode ![GitHub Repo Stars](https://img.shields.io/github/stars/AccelerationNet/buildnode) ![GitHub last commit](https://img.shields.io/github/last-commit/AccelerationNet/buildnode)](https://github.com/AccelerationNet/buildnode) - A common lisp library to ease interaction with CXML-dom, such as building Excel spreadsheets. [BSD][15].

To read Excel files:

* [lisp-xl ![GitHub Repo Stars](https://img.shields.io/github/stars/defunkydrummer/lisp-xl) ![GitHub last commit](https://img.shields.io/github/last-commit/defunkydrummer/lisp-xl)](https://github.com/defunkydrummer/lisp-xl) -  Common Lisp Microsoft XLSX (Microsoft Excel) loader for arbitrarily-sized / big-size files. MIT.
* [xlsx](https://gitlab.common-lisp.net/cungil/xlsx) - a basic reader for Excel files.


Other
-----

This contains anything which doesn't fit into another category.

* [babel ![GitHub Repo Stars](https://img.shields.io/github/stars/cl-babel/babel) ![GitHub last commit](https://img.shields.io/github/last-commit/cl-babel/babel)](https://github.com/cl-babel/babel) - A charset encoding/decoding library. [Expat][14].
* [corona ![GitHub Repo Stars](https://img.shields.io/github/stars/eudoxia0/corona) ![GitHub last commit](https://img.shields.io/github/last-commit/eudoxia0/corona)](https://github.com/eudoxia0/corona) -  Create and manage virtual machines from Common Lisp http://eudoxia.me/corona [MIT][200].
* [fast-io ![GitHub Repo Stars](https://img.shields.io/github/stars/rpav/fast-io) ![GitHub last commit](https://img.shields.io/github/last-commit/rpav/fast-io)](https://github.com/rpav/fast-io) - Fast octet-vector/stream I/O. [3-clause BSD][15].
* [named-readtables ![GitHub Repo Stars](https://img.shields.io/github/stars/melisgl/named-readtables) ![GitHub last commit](https://img.shields.io/github/last-commit/melisgl/named-readtables)](https://github.com/melisgl/named-readtables) - Provides a readtable namespace, akin to package namespaces. [3-clause BSD][15].
* [simple-currency ![GitHub Repo Stars](https://img.shields.io/github/stars/a0-prw/simple-currency) ![GitHub last commit](https://img.shields.io/github/last-commit/a0-prw/simple-currency)](https://github.com/a0-prw/simple-currency) - A currency conversion library using daily information published by the ECB. [FreeBSD][39].
* [trivial-garbage ![GitHub Repo Stars](https://img.shields.io/github/stars/trivial-garbage/trivial-garbage) ![GitHub last commit](https://img.shields.io/github/last-commit/trivial-garbage/trivial-garbage)](https://github.com/trivial-garbage/trivial-garbage) - A portable finalizer, weak hash-table and weak pointer API. Public domain.
* [trivial-utf8](https://common-lisp.net/project/trivial-utf-8/) - A small library for doing UTF-8-based I/O. BSD.


Contributing
============
Your contributions are always welcome! Please submit a pull request or create
an issue to add a new framework, library or software to the list.

The rules we (try to) respect are the followings:

- by default, add a library to the end of its section.
- absolute de-facto libraries, like BordeauxThreads or Quicklisp,
  should be denoted with a ⭐ (Unicode code U+2B50).
- two libraries very similar in scope should be side by side, or in a
  section of their own.
- do some curation based on your experience and the state of the
  library's documentation. We do *not* aim at listing every existing
  CL library (see Cliki for that) nor to list every
  "popular" library (see Quicklisp stats).
- as such, the libraries we like best are marked with a 👍 (`1F44D`
  unicode character). See also the signs' explanation in the
  introduction.


[2]: http://www.gnu.org/copyleft/gpl.html
[3]: http://www.gnu.org/software/classpath/license.html
[4]: https://common-lisp.net/project/armedbear/faq.shtml#qa
[5]: http://unlicense.org/
[6]: http://www.gnu.org/software/clisp/impnotes.html
[8]: http://opensource.franz.com/preamble.html
[9]: https://www.gnu.org/licenses/lgpl-3.0.en.html
[11]: http://www.gnu.org/licenses/old-licenses/lgpl-2.1.html
[13]: http://www.sbcl.org/manual/index.html#ANSI-Conformance
[14]: https://directory.fsf.org/wiki/License:Expat
[15]: https://directory.fsf.org/wiki/License:BSD_3Clause
[16]: https://www.quicklisp.org/beta/
[17]: https://directory.fsf.org/wiki/License:BSD_2Clause
[20]: http://www.cs.northwestern.edu/academics/courses/325/readings/graham/graham-notes.html
[21]: http://www.goodreads.com/book/show/1175730.Object_Oriented_Programming_in_Common_LISP
[22]: https://en.wikipedia.org/wiki/ISC_license
[33]: https://directory.fsf.org/wiki/License:Zlib
[39]: https://directory.fsf.org/wiki?title=License:FreeBSD
[47]: https://directory.fsf.org/wiki/License:CPLv1.0
[51]: https://directory.fsf.org/wiki/License:ArtisticLicense2.0
[54]: https://directory.fsf.org/wiki/License:Boost1.0
[59]: https://directory.fsf.org/wiki/License:EPLv1.0
[71]: https://github.com/Shinmera/plump
[72]: https://github.com/Shinmera/lquery
[89]: https://directory.fsf.org/wiki/License:Apache2.0
[156]: http://letoverlambda.com/
[157]: http://norvig.com/paip.html
[176]: https://github.com/gwkkwg/lift/blob/master/COPYING
[188]: https://github.com/triclops200/quickapp
[200]: https://opensource.org/licenses/MIT
[201]: https://github.com/google/lisp-koans
[205]: https://www.postgresql.org/about/licence/
[206]: http://www.gigamonkeys.com/book/
[207]: https://opensource.org/licenses/bsd-license.php
[208]: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
[209]: http://www.eclipse.org/legal/epl-v10.html
[210]: https://common-lisp.net/project/linedit/license.html
[agpl3]: https://directory.fsf.org/wiki/License:AGPL-3.0
