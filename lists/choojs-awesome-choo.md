# Awesome choo [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) <div align="right">:steam_locomotive::train::train::train::train::train:</div>

> [choo](https://choo.io/) is a `4kb` framework for creating
> sturdy frontend applications

## Contents

- [Official resources](#official-resources)
- [Dependencies](#dependencies)
- [Demos](#demos)
- [Community](#community)
- [Plugins and addons](#plugins-and-addons)
- [Elements](#elements)
- [CLI Templates](#cli-templates)
- [Resources](#resources)
- [Projects using choo](#projects-using-choo)

### Official resources

- [Docs ![GitHub Repo Stars](https://img.shields.io/github/stars/yoshuawuyts/choo) ![GitHub last commit](https://img.shields.io/github/last-commit/yoshuawuyts/choo)](https://github.com/yoshuawuyts/choo/blob/master/README.md)
- [Handbook ![GitHub Repo Stars](https://img.shields.io/github/stars/yoshuawuyts/choo-handbook) ![GitHub last commit](https://img.shields.io/github/last-commit/yoshuawuyts/choo-handbook)](https://github.com/yoshuawuyts/choo-handbook)
- [Repo ![GitHub Repo Stars](https://img.shields.io/github/stars/yoshuawuyts/choo) ![GitHub last commit](https://img.shields.io/github/last-commit/yoshuawuyts/choo)](https://github.com/yoshuawuyts/choo)
- [Website](https://choo.io/)
- [Twitter thread](https://twitter.com/yoshuawuyts/status/730087077803528193)

### Dependencies
`choo` is a modular framework. These are the dependencies it glues together
under the hood:

- [bel ![GitHub Repo Stars](https://img.shields.io/github/stars/shama/bel) ![GitHub last commit](https://img.shields.io/github/last-commit/shama/bel)](https://github.com/shama/bel) - Create composable DOM elements using
  template strings.
- [hyperx ![GitHub Repo Stars](https://img.shields.io/github/stars/substack/hyperx) ![GitHub last commit](https://img.shields.io/github/last-commit/substack/hyperx)](https://github.com/substack/hyperx) - Convert template strings to
  library backends.
- [nanomorph ![GitHub Repo Stars](https://img.shields.io/github/stars/choojs/nanomorph) ![GitHub last commit](https://img.shields.io/github/last-commit/choojs/nanomorph)](https://github.com/choojs/nanomorph) - Hyper fast diffing algorithm for real DOM nodes.
- [nanoraf ![GitHub Repo Stars](https://img.shields.io/github/stars/yoshuawuyts/nanoraf) ![GitHub last commit](https://img.shields.io/github/last-commit/yoshuawuyts/nanoraf)](https://github.com/yoshuawuyts/nanoraf) - Only call RAF when needed.
- [nanorouter ![GitHub Repo Stars](https://img.shields.io/github/stars/choojs/nanorouter) ![GitHub last commit](https://img.shields.io/github/last-commit/choojs/nanorouter)](https://github.com/choojs/nanorouter) - Smol frontend router.
- [nanobus ![GitHub Repo Stars](https://img.shields.io/github/stars/choojs/nanobus) ![GitHub last commit](https://img.shields.io/github/last-commit/choojs/nanobus)](https://github.com/choojs/nanobus) - Tiny message bus.
- [nanolocation ![GitHub Repo Stars](https://img.shields.io/github/stars/choojs/nanolocation) ![GitHub last commit](https://img.shields.io/github/last-commit/choojs/nanolocation)](https://github.com/choojs/nanolocation) - Small window.location library.
- [nanohref ![GitHub Repo Stars](https://img.shields.io/github/stars/choojs/nanohref) ![GitHub last commit](https://img.shields.io/github/last-commit/choojs/nanohref)](https://github.com/choojs/nanohref) - Tiny href click handler library.
- [nanoquery ![GitHub Repo Stars](https://img.shields.io/github/stars/choojs/nanoquery) ![GitHub last commit](https://img.shields.io/github/last-commit/choojs/nanoquery)](https://github.com/choojs/nanoquery) - Tiny querystring module.
- [nanotiming ![GitHub Repo Stars](https://img.shields.io/github/stars/choojs/nanotiming) ![GitHub last commit](https://img.shields.io/github/last-commit/choojs/nanotiming)](https://github.com/choojs/nanotiming) - Small timing library.

### Demos

- [Input example](http://requirebin.com/?gist=e589473373b3100a6ace29f7bbee3186) - ([repo ![GitHub Repo Stars](https://img.shields.io/github/stars/yoshuawuyts/choo) ![GitHub last commit](https://img.shields.io/github/last-commit/yoshuawuyts/choo)](https://github.com/yoshuawuyts/choo/tree/master/examples/title))
- [HTTP effects](https://hyperdev.com/#!/project/fork-fang)
- [Mailbox routing ![GitHub Repo Stars](https://img.shields.io/github/stars/yoshuawuyts/choo) ![GitHub last commit](https://img.shields.io/github/last-commit/yoshuawuyts/choo)](https://github.com/yoshuawuyts/choo/tree/master/examples/mailbox)
- [TodoMVC](http://shuheikagawa.com/todomvc-choo) - ([repo ![GitHub Repo Stars](https://img.shields.io/github/stars/shuhei/todomvc-choo) ![GitHub last commit](https://img.shields.io/github/last-commit/shuhei/todomvc-choo)](https://github.com/shuhei/todomvc-choo))
- [choo-firebase](https://choo-firebase-2ec21.firebaseapp.com) - ([repo ![GitHub Repo Stars](https://img.shields.io/github/stars/mw222rs/choo-firebase) ![GitHub last commit](https://img.shields.io/github/last-commit/mw222rs/choo-firebase)](https://github.com/mw222rs/choo-firebase))
- [Grow](https://grow.static.land) - ([repo ![GitHub Repo Stars](https://img.shields.io/github/stars/sethvincent/grow) ![GitHub last commit](https://img.shields.io/github/last-commit/sethvincent/grow)](https://github.com/sethvincent/grow))
- [Chatbot](http://chootbot.herokuapp.com) - ([repo ![GitHub Repo Stars](https://img.shields.io/github/stars/plaey/chatbot) ![GitHub last commit](https://img.shields.io/github/last-commit/plaey/chatbot)](https://github.com/plaey/chatbot))
- [chat-random ![GitHub Repo Stars](https://img.shields.io/github/stars/akiva/chat-random) ![GitHub last commit](https://img.shields.io/github/last-commit/akiva/chat-random)](https://github.com/akiva/chat-random)
- [choo-leaflet-demo ![GitHub Repo Stars](https://img.shields.io/github/stars/timwis/choo-leaflet-demo) ![GitHub last commit](https://img.shields.io/github/last-commit/timwis/choo-leaflet-demo)](https://github.com/timwis/choo-leaflet-demo)
- [choo-scriber](https://zhouhansen.github.io/choo-scriber) - ([repo ![GitHub Repo Stars](https://img.shields.io/github/stars/ZhouHansen/choo-scriber) ![GitHub last commit](https://img.shields.io/github/last-commit/ZhouHansen/choo-scriber)](https://github.com/ZhouHansen/choo-scriber))

### Community

- [Freenode](https://webchat.freenode.net/?channels=choo)

### Plugins and addons

- [choo-location-electron ![GitHub Repo Stars](https://img.shields.io/github/stars/bcomnes/choo-location-electron) ![GitHub last commit](https://img.shields.io/github/last-commit/bcomnes/choo-location-electron)](https://github.com/bcomnes/choo-location-electron) - Fix `choo`'s router in electron.
- [choo-log ![GitHub Repo Stars](https://img.shields.io/github/stars/yoshuawuyts/choo-log) ![GitHub last commit](https://img.shields.io/github/last-commit/yoshuawuyts/choo-log)](https://github.com/yoshuawuyts/choo-log) - Development logger for choo.
- [choo-test ![GitHub Repo Stars](https://img.shields.io/github/stars/mantoni/choo-test) ![GitHub last commit](https://img.shields.io/github/last-commit/mantoni/choo-test)](https://github.com/mantoni/choo-test) - Easy choo app unit testing.
- [choo-persist ![GitHub Repo Stars](https://img.shields.io/github/stars/yoshuawuyts/choo-persist) ![GitHub last commit](https://img.shields.io/github/last-commit/yoshuawuyts/choo-persist)](https://github.com/yoshuawuyts/choo-persist/) - Synchronize choo state with LocalStorage.
- [choo-promise ![GitHub Repo Stars](https://img.shields.io/github/stars/rahatarmanahmed/choo-promise) ![GitHub last commit](https://img.shields.io/github/last-commit/rahatarmanahmed/choo-promise)](https://github.com/rahatarmanahmed/choo-promise) - Use promises in effects and subscriptions.
- [choo-pull ![GitHub Repo Stars](https://img.shields.io/github/stars/yoshuawuyts/choo-pull) ![GitHub last commit](https://img.shields.io/github/last-commit/yoshuawuyts/choo-pull)](https://github.com/yoshuawuyts/choo-pull) - Wrap handlers to use pull-stream in a choo plugin.
- [choo-redirect ![GitHub Repo Stars](https://img.shields.io/github/stars/yoshuawuyts/choo-redirect) ![GitHub last commit](https://img.shields.io/github/last-commit/yoshuawuyts/choo-redirect)](https://github.com/yoshuawuyts/choo-redirect) - Redirect a view to another view.
- [choo-model ![GitHub Repo Stars](https://img.shields.io/github/stars/yoshuawuyts/choo-model) ![GitHub last commit](https://img.shields.io/github/last-commit/yoshuawuyts/choo-model)](https://github.com/yoshuawuyts/choo-model) - Experimental state management lib for choo.
- [choo-resume ![GitHub Repo Stars](https://img.shields.io/github/stars/bengourley/choo-resume) ![GitHub last commit](https://img.shields.io/github/last-commit/bengourley/choo-resume)](https://github.com/bengourley/choo-resume) - choo-resume + hot-rld = hot app reload in choo.
- [choo-detached ![GitHub Repo Stars](https://img.shields.io/github/stars/graforlock/choo-detached) ![GitHub last commit](https://img.shields.io/github/last-commit/graforlock/choo-detached)](https://github.com/graforlock/choo-detached) - Use `choo` as a mountable, simple stand-alone component (no routing).
- [choo-service-worker ![GitHub Repo Stars](https://img.shields.io/github/stars/choojs/choo-service-worker) ![GitHub last commit](https://img.shields.io/github/last-commit/choojs/choo-service-worker)](https://github.com/choojs/choo-service-worker) - Service worker loader for `choo`.
- [choo-websocket ![GitHub Repo Stars](https://img.shields.io/github/stars/YerkoPalma/choo-websocket) ![GitHub last commit](https://img.shields.io/github/last-commit/YerkoPalma/choo-websocket)](https://github.com/YerkoPalma/choo-websocket) - Small wraper around WebSocket browser API, for `choo` apps.
- [choo-store ![GitHub Repo Stars](https://img.shields.io/github/stars/ungoldman/choo-store) ![GitHub last commit](https://img.shields.io/github/last-commit/ungoldman/choo-store)](https://github.com/ungoldman/choo-store) - Lightweight state structure for choo apps.

### Elements

- [dom-notifications ![GitHub Repo Stars](https://img.shields.io/github/stars/finnp/dom-notifications) ![GitHub last commit](https://img.shields.io/github/last-commit/finnp/dom-notifications)](https://github.com/finnp/dom-notifications) - Atom-inspired notifications component.
- [choodown ![GitHub Repo Stars](https://img.shields.io/github/stars/trainyard/choodown) ![GitHub last commit](https://img.shields.io/github/last-commit/trainyard/choodown)](https://github.com/trainyard/choodown) - A simple markdown component for choo.
- [choo-md-editor ![GitHub Repo Stars](https://img.shields.io/github/stars/dbtek/choo-md-editor) ![GitHub last commit](https://img.shields.io/github/last-commit/dbtek/choo-md-editor)](https://github.com/dbtek/choo-md-editor) - Lightweight markdown editor that can be used inside Choo app or as a standalone library.
- [choo-chartist ![GitHub Repo Stars](https://img.shields.io/github/stars/rexmortus/choo-chartist) ![GitHub last commit](https://img.shields.io/github/last-commit/rexmortus/choo-chartist)](https://github.com/rexmortus/choo-chartist) - A little component for using [Chartist](https://gionkunz.github.io/chartist-js/) with the choo framework.

### CLI Templates

Templates for [choo-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/trainyard/choo-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/trainyard/choo-cli)](https://github.com/trainyard/choo-cli)

- [trainyard/template-basic ![GitHub Repo Stars](https://img.shields.io/github/stars/trainyard/template-basic) ![GitHub last commit](https://img.shields.io/github/last-commit/trainyard/template-basic)](https://github.com/trainyard/template-basic)
- [haroenv/template-webpack ![GitHub Repo Stars](https://img.shields.io/github/stars/haroenv/template-webpack) ![GitHub last commit](https://img.shields.io/github/last-commit/haroenv/template-webpack)](https://github.com/haroenv/template-webpack)
- [simonwjackson/atomic-choo ![GitHub Repo Stars](https://img.shields.io/github/stars/simonwjackson/atomic-choo) ![GitHub last commit](https://img.shields.io/github/last-commit/simonwjackson/atomic-choo)](https://github.com/simonwjackson/atomic-choo) - An opinionated project seed to get started developing with electron, webpack and choo.

Other CLI templates
- [graforlock/choo-bandwagon ![GitHub Repo Stars](https://img.shields.io/github/stars/graforlock/choo-bandwagon) ![GitHub last commit](https://img.shields.io/github/last-commit/graforlock/choo-bandwagon)](https://github.com/graforlock/choo-bandwagon)

### Resources
> :movie_camera: : videos
> :computer: : tutorials
> :book: : articles

- :computer: [Your first choo app](https://yoshuawuyts.gitbooks.io/choo/content/02_your_first_app.html)
- :movie_camera: [TCBY community live hangout](https://www.youtube.com/watch?v=a97Mw2z1SAI)
- :book: [A better frontend experience](https://medium.com/@yoshuawuyts/a-better-frontend-experience-7b0498c85658)
- :book: [Composition in CycleJS, choo, React and Angular2](http://blog.krawaller.se/posts/composition-in-cyclejs-choo-react-and-angular2)
- :book: [Stupidly smart components in choo](http://blog.krawaller.se/posts/stupidly-smart-components-in-choo)

### Projects using choo

- [boxcar ![GitHub Repo Stars](https://img.shields.io/github/stars/toddself/boxcar) ![GitHub last commit](https://img.shields.io/github/last-commit/toddself/boxcar)](https://github.com/toddself/boxcar) - A choo-based grid/spreadsheet editor.
- [choo-sortable ![GitHub Repo Stars](https://img.shields.io/github/stars/willkessler/choo-sortable) ![GitHub last commit](https://img.shields.io/github/last-commit/willkessler/choo-sortable)](https://github.com/willkessler/choo-sortable) - Building sortable code with choo.
- [hacker-choo ![GitHub Repo Stars](https://img.shields.io/github/stars/mw222rs/hacker-choo) ![GitHub last commit](https://img.shields.io/github/last-commit/mw222rs/hacker-choo)](https://github.com/mw222rs/hacker-choo) - Hacker Typer clone written in choo.
- [footprint-rechoo ![GitHub Repo Stars](https://img.shields.io/github/stars/npeihl/footprint-rechoo) ![GitHub last commit](https://img.shields.io/github/last-commit/npeihl/footprint-rechoo)](https://github.com/npeihl/footprint-rechoo) - A choo rewrite of [footprint-review ![GitHub Repo Stars](https://img.shields.io/github/stars/sjcgis/footprint-review) ![GitHub last commit](https://img.shields.io/github/last-commit/sjcgis/footprint-review)](http://github.com/sjcgis/footprint-review).
- [minidocs ![GitHub Repo Stars](https://img.shields.io/github/stars/freeman-lab/minidocs) ![GitHub last commit](https://img.shields.io/github/last-commit/freeman-lab/minidocs)](https://github.com/freeman-lab/minidocs) – A documentation site generator built with choo.
- [dataface ![GitHub Repo Stars](https://img.shields.io/github/stars/timwis/dataface) ![GitHub last commit](https://img.shields.io/github/last-commit/timwis/dataface)](https://github.com/timwis/dataface) - Desktop application to manage databases.
- [BlankUp ![GitHub Repo Stars](https://img.shields.io/github/stars/HoverBaum/BlankUp-Electron) ![GitHub last commit](https://img.shields.io/github/last-commit/HoverBaum/BlankUp-Electron)](https://github.com/HoverBaum/BlankUp-Electron) - Multiplatform markdown editor.
- [hackernews-choo ![GitHub Repo Stars](https://img.shields.io/github/stars/kvnneff/hackernews-choo) ![GitHub last commit](https://img.shields.io/github/last-commit/kvnneff/hackernews-choo)](https://github.com/kvnneff/hackernews-choo) - A Hacker News reader built with choo.
- [tic-tac-choo ![GitHub Repo Stars](https://img.shields.io/github/stars/YerkoPalma/tic-tac-toe) ![GitHub last commit](https://img.shields.io/github/last-commit/YerkoPalma/tic-tac-toe)](https://github.com/YerkoPalma/tic-tac-toe) - Progressive tic tac toe game, made with choo.
- [enviar ![GitHub Repo Stars](https://img.shields.io/github/stars/timwis/enviar) ![GitHub last commit](https://img.shields.io/github/last-commit/timwis/enviar)](https://github.com/timwis/enviar) - Chat interface for SMS / text messages.
- [kaktus ![GitHub Repo Stars](https://img.shields.io/github/stars/kaktus/kaktus) ![GitHub last commit](https://img.shields.io/github/last-commit/kaktus/kaktus)](https://github.com/kaktus/kaktus) - A new minimalistic web browser, built on `choo` and IndexedDB.
- [civicdr.org ![GitHub Repo Stars](https://img.shields.io/github/stars/CiviCDR/civicdr.org) ![GitHub last commit](https://img.shields.io/github/last-commit/CiviCDR/civicdr.org)](https://github.com/CiviCDR/civicdr.org) - Website for [CiviCDR](https://civicdr.org/).
- [nekocafe ![GitHub Repo Stars](https://img.shields.io/github/stars/notenoughneon/nekocafe) ![GitHub last commit](https://img.shields.io/github/last-commit/notenoughneon/nekocafe)](https://github.com/notenoughneon/nekocafe) - Web chat room :cat: :speech_balloon:.
- [Robotopia ![GitHub Repo Stars](https://img.shields.io/github/stars/robotopia-x/robotopia) ![GitHub last commit](https://img.shields.io/github/last-commit/robotopia-x/robotopia)](https://github.com/robotopia-x/robotopia) - Introducing kids to coding with tiny virtual robots!
- [busca ![GitHub Repo Stars](https://img.shields.io/github/stars/afk-mcz/busca) ![GitHub last commit](https://img.shields.io/github/last-commit/afk-mcz/busca)](https://github.com/afk-mcz/busca) - A small web-extension to search the current tab on reddit.
- [choo-ban ![GitHub Repo Stars](https://img.shields.io/github/stars/luizbaldi/choo-ban) ![GitHub last commit](https://img.shields.io/github/last-commit/luizbaldi/choo-ban)](https://github.com/luizbaldi/choo-ban) - Simple kanban to manage board tasks, built with `choo`.
- [boowa ![GitHub Repo Stars](https://img.shields.io/github/stars/boowajs/boowa) ![GitHub last commit](https://img.shields.io/github/last-commit/boowajs/boowa)](https://github.com/boowajs/boowa) - A fun blog generator, built with `choo`.
- [hyperamp ![GitHub Repo Stars](https://img.shields.io/github/stars/hypermodules/hyperamp) ![GitHub last commit](https://img.shields.io/github/last-commit/hypermodules/hyperamp)](https://github.com/hypermodules/hyperamp) - Humble music player.

### License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Yerko Palma](https://github.com/YerkoPalma) has waived all copyright and related or neighboring rights to this work.
