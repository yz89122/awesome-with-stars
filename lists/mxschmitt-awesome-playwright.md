# Awesome Playwright [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of awesome tools, utils and projects using Playwright

[Playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/playwright) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/playwright)](https://github.com/microsoft/playwright) is a Node.js library to automate Firefox, WebKit and Chromium based browsers via a single API.

## Contents

- [Integrations](#integrations)
- [Language Support](#language-support)
- [Utils](#utils)
- [Reporters](#reporters)
- [Showcases](#showcases)
- [Guides](#guides)
- [Contribute](#contribute)

## Integrations

- [jest-playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/playwright-community/jest-playwright) ![GitHub last commit](https://img.shields.io/github/last-commit/playwright-community/jest-playwright)](https://github.com/playwright-community/jest-playwright/) - Jest adapter for running Playwright.
- [CodeceptJS ![GitHub Repo Stars](https://img.shields.io/github/stars/Codeception/CodeceptJS) ![GitHub last commit](https://img.shields.io/github/last-commit/Codeception/CodeceptJS)](https://github.com/Codeception/CodeceptJS) - Supercharged End 2 End Testing Framework for Node.js.
- [Chromium for Serverless platforms ![GitHub Repo Stars](https://img.shields.io/github/stars/Sparticuz/chromium) ![GitHub last commit](https://img.shields.io/github/last-commit/Sparticuz/chromium)](https://github.com/Sparticuz/chromium?tab=readme-ov-file#usage-with-playwright) - Chromium for Serverless platforms.
- [playwright-chrome-recorder ![GitHub Repo Stars](https://img.shields.io/github/stars/AndrewUsher/playwright-chrome-recorder) ![GitHub last commit](https://img.shields.io/github/last-commit/AndrewUsher/playwright-chrome-recorder)](https://github.com/AndrewUsher/playwright-chrome-recorder) - Export Playwright tests from Google Chrome DevTools' recordings programmatically.
- [Playwright Chrome Recorder Extension ![GitHub Repo Stars](https://img.shields.io/github/stars/AndrewUsher/playwright-recorder-extension) ![GitHub last commit](https://img.shields.io/github/last-commit/AndrewUsher/playwright-recorder-extension)](https://github.com/AndrewUsher/playwright-recorder-extension) - Export DevTools Recordings as Playwright Tests directly from the DevTools Recorder Panel.
- [playwright-github-action ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/playwright-github-action) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/playwright-github-action)](https://github.com/microsoft/playwright-github-action) - GitHub Action to install all the required dependencies.
- [playwright-pytest ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/playwright-pytest) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/playwright-pytest)](https://github.com/microsoft/playwright-pytest/) - Official Pytest plugin for using Playwright pages with fixtures.
- [heroku-playwright-buildpack ![GitHub Repo Stars](https://img.shields.io/github/stars/mxschmitt/heroku-playwright-buildpack) ![GitHub last commit](https://img.shields.io/github/last-commit/mxschmitt/heroku-playwright-buildpack)](https://github.com/mxschmitt/heroku-playwright-buildpack) - Heroku buildpack for running Playwright on a Heroku Dyno.
- [@axe-core/playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/dequelabs/axe-core-npm) ![GitHub last commit](https://img.shields.io/github/last-commit/dequelabs/axe-core-npm)](https://github.com/dequelabs/axe-core-npm/blob/develop/packages/playwright/README.md) - Official Axe integration with Playwright.
- [axe-playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/abhinaba-ghosh/axe-playwright) ![GitHub last commit](https://img.shields.io/github/last-commit/abhinaba-ghosh/axe-playwright)](https://github.com/abhinaba-ghosh/axe-playwright) - Inofficial integration of Axe with Playwright.
- [expect-axe-playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/Widen/expect-axe-playwright) ![GitHub last commit](https://img.shields.io/github/last-commit/Widen/expect-axe-playwright)](https://github.com/Widen/expect-axe-playwright) - Expect matchers to perform Axe accessibility tests in your Playwright tests.
- [cucumber-playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/Tallyb/cucumber-playwright) ![GitHub last commit](https://img.shields.io/github/last-commit/Tallyb/cucumber-playwright)](https://github.com/Tallyb/cucumber-playwright) - A starter repo for writing E2E tests based on Cucumber with Playwright using Typescript.
- [artillery-engine-playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/artilleryio/artillery) ![GitHub last commit](https://img.shields.io/github/last-commit/artilleryio/artillery)](https://github.com/artilleryio/artillery/tree/main/packages/artillery-engine-playwright) - Load testing with Playwright.
- [playwright-bdd ![GitHub Repo Stars](https://img.shields.io/github/stars/vitalets/playwright-bdd) ![GitHub last commit](https://img.shields.io/github/last-commit/vitalets/playwright-bdd)](https://github.com/vitalets/playwright-bdd) - BDD testing with Playwright runner and CucumberJS.
- [Serenity/JS](https://serenity-js.org) - Acceptance testing, reporting, and test integration framework for Playwright, implementing the [Screenplay Pattern](https://serenity-js.org/handbook/design/screenplay-pattern/).
- [@guidepup/playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/guidepup/guidepup-playwright) ![GitHub last commit](https://img.shields.io/github/last-commit/guidepup/guidepup-playwright)](https://github.com/guidepup/guidepup-playwright) - VoiceOver and NVDA screen reader driver integration for Playwright.

## Language Support

- [playwright](https://git.io/JT2bj) - Official Playwright in Node.js (JavaScript and TypeScript).
- [playwright-python ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/playwright-python) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/playwright-python)](https://github.com/microsoft/playwright-python) - Official Playwright port to Python.
- [playwright-dotnet ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/playwright-dotnet) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/playwright-dotnet)](https://github.com/microsoft/playwright-dotnet) - Official Playwright port to .NET.
- [playwright-java ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/playwright-java) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/playwright-java)](https://github.com/microsoft/playwright-java) - Official Playwright port to Java.
- [playwright-go ![GitHub Repo Stars](https://img.shields.io/github/stars/playwright-community/playwright-go) ![GitHub last commit](https://img.shields.io/github/last-commit/playwright-community/playwright-go)](https://github.com/playwright-community/playwright-go) - Playwright port for Golang.
- [playwright-ruby-client ![GitHub Repo Stars](https://img.shields.io/github/stars/YusukeIwaki/playwright-ruby-client) ![GitHub last commit](https://img.shields.io/github/last-commit/YusukeIwaki/playwright-ruby-client)](https://github.com/YusukeIwaki/playwright-ruby-client) - Playwright port for Ruby.
- [playwright-cr ![GitHub Repo Stars](https://img.shields.io/github/stars/naqvis/playwright-cr) ![GitHub last commit](https://img.shields.io/github/last-commit/naqvis/playwright-cr)](https://github.com/naqvis/playwright-cr) - Playwright port for Crystal.
- [playwright-rust ![GitHub Repo Stars](https://img.shields.io/github/stars/octaltree/playwright-rust) ![GitHub last commit](https://img.shields.io/github/last-commit/octaltree/playwright-rust)](https://github.com/octaltree/playwright-rust) - Playwright port for Rust.
- [playwright-perl ![GitHub Repo Stars](https://img.shields.io/github/stars/teodesian/playwright-perl) ![GitHub last commit](https://img.shields.io/github/last-commit/teodesian/playwright-perl)](https://github.com/teodesian/playwright-perl) - Playwright port for Perl.

## Utils

- [automated-Playwright-UI-tests](https://github.com/OctoMind-dev) - Auto-generated, run & maintained with AI-assisted test case discovery.
- [Ask Playwright](https://ray.run/ask) - Accurate answers to Playwright questions provided by LLM trained on the latest Playwright documentation.
- [Try Playwright](https://try.playwright.tech) - Interactive playground for running Playwright tests.
- [playwright-fluent ![GitHub Repo Stars](https://img.shields.io/github/stars/hdorgeval/playwright-fluent) ![GitHub last commit](https://img.shields.io/github/last-commit/hdorgeval/playwright-fluent)](https://github.com/hdorgeval/playwright-fluent) - Fluent API Wrapper around Playwright.
- [TestingBot](https://testingbot.com) - Connect your Playwright tests with browsers in the Cloud.
- [expect-playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/playwright-community/expect-playwright) ![GitHub last commit](https://img.shields.io/github/last-commit/playwright-community/expect-playwright)](https://github.com/playwright-community/expect-playwright) - Expect utility matcher functions to simplify expect statements for the usage with Playwright Test or Jest Playwright.
- [eslint-plugin-playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/playwright-community/eslint-plugin-playwright) ![GitHub last commit](https://img.shields.io/github/last-commit/playwright-community/eslint-plugin-playwright)](https://github.com/playwright-community/eslint-plugin-playwright) - ESLint plugin for your Playwright testing needs.
- [Moon ![GitHub Repo Stars](https://img.shields.io/github/stars/aerokube/moon) ![GitHub last commit](https://img.shields.io/github/last-commit/aerokube/moon)](https://github.com/aerokube/moon) - Tools for executing Playwright tests in parallel in a Kubernetes cluster.
- [playwright-test-coverage ![GitHub Repo Stars](https://img.shields.io/github/stars/anishkny/playwright-test-coverage) ![GitHub last commit](https://img.shields.io/github/last-commit/anishkny/playwright-test-coverage)](https://github.com/anishkny/playwright-test-coverage) - Plugin to collect code coverage from running Playwright tests.
- [Playwright Test for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) - Official Playwright test extension for VS Code.
- [Maestro for IntelliJ](https://plugins.jetbrains.com/plugin/18100-maestro) - Playwright plugin for IntelliJ.
- [playwright-elements](https://danteukraine.github.io/playwright-elements) - Playwright test extension for creatation of reusable components with ability to add child elements, methods and call them in chain. Reduce amount of your code in page object, or even use elements without page object.
- [Playwright-cleanup](https://www.npmjs.com/package/playwright-cleanup) - A Playwright cleanup tool that simplifies test cleanup by undoing any changes to the testing environment.
- [Playwright-performance](https://www.npmjs.com/package/playwright-performance) - A plugin that helps you optimize the speed and efficiency of web applications by measuring and analyzing the performance of ANY tested flow using Playwright.
- [playwright-python-language-injection ![GitHub Repo Stars](https://img.shields.io/github/stars/Mattwmaster58/playwright-python-language-injection) ![GitHub last commit](https://img.shields.io/github/last-commit/Mattwmaster58/playwright-python-language-injection)](https://github.com/Mattwmaster58/playwright-python-language-injection) - Language injection definitions for CSS/JS syntax highlighting when using `python-playwright` in PyCharm.
- [playwright-ui5 ![GitHub Repo Stars](https://img.shields.io/github/stars/detachhead/playwright-ui5) ![GitHub last commit](https://img.shields.io/github/last-commit/detachhead/playwright-ui5)](https://github.com/detachhead/playwright-ui5) - Custom selector engine for sapui5.
- [playwright-xpath ![GitHub Repo Stars](https://img.shields.io/github/stars/detachhead/playwright-xpath) ![GitHub last commit](https://img.shields.io/github/last-commit/detachhead/playwright-xpath)](https://github.com/detachhead/playwright-xpath) - Custom selector engine for xpath 2 and 3.
- [ZeroStep ![GitHub Repo Stars](https://img.shields.io/github/stars/zerostep-ai/zerostep) ![GitHub last commit](https://img.shields.io/github/last-commit/zerostep-ai/zerostep)](https://github.com/zerostep-ai/zerostep) - AI actions and assertions for Playwright.

## Reporters

- [playwright-tesults-reporter ![GitHub Repo Stars](https://img.shields.io/github/stars/tesults/playwright-tesults-reporter) ![GitHub last commit](https://img.shields.io/github/last-commit/tesults/playwright-tesults-reporter)](https://github.com/tesults/playwright-tesults-reporter) - A library for uploading test results to Tesults from Playwright.
- [monocart-reporter ![GitHub Repo Stars](https://img.shields.io/github/stars/cenfun/monocart-reporter) ![GitHub last commit](https://img.shields.io/github/last-commit/cenfun/monocart-reporter)](https://github.com/cenfun/monocart-reporter) - A playwright test reporter, shows suites/cases/steps in html grid.
- [allure-playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/allure-framework/allure-js) ![GitHub last commit](https://img.shields.io/github/last-commit/allure-framework/allure-js)](https://github.com/allure-framework/allure-js/tree/master/packages/allure-playwright) - Allure integration with Playwright Test framework.
- [playwright-xray ![GitHub Repo Stars](https://img.shields.io/github/stars/inluxc/playwright-xray) ![GitHub last commit](https://img.shields.io/github/last-commit/inluxc/playwright-xray)](https://github.com/inluxc/playwright-xray) - Playwright Xray Reporter, send test executions to Jira / Xray.
- [testomatio-reporter ![GitHub Repo Stars](https://img.shields.io/github/stars/testomatio/reporter) ![GitHub last commit](https://img.shields.io/github/last-commit/testomatio/reporter)](https://github.com/testomatio/reporter) - Runs and sends test executions to the TCMS testomatio, Jira / Linear / Azure DevOps task management.
- [currents-dev](https://currents.dev/) - A Cloud Dashboard to debug, troubleshoot and analyze parallel Playwright CI tests.
- [qase ![GitHub Repo Stars](https://img.shields.io/github/stars/qase-tms/qase-javascript) ![GitHub last commit](https://img.shields.io/github/last-commit/qase-tms/qase-javascript)](https://github.com/qase-tms/qase-javascript/tree/master/qase-playwright) - Playwright Qase Reporter, send test executions to [qase](https://qase.io/).

## Showcases

- [Demo.Playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/MarcusFelling/Demo.Playwright) ![GitHub last commit](https://img.shields.io/github/last-commit/MarcusFelling/Demo.Playwright)](https://github.com/MarcusFelling/Demo.Playwright) - Various testing scenarios with Playwright, using the official test-runner and scripts authored in TypeScript.
- [playwright-jest-examples ![GitHub Repo Stars](https://img.shields.io/github/stars/playwright-community/playwright-jest-examples) ![GitHub last commit](https://img.shields.io/github/last-commit/playwright-community/playwright-jest-examples)](https://github.com/playwright-community/playwright-jest-examples) - Examples of the Jest Playwright tools in combination to test popular sites.
- [VS Code ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/vscode) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/vscode)](https://github.com/microsoft/vscode) - Playwright is used to run cross-browser tests on their web builds.
- [TypeScript ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/TypeScript) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/TypeScript)](https://github.com/microsoft/TypeScript) - Playwright is used test typescript.js across browsers.
- [Elastic APM JS agent ![GitHub Repo Stars](https://img.shields.io/github/stars/elastic/apm-agent-rum-js) ![GitHub last commit](https://img.shields.io/github/last-commit/elastic/apm-agent-rum-js)](https://github.com/elastic/apm-agent-rum-js) - Playwright is used to run benchmark tests across browsers.
- [Blockstack ![GitHub Repo Stars](https://img.shields.io/github/stars/blockstack/ux) ![GitHub last commit](https://img.shields.io/github/last-commit/blockstack/ux)](https://github.com/blockstack/ux) - Playwright is used to run cross-browser UI tests.
- [xterm.js ![GitHub Repo Stars](https://img.shields.io/github/stars/xtermjs/xterm.js) ![GitHub last commit](https://img.shields.io/github/last-commit/xtermjs/xterm.js)](https://github.com/xtermjs/xterm.js) - Playwright is used to run cross-browser integration tests.
- [Heroku Playwright Example ![GitHub Repo Stars](https://img.shields.io/github/stars/mxschmitt/heroku-playwright-example) ![GitHub last commit](https://img.shields.io/github/last-commit/mxschmitt/heroku-playwright-example)](https://github.com/mxschmitt/heroku-playwright-example) - Example using Playwright on Heroku.
- [Todo App with Playwright ![GitHub Repo Stars](https://img.shields.io/github/stars/burakkantarci/playwright-todo-app) ![GitHub last commit](https://img.shields.io/github/last-commit/burakkantarci/playwright-todo-app)](https://github.com/burakkantarci/playwright-todo-app) - Comprehensive Todo app with APIs, E2E tests with GitHub Actions enabled.

## Guides

- [theheadless.dev](https://www.checklyhq.com/learn/headless/) - Practical guides and runnable examples on Playwright (and Puppeteer).
- [playwrightsolutions.com](https://playwrightsolutions.com) - Curated Selection of Playwright Automated Test Problems and Solutions.
- [serenity-js.org](https://serenity-js.org/handbook/web-testing/your-first-web-scenario/) - Learn how to write acceptance tests in business language using Playwright and the Serenity/JS Screenplay Pattern.

## Contribute

Contributions welcome! Read the [contribution guidelines ![GitHub Repo Stars](https://img.shields.io/github/stars/mxschmitt/awesome-playwright) ![GitHub last commit](https://img.shields.io/github/last-commit/mxschmitt/awesome-playwright)](https://github.com/mxschmitt/awesome-playwright/blob/master/CONTRIBUTING.md) first.
