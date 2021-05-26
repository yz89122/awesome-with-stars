# Awesome Nix [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [<img src="https://nixos.org/logo/nixos-logo-only-hires.png" width="200" align="right" alt="NixOS">](https://nixos.org)

> A curated list of the best resources in the Nix community.

[Nix ![GitHub Repo stars](https://img.shields.io/github/stars/nixos/nix) ![GitHub last commit](https://img.shields.io/github/last-commit/nixos/nix)](https://github.com/nixos/nix) is a powerful package manager for Linux and other Unix systems that makes package management reliable and reproducible.

*Please read the [contribution guidelines](CONTRIBUTING.md) before contributing.*

## Contents

* [Resources](#resources)
    * [Learning](#learning)
    * [Discovery](#discovery)
    * [Newsletters](#newsletters)
* [Installation Media](#installation-media)
* [Channel History](#channel-history)
* [Deployment Tools](#deployment-tools)
* [Command-Line Tools](#command-line-tools)
* [Development](#development)
* [Programming Languages](#programming-languages)
    * [Arduino](#arduino)
    * [Crystal](#crystal)
    * [Elm](#elm)
    * [Haskell](#haskell)
    * [Node.js](#nodejs)
    * [PureScript](#purescript)
    * [Python](#python)
    * [Ruby](#ruby)
    * [Rust](#rust)
* [NixOS Modules](#nixos-modules)
* [Overlays](#overlays)
* [Community](#community)

## Resources

### Learning

* [Nix Notes ![GitHub Repo stars](https://img.shields.io/github/stars/noteed/nix-notes) ![GitHub last commit](https://img.shields.io/github/last-commit/noteed/nix-notes)](https://github.com/noteed/nix-notes) - A collection of short notes about Nix, each contributing to the same virtual machine image.
* [Nix Pills](https://nixos.org/nixos/nix-pills/) - The best way to learn, with examples.
* [Nix Shorts ![GitHub Repo stars](https://img.shields.io/github/stars/justinwoo/nix-shorts) ![GitHub last commit](https://img.shields.io/github/last-commit/justinwoo/nix-shorts)](https://github.com/justinwoo/nix-shorts/) - A collection of short notes about Nix.
* [nix.dev](https://nix.dev/) - An opinionated guide for developers about getting things done using the Nix ecosystem.
* [Tour of Nix](https://nixcloud.io/tour) - An online interactive tutorial on Nix language constructs.

### Discovery

* [Hound](https://search.nix.gsc.io) - Handily search across all or selected Nix-related repositories.
* [Nixpkgs Database](https://kamadorueda.github.io/nixpkgs-db/) - A database with Nix packages at all versions, from all channels.

### Newsletters

* [NixOS Weekly](https://weekly.nixos.org/) - *The* newsletter to stay informed about community updates.

## Installation Media

* [nixos-generators ![GitHub Repo stars](https://img.shields.io/github/stars/nix-community/nixos-generators) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/nixos-generators)](https://github.com/nix-community/nixos-generators) -  Take a NixOS config and build multiple different images types including VirtualBox VMs, Azure images, and installation ISOs.
* [nixos-up ![GitHub Repo stars](https://img.shields.io/github/stars/samuela/nixos-up) ![GitHub last commit](https://img.shields.io/github/last-commit/samuela/nixos-up)](https://github.com/samuela/nixos-up) - Super easy NixOS installer that can be used from the installation ISO.

## Channel History

* [Channel History](https://channels.nix.gsc.io) - Get historical git commits for Nix channels.
* [Nix Infra Status](https://status.nixos.org) - Get the age and current git commit of each Nix channel.

## Deployment Tools

* [Colmena ![GitHub Repo stars](https://img.shields.io/github/stars/zhaofengli/colmena) ![GitHub last commit](https://img.shields.io/github/last-commit/zhaofengli/colmena)](https://github.com/zhaofengli/colmena) - A simple, stateless NixOS deployment tool modeled after NixOps and morph.
* [krops](https://cgit.krebsco.de/krops/about/) - A lightweight toolkit to deploy NixOS systems, remotely or locally.
* [KubeNix ![GitHub Repo stars](https://img.shields.io/github/stars/xtruder/kubenix) ![GitHub last commit](https://img.shields.io/github/last-commit/xtruder/kubenix)](https://github.com/xtruder/kubenix) - A Kubernetes resource builder using Nix.
* [KuberNix ![GitHub Repo stars](https://img.shields.io/github/stars/saschagrunert/kubernix) ![GitHub last commit](https://img.shields.io/github/last-commit/saschagrunert/kubernix)](https://github.com/saschagrunert/kubernix) - Single-dependency Kubernetes clusters via Nix packages.
* [morph ![GitHub Repo stars](https://img.shields.io/github/stars/DBCDK/morph) ![GitHub last commit](https://img.shields.io/github/last-commit/DBCDK/morph)](https://github.com/DBCDK/morph) - A tool for managing existing NixOS hosts.
* [Nixery ![GitHub Repo stars](https://img.shields.io/github/stars/google/nixery) ![GitHub last commit](https://img.shields.io/github/last-commit/google/nixery)](https://github.com/google/nixery) - A Docker-compatible container registry which builds images ad-hoc via Nix.
* [NixOps ![GitHub Repo stars](https://img.shields.io/github/stars/NixOS/nixops) ![GitHub last commit](https://img.shields.io/github/last-commit/NixOS/nixops)](https://github.com/NixOS/nixops) - The official Nix deployment tool, compatible with AWS, Hetzner, and more.
* [nixos-shell ![GitHub Repo stars](https://img.shields.io/github/stars/Mic92/nixos-shell) ![GitHub last commit](https://img.shields.io/github/last-commit/Mic92/nixos-shell)](https://github.com/Mic92/nixos-shell) - Simple headless VM configuration using Nix (similar to Vagrant).
* [pushnix ![GitHub Repo stars](https://img.shields.io/github/stars/arnarg/pushnix) ![GitHub last commit](https://img.shields.io/github/last-commit/arnarg/pushnix)](https://github.com/arnarg/pushnix) - Simple cli utility that pushes NixOS configuration and triggers a rebuild using ssh.
* [terraform-nixos ![GitHub Repo stars](https://img.shields.io/github/stars/tweag/terraform-nixos) ![GitHub last commit](https://img.shields.io/github/last-commit/tweag/terraform-nixos)](https://github.com/tweag/terraform-nixos) - A set of Terraform modules designed to deploy NixOS.
* [terranix](https://terranix.org) - Use Nix and the NixOS module system to write your Terraform code.

## Command-Line Tools

* [comma ![GitHub Repo stars](https://img.shields.io/github/stars/Shopify/comma) ![GitHub last commit](https://img.shields.io/github/last-commit/Shopify/comma)](https://github.com/Shopify/comma) - Quickly run any binary; wraps together `nix run` and `nix-index`.
* [nixfmt ![GitHub Repo stars](https://img.shields.io/github/stars/serokell/nixfmt) ![GitHub last commit](https://img.shields.io/github/last-commit/serokell/nixfmt)](https://github.com/serokell/nixfmt) - A formatter for Nix code, intended to easily apply a uniform style.
* [nixpkgs-fmt ![GitHub Repo stars](https://img.shields.io/github/stars/nix-community/nixpkgs-fmt) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/nixpkgs-fmt)](https://github.com/nix-community/nixpkgs-fmt) - Nix code formatter for nixpkgs.
* [nixpkgs-hammering ![GitHub Repo stars](https://img.shields.io/github/stars/jtojnar/nixpkgs-hammering) ![GitHub last commit](https://img.shields.io/github/last-commit/jtojnar/nixpkgs-hammering)](https://github.com/jtojnar/nixpkgs-hammering) - Beat your package expressions into a shape.
* [nix-diff ![GitHub Repo stars](https://img.shields.io/github/stars/Gabriel439/nix-diff) ![GitHub last commit](https://img.shields.io/github/last-commit/Gabriel439/nix-diff)](https://github.com/Gabriel439/nix-diff) - A tool to explain why two Nix derivations differ.
* [nix-index ![GitHub Repo stars](https://img.shields.io/github/stars/bennofs/nix-index) ![GitHub last commit](https://img.shields.io/github/last-commit/bennofs/nix-index)](https://github.com/bennofs/nix-index) - Quickly locate Nix packages with specific files.
* [nix-prefetch ![GitHub Repo stars](https://img.shields.io/github/stars/msteen/nix-prefetch) ![GitHub last commit](https://img.shields.io/github/last-commit/msteen/nix-prefetch)](https://github.com/msteen/nix-prefetch) - A universal tool for updating source checksums.
* [nix-tree ![GitHub Repo stars](https://img.shields.io/github/stars/utdemir/nix-tree) ![GitHub last commit](https://img.shields.io/github/last-commit/utdemir/nix-tree)](https://github.com/utdemir/nix-tree) - Interactively browse the dependency graph of Nix derivations.

## Development

* [Arion ![GitHub Repo stars](https://img.shields.io/github/stars/hercules-ci/arion) ![GitHub last commit](https://img.shields.io/github/last-commit/hercules-ci/arion)](https://github.com/hercules-ci/arion) - Run `docker-compose` with help from Nix/NixOS.
* [cached-nix-shell ![GitHub Repo stars](https://img.shields.io/github/stars/xzfc/cached-nix-shell) ![GitHub last commit](https://img.shields.io/github/last-commit/xzfc/cached-nix-shell)](https://github.com/xzfc/cached-nix-shell) - A `nix-shell` replacement that uses caching to open subsequent shells quickly.
* [Cachix](https://cachix.org/) - Hosted binary cache service; free for open-source projects.
* [gitignore.nix ![GitHub Repo stars](https://img.shields.io/github/stars/hercules-ci/gitignore.nix) ![GitHub last commit](https://img.shields.io/github/last-commit/hercules-ci/gitignore.nix)](https://github.com/hercules-ci/gitignore.nix) - The most feature-complete and easy-to-use `.gitignore` integration.
* [lorri ![GitHub Repo stars](https://img.shields.io/github/stars/target/lorri) ![GitHub last commit](https://img.shields.io/github/last-commit/target/lorri)](https://github.com/target/lorri/) - A much better `nix-shell` for development that augments direnv.
* [niv ![GitHub Repo stars](https://img.shields.io/github/stars/nmattia/niv) ![GitHub last commit](https://img.shields.io/github/last-commit/nmattia/niv)](https://github.com/nmattia/niv/) - Easy dependency management for Nix projects with package pinning.
* [nix-direnv ![GitHub Repo stars](https://img.shields.io/github/stars/nix-community/nix-direnv) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/nix-direnv)](https://github.com/nix-community/nix-direnv) - A fast loader and flake-compliant configuration for the direnv environment auto-loader.
* [nixpkgs-review ![GitHub Repo stars](https://img.shields.io/github/stars/Mic92/nixpkgs-review) ![GitHub last commit](https://img.shields.io/github/last-commit/Mic92/nixpkgs-review)](https://github.com/Mic92/nixpkgs-review) - The best tool to verify that a pull-request in Nixpkgs is building properly.
* [pre-commit-hooks.nix ![GitHub Repo stars](https://img.shields.io/github/stars/cachix/pre-commit-hooks.nix) ![GitHub last commit](https://img.shields.io/github/last-commit/cachix/pre-commit-hooks.nix)](https://github.com/cachix/pre-commit-hooks.nix) - Run linters/formatters at commit time and on your CI.

## Programming Languages

### Arduino

* [nixduino ![GitHub Repo stars](https://img.shields.io/github/stars/boredom101/nixduino) ![GitHub last commit](https://img.shields.io/github/last-commit/boredom101/nixduino)](https://github.com/boredom101/nixduino) - Nix-based tool to help build Arduino sketches.

### Crystal

* [crystal2nix ![GitHub Repo stars](https://img.shields.io/github/stars/nix-community/crystal2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/crystal2nix)](https://github.com/nix-community/crystal2nix) - Convert `shard.lock` into Nix expressions.

### Elm

* [elm2nix ![GitHub Repo stars](https://img.shields.io/github/stars/hercules-ci/elm2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/hercules-ci/elm2nix)](https://github.com/hercules-ci/elm2nix) - Convert `elm.json` into Nix expressions.

### Haskell

* [cabal2nix ![GitHub Repo stars](https://img.shields.io/github/stars/NixOS/cabal2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/NixOS/cabal2nix)](https://github.com/NixOS/cabal2nix) - Converts a Cabal file into a Nix build expression.
* [haskell.nix ![GitHub Repo stars](https://img.shields.io/github/stars/input-output-hk/haskell.nix) ![GitHub last commit](https://img.shields.io/github/last-commit/input-output-hk/haskell.nix)](https://github.com/input-output-hk/haskell.nix) - Alternative Haskell Infrastructure for Nixpkgs.
* [nix-haskell-mode ![GitHub Repo stars](https://img.shields.io/github/stars/matthewbauer/nix-haskell-mode) ![GitHub last commit](https://img.shields.io/github/last-commit/matthewbauer/nix-haskell-mode)](https://github.com/matthewbauer/nix-haskell-mode) - Automatic Haskell setup in Emacs.
* [nixkell ![GitHub Repo stars](https://img.shields.io/github/stars/pwm/nixkell) ![GitHub last commit](https://img.shields.io/github/last-commit/pwm/nixkell)](https://github.com/pwm/nixkell) - A Haskell project template using Nix and direnv.
* [stack2nix ![GitHub Repo stars](https://img.shields.io/github/stars/input-output-hk/stack2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/input-output-hk/stack2nix)](https://github.com/input-output-hk/stack2nix) - Generate nix expressions for Haskell projects.

### Node.js

* [Napalm ![GitHub Repo stars](https://img.shields.io/github/stars/nmattia/napalm) ![GitHub last commit](https://img.shields.io/github/last-commit/nmattia/napalm)](https://github.com/nmattia/napalm) - Support for building npm packages in Nix with a lightweight npm registry.
* [node2nix ![GitHub Repo stars](https://img.shields.io/github/stars/svanderburg/node2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/svanderburg/node2nix)](https://github.com/svanderburg/node2nix) - Generate Nix expressions from a `package.lock` npm file.
* [yarn2nix ![GitHub Repo stars](https://img.shields.io/github/stars/nix-community/yarn2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/yarn2nix)](https://github.com/nix-community/yarn2nix) - Generate Nix expressions from a `yarn.lock` file.

### PureScript

* [Easy PureScript Nix ![GitHub Repo stars](https://img.shields.io/github/stars/justinwoo/easy-purescript-nix) ![GitHub last commit](https://img.shields.io/github/last-commit/justinwoo/easy-purescript-nix)](https://github.com/justinwoo/easy-purescript-nix) - A project to easily use PureScript and other tools with Nix.

### Python

* [mach-nix ![GitHub Repo stars](https://img.shields.io/github/stars/DavHau/mach-nix) ![GitHub last commit](https://img.shields.io/github/last-commit/DavHau/mach-nix)](https://github.com/DavHau/mach-nix) - Tool to create highly reproducible python environments.
* [poetry2nix ![GitHub Repo stars](https://img.shields.io/github/stars/nix-community/poetry2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/poetry2nix)](https://github.com/nix-community/poetry2nix) - Build Python packages directly from [Poetry's](https://python-poetry.org/) `poetry.lock`. No conversion step needed.
* [pypi2nix ![GitHub Repo stars](https://img.shields.io/github/stars/nix-community/pypi2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/pypi2nix)](https://github.com/nix-community/pypi2nix) - Generate Nix expressions for Python packages.

### Ruby

* [Bundix ![GitHub Repo stars](https://img.shields.io/github/stars/nix-community/bundix) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/bundix)](https://github.com/nix-community/bundix) - Generates a Nix expression for your Bundler-managed application.

### Rust

* [fenix ![GitHub Repo stars](https://img.shields.io/github/stars/nix-community/fenix) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/fenix)](https://github.com/nix-community/fenix) - Rust toolchains and rust analyzer nightly for nix.
* [naersk ![GitHub Repo stars](https://img.shields.io/github/stars/nmattia/naersk) ![GitHub last commit](https://img.shields.io/github/last-commit/nmattia/naersk)](https://github.com/nmattia/naersk) - Build Rust packages directly from `Cargo.lock`. No conversion step needed.
* [rust-nix-templater ![GitHub Repo stars](https://img.shields.io/github/stars/yusdacra/rust-nix-templater) ![GitHub last commit](https://img.shields.io/github/last-commit/yusdacra/rust-nix-templater)](https://github.com/yusdacra/rust-nix-templater) - Generates Nix build and development files for Rust projects.

## NixOS Modules

* [musnix ![GitHub Repo stars](https://img.shields.io/github/stars/musnix/musnix) ![GitHub last commit](https://img.shields.io/github/last-commit/musnix/musnix)](https://github.com/musnix/musnix) - Do real-time audio work in NixOS.
* [nixcloud-webservices ![GitHub Repo stars](https://img.shields.io/github/stars/nixcloud/nixcloud-webservices) ![GitHub last commit](https://img.shields.io/github/last-commit/nixcloud/nixcloud-webservices)](https://github.com/nixcloud/nixcloud-webservices) - A Nixpkgs extension with a focus on ease of deployment of web-related technologies.
* [Simple Nixos Mailserver](https://gitlab.com/simple-nixos-mailserver/nixos-mailserver) - A complete mailserver, managed with NixOS modules.

## Overlays

* [awesome-nix-hpc ![GitHub Repo stars](https://img.shields.io/github/stars/freuk/awesome-nix-hpc) ![GitHub last commit](https://img.shields.io/github/last-commit/freuk/awesome-nix-hpc)](https://github.com/freuk/awesome-nix-hpc) - High Performance Computing package sets.
* [Home Manager ![GitHub Repo stars](https://img.shields.io/github/stars/nix-community/home-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/home-manager)](https://github.com/nix-community/home-manager) - Manage your user configuration just like NixOS.
* [nix-bitcoin ![GitHub Repo stars](https://img.shields.io/github/stars/fort-nix/nix-bitcoin) ![GitHub last commit](https://img.shields.io/github/last-commit/fort-nix/nix-bitcoin)](https://github.com/fort-nix/nix-bitcoin) - Nix packages and NixOS modules for Bitcoin nodes with higher-layer protocols with an emphasis on security.
* [nix-darwin ![GitHub Repo stars](https://img.shields.io/github/stars/LnL7/nix-darwin) ![GitHub last commit](https://img.shields.io/github/last-commit/LnL7/nix-darwin)](https://github.com/LnL7/nix-darwin) - Manage macOS configuration just like on NixOS.
* [nixpkgs-mozilla ![GitHub Repo stars](https://img.shields.io/github/stars/mozilla/nixpkgs-mozilla) ![GitHub last commit](https://img.shields.io/github/last-commit/mozilla/nixpkgs-mozilla)](https://github.com/mozilla/nixpkgs-mozilla) - Mozilla's overlay with bleeding-edge Rust and Firefox.
* [nixpkgs-wayland ![GitHub Repo stars](https://img.shields.io/github/stars/colemickens/nixpkgs-wayland) ![GitHub last commit](https://img.shields.io/github/last-commit/colemickens/nixpkgs-wayland)](https://github.com/colemickens/nixpkgs-wayland) - Bleeding-edge Wayland packages.
* [NUR ![GitHub Repo stars](https://img.shields.io/github/stars/nix-community/NUR) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/NUR)](https://github.com/nix-community/NUR/) - Nix User Repositories. The mother of all overlays, allowing access to user repositories and installing packages via attributes.

## Community

* [#nix:nixos.org](https://matrix.to/#/#nix:nixos.org)
* [#nixos on Libera.Chat](ircs://irc.libera.chat:6697/nixos/nixos)
* [Discord - Nix/Nixos (Unofficial)](https://discord.gg/BMUCQx6)
* [Discourse](https://discourse.nixos.org/) - The best place to get help and discuss Nix-related topics.
* [NixCon](https://nixcon.org/) - The annual community conference for contributors and users of Nix and NixOS.
* [Wiki (Unofficial)](https://nixos.wiki)
