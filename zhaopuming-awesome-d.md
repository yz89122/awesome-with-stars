# Awesome D [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg) ![GitHub Repo stars](https://img.shields.io/github/stars/sindresorhus/awesome?style=social)](https://github.com/sindresorhus/awesome)
---

  A curated list of awesome D frameworks, libraries and software. Inspired by [awesome-python ![GitHub Repo stars](https://img.shields.io/github/stars/vinta/awesome-python?style=social)](https://github.com/vinta/awesome-python).
  
  I created this list so that when I needed something in the future, it would be easy to find. Most of the documents and links are collected from the [D forum](http://forum.dlang.org), the [D wiki](http://wiki.dlang.org), and the [D package repository](http://code.dlang.org). Exploring GitHub also helps as many of the libs are hosted there.
  
  If you know an interesting lib/app in D, please tell me by issue or a pull request :-).
  
# Contents 

- [Awesome D](#awesome-d)
	- Basic Information
		- [Official Website](#official-website)
		- [Getting Help](#getting-help)
		- [People](#people)
		- [Events](#events)
		- [Organizations](#organizations)
	- Documents
		- [Books](#books)
		- [Tutorials](#tutorials)
		- [Blogs](#blogs)
		- [Articles](#articles)
		- [API Doc](#api-docs)
	- Language Related 
		- [Package Management](#package-management)
		- [Compilers](#compilers)
		- [Dev Tools](#dev-tools)
		- [Build Tools](#build-tools)
		- [IDE](#ide)
		- [Lexers, Parsers, Generators](#lexers-parsers-parser-generators)
		- [Preprocessors](#preprocessors)
	- Compiler for other languages
		- [Javascript](#javascript)
	- Common/Utilities
		- [Basic](#basic)
		- [Containers](#containers)
	- Networking/Web Related
		- [Networking](#networking-library)
		- [Web Frameworks](#web-frameworks)
		- [Data&Serialization](#data-serialization)
	- Database
		- [Database clients](#database-clients)
	- GUI
		- [GUI Libs](#gui-libs)
	- OS
		- [Operating Systems](#os)
	- Gaming
		- [Bindings](#game-bindings)
		- [Frameworks](#game-frameworks)
		- [Games](#games)
	- Video
		- [Applications](#video-applications)
	- Image Processing
		- [Applications](#image-processing)
	- End-user applications (AppImages, Flatpaks, Snaps...)
		- [Applications](#end-user-applications)
	- Scientific
		- [Scientific](#scientific)
	- Machine Learning
		- [Machine Learning](#machine-learning)
	- [Parallel computing](#parallel-computing)
	- Others
		- [Text Processing](#text-processing)
		- [Command Line](#command-line)
		- [Logging](#logging)
		- [Configuration](#configuration)
		- [BlogEngine](#blog-engine)
		- [Testing](#testing)
		
- [Other Awesome Lists](#other-awesome-lists)


## Official Website

*Official Website URLs.*

* [dlang.org](http://dlang.org) - Official website for D.
* [wiki.dlang.org](http://wiki.dlang.org) - Official Wiki for D.
* [code.dlang.org](http://code.dlang.org) - Offical Library/Module Registry for D.
* [Github Organization](https://github.com/dlang) - Official GitHub organization for D. Repo for all official D tools & code.
* [forum.dlang.org](http://forum.dlang.org/) - Official forum. Many interesting discussions occurring on a daily basis.
* [blog.dlang.org](https://dlang.org/blog/) - Official blog.
* [Language Specification](http://dlang.org/spec.html) - D programming language specification.
* [Issue tracking](https://issues.dlang.org/) - Official issue tracking/reporting system for D. If you find bugs in the D compiler and/or libraries, please come and report them!

## Getting Help

*For when you're stuck.*

* [Official D Forum Learn Group](https://forum.dlang.org/group/learn) - Highest traffic site for answering D questions.
* [D on Stack Overflow](https://stackoverflow.com/questions/tagged/d) - Less traffic than forums but possibly easier to search.
* [D on Rosetta Code](https://rosettacode.org/wiki/Category:D) - Examples of how to do many basic things in D.

## People

*The people that made D the language it is.*

* [Walter Bright](http://www.walterbright.com/) - Father of D. Walter Bright is the creator and first implementer of the D programming language and has implemented compilers for several other languages.
* [Andrei Alexandrescu, PhD](http://erdani.com/) - C++ guru. Author of *The D Programming Language* and *Modern C++ Design*. With Walter Bright, Andrei co-designed many important features of D and authored a large part of D's standard library. Andrei works as a trainer in advanced C++ programming and algorithms and is now actively evangelizing D in the organization.
* [Átila Neves](https://atilaoncode.blog/) - [Deputy Leader of D](https://dlang.org/blog/2019/10/15/my-vision-of-ds-future/).
* **YOU** - Please add your information if you've done something interesting in D. It is you, the awesome people that made D awesome. 

## Events

* [DConf](http://dconf.org/) - the premier event where D luminaries exchange knowledge, insight, and inspiration on everything related to the D language and its ecosystem.

## Organizations

*Organizations that contribute to D projects.*

* [D Programming Language](https://github.com/dlang) - Official Organization, hosts DMD, Phobos and other official tools and libs.
* [LDC Developers](https://github.com/ldc-developers) - LDC releated projects.
* [DerelictOrg ![GitHub Repo stars](https://img.shields.io/github/stars/DerelictOrg) - A GitHub organization hosting all Derelict bindings including OpenGL and other multimedia/game related library bindings. (OpenGL 3, Bgfx, ENet,  SDL 2, GLFW 3，OpenGLES, Free Image, Assimp3, libtheora, libogg, libvorbis, SFML 2, libpq, PhysicsFS, Open Dynamics Engine, Lua, DevIL, OpenAL, ALURE?style=social)](https://github.com/DerelictOrg) - A GitHub organization hosting all Derelict bindings including OpenGL and other multimedia/game related library bindings. (OpenGL 3, Bgfx, ENet,  SDL 2, GLFW 3，OpenGLES, Free Image, Assimp3, libtheora, libogg, libvorbis, SFML 2, libpq, PhysicsFS, Open Dynamics Engine, Lua, DevIL, OpenAL, ALURE).
* [DlangScience](https://github.com/DlangScience) -A focal point and first port of call for scientific libraries and tooling for D.
* [Circular Studios](https://github.com/Circular-Studios) - We are a group of game developers at Rochester Institute of Technology building games and game tech. Hosts [Dash ![GitHub Repo stars](https://img.shields.io/github/stars/Circular-Studios/Dash?style=social)](https://github.com/Circular-Studios/Dash), a 3D game engine written in D, and other related libs.
* [d-gamedev-team](https://github.com/d-gamedev-team) - An organization of gamedev related repos, including a D gamedev toolkit called [gfm ![GitHub Repo stars](https://img.shields.io/github/stars/d-gamedev-team/gfm?style=social)](https://github.com/d-gamedev-team/gfm) and an [opengl tutorial in D ![GitHub Repo stars](https://img.shields.io/github/stars/d-gamedev-team/opengl-tutorials?style=social)](https://github.com/d-gamedev-team/opengl-tutorials).
* [EMSI](https://github.com/economicmodeling) - A Career building company that uses D as their main language. Hosts their opensource projects.
* [infognition](http://www.infognition.com/company.html) - Infognition is a self-funded and self-sustained company specializing in video processing and compression technologies for end-users and developers. They provide several opensource video related applications & tools written in D, hosted on [bitbucket](https://bitbucket.org/infognition/). They are also porting their main product--[Video Enchanser](http://www.infognition.com/VideoEnhancer/) from C/C++ to D.
* [libmir](https://github.com/libmir) - D's numeric library development team
* [sociomantic labs](https://www.sociomantic.com) - Berlin based company specializing in real-time bidding for online advertising. Main sponsor of the [annual D language conference](http://dconf.org). Has open-sourced large parts of their codebase as part of the [tsunami](https://github.com/sociomantic-tsunami) organization.
* [Symmetry Investments](http://symmetryinvestments.com/) - Symmetry Investments LP is an investment management company with approximately US$4.7 billion in assets under management as of 31 December 2018. Main sponsor of the [Symmetry Autumn of Code](https://dlang.org/blog/symmetry-autumn-of-code/). Have sponsored the development of [excel-d](https://dlang.org/blog/2017/05/31/project-highlight-excel-d/), [dpp ![GitHub Repo stars](https://img.shields.io/github/stars/atilaneves/dpp?style=social)](https://github.com/atilaneves/dpp), [autowrap ![GitHub Repo stars](https://img.shields.io/github/stars/kaleidicassociates/autowrap?style=social)](https://github.com/kaleidicassociates/autowrap), [mir-algorithm ![GitHub Repo stars](https://img.shields.io/github/stars/libmir/mir-algorithm?style=social)](https://github.com/libmir/mir-algorithm), and various other projects.
* [HuntLabs](https://www.huntlabs.net) - A technology group using DLang. Have pure D language implementation of quickly develop server-side applications and build distributed system services.

## Books
*D related books.* You can find another list of books on the [Books](http://wiki.dlang.org/Books) D wiki page.
* [TDPL](http://www.amazon.com/The-Programming-Language-Andrei-Alexandrescu/dp/0321635361/) - *The D Programming Language* by Andrei Alexandrescu.
* [Programming in D](http://ddili.org/ders/d.en/index.html) - A very detailed book about programming in D by Ali Çehreli  covering many areas of the language. Has a free online version and is suitable for beginners. 
* [D Cookbook](http://www.packtpub.com/application-development/d-cookbook) - A recipe-packed reference guide filled with practical tasks that are concisely explained to develop and broaden the user's abilities with the D programming language. by Adam D. Ruppe. Here is an interesting [review of the book](http://www.bfilipek.com/2014/08/review-of-d-cookbook.html).
* [Learning D](https://www.packtpub.com/application-development/learning-d) - This book is intended for those with some background in a C-family language who want to learn how to apply their knowledge and experience to D. (...) This book will help you get up to speed with the language and avoid common pitfalls that arise when translating C-family experience to D.
* [D Web Development](https://www.packtpub.com/web-development/d-web-development) - Whether you are new to the world of D, or already have developed applications in D, or if you want to leverage the power of D for web development, then this book is ideal for you.

## Tutorials
*D related tutorials.*
* [The Dlang Tour](https://tour.dlang.org/) - An interactive tutorial for D, inspired by Golang Tour.
* [Pragmatic D tutorial](http://qznc.github.io/d-tut/index.html) - This is a pragmatic introduction to the D Programming Language. by Andreas Zwinkau.
* [D Template Tutorial ![GitHub Repo stars](https://img.shields.io/github/stars/PhilippeSigaud/D-templates-tutorial?style=social)](https://github.com/PhilippeSigaud/D-templates-tutorial) - A tutorial dedicated to D Templates. Very good explanation about templates. Has pdf version. by Philippe Sigaud.
* [Component programming in D](http://www.drdobbs.com/architecture-and-design/component-programming-in-d/240008321) - An article written by Walter Bright that details how D's functional support leads to a flexible and beautiful component programming style.
* [Component programming with ranges](http://wiki.dlang.org/Component_programming_with_ranges) - A detailed blog post about how to do component programming in a idiomatic D way with ranges, with a full working example.
* [Functional image processing in D](http://blog.thecybershadow.net/2014/03/21/functional-image-processing-in-d/) - A very interesting tutorial about writing an image processing lib in D. Shows the power of D's templates/CTFE/Ranges/UFCS for functional style programming.
* [OpenGL tutorials ![GitHub Repo stars](https://img.shields.io/github/stars/d-gamedev-team/opengl-tutorials?style=social)](https://github.com/d-gamedev-team/opengl-tutorials) - OpenGL tutorials in D.
* [Creating a simple JSON serialiser in D](https://bradley.chatha.dev/Home/Blog?post=JsonSerialiser1) - D metaprogramming tutorial series

### Bare metal / kernel development
* [D Bare bones](http://wiki.osdev.org/D_Bare_Bones) - kernel hello world in D (using GDC compiler)
* [D barebone with ldc2](http://wiki.osdev.org/D_barebone_with_ldc2) - another kernel hello world in D (using LDC compiler)
* [XOmB bare bones](http://wiki.xomb.org/index.php?title=XOmB_Bare_Bones) - an exokernel operating system written in D. [Main page](http://wiki.xomb.org/index.php?title=Main_Page), [github ![GitHub Repo stars](https://img.shields.io/github/stars/xomboverlord/xomb?style=social)](https://github.com/xomboverlord/xomb/tree/unborn).
* [Bare Metal ARM Cortex-M GDC Cross Compiler](http://wiki.dlang.org/Bare_Metal_ARM_Cortex-M_GDC_Cross_Compiler) - building a bare metal ARM Cortex-M (arm-none-eabi) GDC cross compiler for a Linux host.

## Blogs
*D related blogs.*

* [blog.dlang.org](https://dlang.org/blog/) - Official blog.
* [/r/d_language on Reddit](https://www.reddit.com/r/d_language/) - A feed of news and blog posts about D.
* [This week in D](http://arsdnet.net/this-week-in-d) - A weekly overview of activity in the D community and brief advice columns to help you get the most out of the D Programming Language. 
* [Planet D](http://planet.dsource.org) - A repository of co-authored D-specific blogs maintained by Vladimir Panteleev.
* [D Idioms](http://p0nce.github.io/d-idioms/) - A great blog for many useful idioms with D programming.
* [GTK-D coding](http://gtkdcoding.com/) - Simple examples of how to use GtkD to build GUI applications.

## Articles
*D related Aritcles.*

* [Purity in D](http://klickverbot.at/blog/2012/05/purity-in-d/) - An article that explains the design principles behind D's purity feature.
* [Hidden treasures in the D standard library](https://web.archive.org/web/20171119072212/http://nomad.so/2014/08/hidden-treasure-in-the-d-standard-library/) - An article talking about several useful functions and templates in Phobos.
* [Porting D Runtime to ARM ![GitHub Repo stars](https://img.shields.io/github/stars/JinShil/D_Runtime_ARM_Cortex-M_study?style=social)](https://github.com/JinShil/D_Runtime_ARM_Cortex-M_study) - A study about porting a minimal D runtime to ARM Cortex-M preprocessors.
* [D is for Data Science](http://tech.adroll.com/blog/data/2014/11/17/d-is-for-data-science.html) - A great post about how D is suitable for data science, particularly, replacing the role of python scripts for fast prototyping.
* [D Functional Garden](https://garden.dlang.io/)

## Package Management

*Libraries for package and dependency management.*

* [code.dlang.org](http://code.dlang.org/) - Official D library repository. Backed by dub.
* [dub ![GitHub Repo stars](https://img.shields.io/github/stars/dlang/dub?style=social)](https://github.com/dlang/dub) - Official package and build management system for D.

 
## Compilers

*Compile software from source code.*

* [dmd ![GitHub Repo stars](https://img.shields.io/github/stars/dlang/dmd?style=social)](https://github.com/dlang/dmd) - The reference compiler for the D programming language. Stable, builds insanely fast, very good for learning and rapid prototyping/development. Currently the frontend is implemented in D, and shared between dmd, ldc and gdc, the backend is implemented in C++.
* [ldc ![GitHub Repo stars](https://img.shields.io/github/stars/ldc-developers/ldc?style=social)](https://github.com/ldc-developers/ldc) - The LLVM-based D compiler. Uses the DMD frontend and LLVM backend. Builds slower than dmd, but generates more optimized code than DMD. It supports all the target platforms of LLVM.
* [gdc ![GitHub Repo stars](https://img.shields.io/github/stars/D-Programming-GDC/GDC?style=social)](https://github.com/D-Programming-GDC/GDC) - GNU D Compiler. Use DMD frontend and GCC backend. Currently targets the most platforms due to the use of GCC. Generated code runs faster than DMD in most cases, on par with LDC. In the process of integration with the official GCC toolchain.
* [sdc ![GitHub Repo stars](https://img.shields.io/github/stars/SDC-Developers/SDC?style=social)](https://github.com/SDC-Developers/SDC) - The Stupid D Compiler. Written in D. Grows Smarter every day.
* [dil](https://code.google.com/p/dil/) - A compiler for the D programming language. Written in D.


## Dev Tools

*Tools for more productive D development.*

* [D-Scanner ![GitHub Repo stars](https://img.shields.io/github/stars/dlang-community/D-Scanner?style=social)](https://github.com/dlang-community/D-Scanner) - Swiss-army knife for D source code (linting, static analysis, D code parsing, etc.)
* [dfmt ![GitHub Repo stars](https://img.shields.io/github/stars/dlang-community/dfmt?style=social)](https://github.com/dlang-community/dfmt) - formatter for D source code


## Build Tools

*Manage projects and compile software from source code.*

* [dub ![GitHub Repo stars](https://img.shields.io/github/stars/dlang/dub?style=social)](https://github.com/dlang/dub) - De facto official package and build management system for D. Will be included officially soon.
* [scons-d](http://scons.org/) - Scons has built-in support for building D projects, thanks to Russel Winder.
* [premake ![GitHub Repo stars](https://img.shields.io/github/stars/premake/premake-dlang?style=social)](https://github.com/premake/premake-dlang) - Premake has built-in support for D projects
* [reggae ![GitHub Repo stars](https://img.shields.io/github/stars/atilaneves/reggae?style=social)](https://github.com/atilaneves/reggae) - meta build system in D
* [Makefile ![GitHub Repo stars](https://img.shields.io/github/stars/bioinfornatics/MakefileForD?style=social)](https://github.com/bioinfornatics/MakefileForD) - Makefile template for D projects
* [cmake-d ![GitHub Repo stars](https://img.shields.io/github/stars/dcarp/cmake-d?style=social)](https://github.com/dcarp/cmake-d) - CMake D Projects
* [cook2 ![GitHub Repo stars](https://img.shields.io/github/stars/gecko0307/Cook2?style=social)](https://github.com/gecko0307/Cook2) - Fast incremental build tool intended for projects in D
* [button](http://jasonwhite.github.io/button/) - A universal build system to build your software at the push of a button.
* [wild ![GitHub Repo stars](https://img.shields.io/github/stars/Vild/Wild?style=social)](https://github.com/Vild/Wild) - Wild build system, used to build the [PowerNex ![GitHub Repo stars](https://img.shields.io/github/stars/Vild/PowerNex?style=social)](https://github.com/Vild/PowerNex) kernel

## IDE

*Integrated Development Environment.*

* [Mono-D ![GitHub Repo stars](https://img.shields.io/github/stars/aBothe/Mono-D?style=social)](https://github.com/aBothe/Mono-D) - A D language addon for [Xamarin Studio](http://xamarin.com/)/[MonoDevelop](http://www.monodevelop.com/). With dub support.
* [Visual D ![GitHub Repo stars](https://img.shields.io/github/stars/dlang/visuald?style=social)](https://github.com/dlang/visuald) - Visual Studio extension for the D programming language.
* [DDT](http://ddt-ide.github.io/) - Eclipse plugin for the D programming language.
* [DCD ![GitHub Repo stars](https://img.shields.io/github/stars/Hackerpilot/DCD?style=social)](https://github.com/Hackerpilot/DCD) - Independent auto-complete program for the D programming language. Could be used with editors like vim, emacs, sublime text, textadept, and zeus. See [editors support ![GitHub Repo stars](https://img.shields.io/github/stars/Hackerpilot/DCD?style=social)](https://github.com/Hackerpilot/DCD/wiki/IDEs-and-Editors-with-DCD-support).
* [Dexed ![GitHub Repo stars](https://img.shields.io/github/stars/Akira13641/dexed?style=social)](https://github.com/Akira13641/dexed) - IDE for the D programming language, its compilers, tools and libraries.
* [Dlang IDE ![GitHub Repo stars](https://img.shields.io/github/stars/buggins/dlangide?style=social)](https://github.com/buggins/dlangide) - D language IDE based on [DlangUI ![GitHub Repo stars](https://img.shields.io/github/stars/buggins/dlangui?style=social)](https://github.com/buggins/dlangui). This is a pure D implementation.
* [D Language Server ![GitHub Repo stars](https://img.shields.io/github/stars/d-language-server/dls?style=social)](https://github.com/d-language-server/dls) - Language Server Protocol (LSP) implementation for D.  Adds modern IDE features to any editor with LSP support (VSCode, Sublime, Atom, Emacs, Vim/Neovim)
* [Dutyl ![GitHub Repo stars](https://img.shields.io/github/stars/idanarye/vim-dutyl?style=social)](https://github.com/idanarye/vim-dutyl) - Vim plugin that integrates various D development tools

## Lexers, Parsers, Parser Generators

* [libdparse ![GitHub Repo stars](https://img.shields.io/github/stars/Hackerpilot/libdparse?style=social)](https://github.com/Hackerpilot/libdparse) - A D language lexer and parser, (possibly) future standard D parser/lexer.
* [Martin Nowak's Lexer ![GitHub Repo stars](https://img.shields.io/github/stars/MartinNowak/lexer?style=social)](https://github.com/MartinNowak/lexer) - A lexer generator.
* [Mono-D's DParser ![GitHub Repo stars](https://img.shields.io/github/stars/aBothe/D_Parser?style=social)](https://github.com/aBothe/D_Parser) - A D parser written in C# and used in Mono-D.
* [Pegged ![GitHub Repo stars](https://img.shields.io/github/stars/PhilippeSigaud/Pegged?style=social)](https://github.com/PhilippeSigaud/Pegged) - A Parsing Expression Grammar (PEG) module written in D.
* [Goldie](https://bitbucket.org/Abscissa/goldie/wiki/Home) - Goldie Parsing System.
* [ctpg ![GitHub Repo stars](https://img.shields.io/github/stars/youxkei/ctpg?style=social)](https://github.com/youxkei/ctpg) - Compile-Time Parser (with converter) Generator written in D.
* [dunnart ![GitHub Repo stars](https://img.shields.io/github/stars/pwil3058/dunnart?style=social)](https://github.com/pwil3058/dunnart) - LALR(1) Parser Generator written in D.

## Preprocesors

* [warp ![GitHub Repo stars](https://img.shields.io/github/stars/facebookarchive/warp?style=social)](https://github.com/facebookarchive/warp) - A fast preprocessor for C and C++ used in Facebook infrastructure. Written by Walter Bright.

## Javascript
* [higgs ![GitHub Repo stars](https://img.shields.io/github/stars/higgsjs/Higgs?style=social)](https://github.com/higgsjs/Higgs) -  Higgs JavaScript Virtual Machine, implemented in D.

## Basic

* [hunt ![GitHub Repo stars](https://img.shields.io/github/stars/huntlabs/hunt?style=social)](https://github.com/huntlabs/hunt) - A refined core library for D programming language. The module has concurrency / collection / event / io / logging / text / serialize and more.
* [hunt-time ![GitHub Repo stars](https://img.shields.io/github/stars/huntlabs/hunt-time?style=social)](https://github.com/huntlabs/hunt-time) - A time library and similar to Joda-time and Java.time api.
* [hunt-validation ![GitHub Repo stars](https://img.shields.io/github/stars/huntlabs/hunt-validation?style=social)](https://github.com/huntlabs/hunt-validation) - A data validation library for DLang based on hunt library.

## Containers
* [EMSI containers ![GitHub Repo stars](https://img.shields.io/github/stars/economicmodeling/containers?style=social)](https://github.com/economicmodeling/containers) -  Containers that do not use the GC 
- [memutils ![GitHub Repo stars](https://img.shields.io/github/stars/etcimon/memutils?style=social)](https://github.com/etcimon/memutils) - Overhead allocators, allocator-aware containers and lifetime management for D objects
- [dlib.container ![GitHub Repo stars](https://img.shields.io/github/stars/gecko0307/dlib?style=social)](https://github.com/gecko0307/dlib) - generic data structures (GC-free dynamic and associative arrays and more)
- [std.rcstring ![GitHub Repo stars](https://img.shields.io/github/stars/burner/std.rcstring?style=social)](https://github.com/burner/std.rcstring) - A reference counted string implementation for D's build in string construct

## Web Frameworks

*Networking library*
* [hunt-net ![GitHub Repo stars](https://img.shields.io/github/stars/huntlabs/hunt-net?style=social)](https://github.com/huntlabs/hunt-net) - High-performance network library for D programming language, event-driven asynchonous implemention(IOCP / kqueue / epoll).
* [hunt-http ![GitHub Repo stars](https://img.shields.io/github/stars/huntlabs/hunt-http?style=social)](https://github.com/huntlabs/hunt-http) - HTTP/1 and HTTP/2 protocol library for D.
* [hunt-stomp ![GitHub Repo stars](https://img.shields.io/github/stars/huntlabs/hunt-stomp?style=social)](https://github.com/huntlabs/hunt-stomp) - STOMP for websocket protocol library implement in D.
* [libasync ![GitHub Repo stars](https://img.shields.io/github/stars/etcimon/libasync?style=social)](https://github.com/etcimon/libasync) -  Cross-platform event loop library of asynchronous objects
* [libhttp2 ![GitHub Repo stars](https://img.shields.io/github/stars/etcimon/libhttp2?style=social)](https://github.com/etcimon/libhttp2) -  HTTP/2 library in D, translated from nghttp2
* [collie ![GitHub Repo stars](https://img.shields.io/github/stars/huntlabs/collie?style=social)](https://github.com/huntlabs/collie) -  An asynchronous event-driven network framework written in dlang, like netty framework in D.
* [dlang-requests ![GitHub Repo stars](https://img.shields.io/github/stars/ikod/dlang-requests?style=social)](https://github.com/ikod/dlang-requests) - HTTP client library inspired by python-requests

*Full stack web frameworks.*
* [Hunt Framework ![GitHub Repo stars](https://img.shields.io/github/stars/huntlabs/hunt-framework?style=social)](https://github.com/huntlabs/hunt-framework/) - Hunt is a high-level D Programming Language Web framework that encourages rapid development and clean, pragmatic design. It lets you build high-performance Web applications quickly and easily.
* [vibe.d](http://vibed.org/) - Asynchronous I/O Web Framework that doesn’t get in your way, written in D.
* [arsd ![GitHub Repo stars](https://img.shields.io/github/stars/adamdruppe/arsd?style=social)](https://github.com/adamdruppe/arsd) - Adam D. Ruppe's web framework.
* [cmsed ![GitHub Repo stars](https://img.shields.io/github/stars/rikkimax/Cmsed?style=social)](https://github.com/rikkimax/Cmsed) - A component library for Vibe that functions as a CMS.
* [Diamond](https://diamondmvc.org/) - Full-stack web-framework based on vibe.d, targetting enterprise development and high-performance web solutions for both small and big projects.

*RPC library*
* [grpc ![GitHub Repo stars](https://img.shields.io/github/stars/huntlabs/grpc-dlang?style=social)](https://github.com/huntlabs/grpc-dlang) - Grpc for D programming language, hunt-http library based.
* [kissrpc ![GitHub Repo stars](https://img.shields.io/github/stars/huntlabs/kissrpc?style=social)](https://github.com/huntlabs/kissrpc) - Fast and light, flatbuffers based rpc framework.
* [Hprose ![GitHub Repo stars](https://img.shields.io/github/stars/hprose/hprose-d?style=social)](https://github.com/hprose/hprose-d) - A very newbility RPC Library for D, and it support 25+ languages now.
* [Apache Thrift](https://thrift.apache.org/) - A lightweight, language-independent, featureful RPC framework.  Thrift provides clean abstractions for data transport, data serialization, code generation, and application level processing.  [Dub package](http://code.dlang.org/packages/apache-thrift)

*Gossip*

* [hunt-gossip ![GitHub Repo stars](https://img.shields.io/github/stars/huntlabs/hunt-gossip?style=social)](https://github.com/huntlabs/hunt-gossip) - A Apache V2 gossip protocol implementation for D programming language.

*Cache*

* [hunt-cache ![GitHub Repo stars](https://img.shields.io/github/stars/huntlabs/hunt-cache?style=social)](https://github.com/huntlabs/hunt-cache) - D language universal cache library, using radix, redis and memcached.

## Data serialization
*Json, XML, protobuf and other data serialization libs.*

### Binary Serilization
* [flatbuffers ![GitHub Repo stars](https://img.shields.io/github/stars/huntlabs/flatbuffers?style=social)](https://github.com/huntlabs/flatbuffers) - D Programming Language implementation of the google flatbuffers library.
* [cerealed ![GitHub Repo stars](https://img.shields.io/github/stars/atilaneves/cerealed?style=social)](https://github.com/atilaneves/cerealed)  - Serialisation library for D 
* [dproto ![GitHub Repo stars](https://img.shields.io/github/stars/msoucy/dproto?style=social)](https://github.com/msoucy/dproto) - Google Protocol Buffer support in D.

### JSON

* [vibe.data.json](http://vibed.org/api/vibe.data.json/) - JSON functions in Vibe.d. Currently the best implementation I used.
* [fast.json ![GitHub Repo stars](https://img.shields.io/github/stars/mleise/fast?style=social)](https://github.com/mleise/fast) -  A library for D that aims to provide the fastest possible implementation of some every day routines.
* [std.json](http://dlang.org/phobos/std_json.html) - D's standard library JSON module. Needs refinement.
* [painlessjson ![GitHub Repo stars](https://img.shields.io/github/stars/BlackEdder/painlessjson?style=social)](https://github.com/BlackEdder/painlessjson) - Convert between D types and std.json.
* [std.data.json ![GitHub Repo stars](https://img.shields.io/github/stars/s-ludwig/std_data_json?style=social)](https://github.com/s-ludwig/std_data_json) - Phobos candidate for JSON serialization (based on Vibed)
* [asdf ![GitHub Repo stars](https://img.shields.io/github/stars/tamediadigital/asdf?style=social)](https://github.com/tamediadigital/asdf) - Cache oriented string based JSON representation for fast read & writes and serialisatoin.

### XML

* [orange ![GitHub Repo stars](https://img.shields.io/github/stars/jacob-carlborg/orange?style=social)](https://github.com/jacob-carlborg/orange) - General purpose serializer (currently only supports XML)
* [std.experimental.xml ![GitHub Repo stars](https://img.shields.io/github/stars/lodo1995/experimental.xml?style=social)](https://github.com/lodo1995/experimental.xml) - Phobos candidate for a XML serialization
* [dom.d] - an xml/html DOM based on what Javascript provides in browsers

## Database clients
*Clients and bindings to C bliencts for relational and nosql databases.*

* [hunt-entity ![GitHub Repo stars](https://img.shields.io/github/stars/huntlabs/hunt-entity?style=social)](https://github.com/huntlabs/hunt-entity) - Hunt entity is an object-relational mapping tool for the D programming language. Referring to the design idea of JPA, support PostgreSQL / MySQL / SQLite.
* [hunt-database ![GitHub Repo stars](https://img.shields.io/github/stars/huntlabs/hunt-database?style=social)](https://github.com/huntlabs/hunt-database) - Hunt database abstraction layer for D programing language, support PostgreSQL / MySQL / SQLite.
* [vibe.d ![GitHub Repo stars](https://img.shields.io/github/stars/rejectedsoftware/vibe.d?style=social)](https://github.com/rejectedsoftware/vibe.d) - Vibe.d has internal support for Redis and MongoDB, which are very stable. Soon, the database drivers will be separated into independent projects.
* [mysql-native ![GitHub Repo stars](https://img.shields.io/github/stars/mysql-d/mysql-native?style=social)](https://github.com/mysql-d/mysql-native) - A MySQL client implemented in native D.
* [ddb ![GitHub Repo stars](https://img.shields.io/github/stars/pszturmaj/ddb?style=social)](https://github.com/pszturmaj/ddb) - Database access for D2. Currently only supports PostgreSQL.
* [arsd ![GitHub Repo stars](https://img.shields.io/github/stars/adamdruppe/arsd?style=social)](https://github.com/adamdruppe/arsd) - Adam D. Ruppe's library; in addition to a Web backend, it also has support for database access with database.d, sqlite.d, mysql.d and postgres.d.
* [ddbc ![GitHub Repo stars](https://img.shields.io/github/stars/buggins/ddbc?style=social)](https://github.com/buggins/ddbc) - DDBC is a DB Connector for D language (similar to JDBC). HibernateD (see below) uses ddbc for database abstraction.
* [hibernated ![GitHub Repo stars](https://img.shields.io/github/stars/buggins/hibernated?style=social)](https://github.com/buggins/hibernated) - HibernateD is an ORM for D (similar to [Hibernate](http://hibernate.org/)).
* [dvorm ![GitHub Repo stars](https://img.shields.io/github/stars/rikkimax/Dvorm?style=social)](https://github.com/rikkimax/Dvorm) - An ORM for D with Vibe support. Works with vibe.d and mysql-d, giving it the ability to access MongoDB and MySQL.
* [Tiny Redis](http://adilbaig.github.io/Tiny-Redis/) - Redis driver for D. Fast, Simple, Stable. Has no dependencies.

## Command Line
* [hunt-console ![GitHub Repo stars](https://img.shields.io/github/stars/huntlabs/hunt-console?style=social)](https://github.com/huntlabs/hunt-console) - Hunt console creation easier to create powerful command-line applications. 
* [tilix ![GitHub Repo stars](https://img.shields.io/github/stars/gnunn1/tilix?style=social)](https://github.com/gnunn1/tilix) -  A tiling terminal emulator for Linux using GTK+ 3.
* [scriptlike ![GitHub Repo stars](https://img.shields.io/github/stars/Abscissa/scriptlike?style=social)](https://github.com/Abscissa/scriptlike) - Utility library to aid writing script-like programs in D.
* [todod ![GitHub Repo stars](https://img.shields.io/github/stars/BlackEdder/todod?style=social)](https://github.com/BlackEdder/todod) - Todod is a command line based todo list manager. It also has support for shell interaction based on [linenoise ![GitHub Repo stars](https://img.shields.io/github/stars/antirez/linenoise?style=social)](https://github.com/antirez/linenoise).
* [d-colorize](http://code.dlang.org/packages/colorize) - A port of the ruby library [colorize ![GitHub Repo stars](https://img.shields.io/github/stars/fazibear/colorize?style=social)](https://github.com/fazibear/colorize). It add some methods to set color, background color and text effect on console easier using ANSI escape sequences.
* [terminal.d ![GitHub Repo stars](https://img.shields.io/github/stars/adamdruppe/arsd?style=social)](https://github.com/adamdruppe/arsd/blob/master/terminal.d) - Part of Adam Ruppe's [arsd ![GitHub Repo stars](https://img.shields.io/github/stars/adamdruppe/arsd?style=social)](https://github.com/adamdruppe/arsd) library supporting cursor and color manipulation on the console.
* [dexpect ![GitHub Repo stars](https://img.shields.io/github/stars/grogancolin/dexpect?style=social)](https://github.com/grogancolin/dexpect/) -  A D implementation of the expect framework. Handy for bash emulation.
* [Argon ![GitHub Repo stars](https://img.shields.io/github/stars/markuslaker/Argon?style=social)](https://github.com/markuslaker/Argon) -  A processor for command-line arguments, an alternative to Getopt, written in D. 
* [argsd ![GitHub Repo stars](https://img.shields.io/github/stars/burner/argsd?style=social)](https://github.com/burner/argsd) - A command line and config file parser for DLang
* [darg ![GitHub Repo stars](https://img.shields.io/github/stars/jasonwhite/darg?style=social)](https://github.com/jasonwhite/darg) - Robust command line argument parsing for D.
* [luneta ![GitHub Repo stars](https://img.shields.io/github/stars/fbeline/luneta?style=social)](https://github.com/fbeline/luneta) - A command-line fuzzy finder.

## GUI Libs
*Libraries for working with graphical user interface applications.*

* [DLangUI ![GitHub Repo stars](https://img.shields.io/github/stars/buggins/dlangui?style=social)](https://github.com/buggins/dlangui) - Cross Platform GUI for D programming language. My personal favorate, because it is written in D(not a binding), and is cross platform. DLangUI also has a good showcase in the IDE [DLangIDE ![GitHub Repo stars](https://img.shields.io/github/stars/buggins/dlangide?style=social)](https://github.com/buggins/dlangide).
* [GtkD ![GitHub Repo stars](https://img.shields.io/github/stars/gtkd-developers/GtkD?style=social)](https://github.com/gtkd-developers/GtkD) - GtkD is a D binding and OO wrapper of GTK+. GtkD is actively maintained and is currently the most stable GUI lib for D.
* [DWT ![GitHub Repo stars](https://img.shields.io/github/stars/d-widget-toolkit/dwt?style=social)](https://github.com/d-widget-toolkit/dwt) - A library for creating cross-platform GUI applications. GWT is a port of the Java SWT library to D. DWT was promoted as a semi-standard GUI library for D, but unfortunately didn't catch up popularity yet.
* [tkD ![GitHub Repo stars](https://img.shields.io/github/stars/nomad-software/tkd?style=social)](https://github.com/nomad-software/tkd) - GUI toolkit for the D programming language based on Tcl/Tk.
* [dqml ![GitHub Repo stars](https://img.shields.io/github/stars/filcuc/dqml?style=social)](https://github.com/filcuc/dqml) -  Qt Qml bindings for the D programming language.
* [Sciter-Dport ![GitHub Repo stars](https://img.shields.io/github/stars/midiway/sciter-dport?style=social)](https://github.com/midiway/sciter-dport) - D bindings for the [Sciter](http://sciter.com) - crossplatform HTML/CSS/script desktop UI toolkit.
* [LibUI ![GitHub Repo stars](https://img.shields.io/github/stars/Extrawurst/DerelictLibui?style=social)](https://github.com/Extrawurst/DerelictLibui) - Dynamic Binding for [libui ![GitHub Repo stars](https://img.shields.io/github/stars/andlabs/libui?style=social)](https://github.com/andlabs/libui)

*Note*: You can also find a list of GUI libs on [wiki.dlang.org](http://wiki.dlang.org/Libraries_and_Frameworks#GUI_Libraries), but not all of the libraries are actively maintained now.

## OS

*Operating Systems written in D*

* [PowerNex ![GitHub Repo stars](https://img.shields.io/github/stars/Vild/PowerNex?style=social)](https://github.com/Vild/PowerNex) -  A kernel written in D 
* [Trinix ![GitHub Repo stars](https://img.shields.io/github/stars/Bloodmanovski/Trinix?style=social)](https://github.com/Bloodmanovski/Trinix) -  Hybrid operating system for x64 PC written in D
* [XOmB ![GitHub Repo stars](https://img.shields.io/github/stars/xomboverlord/xomb?style=social)](https://github.com/xomboverlord/xomb) - An exokernel operating system written in D

## Game Bindings

*Bindings to game development related C libraries.*

* [DerelictOrg](https://github.com/DerelictOrg) - A GitHub organization hosting all Derelict bindings including:
	* OpenGL 3 (DerelictGL3), 
	* Bgfx (DerelictBgfx), 
	* ENet (DerelictENet),  
	* SDL 2 (DerelictSDL2), 
	* GLFW 3 (DerelictGLFW3), 
	* OpenGLES (DerelictGLES), 
	* Free Image (DerelictFI), 
	* Assimp3 (DerelictASSIMP3), 
	* libtheora (DerelictTheora),  
	* libogg (DerelictOgg), 
	* libvorbis (DerelictVorbis), 
	* SFML 2 (DerelictSFML2), 
	* libpq (DerelictPQ), 
	* PhysicsFS (DerelictPHYSFS), 
	* Open Dynamics Engine (DerelictODE), 
	* Lua (DerelictLua), 
	* DevIL (DerelictIL), 
	* OpenAL (DerelictAL), 
	* ALURE (DerelictALURE).

## Game Frameworks

* [DGame ![GitHub Repo stars](https://img.shields.io/github/stars/Dgame/Dgame?style=social)](https://github.com/Dgame/Dgame) - A 2D framework for the D programming Language. see <http://dgame-dev.de/>.
* [gfm ![GitHub Repo stars](https://img.shields.io/github/stars/d-gamedev-team/gfm?style=social)](https://github.com/d-gamedev-team/gfm) - D gamedev toolkit. see <http://d-gamedev-team.github.io/gfm/>.
* [Dash ![GitHub Repo stars](https://img.shields.io/github/stars/Circular-Studios/Dash?style=social)](https://github.com/Circular-Studios/Dash) - A free and open 3D game engine written in D. see <http://circularstudios.com/dash>.
* [DSFML ![GitHub Repo stars](https://img.shields.io/github/stars/Jebbs/DSFML?style=social)](https://github.com/Jebbs/DSFML) - A static binding of SFML in a way that makes sense for D. see <http://dsfml.com/>.
* [DAllegro5 ![GitHub Repo stars](https://img.shields.io/github/stars/SiegeLord/DAllegro5?style=social)](https://github.com/SiegeLord/DAllegro5/tree/master/allegro5) - D binding/wrapper to Allegro 5, a modern game programming library.
* [Voxelman ![GitHub Repo stars](https://img.shields.io/github/stars/MrSmith33/voxelman?style=social)](https://github.com/MrSmith33/voxelman) -  Plugin-based client-server voxel game engine written in D language
* [PolyplexEngine ![GitHub Repo stars](https://img.shields.io/github/stars/PolyplexEngine/libpp?style=social)](https://github.com/PolyplexEngine/libpp) - libpp is an XNA like framework written in D.

## Games

* [Spacecraft ![GitHub Repo stars](https://img.shields.io/github/stars/Ingrater/Spacecraft?style=social)](https://github.com/Ingrater/Spacecraft) - A 3d multiplayer deathmatch space game written in D 2.0.
* [Dtanks ![GitHub Repo stars](https://img.shields.io/github/stars/kingsleyh/dtanks?style=social)](https://github.com/kingsleyh/dtanks) - Robot Tank Battle Game.
* [Atrium] (https://github.com/gecko0307/atrium) - FPS game with physics based puzzles using OpenGL.

## Video applications

* [DerelictGL3 ![GitHub Repo stars](https://img.shields.io/github/stars/DerelictOrg/DerelictGL3?style=social)](https://github.com/DerelictOrg/DerelictGL3) - A dynamic binding to OpenGL for the D Programming Language.

## Image Processing

* [ArmageddonEngine ![GitHub Repo stars](https://img.shields.io/github/stars/CyberShadow/ae?style=social)](https://github.com/CyberShadow/ae/tree/master/utils/graphics) - Vladimir Panteleev's ae library has a package for image processing in functional style, which is described in the article [Functional Image Processing in D](http://blog.thecybershadow.net/2014/03/21/functional-image-processing-in-d/).
* [Blogsort](https://bitbucket.org/infognition/bsort/) -  A simple Windows app for viewing photos and preparing them for a blog.
* [dlib.image ![GitHub Repo stars](https://img.shields.io/github/stars/gecko0307/dlib?style=social)](https://github.com/gecko0307/dlib) - image processing (8 and 16 bits per channel, floating point operations, filtering, FFT, HDRI, graphics formats support including JPEG and PNG)
* [color.d ![GitHub Repo stars](https://img.shields.io/github/stars/adamdruppe/arsd?style=social)](https://github.com/adamdruppe/arsd/blob/master/color.d) + [bmp.d ![GitHub Repo stars](https://img.shields.io/github/stars/adamdruppe/arsd?style=social)](https://github.com/adamdruppe/arsd/blob/master/bmp.d), [jpg.d ![GitHub Repo stars](https://img.shields.io/github/stars/adamdruppe/arsd?style=social)](https://github.com/adamdruppe/arsd/blob/master/jpg.d), [png.d ![GitHub Repo stars](https://img.shields.io/github/stars/adamdruppe/arsd?style=social)](https://github.com/adamdruppe/arsd/blob/master/png.d) - basic color struct, HSL functions and reading and writing image files

## End-user applications
* [Drill ![GitHub Repo stars](https://img.shields.io/github/stars/yatima1460/drill?style=social)](https://github.com/yatima1460/drill) -  Search files without indexing, but clever crawling

## Machine Learning

* [vectorflow ![GitHub Repo stars](https://img.shields.io/github/stars/Netflix/vectorflow?style=social)](https://github.com/Netflix/vectorflow) - Nexflix's opensource deep learning framework.

## Parallel computing

* [DCompute ![GitHub Repo stars](https://img.shields.io/github/stars/libmir/dcompute?style=social)](https://github.com/libmir/dcompute) - [GPGPU with Native D for OpenCL and CUDA](https://dlang.org/blog/2017/07/17/dcompute-gpgpu-with-native-d-for-opencl-and-cuda/)
* [DerelictCUDA ![GitHub Repo stars](https://img.shields.io/github/stars/DerelictOrg/DerelictCUDA?style=social)](https://github.com/DerelictOrg/DerelictCUDA) - Dynamic bindings to the CUDA library for the D Programming Language.
* [DerelictCL ![GitHub Repo stars](https://img.shields.io/github/stars/DerelictOrg/DerelictCL?style=social)](https://github.com/DerelictOrg/DerelictCL) - Dynamic bindings to the OpenCL library for the D Programming Language.

## Scientific
*Scientific programming*

* [scid ![GitHub Repo stars](https://img.shields.io/github/stars/DlangScience/scid?style=social)](https://github.com/DlangScience/scid) -  Scientific library for the D programming language
* [dstats ![GitHub Repo stars](https://img.shields.io/github/stars/DlangScience/dstats?style=social)](https://github.com/DlangScience/dstats) -  A statistics library for D. 
* [mir ![GitHub Repo stars](https://img.shields.io/github/stars/libmir/mir?style=social)](https://github.com/libmir/mir) -  Sandbox for some mir packages: sparse tensors, Hoffman and others.
* [mir-algorithm ![GitHub Repo stars](https://img.shields.io/github/stars/libmir/mir?style=social)](https://github.com/libmir/mir) - N-dimensional arrays (matrixes, tensors), algorithms, general purpose library.
* [mir-random ![GitHub Repo stars](https://img.shields.io/github/stars/libmir/mir-random?style=social)](https://github.com/libmir/mir-random) -  Advanced Random Number Generators.
* [decimals ![GitHub Repo stars](https://img.shields.io/github/stars/rumbu13/decimal?style=social)](https://github.com/rumbu13/decimal) - Decimal library for D.

## Text Processing

* [hunt-markdown ![GitHub Repo stars](https://img.shields.io/github/stars/huntlabs/hunt-markdown?style=social)](https://github.com/huntlabs/hunt-markdown) - A markdown parsing and rendering library for D programming language. Support commonMark.
* [eBay's TSV utilities ![GitHub Repo stars](https://img.shields.io/github/stars/eBay/tsv-utils?style=social)](https://github.com/eBay/tsv-utils/) - Filtering, statistics, sampling, joins and other operations on TSV files. Very fast, especially good for large datasets.

## Logging
*Print with care.*

- [std.experimenatal.logger](https://dlang.org/phobos/std_experimental_logger.html) - Phobos's upcoming standard logging facility
- [dlogg ![GitHub Repo stars](https://img.shields.io/github/stars/NCrashed/dlogg?style=social)](https://github.com/NCrashed/dlogg) - Logging for concurrent applications and daemons with lazy and delayed logging, [logrotate](http://linuxcommand.org/man_pages/logrotate8.html) support.

## Configuration
*Parsing configuration files*

- [sdlang ![GitHub Repo stars](https://img.shields.io/github/stars/Abscissa/SDLang-D?style=social)](https://github.com/Abscissa/SDLang-D) - An SDL (Simple Declarative Language) library for D.
- [D:YAML ![GitHub Repo stars](https://img.shields.io/github/stars/kiith-sa/D-YAML?style=social)](https://github.com/kiith-sa/D-YAML) - YAML parser and emitter for the D programming language.
- [inifile-D ![GitHub Repo stars](https://img.shields.io/github/stars/burner/inifiled?style=social)](https://github.com/burner/inifiled) - A compile time ini file parser and writter generator for D

## Blog Engine
*Hosting blogs yourself*

- [mood ![GitHub Repo stars](https://img.shields.io/github/stars/Dicebot/mood?style=social)](https://github.com/Dicebot/mood) - simple vibe.d based blog engine

## Testing

- [dunit ![GitHub Repo stars](https://img.shields.io/github/stars/nomad-software/dunit?style=social)](https://github.com/nomad-software/dunit) - Advanced unit testing & mocking toolkit
- [unit-threaded ![GitHub Repo stars](https://img.shields.io/github/stars/atilaneves/unit-threaded?style=social)](https://github.com/atilaneves/unit-threaded) - Multi-threaded unit test framework

## Other Awesome Lists
Other amazingly awesome lists can be found in the [awesome-awesome ![GitHub Repo stars](https://img.shields.io/github/stars/emijrp/awesome-awesome?style=social)](https://github.com/emijrp/awesome-awesome) and  [awesome-awesomeness ![GitHub Repo stars](https://img.shields.io/github/stars/bayandin/awesome-awesomeness?style=social)](https://github.com/bayandin/awesome-awesomeness) projects.
