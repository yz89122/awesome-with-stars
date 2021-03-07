# Awesome TAP [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [<img src="https://testanything.org/images/tap.png" width="67" align="right">](https://testanything.org)

> Useful resources for the [Test Anything Protocol](https://testanything.org)

TAP is a simple text-based interface between testing modules in a test harness.

*The list is very JavaScript focused right now. That's just because I'm only familiar with TAP stuff in the JS world. Contributions welcome for any language.*

## Contents

- [Reporters](#reporters)
- [Producers](#producers)
- [Consumers](#consumers)
- [Tools](#tools)
- [Articles](#articles)
- [Tutorials](#tutorials)
- [Documentation](#documentation)
- [Community](#community)

## Reporters

### JavaScript

- [tap-dot ![GitHub Repo Stars](https://img.shields.io/github/stars/scottcorgan/tap-dot) ![GitHub last commit](https://img.shields.io/github/last-commit/scottcorgan/tap-dot)](https://github.com/scottcorgan/tap-dot) - Dotted output.
- [tap-spec ![GitHub Repo Stars](https://img.shields.io/github/stars/scottcorgan/tap-spec) ![GitHub last commit](https://img.shields.io/github/last-commit/scottcorgan/tap-spec)](https://github.com/scottcorgan/tap-spec) - Mocha-like spec reporter.
- [tap-nyan ![GitHub Repo Stars](https://img.shields.io/github/stars/calvinmetcalf/tap-nyan) ![GitHub last commit](https://img.shields.io/github/last-commit/calvinmetcalf/tap-nyan)](https://github.com/calvinmetcalf/tap-nyan) - Nyan cat.
- [tap-min ![GitHub Repo Stars](https://img.shields.io/github/stars/derhuerst/tap-min) ![GitHub last commit](https://img.shields.io/github/last-commit/derhuerst/tap-min)](https://github.com/derhuerst/tap-min) - Minimal output.
- [tap-difflet ![GitHub Repo Stars](https://img.shields.io/github/stars/namuol/tap-difflet) ![GitHub last commit](https://img.shields.io/github/last-commit/namuol/tap-difflet)](https://github.com/namuol/tap-difflet) - Minimal output with diffing.
- [tap-diff ![GitHub Repo Stars](https://img.shields.io/github/stars/axross/tap-diff) ![GitHub last commit](https://img.shields.io/github/last-commit/axross/tap-diff)](https://github.com/axross/tap-diff) - Human-friendly output with diffing.
- [tap-simple ![GitHub Repo Stars](https://img.shields.io/github/stars/joeybaker/tap-simple) ![GitHub last commit](https://img.shields.io/github/last-commit/joeybaker/tap-simple)](https://github.com/joeybaker/tap-simple) - Simple output.
- [faucet ![GitHub Repo Stars](https://img.shields.io/github/stars/substack/faucet) ![GitHub last commit](https://img.shields.io/github/last-commit/substack/faucet)](https://github.com/substack/faucet) - Human-readable summarizer.
- [tap-mocha-reporter ![GitHub Repo Stars](https://img.shields.io/github/stars/isaacs/tap-mocha-reporter) ![GitHub last commit](https://img.shields.io/github/last-commit/isaacs/tap-mocha-reporter)](https://github.com/isaacs/tap-mocha-reporter) - Use any of the [Mocha reporters ![GitHub Repo Stars](https://img.shields.io/github/stars/isaacs/tap-mocha-reporter) ![GitHub last commit](https://img.shields.io/github/last-commit/isaacs/tap-mocha-reporter)](https://github.com/isaacs/tap-mocha-reporter/tree/master/lib/reporters).
- [tap-summary ![GitHub Repo Stars](https://img.shields.io/github/stars/zoubin/tap-summary) ![GitHub last commit](https://img.shields.io/github/last-commit/zoubin/tap-summary)](https://github.com/zoubin/tap-summary) - Summarized output.
- [tap-pessimist ![GitHub Repo Stars](https://img.shields.io/github/stars/clux/tap-pessimist) ![GitHub last commit](https://img.shields.io/github/last-commit/clux/tap-pessimist)](https://github.com/clux/tap-pessimist) - Only shows failed tests.
- [tap-prettify ![GitHub Repo Stars](https://img.shields.io/github/stars/toolness/tap-prettify) ![GitHub last commit](https://img.shields.io/github/last-commit/toolness/tap-prettify)](https://github.com/toolness/tap-prettify) - Nice readable output with diffing.
- [tap-colorize ![GitHub Repo Stars](https://img.shields.io/github/stars/substack/tap-colorize) ![GitHub last commit](https://img.shields.io/github/last-commit/substack/tap-colorize)](https://github.com/substack/tap-colorize) - Colorize the output while preserving machine-readability.
- [tap-bail ![GitHub Repo Stars](https://img.shields.io/github/stars/juliangruber/tap-bail) ![GitHub last commit](https://img.shields.io/github/last-commit/juliangruber/tap-bail)](https://github.com/juliangruber/tap-bail) - Bail out when the first test fails.
- [tap-notify ![GitHub Repo Stars](https://img.shields.io/github/stars/axross/tap-notify) ![GitHub last commit](https://img.shields.io/github/last-commit/axross/tap-notify)](https://github.com/axross/tap-notify) - Notifier for macOS, Linux and Windows.
- [tap-json ![GitHub Repo Stars](https://img.shields.io/github/stars/gummesson/tap-json) ![GitHub last commit](https://img.shields.io/github/last-commit/gummesson/tap-json)](https://github.com/gummesson/tap-json) - JSON output.
- [ava-tap-json ![GitHub Repo Stars](https://img.shields.io/github/stars/yovasx2/ava-tap-json) ![GitHub last commit](https://img.shields.io/github/last-commit/yovasx2/ava-tap-json)](https://github.com/yovasx2/ava-tap-json) - JSON output with AVA compatibility.
- [tap-xunit ![GitHub Repo Stars](https://img.shields.io/github/stars/aghassemi/tap-xunit) ![GitHub last commit](https://img.shields.io/github/last-commit/aghassemi/tap-xunit)](https://github.com/aghassemi/tap-xunit) - xUnit output.
- [tap-teamcity ![GitHub Repo Stars](https://img.shields.io/github/stars/smockle/tap-teamcity) ![GitHub last commit](https://img.shields.io/github/last-commit/smockle/tap-teamcity)](https://github.com/smockle/tap-teamcity) - Output for TeamCity.

## Producers

Things that produce TAP output.

### JavaScript

- [AVA ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/ava) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/ava)](https://github.com/sindresorhus/ava) - Futuristic test runner (`$ ava --tap`).
- [tap ![GitHub Repo Stars](https://img.shields.io/github/stars/isaacs/node-tap) ![GitHub last commit](https://img.shields.io/github/last-commit/isaacs/node-tap)](https://github.com/isaacs/node-tap) - TAP test framework for Node.js.
- [tape ![GitHub Repo Stars](https://img.shields.io/github/stars/substack/tape) ![GitHub last commit](https://img.shields.io/github/last-commit/substack/tape)](https://github.com/substack/tape) - TAP-producing test harness for Node.js and browsers.
- [ESLint](https://eslint.org/docs/user-guide/formatters/#tap) - Pluggable JavaScript linter (`$ eslint --format=tap`).
- [Mocha](https://mochajs.org) - Feature-rich test framework for Node.js and browsers (`$ mocha reporter=tap`).
- [qunit-tap ![GitHub Repo Stars](https://img.shields.io/github/stars/twada/qunit-tap) ![GitHub last commit](https://img.shields.io/github/last-commit/twada/qunit-tap)](https://github.com/twada/qunit-tap) - TAP output for QUnit.
- [jasmine-reporters ![GitHub Repo Stars](https://img.shields.io/github/stars/larrymyers/jasmine-reporters) ![GitHub last commit](https://img.shields.io/github/last-commit/larrymyers/jasmine-reporters)](https://github.com/larrymyers/jasmine-reporters) - TAP output for Jasmine.
- [karma-tap-reporter ![GitHub Repo Stars](https://img.shields.io/github/stars/fumiakiy/karma-tap-reporter) ![GitHub last commit](https://img.shields.io/github/last-commit/fumiakiy/karma-tap-reporter)](https://github.com/fumiakiy/karma-tap-reporter) - TAP output for Karma.
- [mos ![GitHub Repo Stars](https://img.shields.io/github/stars/zkochan/mos) ![GitHub last commit](https://img.shields.io/github/last-commit/zkochan/mos)](https://github.com/zkochan/mos) - Markdown file generator and tester (`$ mos test --tap`).
- [zora ![GitHub Repo Stars](https://img.shields.io/github/stars/lorenzofox3/zora) ![GitHub last commit](https://img.shields.io/github/last-commit/lorenzofox3/zora)](https://github.com/lorenzofox3/zora) - TAP-producing test runner that works with ES2015 without Babel.
- [node:test](https://nodejs.org/api/test.html) - Minimal TAP test runner included with Node.js.

### Swift

- [TAP ![GitHub Repo Stars](https://img.shields.io/github/stars/swiftdocorg/tap) ![GitHub last commit](https://img.shields.io/github/last-commit/swiftdocorg/tap)](https://github.com/swiftdocorg/tap) - A Swift package for the Test Anything Protocol (v13).

### Fish

- [Fishtape ![GitHub Repo Stars](https://img.shields.io/github/stars/fisherman/fishtape) ![GitHub last commit](https://img.shields.io/github/last-commit/fisherman/fishtape)](https://github.com/fisherman/fishtape) - TAP producer and test harness for fish.

### Bash

- [bats ![GitHub Repo Stars](https://img.shields.io/github/stars/sstephenson/bats) ![GitHub last commit](https://img.shields.io/github/last-commit/sstephenson/bats)](https://github.com/sstephenson/bats) - Bash Automated Testing System.
- [ShellSpec ![GitHub Repo Stars](https://img.shields.io/github/stars/shellspec/shellspec) ![GitHub last commit](https://img.shields.io/github/last-commit/shellspec/shellspec)](https://github.com/shellspec/shellspec) - A full-featured BDD unit testing framework for POSIX shells.

[More…](https://testanything.org/producers.html)

## Consumers

Things that consume TAP output.

### JavaScript

- [tap-parser ![GitHub Repo Stars](https://img.shields.io/github/stars/substack/tap-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/substack/tap-parser)](https://github.com/substack/tap-parser) - TAP parser.
- [tap-out ![GitHub Repo Stars](https://img.shields.io/github/stars/scottcorgan/tap-out) ![GitHub last commit](https://img.shields.io/github/last-commit/scottcorgan/tap-out)](https://github.com/scottcorgan/tap-out) - TAP parser.
- [yamlish ![GitHub Repo Stars](https://img.shields.io/github/stars/isaacs/yamlish) ![GitHub last commit](https://img.shields.io/github/last-commit/isaacs/yamlish)](https://github.com/isaacs/yamlish) - YAML-block parser.

[More…](https://testanything.org/consumers.html)

## Tools

### JavaScript

- [tap-dev-tool ![GitHub Repo Stars](https://img.shields.io/github/stars/Jam3/tap-dev-tool) ![GitHub last commit](https://img.shields.io/github/last-commit/Jam3/tap-dev-tool)](https://github.com/Jam3/tap-dev-tool) - Prettify TAP in the browser console.
- [tap-merge ![GitHub Repo Stars](https://img.shields.io/github/stars/anko/tap-merge) ![GitHub last commit](https://img.shields.io/github/last-commit/anko/tap-merge)](https://github.com/anko/tap-merge) - Merge multiple TAP streams.
- [smokestack ![GitHub Repo Stars](https://img.shields.io/github/stars/hughsk/smokestack) ![GitHub last commit](https://img.shields.io/github/last-commit/hughsk/smokestack)](https://github.com/hughsk/smokestack) - Run TAP tests in a browser and write the output to `stdout`.
- [chutney ![GitHub Repo Stars](https://img.shields.io/github/stars/derhuerst/chutney) ![GitHub last commit](https://img.shields.io/github/last-commit/derhuerst/chutney)](https://github.com/derhuerst/chutney) - Run TAP tests at Sauce Labs. Lightweight [smokestack ![GitHub Repo Stars](https://img.shields.io/github/stars/hughsk/smokestack) ![GitHub last commit](https://img.shields.io/github/last-commit/hughsk/smokestack)](https://github.com/hughsk/smokestack) alternative.

### Python

- [tappy ![GitHub Repo Stars](https://img.shields.io/github/stars/mblayman/tappy) ![GitHub last commit](https://img.shields.io/github/last-commit/mblayman/tappy)](https://github.com/mblayman/tappy) - Tools for working with TAP.

## Articles

- [Understand the Test Anything Protocol](https://www.effectiveperlprogramming.com/2011/05/understand-the-test-anything-protocol/)

## Tutorials

- [test-anything ![GitHub Repo Stars](https://img.shields.io/github/stars/finnp/test-anything) ![GitHub last commit](https://img.shields.io/github/last-commit/finnp/test-anything)](https://github.com/finnp/test-anything) - Learn to test anything with TAP through an interactive workshop.

## Documentation

- [Specification](https://testanything.org/tap-version-13-specification.html)
- [Wikipedia](https://en.wikipedia.org/wiki/Test_Anything_Protocol)

## Community

- [Discuss ![GitHub Repo Stars](https://img.shields.io/github/stars/TestAnything/Specification) ![GitHub last commit](https://img.shields.io/github/last-commit/TestAnything/Specification)](https://github.com/TestAnything/Specification/issues)
- [Reddit](https://www.reddit.com/r/testanythingprotocol)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/tap)
