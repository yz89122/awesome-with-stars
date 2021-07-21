# Awesome ESLint [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="https://eslint.org/assets/img/logo.svg" width="160" align="right" alt="eslint">](http://eslint.org)

> A list of awesome ESLint configs, plugins, etc.

If you want to contribute, please read the [contribution guidelines](contributing.md).

<!--lint disable double-link-->

## Contents

- [Configs](#configs)
  - [Configs by Well-Known Companies/Organizations](#configs-by-well-known-companiesorganizations)
  - [Other Prominent Configs (100 stars or so)](#other-prominent-configs-100-stars-or-so)
  - [Other Configs](#other-configs)
- [Preconfigured Configs with ESLint Set up](#preconfigured-configs-with-eslint-set-up)
- [Plugins](#plugins)
  - [Code Quality](#code-quality)
  - [Compatiblity](#compatiblity)
  - [CSS in JS](#css-in-js)
  - [Deprecation](#deprecation)
  - [Embedded](#embedded)
  - [Frameworks](#frameworks)
  - [Languages](#languages)
  - [Libraries](#libraries)
  - [Misc](#misc)
  - [Practices](#practices)
  - [Performance](#performance)
  - [Security](#security)
  - [Style](#style)
  - [Testing Tools](#testing-tools)
- [Parsers](#parsers)
- [Formatters](#formatters)
- [Globals](#globals)
- [Tools](#tools)
- [Developing for ESLint](#developing-for-eslint)
- [Tutorials](#tutorials)
- [Installation and Setup](#installation-and-setup)

## Configs

### Configs by Well-Known Companies/Organizations

- [Airbnb ![GitHub Repo stars](https://img.shields.io/github/stars/airbnb/javascript) ![GitHub last commit](https://img.shields.io/github/last-commit/airbnb/javascript)](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Shareable config for [Airbnb's style guide ![GitHub Repo stars](https://img.shields.io/github/stars/airbnb/javascript) ![GitHub last commit](https://img.shields.io/github/last-commit/airbnb/javascript)](https://github.com/airbnb/javascript).
- [Airbnb-babel ![GitHub Repo stars](https://img.shields.io/github/stars/davidjbradshaw/eslint-config-airbnb-babel) ![GitHub last commit](https://img.shields.io/github/last-commit/davidjbradshaw/eslint-config-airbnb-babel)](https://github.com/davidjbradshaw/eslint-config-airbnb-babel) - Airbnb's ESLint config with Babel Support.
- [Airbnb-typescript ![GitHub Repo stars](https://img.shields.io/github/stars/iamturns/eslint-config-airbnb-typescript) ![GitHub last commit](https://img.shields.io/github/last-commit/iamturns/eslint-config-airbnb-typescript)](https://github.com/iamturns/eslint-config-airbnb-typescript) - Airbnb's ESLint config with TypeScript support.
- [Alloy ![GitHub Repo stars](https://img.shields.io/github/stars/AlloyTeam/eslint-config-alloy) ![GitHub last commit](https://img.shields.io/github/last-commit/AlloyTeam/eslint-config-alloy)](https://github.com/AlloyTeam/eslint-config-alloy) - Progressive ESLint config for your React/Vue/TypeScript projects.
- [ESLint ![GitHub Repo stars](https://img.shields.io/github/stars/eslint/eslint) ![GitHub last commit](https://img.shields.io/github/last-commit/eslint/eslint)](https://github.com/eslint/eslint/tree/master/packages/eslint-config-eslint) - Contains the ESLint configuration used for projects maintained by the ESLint team.
- [Facebook](https://www.npmjs.com/package/eslint-config-fbjs) - Sharable config for Facebook's style guide.
- [Google ![GitHub Repo stars](https://img.shields.io/github/stars/google/eslint-config-google) ![GitHub last commit](https://img.shields.io/github/last-commit/google/eslint-config-google)](https://github.com/google/eslint-config-google) - Shareable config for the [Google style](http://google.github.io/styleguide/javascriptguide.xml).
- [React App ![GitHub Repo stars](https://img.shields.io/github/stars/facebook/create-react-app) ![GitHub last commit](https://img.shields.io/github/last-commit/facebook/create-react-app)](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app) - Sharable config for [React](https://reactjs.org) projects.
- [Shopify ![GitHub Repo stars](https://img.shields.io/github/stars/Shopify/web-foundation) ![GitHub last commit](https://img.shields.io/github/last-commit/Shopify/web-foundation)](https://github.com/Shopify/web-foundation/blob/main/packages/eslint-plugin/README.md) - Shareable config for [Shopify's style guide ![GitHub Repo stars](https://img.shields.io/github/stars/Shopify/javascript) ![GitHub last commit](https://img.shields.io/github/last-commit/Shopify/javascript)](https://github.com/Shopify/javascript).
- [Wikimedia ![GitHub Repo stars](https://img.shields.io/github/stars/wikimedia/eslint-config-wikimedia) ![GitHub last commit](https://img.shields.io/github/last-commit/wikimedia/eslint-config-wikimedia)](https://github.com/wikimedia/eslint-config-wikimedia) - Shareable config for [Wikimedia's style guide](https://www.mediawiki.org/wiki/Manual:Coding_conventions/JavaScript), used by [MediaWiki](https://www.mediawiki.org/).

### Other Prominent Configs (100 stars or so)

- [Auto ![GitHub Repo stars](https://img.shields.io/github/stars/davidjbradshaw/eslint-config-auto) ![GitHub last commit](https://img.shields.io/github/last-commit/davidjbradshaw/eslint-config-auto)](https://github.com/davidjbradshaw/eslint-config-auto) - Automatically configure ESLint based on your project's dependencies.
- [Canonical ![GitHub Repo stars](https://img.shields.io/github/stars/gajus/eslint-config-canonical) ![GitHub last commit](https://img.shields.io/github/last-commit/gajus/eslint-config-canonical)](https://github.com/gajus/eslint-config-canonical) - Shareable config for [Canonical style guide ![GitHub Repo stars](https://img.shields.io/github/stars/gajus/canonical) ![GitHub last commit](https://img.shields.io/github/last-commit/gajus/canonical)](https://github.com/gajus/canonical).
- [Standard ![GitHub Repo stars](https://img.shields.io/github/stars/feross/eslint-config-standard) ![GitHub last commit](https://img.shields.io/github/last-commit/feross/eslint-config-standard)](https://github.com/feross/eslint-config-standard) - Shareable config for JavaScript [Standard Style ![GitHub Repo stars](https://img.shields.io/github/stars/feross/standard) ![GitHub last commit](https://img.shields.io/github/last-commit/feross/standard)](https://github.com/feross/standard).
- [XO ![GitHub Repo stars](https://img.shields.io/github/stars/xojs/eslint-config-xo) ![GitHub last commit](https://img.shields.io/github/last-commit/xojs/eslint-config-xo)](https://github.com/xojs/eslint-config-xo) - Shareable config for [XO ![GitHub Repo stars](https://img.shields.io/github/stars/xojs/xo) ![GitHub last commit](https://img.shields.io/github/last-commit/xojs/xo)](https://github.com/xojs/xo).

### Other Configs

- [Adjunct ![GitHub Repo stars](https://img.shields.io/github/stars/davidjbradshaw/eslint-config-adjunct) ![GitHub last commit](https://img.shields.io/github/last-commit/davidjbradshaw/eslint-config-adjunct)](https://github.com/davidjbradshaw/eslint-config-adjunct) - A reasonable collection of plugins to use alongside your main ESLint configuration.
- [Ash-Nazg ![GitHub Repo stars](https://img.shields.io/github/stars/brettz9/eslint-config-ash-nazg) ![GitHub last commit](https://img.shields.io/github/last-commit/brettz9/eslint-config-ash-nazg)](https://github.com/brettz9/eslint-config-ash-nazg) - One config to rule them all!
- [Cecilia ![GitHub Repo stars](https://img.shields.io/github/stars/SandroMiguel/eslint-config-cecilia) ![GitHub last commit](https://img.shields.io/github/last-commit/SandroMiguel/eslint-config-cecilia)](https://github.com/SandroMiguel/eslint-config-cecilia) - ESLint configuration for awesome projects.
- [ES ![GitHub Repo stars](https://img.shields.io/github/stars/thenativeweb/eslint-config-es) ![GitHub last commit](https://img.shields.io/github/last-commit/thenativeweb/eslint-config-es)](https://github.com/thenativeweb/eslint-config-es) - Shareable config for very strict code.
- [Hardcore ![GitHub Repo stars](https://img.shields.io/github/stars/EvgenyOrekhov/eslint-config-hardcore) ![GitHub last commit](https://img.shields.io/github/last-commit/EvgenyOrekhov/eslint-config-hardcore)](https://github.com/EvgenyOrekhov/eslint-config-hardcore) - The most strict (but practical) ESLint config out there.
- [Problems ![GitHub Repo stars](https://img.shields.io/github/stars/RyanZim/eslint-config-problems) ![GitHub last commit](https://img.shields.io/github/last-commit/RyanZim/eslint-config-problems)](https://github.com/RyanZim/eslint-config-problems) - Shareable config that only catches actual problems, and doesn't enforce stylistic preferences.
- [Supermind ![GitHub Repo stars](https://img.shields.io/github/stars/supermind/eslint-config-supermind) ![GitHub last commit](https://img.shields.io/github/last-commit/supermind/eslint-config-supermind)](https://github.com/supermind/eslint-config-supermind) - Shareable config for Supermind style.

## Preconfigured Configs with ESLint Set up

- [Node.js Standard Style ![GitHub Repo stars](https://img.shields.io/github/stars/geek/node-style) ![GitHub last commit](https://img.shields.io/github/last-commit/geek/node-style)](https://github.com/geek/node-style) - Node.js core config.
- [prettier-standard ![GitHub Repo stars](https://img.shields.io/github/stars/sheerun/prettier-standard) ![GitHub last commit](https://img.shields.io/github/last-commit/sheerun/prettier-standard)](https://github.com/sheerun/prettier-standard) - Prettier formatter with custom eslint rules allowed.
- [Standard ![GitHub Repo stars](https://img.shields.io/github/stars/feross/standard) ![GitHub last commit](https://img.shields.io/github/last-commit/feross/standard)](https://github.com/feross/standard) - JavaScript Standard Style.
- [Superlint ![GitHub Repo stars](https://img.shields.io/github/stars/supermind/superlint) ![GitHub last commit](https://img.shields.io/github/last-commit/supermind/superlint)](https://github.com/supermind/superlint) - JavaScript Supermind Style.
- [XO ![GitHub Repo stars](https://img.shields.io/github/stars/sindresorhus/xo) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/xo)](https://github.com/sindresorhus/xo) - JavaScript happiness style linter ❤️.
- [Healthier ![GitHub Repo stars](https://img.shields.io/github/stars/KidkArolis/healthier) ![GitHub last commit](https://img.shields.io/github/last-commit/KidkArolis/healthier)](https://github.com/KidkArolis/healthier) - Code style agnostic version of Standard, perfect companion to Prettier.

## Plugins

### Code Quality

- [SonarJS ![GitHub Repo stars](https://img.shields.io/github/stars/SonarSource/eslint-plugin-sonarjs) ![GitHub last commit](https://img.shields.io/github/last-commit/SonarSource/eslint-plugin-sonarjs)](https://github.com/SonarSource/eslint-plugin-sonarjs) - Rules detecting bugs and suspicious patterns.
- [Unicorn ![GitHub Repo stars](https://img.shields.io/github/stars/sindresorhus/eslint-plugin-unicorn) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/eslint-plugin-unicorn)](https://github.com/sindresorhus/eslint-plugin-unicorn) - Various awesome ESLint rules.

### Compatiblity

- [Compat ![GitHub Repo stars](https://img.shields.io/github/stars/amilajack/eslint-plugin-compat) ![GitHub last commit](https://img.shields.io/github/last-commit/amilajack/eslint-plugin-compat)](https://github.com/amilajack/eslint-plugin-compat) - Lint browser compatibility of APIs used ([caniuse](http://caniuse.com/#search=fetch) as an ESLint plugin).
- [ecmascript-compat ![GitHub Repo stars](https://img.shields.io/github/stars/robatwilliams/es-compat) ![GitHub last commit](https://img.shields.io/github/last-commit/robatwilliams/es-compat)](https://github.com/robatwilliams/es-compat) - Disable ECMAScript language features not supported by your browserslist targets.
- [es ![GitHub Repo stars](https://img.shields.io/github/stars/mysticatea/eslint-plugin-es) ![GitHub last commit](https://img.shields.io/github/last-commit/mysticatea/eslint-plugin-es)](https://github.com/mysticatea/eslint-plugin-es) - Disable specific ECMAScript language versions or individual features.
- [es5 ![GitHub Repo stars](https://img.shields.io/github/stars/nkt/eslint-plugin-es5) ![GitHub last commit](https://img.shields.io/github/last-commit/nkt/eslint-plugin-es5)](https://github.com/nkt/eslint-plugin-es5) - ESLint plugin for ES5 users (forbid ES2015+ usage).
- [ie11 ![GitHub Repo stars](https://img.shields.io/github/stars/Volox/eslint-plugin-ie11) ![GitHub last commit](https://img.shields.io/github/last-commit/Volox/eslint-plugin-ie11)](https://github.com/Volox/eslint-plugin-ie11) - Detect unsupported ES6 features in IE11.

### CSS in JS

- [CSS-modules ![GitHub Repo stars](https://img.shields.io/github/stars/atfzl/eslint-plugin-css-modules) ![GitHub last commit](https://img.shields.io/github/last-commit/atfzl/eslint-plugin-css-modules)](https://github.com/atfzl/eslint-plugin-css-modules) - Lint undefined or unused rules for css modules.
- [Emotion ![GitHub Repo stars](https://img.shields.io/github/stars/emotion-js/emotion) ![GitHub last commit](https://img.shields.io/github/last-commit/emotion-js/emotion)](https://github.com/emotion-js/emotion/tree/master/packages/eslint-plugin) - ESLint rules for emotion.
- Styled Components
  - [Better Styled Components ![GitHub Repo stars](https://img.shields.io/github/stars/tinloof/eslint-plugin-better-styled-components) ![GitHub last commit](https://img.shields.io/github/last-commit/tinloof/eslint-plugin-better-styled-components)](https://github.com/tinloof/eslint-plugin-better-styled-components) - Auto fixable ESlint's rules for styled components.
  - [styled-components-a11y ![GitHub Repo stars](https://img.shields.io/github/stars/brendanmorrell/eslint-plugin-styled-components-a11y) ![GitHub last commit](https://img.shields.io/github/last-commit/brendanmorrell/eslint-plugin-styled-components-a11y)](https://github.com/brendanmorrell/eslint-plugin-styled-components-a11y) - A11y for Styled Components.

### Deprecation

- [deprecate ![GitHub Repo stars](https://img.shields.io/github/stars/AlexMost/eslint-plugin-deprecate) ![GitHub last commit](https://img.shields.io/github/last-commit/AlexMost/eslint-plugin-deprecate)](https://github.com/AlexMost/eslint-plugin-deprecate) - Mark functions or modules as deprecated and get lint messages when they are used.
- [deprecation ![GitHub Repo stars](https://img.shields.io/github/stars/gund/eslint-plugin-deprecation) ![GitHub last commit](https://img.shields.io/github/last-commit/gund/eslint-plugin-deprecation)](https://github.com/gund/eslint-plugin-deprecation) - Identifies use of
  jsdoc `@deprecated` functions.
- [disable ![GitHub Repo stars](https://img.shields.io/github/stars/mradionov/eslint-plugin-disable) ![GitHub last commit](https://img.shields.io/github/last-commit/mradionov/eslint-plugin-disable)](https://github.com/mradionov/eslint-plugin-disable) - Disable specified plugins using file path patterns and inline comments.

### Embedded

- [HTML ![GitHub Repo stars](https://img.shields.io/github/stars/BenoitZugmeyer/eslint-plugin-html) ![GitHub last commit](https://img.shields.io/github/last-commit/BenoitZugmeyer/eslint-plugin-html)](https://github.com/BenoitZugmeyer/eslint-plugin-html) - Linting for JavaScript inside of HTML `<script>` tags.
- [Markdown ![GitHub Repo stars](https://img.shields.io/github/stars/eslint/eslint-plugin-markdown) ![GitHub last commit](https://img.shields.io/github/last-commit/eslint/eslint-plugin-markdown)](https://github.com/eslint/eslint-plugin-markdown) - Linting for JavaScript inside of Markdown.

### Frameworks

- [AngularJS ![GitHub Repo stars](https://img.shields.io/github/stars/Gillespie59/eslint-plugin-angular) ![GitHub last commit](https://img.shields.io/github/last-commit/Gillespie59/eslint-plugin-angular)](https://github.com/Gillespie59/eslint-plugin-angular) - Linting rules to adhere to the [John Papa's AngularJS Styleguide ![GitHub Repo stars](https://img.shields.io/github/stars/johnpapa/angular-styleguide) ![GitHub last commit](https://img.shields.io/github/last-commit/johnpapa/angular-styleguide)](https://github.com/johnpapa/angular-styleguide).
- [Backbone ![GitHub Repo stars](https://img.shields.io/github/stars/ilyavolodin/eslint-plugin-backbone) ![GitHub last commit](https://img.shields.io/github/last-commit/ilyavolodin/eslint-plugin-backbone)](https://github.com/ilyavolodin/eslint-plugin-backbone) - Linting rules for Backbone.
- [Custom Elements ![GitHub Repo stars](https://img.shields.io/github/stars/github/eslint-plugin-custom-elements) ![GitHub last commit](https://img.shields.io/github/last-commit/github/eslint-plugin-custom-elements)](https://github.com/github/eslint-plugin-custom-elements) - Rules by GitHub for Custom Elements.
- [Ember ![GitHub Repo stars](https://img.shields.io/github/stars/ember-cli/eslint-plugin-ember) ![GitHub last commit](https://img.shields.io/github/last-commit/ember-cli/eslint-plugin-ember)](https://github.com/ember-cli/eslint-plugin-ember) - Linting rules for Ember.
- [Hapi ![GitHub Repo stars](https://img.shields.io/github/stars/continuationlabs/eslint-plugin-hapi) ![GitHub last commit](https://img.shields.io/github/last-commit/continuationlabs/eslint-plugin-hapi)](https://github.com/continuationlabs/eslint-plugin-hapi) - Linting rules for hapi.
- [Meteor ![GitHub Repo stars](https://img.shields.io/github/stars/dferber90/eslint-plugin-meteor) ![GitHub last commit](https://img.shields.io/github/last-commit/dferber90/eslint-plugin-meteor)](https://github.com/dferber90/eslint-plugin-meteor) - Meteor specific linting rules.
- React
  - [JSX a11y ![GitHub Repo stars](https://img.shields.io/github/stars/evcohen/eslint-plugin-jsx-a11y) ![GitHub last commit](https://img.shields.io/github/last-commit/evcohen/eslint-plugin-jsx-a11y)](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Accessibility rules on JSX elements.
  - [React ![GitHub Repo stars](https://img.shields.io/github/stars/yannickcr/eslint-plugin-react) ![GitHub last commit](https://img.shields.io/github/last-commit/yannickcr/eslint-plugin-react)](https://github.com/yannickcr/eslint-plugin-react) - Linting rules for React and JSX.
  - [React Hooks ![GitHub Repo stars](https://img.shields.io/github/stars/facebook/react) ![GitHub last commit](https://img.shields.io/github/last-commit/facebook/react)](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) - Linting rules for React Hooks.
  - [React Native ![GitHub Repo stars](https://img.shields.io/github/stars/Intellicode/eslint-plugin-react-native) ![GitHub last commit](https://img.shields.io/github/last-commit/Intellicode/eslint-plugin-react-native)](https://github.com/Intellicode/eslint-plugin-react-native) - React Native specific linting rules.
  - [React-Redux ![GitHub Repo stars](https://img.shields.io/github/stars/DianaSuvorova/eslint-plugin-react-redux) ![GitHub last commit](https://img.shields.io/github/last-commit/DianaSuvorova/eslint-plugin-react-redux)](https://github.com/DianaSuvorova/eslint-plugin-react-redux) - React-Redux specific linting rules.
- [Svelte ![GitHub Repo stars](https://img.shields.io/github/stars/sveltejs/eslint-plugin-svelte3) ![GitHub last commit](https://img.shields.io/github/last-commit/sveltejs/eslint-plugin-svelte3)](https://github.com/sveltejs/eslint-plugin-svelte3) - Linting rules for Svelte v3 Components.
- Vue
  - [VueJS ![GitHub Repo stars](https://img.shields.io/github/stars/vuejs/eslint-plugin-vue) ![GitHub last commit](https://img.shields.io/github/last-commit/vuejs/eslint-plugin-vue)](https://github.com/vuejs/eslint-plugin-vue) - Plugin for VueJS.
  - [VueJS Scoped CSS ![GitHub Repo stars](https://img.shields.io/github/stars/future-architect/eslint-plugin-vue-scoped-css) ![GitHub last commit](https://img.shields.io/github/last-commit/future-architect/eslint-plugin-vue-scoped-css)](https://github.com/future-architect/eslint-plugin-vue-scoped-css) - Plugin for Scoped CSS in VueJS.

### Languages

- [Coffee ![GitHub Repo stars](https://img.shields.io/github/stars/aminland/eslint-plugin-coffee) ![GitHub last commit](https://img.shields.io/github/last-commit/aminland/eslint-plugin-coffee)](https://github.com/aminland/eslint-plugin-coffee) - Enables linting CoffeeScript files with, with optional linting rules from the Coffeelint library.
- ES5
  - [Babel ![GitHub Repo stars](https://img.shields.io/github/stars/babel/eslint-plugin-babel) ![GitHub last commit](https://img.shields.io/github/last-commit/babel/eslint-plugin-babel)](https://github.com/babel/eslint-plugin-babel) - Adds replacements for built-in rules to include Babel features.
  - [import ![GitHub Repo stars](https://img.shields.io/github/stars/benmosher/eslint-plugin-import) ![GitHub last commit](https://img.shields.io/github/last-commit/benmosher/eslint-plugin-import)](https://github.com/benmosher/eslint-plugin-import) - Linting of ES2015+ import/export syntax, and prevent issues with misspelling of file paths and import names.
- Flow
  - [Flow ![GitHub Repo stars](https://img.shields.io/github/stars/gajus/eslint-plugin-flowtype) ![GitHub last commit](https://img.shields.io/github/last-commit/gajus/eslint-plugin-flowtype)](https://github.com/gajus/eslint-plugin-flowtype) - Flow type linting rules.
  - [Flow Errors ![GitHub Repo stars](https://img.shields.io/github/stars/amilajack/eslint-plugin-flowtype-errors) ![GitHub last commit](https://img.shields.io/github/last-commit/amilajack/eslint-plugin-flowtype-errors)](https://github.com/amilajack/eslint-plugin-flowtype-errors) - Run Flow as an ESLint plugin.
- [HTML ![GitHub Repo stars](https://img.shields.io/github/stars/yeonjuan/html-eslint) ![GitHub last commit](https://img.shields.io/github/last-commit/yeonjuan/html-eslint)](https://github.com/yeonjuan/html-eslint) - ESLint plugin for HTML.
- JSON
  - [JSON ![GitHub Repo stars](https://img.shields.io/github/stars/azeemba/eslint-plugin-json) ![GitHub last commit](https://img.shields.io/github/last-commit/azeemba/eslint-plugin-json)](https://github.com/azeemba/eslint-plugin-json) - Lint your JSON files.
  - [JSON, package.json ![GitHub Repo stars](https://img.shields.io/github/stars/Bkucera/eslint-plugin-json-format) ![GitHub last commit](https://img.shields.io/github/last-commit/Bkucera/eslint-plugin-json-format)](https://github.com/Bkucera/eslint-plugin-json-format) - Lint, format, and auto-fix your JSON files. Sort your `package.json`.
  - [JSON with Comments ![GitHub Repo stars](https://img.shields.io/github/stars/ota-meshi/eslint-plugin-jsonc) ![GitHub last commit](https://img.shields.io/github/last-commit/ota-meshi/eslint-plugin-jsonc)](https://github.com/ota-meshi/eslint-plugin-jsonc) - ESLint plugin for JSON, JSONC and JSON5.
  - [JSON Schema ![GitHub Repo stars](https://img.shields.io/github/stars/ota-meshi/eslint-plugin-json-schema-validator) ![GitHub last commit](https://img.shields.io/github/last-commit/ota-meshi/eslint-plugin-json-schema-validator)](https://github.com/ota-meshi/eslint-plugin-json-schema-validator) - Validates data defined in JavaScript, JSON, YAML and TOML using JSON Schema Validator.
- [MDX ![GitHub Repo stars](https://img.shields.io/github/stars/mdx-js/eslint-mdx) ![GitHub last commit](https://img.shields.io/github/last-commit/mdx-js/eslint-mdx)](https://github.com/mdx-js/eslint-mdx/tree/master/packages/eslint-plugin-mdx) - ESLint Parser/Plugin for MDX.
- [Node ![GitHub Repo stars](https://img.shields.io/github/stars/mysticatea/eslint-plugin-node) ![GitHub last commit](https://img.shields.io/github/last-commit/mysticatea/eslint-plugin-node)](https://github.com/mysticatea/eslint-plugin-node) - Additional ESLint's rules for Node.js.
- [SQL ![GitHub Repo stars](https://img.shields.io/github/stars/gajus/eslint-plugin-sql) ![GitHub last commit](https://img.shields.io/github/last-commit/gajus/eslint-plugin-sql)](https://github.com/gajus/eslint-plugin-sql) - SQL linting rules for ESLint.
- [TOML ![GitHub Repo stars](https://img.shields.io/github/stars/ota-meshi/eslint-plugin-toml) ![GitHub last commit](https://img.shields.io/github/last-commit/ota-meshi/eslint-plugin-toml)](https://github.com/ota-meshi/eslint-plugin-toml) - ESLint plugin for TOML.
- [TypeScript ![GitHub Repo stars](https://img.shields.io/github/stars/typescript-eslint/typescript-eslint) ![GitHub last commit](https://img.shields.io/github/last-commit/typescript-eslint/typescript-eslint)](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) - Linting rules for TypeScript.
- [YAML ![GitHub Repo stars](https://img.shields.io/github/stars/ota-meshi/eslint-plugin-yml) ![GitHub last commit](https://img.shields.io/github/last-commit/ota-meshi/eslint-plugin-yml)](https://github.com/ota-meshi/eslint-plugin-yml) - ESLint plugin for YAML.

### Libraries

- GraphQL
  - [dotansimha/graphql-eslint ![GitHub Repo stars](https://img.shields.io/github/stars/dotansimha/graphql-eslint) ![GitHub last commit](https://img.shields.io/github/last-commit/dotansimha/graphql-eslint)](https://github.com/dotansimha/graphql-eslint) - Validates, prettifies and checks your GraphQL operations and GraphQL schema for best-practices.
  - [apollostack/eslint-plugin-graphql ![GitHub Repo stars](https://img.shields.io/github/stars/apollostack/eslint-plugin-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/apollostack/eslint-plugin-graphql)](https://github.com/apollostack/eslint-plugin-graphql) - Check your GraphQL query strings against a schema.
- [TypeGraphQL ![GitHub Repo stars](https://img.shields.io/github/stars/borremosch/eslint-plugin-type-graphql) ![GitHub last commit](https://img.shields.io/github/last-commit/borremosch/eslint-plugin-type-graphql)](https://github.com/borremosch/eslint-plugin-type-graphql) - Linting rules for TypeGraphQL, targeted at finding common mistakes.
- [jQuery ![GitHub Repo stars](https://img.shields.io/github/stars/wikimedia/eslint-plugin-no-jquery) ![GitHub last commit](https://img.shields.io/github/last-commit/wikimedia/eslint-plugin-no-jquery)](https://github.com/wikimedia/eslint-plugin-no-jquery) - Linting rules for jQuery, including versioned configs for deprecated features.
- [JSDoc ![GitHub Repo stars](https://img.shields.io/github/stars/gajus/eslint-plugin-jsdoc) ![GitHub last commit](https://img.shields.io/github/last-commit/gajus/eslint-plugin-jsdoc)](https://github.com/gajus/eslint-plugin-jsdoc) - Linting rules for JSDoc comments (including the JavaScript within `@example`).
- Lodash
  - [Lodash ![GitHub Repo stars](https://img.shields.io/github/stars/wix/eslint-plugin-lodash) ![GitHub last commit](https://img.shields.io/github/last-commit/wix/eslint-plugin-lodash)](https://github.com/wix/eslint-plugin-lodash) - Lodash specific linting rules.
  - [Lodash/fp ![GitHub Repo stars](https://img.shields.io/github/stars/jfmengels/eslint-plugin-lodash-fp) ![GitHub last commit](https://img.shields.io/github/last-commit/jfmengels/eslint-plugin-lodash-fp)](https://github.com/jfmengels/eslint-plugin-lodash-fp) - Lodash/fp specific linting rules.
  - [Lodash template ![GitHub Repo stars](https://img.shields.io/github/stars/ota-meshi/eslint-plugin-lodash-template) ![GitHub last commit](https://img.shields.io/github/last-commit/ota-meshi/eslint-plugin-lodash-template)](https://github.com/ota-meshi/eslint-plugin-lodash-template) - Plugin for Lodash template/Underscore template.
  - [Microtemplates ![GitHub Repo stars](https://img.shields.io/github/stars/platinumazure/eslint-plugin-microtemplates) ![GitHub last commit](https://img.shields.io/github/last-commit/platinumazure/eslint-plugin-microtemplates)](https://github.com/platinumazure/eslint-plugin-microtemplates) (Used in Lodash and Underscore.js)
- [Mongodb ![GitHub Repo stars](https://img.shields.io/github/stars/nfroidure/eslint-plugin-mongodb) ![GitHub last commit](https://img.shields.io/github/last-commit/nfroidure/eslint-plugin-mongodb)](https://github.com/nfroidure/eslint-plugin-mongodb) - Mongodb native Node.js driver linting rules.
- [Ramda ![GitHub Repo stars](https://img.shields.io/github/stars/ramda/eslint-plugin-ramda) ![GitHub last commit](https://img.shields.io/github/last-commit/ramda/eslint-plugin-ramda)](https://github.com/ramda/eslint-plugin-ramda) - Ramda specific linting rules.
- [RequireJS ![GitHub Repo stars](https://img.shields.io/github/stars/cvisco/eslint-plugin-requirejs) ![GitHub last commit](https://img.shields.io/github/last-commit/cvisco/eslint-plugin-requirejs)](https://github.com/cvisco/eslint-plugin-requirejs) - Linting rules for RequireJS.

### Misc

- [Diff ![GitHub Repo stars](https://img.shields.io/github/stars/paleite/eslint-plugin-diff) ![GitHub last commit](https://img.shields.io/github/last-commit/paleite/eslint-plugin-diff)](https://github.com/paleite/eslint-plugin-diff) - Run ESLint on your changed lines only. Also supports CI!
- [ESLint Comments ![GitHub Repo stars](https://img.shields.io/github/stars/mysticatea/eslint-plugin-eslint-comments) ![GitHub last commit](https://img.shields.io/github/last-commit/mysticatea/eslint-plugin-eslint-comments)](https://github.com/mysticatea/eslint-plugin-eslint-comments) - Best practices about ESLint directive comments (`/*eslint-disable*/`, etc.).
- [eslint-plugin-write-good-comments ![GitHub Repo stars](https://img.shields.io/github/stars/kantord/eslint-plugin-write-good-comments) ![GitHub last commit](https://img.shields.io/github/last-commit/kantord/eslint-plugin-write-good-comments)](https://github.com/kantord/eslint-plugin-write-good-comments) - Enforce good writing style in comments.
- [eslint-define-config ![GitHub Repo stars](https://img.shields.io/github/stars/Shinigami92/eslint-define-config) ![GitHub last commit](https://img.shields.io/github/last-commit/Shinigami92/eslint-define-config)](https://github.com/Shinigami92/eslint-define-config) - Provide a `defineConfig` function for `.eslintrc.js` files.
- [eslint-plugin-eslint-plugin ![GitHub Repo stars](https://img.shields.io/github/stars/not-an-aardvark/eslint-plugin-eslint-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/not-an-aardvark/eslint-plugin-eslint-plugin)](https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin) - An ESLint plugin for linting ESLint plugins.
- [GitHub ![GitHub Repo stars](https://img.shields.io/github/stars/github/eslint-plugin-github) ![GitHub last commit](https://img.shields.io/github/last-commit/github/eslint-plugin-github)](https://github.com/github/eslint-plugin-github) - Misc. rules from GitHub.
- [@mysticatea/eslint-plugin ![GitHub Repo stars](https://img.shields.io/github/stars/mysticatea/eslint-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/mysticatea/eslint-plugin)](https://github.com/mysticatea/eslint-plugin) - Misc. rules.
- [@brettz9/eslint-plugin ![GitHub Repo stars](https://img.shields.io/github/stars/brettz9/eslint-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/brettz9/eslint-plugin)](https://github.com/brettz9/eslint-plugin) - Misc. rules. of `@mysticatea` without the personal config.
- [Notice ![GitHub Repo stars](https://img.shields.io/github/stars/nickdeis/eslint-plugin-notice) ![GitHub last commit](https://img.shields.io/github/last-commit/nickdeis/eslint-plugin-notice)](https://github.com/nickdeis/eslint-plugin-notice) - An eslint rule that checks the top of files and fixes them too!
- [Only-Error ![GitHub Repo stars](https://img.shields.io/github/stars/davidjbradshaw/eslint-plugin-only-error) ![GitHub last commit](https://img.shields.io/github/last-commit/davidjbradshaw/eslint-plugin-only-error)](https://github.com/davidjbradshaw/eslint-plugin-only-error) - Convert all rules to errors.
- [Only-Warn ![GitHub Repo stars](https://img.shields.io/github/stars/bfanger/eslint-plugin-only-warn) ![GitHub last commit](https://img.shields.io/github/last-commit/bfanger/eslint-plugin-only-warn)](https://github.com/bfanger/eslint-plugin-only-warn) - Convert all rules to warnings.
- [PutOut ![GitHub Repo stars](https://img.shields.io/github/stars/coderaiser/putout) ![GitHub last commit](https://img.shields.io/github/last-commit/coderaiser/putout)](https://github.com/coderaiser/putout/tree/master/packages/eslint-plugin-putout) - an ESLint plugin integrates [putout ![GitHub Repo stars](https://img.shields.io/github/stars/coderaiser/putout) ![GitHub last commit](https://img.shields.io/github/last-commit/coderaiser/putout)](https://github.com/coderaiser/putout) linter into ESLint.
- [TypeLint ![GitHub Repo stars](https://img.shields.io/github/stars/yarax/typelint) ![GitHub last commit](https://img.shields.io/github/last-commit/yarax/typelint)](https://github.com/yarax/typelint) - Introduces types, based on existing schemas (Swagger, Redux) and linting access to object properties, preventing `undefined` errors.
- [Woke ![GitHub Repo stars](https://img.shields.io/github/stars/amwmedia/eslint-plugin-woke) ![GitHub last commit](https://img.shields.io/github/last-commit/amwmedia/eslint-plugin-woke)](https://github.com/amwmedia/eslint-plugin-woke) - Helps catch insensitive words, promoting an inclusive codebase.

### Practices

- [array-func ![GitHub Repo stars](https://img.shields.io/github/stars/freaktechnik/eslint-plugin-array-func) ![GitHub last commit](https://img.shields.io/github/last-commit/freaktechnik/eslint-plugin-array-func)](https://github.com/freaktechnik/eslint-plugin-array-func) - Avoid redundancy when using es2015 array methods and functions.
- [arrow functions ![GitHub Repo stars](https://img.shields.io/github/stars/getify/eslint-plugin-proper-arrows) ![GitHub last commit](https://img.shields.io/github/last-commit/getify/eslint-plugin-proper-arrows)](https://github.com/getify/eslint-plugin-proper-arrows) - ESLint rules to ensure proper arrow function definitions.
- [boundaries ![GitHub Repo stars](https://img.shields.io/github/stars/javierbrea/eslint-plugin-boundaries) ![GitHub last commit](https://img.shields.io/github/last-commit/javierbrea/eslint-plugin-boundaries)](https://github.com/javierbrea/eslint-plugin-boundaries) - Ensures that your architecture boundaries are respected by the elements in your project checking file structure and dependencies.
- [fp ![GitHub Repo stars](https://img.shields.io/github/stars/jfmengels/eslint-plugin-fp) ![GitHub last commit](https://img.shields.io/github/last-commit/jfmengels/eslint-plugin-fp)](https://github.com/jfmengels/eslint-plugin-fp) - ESLint rules for functional programming.
- [functional ![GitHub Repo stars](https://img.shields.io/github/stars/jonaskello/eslint-plugin-functional) ![GitHub last commit](https://img.shields.io/github/last-commit/jonaskello/eslint-plugin-functional)](https://github.com/jonaskello/eslint-plugin-functional) - ESLint rules to disable mutation and promote fp in JavaScript and TypeScript.
- [Immutable ![GitHub Repo stars](https://img.shields.io/github/stars/jhusain/eslint-plugin-immutable) ![GitHub last commit](https://img.shields.io/github/last-commit/jhusain/eslint-plugin-immutable)](https://github.com/jhusain/eslint-plugin-immutable) - Disable all mutation in JavaScript.
- [new-with-error ![GitHub Repo stars](https://img.shields.io/github/stars/Trott/eslint-plugin-new-with-error) ![GitHub last commit](https://img.shields.io/github/last-commit/Trott/eslint-plugin-new-with-error)](https://github.com/Trott/eslint-plugin-new-with-error) - Require errors to be thrown using `new`.
- [no-constructor-bind ![GitHub Repo stars](https://img.shields.io/github/stars/markalfred/eslint-plugin-no-constructor-bind) ![GitHub last commit](https://img.shields.io/github/last-commit/markalfred/eslint-plugin-no-constructor-bind)](https://github.com/markalfred/eslint-plugin-no-constructor-bind) - Encourages use of class properties by reporting use of `this` with `bind` or setting state in constructors.
- [no-inferred-method-name ![GitHub Repo stars](https://img.shields.io/github/stars/johnstonbl01/eslint-no-inferred-method-name) ![GitHub last commit](https://img.shields.io/github/last-commit/johnstonbl01/eslint-no-inferred-method-name)](https://github.com/johnstonbl01/eslint-no-inferred-method-name) - Custom rule for ESLint that checks for inferred method names within object literals.
- [no-loops ![GitHub Repo stars](https://img.shields.io/github/stars/buildo/eslint-plugin-no-loops) ![GitHub last commit](https://img.shields.io/github/last-commit/buildo/eslint-plugin-no-loops)](https://github.com/buildo/eslint-plugin-no-loops) - It's 2019 and you still use loops?
- [no-restricted-syntax ![GitHub Repo stars](https://img.shields.io/github/stars/brettz9/eslint-plugin-query) ![GitHub last commit](https://img.shields.io/github/last-commit/brettz9/eslint-plugin-query)](https://github.com/brettz9/eslint-plugin-query) - Show queried syntax's content in messages.
- [no-use-extend-native ![GitHub Repo stars](https://img.shields.io/github/stars/dustinspecker/eslint-plugin-no-use-extend-native) ![GitHub last commit](https://img.shields.io/github/last-commit/dustinspecker/eslint-plugin-no-use-extend-native)](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native) - Prevent using extended native objects.
- [Promise ![GitHub Repo stars](https://img.shields.io/github/stars/xjamundx/eslint-plugin-promise) ![GitHub last commit](https://img.shields.io/github/last-commit/xjamundx/eslint-plugin-promise)](https://github.com/xjamundx/eslint-plugin-promise) - Best practices when working with promises.
- [pure ![GitHub Repo stars](https://img.shields.io/github/stars/purely-functional/eslint-plugin-pure) ![GitHub last commit](https://img.shields.io/github/last-commit/purely-functional/eslint-plugin-pure)](https://github.com/purely-functional/eslint-plugin-pure) - Enforce pure functions (without side effects).
- [RegExp ![GitHub Repo stars](https://img.shields.io/github/stars/ota-meshi/eslint-plugin-regexp) ![GitHub last commit](https://img.shields.io/github/last-commit/ota-meshi/eslint-plugin-regexp)](https://github.com/ota-meshi/eslint-plugin-regexp) - ESLint plugin for finding regexp mistakes and style guide violations.
- [sort-keys-fix ![GitHub Repo stars](https://img.shields.io/github/stars/leo-buneev/eslint-plugin-sort-keys-fix) ![GitHub last commit](https://img.shields.io/github/last-commit/leo-buneev/eslint-plugin-sort-keys-fix)](https://github.com/leo-buneev/eslint-plugin-sort-keys-fix) - Adds fixer for ESLint `sort-keys` rule.
- [this ![GitHub Repo stars](https://img.shields.io/github/stars/matijs/eslint-plugin-this) ![GitHub last commit](https://img.shields.io/github/last-commit/matijs/eslint-plugin-this)](https://github.com/matijs/eslint-plugin-this) - Write pure functions, don't allow `this`.
- [toplevel ![GitHub Repo stars](https://img.shields.io/github/stars/HKalbasi/eslint-plugin-toplevel) ![GitHub last commit](https://img.shields.io/github/last-commit/HKalbasi/eslint-plugin-toplevel)](https://github.com/HKalbasi/eslint-plugin-toplevel) - An eslint plugin for disallow side effect at module toplevel.

### Performance

- [clean-regex ![GitHub Repo stars](https://img.shields.io/github/stars/RunDevelopment/eslint-plugin-clean-regex) ![GitHub last commit](https://img.shields.io/github/last-commit/RunDevelopment/eslint-plugin-clean-regex)](https://github.com/RunDevelopment/eslint-plugin-clean-regex) - JavaScript regex linter that aims to help write better regular expressions by pointing out errors and suggesting improvements.
- [DOM ![GitHub Repo stars](https://img.shields.io/github/stars/amilajack/eslint-plugin-dom) ![GitHub last commit](https://img.shields.io/github/last-commit/amilajack/eslint-plugin-dom)](https://github.com/amilajack/eslint-plugin-dom)
- [Optimize Regex ![GitHub Repo stars](https://img.shields.io/github/stars/BrainMaestro/eslint-plugin-optimize-regex) ![GitHub last commit](https://img.shields.io/github/last-commit/BrainMaestro/eslint-plugin-optimize-regex)](https://github.com/BrainMaestro/eslint-plugin-optimize-regex) - Optimize regex literals.
- Perf-Standard [plugin ![GitHub Repo stars](https://img.shields.io/github/stars/Raynos/eslint-plugin-perf-standard) ![GitHub last commit](https://img.shields.io/github/last-commit/Raynos/eslint-plugin-perf-standard)](https://github.com/Raynos/eslint-plugin-perf-standard) and [Config ![GitHub Repo stars](https://img.shields.io/github/stars/Raynos/eslint-config-perf-standard) ![GitHub last commit](https://img.shields.io/github/last-commit/Raynos/eslint-config-perf-standard)](https://github.com/Raynos/eslint-config-perf-standard)

### Security

- [no-secrets ![GitHub Repo stars](https://img.shields.io/github/stars/nickdeis/eslint-plugin-no-secrets) ![GitHub last commit](https://img.shields.io/github/last-commit/nickdeis/eslint-plugin-no-secrets)](https://github.com/nickdeis/eslint-plugin-no-secrets) - An eslint plugin that detects potential secrets/credentials.
- [no-unsanitized ![GitHub Repo stars](https://img.shields.io/github/stars/mozilla/eslint-plugin-no-unsanitized) ![GitHub last commit](https://img.shields.io/github/last-commit/mozilla/eslint-plugin-no-unsanitized)](https://github.com/mozilla/eslint-plugin-no-unsanitized) - Checks for `innerHTML`, `outerHTML`, etc.
- [pii ![GitHub Repo stars](https://img.shields.io/github/stars/shiva-hack/eslint-plugin-pii) ![GitHub last commit](https://img.shields.io/github/last-commit/shiva-hack/eslint-plugin-pii)](https://github.com/shiva-hack/eslint-plugin-pii) - Checks and enforces PII Compliance of the code. i.e. no email address, birth date, IP address or phone number in comments or string literals.
- ScanJS [config ![GitHub Repo stars](https://img.shields.io/github/stars/mozfreddyb/eslint-config-scanjs) ![GitHub last commit](https://img.shields.io/github/last-commit/mozfreddyb/eslint-config-scanjs)](https://github.com/mozfreddyb/eslint-config-scanjs) and [plugin ![GitHub Repo stars](https://img.shields.io/github/stars/mozfreddyb/eslint-plugin-scanjs-rules) ![GitHub last commit](https://img.shields.io/github/last-commit/mozfreddyb/eslint-plugin-scanjs-rules)](https://github.com/mozfreddyb/eslint-plugin-scanjs-rules) - Security-related rules.
- [Security ![GitHub Repo stars](https://img.shields.io/github/stars/nodesecurity/eslint-plugin-security) ![GitHub last commit](https://img.shields.io/github/last-commit/nodesecurity/eslint-plugin-security)](https://github.com/nodesecurity/eslint-plugin-security) - ESLint rules for Node Security.
- [xss ![GitHub Repo stars](https://img.shields.io/github/stars/Rantanen/eslint-plugin-xss) ![GitHub last commit](https://img.shields.io/github/last-commit/Rantanen/eslint-plugin-xss)](https://github.com/Rantanen/eslint-plugin-xss) - Tries to detect XSS issues in codebase before they end up in production.

### Style

- [const case](https://www.npmjs.com/package/eslint-plugin-const-case) - Enforce capitalization of constant primitive literals.
- [editorconfig ![GitHub Repo stars](https://img.shields.io/github/stars/platinumazure/eslint-plugin-editorconfig) ![GitHub last commit](https://img.shields.io/github/last-commit/platinumazure/eslint-plugin-editorconfig)](https://github.com/platinumazure/eslint-plugin-editorconfig) - Derive rules from [`.editorconfig`](https://editorconfig.org/).
- [filenames ![GitHub Repo stars](https://img.shields.io/github/stars/selaux/eslint-plugin-filenames) ![GitHub last commit](https://img.shields.io/github/last-commit/selaux/eslint-plugin-filenames)](https://github.com/selaux/eslint-plugin-filenames) - Ensure consistent filenames for your JavaScript files.
- [Simple import sort ![GitHub Repo stars](https://img.shields.io/github/stars/lydell/eslint-plugin-simple-import-sort) ![GitHub last commit](https://img.shields.io/github/last-commit/lydell/eslint-plugin-simple-import-sort)](https://github.com/lydell/eslint-plugin-simple-import-sort) - Easy autofixable import sorting.
- [Switch case ![GitHub Repo stars](https://img.shields.io/github/stars/lukeapage/eslint-plugin-switch-case) ![GitHub last commit](https://img.shields.io/github/last-commit/lukeapage/eslint-plugin-switch-case)](https://github.com/lukeapage/eslint-plugin-switch-case) - Switch-case-specific linting rules for ESLint.
- [padding ![GitHub Repo stars](https://img.shields.io/github/stars/mu-io/eslint-plugin-padding) ![GitHub last commit](https://img.shields.io/github/last-commit/mu-io/eslint-plugin-padding)](https://github.com/mu-io/eslint-plugin-padding) - Allows/disallows padding between statements.

### Testing Tools

- [AVA ![GitHub Repo stars](https://img.shields.io/github/stars/avajs/eslint-plugin-ava) ![GitHub last commit](https://img.shields.io/github/last-commit/avajs/eslint-plugin-ava)](https://github.com/avajs/eslint-plugin-ava) - Linting rules for AVA.
- Chai
  - [expect practices ![GitHub Repo stars](https://img.shields.io/github/stars/turbo87/eslint-plugin-chai-expect) ![GitHub last commit](https://img.shields.io/github/last-commit/turbo87/eslint-plugin-chai-expect)](https://github.com/turbo87/eslint-plugin-chai-expect)
  - [with unused expressions ![GitHub Repo stars](https://img.shields.io/github/stars/ihordiachenko/eslint-plugin-chai-friendly) ![GitHub last commit](https://img.shields.io/github/last-commit/ihordiachenko/eslint-plugin-chai-friendly)](https://github.com/ihordiachenko/eslint-plugin-chai-friendly)
  - [permitted keywords ![GitHub Repo stars](https://img.shields.io/github/stars/gavinaiken/eslint-plugin-chai-expect-keywords) ![GitHub last commit](https://img.shields.io/github/last-commit/gavinaiken/eslint-plugin-chai-expect-keywords)](https://github.com/gavinaiken/eslint-plugin-chai-expect-keywords)
  - [with chai-as-promised plugin ![GitHub Repo stars](https://img.shields.io/github/stars/fintechstudios/eslint-plugin-chai-as-promised) ![GitHub last commit](https://img.shields.io/github/last-commit/fintechstudios/eslint-plugin-chai-as-promised)](https://github.com/fintechstudios/eslint-plugin-chai-as-promised)
  - [globals ![GitHub Repo stars](https://img.shields.io/github/stars/t-huth/eslint-plugin-chai-assert-bdd) ![GitHub last commit](https://img.shields.io/github/last-commit/t-huth/eslint-plugin-chai-assert-bdd)](https://github.com/t-huth/eslint-plugin-chai-assert-bdd)
- [Cucumber ![GitHub Repo stars](https://img.shields.io/github/stars/darrinholst/eslint-plugin-cucumber) ![GitHub last commit](https://img.shields.io/github/last-commit/darrinholst/eslint-plugin-cucumber)](https://github.com/darrinholst/eslint-plugin-cucumber) - Linting rules for Cucumber.
- [Cypress ![GitHub Repo stars](https://img.shields.io/github/stars/cypress-io/eslint-plugin-cypress) ![GitHub last commit](https://img.shields.io/github/last-commit/cypress-io/eslint-plugin-cypress)](https://github.com/cypress-io/eslint-plugin-cypress) - Linting rules for Cypress.
- [Jasmine ![GitHub Repo stars](https://img.shields.io/github/stars/tlvince/eslint-plugin-jasmine) ![GitHub last commit](https://img.shields.io/github/last-commit/tlvince/eslint-plugin-jasmine)](https://github.com/tlvince/eslint-plugin-jasmine) - Linting rules for Jasmine.
- Jest
  - [Enforcing practices ![GitHub Repo stars](https://img.shields.io/github/stars/jest-community/eslint-plugin-jest) ![GitHub last commit](https://img.shields.io/github/last-commit/jest-community/eslint-plugin-jest)](https://github.com/jest-community/eslint-plugin-jest) - Linting rules for Jest.
  - [Enforcing consistent formatting ![GitHub Repo stars](https://img.shields.io/github/stars/dangreenisrael/eslint-plugin-jest-formatting) ![GitHub last commit](https://img.shields.io/github/last-commit/dangreenisrael/eslint-plugin-jest-formatting)](https://github.com/dangreenisrael/eslint-plugin-jest-formatting) - Formatting rules for Jest.
  - [Jest-async](https://www.npmjs.com/package/eslint-plugin-jest-async) - Async linting rule for Jest.
  - [Jest-DOM ![GitHub Repo stars](https://img.shields.io/github/stars/testing-library/eslint-plugin-jest-dom) ![GitHub last commit](https://img.shields.io/github/last-commit/testing-library/eslint-plugin-jest-dom)](https://github.com/testing-library/eslint-plugin-jest-dom) - Linting rules for Jest-DOM.
- Mocha
  - [Enforcing practices ![GitHub Repo stars](https://img.shields.io/github/stars/lo1tuma/eslint-plugin-mocha) ![GitHub last commit](https://img.shields.io/github/last-commit/lo1tuma/eslint-plugin-mocha)](https://github.com/lo1tuma/eslint-plugin-mocha) - Linting rules for Mocha.
  - [Enforcing manageability ![GitHub Repo stars](https://img.shields.io/github/stars/onechiporenko/eslint-plugin-mocha-cleanup) ![GitHub last commit](https://img.shields.io/github/last-commit/onechiporenko/eslint-plugin-mocha-cleanup)](https://github.com/onechiporenko/eslint-plugin-mocha-cleanup/)
- [QUnit ![GitHub Repo stars](https://img.shields.io/github/stars/platinumazure/eslint-plugin-qunit) ![GitHub last commit](https://img.shields.io/github/last-commit/platinumazure/eslint-plugin-qunit)](https://github.com/platinumazure/eslint-plugin-qunit) - Linting rules for QUnit.
- [Testcafe ![GitHub Repo stars](https://img.shields.io/github/stars/miherlosev/eslint-plugin-testcafe) ![GitHub last commit](https://img.shields.io/github/last-commit/miherlosev/eslint-plugin-testcafe)](https://github.com/miherlosev/eslint-plugin-testcafe) - Linting rules for Testcafe.
- [Testing Library ![GitHub Repo stars](https://img.shields.io/github/stars/testing-library/eslint-plugin-testing-library) ![GitHub last commit](https://img.shields.io/github/last-commit/testing-library/eslint-plugin-testing-library)](https://github.com/testing-library/eslint-plugin-testing-library) - Linting rules for Testing Library.

## Parsers

- [Babel ![GitHub Repo stars](https://img.shields.io/github/stars/babel/babel-eslint) ![GitHub last commit](https://img.shields.io/github/last-commit/babel/babel-eslint)](https://github.com/babel/babel-eslint) - Use Babel's parser for linting all Babel features.
- [TypeScript ![GitHub Repo stars](https://img.shields.io/github/stars/typescript-eslint/typescript-eslint) ![GitHub last commit](https://img.shields.io/github/last-commit/typescript-eslint/typescript-eslint)](https://github.com/typescript-eslint/typescript-eslint) - A TypeScript parser that produces output compatible with ESLint.
- [BrightScript ![GitHub Repo stars](https://img.shields.io/github/stars/RokuRoad/eslint-plugin-roku) ![GitHub last commit](https://img.shields.io/github/last-commit/RokuRoad/eslint-plugin-roku)](https://github.com/RokuRoad/eslint-plugin-roku) - BrightScript plugin for Roku development. Includes Parser and Rules.
- [GraphQL ![GitHub Repo stars](https://img.shields.io/github/stars/dotansimha/graphql-eslint) ![GitHub last commit](https://img.shields.io/github/last-commit/dotansimha/graphql-eslint)](https://github.com/dotansimha/graphql-eslint) - Parser for the GraphQL AST. Includes parser, plugin, processor (for non-graphql files) and rules.

## Formatters

<!-- ignore is to keep "github" lower-case -->
<!--lint ignore awesome-spell-check-->

- [badger ![GitHub Repo stars](https://img.shields.io/github/stars/brettz9/eslint-formatter-badger) ![GitHub last commit](https://img.shields.io/github/last-commit/brettz9/eslint-formatter-badger)](https://github.com/brettz9/eslint-formatter-badger) - Make SVG-based badges summarizing ESLint results (e.g., for use on a README).
- [git-log ![GitHub Repo stars](https://img.shields.io/github/stars/JamieMason/eslint-formatter-git-log) ![GitHub last commit](https://img.shields.io/github/last-commit/JamieMason/eslint-formatter-git-log)](https://github.com/JamieMason/eslint-formatter-git-log) - ESLint Formatter featuring Git Author, Date, and Hash.
- [github ![GitHub Repo stars](https://img.shields.io/github/stars/hipstersmoothie/eslint-formatter-github) ![GitHub last commit](https://img.shields.io/github/last-commit/hipstersmoothie/eslint-formatter-github)](https://github.com/hipstersmoothie/eslint-formatter-github) - See ESLint errors and warnings directly in pull requests.
- [gitlab](https://gitlab.com/remcohaszing/eslint-formatter-gitlab) - Output ESLint results in the GitLab code quality results.
- [mo ![GitHub Repo stars](https://img.shields.io/github/stars/fengzilong/eslint-formatter-mo) ![GitHub last commit](https://img.shields.io/github/last-commit/fengzilong/eslint-formatter-mo)](https://github.com/fengzilong/eslint-formatter-mo) - Good-lookin' ESLint formatter and also for delightful reading experience.
- [summary-chart ![GitHub Repo stars](https://img.shields.io/github/stars/davidjbradshaw/eslint-formatter-summary-chart) ![GitHub last commit](https://img.shields.io/github/last-commit/davidjbradshaw/eslint-formatter-summary-chart)](https://github.com/davidjbradshaw/eslint-formatter-summary-chart) - Format ESLint output into a bar chart.

## Globals

- [Restricted Globals ![GitHub Repo stars](https://img.shields.io/github/stars/sidoshi/eslint-restricted-globals) ![GitHub last commit](https://img.shields.io/github/last-commit/sidoshi/eslint-restricted-globals)](https://github.com/sidoshi/eslint-restricted-globals) - Expect `window` qualifier on globals that may otherwise be confusable as local variables.
- [ES and browser globals ![GitHub Repo stars](https://img.shields.io/github/stars/sindresorhus/globals) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/globals)](https://github.com/sindresorhus/globals) (originally from ESLint)
- [chai globals ![GitHub Repo stars](https://img.shields.io/github/stars/t-huth/eslint-plugin-chai-assert-bdd) ![GitHub last commit](https://img.shields.io/github/last-commit/t-huth/eslint-plugin-chai-assert-bdd)](https://github.com/t-huth/eslint-plugin-chai-assert-bdd)

## Tools

- [es-file-traverse ![GitHub Repo stars](https://img.shields.io/github/stars/brettz9/es-file-traverse) ![GitHub last commit](https://img.shields.io/github/last-commit/brettz9/es-file-traverse)](https://github.com/brettz9/es-file-traverse) - Obtain a list of only those files which are in use based on imports and/or requires from an entry file or files; list passable to ESLint. Intended esp. for linting 3rd party dependencies.
- [eslint-cli ![GitHub Repo stars](https://img.shields.io/github/stars/eslint/eslint-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/eslint/eslint-cli)](https://github.com/eslint/eslint-cli) - This is the `eslint` command that executes a local installed ESLint.
- [eslint-find-rules ![GitHub Repo stars](https://img.shields.io/github/stars/sarbbottam/eslint-find-rules) ![GitHub last commit](https://img.shields.io/github/last-commit/sarbbottam/eslint-find-rules)](https://github.com/sarbbottam/eslint-find-rules) - Find built-in ESLint rules you don't have in your custom config.
- [eslint-index ![GitHub Repo stars](https://img.shields.io/github/stars/wagerfield/eslint-index) ![GitHub last commit](https://img.shields.io/github/last-commit/wagerfield/eslint-index)](https://github.com/wagerfield/eslint-index) - CLI for finding and managing rules in ESLint config files.
- [eslint-multiplexer ![GitHub Repo stars](https://img.shields.io/github/stars/pimlie/eslint-multiplexer) ![GitHub last commit](https://img.shields.io/github/last-commit/pimlie/eslint-multiplexer)](https://github.com/pimlie/eslint-multiplexer) - Multiplex eslint results and merge results for common files.
- [eslint-nibble ![GitHub Repo stars](https://img.shields.io/github/stars/IanVS/eslint-nibble) ![GitHub last commit](https://img.shields.io/github/last-commit/IanVS/eslint-nibble)](https://github.com/IanVS/eslint-nibble) - Ease into ESLint, by fixing one rule at a time.
- [eslint-rule-documentation ![GitHub Repo stars](https://img.shields.io/github/stars/jfmengels/eslint-rule-documentation) ![GitHub last commit](https://img.shields.io/github/last-commit/jfmengels/eslint-rule-documentation)](https://github.com/jfmengels/eslint-rule-documentation) - Find the url for the documentation of an ESLint rule.
- [eslint-watch ![GitHub Repo stars](https://img.shields.io/github/stars/rizowski/eslint-watch) ![GitHub last commit](https://img.shields.io/github/last-commit/rizowski/eslint-watch)](https://github.com/rizowski/eslint-watch) - Run ESLint with watch mode.
- [codacy-eslint ![GitHub Repo stars](https://img.shields.io/github/stars/codacy/codacy-eslint) ![GitHub last commit](https://img.shields.io/github/last-commit/codacy/codacy-eslint)](https://github.com/codacy/codacy-eslint) - Docker used at [Codacy](https://www.codacy.com) to run ESLint.
- [esprint ![GitHub Repo stars](https://img.shields.io/github/stars/pinterest/esprint) ![GitHub last commit](https://img.shields.io/github/last-commit/pinterest/esprint)](https://github.com/pinterest/esprint) - Run ESLint across multiple threads.
- [generator-eslint ![GitHub Repo stars](https://img.shields.io/github/stars/eslint/generator-eslint) ![GitHub last commit](https://img.shields.io/github/last-commit/eslint/generator-eslint)](https://github.com/eslint/generator-eslint) - Generate ESLint
  plugin and rules with [Yeoman](http://yeoman.io/).
- [editor-info ![GitHub Repo stars](https://img.shields.io/github/stars/fisker/editor-info) ![GitHub last commit](https://img.shields.io/github/last-commit/fisker/editor-info)](https://github.com/fisker/editor-info) - Detect whether one is within an editor/IDE and which type, allowing one to tweak ESLint configuration accordingly.

## Developing for ESLint

- [eslint-docs ![GitHub Repo stars](https://img.shields.io/github/stars/j-f1/eslint-docs) ![GitHub last commit](https://img.shields.io/github/last-commit/j-f1/eslint-docs)](https://github.com/j-f1/eslint-docs) - Keep your rule descriptions up-to-date across the repository.

## Tutorials

- [Creating an ESLint Plugin](https://medium.com/tumblbug-engineering/creating-an-eslint-plugin-87f1cb42767f) - Article walking through the creation of an ESLint rule and plugin.
- [Lint Like It's 2015](https://medium.com/@dan_abramov/lint-like-it-s-2015-6987d44c5b48#.5p3yk0b03) - Article walking through the benefits of using ESLint.
- [Linting JavaScript with ESLint](https://egghead.io/lessons/javascript-linting-javascript-with-eslint) - Video showing ESLint setup and basics.
- [Linting React JSX with ESLint (in ES6)](https://egghead.io/lessons/react-linting-react-jsx-with-eslint-in-es6) - Video showing how to use React and JSX with ESLint.
- [Plugin Module with Mixins](https://chrysanthium.com/eslint-integration) - Article on how to write a plugin as a node module containing modular mixin configuration.
- [Writing a rule to spot undeclared props hiding in plain sight](http://blog.cowchimp.com/writing-a-custom-eslint-rule-to-spot-undeclared-props/) - Article about creating rules that require scope analysis.

## Installation and Setup

- [Lintier ![GitHub Repo stars](https://img.shields.io/github/stars/josh-stillman/lintier) ![GitHub last commit](https://img.shields.io/github/last-commit/josh-stillman/lintier)](https://github.com/josh-stillman/lintier) - CLI to quickly scaffold an ESLint & Prettier setup in a TypeScript project.
