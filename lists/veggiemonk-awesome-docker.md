# Awesome Docker [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)][sindresorhus] [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/veggiemonk/awesome-docker/)[![Last Commit](https://img.shields.io/github/last-commit/veggiemonk/awesome-docker)](https://github.com/veggiemonk/awesome-docker/commits/main)<!-- omit in toc -->

> A curated list of projects for Docker.

If you would like to contribute, please read [CONTRIBUTING.md ![GitHub Repo Stars](https://img.shields.io/github/stars/veggiemonk/awesome-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/veggiemonk/awesome-docker)](https://github.com/veggiemonk/awesome-docker/blob/master/.github/CONTRIBUTING.md) first.
If this list is not complete, you can contribute to make it so.
If you see a link here that is not (any longer) a good fit, you can fix it by submitting a [pull request][editreadme] to improve this file. Thank you!

**The project has to be for Docker, not just using Docker.**

> Rule of thumb: if removing the Docker integration wouldn't kill the project's value proposition, it doesn't belong in the this list.

The creators and maintainers of this list do not receive any form of payment to accept a change made by any contributor.
This page is not an official Docker product in any way.
It is a list of links to projects and is maintained by volunteers.
Everybody is welcome to contribute.
The goal of this repo is to index open-source projects, not to advertise for profit.

> Docker is an open platform for developers and sysadmins to build, ship, and run distributed applications. Consisting of Docker Engine, a portable, lightweight runtime and packaging tool, and Docker Hub, a cloud service for sharing applications and automating workflows, Docker enables apps to be quickly assembled from components and eliminates the friction between development, QA, and production environments. As a result, IT can ship faster and run the same app, unchanged, on laptops, data center VMs, and any cloud.

_Source:_ [What is Docker](https://www.docker.com/why-docker/)

# Contents <!-- omit in toc -->

<!-- TOC -->

- [Projects](#projects)
    - [Engine \& Runtime](#engine--runtime)
    - [Building Images](#building-images)
        - [Builder](#builder)
        - [Base Images](#base-images)
        - [Dockerfile](#dockerfile)
        - [Linter](#linter)
    - [Image Lifecycle](#image-lifecycle)
        - [Registry](#registry)
        - [Registry CLI](#registry-cli)
        - [Image Scanning \& SBOM](#image-scanning--sbom)
        - [Supply Chain](#supply-chain)
    - [Running Containers](#running-containers)
        - [Composition](#composition)
        - [Orchestration](#orchestration)
        - [Deployment \& Platforms](#deployment--platforms)
        - [Garbage Collection](#garbage-collection)
    - [Networking \& Proxies](#networking--proxies)
        - [Networking](#networking)
        - [Reverse Proxy](#reverse-proxy)
    - [Storage \& Data](#storage--data)
    - [Observability](#observability)
    - [Security](#security)
    - [User Interfaces](#user-interfaces)
        - [Desktop](#desktop)
        - [Terminal](#terminal)
        - [Web](#web)
        - [IDE Integrations](#ide-integrations)
    - [Developer Workflow](#developer-workflow)
        - [API Client](#api-client)
        - [CI/CD](#cicd)
        - [Development Environment](#development-environment)
        - [Serverless](#serverless)
        - [Testing](#testing)
        - [Wrappers](#wrappers)
    - [In-Container Tooling](#in-container-tooling)
- [Learning Resources](#learning-resources)
    - [Where to Start](#where-to-start)
    - [Where to Start (Windows)](#where-to-start-windows)
    - [Books \& Tutorials](#books--tutorials)
    - [Awesome Lists](#awesome-lists)
    - [Demos and Examples](#demos-and-examples)
    - [Good Tips](#good-tips)
    - [Raspberry Pi \& ARM](#raspberry-pi--arm)
    - [Security Articles](#security-articles)
    - [Videos](#videos)
    - [Communities and Meetups](#communities-and-meetups)
        - [Brazilian](#brazilian)
        - [English](#english)
        - [Russian](#russian)
        - [Spanish](#spanish)
- [Stargazers over time](#stargazers-over-time)

<!-- /TOC -->

# Projects

## Official Projects

- [Moby ![GitHub Repo Stars](https://img.shields.io/github/stars/moby/moby) ![GitHub last commit](https://img.shields.io/github/last-commit/moby/moby)](https://github.com/moby/moby)
- [Docker Hub](https://hub.docker.com)
- [Docker Compose ![GitHub Repo Stars](https://img.shields.io/github/stars/docker/compose) ![GitHub last commit](https://img.shields.io/github/last-commit/docker/compose)](https://github.com/docker/compose/) - Define and run multi-container applications with Docker.
- [Docker Registry][distribution] - The Docker toolset to pack, ship, store, and deliver content

## Engine & Runtime

- [colima ![GitHub Repo Stars](https://img.shields.io/github/stars/abiosoft/colima) ![GitHub last commit](https://img.shields.io/github/last-commit/abiosoft/colima)](https://github.com/abiosoft/colima) - Container runtimes on macOS (and Linux) with minimal setup.
- [containerd ![GitHub Repo Stars](https://img.shields.io/github/stars/containerd/containerd) ![GitHub last commit](https://img.shields.io/github/last-commit/containerd/containerd)](https://github.com/containerd/containerd) - An open and reliable container runtime.
- [cri-o ![GitHub Repo Stars](https://img.shields.io/github/stars/cri-o/cri-o) ![GitHub last commit](https://img.shields.io/github/last-commit/cri-o/cri-o)](https://github.com/cri-o/cri-o) - Open Container Initiative-based implementation of Kubernetes Container Runtime Interface.
- [gVisor ![GitHub Repo Stars](https://img.shields.io/github/stars/google/gvisor) ![GitHub last commit](https://img.shields.io/github/last-commit/google/gvisor)](https://github.com/google/gvisor) - Application Kernel for Containers.
- [lxc ![GitHub Repo Stars](https://img.shields.io/github/stars/lxc/lxc) ![GitHub last commit](https://img.shields.io/github/last-commit/lxc/lxc)](https://github.com/lxc/lxc) - LXC - Linux Containers.
- [Mocker ![GitHub Repo Stars](https://img.shields.io/github/stars/us/mocker) ![GitHub last commit](https://img.shields.io/github/last-commit/us/mocker)](https://github.com/us/mocker) - Docker-compatible container CLI for macOS, built on Apple's Containerization framework.
- [podman ![GitHub Repo Stars](https://img.shields.io/github/stars/containers/libpod) ![GitHub last commit](https://img.shields.io/github/last-commit/containers/libpod)](https://github.com/containers/libpod) - Libpod is a library used to create container pods. Home of Podman.
- [runc ![GitHub Repo Stars](https://img.shields.io/github/stars/opencontainers/runc) ![GitHub last commit](https://img.shields.io/github/last-commit/opencontainers/runc)](https://github.com/opencontainers/runc) - CLI tool for spawning and running containers according to the OCI specification.
- [runtime-tools ![GitHub Repo Stars](https://img.shields.io/github/stars/opencontainers/runtime-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/opencontainers/runtime-tools)](https://github.com/opencontainers/runtime-tools) - Oci-runtime-tool is a collection of tools for working with the OCI runtime specification.
- [youki ![GitHub Repo Stars](https://img.shields.io/github/stars/youki-dev/youki) ![GitHub last commit](https://img.shields.io/github/last-commit/youki-dev/youki)](https://github.com/youki-dev/youki) - Container runtime written in Rust, implementing the OCI runtime specification.

## Building Images

### Builder

Applications designed to help or simplify building **new** images

- [ansible-bender ![GitHub Repo Stars](https://img.shields.io/github/stars/ansible-community/ansible-bender) ![GitHub last commit](https://img.shields.io/github/last-commit/ansible-community/ansible-bender)](https://github.com/ansible-community/ansible-bender) - A tool utilising `ansible` and `buildah`.
- [apko ![GitHub Repo Stars](https://img.shields.io/github/stars/chainguard-dev/apko) ![GitHub last commit](https://img.shields.io/github/last-commit/chainguard-dev/apko)](https://github.com/chainguard-dev/apko) - Declarative OCI image builder from apk packages; reproducible by design.
- [buildah ![GitHub Repo Stars](https://img.shields.io/github/stars/containers/buildah) ![GitHub last commit](https://img.shields.io/github/last-commit/containers/buildah)](https://github.com/containers/buildah) - A tool that facilitates building OCI images.
- [BuildKit ![GitHub Repo Stars](https://img.shields.io/github/stars/moby/buildkit) ![GitHub last commit](https://img.shields.io/github/last-commit/moby/buildkit)](https://github.com/moby/buildkit) - Concurrent, cache-efficient, and Dockerfile-agnostic builder toolkit.
- [buildx ![GitHub Repo Stars](https://img.shields.io/github/stars/docker/buildx) ![GitHub last commit](https://img.shields.io/github/last-commit/docker/buildx)](https://github.com/docker/buildx) - Official Docker CLI plugin for multi-platform builds backed by BuildKit.
- [cekit ![GitHub Repo Stars](https://img.shields.io/github/stars/cekit/cekit) ![GitHub last commit](https://img.shields.io/github/last-commit/cekit/cekit)](https://github.com/cekit/cekit) - A tool used by openshift to build base images using different build engines.
- [dlayer ![GitHub Repo Stars](https://img.shields.io/github/stars/orisano/dlayer) ![GitHub last commit](https://img.shields.io/github/last-commit/orisano/dlayer)](https://github.com/orisano/dlayer) - Docker layer analyzer.
- [docker-companion ![GitHub Repo Stars](https://img.shields.io/github/stars/mudler/docker-companion) ![GitHub last commit](https://img.shields.io/github/last-commit/mudler/docker-companion)](https://github.com/mudler/docker-companion) - A command line tool written in Golang to squash and unpack docker images.
- [docker-repack ![GitHub Repo Stars](https://img.shields.io/github/stars/orf/docker-repack) ![GitHub last commit](https://img.shields.io/github/last-commit/orf/docker-repack)](https://github.com/orf/docker-repack) - Repacks a Docker image into a smaller, more efficient version that makes it significantly faster to pull.
- [DockerSlim ![GitHub Repo Stars](https://img.shields.io/github/stars/docker-slim/docker-slim) ![GitHub last commit](https://img.shields.io/github/last-commit/docker-slim/docker-slim)](https://github.com/docker-slim/docker-slim) shrinks fat Docker images creating the smallest possible images.
- [earthly ![GitHub Repo Stars](https://img.shields.io/github/stars/earthly/earthly) ![GitHub last commit](https://img.shields.io/github/last-commit/earthly/earthly)](https://github.com/earthly/earthly) - Containerized build automation with Dockerfile-meets-Makefile syntax.
- [essex ![GitHub Repo Stars](https://img.shields.io/github/stars/utensils/essex) ![GitHub last commit](https://img.shields.io/github/last-commit/utensils/essex)](https://github.com/utensils/essex) - Boilerplate for Docker Based Projects: Essex is a CLI utility written in bash to quickly setup clean and consistent Docker projects with Makefile driven workflows.
- [HPC Container Maker ![GitHub Repo Stars](https://img.shields.io/github/stars/NVIDIA/hpc-container-maker) ![GitHub last commit](https://img.shields.io/github/last-commit/NVIDIA/hpc-container-maker)](https://github.com/NVIDIA/hpc-container-maker) - Generates Dockerfiles from a high level Python recipe, including building blocks for High-Performance Computing components.
- [img ![GitHub Repo Stars](https://img.shields.io/github/stars/genuinetools/img) ![GitHub last commit](https://img.shields.io/github/last-commit/genuinetools/img)](https://github.com/genuinetools/img) - Standalone, daemon-less, unprivileged Dockerfile and OCI compatible container image builder.
- [ko ![GitHub Repo Stars](https://img.shields.io/github/stars/ko-build/ko) ![GitHub last commit](https://img.shields.io/github/last-commit/ko-build/ko)](https://github.com/ko-build/ko) - Build and deploy Go applications as container images without a Dockerfile.
- [nix2container ![GitHub Repo Stars](https://img.shields.io/github/stars/nlewo/nix2container) ![GitHub last commit](https://img.shields.io/github/last-commit/nlewo/nix2container)](https://github.com/nlewo/nix2container) - Build OCI images with Nix without `docker load` round-trips.
- [packer](https://developer.hashicorp.com/packer/integrations/hashicorp/docker/latest/components/builder/docker) - Hashicorp tool to build machine images including docker image integrated with configuration management tools like chef, puppet, ansible.
- [Production-Ready Python Containers](https://pythonspeed.com/products/pythoncontainer/) - :yen: A template for creating production-ready Docker images for Python applications.
- [RAUDI ![GitHub Repo Stars](https://img.shields.io/github/stars/cybersecsi/RAUDI) ![GitHub last commit](https://img.shields.io/github/last-commit/cybersecsi/RAUDI)](https://github.com/cybersecsi/RAUDI) - A tool to automatically update (and optionally push to Docker Hub) Docker Images for 3rd party software whenever theres is a new release/update/commit.
- [runlike ![GitHub Repo Stars](https://img.shields.io/github/stars/lavie/runlike) ![GitHub last commit](https://img.shields.io/github/last-commit/lavie/runlike)](https://github.com/lavie/runlike) - Generate `docker run`command and options from running containers.
- [Whaler ![GitHub Repo Stars](https://img.shields.io/github/stars/P3GLEG/Whaler) ![GitHub last commit](https://img.shields.io/github/last-commit/P3GLEG/Whaler)](https://github.com/P3GLEG/Whaler) - Program to reverse Docker images into Dockerfiles.


### Base Images

Minimal, hardened, or purpose-built container base images.

- [Chainguard Images ![GitHub Repo Stars](https://img.shields.io/github/stars/chainguard-images/images) ![GitHub last commit](https://img.shields.io/github/last-commit/chainguard-images/images)](https://github.com/chainguard-images/images) - Minimal, signed, SBOM-attested container images built on Wolfi.
- [distroless ![GitHub Repo Stars](https://img.shields.io/github/stars/GoogleContainerTools/distroless) ![GitHub last commit](https://img.shields.io/github/last-commit/GoogleContainerTools/distroless)](https://github.com/GoogleContainerTools/distroless) - Language focused docker images, minus the operating system.
- [melange ![GitHub Repo Stars](https://img.shields.io/github/stars/chainguard-dev/melange) ![GitHub last commit](https://img.shields.io/github/last-commit/chainguard-dev/melange)](https://github.com/chainguard-dev/melange) - Build apk packages from declarative YAML for use with apko.
- [Wolfi ![GitHub Repo Stars](https://img.shields.io/github/stars/wolfi-dev/os) ![GitHub last commit](https://img.shields.io/github/last-commit/wolfi-dev/os)](https://github.com/wolfi-dev/os) - Undistro Linux designed for containers; glibc-based, signed, daily SBOMs.


### Dockerfile

- [Dockerfile Generator ![GitHub Repo Stars](https://img.shields.io/github/stars/ozankasikci/dockerfile-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/ozankasikci/dockerfile-generator)](https://github.com/ozankasikci/dockerfile-generator) `dfg` is both a Go library and an executable that produces valid Dockerfiles using various input channels.
- [Dockershelf ![GitHub Repo Stars](https://img.shields.io/github/stars/Dockershelf/dockershelf) ![GitHub last commit](https://img.shields.io/github/last-commit/Dockershelf/dockershelf)](https://github.com/Dockershelf/dockershelf) - A repository that serves as a collector for docker recipes that are universal, efficient and slim. Images are updated, tested and published daily via a Travis cron job.
- [Trsuted Builds](https://dockerfile.github.io/) - Trusted Automated Docker Builds. Dockerfile Project maintains a central repository of Dockerfile for various popular open source software services runnable on a Docker container.

### Linter

- [Dockadvisor ![GitHub Repo Stars](https://img.shields.io/github/stars/deckrun/dockadvisor) ![GitHub last commit](https://img.shields.io/github/last-commit/deckrun/dockadvisor)](https://github.com/deckrun/dockadvisor) - Lightweight Dockerfile linter with 60+ rules, quality scoring, and security checks.
- [docker-image-size-limit ![GitHub Repo Stars](https://img.shields.io/github/stars/wemake-services/docker-image-size-limit) ![GitHub last commit](https://img.shields.io/github/last-commit/wemake-services/docker-image-size-limit)](https://github.com/wemake-services/docker-image-size-limit) - A tool to keep an eye on your docker images size.
- [Hadolint ![GitHub Repo Stars](https://img.shields.io/github/stars/hadolint/hadolint) ![GitHub last commit](https://img.shields.io/github/last-commit/hadolint/hadolint)](https://github.com/hadolint/hadolint) - A Dockerfile linter that checks for best practices, common mistakes, and is also able to lint any bash written in `RUN` instructions;.

## Image Lifecycle

### Registry

Services to securely store your Docker images.

- [Amazon Elastic Container Registry](https://aws.amazon.com/ecr/) - :yen: Amazon Elastic Container Registry (ECR) is a fully-managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images.
- [Azure Container Registry](https://azure.microsoft.com/en-us/products/container-registry/#overview) - :yen: Manage a Docker private registry as a first-class Azure resource.
- [Cloudsmith](https://cloudsmith.com/product/formats/docker-registry) - :yen: A fully managed package management SaaS, with first-class support for public and private Docker registries (and many others, incl. Helm charts for the Kubernetes ecosystem). Has a generous free-tier and is also completely free for open-source.
- [Container Registry Service](https://container-registry.com/) - :yen: Harbor based Container Management Solution as a Service for teams and organizations. Free tier offers 1 GB storage for private repositories.
- [Cycle.io](https://cycle.io/) - :yen: Bare-metal container hosting.
- [DigitalOcean](https://www.digitalocean.com/products/container-registry) - :yen: DigitalOcean Container Registry.
- [Docker Hub](https://hub.docker.com/) provided by Docker Inc.
- [Docker Registry v2][distribution] - The Docker toolset to pack, ship, store, and deliver content
- [Dragonfly ![GitHub Repo Stars](https://img.shields.io/github/stars/dragonflyoss/Dragonfly2) ![GitHub last commit](https://img.shields.io/github/last-commit/dragonflyoss/Dragonfly2)](https://github.com/dragonflyoss/Dragonfly2) - Provide efficient, stable and secure file distribution and image acceleration based on p2p technology.
- [GCP Artifact Registry](https://docs.cloud.google.com/artifact-registry/docs) - :yen: Fast, private Docker image storage on Google Cloud Platform.
- [Gitea Container Registry](https://docs.gitea.com/usage/packages/container) - Integrated Docker registry in Gitea, ideal for private, small-scale image hosting.
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry) - GitHub's solution for storing and managing Docker images, with tight integration into GitHub Actions.
- [GitLab Container Registry](https://docs.gitlab.com/user/packages/container_registry/) - Registry focused on using its images in GitLab CI.
- [Harbor ![GitHub Repo Stars](https://img.shields.io/github/stars/goharbor/harbor) ![GitHub last commit](https://img.shields.io/github/last-commit/goharbor/harbor)](https://github.com/goharbor/harbor) An open source trusted cloud native registry project that stores, signs, and scans content. Supports replication, user management, access control and activity auditing.
- [JFrog Artifactory](https://jfrog.com/artifactory/) - :yen: Artifact Repository Manager, can be used as private Docker Registry as well.
- [kontain.me ![GitHub Repo Stars](https://img.shields.io/github/stars/imjasonh/kontain.me) ![GitHub last commit](https://img.shields.io/github/last-commit/imjasonh/kontain.me)](https://github.com/imjasonh/kontain.me) - On-demand container image registry that builds and serves images when they are pulled.
- [Kraken ![GitHub Repo Stars](https://img.shields.io/github/stars/uber/kraken) ![GitHub last commit](https://img.shields.io/github/last-commit/uber/kraken)](https://github.com/uber/kraken) - Uber's Highly scalable P2P docker registry, capable of distributing TBs of data in seconds.
- [NORA ![GitHub Repo Stars](https://img.shields.io/github/stars/getnora-io/nora) ![GitHub last commit](https://img.shields.io/github/last-commit/getnora-io/nora)](https://github.com/getnora-io/nora) - Lightweight multi-protocol artifact registry supporting Docker, Maven, npm, Cargo and PyPI in a single 32MB binary. Pull-through cache, Web UI, Prometheus metrics, RBAC auth.
- [nscr ![GitHub Repo Stars](https://img.shields.io/github/stars/jhstatewide/nscr) ![GitHub last commit](https://img.shields.io/github/last-commit/jhstatewide/nscr)](https://github.com/jhstatewide/nscr) - A light-weight, self-contained container registry that's easy to run and maintain.
- [Quay.io](https://quay.io/) - :yen: Secure hosting for private Docker repositories.
- [Registryo ![GitHub Repo Stars](https://img.shields.io/github/stars/inmagik/registryo) ![GitHub last commit](https://img.shields.io/github/last-commit/inmagik/registryo)](https://github.com/inmagik/registryo) - UI and token based authentication server for onpremise docker registry.
- [RepoFlow](https://www.repoflow.io) - A simple and easy-to-use package management platform with Docker support alongside other formats like PyPI, Maven, npm, and Helm. Includes smart search, built-in Docker image scanning, and a great free option for both self-hosted and cloud use.
- [Sonatype Nexus Repository](https://www.sonatype.com/products/sonatype-nexus-repository) - Manage binaries and build artifacts across your software supply chain.

### Registry CLI

Daemonless command-line tools for inspecting, copying, and manipulating images in OCI/Docker registries.

- [crane ![GitHub Repo Stars](https://img.shields.io/github/stars/google/go-containerregistry) ![GitHub last commit](https://img.shields.io/github/last-commit/google/go-containerregistry)](https://github.com/google/go-containerregistry/tree/main/cmd/crane) - Lightweight CLI to manipulate registry images, from `go-containerregistry`.
- [go-containerregistry ![GitHub Repo Stars](https://img.shields.io/github/stars/google/go-containerregistry) ![GitHub last commit](https://img.shields.io/github/last-commit/google/go-containerregistry)](https://github.com/google/go-containerregistry) - Go library and CLI tools (`crane`, `gcrane`, `registry`) for working with container registries.
- [oras ![GitHub Repo Stars](https://img.shields.io/github/stars/oras-project/oras) ![GitHub last commit](https://img.shields.io/github/last-commit/oras-project/oras)](https://github.com/oras-project/oras) - Push and pull arbitrary OCI artifacts to and from any OCI registry.
- [regctl ![GitHub Repo Stars](https://img.shields.io/github/stars/regclient/regclient) ![GitHub last commit](https://img.shields.io/github/last-commit/regclient/regclient)](https://github.com/regclient/regclient) - Daemonless registry client; copy, inspect, modify, and sign OCI images.
- [skopeo ![GitHub Repo Stars](https://img.shields.io/github/stars/containers/skopeo) ![GitHub last commit](https://img.shields.io/github/last-commit/containers/skopeo)](https://github.com/containers/skopeo) - Work with remote image registries: retrieve information, copy images, sign content.

### Image Scanning & SBOM

Image vulnerability scanners, SBOM generators, and digest pinning tools. Commercial entries marked `:yen:`.

- [Anchor ![GitHub Repo Stars](https://img.shields.io/github/stars/SongStitch/anchor) ![GitHub last commit](https://img.shields.io/github/last-commit/SongStitch/anchor)](https://github.com/SongStitch/anchor/) - A tool to ensure reproducible builds by pinning dependencies inside your Dockerfiles.
- [Anchor Enterprise](https://anchore.com/) - :yen: Analyze images for CVE vulnerabilities and against custom security policies.
- [Clair ![GitHub Repo Stars](https://img.shields.io/github/stars/quay/clair) ![GitHub last commit](https://img.shields.io/github/last-commit/quay/clair)](https://github.com/quay/clair) - Clair is an open source project for the static analysis of vulnerabilities in appc and docker containers.
- [Docker Scout ![GitHub Repo Stars](https://img.shields.io/github/stars/docker/scout-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/docker/scout-cli)](https://github.com/docker/scout-cli) - Official Docker CLI for SBOM generation, vulnerability analysis, and policy evaluation.
- [Grype ![GitHub Repo Stars](https://img.shields.io/github/stars/anchore/grype) ![GitHub last commit](https://img.shields.io/github/last-commit/anchore/grype)](https://github.com/anchore/grype) - A vulnerability scanner for container images, filesystems and SBOMs.
- [oscap-docker ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenSCAP/openscap) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenSCAP/openscap)](https://github.com/OpenSCAP/openscap) - OpenSCAP provides oscap-docker tool which is used to scan Docker containers and images.
- [pindock ![GitHub Repo Stars](https://img.shields.io/github/stars/deadnews/pindock) ![GitHub last commit](https://img.shields.io/github/last-commit/deadnews/pindock)](https://github.com/deadnews/pindock) - Pin and update Docker image digests in Dockerfiles and compose files.
- [Syft ![GitHub Repo Stars](https://img.shields.io/github/stars/anchore/syft) ![GitHub last commit](https://img.shields.io/github/last-commit/anchore/syft)](https://github.com/anchore/syft) - CLI tool and library for generating a Software Bill of Materials (SBOM) from container images and filesystems.
- [Trivy ![GitHub Repo Stars](https://img.shields.io/github/stars/aquasecurity/trivy) ![GitHub last commit](https://img.shields.io/github/last-commit/aquasecurity/trivy)](https://github.com/aquasecurity/trivy) - Aqua Security's open source simple and comprehensive vulnerability scanner for containers (suitable for CI).

### Supply Chain

Signing, attestation, and provenance for container images.

- [cosign ![GitHub Repo Stars](https://img.shields.io/github/stars/sigstore/cosign) ![GitHub last commit](https://img.shields.io/github/last-commit/sigstore/cosign)](https://github.com/sigstore/cosign) - Container signing, verification, and transparency log for OCI artifacts.
- [in-toto ![GitHub Repo Stars](https://img.shields.io/github/stars/in-toto/in-toto) ![GitHub last commit](https://img.shields.io/github/last-commit/in-toto/in-toto)](https://github.com/in-toto/in-toto) - Framework for supply chain attestations; underpins SLSA and cosign provenance.
- [policy-controller ![GitHub Repo Stars](https://img.shields.io/github/stars/sigstore/policy-controller) ![GitHub last commit](https://img.shields.io/github/last-commit/sigstore/policy-controller)](https://github.com/sigstore/policy-controller) - Kubernetes admission controller enforcing cosign signatures on container images.
- [witness ![GitHub Repo Stars](https://img.shields.io/github/stars/in-toto/witness) ![GitHub last commit](https://img.shields.io/github/last-commit/in-toto/witness)](https://github.com/in-toto/witness) - Generate and verify in-toto attestations across the build pipeline.

## Running Containers

### Composition

- [Composerize ![GitHub Repo Stars](https://img.shields.io/github/stars/magicmark/composerize) ![GitHub last commit](https://img.shields.io/github/last-commit/magicmark/composerize)](https://github.com/magicmark/composerize) - Convert docker run commands into docker-compose files.
- [ctk ![GitHub Repo Stars](https://img.shields.io/github/stars/ctk-hq/ctk) ![GitHub last commit](https://img.shields.io/github/last-commit/ctk-hq/ctk)](https://github.com/ctk-hq/ctk) - Visual composer for container based workloads.
- [kompose ![GitHub Repo Stars](https://img.shields.io/github/stars/kubernetes/kompose) ![GitHub last commit](https://img.shields.io/github/last-commit/kubernetes/kompose)](https://github.com/kubernetes/kompose) - Go from Docker Compose to Kubernetes.
- [plash ![GitHub Repo Stars](https://img.shields.io/github/stars/ihucos/plash) ![GitHub last commit](https://img.shields.io/github/last-commit/ihucos/plash)](https://github.com/ihucos/plash) - A container run and build engine - runs inside docker.
- [podman-compose ![GitHub Repo Stars](https://img.shields.io/github/stars/containers/podman-compose) ![GitHub last commit](https://img.shields.io/github/last-commit/containers/podman-compose)](https://github.com/containers/podman-compose) - A script to run docker-compose.yml using podman.
- [Smalte ![GitHub Repo Stars](https://img.shields.io/github/stars/roquie/smalte) ![GitHub last commit](https://img.shields.io/github/last-commit/roquie/smalte)](https://github.com/roquie/smalte) – Dynamically configure applications that require static configuration in docker container.
- [Stitchocker ![GitHub Repo Stars](https://img.shields.io/github/stars/alexaandrov/stitchocker) ![GitHub last commit](https://img.shields.io/github/last-commit/alexaandrov/stitchocker)](https://github.com/alexaandrov/stitchocker) - A lightweight and fast command line utility for conveniently grouping your docker-compose multiple container services.

### Orchestration

- [CloudSlang ![GitHub Repo Stars](https://img.shields.io/github/stars/CloudSlang/cloud-slang) ![GitHub last commit](https://img.shields.io/github/last-commit/CloudSlang/cloud-slang)](https://github.com/CloudSlang/cloud-slang) - CloudSlang is a workflow engine to create Docker process automation.
- [docker rollout ![GitHub Repo Stars](https://img.shields.io/github/stars/Wowu/docker-rollout) ![GitHub last commit](https://img.shields.io/github/last-commit/Wowu/docker-rollout)](https://github.com/Wowu/docker-rollout) - Zero downtime deployment for Docker Compose services.
- [Kubernetes ![GitHub Repo Stars](https://img.shields.io/github/stars/kubernetes/kubernetes) ![GitHub last commit](https://img.shields.io/github/last-commit/kubernetes/kubernetes)](https://github.com/kubernetes/kubernetes) - Open source orchestration system for Docker containers by Google.
- [Mesos ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/mesos) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/mesos)](https://github.com/apache/mesos) - Resource/Job scheduler for containers, VM's and physical hosts.
- [Nebula](https://github.com/nebula-orchestrator) - A Docker orchestration tool designed to manage massive scale distributed clusters.
- [Nomad ![GitHub Repo Stars](https://img.shields.io/github/stars/hashicorp/nomad) ![GitHub last commit](https://img.shields.io/github/last-commit/hashicorp/nomad)](https://github.com/hashicorp/nomad) - Easily deploy applications at any scale. A Distributed, Highly Available, Datacenter-Aware Scheduler.
- [Rancher ![GitHub Repo Stars](https://img.shields.io/github/stars/rancher/rancher) ![GitHub last commit](https://img.shields.io/github/last-commit/rancher/rancher)](https://github.com/rancher/rancher) - An open source project that provides a complete platform for operating Docker in production.
- [Swarm-cronjob ![GitHub Repo Stars](https://img.shields.io/github/stars/crazy-max/swarm-cronjob) ![GitHub last commit](https://img.shields.io/github/last-commit/crazy-max/swarm-cronjob)](https://github.com/crazy-max/swarm-cronjob) - Create jobs on a time-based schedule on Swarm.

### Deployment & Platforms

Self-hosted and managed cloud platforms (PaaS/CaaS, deployment automation). Commercial entries marked `:yen:`.

- [Amazon ECS](https://aws.amazon.com/ecs/) - :yen: A management service on EC2 that supports Docker containers.
- [Appfleet](https://appfleet.com/) - :yen: Edge platform to deploy and manage containerized services globally; routes traffic to the closest location for low latency.
- [Azure AKS](https://azure.microsoft.com/en-us/products/kubernetes-service/) - :yen: Fully managed Kubernetes container orchestration service.
- [blackfish](https://gitlab.com/blackfish/blackfish) - A CoreOS VM to build swarm clusters for Dev & Production.
- [BosnD](https://gitlab.com/n0r1sk/bosnd) - BosnD, the boatswain daemon - A dynamic configuration file writer & service reloader for dynamically changing container environments.
- [caprover ![GitHub Repo Stars](https://img.shields.io/github/stars/caprover/caprover) ![GitHub last commit](https://img.shields.io/github/last-commit/caprover/caprover)](https://github.com/caprover/caprover) - [Previously known as CaptainDuckDuck] Automated Scalable Webserver Package (automated Docker+nginx) - Heroku on Steroids.
- [Cloud 66](https://www.cloud66.com) - :yen: Full-stack hosted container management as a service.
- [Cloud Run Compose](https://docs.cloud.google.com/run/docs/deploy-run-compose) - :yen: Deploy `docker-compose.yaml` files directly to Google Cloud Run as a managed service.
- [Convox Rack ![GitHub Repo Stars](https://img.shields.io/github/stars/convox/rack) ![GitHub last commit](https://img.shields.io/github/last-commit/convox/rack)](https://github.com/convox/rack) - Convox Rack is open source PaaS built on top of expert infrastructure automation and devops best practices.
- [docker-to-iac ![GitHub Repo Stars](https://img.shields.io/github/stars/deploystackio/docker-to-iac) ![GitHub last commit](https://img.shields.io/github/last-commit/deploystackio/docker-to-iac)](https://github.com/deploystackio/docker-to-iac) - Translate docker run and commit into Infrastructure as Code templates for AWS, Render.com and DigitalOcean.
- [Dokku ![GitHub Repo Stars](https://img.shields.io/github/stars/dokku/dokku) ![GitHub last commit](https://img.shields.io/github/last-commit/dokku/dokku)](https://github.com/dokku/dokku) - Docker powered mini-Heroku that helps you build and manage the lifecycle of applications.
- [Exoframe ![GitHub Repo Stars](https://img.shields.io/github/stars/exoframejs/exoframe) ![GitHub last commit](https://img.shields.io/github/last-commit/exoframejs/exoframe)](https://github.com/exoframejs/exoframe) - A self-hosted tool that allows simple one-command deployments using Docker.
- [Giant Swarm](https://www.giantswarm.io/) - :yen: Simple microservice infrastructure. Deploy your containers in seconds.
- [Google Container Engine](https://docs.cloud.google.com/kubernetes-engine/docs) - :yen: Docker containers on Google Cloud Computing powered by [Kubernetes][kubernetes].
- [Grafeas ![GitHub Repo Stars](https://img.shields.io/github/stars/grafeas/grafeas) ![GitHub last commit](https://img.shields.io/github/last-commit/grafeas/grafeas)](https://github.com/grafeas/grafeas) - A common API for metadata about containers, from image and build details to security vulnerabilities.
- [Mesosphere DC/OS Platform](https://d2iq.com/products/dcos) - :yen: Integrated platform for data and containers built on Apache Mesos.
- [OpenShift][openshift] - An open source PaaS built on [Kubernetes][kubernetes] and optimized for Dockerized app development and deployment by [Red Hat](https://www.redhat.com/en)
- [Red Hat OpenShift Dedicated](https://www.redhat.com/en/technologies/cloud-computing/openshift/dedicated) - :yen: Fully-managed Red Hat® OpenShift® service on Amazon Web Services and Google Cloud.
- [swarm-ansible ![GitHub Repo Stars](https://img.shields.io/github/stars/LombardiDaniel/swarm-ansible) ![GitHub last commit](https://img.shields.io/github/last-commit/LombardiDaniel/swarm-ansible)](https://github.com/LombardiDaniel/swarm-ansible?tab=readme-ov-file) - Swarm-Ansible bootstraps a production-ready swarm cluster using ansible. Comes with tools to automate CI, help monitoring and traefik pre-configured for SSL certificates and simple-auth. Comes with a private registry and more!.
- [SwarmManagement ![GitHub Repo Stars](https://img.shields.io/github/stars/hansehe/SwarmManagement) ![GitHub last commit](https://img.shields.io/github/last-commit/hansehe/SwarmManagement)](https://github.com/hansehe/SwarmManagement) - Swarm Management is a python application, installed with pip. The application makes it easy to manage a Docker Swarm by configuring a single yaml file describing which stacks to deploy, and which networks, configs or secrets to create.
- [Triton](https://www.joyent.com/) - :yen: Elastic container-native infrastructure.
- [Tsuru ![GitHub Repo Stars](https://img.shields.io/github/stars/tsuru/tsuru) ![GitHub last commit](https://img.shields.io/github/last-commit/tsuru/tsuru)](https://github.com/tsuru/tsuru) - Tsuru is an extensible and open source Platform as a Service software.
- [werf ![GitHub Repo Stars](https://img.shields.io/github/stars/werf/werf) ![GitHub last commit](https://img.shields.io/github/last-commit/werf/werf)](https://github.com/werf/werf) - Werf is a CI/CD tool for building Docker images efficiently and deploying them to Kubernetes using GitOps.

### Garbage Collection

- [docker-custodian ![GitHub Repo Stars](https://img.shields.io/github/stars/Yelp/docker-custodian) ![GitHub last commit](https://img.shields.io/github/last-commit/Yelp/docker-custodian)](https://github.com/Yelp/docker-custodian) - Keep docker hosts tidy.
- [Docuum ![GitHub Repo Stars](https://img.shields.io/github/stars/stepchowfun/docuum) ![GitHub last commit](https://img.shields.io/github/last-commit/stepchowfun/docuum)](https://github.com/stepchowfun/docuum) - Least recently used (LRU) eviction of Docker images.

## Networking & Proxies

### Networking

Container networking, overlay networks, DNS/service-discovery bridges.

- [Calico][calico] - Calico is a pure layer 3 virtual network that allows containers over multiple docker-hosts to talk to each other.
- [docker-consul ![GitHub Repo Stars](https://img.shields.io/github/stars/gliderlabs/docker-consul) ![GitHub last commit](https://img.shields.io/github/last-commit/gliderlabs/docker-consul)](https://github.com/gliderlabs/docker-consul) - Consul packaged for Docker — registers and discovers running containers.
- [docker-dns ![GitHub Repo Stars](https://img.shields.io/github/stars/bytesharky/docker-dns) ![GitHub last commit](https://img.shields.io/github/last-commit/bytesharky/docker-dns)](https://github.com/bytesharky/docker-dns) - Lightweight DNS forwarder for Docker containers, resolves container names with custom suffixes (e.g. `.docker`) on the host to simplify service discovery.
- [Flannel ![GitHub Repo Stars](https://img.shields.io/github/stars/coreos/flannel) ![GitHub last commit](https://img.shields.io/github/last-commit/coreos/flannel)](https://github.com/coreos/flannel/) - Flannel is a virtual network that gives a subnet to each host for use with container runtimes.
- [netshoot ![GitHub Repo Stars](https://img.shields.io/github/stars/nicolaka/netshoot) ![GitHub last commit](https://img.shields.io/github/last-commit/nicolaka/netshoot)](https://github.com/nicolaka/netshoot) - The netshoot container has a powerful set of networking tools to help troubleshoot Docker networking issues.
- [Pipework ![GitHub Repo Stars](https://img.shields.io/github/stars/jpetazzo/pipework) ![GitHub last commit](https://img.shields.io/github/last-commit/jpetazzo/pipework)](https://github.com/jpetazzo/pipework) - Software-Defined Networking for Linux Containers, Pipework works with "plain" LXC containers, and with the awesome Docker.
- [registrator ![GitHub Repo Stars](https://img.shields.io/github/stars/gliderlabs/registrator) ![GitHub last commit](https://img.shields.io/github/last-commit/gliderlabs/registrator)](https://github.com/gliderlabs/registrator) - Service registry bridge for Docker.

### Reverse Proxy

- [BunkerWeb ![GitHub Repo Stars](https://img.shields.io/github/stars/bunkerity/bunkerweb) ![GitHub last commit](https://img.shields.io/github/last-commit/bunkerity/bunkerweb)](https://github.com/bunkerity/bunkerweb) - Open-source and next-gen Web Application Firewall (WAF).
- [caddy-docker-proxy ![GitHub Repo Stars](https://img.shields.io/github/stars/lucaslorentz/caddy-docker-proxy) ![GitHub last commit](https://img.shields.io/github/last-commit/lucaslorentz/caddy-docker-proxy)](https://github.com/lucaslorentz/caddy-docker-proxy) - Caddy-based reverse proxy, configured with service or container labels.
- [caddy-docker-upstreams ![GitHub Repo Stars](https://img.shields.io/github/stars/invzhi/caddy-docker-upstreams) ![GitHub last commit](https://img.shields.io/github/last-commit/invzhi/caddy-docker-upstreams)](https://github.com/invzhi/caddy-docker-upstreams) - Docker upstreams module for Caddy, configured with container labels.
- [Docker Dnsmasq Updater ![GitHub Repo Stars](https://img.shields.io/github/stars/moonbuggy/docker-dnsmasq-updater) ![GitHub last commit](https://img.shields.io/github/last-commit/moonbuggy/docker-dnsmasq-updater)](https://github.com/moonbuggy/docker-dnsmasq-updater) - Update a remote dnsmasq server with Docker container hostnames.
- [docker-flow-proxy ![GitHub Repo Stars](https://img.shields.io/github/stars/docker-flow/docker-flow-proxy) ![GitHub last commit](https://img.shields.io/github/last-commit/docker-flow/docker-flow-proxy)](https://github.com/docker-flow/docker-flow-proxy) - Reconfigures proxy every time a new service is deployed, or when a service is scaled.
- [Let's Encrypt Nginx-proxy Companion ![GitHub Repo Stars](https://img.shields.io/github/stars/nginx-proxy/docker-letsencrypt-nginx-proxy-companion) ![GitHub last commit](https://img.shields.io/github/last-commit/nginx-proxy/docker-letsencrypt-nginx-proxy-companion)](https://github.com/nginx-proxy/docker-letsencrypt-nginx-proxy-companion) - A lightweight companion container for the nginx-proxy. It allow the creation/renewal of Let's Encrypt certificates automatically.
- [mesh-router ![GitHub Repo Stars](https://img.shields.io/github/stars/Yundera/mesh-router) ![GitHub last commit](https://img.shields.io/github/last-commit/Yundera/mesh-router)](https://github.com/Yundera/mesh-router) - Free domain(nsl.sh) provider for Docker containers with automatic HTTPS routing. Uses Wireguard VPN to securely route subdomain requests across networks. Ideal for self-hosted NAS and cloud deployments.
- [Nginx Proxy Manager ![GitHub Repo Stars](https://img.shields.io/github/stars/jc21/nginx-proxy-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/jc21/nginx-proxy-manager)](https://github.com/jc21/nginx-proxy-manager) - A beautiful web interface for proxying web based services with SSL.
- [nginx-proxy][nginxproxy] - Automated nginx proxy for Docker containers using docker-gen.
- [OpenResty Manager ![GitHub Repo Stars](https://img.shields.io/github/stars/Safe3/openresty-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/Safe3/openresty-manager)](https://github.com/Safe3/openresty-manager) - The easiest using, powerful and beautiful OpenResty Manager(Nginx Enhanced Version), open source alternative to OpenResty Edge.
- [Swarm Router ![GitHub Repo Stars](https://img.shields.io/github/stars/flavioaiello/swarm-router) ![GitHub last commit](https://img.shields.io/github/last-commit/flavioaiello/swarm-router)](https://github.com/flavioaiello/swarm-router) - A zero config service name based router for docker swarm mode with a fresh and more secure approach.
- [Træfɪk ![GitHub Repo Stars](https://img.shields.io/github/stars/containous/traefik) ![GitHub last commit](https://img.shields.io/github/last-commit/containous/traefik)](https://github.com/containous/traefik) - Automated reverse proxy and load-balancer for Docker, Mesos, Consul, Etcd.

## Storage & Data

- [Blockbridge ![GitHub Repo Stars](https://img.shields.io/github/stars/blockbridge/blockbridge-docker-volume) ![GitHub last commit](https://img.shields.io/github/last-commit/blockbridge/blockbridge-docker-volume)](https://github.com/blockbridge/blockbridge-docker-volume) - :yen: The Blockbridge plugin is a volume plugin that provides access to an extensible set of container-based persistent storage options. It supports single and multi-host Docker environments with features that include tenant isolation, automated provisioning, encryption, secure deletion, snapshots and QoS.
- [Label Backup ![GitHub Repo Stars](https://img.shields.io/github/stars/resulgg/label-backup) ![GitHub last commit](https://img.shields.io/github/last-commit/resulgg/label-backup)](https://github.com/resulgg/label-backup) - A lightweight, Docker-aware backup agent that automatically discovers and backs up containerized databases (PostgreSQL, MySQL, MongoDB, Redis) based on Docker labels. Supports local storage and S3-compatible destinations with flexible scheduling via cron expressions.
- [Docker Volume Backup ![GitHub Repo Stars](https://img.shields.io/github/stars/offen/docker-volume-backup) ![GitHub last commit](https://img.shields.io/github/last-commit/offen/docker-volume-backup)](https://github.com/offen/docker-volume-backup) Backup Docker volumes locally or to any S3 compatible storage.
- [Netshare ![GitHub Repo Stars](https://img.shields.io/github/stars/ContainX/docker-volume-netshare) ![GitHub last commit](https://img.shields.io/github/last-commit/ContainX/docker-volume-netshare)](https://github.com/ContainX/docker-volume-netshare) Docker NFS, AWS EFS, Ceph & Samba/CIFS Volume Plugin.
- [portworx](https://portworx.com) - :yen: Decentralized storage solution for persistent, shared and replicated volumes.
- [quobyte](https://www.quobyte.com/) - :yen: Fully fault-tolerant distributed file system with a docker volume driver.
- [REX-Ray ![GitHub Repo Stars](https://img.shields.io/github/stars/rexray/rexray) ![GitHub last commit](https://img.shields.io/github/last-commit/rexray/rexray)](https://github.com/rexray/rexray) provides a vendor agnostic storage orchestration engine. The primary design goal is to provide persistent storage for Docker, Kubernetes, and Mesos.

## Observability

Monitor Docker hosts, containers, and the services running inside them. Self-hosted and SaaS together; commercial entries marked `:yen:`.

- [ADRG ![GitHub Repo Stars](https://img.shields.io/github/stars/jaldertech/adrg) ![GitHub last commit](https://img.shields.io/github/last-commit/jaldertech/adrg)](https://github.com/jaldertech/adrg) - Dynamic Docker resource governor using cgroups v2 to manage system load.
- [AppDynamics ![GitHub Repo Stars](https://img.shields.io/github/stars/Appdynamics/docker-monitoring-extension) ![GitHub last commit](https://img.shields.io/github/last-commit/Appdynamics/docker-monitoring-extension)](https://github.com/Appdynamics/docker-monitoring-extension) - :yen: Docker Monitoring extension gathers metrics from the Docker Remote API, either using Unix Socket or TCP.
- [Autoheal ![GitHub Repo Stars](https://img.shields.io/github/stars/willfarrell/docker-autoheal) ![GitHub last commit](https://img.shields.io/github/last-commit/willfarrell/docker-autoheal)](https://github.com/willfarrell/docker-autoheal) - Monitor and restart unhealthy docker containers automatically.
- [Better Stack](https://betterstack.com/community/guides/scaling-docker/) - :yen: A Docker-compatible observability stack that delivers log aggregation and uptime monitoring for containerized apps.
- [cAdvisor ![GitHub Repo Stars](https://img.shields.io/github/stars/google/cadvisor) ![GitHub last commit](https://img.shields.io/github/last-commit/google/cadvisor)](https://github.com/google/cadvisor) - Analyzes resource usage and performance characteristics of running containers.
- [Datadog](https://www.datadoghq.com/) - :yen: Full-stack monitoring service with first-class Docker, Kubernetes, and Mesos support.
- [DLIA ![GitHub Repo Stars](https://img.shields.io/github/stars/zorak1103/dlia) ![GitHub last commit](https://img.shields.io/github/last-commit/zorak1103/dlia)](https://github.com/zorak1103/dlia) - DLIA is an AI-powered Docker log monitoring agent that uses Large Language Models (LLMs) to intelligently analyze container logs, detect anomalies, and provide contextual insights over time.
- [Docker-Sentinel ![GitHub Repo Stars](https://img.shields.io/github/stars/Will-Luck/Docker-Sentinel) ![GitHub last commit](https://img.shields.io/github/last-commit/Will-Luck/Docker-Sentinel)](https://github.com/Will-Luck/Docker-Sentinel) - Automated container updates with per-container policies, rollback safety, and a real-time web dashboard.
- [DockProbe ![GitHub Repo Stars](https://img.shields.io/github/stars/deep-on/dockprobe) ![GitHub last commit](https://img.shields.io/github/last-commit/deep-on/dockprobe)](https://github.com/deep-on/dockprobe) - Lightweight Docker monitoring dashboard in a single container. Real-time metrics, 6 anomaly detection rules, Telegram alerts, and 16 automated security scans. Zero config, ~50MB RAM.
- [DockProc](https://gitlab.com/n0r1sk/dockproc) - I/O monitoring for containers on processlevel.
- [dockprom ![GitHub Repo Stars](https://img.shields.io/github/stars/stefanprodan/dockprom) ![GitHub last commit](https://img.shields.io/github/last-commit/stefanprodan/dockprom)](https://github.com/stefanprodan/dockprom) - Docker hosts and containers monitoring with Prometheus, Grafana, cAdvisor, NodeExporter and AlertManager.
- [Doku ![GitHub Repo Stars](https://img.shields.io/github/stars/amerkurev/doku) ![GitHub last commit](https://img.shields.io/github/last-commit/amerkurev/doku)](https://github.com/amerkurev/doku) - Doku is a simple web-based application that allows you to monitor Docker disk usage.
- [Dozzle](dozzle) - Monitor container logs in real-time with a browser or mobile device.
- [Drydock ![GitHub Repo Stars](https://img.shields.io/github/stars/CodesWhat/drydock) ![GitHub last commit](https://img.shields.io/github/last-commit/CodesWhat/drydock)](https://github.com/CodesWhat/drydock) - Container update monitoring with web dashboard, 23 registry providers, 20 notification triggers, and distributed agent architecture.
- [Dynatrace](https://docs.dynatrace.com/docs/observe/infrastructure-observability/container-platform-monitoring) - :yen: Monitor containerized applications without installing agents or modifying your Run commands.
- [Grafana Docker Dashboard Template](https://grafana.com/grafana/dashboards/179-docker-prometheus-monitoring/) - A template for your Docker, Grafana and Prometheus stack.
- [Maintenant ![GitHub Repo Stars](https://img.shields.io/github/stars/kolapsis/maintenant) ![GitHub last commit](https://img.shields.io/github/last-commit/kolapsis/maintenant)](https://github.com/kolapsis/maintenant) - Self-discovering infrastructure monitoring for Docker and Kubernetes. Auto-detects containers via labels, with endpoint monitoring, heartbeats, TLS certificates, resource metrics, update intelligence, and a built-in status page. Single binary with embedded SPA.
- [Site24x7](https://www.site24x7.com/docker-monitoring.html) - :yen: Docker Monitoring for DevOps and IT, SaaS Pay-per-Host model.
- [Sysdig Monitor](https://www.sysdig.com/products/monitor) - :yen: Software or SaaS service that monitors, alerts, and troubleshoots containers using system calls; container-specific features for Docker and Kubernetes.
- [Wiremap ![GitHub Repo Stars](https://img.shields.io/github/stars/codeofmario/wiremap) ![GitHub last commit](https://img.shields.io/github/last-commit/codeofmario/wiremap)](https://github.com/codeofmario/wiremap) - A self-hosted visual Docker network topology explorer with real-time log streaming, live stats, embedded terminal, and container inspection.

## Security

Container hardening, runtime security, policy, compliance, and forensics. Self-hosted and commercial together; commercial entries marked `:yen:`.

- [Aqua Security](https://www.aquasec.com) - :yen: Securing container-based applications from Dev to Production on any platform.
- [buildcage ![GitHub Repo Stars](https://img.shields.io/github/stars/dash14/buildcage) ![GitHub last commit](https://img.shields.io/github/last-commit/dash14/buildcage)](https://github.com/dash14/buildcage) - Restricts outbound network access during Docker builds to prevent supply chain attacks, working as a drop-in BuildKit remote driver for Docker Buildx, with ready-to-use GitHub Actions.
- [CetusGuard ![GitHub Repo Stars](https://img.shields.io/github/stars/hectorm/cetusguard) ![GitHub last commit](https://img.shields.io/github/last-commit/hectorm/cetusguard)](https://github.com/hectorm/cetusguard) - CetusGuard is a tool that protects the Docker daemon socket by filtering calls to its API endpoints.
- [Checkov ![GitHub Repo Stars](https://img.shields.io/github/stars/bridgecrewio/checkov) ![GitHub last commit](https://img.shields.io/github/last-commit/bridgecrewio/checkov)](https://github.com/bridgecrewio/checkov) - Static analysis for infrastructure as code manifests (Terraform, Kubernetes, Cloudformation, Helm, Dockerfile, Kustomize) find security misconfiguration and fix them.
- [Deepfence Threat Mapper ![GitHub Repo Stars](https://img.shields.io/github/stars/deepfence/ThreatMapper) ![GitHub last commit](https://img.shields.io/github/last-commit/deepfence/ThreatMapper)](https://github.com/deepfence/ThreatMapper) - Powerful runtime vulnerability scanner for kubernetes, virtual machines and serverless.
- [Den ![GitHub Repo Stars](https://img.shields.io/github/stars/us/den) ![GitHub last commit](https://img.shields.io/github/last-commit/us/den)](https://github.com/us/den) - Self-hosted sandbox runtime for AI agents with Docker containers, security hardening, REST API and WebSocket support.
- [docker-bench-security ![GitHub Repo Stars](https://img.shields.io/github/stars/docker/docker-bench-security) ![GitHub last commit](https://img.shields.io/github/last-commit/docker/docker-bench-security)](https://github.com/docker/docker-bench-security) - Script that checks for dozens of common best-practices around deploying Docker containers in production.
- [docker-explorer ![GitHub Repo Stars](https://img.shields.io/github/stars/google/docker-explorer) ![GitHub last commit](https://img.shields.io/github/last-commit/google/docker-explorer)](https://github.com/google/docker-explorer) - A tool to help forensicate offline docker acquisitions.
- [docker-socket-proxy ![GitHub Repo Stars](https://img.shields.io/github/stars/Tecnativa/docker-socket-proxy) ![GitHub last commit](https://img.shields.io/github/last-commit/Tecnativa/docker-socket-proxy)](https://github.com/Tecnativa/docker-socket-proxy) - HAProxy-based fine-grained filter for the Docker API socket; widely used to expose a restricted socket to reverse proxies and homelab stacks.
- [KICS ![GitHub Repo Stars](https://img.shields.io/github/stars/checkmarx/kics) ![GitHub last commit](https://img.shields.io/github/last-commit/checkmarx/kics)](https://github.com/checkmarx/kics) - An infrastructure-as-code scanning tool, find security vulnerabilities, compliance issues, and infrastructure misconfigurations early in the development cycle. Can be extended for additional policies.
- [Prisma Cloud](https://www.paloaltonetworks.com/prisma/cloud) - :yen: (Previously Twistlock Security Suite) detects vulnerabilities, hardens container images, and enforces security policies across the lifecycle of applications.
- [segspec ![GitHub Repo Stars](https://img.shields.io/github/stars/dormstern/segspec) ![GitHub last commit](https://img.shields.io/github/last-commit/dormstern/segspec)](https://github.com/dormstern/segspec) - Extracts network dependencies from Docker Compose, Kubernetes manifests, Helm charts, and other config files to generate Kubernetes NetworkPolicies with evidence tracing.
- [Sysdig Falco ![GitHub Repo Stars](https://img.shields.io/github/stars/falcosecurity/falco) ![GitHub last commit](https://img.shields.io/github/last-commit/falcosecurity/falco)](https://github.com/falcosecurity/falco) - Sysdig Falco is an open source container security monitor. It can monitor application, container, host, and network activity and alert on unauthorized activity.
- [Sysdig Secure](https://www.sysdig.com/solutions/cloud-detection-and-response-cdr) - :yen: Sysdig Secure addresses run-time security through behavioral monitoring and defense, and provides deep forensics based on open source Sysdig for incident response.
- [Trend Micro DeepSecurity](https://www.trendmicro.com/en_us/business/products/hybrid-cloud/deep-security.html) - :yen: Trend Micro DeepSecurity offers runtime protection for container workloads and hosts as well as preruntime scanning of images to identify vulnerabilities, malware and content such as hardcoded secrets.

## User Interfaces

### Desktop

Native desktop applications for managing and monitoring docker hosts and clusters

- [Docker DB Manager ![GitHub Repo Stars](https://img.shields.io/github/stars/AbianS/docker-db-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/AbianS/docker-db-manager)](https://github.com/AbianS/docker-db-manager) - Desktop app for managing Docker database containers with visual interface and one-click operations.
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) - Official native app. Only for Windows and MacOS.
- [Simple Docker UI ![GitHub Repo Stars](https://img.shields.io/github/stars/felixgborrego/simple-docker-ui) ![GitHub last commit](https://img.shields.io/github/last-commit/felixgborrego/simple-docker-ui)](https://github.com/felixgborrego/simple-docker-ui) - Built on Electron.
- [Stevedore ![GitHub Repo Stars](https://img.shields.io/github/stars/slonopotamus/stevedore) ![GitHub last commit](https://img.shields.io/github/last-commit/slonopotamus/stevedore)](https://github.com/slonopotamus/stevedore) - Good Docker Desktop replacement for Windows. Both Linux and Windows Containers are supported. [slonopotamus](https://github.com/slonopotamus).

### Terminal

TUIs, CLI tools, and shell integrations for Docker.

- [d4s ![GitHub Repo Stars](https://img.shields.io/github/stars/jr-k/d4s) ![GitHub last commit](https://img.shields.io/github/last-commit/jr-k/d4s)](https://github.com/jr-k/d4s) - A fast, keyboard-driven terminal UI to manage Docker containers, Compose stacks, and Swarm services with the ergonomics of K9s.
- [dcinja ![GitHub Repo Stars](https://img.shields.io/github/stars/Falldog/dcinja) ![GitHub last commit](https://img.shields.io/github/last-commit/Falldog/dcinja)](https://github.com/Falldog/dcinja) - The powerful and smallest binary size of template engine for docker command line environment.
- [dctl ![GitHub Repo Stars](https://img.shields.io/github/stars/FabienD/docker-stack) ![GitHub last commit](https://img.shields.io/github/last-commit/FabienD/docker-stack)](https://github.com/FabienD/docker-stack) - Dctl is a Cli tool that helps developers by allowing them to execute all docker compose commands anywhere in the terminal, and more.
- [decompose ![GitHub Repo Stars](https://img.shields.io/github/stars/s0rg/decompose) ![GitHub last commit](https://img.shields.io/github/last-commit/s0rg/decompose)](https://github.com/s0rg/decompose) - Reverse-engineering tool for docker environments.
- [dive ![GitHub Repo Stars](https://img.shields.io/github/stars/wagoodman/dive) ![GitHub last commit](https://img.shields.io/github/last-commit/wagoodman/dive)](https://github.com/wagoodman/dive) - A tool for exploring each layer in a docker image.
- [dockdash ![GitHub Repo Stars](https://img.shields.io/github/stars/byrnedo/dockdash) ![GitHub last commit](https://img.shields.io/github/last-commit/byrnedo/dockdash)](https://github.com/byrnedo/dockdash) - Detailed Docker container stats.
- [docker pushrm ![GitHub Repo Stars](https://img.shields.io/github/stars/christian-korneck/docker-pushrm) ![GitHub last commit](https://img.shields.io/github/last-commit/christian-korneck/docker-pushrm)](https://github.com/christian-korneck/docker-pushrm) - A Docker CLI plugin that lets you push the README.md file from the current directory to Docker Hub. Also supports Quay and Harbor.
- [docker-captain ![GitHub Repo Stars](https://img.shields.io/github/stars/lucabello/docker-captain) ![GitHub last commit](https://img.shields.io/github/last-commit/lucabello/docker-captain)](https://github.com/lucabello/docker-captain) - A friendly CLI to manage multiple Docker Compose deployments with style — powered by Typer, Rich, questionary, and sh.
- [dockerfile-mode ![GitHub Repo Stars](https://img.shields.io/github/stars/spotify/dockerfile-mode) ![GitHub last commit](https://img.shields.io/github/last-commit/spotify/dockerfile-mode)](https://github.com/spotify/dockerfile-mode) - An Emacs mode for handling Dockerfiles.
- [dockerfilegraph ![GitHub Repo Stars](https://img.shields.io/github/stars/patrickhoefler/dockerfilegraph) ![GitHub last commit](https://img.shields.io/github/last-commit/patrickhoefler/dockerfilegraph)](https://github.com/patrickhoefler/dockerfilegraph) - Visualize your multi-stage Dockerfiles.
- [dockly ![GitHub Repo Stars](https://img.shields.io/github/stars/lirantal/dockly) ![GitHub last commit](https://img.shields.io/github/last-commit/lirantal/dockly)](https://github.com/lirantal/dockly) - An interactive shell UI for managing Docker containers.
- [DockMate ![GitHub Repo Stars](https://img.shields.io/github/stars/shubh-io/dockmate) ![GitHub last commit](https://img.shields.io/github/last-commit/shubh-io/dockmate)](https://github.com/shubh-io/dockmate) - Lightweight terminal-based Docker and Podman manager with a text-based user interface,.
- [DockSTARTer ![GitHub Repo Stars](https://img.shields.io/github/stars/GhostWriters/DockSTARTer) ![GitHub last commit](https://img.shields.io/github/last-commit/GhostWriters/DockSTARTer)](https://github.com/GhostWriters/DockSTARTer) - DockSTARTer helps you get started with home server apps running in Docker.
- [dprs ![GitHub Repo Stars](https://img.shields.io/github/stars/durableprogramming/dprs) ![GitHub last commit](https://img.shields.io/github/last-commit/durableprogramming/dprs)](https://github.com/durableprogramming/dprs) - A developer-focused TUI for managing Docker containers with real-time log streaming and container management.
- [dry ![GitHub Repo Stars](https://img.shields.io/github/stars/moncho/dry) ![GitHub last commit](https://img.shields.io/github/last-commit/moncho/dry)](https://github.com/moncho/dry) - An interactive CLI for Docker containers.
- [easydocker ![GitHub Repo Stars](https://img.shields.io/github/stars/joao-zanutto/easydocker) ![GitHub last commit](https://img.shields.io/github/last-commit/joao-zanutto/easydocker)](https://github.com/joao-zanutto/easydocker) - A Terminal UI highly inpired by k9s levaraging beatiful BubbleTea graphics.
- [goManageDocker ![GitHub Repo Stars](https://img.shields.io/github/stars/ajayd-san/gomanagedocker) ![GitHub last commit](https://img.shields.io/github/last-commit/ajayd-san/gomanagedocker)](https://github.com/ajayd-san/gomanagedocker) - TUI tool to view and manage your docker objects blazingly fast with sensible keybindings, also supports VIM navigation out of the box.
- [lazydocker ![GitHub Repo Stars](https://img.shields.io/github/stars/jesseduffield/lazydocker) ![GitHub last commit](https://img.shields.io/github/last-commit/jesseduffield/lazydocker)](https://github.com/jesseduffield/lazydocker) - The lazier way to manage everything docker. A simple terminal UI for both docker and docker-compose, written in Go with the gocui library.
- [lazyjournal ![GitHub Repo Stars](https://img.shields.io/github/stars/Lifailon/lazyjournal) ![GitHub last commit](https://img.shields.io/github/last-commit/Lifailon/lazyjournal)](https://github.com/Lifailon/lazyjournal) - A interface for reading and filtering the logs output of Docker and Podman containers like [Dozzle](dozzle) but for the terminal with support for fuzzy find, regex and output coloring.
- [oxker ![GitHub Repo Stars](https://img.shields.io/github/stars/mrjackwills/oxker) ![GitHub last commit](https://img.shields.io/github/last-commit/mrjackwills/oxker)](https://github.com/mrjackwills/oxker) - A simple tui to view & control docker containers.
- [proco ![GitHub Repo Stars](https://img.shields.io/github/stars/shiwaforce/poco) ![GitHub last commit](https://img.shields.io/github/last-commit/shiwaforce/poco)](https://github.com/shiwaforce/poco) - Proco will help you to organise and manage Docker, Docker-Compose, Kubernetes projects of any complexity using simple YAML config files to shorten the route from finding your project to initialising it in your local environment.
- [scuba ![GitHub Repo Stars](https://img.shields.io/github/stars/JonathonReinhart/scuba) ![GitHub last commit](https://img.shields.io/github/last-commit/JonathonReinhart/scuba)](https://github.com/JonathonReinhart/scuba) - Transparently use Docker containers to encapsulate software build environments,.
- [supdock ![GitHub Repo Stars](https://img.shields.io/github/stars/segersniels/supdock) ![GitHub last commit](https://img.shields.io/github/last-commit/segersniels/supdock)](https://github.com/segersniels/supdock) - Allows for slightly more visual usage of Docker with an interactive prompt.
- [swarmcli ![GitHub Repo Stars](https://img.shields.io/github/stars/Eldara-Tech/swarmcli) ![GitHub last commit](https://img.shields.io/github/last-commit/Eldara-Tech/swarmcli)](https://github.com/Eldara-Tech/swarmcli) - Swarm Management at the speed of thought — with real-time log streaming, instant shell access to containers, seamless port forwarding, and on-demand secret reveal capabilities, giving you full control over your Docker Swarm without breaking your flow.
- [tdocker ![GitHub Repo Stars](https://img.shields.io/github/stars/pivovarit/tdocker) ![GitHub last commit](https://img.shields.io/github/last-commit/pivovarit/tdocker)](https://github.com/pivovarit/tdocker) - A `docker ps` replacement for everyday container operations.
- [wharf ![GitHub Repo Stars](https://img.shields.io/github/stars/idesyatov/wharf) ![GitHub last commit](https://img.shields.io/github/last-commit/idesyatov/wharf)](https://github.com/idesyatov/wharf) - A k9s-inspired TUI for Docker Compose with vim-style navigation, real-time CPU/MEM monitoring with braille charts, container file browser, SSH remote host support, and command mode.

### Web

- [Arcane ![GitHub Repo Stars](https://img.shields.io/github/stars/getarcaneapp/arcane) ![GitHub last commit](https://img.shields.io/github/last-commit/getarcaneapp/arcane)](https://github.com/getarcaneapp/arcane) - An easy and modern Docker management platform, built with everybody in mind.
- [CASA ![GitHub Repo Stars](https://img.shields.io/github/stars/knrdl/casa) ![GitHub last commit](https://img.shields.io/github/last-commit/knrdl/casa)](https://github.com/knrdl/casa) - Outsource the administration of a handful of containers to your co-workers,.
- [Container Web TTY ![GitHub Repo Stars](https://img.shields.io/github/stars/wrfly/container-web-tty) ![GitHub last commit](https://img.shields.io/github/last-commit/wrfly/container-web-tty)](https://github.com/wrfly/container-web-tty) - Connect your containers via a web-tty.
- [Docker Registry Browser ![GitHub Repo Stars](https://img.shields.io/github/stars/klausmeyer/docker-registry-browser) ![GitHub last commit](https://img.shields.io/github/last-commit/klausmeyer/docker-registry-browser)](https://github.com/klausmeyer/docker-registry-browser) - Web Interface for the Docker Registry HTTP API v2.
- [docker-swarm-visualizer ![GitHub Repo Stars](https://img.shields.io/github/stars/dockersamples/docker-swarm-visualizer) ![GitHub last commit](https://img.shields.io/github/last-commit/dockersamples/docker-swarm-visualizer)](https://github.com/dockersamples/docker-swarm-visualizer) - Visualizes Docker services on a Docker Swarm (for running demos).
- [dockge ![GitHub Repo Stars](https://img.shields.io/github/stars/louislam/dockge) ![GitHub last commit](https://img.shields.io/github/last-commit/louislam/dockge)](https://github.com/louislam/dockge) - Easy-to-use and reactive self-hosted docker compose.yaml stack-oriented manager.
- [Komodo ![GitHub Repo Stars](https://img.shields.io/github/stars/mbecker20/komodo) ![GitHub last commit](https://img.shields.io/github/last-commit/mbecker20/komodo)](https://github.com/mbecker20/komodo) - A tool to build and deploy software on many servers.
- [Portainer ![GitHub Repo Stars](https://img.shields.io/github/stars/portainer/portainer) ![GitHub last commit](https://img.shields.io/github/last-commit/portainer/portainer)](https://github.com/portainer/portainer) - A lightweight management UI for managing your Docker hosts or Docker Swarm clusters.
- [Swarmpit ![GitHub Repo Stars](https://img.shields.io/github/stars/swarmpit/swarmpit) ![GitHub last commit](https://img.shields.io/github/last-commit/swarmpit/swarmpit)](https://github.com/swarmpit/swarmpit) - Swarmpit provides simple and easy to use interface for your Docker Swarm cluster. You can manage your stacks, services, secrets, volumes, networks etc.
- [usulnet ![GitHub Repo Stars](https://img.shields.io/github/stars/fr4nsys/usulnet) ![GitHub last commit](https://img.shields.io/github/last-commit/fr4nsys/usulnet)](https://github.com/fr4nsys/usulnet) - A complete and modern Docker management platform designed for sysadmin, devops with enterprise grade tools, cve scanner, ssh, rdp on web and much more.

### IDE Integrations

- JetBrains IDEs (IntelliJ IDEA, GoLand, WebStorm, CLion etc.) has [built-in Docker plugin](https://www.jetbrains.com/help/idea/docker.html#managing-images)
- Eclipse [Docker Tooling plugin](https://www.eclipse.org/community/eclipse_newsletter/2016/july/article2.php)
- [docker.el ![GitHub Repo Stars](https://img.shields.io/github/stars/Silex/docker.el) ![GitHub last commit](https://img.shields.io/github/last-commit/Silex/docker.el)](https://github.com/Silex/docker.el) Manage docker from Emacs.

## Developer Workflow

### API Client

- [contajners ![GitHub Repo Stars](https://img.shields.io/github/stars/lispyclouds/contajners) ![GitHub last commit](https://img.shields.io/github/last-commit/lispyclouds/contajners)](https://github.com/lispyclouds/contajners) - An idiomatic, data-driven, REPL friendly Clojure client for OCI container engines.
- [Docker Client for JVM ![GitHub Repo Stars](https://img.shields.io/github/stars/gesellix/docker-client) ![GitHub last commit](https://img.shields.io/github/last-commit/gesellix/docker-client)](https://github.com/gesellix/docker-client) - A Docker remote api client library for the JVM, written in Groovy.
- [Docker Client TypeScript](https://gitlab.com/masaeedu/docker-client) - Docker API client for JavaScript, automatically generated from Swagger API definition from moby repository.
- [docker-controller-bot ![GitHub Repo Stars](https://img.shields.io/github/stars/dgongut/docker-controller-bot) ![GitHub last commit](https://img.shields.io/github/last-commit/dgongut/docker-controller-bot)](https://github.com/dgongut/docker-controller-bot) - Telegram bot to control docker containers.
- [docker-maven-plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/fabric8io/docker-maven-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/fabric8io/docker-maven-plugin)](https://github.com/fabric8io/docker-maven-plugin) - A Maven plugin for running and creating Docker images.
- [Docker.DotNet ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/Docker.DotNet) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/Docker.DotNet)](https://github.com/Microsoft/Docker.DotNet) - C#/.NET HTTP client for the Docker remote API.
- [Docker.Registry.DotNet ![GitHub Repo Stars](https://img.shields.io/github/stars/ChangemakerStudios/Docker.Registry.DotNet) ![GitHub last commit](https://img.shields.io/github/last-commit/ChangemakerStudios/Docker.Registry.DotNet)](https://github.com/ChangemakerStudios/Docker.Registry.DotNet) - .NET (C#) Client Library for interacting with a Docker Registry API (v2).
- [dockerode ![GitHub Repo Stars](https://img.shields.io/github/stars/apocas/dockerode) ![GitHub last commit](https://img.shields.io/github/last-commit/apocas/dockerode)](https://github.com/apocas/dockerode) - Docker Remote API node.js module.
- [go-dockerclient ![GitHub Repo Stars](https://img.shields.io/github/stars/fsouza/go-dockerclient) ![GitHub last commit](https://img.shields.io/github/last-commit/fsouza/go-dockerclient)](https://github.com/fsouza/go-dockerclient/) - Go HTTP client for the Docker remote API.
- [Gradle Docker plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/gesellix/gradle-docker-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/gesellix/gradle-docker-plugin)](https://github.com/gesellix/gradle-docker-plugin) - A Docker remote api plugin for Gradle.
- [Portainer stack utils ![GitHub Repo Stars](https://img.shields.io/github/stars/greenled/portainer-stack-utils) ![GitHub last commit](https://img.shields.io/github/last-commit/greenled/portainer-stack-utils)](https://github.com/greenled/portainer-stack-utils) - Bash script to deploy/update/undeploy Docker stacks in a Portainer instance from a docker-compose yaml file.
- [sbt-docker ![GitHub Repo Stars](https://img.shields.io/github/stars/marcuslonnberg/sbt-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/marcuslonnberg/sbt-docker)](https://github.com/marcuslonnberg/sbt-docker) - Create Docker images directly from sbt.

### CI/CD

Self-hosted CI engines, build accelerators, and hosted services that target Docker workflows. Commercial entries marked `:yen:`.

- [Buddy](https://buddy.works) - :yen: The best of Git, build & deployment tools combined into one powerful tool that supercharged our development.
- [Captain ![GitHub Repo Stars](https://img.shields.io/github/stars/harbur/captain) ![GitHub last commit](https://img.shields.io/github/last-commit/harbur/captain)](https://github.com/harbur/captain) - Convert your Git workflow to Docker containers ready for Continuous Delivery.
- [CircleCI](https://circleci.com/) - :yen: Push or pull Docker images from your build environment, or build and run containers right on CircleCI.
- [CodeFresh](https://octopus.com/codefresh) - :yen: End-to-end build, test, and share for Docker applications, with automated testing.
- [ConcourseCI](https://concourse-ci.org) - :yen: Pipeline-oriented CI SaaS platform for DevOps teams.
- [Defang ![GitHub Repo Stars](https://img.shields.io/github/stars/DefangLabs/defang) ![GitHub last commit](https://img.shields.io/github/last-commit/DefangLabs/defang)](https://github.com/DefangLabs/defang) - Deploy Docker Compose to your favorite cloud in minutes.
- [Depot](https://depot.dev) - :yen: Build Docker images fast, in the cloud. Blazing fast compute, automatic intelligent caching, and zero configuration.
- [Diun ![GitHub Repo Stars](https://img.shields.io/github/stars/crazy-max/diun) ![GitHub last commit](https://img.shields.io/github/last-commit/crazy-max/diun)](https://github.com/crazy-max/diun) - Receive notifications when an image or repository is updated on a Docker registry.
- [dockcheck ![GitHub Repo Stars](https://img.shields.io/github/stars/mag37/dockcheck) ![GitHub last commit](https://img.shields.io/github/last-commit/mag37/dockcheck)](https://github.com/mag37/dockcheck) - A script checking updates for docker images without pulling then auto-update selected/all containers. With notifications, pruning and more.
- [Docker plugin for Jenkins ![GitHub Repo Stars](https://img.shields.io/github/stars/jenkinsci/docker-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/jenkinsci/docker-plugin)](https://github.com/jenkinsci/docker-plugin/) - The aim of the docker plugin is to be able to use a docker host to dynamically provision a slave, run a single build, then tear-down that slave.
- [Drone ![GitHub Repo Stars](https://img.shields.io/github/stars/drone/drone) ![GitHub last commit](https://img.shields.io/github/last-commit/drone/drone)](https://github.com/drone/drone) - Continuous integration server built on Docker and configured using YAML files.
- [Gantry ![GitHub Repo Stars](https://img.shields.io/github/stars/shizunge/gantry) ![GitHub last commit](https://img.shields.io/github/last-commit/shizunge/gantry)](https://github.com/shizunge/gantry) - Automatically update selected Docker swarm services.
- [GitLab Runner](https://gitlab.com/gitlab-org/gitlab-runner) - GitLab has integrated CI to test, build and deploy your code with the use of GitLab runners.
- [Jaypore CI ![GitHub Repo Stars](https://img.shields.io/github/stars/theSage21/jaypore_ci) ![GitHub last commit](https://img.shields.io/github/last-commit/theSage21/jaypore_ci)](https://github.com/theSage21/jaypore_ci) - Simple, very flexible, powerful CI / CD / automation system configured in Python. Offline and local first.
- [Kraken CI ![GitHub Repo Stars](https://img.shields.io/github/stars/Kraken-CI/kraken) ![GitHub last commit](https://img.shields.io/github/last-commit/Kraken-CI/kraken)](https://github.com/Kraken-CI/kraken) - Modern CI/CD, open-source, on-premise system that is highly scalable and focused on testing. One of its executors is Docker. Developed.
- [Screwdriver](https://screwdriver.cd/) - :yen: Yahoo's OpenSource buildplatform designed for Continous Delivery.
- [Semaphore CI](https://semaphore.io/) - :yen: High-performance cloud CI that builds, tests and ships containers to production.
- [Skipper ![GitHub Repo Stars](https://img.shields.io/github/stars/Stratoscale/skipper) ![GitHub last commit](https://img.shields.io/github/last-commit/Stratoscale/skipper)](https://github.com/Stratoscale/skipper) - Easily dockerize your Git repository.
- [Tekton CD](https://tekton.dev/) - A cloud-native pipeline resource.
- [TravisCI](https://www.travis-ci.com/) - :yen: Hosted CI for GitHub projects with Docker support.

### Development Environment

- [coder ![GitHub Repo Stars](https://img.shields.io/github/stars/coder/coder) ![GitHub last commit](https://img.shields.io/github/last-commit/coder/coder)](https://github.com/coder/coder) - Remote development machines powered by Terraform or Docker.
- [dde ![GitHub Repo Stars](https://img.shields.io/github/stars/whatwedo/dde) ![GitHub last commit](https://img.shields.io/github/last-commit/whatwedo/dde)](https://github.com/whatwedo/dde) - Local development environment toolset based on Docker.
- [DIP ![GitHub Repo Stars](https://img.shields.io/github/stars/bibendi/dip) ![GitHub last commit](https://img.shields.io/github/last-commit/bibendi/dip)](https://github.com/bibendi/dip) - CLI utility for straightforward provisioning and interacting with an application configured by docker-compose.
- [EnvCLI ![GitHub Repo Stars](https://img.shields.io/github/stars/EnvCLI/EnvCLI) ![GitHub last commit](https://img.shields.io/github/last-commit/EnvCLI/EnvCLI)](https://github.com/EnvCLI/EnvCLI) - Replace your local installation of Node, Go, ... with project-specific docker containers.
- [Gebug ![GitHub Repo Stars](https://img.shields.io/github/stars/moshebe/gebug) ![GitHub last commit](https://img.shields.io/github/last-commit/moshebe/gebug)](https://github.com/moshebe/gebug) - A tool that makes debugging of Dockerized Go applications super easy by enabling Debugger and Hot-Reload features, seamlessly.
- [HarborPilot ![GitHub Repo Stars](https://img.shields.io/github/stars/potterwhite/HarborPilot) ![GitHub last commit](https://img.shields.io/github/last-commit/potterwhite/HarborPilot)](https://github.com/potterwhite/HarborPilot) - Automated multi-platform Docker image builder for embedded Linux development (RK3588, RV1126, RK3568). Features three-layer config inheritance, PORT_SLOT-based port allocation, and cross-version Ubuntu support (20.04/22.04/24.04).
- [Lando ![GitHub Repo Stars](https://img.shields.io/github/stars/lando/lando) ![GitHub last commit](https://img.shields.io/github/last-commit/lando/lando)](https://github.com/lando/lando) - Lando is for developers who want to quickly specify and painlessly spin up the services and tools needed to develop their projects.
- [uniget ![GitHub Repo Stars](https://img.shields.io/github/stars/uniget-org/cli) ![GitHub last commit](https://img.shields.io/github/last-commit/uniget-org/cli)](https://github.com/uniget-org/cli) - Uni(versal)get, the installer and updater for container tools and beyond (formerly docker-setup).
- [Zsh-in-Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/deluan/zsh-in-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/deluan/zsh-in-docker)](https://github.com/deluan/zsh-in-docker) - Install Zsh, Oh-My-Zsh and plugins inside a Docker container with one line!.

### Serverless

- [Apache OpenWhisk ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/openwhisk) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/openwhisk)](https://github.com/apache/openwhisk) - A serverless, open source cloud platform that executes functions in response to events at any scale.
- [Koyeb](https://www.koyeb.com/) - :yen: Koyeb is a developer-friendly serverless platform to deploy apps globally. Seamlessly run Docker containers, web apps, and APIs with git-based deployment, native autoscaling, a global edge network, and built-in service mesh and discovery.
- [OpenFaaS ![GitHub Repo Stars](https://img.shields.io/github/stars/openfaas/faas) ![GitHub last commit](https://img.shields.io/github/last-commit/openfaas/faas)](https://github.com/openfaas/faas) - A complete serverless functions framework for Docker and Kubernetes.

### Testing

- [Container Structure Test ![GitHub Repo Stars](https://img.shields.io/github/stars/GoogleContainerTools/container-structure-test) ![GitHub last commit](https://img.shields.io/github/last-commit/GoogleContainerTools/container-structure-test)](https://github.com/GoogleContainerTools/container-structure-test) - A framework to validate the structure of an image by checking the outputs of commands or the contents of the filesystem.
- [dgoss ![GitHub Repo Stars](https://img.shields.io/github/stars/goss-org/goss) ![GitHub last commit](https://img.shields.io/github/last-commit/goss-org/goss)](https://github.com/goss-org/goss/tree/master/extras/dgoss) - A fast YAML based tool for validating docker containers.
- [Kurtosis ![GitHub Repo Stars](https://img.shields.io/github/stars/kurtosis-tech/kurtosis) ![GitHub last commit](https://img.shields.io/github/last-commit/kurtosis-tech/kurtosis)](https://github.com/kurtosis-tech/kurtosis) - A composable build system for multi-container test environments that provides developers with: a powerful Python-like SDK for environment configuration, a compile-time validator to verify environment behavior & setup, and a runtime for environment execution, monitoring, & debugging capabilities.
- [Pumba ![GitHub Repo Stars](https://img.shields.io/github/stars/alexei-led/pumba) ![GitHub last commit](https://img.shields.io/github/last-commit/alexei-led/pumba)](https://github.com/alexei-led/pumba) - Chaos testing tool for Docker. Can be deployed on kubernetes and CoreOS cluster.

### Wrappers

- [Hokusai ![GitHub Repo Stars](https://img.shields.io/github/stars/artsy/hokusai) ![GitHub last commit](https://img.shields.io/github/last-commit/artsy/hokusai)](https://github.com/artsy/hokusai) - A Docker + Kubernetes CLI for application developers; used to containerize an application and to manage its lifecycle throughout development, testing, and release cycles. From [artsy](https://github.com/artsy).
- [Preevy ![GitHub Repo Stars](https://img.shields.io/github/stars/livecycle/preevy) ![GitHub last commit](https://img.shields.io/github/last-commit/livecycle/preevy)](https://github.com/livecycle/preevy) - Preview environments for Docker and Docker Compose projects. Test your changes and get feedback from devs and non-devs (Product/Design) by deploying pull requests to the your cloud provider as part of your CI pipeline.
- [subuser ![GitHub Repo Stars](https://img.shields.io/github/stars/subuser-security/subuser) ![GitHub last commit](https://img.shields.io/github/last-commit/subuser-security/subuser)](https://github.com/subuser-security/subuser) - Makes it easy to securely and portably run graphical desktop applications in Docker.
- [udocker ![GitHub Repo Stars](https://img.shields.io/github/stars/indigo-dc/udocker) ![GitHub last commit](https://img.shields.io/github/last-commit/indigo-dc/udocker)](https://github.com/indigo-dc/udocker) - A tool to execute simple docker containers in batch or interactive systems without root privileges.
- [Vagrant - Docker provider](https://developer.hashicorp.com/vagrant/docs/providers/docker/basics) - Good starting point is [vagrant-docker-example ![GitHub Repo Stars](https://img.shields.io/github/stars/bubenkoff/vagrant-docker-example) ![GitHub last commit](https://img.shields.io/github/last-commit/bubenkoff/vagrant-docker-example)](https://github.com/bubenkoff/vagrant-docker-example).

## In-Container Tooling

Tools and applications that are either installed inside containers or designed to be run as a [sidecar](https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar)

- [cdebug ![GitHub Repo Stars](https://img.shields.io/github/stars/iximiuz/cdebug) ![GitHub last commit](https://img.shields.io/github/last-commit/iximiuz/cdebug)](https://github.com/iximiuz/cdebug) - Swiss-army knife for debugging running containers via ephemeral sidecars; works with Docker, containerd, and Kubernetes.
- [ckron ![GitHub Repo Stars](https://img.shields.io/github/stars/nicomt/ckron) ![GitHub last commit](https://img.shields.io/github/last-commit/nicomt/ckron)](https://github.com/nicomt/ckron) - A cron-style job scheduler for docker,.
- [CoreOS][coreos] - Linux for Massive Server Deployments
- [docker-gen ![GitHub Repo Stars](https://img.shields.io/github/stars/jwilder/docker-gen) ![GitHub last commit](https://img.shields.io/github/last-commit/jwilder/docker-gen)](https://github.com/jwilder/docker-gen) - Generate files from docker container meta-data.
- [dockerize ![GitHub Repo Stars](https://img.shields.io/github/stars/powerman/dockerize) ![GitHub last commit](https://img.shields.io/github/last-commit/powerman/dockerize)](https://github.com/powerman/dockerize) - Utility to simplify running applications in docker containers.
- [GoSu ![GitHub Repo Stars](https://img.shields.io/github/stars/tianon/gosu) ![GitHub last commit](https://img.shields.io/github/last-commit/tianon/gosu)](https://github.com/tianon/gosu) - Run this specific application as this specific user and get out of the pipeline (entrypoint script tool).
- [is-docker ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/is-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/is-docker)](https://github.com/sindresorhus/is-docker) - Check if the process is running inside a Docker container.
- [microcheck ![GitHub Repo Stars](https://img.shields.io/github/stars/tarampampam/microcheck) ![GitHub last commit](https://img.shields.io/github/last-commit/tarampampam/microcheck)](https://github.com/tarampampam/microcheck) - Lightweight health check utilities for Docker containers (75 KB instead of 9.3 MB for httpcheck versus cURL) in pure C - http(s), port checks, and parallel execution are included.
- [Ofelia ![GitHub Repo Stars](https://img.shields.io/github/stars/mcuadros/ofelia) ![GitHub last commit](https://img.shields.io/github/last-commit/mcuadros/ofelia)](https://github.com/mcuadros/ofelia/) - Ofelia is a modern and low footprint job scheduler for docker environments, built on Go. Ofelia aims to be a replacement for the old fashioned cron. Supports configuration from container labels and/or configuration files.
- [su-exec ![GitHub Repo Stars](https://img.shields.io/github/stars/ncopa/su-exec) ![GitHub last commit](https://img.shields.io/github/last-commit/ncopa/su-exec)](https://github.com/ncopa/su-exec) - This is a simple tool that will simply execute a program with different privileges. The program will be executed directly and not run as a child, like su and sudo does, which avoids TTY and signal issues. Why reinvent gosu? This does more or less exactly the same thing as gosu but it is only 10kb instead of 1.8MB.
- [supercronic ![GitHub Repo Stars](https://img.shields.io/github/stars/aptible/supercronic) ![GitHub last commit](https://img.shields.io/github/last-commit/aptible/supercronic)](https://github.com/aptible/supercronic) - Crontab-compatible job runner, designed specifically to run in containers.

# Learning Resources

## Where to Start

- [Benefits of using Docker](https://semaphore.io/blog/docker-benefits) for development and delivery, with a practical roadmap for adoption.
- [Bootstrapping Microservices](https://www.manning.com/books/bootstrapping-microservices-with-docker-kubernetes-and-terraform) - A practical and project-based guide to building applications with microservices, starts by building a Docker image for a single microservice and publishing it to a private container registry, finishes by deploying a complete microservices application to a production Kubernetes cluster.
- [Docker Curriculum ![GitHub Repo Stars](https://img.shields.io/github/stars/prakhar1989/docker-curriculum) ![GitHub last commit](https://img.shields.io/github/last-commit/prakhar1989/docker-curriculum)](https://github.com/prakhar1989/docker-curriculum): A comprehensive tutorial for getting started with Docker. Teaches how to use Docker and deploy dockerized apps on AWS with Elastic Beanstalk and Elastic Container Service.
- [Docker Documentation](https://docs.docker.com/): the official documentation.
- [Docker for beginners ![GitHub Repo Stars](https://img.shields.io/github/stars/groda/big_data) ![GitHub last commit](https://img.shields.io/github/last-commit/groda/big_data)](https://github.com/groda/big_data/blob/master/docker_for_beginners.md): A tutorial for beginners who need to learn the basics of Docker—from "Hello world!" to basic interactions with containers, with simple explanations of the underlying concepts.
- [Docker for novices](https://www.youtube.com/watch?v=xsjSadjKXns) An introduction to Docker for developers and testers who have never used it. (Video 1h40, recorded linux.conf.au 2019 — Christchurch, New Zealand)
- [Docker katas ![GitHub Repo Stars](https://img.shields.io/github/stars/eficode-academy/docker-katas) ![GitHub last commit](https://img.shields.io/github/last-commit/eficode-academy/docker-katas)](https://github.com/eficode-academy/docker-katas) A series of labs that will take you from "Hello Docker" to deploying a containerized web application to a server.
- [Docker simplified in 55 seconds](https://www.youtube.com/watch?v=vP_4DlOH1G4): An animated high-level introduction to Docker. Think of it as a visual tl;dr that makes it easier to dive into more complex learning materials.
- [Docker Training](https://training.mirantis.com) - :yen:
- [Dockerlings ![GitHub Repo Stars](https://img.shields.io/github/stars/furkan/dockerlings) ![GitHub last commit](https://img.shields.io/github/last-commit/furkan/dockerlings)](https://github.com/furkan/dockerlings): Learn docker from inside your terminal, with a modern TUI and bite sized exercises.
- [Introduction à Docker](https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/docker/) A dedicated section to master Docker on a French site about DevSecOps: From the basics to best practices, including optimizing, securing your containers...
- [Learn Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/dwyl/learn-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/dwyl/learn-docker)](https://github.com/dwyl/learn-docker): step-by-step tutorial and more resources (video, articles, cheat sheets)
- [Learn Docker (Visually)](https://pagertree.com/learn/docker/overview) - A beginner-focused high-level overview of all the major components of Docker and how they fit together. Lots of high-quality images, examples, and resources.
- [Play With Docker](https://training.play-with-docker.com/): PWD is a great way to get started with Docker from beginner to advanced users. Docker runs directly in your browser.
- [Practical Guide about Docker Commands in Spanish ![GitHub Repo Stars](https://img.shields.io/github/stars/brunocascio/docker-espanol) ![GitHub last commit](https://img.shields.io/github/last-commit/brunocascio/docker-espanol)](https://github.com/brunocascio/docker-espanol) This Spanish guide contains the use of basic docker commands with real life examples.
- [Setting Python Development Environment with VScode and Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/RamiKrispin/vscode-python) ![GitHub last commit](https://img.shields.io/github/last-commit/RamiKrispin/vscode-python)](https://github.com/RamiKrispin/vscode-python): A step-by-step tutorial for setting up a dockerized Python development environment with VScode, Docker, and the Dev Container extension.
- [The Docker Handbook](https://docker-handbook.farhan.dev/) An open-source book that teaches you the fundamentals, best practices and some intermediate Docker functionalities. The book is hosted on [fhsinchy/the-docker-handbook ![GitHub Repo Stars](https://img.shields.io/github/stars/fhsinchy/the-docker-handbook) ![GitHub last commit](https://img.shields.io/github/last-commit/fhsinchy/the-docker-handbook)](https://github.com/fhsinchy/the-docker-handbook) and the projects are hosted on [fhsinchy/docker-handbook-projects ![GitHub Repo Stars](https://img.shields.io/github/stars/fhsinchy/docker-handbook-projects) ![GitHub last commit](https://img.shields.io/github/last-commit/fhsinchy/docker-handbook-projects)](https://github.com/fhsinchy/docker-handbook-projects) repository.

**Cheatsheets**

- [eon01 ![GitHub Repo Stars](https://img.shields.io/github/stars/eon01/DockerCheatSheet) ![GitHub last commit](https://img.shields.io/github/last-commit/eon01/DockerCheatSheet)](https://github.com/eon01/DockerCheatSheet)
- [dimonomid ![GitHub Repo Stars](https://img.shields.io/github/stars/dimonomid/docker-quick-ref) ![GitHub last commit](https://img.shields.io/github/last-commit/dimonomid/docker-quick-ref)](https://github.com/dimonomid/docker-quick-ref) (PDF)
- [JensPiegsa ![GitHub Repo Stars](https://img.shields.io/github/stars/JensPiegsa/docker-cheat-sheet) ![GitHub last commit](https://img.shields.io/github/last-commit/JensPiegsa/docker-cheat-sheet)](https://github.com/JensPiegsa/docker-cheat-sheet)
- [wsargent ![GitHub Repo Stars](https://img.shields.io/github/stars/wsargent/docker-cheat-sheet) ![GitHub last commit](https://img.shields.io/github/last-commit/wsargent/docker-cheat-sheet)](https://github.com/wsargent/docker-cheat-sheet) (Most popular)

## Where to Start (Windows)

- [Docker on Windows behind a firewall](https://toedter.com/2015/05/11/docker-on-windows-behind-a-firewall/)
- [Docker Reference Architecture: Modernizing Traditional .NET Framework Applications](https://docs.mirantis.com/containers/v3.0/dockeree-ref-arch/app-dev/modernize-dotnet-apps.html) - You will learn to identify the types of .NET Framework applications that are good candidates for containerization, the "lift-and-shift" approach to containerization.
- [Docker with Microsoft SQL 2016 + ASP.NET](https://blog.alexellis.io/docker-does-sql2016-aspnet/) Demonstration running ASP.NET and SQL Server workloads in Docker
- [Exploring ASP.NET Core with Docker in both Linux and Windows Containers](https://www.hanselman.com/blog/exploring-aspnet-core-with-docker-in-both-linux-and-windows-containers) Running ASP.NET Core apps in Linux and Windows containers, using [Docker for Windows][docker-for-windows]
- [Running a Legacy ASP.NET App in a Windows Container](https://blog.sixeyed.com/dockerizing-nerd-dinner-part-1-running-a-legacy-asp-net-app-in-a-windows-container/) Steps for Dockerizing a legacy ASP.NET app and running as a Windows container
- [Windows Containers and Docker: The 101](https://www.youtube.com/watch?v=N7SG2wEyQtM) - A 20-minute overview, using Docker to run PowerShell, ASP.NET Core and ASP.NET apps.
- [Windows Containers Quick Start](https://learn.microsoft.com/en-us/virtualization/windowscontainers/about/) Overview of Windows containers, drilling down to Quick Starts for Windows 10 and Windows Server 2016

---

## Books & Tutorials

- [Cloud Native Landscape ![GitHub Repo Stars](https://img.shields.io/github/stars/cncf/landscape) ![GitHub last commit](https://img.shields.io/github/last-commit/cncf/landscape)](https://github.com/cncf/landscape)
- [Docker Blog](https://www.docker.com/blog/) - Regular updates about Docker, the community and tools.
- [Docker Certification](https://intellipaat.com/docker-training-course/?US) - :yen: Will help you to will Learn Docker containerization, running Docker containers, Image creation, Dockerfile, Docker orchestration, security best practices, and more through hands-on projects and case studies and helps to clear Docker Certified Associate.
- [Docker dev bookmarks](https://www.codever.dev/search?q=docker) - Use the tag [docker](https://www.codever.dev/bookmarks/t/docker).
- [Docker in Action, Second Edition](https://www.manning.com/books/docker-in-action-second-edition)
- [Docker in Practice, Second Edition](https://www.manning.com/books/docker-in-practice-second-edition)
- [Docker packaging guide for Python](https://pythonspeed.com/docker/) - A series of detailed articles on the specifics of Docker packaging for Python.
- [Learn Docker in a Month of Lunches](https://www.manning.com/books/learn-docker-in-a-month-of-lunches)
- [Learn Docker](https://coursesity.com/blog/best-docker-tutorials/) - Learn Docker - curated list of the top online docker tutorials and courses.
- [Programming Community Curated Resources for learning Docker](https://hackr.io/tutorials/learn-docker)

## Awesome Lists

- [Awesome Compose ![GitHub Repo Stars](https://img.shields.io/github/stars/docker/awesome-compose) ![GitHub last commit](https://img.shields.io/github/last-commit/docker/awesome-compose)](https://github.com/docker/awesome-compose) - Docker Compose samples.
- [Awesome Kubernetes ![GitHub Repo Stars](https://img.shields.io/github/stars/ramitsurana/awesome-kubernetes) ![GitHub last commit](https://img.shields.io/github/last-commit/ramitsurana/awesome-kubernetes)](https://github.com/ramitsurana/awesome-kubernetes)
- [Awesome Linux Container ![GitHub Repo Stars](https://img.shields.io/github/stars/Friz-zy/awesome-linux-containers) ![GitHub last commit](https://img.shields.io/github/last-commit/Friz-zy/awesome-linux-containers)](https://github.com/Friz-zy/awesome-linux-containers) more general about container than this repo.
- [Awesome Selfhosted ![GitHub Repo Stars](https://img.shields.io/github/stars/awesome-selfhosted/awesome-selfhosted) ![GitHub last commit](https://img.shields.io/github/last-commit/awesome-selfhosted/awesome-selfhosted)](https://github.com/awesome-selfhosted/awesome-selfhosted) list of Free Software network services and web applications which can be hosted locally by running in a classical way (setup local web server and run applications from there) or in a Docker container.
- [Awesome Sysadmin ![GitHub Repo Stars](https://img.shields.io/github/stars/n1trux/awesome-sysadmin) ![GitHub last commit](https://img.shields.io/github/last-commit/n1trux/awesome-sysadmin)](https://github.com/n1trux/awesome-sysadmin)
- [ToolsOfTheTrade ![GitHub Repo Stars](https://img.shields.io/github/stars/cjbarber/ToolsOfTheTrade) ![GitHub last commit](https://img.shields.io/github/last-commit/cjbarber/ToolsOfTheTrade)](https://github.com/cjbarber/ToolsOfTheTrade) a list of SaaS and On premise applications

## Demos and Examples

- [An Annotated Docker Config for Frontend Web Development](https://nystudio107.com/blog/an-annotated-docker-config-for-frontend-web-development) A local development environment with Docker allows you to shrink-wrap the devops your project needs as config, making onboarding frictionless.
- [Local Docker DB ![GitHub Repo Stars](https://img.shields.io/github/stars/alexmacarthur/local-docker-db) ![GitHub last commit](https://img.shields.io/github/last-commit/alexmacarthur/local-docker-db)](https://github.com/alexmacarthur/local-docker-db) a list of docker-compose samples for a lot of databases
- [Webstack-micro ![GitHub Repo Stars](https://img.shields.io/github/stars/ferbs/webstack-micro) ![GitHub last commit](https://img.shields.io/github/last-commit/ferbs/webstack-micro)](https://github.com/ferbs/webstack-micro) Demo web app showing how Docker Compose might be used to set up an API Gateway, centralized authentication, background workers, and WebSockets as containerized services.

## Good Tips

- [Docker Caveats](http://docker-saigon.github.io/post/Docker-Caveats/) What You Should Know About Running Docker In Production (written 11 APRIL 2016).
- [Docker Containers on the Desktop](https://blog.jessfraz.com/post/docker-containers-on-the-desktop/)
- [Docker vs. VMs? Combining Both for Cloud Portability Nirvana](https://www.flexera.com/blog/finops/)
- [Don't Repeat Yourself with Anchors, Aliases and Extensions in Docker Compose Files](https://medium.com/@kinghuang/docker-compose-anchors-aliases-extensions-a1e4105d70bd)
- [GUI Apps with Docker](http://fabiorehm.com/blog/2014/09/11/running-gui-apps-with-docker/)

## Raspberry Pi & ARM

- [Docker Pirates ARMed with explosive stuff](https://blog.hypriot.com/) Huge resource on clustering, swarm, docker, pre-installed image for SD card on Raspberry Pi
- [Get Docker up and running on the RaspberryPi in three steps ![GitHub Repo Stars](https://img.shields.io/github/stars/umiddelb/armhf) ![GitHub last commit](https://img.shields.io/github/last-commit/umiddelb/armhf)](https://github.com/umiddelb/armhf/wiki/Get-Docker-up-and-running-on-the-RaspberryPi-%28ARMv6%29-in-three-steps)
- [git push docker containers to linux devices](https://www.balena.io) Modern DevOps for IoT, leveraging git and Docker.
- [Installing, running, using Docker on armhf (ARMv7) devices ![GitHub Repo Stars](https://img.shields.io/github/stars/umiddelb/armhf) ![GitHub last commit](https://img.shields.io/github/last-commit/umiddelb/armhf)](https://github.com/umiddelb/armhf/wiki/Installing,-running,-using-docker-on-armhf-%28ARMv7%29-devices)

## Security Articles

- [Bringing new security features to Docker](https://opensource.com/business/14/9/security-for-docker)
- [CVE Scanning Alpine images with Multi-stage builds in Docker 17.05 ![GitHub Repo Stars](https://img.shields.io/github/stars/tomwillfixit/alpine-cvecheck) ![GitHub last commit](https://img.shields.io/github/last-commit/tomwillfixit/alpine-cvecheck)](https://github.com/tomwillfixit/alpine-cvecheck)
- [Docker Secure Deployment Guidelines ![GitHub Repo Stars](https://img.shields.io/github/stars/AonCyberLabs/Docker-Secure-Deployment-Guidelines) ![GitHub last commit](https://img.shields.io/github/last-commit/AonCyberLabs/Docker-Secure-Deployment-Guidelines)](https://github.com/AonCyberLabs/Docker-Secure-Deployment-Guidelines)
- [Docker Security - Quick Reference](https://binarymist.io/publication/docker-security/)
- [Docker Security: Are Your Containers Tightly Secured to the Ship? SlideShare](https://www.slideshare.net/slideshow/docker-security-are-your-containers-tightly-secured-to-the-ship/43834790)
- [How CVE's are handled on Offical Docker Images ![GitHub Repo Stars](https://img.shields.io/github/stars/docker-library/official-images) ![GitHub last commit](https://img.shields.io/github/last-commit/docker-library/official-images)](https://github.com/docker-library/official-images/issues/1448)
- [Lynis is an open source security auditing tool including Docker auditing](https://cisofy.com/lynis/)
- [Security Best Practices for Building Docker Images](https://linux-audit.com/tags/docker/)
- [Software Engineering Radio interview of Docker Security Team Lead (Diogo Mónica)](https://www.se-radio.net/2017/05/se-radio-episode-290-diogo-monica-on-docker-security/)
- [Ten Docker Image Security Best Practices Cheat Sheet](https://snyk.io/blog/10-docker-image-security-best-practices/)
- [Top ten most popular docker images each contain at least 30 vulnerabilities](https://snyk.io/blog/top-ten-most-popular-docker-images-each-contain-at-least-30-vulnerabilities/)
- [Tuning Docker with the newest security enhancements](https://opensource.com/business/15/3/docker-security-tuning)
- [10 best practices to containerize Node.js web applications with Docker](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)

## Videos

- [Contributing to Docker by Andrew "Tianon" Page (InfoSiftr)](https://www.youtube.com/watch?v=1jwo8-1HYYg) (34:31)
- [Deploying and scaling applications with Docker, Swarm, and a tiny bit of Python magic](https://www.youtube.com/watch?v=GpHMTR7P2Ms) (3:11:06)
- [Docker and SELinux by Daniel Walsh from Red Hat](https://www.youtube.com/watch?v=zWGFqMuEHdw) (40:23)
- [Docker Course](https://www.youtube.com/watch?v=UZpyvK6UGFo) (Spanish)
- [Docker for Developers](https://www.youtube.com/watch?v=FdkNAjjO5yQ) (54:26)
- [Docker from scratch](https://www.youtube.com/playlist?list=PLLhEJK7fQIxD-btrjrqdEfQHbkZnQrmqE) (1:22:01)
- [Docker: How to Use Your Own Private Registry](https://www.youtube.com/watch?v=CAewZCBT4PI) (15:01)
- [Docker in Production](https://www.youtube.com/watch?v=Glk5d5WP6MI) (36:05)
- [Docker Primer to Docker Compose](https://www.youtube.com/watch?v=G-s2GXGAjTk) (1:56:45)
- [Docker Registry from scratch](https://www.youtube.com/playlist?list=PLLhEJK7fQIxAz3d4Fj3edq7UcxEhdTCBm) (44:40)
- [Docker Swarm from scratch](https://www.youtube.com/playlist?list=PLLhEJK7fQIxAY4gZd1Wl-GsLvg-e9Ap1e) (1:41:28)
- [Extending Docker with Plugins](https://vimeo.com/110835013) (15:21)
- [From Local Docker Development to Production Deployments](https://www.youtube.com/watch?v=7CZFpHUPqXw)
- [Immutable Infrastructure with Docker and EC2 by Michael Bryzek (Gilt)](https://www.youtube.com/watch?v=GaHzdqFithc) (42:04)
- [Introduction to Docker and containers](https://www.youtube.com/watch?v=ZVaRK10HBjo) (3:09:00)
- [Logging on Docker: What You Need to Know](https://vimeo.com/123341629) (51:27)
- [Performance Analysis of Docker - Jeremy Eder](https://www.youtube.com/watch?v=6f2E6PKYb0w) (1:36:58)
- [Scalable Microservices with Kubernetes](https://www.udacity.com/course/scalable-microservices-with-kubernetes--ud615) Free Udacity course
- [State of containers: a debate with CoreOS, VMware and Google](https://www.youtube.com/watch?v=IiITP3yIRd8) (27:38)

## Communities and Meetups

### Brazilian

- [Docker BR on Telegram](https://telegram.me/dockerbr)

### English

- [Docker Community](https://www.docker.com/community/)
- [Docker Events](https://www.docker.com/events/)
- [Docker Online Meetup](https://www.meetup.com/en-AU/Docker-Online-Meetup/)
- [Docker Reddit Community](https://www.reddit.com/r/docker/)

### Russian

- [Docker Russian-speaking Community](https://t.me/docker_ru)

### Spanish

- [Docker Tips](https://dockertips.com/)

## Stargazers over time

[![Stargazers over time](https://starchart.cc/veggiemonk/awesome-docker.svg?variant=adaptive)](https://starchart.cc/veggiemonk/awesome-docker)

[calico]: https://github.com/projectcalico/calico
[coreos]: https://github.com/coreos
[distribution]: https://github.com/docker/distribution
[docker-for-windows]: https://docs.docker.com/desktop/setup/install/windows-install/
[editreadme]: https://github.com/veggiemonk/awesome-docker/edit/master/README.md
[kubernetes]: https://kubernetes.io
[nginxproxy]: https://github.com/nginx-proxy/nginx-proxy
[openshift]: https://okd.io/
[sindresorhus]: https://github.com/sindresorhus/awesome

