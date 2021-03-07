<p align="center">
  <br>
    <img src="https://github.com/sdras/awesome-actions/raw/main/awesome-actions.png" width="150"/>
  <br>
</p>

# Awesome Actions [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [<!--lint ignore no-dead-urls-->![GitHub Actions status | sdras/awesome-actions ![GitHub Repo Stars](https://img.shields.io/github/stars/sdras/awesome-actions) ![GitHub last commit](https://img.shields.io/github/last-commit/sdras/awesome-actions)](https://github.com/sdras/awesome-actions/workflows/Lint%20Awesome%20List/badge.svg)](https://github.com/sdras/awesome-actions/actions?workflow=Lint+Awesome+List)

> A curated list of awesome things related to GitHub Actions.

Actions are triggered by GitHub platform events directly in a repo and run on-demand workflows either on Linux, Windows or macOS virtual machines or inside a container in response. With GitHub Actions you can automate your workflow from idea to production.

## Contents

- [Official Resources](#official-resources)
  - [Workflow Examples](#workflow-examples)
  - [Official Actions](#official-actions)
  - [Create your Actions](#create-your-actions)
- [Community Resources](#community-resources)
  - [GitHub Tools and Management](#github-tools-and-management)
  - [Collection of Actions](#collection-of-actions)
  - [Utility](#utility)
  - [Static Analysis](#static-analysis)
  - [Dynamic Analysis](#dynamic-analysis)
  - [Monitoring](#monitoring)
  - [Pull Requests](#pull-requests)
  - [GitHub Pages](#github-pages)
  - [Notifications and Messages](#notifications-and-messages)
  - [Deployment](#deployment)
  - [External Services](#external-services)
  - [Frontend Tools](#frontend-tools)
  - [Machine Learning Ops](#machine-learning-ops)
  - [Build](#build)
  - [Database](#database)
  - [Localization](#localization)
  - [Fun](#fun)
  - [Cheat Sheet](#cheat-sheet)
- [Tutorials](#tutorials)

## Official Resources

- [Official Site ![GitHub Repo Stars](https://img.shields.io/github/stars/features/actions) ![GitHub last commit](https://img.shields.io/github/last-commit/features/actions)](https://github.com/features/actions)
- [Official Documentation](https://help.github.com/en/actions)
- [Official Actions organization](https://github.com/actions)
  - [actions/virtual-environments ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/virtual-environments) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/virtual-environments)](https://github.com/actions/virtual-environments) - GitHub Actions virtual environments.
  - [actions/runner ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/runner) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/runner)](https://github.com/actions/runner) - The Runner for GitHub Actions.
- [GitHub Blog Announcement](https://github.blog/2018-10-17-action-demos/)

### Workflow Examples

- [actions/starter-workflows ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/starter-workflows) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/starter-workflows)](https://github.com/actions/starter-workflows) - Starter workflow management.
- [actions/example-services ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/example-services) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/example-services)](https://github.com/actions/example-services) - Example workflows using service containers.

### Official Actions

<!--lint disable no-dead-urls-->

#### Workflow Tool Actions

Tool actions for your workflow.

<!--lint ignore awesome-spell-check-->

- [actions/checkout ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/checkout) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/checkout)](https://github.com/actions/checkout) - Setup your repository on your workflow.
- [actions/upload-artifact ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/upload-artifact) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/upload-artifact)](https://github.com/actions/upload-artifact) - Upload artifacts from your workflow.
- [actions/download-artifact ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/download-artifact) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/download-artifact)](https://github.com/actions/download-artifact) - Download artifacts from your build.
- [actions/cache ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/cache) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/cache)](https://github.com/actions/cache) - Cache dependencies and build outputs in GitHub Actions.
- [actions/github-script ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/github-script) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/github-script)](https://github.com/actions/github-script) - Write a script for GitHub API and the workflow contexts.

#### Actions for GitHub Automation

Automate management for issues, pull requests, and releases.

- [actions/create-release ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/create-release) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/create-release)](https://github.com/actions/create-release) - An Action to create releases via the GitHub Release API.
- [actions/upload-release-asset ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/upload-release-asset) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/upload-release-asset)](https://github.com/actions/upload-release-asset) - An Action to upload a release asset via the GitHub Release API.
- [actions/first-interaction ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/first-interaction) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/first-interaction)](https://github.com/actions/first-interaction) - An action for filtering pull requests and issues from first-time contributors.
- [actions/stale ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/stale) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/stale)](https://github.com/actions/stale) - Marks issues and pull requests that have not had recent interaction.
- [actions/labeler ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/labeler) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/labeler)](https://github.com/actions/labeler) - An action for automatically labelling pull requests.
- [actions/delete-package-versions ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/delete-package-versions) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/delete-package-versions)](https://github.com/actions/delete-package-versions) - Delete versions of a package from GitHub Packages.

#### Setup Actions

Set up your GitHub Actions workflow with a specific version of your programming languages.

- [actions/setup-node: Node.js ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/setup-node) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/setup-node)](https://github.com/actions/setup-node)
- [actions/setup-python: Python ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/setup-python) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/setup-python)](https://github.com/actions/setup-python)
- [actions/setup-go: Go ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/setup-go) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/setup-go)](https://github.com/actions/setup-go)
- [actions/setup-dotnet: .NET core sdk ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/setup-dotnet) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/setup-dotnet)](https://github.com/actions/setup-dotnet)
- [actions/setup-haskell: Haskell (GHC and Cabal) ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/setup-haskell) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/setup-haskell)](https://github.com/actions/setup-haskell)
- [actions/setup-java: Java ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/setup-java) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/setup-java)](https://github.com/actions/setup-java)
- [actions/setup-ruby: Ruby ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/setup-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/setup-ruby)](https://github.com/actions/setup-ruby)
- [actions/setup-elixir: Elixir ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/setup-elixir) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/setup-elixir)](https://github.com/actions/setup-elixir)

### Create your Actions

#### JavaScript and TypeScript Actions

- [actions/toolkit ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/toolkit) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/toolkit)](https://github.com/actions/toolkit) - The GitHub ToolKit for developing GitHub Actions.
- [actions/hello-world-javascript-action ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/hello-world-javascript-action) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/hello-world-javascript-action)](https://github.com/actions/hello-world-javascript-action) - A template to demonstrate how to build a JavaScript action.
- [actions/javascript-action ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/javascript-action) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/javascript-action)](https://github.com/actions/javascript-action) - Create a JavaScript Action.
- [actions/typescript-action ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/typescript-action) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/typescript-action)](https://github.com/actions/typescript-action) - Create a TypeScript Action.
- [actions/http-client ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/http-client) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/http-client)](https://github.com/actions/http-client) - A lightweight HTTP client optimized for use with actions, TypeScript with generics and async await.

#### Docker Container Actions

- [actions/hello-world-docker-action ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/hello-world-docker-action) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/hello-world-docker-action)](https://github.com/actions/hello-world-docker-action) - A template to demonstrate how to build a Docker action.
- [actions/container-toolkit-action ![GitHub Repo Stars](https://img.shields.io/github/stars/actions/container-toolkit-action) ![GitHub last commit](https://img.shields.io/github/last-commit/actions/container-toolkit-action)](https://github.com/actions/container-toolkit-action) - Template repo for creating container actions using actions/toolkit.

## Community Resources

### GitHub Tools and Management

- [Declaratively setup GitHub Labels ![GitHub Repo Stars](https://img.shields.io/github/stars/lannonbr/issue-label-manager-action) ![GitHub last commit](https://img.shields.io/github/last-commit/lannonbr/issue-label-manager-action)](https://github.com/lannonbr/issue-label-manager-action)
- [Action to sync GitHub labels in the declarative way ![GitHub Repo Stars](https://img.shields.io/github/stars/micnncim/action-label-syncer) ![GitHub last commit](https://img.shields.io/github/last-commit/micnncim/action-label-syncer)](https://github.com/micnncim/action-label-syncer)
- [Add releases to GitHub ![GitHub Repo Stars](https://img.shields.io/github/stars/elgohr/Github-Release-Action) ![GitHub last commit](https://img.shields.io/github/last-commit/elgohr/Github-Release-Action)](https://github.com/elgohr/Github-Release-Action)
- [Publish a docker image to Dockerhub ![GitHub Repo Stars](https://img.shields.io/github/stars/elgohr/Publish-Docker-Github-Action) ![GitHub last commit](https://img.shields.io/github/last-commit/elgohr/Publish-Docker-Github-Action)](https://github.com/elgohr/Publish-Docker-Github-Action)
- [Create an issue using content from a file ![GitHub Repo Stars](https://img.shields.io/github/stars/peter-evans/create-issue-from-file) ![GitHub last commit](https://img.shields.io/github/last-commit/peter-evans/create-issue-from-file)](https://github.com/peter-evans/create-issue-from-file)
- [Publish GitHub Releases with Assets ![GitHub Repo Stars](https://img.shields.io/github/stars/softprops/action-gh-release) ![GitHub last commit](https://img.shields.io/github/last-commit/softprops/action-gh-release)](https://github.com/softprops/action-gh-release)
- [GitHub Project Automation+ ![GitHub Repo Stars](https://img.shields.io/github/stars/alex-page/github-project-automation-plus) ![GitHub last commit](https://img.shields.io/github/last-commit/alex-page/github-project-automation-plus)](https://github.com/alex-page/github-project-automation-plus) - Automate GitHub Project cards with any webhook event.
- [Run GitHub Actions Locally with a web interface ![GitHub Repo Stars](https://img.shields.io/github/stars/phishy/wflow) ![GitHub last commit](https://img.shields.io/github/last-commit/phishy/wflow)](https://github.com/phishy/wflow)
- [Run GitHub Actions Locally in Terminal ![GitHub Repo Stars](https://img.shields.io/github/stars/nektos/act) ![GitHub last commit](https://img.shields.io/github/last-commit/nektos/act)](https://github.com/nektos/act)
- [Build and Publish Android debug APK ![GitHub Repo Stars](https://img.shields.io/github/stars/ShaunLWM/action-release-debugapk) ![GitHub last commit](https://img.shields.io/github/last-commit/ShaunLWM/action-release-debugapk)](https://github.com/ShaunLWM/action-release-debugapk)
- [Generate sequential build numbers for GitHub Actions ![GitHub Repo Stars](https://img.shields.io/github/stars/einaregilsson/build-number) ![GitHub last commit](https://img.shields.io/github/last-commit/einaregilsson/build-number)](https://github.com/einaregilsson/build-number)
- [Push Git changes to GitHub repository without authentication difficulties ![GitHub Repo Stars](https://img.shields.io/github/stars/ad-m/github-push-action) ![GitHub last commit](https://img.shields.io/github/last-commit/ad-m/github-push-action)](https://github.com/ad-m/github-push-action)
- [Generate release notes based on your events ![GitHub Repo Stars](https://img.shields.io/github/stars/Decathlon/release-notes-generator-action) ![GitHub last commit](https://img.shields.io/github/last-commit/Decathlon/release-notes-generator-action)](https://github.com/Decathlon/release-notes-generator-action)
- [Create a GitHub wiki page based on the provided markdown file ![GitHub Repo Stars](https://img.shields.io/github/stars/Decathlon/wiki-page-creator-action) ![GitHub last commit](https://img.shields.io/github/last-commit/Decathlon/wiki-page-creator-action)](https://github.com/Decathlon/wiki-page-creator-action)
- [Label your Pull Requests auto-magically (using committed files) ![GitHub Repo Stars](https://img.shields.io/github/stars/Decathlon/pull-request-labeler-action) ![GitHub last commit](https://img.shields.io/github/last-commit/Decathlon/pull-request-labeler-action)](https://github.com/Decathlon/pull-request-labeler-action)
- [Add Label to your Pull Requests based on the author team name ![GitHub Repo Stars](https://img.shields.io/github/stars/JulienKode/team-labeler-action) ![GitHub last commit](https://img.shields.io/github/last-commit/JulienKode/team-labeler-action)](https://github.com/JulienKode/team-labeler-action)
- [Get a list of file changes with PR/Push ![GitHub Repo Stars](https://img.shields.io/github/stars/trilom/file-changes-action) ![GitHub last commit](https://img.shields.io/github/last-commit/trilom/file-changes-action)](https://github.com/trilom/file-changes-action)
- [Use private actions in any workflow ![GitHub Repo Stars](https://img.shields.io/github/stars/InVisionApp/private-action-loader) ![GitHub last commit](https://img.shields.io/github/last-commit/InVisionApp/private-action-loader)](https://github.com/InVisionApp/private-action-loader)
- [Label Your Issues Using the Issue's Contents ![GitHub Repo Stars](https://img.shields.io/github/stars/damccorm/tag-ur-it) ![GitHub last commit](https://img.shields.io/github/last-commit/damccorm/tag-ur-it)](https://github.com/damccorm/tag-ur-it)
- [Rollback a GitHub Release ![GitHub Repo Stars](https://img.shields.io/github/stars/author/action-rollback) ![GitHub last commit](https://img.shields.io/github/last-commit/author/action-rollback)](https://github.com/author/action-rollback)
- [Lock Closed Issues and Pull Requests after a Period of Inactivity ![GitHub Repo Stars](https://img.shields.io/github/stars/dessant/lock-threads) ![GitHub last commit](https://img.shields.io/github/last-commit/dessant/lock-threads)](https://github.com/dessant/lock-threads)
- [Get Commit Difference Count Between Two Branches ![GitHub Repo Stars](https://img.shields.io/github/stars/jessicalostinspace/commit-difference-action) ![GitHub last commit](https://img.shields.io/github/last-commit/jessicalostinspace/commit-difference-action)](https://github.com/jessicalostinspace/commit-difference-action)
- [Generate Release Notes Based on Git References ![GitHub Repo Stars](https://img.shields.io/github/stars/metcalfc/changelog-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/metcalfc/changelog-generator)](https://github.com/metcalfc/changelog-generator)
- [Enforce Policies on GitHub Repositories and Commits ![GitHub Repo Stars](https://img.shields.io/github/stars/talos-systems/conform) ![GitHub last commit](https://img.shields.io/github/last-commit/talos-systems/conform)](https://github.com/talos-systems/conform)
- [Auto Label Issue Based on Issue Description ![GitHub Repo Stars](https://img.shields.io/github/stars/Renato66/auto-label) ![GitHub last commit](https://img.shields.io/github/last-commit/Renato66/auto-label)](https://github.com/Renato66/auto-label)
- [Update Configured GitHub Actions to the Latest Versions ![GitHub Repo Stars](https://img.shields.io/github/stars/fabasoad/ghacu) ![GitHub last commit](https://img.shields.io/github/last-commit/fabasoad/ghacu)](https://github.com/fabasoad/ghacu)
- [Create Issue Branch ![GitHub Repo Stars](https://img.shields.io/github/stars/robvanderleek/create-issue-branch) ![GitHub last commit](https://img.shields.io/github/last-commit/robvanderleek/create-issue-branch)](https://github.com/robvanderleek/create-issue-branch)
- [Remove Old Artifacts ![GitHub Repo Stars](https://img.shields.io/github/stars/c-hive/gha-remove-artifacts) ![GitHub last commit](https://img.shields.io/github/last-commit/c-hive/gha-remove-artifacts)](https://github.com/c-hive/gha-remove-artifacts)
- [Expose Git Commit Data As Environment Variables ![GitHub Repo Stars](https://img.shields.io/github/stars/rlespinasse/git-commit-data-action) ![GitHub last commit](https://img.shields.io/github/last-commit/rlespinasse/git-commit-data-action)](https://github.com/rlespinasse/git-commit-data-action)
- [Sync Defined Files/Binaries to Wiki or External Repositories ![GitHub Repo Stars](https://img.shields.io/github/stars/kai-tub/external-repo-sync-action) ![GitHub last commit](https://img.shields.io/github/last-commit/kai-tub/external-repo-sync-action)](https://github.com/kai-tub/external-repo-sync-action)
- [Create/Update/Delete a GitHub Wiki Page Based on Any File ![GitHub Repo Stars](https://img.shields.io/github/stars/Andrew-Chen-Wang/github-wiki-action) ![GitHub last commit](https://img.shields.io/github/last-commit/Andrew-Chen-Wang/github-wiki-action)](https://github.com/Andrew-Chen-Wang/github-wiki-action)
- [Prow GitHub Actions ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmcb/prow-github-actions) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmcb/prow-github-actions)](https://github.com/jpmcb/prow-github-actions) - Automation of policy enforcement, chat-ops, and automatic PR merging.
- [Check GitHub Status in your Workflow ![GitHub Repo Stars](https://img.shields.io/github/stars/crazy-max/ghaction-github-status) ![GitHub last commit](https://img.shields.io/github/last-commit/crazy-max/ghaction-github-status)](https://github.com/crazy-max/ghaction-github-status)
- [Manage Labels on GitHub (create/rename/update/delete) as Code ![GitHub Repo Stars](https://img.shields.io/github/stars/crazy-max/ghaction-github-labeler) ![GitHub last commit](https://img.shields.io/github/last-commit/crazy-max/ghaction-github-labeler)](https://github.com/crazy-max/ghaction-github-labeler)
- [Continuous Distribution of Funding to your Project Contributors and Dependencies ![GitHub Repo Stars](https://img.shields.io/github/stars/protontypes/libreselery) ![GitHub last commit](https://img.shields.io/github/last-commit/protontypes/libreselery)](https://github.com/protontypes/libreselery)
- [Herald Rules for GitHub: Add Subscribers, Assignees, Labels, and More to Your PR ![GitHub Repo Stars](https://img.shields.io/github/stars/gagoar/use-herald-action) ![GitHub last commit](https://img.shields.io/github/last-commit/gagoar/use-herald-action)](https://github.com/gagoar/use-herald-action)
- [GitHub Codeowners Validator ![GitHub Repo Stars](https://img.shields.io/github/stars/mszostok/codeowners-validator) ![GitHub last commit](https://img.shields.io/github/last-commit/mszostok/codeowners-validator)](https://github.com/mszostok/codeowners-validator) - Ensures the correctness of your GitHub CODEOWNERS file. It supports public and private GitHub repositories and also GitHub Enterprise installations.
- [Copybara Action ![GitHub Repo Stars](https://img.shields.io/github/stars/olivr/copybara-action) ![GitHub last commit](https://img.shields.io/github/last-commit/olivr/copybara-action)](https://github.com/olivr/copybara-action) - Move and transform code between repositories (ideal to maintain several repos from one monorepo).

### Collection of Actions

- [Use HashiCorp's Terraform ![GitHub Repo Stars](https://img.shields.io/github/stars/hashicorp/setup-terraform) ![GitHub last commit](https://img.shields.io/github/last-commit/hashicorp/setup-terraform)](https://github.com/hashicorp/setup-terraform)
- [GitHub Actions for Yarn 1 ![GitHub Repo Stars](https://img.shields.io/github/stars/Borales/actions-yarn) ![GitHub last commit](https://img.shields.io/github/last-commit/Borales/actions-yarn)](https://github.com/Borales/actions-yarn)
- [GitHub Actions for Yarn 2 ![GitHub Repo Stars](https://img.shields.io/github/stars/sergioramos/yarn-actions) ![GitHub last commit](https://img.shields.io/github/last-commit/sergioramos/yarn-actions)](https://github.com/sergioramos/yarn-actions)
- [GitHub Actions for Golang ![GitHub Repo Stars](https://img.shields.io/github/stars/cedrickring/golang-action) ![GitHub last commit](https://img.shields.io/github/last-commit/cedrickring/golang-action)](https://github.com/cedrickring/golang-action)
- [GitHub Actions for R and accompanying #rstats package](http://maxheld.de/ghactions/)
- [GitHub Actions for WordPress ![GitHub Repo Stars](https://img.shields.io/github/stars/10up/actions-wordpress) ![GitHub last commit](https://img.shields.io/github/last-commit/10up/actions-wordpress)](https://github.com/10up/actions-wordpress/)
- [GitHub Actions for Composer ![GitHub Repo Stars](https://img.shields.io/github/stars/MilesChou/composer-action) ![GitHub last commit](https://img.shields.io/github/last-commit/MilesChou/composer-action)](https://github.com/MilesChou/composer-action)
- [GitHub Actions for Flutter ![GitHub Repo Stars](https://img.shields.io/github/stars/subosito/flutter-action) ![GitHub last commit](https://img.shields.io/github/last-commit/subosito/flutter-action)](https://github.com/subosito/flutter-action)
- [GitHub Actions for PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/shivammathur/setup-php) ![GitHub last commit](https://img.shields.io/github/last-commit/shivammathur/setup-php)](https://github.com/shivammathur/setup-php)
- [GitHub Actions for Rust](https://github.com/actions-rs)
- [GitHub Actions for Android ![GitHub Repo Stars](https://img.shields.io/github/stars/Malinskiy/action-android) ![GitHub last commit](https://img.shields.io/github/last-commit/Malinskiy/action-android)](https://github.com/Malinskiy/action-android)
- [GitHub Actions for Logtalk and Prolog](https://github.com/logtalk-actions)
- [GitHub Actions for Deno ![GitHub Repo Stars](https://img.shields.io/github/stars/denolib/setup-deno) ![GitHub last commit](https://img.shields.io/github/last-commit/denolib/setup-deno)](https://github.com/denolib/setup-deno)
- [GitHub Actions for Unity ![GitHub Repo Stars](https://img.shields.io/github/stars/webbertakken/unity-actions) ![GitHub last commit](https://img.shields.io/github/last-commit/webbertakken/unity-actions)](https://github.com/webbertakken/unity-actions)
- [Octions - GitHub Actions for GitHub REST API ![GitHub Repo Stars](https://img.shields.io/github/stars/maxkomarychev/octions) ![GitHub last commit](https://img.shields.io/github/last-commit/maxkomarychev/octions)](https://github.com/maxkomarychev/octions)
- [GitHub Actions for Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/docker/github-actions) ![GitHub last commit](https://img.shields.io/github/last-commit/docker/github-actions)](https://github.com/docker/github-actions)
- [GitHub Actions for AWS ![GitHub Repo Stars](https://img.shields.io/github/stars/clowdhaus/aws-github-actions) ![GitHub last commit](https://img.shields.io/github/last-commit/clowdhaus/aws-github-actions)](https://github.com/clowdhaus/aws-github-actions)
- [Actions Hub](https://github.com/actionshub)

### Utility

- [Setup `ssh-agent` ![GitHub Repo Stars](https://img.shields.io/github/stars/webfactory/ssh-agent) ![GitHub last commit](https://img.shields.io/github/last-commit/webfactory/ssh-agent)](https://github.com/webfactory/ssh-agent) - Run `ssh-agent` with additional SSH keys to access private repositories.
- [GitHub Actions Badges for your README ![GitHub Repo Stars](https://img.shields.io/github/stars/atrox/github-actions-badge) ![GitHub last commit](https://img.shields.io/github/last-commit/atrox/github-actions-badge)](https://github.com/atrox/github-actions-badge)
- [GitHub Actions for Python project with poetry ![GitHub Repo Stars](https://img.shields.io/github/stars/abatilo/actions-poetry) ![GitHub last commit](https://img.shields.io/github/last-commit/abatilo/actions-poetry)](https://github.com/abatilo/actions-poetry)
- [GitHub Actions for Python project with pyenv ![GitHub Repo Stars](https://img.shields.io/github/stars/gabrielfalcao/pyenv-action) ![GitHub last commit](https://img.shields.io/github/last-commit/gabrielfalcao/pyenv-action)](https://github.com/gabrielfalcao/pyenv-action)
- [GitHub Actions to compile LaTeX documents ![GitHub Repo Stars](https://img.shields.io/github/stars/xu-cheng/latex-action) ![GitHub last commit](https://img.shields.io/github/last-commit/xu-cheng/latex-action)](https://github.com/xu-cheng/latex-action)
- [Update Maxmind Databases ![GitHub Repo Stars](https://img.shields.io/github/stars/meetup/maxmind-updater) ![GitHub last commit](https://img.shields.io/github/last-commit/meetup/maxmind-updater)](https://github.com/meetup/maxmind-updater)
- [Debug with SSH over tmate ![GitHub Repo Stars](https://img.shields.io/github/stars/mxschmitt/action-tmate) ![GitHub last commit](https://img.shields.io/github/last-commit/mxschmitt/action-tmate)](https://github.com/mxschmitt/action-tmate) - Debug the Action directly by providing a SSH connection.
- [Unlock git-crypt files ![GitHub Repo Stars](https://img.shields.io/github/stars/sliteteam/github-action-git-crypt-unlock) ![GitHub last commit](https://img.shields.io/github/last-commit/sliteteam/github-action-git-crypt-unlock)](https://github.com/sliteteam/github-action-git-crypt-unlock)
- [Golang CGO cross compiler ![GitHub Repo Stars](https://img.shields.io/github/stars/crazy-max/ghaction-xgo) ![GitHub last commit](https://img.shields.io/github/last-commit/crazy-max/ghaction-xgo)](https://github.com/crazy-max/ghaction-xgo)
- [Run your job on another architecture: arm32, aarch64 and others ![GitHub Repo Stars](https://img.shields.io/github/stars/uraimo/run-on-arch-action) ![GitHub last commit](https://img.shields.io/github/last-commit/uraimo/run-on-arch-action)](https://github.com/uraimo/run-on-arch-action)
- [Generate a table of contents ![GitHub Repo Stars](https://img.shields.io/github/stars/technote-space/toc-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/technote-space/toc-generator)](https://github.com/technote-space/toc-generator)
- [Automatically add Label or Assignee to an Issue ![GitHub Repo Stars](https://img.shields.io/github/stars/Naturalclar/issue-action) ![GitHub last commit](https://img.shields.io/github/last-commit/Naturalclar/issue-action)](https://github.com/Naturalclar/issue-action)
- [Action to send LGTM reaction as image or GIF when we say lgtm ![GitHub Repo Stars](https://img.shields.io/github/stars/micnncim/action-lgtm-reaction) ![GitHub last commit](https://img.shields.io/github/last-commit/micnncim/action-lgtm-reaction)](https://github.com/micnncim/action-lgtm-reaction)
- [Generate build numbers across multiple scopes ![GitHub Repo Stars](https://img.shields.io/github/stars/zyborg/gh-action-buildnum) ![GitHub last commit](https://img.shields.io/github/last-commit/zyborg/gh-action-buildnum)](https://github.com/zyborg/gh-action-buildnum)
- [Publish GitHub release artifacts ![GitHub Repo Stars](https://img.shields.io/github/stars/skx/github-action-publish-binaries) ![GitHub last commit](https://img.shields.io/github/last-commit/skx/github-action-publish-binaries)](https://github.com/skx/github-action-publish-binaries)
- [Jekyll Diff Action ![GitHub Repo Stars](https://img.shields.io/github/stars/David-Byrne/jekyll-diff-action) ![GitHub last commit](https://img.shields.io/github/last-commit/David-Byrne/jekyll-diff-action)](https://github.com/David-Byrne/jekyll-diff-action) - Diffs the built Jekyll site after a change, and comments the result back to GitHub.
- [Branch Protection Bot ![GitHub Repo Stars](https://img.shields.io/github/stars/benjefferies/branch-protection-bot) ![GitHub last commit](https://img.shields.io/github/last-commit/benjefferies/branch-protection-bot)](https://github.com/benjefferies/branch-protection-bot) - Temporarily disable and re-enable "Include administrators" option in branch protection.
- [Wait for commit statuses ![GitHub Repo Stars](https://img.shields.io/github/stars/WyriHaximus/github-action-wait-for-status) ![GitHub last commit](https://img.shields.io/github/last-commit/WyriHaximus/github-action-wait-for-status)](https://github.com/WyriHaximus/github-action-wait-for-status) - Wait until all statuses and checks are successful or any of them has failed and set its status output accordingly.
- [Get Latest Tag ![GitHub Repo Stars](https://img.shields.io/github/stars/WyriHaximus/github-action-get-previous-tag) ![GitHub last commit](https://img.shields.io/github/last-commit/WyriHaximus/github-action-get-previous-tag)](https://github.com/WyriHaximus/github-action-get-previous-tag) - Get the previous tag from git.
- [Create Milestone ![GitHub Repo Stars](https://img.shields.io/github/stars/WyriHaximus/github-action-create-milestone) ![GitHub last commit](https://img.shields.io/github/last-commit/WyriHaximus/github-action-create-milestone)](https://github.com/WyriHaximus/github-action-create-milestone) - Create a new open milestone given the title and description.
- [Close Milestone ![GitHub Repo Stars](https://img.shields.io/github/stars/WyriHaximus/github-action-close-milestone) ![GitHub last commit](https://img.shields.io/github/last-commit/WyriHaximus/github-action-close-milestone)](https://github.com/WyriHaximus/github-action-close-milestone) - Close the given milestone.
- [Action to enforce branch naming rules ![GitHub Repo Stars](https://img.shields.io/github/stars/deepakputhraya/action-branch-name) ![GitHub last commit](https://img.shields.io/github/last-commit/deepakputhraya/action-branch-name)](https://github.com/deepakputhraya/action-branch-name)
- [Expose slug of some GitHub variables ![GitHub Repo Stars](https://img.shields.io/github/stars/marketplace/actions) ![GitHub last commit](https://img.shields.io/github/last-commit/marketplace/actions)](https://github.com/marketplace/actions/github-slug)
- [awesome-lint as a GitHub Action ![GitHub Repo Stars](https://img.shields.io/github/stars/max/awesome-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/max/awesome-lint)](https://github.com/max/awesome-lint)
- [Edit JSON File ![GitHub Repo Stars](https://img.shields.io/github/stars/deef0000dragon1/json-edit-action) ![GitHub last commit](https://img.shields.io/github/last-commit/deef0000dragon1/json-edit-action)](https://github.com/deef0000dragon1/json-edit-action)
- [Build Slate documentation ![GitHub Repo Stars](https://img.shields.io/github/stars/Decathlon/slate-builder-action) ![GitHub last commit](https://img.shields.io/github/last-commit/Decathlon/slate-builder-action)](https://github.com/Decathlon/slate-builder-action)
- [Read Properties ![GitHub Repo Stars](https://img.shields.io/github/stars/christian-draeger/read-properties) ![GitHub last commit](https://img.shields.io/github/last-commit/christian-draeger/read-properties)](https://github.com/christian-draeger/read-properties) - Read values from `.properties` files.
- [Write Properties ![GitHub Repo Stars](https://img.shields.io/github/stars/christian-draeger/write-properties) ![GitHub last commit](https://img.shields.io/github/last-commit/christian-draeger/write-properties)](https://github.com/christian-draeger/write-properties) - Write values to `.properties` files.
- [Autotag ![GitHub Repo Stars](https://img.shields.io/github/stars/butlerlogic/action-autotag) ![GitHub last commit](https://img.shields.io/github/last-commit/butlerlogic/action-autotag)](https://github.com/butlerlogic/action-autotag) - Automatically generate a new tag when the manifest file (i.e. `package.json`) version changes.
- [Apply templates with Jinja2 ![GitHub Repo Stars](https://img.shields.io/github/stars/cuchi/jinja2-action) ![GitHub last commit](https://img.shields.io/github/last-commit/cuchi/jinja2-action)](https://github.com/cuchi/jinja2-action) - Use the Jinja2 template engine to generate files from templates.
- [Has Changes ![GitHub Repo Stars](https://img.shields.io/github/stars/UnicornGlobal/has-changes-action) ![GitHub last commit](https://img.shields.io/github/last-commit/UnicornGlobal/has-changes-action)](https://github.com/UnicornGlobal/has-changes-action) - Check if there are code changes from previous steps.
- [Mind Your Language Action ![GitHub Repo Stars](https://img.shields.io/github/stars/tailaiw/mind-your-language-action) ![GitHub last commit](https://img.shields.io/github/last-commit/tailaiw/mind-your-language-action)](https://github.com/tailaiw/mind-your-language-action) - Detect offensive comments in issues and pull requests, and warn senders.
- [YAML/JSON/XML Converter ![GitHub Repo Stars](https://img.shields.io/github/stars/fabasoad/yaml-json-xml-converter-action) ![GitHub last commit](https://img.shields.io/github/last-commit/fabasoad/yaml-json-xml-converter-action)](https://github.com/fabasoad/yaml-json-xml-converter-action) - Converts YAML/JSON/XML file formats interchangeably.
- [NSFW Detection ![GitHub Repo Stars](https://img.shields.io/github/stars/fabasoad/nsfw-detection-action) ![GitHub last commit](https://img.shields.io/github/last-commit/fabasoad/nsfw-detection-action)](https://github.com/fabasoad/nsfw-detection-action) - Detect NSFW content in committed files.
- [Has Changed Path ![GitHub Repo Stars](https://img.shields.io/github/stars/MarceloPrado/has-changed-path) ![GitHub last commit](https://img.shields.io/github/last-commit/MarceloPrado/has-changed-path)](https://github.com/MarceloPrado/has-changed-path) - Conditionally run actions based on changed paths.
- [Linguist ![GitHub Repo Stars](https://img.shields.io/github/stars/fabasoad/linguist-action) ![GitHub last commit](https://img.shields.io/github/last-commit/fabasoad/linguist-action)](https://github.com/fabasoad/linguist-action) - Checks a repository and produces information about used languages in output.
- [Twilio Voice Call ![GitHub Repo Stars](https://img.shields.io/github/stars/fabasoad/twilio-voice-call-action) ![GitHub last commit](https://img.shields.io/github/last-commit/fabasoad/twilio-voice-call-action)](https://github.com/fabasoad/twilio-voice-call-action/) - Make Twilio voice call with defined text.
- [Setup Xcode ![GitHub Repo Stars](https://img.shields.io/github/stars/maxim-lobanov/setup-xcode) ![GitHub last commit](https://img.shields.io/github/last-commit/maxim-lobanov/setup-xcode)](https://github.com/maxim-lobanov/setup-xcode) - Switch between pre-installed versions of Xcode for macOS images.
- [Setup Xamarin ![GitHub Repo Stars](https://img.shields.io/github/stars/maxim-lobanov/setup-xamarin) ![GitHub last commit](https://img.shields.io/github/last-commit/maxim-lobanov/setup-xamarin)](https://github.com/maxim-lobanov/setup-xamarin) - Switch between pre-installed versions of Xamarin and Mono for macOS images.
- [Memer Action ![GitHub Repo Stars](https://img.shields.io/github/stars/Bhupesh-V/memer-action) ![GitHub last commit](https://img.shields.io/github/last-commit/Bhupesh-V/memer-action)](https://github.com/Bhupesh-V/memer-action) - A GitHub Action for Programmer Memes xD.
- [Setup Cocoapods ![GitHub Repo Stars](https://img.shields.io/github/stars/maxim-lobanov/setup-cocoapods) ![GitHub last commit](https://img.shields.io/github/last-commit/maxim-lobanov/setup-cocoapods)](https://github.com/maxim-lobanov/setup-cocoapods) - Setup specific version of Cocoapods.
- [Public IP ![GitHub Repo Stars](https://img.shields.io/github/stars/haythem/public-ip) ![GitHub last commit](https://img.shields.io/github/last-commit/haythem/public-ip)](https://github.com/haythem/public-ip) - Queries GitHub actions runner's public IP address.
- [GitHub Actions for Lazarus/FPC ![GitHub Repo Stars](https://img.shields.io/github/stars/gcarreno/setup-lazarus) ![GitHub last commit](https://img.shields.io/github/last-commit/gcarreno/setup-lazarus)](https://github.com/gcarreno/setup-lazarus)
- [Twilio Fax ![GitHub Repo Stars](https://img.shields.io/github/stars/fabasoad/twilio-fax-action) ![GitHub last commit](https://img.shields.io/github/last-commit/fabasoad/twilio-fax-action)](https://github.com/fabasoad/twilio-fax-action/) - Sends a document by fax using your Twilio account.
- [Setup Kubernetes tools ![GitHub Repo Stars](https://img.shields.io/github/stars/yokawasa/action-setup-kube-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/yokawasa/action-setup-kube-tools)](https://github.com/yokawasa/action-setup-kube-tools) - Install Kubernetes tools (kubectl, kustomize, helm, kubeval, conftest, and yq) on the runner.
- [Setup Elastic Cloud Control Tool ![GitHub Repo Stars](https://img.shields.io/github/stars/yokawasa/action-setup-ecctl) ![GitHub last commit](https://img.shields.io/github/last-commit/yokawasa/action-setup-ecctl)](https://github.com/yokawasa/action-setup-ecctl) - Install a specific version of ecctl on the runner.
- [PowerShell Script ![GitHub Repo Stars](https://img.shields.io/github/stars/Amadevus/pwsh-script) ![GitHub last commit](https://img.shields.io/github/last-commit/Amadevus/pwsh-script)](https://github.com/Amadevus/pwsh-script) - Run PowerShell scripts with workflow contexts (e.g. `$github.token`) and cmdlets, return value => action output.
- [Upload and Scan Files with VirusTotal ![GitHub Repo Stars](https://img.shields.io/github/stars/crazy-max/ghaction-virustotal) ![GitHub last commit](https://img.shields.io/github/last-commit/crazy-max/ghaction-virustotal)](https://github.com/crazy-max/ghaction-virustotal)
- [Import a GPG Key ![GitHub Repo Stars](https://img.shields.io/github/stars/crazy-max/ghaction-import-gpg) ![GitHub last commit](https://img.shields.io/github/last-commit/crazy-max/ghaction-import-gpg)](https://github.com/crazy-max/ghaction-import-gpg)
- [Compress with UPX ![GitHub Repo Stars](https://img.shields.io/github/stars/crazy-max/ghaction-upx) ![GitHub last commit](https://img.shields.io/github/last-commit/crazy-max/ghaction-upx)](https://github.com/crazy-max/ghaction-upx) - The Ultimate Packer for eXecutables.
- [Pull the New Go Module Version Into the Proxy Cache ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewslotin/go-proxy-pull-action) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewslotin/go-proxy-pull-action)](https://github.com/andrewslotin/go-proxy-pull-action) - Ensures the latest version of your Go module is in the proxy cache. Also updates the pkg.go.dev documentation upon release.
- [Delete Run Artifacts ![GitHub Repo Stars](https://img.shields.io/github/stars/marketplace/actions) ![GitHub last commit](https://img.shields.io/github/last-commit/marketplace/actions)](https://github.com/marketplace/actions/delete-run-artifacts) - Deletes all artifacts at the end of a workflow run.
- [GitHub Environment Variables Action ![GitHub Repo Stars](https://img.shields.io/github/stars/FranzDiebold/github-env-vars-action) ![GitHub last commit](https://img.shields.io/github/last-commit/FranzDiebold/github-env-vars-action)](https://github.com/FranzDiebold/github-env-vars-action) - Expose environment variables such as the branch/tag name, repository slug, and ref slug.
- [GitHub Action Locks ![GitHub Repo Stars](https://img.shields.io/github/stars/abatilo/github-action-locks) ![GitHub last commit](https://img.shields.io/github/last-commit/abatilo/github-action-locks)](https://github.com/abatilo/github-action-locks/blob/master/README.md) - Guarantee atomic execution of your GitHub Action workflows.
- [Paths Filter ![GitHub Repo Stars](https://img.shields.io/github/stars/dorny/paths-filter) ![GitHub last commit](https://img.shields.io/github/last-commit/dorny/paths-filter)](https://github.com/dorny/paths-filter) - Conditionally run actions based on files modified by PR, feature branch or pushed commits.
- [Minisauras ![GitHub Repo Stars](https://img.shields.io/github/stars/TeamTigers/minisauras) ![GitHub last commit](https://img.shields.io/github/last-commit/TeamTigers/minisauras)](https://github.com/TeamTigers/minisauras) -  Pulls all the JavaScript and CSS files from your base branch, minify them and creates a pull-request with a new branch.

#### Environments

- [Create an envfile ![GitHub Repo Stars](https://img.shields.io/github/stars/SpicyPizza/create-envfile) ![GitHub last commit](https://img.shields.io/github/last-commit/SpicyPizza/create-envfile)](https://github.com/SpicyPizza/create-envfile)
- [Export global environment variables for succeeding build steps ![GitHub Repo Stars](https://img.shields.io/github/stars/zweitag/github-actions) ![GitHub last commit](https://img.shields.io/github/last-commit/zweitag/github-actions)](https://github.com/zweitag/github-actions)
- [Programmatically set environment variables for use in subsequent steps ![GitHub Repo Stars](https://img.shields.io/github/stars/allenevans/set-env) ![GitHub last commit](https://img.shields.io/github/last-commit/allenevans/set-env)](https://github.com/allenevans/set-env)
- [Install Conda environments for Python ![GitHub Repo Stars](https://img.shields.io/github/stars/goanpeca/setup-miniconda) ![GitHub last commit](https://img.shields.io/github/last-commit/goanpeca/setup-miniconda)](https://github.com/goanpeca/setup-miniconda)
- [Setup NativeScript ![GitHub Repo Stars](https://img.shields.io/github/stars/hrueger/setup-nativescript) ![GitHub last commit](https://img.shields.io/github/last-commit/hrueger/setup-nativescript)](https://github.com/hrueger/setup-nativescript)
- [Create a JSON Environment File ![GitHub Repo Stars](https://img.shields.io/github/stars/schdck/create-env-json) ![GitHub last commit](https://img.shields.io/github/last-commit/schdck/create-env-json)](https://github.com/schdck/create-env-json)

#### Dependencies

- [Install NPM Dependencies with Caching ![GitHub Repo Stars](https://img.shields.io/github/stars/bahmutov/npm-install) ![GitHub last commit](https://img.shields.io/github/last-commit/bahmutov/npm-install)](https://github.com/bahmutov/npm-install)
- [Highlight New NPM Dependencies ![GitHub Repo Stars](https://img.shields.io/github/stars/hiwelo/new-dependencies-action) ![GitHub last commit](https://img.shields.io/github/last-commit/hiwelo/new-dependencies-action)](https://github.com/hiwelo/new-dependencies-action) - Comments on pull requests newly added NPM dependencies information.
- [Cache NPM Dependencies ![GitHub Repo Stars](https://img.shields.io/github/stars/c-hive/gha-npm-cache) ![GitHub last commit](https://img.shields.io/github/last-commit/c-hive/gha-npm-cache)](https://github.com/c-hive/gha-npm-cache)
- [Cache Yarn Dependencies ![GitHub Repo Stars](https://img.shields.io/github/stars/c-hive/gha-yarn-cache) ![GitHub last commit](https://img.shields.io/github/last-commit/c-hive/gha-yarn-cache)](https://github.com/c-hive/gha-yarn-cache)

#### Semantic Versioning

- [Next SemVers ![GitHub Repo Stars](https://img.shields.io/github/stars/WyriHaximus/github-action-next-semvers) ![GitHub last commit](https://img.shields.io/github/last-commit/WyriHaximus/github-action-next-semvers)](https://github.com/WyriHaximus/github-action-next-semvers) - Output the next version for major, minor, and patch version based on the given semver version.
- [Get latest SemVer and branch name given a search string ![GitHub Repo Stars](https://img.shields.io/github/stars/jessicalostinspace/github-action-get-regex-branch) ![GitHub last commit](https://img.shields.io/github/last-commit/jessicalostinspace/github-action-get-regex-branch)](https://github.com/jessicalostinspace/github-action-get-regex-branch)
- [Cut Release Branch ![GitHub Repo Stars](https://img.shields.io/github/stars/jessicalostinspace/cut-release-action) ![GitHub last commit](https://img.shields.io/github/last-commit/jessicalostinspace/cut-release-action)](https://github.com/jessicalostinspace/cut-release-action) - Cuts a release branch given a branch prefix and optional semantic version.
- [Increment Semantic Version ![GitHub Repo Stars](https://img.shields.io/github/stars/christian-draeger/increment-semantic-version) ![GitHub last commit](https://img.shields.io/github/last-commit/christian-draeger/increment-semantic-version)](https://github.com/christian-draeger/increment-semantic-version) - Bump a given semantic version (SemVer), depending on given release type.

### Static Analysis

- [PHPStan Static code analyzer Action ![GitHub Repo Stars](https://img.shields.io/github/stars/OskarStark/phpstan-ga) ![GitHub last commit](https://img.shields.io/github/last-commit/OskarStark/phpstan-ga)](https://github.com/OskarStark/phpstan-ga)
- [GraphQL Inspector Action ![GitHub Repo Stars](https://img.shields.io/github/stars/kamilkisiela/graphql-inspector) ![GitHub last commit](https://img.shields.io/github/last-commit/kamilkisiela/graphql-inspector)](https://github.com/kamilkisiela/graphql-inspector)
- [PowerShell static analysis with PSScriptAnalyzer ![GitHub Repo Stars](https://img.shields.io/github/stars/devblackops/github-action-psscriptanalyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/devblackops/github-action-psscriptanalyzer)](https://github.com/devblackops/github-action-psscriptanalyzer)
- [Run tfsec, with reviewdog output on the PR ![GitHub Repo Stars](https://img.shields.io/github/stars/reviewdog/action-tfsec) ![GitHub last commit](https://img.shields.io/github/last-commit/reviewdog/action-tfsec)](https://github.com/reviewdog/action-tfsec)

#### Testing

- [Run Tests through Puppeteer, the Headless Chrome Node API ![GitHub Repo Stars](https://img.shields.io/github/stars/ianwalter/puppeteer) ![GitHub last commit](https://img.shields.io/github/last-commit/ianwalter/puppeteer)](https://github.com/ianwalter/puppeteer)
- [xUnit Slack Reporter: Sends summary of tests from xUnit reports to a Slack channel ![GitHub Repo Stars](https://img.shields.io/github/stars/ivanklee86/xunit-slack-reporter) ![GitHub last commit](https://img.shields.io/github/last-commit/ivanklee86/xunit-slack-reporter)](https://github.com/ivanklee86/xunit-slack-reporter)
- [Run codeception tests ![GitHub Repo Stars](https://img.shields.io/github/stars/joelwmale/codeception-action) ![GitHub last commit](https://img.shields.io/github/last-commit/joelwmale/codeception-action)](https://github.com/joelwmale/codeception-action)
- [Run TestCafe tests ![GitHub Repo Stars](https://img.shields.io/github/stars/DevExpress/testcafe-action) ![GitHub last commit](https://img.shields.io/github/last-commit/DevExpress/testcafe-action)](https://github.com/DevExpress/testcafe-action)
- [Run Unity tests ![GitHub Repo Stars](https://img.shields.io/github/stars/webbertakken/unity-test-runner) ![GitHub last commit](https://img.shields.io/github/last-commit/webbertakken/unity-test-runner)](https://github.com/webbertakken/unity-test-runner)
- [Run Cypress E2E tests ![GitHub Repo Stars](https://img.shields.io/github/stars/cypress-io/github-action) ![GitHub last commit](https://img.shields.io/github/last-commit/cypress-io/github-action)](https://github.com/cypress-io/github-action)
- [Test Ansible roles with Molecule ![GitHub Repo Stars](https://img.shields.io/github/stars/robertdebock/molecule-action) ![GitHub last commit](https://img.shields.io/github/last-commit/robertdebock/molecule-action)](https://github.com/robertdebock/molecule-action)
- [Run performance testing with artillery.io ![GitHub Repo Stars](https://img.shields.io/github/stars/kenju/github-actions-artillery) ![GitHub last commit](https://img.shields.io/github/last-commit/kenju/github-actions-artillery)](https://github.com/kenju/github-actions-artillery)
- [Detect Flaky Tests with BuildPulse ![GitHub Repo Stars](https://img.shields.io/github/stars/Workshop64/buildpulse-action) ![GitHub last commit](https://img.shields.io/github/last-commit/Workshop64/buildpulse-action)](https://github.com/Workshop64/buildpulse-action)
- [Display Inline Code Annotations for Jest Tests ![GitHub Repo Stars](https://img.shields.io/github/stars/IgnusG/jest-report-action) ![GitHub last commit](https://img.shields.io/github/last-commit/IgnusG/jest-report-action)](https://github.com/IgnusG/jest-report-action)

#### Linting

- [PHP Coding Standards Fixer Action ![GitHub Repo Stars](https://img.shields.io/github/stars/OskarStark/php-cs-fixer-ga) ![GitHub last commit](https://img.shields.io/github/last-commit/OskarStark/php-cs-fixer-ga)](https://github.com/OskarStark/php-cs-fixer-ga)
- [Runs Hadolint against a Dockerfile within a repository ![GitHub Repo Stars](https://img.shields.io/github/stars/burdzwastaken/hadolint-action) ![GitHub last commit](https://img.shields.io/github/last-commit/burdzwastaken/hadolint-action)](https://github.com/burdzwastaken/hadolint-action)
- [Run ESLint, with reviewdog output on the PR ![GitHub Repo Stars](https://img.shields.io/github/stars/reviewdog/action-eslint) ![GitHub last commit](https://img.shields.io/github/last-commit/reviewdog/action-eslint)](https://github.com/reviewdog/action-eslint)
- [JavaScript-based linter for \*.workflow files ![GitHub Repo Stars](https://img.shields.io/github/stars/OmarTawfik/github-actions-js) ![GitHub last commit](https://img.shields.io/github/last-commit/OmarTawfik/github-actions-js)](https://github.com/OmarTawfik/github-actions-js)
- [Lint terraform files using tflint, with reviewdog output on the PR ![GitHub Repo Stars](https://img.shields.io/github/stars/reviewdog/action-tflint) ![GitHub last commit](https://img.shields.io/github/last-commit/reviewdog/action-tflint)](https://github.com/reviewdog/action-tflint)
- [autopep8: Automatically formats Python code to conform to the PEP 8 style guide ![GitHub Repo Stars](https://img.shields.io/github/stars/peter-evans/autopep8) ![GitHub last commit](https://img.shields.io/github/last-commit/peter-evans/autopep8)](https://github.com/peter-evans/autopep8)
- [Run `ergebnis/composer-normalize` to ensure your PHP project has a normalized `composer.json` ![GitHub Repo Stars](https://img.shields.io/github/stars/ergebnis/composer-normalize-action) ![GitHub last commit](https://img.shields.io/github/last-commit/ergebnis/composer-normalize-action)](https://github.com/ergebnis/composer-normalize-action)
- [Run Go lint checks on PR event ![GitHub Repo Stars](https://img.shields.io/github/stars/ArangoGutierrez/GoLinty-Action) ![GitHub last commit](https://img.shields.io/github/last-commit/ArangoGutierrez/GoLinty-Action)](https://github.com/ArangoGutierrez/GoLinty-Action)
- [Node.js - Automatically run the `format` and/or `lint` script used by the package ![GitHub Repo Stars](https://img.shields.io/github/stars/MarvinJWendt/run-node-formatter) ![GitHub last commit](https://img.shields.io/github/last-commit/MarvinJWendt/run-node-formatter)](https://github.com/MarvinJWendt/run-node-formatter)
- [Stylelinter - GitHub Action that runs stylelint ![GitHub Repo Stars](https://img.shields.io/github/stars/exelban/stylelint) ![GitHub last commit](https://img.shields.io/github/last-commit/exelban/stylelint)](https://github.com/exelban/stylelint)
- [Run stylelint, with reviewdog output on the PR ![GitHub Repo Stars](https://img.shields.io/github/stars/reviewdog/action-stylelint) ![GitHub last commit](https://img.shields.io/github/last-commit/reviewdog/action-stylelint)](https://github.com/reviewdog/action-stylelint)
- [PyCodeStyle Action - A GitHub Action that leaves a comment on your PR with pycodestyle (autopep8) feedback ![GitHub Repo Stars](https://img.shields.io/github/stars/ankitvgupta/pycodestyle-action) ![GitHub last commit](https://img.shields.io/github/last-commit/ankitvgupta/pycodestyle-action)](https://github.com/ankitvgupta/pycodestyle-action)
- [wemake-python-styleguide - The strictest and most opinionated python linter ever, with optional reviewdog output on the PR ![GitHub Repo Stars](https://img.shields.io/github/stars/wemake-services/wemake-python-styleguide) ![GitHub last commit](https://img.shields.io/github/last-commit/wemake-services/wemake-python-styleguide)](https://github.com/wemake-services/wemake-python-styleguide)
- [Run TSLint with status checks and file diff annotations ![GitHub Repo Stars](https://img.shields.io/github/stars/mooyoul/tslint-actions) ![GitHub last commit](https://img.shields.io/github/last-commit/mooyoul/tslint-actions)](https://github.com/mooyoul/tslint-actions)
- [Lint Pull Request commits with commitlint ![GitHub Repo Stars](https://img.shields.io/github/stars/wagoid/commitlint-github-action) ![GitHub last commit](https://img.shields.io/github/last-commit/wagoid/commitlint-github-action)](https://github.com/wagoid/commitlint-github-action)
- [Run vint, with reviewdog output on the PR ![GitHub Repo Stars](https://img.shields.io/github/stars/reviewdog/action-vint) ![GitHub last commit](https://img.shields.io/github/last-commit/reviewdog/action-vint)](https://github.com/reviewdog/action-vint)
- [Run mispell, with reviewdog output on the PR ![GitHub Repo Stars](https://img.shields.io/github/stars/reviewdog/action-misspell) ![GitHub last commit](https://img.shields.io/github/last-commit/reviewdog/action-misspell)](https://github.com/reviewdog/action-misspell)
- [Run golangci-lint, with reviewdog output on the PR ![GitHub Repo Stars](https://img.shields.io/github/stars/reviewdog/action-golangci-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/reviewdog/action-golangci-lint)](https://github.com/reviewdog/action-golangci-lint)
- [Run shellcheck, with reviewdog output on the PR ![GitHub Repo Stars](https://img.shields.io/github/stars/reviewdog/action-shellcheck) ![GitHub last commit](https://img.shields.io/github/last-commit/reviewdog/action-shellcheck)](https://github.com/reviewdog/action-shellcheck)
- [Catch insensitive, inconsiderate writing in your markdown docs ![GitHub Repo Stars](https://img.shields.io/github/stars/theashraf/alex-action) ![GitHub last commit](https://img.shields.io/github/last-commit/theashraf/alex-action)](https://github.com/theashraf/alex-action)
- [Run dotenv-linter - Lints your .env files like a charm, with optional reviewdog output on the PR ![GitHub Repo Stars](https://img.shields.io/github/stars/wemake-services/dotenv-linter) ![GitHub last commit](https://img.shields.io/github/last-commit/wemake-services/dotenv-linter)](https://github.com/wemake-services/dotenv-linter)
- [Run dotenv-linter, with reviewdog output on the PR ![GitHub Repo Stars](https://img.shields.io/github/stars/mgrachev/action-dotenv-linter) ![GitHub last commit](https://img.shields.io/github/last-commit/mgrachev/action-dotenv-linter)](https://github.com/mgrachev/action-dotenv-linter)
- [Show and auto-fix linting errors for many programming languages ![GitHub Repo Stars](https://img.shields.io/github/stars/samuelmeuli/lint-action) ![GitHub last commit](https://img.shields.io/github/last-commit/samuelmeuli/lint-action)](https://github.com/samuelmeuli/lint-action)
- [PHP_CodeSniffer With Annotations ![GitHub Repo Stars](https://img.shields.io/github/stars/chekalsky/phpcs-action) ![GitHub last commit](https://img.shields.io/github/last-commit/chekalsky/phpcs-action)](https://github.com/chekalsky/phpcs-action)
- [Linter for markdown (with presets) ![GitHub Repo Stars](https://img.shields.io/github/stars/avto-dev/markdown-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/avto-dev/markdown-lint)](https://github.com/avto-dev/markdown-lint)
- [Stylelint problem matcher to create annotations ![GitHub Repo Stars](https://img.shields.io/github/stars/xt0rted/stylelint-problem-matcher) ![GitHub last commit](https://img.shields.io/github/last-commit/xt0rted/stylelint-problem-matcher)](https://github.com/xt0rted/stylelint-problem-matcher)
- [Run sqlcheck on the PR to identifies anti-patterns in SQL queries ![GitHub Repo Stars](https://img.shields.io/github/stars/yokawasa/action-sqlcheck) ![GitHub last commit](https://img.shields.io/github/last-commit/yokawasa/action-sqlcheck)](https://github.com/yokawasa/action-sqlcheck)
- [Validate Fastlane Supply Metadata Against the Play Store Guidelines ![GitHub Repo Stars](https://img.shields.io/github/stars/ashutoshgngwr/validate-fastlane-supply-metadata) ![GitHub last commit](https://img.shields.io/github/last-commit/ashutoshgngwr/validate-fastlane-supply-metadata)](https://github.com/ashutoshgngwr/validate-fastlane-supply-metadata)
- [Run Golint to lint your Golang code ![GitHub Repo Stars](https://img.shields.io/github/stars/Jerome1337/golint-action) ![GitHub last commit](https://img.shields.io/github/last-commit/Jerome1337/golint-action)](https://github.com/Jerome1337/golint-action)

#### Security

- [A vulnerability scanner for your docker images ![GitHub Repo Stars](https://img.shields.io/github/stars/phonito/phonito-scanner-action) ![GitHub last commit](https://img.shields.io/github/last-commit/phonito/phonito-scanner-action)](https://github.com/phonito/phonito-scanner-action)
- [Automatically approve and merge Dependabot updates ![GitHub Repo Stars](https://img.shields.io/github/stars/ridedott/dependabot-auto-merge-action) ![GitHub last commit](https://img.shields.io/github/last-commit/ridedott/dependabot-auto-merge-action)](https://github.com/ridedott/dependabot-auto-merge-action)
- [Run dlint security linter on your Python code ![GitHub Repo Stars](https://img.shields.io/github/stars/xen0l/dlint-check) ![GitHub last commit](https://img.shields.io/github/last-commit/xen0l/dlint-check)](https://github.com/xen0l/dlint-check)
- [AWS Secrets Manager Actions ![GitHub Repo Stars](https://img.shields.io/github/stars/say8425/aws-secrets-manager-actions) ![GitHub last commit](https://img.shields.io/github/last-commit/say8425/aws-secrets-manager-actions)](https://github.com/say8425/aws-secrets-manager-actions) - Define AWS Secrets Manager secrets to environment values.
- [Linting your AWS IAM policy documents for correctness and security issues ![GitHub Repo Stars](https://img.shields.io/github/stars/xen0l/iam-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/xen0l/iam-lint)](https://github.com/xen0l/iam-lint)
- [Secret Spreader ![GitHub Repo Stars](https://img.shields.io/github/stars/webfactory/secret-spreader) ![GitHub last commit](https://img.shields.io/github/last-commit/webfactory/secret-spreader)](https://github.com/webfactory/secret-spreader) - Not an action per se, but a tool to manage Actions Secrets across a list of repositories.
- [Secrets Sync Action ![GitHub Repo Stars](https://img.shields.io/github/stars/google/secrets-sync-action) ![GitHub last commit](https://img.shields.io/github/last-commit/google/secrets-sync-action)](https://github.com/google/secrets-sync-action) - Action syncs secrets across multiple repositories.
- [Snyk Test Action ![GitHub Repo Stars](https://img.shields.io/github/stars/snyk/actions) ![GitHub last commit](https://img.shields.io/github/last-commit/snyk/actions)](https://github.com/snyk/actions)
- [Manage Your GitHub Actions Secrets With A Simple CLI ![GitHub Repo Stars](https://img.shields.io/github/stars/unfor19/githubsecrets) ![GitHub last commit](https://img.shields.io/github/last-commit/unfor19/githubsecrets)](https://github.com/unfor19/githubsecrets)
- [SecretHub ![GitHub Repo Stars](https://img.shields.io/github/stars/secrethub/actions) ![GitHub last commit](https://img.shields.io/github/last-commit/secrethub/actions)](https://github.com/secrethub/actions) - Have a single source of truth for your secrets and load them into GitHub Actions on demand.

#### Code Coverage

- [Scan code with SonarCloud ![GitHub Repo Stars](https://img.shields.io/github/stars/sonarsource/sonarcloud-github-action) ![GitHub last commit](https://img.shields.io/github/last-commit/sonarsource/sonarcloud-github-action)](https://github.com/sonarsource/sonarcloud-github-action)
- [Send your code coverage to codecov.io ![GitHub Repo Stars](https://img.shields.io/github/stars/codecov/codecov-action) ![GitHub last commit](https://img.shields.io/github/last-commit/codecov/codecov-action)](https://github.com/codecov/codecov-action)
- [Publishing code coverage to CodeClimate ![GitHub Repo Stars](https://img.shields.io/github/stars/paambaati/codeclimate-action) ![GitHub last commit](https://img.shields.io/github/last-commit/paambaati/codeclimate-action)](https://github.com/paambaati/codeclimate-action)
- [Update repository go report card ![GitHub Repo Stars](https://img.shields.io/github/stars/creekorful/goreportcard-action) ![GitHub last commit](https://img.shields.io/github/last-commit/creekorful/goreportcard-action)](https://github.com/creekorful/goreportcard-action)

### Dynamic Analysis

- [Run Gofmt to check Golang code formatting ![GitHub Repo Stars](https://img.shields.io/github/stars/Jerome1337/gofmt-action) ![GitHub last commit](https://img.shields.io/github/last-commit/Jerome1337/gofmt-action)](https://github.com/Jerome1337/gofmt-action)
- [Run Goimports to check Golang imports order ![GitHub Repo Stars](https://img.shields.io/github/stars/Jerome1337/goimports-action) ![GitHub last commit](https://img.shields.io/github/last-commit/Jerome1337/goimports-action)](https://github.com/Jerome1337/goimports-action)

### Monitoring

- [Audit a webpage with Google Chrome's Lighthouse tests ![GitHub Repo Stars](https://img.shields.io/github/stars/jakejarvis/lighthouse-action) ![GitHub last commit](https://img.shields.io/github/last-commit/jakejarvis/lighthouse-action)](https://github.com/jakejarvis/lighthouse-action)
- [Runs Lighthouse and posts results to PRs and Slack ![GitHub Repo Stars](https://img.shields.io/github/stars/foo-software/lighthouse-check-action) ![GitHub last commit](https://img.shields.io/github/last-commit/foo-software/lighthouse-check-action)](https://github.com/foo-software/lighthouse-check-action)
- [Run Lighthouse in CI using GitHub Actions ![GitHub Repo Stars](https://img.shields.io/github/stars/treosh/lighthouse-ci-action) ![GitHub last commit](https://img.shields.io/github/last-commit/treosh/lighthouse-ci-action)](https://github.com/treosh/lighthouse-ci-action)
- [Continuous Benchmarking and Benchmark Visualization for Go ![GitHub Repo Stars](https://img.shields.io/github/stars/bobheadxi/gobenchdata) ![GitHub last commit](https://img.shields.io/github/last-commit/bobheadxi/gobenchdata)](https://github.com/bobheadxi/gobenchdata)
- [Size Limit Action ![GitHub Repo Stars](https://img.shields.io/github/stars/andresz1/size-limit-action) ![GitHub last commit](https://img.shields.io/github/last-commit/andresz1/size-limit-action)](https://github.com/andresz1/size-limit-action) - Comments cost comparison of your JS in PRs and rejects them if limit is exceeded.
- [Check bundlephobia ![GitHub Repo Stars](https://img.shields.io/github/stars/carlesnunez/check-my-bundlephobia) ![GitHub last commit](https://img.shields.io/github/last-commit/carlesnunez/check-my-bundlephobia)](https://github.com/carlesnunez/check-my-bundlephobia) - Comments new and modified package size according to bundlephobia.io website and rejects PR on threshold surpassed.

### Pull Requests

- [Set PR Reviewers Based on Assignees ![GitHub Repo Stars](https://img.shields.io/github/stars/pullreminders/assignee-to-reviewer-action) ![GitHub last commit](https://img.shields.io/github/last-commit/pullreminders/assignee-to-reviewer-action)](https://github.com/pullreminders/assignee-to-reviewer-action)
- [Open or Update PR on Branch Push (with Branch Selection) ![GitHub Repo Stars](https://img.shields.io/github/stars/vsoch/pull-request-action) ![GitHub last commit](https://img.shields.io/github/last-commit/vsoch/pull-request-action)](https://github.com/vsoch/pull-request-action)
- [Automatically Rebase a PR ![GitHub Repo Stars](https://img.shields.io/github/stars/cirrus-actions/rebase) ![GitHub last commit](https://img.shields.io/github/last-commit/cirrus-actions/rebase)](https://github.com/cirrus-actions/rebase)
- [Label PR once it has a Specified Number of Approvals ![GitHub Repo Stars](https://img.shields.io/github/stars/pullreminders/label-when-approved-action) ![GitHub last commit](https://img.shields.io/github/last-commit/pullreminders/label-when-approved-action)](https://github.com/pullreminders/label-when-approved-action)
- [Add Labels to a PR based on Matched File Patterns ![GitHub Repo Stars](https://img.shields.io/github/stars/banyan/auto-label) ![GitHub last commit](https://img.shields.io/github/last-commit/banyan/auto-label)](https://github.com/banyan/auto-label)
- [Auto-Approve PRs ![GitHub Repo Stars](https://img.shields.io/github/stars/hmarr/auto-approve-action) ![GitHub last commit](https://img.shields.io/github/last-commit/hmarr/auto-approve-action)](https://github.com/hmarr/auto-approve-action)
- [Automatically add Reviewers to PR based on the Configuration File ![GitHub Repo Stars](https://img.shields.io/github/stars/kentaro-m/auto-assign-action) ![GitHub last commit](https://img.shields.io/github/last-commit/kentaro-m/auto-assign-action)](https://github.com/kentaro-m/auto-assign-action)
- [Add Labels to a PR based on Branch Name Patterns ![GitHub Repo Stars](https://img.shields.io/github/stars/TimonVS/pr-labeler-action) ![GitHub last commit](https://img.shields.io/github/last-commit/TimonVS/pr-labeler-action)](https://github.com/TimonVS/pr-labeler-action)
- [Add Labels to a PR based on Total Size of the Diff ![GitHub Repo Stars](https://img.shields.io/github/stars/pascalgn/size-label-action) ![GitHub last commit](https://img.shields.io/github/last-commit/pascalgn/size-label-action)](https://github.com/pascalgn/size-label-action)
- [Automatically merge PRs That Are Ready ![GitHub Repo Stars](https://img.shields.io/github/stars/pascalgn/automerge-action) ![GitHub last commit](https://img.shields.io/github/last-commit/pascalgn/automerge-action)](https://github.com/pascalgn/automerge-action)
- [Verify That PRs Contain a Ticket Reference ![GitHub Repo Stars](https://img.shields.io/github/stars/vijaykramesh/pr-lint-action) ![GitHub last commit](https://img.shields.io/github/last-commit/vijaykramesh/pr-lint-action)](https://github.com/vijaykramesh/pr-lint-action)
- [Create a PR for Changes to your Repository in the Actions Workspace ![GitHub Repo Stars](https://img.shields.io/github/stars/peter-evans/create-pull-request) ![GitHub last commit](https://img.shields.io/github/last-commit/peter-evans/create-pull-request)](https://github.com/peter-evans/create-pull-request)
- [Lint a PR ![GitHub Repo Stars](https://img.shields.io/github/stars/seferov/pr-lint-action) ![GitHub last commit](https://img.shields.io/github/last-commit/seferov/pr-lint-action)](https://github.com/seferov/pr-lint-action)
- [ChatOps for PRs ![GitHub Repo Stars](https://img.shields.io/github/stars/machine-learning-apps/actions-chatops) ![GitHub last commit](https://img.shields.io/github/last-commit/machine-learning-apps/actions-chatops)](https://github.com/machine-learning-apps/actions-chatops)
- [Prefix Title and Body of a PR Based on Text Extracted from Branch Name ![GitHub Repo Stars](https://img.shields.io/github/stars/tzkhan/pr-update-action) ![GitHub last commit](https://img.shields.io/github/last-commit/tzkhan/pr-update-action)](https://github.com/tzkhan/pr-update-action)
- [Block Autosquash Commits ![GitHub Repo Stars](https://img.shields.io/github/stars/xt0rted/block-autosquash-commits-action) ![GitHub last commit](https://img.shields.io/github/last-commit/xt0rted/block-autosquash-commits-action)](https://github.com/xt0rted/block-autosquash-commits-action)
- [Automatically Bump and Tag on Merge ![GitHub Repo Stars](https://img.shields.io/github/stars/anothrNick/github-tag-action) ![GitHub last commit](https://img.shields.io/github/last-commit/anothrNick/github-tag-action)](https://github.com/anothrNick/github-tag-action)
- [Automatically Update PRs with Outdated Checks and Squash and Merge the Ones Matching All Branch Protections ![GitHub Repo Stars](https://img.shields.io/github/stars/tibdex/autosquash) ![GitHub last commit](https://img.shields.io/github/last-commit/tibdex/autosquash)](https://github.com/tibdex/autosquash)
- [Merge Pal - Automatically Update and Merge PRs ![GitHub Repo Stars](https://img.shields.io/github/stars/maxkomarychev/merge-pal-action) ![GitHub last commit](https://img.shields.io/github/last-commit/maxkomarychev/merge-pal-action)](https://github.com/maxkomarychev/merge-pal-action)
- [Enforce naming convention on pull request title ![GitHub Repo Stars](https://img.shields.io/github/stars/deepakputhraya/action-pr-title) ![GitHub last commit](https://img.shields.io/github/last-commit/deepakputhraya/action-pr-title)](https://github.com/deepakputhraya/action-pr-title)
- [Pull Request Stuck Notifier ![GitHub Repo Stars](https://img.shields.io/github/stars/jrylan/github-action-stuck-pr-notifier) ![GitHub last commit](https://img.shields.io/github/last-commit/jrylan/github-action-stuck-pr-notifier)](https://github.com/jrylan/github-action-stuck-pr-notifier)
- [Lint pull request name with commitlint (Awesome if you squash merge !) ![GitHub Repo Stars](https://img.shields.io/github/stars/JulienKode/pull-request-name-linter-action) ![GitHub last commit](https://img.shields.io/github/last-commit/JulienKode/pull-request-name-linter-action)](https://github.com/JulienKode/pull-request-name-linter-action)
- [Block PR merges when Checks for target branches are failing ![GitHub Repo Stars](https://img.shields.io/github/stars/cirrus-actions/branch-guard) ![GitHub last commit](https://img.shields.io/github/last-commit/cirrus-actions/branch-guard)](https://github.com/cirrus-actions/branch-guard)
- [Get generated static site screenshots updated by Pull Request ![GitHub Repo Stars](https://img.shields.io/github/stars/ssowonny/diff-pages-action) ![GitHub last commit](https://img.shields.io/github/last-commit/ssowonny/diff-pages-action)](https://github.com/ssowonny/diff-pages-action)
- [Add Labels Depending if the Pull Request Still in Progress ![GitHub Repo Stars](https://img.shields.io/github/stars/AlbertHernandez/working-label-action) ![GitHub last commit](https://img.shields.io/github/last-commit/AlbertHernandez/working-label-action)](https://github.com/AlbertHernandez/working-label-action)
- [Ticket Check Action ![GitHub Repo Stars](https://img.shields.io/github/stars/neofinancial/ticket-check-action) ![GitHub last commit](https://img.shields.io/github/last-commit/neofinancial/ticket-check-action)](https://github.com/neofinancial/ticket-check-action) - Automatically add a ticket or issue number to the start of all Pull Request titles.
- [Pull Request Lint With Regex ![GitHub Repo Stars](https://img.shields.io/github/stars/MorrisonCole/pr-lint-action) ![GitHub last commit](https://img.shields.io/github/last-commit/MorrisonCole/pr-lint-action)](https://github.com/MorrisonCole/pr-lint-action)
- [Pull Request Landmines ![GitHub Repo Stars](https://img.shields.io/github/stars/tylermurry/github-pr-landmine) ![GitHub last commit](https://img.shields.io/github/last-commit/tylermurry/github-pr-landmine)](https://github.com/tylermurry/github-pr-landmine)
- [Annotate a GitHub Pull Request Based on a Checkstyle XML-Report ![GitHub Repo Stars](https://img.shields.io/github/stars/staabm/annotate-pull-request-from-checkstyle) ![GitHub last commit](https://img.shields.io/github/last-commit/staabm/annotate-pull-request-from-checkstyle)](https://github.com/staabm/annotate-pull-request-from-checkstyle)
- [Pull Request Stats ![GitHub Repo Stars](https://img.shields.io/github/stars/flowwer-dev/pull-request-stats) ![GitHub last commit](https://img.shields.io/github/last-commit/flowwer-dev/pull-request-stats)](https://github.com/flowwer-dev/pull-request-stats) -  Print relevant stats about reviewers.
- [Pull Request Description Enforcer ![GitHub Repo Stars](https://img.shields.io/github/stars/derkinderfietsen/pr-description-enforcer) ![GitHub last commit](https://img.shields.io/github/last-commit/derkinderfietsen/pr-description-enforcer)](https://github.com/derkinderfietsen/pr-description-enforcer) - Enforces description on pull requests.

### GitHub Pages

- [Deploy a Zola site to GitHub Pages ![GitHub Repo Stars](https://img.shields.io/github/stars/shalzz/zola-deploy-action) ![GitHub last commit](https://img.shields.io/github/last-commit/shalzz/zola-deploy-action)](https://github.com/shalzz/zola-deploy-action)
- [Build Hugo static content site and publish it to gh-pages branch ![GitHub Repo Stars](https://img.shields.io/github/stars/khanhicetea/gh-actions-hugo-deploy-gh-pages) ![GitHub last commit](https://img.shields.io/github/last-commit/khanhicetea/gh-actions-hugo-deploy-gh-pages)](https://github.com/khanhicetea/gh-actions-hugo-deploy-gh-pages)
- [Build a Jekyll site—with Custom Jekyll Plugins & Build Scripts—and deploy it back to the Gh-Pages Branch ![GitHub Repo Stars](https://img.shields.io/github/stars/BryanSchuetz/jekyll-deploy-gh-pages) ![GitHub last commit](https://img.shields.io/github/last-commit/BryanSchuetz/jekyll-deploy-gh-pages)](https://github.com/BryanSchuetz/jekyll-deploy-gh-pages)
- [Google Dataset Search Metadata](https://www.github.com/openschemas/extractors/) - And other schema.org extractors to make datasets discoverable from GitHub pages.
- [GitHub Actions for deploying to GitHub Pages with Static Site Generators ![GitHub Repo Stars](https://img.shields.io/github/stars/peaceiris/actions-gh-pages) ![GitHub last commit](https://img.shields.io/github/last-commit/peaceiris/actions-gh-pages)](https://github.com/peaceiris/actions-gh-pages)
- [GitHub Action for Hexo ![GitHub Repo Stars](https://img.shields.io/github/stars/heowc/action-hexo) ![GitHub last commit](https://img.shields.io/github/last-commit/heowc/action-hexo)](https://github.com/heowc/action-hexo)
- [Deploy Google Analytics stats to GitHub Pages ![GitHub Repo Stars](https://img.shields.io/github/stars/cristianpb/analytics-google) ![GitHub last commit](https://img.shields.io/github/last-commit/cristianpb/analytics-google)](https://github.com/cristianpb/analytics-google)
- [A Jupyter Notebook Blogging Platform Powered by GitHub Actions, Pages and Jekyll ![GitHub Repo Stars](https://img.shields.io/github/stars/fastai/fastpages) ![GitHub last commit](https://img.shields.io/github/last-commit/fastai/fastpages)](https://github.com/fastai/fastpages)
- [Deploy A Static Site to GitHub Pages ![GitHub Repo Stars](https://img.shields.io/github/stars/appleboy/gh-pages-action) ![GitHub last commit](https://img.shields.io/github/last-commit/appleboy/gh-pages-action)](https://github.com/appleboy/gh-pages-action) - Deploy to custom directory and ignore folder/file.
- [Deploy to GitHub Pages with Advanced Settings ![GitHub Repo Stars](https://img.shields.io/github/stars/crazy-max/ghaction-github-pages) ![GitHub last commit](https://img.shields.io/github/last-commit/crazy-max/ghaction-github-pages)](https://github.com/crazy-max/ghaction-github-pages)

### Notifications and Messages

- [Send a Discord notification ![GitHub Repo Stars](https://img.shields.io/github/stars/Ilshidur/action-discord) ![GitHub last commit](https://img.shields.io/github/last-commit/Ilshidur/action-discord)](https://github.com/Ilshidur/action-discord)
- [Post a Slack message as a bot ![GitHub Repo Stars](https://img.shields.io/github/stars/pullreminders/slack-action) ![GitHub last commit](https://img.shields.io/github/last-commit/pullreminders/slack-action)](https://github.com/pullreminders/slack-action)
- [Send an SMS from GitHub Actions using Nexmo ![GitHub Repo Stars](https://img.shields.io/github/stars/nexmo-community/nexmo-sms-action) ![GitHub last commit](https://img.shields.io/github/last-commit/nexmo-community/nexmo-sms-action)](https://github.com/nexmo-community/nexmo-sms-action)
- [Send an SMS from GitHub Actions using Clockworksms ![GitHub Repo Stars](https://img.shields.io/github/stars/bharathvaj1995/clockwork-sms-action) ![GitHub last commit](https://img.shields.io/github/last-commit/bharathvaj1995/clockwork-sms-action)](https://github.com/bharathvaj1995/clockwork-sms-action)
- [Send a Telegram Message ![GitHub Repo Stars](https://img.shields.io/github/stars/appleboy/telegram-action) ![GitHub last commit](https://img.shields.io/github/last-commit/appleboy/telegram-action)](https://github.com/appleboy/telegram-action)
- [Send a File or Text Message to Discord (custom define color, username or avatar) ![GitHub Repo Stars](https://img.shields.io/github/stars/appleboy/discord-action) ![GitHub last commit](https://img.shields.io/github/last-commit/appleboy/discord-action)](https://github.com/appleboy/discord-action)
- [Collaborate on tweets using pull requests ![GitHub Repo Stars](https://img.shields.io/github/stars/gr2m/twitter-together) ![GitHub last commit](https://img.shields.io/github/last-commit/gr2m/twitter-together)](https://github.com/gr2m/twitter-together)
- [Send a Push Notification via Push by Techulus ![GitHub Repo Stars](https://img.shields.io/github/stars/techulus/push-github-action) ![GitHub last commit](https://img.shields.io/github/last-commit/techulus/push-github-action)](https://github.com/techulus/push-github-action)
- [Send email with SendGrid ![GitHub Repo Stars](https://img.shields.io/github/stars/peter-evans/sendgrid-action) ![GitHub last commit](https://img.shields.io/github/last-commit/peter-evans/sendgrid-action)](https://github.com/peter-evans/sendgrid-action)
- [Send a Push Notification via Join ![GitHub Repo Stars](https://img.shields.io/github/stars/ShaunLWM/action-join) ![GitHub last commit](https://img.shields.io/github/last-commit/ShaunLWM/action-join)](https://github.com/ShaunLWM/action-join)
- [New package version checker for npm ![GitHub Repo Stars](https://img.shields.io/github/stars/MeilCli/npm-update-check-action) ![GitHub last commit](https://img.shields.io/github/last-commit/MeilCli/npm-update-check-action)](https://github.com/MeilCli/npm-update-check-action)
- [New package version checker for NuGet ![GitHub Repo Stars](https://img.shields.io/github/stars/MeilCli/nuget-update-check-action) ![GitHub last commit](https://img.shields.io/github/last-commit/MeilCli/nuget-update-check-action)](https://github.com/MeilCli/nuget-update-check-action)
- [New package version checker for Gradle ![GitHub Repo Stars](https://img.shields.io/github/stars/MeilCli/gradle-update-check-action) ![GitHub last commit](https://img.shields.io/github/last-commit/MeilCli/gradle-update-check-action)](https://github.com/MeilCli/gradle-update-check-action)
- [Send a Push Notification via Pushbullet ![GitHub Repo Stars](https://img.shields.io/github/stars/ShaunLWM/action-pushbullet) ![GitHub last commit](https://img.shields.io/github/last-commit/ShaunLWM/action-pushbullet)](https://github.com/ShaunLWM/action-pushbullet)
- [Create an Outlook Calendar Event using Microsoft Graph ![GitHub Repo Stars](https://img.shields.io/github/stars/anoopt/ms-graph-create-event) ![GitHub last commit](https://img.shields.io/github/last-commit/anoopt/ms-graph-create-event)](https://github.com/anoopt/ms-graph-create-event)
- [Watch for GitHub Wiki page changes and post to Slack ![GitHub Repo Stars](https://img.shields.io/github/stars/benmatselby/gollum-page-watcher-action) ![GitHub last commit](https://img.shields.io/github/last-commit/benmatselby/gollum-page-watcher-action)](https://github.com/benmatselby/gollum-page-watcher-action)
- [Send an SMS using MessageBird ![GitHub Repo Stars](https://img.shields.io/github/stars/nikitasavinov/messagebird-sms-action) ![GitHub last commit](https://img.shields.io/github/last-commit/nikitasavinov/messagebird-sms-action)](https://github.com/nikitasavinov/messagebird-sms-action)
- [Reply to Stale Bots ![GitHub Repo Stars](https://img.shields.io/github/stars/c-hive/fresh-bot) ![GitHub last commit](https://img.shields.io/github/last-commit/c-hive/fresh-bot)](https://github.com/c-hive/fresh-bot)
- [Send an Embed Message to Discord ![GitHub Repo Stars](https://img.shields.io/github/stars/sarisia/actions-status-discord) ![GitHub last commit](https://img.shields.io/github/last-commit/sarisia/actions-status-discord)](https://github.com/sarisia/actions-status-discord)
- [Keep Your PRs in Sync With Teamwork Tasks ![GitHub Repo Stars](https://img.shields.io/github/stars/Teamwork/github-sync) ![GitHub last commit](https://img.shields.io/github/last-commit/Teamwork/github-sync)](https://github.com/Teamwork/github-sync)
- [Send Microsoft Teams Notification ![GitHub Repo Stars](https://img.shields.io/github/stars/opsless/ms-teams-github-actions) ![GitHub last commit](https://img.shields.io/github/last-commit/opsless/ms-teams-github-actions)](https://github.com/opsless/ms-teams-github-actions)

### Deployment

- [Deploy to Netlify ![GitHub Repo Stars](https://img.shields.io/github/stars/netlify/actions) ![GitHub last commit](https://img.shields.io/github/last-commit/netlify/actions)](https://github.com/netlify/actions)
- [Deploy a Probot App using Actions](https://probot.github.io/docs/deployment/#github-actions)
- [Deploy a playlist to Spotify ![GitHub Repo Stars](https://img.shields.io/github/stars/swinton/SpotHub) ![GitHub last commit](https://img.shields.io/github/last-commit/swinton/SpotHub)](https://github.com/swinton/SpotHub)
- [Deploy VS Code extensions with vsce ![GitHub Repo Stars](https://img.shields.io/github/stars/lannonbr/vsce-action) ![GitHub last commit](https://img.shields.io/github/last-commit/lannonbr/vsce-action)](https://github.com/lannonbr/vsce-action)
- [Purge Cloudflare cache after updating a website ![GitHub Repo Stars](https://img.shields.io/github/stars/jakejarvis/cloudflare-purge-action) ![GitHub last commit](https://img.shields.io/github/last-commit/jakejarvis/cloudflare-purge-action)](https://github.com/jakejarvis/cloudflare-purge-action)
- [Deploy your DNS configuration using DNS Control ![GitHub Repo Stars](https://img.shields.io/github/stars/koenrh/dnscontrol-action) ![GitHub last commit](https://img.shields.io/github/last-commit/koenrh/dnscontrol-action)](https://github.com/koenrh/dnscontrol-action)
- [Deploy a Theme to Shopify ![GitHub Repo Stars](https://img.shields.io/github/stars/pgrimaud/action-shopify) ![GitHub last commit](https://img.shields.io/github/last-commit/pgrimaud/action-shopify)](https://github.com/pgrimaud/action-shopify)
- [Trigger multiple GitLab CI Pipeline ![GitHub Repo Stars](https://img.shields.io/github/stars/appleboy/gitlab-ci-action) ![GitHub last commit](https://img.shields.io/github/last-commit/appleboy/gitlab-ci-action)](https://github.com/appleboy/gitlab-ci-action)
- [Trigger multiple Jenkins Jobs ![GitHub Repo Stars](https://img.shields.io/github/stars/appleboy/jenkins-action) ![GitHub last commit](https://img.shields.io/github/last-commit/appleboy/jenkins-action)](https://github.com/appleboy/jenkins-action)
- [GitHub Action for Homebrew Tap ![GitHub Repo Stars](https://img.shields.io/github/stars/izumin5210/action-homebrew-tap) ![GitHub last commit](https://img.shields.io/github/last-commit/izumin5210/action-homebrew-tap)](https://github.com/izumin5210/action-homebrew-tap)
- [Copy files and artifacts via SSH ![GitHub Repo Stars](https://img.shields.io/github/stars/appleboy/scp-action) ![GitHub last commit](https://img.shields.io/github/last-commit/appleboy/scp-action)](https://github.com/appleboy/scp-action)
- [Executing remote ssh commands ![GitHub Repo Stars](https://img.shields.io/github/stars/appleboy/ssh-action) ![GitHub last commit](https://img.shields.io/github/last-commit/appleboy/ssh-action)](https://github.com/appleboy/ssh-action)
- [Publish a Python distribution package to PyPI ![GitHub Repo Stars](https://img.shields.io/github/stars/pypa/gh-action-pypi-publish) ![GitHub last commit](https://img.shields.io/github/last-commit/pypa/gh-action-pypi-publish)](https://github.com/pypa/gh-action-pypi-publish)
- [Deploy Static Website to Azure Storage ![GitHub Repo Stars](https://img.shields.io/github/stars/feeloor/azure-static-website-deploy) ![GitHub last commit](https://img.shields.io/github/last-commit/feeloor/azure-static-website-deploy)](https://github.com/feeloor/azure-static-website-deploy)
- [Cross platform Chocolatey CLI to build and publish packages ![GitHub Repo Stars](https://img.shields.io/github/stars/crazy-max/ghaction-chocolatey) ![GitHub last commit](https://img.shields.io/github/last-commit/crazy-max/ghaction-chocolatey)](https://github.com/crazy-max/ghaction-chocolatey)
- [Deploy iOS Pod Library to Cocoapods ![GitHub Repo Stars](https://img.shields.io/github/stars/michaelhenry/deploy-to-cocoapods-github-action) ![GitHub last commit](https://img.shields.io/github/last-commit/michaelhenry/deploy-to-cocoapods-github-action)](https://github.com/michaelhenry/deploy-to-cocoapods-github-action)
- [GitHub Action for TencentCloud Serverless ![GitHub Repo Stars](https://img.shields.io/github/stars/Juliiii/action-scf) ![GitHub last commit](https://img.shields.io/github/last-commit/Juliiii/action-scf)](https://github.com/Juliiii/action-scf)
- [Publish npm (pre)releases ![GitHub Repo Stars](https://img.shields.io/github/stars/epeli/npm-release) ![GitHub last commit](https://img.shields.io/github/last-commit/epeli/npm-release)](https://github.com/epeli/npm-release/)
- [Deploy a static site to Surge.sh ![GitHub Repo Stars](https://img.shields.io/github/stars/yavisht/deploy-via-surge.sh-github-action-template) ![GitHub last commit](https://img.shields.io/github/last-commit/yavisht/deploy-via-surge.sh-github-action-template)](https://github.com/yavisht/deploy-via-surge.sh-github-action-template)
- [GitHub Action for GoReleaser, a release automation tool for Go projects ![GitHub Repo Stars](https://img.shields.io/github/stars/goreleaser/goreleaser-action) ![GitHub last commit](https://img.shields.io/github/last-commit/goreleaser/goreleaser-action)](https://github.com/goreleaser/goreleaser-action)
- [FTP Deploy Action, Deploys a GitHub project to a FTP server using GitHub actions ![GitHub Repo Stars](https://img.shields.io/github/stars/SamKirkland/FTP-Deploy-Action) ![GitHub last commit](https://img.shields.io/github/last-commit/SamKirkland/FTP-Deploy-Action)](https://github.com/SamKirkland/FTP-Deploy-Action)
- [Publish Article to Dev.to ![GitHub Repo Stars](https://img.shields.io/github/stars/tylerauerbeck/publish-to-dev.to-action) ![GitHub last commit](https://img.shields.io/github/last-commit/tylerauerbeck/publish-to-dev.to-action)](https://github.com/tylerauerbeck/publish-to-dev.to-action)
- [Action For Semantic Release ![GitHub Repo Stars](https://img.shields.io/github/stars/cycjimmy/semantic-release-action) ![GitHub last commit](https://img.shields.io/github/last-commit/cycjimmy/semantic-release-action)](https://github.com/cycjimmy/semantic-release-action)
- [Deploy a Collection to Ansible Galaxy ![GitHub Repo Stars](https://img.shields.io/github/stars/artis3n/ansible_galaxy_collection) ![GitHub last commit](https://img.shields.io/github/last-commit/artis3n/ansible_galaxy_collection)](https://github.com/artis3n/ansible_galaxy_collection)
- [Publish module to Puppet Forge ![GitHub Repo Stars](https://img.shields.io/github/stars/barnumbirr/action-forge-publish) ![GitHub last commit](https://img.shields.io/github/last-commit/barnumbirr/action-forge-publish)](https://github.com/barnumbirr/action-forge-publish)
- [Build and publish Electron apps ![GitHub Repo Stars](https://img.shields.io/github/stars/samuelmeuli/action-electron-builder) ![GitHub last commit](https://img.shields.io/github/last-commit/samuelmeuli/action-electron-builder)](https://github.com/samuelmeuli/action-electron-builder)
- [Publish a Maven package ![GitHub Repo Stars](https://img.shields.io/github/stars/samuelmeuli/action-maven-publish) ![GitHub last commit](https://img.shields.io/github/last-commit/samuelmeuli/action-maven-publish)](https://github.com/samuelmeuli/action-maven-publish)
- [Build and deploy a theme to Ghost CMS ![GitHub Repo Stars](https://img.shields.io/github/stars/TryGhost/action-deploy-theme) ![GitHub last commit](https://img.shields.io/github/last-commit/TryGhost/action-deploy-theme)](https://github.com/TryGhost/action-deploy-theme)
- [Deploy an Ansible role to Ansible Galaxy ![GitHub Repo Stars](https://img.shields.io/github/stars/robertdebock/galaxy-action) ![GitHub last commit](https://img.shields.io/github/last-commit/robertdebock/galaxy-action)](https://github.com/robertdebock/galaxy-action)
- [Publish one or more JS modules to a registry ![GitHub Repo Stars](https://img.shields.io/github/stars/author/action-publish) ![GitHub last commit](https://img.shields.io/github/last-commit/author/action-publish)](https://github.com/author/action-publish)
- [Publish a package with 2FA using Slack ![GitHub Repo Stars](https://img.shields.io/github/stars/erezrokah/2fa-with-slack-action) ![GitHub last commit](https://img.shields.io/github/last-commit/erezrokah/2fa-with-slack-action)](https://github.com/erezrokah/2fa-with-slack-action)
- [Serialize Workflow Runs in Continuous Deployment Pipelines ![GitHub Repo Stars](https://img.shields.io/github/stars/softprops/turnstyle) ![GitHub last commit](https://img.shields.io/github/last-commit/softprops/turnstyle)](https://github.com/softprops/turnstyle)
- [Netlify Deploy GitHub Action for each commit ![GitHub Repo Stars](https://img.shields.io/github/stars/nwtgck/actions-netlify) ![GitHub last commit](https://img.shields.io/github/last-commit/nwtgck/actions-netlify)](https://github.com/nwtgck/actions-netlify)
- [Run Ansible Playbooks ![GitHub Repo Stars](https://img.shields.io/github/stars/arillso/action.playbook) ![GitHub last commit](https://img.shields.io/github/last-commit/arillso/action.playbook)](https://github.com/arillso/action.playbook)
- [Publish a Python Distribution Package to Anaconda Cloud ![GitHub Repo Stars](https://img.shields.io/github/stars/fcakyon/conda-publish-action) ![GitHub last commit](https://img.shields.io/github/last-commit/fcakyon/conda-publish-action)](https://github.com/fcakyon/conda-publish-action)
- [Deploy VS Code Extension to Visual Studio Marketplace or the Open VSX Registry ![GitHub Repo Stars](https://img.shields.io/github/stars/HaaLeo/publish-vscode-extension) ![GitHub last commit](https://img.shields.io/github/last-commit/HaaLeo/publish-vscode-extension)](https://github.com/HaaLeo/publish-vscode-extension)
- [Deploy a YouTube Video to Anchor.fm Podcast ![GitHub Repo Stars](https://img.shields.io/github/stars/Schrodinger-Hat/youtube-to-anchorfm) ![GitHub last commit](https://img.shields.io/github/last-commit/Schrodinger-Hat/youtube-to-anchorfm)](https://github.com/Schrodinger-Hat/youtube-to-anchorfm)
- [Deploy with AWS CodeDeploy ![GitHub Repo Stars](https://img.shields.io/github/stars/webfactory/create-aws-codedeploy-deployment) ![GitHub last commit](https://img.shields.io/github/last-commit/webfactory/create-aws-codedeploy-deployment)](https://github.com/webfactory/create-aws-codedeploy-deployment)

#### Docker

- [Update a Docker Hub repository description from README.md ![GitHub Repo Stars](https://img.shields.io/github/stars/peter-evans/dockerhub-description) ![GitHub last commit](https://img.shields.io/github/last-commit/peter-evans/dockerhub-description)](https://github.com/peter-evans/dockerhub-description)
- [Publish Docker Images to the GitHub Package Registry (GPR) ![GitHub Repo Stars](https://img.shields.io/github/stars/machine-learning-apps/gpr-docker-publish) ![GitHub last commit](https://img.shields.io/github/last-commit/machine-learning-apps/gpr-docker-publish)](https://github.com/machine-learning-apps/gpr-docker-publish)
- [Update a repository's "Full description" on Docker Hub ![GitHub Repo Stars](https://img.shields.io/github/stars/mpepping/github-actions) ![GitHub last commit](https://img.shields.io/github/last-commit/mpepping/github-actions)](https://github.com/mpepping/github-actions/tree/master/docker-hub-metadata)
- [Build and publish docker images to any registry using Kaniko ![GitHub Repo Stars](https://img.shields.io/github/stars/outillage/kaniko-action) ![GitHub last commit](https://img.shields.io/github/last-commit/outillage/kaniko-action)](https://github.com/outillage/kaniko-action)
- [Monitor and limit your docker image size ![GitHub Repo Stars](https://img.shields.io/github/stars/wemake-services/docker-image-size-limit) ![GitHub last commit](https://img.shields.io/github/last-commit/wemake-services/docker-image-size-limit)](https://github.com/wemake-services/docker-image-size-limit)
- [Publish Docker Images to the Amazon Elastic Container Registry (ECR) ![GitHub Repo Stars](https://img.shields.io/github/stars/appleboy/docker-ecr-action) ![GitHub last commit](https://img.shields.io/github/last-commit/appleboy/docker-ecr-action)](https://github.com/appleboy/docker-ecr-action)
- [Build And Push Your Docker Images Caching Each Stage To Reduce Build Time ![GitHub Repo Stars](https://img.shields.io/github/stars/whoan/docker-build-with-cache-action) ![GitHub last commit](https://img.shields.io/github/last-commit/whoan/docker-build-with-cache-action)](https://github.com/whoan/docker-build-with-cache-action)
- [Set up Docker Buildx ![GitHub Repo Stars](https://img.shields.io/github/stars/crazy-max/ghaction-docker-buildx) ![GitHub last commit](https://img.shields.io/github/last-commit/crazy-max/ghaction-docker-buildx)](https://github.com/crazy-max/ghaction-docker-buildx)
- [Convert Branch or Tag Name Into Docker-Compatible Image Tag ![GitHub Repo Stars](https://img.shields.io/github/stars/ankitvgupta/ref-to-tag-action) ![GitHub last commit](https://img.shields.io/github/last-commit/ankitvgupta/ref-to-tag-action)](https://github.com/ankitvgupta/ref-to-tag-action/)
- [Update a Container Repository Description From README.md ![GitHub Repo Stars](https://img.shields.io/github/stars/marketplace/actions) ![GitHub last commit](https://img.shields.io/github/last-commit/marketplace/actions)](https://github.com/marketplace/actions/update-container-description-action) - Supported Registries: Docker Hub, Quay, Harbor.

#### Kubernetes

- [Deploy to any Cloud or Kubernetes Using Pulumi ![GitHub Repo Stars](https://img.shields.io/github/stars/pulumi/actions) ![GitHub last commit](https://img.shields.io/github/last-commit/pulumi/actions)](https://github.com/pulumi/actions)
- [Deploy to Kubernetes with kubectl ![GitHub Repo Stars](https://img.shields.io/github/stars/steebchen/kubectl) ![GitHub last commit](https://img.shields.io/github/last-commit/steebchen/kubectl)](https://github.com/steebchen/kubectl)
- [Get Kubeconfig File From Google Kubernetes Engine (GKE) ![GitHub Repo Stars](https://img.shields.io/github/stars/machine-learning-apps/gke-kubeconfig) ![GitHub last commit](https://img.shields.io/github/last-commit/machine-learning-apps/gke-kubeconfig)](https://github.com/machine-learning-apps/gke-kubeconfig)
- [Kustomize Kubernetes Config YAMLs ![GitHub Repo Stars](https://img.shields.io/github/stars/karancode/kustomize-github-action) ![GitHub last commit](https://img.shields.io/github/last-commit/karancode/kustomize-github-action)](https://github.com/karancode/kustomize-github-action)
- [Create a Kubernetes Cluster for Testing Using Krucible ![GitHub Repo Stars](https://img.shields.io/github/stars/Krucible/krucible-github-action) ![GitHub last commit](https://img.shields.io/github/last-commit/Krucible/krucible-github-action)](https://github.com/Krucible/krucible-github-action)

#### AWS

- [Sync/upload a directory to an AWS S3 bucket ![GitHub Repo Stars](https://img.shields.io/github/stars/jakejarvis/s3-sync-action) ![GitHub last commit](https://img.shields.io/github/last-commit/jakejarvis/s3-sync-action)](https://github.com/jakejarvis/s3-sync-action)
- [Deploy Lambda code to an existing function ![GitHub Repo Stars](https://img.shields.io/github/stars/appleboy/lambda-action) ![GitHub last commit](https://img.shields.io/github/last-commit/appleboy/lambda-action)](https://github.com/appleboy/lambda-action)

#### Terraform

- [Generate terraform documentation ![GitHub Repo Stars](https://img.shields.io/github/stars/Dirrk/terraform-docs) ![GitHub last commit](https://img.shields.io/github/last-commit/Dirrk/terraform-docs)](https://github.com/Dirrk/terraform-docs) - Uses terraform-docs to generate docs for terraform modules.
- [An example of using Terraform to validate and apply GitHub administration ![GitHub Repo Stars](https://img.shields.io/github/stars/asgharlabs/github-terraform) ![GitHub last commit](https://img.shields.io/github/last-commit/asgharlabs/github-terraform)](https://github.com/asgharlabs/github-terraform/tree/master/.github/workflows)

### External Services

- [Use a Jenkinsfile ![GitHub Repo Stars](https://img.shields.io/github/stars/jonico/jenkinsfile-runner-github-actions) ![GitHub last commit](https://img.shields.io/github/last-commit/jonico/jenkinsfile-runner-github-actions)](https://github.com/jonico/jenkinsfile-runner-github-actions)
- [GitHub Action for Firebase ![GitHub Repo Stars](https://img.shields.io/github/stars/w9jds/firebase-action) ![GitHub last commit](https://img.shields.io/github/last-commit/w9jds/firebase-action)](https://github.com/w9jds/firebase-action)
- [GitHub Action for Contentful Migration CLI ![GitHub Repo Stars](https://img.shields.io/github/stars/Shy/contentful-action) ![GitHub last commit](https://img.shields.io/github/last-commit/Shy/contentful-action)](https://github.com/Shy/contentful-action)
- [GitHub Actions for Pixela (a-know/pi) ![GitHub Repo Stars](https://img.shields.io/github/stars/peaceiris/actions-pixela) ![GitHub last commit](https://img.shields.io/github/last-commit/peaceiris/actions-pixela)](https://github.com/peaceiris/actions-pixela)
- [GitHub Action for Google Cloud Platform (GCP) ![GitHub Repo Stars](https://img.shields.io/github/stars/exelban/gcloud) ![GitHub last commit](https://img.shields.io/github/last-commit/exelban/gcloud)](https://github.com/exelban/gcloud)
- [Upload files to any OpenStack Swift service provider ![GitHub Repo Stars](https://img.shields.io/github/stars/iksaku/openstack-swift-action) ![GitHub last commit](https://img.shields.io/github/last-commit/iksaku/openstack-swift-action)](https://github.com/iksaku/openstack-swift-action)
- [GitHub Action for sending Stack Overflow posts to Slack ![GitHub Repo Stars](https://img.shields.io/github/stars/logankilpatrick/StackOverflowBot) ![GitHub last commit](https://img.shields.io/github/last-commit/logankilpatrick/StackOverflowBot)](https://github.com/logankilpatrick/StackOverflowBot)
- [Assume AWS role ![GitHub Repo Stars](https://img.shields.io/github/stars/nordcloud/aws-assume-role) ![GitHub last commit](https://img.shields.io/github/last-commit/nordcloud/aws-assume-role)](https://github.com/nordcloud/aws-assume-role/)
- [Generate Custom Response using JSONbin ![GitHub Repo Stars](https://img.shields.io/github/stars/fabasoad/jsonbin-action) ![GitHub last commit](https://img.shields.io/github/last-commit/fabasoad/jsonbin-action)](https://github.com/fabasoad/jsonbin-action)

### Frontend Tools

- [Execute Gradle task ![GitHub Repo Stars](https://img.shields.io/github/stars/MrRamych/gradle-actions) ![GitHub last commit](https://img.shields.io/github/last-commit/MrRamych/gradle-actions)](https://github.com/MrRamych/gradle-actions)
- [JS Build Actions ![GitHub Repo Stars](https://img.shields.io/github/stars/elstudio/actions-js-build) ![GitHub last commit](https://img.shields.io/github/last-commit/elstudio/actions-js-build)](https://github.com/elstudio/actions-js-build) - Run Grunt or Gulp build tasks and commit file changes.
- [GitHub Action for Gatsby CLI ![GitHub Repo Stars](https://img.shields.io/github/stars/jzweifel/gatsby-cli-github-action) ![GitHub last commit](https://img.shields.io/github/last-commit/jzweifel/gatsby-cli-github-action)](https://github.com/jzweifel/gatsby-cli-github-action)
- [Runs a WebPageTest audit and prints the results as commit comment ![GitHub Repo Stars](https://img.shields.io/github/stars/JCofman/webPagetestAction) ![GitHub last commit](https://img.shields.io/github/last-commit/JCofman/webPagetestAction)](https://github.com/JCofman/webPagetestAction)
- [GitHub Actions for Hugo extended ![GitHub Repo Stars](https://img.shields.io/github/stars/peaceiris/actions-hugo) ![GitHub last commit](https://img.shields.io/github/last-commit/peaceiris/actions-hugo)](https://github.com/peaceiris/actions-hugo)
- [Generate OG Image ![GitHub Repo Stars](https://img.shields.io/github/stars/BoyWithSilverWings/generate-og-image) ![GitHub last commit](https://img.shields.io/github/last-commit/BoyWithSilverWings/generate-og-image)](https://github.com/BoyWithSilverWings/generate-og-image) - Generate customisable open graph images from Markdown files.
- [GitHub Actions for mdBook ![GitHub Repo Stars](https://img.shields.io/github/stars/peaceiris/actions-mdbook) ![GitHub last commit](https://img.shields.io/github/last-commit/peaceiris/actions-mdbook)](https://github.com/peaceiris/actions-mdbook)
- [Setup Mint ![GitHub Repo Stars](https://img.shields.io/github/stars/fabasoad/setup-mint-action) ![GitHub last commit](https://img.shields.io/github/last-commit/fabasoad/setup-mint-action)](https://github.com/fabasoad/setup-mint-action) - Setup Mint (programming language for writing single page applications).
- [Gatsby AWS S3 Deployment ![GitHub Repo Stars](https://img.shields.io/github/stars/jonelantha/gatsby-s3-action) ![GitHub last commit](https://img.shields.io/github/last-commit/jonelantha/gatsby-s3-action)](https://github.com/jonelantha/gatsby-s3-action) - Deploy Gatsby to S3 (supports CloudFront).

### Machine Learning Ops

- [Submitting Argo Workflows (Cloud Agnostic) ![GitHub Repo Stars](https://img.shields.io/github/stars/machine-learning-apps/actions-argo) ![GitHub last commit](https://img.shields.io/github/last-commit/machine-learning-apps/actions-argo)](https://github.com/machine-learning-apps/actions-argo)
- [Submitting Argo Workflows to GKE ![GitHub Repo Stars](https://img.shields.io/github/stars/machine-learning-apps/gke-argo) ![GitHub last commit](https://img.shields.io/github/last-commit/machine-learning-apps/gke-argo)](https://github.com/machine-learning-apps/gke-argo)
- [Query Experiment Tracking Results From Weights & Biases ![GitHub Repo Stars](https://img.shields.io/github/stars/machine-learning-apps/wandb-action) ![GitHub last commit](https://img.shields.io/github/last-commit/machine-learning-apps/wandb-action)](https://github.com/machine-learning-apps/wandb-action)
- [Run Parameterized Jupyter Notebooks ![GitHub Repo Stars](https://img.shields.io/github/stars/yaananth/run-notebook) ![GitHub last commit](https://img.shields.io/github/last-commit/yaananth/run-notebook)](https://github.com/yaananth/run-notebook)
- [Compile, Deploy and Run Kubeflow Pipeline ![GitHub Repo Stars](https://img.shields.io/github/stars/NikeNano/kubeflow-github-action) ![GitHub last commit](https://img.shields.io/github/last-commit/NikeNano/kubeflow-github-action)](https://github.com/NikeNano/kubeflow-github-action)
- [Automatically Dockerize A Data-Science Repo As A Jupyter Server ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyterhub/repo2docker-action) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyterhub/repo2docker-action)](https://github.com/jupyterhub/repo2docker-action)
- [Azure Machine Learning With GitHub Actions ![GitHub Repo Stars](https://img.shields.io/github/stars/machine-learning-apps/ml-template-azure) ![GitHub last commit](https://img.shields.io/github/last-commit/machine-learning-apps/ml-template-azure)](https://github.com/machine-learning-apps/ml-template-azure)

### Build

- [run-cmake ![GitHub Repo Stars](https://img.shields.io/github/stars/lukka/run-cmake) ![GitHub last commit](https://img.shields.io/github/last-commit/lukka/run-cmake)](https://github.com/lukka/run-cmake) - Multi platform action to build C/C++ software with [CMake](https://cmake.org) and [Ninja](https://ninja-build.org/).
- [run-vcpkg ![GitHub Repo Stars](https://img.shields.io/github/stars/lukka/run-vcpkg) ![GitHub last commit](https://img.shields.io/github/last-commit/lukka/run-vcpkg)](https://github.com/lukka/run-vcpkg) - Multi platform action to build and install C/C++ dependencies with [vcpkg ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/vcpkg) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/vcpkg)](https://github.com/microsoft/vcpkg).
- [Build Go applications for multiplatform ![GitHub Repo Stars](https://img.shields.io/github/stars/izumin5210/action-go-crossbuild) ![GitHub last commit](https://img.shields.io/github/last-commit/izumin5210/action-go-crossbuild)](https://github.com/izumin5210/action-go-crossbuild)
- [Generate ~/.m2/settings.xml for Maven builds ![GitHub Repo Stars](https://img.shields.io/github/stars/whelk-io/maven-settings-xml-action) ![GitHub last commit](https://img.shields.io/github/last-commit/whelk-io/maven-settings-xml-action)](https://github.com/whelk-io/maven-settings-xml-action)
- [Run Pascal Script ![GitHub Repo Stars](https://img.shields.io/github/stars/fabasoad/pascal-action) ![GitHub last commit](https://img.shields.io/github/last-commit/fabasoad/pascal-action)](https://github.com/fabasoad/pascal-action)
- [Setup Brainfuck ![GitHub Repo Stars](https://img.shields.io/github/stars/fabasoad/setup-brainfuck-action) ![GitHub last commit](https://img.shields.io/github/last-commit/fabasoad/setup-brainfuck-action)](https://github.com/fabasoad/setup-brainfuck-action) - Setup brainfuck interpreter.
- [Publish Go Binaries to GitHub Release Assets ![GitHub Repo Stars](https://img.shields.io/github/stars/wangyoucao577/go-release-action) ![GitHub last commit](https://img.shields.io/github/last-commit/wangyoucao577/go-release-action)](https://github.com/wangyoucao577/go-release-action)
- [Setup COBOL ![GitHub Repo Stars](https://img.shields.io/github/stars/fabasoad/setup-cobol-action) ![GitHub last commit](https://img.shields.io/github/last-commit/fabasoad/setup-cobol-action)](https://github.com/fabasoad/setup-cobol-action)

### Database

- [Setup Cassandra Schema ![GitHub Repo Stars](https://img.shields.io/github/stars/fabasoad/setup-cassandra-action) ![GitHub last commit](https://img.shields.io/github/last-commit/fabasoad/setup-cassandra-action)](https://github.com/fabasoad/setup-cassandra-action) - Running scripts from the provided folder on top of Cassandra cluster.

### Localization

- [Find and automatically fix typos and grammar issues in your code ![GitHub Repo Stars](https://img.shields.io/github/stars/sobolevn/misspell-fixer-action) ![GitHub last commit](https://img.shields.io/github/last-commit/sobolevn/misspell-fixer-action)](https://github.com/sobolevn/misspell-fixer-action)
- [Translation ![GitHub Repo Stars](https://img.shields.io/github/stars/fabasoad/translation-action) ![GitHub last commit](https://img.shields.io/github/last-commit/fabasoad/translation-action)](https://github.com/fabasoad/translation-action) - Translate text from any language to any language.

### Fun

- [Add equivalent of a like button in your README ![GitHub Repo Stars](https://img.shields.io/github/stars/ariary/Readme-Like-Button) ![GitHub last commit](https://img.shields.io/github/last-commit/ariary/Readme-Like-Button)](https://github.com/ariary/Readme-Like-Button) - Visualize community approval on some part of your readme (can be used as a poll).

### Cheat Sheet

- [GitHub Actions Branding Cheat Sheet](https://haya14busa.github.io/github-action-brandings/)

## Tutorials

- [Continuous deployment of Next.js app with Up](https://medium.com/@romanenko/simple-ci-for-next-js-projects-with-apex-up-github-actions-6f0b1b9a5400)
- [Converting Docker-based Actions to JavaScript/TypeScript](https://httgp.com/converting-github-actions-from-docker-to-javascript/)
- [GitHub Actions CI for Swift/iOS Projects](https://medium.com/rosberryapps/github-actions-ci-for-swift-projects-c129baceed1a)
- [Working with GitHub Actions](https://jeffrafter.com/working-with-github-actions)
- [GitHub Actions for Rails Developers](https://www.youtube.com/watch?v=gGUXydw22zw)
- [GitHub Actions Advent Calendar](https://www.edwardthomson.com/blog/github_actions_advent_calendar.html)
- [Zero Downtime Laravel Deployments with GitHub Actions](https://atymic.dev/blog/github-actions-laravel-ci-cd/)
- [Building Custom GitHub Actions Pluralsight Course](https://www.pluralsight.com/courses/building-custom-github-actions/)
- [Continuously Deploying Django to DigitalOcean with Docker and GitHub Actions](https://testdriven.io/blog/deploying-django-to-digitalocean-with-docker-and-github-actions/)
- [Deploying Self-Hosted GitHub Actions Runners with Docker](https://testdriven.io/blog/github-actions-docker/) - Deploy self-hosted GitHub Actions runners with Docker and Docker Swarm to DigitalOcean.
- [Setup Auto-scaled self-hosted GitHub Actions Runners on AWS Spot-instances](https://040code.github.io/2020/05/25/scaling-selfhosted-action-runners)
- [Getting the Gist of GitHub Actions](https://gist.github.com/br3ndonland/f9c753eb27381f97336aa21b8d932be6)

> Please don't hesitate to make a PR if you have more resources to share. Check out [contributing.md](contributing.md) for more information.
