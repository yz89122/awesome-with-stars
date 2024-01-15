# Awesome Dotfiles [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated list of dotfiles resources. Inspired by the [awesome ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome)](https://github.com/sindresorhus/awesome) list thing.
Note that some articles or tools may look old or old-fashioned, but this usually means they're battle-tested and mature
(like dotfiles themselves). Feel free to propose new articles, projects or tools!

## Articles

### Introductions

- [Getting started with dotfiles](https://www.webpro.nl/articles/getting-started-with-dotfiles)
  ([L. Kappert](https://github.com/webpro))
- [Getting started with dotfiles](https://driesvints.com/blog/getting-started-with-dotfiles/)
  ([D. Vints](https://github.com/driesvints))
- [Managing your dotfiles](https://www.webpro.nl/articles/managing-your-dotfiles)
- [Dotfiles Are Meant to Be Forked](https://zachholman.com/2010/08/dotfiles-are-meant-to-be-forked/)
- [Dotfile discovery](https://wynnnetherland.com/journal/dotfiles-discovery/)
- [I do Dotfiles!](https://jogendra.dev/i-do-dotfiles)

### Tutorials

- [Setting up a new (OS X) development machine: Part 3 - Dotfiles and custom SSH config](https://mattstauffer.com/blog/setting-up-a-new-os-x-development-machine-part-3-dotfiles-rc-files-and-ssh-config/)
- [Setting Up a Mac Dev Machine From Zero to Hero With Dotfiles](https://code.tutsplus.com/setting-up-a-mac-dev-machine-from-zero-to-hero-with-dotfiles--net-35449t)
- [Using Git and GitHub to manage your dotfiles](http://blog.smalleycreative.com/tutorials/using-git-and-github-to-manage-your-dotfiles/)
- [conf.d like directories for zsh/bash dotfiles](https://chr4.org/blog/2014/09/10/conf-dot-d-like-directories-for-zsh-slash-bash-dotfiles/)
- [Managing your dotfiles](https://www.anishathalye.com/2014/08/03/managing-your-dotfiles/)
- [The best way to store your dotfiles: A bare Git repository](https://www.atlassian.com/git/tutorials/dotfiles)
- [Dotfiles Management](https://mitxela.com/projects/dotfiles_management)

### Shell startup

- [Shell startup scripts](https://blog.flowblok.id.au/2013-02/shell-startup-scripts.html)
- [Zsh/Bash startup files loading order](https://shreevatsa.wordpress.com/2008/03/30/zshbash-startup-files-loading-order-bashrc-zshrc-etc/)

### Using specific tools

- [Using GNU Stow to manage your dotfiles](http://brandon.invergo.net/news/2012-05-26-using-gnu-stow-to-manage-your-dotfiles.html)
- [Managing Dotfile Symlinks with GNU Stow](https://spin.atomicobject.com/2014/12/26/manage-dotfiles-gnu-stow/)
- [Dotfiles and dev tools provisioned by Ansible](http://palcu.blogspot.com/2014/06/dotfiles-and-dev-tools-provisioned-by.html)

## Find dotfiles repos

There are many great dotfiles repos out there, each containing their own inspiration and gems. One way to go through
them is to [search GitHub for "dotfiles"](https://github.com/search?q=dotfiles&type=Repositories).

Also see:

- [Google for "dotfiles"](https://www.google.nl/search?q=dotfiles)
- [Archlinux collection](https://wiki.archlinux.org/index.php/Dotfiles)
- Tip: search for a filename on GitHub, e.g.
  [in:path .gitconfig](https://github.com/search?utf8=%E2%9C%93&type=Code&q=in%3Apath+.gitconfig).

## Example dotfiles repos

A collection of the most popular, well-maintained, and collaborative dotfiles repositories & frameworks. Some projects
contain just the dotfiles. Others go further by allowing you to easily add your own custom dotfiles, and some include
scripts to manage dotfiles and plugins.

### Bash

| Title                                                               | Description                                  | Focus                                                                                                                        |
| :------------------------------------------------------------------ | :------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------- |
| [Bash it ![GitHub Repo Stars](https://img.shields.io/github/stars/Bash-it/bash-it) ![GitHub last commit](https://img.shields.io/github/last-commit/Bash-it/bash-it)](https://github.com/Bash-it/bash-it)                       | Community bash framework.                    | Autocompletion, themes, aliases, custom functions. Well-structured framework                                                 |
| [Mathias’s dotfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/mathiasbynens/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/mathiasbynens/dotfiles)](https://github.com/mathiasbynens/dotfiles)     | Sensible hacker defaults for macOS           | 🔧 .files, including ~/.macos — sensible hacker defaults for macOS                                                           |
| [webpro's dotfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/webpro/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/webpro/dotfiles)](https://github.com/webpro/dotfiles)             | macOS dotfiles                               | Bash, Homebrew, Brew Cask, Git, Node.js, Hammerspoon.                                                                        |
| [rootbeersoup's dotfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/darrylabbate/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/darrylabbate/dotfiles)](https://github.com/darrylabbate/dotfiles) | Effortless Bash, Vim and macOS configuration | A `curl \| sh` installer and a Makefile offer portable and effortless setup for either permanent or temporary configuration. |

### Zsh

| Title                                                         | Description                                                              | Focus                                                                                                                       |
| :------------------------------------------------------------ | :----------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [thoughtbot dotfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/thoughtbot/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/thoughtbot/dotfiles)](https://github.com/thoughtbot/dotfiles) | Set of vim, zsh, git, and tmux configuration files                       | Zsh, vim, tmux, git, homebrew. Uses [rcm ![GitHub Repo Stars](https://img.shields.io/github/stars/thoughtbot/rcm) ![GitHub last commit](https://img.shields.io/github/last-commit/thoughtbot/rcm)](https://github.com/thoughtbot/rcm).                                               |
| [oh-my-zsh](https://ohmyz.sh)                                 | Community-driven framework for managing your zsh configuration.          | Oh My Zsh is an open source, community-driven framework for managing your Zsh configuration                                 |
| [Prezto ![GitHub Repo Stars](https://img.shields.io/github/stars/sorin-ionescu/prezto) ![GitHub last commit](https://img.shields.io/github/last-commit/sorin-ionescu/prezto)](https://github.com/sorin-ionescu/prezto)             | The configuration framework for Zsh.                                     | Enriches the command line interface environment with sane defaults, aliases, functions, auto completion, and prompt themes. |
| [Dries's dotfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/driesvints/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/driesvints/dotfiles)](https://github.com/driesvints/dotfiles)    | Simplified approach to dotfiles for macOS                                | Zsh, Oh My Zsh, macOS, Homebrew, Mackup                                                                                     |
| [sobolevn's dotfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/sobolevn/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/sobolevn/dotfiles)](https://github.com/sobolevn/dotfiles)   | Dotfiles for the developer happiness                                     | macOS, zsh, brew, vscode, codespaces, python, node, elixir                                                                  |
| [yutkat's dotfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/yutkat/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/yutkat/dotfiles)](https://github.com/yutkat/dotfiles)       | Well-maintained dotfiles that use CI to test and measure startup speeds. | Zsh, Neovim, Wezterm, swaywm working on Arch/Ubuntu/Fedora Linux.                                                           |
| [Luke's voidrice ![GitHub Repo Stars](https://img.shields.io/github/stars/LukeSmithxyz/voidrice) ![GitHub last commit](https://img.shields.io/github/last-commit/LukeSmithxyz/voidrice)](https://github.com/LukeSmithxyz/voidrice)   | My dotfiles (deployed by LARBS)                                          | Zsh, vim/nvim, zsf                                                                                                          |
| [2KAbhishek's dots2k ![GitHub Repo Stars](https://img.shields.io/github/stars/2KAbhishek/dots2k) ![GitHub last commit](https://img.shields.io/github/last-commit/2KAbhishek/dots2k)](https://github.com/2KAbhishek/dots2k)   | Passionately crafted, extensible dotfiles with multi platform support    | CLI tools at core, with extensions for different platforms (windows/mac/android), editors and window managers               |

### Fish

| Title                                                    | Description                                                                    | Focus                                                                            |
| :------------------------------------------------------- | :----------------------------------------------------------------------------- | :------------------------------------------------------------------------------- |
| [oh-my-fish ![GitHub Repo Stars](https://img.shields.io/github/stars/oh-my-fish/oh-my-fish) ![GitHub last commit](https://img.shields.io/github/last-commit/oh-my-fish/oh-my-fish)](https://github.com/oh-my-fish/oh-my-fish)   | The Fish Shell Framework                                                       | Core infrastructure to allow you to install packages to extend/modify your shell |
| [Paul's dotfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/paulirish/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/paulirish/dotfiles)](https://github.com/paulirish/dotfiles) | paul's fish, bash, git, etc config files. good stuff.                          | Fish, macOS, Homebrew, Custom Shell functions                                    |
| [rkalis's dotfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/rkalis/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/rkalis/dotfiles)](https://github.com/rkalis/dotfiles)  | Well-maintained dotfiles featuring Fish, repository management and Hammerspoon | Fish, macOS, Homebrew, Repository management, Hammerspoon                        |

### Ansible

| Title                                                   | Description                                  | Focus                                                                           |
| :------------------------------------------------------ | :------------------------------------------- | :------------------------------------------------------------------------------ |
| [.dots ![GitHub Repo Stars](https://img.shields.io/github/stars/Addvilz/dots) ![GitHub last commit](https://img.shields.io/github/last-commit/Addvilz/dots)](https://github.com/Addvilz/dots)                | New and upgraded dotfiles, now with Ansible! | Completely automated desktop setup, configuration and maintenance using Ansible |
| [sloria's dotfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/sloria/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/sloria/dotfiles)](https://github.com/sloria/dotfiles) | sloria's dotfiles as Ansible roles           | Sets up a full local development environment with a single command              |

## Tools

- [Ansible](https://www.ansible.com) - Radically simple configuration-management, application deployment,
  task-execution, and multinode orchestration engine.
- [bashdot ![GitHub Repo Stars](https://img.shields.io/github/stars/bashdot/bashdot) ![GitHub last commit](https://img.shields.io/github/last-commit/bashdot/bashdot)](https://github.com/bashdot/bashdot) - Minimalist dotfile management framework written entirely in bash.
- [chezmoi ![GitHub Repo Stars](https://img.shields.io/github/stars/twpayne/chezmoi) ![GitHub last commit](https://img.shields.io/github/last-commit/twpayne/chezmoi)](https://github.com/twpayne/chezmoi) - Manage your dotfiles securely across multiple machines.
- [comtrya ![GitHub Repo Stars](https://img.shields.io/github/stars/comtrya/comtrya) ![GitHub last commit](https://img.shields.io/github/last-commit/comtrya/comtrya)](https://github.com/comtrya/comtrya) - Configuration management for localhost, written in Rust, for Linux,
  BSD, macOS, and Windows.
- [dotbare ![GitHub Repo Stars](https://img.shields.io/github/stars/kazhala/dotbare) ![GitHub last commit](https://img.shields.io/github/last-commit/kazhala/dotbare)](https://github.com/kazhala/dotbare) - Manage dotfiles interactively with fzf.
- [dotbot ![GitHub Repo Stars](https://img.shields.io/github/stars/anishathalye/dotbot) ![GitHub last commit](https://img.shields.io/github/last-commit/anishathalye/dotbot)](https://github.com/anishathalye/dotbot) - Tool that bootstraps your dotfiles.
- [dotdrop ![GitHub Repo Stars](https://img.shields.io/github/stars/deadc0de6/dotdrop) ![GitHub last commit](https://img.shields.io/github/last-commit/deadc0de6/dotdrop)](https://github.com/deadc0de6/dotdrop) - Save your dotfiles once, deploy them everywhere.
- [Fisher ![GitHub Repo Stars](https://img.shields.io/github/stars/jorgebucaran/fisher) ![GitHub last commit](https://img.shields.io/github/last-commit/jorgebucaran/fisher)](https://github.com/jorgebucaran/fisher) - A package manager for Fish.
- [fresh](https://freshshell.com) - Keep your dotfiles fresh. Fresh is a tool to source shell configuration (aliases,
  functions, etc) from others into your own configuration files.
- [GNU Stow](http://www.gnu.org/software/stow/) - Symlink farm manager which takes distinct packages of software and/or
  data located in separate directories on the filesystem, and makes them appear to be installed in the same place.
- [homeshick ![GitHub Repo Stars](https://img.shields.io/github/stars/andsens/homeshick) ![GitHub last commit](https://img.shields.io/github/last-commit/andsens/homeshick)](https://github.com/andsens/homeshick) - Git dotfile synchronizer written in Bash.
- [mackup ![GitHub Repo Stars](https://img.shields.io/github/stars/lra/mackup) ![GitHub last commit](https://img.shields.io/github/last-commit/lra/mackup)](https://github.com/lra/mackup) - Keep your application settings in sync (macOS/Linux).
- [Pearl ![GitHub Repo Stars](https://img.shields.io/github/stars/pearl-core/pearl) ![GitHub last commit](https://img.shields.io/github/last-commit/pearl-core/pearl)](https://github.com/pearl-core/pearl) - Package manager that allows to control, sync, share dotfiles as
  packages automatically activated during shells or editors startup. There is a wide range of packages already
  available. in the [Official Pearl Hub](https://github.com/pearl-hub) (for Linux and OSX).
- [rcm ![GitHub Repo Stars](https://img.shields.io/github/stars/thoughtbot/rcm) ![GitHub last commit](https://img.shields.io/github/last-commit/thoughtbot/rcm)](https://github.com/thoughtbot/rcm) - rc file (dotfile) management.
- [themer ![GitHub Repo Stars](https://img.shields.io/github/stars/themerdev/themer) ![GitHub last commit](https://img.shields.io/github/last-commit/themerdev/themer)](https://github.com/themerdev/themer) - Manage and generate themes across your development tools from within
  your dotfiles.
- [toml-bombadil ![GitHub Repo Stars](https://img.shields.io/github/stars/oknozor/toml-bombadil) ![GitHub last commit](https://img.shields.io/github/last-commit/oknozor/toml-bombadil)](https://github.com/oknozor/toml-bombadil) - Templatize and manage your dotfiles.
- [xdg-ninja ![GitHub Repo Stars](https://img.shields.io/github/stars/b3nj5m1n/xdg-ninja) ![GitHub last commit](https://img.shields.io/github/last-commit/b3nj5m1n/xdg-ninja)](https://github.com/b3nj5m1n/xdg-ninja) - A shell script which checks your $HOME for unwanted files and
  directories.
- [yadm ![GitHub Repo Stars](https://img.shields.io/github/stars/TheLocehiliosan/yadm) ![GitHub last commit](https://img.shields.io/github/last-commit/TheLocehiliosan/yadm)](https://github.com/TheLocehiliosan/yadm) - Tool for managing a collection of files across multiple computers,
  using a shared Git repository and some additional features.

### macOS

- [dockutil ![GitHub Repo Stars](https://img.shields.io/github/stars/kcrawford/dockutil) ![GitHub last commit](https://img.shields.io/github/last-commit/kcrawford/dockutil)](https://github.com/kcrawford/dockutil) - Command line tool for managing dock items.
- [mas ![GitHub Repo Stars](https://img.shields.io/github/stars/mas-cli/mas) ![GitHub last commit](https://img.shields.io/github/last-commit/mas-cli/mas)](https://github.com/mas-cli/mas) - Mac App Store command line interface.
- [zero ![GitHub Repo Stars](https://img.shields.io/github/stars/zero-sh/zero.sh) ![GitHub last commit](https://img.shields.io/github/last-commit/zero-sh/zero.sh)](https://github.com/zero-sh/zero.sh) - Radically simple personal bootstrapping tool for macOS.

## Miscellaneous

- [dotfiles.github.io](https://dotfiles.github.io/) - Your unofficial guide to dotfiles on GitHub.
- [Filesystem Hierarchy Standard](https://en.wikipedia.org/wiki/Filesystem_Hierarchy_Standard) - Directory structure and
  directory contents in Linux distributions.
- [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html) -
  [Summary](https://wiki.archlinux.org/title/XDG_Base_Directory)
- [A lesson in shortcuts](https://web.archive.org/web/20180827160401/https://plus.google.com/+RobPikeTheHuman/posts/R58WgWwN9jp) -
  How the idea of "hidden" or "dot" files was born, by Rob Pike (originally posted on Google+).

## Related Lists

- [Awesome Dev Env ![GitHub Repo Stars](https://img.shields.io/github/stars/jondot/awesome-devenv) ![GitHub last commit](https://img.shields.io/github/last-commit/jondot/awesome-devenv)](https://github.com/jondot/awesome-devenv) - Curated list of awesome tools, resources and workflow
  tips making an awesome development environment.
- [Awesome Fish ![GitHub Repo Stars](https://img.shields.io/github/stars/jorgebucaran/awsm.fish) ![GitHub last commit](https://img.shields.io/github/last-commit/jorgebucaran/awsm.fish)](https://github.com/jorgebucaran/awsm.fish) - Curated list of packages, prompts, and resources for the
  fish shell.
- [Awesome Shell ![GitHub Repo Stars](https://img.shields.io/github/stars/alebcay/awesome-shell) ![GitHub last commit](https://img.shields.io/github/last-commit/alebcay/awesome-shell)](https://github.com/alebcay/awesome-shell) - Curated list of awesome command-line frameworks, toolkits,
  guides and gizmos.
- [Awesome Sysadmin ![GitHub Repo Stars](https://img.shields.io/github/stars/awesome-foss/awesome-sysadmin) ![GitHub last commit](https://img.shields.io/github/last-commit/awesome-foss/awesome-sysadmin)](https://github.com/awesome-foss/awesome-sysadmin) - A curated list of amazingly awesome open source
  sysadmin resources.
- [Awesome Zsh Plugins ![GitHub Repo Stars](https://img.shields.io/github/stars/unixorn/awesome-zsh-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/unixorn/awesome-zsh-plugins)](https://github.com/unixorn/awesome-zsh-plugins) - List of Zsh plugins suitable for use with
  oh-my-zsh, antigen & Prezto.
- [Terminals Are Sexy ![GitHub Repo Stars](https://img.shields.io/github/stars/k4m4/terminals-are-sexy) ![GitHub last commit](https://img.shields.io/github/last-commit/k4m4/terminals-are-sexy)](https://github.com/k4m4/terminals-are-sexy) - A curated list of Terminal frameworks, plugins &
  resources for CLI lovers.

## Archive/abandoned projects

- [antigen](http://antigen.sharats.me)
- [Bashstrap ![GitHub Repo Stars](https://img.shields.io/github/stars/barryclark/bashstrap) ![GitHub last commit](https://img.shields.io/github/last-commit/barryclark/bashstrap)](https://github.com/barryclark/bashstrap)
- [battleschool ![GitHub Repo Stars](https://img.shields.io/github/stars/spencergibb/battleschool) ![GitHub last commit](https://img.shields.io/github/last-commit/spencergibb/battleschool)](https://github.com/spencergibb/battleschool)
- [Bork ![GitHub Repo Stars](https://img.shields.io/github/stars/mattly/bork) ![GitHub last commit](https://img.shields.io/github/last-commit/mattly/bork)](https://github.com/mattly/bork)
- [Cider ![GitHub Repo Stars](https://img.shields.io/github/stars/msanders/cider) ![GitHub last commit](https://img.shields.io/github/last-commit/msanders/cider)](https://github.com/msanders/cider)
- [dev-setup ![GitHub Repo Stars](https://img.shields.io/github/stars/donnemartin/dev-setup) ![GitHub last commit](https://img.shields.io/github/last-commit/donnemartin/dev-setup)](https://github.com/donnemartin/dev-setup)
- [dotfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/jbernard/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/jbernard/dotfiles)](https://github.com/jbernard/dotfiles)
- [dotstow ![GitHub Repo Stars](https://img.shields.io/github/stars/clayrisser/dotstow) ![GitHub last commit](https://img.shields.io/github/last-commit/clayrisser/dotstow)](https://github.com/clayrisser/dotstow)
- [Eduardo's dotfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/eduardolundgren/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/eduardolundgren/dotfiles)](https://github.com/eduardolundgren/dotfiles)
- [ellipsis ![GitHub Repo Stars](https://img.shields.io/github/stars/ellipsis/ellipsis) ![GitHub last commit](https://img.shields.io/github/last-commit/ellipsis/ellipsis)](https://github.com/ellipsis/ellipsis)
- [emplace ![GitHub Repo Stars](https://img.shields.io/github/stars/tversteeg/emplace) ![GitHub last commit](https://img.shields.io/github/last-commit/tversteeg/emplace)](https://github.com/tversteeg/emplace)
- [holman does dotfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/holman/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/holman/dotfiles)](https://github.com/holman/dotfiles)
- [homesick ![GitHub Repo Stars](https://img.shields.io/github/stars/technicalpickles/homesick) ![GitHub last commit](https://img.shields.io/github/last-commit/technicalpickles/homesick)](https://github.com/technicalpickles/homesick)
- [Kevin's dotfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/kdeldycke/dotfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/kdeldycke/dotfiles)](https://github.com/kdeldycke/dotfiles)
- [kody ![GitHub Repo Stars](https://img.shields.io/github/stars/jh3y/kody) ![GitHub last commit](https://img.shields.io/github/last-commit/jh3y/kody)](https://github.com/jh3y/kody)
- [macOS Defaults ![GitHub Repo Stars](https://img.shields.io/github/stars/kevinSuttle/macOS-Defaults) ![GitHub last commit](https://img.shields.io/github/last-commit/kevinSuttle/macOS-Defaults)](https://github.com/kevinSuttle/macOS-Defaults)
- [osxc](http://osxc.github.io)
- [vcsh ![GitHub Repo Stars](https://img.shields.io/github/stars/RichiH/vcsh) ![GitHub last commit](https://img.shields.io/github/last-commit/RichiH/vcsh)](https://github.com/RichiH/vcsh)
  ([article](https://blog.tfnico.com/2014/03/managing-dot-files-with-vcsh-and-myrepos.html),
  [article](https://www.kunxi.org/2014/02/manage-dotfiles-using-vcsh-and-mr/))
- [YADR](http://skwp.github.io/dotfiles/)

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Lars Kappert](https://www.webpro.nl) has waived all copyright and related or
neighboring rights to this work.
