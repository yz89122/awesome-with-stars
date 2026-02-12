<div>
<div align="right">
<a href="https://piebald.ai"><img width="200" top="20" align="right" src="https://github.com/Piebald-AI/.github/raw/main/Wordmark.svg"></a>
</div>

<div align="left">

### Check out Piebald
We've released **Piebald**, the ultimate agentic AI developer experience. \
Download it and try it out for free!  **https://piebald.ai/**

<a href="https://piebald.ai/discord"><img src="https://img.shields.io/badge/Join%20our%20Discord-5865F2?style=flat&logo=discord&logoColor=white" alt="Join our Discord"></a>
<a href="https://x.com/PiebaldAI"><img src="https://img.shields.io/badge/Follow%20%40PiebaldAI-000000?style=flat&logo=x&logoColor=white" alt="X"></a>

<sub>[**Scroll down for Awesome Gemini CLI.**](#awesome-gemini-cli-) :point_down:</sub>

</div>
</div>

<div align="left">
<a href="https://piebald.ai">
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://piebald.ai/screenshot-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="https://piebald.ai/screenshot-light.png">
  <img alt="hero" width="800" src="https://piebald.ai/screenshot-light.png">
</picture>
</a>
</div>

# Awesome Gemini CLI [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<a href="https://github.com/google-gemini/gemini-cli" rel="noopener"><img width="4339" height="1373" alt="banner" src="https://github.com/Piebald-AI/awesome-gemini-cli/raw/main/assets/banner.png" /></a>

A curated list of awesome tools, extensions, and resources for [Gemini CLI ![GitHub Repo Stars](https://img.shields.io/github/stars/google-gemini/gemini-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/google-gemini/gemini-cli)](https://github.com/google-gemini/gemini-cli)&mdash;an open-source AI agent that brings the power of Gemini directly into your terminal.  See also: [Awesome Gemini CLI Extensions ![GitHub Repo Stars](https://img.shields.io/github/stars/Piebald-AI/awesome-gemini-cli-extensions) ![GitHub last commit](https://img.shields.io/github/last-commit/Piebald-AI/awesome-gemini-cli-extensions)](https://github.com/Piebald-AI/awesome-gemini-cli-extensions).

**Developed something cool for Gemini CLI?**  Add it to this list!  See [Contributing.](#contributing)

<!--
> :tada: We'll create a new release highlighting **new entries** each week. :star2: Star this repository to receive **release notifications :bell:** for the new entries in your GitHub dashboard!
-->

## :tada: New
- [Git-Alchemist ![GitHub Repo Stars](https://img.shields.io/github/stars/abduznik/Git-Alchemist) ![GitHub last commit](https://img.shields.io/github/last-commit/abduznik/Git-Alchemist)](https://github.com/abduznik/Git-Alchemist) - A unified AI-powered CLI tool for automating GitHub repository management (issues, PRs, topics, profiles) powered by Gemini 3 and Gemma 3.  ([Non-Gemini CLI](#non-gemini-cli))
- [Self Command ![GitHub Repo Stars](https://img.shields.io/github/stars/stevenAthompson/self-command) ![GitHub last commit](https://img.shields.io/github/last-commit/stevenAthompson/self-command)](https://github.com/stevenAthompson/self-command) - Allows the Gemini CLI to send commands to itself, run very long commands in the background and be woken, sleep for a specified amount of time, watch logs and receive notifications, etc by leveraging tmux. Reduces usage and improves reliability by avoiding loop detection. After installing the extension you must lauch gemini-cli into a tmux session named "gemini-cli".
- [gemini-notifier ![GitHub Repo Stars](https://img.shields.io/github/stars/thoreinstein/gemini-notifier) ![GitHub last commit](https://img.shields.io/github/last-commit/thoreinstein/gemini-notifier)](https://github.com/thoreinstein/gemini-notifier) - A Gemini extension to send native system-level notifications when Gemini requests permissions.
- [vsync ![GitHub Repo Stars](https://img.shields.io/github/stars/nicepkg/vsync) ![GitHub last commit](https://img.shields.io/github/last-commit/nicepkg/vsync)](https://github.com/nicepkg/vsync) - Sync Skills, MCP servers, Agents & Commands across Claude Code, Cursor, OpenCode, Codex, and Gemini CLI with automatic format conversion (JSON ↔ TOML ↔ JSONC).
- [Pickle Rick ![GitHub Repo Stars](https://img.shields.io/github/stars/galz10/pickle-rick-extension) ![GitHub last commit](https://img.shields.io/github/last-commit/galz10/pickle-rick-extension)](http://github.com/galz10/pickle-rick-extension) - This extension transforms the Gemini CLI into "Pickle Rick," a hyper-intelligent, arrogant, yet extremely competent engineering persona. It enforces a rigid, iterative software development lifecycle through continuous AI agent loops.
- [gemini-beads ![GitHub Repo Stars](https://img.shields.io/github/stars/thoreinstein/gemini-beads) ![GitHub last commit](https://img.shields.io/github/last-commit/thoreinstein/gemini-beads)](https://github.com/thoreinstein/gemini-beads) - Git-backed persistent memory and task management for Gemini CLI.
- [Agent Squads ![GitHub Repo Stars](https://img.shields.io/github/stars/agents-squads/squads-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/agents-squads/squads-cli)](https://github.com/agents-squads/squads-cli) - Open source CLI for AI agent coordination that organizes agents into domain-aligned squads with persistent memory, goal tracking, and Git-native state.  Works with Gemini CLI.

> [!tip]
> **Track your local Gemini CLI usage with [Splitrail ![GitHub Repo Stars](https://img.shields.io/github/stars/Piebald-AI/splitrail) ![GitHub last commit](https://img.shields.io/github/last-commit/Piebald-AI/splitrail)](https://github.com/Piebald-AI/splitrail).**

## Contents

- [Contents](#contents)
- [Official](#official)
- [Interfaces](#interfaces)
- [Forks](#forks)
- [Fun](#fun)
- [Development Tools \& Utilities](#development-tools--utilities)
- [SDKs](#sdks)
- [API Bridges \& Proxies](#api-bridges--proxies)
- [Commands \& Extensions](#commands--extensions)
- [Prompts](#prompts)
- [MCP Servers](#mcp-servers)
- [Neovim Plugins](#neovim-plugins)
- [Development Frameworks \& Orchestration](#development-frameworks--orchestration)
- [Documentation \& Learning Resources](#documentation--learning-resources)
- [Demo Collections \& Examples](#demo-collections--examples)
- [Contributing](#contributing)

## Official

Core tools and resources maintained by the Gemini CLI team.

- [Gemini CLI ![GitHub Repo Stars](https://img.shields.io/github/stars/google-gemini/gemini-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/google-gemini/gemini-cli)](https://github.com/google-gemini/gemini-cli) - The official open-source AI agent that brings the power of Gemini directly into your terminal. Features context-aware coding assistance, file manipulation, and command execution capabilities.
- [Gemini CLI cookbook ![GitHub Repo Stars](https://img.shields.io/github/stars/google-gemini/cookbook) ![GitHub last commit](https://img.shields.io/github/last-commit/google-gemini/cookbook)](https://github.com/google-gemini/cookbook) - Official collection of examples and guides demonstrating best practices for using the Gemini API. Essential resource for developers getting started.
- [Run Gemini CLI ![GitHub Repo Stars](https://img.shields.io/github/stars/google-github-actions/run-gemini-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/google-github-actions/run-gemini-cli)](https://github.com/google-github-actions/run-gemini-cli) - Official GitHub Action that seamlessly integrates Gemini into your CI/CD pipeline, enabling automated code reviews, testing, and documentation generation.

## Interfaces

Alternative user interfaces and frontends for interacting with Gemini CLI beyond the terminal.

- [Gemini CLI Desktop ![GitHub Repo Stars](https://img.shields.io/github/stars/Piebald-AI/gemini-CLI-desktop) ![GitHub last commit](https://img.shields.io/github/last-commit/Piebald-AI/gemini-CLI-desktop)](https://github.com/Piebald-AI/gemini-CLI-desktop) - Beautiful desktop and web UI that makes Gemini CLI accessible to non-terminal/mobile users while preserving all its powerful features.
- [AionUi ![GitHub Repo Stars](https://img.shields.io/github/stars/iOfficeAI/AionUi) ![GitHub last commit](https://img.shields.io/github/last-commit/iOfficeAI/AionUi)](https://github.com/iOfficeAI/AionUi) - Free, local, open-source GUI app for Gemini CLI — Better Chat UI, File Management, AI image editing, multi-agent support, multi-LLMs & apikey polling, code diff view & more.

## Forks

Modified versions of Gemini CLI with enhanced features or alternative model support.

- [LLxprt Code ![GitHub Repo Stars](https://img.shields.io/github/stars/vybestack/llxprt-code) ![GitHub last commit](https://img.shields.io/github/last-commit/vybestack/llxprt-code)](https://github.com/vybestack/llxprt-code) - An open-source multi-provider (including local) fork of Gemini CLI. Use whatever LLM you want to code in your terminal.
- [iFlow CLI ![GitHub Repo Stars](https://img.shields.io/github/stars/iflow-ai/iflow-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/iflow-ai/iflow-cli)](https://github.com/iflow-ai/iflow-cli) - Powerful fork that extends Gemini CLI with repository analysis, context interpretation, and complex workflow automation. Perfect for teams needing advanced orchestration capabilities.
- [Qwen Code ![GitHub Repo Stars](https://img.shields.io/github/stars/QwenLM/qwen-code) ![GitHub last commit](https://img.shields.io/github/last-commit/QwenLM/qwen-code)](https://github.com/QwenLM/qwen-code/) - Fork by the team behind Qwen LLM. Uses Qwen instead of Gemini.

## Agent Orchestration & CLI Tools

- [squads-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/agents-squads/squads-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/agents-squads/squads-cli)](https://github.com/agents-squads/squads-cli) - Open source CLI for AI agent coordination that organizes agents into domain-aligned squads with persistent memory, goal tracking, and Git-native state.  Works with Gemini CLI.

## Fun

Playful and creative tools inspired by or that add personality to Gemini CLI.

- [Oh My Logo ![GitHub Repo Stars](https://img.shields.io/github/stars/shinshin86/oh-my-logo) ![GitHub last commit](https://img.shields.io/github/last-commit/shinshin86/oh-my-logo)](https://github.com/shinshin86/oh-my-logo) - Adds personality to your terminal with giant ASCII-art logos featuring beautiful color gradients, perfect for customizing your Gemini CLI startup experience.

## Development Tools & Utilities

Tools that enhance your development workflow when using Gemini CLI.

- [**agnix** ![GitHub Repo Stars](https://img.shields.io/github/stars/avifenesh/agnix) ![GitHub last commit](https://img.shields.io/github/last-commit/avifenesh/agnix)](https://github.com/avifenesh/agnix) - Linter for AI agent configurations. Validates GEMINI.md, SKILL.md, hooks, MCP, and more with 156 rules, auto-fix, and LSP server for real-time editor diagnostics.
- [Self Command ![GitHub Repo Stars](https://img.shields.io/github/stars/stevenAthompson/self-command) ![GitHub last commit](https://img.shields.io/github/last-commit/stevenAthompson/self-command)](https://github.com/stevenAthompson/self-command) - Allows the Gemini CLI to send commands to itself, run very long commands in the background and be woken, sleep for a specified amount of time, watch logs and receive notifications, etc by leveraging tmux. Reduces usage and improves reliability by avoiding loop detection. After installing the extension you must lauch gemini-cli into a tmux session named "gemini-cli".
- [vsync ![GitHub Repo Stars](https://img.shields.io/github/stars/nicepkg/vsync) ![GitHub last commit](https://img.shields.io/github/last-commit/nicepkg/vsync)](https://github.com/nicepkg/vsync) - Sync Skills, MCP servers, Agents & Commands across Claude Code, Cursor, OpenCode, Codex, and Gemini CLI with automatic format conversion (JSON ↔ TOML ↔ JSONC).
- [**Gemini Dockerized CLI** ![GitHub Repo Stars](https://img.shields.io/github/stars/nordluf/gemini-dockerized-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/nordluf/gemini-dockerized-cli)](https://github.com/nordluf/gemini-dockerized-cli) - Gemini Dockerized CLI with small improvements.
- [IssueDB](https://issue-queue.readthedocs.io/en/latest/llm_agents.html) - LLM frendly command-line issue tracking system for software development projects, with built-in interface, context support and prompt providers for Gemini CLI and others.
- [Docker Gemini CLI ![GitHub Repo Stars](https://img.shields.io/github/stars/tgagor/docker-gemini-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/tgagor/docker-gemini-cli)](https://github.com/tgagor/docker-gemini-cli) - Gemini CLI wrapped as a Docker image, so you don't need to trash your OS with Node and its dependencies.
- [Rulesync ![GitHub Repo Stars](https://img.shields.io/github/stars/dyoshikawa/rulesync) ![GitHub last commit](https://img.shields.io/github/last-commit/dyoshikawa/rulesync)](https://github.com/dyoshikawa/rulesync) - The Node.js CLI tool that automatically generates configs (rules, ignore files, MCP servers, commands, and subagents) for various AI coding agents. Rulesync can convert configs between Gemini CLI and other AI agents in both directions.
- [Nix AI Tools ![GitHub Repo Stars](https://img.shields.io/github/stars/numtide/nix-ai-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/numtide/nix-ai-tools)](https://github.com/numtide/nix-ai-tools) - Seamless Nix integration for reproducible Gemini CLI installations. Ensures consistent environments across teams and simplifies deployment with declarative configuration.
- [Terminal Jarvis ![GitHub Repo Stars](https://img.shields.io/github/stars/BA-CalderonMorales/terminal-jarvis) ![GitHub last commit](https://img.shields.io/github/last-commit/BA-CalderonMorales/terminal-jarvis)](https://github.com/BA-CalderonMorales/terminal-jarvis) - Ultimate command center unifying multiple AI coding assistants in one elegant interface. Switch between tools seamlessly and manage sessions efficiently.
- [Splitrail ![GitHub Repo Stars](https://img.shields.io/github/stars/Piebald-AI/splitrail) ![GitHub last commit](https://img.shields.io/github/last-commit/Piebald-AI/splitrail)](https://github.com/Piebald-AI/splitrail) - Comprehensive usage analytics platform that tracks and optimizes your Gemini CLI workflows, helping teams understand and improve their AI-assisted development patterns.
- [ccmanager ![GitHub Repo Stars](https://img.shields.io/github/stars/kbwo/ccmanager) ![GitHub last commit](https://img.shields.io/github/last-commit/kbwo/ccmanager)](https://github.com/kbwo/ccmanager) - Essential session management tool that saves, restores, and organizes multiple Gemini CLI sessions, perfect for juggling multiple projects or experiments.
- [Gemini CLI Logs Prettifier ![GitHub Repo Stars](https://img.shields.io/github/stars/Manamama/Puzzles_for_AIs) ![GitHub last commit](https://img.shields.io/github/last-commit/Manamama/Puzzles_for_AIs)](https://github.com/Manamama/Puzzles_for_AIs/tree/main/code/Gemini%20CLI%20logs%20prettifier) - Renders the logs human readable (prettifies them) and browsable as interlinked HTML, with thoughtful explanations and clickable links.

## Browser Extensions

- [SRT Subtitle Translator Validator ![GitHub Repo Stars](https://img.shields.io/github/stars/VjayC/SRT-Subtitle-Translator-Validator) ![GitHub last commit](https://img.shields.io/github/last-commit/VjayC/SRT-Subtitle-Translator-Validator)](https://github.com/VjayC/SRT-Subtitle-Translator-Validator) - Browser-based tool to translate SRT subtitles using your Gemini subscription via CLI Proxy API with automatic validation/error correction - no API keys needed.

## SDKs

Software development kits and libraries for integrating Gemini CLI into your applications.

- [Python Gemini CLI SDK ![GitHub Repo Stars](https://img.shields.io/github/stars/oneryalcin/gemini-cli-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/oneryalcin/gemini-cli-sdk)](https://github.com/oneryalcin/gemini-cli-sdk) - Python SDK for Gemini CLI; API-compatible with Claude Code SDK.
- [Gemini CLI Vercel AI SDK Provider ![GitHub Repo Stars](https://img.shields.io/github/stars/ben-vargas/ai-sdk-provider-gemini-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/ben-vargas/ai-sdk-provider-gemini-cli)](https://github.com/ben-vargas/ai-sdk-provider-gemini-cli) - Seamless Vercel AI SDK integration that unlocks Gemini's capabilities in Next.js and React applications with minimal configuration.

## API Bridges & Proxies

Services that expose Gemini CLI functionality through standard API protocols.

- [geminicli2api ![GitHub Repo Stars](https://img.shields.io/github/stars/gzzhongqi/geminicli2api) ![GitHub last commit](https://img.shields.io/github/last-commit/gzzhongqi/geminicli2api)](https://github.com/gzzhongqi/geminicli2api) - Powerful FastAPI proxy that transforms Gemini CLI into standard API endpoints, enabling integration with any OpenAI-compatible tool or service.
- [Gemini CLI Termux ![GitHub Repo Stars](https://img.shields.io/github/stars/print-yuhuan/Gemini-CLI-Termux) ![GitHub last commit](https://img.shields.io/github/last-commit/print-yuhuan/Gemini-CLI-Termux)](https://github.com/print-yuhuan/Gemini-CLI-Termux) - Provides a one-click deployment solution for Gemini CLI reverse proxy service for Android Termux users.
- [gemini-openai-proxy ![GitHub Repo Stars](https://img.shields.io/github/stars/Brioch/gemini-openai-proxy) ![GitHub last commit](https://img.shields.io/github/last-commit/Brioch/gemini-openai-proxy)](https://github.com/Brioch/gemini-openai-proxy) - Universal compatibility layer serving Gemini 2.5 Pro/Flash through OpenAI protocol. Works instantly with existing tools like LangChain, llama.cpp, and VS Code extensions.
- [gemini-cli-openai ![GitHub Repo Stars](https://img.shields.io/github/stars/GewoonJaap/gemini-cli-openai) ![GitHub last commit](https://img.shields.io/github/last-commit/GewoonJaap/gemini-cli-openai)](https://github.com/GewoonJaap/gemini-cli-openai) - Transform Google's Gemini models into OpenAI-compatible endpoints using Cloudflare Workers, powered the same infrastructure that drives the official Gemini CLI.
- [gemini-cli-proxy ![GitHub Repo Stars](https://img.shields.io/github/stars/nettee/gemini-cli-proxy) ![GitHub last commit](https://img.shields.io/github/last-commit/nettee/gemini-cli-proxy)](https://github.com/nettee/gemini-cli-proxy) - OpenAI-compatible API wrapper for Gemini CLI as an OpenAI-compatible API service, allowing you to enjoy the free Gemini 2.5 Pro model through API!
- [CLIProxyAPI ![GitHub Repo Stars](https://img.shields.io/github/stars/router-form-me/CLIProxyAPI) ![GitHub last commit](https://img.shields.io/github/last-commit/router-form-me/CLIProxyAPI)](https://github.com/router-form-me/CLIProxyAPI) - Wrap Gemini CLI as an OpenAI/Gemini/Claude compatible API service, allowing you to enjoy the free Gemini 2.5 Pro model through API.
- [gemini-cli-mcp-openai-bridge ![GitHub Repo Stars](https://img.shields.io/github/stars/Intelligent-Internet/gemini-cli-mcp-openai-bridge) ![GitHub last commit](https://img.shields.io/github/last-commit/Intelligent-Internet/gemini-cli-mcp-openai-bridge)](https://github.com/Intelligent-Internet/gemini-cli-mcp-openai-bridge) - Server application that extends the Google Gemini CLI with MCP toolkit and OpenAI-compatible API bridge.

## Commands & Extensions

**👉 See also: [Awesome Gemini CLI Extensions ![GitHub Repo Stars](https://img.shields.io/github/stars/Piebald-AI/awesome-gemini-cli-extensions) ![GitHub last commit](https://img.shields.io/github/last-commit/Piebald-AI/awesome-gemini-cli-extensions)](https://github.com/Piebald-AI/awesome-gemini-cli-extensions)** \
Custom commands and extensions that add new capabilities to Gemini CLI.

- [gemini-notifier ![GitHub Repo Stars](https://img.shields.io/github/stars/thoreinstein/gemini-notifier) ![GitHub last commit](https://img.shields.io/github/last-commit/thoreinstein/gemini-notifier)](https://github.com/thoreinstein/gemini-notifier) - A Gemini extension to send native system-level notifications when Gemini requests permissions.
- [Pickle Rick ![GitHub Repo Stars](https://img.shields.io/github/stars/galz10/pickle-rick-extension) ![GitHub last commit](https://img.shields.io/github/last-commit/galz10/pickle-rick-extension)](http://github.com/galz10/pickle-rick-extension) - This extension transforms the Gemini CLI into "Pickle Rick," a hyper-intelligent, arrogant, yet extremely competent engineering persona. It enforces a rigid, iterative software development lifecycle through continuous AI agent loops.
- [gemini-beads ![GitHub Repo Stars](https://img.shields.io/github/stars/thoreinstein/gemini-beads) ![GitHub last commit](https://img.shields.io/github/last-commit/thoreinstein/gemini-beads)](https://github.com/thoreinstein/gemini-beads) - Git-backed persistent memory and task management for Gemini CLI.
- [Conductor ![GitHub Repo Stars](https://img.shields.io/github/stars/gemini-cli-extensions/conductor) ![GitHub last commit](https://img.shields.io/github/last-commit/gemini-cli-extensions/conductor)](http://github.com/gemini-cli-extensions/conductor) - Conductor is a Gemini CLI extension that allows you to specify, plan, and implement software features.
- [Listen ![GitHub Repo Stars](https://img.shields.io/github/stars/automateyournetwork/GeminiCLI_Listen_Extension) ![GitHub last commit](https://img.shields.io/github/last-commit/automateyournetwork/GeminiCLI_Listen_Extension)](https://github.com/automateyournetwork/GeminiCLI_Listen_Extension) - Run Gemini CLI as a server with /listen commands.
- [Screenshare ![GitHub Repo Stars](https://img.shields.io/github/stars/automateyournetwork/GeminiCLI_ScreenShare_Extension) ![GitHub last commit](https://img.shields.io/github/last-commit/automateyournetwork/GeminiCLI_ScreenShare_Extension)](https://github.com/automateyournetwork/GeminiCLI_ScreenShare_Extension) - Screen sharing via MCP and custom slash commands.
- [pyATS ![GitHub Repo Stars](https://img.shields.io/github/stars/automateyournetwork/pyATS_GeminiCLI_Extension) ![GitHub last commit](https://img.shields.io/github/last-commit/automateyournetwork/pyATS_GeminiCLI_Extension)](https://github.com/automateyournetwork/pyATS_GeminiCLI_Extension) - pyATS integration for network testing.
- [Subnet calculator ![GitHub Repo Stars](https://img.shields.io/github/stars/automateyournetwork/GeminiCLI_SubnetCalculator_Extension) ![GitHub last commit](https://img.shields.io/github/last-commit/automateyournetwork/GeminiCLI_SubnetCalculator_Extension)](https://github.com/automateyournetwork/GeminiCLI_SubnetCalculator_Extension) - An extension for GeminiCLI that performs subnet calculation.
- [Packet Buddy ![GitHub Repo Stars](https://img.shields.io/github/stars/automateyournetwork/GeminiCLI_Packet_Buddy_Extension) ![GitHub last commit](https://img.shields.io/github/last-commit/automateyournetwork/GeminiCLI_Packet_Buddy_Extension)](https://github.com/automateyournetwork/GeminiCLI_Packet_Buddy_Extension) - A Gemini CLI extension that uses RAG and MCP and Custom Slash Commands to analyze packet captures.
- [Flutter Gemini CLI extension ![GitHub Repo Stars](https://img.shields.io/github/stars/flutter/gemini-cli-extension) ![GitHub last commit](https://img.shields.io/github/last-commit/flutter/gemini-cli-extension)](https://github.com/flutter/gemini-cli-extension) - Official extension for Gemini CLI that assists with creating and maintaining Flutter code.
- [gemini-cli-on-vscode ![GitHub Repo Stars](https://img.shields.io/github/stars/d3j/gemini-cli-on-vscode) ![GitHub last commit](https://img.shields.io/github/last-commit/d3j/gemini-cli-on-vscode)](https://github.com/d3j/gemini-cli-on-vscode) - MAGUS Council: World's first? 4-AI consultation system (Gemini+Claude+GPT-5+Qwen) in VS Code - Revolutionary multi-agent development environment
- [GeminiCLI_Slash_Listen ![GitHub Repo Stars](https://img.shields.io/github/stars/automateyournetwork/GeminiCLI_Slash_Listen) ![GitHub last commit](https://img.shields.io/github/last-commit/automateyournetwork/GeminiCLI_Slash_Listen)](https://github.com/automateyournetwork/GeminiCLI_Slash_Listen) - Innovative `/listen` command enabling remote Gemini CLI access through Slack, perfect for collaborative coding and remote assistance scenarios.
- [gemini-cli-custom-slash-commands ![GitHub Repo Stars](https://img.shields.io/github/stars/amitkmaraj/gemini-cli-custom-slash-commands) ![GitHub last commit](https://img.shields.io/github/last-commit/amitkmaraj/gemini-cli-custom-slash-commands)](https://github.com/amitkmaraj/gemini-cli-custom-slash-commands) - Curated collection of productivity-boosting custom slash commands that extend Gemini CLI with specialized workflows and shortcuts.
- [gemini-flow ![GitHub Repo Stars](https://img.shields.io/github/stars/clduab11/gemini-flow) ![GitHub last commit](https://img.shields.io/github/last-commit/clduab11/gemini-flow)](https://github.com/clduab11/gemini-flow) - Transforms Gemini CLI into an autonomous AI development team using proven Claude-Flow patterns, enabling complex multi-agent workflows.

## Prompts

- [gemini-cli-prompt-library ![GitHub Repo Stars](https://img.shields.io/github/stars/harish-garg/gemini-cli-prompt-library) ![GitHub last commit](https://img.shields.io/github/last-commit/harish-garg/gemini-cli-prompt-library)](https://github.com/harish-garg/gemini-cli-prompt-library) - 30+ professional prompts for Gemini CLI.

## MCP Servers

Model Context Protocol servers that enable Gemini CLI integration with other AI tools.

- [ToolsForMCPServer ![GitHub Repo Stars](https://img.shields.io/github/stars/tanaikech/ToolsForMCPServer) ![GitHub last commit](https://img.shields.io/github/last-commit/tanaikech/ToolsForMCPServer)](https://github.com/tanaikech/ToolsForMCPServer) - Bridges Gemini CLI with Google Workspace through Apps Script integration, automating document processing, spreadsheet manipulation, and workflow automation.
- [gemini-mcp-tool ![GitHub Repo Stars](https://img.shields.io/github/stars/jamubc/gemini-mcp-tool) ![GitHub last commit](https://img.shields.io/github/last-commit/jamubc/gemini-mcp-tool)](https://github.com/jamubc/gemini-mcp-tool) - Leverages Gemini's industry-leading 2M token context window through MCP, enabling analysis of entire codebases and large documents that other tools can't handle.
- [mcp-gemini-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/choplin/mcp-gemini-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/choplin/mcp-gemini-cli)](https://github.com/choplin/mcp-gemini-cli) - A simple MCP (Model Context Protocol) server wrapper for Google's Gemini CLI.
- [gemini-cli-mcp ![GitHub Repo Stars](https://img.shields.io/github/stars/InfolabAI/gemini-cli-mcp) ![GitHub last commit](https://img.shields.io/github/last-commit/InfolabAI/gemini-cli-mcp)](https://github.com/InfolabAI/gemini-cli-mcp) - Tool that enables using Gemini AI as an MCP server within Claude Code with large file analysis and token savings.
- [gemini-mcp ![GitHub Repo Stars](https://img.shields.io/github/stars/neriousy/gemini-mcp) ![GitHub last commit](https://img.shields.io/github/last-commit/neriousy/gemini-mcp)](https://github.com/neriousy/gemini-mcp) - A simple MCP server for using the Gemini CLI.
- [gemini-cli-mcp ![GitHub Repo Stars](https://img.shields.io/github/stars/0xmountaintop/gemini-cli-mcp) ![GitHub last commit](https://img.shields.io/github/last-commit/0xmountaintop/gemini-cli-mcp)](https://github.com/0xmountaintop/gemini-cli-mcp) - A Model Context Protocol (MCP) wrapper for Google Gemini CLI that enables AI development tools to interact with Gemini.

## Neovim Plugins

Plugins that bring Gemini CLI's AI capabilities directly into the Neovim editor.

- [nvim Gemini Companion ![GitHub Repo Stars](https://img.shields.io/github/stars/gutsavgupta/nvim-gemini-companion) ![GitHub last commit](https://img.shields.io/github/last-commit/gutsavgupta/nvim-gemini-companion)](https://github.com/gutsavgupta/nvim-gemini-companion) - A Neovim plugin to integrate Gemini CLI well (+ Qwen Code now).
- [gemini-cli.nvim ![GitHub Repo Stars](https://img.shields.io/github/stars/JonRoosevelt/gemini-cli.nvim) ![GitHub last commit](https://img.shields.io/github/last-commit/JonRoosevelt/gemini-cli.nvim)](https://github.com/JonRoosevelt/gemini-cli.nvim) - Native Neovim integration bringing Gemini's AI capabilities directly into your editor with keybindings, commands, and buffer manipulation support.
- [gemini-nvim ![GitHub Repo Stars](https://img.shields.io/github/stars/JunYang-tes/gemini-nvim) ![GitHub last commit](https://img.shields.io/github/last-commit/JunYang-tes/gemini-nvim)](https://github.com/JunYang-tes/gemini-nvim) - Gemini CLI in neovim - An unofficial Neovim plugin for interacting with Google Gemini CLI.

## Frameworks

Frameworks for building AI-powered development workflows with Gemini CLI.

- [GACUA ![GitHub Repo Stars](https://img.shields.io/github/stars/openmule/gacua) ![GitHub last commit](https://img.shields.io/github/last-commit/openmule/gacua)](https://github.com/openmule/gacua) - The world's first out-of-the-box computer use agent powered by Gemini CLI @openmule.
- [gemini-code-flow ![GitHub Repo Stars](https://img.shields.io/github/stars/Theopsguide/gemini-code-flow) ![GitHub last commit](https://img.shields.io/github/last-commit/Theopsguide/gemini-code-flow)](https://github.com/Theopsguide/gemini-code-flow) - Enterprise-grade orchestration framework that coordinates multiple Gemini CLI instances for complex development tasks, based on battle-tested Claude Code Flow patterns.
- [gemini-cli-commands-demo ![GitHub Repo Stars](https://img.shields.io/github/stars/pauldatta/gemini-cli-commands-demo) ![GitHub last commit](https://img.shields.io/github/last-commit/pauldatta/gemini-cli-commands-demo)](https://github.com/pauldatta/gemini-cli-commands-demo) - A proof-of-concept demonstrating a sub-agent orchestration system built within the Gemini CLI.

## Documentation & Examples

Educational materials and documentation to try out Gemini CLI if you're new.

- [Gemini CLI Tips by Addy Osmani ![GitHub Repo Stars](https://img.shields.io/github/stars/addyosmani/gemini-cli-tips) ![GitHub last commit](https://img.shields.io/github/last-commit/addyosmani/gemini-cli-tips)](https://github.com/addyosmani/gemini-cli-tips) - ~30 pro-tips for effectively using Gemini CLI for agentic coding.
- [gemini-cli-extension ![GitHub Repo Stars](https://img.shields.io/github/stars/philschmid/gemini-cli-extension) ![GitHub last commit](https://img.shields.io/github/last-commit/philschmid/gemini-cli-extension)](https://github.com/philschmid/gemini-cli-extension) - Essential collection of extensions and commands that enhance Gemini CLI with additional capabilities and workflow improvements.
- [gemini-docs-ext ![GitHub Repo Stars](https://img.shields.io/github/stars/markmcd/gemini-docs-ext) ![GitHub last commit](https://img.shields.io/github/last-commit/markmcd/gemini-docs-ext)](https://github.com/markmcd/gemini-docs-ext) - Gemini CLI extension that adds Gemini API docs and MCP.
- [gemini-cli-media-generation ![GitHub Repo Stars](https://img.shields.io/github/stars/vladkol/gemini-cli-media-generation) ![GitHub last commit](https://img.shields.io/github/last-commit/vladkol/gemini-cli-media-generation)](https://github.com/vladkol/gemini-cli-media-generation) - An example of using Gemini CLI with MCP Servers for Genmedia and Gemini 2.5 Flash Image model (Nano-banana)
- [gemini-cli-demos ![GitHub Repo Stars](https://img.shields.io/github/stars/palladius/gemini-cli-demos) ![GitHub last commit](https://img.shields.io/github/last-commit/palladius/gemini-cli-demos)](https://github.com/palladius/gemini-cli-demos) - Ready-to-run demonstration scenarios showcasing Gemini CLI's capabilities, perfect for learning, presenting, or evaluating the tool.
- [cli-demo-cookbook ![GitHub Repo Stars](https://img.shields.io/github/stars/ptone/cli-demo-cookbook) ![GitHub last commit](https://img.shields.io/github/last-commit/ptone/cli-demo-cookbook)](https://github.com/ptone/cli-demo-cookbook) - Collection of demo scenario and casts for Gemini CLI.

## Non-Gemini CLI

Cool projects that don't pertain to Gemini CLI specifically but do utilitize Gemini.

- [Git-Alchemist ![GitHub Repo Stars](https://img.shields.io/github/stars/abduznik/Git-Alchemist) ![GitHub last commit](https://img.shields.io/github/last-commit/abduznik/Git-Alchemist)](https://github.com/abduznik/Git-Alchemist) - A unified AI-powered CLI tool for automating GitHub repository management (issues, PRs, topics, profiles) powered by Gemini 3 and Gemma 3.

## Contributing

Contributions are highly valued!  See [CONTRIBUTING.md](CONTRIBUTING.md).
