# Awesome Dev Env [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

A curated list of awesome tools, resources and workflow tips making an awesome development environment.

Inspired by [awesome-go ![GitHub Repo Stars](https://img.shields.io/github/stars/avelino/awesome-go) ![GitHub last commit](https://img.shields.io/github/last-commit/avelino/awesome-go)](https://github.com/avelino/awesome-go), which was in turn inspired by [awesome-python ![GitHub Repo Stars](https://img.shields.io/github/stars/vinta/awesome-python) ![GitHub last commit](https://img.shields.io/github/last-commit/vinta/awesome-python)](https://github.com/vinta/awesome-python).

### Contributing

[Guidelines ![GitHub Repo Stars](https://img.shields.io/github/stars/jondot/awesome-devenv) ![GitHub last commit](https://img.shields.io/github/last-commit/jondot/awesome-devenv)](https://github.com/jondot/awesome-devenv/blob/master/CONTRIBUTING.md) tweaked and adapted from `awesome-go` - thanks!

But in short:

* List is alphabetically sorted
* If you think an item shouldn't be here [open an issue ![GitHub Repo Stars](https://img.shields.io/github/stars/jondot/awesome-devenv) ![GitHub last commit](https://img.shields.io/github/last-commit/jondot/awesome-devenv)](https://github.com/jondot/awesome-devenv/issues/new)


Many thanks to everyone on the [contributor list ![GitHub Repo Stars](https://img.shields.io/github/stars/jondot/awesome-devenv) ![GitHub last commit](https://img.shields.io/github/last-commit/jondot/awesome-devenv)](https://github.com/jondot/awesome-devenv/graphs/contributors) :)


# Content

_Note: for an OS specific tool, please do your best to mark with `OSX/WIN/*NIX/LIN`_



- [Admins](#admins)
- [Benchmarking](#benchmarking)
- [Data](#data)
- [Diagnostics](#diagnostics)
- [Desktop](#desktop)
- [Documentation](#documentation)
- [Dotfiles](#dotfiles)
- [Editors](#editors)
  - [Atom](#atom)
  - [Sublime Text](#sublime-text-3)
  - [Vim](#vim)
  - [IntelliJ](#intellij)
  - [VSCode](#visual-studio-code)
- [Git](#git)
- [Misc](#misc)
- [Notifications](#notifications)
- [Orchestration](#orchestration)
- [Presentation](#presentation)
- [Shell](#shell)
- [Text](#text)
- [Terminal](#terminal)
- [Workflow](#workflow)


## Admins
*Tools to manage databases, permissions, etc.*

* [hss ![GitHub Repo Stars](https://img.shields.io/github/stars/six-ddc/hss) ![GitHub last commit](https://img.shields.io/github/last-commit/six-ddc/hss)](https://github.com/six-ddc/hss) - Never type the annoying ssh commands again.
* [MongoHub ![GitHub Repo Stars](https://img.shields.io/github/stars/fotonauts/MongoHub-Mac) ![GitHub last commit](https://img.shields.io/github/last-commit/fotonauts/MongoHub-Mac)](https://github.com/fotonauts/MongoHub-Mac/releases) - Native OSx client for mongo
* [Robomongo](http://robomongo.org/) - a cross platform Admin for MongoDB


## Benchmarking
*Tools to benchmark your code or services*

* [apachebench (ab)](http://httpd.apache.org/docs/2.2/programs/ab.html)
* [boom ![GitHub Repo Stars](https://img.shields.io/github/stars/rakyll/boom) ![GitHub last commit](https://img.shields.io/github/last-commit/rakyll/boom)](https://github.com/rakyll/boom)
* [httperf](http://www.hpl.hp.com/research/linux/httperf/)
* [phantomas ![GitHub Repo Stars](https://img.shields.io/github/stars/macbre/phantomas) ![GitHub last commit](https://img.shields.io/github/last-commit/macbre/phantomas)](https://github.com/macbre/phantomas) - website perf evaluation tool
* [siege](http://www.joedog.org/siege-home/)
* [Vegeta ![GitHub Repo Stars](https://img.shields.io/github/stars/tsenart/vegeta) ![GitHub last commit](https://img.shields.io/github/last-commit/tsenart/vegeta)](https://github.com/tsenart/vegeta)
* [wrk ![GitHub Repo Stars](https://img.shields.io/github/stars/wg/wrk) ![GitHub last commit](https://img.shields.io/github/last-commit/wg/wrk)](https://github.com/wg/wrk)
* [redis-faina ![GitHub Repo Stars](https://img.shields.io/github/stars/Instagram/redis-faina) ![GitHub last commit](https://img.shields.io/github/last-commit/Instagram/redis-faina)](https://github.com/Instagram/redis-faina) Instagram's Redis counter/timing stats based on the MONITOR command


## Data
*Tools for handling online and offline data*

* [s3cmd ![GitHub Repo Stars](https://img.shields.io/github/stars/s3tools/s3cmd) ![GitHub last commit](https://img.shields.io/github/last-commit/s3tools/s3cmd)](https://github.com/s3tools/s3cmd) - the S3 CLI tool for Amazon


## Diagnostics
*Tools for checking diagnosing your system while you work*

* [glances ![GitHub Repo Stars](https://img.shields.io/github/stars/nicolargo/glances) ![GitHub last commit](https://img.shields.io/github/last-commit/nicolargo/glances)](https://github.com/nicolargo/glances)
* [nmon](http://nmon.sourceforge.net/pmwiki.php)
* [gtop ![GitHub Repo Stars](https://img.shields.io/github/stars/aksakalli/gtop) ![GitHub last commit](https://img.shields.io/github/last-commit/aksakalli/gtop)](https://github.com/aksakalli/gtop)


## Desktop
*Tools for improving and hacking around with your vanilla desktop*

* [Alfred](http://www.alfredapp.com/) - OSX productivity app `/OSX/`
* [hydra ![GitHub Repo Stars](https://img.shields.io/github/stars/sdegutis/hydra) ![GitHub last commit](https://img.shields.io/github/last-commit/sdegutis/hydra)](https://github.com/sdegutis/hydra) - script your desktop
  `/OSX/`
* [Keycastr ![GitHub Repo Stars](https://img.shields.io/github/stars/sdeken/keycastr) ![GitHub last commit](https://img.shields.io/github/last-commit/sdeken/keycastr)](https://github.com/sdeken/keycastr) - show your keys while
  presenting/casting `/OSX/`

## Documentation
*Tools to document your project*

* [Log4brains ![GitHub Repo Stars](https://img.shields.io/github/stars/thomvaill/log4brains) ![GitHub last commit](https://img.shields.io/github/last-commit/thomvaill/log4brains)](https://github.com/thomvaill/log4brains) - Docs-as-code knowledge base to manage Architecture Decision Records (ADR) for your project and publish them automatically as a static website.


## Dotfiles

* [dotfiles.github.io](https://dotfiles.github.io/) - Collected dotfile resources. Has sections with dotfile bootstraps and lists of frameworks for various shells and editors.
* [Zach Holman's ![GitHub Repo Stars](https://img.shields.io/github/stars/holman/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/holman/dotfiles)](https://github.com/holman/dotfiles) - oh-my-zsh, osx, Zsh, vi, Ruby, Git, and more
* [Mathias Bynens's ![GitHub Repo Stars](https://img.shields.io/github/stars/mathiasbynens/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/mathiasbynens/dotfiles)](https://github.com/mathiasbynens/dotfiles) - .files, including ~/.osx — sensible hacker defaults for OS X
* [Thoughtbot's ![GitHub Repo Stars](https://img.shields.io/github/stars/thoughtbot/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/thoughtbot/dotfiles)](https://github.com/thoughtbot/dotfiles) - A set of vim, zsh, git, and tmux configuration files
* [Paul Miller's ![GitHub Repo Stars](https://img.shields.io/github/stars/paulmillr/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/paulmillr/dotfiles)](https://github.com/paulmillr/dotfiles) - Colourful & robust OS X configuration files and utilities


## Editors
*Only awesome tools and addons for your favorite editor*

### Atom

* [atom-beautify ![GitHub Repo Stars](https://img.shields.io/github/stars/Glavin001/atom-beautify) ![GitHub last commit](https://img.shields.io/github/last-commit/Glavin001/atom-beautify)](https://github.com/Glavin001/atom-beautify) - Beautify HTML (including Handlebars), CSS (including Sass and Less), JavaScript, and much more in Atom.
* [file-icons ![GitHub Repo Stars](https://img.shields.io/github/stars/DanBrooker/file-icons) ![GitHub last commit](https://img.shields.io/github/last-commit/DanBrooker/file-icons)](https://github.com/DanBrooker/file-icons) - Adds file specific icons to atom for improved visual grepping.
* [highlight-selected ![GitHub Repo Stars](https://img.shields.io/github/stars/richrace/highlight-selected) ![GitHub last commit](https://img.shields.io/github/last-commit/richrace/highlight-selected)](https://github.com/richrace/highlight-selected) - Double click on a word to highlight it throughout the open file.
* [minimap ![GitHub Repo Stars](https://img.shields.io/github/stars/atom-minimap/minimap) ![GitHub last commit](https://img.shields.io/github/last-commit/atom-minimap/minimap)](https://github.com/atom-minimap/minimap) - A graphical map (preview) of the full source code.
* [minimap-git-diff ![GitHub Repo Stars](https://img.shields.io/github/stars/atom-minimap/minimap-git-diff) ![GitHub last commit](https://img.shields.io/github/last-commit/atom-minimap/minimap-git-diff)](https://github.com/atom-minimap/minimap-git-diff) - A minimap binding for the Atom git-diff package.
* [minimap-highlight-selected ![GitHub Repo Stars](https://img.shields.io/github/stars/atom-minimap/minimap-highlight-selected) ![GitHub last commit](https://img.shields.io/github/last-commit/atom-minimap/minimap-highlight-selected)](https://github.com/atom-minimap/minimap-highlight-selected) - A minimap binding for the highlight-selected package.
* [atom-project-manager ![GitHub Repo Stars](https://img.shields.io/github/stars/danielbrodin/atom-project-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/danielbrodin/atom-project-manager)](https://github.com/danielbrodin/atom-project-manager) - Get easy access to all your projects and manage them with project specific settings and options.
* [atom-tree-view-git-status ![GitHub Repo Stars](https://img.shields.io/github/stars/subesokun/atom-tree-view-git-status) ![GitHub last commit](https://img.shields.io/github/last-commit/subesokun/atom-tree-view-git-status)](https://github.com/subesokun/atom-tree-view-git-status) - Show the Git repository status in the Atom tree-view.
* [atom-pigments ![GitHub Repo Stars](https://img.shields.io/github/stars/abe33/atom-pigments) ![GitHub last commit](https://img.shields.io/github/last-commit/abe33/atom-pigments)](https://github.com/abe33/atom-pigments) - An Atom package to display colors in project and files.

### Vim

* [Completor ![GitHub Repo Stars](https://img.shields.io/github/stars/maralla/completor.vim) ![GitHub last commit](https://img.shields.io/github/last-commit/maralla/completor.vim)](https://github.com/maralla/completor.vim) - async autocomplete with support for omni and semantic completion.
* [Powerline ![GitHub Repo Stars](https://img.shields.io/github/stars/Lokaltog/powerline) ![GitHub last commit](https://img.shields.io/github/last-commit/Lokaltog/powerline)](https://github.com/Lokaltog/powerline) - improved status bar for your buffers.
* [snipmate ![GitHub Repo Stars](https://img.shields.io/github/stars/garbas/vim-snipmate) ![GitHub last commit](https://img.shields.io/github/last-commit/garbas/vim-snipmate)](https://github.com/garbas/vim-snipmate) - textual snippets compatiable with Textmate snippets.
* [The Ultimate Vim Distribution](http://vim.spf13.com/) - spf13-vim is a distribution of vim plugins and resources for Vim, GVim and MacVim.

### Sublime Text 3

* [AdvancedNewFile ![GitHub Repo Stars](https://img.shields.io/github/stars/skuroda/Sublime-AdvancedNewFile) ![GitHub last commit](https://img.shields.io/github/last-commit/skuroda/Sublime-AdvancedNewFile)](https://github.com/skuroda/Sublime-AdvancedNewFile) - File creation plugin.
* [Emmet ![GitHub Repo Stars](https://img.shields.io/github/stars/sergeche/emmet-sublime) ![GitHub last commit](https://img.shields.io/github/last-commit/sergeche/emmet-sublime)](https://github.com/sergeche/emmet-sublime)
* [Git Gutter ![GitHub Repo Stars](https://img.shields.io/github/stars/jisaacks/GitGutter) ![GitHub last commit](https://img.shields.io/github/last-commit/jisaacks/GitGutter)](https://github.com/jisaacks/GitGutter) - display changed/added lines in the margin of the editor window.
* [jsFormat ![GitHub Repo Stars](https://img.shields.io/github/stars/jdc0589/JsFormat) ![GitHub last commit](https://img.shields.io/github/last-commit/jdc0589/JsFormat)](https://github.com/jdc0589/JsFormat) - Javascript formatting.
* [LiveReload ![GitHub Repo Stars](https://img.shields.io/github/stars/dz0ny/LiveReload-sublimetext2) ![GitHub last commit](https://img.shields.io/github/last-commit/dz0ny/LiveReload-sublimetext2)](https://github.com/dz0ny/LiveReload-sublimetext2) - LiveReload plugin.
* [MarkdownEditing ![GitHub Repo Stars](https://img.shields.io/github/stars/SublimeText-Markdown/MarkdownEditing) ![GitHub last commit](https://img.shields.io/github/last-commit/SublimeText-Markdown/MarkdownEditing)](https://github.com/SublimeText-Markdown/MarkdownEditing) - Markdown syntax understanding and good color schemes.
* [Package Control](https://sublime.wbond.net/installation) - The Sublime Text package manager.
* [RubyTest ![GitHub Repo Stars](https://img.shields.io/github/stars/maltize/sublime-text-2-ruby-tests) ![GitHub last commit](https://img.shields.io/github/last-commit/maltize/sublime-text-2-ruby-tests)](https://github.com/maltize/sublime-text-2-ruby-tests) - Plugin for running Ruby tests.
* [Side Bar Enhancments ![GitHub Repo Stars](https://img.shields.io/github/stars/titoBouzout/SideBarEnhancements) ![GitHub last commit](https://img.shields.io/github/last-commit/titoBouzout/SideBarEnhancements)](https://github.com/titoBouzout/SideBarEnhancements) - Enhancements to Sublime Text sidebar. Files and folders.
* [Sublime Git ![GitHub Repo Stars](https://img.shields.io/github/stars/kemayo/sublime-text-git) ![GitHub last commit](https://img.shields.io/github/last-commit/kemayo/sublime-text-git)](https://github.com/kemayo/sublime-text-git) - Git Integration for Sublime.
* [Sublime Linter ![GitHub Repo Stars](https://img.shields.io/github/stars/SublimeLinter/SublimeLinter3) ![GitHub last commit](https://img.shields.io/github/last-commit/SublimeLinter/SublimeLinter3)](https://github.com/SublimeLinter/SublimeLinter3/) - Interactive code linting.
* [TrailingSpaces ![GitHub Repo Stars](https://img.shields.io/github/stars/SublimeText/TrailingSpaces) ![GitHub last commit](https://img.shields.io/github/last-commit/SublimeText/TrailingSpaces)](https://github.com/SublimeText/TrailingSpaces) - Highlight trailing spaces and delete them in a flash.

### Intellij

* [keymap ![GitHub Repo Stars](https://img.shields.io/github/stars/jondot/keymaps) ![GitHub last commit](https://img.shields.io/github/last-commit/jondot/keymaps)](https://github.com/jondot/keymaps/) - a hybrid Vim/ReSharper/Intellij keymap

### Visual Studio Code

* [Dev Git Repo ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/vscode) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/vscode)](https://github.com/Microsoft/vscode) - Github code repository for VS Code 
* [Monaco Editor Git Repo ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/monaco-editor) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/monaco-editor)](https://github.com/microsoft/monaco-editor) - Github code repository for underlying browser-based editor

#### Extensions
* [VS Code Extension Marketplace](https://marketplace.visualstudio.com/search?target=VSCode&category=All%20categories) - Official website for extensions
* [Python extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python) - Official Python extension
* [Sync settings](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) - Excellent extension for settings and extension sync of your VS code setup

## Git
*Tools and addons for making an awesome Git experience*

* [awesome-github ![GitHub Repo Stars](https://img.shields.io/github/stars/fffaraz/awesome-github) ![GitHub last commit](https://img.shields.io/github/last-commit/fffaraz/awesome-github)](https://github.com/fffaraz/awesome-github) - Faraz Fallahi maintains a curated list of GitHub & Git resources.
* [gh ![GitHub Repo Stars](https://img.shields.io/github/stars/jingweno/gh) ![GitHub last commit](https://img.shields.io/github/last-commit/jingweno/gh)](https://github.com/jingweno/gh) - Fast GitHub command line client (hub port to Go)
* [git-extra-commands ![GitHub Repo Stars](https://img.shields.io/github/stars/unixorn/git-extra-commands) ![GitHub last commit](https://img.shields.io/github/last-commit/unixorn/git-extra-commands)](https://github.com/unixorn/git-extra-commands) - collected git helper scripts
* [git-extras ![GitHub Repo Stars](https://img.shields.io/github/stars/visionmedia/git-extras) ![GitHub last commit](https://img.shields.io/github/last-commit/visionmedia/git-extras)](https://github.com/visionmedia/git-extras) - GIT utilities -- repo summary, repl, changelog population, author commit percentages and more
* [git-it-on ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhurford/git-it-on.zsh) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhurford/git-it-on.zsh)](https://github.com/peterhurford/git-it-on.zsh) - ZSH plugin, adds a gitit command that opens the current directory on github in your current branch
* [git-secret ![GitHub Repo Stars](https://img.shields.io/github/stars/sobolevn/git-secret) ![GitHub last commit](https://img.shields.io/github/last-commit/sobolevn/git-secret)](https://github.com/sobolevn/git-secret) - A bash-tool to store your private data inside a git repository.
* [git-semver ![GitHub Repo Stars](https://img.shields.io/github/stars/markchalloner/git-semver) ![GitHub last commit](https://img.shields.io/github/last-commit/markchalloner/git-semver)](https://github.com/markchalloner/git-semver) - A git plugin to make Semantic Versioning 2.0.0 and Change Log management easier.
* [git-sweep ![GitHub Repo Stars](https://img.shields.io/github/stars/arc90/git-sweep) ![GitHub last commit](https://img.shields.io/github/last-commit/arc90/git-sweep)](https://github.com/arc90/git-sweep) - safely removes branches that have been merged into the master
* [git-up ![GitHub Repo Stars](https://img.shields.io/github/stars/aanand/git-up) ![GitHub last commit](https://img.shields.io/github/last-commit/aanand/git-up)](https://github.com/aanand/git-up) - a better 'git pull'
* [hub](https://hub.github.com/) - git CLI wrapper which makes working with GitHub easier
* [scm_breeze ![GitHub Repo Stars](https://img.shields.io/github/stars/ndbroadbent/scm_breeze) ![GitHub last commit](https://img.shields.io/github/last-commit/ndbroadbent/scm_breeze)](https://github.com/ndbroadbent/scm_breeze) Streamline your git workflow
* [tig](http://jonas.nitro.dk/tig/) - an ncurses-based text-mode interface for git

## Misc
*Useful tools that cannot find a home in other categories*

* [Fenix Web Server](https://fenixwebserver.com) - A multi-host local static web server with push-button sharing (desktop app).
* [ML Workspace](hhttps://github.com/ml-tooling/ml-workspace) - All-in-one web-based development environment for machine learning and data science.
* [Mockoon](https://mockoon.com) - an API / HTTP REST mocking desktop application
* [HTTP Toolkit](https://httptoolkit.tech) - an HTTP inspection & debugging desktop application

## Notifications
*Tools that notify developers about changes in their work environment*

* [CatLight](https://catlight.io) - status notifier for developers. Checks the status of continuous delivery builds and shows desktop notifications.

## Orchestration
*Tools for orchestrating awesome development environments*

* [azk ![GitHub Repo Stars](https://img.shields.io/github/stars/azukiapp/azk) ![GitHub last commit](https://img.shields.io/github/last-commit/azukiapp/azk)](https://github.com/azukiapp/azk) - a lightweight open source engine to orchestrate development environments
* [Nanobox ![GitHub Repo Stars](https://img.shields.io/github/stars/nanobox-io/nanobox) ![GitHub last commit](https://img.shields.io/github/last-commit/nanobox-io/nanobox)](https://github.com/nanobox-io/nanobox) - A micro-PaaS (μPaaS) for creating consistent, isolated, development environments deployable anywhere https://nanobox.io.

## Presentation
*Tools for presenting your work*

* [bespoke.js ![GitHub Repo Stars](https://img.shields.io/github/stars/markdalgleish/bespoke.js) ![GitHub last commit](https://img.shields.io/github/last-commit/markdalgleish/bespoke.js)](https://github.com/markdalgleish/bespoke.js) - DIY Presentation Micro-Framework
* [hacker-slides ![GitHub Repo Stars](https://img.shields.io/github/stars/msoedov/hacker-slides) ![GitHub last commit](https://img.shields.io/github/last-commit/msoedov/hacker-slides)](https://github.com/msoedov/hacker-slides) - Reveal.js based presentation tool
* [impress.js ![GitHub Repo Stars](https://img.shields.io/github/stars/impress/impress.js) ![GitHub last commit](https://img.shields.io/github/last-commit/impress/impress.js)](https://github.com/impress/impress.js) - presentation framework based on the power of CSS3 transforms and transitions
* [mithril-slides ![GitHub Repo Stars](https://img.shields.io/github/stars/wulab/mithril-slides) ![GitHub last commit](https://img.shields.io/github/last-commit/wulab/mithril-slides)](https://github.com/wulab/mithril-slides) - A Keynote-inspired presentation app written with Mithril
* [remark ![GitHub Repo Stars](https://img.shields.io/github/stars/gnab/remark) ![GitHub last commit](https://img.shields.io/github/last-commit/gnab/remark)](https://github.com/gnab/remark) - markdown based presentation on your browser
* [reveal.js ![GitHub Repo Stars](https://img.shields.io/github/stars/hakimel/reveal.js) ![GitHub last commit](https://img.shields.io/github/last-commit/hakimel/reveal.js)](https://github.com/hakimel/reveal.js/) - markdown based presentation on your browser
* [deck.js ![GitHub Repo Stars](https://img.shields.io/github/stars/imakewebthings/deck.js) ![GitHub last commit](https://img.shields.io/github/last-commit/imakewebthings/deck.js)](https://github.com/imakewebthings/deck.js) - markdown based presentation on your browser
* [vimdeck ![GitHub Repo Stars](https://img.shields.io/github/stars/tybenz/vimdeck) ![GitHub last commit](https://img.shields.io/github/last-commit/tybenz/vimdeck)](https://github.com/tybenz/vimdeck) - present inside your Vim
* [WebSlides ![GitHub Repo Stars](https://img.shields.io/github/stars/jlantunez/webslides) ![GitHub last commit](https://img.shields.io/github/last-commit/jlantunez/webslides)](https://github.com/jlantunez/webslides) - Making HTML presentations easy

## Shell
*Tools for having an awesome shell environment*

* [awesome-zsh-plugins ![GitHub Repo Stars](https://img.shields.io/github/stars/unixorn/awesome-zsh-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/unixorn/awesome-zsh-plugins)](https://github.com/unixorn/awesome-zsh-plugins) - List of zsh plugins usable with [zgen ![GitHub Repo Stars](https://img.shields.io/github/stars/tarjoilija/zgen) ![GitHub last commit](https://img.shields.io/github/last-commit/tarjoilija/zgen)](https://github.com/tarjoilija/zgen) and other [oh-my-zsh ![GitHub Repo Stars](https://img.shields.io/github/stars/robbyrussell/oh-my-zsh) ![GitHub last commit](https://img.shields.io/github/last-commit/robbyrussell/oh-my-zsh)](https://github.com/robbyrussell/oh-my-zsh/) compatible zsh frameworks
* [fish-shell ![GitHub Repo Stars](https://img.shields.io/github/stars/fish-shell/fish-shell) ![GitHub last commit](https://img.shields.io/github/last-commit/fish-shell/fish-shell)](https://github.com/fish-shell/fish-shell) - The user-friendly command line shell
* [hss ![GitHub Repo Stars](https://img.shields.io/github/stars/six-ddc/hss) ![GitHub last commit](https://img.shields.io/github/last-commit/six-ddc/hss)](https://github.com/six-ddc/hss) - Never type the annoying ssh commands again.
* [oh-my-fish ![GitHub Repo Stars](https://img.shields.io/github/stars/oh-my-fish/oh-my-fish) ![GitHub last commit](https://img.shields.io/github/last-commit/oh-my-fish/oh-my-fish)](https://github.com/oh-my-fish/oh-my-fish) - Framework for managing your fish shell configuration inspired by oh-my-zsh.
* [oh-my-zsh ![GitHub Repo Stars](https://img.shields.io/github/stars/robbyrussell/oh-my-zsh) ![GitHub last commit](https://img.shields.io/github/last-commit/robbyrussell/oh-my-zsh)](https://github.com/robbyrussell/oh-my-zsh/) - A community driven framework for managing zsh configuration.
* [zgen ![GitHub Repo Stars](https://img.shields.io/github/stars/tarjoilija/zgen) ![GitHub last commit](https://img.shields.io/github/last-commit/tarjoilija/zgen)](https://github.com/tarjoilija/zgen) - Faster framework for managing your zsh configuration, backward compatible with oh-my-zsh plugins
* [zsh](http://www.zsh.org/) - A shell designed for interactive use, although it is also a powerful scripting language.
* [shellcheck ![GitHub Repo Stars](https://img.shields.io/github/stars/koalaman/shellcheck) ![GitHub last commit](https://img.shields.io/github/last-commit/koalaman/shellcheck)](https://github.com/koalaman/shellcheck) - Lint for shell. Will find deprecated and/or dangerous usage in shell scripts
* [zsh quickstart kit ![GitHub Repo Stars](https://img.shields.io/github/stars/unixorn/zsh-quickstart-kit) ![GitHub last commit](https://img.shields.io/github/last-commit/unixorn/zsh-quickstart-kit)](https://github.com/unixorn/zsh-quickstart-kit) - Quick intro for getting set up with zsh and zgen

## Text
*Tools for working with text files - search, replace, processing*

* [ack ![GitHub Repo Stars](https://img.shields.io/github/stars/petdance/ack2) ![GitHub last commit](https://img.shields.io/github/last-commit/petdance/ack2)](https://github.com/petdance/ack2) - the Perl based
  better-than-grep tool.
* [ag ![GitHub Repo Stars](https://img.shields.io/github/stars/ggreer/the_silver_searcher) ![GitHub last commit](https://img.shields.io/github/last-commit/ggreer/the_silver_searcher)](https://github.com/ggreer/the_silver_searcher) - A C based code-searching tool similar to ack, but faster
* [peco ![GitHub Repo Stars](https://img.shields.io/github/stars/peco/peco) ![GitHub last commit](https://img.shields.io/github/last-commit/peco/peco)](https://github.com/peco/peco) - interactive filtering, like interactive Grep
* [ripgrep ![GitHub Repo Stars](https://img.shields.io/github/stars/BurntSushi/ripgrep) ![GitHub last commit](https://img.shields.io/github/last-commit/BurntSushi/ripgrep)](https://github.com/BurntSushi/ripgrep) - Faster than grep, written in Rust


## Terminal
*Tools and addons for terminal and terminal work*

* [autojump ![GitHub Repo Stars](https://img.shields.io/github/stars/joelthelion/autojump) ![GitHub last commit](https://img.shields.io/github/last-commit/joelthelion/autojump)](https://github.com/joelthelion/autojump) - remembers your
  folders and jump to them based on partial recall (e.g. `j proj` will jump
to `/home/Users/yourself/projects`.
* [fasd ![GitHub Repo Stars](https://img.shields.io/github/stars/clvv/fasd) ![GitHub last commit](https://img.shields.io/github/last-commit/clvv/fasd)](https://github.com/clvv/fasd) Command-line productivity booster, offers quick access to files and directories.
* [freshenv ![GitHub Repo Stars](https://img.shields.io/github/stars/raiyanyahya/freshenv) ![GitHub last commit](https://img.shields.io/github/last-commit/raiyanyahya/freshenv)](https://github.com/raiyanyahya/freshenv) - Provision, share, manage local and cloud developer environments.
* [homebrew](http://brew.sh) - Makes it easy to install open source packages on an `OS X` system with a single command.
* [hss ![GitHub Repo Stars](https://img.shields.io/github/stars/six-ddc/hss) ![GitHub last commit](https://img.shields.io/github/last-commit/six-ddc/hss)](https://github.com/six-ddc/hss) - Never type the annoying ssh commands again.
* [httpie](http://httpie.org/) A command line HTTP client, a user-friendly cURL replacement.
* [iTerm2](http://www.iterm2.com/) - a great terminal replacement `/OSX/`
* [jq](https://stedolan.github.io/jq/) - a lightweight and flexible command-line JSON processor
* [oh-my-zsh ![GitHub Repo Stars](https://img.shields.io/github/stars/robbyrussell/oh-my-zsh) ![GitHub last commit](https://img.shields.io/github/last-commit/robbyrussell/oh-my-zsh)](https://github.com/robbyrussell/oh-my-zsh) - the
  incredible ZSH addon.
* [Pipe Viewer](http://www.ivarch.com/programs/pv.shtml) - a tool for monitoring the progress of data through a pipeline
* [tmux](https://tmux.github.io/) the awesome terminal multiplexer.
* [zoxide ![GitHub Repo Stars](https://img.shields.io/github/stars/ajeetdsouza/zoxide) ![GitHub last commit](https://img.shields.io/github/last-commit/ajeetdsouza/zoxide)](https://github.com/ajeetdsouza/zoxide) - A better way to navigate your filesystem. Written in Rust, cross-shell, and much faster than other autojumpers.


## Workflow
*Tools and addons which improve your daily workflow with code*

* [fswatch ![GitHub Repo Stars](https://img.shields.io/github/stars/alandipert/fswatch) ![GitHub last commit](https://img.shields.io/github/last-commit/alandipert/fswatch)](https://github.com/alandipert/fswatch) - a watch tool which
  will emit FS events and you can run commands on demand with. Note -
`fswatch-run` too.
* [guard ![GitHub Repo Stars](https://img.shields.io/github/stars/guard/guard) ![GitHub last commit](https://img.shields.io/github/last-commit/guard/guard)](https://github.com/guard/guard) - FS watch tool with a huge ecosystem of plugins
* [just](https://github/casey/just) - A task runner for conveniently saving and running project-specific commands. Similar to make, but much nicer
* [LiveReload](http://livereload.com/) - FS watch and preprocessor as a desktop app for `/OSX/` and `/WIN/` with complementary browser extensions
  * [guard-livereload ![GitHub Repo Stars](https://img.shields.io/github/stars/guard/guard-livereload) ![GitHub last commit](https://img.shields.io/github/last-commit/guard/guard-livereload)](https://github.com/guard/guard-livereload) - Guard plugin compatible with LiveReload's browser extensions
  * [simplehttp ![GitHub Repo Stars](https://img.shields.io/github/stars/snwfdhmp/simplehttp) ![GitHub last commit](https://img.shields.io/github/last-commit/snwfdhmp/simplehttp)](https://github.com/snwfdhmp/simplehttp) Fastest and simplest way to start serving a local directory over http.
* [watchman ![GitHub Repo Stars](https://img.shields.io/github/stars/facebook/watchman) ![GitHub last commit](https://img.shields.io/github/last-commit/facebook/watchman)](https://github.com/facebook/watchman) - Facebook's better
  `watch` - note it works as a service.
* [Zappr ![GitHub Repo Stars](https://img.shields.io/github/stars/zalando/zappr) ![GitHub last commit](https://img.shields.io/github/last-commit/zalando/zappr)](https://github.com/zalando/zappr) - GitHub integration built to enhance your project workflow via enable/disable pull request approval checks.
* [ergo ![GitHub Repo Stars](https://img.shields.io/github/stars/cristianoliveira/ergo) ![GitHub last commit](https://img.shields.io/github/last-commit/cristianoliveira/ergo)](https://github.com/cristianoliveira/ergo) - The management of multiple local services running over different ports made easy.
* [Prodmodel ![GitHub Repo Stars](https://img.shields.io/github/stars/prodmodel/prodmodel) ![GitHub last commit](https://img.shields.io/github/last-commit/prodmodel/prodmodel)](https://github.com/prodmodel/prodmodel) - Build tool for data science pipelines.
* [Gebug ![GitHub Repo Stars](https://img.shields.io/github/stars/moshebe/gebug) ![GitHub last commit](https://img.shields.io/github/last-commit/moshebe/gebug)](https://github.com/moshebe/gebug) - A tool that makes debugging of Dockerized Go applications super easy by enabling Debugger and Hot-Reload features, seamlessly.
