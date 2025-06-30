<!--lint disable remark-lint:awesome-badge-->

#

<!-- [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re) -->

<pre style="display: inline-block; text-align: left;">
 █████┐ ██┐    ██┐███████┐███████┐ ██████┐ ███┐   ███┐███████┐
██┌──██┐██│    ██│██┌────┘██┌────┘██┌───██┐████┐ ████│██┌────┘
███████│██│ █┐ ██│█████┐  ███████┐██│   ██│██┌████┌██│█████┐
██┌──██│██│███┐██│██┌──┘  └────██│██│   ██│██│└██┌┘██│██┌──┘
██│  ██│└███┌███┌┘███████┐███████│└██████┌┘██│ └─┘ ██│███████┐
└─┘  └─┘ └──┘└──┘ └──────┘└──────┘ └─────┘ └─┘     └─┘└──────┘

 ────────────────────────────────────────────────────────────────────────────────────

 ██████┐██┐      █████┐ ██┐   ██┐██████┐ ███████┐     ██████┐ ██████┐ ██████┐ ███████┐
██┌────┘██│     ██┌──██┐██│   ██│██┌──██┐██┌────┘    ██┌────┘██┌───██┐██┌──██┐██┌────┘
██│     ██│     ███████│██│   ██│██│  ██│█████┐      ██│     ██│   ██│██│  ██│█████┐
██│     ██│     ██┌──██│██│   ██│██│  ██│██┌──┘      ██│     ██│   ██│██│  ██│██┌──┘
└██████┐███████┐██│  ██│└██████┌┘██████┌┘███████┐    └██████┐└██████┌┘██████┌┘███████┐
 └─────┘└──────┘└─┘  └─┘ └─────┘ └─────┘ └──────┘     └─────┘ └─────┘ └─────┘ └──────┘
</pre>

<!--lint enable remark-lint:awesome-badge-->

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

<!--lint enable remark-lint:awesome-badge-->

<!--lint disable double-link-->

This is a curated list of slash-commands, `CLAUDE.md` files, CLI tools, and other resources and guides for enhancing your [Claude Code](https://docs.anthropic.com/en/docs/claude-code) workflow, productivity, and vibes.

<!--lint enable double-link-->

Claude Code is a cutting-edge CLI-based coding assistant and agent that you can access in your terminal or IDE. It is a rapidly evolving tool that offers a number of powerful capabilities, and allows for a lot of configuration, in a lot of different ways. Users are actively working out best practices and workflows. It is the hope that this repo will help the community share knowledge and understand how to get the most out of Claude Code.

<br>

## Contents

▪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Workflows & Knowledge Guides](#workflows--knowledge-guides)  
▪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Tooling](#tooling)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[IDE Integrations](#ide-integrations)  
▪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Slash-Commands](#slash-commands)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Version Control & Git](#version-control--git)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Code Analysis & Testing](#code-analysis--testing)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Context Loading & Priming](#context-loading--priming)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Documentation & Changelogs](#documentation--changelogs)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[CI / Deployment](#ci--deployment)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Project & Task Management](#project--task-management)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Miscellaneous](#miscellaneous)  
▪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[CLAUDE.md Files](#claudemd-files)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Language-Specific](#language-specific)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Domain-Specific](#domain-specific)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▫&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Project Scaffolding & MCP](#project-scaffolding--mcp)  
▪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Official Documentation](#official-documentation)

<br>

## Workflows & Knowledge Guides

> A **workflow** is a tightly coupled set of Claude Code-native resources that facilitate specific projects

[`Blogging Platform Instructions` ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudartisan/cloudartisan.github.io) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudartisan/cloudartisan.github.io)](https://github.com/cloudartisan/cloudartisan.github.io/tree/main/.claude/commands) by [cloudartisan](https://github.com/cloudartisan) ⚖️ CC-BY-SA-4.0  
Provides a well-structured set of commands for publishing and maintaining a blogging platform, including commands for creating posts, managing categories, and handling media files.

[`ClaudeLog`](https://claudelog.com) by [InventorBlack](https://www.reddit.com/user/inventor_black/)  
A comprehensive knowledge repository that features detailed breakdowns of advanced Claude Code mechanics including [CLAUDE.md best practices](https://claudelog.com/mechanics/claude-md-supremacy), practical technique guides like [plan mode](https://claudelog.com/mechanics/plan-mode), and a [configuration guide](https://claudelog.com/configuration).

[`Context Priming` ![GitHub Repo Stars](https://img.shields.io/github/stars/disler/just-prompt) ![GitHub last commit](https://img.shields.io/github/last-commit/disler/just-prompt)](https://github.com/disler/just-prompt/tree/main/.claude/commands) by [disler](https://github.com/disler)  
Provides a systematic approach to priming Claude Code with comprehensive project context through specialized commands for different project scenarios and development contexts.

[`n8n_agent` ![GitHub Repo Stars](https://img.shields.io/github/stars/kingler/n8n_agent) ![GitHub last commit](https://img.shields.io/github/last-commit/kingler/n8n_agent)](https://github.com/kingler/n8n_agent/tree/main/.claude/commands) by [kingler](https://github.com/kingler)  
Amazing comprehensive set of comments for code analysis, QA, design, documentation, project structure, project management, optimization, and many more.

[`Project Bootstrapping and Task Management` ![GitHub Repo Stars](https://img.shields.io/github/stars/steadycursor/steadystart) ![GitHub last commit](https://img.shields.io/github/last-commit/steadycursor/steadystart)](https://github.com/steadycursor/steadystart/tree/main/.claude/commands) by [steadycursor](https://github.com/steadycursor)  
Provides a structured set of commands for bootstrapping and managing a new project, including meta-commands for creating and editing custom slash-commands.

[`Project Management, Implementation, Planning, and Release` ![GitHub Repo Stars](https://img.shields.io/github/stars/scopecraft/command) ![GitHub last commit](https://img.shields.io/github/last-commit/scopecraft/command)](https://github.com/scopecraft/command/tree/main/.claude/commands) by [scopecraft](https://github.com/scopecraft)  
Really comprehensive set of commands for all aspects of SDLC.

[`Project Workflow System` ![GitHub Repo Stars](https://img.shields.io/github/stars/harperreed/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/harperreed/dotfiles)](https://github.com/harperreed/dotfiles/tree/master/.claude/commands) by [harperreed](https://github.com/harperreed)  
A set of commands that provide a comprehensive workflow system for managing projects, including task management, code review, and deployment processes.

[`Simone` ![GitHub Repo Stars](https://img.shields.io/github/stars/Helmi/claude-simone) ![GitHub last commit](https://img.shields.io/github/last-commit/Helmi/claude-simone)](https://github.com/Helmi/claude-simone) by [Helmi](https://github.com/Helmi) ⚖️ MIT  
A broader project management workflow for Claude Code that encompasses not just a set of commands, but a system of documents, guidelines, and processes to facilitate project planning and execution.

[`Slash-commands megalist` ![GitHub Repo Stars](https://img.shields.io/github/stars/wcygan/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/wcygan/dotfiles)](https://github.com/wcygan/dotfiles/tree/d8ab6b9f5a7a81007b7f5fa3025d4f83ce12cc02/claude/commands) by [wcygan](https://github.com/wcygan)  
A pretty stunning list (88 at the time of this post!) of slash-commands ranging from agent orchestration, code review, project management, security, documentation, self-assessment, almost anything you can dream of.

<br>

## Tooling

> **Tooling** denotes applications that are built on top of Claude Code and consist of more components than slash-commands and `CLAUDE.md` files

[`CC Usage` ![GitHub Repo Stars](https://img.shields.io/github/stars/ryoppippi/ccusage) ![GitHub last commit](https://img.shields.io/github/last-commit/ryoppippi/ccusage)](https://github.com/ryoppippi/ccusage) by [ryoppippi](https://github.com/ryoppippi) ⚖️ MIT  
Handy CLI tool for managing and analyzing Claude Code usage, based on analyzing local Claude Code logs. Presents a nice dashboard regarding cost information, token consumption, etc.

[`Claude Code Flow` ![GitHub Repo Stars](https://img.shields.io/github/stars/ruvnet/claude-code-flow) ![GitHub last commit](https://img.shields.io/github/last-commit/ruvnet/claude-code-flow)](https://github.com/ruvnet/claude-code-flow) by [ruvnet](https://github.com/ruvnet) ⚖️ MIT  
This mode serves as a code-first orchestration layer, enabling Claude to write, edit, test, and optimize code autonomously across recursive agent cycles.

[`Claude Composer` ![GitHub Repo Stars](https://img.shields.io/github/stars/possibilities/claude-composer) ![GitHub last commit](https://img.shields.io/github/last-commit/possibilities/claude-composer)](https://github.com/possibilities/claude-composer) by [Mike Bannister](https://github.com/possibilities)  
A tool that adds small enhancements to Claude Code.

[`Claude Hub` ![GitHub Repo Stars](https://img.shields.io/github/stars/claude-did-this/claude-hub) ![GitHub last commit](https://img.shields.io/github/last-commit/claude-did-this/claude-hub)](https://github.com/claude-did-this/claude-hub) by [Claude Did This](https://github.com/claude-did-this)  
A webhook service that connects Claude Code to GitHub repositories, enabling AI-powered code assistance directly through pull requests and issues. This integration allows Claude to analyze repositories, answer technical questions, and help developers understand and improve their codebase through simple @mentions.

[`Claude Squad` ![GitHub Repo Stars](https://img.shields.io/github/stars/smtg-ai/claude-squad) ![GitHub last commit](https://img.shields.io/github/last-commit/smtg-ai/claude-squad)](https://github.com/smtg-ai/claude-squad) by [smtg-ai](https://github.com/smtg-ai) ⚖️ AGPL-3.0  
Claude Squad is a terminal app that manages multiple Claude Code, Codex (and other local agents including Aider) in separate workspaces, allowing you to work on multiple tasks simultaneously.

[`Claude Swarm` ![GitHub Repo Stars](https://img.shields.io/github/stars/parruda/claude-swarm) ![GitHub last commit](https://img.shields.io/github/last-commit/parruda/claude-swarm)](https://github.com/parruda/claude-swarm) by [parruda](https://github.com/parruda) ⚖️ MIT  
Launch Claude Code session that is connected to a swarm of Claude Code Agents.

[`Claude Task Master` ![GitHub Repo Stars](https://img.shields.io/github/stars/eyaltoledano/claude-task-master) ![GitHub last commit](https://img.shields.io/github/last-commit/eyaltoledano/claude-task-master)](https://github.com/eyaltoledano/claude-task-master) by [eyaltoledano](https://github.com/eyaltoledano) ⚖️ MIT  
A task management system for AI-driven development with Claude, designed to work seamlessly with Cursor AI.

[`Container Use` ![GitHub Repo Stars](https://img.shields.io/github/stars/dagger/container-use) ![GitHub last commit](https://img.shields.io/github/last-commit/dagger/container-use)](https://github.com/dagger/container-use) by [dagger](https://github.com/dagger) ⚖️ Apache-2.0  
Development environments for coding agents. Enable multiple agents to work safely and independently with your preferred stack.

### IDE Integrations

[`claude-code.el` ![GitHub Repo Stars](https://img.shields.io/github/stars/stevemolitor/claude-code.el) ![GitHub last commit](https://img.shields.io/github/last-commit/stevemolitor/claude-code.el)](https://github.com/stevemolitor/claude-code.el) by [stevemolitor](https://github.com/stevemolitor) ⚖️ Apache-2.0  
An Emacs interface for Claude Code CLI.

[`claude-code.nvim` ![GitHub Repo Stars](https://img.shields.io/github/stars/greggh/claude-code.nvim) ![GitHub last commit](https://img.shields.io/github/last-commit/greggh/claude-code.nvim)](https://github.com/greggh/claude-code.nvim) by [greggh](https://github.com/greggh) ⚖️ MIT  
A seamless integration between Claude Code AI assistant and Neovim.

<br>

## Slash-Commands

### Version Control & Git

[`/2-commit-fast` ![GitHub Repo Stars](https://img.shields.io/github/stars/steadycursor/steadystart) ![GitHub last commit](https://img.shields.io/github/last-commit/steadycursor/steadystart)](https://github.com/steadycursor/steadystart/blob/main/.claude/commands/2-commit-fast.md) by [steadycursor](https://github.com/steadycursor)  
Automates git commit process by selecting the first suggested message, generating structured commits with consistent formatting while skipping manual confirmation and removing Claude co-Contributorship footer

[`/bug-fix` ![GitHub Repo Stars](https://img.shields.io/github/stars/danielscholl/mvn-mcp-server) ![GitHub last commit](https://img.shields.io/github/last-commit/danielscholl/mvn-mcp-server)](https://github.com/danielscholl/mvn-mcp-server/blob/main/.claude/commands/bug-fix.md) by [danielscholl](https://github.com/danielscholl)  
Streamlines bug fixing by creating a GitHub issue first, then a feature branch for implementing and thoroughly testing the solution before merging.

[`/commit` ![GitHub Repo Stars](https://img.shields.io/github/stars/evmts/tevm-monorepo) ![GitHub last commit](https://img.shields.io/github/last-commit/evmts/tevm-monorepo)](https://github.com/evmts/tevm-monorepo/blob/main/.claude/commands/commit.md) by [evmts](https://github.com/evmts) ⚖️ MIT  
Creates git commits using conventional commit format with appropriate emojis, following project standards and creating descriptive messages that explain the purpose of changes.

[`/create-pr` ![GitHub Repo Stars](https://img.shields.io/github/stars/toyamarinyon/giselle) ![GitHub last commit](https://img.shields.io/github/last-commit/toyamarinyon/giselle)](https://github.com/toyamarinyon/giselle/blob/main/.claude/commands/create-pr.md) by [toyamarinyon](https://github.com/toyamarinyon) ⚖️ Apache-2.0  
Streamlines pull request creation by handling the entire workflow: creating a new branch, committing changes, formatting modified files with Biome, and submitting the PR.

[`/create-pull-request` ![GitHub Repo Stars](https://img.shields.io/github/stars/liam-hq/liam) ![GitHub last commit](https://img.shields.io/github/last-commit/liam-hq/liam)](https://github.com/liam-hq/liam/blob/main/.claude/commands/create-pull-request.md) by [liam-hq](https://github.com/liam-hq) ⚖️ Apache-2.0  
Provides comprehensive PR creation guidance with GitHub CLI, enforcing title conventions, following template structure, and offering concrete command examples with best practices.

[`/create-worktrees` ![GitHub Repo Stars](https://img.shields.io/github/stars/evmts/tevm-monorepo) ![GitHub last commit](https://img.shields.io/github/last-commit/evmts/tevm-monorepo)](https://github.com/evmts/tevm-monorepo/blob/main/.claude/commands/create-worktrees.md) by [evmts](https://github.com/evmts) ⚖️ MIT  
Creates git worktrees for all open PRs or specific branches, handling branches with slashes, cleaning up stale worktrees, and supporting custom branch creation for development.

[`/fix-github-issue` ![GitHub Repo Stars](https://img.shields.io/github/stars/jeremymailen/kotlinter-gradle) ![GitHub last commit](https://img.shields.io/github/last-commit/jeremymailen/kotlinter-gradle)](https://github.com/jeremymailen/kotlinter-gradle/blob/master/.claude/commands/fix-github-issue.md) by [jeremymailen](https://github.com/jeremymailen) ⚖️ Apache-2.0  
Analyzes and fixes GitHub issues using a structured approach with GitHub CLI for issue details, implementing necessary code changes, running tests, and creating proper commit messages.

[`/fix-issue` ![GitHub Repo Stars](https://img.shields.io/github/stars/metabase/metabase) ![GitHub last commit](https://img.shields.io/github/last-commit/metabase/metabase)](https://github.com/metabase/metabase/blob/master/.claude/commands/fix-issue.md) by [metabase](https://github.com/metabase) ⚖️ NOASSERTION  
Addresses GitHub issues by taking issue number as parameter, analyzing context, implementing solution, and testing/validating the fix for proper integration.

[`/fix-pr` ![GitHub Repo Stars](https://img.shields.io/github/stars/metabase/metabase) ![GitHub last commit](https://img.shields.io/github/last-commit/metabase/metabase)](https://github.com/metabase/metabase/blob/master/.claude/commands/fix-pr.md) by [metabase](https://github.com/metabase) ⚖️ NOASSERTION  
Fetches and fixes unresolved PR comments by automatically retrieving feedback, addressing reviewer concerns, making targeted code improvements, and streamlining the review process.

[`/husky` ![GitHub Repo Stars](https://img.shields.io/github/stars/evmts/tevm-monorepo) ![GitHub last commit](https://img.shields.io/github/last-commit/evmts/tevm-monorepo)](https://github.com/evmts/tevm-monorepo/blob/main/.claude/commands/husky.md) by [evmts](https://github.com/evmts) ⚖️ MIT  
Sets up and manages Husky Git hooks by configuring pre-commit hooks, establishing commit message standards, integrating with linting tools, and ensuring code quality on commits.

[`/pr-review` ![GitHub Repo Stars](https://img.shields.io/github/stars/arkavo-org/opentdf-rs) ![GitHub last commit](https://img.shields.io/github/last-commit/arkavo-org/opentdf-rs)](https://github.com/arkavo-org/opentdf-rs/blob/main/.claude/commands/pr-review.md) by [arkavo-org](https://github.com/arkavo-org) ⚖️ MIT  
Reviews pull request changes to provide feedback, check for issues, and suggest improvements before merging into the main codebase.

[`/update-branch-name` ![GitHub Repo Stars](https://img.shields.io/github/stars/giselles-ai/giselle) ![GitHub last commit](https://img.shields.io/github/last-commit/giselles-ai/giselle)](https://github.com/giselles-ai/giselle/blob/main/.claude/commands/update-branch-name.md) by [giselles-ai](https://github.com/giselles-ai) ⚖️ Apache-2.0  
Updates branch names with proper prefixes and formats, enforcing naming conventions, supporting semantic prefixes, and managing remote branch updates.

### Code Analysis & Testing

[`/check` ![GitHub Repo Stars](https://img.shields.io/github/stars/rygwdn/slack-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/rygwdn/slack-tools)](https://github.com/rygwdn/slack-tools/blob/main/.claude/commands/check.md) by [rygwdn](https://github.com/rygwdn)  
Performs comprehensive code quality and security checks, featuring static analysis integration, security vulnerability scanning, code style enforcement, and detailed reporting.

[`/clean` ![GitHub Repo Stars](https://img.shields.io/github/stars/Graphlet-AI/eridu) ![GitHub last commit](https://img.shields.io/github/last-commit/Graphlet-AI/eridu)](https://github.com/Graphlet-AI/eridu/blob/main/.claude/commands/clean.md) by [Graphlet-AI](https://github.com/Graphlet-AI) ⚖️ Apache-2.0  
Addresses code formatting and quality issues by fixing black formatting problems, organizing imports with isort, resolving flake8 linting issues, and correcting mypy type errors.

[`/code_analysis` ![GitHub Repo Stars](https://img.shields.io/github/stars/kingler/n8n_agent) ![GitHub last commit](https://img.shields.io/github/last-commit/kingler/n8n_agent)](https://github.com/kingler/n8n_agent/blob/main/.claude/commands/code_analysis.md) by [kingler](https://github.com/kingler)  
Provides a menu of advanced code analysis commands for deep inspection, including knowledge graph generation, optimization suggestions, and quality evaluation.

[`/tdd-implement` ![GitHub Repo Stars](https://img.shields.io/github/stars/jerseycheese/Narraitor) ![GitHub last commit](https://img.shields.io/github/last-commit/jerseycheese/Narraitor)](https://github.com/jerseycheese/Narraitor/blob/feature/issue-227-ai-suggestions/.claude/commands/tdd-implement.md) by [jerseycheese](https://github.com/jerseycheese) ⚖️ MIT  
Implements Test-Driven Development by analyzing feature requirements, creating tests first (red), implementing minimal passing code (green), and refactoring while maintaining tests.

[`/testing_plan_integration` ![GitHub Repo Stars](https://img.shields.io/github/stars/buster-so/buster) ![GitHub last commit](https://img.shields.io/github/last-commit/buster-so/buster)](https://github.com/buster-so/buster/blob/main/api/.claude/commands/testing_plan_integration.md) by [buster-so](https://github.com/buster-so) ⚖️ MIT  
Creates inline Rust-style tests, suggests refactoring for testability, analyzes code challenges, and creates comprehensive test coverage for robust code.

### Context Loading & Priming

[`/context-prime` ![GitHub Repo Stars](https://img.shields.io/github/stars/elizaOS/elizaos.github.io) ![GitHub last commit](https://img.shields.io/github/last-commit/elizaOS/elizaos.github.io)](https://github.com/elizaOS/elizaos.github.io/blob/main/.claude/commands/context-prime.md) by [elizaOS](https://github.com/elizaOS) ⚖️ MIT  
Primes Claude with comprehensive project understanding by loading repository structure, setting development context, establishing project goals, and defining collaboration parameters.

[`/initref` ![GitHub Repo Stars](https://img.shields.io/github/stars/okuvshynov/cubestat) ![GitHub last commit](https://img.shields.io/github/last-commit/okuvshynov/cubestat)](https://github.com/okuvshynov/cubestat/blob/main/.claude/commands/initref.md) by [okuvshynov](https://github.com/okuvshynov) ⚖️ MIT  
Initializes reference documentation structure with standard doc templates, API reference setup, documentation conventions, and placeholder content generation.

[`/load-llms-txt` ![GitHub Repo Stars](https://img.shields.io/github/stars/ethpandaops/xatu-data) ![GitHub last commit](https://img.shields.io/github/last-commit/ethpandaops/xatu-data)](https://github.com/ethpandaops/xatu-data/blob/master/.claude/commands/load-llms-txt.md) by [ethpandaops](https://github.com/ethpandaops) ⚖️ MIT  
Loads LLM configuration files to context, importing specific terminology, model configurations, and establishing baseline terminology for AI discussions.

[`/load_coo_context` ![GitHub Repo Stars](https://img.shields.io/github/stars/Mjvolk3/torchcell) ![GitHub last commit](https://img.shields.io/github/last-commit/Mjvolk3/torchcell)](https://github.com/Mjvolk3/torchcell/blob/main/.claude/commands/load_coo_context.md) by [Mjvolk3](https://github.com/Mjvolk3)  
References specific files for sparse matrix operations, explains transform usage, compares with previous approaches, and sets data formatting context for development.

[`/load_dango_pipeline` ![GitHub Repo Stars](https://img.shields.io/github/stars/Mjvolk3/torchcell) ![GitHub last commit](https://img.shields.io/github/last-commit/Mjvolk3/torchcell)](https://github.com/Mjvolk3/torchcell/blob/main/.claude/commands/load_dango_pipeline.md) by [Mjvolk3](https://github.com/Mjvolk3)  
Sets context for model training by referencing pipeline files, establishing working context, and preparing for pipeline work with relevant documentation.

[`/prime` ![GitHub Repo Stars](https://img.shields.io/github/stars/yzyydev/AI-Engineering-Structure) ![GitHub last commit](https://img.shields.io/github/last-commit/yzyydev/AI-Engineering-Structure)](https://github.com/yzyydev/AI-Engineering-Structure/blob/main/.claude/commands/prime.md) by [yzyydev](https://github.com/yzyydev)  
Sets up initial project context by viewing directory structure and reading key files, creating standardized context with directory visualization and key documentation focus.

[`/rsi` ![GitHub Repo Stars](https://img.shields.io/github/stars/ddisisto/si) ![GitHub last commit](https://img.shields.io/github/last-commit/ddisisto/si)](https://github.com/ddisisto/si/blob/main/.claude/commands/rsi.md) by [ddisisto](https://github.com/ddisisto)  
Reads all commands and key project files to optimize AI-assisted development by streamlining the process, loading command context, and setting up for better development workflow.

### Documentation & Changelogs

[`/add-to-changelog` ![GitHub Repo Stars](https://img.shields.io/github/stars/berrydev-ai/blockdoc-python) ![GitHub last commit](https://img.shields.io/github/last-commit/berrydev-ai/blockdoc-python)](https://github.com/berrydev-ai/blockdoc-python/blob/main/.claude/commands/add-to-changelog.md) by [berrydev-ai](https://github.com/berrydev-ai) ⚖️ MIT  
Adds new entries to changelog files while maintaining format consistency, properly documenting changes, and following established project standards for version tracking.

[`/create-docs` ![GitHub Repo Stars](https://img.shields.io/github/stars/jerseycheese/Narraitor) ![GitHub last commit](https://img.shields.io/github/last-commit/jerseycheese/Narraitor)](https://github.com/jerseycheese/Narraitor/tree/feature/issue-227-ai-suggestions/.claude/commands/analyze-issue.md) by [jerseycheese](https://github.com/jerseycheese) ⚖️ MIT  
Analyzes code structure and purpose to create comprehensive documentation detailing inputs/outputs, behavior, user interaction flows, and edge cases with error handling.

[`/docs` ![GitHub Repo Stars](https://img.shields.io/github/stars/slunsford/coffee-analytics) ![GitHub last commit](https://img.shields.io/github/last-commit/slunsford/coffee-analytics)](https://github.com/slunsford/coffee-analytics/blob/main/.claude/commands/docs.md) by [slunsford](https://github.com/slunsford)  
Generates comprehensive documentation that follows project structure, documenting APIs and usage patterns with consistent formatting for better user understanding.

[`/explain-issue-fix` ![GitHub Repo Stars](https://img.shields.io/github/stars/hackdays-io/toban-contribution-viewer) ![GitHub last commit](https://img.shields.io/github/last-commit/hackdays-io/toban-contribution-viewer)](https://github.com/hackdays-io/toban-contribution-viewer/blob/main/.claude/commands/explain-issue-fix.md) by [hackdays-io](https://github.com/hackdays-io)  
Documents solution approaches for GitHub issues, explaining technical decisions, detailing challenges overcome, and providing implementation context for better understanding.

[`/update-docs` ![GitHub Repo Stars](https://img.shields.io/github/stars/Consiliency/Flutter-Structurizr) ![GitHub last commit](https://img.shields.io/github/last-commit/Consiliency/Flutter-Structurizr)](https://github.com/Consiliency/Flutter-Structurizr/blob/main/.claude/commands/update-docs.md) by [Consiliency](https://github.com/Consiliency) ⚖️ MIT  
Reviews current documentation status, updates implementation progress, reviews phase documents, and maintains documentation consistency across the project.

### CI / Deployment

[`/release` ![GitHub Repo Stars](https://img.shields.io/github/stars/kelp/webdown) ![GitHub last commit](https://img.shields.io/github/last-commit/kelp/webdown)](https://github.com/kelp/webdown/blob/main/.claude/commands/release.md) by [kelp](https://github.com/kelp) ⚖️ MIT  
Manages software releases by updating changelogs, reviewing README changes, evaluating version increments, and documenting release changes for better version tracking.

[`/run-ci` ![GitHub Repo Stars](https://img.shields.io/github/stars/hackdays-io/toban-contribution-viewer) ![GitHub last commit](https://img.shields.io/github/last-commit/hackdays-io/toban-contribution-viewer)](https://github.com/hackdays-io/toban-contribution-viewer/blob/main/.claude/commands/run-ci.md) by [hackdays-io](https://github.com/hackdays-io)  
Activates virtual environments, runs CI-compatible check scripts, iteratively fixes errors, and ensures all tests pass before completion.

### Project & Task Management

[`/create-command` ![GitHub Repo Stars](https://img.shields.io/github/stars/scopecraft/command) ![GitHub last commit](https://img.shields.io/github/last-commit/scopecraft/command)](https://github.com/scopecraft/command/blob/main/.claude/commands/create-command.md) by [scopecraft](https://github.com/scopecraft)  
Guides Claude through creating new custom commands with proper structure by analyzing requirements, templating commands by category, enforcing command standards, and creating supporting documentation.

[`/create-jtbd` ![GitHub Repo Stars](https://img.shields.io/github/stars/taddyorg/inkverse) ![GitHub last commit](https://img.shields.io/github/last-commit/taddyorg/inkverse)](https://github.com/taddyorg/inkverse/blob/main/.claude/commands/create-jtbd.md) by [taddyorg](https://github.com/taddyorg) ⚖️ AGPL-3.0  
Creates Jobs-to-be-Done frameworks that outline user needs with structured format, focusing on specific user problems and organizing by job categories for product development.

[`/create-prd` ![GitHub Repo Stars](https://img.shields.io/github/stars/taddyorg/inkverse) ![GitHub last commit](https://img.shields.io/github/last-commit/taddyorg/inkverse)](https://github.com/taddyorg/inkverse/blob/main/.claude/commands/create-prd.md) by [taddyorg](https://github.com/taddyorg) ⚖️ AGPL-3.0  
Generates comprehensive product requirement documents outlining detailed specifications, requirements, and features following standardized document structure and format.

[`/create-prp` ![GitHub Repo Stars](https://img.shields.io/github/stars/Wirasm/claudecode-utils) ![GitHub last commit](https://img.shields.io/github/last-commit/Wirasm/claudecode-utils)](https://github.com/Wirasm/claudecode-utils/blob/main/.claude/commands/create-prp.md) by [Wirasm](https://github.com/Wirasm) ⚖️ MIT  
Creates product requirement plans by reading PRP methodology, following template structure, creating comprehensive requirements, and structuring product definitions for development.

[`/project_hello_w_name` ![GitHub Repo Stars](https://img.shields.io/github/stars/disler/just-prompt) ![GitHub last commit](https://img.shields.io/github/last-commit/disler/just-prompt)](https://github.com/disler/just-prompt/blob/main/.claude/commands/project_hello_w_name.md) by [disler](https://github.com/disler)  
Creates customizable greeting components with name input, demonstrating argument passing, component reusability, state management, and user input handling.

[`/todo` ![GitHub Repo Stars](https://img.shields.io/github/stars/chrisleyva/todo-slash-command) ![GitHub last commit](https://img.shields.io/github/last-commit/chrisleyva/todo-slash-command)](https://github.com/chrisleyva/todo-slash-command/blob/main/todo.md) by [chrisleyva](https://github.com/chrisleyva) ⚖️ MIT  
A convenient command to quickly manage project todo items without leaving the Claude Code interface, featuring due dates, sorting, task prioritization, and comprehensive todo list management.

### Miscellaneous

[`/act` ![GitHub Repo Stars](https://img.shields.io/github/stars/sotayamashita/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/sotayamashita/dotfiles)](https://github.com/sotayamashita/dotfiles/blob/main/.claude/commands/act.md) by [sotayamashita](https://github.com/sotayamashita) ⚖️ MIT  
Generates React components with proper accessibility, creating ARIA-compliant components with keyboard navigation that follow React best practices and include comprehensive accessibility testing.

[`/five` ![GitHub Repo Stars](https://img.shields.io/github/stars/TuckerTucker/tkr-portfolio) ![GitHub last commit](https://img.shields.io/github/last-commit/TuckerTucker/tkr-portfolio)](https://github.com/TuckerTucker/tkr-portfolio/blob/main/.claude/commands/five.md) by [TuckerTucker](https://github.com/TuckerTucker)  
Applies the "five whys" methodology to perform root cause analysis, identify underlying issues, and create solution approaches for complex problems.

[`/fixing_go_in_graph` ![GitHub Repo Stars](https://img.shields.io/github/stars/Mjvolk3/torchcell) ![GitHub last commit](https://img.shields.io/github/last-commit/Mjvolk3/torchcell)](https://github.com/Mjvolk3/torchcell/blob/main/.claude/commands/fixing_go_in_graph.md) by [Mjvolk3](https://github.com/Mjvolk3)  
Focuses on Gene Ontology annotation integration in graph databases, handling multiple data sources, addressing graph representation issues, and ensuring correct data incorporation.

[`/mermaid` ![GitHub Repo Stars](https://img.shields.io/github/stars/GaloyMoney/lana-bank) ![GitHub last commit](https://img.shields.io/github/last-commit/GaloyMoney/lana-bank)](https://github.com/GaloyMoney/lana-bank/blob/main/.claude/commands/mermaid.md) by [GaloyMoney](https://github.com/GaloyMoney) ⚖️ NOASSERTION  
Generates Mermaid diagrams from SQL schema files, creating entity relationship diagrams with table properties, validating diagram compilation, and ensuring complete entity coverage.

[`/review_dcell_model` ![GitHub Repo Stars](https://img.shields.io/github/stars/Mjvolk3/torchcell) ![GitHub last commit](https://img.shields.io/github/last-commit/Mjvolk3/torchcell)](https://github.com/Mjvolk3/torchcell/blob/main/.claude/commands/review_dcell_model.md) by [Mjvolk3](https://github.com/Mjvolk3)  
Reviews old Dcell implementation files, comparing with newer Dango model, noting changes over time, and analyzing refactoring approaches for better code organization.

[`/use-stepper` ![GitHub Repo Stars](https://img.shields.io/github/stars/zuplo/docs) ![GitHub last commit](https://img.shields.io/github/last-commit/zuplo/docs)](https://github.com/zuplo/docs/blob/main/.claude/commands/use-stepper.md) by [zuplo](https://github.com/zuplo)  
Reformats documentation to use React Stepper component, transforming heading formats, applying proper indentation, and maintaining markdown compatibility with admonition formatting.

<br>

## CLAUDE.md Files

> **`CLAUDE.md` files** are files that contain important guidelines and context-specfic information or instructions that help Claude Code to better understand your project and your coding standards

### Language-Specific

[`AI IntelliJ Plugin` ![GitHub Repo Stars](https://img.shields.io/github/stars/didalgolab/ai-intellij-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/didalgolab/ai-intellij-plugin)](https://github.com/didalgolab/ai-intellij-plugin/blob/main/CLAUDE.md) by [didalgolab](https://github.com/didalgolab) ⚖️ Apache-2.0  
Provides comprehensive Gradle commands for IntelliJ plugin development with platform-specific coding patterns, detailed package structure guidelines, and clear internationalization standards.

[`AWS MCP Server` ![GitHub Repo Stars](https://img.shields.io/github/stars/alexei-led/aws-mcp-server) ![GitHub last commit](https://img.shields.io/github/last-commit/alexei-led/aws-mcp-server)](https://github.com/alexei-led/aws-mcp-server/blob/main/CLAUDE.md) by [alexei-led](https://github.com/alexei-led) ⚖️ MIT  
Features multiple Python environment setup options with detailed code style guidelines, comprehensive error handling recommendations, and security considerations for AWS CLI interactions.

[`DroidconKotlin` ![GitHub Repo Stars](https://img.shields.io/github/stars/touchlab/DroidconKotlin) ![GitHub last commit](https://img.shields.io/github/last-commit/touchlab/DroidconKotlin)](https://github.com/touchlab/DroidconKotlin/blob/main/CLAUDE.md) by [touchlab](https://github.com/touchlab) ⚖️ Apache-2.0  
Delivers comprehensive Gradle commands for cross-platform Kotlin Multiplatform development with clear module structure and practical guidance for dependency injection.

[`EDSL` ![GitHub Repo Stars](https://img.shields.io/github/stars/expectedparrot/edsl) ![GitHub last commit](https://img.shields.io/github/last-commit/expectedparrot/edsl)](https://github.com/expectedparrot/edsl/blob/main/CLAUDE.md) by [expectedparrot](https://github.com/expectedparrot) ⚖️ MIT  
Offers detailed build and test commands with strict code style enforcement, comprehensive testing requirements, and standardized development workflow using Black and mypy.

[`Giselle` ![GitHub Repo Stars](https://img.shields.io/github/stars/giselles-ai/giselle) ![GitHub last commit](https://img.shields.io/github/last-commit/giselles-ai/giselle)](https://github.com/giselles-ai/giselle/blob/main/CLAUDE.md) by [giselles-ai](https://github.com/giselles-ai) ⚖️ Apache-2.0  
Provides detailed build and test commands using pnpm and Vitest with strict code formatting requirements and comprehensive naming conventions for code consistency.

[`HASH` ![GitHub Repo Stars](https://img.shields.io/github/stars/hashintel/hash) ![GitHub last commit](https://img.shields.io/github/last-commit/hashintel/hash)](https://github.com/hashintel/hash/blob/main/CLAUDE.md) by [hashintel](https://github.com/hashintel) ⚖️ NOASSERTION  
Features comprehensive repository structure breakdown with strong emphasis on coding standards, detailed Rust documentation guidelines, and systematic PR review process.

[`Inkline` ![GitHub Repo Stars](https://img.shields.io/github/stars/inkline/inkline) ![GitHub last commit](https://img.shields.io/github/last-commit/inkline/inkline)](https://github.com/inkline/inkline/blob/main/CLAUDE.md) by [inkline](https://github.com/inkline) ⚖️ NOASSERTION  
Structures development workflow using pnpm with emphasis on TypeScript and Vue 3 Composition API, detailed component creation process, and comprehensive testing recommendations.

[`JSBeeb` ![GitHub Repo Stars](https://img.shields.io/github/stars/mattgodbolt/jsbeeb) ![GitHub last commit](https://img.shields.io/github/last-commit/mattgodbolt/jsbeeb)](https://github.com/mattgodbolt/jsbeeb/blob/main/CLAUDE.md) by [mattgodbolt](https://github.com/mattgodbolt) ⚖️ GPL-3.0  
Provides development guide for JavaScript BBC Micro emulator with build and testing instructions, architecture documentation, and debugging workflows.

[`Lamoom Python` ![GitHub Repo Stars](https://img.shields.io/github/stars/LamoomAI/lamoom-python) ![GitHub last commit](https://img.shields.io/github/last-commit/LamoomAI/lamoom-python)](https://github.com/LamoomAI/lamoom-python/blob/main/CLAUDE.md) by [LamoomAI](https://github.com/LamoomAI) ⚖️ Apache-2.0  
Serves as reference for production prompt engineering library with load balancing of AI Models, API documentation, and usage patterns with examples.

[`LangGraphJS` ![GitHub Repo Stars](https://img.shields.io/github/stars/langchain-ai/langgraphjs) ![GitHub last commit](https://img.shields.io/github/last-commit/langchain-ai/langgraphjs)](https://github.com/langchain-ai/langgraphjs/blob/main/CLAUDE.md) by [langchain-ai](https://github.com/langchain-ai) ⚖️ MIT  
Offers comprehensive build and test commands with detailed TypeScript style guidelines, layered library architecture, and monorepo structure using yarn workspaces.

[`Metabase` ![GitHub Repo Stars](https://img.shields.io/github/stars/metabase/metabase) ![GitHub last commit](https://img.shields.io/github/last-commit/metabase/metabase)](https://github.com/metabase/metabase/blob/master/CLAUDE.md) by [metabase](https://github.com/metabase) ⚖️ NOASSERTION  
Details workflow for REPL-driven development in Clojure/ClojureScript with emphasis on incremental development, testing, and step-by-step approach for feature implementation.

[`SG Cars Trends Backend` ![GitHub Repo Stars](https://img.shields.io/github/stars/sgcarstrends/backend) ![GitHub last commit](https://img.shields.io/github/last-commit/sgcarstrends/backend)](https://github.com/sgcarstrends/backend/blob/main/CLAUDE.md) by [sgcarstrends](https://github.com/sgcarstrends)  
Provides comprehensive structure for TypeScript monorepo projects with detailed commands for development, testing, deployment, and AWS/Cloudflare integration.

[`SPy` ![GitHub Repo Stars](https://img.shields.io/github/stars/spylang/spy) ![GitHub last commit](https://img.shields.io/github/last-commit/spylang/spy)](https://github.com/spylang/spy/blob/main/CLAUDE.md) by [spylang](https://github.com/spylang) ⚖️ MIT  
Enforces strict coding conventions with comprehensive testing guidelines, multiple code compilation options, and backend-specific test decorators for targeted filtering.

[`TPL` ![GitHub Repo Stars](https://img.shields.io/github/stars/KarpelesLab/tpl) ![GitHub last commit](https://img.shields.io/github/last-commit/KarpelesLab/tpl)](https://github.com/KarpelesLab/tpl/blob/master/CLAUDE.md) by [KarpelesLab](https://github.com/KarpelesLab) ⚖️ MIT  
Details Go project conventions with comprehensive error handling recommendations, table-driven testing approach guidelines, and modernization suggestions for latest Go features.

### Domain-Specific

[`AVS Vibe Developer Guide` ![GitHub Repo Stars](https://img.shields.io/github/stars/Layr-Labs/avs-vibe-developer-guide) ![GitHub last commit](https://img.shields.io/github/last-commit/Layr-Labs/avs-vibe-developer-guide)](https://github.com/Layr-Labs/avs-vibe-developer-guide/blob/master/CLAUDE.md) by [Layr-Labs](https://github.com/Layr-Labs) ⚖️ MIT  
Structures AI-assisted EigenLayer AVS development workflow with consistent naming conventions for prompt files and established terminology standards for blockchain concepts.

[`Comm` ![GitHub Repo Stars](https://img.shields.io/github/stars/CommE2E/comm) ![GitHub last commit](https://img.shields.io/github/last-commit/CommE2E/comm)](https://github.com/CommE2E/comm/blob/master/CLAUDE.md) by [CommE2E](https://github.com/CommE2E) ⚖️ BSD-3-Clause  
Serves as a development reference for E2E-encrypted messaging applications with code organization architecture, security implementation details, and testing procedures.

[`Course Builder` ![GitHub Repo Stars](https://img.shields.io/github/stars/badass-courses/course-builder) ![GitHub last commit](https://img.shields.io/github/last-commit/badass-courses/course-builder)](https://github.com/badass-courses/course-builder/blob/main/CLAUDE.md) by [badass-courses](https://github.com/badass-courses) ⚖️ MIT  
Enables real-time multiplayer capabilities for collaborative course creation with diverse tech stack integration and monorepo architecture using Turborepo.

[`Cursor Tools` ![GitHub Repo Stars](https://img.shields.io/github/stars/eastlondoner/cursor-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/eastlondoner/cursor-tools)](https://github.com/eastlondoner/cursor-tools/blob/main/CLAUDE.md) by [eastlondoner](https://github.com/eastlondoner) ⚖️ MIT  
Creates a versatile AI command interface supporting multiple providers and models with flexible command options and browser automation through "Stagehand" feature.

[`Guitar` ![GitHub Repo Stars](https://img.shields.io/github/stars/soramimi/Guitar) ![GitHub last commit](https://img.shields.io/github/last-commit/soramimi/Guitar)](https://github.com/soramimi/Guitar/blob/master/CLAUDE.md) by [soramimi](https://github.com/soramimi) ⚖️ GPL-2.0  
Serves as development guide for Guitar Git GUI Client with build commands for various platforms, code style guidelines for contributing, and project structure explanation.

[`Network Chronicles` ![GitHub Repo Stars](https://img.shields.io/github/stars/Fimeg/NetworkChronicles) ![GitHub last commit](https://img.shields.io/github/last-commit/Fimeg/NetworkChronicles)](https://github.com/Fimeg/NetworkChronicles/blob/main/CLAUDE.md) by [Fimeg](https://github.com/Fimeg) ⚖️ MIT  
Presents detailed implementation plan for AI-driven game characters with technical specifications for LLM integration, character guidelines, and service discovery mechanics.

[`Note Companion` ![GitHub Repo Stars](https://img.shields.io/github/stars/different-ai/note-companion) ![GitHub last commit](https://img.shields.io/github/last-commit/different-ai/note-companion)](https://github.com/different-ai/note-companion/blob/master/CLAUDE.md) by [different-ai](https://github.com/different-ai) ⚖️ MIT  
Provides detailed styling isolation techniques for Obsidian plugins using Tailwind with custom prefix to prevent style conflicts and practical troubleshooting steps.

[`Pareto Mac` ![GitHub Repo Stars](https://img.shields.io/github/stars/ParetoSecurity/pareto-mac) ![GitHub last commit](https://img.shields.io/github/last-commit/ParetoSecurity/pareto-mac)](https://github.com/ParetoSecurity/pareto-mac/blob/main/CLAUDE.md) by [ParetoSecurity](https://github.com/ParetoSecurity) ⚖️ GPL-3.0  
Serves as development guide for Mac security audit tool with build instructions, contribution guidelines, testing procedures, and workflow documentation.

[`SteadyStart` ![GitHub Repo Stars](https://img.shields.io/github/stars/steadycursor/steadystart) ![GitHub last commit](https://img.shields.io/github/last-commit/steadycursor/steadystart)](https://github.com/steadycursor/steadystart/blob/main/CLAUDE.md) by [steadycursor](https://github.com/steadycursor)  
Clear and direct instructives about style, permissions, Claude's "role", communications, and documentation of Claude Code sessions for other team members to stay abreast.

### Project Scaffolding & MCP

[`Basic Memory` ![GitHub Repo Stars](https://img.shields.io/github/stars/basicmachines-co/basic-memory) ![GitHub last commit](https://img.shields.io/github/last-commit/basicmachines-co/basic-memory)](https://github.com/basicmachines-co/basic-memory/blob/main/CLAUDE.md) by [basicmachines-co](https://github.com/basicmachines-co) ⚖️ AGPL-3.0  
Presents an innovative AI-human collaboration framework with Model Context Protocol for bidirectional LLM-markdown communication and flexible knowledge structure for complex projects.

[`claude-code-mcp-enhanced` ![GitHub Repo Stars](https://img.shields.io/github/stars/grahama1970/claude-code-mcp-enhanced) ![GitHub last commit](https://img.shields.io/github/last-commit/grahama1970/claude-code-mcp-enhanced)](https://github.com/grahama1970/claude-code-mcp-enhanced/blob/66328d6bcc960c81ff24f6213ce5614000858698/CLAUDE.md) by [grahama1970](https://github.com/grahama1970) ⚖️ MIT  
Provides detailed and emphatic instructions for Claude to follow as a coding agent, with testing guidance, code examples, and compliance checks.

[`Perplexity MCP` ![GitHub Repo Stars](https://img.shields.io/github/stars/Family-IT-Guy/perplexity-mcp) ![GitHub last commit](https://img.shields.io/github/last-commit/Family-IT-Guy/perplexity-mcp)](https://github.com/Family-IT-Guy/perplexity-mcp/blob/main/CLAUDE.md) by [Family-IT-Guy](https://github.com/Family-IT-Guy) ⚖️ ISC  
Offers clear step-by-step installation instructions with multiple configuration options, detailed troubleshooting guidance, and concise architecture overview of the MCP protocol.

<br>

## Official Documentation

> Links to some of Anthropic's terrific documentation and resources regarding Claude Code

<!--lint disable double-link-->

[`Anthropic Documentation`](https://docs.anthropic.com/en/docs/claude-code) by [Anthropic](https://github.com/anthropics)  &copy;  
The official documentation for Claude Code, including installation instructions, usage guidelines, API references, tutorials, examples, loads of information that I won't list individually. Like Claude Code, the documentation is frequently updated.

[`Anthropic Quickstarts` ![GitHub Repo Stars](https://img.shields.io/github/stars/anthropics/anthropic-quickstarts) ![GitHub last commit](https://img.shields.io/github/last-commit/anthropics/anthropic-quickstarts)](https://github.com/anthropics/anthropic-quickstarts/blob/main/CLAUDE.md) by [Anthropic](https://github.com/anthropics) ⚖️ MIT  
Offers comprehensive development guides for three distinct AI-powered demo projects with standardized workflows, strict code style guidelines, and containerization instructions.

<br>

## Contributing

Please note that this project is released with a [Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

Regarding content, we especially welcome:

- Proven, effective resources that follow best practices and may even be in use in production.
- Innovative, creative, or experimental workflows that perhaps are still being iterated upon, but have high potential value, and push the boundaries of Claude Code's documented capabilities and use cases.
- Additional libraries and tooling that are built on top of Claude Code and offer enhanced functionality.
- Applications of Claude Code outside of the traditional "coding assistant" context, e.g., CI/CD integration, testing, documentation, dev-ops, etc.

See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on how to contribute to this project. Or, fire up Claude Code and invoke the `/project:add-new-resource` command and let Claude walk you through it!

If you have any suggestions or thoughts on how to improve the repo, or how to best organize the list, feel free to start a Discussion topic. This is meant to be for the Claude Code community, and in general I prefer not to act on sole authority.

### A note about licenses

Because simply listing a hyperlink does not qualify as redistribution, the license of the original source is not relevant to its inclusion. However, for posterity and convenience, we do host copies of all resources whose license permits it. Therefore, please include information about the resource's license. Additionally, take note: _if you do not include a LICENSE in your GitHub repo, then by default it is fully copyrighted and redistribution is not allowed_. So, if you are intending to make an open source project, it's critical to pick from one of the many available open source licenses. This is just a reminder that without a LICENSE, your project is not open source (it's merely source-code-available) - it may of course still be included on this list, but this notice is to inform readers about the default rules regarding GitHub and LICENSE files. See [here](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository) for more details.
