# Awesome Substrate [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> An awesome list is a list of awesome things curated by the community.

[Substrate](https://substrate.io/) is a framework for building upgradable, modular and efficient
blockchains. Substrate is an open-source library of [Rust](https://www.rust-lang.org/) code that
is maintained by [Parity Technologies](https://www.parity.io/).

## Contents

- [Official Resources](#official-resources)
- [Recordings](#recordings)
- [Workshops & Demos](#workshops--demos)
- [Community Resources](#community-resources)
  - [Community Resources - Guides](#community-resources---guides)
- [Frameworks](#frameworks)
- [Templates](#templates)
- [Pallets](#pallets)
- [Client Libraries](#client-libraries)
- [Ecosystem Tools](#ecosystem-tools)
- [Alternative Implementations](#alternative-implementations)
- [SCALE Codec](#scale-codec)
  - [SCALE Codec - Implementations](#scale-codec---implementations)

## Official Resources

- [Developer Hub](https://substrate.dev/) - Developer portal.
  - [Tutorials](https://substrate.dev/tutorials) - Guided exercises to get you started.
  - [Knowledge Base](https://substrate.dev/knowledgebase) - In-depth documentation related to
    Substrate development.
  - [Recipes](https://substrate.dev/recipes) - Working code examples that solve common problems.
  - [Reference Docs](https://substrate.dev/rustdocs) - Rustdoc API documentation.
- [Seminar](https://substrate.dev/seminar) - Collaborative learning on
  [Crowdcast](https://www.crowdcast.io/e/substrate-seminar).
- [Technical Chat](https://app.element.io/#/room/!HzySYSaIhtyWrwiwEV:matrix.org) - Ask questions &
  chat with other Substrate developers.
- [Builders Program](https://www.substrate.io/builders-program) - White-glove support for visionary
  teams.
- [Web3 Foundation Grants](https://web3.foundation/grants) - Funding for ecosystem development.
- [Users](https://www.substrate.io/substrate-users) - Teams building with Substrate.
- [GitHub ![GitHub Repo stars](https://img.shields.io/github/stars/paritytech/substrate) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/substrate)](https://github.com/paritytech/substrate) - Substrate source code.
- [Developer Hub GitHub](https://github.com/substrate-developer-hub/) - Developer Hub repositories.
- [Polkadot GitHub ![GitHub Repo stars](https://img.shields.io/github/stars/paritytech/polkadot) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/polkadot)](https://github.com/paritytech/polkadot) - Substrate monorepo for multiple
  Parity-sponsored chains.
- [`subport` ![GitHub Repo stars](https://img.shields.io/github/stars/paritytech/subport) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/subport)](https://github.com/paritytech/subport/issues) - Support repository.
- [Parity Blog](https://www.parity.io/blog/) - Read about updates in the Substrate ecosystem.
- [Parity Events](https://www.parity.io/events/) - Upcoming events.
- [Twitter](https://twitter.com/substrate_io) - Follow us to stay up-to-date.
- [Polkassembly](https://polkassembly.io/) - The place to discuss and vote on Kusama and Polkadot
  governance.

## Recordings

- [Substrate: A Rustic Vision for Polkadot by Gavin Wood at Web3 Summit 2018](https://www.youtube.com/watch?v=0IoUZdDi5Is)
- [Introduction to Substrate](https://www.crowdcast.io/e/xzdm2hyq)
- [Parachains, Cumulus & the Rococo Test Network](https://www.crowdcast.io/e/zpnjlj0r)
- [Enterprise Demo](https://www.crowdcast.io/e/substrate-seminar/6)
- [Bridges & Cross-Chain Interoperability](https://www.crowdcast.io/e/substrate-seminar/12)
- [Archive Indexing Engine](https://www.crowdcast.io/e/substrate-seminar/15)
- [Ethereum Apps on Substrate Chains](https://www.crowdcast.io/e/ethereum-apps-moonbeam)
- [Polkadot Network Technical Explainers](https://www.youtube.com/playlist?list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8)
- [Sub0 Developer Conference](https://www.crowdcast.io/e/axvfinsv)
- [Weights & Benchmarking](https://www.crowdcast.io/e/substrate-seminar/19)
- [Runtime Upgrades & Storage Migrations](https://www.crowdcast.io/e/substrate-seminar/20)
- [FRAME's Origin Primitive](https://www.crowdcast.io/e/substrate-seminar/24)
- [Governance with FRAME](https://www.crowdcast.io/e/substrate-seminar/25)
- [Polkadot Decoded Community Conference](https://www.crowdcast.io/e/polkadot-decoded)

## Workshops & Demos

- [UTXO Workshop ![GitHub Repo stars](https://img.shields.io/github/stars/substrate-developer-hub/utxo-workshop) ![GitHub last commit](https://img.shields.io/github/last-commit/substrate-developer-hub/utxo-workshop)](https://github.com/substrate-developer-hub/utxo-workshop) - Use Substrate to
  implement a Bitcoin-like chain.
- [Cumulus Wokshop](https://substrate.dev/cumulus-workshop/#/) - Build a parachain with Cumulus.
- [Enterprise Sample ![GitHub Repo stars](https://img.shields.io/github/stars/substrate-developer-hub/substrate-enterprise-sample) ![GitHub last commit](https://img.shields.io/github/last-commit/substrate-developer-hub/substrate-enterprise-sample)](https://github.com/substrate-developer-hub/substrate-enterprise-sample) - A
  fully-featured sample that uses a supply chain use case to demonstrate Substrate's rich set of
  capabilities.

## Community Resources

- [DotLeap](https://dotleap.com/) - Community content and newsletter.
- [Stack Overflow](https://stackoverflow.com/questions/tagged/substrate) - Questions tagged
  `substrate`.
- [Reddit](https://www.reddit.com/r/substrate/) - Official subreddit.
- [Polkadot Stack ![GitHub Repo stars](https://img.shields.io/github/stars/w3f/General-Grants-Program) ![GitHub last commit](https://img.shields.io/github/last-commit/w3f/General-Grants-Program)](https://github.com/w3f/General-Grants-Program/blob/master/grants/polkadot_stack.md) - Another
  awesome list maintained by our friends at [Web3 Foundation](https://web3.foundation/).
- [PolkaView](https://polkaview.network/dot) - Historical data on minimum staked to be rewarded.
- [Subsocial](https://subsocial.network/) - Decentralized social network for the Polkadot / Kusama
  ecosystem. Built on Substrate + IPFS.
- [DOTspot](https://www.dotspot.io/) - An open-place for Substrate ecosystem projects to share their
  latest news.
- [DotJobs](https://dotjobs.net/) - A job board for the Polkadot ecosystem from the team at
  [Stateless.Money](https://www.stateless.money/).
- [Substrate Migrations ![GitHub Repo stars](https://img.shields.io/github/stars/apopiak/substrate-migrations) ![GitHub last commit](https://img.shields.io/github/last-commit/apopiak/substrate-migrations)](https://github.com/apopiak/substrate-migrations) - A list of past runtime
  storage migrations with notes and examples.
- [OnFinality](https://onfinality.io) - Free and public API services to shared Substrate based archival nodes.

### Community Resources - Guides

- [Build Substrate in a few minutes at a low cost](https://medium.com/@yangWao/build-substrate-in-few-minutes-with-fraction-costs-26fce6aa5066) - Guide
  to using [`cargo remote` ![GitHub Repo stars](https://img.shields.io/github/stars/sgeisler/cargo-remote) ![GitHub last commit](https://img.shields.io/github/last-commit/sgeisler/cargo-remote)](https://github.com/sgeisler/cargo-remote) and [Google Cloud](https://cloud.google.com/) to
  reduce Substrate build times; written by Substrate community member [Matej Nemček](https://medium.com/@yangWao).

## Frameworks

- [FRAME](https://substrate.dev/docs/en/knowledgebase/runtime/frame) - An idiomatic system for
  building Substrate runtimes.
- [ink! ![GitHub Repo stars](https://img.shields.io/github/stars/paritytech/ink) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/ink)](https://github.com/paritytech/ink) - Smart contract language for Substrate chains.
- [Cumulus ![GitHub Repo stars](https://img.shields.io/github/stars/paritytech/cumulus) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/cumulus)](https://github.com/paritytech/cumulus) - Simplified Polkadot-compatible parachains.
- [Bridges ![GitHub Repo stars](https://img.shields.io/github/stars/paritytech/parity-bridges-common) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/parity-bridges-common)](https://github.com/paritytech/parity-bridges-common) - A collection of tools for
  cross-chain communication.
- [Frontier ![GitHub Repo stars](https://img.shields.io/github/stars/paritytech/frontier) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/frontier)](https://github.com/paritytech/frontier) - End-to-end Ethereum emulation for Substrate
  chains.
- [Polkadot-JS](https://polkadot.js.org/) - Rich framework for front-end development.
- [SubstraTEE](https://www.substratee.com) - Trusted off-chain execution framework that uses
  [Intel SGX](https://en.wikipedia.org/wiki/Software_Guard_Extensions) trusted execution
  environments.
- [FRAME Benchmarking ![GitHub Repo stars](https://img.shields.io/github/stars/paritytech/substrate) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/substrate)](https://github.com/paritytech/substrate/tree/master/frame/benchmarking) - The
  official benchmarking framework for the FRAME system for runtime development.

## Templates

- [Node ![GitHub Repo stars](https://img.shields.io/github/stars/substrate-developer-hub/substrate-node-template) ![GitHub last commit](https://img.shields.io/github/last-commit/substrate-developer-hub/substrate-node-template)](https://github.com/substrate-developer-hub/substrate-node-template) - A fresh FRAME-based
  node, ready for hacking.
- [Pallet ![GitHub Repo stars](https://img.shields.io/github/stars/substrate-developer-hub/substrate-pallet-template) ![GitHub last commit](https://img.shields.io/github/last-commit/substrate-developer-hub/substrate-pallet-template)](https://github.com/substrate-developer-hub/substrate-pallet-template) - Easily create
  pluggable blockchain capabilities.
- [Parachain ![GitHub Repo stars](https://img.shields.io/github/stars/substrate-developer-hub/substrate-parachain-template) ![GitHub last commit](https://img.shields.io/github/last-commit/substrate-developer-hub/substrate-parachain-template)](https://github.com/substrate-developer-hub/substrate-parachain-template) - A new
  Cumulus-based Substrate node, ready for hacking (see 'Cumulus' under Frameworks for more info).
- [Front-End ![GitHub Repo stars](https://img.shields.io/github/stars/substrate-developer-hub/substrate-front-end-template) ![GitHub last commit](https://img.shields.io/github/last-commit/substrate-developer-hub/substrate-front-end-template)](https://github.com/substrate-developer-hub/substrate-front-end-template) - Use the
  Polkadot-JS API and [React](https://reactjs.org/) to build front-ends for Substrate-based chains.
- [`substrate-stencil` ![GitHub Repo stars](https://img.shields.io/github/stars/kaichaosun/substrate-stencil) ![GitHub last commit](https://img.shields.io/github/last-commit/kaichaosun/substrate-stencil)](https://github.com/kaichaosun/substrate-stencil) - A template for a
  Substrate node that includes staking and governance capabilities.

## Pallets

- [Open Runtime Module Library (ORML) ![GitHub Repo stars](https://img.shields.io/github/stars/open-web3-stack/open-runtime-module-library) ![GitHub last commit](https://img.shields.io/github/last-commit/open-web3-stack/open-runtime-module-library)](https://github.com/open-web3-stack/open-runtime-module-library) - Community
  maintained collection of Substrate runtime modules.
- [Sunshine Bounty ![GitHub Repo stars](https://img.shields.io/github/stars/sunshine-protocol/sunshine-bounty) ![GitHub last commit](https://img.shields.io/github/last-commit/sunshine-protocol/sunshine-bounty)](https://github.com/sunshine-protocol/sunshine-bounty/tree/master/pallets) - Distributed
  autonomous organization (DAO) for administering a bounty program.
- [Sunshine Identity ![GitHub Repo stars](https://img.shields.io/github/stars/sunshine-protocol/sunshine-keybase) ![GitHub last commit](https://img.shields.io/github/last-commit/sunshine-protocol/sunshine-keybase)](https://github.com/sunshine-protocol/sunshine-keybase/tree/master/identity/pallet) - Keybase-inspired
  identity management.
- [Sunshine Faucet ![GitHub Repo stars](https://img.shields.io/github/stars/sunshine-protocol/sunshine-keybase) ![GitHub last commit](https://img.shields.io/github/last-commit/sunshine-protocol/sunshine-keybase)](https://github.com/sunshine-protocol/sunshine-keybase/tree/master/faucet/pallet) - Dispense
  resources for a development chain.
- [Commodities ![GitHub Repo stars](https://img.shields.io/github/stars/danforbes/pallet-nft) ![GitHub last commit](https://img.shields.io/github/last-commit/danforbes/pallet-nft)](https://github.com/danforbes/pallet-nft) - Defines and implements a non-fungible
  token interface.
- [Chainlink Feed Pallet ![GitHub Repo stars](https://img.shields.io/github/stars/smartcontractkit/chainlink-polkadot) ![GitHub last commit](https://img.shields.io/github/last-commit/smartcontractkit/chainlink-polkadot)](https://github.com/smartcontractkit/chainlink-polkadot) - Chainlink feed pallet and example node
  showing how to integrate to Substrate chains.

## Client Libraries

- [`subxt` ![GitHub Repo stars](https://img.shields.io/github/stars/paritytech/substrate-subxt) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/substrate-subxt)](https://github.com/paritytech/substrate-subxt) - Official Rust client.
- [Substrate API Client ![GitHub Repo stars](https://img.shields.io/github/stars/scs/substrate-api-client) ![GitHub last commit](https://img.shields.io/github/last-commit/scs/substrate-api-client)](https://github.com/scs/substrate-api-client) - Rust client maintained by
  [Supercomputing Systems AG](https://www.scs.ch/).
- [Polkadot-JS API ![GitHub Repo stars](https://img.shields.io/github/stars/polkadot-js/api) ![GitHub last commit](https://img.shields.io/github/last-commit/polkadot-js/api)](https://github.com/polkadot-js/api/) - Semi-official JavaScript library for
  Substrate-based chains.
- [Python Substrate Interface ![GitHub Repo stars](https://img.shields.io/github/stars/polkascan/py-substrate-interface) ![GitHub last commit](https://img.shields.io/github/last-commit/polkascan/py-substrate-interface)](https://github.com/polkascan/py-substrate-interface) - Maintained by
  [Polkascan Foundation](https://polkascan.org/).
- [Go Substrate RPC Client ![GitHub Repo stars](https://img.shields.io/github/stars/centrifuge/go-substrate-rpc-client) ![GitHub last commit](https://img.shields.io/github/last-commit/centrifuge/go-substrate-rpc-client)](https://github.com/centrifuge/go-substrate-rpc-client/) - Maintained by
  [Centrifuge](https://centrifuge.io/).
- [Substrate C++ API ![GitHub Repo stars](https://img.shields.io/github/stars/usetech-llc/polkadot_api_cpp) ![GitHub last commit](https://img.shields.io/github/last-commit/usetech-llc/polkadot_api_cpp)](https://github.com/usetech-llc/polkadot_api_cpp) - Maintained by
  [Usetech](https://usetech.com/blockchain/).
- [Substrate .Net API ![GitHub Repo stars](https://img.shields.io/github/stars/usetech-llc/polkadot_api_dotnet) ![GitHub last commit](https://img.shields.io/github/last-commit/usetech-llc/polkadot_api_dotnet)](https://github.com/usetech-llc/polkadot_api_dotnet) - Maintained by Usetech.
- [Substrate .NET Standard API ![GitHub Repo stars](https://img.shields.io/github/stars/dotmog/SubstrateNetApi) ![GitHub last commit](https://img.shields.io/github/last-commit/dotmog/SubstrateNetApi)](https://github.com/dotmog/SubstrateNetApi) in
  [nuget](https://www.nuget.org/packages/SubstrateNetApi/), and
  [Unity 3D integration example ![GitHub Repo stars](https://img.shields.io/github/stars/darkfriend77/Unity3DExample) ![GitHub last commit](https://img.shields.io/github/last-commit/darkfriend77/Unity3DExample)](https://github.com/darkfriend77/Unity3DExample) -
  Maintained by [DOTMog](https://dotmog.com/).
- [Kotlin Substrate Client ![GitHub Repo stars](https://img.shields.io/github/stars/NodleCode/substrate-client-kotlin) ![GitHub last commit](https://img.shields.io/github/last-commit/NodleCode/substrate-client-kotlin)](https://github.com/NodleCode/substrate-client-kotlin) - Maintained by [Nodle.io](https://github.com/NodleCode)

## Ecosystem Tools

- [Polkadot-JS Apps UI](https://polkadot.js.org/apps/) - Semi-official block explorer & front-end
  for Substrate-based chains.
- [Polkadot-JS Extension ![GitHub Repo stars](https://img.shields.io/github/stars/polkadot-js/extension) ![GitHub last commit](https://img.shields.io/github/last-commit/polkadot-js/extension)](https://github.com/polkadot-js/extension) - Browser extension for
  interacting with Substrate-based chains.
- [Polkadot Tool Index](https://wiki.polkadot.network/docs/en/build-tools-index#tools) - Here is
  **a very useful** list of tools available for your development w/ Polkadot and
  any substrate chain including Block Explorers, Wallets, Network Monitoring & Reporting,
  Clients, Benchmarking, Fuzzing, Forking, SCALE Codec, CLI Tools and much more.
- [Sidecar ![GitHub Repo stars](https://img.shields.io/github/stars/paritytech/substrate-api-sidecar) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/substrate-api-sidecar)](https://github.com/paritytech/substrate-api-sidecar) - REST service that runs alongside
  Substrate nodes.
- [Archive ![GitHub Repo stars](https://img.shields.io/github/stars/paritytech/substrate-archive) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/substrate-archive)](https://github.com/paritytech/substrate-archive) - Indexing engine for Substrate chains.
- [TxWrapper ![GitHub Repo stars](https://img.shields.io/github/stars/paritytech/txwrapper) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/txwrapper)](https://github.com/paritytech/txwrapper) - Helpful library for offline transaction
  creation.
- [Subkey](https://substrate.dev/docs/en/knowledgebase/integrate/subkey) - Command line utility for
  working with cryptographic keys.
- [Polkascan](https://polkascan.io/) - Multi-chain block explorer maintained by Polkascan
  Foundation.
- [VSCode Substrate](https://marketplace.visualstudio.com/items?itemName=paritytech.vscode-substrate) - Official
  plugin for Visual Studio Code.
- [Parity Signer](https://www.parity.io/signer/) - Upcycle an unused mobile phone into an air-gapped
  hardware wallet.
- [Fork Off Substrate ![GitHub Repo stars](https://img.shields.io/github/stars/maxsam4/fork-off-substrate) ![GitHub last commit](https://img.shields.io/github/last-commit/maxsam4/fork-off-substrate)](https://github.com/maxsam4/fork-off-substrate) - Script to help bootstrap a
  new chain with the state of a running chain.
- [Substrate debug-kit ![GitHub Repo stars](https://img.shields.io/github/stars/paritytech/substrate-debug-kit) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/substrate-debug-kit)](https://github.com/paritytech/substrate-debug-kit) - A collection of tools
  and libraries for debugging Substrate-based chains, including
  [`offline-election` ![GitHub Repo stars](https://img.shields.io/github/stars/paritytech/substrate-debug-kit) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/substrate-debug-kit)](https://github.com/paritytech/substrate-debug-kit/tree/master/offline-election),
  which is a tool that is used to predict nominated proof-of-stake elections.
- [`sup` ![GitHub Repo stars](https://img.shields.io/github/stars/clearloop/sup) ![GitHub last commit](https://img.shields.io/github/last-commit/clearloop/sup)](https://github.com/clearloop/sup) - Command line tool for generating or upgrading a
  Substrate node.
- [Substrate Dev Hub Utils ![GitHub Repo stars](https://img.shields.io/github/stars/danforbes/substrate-devhub-utils) ![GitHub last commit](https://img.shields.io/github/last-commit/danforbes/substrate-devhub-utils)](https://github.com/danforbes/substrate-devhub-utils) - _Unofficial_
  utilities for working with official Substrate Developer Hub resources.
- [Subscan](https://www.subscan.io/) - Multi-network explorer for Substrate-based chains.
- [Substrate Docker Builders ![GitHub Repo stars](https://img.shields.io/github/stars/ETeissonniere/substrate-nodeops) ![GitHub last commit](https://img.shields.io/github/last-commit/ETeissonniere/substrate-nodeops)](https://github.com/ETeissonniere/substrate-nodeops) - A set of
  Dockerfiles and GitHub Actions to auto-build and push a Docker image for Substrate-based chains.
- [Halva ![GitHub Repo stars](https://img.shields.io/github/stars/halva-suite/halva) ![GitHub last commit](https://img.shields.io/github/last-commit/halva-suite/halva)](https://github.com/halva-suite/halva) - A toolchain for improving the experience of
  developing on Substrate.
- [`offchain::ipfs`](https://rs-ipfs.github.io/offchain-ipfs-manual/) - Substrate infused with
  [IPFS](https://ipfs.io/).
- [Gantree Library ![GitHub Repo stars](https://img.shields.io/github/stars/gantree-io/gantree-lib-nodejs) ![GitHub last commit](https://img.shields.io/github/last-commit/gantree-io/gantree-lib-nodejs)](https://github.com/gantree-io/gantree-lib-nodejs) - A suite of technologies for
  managing Substrate-powered parachain networks via rapid spin-up & tear-down.
- [Redspot ![GitHub Repo stars](https://img.shields.io/github/stars/patractlabs/redspot) ![GitHub last commit](https://img.shields.io/github/last-commit/patractlabs/redspot)](https://github.com/patractlabs/redspot) - A
  [Truffle](https://www.trufflesuite.com/truffle)-like toolkit for smart contracts for the FRAME
  Contracts pallet.
- [Proxy Hot Wallet Demo ![GitHub Repo stars](https://img.shields.io/github/stars/emostov/proxy-hot-wallet) ![GitHub last commit](https://img.shields.io/github/last-commit/emostov/proxy-hot-wallet)](https://github.com/emostov/proxy-hot-wallet) - A demonstration of a
  secure, convenient, and flexible hot wallet architecture built on Substrate primitives.
- [Substrate Faucet Bot ![GitHub Repo stars](https://img.shields.io/github/stars/starkleytech/substrate-faucet) ![GitHub last commit](https://img.shields.io/github/last-commit/starkleytech/substrate-faucet)](https://github.com/starkleytech/substrate-faucet) - Python-based faucet for
  development purposes.
- [Hydra ![GitHub Repo stars](https://img.shields.io/github/stars/Joystream/hydra) ![GitHub last commit](https://img.shields.io/github/last-commit/Joystream/hydra)](https://github.com/Joystream/hydra) - A GraphQL framework for Substrate nodes with a
  [hosted playground](https://indexer-kusama.joystream.app/graphql). Check out the great
  [docs ![GitHub Repo stars](https://img.shields.io/github/stars/Joystream/hydra) ![GitHub last commit](https://img.shields.io/github/last-commit/Joystream/hydra)](https://github.com/Joystream/hydra/tree/master/docs).
- [Substrate Graph ![GitHub Repo stars](https://img.shields.io/github/stars/playzero/substrate-graph) ![GitHub last commit](https://img.shields.io/github/last-commit/playzero/substrate-graph)](https://github.com/playzero/substrate-graph) - GraphQL indexer for
  Substrate-based chains.
- [SubQuery](https://subquery.network) - A GraphQL indexer and query service that allows users to
   easily create indexed data sources and host them online for free.
- [Megaclite ![GitHub Repo stars](https://img.shields.io/github/stars/patractlabs/megaclite) ![GitHub last commit](https://img.shields.io/github/last-commit/patractlabs/megaclite)](https://github.com/patractlabs/megaclite) - Zero-knowledge tools for the Polkadot
  ecosystem.
- [Europa ![GitHub Repo stars](https://img.shields.io/github/stars/patractlabs/europa) ![GitHub last commit](https://img.shields.io/github/last-commit/patractlabs/europa)](https://github.com/patractlabs/europa) - A sandbox for the Substrate runtime execution
  environment.
- [Jupiter ![GitHub Repo stars](https://img.shields.io/github/stars/patractlabs/jupiter) ![GitHub last commit](https://img.shields.io/github/last-commit/patractlabs/jupiter)](https://github.com/patractlabs/jupiter) - Testnet for smart contracts written for the
  FRAME Contracts pallet.
- [Staking Rewards Collector ![GitHub Repo stars](https://img.shields.io/github/stars/w3f/staking-rewards-collector) ![GitHub last commit](https://img.shields.io/github/last-commit/w3f/staking-rewards-collector)](https://github.com/w3f/staking-rewards-collector) - A script to parse
  and output staking rewards for a given Kusama or Polkadot address and cross-reference them
  with daily price data.
- [`polkadot-launch` ![GitHub Repo stars](https://img.shields.io/github/stars/shawntabrizi/polkadot-launch) ![GitHub last commit](https://img.shields.io/github/last-commit/shawntabrizi/polkadot-launch)](https://github.com/shawntabrizi/polkadot-launch) - Simple CLI tool to launch a
  local Polkadot test network.
- [`substrate-js-utils` ![GitHub Repo stars](https://img.shields.io/github/stars/shawntabrizi/substrate-js-utilities) ![GitHub last commit](https://img.shields.io/github/last-commit/shawntabrizi/substrate-js-utilities)](https://github.com/shawntabrizi/substrate-js-utilities) - A set of useful
  JavaScript utilities for Substrate that uses the Polkadot{JS} API. Also
  [deployed as a website](https://www.shawntabrizi.com/substrate-js-utilities/).
- [`substrate-graph-benchmarks` ![GitHub Repo stars](https://img.shields.io/github/stars/shawntabrizi/substrate-graph-benchmarks) ![GitHub last commit](https://img.shields.io/github/last-commit/shawntabrizi/substrate-graph-benchmarks)](https://github.com/shawntabrizi/substrate-graph-benchmarks) - Graph
  the benchmark output of FRAME pallets.
- [`substrate-balance-calculator` ![GitHub Repo stars](https://img.shields.io/github/stars/shawntabrizi/substrate-balance-calculator) ![GitHub last commit](https://img.shields.io/github/last-commit/shawntabrizi/substrate-balance-calculator)](https://github.com/shawntabrizi/substrate-balance-calculator) - Breakdown
  the balances of your Substrate account.
- [`substrate-balance-graph` ![GitHub Repo stars](https://img.shields.io/github/stars/shawntabrizi/substrate-balance-graph) ![GitHub last commit](https://img.shields.io/github/last-commit/shawntabrizi/substrate-balance-graph)](https://github.com/shawntabrizi/substrate-balance-graph) - Create a
  graph of the token balance over time of a Substrate address.
- [`polkadot-js-bundle` ![GitHub Repo stars](https://img.shields.io/github/stars/shawntabrizi/polkadot-js-bundle) ![GitHub last commit](https://img.shields.io/github/last-commit/shawntabrizi/polkadot-js-bundle)](https://github.com/shawntabrizi/polkadot-js-bundle) - A standalone JS
  bundle that contains Polkadot{JS} libraries.
- [`substrate-society` ![GitHub Repo stars](https://img.shields.io/github/stars/shawntabrizi/substrate-society) ![GitHub last commit](https://img.shields.io/github/last-commit/shawntabrizi/substrate-society)](https://github.com/shawntabrizi/substrate-society) - A basic front-end for
  the FRAME Society pallet.
- [Aleph.im](https://aleph.im) - Scalable, decentralized database, file storage, and computation
  services for Substrate chains and more.
- [`subsee` ![GitHub Repo stars](https://img.shields.io/github/stars/ascjones/subsee) ![GitHub last commit](https://img.shields.io/github/last-commit/ascjones/subsee)](https://github.com/ascjones/subsee) - CLI to inspect metadata of a substrate node as JSON.

### Substrate Mobile Engineering Tools / Libraries

- [React-Native-Substrate-Sign ![GitHub Repo stars](https://img.shields.io/github/stars/paritytech/react-native-substrate-sign) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/react-native-substrate-sign)](https://github.com/paritytech/react-native-substrate-sign) -
Rust library for React Native
- [Polkadot-Dart](Pocket4D/Polkadot-Dart) - Dart Substrate API
- [PolkaWallet SDK ![GitHub Repo stars](https://img.shields.io/github/stars/polkawallet-io/sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/polkawallet-io/sdk)](https://github.com/polkawallet-io/sdk)- Flutter SDK for Substrate-based App
- [Fearless Utils iOS ![GitHub Repo stars](https://img.shields.io/github/stars/soramitsu/fearless-utils-iOS) ![GitHub last commit](https://img.shields.io/github/last-commit/soramitsu/fearless-utils-iOS)](https://github.com/soramitsu/fearless-utils-iOS) - iOS Substrate tools
- [Fearless Utils Android ![GitHub Repo stars](https://img.shields.io/github/stars/soramitsu/fearless-utils-Android) ![GitHub last commit](https://img.shields.io/github/last-commit/soramitsu/fearless-utils-Android)](https://github.com/soramitsu/fearless-utils-Android) - Android Substrate tools

## Alternative Implementations

- [Gossamer ![GitHub Repo stars](https://img.shields.io/github/stars/ChainSafe/gossamer) ![GitHub last commit](https://img.shields.io/github/last-commit/ChainSafe/gossamer)](https://github.com/ChainSafe/gossamer) - A Polkadot client implemented in Go; from
  [ChainSafe](https://chainsafe.io/).
- [Kagome](https://kagome.readthedocs.io/en/latest/) - A C++17 implementation of the Polkadot client;
  from [Soramitsu](http://www.soramitsu.co.jp/).
- [LimeChain AssemblyScript Runtime ![GitHub Repo stars](https://img.shields.io/github/stars/LimeChain/as-substrate-runtime) ![GitHub last commit](https://img.shields.io/github/last-commit/LimeChain/as-substrate-runtime)](https://github.com/LimeChain/as-substrate-runtime) - An
  account-based Substrate proof-of-concept runtime written in AssemblyScript; from
  [LimeChain](https://limechain.tech/).

## SCALE Codec

- [Codec Definition](https://substrate.dev/docs/en/knowledgebase/advanced/codec) - Official
  codec documentation.

### SCALE Codec - Implementations

- [Parity SCALE Codec ![GitHub Repo stars](https://img.shields.io/github/stars/paritytech/parity-scale-codec) ![GitHub last commit](https://img.shields.io/github/last-commit/paritytech/parity-scale-codec)](https://github.com/paritytech/parity-scale-codec) - Reference implementation
  written in Rust.
- [AssemblyScript ![GitHub Repo stars](https://img.shields.io/github/stars/LimeChain/as-scale-codec) ![GitHub last commit](https://img.shields.io/github/last-commit/LimeChain/as-scale-codec)](https://github.com/LimeChain/as-scale-codec) - Maintained by LimeChain.
- [TypeScript ![GitHub Repo stars](https://img.shields.io/github/stars/polkadot-js/api) ![GitHub last commit](https://img.shields.io/github/last-commit/polkadot-js/api)](https://github.com/polkadot-js/api/tree/master/packages/types) - Maintained by
  Polkadot-JS.
- [Go ![GitHub Repo stars](https://img.shields.io/github/stars/itering/scale.go) ![GitHub last commit](https://img.shields.io/github/last-commit/itering/scale.go)](https://github.com/itering/scale.go) - Maintained by [Itering](https://www.itering.com/).
- [C++ ![GitHub Repo stars](https://img.shields.io/github/stars/soramitsu/kagome) ![GitHub last commit](https://img.shields.io/github/last-commit/soramitsu/kagome)](https://github.com/soramitsu/kagome/tree/master/core/scale) - Maintained by Soramitsu.
- [Haskell ![GitHub Repo stars](https://img.shields.io/github/stars/airalab/hs-web3) ![GitHub last commit](https://img.shields.io/github/last-commit/airalab/hs-web3)](https://github.com/airalab/hs-web3/tree/master/src/Codec) - Maintained by
  [Robonomics Network](https://robonomics.network/).
- [Java ![GitHub Repo stars](https://img.shields.io/github/stars/emeraldpay/polkaj) ![GitHub last commit](https://img.shields.io/github/last-commit/emeraldpay/polkaj)](https://github.com/emeraldpay/polkaj/tree/master/polkaj-scale) - Maintained by
  [Emerald](https://emerald.cash/).
- [Ruby ![GitHub Repo stars](https://img.shields.io/github/stars/itering/scale.rb) ![GitHub last commit](https://img.shields.io/github/last-commit/itering/scale.rb)](https://github.com/itering/scale.rb) - Maintained by Itering.
- [Python ![GitHub Repo stars](https://img.shields.io/github/stars/polkascan/py-scale-codec) ![GitHub last commit](https://img.shields.io/github/last-commit/polkascan/py-scale-codec)](https://github.com/polkascan/py-scale-codec) - Maintained by Polkascan Foundation.
