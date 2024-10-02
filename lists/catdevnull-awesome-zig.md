# Awesome Zig [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

[<img src="https://github.com/catdevnull/awesome-zig/raw/main/zig-logo.svg" align="right" width="100">](https://ziglang.org)

A general-purpose programming language and toolchain for maintaining robust, optimal, and reusable software.

## Contents

* [Algorithms and data structures](#algorithms-and-data-structures)
* [Allocators and memory](#allocators-and-memory)
* [Audio](#audio)
* [Bootables](#bootables)
* [Compilers and interpreters](#compilers-and-interpreters)
* [Concurrency](#concurrency)
* [Database](#database)
* [Editor plugins](#editor-plugins)
* [Emulators](#emulators)
* [Game tools and libraries](#game-tools-and-libraries)
* [Games](#games)
* [GUI](#gui)
* [Misc libraries](#misc-libraries)
* [Network](#network)
  * [HTTP](#http)
* [Web](#web)
* [System tools](#system-tools)
* [Zig development tools](#zig-development-tools)
  * [Package managers](#package-managers)
* [Parser](#parser)
* [Learning resources](#learning-resources)
* [C/C++ libraries packaged for Zig](#cc-libraries-packaged-for-zig)
* [Other](#other)


## Algorithms and data structures
* [ziglibs/s2s ![GitHub Repo Stars](https://img.shields.io/github/stars/ziglibs/s2s) ![GitHub last commit](https://img.shields.io/github/last-commit/ziglibs/s2s)](https://github.com/ziglibs/s2s) - Binary serialization format and library.
* [BarabasGitHub/LZig4 ![GitHub Repo Stars](https://img.shields.io/github/stars/BarabasGitHub/LZig4) ![GitHub last commit](https://img.shields.io/github/last-commit/BarabasGitHub/LZig4)](https://github.com/BarabasGitHub/LZig4) - LZ4 implementation.
* [DutchGhost/ArrayVec ![GitHub Repo Stars](https://img.shields.io/github/stars/DutchGhost/ArrayVec) ![GitHub last commit](https://img.shields.io/github/last-commit/DutchGhost/ArrayVec)](https://github.com/DutchGhost/ArrayVec) - An array with a vector feeling.
* [emekoi/deque.zig ![GitHub Repo Stars](https://img.shields.io/github/stars/emekoi/deque.zig) ![GitHub last commit](https://img.shields.io/github/last-commit/emekoi/deque.zig)](https://github.com/emekoi/deque.zig) - A lock free chase-lev deque.
* [kristoff-it/zig-cuckoofilter ![GitHub Repo Stars](https://img.shields.io/github/stars/kristoff-it/zig-cuckoofilter) ![GitHub last commit](https://img.shields.io/github/last-commit/kristoff-it/zig-cuckoofilter)](https://github.com/kristoff-it/zig-cuckoofilter) - Production-ready Cuckoo Filters for any C ABI compatible target.
* [marijnfs/zigtimsort ![GitHub Repo Stars](https://img.shields.io/github/stars/marijnfs/zigtimsort) ![GitHub last commit](https://img.shields.io/github/last-commit/marijnfs/zigtimsort)](https://github.com/marijnfs/zigtimsort) - TimSort implementation.
* [Sahnvour/zig-containers ![GitHub Repo Stars](https://img.shields.io/github/stars/Sahnvour/zig-containers) ![GitHub last commit](https://img.shields.io/github/last-commit/Sahnvour/zig-containers)](https://github.com/Sahnvour/zig-containers) - A container library.
* [Srekel/zig-sparse-set ![GitHub Repo Stars](https://img.shields.io/github/stars/Srekel/zig-sparse-set) ![GitHub last commit](https://img.shields.io/github/last-commit/Srekel/zig-sparse-set)](https://github.com/Srekel/zig-sparse-set) - Sparse sets, supporting both SOA and AOS style.
* [hexops/xorfilter ![GitHub Repo Stars](https://img.shields.io/github/stars/hexops/xorfilter) ![GitHub last commit](https://img.shields.io/github/last-commit/hexops/xorfilter)](https://github.com/hexops/xorfilter) - Xor Filters for checking if a key is part of a set.
* [JakubSzark/zig-string ![GitHub Repo Stars](https://img.shields.io/github/stars/JakubSzark/zig-string) ![GitHub last commit](https://img.shields.io/github/last-commit/JakubSzark/zig-string)](https://github.com/JakubSzark/zig-string) - UTF-8 string data structure.
* [karlseguin/cache.zig ![GitHub Repo Stars](https://img.shields.io/github/stars/karlseguin/cache.zig) ![GitHub last commit](https://img.shields.io/github/last-commit/karlseguin/cache.zig)](https://github.com/karlseguin/cache.zig) - Thread-safe, expiration-aware, LRU cache.


## Allocators and memory
* [fengb/zee_alloc ![GitHub Repo Stars](https://img.shields.io/github/stars/fengb/zee_alloc) ![GitHub last commit](https://img.shields.io/github/last-commit/fengb/zee_alloc)](https://github.com/fengb/zee_alloc) - Tiny allocator primarily targeting WebAssembly.
* [mdsteele/ziegfried ![GitHub Repo Stars](https://img.shields.io/github/stars/mdsteele/ziegfried) ![GitHub last commit](https://img.shields.io/github/last-commit/mdsteele/ziegfried)](https://github.com/mdsteele/ziegfried) - A general-purpose memory allocator.
* [suirad/Seal ![GitHub Repo Stars](https://img.shields.io/github/stars/suirad/Seal) ![GitHub last commit](https://img.shields.io/github/last-commit/suirad/Seal)](https://github.com/suirad/Seal) - An allocator that wraps another allocator and detects if memory is leaked after usage.
* [Hejsil/zig-gc ![GitHub Repo Stars](https://img.shields.io/github/stars/Hejsil/zig-gc) ![GitHub last commit](https://img.shields.io/github/last-commit/Hejsil/zig-gc)](https://github.com/Hejsil/zig-gc) - A super simple mark-and-sweep garbage collector.
* [dbandstra/zig-hunk ![GitHub Repo Stars](https://img.shields.io/github/stars/dbandstra/zig-hunk) ![GitHub last commit](https://img.shields.io/github/last-commit/dbandstra/zig-hunk)](https://github.com/dbandstra/zig-hunk) - Basic "Hunk" memory allocator, based on the hunk system from id Software's Quake engine.


## Audio
* [Hejsil/zig-midi ![GitHub Repo Stars](https://img.shields.io/github/stars/Hejsil/zig-midi) ![GitHub last commit](https://img.shields.io/github/last-commit/Hejsil/zig-midi)](https://github.com/Hejsil/zig-midi)
* [hazeycode/zig-alsa ![GitHub Repo Stars](https://img.shields.io/github/stars/hazeycode/zig-alsa) ![GitHub last commit](https://img.shields.io/github/last-commit/hazeycode/zig-alsa)](https://github.com/hazeycode/zig-alsa) - Bindings for ALSA (libasound).
* [dantecatalfamo/sndio-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/dantecatalfamo/sndio-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/dantecatalfamo/sndio-zig)](https://github.com/dantecatalfamo/sndio-zig) - Bindings for [sndio](https://sndio.org).
* [orhun/linuxwave ![GitHub Repo Stars](https://img.shields.io/github/stars/orhun/linuxwave) ![GitHub last commit](https://img.shields.io/github/last-commit/orhun/linuxwave)](https://github.com/orhun/linuxwave) - Generate music from the entropy of Linux.
* [dbandstra/zig-wav ![GitHub Repo Stars](https://img.shields.io/github/stars/dbandstra/zig-wav) ![GitHub last commit](https://img.shields.io/github/last-commit/dbandstra/zig-wav)](https://github.com/dbandstra/zig-wav) - Simple WAV file parser and writer.


## Bootables
* [AndreaOrru/zen ![GitHub Repo Stars](https://img.shields.io/github/stars/AndreaOrru/zen) ![GitHub last commit](https://img.shields.io/github/last-commit/AndreaOrru/zen)](https://github.com/AndreaOrru/zen) - Experimental operating system.
* [andrewrk/clashos ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewrk/clashos) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewrk/clashos)](https://github.com/andrewrk/clashos) - Multiplayer arcade game for bare metal Raspberry Pi 3 B+.
* [andrewrk/HellOS ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewrk/HellOS) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewrk/HellOS)](https://github.com/andrewrk/HellOS) - "hello world" x86 kernel example.
* [chivay/vmt ![GitHub Repo Stars](https://img.shields.io/github/stars/chivay/vmt) ![GitHub last commit](https://img.shields.io/github/last-commit/chivay/vmt)](https://github.com/chivay/vmt) - Toy OS.
* [DorianXGH/Lukarnel ![GitHub Repo Stars](https://img.shields.io/github/stars/DorianXGH/Lukarnel) ![GitHub last commit](https://img.shields.io/github/last-commit/DorianXGH/Lukarnel)](https://github.com/DorianXGH/Lukarnel) - A microkernel with Rust microservices.
* [iguessthislldo/georgios ![GitHub Repo Stars](https://img.shields.io/github/stars/iguessthislldo/georgios) ![GitHub last commit](https://img.shields.io/github/last-commit/iguessthislldo/georgios)](https://github.com/iguessthislldo/georgios) - Hobby Operating System.
* [jzck/kernel-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/jzck/kernel-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/jzck/kernel-zig)](https://github.com/jzck/kernel-zig) - Hobby x86 kernel.
* [markfirmware/zig-bare-metal-microbit ![GitHub Repo Stars](https://img.shields.io/github/stars/markfirmware/zig-bare-metal-microbit) ![GitHub last commit](https://img.shields.io/github/last-commit/markfirmware/zig-bare-metal-microbit)](https://github.com/markfirmware/zig-bare-metal-microbit) - Bare metal microbit program.
* [markfirmware/zig-bare-metal-raspberry-pi ![GitHub Repo Stars](https://img.shields.io/github/stars/markfirmware/zig-bare-metal-raspberry-pi) ![GitHub last commit](https://img.shields.io/github/last-commit/markfirmware/zig-bare-metal-raspberry-pi)](https://github.com/markfirmware/zig-bare-metal-raspberry-pi) - Bare metal raspberry pi program.
* [MasterQ32/RetrOS ![GitHub Repo Stars](https://img.shields.io/github/stars/MasterQ32/RetrOS) ![GitHub last commit](https://img.shields.io/github/last-commit/MasterQ32/RetrOS)](https://github.com/MasterQ32/RetrOS) - A retro-style gaming console running on bare x86 metal.
* [nrdmn/uefi-examples ![GitHub Repo Stars](https://img.shields.io/github/stars/nrdmn/uefi-examples) ![GitHub last commit](https://img.shields.io/github/last-commit/nrdmn/uefi-examples)](https://github.com/nrdmn/uefi-examples) - UEFI examples.
* [nrdmn/uefi-paint ![GitHub Repo Stars](https://img.shields.io/github/stars/nrdmn/uefi-paint) ![GitHub last commit](https://img.shields.io/github/last-commit/nrdmn/uefi-paint)](https://github.com/nrdmn/uefi-paint) - UEFI-bootable touch paint app.
* [rafaelbreno/zig-os ![GitHub Repo Stars](https://img.shields.io/github/stars/rafaelbreno/zig-os) ![GitHub last commit](https://img.shields.io/github/last-commit/rafaelbreno/zig-os)](https://github.com/rafaelbreno/zig-os) - A simple OS following Philipp Oppermann's posts "Writing an OS in Rust".
* [SamTebbs33/pluto ![GitHub Repo Stars](https://img.shields.io/github/stars/SamTebbs33/pluto) ![GitHub last commit](https://img.shields.io/github/last-commit/SamTebbs33/pluto)](https://github.com/SamTebbs33/pluto) - An x86 kernel.
* [sjdh02/trOS ![GitHub Repo Stars](https://img.shields.io/github/stars/sjdh02/trOS) ![GitHub last commit](https://img.shields.io/github/last-commit/sjdh02/trOS)](https://github.com/sjdh02/trOS) - Tiny aarch64 baremetal OS thingy.
* [tralamazza/embedded_zig ![GitHub Repo Stars](https://img.shields.io/github/stars/tralamazza/embedded_zig) ![GitHub last commit](https://img.shields.io/github/last-commit/tralamazza/embedded_zig)](https://github.com/tralamazza/embedded_zig) - Minimal embedded ARM example (STM32F103 blue pill).
* [yvt/zig-armv8m-test ![GitHub Repo Stars](https://img.shields.io/github/stars/yvt/zig-armv8m-test) ![GitHub last commit](https://img.shields.io/github/last-commit/yvt/zig-armv8m-test)](https://github.com/yvt/zig-armv8m-test) - Example app for Armv8-M + TrustZone.
* [ZeeBoppityZagZiggity/ZBZZ.OS ![GitHub Repo Stars](https://img.shields.io/github/stars/ZeeBoppityZagZiggity/ZBZZ.OS) ![GitHub last commit](https://img.shields.io/github/last-commit/ZeeBoppityZagZiggity/ZBZZ.OS)](https://github.com/ZeeBoppityZagZiggity/ZBZZ.OS) - An operating system built for RISCV.


## Compilers and interpreters
* [oven-sh/bun ![GitHub Repo Stars](https://img.shields.io/github/stars/oven-sh/bun) ![GitHub last commit](https://img.shields.io/github/last-commit/oven-sh/bun)](https://github.com/oven-sh/bun) - Incredibly fast JavaScript runtime, bundler, transpiler and package manager – all in one.
* [Vexu/bog ![GitHub Repo Stars](https://img.shields.io/github/stars/Vexu/bog) ![GitHub last commit](https://img.shields.io/github/last-commit/Vexu/bog)](https://github.com/Vexu/bog) - Small, strongly typed, embeddable language.
* [LoLa Programming Language](https://lola.random-projects.net/) - ([GitHub ![GitHub Repo Stars](https://img.shields.io/github/stars/MasterQ32/LoLa) ![GitHub last commit](https://img.shields.io/github/last-commit/MasterQ32/LoLa)](https://github.com/MasterQ32/LoLa)) An embeddable programming language for game scripting.
* [squeek502/zua ![GitHub Repo Stars](https://img.shields.io/github/stars/squeek502/zua) ![GitHub last commit](https://img.shields.io/github/last-commit/squeek502/zua)](https://github.com/squeek502/zua) - An implementation of Lua 5.1 for learning purposes.
* [CurtisFenner/zsmol ![GitHub Repo Stars](https://img.shields.io/github/stars/CurtisFenner/zsmol) ![GitHub last commit](https://img.shields.io/github/last-commit/CurtisFenner/zsmol)](https://github.com/CurtisFenner/zsmol) - The new Smol compiler and reference.
* [dantecatalfamo/brainfuck-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/dantecatalfamo/brainfuck-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/dantecatalfamo/brainfuck-zig)](https://github.com/dantecatalfamo/brainfuck-zig) - Brainfuck interpreter.
* [dantecatalfamo/mruby-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/dantecatalfamo/mruby-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/dantecatalfamo/mruby-zig)](https://github.com/dantecatalfamo/mruby-zig) - [mruby](https://mruby.org/) bindings.
* [dantecatalfamo/wren-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/dantecatalfamo/wren-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/dantecatalfamo/wren-zig)](https://github.com/dantecatalfamo/wren-zig) - [wren](https://wren.io/) bindings.
* [fulcrum-so/ziggy-pydust ![GitHub Repo Stars](https://img.shields.io/github/stars/fulcrum-so/ziggy-pydust) ![GitHub last commit](https://img.shields.io/github/last-commit/fulcrum-so/ziggy-pydust)](https://github.com/fulcrum-so/ziggy-pydust) - [Python](https://python.org/) bindings.
* [fubark/cyber ![GitHub Repo Stars](https://img.shields.io/github/stars/fubark/cyber) ![GitHub last commit](https://img.shields.io/github/last-commit/fubark/cyber)](https://github.com/fubark/cyber) - Fast and concurrent scripting.


## Concurrency
* [mitchellh/libxev ![GitHub Repo Stars](https://img.shields.io/github/stars/mitchellh/libxev) ![GitHub last commit](https://img.shields.io/github/last-commit/mitchellh/libxev)](https://github.com/mitchellh/libxev) - Cross-platform event-loop.
* [kprotty/zefi ![GitHub Repo Stars](https://img.shields.io/github/stars/kprotty/zefi) ![GitHub last commit](https://img.shields.io/github/last-commit/kprotty/zefi)](https://github.com/kprotty/zefi) - Fiber library.
* [rsepassi/zigcoro ![GitHub Repo Stars](https://img.shields.io/github/stars/rsepassi/zigcoro) ![GitHub last commit](https://img.shields.io/github/last-commit/rsepassi/zigcoro)](https://github.com/rsepassi/zigcoro) - coroutine-friendly, based on libxev.
* [iacore/minicoro-zig](https://git.envs.net/iacore/minicoro-zig) - Bindings for minicoro - Stackful Stack-Switching Coroutine.


## Database
* [coilhq/tigerbeetle ![GitHub Repo Stars](https://img.shields.io/github/stars/coilhq/tigerbeetle) ![GitHub last commit](https://img.shields.io/github/last-commit/coilhq/tigerbeetle)](https://github.com/coilhq/tigerbeetle) - A distributed financial accounting database designed for mission critical safety and performance.
* [kristoff-it/redis-cuckoofilter ![GitHub Repo Stars](https://img.shields.io/github/stars/kristoff-it/redis-cuckoofilter) ![GitHub last commit](https://img.shields.io/github/last-commit/kristoff-it/redis-cuckoofilter)](https://github.com/kristoff-it/redis-cuckoofilter) - Hashing-function agnostic Cuckoo filters for Redis.
* [kristoff-it/zig-okredis ![GitHub Repo Stars](https://img.shields.io/github/stars/kristoff-it/zig-okredis) ![GitHub last commit](https://img.shields.io/github/last-commit/kristoff-it/zig-okredis)](https://github.com/kristoff-it/zig-okredis) - Zero-allocation Client for Redis 6+.
* [leroycep/sqlite-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/leroycep/sqlite-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/leroycep/sqlite-zig)](https://github.com/leroycep/sqlite-zig) - SQLite bindings.
* [vrischmann/zig-cassandra ![GitHub Repo Stars](https://img.shields.io/github/stars/vrischmann/zig-cassandra) ![GitHub last commit](https://img.shields.io/github/last-commit/vrischmann/zig-cassandra)](https://github.com/vrischmann/zig-cassandra) - Client for Cassandra 2.1+.
* [vrischmann/zig-sqlite ![GitHub Repo Stars](https://img.shields.io/github/stars/vrischmann/zig-sqlite) ![GitHub last commit](https://img.shields.io/github/last-commit/vrischmann/zig-sqlite)](https://github.com/vrischmann/zig-sqlite) - SQLite wrapper.
* [karlseguin/zuckdb.zig ![GitHub Repo Stars](https://img.shields.io/github/stars/karlseguin/zuckdb.zig) ![GitHub last commit](https://img.shields.io/github/last-commit/karlseguin/zuckdb.zig)](https://github.com/karlseguin/zuckdb.zig) - DuckDB wrapper.
* [karlseguin/pg.zig ![GitHub Repo Stars](https://img.shields.io/github/stars/karlseguin/pg.zig) ![GitHub last commit](https://img.shields.io/github/last-commit/karlseguin/pg.zig)](https://github.com/karlseguin/pg.zig) - Native PostgreSQL client.


## Editor plugins
* [MarioAriasC/zig-support ![GitHub Repo Stars](https://img.shields.io/github/stars/MarioAriasC/zig-support) ![GitHub last commit](https://img.shields.io/github/last-commit/MarioAriasC/zig-support)](https://github.com/MarioAriasC/zig-support) - Language support for JetBrains IDEs (IntelliJ, CLion and others)
* [isaachier/ztags ![GitHub Repo Stars](https://img.shields.io/github/stars/isaachier/ztags) ![GitHub last commit](https://img.shields.io/github/last-commit/isaachier/ztags)](https://github.com/isaachier/ztags) - Ctags implementation for Zig.
* [Tetralux/sublime-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/Tetralux/sublime-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/Tetralux/sublime-zig)](https://github.com/Tetralux/sublime-zig) - My own, more lightweight, syntax highlighting for Zig.
* [ziglang/sublime-zig-language ![GitHub Repo Stars](https://img.shields.io/github/stars/ziglang/sublime-zig-language) ![GitHub last commit](https://img.shields.io/github/last-commit/ziglang/sublime-zig-language)](https://github.com/ziglang/sublime-zig-language) - Zig language support for Sublime Text.
* [ziglang/vscode-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/ziglang/vscode-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/ziglang/vscode-zig)](https://github.com/ziglang/vscode-zig) - Zig language support for VSCode.
* [ziglang/zig-mode ![GitHub Repo Stars](https://img.shields.io/github/stars/ziglang/zig-mode) ![GitHub last commit](https://img.shields.io/github/last-commit/ziglang/zig-mode)](https://github.com/ziglang/zig-mode) - Zig mode for Emacs.
* [ziglang/zig.vim ![GitHub Repo Stars](https://img.shields.io/github/stars/ziglang/zig.vim) ![GitHub last commit](https://img.shields.io/github/last-commit/ziglang/zig.vim)](https://github.com/ziglang/zig.vim) - Vim configuration for Zig.
* [zigtools/zls ![GitHub Repo Stars](https://img.shields.io/github/stars/zigtools/zls) ![GitHub last commit](https://img.shields.io/github/last-commit/zigtools/zls)](https://github.com/zigtools/zls) - Zig LSP implementation + Zig Language Server.


## Emulators
* [fengb/fundude ![GitHub Repo Stars](https://img.shields.io/github/stars/fengb/fundude) ![GitHub last commit](https://img.shields.io/github/last-commit/fengb/fundude)](https://github.com/fengb/fundude) - Gameboy emulator for WASM.
* [GrooveStomp/chip8-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/GrooveStomp/chip8-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/GrooveStomp/chip8-zig)](https://github.com/GrooveStomp/chip8-zig) - CHIP-8 emulator.
* [sourgrasses/ichigo ![GitHub Repo Stars](https://img.shields.io/github/stars/sourgrasses/ichigo) ![GitHub last commit](https://img.shields.io/github/last-commit/sourgrasses/ichigo)](https://github.com/sourgrasses/ichigo) - Virtual Boy emulator.
* [floooh/kc85.zig ![GitHub Repo Stars](https://img.shields.io/github/stars/floooh/kc85.zig) ![GitHub last commit](https://img.shields.io/github/last-commit/floooh/kc85.zig)](https://github.com/floooh/kc85.zig) - A KC85 emulator.
* [Arwalk/ChipZ ![GitHub Repo Stars](https://img.shields.io/github/stars/Arwalk/ChipZ) ![GitHub last commit](https://img.shields.io/github/last-commit/Arwalk/ChipZ)](https://github.com/Arwalk/ChipZ) A simple Chip8 emulator (library and executable).


## Game tools and libraries
* [hexops/mach ![GitHub Repo Stars](https://img.shields.io/github/stars/hexops/mach) ![GitHub last commit](https://img.shields.io/github/last-commit/hexops/mach)](https://github.com/hexops/mach) - Game engine and graphics toolkit.
* [michal-z/zig-gamedev ![GitHub Repo Stars](https://img.shields.io/github/stars/michal-z/zig-gamedev) ![GitHub last commit](https://img.shields.io/github/last-commit/michal-z/zig-gamedev)](https://github.com/michal-z/zig-gamedev) - DirectX 12 game development ecosystem.
* [floooh/sokol-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/floooh/sokol-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/floooh/sokol-zig)](https://github.com/floooh/sokol-zig) - [Sokol ![GitHub Repo Stars](https://img.shields.io/github/stars/floooh/sokol) ![GitHub last commit](https://img.shields.io/github/last-commit/floooh/sokol)](https://github.com/floooh/sokol) bindings.
* [TM35-Metronome/metronome ![GitHub Repo Stars](https://img.shields.io/github/stars/TM35-Metronome/metronome) ![GitHub last commit](https://img.shields.io/github/last-commit/TM35-Metronome/metronome)](https://github.com/TM35-Metronome/metronome) - A set of tools for modifying and randomizing Pokémon games.
* [TM35-Metronome/tm35-nds ![GitHub Repo Stars](https://img.shields.io/github/stars/TM35-Metronome/tm35-nds) ![GitHub last commit](https://img.shields.io/github/last-commit/TM35-Metronome/tm35-nds)](https://github.com/TM35-Metronome/tm35-nds) - A library for working with Nintendo DS roms.
* [user00e00/sudokuinzig ![GitHub Repo Stars](https://img.shields.io/github/stars/user00e00/sudokuinzig) ![GitHub last commit](https://img.shields.io/github/last-commit/user00e00/sudokuinzig)](https://github.com/user00e00/sudokuinzig) - Simple and robust sudoku solver.
* [wendigojaeger/ZigGBA ![GitHub Repo Stars](https://img.shields.io/github/stars/wendigojaeger/ZigGBA) ![GitHub last commit](https://img.shields.io/github/last-commit/wendigojaeger/ZigGBA)](https://github.com/wendigojaeger/ZigGBA) - SDK for creating Game Boy Advance games using Zig.
* [hazeycode/brucelib ![GitHub Repo Stars](https://img.shields.io/github/stars/hazeycode/brucelib) ![GitHub last commit](https://img.shields.io/github/last-commit/hazeycode/brucelib)](https://github.com/hazeycode/brucelib) - Monorepo of modules for programming cross-platforms games, simulations, engines & editors.
* [andy5995/zigdeck ![GitHub Repo Stars](https://img.shields.io/github/stars/andy5995/zigdeck) ![GitHub last commit](https://img.shields.io/github/last-commit/andy5995/zigdeck)](https://github.com/andy5995/zigdeck) - A library that creates and shuffles a deck of cards from which you can draw.


## Games
* [Akuli/curses-minesweeper ![GitHub Repo Stars](https://img.shields.io/github/stars/Akuli/curses-minesweeper) ![GitHub last commit](https://img.shields.io/github/last-commit/Akuli/curses-minesweeper)](https://github.com/Akuli/curses-minesweeper) - Minesweeper game written in curses.
* [andrewrk/tetris ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewrk/tetris) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewrk/tetris)](https://github.com/andrewrk/tetris) - A simple tetris clone.
* [fabioarnold/snake-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/fabioarnold/snake-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/fabioarnold/snake-zig)](https://github.com/fabioarnold/snake-zig) - A simple snake clone.
* [Stenodyon/blink ![GitHub Repo Stars](https://img.shields.io/github/stars/Stenodyon/blink) ![GitHub last commit](https://img.shields.io/github/last-commit/Stenodyon/blink)](https://github.com/Stenodyon/blink) - A game about building logic with lasers.
* [thejoshwolfe/legend-of-swarkland ![GitHub Repo Stars](https://img.shields.io/github/stars/thejoshwolfe/legend-of-swarkland) ![GitHub last commit](https://img.shields.io/github/last-commit/thejoshwolfe/legend-of-swarkland)](https://github.com/thejoshwolfe/legend-of-swarkland) - Hack-n-slash roguelike inspired by NetHack.
* [tiehuis/zstack ![GitHub Repo Stars](https://img.shields.io/github/stars/tiehuis/zstack) ![GitHub last commit](https://img.shields.io/github/last-commit/tiehuis/zstack)](https://github.com/tiehuis/zstack) - Line-race tetris mode.
* [kooparse/zalgebra ![GitHub Repo Stars](https://img.shields.io/github/stars/kooparse/zalgebra) ![GitHub last commit](https://img.shields.io/github/last-commit/kooparse/zalgebra)](https://github.com/kooparse/zalgebra) - Linear algebra library for games and real-time computer graphics.
* [floooh/pacman.zig ![GitHub Repo Stars](https://img.shields.io/github/stars/floooh/pacman.zig) ![GitHub last commit](https://img.shields.io/github/last-commit/floooh/pacman.zig)](https://github.com/floooh/pacman.zig) - A Pacman clone.
* [dantecatalfamo/OpenCSE ![GitHub Repo Stars](https://img.shields.io/github/stars/dantecatalfamo/OpenCSE) ![GitHub last commit](https://img.shields.io/github/last-commit/dantecatalfamo/OpenCSE)](https://github.com/dantecatalfamo/OpenCSE) - Free implementation of the Can't Stop Express dice game.
* [dbandstra/oxid ![GitHub Repo Stars](https://img.shields.io/github/stars/dbandstra/oxid) ![GitHub last commit](https://img.shields.io/github/last-commit/dbandstra/oxid)](https://github.com/dbandstra/oxid) - Arcade-style game where you fight waves of monsters in a fixed-screen maze.


## GUI
* [capy-ui/capy ![GitHub Repo Stars](https://img.shields.io/github/stars/capy-ui/capy) ![GitHub last commit](https://img.shields.io/github/last-commit/capy-ui/capy)](https://github.com/capy-ui/capy) - Cross-platform library for making true native GUIs.
* [david-vanderson/gui ![GitHub Repo Stars](https://img.shields.io/github/stars/david-vanderson/gui) ![GitHub last commit](https://img.shields.io/github/last-commit/david-vanderson/gui)](https://github.com/david-vanderson/gui) - Immediate mode GUI for Zig.
* [Aransentin/ZWL ![GitHub Repo Stars](https://img.shields.io/github/stars/Aransentin/ZWL) ![GitHub last commit](https://img.shields.io/github/last-commit/Aransentin/ZWL)](https://github.com/Aransentin/ZWL) - Zig Windowing Library.
* [prime31/zig-upaya ![GitHub Repo Stars](https://img.shields.io/github/stars/prime31/zig-upaya) ![GitHub last commit](https://img.shields.io/github/last-commit/prime31/zig-upaya)](https://github.com/prime31/zig-upaya) - GUI toolkit.
* [fubark/cosmic ![GitHub Repo Stars](https://img.shields.io/github/stars/fubark/cosmic) ![GitHub last commit](https://img.shields.io/github/last-commit/fubark/cosmic)](https://github.com/fubark/cosmic) - GUI toolkit.
* [batiati/IUPforZig ![GitHub Repo Stars](https://img.shields.io/github/stars/batiati/IUPforZig) ![GitHub last commit](https://img.shields.io/github/last-commit/batiati/IUPforZig)](https://github.com/batiati/IUPforZig) - Zig idiomatic and type-checked bindings for IUP Portable User Interface Toolkit.
* [andrewrk/zig-sdl ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewrk/zig-sdl) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewrk/zig-sdl)](https://github.com/andrewrk/zig-sdl) - Self-contained SDL2 package for Zig.
* [Snektron/vulkan-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/Snektron/vulkan-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/Snektron/vulkan-zig)](https://github.com/Snektron/vulkan-zig) - Vulkan binding generator.
* [Avokadoen/zig_vulkan ![GitHub Repo Stars](https://img.shields.io/github/stars/Avokadoen/zig_vulkan) ![GitHub last commit](https://img.shields.io/github/last-commit/Avokadoen/zig_vulkan)](https://github.com/Avokadoen/zig_vulkan) - Toy renderer using Vulkan and GLFW.
* [andrewrk/zig-vulkan-triangle ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewrk/zig-vulkan-triangle) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewrk/zig-vulkan-triangle)](https://github.com/andrewrk/zig-vulkan-triangle) - Simple triangle displayed using Vulkan, GLFW, and Zig.
* [kassane/QML-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/qml_zig) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/qml_zig)](https://github.com/kassane/qml_zig) - QML bindings.
* [cshenton/learnopengl ![GitHub Repo Stars](https://img.shields.io/github/stars/cshenton/learnopengl) ![GitHub last commit](https://img.shields.io/github/last-commit/cshenton/learnopengl)](https://github.com/cshenton/learnopengl) - [Learn OpenGL](https://learnopengl.com) tutorials ported to Zig.
* [ifreund/river ![GitHub Repo Stars](https://img.shields.io/github/stars/ifreund/river) ![GitHub last commit](https://img.shields.io/github/last-commit/ifreund/river)](https://github.com/ifreund/river) - Dynamic wayland compositor that takes inspiration from dwm and bspwm.
* [Nelarius/weekend-raytracer-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/Nelarius/weekend-raytracer-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/Nelarius/weekend-raytracer-zig)](https://github.com/Nelarius/weekend-raytracer-zig) - An implementation of the "Ray Tracing in One Weekend" book.
* [SpexGuy/Zig-Gltf-Display ![GitHub Repo Stars](https://img.shields.io/github/stars/SpexGuy/Zig-Gltf-Display) ![GitHub last commit](https://img.shields.io/github/last-commit/SpexGuy/Zig-Gltf-Display)](https://github.com/SpexGuy/Zig-Gltf-Display) - A program that displays glTF files using Vulkan.
* [tiehuis/zig-raytrace ![GitHub Repo Stars](https://img.shields.io/github/stars/tiehuis/zig-raytrace) ![GitHub last commit](https://img.shields.io/github/last-commit/tiehuis/zig-raytrace)](https://github.com/tiehuis/zig-raytrace) - Simple raytracer.
* [donpdonp/zootdeck ![GitHub Repo Stars](https://img.shields.io/github/stars/donpdonp/zootdeck) ![GitHub last commit](https://img.shields.io/github/last-commit/donpdonp/zootdeck)](https://github.com/donpdonp/zootdeck) - Fediverse GTK Desktop Reader.
* [MasterQ32/ZigPaint ![GitHub Repo Stars](https://img.shields.io/github/stars/MasterQ32/ZigPaint) ![GitHub last commit](https://img.shields.io/github/last-commit/MasterQ32/ZigPaint)](https://github.com/MasterQ32/ZigPaint) - A simple paint application. Used to create an OpenGL loader/wrapper and a minimal UI system.
* [olexij-christian/zgtk3 ![GitHub Repo Stars](https://img.shields.io/github/stars/olexij-christian/zgtk3) ![GitHub last commit](https://img.shields.io/github/last-commit/olexij-christian/zgtk3)](https://github.com/olexij-christian/zgtk3) - GTK3 bindings.

## Misc libraries
* [natecraddock/ziglua ![GitHub Repo Stars](https://img.shields.io/github/stars/natecraddock/ziglua) ![GitHub last commit](https://img.shields.io/github/last-commit/natecraddock/ziglua)](https://github.com/natecraddock/ziglua) - Bindings for the Lua C API.
* [ryoppippi/zigcv ![GitHub Repo Stars](https://img.shields.io/github/stars/ryoppippi/zigcv) ![GitHub last commit](https://img.shields.io/github/last-commit/ryoppippi/zigcv)](https://github.com/ryoppippi/zigcv) - Bindings for OpenCV4.
* [BraedonWooding/Lazy-Zig ![GitHub Repo Stars](https://img.shields.io/github/stars/BraedonWooding/Lazy-Zig) ![GitHub last commit](https://img.shields.io/github/last-commit/BraedonWooding/Lazy-Zig)](https://github.com/BraedonWooding/Lazy-Zig) - Linq.
* [DutchGhost/maybeuninit ![GitHub Repo Stars](https://img.shields.io/github/stars/DutchGhost/maybeuninit) ![GitHub last commit](https://img.shields.io/github/last-commit/DutchGhost/maybeuninit)](https://github.com/DutchGhost/maybeuninit) - MaybeUninit.
* [emekoi/log.zig ![GitHub Repo Stars](https://img.shields.io/github/stars/emekoi/log.zig) ![GitHub last commit](https://img.shields.io/github/last-commit/emekoi/log.zig)](https://github.com/emekoi/log.zig) - A thread-safe logging library.
* [kprotty/zap ![GitHub Repo Stars](https://img.shields.io/github/stars/kprotty/zap) ![GitHub last commit](https://img.shields.io/github/last-commit/kprotty/zap)](https://github.com/kprotty/zap) - A collection of libraries which provide interfaces over the system for writing high performance applications.
* [vbrusca/ZigMatrixUtils ![GitHub Repo Stars](https://img.shields.io/github/stars/vbrusca/ZigMatrixUtils) ![GitHub last commit](https://img.shields.io/github/last-commit/vbrusca/ZigMatrixUtils)](https://github.com/vbrusca/ZigMatrixUtils) - Matrix manipulation and utility library.
* [mlarouche/zigimg ![GitHub Repo Stars](https://img.shields.io/github/stars/mlarouche/zigimg) ![GitHub last commit](https://img.shields.io/github/last-commit/mlarouche/zigimg)](https://github.com/mlarouche/zigimg) - Library for reading and writing different image formats.
* [bfactory-ai/zignal ![GitHub Repo Stars](https://img.shields.io/github/stars/bfactory-ai/zignal) ![GitHub last commit](https://img.shields.io/github/last-commit/bfactory-ai/zignal)](https://github.com/bfactory-ai/zignal) - Image processing library inspired by [dlib](http://dlib.net/).
* [dbandstra/zig-pcx ![GitHub Repo Stars](https://img.shields.io/github/stars/dbandstra/zig-pcx) ![GitHub last commit](https://img.shields.io/github/last-commit/dbandstra/zig-pcx)](https://github.com/dbandstra/zig-pcx) - PCX image format decoder and encoder.
* [ziglibs/known-folders ![GitHub Repo Stars](https://img.shields.io/github/stars/ziglibs/known-folders) ![GitHub last commit](https://img.shields.io/github/last-commit/ziglibs/known-folders)](https://github.com/ziglibs/known-folders) - Provides access to well-known folders across several operating systems.
* [SasLuca/zig-nanoid ![GitHub Repo Stars](https://img.shields.io/github/stars/SasLuca/zig-nanoid) ![GitHub last commit](https://img.shields.io/github/last-commit/SasLuca/zig-nanoid)](https://github.com/SasLuca/zig-nanoid) - Battle-tested, tiny, secure, URL-friendly, unique string ID generator. Now available in pure Zig.
* [kassane/libvlc-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/libvlc-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/libvlc-zig)](https://github.com/kassane/libvlc-zig) - Bindings for libVLC media framework.
* [karlseguin/log.zig ![GitHub Repo Stars](https://img.shields.io/github/stars/karlseguin/log.zig) ![GitHub last commit](https://img.shields.io/github/last-commit/karlseguin/log.zig)](https://github.com/karlseguin/log.zig) - Structured logging library.
* [dantecatalfamo/9p-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/dantecatalfamo/9p-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/dantecatalfamo/9p-zig)](https://github.com/dantecatalfamo/9p-zig) - 9P2000 client/server library.
* [karlseguin/singleflight.zig ![GitHub Repo Stars](https://img.shields.io/github/stars/karlseguin/singleflight.zig) ![GitHub last commit](https://img.shields.io/github/last-commit/karlseguin/singleflight.zig)](https://github.com/karlseguin/singleflight.zig) - Duplicate function call suppression.
* [kassane/lean4-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/lean4-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/lean4-zig)](https://github.com/kassane/lean4-zig) - Bindings for Lean 4 (theorem prover).
* [attron/astroz ![GitHub Repo Stars](https://img.shields.io/github/stars/ATTron/astroz) ![GitHub last commit](https://img.shields.io/github/last-commit/ATTron/astroz)](https://github.com/ATTron/astroz) - Astronomical and Spacecraft Toolkit.


## Network
* [MasterQ32/zig-network ![GitHub Repo Stars](https://img.shields.io/github/stars/MasterQ32/zig-network) ![GitHub last commit](https://img.shields.io/github/last-commit/MasterQ32/zig-network)](https://github.com/MasterQ32/zig-network) - Small network abstraction layer around TCP & UDP.
* [dantecatalfamo/zig-dns ![GitHub Repo Stars](https://img.shields.io/github/stars/dantecatalfamo/zig-dns) ![GitHub last commit](https://img.shields.io/github/last-commit/dantecatalfamo/zig-dns)](https://github.com/dantecatalfamo/zig-dns) - Experimental DNS library implemented in zig.
* [euantorano/ip.zig ![GitHub Repo Stars](https://img.shields.io/github/stars/euantorano/ip.zig) ![GitHub last commit](https://img.shields.io/github/last-commit/euantorano/ip.zig)](https://github.com/euantorano/ip.zig) - Library for working with IP Addresses.
* [lun-4/zigdig ![GitHub Repo Stars](https://img.shields.io/github/stars/lun-4/zigdig) ![GitHub last commit](https://img.shields.io/github/last-commit/lun-4/zigdig)](https://github.com/lun-4/zigdig) - Naive DNS client library.
* [marler8997/netpunch ![GitHub Repo Stars](https://img.shields.io/github/stars/marler8997/netpunch) ![GitHub last commit](https://img.shields.io/github/last-commit/marler8997/netpunch)](https://github.com/marler8997/netpunch) - Outbound proxy protocol.
* [remeh/statsd-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/remeh/statsd-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/remeh/statsd-zig)](https://github.com/remeh/statsd-zig) - Basic DogStatsD UDP server.


### HTTP
* [Luukdegram/apple_pie ![GitHub Repo Stars](https://img.shields.io/github/stars/Luukdegram/apple_pie) ![GitHub last commit](https://img.shields.io/github/last-commit/Luukdegram/apple_pie)](https://github.com/Luukdegram/apple_pie) - HTTP 1.0/1.1 Server implementation.
* [truemedian/zfetch ![GitHub Repo Stars](https://img.shields.io/github/stars/truemedian/zfetch) ![GitHub last commit](https://img.shields.io/github/last-commit/truemedian/zfetch)](https://github.com/truemedian/zfetch) - HTTP(S) client based on iguanaTLS.
* [ducdetronquito/requestz ![GitHub Repo Stars](https://img.shields.io/github/stars/ducdetronquito/requestz) ![GitHub last commit](https://img.shields.io/github/last-commit/ducdetronquito/requestz)](https://github.com/ducdetronquito/requestz) - HTTP client based on h11.
* [ducdetronquito/h11 ![GitHub Repo Stars](https://img.shields.io/github/stars/ducdetronquito/h11) ![GitHub last commit](https://img.shields.io/github/last-commit/ducdetronquito/h11)](https://github.com/ducdetronquito/h11) - I/O-free HTTP/1.1 implementation inspired by hyper/h11.
* [lun-4/ziget ![GitHub Repo Stars](https://img.shields.io/github/stars/lun-4/ziget) ![GitHub last commit](https://img.shields.io/github/last-commit/lun-4/ziget)](https://github.com/lun-4/ziget) - Simple wget without libc.
* ~~[Vexu/routez ![GitHub Repo Stars](https://img.shields.io/github/stars/Vexu/routez) ![GitHub last commit](https://img.shields.io/github/last-commit/Vexu/routez)](https://github.com/Vexu/routez) - HTTP server.~~
* [frmdstryr/zhp ![GitHub Repo Stars](https://img.shields.io/github/stars/frmdstryr/zhp) ![GitHub last commit](https://img.shields.io/github/last-commit/frmdstryr/zhp)](https://github.com/frmdstryr/zhp) - Featureful HTTP server.
* [axgdev/telegram_echobot_zig ![GitHub Repo Stars](https://img.shields.io/github/stars/axgdev/telegram_echobot_zig) ![GitHub last commit](https://img.shields.io/github/last-commit/axgdev/telegram_echobot_zig)](https://github.com/axgdev/telegram_echobot_zig) - Telegram echo bot.
* [karlseguin/http.zig ![GitHub Repo Stars](https://img.shields.io/github/stars/karlseguin/http.zig) ![GitHub last commit](https://img.shields.io/github/last-commit/karlseguin/http.zig)](https://github.com/karlseguin/http.zig) - HTTP/1.1 server.
* [zigzap/zap ![GitHub Repo Stars](https://img.shields.io/github/stars/zigzap/zap) ![GitHub last commit](https://img.shields.io/github/last-commit/zigzap/zap)](https://github.com/zigzap/zap) - blazingly fast, robust HTTP server.

### Messaging
* [skunkwerks/zamqp ![GitHub Repo Stars](https://img.shields.io/github/stars/skunkwerks/zamqp) ![GitHub last commit](https://img.shields.io/github/last-commit/skunkwerks/zamqp)](https://github.com/skunkwerks/zamqp) - AMQP client, based on rabbitmq-c.
* [nine-lives-later/zzmq ![GitHub Repo Stars](https://img.shields.io/github/stars/nine-lives-later/zzmq) ![GitHub last commit](https://img.shields.io/github/last-commit/nine-lives-later/zzmq)](https://github.com/nine-lives-later/zzmq) - ZeroMQ library, based on CZMQ.

## Web
* [andrewrk/lua-in-the-browser ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewrk/lua-in-the-browser) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewrk/lua-in-the-browser)](https://github.com/andrewrk/lua-in-the-browser) - Using Zig to build Lua for WebAssembly.
* [karlseguin/websocket.zig ![GitHub Repo Stars](https://img.shields.io/github/stars/karlseguin/websocket.zig) ![GitHub last commit](https://img.shields.io/github/last-commit/karlseguin/websocket.zig)](https://github.com/karlseguin/websocket.zig) - A WebSocket implementation.
* [kivikakk/htmlentities.zig ![GitHub Repo Stars](https://img.shields.io/github/stars/kivikakk/htmlentities.zig) ![GitHub last commit](https://img.shields.io/github/last-commit/kivikakk/htmlentities.zig)](https://github.com/kivikakk/htmlentities.zig) - HTML5 entity data.
* [meheleventyone/zig-wasm-test ![GitHub Repo Stars](https://img.shields.io/github/stars/meheleventyone/zig-wasm-test) ![GitHub last commit](https://img.shields.io/github/last-commit/meheleventyone/zig-wasm-test)](https://github.com/meheleventyone/zig-wasm-test) - A minimal WebAssembly example using Zig's build system.
* [shritesh/zig-wasm-dom ![GitHub Repo Stars](https://img.shields.io/github/stars/shritesh/zig-wasm-dom) ![GitHub last commit](https://img.shields.io/github/last-commit/shritesh/zig-wasm-dom)](https://github.com/shritesh/zig-wasm-dom) - Zig + WebAssembly + JS + DOM.
* [shritesh/zigfmt-web ![GitHub Repo Stars](https://img.shields.io/github/stars/shritesh/zigfmt-web) ![GitHub last commit](https://img.shields.io/github/last-commit/shritesh/zigfmt-web)](https://github.com/shritesh/zigfmt-web) - Zig fmt on the web.
* [zigwasm/wasm-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/zigwasm/wasm-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/zigwasm/wasm-zig)](https://github.com/zigwasm/wasm-zig) - Common WASM runtime binding to C API.
* [zigwasm/wasmer-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/zigwasm/wasmer-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/zigwasm/wasmer-zig)](https://github.com/zigwasm/wasmer-zig) - Bindings for the Wasmer WebAssembly runtime.
* [zigwasm/wasmtime-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/zigwasm/wasmtime-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/zigwasm/wasmtime-zig)](https://github.com/zigwasm/wasmtime-zig) - Bindings of Wasmtime.
* [batiati/mustache-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/batiati/mustache-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/batiati/mustache-zig)](https://github.com/batiati/mustache-zig) - Mustache implementation.
* [floscodes/zerve ![GitHub Repo Stars](https://img.shields.io/github/stars/floscodes/zerve) ![GitHub last commit](https://img.shields.io/github/last-commit/floscodes/zerve)](https://github.com/floscodes/zerve) - Simple framework for writing web services and web apps.
* [zon-dev/zinc ![GitHub Repo Stars](https://img.shields.io/github/stars/zon-dev/zinc) ![GitHub last commit](https://img.shields.io/github/last-commit/zon-dev/zinc)](https://github.com/zon-dev/zinc) - Zinc is a framework focusing on high performance, usability, security, and extensibility.

## System tools
* [pbui-project/pbui-main ![GitHub Repo Stars](https://img.shields.io/github/stars/pbui-project/pbui-main) ![GitHub last commit](https://img.shields.io/github/last-commit/pbui-project/pbui-main)](https://github.com/pbui-project/pbui-main) - BSD/Linux core utilities written in Zig.
* [hspak/brightnessztl ![GitHub Repo Stars](https://img.shields.io/github/stars/hspak/brightnessztl) ![GitHub last commit](https://img.shields.io/github/last-commit/hspak/brightnessztl)](https://github.com/hspak/brightnessztl) - A CLI to control device backlight.
* [thejoshwolfe/hexdump-zip ![GitHub Repo Stars](https://img.shields.io/github/stars/thejoshwolfe/hexdump-zip) ![GitHub last commit](https://img.shields.io/github/last-commit/thejoshwolfe/hexdump-zip)](https://github.com/thejoshwolfe/hexdump-zip) - Produce an annotated hexdump of a zipfile.
* [kubkon/zacho ![GitHub Repo Stars](https://img.shields.io/github/stars/kubkon/zacho) ![GitHub last commit](https://img.shields.io/github/last-commit/kubkon/zacho)](https://github.com/kubkon/zacho) - Zig's Mach-O parser.
* [weskoerber/mac_address ![GitHub Repo Stars](https://img.shields.io/github/stars/weskoerber/mac_address) ![GitHub last commit](https://img.shields.io/github/last-commit/weskoerber/mac_address)](https://github.com/weskoerber/mac_address) - A cross-platform library to retrieve the MAC address from your network interfaces without libc.


## Zig development tools
* [marler8997/zigup ![GitHub Repo Stars](https://img.shields.io/github/stars/marler8997/zigup) ![GitHub last commit](https://img.shields.io/github/last-commit/marler8997/zigup)](https://github.com/marler8997/zigup) - Download and manage zig compilers.
* [korandoru/setup-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/korandoru/setup-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/korandoru/setup-zig)](https://github.com/korandoru/setup-zig) - Set up a specific version of Zig environment on GitHub Actions.
* [weskoerber/zvm ![GitHub Repo Stars](https://img.shields.io/github/stars/weskoerber/zvm) ![GitHub last commit](https://img.shields.io/github/last-commit/weskoerber/zvm)](https://github.com/weskoerber/zvm) - POSIX-compliant bash script to manage multiple active Zig versions.
* [vezel-dev/zig-sdk ![GitHub Repo Stars](https://img.shields.io/github/stars/vezel-dev/zig-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/vezel-dev/zig-sdk)](https://github.com/vezel-dev/zig-sdk) - MSBuild SDK for building Zig, C, and C++ projects using the Zig compiler.
* [aherrmann/rules_zig ![GitHub Repo Stars](https://img.shields.io/github/stars/aherrmann/rules_zig) ![GitHub last commit](https://img.shields.io/github/last-commit/aherrmann/rules_zig)](https://github.com/aherrmann/rules_zig) - Bazel build rules for Zig.


### Package managers
* [zigtools/zpm ![GitHub Repo Stars](https://img.shields.io/github/stars/zigtools/zpm) ![GitHub last commit](https://img.shields.io/github/last-commit/zigtools/zpm)](https://github.com/zigtools/zpm) - Unofficial Zig package manager.
* [mattnite/gyro ![GitHub Repo Stars](https://img.shields.io/github/stars/mattnite/gyro) ![GitHub last commit](https://img.shields.io/github/last-commit/mattnite/gyro)](https://github.com/mattnite/gyro) - Package manager with an index, build runner, and build dependencies.
* [nektro/zigmod ![GitHub Repo Stars](https://img.shields.io/github/stars/nektro/zigmod) ![GitHub last commit](https://img.shields.io/github/last-commit/nektro/zigmod)](https://github.com/nektro/zigmod) - Zig package manager.
* [cheetah/asdf-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/cheetah/asdf-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/cheetah/asdf-zig)](https://github.com/cheetah/asdf-zig) - Zig plugin for the ASDF package manager.
* [mattnite/ezpkg ![GitHub Repo Stars](https://img.shields.io/github/stars/mattnite/ezpkg) ![GitHub last commit](https://img.shields.io/github/last-commit/mattnite/ezpkg)](https://github.com/mattnite/ezpkg) - Zig Package Manager Expansion Pack.
* [nix-community/zon2nix ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/zon2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/zon2nix)](https://github.com/nix-community/zon2nix) - Convert the dependencies in `build.zig.zon` to a Nix expression.


## Parser
* [darithorn/zig-toml ![GitHub Repo Stars](https://img.shields.io/github/stars/darithorn/zig-toml) ![GitHub last commit](https://img.shields.io/github/last-commit/darithorn/zig-toml)](https://github.com/darithorn/zig-toml) - A TOML parser.
* [Himujjal/zig-json5 ![GitHub Repo Stars](https://img.shields.io/github/stars/Himujjal/zig-json5) ![GitHub last commit](https://img.shields.io/github/last-commit/Himujjal/zig-json5)](https://github.com/Himujjal/zig-json5) - JSON5 parser resembling the `std.json` APIs.
* [chwayne/rem ![GitHub Repo Stars](https://img.shields.io/github/stars/chwayne/rem) ![GitHub last commit](https://img.shields.io/github/last-commit/chwayne/rem)](https://github.com/chwayne/rem) - An HTML parsing library.
* [goto-bus-stop/ziguid ![GitHub Repo Stars](https://img.shields.io/github/stars/goto-bus-stop/ziguid) ![GitHub last commit](https://img.shields.io/github/last-commit/goto-bus-stop/ziguid)](https://github.com/goto-bus-stop/ziguid) - GUID parsing/stringifying.
* [00JCIV00/cova ![GitHub Repo Stars](https://img.shields.io/github/stars/00JCIV00/cova) ![GitHub last commit](https://img.shields.io/github/last-commit/00JCIV00/cova)](https://github.com/00JCIV00/cova) - Commands, Options, Values, Arguments. A simple yet robust cross-platform command line argument parsing library.
* [Hejsil/zig-clap ![GitHub Repo Stars](https://img.shields.io/github/stars/Hejsil/zig-clap) ![GitHub last commit](https://img.shields.io/github/last-commit/Hejsil/zig-clap)](https://github.com/Hejsil/zig-clap) - Simple command line argument parsing library.
* [sam701/zig-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/sam701/zig-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/sam701/zig-cli)](https://github.com/sam701/zig-cli) - Package for building command line apps.
* [kivikakk/libpcre.zig ![GitHub Repo Stars](https://img.shields.io/github/stars/kivikakk/libpcre.zig) ![GitHub last commit](https://img.shields.io/github/last-commit/kivikakk/libpcre.zig)](https://github.com/kivikakk/libpcre.zig) - Bindings to libpcre for Perl-compatible regular expressions.
* [kivikakk/koino ![GitHub Repo Stars](https://img.shields.io/github/stars/kivikakk/koino) ![GitHub last commit](https://img.shields.io/github/last-commit/kivikakk/koino)](https://github.com/kivikakk/koino) - CommonMark/GitHub Flavored Markdown parser and HTML renderer.
* [kubkon/zig-yaml ![GitHub Repo Stars](https://img.shields.io/github/stars/kubkon/zig-yaml) ![GitHub last commit](https://img.shields.io/github/last-commit/kubkon/zig-yaml)](https://github.com/kubkon/zig-yaml) - YAML parser.
* [sreehax/zig-ini ![GitHub Repo Stars](https://img.shields.io/github/stars/sreehax/zig-ini) ![GitHub last commit](https://img.shields.io/github/last-commit/sreehax/zig-ini)](https://github.com/sreehax/zig-ini) - .ini parser.
* [Nulo/ini-parser](https://gitea.nulo.in/Nulo/ini-parser) - .ini parser.
* [tiehuis/zig-regex ![GitHub Repo Stars](https://img.shields.io/github/stars/tiehuis/zig-regex) ![GitHub last commit](https://img.shields.io/github/last-commit/tiehuis/zig-regex)](https://github.com/tiehuis/zig-regex) - A regex implementation.
* [tiehuis/zig-ryu ![GitHub Repo Stars](https://img.shields.io/github/stars/tiehuis/zig-ryu) ![GitHub last commit](https://img.shields.io/github/last-commit/tiehuis/zig-ryu)](https://github.com/tiehuis/zig-ryu) - Port of [ryu ![GitHub Repo Stars](https://img.shields.io/github/stars/ulfjack/ryu) ![GitHub last commit](https://img.shields.io/github/last-commit/ulfjack/ryu)](https://github.com/ulfjack/ryu).
* [Vexu/zuri ![GitHub Repo Stars](https://img.shields.io/github/stars/Vexu/zuri) ![GitHub last commit](https://img.shields.io/github/last-commit/Vexu/zuri)](https://github.com/Vexu/zuri) - URI parser.
* [vi/zigmkv ![GitHub Repo Stars](https://img.shields.io/github/stars/vi/zigmkv) ![GitHub last commit](https://img.shields.io/github/last-commit/vi/zigmkv)](https://github.com/vi/zigmkv) - Matroska/webm (mkv) parser.
* [winksaville/zig-parse-args ![GitHub Repo Stars](https://img.shields.io/github/stars/winksaville/zig-parse-args) ![GitHub last commit](https://img.shields.io/github/last-commit/winksaville/zig-parse-args)](https://github.com/winksaville/zig-parse-args) - Parse command line arguments.
* [winksaville/zig-parse-number ![GitHub Repo Stars](https://img.shields.io/github/stars/winksaville/zig-parse-number) ![GitHub last commit](https://img.shields.io/github/last-commit/winksaville/zig-parse-number)](https://github.com/winksaville/zig-parse-number) - Implement ParseNumber which can parse any TypeId.Int or TypeId.Float.
* [gernest/base32 ![GitHub Repo Stars](https://img.shields.io/github/stars/gernest/base32) ![GitHub last commit](https://img.shields.io/github/last-commit/gernest/base32)](https://github.com/gernest/base32) - Base32 encoding/decoding.
* [caolan/zig-netstring](https://git.sr.ht/~caolan/zig-netstring) - Netstring parser.
* [Arwalk/zig-protobuf ![GitHub Repo Stars](https://img.shields.io/github/stars/Arwalk/zig-protobuf) ![GitHub last commit](https://img.shields.io/github/last-commit/Arwalk/zig-protobuf)](https://github.com/Arwalk/zig-protobuf) - Implementation of Protocol Buffers v3 leveraging Zig's comptime.
* [iddev5/inon ![GitHub Repo Stars](https://img.shields.io/github/stars/iddev5/inon) ![GitHub last commit](https://img.shields.io/github/last-commit/iddev5/inon)](https://github.com/iddev5/inon) - Data configuration file format.
* [naneros/ztoml](https://codeberg.org/naneros/ztoml.git) - TOMLv1.0.0 parser and convert TOML to JSON.
* [InKryption/comath ![GitHub Repo Stars](https://img.shields.io/github/stars/InKryption/comath) ![GitHub last commit](https://img.shields.io/github/last-commit/InKryption/comath)](https://github.com/InKryption/comath) - Calculate math expressions in comptime.
* [weskoerber/kewpie ![GitHub Repo Stars](https://img.shields.io/github/stars/weskoerber/kewpie) ![GitHub last commit](https://img.shields.io/github/last-commit/weskoerber/kewpie)](https://github.com/weskoerber/kewpie) - A simple query string parser.

## Learning resources
* [belse-de/zig-tut ![GitHub Repo Stars](https://img.shields.io/github/stars/belse-de/zig-tut) ![GitHub last commit](https://img.shields.io/github/last-commit/belse-de/zig-tut)](https://github.com/belse-de/zig-tut) - A collection of small projects and tutorials to learn Zig.
* [Sobeston/ziglearn ![GitHub Repo Stars](https://img.shields.io/github/stars/Sobeston/ziglearn) ![GitHub last commit](https://img.shields.io/github/last-commit/Sobeston/ziglearn)](https://github.com/Sobeston/ziglearn) - Zig learning resources.
* [zighelp/zighelp ![GitHub Repo Stars](https://img.shields.io/github/stars/zighelp/zighelp) ![GitHub last commit](https://img.shields.io/github/last-commit/zighelp/zighelp)](https://github.com/zighelp/zighelp) - Get up to speed with Zig quickly (ziglearn fork).
* [ziglings/exercises](https://codeberg.org/ziglings/exercises) - Learn Zig by fixing tiny example programs.


## C/C++ libraries packaged for Zig

These C/C++ libraries were packaged to be used with the Zig build and packaging system (`build.zig`).

### C

* [andrewrk/SDL ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewrk/SDL) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewrk/SDL)](https://github.com/andrewrk/SDL) - Simple Directmedia Layer.
* [andrewrk/libz ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewrk/libz) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewrk/libz)](https://github.com/andrewrk/libz) - Zlib data compression.
* [andrewrk/ffmpeg ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewrk/ffmpeg) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewrk/ffmpeg)](https://github.com/andrewrk/ffmpeg) - library only.
* [andrewrk/libgroove ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewrk/libgroove) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewrk/libgroove)](https://github.com/andrewrk/libgroove) - streaming audio processing library.
* [andrewrk/libsoundio ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewrk/libsoundio) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewrk/libsoundio)](https://github.com/andrewrk/libsoundio/tree/zig-pkg) - library for real-time audio input and output.
* [kassane/openssl-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/openssl-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/openssl-zig)](https://github.com/kassane/openssl-zig) - crypto, providers & ssl libraries only.
* [kassane/wolfssl ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/wolfssl) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/wolfssl)](https://github.com/kassane/wolfssl) - wolfssl library.
* [kassane/libbpf ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/libbpf) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/libbpf)](https://github.com/kassane/libbpf) - BPF CO-RE (Compile Once – Run Everywhere).
* [kassane/winpthreads ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/winpthreads-zigbuild) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/winpthreads-zigbuild)](https://github.com/kassane/winpthreads-zigbuild) - PThread library for MinGW.
* [raysan5/raylib ![GitHub Repo Stars](https://img.shields.io/github/stars/raysan5/raylib) ![GitHub last commit](https://img.shields.io/github/last-commit/raysan5/raylib)](https://github.com/raysan5/raylib) - A simple and easy-to-use library to enjoy videogames programming.
* [jmcnamara/libxlsxwriter ![GitHub Repo Stars](https://img.shields.io/github/stars/jmcnamara/libxlsxwriter) ![GitHub last commit](https://img.shields.io/github/last-commit/jmcnamara/libxlsxwriter)](https://github.com/jmcnamara/libxlsxwriter) - Creating Excel XLSX files.
* [alexrp/libffi ![GitHub Repo Stars](https://img.shields.io/github/stars/alexrp/libffi) ![GitHub last commit](https://img.shields.io/github/last-commit/alexrp/libffi)](https://github.com/alexrp/libffi) - libffi with a Zig build script.

### C++

* [andrewrk/libchromaprint ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewrk/libchromaprint) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewrk/libchromaprint)](https://github.com/andrewrk/libchromaprint) - library for generating audio fingerprints used by AcoustID.
* [kassane/asio ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/asio) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/asio)](https://github.com/kassane/asio) - (non-boost) Networking I/O library (w/ event-loop, C++14/17/20).
* [kassane/fmt ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/fmt) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/fmt)](https://github.com/kassane/fmt) - Modern formatting library.
* [kassane/context ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/context) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/context)](https://github.com/kassane/context) - (boost-context) fiber library (C++14/17/20).
* [kassane/fiber ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/fiber) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/fiber)](https://github.com/kassane/fiber) - (boost-fiber) userland threads (C++14/17/20).
* [kassane/beast ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/beast) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/beast)](https://github.com/kassane/beast) - (boost-beast) HTTP and WebSocket (C++14/17/20).
* [kassane/hana ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/hana) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/hana)](https://github.com/kassane/hana) - (boost-hana) Meta-programming library (header-only, C++14/17/20).
* [kassane/intrusive ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/intrusive) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/intrusive)](https://github.com/kassane/intrusive) - (boost-intrusive) intrusive containers (header-only, C++03/11/14).
* [kassane/unordered ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/unordered) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/unordered)](https://github.com/kassane/unordered) - (boost-unordered) hashmap and set concurrency containers (C++03/11/14).
* [kassane/catch2 ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/catch2) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/catch2)](https://github.com/kassane/catch2) - Unit testing library (C++14/17/20).
* [kassane/outcome ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/outcome) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/outcome)](https://github.com/kassane/outcome) - (non-boost) Error handler (C++14/17/20).
* [kassane/json ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/json) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/json)](https://github.com/kassane/json) - jsoncpp ported to Zig packaging.
* [kassane/Standalone-Server ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/Standalone-Server) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/Standalone-Server)](https://github.com/kassane/Standalone-Server) - Asio standalone C++ HTTP/S Server.
* [kassane/range-v3 ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/range-v3) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/range-v3)](https://github.com/kassane/range-v3) - modern range library (C++14/17/20).
* [kassane/libzmq ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/libzmq) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/libzmq)](https://github.com/kassane/libzmq) - ZeroMQ core engine in C++ library.
* [kassane/libsigcplusplus ![GitHub Repo Stars](https://img.shields.io/github/stars/kassane/libsigcplusplus) ![GitHub last commit](https://img.shields.io/github/last-commit/kassane/libsigcplusplus)](https://github.com/kassane/libsigcplusplus) - Typesafe callback system for standard C++.
* [ggerganov/llama.cpp ![GitHub Repo Stars](https://img.shields.io/github/stars/ggerganov/llama.cpp) ![GitHub last commit](https://img.shields.io/github/last-commit/ggerganov/llama.cpp)](https://github.com/ggerganov/llama.cpp) - Port of Facebook's LLaMA model in C/C++.


## Other
* [All Your Codebase](https://allyourcodebase.com/) - Development status of Zig and its' ecosystem.
* [zig.pm](https://zig.pm/) - A community-maintained repository of Zig packages.
* [hspak/geteltorito-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/hspak/geteltorito-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/hspak/geteltorito-zig)](https://github.com/hspak/geteltorito-zig) - Geteltorito re-write in Zig.
* [momumi/x86-zig ![GitHub Repo Stars](https://img.shields.io/github/stars/momumi/x86-zig) ![GitHub last commit](https://img.shields.io/github/last-commit/momumi/x86-zig)](https://github.com/momumi/x86-zig) - Library for assembling x86.
* [nrdmn/ilo_license_key ![GitHub Repo Stars](https://img.shields.io/github/stars/nrdmn/ilo_license_key) ![GitHub last commit](https://img.shields.io/github/last-commit/nrdmn/ilo_license_key)](https://github.com/nrdmn/ilo_license_key) - ILO license key library.
* [vegecode/svd2zig ![GitHub Repo Stars](https://img.shields.io/github/stars/vegecode/svd2zig) ![GitHub last commit](https://img.shields.io/github/last-commit/vegecode/svd2zig)](https://github.com/vegecode/svd2zig) - Convert System View Description (svd) files to Zig headers for baremetal development.
* [mqttiotstuff/iotmonitor ![GitHub Repo Stars](https://img.shields.io/github/stars/mqttiotstuff/iotmonitor) ![GitHub last commit](https://img.shields.io/github/last-commit/mqttiotstuff/iotmonitor)](https://github.com/mqttiotstuff/iotmonitor) - MQTT IotMonitor tools, save time to monitor mqtt agents or devices.
* [ve-nt/outfieldr](https://gitlab.com/ve-nt/outfieldr) - [TLDR ![GitHub Repo Stars](https://img.shields.io/github/stars/tldr-pages/tldr) ![GitHub last commit](https://img.shields.io/github/last-commit/tldr-pages/tldr)](https://github.com/tldr-pages/tldr) client.
* [kubkon/zig-ios-example ![GitHub Repo Stars](https://img.shields.io/github/stars/kubkon/zig-ios-example) ![GitHub last commit](https://img.shields.io/github/last-commit/kubkon/zig-ios-example)](https://github.com/kubkon/zig-ios-example) - Minimal `build.zig` for targeting iOS.
* [ynuwenhof/zigbraten ![GitHub Repo Stars](https://img.shields.io/github/stars/ynuwenhof/zigbraten) ![GitHub last commit](https://img.shields.io/github/last-commit/ynuwenhof/zigbraten)](https://github.com/ynuwenhof/zigbraten) - Proof of concept internal cheat for Cube 2: Sauerbraten.
* [vbrusca/ZigSdlGameTemplate ![GitHub Repo Stars](https://img.shields.io/github/stars/vbrusca/ZigSdlGameTemplate) ![GitHub last commit](https://img.shields.io/github/last-commit/vbrusca/ZigSdlGameTemplate)](https://github.com/vbrusca/ZigSdlGameTemplate) - SDL game project template.

