# Awesome Lit [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of awesome Lit resources.

[Lit ![GitHub Repo stars](https://img.shields.io/github/stars/Polymer/lit-html) ![GitHub last commit](https://img.shields.io/github/last-commit/Polymer/lit-html)](https://github.com/Polymer/lit-html) — a simple library for building fast, lightweight web components.

At its core is a boilerplate-killing component base class that provides reactive state, scoped styles, and a declarative template system that leads the pack in size, speed, and expressiveness.

## Contents

- [General resources](#general-resources)
- [Community](#community)
- [Overview](#overview)
- [Implementations](#implementations)
  - [Renderers](#renderers)
  - [LitElement Extensions](#litelement-extensions)
  - [Other](#other)
- [Components](#components)
  - [Component Libraries](#component-libraries)
  - [Individual Components](#individual-components)
- [Starter Templates](#starter-templates)
- [IDE Plugins](#ide-plugins)
- [TypeScript Plugins](#typescript-plugins)
- [Tools](#tools)
- [CDN](#cdn)
- [Static Site Generators](#static-site-generators)
- [Examples](#examples)
- [Videos](#videos)
- [Podcasts](#podcasts)
- [Blogs](#blogs)
- [Projects](#projects)
- [Inspired Solutions](#inspired-solutions)
- [Other awesome resources](#other-awesome-resources)

## General resources

- [Documentation](https://lit-html.polymer-project.org/guide)
- [GitHub repository ![GitHub Repo stars](https://img.shields.io/github/stars/Polymer/lit-html) ![GitHub last commit](https://img.shields.io/github/last-commit/Polymer/lit-html)](https://github.com/Polymer/lit-html)

## Community

- [lit-html Twitter](https://twitter.com/lit_html)
- [Slack Channel](https://www.polymer-project.org/slack-invite)

## Overview

- [Lightning-fast templates & Web Components: lit-html & LitElement](https://developers.google.com/web/updates/2019/02/lit-element-and-lit-html)

## Implementations

Sorted by creation date (oldest first).

- [lit-element](https://www.npmjs.com/package/lit-element) - Simple base class for creating fast, lightweight Web Components.
- [@gluon/gluon](https://www.npmjs.com/package/@gluon/gluon) - Lightweight library for building Web Components and applications.
- [@lit-any/core ![GitHub Repo stars](https://img.shields.io/github/stars/hypermedia-app/lit-any-core) ![GitHub last commit](https://img.shields.io/github/last-commit/hypermedia-app/lit-any-core)](https://github.com/hypermedia-app/lit-any-core) - Partials library, which uses lit-html to compose views and forms from smaller templates.
- [lit-html-element](https://www.npmjs.com/package/lit-html-element) - Base class for creating Web Components using lit-html.
- [fit-html](https://www.npmjs.com/package/fit-html) - Combination of lit-html, Web Components and Redux.
- [lit-html-brackets](https://www.npmjs.com/package/lit-html-brackets) - A lit-html extension that uses a bracket syntax similar to Angular's template syntax.
- [@littleq/element-lite](https://www.npmjs.com/package/@littleq/element-lite) - A take on using lit-html and Polymer's property mixin.
- [@popeindustries/lit-html-server](https://www.npmjs.com/package/@popeindustries/lit-html-server) - Render lit-html templates on the server as Node.js streams.
- [ullr ![GitHub Repo stars](https://img.shields.io/github/stars/aggre/ullr) ![GitHub last commit](https://img.shields.io/github/last-commit/aggre/ullr)](https://github.com/aggre/ullr) - Building Web Components with Functional Programming Using lit-html.
- [ce-decorators](https://www.npmjs.com/package/ce-decorators) - TypeScript library for building Web Components based on decorators proposal and lit-html.
- [@appnest/lit-translate](https://www.npmjs.com/package/@appnest/lit-translate) - Lightweight i18n library providing a lit-html directive.
- [haunted](https://www.npmjs.com/package/haunted) - React's Hooks API but for standard web components and hyperHTML or lit-html.
- [fuco](https://www.npmjs.com/package/fuco) - Functional component like React, but for Web Components.
- [lit-up ![GitHub Repo stars](https://img.shields.io/github/stars/klaudhaus/lit-up) ![GitHub last commit](https://img.shields.io/github/last-commit/klaudhaus/lit-up)](https://github.com/klaudhaus/lit-up) - Minimal yet scalable state pattern for reactive web apps with lit-html templates
- [lit-app ![GitHub Repo stars](https://img.shields.io/github/stars/klaudhaus/lit-app) ![GitHub last commit](https://img.shields.io/github/last-commit/klaudhaus/lit-app)](https://github.com/klaudhaus/lit-app) - Isomorphic lit-html based context for front-end apps, server-side rendering and static sites
- [perlite ![GitHub Repo stars](https://img.shields.io/github/stars/PaulMaly/perlite) ![GitHub last commit](https://img.shields.io/github/last-commit/PaulMaly/perlite)](https://github.com/PaulMaly/perlite) - Declarative way to create rich client-side widgets designed with server-side apps in mind.

### Renderers

The following libraries allow using lit-html as a renderer, while also providing alternatives such as [HyperHTML ![GitHub Repo stars](https://img.shields.io/github/stars/WebReflection/hyperHTML) ![GitHub last commit](https://img.shields.io/github/last-commit/WebReflection/hyperHTML)](https://github.com/WebReflection/hyperHTML) or JSX.

- [@corpuscule/lit-html-renderer](https://www.npmjs.com/package/@corpuscule/lit-html-renderer) - lit-html based renderer for [Corpuscule ![GitHub Repo stars](https://img.shields.io/github/stars/corpusculejs/corpuscule) ![GitHub last commit](https://img.shields.io/github/last-commit/corpusculejs/corpuscule)](https://github.com/corpusculejs/corpuscule).
- [@helikopter/render-lit-html](https://www.npmjs.com/package/@helikopter/render-lit-html) - lit-html based renderer for [Helicopter ![GitHub Repo stars](https://img.shields.io/github/stars/briancavalier/helikopter) ![GitHub last commit](https://img.shields.io/github/last-commit/briancavalier/helikopter)](https://github.com/briancavalier/helikopter).
- [@moleculejs/molecule-lit](https://www.npmjs.com/package/@moleculejs/molecule-lit) - lit-html based renderer for [Molecule ![GitHub Repo stars](https://img.shields.io/github/stars/Molecule-JS/MoleculeJS) ![GitHub last commit](https://img.shields.io/github/last-commit/Molecule-JS/MoleculeJS)](https://github.com/Molecule-JS/MoleculeJS).
- [@skatejs/element-lit-html](https://www.npmjs.com/package/@skatejs/element-lit-html) - lit-html based renderer for [SkateJS ![GitHub Repo stars](https://img.shields.io/github/stars/skatejs/skatejs) ![GitHub last commit](https://img.shields.io/github/last-commit/skatejs/skatejs)](https://github.com/skatejs/skatejs).
- [icomponent-lit](https://www.npmjs.com/package/icomponent-lit) - lit-html based renderer for [icomponent ![GitHub Repo stars](https://img.shields.io/github/stars/prasannavl/icomponent) ![GitHub last commit](https://img.shields.io/github/last-commit/prasannavl/icomponent)](https://github.com/prasannavl/icomponent).

### LitElement Extensions

These are not implementations of lit-html itself but rather community extensions of the official LitElement base class.

- [@adobe/lit-mobx](https://www.npmjs.com/package/@adobe/lit-mobx) - Mixin and base class for using mobx with LitElement.
- [@apollo-elements/lit-apollo](https://www.npmjs.com/package/@apollo-elements/lit-apollo) - LitElement integrations with Apollo GraphQL.
- [@collaborne/lit-flexbox-literals](https://www.npmjs.com/package/@collaborne/lit-flexbox-literals) - Provides LitElement CSS literals & classes ported from [@polymer/iron-flex-layout ![GitHub Repo stars](https://img.shields.io/github/stars/PolymerElements/iron-flex-layout) ![GitHub last commit](https://img.shields.io/github/last-commit/PolymerElements/iron-flex-layout)](https://github.com/PolymerElements/iron-flex-layout).
- [@morbidick/lit-element-notify](https://www.npmjs.com/package/@morbidick/lit-element-notify) - Small mixin for LitElement to get easy change events via the properties getter.
- [fluent-localize-mixin](https://www.npmjs.com/package/fluent-localize-mixin) - LitElement extension that provides easy l10n out of the box.
- [haunted-lit-element](https://www.npmjs.com/package/haunted-lit-element) - A missing connection between [Haunted](https://www.npmjs.com/package/haunted) and LitElement.
- [lit-robot](https://www.npmjs.com/package/lit-robot) - LitElement integration with [Robot](https://thisrobot.life/).
- [lit-element-state](https://www.npmjs.com/package/lit-element-state) - Simple shared app state management for LitElement.
- [nextbone](https://www.npmjs.com/package/nextbone) - Backbone re-imagined with ES classes and decorators for using with LitElement.
- [wc-context](https://www.npmjs.com/package/wc-context) - A context implementation for web components with LitElement integration.
- [lit-element-state-decoupler](https://www.npmjs.com/package/lit-element-state-decoupler) - Utility for state handling outside of the component for LitElement.

### Other

- [@feature-hub/dom](https://www.npmjs.com/package/@feature-hub/dom) - Library for building a [Feature Hub ![GitHub Repo stars](https://img.shields.io/github/stars/sinnerschrader/feature-hub) ![GitHub last commit](https://img.shields.io/github/last-commit/sinnerschrader/feature-hub)](https://github.com/sinnerschrader/feature-hub) integrator using Web Components.

## Components

### Component Libraries

- [Amber Components ![GitHub Repo stars](https://img.shields.io/github/stars/bitrockteam/amber-components) ![GitHub last commit](https://img.shields.io/github/last-commit/bitrockteam/amber-components)](https://github.com/bitrockteam/amber-components) - Web Components implementation of the Amber Design System.
- [AXA Pattern Library ![GitHub Repo stars](https://img.shields.io/github/stars/axa-ch/patterns-library) ![GitHub last commit](https://img.shields.io/github/last-commit/axa-ch/patterns-library)](https://github.com/axa-ch/patterns-library) - AXA CH UI components library built with LitElement.
- [Belle UI ![GitHub Repo stars](https://img.shields.io/github/stars/belleui/belleui) ![GitHub last commit](https://img.shields.io/github/last-commit/belleui/belleui)](https://github.com/belleui/belleui) - High quality UI library based on LitElement.
- [Blackstone UI ![GitHub Repo stars](https://img.shields.io/github/stars/kjantzer/bui) ![GitHub last commit](https://img.shields.io/github/last-commit/kjantzer/bui)](https://github.com/kjantzer/bui) - Web components for creating interfaces built with lit-html and LitElement.
- [Brightspace UI core ![GitHub Repo stars](https://img.shields.io/github/stars/BrightspaceUI/core) ![GitHub last commit](https://img.shields.io/github/last-commit/BrightspaceUI/core)](https://github.com/BrightspaceUI/core) - Collection of web components for building Brightspace applications.
- [Bronconents ![GitHub Repo stars](https://img.shields.io/github/stars/marius2502/bronconents) ![GitHub last commit](https://img.shields.io/github/last-commit/marius2502/bronconents)](https://github.com/marius2502/bronconents) - Modern Web Components built with Lit-Element.
- [Carbon Custom Elements ![GitHub Repo stars](https://img.shields.io/github/stars/carbon-design-system/carbon-custom-elements) ![GitHub last commit](https://img.shields.io/github/last-commit/carbon-design-system/carbon-custom-elements)](https://github.com/carbon-design-system/carbon-custom-elements) - Experimental variant of Carbon Design System built with Web Components.
- [Chameleon Web Components ![GitHub Repo stars](https://img.shields.io/github/stars/MaritzSTL/chameleon) ![GitHub last commit](https://img.shields.io/github/last-commit/MaritzSTL/chameleon)](https://github.com/MaritzSTL/chameleon) - Collection of framework-agnostic elements based on the Chameleon Design System.
- [Chartjs Web Components ![GitHub Repo stars](https://img.shields.io/github/stars/fsx950223/chartjs-web-components) ![GitHub last commit](https://img.shields.io/github/last-commit/fsx950223/chartjs-web-components)](https://github.com/fsx950223/chartjs-web-components) - Web components for chartjs.
- [Clever components ![GitHub Repo stars](https://img.shields.io/github/stars/CleverCloud/clever-components) ![GitHub last commit](https://img.shields.io/github/last-commit/CleverCloud/clever-components)](https://github.com/CleverCloud/clever-components) - Collection of Web Components made by Clever Cloud.
- [Iooxa ![GitHub Repo stars](https://img.shields.io/github/stars/iooxa/article) ![GitHub last commit](https://img.shields.io/github/last-commit/iooxa/article)](https://github.com/iooxa/article) - Web components for interactive scientific writing, reactive documents and explorable explanations.
- [Kor ![GitHub Repo stars](https://img.shields.io/github/stars/eduferfer/kor) ![GitHub last commit](https://img.shields.io/github/last-commit/eduferfer/kor)](https://github.com/eduferfer/kor) - User Interface Component Library based on LitElement.
- [Lion ![GitHub Repo stars](https://img.shields.io/github/stars/ing-bank/lion) ![GitHub last commit](https://img.shields.io/github/last-commit/ing-bank/lion)](https://github.com/ing-bank/lion) - Highly performant, accessible and flexible Web Components.
- [Lithium UI ![GitHub Repo stars](https://img.shields.io/github/stars/coryrylan/lithium) ![GitHub last commit](https://img.shields.io/github/last-commit/coryrylan/lithium)](https://github.com/coryrylan/lithium) - Lightweight UI Components that work everywhere.
- [LRNWebComponents ![GitHub Repo stars](https://img.shields.io/github/stars/elmsln/lrnwebcomponents) ![GitHub last commit](https://img.shields.io/github/last-commit/elmsln/lrnwebcomponents)](https://github.com/elmsln/lrnwebcomponents) - ELMS:LN produced web components for any project.
- [Material Web Components ![GitHub Repo stars](https://img.shields.io/github/stars/material-components/material-components-web-components) ![GitHub last commit](https://img.shields.io/github/last-commit/material-components/material-components-web-components)](https://github.com/material-components/material-components-web-components) - Material Design implemented as Web Components.
- [Microsoft Graph Toolkit ![GitHub Repo stars](https://img.shields.io/github/stars/microsoftgraph/microsoft-graph-toolkit) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoftgraph/microsoft-graph-toolkit)](https://github.com/microsoftgraph/microsoft-graph-toolkit) - Collection of web components for the Microsoft Graph.
- [Mutation testing elements ![GitHub Repo stars](https://img.shields.io/github/stars/stryker-mutator/mutation-testing-elements) ![GitHub last commit](https://img.shields.io/github/last-commit/stryker-mutator/mutation-testing-elements)](https://github.com/stryker-mutator/mutation-testing-elements) - A schema for mutation testing results with the web components to visualize it.
- [Spectrum Web Components ![GitHub Repo stars](https://img.shields.io/github/stars/adobe/spectrum-web-components) ![GitHub last commit](https://img.shields.io/github/last-commit/adobe/spectrum-web-components)](https://github.com/adobe/spectrum-web-components) - Adobe Spectrum design language implementation built with LitElement.
- [UI5 Web Components ![GitHub Repo stars](https://img.shields.io/github/stars/SAP/ui5-webcomponents) ![GitHub last commit](https://img.shields.io/github/last-commit/SAP/ui5-webcomponents)](https://github.com/SAP/ui5-webcomponents) - Enterprise-flavored sugar on top of native APIs!
- [VSCode-Webview-Elements ![GitHub Repo stars](https://img.shields.io/github/stars/bendera/vscode-webview-elements) ![GitHub last commit](https://img.shields.io/github/last-commit/bendera/vscode-webview-elements)](https://github.com/bendera/vscode-webview-elements) - Components for creating VSCode extensions which use the Webview API.
- [Weightless ![GitHub Repo stars](https://img.shields.io/github/stars/andreasbm/weightless) ![GitHub last commit](https://img.shields.io/github/last-commit/andreasbm/weightless)](https://github.com/andreasbm/weightless) - High quality web components with a small footprint.
- [Wired Elements ![GitHub Repo stars](https://img.shields.io/github/stars/wiredjs/wired-elements) ![GitHub last commit](https://img.shields.io/github/last-commit/wiredjs/wired-elements)](https://github.com/wiredjs/wired-elements) - Collection of elements that appear hand drawn.
- [Wokwi Elements ![GitHub Repo stars](https://img.shields.io/github/stars/wokwi/wokwi-elements) ![GitHub last commit](https://img.shields.io/github/last-commit/wokwi/wokwi-elements)](https://github.com/wokwi/wokwi-elements) - Web Components for Arduino and various electronic parts.

### Individual Components

- [`<api-viewer>` ![GitHub Repo stars](https://img.shields.io/github/stars/web-padawan/api-viewer-element) ![GitHub last commit](https://img.shields.io/github/last-commit/web-padawan/api-viewer-element)](https://github.com/web-padawan/api-viewer-element) - API documentation and live playground for Web Components.
- [`<app-datepicker>` ![GitHub Repo stars](https://img.shields.io/github/stars/motss/app-datepicker) ![GitHub last commit](https://img.shields.io/github/last-commit/motss/app-datepicker)](https://github.com/motss/app-datepicker) - Datepicker element built with LitElement and Material Design 2.
- [`<burgton-button>` ![GitHub Repo stars](https://img.shields.io/github/stars/boguz/burgton-button) ![GitHub last commit](https://img.shields.io/github/last-commit/boguz/burgton-button)](https://github.com/boguz/burgton-button) - Simple to use, customizable and accessible burger-button element.
- [`<code-block>` ![GitHub Repo stars](https://img.shields.io/github/stars/justinribeiro/code-block) ![GitHub last commit](https://img.shields.io/github/last-commit/justinribeiro/code-block)](https://github.com/justinribeiro/code-block) - Web component that displays colorfully formatted code with Prism.js and LitElement.
- [`<codesandbox-button>` ![GitHub Repo stars](https://img.shields.io/github/stars/bennypowers/codesandbox-button) ![GitHub last commit](https://img.shields.io/github/last-commit/bennypowers/codesandbox-button)](https://github.com/bennypowers/codesandbox-button) - Custom Element that shows a CodeSandbox demo when you click on it.
- [`<dile-modal>` ![GitHub Repo stars](https://img.shields.io/github/stars/Polydile/dile-modal) ![GitHub last commit](https://img.shields.io/github/last-commit/Polydile/dile-modal)](https://github.com/Polydile/dile-modal) - Web Component to implement a modal box, based on LitElement.
- [`<erd-editor>` ![GitHub Repo stars](https://img.shields.io/github/stars/vuerd/vuerd) ![GitHub last commit](https://img.shields.io/github/last-commit/vuerd/vuerd)](https://github.com/vuerd/vuerd) - ERD Editor element database modeling tool built with LitElement
- [`<granite-qrcode-generator>` ![GitHub Repo stars](https://img.shields.io/github/stars/LostInBrittany/granite-qrcode-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/LostInBrittany/granite-qrcode-generator)](https://github.com/LostInBrittany/granite-qrcode-generator) - Custom element to generate and render QR Codes, using qr.js library.
- [`<lit-datatable>` ![GitHub Repo stars](https://img.shields.io/github/stars/DoubleTrade/lit-datatable) ![GitHub last commit](https://img.shields.io/github/last-commit/DoubleTrade/lit-datatable)](https://github.com/DoubleTrade/lit-datatable) - Material Design implementation of a data table, powered by LitElement.
- [`<lottie-player>` ![GitHub Repo stars](https://img.shields.io/github/stars/LottieFiles/lottie-player) ![GitHub last commit](https://img.shields.io/github/last-commit/LottieFiles/lottie-player)](https://github.com/LottieFiles/lottie-player) - Web Component for easily embedding and playing Lottie animations.
- [`<model-viewer>` ![GitHub Repo stars](https://img.shields.io/github/stars/GoogleWebComponents/model-viewer) ![GitHub last commit](https://img.shields.io/github/last-commit/GoogleWebComponents/model-viewer)](https://github.com/GoogleWebComponents/model-viewer) - A web component for rendering interactive 3D models.
- [`<rapi-doc>` ![GitHub Repo stars](https://img.shields.io/github/stars/mrin9/RapiDoc) ![GitHub last commit](https://img.shields.io/github/last-commit/mrin9/RapiDoc)](https://github.com/mrin9/RapiDoc) - Web Component to view OpenAPI 3.0 & Swagger 2.0 Spec.
- [`<stl-part-viewer>` ![GitHub Repo stars](https://img.shields.io/github/stars/justinribeiro/stl-part-viewer) ![GitHub last commit](https://img.shields.io/github/last-commit/justinribeiro/stl-part-viewer)](https://github.com/justinribeiro/stl-part-viewer) - LitElement web component that utilizes Three.js to display an STL model file.

## Starter Templates

- [open-wc-starter-app ![GitHub Repo stars](https://img.shields.io/github/stars/open-wc/open-wc-starter-app) ![GitHub last commit](https://img.shields.io/github/last-commit/open-wc/open-wc-starter-app)](https://github.com/open-wc/open-wc-starter-app) - Starter app based on Open Web Components Recommendations.
- [generator-lit-element-next ![GitHub Repo stars](https://img.shields.io/github/stars/motss/generator-lit-element-next) ![GitHub last commit](https://img.shields.io/github/last-commit/motss/generator-lit-element-next)](https://github.com/motss/generator-lit-element-next) - Generator for developing your next custom element with latest LitElement in TypeScript.
- [pwa-starter ![GitHub Repo stars](https://img.shields.io/github/stars/pwa-builder/pwa-starter) ![GitHub last commit](https://img.shields.io/github/last-commit/pwa-builder/pwa-starter)](https://github.com/pwa-builder/pwa-starter) - LitElement edition of the PWABuilder pwa-starter.
- [@rxdi/starter-client-lit-html ![GitHub Repo stars](https://img.shields.io/github/stars/rxdi/starter-client-side-lit-html) ![GitHub last commit](https://img.shields.io/github/last-commit/rxdi/starter-client-side-lit-html)](https://github.com/rxdi/starter-client-side-lit-html) - Client side application build with `@rxdi`, lit-html, GraphQL, dependency injection.

## IDE Plugins

- [vscode-lit-html ![GitHub Repo stars](https://img.shields.io/github/stars/mjbvz/vscode-lit-html) ![GitHub last commit](https://img.shields.io/github/last-commit/mjbvz/vscode-lit-html)](https://github.com/mjbvz/vscode-lit-html) - Syntax highlighting and IntelliSense for lit-html template strings.
- [vscode-lit-plugin ![GitHub Repo stars](https://img.shields.io/github/stars/runem/lit-analyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/runem/lit-analyzer)](https://github.com/runem/lit-analyzer/tree/master/packages/vscode-lit-plugin) - Syntax highlighting, type checking and code completion for lit-html.
- [es6-string-html ![GitHub Repo stars](https://img.shields.io/github/stars/mydesireiscoma/es6-string-html) ![GitHub last commit](https://img.shields.io/github/last-commit/mydesireiscoma/es6-string-html)](https://github.com/mydesireiscoma/es6-string-html) - VSCode extension which provides syntax highlighting for HTML in ES6 multiline strings.
- [vim-html-template-literals ![GitHub Repo stars](https://img.shields.io/github/stars/jonsmithers/vim-html-template-literals) ![GitHub last commit](https://img.shields.io/github/last-commit/jonsmithers/vim-html-template-literals)](https://github.com/jonsmithers/vim-html-template-literals) - Syntax highlighting and indentation for lit-html.
- [lit-web-components-vscode-extension-pack ![GitHub Repo stars](https://img.shields.io/github/stars/justinribeiro/lit-web-components-vscode-extension-pack) ![GitHub last commit](https://img.shields.io/github/last-commit/justinribeiro/lit-web-components-vscode-extension-pack)](https://github.com/justinribeiro/lit-web-components-vscode-extension-pack) - A set of VS Code extensions useful for developing LitElement Web Components.

## TypeScript Plugins

- [ts-lit-plugin ![GitHub Repo stars](https://img.shields.io/github/stars/runem/lit-analyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/runem/lit-analyzer)](https://github.com/runem/lit-analyzer/tree/master/packages/ts-lit-plugin) - Plugin that adds type checking and code completion for lit-html. Used by `vscode-lit-plugin`.
- [typescript-lit-html-plugin ![GitHub Repo stars](https://img.shields.io/github/stars/Microsoft/typescript-lit-html-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/typescript-lit-html-plugin)](https://github.com/Microsoft/typescript-lit-html-plugin) - TypeScript server plugin that adds IntelliSense for lit-html. Used by `vscode-lit-html`.

## Tools

- [babel-plugin-template-html-minifier ![GitHub Repo stars](https://img.shields.io/github/stars/cfware/babel-plugin-template-html-minifier) ![GitHub last commit](https://img.shields.io/github/last-commit/cfware/babel-plugin-template-html-minifier)](https://github.com/cfware/babel-plugin-template-html-minifier) - Babel plugin for minifying HTML in tagged template strings.
- [eslint-plugin-lit ![GitHub Repo stars](https://img.shields.io/github/stars/43081j/eslint-plugin-lit) ![GitHub last commit](https://img.shields.io/github/last-commit/43081j/eslint-plugin-lit)](https://github.com/43081j/eslint-plugin-lit) - ESLint plugin for lit-html template strings.
- [eslint-plugin-lit-a11y](https://www.npmjs.com/package/eslint-plugin-lit-a11y) - Accessibility linting plugin for lit-html
- [lit-analyzer ![GitHub Repo stars](https://img.shields.io/github/stars/runem/lit-analyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/runem/lit-analyzer)](https://github.com/runem/lit-analyzer/tree/master/packages/lit-analyzer) - CLI that type checks bindings in lit-html templates.
- [rollup-plugin-minify-html-literals ![GitHub Repo stars](https://img.shields.io/github/stars/asyncLiz/rollup-plugin-minify-html-literals) ![GitHub last commit](https://img.shields.io/github/last-commit/asyncLiz/rollup-plugin-minify-html-literals)](https://github.com/asyncLiz/rollup-plugin-minify-html-literals) - Rollup plugin to minify HTML in tagged template strings.
- [rollup-plugin-inline-lit-element ![GitHub Repo stars](https://img.shields.io/github/stars/aelbore/rollup-plugin-inline-lit-element) ![GitHub last commit](https://img.shields.io/github/last-commit/aelbore/rollup-plugin-inline-lit-element)](https://github.com/aelbore/rollup-plugin-inline-lit-element) - Rollup plugin to inline external styles in LitElement and transpile decorators.
- [rollup-plugin-lit-css ![GitHub Repo stars](https://img.shields.io/github/stars/bennypowers/rollup-plugin-lit-css) ![GitHub last commit](https://img.shields.io/github/last-commit/bennypowers/rollup-plugin-lit-css)](https://github.com/bennypowers/rollup-plugin-lit-css) - Rollup plugin to import CSS files as LitElement tagged `css` template strings.
- [rollup-plugin-postcss-lit ![GitHub Repo stars](https://img.shields.io/github/stars/umbopepato/rollup-plugin-postcss-lit) ![GitHub last commit](https://img.shields.io/github/last-commit/umbopepato/rollup-plugin-postcss-lit)](https://github.com/umbopepato/rollup-plugin-postcss-lit) - Rollup plugin to load PostCSS-processed stylesheets in LitElement components.
- [lit-loader ![GitHub Repo stars](https://img.shields.io/github/stars/PolymerX/lit-loader) ![GitHub last commit](https://img.shields.io/github/last-commit/PolymerX/lit-loader)](https://github.com/PolymerX/lit-loader) - LitElement Single File Component loader for Webpack.
- [Nutmeg ![GitHub Repo stars](https://img.shields.io/github/stars/abraham/nutmeg-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/abraham/nutmeg-cli)](https://github.com/abraham/nutmeg-cli) - CLI tool to build, test, and publish vanilla Web Components with a little spice.
- [open-wc](https://github.com/open-wc) - Set of recommendations to help you generate, test, lint, demo, and publish Web Components.
- [web-components-codemods ![GitHub Repo stars](https://img.shields.io/github/stars/kcmr/web-components-codemods) ![GitHub last commit](https://img.shields.io/github/last-commit/kcmr/web-components-codemods)](https://github.com/kcmr/web-components-codemods) - Codemods for Web Components compatible with lit-html template literals.

## CDN

The following content delivery networks provide ES module versions of lit-html and LitElement:

- [unpkg.com](https://unpkg.com/)
  - [lit-html](https://unpkg.com/lit-html?module)
  - [lit-element](https://unpkg.com/lit-element?module)
- [Pika CDN](https://www.pika.dev/cdn)
  - [lit-html](https://cdn.pika.dev/lit-html)
  - [lit-element](https://cdn.pika.dev/lit-element)

**Note on using CDN**

1. lit-html directives [might not work ![GitHub Repo stars](https://img.shields.io/github/stars/Polymer/lit-element) ![GitHub last commit](https://img.shields.io/github/last-commit/Polymer/lit-element)](https://github.com/Polymer/lit-element/issues/603#issuecomment-501528498) with LitElement when using Pika CDN.
2. See [this issue ![GitHub Repo stars](https://img.shields.io/github/stars/Polymer/lit-element) ![GitHub last commit](https://img.shields.io/github/last-commit/Polymer/lit-element)](https://github.com/Polymer/lit-element/issues/603) where the static build for CDN distribution is discussed.

## Static Site Generators

- [Greenwood ![GitHub Repo stars](https://img.shields.io/github/stars/ProjectEvergreen/greenwood) ![GitHub last commit](https://img.shields.io/github/last-commit/ProjectEvergreen/greenwood)](https://github.com/ProjectEvergreen/greenwood) - Modern and performant static site generator supporting Web Components based development.
- [Hydrogen ![GitHub Repo stars](https://img.shields.io/github/stars/ShailenNaidoo/hydrogen) ![GitHub last commit](https://img.shields.io/github/last-commit/ShailenNaidoo/hydrogen)](https://github.com/ShailenNaidoo/hydrogen) - Static-site generator built with TypeScript, which uses templating inspired by lit-html.

## Examples

- [lit-demos ![GitHub Repo stars](https://img.shields.io/github/stars/open-wc/lit-demos) ![GitHub last commit](https://img.shields.io/github/last-commit/open-wc/lit-demos)](https://github.com/open-wc/lit-demos) - Examples for using the lit-html library and LitElement base class.
- [lit-html workshop ![GitHub Repo stars](https://img.shields.io/github/stars/LarsDenBakker/lit-html-workshop) ![GitHub last commit](https://img.shields.io/github/last-commit/LarsDenBakker/lit-html-workshop)](https://github.com/LarsDenBakker/lit-html-workshop)

## Videos

- [Efficient, Expressive, and Extensible HTML Templates (Polymer Summit 2017)](https://www.youtube.com/watch?v=ruql541T7gc)
- [lit-HTML (Chrome Dev Summit 2017)](https://www.youtube.com/watch?v=Io6JjgckHbg)
- [VDOM vs lit-html - HTTP203](https://www.youtube.com/watch?v=uCHZJy2n8Qs)
- [Declarative Reactive Web Components with Justin Fagnani](https://www.youtube.com/watch?v=9FB0GSOAESo)
- [Building a Complex Application with Web Components and LitElement](https://www.youtube.com/watch?v=x9YDQUJx2uw)

## Podcasts

- [The Web Platform Podcast 159: lit-html - HTML Templates via JavaScript Template Literals](https://thewebplatformpodcast.com/159-lithtml-html-templates-via-javascript-template-literals) -
An episode with the lit-html creator Justin Fagnani.
- [ShopTalk Show 348: Getting lit-html with Justin Fagnani](https://shoptalkshow.com/episodes/348/) - Another episode with Justin Fagnani as a guest.

## Blogs

- [A gentle introduction to lit-html](https://dev.to/julcasans/a-gentle-introduction-to-lit-html-3d74)
- [lit-html templates from zero to hero](https://dev.to/julcasans/lit-html-templates-from-zero-to-hero-2afm)
- [lit-html Part 1 - A solution for DOM management in web components](https://terodox.tech/handling-web-component-markup-with-lit-html/)
- [lit-html Part 2 - Working with attributes and properties](https://terodox.tech/lit-html-part-2/)
- [Getting started with LitElement and TypeScript](https://labs.thisdot.co/blog/getting-started-with-litelement-and-typescript)
- [Routing Management with LitElement and TypeScript](https://labs.thisdot.co/blog/routing-management-with-litelement)
- [Navigation Lifecycle using Vaadin Router, LitElement and TypeScript](https://labs.thisdot.co/blog/navigation-lifecycle-using-vaadin-router-litelement-and-typescript)
- [Recreating The Arduino Pushbutton Using SVG And &lt;lit-element&gt;](https://www.smashingmagazine.com/2020/01/recreating-arduino-pushbutton-svg/)
- [Building a chat with Twilio, lit-html, Parcel and TypeScript](https://dev.to/dkundel/building-a-chat-with-twilio-lit-html-parcel-and-typescript-1jo1)
- [Making a fullstack CRUD app with LitHTML, Redux, Express, and Webpack](https://medium.com/@pascalschilp/making-a-fullstack-crud-app-with-lithtml-redux-express-and-webpack-fe7e5cf8b3ef)
- [The future of Polymer & lit-html](https://43081j.com/2018/08/future-of-polymer)
- [A night experimenting with Lit-HTML](https://lucamezzalira.com/2018/08/14/a-night-experimenting-with-lit-html/)
- [LitElement To Do App](https://medium.com/@westbrook/litelement-to-do-app-1e08a31707a4)
- [A new, lean way of creating web apps](https://medium.com/@kennethrohde/a-new-lean-way-of-creating-web-apps-88a49c5b87ec)
- [LitElement with Rollup, Babel & Karma](https://43081j.com/2018/09/polymer-lit-with-rollup)
- [Let's Build Web Components! Part 5: LitElement](https://dev.to/bennypowers/lets-build-web-components-part-5-litelement-906)
- [Render HTML with Vanilla JavaScript and lit-html](https://dev.to/azure/too-hard-too-soft-just-right-rendering-html-with-lit-html-1km8)
- [Updating blog-pwa from Polymer to LitElement, Workbox, and Rollup](https://justinribeiro.com/chronicle/2019/04/11/updating-blog-pwa-from-polymer-to-litelement-workbox-and-rollup/)
- [Here's a minimalist no-frills Redux Toolkit & LitElement example](https://dev.to/jdvivar/here-s-a-minimalist-no-frills-redux-toolkit-litelement-example-1j91)

## Projects

<table>
  <tr>
    <td>Name</td>
    <td>URL</td>
    <td>Source</td>
  </tr>
  <tr>
    <td>Create Social Images</td>
    <td>https://createsocialimages.com</td>
    <td><a href="https://github.com/pshihn/csi">Source</a></td>
  </tr>
  <tr>
    <td>DevWeb Content Firehose</td>
    <td>https://devwebfeed.appspot.com</td>
    <td><a href="https://github.com/GoogleChromeLabs/devwebfeed">Source</a></td>
  </tr>
  <tr>
    <td>rx-metronome</td>
    <td>https://rx-metronome.web.app</td>
    <td><a href="https://github.com/ydubinskyi/rx-metronome">Source</a></td>
  </tr>
  <tr>
    <td>Scandisk</td>
    <td>https://manzdev.github.io/scandisk-2.0/</td>
    <td><a href="https://github.com/ManzDev/scandisk-2.0">Source</a></td>
  </tr>
  <tr>
    <td>Web Skills</td>
    <td>https://andreasbm.github.io/web-skills/</td>
    <td><a href="https://github.com/andreasbm/web-skills">Source</a></td>
  </tr>
</table>

## Inspired Solutions

These libraries do not depend on lit-html, but are inspired by some of its concepts. They use `html` tagged
template literal, and leverage the benefits of the same [IDE Plugins](#ide-plugins) for syntax highlighting.

- [htm ![GitHub Repo stars](https://img.shields.io/github/stars/developit/htm) ![GitHub last commit](https://img.shields.io/github/last-commit/developit/htm)](https://github.com/developit/htm) - Hyperscript Tagged Markup: JSX alternative using standard tagged templates, with compiler support.
- [hybrids ![GitHub Repo stars](https://img.shields.io/github/stars/hybridsjs/hybrids) ![GitHub last commit](https://img.shields.io/github/last-commit/hybridsjs/hybrids)](https://github.com/hybridsjs/hybrids) - UI library for creating Web Components with simple and functional API.
- [lit-ntml ![GitHub Repo stars](https://img.shields.io/github/stars/motss/lit-ntml) ![GitHub last commit](https://img.shields.io/github/last-commit/motss/lit-ntml)](https://github.com/motss/lit-ntml) - Lightweight and modern templating for SSR in Node.js, inspired by lit-html.
- [lite-html ![GitHub Repo stars](https://img.shields.io/github/stars/ruphin/lite-html) ![GitHub last commit](https://img.shields.io/github/last-commit/ruphin/lite-html)](https://github.com/ruphin/lite-html) - A modern replacement for VirtualDOM rendering engines.
- [modulor-html ![GitHub Repo stars](https://img.shields.io/github/stars/modulor-js/modulor-html) ![GitHub last commit](https://img.shields.io/github/last-commit/modulor-js/modulor-html)](https://github.com/modulor-js/modulor-html) - Missing template engine for Web Components.
- [nanohtml ![GitHub Repo stars](https://img.shields.io/github/stars/choojs/nanohtml) ![GitHub last commit](https://img.shields.io/github/last-commit/choojs/nanohtml)](https://github.com/choojs/nanohtml) - HTML template strings for the browser with support for Server Side Rendering in Node.
- [picohtml ![GitHub Repo stars](https://img.shields.io/github/stars/stepanvanzuriak/picohtml) ![GitHub last commit](https://img.shields.io/github/last-commit/stepanvanzuriak/picohtml)](https://github.com/stepanvanzuriak/picohtml) - Powerfully ~2kB (gzip) HTML template strings.
- [tiny-lit ![GitHub Repo stars](https://img.shields.io/github/stars/alenaksu/tiny-lit) ![GitHub last commit](https://img.shields.io/github/last-commit/alenaksu/tiny-lit)](https://github.com/alenaksu/tiny-lit) - Library for building user interfaces using template literals.

## Other awesome resources

**If you want more awesome resources, check the [awesome ![GitHub Repo stars](https://img.shields.io/github/stars/sindresorhus/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome)](https://github.com/sindresorhus/awesome) list!**

---

## License

[![CC0](https://upload.wikimedia.org/wikipedia/commons/6/69/CC0_button.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
