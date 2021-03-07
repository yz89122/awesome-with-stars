[<img src="https://rawgit.com/hgupta9/awesome-actionscript3/master/AS3_AIR.png" align="right" width="150">](https://www.adobe.com/products/air.html)

# Awesome ActionScript 3 [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> A curated list of awesome libraries and components for ActionScript 3 and Adobe AIR.

[Adobe AIR](https://en.wikipedia.org/wiki/Adobe_AIR) provides a single set of APIs to build cross-platform desktop/mobile applications and games. [ActionScript 3](https://en.wikipedia.org/wiki/ActionScript) is the programming language for AIR. Powerful native functionality such as file system, SQLite, sensors are included by default. To add missing functionality, you can build ANEs (Air Native Extensions) coded in the native language (eg VC++ for Windows, Java for Android, Swift/Objective-C for iOS). To build mobile apps/games with GPU-rendered graphics, use the [Starling](https://gamua.com/starling/) framework and optionally the [Feathers UI](https://feathersui.com/). Adobe AIR is very popular in the mobile gaming space.

Contributions welcome. To add a useful project simply create an [Issue ![GitHub Repo Stars](https://img.shields.io/github/stars/hgupta9/awesome-actionscript3) ![GitHub last commit](https://img.shields.io/github/last-commit/hgupta9/awesome-actionscript3)](https://github.com/hgupta9/awesome-actionscript3/issues).

## Contents

* [Development Tools](#development-tools)
* [Frameworks](#frameworks)
* [User Interface](#user-interface)
* [Multimedia](#multimedia)
* [Database](#database)
* [File Formats](#file-formats)
* [Networking](#networking)
* [Utilities](#utilities)
* [Runtimes](#runtimes)
* [AIR Native Extensions](#air-native-extensions)
	

## Development Tools
*This section includes commercial tools as well as free/open source tools.*

#### Code Editors
* [FlashDevelop](http://flashdevelop.org/) - Premiere free & open-source IDE for AS3 & AIR, with code completion, debugging, and more.
* [Powerflasher FDT](http://fdt.powerflasher.com/) - Commercial IDE built on the Eclipse platform for development of Adobe Flash/AIR content.
* [Adobe Flash Builder](https://www.adobe.com/products/flash-builder.html) - Commercial IDE for building applications on the Flex framework (with advanced debugging tools).
* [Moonshine IDE](http://moonshine-ide.com/) - Moonshine is a free and open source middleweight IDE built with ActionScript 3 for ActionScript 3, Apache Flex®, Apache FlexJS® and Feathers development with Cloud and Desktop support.
* [IntelliJ IDEA](https://www.jetbrains.com/help/idea/building-actionscript-and-flex-applications.html) - Commercial IDE that supports many different languages including AS3.
* [Visual Studio Code](https://as3mxml.com/) - An AS3 & MXML language extension for Visual Studio Code. Runs on Windows, macOS, and Linux.

#### Live Debuggers
* [Adobe Scout](https://www.adobe.com/products/scout.html) - Advanced visual profiling and debugging tool for AIR apps & games (supports Stage3D).
* [De-Monster Debugger ![GitHub Repo Stars](https://img.shields.io/github/stars/MrTact/monsterdebugger) ![GitHub last commit](https://img.shields.io/github/last-commit/MrTact/monsterdebugger)](https://github.com/MrTact/monsterdebugger) - Advanced tool to debug graphics and data from a live AIR application.
* [De-Monster Debugger (Starling) ![GitHub Repo Stars](https://img.shields.io/github/stars/joshtynjala/monsterdebugger-client-starling) ![GitHub last commit](https://img.shields.io/github/last-commit/joshtynjala/monsterdebugger-client-starling)](https://github.com/joshtynjala/monsterdebugger-client-starling) - Fork of De-Monster Debugger with support for Starling Framework.

#### Asset Creators
* [Adobe Animate CC](https://www.adobe.com/products/animate.html) - Premiere vector graphics and animation toolset for vector/spritesheet creation.
* [TILED Map Editor](http://www.mapeditor.org/) - Flexible tile map editor compatible with various AS3 game engines.
* [FlashMovieClipConverter ![GitHub Repo Stars](https://img.shields.io/github/stars/zenrobin/FlashMovieClipConverter) ![GitHub last commit](https://img.shields.io/github/last-commit/zenrobin/FlashMovieClipConverter)](https://github.com/zenrobin/FlashMovieClipConverter) - Converts a Flash MovieClip to a Starling IAnimatable Sprite.

#### SWF Obfuscators
* [secureSWF](http://www.kindi.com/) - Commercial AS3/AIR obfuscator with renaming, asset encryption and automatic code optimization.
* [irrFuscator](http://www.ambiera.com/irrfuscator/) - Commercial AS3 obfuscator for Flash and Flex SWF files.

#### SWF Inspectors
* [SWFWire ![GitHub Repo Stars](https://img.shields.io/github/stars/magicalhobo/SWFWire) ![GitHub last commit](https://img.shields.io/github/last-commit/magicalhobo/SWFWire)](https://github.com/magicalhobo/SWFWire) - Advanced SWF Decompiler, Inspector and Debugger Tools ([website](http://www.swfwire.com/)).
* [Velocity9 ![GitHub Repo Stars](https://img.shields.io/github/stars/velocity9/Inspector) ![GitHub last commit](https://img.shields.io/github/last-commit/velocity9/Inspector)](https://github.com/velocity9/Inspector) - Basic SWF Inspector.

#### SWF Decompilers
* [AS3Sorcerer](http://www.as3sorcerer.com/) - Premiere AS3 decompiler with 99% decompilation accuracy (supports SWF/SWC, Alchemy opcodes).
* [Sothink Decompiler](http://www.sothink.com/product/flashdecompiler/) - Advanced decompiler for AS2/AS3 (supports asset extraction and conversion of SWF to FLA/Flex).

#### ANE Dev Tools
* [FreSharp ![GitHub Repo Stars](https://img.shields.io/github/stars/tuarua/FreSharp) ![GitHub last commit](https://img.shields.io/github/last-commit/tuarua/FreSharp)](https://github.com/tuarua/FreSharp) - Build ANEs using C# with this C# wrapper for FlashRuntimeExtensions .
* [Swift-IOS-ANE ![GitHub Repo Stars](https://img.shields.io/github/stars/tuarua/Swift-IOS-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/tuarua/Swift-IOS-ANE)](https://github.com/tuarua/Swift-IOS-ANE) - ANE starter kit written in Swift 3 for iOS 10 .

## Frameworks
#### MVC Frameworks

* [PureMVC ![GitHub Repo Stars](https://img.shields.io/github/stars/PureMVC/puremvc-as3-standard-framework) ![GitHub last commit](https://img.shields.io/github/last-commit/PureMVC/puremvc-as3-standard-framework)](https://github.com/PureMVC/puremvc-as3-standard-framework) - Industry-standard MVC framework for Flash ([multicore ![GitHub Repo Stars](https://img.shields.io/github/stars/PureMVC/puremvc-as3-multicore-framework) ![GitHub last commit](https://img.shields.io/github/last-commit/PureMVC/puremvc-as3-multicore-framework)](https://github.com/PureMVC/puremvc-as3-multicore-framework)).
* [Robotlegs ![GitHub Repo Stars](https://img.shields.io/github/stars/robotlegs/robotlegs-framework) ![GitHub last commit](https://img.shields.io/github/last-commit/robotlegs/robotlegs-framework)](https://github.com/robotlegs/robotlegs-framework) - Dependency injection, module/view/command management framework for Flash.
* [Hummingbird ![GitHub Repo Stars](https://img.shields.io/github/stars/flashapi/hummingbird) ![GitHub last commit](https://img.shields.io/github/last-commit/flashapi/hummingbird)](https://github.com/flashapi/hummingbird) - Build and deploy robust MVC applications for AS3, Mobile and the Starling Framework.
* [Apollo ![GitHub Repo Stars](https://img.shields.io/github/stars/LaurentZuijdwijk/Apollo) ![GitHub last commit](https://img.shields.io/github/last-commit/LaurentZuijdwijk/Apollo)](https://github.com/LaurentZuijdwijk/Apollo) - Dependency injection and messaging framework, which can be used as the basis for MVC projects.
* [Somacore ![GitHub Repo Stars](https://img.shields.io/github/stars/soundstep/somacore_framework) ![GitHub last commit](https://img.shields.io/github/last-commit/soundstep/somacore_framework)](https://github.com/soundstep/somacore_framework) - Lightweight event-based AS3 MVC framework.
* [Kote ![GitHub Repo Stars](https://img.shields.io/github/stars/whitered/Kote) ![GitHub last commit](https://img.shields.io/github/last-commit/whitered/Kote)](https://github.com/whitered/Kote) - Fast and lightweight MVC framework that brings together the best of PureMVC and as3-signals.
* [StarlingMVC ![GitHub Repo Stars](https://img.shields.io/github/stars/CreativeBottle/starlingMVC) ![GitHub last commit](https://img.shields.io/github/last-commit/CreativeBottle/starlingMVC)](https://github.com/CreativeBottle/starlingMVC) - IOC Framework for Starling based games.

#### UI Frameworks

* [Starling](https://gamua.com/starling/) - High-performance 2D graphics engine built on Stage3D. API identical to Flash API. ([github ![GitHub Repo Stars](https://img.shields.io/github/stars/Gamua/Starling-Framework) ![GitHub last commit](https://img.shields.io/github/last-commit/Gamua/Starling-Framework)](https://github.com/Gamua/Starling-Framework), [help](http://wiki.starling-framework.org/start)).
* [Feathers UI](https://feathersui.com/) - User interface components for Starling Framework ([github ![GitHub Repo Stars](https://img.shields.io/github/stars/BowlerHatLLC/feathers) ![GitHub last commit](https://img.shields.io/github/last-commit/BowlerHatLLC/feathers)](https://github.com/BowlerHatLLC/feathers), [help](https://feathersui.com/help/index.html)).
* [Flow ![GitHub Repo Stars](https://img.shields.io/github/stars/artman/Flow) ![GitHub last commit](https://img.shields.io/github/last-commit/artman/Flow)](https://github.com/artman/Flow) - Layout, effects, data binding and remoting framework to be used instead of Flex.
* [AS3Commons UI ![GitHub Repo Stars](https://img.shields.io/github/stars/AS3Commons/as3commons-ui) ![GitHub last commit](https://img.shields.io/github/last-commit/AS3Commons/as3commons-ui)](https://github.com/AS3Commons/as3commons-ui) - Layouting, focus and keyboard management framework.
* [Swiz ![GitHub Repo Stars](https://img.shields.io/github/stars/swiz/swiz-framework) ![GitHub last commit](https://img.shields.io/github/last-commit/swiz/swiz-framework)](https://github.com/swiz/swiz-framework) - Brutally simple micro-architecture for creating RIAs with AS3 and Adobe Flex.
* [Hiddenwood ![GitHub Repo Stars](https://img.shields.io/github/stars/raweden/Project-Hiddenwood) ![GitHub last commit](https://img.shields.io/github/last-commit/raweden/Project-Hiddenwood)](https://github.com/raweden/Project-Hiddenwood) - User interface library developed for a web app project, written in AS3 and in a MVC pattern.
* [Elastic-Lists ![GitHub Repo Stars](https://img.shields.io/github/stars/MoritzStefaner/Elastic-Lists) ![GitHub last commit](https://img.shields.io/github/last-commit/MoritzStefaner/Elastic-Lists)](https://github.com/MoritzStefaner/Elastic-Lists) - Fluid and powerful interface for facet browsing.
* [Apache Flex®](https://flex.apache.org/) - The Apache Flex® SDK is the evolution of the popular Adobe Flex SDK. The Apache Flex® SDK is an application development framework for easily building Flash-based applications for mobile devices, web browsers, and desktop platforms.
* [Apache Royale®](http://royale.apache.org/) - The Apache Royale® project is developing a next-generation of the Apache Flex® SDK. Royale has the goal of allowing applications developed in MXML and ActionScript to not only run in the Flash/AIR runtimes, but also to run natively in the browser without Flash, on mobile devices as a PhoneGap/Cordova application, and in embedded JS environments such as Chromium Embedded Framework. Royale has the potential to allow your MXML and ActionScript code to run in even more places than Flash currently does.

#### Game Frameworks

* [CitrusEngine](http://citrusengine.com/) - Professional-grade game engine built built on Starling & Away3D.
* [StarlingPunk ![GitHub Repo Stars](https://img.shields.io/github/stars/asaia/StarlingPunk) ![GitHub last commit](https://img.shields.io/github/last-commit/asaia/StarlingPunk)](https://github.com/asaia/StarlingPunk) - Framework built on Starling to add structure and organization to your game projects.
* [FlashPunk ![GitHub Repo Stars](https://img.shields.io/github/stars/useflashpunk/FlashPunk) ![GitHub last commit](https://img.shields.io/github/last-commit/useflashpunk/FlashPunk)](https://github.com/useflashpunk/FlashPunk) - Framework to build 2D games. Provides graphics, events, inputs, animation, etc.
* [Flixel ![GitHub Repo Stars](https://img.shields.io/github/stars/AdamAtomic/flixel) ![GitHub last commit](https://img.shields.io/github/last-commit/AdamAtomic/flixel)](https://github.com/AdamAtomic/flixel) - Useful base classes that you can extend to make your own game objects.
* [Tetragon ![GitHub Repo Stars](https://img.shields.io/github/stars/NothingInteractive/tetragon) ![GitHub last commit](https://img.shields.io/github/last-commit/NothingInteractive/tetragon)](https://github.com/NothingInteractive/tetragon) - Cross-platform framework to build any kind of game. Provides resource management, debugging facilities, multi-locale support, layered extendability, a game-oriented data structure, and more.
* [Pixelizer ![GitHub Repo Stars](https://img.shields.io/github/stars/johanp/Pixelizer) ![GitHub last commit](https://img.shields.io/github/last-commit/johanp/Pixelizer)](https://github.com/johanp/Pixelizer) - Component based game engine to build 2D games. Provides rendering, animation, input, etc.
* [AS3isolib ![GitHub Repo Stars](https://img.shields.io/github/stars/as3isolib/as3isolib.v1) ![GitHub last commit](https://img.shields.io/github/last-commit/as3isolib/as3isolib.v1)](https://github.com/as3isolib/as3isolib.v1) - Isometric Library developed to assist in creating isometrically projected games.
* [IsoHill ![GitHub Repo Stars](https://img.shields.io/github/stars/jadbox/IsoHill-Game-Engine) ![GitHub last commit](https://img.shields.io/github/last-commit/jadbox/IsoHill-Game-Engine)](https://github.com/jadbox/IsoHill-Game-Engine) - GPU-based Isometric engine built on Starling, with TILED map parser, layers, etc ([website](http://www.isohill.com/)).
* [YCanvas ![GitHub Repo Stars](https://img.shields.io/github/stars/jozefchutka/YCanvas) ![GitHub last commit](https://img.shields.io/github/last-commit/jozefchutka/YCanvas)](https://github.com/jozefchutka/YCanvas) - High-performance 2D tile renderer and world map renderer.
* [ND2D ![GitHub Repo Stars](https://img.shields.io/github/stars/lrrrs/nd2d) ![GitHub last commit](https://img.shields.io/github/last-commit/lrrrs/nd2d)](https://github.com/lrrrs/nd2d) - GPU-accelerated 2D game engine using Stage3D ([ND2Dx ![GitHub Repo Stars](https://img.shields.io/github/stars/NoRabbit/ND2Dx) ![GitHub last commit](https://img.shields.io/github/last-commit/NoRabbit/ND2Dx)](https://github.com/NoRabbit/ND2Dx)).
* [Nexus ![GitHub Repo Stars](https://img.shields.io/github/stars/tversteeg/Nexus) ![GitHub last commit](https://img.shields.io/github/last-commit/tversteeg/Nexus)](https://github.com/tversteeg/Nexus) - GPU-accelerated 2D game engine using Stage3D.

#### 3D Frameworks

* [AwayBuilder](http://awaytools.com/awaybuilder/) - Visual workflow tool to import, optimise and bake 3D assets from a variety of sources.
* [Away3D ![GitHub Repo Stars](https://img.shields.io/github/stars/away3d/away3d-core-fp11) ![GitHub last commit](https://img.shields.io/github/last-commit/away3d/away3d-core-fp11)](https://github.com/away3d/away3d-core-fp11) - Open-source GPU-accelerated 3D engine for Flash Player 11+ ([examples ![GitHub Repo Stars](https://img.shields.io/github/stars/away3d/away3d-examples-fp11) ![GitHub last commit](https://img.shields.io/github/last-commit/away3d/away3d-examples-fp11)](https://github.com/away3d/away3d-examples-fp11)).
* [Away3D OpenFL ![GitHub Repo Stars](https://img.shields.io/github/stars/away3d/away3d-core-openfl) ![GitHub last commit](https://img.shields.io/github/last-commit/away3d/away3d-core-openfl)](https://github.com/away3d/away3d-core-openfl) - Away3D for Neko, HTML5 and native CPP. ([examples ![GitHub Repo Stars](https://img.shields.io/github/stars/away3d/away3d-examples-openfl) ![GitHub last commit](https://img.shields.io/github/last-commit/away3d/away3d-examples-openfl)](https://github.com/away3d/away3d-examples-openfl)).
* [AwayPhysics FP11 ![GitHub Repo Stars](https://img.shields.io/github/stars/away3d/awayphysics-core-fp11) ![GitHub last commit](https://img.shields.io/github/last-commit/away3d/awayphysics-core-fp11)](https://github.com/away3d/awayphysics-core-fp11) - Away Physics - 3D physics library for the Away3D FP 11 ([examples ![GitHub Repo Stars](https://img.shields.io/github/stars/away3d/awayphysics-examples-fp11) ![GitHub last commit](https://img.shields.io/github/last-commit/away3d/awayphysics-examples-fp11)](https://github.com/away3d/awayphysics-examples-fp11)).
* [Alternativa3D ![GitHub Repo Stars](https://img.shields.io/github/stars/AlternativaPlatform/Alternativa3D) ![GitHub last commit](https://img.shields.io/github/last-commit/AlternativaPlatform/Alternativa3D)](https://github.com/AlternativaPlatform/Alternativa3D) - Alternativa3D GPU accelerated 3D engine ([examples ![GitHub Repo Stars](https://img.shields.io/github/stars/AlternativaPlatform/Alternativa3DExamples) ![GitHub last commit](https://img.shields.io/github/last-commit/AlternativaPlatform/Alternativa3DExamples)](https://github.com/AlternativaPlatform/Alternativa3DExamples)).
* [Flare3D](http://flare3d.com/) - Commercial 3D platform with high-performance engine and Level-editor IDE.
* [Zen3D ![GitHub Repo Stars](https://img.shields.io/github/stars/hgupta9/Zen3D) ![GitHub last commit](https://img.shields.io/github/last-commit/hgupta9/Zen3D)](https://github.com/hgupta9/Zen3D) - High-performance 3D engine for Adobe Flash & AIR (GPU based).

#### Animation

* [GreenSock GSAP](https://greensock.com/gsap-as) - The industry-standard animation library for Flash (TweenLite, TweenMax) ([github ![GitHub Repo Stars](https://img.shields.io/github/stars/greensock/GreenSock-AS3) ![GitHub last commit](https://img.shields.io/github/last-commit/greensock/GreenSock-AS3)](https://github.com/greensock/GreenSock-AS3)).
* [GTween](http://gskinner.com/libraries/gtween/) - Small but robust library for programmatic tweening, animation, and transitions.
* [DragonBones](http://dragonbones.github.io/) - High-speed skeletal animation using Starling, and tools to export animations from Flash Pro.
* [FlashEff2](http://www.flasheff.com/) - Premiere programmatic animation library with 100+ transitions and text effects.
* [FlashEffNano](http://www.flasheffnano.com/) - FlashEff transition library optimized for mobile devices, with 20+ transitions in 750 styles.
* [StarlingGAFPlayer ![GitHub Repo Stars](https://img.shields.io/github/stars/zenrobin/StarlingGAFPlayer) ![GitHub last commit](https://img.shields.io/github/last-commit/zenrobin/StarlingGAFPlayer)](https://github.com/zenrobin/StarlingGAFPlayer) - Play back GAF animations using Starling (animations authored in Flash Pro).

#### Signals

* [AS3-signals ![GitHub Repo Stars](https://img.shields.io/github/stars/robertpenner/as3-signals) ![GitHub last commit](https://img.shields.io/github/last-commit/robertpenner/as3-signals)](https://github.com/robertpenner/as3-signals) - New approach for AS3 events inspired by C# events and signals/slots in Qt.
* [react-as3 ![GitHub Repo Stars](https://img.shields.io/github/stars/tconkling/react-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/tconkling/react-as3)](https://github.com/tconkling/react-as3) - Signals/slots and functional reactive programming library.
* [Signaller ![GitHub Repo Stars](https://img.shields.io/github/stars/whitered/Signaller) ![GitHub last commit](https://img.shields.io/github/last-commit/whitered/Signaller)](https://github.com/whitered/Signaller) - Signals implementation with restricted rights for dispatching.
* [Fa-as3 ![GitHub Repo Stars](https://img.shields.io/github/stars/fabrikagency/fa-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/fabrikagency/fa-as3)](https://github.com/fabrikagency/fa-as3) - Write less, do more framework, modeled like jQuery.

#### Functional

* [AS3FP ![GitHub Repo Stars](https://img.shields.io/github/stars/jadbox/AS3FP) ![GitHub last commit](https://img.shields.io/github/last-commit/jadbox/AS3FP)](https://github.com/jadbox/AS3FP) - Collection of functional idioms based on Haskell and Coffeescript.
* [Raix ![GitHub Repo Stars](https://img.shields.io/github/stars/richardszalay/raix) ![GitHub last commit](https://img.shields.io/github/last-commit/richardszalay/raix)](https://github.com/richardszalay/raix) - Reactive And Interactive eXtensions simplifies working with interactive data (arrays) or reactive data (events).
* [Fxp-as3 ![GitHub Repo Stars](https://img.shields.io/github/stars/j3k0/fxp-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/j3k0/fxp-as3)](https://github.com/j3k0/fxp-as3) - Functional library inspired by the "mostly adequate guide".

#### Unit Testing

* [AS3unit ![GitHub Repo Stars](https://img.shields.io/github/stars/Hoten/as3unit) ![GitHub last commit](https://img.shields.io/github/last-commit/Hoten/as3unit)](https://github.com/Hoten/as3unit) - Unit testing framework for ActionScript 3.
* [hamcrest-as3 ![GitHub Repo Stars](https://img.shields.io/github/stars/drewbourne/hamcrest-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/drewbourne/hamcrest-as3)](https://github.com/drewbourne/hamcrest-as3) - Matcher objects allowing 'match' rules to be defined declaratively.
* [expect.as ![GitHub Repo Stars](https://img.shields.io/github/stars/krzysztof-o/expect.as) ![GitHub last commit](https://img.shields.io/github/last-commit/krzysztof-o/expect.as)](https://github.com/krzysztof-o/expect.as) - BDD-style assertion library for ActionScript 3.
* [AS3spec ![GitHub Repo Stars](https://img.shields.io/github/stars/f1337/as3spec) ![GitHub last commit](https://img.shields.io/github/last-commit/f1337/as3spec)](https://github.com/f1337/as3spec) - Tiny BDD framework for AS3, inspired by Bacon and RSpec.
* [Flexunit ![GitHub Repo Stars](https://img.shields.io/github/stars/flexunit/flexunit) ![GitHub last commit](https://img.shields.io/github/last-commit/flexunit/flexunit)](https://github.com/flexunit/flexunit) - FlexUnit project for Actionscript 3 and Flex projects.
* [ASunit ![GitHub Repo Stars](https://img.shields.io/github/stars/patternpark/asunit) ![GitHub last commit](https://img.shields.io/github/last-commit/patternpark/asunit)](https://github.com/patternpark/asunit) - The only unit test framework that supports Flash Players 6, 7, 8, 9 and 10.
* [RobotEyes ![GitHub Repo Stars](https://img.shields.io/github/stars/Stray/RobotEyes) ![GitHub last commit](https://img.shields.io/github/last-commit/Stray/RobotEyes)](https://github.com/Stray/RobotEyes) - End-to-end testing for TDD. Hybrid of WindowLicker and Drew Bourne's Mockolate.

## User Interface
#### UI Components

* [MinimalComps ![GitHub Repo Stars](https://img.shields.io/github/stars/minimalcomps/minimalcomps) ![GitHub last commit](https://img.shields.io/github/last-commit/minimalcomps/minimalcomps)](https://github.com/minimalcomps/minimalcomps) - Minimal ActionScript 3.0 UI Components for Flash.
* [MadComponents ![GitHub Repo Stars](https://img.shields.io/github/stars/danfreeman/MadComponents) ![GitHub last commit](https://img.shields.io/github/last-commit/danfreeman/MadComponents)](https://github.com/danfreeman/MadComponents) - Popular Mobile UI Framework for AS3 / AIR.
* [AsWing ![GitHub Repo Stars](https://img.shields.io/github/stars/dreamsxin/AsWing) ![GitHub last commit](https://img.shields.io/github/last-commit/dreamsxin/AsWing)](https://github.com/dreamsxin/AsWing) - Open Source Flash ActionScript GUI framework.
* [GPUI ![GitHub Repo Stars](https://img.shields.io/github/stars/inspirit/GPUI) ![GitHub last commit](https://img.shields.io/github/last-commit/inspirit/GPUI)](https://github.com/inspirit/GPUI) - Tiny GUI Library based on Stage3D (GPU).
* [Falcon ![GitHub Repo Stars](https://img.shields.io/github/stars/HendrixString/Falcon) ![GitHub last commit](https://img.shields.io/github/last-commit/HendrixString/Falcon)](https://github.com/HendrixString/Falcon) - responsive/flexible mobile ui controls for Feathers.
* [Flex-maps ![GitHub Repo Stars](https://img.shields.io/github/stars/igorcosta/flex-maps) ![GitHub last commit](https://img.shields.io/github/last-commit/igorcosta/flex-maps)](https://github.com/igorcosta/flex-maps) - Definitive solution for maps in Apache Flex.
* [FlexBook ![GitHub Repo Stars](https://img.shields.io/github/stars/blvz/FlexBook) ![GitHub last commit](https://img.shields.io/github/last-commit/blvz/FlexBook)](https://github.com/blvz/FlexBook) - Awesome Page Flip component for Flex.
* [Flex-Android-Material-Skins ![GitHub Repo Stars](https://img.shields.io/github/stars/quick6black/flex-Android-Material-Skins) ![GitHub last commit](https://img.shields.io/github/last-commit/quick6black/flex-Android-Material-Skins)](https://github.com/quick6black/flex-Android-Material-Skins) - Android Material Design skins for Flex Mobile components.

#### Starling Components

* [TabbedApplication ![GitHub Repo Stars](https://img.shields.io/github/stars/pol2095/Feathers-Extension-Tabbed-Application) ![GitHub last commit](https://img.shields.io/github/last-commit/pol2095/Feathers-Extension-Tabbed-Application)](https://github.com/pol2095/Feathers-Extension-Tabbed-Application) - View-based navigation model with swipe to navigate tabs.
* [DataGrid ![GitHub Repo Stars](https://img.shields.io/github/stars/pol2095/Feathers-Extension-DataGrid) ![GitHub last commit](https://img.shields.io/github/last-commit/pol2095/Feathers-Extension-DataGrid)](https://github.com/pol2095/Feathers-Extension-DataGrid) - Displays a datagrid with column headings and smooth scrolling.
* [DataTree ![GitHub Repo Stars](https://img.shields.io/github/stars/pol2095/Feathers-Extension-Tree) ![GitHub last commit](https://img.shields.io/github/last-commit/pol2095/Feathers-Extension-Tree)](https://github.com/pol2095/Feathers-Extension-Tree) - Displays hierarchical data arranged as an expandable tree.
* [Canvas ![GitHub Repo Stars](https://img.shields.io/github/stars/pol2095/Feathers-Extension-Canvas) ![GitHub last commit](https://img.shields.io/github/last-commit/pol2095/Feathers-Extension-Canvas)](https://github.com/pol2095/Feathers-Extension-Canvas) - Supports basic vector drawing functionality.
* [CircleProgress ![GitHub Repo Stars](https://img.shields.io/github/stars/pol2095/Feathers-Extension-CircleProgress) ![GitHub last commit](https://img.shields.io/github/last-commit/pol2095/Feathers-Extension-CircleProgress)](https://github.com/pol2095/Feathers-Extension-CircleProgress) - Displays progress using a radial progressbar.
* [ZoomableControl ![GitHub Repo Stars](https://img.shields.io/github/stars/pol2095/Feathers-Extension-ZoomableControl) ![GitHub last commit](https://img.shields.io/github/last-commit/pol2095/Feathers-Extension-ZoomableControl)](https://github.com/pol2095/Feathers-Extension-ZoomableControl) - Allows a pinch to zoom using the multitouch inputs.
* [Toaster ![GitHub Repo Stars](https://img.shields.io/github/stars/pol2095/Feathers-Extension-Toaster) ![GitHub last commit](https://img.shields.io/github/last-commit/pol2095/Feathers-Extension-Toaster)](https://github.com/pol2095/Feathers-Extension-Toaster) - Simple feedback about an operation in a small popup. .
* [Google Maps ![GitHub Repo Stars](https://img.shields.io/github/stars/ZwickTheGreat/feathers-maps) ![GitHub last commit](https://img.shields.io/github/last-commit/ZwickTheGreat/feathers-maps)](https://github.com/ZwickTheGreat/feathers-maps) - Google Maps for Starling, optimized for mobile devices.

#### Layout

* [Adobe TLF ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/flex-tlf) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/flex-tlf)](https://github.com/apache/flex-tlf) - Adobe/Apache Flex Text Layout Framework (TLF).
* [TinyTLF ![GitHub Repo Stars](https://img.shields.io/github/stars/joelhooks/tinytlf) ![GitHub last commit](https://img.shields.io/github/last-commit/joelhooks/tinytlf)](https://github.com/joelhooks/tinytlf) - Versatile text layout framework built on top of the Flash Text Engine for Flash/Flex.
* [TransformManager](https://greensock.com/TransformManager) - By Greensock. Interactive scaling/rotating/moving of DisplayObjects.
* [TransformTool ![GitHub Repo Stars](https://img.shields.io/github/stars/senocular/TransformTool) ![GitHub last commit](https://img.shields.io/github/last-commit/senocular/TransformTool)](https://github.com/senocular/TransformTool) - Free Transform Tool (AS, JS) for manipulating objects in 2D space.
* [Argilla-Mosaic ![GitHub Repo Stars](https://img.shields.io/github/stars/folletto/Argilla-Mosaic) ![GitHub last commit](https://img.shields.io/github/last-commit/folletto/Argilla-Mosaic)](https://github.com/folletto/Argilla-Mosaic) - Dynamic layout library.
* [xrope ![GitHub Repo Stars](https://img.shields.io/github/stars/evan-liu/xrope) ![GitHub last commit](https://img.shields.io/github/last-commit/evan-liu/xrope)](https://github.com/evan-liu/xrope) - Simple layout library for native AS3 display objects.
* [miglayout-as ![GitHub Repo Stars](https://img.shields.io/github/stars/develar/miglayout-as) ![GitHub last commit](https://img.shields.io/github/last-commit/develar/miglayout-as)](https://github.com/develar/miglayout-as) - Port of MigLayout, a superbly versatile Flash/Flex/FlashCocoa (SWT/Swing/JavaFX) layout manager.

#### Multi Touch

* [TUIO Client ![GitHub Repo Stars](https://img.shields.io/github/stars/lagerkoller/tuio-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/lagerkoller/tuio-as3)](https://github.com/lagerkoller/tuio-as3) - Common framework for multi-touch hardware, supporting TUIO/FLC and TUIO/TCP ([web](http://www.tuio.org/?flash)).
* [Gestouch ![GitHub Repo Stars](https://img.shields.io/github/stars/fljot/Gestouch) ![GitHub last commit](https://img.shields.io/github/last-commit/fljot/Gestouch)](https://github.com/fljot/Gestouch) - Multitouch gesture recognition library for building better Natural User Interfaces.
* [Gestures.IO ![GitHub Repo Stars](https://img.shields.io/github/stars/GesturesIO/gesturesio-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/GesturesIO/gesturesio-as3)](https://github.com/GesturesIO/gesturesio-as3) - Simplifies the way you create gesture-based Natural Interactions.
* [TouchScript ![GitHub Repo Stars](https://img.shields.io/github/stars/TouchScript/TouchScript.as3) ![GitHub last commit](https://img.shields.io/github/last-commit/TouchScript/TouchScript.as3)](https://github.com/TouchScript/TouchScript.as3) - Multitouch framework that makes handling complex gesture interactions on large touch surfaces easier.

#### Game Controllers

* [AS3dpad ![GitHub Repo Stars](https://img.shields.io/github/stars/duckleg/as3dpad) ![GitHub last commit](https://img.shields.io/github/last-commit/duckleg/as3dpad)](https://github.com/duckleg/as3dpad) - A virtual touchscreen gamepad designed for Adobe AIR Mobile (Android/iOS).
* [Gamepad ![GitHub Repo Stars](https://img.shields.io/github/stars/iainlobb/Gamepad) ![GitHub last commit](https://img.shields.io/github/last-commit/iainlobb/Gamepad)](https://github.com/iainlobb/Gamepad) - Simulates an analog joystick input using the keyboard.
* [Advanced_Joystick ![GitHub Repo Stars](https://img.shields.io/github/stars/justjoeyuk/Advanced_Joystick) ![GitHub last commit](https://img.shields.io/github/last-commit/justjoeyuk/Advanced_Joystick)](https://github.com/justjoeyuk/Advanced_Joystick) - Joystick for the Starling Framework, designed for Adobe AIR Mobile.
* [AS3-Controller-Input ![GitHub Repo Stars](https://img.shields.io/github/stars/arkeus/as3-controller-input) ![GitHub last commit](https://img.shields.io/github/last-commit/arkeus/as3-controller-input)](https://github.com/arkeus/as3-controller-input) - Interact with Ouya and Xbox360 game controllers from Adobe AIR.

## Multimedia

#### Augmented Reality

* [FLARToolKit ![GitHub Repo Stars](https://img.shields.io/github/stars/Saqoosha/FLARToolKit) ![GitHub last commit](https://img.shields.io/github/last-commit/Saqoosha/FLARToolKit)](https://github.com/Saqoosha/FLARToolKit) - AS3 port of the industry standard ARToolkit library, for Flash Player 11. ([website](http://www.libspark.org/wiki/saqoosha/FLARToolKit/en)).
* [FLAREmulator ![GitHub Repo Stars](https://img.shields.io/github/stars/theflashbum/FLAREmulator) ![GitHub last commit](https://img.shields.io/github/last-commit/theflashbum/FLAREmulator)](https://github.com/theflashbum/FLAREmulator) - Test AR demos to see what works and what doesn't with or without a webcam.
* [FLARManager](http://words.transmote.com/wp/flarmanager/) - Lightweight framework for building augmented reality apps, using FLARToolkit/flare.tracker/flare.NFT.
* [NyARToolkitAS3 ![GitHub Repo Stars](https://img.shields.io/github/stars/nyatla/NyARToolkitAS3) ![GitHub last commit](https://img.shields.io/github/last-commit/nyatla/NyARToolkitAS3)](https://github.com/nyatla/NyARToolkitAS3) - NyARToolkit AS3 edition. Marker based Augmented reality library.
* [EZFLAR ![GitHub Repo Stars](https://img.shields.io/github/stars/tcha-tcho/EZFLAR) ![GitHub last commit](https://img.shields.io/github/last-commit/tcha-tcho/EZFLAR)](https://github.com/tcha-tcho/EZFLAR) - A little wrapper to ease the way AR works.
* [IN2AR ![GitHub Repo Stars](https://img.shields.io/github/stars/inspirit/IN2ARSDKExamples) ![GitHub last commit](https://img.shields.io/github/last-commit/inspirit/IN2ARSDKExamples)](https://github.com/inspirit/IN2ARSDKExamples) - SDK for IN2AR cross-platform Augmented Reality Engine.

#### Data Visualization

* [Axiis ![GitHub Repo Stars](https://img.shields.io/github/stars/hgupta9/AxiisCharts) ![GitHub last commit](https://img.shields.io/github/last-commit/hgupta9/AxiisCharts)](https://github.com/hgupta9/AxiisCharts) - Data visualization framework with line, bar, wedge, column, cluster, area, smith and treemap charts.
* [Open Flash Charts](https://sourceforge.net/projects/openflashchart/) - Line charts, Area charts, Bar charts, Pie charts, Scatter charts.
* [Flare ![GitHub Repo Stars](https://img.shields.io/github/stars/prefuse/Flare) ![GitHub last commit](https://img.shields.io/github/last-commit/prefuse/Flare)](https://github.com/prefuse/Flare) - charts and graphs, supports data management, visual encoding, animation, and interaction techniques.
* [clearmaps ![GitHub Repo Stars](https://img.shields.io/github/stars/sunlightlabs/clearmaps) ![GitHub last commit](https://img.shields.io/github/last-commit/sunlightlabs/clearmaps)](https://github.com/sunlightlabs/clearmaps) - Mapping framework for data visualization.
* [redada ![GitHub Repo Stars](https://img.shields.io/github/stars/geraldo/redada) ![GitHub last commit](https://img.shields.io/github/last-commit/geraldo/redada)](https://github.com/geraldo/redada) - Interactive visualization of weighted graphs using GraphML files.
* [Flextreemap ![GitHub Repo Stars](https://img.shields.io/github/stars/joshtynjala/flextreemap) ![GitHub last commit](https://img.shields.io/github/last-commit/joshtynjala/flextreemap)](https://github.com/joshtynjala/flextreemap) - TreeMap data visualization component for Adobe Flex.
* [GraphVisualizer ![GitHub Repo Stars](https://img.shields.io/github/stars/armisael/GraphVisualizer) ![GitHub last commit](https://img.shields.io/github/last-commit/armisael/GraphVisualizer)](https://github.com/armisael/GraphVisualizer) - A Flex 3 + ActionScript 3 web software to draw dynamic graphcs.
* [Weave ![GitHub Repo Stars](https://img.shields.io/github/stars/WeaveTeam/Weave) ![GitHub last commit](https://img.shields.io/github/last-commit/WeaveTeam/Weave)](https://github.com/WeaveTeam/Weave) - Web-based Analysis and Visualization Environment.
* [Social-grid ![GitHub Repo Stars](https://img.shields.io/github/stars/Instrument/social-grid) ![GitHub last commit](https://img.shields.io/github/last-commit/Instrument/social-grid)](https://github.com/Instrument/social-grid) - Abstract Grid Visualization for Social Media.

#### Camera

* [CameraDetection ![GitHub Repo Stars](https://img.shields.io/github/stars/cataclysmicrewind/CameraDetection) ![GitHub last commit](https://img.shields.io/github/last-commit/cataclysmicrewind/CameraDetection)](https://github.com/cataclysmicrewind/CameraDetection) - Camera detection.
* [Fluocam ![GitHub Repo Stars](https://img.shields.io/github/stars/Fluocode/Fluocam) ![GitHub last commit](https://img.shields.io/github/last-commit/Fluocode/Fluocam)](https://github.com/Fluocode/Fluocam) - Virtual camera for Starling applications.
* [WebcamRecorder ![GitHub Repo Stars](https://img.shields.io/github/stars/Stupeflix/WebcamRecorder) ![GitHub last commit](https://img.shields.io/github/last-commit/Stupeflix/WebcamRecorder)](https://github.com/Stupeflix/WebcamRecorder) - Chromeless video/audio/still image recording from webcams.
* [FlashyWrappers ![GitHub Repo Stars](https://img.shields.io/github/stars/rainbowcreatures/FlashyWrappers) ![GitHub last commit](https://img.shields.io/github/last-commit/rainbowcreatures/FlashyWrappers)](https://github.com/rainbowcreatures/FlashyWrappers) - Recording video from AIR apps on Windows/Android/iOS/OSX.

#### Image

* [Scale9Image ![GitHub Repo Stars](https://img.shields.io/github/stars/Tibus/Scale9Image) ![GitHub last commit](https://img.shields.io/github/last-commit/Tibus/Scale9Image)](https://github.com/Tibus/Scale9Image) - Optimized scale9Grid image for starling.
* [ASImageLib ![GitHub Repo Stars](https://img.shields.io/github/stars/terrynoya/ASImageLib) ![GitHub last commit](https://img.shields.io/github/last-commit/terrynoya/ASImageLib)](https://github.com/terrynoya/ASImageLib) - BMP/PNG decoder for actionscript.
* [Async-Image-Encoders ![GitHub Repo Stars](https://img.shields.io/github/stars/LeeBurrows/Async-Image-Encoders) ![GitHub last commit](https://img.shields.io/github/last-commit/LeeBurrows/Async-Image-Encoders)](https://github.com/LeeBurrows/Async-Image-Encoders) - Asynchronously encode BitmapData objects into image file format.
* [Flip-Planes-AS3 ![GitHub Repo Stars](https://img.shields.io/github/stars/jamesflorentino/Flip-Planes-AS3) ![GitHub last commit](https://img.shields.io/github/last-commit/jamesflorentino/Flip-Planes-AS3)](https://github.com/jamesflorentino/Flip-Planes-AS3) - Photo slideshow effects.
* [AS3-transitions-lib ![GitHub Repo Stars](https://img.shields.io/github/stars/foo123/as3-transitions-lib) ![GitHub last commit](https://img.shields.io/github/last-commit/foo123/as3-transitions-lib)](https://github.com/foo123/as3-transitions-lib) - Image Transitions Library.
* [Inspirit Image ![GitHub Repo Stars](https://img.shields.io/github/stars/hgupta9/InspiritImage) ![GitHub last commit](https://img.shields.io/github/last-commit/hgupta9/InspiritImage)](https://github.com/hgupta9/InspiritImage) - FFT, SURF, edge detection, fluid solver, etc.
* [Inspirit GPUImage ![GitHub Repo Stars](https://img.shields.io/github/stars/inspirit/GPUImage) ![GitHub last commit](https://img.shields.io/github/last-commit/inspirit/GPUImage)](https://github.com/inspirit/GPUImage) - Framework for GPU-based image processing.
* [AS3potrace ![GitHub Repo Stars](https://img.shields.io/github/stars/PowerflasherBR/as3potrace) ![GitHub last commit](https://img.shields.io/github/last-commit/PowerflasherBR/as3potrace)](https://github.com/PowerflasherBR/as3potrace) - POTrace implementation, to trace bitmap images to vector.
* [ATF-Encoder ![GitHub Repo Stars](https://img.shields.io/github/stars/plepers/ATF-Encoder) ![GitHub last commit](https://img.shields.io/github/last-commit/plepers/ATF-Encoder)](https://github.com/plepers/ATF-Encoder) - Encode/decode ATF (Adobe Texture Format) files in pure AS3.
* [AS3-klt ![GitHub Repo Stars](https://img.shields.io/github/stars/motemen/as3-klt) ![GitHub last commit](https://img.shields.io/github/last-commit/motemen/as3-klt)](https://github.com/motemen/as3-klt) - Kanade-Lucas-Tomasi feature tracker implementation.
* [BlurHash ![GitHub Repo Stars](https://img.shields.io/github/stars/roipeker/as3-blurhash) ![GitHub last commit](https://img.shields.io/github/last-commit/roipeker/as3-blurhash)](https://github.com/roipeker/as3-blurhash) - A BlurHash encoder/decoder implementation in ActionScript 3.0..

#### Font

* [Firetype ![GitHub Repo Stars](https://img.shields.io/github/stars/MaxDidIt/firetype) ![GitHub last commit](https://img.shields.io/github/last-commit/MaxDidIt/firetype)](https://github.com/MaxDidIt/firetype) - Parse OpenType fonts and render them using Stage3D.
* [BMFontRenderer ![GitHub Repo Stars](https://img.shields.io/github/stars/bengarney/BMFontRenderer) ![GitHub last commit](https://img.shields.io/github/last-commit/bengarney/BMFontRenderer)](https://github.com/bengarney/BMFontRenderer) - AS3 renderer for bitmap font data in the BMFont format.
* [HanFont ![GitHub Repo Stars](https://img.shields.io/github/stars/kyoji2/HanFont) ![GitHub last commit](https://img.shields.io/github/last-commit/kyoji2/HanFont)](https://github.com/kyoji2/HanFont) - AIR app for Chinese Font Embeding in ActionScript.
* [Ficon.as ![GitHub Repo Stars](https://img.shields.io/github/stars/dv/Ficon.as) ![GitHub last commit](https://img.shields.io/github/last-commit/dv/Ficon.as)](https://github.com/dv/Ficon.as) - Library to easily include icon fonts.

#### Particle

* [Flint ![GitHub Repo Stars](https://img.shields.io/github/stars/richardlord/Flint) ![GitHub last commit](https://img.shields.io/github/last-commit/richardlord/Flint)](https://github.com/richardlord/Flint) - Particle Engine for Flash and Flex.
* [Desuade Partigen](http://desuade.com/partigen) - Desuade Partigen particle generation system ([github ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewfitz/desuade) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewfitz/desuade)](https://github.com/andrewfitz/desuade)).
* [Angulex ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmindolha/ParticleDesigner) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmindolha/ParticleDesigner)](https://github.com/cosmindolha/ParticleDesigner) - Particle Designer for the Starling framework (ActionScript 3).
* [SAP ![GitHub Repo Stars](https://img.shields.io/github/stars/gonchar/SAP) ![GitHub last commit](https://img.shields.io/github/last-commit/gonchar/SAP)](https://github.com/gonchar/SAP) - Particle System for Starling.
* [Starling-Particles ![GitHub Repo Stars](https://img.shields.io/github/stars/Gamua/Starling-Extension-Particle-System) ![GitHub last commit](https://img.shields.io/github/last-commit/Gamua/Starling-Extension-Particle-System)](https://github.com/Gamua/Starling-Extension-Particle-System) - Particle system for the Starling framework, compatible with the "Particle Designer" from 71squared.com.
* [MotionParticleSprite ![GitHub Repo Stars](https://img.shields.io/github/stars/bjeld/motionparticlesprite) ![GitHub last commit](https://img.shields.io/github/last-commit/bjeld/motionparticlesprite)](https://github.com/bjeld/motionparticlesprite) - Design motion paths in Flash Pro and use it to guide Starling particles.

#### Panorama Viewer

* [Pantaloons ![GitHub Repo Stars](https://img.shields.io/github/stars/EyeSee360/Pantaloons) ![GitHub last commit](https://img.shields.io/github/last-commit/EyeSee360/Pantaloons)](https://github.com/EyeSee360/Pantaloons) - Panoramic viewing in Flash Player.
* [SaladoPlayer ![GitHub Repo Stars](https://img.shields.io/github/stars/mstandio/SaladoPlayer) ![GitHub last commit](https://img.shields.io/github/last-commit/mstandio/SaladoPlayer)](https://github.com/mstandio/SaladoPlayer) - Panorama viewer.
* [PanoramicViewer ![GitHub Repo Stars](https://img.shields.io/github/stars/BrianMehrman/PanoramicViewer) ![GitHub last commit](https://img.shields.io/github/last-commit/BrianMehrman/PanoramicViewer)](https://github.com/BrianMehrman/PanoramicViewer) - 3D Panoramic Viewer.
* [Sphere_panorama ![GitHub Repo Stars](https://img.shields.io/github/stars/suzumura-ss/flash_sphere_panorama) ![GitHub last commit](https://img.shields.io/github/last-commit/suzumura-ss/flash_sphere_panorama)](https://github.com/suzumura-ss/flash_sphere_panorama) - Panorama player with equirectangular texture written in AS3 (Alternativa3D).
* [CuTy ![GitHub Repo Stars](https://img.shields.io/github/stars/fieldOfView/CuTy) ![GitHub last commit](https://img.shields.io/github/last-commit/fieldOfView/CuTy)](https://github.com/fieldOfView/CuTy) - QTVR Panorama viewer based on Flash 10.

#### QR Code

* [Zxing AS3 ![GitHub Repo Stars](https://img.shields.io/github/stars/zxing/zxing) ![GitHub last commit](https://img.shields.io/github/last-commit/zxing/zxing)](https://github.com/zxing/zxing/tree/c1df162b95e07928afbd4830798cc1408af1ac67/actionscript) - QR code detection and generation ([docs](https://zxing.github.io/zxing/)).
* [AS3-qrcode-encoder ![GitHub Repo Stars](https://img.shields.io/github/stars/jbpin/as3-qrcode-encoder) ![GitHub last commit](https://img.shields.io/github/last-commit/jbpin/as3-qrcode-encoder)](https://github.com/jbpin/as3-qrcode-encoder) - QR code encoder in as3.
* [qrcode-as ![GitHub Repo Stars](https://img.shields.io/github/stars/yanbe/qrcode-as) ![GitHub last commit](https://img.shields.io/github/last-commit/yanbe/qrcode-as)](https://github.com/yanbe/qrcode-as) - QR Code reader which supports webcam on Windows, Mac and Linux.

#### Sound

* [SoundAS ![GitHub Repo Stars](https://img.shields.io/github/stars/treefortress/SoundAS) ![GitHub last commit](https://img.shields.io/github/last-commit/treefortress/SoundAS)](https://github.com/treefortress/SoundAS) - Modern & lightweight sound manager for AS3.
* [Standingwave3 ![GitHub Repo Stars](https://img.shields.io/github/stars/maxl0rd/standingwave3) ![GitHub last commit](https://img.shields.io/github/last-commit/maxl0rd/standingwave3)](https://github.com/maxl0rd/standingwave3) - Dynamic audio library.
* [Standingwave3-addons ![GitHub Repo Stars](https://img.shields.io/github/stars/charlesclements/standingwave3-addons) ![GitHub last commit](https://img.shields.io/github/last-commit/charlesclements/standingwave3-addons)](https://github.com/charlesclements/standingwave3-addons) - Addons for SW3.
* [Soundtouch-as3 ![GitHub Repo Stars](https://img.shields.io/github/stars/also/soundtouch-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/also/soundtouch-as3)](https://github.com/also/soundtouch-as3) - AS3 Port of the SoundTouch Sound Processing Library.
* [SeiON ![GitHub Repo Stars](https://img.shields.io/github/stars/cardin/SeiON) ![GitHub last commit](https://img.shields.io/github/last-commit/cardin/SeiON)](https://github.com/cardin/SeiON) - Sound Management Library.
* [AS3-Sound-Manager ![GitHub Repo Stars](https://img.shields.io/github/stars/GrupoW/as3-Sound-Manager) ![GitHub last commit](https://img.shields.io/github/last-commit/GrupoW/as3-Sound-Manager)](https://github.com/GrupoW/as3-Sound-Manager)- Upgraded version of the Sound Manager Class from Matt Przybylski.
* [AS3sfxr ![GitHub Repo Stars](https://img.shields.io/github/stars/SFBTom/as3sfxr) ![GitHub last commit](https://img.shields.io/github/last-commit/SFBTom/as3sfxr)](https://github.com/SFBTom/as3sfxr) - Port of sfxr from C++ to AS3, using the new sound and file capabilities of Flash Player 10.
* [AS3-audio ![GitHub Repo Stars](https://img.shields.io/github/stars/singuerinc/as3-audio) ![GitHub last commit](https://img.shields.io/github/last-commit/singuerinc/as3-audio)](https://github.com/singuerinc/as3-audio) - Audio Management in Actionscript.
* [SiON ![GitHub Repo Stars](https://img.shields.io/github/stars/keim/SiON) ![GitHub last commit](https://img.shields.io/github/last-commit/keim/SiON)](https://github.com/keim/SiON) - Flash Software Synthesizer.
* [FlashWavRecorder ![GitHub Repo Stars](https://img.shields.io/github/stars/michalstocki/FlashWavRecorder) ![GitHub last commit](https://img.shields.io/github/last-commit/michalstocki/FlashWavRecorder)](https://github.com/michalstocki/FlashWavRecorder) - Recording audio and saving as a WAV.
* [Local-recorder ![GitHub Repo Stars](https://img.shields.io/github/stars/pauln/local-audio-recorder) ![GitHub last commit](https://img.shields.io/github/last-commit/pauln/local-audio-recorder)](https://github.com/pauln/local-audio-recorder) - Local audio recorder (no streaming server required).  Currently requires Flash Player 10.1 or above.
* [Jukebox ![GitHub Repo Stars](https://img.shields.io/github/stars/AlwynW/Jukebox) ![GitHub last commit](https://img.shields.io/github/last-commit/AlwynW/Jukebox)](https://github.com/AlwynW/Jukebox) - Music manager for Actionscript 3 projects.
* [Flod ![GitHub Repo Stars](https://img.shields.io/github/stars/photonstorm/Flod) ![GitHub last commit](https://img.shields.io/github/last-commit/photonstorm/Flod)](https://github.com/photonstorm/Flod) - Amiga SoundTracker (MOD) and FastTracker (XM) Replay Library.

#### Video Player

* [Flowplayer ![GitHub Repo Stars](https://img.shields.io/github/stars/flowplayer/flash) ![GitHub last commit](https://img.shields.io/github/last-commit/flowplayer/flash)](https://github.com/flowplayer/flash) - Flowplayer Flash, the video player for the Web.
* [Goplayer ![GitHub Repo Stars](https://img.shields.io/github/stars/dbrock/goplayer) ![GitHub last commit](https://img.shields.io/github/last-commit/dbrock/goplayer)](https://github.com/dbrock/goplayer) - Modern open-source video player written in ActionScript 3.
* [OSFlashVideoPlayer ![GitHub Repo Stars](https://img.shields.io/github/stars/FlashJunior/OSFlashVideoPlayer) ![GitHub last commit](https://img.shields.io/github/last-commit/FlashJunior/OSFlashVideoPlayer)](https://github.com/FlashJunior/OSFlashVideoPlayer) - Open source flash video player.
* [F4player ![GitHub Repo Stars](https://img.shields.io/github/stars/gokercebeci/f4player) ![GitHub last commit](https://img.shields.io/github/last-commit/gokercebeci/f4player)](https://github.com/gokercebeci/f4player) - Open Source AS3 Flash Video Player.
* [dashas ![GitHub Repo Stars](https://img.shields.io/github/stars/castlabs/dashas) ![GitHub last commit](https://img.shields.io/github/last-commit/castlabs/dashas)](https://github.com/castlabs/dashas) - MPEG-DASH player written in ActionScript.
* [hlsplayer ![GitHub Repo Stars](https://img.shields.io/github/stars/erlyvideo/hlsplayer) ![GitHub last commit](https://img.shields.io/github/last-commit/erlyvideo/hlsplayer)](https://github.com/erlyvideo/hlsplayer) - HLS player for OSMF flash framework.
* [vgaplayer ![GitHub Repo Stars](https://img.shields.io/github/stars/euske/vgaplayer) ![GitHub last commit](https://img.shields.io/github/last-commit/euske/vgaplayer)](https://github.com/euske/vgaplayer) - Open source player for Adobe Flash Media Server streams (RTMP).

## Database

#### SQLite
* [AS3Query ![GitHub Repo Stars](https://img.shields.io/github/stars/kemsky/as3Query) ![GitHub last commit](https://img.shields.io/github/last-commit/kemsky/as3Query)](https://github.com/kemsky/as3Query) - Another SQLite ORM and query DSL for ActionScript.
* [AIRdb ![GitHub Repo Stars](https://img.shields.io/github/stars/dkeskar/airdb) ![GitHub last commit](https://img.shields.io/github/last-commit/dkeskar/airdb)](https://github.com/dkeskar/airdb) - AIR ORM for using client-side SQLite within AIR and Flex apps. Supports ActiveRecord style models, migrations and associations.
* [Flexine ![GitHub Repo Stars](https://img.shields.io/github/stars/riadvice/Flexine) ![GitHub last commit](https://img.shields.io/github/last-commit/riadvice/Flexine)](https://github.com/riadvice/Flexine) - SQLite ORM for AIR.
* [AIR-sqlite ![GitHub Repo Stars](https://img.shields.io/github/stars/probertson/air-sqlite) ![GitHub last commit](https://img.shields.io/github/last-commit/probertson/air-sqlite)](https://github.com/probertson/air-sqlite) - Utilities for working with SQLite databases in AIR.

#### MongoDB
* [MongoAS3 ![GitHub Repo Stars](https://img.shields.io/github/stars/s9tpepper/MongoAS3) ![GitHub last commit](https://img.shields.io/github/last-commit/s9tpepper/MongoAS3)](https://github.com/s9tpepper/MongoAS3) - MongoDB driver.
* [ActionMongo ![GitHub Repo Stars](https://img.shields.io/github/stars/RIAlizer/ActionMongo) ![GitHub last commit](https://img.shields.io/github/last-commit/RIAlizer/ActionMongo)](https://github.com/RIAlizer/ActionMongo) - MongoDB driver.

#### CouchDB
* [AS3couchdb ![GitHub Repo Stars](https://img.shields.io/github/stars/bustardcelly/as3couchdb) ![GitHub last commit](https://img.shields.io/github/last-commit/bustardcelly/as3couchdb)](https://github.com/bustardcelly/as3couchdb) - Client-side API for interacting with a CouchDB instance.
* [Soup ![GitHub Repo Stars](https://img.shields.io/github/stars/dima/soup) ![GitHub last commit](https://img.shields.io/github/last-commit/dima/soup)](https://github.com/dima/soup) - Mixing CouchDB, Sinatra, AIR and RestfulX to create an offline/online ready app with undo/redo capabilities.

#### MySQL
* [AS3mysql ![GitHub Repo Stars](https://img.shields.io/github/stars/hgupta9/as3mysql) ![GitHub last commit](https://img.shields.io/github/last-commit/hgupta9/as3mysql)](https://github.com/hgupta9/as3mysql) - Driver for the MySQL open source database.

#### PostgreSQL
* [Pegasus ![GitHub Repo Stars](https://img.shields.io/github/stars/uhoh-itsmaciek/pegasus) ![GitHub last commit](https://img.shields.io/github/last-commit/uhoh-itsmaciek/pegasus)](https://github.com/uhoh-itsmaciek/pegasus) - Driver for the PostgreSQL open source database.

#### DynamoDB
* [AWS-dynamodb ![GitHub Repo Stars](https://img.shields.io/github/stars/ferf/aws-dynamodb-actionscript) ![GitHub last commit](https://img.shields.io/github/last-commit/ferf/aws-dynamodb-actionscript)](https://github.com/ferf/aws-dynamodb-actionscript) - Driver for accessing Amazon's AWS DynamoDB.

#### Redis
* [AS3redis ![GitHub Repo Stars](https://img.shields.io/github/stars/zhangq0355/as3redis) ![GitHub last commit](https://img.shields.io/github/last-commit/zhangq0355/as3redis)](https://github.com/zhangq0355/as3redis) - Driver for Redis.

## File Formats

#### Archives

* [FZip ![GitHub Repo Stars](https://img.shields.io/github/stars/claus/fzip) ![GitHub last commit](https://img.shields.io/github/last-commit/claus/fzip)](https://github.com/claus/fzip) - Mature library to load, modify and create standard ZIP archives.
* [ASZip](https://code.google.com/archive/p/aszip/) - Generate ZIP archives from AS3.
* [Untar-Worker ![GitHub Repo Stars](https://img.shields.io/github/stars/mesmotronic/as3-worker-untar) ![GitHub last commit](https://img.shields.io/github/last-commit/mesmotronic/as3-worker-untar)](https://github.com/mesmotronic/as3-worker-untar) - TAR extraction using AS3 Workers (background threads).

#### 3D Formats

* [AsCollada ![GitHub Repo Stars](https://img.shields.io/github/stars/timknip/ascollada) ![GitHub last commit](https://img.shields.io/github/last-commit/timknip/ascollada)](https://github.com/timknip/ascollada) - Parse COLLADA 3D model files ([fork ![GitHub Repo Stars](https://img.shields.io/github/stars/david-gregory/ascollada) ![GitHub last commit](https://img.shields.io/github/last-commit/david-gregory/ascollada)](https://github.com/david-gregory/ascollada)).
* [AsBlender ![GitHub Repo Stars](https://img.shields.io/github/stars/timknip/asblender) ![GitHub last commit](https://img.shields.io/github/last-commit/timknip/asblender)](https://github.com/timknip/asblender) - Parse Blender .BLEND files.
* [AS3-bvh-parser ![GitHub Repo Stars](https://img.shields.io/github/stars/rkn14/as3-bvh-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/rkn14/as3-bvh-parser)](https://github.com/rkn14/as3-bvh-parser) - Parse BVH files.
* [EasyAGAL ![GitHub Repo Stars](https://img.shields.io/github/stars/Barliesque/EasyAGAL) ![GitHub last commit](https://img.shields.io/github/last-commit/Barliesque/EasyAGAL)](https://github.com/Barliesque/EasyAGAL) - Simplifies development of AGAL shaders with code completion, code hinting,  macros, etc.

#### CSV

* [CSV4AS3 ![GitHub Repo Stars](https://img.shields.io/github/stars/lizardon/CSV4AS3) ![GitHub last commit](https://img.shields.io/github/last-commit/lizardon/CSV4AS3)](https://github.com/lizardon/CSV4AS3) - CSV library ported from Apache Commons CSV.
* [Csvlib ![GitHub Repo Stars](https://img.shields.io/github/stars/51systems/csvlib) ![GitHub last commit](https://img.shields.io/github/last-commit/51systems/csvlib)](https://github.com/51systems/csvlib) - CSV parser.

#### CSS

* [AS3csslib ![GitHub Repo Stars](https://img.shields.io/github/stars/heyfrench/as3csslib) ![GitHub last commit](https://img.shields.io/github/last-commit/heyfrench/as3csslib)](https://github.com/heyfrench/as3csslib) - CSS3 parser, selector and style engine for ActionScript 3.0.
* [Fcss ![GitHub Repo Stars](https://img.shields.io/github/stars/theflashbum/fcss) ![GitHub last commit](https://img.shields.io/github/last-commit/theflashbum/fcss)](https://github.com/theflashbum/fcss) - Flash Cascading StyleSheet Library.
* [Stylekit-as3 ![GitHub Repo Stars](https://img.shields.io/github/stars/videojuicer/stylekit-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/videojuicer/stylekit-as3)](https://github.com/videojuicer/stylekit-as3) -  Skinnable user interfaces using CSS3.
* [Sass4as ![GitHub Repo Stars](https://img.shields.io/github/stars/jeremyruppel/sass4as) ![GitHub last commit](https://img.shields.io/github/last-commit/jeremyruppel/sass4as)](https://github.com/jeremyruppel/sass4as) - Syntactically Awesome Stylesheets for ActionScript 3.
* [Jakute-CSS ![GitHub Repo Stars](https://img.shields.io/github/stars/kakenbok/Jakute-Styling-Engine) ![GitHub last commit](https://img.shields.io/github/last-commit/kakenbok/Jakute-Styling-Engine)](https://github.com/kakenbok/Jakute-Styling-Engine) - Jakute is a CSS framework for ActionScript/Flash.
* [CSS.as](https://gist.github.com/trxcllnt/1161266) - Single-file CSS parser, part of TinyTLF project.

#### BSON

* [ActionBSON ![GitHub Repo Stars](https://img.shields.io/github/stars/fminzoni/ActionBSON) ![GitHub last commit](https://img.shields.io/github/last-commit/fminzoni/ActionBSON)](https://github.com/fminzoni/ActionBSON) - BSON data encoder/decoder.
* [MongoAS3 ![GitHub Repo Stars](https://img.shields.io/github/stars/s9tpepper/MongoAS3) ![GitHub last commit](https://img.shields.io/github/last-commit/s9tpepper/MongoAS3)](https://github.com/s9tpepper/MongoAS3) - MongoDB Driver which includes BSON I/O.

#### EXIF

* [AS3-exif-lib ![GitHub Repo Stars](https://img.shields.io/github/stars/unstoppable/actionscript-exif-reading-lib) ![GitHub last commit](https://img.shields.io/github/last-commit/unstoppable/actionscript-exif-reading-lib)](https://github.com/unstoppable/actionscript-exif-reading-lib) - Parse JPEG EXIF data.
* [Exif-as3 ![GitHub Repo Stars](https://img.shields.io/github/stars/bashi/exif-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/bashi/exif-as3)](https://github.com/bashi/exif-as3) - Parse JPEG EXIF data.

#### FXG

* [Fxg-as3-lib ![GitHub Repo Stars](https://img.shields.io/github/stars/pixelami/fxg-as3-lib) ![GitHub last commit](https://img.shields.io/github/last-commit/pixelami/fxg-as3-lib)](https://github.com/pixelami/fxg-as3-lib) - Pure AS3 FXG rendering library (both runtime rendering and mxml supported).
* [Fxg2as3 ![GitHub Repo Stars](https://img.shields.io/github/stars/ZackPierce/fxg2as3) ![GitHub last commit](https://img.shields.io/github/last-commit/ZackPierce/fxg2as3)](https://github.com/ZackPierce/fxg2as3) - Converting FXG markup into executable Actionscript 3 code.

#### GIF

* [AS3gif ![GitHub Repo Stars](https://img.shields.io/github/stars/audreyt/as3gif) ![GitHub last commit](https://img.shields.io/github/last-commit/audreyt/as3gif)](https://github.com/audreyt/as3gif) - Play and encode Animated GIFs.
* [GIF Player ![GitHub Repo Stars](https://img.shields.io/github/stars/theturtle32/Flash-Animated-GIF-Library) ![GitHub last commit](https://img.shields.io/github/last-commit/theturtle32/Flash-Animated-GIF-Library)](https://github.com/theturtle32/Flash-Animated-GIF-Library) - Play Animated GIFs in Flash.
* [Async-gif-decoder ![GitHub Repo Stars](https://img.shields.io/github/stars/honzabrecka/async-gif-decoder) ![GitHub last commit](https://img.shields.io/github/last-commit/honzabrecka/async-gif-decoder)](https://github.com/honzabrecka/async-gif-decoder) - Asynchronous GIF decoder & player.

#### ICAL

* [AS3iCAL ![GitHub Repo Stars](https://img.shields.io/github/stars/nicolai86/as3.iCal) ![GitHub last commit](https://img.shields.io/github/last-commit/nicolai86/as3.iCal)](https://github.com/nicolai86/as3.iCal) - iCal parser based on the RFC2445 specification.

#### JSON

* [Actionjson ![GitHub Repo Stars](https://img.shields.io/github/stars/mherkender/actionjson) ![GitHub last commit](https://img.shields.io/github/last-commit/mherkender/actionjson)](https://github.com/mherkender/actionjson) - Faster, more advanced ActionScript 3 JSON library.
* [Jameson ![GitHub Repo Stars](https://img.shields.io/github/stars/mattupstate/jameson) ![GitHub last commit](https://img.shields.io/github/last-commit/mattupstate/jameson)](https://github.com/mattupstate/jameson) - JSON Document Object Mapper.
* [Serialkiller ![GitHub Repo Stars](https://img.shields.io/github/stars/benbjohnson/serialkiller) ![GitHub last commit](https://img.shields.io/github/last-commit/benbjohnson/serialkiller)](https://github.com/benbjohnson/serialkiller) - JSON & XML serialization library.
* [JsonMapper ![GitHub Repo Stars](https://img.shields.io/github/stars/kemsky/JsonMapper) ![GitHub last commit](https://img.shields.io/github/last-commit/kemsky/JsonMapper)](https://github.com/kemsky/JsonMapper) - Typed JSON parser.
* [JSONTools ![GitHub Repo Stars](https://img.shields.io/github/stars/s9tpepper/JSONTools) ![GitHub last commit](https://img.shields.io/github/last-commit/s9tpepper/JSONTools)](https://github.com/s9tpepper/JSONTools) - JSON errors, the speed of the JSWoof JSON library, and E4X style queries dubbed E4J.

#### Markdown

* [Showdown.as](https://gist.github.com/cstrahan/648771) - Port of showdown.js.
* [Actiondown ![GitHub Repo Stars](https://img.shields.io/github/stars/bbeaumont/Actiondown) ![GitHub last commit](https://img.shields.io/github/last-commit/bbeaumont/Actiondown)](https://github.com/bbeaumont/Actiondown) - Port of Javascript Showdown.
* [Markdownlib ![GitHub Repo Stars](https://img.shields.io/github/stars/Corsaair/markdownlib) ![GitHub last commit](https://img.shields.io/github/last-commit/Corsaair/markdownlib)](https://github.com/Corsaair/markdownlib) - Implementation of Markdown.

#### MP3

* [AS3id3lib ![GitHub Repo Stars](https://img.shields.io/github/stars/devxoul/as3id3lib) ![GitHub last commit](https://img.shields.io/github/last-commit/devxoul/as3id3lib)](https://github.com/devxoul/as3id3lib) - Parse MP3 ID3 data.
* [AS3Icy ![GitHub Repo Stars](https://img.shields.io/github/stars/claus/as3icy) ![GitHub last commit](https://img.shields.io/github/last-commit/claus/as3icy)](https://github.com/claus/as3icy) - Decode and play live MP3 streams from Shoutcast, Icecast and Limewire.

#### PDF

* [AlivePDF](https://code.google.com/archive/p/alivepdf/) - Client side PDF generation ([github ![GitHub Repo Stars](https://img.shields.io/github/stars/riadvice/alivepdf) ![GitHub last commit](https://img.shields.io/github/last-commit/riadvice/alivepdf)](https://github.com/riadvice/alivepdf)).
* [PurePDF ![GitHub Repo Stars](https://img.shields.io/github/stars/sephiroth74/purePDF) ![GitHub last commit](https://img.shields.io/github/last-commit/sephiroth74/purePDF)](https://github.com/sephiroth74/purePDF) - Complete PDF library, port of Java iText.
* [HalcyonPDF ![GitHub Repo Stars](https://img.shields.io/github/stars/systemed/halcyon_pdf) ![GitHub last commit](https://img.shields.io/github/last-commit/systemed/halcyon_pdf)](https://github.com/systemed/halcyon_pdf) - OpenStreetMap PDF renderer.
* [PDFCase ![GitHub Repo Stars](https://img.shields.io/github/stars/dickclaus/pdfcase) ![GitHub last commit](https://img.shields.io/github/last-commit/dickclaus/pdfcase)](https://github.com/dickclaus/pdfcase) - PDF Library.
* [PDFView ![GitHub Repo Stars](https://img.shields.io/github/stars/jankapunkt/PDFView) ![GitHub last commit](https://img.shields.io/github/last-commit/jankapunkt/PDFView)](https://github.com/jankapunkt/PDFView) - PDF viewer built from scratch.

#### PSD

* [AS3-psd-parser ![GitHub Repo Stars](https://img.shields.io/github/stars/warrenseine/as3-psd-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/warrenseine/as3-psd-parser)](https://github.com/warrenseine/as3-psd-parser) - Parse Photoshop PSD files and render as BitmapData objects.

#### SWF

* [AS3swf ![GitHub Repo Stars](https://img.shields.io/github/stars/claus/as3swf) ![GitHub last commit](https://img.shields.io/github/last-commit/claus/as3swf)](https://github.com/claus/as3swf) - Low level library to parse, create, modify and publish SWF files.
* [AS3abc ![GitHub Repo Stars](https://img.shields.io/github/stars/imcj/as3abc) ![GitHub last commit](https://img.shields.io/github/last-commit/imcj/as3abc)](https://github.com/imcj/as3abc) - Low level library to parse, create, modify and publish ABC (Actionscript Block Code) files.
* [SWFWire ![GitHub Repo Stars](https://img.shields.io/github/stars/magicalhobo/SWFWire) ![GitHub last commit](https://img.shields.io/github/last-commit/magicalhobo/SWFWire)](https://github.com/magicalhobo/SWFWire) - SWF Decompiler and Inspector Tools.
* [Abc-abstraction ![GitHub Repo Stars](https://img.shields.io/github/stars/krilnon/abc-abstraction) ![GitHub last commit](https://img.shields.io/github/last-commit/krilnon/abc-abstraction)](https://github.com/krilnon/abc-abstraction) - Allows ABC to be analyzed, manipulated, packaged back into an SWF, and run.

#### SVG

* [AS3SVGRenderer ![GitHub Repo Stars](https://img.shields.io/github/stars/LucasLorentz/AS3SVGRenderer) ![GitHub last commit](https://img.shields.io/github/last-commit/LucasLorentz/AS3SVGRenderer)](https://github.com/LucasLorentz/AS3SVGRenderer) - SVG Renderer for Flash Player.
* [SVGParser ![GitHub Repo Stars](https://img.shields.io/github/stars/millermedeiros/SVGParser) ![GitHub last commit](https://img.shields.io/github/last-commit/millermedeiros/SVGParser)](https://github.com/millermedeiros/SVGParser) - SVG parser and renderer to FIVe3D and HTML5 canvas.

#### XML

* [XMLSerializer ![GitHub Repo Stars](https://img.shields.io/github/stars/vapesolius/XMLSerializer) ![GitHub last commit](https://img.shields.io/github/last-commit/vapesolius/XMLSerializer)](https://github.com/vapesolius/XMLSerializer) - Library which allows data serialisation from ActionScript to XML and from XML to ActionScript.
* [DynamicXMLParser ![GitHub Repo Stars](https://img.shields.io/github/stars/lmgerhard/DynamicXMLParser) ![GitHub last commit](https://img.shields.io/github/last-commit/lmgerhard/DynamicXMLParser)](https://github.com/lmgerhard/DynamicXMLParser) - Dynamic parse xml content into predefined data classes (actionscript 3).
* [Nudge ![GitHub Repo Stars](https://img.shields.io/github/stars/pluglimited/Nudge) ![GitHub last commit](https://img.shields.io/github/last-commit/pluglimited/Nudge)](https://github.com/pluglimited/Nudge) - Framework to serialize/deserialize objects as XML.
* [AStream ![GitHub Repo Stars](https://img.shields.io/github/stars/kokorin/AStream) ![GitHub last commit](https://img.shields.io/github/last-commit/kokorin/AStream)](https://github.com/kokorin/AStream) - XML to Object (and vice versa) mapping library written in AS3. Compatible with XStream.

#### XLSX

* [AS3-xlsx-reader ![GitHub Repo Stars](https://img.shields.io/github/stars/childoftv/as3-xlsx-reader) ![GitHub last commit](https://img.shields.io/github/last-commit/childoftv/as3-xlsx-reader)](https://github.com/childoftv/as3-xlsx-reader) - Parse Open XML Excel (.XLSX) or Open Office spreadsheets.


## Networking
#### Data Loader

* [GreenSock LoaderMax ![GitHub Repo Stars](https://img.shields.io/github/stars/greensock/GreenSock-AS3) ![GitHub last commit](https://img.shields.io/github/last-commit/greensock/GreenSock-AS3)](https://github.com/greensock/GreenSock-AS3) - Provides an easy and powerful way to load assets at runtime.
* [BulkLoader ![GitHub Repo Stars](https://img.shields.io/github/stars/arthur-debert/BulkLoader) ![GitHub last commit](https://img.shields.io/github/last-commit/arthur-debert/BulkLoader)](https://github.com/arthur-debert/BulkLoader) - Bulk asset loading library for Actionscript.
* [AssetLoader ![GitHub Repo Stars](https://img.shields.io/github/stars/Matan/AssetLoader) ![GitHub last commit](https://img.shields.io/github/last-commit/Matan/AssetLoader)](https://github.com/Matan/AssetLoader) - Multi-file/asset loader for AS3 built on AS3Signals.

#### Hardware

* [AS3midilib ![GitHub Repo Stars](https://img.shields.io/github/stars/heyfrench/as3midilib) ![GitHub last commit](https://img.shields.io/github/last-commit/heyfrench/as3midilib)](https://github.com/heyfrench/as3midilib) - Work with MIDI files and MIDI input/output devices.
* [AS3glue](https://code.google.com/archive/p/as3glue/) - Communication for Arduino boards.
* [AS3-arduino ![GitHub Repo Stars](https://img.shields.io/github/stars/quetwo/as3-arduino-connector) ![GitHub last commit](https://img.shields.io/github/last-commit/quetwo/as3-arduino-connector)](https://github.com/quetwo/as3-arduino-connector) - Connecting Arduino Prototyping board to Adobe AIR.
* [AIRkinect ![GitHub Repo Stars](https://img.shields.io/github/stars/AS3NUI/airkinect-2-core) ![GitHub last commit](https://img.shields.io/github/last-commit/AS3NUI/airkinect-2-core)](https://github.com/AS3NUI/airkinect-2-core) - ANE for integrating with Microsoft Kinect. ([examples ![GitHub Repo Stars](https://img.shields.io/github/stars/AS3NUI/airkinect-2-examples) ![GitHub last commit](https://img.shields.io/github/last-commit/AS3NUI/airkinect-2-examples)](https://github.com/AS3NUI/airkinect-2-examples)).
* [KinectGate ![GitHub Repo Stars](https://img.shields.io/github/stars/cleoag/KinectGate) ![GitHub last commit](https://img.shields.io/github/last-commit/cleoag/KinectGate)](https://github.com/cleoag/KinectGate) - KinectSDK to AS3 socket gate.
* [Kinect-Gestures ![GitHub Repo Stars](https://img.shields.io/github/stars/tonybeltramelli/Air-Kinect-Gesture-Lib) ![GitHub last commit](https://img.shields.io/github/last-commit/tonybeltramelli/Air-Kinect-Gesture-Lib)](https://github.com/tonybeltramelli/Air-Kinect-Gesture-Lib) - AIR Kinect Gesture Library.
* [OpenTSPS ![GitHub Repo Stars](https://img.shields.io/github/stars/labatrockwell/openTSPS) ![GitHub last commit](https://img.shields.io/github/last-commit/labatrockwell/openTSPS)](https://github.com/labatrockwell/openTSPS) - TSPS is a cross platform Toolkit for Sensing People in Spaces. It performs openCV operations on live video (Kinect, web camera, etc) and sends it to clients as JSON (via WebSockets), OSC, TUIO, or TCP.
* [LeapMotionAS3 ![GitHub Repo Stars](https://img.shields.io/github/stars/logotype/LeapMotionAS3) ![GitHub last commit](https://img.shields.io/github/last-commit/logotype/LeapMotionAS3)](https://github.com/logotype/LeapMotionAS3) - Integrate with the LeapMotion sensor (provides Gestures, Image, Skeleton/Bone @ 210 FPS).

#### Servers

* [AIRhttp ![GitHub Repo Stars](https://img.shields.io/github/stars/leopoldodonnell/airhttp) ![GitHub last commit](https://img.shields.io/github/last-commit/leopoldodonnell/airhttp)](https://github.com/leopoldodonnell/airhttp) - HTTP Server for Adobe AIR.
* [AIR-Server ![GitHub Repo Stars](https://img.shields.io/github/stars/wouterverweirder/AIR-Server) ![GitHub last commit](https://img.shields.io/github/last-commit/wouterverweirder/AIR-Server)](https://github.com/wouterverweirder/AIR-Server) - Socket Server library for Adobe AIR.

#### OAuth

* [Actionscript-oauth2 ![GitHub Repo Stars](https://img.shields.io/github/stars/charlesbihis/actionscript-oauth2) ![GitHub last commit](https://img.shields.io/github/last-commit/charlesbihis/actionscript-oauth2)](https://github.com/charlesbihis/actionscript-oauth2) - Interfacing with OAuth 2.0 services.
* [oauth-flex ![GitHub Repo Stars](https://img.shields.io/github/stars/oauth-io/oauth-flex) ![GitHub last commit](https://img.shields.io/github/last-commit/oauth-io/oauth-flex)](https://github.com/oauth-io/oauth-flex) - OAuth.io plugin for Apache Flex/ActionScript.
* [oauth-as3 ![GitHub Repo Stars](https://img.shields.io/github/stars/mlepicki/oauth-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/mlepicki/oauth-as3)](https://github.com/mlepicki/oauth-as3) - Mavenized, RSL version of oauth-as3 library - OAuth for ActionScript 3.

#### HTTP

* [Hendrix-HTTP ![GitHub Repo Stars](https://img.shields.io/github/stars/HendrixString/Hendrix-HttP-AiR) ![GitHub last commit](https://img.shields.io/github/last-commit/HendrixString/Hendrix-HttP-AiR)](https://github.com/HendrixString/Hendrix-HttP-AiR) - Lightweight HTTP library for ActionScript 3 (as3) inspired by Square's OkHttp.
* [HTTPForm ![GitHub Repo Stars](https://img.shields.io/github/stars/dv/HTTPForm) ![GitHub last commit](https://img.shields.io/github/last-commit/dv/HTTPForm)](https://github.com/dv/HTTPForm) - Emulate a multipart/form-data HTML form submission request, including file upload.
* [AS3httpclient ![GitHub Repo Stars](https://img.shields.io/github/stars/abdul/as3httpclient) ![GitHub last commit](https://img.shields.io/github/last-commit/abdul/as3httpclient)](https://github.com/abdul/as3httpclient) - HTTP client implementation.
* [AS3httpclient ![GitHub Repo Stars](https://img.shields.io/github/stars/gabriel/as3httpclient) ![GitHub last commit](https://img.shields.io/github/last-commit/gabriel/as3httpclient)](https://github.com/gabriel/as3httpclient) - HTTP client implementation.
* [Amazon Web Services ![GitHub Repo Stars](https://img.shields.io/github/stars/satoshi7/ActionScript-API-for-AWS-Amazon-Web-Services-) ![GitHub last commit](https://img.shields.io/github/last-commit/satoshi7/ActionScript-API-for-AWS-Amazon-Web-Services-)](https://github.com/satoshi7/ActionScript-API-for-AWS-Amazon-Web-Services-) - AS3 API for AWS.

#### P2P

* [P2Plocal ![GitHub Repo Stars](https://img.shields.io/github/stars/palkan/as3_p2plocal) ![GitHub last commit](https://img.shields.io/github/last-commit/palkan/as3_p2plocal)](https://github.com/palkan/as3_p2plocal) - Local RTMFP connections.
* [Android-Flash-P2P ![GitHub Repo Stars](https://img.shields.io/github/stars/beautifycode/Android-Flash-P2P) ![GitHub last commit](https://img.shields.io/github/last-commit/beautifycode/Android-Flash-P2P)](https://github.com/beautifycode/Android-Flash-P2P) - P2P Communication between a Client.swf and an Android Device with AIR.
* [NetGrouper ![GitHub Repo Stars](https://img.shields.io/github/stars/walpolea/NetGrouper) ![GitHub last commit](https://img.shields.io/github/last-commit/walpolea/NetGrouper)](https://github.com/walpolea/NetGrouper) - Wrapper for NetGroup and RTMFP Multicasting abilities to create quick P2P multiplayer games over local networks or Adobe Cirrus.
* [HydraP2P ![GitHub Repo Stars](https://img.shields.io/github/stars/devboy/HydraP2P) ![GitHub last commit](https://img.shields.io/github/last-commit/devboy/HydraP2P)](https://github.com/devboy/HydraP2P) - Simplifies the peer-to-peer API introduced in Flash Player 10.1.
* [GroupP2P ![GitHub Repo Stars](https://img.shields.io/github/stars/oohazard/GroupP2P) ![GitHub last commit](https://img.shields.io/github/last-commit/oohazard/GroupP2P)](https://github.com/oohazard/GroupP2P) - P2P-based netgroup.
* [HLS-P2P ![GitHub Repo Stars](https://img.shields.io/github/stars/lava-tech/hls-p2p) ![GitHub last commit](https://img.shields.io/github/last-commit/lava-tech/hls-p2p)](https://github.com/lava-tech/hls-p2p) - Flash OSMF based hybrid cdn&p2p hls solution.
* [P2Pmessaging ![GitHub Repo Stars](https://img.shields.io/github/stars/dreamsocket/actionscript-p2p_messaging) ![GitHub last commit](https://img.shields.io/github/last-commit/dreamsocket/actionscript-p2p_messaging)](https://github.com/dreamsocket/actionscript-p2p_messaging) - Simple messaging framework for doing P2P in Flash.
* [ArcusNode ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenRTMFP/ArcusNode) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenRTMFP/ArcusNode)](https://github.com/OpenRTMFP/ArcusNode) - RTMFP Rendevouz Service For Peer Assisted Networking With Adobe Flash on Node JS.

#### Sockets

* [AS3WebSocket ![GitHub Repo Stars](https://img.shields.io/github/stars/theturtle32/AS3WebSocket) ![GitHub last commit](https://img.shields.io/github/last-commit/theturtle32/AS3WebSocket)](https://github.com/theturtle32/AS3WebSocket) - WebSocket client implementation for the final WebSocket Draft RFC6455.
* [SmartSocket ![GitHub Repo Stars](https://img.shields.io/github/stars/XaeroDegreaz/SmartSocket) ![GitHub last commit](https://img.shields.io/github/last-commit/XaeroDegreaz/SmartSocket)](https://github.com/XaeroDegreaz/SmartSocket) - SmartSocket is a Java and PHP socket server engine, to make creating multi-user applications quick and painless.
* [FlashSocket.IO ![GitHub Repo Stars](https://img.shields.io/github/stars/simb/FlashSocket.IO) ![GitHub last commit](https://img.shields.io/github/last-commit/simb/FlashSocket.IO)](https://github.com/simb/FlashSocket.IO) - Clients connect to Socket.IO servers from AS3/AIR clients.
* [Socket.io ![GitHub Repo Stars](https://img.shields.io/github/stars/ascorbic/socket-io-actionscript) ![GitHub last commit](https://img.shields.io/github/last-commit/ascorbic/socket-io-actionscript)](https://github.com/ascorbic/socket-io-actionscript) - Socket.IO Actionscript 3 client.
* [AMFsocket ![GitHub Repo Stars](https://img.shields.io/github/stars/chadrem/amf_socket) ![GitHub last commit](https://img.shields.io/github/last-commit/chadrem/amf_socket)](https://github.com/chadrem/amf_socket) - Bi-directional RPC library for high performance network communication.
* [Sockpuppet ![GitHub Repo Stars](https://img.shields.io/github/stars/rjungemann/sockpuppet) ![GitHub last commit](https://img.shields.io/github/last-commit/rjungemann/sockpuppet)](https://github.com/rjungemann/sockpuppet) - Complete Ruby/ActionScript socket client/server with AMF.
* [Socket.io-flash ![GitHub Repo Stars](https://img.shields.io/github/stars/sinnus/socket.io-flash) ![GitHub last commit](https://img.shields.io/github/last-commit/sinnus/socket.io-flash)](https://github.com/sinnus/socket.io-flash) - Communication to Socket.IO v.0.8+ servers.
* [ws-flash-client ![GitHub Repo Stars](https://img.shields.io/github/stars/youurayy/ws-flash-client) ![GitHub last commit](https://img.shields.io/github/last-commit/youurayy/ws-flash-client)](https://github.com/youurayy/ws-flash-client) - Reliable minimalistic WebSocket client (uses Adobe Flash where native WebSocket is not available).

#### Protocols

* [GIT ![GitHub Repo Stars](https://img.shields.io/github/stars/nexussays/git-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/nexussays/git-as3)](https://github.com/nexussays/git-as3) - Client-side implementation of Git.
* [AIRplay ![GitHub Repo Stars](https://img.shields.io/github/stars/mikkoh/AS3-Airplay) ![GitHub last commit](https://img.shields.io/github/last-commit/mikkoh/AS3-Airplay)](https://github.com/mikkoh/AS3-Airplay) - Client-side implementation of Apple's Airplay.
* [TeaTime ![GitHub Repo Stars](https://img.shields.io/github/stars/aemoncannon/croqodile) ![GitHub last commit](https://img.shields.io/github/last-commit/aemoncannon/croqodile)](https://github.com/aemoncannon/croqodile) - AS3/Erlang implementation of the Croquet project's TeaTime protocol.
* [XMPP ![GitHub Repo Stars](https://img.shields.io/github/stars/lyokato/as3xmppclient) ![GitHub last commit](https://img.shields.io/github/last-commit/lyokato/as3xmppclient)](https://github.com/lyokato/as3xmppclient) - Client-side implementation of XMPP library.
* [XMPP ![GitHub Repo Stars](https://img.shields.io/github/stars/bluef/kuching) ![GitHub last commit](https://img.shields.io/github/last-commit/bluef/kuching)](https://github.com/bluef/kuching) - Lightweight implementation of XMPP library.
* [AMQP ![GitHub Repo Stars](https://img.shields.io/github/stars/0x6e6562/as3-amqp) ![GitHub last commit](https://img.shields.io/github/last-commit/0x6e6562/as3-amqp)](https://github.com/0x6e6562/as3-amqp) - Client-side implementation of the 0-8 version of AMQP.
* [NTP ![GitHub Repo Stars](https://img.shields.io/github/stars/charlespalen/AS3-NTP-Implementation) ![GitHub last commit](https://img.shields.io/github/last-commit/charlespalen/AS3-NTP-Implementation)](https://github.com/charlespalen/AS3-NTP-Implementation) - Client-side implementation of NTP Client (Network Time Protocol).
* [FUDI ![GitHub Repo Stars](https://img.shields.io/github/stars/matthiasbreuer/FUDI-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/matthiasbreuer/FUDI-as3)](https://github.com/matthiasbreuer/FUDI-as3) - Client-side implementation of the Puredata FUDI protocol.
* [BDD Cucumber ![GitHub Repo Stars](https://img.shields.io/github/stars/flashquartermaster/Cuke4AS3) ![GitHub last commit](https://img.shields.io/github/last-commit/flashquartermaster/Cuke4AS3)](https://github.com/flashquartermaster/Cuke4AS3) - A BDD Cucumber wire protocol implementation for Flash ActionScript.

#### Email

* [AIRXMail ![GitHub Repo Stars](https://img.shields.io/github/stars/hgupta9/AirXMail) ![GitHub last commit](https://img.shields.io/github/last-commit/hgupta9/AirXMail)](https://github.com/hgupta9/AirXMail) - Complete client-side email library supporting SMTP, POP3 and IMAP4.
* [AS3Mailer ![GitHub Repo Stars](https://img.shields.io/github/stars/Matan/AS3Mailer) ![GitHub last commit](https://img.shields.io/github/last-commit/Matan/AS3Mailer)](https://github.com/Matan/AS3Mailer) - Sends email using server script or invokes a mailto.

## Utilities

#### Artificial Intelligence

* [FiniteStateMachine ![GitHub Repo Stars](https://img.shields.io/github/stars/pzUH/FiniteStateMachine) ![GitHub last commit](https://img.shields.io/github/last-commit/pzUH/FiniteStateMachine)](https://github.com/pzUH/FiniteStateMachine) - Finite State Machine for AI bot/agent.
* [N-GramPredictor ![GitHub Repo Stars](https://img.shields.io/github/stars/pzUH/N-GramPredictor) ![GitHub last commit](https://img.shields.io/github/last-commit/pzUH/N-GramPredictor)](https://github.com/pzUH/N-GramPredictor) - n-Gram predictor for AI bot/agent.
* [Naive-BayesPredictor ![GitHub Repo Stars](https://img.shields.io/github/stars/pzUH/Naive-BayesPredictor) ![GitHub last commit](https://img.shields.io/github/last-commit/pzUH/Naive-BayesPredictor)](https://github.com/pzUH/Naive-BayesPredictor) - Naive-Bayes predictor for AI bot/agent.
* [HierarchicalStateMachine ![GitHub Repo Stars](https://img.shields.io/github/stars/pzUH/HierarchicalStateMachine) ![GitHub last commit](https://img.shields.io/github/last-commit/pzUH/HierarchicalStateMachine)](https://github.com/pzUH/HierarchicalStateMachine) - Hierarchical State Machine for AI bot/agent.
* [Godmode-as3 ![GitHub Repo Stars](https://img.shields.io/github/stars/tconkling/godmode-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/tconkling/godmode-as3)](https://github.com/tconkling/godmode-as3) - Behavior tree implementation (artificial intelligence).
* [DecisionTree ![GitHub Repo Stars](https://img.shields.io/github/stars/pzUH/DecisionTree) ![GitHub last commit](https://img.shields.io/github/last-commit/pzUH/DecisionTree)](https://github.com/pzUH/DecisionTree) - Binary decision tree for AI bot/agent.
* [FuzzyStateMachine ![GitHub Repo Stars](https://img.shields.io/github/stars/pzUH/FuzzyStateMachine) ![GitHub last commit](https://img.shields.io/github/last-commit/pzUH/FuzzyStateMachine)](https://github.com/pzUH/FuzzyStateMachine) - Fuzzy State Machine (FuSM) for AI bot/agent.
* [SmartKid ![GitHub Repo Stars](https://img.shields.io/github/stars/skyfeiyun/SmartKid) ![GitHub last commit](https://img.shields.io/github/last-commit/skyfeiyun/SmartKid)](https://github.com/skyfeiyun/SmartKid) - Powerful AI engine for 2D & 3D games.

#### Async

* [EasyAS-Worker ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/easyAS-Worker) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/easyAS-Worker)](https://github.com/myflashlab/easyAS-Worker) - Simplified wrapper for AIR Workers.
* [Worker-from-class ![GitHub Repo Stars](https://img.shields.io/github/stars/bortsen/worker-from-class) ![GitHub last commit](https://img.shields.io/github/last-commit/bortsen/worker-from-class)](https://github.com/bortsen/worker-from-class) - Create Workers from Class definitions.

#### Crypto

* [BlooddyCrypto ![GitHub Repo Stars](https://img.shields.io/github/stars/blooddy/blooddy_crypto) ![GitHub last commit](https://img.shields.io/github/last-commit/blooddy/blooddy_crypto)](https://github.com/blooddy/blooddy_crypto) - High-performance library for processing binary data. This library contains MD5, SHA-1, SHA-2, Base64, CRC32, JSON, PNG/JPEG encoders.
* [AS3Crypto ![GitHub Repo Stars](https://img.shields.io/github/stars/timkurvers/as3-crypto) ![GitHub last commit](https://img.shields.io/github/last-commit/timkurvers/as3-crypto)](https://github.com/timkurvers/as3-crypto) - Fork of Henri Torgemane's excellent cryptography library ([patched ![GitHub Repo Stars](https://img.shields.io/github/stars/lyokato/as3crypto_patched) ![GitHub last commit](https://img.shields.io/github/last-commit/lyokato/as3crypto_patched)](https://github.com/lyokato/as3crypto_patched)).
* [AS3corelib ![GitHub Repo Stars](https://img.shields.io/github/stars/mikechambers/as3corelib) ![GitHub last commit](https://img.shields.io/github/last-commit/mikechambers/as3corelib)](https://github.com/mikechambers/as3corelib) -  MD5 and SHA1 hashing, Image encoders, and JSON serialization.
* [ASCrypt ![GitHub Repo Stars](https://img.shields.io/github/stars/Meychi/ASCrypt) ![GitHub last commit](https://img.shields.io/github/last-commit/Meychi/ASCrypt)](https://github.com/Meychi/ASCrypt) - Crypto library with a similar API for multiple languages.
* [Nexuslib ![GitHub Repo Stars](https://img.shields.io/github/stars/nexussays/nexuslib-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/nexussays/nexuslib-as3)](https://github.com/nexussays/nexuslib-as3) - Reflection, serialization, seeded random number generation, cryptography, networking, and more.
* [Hashlib ![GitHub Repo Stars](https://img.shields.io/github/stars/Corsaair/hashlib) ![GitHub last commit](https://img.shields.io/github/last-commit/Corsaair/hashlib)](https://github.com/Corsaair/hashlib) - Over 30 different hashing functions.
* [XXTEA-AS3 ![GitHub Repo Stars](https://img.shields.io/github/stars/xxtea/xxtea-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/xxtea/xxtea-as3)](https://github.com/xxtea/xxtea-as3) - XXTEA encryption algorithm library for ActionScript 3.
* [Gibberish-AES ![GitHub Repo Stars](https://img.shields.io/github/stars/NordMike/gibberish-aes-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/NordMike/gibberish-aes-as3)](https://github.com/NordMike/gibberish-aes-as3) - A fully OpenSSL compliant ActionScript 3 library for AES encryption.

#### Data	

 * [AS3Commons Collections ![GitHub Repo Stars](https://img.shields.io/github/stars/AS3Commons/as3commons-collections) ![GitHub last commit](https://img.shields.io/github/last-commit/AS3Commons/as3commons-collections)](https://github.com/AS3Commons/as3commons-collections) - Sophisticated and high-performance collections & iterators for AS3.
 
#### Geometry

* [AS3geometry ![GitHub Repo Stars](https://img.shields.io/github/stars/alecmce/as3geometry) ![GitHub last commit](https://img.shields.io/github/last-commit/alecmce/as3geometry)](https://github.com/alecmce/as3geometry) - Primitives, Polygons, Intersections, etc.
* [AS3GeomAlgo ![GitHub Repo Stars](https://img.shields.io/github/stars/azrafe7/as3GeomAlgo) ![GitHub last commit](https://img.shields.io/github/last-commit/azrafe7/as3GeomAlgo)](https://github.com/azrafe7/as3GeomAlgo) - Collection of geometry algorithms. Port of hxGeomAlgo.
* [Coral ![GitHub Repo Stars](https://img.shields.io/github/stars/richardlord/Coral) ![GitHub last commit](https://img.shields.io/github/last-commit/richardlord/Coral)](https://github.com/richardlord/Coral) - High-performance classes for 3D mathematics (Point, Vector, Matrix, Quaternion).
* [Csg.as ![GitHub Repo Stars](https://img.shields.io/github/stars/timknip/csg.as) ![GitHub last commit](https://img.shields.io/github/last-commit/timknip/csg.as)](https://github.com/timknip/csg.as) - Constructive Solid Geometry on 3D meshes.
* [PathUtils ![GitHub Repo Stars](https://img.shields.io/github/stars/alinakipoglu/Actionscript-PathUtils) ![GitHub last commit](https://img.shields.io/github/last-commit/alinakipoglu/Actionscript-PathUtils)](https://github.com/alinakipoglu/Actionscript-PathUtils) - Working with quadratic, bezier and line sequences.
* [Hilbert ![GitHub Repo Stars](https://img.shields.io/github/stars/nodename/Hilbert) ![GitHub last commit](https://img.shields.io/github/last-commit/nodename/Hilbert)](https://github.com/nodename/Hilbert) - Port of Hilbert curve from cortesi/scurve.
* [AS3AStar ![GitHub Repo Stars](https://img.shields.io/github/stars/tomnewton/AS3AStar) ![GitHub last commit](https://img.shields.io/github/last-commit/tomnewton/AS3AStar)](https://github.com/tomnewton/AS3AStar) - Fast A-Star pathfinding algorithm.
* [A-star_pathfinder ![GitHub Repo Stars](https://img.shields.io/github/stars/kevhiggins/a-star_pathfinder) ![GitHub last commit](https://img.shields.io/github/last-commit/kevhiggins/a-star_pathfinder)](https://github.com/kevhiggins/a-star_pathfinder) - A-Star pathfinding interface for tile based maps.
* [As3Pathfinder ![GitHub Repo Stars](https://img.shields.io/github/stars/azakhary/As3Pathfinder) ![GitHub last commit](https://img.shields.io/github/last-commit/azakhary/As3Pathfinder)](https://github.com/azakhary/As3Pathfinder) - Grid Path finding Library written using Dijkstra's algorithm.

#### Math

* [AS3Units ![GitHub Repo Stars](https://img.shields.io/github/stars/erussell/AS3Units) ![GitHub last commit](https://img.shields.io/github/last-commit/erussell/AS3Units)](https://github.com/erussell/AS3Units) - Port of NGUnits. Parsing, formatting, and converting between units of measure.
* [AS3LinAlg ![GitHub Repo Stars](https://img.shields.io/github/stars/inspirit/AS3LinAlg) ![GitHub last commit](https://img.shields.io/github/last-commit/inspirit/AS3LinAlg)](https://github.com/inspirit/AS3LinAlg) - Linear Algebra library (Jacobi SVD, Eigen Vectors/Values, Cholesky LU, etc).
* [Performance Primitives ![GitHub Repo Stars](https://img.shields.io/github/stars/martinkallman/performance-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/martinkallman/performance-as3)](https://github.com/martinkallman/performance-as3) - High-performance math modeled on the Intel Performance Primitives.
* [Zexpression ![GitHub Repo Stars](https://img.shields.io/github/stars/Xorcerer/zexpression) ![GitHub last commit](https://img.shields.io/github/last-commit/Xorcerer/zexpression)](https://github.com/Xorcerer/zexpression) - Parse and evalate math expressions with functions and variables.
* [FlexibleMatrix ![GitHub Repo Stars](https://img.shields.io/github/stars/Lukx/FlexibleMatrix) ![GitHub last commit](https://img.shields.io/github/last-commit/Lukx/FlexibleMatrix)](https://github.com/Lukx/FlexibleMatrix) - A multi purpose Matrix class.
* [AS3eval](http://eval.hurlant.com/) - Packages the Tamarin ESC compiler to work within Flash Player. ([alternate ![GitHub Repo Stars](https://img.shields.io/github/stars/SimonRichardson/as3-eval) ![GitHub last commit](https://img.shields.io/github/last-commit/SimonRichardson/as3-eval)](https://github.com/SimonRichardson/as3-eval)).
* [FlashFormulaEditor ![GitHub Repo Stars](https://img.shields.io/github/stars/zasdfgbnm/FlashFormulaEditor) ![GitHub last commit](https://img.shields.io/github/last-commit/zasdfgbnm/FlashFormulaEditor)](https://github.com/zasdfgbnm/FlashFormulaEditor) - Formula editor made in Adobe Flex.

#### Text

* [Linkify-as3 ![GitHub Repo Stars](https://img.shields.io/github/stars/CodeCatalyst/linkify-as3) ![GitHub last commit](https://img.shields.io/github/last-commit/CodeCatalyst/linkify-as3)](https://github.com/CodeCatalyst/linkify-as3) - Convert URLs, e-mail addresses, phone numbers, into clickable links.
* [AS3hyphenation ![GitHub Repo Stars](https://img.shields.io/github/stars/gka/as3hyphenation) ![GitHub last commit](https://img.shields.io/github/last-commit/gka/as3hyphenation)](https://github.com/gka/as3hyphenation) - Port of the Javascript text hyphenation library Hyphenator.js.

## Runtimes

#### Emulators

* [NES Emulator ![GitHub Repo Stars](https://img.shields.io/github/stars/nesbox/emulator) ![GitHub last commit](https://img.shields.io/github/last-commit/nesbox/emulator)](https://github.com/nesbox/emulator) - Emulator of NES, Super Nintendo, Sega Mega Drive, GameBoy video consoles.
* [Commodore 64 Emulator ![GitHub Repo Stars](https://img.shields.io/github/stars/claus/fc64) ![GitHub last commit](https://img.shields.io/github/last-commit/claus/fc64)](https://github.com/claus/fc64) - A low level Commodore 64 emulator written in Actionscript 3.
* [8080 Emulator ![GitHub Repo Stars](https://img.shields.io/github/stars/ozipi/As3_SpaceInvaders_Emulator) ![GitHub last commit](https://img.shields.io/github/last-commit/ozipi/As3_SpaceInvaders_Emulator)](https://github.com/ozipi/As3_SpaceInvaders_Emulator) - An actionscript 3 space invaders emulator based on the intel 8080 processor.
* [8-bit VM ![GitHub Repo Stars](https://img.shields.io/github/stars/OutOfTheVoid/AS3-8-bit-VM) ![GitHub last commit](https://img.shields.io/github/last-commit/OutOfTheVoid/AS3-8-bit-VM)](https://github.com/OutOfTheVoid/AS3-8-bit-VM) - An eight bit virtual machine written in actionscript.

#### Interpreters

* [JS ![GitHub Repo Stars](https://img.shields.io/github/stars/theturtle32/RhinoAS3) ![GitHub last commit](https://img.shields.io/github/last-commit/theturtle32/RhinoAS3)](https://github.com/theturtle32/RhinoAS3) - RhinoJS, Port of Mozilla's Rhino JavaScript interpreter.
* [Simple JS ![GitHub Repo Stars](https://img.shields.io/github/stars/sixsided/Simplified-JavaScript-Interpreter) ![GitHub last commit](https://img.shields.io/github/last-commit/sixsided/Simplified-JavaScript-Interpreter)](https://github.com/sixsided/Simplified-JavaScript-Interpreter) - AS3-based Javascript interpreter.
* [MIL ![GitHub Repo Stars](https://img.shields.io/github/stars/ser1zw/MIL) ![GitHub last commit](https://img.shields.io/github/last-commit/ser1zw/MIL)](https://github.com/ser1zw/MIL) - A MIL language VM and interpreter written in ActionScript.
* [TALES ![GitHub Repo Stars](https://img.shields.io/github/stars/oaubert/tales4as) ![GitHub last commit](https://img.shields.io/github/last-commit/oaubert/tales4as)](https://github.com/oaubert/tales4as) - TALES interpreter for ActionScript.
* [Scheme ![GitHub Repo Stars](https://img.shields.io/github/stars/hrundik/fScheme) ![GitHub last commit](https://img.shields.io/github/last-commit/hrundik/fScheme)](https://github.com/hrundik/fScheme) - Scheme interpreter in ActionScript.
* [Lisp ![GitHub Repo Stars](https://img.shields.io/github/stars/rzubek/as_lisp) ![GitHub last commit](https://img.shields.io/github/last-commit/rzubek/as_lisp)](https://github.com/rzubek/as_lisp) - Lisp dialect written in Actionscript, with compiler and bytecode interpreter.
* [Lisp Compiler ![GitHub Repo Stars](https://img.shields.io/github/stars/aemoncannon/las3r) ![GitHub last commit](https://img.shields.io/github/last-commit/aemoncannon/las3r)](https://github.com/aemoncannon/las3r) - A lisp compiler for the AVM2.
* [CannonML ![GitHub Repo Stars](https://img.shields.io/github/stars/abiyasa/cannonml_as3) ![GitHub last commit](https://img.shields.io/github/last-commit/abiyasa/cannonml_as3)](https://github.com/abiyasa/cannonml_as3) - keim's CannonML (shmup scripting language) interpreter.

## AIR Native Extensions

#### Audio ANE
* [SongPicker ![GitHub Repo Stars](https://img.shields.io/github/stars/richpixel/SongPickerANE) ![GitHub last commit](https://img.shields.io/github/last-commit/richpixel/SongPickerANE)](https://github.com/richpixel/SongPickerANE) - A song picker/player ANE for iOS and Android.
* [SilentSwitch ![GitHub Repo Stars](https://img.shields.io/github/stars/StickSports/ANE-Silent-Switch) ![GitHub last commit](https://img.shields.io/github/last-commit/StickSports/ANE-Silent-Switch)](https://github.com/StickSports/ANE-Silent-Switch) - ANE for iOS to mute sounds if the hardware silent switch is on.
* [VolumePro ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/VolumePro-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/VolumePro-ANE)](https://github.com/myflashlab/VolumePro-ANE) - Control native music stream volume and you can listen to the volume changes.
* [SystemVolume ![GitHub Repo Stars](https://img.shields.io/github/stars/nweber/SystemVolumeNativeExtension) ![GitHub last commit](https://img.shields.io/github/last-commit/nweber/SystemVolumeNativeExtension)](https://github.com/nweber/SystemVolumeNativeExtension) - Interact with the system volume for iOS and Android devices.

#### Multimedia ANE
* [WebView (Tuarua) ![GitHub Repo Stars](https://img.shields.io/github/stars/tuarua/WebViewANE) ![GitHub last commit](https://img.shields.io/github/last-commit/tuarua/WebViewANE)](https://github.com/tuarua/WebViewANE) - Modern WebView for OSX 10.10+, Windows Desktop, iOS 9.0+ and Android 21+. Uses CEF (Chromium Embedded Framework) on Windows, WKWebView on iOS/OSX, and WebView on Android.
* [WebView (FlashLab) ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/webView-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/webView-ANE)](https://github.com/myflashlab/webView-ANE) - Replacement for StageWebView, allows calling Javascript functions from AIR.
* [AVANE ![GitHub Repo Stars](https://img.shields.io/github/stars/tuarua/AVANE) ![GitHub last commit](https://img.shields.io/github/last-commit/tuarua/AVANE)](https://github.com/tuarua/AVANE) - For building video encoding applications using FFmpeg.
* [PDF ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/PDF-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/PDF-ANE)](https://github.com/myflashlab/PDF-ANE) - Lets you open PDF files from your AIR mobile apps. Supported on Android and iOS.
* [VideoPlayer ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/videoPlayer-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/videoPlayer-ANE)](https://github.com/myflashlab/videoPlayer-ANE) - Play video files in Android or iOS native video player.
* [SurfaceVideoPlayer ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/surfaceVideoPlayer-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/surfaceVideoPlayer-ANE)](https://github.com/myflashlab/surfaceVideoPlayer-ANE) - SurfacePlayer ANE helps you play video files inside your air mobile projects.
* [Speech ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/speech-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/speech-ANE)](https://github.com/myflashlab/speech-ANE) - Convert strings to voice files and vice versa fully in the background.
* [MyAR ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/AR-ANE-Samples) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/AR-ANE-Samples)](https://github.com/myflashlab/AR-ANE-Samples) - AR ANE supporting Android and iOS 64-bit based on Metaio's SDK.
* [QR-zbar ![GitHub Repo Stars](https://img.shields.io/github/stars/saumitrabhave/qr-zbar-ane) ![GitHub last commit](https://img.shields.io/github/last-commit/saumitrabhave/qr-zbar-ane)](https://github.com/saumitrabhave/qr-zbar-ane) - ANE for QR Code Reader.
* [Barcode ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/barcode-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/barcode-ANE)](https://github.com/myflashlab/barcode-ANE) - Scan almost any barcode type with this super fast barcode scanner ANE.
* [Bullet ![GitHub Repo Stars](https://img.shields.io/github/stars/mziwisky/bullet-ane) ![GitHub last commit](https://img.shields.io/github/last-commit/mziwisky/bullet-ane)](https://github.com/mziwisky/bullet-ane) - Bullet physics simulation library.

#### File System ANE
* [FileChooser ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/fileChooser-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/fileChooser-ANE)](https://github.com/myflashlab/fileChooser-ANE) - Enable users to select a file from the device filesystem.
* [ZipManager ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/zipManager-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/zipManager-ANE)](https://github.com/myflashlab/zipManager-ANE) - Zip or unzip large zip archives super fast using native process on Android and iOS.
* [Spotlight ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/Spotlight-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/Spotlight-ANE)](https://github.com/myflashlab/Spotlight-ANE) - Integrate with iOS 9 Spotlight Search, to index search items and user generated content.

#### Networking ANE
* [Firebase ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/Firebase-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/Firebase-ANE)](https://github.com/myflashlab/Firebase-ANE) - API for Google Firebase on Android and iOS with 100% identical ActionScript API.
* [DownloadManager ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/downloadManager-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/downloadManager-ANE)](https://github.com/myflashlab/downloadManager-ANE) - Download large data files with pause/resume support.
* [BitTorrent ![GitHub Repo Stars](https://img.shields.io/github/stars/tuarua/BitTorrentANE) ![GitHub last commit](https://img.shields.io/github/last-commit/tuarua/BitTorrentANE)](https://github.com/tuarua/BitTorrentANE) - For building BitTorrent enabled applications.

#### Hardware ANE
* [Bluetooth ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/bluetooth-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/bluetooth-ANE)](https://github.com/myflashlab/bluetooth-ANE) - Scan for other devices, connect to and pair with them and transfer data between them.
* [GPS ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/GPS-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/GPS-ANE)](https://github.com/myflashlab/GPS-ANE) - Get current device GPS location as fast as possible by automatically checking the best available provider.
* [GoogleVR ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/GoogleVR-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/GoogleVR-ANE)](https://github.com/myflashlab/GoogleVR-ANE) - Google Virtual Reality SDK available to AIR developers.
* [Joystick-ANE ![GitHub Repo Stars](https://img.shields.io/github/stars/StackAndHeap/joystick-ane) ![GitHub last commit](https://img.shields.io/github/last-commit/StackAndHeap/joystick-ane)](https://github.com/StackAndHeap/joystick-ane) - ANE Joystick Library.
* [AIRControl ![GitHub Repo Stars](https://img.shields.io/github/stars/AlexanderOMara/AIRControl) ![GitHub last commit](https://img.shields.io/github/last-commit/AlexanderOMara/AIRControl)](https://github.com/AlexanderOMara/AIRControl) - Adobe AIR Game Controller ANE.
* [AIROUYAController ![GitHub Repo Stars](https://img.shields.io/github/stars/gaslightgames/AIROUYAController) ![GitHub last commit](https://img.shields.io/github/last-commit/gaslightgames/AIROUYAController)](https://github.com/gaslightgames/AIROUYAController) - ANE for the OUYA Controller.
* [AIRKinectv2 ![GitHub Repo Stars](https://img.shields.io/github/stars/Tastenkunst/AIRKinectv2) ![GitHub last commit](https://img.shields.io/github/last-commit/Tastenkunst/AIRKinectv2)](https://github.com/Tastenkunst/AIRKinectv2) - ANE for Microsoft Kinect v2 for Windows SDK.
* [Serial/MIDI/DMX ![GitHub Repo Stars](https://img.shields.io/github/stars/benkuper/AIR-NativeExtensions) ![GitHub last commit](https://img.shields.io/github/last-commit/benkuper/AIR-NativeExtensions)](https://github.com/benkuper/AIR-NativeExtensions) - AIRBonjour, NativeSerial, NativeDMXController, NativeMIDI, VirtualMIDI, ExtendedMouse.
* [LeapMotionAS3 ![GitHub Repo Stars](https://img.shields.io/github/stars/logotype/LeapMotionAS3) ![GitHub last commit](https://img.shields.io/github/last-commit/logotype/LeapMotionAS3)](https://github.com/logotype/LeapMotionAS3) - ANE for LeapMotion sensor (provides Gestures, Image, Skeleton/Bone @ 210 FPS).

#### System ANE
* [TaskbarProgress ![GitHub Repo Stars](https://img.shields.io/github/stars/tuarua/TaskbarProgressANE) ![GitHub last commit](https://img.shields.io/github/last-commit/tuarua/TaskbarProgressANE)](https://github.com/tuarua/TaskbarProgressANE) - Display taskbar progress on OSX & Windows 7/8/10 .
* [DesktopToast ![GitHub Repo Stars](https://img.shields.io/github/stars/tuarua/DesktopToastANE) ![GitHub last commit](https://img.shields.io/github/last-commit/tuarua/DesktopToastANE)](https://github.com/tuarua/DesktopToastANE) - Display interactive toast notifications in Windows 8/10 and OSX.
* [AlarmManager ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/alarmManager-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/alarmManager-ANE)](https://github.com/myflashlab/alarmManager-ANE) - Run a scheduled task even if your AIR app is closed.
* [InAppPayments ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/inAppPayments-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/inAppPayments-ANE)](https://github.com/myflashlab/inAppPayments-ANE) - Identical in-app-billing and in-app-purchase ANE for Android and iOS.
* [PermissionCheck ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/PermissionCheck-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/PermissionCheck-ANE)](https://github.com/myflashlab/PermissionCheck-ANE) - Check and request for permissions in your Adobe Air app.
* [RateMe ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/RateMe-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/RateMe-ANE)](https://github.com/myflashlab/RateMe-ANE) - Ask your users to rate your app in the most efficient way.
* [Statusbar ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/Statusbar-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/Statusbar-ANE)](https://github.com/myflashlab/Statusbar-ANE) - Control the Statusbar in your AIR apps in runtime.
* [Badge ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/Badge-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/Badge-ANE)](https://github.com/myflashlab/Badge-ANE) - Control the iOS badge value.
* [WinDebug](http://www.henke37.cjb.net/windebug/) - Windows ANE to control applications, windows, memory, breakpoints, metadata, registry, etc.
* [Can-Open-URL ![GitHub Repo Stars](https://img.shields.io/github/stars/StickSports/ANE-Can-Open-URL) ![GitHub last commit](https://img.shields.io/github/last-commit/StickSports/ANE-Can-Open-URL)](https://github.com/StickSports/ANE-Can-Open-URL) - ANE for iOS to detect whether an app is installed to handle a specific URL scheme.

#### Social ANE
* [Facebook ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/facebook-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/facebook-ANE)](https://github.com/myflashlab/facebook-ANE) - Integrate Facebook SDK into your AIR apps.
* [GCM ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/GCM-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/GCM-ANE)](https://github.com/myflashlab/GCM-ANE) - Use Google Cloud messaging on Android and iOS. .
* [Baidu ![GitHub Repo Stars](https://img.shields.io/github/stars/lilili87222/baidu-ane-for-ios-and-android) ![GitHub last commit](https://img.shields.io/github/last-commit/lilili87222/baidu-ane-for-ios-and-android)](https://github.com/lilili87222/baidu-ane-for-ios-and-android) - Baidu ANE for for iOS and Android.

#### Analytics ANE
* [Admob ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/Admob-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/Admob-ANE)](https://github.com/myflashlab/Admob-ANE) - Admob ANE.
* [GameServices ![GitHub Repo Stars](https://img.shields.io/github/stars/myflashlab/GameServices-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/myflashlab/GameServices-ANE)](https://github.com/myflashlab/GameServices-ANE) - Google Game Services for Android+iOS.
* [MoPub ![GitHub Repo Stars](https://img.shields.io/github/stars/StickSports/MoPub-ANE) ![GitHub last commit](https://img.shields.io/github/last-commit/StickSports/MoPub-ANE)](https://github.com/StickSports/MoPub-ANE) - ANE for MoPub advertising.
* [UMAnalytics ![GitHub Repo Stars](https://img.shields.io/github/stars/ColerYu/ANE-UMAnalytics) ![GitHub last commit](https://img.shields.io/github/last-commit/ColerYu/ANE-UMAnalytics)](https://github.com/ColerYu/ANE-UMAnalytics) - ANE for UMAnalytics SDK (iOS and Android).
* [Localytics ![GitHub Repo Stars](https://img.shields.io/github/stars/randori/ANE-Localytics) ![GitHub last commit](https://img.shields.io/github/last-commit/randori/ANE-Localytics)](https://github.com/randori/ANE-Localytics) - Localytics analytics for mobile Adobe AIR applications (iOS & Android).
* [Testflight ![GitHub Repo Stars](https://img.shields.io/github/stars/jlopez/ane-testflight) ![GitHub last commit](https://img.shields.io/github/last-commit/jlopez/ane-testflight)](https://github.com/jlopez/ane-testflight) - Apple TestFlight ANE.
* [HockeyApp ![GitHub Repo Stars](https://img.shields.io/github/stars/airext/hockeyapp) ![GitHub last commit](https://img.shields.io/github/last-commit/airext/hockeyapp)](https://github.com/airext/hockeyapp) - ANE for the Hockeyapp testing & distribute platform.
* [Chartboost ![GitHub Repo Stars](https://img.shields.io/github/stars/ChartBoost/air) ![GitHub last commit](https://img.shields.io/github/last-commit/ChartBoost/air)](https://github.com/ChartBoost/air) - ANE for the Chartboost SDK with compile scripts.
* [Devtodev ![GitHub Repo Stars](https://img.shields.io/github/stars/devtodev-analytics/air-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/devtodev-analytics/air-sdk)](https://github.com/devtodev-analytics/air-sdk) - A full-cycle analytics solution for game developers.
