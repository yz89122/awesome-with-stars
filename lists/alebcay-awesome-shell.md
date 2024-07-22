```
 █████╗ ██╗    ██╗███████╗███████╗ ██████╗ ███╗   ███╗███████╗
██╔══██╗██║    ██║██╔════╝██╔════╝██╔═══██╗████╗ ████║██╔════╝
███████║██║ █╗ ██║█████╗  ███████╗██║   ██║██╔████╔██║█████╗
██╔══██║██║███╗██║██╔══╝  ╚════██║██║   ██║██║╚██╔╝██║██╔══╝
██║  ██║╚███╔███╔╝███████╗███████║╚██████╔╝██║ ╚═╝ ██║███████╗
╚═╝  ╚═╝ ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
███████╗██╗  ██╗███████╗██╗     ██╗
██╔════╝██║  ██║██╔════╝██║     ██║
███████╗███████║█████╗  ██║     ██║
╚════██║██╔══██║██╔══╝  ██║     ██║
███████║██║  ██║███████╗███████╗███████╗
╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝
```

# Awesome Shell [![Awesome][awesome-badge]][awesome-link]

A curated list of awesome command-line frameworks, toolkits, guides and gizmos. Inspired by awesome-php. This awesome collection is also available on [Unix-Shell.ZEEF.com](https://unix-shell.zeef.com/caleb.xu).
- [Shells](#shells)
- [Command-Line Productivity](#command-line-productivity)
  - [Directory Navigation](#directory-navigation)
- [Customization](#customization)
- [For Developers](#for-developers)
- [System Utilities](#system-utilities)
- [Downloading and Serving](#downloading-and-serving)
- [Multimedia and File Formats](#multimedia-and-file-formats)
- [Applications](#applications)
- [Games](#games)
- [Shell Package Management](#shell-package-management)
- [Shell Script Development](#shell-script-development)
- [Guides](#guides)
- [**Awesome Zsh**][awesome-zsh]&nbsp; [![Awesome][awesome-badge]][awesome-zsh]
- [**Awesome Fish**][awesome-fish] [![Awesome][awesome-badge]][awesome-fish]
- [**Awesome Bash**][awesome-bash] [![Awesome][awesome-badge]][awesome-bash]
- [Other Awesome Lists](#other-awesome-lists)

## Shells

*Choose your base shell.*

* [bash](https://www.gnu.org/software/bash/) - GNU Project's shell (Bourne Again SHell)
* [elvish](https://elv.sh/) - Friendly, expressive shell features like anonymous functions and data structures
* [es](https://wryun.github.io/es-shell/) - The extensible shell, based on Plan 9's [rc ![GitHub Repo Stars](https://img.shields.io/github/stars/rakitzis/rc) ![GitHub last commit](https://img.shields.io/github/last-commit/rakitzis/rc)](https://github.com/rakitzis/rc) shell
* [fish](https://fishshell.com) - Smart and user-friendly command line shell
* [ion ![GitHub Repo Stars](https://img.shields.io/github/stars/redox-os/ion) ![GitHub last commit](https://img.shields.io/github/last-commit/redox-os/ion)](https://github.com/redox-os/ion) - A modern system shell that features a simple, yet powerful, syntax. It is written entirely in Rust.
* [ksh93 ![GitHub Repo Stars](https://img.shields.io/github/stars/att/ast) ![GitHub last commit](https://img.shields.io/github/last-commit/att/ast)](https://github.com/att/ast) - Korn Shell
* [mksh ![GitHub Repo Stars](https://img.shields.io/github/stars/MirBSD/mksh) ![GitHub last commit](https://img.shields.io/github/last-commit/MirBSD/mksh)](https://github.com/MirBSD/mksh) - MirBSD Korn Shell
* [murex ![GitHub Repo Stars](https://img.shields.io/github/stars/lmorg/murex) ![GitHub last commit](https://img.shields.io/github/last-commit/lmorg/murex)](https://github.com/lmorg/murex) - A smarter shell and scripting environment with advanced features designed for usability, safety and productivity (eg smarter DevOps tooling)
* [ngs ![GitHub Repo Stars](https://img.shields.io/github/stars/ngs-lang/ngs) ![GitHub last commit](https://img.shields.io/github/last-commit/ngs-lang/ngs)](https://github.com/ngs-lang/ngs) - Fully featured scripting language created specifically for Ops. REPL is being developed.
* [nushell ![GitHub Repo Stars](https://img.shields.io/github/stars/nushell/nushell) ![GitHub last commit](https://img.shields.io/github/last-commit/nushell/nushell)](https://github.com/nushell/nushell) - A modern shell written in Rust
* [oksh ![GitHub Repo Stars](https://img.shields.io/github/stars/ibara/oksh) ![GitHub last commit](https://img.shields.io/github/last-commit/ibara/oksh)](https://github.com/ibara/oksh) - Portable OpenBSD ksh
* [osh](https://www.oilshell.org) - Bash compatible, with new/modern Unix shell language called Oil
* [pdksh](https://cvsweb.openbsd.org/cgi-bin/cvsweb/src/bin/ksh/) - Public domain Korn shell
* [powershell](https://docs.microsoft.com/en-us/powershell/scripting/overview) a cross-platform task automation and configuration management framework, consisting of a command-line shell and scripting language
* [shell++ ![GitHub Repo Stars](https://img.shields.io/github/stars/alexst07/shell-plus-plus) ![GitHub last commit](https://img.shields.io/github/last-commit/alexst07/shell-plus-plus)](https://github.com/alexst07/shell-plus-plus) - Friendly and modern functional and object oriented shell script language
* [shenv ![GitHub Repo Stars](https://img.shields.io/github/stars/shenv/shenv) ![GitHub last commit](https://img.shields.io/github/last-commit/shenv/shenv)](https://github.com/shenv/shenv) - Simple shell version management
* [tcsh](https://www.tcsh.org/) - C shell with file name completion and command line editing
* [xonsh](https://xon.sh) - Python-ish, BASHwards-looking shell language and command prompt
* [yash ![GitHub Repo Stars](https://img.shields.io/github/stars/magicant/yash) ![GitHub last commit](https://img.shields.io/github/last-commit/magicant/yash)](https://github.com/magicant/yash) - A POSIX-compliant command line shell with built-in support for completion and prediction based on command history
* [zsh](https://www.zsh.org) - Powerful shell with scripting language

## Command-Line Productivity

*Search, bookmarks, multiplexing, and other tools that make your terminal experience more productive.*

* [AdvancedNewFile ![GitHub Repo Stars](https://img.shields.io/github/stars/tanrax/terminal-AdvancedNewFile) ![GitHub last commit](https://img.shields.io/github/last-commit/tanrax/terminal-AdvancedNewFile)](https://github.com/tanrax/terminal-AdvancedNewFile) - Fast creation of files and directories in a recursive way. Inspired by the Vim plugin.
* [ag ![GitHub Repo Stars](https://img.shields.io/github/stars/ggreer/the_silver_searcher) ![GitHub last commit](https://img.shields.io/github/last-commit/ggreer/the_silver_searcher)](https://github.com/ggreer/the_silver_searcher) - Super fast string search through a directory hierarchy
* [aliases ![GitHub Repo Stars](https://img.shields.io/github/stars/sebglazebrook/aliases) ![GitHub last commit](https://img.shields.io/github/last-commit/sebglazebrook/aliases)](https://github.com/sebglazebrook/aliases) - Contextual, dynamic, organized aliases for bash
* [arttime ![GitHub Repo Stars](https://img.shields.io/github/stars/reportaman/arttime) ![GitHub last commit](https://img.shields.io/github/last-commit/reportaman/arttime)](https://github.com/reportaman/arttime) - Beauty of text art meets functionality of clock, timer, pomodoro++ time manager
* [autoenv ![GitHub Repo Stars](https://img.shields.io/github/stars/hyperupcall/autoenv) ![GitHub last commit](https://img.shields.io/github/last-commit/hyperupcall/autoenv)](https://github.com/hyperupcall/autoenv) - Directory-based environments.
* [await ![GitHub Repo Stars](https://img.shields.io/github/stars/slavaGanzin/await) ![GitHub last commit](https://img.shields.io/github/last-commit/slavaGanzin/await)](https://github.com/slavaGanzin/await) - single binary that run list of commands in parallel and waits for their termination
* [bartib ![GitHub Repo Stars](https://img.shields.io/github/stars/nikolassv/bartib) ![GitHub last commit](https://img.shields.io/github/last-commit/nikolassv/bartib)](https://github.com/nikolassv/bartib) - A simple timetracker for the command line. It saves a log of all tracked activities as a plaintext file and allows you to create flexible reports.
* [bashhub ![GitHub Repo Stars](https://img.shields.io/github/stars/rcaloras/bashhub-client) ![GitHub last commit](https://img.shields.io/github/last-commit/rcaloras/bashhub-client)](https://github.com/rcaloras/bashhub-client) - :cloud: Bash history in the cloud. Indexed and searchable.
* [boilr ![GitHub Repo Stars](https://img.shields.io/github/stars/tmrts/boilr) ![GitHub last commit](https://img.shields.io/github/last-commit/tmrts/boilr)](https://github.com/tmrts/boilr) - A blazingly fast CLI tool for creating projects from boilerplate templates.
* [boom ![GitHub Repo Stars](https://img.shields.io/github/stars/holman/boom) ![GitHub last commit](https://img.shields.io/github/last-commit/holman/boom)](https://github.com/holman/boom) - Store links and snippets in the command line
* [borg ![GitHub Repo Stars](https://img.shields.io/github/stars/ok-borg/borg) ![GitHub last commit](https://img.shields.io/github/last-commit/ok-borg/borg)](https://github.com/ok-borg/borg) - A terminal based search engine for bash commands
* [broot ![GitHub Repo Stars](https://img.shields.io/github/stars/Canop/broot) ![GitHub last commit](https://img.shields.io/github/last-commit/Canop/broot)](https://github.com/Canop/broot) - A better way to navigate directories
* [browsh ![GitHub Repo Stars](https://img.shields.io/github/stars/browsh-org/browsh) ![GitHub last commit](https://img.shields.io/github/last-commit/browsh-org/browsh)](https://github.com/browsh-org/browsh) - The modern text-based browser
* [Buku ![GitHub Repo Stars](https://img.shields.io/github/stars/jarun/Buku) ![GitHub last commit](https://img.shields.io/github/last-commit/jarun/Buku)](https://github.com/jarun/Buku) - Powerful command-line bookmark manager
* [byobu](https://www.byobu.org) - Text-based window manager and terminal multiplexer
* [cod ![GitHub Repo Stars](https://img.shields.io/github/stars/dim-an/cod) ![GitHub last commit](https://img.shields.io/github/last-commit/dim-an/cod)](https://github.com/dim-an/cod) — A completion daemon for shell that learns when you invoke `--help` commands
* [CloudClip ![GitHub Repo Stars](https://img.shields.io/github/stars/skywind3000/CloudClip) ![GitHub last commit](https://img.shields.io/github/last-commit/skywind3000/CloudClip)](https://github.com/skywind3000/CloudClip) - Your own clipboard in the cloud, copy and paste text with gist between different systems
* [ddgr ![GitHub Repo Stars](https://img.shields.io/github/stars/jarun/ddgr) ![GitHub last commit](https://img.shields.io/github/last-commit/jarun/ddgr)](https://github.com/jarun/ddgr) - DuckDuckGo from the terminal
* [desk ![GitHub Repo Stars](https://img.shields.io/github/stars/jamesob/desk) ![GitHub last commit](https://img.shields.io/github/last-commit/jamesob/desk)](https://github.com/jamesob/desk) - A lightweight workspace manager for the shell
* [direnv ![GitHub Repo Stars](https://img.shields.io/github/stars/direnv/direnv) ![GitHub last commit](https://img.shields.io/github/last-commit/direnv/direnv)](https://github.com/direnv/direnv) - An environment switcher for the shell, compare with autoenv
* [dnote ![GitHub Repo Stars](https://img.shields.io/github/stars/dnote/dnote) ![GitHub last commit](https://img.shields.io/github/last-commit/dnote/dnote)](https://github.com/dnote/dnote) - A simple command line notebook with multi-device sync and web interface
* [eureka ![GitHub Repo Stars](https://img.shields.io/github/stars/simeg/eureka) ![GitHub last commit](https://img.shields.io/github/last-commit/simeg/eureka)](https://github.com/simeg/eureka/) - :bulb: CLI tool to input and store your ideas without leaving the terminal
* [fasd ![GitHub Repo Stars](https://img.shields.io/github/stars/clvv/fasd) ![GitHub last commit](https://img.shields.io/github/last-commit/clvv/fasd)](https://github.com/clvv/fasd) - Command-line productivity booster, offers quick access to files and directories
* [fd ![GitHub Repo Stars](https://img.shields.io/github/stars/sharkdp/fd) ![GitHub last commit](https://img.shields.io/github/last-commit/sharkdp/fd)](https://github.com/sharkdp/fd) - A simple, fast and user-friendly alternative to find.
* [foxy ![GitHub Repo Stars](https://img.shields.io/github/stars/s-p-k/foxy) ![GitHub last commit](https://img.shields.io/github/last-commit/s-p-k/foxy)](https://github.com/s-p-k/foxy) - Plain text bookmarks for Firefox and surf browsers.
* [fselect ![GitHub Repo Stars](https://img.shields.io/github/stars/jhspetersson/fselect) ![GitHub last commit](https://img.shields.io/github/last-commit/jhspetersson/fselect)](https://github.com/jhspetersson/fselect) - Find files with SQL-like queries.
* [funky ![GitHub Repo Stars](https://img.shields.io/github/stars/bbugyi200/funky) ![GitHub last commit](https://img.shields.io/github/last-commit/bbugyi200/funky)](https://github.com/bbugyi200/funky) - Extends functionality of shell functions making them more powerful and flexible.
* [fz ![GitHub Repo Stars](https://img.shields.io/github/stars/changyuheng/fz) ![GitHub last commit](https://img.shields.io/github/last-commit/changyuheng/fz)](https://github.com/changyuheng/fz) - Seamless fuzzy tab completion for z
* [fzf ![GitHub Repo Stars](https://img.shields.io/github/stars/junegunn/fzf) ![GitHub last commit](https://img.shields.io/github/last-commit/junegunn/fzf)](https://github.com/junegunn/fzf) - A command-line fuzzy finder
* [gitmux ![GitHub Repo Stars](https://img.shields.io/github/stars/arl/gitmux) ![GitHub last commit](https://img.shields.io/github/last-commit/arl/gitmux)](https://github.com/arl/gitmux) - Show Git status in Tmux status bar
* [googler ![GitHub Repo Stars](https://img.shields.io/github/stars/jarun/googler) ![GitHub last commit](https://img.shields.io/github/last-commit/jarun/googler)](https://github.com/jarun/googler) - Google Search, Google Site Search, Google News from the terminal
* [googlr ![GitHub Repo Stars](https://img.shields.io/github/stars/Astranno/googlr) ![GitHub last commit](https://img.shields.io/github/last-commit/Astranno/googlr)](https://github.com/Astranno/googlr) - Command line tool that lets you search Google from your terminal.
* [has ![GitHub Repo Stars](https://img.shields.io/github/stars/kdabir/has) ![GitHub last commit](https://img.shields.io/github/last-commit/kdabir/has)](https://github.com/kdabir/has) - `has` helps you check presence of various command line tools and their versions on path
* [how2 ![GitHub Repo Stars](https://img.shields.io/github/stars/santinic/how2) ![GitHub last commit](https://img.shields.io/github/last-commit/santinic/how2)](https://github.com/santinic/how2) - `how2` finds the simplest way to do something in a unix shell. It's like `man`, but you can query it in natural language.
* [navi ![GitHub Repo Stars](https://img.shields.io/github/stars/denisidoro/navi) ![GitHub last commit](https://img.shields.io/github/last-commit/denisidoro/navi)](https://github.com/denisidoro/navi) - An interactive cheatsheet tool for the command-line
* [hhighlighter ![GitHub Repo Stars](https://img.shields.io/github/stars/paoloantinori/hhighlighter) ![GitHub last commit](https://img.shields.io/github/last-commit/paoloantinori/hhighlighter)](https://github.com/paoloantinori/hhighlighter) - Colorize words in a command output
* [hr ![GitHub Repo Stars](https://img.shields.io/github/stars/LuRsT/hr) ![GitHub last commit](https://img.shields.io/github/last-commit/LuRsT/hr)](https://github.com/LuRsT/hr) - `<hr />` for your terminal
* [hss ![GitHub Repo Stars](https://img.shields.io/github/stars/six-ddc/hss) ![GitHub last commit](https://img.shields.io/github/last-commit/six-ddc/hss)](https://github.com/six-ddc/hss) - An interactive parallel ssh client featuring autocomplete and asynchronous execution
* [hstr ![GitHub Repo Stars](https://img.shields.io/github/stars/dvorka/hstr) ![GitHub last commit](https://img.shields.io/github/last-commit/dvorka/hstr)](https://github.com/dvorka/hstr) - Bash History Suggest Box
* [k ![GitHub Repo Stars](https://img.shields.io/github/stars/supercrabtree/k) ![GitHub last commit](https://img.shields.io/github/last-commit/supercrabtree/k)](https://github.com/supercrabtree/k) - k is a Zsh script to make directory listings more readable, adding Git status, fileweight colors and rotting dates
* [k alias ![GitHub Repo Stars](https://img.shields.io/github/stars/lingtalfi/k) ![GitHub last commit](https://img.shields.io/github/last-commit/lingtalfi/k)](https://github.com/lingtalfi/k) - get kool aliases (and more) working with a simple one-liner
* [lf ![GitHub Repo Stars](https://img.shields.io/github/stars/gokcehan/lf) ![GitHub last commit](https://img.shields.io/github/last-commit/gokcehan/lf)](https://github.com/gokcehan/lf) - Terminal file manager written in Go, inspired by ranger
* [lf.sh ![GitHub Repo Stars](https://img.shields.io/github/stars/suewonjp/lf.sh) ![GitHub last commit](https://img.shields.io/github/last-commit/suewonjp/lf.sh)](https://github.com/suewonjp/lf.sh) - Quickly search files with fewer typings and do many more (grepping, copying path to clipboard, etc)
* [lowcharts ![GitHub Repo Stars](https://img.shields.io/github/stars/juan-leon/lowcharts) ![GitHub last commit](https://img.shields.io/github/last-commit/juan-leon/lowcharts)](https://github.com/juan-leon/lowcharts) - Draw low-resolution graphs in terminal
* [Lmod](https://lmod.readthedocs.io/en/latest/) - Lua-based Environment Modules that enhances Tcl-based modules while being backward compatible (compare to modules)
* [loop ![GitHub Repo Stars](https://img.shields.io/github/stars/Miserlou/Loop) ![GitHub last commit](https://img.shields.io/github/last-commit/Miserlou/Loop)](https://github.com/Miserlou/Loop) - Write and control complex loops with as one-liners
* [marker ![GitHub Repo Stars](https://img.shields.io/github/stars/pindexis/marker) ![GitHub last commit](https://img.shields.io/github/last-commit/pindexis/marker)](https://github.com/pindexis/marker) - Bookmark your shell commands
* [mackup ![GitHub Repo Stars](https://img.shields.io/github/stars/lra/mackup) ![GitHub last commit](https://img.shields.io/github/last-commit/lra/mackup)](https://github.com/lra/mackup/) - Keep your application settings in sync (OS X/Linux)
* [mcfly ![GitHub Repo Stars](https://img.shields.io/github/stars/cantino/mcfly) ![GitHub last commit](https://img.shields.io/github/last-commit/cantino/mcfly)](https://github.com/cantino/mcfly) - Fly through your shell history. Great Scot!
* [modules](http://modules.sourceforge.net/) - Classical Tcl-based Environment Modules managing the shell environment (compare to Lmod, direnv, and autoenv)
* [nnn ![GitHub Repo Stars](https://img.shields.io/github/stars/jarun/nnn) ![GitHub last commit](https://img.shields.io/github/last-commit/jarun/nnn)](https://github.com/jarun/nnn) - File browser and disk usage analyzer with excellent desktop integration
* [ok-sh ![GitHub Repo Stars](https://img.shields.io/github/stars/secretGeek/ok-bash) ![GitHub last commit](https://img.shields.io/github/last-commit/secretGeek/ok-bash)](https://github.com/secretGeek/ok-bash) - Do you work on many different projects? And in each project, are there commands you use that are specific to that project? You need a .ok file.
* [parallel](https://www.gnu.org/software/parallel/) - Build and execute shell command lines from standard input in parallel
* [pass](https://www.passwordstore.org/) - Manage passwords from the command line with GPG encryption and optional git integration.
* [pathpicker ![GitHub Repo Stars](https://img.shields.io/github/stars/facebook/PathPicker) ![GitHub last commit](https://img.shields.io/github/last-commit/facebook/PathPicker)](https://github.com/facebook/PathPicker) - Accepts inputs like grep, searches, git etc; allows selecting files from the result of the input, which you can then open or provide as argument to a command.
* [pdd ![GitHub Repo Stars](https://img.shields.io/github/stars/jarun/pdd) ![GitHub last commit](https://img.shields.io/github/last-commit/jarun/pdd)](https://github.com/jarun/pdd) - Tiny date, time diff calculator with timers
* [percol ![GitHub Repo Stars](https://img.shields.io/github/stars/mooz/percol) ![GitHub last commit](https://img.shields.io/github/last-commit/mooz/percol)](https://github.com/mooz/percol) - Adds flavor of interactive filtering to the traditional pipe concept of UNIX shell
* [q ![GitHub Repo Stars](https://img.shields.io/github/stars/cal2195/q) ![GitHub last commit](https://img.shields.io/github/last-commit/cal2195/q)](https://github.com/cal2195/q) - Vim like macro registers for your Bash and Zsh Shell
* [qfc ![GitHub Repo Stars](https://img.shields.io/github/stars/pindexis/qfc) ![GitHub last commit](https://img.shields.io/github/last-commit/pindexis/qfc)](https://github.com/pindexis/qfc) - File-completion widget for Bash and Zsh
* [resh ![GitHub Repo Stars](https://img.shields.io/github/stars/curusarn/resh) ![GitHub last commit](https://img.shields.io/github/last-commit/curusarn/resh)](https://github.com/curusarn/resh) - Contextual shell history for Zsh and Bash
* [rg ![GitHub Repo Stars](https://img.shields.io/github/stars/BurntSushi/ripgrep) ![GitHub last commit](https://img.shields.io/github/last-commit/BurntSushi/ripgrep)](https://github.com/BurntSushi/ripgrep) - ripgrep is a line oriented search tool that combines the usability of The Silver Searcher with the raw speed of GNU grep
* [screen](https://www.gnu.org/software/screen/) - GNU terminal multiplexer
* [shell-history ![GitHub Repo Stars](https://img.shields.io/github/stars/pawamoy/shell-history) ![GitHub last commit](https://img.shields.io/github/last-commit/pawamoy/shell-history)](https://github.com/pawamoy/shell-history) - Visualize your shell usage with Highcharts
* [SHML ![GitHub Repo Stars](https://img.shields.io/github/stars/odb/shml) ![GitHub last commit](https://img.shields.io/github/last-commit/odb/shml)](https://github.com/odb/shml) - Style framework for the terminal (Shell Markup Language)
* [slugify ![GitHub Repo Stars](https://img.shields.io/github/stars/benlinton/slugify) ![GitHub last commit](https://img.shields.io/github/last-commit/benlinton/slugify)](https://github.com/benlinton/slugify) - Command that converts filenames and directories to a web friendly format
* [sman ![GitHub Repo Stars](https://img.shields.io/github/stars/tokozedg/sman) ![GitHub last commit](https://img.shields.io/github/last-commit/tokozedg/sman)](https://github.com/tokozedg/sman) - :bug: A command-line snippet manager
* [spark ![GitHub Repo Stars](https://img.shields.io/github/stars/holman/spark) ![GitHub last commit](https://img.shields.io/github/last-commit/holman/spark)](https://github.com/holman/spark) - ▁▂▃▅▂▇ in your shell
* [spark.fish ![GitHub Repo Stars](https://img.shields.io/github/stars/jorgebucaran/spark.fish) ![GitHub last commit](https://img.shields.io/github/last-commit/jorgebucaran/spark.fish)](https://github.com/jorgebucaran/spark.fish) - ▁▂▃▅ Sparkline Generator
* [sheet ![GitHub Repo Stars](https://img.shields.io/github/stars/oscardelben/sheet) ![GitHub last commit](https://img.shields.io/github/last-commit/oscardelben/sheet)](https://github.com/oscardelben/sheet) -  Text snippets for the command line
* [spot ![GitHub Repo Stars](https://img.shields.io/github/stars/rauchg/spot) ![GitHub last commit](https://img.shields.io/github/last-commit/rauchg/spot)](https://github.com/rauchg/spot) - Tiny file search utility
- [snips ![GitHub Repo Stars](https://img.shields.io/github/stars/srijanshetty/snips) ![GitHub last commit](https://img.shields.io/github/last-commit/srijanshetty/snips)](https://github.com/srijanshetty/snips) - Command line tool to manage snippets of code.
* [sqlline ![GitHub Repo Stars](https://img.shields.io/github/stars/julianhyde/sqlline) ![GitHub last commit](https://img.shields.io/github/last-commit/julianhyde/sqlline)](https://github.com/julianhyde/sqlline) - Shell for issuing SQL to relational databases via JDBC (multiline, completion, highlighting, dialect support)
* [sshfs ![GitHub Repo Stars](https://img.shields.io/github/stars/osxfuse/sshfs) ![GitHub last commit](https://img.shields.io/github/last-commit/osxfuse/sshfs)](https://github.com/osxfuse/sshfs) - A tool for mounting remote file systems over SSH
* [sudocabulary ![GitHub Repo Stars](https://img.shields.io/github/stars/badarsh2/Sudocabulary) ![GitHub last commit](https://img.shields.io/github/last-commit/badarsh2/Sudocabulary)](https://github.com/badarsh2/Sudocabulary) - Learn English Vocabulary from your terminal
* [surfraw](https://gitlab.com/surfraw/Surfraw) - browse specific site and search the web from your terminal without browser.
* [task-manager ![GitHub Repo Stars](https://img.shields.io/github/stars/lingtalfi/task-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/lingtalfi/task-manager)](https://github.com/lingtalfi/task-manager) - Execute all your scripts with just two or three keystrokes.
* [td-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/darrikonn/td-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/darrikonn/td-cli)](https://github.com/darrikonn/td-cli) - A todo command line manager to organize and manage your todos across multiple projects.
* [tere ![GitHub Repo Stars](https://img.shields.io/github/stars/mgunyho/tere) ![GitHub last commit](https://img.shields.io/github/last-commit/mgunyho/tere)](https://github.com/mgunyho/tere) - A faster alternative to cd + ls
* [thefuck ![GitHub Repo Stars](https://img.shields.io/github/stars/nvbn/thefuck) ![GitHub last commit](https://img.shields.io/github/last-commit/nvbn/thefuck)](https://github.com/nvbn/thefuck) - Fix common shell mistakes by using an easy to remember command
* [tldr ![GitHub Repo Stars](https://img.shields.io/github/stars/raylee/tldr-sh-client) ![GitHub last commit](https://img.shields.io/github/last-commit/raylee/tldr-sh-client)](https://github.com/raylee/tldr-sh-client) - A fully-functional bash client for tldr, simplified and community-driven man pages
* [tmux](https://tmux.github.io/) - Amazing terminal multiplexer
* [undollar ![GitHub Repo Stars](https://img.shields.io/github/stars/xtyrrell/undollar) ![GitHub last commit](https://img.shields.io/github/last-commit/xtyrrell/undollar)](https://github.com/xtyrrell/undollar) - undollar bites the dollar sign off the tip of the command you just pasted into your terminal
* [usql ![GitHub Repo Stars](https://img.shields.io/github/stars/xo/usql) ![GitHub last commit](https://img.shields.io/github/last-commit/xo/usql)](https://github.com/xo/usql) - Universal command-line interface for SQL databases.
* [v ![GitHub Repo Stars](https://img.shields.io/github/stars/rupa/v) ![GitHub last commit](https://img.shields.io/github/last-commit/rupa/v)](https://github.com/rupa/v) - z for vim.
* [wemux ![GitHub Repo Stars](https://img.shields.io/github/stars/zolrath/wemux) ![GitHub last commit](https://img.shields.io/github/last-commit/zolrath/wemux)](https://github.com/zolrath/wemux) - Multi-User Tmux Made Easy
* [xiki ![GitHub Repo Stars](https://img.shields.io/github/stars/trogdoro/xiki) ![GitHub last commit](https://img.shields.io/github/last-commit/trogdoro/xiki)](https://github.com/trogdoro/xiki) - Makes the shell console more friendly and powerful
* [xplr ![GitHub Repo Stars](https://img.shields.io/github/stars/sayanarijit/xplr) ![GitHub last commit](https://img.shields.io/github/last-commit/sayanarijit/xplr)](https://github.com/sayanarijit/xplr) -  A hackable, minimal, fast TUI file explorer
* [xsv ![GitHub Repo Stars](https://img.shields.io/github/stars/BurntSushi/xsv) ![GitHub last commit](https://img.shields.io/github/last-commit/BurntSushi/xsv)](https://github.com/BurntSushi/xsv) - a fast CSV command line toolkit written in Rust
* [xxh ![GitHub Repo Stars](https://img.shields.io/github/stars/xxh/xxh) ![GitHub last commit](https://img.shields.io/github/last-commit/xxh/xxh)](https://github.com/xxh/xxh) - Bring your favorite shell wherever you go through the SSH.

### Directory Navigation

* [aliasme ![GitHub Repo Stars](https://img.shields.io/github/stars/Jintin/aliasme) ![GitHub last commit](https://img.shields.io/github/last-commit/Jintin/aliasme)](https://github.com/Jintin/aliasme) - alias helper to change directory quickly
* [autojump ![GitHub Repo Stars](https://img.shields.io/github/stars/wting/autojump) ![GitHub last commit](https://img.shields.io/github/last-commit/wting/autojump)](https://github.com/wting/autojump) - A cd command that learns - easily navigate directories from the command line
* [bashmarks ![GitHub Repo Stars](https://img.shields.io/github/stars/huyng/bashmarks) ![GitHub last commit](https://img.shields.io/github/last-commit/huyng/bashmarks)](https://github.com/huyng/bashmarks) - Directory bookmarks for the shell
* [bd ![GitHub Repo Stars](https://img.shields.io/github/stars/vigneshwaranr/bd) ![GitHub last commit](https://img.shields.io/github/last-commit/vigneshwaranr/bd)](https://github.com/vigneshwaranr/bd) - Quickly go back to a parent directory
* [commacd ![GitHub Repo Stars](https://img.shields.io/github/stars/shyiko/commacd) ![GitHub last commit](https://img.shields.io/github/last-commit/shyiko/commacd)](https://github.com/shyiko/commacd) - A faster way to move around in Bash
* [enhancd ![GitHub Repo Stars](https://img.shields.io/github/stars/b4b4r07/enhancd) ![GitHub last commit](https://img.shields.io/github/last-commit/b4b4r07/enhancd)](https://github.com/b4b4r07/enhancd) - :rocket: A next-generation cd command with an interactive filter
* [goto ![GitHub Repo Stars](https://img.shields.io/github/stars/iridakos/goto) ![GitHub last commit](https://img.shields.io/github/last-commit/iridakos/goto)](https://github.com/iridakos/goto) - A shell utility for navigation to aliased directories supporting auto-completion
* [jump ![GitHub Repo Stars](https://img.shields.io/github/stars/gsamokovarov/jump) ![GitHub last commit](https://img.shields.io/github/last-commit/gsamokovarov/jump)](https://github.com/gsamokovarov/jump) - Jump helps you navigate your file system faster by learning your habits.
* [lazy-cd ![GitHub Repo Stars](https://img.shields.io/github/stars/pedramamini/lazy-cd) ![GitHub last commit](https://img.shields.io/github/last-commit/pedramamini/lazy-cd)](https://github.com/pedramamini/lazy-cd) - Simple bash commands for bookmarked navigation of the file system, complete with bash-completion.
* [up ![GitHub Repo Stars](https://img.shields.io/github/stars/shannonmoeller/up) ![GitHub last commit](https://img.shields.io/github/last-commit/shannonmoeller/up)](https://github.com/shannonmoeller/up) - Ascend directories by name or count; for bash, zsh, and fish.
* [z ![GitHub Repo Stars](https://img.shields.io/github/stars/rupa/z) ![GitHub last commit](https://img.shields.io/github/last-commit/rupa/z)](https://github.com/rupa/z) - z is the new j, yo
* [z.lua ![GitHub Repo Stars](https://img.shields.io/github/stars/skywind3000/z.lua) ![GitHub last commit](https://img.shields.io/github/last-commit/skywind3000/z.lua)](https://github.com/skywind3000/z.lua) - A new cd command that helps you navigate faster by learning your habits
* [zoxide ![GitHub Repo Stars](https://img.shields.io/github/stars/ajeetdsouza/zoxide) ![GitHub last commit](https://img.shields.io/github/last-commit/ajeetdsouza/zoxide)](https://github.com/ajeetdsouza/zoxide) - A faster way to navigate your filesystem, written in Rust
* [zpyi ![GitHub Repo Stars](https://img.shields.io/github/stars/sakshamsharma/zpyi) ![GitHub last commit](https://img.shields.io/github/last-commit/sakshamsharma/zpyi)](https://github.com/sakshamsharma/zpyi) - Python in Zsh - Easy python scripting in shell

## Customization

*Custom prompts, color themes, etc.*

* [aphrodite-terminal-theme ![GitHub Repo Stars](https://img.shields.io/github/stars/win0err/aphrodite-terminal-theme) ![GitHub last commit](https://img.shields.io/github/last-commit/win0err/aphrodite-terminal-theme)](https://github.com/win0err/aphrodite-terminal-theme) — Minimalistic Aphrodite theme (prompt) for sexy terminals that works in bash, fish and zsh
* [base16-builder ![GitHub Repo Stars](https://img.shields.io/github/stars/base16-builder/base16-builder) ![GitHub last commit](https://img.shields.io/github/last-commit/base16-builder/base16-builder)](https://github.com/base16-builder/base16-builder) - Base16-Builder
* [bash-full-of-colors ![GitHub Repo Stars](https://img.shields.io/github/stars/slomkowski/bash-full-of-colors) ![GitHub last commit](https://img.shields.io/github/last-commit/slomkowski/bash-full-of-colors)](https://github.com/slomkowski/bash-full-of-colors) - Powerful prompt with screen, tmux, git support and many more
* [bash-git-prompt ![GitHub Repo Stars](https://img.shields.io/github/stars/magicmonty/bash-git-prompt) ![GitHub last commit](https://img.shields.io/github/last-commit/magicmonty/bash-git-prompt)](https://github.com/magicmonty/bash-git-prompt) - An informative and fancy Bash prompt for Git users
* [bash-powerline ![GitHub Repo Stars](https://img.shields.io/github/stars/riobard/bash-powerline) ![GitHub last commit](https://img.shields.io/github/last-commit/riobard/bash-powerline)](https://github.com/riobard/bash-powerline) - Powerline-style Bash prompt in pure Bash script
* [bashstrap ![GitHub Repo Stars](https://img.shields.io/github/stars/barryclark/bashstrap) ![GitHub last commit](https://img.shields.io/github/last-commit/barryclark/bashstrap)](https://github.com/barryclark/bashstrap) - A quick way to spruce up OSX terminal
* [bullet-train-oh-my-zsh-theme ![GitHub Repo Stars](https://img.shields.io/github/stars/caiogondim/bullet-train.zsh) ![GitHub last commit](https://img.shields.io/github/last-commit/caiogondim/bullet-train.zsh)](https://github.com/caiogondim/bullet-train.zsh) - :bullettrain_side: An oh-my-zsh shell theme based on the Powerline Vim plugin
* [emojify ![GitHub Repo Stars](https://img.shields.io/github/stars/mrowa44/emojify) ![GitHub last commit](https://img.shields.io/github/last-commit/mrowa44/emojify)](https://github.com/mrowa44/emojify) Emoji on the command line :scream:
* [flatui-terminal-theme](https://dribbble.com/shots/1021755-Flat-UI-Terminal-Theme) - Nicer colors for terminal
* [geometry ![GitHub Repo Stars](https://img.shields.io/github/stars/geometry-zsh/geometry) ![GitHub last commit](https://img.shields.io/github/last-commit/geometry-zsh/geometry)](https://github.com/geometry-zsh/geometry) - A minimal ZSH theme where any function can be added to the left prompt or (async) right prompt on the fly.
* [git-prompt ![GitHub Repo Stars](https://img.shields.io/github/stars/lvv/git-prompt) ![GitHub last commit](https://img.shields.io/github/last-commit/lvv/git-prompt)](https://github.com/lvv/git-prompt) - Bash prompt with Git, SVN and HG modules
* [gittify ![GitHub Repo Stars](https://img.shields.io/github/stars/momeni/gittify) ![GitHub last commit](https://img.shields.io/github/last-commit/momeni/gittify)](https://github.com/momeni/gittify) - A colorful Bash prompt + customized Git aliases
* [Gogh - Color Scheme ![GitHub Repo Stars](https://img.shields.io/github/stars/Mayccoll/Gogh) ![GitHub last commit](https://img.shields.io/github/last-commit/Mayccoll/Gogh)](https://github.com/Mayccoll/Gogh) - Color Scheme for Gnome Terminal
* [liquidprompt ![GitHub Repo Stars](https://img.shields.io/github/stars/nojhan/liquidprompt) ![GitHub last commit](https://img.shields.io/github/last-commit/nojhan/liquidprompt)](https://github.com/nojhan/liquidprompt) - A full-featured & carefully designed adaptive prompt for Bash & Zsh
* [mysql-colorize ![GitHub Repo Stars](https://img.shields.io/github/stars/zpm-zsh/mysql-colorize) ![GitHub last commit](https://img.shields.io/github/last-commit/zpm-zsh/mysql-colorize)](https://github.com/zpm-zsh/mysql-colorize) -  Colorization for mysql comand-line client
* [oh-my-git ![GitHub Repo Stars](https://img.shields.io/github/stars/arialdomartini/oh-my-git) ![GitHub last commit](https://img.shields.io/github/last-commit/arialdomartini/oh-my-git)](https://github.com/arialdomartini/oh-my-git) - An opinionated git prompt for bash and zsh
* [oh-my-posh](https://ohmyposh.dev) - Prompt theme engine for any shell and platform written in go.
* [polyglot ![GitHub Repo Stars](https://img.shields.io/github/stars/agkozak/polyglot) ![GitHub last commit](https://img.shields.io/github/last-commit/agkozak/polyglot)](https://github.com/agkozak/polyglot) - An informative Git prompt that works in bash, zsh, ksh, mksh, pdksh, oksh, dash, yash, busybox sh, and osh
* [powerlevel10k ![GitHub Repo Stars](https://img.shields.io/github/stars/romkatv/powerlevel10k) ![GitHub last commit](https://img.shields.io/github/last-commit/romkatv/powerlevel10k)](https://github.com/romkatv/powerlevel10k) - Super flexible awesome powerline ZSH theme
* [sexy-bash-prompt ![GitHub Repo Stars](https://img.shields.io/github/stars/twolfson/sexy-bash-prompt) ![GitHub last commit](https://img.shields.io/github/last-commit/twolfson/sexy-bash-prompt)](https://github.com/twolfson/sexy-bash-prompt) - Bash prompt with colors, Git statuses, and Git branches
* [starship](https://starship.rs/) - Fast, customisable, cross-shell prompt written in rust
* [synth-shell ![GitHub Repo Stars](https://img.shields.io/github/stars/andresgongora/synth-shell) ![GitHub last commit](https://img.shields.io/github/last-commit/andresgongora/synth-shell)](https://github.com/andresgongora/synth-shell) - Greeter with a customizable status report and a fancy bash prompt

## For Developers

*Command-line development, version control, and deployment.*

* [1Password SSH Agent](https://developer.1password.com/docs/ssh/) - Authenticate Git and SSH workflows with biometric unlock using 1Password
* [ack](https://beyondgrep.com/) - A grep-like search tool optimized for source code.
* [add-gitignore ![GitHub Repo Stars](https://img.shields.io/github/stars/TejasQ/add-gitignore) ![GitHub last commit](https://img.shields.io/github/last-commit/TejasQ/add-gitignore)](https://github.com/TejasQ/add-gitignore) - Interactive CLI that generates a .gitignore for your project based on your needs.
* [bcal ![GitHub Repo Stars](https://img.shields.io/github/stars/jarun/bcal) ![GitHub last commit](https://img.shields.io/github/last-commit/jarun/bcal)](https://github.com/jarun/bcal) - Byte CALculator for storage conversions and calculations
* [bitwise ![GitHub Repo Stars](https://img.shields.io/github/stars/mellowcandle/bitwise) ![GitHub last commit](https://img.shields.io/github/last-commit/mellowcandle/bitwise)](https://github.com/mellowcandle/bitwise) - Terminal based interactive bit manipulator in curses.
* [bocker ![GitHub Repo Stars](https://img.shields.io/github/stars/p8952/bocker) ![GitHub last commit](https://img.shields.io/github/last-commit/p8952/bocker)](https://github.com/p8952/bocker) - Docker implemented in 100 lines of bash
* [cloc ![GitHub Repo Stars](https://img.shields.io/github/stars/AlDanial/cloc) ![GitHub last commit](https://img.shields.io/github/last-commit/AlDanial/cloc)](https://github.com/AlDanial/cloc) - Count Lines of Code
* [doclt ![GitHub Repo Stars](https://img.shields.io/github/stars/omgimanerd/doclt) ![GitHub last commit](https://img.shields.io/github/last-commit/omgimanerd/doclt)](https://github.com/omgimanerd/doclt) - A command line interface to Digital Ocean
* [dokku ![GitHub Repo Stars](https://img.shields.io/github/stars/dokku/dokku) ![GitHub last commit](https://img.shields.io/github/last-commit/dokku/dokku)](https://github.com/dokku/dokku) - Docker powered mini-Heroku. The smallest PaaS implementation you've ever seen.
* [forgit ![GitHub Repo Stars](https://img.shields.io/github/stars/wfxr/forgit) ![GitHub last commit](https://img.shields.io/github/last-commit/wfxr/forgit)](https://github.com/wfxr/forgit) - Utility tool for `git` taking advantage of fuzzy finder fzf.
* [git-extra-commands ![GitHub Repo Stars](https://img.shields.io/github/stars/unixorn/git-extra-commands) ![GitHub last commit](https://img.shields.io/github/last-commit/unixorn/git-extra-commands)](https://github.com/unixorn/git-extra-commands) - Many Git extra utilities. Churn, cut-branch, improved-merge and many more.
* [git-extras ![GitHub Repo Stars](https://img.shields.io/github/stars/tj/git-extras) ![GitHub last commit](https://img.shields.io/github/last-commit/tj/git-extras)](https://github.com/tj/git-extras) - Git utilities -- repo summary, repl, changelog population, author commit percentages and more
* [git-open ![GitHub Repo Stars](https://img.shields.io/github/stars/paulirish/git-open) ![GitHub last commit](https://img.shields.io/github/last-commit/paulirish/git-open)](https://github.com/paulirish/git-open) - Type `git open` to open the GitHub page or website for a repository in your browser
* [git-quick-stats ![GitHub Repo Stars](https://img.shields.io/github/stars/arzzen/git-quick-stats) ![GitHub last commit](https://img.shields.io/github/last-commit/arzzen/git-quick-stats)](https://github.com/arzzen/git-quick-stats) - Git quick statistics is a simple and efficient way to access various statistics in git repository.
* [git-semver ![GitHub Repo Stars](https://img.shields.io/github/stars/markchalloner/git-semver) ![GitHub last commit](https://img.shields.io/github/last-commit/markchalloner/git-semver)](https://github.com/markchalloner/git-semver) - Git plugin for easing semantic versioning and changelog validation
* [git-sh ![GitHub Repo Stars](https://img.shields.io/github/stars/rtomayko/git-sh) ![GitHub last commit](https://img.shields.io/github/last-commit/rtomayko/git-sh)](https://github.com/rtomayko/git-sh) - A customized Bash environment suitable for Git work
* [gita ![GitHub Repo Stars](https://img.shields.io/github/stars/nosarthur/gita) ![GitHub last commit](https://img.shields.io/github/last-commit/nosarthur/gita)](https://github.com/nosarthur/gita) - A command-line tool to manage multiple git repos.
* [hub ![GitHub Repo Stars](https://img.shields.io/github/stars/github/hub) ![GitHub last commit](https://img.shields.io/github/last-commit/github/hub)](https://github.com/github/hub) - hub helps you win at git.
* [just ![GitHub Repo Stars](https://img.shields.io/github/stars/casey/just) ![GitHub last commit](https://img.shields.io/github/last-commit/casey/just)](https://github.com/casey/just) - Task runner for saving and running project-specific commands.
* [licins ![GitHub Repo Stars](https://img.shields.io/github/stars/dogoncouch/licins) ![GitHub last commit](https://img.shields.io/github/last-commit/dogoncouch/licins)](https://github.com/dogoncouch/licins) - Insert commented software licenses into source code.
* [mkdkr ![GitHub Repo Stars](https://img.shields.io/github/stars/rosineygp/mkdkr) ![GitHub last commit](https://img.shields.io/github/last-commit/rosineygp/mkdkr)](https://github.com/rosineygp/mkdkr) - Makefile + Docker = CI Pipeline
* [mr](https://myrepos.branchable.com) - Multiple Repository management tool
* [nve ![GitHub Repo Stars](https://img.shields.io/github/stars/ehmicky/nve) ![GitHub last commit](https://img.shields.io/github/last-commit/ehmicky/nve)](https://github.com/ehmicky/nve) - Run any command on specific Node.js versions.
* [overcommit ![GitHub Repo Stars](https://img.shields.io/github/stars/sds/overcommit) ![GitHub last commit](https://img.shields.io/github/last-commit/sds/overcommit)](https://github.com/sds/overcommit) - A fully configurable and extendable Git hook manager
* [pre-commit](https://pre-commit.com) - A framework for managing and maintaining multi-language pre-commit hooks
* [rebound ![GitHub Repo Stars](https://img.shields.io/github/stars/shobrook/rebound) ![GitHub last commit](https://img.shields.io/github/last-commit/shobrook/rebound)](https://github.com/shobrook/rebound) - Instantly browse Stack Overflow results in your terminal when you get a compiler error
* [repren ![GitHub Repo Stars](https://img.shields.io/github/stars/jlevy/repren) ![GitHub last commit](https://img.shields.io/github/last-commit/jlevy/repren)](https://github.com/jlevy/repren) - Command-line search-and-replace and file-renaming swiss army knife
* [slap ![GitHub Repo Stars](https://img.shields.io/github/stars/slap-editor/slap) ![GitHub last commit](https://img.shields.io/github/last-commit/slap-editor/slap)](https://github.com/slap-editor/slap) - Sublime-like terminal-based text editor that runs on Node.js
* [shipit ![GitHub Repo Stars](https://img.shields.io/github/stars/sapegin/shipit) ![GitHub last commit](https://img.shields.io/github/last-commit/sapegin/shipit)](https://github.com/sapegin/shipit) - Minimalistic SSH deployment
* [starring ![GitHub Repo Stars](https://img.shields.io/github/stars/ritz078/starring) ![GitHub last commit](https://img.shields.io/github/last-commit/ritz078/starring)](https://github.com/ritz078/starring) - Automatically star the npm-packages that you are using on GitHub.
* [tag ![GitHub Repo Stars](https://img.shields.io/github/stars/aykamko/tag) ![GitHub last commit](https://img.shields.io/github/last-commit/aykamko/tag)](https://github.com/aykamko/tag) - Instantly jump to your ag matches.
* [trunk](https://www.npmjs.com/package/@trunkio/launcher) - Blazingly fast meta code checker and formatter
* [vmn ![GitHub Repo Stars](https://img.shields.io/github/stars/final-israel/vmn) ![GitHub last commit](https://img.shields.io/github/last-commit/final-israel/vmn)](https://github.com/final-israel/vmn) - git-based automatic versioning and state recovery solution agnostic to language or architecture
* [wipe-modules ![GitHub Repo Stars](https://img.shields.io/github/stars/bntzio/wipe-modules) ![GitHub last commit](https://img.shields.io/github/last-commit/bntzio/wipe-modules)](https://github.com/bntzio/wipe-modules) - A little agent that removes the node_modules folder of non-active projects

## System Utilities

*OS-related tools, including system administration, system debugging, and file and process management.*

* [atop](https://www.atoptool.nl) - ASCII full-screen performance monitor that is capable of reporting the activity of all processes
* [bat ![GitHub Repo Stars](https://img.shields.io/github/stars/sharkdp/bat) ![GitHub last commit](https://img.shields.io/github/last-commit/sharkdp/bat)](https://github.com/sharkdp/bat) - A `cat` clone with wings
* [bmon ![GitHub Repo Stars](https://img.shields.io/github/stars/tgraf/bmon) ![GitHub last commit](https://img.shields.io/github/last-commit/tgraf/bmon)](https://github.com/tgraf/bmon) - Real-time network bandwidth monitor and rate estimator with human-friendly visual output
* [btop ![GitHub Repo Stars](https://img.shields.io/github/stars/aristocratos/btop) ![GitHub last commit](https://img.shields.io/github/last-commit/aristocratos/btop)](https://github.com/aristocratos/btop) - Linux/OSX/FreeBSD resource monitor
* [catcli ![GitHub Repo Stars](https://img.shields.io/github/stars/deadc0de6/catcli) ![GitHub last commit](https://img.shields.io/github/last-commit/deadc0de6/catcli)](https://github.com/deadc0de6/catcli) -  The command line catalog tool for your offline data
* [ccat ![GitHub Repo Stars](https://img.shields.io/github/stars/owenthereal/ccat) ![GitHub last commit](https://img.shields.io/github/last-commit/owenthereal/ccat)](https://github.com/owenthereal/ccat) - ccat is the colorizing cat. It works similar to cat but displays content with syntax highlighting.
* [exa ![GitHub Repo Stars](https://img.shields.io/github/stars/ogham/exa) ![GitHub last commit](https://img.shields.io/github/last-commit/ogham/exa)](https://github.com/ogham/exa) - A modern version of `ls`.
* [progress ![GitHub Repo Stars](https://img.shields.io/github/stars/Xfennec/progress) ![GitHub last commit](https://img.shields.io/github/last-commit/Xfennec/progress)](https://github.com/Xfennec/progress) - Linux tool to show progress for `cp`, `rm`, `dd`, and more...
* [stronghold ![GitHub Repo Stars](https://img.shields.io/github/stars/alichtman/stronghold) ![GitHub last commit](https://img.shields.io/github/last-commit/alichtman/stronghold)](https://github.com/alichtman/stronghold) - Easily configure MacOS security settings from the terminal.
* [glances ![GitHub Repo Stars](https://img.shields.io/github/stars/nicolargo/glances) ![GitHub last commit](https://img.shields.io/github/last-commit/nicolargo/glances)](https://github.com/nicolargo/glances) - Glances an Eye on your system
* [goaccess ![GitHub Repo Stars](https://img.shields.io/github/stars/allinurl/goaccess) ![GitHub last commit](https://img.shields.io/github/last-commit/allinurl/goaccess)](https://github.com/allinurl/goaccess) - GoAccess is a real-time web log analyzer and interactive viewer that runs in a terminal in \*nix systems.
* [hblock ![GitHub Repo Stars](https://img.shields.io/github/stars/hectorm/hblock) ![GitHub last commit](https://img.shields.io/github/last-commit/hectorm/hblock)](https://github.com/hectorm/hblock) - Hosts-file based adblocker
* [histstat ![GitHub Repo Stars](https://img.shields.io/github/stars/vesche/histstat) ![GitHub last commit](https://img.shields.io/github/last-commit/vesche/histstat)](https://github.com/vesche/histstat) - History for netstat
* [htop ![GitHub Repo Stars](https://img.shields.io/github/stars/hishamhm/htop) ![GitHub last commit](https://img.shields.io/github/last-commit/hishamhm/htop)](https://github.com/hishamhm/htop) - A ncurses based interactive process viewer which aims to be a better `top`
* [lnav](https://lnav.org) - An advanced log file viewer for the small-scale
* [logdissect ![GitHub Repo Stars](https://img.shields.io/github/stars/dogoncouch/logdissect) ![GitHub last commit](https://img.shields.io/github/last-commit/dogoncouch/logdissect)](https://github.com/dogoncouch/logdissect) - CLI utility and Python API for analyzing log files and other data.
* [ls++ ![GitHub Repo Stars](https://img.shields.io/github/stars/trapd00r/ls--) ![GitHub last commit](https://img.shields.io/github/last-commit/trapd00r/ls--)](https://github.com/trapd00r/ls--) - Colorized ls on steroids
* [lsd ![GitHub Repo Stars](https://img.shields.io/github/stars/Peltoche/lsd) ![GitHub last commit](https://img.shields.io/github/last-commit/Peltoche/lsd)](https://github.com/Peltoche/lsd) - LSDeluxe, rewrite of GNU ls with lot of added features like colors, icons, tree-view and more formatting options.
* [lsp ![GitHub Repo Stars](https://img.shields.io/github/stars/dborzov/lsp) ![GitHub last commit](https://img.shields.io/github/last-commit/dborzov/lsp)](https://github.com/dborzov/lsp) - An improved `ls`, with file descriptions in plain language and intelligent file grouping
* [maza ![GitHub Repo Stars](https://img.shields.io/github/stars/tanrax/maza-ad-blocking) ![GitHub last commit](https://img.shields.io/github/last-commit/tanrax/maza-ad-blocking)](https://github.com/tanrax/maza-ad-blocking) - Local ad blocker. Like Pi-hole but local and using your operating system.
* [mtr ![GitHub Repo Stars](https://img.shields.io/github/stars/traviscross/mtr) ![GitHub last commit](https://img.shields.io/github/last-commit/traviscross/mtr)](https://github.com/traviscross/mtr) - The functionality of the 'traceroute' and 'ping' programs in a single network diagnostic tool.
* [ncdu](https://dev.yorhel.nl/ncdu) - NCurses Disk Usage
* [nmtui ![GitHub Repo Stars](https://img.shields.io/github/stars/NetworkManager/NetworkManager) ![GitHub last commit](https://img.shields.io/github/last-commit/NetworkManager/NetworkManager)](https://github.com/NetworkManager/NetworkManager) - Text User Interface for controlling NetworkManager
* [powertop ![GitHub Repo Stars](https://img.shields.io/github/stars/fenrus75/powertop) ![GitHub last commit](https://img.shields.io/github/last-commit/fenrus75/powertop)](https://github.com/fenrus75/powertop) - Battery/Power usage and device stats monitoring command-line tool, with tune-up options.
* [prettyping ![GitHub Repo Stars](https://img.shields.io/github/stars/denilsonsa/prettyping) ![GitHub last commit](https://img.shields.io/github/last-commit/denilsonsa/prettyping)](https://github.com/denilsonsa/prettyping) - Making the output of `ping` prettier, more colorful, more compact, and easier to read.
* [procdog ![GitHub Repo Stars](https://img.shields.io/github/stars/jlevy/procdog) ![GitHub last commit](https://img.shields.io/github/last-commit/jlevy/procdog)](https://github.com/jlevy/procdog) - Lightweight command-line control of long-lived processes like servers
* [quick-secure ![GitHub Repo Stars](https://img.shields.io/github/stars/marshyski/quick-secure) ![GitHub last commit](https://img.shields.io/github/last-commit/marshyski/quick-secure)](https://github.com/marshyski/quick-secure) - Quickly secure and harden UNIX/Linux systems
* [rng ![GitHub Repo Stars](https://img.shields.io/github/stars/nickolasburr/rng) ![GitHub last commit](https://img.shields.io/github/last-commit/nickolasburr/rng)](https://github.com/nickolasburr/rng) - Copy range of lines from file or stdin to stdout.
* [tiptop ![GitHub Repo Stars](https://img.shields.io/github/stars/nschloe/tiptop) ![GitHub last commit](https://img.shields.io/github/last-commit/nschloe/tiptop)](https://github.com/nschloe/tiptop) - Graphical command-line system monitor.
* [wifi-wand ![GitHub Repo Stars](https://img.shields.io/github/stars/keithrbennett/wifiwand) ![GitHub last commit](https://img.shields.io/github/last-commit/keithrbennett/wifiwand)](https://github.com/keithrbennett/wifiwand) - a Ruby command line application for managing WiFi on MacOS (install by `gem install wifi-wand`)
* [xiringuito ![GitHub Repo Stars](https://img.shields.io/github/stars/ivanilves/xiringuito) ![GitHub last commit](https://img.shields.io/github/last-commit/ivanilves/xiringuito)](https://github.com/ivanilves/xiringuito) - SSH-based "VPN for poors"

## Downloading and Serving

*Self-hosted, lightweight servers and networking tools written in shell scripts.*

* [aria2 ![GitHub Repo Stars](https://img.shields.io/github/stars/aria2/aria2) ![GitHub last commit](https://img.shields.io/github/last-commit/aria2/aria2)](https://github.com/aria2/aria2) - aria2 is a lightweight multi-protocol & multi-source, cross platform download utility operated in command-line. It supports HTTP/HTTPS, FTP, BitTorrent and Metalink
* [balls ![GitHub Repo Stars](https://img.shields.io/github/stars/jneen/balls) ![GitHub last commit](https://img.shields.io/github/last-commit/jneen/balls)](https://github.com/jneen/balls) - Bash on Balls
* [bashttpd ![GitHub Repo Stars](https://img.shields.io/github/stars/avleen/bashttpd) ![GitHub last commit](https://img.shields.io/github/last-commit/avleen/bashttpd)](https://github.com/avleen/bashttpd) - A web server written in Bash
* [bashhub-server ![GitHub Repo Stars](https://img.shields.io/github/stars/nicksherron/bashhub-server) ![GitHub last commit](https://img.shields.io/github/last-commit/nicksherron/bashhub-server)](https://github.com/nicksherron/bashhub-server) - Private cloud shell history. Open source server for bashhub
* [bitpocket ![GitHub Repo Stars](https://img.shields.io/github/stars/sickill/bitpocket) ![GitHub last commit](https://img.shields.io/github/last-commit/sickill/bitpocket)](https://github.com/sickill/bitpocket) - "DIY Dropbox" or "2-way directory (r)sync with proper deletion"
* [Dropbox-Uploader ![GitHub Repo Stars](https://img.shields.io/github/stars/andreafabrizi/Dropbox-Uploader) ![GitHub last commit](https://img.shields.io/github/last-commit/andreafabrizi/Dropbox-Uploader)](https://github.com/andreafabrizi/Dropbox-Uploader) - Dropbox Uploader is a Bash script which can be used to upload, download, list or delete files from Dropbox
* [httpie ![GitHub Repo Stars](https://img.shields.io/github/stars/httpie/httpie) ![GitHub last commit](https://img.shields.io/github/last-commit/httpie/httpie)](https://github.com/httpie/httpie) - HTTPie is a command line HTTP client, a user-friendly cURL replacement
* [HTTPLab ![GitHub Repo Stars](https://img.shields.io/github/stars/gchaincl/httplab) ![GitHub last commit](https://img.shields.io/github/last-commit/gchaincl/httplab)](https://github.com/gchaincl/httplab) - The interactive web server, let you inspect HTTP requests and forge responses.
* [Kapow! ![GitHub Repo Stars](https://img.shields.io/github/stars/BBVA/kapow) ![GitHub last commit](https://img.shields.io/github/last-commit/BBVA/kapow)](https://github.com/BBVA/kapow) - If you can script it, you can HTTP it.
* [ngincat ![GitHub Repo Stars](https://img.shields.io/github/stars/jaburns/ngincat) ![GitHub last commit](https://img.shields.io/github/last-commit/jaburns/ngincat)](https://github.com/jaburns/ngincat) - Tiny Bash HTTP server using netcat
* [resty ![GitHub Repo Stars](https://img.shields.io/github/stars/micha/resty) ![GitHub last commit](https://img.shields.io/github/last-commit/micha/resty)](https://github.com/micha/resty) - Little command line REST client that you can use in pipelines
* [shell2http ![GitHub Repo Stars](https://img.shields.io/github/stars/msoap/shell2http) ![GitHub last commit](https://img.shields.io/github/last-commit/msoap/shell2http)](https://github.com/msoap/shell2http) - HTTP-server to execute shell commands. Designed for development, prototyping or remote control
* [tshare ![GitHub Repo Stars](https://img.shields.io/github/stars/trikko/tshare) ![GitHub last commit](https://img.shields.io/github/last-commit/trikko/tshare)](https://github.com/trikko/tshare) - File sharing from commandline.
* [vesper ![GitHub Repo Stars](https://img.shields.io/github/stars/chris-rock/vesper) ![GitHub last commit](https://img.shields.io/github/last-commit/chris-rock/vesper)](https://github.com/chris-rock/vesper) - ���Vesper is a HTTP framework for Bash/Unix Shell
* [xh ![GitHub Repo Stars](https://img.shields.io/github/stars/ducaale/xh) ![GitHub last commit](https://img.shields.io/github/last-commit/ducaale/xh)](https://github.com/ducaale/xh) - Friendly and fast tool for sending HTTP requests
* [yt-dlp ![GitHub Repo Stars](https://img.shields.io/github/stars/yt-dlp/yt-dlp) ![GitHub last commit](https://img.shields.io/github/last-commit/yt-dlp/yt-dlp)](https://github.com/yt-dlp/yt-dlp) - Command-line program to download videos from YouTube.com and other video sites

## Multimedia and File Formats

*Tools for handling video and audio files.*

* [adb-export ![GitHub Repo Stars](https://img.shields.io/github/stars/sromku/adb-export) ![GitHub last commit](https://img.shields.io/github/last-commit/sromku/adb-export)](https://github.com/sromku/adb-export) - Export Android content providers to CSV format
* [Android-Kitchen ![GitHub Repo Stars](https://img.shields.io/github/stars/dsixda/Android-Kitchen) ![GitHub last commit](https://img.shields.io/github/last-commit/dsixda/Android-Kitchen)](https://github.com/dsixda/Android-Kitchen) - A text-based kitchen for Android ROM customization. Uses shell scripts and works with Cygwin/OS X/Linux
* [Beets ![GitHub Repo Stars](https://img.shields.io/github/stars/beetbox/beets) ![GitHub last commit](https://img.shields.io/github/last-commit/beetbox/beets)](https://github.com/beetbox/beets) - Music library manager and MusicBrainz tagger
* [cmus ![GitHub Repo Stars](https://img.shields.io/github/stars/cmus/cmus) ![GitHub last commit](https://img.shields.io/github/last-commit/cmus/cmus)](https://github.com/cmus/cmus) - Cross-platform cli audio player.
* [dasel ![GitHub Repo Stars](https://img.shields.io/github/stars/tomwright/dasel) ![GitHub last commit](https://img.shields.io/github/last-commit/tomwright/dasel)](https://github.com/tomwright/dasel) - Query and update data structures using selectors from the command line. Comparable to [jq ![GitHub Repo Stars](https://img.shields.io/github/stars/stedolan/jq) ![GitHub last commit](https://img.shields.io/github/last-commit/stedolan/jq)](https://github.com/stedolan/jq) / [yq ![GitHub Repo Stars](https://img.shields.io/github/stars/kislyuk/yq) ![GitHub last commit](https://img.shields.io/github/last-commit/kislyuk/yq)](https://github.com/kislyuk/yq) but supports JSON, YAML, TOML and XML with zero runtime dependencies.
* [dzr ![GitHub Repo Stars](https://img.shields.io/github/stars/yne/dzr) ![GitHub last commit](https://img.shields.io/github/last-commit/yne/dzr)](https://github.com/yne/dzr) - Cross-platform Deezer.com audio player.
* [fx ![GitHub Repo Stars](https://img.shields.io/github/stars/antonmedv/fx) ![GitHub last commit](https://img.shields.io/github/last-commit/antonmedv/fx)](https://github.com/antonmedv/fx) - Command-line JSON processing tool by anononymus JavaScript functions
* [gifgen ![GitHub Repo Stars](https://img.shields.io/github/stars/lukechilds/gifgen) ![GitHub last commit](https://img.shields.io/github/last-commit/lukechilds/gifgen)](https://github.com/lukechilds/gifgen) - Simple high quality GIF encoding
* [image-scraper ![GitHub Repo Stars](https://img.shields.io/github/stars/sananth12/ImageScraper) ![GitHub last commit](https://img.shields.io/github/last-commit/sananth12/ImageScraper)](https://github.com/sananth12/ImageScraper) - A cool command line image scraper with a lot of features.
* [imgp ![GitHub Repo Stars](https://img.shields.io/github/stars/jarun/imgp) ![GitHub last commit](https://img.shields.io/github/last-commit/jarun/imgp)](https://github.com/jarun/imgp) - Blazing fast batch image resizer and rotator
* [jc ![GitHub Repo Stars](https://img.shields.io/github/stars/kellyjonbrazil/jc) ![GitHub last commit](https://img.shields.io/github/last-commit/kellyjonbrazil/jc)](https://github.com/kellyjonbrazil/jc) - Convert command output, file-types, and common strings to JSON or YAML for easier use in scripts.
* [jo ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmens/jo) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmens/jo)](https://github.com/jpmens/jo) - A small utility to create JSON objects from command-line arguments.
* [jq ![GitHub Repo Stars](https://img.shields.io/github/stars/stedolan/jq) ![GitHub last commit](https://img.shields.io/github/last-commit/stedolan/jq)](https://github.com/stedolan/jq) - Sed for json data. You can use it to slice and filter and map and transform structured data
* [korkut ![GitHub Repo Stars](https://img.shields.io/github/stars/oguzhaninan/korkut) ![GitHub last commit](https://img.shields.io/github/last-commit/oguzhaninan/korkut)](https://github.com/oguzhaninan/korkut) - Quick and simple image processing at the command line.
* [library ![GitHub Repo Stars](https://img.shields.io/github/stars/chapmanjacobd/library) ![GitHub last commit](https://img.shields.io/github/last-commit/chapmanjacobd/library)](https://github.com/chapmanjacobd/library) - Create SQLITE databases for folders of music, video, images, or online media. Play and track media like Plex but a CLI-only interface with many sorting options.
* [mpv](https://mpv.io/) - Lets you play most audio and video formats (using ASCII characters) in the shell as well as in a GUI.
* [nehm ![GitHub Repo Stars](https://img.shields.io/github/stars/bogem/nehm) ![GitHub last commit](https://img.shields.io/github/last-commit/bogem/nehm)](https://github.com/bogem/nehm) - Console tool, which downloads, sets IDv3 tags and adds to your iTunes (if you use it) your SoundCloud likes in convenient way
* [PiCAST ![GitHub Repo Stars](https://img.shields.io/github/stars/lanceseidman/PiCAST) ![GitHub last commit](https://img.shields.io/github/last-commit/lanceseidman/PiCAST)](https://github.com/lanceseidman/PiCAST) - PiCAST turns your $35 Raspberry Pi in to a Chromecast like Device
* [sejda ![GitHub Repo Stars](https://img.shields.io/github/stars/torakiki/sejda) ![GitHub last commit](https://img.shields.io/github/last-commit/torakiki/sejda)](https://github.com/torakiki/sejda/) - Command line manipulation of PDF documents (split, merge, rotate, convert to jpg, extract text, etc)
* [visidata ![GitHub Repo Stars](https://img.shields.io/github/stars/saulpw/visidata) ![GitHub last commit](https://img.shields.io/github/last-commit/saulpw/visidata)](https://github.com/saulpw/visidata) - A terminal spreadsheet multitool for exploring and arranging data (csv/json/xml/xls/yaml/etc)
* [xidel ![GitHub Repo Stars](https://img.shields.io/github/stars/benibela/xidel) ![GitHub last commit](https://img.shields.io/github/last-commit/benibela/xidel)](https://github.com/benibela/xidel/) - Cli tool to filter, map and create HTML/XML/JSON data with (Turing-complete) XPath and XQuery.
* [xmlstarlet](http://xmlstar.sourceforge.net/) - Old but powerful tool for command-line XML formatting, filtering, and manipulation.
* [yq ![GitHub Repo Stars](https://img.shields.io/github/stars/mikefarah/yq) ![GitHub last commit](https://img.shields.io/github/last-commit/mikefarah/yq)](https://github.com/mikefarah/yq) - yq is a portable command-line YAML processor

## Applications

*Command line-based applications or command line access to existing services.*

* [ansiweather ![GitHub Repo Stars](https://img.shields.io/github/stars/fcambus/ansiweather) ![GitHub last commit](https://img.shields.io/github/last-commit/fcambus/ansiweather)](https://github.com/fcambus/ansiweather) - Weather in your terminal, with ANSI colors and Unicode symbols
* [awless ![GitHub Repo Stars](https://img.shields.io/github/stars/wallix/awless) ![GitHub last commit](https://img.shields.io/github/last-commit/wallix/awless)](https://github.com/wallix/awless) - A powerful, innovative and small surface CLI to manage AWS.
* [bashblog ![GitHub Repo Stars](https://img.shields.io/github/stars/cfenollosa/bashblog) ![GitHub last commit](https://img.shields.io/github/last-commit/cfenollosa/bashblog)](https://github.com/cfenollosa/bashblog) - A Bash script that handles blog posting
* [carbon-now-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/mixn/carbon-now-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/mixn/carbon-now-cli)](https://github.com/mixn/carbon-now-cli) - 🎨 Beautiful images of your code — from right inside your terminal.
* [choosealicense-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/lord63/choosealicense-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/lord63/choosealicense-cli)](https://github.com/lord63/choosealicense-cli) - Choose an OSS license from the comfort of your terminal
* [cointop ![GitHub Repo Stars](https://img.shields.io/github/stars/miguelmota/cointop) ![GitHub last commit](https://img.shields.io/github/last-commit/miguelmota/cointop)](https://github.com/miguelmota/cointop) - The fastest and most interactive terminal based UI application for tracking cryptocurrencies
* [dstask ![GitHub Repo Stars](https://img.shields.io/github/stars/naggie/dstask) ![GitHub last commit](https://img.shields.io/github/last-commit/naggie/dstask)](https://github.com/naggie/dstask) - Single binary terminal-based TODO manager with git-based sync + markdown notes per task
* [editly ![GitHub Repo Stars](https://img.shields.io/github/stars/mifi/editly) ![GitHub last commit](https://img.shields.io/github/last-commit/mifi/editly)](https://github.com/mifi/editly) - Command line video editor
* [facebook-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/specious/facebook-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/specious/facebook-cli)](https://github.com/specious/facebook-cli) - Facebook command line tool
* [fanyi ![GitHub Repo Stars](https://img.shields.io/github/stars/afc163/fanyi) ![GitHub last commit](https://img.shields.io/github/last-commit/afc163/fanyi)](https://github.com/afc163/fanyi) - Translate English to Chinese in terminal
* [gcalcli ![GitHub Repo Stars](https://img.shields.io/github/stars/insanum/gcalcli) ![GitHub last commit](https://img.shields.io/github/last-commit/insanum/gcalcli)](https://github.com/insanum/gcalcli) - Google Calendar command line interface
* [geeknote ![GitHub Repo Stars](https://img.shields.io/github/stars/VitaliyRodnenko/geeknote) ![GitHub last commit](https://img.shields.io/github/last-commit/VitaliyRodnenko/geeknote)](https://github.com/VitaliyRodnenko/geeknote) - Command line evernote client
* [haxor-news ![GitHub Repo Stars](https://img.shields.io/github/stars/donnemartin/haxor-news) ![GitHub last commit](https://img.shields.io/github/last-commit/donnemartin/haxor-news)](https://github.com/donnemartin/haxor-news) - Browse Hacker News like a haxor
* [hn-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/rafaelrinaldi/hn-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/rafaelrinaldi/hn-cli)](https://github.com/rafaelrinaldi/hn-cli) - Browse Hacker News from the comfort of your Terminal
* [iponmap ![GitHub Repo Stars](https://img.shields.io/github/stars/nogizhopaboroda/iponmap) ![GitHub last commit](https://img.shields.io/github/last-commit/nogizhopaboroda/iponmap)](https://github.com/nogizhopaboroda/iponmap) - Draw point on world map using ip address
* [isitup ![GitHub Repo Stars](https://img.shields.io/github/stars/lord63/isitup) ![GitHub last commit](https://img.shields.io/github/last-commit/lord63/isitup)](https://github.com/lord63/isitup) - Check whether a website is up or down
* [jrnl ![GitHub Repo Stars](https://img.shields.io/github/stars/jrnl-org/jrnl) ![GitHub last commit](https://img.shields.io/github/last-commit/jrnl-org/jrnl)](https://github.com/jrnl-org/jrnl) - A simple command line journal application that stores your journal in a plain text file
* [kanban.bash ![GitHub Repo Stars](https://img.shields.io/github/stars/coderofsalvation/kanban.bash) ![GitHub last commit](https://img.shields.io/github/last-commit/coderofsalvation/kanban.bash)](https://github.com/coderofsalvation/kanban.bash) - commandline asciii kanban board for minimalist productivity bash hackers (csv-based)
* [ledger ![GitHub Repo Stars](https://img.shields.io/github/stars/ledger/ledger) ![GitHub last commit](https://img.shields.io/github/last-commit/ledger/ledger)](https://github.com/ledger/ledger) - Command line accounting
* [licen ![GitHub Repo Stars](https://img.shields.io/github/stars/lord63/licen) ![GitHub last commit](https://img.shields.io/github/last-commit/lord63/licen)](https://github.com/lord63/licen) - Generate your license. Yet another lice, but implement with Jinja2 and docopt
* [md2png ![GitHub Repo Stars](https://img.shields.io/github/stars/weaming/md2png) ![GitHub last commit](https://img.shields.io/github/last-commit/weaming/md2png)](https://github.com/weaming/md2png) - Convert markdown to PNG image
* [moviemon ![GitHub Repo Stars](https://img.shields.io/github/stars/iCHAIT/moviemon) ![GitHub last commit](https://img.shields.io/github/last-commit/iCHAIT/moviemon)](https://github.com/iCHAIT/moviemon) - Everything about your movies within the command line.
* [nomino ![GitHub Repo Stars](https://img.shields.io/github/stars/yaa110/nomino) ![GitHub last commit](https://img.shields.io/github/last-commit/yaa110/nomino)](https://github.com/yaa110/nomino) - Batch rename utility using regex, sort and map file options.
* [pcalc ![GitHub Repo Stars](https://img.shields.io/github/stars/alt-romes/programmer-calculator) ![GitHub last commit](https://img.shields.io/github/last-commit/alt-romes/programmer-calculator)](https://github.com/alt-romes/programmer-calculator) - Calculator made for programmers working with multiple number representations, sizes, and overall close to the bits.
* [pockyt ![GitHub Repo Stars](https://img.shields.io/github/stars/achembarpu/pockyt) ![GitHub last commit](https://img.shields.io/github/last-commit/achembarpu/pockyt)](https://github.com/achembarpu/pockyt) - Read, Manage, and Automate your [Pocket](https://getpocket.com) collection.
* [pushblast ![GitHub Repo Stars](https://img.shields.io/github/stars/alebcay/pushblast) ![GitHub last commit](https://img.shields.io/github/last-commit/alebcay/pushblast)](https://github.com/alebcay/pushblast) - Get PushBullet notifications when a shell program exits
* [pushbullet-bash ![GitHub Repo Stars](https://img.shields.io/github/stars/Red5d/pushbullet-bash) ![GitHub last commit](https://img.shields.io/github/last-commit/Red5d/pushbullet-bash)](https://github.com/Red5d/pushbullet-bash) - Bash interface to the PushBullet API
* [ranger ![GitHub Repo Stars](https://img.shields.io/github/stars/ranger/ranger) ![GitHub last commit](https://img.shields.io/github/last-commit/ranger/ranger)](https://github.com/ranger/ranger) - A console file manager with VI key bindings.
* [Reddit Terminal Viewer ![GitHub Repo Stars](https://img.shields.io/github/stars/michael-lazar/rtv) ![GitHub last commit](https://img.shields.io/github/last-commit/michael-lazar/rtv)](https://github.com/michael-lazar/rtv) - Browse Reddit from your terminal
* [SAWS ![GitHub Repo Stars](https://img.shields.io/github/stars/donnemartin/saws) ![GitHub last commit](https://img.shields.io/github/last-commit/donnemartin/saws)](https://github.com/donnemartin/saws) - A Supercharged AWS CLI
* [taskbook ![GitHub Repo Stars](https://img.shields.io/github/stars/klaussinani/taskbook) ![GitHub last commit](https://img.shields.io/github/last-commit/klaussinani/taskbook)](https://github.com/klaussinani/taskbook) - Tasks, boards & notes for the command-line habitat
* [taskwarrior](https://taskwarrior.org/) - A command-line TODO list manager
* [terjira ![GitHub Repo Stars](https://img.shields.io/github/stars/keepcosmos/terjira) ![GitHub last commit](https://img.shields.io/github/last-commit/keepcosmos/terjira)](https://github.com/keepcosmos/terjira) - Command line power tool for Jira
* [ticker ![GitHub Repo Stars](https://img.shields.io/github/stars/achannarasappa/ticker) ![GitHub last commit](https://img.shields.io/github/last-commit/achannarasappa/ticker)](https://github.com/achannarasappa/ticker) — Terminal stock ticker with live updates and position tracking
* [vl ![GitHub Repo Stars](https://img.shields.io/github/stars/ellisonleao/vl) ![GitHub last commit](https://img.shields.io/github/last-commit/ellisonleao/vl)](https://github.com/ellisonleao/vl) - URL link checker on text documents
* [wego ![GitHub Repo Stars](https://img.shields.io/github/stars/schachmat/wego) ![GitHub last commit](https://img.shields.io/github/last-commit/schachmat/wego)](https://github.com/schachmat/wego) - Weather app for the terminal
* [whales ![GitHub Repo Stars](https://img.shields.io/github/stars/Gueils/whales) ![GitHub last commit](https://img.shields.io/github/last-commit/Gueils/whales)](https://github.com/Gueils/whales) - A tool to automatically dockerize your applications
* [whereami ![GitHub Repo Stars](https://img.shields.io/github/stars/rafaelrinaldi/whereami) ![GitHub last commit](https://img.shields.io/github/last-commit/rafaelrinaldi/whereami)](https://github.com/rafaelrinaldi/whereami) - Get your geolocation information from the CLI
* [wttr.in ![GitHub Repo Stars](https://img.shields.io/github/stars/chubin/wttr.in) ![GitHub last commit](https://img.shields.io/github/last-commit/chubin/wttr.in)](https://github.com/chubin/wttr.in) - :partly_sunny: The right way to check the weather (curl wttr.in)

## Games

*All work and no play is a cruddy way to spend your day.*

* [bash2048 ![GitHub Repo Stars](https://img.shields.io/github/stars/mydzor/bash2048) ![GitHub last commit](https://img.shields.io/github/last-commit/mydzor/bash2048)](https://github.com/mydzor/bash2048) - Bash implementation of 2048 game
* [minesweeper ![GitHub Repo Stars](https://img.shields.io/github/stars/feherke/Bash-script) ![GitHub last commit](https://img.shields.io/github/last-commit/feherke/Bash-script)](https://github.com/feherke/Bash-script/tree/master/minesweeper) - Bash implementation of minesweeper
* [nudoku ![GitHub Repo Stars](https://img.shields.io/github/stars/jubalh/nudoku) ![GitHub last commit](https://img.shields.io/github/last-commit/jubalh/nudoku)](https://github.com/jubalh/nudoku) - ncurses based sudoku game written in C
* [piu-piu ![GitHub Repo Stars](https://img.shields.io/github/stars/vaniacer/piu-piu-SH) ![GitHub last commit](https://img.shields.io/github/last-commit/vaniacer/piu-piu-SH)](https://github.com/vaniacer/piu-piu-SH) - Horizontal scroller game in bash with multiplayer mode!
* [sedtris ![GitHub Repo Stars](https://img.shields.io/github/stars/uuner/sedtris) ![GitHub last commit](https://img.shields.io/github/last-commit/uuner/sedtris)](https://github.com/uuner/sedtris) - Tetris in sed
* [sed-scripts ![GitHub Repo Stars](https://img.shields.io/github/stars/aureliojargas/sed-scripts) ![GitHub last commit](https://img.shields.io/github/last-commit/aureliojargas/sed-scripts)](https://github.com/aureliojargas/sed-scripts) - Arkanoid and Sokoban written using sed
* [SHTAP](https://notimetoplay.org/engines/shtap/) - Reusable text adventure engine for Bash 4
* [tty-solitaire ![GitHub Repo Stars](https://img.shields.io/github/stars/mpereira/tty-solitaire) ![GitHub last commit](https://img.shields.io/github/last-commit/mpereira/tty-solitaire)](https://github.com/mpereira/tty-solitaire) - Play solitaire in your terminal!

## Shell Package Management

*Tools for managing multiple shell configurations. For zsh-specific tools, see the Zsh section.*

* [bash-it ![GitHub Repo Stars](https://img.shields.io/github/stars/Bash-it/bash-it) ![GitHub last commit](https://img.shields.io/github/last-commit/Bash-it/bash-it)](https://github.com/Bash-it/bash-it) - A community Bash framework
* [basher ![GitHub Repo Stars](https://img.shields.io/github/stars/basherpm/basher) ![GitHub last commit](https://img.shields.io/github/last-commit/basherpm/basher)](https://github.com/basherpm/basher) - A package manager for shell scripts
* [bashing ![GitHub Repo Stars](https://img.shields.io/github/stars/xsc/bashing) ![GitHub last commit](https://img.shields.io/github/last-commit/xsc/bashing)](https://github.com/xsc/bashing) - Smashing Bash into Pieces
* [bpkg](https://www.bpkg.sh/) - JavaScript has npm, Ruby has Gems, Python has pip and now Shell has bpkg
* [dotdrop ![GitHub Repo Stars](https://img.shields.io/github/stars/deadc0de6/dotdrop) ![GitHub last commit](https://img.shields.io/github/last-commit/deadc0de6/dotdrop)](https://github.com/deadc0de6/dotdrop) - Save your dotfiles once, deploy them everywhere
* [dotfiler ![GitHub Repo Stars](https://img.shields.io/github/stars/svetlyak40wt/dotfiler) ![GitHub last commit](https://img.shields.io/github/last-commit/svetlyak40wt/dotfiler)](https://github.com/svetlyak40wt/dotfiler) – Shell agnostic git based dotfiles package manager, written in Python.
* [fresh ![GitHub Repo Stars](https://img.shields.io/github/stars/freshshell/fresh) ![GitHub last commit](https://img.shields.io/github/last-commit/freshshell/fresh)](https://github.com/freshshell/fresh) - Keep your dotfiles fresh
* [homeshick ![GitHub Repo Stars](https://img.shields.io/github/stars/andsens/homeshick) ![GitHub last commit](https://img.shields.io/github/last-commit/andsens/homeshick)](https://github.com/andsens/homeshick) - Git dotfile synchronizer written in Bash
* [shallow-backup ![GitHub Repo Stars](https://img.shields.io/github/stars/alichtman/shallow-backup) ![GitHub last commit](https://img.shields.io/github/last-commit/alichtman/shallow-backup)](https://github.com/alichtman/shallow-backup) - Easily create lightweight documentation of installed packages, dotfiles, and more
* [shundle ![GitHub Repo Stars](https://img.shields.io/github/stars/javier-lopez/shundle) ![GitHub last commit](https://img.shields.io/github/last-commit/javier-lopez/shundle)](https://github.com/javier-lopez/shundle) - Plugin manager for shell scripts
* [vcsh ![GitHub Repo Stars](https://img.shields.io/github/stars/RichiH/vcsh) ![GitHub last commit](https://img.shields.io/github/last-commit/RichiH/vcsh)](https://github.com/RichiH/vcsh) - Config manager based on Git
* [yadm](https://yadm.io/) - Git-based dotfiles manager supporting encryption, alternates, and bootstrapping

## Shell Script Development

*Tools for writing, improving, or organizing Bash or other shell scripts*

* [ansi ![GitHub Repo Stars](https://img.shields.io/github/stars/fidian/ansi) ![GitHub last commit](https://img.shields.io/github/last-commit/fidian/ansi)](https://github.com/fidian/ansi) - ANSI escape codes in pure bash - change text color, position the cursor, much more
* [assert.sh ![GitHub Repo Stars](https://img.shields.io/github/stars/lehmannro/assert.sh) ![GitHub last commit](https://img.shields.io/github/last-commit/lehmannro/assert.sh)](https://github.com/lehmannro/assert.sh) - Bash unit testing framework
* [bashew ![GitHub Repo Stars](https://img.shields.io/github/stars/pforret/bashew) ![GitHub last commit](https://img.shields.io/github/last-commit/pforret/bashew)](https://github.com/pforret/bashew) - bash script creator - from small stand-alone script to complex projects with CI/CD and testing
* [bashful ![GitHub Repo Stars](https://img.shields.io/github/stars/jmcantrell/bashful) ![GitHub last commit](https://img.shields.io/github/last-commit/jmcantrell/bashful)](https://github.com/jmcantrell/bashful) - A collection of libraries to simplify writing Bash scripts
* [Bashlets ![GitHub Repo Stars](https://img.shields.io/github/stars/reale/bashlets) ![GitHub last commit](https://img.shields.io/github/last-commit/reale/bashlets)](https://github.com/reale/bashlets) - A modular extensible toolbox for Bash
* [bashly](https://bashly.dannyb.co/) - Bash command line framework and CLI generator
* [bashmanager ![GitHub Repo Stars](https://img.shields.io/github/stars/lingtalfi/bashmanager) ![GitHub last commit](https://img.shields.io/github/last-commit/lingtalfi/bashmanager)](https://github.com/lingtalfi/bashmanager) - mini bash framework for creating command line tools
* [bashwithnails ![GitHub Repo Stars](https://img.shields.io/github/stars/mindaugasbarysas/bashwithnails) ![GitHub last commit](https://img.shields.io/github/last-commit/mindaugasbarysas/bashwithnails)](https://github.com/mindaugasbarysas/bashwithnails) - a Bash framework written just for fun with testing, dependency management & packaging
* [bash-language-server ![GitHub Repo Stars](https://img.shields.io/github/stars/bash-lsp/bash-language-server) ![GitHub last commit](https://img.shields.io/github/last-commit/bash-lsp/bash-language-server)](https://github.com/bash-lsp/bash-language-server) - [LSP](https://microsoft.github.io/language-server-protocol/)-based Bash language server
* [bash-modules ![GitHub Repo Stars](https://img.shields.io/github/stars/vlisivka/bash-modules) ![GitHub last commit](https://img.shields.io/github/last-commit/vlisivka/bash-modules)](https://github.com/vlisivka/bash-modules) - functions for developing with [unofficial strict mode](http://redsymbol.net/articles/unofficial-bash-strict-mode/) enabled.
* [bats ![GitHub Repo Stars](https://img.shields.io/github/stars/bats-core/bats-core) ![GitHub last commit](https://img.shields.io/github/last-commit/bats-core/bats-core)](https://github.com/bats-core/bats-core) - Bash Automated Testing System
* [composure ![GitHub Repo Stars](https://img.shields.io/github/stars/erichs/composure) ![GitHub last commit](https://img.shields.io/github/last-commit/erichs/composure)](https://github.com/erichs/composure) - Compose, document, version and organize your shell functions
* [crash ![GitHub Repo Stars](https://img.shields.io/github/stars/molovo/crash) ![GitHub last commit](https://img.shields.io/github/last-commit/molovo/crash)](https://github.com/molovo/crash) - Proper error handling, exceptions and try/catch for ZSH
* [critic.sh ![GitHub Repo Stars](https://img.shields.io/github/stars/Checksum/critic.sh) ![GitHub last commit](https://img.shields.io/github/last-commit/Checksum/critic.sh)](https://github.com/Checksum/critic.sh) - Dead simple testing framework for Bash with coverage reporting
* [dispatch ![GitHub Repo Stars](https://img.shields.io/github/stars/Mosai/workshop) ![GitHub last commit](https://img.shields.io/github/last-commit/Mosai/workshop)](https://github.com/Mosai/workshop/blob/master/doc/dispatch.md) - A command line argument parser in 50 lines of portable shell script.
* [esh ![GitHub Repo Stars](https://img.shields.io/github/stars/jirutka/esh) ![GitHub last commit](https://img.shields.io/github/last-commit/jirutka/esh)](https://github.com/jirutka/esh) - A simple templating engine based on shell, implemented in ~290 lines of POSIX shell and awk.
* [Fishtape ![GitHub Repo Stars](https://img.shields.io/github/stars/jorgebucaran/fishtape) ![GitHub last commit](https://img.shields.io/github/last-commit/jorgebucaran/fishtape)](https://github.com/jorgebucaran/fishtape) - TAP producer and test harness for fish
* [getoptions ![GitHub Repo Stars](https://img.shields.io/github/stars/ko1nksm/getoptions) ![GitHub last commit](https://img.shields.io/github/last-commit/ko1nksm/getoptions)](https://github.com/ko1nksm/getoptions) - An elegant option parser for shell scripts (sh, bash and all POSIX shells)
* [getopts.fish ![GitHub Repo Stars](https://img.shields.io/github/stars/jorgebucaran/getopts.fish) ![GitHub last commit](https://img.shields.io/github/last-commit/jorgebucaran/getopts.fish)](https://github.com/jorgebucaran/getopts.fish) - CLI parser for fish
* [is.sh ![GitHub Repo Stars](https://img.shields.io/github/stars/qzb/is.sh) ![GitHub last commit](https://img.shields.io/github/last-commit/qzb/is.sh)](https://github.com/qzb/is.sh) - An alternative for builtin test command, it will make your "if" statements pretty
* [lumberjack ![GitHub Repo Stars](https://img.shields.io/github/stars/molovo/lumberjack) ![GitHub last commit](https://img.shields.io/github/last-commit/molovo/lumberjack)](https://github.com/molovo/lumberjack) - A logging interface for shell scripts
* [mo ![GitHub Repo Stars](https://img.shields.io/github/stars/tests-always-included/mo) ![GitHub last commit](https://img.shields.io/github/last-commit/tests-always-included/mo)](https://github.com/tests-always-included/mo) - Mustache templates in pure bash
* [optparse ![GitHub Repo Stars](https://img.shields.io/github/stars/nk412/optparse) ![GitHub last commit](https://img.shields.io/github/last-commit/nk412/optparse)](https://github.com/nk412/optparse) - A BASH wrapper for getopts, for simple command line arguments.
* [rerun ![GitHub Repo Stars](https://img.shields.io/github/stars/rerun/rerun) ![GitHub last commit](https://img.shields.io/github/last-commit/rerun/rerun)](https://github.com/rerun/rerun) - A modular shell automation framework to organize your keeper scripts
* [revolver ![GitHub Repo Stars](https://img.shields.io/github/stars/molovo/revolver) ![GitHub last commit](https://img.shields.io/github/last-commit/molovo/revolver)](https://github.com/molovo/revolver) - A reusable progress spinner for shell scripts
* [phases ![GitHub Repo Stars](https://img.shields.io/github/stars/sorokine/phases) ![GitHub last commit](https://img.shields.io/github/last-commit/sorokine/phases)](https://github.com/sorokine/phases) - Minimally invasive bash preprocessor, select sections of your script to run
* [powscript ![GitHub Repo Stars](https://img.shields.io/github/stars/coderofsalvation/powscript) ![GitHub last commit](https://img.shields.io/github/last-commit/coderofsalvation/powscript)](https://github.com/coderofsalvation/powscript) - bash transpiler written in bash (coffeescript for bash)
* [semver_bash ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudflare/semver_bash) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudflare/semver_bash)](https://github.com/cloudflare/semver_bash) - Semantic Versioning in Bash
* [sh-semver ![GitHub Repo Stars](https://img.shields.io/github/stars/qzb/sh-semver) ![GitHub last commit](https://img.shields.io/github/last-commit/qzb/sh-semver)](https://github.com/qzb/sh-semver) - Semver tool for bash - finds versions matching to specified rules
* [shellcheck ![GitHub Repo Stars](https://img.shields.io/github/stars/koalaman/shellcheck) ![GitHub last commit](https://img.shields.io/github/last-commit/koalaman/shellcheck)](https://github.com/koalaman/shellcheck) - Static analysis tool for shell scripts
* [shellfire ![GitHub Repo Stars](https://img.shields.io/github/stars/shellfire-dev/shellfire) ![GitHub last commit](https://img.shields.io/github/last-commit/shellfire-dev/shellfire)](https://github.com/shellfire-dev/shellfire) -  A repository of namespaced, composable shell (bash, sh and dash) function libraries
* [shellspec ![GitHub Repo Stars](https://img.shields.io/github/stars/shellspec/shellspec) ![GitHub last commit](https://img.shields.io/github/last-commit/shellspec/shellspec)](https://github.com/shellspec/shellspec) - A full-featured BDD unit testing framework for dash, bash, ksh, zsh and all POSIX shells
* [shfmt ![GitHub Repo Stars](https://img.shields.io/github/stars/mvdan/sh) ![GitHub last commit](https://img.shields.io/github/last-commit/mvdan/sh)](https://github.com/mvdan/sh) - A shell parser, formatter, and interpreter with bash support; includes shfmt
* [shpec ![GitHub Repo Stars](https://img.shields.io/github/stars/rylnd/shpec) ![GitHub last commit](https://img.shields.io/github/last-commit/rylnd/shpec)](https://github.com/rylnd/shpec) - A shell testing framework
* [shutit](https://ianmiell.github.io/shutit/) - Automation framework based on bash and pexpect
* [sub ![GitHub Repo Stars](https://img.shields.io/github/stars/basecamp/sub) ![GitHub last commit](https://img.shields.io/github/last-commit/basecamp/sub)](https://github.com/basecamp/sub) - A delicious way to organize programs
* [ts ![GitHub Repo Stars](https://img.shields.io/github/stars/thinkerbot/ts) ![GitHub last commit](https://img.shields.io/github/last-commit/thinkerbot/ts)](https://github.com/thinkerbot/ts) - A shell test script
* [urchin ![GitHub Repo Stars](https://img.shields.io/github/stars/tlevine/urchin) ![GitHub last commit](https://img.shields.io/github/last-commit/tlevine/urchin)](https://github.com/tlevine/urchin) - An idiomatic shell testing framework that uses only shell commands
* [shunit2 ![GitHub Repo Stars](https://img.shields.io/github/stars/kward/shunit2) ![GitHub last commit](https://img.shields.io/github/last-commit/kward/shunit2)](https://github.com/kward/shunit2) - A unit test framework for Bash scripts with a flavour of JUnit/PyUnit.
* [rebash ![GitHub Repo Stars](https://img.shields.io/github/stars/jandob/rebash) ![GitHub last commit](https://img.shields.io/github/last-commit/jandob/rebash)](https://github.com/jandob/rebash) - Scripting library/framework. Features: imports, exceptions, doc-tests ...
* [zunit ![GitHub Repo Stars](https://img.shields.io/github/stars/zunit-zsh/zunit) ![GitHub last commit](https://img.shields.io/github/last-commit/zunit-zsh/zunit)](https://github.com/zunit-zsh/zunit) - A powerful unit testing framework for ZSH

# Guides

* [Bash Official Reference Manual](https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html)
* [Bash Hackers Wiki](https://web.archive.org/web/20230406205817/https://wiki.bash-hackers.org/)
* [Greg Wooledge's (aka "greycat") wiki](https://mywiki.wooledge.org).
  Specifically [Bash Guide](https://mywiki.wooledge.org/BashGuide), [Bash FAQ](https://mywiki.wooledge.org/BashFAQ) and [Bash Pitfalls](https://mywiki.wooledge.org/BashPitfalls)
* [Google's Shell Style Guide](https://google.github.io/styleguide/shell.xml)
* [The Linux Documentation Project: Bash Programming - Intro/How-to](https://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)
* [The Linux Documentation Project: Advanced Bash Scripting Guide](https://tldp.org/LDP/abs/html/)
* [WikiBooks: Bash Shell Scripting](https://en.wikibooks.org/wiki/Bash_Shell_Scripting)
* [Use the Unofficial Bash Strict Mode (Unless You Looove Debugging)](http://redsymbol.net/articles/unofficial-bash-strict-mode/)
* [The Art of Command Line ![GitHub Repo Stars](https://img.shields.io/github/stars/jlevy/the-art-of-command-line) ![GitHub last commit](https://img.shields.io/github/last-commit/jlevy/the-art-of-command-line)](https://github.com/jlevy/the-art-of-command-line)
* [Learn Enough Command Line to Be Dangerous](https://www.learnenough.com/command-line-tutorial/basics)
* [A guide to learn bash ![GitHub Repo Stars](https://img.shields.io/github/stars/Idnan/bash-guide) ![GitHub last commit](https://img.shields.io/github/last-commit/Idnan/bash-guide)](https://github.com/Idnan/bash-guide)
* [Shell Field Guide](https://raimonster.com/scripting-field-guide/)

# Other Awesome Lists

Other amazingly awesome lists can be found in [awesome-awesome ![GitHub Repo Stars](https://img.shields.io/github/stars/emijrp/awesome-awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/emijrp/awesome-awesome)](https://github.com/emijrp/awesome-awesome) and [awesome-awesomeness ![GitHub Repo Stars](https://img.shields.io/github/stars/bayandin/awesome-awesomeness) ![GitHub last commit](https://img.shields.io/github/last-commit/bayandin/awesome-awesomeness)](https://github.com/bayandin/awesome-awesomeness).

### See also

* [awesome-cli-apps ![GitHub Repo Stars](https://img.shields.io/github/stars/agarrharr/awesome-cli-apps) ![GitHub last commit](https://img.shields.io/github/last-commit/agarrharr/awesome-cli-apps)](https://github.com/agarrharr/awesome-cli-apps)
* [awesome-fish][awesome-fish]
* [awesome-zsh][awesome-zsh]
* [awesome-bash][awesome-bash]
* [terminals-are-sexy ![GitHub Repo Stars](https://img.shields.io/github/stars/k4m4/terminals-are-sexy) ![GitHub last commit](https://img.shields.io/github/last-commit/k4m4/terminals-are-sexy)](https://github.com/k4m4/terminals-are-sexy)

[awesome-badge]: https://raw.githubusercontent.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg
[awesome-fish]: https://github.com/jorgebucaran/awsm.fish
[awesome-link]: https://github.com/sindresorhus/awesome
[awesome-zsh]: https://github.com/unixorn/awesome-zsh-plugins
[awesome-bash]: https://github.com/awesome-lists/awesome-bash
