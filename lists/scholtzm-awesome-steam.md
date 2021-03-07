# Awesome Steam [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> A curated list of [packages](#packages) and [resources](#resources) regarding [Steam](http://store.steampowered.com/) development.

*Please read the [contribution guidelines](CONTRIBUTING.md) before contributing.*

The purpose of this document is to provide a quick overview over existing packages (libraries, modules etc.) and resources available regarding Steam client automation and WebAPI usage. Whenever you need to start a new project, have a look at the list of packages and see if there is anything useful for your use case. If you need technical details or tutorials, check out the resources section.

## Table of Contents

- [Packages](#packages)
  - [Node.js](#nodejs)
  - [C#](#c)
  - [PHP](#php)
  - [Go](#go)
  - [Python](#python)
  - [C++](#c-1)
  - [Java](#java)
  - [Objective-C](#objective-c)
  - [Ruby](#ruby)

- [Resources](#resources)
  - [General](#general-3)
  - [Tutorials](#tutorials)
  - [Posts](#posts)
  - [Standalone Tools](#standalone-tools)
  - [Discussion Boards](#discussion-boards)
  - [Third-Party Services](#third-party-services)

## Packages

> 💡 Many of these package repositories provide helpful READMEs and wiki pages, which explain the usage and/or provide examples. Do not forget to check them out when using particular package.

### Node.js

#### General

- [steam ![GitHub Repo Stars](https://img.shields.io/github/stars/seishun/node-steam) ![GitHub last commit](https://img.shields.io/github/last-commit/seishun/node-steam)](https://github.com/seishun/node-steam) - Interface directly with Steam servers from Node.js.
- [steam-client ![GitHub Repo Stars](https://img.shields.io/github/stars/DoctorMcKay/node-steam-client) ![GitHub last commit](https://img.shields.io/github/last-commit/DoctorMcKay/node-steam-client)](https://github.com/DoctorMcKay/node-steam-client) - API-compatible fork of node-steam's SteamClient.
- [steam-user ![GitHub Repo Stars](https://img.shields.io/github/stars/DoctorMcKay/node-steam-user) ![GitHub last commit](https://img.shields.io/github/last-commit/DoctorMcKay/node-steam-user)](https://github.com/DoctorMcKay/node-steam-user) - Feature-rich easy-to-use Steam client.
- [vapor ![GitHub Repo Stars](https://img.shields.io/github/stars/scholtzm/vapor) ![GitHub last commit](https://img.shields.io/github/last-commit/scholtzm/vapor)](https://github.com/scholtzm/vapor) - Lightweight Steam client framework.
- [steam-parentbot ![GitHub Repo Stars](https://img.shields.io/github/stars/dragonbanshee/node-steam-parentbot) ![GitHub last commit](https://img.shields.io/github/last-commit/dragonbanshee/node-steam-parentbot)](https://github.com/dragonbanshee/node-steam-parentbot) - Simple base class for a Steam bot.

#### WebAPI

- [steam-webapi ![GitHub Repo Stars](https://img.shields.io/github/stars/DoctorMcKay/node-steam-webapi) ![GitHub last commit](https://img.shields.io/github/last-commit/DoctorMcKay/node-steam-webapi)](https://github.com/DoctorMcKay/node-steam-webapi) - Complete WebAPI wrapper with support for extra HTTP headers sent by Steam.
- [steamapi ![GitHub Repo Stars](https://img.shields.io/github/stars/lloti/node-steamapi) ![GitHub last commit](https://img.shields.io/github/last-commit/lloti/node-steamapi)](https://github.com/lloti/node-steamapi) - A nice Steam API wrapper.

#### Trading

- [steam-trade ![GitHub Repo Stars](https://img.shields.io/github/stars/seishun/node-steam-trade) ![GitHub last commit](https://img.shields.io/github/last-commit/seishun/node-steam-trade)](https://github.com/seishun/node-steam-trade) - Node.js wrapper around Steam live trading.
- [steam-tradeoffers ![GitHub Repo Stars](https://img.shields.io/github/stars/Alex7Kom/node-steam-tradeoffers) ![GitHub last commit](https://img.shields.io/github/last-commit/Alex7Kom/node-steam-tradeoffers)](https://github.com/Alex7Kom/node-steam-tradeoffers) - Steam Trade Offers for Node.js.
- [steam-tradeoffer-manager ![GitHub Repo Stars](https://img.shields.io/github/stars/DoctorMcKay/node-steam-tradeoffer-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/DoctorMcKay/node-steam-tradeoffer-manager)](https://github.com/DoctorMcKay/node-steam-tradeoffer-manager) - Simple and sane Steam trade offer management.
- [steam-inventory-stream ![GitHub Repo Stars](https://img.shields.io/github/stars/timvandam/steam-inventory-stream) ![GitHub last commit](https://img.shields.io/github/last-commit/timvandam/steam-inventory-stream)](https://github.com/timvandam/steam-inventory-stream) - Fetch inventories as readable streams.
- [steam-inventory-api-ng ![GitHub Repo Stars](https://img.shields.io/github/stars/itsjfx/node-steam-inventory-api-ng) ![GitHub last commit](https://img.shields.io/github/last-commit/itsjfx/node-steam-inventory-api-ng)](https://github.com/itsjfx/node-steam-inventory-api-ng) - A Steam Inventory API wrapper with advanced features such as retries and proxy support.

#### Game Interaction

- [steam-gameserver ![GitHub Repo Stars](https://img.shields.io/github/stars/DoctorMcKay/node-steam-gameserver) ![GitHub last commit](https://img.shields.io/github/last-commit/DoctorMcKay/node-steam-gameserver)](https://github.com/DoctorMcKay/node-steam-gameserver) - Steam client handler for Gameserver and AnonGameserver account types.
- [tf2 ![GitHub Repo Stars](https://img.shields.io/github/stars/DoctorMcKay/node-tf2) ![GitHub last commit](https://img.shields.io/github/last-commit/DoctorMcKay/node-tf2)](https://github.com/DoctorMcKay/node-tf2) - Interact directly with TF2 game coordinator.
- [csgo ![GitHub Repo Stars](https://img.shields.io/github/stars/joshuaferrara/node-csgo) ![GitHub last commit](https://img.shields.io/github/last-commit/joshuaferrara/node-csgo)](https://github.com/joshuaferrara/node-csgo) - Interact directly with CS:GO game coordinator.
- [dota2 ![GitHub Repo Stars](https://img.shields.io/github/stars/RJacksonm1/node-dota2) ![GitHub last commit](https://img.shields.io/github/last-commit/RJacksonm1/node-dota2)](https://github.com/RJacksonm1/node-dota2) - Interact directly with Dota 2 game coordinator.

#### Community & Store Automation

- [steamcommunity ![GitHub Repo Stars](https://img.shields.io/github/stars/DoctorMcKay/node-steamcommunity) ![GitHub last commit](https://img.shields.io/github/last-commit/DoctorMcKay/node-steamcommunity)](https://github.com/DoctorMcKay/node-steamcommunity) - Interact with steamcommunity.com. Also allows to confirm trade offers.
- [steamstore ![GitHub Repo Stars](https://img.shields.io/github/stars/DoctorMcKay/node-steamstore) ![GitHub last commit](https://img.shields.io/github/last-commit/DoctorMcKay/node-steamstore)](https://github.com/DoctorMcKay/node-steamstore) - Interact with store.steampowered.com.
- [steam-weblogon ![GitHub Repo Stars](https://img.shields.io/github/stars/Alex7Kom/node-steam-weblogon) ![GitHub last commit](https://img.shields.io/github/last-commit/Alex7Kom/node-steam-weblogon)](https://github.com/Alex7Kom/node-steam-weblogon) - Retrieve SteamCommunity cookies if you are running Steam network client.
- [steam-web-api-key ![GitHub Repo Stars](https://img.shields.io/github/stars/Alex7Kom/node-steam-web-api-key) ![GitHub last commit](https://img.shields.io/github/last-commit/Alex7Kom/node-steam-web-api-key)](https://github.com/Alex7Kom/node-steam-web-api-key) - Automatically registers and retrieves Steam API key.
- [steam-parental ![GitHub Repo Stars](https://img.shields.io/github/stars/Alex7Kom/node-steam-parental) ![GitHub last commit](https://img.shields.io/github/last-commit/Alex7Kom/node-steam-parental)](https://github.com/Alex7Kom/node-steam-parental) - Disable parental lock.

#### Authentication

- [steam-login ![GitHub Repo Stars](https://img.shields.io/github/stars/cpancake/steam-login) ![GitHub last commit](https://img.shields.io/github/last-commit/cpancake/steam-login)](https://github.com/cpancake/steam-login) - Simple Connect / Express Steam authentication library.
- [passport-steam ![GitHub Repo Stars](https://img.shields.io/github/stars/liamcurry/passport-steam) ![GitHub last commit](https://img.shields.io/github/last-commit/liamcurry/passport-steam)](https://github.com/liamcurry/passport-steam) - Steam (OpenID) authentication strategy for Passport and Node.js.
- [meteor-accounts-steam ![GitHub Repo Stars](https://img.shields.io/github/stars/scholtzm/meteor-accounts-steam) ![GitHub last commit](https://img.shields.io/github/last-commit/scholtzm/meteor-accounts-steam)](https://github.com/scholtzm/meteor-accounts-steam) - Steam OpenID integration for Meteor Accounts.

#### Misc

- [steam-resources ![GitHub Repo Stars](https://img.shields.io/github/stars/seishun/node-steam-resources) ![GitHub last commit](https://img.shields.io/github/last-commit/seishun/node-steam-resources)](https://github.com/seishun/node-steam-resources) - Steam's enums, protobufs and structs.
- [steam-crypto ![GitHub Repo Stars](https://img.shields.io/github/stars/seishun/node-steam-crypto) ![GitHub last commit](https://img.shields.io/github/last-commit/seishun/node-steam-crypto)](https://github.com/seishun/node-steam-crypto) - Node.js implementation of Steam crypto.
- [steam-groups ![GitHub Repo Stars](https://img.shields.io/github/stars/scholtzm/node-steam-groups) ![GitHub last commit](https://img.shields.io/github/last-commit/scholtzm/node-steam-groups)](https://github.com/scholtzm/node-steam-groups) - Custom node-steam handler which provides group functions.
- [steamid ![GitHub Repo Stars](https://img.shields.io/github/stars/DoctorMcKay/node-steamid) ![GitHub last commit](https://img.shields.io/github/last-commit/DoctorMcKay/node-steamid)](https://github.com/DoctorMcKay/node-steamid) - SteamID usage and conversion made easy.
- [steam-totp ![GitHub Repo Stars](https://img.shields.io/github/stars/DoctorMcKay/node-steam-totp) ![GitHub last commit](https://img.shields.io/github/last-commit/DoctorMcKay/node-steam-totp)](https://github.com/DoctorMcKay/node-steam-totp) - Easily generate 2FA codes used by Steam.
- [steam-chat-bot ![GitHub Repo Stars](https://img.shields.io/github/stars/Steam-Chat-Bot/node-steam-chat-bot) ![GitHub last commit](https://img.shields.io/github/last-commit/Steam-Chat-Bot/node-steam-chat-bot)](https://github.com/Steam-Chat-Bot/node-steam-chat-bot) - Simplified interface for a steam chat bot.
- [vdf ![GitHub Repo Stars](https://img.shields.io/github/stars/RJacksonm1/node-vdf) ![GitHub last commit](https://img.shields.io/github/last-commit/RJacksonm1/node-vdf)](https://github.com/RJacksonm1/node-vdf) - vdf to object and vice versa.
- [steamrep ![GitHub Repo Stars](https://img.shields.io/github/stars/scholtzm/node-steamrep) ![GitHub last commit](https://img.shields.io/github/last-commit/scholtzm/node-steamrep)](https://github.com/scholtzm/node-steamrep) - Check user's SteamRep reputation.
- [reptf ![GitHub Repo Stars](https://img.shields.io/github/stars/scholtzm/node-reptf) ![GitHub last commit](https://img.shields.io/github/last-commit/scholtzm/node-reptf)](https://github.com/scholtzm/node-reptf) - Check user's rep.tf reputation.
- [steamapis ![GitHub Repo Stars](https://img.shields.io/github/stars/itsjfx/node-steamapis) ![GitHub last commit](https://img.shields.io/github/last-commit/itsjfx/node-steamapis)](https://github.com/itsjfx/node-steamapis) - Module to use the API of [steamapis.com](https://steamapis.com).

### C&#35;

#### General

- [SteamKit2 ![GitHub Repo Stars](https://img.shields.io/github/stars/SteamRE/SteamKit) ![GitHub last commit](https://img.shields.io/github/last-commit/SteamRE/SteamKit)](https://github.com/SteamRE/SteamKit) - .NET library designed to interoperate with Valve's Steam network.
- [SteamAuth ![GitHub Repo Stars](https://img.shields.io/github/stars/geel9/SteamAuth) ![GitHub last commit](https://img.shields.io/github/last-commit/geel9/SteamAuth)](https://github.com/geel9/SteamAuth) - A C# library that provides vital Steam Mobile Authenticator functionality.
- [SteamBot ![GitHub Repo Stars](https://img.shields.io/github/stars/Jessecar96/SteamBot) ![GitHub last commit](https://img.shields.io/github/last-commit/Jessecar96/SteamBot)](https://github.com/Jessecar96/SteamBot) - Automated bot software for interacting with steam trade.
- [SteamTradeOffersBot ![GitHub Repo Stars](https://img.shields.io/github/stars/waylaidwanderer/SteamTradeOffersBot) ![GitHub last commit](https://img.shields.io/github/last-commit/waylaidwanderer/SteamTradeOffersBot)](https://github.com/waylaidwanderer/SteamTradeOffersBot) - SteamBot fork which focuses on trade offers.
- [SteamStandardProject ![GitHub Repo Stars](https://img.shields.io/github/stars/ObsidianMinor/SteamStandardProject) ![GitHub last commit](https://img.shields.io/github/last-commit/ObsidianMinor/SteamStandardProject)](https://github.com/ObsidianMinor/SteamStandardProject) - A collection of .NET Standard libraries using common types that provide functionality in one or more parts of Steam.

#### Misc

- [BackpackLogin ![GitHub Repo Stars](https://img.shields.io/github/stars/igeligel/BackpackLogin) ![GitHub last commit](https://img.shields.io/github/last-commit/igeligel/BackpackLogin)](https://github.com/igeligel/BackpackLogin) - A .NET Standard library for logging into backpack.tf using Steam credentials.
- [TeamFortressOutpostApi ![GitHub Repo Stars](https://img.shields.io/github/stars/igeligel/TeamFortressOutpostApi) ![GitHub last commit](https://img.shields.io/github/last-commit/igeligel/TeamFortressOutpostApi)](https://github.com/igeligel/TeamFortressOutpostApi) - A .NET Standard class library which allows user to interact with TF2Outpost.
- [SteamGaugesApi ![GitHub Repo Stars](https://img.shields.io/github/stars/igeligel/SteamGaugesApi) ![GitHub last commit](https://img.shields.io/github/last-commit/igeligel/SteamGaugesApi)](https://github.com/igeligel/SteamGaugesApi) - A .NET Standard 2.0 library to automatically use the API of [steamgauges](https://steamgaug.es/).

### PHP

- [SteamCommunity ![GitHub Repo Stars](https://img.shields.io/github/stars/waylaidwanderer/PHP-SteamCommunity) ![GitHub last commit](https://img.shields.io/github/last-commit/waylaidwanderer/PHP-SteamCommunity)](https://github.com/waylaidwanderer/PHP-SteamCommunity) - A PHP library for interacting with the Steam Community website.
- [SteamAuthentication ![GitHub Repo Stars](https://img.shields.io/github/stars/SmItH197/SteamAuthentication) ![GitHub last commit](https://img.shields.io/github/last-commit/SmItH197/SteamAuthentication)](https://github.com/SmItH197/SteamAuthentication) - Steam OpenID authentication with PHP.
- [SteamAuthOOP ![GitHub Repo Stars](https://img.shields.io/github/stars/BlackCetha/SteamAuthOOP) ![GitHub last commit](https://img.shields.io/github/last-commit/BlackCetha/SteamAuthOOP)](https://github.com/BlackCetha/SteamAuthOOP) - An object-oriented alternative to SteamAuthentication.
- [steam-api ![GitHub Repo Stars](https://img.shields.io/github/stars/DaMitchell/steam-api-php) ![GitHub last commit](https://img.shields.io/github/last-commit/DaMitchell/steam-api-php)](https://github.com/DaMitchell/steam-api-php) - A PHP wrapper for the Steam API.
- [steamid ![GitHub Repo Stars](https://img.shields.io/github/stars/DoctorMcKay/php-steamid) ![GitHub last commit](https://img.shields.io/github/last-commit/DoctorMcKay/php-steamid)](https://github.com/DoctorMcKay/php-steamid) - SteamID class for PHP.
- [steam-totp ![GitHub Repo Stars](https://img.shields.io/github/stars/DoctorMcKay/php-steam-totp) ![GitHub last commit](https://img.shields.io/github/last-commit/DoctorMcKay/php-steam-totp)](https://github.com/DoctorMcKay/php-steam-totp) - PHP library to deal with Steam's proprietary TOTP algorithm.
- [steam-auth ![GitHub Repo Stars](https://img.shields.io/github/stars/vikas5914/steam-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/vikas5914/steam-auth)](https://github.com/vikas5914/steam-auth) - An alternative Steam authentication library with Composer support.

### Go

- [steam ![GitHub Repo Stars](https://img.shields.io/github/stars/0xAozora/steam) ![GitHub last commit](https://img.shields.io/github/last-commit/0xAozora/steam)](https://github.com/0xAozora/steam) - Simple steam library for trading in Go.
- [go-steam ![GitHub Repo Stars](https://img.shields.io/github/stars/Philipp15b/go-steam) ![GitHub last commit](https://img.shields.io/github/last-commit/Philipp15b/go-steam)](https://github.com/Philipp15b/go-steam) - Steam's protocol in Go.
- [steam-mobileauth ![GitHub Repo Stars](https://img.shields.io/github/stars/YellowOrWhite/go-steam-mobileauth) ![GitHub last commit](https://img.shields.io/github/last-commit/YellowOrWhite/go-steam-mobileauth)](https://github.com/YellowOrWhite/go-steam-mobileauth) - Port of SteamAuth in Go.

### Python

#### General

- [steam ![GitHub Repo Stars](https://img.shields.io/github/stars/ValvePython/steam) ![GitHub last commit](https://img.shields.io/github/last-commit/ValvePython/steam)](https://github.com/ValvePython/steam) - Module for various interactions with Steam.
- [PySteamKit](https://bitbucket.org/AzuiSleet/pysteamkit) - Python port of SteamKit.
- [steamodd ![GitHub Repo Stars](https://img.shields.io/github/stars/Lagg/steamodd) ![GitHub last commit](https://img.shields.io/github/last-commit/Lagg/steamodd)](https://github.com/Lagg/steamodd) - Steam tools library.
- [steampy ![GitHub Repo Stars](https://img.shields.io/github/stars/bukson/steampy) ![GitHub last commit](https://img.shields.io/github/last-commit/bukson/steampy)](https://github.com/bukson/steampy) - Fully automated Steam trade offers library with SteamGuard support.
- [SteamAPI ![GitHub Repo Stars](https://img.shields.io/github/stars/smiley/steamapi) ![GitHub last commit](https://img.shields.io/github/last-commit/smiley/steamapi)](https://github.com/smiley/steamapi) - An object-oriented Python 2.7+ library for accessing the Steam Web API.
- [Steam-Trade ![GitHub Repo Stars](https://img.shields.io/github/stars/Zwork101/steam-trade) ![GitHub last commit](https://img.shields.io/github/last-commit/Zwork101/steam-trade)](https://github.com/Zwork101/steam-trade) - An asynchronous, event-based trade library.

#### Game Interaction

- [csgo ![GitHub Repo Stars](https://img.shields.io/github/stars/ValvePython/csgo) ![GitHub last commit](https://img.shields.io/github/last-commit/ValvePython/csgo)](https://github.com/ValvePython/csgo) - Python module for interacting with CSGO's Game Coordinator.
- [dota2 ![GitHub Repo Stars](https://img.shields.io/github/stars/ValvePython/dota2) ![GitHub last commit](https://img.shields.io/github/last-commit/ValvePython/dota2)](https://github.com/ValvePython/dota2) - Python module for interacting with Dota 2's Game Coordinator.

#### Misc

- [vpk ![GitHub Repo Stars](https://img.shields.io/github/stars/ValvePython/vpk) ![GitHub last commit](https://img.shields.io/github/last-commit/ValvePython/vpk)](https://github.com/ValvePython/vpk) - Python module for working with Valve's Pack format.
- [vdf ![GitHub Repo Stars](https://img.shields.io/github/stars/ValvePython/vdf) ![GitHub last commit](https://img.shields.io/github/last-commit/ValvePython/vdf)](https://github.com/ValvePython/vdf) - Python module for working with Valve's KeyValue format.

### C++

- [SteamPP ![GitHub Repo Stars](https://img.shields.io/github/stars/seishun/SteamPP) ![GitHub last commit](https://img.shields.io/github/last-commit/seishun/SteamPP)](https://github.com/seishun/SteamPP) - C++ library to interoperate with Steam servers.

### Java

- [SteamKit-Java ![GitHub Repo Stars](https://img.shields.io/github/stars/Top-Cat/SteamKit-Java) ![GitHub last commit](https://img.shields.io/github/last-commit/Top-Cat/SteamKit-Java)](https://github.com/Top-Cat/SteamKit-Java) - Java port of SteamKit.
- [JavaSteam ![GitHub Repo Stars](https://img.shields.io/github/stars/Longi94/JavaSteam) ![GitHub last commit](https://img.shields.io/github/last-commit/Longi94/JavaSteam)](https://github.com/Longi94/JavaSteam) - Java library that provides an interface to directly interact with Valve's Steam servers.

### Objective-C

- [SteamAuth ![GitHub Repo Stars](https://img.shields.io/github/stars/michaelchum/SteamAuth) ![GitHub last commit](https://img.shields.io/github/last-commit/michaelchum/SteamAuth)](https://github.com/michaelchum/SteamAuth) - An iOS wrapper around Steam's OpenID login.

### Ruby

- [steam-trade ![GitHub Repo Stars](https://img.shields.io/github/stars/OmG3r/steam-trade) ![GitHub last commit](https://img.shields.io/github/last-commit/OmG3r/steam-trade)](https://github.com/OmG3r/steam-trade) - Ruby gem for sending trade offers.

## Resources

### General

- [Steam WebAPI @ ValveSoftware](https://developer.valvesoftware.com/wiki/Steam_Web_API)
- [Steam WebAPI @ TF2 Wiki](https://wiki.teamfortress.com/wiki/WebAPI)
- [Steam WebAPI Documentation by xPaw](https://lab.xpaw.me/steam_api_documentation.html)
- [Steam Internal WebAPI Documentation by Revadike ![GitHub Repo Stars](https://img.shields.io/github/stars/Revadike/UnofficialSteamWebAPI) ![GitHub last commit](https://img.shields.io/github/last-commit/Revadike/UnofficialSteamWebAPI)](https://github.com/Revadike/UnofficialSteamWebAPI)
- [Steam as OpenID Provider](http://steamcommunity.com/dev)
- [Steam API Key Registration](http://steamcommunity.com/dev/apikey)
- [Steam Error Codes](https://steamerrors.com/) - List of `EResult` codes with possible explanations.

### Tutorials

- [Creating a Steam Trade Bot with Node.js](https://firepowered.org/developer/create-a-steam-trade-bot-with-nodejs-iojs-updated-for-node-steam-v1-0/)
- [Charred's node.js Guide to Steam Bots ![GitHub Repo Stars](https://img.shields.io/github/stars/charredgrass/nodejs-bot-guide) ![GitHub last commit](https://img.shields.io/github/last-commit/charredgrass/nodejs-bot-guide)](https://github.com/charredgrass/nodejs-bot-guide)
- [In-depth Steam Bot Guide with Node.js ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewda/node-steam-guide) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewda/node-steam-guide)](https://github.com/andrewda/node-steam-guide)
- [Retrieving 2FA Keys from iOS Device](http://forums.backpack.tf/index.php?/topic/45995-guide-how-to-get-your-shared-secret-from-ios-device-steam-mobile/)

### Posts

- [Item IDs Explained](https://dev.doctormckay.com/topic/332-identifying-steam-items/)
- [Everything Related to Escrow](https://www.reddit.com/r/SteamBot/comments/3udhkd/everything_related_to_escrow/)
- [Understanding Avatar Hash](https://www.reddit.com/r/SteamBot/comments/3cv6k7/problem_downloading_an_avatar_using/)

### Standalone Tools

- [NetHook2 ![GitHub Repo Stars](https://img.shields.io/github/stars/SteamRE/SteamKit) ![GitHub last commit](https://img.shields.io/github/last-commit/SteamRE/SteamKit)](https://github.com/SteamRE/SteamKit/tree/master/Resources/NetHook2) - Intercept Steam client's network messages.
- [NetHook2 Analyzer ![GitHub Repo Stars](https://img.shields.io/github/stars/SteamRE/SteamKit) ![GitHub last commit](https://img.shields.io/github/last-commit/SteamRE/SteamKit)](https://github.com/SteamRE/SteamKit/tree/master/Resources/NetHookAnalyzer2) - Inspect messages dumped by NetHook2.
- [steam-auth-web-util](http://scholtzm.github.io/steam-auth-web-util/) - Generate 2FA codes directly in your web browser.
- [SteamDesktopAuthenticator ![GitHub Repo Stars](https://img.shields.io/github/stars/Jessecar96/SteamDesktopAuthenticator) ![GitHub last commit](https://img.shields.io/github/last-commit/Jessecar96/SteamDesktopAuthenticator)](https://github.com/Jessecar96/SteamDesktopAuthenticator) - Desktop implementation of Steam's mobile authenticator app.
- [protonenv ![GitHub Repo Stars](https://img.shields.io/github/stars/rizkiarm/protonenv) ![GitHub last commit](https://img.shields.io/github/last-commit/rizkiarm/protonenv)](https://github.com/rizkiarm/protonenv) - Simple Proton version and prefix management.
- [steam-desktop-authenticator-multiplatform ![GitHub Repo Stars](https://img.shields.io/github/stars/tre3p/steam-desktop-authenticator-multiplatform) ![GitHub last commit](https://img.shields.io/github/last-commit/tre3p/steam-desktop-authenticator-multiplatform)](https://github.com/tre3p/steam-desktop-authenticator-multiplatform) - Steam desktop authenticator.

### Discussion Boards

- [/r/SteamBot](https://www.reddit.com/r/SteamBot)
- [/r/SteamBot Discord](https://discord.gg/0i5X3oDHJbDUsiGC)
- [/r/nodesteam](https://www.reddit.com/r/nodesteam)
- [DoctorMcKay's Dev Forum](https://dev.doctormckay.com/)
- [node-steam-forum ![GitHub Repo Stars](https://img.shields.io/github/stars/steam-forward/node-steam-forum) ![GitHub last commit](https://img.shields.io/github/last-commit/steam-forward/node-steam-forum)](https://github.com/steam-forward/node-steam-forum)

### Third-Party Services

Websites listed below may provide free and/or paid services and are listed alphabetically according to their domain name.

- [backpack.tf](https://backpack.tf/developer) - Provides TF2 prices and Steam market/inventory related services.
- [steamanalyst.com](https://steamanalyst.com/) - Provides CS:GO prices.
- [hexa.one](https://hexa.one/) - Provides prices for several games and Steam market/inventory related services.
- [steamapis.com](https://steamapis.com/) - Provides prices for several games and Steam market/inventory related services.

## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the author and contributors of this text have waived all copyright and related or neighboring rights to this work.
