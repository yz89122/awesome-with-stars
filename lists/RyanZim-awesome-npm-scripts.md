<!--lint ignore awesome-heading-->
# Awesome npm Scripts [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="https://github.com/RyanZim/awesome-npm-scripts/raw/master/npm-logo.png" align="right" width="150">](https://www.npmjs.com)

> Everything awesome for using npm as a build tool.

You might also like [awesome-npm ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/awesome-npm) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome-npm)](https://github.com/sindresorhus/awesome-npm).

**Notice: I'm currently too busy to actively expand this list; therefore, I've decided to make this an [OPEN Open Source Project](http://openopensource.github.io/). Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit.**

## Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Articles](#articles)
- [Videos/Talks](#videostalks)
- [Task Runners](#task-runners)
- [File Watchers](#file-watchers)
- [Dev Servers](#dev-servers)
- [Cross-platform Utilities](#cross-platform-utilities)
  - [Utility Packs](#utility-packs)
- [Other Utilities](#other-utilities)
- [Miscellaneous](#miscellaneous)
- [Cross-platform Shell Reference](#cross-platform-shell-reference)
- [`npm run` Reference](#npm-run-reference)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Articles

- [Why we should stop using Grunt & Gulp](https://www.keithcirkel.co.uk/why-we-should-stop-using-grunt/) - Blog post by Keith Cirkel.
- [How to Use npm as a Build Tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/) - Sequel to »Why we should stop using Grunt & Gulp«.
- [Why I Left Gulp and Grunt for npm Scripts](https://medium.freecodecamp.com/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8) -  Article by Cory House.
- [Helpers and tips for npm run scripts](http://michael-kuehnel.de/tooling/2018/03/22/helpers-and-tips-for-npm-run-scripts.html) - Blog post by Michael Kühnel covering advanced topics.
- [Running cross-platform tasks via npm package scripts](https://exploringjs.com/nodejs-shell-scripting/ch_package-scripts.html) - The most comprehensive guide to using npm Scripts by Dr. Axel Rauschmayer.

## Videos/Talks

- [Advanced front-end automation with npm scripts](https://www.youtube.com/watch?v=0RYETb9YVrk) - Talk at Nordic.js 2015 by Kate Hudson.
- [How to create a build system with npm scripts](http://www.penta-code.com/how-to-create-a-build-system-with-npm-scripts/) - Video tutorial series on setting up a front-end build system.

## Task Runners

Tools for running multiple commands or npm scripts in parallel or sequentially.

- [script-runner ![GitHub Repo Stars](https://img.shields.io/github/stars/paulpflug/script-runner) ![GitHub last commit](https://img.shields.io/github/last-commit/paulpflug/script-runner)](https://github.com/paulpflug/script-runner) - Simple task runner with a terse syntax.
- [npm-run-all ![GitHub Repo Stars](https://img.shields.io/github/stars/mysticatea/npm-run-all) ![GitHub last commit](https://img.shields.io/github/last-commit/mysticatea/npm-run-all)](https://github.com/mysticatea/npm-run-all) - Fully featured task runner.
- [redrun ![GitHub Repo Stars](https://img.shields.io/github/stars/coderaiser/redrun) ![GitHub last commit](https://img.shields.io/github/last-commit/coderaiser/redrun)](https://github.com/coderaiser/redrun) - Expand scripts from package.json to improve execution speed.

## File Watchers

Tools to watch your source files and run a build command whenever any of the files change.

- [onchange ![GitHub Repo Stars](https://img.shields.io/github/stars/Qard/onchange) ![GitHub last commit](https://img.shields.io/github/last-commit/Qard/onchange)](https://github.com/Qard/onchange) - `onchange <glob> -- <command>`.
- [watch ![GitHub Repo Stars](https://img.shields.io/github/stars/mikeal/watch) ![GitHub last commit](https://img.shields.io/github/last-commit/mikeal/watch)](https://github.com/mikeal/watch) - `watch <command> <directory>`.

## Dev Servers

- [http-server ![GitHub Repo Stars](https://img.shields.io/github/stars/indexzero/http-server) ![GitHub last commit](https://img.shields.io/github/last-commit/indexzero/http-server)](https://github.com/indexzero/http-server) - Simple zero-configuration command-line http server.
- [live-server ![GitHub Repo Stars](https://img.shields.io/github/stars/tapio/live-server) ![GitHub last commit](https://img.shields.io/github/last-commit/tapio/live-server)](https://github.com/tapio/live-server) - Simple development http server with live reload capability.

## Cross-platform Utilities

Utilities to perform common command-line tasks without worrying about cross-platform compatibility.

- [rimraf ![GitHub Repo Stars](https://img.shields.io/github/stars/isaacs/rimraf) ![GitHub last commit](https://img.shields.io/github/last-commit/isaacs/rimraf)](https://github.com/isaacs/rimraf) - Delete files or directories; like `rm -rf`.
- [del-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/del-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/del-cli)](https://github.com/sindresorhus/del-cli) - Safer file and folder deletion.
- [mkdirp ![GitHub Repo Stars](https://img.shields.io/github/stars/substack/node-mkdirp) ![GitHub last commit](https://img.shields.io/github/last-commit/substack/node-mkdirp)](https://github.com/substack/node-mkdirp) - Create a directory, creating parent directories if needed; like `mkdir -p`.
- [cpr ![GitHub Repo Stars](https://img.shields.io/github/stars/davglass/cpr) ![GitHub last commit](https://img.shields.io/github/last-commit/davglass/cpr)](https://github.com/davglass/cpr) - `cp -r` for Node.js.
- [cpy-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/cpy-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/cpy-cli)](https://github.com/sindresorhus/cpy-cli) - File/directory copying/renaming.
- [copyfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/calvinmetcalf/copyfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/calvinmetcalf/copyfiles)](https://github.com/calvinmetcalf/copyfiles) - Copy a list of files into a directory.
- [sync-files ![GitHub Repo Stars](https://img.shields.io/github/stars/byteclubfr/node-sync-files) ![GitHub last commit](https://img.shields.io/github/last-commit/byteclubfr/node-sync-files)](https://github.com/byteclubfr/node-sync-files) - `rsync`-like directory syncing with watch mode.
- [echo-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/iamakulov/echo-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/iamakulov/echo-cli)](https://github.com/iamakulov/echo-cli) - Cross-platform `echo` with JS escape sequence support.
- [clear-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/clear-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/clear-cli)](https://github.com/sindresorhus/clear-cli) - Clear the terminal.
- [cross-env ![GitHub Repo Stars](https://img.shields.io/github/stars/kentcdodds/cross-env) ![GitHub last commit](https://img.shields.io/github/last-commit/kentcdodds/cross-env)](https://github.com/kentcdodds/cross-env) - Set environment variables for scripts, unix-style.
- [cross-os ![GitHub Repo Stars](https://img.shields.io/github/stars/milewski/cross-os) ![GitHub last commit](https://img.shields.io/github/last-commit/milewski/cross-os)](https://github.com/milewski/cross-os) - Run platform-specific npm scripts.
- [ntee ![GitHub Repo Stars](https://img.shields.io/github/stars/stefanmaric/ntee) ![GitHub last commit](https://img.shields.io/github/last-commit/stefanmaric/ntee)](https://github.com/stefanmaric/ntee) - Utility that reads from standard input and writes to standard output and files; like Unix `tee`.
- [catw ![GitHub Repo Stars](https://img.shields.io/github/stars/substack/catw) ![GitHub last commit](https://img.shields.io/github/last-commit/substack/catw)](https://github.com/substack/catw) - Print a file to stdout, with optional watch mode; sorta like Unix `cat`.

### Utility Packs

- [shx ![GitHub Repo Stars](https://img.shields.io/github/stars/shelljs/shx) ![GitHub last commit](https://img.shields.io/github/last-commit/shelljs/shx)](https://github.com/shelljs/shx) - Collection of common Unix utilities implemented in Node.js; example usage: `shx rm somefile`.

## Other Utilities

- [hashmark ![GitHub Repo Stars](https://img.shields.io/github/stars/keithamus/hashmark) ![GitHub last commit](https://img.shields.io/github/last-commit/keithamus/hashmark)](https://github.com/keithamus/hashmark) -  Take contents of a file and output as new file with a hash in the name.
- [gzip-size-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gzip-size-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gzip-size-cli)](https://github.com/sindresorhus/gzip-size-cli) - Get the gzipped size of a file or stdin.
- [opn-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/opn-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/opn-cli)](https://github.com/sindresorhus/opn-cli) - Open websites, files, executables, etc. with the user's preferred application.
- [headr ![GitHub Repo Stars](https://img.shields.io/github/stars/heldr/headr) ![GitHub last commit](https://img.shields.io/github/last-commit/heldr/headr)](https://github.com/heldr/headr) - Add header / banner info to a file.
- [Bower files CLI ![GitHub Repo Stars](https://img.shields.io/github/stars/thompsonemerson/bower-files-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/thompsonemerson/bower-files-cli)](https://github.com/thompsonemerson/bower-files-cli) - Get main bower files on the command line.
- [cli-error-notifier ![GitHub Repo Stars](https://img.shields.io/github/stars/micromata/cli-error-notifier) ![GitHub last commit](https://img.shields.io/github/last-commit/micromata/cli-error-notifier)](https://github.com/micromata/cli-error-notifier) - Send native desktop notifications when npm scripts fail.

## Miscellaneous

- [screwy ![GitHub Repo Stars](https://img.shields.io/github/stars/samueleaton/screwy) ![GitHub last commit](https://img.shields.io/github/last-commit/samueleaton/screwy)](https://github.com/samueleaton/screwy) - The npm scripts GUI.
- [Forrest ![GitHub Repo Stars](https://img.shields.io/github/stars/stefanjudis/forrest) ![GitHub last commit](https://img.shields.io/github/last-commit/stefanjudis/forrest)](https://github.com/stefanjudis/forrest) - npm scripts desktop client.
- [run-npm ![GitHub Repo Stars](https://img.shields.io/github/stars/timoxley/npm-run) ![GitHub last commit](https://img.shields.io/github/last-commit/timoxley/npm-run)](https://github.com/timoxley/npm-run) - Run locally-installed node module executables. Useful for debugging npm scripts.
- [npm-quick-run ![GitHub Repo Stars](https://img.shields.io/github/stars/bahmutov/npm-quick-run) ![GitHub last commit](https://img.shields.io/github/last-commit/bahmutov/npm-quick-run)](https://github.com/bahmutov/npm-quick-run) - Quickly run npm scripts by prefix without typing the full name.
- [edit-script ![GitHub Repo Stars](https://img.shields.io/github/stars/RyanZim/edit-script) ![GitHub last commit](https://img.shields.io/github/last-commit/RyanZim/edit-script)](https://github.com/RyanZim/edit-script) - Edit npm scripts from the command line without worrying about JSON escaping.
- [ntl ![GitHub Repo Stars](https://img.shields.io/github/stars/ruyadorno/ntl) ![GitHub last commit](https://img.shields.io/github/last-commit/ruyadorno/ntl)](https://github.com/ruyadorno/ntl) - Interactive cli menu to list and run npm scripts.

## Cross-platform Shell Reference

A quick reference of the shell operators & commands that work the same on Unix and Windows.

- Use `&&` to run commands in sequence. If a command fails, the script exits.
- Use `|` to pipe the stdout of one command into the stdin of the next. (`do-something | something else`)
- Use `>` to write the stdout of a command to a file. (`do-something > file`)
- Use `<` to send the contents of a file to a command's stdin. (`command < file`)
- Use `cd <dir>` to change the current working directory to `<dir>`. Note that `cd` alone prints the current working directory on windows, but changes the working directory to `~` on \*nix.

## `npm run` Reference

You can use `npm run-script` or `npm run`; they both do the same thing, but `npm run` is shorter.

- Run just `npm run` to print a list of scripts.
- Running `npm run script` (where `script` is the name of your script) will run `prescript`, `script`, and `postscript`; in that order.
  - You can't nest `pre` and `post` hooks (i.e. `preprescript` won't work).
- You can pass arguments to your scripts by passing `--` to `npm run`, followed by the arguments. Example: Given the script `"mocha": "mocha"`, you can run `npm run mocha -- --reporter xunit`. This effectively runs `mocha --reporter xunit`.
- Running `npm test` is the same as running `npm run test`. The same applies to `npm start` and `npm stop`.
- You can run `npm run <script> -s` to silence the default npm output (useful for calling a script within another script).

## Contributing

See [CONTRIBUTING.md ![GitHub Repo Stars](https://img.shields.io/github/stars/RyanZim/awesome-npm-scripts) ![GitHub last commit](https://img.shields.io/github/last-commit/RyanZim/awesome-npm-scripts)](https://github.com/RyanZim/awesome-npm-scripts/blob/master/CONTRIBUTING.md).
