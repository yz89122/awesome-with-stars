<!-- omit in toc -->
# Awesome Kustomize [![Awesome](https://raw.githubusercontent.com/sindresorhus/awesome/main/media/badge.svg)](https://github.com/sindresorhus/awesome) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/aabouzaid/awesome-kustomize/compare)

<p align="center">
  <a href="https://kustomize.io">
    <img src="https://github.com/DevOpsHiveHQ/awesome-kustomize/raw/main/img/awesome-kustomize.svg" width="90%">
  </a>
</p>

> A curated and collaborative list of awesome Kustomize resources.

[Kustomize](https://kustomize.io) introduces a template-free way to customize Kubernetes manifests. It's extensible and uses a purely declarative approach to configuration customization, which will help you efficiently manage your Infrastructure as a code (IaC).

Contributions are welcome, add links through [pull requests ![GitHub Repo Stars](https://img.shields.io/github/stars/aabouzaid/awesome-kustomize) ![GitHub last commit](https://img.shields.io/github/last-commit/aabouzaid/awesome-kustomize)](https://github.com/aabouzaid/awesome-kustomize/pulls) or create an issue to start a discussion.

Push it forward and add the project badge in your repo to support the community! ⭐

Markdown:

```text
[![Awesome Kustomize](https://devopshive.net/badges/awesome-kustomize.svg)](https://github.com/DevOpsHiveHQ/awesome-kustomize)
```

Preview:

[![Awesome Kustomize](https://raw.githubusercontent.com/DevOpsHiveHQ/awesome-kustomize/main/img/awesome-kustomize-badge.svg)](https://github.com/DevOpsHiveHQ/awesome-kustomize)

<!-- omit in toc -->
## Contents

- [Overview](#overview)
- [Plugins](#plugins)
  - [Generators](#generators)
  - [Transformers](#transformers)
  - [Validators](#validators)
- [Guides](#guides)
  - [Novice](#novice)
  - [Intermediate](#intermediate)
  - [Advanced](#advanced)
  - [Tips \& Tricks](#tips--tricks)
- [Misc](#misc)
- [Related lists](#related-lists)

## Overview

Kustomize works as a standalone binary; also, it's built into `kubectl` (since v1.14). It can be used with off-the-shelf applications like **Helm charts**. Also, it has a deep integration with different **GitOps** tools like ArgoCD, Flux, and many others.

## Plugins

Kustomize has 3 types of plugins `generator`, `transformer`, and `validator`.

> Note
>
> If you are a plugin developer, it's highly recommended to support the new plugins standard
> [KRM function ![GitHub Repo Stars](https://img.shields.io/github/stars/kubernetes-sigs/kustomize) ![GitHub last commit](https://img.shields.io/github/last-commit/kubernetes-sigs/kustomize)](https://github.com/kubernetes-sigs/kustomize/blob/master/cmd/config/docs/api-conventions/functions-spec.md).

### Generators

- [Secretize ![GitHub Repo Stars](https://img.shields.io/github/stars/bbl/secretize) ![GitHub last commit](https://img.shields.io/github/last-commit/bbl/secretize)](https://github.com/bbl/secretize) - Generating Kubernetes Secret from various sources. It's like a swiss army knife, but for Kubernetes secrets (Exec).
- [SopsSecretGenerator ![GitHub Repo Stars](https://img.shields.io/github/stars/goabout/kustomize-sopssecretgenerator) ![GitHub last commit](https://img.shields.io/github/last-commit/goabout/kustomize-sopssecretgenerator)](https://github.com/goabout/kustomize-sopssecretgenerator/) - Generating Secrets from sops-encrypted files (Exec, Exec KRM).
- [KSops ![GitHub Repo Stars](https://img.shields.io/github/stars/viaduct-ai/kustomize-sops) ![GitHub last commit](https://img.shields.io/github/last-commit/viaduct-ai/kustomize-sops)](https://github.com/viaduct-ai/kustomize-sops) - Generating Secrets from sops-encrypted files (Exec).
- [PolicyGenerator ![GitHub Repo Stars](https://img.shields.io/github/stars/open-cluster-management-io/policy-generator-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/open-cluster-management-io/policy-generator-plugin)](https://github.com/open-cluster-management-io/policy-generator-plugin) - Generating Open Cluster Management policies (Exec).
- [KRMFfnBuiltin ![GitHub Repo Stars](https://img.shields.io/github/stars/kaweezle/krmfnbuiltin) ![GitHub last commit](https://img.shields.io/github/last-commit/kaweezle/krmfnbuiltin)](https://github.com/kaweezle/krmfnbuiltin) - Running builtin generators transformers (Exec).
- [Merger ![GitHub Repo Stars](https://img.shields.io/github/stars/aabouzaid/kustomize-plugin-merger) ![GitHub last commit](https://img.shields.io/github/last-commit/aabouzaid/kustomize-plugin-merger)](https://github.com/aabouzaid/kustomize-plugin-merger) - Generating manifests seamlessly by extending Kustomize merge strategies using schemaless StrategicMerge (Containerized KRM, Exec KRM).

### Transformers

- [HelmValuesTransformer ![GitHub Repo Stars](https://img.shields.io/github/stars/openinfradev/kustomize-helm-transformer) ![GitHub last commit](https://img.shields.io/github/last-commit/openinfradev/kustomize-helm-transformer)](https://github.com/openinfradev/kustomize-helm-transformer) - Transforming values in HelmRelease CustomResource. It helps to manage a lot of HelmRelease's value in single transformer file (Exec).
- [TemplateTransformer ![GitHub Repo Stars](https://img.shields.io/github/stars/joshdk/template-transformer) ![GitHub last commit](https://img.shields.io/github/last-commit/joshdk/template-transformer)](https://github.com/joshdk/template-transformer) - Providing a set of KRM Functions to run builtin transformers in place (Containerized KRM, Exec KRM).

### Validators

- [KubeconformValidator ![GitHub Repo Stars](https://img.shields.io/github/stars/aabouzaid/kustomize-kubeconformvalidator) ![GitHub last commit](https://img.shields.io/github/last-commit/aabouzaid/kustomize-kubeconformvalidator)](https://github.com/aabouzaid/kustomize-kubeconformvalidator) - Validating Kubernetes manifests using embedded Kubeconform (Containerized KRM, Exec KRM).

## Guides

Kustomize guides based on their level or type like 📰 Article, 📺 Video, 🧪 Lab.

### Novice

- 📰 [Declarative Management of Kubernetes Objects Using Kustomize](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/) - The official Kubernetes documentation task for Kustomize.
- 📰 [Configure Kubernetes with Kustomize](https://cloud.google.com/anthos-config-management/docs/concepts/kustomize) - A guide helps to get started with Kustomize, understand its intended use cases, and find resources for using it with other Google Cloud tools.
- 📺 [Organizing the YAML mess with Kustomize](https://www.youtube.com/watch?v=1fCAwFGX38U) - A talk shows how Kustomize could help to manage Kubernetes YAML files with a growing number of services and environments.
- 📺 [Kustomize: Deploy Your App with Template Free YAML](https://www.youtube.com/watch?v=ahMIBxufNR0) - A talk introduces Kustomize, a declarative application management system, that allows deployments to be described as template free YAML.

### Intermediate

- 🧪 [ArgoCD GitOps Tutorial - Working with Kustomize](https://redhat-scholars.github.io/argocd-tutorial/argocd-tutorial/03-kustomize.html) - A hands-on lab covers using Kustomize in GitOps and it goes through the Kustomize syntax and deploying a Kustomized application.
- 📰 [3 ways to customize off-the-shelf Helm charts with Kustomize](https://tech.aabouzaid.com/2020/09/3-ways-to-customize-off-the-shelf-helm-charts-with-kustomize-kubernetes.html) - A guide covers 3 different ways to use Kustomize and Helm together.

### Advanced

- 📰 [Advanced Kustomize features](https://www.innoq.com/en/blog/advanced-kustomize-features/) - A guide covers more than 5 advanced Kustomize capabilities.
- 📰 [Set OpenAPI patch strategy for Kubernetes Custom Resources](https://tech.aabouzaid.com/2022/11/set-openapi-patch-strategy-for-kubernetes-custom-resources-kustomize.html) - A guide shows how to provide schema to control the patch strategy of the CRDs.
- 📺 [Customizing Kustomize with Client-Side Custom Resources](https://www.youtube.com/watch?v=YlFUv4F5PYc) - A talk covers extending Kustomize via plugins to address common yet idiosyncratic application needs.
- 📺 [Own your YAML: extending Kustomize via Plugins](https://www.youtube.com/watch?v=Xoh_OpLoVtI) - A talk shows how to create custom resources using Kustomize external plugins.
- 📰 [Kustomize Enhancement with KRM Functions](https://www.innoq.com/en/blog/kustomize-enhancement-with-krm-functions/) - A detailed guide covers KRM concept and how to use it in Kustomize plugins.

### Tips & Tricks

- 📰 [Delete a manifest from a Kustomize base](https://tech.aabouzaid.com/2021/05/delete-a-manifest-from-kustomize-base.html) - A handy way to delete named manifest using Kustomize patch.
- 📰 [Apply Kustomize builtin transformers on a single resource](https://tech.aabouzaid.com/2022/04/apply-kustomize-builtin-transformers-on-a-single-resource.html) - A way to use internal transformers on specific resources.
- 📰 [Pass extra data to the Containerized KRM function](https://tech.aabouzaid.com/2022/12/pass-extra-data-to-the-containerized-krm-function.html) - Different cases of share data with Containerized KRM function.


## Misc

- [Asdf-kustomize ![GitHub Repo Stars](https://img.shields.io/github/stars/Banno/asdf-kustomize) ![GitHub last commit](https://img.shields.io/github/last-commit/Banno/asdf-kustomize)](https://github.com/Banno/asdf-kustomize) - Kustomize plugin for asdf version manager.


## Related lists

- [Awesome Kubernetes ![GitHub Repo Stars](https://img.shields.io/github/stars/ramitsurana/awesome-kubernetes) ![GitHub last commit](https://img.shields.io/github/last-commit/ramitsurana/awesome-kubernetes)](https://github.com/ramitsurana/awesome-kubernetes) - A curated list of awesome Kubernetes resources.
- [Awesome Kubectl plugins ![GitHub Repo Stars](https://img.shields.io/github/stars/ishantanu/awesome-kubectl-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/ishantanu/awesome-kubectl-plugins)](https://github.com/ishantanu/awesome-kubectl-plugins) - A curated list of awesome Kubectl plugins.
- [Awesome Helm ![GitHub Repo Stars](https://img.shields.io/github/stars/cdwv/awesome-helm) ![GitHub last commit](https://img.shields.io/github/last-commit/cdwv/awesome-helm)](https://github.com/cdwv/awesome-helm) - A curated list of awesome Helm charts and resources.
