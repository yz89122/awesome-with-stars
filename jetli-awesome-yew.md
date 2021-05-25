# Awesome Yew [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="https://github.com/jetli/awesome-yew/raw/master/logo.svg" align="right" width="100" title="Awesome Yew"> ![GitHub Repo stars](https://img.shields.io/github/stars/yewstack/yew) ![GitHub last commit](https://img.shields.io/github/last-commit/yewstack/yew)](https://github.com/yewstack/yew)

> A curated list of awesome things related to Yew.

[Yew ![GitHub Repo stars](https://img.shields.io/github/stars/yewstack/yew) ![GitHub last commit](https://img.shields.io/github/last-commit/yewstack/yew)](https://github.com/yewstack/yew) is a modern Rust framework inspired by Elm and React for creating multi-threaded frontend apps with WebAssembly.

Contributions welcome! Read the [contribution guidelines](CONTRIBUTING.md) first.

## Contents

- [Official](#official)
- [Projects](#projects)
- [Templates](#templates)
- [Crates](#crates)
  - [Component Libraries](#component-libraries)
  - [Components](#components)
  - [Utils](#utils)
  - [Wasm](#wasm)
- [Tooling](#tooling)
- [Articles](#articles)
- [Books](#books)
- [Alternatives](#alternatives)
- [Related lists](#related-lists)

## Official

- [Yew ![GitHub Repo stars](https://img.shields.io/github/stars/yewstack/yew) ![GitHub last commit](https://img.shields.io/github/last-commit/yewstack/yew)](https://github.com/yewstack/yew) - Rust / WebAssembly framework for building client web apps.
- [Live demo](https://yew-todomvc.netlify.com) - A todomvc demo.
- [Examples ![GitHub Repo stars](https://img.shields.io/github/stars/yewstack/yew) ![GitHub last commit](https://img.shields.io/github/last-commit/yewstack/yew)](https://github.com/yewstack/yew/tree/master/examples) - Smaller examples included in official repo.
- [API Docs](https://docs.rs/yew) - Docs on docs.rs.
- [Website](https://yew.rs/) - Official website.
- [Chatroom](https://discord.gg/VQck8X4) - It is pretty active and is a great place to ask questions.
- [Reddit](https://www.reddit.com/r/yew_web/) - Dedicated Sub Reddit.
- [Financial Contribute](https://opencollective.com/yew) - Become a financial contributor and help us sustain our community.
- [Yewtify ![GitHub Repo stars](https://img.shields.io/github/stars/yewstack/yewtify) ![GitHub last commit](https://img.shields.io/github/last-commit/yewstack/yewtify)](https://github.com/yewstack/yewtify) - Vuetify components for Yew Framework.

## Projects

- [Realworld example ![GitHub Repo stars](https://img.shields.io/github/stars/jetli/rust-yew-realworld-example-app) ![GitHub last commit](https://img.shields.io/github/last-commit/jetli/rust-yew-realworld-example-app)](https://github.com/jetli/rust-yew-realworld-example-app) - Exemplary real world app built with Rust + Yew + WebAssembly.
- [webapp.rs ![GitHub Repo stars](https://img.shields.io/github/stars/saschagrunert/webapp.rs) ![GitHub last commit](https://img.shields.io/github/last-commit/saschagrunert/webapp.rs)](https://github.com/saschagrunert/webapp.rs) - A web application completely written in Rust, frontend is built with Yew.
- [Rust-Full-Stack ![GitHub Repo stars](https://img.shields.io/github/stars/steadylearner/Rust-Full-Stack) ![GitHub last commit](https://img.shields.io/github/last-commit/steadylearner/Rust-Full-Stack)](https://github.com/steadylearner/Rust-Full-Stack) - Easily testable and working Rust codes with blog posts to explain them.
- [Bucket Questions ![GitHub Repo stars](https://img.shields.io/github/stars/hgzimmerman/BucketQuestions) ![GitHub last commit](https://img.shields.io/github/last-commit/hgzimmerman/BucketQuestions)](https://github.com/hgzimmerman/BucketQuestions) - A webapp written entirely in Rust for a dumb party game.
- [web-view todomvc desktop app ![GitHub Repo stars](https://img.shields.io/github/stars/Extrawurst/rust-webview-todomvc-yew) ![GitHub last commit](https://img.shields.io/github/last-commit/Extrawurst/rust-webview-todomvc-yew)](https://github.com/Extrawurst/rust-webview-todomvc-yew) - Demo how to use yew for a todomvc that compiles to WebAssembly and is bundled as a lightweight(~2mb) desktop app by [web-view ![GitHub Repo stars](https://img.shields.io/github/stars/Boscop/web-view) ![GitHub last commit](https://img.shields.io/github/last-commit/Boscop/web-view)](https://github.com/Boscop/web-view), as an alternative to Electron, [web-view ![GitHub Repo stars](https://img.shields.io/github/stars/Boscop/web-view) ![GitHub last commit](https://img.shields.io/github/last-commit/Boscop/web-view)](https://github.com/Boscop/web-view) also has a [demo ![GitHub Repo stars](https://img.shields.io/github/stars/Boscop/web-view) ![GitHub last commit](https://img.shields.io/github/last-commit/Boscop/web-view)](https://github.com/Boscop/web-view/tree/master/examples#todo-yew).
- [yew-react-example ![GitHub Repo stars](https://img.shields.io/github/stars/hobofan/yew-react-example) ![GitHub last commit](https://img.shields.io/github/last-commit/hobofan/yew-react-example)](https://github.com/hobofan/yew-react-example) - This project shows how to create a web app using a React component inside a Yew component.
- [Kirk ![GitHub Repo stars](https://img.shields.io/github/stars/stkevintan/Kirk) ![GitHub last commit](https://img.shields.io/github/last-commit/stkevintan/Kirk)](https://github.com/stkevintan/Kirk) - Just A Rust WebAssembly Blog.
- [rust-async-wasm-demo ![GitHub Repo stars](https://img.shields.io/github/stars/extraymond/rust-async-wasm-demo) ![GitHub last commit](https://img.shields.io/github/last-commit/extraymond/rust-async-wasm-demo)](https://github.com/extraymond/rust-async-wasm-demo) - Toy project to learn Rust and async that can be deployed to the web.
- [karaoke-rs ![GitHub Repo stars](https://img.shields.io/github/stars/tarkah/karaoke-rs) ![GitHub last commit](https://img.shields.io/github/last-commit/tarkah/karaoke-rs)](https://github.com/tarkah/karaoke-rs) - A simple, network enabled karaoke player in Rust.
- [I Love Hue! (rs) ![GitHub Repo stars](https://img.shields.io/github/stars/noc7c9/i-love-hue-rs) ![GitHub last commit](https://img.shields.io/github/last-commit/noc7c9/i-love-hue-rs)](https://github.com/noc7c9/i-love-hue-rs) - A clone of the mobile game I Love Hue in Yew (Rust).
- [yew-styles-page ![GitHub Repo stars](https://img.shields.io/github/stars/spielrs/yew-styles-page) ![GitHub last commit](https://img.shields.io/github/last-commit/spielrs/yew-styles-page)](https://github.com/spielrs/yew-styles-page) - This is an initial project of a framework style for yew.
- [caniuse.rs ![GitHub Repo stars](https://img.shields.io/github/stars/jplatte/caniuse.rs) ![GitHub last commit](https://img.shields.io/github/last-commit/jplatte/caniuse.rs)](https://github.com/jplatte/caniuse.rs) - Rust feature search.
- [Rust electron yew demo ![GitHub Repo stars](https://img.shields.io/github/stars/Extrawurst/rust-electron-demo) ![GitHub last commit](https://img.shields.io/github/last-commit/Extrawurst/rust-electron-demo)](https://github.com/Extrawurst/rust-electron-demo) - An example of building a Rust based web app (Yew) into a native app using electron.
- [covplot ![GitHub Repo stars](https://img.shields.io/github/stars/jbowens/covplot) ![GitHub last commit](https://img.shields.io/github/last-commit/jbowens/covplot)](https://github.com/jbowens/covplot) - Live graphs of worldwide CoVID-19 data.
- [Tanoshi ![GitHub Repo stars](https://img.shields.io/github/stars/fadhlika/tanoshi-web) ![GitHub last commit](https://img.shields.io/github/last-commit/fadhlika/tanoshi-web)](https://github.com/fadhlika/tanoshi-web) - Tachiyomi-like web manga reader. Front-end for tanoshi.
- [Minesweeper ![GitHub Repo stars](https://img.shields.io/github/stars/jgpaiva/minesweeper) ![GitHub last commit](https://img.shields.io/github/last-commit/jgpaiva/minesweeper)](https://github.com/jgpaiva/minesweeper) - Minesweeper built with Rust, Yew and WebAssembly.
- [Freecell ![GitHub Repo stars](https://img.shields.io/github/stars/Stigjb/freecell) ![GitHub last commit](https://img.shields.io/github/last-commit/Stigjb/freecell)](https://github.com/Stigjb/freecell) - A patience game written in Rust and Yew.
- [Daydream ![GitHub Repo stars](https://img.shields.io/github/stars/MTRNord/Daydream) ![GitHub last commit](https://img.shields.io/github/last-commit/MTRNord/Daydream)](https://github.com/MTRNord/Daydream) - A small Matrix web client written in Rust.
- [Yew-WebRTC-Chat ![GitHub Repo stars](https://img.shields.io/github/stars/codec-abc/Yew-WebRTC-Chat) ![GitHub last commit](https://img.shields.io/github/last-commit/codec-abc/Yew-WebRTC-Chat)](https://github.com/codec-abc/Yew-WebRTC-Chat) - A simple WebRTC chat made with Yew.
- [Yew Fullstack Boilerplate ![GitHub Repo stars](https://img.shields.io/github/stars/lukidoescode/yew-fullstack-boilerplate) ![GitHub last commit](https://img.shields.io/github/last-commit/lukidoescode/yew-fullstack-boilerplate)](https://github.com/lukidoescode/yew-fullstack-boilerplate) - Highly opinionated boilerplate for creating full stack applications with Rust.
- [Chord Quiz ![GitHub Repo stars](https://img.shields.io/github/stars/Stigjb/chord-quiz) ![GitHub last commit](https://img.shields.io/github/last-commit/Stigjb/chord-quiz)](https://github.com/Stigjb/chord-quiz) - Practice recognizing chords in this Rust/Yew/WebAssembly app.
- [RustMart ![GitHub Repo stars](https://img.shields.io/github/stars/sheshbabu/rustmart-yew-example) ![GitHub last commit](https://img.shields.io/github/last-commit/sheshbabu/rustmart-yew-example)](https://github.com/sheshbabu/rustmart-yew-example) - Single Page Application (SPA) written using Rust, Wasm and Yew.
- [DevAndDev ![GitHub Repo stars](https://img.shields.io/github/stars/alepez/devand) ![GitHub last commit](https://img.shields.io/github/last-commit/alepez/devand)](https://github.com/alepez/devand) - A website where developers can find pair-programming partners. Written in Rust, Yew frontend.
- [yew-octicons ![GitHub Repo stars](https://img.shields.io/github/stars/io12/yew-octicons) ![GitHub last commit](https://img.shields.io/github/last-commit/io12/yew-octicons)](https://github.com/io12/yew-octicons) - An easy interface for using Octicons in Yew projects.
- [Pipe ![GitHub Repo stars](https://img.shields.io/github/stars/pipe-fun/pipe) ![GitHub last commit](https://img.shields.io/github/last-commit/pipe-fun/pipe)](https://github.com/pipe-fun/pipe) - This is a Rust / Wasm client web app which is a task control center.
- [note-to-yew ![GitHub Repo stars](https://img.shields.io/github/stars/GalAster/note-to-yew) ![GitHub last commit](https://img.shields.io/github/last-commit/GalAster/note-to-yew)](https://github.com/GalAster/note-to-yew) - Convert your markups into Yew macro online, which is also made by Yew.
- [ASCII-Hangman ![GitHub Repo stars](https://img.shields.io/github/stars/getreu/ascii-hangman) ![GitHub last commit](https://img.shields.io/github/last-commit/getreu/ascii-hangman)](https://github.com/getreu/ascii-hangman) - Configurable Hangman game for children with ASCII-art rewarding.
- [dotdotyew ![GitHub Repo stars](https://img.shields.io/github/stars/shaunbennett/dotdotyew) ![GitHub last commit](https://img.shields.io/github/last-commit/shaunbennett/dotdotyew)](https://github.com/shaunbennett/dotdotyew) - [Dot-voting](https://en.wikipedia.org/wiki/Dot-voting) using Yew, with Rust powering the backend API.
- [wasm-2048 ![GitHub Repo stars](https://img.shields.io/github/stars/dev-family/wasm-2048) ![GitHub last commit](https://img.shields.io/github/last-commit/dev-family/wasm-2048)](https://github.com/dev-family/wasm-2048) - 2048 game implemented with Rust and Yew and compiled to Wasm.
- [website-wasm ![GitHub Repo stars](https://img.shields.io/github/stars/kamiyaa/website-wasm) ![GitHub last commit](https://img.shields.io/github/last-commit/kamiyaa/website-wasm)](https://github.com/kamiyaa/website-wasm) - My personal website written in Rust via Yew/Wasm.
- [KeyPress ![GitHub Repo stars](https://img.shields.io/github/stars/rayylee/keypress) ![GitHub last commit](https://img.shields.io/github/last-commit/rayylee/keypress)](https://github.com/rayylee/keypress) - A Rust WebAssembly Website example for practising english for chinese.
- [yew-train-ticket ![GitHub Repo stars](https://img.shields.io/github/stars/anthhub/yew-train-ticket) ![GitHub last commit](https://img.shields.io/github/last-commit/anthhub/yew-train-ticket)](https://github.com/anthhub/yew-train-ticket) - A Rust WebAssembly [Webapp](http://118.190.37.169:8002) example basing Yew newest hooks and functional API, the code style is extremely like React Function Component.
- [yew-d3-example ![GitHub Repo stars](https://img.shields.io/github/stars/i-schuetz/yew-d3-example) ![GitHub last commit](https://img.shields.io/github/last-commit/i-schuetz/yew-d3-example)](https://github.com/i-schuetz/yew-d3-example) - Showing a d3 chart with Yew.
- [Oxfeed ![GitHub Repo stars](https://img.shields.io/github/stars/sanpii/oxfeed) ![GitHub last commit](https://img.shields.io/github/last-commit/sanpii/oxfeed)](https://github.com/sanpii/oxfeed) - A feed reader written in Rust with a Yew frontend.
- [Flow.er ![GitHub Repo stars](https://img.shields.io/github/stars/LighghtEeloo/flow.er) ![GitHub last commit](https://img.shields.io/github/last-commit/LighghtEeloo/flow.er)](https://github.com/LighghtEeloo/flow.er) - A notebook app integrated with todo lists utility. Developed with Rust, WebAssembly, Yew and Trunk.
- [Fullstack-Rust ![GitHub Repo stars](https://img.shields.io/github/stars/vascokk/fullstack-rust) ![GitHub last commit](https://img.shields.io/github/last-commit/vascokk/fullstack-rust)](https://github.com/vascokk/fullstack-rust) - A Full Stack Rust application (Connect5 game) with Actix-web, Yew, Bulma CSS and Diesel.

## Templates

- [Create Yew App ![GitHub Repo stars](https://img.shields.io/github/stars/jetli/create-yew-app) ![GitHub last commit](https://img.shields.io/github/last-commit/jetli/create-yew-app)](https://github.com/jetli/create-yew-app) - Set up a modern Yew web app by running one command, `npx create-yew-app my-app`.
- [yew-wasm-pack-template ![GitHub Repo stars](https://img.shields.io/github/stars/yewstack/yew-wasm-pack-template) ![GitHub last commit](https://img.shields.io/github/last-commit/yewstack/yew-wasm-pack-template)](https://github.com/yewstack/yew-wasm-pack-template) - A template for starting a Yew project to be used with wasm-pack.
- [yew-wasm-pack-minimal ![GitHub Repo stars](https://img.shields.io/github/stars/yewstack/yew-wasm-pack-minimal) ![GitHub last commit](https://img.shields.io/github/last-commit/yewstack/yew-wasm-pack-minimal)](https://github.com/yewstack/yew-wasm-pack-minimal) - A minimal template for starting a Yew project using wasm-bindgen and wasm-pack.
- [yew-parcel-template ![GitHub Repo stars](https://img.shields.io/github/stars/spielrs/yew-parcel-template) ![GitHub last commit](https://img.shields.io/github/last-commit/spielrs/yew-parcel-template)](https://github.com/spielrs/yew-parcel-template) - Awesome Yew with Yew-Router and Parcel application.

## Crates

### Component Libraries

- [yew-mdc ![GitHub Repo stars](https://img.shields.io/github/stars/Follpvosten/yew-mdc) ![GitHub last commit](https://img.shields.io/github/last-commit/Follpvosten/yew-mdc)](https://github.com/Follpvosten/yew-mdc) - Material Design Components for the Yew framework.
- [muicss-yew ![GitHub Repo stars](https://img.shields.io/github/stars/AlephAlpha/muicss-yew) ![GitHub last commit](https://img.shields.io/github/last-commit/AlephAlpha/muicss-yew)](https://github.com/AlephAlpha/muicss-yew) - MUI-CSS Components for Yew framework.
- [yew-bulma ![GitHub Repo stars](https://img.shields.io/github/stars/kellpossible/yew-bulma) ![GitHub last commit](https://img.shields.io/github/last-commit/kellpossible/yew-bulma)](https://github.com/kellpossible/yew-bulma) - A Rust library providing components based on the bulma css library for projects using Yew.
- [yew-material-components ![GitHub Repo stars](https://img.shields.io/github/stars/hamza1311/yew-material-components) ![GitHub last commit](https://img.shields.io/github/last-commit/hamza1311/yew-material-components)](https://github.com/hamza1311/yew-material-components) - Yew material components.
- [Yewprint ![GitHub Repo stars](https://img.shields.io/github/stars/cecton/yewprint) ![GitHub last commit](https://img.shields.io/github/last-commit/cecton/yewprint)](https://github.com/cecton/yewprint) - Port of blueprintjs.com to Yew.
- [ybc ![GitHub Repo stars](https://img.shields.io/github/stars/thedodd/ybc) ![GitHub last commit](https://img.shields.io/github/last-commit/thedodd/ybc)](https://github.com/thedodd/ybc) - A Yew component library based on the Bulma CSS framework.
- [patternfly-yew ![GitHub Repo stars](https://img.shields.io/github/stars/ctron/patternfly-yew) ![GitHub last commit](https://img.shields.io/github/last-commit/ctron/patternfly-yew)](https://github.com/ctron/patternfly-yew) - Patternfly components for Yew.
- [yew-feather ![GitHub Repo stars](https://img.shields.io/github/stars/pedrodesu/yew-feather) ![GitHub last commit](https://img.shields.io/github/last-commit/pedrodesu/yew-feather)](https://github.com/pedrodesu/yew-feather) - Feather Icons components for Yew.
- [tailwind-yew-builder ![GitHub Repo stars](https://img.shields.io/github/stars/matiu2/tailwind-yew-builder) ![GitHub last commit](https://img.shields.io/github/last-commit/matiu2/tailwind-yew-builder)](https://github.com/matiu2/tailwind-yew-builder) - Builds Tailwind CSS for Yew using docker-compose. Also supports Trunk.
- [yew-components ![GitHub Repo stars](https://img.shields.io/github/stars/angular-rust/yew-components) ![GitHub last commit](https://img.shields.io/github/last-commit/angular-rust/yew-components)](https://github.com/angular-rust/yew-components) - Material Design Components for the Yew framework.
- [material-yew ![GitHub Repo stars](https://img.shields.io/github/stars/hamza1311/material-yew) ![GitHub last commit](https://img.shields.io/github/last-commit/hamza1311/material-yew)](https://github.com/hamza1311/material-yew) - Yew wrapper for Material Web Components.

### Components

- [Yew Form ![GitHub Repo stars](https://img.shields.io/github/stars/jfbilodeau/yew_form) ![GitHub last commit](https://img.shields.io/github/last-commit/jfbilodeau/yew_form)](https://github.com/jfbilodeau/yew_form) - Components to simplify handling forms with Yew.
- [yew-component-size ![GitHub Repo stars](https://img.shields.io/github/stars/AircastDev/yew-component-size) ![GitHub last commit](https://img.shields.io/github/last-commit/AircastDev/yew-component-size)](https://github.com/AircastDev/yew-component-size) - A Yew component that emits events when the parent component changes width/height.
- [yew-virtual-scroller ![GitHub Repo stars](https://img.shields.io/github/stars/AircastDev/yew-virtual-scroller) ![GitHub last commit](https://img.shields.io/github/last-commit/AircastDev/yew-virtual-scroller)](https://github.com/AircastDev/yew-virtual-scroller) - A Yew component for virtual scrolling / scroll windowing.

### Utils

- [yew-state ![GitHub Repo stars](https://img.shields.io/github/stars/intendednull/yew-state) ![GitHub last commit](https://img.shields.io/github/last-commit/intendednull/yew-state)](https://github.com/intendednull/yew-state) - Ergonomic shared state for Yew components with optionally persistent local and session storage.
- [reacty_yew ![GitHub Repo stars](https://img.shields.io/github/stars/hobofan/reacty_yew) ![GitHub last commit](https://img.shields.io/github/last-commit/hobofan/reacty_yew)](https://github.com/hobofan/reacty_yew) - Generate Yew components from React components via Typescript type definitions.
- [styled-yew ![GitHub Repo stars](https://img.shields.io/github/stars/IcyDefiance/styled-yew) ![GitHub last commit](https://img.shields.io/github/last-commit/IcyDefiance/styled-yew)](https://github.com/IcyDefiance/styled-yew) - CSS in Rust, similar to styled-components, but for Yew.

### Wasm

- [wasm-bindgen ![GitHub Repo stars](https://img.shields.io/github/stars/rustwasm/wasm-bindgen) ![GitHub last commit](https://img.shields.io/github/last-commit/rustwasm/wasm-bindgen)](https://github.com/rustwasm/wasm-bindgen) - Facilitating high-level interactions between WebAssembly modules and JavaScript.
- [stdweb ![GitHub Repo stars](https://img.shields.io/github/stars/koute/stdweb) ![GitHub last commit](https://img.shields.io/github/last-commit/koute/stdweb)](https://github.com/koute/stdweb) - Provides Rust bindings to the Web APIs and to allow a high degree of interoperability between Rust and JavaScript.

## Tooling

- [wasm-pack ![GitHub Repo stars](https://img.shields.io/github/stars/rustwasm/wasm-pack) ![GitHub last commit](https://img.shields.io/github/last-commit/rustwasm/wasm-pack)](https://github.com/rustwasm/wasm-pack) - Your favorite Rust -> WebAssembly workflow tool.
- [wasm-pack-action ![GitHub Repo stars](https://img.shields.io/github/stars/jetli/wasm-pack-action) ![GitHub last commit](https://img.shields.io/github/last-commit/jetli/wasm-pack-action)](https://github.com/jetli/wasm-pack-action) - Github action to install `wasm-pack` by downloading the executable to speed up CI/CD.
- [wasm-bindgen-action ![GitHub Repo stars](https://img.shields.io/github/stars/jetli/wasm-bindgen-action) ![GitHub last commit](https://img.shields.io/github/last-commit/jetli/wasm-bindgen-action)](https://github.com/jetli/wasm-bindgen-action) - Github action to install `wasm-bindgen` by downloading the executable to speed up CI/CD.
- [cargo-web ![GitHub Repo stars](https://img.shields.io/github/stars/koute/cargo-web) ![GitHub last commit](https://img.shields.io/github/last-commit/koute/cargo-web)](https://github.com/koute/cargo-web) - A Cargo subcommand for the client-side Web.
- [Trunk ![GitHub Repo stars](https://img.shields.io/github/stars/thedodd/trunk) ![GitHub last commit](https://img.shields.io/github/last-commit/thedodd/trunk)](https://github.com/thedodd/trunk) - Build, bundle & ship your Rust Wasm application to the web.
- [wabt ![GitHub Repo stars](https://img.shields.io/github/stars/WebAssembly/wabt) ![GitHub last commit](https://img.shields.io/github/last-commit/WebAssembly/wabt)](https://github.com/WebAssembly/wabt) - The WebAssembly Binary Toolkit, for the `wasm-strip` and `wasm-objdump` tools to reduce .wasm file size.
- [binaryen ![GitHub Repo stars](https://img.shields.io/github/stars/WebAssembly/binaryen) ![GitHub last commit](https://img.shields.io/github/last-commit/WebAssembly/binaryen)](https://github.com/WebAssembly/binaryen) - Compiler infrastructure and toolchain library for WebAssembly, for the `wasm-opt` tool to reduce .wasm file size.

## Articles

- [Let's Build a Rust Frontend with Yew](https://dev.to/deciduously/lets-build-a-rust-frontend-with-yew---part-1-3k2o)
- [How to use Rust Yew](https://www.steadylearner.com/blog/read/How-to-use-Rust-Yew)
- [How to use a modal in Rust](https://www.steadylearner.com/blog/read/How-to-use-a-modal-in-Rust)
- [How to use routers in Rust Frontend](https://www.steadylearner.com/blog/read/How-to-use-routers-in-Rust-Frontend)
- [How to modulize your Rust Frontend](https://www.steadylearner.com/blog/read/How-to-modulize-your-Rust-Frontend)
- [How to use NPM packages with Rust Frontend](https://www.steadylearner.com/blog/read/How-to-use-NPM-packages-with-Rust-Frontend)
- [How to use markdown with Rust Frontend](https://www.steadylearner.com/blog/read/How-to-use-markdown-with-Rust-Frontend)
- [Fullstack Rust with Yew](https://www.steadylearner.com/blog/read/Fullstack-Rust-with-Yew)
- [How to write Full Stack Rust code](https://www.steadylearner.com/blog/read/How-to-write-Full-Stack-Rust-code)
- [How to render a YouTube vlog with Rust Yew fetch API](https://www.steadylearner.com/blog/read/How-to-render-a-YouTube-vlog-with-Rust-Yew-fetch-API)
- [How to render blog posts with Rust Yew mounted API](https://www.steadylearner.com/blog/read/How-to-render-blog-posts-with-Rust-Yew-mounted-API)
- [A Web Application completely in Rust](https://medium.com/@saschagrunert/a-web-application-completely-in-rust-6f6bdb6c4471)
- [Yew - Rust & WebAsse-frontend framework](https://sudonull.com/post/11627-Yew-Rust-WebAsse-frontend-framework)

## Books

- [The WebAssembly Book](https://rustwasm.github.io/docs/book/) - Working with the web and producing .wasm files.
- [The wasm-bindgen Guide](https://rustwasm.github.io/docs/wasm-bindgen/) - How to bind Rust and JavaScript APIs.
- [The wasm-pack Guide](https://rustwasm.github.io/docs/wasm-pack/) - How to build and work with rust-generated WebAssembly.
- [Programming WebAssembly with Rust](https://pragprog.com/book/khrust/programming-webassembly-with-rust) - Includes a chapter `Advanced JavaScript Integration with Yew` on creating an app with Yew.
- [Creative Projects for Rust Programmers](https://www.oreilly.com/library/view/creative-projects-for/9781789346220/) - Chapter 5, `Creating a Client-Side WebAssembly App Using Yew`.

## Alternatives

Yew team love to share ideas with other projects and believe we can all help each other reach the full potential of this exciting new technology.

- [Draco ![GitHub Repo stars](https://img.shields.io/github/stars/utkarshkukreti/draco) ![GitHub last commit](https://img.shields.io/github/last-commit/utkarshkukreti/draco)](https://github.com/utkarshkukreti/draco) - A Rust library for building client side web applications with WebAssembly.
- [Percy ![GitHub Repo stars](https://img.shields.io/github/stars/chinedufn/percy) ![GitHub last commit](https://img.shields.io/github/last-commit/chinedufn/percy)](https://github.com/chinedufn/percy) - A modular toolkit for building isomorphic web apps with Rust + WebAssembly.
- [Sauron ![GitHub Repo stars](https://img.shields.io/github/stars/ivanceras/sauron) ![GitHub last commit](https://img.shields.io/github/last-commit/ivanceras/sauron)](https://github.com/ivanceras/sauron) - Sauron is an HTML web framework for building web-apps.
- [Seed ![GitHub Repo stars](https://img.shields.io/github/stars/seed-rs/seed) ![GitHub last commit](https://img.shields.io/github/last-commit/seed-rs/seed)](https://github.com/seed-rs/seed) - A Rust framework for creating web apps.
- [Smithy ![GitHub Repo stars](https://img.shields.io/github/stars/rbalicki2/smithy) ![GitHub last commit](https://img.shields.io/github/last-commit/rbalicki2/smithy)](https://github.com/rbalicki2/smithy) - A framework for building WebAssembly apps in Rust.

## Related lists

- [Awesome Rust and WebAssembly ![GitHub Repo stars](https://img.shields.io/github/stars/rustwasm/awesome-rust-and-webassembly) ![GitHub last commit](https://img.shields.io/github/last-commit/rustwasm/awesome-rust-and-webassembly)](https://github.com/rustwasm/awesome-rust-and-webassembly) - A list of awesome Rust and WebAssembly projects, libraries, tools, and resources.
- [Awesome WebAssembly ![GitHub Repo stars](https://img.shields.io/github/stars/mbasso/awesome-wasm) ![GitHub last commit](https://img.shields.io/github/last-commit/mbasso/awesome-wasm)](https://github.com/mbasso/awesome-wasm) - Collection of awesome things regarding WebAssembly ecosystem.
- [Awesome Rust ![GitHub Repo stars](https://img.shields.io/github/stars/rust-unofficial/awesome-rust) ![GitHub last commit](https://img.shields.io/github/last-commit/rust-unofficial/awesome-rust)](https://github.com/rust-unofficial/awesome-rust) - A curated list of Rust code and resources.
