<!--lint disable no-dead-urls-->

<p align="center"><img src="https://github.com/vlang/awesome-v/raw/master/media/awesome-v-logo.svg" width="400"/></p>

# Awesome V [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of awesome V frameworks, libraries, software and resources.

[V](https://vlang.io/) is a simple, fast, safe, compiled language for developing maintainable software.

## Contents

- [Applications](#applications)
	- [Command-line](#command-line)
	- [Editors](#editors)
	- [Games](#games)
	- [Graphics](#graphics)
	- [Interpreters/Compilers](#interpreterscompilers)
	- [Operating systems/Kernels](#operating-systemskernels)
	- [Package managers](#package-managers)
	- [Project management](#project-management)
	- [Serialization](#serialization)
	- [Utilities](#utilities)
	- [Web](#web)
- [Libraries](#libraries)
	- [Audio](#audio)
	- [Automation](#automation)
	- [Command line interface (CLI) / Terminal / Shell](#command-line-interface-cli--terminal--shell)
	- [Database clients](#database-clients)
	- [Discord](#discord)
	- [Eventing](#eventing)
	- [File handling](#file-handling)
	- [Game development](#game-development)
	- [Graphics](#graphics-1)
	- [IRC](#irc)
	- [Networking](#networking)
	- [Operating system](#operating-system)
	- [Scientific computing](#scientific-computing)
	- [Serial Communications](#serial-communications)
	- [Telecommunications](#telecommunications)
	- [Telegram](#telegram)
	- [Text processing](#text-processing)
	- [User Interface toolkits](#user-interface-toolkits)
	- [Utility](#utility)
	- [Web](#web-1)
- [Other](#other)
	- [Articles](#articles)
	- [Books](#books)
	- [Communities](#communities)
	- [Editor plugins](#editor-plugins)
	- [Forums](#forums)
	- [GitHub actions](#github-actions)
	- [GitHub templates](#github-templates)
	- [IDEs with V](#ides-with-v)
	- [Online IDEs with V](#online-ides-with-v)
	- [Operating Systems & OS Development Examples](#operating-systems--os-development-examples)
	- [Patterns](#patterns)
	- [Programming contests](#programming-contests)
	- [Syntax highlighting](#syntax-highlighting)
	- [Tutorials](#tutorials)
	- [Videos](#videos)

## Applications

### Command-line

- [crepl ![GitHub Repo Stars](https://img.shields.io/github/stars/l1mey112/crepl) ![GitHub last commit](https://img.shields.io/github/last-commit/l1mey112/crepl)](https://github.com/l1mey112/crepl) - Compile and execute C code on the fly as you type it.
- [github-releases ![GitHub Repo Stars](https://img.shields.io/github/stars/Dracks/repo-download-asset) ![GitHub last commit](https://img.shields.io/github/last-commit/Dracks/repo-download-asset)](https://github.com/Dracks/repo-download-asset) - Cli tool to keep track of applications released as GitHub Release (or assets in workflow) and download them.
- [HN-top ![GitHub Repo Stars](https://img.shields.io/github/stars/BafS/hn-top) ![GitHub last commit](https://img.shields.io/github/last-commit/BafS/hn-top)](https://github.com/BafS/hn-top) - A simple command to list most recent news from hacker-news.
- [klonol ![GitHub Repo Stars](https://img.shields.io/github/stars/hungrybluedev/klonol) ![GitHub last commit](https://img.shields.io/github/last-commit/hungrybluedev/klonol)](https://github.com/hungrybluedev/klonol) - CLI tool to help you "clone all" git repositories belonging to you. Works with GitHub and Gitea.
- [portctl ![GitHub Repo Stars](https://img.shields.io/github/stars/apoprotsky/portctl) ![GitHub last commit](https://img.shields.io/github/last-commit/apoprotsky/portctl)](https://github.com/apoprotsky/portctl) - CLI tool to manage Docker Swarm resources using Portainer API.
- [runner ![GitHub Repo Stars](https://img.shields.io/github/stars/Naheel-Azawy/runner) ![GitHub last commit](https://img.shields.io/github/last-commit/Naheel-Azawy/runner)](https://github.com/Naheel-Azawy/runner) - A tool that automates running/compiling code written in various programming languages.
- [symlinker ![GitHub Repo Stars](https://img.shields.io/github/stars/serkonda7/symlinker) ![GitHub last commit](https://img.shields.io/github/last-commit/serkonda7/symlinker)](https://github.com/serkonda7/symlinker) - A small Linux tool to manage symlinks.
- [vast ![GitHub Repo Stars](https://img.shields.io/github/stars/lydiandy/vast) ![GitHub last commit](https://img.shields.io/github/last-commit/lydiandy/vast)](https://github.com/lydiandy/vast) - A simple tool for vlang, generate v source file to AST json file.
- [vcli ![GitHub Repo Stars](https://img.shields.io/github/stars/changhz/vcli) ![GitHub last commit](https://img.shields.io/github/last-commit/changhz/vcli)](https://github.com/changhz/vcli) - A CLI tool to generate folder structure according to the [guideline](https://blog.vlang.io/the-complete-beginners-guide-to-cli-apps-in-v/)
- [verve ![GitHub Repo Stars](https://img.shields.io/github/stars/MohammadMD1383/verve) ![GitHub last commit](https://img.shields.io/github/last-commit/MohammadMD1383/verve)](https://github.com/MohammadMD1383/verve) - Simple and fast static file server.
- [vgoogle ![GitHub Repo Stars](https://img.shields.io/github/stars/changhz/vgoogle) ![GitHub last commit](https://img.shields.io/github/last-commit/changhz/vgoogle)](https://github.com/changhz/vgoogle) - Make google search on the terminal.
- [vindex ![GitHub Repo Stars](https://img.shields.io/github/stars/wenxuanjun/vindex) ![GitHub last commit](https://img.shields.io/github/last-commit/wenxuanjun/vindex)](https://github.com/wenxuanjun/vindex) - A simple file list server generating json strings, compatible with nginx's autoindex module.
- [vinit ![GitHub Repo Stars](https://img.shields.io/github/stars/pranavbaburaj/vinit) ![GitHub last commit](https://img.shields.io/github/last-commit/pranavbaburaj/vinit)](https://github.com/pranavbaburaj/vinit) - A tool to generate v projects.
- [vLogQL ![GitHub Repo Stars](https://img.shields.io/github/stars/lmangani/vLogQL) ![GitHub last commit](https://img.shields.io/github/last-commit/lmangani/vLogQL)](https://github.com/lmangani/vLogQL) - A tiny command-line utility to query LogQL APIs.
- [vqrcode ![GitHub Repo Stars](https://img.shields.io/github/stars/carlosqsilva/vqrcode) ![GitHub last commit](https://img.shields.io/github/last-commit/carlosqsilva/vqrcode)](https://github.com/carlosqsilva/vqrcode) - CLI for creating QR Codes.
- [vspect ![GitHub Repo Stars](https://img.shields.io/github/stars/zakuro9715/vspect) ![GitHub last commit](https://img.shields.io/github/last-commit/zakuro9715/vspect)](https://github.com/zakuro9715/vspect) - A tool to inspect vlang source file. ( Archived )
- [vzcc ![GitHub Repo Stars](https://img.shields.io/github/stars/malisipi/vzcc) ![GitHub last commit](https://img.shields.io/github/last-commit/malisipi/vzcc)](https://github.com/malisipi/vzcc) - A CLI cross-compiling tool based on Zig CC for V.

### Editors

- [polygon-editor ![GitHub Repo Stars](https://img.shields.io/github/stars/ArtemkaKun/polygon-editor) ![GitHub last commit](https://img.shields.io/github/last-commit/ArtemkaKun/polygon-editor)](https://github.com/ArtemkaKun/polygon-editor) - A tool to create and edit 2D polygons with sprite lookup, created in V.
- [text_editor ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/v) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/v)](https://github.com/vlang/v/blob/master/examples/term.ui/text_editor.v) - Small text editor from the official V examples.
- [ved ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/ved) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/ved)](https://github.com/vlang/ved) - 1 MB text editor written in V with hardware accelerated text rendering. Compiles in <1s.
- [vee ![GitHub Repo Stars](https://img.shields.io/github/stars/Larpon/vee) ![GitHub last commit](https://img.shields.io/github/last-commit/Larpon/vee)](https://github.com/Larpon/vee) - V Editor Engine. A V module providing the guts of a text editor. Comes with a [TUI editor example ![GitHub Repo Stars](https://img.shields.io/github/stars/Larpon/vee) ![GitHub last commit](https://img.shields.io/github/last-commit/Larpon/vee)](https://github.com/Larpon/vee/blob/master/examples/tuieditor/).
- [vPDF ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/pdf) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/pdf)](https://github.com/vlang/pdf) - A module to simplify PDF file creation using the V programming language.

### Games

- [2048 ![GitHub Repo Stars](https://img.shields.io/github/stars/wenxuanjun/2048) ![GitHub last commit](https://img.shields.io/github/last-commit/wenxuanjun/2048)](https://github.com/wenxuanjun/2048) - A 2048 game with several types of traditional AI integrated.
- [Boundstone ![GitHub Repo Stars](https://img.shields.io/github/stars/organization/boundstone) ![GitHub last commit](https://img.shields.io/github/last-commit/organization/boundstone)](https://github.com/organization/boundstone) - High Performance / Fast Compilation / Lightweight Minecraft: Bedrock Edition Server.
- [flappylearning-v ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/v) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/v)](https://github.com/vlang/v/tree/master/examples/flappylearning) - A simple flappy learning demo in v.
- [Kurarin ![GitHub Repo Stars](https://img.shields.io/github/stars/FireRedz/kurarin) ![GitHub last commit](https://img.shields.io/github/last-commit/FireRedz/kurarin)](https://github.com/FireRedz/kurarin) - osu! beatmap visualizer made in V. [Example video](https://p153.p0.n0.cdn.getcloudapp.com/items/6quvQjb5/ce3ea737-eb29-4b8c-a5f3-65a804a2f56f.mp4).
- [minesweeper ![GitHub Repo Stars](https://img.shields.io/github/stars/ali-furkan/minesweeper-v) ![GitHub last commit](https://img.shields.io/github/last-commit/ali-furkan/minesweeper-v)](https://github.com/ali-furkan/minesweeper-v) - A simple Minesweeper game written in vlang.
- [Puzzle Vibes ![GitHub Repo Stars](https://img.shields.io/github/stars/Larpon/puzzle_vibes) ![GitHub last commit](https://img.shields.io/github/last-commit/Larpon/puzzle_vibes)](https://github.com/Larpon/puzzle_vibes) - A jigsaw-like puzzle game written in V using `shy`.
- [v-pong ![GitHub Repo Stars](https://img.shields.io/github/stars/thebigsmileXD/v-pong) ![GitHub last commit](https://img.shields.io/github/last-commit/thebigsmileXD/v-pong)](https://github.com/thebigsmileXD/v-pong) - A classic paddle game brought back to life through the power of V.

### Graphics

- [mpv-v ![GitHub Repo Stars](https://img.shields.io/github/stars/xjunko/mpv-v) ![GitHub last commit](https://img.shields.io/github/last-commit/xjunko/mpv-v)](https://github.com/xjunko/mpv-v) - World's Simplest Video Player.
- [vRayTracer ![GitHub Repo Stars](https://img.shields.io/github/stars/ali-raheem/vraytracer) ![GitHub last commit](https://img.shields.io/github/last-commit/ali-raheem/vraytracer)](https://github.com/ali-raheem/vraytracer) - A simple ray tracer written in V.

### Interpreters/Compilers

- [cotowali ![GitHub Repo Stars](https://img.shields.io/github/stars/cotowali/cotowali) ![GitHub last commit](https://img.shields.io/github/last-commit/cotowali/cotowali)](https://github.com/cotowali/cotowali) - A statically typed scripting language that transpiles into POSIX sh.
- [monkey_v ![GitHub Repo Stars](https://img.shields.io/github/stars/Delta456/monkey_v) ![GitHub last commit](https://img.shields.io/github/last-commit/Delta456/monkey_v)](https://github.com/Delta456/monkey_v) - Implementation of [Thorsten Ball's Monkey Language](https://interpreterbook.com/) in V.
- [stas ![GitHub Repo Stars](https://img.shields.io/github/stars/l1mey112/stas) ![GitHub last commit](https://img.shields.io/github/last-commit/l1mey112/stas)](https://github.com/l1mey112/stas/tree/0.1.0-v-compiler) - A stack based compiled programming language. The bootstrap compiler is written in V.
- [v ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/v) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/v)](https://github.com/vlang/v) - V itself. Simple, fast, safe, compiled language for developing maintainable software.
- [vas ![GitHub Repo Stars](https://img.shields.io/github/stars/v420v/vas) ![GitHub last commit](https://img.shields.io/github/last-commit/v420v/vas)](https://github.com/v420v/vas) - A simple x86-64 assembler written in V.
- [vbf ![GitHub Repo Stars](https://img.shields.io/github/stars/vpervenditti/vbf) ![GitHub last commit](https://img.shields.io/github/last-commit/vpervenditti/vbf)](https://github.com/vpervenditti/vbf) - A brainfuck interpreter/compiler.
- [vfuck ![GitHub Repo Stars](https://img.shields.io/github/stars/ShayokhShorfuddin/VFuck) ![GitHub last commit](https://img.shields.io/github/last-commit/ShayokhShorfuddin/VFuck)](https://github.com/ShayokhShorfuddin/VFuck) - A brainfuck interpreter written in V.
- [vcc ![GitHub Repo Stars](https://img.shields.io/github/stars/lemoncmd/vcc) ![GitHub last commit](https://img.shields.io/github/last-commit/lemoncmd/vcc)](https://github.com/lemoncmd/vcc) - A C compiler written in V.
- [Vork ![GitHub Repo Stars](https://img.shields.io/github/stars/Itay2805/Vork) ![GitHub last commit](https://img.shields.io/github/last-commit/Itay2805/Vork)](https://github.com/Itay2805/Vork) - Alternative V compiler/interpreter written in Python.

### Operating systems/Kernels

- [Vinix ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/vinix) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/vinix)](https://github.com/vlang/vinix) - Small and simple OS in V. Runs bash.

### Package managers

- [vpm ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/vpm) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/vpm)](https://github.com/vlang/vpm) - The V language package management tool written in V.

### Project management

- [Lenra template ![GitHub Repo Stars](https://img.shields.io/github/stars/lenra-io/template-v) ![GitHub last commit](https://img.shields.io/github/last-commit/lenra-io/template-v)](https://github.com/lenra-io/template-v) - The Lenra template to write V app for Lenra platform.
- [vset ![GitHub Repo Stars](https://img.shields.io/github/stars/mulh8377/vset) ![GitHub last commit](https://img.shields.io/github/last-commit/mulh8377/vset)](https://github.com/mulh8377/vset) - A project setup and configuration tool for V projects.

### Serialization

- [ini-v ![GitHub Repo Stars](https://img.shields.io/github/stars/ldedev/ini-v) ![GitHub last commit](https://img.shields.io/github/last-commit/ldedev/ini-v)](https://github.com/ldedev/ini-v) - Simple and practical module for manipulating ini/cfg file.
- [v-toxml ![GitHub Repo Stars](https://img.shields.io/github/stars/radare/v-toxml) ![GitHub last commit](https://img.shields.io/github/last-commit/radare/v-toxml)](https://github.com/radare/v-toxml) - XML Serialization library for V.
- [vgura ![GitHub Repo Stars](https://img.shields.io/github/stars/gura-conf/vgura) ![GitHub last commit](https://img.shields.io/github/last-commit/gura-conf/vgura)](https://github.com/gura-conf/vgura) - Official Gura parser for V.
- [vlang-yaml ![GitHub Repo Stars](https://img.shields.io/github/stars/jdonnerstag/vlang-yaml) ![GitHub last commit](https://img.shields.io/github/last-commit/jdonnerstag/vlang-yaml)](https://github.com/jdonnerstag/vlang-yaml) - A V-native YAML reader, incl. YAML-to-JSON converter.
- [vproto ![GitHub Repo Stars](https://img.shields.io/github/stars/emily33901/vproto) ![GitHub last commit](https://img.shields.io/github/last-commit/emily33901/vproto)](https://github.com/emily33901/vproto) - Protobuf compiler and runtime in V.

### Utilities

- [emoji-mart-desktop ![GitHub Repo Stars](https://img.shields.io/github/stars/ttytm/emoji-mart-desktop) ![GitHub last commit](https://img.shields.io/github/last-commit/ttytm/emoji-mart-desktop)](https://github.com/ttytm/emoji-mart-desktop) - An emoji picker created with V, webview and SvelteKit.

### Web

- [Gitly ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/gitly) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/gitly)](https://github.com/vlang/gitly) - A light and fast SCM alternative to GitHub/GitLab written in V.
- [Heroku Buildpack for V ![GitHub Repo Stars](https://img.shields.io/github/stars/zztkm/heroku-buildpack-v) ![GitHub last commit](https://img.shields.io/github/last-commit/zztkm/heroku-buildpack-v)](https://github.com/zztkm/heroku-buildpack-v) - Deploy V apps on Heroku.
- [v-admin-skeleton ![GitHub Repo Stars](https://img.shields.io/github/stars/xiusin/v-system-skeleton) ![GitHub last commit](https://img.shields.io/github/last-commit/xiusin/v-system-skeleton)](https://github.com/xiusin/v-system-skeleton) - Backend skeleton written in V.
- [vblog ![GitHub Repo Stars](https://img.shields.io/github/stars/scurty-labs/vblog) ![GitHub last commit](https://img.shields.io/github/last-commit/scurty-labs/vblog)](https://github.com/scurty-labs/vblog) - A simple, fast and responsive blogging system.
- [Vebview.JS ![GitHub Repo Stars](https://img.shields.io/github/stars/malisipi/Vebview.JS) ![GitHub last commit](https://img.shields.io/github/last-commit/malisipi/Vebview.JS)](https://github.com/malisipi/Vebview.JS) - Electron/Neutralino.JS alternative written in V.
- [Vieter ![GitHub Repo Stars](https://img.shields.io/github/stars/ChewingBever/vieter) ![GitHub last commit](https://img.shields.io/github/last-commit/ChewingBever/vieter)](https://github.com/ChewingBever/vieter) - Archlinux repository server & package build system, written in V.
- [Vlang Benchmarks Visualization ![GitHub Repo Stars](https://img.shields.io/github/stars/ArtemkaKun/VlangBenchmarksVisualization) ![GitHub last commit](https://img.shields.io/github/last-commit/ArtemkaKun/VlangBenchmarksVisualization)](https://github.com/ArtemkaKun/VlangBenchmarksVisualization) - Fancy statistics and plots for *[Is V still fast?](https://fast.vlang.io/)*.
- [vorum ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/vorum) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/vorum)](https://github.com/vlang/vorum) - Open-source blogging/forum software written in V.
- [vss ![GitHub Repo Stars](https://img.shields.io/github/stars/vssio/vss) ![GitHub last commit](https://img.shields.io/github/last-commit/vssio/vss)](https://github.com/vssio/vss) - Easy-to-use static site generator.
- [VTik ![GitHub Repo Stars](https://img.shields.io/github/stars/Sharqo78/VTik) ![GitHub last commit](https://img.shields.io/github/last-commit/Sharqo78/VTik)](https://github.com/Sharqo78/VTik) - TikTok and Twitter video downloader app (CLI / Telegram Bot).

## Libraries

### Audio

- [miniaudio ![GitHub Repo Stars](https://img.shields.io/github/stars/Larpon/miniaudio) ![GitHub last commit](https://img.shields.io/github/last-commit/Larpon/miniaudio)](https://github.com/Larpon/miniaudio) - Bindings for the excellent miniaudio C audio library.
- [vave ![GitHub Repo Stars](https://img.shields.io/github/stars/thecodrr/vave) ![GitHub last commit](https://img.shields.io/github/last-commit/thecodrr/vave)](https://github.com/thecodrr/vave) - A crazy simple library for reading/writing WAV files in V. 🌊
- [vspeech ![GitHub Repo Stars](https://img.shields.io/github/stars/thecodrr/vspeech) ![GitHub last commit](https://img.shields.io/github/last-commit/thecodrr/vspeech)](https://github.com/thecodrr/vspeech) - Complete V bindings for Mozilla's DeepSpeech TensorFlow based Speech-to-Text library. 📢📜

### Automation

- [vrobot ![GitHub Repo Stars](https://img.shields.io/github/stars/eioo/vrobot) ![GitHub last commit](https://img.shields.io/github/last-commit/eioo/vrobot)](https://github.com/eioo/vrobot) - Desktop automation for V. Only supports Windows.

### Command line interface (CLI) / Terminal / Shell

- [bartender ![GitHub Repo Stars](https://img.shields.io/github/stars/tobealive/bartender) ![GitHub last commit](https://img.shields.io/github/last-commit/tobealive/bartender)](https://github.com/tobealive/bartender) - Customizable progress indicators for V terminal applications.
- [boxx ![GitHub Repo Stars](https://img.shields.io/github/stars/thecodrr/boxx) ![GitHub last commit](https://img.shields.io/github/last-commit/thecodrr/boxx)](https://github.com/thecodrr/boxx) - Create highly customizable terminal boxes that also look great! 📦
- [lol ![GitHub Repo Stars](https://img.shields.io/github/stars/0xLeif/lol) ![GitHub last commit](https://img.shields.io/github/last-commit/0xLeif/lol)](https://github.com/0xLeif/lol) - V version of lolcat (text/character rainbowizer).
- [progressbar ![GitHub Repo Stars](https://img.shields.io/github/stars/Waqar144/progressbar) ![GitHub last commit](https://img.shields.io/github/last-commit/Waqar144/progressbar)](https://github.com/Waqar144/progressbar) - An easy to use V library for creating progress bars in cli.
- [spinners ![GitHub Repo Stars](https://img.shields.io/github/stars/rhygg/spinners) ![GitHub last commit](https://img.shields.io/github/last-commit/rhygg/spinners)](https://github.com/rhygg/spinners) - Create spinners in your terminal!
- [termtable ![GitHub Repo Stars](https://img.shields.io/github/stars/serkonda7/termtable) ![GitHub last commit](https://img.shields.io/github/last-commit/serkonda7/termtable)](https://github.com/serkonda7/termtable) - V Terminal Tables: Simple and highly customizable library to display tables in the terminal.
- [vargs ![GitHub Repo Stars](https://img.shields.io/github/stars/nedpals/vargs) ![GitHub last commit](https://img.shields.io/github/last-commit/nedpals/vargs)](https://github.com/nedpals/vargs) - V library for parsing arguments from argv-like arrays. ( Archived )
- [vesseract ![GitHub Repo Stars](https://img.shields.io/github/stars/barrack-obama/vesseract) ![GitHub last commit](https://img.shields.io/github/last-commit/barrack-obama/vesseract)](https://github.com/barrack-obama/vesseract) - V wrapper for Tesseract-OCR (optical character recognition).

### Database clients

- [redis ![GitHub Repo Stars](https://img.shields.io/github/stars/Coachonko/redis) ![GitHub last commit](https://img.shields.io/github/last-commit/Coachonko/redis)](https://github.com/Coachonko/redis) - Connect and interface with Redis-compatible databases.
- [redis ![GitHub Repo Stars](https://img.shields.io/github/stars/patrickpissurno/vredis) ![GitHub last commit](https://img.shields.io/github/last-commit/patrickpissurno/vredis)](https://github.com/patrickpissurno/vredis) - Redis client for V, written in V.
- [vmemcached ![GitHub Repo Stars](https://img.shields.io/github/stars/blacktrub/vmemcached) ![GitHub last commit](https://img.shields.io/github/last-commit/blacktrub/vmemcached)](https://github.com/blacktrub/vmemcached) - Memcached client for V, written in V.
- [vredis ![GitHub Repo Stars](https://img.shields.io/github/stars/xiusin/vredis) ![GitHub last commit](https://img.shields.io/github/last-commit/xiusin/vredis)](https://github.com/xiusin/vredis) - A simple, user-friendly, and comprehensive Redis client.
- [vsql ![GitHub Repo Stars](https://img.shields.io/github/stars/lydiandy/vsql) ![GitHub last commit](https://img.shields.io/github/last-commit/lydiandy/vsql)](https://github.com/lydiandy/vsql) - A sql query builder for V.

### Discord

- [discord.v ![GitHub Repo Stars](https://img.shields.io/github/stars/Terisback/discord.v) ![GitHub last commit](https://img.shields.io/github/last-commit/Terisback/discord.v)](https://github.com/Terisback/discord.v) - User-friendly Discord bot library.
- [discordwebhook ![GitHub Repo Stars](https://img.shields.io/github/stars/ysdragon/discordwebhook) ![GitHub last commit](https://img.shields.io/github/last-commit/ysdragon/discordwebhook)](https://github.com/ysdragon/discordwebhook) - Super simple interface to send discord messages through webhooks.
- [kitten ![GitHub Repo Stars](https://img.shields.io/github/stars/geniushq/kitten) ![GitHub last commit](https://img.shields.io/github/last-commit/geniushq/kitten)](https://github.com/geniushq/kitten) - Simple Discord API library for writing bots.
- [viscord ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/viscord) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/viscord)](https://github.com/vlang/viscord) - Pretty basic library for connecting to the Discord gateway.
- [vord ![GitHub Repo Stars](https://img.shields.io/github/stars/9xN/vord) ![GitHub last commit](https://img.shields.io/github/last-commit/9xN/vord)](https://github.com/9xN/vord) - Library for interacting with user account endpoints and gateway (Self-bots, custom clients, etc).

### Eventing

- [eventbus ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/v) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/v)](https://github.com/vlang/v/tree/master/vlib/eventbus) - A simple event bus system for V.

### File handling

- [v-mime ![GitHub Repo Stars](https://img.shields.io/github/stars/nedpals/v-mime) ![GitHub last commit](https://img.shields.io/github/last-commit/nedpals/v-mime)](https://github.com/nedpals/v-mime) - MIME detection library for V.
- [vmon ![GitHub Repo Stars](https://img.shields.io/github/stars/Larpon/vmon) ![GitHub last commit](https://img.shields.io/github/last-commit/Larpon/vmon)](https://github.com/Larpon/vmon) - Asynchronously watch for file changes in a directory. The module is essentially a V wrapper for `septag/dmon`. It works for Windows, macOS and Linux.

### Game development

- [engine ![GitHub Repo Stars](https://img.shields.io/github/stars/LouisSchmieder/engine) ![GitHub last commit](https://img.shields.io/github/last-commit/LouisSchmieder/engine)](https://github.com/LouisSchmieder/engine) - WIP Vulkan in V.
- [raylib.v ![GitHub Repo Stars](https://img.shields.io/github/stars/irishgreencitrus/raylib.v) ![GitHub last commit](https://img.shields.io/github/last-commit/irishgreencitrus/raylib.v)](https://github.com/irishgreencitrus/raylib.v) - Updated V bindings for [raylib](https://www.raylib.com) with plans for complete cross-platform support.
- [shy ![GitHub Repo Stars](https://img.shields.io/github/stars/Larpon/shy) ![GitHub last commit](https://img.shields.io/github/last-commit/Larpon/shy)](https://github.com/Larpon/shy) - A foundation that helps you being creative in V.
- [V_ecs ![GitHub Repo Stars](https://img.shields.io/github/stars/mohamedLT/V_ecs) ![GitHub last commit](https://img.shields.io/github/last-commit/mohamedLT/V_ecs)](https://github.com/mohamedLT/V_ecs) - ECS library made in V inspired by Bevy ECS.
- [vraylib ![GitHub Repo Stars](https://img.shields.io/github/stars/mohamedLT/vraylib) ![GitHub last commit](https://img.shields.io/github/last-commit/mohamedLT/vraylib)](https://github.com/mohamedLT/vraylib) - A V wrapper for the awesome raylib library.
- [vraylib ![GitHub Repo Stars](https://img.shields.io/github/stars/MajorHard/vraylib) ![GitHub last commit](https://img.shields.io/github/last-commit/MajorHard/vraylib)](https://github.com/MajorHard/vraylib) - V wrapper (bindings) for raylib, the C game development framework.

### Graphics

- [V Earcut ![GitHub Repo Stars](https://img.shields.io/github/stars/Larpon/earcut) ![GitHub last commit](https://img.shields.io/github/last-commit/Larpon/earcut)](https://github.com/Larpon/earcut) - fast (real-time) polygon triangulation library based on [mapbox/Earcut ![GitHub Repo Stars](https://img.shields.io/github/stars/mapbox/earcut) ![GitHub last commit](https://img.shields.io/github/last-commit/mapbox/earcut)](https://github.com/mapbox/earcut) to handle holes, twisted polygons, degeneracies and self-intersections.
- [V_sokol_gp ![GitHub Repo Stars](https://img.shields.io/github/stars/mohamedLT/V_sokol_gp) ![GitHub last commit](https://img.shields.io/github/last-commit/mohamedLT/V_sokol_gp)](https://github.com/mohamedLT/V_sokol_gp) - A V wrapper for the sokol_gp library for easy and fast 2d graphics.
- [viup ![GitHub Repo Stars](https://img.shields.io/github/stars/kjlaw89/viup) ![GitHub last commit](https://img.shields.io/github/last-commit/kjlaw89/viup)](https://github.com/kjlaw89/viup) - V wrapper for the C-based cross-platform UI library, IUP.
- [vsdl ![GitHub Repo Stars](https://img.shields.io/github/stars/kjlaw89/vsdl) ![GitHub last commit](https://img.shields.io/github/last-commit/kjlaw89/vsdl)](https://github.com/kjlaw89/vsdl) - V wrapper for the C-based SDL library.
- [vsdl2 ![GitHub Repo Stars](https://img.shields.io/github/stars/nsauzede/vsdl2) ![GitHub last commit](https://img.shields.io/github/last-commit/nsauzede/vsdl2)](https://github.com/nsauzede/vsdl2) - A libSDL2 wrapper.
- [vsl.vcl ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/vsl) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/vsl)](https://github.com/vlang/vsl/tree/master/vcl#readme) - VCL is a high level way of writing programs with OpenCL using V. These are highly opinionated OpenCL bindings for V. It tries to make GPU computing easy, with some sugar abstraction, V's concurrency and channels.

### IRC

- [vitric ![GitHub Repo Stars](https://img.shields.io/github/stars/m-242/vitric) ![GitHub last commit](https://img.shields.io/github/last-commit/m-242/vitric)](https://github.com/m-242/vitric) - A transparent IRC library.

### Networking

- [vibe ![GitHub Repo Stars](https://img.shields.io/github/stars/tobealive/vibe) ![GitHub last commit](https://img.shields.io/github/last-commit/tobealive/vibe)](https://github.com/tobealive/vibe) - Request library that wraps libcurl to enable fast and reliable requests while providing a higher-level API.
- [vmq ![GitHub Repo Stars](https://img.shields.io/github/stars/jordan-bonecutter/vmq) ![GitHub last commit](https://img.shields.io/github/last-commit/jordan-bonecutter/vmq)](https://github.com/jordan-bonecutter/vmq) -  V wrapper For [ZMQ](https://zeromq.org/) (aka ZeroMQ, ØMQ, 0MQ: a high-performance asynchronous messaging library).

### Operating system

- [clipboard ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/v) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/v)](https://github.com/vlang/v/tree/master/vlib/clipboard) - V module for interacting with the OS clipboard. Fully cross-platform.
- [mmap ![GitHub Repo Stars](https://img.shields.io/github/stars/jdonnerstag/vlang-mmap) ![GitHub last commit](https://img.shields.io/github/last-commit/jdonnerstag/vlang-mmap)](https://github.com/jdonnerstag/vlang-mmap) - Provide native V-lang support for memory-mapping on Linux and Windows.
- [vlipboard ![GitHub Repo Stars](https://img.shields.io/github/stars/asvvvad/vlipboard) ![GitHub last commit](https://img.shields.io/github/last-commit/asvvvad/vlipboard)](https://github.com/asvvvad/vlipboard) - An easy to use wrapper of clipboard with Wayland and Termux support.
- [winreg ![GitHub Repo Stars](https://img.shields.io/github/stars/ldedev/WindowsRegistry) ![GitHub last commit](https://img.shields.io/github/last-commit/ldedev/WindowsRegistry)](https://github.com/ldedev/WindowsRegistry) - MS Windows Registry API. (WIP)

### Scientific computing

- [vplot ![GitHub Repo Stars](https://img.shields.io/github/stars/erdetn/vplot) ![GitHub last commit](https://img.shields.io/github/last-commit/erdetn/vplot)](https://github.com/erdetn/vplot) - V wrapper for GNU Plot (`gnuplot_i`).
- [vsl ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/vsl) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/vsl)](https://github.com/vlang/vsl) - VSL is a Scientific Library with a great variety of different modules. Although most modules offer pure-V definitions, VSL also provides modules that wrap known C libraries among other backends that allow high performance computing as an alternative. Also provides opinionated wrappers for OpenBLAS, LAPACKE, MPI, OpenCL among other libraries.
- [vtl ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/vtl) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/vtl)](https://github.com/vlang/vtl) - The V Tensor Library is a numerical computing library supporting n-dimensional data structure, backed by VSL.

### Serial Communications

- [vi2c ![GitHub Repo Stars](https://img.shields.io/github/stars/erdetn/vi2c) ![GitHub last commit](https://img.shields.io/github/last-commit/erdetn/vi2c)](https://github.com/erdetn/vi2c) - A tiny (wrapper) library for I2C serial communication for Linux written in V.
- [vserialport ![GitHub Repo Stars](https://img.shields.io/github/stars/erdetn/vserialport) ![GitHub last commit](https://img.shields.io/github/last-commit/erdetn/vserialport)](https://github.com/erdetn/vserialport) - V wrapper for [libserialport](https://sigrok.org/wiki/Libserialport).
- [vserialx ![GitHub Repo Stars](https://img.shields.io/github/stars/erdetn/vserialx) ![GitHub last commit](https://img.shields.io/github/last-commit/erdetn/vserialx)](https://github.com/erdetn/vserialx) - A tiny (wrapper) serial communication library for Linux written in V.

### Telecommunications

- [vagi ![GitHub Repo Stars](https://img.shields.io/github/stars/Ouri028/vagi) ![GitHub last commit](https://img.shields.io/github/last-commit/Ouri028/vagi)](https://github.com/Ouri028/vagi) - Asterisk FastAGI library in V.

### Telegram

- [vgram ![GitHub Repo Stars](https://img.shields.io/github/stars/dariotarantini/vgram) ![GitHub last commit](https://img.shields.io/github/last-commit/dariotarantini/vgram)](https://github.com/dariotarantini/vgram) - Telegram bot library.

### Text processing

- [ascii_robot ![GitHub Repo Stars](https://img.shields.io/github/stars/Delta456/ascii_robot) ![GitHub last commit](https://img.shields.io/github/last-commit/Delta456/ascii_robot)](https://github.com/Delta456/ascii_robot) - ASCII Robot generator written in V.
- [chalk ![GitHub Repo Stars](https://img.shields.io/github/stars/etienne-napoleone/chalk) ![GitHub last commit](https://img.shields.io/github/last-commit/etienne-napoleone/chalk)](https://github.com/etienne-napoleone/chalk) - Colorize strings in the terminal.
- [cjson ![GitHub Repo Stars](https://img.shields.io/github/stars/lydiandy/cjson) ![GitHub last commit](https://img.shields.io/github/last-commit/lydiandy/cjson)](https://github.com/lydiandy/cjson) - Wrap cJSON for vlang.
- [crayon ![GitHub Repo Stars](https://img.shields.io/github/stars/thecodrr/crayon) ![GitHub last commit](https://img.shields.io/github/last-commit/thecodrr/crayon)](https://github.com/thecodrr/crayon) - Paint your terminal output like Picasso. 🖍️🎨
- [iconv ![GitHub Repo Stars](https://img.shields.io/github/stars/fanlia/iconv) ![GitHub last commit](https://img.shields.io/github/last-commit/fanlia/iconv)](https://github.com/fanlia/iconv) - Wrap iconv for vlang.
- [pcre2 ![GitHub Repo Stars](https://img.shields.io/github/stars/srackham/pcre2) ![GitHub last commit](https://img.shields.io/github/last-commit/srackham/pcre2)](https://github.com/srackham/pcre2) - Library for processing PCRE regular expressions.
- [read_xlsx_v ![GitHub Repo Stars](https://img.shields.io/github/stars/fanlia/read_xlsx_v) ![GitHub last commit](https://img.shields.io/github/last-commit/fanlia/read_xlsx_v)](https://github.com/fanlia/read_xlsx_v) - Read xlsx using vlang.
- [Rosie-RPL ![GitHub Repo Stars](https://img.shields.io/github/stars/jdonnerstag/vlang-rosie) ![GitHub last commit](https://img.shields.io/github/last-commit/jdonnerstag/vlang-rosie)](https://github.com/jdonnerstag/vlang-rosie) - A Rosie Pattern Language (RPL) implementation.
- [slugify ![GitHub Repo Stars](https://img.shields.io/github/stars/Coachonko/slugify) ![GitHub last commit](https://img.shields.io/github/last-commit/Coachonko/slugify)](https://github.com/Coachonko/slugify) - Transform Unicode strings to url-friendly human-readable ASCII slugs.
- [strfmt ![GitHub Repo Stars](https://img.shields.io/github/stars/BenStigsen/strfmt) ![GitHub last commit](https://img.shields.io/github/last-commit/BenStigsen/strfmt)](https://github.com/BenStigsen/strfmt) - Tiny and fast string formatting library ideal for templating.
- [text-processing ![GitHub Repo Stars](https://img.shields.io/github/stars/ArtemkaKun/text-processing) ![GitHub last commit](https://img.shields.io/github/last-commit/ArtemkaKun/text-processing)](https://github.com/ArtemkaKun/text-processing) - V text processing library, that contains common tools to manipulate text data.
- [v-regex ![GitHub Repo Stars](https://img.shields.io/github/stars/spytheman/v-regex) ![GitHub last commit](https://img.shields.io/github/last-commit/spytheman/v-regex)](https://github.com/spytheman/v-regex) - A simple regex library for V.
- [vxml ![GitHub Repo Stars](https://img.shields.io/github/stars/walkingdevel/vxml) ![GitHub last commit](https://img.shields.io/github/last-commit/walkingdevel/vxml)](https://github.com/walkingdevel/vxml) - Pure V library for parsing XML to a DOM.
- [whisker ![GitHub Repo Stars](https://img.shields.io/github/stars/hungrybluedev/whisker) ![GitHub last commit](https://img.shields.io/github/last-commit/hungrybluedev/whisker)](https://github.com/hungrybluedev/whisker) - Fast, robust template engine for V inspired by mustache.
- [lexical_uuid ![GitHub Repo Stars](https://img.shields.io/github/stars/Coachonko/lexical_uuid) ![GitHub last commit](https://img.shields.io/github/last-commit/Coachonko/lexical_uuid)](https://github.com/Coachonko/lexical_uuid) - Lexicographically-sortable universally unique identifiers.

### User Interface toolkits

- [iUI ![GitHub Repo Stars](https://img.shields.io/github/stars/isaiahpatton/ui) ![GitHub last commit](https://img.shields.io/github/last-commit/isaiahpatton/ui)](https://github.com/isaiahpatton/ui) - Isaiah's cross-platform GUI library for V. Inspired by the syntax of Java's Swing.
- [mui ![GitHub Repo Stars](https://img.shields.io/github/stars/malisipi/mui) ![GitHub last commit](https://img.shields.io/github/last-commit/malisipi/mui)](https://github.com/malisipi/mui) - A Cross-Platform UI library for Windows, Linux, Android and Web.
- [V UI ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/ui) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/ui)](https://github.com/vlang/ui) - Integrated cross platform UI toolkit for Windows, macOS, Linux, Android, iOS and the web.
- [vgtk3 ![GitHub Repo Stars](https://img.shields.io/github/stars/vgtk/vgtk3) ![GitHub last commit](https://img.shields.io/github/last-commit/vgtk/vgtk3)](https://github.com/vgtk/vgtk3) - A wrapper for GTK3 in V.
- [vig ![GitHub Repo Stars](https://img.shields.io/github/stars/nsauzede/vig) ![GitHub last commit](https://img.shields.io/github/last-commit/nsauzede/vig)](https://github.com/nsauzede/vig) - Bindings for [Dear ImGui ![GitHub Repo Stars](https://img.shields.io/github/stars/ocornut/imgui) ![GitHub last commit](https://img.shields.io/github/last-commit/ocornut/imgui)](https://github.com/ocornut/imgui) GUI toolkit.
- [vnk ![GitHub Repo Stars](https://img.shields.io/github/stars/nsauzede/vnk) ![GitHub last commit](https://img.shields.io/github/last-commit/nsauzede/vnk)](https://github.com/nsauzede/vnk) - Bindings for [Nuklear ![GitHub Repo Stars](https://img.shields.io/github/stars/vurtun/nuklear) ![GitHub last commit](https://img.shields.io/github/last-commit/vurtun/nuklear)](https://github.com/vurtun/nuklear) GUI toolkit.
- [V-WebUI ![GitHub Repo Stars](https://img.shields.io/github/stars/webui-dev/v-webui) ![GitHub last commit](https://img.shields.io/github/last-commit/webui-dev/v-webui)](https://github.com/webui-dev/v-webui) - A wrapper for WebUI. A lightweight library that allows you to use any web browser as a GUI, with V in the backend and HTML5 in the frontend.
- [webview ![GitHub Repo Stars](https://img.shields.io/github/stars/ttytm/webview) ![GitHub last commit](https://img.shields.io/github/last-commit/ttytm/webview)](https://github.com/ttytm/webview) - Bindings for webview. A tiny library to build modern cross-platform GUI applications. It allows to combine V with modern web technologies to design a graphical user interface.

### Utility

- [dialog ![GitHub Repo Stars](https://img.shields.io/github/stars/ttytm/dialog) ![GitHub last commit](https://img.shields.io/github/last-commit/ttytm/dialog)](https://github.com/ttytm/dialog) - A cross-platform utility library to open system dialogs - open files, message boxes, color-pickers etc.
- [json2v ![GitHub Repo Stars](https://img.shields.io/github/stars/ldedev/Json2V) ![GitHub last commit](https://img.shields.io/github/last-commit/ldedev/Json2V)](https://github.com/ldedev/Json2V) - Convert a json to a struct in Vlang.
- [objc ![GitHub Repo Stars](https://img.shields.io/github/stars/magic003/objc) ![GitHub last commit](https://img.shields.io/github/last-commit/magic003/objc)](https://github.com/magic003/objc) - V bindings to Objective-C runtime.
- [range ![GitHub Repo Stars](https://img.shields.io/github/stars/Delta456/range) ![GitHub last commit](https://img.shields.io/github/last-commit/Delta456/range)](https://github.com/Delta456/range) - Functionality of Python's range() in V.
- [ssh-config ![GitHub Repo Stars](https://img.shields.io/github/stars/walkingdevel/ssh-config) ![GitHub last commit](https://img.shields.io/github/last-commit/walkingdevel/ssh-config)](https://github.com/walkingdevel/ssh-config) - A V library for parsing SSH config files.
- [vaker ![GitHub Repo Stars](https://img.shields.io/github/stars/ChAoSUnItY/vaker) ![GitHub last commit](https://img.shields.io/github/last-commit/ChAoSUnItY/vaker)](https://github.com/ChAoSUnItY/vaker) - A light-weight compile-time-generated data faker written in V.
- [vdotenv ![GitHub Repo Stars](https://img.shields.io/github/stars/zztkm/vdotenv) ![GitHub last commit](https://img.shields.io/github/last-commit/zztkm/vdotenv)](https://github.com/zztkm/vdotenv) - Support for .env files which loads environment variables.
- [vhs ![GitHub Repo Stars](https://img.shields.io/github/stars/KevinDaSilvaS/vhs) ![GitHub last commit](https://img.shields.io/github/last-commit/KevinDaSilvaS/vhs)](https://github.com/KevinDaSilvaS/vhs) - Haskell prelude list functions(zip, zipwith, head, etc) implemented in V.
- [VInstall ![GitHub Repo Stars](https://img.shields.io/github/stars/malisipi/VInstall) ![GitHub last commit](https://img.shields.io/github/last-commit/malisipi/VInstall)](https://github.com/malisipi/VInstall) - A cross-platform installer creator.
- [votp ![GitHub Repo Stars](https://img.shields.io/github/stars/OdaiGH/votp) ![GitHub last commit](https://img.shields.io/github/last-commit/OdaiGH/votp)](https://github.com/OdaiGH/votp) - TOTP and HOTP implementation in v.


### Web

- [pico.v ![GitHub Repo Stars](https://img.shields.io/github/stars/S-YOU/pico.v) ![GitHub last commit](https://img.shields.io/github/last-commit/S-YOU/pico.v)](https://github.com/S-YOU/pico.v) - A web server in V based on picoev and picohttpparser.
- [v-jsonrpc ![GitHub Repo Stars](https://img.shields.io/github/stars/nedpals/v-jsonrpc) ![GitHub last commit](https://img.shields.io/github/last-commit/nedpals/v-jsonrpc)](https://github.com/nedpals/v-jsonrpc) - Basic JSON-RPC 2.0-compliant server written on V.
- [v-tiktok ![GitHub Repo Stars](https://img.shields.io/github/stars/walkingdevel/v-tiktok) ![GitHub last commit](https://img.shields.io/github/last-commit/walkingdevel/v-tiktok)](https://github.com/walkingdevel/v-tiktok) - A V library for downloading TikTok videos.
- [validate ![GitHub Repo Stars](https://img.shields.io/github/stars/endeveit/v-validate) ![GitHub last commit](https://img.shields.io/github/last-commit/endeveit/v-validate)](https://github.com/endeveit/v-validate) - A simple library to validate strings in V.
- [valval ![GitHub Repo Stars](https://img.shields.io/github/stars/taojy123/valval) ![GitHub last commit](https://img.shields.io/github/last-commit/taojy123/valval)](https://github.com/taojy123/valval) - Web framework written in V, improved by vweb.
- [vcurrency ![GitHub Repo Stars](https://img.shields.io/github/stars/mehtaarn000/vcurrency) ![GitHub last commit](https://img.shields.io/github/last-commit/mehtaarn000/vcurrency)](https://github.com/mehtaarn000/vcurrency) - API wrapper (written in V) for [https://api.exchangeratesapi.io](https://api.exchangeratesapi.io).
- [vest ![GitHub Repo Stars](https://img.shields.io/github/stars/alexferl/vest) ![GitHub last commit](https://img.shields.io/github/last-commit/alexferl/vest)](https://github.com/alexferl/vest) - A REST client in V.
- [vex ![GitHub Repo Stars](https://img.shields.io/github/stars/nedpals/vex) ![GitHub last commit](https://img.shields.io/github/last-commit/nedpals/vex)](https://github.com/nedpals/vex) - Web framework written on V inspired by Express and Sinatra.
- [vigest ![GitHub Repo Stars](https://img.shields.io/github/stars/withs/vigest) ![GitHub last commit](https://img.shields.io/github/last-commit/withs/vigest)](https://github.com/withs/vigest) - Simple client for digest authentication (written in V).
- [vweb ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/v) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/v)](https://github.com/vlang/v/tree/master/vlib/vweb) - V's built-in web framework. Used by Vorum.
- [vxbloauth ![GitHub Repo Stars](https://img.shields.io/github/stars/WolvesFortress/vxbl-oauth) ![GitHub last commit](https://img.shields.io/github/last-commit/WolvesFortress/vxbl-oauth)](https://github.com/WolvesFortress/vxbl-oauth) - A minimalistic Xbox Live authenticator for vweb.
- [west ![GitHub Repo Stars](https://img.shields.io/github/stars/Dracks/West) ![GitHub last commit](https://img.shields.io/github/last-commit/Dracks/West)](https://github.com/Dracks/West) - A wrapper of vweb to work in a similar way as nestjs works with modules and dependency injection.

## Other

### Articles

- [An introduction to V](https://simonknott.de/articles/VLang.html)

### Books

- [Getting Started with V Programming - Navule Pavan Kumar Rao - Packt 2021 Dec](https://www.amazon.com/Getting-Started-Programming-end-end-ebook/dp/B09FKK3JL7/ref=sr_1_1?keywords=Getting+started+with+V+programming&qid=1639480830&sr=8-1) - Introductory book on V.

### Communities

- [V Community](https://github.com/v-community)

### Editor plugins

#### Atom

- [language-v ![GitHub Repo Stars](https://img.shields.io/github/stars/Cutlery-Drawer/language-v) ![GitHub last commit](https://img.shields.io/github/last-commit/Cutlery-Drawer/language-v)](https://github.com/Cutlery-Drawer/language-v) - V language support for Atom (port of vscode-vlang).

#### Emacs

- [v-mode ![GitHub Repo Stars](https://img.shields.io/github/stars/damon-kwok/v-mode) ![GitHub last commit](https://img.shields.io/github/last-commit/damon-kwok/v-mode)](https://github.com/damon-kwok/v-mode) - Emacs major mode for the V programming language.
- [vlang-mode.el ![GitHub Repo Stars](https://img.shields.io/github/stars/Naheel-Azawy/vlang-mode.el) ![GitHub last commit](https://img.shields.io/github/last-commit/Naheel-Azawy/vlang-mode.el)](https://github.com/Naheel-Azawy/vlang-mode.el) - Emacs major mode for the V programming language.

#### Sublime Text 3

- [sublime-v ![GitHub Repo Stars](https://img.shields.io/github/stars/onerbs/sublime-v) ![GitHub last commit](https://img.shields.io/github/last-commit/onerbs/sublime-v)](https://github.com/onerbs/sublime-v) - Fully-featured Sublime Text 3 package for the V Programming Language.
- [vlang-sublime ![GitHub Repo Stars](https://img.shields.io/github/stars/oversoul/vlang-sublime) ![GitHub last commit](https://img.shields.io/github/last-commit/oversoul/vlang-sublime)](https://github.com/oversoul/vlang-sublime) - Sublime text 3 Support for the Vlang Programming Language.

#### VS Code

- [vscode-vlang ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/vscode-vlang) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/vscode-vlang)](https://github.com/vlang/vscode-vlang) - V Language extension for Visual Studio Code.

#### Vim

- [v-vim ![GitHub Repo Stars](https://img.shields.io/github/stars/ollykel/v-vim) ![GitHub last commit](https://img.shields.io/github/last-commit/ollykel/v-vim)](https://github.com/ollykel/v-vim) - Support for V syntax highlighting in Vim.
- [vim-v ![GitHub Repo Stars](https://img.shields.io/github/stars/cheap-glitch/vim-v) ![GitHub last commit](https://img.shields.io/github/last-commit/cheap-glitch/vim-v)](https://github.com/cheap-glitch/vim-v) - Quality syntax highlighting for the V programming language.
- [vim-vtools ![GitHub Repo Stars](https://img.shields.io/github/stars/zakuro9715/vim-vtools) ![GitHub last commit](https://img.shields.io/github/last-commit/zakuro9715/vim-vtools)](https://github.com/zakuro9715/vim-vtools) - V tools for Vim, including auto formatting.

### Forums

- [r/vlang](https://www.reddit.com/r/vlang)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/vlang)

### GitHub actions

- [action-create-v-docs ![GitHub Repo Stars](https://img.shields.io/github/stars/marketplace/actions) ![GitHub last commit](https://img.shields.io/github/last-commit/marketplace/actions)](https://github.com/marketplace/actions/create-documentation-for-v-modules) - GitHub action to create documentation for V modules.
- [setup-v ![GitHub Repo Stars](https://img.shields.io/github/stars/marketplace/actions) ![GitHub last commit](https://img.shields.io/github/last-commit/marketplace/actions)](https://github.com/marketplace/actions/setup-vlang) - GitHub action to install and use V in your workflow.

### GitHub templates

- [v-project-basement ![GitHub Repo Stars](https://img.shields.io/github/stars/ArtemkaKun/v-project-basement) ![GitHub last commit](https://img.shields.io/github/last-commit/ArtemkaKun/v-project-basement)](https://github.com/ArtemkaKun/v-project-basement) - A basement for every V project, that contains universal minimum GitHub CI scripts and issue templates for a V project.

### IDEs with V

- [Vide ![GitHub Repo Stars](https://img.shields.io/github/stars/IsaiahPatton/Vide) ![GitHub last commit](https://img.shields.io/github/last-commit/IsaiahPatton/Vide)](https://github.com/IsaiahPatton/Vide)

### Online IDEs with V

- [V Playground](https://play.vlang.io)
- [V Playground (old)](https://v-wasm.now.sh/)
- [VOSCA V Playground](https://play.vosca.dev)

### Operating Systems & OS Development Examples

- [Simple Linux kernel module example ![GitHub Repo Stars](https://img.shields.io/github/stars/spytheman/simple_kernel_module_in_v) ![GitHub last commit](https://img.shields.io/github/last-commit/spytheman/simple_kernel_module_in_v)](https://github.com/spytheman/simple_kernel_module_in_v) - Demonstration & test of writing a very simple Linux kernel module, using V.

### Patterns

- [MVU.v ![GitHub Repo Stars](https://img.shields.io/github/stars/ArtemkaKun/MVU.v) ![GitHub last commit](https://img.shields.io/github/last-commit/ArtemkaKun/MVU.v)](https://github.com/ArtemkaKun/MVU.v) - MVU pattern (The Elm Architecture) implemented in V programming language.

### Programming contests

- [Advent of Code 2019 ![GitHub Repo Stars](https://img.shields.io/github/stars/mvlootman/aoc2019) ![GitHub last commit](https://img.shields.io/github/last-commit/mvlootman/aoc2019)](https://github.com/mvlootman/aoc2019) - Solution of Advent of Code 2019 in V.
- [Advent of Code 2022 ![GitHub Repo Stars](https://img.shields.io/github/stars/vlang/adventofcode) ![GitHub last commit](https://img.shields.io/github/last-commit/vlang/adventofcode)](https://github.com/vlang/adventofcode) - Solution of Advent of Code 2022 in V.
- [Rosetta Code in V](https://rosettacode.org/wiki/Category:V_(Vlang)) - Solutions for Rosetta Code in V.
- [SoloLearn Coding Challenges ![GitHub Repo Stars](https://img.shields.io/github/stars/Serkonda/v-sololearn-coding-challenges) ![GitHub last commit](https://img.shields.io/github/last-commit/Serkonda/v-sololearn-coding-challenges)](https://github.com/Serkonda/v-sololearn-coding-challenges) - Implementation of the SoloLearn coding challenges in V.

### Syntax highlighting

- [kate-syntax-highlight-v ![GitHub Repo Stars](https://img.shields.io/github/stars/Larpon/kate-syntax-highlight-v) ![GitHub last commit](https://img.shields.io/github/last-commit/Larpon/kate-syntax-highlight-v)](https://github.com/Larpon/kate-syntax-highlight-v) - V syntax highlighting for [Kate](https://kate-editor.org/).
- [scite-v-support ![GitHub Repo Stars](https://img.shields.io/github/stars/sunnylcw/scite-v-support) ![GitHub last commit](https://img.shields.io/github/last-commit/sunnylcw/scite-v-support)](https://github.com/sunnylcw/scite-v-support) - V syntax highlighting for [SciTE](https://www.scintilla.org/SciTE.html).

### Tutorials

- [Learn V in Y Minutes ![GitHub Repo Stars](https://img.shields.io/github/stars/v-community/learn_v_in_y_minutes) ![GitHub last commit](https://img.shields.io/github/last-commit/v-community/learn_v_in_y_minutes)](https://github.com/v-community/learn_v_in_y_minutes)
- [V by Example ![GitHub Repo Stars](https://img.shields.io/github/stars/v-community/v_by_example) ![GitHub last commit](https://img.shields.io/github/last-commit/v-community/v_by_example)](https://github.com/v-community/v_by_example) - V book as [GitBook](https://v-community.gitbook.io/v-by-example/).
- [V for Node Devs ![GitHub Repo Stars](https://img.shields.io/github/stars/Thigidu/vlang-for-nodejs-developers) ![GitHub last commit](https://img.shields.io/github/last-commit/Thigidu/vlang-for-nodejs-developers)](https://github.com/Thigidu/vlang-for-nodejs-developers) - Vlang for node js developers.
- [V learning notes ![GitHub Repo Stars](https://img.shields.io/github/stars/lydiandy/vlang_note) ![GitHub last commit](https://img.shields.io/github/last-commit/lydiandy/vlang_note)](https://github.com/lydiandy/vlang_note) - Personal learning notes in Chinese.
- [VOSCA Blog Tutorials](https://blog.vosca.dev/categories/tutorials/) - Tutorial category on VOSCA blog.

### Videos

- [The V Programming Language](https://www.youtube.com/channel/UCLZIElNyubHOvbfudT7KS1A)
- [V Programming Tutorials](https://www.youtube.com/watch?v=BVCuZ7z7GMY&list=PLEPMhdsq-gNpFr40A-ZnX-Hu9l-Sp5Oc_)
