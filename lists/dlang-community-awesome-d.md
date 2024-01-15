# Awesome D [![Awesome](https://cdn.jsdelivr.net/gh/sindresorhus/awesome@d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
---

  A curated list of awesome D frameworks, libraries and software. Inspired by [awesome-python ![GitHub Repo Stars](https://img.shields.io/github/stars/vinta/awesome-python) ![GitHub last commit](https://img.shields.io/github/last-commit/vinta/awesome-python)](https://github.com/vinta/awesome-python).
  
  I created this list so that when I needed something in the future, it would be easy to find. Most of the documents and links are collected from the [D forum](https://forum.dlang.org), the [D wiki](https://wiki.dlang.org), and the [D package repository](https://code.dlang.org). Exploring GitHub also helps as many of the libs are hosted there.
  
  If you know an interesting lib/app in D, please tell us through [GitHub issues ![GitHub Repo Stars](https://img.shields.io/github/stars/dlang-community/awesome-d) ![GitHub last commit](https://img.shields.io/github/last-commit/dlang-community/awesome-d)](https://github.com/dlang-community/awesome-d/issues) or [edit this file ![GitHub Repo Stars](https://img.shields.io/github/stars/dlang-community/awesome-d) ![GitHub last commit](https://img.shields.io/github/last-commit/dlang-community/awesome-d)](https://github.com/dlang-community/awesome-d/edit/master/README.md).
  
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
	- Language Related 
		- [Package Management](#package-management)
		- [Compilers](#compilers)
		- [WIP Compilers](#wip-compilers)
		- [Dev Tools](#dev-tools)
		- [Build Tools](#build-tools)
		- [IDEs & Editors](#ides--editors)
		- [Lexers, Parsers, Generators](#lexers-parsers-parser-generators)
		- [Preprocessors](#preprocessors)
	- Compiler for other languages
		- [Javascript](#javascript)
	- Common/Utilities
		- [Basic](#basic)
		- [Containers](#containers)
	- Continuous Integration
		- [GitHub Actions](#github-actions)
		- [Testing Frameworks](#testing-frameworks)
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
		- [Game Engine Bindings](#game-engine-bindings)
		- [Frameworks](#game-frameworks)
		- [Games](#games)
	- Internationalization (i18n) / Globalization
		- [Internationalization](#internationalization)
	- Video
		- [Applications](#video-applications)
	- Image Processing
		- [Applications](#image-processing)
	- End-user applications (AppImages, Flatpaks, Snaps...)
		- [Applications](#end-user-applications)
	- Scientific
		- [Scientific](#scientific)
		- [Language Processing](#language-processing)
	- Machine Learning
		- [Machine Learning](#machine-learning)
	- [Parallel computing](#parallel-computing)
	- Others
		- [Text Processing](#text-processing)
		- [Command Line](#command-line)
		- [Logging](#logging)
		- [Configuration](#configuration)
		- [BlogEngine](#blog-engine)
		- [Dependency Injection](#dependency-injection)
		
- [Other Awesome Lists](#other-awesome-lists)


## Official Website

*Official Website URLs.*

* [dlang.org](https://dlang.org) - Official website for D.
* [wiki.dlang.org](https://wiki.dlang.org) - Official Wiki for D.
* [code.dlang.org](https://code.dlang.org) - Offical Library/Module Registry for D.
* [Github Organization](https://github.com/dlang) - Official GitHub organization for D. Repo for all official D tools & code.
* [forum.dlang.org](https://forum.dlang.org/) - Official forum. Many interesting discussions occurring on a daily basis.
* [blog.dlang.org](https://dlang.org/blog/) - Official blog.
* [Language Specification](https://dlang.org/spec/spec.html) - D programming language specification.
* [Issue tracking](https://issues.dlang.org/) - Official issue tracking/reporting system for D. If you find bugs in the D compiler and/or libraries, please come and report them!

## Getting Help

*For when you're stuck.*

* [Official D Forum Learn Group](https://forum.dlang.org/group/learn) - Highest traffic site for answering D questions.
* [D on Stack Overflow](https://stackoverflow.com/questions/tagged/d) - Less traffic than forums but possibly easier to search.
* [D on Rosetta Code](https://rosettacode.org/wiki/Category:D) - Examples of how to do many basic things in D.
* [D on Discord](https://discord.gg/invite/bMZk9Q4) - Another very active community for D conversations and question.

## People

*The people that made D the language it is.*

* [Walter Bright](https://www.walterbright.com/) - Father of D. Walter Bright is the creator and first implementer of the D programming language and has implemented compilers for several other languages.
* [Andrei Alexandrescu, PhD](http://erdani.com/) - C++ guru. Author of *The D Programming Language* and *Modern C++ Design*. With Walter Bright, Andrei co-designed many important features of D and authored a large part of D's standard library. Andrei works as a trainer in advanced C++ programming and algorithms and is now actively evangelizing D in the organization.
* [Átila Neves](https://atilaoncode.blog/) - [Deputy Leader of D](https://dlang.org/blog/2019/10/15/my-vision-of-ds-future/).
* **YOU** - Please add your information if you've done something interesting in D. It is you, the awesome people that made D awesome. 

## Events

* [DConf](https://dconf.org/) - the premier event where D luminaries exchange knowledge, insight, and inspiration on everything related to the D language and its ecosystem.

## Organizations

*Organizations that contribute to D projects.*

* [D Programming Language](https://github.com/dlang) - Official Organization, hosts DMD, Phobos and other official tools and libs.
* [LDC Developers](https://github.com/ldc-developers) - LDC releated projects.
* [DerelictOrg](https://github.com/DerelictOrg) - A GitHub organization hosting all Derelict bindings including OpenGL and other multimedia/game related library bindings. (OpenGL 3, Bgfx, ENet,  SDL 2, GLFW 3，OpenGLES, Free Image, Assimp3, libtheora, libogg, libvorbis, SFML 2, libpq, PhysicsFS, Open Dynamics Engine, Lua, DevIL, OpenAL, ALURE).
* [DlangScience](https://github.com/DlangScience) -A focal point and first port of call for scientific libraries and tooling for D.
* [Circular Studios](https://github.com/Circular-Studios) - We are a group of game developers at Rochester Institute of Technology building games and game tech. Hosts [Dash ![GitHub Repo Stars](https://img.shields.io/github/stars/Circular-Studios/Dash) ![GitHub last commit](https://img.shields.io/github/last-commit/Circular-Studios/Dash)](https://github.com/Circular-Studios/Dash), a 3D game engine written in D, and other related libs.
* [EMSI](https://github.com/economicmodeling) - A Career building company that uses D as their main language. Hosts their opensource projects.
* [infognition](http://www.infognition.com/company.html) - Infognition is a self-funded and self-sustained company specializing in video processing and compression technologies for end-users and developers. They provide several opensource video related applications & tools written in D, hosted on [bitbucket](https://bitbucket.org/infognition/). They are also porting their main product--[Video Enchanser](http://www.infognition.com/VideoEnhancer/) from C/C++ to D.
* [libmir](https://github.com/libmir) - D's numeric library development team
* [sociomantic labs](https://www.sociomantic.com) - Berlin based company specializing in real-time bidding for online advertising. Main sponsor of the [annual D language conference](http://dconf.org). Has open-sourced large parts of their codebase as part of the [tsunami](https://github.com/sociomantic-tsunami) organization.
* [Symmetry Investments](https://symmetryinvestments.com/) - Symmetry Investments LP is an investment management company with approximately US$4.7 billion in assets under management as of 31 December 2018. Main sponsor of the [Symmetry Autumn of Code](https://dlang.org/blog/symmetry-autumn-of-code/). Have sponsored the development of [excel-d](https://dlang.org/blog/2017/05/31/project-highlight-excel-d/), [dpp ![GitHub Repo Stars](https://img.shields.io/github/stars/atilaneves/dpp) ![GitHub last commit](https://img.shields.io/github/last-commit/atilaneves/dpp)](https://github.com/atilaneves/dpp), [autowrap ![GitHub Repo Stars](https://img.shields.io/github/stars/symmetryinvestments/autowrap) ![GitHub last commit](https://img.shields.io/github/last-commit/symmetryinvestments/autowrap)](https://github.com/symmetryinvestments/autowrap), [mir-algorithm ![GitHub Repo Stars](https://img.shields.io/github/stars/libmir/mir-algorithm) ![GitHub last commit](https://img.shields.io/github/last-commit/libmir/mir-algorithm)](https://github.com/libmir/mir-algorithm), and various other projects.
* [HuntLabs](https://www.huntlabs.net) - A technology group using DLang. Have pure D language implementation of quickly develop server-side applications and build distributed system services.

## Books
*D related books.* You can find another list of books on the [Books](https://wiki.dlang.org/Books) D wiki page.
* [TDPL](https://www.amazon.com/The-Programming-Language-Andrei-Alexandrescu/dp/0321635361/) - *The D Programming Language* by Andrei Alexandrescu.
* [Programming in D](https://ddili.org/ders/d.en/index.html) - A very detailed book about programming in D by Ali Çehreli  covering many areas of the language. Has a free online version and is suitable for beginners. 
* [D Cookbook](https://www.packtpub.com/product/d-cookbook/9781783287215) - A recipe-packed reference guide filled with practical tasks that are concisely explained to develop and broaden the user's abilities with the D programming language. by Adam D. Ruppe. Here is an interesting [review of the book](https://www.cppstories.com/2014/08/review-of-d-cookbook/).
* [Learning D](https://www.packtpub.com/product/learning-d/9781783552481) - This book is intended for those with some background in a C-family language who want to learn how to apply their knowledge and experience to D. (...) This book will help you get up to speed with the language and avoid common pitfalls that arise when translating C-family experience to D.
* [D Web Development](https://www.packtpub.com/product/d-web-development/9781785288890) - Whether you are new to the world of D, or already have developed applications in D, or if you want to leverage the power of D for web development, then this book is ideal for you.

## Tutorials
*D related tutorials.*
* [The Dlang Tour](https://tour.dlang.org/) - An interactive tutorial for D, inspired by Golang Tour.
* [Programming in Dlang](https://www.youtube.com/watch?v=HS7X9ERdjM4&list=PLvv0ScY6vfd9Fso-3cB4CGnSlW0E4btJV&ab_channel=MikeShah) - An introductory video series about programming in D. 
* [Pragmatic D tutorial](https://qznc.github.io/d-tut/index.html) - This is a pragmatic introduction to the D Programming Language. by Andreas Zwinkau.
* [D Template Tutorial ![GitHub Repo Stars](https://img.shields.io/github/stars/PhilippeSigaud/D-templates-tutorial) ![GitHub last commit](https://img.shields.io/github/last-commit/PhilippeSigaud/D-templates-tutorial)](https://github.com/PhilippeSigaud/D-templates-tutorial) - A tutorial dedicated to D Templates. Very good explanation about templates. Has pdf version. by Philippe Sigaud.
* [Component programming in D](https://www.drdobbs.com/architecture-and-design/component-programming-in-d/240008321) - An article written by Walter Bright that details how D's functional support leads to a flexible and beautiful component programming style.
* [Component programming with ranges](https://wiki.dlang.org/Component_programming_with_ranges) - A detailed blog post about how to do component programming in a idiomatic D way with ranges, with a full working example.
* [Functional image processing in D](https://blog.cy.md/2014/03/21/functional-image-processing-in-d/) - A very interesting tutorial about writing an image processing lib in D. Shows the power of D's templates/CTFE/Ranges/UFCS for functional style programming.
* [OpenGL tutorials ![GitHub Repo Stars](https://img.shields.io/github/stars/d-gamedev-team/opengl-tutorials) ![GitHub last commit](https://img.shields.io/github/last-commit/d-gamedev-team/opengl-tutorials)](https://github.com/d-gamedev-team/opengl-tutorials) - OpenGL tutorials in D.
* [Creating a simple JSON serialiser in D](https://bradley.chatha.dev/BlogPost/JsonSerialiser/0) - D metaprogramming tutorial series
* [Let's learn D programming Game Dev!](https://www.youtube.com/watch?v=j-Zm1zgSxMQ&list=PLgM-lc_kSqFQPF0UXgmFZpZalqcrSofe-&ab_channel=KiRill) - A video series on learning game development with D from Ki Rill. [His channel](https://www.youtube.com/@rillki-dev/) also posts other videos related to D programming.
* [DLang YouTube Tutorials from Mike Shah](https://www.youtube.com/playlist?list=PLvv0ScY6vfd9Fso-3cB4CGnSlW0E4btJV) - Series of tutorials covering basic to advanced features of the D programming language and standard library.

### Bare metal / kernel development
* [D Bare bones](https://wiki.osdev.org/D_Bare_Bones) - kernel hello world in D (using GDC compiler)
* [D barebone with ldc2](https://wiki.osdev.org/D_barebone_with_ldc2) - another kernel hello world in D (using LDC compiler)
* [XOmB bare bones](https://web.archive.org/web/20161214232759/http://wiki.xomb.org/index.php?title=XOmB_Bare_Bones) - an exokernel operating system written in D. [Main page](https://web.archive.org/web/20161201061242/http://wiki.xomb.org/index.php?title=Main_Page), [github ![GitHub Repo Stars](https://img.shields.io/github/stars/xomboverlord/xomb) ![GitHub last commit](https://img.shields.io/github/last-commit/xomboverlord/xomb)](https://github.com/xomboverlord/xomb/tree/unborn).
* [Bare Metal ARM Cortex-M GDC Cross Compiler](https://wiki.dlang.org/Bare_Metal_ARM_Cortex-M_GDC_Cross_Compiler) - building a bare metal ARM Cortex-M (arm-none-eabi) GDC cross compiler for a Linux host.

## Blogs
*D related blogs.*

* [blog.dlang.org](https://dlang.org/blog/) - Official blog.
* [/r/d_language on Reddit](https://www.reddit.com/r/d_language/) - A feed of news and blog posts about D.
* [This week in D](https://dpldocs.info/this-week-in-d/Blog.html) - A weekly overview of activity in the D community and brief advice columns to help you get the most out of the D Programming Language. 
* [Planet D](http://planet.dsource.org) - A repository of co-authored D-specific blogs maintained by Vladimir Panteleev.
* [D Idioms](https://p0nce.github.io/d-idioms/) - A great blog for many useful idioms with D programming.
* [GTK-D coding](https://gtkdcoding.com/) - Simple examples of how to use GtkD to build GUI applications.
* [Tasty D](https://tastyminerals.github.io/tasty-blog/) - A blog about learning the D programming language and various D language trivia.

## Articles
*D related Articles.*

* [Origins of the D programming language](https://dl.acm.org/doi/pdf/10.1145/3386323) - By Walter Bright, Andrei Alexandrescu, Michael Parker. The history and development of D language.
* [Purity in D](https://klickverbot.at/blog/2012/05/purity-in-d/) - An article that explains the design principles behind D's purity feature.
* [Hidden treasures in the D standard library](https://web.archive.org/web/20171119072212/http://nomad.so/2014/08/hidden-treasure-in-the-d-standard-library/) - An article talking about several useful functions and templates in Phobos.
* [Porting D Runtime to ARM ![GitHub Repo Stars](https://img.shields.io/github/stars/JinShil/D_Runtime_ARM_Cortex-M_study) ![GitHub last commit](https://img.shields.io/github/last-commit/JinShil/D_Runtime_ARM_Cortex-M_study)](https://github.com/JinShil/D_Runtime_ARM_Cortex-M_study) - A study about porting a minimal D runtime to ARM Cortex-M preprocessors.
* [D is for Data Science](https://tech.nextroll.com/blog/data/2014/11/17/d-is-for-data-science.html) - A great post about how D is suitable for data science, particularly, replacing the role of python scripts for fast prototyping.
* [D Functional Garden](https://garden.dlang.io/)

## Package Management

*Libraries for package and dependency management.*

* [code.dlang.org](https://code.dlang.org/) - Official D library repository. Backed by dub.
* [dub ![GitHub Repo Stars](https://img.shields.io/github/stars/dlang/dub) ![GitHub last commit](https://img.shields.io/github/last-commit/dlang/dub)](https://github.com/dlang/dub) - Official package and build management system for D.

 
## Compilers

*Compile software from source code.*

* [dmd ![GitHub Repo Stars](https://img.shields.io/github/stars/dlang/dmd) ![GitHub last commit](https://img.shields.io/github/last-commit/dlang/dmd)](https://github.com/dlang/dmd) - The reference compiler for the D programming language. Stable, builds insanely fast, very good for learning and rapid prototyping/development. Currently the frontend is implemented in D, and shared between dmd, ldc and gdc, the backend is implemented in C++.
* [ldc ![GitHub Repo Stars](https://img.shields.io/github/stars/ldc-developers/ldc) ![GitHub last commit](https://img.shields.io/github/last-commit/ldc-developers/ldc)](https://github.com/ldc-developers/ldc) - The LLVM-based D compiler. Uses the DMD frontend and LLVM backend. Builds slower than dmd, but generates more optimized code than DMD. It supports all the target platforms of LLVM.
* [gdc ![GitHub Repo Stars](https://img.shields.io/github/stars/D-Programming-GDC/GDC) ![GitHub last commit](https://img.shields.io/github/last-commit/D-Programming-GDC/GDC)](https://github.com/D-Programming-GDC/GDC) - GNU D Compiler. Use DMD frontend and GCC backend. Currently targets the most platforms due to the use of GCC. Generated code runs faster than DMD in most cases, on par with LDC. In the process of integration with the official GCC toolchain.

## WIP Compilers

* [sdc ![GitHub Repo Stars](https://img.shields.io/github/stars/snazzy-d/SDC) ![GitHub last commit](https://img.shields.io/github/last-commit/snazzy-d/SDC)](https://github.com/snazzy-d/SDC) - The Snazzy D Compiler. Written in D. Grows Smarter every day.


## Dev Tools

*Tools for more productive D development.*

* [D-Scanner ![GitHub Repo Stars](https://img.shields.io/github/stars/dlang-community/D-Scanner) ![GitHub last commit](https://img.shields.io/github/last-commit/dlang-community/D-Scanner)](https://github.com/dlang-community/D-Scanner) - Swiss-army knife for D source code (linting, static analysis, D code parsing, etc.)
* [dfmt ![GitHub Repo Stars](https://img.shields.io/github/stars/dlang-community/dfmt) ![GitHub last commit](https://img.shields.io/github/last-commit/dlang-community/dfmt)](https://github.com/dlang-community/dfmt) - formatter for D source code


## Build Tools

*Manage projects and compile software from source code.*

* [dub ![GitHub Repo Stars](https://img.shields.io/github/stars/dlang/dub) ![GitHub last commit](https://img.shields.io/github/last-commit/dlang/dub)](https://github.com/dlang/dub) - De facto official package and build management system for D. Will be included officially soon.
* [scons-d](https://scons.org/) - Scons has built-in support for building D projects, thanks to Russel Winder.
* [premake ![GitHub Repo Stars](https://img.shields.io/github/stars/premake/premake-dlang) ![GitHub last commit](https://img.shields.io/github/last-commit/premake/premake-dlang)](https://github.com/premake/premake-dlang) - Premake has built-in support for D projects
* [reggae ![GitHub Repo Stars](https://img.shields.io/github/stars/atilaneves/reggae) ![GitHub last commit](https://img.shields.io/github/last-commit/atilaneves/reggae)](https://github.com/atilaneves/reggae) - meta build system in D
* [Makefile ![GitHub Repo Stars](https://img.shields.io/github/stars/bioinfornatics/MakefileForD) ![GitHub last commit](https://img.shields.io/github/last-commit/bioinfornatics/MakefileForD)](https://github.com/bioinfornatics/MakefileForD) - Makefile template for D projects
* [cmake-d ![GitHub Repo Stars](https://img.shields.io/github/stars/dcarp/cmake-d) ![GitHub last commit](https://img.shields.io/github/last-commit/dcarp/cmake-d)](https://github.com/dcarp/cmake-d) - CMake D Projects
* [cook2 ![GitHub Repo Stars](https://img.shields.io/github/stars/gecko0307/Cook2) ![GitHub last commit](https://img.shields.io/github/last-commit/gecko0307/Cook2)](https://github.com/gecko0307/Cook2) - Fast incremental build tool intended for projects in D
* [button](https://jasonwhite.io/button/) - A universal build system to build your software at the push of a button.
* [wild ![GitHub Repo Stars](https://img.shields.io/github/stars/Vild/Wild) ![GitHub last commit](https://img.shields.io/github/last-commit/Vild/Wild)](https://github.com/Vild/Wild) - Wild build system, used to build the [PowerNex ![GitHub Repo Stars](https://img.shields.io/github/stars/PowerNex/PowerNex) ![GitHub last commit](https://img.shields.io/github/last-commit/PowerNex/PowerNex)](https://github.com/PowerNex/PowerNex) kernel
* [XMake](https://xmake.io) - XMake is a crossplatform build system, that incorporated the D language and also has support for DUB repositories.
* [wox ![GitHub Repo Stars](https://img.shields.io/github/stars/redthing1/wox) ![GitHub last commit](https://img.shields.io/github/last-commit/redthing1/wox)](https://github.com/redthing1/wox) - A highly flexible recipe build system inspired by Make


<a name="ide"></a>

## IDEs & Editors

*Integrated Development Environment.*

* [Visual D ![GitHub Repo Stars](https://img.shields.io/github/stars/dlang/visuald) ![GitHub last commit](https://img.shields.io/github/last-commit/dlang/visuald)](https://github.com/dlang/visuald) - Visual Studio extension for the D programming language.
* [IntelliJ D Language](https://intellij-dlanguage.github.io/) - Support for the D programming language within IntelliJ IDEA.
* [Dexed](https://gitlab.com/basile.b/dexed) - IDE for the D programming language, its compilers, tools and libraries.
* [Dutyl ![GitHub Repo Stars](https://img.shields.io/github/stars/idanarye/vim-dutyl) ![GitHub last commit](https://img.shields.io/github/last-commit/idanarye/vim-dutyl)](https://github.com/idanarye/vim-dutyl) - Vim plugin that integrates various D development tools
* [code-d](https://marketplace.visualstudio.com/items?itemName=webfreak.code-d) <sup>\[[open-vsx](https://open-vsx.org/extension/webfreak/code-d)\]</sup> - Visual Studio Code extension using serve-d
* [ide-d](https://atom.io/packages/ide-d) - Atom extension for D using serve-d

<br/>

* [DCD ![GitHub Repo Stars](https://img.shields.io/github/stars/dlang-community/DCD) ![GitHub last commit](https://img.shields.io/github/last-commit/dlang-community/DCD)](https://github.com/dlang-community/DCD) - Independent auto-complete program for the D programming language. Could be used with editors like vim, emacs, sublime text, textadept, and zeus. See [editors support ![GitHub Repo Stars](https://img.shields.io/github/stars/dlang-community/DCD) ![GitHub last commit](https://img.shields.io/github/last-commit/dlang-community/DCD)](https://github.com/dlang-community/DCD/wiki/IDEs-and-Editors-with-DCD-support).
* [serve-d ![GitHub Repo Stars](https://img.shields.io/github/stars/Pure-D/serve-d) ![GitHub last commit](https://img.shields.io/github/last-commit/Pure-D/serve-d)](https://github.com/Pure-D/serve-d) - Language Server Protocol (LSP) implementation for D.  Adds modern IDE features to any editor with LSP support (VSCode, Atom, Vim/Neovim and others)

## Lexers, Parsers, Parser Generators

* [libdparse ![GitHub Repo Stars](https://img.shields.io/github/stars/dlang-community/libdparse) ![GitHub last commit](https://img.shields.io/github/last-commit/dlang-community/libdparse)](https://github.com/dlang-community/libdparse) - A D language lexer and parser, (possibly) future standard D parser/lexer.
* [Martin Nowak's Lexer ![GitHub Repo Stars](https://img.shields.io/github/stars/MartinNowak/lexer) ![GitHub last commit](https://img.shields.io/github/last-commit/MartinNowak/lexer)](https://github.com/MartinNowak/lexer) - A lexer generator.
* [Mono-D's DParser ![GitHub Repo Stars](https://img.shields.io/github/stars/aBothe/D_Parser) ![GitHub last commit](https://img.shields.io/github/last-commit/aBothe/D_Parser)](https://github.com/aBothe/D_Parser) - A D parser written in C# and used in Mono-D.
* [Pegged ![GitHub Repo Stars](https://img.shields.io/github/stars/PhilippeSigaud/Pegged) ![GitHub last commit](https://img.shields.io/github/last-commit/PhilippeSigaud/Pegged)](https://github.com/PhilippeSigaud/Pegged) - A Parsing Expression Grammar (PEG) module written in D.
* [Goldie](https://bitbucket.org/Abscissa/goldie/wiki/Home) - Goldie Parsing System.
* [ctpg ![GitHub Repo Stars](https://img.shields.io/github/stars/youxkei/ctpg) ![GitHub last commit](https://img.shields.io/github/last-commit/youxkei/ctpg)](https://github.com/youxkei/ctpg) - Compile-Time Parser (with converter) Generator written in D.
* [dunnart ![GitHub Repo Stars](https://img.shields.io/github/stars/pwil3058/dunnart) ![GitHub last commit](https://img.shields.io/github/last-commit/pwil3058/dunnart)](https://github.com/pwil3058/dunnart) - LALR(1) Parser Generator written in D.

## Preprocesors

* [warp ![GitHub Repo Stars](https://img.shields.io/github/stars/facebookarchive/warp) ![GitHub last commit](https://img.shields.io/github/last-commit/facebookarchive/warp)](https://github.com/facebookarchive/warp) - A fast preprocessor for C and C++ used in Facebook infrastructure. Written by Walter Bright.

## Javascript
* [higgs ![GitHub Repo Stars](https://img.shields.io/github/stars/higgsjs/Higgs) ![GitHub last commit](https://img.shields.io/github/last-commit/higgsjs/Higgs)](https://github.com/higgsjs/Higgs) -  Higgs JavaScript Virtual Machine, implemented in D.

## Basic

* [hunt ![GitHub Repo Stars](https://img.shields.io/github/stars/huntlabs/hunt) ![GitHub last commit](https://img.shields.io/github/last-commit/huntlabs/hunt)](https://github.com/huntlabs/hunt) - A refined core library for D programming language. The module has concurrency / collection / event / io / logging / text / serialize and more.
* [hunt-time ![GitHub Repo Stars](https://img.shields.io/github/stars/huntlabs/hunt-time) ![GitHub last commit](https://img.shields.io/github/last-commit/huntlabs/hunt-time)](https://github.com/huntlabs/hunt-time) - A time library and similar to Joda-time and Java.time api.
* [hunt-validation ![GitHub Repo Stars](https://img.shields.io/github/stars/huntlabs/hunt-validation) ![GitHub last commit](https://img.shields.io/github/last-commit/huntlabs/hunt-validation)](https://github.com/huntlabs/hunt-validation) - A data validation library for DLang based on hunt library.

## Containers
* [EMSI containers ![GitHub Repo Stars](https://img.shields.io/github/stars/dlang-community/containers) ![GitHub last commit](https://img.shields.io/github/last-commit/dlang-community/containers)](https://github.com/dlang-community/containers) -  Containers that do not use the GC 
- [memutils ![GitHub Repo Stars](https://img.shields.io/github/stars/etcimon/memutils) ![GitHub last commit](https://img.shields.io/github/last-commit/etcimon/memutils)](https://github.com/etcimon/memutils) - Overhead allocators, allocator-aware containers and lifetime management for D objects
- [dlib.container ![GitHub Repo Stars](https://img.shields.io/github/stars/gecko0307/dlib) ![GitHub last commit](https://img.shields.io/github/last-commit/gecko0307/dlib)](https://github.com/gecko0307/dlib) - generic data structures (GC-free dynamic and associative arrays and more)
- [std.rcstring ![GitHub Repo Stars](https://img.shields.io/github/stars/burner/std.rcstring) ![GitHub last commit](https://img.shields.io/github/last-commit/burner/std.rcstring)](https://github.com/burner/std.rcstring) - A reference counted string implementation for D's build in string construct

## GitHub Actions

- [setup-dlang ![GitHub Repo Stars](https://img.shields.io/github/stars/dlang-community/setup-dlang) ![GitHub last commit](https://img.shields.io/github/last-commit/dlang-community/setup-dlang)](https://github.com/dlang-community/setup-dlang) - Install D compilers & DUB inside GitHub Actions
- [dub-upgrade ![GitHub Repo Stars](https://img.shields.io/github/stars/WebFreak001/dub-upgrade) ![GitHub last commit](https://img.shields.io/github/last-commit/WebFreak001/dub-upgrade)](https://github.com/WebFreak001/dub-upgrade) - Run `dub upgrade` trying to repeat on network failure and using package cache on GitHub Actions

<a name="testing"></a>

## Testing Frameworks

- [silly](https://gitlab.com/AntonMeep/silly) - Better test runner for the D programming language. No nonsense.
- [dunit ![GitHub Repo Stars](https://img.shields.io/github/stars/nomad-software/dunit) ![GitHub last commit](https://img.shields.io/github/last-commit/nomad-software/dunit)](https://github.com/nomad-software/dunit) - Advanced unit testing & mocking toolkit
- [unit-threaded ![GitHub Repo Stars](https://img.shields.io/github/stars/atilaneves/unit-threaded) ![GitHub last commit](https://img.shields.io/github/last-commit/atilaneves/unit-threaded)](https://github.com/atilaneves/unit-threaded) - Multi-threaded unit test framework

## Web Frameworks

*Networking library*
* [hunt-net ![GitHub Repo Stars](https://img.shields.io/github/stars/huntlabs/hunt-net) ![GitHub last commit](https://img.shields.io/github/last-commit/huntlabs/hunt-net)](https://github.com/huntlabs/hunt-net) - High-performance network library for D programming language, event-driven asynchonous implemention(IOCP / kqueue / epoll).
* [hunt-http ![GitHub Repo Stars](https://img.shields.io/github/stars/huntlabs/hunt-http) ![GitHub last commit](https://img.shields.io/github/last-commit/huntlabs/hunt-http)](https://github.com/huntlabs/hunt-http) - HTTP/1 and HTTP/2 protocol library for D.
* [hunt-stomp ![GitHub Repo Stars](https://img.shields.io/github/stars/huntlabs/hunt-stomp) ![GitHub last commit](https://img.shields.io/github/last-commit/huntlabs/hunt-stomp)](https://github.com/huntlabs/hunt-stomp) - STOMP for websocket protocol library implement in D.
* [libasync ![GitHub Repo Stars](https://img.shields.io/github/stars/etcimon/libasync) ![GitHub last commit](https://img.shields.io/github/last-commit/etcimon/libasync)](https://github.com/etcimon/libasync) -  Cross-platform event loop library of asynchronous objects
* [libhttp2 ![GitHub Repo Stars](https://img.shields.io/github/stars/etcimon/libhttp2) ![GitHub last commit](https://img.shields.io/github/last-commit/etcimon/libhttp2)](https://github.com/etcimon/libhttp2) -  HTTP/2 library in D, translated from nghttp2
* [collie ![GitHub Repo Stars](https://img.shields.io/github/stars/huntlabs/collie) ![GitHub last commit](https://img.shields.io/github/last-commit/huntlabs/collie)](https://github.com/huntlabs/collie) -  An asynchronous event-driven network framework written in dlang, like netty framework in D.
* [dlang-requests ![GitHub Repo Stars](https://img.shields.io/github/stars/ikod/dlang-requests) ![GitHub last commit](https://img.shields.io/github/last-commit/ikod/dlang-requests)](https://github.com/ikod/dlang-requests) - HTTP client library inspired by python-requests
* [Handy-Httpd ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewlalis/handy-httpd) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewlalis/handy-httpd)](https://github.com/andrewlalis/handy-httpd) - A simple, lightweight, and well-documented HTTP server that lets you bootstrap ideas and have something up and running in minutes.
* [serverino ![GitHub Repo Stars](https://img.shields.io/github/stars/trikko/serverino) ![GitHub last commit](https://img.shields.io/github/last-commit/trikko/serverino)](https://github.com/trikko/serverino) - Small and ready-to-go http server, in D

*Full stack web frameworks.*
* [Hunt Framework ![GitHub Repo Stars](https://img.shields.io/github/stars/huntlabs/hunt-framework) ![GitHub last commit](https://img.shields.io/github/last-commit/huntlabs/hunt-framework)](https://github.com/huntlabs/hunt-framework/) - Hunt is a high-level D Programming Language Web framework that encourages rapid development and clean, pragmatic design. It lets you build high-performance Web applications quickly and easily.
* [vibe.d](https://vibed.org/) - Asynchronous I/O Web Framework that doesn’t get in your way, written in D.
* [arsd ![GitHub Repo Stars](https://img.shields.io/github/stars/adamdruppe/arsd) ![GitHub last commit](https://img.shields.io/github/last-commit/adamdruppe/arsd)](https://github.com/adamdruppe/arsd) - Adam D. Ruppe's web framework.
* [cmsed ![GitHub Repo Stars](https://img.shields.io/github/stars/rikkimax/Cmsed) ![GitHub last commit](https://img.shields.io/github/last-commit/rikkimax/Cmsed)](https://github.com/rikkimax/Cmsed) - A component library for Vibe that functions as a CMS.

*RPC library*
* [grpc ![GitHub Repo Stars](https://img.shields.io/github/stars/huntlabs/grpc-dlang) ![GitHub last commit](https://img.shields.io/github/last-commit/huntlabs/grpc-dlang)](https://github.com/huntlabs/grpc-dlang) - Grpc for D programming language, hunt-http library based.
* [kissrpc ![GitHub Repo Stars](https://img.shields.io/github/stars/huntlabs/kissrpc) ![GitHub last commit](https://img.shields.io/github/last-commit/huntlabs/kissrpc)](https://github.com/huntlabs/kissrpc) - Fast and light, flatbuffers based rpc framework.
* [Hprose ![GitHub Repo Stars](https://img.shields.io/github/stars/hprose/hprose-d) ![GitHub last commit](https://img.shields.io/github/last-commit/hprose/hprose-d)](https://github.com/hprose/hprose-d) - A very newbility RPC Library for D, and it support 25+ languages now.
* [Apache Thrift](https://thrift.apache.org/) - A lightweight, language-independent, featureful RPC framework.  Thrift provides clean abstractions for data transport, data serialization, code generation, and application level processing.  [Dub package](https://code.dlang.org/packages/apache-thrift)

*Gossip*

* [hunt-gossip ![GitHub Repo Stars](https://img.shields.io/github/stars/huntlabs/hunt-gossip) ![GitHub last commit](https://img.shields.io/github/last-commit/huntlabs/hunt-gossip)](https://github.com/huntlabs/hunt-gossip) - A Apache V2 gossip protocol implementation for D programming language.

*Cache*

* [hunt-cache ![GitHub Repo Stars](https://img.shields.io/github/stars/huntlabs/hunt-cache) ![GitHub last commit](https://img.shields.io/github/last-commit/huntlabs/hunt-cache)](https://github.com/huntlabs/hunt-cache) - D language universal cache library, using radix, redis and memcached.

*Static Site Generator*

* [DSSG ![GitHub Repo Stars](https://img.shields.io/github/stars/kambrium/dssg) ![GitHub last commit](https://img.shields.io/github/last-commit/kambrium/dssg)](https://github.com/kambrium/dssg) - A static site generator with a different approach.

## Data serialization
*Json, XML, protobuf and other data serialization libs.*

### Binary Serilization
* [flatbuffers ![GitHub Repo Stars](https://img.shields.io/github/stars/huntlabs/flatbuffers) ![GitHub last commit](https://img.shields.io/github/last-commit/huntlabs/flatbuffers)](https://github.com/huntlabs/flatbuffers) - D Programming Language implementation of the google flatbuffers library.
* [cerealed ![GitHub Repo Stars](https://img.shields.io/github/stars/atilaneves/cerealed) ![GitHub last commit](https://img.shields.io/github/last-commit/atilaneves/cerealed)](https://github.com/atilaneves/cerealed)  - Serialisation library for D 
* [dproto ![GitHub Repo Stars](https://img.shields.io/github/stars/msoucy/dproto) ![GitHub last commit](https://img.shields.io/github/last-commit/msoucy/dproto)](https://github.com/msoucy/dproto) - Google Protocol Buffer support in D.

### JSON

* [vibe.data.json](https://vibed.org/api/vibe.data.json/) - JSON functions in Vibe.d. Currently the best implementation I used.
* [fast.json ![GitHub Repo Stars](https://img.shields.io/github/stars/etcimon/fast) ![GitHub last commit](https://img.shields.io/github/last-commit/etcimon/fast)](https://github.com/etcimon/fast) -  A library for D that aims to provide the fastest possible implementation of some every day routines.
* [std.json](https://dlang.org/phobos/std_json.html) - D's standard library JSON module. Needs refinement.
* [painlessjson ![GitHub Repo Stars](https://img.shields.io/github/stars/BlackEdder/painlessjson) ![GitHub last commit](https://img.shields.io/github/last-commit/BlackEdder/painlessjson)](https://github.com/BlackEdder/painlessjson) - Convert between D types and std.json.
* [std.data.json ![GitHub Repo Stars](https://img.shields.io/github/stars/dlang-community/std_data_json) ![GitHub last commit](https://img.shields.io/github/last-commit/dlang-community/std_data_json)](https://github.com/dlang-community/std_data_json) - Phobos candidate for JSON serialization (based on Vibed)
* [asdf ![GitHub Repo Stars](https://img.shields.io/github/stars/libmir/asdf) ![GitHub last commit](https://img.shields.io/github/last-commit/libmir/asdf)](https://github.com/libmir/asdf) - Cache oriented string based JSON representation for fast read & writes and serialisation.

### XML

* [orange ![GitHub Repo Stars](https://img.shields.io/github/stars/jacob-carlborg/orange) ![GitHub last commit](https://img.shields.io/github/last-commit/jacob-carlborg/orange)](https://github.com/jacob-carlborg/orange) - General purpose serializer (currently only supports XML)
* [std.experimental.xml ![GitHub Repo Stars](https://img.shields.io/github/stars/lodo1995/experimental.xml) ![GitHub last commit](https://img.shields.io/github/last-commit/lodo1995/experimental.xml)](https://github.com/lodo1995/experimental.xml) - Phobos candidate for a XML serialization
* arsd [dom.d ![GitHub Repo Stars](https://img.shields.io/github/stars/adamdruppe/arsd) ![GitHub last commit](https://img.shields.io/github/last-commit/adamdruppe/arsd)](https://github.com/adamdruppe/arsd/blob/master/dom.d) - an xml/html DOM based on what Javascript provides in browsers

## Database clients
*Clients and bindings to C bliencts for relational and nosql databases.*

* [hunt-entity ![GitHub Repo Stars](https://img.shields.io/github/stars/huntlabs/hunt-entity) ![GitHub last commit](https://img.shields.io/github/last-commit/huntlabs/hunt-entity)](https://github.com/huntlabs/hunt-entity) - Hunt entity is an object-relational mapping tool for the D programming language. Referring to the design idea of JPA, support PostgreSQL / MySQL / SQLite.
* [hunt-database ![GitHub Repo Stars](https://img.shields.io/github/stars/huntlabs/hunt-database) ![GitHub last commit](https://img.shields.io/github/last-commit/huntlabs/hunt-database)](https://github.com/huntlabs/hunt-database) - Hunt database abstraction layer for D programing language, support PostgreSQL / MySQL / SQLite.
* [vibe.d ![GitHub Repo Stars](https://img.shields.io/github/stars/vibe-d/vibe.d) ![GitHub last commit](https://img.shields.io/github/last-commit/vibe-d/vibe.d)](https://github.com/vibe-d/vibe.d) - Vibe.d has internal support for Redis and MongoDB, which are very stable. Soon, the database drivers will be separated into independent projects.
* [mysql-native ![GitHub Repo Stars](https://img.shields.io/github/stars/mysql-d/mysql-native) ![GitHub last commit](https://img.shields.io/github/last-commit/mysql-d/mysql-native)](https://github.com/mysql-d/mysql-native) - A MySQL client implemented in native D.
* [ddb ![GitHub Repo Stars](https://img.shields.io/github/stars/pszturmaj/ddb) ![GitHub last commit](https://img.shields.io/github/last-commit/pszturmaj/ddb)](https://github.com/pszturmaj/ddb) - Database access for D2. Currently only supports PostgreSQL.
* [arsd ![GitHub Repo Stars](https://img.shields.io/github/stars/adamdruppe/arsd) ![GitHub last commit](https://img.shields.io/github/last-commit/adamdruppe/arsd)](https://github.com/adamdruppe/arsd) - Adam D. Ruppe's library; in addition to a Web backend, it also has support for database access with database.d, sqlite.d, mysql.d and postgres.d.
* [ddbc ![GitHub Repo Stars](https://img.shields.io/github/stars/buggins/ddbc) ![GitHub last commit](https://img.shields.io/github/last-commit/buggins/ddbc)](https://github.com/buggins/ddbc) - DDBC is a DB Connector for D language (similar to JDBC). HibernateD (see below) uses ddbc for database abstraction.
* [hibernated ![GitHub Repo Stars](https://img.shields.io/github/stars/buggins/hibernated) ![GitHub last commit](https://img.shields.io/github/last-commit/buggins/hibernated)](https://github.com/buggins/hibernated) - HibernateD is an ORM for D (similar to [Hibernate](https://hibernate.org/)).
* [dvorm ![GitHub Repo Stars](https://img.shields.io/github/stars/rikkimax/Dvorm) ![GitHub last commit](https://img.shields.io/github/last-commit/rikkimax/Dvorm)](https://github.com/rikkimax/Dvorm) - An ORM for D with Vibe support. Works with vibe.d and mysql-d, giving it the ability to access MongoDB and MySQL.
* [Tiny Redis](http://adilbaig.github.io/Tiny-Redis/) - Redis driver for D. Fast, Simple, Stable. Has no dependencies.
* [libpb ![GitHub Repo Stars](https://img.shields.io/github/stars/Hax-io/libpb) ![GitHub last commit](https://img.shields.io/github/last-commit/Hax-io/libpb)](https://github.com/Hax-io/libpb) - INteract with a PocketBase database

## Command Line
* [hunt-console ![GitHub Repo Stars](https://img.shields.io/github/stars/huntlabs/hunt-console) ![GitHub last commit](https://img.shields.io/github/last-commit/huntlabs/hunt-console)](https://github.com/huntlabs/hunt-console) - Hunt console creation easier to create powerful command-line applications. 
* [tilix ![GitHub Repo Stars](https://img.shields.io/github/stars/gnunn1/tilix) ![GitHub last commit](https://img.shields.io/github/last-commit/gnunn1/tilix)](https://github.com/gnunn1/tilix) -  A tiling terminal emulator for Linux using GTK+ 3.
* [scriptlike ![GitHub Repo Stars](https://img.shields.io/github/stars/Abscissa/scriptlike) ![GitHub last commit](https://img.shields.io/github/last-commit/Abscissa/scriptlike)](https://github.com/Abscissa/scriptlike) - Utility library to aid writing script-like programs in D.
* [todod ![GitHub Repo Stars](https://img.shields.io/github/stars/BlackEdder/todod) ![GitHub last commit](https://img.shields.io/github/last-commit/BlackEdder/todod)](https://github.com/BlackEdder/todod) - Todod is a command line based todo list manager. It also has support for shell interaction based on [linenoise ![GitHub Repo Stars](https://img.shields.io/github/stars/antirez/linenoise) ![GitHub last commit](https://img.shields.io/github/last-commit/antirez/linenoise)](https://github.com/antirez/linenoise).
* [d-colorize](https://code.dlang.org/packages/colorize) - A port of the ruby library [colorize ![GitHub Repo Stars](https://img.shields.io/github/stars/fazibear/colorize) ![GitHub last commit](https://img.shields.io/github/last-commit/fazibear/colorize)](https://github.com/fazibear/colorize). It add some methods to set color, background color and text effect on console easier using ANSI escape sequences.
* [terminal.d ![GitHub Repo Stars](https://img.shields.io/github/stars/adamdruppe/arsd) ![GitHub last commit](https://img.shields.io/github/last-commit/adamdruppe/arsd)](https://github.com/adamdruppe/arsd/blob/master/terminal.d) - Part of Adam Ruppe's [arsd ![GitHub Repo Stars](https://img.shields.io/github/stars/adamdruppe/arsd) ![GitHub last commit](https://img.shields.io/github/last-commit/adamdruppe/arsd)](https://github.com/adamdruppe/arsd) library supporting cursor and color manipulation on the console.
* [dexpect ![GitHub Repo Stars](https://img.shields.io/github/stars/grogancolin/dexpect) ![GitHub last commit](https://img.shields.io/github/last-commit/grogancolin/dexpect)](https://github.com/grogancolin/dexpect/) -  A D implementation of the expect framework. Handy for bash emulation.
* [Argon ![GitHub Repo Stars](https://img.shields.io/github/stars/markuslaker/Argon) ![GitHub last commit](https://img.shields.io/github/last-commit/markuslaker/Argon)](https://github.com/markuslaker/Argon) -  A processor for command-line arguments, an alternative to Getopt, written in D. 
* [argsd ![GitHub Repo Stars](https://img.shields.io/github/stars/burner/argsd) ![GitHub last commit](https://img.shields.io/github/last-commit/burner/argsd)](https://github.com/burner/argsd) - A command line and config file parser for DLang
* [darg ![GitHub Repo Stars](https://img.shields.io/github/stars/jasonwhite/darg) ![GitHub last commit](https://img.shields.io/github/last-commit/jasonwhite/darg)](https://github.com/jasonwhite/darg) - Robust command line argument parsing for D.
* [commandr ![GitHub Repo Stars](https://img.shields.io/github/stars/robik/commandr) ![GitHub last commit](https://img.shields.io/github/last-commit/robik/commandr)](https://github.com/robik/commandr) - A modern, powerful commmand line argument parser.
* [luneta ![GitHub Repo Stars](https://img.shields.io/github/stars/fbeline/luneta) ![GitHub last commit](https://img.shields.io/github/last-commit/fbeline/luneta)](https://github.com/fbeline/luneta) - A command-line fuzzy finder.
* [argparse](https://code.dlang.org/packages/argparse) - Flexible parser of command line arguments.
* [dlog ![GitHub Repo Stars](https://img.shields.io/github/stars/deavmi/dlog) ![GitHub last commit](https://img.shields.io/github/last-commit/deavmi/dlog)](https://github.com/deavmi/dlog) - extensible logging framework with message transformation support and custom loggers and contexts
* [gogga ![GitHub Repo Stars](https://img.shields.io/github/stars/deavmi/gogga) ![GitHub last commit](https://img.shields.io/github/last-commit/deavmi/gogga)](https://github.com/deavmi/gogga) - simple easy-to-use colorful logger for command-line applications

## GUI Libs
*Libraries for working with graphical user interface applications.*

* [DLangUI ![GitHub Repo Stars](https://img.shields.io/github/stars/buggins/dlangui) ![GitHub last commit](https://img.shields.io/github/last-commit/buggins/dlangui)](https://github.com/buggins/dlangui) - Cross Platform GUI for D programming language. My personal favorate, because it is written in D(not a binding), and is cross platform. DLangUI also has a good showcase in the IDE [DLangIDE ![GitHub Repo Stars](https://img.shields.io/github/stars/buggins/dlangide) ![GitHub last commit](https://img.shields.io/github/last-commit/buggins/dlangide)](https://github.com/buggins/dlangide).
* [GtkD ![GitHub Repo Stars](https://img.shields.io/github/stars/gtkd-developers/GtkD) ![GitHub last commit](https://img.shields.io/github/last-commit/gtkd-developers/GtkD)](https://github.com/gtkd-developers/GtkD) - GtkD is a D binding and OO wrapper of GTK+. GtkD is actively maintained and is currently the most stable GUI lib for D.
* [DWT ![GitHub Repo Stars](https://img.shields.io/github/stars/d-widget-toolkit/dwt) ![GitHub last commit](https://img.shields.io/github/last-commit/d-widget-toolkit/dwt)](https://github.com/d-widget-toolkit/dwt) - A library for creating cross-platform GUI applications. GWT is a port of the Java SWT library to D. DWT was promoted as a semi-standard GUI library for D, but unfortunately didn't catch up popularity yet.
* [tkD ![GitHub Repo Stars](https://img.shields.io/github/stars/nomad-software/tkd) ![GitHub last commit](https://img.shields.io/github/last-commit/nomad-software/tkd)](https://github.com/nomad-software/tkd) - GUI toolkit for the D programming language based on Tcl/Tk.
* [dqml ![GitHub Repo Stars](https://img.shields.io/github/stars/filcuc/dqml) ![GitHub last commit](https://img.shields.io/github/last-commit/filcuc/dqml)](https://github.com/filcuc/dqml) -  Qt Qml bindings for the D programming language.
* [Sciter-Dport ![GitHub Repo Stars](https://img.shields.io/github/stars/sciter-sdk/Sciter-Dport) ![GitHub last commit](https://img.shields.io/github/last-commit/sciter-sdk/Sciter-Dport)](https://github.com/sciter-sdk/Sciter-Dport) - D bindings for the [Sciter](https://sciter.com) - crossplatform HTML/CSS/script desktop UI toolkit.
* [LibUI ![GitHub Repo Stars](https://img.shields.io/github/stars/Extrawurst/DerelictLibui) ![GitHub last commit](https://img.shields.io/github/last-commit/Extrawurst/DerelictLibui)](https://github.com/Extrawurst/DerelictLibui) - Dynamic Binding for [libui ![GitHub Repo Stars](https://img.shields.io/github/stars/andlabs/libui) ![GitHub last commit](https://img.shields.io/github/last-commit/andlabs/libui)](https://github.com/andlabs/libui)

*Note*: You can also find a list of GUI libs on [wiki.dlang.org](https://wiki.dlang.org/Libraries_and_Frameworks#GUI_Libraries), but not all of the libraries are actively maintained now.

## OS

*Operating Systems written in D*

* [PowerNex ![GitHub Repo Stars](https://img.shields.io/github/stars/PowerNex/PowerNex) ![GitHub last commit](https://img.shields.io/github/last-commit/PowerNex/PowerNex)](https://github.com/PowerNex/PowerNex) -  A kernel written in D 
* [SerpentOS](https://serpentos.com/) - Snek factory ([source code](https://gitlab.com/serpent-os))
* [Trinix ![GitHub Repo Stars](https://img.shields.io/github/stars/Rikarin/Trinix) ![GitHub last commit](https://img.shields.io/github/last-commit/Rikarin/Trinix)](https://github.com/Rikarin/Trinix) -  Hybrid operating system for x64 PC written in D
* [XOmB ![GitHub Repo Stars](https://img.shields.io/github/stars/xomboverlord/xomb) ![GitHub last commit](https://img.shields.io/github/last-commit/xomboverlord/xomb)](https://github.com/xomboverlord/xomb) - An exokernel operating system written in D

## Game Bindings

*Bindings to game development related C libraries.*

* BindBC libraries - `-betterC` compatible, `@nogc` bindings using [bindbc-loader ![GitHub Repo Stars](https://img.shields.io/github/stars/BindBC/bindbc-loader) ![GitHub last commit](https://img.shields.io/github/last-commit/BindBC/bindbc-loader)](https://github.com/BindBC/bindbc-loader):
	* OpenGL - [bindbc-opengl ![GitHub Repo Stars](https://img.shields.io/github/stars/BindBC/bindbc-opengl) ![GitHub last commit](https://img.shields.io/github/last-commit/BindBC/bindbc-opengl)](https://github.com/BindBC/bindbc-opengl)
	* GLFW 3 - [bindbc-glfw ![GitHub Repo Stars](https://img.shields.io/github/stars/BindBC/bindbc-glfw) ![GitHub last commit](https://img.shields.io/github/last-commit/BindBC/bindbc-glfw)](https://github.com/BindBC/bindbc-glfw)
	* SDL 2 - [bindbc-sdl ![GitHub Repo Stars](https://img.shields.io/github/stars/BindBC/bindbc-sdl) ![GitHub last commit](https://img.shields.io/github/last-commit/BindBC/bindbc-sdl)](https://github.com/BindBC/bindbc-sdl)
	* SDL2_gfx - [bindbc-sdlgfx ![GitHub Repo Stars](https://img.shields.io/github/stars/aferust/bindbc-sdlgfx) ![GitHub last commit](https://img.shields.io/github/last-commit/aferust/bindbc-sdlgfx)](https://github.com/aferust/bindbc-sdlgfx)
	* SFML 2 - [bindbc-sfml ![GitHub Repo Stars](https://img.shields.io/github/stars/BindBC/bindbc-sfml) ![GitHub last commit](https://img.shields.io/github/last-commit/BindBC/bindbc-sfml)](https://github.com/BindBC/bindbc-sfml)
	* Imgui - immediate UI - [bindbc-imgui ![GitHub Repo Stars](https://img.shields.io/github/stars/Inochi2D/bindbc-imgui) ![GitHub last commit](https://img.shields.io/github/last-commit/Inochi2D/bindbc-imgui)](https://github.com/Inochi2D/bindbc-imgui)
	* Nuklear - immediate UI - [bindbc-nuklear ![GitHub Repo Stars](https://img.shields.io/github/stars/Timu5/bindbc-nuklear) ![GitHub last commit](https://img.shields.io/github/last-commit/Timu5/bindbc-nuklear)](https://github.com/Timu5/bindbc-nuklear)
	* raylib - [bindbc-raylib ![GitHub Repo Stars](https://img.shields.io/github/stars/o3o/bindbc-raylib) ![GitHub last commit](https://img.shields.io/github/last-commit/o3o/bindbc-raylib)](https://github.com/o3o/bindbc-raylib)
	* bgfx - [bindbc-bgfx ![GitHub Repo Stars](https://img.shields.io/github/stars/GoaLitiuM/bindbc-bgfx) ![GitHub last commit](https://img.shields.io/github/last-commit/GoaLitiuM/bindbc-bgfx)](https://github.com/GoaLitiuM/bindbc-bgfx)
	* WebGPU - [bindbc-wgpu ![GitHub Repo Stars](https://img.shields.io/github/stars/gecko0307/bindbc-wgpu) ![GitHub last commit](https://img.shields.io/github/last-commit/gecko0307/bindbc-wgpu)](https://github.com/gecko0307/bindbc-wgpu)
	* Zstandard - compression - [bindbc-zstandard ![GitHub Repo Stars](https://img.shields.io/github/stars/ZILtoid1991/bindbc-zstandard) ![GitHub last commit](https://img.shields.io/github/last-commit/ZILtoid1991/bindbc-zstandard)](https://github.com/ZILtoid1991/bindbc-zstandard)
	* nanomsg-next-gen - [bindbc-nng ![GitHub Repo Stars](https://img.shields.io/github/stars/darkridder/bindbc-nng) ![GitHub last commit](https://img.shields.io/github/last-commit/darkridder/bindbc-nng)](https://github.com/darkridder/bindbc-nng)
	* OpenAL - audio engine - [bindbc-openal ![GitHub Repo Stars](https://img.shields.io/github/stars/BindBC/bindbc-openal) ![GitHub last commit](https://img.shields.io/github/last-commit/BindBC/bindbc-openal)](https://github.com/BindBC/bindbc-openal)
	* SoLoud - audio engine - [bindbc-soloud ![GitHub Repo Stars](https://img.shields.io/github/stars/gecko0307/bindbc-soloud) ![GitHub last commit](https://img.shields.io/github/last-commit/gecko0307/bindbc-soloud)](https://github.com/gecko0307/bindbc-soloud)
	* KiWi - widget library - [bindbc-kiwi ![GitHub Repo Stars](https://img.shields.io/github/stars/aferust/bindbc-kiwi) ![GitHub last commit](https://img.shields.io/github/last-commit/aferust/bindbc-kiwi)](https://github.com/aferust/bindbc-kiwi)
	* NanoVG - vector drawing engine - [bindbc-nanovg ![GitHub Repo Stars](https://img.shields.io/github/stars/aferust/bindbc-nanovg) ![GitHub last commit](https://img.shields.io/github/last-commit/aferust/bindbc-nanovg)](https://github.com/aferust/bindbc-nanovg)
	* Blend2D - 2D Vector Graphics Powered by a JIT Compiler - [bindbc-blend2d ![GitHub Repo Stars](https://img.shields.io/github/stars/kdmult/bindbc-blend2d) ![GitHub last commit](https://img.shields.io/github/last-commit/kdmult/bindbc-blend2d)](https://github.com/kdmult/bindbc-blend2d)
	* Lua - [bindbc-lua ![GitHub Repo Stars](https://img.shields.io/github/stars/BindBC/bindbc-lua) ![GitHub last commit](https://img.shields.io/github/last-commit/BindBC/bindbc-lua)](https://github.com/BindBC/bindbc-lua)
	* JoyShockLibrary - [bindbc-jsl ![GitHub Repo Stars](https://img.shields.io/github/stars/ZILtoid1991/bindbc-JSL) ![GitHub last commit](https://img.shields.io/github/last-commit/ZILtoid1991/bindbc-JSL)](https://github.com/ZILtoid1991/bindbc-JSL)
	* Newton Dynamics - physics engine - [bindbc-newton ![GitHub Repo Stars](https://img.shields.io/github/stars/gecko0307/bindbc-newton) ![GitHub last commit](https://img.shields.io/github/last-commit/gecko0307/bindbc-newton)](https://github.com/gecko0307/bindbc-newton)
	* FreeImage - [bindbc-freeimage ![GitHub Repo Stars](https://img.shields.io/github/stars/BindBC/bindbc-freeimage) ![GitHub last commit](https://img.shields.io/github/last-commit/BindBC/bindbc-freeimage)](https://github.com/BindBC/bindbc-freeimage)
	* Assimp5 - [bindbc-assimp ![GitHub Repo Stars](https://img.shields.io/github/stars/Sobaya007/bindbc-assimp) ![GitHub last commit](https://img.shields.io/github/last-commit/Sobaya007/bindbc-assimp)](https://github.com/Sobaya007/bindbc-assimp)
	* Freetype - [bindbc-freetype ![GitHub Repo Stars](https://img.shields.io/github/stars/BindBC/bindbc-freetype) ![GitHub last commit](https://img.shields.io/github/last-commit/BindBC/bindbc-freetype)](https://github.com/BindBC/bindbc-freetype)
	* Harfbuzz - text shaping engine - [bindbc-harfbuzz ![GitHub Repo Stars](https://img.shields.io/github/stars/DlangGraphicsWG/bindbc-harfbuzz) ![GitHub last commit](https://img.shields.io/github/last-commit/DlangGraphicsWG/bindbc-harfbuzz)](https://github.com/DlangGraphicsWG/bindbc-harfbuzz)
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

## Game Engine Bindings

* [Godot-D ![GitHub Repo Stars](https://img.shields.io/github/stars/godot-d/godot-d) ![GitHub last commit](https://img.shields.io/github/last-commit/godot-d/godot-d)](https://github.com/godot-d/godot-d) - D language bindings for the Godot Engine's GDNative API

## Game Frameworks

* [DGame ![GitHub Repo Stars](https://img.shields.io/github/stars/Dgame/Dgame) ![GitHub last commit](https://img.shields.io/github/last-commit/Dgame/Dgame)](https://github.com/Dgame/Dgame) - A 2D framework for the D programming Language. see <http://dgame-dev.de/>.
* [gfm ![GitHub Repo Stars](https://img.shields.io/github/stars/drug007/gfm7) ![GitHub last commit](https://img.shields.io/github/last-commit/drug007/gfm7)](https://github.com/drug007/gfm7) - D gamedev toolkit.
* [Dagon ![GitHub Repo Stars](https://img.shields.io/github/stars/gecko0307/dagon) ![GitHub last commit](https://img.shields.io/github/last-commit/gecko0307/dagon)](https://github.com/gecko0307/dagon) - 3D game engine for D. see <https://gecko0307.github.io/dagon/>
* [Dash ![GitHub Repo Stars](https://img.shields.io/github/stars/Circular-Studios/Dash) ![GitHub last commit](https://img.shields.io/github/last-commit/Circular-Studios/Dash)](https://github.com/Circular-Studios/Dash) - A free and open 3D game engine written in D. see <https://circularstudios.com/dash/>.
* [DSFML ![GitHub Repo Stars](https://img.shields.io/github/stars/Jebbs/DSFML) ![GitHub last commit](https://img.shields.io/github/last-commit/Jebbs/DSFML)](https://github.com/Jebbs/DSFML) - A static binding of SFML in a way that makes sense for D. see <http://dsfml.com/>.
* [DAllegro5 ![GitHub Repo Stars](https://img.shields.io/github/stars/SiegeLord/DAllegro5) ![GitHub last commit](https://img.shields.io/github/last-commit/SiegeLord/DAllegro5)](https://github.com/SiegeLord/DAllegro5/tree/master/allegro5) - D binding/wrapper to Allegro 5, a modern game programming library.
* [Voxelman ![GitHub Repo Stars](https://img.shields.io/github/stars/MrSmith33/voxelman) ![GitHub last commit](https://img.shields.io/github/last-commit/MrSmith33/voxelman)](https://github.com/MrSmith33/voxelman) -  Plugin-based client-server voxel game engine written in D language
* [PolyplexEngine ![GitHub Repo Stars](https://img.shields.io/github/stars/PolyplexEngine/libpp) ![GitHub last commit](https://img.shields.io/github/last-commit/PolyplexEngine/libpp)](https://github.com/PolyplexEngine/libpp) - libpp is an XNA like framework written in D.
* [rengfx ![GitHub Repo Stars](https://img.shields.io/github/stars/bmchtech/rengfx) ![GitHub last commit](https://img.shields.io/github/last-commit/bmchtech/rengfx)](https://github.com/bmchtech/rengfx) - lightweight, expressive, extensible 2D/3D game engine.

## Games

* [Spacecraft ![GitHub Repo Stars](https://img.shields.io/github/stars/Ingrater/Spacecraft) ![GitHub last commit](https://img.shields.io/github/last-commit/Ingrater/Spacecraft)](https://github.com/Ingrater/Spacecraft) - A 3d multiplayer deathmatch space game written in D 2.0.
* [Dtanks ![GitHub Repo Stars](https://img.shields.io/github/stars/kingsleyh/dtanks) ![GitHub last commit](https://img.shields.io/github/last-commit/kingsleyh/dtanks)](https://github.com/kingsleyh/dtanks) - Robot Tank Battle Game.
* [Electronvolt (formerly Atrium) ![GitHub Repo Stars](https://img.shields.io/github/stars/gecko0307/electronvolt) ![GitHub last commit](https://img.shields.io/github/last-commit/gecko0307/electronvolt)](https://github.com/gecko0307/electronvolt) - FPS game with physics based puzzles using OpenGL.
* [Backgammony ![GitHub Repo Stars](https://img.shields.io/github/stars/jonathanballs/backgammony) ![GitHub last commit](https://img.shields.io/github/last-commit/jonathanballs/backgammony)](https://github.com/jonathanballs/backgammony) - A Backgammon GUI for Linux built with Gtk.

## Internationalization

* [bindbc-icu ![GitHub Repo Stars](https://img.shields.io/github/stars/shoo/bindbc-icu) ![GitHub last commit](https://img.shields.io/github/last-commit/shoo/bindbc-icu)](https://github.com/shoo/bindbc-icu) - bindbc bindings for the unicode ICU library.

## Video applications

* [DerelictGL3 ![GitHub Repo Stars](https://img.shields.io/github/stars/DerelictOrg/DerelictGL3) ![GitHub last commit](https://img.shields.io/github/last-commit/DerelictOrg/DerelictGL3)](https://github.com/DerelictOrg/DerelictGL3) - A dynamic binding to OpenGL for the D Programming Language.

## Image Processing

* [ArmageddonEngine ![GitHub Repo Stars](https://img.shields.io/github/stars/CyberShadow/ae) ![GitHub last commit](https://img.shields.io/github/last-commit/CyberShadow/ae)](https://github.com/CyberShadow/ae/tree/master/utils/graphics) - Vladimir Panteleev's ae library has a package for image processing in functional style, which is described in the article [Functional Image Processing in D](http://blog.thecybershadow.net/2014/03/21/functional-image-processing-in-d/).
* [Blogsort](https://bitbucket.org/infognition/bsort/) -  A simple Windows app for viewing photos and preparing them for a blog.
* [dlib.image ![GitHub Repo Stars](https://img.shields.io/github/stars/gecko0307/dlib) ![GitHub last commit](https://img.shields.io/github/last-commit/gecko0307/dlib)](https://github.com/gecko0307/dlib) - image processing (8 and 16 bits per channel, floating point operations, filtering, FFT, HDRI, graphics formats support including JPEG and PNG)
* [color.d ![GitHub Repo Stars](https://img.shields.io/github/stars/adamdruppe/arsd) ![GitHub last commit](https://img.shields.io/github/last-commit/adamdruppe/arsd)](https://github.com/adamdruppe/arsd/blob/master/color.d) + [bmp.d ![GitHub Repo Stars](https://img.shields.io/github/stars/adamdruppe/arsd) ![GitHub last commit](https://img.shields.io/github/last-commit/adamdruppe/arsd)](https://github.com/adamdruppe/arsd/blob/master/bmp.d), [jpg.d ![GitHub Repo Stars](https://img.shields.io/github/stars/adamdruppe/arsd) ![GitHub last commit](https://img.shields.io/github/last-commit/adamdruppe/arsd)](https://github.com/adamdruppe/arsd/blob/master/jpg.d), [png.d ![GitHub Repo Stars](https://img.shields.io/github/stars/adamdruppe/arsd) ![GitHub last commit](https://img.shields.io/github/last-commit/adamdruppe/arsd)](https://github.com/adamdruppe/arsd/blob/master/png.d) - basic color struct, HSL functions and reading and writing image files
* [opencvd ![GitHub Repo Stars](https://img.shields.io/github/stars/aferust/opencvd) ![GitHub last commit](https://img.shields.io/github/last-commit/aferust/opencvd)](https://github.com/aferust/opencvd) - Unofficial OpenCV binding for D

## End-user applications
* [Cryptic-Resolver ![GitHub Repo Stars](https://img.shields.io/github/stars/cryptic-resolver/cr_D) ![GitHub last commit](https://img.shields.io/github/last-commit/cryptic-resolver/cr_D)](https://github.com/cryptic-resolver/cr_D) -  Manage cryptic commands' names, acronyms and your own knowledge base (a command line utility)
* [Inochi Creator ![GitHub Repo Stars](https://img.shields.io/github/stars/Inochi2D/inochi-creator) ![GitHub last commit](https://img.shields.io/github/last-commit/Inochi2D/inochi-creator)](https://github.com/Inochi2D/inochi-creator) - Tool to create and edit Inochi2D puppets
* [Literate ![GitHub Repo Stars](https://img.shields.io/github/stars/zyedidia/Literate) ![GitHub last commit](https://img.shields.io/github/last-commit/zyedidia/Literate)](https://github.com/zyedidia/Literate) - A literate programming tool for any language
* [onedrive ![GitHub Repo Stars](https://img.shields.io/github/stars/abraunegg/onedrive) ![GitHub last commit](https://img.shields.io/github/last-commit/abraunegg/onedrive)](https://github.com/abraunegg/onedrive) - #1 Free OneDrive Client for Linux
* [tshare ![GitHub Repo Stars](https://img.shields.io/github/stars/trikko/tshare) ![GitHub last commit](https://img.shields.io/github/last-commit/trikko/tshare)](https://github.com/trikko/tshare) - fast file sharing from cli, using transfer.sh

## Machine Learning

* [vectorflow ![GitHub Repo Stars](https://img.shields.io/github/stars/Netflix/vectorflow) ![GitHub last commit](https://img.shields.io/github/last-commit/Netflix/vectorflow)](https://github.com/Netflix/vectorflow) - Nexflix's opensource deep learning framework.
* [bindbc-onnxruntime ![GitHub Repo Stars](https://img.shields.io/github/stars/lempiji/bindbc-onnxruntime) ![GitHub last commit](https://img.shields.io/github/last-commit/lempiji/bindbc-onnxruntime)](https://github.com/lempiji/bindbc-onnxruntime) - bindbc bindings to Microsoft's cross-platform, high performance ML inferencing and training accelerator
* [grain2 ![GitHub Repo Stars](https://img.shields.io/github/stars/ShigekiKarita/grain2) ![GitHub last commit](https://img.shields.io/github/last-commit/ShigekiKarita/grain2)](https://github.com/ShigekiKarita/grain2) - Autograd and GPGPU library for dynamic neural networks in D
* [tfd ![GitHub Repo Stars](https://img.shields.io/github/stars/ShigekiKarita/tfd) ![GitHub last commit](https://img.shields.io/github/last-commit/ShigekiKarita/tfd)](https://github.com/ShigekiKarita/tfd) -  Tensorflow wrapper for D 

## Parallel computing

* [DCompute ![GitHub Repo Stars](https://img.shields.io/github/stars/libmir/dcompute) ![GitHub last commit](https://img.shields.io/github/last-commit/libmir/dcompute)](https://github.com/libmir/dcompute) - [GPGPU with Native D for OpenCL and CUDA](https://dlang.org/blog/2017/07/17/dcompute-gpgpu-with-native-d-for-opencl-and-cuda/)
* [DerelictCUDA ![GitHub Repo Stars](https://img.shields.io/github/stars/DerelictOrg/DerelictCUDA) ![GitHub last commit](https://img.shields.io/github/last-commit/DerelictOrg/DerelictCUDA)](https://github.com/DerelictOrg/DerelictCUDA) - Dynamic bindings to the CUDA library for the D Programming Language.
* [DerelictCL ![GitHub Repo Stars](https://img.shields.io/github/stars/DerelictOrg/DerelictCL) ![GitHub last commit](https://img.shields.io/github/last-commit/DerelictOrg/DerelictCL)](https://github.com/DerelictOrg/DerelictCL) - Dynamic bindings to the OpenCL library for the D Programming Language.

## Scientific
*Scientific programming*

* [scid ![GitHub Repo Stars](https://img.shields.io/github/stars/DlangScience/scid) ![GitHub last commit](https://img.shields.io/github/last-commit/DlangScience/scid)](https://github.com/DlangScience/scid) -  Scientific library for the D programming language
* [dstats ![GitHub Repo Stars](https://img.shields.io/github/stars/DlangScience/dstats) ![GitHub last commit](https://img.shields.io/github/last-commit/DlangScience/dstats)](https://github.com/DlangScience/dstats) -  A statistics library for D. 
* [mir ![GitHub Repo Stars](https://img.shields.io/github/stars/libmir/mir) ![GitHub last commit](https://img.shields.io/github/last-commit/libmir/mir)](https://github.com/libmir/mir) -  Sandbox for some mir packages: sparse tensors, Hoffman and others.
* [mir-algorithm ![GitHub Repo Stars](https://img.shields.io/github/stars/libmir/mir) ![GitHub last commit](https://img.shields.io/github/last-commit/libmir/mir)](https://github.com/libmir/mir) - N-dimensional arrays (matrixes, tensors), algorithms, general purpose library.
* [mir-random ![GitHub Repo Stars](https://img.shields.io/github/stars/libmir/mir-random) ![GitHub last commit](https://img.shields.io/github/last-commit/libmir/mir-random)](https://github.com/libmir/mir-random) -  Advanced Random Number Generators.
* [decimals ![GitHub Repo Stars](https://img.shields.io/github/stars/rumbu13/decimal) ![GitHub last commit](https://img.shields.io/github/last-commit/rumbu13/decimal)](https://github.com/rumbu13/decimal) - Decimal library for D.

### Language Processing

* [bindbc-mecab ![GitHub Repo Stars](https://img.shields.io/github/stars/lempiji/bindbc-mecab) ![GitHub last commit](https://img.shields.io/github/last-commit/lempiji/bindbc-mecab)](https://github.com/lempiji/bindbc-mecab) - bindbc MeCab binding (Part-of-Speech and Morphological Analyzer for Japanese)

## Text Processing

* [hunt-markdown ![GitHub Repo Stars](https://img.shields.io/github/stars/huntlabs/hunt-markdown) ![GitHub last commit](https://img.shields.io/github/last-commit/huntlabs/hunt-markdown)](https://github.com/huntlabs/hunt-markdown) - A markdown parsing and rendering library for D programming language. Support commonMark.
* [eBay's TSV utilities ![GitHub Repo Stars](https://img.shields.io/github/stars/eBay/tsv-utils) ![GitHub last commit](https://img.shields.io/github/last-commit/eBay/tsv-utils)](https://github.com/eBay/tsv-utils/) - Filtering, statistics, sampling, joins and other operations on TSV files. Very fast, especially good for large datasets.

## Logging
*Print with care.*

- [std.experimenatal.logger](https://dlang.org/phobos/std_experimental_logger.html) - Phobos's upcoming standard logging facility
- [dlogg ![GitHub Repo Stars](https://img.shields.io/github/stars/NCrashed/dlogg) ![GitHub last commit](https://img.shields.io/github/last-commit/NCrashed/dlogg)](https://github.com/NCrashed/dlogg) - Logging for concurrent applications and daemons with lazy and delayed logging, [logrotate](https://linux.die.net/man/8/logrotate) support.

## Configuration
*Parsing configuration files*

- [sdlang ![GitHub Repo Stars](https://img.shields.io/github/stars/Abscissa/SDLang-D) ![GitHub last commit](https://img.shields.io/github/last-commit/Abscissa/SDLang-D)](https://github.com/Abscissa/SDLang-D) - An SDL (Simple Declarative Language) library for D.
- [D:YAML ![GitHub Repo Stars](https://img.shields.io/github/stars/dlang-community/D-YAML) ![GitHub last commit](https://img.shields.io/github/last-commit/dlang-community/D-YAML)](https://github.com/dlang-community/D-YAML) - YAML parser and emitter for the D programming language.
- [inifile-D ![GitHub Repo Stars](https://img.shields.io/github/stars/burner/inifiled) ![GitHub last commit](https://img.shields.io/github/last-commit/burner/inifiled)](https://github.com/burner/inifiled) - A compile time ini file parser and writter generator for D

## Blog Engine
*Hosting blogs yourself*

- [mood ![GitHub Repo Stars](https://img.shields.io/github/stars/mihails-strasuns/mood) ![GitHub last commit](https://img.shields.io/github/last-commit/mihails-strasuns/mood)](https://github.com/mihails-strasuns/mood) - simple vibe.d based blog engine

## Dependency Injection
*Apply inversion of control*

- [Poodinis ![GitHub Repo Stars](https://img.shields.io/github/stars/mbierlee/poodinis) ![GitHub last commit](https://img.shields.io/github/last-commit/mbierlee/poodinis)](https://github.com/mbierlee/poodinis) - A dependency injection framework for D with support for autowiring.

## Other Awesome Lists
Other amazingly awesome lists can be found in the [awesome-awesome ![GitHub Repo Stars](https://img.shields.io/github/stars/emijrp/awesome-awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/emijrp/awesome-awesome)](https://github.com/emijrp/awesome-awesome) and  [awesome-awesomeness ![GitHub Repo Stars](https://img.shields.io/github/stars/bayandin/awesome-awesomeness) ![GitHub last commit](https://img.shields.io/github/last-commit/bayandin/awesome-awesomeness)](https://github.com/bayandin/awesome-awesomeness) projects.
