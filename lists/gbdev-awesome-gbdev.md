# ![GameboyIcon](http://i.imgur.com/ROUq7NT.gif) Awesome Game Boy Development

#### [Join us on Discord](https://discord.gg/tKGMPNr) [![Discord Badge](https://img.shields.io/badge/dynamic/json.svg?label=chat&colorB=green&suffix=%20online&query=presence_count&uri=https://discordapp.com/api/guilds/303217943234215948/widget.json)](https://discord.gg/tKGMPNr)

A curated list of awesome Game Boy (Color) Development resources, tools, docs, related projects and open-source ROMs. Inspired by the [awesome ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome)](https://github.com/sindresorhus/awesome) list thing.

You can find a (way cooler) web version of this list [here](https://gbdev.github.io/resources).

## Contents

- [Introduction](#introduction)
  - [Disambiguation](#disambiguation)
- [Community](#community)
- [Documentation](#documentation)
  - [Misc](#misc)
  - [Opcodes](#opcodes)
  - [Game Boy Color](#game-boy-color)
  - [Hardware](#hardware)
  - [Peripherals](#peripherals)
  - [Cartridges](#cartridges)
- [Emulator Development](#emulator-development)
  - [Testing](#testing)
- [Software Development](#software-development)
  - [Assemblers](#assemblers)
  - [Compilers](#compilers)
    - [Experimental/Proof of Concepts](#experimentalproof-of-concepts)
  - [Emulators](#emulators)
  - [Tools](#tools)
    - [Engines](#engines)
    - [Development tools](#development-tools)
    - [Graphics utilities](#graphics-utilities)
    - [Hardware and ROM utilities](#hardware-and-rom-utilities)
    - [Music drivers and trackers](#music-drivers-and-trackers)
- [Programming](#programming)
  - [ASM](#asm)
    - [Sources](#sources)
    - [Timings](#timings)
    - [Boilerplates](#boilerplates)
    - [Syntax highlighting packages](#syntax-highlighting-packages)
  - [C](#c)
- [Homebrews](#homebrews)
  - [ASM](#asm-1)
  - [C](#c-1)
  - [GB Studio](#gb-studio) 
  - [Demos](#demos)
- [Reverse Engineering](#reverse-engineering)
  - [Game Disassemblies](#game-disassemblies)
- [Game Boy Camera](#game-boy-camera)
  - [Retrieving Images](#retrieving-images)
  - [Changing the camera's behavior](#changing-the-cameras-behavior)
  - [Post-processing](#post-processing)
- [Related projects](#related-projects)
  - [Directories](#directories)
  - [Websites](#websites)
- [About](#about)
  - [Contribute](#contribute)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)
  - [Sponsors](#sponsors)

## Introduction

- [The Game Boy, a hardware autopsy](https://www.youtube.com/playlist?list=PLu3xpmdUP-GRDp8tknpXC_Y4RUQtMMqEu)
- [The Ultimate Game Boy Talk](https://media.ccc.de/v/33c3-8029-the_ultimate_game_boy_talk)


> ### Disambiguation
>
> #### Game Boy Advance
>
> Game Boy Advance development is covered by another project, the [awesome-gbadev ![GitHub Repo Stars](https://img.shields.io/github/stars/gbdev/awesome-gbadev) ![GitHub last commit](https://img.shields.io/github/last-commit/gbdev/awesome-gbadev)](https://github.com/gbdev/awesome-gbadev) list.
> GBA, however, *can run* GB/GBC games. It does so in a slightly different way compared to native hardware: this is covered in the Emulator Development section of this list.
>
> #### Game Boy Color and Super Game Boy
>
> This list is focused on the original *Game Boy* (GB or DMG, 1989), the *Game Boy Color* (GBC or CGB) and the *Super Game Boy* (SGB) are very similar systems, with a few important distinctions, such as:
>
>- Different hardware specifications;
>- Specific hardware and software features;
>- Specific registers;
>- Specific bugs, quirks and exploitable behaviours.
>
>If you aim to develop your software for SGB or GBC, or you want to know how it runs on the other systems, you may want to take advantage and adapt to these differences, check the [Game Boy Color](#game-boy-color) category and look for specific references to GBC/CGB and SGB.


## Community

- [Chat channels](https://gbdev.io/chat)
- [Forum](https://gbdev.gg8.se/forums/)

## Documentation

- [**Pan Docs**](https://gbdev.github.io/pandocs/) - The single, most comprehensive technical reference to Game Boy available to the public. Corrected, updated and maintained by the community.
- [The Cycle-Accurate Game Boy Docs ![GitHub Repo Stars](https://img.shields.io/github/stars/AntonioND/giibiiadvance) ![GitHub last commit](https://img.shields.io/github/last-commit/AntonioND/giibiiadvance)](https://github.com/AntonioND/giibiiadvance/blob/master/docs/TCAGBD.pdf) - A precise documentation by AntonioND to make a cycle-accurate Game Boy emulator.
- [Complete Technical Reference](https://gekkio.fi/files/gb-docs/gbctr.pdf) - by Gekkio.
- [Game Boy Architecture: A Practical Analysis](https://www.copetti.org/writings/consoles/game-boy/) - by Rodrigo Copetti.
- [Game Boy Project Report](http://www.cs.columbia.edu/~sedwards/classes/2019/4840-spring/reports/GameBoy.pdf) - Report of an hardware [emulator ![GitHub Repo Stars](https://img.shields.io/github/stars/kitsuneh/SVGameBoy) ![GitHub last commit](https://img.shields.io/github/last-commit/kitsuneh/SVGameBoy)](https://github.com/kitsuneh/SVGameBoy) (on a Terasic DE1-SoC Board) developed as final project for the CSEE4840 Embedded Systems Design course at Columbia University.

#### Opcodes

- [gb-opcodes](https://gbdev.github.io/gb-opcodes/optables/) - Opcodes table
- [RGBDS opcodes reference](https://rgbds.gbdev.io/docs/gbz80.7) - A reference of all instructions, including short descriptions, cycle and byte counts, and explanations of flag modifications.

### Game Boy Color

- [Bootstrap ROM](https://tcrf.net/Game_Boy_Color_Bootstrap_ROM)
- [Unused Palettes](https://tcrf.net/Notes:Game_Boy_Color_Bootstrap_ROM)
- [Colorization palettes in the BIOS](https://forums.nesdev.com/viewtopic.php?p=114388&sid=c3d4ce08cfd9d9c834958d4f148750c3#p114388)
- [Boot ROM Disassembly](https://gist.github.com/drhelius/6063265)
- [GBC Hicolour notes](https://romhack.github.io/doc/gbcHiColour/) - A technical note regarding Hicolour mode trick for Game Boy Color and its realization in the GBC game “Crystalis”.

### Hardware

- [DMG Schematics](http://gbdev.gg8.se/wiki/articles/DMG_Schematics) - Hardware schematics.
- [The Game Boy Project](http://marc.rawer.de/Gameboy/Docs/GBProject.pdf) - Provides a study on the hardware and detailed constructional information for the implementation of three 8-bit bidirectional parallel ports.
- [Related custom hardware ![GitHub Repo Stars](https://img.shields.io/github/stars/Gekkio/gb-hardware) ![GitHub last commit](https://img.shields.io/github/last-commit/Gekkio/gb-hardware)](https://github.com/Gekkio/gb-hardware) - by Gekkio.
- [ESP8266 GB Dev Board ![GitHub Repo Stars](https://img.shields.io/github/stars/applefreak/esp8266-gameboy-dev-board) ![GitHub last commit](https://img.shields.io/github/last-commit/applefreak/esp8266-gameboy-dev-board)](https://github.com/applefreak/esp8266-gameboy-dev-board) - Dev board for Game Boy accessories development, powered by ESP8266.
- [ESP8266 GB Printer ![GitHub Repo Stars](https://img.shields.io/github/stars/applefreak/esp8266-gameboy-printer) ![GitHub last commit](https://img.shields.io/github/last-commit/applefreak/esp8266-gameboy-printer)](https://github.com/applefreak/esp8266-gameboy-printer) - A device that emulates the GB Printer and lets you retrieve images using WiFi.
- [fruttenboel](https://web.archive.org/web/20220628023315/https://verhoeven272.nl/fruttenboel/Gameboy/index.html) - Page with loads of information on the hardware, custom boards to interface with the console and other related projects.
- [Game Boy hardware database](https://gbhwdb.gekkio.fi/) - Data and photos of various types of Game Boy consoles.
- [dmg-schematics ![GitHub Repo Stars](https://img.shields.io/github/stars/msinger/dmg-schematics) ![GitHub last commit](https://img.shields.io/github/last-commit/msinger/dmg-schematics)](https://github.com/msinger/dmg-schematics) - Schematics and annotated overlay for the DMG-CPU B chip, extracted from die photos, made with KiCad. Also contains Electric VLSI library with layouts for some of the cells and memories.

### Peripherals

- [Dan Docs](https://shonumi.github.io/dandocs.html) - Obscure Game Boy hardware documentation.
- [Edge of Emulation](https://shonumi.github.io/articles.html), a series of articles about emulating and investigating Game Boy accessories. Also available as [technical documents ![GitHub Repo Stars](https://img.shields.io/github/stars/shonumi/gbe-plus) ![GitHub last commit](https://img.shields.io/github/last-commit/shonumi/gbe-plus)](https://github.com/shonumi/gbe-plus/tree/master/src/docs/technical) in the GBE- emulator documentation.
  - [Mobile Adapter GB](https://shonumi.github.io/articles/art14.html) - Internet connectivity and DLC on the Game Boy Color.
  - [The Game Boy Printer](https://shonumi.github.io/articles/art2.html)
  - [Pocket Sonar](https://shonumi.github.io/articles/art13.html) - A blue cart with built-in sonar hardware.
  - [Zok Zok Heroes](https://shonumi.github.io/articles/art8.html)  - Zok Zok Heroes' Full Changer, a motion-activated accessory.
  - [Infrared Madness](https://shonumi.github.io/articles/art11.html) - Infrared communication on the Game Boy Color.
  - [Game Boy 4-Player Adapter](https://shonumi.github.io/articles/art9.html) - DMG-07.
  - [Barcode Boy](https://shonumi.github.io/articles/art7.html) - The first Game Boy card-scanner.
  - [Barcode Taisen Bardigun](https://shonumi.github.io/articles/art6.html) - A late 90s DMG-GBC barcode reader.
- [DMG-07 Technical Documentation](https://raw.githubusercontent.com/shonumi/gbe-plus/master/src/docs/technical/DMG_07.txt)
- [Game Boy Camera RE ![GitHub Repo Stars](https://img.shields.io/github/stars/AntonioND/gbcam-rev-engineer) ![GitHub last commit](https://img.shields.io/github/last-commit/AntonioND/gbcam-rev-engineer)](https://github.com/AntonioND/gbcam-rev-engineer) - Documentation about GB Camera and tools used to reverse engineer it by using Arduino.
- [Creating photo realistic images with neural networks and a Gameboy Camera](http://www.pinchofintelligence.com/photorealistic-neural-network-gameboy/)
- [The Game Boy Printer](https://shonumi.github.io/articles/art2.html) - An in-depth technical document about the printer hardware, the communication protocol and the usual routine that games used for implementing the print feature.
- [Ben Heck Reverse Engineers Game Boy Printer](https://www.youtube.com/watch?v=43FfJvd-YP4) (Errata: the used thermal paper is expired, 4 colors are actually printable).
- [Arduino Game Boy Printer Emulator ![GitHub Repo Stars](https://img.shields.io/github/stars/mofosyne/arduino-gameboy-printer-emulator) ![GitHub last commit](https://img.shields.io/github/last-commit/mofosyne/arduino-gameboy-printer-emulator)](https://github.com/mofosyne/arduino-gameboy-printer-emulator) - Emulating a Game Boy Printer via the Game Boy Link cable with an Arduino.
- [Mobile Game Boy Adapter](https://bulbapedia.bulbagarden.net/wiki/Mobile_Game_Boy_Adapter)
- [GB KISS LINK MODEM](http://nectaris.tg-16.com/GB-KISS-LINK-FAQ-hudson-gameboy-nectaris.html)

### Cartridges

- [GB Flash Cartridges for Sale](https://bbbbbr.github.io/GameBoy-Flash-Carts/) - A List of available, ready-made Game Boy Flash Cartridges.
- [AntonioND's docs ![GitHub Repo Stars](https://img.shields.io/github/stars/AntonioND/giibiiadvance) ![GitHub last commit](https://img.shields.io/github/last-commit/AntonioND/giibiiadvance)](https://github.com/AntonioND/giibiiadvance/tree/master/docs) - Corrected schematics and infos on cartridge header data.
- [Gekkio's Game Boy cartridge types](http://gekkio.fi/blog/2015-02-14-mooneye-gb-gameboy-cartridge-types.html) - An overview on existing cartridge types.
- Gekkio's cartridge analysis:
  - [DMG-BEAN-02](http://gekkio.fi/blog/2015-05-18-mooneye-gb-cartridge-analysis-dmg-bean-02.html);
  - [MBC1](http://gekkio.fi/blog/2015-05-17-mooneye-gb-cartridge-analysis-fortress-of-fear.html);
  - [no MBC](http://gekkio.fi/blog/2015-02-28-mooneye-gb-cartridge-analysis-tetris.html).
- Pinout, registers descriptions and VHDL code of some cartridge types on Tauwasser's wiki:
  - [MBC1](https://wiki.tauwasser.eu/view/MBC1)
  - [MBC2](https://wiki.tauwasser.eu/view/MBC2)
  - [MMM01](https://wiki.tauwasser.eu/view/MMM01)
- [Game Boy Cartridges Schematics](http://www.devrs.com/gb/files/gb.html) - Schematics for MBC2 and MBC3 types.
- [Cartridges PCB photos](https://imgur.com/a/D5bpC)
- [MBC1+RAM+Battery cartridge Schematic](http://www.devrs.com/gb/files/mbc1.gif) - First schematics by Jeff Frohwein.
- [MBC1 and MBC2 cartridges circuits](http://fms.komkon.org/GameBoy/Tech/Carts.html) - and explanation on how these MBC bank switch and control RAM.
- [GB Rom List](CartridgeList.csv) - Navigable table of every game released with details on their cartridges.
- [Game Boy cartridge PCB photos](http://gekkio.fi/blog/2016-03-19-game-boy-cartridge-pcb-photos.html)


#### Custom cartridges

- [Emulating a GameBoy Cartridge](https://dhole.github.io/post/gameboy_cartridge_emu_1/) - Emulating the functionality of a Game Boy cartridge with the development board STM32F4.
- [Wolf](http://www.happydaze.se/wolf/) - Game Boy cartridge with co-processor.
- [Homebrew-Gameboy-Cartridge ![GitHub Repo Stars](https://img.shields.io/github/stars/dwaq/Homebrew-Gameboy-Cartridge) ![GitHub last commit](https://img.shields.io/github/last-commit/dwaq/Homebrew-Gameboy-Cartridge)](https://github.com/dwaq/Homebrew-Gameboy-Cartridge) - Eagle library, schematic, and board files for a cartridge PCB using an Atmel AT49F040 as ROM.
- [Homebrew Gameboy Color Cartridge ![GitHub Repo Stars](https://img.shields.io/github/stars/Xyl2k/Gameboy-Color-Cartridge) ![GitHub last commit](https://img.shields.io/github/last-commit/Xyl2k/Gameboy-Color-Cartridge)](https://github.com/Xyl2k/Gameboy-Color-Cartridge) - Board layout for an EEPROM powered cartridge.
- [Nekocart ![GitHub Repo Stars](https://img.shields.io/github/stars/zephray/NekoCart-GB) ![GitHub last commit](https://img.shields.io/github/last-commit/zephray/NekoCart-GB)](https://github.com/zephray/NekoCart-GB) - Open-source flash cartridge using an Xilinx CPLD as MBC5 ([Post](https://hackaday.io/project/41160-nekocart-cpld-gameboy-cartridge)).
- [Reiner Ziegler's Game Boy page](http://reinerziegler.de.mirrors.gg8.se/) - Commercial and homemade programmable cartridges and programming systems. Tutorials, wiring and schematics provided.
- [Gameboy-MBC5-MBC1-Hybrid ![GitHub Repo Stars](https://img.shields.io/github/stars/insidegadgets/Gameboy-MBC5-MBC1-Hybrid) ![GitHub last commit](https://img.shields.io/github/last-commit/insidegadgets/Gameboy-MBC5-MBC1-Hybrid)](https://github.com/insidegadgets/Gameboy-MBC5-MBC1-Hybrid) - CPLD implementation of a MBC5/MBC1 Hybrid cartridge.

#### Misc

- [Introduction to Game Boy Hacking](http://pepijndevos.nl/sha2017/workshop.pdf) - Workshop introducing basic assembly, debugging and reverse engineering.
- [GBSOUND.txt ![GitHub Repo Stars](https://img.shields.io/github/stars/bwhitman/pushpin) ![GitHub last commit](https://img.shields.io/github/last-commit/bwhitman/pushpin)](https://github.com/bwhitman/pushpin/blob/master/src/gbsound.txt) - A document detailing the Game Boy sound engine.
- [gbdev FAQs](http://www.devrs.com/gb/files/faqs.html) - Must read by Jeff Frohwein.
- [Game Boy Bootrom](http://www.neviksti.com/DMG/DMG_ROM.asm) - Commented dump of the DMG bootrom.
- [Differences between the Z80 and the gameboy's processor](http://www.z80.info/z80gboy.txt)
- [Gameboy 2BPP Graphics Format](http://www.huderlem.com/demos/gameboy2bpp.html) - Information on how the Game Boy interprets VRAM tile data to color pixels.

## Emulator Development

- [Reverse Engineering fine details of Game Boy hardware](https://www.youtube.com/watch?v=GBYwjch6oEE) - 43 minutes talk by Gekkio given at Disobey 2018 ([errata](https://gekkio.fi/blog/2018-02-05-errata-for-reverse-engineering-fine-details-of-game-boy-hardware.html)).
- [Emulation of Nintendo Game Boy ![GitHub Repo Stars](https://img.shields.io/github/stars/Baekalfen/PyBoy) ![GitHub last commit](https://img.shields.io/github/last-commit/Baekalfen/PyBoy)](https://github.com/Baekalfen/PyBoy/blob/master/PyBoy.pdf) - Overview of the Game Boy hardware with the perspective of building an emulator.
- [DMG-01](https://rylev.github.io/DMG-01/public/book/) - An educational Gameboy Emulator in Rust and a companion book explaining its development. *[Oh Boy! Creating a Game Boy Emulator in Rust](https://media.ccc.de/v/rustfest-rome-3-gameboy-emulator)- is a talk given at Rust Fest 18 about this.
- [Building a Game Boy emulator in JavaScript](http://imrannazar.com/gameboy-Emulation-in-JavaScript) - Step by step tutorial.
- [Writing a Game Boy emulator, Cinoop](https://cturt.github.io/cinoop.html)
- [0dmg](https://jeremybanks.github.io/0dmg/2018/05/23/getting-started.html) - Learning Rust by building a partial Game Boy emulator.
- [RealBoy Emulator](https://realboyemulator.wordpress.com/posts/) - A series of posts about the design and implementation of the RealBoy Emulator.
- [Codeslinger](http://www.codeslinger.co.uk/pages/projects/gameboy.html) - Another series of posts documenting the building of an emulator.
- [Why did I spend 1.5 months creating a Gameboy emulator?](http://blog.rekawek.eu/2017/02/09/coffee-gb/) - Blog post.
- [binjgb rewind](https://binji.github.io/2017/12/31/binjgb-rewind.html) - Implementing a *rewind- feature.
- [binjgb on the web](https://binji.github.io/2017/02/26/binjgb-on-the-web-part-1.html) - Porting of the binjgb emulator to Web Assembly. [(Part 2)](https://binji.github.io/2017/02/27/binjgb-on-the-web-part-2.html)
- [binjgb debugging hangs](https://binji.github.io/2017/05/03/debugging-hangs.html) - Investigations on emulations quirks.
- [Decoding Gameboy Z80 opcodes](https://gb-archive.github.io/salvage/decoding_gbz80_opcodes/Decoding%20Gamboy%20Z80%20Opcodes.html) - How to algorithmically decode Game Boy instructions (as opposed to writing one huge switch-case statement).
- [Porting a GO Game Boy emulator to WebAssembly](https://djhworld.github.io/post/2018/09/21/i-ported-my-gameboy-color-emulator-to-webassembly/)
- [About swotGB](https://mitxela.com/projects/swotgb/about) - Notes about the development of a Game Boy emulator in JavaScript.
- [List of open source emulators](EMULATORS.md)
- [Game Boy Doctor ![GitHub Repo Stars](https://img.shields.io/github/stars/robert/gameboy-doctor) ![GitHub last commit](https://img.shields.io/github/last-commit/robert/gameboy-doctor)](https://github.com/robert/gameboy-doctor) - A command line tool for comparing logs from your emulator to those from a known-correct one. Useful for line-by-line debugging of Blargg's test ROMs.

### Testing

- [Blargg's test roms](http://gbdev.gg8.se/files/roms/blargg-gb-tests/)
- [Gekkio's test roms](https://gekkio.fi/files/mooneye-gb/latest/)
- [SameSuite ![GitHub Repo Stars](https://img.shields.io/github/stars/LIJI32/SameSuite) ![GitHub last commit](https://img.shields.io/github/last-commit/LIJI32/SameSuite)](https://github.com/LIJI32/SameSuite)
- [Mealybug Tearoom Tests ![GitHub Repo Stars](https://img.shields.io/github/stars/mattcurrie/mealybug-tearoom-tests) ![GitHub last commit](https://img.shields.io/github/last-commit/mattcurrie/mealybug-tearoom-tests)](https://github.com/mattcurrie/mealybug-tearoom-tests)
- [GB Accuracy Tests](http://tasvideos.org/EmulatorResources/GBAccuracyTests.html)
- [144p Test Suite ![GitHub Repo Stars](https://img.shields.io/github/stars/pinobatch/240p-test-mini) ![GitHub last commit](https://img.shields.io/github/last-commit/pinobatch/240p-test-mini)](https://github.com/pinobatch/240p-test-mini/tree/master/gameboy) - Port of Artemio Urbina's 240p Test Suite to the Game Boy.
- [MBC3 RTC test ROM ![GitHub Repo Stars](https://img.shields.io/github/stars/aaaaaa123456789/rtc3test) ![GitHub last commit](https://img.shields.io/github/last-commit/aaaaaa123456789/rtc3test)](https://github.com/aaaaaa123456789/rtc3test)
- [dmg-acid2 ![GitHub Repo Stars](https://img.shields.io/github/stars/mattcurrie/dmg-acid2) ![GitHub last commit](https://img.shields.io/github/last-commit/mattcurrie/dmg-acid2)](https://github.com/mattcurrie/dmg-acid2) and [cgb-acid2 ![GitHub Repo Stars](https://img.shields.io/github/stars/mattcurrie/cgb-acid2) ![GitHub last commit](https://img.shields.io/github/last-commit/mattcurrie/cgb-acid2)](https://github.com/mattcurrie/cgb-acid2) - Basic PPU rendering tests.

## Software Development

The [Choosing tools for Game Boy development](https://gbdev.io/guides/tools.html) essay provides an overview of the available development tools for Game Boy.

### Assemblers

- [RGBDS ![GitHub Repo Stars](https://img.shields.io/github/stars/gbdev/rgbds) ![GitHub last commit](https://img.shields.io/github/last-commit/gbdev/rgbds)](https://github.com/gbdev/rgbds) - Assembler and linker package. [Documentation](https://rgbds.gbdev.io/docs/).
- [ASMotor ![GitHub Repo Stars](https://img.shields.io/github/stars/csoren/asmotor) ![GitHub last commit](https://img.shields.io/github/last-commit/csoren/asmotor)](https://github.com/csoren/asmotor) - Assembler engine and development system targeting Game Boy, among other CPUs. Written by the original RGBDS author. [Documentation ![GitHub Repo Stars](https://img.shields.io/github/stars/asmotor/asmotor) ![GitHub last commit](https://img.shields.io/github/last-commit/asmotor/asmotor)](https://github.com/asmotor/asmotor/tree/develop#further-reading).
- [wla-dx ![GitHub Repo Stars](https://img.shields.io/github/stars/vhelin/wla-dx) ![GitHub last commit](https://img.shields.io/github/last-commit/vhelin/wla-dx)](https://github.com/vhelin/wla-dx) - Yet Another GB-Z80/Z80/... Multi Platform Cross Assembler Package. [Documentation](http://www.villehelin.com/wla.txt).

### Compilers

- [GBDK ![GitHub Repo Stars](https://img.shields.io/github/stars/gbdk-2020/gbdk-2020) ![GitHub last commit](https://img.shields.io/github/last-commit/gbdk-2020/gbdk-2020)](https://github.com/gbdk-2020/gbdk-2020/) - Maintained and modernized GBDK (Game Boy Development Kit) powered by an updated version of the SDCC toolchain. Provides a C compiler, assembler, linker and a set of libraries. 
  - [API docs: Getting Started](https://gbdk-2020.github.io/gbdk-2020/docs/api/docs_getting_started.html)
  - [Examples ![GitHub Repo Stars](https://img.shields.io/github/stars/mrombout/gbdk_playground) ![GitHub last commit](https://img.shields.io/github/last-commit/mrombout/gbdk_playground)](https://github.com/mrombout/gbdk_playground)
  - [Documentation, links and tools](https://gbdk-2020.github.io/gbdk-2020/docs/api/docs_links_and_tools.html)
- [Turbo Rascal Syntax Error](https://lemonspawn.com/turbo-rascal-syntax-error-expected-but-begin/) - Complete suite (IDE, compiler, programming language, resource editor) intended for developing games/demos for 8 / 16-bit line of computers, including the Game Boy and Game Boy Color.

#### Experimental/Proof of Concepts

- [RGBDS-Live](https://gbdev.io/rgbds-live) - In-browser coding environment to try out RGBDS.
- [Wiz ![GitHub Repo Stars](https://img.shields.io/github/stars/wiz-lang/wiz) ![GitHub last commit](https://img.shields.io/github/last-commit/wiz-lang/wiz)](https://github.com/wiz-lang/wiz) - A high-level assembly language for writing homebrew on retro console platforms (Game Boy, NES, Atari 2600, and more).
- [gbforth ![GitHub Repo Stars](https://img.shields.io/github/stars/ams-hackers/gbforth) ![GitHub last commit](https://img.shields.io/github/last-commit/ams-hackers/gbforth)](https://github.com/ams-hackers/gbforth) - A Forth-based Game Boy development kit.
- [gbasm-rs](https://gitlab.com/BonsaiDen/gbasm-rs) - An opinionated Rust based compiler for Game Boy z80 assembly code.
- [gbasm ![GitHub Repo Stars](https://img.shields.io/github/stars/BonsaiDen/gbasm) ![GitHub last commit](https://img.shields.io/github/last-commit/BonsaiDen/gbasm)](https://github.com/BonsaiDen/gbasm) - A JavaScript based compiler for Game Boy z80 assembly code.
- [tniASM](http://www.tni.nl/products/tniasm.html) - Macro Assembler.
- [Assembler ![GitHub Repo Stars](https://img.shields.io/github/stars/ulrikdamm/Assembler) ![GitHub last commit](https://img.shields.io/github/last-commit/ulrikdamm/Assembler)](https://github.com/ulrikdamm/Assembler) - Assembler written in Swift.
- [llvm-gbz80 ![GitHub Repo Stars](https://img.shields.io/github/stars/Bevinsky/llvm-gbz80) ![GitHub last commit](https://img.shields.io/github/last-commit/Bevinsky/llvm-gbz80)](https://github.com/Bevinsky/llvm-gbz80) / [clang-gbz80 ![GitHub Repo Stars](https://img.shields.io/github/stars/Bevinsky/clang-gbz80) ![GitHub last commit](https://img.shields.io/github/last-commit/Bevinsky/clang-gbz80)](https://github.com/Bevinsky/clang-gbz80) - Clang/LLVM port to the GBZ80 CPU (similar to the deprecated [euclio/llvm-gbz80 ![GitHub Repo Stars](https://img.shields.io/github/stars/euclio/llvm-gbz80) ![GitHub last commit](https://img.shields.io/github/last-commit/euclio/llvm-gbz80)](https://github.com/euclio/llvm-gbz80)).
- [gbdk-go ![GitHub Repo Stars](https://img.shields.io/github/stars/pokemium/gbdk-go) ![GitHub last commit](https://img.shields.io/github/last-commit/pokemium/gbdk-go)](https://github.com/pokemium/gbdk-go) - A compiler translates Go programs to C code. The output C code is built into GB ROM by GBDK.

### Emulators

- [BGB](https://bgb.bircd.org/) - Powerful emulator and debugger. Provides an accurate hardware emulation.
- [SameBoy ![GitHub Repo Stars](https://img.shields.io/github/stars/LIJI32/SameBoy) ![GitHub last commit](https://img.shields.io/github/last-commit/LIJI32/SameBoy)](https://github.com/LIJI32/SameBoy) - Accurate emulator with a wide range of powerful debugging features.
- [Mooneye GB ![GitHub Repo Stars](https://img.shields.io/github/stars/Gekkio/mooneye-gb) ![GitHub last commit](https://img.shields.io/github/last-commit/Gekkio/mooneye-gb)](https://github.com/Gekkio/mooneye-gb) - Research project and emulator in Rust.
- [mGBA ![GitHub Repo Stars](https://img.shields.io/github/stars/mgba-emu/mgba) ![GitHub last commit](https://img.shields.io/github/last-commit/mgba-emu/mgba)](https://github.com/mgba-emu/mgba) - Modern cross platform GBA emulator which also runs GB/GBC games.
- [Binjgb ![GitHub Repo Stars](https://img.shields.io/github/stars/binji/binjgb) ![GitHub last commit](https://img.shields.io/github/last-commit/binji/binjgb)](https://github.com/binji/binjgb) - 5Kloc emulator that passes most of the tests. *Rewind- feature. Runs in the browser using WebAssembly.
- [Gambatte ![GitHub Repo Stars](https://img.shields.io/github/stars/gb-archive/gambatte) ![GitHub last commit](https://img.shields.io/github/last-commit/gb-archive/gambatte)](https://github.com/gb-archive/gambatte) - Cross-platform and accurate emulator.

- [MetroBoy ![GitHub Repo Stars](https://img.shields.io/github/stars/aappleby/MetroBoy) ![GitHub last commit](https://img.shields.io/github/last-commit/aappleby/MetroBoy)](https://github.com/aappleby/MetroBoy) - A playable, circuit-level simulation of an entire Game Boy.
- [gbe-plus ![GitHub Repo Stars](https://img.shields.io/github/stars/shonumi/gbe-plus) ![GitHub last commit](https://img.shields.io/github/last-commit/shonumi/gbe-plus)](https://github.com/shonumi/gbe-plus) - A recently rewritten emulator that has a large effort in preserving the functions of obscure accessories (such as IR link, Mobile Network GB, Barcode Boy, GB Printer, local and online GB Serial Link Cable, ... )
- [Emulicious](https://emulicious.net/) - Provides accurate emulation and includes powerful tools such as a profiler and source-level debugging for ASM and C via a [VS Code debug adapter](https://marketplace.visualstudio.com/items?itemName=emulicious.emulicious-debugger).

[Complete list of open source emulators](EMULATORS.md)

### Tools

#### Engines

- [ZGB ![GitHub Repo Stars](https://img.shields.io/github/stars/Zal0/ZGB) ![GitHub last commit](https://img.shields.io/github/last-commit/Zal0/ZGB)](https://github.com/Zal0/ZGB) - A little engine for creating games for the original Game Boy (expands gbdk, more info [here](http://zalods.blogspot.com/2017/01/zgb-little-engine-for-game-boy.html)).
- [Retr0 GB](https://bitbucket.org/HellSuffering/retr0-gb/) - An engine for creating games (expands GBDK).

#### Development tools

- [GBExtended](https://www.tensi.eu/thomas/programming/utilities/gbx_library/gbx_library.html) - C library extending gbdk.
- [gbdk-lib-extension ![GitHub Repo Stars](https://img.shields.io/github/stars/ProGM/gbdk-lib-extension) ![GitHub last commit](https://img.shields.io/github/last-commit/ProGM/gbdk-lib-extension)](https://github.com/ProGM/gbdk-lib-extension) - A small set of sources and tools for the Game Boy Development Kit by Michael Hope.
- [Dot Matrix Game Editor](http://www.dotmatrixgame.com/) - An IDE for Game Boy programming in a C-like language called GBL, with many other features like tile and map extraction, WLA-DX assembly, and more.
- [mgbdis ![GitHub Repo Stars](https://img.shields.io/github/stars/mattcurrie/mgbdis) ![GitHub last commit](https://img.shields.io/github/last-commit/mattcurrie/mgbdis)](https://github.com/mattcurrie/mgbdis) - Game Boy ROM disassembler with RGBDS compatible output.
- [ROM Header Utility](http://catskull.net/GB-Logo-Generator/) - An online tool to inspect and modify a ROM's header data, including the logo.
- [romusage ![GitHub Repo Stars](https://img.shields.io/github/stars/bbbbbr/romusage) ![GitHub last commit](https://img.shields.io/github/last-commit/bbbbbr/romusage)](https://github.com/bbbbbr/romusage) - Command line tool for estimating usage (free space) of Game Boy ROMs from a .map, .noi or ihx file. Works with GBDK-2020 and RGBDS.
- [awake ![GitHub Repo Stars](https://img.shields.io/github/stars/devdri/awake) ![GitHub last commit](https://img.shields.io/github/last-commit/devdri/awake)](https://github.com/devdri/awake) - Game Boy decompiler.
- [Game Boy Text Tools ![GitHub Repo Stars](https://img.shields.io/github/stars/raphaklaus/gameboy-text-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/raphaklaus/gameboy-text-tools)](https://github.com/raphaklaus/gameboy-text-tools) - Set of tools for text manipulation and translation of Game Boy ROMs written in Node.js.
- [evscript ![GitHub Repo Stars](https://img.shields.io/github/stars/eievui5/evscript) ![GitHub last commit](https://img.shields.io/github/last-commit/eievui5/evscript)](https://github.com/eievui5/evscript) - A scripting language for the Game Boy, useful for enemy AI, dialogue, animations, and coroutines.
- [evunit ![GitHub Repo Stars](https://img.shields.io/github/stars/eievui5/evunit) ![GitHub last commit](https://img.shields.io/github/last-commit/eievui5/evunit)](https://github.com/eievui5/evunit) - A unit testing program for assembly code.
- [opcode_count ![GitHub Repo Stars](https://img.shields.io/github/stars/rondnelson99/opcode_count) ![GitHub last commit](https://img.shields.io/github/last-commit/rondnelson99/opcode_count)](https://github.com/rondnelson99/opcode_count) - Generates statistics on which CPU instructions are run the most often using Python and Emulicious

#### Graphics utilities

- [Game Boy Tile Data Generator ![GitHub Repo Stars](https://img.shields.io/github/stars/chrisantonellis/gbtdg) ![GitHub last commit](https://img.shields.io/github/last-commit/chrisantonellis/gbtdg)](https://github.com/chrisantonellis/gbtdg) - HTML5 / JS web application that will convert bitmap images to hexadecimal data appropriate for use in tile based graphical applications, specifically GB.
- [Harry Mulder's GB Development](http://www.devrs.com/gb/hmgd/intro.html) - Some sources and home of Game Boy Tile Designer (GBTD) and Game Boy Map Builder (GBMB) tools.
- [GBTiles ![GitHub Repo Stars](https://img.shields.io/github/stars/bashaus/gbtiles) ![GitHub last commit](https://img.shields.io/github/last-commit/bashaus/gbtiles)](https://github.com/bashaus/gbtiles) - Converts .GBR files created with Harry Mulder's Tile Designer (GBTD) and .GBM files created with Harry Mulder's Map Builder (GBMB) to different formats for use with the Game Boy and GBDK.
- [bmp2cgb ![GitHub Repo Stars](https://img.shields.io/github/stars/gitendo/bmp2cgb) ![GitHub last commit](https://img.shields.io/github/last-commit/gitendo/bmp2cgb)](https://github.com/gitendo/bmp2cgb) - Graphics converter for Game Boy Color development providing real time palette adjustments.
- [png2gb ![GitHub Repo Stars](https://img.shields.io/github/stars/LuckyLights/png2gb) ![GitHub last commit](https://img.shields.io/github/last-commit/LuckyLights/png2gb)](https://github.com/LuckyLights/png2gb) - CLI tool to convert image file to game boy .c array.
- [GB-convert ![GitHub Repo Stars](https://img.shields.io/github/stars/exezin/gb-convert) ![GitHub last commit](https://img.shields.io/github/last-commit/exezin/gb-convert)](https://github.com/exezin/gb-convert) - Game Boy tile conversion and map editor tool (converts to assembly).
- [brewtool](http://make.vg/brewtool/) - A collection of primitive editor/converter tools for making assets used with homebrew ROM development.
- [vtGBte ![GitHub Repo Stars](https://img.shields.io/github/stars/paul-arutyunov/vtGBte) ![GitHub last commit](https://img.shields.io/github/last-commit/paul-arutyunov/vtGBte)](https://github.com/paul-arutyunov/vtGBte) - A minimalistic ncurses tile editor.
- [tpp1 ![GitHub Repo Stars](https://img.shields.io/github/stars/TwitchPlaysPokemon/tpp1) ![GitHub last commit](https://img.shields.io/github/last-commit/TwitchPlaysPokemon/tpp1)](https://github.com/TwitchPlaysPokemon/tpp1) - Definition and specification of a custom GB/GBC memory/hardware mapper, as a functional superset of MBC.
- [libstdgb ![GitHub Repo Stars](https://img.shields.io/github/stars/delwink/libstdgb) ![GitHub last commit](https://img.shields.io/github/last-commit/delwink/libstdgb)](https://github.com/delwink/libstdgb) - A C library of useful Game Boy operations (SDCC).
- [Tilemap GB ![GitHub Repo Stars](https://img.shields.io/github/stars/bbbbbr/gimp-tilemap-gb) ![GitHub last commit](https://img.shields.io/github/last-commit/bbbbbr/gimp-tilemap-gb)](https://github.com/bbbbbr/gimp-tilemap-gb) - GIMP image editor plug-in for importing & exporting GBMB and GBTD tilemaps and tilesets (as bitmap images or .GBM/.GBR files).
- [Tilemap Helper ![GitHub Repo Stars](https://img.shields.io/github/stars/bbbbbr/gimp-tilemap-helper) ![GitHub last commit](https://img.shields.io/github/last-commit/bbbbbr/gimp-tilemap-helper)](https://github.com/bbbbbr/gimp-tilemap-helper) - GIMP image editor plug-in for optimizing tile maps and tile sets.
- [Tilemap Studio ![GitHub Repo Stars](https://img.shields.io/github/stars/Rangi42/tilemap-studio) ![GitHub last commit](https://img.shields.io/github/last-commit/Rangi42/tilemap-studio)](https://github.com/Rangi42/tilemap-studio) - A tilemap editor for Game Boy, Color, Advance, and SNES projects. Written in C++ with FLTK. 
- [Superfamiconv ![GitHub Repo Stars](https://img.shields.io/github/stars/Optiroc/SuperFamiconv) ![GitHub last commit](https://img.shields.io/github/last-commit/Optiroc/SuperFamiconv)](https://github.com/Optiroc/SuperFamiconv) - Flexible and composable tile graphics converter supporting Super Nintendo, Game Boy, Game Boy Color, Game Boy Advance, Mega Drive and PC Engine formats.

#### Hardware and ROM utilities

- [cart-dumper ![GitHub Repo Stars](https://img.shields.io/github/stars/Palmr/cart-dumper) ![GitHub last commit](https://img.shields.io/github/last-commit/Palmr/cart-dumper)](https://github.com/Palmr/cart-dumper) - Game Boy Cartridge Dumper ROM.
- [gbcamextract ![GitHub Repo Stars](https://img.shields.io/github/stars/jkbenaim/gbcamextract) ![GitHub last commit](https://img.shields.io/github/last-commit/jkbenaim/gbcamextract)](https://github.com/jkbenaim/gbcamextract) - Extracts photos from Game Boy Camera saves.
- [Game Boy LCD sniffing ![GitHub Repo Stars](https://img.shields.io/github/stars/svendahlstrand/game-boy-lcd-sniffing) ![GitHub last commit](https://img.shields.io/github/last-commit/svendahlstrand/game-boy-lcd-sniffing)](https://github.com/svendahlstrand/game-boy-lcd-sniffing) - Sniff your Game Boy's LCD using a logic analyzer.
- [swapdump ![GitHub Repo Stars](https://img.shields.io/github/stars/sanqui/swapdump) ![GitHub last commit](https://img.shields.io/github/last-commit/sanqui/swapdump)](https://github.com/sanqui/swapdump) - Diagnostic utility for Game Boy flashcarts.
- [Gameboy-LinkUp ![GitHub Repo Stars](https://img.shields.io/github/stars/JustinLloyd/Gameboy-LinkUp) ![GitHub last commit](https://img.shields.io/github/last-commit/JustinLloyd/Gameboy-LinkUp)](https://github.com/JustinLloyd/Gameboy-LinkUp) - Game Boy LinkUp serial cable networking project.

#### Music drivers and trackers

- [DevSound ![GitHub Repo Stars](https://img.shields.io/github/stars/DevEd2/DevSound) ![GitHub last commit](https://img.shields.io/github/last-commit/DevEd2/DevSound)](https://github.com/DevEd2/DevSound) - Sound driver embeddable in homebrews which supports pulse width manipulation, arpeggios, and multiple waveforms.
- [Carillon Player](http://gbdev.gg8.se/files/musictools/Aleksi%20Eeben/Carillon%20Editor.zip) - Music Engine.
- [GBT PLAYER ![GitHub Repo Stars](https://img.shields.io/github/stars/AntonioND/gbt-player) ![GitHub last commit](https://img.shields.io/github/last-commit/AntonioND/gbt-player)](https://github.com/AntonioND/gbt-player) - A music player library and converter kit.
- [mmlgb ![GitHub Repo Stars](https://img.shields.io/github/stars/SimonLarsen/mmlgb) ![GitHub last commit](https://img.shields.io/github/last-commit/SimonLarsen/mmlgb)](https://github.com/SimonLarsen/mmlgb) - A MML parser and GBDK sound driver for the Nintendo Game Boy.
- [XPMCK ![GitHub Repo Stars](https://img.shields.io/github/stars/bazzinotti/XPMCK) ![GitHub last commit](https://img.shields.io/github/last-commit/bazzinotti/XPMCK)](https://github.com/bazzinotti/XPMCK) - An MML based music compiler with support for Game Boy & Game Boy Color.
- [GBSoundSystem ![GitHub Repo Stars](https://img.shields.io/github/stars/gbdev/GBSoundSystem) ![GitHub last commit](https://img.shields.io/github/last-commit/gbdev/GBSoundSystem)](https://github.com/gbdev/GBSoundSystem) - A modernized audio driver for GameBoy Tracker (aka the Paragon 5 music player).
- [hUGETracker ![GitHub Repo Stars](https://img.shields.io/github/stars/SuperDisk/hUGETracker) ![GitHub last commit](https://img.shields.io/github/last-commit/SuperDisk/hUGETracker)](https://github.com/SuperDisk/hUGETracker) - A music tracker based on OpenMPT, focused on ease of use, compact output, and embeddability in homebrew games.
- [CBT-FX ![GitHub Repo Stars](https://img.shields.io/github/stars/datguywitha3ds/CBT-FX) ![GitHub last commit](https://img.shields.io/github/last-commit/datguywitha3ds/CBT-FX)](https://github.com/datguywitha3ds/CBT-FX) - A GBDK-2020 sound effect driver compatible with FX-Hammer sound effects.

## Programming

Guides, tutorials and tools to develop software for Game Boy using the development toolchains described in the [Software Development](#software-development) chapter.

### ASM

- **[gb asm tutorial](https://eldred.fr/gb-asm-tutorial)** - Step by step tutorial, building several ROMs to accompany its explanations.
- [hardware.inc ![GitHub Repo Stars](https://img.shields.io/github/stars/tobiasvl/hardware.inc) ![GitHub last commit](https://img.shields.io/github/last-commit/tobiasvl/hardware.inc)](https://github.com/tobiasvl/hardware.inc) - Standard include file containing Game Boy hardware definitions for use in RGBDS projects.
- [Assembly tutorial by David Pello](https://gb-archive.github.io/salvage/tutorial_de_ensamblador/tutorial_de_ensamblador_la_decadence.html) - Good document to learn to produce working asm code for gb. Brief explanations of many important topics. Many examples with commented source code.
- [assemblydigest ![GitHub Repo Stars](https://img.shields.io/github/stars/assemblydigest/gameboy) ![GitHub last commit](https://img.shields.io/github/last-commit/assemblydigest/gameboy)](https://github.com/assemblydigest/gameboy) - Exploring Game Boy programming techniques:
  - [Making an Empty Game Boy ROM (in Wiz)](http://assemblydigest.tumblr.com/post/77203696711/tutorial-making-an-empty-game-boy-rom-in-wiz)
  - [Making Art for the Game Boy](http://assemblydigest.tumblr.com/post/77404621743/tutorial-making-art-for-the-game-boy)
- [Beginner's Guide to Reverse Engineering GB](http://web.archive.org/web/20150511145100/http://www.bennvenn.com/Beginners_Guide_To_Reverse_Engineering.htm) - Some starting tips on disassembling and reverse engineering.
- [FlappyBoy: Making a simple Game Boy Game](http://voidptr.io/blog/2017/01/21/GameBoy.html)
- [Super Game Boy development](https://imanoleasgames.blogspot.no/2016/12/games-aside-1-super-game-boy.html) - Step by step tutorial to implement Super Game Boy features (frame and palettes).
- [GameBoy programming tutorial: Hello World!](https://peterwynroberts.wordpress.com/2014/05/11/gameboy-programming-tutorial-hello-world/) - Step by step tutorial.
- [DMGreport ![GitHub Repo Stars](https://img.shields.io/github/stars/lancekindle/DMGreport) ![GitHub last commit](https://img.shields.io/github/last-commit/lancekindle/DMGreport)](https://github.com/lancekindle/DMGreport) - Game programming tutorials in assembly.
- [OAM DMA tutorial](https://gbdev.gg8.se/wiki/articles/OAM_DMA_tutorial) - Example of how to use OAM DMA in assembly.
- [Game Boy Assembly Programming for the Modern Game Developer ![GitHub Repo Stars](https://img.shields.io/github/stars/ahrnbom/gbapfomgd) ![GitHub last commit](https://img.shields.io/github/last-commit/ahrnbom/gbapfomgd)](https://github.com/ahrnbom/gbapfomgd) - An e-book about making Game Boy games in Assembly.

#### Sources

Fragments of code, effects, proof of concepts and generally non complete games.

- [dev'rs ASM section](http://www.devrs.com/gb/asmcode.php) - A lot of working demos and sources.
- [EmmaEwert's experiments ![GitHub Repo Stars](https://img.shields.io/github/stars/EmmaEwert/gameboy) ![GitHub last commit](https://img.shields.io/github/last-commit/EmmaEwert/gameboy)](https://github.com/EmmaEwert/gameboy) - A collection of prototype programs, mostly just toying around. Among others, a daylight effect, transparency and a weather effect.
- [DeadCScroll ![GitHub Repo Stars](https://img.shields.io/github/stars/gb-archive/DeadCScroll) ![GitHub last commit](https://img.shields.io/github/last-commit/gb-archive/DeadCScroll)](https://github.com/gb-archive/DeadCScroll) - A detailed tutorial on how to make the screen wobble, among other "raster effects"

#### Timings

- [Nitty Gritty Gameboy Cycle Timing](http://blog.kevtris.org/blogfiles/Nitty%20Gritty%20Gameboy%20VRAM%20Timing.txt)
- [Mode3 Sprite Timing](https://www.reddit.com/r/EmuDev/comments/59pawp/gb_mode3_sprite_timing/)
- [GameBoy Color DMA-Transfers v0.0.1](http://gameboy.mongenel.com/dmg/gbc_dma_transfers.txt)
- [STAT interrupt timings](http://gameboy.mongenel.com/dmg/istat98.txt)
- [Video Timing ![GitHub Repo Stars](https://img.shields.io/github/stars/jdeblese/gbcpu) ![GitHub last commit](https://img.shields.io/github/last-commit/jdeblese/gbcpu)](https://github.com/jdeblese/gbcpu/wiki/Video-Timing)

#### Boilerplates and libraries

- [rgbds-template ![GitHub Repo Stars](https://img.shields.io/github/stars/nezticle/rgbds-template) ![GitHub last commit](https://img.shields.io/github/last-commit/nezticle/rgbds-template)](https://github.com/nezticle/rgbds-template) - Basic hello-world example for Game Boy using RGBDS.
- [Game Boy Assembly Language Primer](http://www.devrs.com/gb/files/galp.zip) - Simple template code with memory defines, copy routines and IBM font tilemap.
- [bootstrap.gb ![GitHub Repo Stars](https://img.shields.io/github/stars/yenatch/bootstrap.gb) ![GitHub last commit](https://img.shields.io/github/last-commit/yenatch/bootstrap.gb)](https://github.com/yenatch/bootstrap.gb) - An example Game Boy project.
- [Gameboy Boilerplate ![GitHub Repo Stars](https://img.shields.io/github/stars/junebug12851/GameboyBoilerplateProj) ![GitHub last commit](https://img.shields.io/github/last-commit/junebug12851/GameboyBoilerplateProj)](https://github.com/junebug12851/GameboyBoilerplateProj) - Boilerplate project to move quicker into the actual assembly code for your game.
- [GingerBread ![GitHub Repo Stars](https://img.shields.io/github/stars/ahrnbom/gingerbread) ![GitHub last commit](https://img.shields.io/github/last-commit/ahrnbom/gingerbread)](https://github.com/ahrnbom/gingerbread) - A software library for making your own Game Boy games. It is made to be used alongside the book [Game Boy Assembly Programming for the Modern Game Developer ![GitHub Repo Stars](https://img.shields.io/github/stars/ahrnbom/gbapfomgd) ![GitHub last commit](https://img.shields.io/github/last-commit/ahrnbom/gbapfomgd)](https://github.com/ahrnbom/gbapfomgd) which also doubles as documentation.
- [gb-vwf ![GitHub Repo Stars](https://img.shields.io/github/stars/ISSOtm/gb-vwf) ![GitHub last commit](https://img.shields.io/github/last-commit/ISSOtm/gb-vwf)](https://github.com/ISSOtm/gb-vwf) - Library to print variable-width text, comes with a demo.
- [gb-boilerplate ![GitHub Repo Stars](https://img.shields.io/github/stars/ISSOtm/gb-boilerplate) ![GitHub last commit](https://img.shields.io/github/last-commit/ISSOtm/gb-boilerplate)](https://github.com/ISSOtm/gb-boilerplate) - A template for starting Game Boy projects, providing a Makefile for infrastructure.
- [gb-starter-kit ![GitHub Repo Stars](https://img.shields.io/github/stars/ISSOtm/gb-starter-kit) ![GitHub last commit](https://img.shields.io/github/last-commit/ISSOtm/gb-starter-kit)](https://github.com/ISSOtm/gb-starter-kit) - An expansion on the above, including base library code as well to get started faster.
- [gb-template ![GitHub Repo Stars](https://img.shields.io/github/stars/gb-archive/gb-template) ![GitHub last commit](https://img.shields.io/github/last-commit/gb-archive/gb-template)](https://github.com/gb-archive/gb-template) - A template with basic functions such as joypad input, DMA transfers, and map/tile data loading.

#### Syntax highlighting packages

- [gbz80-highlight ![GitHub Repo Stars](https://img.shields.io/github/stars/ISSOtm/gbz80-highlight) ![GitHub last commit](https://img.shields.io/github/last-commit/ISSOtm/gbz80-highlight)](https://github.com/ISSOtm/gbz80-highlight) - Notepad+- and gedit syntax highlighting files for RGBDS assembly.
- [Vim syntax file for the Game Boy assembler RGBASM](http://www.vim.org/scripts/script.php?script_id=819) - Vim syntax highlighting for RGBDS assembly.
- [Vim syntax file for RGBDS ![GitHub Repo Stars](https://img.shields.io/github/stars/Leandros/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/Leandros/dotfiles)](https://github.com/Leandros/dotfiles/blob/master/.vim/syntax/rgbds.vim) - Another Vim syntax highlighting file for RGBDS assembly.
- [sublime-rgbds](https://packagecontrol.io/packages/RGBDS) - A Sublime Text 3 package for RGBDS, including syntax highlighting and some completion snippets.
- [Z80 Assembly support for Visual Studio Code ![GitHub Repo Stars](https://img.shields.io/github/stars/Imanolea/z80asm-vscode) ![GitHub last commit](https://img.shields.io/github/last-commit/Imanolea/z80asm-vscode)](https://github.com/Imanolea/z80asm-vscode)
- [rgbds-vscode ![GitHub Repo Stars](https://img.shields.io/github/stars/DonaldHays/rgbds-vscode) ![GitHub last commit](https://img.shields.io/github/last-commit/DonaldHays/rgbds-vscode)](https://github.com/DonaldHays/rgbds-vscode) - Visual Studio Code language extension for RGBDS GBZ80 Assembly.
- [rgbds-mode ![GitHub Repo Stars](https://img.shields.io/github/stars/japanoise/rgbds-mode) ![GitHub last commit](https://img.shields.io/github/last-commit/japanoise/rgbds-mode)](https://github.com/japanoise/rgbds-mode) - Emacs major mode for RGBDS assembly.

### C

- [8-Bit Wonderland ![GitHub Repo Stars](https://img.shields.io/github/stars/gb-archive/salvage) ![GitHub last commit](https://img.shields.io/github/last-commit/gb-archive/salvage)](https://github.com/gb-archive/salvage/blob/master/misc/8bit_wonderland.pdf) - Well-written introductory document about how the Game Boy works and how to start developing working code for it.
- [Grooves Game Boy Programming ![GitHub Repo Stars](https://img.shields.io/github/stars/gbdk-salvage/grooves-game-boy-programming) ![GitHub last commit](https://img.shields.io/github/last-commit/gbdk-salvage/grooves-game-boy-programming)](https://github.com/gbdk-salvage/grooves-game-boy-programming) - A complete set of lessons about implementing various game mechanics in a Game Boy game.
- [How to Write a Simple Side Scrolling Game](http://pastebin.com/F3tHLj68) - Old (but still relevant) tutorial.
- [Just another simple tutorial](http://pastebin.com/gzT47MPJ)
- [GBDK Tutorial](https://refreshgames.co.uk/2016/04/18/gameboy-tutorial-rom/) - Fairly minimal game demo for getting started with GBDK.
- [GBDK Sprite](http://gbdev.gg8.se/wiki/articles/GBDK_Sprite_Tutorial) - Presents a workflow for getting multiple sprites to display and animate.
- [GBDK Color](http://gbdev.gg8.se/wiki/articles/GBDK_Color_Tutorial) - Extends your knowledge of basic spriting on the Game Boy by adding colors to sprites, backgrounds and the window layer.
- [GBDK Joypad](http://gbdev.gg8.se/wiki/articles/GBDK_Joypad_Tutorial) - Details the use of the joypad with GBDK.
- [Game Boy home of Flavor](https://web.archive.org/web/20210427064949/www.personal.triticom.com/~erm/GameBoy/) - Some full games and sources.
- [GBDK Configuring and Programming Tutorial](https://videlais.com/2016/07/03/programming-game-boy-games-using-gbdk-part-1-configuring-programming-and-compiling/) - Configuring GBDK, Using Tiles, Colliding Sprites, GBTD, GBMB, Memory Management and ROM Banking.
- [Simplified GBDK examples ![GitHub Repo Stars](https://img.shields.io/github/stars/mrombout/gbdk_playground) ![GitHub last commit](https://img.shields.io/github/last-commit/mrombout/gbdk_playground)](https://github.com/mrombout/gbdk_playground)
- [GBDK Programming Video Tutorials](https://www.youtube.com/playlist?list=PLeEj4c2zF7PaFv5MPYhNAkBGrkx4iPGJo) - A series of video tutorials introducing beginners to programming with GBDK.
- [Larold's Jubilant Junkyard](https://laroldsjubilantjunkyard.com/tutorials/) - A collection of detailed GBDK-2020 based tutorials.

## Homebrews

Complete and open source games.

- [Homebrew Hub](https://hh.gbdev.io) - A community-led attempt to collect, archive and preserve every unlicensed and homebrew game released for Game Boy. Entries are playable online.

### ASM

- [Tuff ![GitHub Repo Stars](https://img.shields.io/github/stars/BonsaiDen/Tuff.gb) ![GitHub last commit](https://img.shields.io/github/last-commit/BonsaiDen/Tuff.gb)](https://github.com/BonsaiDen/Tuff.gb)
- [2048-gb ![GitHub Repo Stars](https://img.shields.io/github/stars/Sanqui/2048-gb) ![GitHub last commit](https://img.shields.io/github/last-commit/Sanqui/2048-gb)](https://github.com/Sanqui/2048-gb)
- [Snake](https://bitbucket.org/Sanqui/snake/src/?at=master)
- [Lazerpong ![GitHub Repo Stars](https://img.shields.io/github/stars/huderlem/lazerpong) ![GitHub last commit](https://img.shields.io/github/last-commit/huderlem/lazerpong)](https://github.com/huderlem/lazerpong)
- [Geometrix ![GitHub Repo Stars](https://img.shields.io/github/stars/AntonioND/geometrix) ![GitHub last commit](https://img.shields.io/github/last-commit/AntonioND/geometrix)](https://github.com/AntonioND/geometrix)
- [µCity ![GitHub Repo Stars](https://img.shields.io/github/stars/AntonioND/ucity) ![GitHub last commit](https://img.shields.io/github/last-commit/AntonioND/ucity)](https://github.com/AntonioND/ucity)
- [Carazu ![GitHub Repo Stars](https://img.shields.io/github/stars/mholtkamp/carazu) ![GitHub last commit](https://img.shields.io/github/last-commit/mholtkamp/carazu)](https://github.com/mholtkamp/carazu)
- [Snake-gb ![GitHub Repo Stars](https://img.shields.io/github/stars/DonaldHays/snake-gb) ![GitHub last commit](https://img.shields.io/github/last-commit/DonaldHays/snake-gb)](https://github.com/DonaldHays/snake-gb)
- [GB303 ![GitHub Repo Stars](https://img.shields.io/github/stars/furrtek/GB303) ![GitHub last commit](https://img.shields.io/github/last-commit/furrtek/GB303)](https://github.com/furrtek/GB303) - GB303 wavetable-based TB-303 style synthesizer for the Nintendo Game Boy.
- [Sushi ![GitHub Repo Stars](https://img.shields.io/github/stars/JustSid/Sushi) ![GitHub last commit](https://img.shields.io/github/last-commit/JustSid/Sushi)](https://github.com/JustSid/Sushi)
- [Flappy-boy-asm ![GitHub Repo Stars](https://img.shields.io/github/stars/bitnenfer/flappy-boy-asm) ![GitHub last commit](https://img.shields.io/github/last-commit/bitnenfer/flappy-boy-asm)](https://github.com/bitnenfer/flappy-boy-asm)
- [kupman ![GitHub Repo Stars](https://img.shields.io/github/stars/dubvulture/gbdev) ![GitHub last commit](https://img.shields.io/github/last-commit/dubvulture/gbdev)](https://github.com/dubvulture/gbdev) and some other projects.
- [Adjustris ![GitHub Repo Stars](https://img.shields.io/github/stars/tbsp/Adjustris) ![GitHub last commit](https://img.shields.io/github/last-commit/tbsp/Adjustris)](https://github.com/tbsp/Adjustris)
- [exeman ![GitHub Repo Stars](https://img.shields.io/github/stars/exezin/exeman) ![GitHub last commit](https://img.shields.io/github/last-commit/exezin/exeman)](https://github.com/exezin/exeman/)
- [Aevilia ![GitHub Repo Stars](https://img.shields.io/github/stars/ISSOtm/Aevilia-GB) ![GitHub last commit](https://img.shields.io/github/last-commit/ISSOtm/Aevilia-GB)](https://github.com/ISSOtm/Aevilia-GB)
- [GBSlides ![GitHub Repo Stars](https://img.shields.io/github/stars/Kartones/gameboy) ![GitHub last commit](https://img.shields.io/github/last-commit/Kartones/gameboy)](https://github.com/Kartones/gameboy) - A simple Game Boy Powerpoint-like slides viewer.
- [Pokered-gbc ![GitHub Repo Stars](https://img.shields.io/github/stars/dannye/pokered-gbc) ![GitHub last commit](https://img.shields.io/github/last-commit/dannye/pokered-gbc)](https://github.com/dannye/pokered-gbc) - Pokémon Red remade with full GBC support.
- [ToyToy ![GitHub Repo Stars](https://img.shields.io/github/stars/tslanina/Retro-GameBoyColor-ToyToy) ![GitHub last commit](https://img.shields.io/github/last-commit/tslanina/Retro-GameBoyColor-ToyToy)](https://github.com/tslanina/Retro-GameBoyColor-ToyToy)
- [StefaN ![GitHub Repo Stars](https://img.shields.io/github/stars/tslanina/Retro-GameBoyColor-StefaN) ![GitHub last commit](https://img.shields.io/github/last-commit/tslanina/Retro-GameBoyColor-StefaN)](https://github.com/tslanina/Retro-GameBoyColor-StefaN) - Fourway Breakout clone.
- [Galaxia ![GitHub Repo Stars](https://img.shields.io/github/stars/tslanina/Retro-GameBoyColor-Galaxia) ![GitHub last commit](https://img.shields.io/github/last-commit/tslanina/Retro-GameBoyColor-Galaxia)](https://github.com/tslanina/Retro-GameBoyColor-Galaxia)
- [desgb ![GitHub Repo Stars](https://img.shields.io/github/stars/sanqui/desgb) ![GitHub last commit](https://img.shields.io/github/last-commit/sanqui/desgb)](https://github.com/sanqui/desgb) - DES encryption.
- [superhappyfunbubbletime ![GitHub Repo Stars](https://img.shields.io/github/stars/l0k1/superhappyfunbubbletime) ![GitHub last commit](https://img.shields.io/github/last-commit/l0k1/superhappyfunbubbletime)](https://github.com/l0k1/superhappyfunbubbletime)
- [minesweepGB ![GitHub Repo Stars](https://img.shields.io/github/stars/lancekindle/minesweepGB) ![GitHub last commit](https://img.shields.io/github/last-commit/lancekindle/minesweepGB)](https://github.com/lancekindle/minesweepGB)
- [Libbet and the Magic Floor ![GitHub Repo Stars](https://img.shields.io/github/stars/pinobatch/libbet) ![GitHub last commit](https://img.shields.io/github/last-commit/pinobatch/libbet)](https://github.com/pinobatch/libbet)
- [waveform-gb ![GitHub Repo Stars](https://img.shields.io/github/stars/dannye/waveform-gb) ![GitHub last commit](https://img.shields.io/github/last-commit/dannye/waveform-gb)](https://github.com/dannye/waveform-gb) - Program visualizing the wave form used by the wave channel. The wave form can be edited freely and playback of the wave is updated immediately.
- [vectroid.gb](https://gitlab.com/BonsaiDen/vectroid.gb) - Developed with gbasm.
- [PlantBoy ![GitHub Repo Stars](https://img.shields.io/github/stars/gb-archive/plantboy) ![GitHub last commit](https://img.shields.io/github/last-commit/gb-archive/plantboy)](https://github.com/gb-archive/plantboy)
- [Death Planet](https://makrill.itch.io/death-planet)
- [Quartet](https://makrill.itch.io/quartet) - Puzzle game for the Game Boy (Color) and Super Game Boy.
- [Dangan](https://snorpung.itch.io/dangan-gb)

### C

- [FlappyBoy ![GitHub Repo Stars](https://img.shields.io/github/stars/bitnenfer/FlappyBoy) ![GitHub last commit](https://img.shields.io/github/last-commit/bitnenfer/FlappyBoy)](https://github.com/bitnenfer/FlappyBoy)
- [flappybird-gameboy ![GitHub Repo Stars](https://img.shields.io/github/stars/pashutk/flappybird-gameboy) ![GitHub last commit](https://img.shields.io/github/last-commit/pashutk/flappybird-gameboy)](https://github.com/pashutk/flappybird-gameboy)
- [fbgb ![GitHub Repo Stars](https://img.shields.io/github/stars/gb-archive/fbgb) ![GitHub last commit](https://img.shields.io/github/last-commit/gb-archive/fbgb)](https://github.com/gb-archive/fbgb)
- [Novascape](https://web.archive.org/web/20171002042716/http://ludumdare.com/compo/ludum-dare-34/?action=preview&uid=6823)
- [Squishy the Turtle ![GitHub Repo Stars](https://img.shields.io/github/stars/cppchriscpp/SquishyTheTurtle) ![GitHub last commit](https://img.shields.io/github/last-commit/cppchriscpp/SquishyTheTurtle)](https://github.com/cppchriscpp/SquishyTheTurtle)
- [Quadratino ![GitHub Repo Stars](https://img.shields.io/github/stars/avivace/quadratino) ![GitHub last commit](https://img.shields.io/github/last-commit/avivace/quadratino)](https://github.com/avivace/quadratino)
- [Doctor How ![GitHub Repo Stars](https://img.shields.io/github/stars/elfgames/doctorhow) ![GitHub last commit](https://img.shields.io/github/last-commit/elfgames/doctorhow)](https://github.com/elfgames/doctorhow)
- [Super Princess' 2092 Exodus ![GitHub Repo Stars](https://img.shields.io/github/stars/Zal0/gbjam2016) ![GitHub last commit](https://img.shields.io/github/last-commit/Zal0/gbjam2016)](https://github.com/Zal0/gbjam2016) - ([ZGB engine ![GitHub Repo Stars](https://img.shields.io/github/stars/Zal0/ZGB) ![GitHub last commit](https://img.shields.io/github/last-commit/Zal0/ZGB)](https://github.com/Zal0/ZGB/)).
- [GBsnake ![GitHub Repo Stars](https://img.shields.io/github/stars/brovador/GBsnake) ![GitHub last commit](https://img.shields.io/github/last-commit/brovador/GBsnake)](https://github.com/brovador/GBsnake)
- [gb-mines ![GitHub Repo Stars](https://img.shields.io/github/stars/andreasjhkarlsson/gb-mines) ![GitHub last commit](https://img.shields.io/github/last-commit/andreasjhkarlsson/gb-mines)](https://github.com/andreasjhkarlsson/gb-mines)
- [oranges](http://www.atari2600land.com/gameboy/oranges.html)
- [red hot princess carnage ![GitHub Repo Stars](https://img.shields.io/github/stars/Imanolea/bitbitjam3_red_hot_princess_carnage) ![GitHub last commit](https://img.shields.io/github/last-commit/Imanolea/bitbitjam3_red_hot_princess_carnage)](https://github.com/Imanolea/bitbitjam3_red_hot_princess_carnage)
- [loderunner](https://www.tensi.eu/thomas/programming/games/loderunner/loderunner.html)
- [Hives](https://refreshgames.co.uk/2017/04/24/ludum-dare-38-entry-hives/)
- [Bubble Factory ![GitHub Repo Stars](https://img.shields.io/github/stars/DonaldHays/bubblefactory) ![GitHub last commit](https://img.shields.io/github/last-commit/DonaldHays/bubblefactory)](https://github.com/DonaldHays/bubblefactory) - *Vanilla- SDCC (no gbdk).
- [GBC Atari Boxing ![GitHub Repo Stars](https://img.shields.io/github/stars/rubfi/gbc-atari-boxing) ![GitHub last commit](https://img.shields.io/github/last-commit/rubfi/gbc-atari-boxing)](https://github.com/rubfi/gbc-atari-boxing) - Atari 2600 Boxing clone for the Game Boy (Color).
- [GB raycaster, Vision-8 ![GitHub Repo Stars](https://img.shields.io/github/stars/haroldo-ok/really-old-stuff) ![GitHub last commit](https://img.shields.io/github/last-commit/haroldo-ok/really-old-stuff)](https://github.com/haroldo-ok/really-old-stuff/tree/master/gameboy) - and some other projects.
- [Tobu Tobu Girl Deluxe ![GitHub Repo Stars](https://img.shields.io/github/stars/SimonLarsen/tobutobugirl-dx) ![GitHub last commit](https://img.shields.io/github/last-commit/SimonLarsen/tobutobugirl-dx)](https://github.com/SimonLarsen/tobutobugirl-dx) - An arcade platformer for the Game Boy (Color).
- [Burly Bear vs. The Mean Foxes](http://sebastianmihai.com/gameboy-burly-bear.html) ([GBC](http://sebastianmihai.com/gameboy-color-burly-bear.html) port)
- [PostBot ![GitHub Repo Stars](https://img.shields.io/github/stars/MasterIV/PostBot) ![GitHub last commit](https://img.shields.io/github/last-commit/MasterIV/PostBot)](https://github.com/MasterIV/PostBot)
- [Guns & Riders ![GitHub Repo Stars](https://img.shields.io/github/stars/kanfor/gunsridersgameboy) ![GitHub last commit](https://img.shields.io/github/last-commit/kanfor/gunsridersgameboy)](https://github.com/kanfor/gunsridersgameboy)
- [Dino's Offline Adventure ![GitHub Repo Stars](https://img.shields.io/github/stars/gingemonster/DinosOfflineAdventure) ![GitHub last commit](https://img.shields.io/github/last-commit/gingemonster/DinosOfflineAdventure)](https://github.com/gingemonster/DinosOfflineAdventure) - A clone of the Google Chrome offline game.
- [dino-gb ![GitHub Repo Stars](https://img.shields.io/github/stars/rnegron/dino-gb) ![GitHub last commit](https://img.shields.io/github/last-commit/rnegron/dino-gb)](https://github.com/rnegron/dino-gb) - Another clone of the Chrome game.
- [Evoland.gb ![GitHub Repo Stars](https://img.shields.io/github/stars/flozz/evoland.gb) ![GitHub last commit](https://img.shields.io/github/last-commit/flozz/evoland.gb)](https://github.com/flozz/evoland.gb) - A port of the first level of Evoland.
- [Petris ![GitHub Repo Stars](https://img.shields.io/github/stars/bbbbbr/Petris) ![GitHub last commit](https://img.shields.io/github/last-commit/bbbbbr/Petris)](https://github.com/bbbbbr/Petris) - A puzzle game of shapely pets for the Game Boy Color ([itch.io](https://bbbbbr.itch.io/petris)).
- [Infinity ![GitHub Repo Stars](https://img.shields.io/github/stars/gb-archive/infinity-gbc) ![GitHub last commit](https://img.shields.io/github/last-commit/gb-archive/infinity-gbc)](https://github.com/gb-archive/infinity-gbc) - RPG developed by Affinix Software primarily between the years 1999 and 2001. The game never found a publisher and was eventually canceled. Got recently released with the full source, development tools and workflows.
- [Black Castle](https://gbdev.gg8.se/forums/viewtopic.php?id=743) - Side scrolling platformer for the Game Boy ([itch.io](https://user0x7f.itch.io/black-castle)).
- [Genesis](https://gbdev.gg8.se/forums/viewtopic.php?id=674) - Shmup for the Game Boy ([itch.io](https://user0x7f.itch.io/genesis)).
- [Indestructo Tank!](https://antonylavelle.itch.io/indestructotank-gb)
- [Super JetPak DX](https://asobitech.itch.io/super-jetpak-dx)
- [Powa!](https://aiguanachein.itch.io/powa) - Side scrolling platformer for the Game Boy (Color)  ([ZGB engine ![GitHub Repo Stars](https://img.shields.io/github/stars/Zal0/ZGB) ![GitHub last commit](https://img.shields.io/github/last-commit/Zal0/ZGB)](https://github.com/Zal0/ZGB/)).
- [Cavern](https://thegreatgallus.itch.io/cavern-mvm-9) - ([ZGB engine ![GitHub Repo Stars](https://img.shields.io/github/stars/Zal0/ZGB) ![GitHub last commit](https://img.shields.io/github/last-commit/Zal0/ZGB)](https://github.com/Zal0/ZGB/)).
- [Mona and the Witch's Hat Deluxe](https://ctneptune.itch.io/mona-and-the-witchs-hat-dx) - ([ZGB engine ![GitHub Repo Stars](https://img.shields.io/github/stars/Zal0/ZGB) ![GitHub last commit](https://img.shields.io/github/last-commit/Zal0/ZGB)](https://github.com/Zal0/ZGB/)).
- [The Bouncing Ball](https://gamejolt.com/games/the-bouncing-ball-gb/86699)
- [DMG Deals Damage](https://drludos.itch.io/dmg-deals-damage)

### GB Studio

- [Soul Void](https://kadabura.itch.io/soul-void) - Interactive horror fiction.
- [Deadeus](https://izma.itch.io/deadeus)
- [SUPER IMPOSTOR BROS.](https://lumpytouch.itch.io/super-impostor-bros)

### Demos

- [Back to Color ![GitHub Repo Stars](https://img.shields.io/github/stars/AntonioND/back-to-color) ![GitHub last commit](https://img.shields.io/github/last-commit/AntonioND/back-to-color)](https://github.com/AntonioND/back-to-color)
- [beach-gbc ![GitHub Repo Stars](https://img.shields.io/github/stars/vegard/beach-gbc) ![GitHub last commit](https://img.shields.io/github/last-commit/vegard/beach-gbc)](https://github.com/vegard/beach-gbc)
- [CUTE DEMO ![GitHub Repo Stars](https://img.shields.io/github/stars/mills32/CUTE_DEMO) ![GitHub last commit](https://img.shields.io/github/last-commit/mills32/CUTE_DEMO)](https://github.com/mills32/CUTE_DEMO)
- [`10 PRINT` Game Boy ![GitHub Repo Stars](https://img.shields.io/github/stars/svendahlstrand/10-print-game-boy) ![GitHub last commit](https://img.shields.io/github/last-commit/svendahlstrand/10-print-game-boy)](https://github.com/svendahlstrand/10-print-game-boy)
- [Roboto Demo ![GitHub Repo Stars](https://img.shields.io/github/stars/naavis/roboto-demo) ![GitHub last commit](https://img.shields.io/github/last-commit/naavis/roboto-demo)](https://github.com/naavis/roboto-demo)
- [matrix-rain-gb ![GitHub Repo Stars](https://img.shields.io/github/stars/wtjones/matrix-rain-gb) ![GitHub last commit](https://img.shields.io/github/last-commit/wtjones/matrix-rain-gb)](https://github.com/wtjones/matrix-rain-gb) - A Matrix digital rain effect in assembler.
- [GBVideoPlayer ![GitHub Repo Stars](https://img.shields.io/github/stars/LIJI32/GBVideoPlayer) ![GitHub last commit](https://img.shields.io/github/last-commit/LIJI32/GBVideoPlayer)](https://github.com/LIJI32/GBVideoPlayer) - A technical demo demonstrating how the Game Boy LCD controller can be hacked to make a Game Boy Color play a full motion video in color, together with music.
- [GBVideoPlayer2 ![GitHub Repo Stars](https://img.shields.io/github/stars/LIJI32/GBVideoPlayer2) ![GitHub last commit](https://img.shields.io/github/last-commit/LIJI32/GBVideoPlayer2)](https://github.com/LIJI32/GBVideoPlayer2) - The second iteration of the above demo, which increases the resolution, adds *stereo- PCM audio, and introduces video compression*.

## Reverse Engineering

- [Reverse engineering Kirby's Dreamland 2](http://ecc-comp.blogspot.it/2016/03/reverse-engineering-kirbys-dreamland-2.html)
- [pokemontools ![GitHub Repo Stars](https://img.shields.io/github/stars/pret/pokemon-reverse-engineering-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/pret/pokemon-reverse-engineering-tools)](https://github.com/pret/pokemon-reverse-engineering-tools) - a python module that provides various reverse engineering components for various Pokémon games.
- [Reverse Engineering a Gameboy ROM with radare2](https://www.megabeets.net/reverse-engineering-a-gameboy-rom-with-radare2) - A walkthrough to reverse engineer a Game Boy ROM challenge using radare2.
- [Disassembling Link's Awakening](http://kemenaran.winosx.com/posts/category-disassembling-links-awakening/) - A series of blog posts about disassembling Link's Awakening DX.
- [Reverse Engineering the GameBoy Tetris ![GitHub Repo Stars](https://img.shields.io/github/stars/h3nnn4n/Reverse-Engineering-the-GameBoy-Tetris) ![GitHub last commit](https://img.shields.io/github/last-commit/h3nnn4n/Reverse-Engineering-the-GameBoy-Tetris)](https://github.com/h3nnn4n/Reverse-Engineering-the-GameBoy-Tetris)
- [DMA hijacking](https://gbdev.io/guides/dma_hijacking) - A simple technique that allows you to run custom code in most GB/SGB/CGB games, provided you have an ACE exploit.

### Game Disassemblies

- [Pokémon Red/Blue ![GitHub Repo Stars](https://img.shields.io/github/stars/pret/pokered) ![GitHub last commit](https://img.shields.io/github/last-commit/pret/pokered)](https://github.com/pret/pokered)
- [Pokémon Crystal ![GitHub Repo Stars](https://img.shields.io/github/stars/pret/pokecrystal) ![GitHub last commit](https://img.shields.io/github/last-commit/pret/pokecrystal)](https://github.com/pret/pokecrystal)
- [Pokémon Yellow ![GitHub Repo Stars](https://img.shields.io/github/stars/pret/pokeyellow) ![GitHub last commit](https://img.shields.io/github/last-commit/pret/pokeyellow)](https://github.com/pret/pokeyellow)
- [Pokémon Gold and Silver ![GitHub Repo Stars](https://img.shields.io/github/stars/pret/pokegold) ![GitHub last commit](https://img.shields.io/github/last-commit/pret/pokegold)](https://github.com/pret/pokegold)
- [Pokémon Pinball ![GitHub Repo Stars](https://img.shields.io/github/stars/pret/pokepinball) ![GitHub last commit](https://img.shields.io/github/last-commit/pret/pokepinball)](https://github.com/pret/pokepinball)
- [Pokémon TCG ![GitHub Repo Stars](https://img.shields.io/github/stars/pret/poketcg) ![GitHub last commit](https://img.shields.io/github/last-commit/pret/poketcg)](https://github.com/pret/poketcg)
- [pokegold-spaceworld ![GitHub Repo Stars](https://img.shields.io/github/stars/pret/pokegold-spaceworld) ![GitHub last commit](https://img.shields.io/github/last-commit/pret/pokegold-spaceworld)](https://github.com/pret/pokegold-spaceworld) - Pokémon Gold and Silver 1997 Space World demo.
- [Link's Awakening DX ![GitHub Repo Stars](https://img.shields.io/github/stars/mojobojo/LADX-Disassembly) ![GitHub last commit](https://img.shields.io/github/last-commit/mojobojo/LADX-Disassembly)](https://github.com/mojobojo/LADX-Disassembly)
- [Oracle of Ages ![GitHub Repo Stars](https://img.shields.io/github/stars/drenn1/ages-disasm) ![GitHub last commit](https://img.shields.io/github/last-commit/drenn1/ages-disasm)](https://github.com/drenn1/ages-disasm)
- [Tetris ![GitHub Repo Stars](https://img.shields.io/github/stars/vinheim3/tetris-gb-disasm) ![GitHub last commit](https://img.shields.io/github/last-commit/vinheim3/tetris-gb-disasm)](https://github.com/vinheim3/tetris-gb-disasm) - Complete Tetris disassembly.
- [FX Hammer ![GitHub Repo Stars](https://img.shields.io/github/stars/DevEd2/FXHammer-Disasm) ![GitHub last commit](https://img.shields.io/github/last-commit/DevEd2/FXHammer-Disasm)](https://github.com/DevEd2/FXHammer-Disasm)
- [Harvest Moon 3 ![GitHub Repo Stars](https://img.shields.io/github/stars/sanqui/hm3) ![GitHub last commit](https://img.shields.io/github/last-commit/sanqui/hm3)](https://github.com/sanqui/hm3)
- [Final Fantasy Adventure ![GitHub Repo Stars](https://img.shields.io/github/stars/daid/FFA-disassembly) ![GitHub last commit](https://img.shields.io/github/last-commit/daid/FFA-disassembly)](https://github.com/daid/FFA-disassembly)

## Game Boy Camera

### Retrieving images

Game Boy Printer emulation (e.g. to retrieve images from the camera):

- [Arduino Gameboy Printer Emulator ![GitHub Repo Stars](https://img.shields.io/github/stars/mofosyne/arduino-gameboy-printer-emulator) ![GitHub last commit](https://img.shields.io/github/last-commit/mofosyne/arduino-gameboy-printer-emulator)](https://github.com/mofosyne/arduino-gameboy-printer-emulator) - Emulate a gameboy printer via the gameboy link cable. 
- [ESP8266 Game Boy Printer ![GitHub Repo Stars](https://img.shields.io/github/stars/applefreak/esp8266-gameboy-printer) ![GitHub last commit](https://img.shields.io/github/last-commit/applefreak/esp8266-gameboy-printer)](https://github.com/applefreak/esp8266-gameboy-printer) -  A device that emulates the Gameboy Printer and lets you retrieve images using WiFi powered by an ESP8266.
- [WiFi GBP Emulator ![GitHub Repo Stars](https://img.shields.io/github/stars/HerrZatacke/wifi-gbp-emulator) ![GitHub last commit](https://img.shields.io/github/last-commit/HerrZatacke/wifi-gbp-emulator)](https://github.com/HerrZatacke/wifi-gbp-emulator) - A GameBoy printer emulator which provides the received data over a WiFi connection.
- [Game Boy WiFi Printer - D1 Mini Shield ![GitHub Repo Stars](https://img.shields.io/github/stars/cristofercruz/gbp-esp-shield-pcb) ![GitHub last commit](https://img.shields.io/github/last-commit/cristofercruz/gbp-esp-shield-pcb)](https://github.com/cristofercruz/gbp-esp-shield-pcb) - Game Boy Printer interface shield for D1 mini/mini Pro ESP8266 boards. 
- [Game Boy Printer Sniffer ![GitHub Repo Stars](https://img.shields.io/github/stars/mofosyne/GameboyPrinterSniffer) ![GitHub last commit](https://img.shields.io/github/last-commit/mofosyne/GameboyPrinterSniffer)](https://github.com/mofosyne/GameboyPrinterSniffer) - Sniff packet communications between a Game Boy and the Printer.

### Changing the camera's behavior

Methods to improve and/or manipulate the camera's quality and behavior:

- [Game Boy Camera Canon EF Lens Mount](http://ekeler.com/game-boy-camera-canon-ef-mount)
- [Game Boy Camera to Canon Lens mount](https://www.thingiverse.com/thing:4337362) - based on the above.
- [game-boy-camera-frame-replacer ![GitHub Repo Stars](https://img.shields.io/github/stars/cristofercruz/game-boy-camera-frame-replacer) ![GitHub last commit](https://img.shields.io/github/last-commit/cristofercruz/game-boy-camera-frame-replacer)](https://github.com/cristofercruz/game-boy-camera-frame-replacer) - Manipulate the ROM of a camera to include custom frames

### Post processing

- [Game Boy Printer Paper Simulation ![GitHub Repo Stars](https://img.shields.io/github/stars/mofosyne/GameboyPrinterPaperSimulation) ![GitHub last commit](https://img.shields.io/github/last-commit/mofosyne/GameboyPrinterPaperSimulation)](https://github.com/mofosyne/GameboyPrinterPaperSimulation) - Generate as-if-printed images of digital printed images.
- [Game Boy Printer Web ![GitHub Repo Stars](https://img.shields.io/github/stars/HerrZatacke/gb-printer-web) ![GitHub last commit](https://img.shields.io/github/last-commit/HerrZatacke/gb-printer-web)](https://github.com/HerrZatacke/gb-printer-web) - Gallery app for to the Game Boy camera: import pictures from exports or cartridge dumps and choose color palettes.

## Related projects

- [GB Studio](https://www.gbstudio.dev/) - Drag and drop game creator with simple, no knowledge required, visual scripting.
  - [Resources to get started](https://gbstudiocentral.com/resources/)
  - [Dedicated Discord](https://discord.gg/knRryZWGcm)
- [ArduinoBoy ![GitHub Repo Stars](https://img.shields.io/github/stars/trash80/Arduinoboy) ![GitHub last commit](https://img.shields.io/github/last-commit/trash80/Arduinoboy)](https://github.com/trash80/Arduinoboy) - Serial communication (MIDI) from an Arduino to the Game Boy for music applications such as LittleSoundDJ, Nanoloop, and mGB.
- [papiGB ![GitHub Repo Stars](https://img.shields.io/github/stars/diegovalverde/papiGB) ![GitHub last commit](https://img.shields.io/github/last-commit/diegovalverde/papiGB)](https://github.com/diegovalverde/papiGB) - Game Boy Classic fully functional FPGA implementation from scratch.
- [fpgaboy ![GitHub Repo Stars](https://img.shields.io/github/stars/trun/fpgaboy) ![GitHub last commit](https://img.shields.io/github/last-commit/trun/fpgaboy)](https://github.com/trun/fpgaboy) - Implementation Nintendo's Game Boy console on an FPGA.
- [Piglet ![GitHub Repo Stars](https://img.shields.io/github/stars/danShumway/Piglet) ![GitHub last commit](https://img.shields.io/github/last-commit/danShumway/Piglet)](https://github.com/danShumway/Piglet) - A LUA-driven AI that plays classic Game Boy color games using experimentation. In active development.
- [Ostrich ![GitHub Repo Stars](https://img.shields.io/github/stars/PumpMagic/ostrich) ![GitHub last commit](https://img.shields.io/github/last-commit/PumpMagic/ostrich)](https://github.com/PumpMagic/ostrich) - A Game Boy Sound System player written in Swift.
- [mGB ![GitHub Repo Stars](https://img.shields.io/github/stars/trash80/mGB) ![GitHub last commit](https://img.shields.io/github/last-commit/trash80/mGB)](https://github.com/trash80/mGB) - A Game Boy cartridge program that enables the Game Boy to act as a full MIDI supported sound module.
- [GBVisualizer ![GitHub Repo Stars](https://img.shields.io/github/stars/LIJI32/GBVisualizer) ![GitHub last commit](https://img.shields.io/github/last-commit/LIJI32/GBVisualizer)](https://github.com/LIJI32/GBVisualizer) - Demonstrating the use of two undocumented Game Boy Color registers, nicknamed PCM12 (FF76) and PCM34 (FF77), which can be used to read the current PCM amplitude of the 4 APU channels.
- [ArduinoGameBoy ![GitHub Repo Stars](https://img.shields.io/github/stars/drhelius/arduinogameboy) ![GitHub last commit](https://img.shields.io/github/last-commit/drhelius/arduinogameboy)](https://github.com/drhelius/arduinogameboy) - Arduino based Game Boy cartridge reader and writer.
- [gameboy-brainfuck ![GitHub Repo Stars](https://img.shields.io/github/stars/bitnenfer/gameboy-brainfuck) ![GitHub last commit](https://img.shields.io/github/last-commit/bitnenfer/gameboy-brainfuck)](https://github.com/bitnenfer/gameboy-brainfuck) - Brainf*ck interpreter.
- [gbfk ![GitHub Repo Stars](https://img.shields.io/github/stars/elseyf/gbfk) ![GitHub last commit](https://img.shields.io/github/last-commit/elseyf/gbfk)](https://github.com/elseyf/gbfk) - Brainf*ck interpreter, with input.
- [gb-save-states ![GitHub Repo Stars](https://img.shields.io/github/stars/mattcurrie/gb-save-states) ![GitHub last commit](https://img.shields.io/github/last-commit/mattcurrie/gb-save-states)](https://github.com/mattcurrie/gb-save-states) - Patches to add save state support to Game Boy games when playing on the original hardware.
- [gbcpu ![GitHub Repo Stars](https://img.shields.io/github/stars/jdeblese/gbcpu) ![GitHub last commit](https://img.shields.io/github/last-commit/jdeblese/gbcpu)](https://github.com/jdeblese/gbcpu) - A CPU and peripherals implementing the Game Boy instruction set and functionality.
- [Digitized Speech in Game Boy Games](https://youtube.com/watch?v=1lzHfLYzyRM)
- [Sniffing Game Boy serial traffic with an STM32F4](https://dhole.github.io/post/gameboy_serial_1/)
- [Virtual Game Boy Printer with an STM32F4](https://dhole.github.io/post/gameboy_serial_2/)
- [Printing on the Game Boy Printer using an STM32F4](https://dhole.github.io/post/gameboy_serial_3/)
- [Programming Game Boy Chinese cartridges with an STM32F4](https://dhole.github.io/post/gameboy_cartridge_rw_1/)
- [Pokemon Pocket Computer:](https://tilde.town/~minerobber/techwriteups/pokemonpc.html) - What is it and how to use it to make cheat codes.
- [Booting the Game Boy with a custom logo](https://dhole.github.io/post/gameboy_custom_logo/) - Bypassing the Nintendo logo check.
- Making a Game Boy game in 2017: A "Sheep It Up!" Post-Mortem ([part 1](https://www.gamasutra.com/blogs/DoctorLudos/20171207/311143/), [part 2](https://www.gamasutra.com/blogs/DoctorLudos/20180213/314554/))
- [Nintendo's fake logos](http://fuji.drillspirits.net/?post=87) - Every cartridge has to show the authentic logo to be considered valid and be run, but obviously some companies managed to exploit the check system.
- [liblsdj ![GitHub Repo Stars](https://img.shields.io/github/stars/stijnfrishert/liblsdj) ![GitHub last commit](https://img.shields.io/github/last-commit/stijnfrishert/liblsdj)](https://github.com/stijnfrishert/liblsdj) - Utility library for interacting with the LSDj save format (.sav), song files (.lsdsng) and more.
- [lsdpatch ![GitHub Repo Stars](https://img.shields.io/github/stars/jkotlinski/lsdpatch) ![GitHub last commit](https://img.shields.io/github/last-commit/jkotlinski/lsdpatch)](https://github.com/jkotlinski/lsdpatch) - Tool for modifying samples, fonts and palettes on LSDj ROM images.
- [Game Boy video effects ![GitHub Repo Stars](https://img.shields.io/github/stars/ChaosCabbage/crazy-gameboy-video-experiments) ![GitHub last commit](https://img.shields.io/github/last-commit/ChaosCabbage/crazy-gameboy-video-experiments)](https://github.com/ChaosCabbage/crazy-gameboy-video-experiments) - Some little experiments using the STAT interrupt to do funny video manipulations.
- [gbos ![GitHub Repo Stars](https://img.shields.io/github/stars/ekimekim/gbos) ![GitHub last commit](https://img.shields.io/github/last-commit/ekimekim/gbos)](https://github.com/ekimekim/gbos) - A basic operating system for the Game Boy.
- [Work Master OS](https://translate.google.com/translate?hl=&sl=ru&tl=en&u=https%3A%2F%2Fweb.archive.org%2Fweb%2F20081226145726%2Fhttp%3A%2F%2Fworkmaster.ru%2Findex.php%3Fp%3D8&sandbox=1) - Russian multi tasking operating system.
- [Game Boy Link Cable Breakout Board ![GitHub Repo Stars](https://img.shields.io/github/stars/Palmr/gb-link-cable) ![GitHub last commit](https://img.shields.io/github/last-commit/Palmr/gb-link-cable)](https://github.com/Palmr/gb-link-cable)
- [GBCartFlasher firmware ![GitHub Repo Stars](https://img.shields.io/github/stars/Tauwasser/GBCartFlasher) ![GitHub last commit](https://img.shields.io/github/last-commit/Tauwasser/GBCartFlasher)](https://github.com/Tauwasser/GBCartFlasher)
- [VerilogBoy ![GitHub Repo Stars](https://img.shields.io/github/stars/zephray/VerilogBoy) ![GitHub last commit](https://img.shields.io/github/last-commit/zephray/VerilogBoy)](https://github.com/zephray/VerilogBoy/) - Game Boy compatible console Verilog RTL implementation.
- [GBCamcorder ![GitHub Repo Stars](https://img.shields.io/github/stars/furrtek/GBCamcorder) ![GitHub last commit](https://img.shields.io/github/last-commit/furrtek/GBCamcorder)](https://github.com/furrtek/GBCamcorder) - Lo-Fi portable video recorder using a GameBoy Camera cartridge.
- [GBCartRead ![GitHub Repo Stars](https://img.shields.io/github/stars/insidegadgets/GBCartRead) ![GitHub last commit](https://img.shields.io/github/last-commit/insidegadgets/GBCartRead)](https://github.com/insidegadgets/GBCartRead) - Read ROM, Read RAM or Write RAM from/to a GameBoy Cartridge.
- [GBxCart-RW ![GitHub Repo Stars](https://img.shields.io/github/stars/insidegadgets/GBxCart-RW) ![GitHub last commit](https://img.shields.io/github/last-commit/insidegadgets/GBxCart-RW)](https://github.com/insidegadgets/GBxCart-RW) - A device for reading game ROMs, save games and restoring saves for GB, GBC and GBA carts from your PC via USB.
- [Dumping the Super Game Boy Boot ROM](http://www.its.caltech.edu/~costis/sgb_hack/)

### Directories

- [Archive of related files](http://gbdev.gg8.se/files/)
- [The Game Boy Archive](https://github.com/gb-archive) - A library of Game Boy related software, hardware and literature. Aimed to mirror and preserve old and fragmented contributions from the last three decades.
- [The Game Boy Archive - Salvage ![GitHub Repo Stars](https://img.shields.io/github/stars/gb-archive/salvage) ![GitHub last commit](https://img.shields.io/github/last-commit/gb-archive/salvage)](https://github.com/gb-archive/salvage) - Historical archive of software, old articles, FAQs and various documents.

### Websites

- [devrs.com/gb](http://devrs.com/gb) - Old home of the scene: examples, sources, complete documentation, guides, tutorials and various tools.
- [pdroms.de](http://pdroms.de/news/gameboy/) - Game Boy releases.
- [Handheld Underground](http://hhug.me) - Unlicensed games, blog posts about Game Boy, home of the hhugboy emulator.


## About

### Contribute

Take a look at [Contribution Guidelines](CONTRIBUTING.md).

### License

Licensed under **GPLv3**.
See [LICENSE](LICENSE) for more information.

### Acknowledgements

Thanks to [every ![GitHub Repo Stars](https://img.shields.io/github/stars/avivace/awesome-gbdev) ![GitHub last commit](https://img.shields.io/github/last-commit/avivace/awesome-gbdev)](https://github.com/avivace/awesome-gbdev/graphs/contributors) contributor of this project, Jeff Frohwein, Pascal Felber, KOOPa, Pan of Anthrox, GABY, Marat Fayzullin, Paul Robson, BOWSER, neviksti, Martin "nocash" Korth, Nitro2k01, Duo, Chris Antonellis, Michael Hope, Beware, Jonathan “Lord Nightmare” Gevaryahu, Carsten Sorense, Sindre Aamås, Otaku No Zoku, GeeBee.

### Sponsors

Special thanks to our friends at [DigitalOcean](https://www.digitalocean.com/) and [Incube8 Games](https://incube8games.com/), sponsoring the open source activites of our Game Boy Development community.
