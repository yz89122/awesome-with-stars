# Awesome Golem [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![awesome-lint ![GitHub Repo stars](https://img.shields.io/github/stars/golemfactory/awesome-golem) ![GitHub last commit](https://img.shields.io/github/last-commit/golemfactory/awesome-golem)](https://github.com/golemfactory/awesome-golem/actions/workflows/main.yml/badge.svg)](https://github.com/golemfactory/awesome-golem/actions/workflows/main.yml/badge.svg)

[<img src="https://github.com/golemfactory/awesome-golem/raw/master/golem-logo.svg" align="right" width="150">](https://golem.network/)

> Welcome to **Awesome Golem**, a community-curated list of resources, links, projects, tools and applications on Golem!

The users of Golem run the reference implementation in the form of the Rust implementation, Yagna. Together the users make up the Golem Network, a P2P marketplace for computational resources where individuals can act as one of the two non-exclusive roles; a provider selling idle resources, or a requestor buying resources to run tasks.

## Contents

- [Golem](#golem)
- [Network Statistics](#network-statistics)
- [Apps](#apps)
  - [Docker](#docker)
  - [Testing](#testing)
  - [Games](#games)
  - [Data Analysis](#data-analysis)
  - [Data Simulation](#data-simulation)
  - [Data Optimization](#data-optimization)
  - [Finance](#finance)
  - [Machine Learning](#machine-learning)
  - [Deep Learning](#deep-learning)
  - [RNG](#rng)
  - [Password Cracking](#password-cracking)
  - [DeFi](#defi)
  - [User Interfaces](#user-interfaces)
  - [Miscellaneous](#miscellaneous)
- [Developer and Requestor Resources](#developer-and-requestor-resources)
- [Provider Resources](#provider-resources)
  - [Monitoring](#monitoring)
  - [Provisioning](#provisioning)
- [Learning Resources](#learning-resources)
  - [Presentations and Workshop Material](#presentations-and-workshop-material)
  - [Unraveling Golem's The Next Milestone Blog Series](#unraveling-golems-the-next-milestone-blog-series)
  - [GitHub Digest Blog Series](#github-digest-blog-series)
- [Community](#community)

## Golem

- [Golem Network Platform](https://www.golem.network/platform) - Learn the Golem platform on the official Golem Network website.
- [Golem Factory GitHub](https://github.com/golemfactory) - Where you can find the open source code of all things Golem.
- [Yagna GitHub ![GitHub Repo stars](https://img.shields.io/github/stars/golemfactory/yagna) ![GitHub last commit](https://img.shields.io/github/last-commit/golemfactory/yagna)](https://github.com/golemfactory/yagna) - The official Rust implementation of Golem.
- [Golem Community Chat](https://chat.golem.network/) - Join the community and team open discussion on Discord.
- [Reddit](https://reddit.com/r/GolemProject) - Golem Network discussion on the Reddit platform.
- [Twitter](https://twitter.com/golemproject) - The Golem Project Twitter.
- [Blog](http://blog.golemproject.net/) - The official blog where you can find the most reliable information on announcements, summaries and updates.

## Network Statistics

- [Golem Network Stats](https://stats.golem.network) - Statistics tracking tasks and provider resource utilization in the Golem Network.
- [Golem Stats backend ![GitHub Repo stars](https://img.shields.io/github/stars/cryptobench/golem-stats-backend) ![GitHub last commit](https://img.shields.io/github/last-commit/cryptobench/golem-stats-backend)](https://github.com/cryptobench/golem-stats-backend) - Backend of the Golem Network Statistics page including API endpoint URLs.
- [Stats API Documentation](https://docs.stats.golem.network/) - API endpoints that the Golem Network Stats page uses to display its data.

## Apps

- [Golem SLATE](https://golem-slate.xyz/) - Hosted code pen SPA for writing a requester script to have work computed by the network. Utilizes dockerized yagna environments to communicate with the Golem Network in the background.
- [Chess On Golem](https://chessongolem.app/) - Hosted Chess app to play against the providers of the network utilizing the Stockfish open source Chess engine.
- [Golem Network Video Transcoder ![GitHub Repo stars](https://img.shields.io/github/stars/Doc-Saintly/golem-video) ![GitHub last commit](https://img.shields.io/github/last-commit/Doc-Saintly/golem-video)](https://github.com/Doc-Saintly/golem-video) - Sample app to transcode videos. Select your transcoding profile and then upload your videos.
- [Golem Transcoding requestor ![GitHub Repo stars](https://img.shields.io/github/stars/Edhendil/golem-transcoding) ![GitHub last commit](https://img.shields.io/github/last-commit/Edhendil/golem-transcoding)](https://github.com/Edhendil/golem-transcoding) - React + Spring based webapp accepting video files as input and transcoding these files into different formats.
- [Go le' Machin ![GitHub Repo stars](https://img.shields.io/github/stars/DEUTSCHKLUB/go-le-m) ![GitHub last commit](https://img.shields.io/github/last-commit/DEUTSCHKLUB/go-le-m)](https://github.com/DEUTSCHKLUB/go-le-m) - Web based bulk image editor that allows users to upload multiple images and apply bulk actions to them.

### Docker

- [Golem Requestor Node ![GitHub Repo stars](https://img.shields.io/github/stars/DerekJarvis/general-golem) ![GitHub last commit](https://img.shields.io/github/last-commit/DerekJarvis/general-golem)](https://github.com/DerekJarvis/general-golem) - Dockerized requestor environment. Pass in the py script, it sets up the daemon and runs it.

### Testing
- [Golem Test Harness (Goth) ![GitHub Repo stars](https://img.shields.io/github/stars/golemfactory/goth) ![GitHub last commit](https://img.shields.io/github/last-commit/golemfactory/goth)](https://github.com/golemfactory/goth) - Tool with the purpose of speeding up your development process and making it more enjoyable for application creators.
- [Golem-afl ![GitHub Repo stars](https://img.shields.io/github/stars/sladecek/golem-afl) ![GitHub last commit](https://img.shields.io/github/last-commit/sladecek/golem-afl)](https://github.com/sladecek/golem-afl) - An experimental test-fuzzing framework. Assists in finding security holes.
- [Golem Cargo Test ![GitHub Repo stars](https://img.shields.io/github/stars/sladecek/golem_cargo_test) ![GitHub last commit](https://img.shields.io/github/last-commit/sladecek/golem_cargo_test)](https://github.com/sladecek/golem_cargo_test) - An adaptive distributed test executor for Rust projects.
- [Golem CI ![GitHub Repo stars](https://img.shields.io/github/stars/hhio618/golem-ci) ![GitHub last commit](https://img.shields.io/github/last-commit/hhio618/golem-ci)](https://github.com/hhio618/golem-ci) - Decentralized task pipeline.
- [Golem SLATE ![GitHub Repo stars](https://img.shields.io/github/stars/deutschklub/golem-slate) ![GitHub last commit](https://img.shields.io/github/last-commit/deutschklub/golem-slate)](https://github.com/deutschklub/golem-slate) - Open source repository for Golem SLATE described in the above Apps section.

### Games

- [Golem Sudoku ![GitHub Repo stars](https://img.shields.io/github/stars/Dodecane/golem-sudoku) ![GitHub last commit](https://img.shields.io/github/last-commit/Dodecane/golem-sudoku)](https://github.com/Dodecane/golem-sudoku) - Game of Sudoku with size variants.
- [HSOG-requester ![GitHub Repo stars](https://img.shields.io/github/stars/ChrisHelmsC/hsog-requestor) ![GitHub last commit](https://img.shields.io/github/last-commit/ChrisHelmsC/hsog-requestor)](https://github.com/ChrisHelmsC/hsog-requestor) - Helps the HearthStone community in the design and building of decks by running a large number of simulated games.
- [ChessOnGolem ![GitHub Repo stars](https://img.shields.io/github/stars/broadcastmonkey/ChessOnGolem) ![GitHub last commit](https://img.shields.io/github/last-commit/broadcastmonkey/ChessOnGolem)](https://github.com/broadcastmonkey/ChessOnGolem) - Open source repository for Chess described in first Apps section. Includes React frontend for the 2 AI's playing against each other through the Golem backend.
- [Golem Fleet Battle Simulator ![GitHub Repo stars](https://img.shields.io/github/stars/UnfortuN8/Golem-Fleet-Battle-Simulator) ![GitHub last commit](https://img.shields.io/github/last-commit/UnfortuN8/Golem-Fleet-Battle-Simulator)](https://github.com/UnfortuN8/Golem-Fleet-Battle-Simulator) - System for calculating the results of a battle between two opposing starship fleets. Used in the iOS game Rock Paper Frigate to determine the result of PvP fleet battles.

### Data Analysis

- [Flan ![GitHub Repo stars](https://img.shields.io/github/stars/nestorbonilla/flan) ![GitHub last commit](https://img.shields.io/github/last-commit/nestorbonilla/flan)](https://github.com/nestorbonilla/flan) - Tool for entrepreneurs that provide customized analysis of millions of worldwide trade value records giving them a bold guideline about what sectors they would need to take more attention to.
- [Golem Lorenz-attractor ![GitHub Repo stars](https://img.shields.io/github/stars/hhio618/golem-lorenz-attractor) ![GitHub last commit](https://img.shields.io/github/last-commit/hhio618/golem-lorenz-attractor)](https://github.com/hhio618/golem-lorenz-attractor) - A system of three coupled, first-order, nonlinear differential equations which describe the trajectory of a particle through time.
- [Golem Geomandel ![GitHub Repo stars](https://img.shields.io/github/stars/Edhendil/golem-geomandel) ![GitHub last commit](https://img.shields.io/github/last-commit/Edhendil/golem-geomandel)](https://github.com/Edhendil/golem-geomandel) - Python script for generating sequences of Mandelbrot images centered on a single point and with zoom increasing in each image.
- [Golem COVID ![GitHub Repo stars](https://img.shields.io/github/stars/iRhonin/golem-covid) ![GitHub last commit](https://img.shields.io/github/last-commit/iRhonin/golem-covid)](https://github.com/iRhonin/golem-covid) - Creates images of new deaths per million related to COVID. After all images generated, it will gather them and create a gif.
- [Golem Parallel Matplotlib ![GitHub Repo stars](https://img.shields.io/github/stars/CoeJoder/golem-parallel-matplotlib) ![GitHub last commit](https://img.shields.io/github/last-commit/CoeJoder/golem-parallel-matplotlib)](https://github.com/CoeJoder/golem-parallel-matplotlib) - Various statistical analyses are performed on circadian rhythm measurements in human test subjects.

### Data Simulation

- [cadCAD Golem ![GitHub Repo stars](https://img.shields.io/github/stars/rogervs/cadcadgolem) ![GitHub last commit](https://img.shields.io/github/last-commit/rogervs/cadcadgolem)](https://github.com/rogervs/cadcadgolem) - Package wrapper for cadCAD to dispatch the simulation workload to multiple Golem nodes. Supports Jupyter Notebook.
- [Golem Array ![GitHub Repo stars](https://img.shields.io/github/stars/johngrantuk/golem-array) ![GitHub last commit](https://img.shields.io/github/last-commit/johngrantuk/golem-array)](https://github.com/johngrantuk/golem-array) - Antenna array design and simulation.
- [Limit visualization ![GitHub Repo stars](https://img.shields.io/github/stars/vporton/limit-visualization) ![GitHub last commit](https://img.shields.io/github/last-commit/vporton/limit-visualization)](https://github.com/vporton/limit-visualization) - Plots graphs with various limits. Supports discontinous graphs.
- [GolemGraphWavePair ![GitHub Repo stars](https://img.shields.io/github/stars/smiley1983/golemGraphWavePair) ![GitHub last commit](https://img.shields.io/github/last-commit/smiley1983/golemGraphWavePair)](https://github.com/smiley1983/golemGraphWavePair) - Generates graph frames, then combine them into an animation.
- [Golemized strong-gravitational-lense ![GitHub Repo stars](https://img.shields.io/github/stars/rezahsnz/golemized-strong-gravitational-lense) ![GitHub last commit](https://img.shields.io/github/last-commit/rezahsnz/golemized-strong-gravitational-lense)](https://github.com/rezahsnz/golemized-strong-gravitational-lense) - Simple distributed computing hack that simulates a physical phenomena called gravitional lensing.

### Data Optimization

- [Golem or-tools ![GitHub Repo stars](https://img.shields.io/github/stars/Doc-Saintly/golem-ortools) ![GitHub last commit](https://img.shields.io/github/last-commit/Doc-Saintly/golem-ortools)](https://github.com/Doc-Saintly/golem-ortools) - Uses the or-tools Constraint Programming library to solve problems.
- [No more COFUD ![GitHub Repo stars](https://img.shields.io/github/stars/DEUTSCHKLUB/no-more-COFUD) ![GitHub last commit](https://img.shields.io/github/last-commit/DEUTSCHKLUB/no-more-COFUD)](https://github.com/DEUTSCHKLUB/no-more-COFUD) - Calculates how to fit the most people into a space while keeping 2 meters distance between each other.
- [Mutta Puffs ![GitHub Repo stars](https://img.shields.io/github/stars/DeveloperInProgress/Mutta-Puffs) ![GitHub last commit](https://img.shields.io/github/last-commit/DeveloperInProgress/Mutta-Puffs)](https://github.com/DeveloperInProgress/Mutta-Puffs) - Sports league scheduler that solves the Travelling Tournament Problem for a given set of teams using Population-based Simulated Annealing.

### Finance
- [ZKSync .csv export ![GitHub Repo stars](https://img.shields.io/github/stars/blue-notes-robot/zksync-csv-export) ![GitHub last commit](https://img.shields.io/github/last-commit/blue-notes-robot/zksync-csv-export)](https://github.com/blue-notes-robot/zksync-csv-export) - Scrapes ZKSync to generate financial data in a .csv file.

### Machine Learning
- [DeML-Golem ![GitHub Repo stars](https://img.shields.io/github/stars/anshuman73/DeML-Golem) ![GitHub last commit](https://img.shields.io/github/last-commit/anshuman73/DeML-Golem)](https://github.com/anshuman73/DeML-Golem) - Decentralised Machine Learning using Federated Learning to combine the sub-step models, it trains on different provider nodes into a full fleged model.

### Deep Learning
- [Mlg ![GitHub Repo stars](https://img.shields.io/github/stars/rezahsnz/mlg) ![GitHub last commit](https://img.shields.io/github/last-commit/rezahsnz/mlg)](https://github.com/rezahsnz/mlg) - CNN predict services, a deep learning application that distributes popular CNNs pre-trained with ImageNet datasets.
- [Deepart Golem ![GitHub Repo stars](https://img.shields.io/github/stars/echinocacti/deepart_golem) ![GitHub last commit](https://img.shields.io/github/last-commit/echinocacti/deepart_golem)](https://github.com/echinocacti/deepart_golem) - Makes art using distributed computing by running a tensorflow app, uploading your content and style picture.

### RNG
- [Gandom ![GitHub Repo stars](https://img.shields.io/github/stars/rezahsnz/gandom) ![GitHub last commit](https://img.shields.io/github/last-commit/rezahsnz/gandom)](https://github.com/rezahsnz/gandom) - Extract random streams from providers. Supports two PRNGs, one based on Chaos machines and the other that makes use of Sodium.

### Password Cracking
- [Golem-JTR ![GitHub Repo stars](https://img.shields.io/github/stars/hhio618/golem-jtr) ![GitHub last commit](https://img.shields.io/github/last-commit/hhio618/golem-jtr)](https://github.com/hhio618/golem-jtr) - Run John The Ripper to recover a password.
- [Yacat](https://handbook.golem.network/requestor-tutorials/create-your-own-application-on-golem/the-steps-to-do) - Hashcat password-recovery step-by-step.

### DeFi

- [Golem Staking Pool incentivize system for GLM holders ![GitHub Repo stars](https://img.shields.io/github/stars/masaun/GLM-stake-pool) ![GitHub last commit](https://img.shields.io/github/last-commit/masaun/GLM-stake-pool)](https://github.com/masaun/GLM-stake-pool) - A smart contract in order to provide the opportunity of yield farming for GLM token holders.
- [Magic-doll ![GitHub Repo stars](https://img.shields.io/github/stars/bakaoh/magic-doll) ![GitHub last commit](https://img.shields.io/github/last-commit/bakaoh/magic-doll)](https://github.com/bakaoh/magic-doll) - Sumer is a DeFi application that people may delegate their Splinterland card to earn passive income. Its core is `Kyle`, a Golem app that does all the computation to pick the best team to play for each match.

### User Interfaces

- [Golem UI ![GitHub Repo stars](https://img.shields.io/github/stars/shri4net/golem-hackathon-2020) ![GitHub last commit](https://img.shields.io/github/last-commit/shri4net/golem-hackathon-2020)](https://github.com/shri4net/golem-hackathon-2020) - Electron user interface for Yagna.

### Miscellaneous

- [Gc__gvmi_hash ![GitHub Repo stars](https://img.shields.io/github/stars/krunch3r76/gc__gvmi_hash) ![GitHub last commit](https://img.shields.io/github/last-commit/krunch3r76/gc__gvmi_hash)](https://github.com/krunch3r76/gc__gvmi_hash) - Recalculate the hash of gvmi image file. Solves the issue of having lost the hash of a previously uploaded image or if you're unsure if a key corresponds to a specific image.
- [gvm-vim ![GitHub Repo stars](https://img.shields.io/github/stars/canokaue/gvm-vim) ![GitHub last commit](https://img.shields.io/github/last-commit/canokaue/gvm-vim)](https://github.com/canokaue/gvm-vim) - Golemized docker image for compiling the VIM editor.
- [YaJSapi fork with greeting example ![GitHub Repo stars](https://img.shields.io/github/stars/rezahsnz/yajsapi) ![GitHub last commit](https://img.shields.io/github/last-commit/rezahsnz/yajsapi)](https://github.com/rezahsnz/yajsapi) - Simple Node.js requestor app that greets you. It writes some important message to a file and then downloads it for you, the basic eskeleton of a requestor app. Look in `examples/greetings`.
- [Golem Image Sharpening ![GitHub Repo stars](https://img.shields.io/github/stars/visualNext/golem) ![GitHub last commit](https://img.shields.io/github/last-commit/visualNext/golem)](https://github.com/visualNext/golem) - A tool to sharpen images.

## Developer and Requestor Resources

- [Yagna handbook](https://handbook.golem.network/) - Handbook for the Golem, implementation name, Yagna.
- [Releases List ![GitHub Repo stars](https://img.shields.io/github/stars/golemfactory/yagna) ![GitHub last commit](https://img.shields.io/github/last-commit/golemfactory/yagna)](https://github.com/golemfactory/yagna/releases) - GitHub releases of Yagna.
- [Requestor flash tutorial](https://handbook.golem.network/requestor-tutorials/flash-tutorial-of-requestor-development) - Get started quick and create your first tasks/request on Golem.
- [Yagna tag on Stack Overflow](https://stackoverflow.com/questions/tagged/yagna) - Use the Yagna tag if you have an interesting question you'd like answered.
- [Breakdown of blender.js](https://docs.google.com/document/d/e/2PACX-1vRONc0RRaqImJumYQ3SmILtLo4jiCYgtE0AO3JfpMy0b0-BjAU8TvlIHdtbrs5cDrMbuPFv7khE47MO/pub) - JS guide for developers to get a better idea of how to run a task with the JavaScript API.

## Provider Resources

- [Provider Tutorial](https://handbook.golem.network/provider-tutorials/provider-tutorial) - Get started as a Provider on Golem Network using the handbook.
- [Provider FAQ ![GitHub Repo stars](https://img.shields.io/github/stars/figurestudios/community-golem-docs) ![GitHub last commit](https://img.shields.io/github/last-commit/figurestudios/community-golem-docs)](https://github.com/figurestudios/community-golem-docs/blob/main/providing/provider-faq.md) - Community curated list of commonly asked questions and answers.
- [Yagna-binaries for aarch64 ![GitHub Repo stars](https://img.shields.io/github/stars/MarijnStevens/yagna-binaries) ![GitHub last commit](https://img.shields.io/github/last-commit/MarijnStevens/yagna-binaries)](https://github.com/MarijnStevens/yagna-binaries) - Build for 64 bit arm architecture to be able to run as a provider on a system such as a Raspberry Pi.

### Monitoring

- [Golem Provider dashboard ![GitHub Repo stars](https://img.shields.io/github/stars/vciancio/golem-dashboard) ![GitHub last commit](https://img.shields.io/github/last-commit/vciancio/golem-dashboard)](https://github.com/vciancio/golem-dashboard) - ReactJS dashboard made to quickly gather status from your provider nodes without havingn to SSH into them.
- [Golem Provider dashboard backend / GolemBar ![GitHub Repo stars](https://img.shields.io/github/stars/vciancio/golem-node-server) ![GitHub last commit](https://img.shields.io/github/last-commit/vciancio/golem-node-server)](https://github.com/vciancio/golem-node-server) - Flask backend that collects the data from the provider that's then used with the dashboard project above.

### Provisioning

- [WSL ![GitHub Repo stars](https://img.shields.io/github/stars/r34x/WSL) ![GitHub last commit](https://img.shields.io/github/last-commit/r34x/WSL)](https://github.com/r34x/WSL) - Allows Windows users to run Golem within Windows Subsystem for Linux. Removing the requirement of Windows users needing to use a Virtual Machine.
- [Golem Provider Terraform ![GitHub Repo stars](https://img.shields.io/github/stars/nemani/golem-provider-terraform) ![GitHub last commit](https://img.shields.io/github/last-commit/nemani/golem-provider-terraform)](https://github.com/nemani/golem-provider-terraform) - Terraform script to automatically deploy a Golem Provider on a cloud provider and setup monitoring using prometheus.
- [Automatic Golem ![GitHub Repo stars](https://img.shields.io/github/stars/r34x/Automatic-Golem) ![GitHub last commit](https://img.shields.io/github/last-commit/r34x/Automatic-Golem)](https://github.com/r34x/Automatic-Golem) - Setup a Golem Provider with simple instructions and logs guiding you through the process.
- [Golem Provider Node ![GitHub Repo stars](https://img.shields.io/github/stars/alexandre-abrioux/golem-node) ![GitHub last commit](https://img.shields.io/github/last-commit/alexandre-abrioux/golem-node)](https://github.com/alexandre-abrioux/golem-node) - Docker version of a node to help you get started running as a provider in a Docker container quick.
- [Golem Provider node ![GitHub Repo stars](https://img.shields.io/github/stars/blue-notes-robot/golem-node) ![GitHub last commit](https://img.shields.io/github/last-commit/blue-notes-robot/golem-node)](https://github.com/blue-notes-robot/golem-node) - Fork of Alxexandre-abrioux project above that allows to dynamically generate config files from ENV variables and specify how many replicas you'd like to spawn.
- [Scaleable golem provider ![GitHub Repo stars](https://img.shields.io/github/stars/cryptobench/scaleable-golem-provider) ![GitHub last commit](https://img.shields.io/github/last-commit/cryptobench/scaleable-golem-provider)](https://github.com/cryptobench/scaleable-golem-provider) - Spawn x amount of providers using Docker.

## Learning Resources

### Presentations and Workshop Material

- [Golem: Architecture, SDKs and tips with Jakub Mazurek at 0xHack](https://youtu.be/1UoZWC9XI2g) - Live workshop diving into how any developer with Python or JS coding experience can start build applications running on Golem.
- [Golem: Growing an ecosystem the Golem way with María Paula Fernández at 0xHack](https://youtu.be/FmrdyU90NVE) - High-level overview and introduction to Golem as a project.
- [Golem Workshop at H3LLO Decentralization](https://gist.github.com/zakaprov/5366bffa49b3c116748bf9b5b73c602c) - List of resources containing a live-coding hackathon workshop and relevant resources to help developers understand and requesting on Golem.
- [Mainnet Requestor quickstart Walk-through](https://youtu.be/GcdTq3i_wdY) - Video walk-through of the requestor quick-start handbook guide to get a request on Golem Network testnet and then mainnet using the Yagna Python API.
- [Mainnet Provider quickstart Walk-through](https://youtu.be/RITdKtEOV_E) - Video walk-through of the provider handbook guide to start sharing computational resources the Golem Network.

### Unraveling Golem's The Next Milestone Blog Series

- [Unraveling Golem's The Next Milestone](https://blog.golemproject.net/next-milestone) - Introduction to the Yagna implementation of Golem.
- [Unraveling Golem's The Next Milestone, Part II](https://blog.golemproject.net/next-milestone-part-ii/) - Fundamental architectural concepts which constitute the foundations of the new implemenation of Golem, Yagna.
- [Unraveling Golem's The Next Milestone, Part III](https://blog.golemproject.net/next-milestone-part-iii/) - The elements of Golem's reference architecture, and illustrates how they interact to form a working ecosystem, being the Golem Network.

### GitHub Digest Blog Series

- [Golem GitHub Digest #1](https://blog.golemproject.net/golem-github-digest-1/) - Understanding the Golem Repositories.
- [Golem GitHub Digest #2](https://blog.golemproject.net/golem-github-digest-2/) - Diving into the Golem Repositories.
- [Golem GitHub Digest #3](https://blog.golemproject.net/golem-github-digest-3/) - Diving into Pull Requests of the Golem repositories.
- [Golem GitHub Digest #4](https://blog.golemproject.net/golem-github-digest-4/) - Diving into latest releases in the Golem repositories.
- [Golem GitHub Digest #5](https://blog.golemproject.net/golem-github-digest-5/) - Diving into the Golem alpha testnet.
- [Golem GitHub Digest #6](https://blog.golemproject.net/golem-github-digest-6/) - SGX proof-of-concept for Golem.
- [Golem GitHub Digest #7](https://blog.golemproject.net/golem-github-digest-7/) - Decentralization of the Golem marketplace.
- [Golem GitHub Digest #8](https://blog.golemproject.net/golem-github-digest-8/) - Awesome Golem and next steps to Alpha 3.
- [Golem GitHub Digest #9](https://blog.golemproject.net/golem-github-digest-9/) - AMD provider support, network metrics and improved proposal handling.
- [Golem GitHub Digest #10](https://blog.golemproject.net/golem-github-digest-10/) - Improvements from community feedback.
- [Golem GitHub Digest #11](https://blog.golemproject.net/golem-github-digest-11/) - Easy log collection.
- [Golem GitHub Digest #12](https://blog.golemproject.net/golem-github-digest-12/) - We are on MAINNET and gathering feedback.
- [Golem GitHub Digest #13](https://blog.golemproject.net/golem-github-digest-13/) - Progressing faster with the help of the Golem community.

## Community

- [Golem Community GLM Rewards Program](https://blog.golemproject.net/community-incentives-program/) - Participate in the community and get rewarded for it in GLM tokens.
- [Golem Network Discussion Group](https://t.me/GolemProject) - Community driven Telegram channel.
- [Reddit Golem Stat Bot ![GitHub Repo stars](https://img.shields.io/github/stars/figurestudios/golem-stat-bot) ![GitHub last commit](https://img.shields.io/github/last-commit/figurestudios/golem-stat-bot)](https://github.com/figurestudios/golem-stat-bot) - Scrapes Reddit posts on /r/GolemProject, and replies if specific keywords/commands are found.

## Contributing

Pull requests and issues with suggestions to Awesome Golem are welcome! Please read the [contributing](contributing.md) guidelines before submitting a PR.
