# Awesome Pest. The Elegant Parser [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="https://avatars.githubusercontent.com/u/26044607" align="right" width="100"> ![GitHub Repo Stars](https://img.shields.io/github/stars/pest-parser/pest) ![GitHub last commit](https://img.shields.io/github/last-commit/pest-parser/pest)](https://github.com/pest-parser/pest/)

> A curated list of resources, projects, and tools using or for the pest parser generator in Rust

pest is a general purpose parser written in Rust with a focus on accessibility, correctness, and performance. It uses parsing expression grammars (or [PEG](https://en.wikipedia.org/wiki/Parsing_expression_grammar)) as input, which are similar in spirit to regular expressions, but which offer the enhanced expressivity needed to parse complex languages.

Contributions welcome! Read the [contribution guidelines](contributing.md) first.

## Contents

- [Resources](#resources)
- [Projects](#projects)
- [Tooling](#tooling)

## Resources

- [Book](https://pest.rs/book) - The recommended way to start parsing with pest is to read this official book.
- [API reference on docs.rs](https://docs.rs/pest)
- [fiddle editor on pest.rs](https://pest.rs/#editor) - Play with grammars and share them on the official website (and format them!).
- [Gitter](https://gitter.im/pest-parser/pest)
- [Discord](https://discord.gg/XEGACtWpT2)
- [GitHub Discussions ![GitHub Repo Stars](https://img.shields.io/github/stars/pest-parser/pest) ![GitHub last commit](https://img.shields.io/github/last-commit/pest-parser/pest)](https://github.com/pest-parser/pest/discussions)

## Projects

Here are some example projects using pest:

- [pest_meta ![GitHub Repo Stars](https://img.shields.io/github/stars/pest-parser/pest) ![GitHub last commit](https://img.shields.io/github/last-commit/pest-parser/pest)](https://github.com/pest-parser/pest/blob/master/meta/src/grammar.pest) - The pest itself is bootstrapped using pest.
- [AshPaper ![GitHub Repo Stars](https://img.shields.io/github/stars/shnewto/ashpaper) ![GitHub last commit](https://img.shields.io/github/last-commit/shnewto/ashpaper)](https://github.com/shnewto/ashpaper) - Rust Inpterpreter for Esopo language AshPaper conceived by William Hicks.
- [cicada ![GitHub Repo Stars](https://img.shields.io/github/stars/mitnk/cicada) ![GitHub last commit](https://img.shields.io/github/last-commit/mitnk/cicada)](https://github.com/mitnk/cicada) - An old-school bash-like Unix shell written in Rust.
- [comrak ![GitHub Repo Stars](https://img.shields.io/github/stars/kivikakk/comrak) ![GitHub last commit](https://img.shields.io/github/last-commit/kivikakk/comrak)](https://github.com/kivikakk/comrak) - CommonMark + GFM compatible Markdown parser and renderer.
- [elastic-rs ![GitHub Repo Stars](https://img.shields.io/github/stars/cch123/elastic-rs) ![GitHub last commit](https://img.shields.io/github/last-commit/cch123/elastic-rs)](https://github.com/cch123/elastic-rs) - Convert bool expressions to Elasticsearch DSL in Rust.
- [handlebars-rust ![GitHub Repo Stars](https://img.shields.io/github/stars/sunng87/handlebars-rust) ![GitHub last commit](https://img.shields.io/github/last-commit/sunng87/handlebars-rust)](https://github.com/sunng87/handlebars-rust) - Rust templating with Handlebars.
- [hexdino ![GitHub Repo Stars](https://img.shields.io/github/stars/Luz/hexdino) ![GitHub last commit](https://img.shields.io/github/last-commit/Luz/hexdino)](https://github.com/Luz/hexdino) - A hex editor with vim like keybindings written in Rust.
- [insta ![GitHub Repo Stars](https://img.shields.io/github/stars/mitsuhiko/insta) ![GitHub last commit](https://img.shields.io/github/last-commit/mitsuhiko/insta)](https://github.com/mitsuhiko/insta) - A snapshot testing library for rust.
- [jql ![GitHub Repo Stars](https://img.shields.io/github/stars/yamafaktory/jql) ![GitHub last commit](https://img.shields.io/github/last-commit/yamafaktory/jql)](https://github.com/yamafaktory/jql) - A JSON Query Language CLI tool.
- [json5-rs ![GitHub Repo Stars](https://img.shields.io/github/stars/callum-oakley/json5-rs) ![GitHub last commit](https://img.shields.io/github/last-commit/callum-oakley/json5-rs)](https://github.com/callum-oakley/json5-rs) - A Rust JSON5 serializer and deserializer which speaks Serde.
- [mt940 ![GitHub Repo Stars](https://img.shields.io/github/stars/svenstaro/mt940-rs) ![GitHub last commit](https://img.shields.io/github/last-commit/svenstaro/mt940-rs)](https://github.com/svenstaro/mt940-rs) - A MT940 parser in Rust.
- [py_literal ![GitHub Repo Stars](https://img.shields.io/github/stars/jturner314/py_literal) ![GitHub last commit](https://img.shields.io/github/last-commit/jturner314/py_literal)](https://github.com/jturner314/py_literal) - Rust crate for parsing/formatting Python literals.
- [rouler ![GitHub Repo Stars](https://img.shields.io/github/stars/jarcane/rouler) ![GitHub last commit](https://img.shields.io/github/last-commit/jarcane/rouler)](https://github.com/jarcane/rouler) - An easy to use dice rolling library for Rust.
- [RuSh ![GitHub Repo Stars](https://img.shields.io/github/stars/lwandrebeck/RuSh) ![GitHub last commit](https://img.shields.io/github/last-commit/lwandrebeck/RuSh)](https://github.com/lwandrebeck/RuSh) - RuSh aims to be a bash compatible shell with candies, written in Rust.
- [rs_pbrt ![GitHub Repo Stars](https://img.shields.io/github/stars/wahn/rs_pbrt) ![GitHub last commit](https://img.shields.io/github/last-commit/wahn/rs_pbrt)](https://github.com/wahn/rs_pbrt) - Rust crate to implement a counterpart to the PBRT book's (3rd edition) C++ code.
- [stache ![GitHub Repo Stars](https://img.shields.io/github/stars/dgraham/stache) ![GitHub last commit](https://img.shields.io/github/last-commit/dgraham/stache)](https://github.com/dgraham/stache) - A Mustache template compiler.
- [tera ![GitHub Repo Stars](https://img.shields.io/github/stars/Keats/tera) ![GitHub last commit](https://img.shields.io/github/last-commit/Keats/tera)](https://github.com/Keats/tera) - A template engine for Rust based on Jinja2/Django.
- [ZoKrates ![GitHub Repo Stars](https://img.shields.io/github/stars/ZoKrates/ZoKrates) ![GitHub last commit](https://img.shields.io/github/last-commit/ZoKrates/ZoKrates)](https://github.com/ZoKrates/ZoKrates) - A toolbox for zkSNARKs on Ethereum.
- [Vector ![GitHub Repo Stars](https://img.shields.io/github/stars/timberio/vector) ![GitHub last commit](https://img.shields.io/github/last-commit/timberio/vector)](https://github.com/timberio/vector) - A high-performance observability data pipeline.
- [AutoCorrect ![GitHub Repo Stars](https://img.shields.io/github/stars/huacnlee/autocorrect) ![GitHub last commit](https://img.shields.io/github/last-commit/huacnlee/autocorrect)](https://github.com/huacnlee/autocorrect) - A linter and formatter to help you to improve copywriting, correct spaces, words, and punctuations between CJK (Chinese, Japanese, Korean).
- [yaml-peg ![GitHub Repo Stars](https://img.shields.io/github/stars/aofdev/yaml-peg) ![GitHub last commit](https://img.shields.io/github/last-commit/aofdev/yaml-peg)](https://github.com/aofdev/yaml-peg) - PEG parser for YAML written in Rust.
- [qubit ![GitHub Repo Stars](https://img.shields.io/github/stars/abhimanyu003/qubit) ![GitHub last commit](https://img.shields.io/github/last-commit/abhimanyu003/qubit)](https://github.com/abhimanyu003/qubit) - A handy calculator, based on Rust and WebAssembly.
- [caith ![GitHub Repo Stars](https://img.shields.io/github/stars/Geobert/caith) ![GitHub last commit](https://img.shields.io/github/last-commit/Geobert/caith)](https://github.com/Geobert/caith) - A dice roller crate.
- [Melody ![GitHub Repo Stars](https://img.shields.io/github/stars/yoav-lavi/melody) ![GitHub last commit](https://img.shields.io/github/last-commit/yoav-lavi/melody)](https://github.com/yoav-lavi/melody) - Melody is a language that compiles to regular expressions and aims to be more easily readable and maintainable.

## Tooling

### IDE Support

- [pest IDE tools ![GitHub Repo Stars](https://img.shields.io/github/stars/pest-parser/pest-ide-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/pest-parser/pest-ide-tools)](https://github.com/pest-parser/pest-ide-tools) - A main repository with LSP server and VSCode extension.
- [VSCode Extension](https://marketplace.visualstudio.com/items?itemName=pest.pest-ide-tools)
- [IntelliJ IDEA Plugin](https://plugins.jetbrains.com/plugin/12046-pest)
- [pest.vim ![GitHub Repo Stars](https://img.shields.io/github/stars/pest-parser/pest.vim) ![GitHub last commit](https://img.shields.io/github/last-commit/pest-parser/pest.vim)](https://github.com/pest-parser/pest.vim)
- [pest-fmt ![GitHub Repo Stars](https://img.shields.io/github/stars/pest-parser/pest-fmt) ![GitHub last commit](https://img.shields.io/github/last-commit/pest-parser/pest-fmt)](https://github.com/pest-parser/pest-fmt) - It can help to format
pest grammars.
- [pest web debugger ![GitHub Repo Stars](https://img.shields.io/github/stars/tomtau/pest-web-debug) ![GitHub last commit](https://img.shields.io/github/last-commit/tomtau/pest-web-debug)](https://github.com/tomtau/pest-web-debug) - Try it [online](https://tomtau.github.io/pest-web-debug/).

### Boilerplate reduction and testing

- [pest-ast ![GitHub Repo Stars](https://img.shields.io/github/stars/pest-parser/ast) ![GitHub last commit](https://img.shields.io/github/last-commit/pest-parser/ast)](https://github.com/pest-parser/ast) - It can help to reduce boilerplate when converting pest parse trees to abstract syntax trees.
- [pest_consume](https://crates.io/crates/pest_consume) - This crate can help with the parse tree traversing boilerplate.
- [pest-test](https://crates.io/crates/pest-test) - It is a testing framework for pest grammars.


### CLI Debugger

- [pest_debugger](https://docs.rs/pest_debugger/latest/pest_debugger/) - It is a crate for debugging pest grammars. It can be used as a CLI tool or as a library. [See instructions for using the CLI debugger](debugger.md).
