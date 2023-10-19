<!--lint disable double-link-->
# Awesome Cosmos [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A community curated list of awesome projects related to the Cosmos ecosystem

The Cosmos SDK is a modular framework for building blockchain applications in Go.
Gaia, the implementation of the Cosmos Hub, is built with the Cosmos SDK.

**Contributing:**
Please read the [Contributing guide](./CONTRIBUTING.md). Thank you to all our [contributors ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/awesome)](https://github.com/cosmos/awesome/graphs/contributors).

**Disclaimer: This community-maintained repo does not reflect the views of any official entity.**

## Contents

* [Core Components](#core-components)
* [Documentation](#documentation)
* [Client Libraries](#client-libraries)
    * [Go](#go)
    * [JavaScript](#javascript)
    * [Python](#python)
    * [Rust](#rust)
* [Block Explorers](#block-explorers)
    * [Visual Block Explorers](#visual-block-explorers)
    * [Terminal Block Explorers](#terminal-block-explorers)
* [Chain Registry](#chain-registry)
* [Validators](#validators)
* [Cosmos SDK Modules](#cosmos-sdk-modules)
* [Monitoring](#monitoring)
* [Indexers](#indexers)
* [Frameworks](#frameworks)
* [Virtual Machines](#virtual-machines)
* [IBC](#ibc)
* [Testing](#testing)
* [Tools](#tools)
    * [CLI](#cli)
    * [GUI](#gui)
    * [Bots](#bots)
* [Node Operations](#node-operations)
    * [Utilities](#utilities)
* [Ecosystem](#ecosystem)
* [Wallets](#wallets)
* [Blogs](#blogs)
    * [Articles](#articles)
* [Related](#related)

## Core Components

* [Cosmos Hub ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/gaia) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/gaia)](https://github.com/cosmos/gaia)
<!-- -->
* [Cosmos SDK ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/cosmos-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/cosmos-sdk)](https://github.com/cosmos/cosmos-sdk/)
* [IBC Go ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/ibc-go) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/ibc-go)](https://github.com/cosmos/ibc-go)
* [CometBFT ![GitHub Repo Stars](https://img.shields.io/github/stars/cometbft/cometbft) ![GitHub last commit](https://img.shields.io/github/last-commit/cometbft/cometbft)](https://github.com/cometbft/cometbft)
* [CosmWasm ![GitHub Repo Stars](https://img.shields.io/github/stars/CosmWasm/cosmwasm) ![GitHub last commit](https://img.shields.io/github/last-commit/CosmWasm/cosmwasm)](https://github.com/CosmWasm/cosmwasm)
* [CosmJS ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/cosmjs) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/cosmjs)](https://github.com/cosmos/cosmjs)
<!-- -->
* [Protobuf](https://buf.build/cosmos)
* [IAVL ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/iavl) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/iavl)](https://github.com/cosmos/iavl)
* [ICS23 ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/ics23) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/ics23)](https://github.com/cosmos/ics23)

## Documentation

* [Cosmos Developer Portal](https://tutorials.cosmos.network)
* [Cosmos SDK](https://docs.cosmos.network/)
* [IBC](https://ibc.cosmos.com/)
* [CometBFT](https://docs.cometbft.com/)
* [Cosmos Hub](https://hub.cosmos.network/)
* [CosmWasm](https://docs.cosmwasm.com/docs/1.0/)
* [Cosmology](https://cosmology.tech/learn)

## Client Libraries

### Go

* [Ignite CLI ![GitHub Repo Stars](https://img.shields.io/github/stars/ignite/cli) ![GitHub last commit](https://img.shields.io/github/last-commit/ignite/cli)](https://github.com/ignite/cli) - All-in-one platform to build, launch, and maintain any crypto application on a sovereign and secured blockchain. Quickly bootstraps a new Cosmos SDK blockchain with UI and support to create new and work conveniently with existing Cosmos SDK modules.

### JavaScript

* [cosmos/cosmjs ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/cosmjs) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/cosmjs)](https://github.com/cosmos/cosmjs) - The Cosmos JavaScript library.
* [telescope ![GitHub Repo Stars](https://img.shields.io/github/stars/osmosis-labs/telescope) ![GitHub last commit](https://img.shields.io/github/last-commit/osmosis-labs/telescope)](https://github.com/osmosis-labs/telescope) - Typescript library generator built on top of CosmJS.
* [chainapsis/cosmosjs ![GitHub Repo Stars](https://img.shields.io/github/stars/chainapsis/cosmosjs) ![GitHub last commit](https://img.shields.io/github/last-commit/chainapsis/cosmosjs)](https://github.com/chainapsis/cosmosjs) - Chainapsis Signing & API Library.
* [cosmos-client/cosmos-client-ts ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos-client/cosmos-client-ts) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos-client/cosmos-client-ts)](https://github.com/cosmos-client/cosmos-client-ts) - JavaScript / TypeScript client for Cosmos SDK blockchains.
* [cosmos/sig ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/sig) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/sig)](https://github.com/cosmos/sig) - Cosmos Signing Library.
* [cosmology-tech/chain-registry ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmology-tech/chain-registry) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmology-tech/chain-registry)](https://github.com/cosmology-tech/chain-registry) - A npm package for the official Cosmos Chain Registry.
* [strangelove-ventures/graz ![GitHub Repo Stars](https://img.shields.io/github/stars/strangelove-ventures/graz) ![GitHub last commit](https://img.shields.io/github/last-commit/strangelove-ventures/graz)](https://github.com/strangelove-ventures/graz) - Collection of React hooks to interact with wallets, signers, signing clients, etc.
* [cosmology-tech/create-cosmos-app ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmology-tech/create-cosmos-app) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmology-tech/create-cosmos-app)](https://github.com/cosmology-tech/create-cosmos-app) - A npm package to bootstrap a Cosmos Web UI.
* [cosmology-tech/cosmos-kit ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmology-tech/cosmos-kit) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmology-tech/cosmos-kit)](https://github.com/cosmology-tech/cosmos-kit) - A wallet connector for the Cosmos.

### Python

* [cosmpy ![GitHub Repo Stars](https://img.shields.io/github/stars/fetchai/cosmpy) ![GitHub last commit](https://img.shields.io/github/last-commit/fetchai/cosmpy)](https://github.com/fetchai/cosmpy) - A Python client library for interacting with blockchains based on the Cosmos SDK.
* [pyCosmicWrap ![GitHub Repo Stars](https://img.shields.io/github/stars/ChihuahuaChain/pyCosmicWrap) ![GitHub last commit](https://img.shields.io/github/last-commit/ChihuahuaChain/pyCosmicWrap)](https://github.com/ChihuahuaChain/pyCosmicWrap/) - A python3 wrapper around Cosmos API/RPC.
* [mospy ![GitHub Repo Stars](https://img.shields.io/github/stars/ctrl-Felix/mospy) ![GitHub last commit](https://img.shields.io/github/last-commit/ctrl-Felix/mospy)](https://github.com/ctrl-Felix/mospy) - A Python library to create and sign transactions for Cosmos SDK based coins.
* [cosmospy-protobuf ![GitHub Repo Stars](https://img.shields.io/github/stars/ctrl-Felix/cosmospy-protobuf) ![GitHub last commit](https://img.shields.io/github/last-commit/ctrl-Felix/cosmospy-protobuf)](https://github.com/ctrl-Felix/cosmospy-protobuf) - A Python library containing all compiled protobuf files (works very good for grpc).
* [fx-py-sdk ![GitHub Repo Stars](https://img.shields.io/github/stars/functionx/fx-py-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/functionx/fx-py-sdk)](https://github.com/functionx/fx-py-sdk) - The Cosmos Python client library.

### Rust

* [CosmWasm/cosmwasm ![GitHub Repo Stars](https://img.shields.io/github/stars/CosmWasm/cosmwasm) ![GitHub last commit](https://img.shields.io/github/last-commit/CosmWasm/cosmwasm)](https://github.com/CosmWasm/cosmwasm) - WebAssembly Smart Contracts for the Cosmos SDK.
* [iqlusioninc/stdtx ![GitHub Repo Stars](https://img.shields.io/github/stars/iqlusioninc/crates) ![GitHub last commit](https://img.shields.io/github/last-commit/iqlusioninc/crates)](https://github.com/iqlusioninc/crates) - A collection of open source Rust crates from iqlusion.
* [peggyjv/ocular ![GitHub Repo Stars](https://img.shields.io/github/stars/peggyjv/ocular) ![GitHub last commit](https://img.shields.io/github/last-commit/peggyjv/ocular)](https://github.com/peggyjv/ocular) - A client library for Cosmos SDK chains focusing on pleasant UX.

## Block Explorers

* [ATOMScan](https://atomscan.com)
* [Big Dipper](https://bigdipper.live) - [Source ![GitHub Repo Stars](https://img.shields.io/github/stars/forbole/big-dipper-2.0-cosmos) ![GitHub last commit](https://img.shields.io/github/last-commit/forbole/big-dipper-2.0-cosmos)](https://github.com/forbole/big-dipper-2.0-cosmos)
* [IOBScan](https://ibc.iobscan.io/)
* [Mintscan](https://www.mintscan.io)
    * [Mintscan for Cosmos Hub Testnet](https://cosmoshub-testnet.mintscan.io/cosmoshub-testnet)
* [NG Explorers](https://explorers.guru/)
* [Ping.pub](https://ping.pub) - [Source ![GitHub Repo Stars](https://img.shields.io/github/stars/ping-pub/explorer) ![GitHub last commit](https://img.shields.io/github/last-commit/ping-pub/explorer)](https://github.com/ping-pub/explorer)
* [Stake ID](https://stake.id)

### Visual Block Explorers

View Inter-Blockchain Communication (IBC) transfer activity. The map traces IBC transactions between different blockchains (called zones in the Cosmos Hub) to display accurate aggregate information about the pulse of the entire Cosmos ecosystem.

* [Map of Zones](https://mapofzones.com/?period=24) - [Source](https://github.com/mapofzones)
* [Mintscan](https://hub.mintscan.io) - Interchain Explorer by Cosmostation.

### Terminal Block Explorers

Explore Cosmos SDK blockchains via a terminal.

* [gex ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/gex) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/gex)](https://github.com/cosmos/gex) - GEX In-Terminal Explorer.
* [cshtop ![GitHub Repo Stars](https://img.shields.io/github/stars/gsk967/cshtop) ![GitHub last commit](https://img.shields.io/github/last-commit/gsk967/cshtop)](https://github.com/gsk967/cshtop) - Cosmos htop , Blocks visualizer on terminal.
* [pvtop ![GitHub Repo Stars](https://img.shields.io/github/stars/blockpane/pvtop) ![GitHub last commit](https://img.shields.io/github/last-commit/blockpane/pvtop)](https://github.com/blockpane/pvtop) - Consensus visualizer on terminal.

## Chain Registry

A registry containing standardized metadata from most Cosmos chains.

* [cosmos/chain-registry ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/chain-registry) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/chain-registry)](https://github.com/cosmos/chain-registry/)
* [Cosmos Directory](https://cosmos.directory) - [Source ![GitHub Repo Stars](https://img.shields.io/github/stars/eco-stake/cosmos-directory) ![GitHub last commit](https://img.shields.io/github/last-commit/eco-stake/cosmos-directory)](https://github.com/eco-stake/cosmos-directory)
* [cosmology-tech/chain-registry ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmology-tech/chain-registry) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmology-tech/chain-registry)](https://github.com/cosmology-tech/chain-registry) - A npm package for the official Cosmos Chain Registry.

## Validators

Popular block explorers provide a list of active validators. The easiest entry point to view validator profiles is from a block explorer:

* [List on Mintscan](https://www.mintscan.io/cosmos/validators)
* [List on ATOMScan](https://atomscan.com/validators)
* [List on BigDipper](https://cosmos.bigdipper.live/validators)
* [List on Kujira POD](https://pod.kujira.app/cosmoshub-4)

DYOR when choosing a validator. Consider delegating your tokens to validators outside of the top 20 to increase the decentralization of the network.
This is also a good practice to avoid 0% commission validators and exchange validators.

## Cosmos SDK Modules

The best place to find an accurate list of the Cosmos SDK modules is the project repository:

* For a list of production-grade modules, see the [List of Modules](https://docs.cosmos.network/main/modules/).
* For a list of well-known third-party modules, see the [Ecosystem section](https://docs.cosmos.network/main/ecosystem) of the Cosmos SDK documentation. 

Some modules are important but may still lack official documentation, like the [genutil ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/cosmos-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/cosmos-sdk)](https://github.com/cosmos/cosmos-sdk/tree/main/x/genutil) module that is essential to launch a chain. Please consider contributing documentation to the Cosmos SDK to help fill these gaps.

To share a module that you want the community to know about and use, add it here. You can also create a pull request (PR) to add the module to the official project.

## Monitoring

* [PANIC Monitoring and Alerting For Blockchains ![GitHub Repo Stars](https://img.shields.io/github/stars/SimplyVC/panic) ![GitHub last commit](https://img.shields.io/github/last-commit/SimplyVC/panic)](https://github.com/SimplyVC/panic) - An open source monitoring and alerting solution for Cosmos SDK, Substrate, and Chainlink-based nodes.
* [Prometheus Exporter ![GitHub Repo Stars](https://img.shields.io/github/stars/node-a-team/Cosmos-IE) ![GitHub last commit](https://img.shields.io/github/last-commit/node-a-team/Cosmos-IE)](https://github.com/node-a-team/Cosmos-IE) - An integrated Prometheus exporter for the Cosmos SDK.
* [Cosmos Chains Dashboard ![GitHub Repo Stars](https://img.shields.io/github/stars/zhangyelong/cosmos-dashboard) ![GitHub last commit](https://img.shields.io/github/last-commit/zhangyelong/cosmos-dashboard)](https://github.com/zhangyelong/cosmos-dashboard) - A Grafana dashboard to monitor Cosmos SDK and Tendermint-based blockchain nodes.
* [cosmos-exporter ![GitHub Repo Stars](https://img.shields.io/github/stars/solarlabsteam/cosmos-exporter) ![GitHub last commit](https://img.shields.io/github/last-commit/solarlabsteam/cosmos-exporter)](https://github.com/solarlabsteam/cosmos-exporter) - A Prometheus scraper that fetches the data from a full node of a Cosmos-based blockchain via gRPC.
* [Chain Pulse ![GitHub Repo Stars](https://img.shields.io/github/stars/informalsystems/chainpulse) ![GitHub last commit](https://img.shields.io/github/last-commit/informalsystems/chainpulse)](https://github.com/informalsystems/chainpulse) - Relayed IBC packets monitor with Prometheus exporter.
* [missed-blocks-checker ![GitHub Repo Stars](https://img.shields.io/github/stars/solarlabsteam/missed-blocks-checker) ![GitHub last commit](https://img.shields.io/github/last-commit/solarlabsteam/missed-blocks-checker)](https://github.com/solarlabsteam/missed-blocks-checker) - Monitor missed blocks for Cosmos-chain validators with support for notifications to Telegram and Slack.
* [Nodes Checker](https://t.me/NodesGuru_bot) - Check your nodes status online, receive instant notification if something is wrong with your validator node.
* [Cosmon ![GitHub Repo Stars](https://img.shields.io/github/stars/iqlusioninc/cosmon) ![GitHub last commit](https://img.shields.io/github/last-commit/iqlusioninc/cosmon)](https://github.com/iqlusioninc/cosmon) - Observability tool for Cosmos and other Tendermint applications.
* [Tenderduty ![GitHub Repo Stars](https://img.shields.io/github/stars/blockpane/tenderduty) ![GitHub last commit](https://img.shields.io/github/last-commit/blockpane/tenderduty)](https://github.com/blockpane/tenderduty) - Comprehensive monitoring tool for Tendermint chains. Its primary function is to alert a validator if they are missing blocks, and more.
* [UpgradesWatchdog ![GitHub Repo Stars](https://img.shields.io/github/stars/ChihuahuaChain/UpgradesWatchdog) ![GitHub last commit](https://img.shields.io/github/last-commit/ChihuahuaChain/UpgradesWatchdog)](https://github.com/ChihuahuaChain/UpgradesWatchdog) - SoftwareUpgradeProposal & GitHub Releases telegram monitoring tool.
* [cosmos-node-exporter ![GitHub Repo Stars](https://img.shields.io/github/stars/QuokkaStake/cosmos-node-exporter.git) ![GitHub last commit](https://img.shields.io/github/last-commit/QuokkaStake/cosmos-node-exporter.git)](https://github.com/QuokkaStake/cosmos-node-exporter.git) - A Prometheus exporter to scrape data on your node sync status, Cosmovisor upgrades and GitHub version mismatches, useful for node operators and validators.
* [cosmos-wallets-exporter ![GitHub Repo Stars](https://img.shields.io/github/stars/QuokkaStake/cosmos-wallets-exporter.git) ![GitHub last commit](https://img.shields.io/github/last-commit/QuokkaStake/cosmos-wallets-exporter.git)](https://github.com/QuokkaStake/cosmos-wallets-exporter.git) - A Prometheus exporter to scrape data on wallets balance, useful to get notified if your wallet balance is too low.
* [cosmos-validators-exporter ![GitHub Repo Stars](https://img.shields.io/github/stars/QuokkaStake/cosmos-validators-exporter.git) ![GitHub last commit](https://img.shields.io/github/last-commit/QuokkaStake/cosmos-validators-exporter.git)](https://github.com/QuokkaStake/cosmos-validators-exporter.git) - A Prometheus exporter to scrape data about a validator (missed blocks, delegators count, total staked amount, rankings, etc.)


## Indexers

* [Cosmscan ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmscan/cosmscan-go) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmscan/cosmscan-go)](https://github.com/cosmscan/cosmscan-go) - An indexer engine for Cosmos chains.
* [interchain-indexer ![GitHub Repo Stars](https://img.shields.io/github/stars/Reecepbcups/interchain-indexer) ![GitHub last commit](https://img.shields.io/github/last-commit/Reecepbcups/interchain-indexer)](https://github.com/Reecepbcups/interchain-indexer) - A cosmos blockchain indexer in Python.
* [Cosmos Indexer ![GitHub Repo Stars](https://img.shields.io/github/stars/DefiantLabs/cosmos-indexer) ![GitHub last commit](https://img.shields.io/github/last-commit/DefiantLabs/cosmos-indexer)](https://github.com/DefiantLabs/cosmos-indexer) - A generalized DB schema indexer with correlation and direct database indexing in Go.

## Frameworks

* [Cosmos SDK ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/cosmos-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/cosmos-sdk)](https://github.com/cosmos/cosmos-sdk/) - A Framework for Building High Value Public Blockchains in Go.
* [Orga ![GitHub Repo Stars](https://img.shields.io/github/stars/nomic-io/orga) ![GitHub last commit](https://img.shields.io/github/last-commit/nomic-io/orga)](https://github.com/nomic-io/orga) - ABCI framework for state machine transitions in Rust.
* [CosmosSwift](https://github.com/CosmosSwift) - Build blockchain applications in Swift on top of the Tendermint consensus.
* [ABCI-RS ![GitHub Repo Stars](https://img.shields.io/github/stars/devashishdxt/abci-rs) ![GitHub last commit](https://img.shields.io/github/last-commit/devashishdxt/abci-rs)](https://github.com/devashishdxt/abci-rs) - Rust crate for creating ABCI applications.
* [CosmRS ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/cosmos-rust) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/cosmos-rust)](https://github.com/cosmos/cosmos-rust/tree/main/cosmrs) - Framework for building Cosmos blockchain applications in Rust.

## Virtual Machines

Modules or frameworks for virtual machines that run in the Cosmos SDK

* [Agoric SDK ![GitHub Repo Stars](https://img.shields.io/github/stars/Agoric/agoric-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/Agoric/agoric-sdk)](https://github.com/Agoric/agoric-sdk) - Agoric JavaScript Smart Contract Platform.
* [CosmWasm ![GitHub Repo Stars](https://img.shields.io/github/stars/CosmWasm/cosmwasm) ![GitHub last commit](https://img.shields.io/github/last-commit/CosmWasm/cosmwasm)](https://github.com/CosmWasm/cosmwasm) - WASM Virtual Machine & Rust Smart Contracts.
* [Ethermint ![GitHub Repo Stars](https://img.shields.io/github/stars/evmos/ethermint) ![GitHub last commit](https://img.shields.io/github/last-commit/evmos/ethermint)](https://github.com/evmos/ethermint) - Ethereum Virtual Machine.

## IBC

* [IBCprotocol.dev](https://ibcprotocol.dev/) - IBC Protocol website.
* [Interchain Standards ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/ibc) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/ibc)](https://github.com/cosmos/ibc/) - Interchain Standards (ICS) for the Cosmos network & interchain ecosystem.
* [cosmos/ibc-go ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/ibc-go) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/ibc-go)](https://github.com/cosmos/ibc-go) - Inter-Blockchain Communication protocol (IBC) implementation in Go.
* [cosmos/ibc-rs ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/ibc-rs) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/ibc-rs)](https://github.com/cosmos/ibc-rs) - Rust implementation of the Inter-Blockchain Communication (IBC) protocol.
* [interchaintest ![GitHub Repo Stars](https://img.shields.io/github/stars/strangelove-ventures/interchaintest) ![GitHub last commit](https://img.shields.io/github/last-commit/strangelove-ventures/interchaintest)](https://github.com/strangelove-ventures/interchaintest) - E2E testing framework for IBC Chains.
* [cosmos/relayer ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/relayer) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/relayer)](https://github.com/cosmos/relayer) - IBC Relayer in Go.
* [informalsystems/hermes ![GitHub Repo Stars](https://img.shields.io/github/stars/informalsystems/hermes) ![GitHub last commit](https://img.shields.io/github/last-commit/informalsystems/hermes)](https://github.com/informalsystems/hermes) - IBC Relayer in Rust.
* [confio/ts-relayer ![GitHub Repo Stars](https://img.shields.io/github/stars/confio/ts-relayer) ![GitHub last commit](https://img.shields.io/github/last-commit/confio/ts-relayer)](https://github.com/confio/ts-relayer) - IBC Relayer in TypeScript.
* [local-interchain ![GitHub Repo Stars](https://img.shields.io/github/stars/Reecepbcups/local-interchain) ![GitHub last commit](https://img.shields.io/github/last-commit/Reecepbcups/local-interchain)](https://github.com/Reecepbcups/local-interchain) - Quickly spin up a local IBC development environment on any operating system.

## Testing

* [interchaintest ![GitHub Repo Stars](https://img.shields.io/github/stars/strangelove-ventures/interchaintest) ![GitHub last commit](https://img.shields.io/github/last-commit/strangelove-ventures/interchaintest)](https://github.com/strangelove-ventures/interchaintest) - E2E testing framework for IBC Chains.
* [atomkraft ![GitHub Repo Stars](https://img.shields.io/github/stars/informalsystems/atomkraft-cosmos) ![GitHub last commit](https://img.shields.io/github/last-commit/informalsystems/atomkraft-cosmos)](https://github.com/informalsystems/atomkraft-cosmos) - E2E testing framework of Cosmos SDK blockchains.
* [python-iavl ![GitHub Repo Stars](https://img.shields.io/github/stars/crypto-com/python-iavl) ![GitHub last commit](https://img.shields.io/github/last-commit/crypto-com/python-iavl)](https://github.com/crypto-com/python-iavl) - IAVL inspection tool implemented in Python.
* [cosmos-sdk-codeql ![GitHub Repo Stars](https://img.shields.io/github/stars/crypto-com/cosmos-sdk-codeql) ![GitHub last commit](https://img.shields.io/github/last-commit/crypto-com/cosmos-sdk-codeql)](https://github.com/crypto-com/cosmos-sdk-codeql) - CodeQL queries for common Cosmos SDK bugs.
* [tm-load-test ![GitHub Repo Stars](https://img.shields.io/github/stars/informalsystems/tm-load-test) ![GitHub last commit](https://img.shields.io/github/last-commit/informalsystems/tm-load-test)](https://github.com/informalsystems/tm-load-test) - CometBFT load test application.
* [cosmosloadtester ![GitHub Repo Stars](https://img.shields.io/github/stars/orijtech/cosmosloadtester) ![GitHub last commit](https://img.shields.io/github/last-commit/orijtech/cosmosloadtester)](https://github.com/orijtech/cosmosloadtester) - Load tester for Cosmos SDK blockchains.

## Tools

### CLI

* [iqlusioninc/tmkms ![GitHub Repo Stars](https://img.shields.io/github/stars/iqlusioninc/tmkms) ![GitHub last commit](https://img.shields.io/github/last-commit/iqlusioninc/tmkms)](https://github.com/iqlusioninc/tmkms) - Key Management System for Tendermint validators.
* [cosmosvisor ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/cosmos-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/cosmos-sdk)](https://github.com/cosmos/cosmos-sdk/tree/main/cosmovisor#readme) - Automates Cosmos SDK application binary upgrades.
* [cosmosvanity ![GitHub Repo Stars](https://img.shields.io/github/stars/hukkinj1/cosmosvanity) ![GitHub last commit](https://img.shields.io/github/last-commit/hukkinj1/cosmosvanity)](https://github.com/hukkinj1/cosmosvanity) - CLI tool for generating Cosmos vanity addresses.
* [findaccount ![GitHub Repo Stars](https://img.shields.io/github/stars/blockpane/findaccount) ![GitHub last commit](https://img.shields.io/github/last-commit/blockpane/findaccount)](https://github.com/blockpane/findaccount) - Helps identify if an account exists on multiple Cosmos chains with the same address.
* [lens ![GitHub Repo Stars](https://img.shields.io/github/stars/strangelove-ventures/lens) ![GitHub last commit](https://img.shields.io/github/last-commit/strangelove-ventures/lens)](https://github.com/strangelove-ventures/lens) - CLI tool to interact with any Cosmos chain supporting the core Cosmos-SDK modules.
* [cosmology ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmology-tech/cosmology) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmology-tech/cosmology)](https://github.com/cosmology-tech/cosmology) - CLI tool for making cryptocurrency trades, joining liquidity pools, and stake rewards on Osmosis.
* [multisig ![GitHub Repo Stars](https://img.shields.io/github/stars/informalsystems/multisig) ![GitHub last commit](https://img.shields.io/github/last-commit/informalsystems/multisig)](https://github.com/informalsystems/multisig) - CLI tool for managing multisig accounts on Cosmos SDK chains.
* [cosmos-genesis-tinkerer ![GitHub Repo Stars](https://img.shields.io/github/stars/hyphacoop/cosmos-genesis-tinkerer) ![GitHub last commit](https://img.shields.io/github/last-commit/hyphacoop/cosmos-genesis-tinkerer)](https://github.com/hyphacoop/cosmos-genesis-tinkerer) - CLI tool for modifying Cosmos genesis files.
* [airdrop-tools ![GitHub Repo Stars](https://img.shields.io/github/stars/Reecepbcups/airdrop-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/Reecepbcups/airdrop-tools)](https://github.com/Reecepbcups/airdrop-tools) - CLI scripts to help distribute a variety of tokens from multiple formats.

### GUI

* [Cosmos Hub Multisig Manager](https://cosmos-multisig-ui-kohl.vercel.app) - Create multisigs and multisig transactions on the Cosmos Hub ([source ![GitHub Repo Stars](https://img.shields.io/github/stars/cosmos/cosmos-multisig-ui) ![GitHub last commit](https://img.shields.io/github/last-commit/cosmos/cosmos-multisig-ui)](https://github.com/cosmos/cosmos-multisig-ui)).
* [REStake](https://restake.app) - Auto-compounder app for Cosmos blockchains using Authz ([source ![GitHub Repo Stars](https://img.shields.io/github/stars/eco-stake/restake) ![GitHub last commit](https://img.shields.io/github/last-commit/eco-stake/restake)](https://github.com/eco-stake/restake)).
* [Yieldmos](https://yieldmos.com) - Staking and LP rewards auto-compounder using Authz.
* [Cosmfaucet ![GitHub Repo Stars](https://img.shields.io/github/stars/scalalang2/cosmfaucet) ![GitHub last commit](https://img.shields.io/github/last-commit/scalalang2/cosmfaucet)](https://github.com/scalalang2/cosmfaucet) - Self-hosted faucet service for Cosmos based blockchain.
* [Cosmos Notifier](https://cosmos-notifier.decrypto.online) - Governance notification tool for Telegram and Discord ([source ![GitHub Repo Stars](https://img.shields.io/github/stars/shifty11/cosmos-notifier) ![GitHub last commit](https://img.shields.io/github/last-commit/shifty11/cosmos-notifier)](https://github.com/shifty11/cosmos-notifier)).
* [IBC Anywhere](https://ibc.reece.sh/) - IBC token transfers including multi-chain hops.

### Bots

* [Cosmos Discord Faucet ![GitHub Repo Stars](https://img.shields.io/github/stars/0x4139/cosmos-discord-faucet) ![GitHub last commit](https://img.shields.io/github/last-commit/0x4139/cosmos-discord-faucet)](https://github.com/0x4139/cosmos-discord-faucet) - A configurable Discord faucet for Cosmos SDK blockchains.
* [Cosmos Discord Bot ![GitHub Repo Stars](https://img.shields.io/github/stars/okp4/discord-bot) ![GitHub last commit](https://img.shields.io/github/last-commit/okp4/discord-bot)](https://github.com/okp4/discord-bot) - A general-purpose Discord bot for Cosmos SDK blockchains.
* [cosmos-proposals-checker ![GitHub Repo Stars](https://img.shields.io/github/stars/QuokkaStake/cosmos-proposals-checker.git) ![GitHub last commit](https://img.shields.io/github/last-commit/QuokkaStake/cosmos-proposals-checker.git)](https://github.com/QuokkaStake/cosmos-proposals-checker.git) - A bot to notify you if your wallets didn't vote on proposal on multiple Cosmos SDK chains.
* [cosmos-transactions-bot ![GitHub Repo Stars](https://img.shields.io/github/stars/QuokkaStake/cosmos-transactions-bot.git) ![GitHub last commit](https://img.shields.io/github/last-commit/QuokkaStake/cosmos-transactions-bot.git)](https://github.com/QuokkaStake/cosmos-transactions-bot.git) - Get notified about transactions matching the filters you want on multiple Cosmos SDK chains.
* [cosmos-balance-bot ![GitHub Repo Stars](https://img.shields.io/github/stars/Reecepbcups/cosmos-balance-bot) ![GitHub last commit](https://img.shields.io/github/last-commit/Reecepbcups/cosmos-balance-bot)](https://github.com/Reecepbcups/cosmos-balance-bot) - Get notified about your wallet balance on multiple Cosmos SDK chains at a set interval.
* [validator-stats-notifications ![GitHub Repo Stars](https://img.shields.io/github/stars/Reecepbcups/validator-stats-notifs) ![GitHub last commit](https://img.shields.io/github/last-commit/Reecepbcups/validator-stats-notifs)](https://github.com/Reecepbcups/validator-stats-notifs) - Discord announcements including ranking, delegations over time, and unique delegators.
* [Secret Stashh NFT Bot ![GitHub Repo Stars](https://img.shields.io/github/stars/Reecepbcups/stashh-bot) ![GitHub last commit](https://img.shields.io/github/last-commit/Reecepbcups/stashh-bot)](https://github.com/Reecepbcups/stashh-bot) - A discord bot to get notified of sales, auctions, and purchases for a Secret Network NFT collection.
* [DAODAO Treasury Bot ![GitHub Repo Stars](https://img.shields.io/github/stars/Reecepbcups/dao-treasury-bot) ![GitHub last commit](https://img.shields.io/github/last-commit/Reecepbcups/dao-treasury-bot)](https://github.com/Reecepbcups/dao-treasury-bot) - A discord bot that keeps up with a DAO's treasury fiat value.
* [Cosmos Price Bot ![GitHub Repo Stars](https://img.shields.io/github/stars/Reecepbcups/cosmos-price-bot) ![GitHub last commit](https://img.shields.io/github/last-commit/Reecepbcups/cosmos-price-bot)](https://github.com/Reecepbcups/cosmos-price-bot) - A discord bot that nicknames to the USD price of any cosmos token via a DEX.

## Node Operations

### Utilities

* [Cosmos Cache ![GitHub Repo Stars](https://img.shields.io/github/stars/Reecepbcups/cosmos-endpoint-cache) ![GitHub last commit](https://img.shields.io/github/last-commit/Reecepbcups/cosmos-endpoint-cache)](https://github.com/Reecepbcups/cosmos-endpoint-cache) - Optimize Cosmos queries by caching responses for predefined sets of time (regex).

## Ecosystem

The most up-to-date list of projects built using Cosmos SDK can be found on the [Cosmos Directory](https://cosmos.directory).

## Wallets

A list of wallets supporting Cosmos chains is <https://cosmos.network/ecosystem/wallets>.

## Blogs

**Disclaimer: This community-maintained repo does not reflect the views of any official entity.**

As the ecosystem grows, so does the content. DYOR and follow the projects you find interesting.

* [What is Cosmos?](https://cosmos.network/intro/)
* [Cosmos Blog](https://blog.cosmos.network/)
* [Interchain Foundation Blog](https://interchain-io.medium.com)

### Articles

* [Cosmos Dev Series: Cosmos Blockchain Upgrade](https://zerofruit.medium.com/cosmos-dev-series-cosmos-sdk-based-blockchain-upgrade-b5e99181554c)
* [Hardening guides](https://cyber.orijtech.com/cosmos/hardening/)
* [How to connect your frontend to Cosmos blockchain](https://dev.to/kikiding/how-to-connect-your-frontend-to-cosmos-blockchain-5fcn)
* [(Not So) Smart Cosmos, examples of common Cosmos app vulnerabilities ![GitHub Repo Stars](https://img.shields.io/github/stars/crytic/building-secure-contracts) ![GitHub last commit](https://img.shields.io/github/last-commit/crytic/building-secure-contracts)](https://github.com/crytic/building-secure-contracts/tree/master/not-so-smart-contracts/cosmos)

## Related

* [Awesome CosmWasm ![GitHub Repo Stars](https://img.shields.io/github/stars/InterWasm/cw-awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/InterWasm/cw-awesome)](https://github.com/InterWasm/cw-awesome)
* [Awesome Crypto.com Chain ![GitHub Repo Stars](https://img.shields.io/github/stars/crypto-org-chain/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/crypto-org-chain/awesome)](https://github.com/crypto-org-chain/awesome)
* [Awesome Evmos ![GitHub Repo Stars](https://img.shields.io/github/stars/evmos/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/evmos/awesome)](https://github.com/evmos/awesome)
* [Awesome IRISnet ![GitHub Repo Stars](https://img.shields.io/github/stars/irisnet/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/irisnet/awesome)](https://github.com/irisnet/awesome)
* [Awesome Osmosis ![GitHub Repo Stars](https://img.shields.io/github/stars/osmosis-labs/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/osmosis-labs/awesome)](https://github.com/osmosis-labs/awesome)
