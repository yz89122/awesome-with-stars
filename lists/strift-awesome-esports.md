# Awesome Esports [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of open-source projects related to esports.

[Esports](https://en.wikipedia.org/wiki/Esports) (also known as electronic sports or e-sports) is a form of competition using video games. It often takes the form of organized, multiplayer video game competitions, particularly between professional players, individually or as teams.

Unmaintained projects, now only relevant for educational purposes, are in the [Archive](ARCHIVE.md).

## Contents

- [Libraries](#libraries)
  - [APIs & Web Services](#apis--web-services)
  - [Authentication](#authentication)
  - [Data parsing and analysis](#data-parsing-and-analysis)
  - [Team management](#team-management)
  - [Tournaments management](#tournaments-management)
- [Developer tools](#developer-tools)
- [Unofficial documentation](#unofficial-documentation)
- [Applications & Tools](#applications--tools)
- [Education](#education)

## Libraries

> Programming libraries organized per use cases.

### APIs & Web Services

- [Blizzard.js ![GitHub Repo Stars](https://img.shields.io/github/stars/benweier/blizzard.js) ![GitHub last commit](https://img.shields.io/github/last-commit/benweier/blizzard.js)](https://github.com/benweier/blizzard.js) - A Node.js library for interacting with the Blizzard Community Platform API.
- [Discord.js ![GitHub Repo Stars](https://img.shields.io/github/stars/discordjs/discord.js) ![GitHub last commit](https://img.shields.io/github/last-commit/discordjs/discord.js)](https://github.com/discordjs/discord.js) - A Node.js library for interacting with the Discord API.
- [HLTV ![GitHub Repo Stars](https://img.shields.io/github/stars/gigobyte/HLTV) ![GitHub last commit](https://img.shields.io/github/last-commit/gigobyte/HLTV)](https://github.com/gigobyte/HLTV) - A Node.js library for interacting with the HLTV API.
- [liquipediapy ![GitHub Repo Stars](https://img.shields.io/github/stars/c00kie17/liquipediapy) ![GitHub last commit](https://img.shields.io/github/last-commit/c00kie17/liquipediapy)](https://github.com/c00kie17/liquipediapy) - A Python library for interacting with the Liquipedia API.
- [steam ![GitHub Repo Stars](https://img.shields.io/github/stars/ValvePython/steam) ![GitHub last commit](https://img.shields.io/github/last-commit/ValvePython/steam)](https://github.com/ValvePython/steam/) - A Python library for interacting with various parts of Steam.
- [Steam Community ![GitHub Repo Stars](https://img.shields.io/github/stars/DoctorMcKay/node-steamcommunity) ![GitHub last commit](https://img.shields.io/github/last-commit/DoctorMcKay/node-steamcommunity)](https://github.com/DoctorMcKay/node-steamcommunity) - A Node.js library for interacting with the Steam Community website.
- SteamID - A library for manipulating Steam IDs.
  - [Node.js ![GitHub Repo Stars](https://img.shields.io/github/stars/DoctorMcKay/node-steamid) ![GitHub last commit](https://img.shields.io/github/last-commit/DoctorMcKay/node-steamid)](https://github.com/DoctorMcKay/node-steamid)
  - [PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/DoctorMcKay/php-steamid) ![GitHub last commit](https://img.shields.io/github/last-commit/DoctorMcKay/php-steamid)](https://github.com/DoctorMcKay/php-steamid)
- [SteamUser ![GitHub Repo Stars](https://img.shields.io/github/stars/DoctorMcKay/node-steam-user) ![GitHub last commit](https://img.shields.io/github/last-commit/DoctorMcKay/node-steam-user)](https://github.com/DoctorMcKay/node-steam-user) - A Node.js library for interacting with the Steam network via the Steam client protocol.
- [Steam TOTP ![GitHub Repo Stars](https://img.shields.io/github/stars/DoctorMcKay/node-steam-totp) ![GitHub last commit](https://img.shields.io/github/last-commit/DoctorMcKay/node-steam-totp)](https://github.com/DoctorMcKay/node-steam-totp) - A Node.js library for generating Steam-style 2FA codes.
- [valorant.js ![GitHub Repo Stars](https://img.shields.io/github/stars/liamcottle/valorant.js) ![GitHub last commit](https://img.shields.io/github/last-commit/liamcottle/valorant.js)](https://github.com/liamcottle/valorant.js) - A Node.js library for interacting with the VALORANT APIs used in game.

### Authentication

- [Passport-Steam ![GitHub Repo Stars](https://img.shields.io/github/stars/liamcurry/passport-steam) ![GitHub last commit](https://img.shields.io/github/last-commit/liamcurry/passport-steam)](https://github.com/liamcurry/passport-steam) - A Node.js passport authentication strategy for Steam.

### Data parsing and analysis

- [awpy ![GitHub Repo Stars](https://img.shields.io/github/stars/pnxenopoulos/awpy) ![GitHub last commit](https://img.shields.io/github/last-commit/pnxenopoulos/awpy)](https://github.com/pnxenopoulos/awpy) - A Python library for parsing, analyzing, and visualizing CS:GO data.
- [Boxcars ![GitHub Repo Stars](https://img.shields.io/github/stars/nickbabcock/boxcars) ![GitHub last commit](https://img.shields.io/github/last-commit/nickbabcock/boxcars)](https://github.com/nickbabcock/boxcars) - A Rust library for parsing Rocket League replays.
- [Cassiopeia ![GitHub Repo Stars](https://img.shields.io/github/stars/meraki-analytics/cassiopeia) ![GitHub last commit](https://img.shields.io/github/last-commit/meraki-analytics/cassiopeia)](https://github.com/meraki-analytics/cassiopeia) - A Python framework for interacting with and analyzing data from the Riot Games League of Legends API.
- [Clarity ![GitHub Repo Stars](https://img.shields.io/github/stars/skadistats/clarity) ![GitHub last commit](https://img.shields.io/github/last-commit/skadistats/clarity)](https://github.com/skadistats/clarity) - A Java library for parsing CS:GO and Dota 2 replays.
- [demoinfocs-golang ![GitHub Repo Stars](https://img.shields.io/github/stars/markus-wa/demoinfocs-golang) ![GitHub last commit](https://img.shields.io/github/last-commit/markus-wa/demoinfocs-golang)](https://github.com/markus-wa/demoinfocs-golang) - A Go library for parsing and analyzing CS:GO demos (ie. replays.)
- [Rattletrap ![GitHub Repo Stars](https://img.shields.io/github/stars/tfausak/rattletrap) ![GitHub last commit](https://img.shields.io/github/last-commit/tfausak/rattletrap)](https://github.com/tfausak/rattletrap) - A Haskell library for parsing and generating Rocket League replays.

### Team management

- [LoL in-house bot ![GitHub Repo Stars](https://img.shields.io/github/stars/mrtolkien/inhouse_bot) ![GitHub last commit](https://img.shields.io/github/last-commit/mrtolkien/inhouse_bot)](https://github.com/mrtolkien/inhouse_bot) - A Discord bot handling role queue, matchmaking, and rankings for League of Legends in-house games.

### Tournaments management

- [brackets-manager.js ![GitHub Repo Stars](https://img.shields.io/github/stars/Drarig29/brackets-manager.js) ![GitHub last commit](https://img.shields.io/github/last-commit/Drarig29/brackets-manager.js)](https://github.com/Drarig29/brackets-manager.js) - A JavaScript library to manage tournament brackets.
- [brackets-viewer.js ![GitHub Repo Stars](https://img.shields.io/github/stars/Drarig29/brackets-viewer.js) ![GitHub last commit](https://img.shields.io/github/last-commit/Drarig29/brackets-viewer.js)](https://github.com/Drarig29/brackets-viewer.js) - A JavaScript library to display tournament brackets.

## Developer tools

> Tooling for developers.

- [Fortnite VSCode Theme ![GitHub Repo Stars](https://img.shields.io/github/stars/sdras/fortnite-vscode-theme) ![GitHub last commit](https://img.shields.io/github/last-commit/sdras/fortnite-vscode-theme)](https://github.com/sdras/fortnite-vscode-theme) - A Visual Studio Code theme inspired by Fortnite.

## Unofficial documentation

> Community-maintained documentation of editor APIs.

- [BNETDocs ![GitHub Repo Stars](https://img.shields.io/github/stars/BNETDocs/bnetdocs-web) ![GitHub last commit](https://img.shields.io/github/last-commit/BNETDocs/bnetdocs-web)](https://github.com/BNETDocs/bnetdocs-web) - A documentation and discussion website for Blizzard and Battle.net protocols.
- [Rift Explorer ![GitHub Repo Stars](https://img.shields.io/github/stars/Pupix/rift-explorer) ![GitHub last commit](https://img.shields.io/github/last-commit/Pupix/rift-explorer)](https://github.com/Pupix/rift-explorer) - An automatically generated documentation of Riot Games LCU API.
- [valorant-api-docs ![GitHub Repo Stars](https://img.shields.io/github/stars/techchrism/valorant-api-docs) ![GitHub last commit](https://img.shields.io/github/last-commit/techchrism/valorant-api-docs)](https://github.com/techchrism/valorant-api-docs) - An automatically generated documentation of Valorant internal API.

## Applications & Tools

> Applications and general-purpose tooling.

- [Esport Team Logos ![GitHub Repo Stars](https://img.shields.io/github/stars/lootmarket/esport-team-logos) ![GitHub last commit](https://img.shields.io/github/last-commit/lootmarket/esport-team-logos)](https://github.com/lootmarket/esport-team-logos) - A database of Esports teams logos.

**Counter-Strike: Global Offensive**

- [Boltobserv ![GitHub Repo Stars](https://img.shields.io/github/stars/boltgolt/boltobserv) ![GitHub last commit](https://img.shields.io/github/last-commit/boltgolt/boltobserv)](https://github.com/boltgolt/boltobserv) - An external Counter-Strike: Global Offensive radar for observers.

**Dota 2**

- [Open Dota ![GitHub Repo Stars](https://img.shields.io/github/stars/odota/core) ![GitHub last commit](https://img.shields.io/github/last-commit/odota/core)](https://github.com/odota/core) - A website for Dota 2 esports stats.

**League of Legends**

- [Foldy Sheet ![GitHub Repo Stars](https://img.shields.io/github/stars/chhopsky/foldysheet) ![GitHub last commit](https://img.shields.io/github/last-commit/chhopsky/foldysheet)](https://github.com/chhopsky/foldysheet) - A Python script to determine whether teams can make playoffs or not.
- [LeagueDirector ![GitHub Repo Stars](https://img.shields.io/github/stars/RiotGames/leaguedirector) ![GitHub last commit](https://img.shields.io/github/last-commit/RiotGames/leaguedirector)](https://github.com/RiotGames/leaguedirector) - A desktop application for staging and recording videos from League of Legends replays.
- [LeagueStats ![GitHub Repo Stars](https://img.shields.io/github/stars/vkaelin/LeagueStats) ![GitHub last commit](https://img.shields.io/github/last-commit/vkaelin/LeagueStats)](https://github.com/vkaelin/LeagueStats) - A website for League of Legends summoners' stats.

## Education

- [League of Legends Analytics ![GitHub Repo Stars](https://img.shields.io/github/stars/FloPrm/lol_analytics) ![GitHub last commit](https://img.shields.io/github/last-commit/FloPrm/lol_analytics)](https://github.com/FloPrm/lol_analytics) - A collection of League of Legends data-related guides, libraries, and learning materials for Data Analysts.

## Contributing

Contributions welcome! Read the [contribution guidelines](CONTRIBUTING.md) first.
