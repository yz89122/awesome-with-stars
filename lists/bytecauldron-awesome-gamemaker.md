<p align="center">
    <a href="https://gamemaker.io/"><img src="https://github.com/bytecauldron/awesome-gamemaker/raw/main/images/banner.png" /></a>
</p>

# Awesome GameMaker [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Made with GameMaker](https://img.shields.io/badge/Made%20with-GameMaker-000000.svg?style=flat&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAZlBMVEX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2BrG8stAAAAIXRSTlMABg0OFBkfcn1%2Bf4CBgoOFhoeIiouWmNDa5ebp8PX2%2B%2F6o6Vq%2BAAAAY0lEQVR42k2OWQ6AIAwFn%2BIOioobrnD%2FS4o0EeanmQxNAdErRFTWtsFq6%2BiiZozz0CSnTjYBwo0RkF8DWDLf51Ni9K%2FYdq0Fy3KAfzk97M7goK1F%2F4rGH9Kk1OlboQtEDIrmC%2BU3CVxTr%2FRMAAAAAElFTkSuQmCC)](https://www.yoyogames.com/gamemaker) [![Links ![GitHub Repo Stars](https://img.shields.io/github/stars/bytecauldron/awesome-gamemaker) ![GitHub last commit](https://img.shields.io/github/last-commit/bytecauldron/awesome-gamemaker)](https://github.com/bytecauldron/awesome-gamemaker/actions/workflows/links.yml/badge.svg)](https://github.com/bytecauldron/awesome-gamemaker/actions/workflows/links.yml)

> A curated list of awesome libraries, snippets, guides, and projects for GameMaker. 😎

[GameMaker](https://gamemaker.io/) is a user-friendly, cross-platform game engine by YoYo Games that allows both beginner and advanced game developers to create 2D and 3D games for desktop, HTML5, and console platforms.

What kind of games can you make in GameMaker? [Check out this list.](https://steamdb.info/tech/Engine/GameMaker/)

## Contents

- [Getting Started](#getting-started)
- [Data Manipulation](#data-manipulation)
- [Native Extensions](#native-extensions)
- [Timing](#timing)
- [Utilities](#utilities)
- [Tools](#tools)
- [Debugging](#debugging)
- [Input Handling](#input-handling)
- [User Interface](#user-interface)
- [Localization](#localization)
- [Physics](#physics)
- [Sprites](#sprites)
- [Audio](#audio)
- [Levels](#levels)
- [Particles](#particles)
- [Lighting](#lighting)
- [Shaders](#shaders)
- [3D](#3d)
- [Sprite Stacking](#sprite-stacking)
- [Networking](#networking)
- [Integrations](#integrations)
- [Camera](#camera)
- [Sequences](#sequences)
- [State Machines](#state-machines)
- [Pathing](#pathing)
- [Useful Extras](#useful-extras)
- [Blogs](#blogs)
- [YouTube](#youtube)
- [Community](#community)
- [Special Thanks](#special-thanks)

## Getting Started

- [GameMaker Manual](https://manual.gamemaker.io/)
- [GameMaker Release Notes](https://gms.yoyogames.com/ReleaseNotes.html)
- [GameMaker Marketplace](https://marketplace.gamemaker.io/)
- [Beginner GameMaker Tutorials](https://www.youtube.com/watch?v=nBCDzE9MDbk&list=PLPRT_JORnIur4v19PHXCtJ5P05vaokFdP) - Tutorials from Shaun Spalding. A comprehensive introduction to basic features of the IDE. Highly recommended to check out the full playlist if you're a complete beginner. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Advanced GameMaker Tutorials](https://www.youtube.com/watch?v=n8-MuIuOQFE&list=PL_hT--4HOvrfuDcYrTufdpgwoALAczPR2) - Tutorials from DragoniteSpam that dive into more advanced topics related to the GML language. They also have comprehensive 3D and shader introduction videos. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)

### Recommendations

- If you already have programming experience, learn the GameMaker Language (GML) instead of the Visual (Drag and Drop) feature.
- For pixel art, [Aseprite](https://www.aseprite.org/) is a popular alternative to the native sprite editor. 💸
  - [Aseprite's source code ![GitHub Repo Stars](https://img.shields.io/github/stars/aseprite/aseprite) ![GitHub last commit](https://img.shields.io/github/last-commit/aseprite/aseprite)](https://github.com/aseprite/aseprite) can be compiled for free.
- Don't be afraid to use other developer libraries. A lot of them are free for a reason. Just be mindful of the license.
- Updates to the IDE and runtime can break your game (like syntax changes to GML). If you are working in a group, make sure you are running on the same version of GMS and only update when given a fair warning. You can reinstall previous versions of your IDE at the GMS download page.
- Unless your game requires complex physics interactions, it's generally advised to avoid GameMaker's built-in physics system.
- Schedule routine backups for projects. If you are dealing with larger media files in your repo, try [Git LFS](https://git-lfs.github.com/).

## Data Manipulation

This includes data structures and file formats that do not fit into a more specific category.

- [GML-OOP ![GitHub Repo Stars](https://img.shields.io/github/stars/Mtax-Development/GML-OOP) ![GitHub last commit](https://img.shields.io/github/last-commit/Mtax-Development/GML-OOP)](https://github.com/Mtax-Development/GML-OOP) - A constructor library for operating the primary functionalities of GameMaker.
- [GML-Classes ![GitHub Repo Stars](https://img.shields.io/github/stars/Nikko-the-cat/GML-Classes) ![GitHub last commit](https://img.shields.io/github/last-commit/Nikko-the-cat/GML-Classes)](https://github.com/Nikko-the-cat/GML-Classes) - Another project that adds OOP functionality to GameMaker.
- [Destructors ![GitHub Repo Stars](https://img.shields.io/github/stars/DatZach/Destructors) ![GitHub last commit](https://img.shields.io/github/last-commit/DatZach/Destructors)](https://github.com/DatZach/Destructors) - Allows you to use ds_* types such as lists and maps inside of structs.
- [SNAP ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/SNAP) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/SNAP)](https://github.com/JujuAdams/SNAP) - Easy data format saving and loading. Please note that newer versions of GameMaker contain `json_parse` and `json_stringify`. However, if you are converting csv, ini, xml, etc, you may find this very useful.
- [LWO ![GitHub Repo Stars](https://img.shields.io/github/stars/tabularelf/lwo) ![GitHub last commit](https://img.shields.io/github/last-commit/tabularelf/lwo)](https://github.com/tabularelf/lwo) - Lightweight objects using structs.
- [Lock And Key ![GitHub Repo Stars](https://img.shields.io/github/stars/AlubJ/Lock-And-Key) ![GitHub last commit](https://img.shields.io/github/last-commit/AlubJ/Lock-And-Key)](https://github.com/AlubJ/Lock-And-Key) - String and file encryption.
- [Map ![GitHub Repo Stars](https://img.shields.io/github/stars/GameMakerDiscord/Map.gml) ![GitHub last commit](https://img.shields.io/github/last-commit/GameMakerDiscord/Map.gml)](https://github.com/GameMakerDiscord/Map.gml) - Hash table implementations.
- [Matrices ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/matrices) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/matrices)](https://github.com/JujuAdams/matrices) - A collection of matrix handling scripts.
- [gm-stream ![GitHub Repo Stars](https://img.shields.io/github/stars/daikon-games/gm-stream) ![GitHub last commit](https://img.shields.io/github/last-commit/daikon-games/gm-stream)](https://github.com/daikon-games/gm-stream) - Data structure manipulation.
- [Promises ![GitHub Repo Stars](https://img.shields.io/github/stars/YAL-GameMaker/Promise.gml) ![GitHub last commit](https://img.shields.io/github/last-commit/YAL-GameMaker/Promise.gml)](https://github.com/YAL-GameMaker/Promise.gml) - An adaptation of JavaScript Promises.
- [ForEach ![GitHub Repo Stars](https://img.shields.io/github/stars/KeeVeeGames/foreach.gml) ![GitHub last commit](https://img.shields.io/github/last-commit/KeeVeeGames/foreach.gml)](https://github.com/KeeVeeGames/foreach.gml) - Adds a foreach implementation for arrays, ds_lists, ds_maps, ds_stacks, ds_queues, ds_priorities and structs.
- [DeepCopy ![GitHub Repo Stars](https://img.shields.io/github/stars/KeeVeeGames/DeepCopy.gml) ![GitHub last commit](https://img.shields.io/github/last-commit/KeeVeeGames/DeepCopy.gml)](https://github.com/KeeVeeGames/DeepCopy.gml) - Deep clone class instances / constructed structs, anonymous structs and arrays nested in any order!
- [Cottonwool ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/Cottonwool) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/Cottonwool)](https://github.com/JujuAdams/Cottonwool) - Safe surfaces without memory leaks.
- [BSONGML ![GitHub Repo Stars](https://img.shields.io/github/stars/LAGameStudio/BSONGML) ![GitHub last commit](https://img.shields.io/github/last-commit/LAGameStudio/BSONGML)](https://github.com/LAGameStudio/BSONGML) - Save and load GML structured data in binary files, skirting memory and performance concerns associated with loading JSON as a string.
- [Binder ![GitHub Repo Stars](https://img.shields.io/github/stars/Homunculus84/Binder) ![GitHub last commit](https://img.shields.io/github/last-commit/Homunculus84/Binder)](https://github.com/Homunculus84/Binder) - A binary search library for efficient lookups on large datasets.
- [Airkiver ![GitHub Repo Stars](https://img.shields.io/github/stars/AlubJ/Airkiver) ![GitHub last commit](https://img.shields.io/github/last-commit/AlubJ/Airkiver)](https://github.com/AlubJ/Airkiver) - Game file archive tool.
- [OKColor ![GitHub Repo Stars](https://img.shields.io/github/stars/KeeVeeGames/OKColor.gml) ![GitHub last commit](https://img.shields.io/github/last-commit/KeeVeeGames/OKColor.gml)](https://github.com/KeeVeeGames/OKColor.gml) - An okay color manager for implementing OKLab/OKLCH colors.
- [Exception ![GitHub Repo Stars](https://img.shields.io/github/stars/KeeVeeGames/Exception.gml) ![GitHub last commit](https://img.shields.io/github/last-commit/KeeVeeGames/Exception.gml)](https://github.com/KeeVeeGames/Exception.gml) - A base class for custom exceptions.
- [ArrayList ![GitHub Repo Stars](https://img.shields.io/github/stars/KeeVeeGames/ArrayList.gml) ![GitHub last commit](https://img.shields.io/github/last-commit/KeeVeeGames/ArrayList.gml)](https://github.com/KeeVeeGames/ArrayList.gml) - The most complete list class. Garbage collected, fast sort function, [] accessor and referencing as an array.
- [Bit Buffers](https://yellowafterlife.itch.io/gamemaker-bit-buffers) - Read and write buffers with per-bit granularity.
- [sprite_add_gif](https://yellowafterlife.itch.io/gamemaker-sprite-add-gif) - Dynamically load animated GIFs as sprites.
- [Managix](https://foxyofjungle.itch.io/managix) - Async memory & resources manager (texture groups, audio groups, etc). 💸
- [Ngrams ![GitHub Repo Stars](https://img.shields.io/github/stars/tinkerer-red/Ngrams) ![GitHub last commit](https://img.shields.io/github/last-commit/tinkerer-red/Ngrams)](https://github.com/tinkerer-red/Ngrams) - Lightweight n-gram library for fuzzy search, predictive text or token sequence modeling.

## Native Extensions

These work on specific platform(s) and enable the games to do something that would be impossible, impractical, or inefficient to do in GML alone. Native extensions related to a specific task (e.g. input handling) can be found in those sections.

- [zlib functions](https://yellowafterlife.itch.io/gamemaker-zlib) - Simple compression/decompression functions.
- [Window Taskbar](https://yellowafterlife.itch.io/gamemaker-window-taskbar) - Windows only. Flash the game window border and/or its taskbar button.
- [GMSDLL ![GitHub Repo Stars](https://img.shields.io/github/stars/YAL-GameMaker/GMSDLL) ![GitHub last commit](https://img.shields.io/github/last-commit/YAL-GameMaker/GMSDLL)](https://github.com/YAL-GameMaker/GMSDLL) - A template project for building DLLs for GameMaker.
- [Extension Collection](https://samuel-venable.itch.io/gamemaker-extension-collection) - A suite of various extensions.
- [gameframe ![GitHub Repo Stars](https://img.shields.io/github/stars/YAL-GameMaker/gameframe) ![GitHub last commit](https://img.shields.io/github/last-commit/YAL-GameMaker/gameframe)](https://github.com/YAL-GameMaker/gameframe) - Custom window caption and border for Windows.
- [GMD3D11 ![GitHub Repo Stars](https://img.shields.io/github/stars/blueburncz/GMD3D11) ![GitHub last commit](https://img.shields.io/github/last-commit/blueburncz/GMD3D11)](https://github.com/blueburncz/GMD3D11) - A DLL for interfacing with Windows Direct3D.
- [GM Sysinfo ![GitHub Repo Stars](https://img.shields.io/github/stars/SpikeHD/gm-sysinfo) ![GitHub last commit](https://img.shields.io/github/last-commit/SpikeHD/gm-sysinfo)](https://github.com/SpikeHD/gm-sysinfo) - Cross-platform extension for getting system information and resource usage.
- [Video Player Extension](https://forum.yoyogames.com/index.php?threads/video-player-for-windows-macos-and-ubuntu.77882/) - Play videos. However, the latest version of GMS has video support.
- [GMESCAPI](https://marketplace.yoyogames.com/assets/9529/gmescapi) - Webcam capture.
- [Rousr Release](https://gitlab.com/rousr-release/) - Unmaintained projects from the Rousr team (in case anyone asks where OutsideTheBox/Dissonance went).
- [window_shape](https://yellowafterlife.itch.io/gamemaker-window-shape) - Custom-shaped windows on Windows. 💸
- [Windows' windows](https://yellowafterlife.itch.io/gamemaker-winwin) - Multiple windows on Windows. 💸
- [winMenu](https://yellowafterlife.itch.io/gamemaker-winmenu) - Native menus on Windows. 💸
- [window_set_icon](https://yellowafterlife.itch.io/window-set-icon) - Change window and/or taskbar icons on Windows.
- [file_dropper](https://yellowafterlife.itch.io/gamemaker-file-dropper) - Accept drag-and-dropping files onto a game window on Windows.
- [file_dragger ![GitHub Repo Stars](https://img.shields.io/github/stars/YAL-GameMaker/file_dragger) ![GitHub last commit](https://img.shields.io/github/last-commit/YAL-GameMaker/file_dragger)](https://github.com/YAL-GameMaker/file_dragger) - Drag-and-drop files *out* of the game window on Windows.
- [Window Commands](https://yellowafterlife.itch.io/gamemaker-window-commands) - Dispatch/intercept window controls like Minimize (and other window-related functions).
- [wasm-bridge ![GitHub Repo Stars](https://img.shields.io/github/stars/Sidorakh/wasm-bridge) ![GitHub last commit](https://img.shields.io/github/last-commit/Sidorakh/wasm-bridge)](https://github.com/Sidorakh/wasm-bridge) - A way to use JS extensions in GX/WASM games.
- [Web Dynamic Textures](https://yellowafterlife.itch.io/gamemaker-web-dyn-textures) - A dynamic texture page loading system for HTML5.
- [GMWinBackdrop](https://topherlicious.itch.io/gmwinbackdrop) - Windows 11 backdrop materials.
- [GMSDLL.rs ![GitHub Repo Stars](https://img.shields.io/github/stars/YAL-GameMaker/GMSDLL.rs) ![GitHub last commit](https://img.shields.io/github/last-commit/YAL-GameMaker/GMSDLL.rs)](https://github.com/YAL-GameMaker/GMSDLL.rs?) - Example on how to make native DLL extensions in Rust.

## Timing

Custom timers, timelines, and task scheduling.

- [Iota ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/iota) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/iota)](https://github.com/JujuAdams/iota) - Lightweight timestep library.
- [Stopwatch ![GitHub Repo Stars](https://img.shields.io/github/stars/Lojemiru/Stopwatch) ![GitHub last commit](https://img.shields.io/github/last-commit/Lojemiru/Stopwatch)](https://github.com/Lojemiru/Stopwatch) - GameMaker alarm replacement.
- [wTimer](https://mors-games.itch.io/wtimer) - Robust alternative for alarms.
- [FrogAlarm ![GitHub Repo Stars](https://img.shields.io/github/stars/colmeye/FrogAlarms) ![GitHub last commit](https://img.shields.io/github/last-commit/colmeye/FrogAlarms)](https://github.com/colmeye/FrogAlarms) - Another easy alternative to GameMaker alarms.
- [fuwafuwa ![GitHub Repo Stars](https://img.shields.io/github/stars/kemonologic/fuwafuwa) ![GitHub last commit](https://img.shields.io/github/last-commit/kemonologic/fuwafuwa)](https://github.com/kemonologic/fuwafuwa) - Easy-to-use timer system.
- [Timer ![GitHub Repo Stars](https://img.shields.io/github/stars/nommiin/Timers) ![GitHub last commit](https://img.shields.io/github/last-commit/nommiin/Timers)](https://github.com/nommiin/Timers) - Timer methods based on setTimeout and setInterval from JS.
- [GMTimeLine ![GitHub Repo Stars](https://img.shields.io/github/stars/TimVN/GMTimeLine) ![GitHub last commit](https://img.shields.io/github/last-commit/TimVN/GMTimeLine)](https://github.com/TimVN/GMTimeLine) - A pure code alternative to GameMaker timelines.
- [Agenda ![GitHub Repo Stars](https://img.shields.io/github/stars/benal20/Agenda.gml) ![GitHub last commit](https://img.shields.io/github/last-commit/benal20/Agenda.gml)](https://github.com/benal20/Agenda.gml) - Schedule and delay the execution of callbacks.

## Utilities

- [gm-core](https://github.com/gm-core) - Foundational utility suite and a great starting point for new GameMaker projects. Comes with quality of life methods, networking tools, testing framework, delta timing, and more.
- [FAST ![GitHub Repo Stars](https://img.shields.io/github/stars/Hyomoto/FAST) ![GitHub last commit](https://img.shields.io/github/last-commit/Hyomoto/FAST)](https://github.com/Hyomoto/FAST) - Flexible Assistant Toolkit. Similar to gm-core but comes with input and resolution handling.
- [DDDEditor ![GitHub Repo Stars](https://img.shields.io/github/stars/DragoniteSpam/DDDEditorGMS2) ![GitHub last commit](https://img.shields.io/github/last-commit/DragoniteSpam/DDDEditorGMS2)](https://github.com/DragoniteSpam/DDDEditorGMS2) - General purpose game editor.
- [handytools ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/handytools) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/handytools)](https://github.com/JujuAdams/handytools/) - A collection of Juju's libraries in one convenient project.
- [GameMaker Scaffolding ![GitHub Repo Stars](https://img.shields.io/github/stars/babaganosch/GameMakerScaffolding) ![GitHub last commit](https://img.shields.io/github/last-commit/babaganosch/GameMakerScaffolding)](https://github.com/babaganosch/GameMakerScaffolding) - Another cool all-encompassing template with a focus on building low-res, tile-based games.
- [Broadcast ![GitHub Repo Stars](https://img.shields.io/github/stars/JulianDicken/Broadcast) ![GitHub last commit](https://img.shields.io/github/last-commit/JulianDicken/Broadcast)](https://github.com/JulianDicken/Broadcast) - Event handling library.
- [Polarca ![GitHub Repo Stars](https://img.shields.io/github/stars/VitorEstevam/polarca) ![GitHub last commit](https://img.shields.io/github/last-commit/VitorEstevam/polarca)](https://github.com/VitorEstevam/polarca) - Interpolation functions.
- [Twerp](https://pixelatedpope.itch.io/twerp) - Easing function similar to lerp().
- [Coroutines ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/Coroutines) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/Coroutines)](https://github.com/JujuAdams/Coroutines) - Asynchronous functions for GameMaker.
- [Dynamo ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/Dynamo) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/Dynamo)](https://github.com/JujuAdams/Dynamo) - Dynamic data loader.
- [Gumshoe ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/Gumshoe) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/Gumshoe)](https://github.com/JujuAdams/Gumshoe) - Simple deep file search function.
- [Mathematical Scripts ![GitHub Repo Stars](https://img.shields.io/github/stars/adam-rumpf/game-maker-scripts) ![GitHub last commit](https://img.shields.io/github/last-commit/adam-rumpf/game-maker-scripts)](https://github.com/adam-rumpf/game-maker-scripts) - A collection of math scripts.
- [Seedpod ![GitHub Repo Stars](https://img.shields.io/github/stars/daikon-games/gm-seedpod) ![GitHub last commit](https://img.shields.io/github/last-commit/daikon-games/gm-seedpod)](https://github.com/daikon-games/gm-seedpod) - A collection of scripts to improve the GML programming experience.
- [Trixscript](https://trixelized.itch.io/trixscript) - Juices up your game with useful functions.
- [CoreExtension ![GitHub Repo Stars](https://img.shields.io/github/stars/blueburncz/CoreExtension) ![GitHub last commit](https://img.shields.io/github/last-commit/blueburncz/CoreExtension)](https://github.com/blueburncz/CoreExtension) - A collection of CC0 programming libraries. (archived)
- [Voxeledphoton's FreeGMScripts ![GitHub Repo Stars](https://img.shields.io/github/stars/vphoton/FreeGMScripts) ![GitHub last commit](https://img.shields.io/github/last-commit/vphoton/FreeGMScripts)](https://github.com/vphoton/FreeGMScripts) - Additional GML helper functions. Some may be out of date with 2.3+ syntax.
- [Motion Scripts](https://avis.itch.io/motion-scripts) - Provides replacement methods for built-in motion variables.
- [Canvas ![GitHub Repo Stars](https://img.shields.io/github/stars/tabularelf/Canvas) ![GitHub last commit](https://img.shields.io/github/last-commit/tabularelf/Canvas)](https://github.com/tabularelf/Canvas) - Another great solution for surface management.
- [GMLodash ![GitHub Repo Stars](https://img.shields.io/github/stars/DatZach/GMLodash) ![GitHub last commit](https://img.shields.io/github/last-commit/DatZach/GMLodash)](https://github.com/DatZach/GMLodash) - Functional programming in GML.
- [Autoframer ![GitHub Repo Stars](https://img.shields.io/github/stars/mstop4/auto-framer) ![GitHub last commit](https://img.shields.io/github/last-commit/mstop4/auto-framer)](https://github.com/mstop4/auto-framer) - Automatically handles resizing the game view across different display and window sizes.
- [GML+](https://xgasoft.itch.io/gmlp) - A script collection with a goal to "fill the gaps" in GML. 💸
- [GMLive](https://yellowafterlife.itch.io/gamemaker-live) - Livecoding / interactive programming. 💸
- [gml-highscorer ![GitHub Repo Stars](https://img.shields.io/github/stars/Grisgram/gml-highscorer) ![GitHub last commit](https://img.shields.io/github/last-commit/Grisgram/gml-highscorer)](https://github.com/Grisgram/gml-highscorer) - Highscore and trophy system.
- [SSave ![GitHub Repo Stars](https://img.shields.io/github/stars/stoozey/SSave) ![GitHub last commit](https://img.shields.io/github/last-commit/stoozey/SSave)](https://github.com/stoozey/SSave) - Simple file saving system.
- [Catspeak ![GitHub Repo Stars](https://img.shields.io/github/stars/katsaii/catspeak-lang) ![GitHub last commit](https://img.shields.io/github/last-commit/katsaii/catspeak-lang)](https://github.com/katsaii/catspeak-lang) - Cross-platform programming language for modding support.
- [JITSpeak ![GitHub Repo Stars](https://img.shields.io/github/stars/BenjaminUrquhart/JITSpeak) ![GitHub last commit](https://img.shields.io/github/last-commit/BenjaminUrquhart/JITSpeak)](https://github.com/BenjaminUrquhart/JITSpeak) - Improves Catspeak performance.
- [GMBenchmark ![GitHub Repo Stars](https://img.shields.io/github/stars/DragoniteSpam/GMBenchmark) ![GitHub last commit](https://img.shields.io/github/last-commit/DragoniteSpam/GMBenchmark)](https://github.com/DragoniteSpam/GMBenchmark) - A tool to benchmark GML code.
- [GML-Multiprocessing ![GitHub Repo Stars](https://img.shields.io/github/stars/tinkerer-red/GML-Multiprocessing) ![GitHub last commit](https://img.shields.io/github/last-commit/tinkerer-red/GML-Multiprocessing)](https://github.com/tinkerer-red/GML-Multiprocessing) - A proof of concept for multiprocessing.
- [Figgy ![GitHub Repo Stars](https://img.shields.io/github/stars/glebtsereteli/Figgy) ![GitHub last commit](https://img.shields.io/github/last-commit/glebtsereteli/Figgy)](https://github.com/glebtsereteli/Figgy) - Centralized and persistent live configs for seamless game tuning and balancing.
- [RenderStack ![GitHub Repo Stars](https://img.shields.io/github/stars/FoxyOfJungle/RenderStack) ![GitHub last commit](https://img.shields.io/github/last-commit/FoxyOfJungle/RenderStack)](https://github.com/FoxyOfJungle/RenderStack) - Organize your game's rendering into a customizable order.

## Tools

Things that work with project files or GameMaker itself rather than being something that's used in-game.

- [Stitch for VSCode](https://marketplace.visualstudio.com/items?itemName=bscotch.bscotch-stitch-vscode) - Edit GameMaker projects in VSCode.
- [GMEdit ![GitHub Repo Stars](https://img.shields.io/github/stars/YellowAfterlife/GMEdit) ![GitHub last commit](https://img.shields.io/github/last-commit/YellowAfterlife/GMEdit)](https://github.com/YellowAfterlife/GMEdit) - Code editor to use in conjunction with GameMaker.
- [YYP Maker](https://sahaun.itch.io/yyp-maker) - Makes `.yyp` files for you.
- [Rubber ![GitHub Repo Stars](https://img.shields.io/github/stars/GameMakerDiscord/Rubber) ![GitHub last commit](https://img.shields.io/github/last-commit/GameMakerDiscord/Rubber)](https://github.com/GameMakerDiscord/Rubber) - Compile GameMaker projects via the command line. Here's a [great guide](https://www.patreon.com/posts/how-to-build-36556955) on how to use it.
- [GMSnip](https://manta-ray.itch.io/gmsnip) - Experimental tool to define unlimited code snippets in the IDE.
- [vim-GML ![GitHub Repo Stars](https://img.shields.io/github/stars/JafarDakhan/vim-gml) ![GitHub last commit](https://img.shields.io/github/last-commit/JafarDakhan/vim-gml)](https://github.com/JafarDakhan/vim-gml) - High quality Vim syntax highlighting for GameMaker.
- [sfGML](https://yellowafterlife.itch.io/gamemaker-haxe) - Generate GML code from strongly-typed Haxe.
- [Win7 patcher for GM2024.11+](https://yellowafterlife.itch.io/gm2024-win7-patcher) - Makes games made in new GM versions run on Windows 7.
- [RerouteAudio](https://yellowafterlife.itch.io/gamemaker-reroute-audio) - Organizes audio files compiled games into subdirectories. 💸
- [GMLC ![GitHub Repo Stars](https://img.shields.io/github/stars/tinkerer-red/GMLC) ![GitHub last commit](https://img.shields.io/github/last-commit/tinkerer-red/GMLC)](https://github.com/tinkerer-red/GMLC) - Runtime compiler and interpreter to load, compile, and execute GML code at runtime.

## Debugging

- [rt-shell ![GitHub Repo Stars](https://img.shields.io/github/stars/daikon-games/rt-shell) ![GitHub last commit](https://img.shields.io/github/last-commit/daikon-games/rt-shell)](https://github.com/daikon-games/rt-shell) - Easy to use in-game shell. Create your own commands, command meta data, command suggestions, history, etc.
- [Olympus ![GitHub Repo Stars](https://img.shields.io/github/stars/bscotch/olympus) ![GitHub last commit](https://img.shields.io/github/last-commit/bscotch/olympus)](https://github.com/bscotch/olympus#readme) - Testing Framework.
- [Crispy ![GitHub Repo Stars](https://img.shields.io/github/stars/bfrymire/crispy) ![GitHub last commit](https://img.shields.io/github/last-commit/bfrymire/crispy)](https://github.com/bfrymire/crispy) - Unit testing in GameMaker.
- [Snitch ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/Snitch) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/Snitch)](https://github.com/JujuAdams/Snitch) - Crash and logging system.
- [DeerLog](https://mulfok.itch.io/gamemaker-deerlog) - Small log writer.
- [gms2-test ![GitHub Repo Stars](https://img.shields.io/github/stars/pmarincak/gms2-test) ![GitHub last commit](https://img.shields.io/github/last-commit/pmarincak/gms2-test)](https://github.com/pmarincak/gms2-test) - Unit testing framework.
- [Meta ![GitHub Repo Stars](https://img.shields.io/github/stars/nommiin/meta) ![GitHub last commit](https://img.shields.io/github/last-commit/nommiin/meta)](https://github.com/nommiin/meta) - Runtime asset inspector.
- [FPS Speedometer](https://dragonite.itch.io/fps-speedometer-for-gamemaker) - Pretty framerate display.
- [Duck ![GitHub Repo Stars](https://img.shields.io/github/stars/imlazyeye/duck) ![GitHub last commit](https://img.shields.io/github/last-commit/imlazyeye/duck)](https://github.com/imlazyeye/duck) - A fast GML analyzer to enforce code styling and detect errors.
- [Gobo ![GitHub Repo Stars](https://img.shields.io/github/stars/Pizzaandy/Gobo) ![GitHub last commit](https://img.shields.io/github/last-commit/Pizzaandy/Gobo)](https://github.com/Pizzaandy/Gobo/) - An opinionated code formatter for GML.
- [Gobo (EttyKitty fork) ![GitHub Repo Stars](https://img.shields.io/github/stars/EttyKitty/Gobo) ![GitHub last commit](https://img.shields.io/github/last-commit/EttyKitty/Gobo)](https://github.com/EttyKitty/Gobo/) - A bit less opinionated code formatter for GML, with more options and functionality.
- [Inspectron ![GitHub Repo Stars](https://img.shields.io/github/stars/shdwcat/Inspectron) ![GitHub last commit](https://img.shields.io/github/last-commit/shdwcat/Inspectron)](https://github.com/shdwcat/Inspectron) - A fluent API for easily creating GameMaker debug views.
- [GMPulse](https://topherlicious.itch.io/gmpulse) - A runtime inspector and control panel. 💸
- [Lookout ![GitHub Repo Stars](https://img.shields.io/github/stars/glebtsereteli/Lookout) ![GitHub last commit](https://img.shields.io/github/last-commit/glebtsereteli/Lookout)](https://github.com/glebtsereteli/Lookout) - Helpful debug overlay views.

## Input Handling

- [Input](https://codeberg.org/offalynne/Input) - No nonsense gamepad/keyboard library.
- [XeroInput](https://www.reddit.com/r/gamemaker/comments/icoh6m/xeroinput_gms23_input_handler/) - Another library to handle multiple inputs for a single action.
- [InputCandy ![GitHub Repo Stars](https://img.shields.io/github/stars/LAGameStudio/InputCandy) ![GitHub last commit](https://img.shields.io/github/last-commit/LAGameStudio/InputCandy)](https://github.com/LAGameStudio/InputCandy) - Similar to Input as it acts as a wrapper for SDL, with actions and signalling, but also provides testing, on-screen diagnostics, and some other UI components related to peripherals, as well as pre-built end-user configuration menus that can be easily restyled.
- [Good Vibes ![GitHub Repo Stars](https://img.shields.io/github/stars/mrdaneeyul/good-vibes) ![GitHub last commit](https://img.shields.io/github/last-commit/mrdaneeyul/good-vibes)](https://github.com/mrdaneeyul/good-vibes) - Device vibration.
- [Mouse Queue ![GitHub Repo Stars](https://img.shields.io/github/stars/YAL-GameMaker/window_mouse_queue) ![GitHub last commit](https://img.shields.io/github/last-commit/YAL-GameMaker/window_mouse_queue)](https://github.com/YAL-GameMaker/window_mouse_queue) - Tracks the Windows mouse pointer with high precision.
- [Native Cursors](https://yellowafterlife.itch.io/gamemaker-native-cursors) - System-level custom cursors. 💸
- [Native Mouselock](https://yellowafterlife.itch.io/gamemaker-native-mouselock) - System-level mouse locking. 💸
- [Raw Input](https://yellowafterlife.itch.io/gamemaker-raw-input) - Use multiple mice and keyboards. 💸

## User Interface

- [Scribble ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/scribble) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/scribble)](https://github.com/JujuAdams/scribble) - Efficient multi-effects text renderer.
- [Scripture](https://pixelatedpope.itch.io/scripture) - Another easy to use, highly compatible text renderer.
- [Chatterbox ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/chatterbox) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/chatterbox)](https://github.com/JujuAdams/chatterbox) - Narrative scripting tool.
- [Textboxy ![GitHub Repo Stars](https://img.shields.io/github/stars/glitchroy/textboxy) ![GitHub last commit](https://img.shields.io/github/last-commit/glitchroy/textboxy)](https://github.com/glitchroy/textboxy) - Simple textboxes.
- [Crochet ![GitHub Repo Stars](https://img.shields.io/github/stars/FaultyFunctions/Crochet) ![GitHub last commit](https://img.shields.io/github/last-commit/FaultyFunctions/Crochet)](https://github.com/FaultyFunctions/Crochet) - An interactive dialogue editor for writers and programmers.
- [NotificationSystem ![GitHub Repo Stars](https://img.shields.io/github/stars/babaganosch/NotificationSystem) ![GitHub last commit](https://img.shields.io/github/last-commit/babaganosch/NotificationSystem)](https://github.com/babaganosch/NotificationSystem) - Notifications in GameMaker.
- [YUI ![GitHub Repo Stars](https://img.shields.io/github/stars/shdwcat/YUI) ![GitHub last commit](https://img.shields.io/github/last-commit/shdwcat/YUI)](https://github.com/shdwcat/YUI) - A UI system with live reloading, template system, data binding, and a drag and drop feature.
- [Guido ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/Guido) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/Guido)](https://github.com/JujuAdams/Guido) - Simple immediate mode GUI framework.
- [GMUI-Framework ![GitHub Repo Stars](https://img.shields.io/github/stars/AlertStudios/GMUI-Framework) ![GitHub last commit](https://img.shields.io/github/last-commit/AlertStudios/GMUI-Framework)](https://github.com/AlertStudios/GMUI-Framework) - A pure GML solution to structure and control your menus, drawing parallels to .NET UI.
- [GMUI ![GitHub Repo Stars](https://img.shields.io/github/stars/erkan612/GMUI) ![GitHub last commit](https://img.shields.io/github/last-commit/erkan612/GMUI)](https://github.com/erkan612/GMUI) - Immediate mode GameMaker UI library, tons of UI components.
- [MajorGUI ![GitHub Repo Stars](https://img.shields.io/github/stars/erkan612/MajorGUI_GML) ![GitHub last commit](https://img.shields.io/github/last-commit/erkan612/MajorGUI_GML)](https://github.com/erkan612/MajorGUI_GML) - Surface-based GUI that allows 100% control over UI styling and functionality.
- [GMS2-UI-Library ![GitHub Repo Stars](https://img.shields.io/github/stars/nabilatsoulcade/GMS2-UI-Library) ![GitHub last commit](https://img.shields.io/github/last-commit/nabilatsoulcade/GMS2-UI-Library)](https://github.com/nabilatsoulcade/GMS2-UI-Library) - A Library Full of useful scripts for implementing your UI designs in GameMaker.
- [Emu UI ![GitHub Repo Stars](https://img.shields.io/github/stars/DragoniteSpam/Emu) ![GitHub last commit](https://img.shields.io/github/last-commit/DragoniteSpam/Emu)](https://github.com/DragoniteSpam/Emu) - Common UI elements (text input, checkboxes, radio buttons, dialog boxes, etc).
- [Easy And Fast Menu](https://pkgames.itch.io/easy-and-fast-menus-for-gms-23) - Simple implementation to have a menu up and running in seconds. Seems like a great fit if you're not looking for a bigger solution like GMUI.
- [Pause Menu](https://jasontomlee.itch.io/pause-menu-gamemaker-1-2) - Another smaller implementation but has a cool animation between menu options.
- [Magpie](https://dragonite.itch.io/magpie) - Generic Inventory System.
- [ImGuiGML](https://rousr.itch.io/imguigml) - DLL/GML wrapper of Dear ImGui.
- [GUI Framework](https://niris.itch.io/gui-framework) - GUI implementation from Niris Games.
- [Menu Tutorial](https://www.youtube.com/watch?v=1ITZOrI2qkA&list=PLSFMekK0JFgx2vmcCnttxxhrNVTjUB8R1) - FriendlyCosmonaut. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Smart Clickable GUI](https://www.youtube.com/watch?v=RbBgE3cUShc) - Pixelated Pope. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [zitk ![GitHub Repo Stars](https://img.shields.io/github/stars/TandyRum1024/zitk) ![GitHub last commit](https://img.shields.io/github/last-commit/TandyRum1024/zitk)](https://github.com/TandyRum1024/zitk) - Another interesting, Dear ImGui-inspired GUI toolkit. In development, but worth keeping an eye on.
- [gooey](https://manta-ray.itch.io/gooey) - Sprite-based UI Library for GameMaker LTS.
- [SimpleUI ![GitHub Repo Stars](https://img.shields.io/github/stars/evolutionleo/SimpleUI) ![GitHub last commit](https://img.shields.io/github/last-commit/evolutionleo/SimpleUI)](https://github.com/evolutionleo/SimpleUI) - Minimalistic UI framework.
- [LimeUI ![GitHub Repo Stars](https://img.shields.io/github/stars/Limekys/LimeUI) ![GitHub last commit](https://img.shields.io/github/last-commit/Limekys/LimeUI)](https://github.com/Limekys/LimeUI) - Flexpanel system for modern, touch-friendly interfaces.

## Localization

- [polyglot ![GitHub Repo Stars](https://img.shields.io/github/stars/daikon-games/polyglot) ![GitHub last commit](https://img.shields.io/github/last-commit/daikon-games/polyglot)](https://github.com/daikon-games/polyglot) - Localization library.
- [gm-i18n ![GitHub Repo Stars](https://img.shields.io/github/stars/CreativeHandOficial/gm-i18n) ![GitHub last commit](https://img.shields.io/github/last-commit/CreativeHandOficial/gm-i18n)](https://github.com/CreativeHandOficial/gm-i18n) - Internationalization of texts simply and quickly, using JSON files.
- [lexicon ![GitHub Repo Stars](https://img.shields.io/github/stars/tabularelf/lexicon) ![GitHub last commit](https://img.shields.io/github/last-commit/tabularelf/lexicon)](https://github.com/tabularelf/lexicon) - Another localization solution focused on simplifying implementation.
- [GMLocalize ![GitHub Repo Stars](https://img.shields.io/github/stars/DragoniteSpam/GMLocalize2) ![GitHub last commit](https://img.shields.io/github/last-commit/DragoniteSpam/GMLocalize2)](https://github.com/DragoniteSpam/GMLocalize2) - Not a full localization solution. Extracts text strings for localization from a GameMaker Studio 2 project and saves it to a JSON file.
- [Small Pentapop Localization Tool ![GitHub Repo Stars](https://img.shields.io/github/stars/AntonBergaker/small_pp_localization_tool) ![GitHub last commit](https://img.shields.io/github/last-commit/AntonBergaker/small_pp_localization_tool)](https://github.com/AntonBergaker/small_pp_localization_tool) - Similar export tool to GMLocalize but exports to a csv.
- [gms2-mofile ![GitHub Repo Stars](https://img.shields.io/github/stars/pmarincak/gms2-mofile) ![GitHub last commit](https://img.shields.io/github/last-commit/pmarincak/gms2-mofile)](https://github.com/pmarincak/gms2-mofile) - Mofile reader used for localization.
- [cmnLoc](https://yellowafterlife.itch.io/gamemaker-cmn-loc) - Localization library with a text extractor, short syntax, and ICU/pluralization support. 💸
- [MythLoco](https://mythloco.co.uk) - A localization system with a web-based strings editor.
- [Krug's Localize System](https://krug-dev.itch.io/localize-system-for-gamemaker) - A localization system with real-time Google Sheets API synchronization.

## Physics

- [Loj Hadron Collider ![GitHub Repo Stars](https://img.shields.io/github/stars/Lojemiru/Loj-Hadron-Collider) ![GitHub last commit](https://img.shields.io/github/last-commit/Lojemiru/Loj-Hadron-Collider)](https://github.com/Lojemiru/Loj-Hadron-Collider) - A robust, pixel-perfect collision engine.
- [On Slopes and Grids](https://forum.yoyogames.com/index.php?threads/on-slopes-and-grids-subpixel-perfect-topdown-movement-and-collision-line-without-objects.4073/) - A tutorial to implement 45° slopes.
- [GMS2 Platforming System](https://benal.itch.io/basic-modern-platforming-system) - GameMaker implementation by Ben Allen and an expansion on Shaun Spalding's original 1.4 platformer tutorial.
- [Inverse Kinematics Extension ![GitHub Repo Stars](https://img.shields.io/github/stars/tonystr/Inverse-Kinematics-Extension-for-Gamemaker) ![GitHub last commit](https://img.shields.io/github/last-commit/tonystr/Inverse-Kinematics-Extension-for-Gamemaker)](https://github.com/tonystr/Inverse-Kinematics-Extension-for-Gamemaker) - A library for working with inverse kinematics.
- [Verlet Integration Library](https://jamjamteam.itch.io/verlet-integration-gamemake-studio-2) - Verlet integration by Sarek Lambert.
- [GMVerlet-Integration ![GitHub Repo Stars](https://img.shields.io/github/stars/tabularelf/GMVerlet-Integration) ![GitHub last commit](https://img.shields.io/github/last-commit/tabularelf/GMVerlet-Integration)](https://github.com/tabularelf/GMVerlet-Integration) - Verlet integration example used for visuals.
- [Top-Down Movement & Collision](https://pixelatedpope.itch.io/tdmc/devlog/156556/converting-tdmc-to-use-tiles) - Robust object-based collision system from Pixelated Pope.
- [GMPhysX](https://bytecauldron.itch.io/gmphysx) - Adds NVIDIA PhysX to GameMaker for physics-based 2D/3D games. 💸

## Sprites

- [AESnips ![GitHub Repo Stars](https://img.shields.io/github/stars/angelwire/AESnips) ![GitHub last commit](https://img.shields.io/github/last-commit/angelwire/AESnips)](https://github.com/angelwire/AESnips) - A sprite playback system.
- [phgen ![GitHub Repo Stars](https://img.shields.io/github/stars/squircledev/phgen) ![GitHub last commit](https://img.shields.io/github/last-commit/squircledev/phgen)](https://github.com/squircledev/phgen) - Placeholder asset generation.
- [Disarm ![GitHub Repo Stars](https://img.shields.io/github/stars/NuxiiGit/disarm) ![GitHub last commit](https://img.shields.io/github/last-commit/NuxiiGit/disarm)](https://github.com/NuxiiGit/disarm) - A spriter skeletal animation at runtime.
- [SpriteSource ![GitHub Repo Stars](https://img.shields.io/github/stars/bscotch/stitch) ![GitHub last commit](https://img.shields.io/github/last-commit/bscotch/stitch)](https://github.com/bscotch/stitch/tree/develop/packages/sprite-source) - Utilities for creating art asset pipelines.
- [PixelUpscaler ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/Pixel-Art-Upscaling) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/Pixel-Art-Upscaling)](https://github.com/JujuAdams/Pixel-Art-Upscaling) - Pixel art upscaling shader for awkward resolutions for GameMaker.
- [ASESync](https://sahaun.itch.io/asesync) - Automatically syncs aesprite files in GameMaker.
- [conveyorbelt ![GitHub Repo Stars](https://img.shields.io/github/stars/imissmyfriends/conveyorbelt) ![GitHub last commit](https://img.shields.io/github/last-commit/imissmyfriends/conveyorbelt)](https://github.com/imissmyfriends/conveyorbelt) - Similar to ASESync. Export Aesprite files to GameMaker sprites.
- [Collage ![GitHub Repo Stars](https://img.shields.io/github/stars/tabularelf/Collage) ![GitHub last commit](https://img.shields.io/github/last-commit/tabularelf/Collage)](https://github.com/tabularelf/Collage) - Texture page builder and image manager. Mimics GameMaker's texture page packing while offering higher flexibility.
- [GM Animate ![GitHub Repo Stars](https://img.shields.io/github/stars/KormexGit/GM-Animate) ![GitHub last commit](https://img.shields.io/github/last-commit/KormexGit/GM-Animate)](https://github.com/KormexGit/GM-Animate) - Sprite animation manager.

## Audio

- [GMEXT-FMOD ![GitHub Repo Stars](https://img.shields.io/github/stars/YoYoGames/GMEXT-FMOD) ![GitHub last commit](https://img.shields.io/github/last-commit/YoYoGames/GMEXT-FMOD)](https://github.com/YoYoGames/GMEXT-FMOD) - Official support for FMOD in GameMaker.
- [FML ![GitHub Repo Stars](https://img.shields.io/github/stars/Nikkilae/fml) ![GitHub last commit](https://img.shields.io/github/last-commit/Nikkilae/fml)](https://github.com/Nikkilae/fml) - GameMaker bindings for the FMOD Studio API.
- [Echo/Delay Effect](https://madwolf-studios.itch.io/audio-echodelay-effect-for-gamemaker-studio-2) - Optimized delay effect. 💸
- [wavload ![GitHub Repo Stars](https://img.shields.io/github/stars/nkrapivin/wavload) ![GitHub last commit](https://img.shields.io/github/last-commit/nkrapivin/wavload)](https://github.com/nkrapivin/wavload) - Demonstrates how to externally load .wav files.
- [audioExt ![GitHub Repo Stars](https://img.shields.io/github/stars/tabularelf/audioExt) ![GitHub last commit](https://img.shields.io/github/last-commit/tabularelf/audioExt)](https://github.com/tabularelf/audioExt) - Sound External Loader/Unloader Manager.
- [ExternalAudio ![GitHub Repo Stars](https://img.shields.io/github/stars/NuxiiGit/ExternalAudio) ![GitHub last commit](https://img.shields.io/github/last-commit/NuxiiGit/ExternalAudio)](https://github.com/NuxiiGit/ExternalAudio) - Load external .wav files at runtime.
- [Phonix ![GitHub Repo Stars](https://img.shields.io/github/stars/Andre-404/Phonix) ![GitHub last commit](https://img.shields.io/github/last-commit/Andre-404/Phonix)](https://github.com/Andre-404/Phonix/) - Compact audio system. Great for dynamic music!
- [Vinyl ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/Vinyl) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/Vinyl)](https://github.com/JujuAdams/Vinyl) - Live updating audio system.
- [LineAudio ![GitHub Repo Stars](https://img.shields.io/github/stars/WangleLine/LineAudio) ![GitHub last commit](https://img.shields.io/github/last-commit/WangleLine/LineAudio)](https://github.com/WangleLine/LineAudio) - Audio helper functions.
- [Bard ![GitHub Repo Stars](https://img.shields.io/github/stars/gl326/bard-audio) ![GitHub last commit](https://img.shields.io/github/last-commit/gl326/bard-audio)](https://github.com/gl326/bard-audio) - An engine for desiging and implementing good audio in GameMaker. Updated to make use of the more recent GameMaker audio effects.
- [SynthEngine](https://topherlicious.itch.io/synthengine) - A fully-featured musical synthesizer for GameMaker.
- [MusicTheoryLib](https://topherlicious.itch.io/musictheorylib) - Convenient music theory utilities for GameMaker.
- [WaveForm](https://topherlicious.itch.io/waveform) - Render audio wave forms from audio buffers in GameMaker.
- [WaveWrite](https://topherlicious.itch.io/wavewrite) - Read and write WAV files in GameMaker.
- [GMMidi](https://topherlicious.itch.io/gmmidi) - Read and write MIDI files in GameMaker.
- [EZAFX](https://topherlicious.itch.io/ezafx) - Instant preset audio effects for GameMaker.
- [GMSync](https://topherlicious.itch.io/gmsync) - Perfectly sync game elements to the rhythm of your music.
- [MicVol](https://topherlicious.itch.io/micvol) - Easily monitor microphone volume in real time in GameMaker. 💸

## Levels

- [LDtk to GMS](https://shynif.itch.io/ldtk-to-gms) - LDtk Importer.
- [LDtkParser ![GitHub Repo Stars](https://img.shields.io/github/stars/evolutionleo/LDtkParser) ![GitHub last commit](https://img.shields.io/github/last-commit/evolutionleo/LDtkParser)](https://github.com/evolutionleo/LDtkParser) - Advanced LDtk Importer.
- [Room Data Inspector ![GitHub Repo Stars](https://img.shields.io/github/stars/heygleeson/GM-RoomInspector) ![GitHub last commit](https://img.shields.io/github/last-commit/heygleeson/GM-RoomInspector)](https://github.com/heygleeson/GM-RoomInspector) - Collects room data and stores it into a JSON for later use.
- [Random Dungeon Generator ![GitHub Repo Stars](https://img.shields.io/github/stars/BlaXun/Random-Dungeon-Generator-GMS-2.3) ![GitHub last commit](https://img.shields.io/github/last-commit/BlaXun/Random-Dungeon-Generator-GMS-2.3)](https://github.com/BlaXun/Random-Dungeon-Generator-GMS-2.3) - Combines user-defined chambers to create a dungeon.
- [Random Level Generator ![GitHub Repo Stars](https://img.shields.io/github/stars/GameMakerDiscord/random-level-gen-gms2) ![GitHub last commit](https://img.shields.io/github/last-commit/GameMakerDiscord/random-level-gen-gms2)](https://github.com/GameMakerDiscord/random-level-gen-gms2) - A random level generation example (similar to Nuclear Throne) using GameMaker.
- [Wave Function Collapse](https://quadolorgames.itch.io/wfc-gml-demo) - Generates a random tile map but not production ready in its current state.
- [Destructible Terrain ![GitHub Repo Stars](https://img.shields.io/github/stars/niksudan/gms2-destructible-terrain) ![GitHub last commit](https://img.shields.io/github/last-commit/niksudan/gms2-destructible-terrain)](https://github.com/niksudan/gms2-destructible-terrain) - An example of collidable, destructible terrain in GameMaker Studio using surfaces and grids.
- [Cellular Automata Caves](https://alessiogamedev.itch.io/gms-cellular-automata-algorithm) - Generates huge caves in a few hundred milliseconds.
- [GMRoomLoader ![GitHub Repo Stars](https://img.shields.io/github/stars/glebtsereteli/GMRoomLoader) ![GitHub last commit](https://img.shields.io/github/last-commit/glebtsereteli/GMRoomLoader)](https://github.com/glebtsereteli/GMRoomLoader) - Streamlined room loading at runtime. Great for reusable room prefabs and procedural generation.

## Particles

- [Particle Editor](https://gamemakercasts.itch.io/particle-editor) - Create particles with an easy UI and export into GML code.
- [Particles Wrapper ![GitHub Repo Stars](https://img.shields.io/github/stars/GamemakerCasts/particles) ![GitHub last commit](https://img.shields.io/github/last-commit/GamemakerCasts/particles)](https://github.com/GamemakerCasts/particles) - A simplistic particle system wrapper that is designed to make creating particles fun and easy.
- [Advanced Particles](https://limekys.itch.io/advanced-particle-system) - A particle implementation that comes with it's own delta timing methods.
- [Pulse ![GitHub Repo Stars](https://img.shields.io/github/stars/Delfos1/Pulse) ![GitHub last commit](https://img.shields.io/github/last-commit/Delfos1/Pulse)](https://github.com/Delfos1/Pulse) - A library to create more complex particle emitters, systems and particles.
- [Burrn ![GitHub Repo Stars](https://img.shields.io/github/stars/FoxyOfJungle/Burrn) ![GitHub last commit](https://img.shields.io/github/last-commit/FoxyOfJungle/Burrn)](https://github.com/FoxyOfJungle/Burrn) - Built-in particle system that uses the particle asset built into the IDE.

## Lighting

- [Bulb ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/Bulb) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/Bulb)](https://github.com/JujuAdams/Bulb) - 2D lighting and shadows.
- [GameMaker Lighting Engine ![GitHub Repo Stars](https://img.shields.io/github/stars/bilouw/Gamemaker-Lighting-Engine) ![GitHub last commit](https://img.shields.io/github/last-commit/bilouw/Gamemaker-Lighting-Engine)](https://github.com/bilouw/Gamemaker-Lighting-Engine) - Tile-based Lighting Engine that projects shadows.
- [Lighting Systems](https://www.youtube.com/playlist?list=PLYVea5brHS8YHECGPoEp4_gWU-k6nWzUy) - Very fast dynamic 2D lighting implementation from GrizzliusMaximus using shadow casting. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Crystal](https://foxyofjungle.itch.io/crystal-2d-lighting-engine) - Complete and efficient 2D lighting & shadows solution. 💸

## Shaders

- [TransFX](https://short-bread.itch.io/transfx) - Transition Library.
- [Post-Processing FX](https://foxyofjungle.itch.io/post-processing-fx) - 50+ high-quality, customizable effects. 💸
- [Lens Distortion FOV](https://foxyofjungle.itch.io/lens-distortion-fov-shader) - Useful FOV depth effect. 💸
- [Fast Blur Area](https://foxyofjungle.itch.io/foxey-blur-area) - Fast alpha blur shader effect in two lines of code. 💸
- [Transitions Pro](https://foxyofjungle.itch.io/foxey-transitions-pro) - 42 customizable transitions. 💸
- [Sketch Cartoon Shader](https://foxyofjungle.itch.io/sketch-cartoon-shader) - Turn your game visuals into a drawing/sketch style. 💸
- [2D Water Reflections](https://foxyofjungle.itch.io/water-reflective) - Customizable water object to easily display reflections. ���
- [BJRTFX](https://zikbakguru.itch.io/bjrtfx) - Zik's CRT Utility Shader.
- [bktGlitch](https://odditica.itch.io/bktglitch) - Glitch shader.
- [H O R R I - F I](https://gizmo199.itch.io/horri-fi) - VHS Shader.
- [Depth Sorted Sillouettes](https://pixelatedpope.itch.io/depth-sorted-silhouette-example) - Example project to demonstrate shader-based depth sorting sillouettes. Tested on PC, Mac, HTML5, and Android.
- [GMShaders.com](https://gmshaders.com/) - Shader tutorials from Xor. Originally hosted at "xorshaders.com".
- [1PassBlur ![GitHub Repo Stars](https://img.shields.io/github/stars/XorDev/1PassBlur) ![GitHub last commit](https://img.shields.io/github/last-commit/XorDev/1PassBlur)](https://github.com/XorDev/1PassBlur/wiki) - Blur Shader with adjustable radius.
- [Bokeh Blur ![GitHub Repo Stars](https://img.shields.io/github/stars/XorDev/Bokeh) ![GitHub last commit](https://img.shields.io/github/last-commit/XorDev/Bokeh)](https://github.com/XorDev/Bokeh/wiki) - Extension of the 1PassBlur which provides a different look. Similar to a real lens blur. Although it's much slower than 1Pass or Dual-Kawase.
- [Dual-Kawase ![GitHub Repo Stars](https://img.shields.io/github/stars/XorDev/Dual-Kawase) ![GitHub last commit](https://img.shields.io/github/last-commit/XorDev/Dual-Kawase)](https://github.com/XorDev/Dual-Kawase/wiki) - Blur Shader that limits radius but is very efficient.
- [Xor's Halftone](https://xordev.itch.io/halftone) - A wonderful, versitile halftone shader. Lots of tweakable settings.
- [Voronoi ![GitHub Repo Stars](https://img.shields.io/github/stars/XorDev/GMS-Voronoi-Pixels) ![GitHub last commit](https://img.shields.io/github/last-commit/XorDev/GMS-Voronoi-Pixels)](https://github.com/XorDev/GMS-Voronoi-Pixels) - Sampled pixels on a Voronoi diagram.
- [Fire-Fun ![GitHub Repo Stars](https://img.shields.io/github/stars/XorDev/Fire-Fun) ![GitHub last commit](https://img.shields.io/github/last-commit/XorDev/Fire-Fun)](https://github.com/XorDev/Fire-Fun/wiki) - Some fun magic fireballs.
- [Jump Flooding](https://terohannula.itch.io/jump-flooding-algorithm) - Jump Flooding Algorithm for GameMaker made with shaders.
- [Outline Shader ![GitHub Repo Stars](https://img.shields.io/github/stars/Grisgram/gml-outline-shader-drawer) ![GitHub last commit](https://img.shields.io/github/last-commit/Grisgram/gml-outline-shader-drawer)](https://github.com/Grisgram/gml-outline-shader-drawer) - Outline shader.
- [Chameleon ![GitHub Repo Stars](https://img.shields.io/github/stars/Lojemiru/Chameleon) ![GitHub last commit](https://img.shields.io/github/last-commit/Lojemiru/Chameleon)](https://github.com/Lojemiru/Chameleon) - Palette Swapper.
- [Xpanda ![GitHub Repo Stars](https://img.shields.io/github/stars/GameMakerDiscord/Xpanda) ![GitHub last commit](https://img.shields.io/github/last-commit/GameMakerDiscord/Xpanda)](https://github.com/GameMakerDiscord/Xpanda) - Include code from external files in your shaders.
- [Shadertoy to GameMaker ![GitHub Repo Stars](https://img.shields.io/github/stars/jfkn1ght/Shadertoy2GM) ![GitHub last commit](https://img.shields.io/github/last-commit/jfkn1ght/Shadertoy2GM)](https://github.com/jfkn1ght/Shadertoy2GM) - Convert shadertoy.com shaders to run in GameMaker (GLSL ES).
- [Shader Tutorials](https://www.youtube.com/watch?v=ch4BYqkL1w8&list=PL0kTSdIvQNCNE-BDKOlYu628AalMmXy_P) - Gaming Reverends. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Shader Tutorials](https://www.youtube.com/watch?v=a4S7LXx6-sQ&list=PL_hT--4HOvrdkihto8Xu7hhp1-5Gj8zsa) - DragoniteSpam. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)

## 3D

- [3D-2D ![GitHub Repo Stars](https://img.shields.io/github/stars/YoYoGames/3D-2D) ![GitHub last commit](https://img.shields.io/github/last-commit/YoYoGames/3D-2D)](https://github.com/YoYoGames/3D-2D) - Official tool to turn 3D models into 2D sprites.
- [BBMOD ![GitHub Repo Stars](https://img.shields.io/github/stars/blueburn-cz/BBMOD) ![GitHub last commit](https://img.shields.io/github/last-commit/blueburn-cz/BBMOD)](https://github.com/blueburn-cz/BBMOD) - 3D Rendering Solution. Comes with several modules to import obj, 3D camera setup, integration with ColMesh, and more.
- [ColMesh](https://forum.yoyogames.com/index.php?threads/colmesh-3d-collisions-made-easy.82765/) - 3D Collision Library from TheSnidr.
- [BSP 4 GMS](https://cdlegasse.itch.io/ozarq-bsp-4-gms) - Import BSP files into GameMaker. Currently just a demo but worth keeping an eye on.
- [dotobj ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/dotobj) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/dotobj)](https://github.com/JujuAdams/dotobj) - Lightweight .obj/.mtl 3D model loader written in native GML.
- [Bronze Box ![GitHub Repo Stars](https://img.shields.io/github/stars/cicadian/Bronze-Box) ![GitHub last commit](https://img.shields.io/github/last-commit/cicadian/Bronze-Box)](https://github.com/cicadian/Bronze-Box) - Example of how to build 3D world models from a 2D grid.
- [DopeFish Respawned](https://lemontoast-games.itch.io/dopefish-respawned) - Extensive WAD manager to load DOOM maps in GameMaker.
- [Blender to GameMaker](https://github.com/blender-to-gmstudio) - A collection of scripts to export and import Blender models to and from GameMaker.
- [DmrVBM ![GitHub Repo Stars](https://img.shields.io/github/stars/Dreamer13sq/DmrVBM-blender-to-gms2) ![GitHub last commit](https://img.shields.io/github/last-commit/Dreamer13sq/DmrVBM-blender-to-gms2)](https://github.com/Dreamer13sq/DmrVBM-blender-to-gms2) - Import/Export tools to load vertex buffer data out of Blender and into GMS.
- [Penguin](https://dragonite.itch.io/penguin) - 3D model conversion tool.
- [Three Mice In a Trench Coat ![GitHub Repo Stars](https://img.shields.io/github/stars/XorDev/ThreeMiceInaTrenchcoat) ![GitHub last commit](https://img.shields.io/github/last-commit/XorDev/ThreeMiceInaTrenchcoat)](https://github.com/XorDev/ThreeMiceInaTrenchcoat) - Source for a GameMaker 3D game.
- [sPart](https://marketplace.yoyogames.com/assets/7299/spart-3d-particle-system) - 3D Particle System from TheSnidr.
- [Terrain Editor](https://dragonite.itch.io/terrain) - Terrain editor. Exports to gm models, obj, or vertex buffers.
- [Snowy Snow](https://dragonite.itch.io/snowy-snow) - 3D Snow Shader.
- [Collisions](https://dragonite.itch.io/collisions) - 3D collision system that works with native GML.
- [Bonk ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/Bonk) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/Bonk)](https://github.com/JujuAdams/Bonk) - Another cool collision library handling a majority of collision shape use-cases.
- [3D Fragment Point Lights](https://danieldavis.itch.io/ddg-point-light-shader-system) - 3D point lights using shaders. 💸
- [3D GameMaker Playlist](https://www.youtube.com/watch?v=ojfN--tdSNM&list=PL_hT--4HOvrcML9uqHe4fwBVTm650Vy3V) - DragoniteSpam. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [3D Collisions Playlist](https://www.youtube.com/watch?v=o7kjtTEMpeU&list=PL_hT--4HOvrf_VYo26LNl3zN5uwfuC3CC) - DragoniteSpam. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [3D Optimization Playlist](https://www.youtube.com/watch?v=knfAZbJJKNY&list=PL_hT--4HOvrf_CJSA7fVU1tkjGVv5Sq2t) - DragoniteSpam. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [glTF parser](https://bitbucket.org/tijit/gltf-parser-for-gamemaker-lts/src/main/) - A model loader with support for animations.
- [GMFlux ![GitHub Repo Stars](https://img.shields.io/github/stars/Fanatrick/GMFlux) ![GitHub last commit](https://img.shields.io/github/last-commit/Fanatrick/GMFlux)](https://github.com/Fanatrick/GMFlux) - Heightfield fluid simulation solver.

## Sprite Stacking

- [Beginners Guide to Sprite Stacking](https://medium.com/@avsnoopy/beginners-guide-to-sprite-stacking-in-gamemaker-studio-2-and-magica-voxel-part-1-f7a1394569c0) - A primer on sprite stacking from Avis. Check out part 2 from dev_dwarf as well.
- [Fauxton3D](https://gizmo199.itch.io/fauxton3d) - Sprite stacking engine.
- [Sprite Stacking Tutorials](https://www.youtube.com/watch?v=VIDN-nG3EOU&list=PL3Kbpztq9qwT9MbW_k4yyJU__or1r8P2j) - Gizmo199. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)

## Networking

- [Warp ![GitHub Repo Stars](https://img.shields.io/github/stars/evolutionleo/Warp) ![GitHub last commit](https://img.shields.io/github/last-commit/evolutionleo/Warp)](https://github.com/evolutionleo/Warp) - A feature-rich framework for multiplayer games, written in GameMaker and Node.js.
- [EZ Networking](https://jasontomlee.itch.io/easy-gms-networking-platformer-build) - Host/client implementation with a chat feature.
- [Patchwire-GM ![GitHub Repo Stars](https://img.shields.io/github/stars/gm-core/patchwire-gm) ![GitHub last commit](https://img.shields.io/github/last-commit/gm-core/patchwire-gm)](https://github.com/gm-core/patchwire-gm) - The network library from gm-core if you want to use this implementation without the entire gm-core suite.
- [GMHandshake](https://gist.github.com/nkrapivin/c73f5a962466a4ecb63187a009a300d8) - A Gist demonstrating a network handshake.
- [HTTP GML ![GitHub Repo Stars](https://img.shields.io/github/stars/Sidorakh/http.gml) ![GitHub last commit](https://img.shields.io/github/last-commit/Sidorakh/http.gml)](https://github.com/Sidorakh/http.gml) - Recieve GET requests and upload files in GML.
- [GMNest ![GitHub Repo Stars](https://img.shields.io/github/stars/TimVN/GMNest) ![GitHub last commit](https://img.shields.io/github/last-commit/TimVN/GMNest)](https://github.com/TimVN/GMNest) - Socket.IO extension for HTML5 games.
- [MultiClient ![GitHub Repo Stars](https://img.shields.io/github/stars/tabularelf/MultiClient) ![GitHub last commit](https://img.shields.io/github/last-commit/tabularelf/MultiClient)](https://github.com/tabularelf/MultiClient) - Non-dll, multiple client launcher for network development.
- [Multiplayer Networking Tutorial](https://www.youtube.com/watch?v=NbsXRuNijlo&list=PLxaJReoxlrY_S4MrCYjzFCSrNX1TUX626) - Wizirdi. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Good GameMaker Rollback](https://springrollgames.itch.io/ggmr) - Rollback netcode library.
- [GM Networking ![GitHub Repo Stars](https://img.shields.io/github/stars/gmclan-org/gm_networking) ![GitHub last commit](https://img.shields.io/github/last-commit/gmclan-org/gm_networking)](https://github.com/gmclan-org/gm_networking) - Very simple network code demonstration.
- [Boomers Networking ![GitHub Repo Stars](https://img.shields.io/github/stars/gmclan-org/gm_boomers_networking) ![GitHub last commit](https://img.shields.io/github/last-commit/gmclan-org/gm_boomers_networking)](https://github.com/gmclan-org/gm_boomers_networking) - Network library which mimics pre-GM:Studio favorite networking extension 39dll using GM native functions.
- [Rocket Networking Engine](https://marketplace.gamemaker.io/assets/11424/rocket-networking-engine) - Easy low-code multiplayer engine.

## Integrations

- [DHook ![GitHub Repo Stars](https://img.shields.io/github/stars/tabularelf/DHook) ![GitHub last commit](https://img.shields.io/github/last-commit/tabularelf/DHook)](https://github.com/tabularelf/DHook) - Discord integration.
- [GMS2_RPC ![GitHub Repo Stars](https://img.shields.io/github/stars/Mtax-Development/GMS2_RPC) ![GitHub last commit](https://img.shields.io/github/last-commit/Mtax-Development/GMS2_RPC)](https://github.com/Mtax-Development/GMS2_RPC) - Another Discord integration.
- [NekoPresence](https://marketplace.yoyogames.com/assets/9526/nekopresence) - Oops, all Discord integration.
- [GMHook ![GitHub Repo Stars](https://img.shields.io/github/stars/Kruger0/GMHook) ![GitHub last commit](https://img.shields.io/github/last-commit/Kruger0/GMHook)](https://github.com/Kruger0/GMHook) - We really like Discord integration.
- [Steamworks.gml ![GitHub Repo Stars](https://img.shields.io/github/stars/YAL-GameMaker/steamworks.gml) ![GitHub last commit](https://img.shields.io/github/last-commit/YAL-GameMaker/steamworks.gml)](https://github.com/YAL-GameMaker/steamworks.gml) - Various expansions to Steamworks SDK support in GameMaker: Studio.
- [Parworks ![GitHub Repo Stars](https://img.shields.io/github/stars/nkrapivin/Parworks) ![GitHub last commit](https://img.shields.io/github/last-commit/nkrapivin/Parworks)](https://github.com/nkrapivin/Parworks) - Additional functionality for the YYG Steamworks extension.
- [GOG.gml ![GitHub Repo Stars](https://img.shields.io/github/stars/GameMakerDiscord/GOG.gml) ![GitHub last commit](https://img.shields.io/github/last-commit/GameMakerDiscord/GOG.gml)](https://github.com/GameMakerDiscord/GOG.gml) - A native extension for GOG.com SDK support.
- [GMTwitch ![GitHub Repo Stars](https://img.shields.io/github/stars/GameMakerDiscord/GMTwitch) ![GitHub last commit](https://img.shields.io/github/last-commit/GameMakerDiscord/GMTwitch)](https://github.com/GameMakerDiscord/GMTwitch) - Twitch integration.
- [Github.gml ![GitHub Repo Stars](https://img.shields.io/github/stars/AlubJ/GitHub.gml) ![GitHub last commit](https://img.shields.io/github/last-commit/AlubJ/GitHub.gml)](https://github.com/AlubJ/GitHub.gml) - GitHub REST API

## Camera

- [GameMaker Cameras: As Simple as Possible](https://www.youtube.com/watch?v=_g1LQ6aIJFk) - Pixelated Pope's guide on GameMaker's camera system. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Camera System Guide](https://maddestudiosgames.com/gms2-meet-the-camera-system/) - Getting started with cameras in GameMaker.
- [Pixel Perfect Smooth Camera ![GitHub Repo Stars](https://img.shields.io/github/stars/YAL-GameMaker/pixel-perfect-smooth-camera) ![GitHub last commit](https://img.shields.io/github/last-commit/YAL-GameMaker/pixel-perfect-smooth-camera)](https://github.com/YAL-GameMaker/pixel-perfect-smooth-camera) - An example of pixel-perfect yet smooth camera.
- [Dynamic Splitscreen](https://maddestudios.itch.io/gms2-project-dynamic-splitscreen) - Local multiplayer split screen implementation that merges the camera when players are close.
- [STANNcam ![GitHub Repo Stars](https://img.shields.io/github/stars/jack27121/STANNcam) ![GitHub last commit](https://img.shields.io/github/last-commit/jack27121/STANNcam)](https://github.com/jack27121/STANNcam) - Camera and resolution manager.
- [Camera All-In-One](https://jasontomlee.itch.io/allinone-camera) - Editor, screenshake, view-resizing, follow modes, screen effects, etc. 💸
- [REZOL](https://foxyofjungle.itch.io/rezol) - Complete resolution & screen manager (with split-screen support). 💸

## Sequences

- [Sequences Tutorial](https://www.youtube.com/watch?v=WO6gzhrx5b8) - Shaun Spalding. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Making Splash Screen Sequences](https://www.youtube.com/watch?v=hTh5UpFxx1E) - Mash Arcade. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [DuplicateSequence ![GitHub Repo Stars](https://img.shields.io/github/stars/KeeVeeGames/DuplicateSequence.gml) ![GitHub last commit](https://img.shields.io/github/last-commit/KeeVeeGames/DuplicateSequence.gml)](https://github.com/KeeVeeGames/DuplicateSequence.gml) - Make a deep copy of sequence assets/structs for editing at runtime.

## State Machines

- [SnowState ![GitHub Repo Stars](https://img.shields.io/github/stars/sohomsahaun/SnowState) ![GitHub last commit](https://img.shields.io/github/last-commit/sohomsahaun/SnowState)](https://github.com/sohomsahaun/SnowState) - Robust finite state machine.
- [FastSM ![GitHub Repo Stars](https://img.shields.io/github/stars/JulianDicken/FastSM) ![GitHub last commit](https://img.shields.io/github/last-commit/JulianDicken/FastSM)](https://github.com/JulianDicken/FastSM) - Lightweight alternative to SnowState.
- [wFSM](https://mors-games.itch.io/wfsm) - Another Easy-to-use Finite State Machine library.
- [True State](https://pixelatedpope.itch.io/truestate) - Feature-rich finite state machine to handle complex objects.
- [Pinocchio ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/Pinocchio) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/Pinocchio)](https://github.com/JujuAdams/Pinocchio) - State-based animation system.
- [BehaviorTree ![GitHub Repo Stars](https://img.shields.io/github/stars/Gizmo199/BehaviorTree) ![GitHub last commit](https://img.shields.io/github/last-commit/Gizmo199/BehaviorTree)](https://github.com/Gizmo199/BehaviorTree) - A simple behavior tree system.
- [FSM AI ![GitHub Repo Stars](https://img.shields.io/github/stars/gmclan-org/FSM-AI-module) ![GitHub last commit](https://img.shields.io/github/last-commit/gmclan-org/FSM-AI-module)](https://github.com/gmclan-org/FSM-AI-module) - Finite state machine for NPC AI.

## Pathing

- [Aquila](https://dragonite.itch.io/aquila) - A* Pathfinding implementation.
- [A-Star-Pathing ![GitHub Repo Stars](https://img.shields.io/github/stars/helloalbertdang/A-Star-Pathing) ![GitHub last commit](https://img.shields.io/github/last-commit/helloalbertdang/A-Star-Pathing)](https://github.com/helloalbertdang/A-Star-Pathing) - Another A* pathfinding implementation.
- [Grid-based Pathfinding Scripts](https://proton-squid.itch.io/pathfinding) - Flexible pathfinding system with 3 different algorithms.
- [Pathfinding in graph ![GitHub Repo Stars](https://img.shields.io/github/stars/gmclan-org/dijkstra-graph) ![GitHub last commit](https://img.shields.io/github/last-commit/gmclan-org/dijkstra-graph)](https://github.com/gmclan-org/dijkstra-graph) - Shortest pathfinding system in (weighted) graph, using Dijkstra algorithm.
- [PathPlus](https://delfos1.itch.io/pathplus-for-gamemaker/devlog/1115089/pathplus-220-follower-and-spriter) - Enhance GameMaker Paths with CatmullRom and Bezier Interpolations.

## Useful Extras

- [Animated Flag ![GitHub Repo Stars](https://img.shields.io/github/stars/Grisgram/gml-animated-flag) ![GitHub last commit](https://img.shields.io/github/last-commit/Grisgram/gml-animated-flag)](https://github.com/Grisgram/gml-animated-flag) - Vertex-animated flag.
- [Danmaku Project ![GitHub Repo Stars](https://img.shields.io/github/stars/OmegaX1000/DanmakuProject) ![GitHub last commit](https://img.shields.io/github/last-commit/OmegaX1000/DanmakuProject)](https://github.com/OmegaX1000/DanmakuProject) - Bullet hell engine.
- [OrbinautFramework ![GitHub Repo Stars](https://img.shields.io/github/stars/TrianglyRU/OrbinautFramework) ![GitHub last commit](https://img.shields.io/github/last-commit/TrianglyRU/OrbinautFramework)](https://github.com/TrianglyRU/OrbinautFramework) - Accurate framework to make classic Sonic games.
- [Mouse Trail Effect](https://all-x.itch.io/gms2-mouse-trail-effect) - Shows how to trace a line with primitives to create a colorful trail.
- [Starfield Generator ![GitHub Repo Stars](https://img.shields.io/github/stars/PixelProphecy/gml_starfield_generator) ![GitHub last commit](https://img.shields.io/github/last-commit/PixelProphecy/gml_starfield_generator)](https://github.com/PixelProphecy/gml_starfield_generator) - A script to generate starfields in GameMaker's GML language.
- [CleanShapes ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/Clean-Shapes) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/Clean-Shapes)](https://github.com/JujuAdams/Clean-Shapes) - Antialiased primitives library for GameMaker.
- [GMLScripts.com](https://www.gmlscripts.com/script/index) - Dozens of helper scripts, organized similarly to the official documentation.
- [GM48 Resources](https://gm48.net/resources) - Free resources from the community to become better at GameMaker Studio, game development and game jams.
- [GameMaker Kitchen](https://www.gamemakerkitchen.com/) - Another great resource for open source libraries, assets, and snippets.
- [Dracula Theme ![GitHub Repo Stars](https://img.shields.io/github/stars/dracula/gamemaker-studio) ![GitHub last commit](https://img.shields.io/github/last-commit/dracula/gamemaker-studio)](https://github.com/dracula/gamemaker-studio) - A dark theme for the IDE.
- [Gruvbox Theme ![GitHub Repo Stars](https://img.shields.io/github/stars/heygleeson/Gruvbox-GMTheme) ![GitHub last commit](https://img.shields.io/github/last-commit/heygleeson/Gruvbox-GMTheme)](https://github.com/heygleeson/Gruvbox-GMTheme) - A retro groove theme for the IDE.
- [2.3 Syntax in Detail](https://yal.cc/gamemaker-2-3-syntax-in-details/) - A full guide of the syntax features/changes in GML from Yal.
- [GameMaker Garbage Collection](https://gist.github.com/DatZach/96a30d6ae4225f8ec152719e57aed26b) - How garbage collection works in GML.
- [GitHub Yacc to GML Fix](https://www.reddit.com/r/gamemaker/comments/n5m35l/a_simple_fix_for_github_incorrectly_detecting/) - Tell GitHub your repo is all GML, not Yacc.
- [GameMaker Repo Badges ![GitHub Repo Stars](https://img.shields.io/github/stars/matthiaszarzecki/MadeWithGameMakerStudioBadges) ![GitHub last commit](https://img.shields.io/github/last-commit/matthiaszarzecki/MadeWithGameMakerStudioBadges)](https://github.com/matthiaszarzecki/MadeWithGameMakerStudioBadges) - Fancy badges to add to your README files.
- [GameMaker Discord Community GitHub](https://github.com/GameMakerDiscord) - Have you made a gamemaker tool you want to share? Consider submitting it to the official Discord's GitHub.
- [Source Control with Git & GameMaker](https://www.youtube.com/watch?v=UZG-P68xWio&list=PLSFMekK0JFgzmyDxVxj5Cctafu5UX_vUC) - FriendlyCosmonaut. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Game Resolution & Aspect Ratio Management](https://www.youtube.com/watch?v=_g1LQ6aIJFk&list=PLXkVsacazW2qvdnKNzgBLkUwlgi3FU-VO) - Pixelated Pope. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Setting up a Virtual Machine for GameMaker](https://www.youtube.com/watch?v=cK5k1_zN4eM) - MicahTheManiac. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Making Attacks Feel Good](https://www.youtube.com/watch?v=RWkMsD2WUz8) - Blobfish. ![YouTube](https://github.com/bytecauldron/awesome-gamemaker/raw/main/icons/youtube.png)
- [Tome ![GitHub Repo Stars](https://img.shields.io/github/stars/chesrowe/Tome) ![GitHub last commit](https://img.shields.io/github/last-commit/chesrowe/Tome)](https://github.com/chesrowe/Tome/) - Automatically generate documentation sites from GameMaker projects.
- [Piano example ![GitHub Repo Stars](https://img.shields.io/github/stars/gmclan-org/piano_example) ![GitHub last commit](https://img.shields.io/github/last-commit/gmclan-org/piano_example)](https://github.com/gmclan-org/piano_example) - Example of playing intrument notes by changing pitch, using only one audio file.
- [Compatibility scripts ![GitHub Repo Stars](https://img.shields.io/github/stars/gmclan-org/compatibility-scripts) ![GitHub last commit](https://img.shields.io/github/last-commit/gmclan-org/compatibility-scripts)](https://github.com/gmclan-org/compatibility-scripts) - Scripts that are used by GM when importing GM:S 1.4 projects, taken directly from runtime files.
- [Pause example ![GitHub Repo Stars](https://img.shields.io/github/stars/gmclan-org/pause_no_surface) ![GitHub last commit](https://img.shields.io/github/last-commit/gmclan-org/pause_no_surface)](https://github.com/gmclan-org/pause_no_surface) - Simple example of a pause screen without using surfaces.
- [Build Automation, CI/CD](https://gist.github.com/shichen85/887d237cdc4338fa3f4e4749a14990db) - Tutorial on using GitHub Actions as a CI/CD pipeline to automate building games.
- [BROKVN](https://cowcat.itch.io/brokvn-engine) - A visual novel engine.
- [AssParser ![GitHub Repo Stars](https://img.shields.io/github/stars/DecadeDecaf/AssParser) ![GitHub last commit](https://img.shields.io/github/last-commit/DecadeDecaf/AssParser)](https://github.com/DecadeDecaf/AssParser) - Subtitle support for video playback.
- [Ultimate Optimization Tier List](https://forum.gamemaker.io/index.php?threads/the-ultimate-gamemaker-optimization-tier-list.122141/) - Excellent forum thread on GameMaker optimization.

## Blogs

- [RefresherTowel](https://refreshertowelgames.wordpress.com/category/tutorial/) - Contains several posts on level generation.
- [Tony Str](https://tonystr.net/) - Some great articles on working with JSON, regular expressions *(regex)*, and drawing circles in GML.
- [Katsaii](https://www.katsaii.com/content/blog/posts.html) - Some articles on more advanced GML topics.
- [Meseta on Game Dev](https://meseta.dev/) - Seasoned GameMaker dev's thoughts on GameMaker concepts and libraries.
- [Thoughts On GameMaker ![GitHub Repo Stars](https://img.shields.io/github/stars/JujuAdams/ThoughtsOnGameMaker) ![GitHub last commit](https://img.shields.io/github/last-commit/JujuAdams/ThoughtsOnGameMaker)](https://github.com/JujuAdams/ThoughtsOnGameMaker) - Not a traditional blog but has great info on different GML techniques.
- [YellowAfterlife](https://yal.cc/category/gm/) - Tutorials on intermediate/advanced topics.

## YouTube

- [Jordan Guillou](https://www.youtube.com/channel/UCBmOLRTaPrfOxnTqpCLrwdQ) - Hobbyist indie dev with a few GameMaker-related tutorials.
- [DragoniteSpam](https://www.youtube.com/c/DragoniteSpam) - Covers highly technical elements of GameMaker with a focus on 3D.
- [Shaun Spalding](https://www.youtube.com/c/ShaunSpalding) - Previous community manager at YoYo Games. Has a wide variety of beginner-friendly GameMaker tutorials and helpful updates on new GameMaker features.
- [FriendlyCosmonaut](https://www.youtube.com/c/FriendlyCosmonaut) - Great playlist on building a farming RPG in GameMaker with several other tutorials.
- [Pixelated Pope](https://www.youtube.com/c/PixelatedPope) - Guides on GameMaker resolution management, cameras, GUI, and more.
- [Xor](https://www.youtube.com/c/XorDev) - Tons of shader demonstrations with a focus on 3D.
- [GamingEngineer](https://www.youtube.com/c/GamingEngineer) - A GameMaker developer that has been in the community for many years. They have a wide variety videos showcasing what GameMaker is capable of, with a focus on 3D.
- [TheSnidr](https://www.youtube.com/c/TheSnidr) - A lot of awesome 3D showcases and tutorials for GameMaker.
- [Peyton Burnham](https://www.youtube.com/channel/UCfh2Q3TsvlxM1S2GvXQ4eeQ) - GameMaker tutorials for top-down shooters and RPGs.
- [Gaming Reverends](https://www.youtube.com/channel/UC7fkptPD1FHQyDc9Fnm9S_A) - If you want to learn foundational material regarding GameMaker shaders, the "Shaders for Hobby-Programmers" playlist is definitely worth checking out.
- [Let's Learn This Together](https://www.youtube.com/c/LetsLearnThisTogether) - Small indie dev company with a focus on providing GameMaker guides.
- [Matharoo](https://www.youtube.com/c/GameMakerStationMatharoo) - Tons of free GameMaker tutorials and news about GameMaker.
- [GravityShift Games](https://www.youtube.com/c/SlasherXGAMES/) - A couple of genre-specific GameMaker tutorials, integrating databases into GameMaker, and more.
- [Slyddar](https://www.youtube.com/c/Slyddar/) - A channel dedicated to both DnD and GML tutorials.
- [SamSpadeGameDev](https://www.youtube.com/@SamSpadeGameDev) - In-depth coding tutorials for the hobbyist game maker.
- [gentoo's iceberg Playlist](https://www.youtube.com/playlist?list=PLks6h7R6jAUGrofUAQB178r6K8h43Ml5-) - Series based on iceberg to display advanced programming ideas in GameMaker.

## Community

[![GameMaker Forums](https://img.shields.io/badge/Forums-6AA916?style=for-the-badge&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAMAAAAolt3jAAAAZlBMVEX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2BrG8stAAAAIXRSTlMABg0OFBkfcn1%2Bf4CBgoOFhoeIiouWmNDa5ebp8PX2%2B%2F6o6Vq%2BAAAAY0lEQVR42k2OWQ6AIAwFn%2BIOioobrnD%2FS4o0EeanmQxNAdErRFTWtsFq6%2BiiZozz0CSnTjYBwo0RkF8DWDLf51Ni9K%2FYdq0Fy3KAfzk97M7goK1F%2F4rGH9Kk1OlboQtEDIrmC%2BU3CVxTr%2FRMAAAAAElFTkSuQmCC&&logoColor=white)](https://forum.yoyogames.com/index.php)
[![Reddit](https://img.shields.io/badge/Reddit-FF4500?style=for-the-badge&logo=reddit&logoColor=white)](https://www.reddit.com/r/gamemaker/)
[![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/gamemaker)

## Special Thanks

JujuAdams, FaultyFunctions, Gleb Tsereteli, Shaun Spalding, DragoniteSpam, Nick Ver Voort, Pixelated Pope, Tony Strømsnæs, HeartBeast, Xor, Gaming Reverends, Matharoo, YellowAfterlife, Gizmo199, Avis, Josh Wilson, Lojemiru

## Footnotes

- This is based on a list from [GameMaker Libraries ![GitHub Repo Stars](https://img.shields.io/github/stars/FaultyFunctions/GameMakerLibraries) ![GitHub last commit](https://img.shields.io/github/last-commit/FaultyFunctions/GameMakerLibraries)](https://github.com/FaultyFunctions/GameMakerLibraries) and from Gleb Tsereteli with additional links/details.
- A majority of linked resources will only work with `GameMaker 2.3+` due to GML syntax changes. However, if you are working in GameMaker 1.4, most library creators would appreciate it if someone makes a backport of their project. 🙂
- If you need more general game development resources, check out [Awesome Gamedev ![GitHub Repo Stars](https://img.shields.io/github/stars/Calinou/awesome-gamedev) ![GitHub last commit](https://img.shields.io/github/last-commit/Calinou/awesome-gamedev)](https://github.com/Calinou/awesome-gamedev) or [MagicTools ![GitHub Repo Stars](https://img.shields.io/github/stars/ellisonleao/magictools) ![GitHub last commit](https://img.shields.io/github/last-commit/ellisonleao/magictools)](https://github.com/ellisonleao/magictools#readme).

*GameMaker® is the property of YoYo Games™. This list is not affiliated with YoYo Games.*

## Contributing

Have something awesome to share? Check out the [Contributing Guidelines ![GitHub Repo Stars](https://img.shields.io/github/stars/bytecauldron/awesome-gamemaker) ![GitHub last commit](https://img.shields.io/github/last-commit/bytecauldron/awesome-gamemaker)](https://github.com/bytecauldron/awesome-gamemaker/blob/main/CONTRIBUTING.md).

## GameMaker Keybindings

![Keybindings](https://github.com/bytecauldron/awesome-gamemaker/raw/main/images/keybindings.png)
