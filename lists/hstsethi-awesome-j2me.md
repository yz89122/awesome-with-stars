# Awesome J2ME [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="https://github.com/hstsethi/awesome-j2me/raw/main/j2me-logo.jpg" align="right" width="100">](https://www.oracle.com/java/technologies/javameoverview.html)


> An awesome list about Java platform Micro edition[(J2ME)](https://en.wikipedia.org/wiki/Java_Platform,_Micro_Edition). Documentation, academic papers, tutorials, communities, IDEs, SDKs, emulators, apps, video games. J2ME is a Java specification designed for old keypad phones and PDAs. MIDP is used to create Midlets, which have `.jad` or `.jar` extension, and run on platforms like old keypad phones, Symbian and PDAs. MIDP is supported till Java ME SDK 3.4.

<!--lint disable double-link-->
Please give it a star(⭐) to raise awareness about J2ME community, and support the development of this project. Read about history of Awesome J2ME in <a href="https://hstsethi.vercel.app/posts/programming/awesome-j2me">this blog post</a>. Also check out [Awesome Symbian ![GitHub Repo Stars](https://img.shields.io/github/stars/hstsethi/awesome-symbian) ![GitHub last commit](https://img.shields.io/github/last-commit/hstsethi/awesome-symbian)](https://github.com/hstsethi/awesome-symbian).

<!--lint disable double-link-->
Proud to be featured in [Awesome ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome)](https://github.com/sindresorhus/awesome), [Hackclub](https://retrospect.hackclub.com/j2me), [Awesome Java ![GitHub Repo Stars](https://img.shields.io/github/stars/akullpp/awesome-java) ![GitHub last commit](https://img.shields.io/github/last-commit/akullpp/awesome-java)](https://github.com/akullpp/awesome-java) and more.

## Contents

- [Communities](#communities)
- [Development](#development)
   - [IDEs](#ides)
   - [SDKs](#sdks)
- [Emulators](#emulators)
- [Hardware](#hardware)
- [Native Software](#native-software)
   - [Apps](#apps)
   - [Video Games](#video-games)
- [Related Projects](#related-projects)
- [Reverse Engineering](#reverse-engineering)
   - [Decompilers](#decompilers)
- [Tutorials](#tutorials)
    - [Academic Articles](#academic-articles)



## Communities

- [HackClub Retrospect J2ME](https://retrospect.hackclub.com/j2me) - J2ME development contest by Hackclub. Features Awesome J2ME in its resources section.
- [Kahvibreak Discord](https://discord.gg/8TgbHAG) - Discord community focused on preserving J2ME games.
- [Ketai Wiki](https://keitaiwiki.com/wiki/KeitaiWiki) - Wiki dedicated to cataloging games from Japanese Feature Phones (keitai), pre-Android/iPhone mobile devices released in Japan.
- [r/J2MEGaming](https://reddit.com/r/j2megaming) - Reddit community for J2ME, Symbian, and related platforms.



## Development

- [Cibyl ![GitHub Repo Stars](https://img.shields.io/github/stars/SimonKagstrom/cibyl) ![GitHub last commit](https://img.shields.io/github/last-commit/SimonKagstrom/cibyl)](https://github.com/SimonKagstrom/cibyl) - Cibyl is an environment to compile and run programs written in C, Objective-C, C++ and possibly Fortran on J2ME phones.
- [J2ME Docs](https://nikita36078.github.io/J2ME_Docs) - Documentation for J2ME and some vendor-specific APIs.
- [NN JSON ![GitHub Repo Stars](https://img.shields.io/github/stars/shinovon/NNJSON) ![GitHub last commit](https://img.shields.io/github/last-commit/shinovon/NNJSON)](https://github.com/shinovon/NNJSON) - JSON parser for CLDC 1.1.
- [NN JSON CLDC 1.0 ![GitHub Repo Stars](https://img.shields.io/github/stars/gtrxAC/discord-j2me) ![GitHub last commit](https://img.shields.io/github/last-commit/gtrxAC/discord-j2me)](https://github.com/gtrxAC/discord-j2me/tree/main/src/cc/nnproject/json) - Modified version of NN JSON for CLDC 1.0.
- [J2ME Game Script Engine](https://j2megamescript.sourceforge.net/) - A lightweight script interpreter for building flexible J2ME games, with a BASIC-like scripting language. Runs on J2SE/J2ME/Win C++ platforms; ideal for game rapid prototyping and customization.

### IDEs

- [Eclipse](https://archive.eclipse.org/eclipse/downloads) - Archive of all versions of Eclipse IDE.
- [NetBeans 6.1](https://archive.org/download/netbeans-olds/6.1) - Mobility-pack, normal NetBeans and Java-ME SDK, all of them are required to set up MIDP development environment.

### SDKs

- [Extra Transit Mobile Interaction Suite](http://web.archive.org/web/20070210202710/http://www.extransit.com) - IDE and SDK for J2ME specializing in the development of internet-based applications.
- [Hecl](https://www.hecl.org) - A mobile scripting language based on Java, capable of running on J2ME-based devices.
- [J2ME Polish ![GitHub Repo Stars](https://img.shields.io/github/stars/Enough-Software/j2mepolish) ![GitHub last commit](https://img.shields.io/github/last-commit/Enough-Software/j2mepolish)](https://github.com/Enough-Software/j2mepolish) - Open source, Ant-based build tool for J2ME that supports building for multiple platforms including Blackberry and Symbian.
- [MBooster](https://web.archive.org/web/20070314004015/http://innaworks.com/mBooster.html) - Optimizing suite for .jar files. Compresses images, audio, zip files, and optimizes API calls.
- [Micro Code](https://web.archive.org/web/20061225061546/http://j2me-device-db.sourceforge.net/pmwiki/index.php?n=Main.HomePage) - Cross-device development framework for J2ME. Supports more than 100 devices.
- [Sony Ericsson](https://archive.org/details/semc_java_me_cldc_sdk.2-5-0-6) - Supports various Sony Ericsson devices. Can run Mascot capsule software too.
- [Soap ME](https://dl.acm.org/doi/abs/10.1145/1462802.1462805) - SOAP-compliant Web service container that supports dynamic development.
- [Sun Java Me SDK](https://www.oracle.com/java/technologies/javame-sdk/java-me-sdk-v30.html) [mirror](https://archive.org/details/sun_java_me_sdk-3_0-win) - Successor to WTK that integrates CLDC/MIDP development.
- [Sun WTK](https://www.oracle.com/java/technologies/java-archive-downloads-javame-downloads.html#sun_java_wireless_toolkit-2.5.2_01) - Official J2ME SDK by Sun.



## Emulators

- [FreeJ2ME ![GitHub Repo Stars](https://img.shields.io/github/stars/hex007/freej2me) ![GitHub last commit](https://img.shields.io/github/last-commit/hex007/freej2me)](https://github.com/hex007/freej2me) - J2ME emulator with LibRetro, AWT and SDL2 frontends.
- [FreeJ2ME Plus ![GitHub Repo Stars](https://img.shields.io/github/stars/TASEmulators/freej2me-plus) ![GitHub last commit](https://img.shields.io/github/last-commit/TASEmulators/freej2me-plus)](https://github.com/TASEmulators/freej2me-plus) - Active fork of FreeJ2ME.
- [J2ME Loader ![GitHub Repo Stars](https://img.shields.io/github/stars/nikita36078/J2ME-Loader) ![GitHub last commit](https://img.shields.io/github/last-commit/nikita36078/J2ME-Loader)](https://github.com/nikita36078/J2ME-Loader) - J2ME emulator for Android.
- [JL Mod ![GitHub Repo Stars](https://img.shields.io/github/stars/woesss/JL-Mod) ![GitHub last commit](https://img.shields.io/github/last-commit/woesss/JL-Mod)](https://github.com/woesss/JL-Mod) - Fork of J2ME loader with Mascot capsule v3 support.
- [JS2 J2ME ![GitHub Repo Stars](https://img.shields.io/github/stars/szatkus/js2me) ![GitHub last commit](https://img.shields.io/github/last-commit/szatkus/js2me)](https://github.com/szatkus/js2me) - J2ME emulator for Firefox OS.
- [KEmulator nnmod ![GitHub Repo Stars](https://img.shields.io/github/stars/shinovon/KEmulator) ![GitHub last commit](https://img.shields.io/github/last-commit/shinovon/KEmulator)](https://github.com/shinovon/KEmulator) - Open source J2ME emulator in Java, based on KEmulator 1.0.3.
- [PSPKvm](https://sourceforge.net/projects/pspkvm/) - J2ME emulator for PSP.
- [SquirrelJME ![GitHub Repo Stars](https://img.shields.io/github/stars/squirreljme/squirreljme) ![GitHub last commit](https://img.shields.io/github/last-commit/squirreljme/squirreljme)](https://github.com/squirreljme/squirreljme) - Java ME 8 Virtual Machine for embedded and Internet of Things devices.



## Hardware

- [Mobile Phone Museum](https://mobilephonemuseum.com/about) - Registered charity and museum for mobile phones. Currently has over 2,800 models over 250 brands.


## Native Software

### Apps

- [Discord J2ME ![GitHub Repo Stars](https://img.shields.io/github/stars/gtrxAC/discord-j2me) ![GitHub last commit](https://img.shields.io/github/last-commit/gtrxAC/discord-j2me)](https://github.com/gtrxAC/discord-j2me) - Unofficial Discord client for J2ME. Utilizes a proxy server for HTTP and gateway connections.
- [Hotpants ![GitHub Repo Stars](https://img.shields.io/github/stars/baumschubser/hotpants) ![GitHub last commit](https://img.shields.io/github/last-commit/baumschubser/hotpants)](https://github.com/baumschubser/hotpants/) - HOTP/TOTP client.
- [J2ME Emu Software](https://archive.org/details/j2me-emuSoftware) - Executables, source code of various emulators that run on J2ME.
- [Jtube ![GitHub Repo Stars](https://img.shields.io/github/stars/shinovon/JTube) ![GitHub last commit](https://img.shields.io/github/last-commit/shinovon/JTube)](https://github.com/shinovon/JTube) - YouTube client based on Invidious API.
- [MeBoy](http://arktos.se/meboy) - Supports emulating GBC with sound, color, and save states.
- [Telegram Micro ![GitHub Repo Stars](https://img.shields.io/github/stars/faissaloo/telegram-micro) ![GitHub last commit](https://img.shields.io/github/last-commit/faissaloo/telegram-micro)](https://github.com/faissaloo/telegram-micro) - Telegram client.
- [VK4ME ![GitHub Repo Stars](https://img.shields.io/github/stars/VK4ME/client) ![GitHub last commit](https://img.shields.io/github/last-commit/VK4ME/client)](https://github.com/VK4ME/client)  - Unofficial client for Russian social network VK for devices supporting CLDC 1.1 and MIDP 2.0.
- [UPI 123PAY](https://www.npci.org.in/what-we-do/upi-123pay/product-overview) - Official Unified Payment Interface(UPI)payments solution for feature phones by NPCI. Internet not required. Supported only in India.

### Video Games

- [Gravity Defied CPP ![GitHub Repo Stars](https://img.shields.io/github/stars/rgimad/gravity_defied_cpp) ![GitHub last commit](https://img.shields.io/github/last-commit/rgimad/gravity_defied_cpp)](https://github.com/rgimad/gravity_defied_cpp) - C++, SDL2 port of J2ME game of the same name.
- [Kahvibreak](https://bluemaxima.org/kahvibreak) - Collection of J2ME games.
- [Moby Games](https://www.mobygames.com/platform/j2me) - Database of J2ME games with links to official stores.
- [The "New" J2ME software archive](https://archive.org/details/96x65pixels_j2me) - 74GB+, sorted collection of J2ME games.
- [Nowhere Dialogues](https://gist.github.com/hstsethi/d4ef0c9f0710e5b713d1beb2ff93a1ce) - Dialogues from a Nowhere, a 2007 J2ME game, with character names reverse engineered.
- [J2ME Games at MyAbandonware](https://www.myabandonware.com/browse/platform/j2me) - Curated catalog of abandoned J2ME games with direct downloads.

## Related Projects

- [Awesome Symbian ![GitHub Repo Stars](https://img.shields.io/github/stars/hstsethi/awesome-symbian) ![GitHub last commit](https://img.shields.io/github/last-commit/hstsethi/awesome-symbian)](https://github.com/hstsethi/awesome-symbian) - An Awesome List about everything related to Symbian, a discontinued mobile OS for ARM popular in the early 2000s. It supports J2ME applications.
- [Cell Phone Game Preservation Wiki](https://cellphonegamespreservation.miraheze.org/wiki/Main_Page) - Wiki dedicated to phone preservation, including emulation and game dumps.
- [J2ME Fandom](https://j2me.fandom.com/wiki) - Wiki of everything related to J2ME.
- [J2ME Preservation ![GitHub Repo Stars](https://img.shields.io/github/stars/j2me-preservation/j2me-preservation) ![GitHub last commit](https://img.shields.io/github/last-commit/j2me-preservation/j2me-preservation)](https://github.com/j2me-preservation/j2me-preservation) - Archive of various J2ME software.



## Reverse Engineering

- [PyLng ![GitHub Repo Stars](https://img.shields.io/github/stars/CakesTwix/pylng) ![GitHub last commit](https://img.shields.io/github/last-commit/CakesTwix/pylng)](https://github.com/CakesTwix/pylng) - HandyGames .lng file parser written in Python.

### Decompilers

- [Fernflower ![GitHub Repo Stars](https://img.shields.io/github/stars/fesh0r/fernflower) ![GitHub last commit](https://img.shields.io/github/last-commit/fesh0r/fernflower)](https://github.com/fesh0r/fernflower) - Analytical Java decompiler by JetBrains.
- [Jd Decompiler](https://java-decompiler.github.io) - Java decompiler with support for Java 5 and later.
- [Javadecompilers.com](https://www.javadecompilers.com) - Online Java decompiler that supports various decompilers.
- [Recaf ![GitHub Repo Stars](https://img.shields.io/github/stars/Col-E/Recaf) ![GitHub last commit](https://img.shields.io/github/last-commit/Col-E/Recaf)](https://github.com/Col-E/Recaf) - Bytecode editor that supports multiple decompilers.
- [Vineflower ![GitHub Repo Stars](https://img.shields.io/github/stars/vineflower/vineflower) ![GitHub last commit](https://img.shields.io/github/last-commit/vineflower/vineflower)](https://github.com/vineflower/vineflower) - Fork of Fernflower decompiler with improved output quality.



## Tutorials

- [J2ME In Nutshell](https://www.oreilly.com/library/view/j2me-in-a/059600253X) - "Solid, no-nonsense reference to the 'alphabet soup' of micro edition programming, covering the CLDC, CDC, KVM and more."
- [Revive Nokia N95 ![GitHub Repo Stars](https://img.shields.io/github/stars/domib97/revive.nokia.n95) ![GitHub last commit](https://img.shields.io/github/last-commit/domib97/revive.nokia.n95)](https://github.com/domib97/revive.nokia.n95) - A quick guide to revive the legacy Nokia N95 and develop for it.

### Academic Articles

- [A Testing Method for Java ME Software](https://doi.org/10.1109/EmbeddedCom-ScalCom.2009.21) - Reviews various unit testing methods for J2ME and introduces a custom one for NetBeans.
- [Automated GUI Testing for J2ME Software Based on FSM](https://ieeexplore.ieee.org/abstract/document/5341641) - Introduces a technique for automating tests of LCDUI J2ME applications based on FSM.
- [Developing Jini applications using J2ME technology](https://dl.acm.org/doi/abs/10.5555/507165) - Book on Developing networking applications using Jini and J2ME.
- [Distributed Gaming using J2ME and XML](https://www.cs.sjsu.edu/faculty/pollett/masters/Semesters/Fall03/Rekha/CS297Report.pdf) - Writeup on creating a cross-platform using Oracle XML database for gaming.
- [Experiences of Implementing BitTorrent on Java ME Platform](https://ieeexplore.ieee.org/abstract/document/4446557) - Detailed writeup on implementing BitTorrent client on Nokia S40. Includes methodology and results.
