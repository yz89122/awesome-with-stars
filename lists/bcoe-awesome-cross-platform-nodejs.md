<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="logo_dark.svg"/>
    <img alt="awesome-cross-platform-nodejs logo" src="https://github.com/bcoe/awesome-cross-platform-nodejs/raw/master/logo.svg" width="500"/>
  </picture>
  <br>
  <a href="https://awesome.re">
	  <img src="https://awesome.re/badge.svg" alt="Awesome">
  </a>
  <p>A curated list of awesome developer tools for writing cross-platform Node.js code.</p>
</div>

## Contents

- [Resources](#resources)
- [Applications](#applications)
  - [Development environment](#development-environment)
  - [Continuous integration](#continuous-integration)
  - [Virtualization](#virtualization)
  - [Compatibility](#compatibility)
  - [Databases](#databases)
- [Libraries](#libraries)
  - [OS identification](#os-identification)
  - [Shell](#shell)
  - [Environment](#environment)
  - [Filesystem](#filesystem)
  - [Signals](#signals)
  - [Processes](#processes)
  - [Streams](#streams)
  - [Desktop UI](#desktop-ui)
  - [Windows registry](#windows-registry)
- [Known issues](#known-issues)
- [Support](#support)

## Resources

- [Core Node.js documentation](https://nodejs.org/en/docs/) - Especially the [`os`](https://nodejs.org/api/os.html), [`path`](https://nodejs.org/api/path.html), [`fs`](https://nodejs.org/api/fs.html), [`process`](https://nodejs.org/api/process.html) and [`child_process`](https://nodejs.org/api/child_process.html) modules.
- [Cross-platform Node.js guide ![GitHub Repo Stars](https://img.shields.io/github/stars/ehmicky/cross-platform-node-guide) ![GitHub last commit](https://img.shields.io/github/last-commit/ehmicky/cross-platform-node-guide)](https://github.com/ehmicky/cross-platform-node-guide) - How to write cross-platform Node.js code.
- [Microsoft Node.js Guidelines ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/nodejs-guidelines) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/nodejs-guidelines)](https://github.com/Microsoft/nodejs-guidelines) - Tips, tricks, and resources for working with Node.js on Microsoft platforms.
- [Writing Cross-Platform Node.js](http://shapeshed.com/writing-cross-platform-node/) - Great tutorial covering many common issues that arise when writing cross-platform code: path creation, script execution, newline characters.
- [Cross-platform terminal characters ![GitHub Repo Stars](https://img.shields.io/github/stars/ehmicky/cross-platform-terminal-characters) ![GitHub last commit](https://img.shields.io/github/last-commit/ehmicky/cross-platform-terminal-characters)](https://github.com/ehmicky/cross-platform-terminal-characters) - All the characters that work on most terminals and most operating systems.

## Applications

### Development environment

- [Node.js](https://nodejs.org/en/download/) - Node.js installer for various platforms.
- [nvm-windows ![GitHub Repo Stars](https://img.shields.io/github/stars/coreybutler/nvm-windows) ![GitHub last commit](https://img.shields.io/github/last-commit/coreybutler/nvm-windows)](https://github.com/coreybutler/nvm-windows) - Manage multiple installations of Node.js on a Windows computer.
- [nvm ![GitHub Repo Stars](https://img.shields.io/github/stars/creationix/nvm) ![GitHub last commit](https://img.shields.io/github/last-commit/creationix/nvm)](https://github.com/creationix/nvm) / [n ![GitHub Repo Stars](https://img.shields.io/github/stars/tj/n) ![GitHub last commit](https://img.shields.io/github/last-commit/tj/n)](https://github.com/tj/n) - Node version manager for macOS/Linux.
- [npm-windows-upgrade ![GitHub Repo Stars](https://img.shields.io/github/stars/felixrieseberg/npm-windows-upgrade) ![GitHub last commit](https://img.shields.io/github/last-commit/felixrieseberg/npm-windows-upgrade)](https://github.com/felixrieseberg/npm-windows-upgrade) - Upgrade npm on Windows.
- [windows-build-tools ![GitHub Repo Stars](https://img.shields.io/github/stars/felixrieseberg/windows-build-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/felixrieseberg/windows-build-tools)](https://github.com/felixrieseberg/windows-build-tools) - Install C++ Build Tools for Windows using npm.

### Continuous integration

- [AppVeyor](http://www.appveyor.com/) - Focused on Windows. Free tiers are available for OSS projects.
- [Travis](https://travis-ci.org/) - Windows/macOS/Linux. Free for OSS projects.
- [Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) - Windows/macOS/Linux. Free for OSS projects with 10 parallel jobs.
- [Github Action ![GitHub Repo Stars](https://img.shields.io/github/stars/features/actions) ![GitHub last commit](https://img.shields.io/github/last-commit/features/actions)](https://github.com/features/actions) - Windows/macOS/Linux. GitHub Actions makes it easy to automate all your software workflows.
- [Gitlab CI](https://docs.gitlab.com/ee/ci/) - Windows/macOS/Linux. GitLab CI/CD is a tool built into GitLab for software development.

### Virtualization

- [ievms ![GitHub Repo Stars](https://img.shields.io/github/stars/amichaelparker/ievms) ![GitHub last commit](https://img.shields.io/github/last-commit/amichaelparker/ievms)](https://github.com/amichaelparker/ievms) - Automated installer for the free virtual machine images that Microsoft provides for testing on multiple versions of IE. These images can be useful for cross-platform testing various technologies, however make sure you read and understand Microsofts' licensing.
- [VirtualBox](https://www.virtualbox.org/wiki/Downloads) - General purpose software for running x86 virtual machines.
- [Docker](https://www.docker.com/) - Software platform to create, deploy and manage virtualized application containers on a common operating system, with an ecosystem of allied tools.

### Compatibility

- [Wine](https://www.winehq.org/) - Run Windows API calls on Linux, Mac, BSD and Solaris.
- [Cygwin](https://www.cygwin.com/) - Run POSIX on Windows.
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10) - Run the Linux command line on Windows (ELF binary execution, system calls, filesystem, Bash, core utilities, common applications).
- [MinGW](http://www.mingw.org/) - `gcc` on Windows.
- [msys](http://www.mingw.org/wiki/msys) / [Git Bash](https://gitforwindows.org/) - Bash on Windows.

### Databases

- [Redis ![GitHub Repo Stars](https://img.shields.io/github/stars/tporadowski/redis) ![GitHub last commit](https://img.shields.io/github/last-commit/tporadowski/redis)](https://github.com/tporadowski/redis) - Native port of Redis for Windows.

## Libraries

### OS identification

- [is-windows ![GitHub Repo Stars](https://img.shields.io/github/stars/jonschlinkert/is-windows) ![GitHub last commit](https://img.shields.io/github/last-commit/jonschlinkert/is-windows)](https://github.com/jonschlinkert/is-windows) - Detect whether the current platform is Windows.
- [is-wsl ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/is-wsl) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/is-wsl)](https://github.com/sindresorhus/is-wsl) - Detect whether current platform is WSL (Windows Subsystem for Linux).
- [getos ![GitHub Repo Stars](https://img.shields.io/github/stars/retrohacker/getos) ![GitHub last commit](https://img.shields.io/github/last-commit/retrohacker/getos)](https://github.com/retrohacker/getos) - Retrieve the current OS, including Linux distribution.
- [os-name ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/os-name) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/os-name)](https://github.com/sindresorhus/os-name) - Get the name of the current operating system.
- [systeminformation ![GitHub Repo Stars](https://img.shields.io/github/stars/sebhildebrandt/systeminformation) ![GitHub last commit](https://img.shields.io/github/last-commit/sebhildebrandt/systeminformation)](https://github.com/sebhildebrandt/systeminformation) - Hardware/software system information.

### Shell

- [execa ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/execa) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/execa)](https://github.com/sindresorhus/execa) - Cross-platform implementation of `child_process.{execFile,exec}`.
- [gulp-execa ![GitHub Repo Stars](https://img.shields.io/github/stars/ehmicky/gulp-execa) ![GitHub last commit](https://img.shields.io/github/last-commit/ehmicky/gulp-execa)](https://github.com/ehmicky/gulp-execa) - Cross-platform command execution in Gulp.js.
- [cross-spawn ![GitHub Repo Stars](https://img.shields.io/github/stars/IndigoUnited/node-cross-spawn) ![GitHub last commit](https://img.shields.io/github/last-commit/IndigoUnited/node-cross-spawn)](https://github.com/IndigoUnited/node-cross-spawn) - Cross-platform implementation of `child_process.spawn()`.
- [shelljs ![GitHub Repo Stars](https://img.shields.io/github/stars/shelljs/shelljs) ![GitHub last commit](https://img.shields.io/github/last-commit/shelljs/shelljs)](https://github.com/shelljs/shelljs) - Cross-platform Unix shell commands.
- [node-windows ![GitHub Repo Stars](https://img.shields.io/github/stars/coreybutler/node-windows) ![GitHub last commit](https://img.shields.io/github/last-commit/coreybutler/node-windows)](https://github.com/coreybutler/node-windows) - Windows support for Node.js scripts (daemons, eventlog, UAC, etc).
- [log-symbols ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/log-symbols) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/log-symbols)](https://github.com/sindresorhus/log-symbols) - Colored symbols for various log levels with Windows fallbacks.
- [figures ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/figures) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/figures)](https://github.com/sindresorhus/figures) - Unicode symbols with Windows fallbacks.
- [clipboardy ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/clipboardy) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/clipboardy)](https://github.com/sindresorhus/clipboardy) / [clipboard-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/clipboard-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/clipboard-cli)](https://github.com/sindresorhus/clipboard-cli) - Cross-platform copy/paste.

### Environment

- [cross-env ![GitHub Repo Stars](https://img.shields.io/github/stars/kentcdodds/cross-env) ![GitHub last commit](https://img.shields.io/github/last-commit/kentcdodds/cross-env)](https://github.com/kentcdodds/cross-env) - Set environment variables cross-platform.
- [user-home ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/user-home) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/user-home)](https://github.com/sindresorhus/user-home) - Get the path to the user home directory. Cross-platform.
- [username ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/username) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/username)](https://github.com/sindresorhus/username) - Get the current username.
- [osenv ![GitHub Repo Stars](https://img.shields.io/github/stars/npm/osenv) ![GitHub last commit](https://img.shields.io/github/last-commit/npm/osenv)](https://github.com/npm/osenv) - Cross-platform environment variables.
- [is-elevated ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/is-elevated) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/is-elevated)](https://github.com/sindresorhus/is-elevated) - Check if the process is running with elevated privileges.
- [which ![GitHub Repo Stars](https://img.shields.io/github/stars/npm/node-which) ![GitHub last commit](https://img.shields.io/github/last-commit/npm/node-which)](https://github.com/npm/node-which) - Cross-platform implementation of Unix's `which`.

### Filesystem

- [rimraf ![GitHub Repo Stars](https://img.shields.io/github/stars/isaacs/rimraf) ![GitHub last commit](https://img.shields.io/github/last-commit/isaacs/rimraf)](https://github.com/isaacs/rimraf) / [del ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/del) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/del)](https://github.com/sindresorhus/del) - Delete files and folders. Cross-platform.
- [make-dir ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/make-dir) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/make-dir)](https://github.com/sindresorhus/make-dir) - Cross-platform `mkdir -p`.
- [readdirp ![GitHub Repo Stars](https://img.shields.io/github/stars/paulmillr/readdirp) ![GitHub last commit](https://img.shields.io/github/last-commit/paulmillr/readdirp)](https://github.com/paulmillr/readdirp) - Recursive version of `fs.readdir()`.
- [cpy ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/cpy) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/cpy)](https://github.com/sindresorhus/cpy) - Copy files. Cross-platform.
- [chokidar ![GitHub Repo Stars](https://img.shields.io/github/stars/paulmillr/chokidar) ![GitHub last commit](https://img.shields.io/github/last-commit/paulmillr/chokidar)](https://github.com/paulmillr/chokidar) - Improved cross-platform file watching.
- [graceful-fs ![GitHub Repo Stars](https://img.shields.io/github/stars/isaacs/node-graceful-fs) ![GitHub last commit](https://img.shields.io/github/last-commit/isaacs/node-graceful-fs)](https://github.com/isaacs/node-graceful-fs) - Improves the `fs` module, especially on Windows.
- [fs-extra ![GitHub Repo Stars](https://img.shields.io/github/stars/jprichardson/node-fs-extra) ![GitHub last commit](https://img.shields.io/github/last-commit/jprichardson/node-fs-extra)](https://github.com/jprichardson/node-fs-extra) - Combines `graceful-fs` with better JSON file reading and promises.
- [any-path ![GitHub Repo Stars](https://img.shields.io/github/stars/bcoe/any-path) ![GitHub last commit](https://img.shields.io/github/last-commit/bcoe/any-path)](https://github.com/bcoe/any-path) - Use Windows and POSIX paths interchangeably when fetching values from an object.
- [dev-null-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/dev-null-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/dev-null-cli)](https://github.com/sindresorhus/dev-null-cli) - Cross-platform `/dev/null`.
- [global-cache-dir ![GitHub Repo Stars](https://img.shields.io/github/stars/ehmicky/global-cache-dir) ![GitHub last commit](https://img.shields.io/github/last-commit/ehmicky/global-cache-dir)](https://github.com/ehmicky/global-cache-dir) - Get the global OS-specific cache directory.

### Signals

- [fkill ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/fkill) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/fkill)](https://github.com/sindresorhus/fkill) - Kill processes. Cross-platform.
- [signal-exit ![GitHub Repo Stars](https://img.shields.io/github/stars/tapjs/signal-exit) ![GitHub last commit](https://img.shields.io/github/last-commit/tapjs/signal-exit)](https://github.com/tapjs/signal-exit) - Cross-platform `exit` handler.
- [human-signals ![GitHub Repo Stars](https://img.shields.io/github/stars/ehmicky/human-signals) ![GitHub last commit](https://img.shields.io/github/last-commit/ehmicky/human-signals)](https://github.com/ehmicky/human-signals) - Human-friendly process signals.

### Processes

- [ps-list ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/ps-list) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/ps-list)](https://github.com/sindresorhus/ps-list) - Get running processes.
- [process-exists ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/process-exists) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/process-exists)](https://github.com/sindresorhus/process-exists) - Check if a process exists.

### Streams

- [noop-stream ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/noop-stream) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/noop-stream)](https://github.com/sindresorhus/noop-stream) - Cross-platform `fs.createReadStream('/dev/null')`.
- [random-bytes-readable-stream ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/random-bytes-readable-stream) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/random-bytes-readable-stream)](https://github.com/sindresorhus/random-bytes-readable-stream) - Cross-platform `fs.createReadStream('/dev/urandom')`.

### Desktop UI

- [open ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/open) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/open)](https://github.com/sindresorhus/open) - Opens stuff like websites, files, executables. Cross-platform.
- [node-notifier ![GitHub Repo Stars](https://img.shields.io/github/stars/mikaelbr/node-notifier) ![GitHub last commit](https://img.shields.io/github/last-commit/mikaelbr/node-notifier)](https://github.com/mikaelbr/node-notifier) - Cross-platform desktop notifications.

### Windows registry

- [node-winreg ![GitHub Repo Stars](https://img.shields.io/github/stars/fresc81/node-winreg) ![GitHub last commit](https://img.shields.io/github/last-commit/fresc81/node-winreg)](https://github.com/fresc81/node-winreg) - Access the Windows registry.
- [rage-edit ![GitHub Repo Stars](https://img.shields.io/github/stars/MikeKovarik/rage-edit) ![GitHub last commit](https://img.shields.io/github/last-commit/MikeKovarik/rage-edit)](https://github.com/MikeKovarik/rage-edit) - Access/modify the Windows registry.
- [windows-registry-node ![GitHub Repo Stars](https://img.shields.io/github/stars/CatalystCode/windows-registry-node) ![GitHub last commit](https://img.shields.io/github/last-commit/CatalystCode/windows-registry-node)](https://github.com/CatalystCode/windows-registry-node) - Access/modify the Windows registry and set file associations.

## Known issues

- [cmd.exe unicode woes ![GitHub Repo Stars](https://img.shields.io/github/stars/nodejs/node-v0.x-archive) ![GitHub last commit](https://img.shields.io/github/last-commit/nodejs/node-v0.x-archive)](https://github.com/nodejs/node-v0.x-archive/issues/7940) - By default, `cmd.exe` does not display Unicode characters on Windows.
- [spawn issues ![GitHub Repo Stars](https://img.shields.io/github/stars/nodejs/node-v0.x-archive) ![GitHub last commit](https://img.shields.io/github/last-commit/nodejs/node-v0.x-archive)](https://github.com/nodejs/node-v0.x-archive/issues/2318) - `child_process.spawn()` behavior is not consistent between Windows and Linux.
- [exec() behavior between shells ![GitHub Repo Stars](https://img.shields.io/github/stars/isaacs/spawn-wrap) ![GitHub last commit](https://img.shields.io/github/last-commit/isaacs/spawn-wrap)](https://github.com/isaacs/spawn-wrap#contracts-and-caveats) - Depending on the shell being used, e.g., bash vs. dash, `child_process.exec()` has inconsistent exit behavior.

## See also

- [awesome-desktop-js ![GitHub Repo Stars](https://img.shields.io/github/stars/styfle/awesome-desktop-js) ![GitHub last commit](https://img.shields.io/github/last-commit/styfle/awesome-desktop-js)](https://github.com/styfle/awesome-desktop-js) - List of tools to build JavaScript applications on the desktop.

## Support

If you found an error or would like to add more information, _don't hesitate_ to
[submit an issue on GitHub](../../issues).

Everyone is welcome regardless of personal background. We enforce a
[Code of conduct](CODE_OF_CONDUCT.md) in order to promote a positive and
inclusive environment.

## Contributing

This project was made with ❤️. The simplest way to give back is by starring and
sharing it online.

If the documentation is unclear or has a typo, please click on the page's `Edit`
button (pencil icon) and suggest a correction.

If you would like to help us fix an error or add more information, please check
our [guidelines](contributing.md). Pull requests are welcome!

Thanks go to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://twitter.com/benjamincoe"><img src="https://avatars3.githubusercontent.com/u/194609?v=4" width="100px;" alt="Benjamin E. Coe"/><br /><sub><b>Benjamin E. Coe</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=bcoe" title="Code">💻</a> <a href="#ideas-bcoe" title="Ideas, Planning, & Feedback">����</a> <a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=bcoe" title="Documentation">📖</a></td><td align="center"><a href="https://twitter.com/ehmicky"><img src="https://avatars2.githubusercontent.com/u/8136211?v=4" width="100px;" alt="ehmicky"/><br /><sub><b>ehmicky</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=ehmicky" title="Code">💻</a> <a href="#ideas-ehmicky" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=ehmicky" title="Documentation">📖</a></td><td align="center"><a href="https://sindresorhus.com"><img src="https://avatars1.githubusercontent.com/u/170270?v=4" width="100px;" alt="Sindre Sorhus"/><br /><sub><b>Sindre Sorhus</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=sindresorhus" title="Code">💻</a> <a href="#ideas-sindresorhus" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=sindresorhus" title="Documentation">📖</a></td><td align="center"><a href="https://fb.com/RemoveU"><img src="https://avatars1.githubusercontent.com/u/19208123?v=4" width="100px;" alt="Hongarc"/><br /><sub><b>Hongarc</b></sub></a><br /><a href="#design-Hongarc" title="Design">🎨</a> <a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=Hongarc" title="Documentation">📖</a> <a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=Hongarc" title="Code">💻</a></td><td align="center"><a href="https://kentcdodds.com"><img src="https://avatars0.githubusercontent.com/u/1500684?v=4" width="100px;" alt="Kent C. Dodds"/><br /><sub><b>Kent C. Dodds</b></sub></a><br /><a href="#ideas-kentcdodds" title="Ideas, Planning, & Feedback">🤔</a></td><td align="center"><a href="https://nz.linkedin.com/in/jsonc11"><img src="https://avatars0.githubusercontent.com/u/5185660?v=4" width="100px;" alt="Jason Cooke"/><br /><sub><b>Jason Cooke</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=Jason-Cooke" title="Documentation">📖</a></td><td align="center"><a href="http://aronhafner.com"><img src="https://avatars0.githubusercontent.com/u/3322693?v=4" width="100px;" alt="Aron Hafner"/><br /><sub><b>Aron Hafner</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=alonalon" title="Documentation">📖</a></td></tr><tr><td align="center"><a href="https://github.com/ShPelles"><img src="https://avatars0.githubusercontent.com/u/43875468?v=4" width="100px;" alt="ShPelles"/><br /><sub><b>ShPelles</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=ShPelles" title="Documentation">📖</a></td><td align="center"><a href="https://github.com/Frederick-S"><img src="https://avatars1.githubusercontent.com/u/1182395?v=4" width="100px;" alt="Xiaodan Mao"/><br /><sub><b>Xiaodan Mao</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=Frederick-S" title="Documentation">📖</a></td><td align="center"><a href="https://github.com/jamestalmage"><img src="https://avatars0.githubusercontent.com/u/4082216?v=4" width="100px;" alt="James Talmage"/><br /><sub><b>James Talmage</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=jamestalmage" title="Documentation">📖</a></td><td align="center"><a href="http://sylvain.pontoreau.com"><img src="https://avatars3.githubusercontent.com/u/3357643?v=4" width="100px;" alt="Sylvain PONTOREAU"/><br /><sub><b>Sylvain PONTOREAU</b></sub></a><br /><a href="https://github.com/bcoe/awesome-cross-platform-nodejs/commits?author=spontoreau" title="Documentation">📖</a></td><td align="center"><a href="https://www.ceriously.com"><img src="https://avatars1.githubusercontent.com/u/229881?v=4" width="100px;" alt="Steven"/><br /><sub><b>Steven</b></sub></a><br /><a href="#ideas-styfle" title="Ideas, Planning, & Feedback">🤔</a></td></tr></table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors ![GitHub Repo Stars](https://img.shields.io/github/stars/all-contributors/all-contributors) ![GitHub last commit](https://img.shields.io/github/last-commit/all-contributors/all-contributors)](https://github.com/all-contributors/all-contributors) specification.

## License

[![License](https://img.shields.io/github/license/bcoe/awesome-cross-platform-nodejs.svg?color=4cc61e&logo=github)](https://creativecommons.org/licenses/by-sa/4.0/)
