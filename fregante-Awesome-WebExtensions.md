# Awesome WebExtensions [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of awesome resources for [WebExtensions](https://developer.mozilla.org/en-US/Add-ons/WebExtensions) development.

WebExtensions are a cross-browser system for developing browser add-ons. To a large extent the system is compatible with the [extension API](https://developer.chrome.com/extensions) supported by Google Chrome and Opera. Extensions written for these browsers will in most cases run in Firefox or [Microsoft Edge](https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/extensions/) with just [a few changes](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Porting_a_Google_Chrome_extension).

## Contents

- [Getting started](#getting-started)
- [Community](#community)
- [Libraries and Frameworks](#libraries-and-frameworks)
- [Tools](#tools)
- [Testing](#testing)
- [Boilerplates](#boilerplates)
- [Sample Extensions](#sample-extensions)

## Getting started

- [Chrome Extensions documentation](https://developer.chrome.com/extensions) - Documentation for the original Chrome extension model.
- [Chrome Extensions API](https://developer.chrome.com/extensions/api_index) - Comprehensive documentation on the original API provided by Chrome.
- [Mozilla's WebExtensions documentation](https://developer.mozilla.org/en-US/Add-ons/WebExtensions) - MDN wiki for the WebExtensions API.
- [Browser support for WebExtensions](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs) - Compatibility table for Chrome, Edge, Firefox, and Opera.
- [Microsoft Edge API support](https://docs.microsoft.com/en-us/microsoft-edge/extensions/api-support/extension-api-roadmap) - Detailed WebExtensions support for Edge.
- [Safari Extensions documentation](https://developer.apple.com/safari/extensions/) - Developer documentation on building Safari extensions. Technically not WebExtensions, the API is completely different.
- [Opera API support](https://dev.opera.com/extensions/apis/) - Detailed WebExtensions support for Opera.
- [Porting Chrome Extensions to Firefox](https://hacks.mozilla.org/2015/10/porting-chrome-extensions-to-firefox-with-webextensions/) - Guide to prepare, install, and debug Chrome extensions to be ported in Firefox.
- [Browser Extension Standard](https://browserext.github.io/browserext/) - Standard for the API, supported by Mozilla, Opera and Microsoft.

## Community

- [Google Groups](https://groups.google.com/a/chromium.org/forum/#!forum/chromium-extensions) - Discussions.
- [Mozilla Discourse](https://discourse.mozilla.org/c/add-ons) - Discussions.
- [`#addons:mozilla.org`](https://matrix.to/#/#addons:mozilla.org) - Matrix channel by Mozilla.
- [`google-chrome-extension` tag on Stack Overflow](https://stackoverflow.com/questions/tagged/google-chrome-extension) - Relevant questions.
- [`firefox-webextensions` tag on Stack Overflow](https://stackoverflow.com/questions/tagged/firefox-webextensions) - Relevant questions.
- [`microsoft-edge-extension` tag on Stack Overflow](https://stackoverflow.com/questions/tagged/microsoft-edge-extension) - Relevant questions.

## Libraries and Frameworks

Code meant become part of the extension.

- [webext-options-sync ![GitHub Repo stars](https://img.shields.io/github/stars/fregante/webext-options-sync) ![GitHub last commit](https://img.shields.io/github/last-commit/fregante/webext-options-sync)](https://github.com/fregante/webext-options-sync) - Helps you manage and autosave your extension's options.
- [webext-storage-cache ![GitHub Repo stars](https://img.shields.io/github/stars/fregante/webext-storage-cache) ![GitHub last commit](https://img.shields.io/github/last-commit/fregante/webext-storage-cache)](https://github.com/fregante/webext-storage-cache) - Map-like promised cache storage with expiration.
- [webext-dynamic-content-scripts ![GitHub Repo stars](https://img.shields.io/github/stars/fregante/webext-dynamic-content-scripts) ![GitHub last commit](https://img.shields.io/github/last-commit/fregante/webext-dynamic-content-scripts)](https://github.com/fregante/webext-dynamic-content-scripts) - Automatically inject your `content_scripts` on custom domains.
- [mozilla/webextension-polyfill ![GitHub Repo stars](https://img.shields.io/github/stars/mozilla/webextension-polyfill) ![GitHub last commit](https://img.shields.io/github/last-commit/mozilla/webextension-polyfill)](https://github.com/mozilla/webextension-polyfill) - Polyfill to support the standardized promise based API in the `browser` namespace.
- [@types/firefox-webext-browser](https://www.npmjs.com/package/@types/firefox-webext-browser) - Supplies TypeScript types for the `browser` namespace.
- [redux-webext ![GitHub Repo stars](https://img.shields.io/github/stars/ivantsov/redux-webext) ![GitHub last commit](https://img.shields.io/github/last-commit/ivantsov/redux-webext)](https://github.com/ivantsov/redux-webext) - Uses [redux ![GitHub Repo stars](https://img.shields.io/github/stars/reactjs/redux) ![GitHub last commit](https://img.shields.io/github/last-commit/reactjs/redux)](https://github.com/reactjs/redux) for managing the state of your WebExtension.

## Tools

Apps that help you manage your extensions.

- [Chrome Webstore Upload ![GitHub Repo stars](https://img.shields.io/github/stars/DrewML/chrome-webstore-upload-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/DrewML/chrome-webstore-upload-cli)](https://github.com/DrewML/chrome-webstore-upload-cli) - Upload the extension to the Chrome Web Store via cli (or on Travis, automatically).
- [mozilla/web-ext ![GitHub Repo stars](https://img.shields.io/github/stars/mozilla/web-ext) ![GitHub last commit](https://img.shields.io/github/last-commit/mozilla/web-ext)](https://github.com/mozilla/web-ext) - Command line tool to help build, run, and test WebExtensions.
- [chromepet ![GitHub Repo stars](https://img.shields.io/github/stars/ZenHubIO/chromepet) ![GitHub last commit](https://img.shields.io/github/last-commit/ZenHubIO/chromepet)](https://github.com/ZenHubIO/chromepet) - Get notified when your new version has been published.
- [chrome-ext-downloader ![GitHub Repo stars](https://img.shields.io/github/stars/jiripospisil/chrome-ext-downloader) ![GitHub last commit](https://img.shields.io/github/last-commit/jiripospisil/chrome-ext-downloader)](https://github.com/jiripospisil/chrome-ext-downloader) - Download any extension on Chrome Web Store to see how they do it.
- [chrome-store-api ![GitHub Repo stars](https://img.shields.io/github/stars/acvetkov/chrome-store-api) ![GitHub last commit](https://img.shields.io/github/last-commit/acvetkov/chrome-store-api)](https://github.com/acvetkov/chrome-store-api) - Chrome Web Store API wrapper.
- [Chrome extension source viewer ![GitHub Repo stars](https://img.shields.io/github/stars/Rob--W/crxviewer) ![GitHub last commit](https://img.shields.io/github/last-commit/Rob--W/crxviewer)](https://github.com/Rob--W/crxviewer) - WebExtension to view source code of extensions directly on the store.
- [@wext/shipit ![GitHub Repo stars](https://img.shields.io/github/stars/LinusU/wext-shipit) ![GitHub last commit](https://img.shields.io/github/last-commit/LinusU/wext-shipit)](https://github.com/LinusU/wext-shipit) - Tool to automatically publish to Chrome Web Store, Mozilla Addons and Opera Addons.
- [wext-manifest-loader ![GitHub Repo stars](https://img.shields.io/github/stars/abhijithvijayan/wext-manifest-loader) ![GitHub last commit](https://img.shields.io/github/last-commit/abhijithvijayan/wext-manifest-loader)](https://github.com/abhijithvijayan/wext-manifest-loader) - Webpack loader that lets you specify `manifest.json` properties to appear only in specific browsers.
- [webextension-manifest-loader ![GitHub Repo stars](https://img.shields.io/github/stars/jsmnbom/webextension-manifest-loader) ![GitHub last commit](https://img.shields.io/github/last-commit/jsmnbom/webextension-manifest-loader)](https://github.com/jsmnbom/webextension-manifest-loader) - Webpack loader that loads browser tailored manifest.json. It also imports all importable properties, allowing you to have 'manifest.json' as your only webpack entry point.

## Testing

- [sinon-chrome ![GitHub Repo stars](https://img.shields.io/github/stars/acvetkov/sinon-chrome) ![GitHub last commit](https://img.shields.io/github/last-commit/acvetkov/sinon-chrome)](https://github.com/acvetkov/sinon-chrome) - Mocks the Chrome Extensions API for testing.
- [addons-validator ![GitHub Repo stars](https://img.shields.io/github/stars/mozilla/addons-validator) ![GitHub last commit](https://img.shields.io/github/last-commit/mozilla/addons-validator)](https://github.com/mozilla/addons-validator) - Validate an extension against Mozilla's guidelines.
- [webextensions-jsdom ![GitHub Repo stars](https://img.shields.io/github/stars/stoically/webextensions-jsdom) ![GitHub last commit](https://img.shields.io/github/last-commit/stoically/webextensions-jsdom)](https://github.com/stoically/webextensions-jsdom) - Load popup, sidebar and background with JSDOM based on the manifest.json.
- [webextensions-api-fake ![GitHub Repo stars](https://img.shields.io/github/stars/stoically/webextensions-api-fake) ![GitHub last commit](https://img.shields.io/github/last-commit/stoically/webextensions-api-fake)](https://github.com/stoically/webextensions-api-fake) - In-memory WebExtensions API Fake Implementation (includes TypeScript types).
- [webextensions-api-mock ![GitHub Repo stars](https://img.shields.io/github/stars/stoically/webextensions-api-mock) ![GitHub last commit](https://img.shields.io/github/last-commit/stoically/webextensions-api-mock)](https://github.com/stoically/webextensions-api-mock) - WebExtensions API as sinon stubs (includes TypeScript types).
- [webextensions-schema ![GitHub Repo stars](https://img.shields.io/github/stars/stoically/webextensions-schema) ![GitHub last commit](https://img.shields.io/github/last-commit/stoically/webextensions-schema)](https://github.com/stoically/webextensions-schema) - Programmatically consume the WebExtensions Schema JSON files.

## Boilerplates

- [browser-extension-template ![GitHub Repo stars](https://img.shields.io/github/stars/notlmn/browser-extension-template) ![GitHub last commit](https://img.shields.io/github/last-commit/notlmn/browser-extension-template)](https://github.com/notlmn/browser-extension-template) - Barebones boilerplate with webpack, options handler and auto-publishing.
- [create-webextension ![GitHub Repo stars](https://img.shields.io/github/stars/rpl/create-webextension) ![GitHub last commit](https://img.shields.io/github/last-commit/rpl/create-webextension)](https://github.com/rpl/create-webextension) - Yarn WebExtension generator.
- [extensionizr.com](https://extensionizr.com) - Web UI that helps you create an initial configuration and files.
- [generator-web-extension ![GitHub Repo stars](https://img.shields.io/github/stars/HaNdTriX/generator-web-extension) ![GitHub last commit](https://img.shields.io/github/last-commit/HaNdTriX/generator-web-extension)](https://github.com/HaNdTriX/generator-web-extension) - WebExtension generator that creates everything you need to get started with cross-browser web-extension development.
- [vue-web-extension ![GitHub Repo stars](https://img.shields.io/github/stars/Kocal/vue-web-extension) ![GitHub last commit](https://img.shields.io/github/last-commit/Kocal/vue-web-extension)](https://github.com/Kocal/vue-web-extension) - A Vue CLI 3+ preset for quickly starting a web extension with Vue, Babel, ESLint and more!

## Sample Extensions

These are simple and modern WebExtensions repositories that could help you figure out where pieces go, including automatic deployment via Travis CI.

- [npmhub ![GitHub Repo stars](https://img.shields.io/github/stars/npmhub/npmhub) ![GitHub last commit](https://img.shields.io/github/last-commit/npmhub/npmhub)](https://github.com/npmhub/npmhub)
- [Hide Files on GitHub ![GitHub Repo stars](https://img.shields.io/github/stars/sindresorhus/hide-files-on-github) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/hide-files-on-github)](https://github.com/sindresorhus/hide-files-on-github)
- [mdn/webextension-examples ![GitHub Repo stars](https://img.shields.io/github/stars/mdn/webextensions-examples) ![GitHub last commit](https://img.shields.io/github/last-commit/mdn/webextensions-examples)](https://github.com/mdn/webextensions-examples) - Various example extensions curated for the MDN documentation.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Federico Brigante](https://bfred.it) has waived all copyright and related or neighboring rights to this work.
