# Awesome Docker [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)][sindresorhus] [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/veggiemonk/awesome-docker/)[![Last Commit](https://img.shields.io/github/last-commit/veggiemonk/awesome-docker)](https://github.com/veggiemonk/awesome-docker/commits/main)<!-- omit in toc -->

> A curated list of Docker resources and projects

If you would like to contribute, please read [CONTRIBUTING.md][contributing] first.
It contains a lot of tips and guidelines to help keep things organized.
Just click [README.md][editreadme] to submit a [pull request][editreadme].
If this list is not complete, you can [contribute][editreadme] to make it so. Here is a great video tutorial to learn how to [contribute on Github](https://egghead.io/lessons/javascript-identifying-how-to-contribute-to-an-open-source-project-on-github).

> **Please**, help organize these resources so that they are _easy to find_ and _understand_ for newcomers. See how to **[Contribute][contributing]** for tips!

**_If you see a link here that is not (any longer) a good fit, you can fix it by submitting a [pull request][editreadme] to improve this file. Thank you!_**

The creators and maintainers of this list do not receive any form of payment to accept a change made by any contributor. This page is not an official Docker product in any way. It is a list of links to projects and is maintained by volunteers. Everybody is welcome to contribute. The goal of this repo is to index open-source projects, not to advertise for profit.

# Contents <!-- omit in toc -->

<!-- TOC -->

- [Legend](#legend)
- [What is Docker](#what-is-docker)
- [Where to start](#where-to-start)
- [Where to start (Windows)](#where-to-start-windows)
- [Projects](#projects)
  - [Container Operations](#container-operations)
    - [Container Composition](#container-composition)
    - [Deployment and Infrastructure](#deployment-and-infrastructure)
    - [Monitoring](#monitoring)
    - [Networking](#networking)
    - [Orchestration](#orchestration)
    - [PaaS](#paas)
    - [Reverse Proxy](#reverse-proxy)
    - [Runtime](#runtime)
    - [Security](#security)
    - [Service Discovery](#service-discovery)
    - [Volume Management / Data](#volume-management--data)
    - [User Interface](#user-interface)
      - [IDE integrations](#ide-integrations)
      - [Desktop](#desktop)
      - [Terminal](#terminal)
        - [Terminal UI](#terminal-ui)
        - [CLI tools](#cli-tools)
        - [Other](#other)
      - [Web](#web)
  - [Docker Images](#docker-images)
    - [Base Tools](#base-tools)
    - [Builder](#builder)
    - [Dockerfile](#dockerfile)
    - [Linter](#linter)
    - [Metadata](#metadata)
    - [Registry](#registry)
  - [Development with Docker](#development-with-docker)
    - [API Client](#api-client)
    - [CI/CD](#cicd)
    - [Development Environment](#development-environment)
    - [Garbage Collection](#garbage-collection)
    - [Serverless](#serverless)
    - [Testing](#testing)
    - [Wrappers](#wrappers)
  - [Services based on Docker (mostly :yen:)](#services-based-on-docker-mostly-yen)
    - [CI Services](#ci-services)
    - [CaaS](#caas)
    - [Monitoring Services](#monitoring-services)
- [Useful Resources](#useful-resources)
  - [Awesome Lists](#awesome-lists)
  - [Demos and Examples](#demos-and-examples)
  - [Good Tips](#good-tips)
  - [Raspberry Pi \& ARM](#raspberry-pi--arm)
  - [Security](#security-1)
  - [Videos](#videos)
- [Communities and Meetups](#communities-and-meetups)
  - [Brazilian](#brazilian)
  - [English](#english)
  - [Russian](#russian)
  - [Spanish](#spanish)
  - [Stargazers over time](#stargazers-over-time)

<!-- /TOC -->

# Legend

-   Monetized :yen:
-   Stale (2+ years inactive) :ice_cube:

# What is Docker

> Docker is an open platform for developers and sysadmins to build, ship, and run distributed applications. Consisting of Docker Engine, a portable, lightweight runtime and packaging tool, and Docker Hub, a cloud service for sharing applications and automating workflows, Docker enables apps to be quickly assembled from components and eliminates the friction between development, QA, and production environments. As a result, IT can ship faster and run the same app, unchanged, on laptops, data center VMs, and any cloud.

_Source:_ [What is Docker](https://www.docker.com/why-docker/)

# Where to start

-   [Benefits of using Docker](https://semaphore.io/blog/docker-benefits) for development and delivery, with a practical roadmap for adoption.
- [Bootstrapping Microservices](https://www.manning.com/books/bootstrapping-microservices-with-docker-kubernetes-and-terraform) - A practical and project-based guide to building applications with microservices, starts by building a Docker image for a single microservice and publishing it to a private container registry, finishes by deploying a complete microservices application to a production Kubernetes cluster.
-   [Docker Curriculum ![GitHub Repo Stars](https://img.shields.io/github/stars/prakhar1989/docker-curriculum) ![GitHub last commit](https://img.shields.io/github/last-commit/prakhar1989/docker-curriculum)](https://github.com/prakhar1989/docker-curriculum): A comprehensive tutorial for getting started with Docker. Teaches how to use Docker and deploy dockerized apps on AWS with Elastic Beanstalk and Elastic Container Service.
-   [Docker Documentation](https://docs.docker.com/): the official documentation.
-   [Docker for beginners ![GitHub Repo Stars](https://img.shields.io/github/stars/groda/big_data) ![GitHub last commit](https://img.shields.io/github/last-commit/groda/big_data)](https://github.com/groda/big_data/blob/master/docker_for_beginners.md): A tutorial for beginners who need to learn the basics of Docker—from "Hello world!" to basic interactions with containers, with simple explanations of the underlying concepts.
-   [Docker for novices](https://www.youtube.com/watch?v=xsjSadjKXns) An introduction to Docker for developers and testers who have never used it. (Video 1h40, recorded linux.conf.au 2019 — Christchurch, New Zealand) by Alex Clews.

-   [Docker katas ![GitHub Repo Stars](https://img.shields.io/github/stars/eficode-academy/docker-katas) ![GitHub last commit](https://img.shields.io/github/last-commit/eficode-academy/docker-katas)](https://github.com/eficode-academy/docker-katas) A series of labs that will take you from "Hello Docker" to deploying a containerized web application to a server.
-   [Docker simplified in 55 seconds](https://www.youtube.com/watch?v=vP_4DlOH1G4): An animated high-level introduction to Docker. Think of it as a visual tl;dr that makes it easier to dive into more complex learning materials.
-   [Docker Training](https://training.mirantis.com) :yen:
-   [Dockerlings ![GitHub Repo Stars](https://img.shields.io/github/stars/furkan/dockerlings) ![GitHub last commit](https://img.shields.io/github/last-commit/furkan/dockerlings)](https://github.com/furkan/dockerlings): Learn docker from inside your terminal, with a modern TUI and bite sized exercises (by [furkan](https://github.com/furkan))

-   [Introduction à Docker](https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/docker/) A dedicated section to master Docker on a French site about DevSecOps: From the basics to best practices, including optimizing, securing your containers...
-   [Learn Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/dwyl/learn-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/dwyl/learn-docker)](https://github.com/dwyl/learn-docker): step-by-step tutorial and more resources (video, articles, cheat sheets) by [dwyl](https://github.com/dwyl)
- [Learn Docker (Visually)](https://pagertree.com/learn/docker/overview) - A beginner-focused high-level overview of all the major components of Docker and how they fit together. Lots of high-quality images, examples, and resources.
-   [Play With Docker](https://training.play-with-docker.com/): PWD is a great way to get started with Docker from beginner to advanced users. Docker runs directly in your browser.
-   [Practical Guide about Docker Commands in Spanish ![GitHub Repo Stars](https://img.shields.io/github/stars/brunocascio/docker-espanol) ![GitHub last commit](https://img.shields.io/github/last-commit/brunocascio/docker-espanol)](https://github.com/brunocascio/docker-espanol) This Spanish guide contains the use of basic docker commands with real life examples.
-   [Setting Python Development Environment with VScode and Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/RamiKrispin/vscode-python) ![GitHub last commit](https://img.shields.io/github/last-commit/RamiKrispin/vscode-python)](https://github.com/RamiKrispin/vscode-python): A step-by-step tutorial for setting up a dockerized Python development environment with VScode, Docker, and the Dev Container extension.
-   [The Docker Handbook](https://docker-handbook.farhan.dev/) An open-source book that teaches you the fundamentals, best practices and some intermediate Docker functionalities. The book is hosted on [fhsinchy/the-docker-handbook ![GitHub Repo Stars](https://img.shields.io/github/stars/fhsinchy/the-docker-handbook) ![GitHub last commit](https://img.shields.io/github/last-commit/fhsinchy/the-docker-handbook)](https://github.com/fhsinchy/the-docker-handbook) and the projects are hosted on [fhsinchy/docker-handbook-projects ![GitHub Repo Stars](https://img.shields.io/github/stars/fhsinchy/docker-handbook-projects) ![GitHub last commit](https://img.shields.io/github/last-commit/fhsinchy/docker-handbook-projects)](https://github.com/fhsinchy/docker-handbook-projects) repository.

**Cheatsheets** by

-   [eon01 ![GitHub Repo Stars](https://img.shields.io/github/stars/eon01/DockerCheatSheet) ![GitHub last commit](https://img.shields.io/github/last-commit/eon01/DockerCheatSheet)](https://github.com/eon01/DockerCheatSheet)
-   [dimonomid ![GitHub Repo Stars](https://img.shields.io/github/stars/dimonomid/docker-quick-ref) ![GitHub last commit](https://img.shields.io/github/last-commit/dimonomid/docker-quick-ref)](https://github.com/dimonomid/docker-quick-ref) (PDF)
-   [JensPiegsa ![GitHub Repo Stars](https://img.shields.io/github/stars/JensPiegsa/docker-cheat-sheet) ![GitHub last commit](https://img.shields.io/github/last-commit/JensPiegsa/docker-cheat-sheet)](https://github.com/JensPiegsa/docker-cheat-sheet)
-   [wsargent ![GitHub Repo Stars](https://img.shields.io/github/stars/wsargent/docker-cheat-sheet) ![GitHub last commit](https://img.shields.io/github/last-commit/wsargent/docker-cheat-sheet)](https://github.com/wsargent/docker-cheat-sheet) (Most popular)

# Where to start (Windows)

-   [Docker on Windows behind a firewall](https://toedter.com/2015/05/11/docker-on-windows-behind-a-firewall/) by [kaitoedter](https://twitter.com/kaitoedter)
- [Docker Reference Architecture: Modernizing Traditional .NET Framework Applications](https://docs.mirantis.com/containers/v3.0/dockeree-ref-arch/app-dev/modernize-dotnet-apps.html) - You will learn to identify the types of .NET Framework applications that are good candidates for containerization, the "lift-and-shift" approach to containerization.
-   [Docker with Microsoft SQL 2016 + ASP.NET](https://blog.alexellis.io/docker-does-sql2016-aspnet/) Demonstration running ASP.NET and SQL Server workloads in Docker
-   [Exploring ASP.NET Core with Docker in both Linux and Windows Containers](https://www.hanselman.com/blog/exploring-aspnet-core-with-docker-in-both-linux-and-windows-containers) Running ASP.NET Core apps in Linux and Windows containers, using [Docker for Windows][docker-for-windows]
-   [Running a Legacy ASP.NET App in a Windows Container](https://blog.sixeyed.com/dockerizing-nerd-dinner-part-1-running-a-legacy-asp-net-app-in-a-windows-container/) Steps for Dockerizing a legacy ASP.NET app and running as a Windows container
- [Windows Containers and Docker: The 101](https://www.youtube.com/watch?v=N7SG2wEyQtM) - A 20-minute overview, using Docker to run PowerShell, ASP.NET Core and ASP.NET apps.
-   [Windows Containers Quick Start](https://learn.microsoft.com/en-us/virtualization/windowscontainers/about/) Overview of Windows containers, drilling down to Quick Starts for Windows 10 and Windows Server 2016

---

# Projects

-   Moby = open source development
-   Docker CE = free product release based on Moby
-   Docker EE = commercial product release based on Docker CE.

> Docker EE is on the same code base as Docker CE, so also built from Moby, with commercial components added, such as "docker data center / universal control plane"

-   [Moby ![GitHub Repo Stars](https://img.shields.io/github/stars/moby/moby) ![GitHub last commit](https://img.shields.io/github/last-commit/moby/moby)](https://github.com/moby/moby)
-   [Docker Images](https://hub.docker.com)
-   [Docker Compose ![GitHub Repo Stars](https://img.shields.io/github/stars/docker/compose) ![GitHub last commit](https://img.shields.io/github/last-commit/docker/compose)](https://github.com/docker/compose/) (Define and run multi-container applications with Docker)
-   [Docker Registry][distribution] (The Docker toolset to pack, ship, store, and deliver content)

## Container Operations

### Container Composition

- [Capitan ![GitHub Repo Stars](https://img.shields.io/github/stars/byrnedo/capitan) ![GitHub last commit](https://img.shields.io/github/last-commit/byrnedo/capitan)](https://github.com/byrnedo/capitan) :ice_cube: - Composable docker orchestration with added scripting support by [byrnedo].
- [Composerize ![GitHub Repo Stars](https://img.shields.io/github/stars/magicmark/composerize) ![GitHub last commit](https://img.shields.io/github/last-commit/magicmark/composerize)](https://github.com/magicmark/composerize) - Convert docker run commands into docker-compose files.
- [crowdr ![GitHub Repo Stars](https://img.shields.io/github/stars/polonskiy/crowdr) ![GitHub last commit](https://img.shields.io/github/last-commit/polonskiy/crowdr)](https://github.com/polonskiy/crowdr) :ice_cube: - Tool for managing multiple Docker containers (`docker-compose` alternative).
- [ctk ![GitHub Repo Stars](https://img.shields.io/github/stars/ctk-hq/ctk) ![GitHub last commit](https://img.shields.io/github/last-commit/ctk-hq/ctk)](https://github.com/ctk-hq/ctk) - Visual composer for container based workloads. By [corpulent](https://github.com/corpulent).
- [docker-config-update ![GitHub Repo Stars](https://img.shields.io/github/stars/sudo-bmitch/docker-config-update) ![GitHub last commit](https://img.shields.io/github/last-commit/sudo-bmitch/docker-config-update)](https://github.com/sudo-bmitch/docker-config-update) :ice_cube: - Utility to update docker configs and secrets for deploying in a compose file.
- [elsy ![GitHub Repo Stars](https://img.shields.io/github/stars/cisco/elsy) ![GitHub last commit](https://img.shields.io/github/last-commit/cisco/elsy)](https://github.com/cisco/elsy) :ice_cube: - An opinionated, multi-language, build tool based on Docker and Docker Compose.
- [habitus ![GitHub Repo Stars](https://img.shields.io/github/stars/cloud66-oss/habitus) ![GitHub last commit](https://img.shields.io/github/last-commit/cloud66-oss/habitus)](https://github.com/cloud66-oss/habitus) :ice_cube: - A Build Flow Tool for Docker.
- [kompose ![GitHub Repo Stars](https://img.shields.io/github/stars/kubernetes/kompose) ![GitHub last commit](https://img.shields.io/github/last-commit/kubernetes/kompose)](https://github.com/kubernetes/kompose) - Go from Docker Compose to Kubernetes.
- [LLM Harbor ![GitHub Repo Stars](https://img.shields.io/github/stars/av/harbor) ![GitHub last commit](https://img.shields.io/github/last-commit/av/harbor)](https://github.com/av/harbor) - A CLI and companion app to effortlessly run LLM backends, APIs, frontends, and services with one command. By [av](https://github.com/av).
- [plash ![GitHub Repo Stars](https://img.shields.io/github/stars/ihucos/plash) ![GitHub last commit](https://img.shields.io/github/last-commit/ihucos/plash)](https://github.com/ihucos/plash) - A container run and build engine - runs inside docker.
- [podman-compose ![GitHub Repo Stars](https://img.shields.io/github/stars/containers/podman-compose) ![GitHub last commit](https://img.shields.io/github/last-commit/containers/podman-compose)](https://github.com/containers/podman-compose) - A script to run docker-compose.yml using podman.
-   [Smalte ![GitHub Repo Stars](https://img.shields.io/github/stars/roquie/smalte) ![GitHub last commit](https://img.shields.io/github/last-commit/roquie/smalte)](https://github.com/roquie/smalte) – Dynamically configure applications that require static configuration in docker container. By [roquie](https://github.com/roquie)
- [Stitchocker ![GitHub Repo Stars](https://img.shields.io/github/stars/alexaandrov/stitchocker) ![GitHub last commit](https://img.shields.io/github/last-commit/alexaandrov/stitchocker)](https://github.com/alexaandrov/stitchocker) - A lightweight and fast command line utility for conveniently grouping your docker-compose multiple container services. By [alexaandrov](https://github.com/alexaandrov).

### Deployment and Infrastructure

- [awesome-stacks ![GitHub Repo Stars](https://img.shields.io/github/stars/ethibox/awesome-stacks) ![GitHub last commit](https://img.shields.io/github/last-commit/ethibox/awesome-stacks)](https://github.com/ethibox/awesome-stacks) - Deploy 150+ open-source web apps with one Docker command.
- [blackfish](https://gitlab.com/blackfish/blackfish) - A CoreOS VM to build swarm clusters for Dev & Production.
- [BosnD](https://gitlab.com/n0r1sk/bosnd) - BosnD, the boatswain daemon - A dynamic configuration file writer & service reloader for dynamically changing container environments.
- [Clocker ![GitHub Repo Stars](https://img.shields.io/github/stars/brooklyncentral/clocker) ![GitHub last commit](https://img.shields.io/github/last-commit/brooklyncentral/clocker)](https://github.com/brooklyncentral/clocker) :ice_cube: - Clocker creates and manages a Docker cloud infrastructure. Clocker supports single-click deployments and runtime management of multi-node applications that run as containers distributed across multiple hosts, on both Docker and Marathon. It leverages [Calico][calico] and [Weave][weave] for networking and [Brooklyn](https://brooklyn.apache.org/) for application blueprints. By [brooklyncentral](https://github.com/brooklyncentral).
- [Conduit ![GitHub Repo Stars](https://img.shields.io/github/stars/ehazlett/conduit) ![GitHub last commit](https://img.shields.io/github/last-commit/ehazlett/conduit)](https://github.com/ehazlett/conduit) :ice_cube: - Experimental deployment system for Docker.
- [depcon ![GitHub Repo Stars](https://img.shields.io/github/stars/ContainX/depcon) ![GitHub last commit](https://img.shields.io/github/last-commit/ContainX/depcon)](https://github.com/ContainX/depcon) :ice_cube: - Depcon is written in Go and allows you to easily deploy Docker containers to Apache Mesos/Marathon, Amazon ECS and Kubernetes. By [ContainX][containx].
- [docker-to-iac ![GitHub Repo Stars](https://img.shields.io/github/stars/deploystackio/docker-to-iac) ![GitHub last commit](https://img.shields.io/github/last-commit/deploystackio/docker-to-iac)](https://github.com/deploystackio/docker-to-iac) - Translate docker run and commit into Infrastructure as Code templates for AWS, Render.com and DigitalOcean.
- [gitkube ![GitHub Repo Stars](https://img.shields.io/github/stars/hasura/gitkube) ![GitHub last commit](https://img.shields.io/github/last-commit/hasura/gitkube)](https://github.com/hasura/gitkube) :ice_cube: - Gitkube is a tool for building and deploying docker images on Kubernetes using `git push`. By [Hasura](https://github.com/hasura/).
- [Grafeas ![GitHub Repo Stars](https://img.shields.io/github/stars/grafeas/grafeas) ![GitHub last commit](https://img.shields.io/github/last-commit/grafeas/grafeas)](https://github.com/grafeas/grafeas) - A common API for metadata about containers, from image and build details to security vulnerabilities. By [grafeas](https://github.com/grafeas).
- [swarm-ansible ![GitHub Repo Stars](https://img.shields.io/github/stars/LombardiDaniel/swarm-ansible) ![GitHub last commit](https://img.shields.io/github/last-commit/LombardiDaniel/swarm-ansible)](https://github.com/LombardiDaniel/swarm-ansible?tab=readme-ov-file) - Swarm-Ansible bootstraps a production-ready swarm cluster using ansible. Comes with tools to automate CI, help monitoring and traefik pre-configured for SSL certificates and simple-auth. Comes with a private registry and more!.
- [SwarmManagement ![GitHub Repo Stars](https://img.shields.io/github/stars/hansehe/SwarmManagement) ![GitHub last commit](https://img.shields.io/github/last-commit/hansehe/SwarmManagement)](https://github.com/hansehe/SwarmManagement) - Swarm Management is a python application, installed with pip. The application makes it easy to manage a Docker Swarm by configuring a single yaml file describing which stacks to deploy, and which networks, configs or secrets to create.
- [werf ![GitHub Repo Stars](https://img.shields.io/github/stars/werf/werf) ![GitHub last commit](https://img.shields.io/github/last-commit/werf/werf)](https://github.com/werf/werf) - Werf is a CI/CD tool for building Docker images efficiently and deploying them to Kubernetes using GitOps.

### Monitoring

- [ADRG ![GitHub Repo Stars](https://img.shields.io/github/stars/jaldertech/adrg) ![GitHub last commit](https://img.shields.io/github/last-commit/jaldertech/adrg)](https://github.com/jaldertech/adrg) - Dynamic Docker resource governor using cgroups v2 to manage system load.
- [Autoheal ![GitHub Repo Stars](https://img.shields.io/github/stars/willfarrell/docker-autoheal) ![GitHub last commit](https://img.shields.io/github/last-commit/willfarrell/docker-autoheal)](https://github.com/willfarrell/docker-autoheal) - Monitor and restart unhealthy docker containers automatically.
- [cAdvisor ![GitHub Repo Stars](https://img.shields.io/github/stars/google/cadvisor) ![GitHub last commit](https://img.shields.io/github/last-commit/google/cadvisor)](https://github.com/google/cadvisor) - Analyzes resource usage and performance characteristics of running containers.
- [Checkmate ![GitHub Repo Stars](https://img.shields.io/github/stars/bluewave-labs/checkmate) ![GitHub last commit](https://img.shields.io/github/last-commit/bluewave-labs/checkmate)](https://github.com/bluewave-labs/checkmate) - Checkmate is an open-source, self-hosted tool designed to track and monitor server hardware, uptime, response times, and incidents in real-time with beautiful visualizations.
- [DLIA ![GitHub Repo Stars](https://img.shields.io/github/stars/zorak1103/dlia) ![GitHub last commit](https://img.shields.io/github/last-commit/zorak1103/dlia)](https://github.com/zorak1103/dlia) - DLIA is an AI-powered Docker log monitoring agent that uses Large Language Models (LLMs) to intelligently analyze container logs, detect anomalies, and provide contextual insights over time. By [zorak1103](https://github.com/zorak1103).
- [Docker-Alertd ![GitHub Repo Stars](https://img.shields.io/github/stars/deltaskelta/docker-alertd) ![GitHub last commit](https://img.shields.io/github/last-commit/deltaskelta/docker-alertd)](https://github.com/deltaskelta/docker-alertd) :ice_cube: - Monitor and send alerts based on docker container resource usage/statistics.
- [Docker-Flow-Monitor ![GitHub Repo Stars](https://img.shields.io/github/stars/docker-flow/docker-flow-monitor) ![GitHub last commit](https://img.shields.io/github/last-commit/docker-flow/docker-flow-monitor)](https://github.com/docker-flow/docker-flow-monitor) :ice_cube: - Reconfigures Prometheus when a new service is updated or deployed automatically.
- [Docker-Sentinel ![GitHub Repo Stars](https://img.shields.io/github/stars/Will-Luck/Docker-Sentinel) ![GitHub last commit](https://img.shields.io/github/last-commit/Will-Luck/Docker-Sentinel)](https://github.com/Will-Luck/Docker-Sentinel) - Automated container updates with per-container policies, rollback safety, and a real-time web dashboard. By [Will-Luck](https://github.com/Will-Luck).
- [DockProbe ![GitHub Repo Stars](https://img.shields.io/github/stars/deep-on/dockprobe) ![GitHub last commit](https://img.shields.io/github/last-commit/deep-on/dockprobe)](https://github.com/deep-on/dockprobe) - Lightweight Docker monitoring dashboard in a single container. Real-time metrics, 6 anomaly detection rules, Telegram alerts, and 16 automated security scans. Zero config, ~50MB RAM. By [DeepOn](https://github.com/deep-on).
- [DockProc](https://gitlab.com/n0r1sk/dockproc) - I/O monitoring for containers on processlevel.
- [dockprom ![GitHub Repo Stars](https://img.shields.io/github/stars/stefanprodan/dockprom) ![GitHub last commit](https://img.shields.io/github/last-commit/stefanprodan/dockprom)](https://github.com/stefanprodan/dockprom) - Docker hosts and containers monitoring with Prometheus, Grafana, cAdvisor, NodeExporter and AlertManager.
- [Doku ![GitHub Repo Stars](https://img.shields.io/github/stars/amerkurev/doku) ![GitHub last commit](https://img.shields.io/github/last-commit/amerkurev/doku)](https://github.com/amerkurev/doku) - Doku is a simple web-based application that allows you to monitor Docker disk usage. [amerkurev](https://github.com/amerkurev).
- [Dozzle](dozzle) - Monitor container logs in real-time with a browser or mobile device. [amir20](https://github.com/amir20).
- [Drydock ![GitHub Repo Stars](https://img.shields.io/github/stars/CodesWhat/drydock) ![GitHub last commit](https://img.shields.io/github/last-commit/CodesWhat/drydock)](https://github.com/CodesWhat/drydock) - Container update monitoring with web dashboard, 23 registry providers, 20 notification triggers, and distributed agent architecture. By [CodesWhat](https://github.com/CodesWhat).
- [Dynatrace](https://docs.dynatrace.com/docs/observe/infrastructure-observability/container-platform-monitoring) - :yen: Monitor containerized applications without installing agents or modifying your Run commands.
- [Glances ![GitHub Repo Stars](https://img.shields.io/github/stars/nicolargo/glances) ![GitHub last commit](https://img.shields.io/github/last-commit/nicolargo/glances)](https://github.com/nicolargo/glances) - A cross-platform curses-based system monitoring tool written in Python.
- [Grafana Docker Dashboard Template](https://grafana.com/grafana/dashboards/179-docker-prometheus-monitoring/) - A template for your Docker, Grafana and Prometheus stack [vegasbrianc][vegasbrianc].
- [HertzBeat ![GitHub Repo Stars](https://img.shields.io/github/stars/dromara/hertzbeat) ![GitHub last commit](https://img.shields.io/github/last-commit/dromara/hertzbeat)](https://github.com/dromara/hertzbeat) - An open-source real-time monitoring system with custom-monitor and agentless.

- [InfluxDB, cAdvisor, Grafana ![GitHub Repo Stars](https://img.shields.io/github/stars/vegasbrianc/docker-monitoring) ![GitHub last commit](https://img.shields.io/github/last-commit/vegasbrianc/docker-monitoring)](https://github.com/vegasbrianc/docker-monitoring) :ice_cube: - InfluxDB Time series DB in combination with Grafana and cAdvisor.
- [Logspout ![GitHub Repo Stars](https://img.shields.io/github/stars/gliderlabs/logspout) ![GitHub last commit](https://img.shields.io/github/last-commit/gliderlabs/logspout)](https://github.com/gliderlabs/logspout) :ice_cube: - Log routing for Docker container logs.
- [Maintenant ![GitHub Repo Stars](https://img.shields.io/github/stars/kolapsis/maintenant) ![GitHub last commit](https://img.shields.io/github/last-commit/kolapsis/maintenant)](https://github.com/kolapsis/maintenant) - Self-discovering infrastructure monitoring for Docker and Kubernetes. Auto-detects containers via labels, with endpoint monitoring, heartbeats, TLS certificates, resource metrics, update intelligence, and a built-in status page. Single binary with embedded SPA. By [kolapsis](https://github.com/kolapsis).
- [monit-docker ![GitHub Repo Stars](https://img.shields.io/github/stars/decryptus/monit-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/decryptus/monit-docker)](https://github.com/decryptus/monit-docker) :ice_cube: - Monitor docker containers resources usage or status and execute docker commands or inside containers. [decryptus][decryptus].
- [NexClipper ![GitHub Repo Stars](https://img.shields.io/github/stars/NexClipper/NexClipper) ![GitHub last commit](https://img.shields.io/github/last-commit/NexClipper/NexClipper)](https://github.com/NexClipper/NexClipper) :ice_cube: - NexClipper is the container monitoring and performance management solution specialized in Docker, Apache Mesos, Marathon, DC/OS, Mesosphere, Kubernetes.
- [Out-of-the-box Host/Container Monitoring/Logging/Alerting Stack ![GitHub Repo Stars](https://img.shields.io/github/stars/uschtwill/docker_monitoring_logging_alerting) ![GitHub last commit](https://img.shields.io/github/last-commit/uschtwill/docker_monitoring_logging_alerting)](https://github.com/uschtwill/docker_monitoring_logging_alerting) :ice_cube: - Docker host and container monitoring, logging and alerting out of the box using cAdvisor, Prometheus, Grafana for monitoring, Elasticsearch, Kibana and Logstash for logging and elastalert and Alertmanager for alerting. Set up in 5 Minutes. Secure mode for production use with built-in [Automated Nginx Reverse Proxy (jwilder's)][nginxproxy].
- [Sidekick ![GitHub Repo Stars](https://img.shields.io/github/stars/runsidekick/sidekick) ![GitHub last commit](https://img.shields.io/github/last-commit/runsidekick/sidekick)](https://github.com/runsidekick/sidekick) :ice_cube: - Open source live application debugger like Chrome DevTools for your backend. Collect traces and generate logs on-demand without stopping & redeploying your applications.
- [SwarmAlert ![GitHub Repo Stars](https://img.shields.io/github/stars/gpulido/SwarmAlert) ![GitHub last commit](https://img.shields.io/github/last-commit/gpulido/SwarmAlert)](https://github.com/gpulido/SwarmAlert) :ice_cube: - Monitors a Docker Swarm and sends Pushover alerts when it finds a container with no healthy service task running.
- [Wiremap ![GitHub Repo Stars](https://img.shields.io/github/stars/codeofmario/wiremap) ![GitHub last commit](https://img.shields.io/github/last-commit/codeofmario/wiremap)](https://github.com/codeofmario/wiremap) - A self-hosted visual Docker network topology explorer with real-time log streaming, live stats, embedded terminal, and container inspection. By [codeofmario](https://github.com/codeofmario).
- [Zabbix Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/gomex/docker-zabbix) ![GitHub last commit](https://img.shields.io/github/last-commit/gomex/docker-zabbix)](https://github.com/gomex/docker-zabbix) :ice_cube: - Monitor containers automatically using zabbix LLD feature.
- [Zabbix Docker module ![GitHub Repo Stars](https://img.shields.io/github/stars/monitoringartist/Zabbix-Docker-Monitoring) ![GitHub last commit](https://img.shields.io/github/last-commit/monitoringartist/Zabbix-Docker-Monitoring)](https://github.com/monitoringartist/Zabbix-Docker-Monitoring) :ice_cube: - Zabbix module that provides discovery of running containers, CPU/memory/blk IO/net container metrics. Systemd Docker and LXC execution driver is also supported. It's a dynamically linked shared object library, so its performance is (~10x) better, than any script solution.
### Networking

-   [Calico][calico] - Calico is a pure layer 3 virtual network that allows containers over multiple docker-hosts to talk to each other.
- [Flannel ![GitHub Repo Stars](https://img.shields.io/github/stars/coreos/flannel) ![GitHub last commit](https://img.shields.io/github/last-commit/coreos/flannel)](https://github.com/coreos/flannel/) - Flannel is a virtual network that gives a subnet to each host for use with container runtimes. By [coreos][coreos].
- [Freeflow ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/Freeflow) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/Freeflow)](https://github.com/Microsoft/Freeflow) :ice_cube: - High performance container overlay networks on Linux. Enabling RDMA (on both InfiniBand and RoCE) and accelerating TCP to bare metal performance. By [Microsoft](https://github.com/Microsoft).
- [MyIP ![GitHub Repo Stars](https://img.shields.io/github/stars/jason5ng32/MyIP) ![GitHub last commit](https://img.shields.io/github/last-commit/jason5ng32/MyIP)](https://github.com/jason5ng32/MyIP) - All in one IP Toolbox. Easy to check all your IPs, IP geolocation, check for DNS leaks, examine WebRTC connections, speed test, ping test, MTR test, check website availability, whois search and more. By [jason5ng32](https://github.com/jason5ng32).
- [netshoot ![GitHub Repo Stars](https://img.shields.io/github/stars/nicolaka/netshoot) ![GitHub last commit](https://img.shields.io/github/last-commit/nicolaka/netshoot)](https://github.com/nicolaka/netshoot) - The netshoot container has a powerful set of networking tools to help troubleshoot Docker networking issues.
- [Pipework ![GitHub Repo Stars](https://img.shields.io/github/stars/jpetazzo/pipework) ![GitHub last commit](https://img.shields.io/github/last-commit/jpetazzo/pipework)](https://github.com/jpetazzo/pipework) - Software-Defined Networking for Linux Containers, Pipework works with "plain" LXC containers, and with the awesome Docker. By [jpetazzo][jpetazzo].

### Orchestration

- [Ansible Linux Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/Peco602/ansible-linux-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/Peco602/ansible-linux-docker)](https://github.com/Peco602/ansible-linux-docker) :ice_cube: - Run Ansible from a Linux container. By [Peco602][peco602].
- [athena ![GitHub Repo Stars](https://img.shields.io/github/stars/athena-oss/athena) ![GitHub last commit](https://img.shields.io/github/last-commit/athena-oss/athena)](https://github.com/athena-oss/athena) :ice_cube: - An automation platform with a plugin architecture that allows you to easily create and share services.
- [CloudSlang ![GitHub Repo Stars](https://img.shields.io/github/stars/CloudSlang/cloud-slang) ![GitHub last commit](https://img.shields.io/github/last-commit/CloudSlang/cloud-slang)](https://github.com/CloudSlang/cloud-slang) - CloudSlang is a workflow engine to create Docker process automation.
- [clusterdock ![GitHub Repo Stars](https://img.shields.io/github/stars/clusterdock/clusterdock) ![GitHub last commit](https://img.shields.io/github/last-commit/clusterdock/clusterdock)](https://github.com/clusterdock/clusterdock) :ice_cube: - Docker container orchestration to enable the testing of long-running cluster deployments.
- [Crane ![GitHub Repo Stars](https://img.shields.io/github/stars/Dataman-Cloud/crane) ![GitHub last commit](https://img.shields.io/github/last-commit/Dataman-Cloud/crane)](https://github.com/Dataman-Cloud/crane) :ice_cube: - Control plane based on docker built-in swarm [Dataman-Cloud](https://github.com/Dataman-Cloud).
- [Docker Flow Swarm Listener ![GitHub Repo Stars](https://img.shields.io/github/stars/docker-flow/docker-flow-swarm-listener) ![GitHub last commit](https://img.shields.io/github/last-commit/docker-flow/docker-flow-swarm-listener)](https://github.com/docker-flow/docker-flow-swarm-listener) :ice_cube: - Docker Flow Swarm Listener project is to listen to Docker Swarm events and send requests when a change occurs. By [docker-flow][docker-flow].
- [docker rollout ![GitHub Repo Stars](https://img.shields.io/github/stars/Wowu/docker-rollout) ![GitHub last commit](https://img.shields.io/github/last-commit/Wowu/docker-rollout)](https://github.com/Wowu/docker-rollout) - Zero downtime deployment for Docker Compose services.
- [Haven ![GitHub Repo Stars](https://img.shields.io/github/stars/codeabovelab/haven-platform) ![GitHub last commit](https://img.shields.io/github/last-commit/codeabovelab/haven-platform)](https://github.com/codeabovelab/haven-platform) :ice_cube: - Haven is a simplified container management platform that integrates container, application, cluster, image, and registry managements. By [codeabovelab](https://github.com/codeabovelab).
- [Kubernetes ![GitHub Repo Stars](https://img.shields.io/github/stars/kubernetes/kubernetes) ![GitHub last commit](https://img.shields.io/github/last-commit/kubernetes/kubernetes)](https://github.com/kubernetes/kubernetes) - Open source orchestration system for Docker containers by Google.
- [ManageIQ ![GitHub Repo Stars](https://img.shields.io/github/stars/ManageIQ/manageiq) ![GitHub last commit](https://img.shields.io/github/last-commit/ManageIQ/manageiq)](https://github.com/ManageIQ/manageiq) - Discover, optimize and control your hybrid IT. By [ManageIQ](https://github.com/ManageIQ).
- [Mesos ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/mesos) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/mesos)](https://github.com/apache/mesos) - Resource/Job scheduler for containers, VM's and physical hosts [apache](https://mesos.apache.org/).
- [Nebula](https://github.com/nebula-orchestrator) - A Docker orchestration tool designed to manage massive scale distributed clusters.
- [Nomad ![GitHub Repo Stars](https://img.shields.io/github/stars/hashicorp/nomad) ![GitHub last commit](https://img.shields.io/github/last-commit/hashicorp/nomad)](https://github.com/hashicorp/nomad) - Easily deploy applications at any scale. A Distributed, Highly Available, Datacenter-Aware Scheduler.
- [Rancher ![GitHub Repo Stars](https://img.shields.io/github/stars/rancher/rancher) ![GitHub last commit](https://img.shields.io/github/last-commit/rancher/rancher)](https://github.com/rancher/rancher) - An open source project that provides a complete platform for operating Docker in production.
- [RedHerd Framework ![GitHub Repo Stars](https://img.shields.io/github/stars/redherd-project/redherd-framework) ![GitHub last commit](https://img.shields.io/github/last-commit/redherd-project/redherd-framework)](https://github.com/redherd-project/redherd-framework) :ice_cube: - RedHerd is a collaborative and serverless framework for orchestrating a geographically distributed group of assets capable of simulating complex offensive cyberspace operations. By [RedHerdProject](https://github.com/redherd-project).
- [Swarm-cronjob ![GitHub Repo Stars](https://img.shields.io/github/stars/crazy-max/swarm-cronjob) ![GitHub last commit](https://img.shields.io/github/last-commit/crazy-max/swarm-cronjob)](https://github.com/crazy-max/swarm-cronjob) - Create jobs on a time-based schedule on Swarm by [crazy-max].

### PaaS

- [caprover ![GitHub Repo Stars](https://img.shields.io/github/stars/caprover/caprover) ![GitHub last commit](https://img.shields.io/github/last-commit/caprover/caprover)](https://github.com/caprover/caprover) - [Previously known as CaptainDuckDuck] Automated Scalable Webserver Package (automated Docker+nginx) - Heroku on Steroids.
- [Convox Rack ![GitHub Repo Stars](https://img.shields.io/github/stars/convox/rack) ![GitHub last commit](https://img.shields.io/github/last-commit/convox/rack)](https://github.com/convox/rack) - Convox Rack is open source PaaS built on top of expert infrastructure automation and devops best practices.
- [Dcw ![GitHub Repo Stars](https://img.shields.io/github/stars/pbertera/dcw) ![GitHub last commit](https://img.shields.io/github/last-commit/pbertera/dcw)](https://github.com/pbertera/dcw) :ice_cube: - Docker-compose SSH wrapper: a very poor man PaaS, exposing the docker-compose and custom-container commands defined in container labels.
- [Dokku ![GitHub Repo Stars](https://img.shields.io/github/stars/dokku/dokku) ![GitHub last commit](https://img.shields.io/github/last-commit/dokku/dokku)](https://github.com/dokku/dokku) - Docker powered mini-Heroku that helps you build and manage the lifecycle of applications (originally by [progrium][progrium]).
- [Empire ![GitHub Repo Stars](https://img.shields.io/github/stars/remind101/empire) ![GitHub last commit](https://img.shields.io/github/last-commit/remind101/empire)](https://github.com/remind101/empire) :ice_cube: - A PaaS built on top of Amazon EC2 Container Service (ECS).
- [Exoframe ![GitHub Repo Stars](https://img.shields.io/github/stars/exoframejs/exoframe) ![GitHub last commit](https://img.shields.io/github/last-commit/exoframejs/exoframe)](https://github.com/exoframejs/exoframe) - A self-hosted tool that allows simple one-command deployments using Docker.
- [Hephy Workflow ![GitHub Repo Stars](https://img.shields.io/github/stars/teamhephy/workflow) ![GitHub last commit](https://img.shields.io/github/last-commit/teamhephy/workflow)](https://github.com/teamhephy/workflow) :ice_cube: - Open source PaaS for Kubernetes that adds a developer-friendly layer to any Kubernetes cluster, making it easy to deploy and manage applications. Fork of [Deis Workflow ![GitHub Repo Stars](https://img.shields.io/github/stars/deis/workflow) ![GitHub last commit](https://img.shields.io/github/last-commit/deis/workflow)](https://github.com/deis/workflow).
- [Krane ![GitHub Repo Stars](https://img.shields.io/github/stars/krane/krane) ![GitHub last commit](https://img.shields.io/github/last-commit/krane/krane)](https://github.com/krane/krane) :ice_cube: - Toolset for managing container workloads on remote servers.
- [Nanobox ![GitHub Repo Stars](https://img.shields.io/github/stars/nanobox-io/nanobox) ![GitHub last commit](https://img.shields.io/github/last-commit/nanobox-io/nanobox)](https://github.com/nanobox-io/nanobox) :ice_cube: - :yen: An application development platform that creates local environments that can then be deployed and scaled in the cloud.
-   [OpenShift][openshift] - An open source PaaS built on [Kubernetes][kubernetes] and optimized for Dockerized app development and deployment by [Red Hat](https://www.redhat.com/en)
- [Tsuru ![GitHub Repo Stars](https://img.shields.io/github/stars/tsuru/tsuru) ![GitHub last commit](https://img.shields.io/github/last-commit/tsuru/tsuru)](https://github.com/tsuru/tsuru) - Tsuru is an extensible and open source Platform as a Service software.

### Reverse Proxy

- [BunkerWeb ![GitHub Repo Stars](https://img.shields.io/github/stars/bunkerity/bunkerweb) ![GitHub last commit](https://img.shields.io/github/last-commit/bunkerity/bunkerweb)](https://github.com/bunkerity/bunkerweb) - Open-source and next-gen Web Application Firewall (WAF). By [Bunkerity](https://www.bunkerity.com).
- [caddy-docker-proxy ![GitHub Repo Stars](https://img.shields.io/github/stars/lucaslorentz/caddy-docker-proxy) ![GitHub last commit](https://img.shields.io/github/last-commit/lucaslorentz/caddy-docker-proxy)](https://github.com/lucaslorentz/caddy-docker-proxy) - Caddy-based reverse proxy, configured with service or container labels. By [lucaslorentz](https://github.com/lucaslorentz).
- [caddy-docker-upstreams ![GitHub Repo Stars](https://img.shields.io/github/stars/invzhi/caddy-docker-upstreams) ![GitHub last commit](https://img.shields.io/github/last-commit/invzhi/caddy-docker-upstreams)](https://github.com/invzhi/caddy-docker-upstreams) - Docker upstreams module for Caddy, configured with container labels. By [invzhi](https://github.com/invzhi).
- [Docker Dnsmasq Updater ![GitHub Repo Stars](https://img.shields.io/github/stars/moonbuggy/docker-dnsmasq-updater) ![GitHub last commit](https://img.shields.io/github/last-commit/moonbuggy/docker-dnsmasq-updater)](https://github.com/moonbuggy/docker-dnsmasq-updater) - Update a remote dnsmasq server with Docker container hostnames.
- [docker-flow-proxy ![GitHub Repo Stars](https://img.shields.io/github/stars/docker-flow/docker-flow-proxy) ![GitHub last commit](https://img.shields.io/github/last-commit/docker-flow/docker-flow-proxy)](https://github.com/docker-flow/docker-flow-proxy) - Reconfigures proxy every time a new service is deployed, or when a service is scaled. By [docker-flow][docker-flow].
- [fabio ![GitHub Repo Stars](https://img.shields.io/github/stars/fabiolb/fabio) ![GitHub last commit](https://img.shields.io/github/last-commit/fabiolb/fabio)](https://github.com/fabiolb/fabio) - A fast, modern, zero-conf load balancing HTTP(S) router for deploying microservices managed by consul. By [magiconair](https://github.com/magiconair) (Frank Schroeder).
- [idle-less ![GitHub Repo Stars](https://img.shields.io/github/stars/tvup/idle-less) ![GitHub last commit](https://img.shields.io/github/last-commit/tvup/idle-less)](https://github.com/tvup/idle-less) - Reverse proxy with automatic Wake-on-LAN — wakes sleeping backend servers when traffic arrives, shows a waiting screen, and redirects when ready. By [tvup](https://github.com/tvup).
- [Let's Encrypt Nginx-proxy Companion ![GitHub Repo Stars](https://img.shields.io/github/stars/nginx-proxy/docker-letsencrypt-nginx-proxy-companion) ![GitHub last commit](https://img.shields.io/github/last-commit/nginx-proxy/docker-letsencrypt-nginx-proxy-companion)](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion) - A lightweight companion container for the nginx-proxy. It allow the creation/renewal of Let's Encrypt certificates automatically. By [JrCs](https://github.com/JrCs).
- [mesh-router ![GitHub Repo Stars](https://img.shields.io/github/stars/Yundera/mesh-router) ![GitHub last commit](https://img.shields.io/github/last-commit/Yundera/mesh-router)](https://github.com/Yundera/mesh-router) - Free domain(nsl.sh) provider for Docker containers with automatic HTTPS routing. Uses Wireguard VPN to securely route subdomain requests across networks. Ideal for self-hosted NAS and cloud deployments. By [Yundera](https://github.com/Yundera).
- [Nginx Proxy Manager ![GitHub Repo Stars](https://img.shields.io/github/stars/jc21/nginx-proxy-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/jc21/nginx-proxy-manager)](https://github.com/jc21/nginx-proxy-manager) - A beautiful web interface for proxying web based services with SSL. By [jc21](https://github.com/jc21).
-   [nginx-proxy][nginxproxy] - Automated nginx proxy for Docker containers using docker-gen by [jwilder][jwilder]
- [OpenResty Manager ![GitHub Repo Stars](https://img.shields.io/github/stars/Safe3/openresty-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/Safe3/openresty-manager)](https://github.com/Safe3/openresty-manager) - The easiest using, powerful and beautiful OpenResty Manager(Nginx Enhanced Version), open source alternative to OpenResty Edge. By [Safe3](https://github.com/Safe3/).
- [Swarm Router ![GitHub Repo Stars](https://img.shields.io/github/stars/flavioaiello/swarm-router) ![GitHub last commit](https://img.shields.io/github/last-commit/flavioaiello/swarm-router)](https://github.com/flavioaiello/swarm-router) - A «zero config» service name based router for docker swarm mode with a fresh and more secure approach. By [flavioaiello](https://github.com/flavioaiello).
- [Træfɪk ![GitHub Repo Stars](https://img.shields.io/github/stars/containous/traefik) ![GitHub last commit](https://img.shields.io/github/last-commit/containous/traefik)](https://github.com/containous/traefik) - Automated reverse proxy and load-balancer for Docker, Mesos, Consul, Etcd... By [EmileVauge](https://github.com/emilevauge).

### Runtime

- [cri-o ![GitHub Repo Stars](https://img.shields.io/github/stars/cri-o/cri-o) ![GitHub last commit](https://img.shields.io/github/last-commit/cri-o/cri-o)](https://github.com/cri-o/cri-o) - Open Container Initiative-based implementation of Kubernetes Container Runtime Interface by [cri-o](https://github.com/cri-o).
- [lxc ![GitHub Repo Stars](https://img.shields.io/github/stars/lxc/lxc) ![GitHub last commit](https://img.shields.io/github/last-commit/lxc/lxc)](https://github.com/lxc/lxc) - LXC - Linux Containers.
- [Mocker ![GitHub Repo Stars](https://img.shields.io/github/stars/us/mocker) ![GitHub last commit](https://img.shields.io/github/last-commit/us/mocker)](https://github.com/us/mocker) - Docker-compatible container CLI for macOS, built on Apple's Containerization framework. By [us](https://github.com/us).
- [podman ![GitHub Repo Stars](https://img.shields.io/github/stars/containers/libpod) ![GitHub last commit](https://img.shields.io/github/last-commit/containers/libpod)](https://github.com/containers/libpod) - Libpod is a library used to create container pods. Home of Podman.
- [rlxc ![GitHub Repo Stars](https://img.shields.io/github/stars/brauner/rlxc) ![GitHub last commit](https://img.shields.io/github/last-commit/brauner/rlxc)](https://github.com/brauner/rlxc) :ice_cube: - LXC binary written in Rust.
- [runtime-tools ![GitHub Repo Stars](https://img.shields.io/github/stars/opencontainers/runtime-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/opencontainers/runtime-tools)](https://github.com/opencontainers/runtime-tools) - Oci-runtime-tool is a collection of tools for working with the OCI runtime specification.

### Security

- [Anchor ![GitHub Repo Stars](https://img.shields.io/github/stars/SongStitch/anchor) ![GitHub last commit](https://img.shields.io/github/last-commit/SongStitch/anchor)](https://github.com/SongStitch/anchor/) - A tool to ensure reproducible builds by pinning dependencies inside your Dockerfiles [SongStitch](https://github.com/songStitch/).
- [Anchor Enterprise](https://anchore.com/) - :yen: Analyze images for CVE vulnerabilities and against custom security policies.
- [Aqua Security](https://www.aquasec.com) - :yen: Securing container-based applications from Dev to Production on any platform.
- [bane ![GitHub Repo Stars](https://img.shields.io/github/stars/genuinetools/bane) ![GitHub last commit](https://img.shields.io/github/last-commit/genuinetools/bane)](https://github.com/genuinetools/bane) :ice_cube: - AppArmor profile generator for Docker containers.
- [buildcage ![GitHub Repo Stars](https://img.shields.io/github/stars/dash14/buildcage) ![GitHub last commit](https://img.shields.io/github/last-commit/dash14/buildcage)](https://github.com/dash14/buildcage) - Restricts outbound network access during Docker builds to prevent supply chain attacks, working as a drop-in BuildKit remote driver for Docker Buildx, with ready-to-use GitHub Actions.
- [CetusGuard ![GitHub Repo Stars](https://img.shields.io/github/stars/hectorm/cetusguard) ![GitHub last commit](https://img.shields.io/github/last-commit/hectorm/cetusguard)](https://github.com/hectorm/cetusguard) - CetusGuard is a tool that protects the Docker daemon socket by filtering calls to its API endpoints.
- [Checkov ![GitHub Repo Stars](https://img.shields.io/github/stars/bridgecrewio/checkov) ![GitHub last commit](https://img.shields.io/github/last-commit/bridgecrewio/checkov)](https://github.com/bridgecrewio/checkov) - Static analysis for infrastructure as code manifests (Terraform, Kubernetes, Cloudformation, Helm, Dockerfile, Kustomize) find security misconfiguration and fix them. By [bridgecrew](https://github.com/bridgecrewio).
- [CIS Docker Benchmark ![GitHub Repo Stars](https://img.shields.io/github/stars/dev-sec/cis-docker-benchmark) ![GitHub last commit](https://img.shields.io/github/last-commit/dev-sec/cis-docker-benchmark)](https://github.com/dev-sec/cis-docker-benchmark) :ice_cube: - This [InSpec][inspec] compliance profile implement the CIS Docker 1.12.0 Benchmark in an automated way to provide security best-practice tests around Docker daemon and containers in a production environment. By [dev-sec](https://github.com/dev-sec).
- [Clair ![GitHub Repo Stars](https://img.shields.io/github/stars/quay/clair) ![GitHub last commit](https://img.shields.io/github/last-commit/quay/clair)](https://github.com/quay/clair) - Clair is an open source project for the static analysis of vulnerabilities in appc and docker containers. By [coreos][coreos].
- [crowdsec-blocklist-import ![GitHub Repo Stars](https://img.shields.io/github/stars/wolffcatskyy/crowdsec-blocklist-import) ![GitHub last commit](https://img.shields.io/github/last-commit/wolffcatskyy/crowdsec-blocklist-import)](https://github.com/wolffcatskyy/crowdsec-blocklist-import) - Aggregates 36 free threat intelligence feeds into 120k+ malicious IPs for CrowdSec bouncers, providing 10-20x more blocks than default lists. By [wolffcatskyy](https://github.com/wolffcatskyy).
- [Dagda ![GitHub Repo Stars](https://img.shields.io/github/stars/eliasgranderubio/dagda) ![GitHub last commit](https://img.shields.io/github/last-commit/eliasgranderubio/dagda)](https://github.com/eliasgranderubio/dagda) :ice_cube: - Dagda is a tool to perform static analysis of known vulnerabilities, trojans, viruses, malware & other malicious threats in docker images/containers and to monitor the docker daemon and running docker containers for detecting anomalous activities. By [eliasgranderubio](https://github.com/eliasgranderubio).
- [Den ![GitHub Repo Stars](https://img.shields.io/github/stars/us/den) ![GitHub last commit](https://img.shields.io/github/last-commit/us/den)](https://github.com/us/den) - Self-hosted sandbox runtime for AI agents with Docker containers, security hardening, REST API and WebSocket support. By [us](https://github.com/us).
- [Deepfence Enterprise](https://deepfence.io) - :yen: Full life cycle Cloud Native Workload Protection platform for kubernetes, virtual machines and serverless. By [deepfence][deepfence].
- [Deepfence Threat Mapper ![GitHub Repo Stars](https://img.shields.io/github/stars/deepfence/ThreatMapper) ![GitHub last commit](https://img.shields.io/github/last-commit/deepfence/ThreatMapper)](https://github.com/deepfence/ThreatMapper) - Powerful runtime vulnerability scanner for kubernetes, virtual machines and serverless. By [deepfence][deepfence].
- [docker-bench-security ![GitHub Repo Stars](https://img.shields.io/github/stars/docker/docker-bench-security) ![GitHub last commit](https://img.shields.io/github/last-commit/docker/docker-bench-security)](https://github.com/docker/docker-bench-security) - Script that checks for dozens of common best-practices around deploying Docker containers in production. By [docker][docker].
- [docker-explorer ![GitHub Repo Stars](https://img.shields.io/github/stars/google/docker-explorer) ![GitHub last commit](https://img.shields.io/github/last-commit/google/docker-explorer)](https://github.com/google/docker-explorer) - A tool to help forensicate offline docker acquisitions.
- [dvwassl ![GitHub Repo Stars](https://img.shields.io/github/stars/Peco602/dvwassl) ![GitHub last commit](https://img.shields.io/github/last-commit/Peco602/dvwassl)](https://github.com/Peco602/dvwassl) :ice_cube: - SSL-enabled Damn Vulnerable Web App to test Web Application Firewalls. By [Peco602][peco602].
- [Grype ![GitHub Repo Stars](https://img.shields.io/github/stars/anchore/grype) ![GitHub last commit](https://img.shields.io/github/last-commit/anchore/grype)](https://github.com/anchore/grype) - A vulnerability scanner for container images, filesystems and SBOMs. By [Anchore](https://github.com/anchore).
- [KICS ![GitHub Repo Stars](https://img.shields.io/github/stars/checkmarx/kics) ![GitHub last commit](https://img.shields.io/github/last-commit/checkmarx/kics)](https://github.com/checkmarx/kics) - An infrastructure-as-code scanning tool, find security vulnerabilities, compliance issues, and infrastructure misconfigurations early in the development cycle. Can be extended for additional policies. By [Checkmarx](https://github.com/Checkmarx).
- [oscap-docker ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenSCAP/openscap) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenSCAP/openscap)](https://github.com/OpenSCAP/openscap) - OpenSCAP provides oscap-docker tool which is used to scan Docker containers and images. By [OpenSCAP](https://github.com/OpenSCAP).
- [Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud) - :yen: (Previously Twistlock Security Suite) detects vulnerabilities, hardens container images, and enforces security policies across the lifecycle of applications.
- [segspec ![GitHub Repo Stars](https://img.shields.io/github/stars/dormstern/segspec) ![GitHub last commit](https://img.shields.io/github/last-commit/dormstern/segspec)](https://github.com/dormstern/segspec) - Extracts network dependencies from Docker Compose, Kubernetes manifests, Helm charts, and other config files to generate Kubernetes NetworkPolicies with evidence tracing. By [dormstern](https://github.com/dormstern).
- [Syft ![GitHub Repo Stars](https://img.shields.io/github/stars/anchore/syft) ![GitHub last commit](https://img.shields.io/github/last-commit/anchore/syft)](https://github.com/anchore/syft) - CLI tool and library for generating a Software Bill of Materials (SBOM) from container images and filesystems. By [Anchore](https://github.com/anchore).
- [Sysdig Falco ![GitHub Repo Stars](https://img.shields.io/github/stars/falcosecurity/falco) ![GitHub last commit](https://img.shields.io/github/last-commit/falcosecurity/falco)](https://github.com/falcosecurity/falco) - Sysdig Falco is an open source container security monitor. It can monitor application, container, host, and network activity and alert on unauthorized activity.
- [Sysdig Secure](https://www.sysdig.com/solutions/cloud-detection-and-response-cdr) - :yen: Sysdig Secure addresses run-time security through behavioral monitoring and defense, and provides deep forensics based on open source Sysdig for incident response.
- [Trend Micro DeepSecurity](https://www.trendmicro.com/en_us/business/products/hybrid-cloud/deep-security.html) - :yen: Trend Micro DeepSecurity offers runtime protection for container workloads and hosts as well as preruntime scanning of images to identify vulnerabilities, malware and content such as hardcoded secrets.
- [Trivy ![GitHub Repo Stars](https://img.shields.io/github/stars/aquasecurity/trivy) ![GitHub last commit](https://img.shields.io/github/last-commit/aquasecurity/trivy)](https://github.com/aquasecurity/trivy) - Aqua Security's open source simple and comprehensive vulnerability scanner for containers (suitable for CI).

### Service Discovery

-   [docker-consul ![GitHub Repo Stars](https://img.shields.io/github/stars/gliderlabs/docker-consul) ![GitHub last commit](https://img.shields.io/github/last-commit/gliderlabs/docker-consul)](https://github.com/gliderlabs/docker-consul) by [progrium][progrium]
- [docker-dns ![GitHub Repo Stars](https://img.shields.io/github/stars/bytesharky/docker-dns) ![GitHub last commit](https://img.shields.io/github/last-commit/bytesharky/docker-dns)](https://github.com/bytesharky/docker-dns) - Lightweight DNS forwarder for Docker containers, resolves container names with custom suffixes (e.g. `.docker`) on the host to simplify service discovery.
- [etcd ![GitHub Repo Stars](https://img.shields.io/github/stars/etcd-io/etcd) ![GitHub last commit](https://img.shields.io/github/last-commit/etcd-io/etcd)](https://github.com/etcd-io/etcd) - Distributed reliable key-value store for the most critical data of a distributed system by [etcd-io](https://github.com/etcd-io) (former part of CoreOS).
- [istio ![GitHub Repo Stars](https://img.shields.io/github/stars/istio/istio) ![GitHub last commit](https://img.shields.io/github/last-commit/istio/istio)](https://github.com/istio/istio) - An open platform to connect, manage, and secure microservices.
- [registrator ![GitHub Repo Stars](https://img.shields.io/github/stars/gliderlabs/registrator) ![GitHub last commit](https://img.shields.io/github/last-commit/gliderlabs/registrator)](https://github.com/gliderlabs/registrator) - Service registry bridge for Docker by [gliderlabs][gliderlabs] and [progrium][progrium].

### Volume Management / Data

-   [Blockbridge ![GitHub Repo Stars](https://img.shields.io/github/stars/blockbridge/blockbridge-docker-volume) ![GitHub last commit](https://img.shields.io/github/last-commit/blockbridge/blockbridge-docker-volume)](https://github.com/blockbridge/blockbridge-docker-volume) :yen:- The Blockbridge plugin is a volume plugin that provides access to an extensible set of container-based persistent storage options. It supports single and multi-host Docker environments with features that include tenant isolation, automated provisioning, encryption, secure deletion, snapshots and QoS. By [blockbridge](https://github.com/blockbridge)
-   - [Label Backup ![GitHub Repo Stars](https://img.shields.io/github/stars/resulgg/label-backup) ![GitHub last commit](https://img.shields.io/github/last-commit/resulgg/label-backup)](https://github.com/resulgg/label-backup) - A lightweight, Docker-aware backup agent that automatically discovers and backs up containerized databases (PostgreSQL, MySQL, MongoDB, Redis) based on Docker labels. Supports local storage and S3-compatible destinations with flexible scheduling via cron expressions.
-   [Docker Volume Backup ![GitHub Repo Stars](https://img.shields.io/github/stars/offen/docker-volume-backup) ![GitHub last commit](https://img.shields.io/github/last-commit/offen/docker-volume-backup)](https://github.com/offen/docker-volume-backup) Backup Docker volumes locally or to any S3 compatible storage. By [offen](https://github.com/offen)
-   [duplicacy-cli-cron ![GitHub Repo Stars](https://img.shields.io/github/stars/GeiserX/duplicacy-cli-cron) ![GitHub last commit](https://img.shields.io/github/last-commit/GeiserX/duplicacy-cli-cron)](https://github.com/GeiserX/duplicacy-cli-cron) - Docker-based encrypted dual-storage backup automation using Duplicacy CLI with cross-site redundancy and Telegram notifications. By [GeiserX](https://github.com/GeiserX).
-   [Netshare ![GitHub Repo Stars](https://img.shields.io/github/stars/ContainX/docker-volume-netshare) ![GitHub last commit](https://img.shields.io/github/last-commit/ContainX/docker-volume-netshare)](https://github.com/ContainX/docker-volume-netshare) Docker NFS, AWS EFS, Ceph & Samba/CIFS Volume Plugin. By [ContainX][containx]
- [portworx](https://portworx.com) - :yen: Decentralized storage solution for persistent, shared and replicated volumes.
- [quobyte](https://www.quobyte.com/) - :yen: Fully fault-tolerant distributed file system with a docker volume driver.
-   [REX-Ray ![GitHub Repo Stars](https://img.shields.io/github/stars/rexray/rexray) ![GitHub last commit](https://img.shields.io/github/last-commit/rexray/rexray)](https://github.com/rexray/rexray) provides a vendor agnostic storage orchestration engine. The primary design goal is to provide persistent storage for Docker, Kubernetes, and Mesos. By[thecodeteam](https://github.com/thecodeteam) (DELL Technologies)

- [Storidge ![GitHub Repo Stars](https://img.shields.io/github/stars/Storidge/quick-start) ![GitHub last commit](https://img.shields.io/github/last-commit/Storidge/quick-start)](https://github.com/Storidge/quick-start) :ice_cube: - :yen: Software-defined Persistent Storage for Kubernetes and Docker Swarm.
### User Interface

#### IDE integrations

-   JetBrains IDEs (IntelliJ IDEA, GoLand, WebStorm, CLion etc.) has [built-in Docker plugin](https://www.jetbrains.com/help/idea/docker.html#managing-images)
-   Eclipse [Docker Tooling plugin](https://www.eclipse.org/community/eclipse_newsletter/2016/july/article2.php)
-   [docker.el ![GitHub Repo Stars](https://img.shields.io/github/stars/Silex/docker.el) ![GitHub last commit](https://img.shields.io/github/last-commit/Silex/docker.el)](https://github.com/Silex/docker.el) Manage docker from Emacs by [Silex](https://github.com/Silex)

#### Desktop

Native desktop applications for managing and monitoring docker hosts and clusters

- [Docker DB Manager ![GitHub Repo Stars](https://img.shields.io/github/stars/AbianS/docker-db-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/AbianS/docker-db-manager)](https://github.com/AbianS/docker-db-manager) - Desktop app for managing Docker database containers with visual interface and one-click operations.
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - Official native app. Only for Windows and MacOS.
- [Simple Docker UI ![GitHub Repo Stars](https://img.shields.io/github/stars/felixgborrego/simple-docker-ui) ![GitHub last commit](https://img.shields.io/github/last-commit/felixgborrego/simple-docker-ui)](https://github.com/felixgborrego/simple-docker-ui) - Built on Electron. By [felixgborrego](https://github.com/felixgborrego/).
- [Stevedore ![GitHub Repo Stars](https://img.shields.io/github/stars/slonopotamus/stevedore) ![GitHub last commit](https://img.shields.io/github/last-commit/slonopotamus/stevedore)](https://github.com/slonopotamus/stevedore) - Good Docker Desktop replacement for Windows. Both Linux and Windows Containers are supported. [slonopotamus](https://github.com/slonopotamus).

#### Terminal

##### Terminal UI
- [d4s ![GitHub Repo Stars](https://img.shields.io/github/stars/jr-k/d4s) ![GitHub last commit](https://img.shields.io/github/last-commit/jr-k/d4s)](https://github.com/jr-k/d4s) - A fast, keyboard-driven terminal UI to manage Docker containers, Compose stacks, and Swarm services with the ergonomics of K9s.
- [dive ![GitHub Repo Stars](https://img.shields.io/github/stars/wagoodman/dive) ![GitHub last commit](https://img.shields.io/github/last-commit/wagoodman/dive)](https://github.com/wagoodman/dive) - A tool for exploring each layer in a docker image. By [wagoodman](https://github.com/wagoodman).
-   [dockdash ![GitHub Repo Stars](https://img.shields.io/github/stars/byrnedo/dockdash) ![GitHub last commit](https://img.shields.io/github/last-commit/byrnedo/dockdash)](https://github.com/byrnedo/dockdash) detailed stats. By [byrnedo]
- [dockly ![GitHub Repo Stars](https://img.shields.io/github/stars/lirantal/dockly) ![GitHub last commit](https://img.shields.io/github/last-commit/lirantal/dockly)](https://github.com/lirantal/dockly) - An interactive shell UI for managing Docker containers.
- [DockMate ![GitHub Repo Stars](https://img.shields.io/github/stars/shubh-io/dockmate) ![GitHub last commit](https://img.shields.io/github/last-commit/shubh-io/dockmate)](https://github.com/shubh-io/dockmate) - Lightweight terminal-based Docker and Podman manager with a text-based user interface,.
- [DockSTARTer ![GitHub Repo Stars](https://img.shields.io/github/stars/GhostWriters/DockSTARTer) ![GitHub last commit](https://img.shields.io/github/last-commit/GhostWriters/DockSTARTer)](https://github.com/GhostWriters/DockSTARTer) - DockSTARTer helps you get started with home server apps running in Docker by [GhostWriters](https://github.com/GhostWriters).
- [dprs ![GitHub Repo Stars](https://img.shields.io/github/stars/durableprogramming/dprs) ![GitHub last commit](https://img.shields.io/github/last-commit/durableprogramming/dprs)](https://github.com/durableprogramming/dprs) - A developer-focused TUI for managing Docker containers with real-time log streaming and container management. Built with Rust. By [durableprogramming](https://github.com/durableprogramming).
- [dry ![GitHub Repo Stars](https://img.shields.io/github/stars/moncho/dry) ![GitHub last commit](https://img.shields.io/github/last-commit/moncho/dry)](https://github.com/moncho/dry) - An interactive CLI for Docker containers.
- [goManageDocker ![GitHub Repo Stars](https://img.shields.io/github/stars/ajayd-san/gomanagedocker) ![GitHub last commit](https://img.shields.io/github/last-commit/ajayd-san/gomanagedocker)](https://github.com/ajayd-san/gomanagedocker) - TUI tool to view and manage your docker objects blazingly fast with sensible keybindings, also supports VIM navigation out of the box.
- [lazydocker ![GitHub Repo Stars](https://img.shields.io/github/stars/jesseduffield/lazydocker) ![GitHub last commit](https://img.shields.io/github/last-commit/jesseduffield/lazydocker)](https://github.com/jesseduffield/lazydocker) - The lazier way to manage everything docker. A simple terminal UI for both docker and docker-compose, written in Go with the gocui library. By [jesseduffield](https://github.com/jesseduffield).
- [lazyjournal ![GitHub Repo Stars](https://img.shields.io/github/stars/Lifailon/lazyjournal) ![GitHub last commit](https://img.shields.io/github/last-commit/Lifailon/lazyjournal)](https://github.com/Lifailon/lazyjournal) - A interface for reading and filtering the logs output of Docker and Podman containers like [Dozzle](dozzle) but for the terminal with support for fuzzy find, regex and output coloring.
- [oxker ![GitHub Repo Stars](https://img.shields.io/github/stars/mrjackwills/oxker) ![GitHub last commit](https://img.shields.io/github/last-commit/mrjackwills/oxker)](https://github.com/mrjackwills/oxker) - A simple tui to view & control docker containers. Written in [Rust](https://rust-lang.org/), making heavy use of [ratatui ![GitHub Repo Stars](https://img.shields.io/github/stars/tui-rs-revival/ratatui) ![GitHub last commit](https://img.shields.io/github/last-commit/tui-rs-revival/ratatui)](https://github.com/tui-rs-revival/ratatui) & [Bollard ![GitHub Repo Stars](https://img.shields.io/github/stars/fussybeaver/bollard) ![GitHub last commit](https://img.shields.io/github/last-commit/fussybeaver/bollard)](https://github.com/fussybeaver/bollard),.
- [swarmcli ![GitHub Repo Stars](https://img.shields.io/github/stars/Eldara-Tech/swarmcli) ![GitHub last commit](https://img.shields.io/github/last-commit/Eldara-Tech/swarmcli)](https://github.com/Eldara-Tech/swarmcli) - Swarm Management at the speed of thought — with real-time log streaming, instant shell access to containers, seamless port forwarding, and on-demand secret reveal capabilities, giving you full control over your Docker Swarm without breaking your flow.
- [tdocker ![GitHub Repo Stars](https://img.shields.io/github/stars/pivovarit/tdocker) ![GitHub last commit](https://img.shields.io/github/last-commit/pivovarit/tdocker)](https://github.com/pivovarit/tdocker) - A `docker ps` replacement for everyday container operations by [@pivovarit](https://github.com/pivovarit).

##### CLI tools

- [captain ![GitHub Repo Stars](https://img.shields.io/github/stars/jenssegers/captain) ![GitHub last commit](https://img.shields.io/github/last-commit/jenssegers/captain)](https://github.com/jenssegers/captain) :ice_cube: - Easily start and stop docker compose projects from any directory. By [jenssegers](https://github.com/jenssegers).
- [dcinja ![GitHub Repo Stars](https://img.shields.io/github/stars/Falldog/dcinja) ![GitHub last commit](https://img.shields.io/github/last-commit/Falldog/dcinja)](https://github.com/Falldog/dcinja) - The powerful and smallest binary size of template engine for docker command line environment. By [Falldog](https://github.com/Falldog).
- [dcp ![GitHub Repo Stars](https://img.shields.io/github/stars/exdx/dcp) ![GitHub last commit](https://img.shields.io/github/last-commit/exdx/dcp)](https://github.com/exdx/dcp) :ice_cube: - A simple tool for copying files from container filesystems. By [exdx](https://github.com/exdx).
- [dctl ![GitHub Repo Stars](https://img.shields.io/github/stars/FabienD/docker-stack) ![GitHub last commit](https://img.shields.io/github/last-commit/FabienD/docker-stack)](https://github.com/FabienD/docker-stack) - Dctl is a Cli tool that helps developers by allowing them to execute all docker compose commands anywhere in the terminal, and more. By [FabienD](https://github.com/FabienD).
- [decompose ![GitHub Repo Stars](https://img.shields.io/github/stars/s0rg/decompose) ![GitHub last commit](https://img.shields.io/github/last-commit/s0rg/decompose)](https://github.com/s0rg/decompose) - Reverse-engineering tool for docker environments. By [s0rg](https://github.com/s0rg).
- [docker pushrm ![GitHub Repo Stars](https://img.shields.io/github/stars/christian-korneck/docker-pushrm) ![GitHub last commit](https://img.shields.io/github/last-commit/christian-korneck/docker-pushrm)](https://github.com/christian-korneck/docker-pushrm) - A Docker CLI plugin that lets you push the README.md file from the current directory to Docker Hub. Also supports Quay and Harbor. By [christian-korneck](https://github.com/christian-korneck).
- [docker-captain ![GitHub Repo Stars](https://img.shields.io/github/stars/lucabello/docker-captain) ![GitHub last commit](https://img.shields.io/github/last-commit/lucabello/docker-captain)](https://github.com/lucabello/docker-captain) - A friendly CLI to manage multiple Docker Compose deployments with style — powered by Typer, Rich, questionary, and sh.
- [DVM ![GitHub Repo Stars](https://img.shields.io/github/stars/howtowhale/dvm) ![GitHub last commit](https://img.shields.io/github/last-commit/howtowhale/dvm)](https://github.com/howtowhale/dvm) :ice_cube: - Docker version manager.
- [goinside ![GitHub Repo Stars](https://img.shields.io/github/stars/iamsoorena/goinside) ![GitHub last commit](https://img.shields.io/github/last-commit/iamsoorena/goinside)](https://github.com/iamsoorena/goinside) :ice_cube: - Get inside a running docker container easily.
- [Pdocker ![GitHub Repo Stars](https://img.shields.io/github/stars/g31s/Pdocker) ![GitHub last commit](https://img.shields.io/github/last-commit/g31s/Pdocker)](https://github.com/g31s/Pdocker) :ice_cube: - A simple tool to manage and maintain Docker for personal projects.
- [proco ![GitHub Repo Stars](https://img.shields.io/github/stars/shiwaforce/poco) ![GitHub last commit](https://img.shields.io/github/last-commit/shiwaforce/poco)](https://github.com/shiwaforce/poco) - Proco will help you to organise and manage Docker, Docker-Compose, Kubernetes projects of any complexity using simple YAML config files to shorten the route from finding your project to initialising it in your local environment.
- [scuba ![GitHub Repo Stars](https://img.shields.io/github/stars/JonathonReinhart/scuba) ![GitHub last commit](https://img.shields.io/github/last-commit/JonathonReinhart/scuba)](https://github.com/JonathonReinhart/scuba) - Transparently use Docker containers to encapsulate software build environments,.
- [skopeo ![GitHub Repo Stars](https://img.shields.io/github/stars/containers/skopeo) ![GitHub last commit](https://img.shields.io/github/last-commit/containers/skopeo)](https://github.com/containers/skopeo) - Work with remote images registries - retrieving information, images, signing content.
- [supdock ![GitHub Repo Stars](https://img.shields.io/github/stars/segersniels/supdock) ![GitHub last commit](https://img.shields.io/github/last-commit/segersniels/supdock)](https://github.com/segersniels/supdock) - Allows for slightly more visual usage of Docker with an interactive prompt. By [segersniels](https://github.com/segersniels).

- [tsaotun ![GitHub Repo Stars](https://img.shields.io/github/stars/qazbnm456/tsaotun) ![GitHub last commit](https://img.shields.io/github/last-commit/qazbnm456/tsaotun)](https://github.com/qazbnm456/tsaotun) :ice_cube: - Python based Assistance for Docker.
##### Other

- [dext-docker-registry-plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/vutran/dext-docker-registry-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/vutran/dext-docker-registry-plugin)](https://github.com/vutran/dext-docker-registry-plugin) :ice_cube: - Search the Docker Registry with the Dext smart launcher. By [vutran](https://github.com/vutran).
- [docker-ssh ![GitHub Repo Stars](https://img.shields.io/github/stars/jeroenpeeters/docker-ssh) ![GitHub last commit](https://img.shields.io/github/last-commit/jeroenpeeters/docker-ssh)](https://github.com/jeroenpeeters/docker-ssh) :ice_cube: - SSH Server for Docker containers ~ Because every container should be accessible. By [jeroenpeeters](https://github.com/jeroenpeeters).
-   [dockerfile-mode ![GitHub Repo Stars](https://img.shields.io/github/stars/spotify/dockerfile-mode) ![GitHub last commit](https://img.shields.io/github/last-commit/spotify/dockerfile-mode)](https://github.com/spotify/dockerfile-mode) An emacs mode for handling Dockerfiles by [spotify][spotify]

- [MultiDocker ![GitHub Repo Stars](https://img.shields.io/github/stars/marty90/multidocker) ![GitHub last commit](https://img.shields.io/github/last-commit/marty90/multidocker)](https://github.com/marty90/multidocker) :ice_cube: - Create a secure multi-user Docker machine, where each user is segregated into an indepentent container.
- [Powerline-Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/adrianmo/powerline-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/adrianmo/powerline-docker)](https://github.com/adrianmo/powerline-docker) :ice_cube: - A Powerline segment for showing the status of Docker containers.
#### Web

- [Arcane ![GitHub Repo Stars](https://img.shields.io/github/stars/getarcaneapp/arcane) ![GitHub last commit](https://img.shields.io/github/last-commit/getarcaneapp/arcane)](https://github.com/getarcaneapp/arcane) - An easy and modern Docker management platform, built with everybody in mind. By [getarcaneapp](https://github.com/getarcaneapp).
- [CASA ![GitHub Repo Stars](https://img.shields.io/github/stars/knrdl/casa) ![GitHub last commit](https://img.shields.io/github/last-commit/knrdl/casa)](https://github.com/knrdl/casa) - Outsource the administration of a handful of containers to your co-workers,.
- [Container Web TTY ![GitHub Repo Stars](https://img.shields.io/github/stars/wrfly/container-web-tty) ![GitHub last commit](https://img.shields.io/github/last-commit/wrfly/container-web-tty)](https://github.com/wrfly/container-web-tty) - Connect your containers via a web-tty [wrfly](https://github.com/wrfly).
- [dockemon ![GitHub Repo Stars](https://img.shields.io/github/stars/ProductiveOps/dokemon) ![GitHub last commit](https://img.shields.io/github/last-commit/ProductiveOps/dokemon)](https://github.com/ProductiveOps/dokemon) :ice_cube: - Docker Container Management GUI.
- [Docker Registry Browser ![GitHub Repo Stars](https://img.shields.io/github/stars/klausmeyer/docker-registry-browser) ![GitHub last commit](https://img.shields.io/github/last-commit/klausmeyer/docker-registry-browser)](https://github.com/klausmeyer/docker-registry-browser) - Web Interface for the Docker Registry HTTP API v2.
- [docker-registry-web ![GitHub Repo Stars](https://img.shields.io/github/stars/mkuchin/docker-registry-web) ![GitHub last commit](https://img.shields.io/github/last-commit/mkuchin/docker-registry-web)](https://github.com/mkuchin/docker-registry-web) :ice_cube: - Web UI, authentication service and event recorder for private docker registry v2.
- [docker-swarm-visualizer ![GitHub Repo Stars](https://img.shields.io/github/stars/dockersamples/docker-swarm-visualizer) ![GitHub last commit](https://img.shields.io/github/last-commit/dockersamples/docker-swarm-visualizer)](https://github.com/dockersamples/docker-swarm-visualizer) - Visualizes Docker services on a Docker Swarm (for running demos).
- [dockge ![GitHub Repo Stars](https://img.shields.io/github/stars/louislam/dockge) ![GitHub last commit](https://img.shields.io/github/last-commit/louislam/dockge)](https://github.com/louislam/dockge) - Easy-to-use and reactive self-hosted docker compose.yaml stack-oriented manager.
- [Komodo ![GitHub Repo Stars](https://img.shields.io/github/stars/mbecker20/komodo) ![GitHub last commit](https://img.shields.io/github/last-commit/mbecker20/komodo)](https://github.com/mbecker20/komodo) - A tool to build and deploy software on many servers.
- [Kubevious ![GitHub Repo Stars](https://img.shields.io/github/stars/kubevious/kubevious) ![GitHub last commit](https://img.shields.io/github/last-commit/kubevious/kubevious)](https://github.com/kubevious/kubevious) :ice_cube: - A highly visual web UI for Kubernetes which renders configuration and state in an application centric way.
- [Mafl ![GitHub Repo Stars](https://img.shields.io/github/stars/hywax/mafl) ![GitHub last commit](https://img.shields.io/github/last-commit/hywax/mafl)](https://github.com/hywax/mafl) - Minimalistic flexible homepage.
- [netdata ![GitHub Repo Stars](https://img.shields.io/github/stars/netdata/netdata) ![GitHub last commit](https://img.shields.io/github/last-commit/netdata/netdata)](https://github.com/netdata/netdata) - Real-time performance monitoring.
- [OctoLinker ![GitHub Repo Stars](https://img.shields.io/github/stars/OctoLinker/OctoLinker) ![GitHub last commit](https://img.shields.io/github/last-commit/OctoLinker/OctoLinker)](https://github.com/OctoLinker/OctoLinker) :ice_cube: - A browser extension for GitHub that makes the image name in a `Dockerfile` clickable and redirect you to the related Docker Hub page.
- [Portainer ![GitHub Repo Stars](https://img.shields.io/github/stars/portainer/portainer) ![GitHub last commit](https://img.shields.io/github/last-commit/portainer/portainer)](https://github.com/portainer/portainer) - A lightweight management UI for managing your Docker hosts or Docker Swarm clusters.
- [Rapid Dashboard ![GitHub Repo Stars](https://img.shields.io/github/stars/ozlerhakan/rapid) ![GitHub last commit](https://img.shields.io/github/last-commit/ozlerhakan/rapid)](https://github.com/ozlerhakan/rapid) :ice_cube: - A simple query dashboard to use Docker Remote API.
- [Seagull ![GitHub Repo Stars](https://img.shields.io/github/stars/tobegit3hub/seagull) ![GitHub last commit](https://img.shields.io/github/last-commit/tobegit3hub/seagull)](https://github.com/tobegit3hub/seagull) :ice_cube: - Friendly Web UI to monitor docker daemon.
- [Swarmpit ![GitHub Repo Stars](https://img.shields.io/github/stars/swarmpit/swarmpit) ![GitHub last commit](https://img.shields.io/github/last-commit/swarmpit/swarmpit)](https://github.com/swarmpit/swarmpit) - Swarmpit provides simple and easy to use interface for your Docker Swarm cluster. You can manage your stacks, services, secrets, volumes, networks etc.
- [Swirl ![GitHub Repo Stars](https://img.shields.io/github/stars/cuigh/swirl) ![GitHub last commit](https://img.shields.io/github/last-commit/cuigh/swirl)](https://github.com/cuigh/swirl) :ice_cube: - Swirl is a web management tool for Docker, focused on swarm cluster By [cuigh](https://github.com/cuigh/).
- [Theia ![GitHub Repo Stars](https://img.shields.io/github/stars/eclipse-theia/theia) ![GitHub last commit](https://img.shields.io/github/last-commit/eclipse-theia/theia)](https://github.com/eclipse-theia/theia) - Extensible platform to develop full-fledged multi-language Cloud & Desktop IDE-like products with state-of-the-art web technologies.
- [usulnet ![GitHub Repo Stars](https://img.shields.io/github/stars/fr4nsys/usulnet) ![GitHub last commit](https://img.shields.io/github/last-commit/fr4nsys/usulnet)](https://github.com/fr4nsys/usulnet) - A complete and modern Docker management platform designed for sysadmin, devops with enterprise grade tools, cve scanner, ssh, rdp on web and much more. By [fr4nsys](https://github.com/fr4nsys).

## Docker Images

### Base Tools

Tools and applications that are either installed inside containers or designed to be run as a [sidecar](https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar)

- [amicontained ![GitHub Repo Stars](https://img.shields.io/github/stars/genuinetools/amicontained) ![GitHub last commit](https://img.shields.io/github/last-commit/genuinetools/amicontained)](https://github.com/genuinetools/amicontained) :ice_cube: - Container introspection tool. Find out what container runtime is being used as well as features available.
- [Chaperone ![GitHub Repo Stars](https://img.shields.io/github/stars/garywiz/chaperone) ![GitHub last commit](https://img.shields.io/github/last-commit/garywiz/chaperone)](https://github.com/garywiz/chaperone) :ice_cube: - A single PID1 process designed for docker containers. Does user management, log management, startup, zombie reaping, all in one small package.
- [ckron ![GitHub Repo Stars](https://img.shields.io/github/stars/nicomt/ckron) ![GitHub last commit](https://img.shields.io/github/last-commit/nicomt/ckron)](https://github.com/nicomt/ckron) - A cron-style job scheduler for docker,.
-   [CoreOS][coreos] - Linux for Massive Server Deployments
- [distroless ![GitHub Repo Stars](https://img.shields.io/github/stars/GoogleContainerTools/distroless) ![GitHub last commit](https://img.shields.io/github/last-commit/GoogleContainerTools/distroless)](https://github.com/GoogleContainerTools/distroless) - Language focused docker images, minus the operating system,.
- [docker-alpine ![GitHub Repo Stars](https://img.shields.io/github/stars/gliderlabs/docker-alpine) ![GitHub last commit](https://img.shields.io/github/last-commit/gliderlabs/docker-alpine)](https://github.com/gliderlabs/docker-alpine) :ice_cube: - A super small Docker base image _(5MB)_ using Alpine Linux.
- [docker-gen ![GitHub Repo Stars](https://img.shields.io/github/stars/jwilder/docker-gen) ![GitHub last commit](https://img.shields.io/github/last-commit/jwilder/docker-gen)](https://github.com/jwilder/docker-gen) - Generate files from docker container meta-data.
- [dockerize ![GitHub Repo Stars](https://img.shields.io/github/stars/powerman/dockerize) ![GitHub last commit](https://img.shields.io/github/last-commit/powerman/dockerize)](https://github.com/powerman/dockerize) - Utility to simplify running applications in docker containers by [jwilder][jwilder], [powerman][powerman].
- [GoSu ![GitHub Repo Stars](https://img.shields.io/github/stars/tianon/gosu) ![GitHub last commit](https://img.shields.io/github/last-commit/tianon/gosu)](https://github.com/tianon/gosu) - Run this specific application as this specific user and get out of the pipeline (entrypoint script tool).
- [is-docker ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/is-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/is-docker)](https://github.com/sindresorhus/is-docker) - Check if the process is running inside a Docker container.
- [lstags ![GitHub Repo Stars](https://img.shields.io/github/stars/ivanilves/lstags) ![GitHub last commit](https://img.shields.io/github/last-commit/ivanilves/lstags)](https://github.com/ivanilves/lstags) :ice_cube: - Sync Docker images across registries.
- [microcheck ![GitHub Repo Stars](https://img.shields.io/github/stars/tarampampam/microcheck) ![GitHub last commit](https://img.shields.io/github/last-commit/tarampampam/microcheck)](https://github.com/tarampampam/microcheck) - Lightweight health check utilities for Docker containers (75 KB instead of 9.3 MB for httpcheck versus cURL) in pure C - http(s), port checks, and parallel execution are included.
- [Ofelia ![GitHub Repo Stars](https://img.shields.io/github/stars/mcuadros/ofelia) ![GitHub last commit](https://img.shields.io/github/last-commit/mcuadros/ofelia)](https://github.com/mcuadros/ofelia/) - Ofelia is a modern and low footprint job scheduler for docker environments, built on Go. Ofelia aims to be a replacement for the old fashioned cron. Supports configuration from container labels and/or configuration files.
- [SparkView ![GitHub Repo Stars](https://img.shields.io/github/stars/beyondssl/sparkview-container) ![GitHub last commit](https://img.shields.io/github/last-commit/beyondssl/sparkview-container)](https://github.com/beyondssl/sparkview-container) - Access VMs, desktops, servers or applications anytime and from anywhere, without complex and costly client roll-outs or user management.
- [su-exec ![GitHub Repo Stars](https://img.shields.io/github/stars/ncopa/su-exec) ![GitHub last commit](https://img.shields.io/github/last-commit/ncopa/su-exec)](https://github.com/ncopa/su-exec) - This is a simple tool that will simply execute a program with different privileges. The program will be executed directly and not run as a child, like su and sudo does, which avoids TTY and signal issues. Why reinvent gosu? This does more or less exactly the same thing as gosu but it is only 10kb instead of 1.8MB. By [ncopa](https://github.com/ncopa).
- [sue ![GitHub Repo Stars](https://img.shields.io/github/stars/theAkito/sue) ![GitHub last commit](https://img.shields.io/github/last-commit/theAkito/sue)](https://github.com/theAkito/sue) :ice_cube: - Executes a program as a user different from the user running sue. This is a maintainable alternative to ncopa/su-exec, which is the better tianon/gosu. This one is far better (higher performance, smaller size), than the original gosu, however it is far easier to maintain, than su-exec, which is written in plain C. Made by [Akito][akito].
- [supercronic ![GitHub Repo Stars](https://img.shields.io/github/stars/aptible/supercronic) ![GitHub last commit](https://img.shields.io/github/last-commit/aptible/supercronic)](https://github.com/aptible/supercronic) - Crontab-compatible job runner, designed specifically to run in containers.

- [TrivialRC ![GitHub Repo Stars](https://img.shields.io/github/stars/vorakl/TrivialRC) ![GitHub last commit](https://img.shields.io/github/last-commit/vorakl/TrivialRC)](https://github.com/vorakl/TrivialRC) :ice_cube: - A minimalistic Runtime Configuration system and process manager for containers [vorakl](https://github.com/vorakl).
### Builder

Applications designed to help or simplify building **new** images

- [ansible-bender ![GitHub Repo Stars](https://img.shields.io/github/stars/ansible-community/ansible-bender) ![GitHub last commit](https://img.shields.io/github/last-commit/ansible-community/ansible-bender)](https://github.com/ansible-community/ansible-bender) - A tool utilising `ansible` and `buildah`.
- [buildah ![GitHub Repo Stars](https://img.shields.io/github/stars/containers/buildah) ![GitHub last commit](https://img.shields.io/github/last-commit/containers/buildah)](https://github.com/containers/buildah) - A tool that facilitates building OCI images.
- [BuildKit ![GitHub Repo Stars](https://img.shields.io/github/stars/moby/buildkit) ![GitHub last commit](https://img.shields.io/github/last-commit/moby/buildkit)](https://github.com/moby/buildkit) - Concurrent, cache-efficient, and Dockerfile-agnostic builder toolkit.
- [cekit ![GitHub Repo Stars](https://img.shields.io/github/stars/cekit/cekit) ![GitHub last commit](https://img.shields.io/github/last-commit/cekit/cekit)](https://github.com/cekit/cekit) - A tool used by openshift to build base images using different build engines.
- [container-factory ![GitHub Repo Stars](https://img.shields.io/github/stars/mutable/container-factory) ![GitHub last commit](https://img.shields.io/github/last-commit/mutable/container-factory)](https://github.com/mutable/container-factory) :ice_cube: - Produces Docker images from tarballs of application source code.
- [copy-docker-image ![GitHub Repo Stars](https://img.shields.io/github/stars/mdlavin/copy-docker-image) ![GitHub last commit](https://img.shields.io/github/last-commit/mdlavin/copy-docker-image)](https://github.com/mdlavin/copy-docker-image) :ice_cube: - Copy a Docker image between registries without a full Docker installation.
- [Derrick ![GitHub Repo Stars](https://img.shields.io/github/stars/alibaba/derrick) ![GitHub last commit](https://img.shields.io/github/last-commit/alibaba/derrick)](https://github.com/alibaba/derrick) :ice_cube: - A tool help you to automate the generation of Dockerfile and dockerize application by scanning the code. By [alibaba](https://github.com/alibaba).
- [dlayer ![GitHub Repo Stars](https://img.shields.io/github/stars/orisano/dlayer) ![GitHub last commit](https://img.shields.io/github/last-commit/orisano/dlayer)](https://github.com/orisano/dlayer) - Docker layer analyzer.
- [docker-companion ![GitHub Repo Stars](https://img.shields.io/github/stars/mudler/docker-companion) ![GitHub last commit](https://img.shields.io/github/last-commit/mudler/docker-companion)](https://github.com/mudler/docker-companion) - A command line tool written in Golang to squash and unpack docker images.
- [docker-make ![GitHub Repo Stars](https://img.shields.io/github/stars/CtripCloud/docker-make) ![GitHub last commit](https://img.shields.io/github/last-commit/CtripCloud/docker-make)](https://github.com/CtripCloud/docker-make) :ice_cube: - Build, tag,and push a bunch of related docker images via a single command.
- [docker-repack ![GitHub Repo Stars](https://img.shields.io/github/stars/orf/docker-repack) ![GitHub last commit](https://img.shields.io/github/last-commit/orf/docker-repack)](https://github.com/orf/docker-repack) - Repacks a Docker image into a smaller, more efficient version that makes it significantly faster to pull. By [orf](https://github.com/orf).
- [docker-replay ![GitHub Repo Stars](https://img.shields.io/github/stars/bcicen/docker-replay) ![GitHub last commit](https://img.shields.io/github/last-commit/bcicen/docker-replay)](https://github.com/bcicen/docker-replay) :ice_cube: - Generate `docker run`command and options from running containers. By [bcicen](https://github.com/bcicen).
-   [DockerSlim ![GitHub Repo Stars](https://img.shields.io/github/stars/docker-slim/docker-slim) ![GitHub last commit](https://img.shields.io/github/last-commit/docker-slim/docker-slim)](https://github.com/docker-slim/docker-slim) shrinks fat Docker images creating the smallest possible images.
- [Dockly ![GitHub Repo Stars](https://img.shields.io/github/stars/swipely/dockly) ![GitHub last commit](https://img.shields.io/github/last-commit/swipely/dockly)](https://github.com/swipely/dockly) :ice_cube: - Dockly is a gem made to ease the pain of packaging an application in Docker.
- [essex ![GitHub Repo Stars](https://img.shields.io/github/stars/utensils/essex) ![GitHub last commit](https://img.shields.io/github/last-commit/utensils/essex)](https://github.com/utensils/essex) - Boilerplate for Docker Based Projects: Essex is a CLI utility written in bash to quickly setup clean and consistent Docker projects with Makefile driven workflows. [jamesbrink](https://github.com/jamesbrink).
- [HPC Container Maker ![GitHub Repo Stars](https://img.shields.io/github/stars/NVIDIA/hpc-container-maker) ![GitHub last commit](https://img.shields.io/github/last-commit/NVIDIA/hpc-container-maker)](https://github.com/NVIDIA/hpc-container-maker) - Generates Dockerfiles from a high level Python recipe, including building blocks for High-Performance Computing components.
- [img ![GitHub Repo Stars](https://img.shields.io/github/stars/genuinetools/img) ![GitHub last commit](https://img.shields.io/github/last-commit/genuinetools/img)](https://github.com/genuinetools/img) - Standalone, daemon-less, unprivileged Dockerfile and OCI compatible container image builder.
- [packer](https://developer.hashicorp.com/packer/integrations/hashicorp/docker/latest/components/builder/docker) - Hashicorp tool to build machine images including docker image integrated with configuration management tools like chef, puppet, ansible.
- [portainer ![GitHub Repo Stars](https://img.shields.io/github/stars/duedil-ltd/portainer) ![GitHub last commit](https://img.shields.io/github/last-commit/duedil-ltd/portainer)](https://github.com/duedil-ltd/portainer) :ice_cube: - Apache Mesos framework for building Docker images.
- [Production-Ready Python Containers :yen:](https://pythonspeed.com/products/pythoncontainer/) - A template for creating production-ready Docker images for Python applications.
- [RAUDI ![GitHub Repo Stars](https://img.shields.io/github/stars/cybersecsi/RAUDI) ![GitHub last commit](https://img.shields.io/github/last-commit/cybersecsi/RAUDI)](https://github.com/cybersecsi/RAUDI) - A tool to automatically update (and optionally push to Docker Hub) Docker Images for 3rd party software whenever theres is a new release/update/commit. By [SecSI](https://github.com/cybersecsi).
- [runlike ![GitHub Repo Stars](https://img.shields.io/github/stars/lavie/runlike) ![GitHub last commit](https://img.shields.io/github/last-commit/lavie/runlike)](https://github.com/lavie/runlike) - Generate `docker run`command and options from running containers.
- [userdef ![GitHub Repo Stars](https://img.shields.io/github/stars/theAkito/userdef) ![GitHub last commit](https://img.shields.io/github/last-commit/theAkito/userdef)](https://github.com/theAkito/userdef) :ice_cube: - An advanced `adduser` for your Alpine based Docker images. Made by [Akito][akito].
- [Whaler ![GitHub Repo Stars](https://img.shields.io/github/stars/P3GLEG/Whaler) ![GitHub last commit](https://img.shields.io/github/last-commit/P3GLEG/Whaler)](https://github.com/P3GLEG/Whaler) - Program to reverse Docker images into Dockerfiles.

- [Whales ![GitHub Repo Stars](https://img.shields.io/github/stars/Gueils/whales) ![GitHub last commit](https://img.shields.io/github/last-commit/Gueils/whales)](https://github.com/Gueils/whales) :ice_cube: - A tool to automatically dockerize your applications.
### Dockerfile

- [chaperone-docker ![GitHub Repo Stars](https://img.shields.io/github/stars/garywiz/chaperone-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/garywiz/chaperone-docker)](https://github.com/garywiz/chaperone-docker) :ice_cube: - A set of images using the Chaperone process manager, including a lean Alpine image, LAMP, LEMP, and bare-bones base kits.
-   [Dockerfile Generator ![GitHub Repo Stars](https://img.shields.io/github/stars/ozankasikci/dockerfile-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/ozankasikci/dockerfile-generator)](https://github.com/ozankasikci/dockerfile-generator) `dfg` is both a Go library and an executable that produces valid Dockerfiles using various input channels.
- [Dockerfile Project](https://dockerfile.github.io/) - Trusted Automated Docker Builds. Dockerfile Project maintains a central repository of Dockerfile for various popular open source software services runnable on a Docker container.
- [dockerfilegraph ![GitHub Repo Stars](https://img.shields.io/github/stars/patrickhoefler/dockerfilegraph) ![GitHub last commit](https://img.shields.io/github/last-commit/patrickhoefler/dockerfilegraph)](https://github.com/patrickhoefler/dockerfilegraph) - Visualize your multi-stage Dockerfiles. By [PatrickHoefler](https://github.com/patrickhoefler).
- [Dockershelf ![GitHub Repo Stars](https://img.shields.io/github/stars/Dockershelf/dockershelf) ![GitHub last commit](https://img.shields.io/github/last-commit/Dockershelf/dockershelf)](https://github.com/Dockershelf/dockershelf) - A repository that serves as a collector for docker recipes that are universal, efficient and slim. Images are updated, tested and published daily via a Travis cron job.
- [Vektorcloud](https://github.com/vektorcloud) - A collection of minimal, Alpine-based Docker images.

Examples by:

-   [0xy](https://gitlab.com/0xy/dockerfiles)
-   [arun-gupta ![GitHub Repo Stars](https://img.shields.io/github/stars/arun-gupta/docker-images) ![GitHub last commit](https://img.shields.io/github/last-commit/arun-gupta/docker-images)](https://github.com/arun-gupta/docker-images)
-   [awesome-startup ![GitHub Repo Stars](https://img.shields.io/github/stars/awesome-startup/docker-compose) ![GitHub last commit](https://img.shields.io/github/last-commit/awesome-startup/docker-compose)](https://github.com/awesome-startup/docker-compose)
-   [crosbymichael ![GitHub Repo Stars](https://img.shields.io/github/stars/crosbymichael/Dockerfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/crosbymichael/Dockerfiles)](https://github.com/crosbymichael/Dockerfiles)
-   [jessfraz ![GitHub Repo Stars](https://img.shields.io/github/stars/jessfraz/dockerfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/jessfraz/dockerfiles)](https://github.com/jessfraz/dockerfiles)
-   [komljen ![GitHub Repo Stars](https://img.shields.io/github/stars/komljen/dockerfile-examples) ![GitHub last commit](https://img.shields.io/github/last-commit/komljen/dockerfile-examples)](https://github.com/komljen/dockerfile-examples)
-   [kstaken ![GitHub Repo Stars](https://img.shields.io/github/stars/kstaken/dockerfile-examples) ![GitHub last commit](https://img.shields.io/github/last-commit/kstaken/dockerfile-examples)](https://github.com/kstaken/dockerfile-examples)
-   [ondrejmo ![GitHub Repo Stars](https://img.shields.io/github/stars/ondrejmo/Dockerfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/ondrejmo/Dockerfiles)](https://github.com/ondrejmo/Dockerfiles)
-   [vimagick ![GitHub Repo Stars](https://img.shields.io/github/stars/vimagick/dockerfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/vimagick/dockerfiles)](https://github.com/vimagick/dockerfiles)

### Linter

- [Dockadvisor ![GitHub Repo Stars](https://img.shields.io/github/stars/deckrun/dockadvisor) ![GitHub last commit](https://img.shields.io/github/last-commit/deckrun/dockadvisor)](https://github.com/deckrun/dockadvisor) - Lightweight Dockerfile linter with 60+ rules, quality scoring, and security checks.
- [docker-image-size-limit ![GitHub Repo Stars](https://img.shields.io/github/stars/wemake-services/docker-image-size-limit) ![GitHub last commit](https://img.shields.io/github/last-commit/wemake-services/docker-image-size-limit)](https://github.com/wemake-services/docker-image-size-limit) - A tool to keep an eye on your docker images size.
- [Dockerfile Linter action ![GitHub Repo Stars](https://img.shields.io/github/stars/buddy-works/dockerfile-linter) ![GitHub last commit](https://img.shields.io/github/last-commit/buddy-works/dockerfile-linter)](https://github.com/buddy-works/dockerfile-linter) :ice_cube: - The linter lets you verify Dockerfile syntax to make sure it follows the best practices for building efficient Docker images.
- [FROM:latest ![GitHub Repo Stars](https://img.shields.io/github/stars/replicatedhq/dockerfilelint) ![GitHub last commit](https://img.shields.io/github/last-commit/replicatedhq/dockerfilelint)](https://github.com/replicatedhq/dockerfilelint) :ice_cube: - An opinionated Dockerfile linter.
- [Hadolint ![GitHub Repo Stars](https://img.shields.io/github/stars/hadolint/hadolint) ![GitHub last commit](https://img.shields.io/github/last-commit/hadolint/hadolint)](https://github.com/hadolint/hadolint) - A Dockerfile linter that checks for best practices, common mistakes, and is also able to lint any bash written in `RUN` instructions;.

### Metadata

- [opencontainer ![GitHub Repo Stars](https://img.shields.io/github/stars/opencontainers/image-spec) ![GitHub last commit](https://img.shields.io/github/last-commit/opencontainers/image-spec)](https://github.com/opencontainers/image-spec/blob/main/annotations.md) - A convention and shared namespace for Docker labels defined by OCI Image Spec.

### Registry

Services to securely store your Docker images.

- [Amazon Elastic Container Registry :yen:](https://aws.amazon.com/ecr/) - Amazon Elastic Container Registry (ECR) is a fully-managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images.
- [Azure Container Registry :yen:](https://azure.microsoft.com/en-us/products/container-registry/#overview) - Manage a Docker private registry as a first-class Azure resource.
- [CargoOS ![GitHub Repo Stars](https://img.shields.io/github/stars/RedCoolBeans/cargos-buildroot) ![GitHub last commit](https://img.shields.io/github/last-commit/RedCoolBeans/cargos-buildroot)](https://github.com/RedCoolBeans/cargos-buildroot) :ice_cube: - A bare essential OS for running the Docker Engine on bare metal or Cloud. By [RedCoolBeans](https://github.com/RedCoolBeans).
- [cleanreg ![GitHub Repo Stars](https://img.shields.io/github/stars/hcguersoy/cleanreg) ![GitHub last commit](https://img.shields.io/github/last-commit/hcguersoy/cleanreg)](https://github.com/hcguersoy/cleanreg) :ice_cube: - A small tool to delete image manifests from a Docker Registry implementing the API v2, dereferencing them for the GC.
- [Cloudsmith :yen:](https://cloudsmith.com/product/formats/docker-registry) - A fully managed package management SaaS, with first-class support for public and private Docker registries (and many others, incl. Helm charts for the Kubernetes ecosystem). Has a generous free-tier and is also completely free for open-source.
- [Container Registry Service :yen:](https://container-registry.com/) - Harbor based Container Management Solution as a Service for teams and organizations. Free tier offers 1 GB storage for private repositories.
- [Cycle.io :yen:](https://cycle.io/) - Bare-metal container hosting.
- [DigitalOcean :yen:](https://www.digitalocean.com/products/container-registry) - DigitalOcean Container Registry.
-   [Docker Hub](https://hub.docker.com/) provided by Docker Inc.
-   [Docker Registry v2][distribution] - The Docker toolset to pack, ship, store, and deliver content
- [Docket ![GitHub Repo Stars](https://img.shields.io/github/stars/netvarun/docket) ![GitHub last commit](https://img.shields.io/github/last-commit/netvarun/docket)](https://github.com/netvarun/docket) :ice_cube: - Custom docker registry that allows for lightning fast deploys through bittorrent.
- [Dragonfly ![GitHub Repo Stars](https://img.shields.io/github/stars/dragonflyoss/Dragonfly2) ![GitHub last commit](https://img.shields.io/github/last-commit/dragonflyoss/Dragonfly2)](https://github.com/dragonflyoss/Dragonfly2) - Provide efficient, stable and secure file distribution and image acceleration based on p2p technology.
-   [GCP Artifact Registry :yen:](https://cloud.google.com/artifact-registry/docs) Fast, private Docker image storage on Google Cloud Platform.
- [Gitea Container Registry](https://docs.gitea.com/usage/packages/container) - Integrated Docker registry in Gitea, ideal for private, small-scale image hosting.
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - GitHub's solution for storing and managing Docker images, with tight integration into GitHub Actions.
- [GitLab Container Registry](https://docs.gitlab.com/user/packages/container_registry/) - Registry focused on using its images in GitLab CI.
-   [Harbor ![GitHub Repo Stars](https://img.shields.io/github/stars/goharbor/harbor) ![GitHub last commit](https://img.shields.io/github/last-commit/goharbor/harbor)](https://github.com/goharbor/harbor) An open source trusted cloud native registry project that stores, signs, and scans content. Supports replication, user management, access control and activity auditing. By [CNCF](https://www.cncf.io) formerly [VMWare][vmware]
- [JFrog Artifactory :yen:](https://jfrog.com/artifactory/) - Artifact Repository Manager, can be used as private Docker Registry as well.
- [Kraken ![GitHub Repo Stars](https://img.shields.io/github/stars/uber/kraken) ![GitHub last commit](https://img.shields.io/github/last-commit/uber/kraken)](https://github.com/uber/kraken) - Uber's Highly scalable P2P docker registry, capable of distributing TBs of data in seconds.
- [nscr ![GitHub Repo Stars](https://img.shields.io/github/stars/jhstatewide/nscr) ![GitHub last commit](https://img.shields.io/github/last-commit/jhstatewide/nscr)](https://github.com/jhstatewide/nscr) - A light-weight, self-contained container registry that's easy to run and maintain.
- [Quay.io :yen:](https://quay.io/) - Secure hosting for private Docker repositories.
- [Registryo ![GitHub Repo Stars](https://img.shields.io/github/stars/inmagik/registryo) ![GitHub last commit](https://img.shields.io/github/last-commit/inmagik/registryo)](https://github.com/inmagik/registryo) - UI and token based authentication server for onpremise docker registry.
- [RepoFlow](https://www.repoflow.io) - A simple and easy-to-use package management platform with Docker support alongside other formats like PyPI, Maven, npm, and Helm. Includes smart search, built-in Docker image scanning, and a great free option for both self-hosted and cloud use.
- [Rescoyl ![GitHub Repo Stars](https://img.shields.io/github/stars/noteed/rescoyl) ![GitHub last commit](https://img.shields.io/github/last-commit/noteed/rescoyl)](https://github.com/noteed/rescoyl) :ice_cube: - Private Docker registry (free and open source).
- [Sonatype Nexus Repository](https://www.sonatype.com/products/sonatype-nexus-repository) - Manage binaries and build artifacts across your software supply chain.

## Development with Docker

### API Client

- [ahab ![GitHub Repo Stars](https://img.shields.io/github/stars/instacart/ahab) ![GitHub last commit](https://img.shields.io/github/last-commit/instacart/ahab)](https://github.com/instacart/ahab) :ice_cube: - Docker event handling with Python.
- [contajners ![GitHub Repo Stars](https://img.shields.io/github/stars/lispyclouds/contajners) ![GitHub last commit](https://img.shields.io/github/last-commit/lispyclouds/contajners)](https://github.com/lispyclouds/contajners) - An idiomatic, data-driven, REPL friendly Clojure client for OCI container engines. By [lispyclouds][lispyclouds].
- [Docker Client for JVM ![GitHub Repo Stars](https://img.shields.io/github/stars/gesellix/docker-client) ![GitHub last commit](https://img.shields.io/github/last-commit/gesellix/docker-client)](https://github.com/gesellix/docker-client) - A Docker remote api client library for the JVM, written in Groovy.
- [Docker Client TypeScript](https://gitlab.com/masaeedu/docker-client) - Docker API client for JavaScript, automatically generated from Swagger API definition from moby repository. By [masaeedu](https://github.com/masaeedu).
- [docker-controller-bot ![GitHub Repo Stars](https://img.shields.io/github/stars/dgongut/docker-controller-bot) ![GitHub last commit](https://img.shields.io/github/last-commit/dgongut/docker-controller-bot)](https://github.com/dgongut/docker-controller-bot) - Telegram bot to control docker containers. By [dgongut](https://github.com/dgongut/).
- [docker-it-scala ![GitHub Repo Stars](https://img.shields.io/github/stars/whisklabs/docker-it-scala) ![GitHub last commit](https://img.shields.io/github/last-commit/whisklabs/docker-it-scala)](https://github.com/whisklabs/docker-it-scala) :ice_cube: - Docker integration testing kit with Scala.
- [docker-java-api ![GitHub Repo Stars](https://img.shields.io/github/stars/amihaiemil/docker-java-api) ![GitHub last commit](https://img.shields.io/github/last-commit/amihaiemil/docker-java-api)](https://github.com/amihaiemil/docker-java-api) :ice_cube: - Lightweight, truly object-oriented, Java client for Docker's API. By [amihaiemil](https://github.com/amihaiemil).
- [docker-maven-plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/fabric8io/docker-maven-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/fabric8io/docker-maven-plugin)](https://github.com/fabric8io/docker-maven-plugin) - A Maven plugin for running and creating Docker images.
- [Docker.DotNet ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/Docker.DotNet) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/Docker.DotNet)](https://github.com/Microsoft/Docker.DotNet) - C#/.NET HTTP client for the Docker remote API.
- [Docker.Registry.DotNet ![GitHub Repo Stars](https://img.shields.io/github/stars/ChangemakerStudios/Docker.Registry.DotNet) ![GitHub last commit](https://img.shields.io/github/last-commit/ChangemakerStudios/Docker.Registry.DotNet)](https://github.com/ChangemakerStudios/Docker.Registry.DotNet) - .NET (C#) Client Library for interacting with a Docker Registry API (v2) [rquackenbush](https://github.com/rquackenbush).
- [dockerode ![GitHub Repo Stars](https://img.shields.io/github/stars/apocas/dockerode) ![GitHub last commit](https://img.shields.io/github/last-commit/apocas/dockerode)](https://github.com/apocas/dockerode) - Docker Remote API node.js module.
- [DoMonit ![GitHub Repo Stars](https://img.shields.io/github/stars/eon01/DoMonit) ![GitHub last commit](https://img.shields.io/github/last-commit/eon01/DoMonit)](https://github.com/eon01/DoMonit) :ice_cube: - A simple Docker Monitoring wrapper For Docker API.
- [go-dockerclient ![GitHub Repo Stars](https://img.shields.io/github/stars/fsouza/go-dockerclient) ![GitHub last commit](https://img.shields.io/github/last-commit/fsouza/go-dockerclient)](https://github.com/fsouza/go-dockerclient/) - Go HTTP client for the Docker remote API.
- [Gradle Docker plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/gesellix/gradle-docker-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/gesellix/gradle-docker-plugin)](https://github.com/gesellix/gradle-docker-plugin) - A Docker remote api plugin for Gradle.
- [Portainer stack utils ![GitHub Repo Stars](https://img.shields.io/github/stars/greenled/portainer-stack-utils) ![GitHub last commit](https://img.shields.io/github/last-commit/greenled/portainer-stack-utils)](https://github.com/greenled/portainer-stack-utils) - Bash script to deploy/update/undeploy Docker stacks in a Portainer instance from a docker-compose yaml file. By [greenled](https://github.com/greenled).
- [sbt-docker ![GitHub Repo Stars](https://img.shields.io/github/stars/marcuslonnberg/sbt-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/marcuslonnberg/sbt-docker)](https://github.com/marcuslonnberg/sbt-docker) - Create Docker images directly from sbt.

### CI/CD

- [Buddy :yen:](https://buddy.works) - The best of Git, build & deployment tools combined into one powerful tool that supercharged our development.
- [Captain ![GitHub Repo Stars](https://img.shields.io/github/stars/harbur/captain) ![GitHub last commit](https://img.shields.io/github/last-commit/harbur/captain)](https://github.com/harbur/captain) - Convert your Git workflow to Docker containers ready for Continuous Delivery.
- [Cyclone ![GitHub Repo Stars](https://img.shields.io/github/stars/caicloud/cyclone) ![GitHub last commit](https://img.shields.io/github/last-commit/caicloud/cyclone)](https://github.com/caicloud/cyclone) :ice_cube: - Powerful workflow engine and end-to-end pipeline solutions implemented with native Kubernetes resources.
- [Defang ![GitHub Repo Stars](https://img.shields.io/github/stars/DefangLabs/defang) ![GitHub last commit](https://img.shields.io/github/last-commit/DefangLabs/defang)](https://github.com/DefangLabs/defang) - Deploy Docker Compose to your favorite cloud in minutes.
- [Depot :yen:](https://depot.dev) - Build Docker images fast, in the cloud. Blazing fast compute, automatic intelligent caching, and zero configuration. [Done in seconds](https://depot.dev/#benchmarks).
- [Diun ![GitHub Repo Stars](https://img.shields.io/github/stars/crazy-max/diun) ![GitHub last commit](https://img.shields.io/github/last-commit/crazy-max/diun)](https://github.com/crazy-max/diun) - Receive notifications when an image or repository is updated on a Docker registry by [crazy-max].
- [dockcheck ![GitHub Repo Stars](https://img.shields.io/github/stars/mag37/dockcheck) ![GitHub last commit](https://img.shields.io/github/last-commit/mag37/dockcheck)](https://github.com/mag37/dockcheck) - A script checking updates for docker images without pulling then auto-update selected/all containers. With notifications, pruning and more.
- [Docker plugin for Jenkins ![GitHub Repo Stars](https://img.shields.io/github/stars/jenkinsci/docker-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/jenkinsci/docker-plugin)](https://github.com/jenkinsci/docker-plugin/) - The aim of the docker plugin is to be able to use a docker host to dynamically provision a slave, run a single build, then tear-down that slave.
- [Drone ![GitHub Repo Stars](https://img.shields.io/github/stars/drone/drone) ![GitHub last commit](https://img.shields.io/github/last-commit/drone/drone)](https://github.com/drone/drone) - Continuous integration server built on Docker and configured using YAML files.
- [Gantry ![GitHub Repo Stars](https://img.shields.io/github/stars/shizunge/gantry) ![GitHub last commit](https://img.shields.io/github/last-commit/shizunge/gantry)](https://github.com/shizunge/gantry) - Automatically update selected Docker swarm services.
- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner) - GitLab has integrated CI to test, build and deploy your code with the use of GitLab runners.
- [Jaypore CI ![GitHub Repo Stars](https://img.shields.io/github/stars/theSage21/jaypore_ci) ![GitHub last commit](https://img.shields.io/github/last-commit/theSage21/jaypore_ci)](https://github.com/theSage21/jaypore_ci) - Simple, very flexible, powerful CI / CD / automation system configured in Python. Offline and local first.
- [Kraken CI ![GitHub Repo Stars](https://img.shields.io/github/stars/Kraken-CI/kraken) ![GitHub last commit](https://img.shields.io/github/last-commit/Kraken-CI/kraken)](https://github.com/Kraken-CI/kraken) - Modern CI/CD, open-source, on-premise system that is highly scalable and focused on testing. One of its executors is Docker. Developed.
- [Microservices Continuous Deployment ![GitHub Repo Stars](https://img.shields.io/github/stars/francescou/docker-continuous-deployment) ![GitHub last commit](https://img.shields.io/github/last-commit/francescou/docker-continuous-deployment)](https://github.com/francescou/docker-continuous-deployment) :ice_cube: - Continuous deployment of a microservices application.
- [mu ![GitHub Repo Stars](https://img.shields.io/github/stars/stelligent/mu) ![GitHub last commit](https://img.shields.io/github/last-commit/stelligent/mu)](https://github.com/stelligent/mu) :ice_cube: - Tool to configure CI/CD of your container applications via AWS CodePipeline, CodeBuild and ECS [Stelligent](https://github.com/stelligent).
- [Popper ![GitHub Repo Stars](https://img.shields.io/github/stars/systemslab/popper) ![GitHub last commit](https://img.shields.io/github/last-commit/systemslab/popper)](https://github.com/systemslab/popper) :ice_cube: - Github actions workflow (HCL syntax) execution engine.
- [Screwdriver :yen:](https://screwdriver.cd/) - Yahoo's OpenSource buildplatform designed for Continous Delivery.
- [Skipper ![GitHub Repo Stars](https://img.shields.io/github/stars/Stratoscale/skipper) ![GitHub last commit](https://img.shields.io/github/last-commit/Stratoscale/skipper)](https://github.com/Stratoscale/skipper) - Easily dockerize your Git repository.
- [SwarmCI ![GitHub Repo Stars](https://img.shields.io/github/stars/ghostsquad/swarmci) ![GitHub last commit](https://img.shields.io/github/last-commit/ghostsquad/swarmci)](https://github.com/ghostsquad/swarmci) :ice_cube: - Create a distributed, isolated task pipeline in your Docker Swarm.
- [Tekton CD](https://tekton.dev/) - A cloud-native pipeline resource.

### Development Environment

- [Binci ![GitHub Repo Stars](https://img.shields.io/github/stars/binci/binci) ![GitHub last commit](https://img.shields.io/github/last-commit/binci/binci)](https://github.com/binci/binci) :ice_cube: - Containerize your development workflow. (formerly DevLab by [TechnologyAdvice](https://github.com/TechnologyAdvice)).
- [coder ![GitHub Repo Stars](https://img.shields.io/github/stars/coder/coder) ![GitHub last commit](https://img.shields.io/github/last-commit/coder/coder)](https://github.com/coder/coder) - Remote development machines powered by Terraform or Docker.
- [construi ![GitHub Repo Stars](https://img.shields.io/github/stars/lstephen/construi) ![GitHub last commit](https://img.shields.io/github/last-commit/lstephen/construi)](https://github.com/lstephen/construi) :ice_cube: - Run your builds inside a Docker defined environment.
- [dde ![GitHub Repo Stars](https://img.shields.io/github/stars/whatwedo/dde) ![GitHub last commit](https://img.shields.io/github/last-commit/whatwedo/dde)](https://github.com/whatwedo/dde) - Local development environment toolset based on Docker. By [whatwedo](https://github.com/whatwedo).
- [DIP ![GitHub Repo Stars](https://img.shields.io/github/stars/bibendi/dip) ![GitHub last commit](https://img.shields.io/github/last-commit/bibendi/dip)](https://github.com/bibendi/dip) - CLI utility for straightforward provisioning and interacting with an application configured by docker-compose. By [bibendi](https://github.com/bibendi).
- [dobi ![GitHub Repo Stars](https://img.shields.io/github/stars/dnephin/dobi) ![GitHub last commit](https://img.shields.io/github/last-commit/dnephin/dobi)](https://github.com/dnephin/dobi) :ice_cube: - A build automation tool for Docker applications. By [dnephin](https://github.com/dnephin).
- [Docker Missing Tools ![GitHub Repo Stars](https://img.shields.io/github/stars/nandoquintana/docker-missing-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/nandoquintana/docker-missing-tools)](https://github.com/nandoquintana/docker-missing-tools) :ice_cube: - A set of bash commands to shortcut typical docker dev-ops. An alternative to creating typical helper scripts like "build.sh" and "deploy.sh" inside code repositories. By [NandoQuintana](https://github.com/nandoquintana).
- [Docker-Arch ![GitHub Repo Stars](https://img.shields.io/github/stars/Ph3nol/Docker-Arch) ![GitHub last commit](https://img.shields.io/github/last-commit/Ph3nol/Docker-Arch)](https://github.com/Ph3nol/Docker-Arch) :ice_cube: - Generate Web/CLI projects Dockerized development environments, from 1 simple YAML file. By [Ph3nol](https://github.com/ph3nol).
- [Docker-sync ![GitHub Repo Stars](https://img.shields.io/github/stars/EugenMayer/docker-sync) ![GitHub last commit](https://img.shields.io/github/last-commit/EugenMayer/docker-sync)](https://github.com/EugenMayer/docker-sync) - Drastically improves performance ([50-70x ![GitHub Repo Stars](https://img.shields.io/github/stars/EugenMayer/docker-sync) ![GitHub last commit](https://img.shields.io/github/last-commit/EugenMayer/docker-sync)](https://github.com/EugenMayer/docker-sync/wiki/4.-Performance)) when using Docker for development on Mac OS X/Windows and Linux while sharing code to the container. By [EugenMayer](https://github.com/EugenMayer).
- [docker-vm ![GitHub Repo Stars](https://img.shields.io/github/stars/shyiko/docker-vm) ![GitHub last commit](https://img.shields.io/github/last-commit/shyiko/docker-vm)](https://github.com/shyiko/docker-vm) :ice_cube: - Simple and transparent alternative to boot2docker (backed by Vagrant).
- [DockerDL ![GitHub Repo Stars](https://img.shields.io/github/stars/matifali/dockerdl) ![GitHub last commit](https://img.shields.io/github/last-commit/matifali/dockerdl)](https://github.com/matifali/dockerdl) - Deep Learning Docker Images. Don't waste time setting up a deep learning env when you can get a deep learning environment with everything pre-installed.
- [Eclipse Che ![GitHub Repo Stars](https://img.shields.io/github/stars/eclipse/che) ![GitHub last commit](https://img.shields.io/github/last-commit/eclipse/che)](https://github.com/eclipse/che) - Developer workspace server with Docker runtimes, cloud IDE, next-generation Eclipse IDE.
- [EnvCLI ![GitHub Repo Stars](https://img.shields.io/github/stars/EnvCLI/EnvCLI) ![GitHub last commit](https://img.shields.io/github/last-commit/EnvCLI/EnvCLI)](https://github.com/EnvCLI/EnvCLI) - Replace your local installation of Node, Go, ... with project-specific docker containers. By [EnvCLI](https://github.com/EnvCLI).
- [ESP32 Linux - Docker builder ![GitHub Repo Stars](https://img.shields.io/github/stars/hpsaturn/esp32s3-linux) ![GitHub last commit](https://img.shields.io/github/last-commit/hpsaturn/esp32s3-linux)](https://github.com/hpsaturn/esp32s3-linux) - Container solution to compile Linux and develop it for ESP32 microcontrollers - By [Hpsaturn](https://github.com/hpsaturn).
- [Gebug ![GitHub Repo Stars](https://img.shields.io/github/stars/moshebe/gebug) ![GitHub last commit](https://img.shields.io/github/last-commit/moshebe/gebug)](https://github.com/moshebe/gebug) - A tool that makes debugging of Dockerized Go applications super easy by enabling Debugger and Hot-Reload features, seamlessly.
- [HarborPilot ![GitHub Repo Stars](https://img.shields.io/github/stars/potterwhite/HarborPilot) ![GitHub last commit](https://img.shields.io/github/last-commit/potterwhite/HarborPilot)](https://github.com/potterwhite/HarborPilot) - Automated multi-platform Docker image builder for embedded Linux development (RK3588, RV1126, RK3568). Features three-layer config inheritance, PORT_SLOT-based port allocation, and cross-version Ubuntu support (20.04/22.04/24.04). By [potterwhite](https://github.com/potterwhite).
- [Kitt ![GitHub Repo Stars](https://img.shields.io/github/stars/senges/kitt) ![GitHub last commit](https://img.shields.io/github/last-commit/senges/kitt)](https://github.com/senges/kitt) :ice_cube: - A portable and disposable Shell environment, based on Docker and Nix. By [senges](https://github.com/senges).
- [Lando ![GitHub Repo Stars](https://img.shields.io/github/stars/lando/lando) ![GitHub last commit](https://img.shields.io/github/last-commit/lando/lando)](https://github.com/lando/lando) - Lando is for developers who want to quickly specify and painlessly spin up the services and tools needed to develop their projects. By [Tandem](https://www.thinktandem.io/).
- [Rust Universal Compiler ![GitHub Repo Stars](https://img.shields.io/github/stars/Peco602/rust-universal-compiler) ![GitHub last commit](https://img.shields.io/github/last-commit/Peco602/rust-universal-compiler)](https://github.com/Peco602/rust-universal-compiler) :ice_cube: - Container solution to compile Rust projects for Linux, macOS and Windows. By [Peco602][peco602].
- [uniget ![GitHub Repo Stars](https://img.shields.io/github/stars/uniget-org/cli) ![GitHub last commit](https://img.shields.io/github/last-commit/uniget-org/cli)](https://github.com/uniget-org/cli) - Uni(versal)get, the installer and updater for container tools and beyond (formerly docker-setup). By [nicholasdille](https://github.com/nicholasdille).
- [Vagga ![GitHub Repo Stars](https://img.shields.io/github/stars/tailhook/vagga) ![GitHub last commit](https://img.shields.io/github/last-commit/tailhook/vagga)](https://github.com/tailhook/vagga) :ice_cube: - Vagga is a containerisation tool without daemons. It is a fully-userspace container engine inspired by Vagrant and Docker, specialized for development environments.
- [Zsh-in-Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/deluan/zsh-in-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/deluan/zsh-in-docker)](https://github.com/deluan/zsh-in-docker) - Install Zsh, Oh-My-Zsh and plugins inside a Docker container with one line! By [Deluan](https://www.deluan.com).

### Garbage Collection

- [caduc ![GitHub Repo Stars](https://img.shields.io/github/stars/tjamet/caduc) ![GitHub last commit](https://img.shields.io/github/last-commit/tjamet/caduc)](https://github.com/tjamet/caduc) :ice_cube: - A docker garbage collector cleaning stuff you did not use recently.
- [Docker Clean ![GitHub Repo Stars](https://img.shields.io/github/stars/ZZROTDesign/docker-clean) ![GitHub last commit](https://img.shields.io/github/last-commit/ZZROTDesign/docker-clean)](https://github.com/ZZROTDesign/docker-clean) :ice_cube: - A script that cleans Docker containers, images and volumes.
- [docker-custodian ![GitHub Repo Stars](https://img.shields.io/github/stars/Yelp/docker-custodian) ![GitHub last commit](https://img.shields.io/github/last-commit/Yelp/docker-custodian)](https://github.com/Yelp/docker-custodian) - Keep docker hosts tidy. By [Yelp](https://github.com/Yelp).
- [docker_gc ![GitHub Repo Stars](https://img.shields.io/github/stars/pdacity/docker_gc) ![GitHub last commit](https://img.shields.io/github/last-commit/pdacity/docker_gc)](https://github.com/pdacity/docker_gc) :ice_cube: - Image for automatic removing unused Docker Swarm objects. Also works just as Docker Service.
- [Docuum ![GitHub Repo Stars](https://img.shields.io/github/stars/stepchowfun/docuum) ![GitHub last commit](https://img.shields.io/github/last-commit/stepchowfun/docuum)](https://github.com/stepchowfun/docuum) - Least recently used (LRU) eviction of Docker images.

### Serverless

- [Apache OpenWhisk ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/openwhisk) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/openwhisk)](https://github.com/apache/openwhisk) - A serverless, open source cloud platform that executes functions in response to events at any scale. By [apache](https://github.com/apache).
- [Funker ![GitHub Repo Stars](https://img.shields.io/github/stars/bfirsh/funker-example-voting-app) ![GitHub last commit](https://img.shields.io/github/last-commit/bfirsh/funker-example-voting-app)](https://github.com/bfirsh/funker-example-voting-app) :ice_cube: - Functions as Docker containers example voting app. By [bfirsh](https://github.com/bfirsh).
- [IronFunctions ![GitHub Repo Stars](https://img.shields.io/github/stars/iron-io/functions) ![GitHub last commit](https://img.shields.io/github/last-commit/iron-io/functions)](https://github.com/iron-io/functions) :ice_cube: - The serverless microservices platform FaaS (Functions as a Service) which uses Docker containers to run Any language or AWS Lambda functions.
- [Koyeb](https://www.koyeb.com/) - :yen: Koyeb is a developer-friendly serverless platform to deploy apps globally. Seamlessly run Docker containers, web apps, and APIs with git-based deployment, native autoscaling, a global edge network, and built-in service mesh and discovery.
- [OpenFaaS ![GitHub Repo Stars](https://img.shields.io/github/stars/openfaas/faas) ![GitHub last commit](https://img.shields.io/github/last-commit/openfaas/faas)](https://github.com/openfaas/faas) - A complete serverless functions framework for Docker and Kubernetes. By [OpenFaaS](https://github.com/openfaas).

- [SCAR ![GitHub Repo Stars](https://img.shields.io/github/stars/grycap/scar) ![GitHub last commit](https://img.shields.io/github/last-commit/grycap/scar)](https://github.com/grycap/scar) :ice_cube: - Serverless Container-aware Architectures (SCAR) is a serverless framework that allows easy deployment and execution of containers (e.g. Docker) in Serverless environments (e.g. Lambda).
### Testing

- [Container Structure Test ![GitHub Repo Stars](https://img.shields.io/github/stars/GoogleContainerTools/container-structure-test) ![GitHub last commit](https://img.shields.io/github/last-commit/GoogleContainerTools/container-structure-test)](https://github.com/GoogleContainerTools/container-structure-test) - A framework to validate the structure of an image by checking the outputs of commands or the contents of the filesystem. By [GoogleContainerTools][googlecontainertools].
- [dgoss ![GitHub Repo Stars](https://img.shields.io/github/stars/goss-org/goss) ![GitHub last commit](https://img.shields.io/github/last-commit/goss-org/goss)](https://github.com/goss-org/goss/tree/master/extras/dgoss) - A fast YAML based tool for validating docker containers.
- [DockerSpec ![GitHub Repo Stars](https://img.shields.io/github/stars/zuazo/dockerspec) ![GitHub last commit](https://img.shields.io/github/last-commit/zuazo/dockerspec)](https://github.com/zuazo/dockerspec) :ice_cube: - A small Ruby Gem to run RSpec and Serverspec, Infrataster and Capybara tests against Dockerfiles or Docker images easily. By [zuazo](https://github.com/zuazo).
- [EZDC ![GitHub Repo Stars](https://img.shields.io/github/stars/lynchborg/ezdc) ![GitHub last commit](https://img.shields.io/github/last-commit/lynchborg/ezdc)](https://github.com/lynchborg/ezdc) :ice_cube: - Golang test harness for easily setting up tests that rely on services in a docker-compose.yml. By [byrnedo].
-   [InSpec][inspec] - InSpec is an open-source testing framework for infrastructure with a human- and machine-readable language for specifying compliance, security and policy requirements. By [chef](https://github.com/chef)
- [Kurtosis ![GitHub Repo Stars](https://img.shields.io/github/stars/kurtosis-tech/kurtosis) ![GitHub last commit](https://img.shields.io/github/last-commit/kurtosis-tech/kurtosis)](https://github.com/kurtosis-tech/kurtosis) - A composable build system for multi-container test environments that provides developers with: a powerful Python-like SDK for environment configuration, a compile-time validator to verify environment behavior & setup, and a runtime for environment execution, monitoring, & debugging capabilities. By [Kurtosis](https://www.kurtosis.com/).
- [Pull Dog ![GitHub Repo Stars](https://img.shields.io/github/stars/apps/pull-dog) ![GitHub last commit](https://img.shields.io/github/last-commit/apps/pull-dog)](https://github.com/apps/pull-dog) - A GitHub app that automatically creates Docker-based test environments for your pull requests, from your docker-compose files. Not open source.
- [Pumba ![GitHub Repo Stars](https://img.shields.io/github/stars/alexei-led/pumba) ![GitHub last commit](https://img.shields.io/github/last-commit/alexei-led/pumba)](https://github.com/alexei-led/pumba) - Chaos testing tool for Docker. Can be deployed on kubernetes and CoreOS cluster. By [alexei-led](https://github.com/alexei-led).

### Wrappers

- [Ansible](https://docs.ansible.com/projects/ansible/latest/collections/community/general/docker_container_module.html) - Manage the life cycle of Docker containers. By RedHat.
- [dexec ![GitHub Repo Stars](https://img.shields.io/github/stars/docker-exec/dexec) ![GitHub last commit](https://img.shields.io/github/last-commit/docker-exec/dexec)](https://github.com/docker-exec/dexec) :ice_cube: - Command line interface written in Go for running code with Docker Exec images.
- [dockerized ![GitHub Repo Stars](https://img.shields.io/github/stars/benzaita/dockerized-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/benzaita/dockerized-cli)](https://github.com/benzaita/dockerized-cli) :ice_cube: - Seamlessly execute commands in a container.
- [Dray ![GitHub Repo Stars](https://img.shields.io/github/stars/CenturyLinkLabs/dray) ![GitHub last commit](https://img.shields.io/github/last-commit/CenturyLinkLabs/dray)](https://github.com/CenturyLinkLabs/dray) :ice_cube: - An engine for managing the execution of container-based workflows.
- [Hokusai ![GitHub Repo Stars](https://img.shields.io/github/stars/artsy/hokusai) ![GitHub last commit](https://img.shields.io/github/last-commit/artsy/hokusai)](https://github.com/artsy/hokusai) - A Docker + Kubernetes CLI for application developers; used to containerize an application and to manage its lifecycle throughout development, testing, and release cycles. From [artsy](https://github.com/artsy).
- [Preevy ![GitHub Repo Stars](https://img.shields.io/github/stars/livecycle/preevy) ![GitHub last commit](https://img.shields.io/github/last-commit/livecycle/preevy)](https://github.com/livecycle/preevy) - Preview environments for Docker and Docker Compose projects. Test your changes and get feedback from devs and non-devs (Product/Design) by deploying pull requests to the your cloud provider as part of your CI pipeline.
- [Shutit ![GitHub Repo Stars](https://img.shields.io/github/stars/ianmiell/shutit) ![GitHub last commit](https://img.shields.io/github/last-commit/ianmiell/shutit)](https://github.com/ianmiell/shutit) :ice_cube: - Tool for building and maintaining complex Docker deployments.
- [subuser ![GitHub Repo Stars](https://img.shields.io/github/stars/subuser-security/subuser) ![GitHub last commit](https://img.shields.io/github/last-commit/subuser-security/subuser)](https://github.com/subuser-security/subuser) - Makes it easy to securely and portably run graphical desktop applications in Docker.
- [Terraform cloud-init config ![GitHub Repo Stars](https://img.shields.io/github/stars/christippett/terraform-cloudinit-container-server) ![GitHub last commit](https://img.shields.io/github/last-commit/christippett/terraform-cloudinit-container-server)](https://github.com/christippett/terraform-cloudinit-container-server) :ice_cube: - Terraform module for deploying a single Docker image or `docker-compose.yaml` file to any Cloud™ VM.
- [Turbo ![GitHub Repo Stars](https://img.shields.io/github/stars/ramitsurana/turbo) ![GitHub last commit](https://img.shields.io/github/last-commit/ramitsurana/turbo)](https://github.com/ramitsurana/turbo) :ice_cube: - Simple and Powerful utility for docker. By [ramitsurana][ramitsurana].
- [udocker ![GitHub Repo Stars](https://img.shields.io/github/stars/indigo-dc/udocker) ![GitHub last commit](https://img.shields.io/github/last-commit/indigo-dc/udocker)](https://github.com/indigo-dc/udocker) - A tool to execute simple docker containers in batch or interactive systems without root privileges.
- [Vagrant - Docker provider](https://developer.hashicorp.com/vagrant/docs/providers/docker/basics) - Good starting point is [vagrant-docker-example ![GitHub Repo Stars](https://img.shields.io/github/stars/bubenkoff/vagrant-docker-example) ![GitHub last commit](https://img.shields.io/github/last-commit/bubenkoff/vagrant-docker-example)](https://github.com/bubenkoff/vagrant-docker-example).

## Services based on Docker (mostly :yen:)

### CI Services

- [CircleCI](https://circleci.com/) - :yen: Push or pull Docker images from your build environment, or build and run containers right on CircleCI.
- [CodeFresh](https://codefresh.io) - :yen: Everything you need to build, test, and share your Docker applications. Provides automated end to end testing.
- [CodeShip](https://www.cloudbees.com/blog/how-to-run-codeship-parallel-test-pipelines-efficiently-for-optimal-ci-parallelization) - :yen: Work with your established Docker workflows while automating your testing and deployment tasks with our hosted platform dedicated to speed and security.
- [ConcourseCI](https://concourse-ci.org) - :yen: A CI SaaS platform for developers and DevOps teams pipeline oriented.
-   [Semaphore CI](https://semaphore.io/) :yen: — A high-performance cloud solution that makes it easy to build, test and ship your containers to production.
- [TravisCI](https://www.travis-ci.com/) - :yen: A Free github projects continuous integration Saas platform for developers and Devops.

### CaaS

- [Amazon ECS](https://aws.amazon.com/ecs/) - :yen: A management service on EC2 that supports Docker containers.
- [Appfleet](https://appfleet.com/) - :yen: Edge platform to deploy and manage containerized services globally. The system will route the traffic to the closest location for lower latency.
- [Azure AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/) - :yen: Simplify Kubernetes management, deployment, and operations. Use a fully managed Kubernetes container orchestration service.
- [Cloud 66](https://www.cloud66.com) - :yen: Full-stack hosted container management as a service.
- [Giant Swarm](https://www.giantswarm.io/) - :yen: Simple microservice infrastructure. Deploy your containers in seconds.
- [Google Container Engine](https://docs.cloud.google.com/kubernetes-engine/docs) - :yen: Docker containers on Google Cloud Computing powered by [Kubernetes][kubernetes].
- [Mesosphere DC/OS Platform](https://d2iq.com/products/dcos) - :yen: Integrated platform for data and containers built on Apache Mesos.
- [Red Hat OpenShift Dedicated](https://www.redhat.com/en/technologies/cloud-computing/openshift/dedicated) - :yen: Fully-managed Red Hat® OpenShift® service on Amazon Web Services and Google Cloud.
- [Triton](https://www.joyent.com/) - :yen: Elastic container-native infrastructure by Joyent.

### Monitoring Services

- [AppDynamics ![GitHub Repo Stars](https://img.shields.io/github/stars/Appdynamics/docker-monitoring-extension) ![GitHub last commit](https://img.shields.io/github/last-commit/Appdynamics/docker-monitoring-extension)](https://github.com/Appdynamics/docker-monitoring-extension) - Docker Monitoring extension gathers metrics from the Docker Remote API, either using Unix Socket or TCP.
- [Better Stack](https://betterstack.com/community/guides/scaling-docker/) - :yen: A Docker-compatible observability stack that delivers robust log aggregation and uptime monitoring capabilities for various software application.
- [Broadcom Docker Monitoring](https://www.broadcom.com/info/aiops/docker-monitoring) - :yen: Agile Operations solutions from Broadcom deliver the modern Docker monitoring businesses need to accelerate and optimize the performance of microservices and the dynamic Docker environments running them. Monitor both the Docker environment and apps that run inside them. (former CA Technologies).
-   [Collecting docker logs and stats with Splunk](https://www.splunk.com/en_us/blog/tips-and-tricks/collecting-docker-logs-and-stats-with-splunk.html)
- [Datadog](https://www.datadoghq.com/) - :yen: Datadog is a full-stack monitoring service for large-scale cloud environments that aggregates metrics/events from servers, databases, and applications. It includes support for Docker, Kubernetes, and Mesos.
- [Prometheus](https://prometheus.io/) - :yen: Open-source service monitoring system and time series database.
- [Site24x7](https://www.site24x7.com/docker-monitoring.html) - :yen: Docker Monitoring for DevOps and IT is a SaaS Pay per Host model.
- [SPM for Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/sematext/sematext-agent-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/sematext/sematext-agent-docker)](https://github.com/sematext/sematext-agent-docker) :ice_cube: - :yen: Monitoring of host and container metrics, Docker events and logs. Automatic log parser. Anomaly Detection and alerting for metrics and logs. [sematext](https://github.com/sematext).
- [Sysdig Monitor](https://www.sysdig.com/products/monitor) - :yen: Sysdig Monitor can be used as either software or a SaaS service to monitor, alert, and troubleshoot containers using system calls. It has container-specific features for Docker and Kubernetes.

# Useful Resources

-   **[Valuable Docker Links](http://nane.kratzke.pages.mylab.th-luebeck.de/about/blog/2014/08/24/valuable-docker-links/)** High quality articles about docker! **MUST SEE**
-   [Cloud Native Landscape ![GitHub Repo Stars](https://img.shields.io/github/stars/cncf/landscape) ![GitHub last commit](https://img.shields.io/github/last-commit/cncf/landscape)](https://github.com/cncf/landscape)
- [Docker Blog](https://www.docker.com/blog/) - Regular updates about Docker, the community and tools.
-   [Docker Certification](https://intellipaat.com/docker-training-course/?US) :yen: will help you to will Learn Docker containerization, running Docker containers, Image creation, Dockerfile, Docker orchestration, security best practices, and more through hands-on projects and case studies and helps to clear Docker Certified Associate.

- [Docker dev bookmarks](https://www.codever.dev/search?q=docker) - Use the tag [docker](https://www.codever.dev/bookmarks/t/docker).
-   [Docker in Action, Second Edition](https://www.manning.com/books/docker-in-action-second-edition)
-   [Docker in Practice, Second Edition](https://www.manning.com/books/docker-in-practice-second-edition)
- [Docker packaging guide for Python](https://pythonspeed.com/docker/) - A series of detailed articles on the specifics of Docker packaging for Python.
-   [Learn Docker in a Month of Lunches](https://www.manning.com/books/learn-docker-in-a-month-of-lunches)
- [Learn Docker](https://coursesity.com/blog/best-docker-tutorials/) - Learn Docker - curated list of the top online docker tutorials and courses.
-   [Programming Community Curated Resources for learning Docker](https://hackr.io/tutorials/learn-docker)

## Awesome Lists

- [Awesome CI/CD ![GitHub Repo Stars](https://img.shields.io/github/stars/cicdops/awesome-ciandcd) ![GitHub last commit](https://img.shields.io/github/last-commit/cicdops/awesome-ciandcd)](https://github.com/cicdops/awesome-ciandcd) :ice_cube: - Not specific to docker but relevant.
- [Awesome Compose ![GitHub Repo Stars](https://img.shields.io/github/stars/docker/awesome-compose) ![GitHub last commit](https://img.shields.io/github/last-commit/docker/awesome-compose)](https://github.com/docker/awesome-compose) - Docker Compose samples.
-   [Awesome Kubernetes ![GitHub Repo Stars](https://img.shields.io/github/stars/ramitsurana/awesome-kubernetes) ![GitHub last commit](https://img.shields.io/github/last-commit/ramitsurana/awesome-kubernetes)](https://github.com/ramitsurana/awesome-kubernetes) by [ramitsurana][ramitsurana]
-   [Awesome Linux Container ![GitHub Repo Stars](https://img.shields.io/github/stars/Friz-zy/awesome-linux-containers) ![GitHub last commit](https://img.shields.io/github/last-commit/Friz-zy/awesome-linux-containers)](https://github.com/Friz-zy/awesome-linux-containers) more general about container than this repo, by [Friz-zy](https://github.com/Friz-zy).
-   [Awesome Selfhosted ![GitHub Repo Stars](https://img.shields.io/github/stars/awesome-selfhosted/awesome-selfhosted) ![GitHub last commit](https://img.shields.io/github/last-commit/awesome-selfhosted/awesome-selfhosted)](https://github.com/awesome-selfhosted/awesome-selfhosted) list of Free Software network services and web applications which can be hosted locally by running in a classical way (setup local web server and run applications from there) or in a Docker container. By [Kickball](https://github.com/Kickball)
-   [Awesome Sysadmin ![GitHub Repo Stars](https://img.shields.io/github/stars/n1trux/awesome-sysadmin) ![GitHub last commit](https://img.shields.io/github/last-commit/n1trux/awesome-sysadmin)](https://github.com/n1trux/awesome-sysadmin) by [n1trux](https://github.com/n1trux)
-   [ToolsOfTheTrade ![GitHub Repo Stars](https://img.shields.io/github/stars/cjbarber/ToolsOfTheTrade) ![GitHub last commit](https://img.shields.io/github/last-commit/cjbarber/ToolsOfTheTrade)](https://github.com/cjbarber/ToolsOfTheTrade) a list of SaaS and On premise applications by [cjbarber](https://github.com/cjbarber)

## Demos and Examples

-   [An Annotated Docker Config for Frontend Web Development](https://nystudio107.com/blog/an-annotated-docker-config-for-frontend-web-development) A local development environment with Docker allows you to shrink-wrap the devops your project needs as config, making onboarding frictionless.
-   [Local Docker DB ![GitHub Repo Stars](https://img.shields.io/github/stars/alexmacarthur/local-docker-db) ![GitHub last commit](https://img.shields.io/github/last-commit/alexmacarthur/local-docker-db)](https://github.com/alexmacarthur/local-docker-db) a list of docker-compose samples for a lot of databases by [alexmacarthur](https://github.com/alexmacarthur)
-   [Webstack-micro ![GitHub Repo Stars](https://img.shields.io/github/stars/ferbs/webstack-micro) ![GitHub last commit](https://img.shields.io/github/last-commit/ferbs/webstack-micro)](https://github.com/ferbs/webstack-micro) Demo web app showing how Docker Compose might be used to set up an API Gateway, centralized authentication, background workers, and WebSockets as containerized services.

## Good Tips

-   [Docker Caveats](http://docker-saigon.github.io/post/Docker-Caveats/) What You Should Know About Running Docker In Production (written 11 APRIL 2016) **MUST SEE**
- [Docker Containers on the Desktop](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/) - The **funniest way** to learn about docker by [jessfraz][jessfraz] who also gave a [presentation](https://www.youtube.com/watch?v=1qlLUf7KtAw) about it @ DockerCon 2015.
-   [Docker vs. VMs? Combining Both for Cloud Portability Nirvana](https://www.flexera.com/blog/finops/)
- [Dockerfile best practices ![GitHub Repo Stars](https://img.shields.io/github/stars/hexops/dockerfile) ![GitHub last commit](https://img.shields.io/github/last-commit/hexops/dockerfile)](https://github.com/hexops/dockerfile) :ice_cube: - This repository has best-practices for writing Dockerfiles.
-   [Don't Repeat Yourself with Anchors, Aliases and Extensions in Docker Compose Files](https://medium.com/@kinghuang/docker-compose-anchors-aliases-extensions-a1e4105d70bd) by [King Chung Huang](https://github.com/kinghuang)
-   [GUI Apps with Docker](http://fabiorehm.com/blog/2014/09/11/running-gui-apps-with-docker/) by [fgrehm][fgrehm]

## Raspberry Pi & ARM

-   [Docker Pirates ARMed with explosive stuff](https://blog.hypriot.com/) Huge resource on clustering, swarm, docker, pre-installed image for SD card on Raspberry Pi
-   [Get Docker up and running on the RaspberryPi in three steps ![GitHub Repo Stars](https://img.shields.io/github/stars/umiddelb/armhf) ![GitHub last commit](https://img.shields.io/github/last-commit/umiddelb/armhf)](https://github.com/umiddelb/armhf/wiki/Get-Docker-up-and-running-on-the-RaspberryPi-%28ARMv6%29-in-three-steps)
-   [git push docker containers to linux devices](https://www.balena.io) Modern DevOps for IoT, leveraging git and Docker.
-   [Installing, running, using Docker on armhf (ARMv7) devices ![GitHub Repo Stars](https://img.shields.io/github/stars/umiddelb/armhf) ![GitHub last commit](https://img.shields.io/github/last-commit/umiddelb/armhf)](https://github.com/umiddelb/armhf/wiki/Installing,-running,-using-docker-on-armhf-%28ARMv7%29-devices)

## Security

-   [Bringing new security features to Docker](https://opensource.com/business/14/9/security-for-docker)
-   [CVE Scanning Alpine images with Multi-stage builds in Docker 17.05 ![GitHub Repo Stars](https://img.shields.io/github/stars/tomwillfixit/alpine-cvecheck) ![GitHub last commit](https://img.shields.io/github/last-commit/tomwillfixit/alpine-cvecheck)](https://github.com/tomwillfixit/alpine-cvecheck) by [tomwillfixit](https://twitter.com/tomwillfixit)
-   [Docker Secure Deployment Guidelines ![GitHub Repo Stars](https://img.shields.io/github/stars/AonCyberLabs/Docker-Secure-Deployment-Guidelines) ![GitHub last commit](https://img.shields.io/github/last-commit/AonCyberLabs/Docker-Secure-Deployment-Guidelines)](https://github.com/AonCyberLabs/Docker-Secure-Deployment-Guidelines)
-   [Docker Security - Quick Reference](https://binarymist.io/publication/docker-security/)
-   [Docker Security: Are Your Containers Tightly Secured to the Ship? SlideShare](https://www.slideshare.net/slideshow/docker-security-are-your-containers-tightly-secured-to-the-ship/43834790)
-   [How CVE's are handled on Offical Docker Images ![GitHub Repo Stars](https://img.shields.io/github/stars/docker-library/official-images) ![GitHub last commit](https://img.shields.io/github/last-commit/docker-library/official-images)](https://github.com/docker-library/official-images/issues/1448)
-   [Lynis is an open source security auditing tool including Docker auditing](https://cisofy.com/lynis/)
-   [Security Best Practices for Building Docker Images](https://linux-audit.com/tags/docker/)
-   [Software Engineering Radio interview of Docker Security Team Lead (Diogo Mónica)](https://www.se-radio.net/2017/05/se-radio-episode-290-diogo-monica-on-docker-security/)
-   [Ten Docker Image Security Best Practices Cheat Sheet](https://snyk.io/blog/10-docker-image-security-best-practices/)
-   [Top ten most popular docker images each contain at least 30 vulnerabilities](https://snyk.io/blog/top-ten-most-popular-docker-images-each-contain-at-least-30-vulnerabilities/)
-   [Tuning Docker with the newest security enhancements](https://opensource.com/business/15/3/docker-security-tuning)
-   [10 best practices to containerize Node.js web applications with Docker](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)

## Videos

-   [Contributing to Docker by Andrew "Tianon" Page (InfoSiftr)](https://www.youtube.com/watch?v=1jwo8-1HYYg) (34:31)
-   [Deploying and scaling applications with Docker, Swarm, and a tiny bit of Python magic](https://www.youtube.com/watch?v=GpHMTR7P2Ms) (3:11:06) by [jpetazzo][jpetazzo]
-   [Docker and SELinux by Daniel Walsh from Red Hat](https://www.youtube.com/watch?v=zWGFqMuEHdw) (40:23)
-   [Docker Course](https://www.youtube.com/watch?v=UZpyvK6UGFo) (Spanish) by [pablokbs](https://github.com/pablokbs)
-   [Docker for Developers](https://www.youtube.com/watch?v=FdkNAjjO5yQ) (54:26) by [jpetazzo][jpetazzo] <== Good introduction, context, demo
-   [Docker from scratch](https://www.youtube.com/playlist?list=PLLhEJK7fQIxD-btrjrqdEfQHbkZnQrmqE) (1:22:01) on YouTube by Paris Nakita Kejser
-   [Docker: How to Use Your Own Private Registry](https://www.youtube.com/watch?v=CAewZCBT4PI) (15:01)
-   [Docker in Production](https://www.youtube.com/watch?v=Glk5d5WP6MI) by [jpetazzo][jpetazzo] (36:05)
-   [Docker Primer to Docker Compose](https://www.youtube.com/watch?v=G-s2GXGAjTk) (1:56:45) on YouTube by LoginRadius
-   [Docker Registry from scratch](https://www.youtube.com/playlist?list=PLLhEJK7fQIxAz3d4Fj3edq7UcxEhdTCBm) (44:40) on YouTube by Paris Nakita Kejser
-   [Docker Swarm from scratch](https://www.youtube.com/playlist?list=PLLhEJK7fQIxAY4gZd1Wl-GsLvg-e9Ap1e) (1:41:28) on YouTube by Paris Nakita Kejser
-   [Extending Docker with Plugins](https://vimeo.com/110835013) (15:21)
-   [From Local Docker Development to Production Deployments](https://www.youtube.com/watch?v=7CZFpHUPqXw) by [jpetazzo][jpetazzo] @ AWS re:Invent 2015
-   [Immutable Infrastructure with Docker and EC2 by Michael Bryzek (Gilt)](https://www.youtube.com/watch?v=GaHzdqFithc) (42:04)
-   [Introduction to Docker and containers](https://www.youtube.com/watch?v=ZVaRK10HBjo) (3:09:00) by [jpetazzo][jpetazzo]
-   [Logging on Docker: What You Need to Know](https://vimeo.com/123341629) (51:27)
-   [Performance Analysis of Docker - Jeremy Eder](https://www.youtube.com/watch?v=6f2E6PKYb0w) (1:36:58)
-   [Scalable Microservices with Kubernetes](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615) Free Udacity course
-   [State of containers: a debate with CoreOS, VMware and Google](https://www.youtube.com/watch?v=IiITP3yIRd8) (27:38)

# Communities and Meetups

## Brazilian

-   [Docker BR on Telegram](https://telegram.me/dockerbr)

## English

-   [Docker Community](https://www.docker.com/community/)
-   [Docker Events](https://www.docker.com/events/)
-   [Docker Online Meetup](https://www.meetup.com/en-AU/Docker-Online-Meetup/)
-   [Docker Reddit Community](https://www.reddit.com/r/docker/)

## Russian

-   [Docker Russian-speaking Community](https://t.me/docker_ru)

## Spanish

-   [Docker Tips](https://dockertips.com/)

## Stargazers over time

[![Stargazers over time](https://starchart.cc/veggiemonk/awesome-docker.svg?variant=adaptive)](https://starchart.cc/veggiemonk/awesome-docker)

[contributing]: https://github.com/veggiemonk/awesome-docker/blob/master/.github/CONTRIBUTING.md
[calico]: https://github.com/projectcalico/calico
[containx]: https://github.com/ContainX
[coreos]: https://github.com/coreos
[deepfence]: https://github.com/deepfence
[distribution]: https://github.com/docker/distribution
[docker-flow]: https://github.com/docker-flow
[docker-for-windows]: https://docs.docker.com/desktop/setup/install/windows-install/
[docker]: https://github.com/docker
[dozzle]: https://github.com/amir20/dozzle
[editreadme]: https://github.com/veggiemonk/awesome-docker/edit/master/README.md
[fgrehm]: https://github.com/fgrehm
[gliderlabs]: https://github.com/gliderlabs
[googlecontainertools]: https://github.com/GoogleContainerTools
[inspec]: https://github.com/inspec/inspec
[jessfraz]: https://github.com/jessfraz
[jpetazzo]: https://github.com/jpetazzo
[jwilder]: https://github.com/jwilder
[kubernetes]: https://kubernetes.io
[lispyclouds]: https://github.com/lispyclouds
[nginxproxy]: https://github.com/nginx-proxy/nginx-proxy
[openshift]: https://okd.io/
[powerman]: https://github.com/powerman
[progrium]: https://github.com/progrium
[ramitsurana]: https://github.com/ramitsurana
[sindresorhus]: https://github.com/sindresorhus/awesome
[spotify]: https://github.com/spotify
[vegasbrianc]: https://github.com/vegasbrianc
[vmware]: https://github.com/vmware
[byrnedo]: https://github.com/byrnedo
[crazy-max]: https://github.com/crazy-max
[skanehira]: https://github.com/skanehira
[akito]: https://github.com/theAkito
[peco602]: https://github.com/Peco602
[weave]: https://github.com/weaveworks/weave
