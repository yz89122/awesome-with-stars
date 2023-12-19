# Awesome Nix [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [<img src="https://nixos.org/logo/nixos-logo-only-hires.png" width="200" align="right" alt="NixOS">](https://nixos.org)

> A curated list of the best resources in the Nix community.

[Nix ![GitHub Repo Stars](https://img.shields.io/github/stars/nixos/nix) ![GitHub last commit](https://img.shields.io/github/last-commit/nixos/nix)](https://github.com/nixos/nix) is a powerful package manager for Linux and other Unix systems that makes package management reliable and reproducible.

*Please read the [contribution guidelines](CONTRIBUTING.md) before contributing.*

## Contents

* [Resources](#resources)
    * [Learning](#learning)
    * [Discovery](#discovery)
* [Installation Media](#installation-media)
* [Channel History](#channel-history)
* [Deployment Tools](#deployment-tools)
* [Virtualisation](#virtualisation)
* [Command-Line Tools](#command-line-tools)
* [Development](#development)
* [DevOps](#devops)
* [Programming Languages](#programming-languages)
    * [Arduino](#arduino)
    * [Clojure](#clojure)
    * [Crystal](#crystal)
    * [Elm](#elm)
    * [Haskell](#haskell)
    * [Node.js](#nodejs)
    * [OCaml](#ocaml)
    * [PHP](#php)
    * [PureScript](#purescript)
    * [Python](#python)
    * [Ruby](#ruby)
    * [Rust](#rust)
    * [Scala](#scala)
    * [Zig](#zig)
* [NixOS Modules](#nixos-modules)
* [NixOS Configuration Editors](#nixos-configuration-editors)
* [Overlays](#overlays)
* [Community](#community)

## Resources

### Learning

* [Building a Rust service with Nix](https://fasterthanli.me/series/building-a-rust-service-with-nix) - An in-depth blog series about creating a Rust application with Nix.
* [How to Learn Nix](https://ianthehenry.com/posts/how-to-learn-nix/) - It's like a Let's Play, but for obscure software documentation.
* [Nix - A One Pager](https://code.tvl.fyi/about/nix/nix-1p) - A one page introduction to the Nix language.
* [Nix from First Principles: Flake Edition](https://tonyfinn.com/blog/nix-from-first-principles-flake-edition/) - A modern crash-course to using Nix features, Flakes, and developing with Nix.
* [Nix Notes ![GitHub Repo Stars](https://img.shields.io/github/stars/noteed/nix-notes) ![GitHub last commit](https://img.shields.io/github/last-commit/noteed/nix-notes)](https://github.com/noteed/nix-notes) - A collection of short notes about Nix, each contributing to the same virtual machine image.
* [Nix Pills](https://nixos.org/guides/nix-pills/) - The best way to learn, with examples.
* [Nix Shorts ![GitHub Repo Stars](https://img.shields.io/github/stars/alper/nix-shorts) ![GitHub last commit](https://img.shields.io/github/last-commit/alper/nix-shorts)](https://github.com/alper/nix-shorts) - A collection of short notes about how to use Nix, updated for Nix Flakes.
* [nix.dev](https://nix.dev/) - An opinionated guide for developers about getting things done using the Nix ecosystem.
* [NixOS & Flakes Book ![GitHub Repo Stars](https://img.shields.io/github/stars/ryan4yin/nixos-and-flakes-book) ![GitHub last commit](https://img.shields.io/github/last-commit/ryan4yin/nixos-and-flakes-book)](https://github.com/ryan4yin/nixos-and-flakes-book) - An unofficial and opinionated NixOS & Flakes book for beginners.
* [Tour of Nix](https://nixcloud.io/tour) - An online interactive tutorial on Nix language constructs.
* [Wombat's Book of Nix](https://mhwombat.codeberg.page/nix-book/) - A book-length introduction to Nix and flakes.
* [Zero to Nix](https://zero-to-nix.com/) - A flake-centric guide to Nix and its concepts created by Determinate Systems to quickly onboard beginners.

### Discovery

* [Hound](https://search.nix.gsc.io) - Handily search across all or selected Nix-related repositories.
* [Nix Package Versions](https://lazamar.co.uk/nix-versions/) - Find all versions of a package that were available in a channel and the revision you can download it from.
* [Noogle](https://noogle.dev/) - Nix API search engine allowing to search functions based on their types and other attributes.
* [Home Manager Option Search](https://mipmip.github.io/home-manager-option-search/) - Search through all 2000+ Home Manager options and read how to use them.

## Installation Media

* [nixos-generators ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/nixos-generators) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/nixos-generators)](https://github.com/nix-community/nixos-generators) -  Take a NixOS config and build multiple different images types including VirtualBox VMs, Azure images, and installation ISOs.
* [nixos-infect ![GitHub Repo Stars](https://img.shields.io/github/stars/elitak/nixos-infect) ![GitHub last commit](https://img.shields.io/github/last-commit/elitak/nixos-infect)](https://github.com/elitak/nixos-infect) - Replace a running non-NixOS Linux host with NixOS.
* [nixos-up ![GitHub Repo Stars](https://img.shields.io/github/stars/samuela/nixos-up) ![GitHub last commit](https://img.shields.io/github/last-commit/samuela/nixos-up)](https://github.com/samuela/nixos-up) - Super easy NixOS installer that can be used from the installation ISO.
* [nix-installer ![GitHub Repo Stars](https://img.shields.io/github/stars/DeterminateSystems/nix-installer) ![GitHub last commit](https://img.shields.io/github/last-commit/DeterminateSystems/nix-installer)](https://github.com/DeterminateSystems/nix-installer) - Opinonated alternative to the official Nix install scripts.

## Channel History

* [Channel History](https://channels.nix.gsc.io) - Get historical git commits for Nix channels.
* [Nix Infra Status](https://status.nixos.org) - Get the age and current git commit of each Nix channel.
* [Nix Review Tools Reports](https://malob.github.io/nix-review-tools-reports/) - Reports showing problematic dependencies (dependencies causing the most failed builds) for major Hydra jobsets.
* [Nixpkgs Bot](https://git.maralorn.de/nixos-config/tree/packages/nixpkgs-bot) - A Matrix bot to track when a Nixpkgs pull request reaches a relevant branch.
* [nixpkgs PR tracker](https://nixpk.gs/pr-tracker.html) - A tracker for whether a PR has made it into a channel yet.

## Deployment Tools

* [bento ![GitHub Repo Stars](https://img.shields.io/github/stars/rapenne-s/bento) ![GitHub last commit](https://img.shields.io/github/last-commit/rapenne-s/bento)](https://github.com/rapenne-s/bento/) - A KISS deployment tool to keep your NixOS fleet (servers & workstations) up to date.
* [Colmena ![GitHub Repo Stars](https://img.shields.io/github/stars/zhaofengli/colmena) ![GitHub last commit](https://img.shields.io/github/last-commit/zhaofengli/colmena)](https://github.com/zhaofengli/colmena) - A simple, stateless NixOS deployment tool modeled after NixOps and morph.
* [deploy-rs ![GitHub Repo Stars](https://img.shields.io/github/stars/serokell/deploy-rs) ![GitHub last commit](https://img.shields.io/github/last-commit/serokell/deploy-rs)](https://github.com/serokell/deploy-rs) - A simple multi-profile Nix-flake deploy tool.
* [krops](https://cgit.krebsco.de/krops/about/) - A lightweight toolkit to deploy NixOS systems, remotely or locally.
* [KubeNix ![GitHub Repo Stars](https://img.shields.io/github/stars/xtruder/kubenix) ![GitHub last commit](https://img.shields.io/github/last-commit/xtruder/kubenix)](https://github.com/xtruder/kubenix) - A Kubernetes resource builder using Nix.
* [KuberNix ![GitHub Repo Stars](https://img.shields.io/github/stars/saschagrunert/kubernix) ![GitHub last commit](https://img.shields.io/github/last-commit/saschagrunert/kubernix)](https://github.com/saschagrunert/kubernix) - Single-dependency Kubernetes clusters via Nix packages.
* [morph ![GitHub Repo Stars](https://img.shields.io/github/stars/DBCDK/morph) ![GitHub last commit](https://img.shields.io/github/last-commit/DBCDK/morph)](https://github.com/DBCDK/morph) - A tool for managing existing NixOS hosts.
* [Nixery ![GitHub Repo Stars](https://img.shields.io/github/stars/tazjin/nixery) ![GitHub last commit](https://img.shields.io/github/last-commit/tazjin/nixery)](https://github.com/tazjin/nixery) - A Docker-compatible container registry which builds images ad-hoc via Nix.
* [Nixinate ![GitHub Repo Stars](https://img.shields.io/github/stars/MatthewCroughan/nixinate) ![GitHub last commit](https://img.shields.io/github/last-commit/MatthewCroughan/nixinate)](https://github.com/MatthewCroughan/nixinate) - A Nix flake library to provide app outputs for managing existing NixOS hosts over SSH.
* [NixOps ![GitHub Repo Stars](https://img.shields.io/github/stars/NixOS/nixops) ![GitHub last commit](https://img.shields.io/github/last-commit/NixOS/nixops)](https://github.com/NixOS/nixops) - The official Nix deployment tool, compatible with AWS, Hetzner, and more.
* [pushnix ![GitHub Repo Stars](https://img.shields.io/github/stars/arnarg/pushnix) ![GitHub last commit](https://img.shields.io/github/last-commit/arnarg/pushnix)](https://github.com/arnarg/pushnix) - Simple cli utility that pushes NixOS configuration and triggers a rebuild using ssh.
* [terraform-nixos ![GitHub Repo Stars](https://img.shields.io/github/stars/tweag/terraform-nixos) ![GitHub last commit](https://img.shields.io/github/last-commit/tweag/terraform-nixos)](https://github.com/tweag/terraform-nixos) - A set of Terraform modules designed to deploy NixOS.
* [terranix](https://terranix.org) - Use Nix and the NixOS module system to write your Terraform code.

## Virtualisation
* [nixos-shell ![GitHub Repo Stars](https://img.shields.io/github/stars/Mic92/nixos-shell) ![GitHub last commit](https://img.shields.io/github/last-commit/Mic92/nixos-shell)](https://github.com/Mic92/nixos-shell) - Simple headless VM configuration using Nix (similar to Vagrant).
* [extra-container ![GitHub Repo Stars](https://img.shields.io/github/stars/erikarvstedt/extra-container) ![GitHub last commit](https://img.shields.io/github/last-commit/erikarvstedt/extra-container)](https://github.com/erikarvstedt/extra-container) - Run declarative NixOS containers from the command line.
* [microvm ![GitHub Repo Stars](https://img.shields.io/github/stars/astro/microvm.nix) ![GitHub last commit](https://img.shields.io/github/last-commit/astro/microvm.nix)](https://github.com/astro/microvm.nix) - NixOS-based MicroVMs.

## Command-Line Tools

* [alejandra ![GitHub Repo Stars](https://img.shields.io/github/stars/kamadorueda/alejandra) ![GitHub last commit](https://img.shields.io/github/last-commit/kamadorueda/alejandra)](https://github.com/kamadorueda/alejandra) - An opinionated Nix code formatter optimized for speed and consistency.
* [comma ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/comma) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/comma)](https://github.com/nix-community/comma) - Quickly run any binary; wraps together `nix run` and `nix-index`.
* [deadnix ![GitHub Repo Stars](https://img.shields.io/github/stars/astro/deadnix) ![GitHub last commit](https://img.shields.io/github/last-commit/astro/deadnix)](https://github.com/astro/deadnix) - Scan Nix files for dead code.
* [devenv ![GitHub Repo Stars](https://img.shields.io/github/stars/cachix/devenv) ![GitHub last commit](https://img.shields.io/github/last-commit/cachix/devenv)](https://github.com/cachix/devenv) - A Nix-based tool for creating developer shell environments quickly and reproducibly.
* [manix ![GitHub Repo Stars](https://img.shields.io/github/stars/mlvzk/manix) ![GitHub last commit](https://img.shields.io/github/last-commit/mlvzk/manix)](https://github.com/mlvzk/manix) - Find configuration options and function documentation for Nixpkgs, NixOS, and Home Manager.
* [nixfmt ![GitHub Repo Stars](https://img.shields.io/github/stars/serokell/nixfmt) ![GitHub last commit](https://img.shields.io/github/last-commit/serokell/nixfmt)](https://github.com/serokell/nixfmt) - A formatter for Nix code, intended to easily apply a uniform style.
* [nixpkgs-fmt ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/nixpkgs-fmt) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/nixpkgs-fmt)](https://github.com/nix-community/nixpkgs-fmt) - Nix code formatter for nixpkgs.
* [nixpkgs-hammering ![GitHub Repo Stars](https://img.shields.io/github/stars/jtojnar/nixpkgs-hammering) ![GitHub last commit](https://img.shields.io/github/last-commit/jtojnar/nixpkgs-hammering)](https://github.com/jtojnar/nixpkgs-hammering) - An opinionated linter for Nixpkgs package expressions.
* [nix-alien ![GitHub Repo Stars](https://img.shields.io/github/stars/thiagokokada/nix-alien) ![GitHub last commit](https://img.shields.io/github/last-commit/thiagokokada/nix-alien)](https://github.com/thiagokokada/nix-alien) - Run unpatched binaries on Nix/NixOS easily.
* [nix-diff ![GitHub Repo Stars](https://img.shields.io/github/stars/Gabriella439/nix-diff) ![GitHub last commit](https://img.shields.io/github/last-commit/Gabriella439/nix-diff)](https://github.com/Gabriella439/nix-diff) - A tool to explain why two Nix derivations differ.
* [nix-du ![GitHub Repo Stars](https://img.shields.io/github/stars/symphorien/nix-du) ![GitHub last commit](https://img.shields.io/github/last-commit/symphorien/nix-du)](https://github.com/symphorien/nix-du) - Visualise which gc-roots to delete to free some space in your Nix store.
* [nix-index ![GitHub Repo Stars](https://img.shields.io/github/stars/bennofs/nix-index) ![GitHub last commit](https://img.shields.io/github/last-commit/bennofs/nix-index)](https://github.com/bennofs/nix-index) - Quickly locate Nix packages with specific files.
* [nix-init ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/nix-init) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/nix-init)](https://github.com/nix-community/nix-init) - Generate Nix packages from URLs with hash prefetching, dependency inference, license detection, and more.
* [nix-melt ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/nix-melt) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/nix-melt)](https://github.com/nix-community/nix-melt) - A ranger-like flake.lock viewer.
* [nix-output-monitor](https://git.maralorn.de/nix-output-monitor/) - A tool to produce useful graphs and statistics when building derivations.
* [nix-prefetch ![GitHub Repo Stars](https://img.shields.io/github/stars/msteen/nix-prefetch) ![GitHub last commit](https://img.shields.io/github/last-commit/msteen/nix-prefetch)](https://github.com/msteen/nix-prefetch) - A universal tool for updating source checksums.
* [nix-tree ![GitHub Repo Stars](https://img.shields.io/github/stars/utdemir/nix-tree) ![GitHub last commit](https://img.shields.io/github/last-commit/utdemir/nix-tree)](https://github.com/utdemir/nix-tree) - Interactively browse the dependency graph of Nix derivations.
* [nurl ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/nurl) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/nurl)](https://github.com/nix-community/nurl) - Generate Nix fetcher calls from repository URLs.
* [nvd](https://gitlab.com/khumba/nvd) - Diff package versions between two store paths; it's especially useful for comparing NixOS generations on rebuild.
* [statix ![GitHub Repo Stars](https://img.shields.io/github/stars/nerdypepper/statix) ![GitHub last commit](https://img.shields.io/github/last-commit/nerdypepper/statix)](https://github.com/nerdypepper/statix) - A linter/fixer to check for and fix antipatterns in Nix code.

## Development

* [Arion ![GitHub Repo Stars](https://img.shields.io/github/stars/hercules-ci/arion) ![GitHub last commit](https://img.shields.io/github/last-commit/hercules-ci/arion)](https://github.com/hercules-ci/arion) - Run `docker-compose` with help from Nix/NixOS.
* [cached-nix-shell ![GitHub Repo Stars](https://img.shields.io/github/stars/xzfc/cached-nix-shell) ![GitHub last commit](https://img.shields.io/github/last-commit/xzfc/cached-nix-shell)](https://github.com/xzfc/cached-nix-shell) - A `nix-shell` replacement that uses caching to open subsequent shells quickly.
* [Cachix](https://cachix.org/) - Hosted binary cache service; free for open-source projects.
* [Devbox ![GitHub Repo Stars](https://img.shields.io/github/stars/jetpack-io/devbox) ![GitHub last commit](https://img.shields.io/github/last-commit/jetpack-io/devbox)](https://github.com/jetpack-io/devbox) - Instant, portable, and predictable development environments.
* [devshell ![GitHub Repo Stars](https://img.shields.io/github/stars/numtide/devshell) ![GitHub last commit](https://img.shields.io/github/last-commit/numtide/devshell)](https://github.com/numtide/devshell) - `mkShell` with extra bits and a toml config option to be able to onboard non-nix users.
* [dream2nix ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/dream2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/dream2nix)](https://github.com/nix-community/dream2nix) - A framework for automatically converting packages from other build systems to Nix.
* [flake.parts ![GitHub Repo Stars](https://img.shields.io/github/stars/hercules-ci/flake-parts) ![GitHub last commit](https://img.shields.io/github/last-commit/hercules-ci/flake-parts)](https://github.com/hercules-ci/flake-parts) - Minimal Nix modules framework for Flakes: split your flakes into modules and get things done with community modules.
* [flake-utils ![GitHub Repo Stars](https://img.shields.io/github/stars/numtide/flake-utils) ![GitHub last commit](https://img.shields.io/github/last-commit/numtide/flake-utils)](https://github.com/numtide/flake-utils) - Pure Nix flake utility functions to help with writing flakes.
* [flake-utils-plus ![GitHub Repo Stars](https://img.shields.io/github/stars/gytis-ivaskevicius/flake-utils-plus) ![GitHub last commit](https://img.shields.io/github/last-commit/gytis-ivaskevicius/flake-utils-plus)](https://github.com/gytis-ivaskevicius/flake-utils-plus) - A lightweight Nix library flake for painless NixOS flake configuration.
* [flakelight ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/flakelight) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/flakelight)](https://github.com/nix-community/flakelight) - A modular flake framework aiming to minimize boilerplate.
* [flox ![GitHub Repo Stars](https://img.shields.io/github/stars/flox/flox) ![GitHub last commit](https://img.shields.io/github/last-commit/flox/flox)](https://github.com/flox/flox) - Manage and share development environments, package projects, and publish artifacts anywhere.
* [gitignore.nix ![GitHub Repo Stars](https://img.shields.io/github/stars/hercules-ci/gitignore.nix) ![GitHub last commit](https://img.shields.io/github/last-commit/hercules-ci/gitignore.nix)](https://github.com/hercules-ci/gitignore.nix) - The most feature-complete and easy-to-use `.gitignore` integration.
* [haumea ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/haumea) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/haumea)](https://github.com/nix-community/haumea) - Filesystem-based module system for the Nix language similar to traditional programming languages, with support for file hierarchy and visibility.
* [lorri ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/lorri) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/lorri)](https://github.com/nix-community/lorri/) - A much better `nix-shell` for development that augments direnv.
* [namaka ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/namaka) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/namaka)](https://github.com/nix-community/namaka) - Snapshot testing for Nix based on haumea.
* [nil ![GitHub Repo Stars](https://img.shields.io/github/stars/oxalica/nil) ![GitHub last commit](https://img.shields.io/github/last-commit/oxalica/nil)](https://github.com/oxalica/nil) - NIx Language server, an incremental analysis assistent for writing in Nix.
* [niv ![GitHub Repo Stars](https://img.shields.io/github/stars/nmattia/niv) ![GitHub last commit](https://img.shields.io/github/last-commit/nmattia/niv)](https://github.com/nmattia/niv/) - Easy dependency management for Nix projects with package pinning.
* [nix-direnv ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/nix-direnv) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/nix-direnv)](https://github.com/nix-community/nix-direnv) - A fast loader and flake-compliant configuration for the direnv environment auto-loader.
* [nix-update ![GitHub Repo Stars](https://img.shields.io/github/stars/Mic92/nix-update) ![GitHub last commit](https://img.shields.io/github/last-commit/Mic92/nix-update)](https://github.com/Mic92/nix-update) - Update versions/source hashes of nix packages.
* [nixd ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/nixd) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/nixd)](https://github.com/nix-community/nixd) - Nix language server, based on Nix libraries.
* [nixpkgs-review ![GitHub Repo Stars](https://img.shields.io/github/stars/Mic92/nixpkgs-review) ![GitHub last commit](https://img.shields.io/github/last-commit/Mic92/nixpkgs-review)](https://github.com/Mic92/nixpkgs-review) - The best tool to verify that a pull-request in Nixpkgs is building properly.
* [pre-commit-hooks.nix ![GitHub Repo Stars](https://img.shields.io/github/stars/cachix/pre-commit-hooks.nix) ![GitHub last commit](https://img.shields.io/github/last-commit/cachix/pre-commit-hooks.nix)](https://github.com/cachix/pre-commit-hooks.nix) - Run linters/formatters at commit time and on your CI.
* [rnix-lsp ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/rnix-lsp) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/rnix-lsp)](https://github.com/nix-community/rnix-lsp) - A syntax-checking language server for Nix.
* [robotnix ![GitHub Repo Stars](https://img.shields.io/github/stars/danielfullmer/robotnix) ![GitHub last commit](https://img.shields.io/github/last-commit/danielfullmer/robotnix)](https://github.com/danielfullmer/robotnix) - A declarative and reproducible build system for Android (AOSP) images.
* [services-flake ![GitHub Repo Stars](https://img.shields.io/github/stars/juspay/services-flake) ![GitHub last commit](https://img.shields.io/github/last-commit/juspay/services-flake)](https://github.com/juspay/services-flake) - A NixOS-like service configuration framework for Nix flakes.
* [Snowfall Lib ![GitHub Repo Stars](https://img.shields.io/github/stars/snowfallorg/lib) ![GitHub last commit](https://img.shields.io/github/last-commit/snowfallorg/lib)](https://github.com/snowfallorg/lib) - A library that makes it easy to manage your Nix flake by imposing an opinionated file structure.
* [templates ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/templates) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/templates)](https://github.com/nix-community/templates) - Project templates for many languages using Nix flakes.

## DevOps

* [Makes ![GitHub Repo Stars](https://img.shields.io/github/stars/fluidattacks/makes) ![GitHub last commit](https://img.shields.io/github/last-commit/fluidattacks/makes)](https://github.com/fluidattacks/makes) - A Nix-based CI/CD pipeline framework for building, testing, and releasing projects in any language, from anywhere.
* [Standard ![GitHub Repo Stars](https://img.shields.io/github/stars/divnix/std) ![GitHub last commit](https://img.shields.io/github/last-commit/divnix/std)](https://github.com/divnix/std) - An opinionated Nix Flakes framework to keep Nix code in large projects organized, accompanied by a friendly CLI/TUI optized for DevOps scenarios.

## Programming Languages

### Arduino

* [nixduino ![GitHub Repo Stars](https://img.shields.io/github/stars/boredom101/nixduino) ![GitHub last commit](https://img.shields.io/github/last-commit/boredom101/nixduino)](https://github.com/boredom101/nixduino) - Nix-based tool to help build Arduino sketches.

### Clojure

* [clj-nix ![GitHub Repo Stars](https://img.shields.io/github/stars/jlesquembre/clj-nix) ![GitHub last commit](https://img.shields.io/github/last-commit/jlesquembre/clj-nix)](https://github.com/jlesquembre/clj-nix) - Nix helper functions for Clojure projects.

### Crystal

* [crystal2nix ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/crystal2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/crystal2nix)](https://github.com/nix-community/crystal2nix) - Convert `shard.lock` into Nix expressions.

### Elm

* [elm2nix ![GitHub Repo Stars](https://img.shields.io/github/stars/cachix/elm2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/cachix/elm2nix)](https://github.com/cachix/elm2nix) - Convert `elm.json` into Nix expressions.

### Haskell

* [cabal2nix ![GitHub Repo Stars](https://img.shields.io/github/stars/NixOS/cabal2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/NixOS/cabal2nix)](https://github.com/NixOS/cabal2nix) - Converts a Cabal file into a Nix build expression.
* [haskell-flake ![GitHub Repo Stars](https://img.shields.io/github/stars/srid/haskell-flake) ![GitHub last commit](https://img.shields.io/github/last-commit/srid/haskell-flake)](https://github.com/srid/haskell-flake) - A `flake-parts` Nix module for Haskell development.
* [haskell.nix ![GitHub Repo Stars](https://img.shields.io/github/stars/input-output-hk/haskell.nix) ![GitHub last commit](https://img.shields.io/github/last-commit/input-output-hk/haskell.nix)](https://github.com/input-output-hk/haskell.nix) - Alternative Haskell Infrastructure for Nixpkgs.
* [nix-haskell-mode ![GitHub Repo Stars](https://img.shields.io/github/stars/matthewbauer/nix-haskell-mode) ![GitHub last commit](https://img.shields.io/github/last-commit/matthewbauer/nix-haskell-mode)](https://github.com/matthewbauer/nix-haskell-mode) - Automatic Haskell setup in Emacs.
* [nixkell ![GitHub Repo Stars](https://img.shields.io/github/stars/pwm/nixkell) ![GitHub last commit](https://img.shields.io/github/last-commit/pwm/nixkell)](https://github.com/pwm/nixkell) - A Haskell project template using Nix and direnv.

### Node.js

* [Napalm ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/napalm) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/napalm)](https://github.com/nix-community/napalm) - Support for building npm packages in Nix with a lightweight npm registry.
* [node2nix ![GitHub Repo Stars](https://img.shields.io/github/stars/svanderburg/node2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/svanderburg/node2nix)](https://github.com/svanderburg/node2nix) - Generate Nix expression from a `package.json` (or `package-lock.json`) (to be stored as files).
* [npmlock2nix ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/npmlock2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/npmlock2nix)](https://github.com/nix-community/npmlock2nix) - Generate Nix expressions from a `package-lock.json` (in-memory), primarily for web projects.

### OCaml

* [opam2nix ![GitHub Repo Stars](https://img.shields.io/github/stars/timbertson/opam2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/timbertson/opam2nix)](https://github.com/timbertson/opam2nix) - Generate Nix expressions from opam packages.

### PHP

* [composer2nix ![GitHub Repo Stars](https://img.shields.io/github/stars/svanderburg/composer2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/svanderburg/composer2nix)](https://github.com/svanderburg/composer2nix) - Generate Nix expressions to build composer packages.
* [composer-plugin-nixify ![GitHub Repo Stars](https://img.shields.io/github/stars/stephank/composer-plugin-nixify) ![GitHub last commit](https://img.shields.io/github/last-commit/stephank/composer-plugin-nixify)](https://github.com/stephank/composer-plugin-nixify) - Composer plugin to help with Nix packaging.
* [composition-c4 ![GitHub Repo Stars](https://img.shields.io/github/stars/fossar/composition-c4) ![GitHub last commit](https://img.shields.io/github/last-commit/fossar/composition-c4)](https://github.com/fossar/composition-c4) - Support for building composer packages from a `composer.lock` (using IFD).
* [nix-phps ![GitHub Repo Stars](https://img.shields.io/github/stars/fossar/nix-phps) ![GitHub last commit](https://img.shields.io/github/last-commit/fossar/nix-phps)](https://github.com/fossar/nix-phps) - Flake containing old and unmaintained PHP versions (intended for CI use).
* [nix-shell ![GitHub Repo Stars](https://img.shields.io/github/stars/loophp/nix-shell) ![GitHub last commit](https://img.shields.io/github/last-commit/loophp/nix-shell)](https://github.com/loophp/nix-shell/) - Nix shells for PHP development.

### PureScript

* [Easy PureScript Nix ![GitHub Repo Stars](https://img.shields.io/github/stars/justinwoo/easy-purescript-nix) ![GitHub last commit](https://img.shields.io/github/last-commit/justinwoo/easy-purescript-nix)](https://github.com/justinwoo/easy-purescript-nix) - A project to easily use PureScript and other tools with Nix.
* [purs-nix ![GitHub Repo Stars](https://img.shields.io/github/stars/purs-nix/purs-nix) ![GitHub last commit](https://img.shields.io/github/last-commit/purs-nix/purs-nix)](https://github.com/purs-nix/purs-nix) - CLI and library combo designed for managing PureScript projects using Nix. It provides a Nix API that can be used within your projects, as well as a command-line interface for managing your development process.

### Python

* [poetry2nix ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/poetry2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/poetry2nix)](https://github.com/nix-community/poetry2nix) - Build Python packages directly from [Poetry's](https://python-poetry.org/) `poetry.lock`. No conversion step needed.

### Ruby

* [Bundix ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/bundix) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/bundix)](https://github.com/nix-community/bundix) - Generates a Nix expression for your Bundler-managed application.
* [ruby-nix ![GitHub Repo Stars](https://img.shields.io/github/stars/sagittaros/ruby-nix) ![GitHub last commit](https://img.shields.io/github/last-commit/sagittaros/ruby-nix)](https://github.com/sagittaros/ruby-nix) - Generates reproducible ruby/bundler app environment with Nix.

### Rust

* [cargo2nix ![GitHub Repo Stars](https://img.shields.io/github/stars/cargo2nix/cargo2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/cargo2nix/cargo2nix)](https://github.com/cargo2nix/cargo2nix) - Granular caching, development shell, Nix & Rust integration.
* [crane ![GitHub Repo Stars](https://img.shields.io/github/stars/ipetkov/crane) ![GitHub last commit](https://img.shields.io/github/last-commit/ipetkov/crane)](https://github.com/ipetkov/crane) - A Nix library for building Cargo projects with incremental artifact caching.
* [fenix ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/fenix) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/fenix)](https://github.com/nix-community/fenix) - Rust toolchains and Rust analyzer nightly for nix.
* [naersk ![GitHub Repo Stars](https://img.shields.io/github/stars/nmattia/naersk) ![GitHub last commit](https://img.shields.io/github/last-commit/nmattia/naersk)](https://github.com/nmattia/naersk) - Build Rust packages directly from `Cargo.lock`. No conversion step needed.
* [nix-cargo-integration ![GitHub Repo Stars](https://img.shields.io/github/stars/yusdacra/nix-cargo-integration) ![GitHub last commit](https://img.shields.io/github/last-commit/yusdacra/nix-cargo-integration)](https://github.com/yusdacra/nix-cargo-integration) - A library that allows easy and effortless integration for Cargo projects.
* [nixpkgs-mozilla ![GitHub Repo Stars](https://img.shields.io/github/stars/mozilla/nixpkgs-mozilla) ![GitHub last commit](https://img.shields.io/github/last-commit/mozilla/nixpkgs-mozilla)](https://github.com/mozilla/nixpkgs-mozilla) - Mozilla's overlay with Rust toolchains and Firefox.
* [rust-nix-templater ![GitHub Repo Stars](https://img.shields.io/github/stars/yusdacra/rust-nix-templater) ![GitHub last commit](https://img.shields.io/github/last-commit/yusdacra/rust-nix-templater)](https://github.com/yusdacra/rust-nix-templater) - Generates Nix build and development files for Rust projects.
* [rust-overlay ![GitHub Repo Stars](https://img.shields.io/github/stars/oxalica/rust-overlay) ![GitHub last commit](https://img.shields.io/github/last-commit/oxalica/rust-overlay)](https://github.com/oxalica/rust-overlay) - Pure and reproducible nix overlay of binary distributed Rust toolchains.

### Scala

* [sbt-derivation ![GitHub Repo Stars](https://img.shields.io/github/stars/zaninime/sbt-derivation) ![GitHub last commit](https://img.shields.io/github/last-commit/zaninime/sbt-derivation)](https://github.com/zaninime/sbt-derivation) - mkDerivation for sbt, similar to buildGoModule.

### Zig

* [zon2nix ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/zon2nix) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/zon2nix)](https://github.com/nix-community/zon2nix) - Convert the dependencies in `build.zig.zon` to a Nix expression.

## NixOS Modules

* [base16.nix ![GitHub Repo Stars](https://img.shields.io/github/stars/SenchoPens/base16.nix) ![GitHub last commit](https://img.shields.io/github/last-commit/SenchoPens/base16.nix)](https://github.com/SenchoPens/base16.nix) - Flake way to theme programs in [base16 ![GitHub Repo Stars](https://img.shields.io/github/stars/chriskempson/base16) ![GitHub last commit](https://img.shields.io/github/last-commit/chriskempson/base16)](https://github.com/chriskempson/base16) colorschemes, mustache template support included.
* [Home Manager ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/home-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/home-manager)](https://github.com/nix-community/home-manager) - Manage your user configuration just like NixOS.
* [musnix ![GitHub Repo Stars](https://img.shields.io/github/stars/musnix/musnix) ![GitHub last commit](https://img.shields.io/github/last-commit/musnix/musnix)](https://github.com/musnix/musnix) - Do real-time audio work in NixOS.
* [nixcloud-webservices ![GitHub Repo Stars](https://img.shields.io/github/stars/nixcloud/nixcloud-webservices) ![GitHub last commit](https://img.shields.io/github/last-commit/nixcloud/nixcloud-webservices)](https://github.com/nixcloud/nixcloud-webservices) - A Nixpkgs extension with a focus on ease of deployment of web-related technologies.
* [NixVim ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/nixvim) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/nixvim)](https://github.com/nix-community/nixvim) - A NeoVim distribution built with Nix modules and Nixpkgs.
* [Simple Nixos Mailserver](https://gitlab.com/simple-nixos-mailserver/nixos-mailserver) - A complete mailserver, managed with NixOS modules.
* [Stylix ![GitHub Repo Stars](https://img.shields.io/github/stars/danth/stylix) ![GitHub last commit](https://img.shields.io/github/last-commit/danth/stylix)](https://github.com/danth/stylix) - System-wide colorscheming and typography for NixOS.
* [nix-bitcoin ![GitHub Repo Stars](https://img.shields.io/github/stars/fort-nix/nix-bitcoin) ![GitHub last commit](https://img.shields.io/github/last-commit/fort-nix/nix-bitcoin)](https://github.com/fort-nix/nix-bitcoin) - Modules and packages for Bitcoin nodes with higher-layer protocols with an emphasis on security.

## NixOS Configuration Editors

### Desktop apps

* [NixOS Configuration Editor ![GitHub Repo Stars](https://img.shields.io/github/stars/vlinkz/nixos-conf-editor) ![GitHub last commit](https://img.shields.io/github/last-commit/vlinkz/nixos-conf-editor)](https://github.com/vlinkz/nixos-conf-editor) - Graphical editor for NixOS configuration. Desktop app in Rust and GTK.
* [Nix Software Center ![GitHub Repo Stars](https://img.shields.io/github/stars/vlinkz/nix-software-center) ![GitHub last commit](https://img.shields.io/github/last-commit/vlinkz/nix-software-center)](https://github.com/vlinkz/nix-software-center) - Install and manage Nix packages. Desktop app in Rust and GTK.

### Webinterface

* [MyNixOS](https://mynixos.com/) - Graphical editor for Nix flakes. Create and manage configurations and modules for NixOS and Nix home-manager. Rather a Nix generator than a Nix editor, because it does not allow to import Nix files.

## Overlays

* [awesome-nix-hpc ![GitHub Repo Stars](https://img.shields.io/github/stars/freuk/awesome-nix-hpc) ![GitHub last commit](https://img.shields.io/github/last-commit/freuk/awesome-nix-hpc)](https://github.com/freuk/awesome-nix-hpc) - High Performance Computing package sets.
* [chaotic-nyx ![GitHub Repo Stars](https://img.shields.io/github/stars/chaotic-cx/nyx) ![GitHub last commit](https://img.shields.io/github/last-commit/chaotic-cx/nyx)](https://github.com/chaotic-cx/nyx) - Daily bumped bleeding edge packages like `mesa_git` & others that aren't yet in Nixpkgs. Created by the makers of [Chaotic-AUR](https://github.com/chaotic-aur/).
* [nix-darwin ![GitHub Repo Stars](https://img.shields.io/github/stars/LnL7/nix-darwin) ![GitHub last commit](https://img.shields.io/github/last-commit/LnL7/nix-darwin)](https://github.com/LnL7/nix-darwin) - Manage macOS configuration just like on NixOS.
* [nixpkgs-firefox-darwin ![GitHub Repo Stars](https://img.shields.io/github/stars/bandithedoge/nixpkgs-firefox-darwin) ![GitHub last commit](https://img.shields.io/github/last-commit/bandithedoge/nixpkgs-firefox-darwin)](https://github.com/bandithedoge/nixpkgs-firefox-darwin) - Automatically updated Firefox binary packages for macOS.
* [nixpkgs-wayland ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/nixpkgs-wayland) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/nixpkgs-wayland)](https://github.com/nix-community/nixpkgs-wayland) - Bleeding-edge Wayland packages.
* [NUR ![GitHub Repo Stars](https://img.shields.io/github/stars/nix-community/NUR) ![GitHub last commit](https://img.shields.io/github/last-commit/nix-community/NUR)](https://github.com/nix-community/NUR/) - Nix User Repositories. The mother of all overlays, allowing access to user repositories and installing packages via attributes.

## Community

* [#nix:nixos.org](https://matrix.to/#/#nix:nixos.org)
* [#nixos on Libera.Chat](https://web.libera.chat/?nick=Guest?#nixos)
* [Discord - Nix/Nixos (Unofficial)](https://discord.gg/BMUCQx6)
* [Discourse](https://discourse.nixos.org/) - The best place to get help and discuss Nix-related topics.
* [NixCon](https://nixcon.org/) - The annual community conference for contributors and users of Nix and NixOS.
* [Wiki (Unofficial)](https://nixos.wiki)
