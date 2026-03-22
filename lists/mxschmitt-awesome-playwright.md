# Awesome Playwright [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of awesome tools, utils and projects using Playwright

[Playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/playwright) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/playwright)](https://github.com/microsoft/playwright) is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. Available for Node.js, Python, .NET and Java.

## Contents

- [Integrations](#integrations)
- [Language Support](#language-support)
- [Utils](#utils)
- [Reporters](#reporters)
- [Showcases](#showcases)
- [Guides](#guides)
- [Contribute](#contribute)

## Integrations

- [@appetize/Playwright](https://docs.appetize.io/testing) - Mobile tests for web or native apps on [Appetize](https://www.appetize.io)'s virtual devices using Playwright Test Runner.
- [appwright](https://www.npmjs.com/package/appwright) - Mobile tests using Appium with Playwright Test Runner.
- [artillery-engine-playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/artilleryio/artillery) ![GitHub last commit](https://img.shields.io/github/last-commit/artilleryio/artillery)](https://github.com/artilleryio/artillery/tree/main/packages/artillery-engine-playwright) - Load testing with Playwright.
- [@axe-core/Playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/dequelabs/axe-core-npm) ![GitHub last commit](https://img.shields.io/github/last-commit/dequelabs/axe-core-npm)](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md) - Official Axe integration with Playwright.
- [axe-playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/abhinaba-ghosh/axe-playwright) ![GitHub last commit](https://img.shields.io/github/last-commit/abhinaba-ghosh/axe-playwright)](https://github.com/abhinaba-ghosh/axe-playwright) - Unofficial integration of Axe with Playwright.
- [Chromium for Serverless platforms ![GitHub Repo Stars](https://img.shields.io/github/stars/Sparticuz/chromium) ![GitHub last commit](https://img.shields.io/github/last-commit/Sparticuz/chromium)](https://github.com/Sparticuz/chromium?tab=readme-ov-file#usage-with-playwright) - Prebuilt Chromium binaries for Playwright on serverless platforms.
- [CodeceptJS ![GitHub Repo Stars](https://img.shields.io/github/stars/Codeception/CodeceptJS) ![GitHub last commit](https://img.shields.io/github/last-commit/Codeception/CodeceptJS)](https://github.com/Codeception/CodeceptJS) - Supercharged End 2 End Testing Framework for Node.js.
- [cucumber-playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/Tallyb/cucumber-playwright) ![GitHub last commit](https://img.shields.io/github/last-commit/Tallyb/cucumber-playwright)](https://github.com/Tallyb/cucumber-playwright) - A starter repo for writing E2E tests based on Cucumber with Playwright using TypeScript.
- [@guidepup/Playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/guidepup/guidepup-playwright) ![GitHub last commit](https://img.shields.io/github/last-commit/guidepup/guidepup-playwright)](https://github.com/guidepup/guidepup-playwright) - VoiceOver and NVDA screen reader driver integration for Playwright.
- [Happo](https://docs.happo.io/docs/playwright) - Catch unexpected visual and accessibility changes and UI bugs.
- [Playwright Angular Schematic ![GitHub Repo Stars](https://img.shields.io/github/stars/playwright-community/playwright-ng-schematics) ![GitHub last commit](https://img.shields.io/github/last-commit/playwright-community/playwright-ng-schematics)](https://github.com/playwright-community/playwright-ng-schematics) - Adds Playwright Test to your Angular project.
- [playwright-bdd ![GitHub Repo Stars](https://img.shields.io/github/stars/vitalets/playwright-bdd) ![GitHub last commit](https://img.shields.io/github/last-commit/vitalets/playwright-bdd)](https://github.com/vitalets/playwright-bdd) - BDD testing with Playwright runner and CucumberJS.
- [Playwright CRX ![GitHub Repo Stars](https://img.shields.io/github/stars/ruifigueira/playwright-crx) ![GitHub last commit](https://img.shields.io/github/last-commit/ruifigueira/playwright-crx)](https://github.com/ruifigueira/playwright-crx) - Playwright codegen as a chrome extension. Available in [Chrome Web Store](https://chromewebstore.google.com/detail/playwright-crx/jambeljnbnfbkcpnoiaedcabbgmnnlcd).
- [playwright-graphql](https://www.npmjs.com/package/playwright-graphql?activeTab=readme) - Generates a type‑safe GraphQL client and fixtures for Playwright API tests, with a CLI for schema/operation generation and optional coverage reporting.
- [playwright-pytest ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/playwright-pytest) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/playwright-pytest)](https://github.com/microsoft/playwright-pytest/) - Official Pytest plugin for using Playwright pages with fixtures.
- [Serenity/JS](https://serenity-js.org) - Acceptance testing, reporting, and test integration framework for Playwright, implementing the [Screenplay Pattern](https://serenity-js.org/handbook/design/screenplay-pattern/).

## Language Support

- [Playwright](https://git.io/JT2bj) - Official Playwright in Node.js (JavaScript and TypeScript).
- [playwright-dotnet ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/playwright-dotnet) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/playwright-dotnet)](https://github.com/microsoft/playwright-dotnet) - Official Playwright port to .NET.
- [playwright-java ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/playwright-java) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/playwright-java)](https://github.com/microsoft/playwright-java) - Official Playwright port to Java.
- [playwright-python ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/playwright-python) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/playwright-python)](https://github.com/microsoft/playwright-python) - Official Playwright port to Python.
- [playwright-go ![GitHub Repo Stars](https://img.shields.io/github/stars/playwright-community/playwright-go) ![GitHub last commit](https://img.shields.io/github/last-commit/playwright-community/playwright-go)](https://github.com/playwright-community/playwright-go) - Playwright port for Golang.
- [playwright-perl ![GitHub Repo Stars](https://img.shields.io/github/stars/teodesian/playwright-perl) ![GitHub last commit](https://img.shields.io/github/last-commit/teodesian/playwright-perl)](https://github.com/teodesian/playwright-perl) - Playwright port for Perl.
- [playwright-ruby-client ![GitHub Repo Stars](https://img.shields.io/github/stars/YusukeIwaki/playwright-ruby-client) ![GitHub last commit](https://img.shields.io/github/last-commit/YusukeIwaki/playwright-ruby-client)](https://github.com/YusukeIwaki/playwright-ruby-client) - Playwright port for Ruby.
- [playwright-rust ![GitHub Repo Stars](https://img.shields.io/github/stars/padamson/playwright-rust) ![GitHub last commit](https://img.shields.io/github/last-commit/padamson/playwright-rust)](https://github.com/padamson/playwright-rust) - Playwright port for Rust.

## Utils

- [@bgotink/playwright-coverage ![GitHub Repo Stars](https://img.shields.io/github/stars/bgotink/playwright-coverage) ![GitHub last commit](https://img.shields.io/github/last-commit/bgotink/playwright-coverage)](https://github.com/bgotink/playwright-coverage) - Report coverage on Playwright tests using v8 coverage, without requiring any instrumentation.
- [BrowserClaw ![GitHub Repo Stars](https://img.shields.io/github/stars/idan-rubin/browserclaw) ![GitHub last commit](https://img.shields.io/github/last-commit/idan-rubin/browserclaw)](https://github.com/idan-rubin/browserclaw) - AI browser automation via accessibility snapshots and ref targeting, built on Playwright.
- [eslint-plugin-playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/playwright-community/eslint-plugin-playwright) ![GitHub last commit](https://img.shields.io/github/last-commit/playwright-community/eslint-plugin-playwright)](https://github.com/playwright-community/eslint-plugin-playwright) - ESLint plugin for your Playwright testing needs.
- [@global-cache/Playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/vitalets/global-cache) ![GitHub last commit](https://img.shields.io/github/last-commit/vitalets/global-cache)](https://github.com/vitalets/global-cache) - A key-value cache for sharing data between parallel workers and test runs.
- [Heroshot ![GitHub Repo Stars](https://img.shields.io/github/stars/omachala/heroshot) ![GitHub last commit](https://img.shields.io/github/last-commit/omachala/heroshot)](https://github.com/omachala/heroshot) - Documentation screenshot automation. Visual picker to define screenshots, one command to regenerate them all.
- [Moon ![GitHub Repo Stars](https://img.shields.io/github/stars/aerokube/moon) ![GitHub last commit](https://img.shields.io/github/last-commit/aerokube/moon)](https://github.com/aerokube/moon) - Tools for executing Playwright tests in parallel in a Kubernetes cluster.
- [octomind.dev](https://octomind.dev) - Auto-generated, run & maintained with AI-assisted test case discovery.
- [playwright-best-practices-skill ![GitHub Repo Stars](https://img.shields.io/github/stars/currents-dev/playwright-best-practices-skill) ![GitHub last commit](https://img.shields.io/github/last-commit/currents-dev/playwright-best-practices-skill)](https://github.com/currents-dev/playwright-best-practices-skill) - AI Skill to make agents experts at writing, debugging and maintaining Playwright tests.
- [Playwright-cleanup](https://www.npmjs.com/package/playwright-cleanup) - A Playwright cleanup tool that simplifies test cleanup by undoing any changes to the testing environment.
- [playwright-elements](https://danteukraine.github.io/playwright-elements) - Playwright test extension for creation of reusable, chainable component elements to reduce page object boilerplate.
- [playwright-magic-steps ![GitHub Repo Stars](https://img.shields.io/github/stars/vitalets/playwright-magic-steps) ![GitHub last commit](https://img.shields.io/github/last-commit/vitalets/playwright-magic-steps)](https://github.com/vitalets/playwright-magic-steps) - Auto-transform JavaScript comments into Playwright steps.
- [playwright-network-cache ![GitHub Repo Stars](https://img.shields.io/github/stars/vitalets/playwright-network-cache) ![GitHub last commit](https://img.shields.io/github/last-commit/vitalets/playwright-network-cache)](https://github.com/vitalets/playwright-network-cache) - Speed up Playwright tests by caching network requests on the filesystem.
- [Playwright-performance](https://www.npmjs.com/package/playwright-performance) - Plugin for measuring and analyzing performance of tested flows using Playwright.
- [playwright-python-language-injection ![GitHub Repo Stars](https://img.shields.io/github/stars/Mattwmaster58/playwright-python-language-injection) ![GitHub last commit](https://img.shields.io/github/last-commit/Mattwmaster58/playwright-python-language-injection)](https://github.com/Mattwmaster58/playwright-python-language-injection) - Language injection definitions for CSS/JS syntax highlighting when using `python-playwright` in PyCharm.
- [playwright-skill ![GitHub Repo Stars](https://img.shields.io/github/stars/testdino-hq/playwright-skill) ![GitHub last commit](https://img.shields.io/github/last-commit/testdino-hq/playwright-skill)](https://github.com/testdino-hq/playwright-skill) - 70+ production-tested Playwright skills for coding agents covering best practices, POM patterns, CI/CD, and migration paths.
- [playwright-test-coverage ![GitHub Repo Stars](https://img.shields.io/github/stars/anishkny/playwright-test-coverage) ![GitHub last commit](https://img.shields.io/github/last-commit/anishkny/playwright-test-coverage)](https://github.com/anishkny/playwright-test-coverage) - Plugin to collect code coverage from running Playwright tests.
- [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) - Official Playwright test extension for VS Code.
- [playwright-ui5 ![GitHub Repo Stars](https://img.shields.io/github/stars/detachhead/playwright-ui5) ![GitHub last commit](https://img.shields.io/github/last-commit/detachhead/playwright-ui5)](https://github.com/detachhead/playwright-ui5) - Custom selector engine for sapui5.
- [playwright-xpath ![GitHub Repo Stars](https://img.shields.io/github/stars/detachhead/playwright-xpath) ![GitHub last commit](https://img.shields.io/github/last-commit/detachhead/playwright-xpath)](https://github.com/detachhead/playwright-xpath) - Custom selector engine for xpath 2 and 3.
- [POMWright ![GitHub Repo Stars](https://img.shields.io/github/stars/DyHex/POMWright) ![GitHub last commit](https://img.shields.io/github/last-commit/DyHex/POMWright)](https://github.com/DyHex/POMWright) - TypeScript-based Page Object Model framework with automatic nested/chained locator generation.
- [TestingBot](https://testingbot.com) - Connect your Playwright tests with browsers in the Cloud.
- [Try Playwright](https://try.playwright.tech) - Interactive playground for running Playwright tests.

## Reporters

- [allure-playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/allure-framework/allure-js) ![GitHub last commit](https://img.shields.io/github/last-commit/allure-framework/allure-js)](https://github.com/allure-framework/allure-js/tree/master/packages/allure-playwright) - Allure integration with Playwright Test framework.
- [Checkly](https://www.checklyhq.com/docs/detect/testing/playwright-reporter/) - Uploads Playwright test results, screenshots, videos and traces to the Checkly platform for monitoring and debugging across global regions.
- [currents-dev](https://currents.dev/) - A Cloud Dashboard to debug, troubleshoot and analyze parallel Playwright CI tests.
- [echoed ![GitHub Repo Stars](https://img.shields.io/github/stars/mrasu/echoed) ![GitHub last commit](https://img.shields.io/github/last-commit/mrasu/echoed)](https://github.com/mrasu/echoed) - Makes tests observable by visualizing OpenTelemetry data in HTML.
- [monocart-reporter ![GitHub Repo Stars](https://img.shields.io/github/stars/cenfun/monocart-reporter) ![GitHub last commit](https://img.shields.io/github/last-commit/cenfun/monocart-reporter)](https://github.com/cenfun/monocart-reporter) - A Playwright test reporter, shows suites/cases/steps in html grid.
- [playwright-ctrf-json-reporter ![GitHub Repo Stars](https://img.shields.io/github/stars/ctrf-io/playwright-ctrf-json-reporter) ![GitHub last commit](https://img.shields.io/github/last-commit/ctrf-io/playwright-ctrf-json-reporter)](https://github.com/ctrf-io/playwright-ctrf-json-reporter) - A Playwright JSON test results reporter that follows the CTRF schema.
- [playwright-slack-report ![GitHub Repo Stars](https://img.shields.io/github/stars/ryanrosello-og/playwright-slack-report) ![GitHub last commit](https://img.shields.io/github/last-commit/ryanrosello-og/playwright-slack-report)](https://github.com/ryanrosello-og/playwright-slack-report) - Publish your Playwright test results to your favorite Slack channel(s).
- [playwright-smart-reporter](https://www.npmjs.com/package/playwright-smart-reporter) - A feature-rich HTML reporter with stability grades, trend analytics, retry analysis, performance tracking, and optional AI-powered failure analysis.
- [playwright-tesults-reporter ![GitHub Repo Stars](https://img.shields.io/github/stars/tesults/playwright-tesults-reporter) ![GitHub last commit](https://img.shields.io/github/last-commit/tesults/playwright-tesults-reporter)](https://github.com/tesults/playwright-tesults-reporter) - A library for uploading test results to Tesults from Playwright.
- [playwright-xray ![GitHub Repo Stars](https://img.shields.io/github/stars/inluxc/playwright-xray) ![GitHub last commit](https://img.shields.io/github/last-commit/inluxc/playwright-xray)](https://github.com/inluxc/playwright-xray) - Playwright Xray Reporter, send test executions to Jira / Xray.
- [qase ![GitHub Repo Stars](https://img.shields.io/github/stars/qase-tms/qase-javascript) ![GitHub last commit](https://img.shields.io/github/last-commit/qase-tms/qase-javascript)](https://github.com/qase-tms/qase-javascript/tree/main/qase-playwright) - Playwright Qase Reporter, send test executions to [qase](https://qase.io).
- [TestDino](https://testdino.com) - An AI Cloud platform for Playwright test analytics with instant failure debugging, flaky test detection, and ML categorization.
- [testomatio-reporter ![GitHub Repo Stars](https://img.shields.io/github/stars/testomatio/reporter) ![GitHub last commit](https://img.shields.io/github/last-commit/testomatio/reporter)](https://github.com/testomatio/reporter) - Runs and sends test executions to the TCMS testomatio, Jira / Linear / Azure DevOps task management.

## Showcases

- [Elastic APM JS agent ![GitHub Repo Stars](https://img.shields.io/github/stars/elastic/apm-agent-rum-js) ![GitHub last commit](https://img.shields.io/github/last-commit/elastic/apm-agent-rum-js)](https://github.com/elastic/apm-agent-rum-js) - Playwright is used to run benchmark tests across browsers.
- [playwright-examples ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/playwright-examples) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/playwright-examples)](https://github.com/microsoft/playwright-examples) - Various testing scenarios with Playwright.
- [TypeScript ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/TypeScript) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/TypeScript)](https://github.com/microsoft/TypeScript) - Playwright is used to test TypeScript.js across browsers.
- [VS Code ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/vscode) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/vscode)](https://github.com/microsoft/vscode) - Playwright is used to run cross-browser tests on their web builds.
- [xterm.js ![GitHub Repo Stars](https://img.shields.io/github/stars/xtermjs/xterm.js) ![GitHub last commit](https://img.shields.io/github/last-commit/xtermjs/xterm.js)](https://github.com/xtermjs/xterm.js) - Playwright is used to run cross-browser integration tests.

## Guides

- [Currents Blog](https://currents.dev/blog/playwright) - Playwright articles written by QA professionals.
- [Playwright Tips (videos)](https://www.youtube.com/playlist?list=PLMZDRUOi3a8NtMq3PUS5iJc2pee38rurc) - Video walkthroughs of common challenges testing and monitoring with Playwright.
- [Playwright Weekly](https://playwrightweekly.com) - Curated aggregator of Playwright articles & news from the internet.
- [playwrightsolutions.com](https://playwrightsolutions.com) - Curated Selection of Playwright Automated Test Problems and Solutions.
- [serenity-js.org](https://serenity-js.org/handbook/web-testing/your-first-web-scenario/) - Learn how to write acceptance tests in business language using Playwright and the Serenity/JS Screenplay Pattern.
- [Testing 3D applications with Playwright on GPU](https://blog.promaton.com/testing-3d-applications-with-playwright-on-gpu-1e9cfc8b54a9) - Recipe to enable hardware acceleration for Playwright tests on CI.

## Contribute

Contributions welcome! Read the [contribution guidelines ![GitHub Repo Stars](https://img.shields.io/github/stars/mxschmitt/awesome-playwright) ![GitHub last commit](https://img.shields.io/github/last-commit/mxschmitt/awesome-playwright)](https://github.com/mxschmitt/awesome-playwright/blob/master/CONTRIBUTING.md) first.
