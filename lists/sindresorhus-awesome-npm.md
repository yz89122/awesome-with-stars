# Awesome npm [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [<img src="https://github.com/npm/logos/blob/7fb0bc425e0dac1bab065217c4ed595594448db4/npm-transparent.png" width="200" align="right" alt="npm">](https://www.npmjs.com)

> Awesome [npm](https://www.npmjs.com) resources and tips

[npm](https://en.wikipedia.org/wiki/Npm_(software)) is a package manager for the JavaScript programming language and comes bundled in the [Node.js](https://en.wikipedia.org/wiki/Node.js) runtime.

*Please read the [contribution guidelines](contributing.md) before contributing.*

## Contents

- [Articles](#articles)
- [Tools](#tools)
- [Packages](#packages)
- [Clients](#clients)
- [Tips](#tips)
- [FAQ](#faq)
- [Community](#community)
- [Documentation](#documentation)
- [Support](#support)
- [Related](#related)

## Articles

- [Small focused modules ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/ama) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/ama)](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328)
- [Unix philosophy and Node.js](http://blog.izs.me/post/48281998870/unix-philosophy-and-nodejs) - Write programs that do one thing and do it well.
- [Writing small modules](https://web.archive.org/web/20180302125059/https://substack.net/how_I_write_modules)
- [Semver: A Primer](https://nodesource.com/blog/semver-a-primer/) *(Must read!)*
- [Semver: Tilde and Caret](https://nodesource.com/blog/semver-tilde-and-caret/)
- [Offline installation of npm packages](https://addyosmani.com/blog/using-npm-offline/)
- [Task automation with npm run](https://web.archive.org/web/20180302164842/http://substack.net/task_automation_with_npm_run)
- [How to use npm as a build tool](https://www.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/)
- [Install npm packages globally without sudo on macOS and Linux ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/guides) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/guides)](https://github.com/sindresorhus/guides/blob/main/npm-global-without-sudo.md)
- [Optimizing the footprint of an npm package](https://medium.com/@goldglovecb/npm-needs-a-personal-trainer-537e0f8859c6)
- [The Art of Node ![GitHub Repo Stars](https://img.shields.io/github/stars/maxogden/art-of-node) ![GitHub last commit](https://img.shields.io/github/last-commit/maxogden/art-of-node)](https://github.com/maxogden/art-of-node#modules) - An introduction to Node.js and client-side development with npm.
- [Why npm scripts?](https://css-tricks.com/why-npm-scripts/) - An introduction to npm scripts with common packages and scripts, as well as a boilerplate project.

## Tools

### Web

- [npms](https://npms.io) - Superb package search with deep analysis of package quality using a [myriad of metrics](https://npms.io/about).
- [NodeICO](https://nodei.co/) - Package badges.
- [Libraries.io](https://libraries.io/npm) - Package discovery.
- [npm-stat](http://npm-stat.com) - Statistics charts for packages.
- [npmgraph](http://npm.anvaka.com) - Visualization of dependencies.
- [npm trends](http://www.npmtrends.com) - Compare package download counts over time.
- [npm-compare](https://npmcompare.com) - Easily search and compare packages.
- [npm-top](https://gist.github.com/bcoe/dcc961b869bbf6685002) - npm users by downloads.
- [npm semver calculator](http://semver.npmjs.com) - Visually explore what versions of a package a semver range matches.
- [ghub.io](https://ghub.io) - Redirects to the GitHub repo of an npm package.
- [moiva](https://moiva.io) - Discover and compare packages.

### Browser extensions

- [Octo-Linker](https://chrome.google.com/webstore/detail/octo-linker/jlmafbaeoofdegohdhinkhilhclaklkp) - Chrome extension to navigate across npm packages on GitHub with ease.
- [npm-hub](https://chrome.google.com/webstore/detail/npm-hub/kbbbjimdjbjclaebffknlabpogocablj) - Chrome extension to explore npm dependencies on GitHub repos.
- [github-npm-stats](https://chrome.google.com/webstore/detail/github-npm-stats/oomfflokggoffaiagenekchfnpighcef) - View npm download stats on GitHub.
- [npm-search-update](https://chrome.google.com/webstore/detail/npm-search-update/kagpoplamlmaonpddimnnigiojimihnh) - Chrome extension to quickly search for dependencies and monitor changes from the npm registry.

### CLI

- [zsh-better-npm-completion ![GitHub Repo Stars](https://img.shields.io/github/stars/lukechilds/zsh-better-npm-completion) ![GitHub last commit](https://img.shields.io/github/last-commit/lukechilds/zsh-better-npm-completion)](https://github.com/lukechilds/zsh-better-npm-completion) - Better ZSH completion for npm.
- [npkill ![GitHub Repo Stars](https://img.shields.io/github/stars/voidcosmos/npkill) ![GitHub last commit](https://img.shields.io/github/last-commit/voidcosmos/npkill)](https://github.com/voidcosmos/npkill) - Easily find and remove old and heavy node_modules folders.

## Packages

### Publishing

- [np ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/np) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/np)](https://github.com/sindresorhus/np) - A better `npm publish`.
- [publish-please ![GitHub Repo Stars](https://img.shields.io/github/stars/inikulin/publish-please) ![GitHub last commit](https://img.shields.io/github/last-commit/inikulin/publish-please)](https://github.com/inikulin/publish-please) - Publish packages safely and gracefully.
- [npm-release ![GitHub Repo Stars](https://img.shields.io/github/stars/phuu/npm-release) ![GitHub last commit](https://img.shields.io/github/last-commit/phuu/npm-release)](https://github.com/phuu/npm-release) - Making releasing to npm so easy a kitten could probably do it™.
- [pkgfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/timoxley/pkgfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/timoxley/pkgfiles)](https://github.com/timoxley/pkgfiles) - List all files which would be published in a package.
- [release-it ![GitHub Repo Stars](https://img.shields.io/github/stars/webpro/release-it) ![GitHub last commit](https://img.shields.io/github/last-commit/webpro/release-it)](https://github.com/webpro/release-it) - Automate releases for Git repositories and/or npm packages. Changelog generation, GitHub/GitLab releases, etc.
- [semantic-release ![GitHub Repo Stars](https://img.shields.io/github/stars/semantic-release/semantic-release) ![GitHub last commit](https://img.shields.io/github/last-commit/semantic-release/semantic-release)](https://github.com/semantic-release/semantic-release) - Fully automated package publishing.

### Registry

- [npm-name ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/npm-name-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/npm-name-cli)](https://github.com/sindresorhus/npm-name-cli) - Check whether a package name is available on npm.
- [package-json ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/package-json) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/package-json)](https://github.com/sindresorhus/package-json) - Get the package.json of a package from the npm registry.
- [latest-version ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/latest-version-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/latest-version-cli)](https://github.com/sindresorhus/latest-version-cli) - Get the latest version of an npm package.
- [npm-keyword ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/npm-keyword) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/npm-keyword)](https://github.com/sindresorhus/npm-keyword) - Get a list of npm packages with a certain keyword.
- [npm-user ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/npm-user) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/npm-user)](https://github.com/sindresorhus/npm-user) - Get user info of an npm user.
- [npm-email ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/npm-email) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/npm-email)](https://github.com/sindresorhus/npm-email) - Get the email of an npm user.
- [npm-user-packages ![GitHub Repo Stars](https://img.shields.io/github/stars/kevva/npm-user-packages-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/kevva/npm-user-packages-cli)](https://github.com/kevva/npm-user-packages-cli) - Get packages by an npm user.
- [dpn ![GitHub Repo Stars](https://img.shields.io/github/stars/gillstrom/dpn) ![GitHub last commit](https://img.shields.io/github/last-commit/gillstrom/dpn)](https://github.com/gillstrom/dpn) - Get the dependents of a user's npm packages.
- [npm-stats ![GitHub Repo Stars](https://img.shields.io/github/stars/hughsk/npm-stats) ![GitHub last commit](https://img.shields.io/github/last-commit/hughsk/npm-stats)](https://github.com/hughsk/npm-stats) - Get data from an npm registry.
- [npm-cli-login ![GitHub Repo Stars](https://img.shields.io/github/stars/postmanlabs/npm-cli-login) ![GitHub last commit](https://img.shields.io/github/last-commit/postmanlabs/npm-cli-login)](https://github.com/postmanlabs/npm-cli-login) - Log in to npm.
- [nrm ![GitHub Repo Stars](https://img.shields.io/github/stars/Pana/nrm) ![GitHub last commit](https://img.shields.io/github/last-commit/Pana/nrm)](https://github.com/Pana/nrm) - Registry manager.
- [npm-register ![GitHub Repo Stars](https://img.shields.io/github/stars/dickeyxxx/npm-register) ![GitHub last commit](https://img.shields.io/github/last-commit/dickeyxxx/npm-register)](https://github.com/dickeyxxx/npm-register) - Easy to set up and maintain npm registry and proxy.
- [verdaccio ![GitHub Repo Stars](https://img.shields.io/github/stars/verdaccio/verdaccio) ![GitHub last commit](https://img.shields.io/github/last-commit/verdaccio/verdaccio)](https://github.com/verdaccio/verdaccio) - Lightweight private npm proxy registry.
- [cloudsmith](https://cloudsmith.io/l/npm-registry/) - A fully managed package management SaaS with support for public and private npm registries (and many others).

### Other

- [npm-home ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/npm-home) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/npm-home)](https://github.com/sindresorhus/npm-home) - Open the npm page of a package.
- [gh-home ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/gh-home) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/gh-home)](https://github.com/sindresorhus/gh-home) - Open the GitHub page of a package.
- [david ![GitHub Repo Stars](https://img.shields.io/github/stars/alanshaw/david) ![GitHub last commit](https://img.shields.io/github/last-commit/alanshaw/david)](https://github.com/alanshaw/david) - Check if your package dependencies are out of date.
- [npm-check ![GitHub Repo Stars](https://img.shields.io/github/stars/dylang/npm-check) ![GitHub last commit](https://img.shields.io/github/last-commit/dylang/npm-check)](https://github.com/dylang/npm-check) - Check for outdated, incorrect, and unused dependencies, as well as interactive update.
- [npm-upgrade ![GitHub Repo Stars](https://img.shields.io/github/stars/th0r/npm-upgrade) ![GitHub last commit](https://img.shields.io/github/last-commit/th0r/npm-upgrade)](https://github.com/th0r/npm-upgrade) - Update outdated npm dependencies interactively.
- [npm-shrinkwrap ![GitHub Repo Stars](https://img.shields.io/github/stars/uber/npm-shrinkwrap) ![GitHub last commit](https://img.shields.io/github/last-commit/uber/npm-shrinkwrap)](https://github.com/uber/npm-shrinkwrap) - A consistent shrinkwrap tool.
- [npm-windows-upgrade ![GitHub Repo Stars](https://img.shields.io/github/stars/felixrieseberg/npm-windows-upgrade) ![GitHub last commit](https://img.shields.io/github/last-commit/felixrieseberg/npm-windows-upgrade)](https://github.com/felixrieseberg/npm-windows-upgrade) - Upgrade npm on Windows.
- [generator-nm ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/generator-nm) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/generator-nm)](https://github.com/sindresorhus/generator-nm) - Scaffold out an npm package.
- [pkg-up ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/pkg-up) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/pkg-up)](https://github.com/sindresorhus/pkg-up) - Find the closest package.json file.
- [read-pkg-up ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/read-pkg-up) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/read-pkg-up)](https://github.com/sindresorhus/read-pkg-up) - Read the closest package.json file.
- [normalize-package-data ![GitHub Repo Stars](https://img.shields.io/github/stars/npm/normalize-package-data) ![GitHub last commit](https://img.shields.io/github/last-commit/npm/normalize-package-data)](https://github.com/npm/normalize-package-data) - Normalize package metadata.
- [pkg-conf ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/pkg-conf) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/pkg-conf)](https://github.com/sindresorhus/pkg-conf) - Get namespaced config from the closest package.json.
- [npm-run-path ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/npm-run-path) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/npm-run-path)](https://github.com/sindresorhus/npm-run-path) - Run locally installed binaries in the terminal by name like with global ones.
- [local-npm ![GitHub Repo Stars](https://img.shields.io/github/stars/nolanlawson/local-npm) ![GitHub last commit](https://img.shields.io/github/last-commit/nolanlawson/local-npm)](https://github.com/nolanlawson/local-npm) - Use npm [offline](https://addyosmani.com/blog/using-npm-offline/).
- [npe ![GitHub Repo Stars](https://img.shields.io/github/stars/zeke/npe) ![GitHub last commit](https://img.shields.io/github/last-commit/zeke/npe)](https://github.com/zeke/npe) - CLI for inspecting and editing properties in package.json.
- [engine-deps ![GitHub Repo Stars](https://img.shields.io/github/stars/samccone/engine-deps) ![GitHub last commit](https://img.shields.io/github/last-commit/samccone/engine-deps)](https://github.com/samccone/engine-deps) - Manage Node.js version specific dependencies with ease.
- [enpeem-search ![GitHub Repo Stars](https://img.shields.io/github/stars/amovah/enpeem-search) ![GitHub last commit](https://img.shields.io/github/last-commit/amovah/enpeem-search)](https://github.com/amovah/enpeem-search) - Search packages by scraping the npm web search.
- [npm-issues ![GitHub Repo Stars](https://img.shields.io/github/stars/seanzarrin/npm-issues) ![GitHub last commit](https://img.shields.io/github/last-commit/seanzarrin/npm-issues)](https://github.com/seanzarrin/npm-issues) - Search known issues of all your packages at once.
- [john ![GitHub Repo Stars](https://img.shields.io/github/stars/davej/john) ![GitHub last commit](https://img.shields.io/github/last-commit/davej/john)](https://github.com/davej/john) - Make npm3's flat dependencies easier to find and sort.
- [ntl ![GitHub Repo Stars](https://img.shields.io/github/stars/ruyadorno/ntl) ![GitHub last commit](https://img.shields.io/github/last-commit/ruyadorno/ntl)](https://github.com/ruyadorno/ntl) - Interactive CLI menu to list & run npm tasks.
- [decheck ![GitHub Repo Stars](https://img.shields.io/github/stars/egoist/decheck) ![GitHub last commit](https://img.shields.io/github/last-commit/egoist/decheck)](https://github.com/egoist/decheck) - Explore dependencies of npm packages in the command-line.
- [shrinkpack ![GitHub Repo Stars](https://img.shields.io/github/stars/JamieMason/shrinkpack) ![GitHub last commit](https://img.shields.io/github/last-commit/JamieMason/shrinkpack)](https://github.com/JamieMason/shrinkpack) - Lock down your dependencies and install offline.
- [redrun ![GitHub Repo Stars](https://img.shields.io/github/stars/coderaiser/redrun) ![GitHub last commit](https://img.shields.io/github/last-commit/coderaiser/redrun)](https://github.com/coderaiser/redrun) - Expand scripts from package.json to improve execution speed.
- [package-size ![GitHub Repo Stars](https://img.shields.io/github/stars/egoist/package-size) ![GitHub last commit](https://img.shields.io/github/last-commit/egoist/package-size)](https://github.com/egoist/package-size) - Get the bundle size of an npm package.
- [synp ![GitHub Repo Stars](https://img.shields.io/github/stars/imsnif/synp) ![GitHub last commit](https://img.shields.io/github/last-commit/imsnif/synp)](https://github.com/imsnif/synp) - Convert yarn.lock to package-lock.json and vice versa.
- [npm-run-all ![GitHub Repo Stars](https://img.shields.io/github/stars/mysticatea/npm-run-all) ![GitHub last commit](https://img.shields.io/github/last-commit/mysticatea/npm-run-all)](https://github.com/mysticatea/npm-run-all) - CLI tool to run multiple npm-scripts in parallel or serial.
- [onchange ![GitHub Repo Stars](https://img.shields.io/github/stars/Qard/onchange) ![GitHub last commit](https://img.shields.io/github/last-commit/Qard/onchange)](https://github.com/Qard/onchange) - Watch files and folders and run a command when something changed.
- [cli-error-notifier ![GitHub Repo Stars](https://img.shields.io/github/stars/micromata/cli-error-notifier) ![GitHub last commit](https://img.shields.io/github/last-commit/micromata/cli-error-notifier)](https://github.com/micromata/cli-error-notifier) - Sends native desktop notifications when npm scripts fail.
- [luna ![GitHub Repo Stars](https://img.shields.io/github/stars/rvpanoz/luna) ![GitHub last commit](https://img.shields.io/github/last-commit/rvpanoz/luna)](https://github.com/rvpanoz/luna) - App to manage npm dependencies.
- [emma-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/maticzav/emma-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/maticzav/emma-cli)](https://github.com/maticzav/emma-cli) - Interactive CLI package search utility.
- [lockfile-lint ![GitHub Repo Stars](https://img.shields.io/github/stars/lirantal/lockfile-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/lirantal/lockfile-lint)](https://github.com/lirantal/lockfile-lint) - Lint lockfiles for improved security and trust policies to mitigate malicious package injection and insecure lockfile resources.

## Clients

- [yarn ![GitHub Repo Stars](https://img.shields.io/github/stars/yarnpkg/yarn) ![GitHub last commit](https://img.shields.io/github/last-commit/yarnpkg/yarn)](https://github.com/yarnpkg/yarn) - Fast, reliable, and secure dependency management.
- [npm ![GitHub Repo Stars](https://img.shields.io/github/stars/npm/cli) ![GitHub last commit](https://img.shields.io/github/last-commit/npm/cli)](https://github.com/npm/cli) - The official client.
- [pnpm ![GitHub Repo Stars](https://img.shields.io/github/stars/pnpm/pnpm) ![GitHub last commit](https://img.shields.io/github/last-commit/pnpm/pnpm)](https://github.com/pnpm/pnpm) - Fast, disk space efficient package manager.

## Tips

### Update to the latest npm version

```
$ npm install --global npm
```

*[Windows users, read more. ![GitHub Repo Stars](https://img.shields.io/github/stars/felixrieseberg/npm-windows-upgrade) ![GitHub last commit](https://img.shields.io/github/last-commit/felixrieseberg/npm-windows-upgrade)](https://github.com/felixrieseberg/npm-windows-upgrade)*

### Command aliases

- `npm i ` → `npm install`
- `npm i -D` → `npm install --save-dev`
- `npm t` → `npm test`
- `npm it` → `npm install && npm test`
- `npm r` → `npm uninstall`
- `npm un` → `npm uninstall`
- `npm up` → `npm update`

### Shell aliases

Speed up your common npm tasks.

In your `.zshrc`/`.bashrc`:

```sh
alias ni='npm install'
alias nid='npm install --save-dev'
alias nig='npm install --global'
alias nt='npm test'
alias nit='npm install && npm test'
alias nk='npm link'
alias nr='npm run'
alias ns='npm start'
alias nf='npm cache clean && rm -rf node_modules && npm install'
alias nlg='npm list --global --depth=0'
```

### Don't add to package.json when installing

By default npm adds packages you install to the `dependencies` field in package.json (since v5). You can prevent this by specifying the `--no-save` flag. You can add a package to `devDependencies` with `--save-dev`/`-D`:

```
$ npm install --save-dev ava
```

### Run scripts

You can easily [run scripts](https://docs.npmjs.com/cli/run-script) using npm by adding them to the `"scripts"` field in package.json and run them with `npm run <script-name>`. Run `npm run` to see available scripts. Binaries of locally install packages are made available in the [PATH](https://en.wikipedia.org/wiki/PATH_(variable)), so you can run them by name.

```json
{
	"name": "awesome-package",
	"scripts": {
		"cat": "cat-names"
	},
	"dependencies": {
		"cat-names": "^1.0.0"
	}
}
```

```
$ npm run cat
Max
```

All package.json properties are [exposed](https://docs.npmjs.com/misc/scripts#packagejson-vars) as environment variables:

```json
{
	"name": "awesome-package",
	"scripts": {
		"name": "echo $npm_package_name"
	}
}
```

```
$ npm run name
awesome-package
```

#### Passing options to commands

You can pass options to the command you are using in your npm script by adding `-- --flag` like in the example below. The `--` [marks the end of options parsing](https://unix.stackexchange.com/questions/11376/what-does-double-dash-mean-also-known-as-bare-double-dash), so `npm run` will just ignore it and pass it to the command.

```json
{
	"name": "awesome-package",
	"scripts": {
		"xo": "xo",
		"xo:fix": "npm run xo -- --fix",
	}
}
```

*Adding the `-- --fix ` option is like executing `xo --fix`*.

#### Silent option

`npm run` has a `--silent` option which is especially useful when combining npm scripts.

Imagine you have a setup for linting your JavaScript files like the following:

```json
{
	"name": "awesome-package",
	"scripts": {
		"xo": "xo",
		"xo:fix": "npm run xo --silent -- --fix",
	}
}
```

*Using the `--silent` option reduces the output in the terminal. See [this comparison](https://twitter.com/mkuehnel/status/957965749473210369).*

### Lifecycle scripts

npm comes with predefined [lifecyle scripts](https://docs.npmjs.com/misc/scripts) which are excuted under specific conditions if they are defined in your package.json.

```json
{
	"name": "awesome-package",
	"scripts": {
		"prepublishOnly": "nsp check"
	},
	"devDependencies": {
		"nsp": "^3.0.0"
	}
}
```

This will be executed automatically before your npm package is published to the registry via `npm publish` to check for known vulnerabilties in your dependencies.

*Note: **prepublishOnly** is available since npm v4.0.0. See [npm docs](https://docs.npmjs.com/misc/scripts#deprecation-note).*

#### `npm start` and `npm test`

`npm start` and `npm test` are also lifecycle scripts but are not executed automatically.

```json
{
	"name": "awesome-package",
	"scripts": {
		"start": "node server.js",
		"test": "ava"
	},
	"devDependencies": {
		"ava": "^1.0.0"
	}
}
```

Therefore they can be executed simply with:

```console
$ npm test
$ npm start
```

#### `pre` and `post` scripts

These are special lifecycle scripts which can be used to run scripts automatically in sequence.

```json
{
	"name": "awesome-package",
	"scripts": {
		"pretest": "eslint .",
		"test": "ava"
	},
	"devDependencies": {
		"eslint": "^4.19.0",
		"ava": "^1.0.0"
	}
}
```

```console
$ npm test
```

This will lint your files before running your tests. The tests will not run if linting fails. Or more generally spoken: the following script won’t be executed if one of the scripts running in sequence exits with an exit code other than 0.

*Note: `pre` and `post` scripts can also be used for your custom npm scripts. So `npm run foo` will also run `prefoo` and `postfoo` if defined.*

### Run script with `npx`

`npm` [comes bundled](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) with `npx` (Since v5.2.0) — a tool to execute package binaries. Each command is executed either from the local `node_modules/.bin` directory, or from a central cache, installing any packages needed in order for `<command>` to run.

```json
{
	"name": "awesome-package",
	"dependencies": {
		"cat-names": "^1.0.0"
	}
}
```

If the binary is already installed, it will be executed from `node_modules/.bin`.

```
$ npx cat-names
Max
```

But if the binary is missing, it will be installed first.

```
$ npx dog-names
npx: installed 46 in 3.136s
Bentley
```

### Run commands with different Node.js versions

With `npx` (Comes bundled with npm v5.2.0 or newer) and the [`node-bin`](https://www.npmjs.com/package/node-bin) package, you can easily try out code in different Node.js versions without having to use a version manager like [`nvm`](http://nvm.sh), [`nave` ![GitHub Repo Stars](https://img.shields.io/github/stars/isaacs/nave) ![GitHub last commit](https://img.shields.io/github/last-commit/isaacs/nave)](https://github.com/isaacs/nave), or [`n` ![GitHub Repo Stars](https://img.shields.io/github/stars/tj/n) ![GitHub last commit](https://img.shields.io/github/last-commit/tj/n)](https://github.com/tj/n).

```
$ npx --package=node-bin@6.11.0 -- node --version
v6.11.0
```

### Link local packages

Sometimes it can be useful to have a local version of a package as a dependency. You can use `npm link` to link one local package into another. Run `npm link` in the package you want to use. This creates a global reference. Then go into your original package and run `npm link <package-name>` to link in the other package.

```
$ cd rainbow
$ npm link
$ cd ../unicorn
$ npm link rainbow
```

You can now use `rainbow` as a dependency in the `unicorn` package.

### Install a package from GitHub

npm supports using a shorthand for installing a package directly from a GitHub repo:

```
$ npm install sindresorhus/chalk
```

Let's target a specific commit as the main branch is a moving target:

```
$ npm install 'sindresorhus/chalk#51b8f32'
```

Specify either a commit SHA, branch, tag, or nothing.

You can also install Git dependencies with semver: *(Requires npm v5 or newer)*

```
$ npm install 'sindresorhus/chalk#semver:^2.0.0'
```

### Install a specific version of a package

```
$ npm install chalk@1.0.0
```


### List top-level installed packages and their version

```
$ npm ls --depth=0
```

### Command help

Get help docs for a command:

```
$ npm help <command>
```

Example:

```
$ npm help install
```

### Standalone version of a package

Quickly get a standalone version of a package that is browserified and usable in the browser.

```
https://wzrd.in/standalone/<package-name>[@<version>]
```

Examples:

- <https://wzrd.in/standalone/object-assign>
- <https://wzrd.in/standalone/object-assign@4.0.0>

Great for prototyping, but download the file or use Browserify yourself for production.

## FAQ

- [Check in node_modules vs. shrinkwrap](http://stackoverflow.com/questions/11459733/check-in-node-modules-vs-shrinkwrap)
- [What is the difference between Bower and npm?](http://stackoverflow.com/questions/18641899/what-is-the-difference-between-bower-and-npm)
- [What does `^` mean in package.json versioning?](http://stackoverflow.com/questions/22137778/what-does-mean-in-package-json-versioning)
- [Find the version of an installed npm package](http://stackoverflow.com/questions/10972176/find-the-version-of-an-installed-npm-package)
- [What's the difference between dependencies, devDependencies, and peerDependencies in package.json?](http://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies)

## Community

- [`#npm` on Freenode](http://webchat.freenode.net/?channels=npm)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/npm)
- [Reddit](https://www.reddit.com/r/npm)
- [Twitter](https://twitter.com/npmjs)
- [Blog](https://blog.npmjs.org)

## Documentation

- [Official](https://docs.npmjs.com)
- [Troubleshooting ![GitHub Repo Stars](https://img.shields.io/github/stars/npm/npm) ![GitHub last commit](https://img.shields.io/github/last-commit/npm/npm)](https://github.com/npm/npm/wiki/Troubleshooting)
- [Semantic versioning](https://docs.npmjs.com/getting-started/semantic-versioning)
- [Fixing npm permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions)
- [package.json](https://docs.npmjs.com/files/package.json)
- [npm run script](https://docs.npmjs.com/cli/run-script)
- [Stats API ![GitHub Repo Stars](https://img.shields.io/github/stars/npm/download-counts) ![GitHub last commit](https://img.shields.io/github/last-commit/npm/download-counts)](https://github.com/npm/download-counts)

## Support

- [npm.community](https://npm.community/c/support)
- [Twitter](https://twitter.com/npm_support)
- [Contact form](https://www.npmjs.com/support)

## Related

- [awesome-nodejs ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/awesome-nodejs) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome-nodejs)](https://github.com/sindresorhus/awesome-nodejs)
