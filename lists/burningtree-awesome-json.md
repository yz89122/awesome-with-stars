# Awesome JSON [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)
A curated list of awesome JSON libraries and resources.

Inspired by the [awesome ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome)](https://github.com/sindresorhus/awesome) list.

* [Awesome JSON](#awesome-json)
  * [Applications](#applications)
  * [Binary Serialization](#binary-serialization)
  * [Browser Extensions](#browser-extensions)
  * [Command-line tools](#command-line-tools)
  * [Databases](#databases)
  * [Datasets](#datasets)
  * [Data modeling](#data-modeling)
  * [Data generation](#data-generation)
  * [Differencing](#differencing)
  * [Editors](#editors)
  * [Format Extensions](#format-extensions)
  * [Frontend components](#frontend-components)
  * [Libraries](#libraries)
  * [Linters](#linters)
  * [Online tools](#online-tools)
  * [Schema Specifications](#schema-specifications)
  * [Services](#services)
  * [Supersets](#supersets)
  * [Related formats](#related-formats)
  * [Resources](#resources)
  * [Templates](#templates)
  * [Testing](#testing)
  * [Text Editor Plugins](#text-editor-plugins)
  * [Transformations](#transformations)
  * [Tutorials](#tutorials)
  * [Queries](#queries)
  * [JSON Schema Frontend components](#json-schema-frontend-components)
  * [JSON Schema Tools](#json-schema-tools)
  * [JSON Schema Resources](#json-schema-resources)
  * [JSON Schema Validators](#json-schema-validators)
  * [Contribute](#contribute)

## Applications
**OS X**
* [Visual JSON](https://apps.apple.com/app/id488709442) ([github ![GitHub Repo Stars](https://img.shields.io/github/stars/youknowone/VisualJSON) ![GitHub last commit](https://img.shields.io/github/last-commit/youknowone/VisualJSON)](https://github.com/youknowone/VisualJSON)) - simple JSON pretty-viewer for Mac OS X.
* [JSONExport ![GitHub Repo Stars](https://img.shields.io/github/stars/Ahmed-Ali/JSONExport) ![GitHub last commit](https://img.shields.io/github/last-commit/Ahmed-Ali/JSONExport)](https://github.com/Ahmed-Ali/JSONExport) - convert a object to a class of one of the currently supported languages.

## Binary Serialization
* [BSON](http://bsonspec.org/) - Binary JSON.
* [MessagePack](https://msgpack.org/) - An extremely efficient object serialization library.
* [UBJSON](https://ubjson.org/) - The universally compatible format specification for binary JSON.
* [CBOR](https://tools.ietf.org/html/rfc7049) - Concise Binary Object Representation.
* [PSON ![GitHub Repo Stars](https://img.shields.io/github/stars/dcodeIO/PSON) ![GitHub last commit](https://img.shields.io/github/last-commit/dcodeIO/PSON)](https://github.com/dcodeIO/PSON) - Protocol JSON, super efficient binary serialization format.
* [JSON BinPack](https://www.jsonbinpack.org) - Space-efficient binary JSON serialization format based on JSON Schema.

## Browser Extensions
**Chrome**
* [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa) ([github ![GitHub Repo Stars](https://img.shields.io/github/stars/callumlocke/json-formatter) ![GitHub last commit](https://img.shields.io/github/last-commit/callumlocke/json-formatter)](https://github.com/callumlocke/json-formatter)) - Makes JSON easy to read. Open source.
* [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh) ([github ![GitHub Repo Stars](https://img.shields.io/github/stars/tulios/json-viewer) ![GitHub last commit](https://img.shields.io/github/last-commit/tulios/json-viewer)](https://github.com/tulios/json-viewer)) - It is a Chrome extension for printing JSON and JSONP.
* [JSON Browser](https://chrome.google.com/webstore/detail/json-browser/hngfgkmimoikmpohakflgadcajkfnoba) ([github ![GitHub Repo Stars](https://img.shields.io/github/stars/platy/json-browser) ![GitHub last commit](https://img.shields.io/github/last-commit/platy/json-browser)](https://github.com/platy/json-browser/)) - Browse a JSON web with the help of JSON schemas.
* [JSON Finder](https://chrome.google.com/webstore/detail/json-finder/flhdcaebggmmpnnaljiajhihdfconkbj) ([github ![GitHub Repo Stars](https://img.shields.io/github/stars/rapee/jsonfinder) ![GitHub last commit](https://img.shields.io/github/last-commit/rapee/jsonfinder)](https://github.com/rapee/jsonfinder)) - Browse like you do it in Finder.
* [JSON Viewer Pro](https://chrome.google.com/webstore/detail/json-viewer-pro/eifflpmocdbdmepbjaopkkhbfmdgijcc) ([github ![GitHub Repo Stars](https://img.shields.io/github/stars/rbrahul/Awesome-JSON-Viewer) ![GitHub last commit](https://img.shields.io/github/last-commit/rbrahul/Awesome-JSON-Viewer)](https://github.com/rbrahul/Awesome-JSON-Viewer) - An open source Chrome extension for browsing JSON with syntax highlighting and folding, or as a visual graph.
* [Discoverable JSON](https://chrome.google.com/webstore/detail/json-manipulator-json-to/pcakbljjigdafljigcpbmjllkbhlncjg) ([github ![GitHub Repo Stars](https://img.shields.io/github/stars/noitcudni/discoverable-json) ![GitHub last commit](https://img.shields.io/github/last-commit/noitcudni/discoverable-json)](https://github.com/noitcudni/discoverable-json)) - Gron inspired Extension. Convert a JSON document into javascript expressions. Comes with filter, remove, find-and-replace capabilities.

**Firefox**
* [JSONView](https://addons.mozilla.org/en-US/firefox/addon/jsonview/) ([github ![GitHub Repo Stars](https://img.shields.io/github/stars/bhollis/jsonview) ![GitHub last commit](https://img.shields.io/github/last-commit/bhollis/jsonview)](https://github.com/bhollis/jsonview)) - View JSON documents in the browser.

**Safari**
* [JSONAce](https://apps.apple.com/us/story/id1377753262?id=com.acrogenesis.jsonace-56Q494QF3LL) ([github ![GitHub Repo Stars](https://img.shields.io/github/stars/acrogenesis/JSONAce) ![GitHub last commit](https://img.shields.io/github/last-commit/acrogenesis/JSONAce)](https://github.com/acrogenesis/JSONAce)) - Formats & syntax highlights JSON viewed inside of the web browser using the ACE editor.
* [JSONView](https://apps.apple.com/us/story/id1377753262?id=com.acrogenesis.jsonview-56Q494QF3L) ([github ![GitHub Repo Stars](https://img.shields.io/github/stars/acrogenesis/jsonview-safari) ![GitHub last commit](https://img.shields.io/github/last-commit/acrogenesis/jsonview-safari)](https://github.com/acrogenesis/jsonview-safari)) - A port of the JSONView Firefox extension that formats and syntax highlights JSON viewed inside of the browser

## Command-line tools
* [dsq ![GitHub Repo Stars](https://img.shields.io/github/stars/multiprocessio/dsq) ![GitHub last commit](https://img.shields.io/github/last-commit/multiprocessio/dsq)](https://github.com/multiprocessio/dsq) - Tool for running SQL queries against JSON, CSV, Excel, Parquet, and more.
* [fx ![GitHub Repo Stars](https://img.shields.io/github/stars/antonmedv/fx) ![GitHub last commit](https://img.shields.io/github/last-commit/antonmedv/fx)](https://github.com/antonmedv/fx) - A interactive terminal tool.
* [jo ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmens/jo) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmens/jo)](https://github.com/jpmens/jo) - A small utility to create JSON objects
* [jsoncat ![GitHub Repo Stars](https://img.shields.io/github/stars/pantuza/jsoncat) ![GitHub last commit](https://img.shields.io/github/last-commit/pantuza/jsoncat)](https://github.com/pantuza/jsoncat) - Pretty-print Json in terminal with colors and adjusting tabs size.
* [jq](http://stedolan.github.io/jq/) - A lightweight and flexible command-line JSON processor.
* [json](http://trentm.com/json/) - A "json" command for massaging JSON on your Unix command line.
* [jshon](http://kmkeen.com/jshon/) - A parser designed for maximum convenience within the shell.
* [jarg](http://jdp.github.io/jarg/) - Shorthand JSON and form encoding syntax in the shell.
* [jsawk ![GitHub Repo Stars](https://img.shields.io/github/stars/micha/jsawk) ![GitHub last commit](https://img.shields.io/github/last-commit/micha/jsawk)](https://github.com/micha/jsawk) - Like awk, but for JSON.
* [json-dotenv ![GitHub Repo Stars](https://img.shields.io/github/stars/decryptus/json-dotenv) ![GitHub last commit](https://img.shields.io/github/last-commit/decryptus/json-dotenv)](https://github.com/decryptus/json-dotenv) - Manipulate and extract envfiles in json format.
* [gron ![GitHub Repo Stars](https://img.shields.io/github/stars/tomnomnom/gron) ![GitHub last commit](https://img.shields.io/github/last-commit/tomnomnom/gron)](https://github.com/tomnomnom/gron) - Convert a JSON file into discrete assignments that are greppable.
* [jid ![GitHub Repo Stars](https://img.shields.io/github/stars/simeji/jid) ![GitHub last commit](https://img.shields.io/github/last-commit/simeji/jid)](https://github.com/simeji/jid) - Incremental Digger. Drill down JSON interactively by using filtering queries like jq.
* [jiq ![GitHub Repo Stars](https://img.shields.io/github/stars/fiatjaf/jiq) ![GitHub last commit](https://img.shields.io/github/last-commit/fiatjaf/jiq)](https://github.com/fiatjaf/jiq) - It's `jid` with `jq`. You can drill down interactively by using `jq` filtering queries.
* [jv ![GitHub Repo Stars](https://img.shields.io/github/stars/maxzender/jv) ![GitHub last commit](https://img.shields.io/github/last-commit/maxzender/jv)](https://github.com/maxzender/jv) - jv (for jsonviewer) helps you view your JSON.
* [jl ![GitHub Repo Stars](https://img.shields.io/github/stars/chrisdone/jl) ![GitHub last commit](https://img.shields.io/github/last-commit/chrisdone/jl)](https://github.com/chrisdone/jl) - Functional sed for JSON.
* [oj ![GitHub Repo Stars](https://img.shields.io/github/stars/ohler55/ojg) ![GitHub last commit](https://img.shields.io/github/last-commit/ohler55/ojg)](https://github.com/ohler55/ojg) - A fast and flexible command line JSON processor.
* [visidata ![GitHub Repo Stars](https://img.shields.io/github/stars/saulpw/visidata) ![GitHub last commit](https://img.shields.io/github/last-commit/saulpw/visidata)](https://github.com/saulpw/visidata) - A terminal spreadsheet-like tool for interactively exploring data.

## Databases
* [MongoDB](https://www.mongodb.com/) - an open-source document database, and the leading NoSQL database.
* [RethinkDB](https://rethinkdb.com/) - An open-source distributed document database with a pleasant and powerful query language.
* [EJDB ![GitHub Repo Stars](https://img.shields.io/github/stars/Softmotions/ejdb) ![GitHub last commit](https://img.shields.io/github/last-commit/Softmotions/ejdb)](https://github.com/Softmotions/ejdb) - Embedded JSON Database engine published under MIT license. (C)
* [lowdb ![GitHub Repo Stars](https://img.shields.io/github/stars/typicode/lowdb) ![GitHub last commit](https://img.shields.io/github/last-commit/typicode/lowdb)](https://github.com/typicode/lowdb) - Flat file database built on lodash API. (Javascript)
* [Lawnchair ![GitHub Repo Stars](https://img.shields.io/github/stars/brianleroux/lawnchair) ![GitHub last commit](https://img.shields.io/github/last-commit/brianleroux/lawnchair)](https://github.com/brianleroux/lawnchair) - A lightweight clientside document store. (Javascript)
* [JSON ODM ![GitHub Repo Stars](https://img.shields.io/github/stars/konsultaner/jsonOdm) ![GitHub last commit](https://img.shields.io/github/last-commit/konsultaner/jsonOdm)](https://github.com/konsultaner/jsonOdm) - Object document mapper for JavaScript to use on the server or in the browser. (Javascript)
* [JSON Server ![GitHub Repo Stars](https://img.shields.io/github/stars/typicode/json-server) ![GitHub last commit](https://img.shields.io/github/last-commit/typicode/json-server)](https://github.com/typicode/json-server) - Get a full fake REST API with zero coding in less than 30 seconds.
* [Kinto ![GitHub Repo Stars](https://img.shields.io/github/stars/Kinto/kinto) ![GitHub last commit](https://img.shields.io/github/last-commit/Kinto/kinto)](https://github.com/Kinto/kinto) - A lightweight JSON storage service with synchronisation and sharing abilities.
* [CouchDB](https://couchdb.apache.org/) - Seamless multi-master sync, that scales from Big Data to Mobile, with an Intuitive HTTP/JSON API and designed for Reliability.
* [RxDB ![GitHub Repo Stars](https://img.shields.io/github/stars/pubkey/rxdb) ![GitHub last commit](https://img.shields.io/github/last-commit/pubkey/rxdb)](https://github.com/pubkey/rxdb) - Event-driven JSON-Database with JSON-Schema, mango-Query and CouchDB-sync. (Javascript)
* [JSONlite ![GitHub Repo Stars](https://img.shields.io/github/stars/nodesocket/jsonlite) ![GitHub last commit](https://img.shields.io/github/last-commit/nodesocket/jsonlite)](https://github.com/nodesocket/jsonlite) - A simple, self-contained, serverless, zero-configuration, json document store. (Bash)

## Datasets
* [country.io](http://country.io/data/) - Various country related datasets, as JSON inc currency, country codes, names and more
* [countries ![GitHub Repo Stars](https://img.shields.io/github/stars/mledoze/countries) ![GitHub last commit](https://img.shields.io/github/last-commit/mledoze/countries)](https://github.com/mledoze/countries) - World countries.
* [vat-rates](http://jsonvat.com/) - VAT rates for all EU countries.
* [MTG JSON](https://mtgjson.com/) - Up to date Magic the Gathering card data.
* [Heartstone JSON](https://hearthstonejson.com/) - Up to date Hearthstone card data.
* [getCountries()](https://peric.github.io/GetCountries/) - Generator for custom Countries data.

## Data modeling
* [JSONModel ![GitHub Repo Stars](https://img.shields.io/github/stars/jsonmodel/jsonmodel) ![GitHub last commit](https://img.shields.io/github/last-commit/jsonmodel/jsonmodel)](https://github.com/jsonmodel/jsonmodel) - Magical Data Modelling Framework. (Objective-C)

## Data generation
* [jsonymize ![GitHub Repo Stars](https://img.shields.io/github/stars/cameronhunter/jsonymize) ![GitHub last commit](https://img.shields.io/github/last-commit/cameronhunter/jsonymize)](https://github.com/cameronhunter/jsonymize) - Reads data from standard input, anonymizes, then writes to standard output.
* [dyson ![GitHub Repo Stars](https://img.shields.io/github/stars/webpro/dyson) ![GitHub last commit](https://img.shields.io/github/last-commit/webpro/dyson)](https://github.com/webpro/dyson) - Server for dynamic, fake JSON. (node.js)

## Differencing
* [JSONPatch](http://jsonpatch.com/) - A format for describing changes to a document.
* [JSON-Patch ![GitHub Repo Stars](https://img.shields.io/github/stars/Starcounter-Jack/JSON-Patch) ![GitHub last commit](https://img.shields.io/github/last-commit/Starcounter-Jack/JSON-Patch)](https://github.com/Starcounter-Jack/JSON-Patch) - Lean and mean Javascript implementation of the JSON-Patch standard (RFC 6902). (Javascript)
* [jiff ![GitHub Repo Stars](https://img.shields.io/github/stars/cujojs/jiff) ![GitHub last commit](https://img.shields.io/github/last-commit/cujojs/jiff)](https://github.com/cujojs/jiff) - JSON Patch and diff based on rfc6902. (Javascript)
* [json-patch-php ![GitHub Repo Stars](https://img.shields.io/github/stars/mikemccabe/json-patch-php) ![GitHub last commit](https://img.shields.io/github/last-commit/mikemccabe/json-patch-php)](https://github.com/mikemccabe/json-patch-php) - implementation of JSON-patch (IETF RFC 6902) (PHP)
* [dffptch ![GitHub Repo Stars](https://img.shields.io/github/stars/paldepind/dffptch) ![GitHub last commit](https://img.shields.io/github/last-commit/paldepind/dffptch)](https://github.com/paldepind/dffptch) - A micro library for diffing and patching using a compact diff format. (Javascript)
* [jsondiffpatch ![GitHub Repo Stars](https://img.shields.io/github/stars/benjamine/jsondiffpatch) ![GitHub last commit](https://img.shields.io/github/last-commit/benjamine/jsondiffpatch)](https://github.com/benjamine/jsondiffpatch) - Diff & patch for JavaScript objects. (Javascript)

## Editors
* [FrontAid CMS](https://frontaid.io/) - Content Management System that supports arbitrary data model structures.
* [JSONEdit](http://mb21.github.io/JSONedit/) - User friendly, visual editor built as an AngularJS directive.

## Format Extensions
* [GeoJSON](https://geojson.org/) - A geospatial data interchange format.
* [JSON-LD](https://json-ld.org/) - A lightweight Linked Data format.
* [JSON-RPC](https://www.jsonrpc.org/) - A stateless, light-weight remote procedure call (RPC) protocol.
* [JSONP](https://en.wikipedia.org/wiki/JSONP) - Safer cross-domain Ajax with JSON-P/JSONP.
* [JsonML](http://www.jsonml.org/) - A compact format for transporting XML-based markup as JSON which allows it to be losslessly converted back to its original form.
* [JSON5](https://json5.org/) - a extension that aims to make it easier for humans to write and maintain by hand.
* [JSON6 ![GitHub Repo Stars](https://img.shields.io/github/stars/d3x0r/json6) ![GitHub last commit](https://img.shields.io/github/last-commit/d3x0r/json6)](https://github.com/d3x0r/json6) - JSON for Humans (ES6).
* [JSON 1.1/JSONX](https://json-next.github.io/) - An evolved version 1.1 with format extension for humans incl. comments, unquoted and multi-line strings, optional and trailing commas and more.
* [JSON Resume](https://jsonresume.org/) - The open source initiative to create standard for resumes.
* [JSON Web Tokens](https://jwt.io/) - A compact URL-safe means of representing claims to be transferred between two parties.
* [JSON API](https://jsonapi.org/) - A standard for building APIs.
* [Collection+JSON](http://amundsen.com/media-types/collection/) - A read/write hypermedia-type designed to support management and querying of simple collections.
* [hal-json](https://stateless.group/hal_specification.html) - A set of conventions for expressing hyperlinks in either JSON or XML.
* [JSON Activity Streams](https://activitystrea.ms/) - A format for syndicating social activities around the web.
* [JSON-stat ![GitHub Repo Stars](https://img.shields.io/github/stars/jsonstat/jsonstat) ![GitHub last commit](https://img.shields.io/github/last-commit/jsonstat/jsonstat)](https://github.com/jsonstat/jsonstat) - Simple lightweight format for data dissemination.
* [/contribute.json](https://www.contributejson.org/) - Making open source contribution information easier to access, across projects.
* [JSON Table Schema](https://frictionlessdata.io/table-schema/) - a simple schema for tabular data
* [NDJSON](http://ndjson.org/) (Newline delimited JSON) - a standard for delimiting JSON in stream protocols.
* [survey.js](http://surveyjs.org/) - JSON based survey library.
* [JSON Meta Application Protocol (JMAP)](https://jmap.io/) - A protocol for synchronising JSON-based data objects efficiently, with support for push and out-of-band binary data upload/download.
* [J<sub>ack</sub>SON: JSON secret keeper ![GitHub Repo Stars](https://img.shields.io/github/stars/r0hi7/jackson) ![GitHub last commit](https://img.shields.io/github/last-commit/r0hi7/jackson)](https://github.com/r0hi7/jackson) - JSONic way of storing secrets in config file.

## Frontend components
* [JSON editor jQuery plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/DavidDurman/FlexiJsonEditor) ![GitHub last commit](https://img.shields.io/github/last-commit/DavidDurman/FlexiJsonEditor)](https://github.com/DavidDurman/FlexiJsonEditor) - component for you web apps/pages. (jQuery)
* [jqTree](http://mbraak.github.io/jqTree/) - Widget for displaying a tree structure in html. (jQuery)
* [jsTree](https://www.jstree.com/docs/json/) - jquery plugin, that provides interactive trees. (jQuery)
* [Dynatable.js ![GitHub Repo Stars](https://img.shields.io/github/stars/alfajango/jquery-dynatable) ![GitHub last commit](https://img.shields.io/github/last-commit/alfajango/jquery-dynatable)](https://github.com/alfajango/jquery-dynatable) - A funner, semantic, HTML5+JSON, interactive table plugin. (jQuery)
* [JSON Formatter ![GitHub Repo Stars](https://img.shields.io/github/stars/mohsen1/json-formatter) ![GitHub last commit](https://img.shields.io/github/last-commit/mohsen1/json-formatter)](https://github.com/mohsen1/json-formatter) - Angular directive for collapsible JSON in HTML. (AngularJS)
* [react-jsonschema-form](https://rjsf-team.github.io/react-jsonschema-form/) - A React component for building Web forms from JSON Schema. (React)
* [ngx-formly ![GitHub Repo Stars](https://img.shields.io/github/stars/ngx-formly/ngx-formly) ![GitHub last commit](https://img.shields.io/github/last-commit/ngx-formly/ngx-formly)](https://github.com/ngx-formly/ngx-formly) - JSON powered / Dynamic forms for Angular

## Libraries
**C**
* [Jansson](https://digip.org/jansson/) - A C library for encoding, decoding and manipulating data.
* [jsmn](https://zserge.com/jsmn.html) - A minimalistic parser in C. It can be easily integrated into the resource-limited projects or embedded systems.
* [json-build ![GitHub Repo Stars](https://img.shields.io/github/stars/lcsmuller/json-build) ![GitHub last commit](https://img.shields.io/github/last-commit/lcsmuller/json-build)](https://github.com/lcsmuller/json-build) - A minimalistic serializer in C. It can be easily integrated into the resource-limited projects or embedded systems.
* [ojc ![GitHub Repo Stars](https://img.shields.io/github/stars/ohler55/ojc) ![GitHub last commit](https://img.shields.io/github/last-commit/ohler55/ojc)](https://github.com/ohler55/ojc) - A fast JSON parser.

**C++**
* [ArduinoJson ![GitHub Repo Stars](https://img.shields.io/github/stars/bblanchon/ArduinoJson) ![GitHub last commit](https://img.shields.io/github/last-commit/bblanchon/ArduinoJson)](https://github.com/bblanchon/ArduinoJson) - An efficient library for embedded systems.
* [JSON++ ![GitHub Repo Stars](https://img.shields.io/github/stars/tunnuz/json) ![GitHub last commit](https://img.shields.io/github/last-commit/tunnuz/json)](https://github.com/tunnuz/json) - A self contained Flex/Bison parser for C++11.
* [json11 ![GitHub Repo Stars](https://img.shields.io/github/stars/dropbox/json11) ![GitHub last commit](https://img.shields.io/github/last-commit/dropbox/json11)](https://github.com/dropbox/json11) - A tiny library for C++11.
* [Nlohmann JSON ![GitHub Repo Stars](https://img.shields.io/github/stars/nlohmann/json) ![GitHub last commit](https://img.shields.io/github/last-commit/nlohmann/json)](https://github.com/nlohmann/json) - A C++11 header-only class.
* [RapidJSON ![GitHub Repo Stars](https://img.shields.io/github/stars/Tencent/rapidjson) ![GitHub last commit](https://img.shields.io/github/last-commit/Tencent/rapidjson)](https://github.com/Tencent/rapidjson) - A fast JSON parser/generator for C++ with both SAX/DOM style API
* [simdjson ![GitHub Repo Stars](https://img.shields.io/github/stars/simdjson/simdjson) ![GitHub last commit](https://img.shields.io/github/last-commit/simdjson/simdjson)](https://github.com/simdjson/simdjson) - Parsing gigabytes of JSON per second.

**Clojure**
* [data.json ![GitHub Repo Stars](https://img.shields.io/github/stars/clojure/data.json) ![GitHub last commit](https://img.shields.io/github/last-commit/clojure/data.json)](https://github.com/clojure/data.json) - parser/generator to/from Clojure data structures.

**Fortran**
* [JSON-Fortran ![GitHub Repo Stars](https://img.shields.io/github/stars/jacobwilliams/json-fortran) ![GitHub last commit](https://img.shields.io/github/last-commit/jacobwilliams/json-fortran)](https://github.com/jacobwilliams/json-fortran) - A Fortran library for writing, reading, and manipulating JSON files and data structures.

**Go**
* [ojg ![GitHub Repo Stars](https://img.shields.io/github/stars/ohler55/ojg) ![GitHub last commit](https://img.shields.io/github/last-commit/ohler55/ojg)](https://github.com/ohler55/ojg) - A collection of high performance JSON processing and generating tool.

**Haskell**
* [aeson-qq ![GitHub Repo Stars](https://img.shields.io/github/stars/sol/aeson-qq) ![GitHub last commit](https://img.shields.io/github/last-commit/sol/aeson-qq)](https://github.com/sol/aeson-qq) - JSON quasiquoter for Haskell.
* [json-schema](http://hackage.haskell.org/package/json-schema) - JSON Schema library for Haskell
* [hjsonschema](http://hackage.haskell.org/package/hjsonschema) - JSON Schema Draft 4 library for Haskell

**Java**
* [JSON-java ![GitHub Repo Stars](https://img.shields.io/github/stars/stleary/JSON-java) ![GitHub last commit](https://img.shields.io/github/last-commit/stleary/JSON-java)](https://github.com/stleary/JSON-java) - A reference implementation.
* [Fast JSON Processor ![GitHub Repo Stars](https://img.shields.io/github/stars/alibaba/fastjson) ![GitHub last commit](https://img.shields.io/github/last-commit/alibaba/fastjson)](https://github.com/alibaba/fastjson)
* [Gson ![GitHub Repo Stars](https://img.shields.io/github/stars/google/gson) ![GitHub last commit](https://img.shields.io/github/last-commit/google/gson)](https://github.com/google/gson) - A Java library to convert JSON to Java objects and vice-versa.
* [Jackson ![GitHub Repo Stars](https://img.shields.io/github/stars/FasterXML/jackson) ![GitHub last commit](https://img.shields.io/github/last-commit/FasterXML/jackson)](https://github.com/FasterXML/jackson) - A multi-purpose Java library for processing JSON data format.
* [moshi ![GitHub Repo Stars](https://img.shields.io/github/stars/square/moshi) ![GitHub last commit](https://img.shields.io/github/last-commit/square/moshi)](https://github.com/square/moshi) - A modern JSON library for Android and Java.
* [essential-json ![GitHub Repo Stars](https://img.shields.io/github/stars/arkanovicz/essential-json) ![GitHub last commit](https://img.shields.io/github/last-commit/arkanovicz/essential-json)](https://github.com/arkanovicz/essential-json) - A lightweight Java library for serialization, parsing and manipulation with a clean and precise API.
* [dsl-json ![GitHub Repo Stars](https://img.shields.io/github/stars/ngs-doo/dsl-json) ![GitHub last commit](https://img.shields.io/github/last-commit/ngs-doo/dsl-json)](https://github.com/ngs-doo/dsl-json) - A very fast streaming JSON library. Operates on byte arrays.
* [mjson ![GitHub Repo Stars](https://img.shields.io/github/stars/bolerio/mjson) ![GitHub last commit](https://img.shields.io/github/last-commit/bolerio/mjson)](https://github.com/bolerio/mjson) - Lean JSON Library for Java, with a compact, elegant API.

**Javascript**
* [JSON-js ![GitHub Repo Stars](https://img.shields.io/github/stars/douglascrockford/JSON-js) ![GitHub last commit](https://img.shields.io/github/last-commit/douglascrockford/JSON-js)](https://github.com/douglascrockford/JSON-js) - JSON in JavaScript.
* [JSON 3](https://bestiejs.github.io/json3/) - A modern implementation.
* [oboe.js](http://oboejs.com/) - A streaming approach, speeds up web applications by providing parsed objects before the response completes.
* [FracturedJsonJs](https://www.npmjs.com/package/fracturedjsonjs) - A JSON formatter that produces human-readable but fairly compact output.

**Objective-C**
* [JSONKit ![GitHub Repo Stars](https://img.shields.io/github/stars/johnezang/JSONKit) ![GitHub last commit](https://img.shields.io/github/last-commit/johnezang/JSONKit)](https://github.com/johnezang/JSONKit) - Objective-C library.
* [SBJson ![GitHub Repo Stars](https://img.shields.io/github/stars/SBJson/SBJson) ![GitHub last commit](https://img.shields.io/github/last-commit/SBJson/SBJson)](https://github.com/SBJson/SBJson) - Parse one or more chunks of data.

**Perl**
* [JSON::Tiny ![GitHub Repo Stars](https://img.shields.io/github/stars/daoswald/JSON-Tiny) ![GitHub last commit](https://img.shields.io/github/last-commit/daoswald/JSON-Tiny)](https://github.com/daoswald/JSON-Tiny) - Perl module for encoding and decoding JSON in a minimalistic way.

**PL/SQL**
* [PL/JSON ![GitHub Repo Stars](https://img.shields.io/github/stars/pljson/pljson) ![GitHub last commit](https://img.shields.io/github/last-commit/pljson/pljson)](https://github.com/pljson/pljson) - A generic JSON object written in PL/SQL.

**PHP**
* [Webmozart JSON ![GitHub Repo Stars](https://img.shields.io/github/stars/webmozart/json) ![GitHub last commit](https://img.shields.io/github/last-commit/webmozart/json)](https://github.com/webmozart/json) - A robust decoder/encoder with support for schema validation.

**Python**
* [simplejson ![GitHub Repo Stars](https://img.shields.io/github/stars/simplejson/simplejson) ![GitHub last commit](https://img.shields.io/github/last-commit/simplejson/simplejson)](https://github.com/simplejson/simplejson) - A simple, fast, extensible encoder/decoder
* [jsonpickle](http://jsonpickle.github.io/) - Library for serializing any arbitrary object graph.
* [metamagic.json](https://pypi.org/project/metamagic.json/) - An ultra-fast Python 3 implementation of a JSON encoder.

**Ruby**
* [oj ![GitHub Repo Stars](https://img.shields.io/github/stars/ohler55/oj) ![GitHub last commit](https://img.shields.io/github/last-commit/ohler55/oj)](https://github.com/ohler55/oj) - A fast JSON parser and Object marshaller as a Ruby gem.
* [MultiJSON ![GitHub Repo Stars](https://img.shields.io/github/stars/intridea/multi_json) ![GitHub last commit](https://img.shields.io/github/last-commit/intridea/multi_json)](https://github.com/intridea/multi_json) - A generic swappable back-end for JSON handling.

**React**
* [json2react ![GitHub Repo Stars](https://img.shields.io/github/stars/txgruppi/json2react) ![GitHub last commit](https://img.shields.io/github/last-commit/txgruppi/json2react)](https://github.com/txgruppi/json2react) - Use JSON to create React Stateless Components.

**.NET**
* [jsonfx ![GitHub Repo Stars](https://img.shields.io/github/stars/jsonfx/jsonfx) ![GitHub last commit](https://img.shields.io/github/last-commit/jsonfx/jsonfx)](https://github.com/jsonfx/jsonfx) - serialization framework for .NET.
* [jsonapi-consumer ![GitHub Repo Stars](https://img.shields.io/github/stars/OKTAYKIR/jsonapi-consumer) ![GitHub last commit](https://img.shields.io/github/last-commit/OKTAYKIR/jsonapi-consumer)](https://github.com/OKTAYKIR/jsonapi-consumer) - Client framework for consuming JSONAPI based APIs on the [JSON API standard](https://jsonapi.org).
* [FracturedJson](https://www.nuget.org/packages/FracturedJson) - A formatter that produces human-readable but fairly compact output.

**Scala**
* [spray-json ![GitHub Repo Stars](https://img.shields.io/github/stars/spray/spray-json) ![GitHub last commit](https://img.shields.io/github/last-commit/spray/spray-json)](https://github.com/spray/spray-json) - A lightweight, clean and simple implementation in Scala.
* [circe ![GitHub Repo Stars](https://img.shields.io/github/stars/circe/circe) ![GitHub last commit](https://img.shields.io/github/last-commit/circe/circe)](https://github.com/circe/circe) - Yet another JSON library for Scala.
* [scala-jsonapi ![GitHub Repo Stars](https://img.shields.io/github/stars/scala-jsonapi/scala-jsonapi) ![GitHub last commit](https://img.shields.io/github/last-commit/scala-jsonapi/scala-jsonapi)](https://github.com/scala-jsonapi/scala-jsonapi) - Support library for integrating the JSON:API spec with Play, Spray and/or Circe backends.
* [jsoniter-scala ![GitHub Repo Stars](https://img.shields.io/github/stars/plokhotnyuk/jsoniter-scala) ![GitHub last commit](https://img.shields.io/github/last-commit/plokhotnyuk/jsoniter-scala)](https://github.com/plokhotnyuk/jsoniter-scala) - Scala macros for compile-time generation of ultra-fast JSON codecs.

**Shell**
* [jshn](https://openwrt.org/docs/guide-developer/jshn) - JSON parsing and generation library in for shell scripts (Ash/Bash)

**Swift**
* [SwiftyJSON ![GitHub Repo Stars](https://img.shields.io/github/stars/SwiftyJSON/SwiftyJSON) ![GitHub last commit](https://img.shields.io/github/last-commit/SwiftyJSON/SwiftyJSON)](https://github.com/SwiftyJSON/SwiftyJSON) - The better way to deal with data in Swift.

## Linters
* [jsonlint ![GitHub Repo Stars](https://img.shields.io/github/stars/zaach/jsonlint) ![GitHub last commit](https://img.shields.io/github/last-commit/zaach/jsonlint)](https://github.com/zaach/jsonlint) - Parser and validator with a CLI. (Javascript)
* [JSON Lint ![GitHub Repo Stars](https://img.shields.io/github/stars/Seldaek/jsonlint) ![GitHub last commit](https://img.shields.io/github/last-commit/Seldaek/jsonlint)](https://github.com/Seldaek/jsonlint) - PHP linter. (PHP)

## Online tools
* [JSONLint](https://jsonlint.com/) - The JSON Validator.
* [JSONCompare](https://jsoncompare.com/) - The Advanced Version of the JSON Linter.
* [JSONMate](https://www.jsonmate.com/) - JSON editor, inspector and beautifier.
* [JSON Editor online](http://jsoneditoronline.org/) - A web-based tool to view, edit and format.
* [Collapsible JSON Formatter](http://www.bodurov.com/JsonFormatter/) - Formatter and Colorer of Raw Code.
* [JSON Formatter and Validator](https://jsonformatter.curiousconcept.com/) - Formatter to help with debugging.
* [JSON Generator](https://www.json-generator.com/) - Tool for generating random data.
* [FakeJSON](https://fakejson.com/) - Web API to quickly generate fake data for your application.
* [JSON to CSV](https://konklone.io/json/) - A free, in-browser JSON to CSV converter.
* [CSV to JSON](https://mango-is.com/tools/csv-to-json/) - Easy, privacy-friendly and offline-first online csv to json converter
* [json2csharp](https://json2csharp.com/) - Generate c# classes from a json string or url.
* [JSON Utils](http://jsonutils.com/) - Site for generating C#, VB.Net, and Javascript classes from JSON.
* [geojson.io](http://geojson.io/) - Simply edit GeoJSON map data.
* [jq play](https://jqplay.org/) - A playground for jq.
* [json2yaml](https://www.json2yaml.com/) - Convert JSON to YAML online.
* [JSON Selector Generator](http://jsonselector.com/) - A simple GUI for generating the selectors to access.
* [JSON.fr](https://www.json.fr/) - Fully client-side validator and formatter.
* [ObjGen](http://www.objgen.com/json) - Online live JSON generator.
* [JsonStub](https://jsonstub.com/) - Online JSON faker.
* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Fake Online REST API for Testing and Prototyping.
* [Extends Class](https://extendsclass.com/json-diff.html) - Diff tool to compare two files.
* [JSON Schema Validate API](https://assertible.com/json-schema-validation) - A simple and free JSON Schema Validation API.
* [JSONLog](https://jsonlog.io/docs) - Logging and visualization of JSON from any client.
* [JSONPerf](https://jsonperf.com) - A Visual, Unbiased and Up-to-Date JSON Performance Benchmark.
* [FracturedJson](https://j-brooke.github.io/FracturedJson/) - Formatter that produces human-readable but fairly compact output.

## Schema Specifications
* [JSON Schema](http://json-schema.org/) - a JSON based format for defining the structure of JSON data.
* [Itemscript](https://code.google.com/archive/p/itemscript/) - Language for validating and specifying values.
* [Kwalify](http://www.kuwata-lab.com/kwalify/) - A parser, schema validator, and data binding tool
* [Rx](http://rx.codesimply.com/) - Simple, Extensible Schemata.

## Services
* [Exchange Rate API](https://www.exchangerate-api.com) - A simple and free API for currency exchange rate data.
* [ipinfo.io](https://ipinfo.io) - JSON IP and GeoIP REST API.
* [JSONProxy ![GitHub Repo Stars](https://img.shields.io/github/stars/afeld/jsonp) ![GitHub last commit](https://img.shields.io/github/last-commit/afeld/jsonp)](https://github.com/afeld/jsonp) - Simple HTTP proxy that enables cross-domain requests to any JSON API.
* [Myjson](http://myjson.com/) - A simple store for your web or mobile app.
* [Telize](http://www.telize.com/) - JSON IP and GeoIP REST API.
* [jsonpad](https://jsonpad.io/) - a simple JSON storage platform.

## Supersets
* [YAML](https://yaml.org) - A human friendly data serialization standard for all programming languages.
* [HanSON ![GitHub Repo Stars](https://img.shields.io/github/stars/timjansen/hanson) ![GitHub last commit](https://img.shields.io/github/last-commit/timjansen/hanson)](https://github.com/timjansen/hanson) - JSON for Humans - with unquoted identifiers, multi-line strings and comments.
* [μson ![GitHub Repo Stars](https://img.shields.io/github/stars/burningtree/uson) ![GitHub last commit](https://img.shields.io/github/last-commit/burningtree/uson)](https://github.com/burningtree/uson) (uson) - a shorthand for JSON.
* [HOCON ![GitHub Repo Stars](https://img.shields.io/github/stars/lightbend/config) ![GitHub last commit](https://img.shields.io/github/last-commit/lightbend/config)](https://github.com/lightbend/config/blob/master/HOCON.md) - Human-Optimized Config Object Notation.
* [ASON ![GitHub Repo Stars](https://img.shields.io/github/stars/sadmac7000/libason) ![GitHub last commit](https://img.shields.io/github/last-commit/sadmac7000/libason)](https://github.com/sadmac7000/libason) - A semantically complete superset of JSON (draft).
* [TOML ![GitHub Repo Stars](https://img.shields.io/github/stars/toml-lang/toml) ![GitHub last commit](https://img.shields.io/github/last-commit/toml-lang/toml)](https://github.com/toml-lang/toml) - A minimal configuration file format that's easy to read due to obvious semantics.
* [HCL ![GitHub Repo Stars](https://img.shields.io/github/stars/hashicorp/hcl) ![GitHub last commit](https://img.shields.io/github/last-commit/hashicorp/hcl)](https://github.com/hashicorp/hcl) - A structured configuration language that is both human and machine friendly.

## Tutorials
* [Introducing JSON](http://json.org/)
* [JSON Tutorial](https://www.w3resource.com/JSON/introduction.php) - An introductory tutorial on JavaScript Object Notation (JSON).
* [JSON - Rosetta Code](http://rosettacode.org/wiki/JSON) - Basic operations in different languages (57 languages in this moment).
* [What is JSON and how to use it](https://ilovecoding.org/lessons/json-what-is-json-and-how-to-use-it) - Video tutorial for beginners.
* [jq Primer: Munging JSON Data](https://andrew.gibiansky.com/) - How jq can be used to process JSON files just as effectively as traditional Unix tools.

## Related formats
* [AXON ![GitHub Repo Stars](https://img.shields.io/github/stars/intellimath/pyaxon) ![GitHub last commit](https://img.shields.io/github/last-commit/intellimath/pyaxon)](https://github.com/intellimath/pyaxon) - A simple text based format for interchanging of objects, documents and data. It tries to combine the best of JSON, XML and YAML.
* [CSON ![GitHub Repo Stars](https://img.shields.io/github/stars/bevry/cson) ![GitHub last commit](https://img.shields.io/github/last-commit/bevry/cson)](https://github.com/bevry/cson) - CoffeeScript-Object-Notation. JSON for CoffeeScript objects.
* [MSON ![GitHub Repo Stars](https://img.shields.io/github/stars/apiaryio/mson) ![GitHub last commit](https://img.shields.io/github/last-commit/apiaryio/mson)](https://github.com/apiaryio/mson) - Markdown syntax compatible with describing JSON and JSON Schema.
* [ArchieML](http://archieml.org/) - Structured text format optimized for human writability.

## Resources
* [Type-o-rama ![GitHub Repo Stars](https://img.shields.io/github/stars/stereobooster/type-o-rama) ![GitHub last commit](https://img.shields.io/github/last-commit/stereobooster/type-o-rama)](https://github.com/stereobooster/type-o-rama) - JS type systems interportability, comparison of different JS type systems and conversion between them.
* [Awesome jq ![GitHub Repo Stars](https://img.shields.io/github/stars/fiatjaf/awesome-jq) ![GitHub last commit](https://img.shields.io/github/last-commit/fiatjaf/awesome-jq)](https://github.com/fiatjaf/awesome-jq) - A curated list of awesome jq tools and resources.

## Templates
* [Jsonnet](https://jsonnet.org/) - A domain specific configuration language that helps you define JSON data.
* [rabl ![GitHub Repo Stars](https://img.shields.io/github/stars/nesquena/rabl) ![GitHub last commit](https://img.shields.io/github/last-commit/nesquena/rabl)](https://github.com/nesquena/rabl) - General ruby templating with json, bson, xml, plist and msgpack support. (Ruby)
* [json2html](http://json2html.com/) - HTML templating library with wrappers for both jQuery and Node.js. (Javascript)

## Testing
* [JSON Test](http://www.jsontest.com/) - Testing platform for services utilizing JavaScript Object Notation (JSON).
* [JSONassert ![GitHub Repo Stars](https://img.shields.io/github/stars/skyscreamer/JSONassert) ![GitHub last commit](https://img.shields.io/github/last-commit/skyscreamer/JSONassert)](https://github.com/skyscreamer/JSONassert) - Write JSON unit tests in less code. Great for testing REST interfaces. (Java)
* [JsonUnit ![GitHub Repo Stars](https://img.shields.io/github/stars/lukas-krecan/JsonUnit) ![GitHub last commit](https://img.shields.io/github/last-commit/lukas-krecan/JsonUnit)](https://github.com/lukas-krecan/JsonUnit) - A library that simplifies JSON comparison in unit tests. It's strongly inspired by XmlUnit.
* [JSON Parsing Test Suite ![GitHub Repo Stars](https://img.shields.io/github/stars/nst/JSONTestSuite) ![GitHub last commit](https://img.shields.io/github/last-commit/nst/JSONTestSuite)](https://github.com/nst/JSONTestSuite) - A very complete test suite and validation framework.

## Text Editor Plugins
**Emacs**
* [JSON Reformat ![GitHub Repo Stars](https://img.shields.io/github/stars/gongo/json-reformat) ![GitHub last commit](https://img.shields.io/github/last-commit/gongo/json-reformat)](https://github.com/gongo/json-reformat) - Reformat tool.

**Vim**
* [vim-json ![GitHub Repo Stars](https://img.shields.io/github/stars/elzr/vim-json) ![GitHub last commit](https://img.shields.io/github/last-commit/elzr/vim-json)](https://github.com/elzr/vim-json) - A better JSON for Vim: distinct highlighting of keywords vs values, JSON-specific (non-JS) warnings, quote concealing. Pathogen-friendly.

**Visual Studio Code**
* [FracturedJsonVsc](https://marketplace.visualstudio.com/items?itemName=j-brooke.fracturedjsonvsc) - Formatter that produces human-readable but fairly compact output.

**Neovim**
* [nvim-jqx ![GitHub Repo Stars](https://img.shields.io/github/stars/gennaro-tedesco/nvim-jqx) ![GitHub last commit](https://img.shields.io/github/last-commit/gennaro-tedesco/nvim-jqx)](https://github.com/gennaro-tedesco/nvim-jqx) - Browse and query json files in neovim from the quickfix window. (Lua)

## Transformations
* [json-sharp ![GitHub Repo Stars](https://img.shields.io/github/stars/globocom/json-sharp) ![GitHub last commit](https://img.shields.io/github/last-commit/globocom/json-sharp)](https://github.com/globocom/json-sharp) - Javascript tool to process operations on pure JSON objects. (Javascript)
* [json2json ![GitHub Repo Stars](https://img.shields.io/github/stars/joelvh/json2json) ![GitHub last commit](https://img.shields.io/github/last-commit/joelvh/json2json)](https://github.com/joelvh/json2json) - Transform (reformat) structures from one to another. (Javascript)
* [trans ![GitHub Repo Stars](https://img.shields.io/github/stars/gabesoft/trans) ![GitHub last commit](https://img.shields.io/github/last-commit/gabesoft/trans)](https://github.com/gabesoft/trans) - The ultimate object transformer. (Javascript)
* [osmtogeojson ![GitHub Repo Stars](https://img.shields.io/github/stars/tyrasd/osmtogeojson) ![GitHub last commit](https://img.shields.io/github/last-commit/tyrasd/osmtogeojson)](https://github.com/tyrasd/osmtogeojson) - Converts OSM data to GeoJSON. (Javascript)
* [fast-xml-parser ![GitHub Repo Stars](https://img.shields.io/github/stars/NaturalIntelligence/fast-xml-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/NaturalIntelligence/fast-xml-parser)](https://github.com/NaturalIntelligence/fast-xml-parser) - Fast XML to JSON and vice versa javascript/JSON conversion.
* [x2js ![GitHub Repo Stars](https://img.shields.io/github/stars/abdolence/x2js) ![GitHub last commit](https://img.shields.io/github/last-commit/abdolence/x2js)](https://github.com/abdolence/x2js) - XML to JSON and vice versa javascript conversion functions. (Javascript)
* [JSONC ![GitHub Repo Stars](https://img.shields.io/github/stars/tcorral/JSONC) ![GitHub last commit](https://img.shields.io/github/last-commit/tcorral/JSONC)](https://github.com/tcorral/JSONC) - JSON compressor and decompressor. (Javascript)
* [JsonMapper ![GitHub Repo Stars](https://img.shields.io/github/stars/cweiske/jsonmapper) ![GitHub last commit](https://img.shields.io/github/last-commit/cweiske/jsonmapper)](https://github.com/cweiske/jsonmapper) - Map nested structures onto PHP classes (PHP)
* [SassyJSON ![GitHub Repo Stars](https://img.shields.io/github/stars/KittyGiraudel/SassyJSON) ![GitHub last commit](https://img.shields.io/github/last-commit/KittyGiraudel/SassyJSON)](https://github.com/KittyGiraudel/SassyJSON) - Sass-powered API. (Sass)
* [json.human.js](http://marianoguerra.github.io/json.human.js/) - A small library to convert a JSON object into a human readable HTML representation that is easy to style for different purposes.
* [JSONtoFoundation ![GitHub Repo Stars](https://img.shields.io/github/stars/fmscode/JSONtoFoundation) ![GitHub last commit](https://img.shields.io/github/last-commit/fmscode/JSONtoFoundation)](https://github.com/fmscode/JSONtoFoundation) - OS X utility that converts a JSON object to a Foundation object that can be used in Cocoa/Cocoa Touch development. (Swift)
* [fanci ![GitHub Repo Stars](https://img.shields.io/github/stars/liip/fanci) ![GitHub last commit](https://img.shields.io/github/last-commit/liip/fanci)](https://github.com/liip/fanci) - Extract, rename and transform JSON based on a template. (node.js)
* [Pinch ![GitHub Repo Stars](https://img.shields.io/github/stars/Baggz/Pinch) ![GitHub last commit](https://img.shields.io/github/last-commit/Baggz/Pinch)](https://github.com/Baggz/Pinch) - String.replace for JavaScript objects. (Javascript)
* [deepjson](http://deepjson.jacoborus.codes/) - A better way to load big json config files. (node.js)
* [jsontl ![GitHub Repo Stars](https://img.shields.io/github/stars/DoublePrecisionSoftware/jsontl) ![GitHub last commit](https://img.shields.io/github/last-commit/DoublePrecisionSoftware/jsontl)](https://github.com/DoublePrecisionSoftware/jsontl) - allow transformation using a JSON-based transformation language. (node.js)
* [json-transforms ![GitHub Repo Stars](https://img.shields.io/github/stars/ColinEberhardt/json-transforms) ![GitHub last commit](https://img.shields.io/github/last-commit/ColinEberhardt/json-transforms)](https://github.com/ColinEberhardt/json-transforms) - A recursive, pattern-matching, approach to transforming JSON structures.
* [normalizr ![GitHub Repo Stars](https://img.shields.io/github/stars/paularmstrong/normalizr) ![GitHub last commit](https://img.shields.io/github/last-commit/paularmstrong/normalizr)](https://github.com/paularmstrong/normalizr) - Normalizes nested JSON according to a schema. (Javascript)
* [JSON-populate ![GitHub Repo Stars](https://img.shields.io/github/stars/eiriklv/json-populate) ![GitHub last commit](https://img.shields.io/github/last-commit/eiriklv/json-populate)](https://github.com/eiriklv/json-populate) - Tool for populating JSON data with infinitely recursive circular references. Sort of like Falcor, but for plain JSON.
* [CircularJSON ![GitHub Repo Stars](https://img.shields.io/github/stars/WebReflection/circular-json) ![GitHub last commit](https://img.shields.io/github/last-commit/WebReflection/circular-json)](https://github.com/WebReflection/circular-json) - JSON does not handle circular references. Now it does.
* [Sawmill ![GitHub Repo Stars](https://img.shields.io/github/stars/logzio/sawmill) ![GitHub last commit](https://img.shields.io/github/last-commit/logzio/sawmill)](https://github.com/logzio/sawmill) - JSON transformation library (Java)
* [nimnjs ![GitHub Repo Stars](https://img.shields.io/github/stars/nimndata/nimnjs) ![GitHub last commit](https://img.shields.io/github/last-commit/nimndata/nimnjs)](https://github.com/nimndata/nimnjs) - JSON to nimn bidirectional converter.
* [stylops ![GitHub Repo Stars](https://img.shields.io/github/stars/cruel-intentions/stylops) ![GitHub last commit](https://img.shields.io/github/last-commit/cruel-intentions/stylops)](https://github.com/cruel-intentions/stylops) - CSS subset to JSON conversion. (node.js)

## Queries
* [dasel ![GitHub Repo Stars](https://img.shields.io/github/stars/tomwright/dasel) ![GitHub last commit](https://img.shields.io/github/last-commit/tomwright/dasel)](https://github.com/tomwright/dasel) - Query and update data structures using selectors from the command line. Comparable to [jq ![GitHub Repo Stars](https://img.shields.io/github/stars/stedolan/jq) ![GitHub last commit](https://img.shields.io/github/last-commit/stedolan/jq)](https://github.com/stedolan/jq) / [yq ![GitHub Repo Stars](https://img.shields.io/github/stars/kislyuk/yq) ![GitHub last commit](https://img.shields.io/github/last-commit/kislyuk/yq)](https://github.com/kislyuk/yq) but supports JSON, YAML, TOML and XML with zero runtime dependencies.
* [JMESPath](https://jmespath.org/) - A query language for JSON.
* [JSON Mask ![GitHub Repo Stars](https://img.shields.io/github/stars/nemtsov/json-mask) ![GitHub last commit](https://img.shields.io/github/last-commit/nemtsov/json-mask)](https://github.com/nemtsov/json-mask) - Tiny language and engine for selecting specific parts of a JS object, hiding the rest. (Javascript)
* [JSONiq](https://www.jsoniq.org/) - The JSON Query Language.
* [ObjectPath](http://objectpath.org/) - The agile query language for semi-structured data. (Python)
* [DefiantJS](https://www.defiantjs.com/) - Lightning-fast searches using XPath expressions, and transform using XSL. (Javascript)
* [JSONSelect ![GitHub Repo Stars](https://img.shields.io/github/stars/lloyd/JSONSelect) ![GitHub last commit](https://img.shields.io/github/last-commit/lloyd/JSONSelect)](https://github.com/lloyd/JSONSelect) - CSS-like selectors. (Javascript)
* [JSONPath](https://goessner.net/articles/JsonPath/) - XPath implementation. (Javascript/PHP)
* [searchjs ![GitHub Repo Stars](https://img.shields.io/github/stars/deitch/searchjs) ![GitHub last commit](https://img.shields.io/github/last-commit/deitch/searchjs)](https://github.com/deitch/searchjs) - A library for filtering based on a json SQL-like language.
* [json-rel ![GitHub Repo Stars](https://img.shields.io/github/stars/slurmulon/json-where) ![GitHub last commit](https://img.shields.io/github/last-commit/slurmulon/json-where)](https://github.com/slurmulon/json-where) - Transparent references in JSON.
* [JSONata](https://jsonata.org/) - Query and transformation language used in Node-RED, supports function expressions.

## JSON Schema Frontend components
* [JSON Editor ![GitHub Repo Stars](https://img.shields.io/github/stars/jdorn/json-editor) ![GitHub last commit](https://img.shields.io/github/last-commit/jdorn/json-editor)](https://github.com/jdorn/json-editor) - JSON Schema Based Editor. (jQuery)
* [angular-schema-form ![GitHub Repo Stars](https://img.shields.io/github/stars/json-schema-form/angular-schema-form) ![GitHub last commit](https://img.shields.io/github/last-commit/json-schema-form/angular-schema-form)](https://github.com/json-schema-form/angular-schema-form) - Generate forms. (AngularJS)
* [JSON Schema View ![GitHub Repo Stars](https://img.shields.io/github/stars/mohsen1/json-schema-view) ![GitHub last commit](https://img.shields.io/github/last-commit/mohsen1/json-schema-view)](https://github.com/mohsen1/json-schema-view) - An AngularJS directive for rendering JSON Schema in HTML (AngularJS)
* [Angular JSON Schema Form ![GitHub Repo Stars](https://img.shields.io/github/stars/mohsen1/angular-json-schema-form) ![GitHub last commit](https://img.shields.io/github/last-commit/mohsen1/angular-json-schema-form)](https://github.com/mohsen1/angular-json-schema-form) - Angular directive for making forms out of JSON Schema. (AngularJS)
* [AlpacaJS](http://www.alpacajs.org) - Generates JSON Schema driven forms on top of Bootstrap, jQuery Mobile, jQuery UI and HTML (jQuery)


## JSON Schema Tools
* [prmd ![GitHub Repo Stars](https://img.shields.io/github/stars/interagent/prmd) ![GitHub last commit](https://img.shields.io/github/last-commit/interagent/prmd)](https://github.com/interagent/prmd) - Tools and doc generation for HTTP APIs.
* [generate-schema ![GitHub Repo Stars](https://img.shields.io/github/stars/Nijikokun/generate-schema) ![GitHub last commit](https://img.shields.io/github/last-commit/Nijikokun/generate-schema)](https://github.com/Nijikokun/generate-schema) - Effortlessly convert your JSON Object to JSON Schema, Mongoose Schema, or a Generic template for quick documentation / upstart.
* [Docson ![GitHub Repo Stars](https://img.shields.io/github/stars/lbovet/docson) ![GitHub last commit](https://img.shields.io/github/last-commit/lbovet/docson)](https://github.com/lbovet/docson) - Documentation for your types.
* [Orderly JSON ![GitHub Repo Stars](https://img.shields.io/github/stars/lloyd/orderly) ![GitHub last commit](https://img.shields.io/github/last-commit/lloyd/orderly)](https://github.com/lloyd/orderly) - A textual format for describing JSON compiled into JSONSchema.
* [jsonschema2pojo ![GitHub Repo Stars](https://img.shields.io/github/stars/joelittlejohn/jsonschema2pojo) ![GitHub last commit](https://img.shields.io/github/last-commit/joelittlejohn/jsonschema2pojo)](https://github.com/joelittlejohn/jsonschema2pojo) - Generates Java types and annotates those types for data-binding with Jackson 1.x or 2.x, Gson, etc.
* [Matic ![GitHub Repo Stars](https://img.shields.io/github/stars/mattyod/matic) ![GitHub last commit](https://img.shields.io/github/last-commit/mattyod/matic)](https://github.com/mattyod/matic) - Build tool for generating HTML documentation.
* [JSON Schema + Faker ![GitHub Repo Stars](https://img.shields.io/github/stars/json-schema-faker/json-schema-faker) ![GitHub last commit](https://img.shields.io/github/last-commit/json-schema-faker/json-schema-faker)](https://github.com/json-schema-faker/json-schema-faker) - Fake your schemas.
* [DLL.js ![GitHub Repo Stars](https://img.shields.io/github/stars/moll/js-ddl) ![GitHub last commit](https://img.shields.io/github/last-commit/moll/js-ddl)](https://github.com/moll/js-ddl) - Gets you a JSON Schema from PostgreSQL or SQLite3.
* [JSONSchema.net](https://jsonschema.net//) - JSON Schema generator from JSON object.
* [js-schema ![GitHub Repo Stars](https://img.shields.io/github/stars/molnarg/js-schema) ![GitHub last commit](https://img.shields.io/github/last-commit/molnarg/js-schema)](https://github.com/molnarg/js-schema) - A new way of describing object schemas in JavaScript. It has a clean and simple syntax, and it is capable of serializing to/from the popular JSON Schema format.
* [aptos ![GitHub Repo Stars](https://img.shields.io/github/stars/pennsignals/aptos) ![GitHub last commit](https://img.shields.io/github/last-commit/pennsignals/aptos)](https://github.com/pennsignals/aptos) - A tool for validating data using JSON Schema and converting JSON Schema documents into different data-interchange formats.
* [JSON Schema $Ref Parser ![GitHub Repo Stars](https://img.shields.io/github/stars/APIDevTools/json-schema-ref-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/APIDevTools/json-schema-ref-parser)](https://github.com/APIDevTools/json-schema-ref-parser) - Parse, resolve, and dereference JSON Schema $ref pointers

## JSON Schema Resources
* [Understanding JSON Schema](https://spacetelescope.github.io/understanding-json-schema/) - A website aiming to provide more accessible documentation for JSON schema.
* [JSON Schema Store](https://schemastore.org/json/) - A collection of popular schemas.
* [Using JSON Schema](http://usingjsonschema.com/) - a Book and GitHub project, showing how JSON Schema can be used for a variety of tasks and in different programming contexts.
* [Awesome JSON Schema ![GitHub Repo Stars](https://img.shields.io/github/stars/jviotti/awesome-jsonschema) ![GitHub last commit](https://img.shields.io/github/last-commit/jviotti/awesome-jsonschema)](https://github.com/jviotti/awesome-jsonschema) - A curated list of awesome JSON Schema resources, tutorials, tools, and more.

## JSON Schema Validators
**Javascript and Node.js**
* [json-schema-benchmark ![GitHub Repo Stars](https://img.shields.io/github/stars/ebdrup/json-schema-benchmark) ![GitHub last commit](https://img.shields.io/github/last-commit/ebdrup/json-schema-benchmark)](https://github.com/ebdrup/json-schema-benchmark) - Performance benchmark for Node.js validators.
* [is-my-json-valid ![GitHub Repo Stars](https://img.shields.io/github/stars/mafintosh/is-my-json-valid) ![GitHub last commit](https://img.shields.io/github/last-commit/mafintosh/is-my-json-valid)](https://github.com/mafintosh/is-my-json-valid) - A validator that uses code generation to be extremely fast.
* [jsen ![GitHub Repo Stars](https://img.shields.io/github/stars/bugventure/jsen) ![GitHub last commit](https://img.shields.io/github/last-commit/bugventure/jsen)](https://github.com/bugventure/jsen) - A validator built for speed.
* [themis ![GitHub Repo Stars](https://img.shields.io/github/stars/playlyfe/themis) ![GitHub last commit](https://img.shields.io/github/last-commit/playlyfe/themis)](https://github.com/playlyfe/themis) - A blazing fast validator.
* [jsck ![GitHub Repo Stars](https://img.shields.io/github/stars/pandastrike/jsck) ![GitHub last commit](https://img.shields.io/github/last-commit/pandastrike/jsck)](https://github.com/pandastrike/jsck) - JSON Schema Compiled checK.
* [z-schema ![GitHub Repo Stars](https://img.shields.io/github/stars/zaggino/z-schema) ![GitHub last commit](https://img.shields.io/github/last-commit/zaggino/z-schema)](https://github.com/zaggino/z-schema) - validator written in JavaScript for NodeJS and Browsers.
* [jjv ![GitHub Repo Stars](https://img.shields.io/github/stars/acornejo/jjv) ![GitHub last commit](https://img.shields.io/github/last-commit/acornejo/jjv)](https://github.com/acornejo/jjv) - Javascript Library for Schema Validation.
* [request-validator ![GitHub Repo Stars](https://img.shields.io/github/stars/bugventure/request-validator) ![GitHub last commit](https://img.shields.io/github/last-commit/bugventure/request-validator)](https://github.com/bugventure/request-validator) - Flexible request validator middleware for express and connect.
* [tv4 ![GitHub Repo Stars](https://img.shields.io/github/stars/geraintluff/tv4) ![GitHub last commit](https://img.shields.io/github/last-commit/geraintluff/tv4)](https://github.com/geraintluff/tv4) - Tiny Validator.
* [ajv ![GitHub Repo Stars](https://img.shields.io/github/stars/ajv-validator/ajv) ![GitHub last commit](https://img.shields.io/github/last-commit/ajv-validator/ajv)](https://github.com/ajv-validator/ajv) - The fastest validator. Supports v5/6 proposals.

**Java and Kotlin**
* [Medeia Validator ![GitHub Repo Stars](https://img.shields.io/github/stars/worldturner/medeia-validator) ![GitHub last commit](https://img.shields.io/github/last-commit/worldturner/medeia-validator)](https://github.com/worldturner/medeia-validator) - Compliant (draft-04/06/07) and fast streaming validator written in Kotlin

**PHP**
* [JSON Schema for PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/justinrainbow/json-schema) ![GitHub last commit](https://img.shields.io/github/last-commit/justinrainbow/json-schema)](https://github.com/justinrainbow/json-schema) - PHP implementation of JSON schema.
* [JSON Guard](https://json-guard.thephpleague.com) - A validator for JSON Schema Draft 4.

**Python**
* [jsonschema ![GitHub Repo Stars](https://img.shields.io/github/stars/Julian/jsonschema) ![GitHub last commit](https://img.shields.io/github/last-commit/Julian/jsonschema)](https://github.com/Julian/jsonschema) - Python implementation of jsonschema.
* [JSON Schema Toolkit ![GitHub Repo Stars](https://img.shields.io/github/stars/petrounias/json-schema-toolkit) ![GitHub last commit](https://img.shields.io/github/last-commit/petrounias/json-schema-toolkit)](https://github.com/petrounias/json-schema-toolkit) - Programmatic building of JSON schemas (recursive field mappings) with validation, a Django JSON Field, and native PostgreSQL JSON type constraints.

**Ruby**
* [Ruby JSON Schema Validator ![GitHub Repo Stars](https://img.shields.io/github/stars/ruby-json-schema/json-schema) ![GitHub last commit](https://img.shields.io/github/last-commit/ruby-json-schema/json-schema)](https://github.com/ruby-json-schema/json-schema) - validating against a JSON schema conforming to JSON Schema Draft 4.

## Contribute
Contributions welcome! Read the [contribution guidelines](CONTRIBUTING.md) first.

## License
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
