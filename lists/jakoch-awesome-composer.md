## Awesome Composer [![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome) [![Build Status](https://api.travis-ci.org/jakoch/awesome-composer.svg?branch=master)](https://travis-ci.org/jakoch/awesome-composer) [![license](https://img.shields.io/github/license/jakoch/awesome-composer.svg?maxAge=2592000)]()

[<img src="https://raw.githubusercontent.com/jakoch/awesome-composer/master/logo-composer-transparent.png" align="right" width="150">](https://getcomposer.org/)

> A curated list of resources for Composer, Packagist, Satis, Plugins, Scripts, Videos, Tutorials.

You might also like [awesome-php ![GitHub Repo Stars](https://img.shields.io/github/stars/ziadoz/awesome-php) ![GitHub last commit](https://img.shields.io/github/last-commit/ziadoz/awesome-php)](https://github.com/ziadoz/awesome-php).

*Please read the [contribution guidelines](contributing.md) before contributing.*

## Composer

- [Official Website](https://getcomposer.org/)
- [Github ![GitHub Repo Stars](https://img.shields.io/github/stars/composer/composer) ![GitHub last commit](https://img.shields.io/github/last-commit/composer/composer)](https://github.com/composer/composer)
- [Issues ![GitHub Repo Stars](https://img.shields.io/github/stars/composer/composer) ![GitHub last commit](https://img.shields.io/github/last-commit/composer/composer)](https://github.com/composer/composer/issues)
- [Source ![GitHub Repo Stars](https://img.shields.io/github/stars/composer/composer) ![GitHub last commit](https://img.shields.io/github/last-commit/composer/composer)](https://github.com/composer/composer/tree/HEAD/src/Composer)
- [Documentation](https://getcomposer.org/doc/)
- [Getting Started Guide and Installation Instructions](https://getcomposer.org/doc/00-intro.md)
- [Find Packages on Packagist](https://packagist.org/)
- [CheatSheet](https://composer.json.jolicode.com/) - Overview of CLI commands and `composer.json` schema.
- [Composer Installers ![GitHub Repo Stars](https://img.shields.io/github/stars/composer/installers) ![GitHub last commit](https://img.shields.io/github/last-commit/composer/installers)](https://github.com/composer/installers) - Composer installers for multiple frameworks.

### Support

#### Stack Overflow

- You might use the following tags: `composer-php`, `packagist`, `satis` + `php`.
- [Ask a new question](http://stackoverflow.com/questions/ask?tags=composer-php+php)
- [Find questions tagged `composer-php`](http://stackoverflow.com/questions/tagged/composer-php)

#### IRC

- IRC channels are on `irc.freenode.org`: [#composer](https://webchat.freenode.net/#composer) for users and [#composer-dev](https://webchat.freenode.net/#composer-dev) for development.

---------------------------------------------------------

## Plugins

- [Documentation for Plugins](https://getcomposer.org/doc/articles/plugins.md) - This offical documentation is good starting point, when writing a Composer plugin.
- [Composer-Asset-Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/fxpio/composer-asset-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/fxpio/composer-asset-plugin)](https://github.com/fxpio/composer-asset-plugin) - A npm/Bower Dependencies Manager for Composer.
- [Composer-AWS ![GitHub Repo Stars](https://img.shields.io/github/stars/naderman/composer-aws) ![GitHub last commit](https://img.shields.io/github/last-commit/naderman/composer-aws)](https://github.com/naderman/composer-aws) - The plugin loads repository data and downloads packages from Amazon S3 (with authentication support for private repositories).
- [Composer-Composition ![GitHub Repo Stars](https://img.shields.io/github/stars/bamarni/composition) ![GitHub last commit](https://img.shields.io/github/last-commit/bamarni/composition)](https://github.com/bamarni/composition) - Provides an API, for checking your environment at runtime.
- [Composer-Suggest ![GitHub Repo Stars](https://img.shields.io/github/stars/nfreear/composer-suggest) ![GitHub last commit](https://img.shields.io/github/last-commit/nfreear/composer-suggest)](https://github.com/nfreear/composer-suggest) - Enables you to install a custom group of suggested packages, based on keyword patterns.
- [Composer-Versions-Check ![GitHub Repo Stars](https://img.shields.io/github/stars/Soullivaneuh/composer-versions-check) ![GitHub last commit](https://img.shields.io/github/last-commit/Soullivaneuh/composer-versions-check)](https://github.com/Soullivaneuh/composer-versions-check) - Shows outdated packages from last major versions after using the update command (showing "Latest is vX.Y.Z").
- [Composer-Changelogs ![GitHub Repo Stars](https://img.shields.io/github/stars/pyrech/composer-changelogs) ![GitHub last commit](https://img.shields.io/github/last-commit/pyrech/composer-changelogs)](https://github.com/pyrech/composer-changelogs) - Provides a summary of the updates with links to changelog/releasenote/tag. The output is ready to be pasted into the commit message when updating the composer.lock file.
- [Composer-Merge-Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/wikimedia/composer-merge-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/wikimedia/composer-merge-plugin)](https://github.com/wikimedia/composer-merge-plugin) - Merges multiple `composer.json` files at Composer runtime.
- [Composer-Bin-Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/bamarni/composer-bin-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/bamarni/composer-bin-plugin)](https://github.com/bamarni/composer-bin-plugin) - Adds support for managing dependencies for multiple packages in a single repository or isolate bin dependencies.
- [Composer-Inheritance-Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/theofidry/composer-inheritance-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/theofidry/composer-inheritance-plugin)](https://github.com/theofidry/composer-inheritance-plugin) - Opinionated version of Wikimedia composer-merge-plugin to work in pair with Bamarni composer-bin-plugin.
- [Composer-MonoRepo-Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/beberlei/composer-monorepo-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/beberlei/composer-monorepo-plugin)](https://github.com/beberlei/composer-monorepo-plugin) - The plugin helps to manage dependencies for multiple packages in a single repository.
- [Composer-Patches-Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/netresearch/composer-patches-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/netresearch/composer-patches-plugin)](https://github.com/netresearch/composer-patches-plugin) - Enables you to provide patches for any package from any package. When the dependency is fetched, the patch is applied on top.
- [Composer-Patches ![GitHub Repo Stars](https://img.shields.io/github/stars/cweagans/composer-patches) ![GitHub last commit](https://img.shields.io/github/last-commit/cweagans/composer-patches)](https://github.com/cweagans/composer-patches) - The plugin applies a patch from a local or remote file to any required package.
- [Composer-Patches ![GitHub Repo Stars](https://img.shields.io/github/stars/vaimo/composer-patches) ![GitHub last commit](https://img.shields.io/github/last-commit/vaimo/composer-patches)](https://github.com/vaimo/composer-patches) - Applies a patch from a local or remote file to any package that is part of a given composer project.
- [Composer-Patchset ![GitHub Repo Stars](https://img.shields.io/github/stars/mageops/php-composer-plugin-patchset) ![GitHub last commit](https://img.shields.io/github/last-commit/mageops/php-composer-plugin-patchset)](https://github.com/mageops/php-composer-plugin-patchset) - Automatically fetch, update and apply patches to any composer package with a twist - store the patchset as a composer package itself.
- [Composer-Plugin-QA ![GitHub Repo Stars](https://img.shields.io/github/stars/Webysther/composer-plugin-qa) ![GitHub last commit](https://img.shields.io/github/last-commit/Webysther/composer-plugin-qa)](https://github.com/Webysther/composer-plugin-qa) - Comprehensive Plugin for composer to execute PHP Quality assurance Tools.
- [Composer-Cleanup-Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/barryvdh/composer-cleanup-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/barryvdh/composer-cleanup-plugin)](https://github.com/barryvdh/composer-cleanup-plugin) - Removes tests & documentation folders from the vendor dir.
- [Composer-Cleaner ![GitHub Repo Stars](https://img.shields.io/github/stars/dg/composer-cleaner) ![GitHub last commit](https://img.shields.io/github/last-commit/dg/composer-cleaner)](https://github.com/dg/composer-cleaner) - The tool removes unnecessary files and directories from the vendor directory.
- [Composer-Ignore-Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/lichunqiang/composer-ignore-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/lichunqiang/composer-ignore-plugin)](https://github.com/lichunqiang/composer-ignore-plugin) - Enables you to remove files and folders from the vendor folder (to make a cleaner and smaller deployment to production). It's an alternative to `.gitattributes`.
- [Composer-Vendor-Cleaner ![GitHub Repo Stars](https://img.shields.io/github/stars/liborm85/composer-vendor-cleaner) ![GitHub last commit](https://img.shields.io/github/last-commit/liborm85/composer-vendor-cleaner)](https://github.com/liborm85/composer-vendor-cleaner) - Plugin removes unnecessary development files and directories from `vendor` directory by glob pattern syntax.
- [Composer-Skrub ![GitHub Repo Stars](https://img.shields.io/github/stars/ssx/skrub) ![GitHub last commit](https://img.shields.io/github/last-commit/ssx/skrub)](https://github.com/ssx/skrub) - The plugin helps to remove junk from Composer installations and trim build sizes.
- [Drupal Vendor Hardening Composer Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/drupal/core-vendor-hardening) ![GitHub last commit](https://img.shields.io/github/last-commit/drupal/core-vendor-hardening)](https://github.com/drupal/core-vendor-hardening) - Removes extraneous directories from the project's vendor directory & adds .htaccess and web.config files to the root of the project's vendor directory.
- [Composer-Shared-Package-Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/Letudiant/composer-shared-package-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/Letudiant/composer-shared-package-plugin)](https://github.com/Letudiant/composer-shared-package-plugin) - Allows you to share selected packages between your projects by creating symlinks.
- [Composer-Symlinker ![GitHub Repo Stars](https://img.shields.io/github/stars/e-picas/composer-symlinker) ![GitHub last commit](https://img.shields.io/github/last-commit/e-picas/composer-symlinker)](https://github.com/e-picas/composer-symlinker) - Enables you to load packages from different directories (instead of loading them from /vendor).
- [Prestissimo ![GitHub Repo Stars](https://img.shields.io/github/stars/hirak/prestissimo) ![GitHub last commit](https://img.shields.io/github/last-commit/hirak/prestissimo)](https://github.com/hirak/prestissimo) - A parallel downloader using `phpext_curl`.
- [Composer-Curl-Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/ngyuki/composer-curl-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/ngyuki/composer-curl-plugin)](https://github.com/ngyuki/composer-curl-plugin) - The plugin uses `phpext_curl` for downloading packages.
- [Composer-Custom-Directory-Installer ![GitHub Repo Stars](https://img.shields.io/github/stars/mnsami/composer-custom-directory-installer) ![GitHub last commit](https://img.shields.io/github/last-commit/mnsami/composer-custom-directory-installer)](https://github.com/mnsami/composer-custom-directory-installer) - A composer plugin, to install different types of composer packages in custom directories outside the default composer installation path (vendor folder).
- [Composer-Dependency-Analyzer](https://packagist.org/packages/jms/composer-deps-analyzer) - Allows you to build a dependency graph for an installed composer project.
- [Graph-Composer ![GitHub Repo Stars](https://img.shields.io/github/stars/clue/graph-composer) ![GitHub last commit](https://img.shields.io/github/last-commit/clue/graph-composer)](https://github.com/clue/graph-composer) - Provides a graph visualization for your project's `composer.json` and its dependencies.
- [PackageVersions ![GitHub Repo Stars](https://img.shields.io/github/stars/Ocramius/PackageVersions) ![GitHub last commit](https://img.shields.io/github/last-commit/Ocramius/PackageVersions)](https://github.com/Ocramius/PackageVersions) - Provides a very quick and easy access to installed composer dependency versions.
- [PackageVersions Deprecated ![GitHub Repo Stars](https://img.shields.io/github/stars/composer/package-versions-deprecated) ![GitHub last commit](https://img.shields.io/github/last-commit/composer/package-versions-deprecated)](https://github.com/composer/package-versions-deprecated) - Is a fork of Ocramius/PackageVersions providing compatibility with Composer 1 and 2 on PHP 7+.
- [Composer-Locator ![GitHub Repo Stars](https://img.shields.io/github/stars/mindplay-dk/composer-locator) ![GitHub last commit](https://img.shields.io/github/last-commit/mindplay-dk/composer-locator)](https://github.com/mindplay-dk/composer-locator) - Provides a means of locating the installation path for a given Composer package name.
- [PackageInfo ![GitHub Repo Stars](https://img.shields.io/github/stars/ThaDafinser/PackageInfo) ![GitHub last commit](https://img.shields.io/github/last-commit/ThaDafinser/PackageInfo)](https://github.com/ThaDafinser/PackageInfo) - Enables you to retrieve all package informations (like version, tag, release date, description).
- [Composer-Git-Hooks ![GitHub Repo Stars](https://img.shields.io/github/stars/BrainMaestro/composer-git-hooks) ![GitHub last commit](https://img.shields.io/github/last-commit/BrainMaestro/composer-git-hooks)](https://github.com/BrainMaestro/composer-git-hooks) - A library for easily managing git hooks in your composer config.
- [Symfony-Flex ![GitHub Repo Stars](https://img.shields.io/github/stars/symfony/flex) ![GitHub last commit](https://img.shields.io/github/last-commit/symfony/flex)](https://github.com/symfony/flex) - Provides [recipe-based ![GitHub Repo Stars](https://img.shields.io/github/stars/symfony/recipes) ![GitHub last commit](https://img.shields.io/github/last-commit/symfony/recipes)](https://github.com/symfony/recipes) installation and configuration management for Symfony packages.
- [Narrowspark-Automatic ![GitHub Repo Stars](https://img.shields.io/github/stars/narrowspark/automatic) ![GitHub last commit](https://img.shields.io/github/last-commit/narrowspark/automatic)](https://github.com/narrowspark/automatic) - Automates the most common tasks of applications, boost package downloads, adds a composer security audit and more.
- [PHPCodeSniffer-Composer-Installer ![GitHub Repo Stars](https://img.shields.io/github/stars/DealerDirect/phpcodesniffer-composer-installer) ![GitHub last commit](https://img.shields.io/github/last-commit/DealerDirect/phpcodesniffer-composer-installer)](https://github.com/DealerDirect/phpcodesniffer-composer-installer) - The plugin enables you to install [PHP_CodeSniffer ![GitHub Repo Stars](https://img.shields.io/github/stars/squizlabs/PHP_CodeSniffer) ![GitHub last commit](https://img.shields.io/github/last-commit/squizlabs/PHP_CodeSniffer)](https://github.com/squizlabs/PHP_CodeSniffer) coding standards (rulesets).
- [Composer-Warmup ![GitHub Repo Stars](https://img.shields.io/github/stars/jderusse/composer-warmup) ![GitHub last commit](https://img.shields.io/github/last-commit/jderusse/composer-warmup)](https://github.com/jderusse/composer-warmup) - The plugin adds the command `warmup-opcode` to Composer, which triggers the compilation of all PHP files discovered in your project into the Opcache.
- [Foxy ![GitHub Repo Stars](https://img.shields.io/github/stars/fxpio/foxy) ![GitHub last commit](https://img.shields.io/github/last-commit/fxpio/foxy)](https://github.com/fxpio/foxy) - Composer plugin that executes npm/yarn packages installation operations, when composer package is installed or updated.
- [NodeJS-Installer ![GitHub Repo Stars](https://img.shields.io/github/stars/thecodingmachine/nodejs-installer) ![GitHub last commit](https://img.shields.io/github/last-commit/thecodingmachine/nodejs-installer)](https://github.com/thecodingmachine/nodejs-installer) - Installer for NodeJS and npm.
- [Node-Composer ![GitHub Repo Stars](https://img.shields.io/github/stars/mariusbuescher/node-composer) ![GitHub last commit](https://img.shields.io/github/last-commit/mariusbuescher/node-composer)](https://github.com/mariusbuescher/node-composer) - Installer for NodeJS, npm and yarn.
- [Imposter-Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/typisttech/imposter-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/typisttech/imposter-plugin)](https://github.com/typisttech/imposter-plugin) - Wrapping all composer vendor packages inside your own namespace. Intended for WordPress plugins.
- [Composer Preload ![GitHub Repo Stars](https://img.shields.io/github/stars/Ayesh/Composer-Preload) ![GitHub last commit](https://img.shields.io/github/last-commit/Ayesh/Composer-Preload)](https://github.com/Ayesh/Composer-Preload) - The plugin generates a `vendor/preload.php` file to warm up the Opcache.
- [PHP Inc ![GitHub Repo Stars](https://img.shields.io/github/stars/krakphp/php-inc) ![GitHub last commit](https://img.shields.io/github/last-commit/krakphp/php-inc)](https://github.com/krakphp/php-inc) - Automatically includes files for autoload and autoload-dev to facilitate using functions and grouped definitions within composer loaded applications.
- [Composer Registry Manager ![GitHub Repo Stars](https://img.shields.io/github/stars/slince/composer-registry-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/slince/composer-registry-manager)](https://github.com/slince/composer-registry-manager) - Enables you to switch between different composer repositories.
- [Production-Dependencies-Guard ![GitHub Repo Stars](https://img.shields.io/github/stars/kalessil/production-dependencies-guard) ![GitHub last commit](https://img.shields.io/github/last-commit/kalessil/production-dependencies-guard)](https://github.com/kalessil/production-dependencies-guard) - Prevents development packages from being added into require and getting into production environment.
- [Composer-Plugin-Exclude-Files ![GitHub Repo Stars](https://img.shields.io/github/stars/mcaskill/composer-plugin-exclude-files) ![GitHub last commit](https://img.shields.io/github/last-commit/mcaskill/composer-plugin-exclude-files)](https://github.com/mcaskill/composer-plugin-exclude-files) - A plugin for excluding files required by packages using the 'files' autoloading mechanism.
- [Composer-Downloads-Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/civicrm/composer-downloads-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/civicrm/composer-downloads-plugin)](https://github.com/civicrm/composer-downloads-plugin) - Lightweight mechanism to download external resources (ZIP/TAR files) with only a `url` and `path`.
- [Private-Composer-Installer ![GitHub Repo Stars](https://img.shields.io/github/stars/ffraenz/private-composer-installer) ![GitHub last commit](https://img.shields.io/github/last-commit/ffraenz/private-composer-installer)](https://github.com/ffraenz/private-composer-installer) - Install helper outsourcing sensitive keys from the package URL into environment variables.
- [CycloneDX-PHP-Composer ![GitHub Repo Stars](https://img.shields.io/github/stars/CycloneDX/cyclonedx-php-composer) ![GitHub last commit](https://img.shields.io/github/last-commit/CycloneDX/cyclonedx-php-composer)](https://github.com/CycloneDX/cyclonedx-php-composer) - Creates a [CycloneDX](https://cyclonedx.org/) "Software Bill-of-Materials" (SBOM) for the dependencies of a project. The SBOM enables dependency monitoring and risk analysis by [OWASP DependencyTrack](https://dependencytrack.org/).
- [Composer-Compile-Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/civicrm/composer-compile-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/civicrm/composer-compile-plugin)](https://github.com/civicrm/composer-compile-plugin) - Allow PHP libraries to define simple, freeform compilation tasks. Support post-install hooks in any package.
- [Composer-Link ![GitHub Repo Stars](https://img.shields.io/github/stars/SanderSander/composer-link) ![GitHub last commit](https://img.shields.io/github/last-commit/SanderSander/composer-link)](https://github.com/SanderSander/composer-link) - Adds the ability to link local packages for development.
- [Composer-REPL ![GitHub Repo Stars](https://img.shields.io/github/stars/ramsey/composer-repl) ![GitHub last commit](https://img.shields.io/github/last-commit/ramsey/composer-repl)](https://github.com/ramsey/composer-repl) - The plugin provides the `composer repl` command, which gives you a PHP language shell (read-eval-print loop).
- [Composer-Diff ![GitHub Repo Stars](https://img.shields.io/github/stars/IonBazan/composer-diff) ![GitHub last commit](https://img.shields.io/github/last-commit/IonBazan/composer-diff)](https://github.com/IonBazan/composer-diff) - Compares `composer.lock` changes and generates a Markdown report for usage in a pull request description.
- [Composer-Velocita ![GitHub Repo Stars](https://img.shields.io/github/stars/isaaceindhoven/composer-velocita) ![GitHub last commit](https://img.shields.io/github/last-commit/isaaceindhoven/composer-velocita)](https://github.com/isaaceindhoven/composer-velocita) - Fast and reliable Composer package downloads using [Velocita ![GitHub Repo Stars](https://img.shields.io/github/stars/isaaceindhoven/velocita-proxy) ![GitHub last commit](https://img.shields.io/github/last-commit/isaaceindhoven/velocita-proxy)](https://github.com/isaaceindhoven/velocita-proxy): a caching reverse proxy that does not require you to modify your projects.

## Tools

- [Composer SemVer Checker](https://semver.mwl.be) - Enables you identify constraint to version resolution issues, by doing a semantic version check for Packagist hosted packages.
- [Composer-Yaml ![GitHub Repo Stars](https://img.shields.io/github/stars/igorw/composer-yaml) ![GitHub last commit](https://img.shields.io/github/last-commit/igorw/composer-yaml)](https://github.com/igorw/composer-yaml) - This tool converts `composer.yml` to `composer.json`.
- [Studio ![GitHub Repo Stars](https://img.shields.io/github/stars/franzliedke/studio) ![GitHub last commit](https://img.shields.io/github/last-commit/franzliedke/studio)](https://github.com/franzliedke/studio) - A workbench for developing Composer packages. Its an alternative to editing dependencies in the vendor folder or using [PathRepositories](https://getcomposer.org/doc/05-repositories.md#path) to load a local clone of your dependency into your project.
- [OctoLinker Browser Extension ![GitHub Repo Stars](https://img.shields.io/github/stars/OctoLinker/OctoLinker) ![GitHub last commit](https://img.shields.io/github/last-commit/OctoLinker/OctoLinker)](https://github.com/OctoLinker/OctoLinker) - Enables you to navigate Composer/NPM dependencies on Github.
- [ComposerRequireChecker ![GitHub Repo Stars](https://img.shields.io/github/stars/maglnet/ComposerRequireChecker) ![GitHub last commit](https://img.shields.io/github/last-commit/maglnet/ComposerRequireChecker)](https://github.com/maglnet/ComposerRequireChecker) - A CLI tool to analyze dependencies and verify that no unknown imported symbols are used in the sources of a package.
- [Composer-Unused ![GitHub Repo Stars](https://img.shields.io/github/stars/composer-unused/composer-unused) ![GitHub last commit](https://img.shields.io/github/last-commit/composer-unused/composer-unused)](https://github.com/composer-unused/composer-unused) - A CLI tool, which scans your code and shows unused Composer dependencies.
- [Composer-Normalize ![GitHub Repo Stars](https://img.shields.io/github/stars/ergebnis/composer-normalize) ![GitHub last commit](https://img.shields.io/github/last-commit/ergebnis/composer-normalize)](https://github.com/ergebnis/composer-normalize) - The plugin helps to keep your `composer.json` file(s) consistent by restructuring and sorting entries (normalizing).
- [Composer-Service ![GitHub Repo Stars](https://img.shields.io/github/stars/pborreli/composer-service) ![GitHub last commit](https://img.shields.io/github/last-commit/pborreli/composer-service)](https://github.com/pborreli/composer-service) - Enables you to run Composer as a service on a remote server.
- [Composer PreferLowest Checker ![GitHub Repo Stars](https://img.shields.io/github/stars/dereuromark/composer-prefer-lowest) ![GitHub last commit](https://img.shields.io/github/last-commit/dereuromark/composer-prefer-lowest)](https://github.com/dereuromark/composer-prefer-lowest) - Strictly compare the specified minimum versions of your composer.json with the ones actually used by the prefer-lowest composer update command option.
- [Bramus/Composer-Autocomplete ![GitHub Repo Stars](https://img.shields.io/github/stars/bramus/composer-autocomplete) ![GitHub last commit](https://img.shields.io/github/last-commit/bramus/composer-autocomplete)](https://github.com/bramus/composer-autocomplete) - A Bash/Shell autocompletion script for Composer.
- [Composer/Xdebug-Handler ![GitHub Repo Stars](https://img.shields.io/github/stars/composer/xdebug-handler) ![GitHub last commit](https://img.shields.io/github/last-commit/composer/xdebug-handler)](https://github.com/composer/xdebug-handler) - Helps you to restart a CLI process without loading the xdebug extension.
- [Composer Semver Range Checker](https://gitlab.com/MattyRad/composer.guru) - A tool to help check the satisfiable ranges of a composer constraint.

## Scripts

- [ParameterHandler ![GitHub Repo Stars](https://img.shields.io/github/stars/Incenteev/ParameterHandler) ![GitHub last commit](https://img.shields.io/github/last-commit/Incenteev/ParameterHandler)](https://github.com/Incenteev/ParameterHandler) - Allows you to manage your ignored parameters when running a composer install or update.
- [Tooly ![GitHub Repo Stars](https://img.shields.io/github/stars/tommy-muehle/tooly-composer-script) ![GitHub last commit](https://img.shields.io/github/last-commit/tommy-muehle/tooly-composer-script)](https://github.com/tommy-muehle/tooly-composer-script) - Manage needed PHAR files in your project `composer.json`. Every PHAR file will be saved in the composer binary directory. Optional with GPG verification for every PHAR.
- [Melody ![GitHub Repo Stars](https://img.shields.io/github/stars/sensiolabs/melody) ![GitHub last commit](https://img.shields.io/github/last-commit/sensiolabs/melody)](https://github.com/sensiolabs/melody) - One-file composer scripts.
- [Composer-Travis-Lint ![GitHub Repo Stars](https://img.shields.io/github/stars/raphaelstolt/composer-travis-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/raphaelstolt/composer-travis-lint)](https://github.com/raphaelstolt/composer-travis-lint) - Allows you to lint the Travis CI configuration file (`.travis.yml`).
- [Composer-Multitest ![GitHub Repo Stars](https://img.shields.io/github/stars/raphaelstolt/composer-multitest) ![GitHub last commit](https://img.shields.io/github/last-commit/raphaelstolt/composer-multitest)](https://github.com/raphaelstolt/composer-multitest) - Enables you to run a Composer script against multiple, locally installed PHP versions, which are managed by PHPBrew or phpenv.
- [ScriptsDev ![GitHub Repo Stars](https://img.shields.io/github/stars/neronmoon/scriptsdev) ![GitHub last commit](https://img.shields.io/github/last-commit/neronmoon/scriptsdev)](https://github.com/neronmoon/scriptsdev) - Enables you to use a `scripts-dev` section, which triggers scripts only in dev mode.
- [PhantomJS-Installer ![GitHub Repo Stars](https://img.shields.io/github/stars/jakoch/phantomjs-installer) ![GitHub last commit](https://img.shields.io/github/last-commit/jakoch/phantomjs-installer)](https://github.com/jakoch/phantomjs-installer) - A Composer Package which installs the PhantomJS binary (Linux, Windows, Mac) into /bin of your project.
- [Composer-Vendor-Cleanup ![GitHub Repo Stars](https://img.shields.io/github/stars/0xch/composer-vendor-cleanup) ![GitHub last commit](https://img.shields.io/github/last-commit/0xch/composer-vendor-cleanup)](https://github.com/0xch/composer-vendor-cleanup) - A script which removes whitelisted unnecessary files (like tests/docs etc.) from the vendor directory.
- [Composer-Substitution-Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/villfa/composer-substitution-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/villfa/composer-substitution-plugin)](https://github.com/villfa/composer-substitution-plugin) - A Composer plugin replacing placeholders in the `scripts` section by dynamic values.

## Services

- [Packanalyst](https://packanalyst.com/) - Packanalyst is a service that lets you browse in any PHP class / interface / trait defined in Packagist.
- [Dependabot](https://dependabot.com/) - Dependabot is a dependency update service. It monitors and updates your dependencies by sending a pull-request. The service is free for public repos and personal account repos.

---------------------------------------------------------

## Tutorials

- [A beginners guide to Composer](https://scotch.io/tutorials/a-beginners-guide-to-composer)
- [A short & simple Composer tutorial](https://www.dev-metal.com/composer-tutorial/)
- [Easy package management with Composer](https://code.tutsplus.com/tutorials/easy-package-management-with-composer--net-25530)
- [PHP Dependency Management with Composer](https://www.sitepoint.com/re-introducing-composer/)
- [Composer Primer](https://daylerees.com/composer-primer/)
- [PHP Composer Magento Tutorial by Alan Storm](https://alanstorm.com/php_composer_magento_tutorial/ )
- [Creating and Using Composer Packages](https://hub.packtpub.com/creating-and-using-composer-packages/)

## Blogs

- [Jordi Boggiano (seldaek)](https://seld.be/)
- [Nils Adermann (naderman)](https://naderman.de/)
- [Composer Stability Flags](https://igor.io/2013/02/07/composer-stability-flags.html)
- [Composer Versioning](https://igor.io/2013/01/07/composer-versioning.html)
- [The long journey of making PHP’s Composer memory-efficient and fast (toflar)](https://medium.com/@yanick.witschi/the-long-journey-of-making-phps-composer-memory-efficient-and-fast-63d12944aaa8)

## Videos

- [Composer Best Practices 2018 - Nils Adermann @ scotphp18](https://www.youtube.com/watch?v=eQkFjMfyqFY)
- [Composer Best Practices 2018 - Nils Adermann @ phpday 2018](https://www.youtube.com/watch?v=EpvihKaQyLs)
- [Managing dependencies is more than running "composer update" -  Nils Adermann @ phpsrb17](https://www.youtube.com/watch?v=QL6w8H2eHQE)
- [Composer Best Practices — Jordi Boggiano @ php[tek] 2015](https://www.youtube.com/watch?v=uNlYpSTiAcA)
- [Wonderful World of Composer](https://symfonycasts.com/screencast/composer)
- [PHP Composer Quickstart](https://www.youtube.com/watch?v=Ejr4Xqs9V2I)
- [How Composer helped shape the new way of writing PHP - Nils Adermann @ Drupal Camp Frankfurt](https://www.youtube.com/watch?v=C2jfLM-Egvg)
- [Composer Package Management - Nils Adermann @ T3CON12DE](https://www.youtube.com/watch?v=P4Qnp90TG0g)
- [Composer 2 - Jordi Boggiano @ Symfony UK usergroup 2020](https://www.youtube.com/watch?v=BAgwWhRo82w)
- [Lessons learned building the Composer internals - Jordi Boggiano @ CODEiD Odessa PHP Conference 2017](https://www.youtube.com/watch?v=pjvbn6TBZqM) 

## Slides

- Slides by Nils Adermann
  - Source: https://naderman.de/slippy/src/
  - [PHP Reinvented - How Composer helped shape the new way of writing PHP](https://naderman.de/slippy/src/?file=2014-04-13-PHP-Reinvented.html)
  - [Composer Update](https://naderman.de/slippy/src/?file=2015-02-03-Composer-Update.html)
  - [Dependency Management with Composer PHP Reinvented](https://naderman.de/slippy/src/?file=2015-02-01-Dependency-Management-with-Composer-PHP-Reinvented.html)
  - [Managing dependencies is
more than running
"composer update"](https://naderman.de/slippy/slides/2017-06-30-DPC-Dependency-Management-is-more-than-composer-update.pdf)
  - [Composer
Best Practices @ T3DD17](https://naderman.de/slippy/slides/2017-07-13-T3DD17-Composer-Best-Practices.pdf)
  - [Gain Control over your
Dependencies with
Private Packagist](https://naderman.de/slippy/slides/2017-07-14-T3DD17-Gain-control-over-your-dependencies-with-private-packagist.pdf)
  - [Composer.lock demystified](https://naderman.de/slippy/slides/2018-01-26-composer-lock-demystified.pdf)
  - [Compoer In-Depth @ Contao Konferenz 2018](https://naderman.de/slippy/slides/2018-06-08-Contao-Konferenz-2018-Composer-In-Depth.pdf)
  - [Composer Best Practices 2018](https://naderman.de/slippy/slides/2018-06-27-Composer-Best-Practices-2018.pdf)
  - [Developing and Deploying Magento with Composer Best Practices](https://naderman.de/slippy/slides/2018-06-18-Developing-and-Deploying-Magento-with-Composer-Best-Practices.pdf)
  - [Composer Platform Config (check-platform-reqs) @ SymfonCon 2018](https://naderman.de/slippy/slides/2018-12-07-SymfonCon-Composer-Platform-Config.pdf)
- Slides by Jordi Boggiano
  - Source: http://slides.seld.be/
  - [Dependency Management with Composer (2013)](http://slides.seld.be/?file=2013-10-04+Dependency+Management+with+Composer.html)
  - [In Depth with Composer (2013)](http://slides.seld.be/?file=2013-10-05+In-Depth+with+Composer.html)
  - [Composer Best Practices (2015)](http://slides.seld.be/?file=2015-07-25+Composer+Best+Practices.html)
  - [Introduction to Composer (2015)](http://slides.seld.be/?file=2015-06-30+Introduction+to+Composer.html)
  - [Composer in 2016](http://slides.seld.be/?file=2016-07-22+Composer+in+2016.html)
  - [Lessons Learned Building the Composer Internals (2018)](http://slides.seld.be/?file=2018-04-20+Lessons+Learned+Building+the+Composer+Internals.html)

---------------------------------------------------------

## Packagist

[Packagist](https://packagist.org) is the PHP Package Repository.

### Setup a Packagist Mirror

- [Packagist Mirror ![GitHub Repo Stars](https://img.shields.io/github/stars/Webysther/packagist-mirror) ![GitHub last commit](https://img.shields.io/github/last-commit/Webysther/packagist-mirror)](https://github.com/Webysther/packagist-mirror) - This script helps to setup a packagist mirror. It is the maintained and stable version of [Packagist Crawler ![GitHub Repo Stars](https://img.shields.io/github/stars/hirak/packagist-crawler) ![GitHub last commit](https://img.shields.io/github/last-commit/hirak/packagist-crawler)](https://github.com/hirak/packagist-crawler).
- [Docker Image ![GitHub Repo Stars](https://img.shields.io/github/stars/Webysther/packagist-mirror-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/Webysther/packagist-mirror-docker)](https://github.com/Webysther/packagist-mirror-docker) - This Docker image helps to create a customized packagist mirror.
- [Packagist Mirror from Indonesia ![GitHub Repo Stars](https://img.shields.io/github/stars/IndraGunawan/packagist-mirror) ![GitHub last commit](https://img.shields.io/github/last-commit/IndraGunawan/packagist-mirror)](https://github.com/IndraGunawan/packagist-mirror) - Another implementation for creating a packagist mirror.

### Packagist Mirrors

About metadata mirrors: https://packagist.org/mirrors

- North America
  - Canada - [packagist.org](https://packagist.org) *Main mirror*
- South America
  - Brazil - [packagist.com.br](https://packagist.com.br)
- Africa
  - South Africa - [packagist.co.za](packagist.co.za)
- Asia
  - China - [php.cnpkg.org](https://php.cnpkg.org), [https://pkg.phpcomposer.com/](https://pkg.phpcomposer.com/), [https://mirrors.aliyun.com/composer/](https://mirrors.aliyun.com/composer/)
  - India - [https://packagist.in/](https://packagist.in/)
  - Indonesia - [packagist.phpindonesia.id](https://packagist.phpindonesia.id)
  - Japan - [packagist.jp](https://packagist.jp)

## Composer Repositories

### Registry Manager
- https://github.com/slince/composer-registry-manager - The plugin helps you to switch between different composer repositories.

### Private repositories
- [fxpio/tug ![GitHub Repo Stars](https://img.shields.io/github/stars/fxpio/tug) ![GitHub last commit](https://img.shields.io/github/last-commit/fxpio/tug)](https://github.com/fxpio/tug) - Enables you to host a private Composer registry on AWS Serverless serving your private PHP packages,  which are hosted on Github or Gitlab services.

### Private Packagist
- [Private Packagist Cloud](https://packagist.com) - A Composer Repository as a Service for private packages and to mirror packages from other repositories.
- [Private Packagist Enterprise](https://packagist.com) - On-premise self-hosted version of Private Packagist.
- [Private Packagist API Client ![GitHub Repo Stars](https://img.shields.io/github/stars/packagist/private-packagist-api-client) ![GitHub last commit](https://img.shields.io/github/last-commit/packagist/private-packagist-api-client)](https://github.com/packagist/private-packagist-api-client) - A PHP client for the Private Packagist API. The client handles authentication, signature generation and access to all endpoints.

### Repman

- [repman.io](https://repman.io) & [repman-io/repman ![GitHub Repo Stars](https://img.shields.io/github/stars/repman-io/repman) ![GitHub last commit](https://img.shields.io/github/last-commit/repman-io/repman)](https://github.com/repman-io/repman) - A Private PHP Package Repository Manager & Packagist Proxy.
- [repman-io/composer-plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/repman-io/composer-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/repman-io/composer-plugin)](https://github.com/repman-io/composer-plugin) - This plugin enables downloading via Repman by adding a distribution mirror URL for all your dependencies (without need to update the `composer.lock` file).

## Packagist-compatible repositories

- [WordPress Packagist](https://wpackagist.org/) - Mirrors the WordPress plugin and theme directories as a Composer repository.
- [Asset Packagist](https://asset-packagist.org/) - Enables installation of Bower and NPM packages as native Composer packages.
- [Firegento](https://packages.firegento.com/) - A Composer Repository providing Magento Modules.
- [Drupal Packagist](https://www.drupal.org/node/2822344) - Composer repositories for Drupal 7 and 8 core, modules, and themes.
- [Satis Server ![GitHub Repo Stars](https://img.shields.io/github/stars/lukaszlach/satis-server) ![GitHub last commit](https://img.shields.io/github/last-commit/lukaszlach/satis-server)](https://github.com/lukaszlach/satis-server) - This docker container provides a Satis Server and enables you to run a private, self-hosted Composer repository with support for Git, Mercurial, and Subversion, HTTP API, HTTPs support, webhook handler and scheduled builds.
- [Cloudsmith](https://cloudsmith.com/) - A fully managed package management SaaS with PHP/Composer support (and many others).
- [Release Belt ![GitHub Repo Stars](https://img.shields.io/github/stars/Rarst/release-belt) ![GitHub last commit](https://img.shields.io/github/last-commit/Rarst/release-belt)](https://github.com/Rarst/release-belt) - Self–hosted Composer repository implementation to quickly integrate ZIP files of third party non–Composer releases.
- [Packeton ![GitHub Repo Stars](https://img.shields.io/github/stars/vtsykun/packeton) ![GitHub last commit](https://img.shields.io/github/last-commit/vtsykun/packeton)](https://github.com/vtsykun/packeton) - Private self-hosted Composer repository for vendors. Fork of packagist with adding support for authorization, customer users, groups, webhooks.

### Satis

- [Gitlab-Composer ![GitHub Repo Stars](https://img.shields.io/github/stars/wemakecustom/gitlab-composer) ![GitHub last commit](https://img.shields.io/github/last-commit/wemakecustom/gitlab-composer)](https://github.com/wemakecustom/gitlab-composer) - This is a branch/tag indexer for Gitlab repositories.
- [Satisfy ![GitHub Repo Stars](https://img.shields.io/github/stars/ludofleury/satisfy) ![GitHub last commit](https://img.shields.io/github/last-commit/ludofleury/satisfy)](https://github.com/ludofleury/satisfy) - Satis composer repository manager with a Web UI.
- [Satis Control Panel ![GitHub Repo Stars](https://img.shields.io/github/stars/realshadow/satis-control-panel) ![GitHub last commit](https://img.shields.io/github/last-commit/realshadow/satis-control-panel)](https://github.com/realshadow/satis-control-panel) - A simple web UI for managing your Satis Repository with optional CI integration.
- [Satis Go ![GitHub Repo Stars](https://img.shields.io/github/stars/benschw/satis-go) ![GitHub last commit](https://img.shields.io/github/last-commit/benschw/satis-go)](https://github.com/benschw/satis-go) - A web server for managing Satis configuration and hosting the generated Composer repository.

### Toran Proxy

- [ToranProxy](https://toranproxy.com/) (deprecated) - In addition to providing a composer repository ToranProxy acts as a proxy server for Packagist and GitHub.

---------------------------------------------------------

## License

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Jens A. Koch](https://github.com/jakoch) has waived all copyright and related or neighboring rights to this work.
