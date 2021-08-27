# Awesome Stacks [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[![Awesome Stacks ![GitHub Repo stars](https://img.shields.io/github/stars/friedger/awesome-stacks-chain) ![GitHub last commit](https://img.shields.io/github/last-commit/friedger/awesome-stacks-chain)](https://github.com/friedger/awesome-stacks-chain/raw/main/img/awesome-stacks.png 'Awesome Stacks')](https://www.stacks.co)

[Stacks](https://www.stacks.co/what-is-stacks) is a blockchain anchored by Bitcoin that enables apps, smart contracts, and digital assets. Stacks is a layer-1 blockchain that connects to Bitcoin and implements smart contracts and decentralized applications through the [Clarity language](https://clarity-lang.org/). Through the [Proof of Transfer (PoX) consensus mechanism](https://docs.stacks.co/understand-stacks/proof-of-transfer), the state of the Stacks blockchain is anchored against the Bitcoin blockchain, thus providing the security and finality of Bitcoin to Stacks. Stacks brings the programmability of other blockchain technologies to Bitcoin, without the need to modify the core consensus mechanism of Bitcoin itself.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Contents

- [Apps](#apps)
  - [Wallets](#wallets)
  - [Stacks Web Applications](#stacks-web-applications)
- [Clarity Resources](#clarity-resources)
  - [Developer Tools](#developer-tools)
  - [Libraries](#libraries)
  - [Contracts](#contracts)
  - [Non-Fungible Tokens](#non-fungible-tokens)
  - [Fungible Tokens](#fungible-tokens)
  - [Stacking](#stacking)
- [App Development](#app-development)
  - [Frontend Libraries](#frontend-libraries)
  - [CLI](#cli)
  - [Storage](#storage)
- [Learning Resources](#learning-resources)
  - [Documentation](#documentation)
  - [Videos](#videos)
- [Community](#community)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Apps

### Wallets

- [Stacks Wallet for Desktop](https://www.hiro.so/wallet/install-desktop) - Desktop wallet application for managing STX and stacking individually or in pools.
- [Stacks Wallet for Web](https://www.hiro.so/wallet/install-web) - Web wallet for connecting to Stacks web applications.
- [Xverse Wallet](https://www.secretkeylabs.com/) - Mobile wallet application for managing STX and stacking.

### Stacks Web Applications

- [Stacks Explorer](https://explorer.stacks.co/?chain=mainnet) - An application for reviewing transactions on the Stacks blockchain.
- [Boom.money](https://boom.money) - A web wallet focused on NFTs, and custom tokens.
- [Send Many](https://sendstx.com/) - An application to send STX to many recipients in one transaction.
- [MIA Block explorer](http://miamining.com/) - A web application to exolore MIA coin transactions for all and personal accounts.
- [Speed Spend](https://speed-spend.org) - A suite of working Clarity experiments on testnet ([source ![GitHub Repo stars](https://img.shields.io/github/stars/friedger/speed-spend) ![GitHub last commit](https://img.shields.io/github/last-commit/friedger/speed-spend)](https://github.com/friedger/speed-spend)).

## Clarity Resources

### Developer Tools

- [Clarinet ![GitHub Repo stars](https://img.shields.io/github/stars/hirosystems/clarinet) ![GitHub last commit](https://img.shields.io/github/last-commit/hirosystems/clarinet)](https://github.com/hirosystems/clarinet) - Clarity runtime packaged as a CLI, facilitates development and testing of Clarity smart contracts.
- [Clarigen ![GitHub Repo stars](https://img.shields.io/github/stars/obylabs/clarigen) ![GitHub last commit](https://img.shields.io/github/last-commit/obylabs/clarigen)](https://github.com/obylabs/clarigen) - A tool for writing TypeScript code that interacts with Clarity smart contracts.
- [clarity.tools](https://clarity.tools) - In-browser Clarity REPL.
- [search-clarity.dev](https://search-clarity.dev) - An application for searching for deployed Clarity contracts.

### Libraries

- [uint256 ![GitHub Repo stars](https://img.shields.io/github/stars/KStasi/clarity-uint256-lib) ![GitHub last commit](https://img.shields.io/github/last-commit/KStasi/clarity-uint256-lib)](https://github.com/KStasi/clarity-uint256-lib) - A library for converting values into 256-bits.
- [clarity-bitcoin ![GitHub Repo stars](https://img.shields.io/github/stars/jcnelson/clarity-bitcoin) ![GitHub last commit](https://img.shields.io/github/last-commit/jcnelson/clarity-bitcoin)](https://github.com/jcnelson/clarity-bitcoin) - A library to verify Bitcoin transactions.

### Contracts

- [CityCoin ![GitHub Repo stars](https://img.shields.io/github/stars/citycoins/citycoin) ![GitHub last commit](https://img.shields.io/github/last-commit/citycoins/citycoin)](https://github.com/citycoins/citycoin) - An implementation of PoX lite using STX transfers to mint new coins using proportional probabilities.
- [SWAPR ![GitHub Repo stars](https://img.shields.io/github/stars/psq/swapr) ![GitHub last commit](https://img.shields.io/github/last-commit/psq/swapr)](https://github.com/psq/swapr) - A Uniswap-like implementation on Stacks 2.0 and Clarity.
- [FLEXR ![GitHub Repo stars](https://img.shields.io/github/stars/psq/flexr) ![GitHub last commit](https://img.shields.io/github/last-commit/psq/flexr)](https://github.com/psq/flexr) - An interpretation of Ampleforth for Stacks.
- [ClarityDAO ![GitHub Repo stars](https://img.shields.io/github/stars/friedger/clarity-dao) ![GitHub last commit](https://img.shields.io/github/last-commit/friedger/clarity-dao)](https://github.com/friedger/clarity-dao) - A conversion of Moloch DAO in Clarity.
- [NFT Marketplace ![GitHub Repo stars](https://img.shields.io/github/stars/friedger/clarity-marketplace) ![GitHub last commit](https://img.shields.io/github/last-commit/friedger/clarity-marketplace)](https://github.com/friedger/clarity-marketplace/blob/master/contracts/market.clar) - Clarity smart contract for a marketplace of tradable assets.
- [StackStarter ![GitHub Repo stars](https://img.shields.io/github/stars/MarvinJanssen/stackstarter) ![GitHub last commit](https://img.shields.io/github/last-commit/MarvinJanssen/stackstarter)](https://github.com/MarvinJanssen/stackstarter/blob/master/contracts/stackstarter.clar) - Clarity smart contract for crowdfunding.
- [Lightning Swaps ![GitHub Repo stars](https://img.shields.io/github/stars/radicleart/clarity-rstack) ![GitHub last commit](https://img.shields.io/github/last-commit/radicleart/clarity-rstack)](https://github.com/radicleart/clarity-rstack/blob/master/contracts/lightning-swaps-v1.clar) - Fraud-proof swaps using Lightning Network.
- [Election Voting ![GitHub Repo stars](https://img.shields.io/github/stars/elbaruni/clarity-election) ![GitHub last commit](https://img.shields.io/github/last-commit/elbaruni/clarity-election)](https://github.com/elbaruni/clarity-election/blob/master/contracts/election.clar) - Basic voting for candidates using Clarity.
- [DualX ![GitHub Repo stars](https://img.shields.io/github/stars/westridgeblockchain/dualX) ![GitHub last commit](https://img.shields.io/github/last-commit/westridgeblockchain/dualX)](https://github.com/westridgeblockchain/dualX) - A collection of Clarity contracts that implement a DeFi ecosystem for exchanges.

### Non-Fungible Tokens

- [Tofauti](https://www.tofauti.net) - Collection of resources around NFTs on Stacks.
- [This is #1](https://www.thisisnumberone.com) - The first professional NFT built on Bitcoin and the Stacks blockchain ([contract](https://explorer.stacks.co/txid/SP3QSAJQ4EA8WXEDSRRKMZZ29NH91VZ6C5X88FGZQ.thisisnumberone-v2?chain=mainnet)).

### Fungible Tokens

- [Nothing](https://www.nothingtoken.com/) - A fungible token that does nothing ([contract](https://explorer.stacks.co/txid/0x022bed728d648ff1a68036c40f3aff8136ee22fee18380731df0ab9d76d3c4a9?chain=mainnet)).

### Stacking

- [stacking.club](https://stacking.club) - Stacking information and statistics.
- [Friedger pool](https://pool.friedger.de/) - Community stacking pool with no fees.
- [PlanBetter pool](https://planbetter.org/) - Stacking pool with Bitcoin rewards.

## App Development

### Frontend Libraries

- [Stacks.js ![GitHub Repo stars](https://img.shields.io/github/stars/blockstack/stacks.js) ![GitHub last commit](https://img.shields.io/github/last-commit/blockstack/stacks.js)](https://github.com/blockstack/stacks.js) - Monorepo for JavaScript libraries for interacting with the Stacks blockchain.

### CLI

- [@stacks/cli ![GitHub Repo stars](https://img.shields.io/github/stars/blockstack/stacks.js) ![GitHub last commit](https://img.shields.io/github/last-commit/blockstack/stacks.js)](https://github.com/blockstack/stacks.js/tree/master/packages/cli) - Command line interface for interacting with auth, storage, and transactions.

### Storage

- [CompassDB ![GitHub Repo stars](https://img.shields.io/github/stars/eder-ai/compass-db) ![GitHub last commit](https://img.shields.io/github/last-commit/eder-ai/compass-db)](https://github.com/eder-ai/compass-db) - A library for managing advanced collections in Gaia storage.
- [lens-file-source](https://gitlab.com/MyLens/lens-file-source) - File storage abstraction through mechanisms like caching, transactions, and JSON map aggregation for Gaia.
- [GaiaDown ![GitHub Repo stars](https://img.shields.io/github/stars/AcidLeroy/gaiadown-ts) ![GitHub last commit](https://img.shields.io/github/last-commit/AcidLeroy/gaiadown-ts)](https://github.com/AcidLeroy/gaiadown-ts) - Gaia storage backend for [LevelUp ![GitHub Repo stars](https://img.shields.io/github/stars/Level/levelup) ![GitHub last commit](https://img.shields.io/github/last-commit/Level/levelup)](https://github.com/Level/levelup).

## Learning Resources

### Documentation

- [Official Stacks documentation](https://docs.stacks.co/) - Documentation and developer tutorials for learning
  Clarity and developing Stacks apps.
- [Stacks 101](https://stacks101.com) - Community curated STX knowledge.

### Videos

- [Clarity 101](https://youtu.be/lXJutQqDq3w) - Learn the basics of Clarity's design principles.
- [Developer Registry 101](https://www.crowdcast.io/e/clarity-program) - Learn how to build a Clarity smart contract from scratch.
- [How Clarity Prevents Common Smart Contract Vulnerabilities](https://www.youtube.com/watch?v=VYXhrwPsBws) - Explanation of Clarity's security princples.
- [Proof of Transfer Whitepaper Reading with Muneeb Ali](https://www.youtube.com/watch?v=NY_eUrIcWOY&t=3s) - Overview of the Proof of Transfer (PoX) whitepaper from the author.

## Community

- [Discord](https://discord.gg/zrvWsQC) - Stacks ecosystem Discord.
- [Twitter](https://twitter.com/stacks) - Stacks ecosystem Twitter.
- [Official Stacks Forum](https://forum.stacks.org/) - Stacks community forum.
- [r/stacks](https://www.reddit.com/r/stacks) - Stacks subreddit.

## Contributing

We welcome community contributions to this list. Please read the [contribution guidelines](contributing.md) before contributing.
