# Awesome Lua [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> A curated list of quality Lua [packages](#packages) and [resources](#resources).

Inspired by the lists [awesome ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome)](https://github.com/sindresorhus/awesome), [awesome-awesomeness ![GitHub Repo Stars](https://img.shields.io/github/stars/bayandin/awesome-awesomeness) ![GitHub last commit](https://img.shields.io/github/last-commit/bayandin/awesome-awesomeness)](https://github.com/bayandin/awesome-awesomeness), and [awesome-nodejs ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/awesome-nodejs) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome-nodejs)](https://github.com/sindresorhus/awesome-nodejs).


## Packages
- [Implementations, Interpreters, and Bindings](#implementations-interpreters-and-bindings)
- [Package Managers](#package-managers)
- [Build Tools and Standalone Makers](#build-tools-and-standalone-makers)
- [Debugging and Profiling](#debugging-and-profiling)
- [IDEs and Plugins](#ides-and-plugins)
- [Utility Belts](#utility-belts)
- [Game Engines](#game-engines)
- [Game Development](#game-development)
- [Logging](#logging)
- [Web/Networking Platforms](#webnetworking-platforms)
- [OpenResty](#openresty)
- [Command-line Utilities](#command-line-utilities)
- [Concurrency and Multithreading](#concurrency-and-multithreading)
- [Templating](#templating)
- [Documentation](#documentation)
- [Object-oriented Programming](#object-oriented-programming)
- [File system and OS](#file-system-and-os)
- [Time and Date](#time-and-date)
- [Image Manipulation](#image-manipulation)
- [Digital Signal Processing](#digital-signal-processing)
- [Hardware and Embedded Systems](###hardware-and-embedded-systems)
- [Math and Scientific Computing](#math-and-scientific-computing)
- [Parsing and Serialization](#parsing-and-serialization)
- [Humanize](#humanize)
- [Compression](#compression)
- [Cryptography](#cryptography)
- [Network](#network)
- [Data Stores](#data-stores)
- [Message Brokers](#message-brokers)
- [Testing](#testing)
- [Foreign Function Interfaces](#foreign-function-interfaces)
- [Analysis Tools and ASTs](#analysis-tools-and-asts)
- [Experimental, etc](#experimental-etc)
- [Scriptable by Lua](#scriptable-by-lua)
- [Miscellaneous](#miscellaneous)


## Resources
- [Community](#community)
- [References](#references)
- [Style Guides](#style-guides)
- [Tutorials](#tutorials)
- [Articles](#articles)
- [Talks & Slides](#talks--slides)
- [Books](#books)
- [Other Lists](#other-lists)


### Implementations, Interpreters, and Bindings
- [Lua](http://www.lua.org/download.html) - Lua's original ANSI C interpreter.
  - [Lua Repo ![GitHub Repo Stars](https://img.shields.io/github/stars/lua/lua) ![GitHub last commit](https://img.shields.io/github/last-commit/lua/lua)](https://github.com/lua/lua) - The official Lua repo, as seen by the Lua team, mirrored to GitHub.
- [LuaJIT](http://luajit.org/luajit.html) - High-performance Just-In-Time compiler for Lua.
- [LLVM-Lua ![GitHub Repo Stars](https://img.shields.io/github/stars/neopallium/llvm-lua) ![GitHub last commit](https://img.shields.io/github/last-commit/neopallium/llvm-lua)](https://github.com/neopallium/llvm-lua) - Compiles Lua to LLVM.
- [lua.vm.js ![GitHub Repo Stars](https://img.shields.io/github/stars/daurnimator/lua.vm.js) ![GitHub last commit](https://img.shields.io/github/last-commit/daurnimator/lua.vm.js)](https://github.com/daurnimator/lua.vm.js) - Lua VM on the web; a direct port of the C interpreter via LLVM, emscripten, and asm.js.
- [Moonshine ![GitHub Repo Stars](https://img.shields.io/github/stars/gamesys/moonshine) ![GitHub last commit](https://img.shields.io/github/last-commit/gamesys/moonshine)](https://github.com/gamesys/moonshine) - A Lua VM implemented in JavaScript. Slower than lua.vm.js, but with better docs, examples, and JS interfacing.
- [Fengari](https://fengari.io/) - The Lua VM rewritten in Javascript with seamless JS and DOM interoperability.
- [MoonSharp ![GitHub Repo Stars](https://img.shields.io/github/stars/xanathar/moonsharp) ![GitHub last commit](https://img.shields.io/github/last-commit/xanathar/moonsharp)](https://github.com/xanathar/moonsharp) - A Lua interpreter written entirely in C# for the .NET, Mono and Unity platforms.
- [UniLua ![GitHub Repo Stars](https://img.shields.io/github/stars/xebecnan/UniLua) ![GitHub last commit](https://img.shields.io/github/last-commit/xebecnan/UniLua)](https://github.com/xebecnan/UniLua) - A pure C# implementation of Lua 5.2, focused on compatibility with the Unity game engine.
- [lupa ![GitHub Repo Stars](https://img.shields.io/github/stars/scoder/lupa) ![GitHub last commit](https://img.shields.io/github/last-commit/scoder/lupa)](https://github.com/scoder/lupa) - Python bindings to LuaJIT2.
- [golua ![GitHub Repo Stars](https://img.shields.io/github/stars/aarzilli/golua) ![GitHub last commit](https://img.shields.io/github/last-commit/aarzilli/golua)](https://github.com/aarzilli/golua) - Golang bindings to the Lua C API.
- [GopherLua ![GitHub Repo Stars](https://img.shields.io/github/stars/yuin/gopher-lua) ![GitHub last commit](https://img.shields.io/github/last-commit/yuin/gopher-lua)](https://github.com/yuin/gopher-lua) - Lua 5.1 VM and compiler implemented in Go with Go APIs.
- [LuaBridge ![GitHub Repo Stars](https://img.shields.io/github/stars/vinniefalco/LuaBridge) ![GitHub last commit](https://img.shields.io/github/last-commit/vinniefalco/LuaBridge)](https://github.com/vinniefalco/LuaBridge) - A lightweight library for mapping data, functions, and classes back and forth between C++ and Lua.

Note: From LuaJIT to Lua to lua.vm.js to Moonshine, a basic benchmark sees performance drop by roughly a factor of 6 with each hop.


### Package Managers
- [LuaRocks](https://luarocks.org/) - De-facto tool for installing Lua modules as packages called "rocks", plus public rock repository and website.  Much like npm or pip.


### Build Tools and Standalone Makers
- [Lake ![GitHub Repo Stars](https://img.shields.io/github/stars/stevedonovan/Lake) ![GitHub last commit](https://img.shields.io/github/last-commit/stevedonovan/Lake)](https://github.com/stevedonovan/Lake) - A build engine written in Lua, similar to Ruby's rake.
- [Luabuild ![GitHub Repo Stars](https://img.shields.io/github/stars/stevedonovan/luabuild) ![GitHub last commit](https://img.shields.io/github/last-commit/stevedonovan/luabuild)](https://github.com/stevedonovan/luabuild) - Highly customizable Lua 5.2 build system.
- [luastatic ![GitHub Repo Stars](https://img.shields.io/github/stars/ers35/luastatic) ![GitHub last commit](https://img.shields.io/github/last-commit/ers35/luastatic)](https://github.com/ers35/luastatic) - Simple tool for turning Lua programs into standalone executables.
- [omnia ![GitHub Repo Stars](https://img.shields.io/github/stars/tongson/omnia) ![GitHub last commit](https://img.shields.io/github/last-commit/tongson/omnia)](https://github.com/tongson/omnia) - A batteries-included creator of standalone executables, built on top of luastatic.


### Debugging and Profiling
- [ProFi](https://gist.github.com/perky/2838755) - Simple profiler that works with LuaJIT and produces a report file.
- [luatrace ![GitHub Repo Stars](https://img.shields.io/github/stars/geoffleyland/luatrace) ![GitHub last commit](https://img.shields.io/github/last-commit/geoffleyland/luatrace)](https://github.com/geoffleyland/luatrace) - Toolset for tracing/analyzing/profiling script execution and generating detailed reports.
- [StackTracePlus ![GitHub Repo Stars](https://img.shields.io/github/stars/ignacio/StackTracePlus) ![GitHub last commit](https://img.shields.io/github/last-commit/ignacio/StackTracePlus)](https://github.com/ignacio/StackTracePlus) - Drop-in upgrade to Lua's stack traces which adds local context and improves readability.
- [MobDebug ![GitHub Repo Stars](https://img.shields.io/github/stars/pkulchenko/MobDebug) ![GitHub last commit](https://img.shields.io/github/last-commit/pkulchenko/MobDebug)](https://github.com/pkulchenko/MobDebug) - Powerful remote debugger with breakpoints and stack inspection. Used by ZeroBraneStudio.
- [lovebird ![GitHub Repo Stars](https://img.shields.io/github/stars/rxi/lovebird) ![GitHub last commit](https://img.shields.io/github/last-commit/rxi/lovebird)](https://github.com/rxi/lovebird) - Browser-based debug console. Originally made for LÖVE, but works in any project with LuaSocket support.


### IDEs and Plugins
- [Lua Development Tools](https://eclipse.org/ldt/) - Eclipse plugin which provides code completion, debugging, and more. Built on Metalua.
- [Lua for IDEA](https://bitbucket.org/sylvanaar2/lua-for-idea/wiki/Home) - IntelliJ IDEA plugin which, among other things, provides code completion, smart highlighting, and experimental debugging.
- [ZeroBraneStudio](https://studio.zerobrane.com/) - Lightweight, customizable, cross-platform Lua-dedicated IDE with code completion and analysis, written in Lua. Has broad debugging support for numerous Lua engines.
- [BabeLua](https://archive.codeplex.com/?p=babelua) - Lua editor/debugger extension for VS2012-13 with highlighting, auto-completion, linting, and formatting capabilities.
- [lua-mode ![GitHub Repo Stars](https://img.shields.io/github/stars/immerrr/lua-mode) ![GitHub last commit](https://img.shields.io/github/last-commit/immerrr/lua-mode)](https://github.com/immerrr/lua-mode) - Emacs major mode for editing Lua.
- [vscode-lua ![GitHub Repo Stars](https://img.shields.io/github/stars/trixnz/vscode-lua) ![GitHub last commit](https://img.shields.io/github/last-commit/trixnz/vscode-lua)](https://github.com/trixnz/vscode-lua) - VSCode intellisense and linting.


### Utility Belts
- [Lua Fun ![GitHub Repo Stars](https://img.shields.io/github/stars/luafun/luafun) ![GitHub last commit](https://img.shields.io/github/last-commit/luafun/luafun)](https://github.com/luafun/luafun) - High-performance functional programming library designed for LuaJIT.
- [Moses ![GitHub Repo Stars](https://img.shields.io/github/stars/Yonaba/Moses) ![GitHub last commit](https://img.shields.io/github/last-commit/Yonaba/Moses)](https://github.com/Yonaba/Moses) - Functional programming utility belt, inspired by Underscore.js.
- [Penlight ![GitHub Repo Stars](https://img.shields.io/github/stars/stevedonovan/Penlight) ![GitHub last commit](https://img.shields.io/github/last-commit/stevedonovan/Penlight)](https://github.com/stevedonovan/Penlight) - Broad, heavyweight utility library, inspired by Python's standard libs. Provides the batteries that Lua doesn't.
- [lua-stdlib ![GitHub Repo Stars](https://img.shields.io/github/stars/lua-stdlib/lua-stdlib) ![GitHub last commit](https://img.shields.io/github/last-commit/lua-stdlib/lua-stdlib)](https://github.com/lua-stdlib/lua-stdlib) - Middle-weight standard library extension; adds some useful data structures, utility functions, and basic functional stuff.
- [Microlight ![GitHub Repo Stars](https://img.shields.io/github/stars/stevedonovan/Microlight) ![GitHub last commit](https://img.shields.io/github/last-commit/stevedonovan/Microlight)](https://github.com/stevedonovan/Microlight) - A little library of useful Lua functions; the 'extra light' version of Penlight.
- [compat53](https://luarocks.org/modules/siffiejoe/compat53) - Compatibility module providing Lua-5.3-style APIs for Lua 5.2 and 5.1.
- [RxLua ![GitHub Repo Stars](https://img.shields.io/github/stars/bjornbytes/RxLua) ![GitHub last commit](https://img.shields.io/github/last-commit/bjornbytes/RxLua)](https://github.com/bjornbytes/RxLua) - Reactive Extensions, Observables, etc.


### Game Engines
- [LÖVE 2D](http://love2d.org/) - Desktop game development platform. Cross-platform, feature-complete, well-adopted.
- [Corona SDK](https://coronalabs.com/) - Development platform for iOS and Android. Proprietary, but used by numerous top games and apps, totaling over 150 million downloads.
- [MOAI](http://getmoai.com/) - Open source, cross-platform, mobile game development framework. Minimalist C++ engine powered by Lua scripting.
- [Drystal](https://drystal.github.io/) - Open source, games can run on Linux or on any platform with a recent web browser.
- [Amulet](http://www.amulet.xyz/) - Open source, audio/visual toolkit suitable for small games and experimentation. It runs on Windows, Mac, Linux, HTML5 and iOS.
- [LÖVR](https://lovr.org) - 3D framework for creating virtual reality experiences, inspired by LÖVE 2D.


### Game Development
- Corona
  - [Coronium](https://develephant.github.io/coronium-core-docs/) - Simple cloud platform supporting analytics, data objects, user management, and more.
- LÖVE
  - [awesome-love2d ![GitHub Repo Stars](https://img.shields.io/github/stars/love2d-community/awesome-love2d) ![GitHub last commit](https://img.shields.io/github/last-commit/love2d-community/awesome-love2d)](https://github.com/love2d-community/awesome-love2d) - A list like this one, but focused on game dev and the LÖVE platform.
  - [lurker ![GitHub Repo Stars](https://img.shields.io/github/stars/rxi/lurker) ![GitHub last commit](https://img.shields.io/github/last-commit/rxi/lurker)](https://github.com/rxi/lurker) - Shortens the iteration cycle by auto-swapping changed Lua files in a running LÖVE project.
  - [HUMP](http://vrld.github.io/hump/) - A set of lightweight helpers for LÖVE; a game-oriented utility belt.
- MOAI
  - [moaifiddle](https://moaifiddle.com) - Edit and share short scripts for the MOAI game engine and run them in the browser using WebGL.
- [Jumper ![GitHub Repo Stars](https://img.shields.io/github/stars/Yonaba/Jumper) ![GitHub last commit](https://img.shields.io/github/last-commit/Yonaba/Jumper)](https://github.com/Yonaba/Jumper) - Fast, lightweight, and easy-to-use pathfinding library for grid-based games.
- [lume ![GitHub Repo Stars](https://img.shields.io/github/stars/rxi/lume) ![GitHub last commit](https://img.shields.io/github/last-commit/rxi/lume)](https://github.com/rxi/lume/) - Utility belt library geared toward game development.
- [NoobHub ![GitHub Repo Stars](https://img.shields.io/github/stars/Overtorment/NoobHub) ![GitHub last commit](https://img.shields.io/github/last-commit/Overtorment/NoobHub)](https://github.com/Overtorment/NoobHub) - Network multiplayer for Corona, LÖVE, and more, following a simple pub-sub model.
- Collision detection
  - [bump.lua ![GitHub Repo Stars](https://img.shields.io/github/stars/kikito/bump.lua) ![GitHub last commit](https://img.shields.io/github/last-commit/kikito/bump.lua)](https://github.com/kikito/bump.lua) - Minimal rectangle-based collision detection which handles tunnelling and basic collision resolution.
  - [HardonCollider](http://vrld.github.io/HardonCollider/) - Detect collisions between arbitrarily positioned and rotated shapes of any type.
- Tweening
  - [flux ![GitHub Repo Stars](https://img.shields.io/github/stars/rxi/flux) ![GitHub last commit](https://img.shields.io/github/last-commit/rxi/flux)](https://github.com/rxi/flux) - A fast, lightweight tweening library for Lua with easing functions and the ability to group tweens together.
  - [tween.lua ![GitHub Repo Stars](https://img.shields.io/github/stars/kikito/tween.lua) ![GitHub last commit](https://img.shields.io/github/last-commit/kikito/tween.lua)](https://github.com/kikito/tween.lua) - Small library for tweening, with several easing functions.
- Examples
  - [termtris ![GitHub Repo Stars](https://img.shields.io/github/stars/tylerneylon/termtris) ![GitHub last commit](https://img.shields.io/github/last-commit/tylerneylon/termtris)](https://github.com/tylerneylon/termtris) - A tetris clone, written in literate style with "an emphasis on learn-from-ability".
  - [PacPac ![GitHub Repo Stars](https://img.shields.io/github/stars/tylerneylon/pacpac) ![GitHub last commit](https://img.shields.io/github/last-commit/tylerneylon/pacpac)](https://github.com/tylerneylon/pacpac) - A Pac-man clone, made with LÖVE.
  - [Mari0 ![GitHub Repo Stars](https://img.shields.io/github/stars/Stabyourself/mari0) ![GitHub last commit](https://img.shields.io/github/last-commit/Stabyourself/mari0)](https://github.com/Stabyourself/mari0) - Fusion of Mario and Portal, made with LÖVE. See also its [wikipedia entry](https://en.wikipedia.org/wiki/Mari0).
  - [Journey to the Center of Hawkthorne ![GitHub Repo Stars](https://img.shields.io/github/stars/hawkthorne/hawkthorne-journey) ![GitHub last commit](https://img.shields.io/github/last-commit/hawkthorne/hawkthorne-journey)](https://github.com/hawkthorne/hawkthorne-journey) - 2D platformer based on Community's [Digital Estate Planning](https://en.wikipedia.org/wiki/Digital_Estate_Planning) episode, made with LÖVE.


### Logging
- [lua-log ![GitHub Repo Stars](https://img.shields.io/github/stars/moteus/lua-log) ![GitHub last commit](https://img.shields.io/github/last-commit/moteus/lua-log)](https://github.com/moteus/lua-log) - Asynchronous logging library with pluggable writers for file system, network, ZeroMQ, and more.
- [LuaLogging ![GitHub Repo Stars](https://img.shields.io/github/stars/Neopallium/lualogging) ![GitHub last commit](https://img.shields.io/github/last-commit/Neopallium/lualogging)](https://github.com/Neopallium/lualogging) - Log4j-inspired logging library supporting various appenders.
- [luasyslog](https://luarocks.org/modules/luarocks/luasyslog) - Log to syslog, based on LuaLogging.


### Web/Networking Platforms
- [OpenResty](http://openresty.org/en/) - A fast and scalable web application platform created by extending Nginx with Lua. Today's de-facto Lua web platform, used heavily by Cloudflare, Taobao, Tencent, and others.
- [turbo](https://turbo.readthedocs.io/en/latest/) - Event-driven, non-blocking, LuaJIT-based networking suite and framework, inspired by Tornado.
- [Kepler Project](https://github.com/keplerproject) - A collection of web-oriented projects using a common set of standards and components.
- [Pegasus.lua ![GitHub Repo Stars](https://img.shields.io/github/stars/EvandroLG/pegasus.lua) ![GitHub last commit](https://img.shields.io/github/last-commit/EvandroLG/pegasus.lua)](https://github.com/EvandroLG/pegasus.lua) - Pegasus.lua is a http server to work with web applications written in Lua language.


### OpenResty
- [awesome-resty ![GitHub Repo Stars](https://img.shields.io/github/stars/bungle/awesome-resty) ![GitHub last commit](https://img.shields.io/github/last-commit/bungle/awesome-resty)](https://github.com/bungle/awesome-resty) - A list like this one, but focused on OpenResty.
- Core platform
  - [ngx_lua](https://www.nginx.com/resources/wiki/modules/lua/) - The core piece of OpenResty. Embeds Lua in Nginx and exposes, among other things, the cosocket API for non-blocking sockets (compatible with LuaSocket's API).
  - [OpenResty GitHub Organization](https://github.com/openresty) - Home of the repositories for ngx_lua, ngx_openresty, and many related modules.
- Third-party modules
  - [lua-resty-http ![GitHub Repo Stars](https://img.shields.io/github/stars/pintsized/lua-resty-http) ![GitHub last commit](https://img.shields.io/github/last-commit/pintsized/lua-resty-http)](https://github.com/pintsized/lua-resty-http) - Lua HTTP client driver, built on the cosocket API.
- Frameworks & tools
  - [Lapis](http://leafo.net/lapis/) - Full-stack framework for Lua and OpenResty. Like the Django or Rails of Lua. Supports Moonscript.
  - [ledge ![GitHub Repo Stars](https://img.shields.io/github/stars/pintsized/ledge) ![GitHub last commit](https://img.shields.io/github/last-commit/pintsized/ledge)](https://github.com/pintsized/ledge) - Lua module providing scriptable, RFC-compliant HTTP cache functionality.
  - [Sailor ![GitHub Repo Stars](https://img.shields.io/github/stars/sailorproject/sailor) ![GitHub last commit](https://img.shields.io/github/last-commit/sailorproject/sailor)](https://github.com/sailorproject/sailor) — An MVC web framework compatible with OpenResty, Apache and other webservers.
  - [Kong ![GitHub Repo Stars](https://img.shields.io/github/stars/Kong/kong) ![GitHub last commit](https://img.shields.io/github/last-commit/Kong/kong)](https://github.com/Kong/kong) - Microservice & API Management Layer.

Search this page for 'OpenResty' to find related packages under other categories (data stores in particular).


### Command-line Utilities
- [ansicolors ![GitHub Repo Stars](https://img.shields.io/github/stars/kikito/ansicolors.lua) ![GitHub last commit](https://img.shields.io/github/last-commit/kikito/ansicolors.lua)](https://github.com/kikito/ansicolors.lua) - Simple function for printing to the console in color.
- [cliargs ![GitHub Repo Stars](https://img.shields.io/github/stars/amireh/lua_cliargs) ![GitHub last commit](https://img.shields.io/github/last-commit/amireh/lua_cliargs)](https://github.com/amireh/lua_cliargs) - A simple command-line argument parsing module.
- [lua-term ![GitHub Repo Stars](https://img.shields.io/github/stars/hoelzro/lua-term) ![GitHub last commit](https://img.shields.io/github/last-commit/hoelzro/lua-term)](https://github.com/hoelzro/lua-term) - Terminal operations and manipulations.
- [argparse ![GitHub Repo Stars](https://img.shields.io/github/stars/mpeterv/argparse) ![GitHub last commit](https://img.shields.io/github/last-commit/mpeterv/argparse)](https://github.com/mpeterv/argparse) - A feature-rich command line parser inspired by argparse for Python.

### Concurrency and Multithreading
- Coroutine-based multitasking:
  - [Lumen ![GitHub Repo Stars](https://img.shields.io/github/stars/xopxe/Lumen) ![GitHub last commit](https://img.shields.io/github/last-commit/xopxe/Lumen)](https://github.com/xopxe/Lumen) - Simple concurrent task scheduling.
  - [ConcurrentLua ![GitHub Repo Stars](https://img.shields.io/github/stars/lefcha/concurrentlua) ![GitHub last commit](https://img.shields.io/github/last-commit/lefcha/concurrentlua)](https://github.com/lefcha/concurrentlua) - Implements an Erlang-style message-passing concurrency model.
  - [cqueues](http://25thandclement.com/~william/projects/cqueues.html) - Library for managing sockets, signals, and threads based on an event loop with coroutines.
- Multithreading:
  - [llthreads ![GitHub Repo Stars](https://img.shields.io/github/stars/Neopallium/lua-llthreads) ![GitHub last commit](https://img.shields.io/github/last-commit/Neopallium/lua-llthreads)](https://github.com/Neopallium/lua-llthreads) - A simple wrapper for low-level pthreads & WIN32 threads.
  - [llthreads2 ![GitHub Repo Stars](https://img.shields.io/github/stars/moteus/lua-llthreads2) ![GitHub last commit](https://img.shields.io/github/last-commit/moteus/lua-llthreads2)](https://github.com/moteus/lua-llthreads2) - Newer rewrite of llthreads.
  - [lanes ![GitHub Repo Stars](https://img.shields.io/github/stars/LuaLanes/lanes) ![GitHub last commit](https://img.shields.io/github/last-commit/LuaLanes/lanes)](https://github.com/LuaLanes/lanes) - Library implementing a message passing model with one OS thread per Lua thread.
  - [luaproc ![GitHub Repo Stars](https://img.shields.io/github/stars/askyrme/luaproc) ![GitHub last commit](https://img.shields.io/github/last-commit/askyrme/luaproc)](https://github.com/askyrme/luaproc) - Message-passing model which allows multiple threads per OS thread and easily generalizes across a network. See also [the paper](http://www.inf.puc-rio.br/~roberto/docs/ry08-05.pdf) where it originated.

For more on the differences (particularly between `lanes` and `luaproc`), see this [comparison](http://www.luteus.biz/Download/LoriotPro_Doc/LUA/LUA_For_Windows/lanes/comparison.html) of options; somewhat dated, but covers how each one works and the significant differences.


### Templating
- [lustache](http://olivinelabs.com/lustache/) - Mustache template implementation.
- [etlua ![GitHub Repo Stars](https://img.shields.io/github/stars/leafo/etlua) ![GitHub last commit](https://img.shields.io/github/last-commit/leafo/etlua)](https://github.com/leafo/etlua) - Embedded Lua templates, ERB-style.
- [lua-resty-template ![GitHub Repo Stars](https://img.shields.io/github/stars/bungle/lua-resty-template) ![GitHub last commit](https://img.shields.io/github/last-commit/bungle/lua-resty-template)](https://github.com/bungle/lua-resty-template) - Lua-oriented template engine for OpenResty, somewhat Jinja-like.


### Documentation
- [LDoc](http://stevedonovan.github.io/ldoc/) - Documentation generator which modernizes and extends [LuaDoc](http://keplerproject.github.io/luadoc/).
- [Locco](http://rgieseke.github.io/locco/) - Lua port of [Docco](http://ashkenas.com/docco/), the "quick-and-dirty, hundred-line-long, literate-programming-style documentation generator".
- [docroc ![GitHub Repo Stars](https://img.shields.io/github/stars/bjornbytes/docroc) ![GitHub last commit](https://img.shields.io/github/last-commit/bjornbytes/docroc)](https://github.com/bjornbytes/docroc) - Parse comments into a Lua table to generate documentation.


### Object-oriented Programming
- [30log ![GitHub Repo Stars](https://img.shields.io/github/stars/Yonaba/30log) ![GitHub last commit](https://img.shields.io/github/last-commit/Yonaba/30log)](https://github.com/Yonaba/30log) - Minimalist OOP library with basic classes, inheritance, and mixins in 30 lines.
- [middleclass ![GitHub Repo Stars](https://img.shields.io/github/stars/kikito/middleclass) ![GitHub last commit](https://img.shields.io/github/last-commit/kikito/middleclass)](https://github.com/kikito/middleclass) - Simple but robust OOP library with inheritance, methods, metamethods, class variables and mixins.


### File system and OS
- [LuaFileSystem](http://keplerproject.github.io/luafilesystem/) - Extends and complements Lua's built-in set of file system functions.
- [luaposix ![GitHub Repo Stars](https://img.shields.io/github/stars/luaposix/luaposix) ![GitHub last commit](https://img.shields.io/github/last-commit/luaposix/luaposix)](https://github.com/luaposix/luaposix) - Bindings for POSIX APIs, including curses.
- [lunix](http://25thandclement.com/~william/projects/lunix.html) - Bindings to common Unix system APIs, striving for thread-safety.
- [lua-path ![GitHub Repo Stars](https://img.shields.io/github/stars/moteus/lua-path) ![GitHub last commit](https://img.shields.io/github/last-commit/moteus/lua-path)](https://github.com/moteus/lua-path) - File system path manipulation library.


### Time and Date
- [LuaDate ![GitHub Repo Stars](https://img.shields.io/github/stars/Tieske/date) ![GitHub last commit](https://img.shields.io/github/last-commit/Tieske/date)](https://github.com/Tieske/date) - Date and time module with parsing, formatting, addition/subtraction, localization, and ISO 8601 support.
- [cron.lua ![GitHub Repo Stars](https://img.shields.io/github/stars/kikito/cron.lua) ![GitHub last commit](https://img.shields.io/github/last-commit/kikito/cron.lua)](https://github.com/kikito/cron.lua) - Time-related functions for Lua, inspired by JavaScript's setTimeout and setInterval.
- [luatx ![GitHub Repo Stars](https://img.shields.io/github/stars/daurnimator/luatz) ![GitHub last commit](https://img.shields.io/github/last-commit/daurnimator/luatz)](https://github.com/daurnimator/luatz) - Time, date, and timezone library.


### Image Manipulation
- [magick ![GitHub Repo Stars](https://img.shields.io/github/stars/leafo/magick) ![GitHub last commit](https://img.shields.io/github/last-commit/leafo/magick)](https://github.com/leafo/magick) - Lua bindings to ImageMagick for LuaJIT using FFI.


### Digital Signal Processing
- [LuaFFT ![GitHub Repo Stars](https://img.shields.io/github/stars/h4rm/luafft) ![GitHub last commit](https://img.shields.io/github/last-commit/h4rm/luafft)](https://github.com/h4rm/luafft) - An easy to use Fast Fourier Transformation package in pure Lua.
- [Worp](http://worp.zevv.nl/about.html) - Sound/music/DSP engine written for LuaJIT.


### Hardware and Embedded Systems
- [eLua](http://www.eluaproject.net/) - Lua, extended with optimizations and specific features for efficient and portable embedded software development.


### Math and Scientific Computing
- [SciLua](http://scilua.org/) - Numerical/scientific computing framework built on LuaJIT, with an interface to R.
- [Torch7](http://torch.ch/) - Scientific computing framework with wide support for machine learning algorithms, used by Facebook, Google, and more.
- [lhf's Lua Tools](http://webserver2.tecgraf.puc-rio.br/~lhf/ftp/lua/) - Assorted libraries and tools, many math- or data-related.


### Parsing and Serialization
- JSON
  - [lua-cjson ![GitHub Repo Stars](https://img.shields.io/github/stars/mpx/lua-cjson) ![GitHub last commit](https://img.shields.io/github/last-commit/mpx/lua-cjson)](https://github.com/mpx/lua-cjson/) - Blazing fast JSON encoding/decoding implemented in C and exposed to Lua.
  - [luajson ![GitHub Repo Stars](https://img.shields.io/github/stars/harningt/luajson) ![GitHub last commit](https://img.shields.io/github/last-commit/harningt/luajson)](https://github.com/harningt/luajson) - JSON encoder/decoder implemented in Lua on top of LPeg.
  - [dkjson](http://dkolf.de/src/dkjson-lua.fsl/home) - JSON encoder/decoder implemented in pure Lua.
  - [json.lua ![GitHub Repo Stars](https://img.shields.io/github/stars/rxi/json.lua) ![GitHub last commit](https://img.shields.io/github/last-commit/rxi/json.lua)](https://github.com/rxi/json.lua) - A fast and tiny JSON library in pure Lua.
- XML
  - [LuaExpat](https://matthewwild.co.uk/projects/luaexpat/) - SAX XML parser via binding to the Expat library.
  - [SLAXML ![GitHub Repo Stars](https://img.shields.io/github/stars/Phrogz/SLAXML) ![GitHub last commit](https://img.shields.io/github/last-commit/Phrogz/SLAXML)](https://github.com/Phrogz/SLAXML) - Pure Lua SAX-like streaming XML parser.
- MessagePack
  - [lua-MessagePack ![GitHub Repo Stars](https://img.shields.io/github/stars/fperrad/lua-MessagePack) ![GitHub last commit](https://img.shields.io/github/last-commit/fperrad/lua-MessagePack)](https://github.com/fperrad/lua-MessagePack) - Pure Lua implementation of MessagePack.
  - [lua-cmsgpack ![GitHub Repo Stars](https://img.shields.io/github/stars/antirez/lua-cmsgpack) ![GitHub last commit](https://img.shields.io/github/last-commit/antirez/lua-cmsgpack)](https://github.com/antirez/lua-cmsgpack) - A MessagePack C implementation with Lua bindings, as used by Redis.=
- LPeg
  - [LPeg](http://www.inf.puc-rio.br/~roberto/lpeg/) - A pattern-matching library for Lua, based on Parsing Expression Grammars.
  - [lpeg_patterns ![GitHub Repo Stars](https://img.shields.io/github/stars/daurnimator/lpeg_patterns) ![GitHub last commit](https://img.shields.io/github/last-commit/daurnimator/lpeg_patterns)](https://github.com/daurnimator/lpeg_patterns) - A collection of LPeg patterns.
  - [LuLPeg ![GitHub Repo Stars](https://img.shields.io/github/stars/pygy/LuLPeg) ![GitHub last commit](https://img.shields.io/github/last-commit/pygy/LuLPeg)](https://github.com/pygy/LuLPeg) - A pure Lua implementation of LPeg v0.12.
  - [LPegLJ ![GitHub Repo Stars](https://img.shields.io/github/stars/sacek/LPegLJ) ![GitHub last commit](https://img.shields.io/github/last-commit/sacek/LPegLJ)](https://github.com/sacek/LPegLJ) - A pure LuaJIT implementation of LPeg v1.0.
  - [LPegLabel ![GitHub Repo Stars](https://img.shields.io/github/stars/sqmedeiros/lpeglabel) ![GitHub last commit](https://img.shields.io/github/last-commit/sqmedeiros/lpeglabel)](https://github.com/sqmedeiros/lpeglabel) - An extension of LPeg adding support for labeled failures.
- [lyaml ![GitHub Repo Stars](https://img.shields.io/github/stars/gvvaughan/lyaml) ![GitHub last commit](https://img.shields.io/github/last-commit/gvvaughan/lyaml)](https://github.com/gvvaughan/lyaml) - YAML encoding/decoding via binding to LibYAML.
- [lunamark ![GitHub Repo Stars](https://img.shields.io/github/stars/jgm/lunamark) ![GitHub last commit](https://img.shields.io/github/last-commit/jgm/lunamark)](https://github.com/jgm/lunamark) - Converts Markdown to other textual formats including HTML and LaTeX. Uses LPeg for fast parsing.
- [LXSH ![GitHub Repo Stars](https://img.shields.io/github/stars/xolox/lua-lxsh) ![GitHub last commit](https://img.shields.io/github/last-commit/xolox/lua-lxsh)](https://github.com/xolox/lua-lxsh) - A collection of lexers and syntax highlighters written with LPeg.
- [lua-pb ![GitHub Repo Stars](https://img.shields.io/github/stars/Neopallium/lua-pb) ![GitHub last commit](https://img.shields.io/github/last-commit/Neopallium/lua-pb)](https://github.com/Neopallium/lua-pb) - Protocol Buffers implementation.


### Humanize
- [i18n.lua ![GitHub Repo Stars](https://img.shields.io/github/stars/kikito/i18n.lua) ![GitHub last commit](https://img.shields.io/github/last-commit/kikito/i18n.lua)](https://github.com/kikito/i18n.lua) - Internationalization library with locales, formatting, and pluralization.
- [inspect.lua ![GitHub Repo Stars](https://img.shields.io/github/stars/kikito/inspect.lua) ![GitHub last commit](https://img.shields.io/github/last-commit/kikito/inspect.lua)](https://github.com/kikito/inspect.lua) - Human-readable representation of Lua tables.
- [serpent ![GitHub Repo Stars](https://img.shields.io/github/stars/pkulchenko/serpent) ![GitHub last commit](https://img.shields.io/github/last-commit/pkulchenko/serpent)](https://github.com/pkulchenko/serpent) - Serializer and pretty printer.
- [Ser ![GitHub Repo Stars](https://img.shields.io/github/stars/gvx/Ser) ![GitHub last commit](https://img.shields.io/github/last-commit/gvx/Ser)](https://github.com/gvx/Ser) - Dead simple serializer with good performance.
- [say ![GitHub Repo Stars](https://img.shields.io/github/stars/Olivine-Labs/say) ![GitHub last commit](https://img.shields.io/github/last-commit/Olivine-Labs/say)](https://github.com/Olivine-Labs/say) - Simple string key-value store for i18n.


### Compression
- [lua-zlib ![GitHub Repo Stars](https://img.shields.io/github/stars/brimworks/lua-zlib) ![GitHub last commit](https://img.shields.io/github/last-commit/brimworks/lua-zlib)](https://github.com/brimworks/lua-zlib) - Simple streaming interface to zlib for gzip/gunzip.
- [lua-zip ![GitHub Repo Stars](https://img.shields.io/github/stars/brimworks/lua-zip) ![GitHub last commit](https://img.shields.io/github/last-commit/brimworks/lua-zip)](https://github.com/brimworks/lua-zip) - Lua binding to libzip. Reads and writes zip files.


### Cryptography
- [LuaCrypto ![GitHub Repo Stars](https://img.shields.io/github/stars/mkottman/luacrypto) ![GitHub last commit](https://img.shields.io/github/last-commit/mkottman/luacrypto)](https://github.com/mkottman/luacrypto) - Lua bindings to OpenSSL.
- [lua-lockbox ![GitHub Repo Stars](https://img.shields.io/github/stars/somesocks/lua-lockbox) ![GitHub last commit](https://img.shields.io/github/last-commit/somesocks/lua-lockbox)](https://github.com/somesocks/lua-lockbox) - A collection of cryptographic primitives written in pure Lua.
- [luatweetnacl ![GitHub Repo Stars](https://img.shields.io/github/stars/philanc/luatweetnacl) ![GitHub last commit](https://img.shields.io/github/last-commit/philanc/luatweetnacl)](https://github.com/philanc/luatweetnacl) - Bindings to tweetnacl, modern high-security cryptographic library.
- [luaossl ![GitHub Repo Stars](https://img.shields.io/github/stars/wahern/luaossl) ![GitHub last commit](https://img.shields.io/github/last-commit/wahern/luaossl)](https://github.com/wahern/luaossl) - "Most comprehensive OpenSSL module in the Lua universe" - used by lapis, kong, and lua-http.


### Network
- [LuaSocket ![GitHub Repo Stars](https://img.shields.io/github/stars/diegonehab/luasocket) ![GitHub last commit](https://img.shields.io/github/last-commit/diegonehab/luasocket)](https://github.com/diegonehab/luasocket) - Networking extension which provides a socket API for TCP and UDP, and implements HTTP, FTP, and SMTP.
- [lua-websockets ![GitHub Repo Stars](https://img.shields.io/github/stars/lipp/lua-websockets) ![GitHub last commit](https://img.shields.io/github/last-commit/lipp/lua-websockets)](https://github.com/lipp/lua-websockets) - WebSocket client and server modules. Webserver-agnostic, implemented in Lua on top of LuaSocket.
- [lua-cURLv3 ![GitHub Repo Stars](https://img.shields.io/github/stars/Lua-cURL/Lua-cURLv3) ![GitHub last commit](https://img.shields.io/github/last-commit/Lua-cURL/Lua-cURLv3)](https://github.com/Lua-cURL/Lua-cURLv3) - Lua binding to libcurl.
- [lua-http ![GitHub Repo Stars](https://img.shields.io/github/stars/daurnimator/lua-http) ![GitHub last commit](https://img.shields.io/github/last-commit/daurnimator/lua-http)](https://github.com/daurnimator/lua-http) - Asynchronous HTTP and WebSocket library with client and server APIs, TLS, and HTTP/2; based on cqueues.


### Data Stores
- [LuaSQL](http://keplerproject.github.io/luasql/) - Simple interface for connecting to ODBC, ADO, Oracle, MySQL, SQLite and PostgreSQL.
- [pgmoon ![GitHub Repo Stars](https://img.shields.io/github/stars/leafo/pgmoon) ![GitHub last commit](https://img.shields.io/github/last-commit/leafo/pgmoon)](https://github.com/leafo/pgmoon) - Lua PostgreSQL driver for OpenResty, LuaSocket, and cqueues.
- [lua-resty-mysql ![GitHub Repo Stars](https://img.shields.io/github/stars/openresty/lua-resty-mysql) ![GitHub last commit](https://img.shields.io/github/last-commit/openresty/lua-resty-mysql)](https://github.com/openresty/lua-resty-mysql) - Lua MySQL driver for OpenResty.
- [lua-resty-cassandra ![GitHub Repo Stars](https://img.shields.io/github/stars/jbochi/lua-resty-cassandra) ![GitHub last commit](https://img.shields.io/github/last-commit/jbochi/lua-resty-cassandra)](https://github.com/jbochi/lua-resty-cassandra) - Lua Cassandra client driver for OpenResty and others.
- Redis
  - [redis-lua ![GitHub Repo Stars](https://img.shields.io/github/stars/nrk/redis-lua) ![GitHub last commit](https://img.shields.io/github/last-commit/nrk/redis-lua)](https://github.com/nrk/redis-lua) - Pure Lua client library for Redis.
  - [lua-resty-redis ![GitHub Repo Stars](https://img.shields.io/github/stars/openresty/lua-resty-redis) ![GitHub last commit](https://img.shields.io/github/last-commit/openresty/lua-resty-redis)](https://github.com/openresty/lua-resty-redis) - Lua Redis client driver for OpenResty.
  - [lredis ![GitHub Repo Stars](https://img.shields.io/github/stars/daurnimator/lredis) ![GitHub last commit](https://img.shields.io/github/last-commit/daurnimator/lredis)](https://github.com/daurnimator/lredis) - Asynchronous Redis client with pipelining and Pub/Sub support; based on cqueues.


### Message Brokers
- [lua-zmq ![GitHub Repo Stars](https://img.shields.io/github/stars/Neopallium/lua-zmq) ![GitHub last commit](https://img.shields.io/github/last-commit/Neopallium/lua-zmq)](https://github.com/Neopallium/lua-zmq) - Lua bindings to ZeroMQ.
- [lzmq ![GitHub Repo Stars](https://img.shields.io/github/stars/zeromq/lzmq) ![GitHub last commit](https://img.shields.io/github/last-commit/zeromq/lzmq)](https://github.com/zeromq/lzmq) - A newer Lua binding to ZeroMQ.
- [lua-resty-kafka ![GitHub Repo Stars](https://img.shields.io/github/stars/doujiang24/lua-resty-kafka) ![GitHub last commit](https://img.shields.io/github/last-commit/doujiang24/lua-resty-kafka)](https://github.com/doujiang24/lua-resty-kafka) - Kafka client driver based on OpenResty cosockets.
- [lua-resty-rabbitmqstomp ![GitHub Repo Stars](https://img.shields.io/github/stars/wingify/lua-resty-rabbitmqstomp) ![GitHub last commit](https://img.shields.io/github/last-commit/wingify/lua-resty-rabbitmqstomp)](https://github.com/wingify/lua-resty-rabbitmqstomp) - RabbitMQ client library based on OpenResty cosockets.


### Testing
- [busted](http://olivinelabs.com/busted/) - BDD-style unit testing framework with great docs and Moonscript support.
- [telescope ![GitHub Repo Stars](https://img.shields.io/github/stars/norman/telescope) ![GitHub last commit](https://img.shields.io/github/last-commit/norman/telescope)](https://github.com/norman/telescope) - Flexible and highly customizable testing library.
- [luassert ![GitHub Repo Stars](https://img.shields.io/github/stars/Olivine-Labs/luassert) ![GitHub last commit](https://img.shields.io/github/last-commit/Olivine-Labs/luassert)](https://github.com/Olivine-Labs/luassert) - Assertion library extending Lua's built-in assertions.
- [lust ![GitHub Repo Stars](https://img.shields.io/github/stars/bjornbytes/lust) ![GitHub last commit](https://img.shields.io/github/last-commit/bjornbytes/lust)](https://github.com/bjornbytes/lust) - Minimal test framework.


### Foreign Function Interfaces
- [LuaJIT FFI](http://luajit.org/ext_ffi.html) - LuaJIT's mechanism for calling external C functions and using C data structures from pure Lua code.
- [luaffi ![GitHub Repo Stars](https://img.shields.io/github/stars/jmckaskill/luaffi) ![GitHub last commit](https://img.shields.io/github/last-commit/jmckaskill/luaffi)](https://github.com/jmckaskill/luaffi) - Standalone FFI library, compatible with the LuaJIT FFI interface.


### Analysis Tools and ASTs
- [luadec51 ![GitHub Repo Stars](https://img.shields.io/github/stars/sztupy/luadec51) ![GitHub last commit](https://img.shields.io/github/last-commit/sztupy/luadec51)](https://github.com/sztupy/luadec51) - Lua Decompiler for Lua version 5.1.
- [luacov](http://keplerproject.github.io/luacov/) - Simple coverage analyzer, used by busted and telescope for checking test coverage.
  - [luacov-coveralls ![GitHub Repo Stars](https://img.shields.io/github/stars/moteus/luacov-coveralls) ![GitHub last commit](https://img.shields.io/github/last-commit/moteus/luacov-coveralls)](https://github.com/moteus/luacov-coveralls) - LuaCov reporter for coveralls.io.
- [luacheck ![GitHub Repo Stars](https://img.shields.io/github/stars/mpeterv/luacheck) ![GitHub last commit](https://img.shields.io/github/last-commit/mpeterv/luacheck)](https://github.com/mpeterv/luacheck) - Simple static analyzer which detects accidental globals and undefined or shadowed locals.
- [Metalua ![GitHub Repo Stars](https://img.shields.io/github/stars/fab13n/metalua) ![GitHub last commit](https://img.shields.io/github/last-commit/fab13n/metalua)](https://github.com/fab13n/metalua) - Pure Lua parser and compiler, used for generating ASTs. A number of other tools make use of the Metalua parser in this way.
- [LuaInspect ![GitHub Repo Stars](https://img.shields.io/github/stars/davidm/lua-inspect) ![GitHub last commit](https://img.shields.io/github/last-commit/davidm/lua-inspect)](https://github.com/davidm/lua-inspect) - Lua's most powerful code analysis and linting tool, built on Metalua. Used by ZeroBraneStudio, among others.
- [LuaMinify ![GitHub Repo Stars](https://img.shields.io/github/stars/stravant/LuaMinify) ![GitHub last commit](https://img.shields.io/github/last-commit/stravant/LuaMinify)](https://github.com/stravant/LuaMinify) - Minifier which also brings its own static analysis tools, lexer, and parser.
- [Typed Lua ![GitHub Repo Stars](https://img.shields.io/github/stars/andremm/typedlua) ![GitHub last commit](https://img.shields.io/github/last-commit/andremm/typedlua)](https://github.com/andremm/typedlua) - A typed superset of Lua that compiles to plain Lua.
- [lua-parser ![GitHub Repo Stars](https://img.shields.io/github/stars/andremm/lua-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/andremm/lua-parser)](https://github.com/andremm/lua-parser) - A Lua 5.3 parser written using LPegLabel, with improved error messages.


### Experimental, etc
- [punchdrunk.js ![GitHub Repo Stars](https://img.shields.io/github/stars/TannerRogalsky/punchdrunk) ![GitHub last commit](https://img.shields.io/github/last-commit/TannerRogalsky/punchdrunk)](https://github.com/TannerRogalsky/punchdrunk) - Moonshine + LÖVE API reimplementation = run LÖVE games in the browser.
- [luvit ![GitHub Repo Stars](https://img.shields.io/github/stars/luvit/luvit) ![GitHub last commit](https://img.shields.io/github/last-commit/luvit/luvit)](https://github.com/luvit/luvit) - Node.js's underlying architecture (libUV) with Lua on top instead of JavaScript.
- [graphql-lua ![GitHub Repo Stars](https://img.shields.io/github/stars/bjornbytes/graphql-lua) ![GitHub last commit](https://img.shields.io/github/last-commit/bjornbytes/graphql-lua)](https://github.com/bjornbytes/graphql-lua) - Lua implementation of [GraphQL](http://graphql.org/).


### Scriptable by Lua
- [luakit](https://luakit.github.io/luakit/) - Fast, small, webkit based browser framework extensible by Lua.
- [Hammerspoon](http://www.hammerspoon.org) - A powerful, extensible OS X automation tool. A community-maintained fork of [Mjolnir](http://www.mjolnir.io/).
- [kpie ![GitHub Repo Stars](https://img.shields.io/github/stars/skx/kpie) ![GitHub last commit](https://img.shields.io/github/last-commit/skx/kpie)](https://github.com/skx/kpie) - A scripting utility to juggle windows.
- [lumail](https://lumail.org/) - A console-based mail client, with extensive scripting capabilities.
- [AwesomeWM](https://awesomewm.org/) - A highly configurable and extensible window manager for X, scripted and configured by Lua.
- [Textadept](https://foicica.com/textadept/) - Extremely lightweight, customizable, cross-platform editor, written (mostly) in (and scripted by) Lua.
- [KoReader ![GitHub Repo Stars](https://img.shields.io/github/stars/koreader/koreader) ![GitHub last commit](https://img.shields.io/github/last-commit/koreader/koreader)](https://github.com/koreader/koreader) - An ebook reader application supports PDF, DJVU, EPUB, FB2 and much more, running on Kindle, Kobo, PocketBook and Android devices.


### Miscellaneous
- [MoonScript](http://moonscript.org/) - Moonscript is a dynamic scripting language that compiles to Lua. It reduces verbosity and provides a rich set of features like comprehensions and classes. Its author calls it 'CoffeeScript for Lua'.
- [sitegen](http://leafo.net/sitegen/) - A static site generator which uses MoonScript and supports HTML and Markdown, page grouping, and plugins.


## Resources

### Community
- [lua-l](http://www.lua.org/lua-l.html) - The official Lua mailing list, and one of the focal points of the Lua community.
- [Lua.Space](http://lua.space/) - The Lua community blog.
- [Lua Users Foundation](https://github.com/lua-users-foundation) - An association of individuals with the mission of supporting and promoting Lua and its community and ecosystems.
- [lua-users.org](http://lua-users.org/) - A site for and by users of Lua, featuring an IRC channel, a web archive of lua-l, and a large wiki.
- Conferences/Meetups
  - [Lua Workshop](https://www.lua.org/community.html#workshop) - Annual 2-day meeting of the Lua community, in rotating locations.
  - [Lua Conf](http://luaconf.com/) - Annual 1-day Lua conference in Brazil.
  - [FOSDEM](https://fosdem.org/) - Annual 2-day gathering of F/OSS developers in Brussels which sometimes has a "Lua devroom".


### References
- [Reference Manual](http://www.lua.org/manual/5.3/) - The official definition of the Lua language.
- [lua-users wiki](http://lua-users.org/wiki/) - A large community-maintained collection of Lua information and resources, supplementing the official website.
- [Lua Unofficial FAQ](http://www.luafaq.org/) - Answers all sorts of Lua-related questions, including many of the form 'How to ___?'.


### Glossaries
- [Lua 5.3 Glossary](https://rawgit.com/dlaurie/lua-notes/master/glossary.html) - A glossary of some essential Lua terms.


### Style Guides
- [Lua-users style guide](http://lua-users.org/wiki/LuaStyleGuide) - A general, high-level style guide; unopinionated, easily agreed on.
- [Olivine style guide ![GitHub Repo Stars](https://img.shields.io/github/stars/Olivine-Labs/lua-style-guide) ![GitHub last commit](https://img.shields.io/github/last-commit/Olivine-Labs/lua-style-guide)](https://github.com/Olivine-Labs/lua-style-guide) - A more opinionated and specific, and therefore more rigorous, guide.


### Tutorials
- [Lua Crash Course](http://www.coppeliarobotics.com/helpFiles/en/luaCrashCourse.htm) - Short crash course readover, or reference for when you forget the basics.
- [Learn Lua in 15 Minutes](http://tylerneylon.com/a/learn-lua/) - A well-commented example file which covers the basics.
- [Learning Lua from JS](http://phrogz.net/lua/LearningLua_FromJS.html) - An overview of the similarities and differences between Lua and JS; a great start for JavaScript folks looking to pick up Lua.
- [lua-users tutorial](http://lua-users.org/wiki/LuaTutorial) - In-depth collection of tutorials aimed at newcomers.
- [Lua Missions ![GitHub Repo Stars](https://img.shields.io/github/stars/kikito/lua_missions) ![GitHub last commit](https://img.shields.io/github/last-commit/kikito/lua_missions)](https://github.com/kikito/lua_missions) - A series of 'Missions' to work through which are designed to teach aspects of Lua along the way.
- [Creating an Image Server](http://leafo.net/posts/creating_an_image_server.html) - Walks through setting up and using OpenResty to build a simple image processing server; a great starting point for playing with OpenResty.


### Articles
- [Embedding Lua in C](https://debian-administration.org/article/264/Embedding_a_scripting_language_inside_your_C/C_code) - An introductory walkthrough of embedding Lua in a C program. A bit dated, but still a great walkthrough.
- [Lua: Good, bad, and ugly parts](http://notebook.kulchenko.com/programming/lua-good-different-bad-and-ugly-parts) - A thorough summary of the good, different, bad, and ugly aspects of Lua, including many subtle quirks, by the author of ZeroBraneStudio.
- [Lua states, libraries, coroutines and memory](http://www.thijsschreijer.nl/blog/?p=693) - Diagrams and explains some more advanced concepts of the Lua VM, particularly when interfacing with C.


### Talks & Slides
- [Roberto's Talks](http://www.inf.puc-rio.br/~roberto/talks/index.html) - History of talks given by Lua's chief architect, with slides for each.
- [Lua Workshop Talks](http://www.lua.org/wshop14.html#abstracts) - High-quality talks are given at each ~annual Lua Workshop, and a history of them is online, slides included.


### Books
- [Programming in Lua](http://www.lua.org/pil/) - The authoritative intro to all aspects of Lua programming, written by Lua's chief architect. Three editions released; first edition available online.
- [Lua Quick Reference](https://foicica.com/lua/) - A quick reference on how to program in and embed Lua 5.1 through 5.3, by the creator of Textadept.
- [Programming Gems](http://www.lua.org/gems/) - A collection of articles covering existing wisdom and practices on programming well in Lua, in a broad variety of use cases.
- [Lua Programming](https://en.wikibooks.org/wiki/Lua_Programming) - A shorter overview of the language, up to date for Lua 5.2, and available online.


### Other Lists
- [awesome-resty ![GitHub Repo Stars](https://img.shields.io/github/stars/bungle/awesome-resty) ![GitHub last commit](https://img.shields.io/github/last-commit/bungle/awesome-resty)](https://github.com/bungle/awesome-resty) - A list like this one, but focused on OpenResty.
- [awesome-love2d ![GitHub Repo Stars](https://img.shields.io/github/stars/love2d-community/awesome-love2d) ![GitHub last commit](https://img.shields.io/github/last-commit/love2d-community/awesome-love2d)](https://github.com/love2d-community/awesome-love2d) - A list like this one, but focused on game dev and the LÖVE platform.
- [Where Lua is Used](https://sites.google.com/site/marbux/home/where-lua-is-used) - A comprehensive list of stand-alone programs written in or extensible using Lua.


## Contribute

Contributions welcome and wanted! Read the [contribution guidelines](contributing.md) first.

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, Lewis Ellis has waived all copyright and related or neighboring rights to this work.
