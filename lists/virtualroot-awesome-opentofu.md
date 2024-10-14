# Awesome OpenTofu [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) <!-- omit in toc -->

> A curated and collaborative list of awesome OpenTofu resources and tools.

[OpenTofu](https://opentofu.org/) allows you to declaratively manage your infrastructure. It's an open-source, community-driven alternative to Terraform.

## Contents <!-- omit in toc -->

- [Official](#official)
- [Community](#community)
- [Features](#features)
- [Tools](#tools)
  - [Environment managers](#environment-managers)
  - [Wrappers](#wrappers)
  - [CI](#ci)
  - [Tests](#tests)
  - [State](#state)
  - [Providers](#providers)
  - [Platforms](#platforms)
  - [Registry](#registry)
  - [Helpers](#helpers)
- [Learning](#learning)
- [Media](#media)
- [Podcasts](#podcasts)

## Official

- [OpenTofu repository ![GitHub Repo Stars](https://img.shields.io/github/stars/opentofu/opentofu) ![GitHub last commit](https://img.shields.io/github/last-commit/opentofu/opentofu)](https://github.com/opentofu/opentofu) 🎉
- [Fork announcement](https://opentofu.org/announcement)
- [Official registry ![GitHub Repo Stars](https://img.shields.io/github/stars/opentofu/registry) ![GitHub last commit](https://img.shields.io/github/last-commit/opentofu/registry)](https://github.com/opentofu/registry)
- [Weekly updates ![GitHub Repo Stars](https://img.shields.io/github/stars/opentofu/opentofu) ![GitHub last commit](https://img.shields.io/github/last-commit/opentofu/opentofu)](https://github.com/opentofu/opentofu/blob/main/WEEKLY_UPDATES.md#weekly-updates)
- [Office hours](https://www.youtube.com/watch?v=aEoMzUza6Ok&list=PLnVotLM2QsyhCc1_8PA7fbVF-ixt4_XAY)
- [Technical Steering Committee updates ![GitHub Repo Stars](https://img.shields.io/github/stars/opentofu/opentofu) ![GitHub last commit](https://img.shields.io/github/last-commit/opentofu/opentofu)](https://github.com/opentofu/opentofu/blob/main/TSC_SUMMARY.md#technical-steering-committee-tsc-summary)

## Community

*Communication channels, meetups, newsletters, and forums.*

- [OpenTofu GitHub Discussion ![GitHub Repo Stars](https://img.shields.io/github/stars/orgs/opentofu) ![GitHub last commit](https://img.shields.io/github/last-commit/orgs/opentofu)](https://github.com/orgs/opentofu/discussions)
- [OpenTofu LinkedIn](https://www.linkedin.com/company/opentofuorg/)
- [OpenTofu Slack](https://opentofu.org/slack)
- [OpenTofu Twitter](https://twitter.com/opentofuorg)

## Features

<!--lint disable double-link-->

- [1.8 - Override files for OpenTofu (.tofu)](https://opentofu.org/docs/intro/whats-new/#override-files-for-opentofu-keeping-compatibility)
- [1.8 - Early variable and locals evaluation](https://opentofu.org/docs/intro/whats-new/#early-variablelocals-evaluation)
- [1.7 - End-to-end encryption for state files](https://opentofu.org/docs/v1.7/intro/whats-new/#state-encryption)
- [1.7 - Provider-defined functions](https://opentofu.org/docs/v1.7/intro/whats-new/#provider-defined-functions)
- [1.7 - Removed block](https://opentofu.org/docs/v1.7/intro/whats-new/#removed-block)
- [1.7 - Loopable import blocks](https://opentofu.org/docs/v1.7/intro/whats-new/#loopable-import-blocks)
- [OCI-compliant registry support](https://twitter.com/OpenTofuOrg/status/1696913055576387599) 🚧

<!--lint enable double-link-->

## Tools

### Environment managers

- [arkade ![GitHub Repo Stars](https://img.shields.io/github/stars/alexellis/arkade) ![GitHub last commit](https://img.shields.io/github/last-commit/alexellis/arkade)](https://github.com/alexellis/arkade) - CLI and Kubernetes app installer.
- [asdf-opentofu ![GitHub Repo Stars](https://img.shields.io/github/stars/virtualroot/asdf-opentofu) ![GitHub last commit](https://img.shields.io/github/last-commit/virtualroot/asdf-opentofu)](https://github.com/virtualroot/asdf-opentofu) - OpenTofu plugin for asdf version manager.
- [tenv ![GitHub Repo Stars](https://img.shields.io/github/stars/tofuutils/tenv) ![GitHub last commit](https://img.shields.io/github/last-commit/tofuutils/tenv)](https://github.com/tofuutils/tenv) - Terraform and OpenTofu version manager written in Go.
- [tfswitcher ![GitHub Repo Stars](https://img.shields.io/github/stars/ASleepyCat/tfswitcher) ![GitHub last commit](https://img.shields.io/github/last-commit/ASleepyCat/tfswitcher)](https://github.com/ASleepyCat/tfswitcher) - Terraform and OpenTofu version switcher written in Rust.
- [tofuenv ![GitHub Repo Stars](https://img.shields.io/github/stars/tofuutils/tofuenv) ![GitHub last commit](https://img.shields.io/github/last-commit/tofuutils/tofuenv)](https://github.com/tofuutils/tofuenv) - OpenTofu version manager inspired by tfenv.

### Wrappers

*Simplify your OpenTofu workflows with a thin wrapper.*

- [Atmos ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudposse/atmos) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudposse/atmos)](https://github.com/cloudposse/atmos) - Orchestration tool that keeps environment configuration DRY.
- [Terragrunt ![GitHub Repo Stars](https://img.shields.io/github/stars/gruntwork-io/terragrunt) ![GitHub last commit](https://img.shields.io/github/last-commit/gruntwork-io/terragrunt)](https://github.com/gruntwork-io/terragrunt) - Keep your configurations DRY, work with multiple modules, and manage remote state.
- [Terramate ![GitHub Repo Stars](https://img.shields.io/github/stars/terramate-io/terramate) ![GitHub last commit](https://img.shields.io/github/last-commit/terramate-io/terramate)](https://github.com/terramate-io/terramate) - Automation, orchestration, and code generation for OpenTofu, Terraform, Kubernetes, and others.
- [easy_infra ![GitHub Repo Stars](https://img.shields.io/github/stars/SeisoLLC/easy_infra) ![GitHub last commit](https://img.shields.io/github/last-commit/SeisoLLC/easy_infra)](https://github.com/SeisoLLC/easy_infra) - Docker container to simplify and secure the use of infrastructure as code.
- [pug ![GitHub Repo Stars](https://img.shields.io/github/stars/leg100/pug) ![GitHub last commit](https://img.shields.io/github/last-commit/leg100/pug)](https://github.com/leg100/pug) - A terminal user interface for power users.
- [tf ![GitHub Repo Stars](https://img.shields.io/github/stars/dex4er/tf) ![GitHub last commit](https://img.shields.io/github/last-commit/dex4er/tf)](https://github.com/dex4er/tf) - Less verbose and more friendly command outputs.
- [tfam ![GitHub Repo Stars](https://img.shields.io/github/stars/Ant0wan/tfam) ![GitHub last commit](https://img.shields.io/github/last-commit/Ant0wan/tfam)](https://github.com/Ant0wan/tfam) - Rust-powered wrapper for concurrent Terraform/OpenTofu apply, enabling multi-deployment support.
- [tfexe ![GitHub Repo Stars](https://img.shields.io/github/stars/Ant0wan/tfexe) ![GitHub last commit](https://img.shields.io/github/last-commit/Ant0wan/tfexe)](https://github.com/Ant0wan/tfexe) - Rust-powered wrapper for seamless execution of tfswitch and Terraform/OpenTofu with version control.
- [tfwrapper ![GitHub Repo Stars](https://img.shields.io/github/stars/claranet/tfwrapper) ![GitHub last commit](https://img.shields.io/github/last-commit/claranet/tfwrapper)](https://github.com/claranet/tfwrapper) - Python wrapper that simplifies OpenTofu usage and enforces best practices.

### CI

- [Atlantis](https://www.runatlantis.io/) - Automating workflows via pull requests.
- [TF-via-PR ![GitHub Repo Stars](https://img.shields.io/github/stars/DevSecTop/TF-via-PR) ![GitHub last commit](https://img.shields.io/github/last-commit/DevSecTop/TF-via-PR)](https://github.com/DevSecTop/TF-via-PR) - GitHub Action to automate OpenTofu or Terraform CLI commands via pull request interaction.
- [pre-commit-opentofu ![GitHub Repo Stars](https://img.shields.io/github/stars/tofuutils/pre-commit-opentofu) ![GitHub last commit](https://img.shields.io/github/last-commit/tofuutils/pre-commit-opentofu)](https://github.com/tofuutils/pre-commit-opentofu) - Git pre-commit hooks plugin.
- [setup-opentofu ![GitHub Repo Stars](https://img.shields.io/github/stars/opentofu/setup-opentofu) ![GitHub last commit](https://img.shields.io/github/last-commit/opentofu/setup-opentofu)](https://github.com/opentofu/setup-opentofu) - Set up OpenTofu CLI in your GitHub Actions workflow.
- [terraform-github-actions ![GitHub Repo Stars](https://img.shields.io/github/stars/dflook/terraform-github-actions) ![GitHub last commit](https://img.shields.io/github/last-commit/dflook/terraform-github-actions)](https://github.com/dflook/terraform-github-actions) - GitHub Actions for OpenTofu.
- [tofu-controller ![GitHub Repo Stars](https://img.shields.io/github/stars/flux-iac/tofu-controller) ![GitHub last commit](https://img.shields.io/github/last-commit/flux-iac/tofu-controller)](https://github.com/flux-iac/tofu-controller) - GitOps OpenTofu and Terraform controller for Flux.

### Tests

- [Terratest ![GitHub Repo Stars](https://img.shields.io/github/stars/gruntwork-io/terratest) ![GitHub last commit](https://img.shields.io/github/last-commit/gruntwork-io/terratest)](https://github.com/gruntwork-io/terratest) - Go library that makes writing automated tests for your infrastructure code easier.

### State

*Analyze and manipulate OpenTofu's state.*

- [tfmigrate ![GitHub Repo Stars](https://img.shields.io/github/stars/minamijoyo/tfmigrate) ![GitHub last commit](https://img.shields.io/github/last-commit/minamijoyo/tfmigrate)](https://github.com/minamijoyo/tfmigrate) - State migration tool.

### Providers

*Inspect and interact with OpenTofu providers.*

- [tfschema ![GitHub Repo Stars](https://img.shields.io/github/stars/minamijoyo/tfschema) ![GitHub last commit](https://img.shields.io/github/last-commit/minamijoyo/tfschema)](https://github.com/minamijoyo/tfschema) - Schema inspector for providers.

### Platforms

*Alternatives to Terraform Cloud.*

- [digger ![GitHub Repo Stars](https://img.shields.io/github/stars/diggerhq/digger) ![GitHub last commit](https://img.shields.io/github/last-commit/diggerhq/digger)](https://github.com/diggerhq/digger) - Open-source IaC orchestration tool. Digger allows you to run IaC in your existing CI pipeline.
- [terrakube ![GitHub Repo Stars](https://img.shields.io/github/stars/AzBuilder/terrakube) ![GitHub last commit](https://img.shields.io/github/last-commit/AzBuilder/terrakube)](https://github.com/AzBuilder/terrakube) - Open-source platform with a private registry, remote state, custom flows, scheduled workspaces, and visual states.
- [tofutf ![GitHub Repo Stars](https://img.shields.io/github/stars/tofutf/tofutf) ![GitHub last commit](https://img.shields.io/github/last-commit/tofutf/tofutf)](https://github.com/tofutf/tofutf) - Open-source alternative to Terraform Enterprise with SSO, team management, agents, etc.
- [walrus ![GitHub Repo Stars](https://img.shields.io/github/stars/seal-io/walrus) ![GitHub last commit](https://img.shields.io/github/last-commit/seal-io/walrus)](https://github.com/seal-io/walrus) - Walrus is an open-source application management platform based on IaC tools, including OpenTofu, Terraform, and others.

### Registry

- [library.tf](https://library.tf/) - An indexer of registries for providers and modules with insights and documentation.
- [boring-registry ![GitHub Repo Stars](https://img.shields.io/github/stars/boring-registry/boring-registry) ![GitHub last commit](https://img.shields.io/github/last-commit/boring-registry/boring-registry)](https://github.com/boring-registry/boring-registry) - Boring-registry is an open-source module and provider registry compatible with OpenTofu.
- [hermitcrab ![GitHub Repo Stars](https://img.shields.io/github/stars/seal-io/hermitcrab) ![GitHub last commit](https://img.shields.io/github/last-commit/seal-io/hermitcrab)](https://github.com/seal-io/hermitcrab) - Registry network mirroring service compatible with OpenTofu.
- [terrac ![GitHub Repo Stars](https://img.shields.io/github/stars/haoliangyu/terrac) ![GitHub last commit](https://img.shields.io/github/last-commit/haoliangyu/terrac)](https://github.com/haoliangyu/terrac) - Minimal private module registry compatible with OpenTofu.
- [GitLab Module Registry](https://docs.gitlab.com/ee/user/packages/terraform_module_registry/) - Use GitLab projects as a private registry for terraform modules.
- [terralist ![GitHub Repo Stars](https://img.shields.io/github/stars/terralist/terralist) ![GitHub last commit](https://img.shields.io/github/last-commit/terralist/terralist)](https://github.com/terralist/terralist) - Private registry for providers and modules.
- [citizen ![GitHub Repo Stars](https://img.shields.io/github/stars/outsideris/citizen) ![GitHub last commit](https://img.shields.io/github/last-commit/outsideris/citizen)](https://github.com/outsideris/citizen) - Private registry for modules and providers with support for multiple databases and storages.
- [petra ![GitHub Repo Stars](https://img.shields.io/github/stars/devoteamgcloud/petra) ![GitHub last commit](https://img.shields.io/github/last-commit/devoteamgcloud/petra)](https://github.com/devoteamgcloud/petra) - Private registry manager using Google Cloud Storage.
- [tapir ![GitHub Repo Stars](https://img.shields.io/github/stars/PacoVK/tapir) ![GitHub last commit](https://img.shields.io/github/last-commit/PacoVK/tapir)](https://github.com/PacoVK/tapir) - Private registry for modules and providers with a UI.
- [terraform-registry ![GitHub Repo Stars](https://img.shields.io/github/stars/nrkno/terraform-registry) ![GitHub last commit](https://img.shields.io/github/last-commit/nrkno/terraform-registry)](https://github.com/nrkno/terraform-registry) - Modules registry with authentication and support for multiple backends.
- [terrareg ![GitHub Repo Stars](https://img.shields.io/github/stars/MatthewJohn/terrareg) ![GitHub last commit](https://img.shields.io/github/last-commit/MatthewJohn/terrareg)](https://github.com/MatthewJohn/terrareg) - Open-source modules registry with UI, optional Git integration and deep analysis.
- [terustry ![GitHub Repo Stars](https://img.shields.io/github/stars/veepee-oss/terustry) ![GitHub last commit](https://img.shields.io/github/last-commit/veepee-oss/terustry)](https://github.com/veepee-oss/terustry) - Proxy registry for providers.

### Helpers

- [terratag ![GitHub Repo Stars](https://img.shields.io/github/stars/env0/terratag) ![GitHub last commit](https://img.shields.io/github/last-commit/env0/terratag)](https://github.com/env0/terratag) - CLI tool allowing for tags or labels to be applied across an entire set of OpenTofu/Terraform files.

## Learning

- [OpenTofu Course](https://killercoda.com/quincycheng/course/course_opentofu) - Interactive tutorials.
- [Terraform in Depth](https://www.manning.com/books/terraform-in-depth) - Book with OpenTofu sections.
- [Infrastructure automation with OpenTofu](https://www.udemy.com/course/infrastructure-automation-with-opentofu-hands-on-devops/?couponCode=1D97F4D8FFE62E296BE1) - Learn infrastructure provisioning with lectures, quizzes, hands-on demos and coding exercises.
- [Migrating From Terraform To OpenTofu](https://www.youtube.com/watch?v=v9rJgtHzxUk) - Introduction to OpenTofu history and how to migrate.

## Media

- [OSS EU 2023 - Announcement](https://www.youtube.com/watch?v=Ha77rpusEDM&t=1190s)
- [OSS EU 2023 - Project Overview](https://www.youtube.com/watch?v=-8sOE9-icmY&t=15116s)
- [Code To Cloud - Getting Started With OpenTofu](https://www.youtube.com/watch?v=HeUz6TMg82U)
- [CNCF - OpenTofu Day 2024](https://www.youtube.com/playlist?list=PLnVotLM2Qsyiw_6Pd_9WxRRLdrUAs3c1c)

## Podcasts

<!-- DESC, from most recent to oldest. -->
- [Kubernetes Podcast - OpenTofu, with Ohad Maislish](https://kubernetespodcast.com/episode/232-opentofu/)
- [TheIaCPodcast - Expert Panel on OpenTofu GA Release, Licensing, and OSS Future](https://www.theiacpodcast.com/episode/expert-panel-on-opentofu-ga-release-licensing-and-oss-future)
- [Contributor - Community-Driven IaC](https://www.contributor.fyi/opentofu)
- [Ned in the Cloud - IaC Live Stream](https://www.youtube.com/watch?v=p0vDydkUWB4)
- [Arrested DevOps - What's Up With Open Terraform?](https://www.arresteddevops.com/open-tofu/)
- [OpenObservability - Terraform is no longer open source. Is OpenTF the successor?](https://www.youtube.com/watch?v=5QdUs9VKq5g)
- [TheCloudGambit - The Future of OpenTF](https://www.thecloudgambit.com/2236725/13576531-the-future-of-opentf-with-ohad-maislish)
- [Oxide and Friends - Fork in the road for Terraform?](https://www.youtube.com/watch?v=QaU94LY891M)
- [Changelog -  OpenTF for an open Terraform](https://changelog.com/podcast/556)
