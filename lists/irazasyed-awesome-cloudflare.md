# Awesome Cloudflare [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re) [<img src="https://github.com/irazasyed/awesome-cloudflare/raw/master/media/cf-logo.svg" width="250" align="right" alt="Cloudflare">](https://www.cloudflare.com)

> Curated list of awesome [Cloudflare](https://www.cloudflare.com) worker recipes, open-source projects, guides, blogs and other resources.

Cloudflare provides content delivery network (CDN) services, DDoS mitigation, Internet security and distributed domain name server (DNS) services, sitting between the visitor and the Cloudflare user's hosting provider, acting as a reverse proxy for websites.

## Contents

- [Community](#community)
- [Blog](#blog)
- [DNS](#dns)
- [Developers](#developers)
- [Apps](#apps)
  - [Open Source](#open-source)
- [Workers](#workers)
  - [Reference](#reference)
  - [Tools](#tools)
  - [Recipes](#recipes)
- [Other](#other)

## Community

- [Forum](https://community.cloudflare.com)
- [Reddit](https://www.reddit.com/r/CloudFlare)
- [`@Cloudflare` on Twitter](https://twitter.com/cloudflare)
- [Facebook](https://www.facebook.com/Cloudflare)
- [YouTube](https://www.youtube.com/cloudflare-)
- [GitHub](https://github.com/cloudflare)
- [GitHub Topic ![GitHub Repo Stars](https://img.shields.io/github/stars/topics/cloudflare) ![GitHub last commit](https://img.shields.io/github/last-commit/topics/cloudflare)](https://github.com/topics/cloudflare)
- [Stack Exchange](https://stackexchange.com/search?q=cloudflare)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/cloudflare)
- [Server Fault](https://serverfault.com/questions/tagged/cloudflare)

## Blog

- [Official Blog](https://blog.cloudflare.com)

## DNS

- [DNS Zone Files ![GitHub Repo Stars](https://img.shields.io/github/stars/irazasyed/dns-zone-files) ![GitHub last commit](https://img.shields.io/github/last-commit/irazasyed/dns-zone-files)](https://github.com/irazasyed/dns-zone-files) - Ready to import common config zone files for easy configuration of various services.
- [Lexicon ![GitHub Repo Stars](https://img.shields.io/github/stars/AnalogJ/lexicon) ![GitHub last commit](https://img.shields.io/github/last-commit/AnalogJ/lexicon)](https://github.com/AnalogJ/lexicon) - CLI tool to manipulate DNS records on various DNS providers in a standardized way.
- [Th3inspector ![GitHub Repo Stars](https://img.shields.io/github/stars/Moham3dRiahi/Th3inspector) ![GitHub last commit](https://img.shields.io/github/last-commit/Moham3dRiahi/Th3inspector)](https://github.com/Moham3dRiahi/Th3inspector) - All in one CLI tool for information gathering.
- [Partner Panel ![GitHub Repo Stars](https://img.shields.io/github/stars/ZE3kr/Cloudflare-CNAME-Setup) ![GitHub last commit](https://img.shields.io/github/last-commit/ZE3kr/Cloudflare-CNAME-Setup)](https://github.com/ZE3kr/Cloudflare-CNAME-Setup) - Tool for hosting partners to provide a DNS management panel for customers.
- [CFPMP ![GitHub Repo Stars](https://img.shields.io/github/stars/Netrvin/CFPMP) ![GitHub last commit](https://img.shields.io/github/last-commit/Netrvin/CFPMP)](https://github.com/Netrvin/CFPMP) - Partner management panel.
- [Flares ![GitHub Repo Stars](https://img.shields.io/github/stars/lfaoro/flares) ![GitHub last commit](https://img.shields.io/github/last-commit/lfaoro/flares)](https://github.com/lfaoro/flares) - DNS backup tool.
- [Block Bad Bot Ruleset ![GitHub Repo Stars](https://img.shields.io/github/stars/SukkaW/cloudflare-block-bad-bot-ruleset) ![GitHub last commit](https://img.shields.io/github/last-commit/SukkaW/cloudflare-block-bad-bot-ruleset)](https://github.com/SukkaW/cloudflare-block-bad-bot-ruleset) - Collection of rulesets to block malicious crawlers with firewall rules.
- [Docker DDNS ![GitHub Repo Stars](https://img.shields.io/github/stars/oznu/docker-cloudflare-ddns) ![GitHub last commit](https://img.shields.io/github/last-commit/oznu/docker-cloudflare-ddns)](https://github.com/oznu/docker-cloudflare-ddns) - Docker image to use the free DNS Service as a dynamic DNS provider.
- [DDNS script for Synology ![GitHub Repo Stars](https://img.shields.io/github/stars/joshuaavalon/SynologyCloudflareDDNS) ![GitHub last commit](https://img.shields.io/github/last-commit/joshuaavalon/SynologyCloudflareDDNS)](https://github.com/joshuaavalon/SynologyCloudflareDDNS) - DDNS script for Synology NAS.
- [Dynamic DNS Bash ![GitHub Repo Stars](https://img.shields.io/github/stars/yulewang/cloudflare-api-v4-ddns) ![GitHub last commit](https://img.shields.io/github/last-commit/yulewang/cloudflare-api-v4-ddns)](https://github.com/yulewang/cloudflare-api-v4-ddns) - Dynamic DNS updater in bash script.
- [Dynamic DNS PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/lyoshenka/cloudflare-ddns) ![GitHub last commit](https://img.shields.io/github/last-commit/lyoshenka/cloudflare-ddns)](https://github.com/lyoshenka/cloudflare-ddns) - Dynamic DNS updater in PHP.
- [Dynamic DNS Python ![GitHub Repo Stars](https://img.shields.io/github/stars/adrienbrignon/cloudflare-ddns) ![GitHub last commit](https://img.shields.io/github/last-commit/adrienbrignon/cloudflare-ddns)](https://github.com/adrienbrignon/cloudflare-ddns) - Dynamic DNS updater in python.
- [Multi-Provider DDNS Script ![GitHub Repo Stars](https://img.shields.io/github/stars/phuslu/ddns) ![GitHub last commit](https://img.shields.io/github/last-commit/phuslu/ddns)](https://github.com/phuslu/ddns) - Multiple providers ddns script without dependencies.
- [Argo Tunnel Client ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudflare/cloudflared) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudflare/cloudflared)](https://github.com/cloudflare/cloudflared) - CLI client for Argo tunnel, a tunneling daemon that proxies any local webserver through the Cloudflare network.
- [Upper ![GitHub Repo Stars](https://img.shields.io/github/stars/ostark/upper) ![GitHub last commit](https://img.shields.io/github/last-commit/ostark/upper)](https://github.com/ostark/upper) - Speeds up craft dramatically using a cache proxy in front of your webserver.
- [Cloud Buster ![GitHub Repo Stars](https://img.shields.io/github/stars/SageHack/cloud-buster) ![GitHub last commit](https://img.shields.io/github/last-commit/SageHack/cloud-buster)](https://github.com/SageHack/cloud-buster) - A comprehensive pentest tool that checks sites for origin IP leaks.
- [CLI Tool ![GitHub Repo Stars](https://img.shields.io/github/stars/danielpigott/cloudflare-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/danielpigott/cloudflare-cli)](https://github.com/danielpigott/cloudflare-cli) - CLI tool for interacting with Cloudflare.
- [Detector ![GitHub Repo Stars](https://img.shields.io/github/stars/k4m4/cloudflare-detect) ![GitHub last commit](https://img.shields.io/github/last-commit/k4m4/cloudflare-detect)](https://github.com/k4m4/cloudflare-detect) - Detect whether a site is running behind Cloudflare.
- [Scrape ![GitHub Repo Stars](https://img.shields.io/github/stars/Anorov/cloudflare-scrape) ![GitHub last commit](https://img.shields.io/github/last-commit/Anorov/cloudflare-scrape)](https://github.com/Anorov/cloudflare-scrape) - Python module to bypass anti-bot page.
- [CloudFlair ![GitHub Repo Stars](https://img.shields.io/github/stars/christophetd/CloudFlair) ![GitHub last commit](https://img.shields.io/github/last-commit/christophetd/CloudFlair)](https://github.com/christophetd/CloudFlair) - Tool to find origin servers of websites protected by CloudFlare who are publicly exposed.

## Developers

- [Developers Hub](https://developers.cloudflare.com) - Developer docs including API reference, articles, and sample code for all products.
- [Open Source](https://cloudflare.github.io) - Official open-source projects.
- [API Docs](https://api.cloudflare.com) - API documentation.
- [Integration Resources](https://www.cloudflare.com/integrations) - Plugins for content management systems, control panels, cloud providers, ecommerce platforms and more.
- [Technical Resources](https://www.cloudflare.com/technical-resources) - Technical tools and resources.
- [The Serverlist Newsletter](https://blog.cloudflare.com/serverlist) - The serverlist is a Cloudflare-curated newsletter about all things serverless.

## Apps

> [Cloudflare Apps](https://www.cloudflare.com/apps/developers) lets you ship your tool or service to millions of sites. Any Cloudflare customer can preview & install your code on their site in seconds.

- [Apps Directory](https://www.cloudflare.com/apps)
- [Documentation](https://www.cloudflare.com/apps/developer/docs/getting-started)
- [Developer Fund](https://www.cloudflare.com/fund)
- [App Ideas ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudflare-apps/ideas) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudflare-apps/ideas)](https://github.com/cloudflare-apps/ideas)

### Open Source

- [Official OSS Apps](https://github.com/cloudflare-apps) - Collection of official apps.
- [Logflare ![GitHub Repo Stars](https://img.shields.io/github/stars/Logflare/cloudflare-app) ![GitHub last commit](https://img.shields.io/github/last-commit/Logflare/cloudflare-app)](https://github.com/Logflare/cloudflare-app) - Log management & event analytics.
- [OpWork.dev ![GitHub Repo Stars](https://img.shields.io/github/stars/hisorange/opwork) ![GitHub last commit](https://img.shields.io/github/last-commit/hisorange/opwork)](https://github.com/hisorange/opwork) - Self hosted CloudFlare workers management platform.

## Workers

> [Cloudflare Workers](https://www.cloudflare.com/products/cloudflare-workers) provides a serverless execution environment that allows you to create entirely new applications or augment existing ones without configuring or maintaining infrastructure.

### Reference

- [Documentation](https://workers.cloudflare.com/docs)
- [Tutorials](https://workers.cloudflare.com/docs/tutorials)
- [Runtime](https://workers.cloudflare.com/docs/reference/runtime)
- [Workers KV](https://workers.cloudflare.com/docs/reference/storage)

### Tools

- [Wrangler ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudflare/wrangler) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudflare/wrangler)](https://github.com/cloudflare/wrangler) - `wrangler` is a CLI tool designed for folks who are interested in using Cloudflare workers.
- [Playground](https://www.cloudflareworkers.com) - Simple, instant way to preview and test code directly in the browser against any site.
- [Serverless Plugin](https://workers.cloudflare.com/docs/reference/tooling/serverless) - Plugin for [serverless framework ![GitHub Repo Stars](https://img.shields.io/github/stars/serverless/serverless) ![GitHub last commit](https://img.shields.io/github/last-commit/serverless/serverless)](https://github.com/serverless/serverless) to develop and deploy serverless applications using Workers.
- [Worker App Kit ![GitHub Repo Stars](https://img.shields.io/github/stars/postlight/cloudflare-worker-app-kit) ![GitHub last commit](https://img.shields.io/github/last-commit/postlight/cloudflare-worker-app-kit)](https://github.com/postlight/cloudflare-worker-app-kit) - Handy set of tools for creating, developing, testing, and deploying worker app.
- [GitHub Action ![GitHub Repo Stars](https://img.shields.io/github/stars/cpilsworth/cloudflare-worker-action) ![GitHub last commit](https://img.shields.io/github/last-commit/cpilsworth/cloudflare-worker-action)](https://github.com/cpilsworth/cloudflare-worker-action) - Deploy a worker on push to the master branch.
- [Workers KV Viewer ![GitHub Repo Stars](https://img.shields.io/github/stars/jroyal/cloudflare-workers-kv-viewer) ![GitHub last commit](https://img.shields.io/github/last-commit/jroyal/cloudflare-workers-kv-viewer)](https://github.com/jroyal/cloudflare-workers-kv-viewer) - CLI based interactive viewer for workers KV storage.
- [Redirect Management](https://forwarding.app) - Generate redirect worker.

### Recipes

- [Examples Collection ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudflare/worker-examples) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudflare/worker-examples)](https://github.com/cloudflare/worker-examples) - Collection of recipes.
- [Hello World JS Boilerplate ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudflare/worker-template) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudflare/worker-template)](https://github.com/cloudflare/worker-template) - Template for kick starting a worker project in JS.
- [Hello World Rust Boilerplate ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudflare/rustwasm-worker-template) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudflare/rustwasm-worker-template)](https://github.com/cloudflare/rustwasm-worker-template) - Template for kick starting a worker project using wasm-pack.
- [Router ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudflare/worker-template-router) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudflare/worker-template-router)](https://github.com/cloudflare/worker-template-router) - Router that can be used with REST APIs or apps for basic routing logic.
- [Static ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudflare/worker-template-static) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudflare/worker-template-static)](https://github.com/cloudflare/worker-template-static) - Generate a static HTML or JSON page from raw strings in your workers script.
- [Fetch ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudflare/worker-template-fetch) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudflare/worker-template-fetch)](https://github.com/cloudflare/worker-template-fetch) - Examples of making fetch requests and generating JSON post requests.
- [Incoming Request ![GitHub Repo Stars](https://img.shields.io/github/stars/ashleygwilliams/worker-template-requests) ![GitHub last commit](https://img.shields.io/github/last-commit/ashleygwilliams/worker-template-requests)](https://github.com/ashleygwilliams/worker-template-requests) - Examples of reading in a POST request body of type JSON and form-data.
- [Redirect ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudflare/worker-template-redirect) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudflare/worker-template-redirect)](https://github.com/cloudflare/worker-template-redirect) - Examples of sending single and bulk redirects from a Worker script.
- [Img-Color ![GitHub Repo Stars](https://img.shields.io/github/stars/xtuc/img-color-worker) ![GitHub last commit](https://img.shields.io/github/last-commit/xtuc/img-color-worker)](https://github.com/xtuc/img-color-worker) - Retrieve the dominant color of a png or jpeg image.
- [Binast ![GitHub Repo Stars](https://img.shields.io/github/stars/xtuc/binast-cf-worker-template) ![GitHub last commit](https://img.shields.io/github/last-commit/xtuc/binast-cf-worker-template)](https://github.com/xtuc/binast-cf-worker-template) - Serve binast via a worker.
- [Pwnage Protection ![GitHub Repo Stars](https://img.shields.io/github/stars/detroitenglish/pw-pwnage-cfworker) ![GitHub last commit](https://img.shields.io/github/last-commit/detroitenglish/pw-pwnage-cfworker)](https://github.com/detroitenglish/pw-pwnage-cfworker) - Secure password scoring and user pwnage protection api - [Usage](https://community.cloudflare.com/t/estimate-strength-of-users-new-password-input-with-zxcvbn-and-query-haveibeenpwned-for-matches-against-known-hacked-accounts/26378).
- [Cache Purger Proxy](https://gist.github.com/vdbelt/20f116236d2ebffa92f131e679c0551a) - Proxies purge cache requests - [Usage](https://community.cloudflare.com/t/worker-recipe-cache-purge-proxy/29978).
- [URL Router ![GitHub Repo Stars](https://img.shields.io/github/stars/berstend/service-worker-router) ![GitHub last commit](https://img.shields.io/github/last-commit/berstend/service-worker-router)](https://github.com/berstend/service-worker-router) - Fast url router - [Usage](https://community.cloudflare.com/t/open-source-fast-url-router-for-workers-js-typescript/33406).
- [Edge Proxy ![GitHub Repo Stars](https://img.shields.io/github/stars/DigitalOptimizationGroup/cloudflare-edge-proxy) ![GitHub last commit](https://img.shields.io/github/last-commit/DigitalOptimizationGroup/cloudflare-edge-proxy)](https://github.com/DigitalOptimizationGroup/cloudflare-edge-proxy) - Enable A/B testing, canary releasing, gatekeeping, and SEO A/B/N testing.
- [Blue / Green Deployments ![GitHub Repo Stars](https://img.shields.io/github/stars/DigitalOptimizationGroup/blue-green-cloudflare-workers) ![GitHub last commit](https://img.shields.io/github/last-commit/DigitalOptimizationGroup/blue-green-cloudflare-workers)](https://github.com/DigitalOptimizationGroup/blue-green-cloudflare-workers) - Working example of blue / green deployments with canary releasing.
- [Preact PWA ![GitHub Repo Stars](https://img.shields.io/github/stars/DigitalOptimizationGroup/cloudflare-worker-preact-pwa) ![GitHub last commit](https://img.shields.io/github/last-commit/DigitalOptimizationGroup/cloudflare-worker-preact-pwa)](https://github.com/DigitalOptimizationGroup/cloudflare-worker-preact-pwa) - Preact progressive web app.
- [CURL Interceptor ![GitHub Repo Stars](https://img.shields.io/github/stars/Gaafar/curl-worker) ![GitHub last commit](https://img.shields.io/github/last-commit/Gaafar/curl-worker)](https://github.com/Gaafar/curl-worker) - Intercepts requests from `curl` command and returns something different.
- [Worker with built-in Router ![GitHub Repo Stars](https://img.shields.io/github/stars/anderly/cloudflare-worker-routing) ![GitHub last commit](https://img.shields.io/github/last-commit/anderly/cloudflare-worker-routing)](https://github.com/anderly/cloudflare-worker-routing) - Allows you to separate your worker logic into different functions and/or controllers.
- [Connecting to Google Storage](https://community.cloudflare.com/t/connecting-to-google-storage/32350) - Pull files from Google's cloud storage.
- [CSRF Protection](https://gist.github.com/simonerni/3501b8de6320ac37398d08d9d2d08561) - Protect any origin from CSRF by verifying origin/referer headers.
- [URL Query Strings Parser](https://community.cloudflare.com/t/parse-url-query-strings-with-cloudflare-workers/90286) - Parse url query strings.
- [Regrex Replacement and Injection](https://community.cloudflare.com/t/perform-regex-replacements-and-inject-css-javascript-with-cloudflare-workers/90279) - Perform regex replacements and inject CSS/JS.
- [Webpack Boilerplate ![GitHub Repo Stars](https://img.shields.io/github/stars/detroitenglish/cloudflare-workers-webpack-boilerplate) ![GitHub last commit](https://img.shields.io/github/last-commit/detroitenglish/cloudflare-workers-webpack-boilerplate)](https://github.com/detroitenglish/cloudflare-workers-webpack-boilerplate) - Boilerplate to build, bundle and deploy workers with webpack.
- [Basic Auth ![GitHub Repo Stars](https://img.shields.io/github/stars/dommmel/cloudflare-workers-basic-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/dommmel/cloudflare-workers-basic-auth)](https://github.com/dommmel/cloudflare-workers-basic-auth) - Protection using basic auth.
- [Send Logs to Logdna ![GitHub Repo Stars](https://img.shields.io/github/stars/boynet/cf-logdna-worker) ![GitHub last commit](https://img.shields.io/github/last-commit/boynet/cf-logdna-worker)](https://github.com/boynet/cf-logdna-worker) - Simple recipe to send logs to logdna.
- [IP lookup service ![GitHub Repo Stars](https://img.shields.io/github/stars/matthewgall/beta.ipinfo.in) ![GitHub last commit](https://img.shields.io/github/last-commit/matthewgall/beta.ipinfo.in)](https://github.com/matthewgall/beta.ipinfo.in) - IP lookup service using workers.
- [Airtable Proxy ![GitHub Repo Stars](https://img.shields.io/github/stars/portable-cto/airtable-proxy-worker) ![GitHub last commit](https://img.shields.io/github/last-commit/portable-cto/airtable-proxy-worker)](https://github.com/portable-cto/airtable-proxy-worker) - Allows you to make secure requests to the Airtable API from your frontend.
- [TypeScript Workers ![GitHub Repo Stars](https://img.shields.io/github/stars/udacity/cloudflare-typescript-workers) ![GitHub last commit](https://img.shields.io/github/last-commit/udacity/cloudflare-typescript-workers)](https://github.com/udacity/cloudflare-typescript-workers) - Types and mocks for building a tested typescript worker.
- [Proxies ![GitHub Repo Stars](https://img.shields.io/github/stars/GitbookIO/proxies-on-cloudflare) ![GitHub last commit](https://img.shields.io/github/last-commit/GitbookIO/proxies-on-cloudflare)](https://github.com/GitbookIO/proxies-on-cloudflare) - Makes it easy to build workers, by providing high-level proxying primitives addressing common needs.
- [Static Worker ![GitHub Repo Stars](https://img.shields.io/github/stars/manatarms/static-worker) ![GitHub last commit](https://img.shields.io/github/last-commit/manatarms/static-worker)](https://github.com/manatarms/static-worker) - Provides functions that make it easy to host a static website.
- [Bannero ![GitHub Repo Stars](https://img.shields.io/github/stars/nondanee/bannero) ![GitHub last commit](https://img.shields.io/github/last-commit/nondanee/bannero)](https://github.com/nondanee/bannero) - Bannero image API for simpledesktops.
- [Hasura ![GitHub Repo Stars](https://img.shields.io/github/stars/nathanwaters/hasura-cloudflare-worker) ![GitHub last commit](https://img.shields.io/github/last-commit/nathanwaters/hasura-cloudflare-worker)](https://github.com/nathanwaters/hasura-cloudflare-worker) - Example using Facebook-based authorization and graphql proxy queries with hasura.
- [IP Redirects](https://community.cloudflare.com/t/ip-redirects/18285) - Redirect users based on their ip address.
- [Switch Image to WebP ![GitHub Repo Stars](https://img.shields.io/github/stars/vidaxl-com/cloudflare_webworkers) ![GitHub last commit](https://img.shields.io/github/last-commit/vidaxl-com/cloudflare_webworkers)](https://github.com/vidaxl-com/cloudflare_webworkers/blob/master/examples/webp.js) - Reroute image to webp when supported.
- [Geographic Routing and Load Balancer](https://community.cloudflare.com/t/geographic-routing-and-load-balancing-with-cloudflare-workers/21900) - Geographic routing and load balancing with workers.
- [UTM Tag Stripper](https://community.cloudflare.com/t/strip-utm-query-string/47941) - Strip UTM tags in query string.
- [Short URL Redirector](https://community.cloudflare.com/t/short-url-using-workers/39877) - Redirect short links.
- [Repo Hunt ![GitHub Repo Stars](https://img.shields.io/github/stars/signalnerve/repo-hunt) ![GitHub last commit](https://img.shields.io/github/last-commit/signalnerve/repo-hunt)](https://github.com/signalnerve/repo-hunt) - Find cool open-source projects daily.
- [Performance Optimized Workers ![GitHub Repo Stars](https://img.shields.io/github/stars/pmeenan/cf-workers) ![GitHub last commit](https://img.shields.io/github/last-commit/pmeenan/cf-workers)](https://github.com/pmeenan/cf-workers) - Collection of worker scripts, generally focused on performance optimizations.
- [Google reCAPTCHA verification ![GitHub Repo Stars](https://img.shields.io/github/stars/HR/recaptcha-worker) ![GitHub last commit](https://img.shields.io/github/last-commit/HR/recaptcha-worker)](https://github.com/HR/recaptcha-worker) - Handle the server-side verification of your reCAPTCHA form.
- [Cloudflare Workers Starter Kit ![GitHub Repo Stars](https://img.shields.io/github/stars/kriasoft/cloudflare-starter-kit) ![GitHub last commit](https://img.shields.io/github/last-commit/kriasoft/cloudflare-starter-kit)](https://github.com/kriasoft/cloudflare-starter-kit) -  - TypeScript template \w multiple CF Workers, `*.env` files, and local testing.

## Other

- [Support](https://support.cloudflare.com)
- [System Status](https://www.cloudflarestatus.com)
- [Network Map](https://www.cloudflare.com/network)

## Contribute

Contributions welcome! Read the [contribution guidelines](contributing.md) first.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0)

To the extent possible under law, [Irfaq Syed](https://github.com/irazasyed) has waived all copyright and
related or neighboring rights to this work.

> Cloudflare is a registered trademark of Cloudflare, Inc.
