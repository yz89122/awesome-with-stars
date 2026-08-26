<br/>

<p align="center">
    <img alt="awesome react native" src="https://github.com/jondot/awesome-react-native/raw/master/arn.svg" width="480" />
</p>

<p align="center">
  <a href="https://github.com/sindresorhus/awesome"><img src="https://awesome.re/badge.svg" alt="Awesome" /></a>
</p>

Awesome React Native is a curated list of the best libraries, tools, and learning resources for building React Native apps today. Every entry is checked for maintenance and relevance — if it's here, it works with modern React Native. PRs are welcome, see [contributing](CONTRIBUTING.md).

## Contents

- [Getting Started](#getting-started)
- [AI-Assisted Development](#ai-assisted-development)
  - [Agents & Skills](#agents--skills)
  - [MCP Servers](#mcp-servers)
  - [On-Device AI](#on-device-ai)
  - [AI App Builders](#ai-app-builders)
- [Components](#components)
  - [UI](#ui)
  - [Lists](#lists)
  - [Navigation](#navigation)
  - [Sheets, Menus & Toasts](#sheets-menus--toasts)
  - [Forms & Keyboard](#forms--keyboard)
  - [Text & Rich Content](#text--rich-content)
  - [Image & Camera](#image--camera)
  - [Video & Audio](#video--audio)
  - [Maps & Location](#maps--location)
  - [Charts](#charts)
  - [Animation & Gestures](#animation--gestures)
  - [Styling & Design Systems](#styling--design-systems)
  - [Internationalization](#internationalization)
  - [System & Device](#system--device)
  - [Notifications](#notifications)
  - [Web & WebViews](#web--webviews)
  - [Other Platforms](#other-platforms)
- [Data](#data)
  - [State Management](#state-management)
  - [Storage & Databases](#storage--databases)
  - [Networking](#networking)
- [Services & Integrations](#services--integrations)
- [Payments & Monetization](#payments--monetization)
- [Development Tools](#development-tools)
  - [Tooling & IDE](#tooling--ide)
  - [Debugging](#debugging)
  - [Testing](#testing)
  - [Builds, Deployment & OTA Updates](#builds-deployment--ota-updates)
  - [Building Libraries](#building-libraries)
- [Starters & Boilerplates](#starters--boilerplates)
- [Open Source Apps](#open-source-apps)
- [Learning](#learning)
- [Staying Up to Date](#staying-up-to-date)

## Getting Started

- [React Native](https://reactnative.dev) - Official documentation, including environment setup, guides, and API reference.
- [Expo](https://expo.dev) - The recommended framework for building React Native apps: file-based routing, native modules, builds, and updates out of the box.
- [React Native Directory](https://reactnative.directory) - Searchable, filterable directory of React Native libraries with maintenance and New Architecture compatibility signals.
- [Upgrade Helper ![GitHub Repo Stars](https://img.shields.io/github/stars/react-native-community/upgrade-helper) ![GitHub last commit](https://img.shields.io/github/last-commit/react-native-community/upgrade-helper)](https://github.com/react-native-community/upgrade-helper) - Web tool that shows the exact diff between two React Native versions for painless upgrades.
- [rn-diff-purge ![GitHub Repo Stars](https://img.shields.io/github/stars/react-native-community/rn-diff-purge) ![GitHub last commit](https://img.shields.io/github/last-commit/react-native-community/rn-diff-purge)](https://github.com/react-native-community/rn-diff-purge) - The raw version-to-version diffs powering Upgrade Helper.
- [Expo Examples ![GitHub Repo Stars](https://img.shields.io/github/stars/expo/examples) ![GitHub last commit](https://img.shields.io/github/last-commit/expo/examples)](https://github.com/expo/examples) - Example projects demonstrating Expo APIs and integrations.

## AI-Assisted Development

Tools for building React Native apps with AI agents, and for putting AI inside your apps.

### Agents & Skills

- [Expo AI Agents Guide](https://docs.expo.dev/agents/) - Expo's official documentation for AI-native development: agent setup, llms.txt, and best practices.
- [Claude Code + Expo](https://docs.expo.dev/agents/claude/) - Official guide for building, debugging, and deploying Expo apps with Claude Code.
- [Expo Skills ![GitHub Repo Stars](https://img.shields.io/github/stars/expo/skills) ![GitHub last commit](https://img.shields.io/github/last-commit/expo/skills)](https://github.com/expo/skills) - Agent skills that give coding agents Expo-specific knowledge and best practices.
- [Agent Skills ![GitHub Repo Stars](https://img.shields.io/github/stars/anthropics/skills) ![GitHub last commit](https://img.shields.io/github/last-commit/anthropics/skills)](https://github.com/anthropics/skills) - Anthropic's public repository of agent skills, usable with Claude Code and other agents.

### MCP Servers

- [Expo MCP](https://docs.expo.dev/mcp/) - Expo-hosted MCP server: EAS logs, documentation search, and deployment workflows from any MCP-capable agent.
- [mobile-mcp ![GitHub Repo Stars](https://img.shields.io/github/stars/mobile-next/mobile-mcp) ![GitHub last commit](https://img.shields.io/github/last-commit/mobile-next/mobile-mcp)](https://github.com/mobile-next/mobile-mcp) - MCP server for mobile automation on iOS, Android, emulators, simulators, and real devices.
- [ios-simulator-mcp ![GitHub Repo Stars](https://img.shields.io/github/stars/joshuayoes/ios-simulator-mcp) ![GitHub last commit](https://img.shields.io/github/last-commit/joshuayoes/ios-simulator-mcp)](https://github.com/joshuayoes/ios-simulator-mcp) - MCP server for driving the iOS simulator: interact with UI, take screenshots, inspect the view hierarchy.
- [Maestro](https://maestro.dev) - E2E testing framework with a built-in MCP server, letting agents run flows and control devices.

### On-Device AI

- [react-native-executorch ![GitHub Repo Stars](https://img.shields.io/github/stars/software-mansion/react-native-executorch) ![GitHub last commit](https://img.shields.io/github/last-commit/software-mansion/react-native-executorch)](https://github.com/software-mansion/react-native-executorch) - Declarative on-device AI inference powered by ExecuTorch, from Software Mansion.
- [llama.rn ![GitHub Repo Stars](https://img.shields.io/github/stars/mybigday/llama.rn) ![GitHub last commit](https://img.shields.io/github/last-commit/mybigday/llama.rn)](https://github.com/mybigday/llama.rn) - React Native binding of llama.cpp for running LLMs on device.
- [react-native-fast-tflite ![GitHub Repo Stars](https://img.shields.io/github/stars/mrousavy/react-native-fast-tflite) ![GitHub last commit](https://img.shields.io/github/last-commit/mrousavy/react-native-fast-tflite)](https://github.com/mrousavy/react-native-fast-tflite) - High-performance TensorFlow Lite inference with GPU acceleration.
- [AI SDK ![GitHub Repo Stars](https://img.shields.io/github/stars/vercel/ai) ![GitHub last commit](https://img.shields.io/github/last-commit/vercel/ai)](https://github.com/vercel/ai) - The AI toolkit for TypeScript; works in Expo and React Native apps for chat, streaming, and tool use.

### AI App Builders

- [a0.dev](https://a0.dev) - Generates complete React Native apps from a prompt and ships them to the app stores.
- [Rork](https://rork.com) - AI app builder that generates Expo/React Native projects compiling to native iOS, Android, and web.

## Components

### UI

- [react-native-paper ![GitHub Repo Stars](https://img.shields.io/github/stars/callstack/react-native-paper) ![GitHub last commit](https://img.shields.io/github/last-commit/callstack/react-native-paper)](https://github.com/callstack/react-native-paper) - Material Design components for Android and iOS.
- [React Native Elements ![GitHub Repo Stars](https://img.shields.io/github/stars/react-native-elements/react-native-elements) ![GitHub last commit](https://img.shields.io/github/last-commit/react-native-elements/react-native-elements)](https://github.com/react-native-elements/react-native-elements) - Cross-platform UI toolkit with themed, composable components.
- [Tamagui ![GitHub Repo Stars](https://img.shields.io/github/stars/tamagui/tamagui) ![GitHub last commit](https://img.shields.io/github/last-commit/tamagui/tamagui)](https://github.com/tamagui/tamagui) - Universal UI kit and style system with an optimizing compiler, 100% parity between React Native and web.
- [gluestack-ui ![GitHub Repo Stars](https://img.shields.io/github/stars/gluestack/gluestack-ui) ![GitHub last commit](https://img.shields.io/github/last-commit/gluestack/gluestack-ui)](https://github.com/gluestack/gluestack-ui) - Copy-paste components and patterns built on Tailwind-style utility classes.
- [react-native-ui-kitten ![GitHub Repo Stars](https://img.shields.io/github/stars/akveo/react-native-ui-kitten) ![GitHub last commit](https://img.shields.io/github/last-commit/akveo/react-native-ui-kitten)](https://github.com/akveo/react-native-ui-kitten) - UI library based on the Eva Design System with theming support.
- [NativeBase ![GitHub Repo Stars](https://img.shields.io/github/stars/GeekyAnts/NativeBase) ![GitHub last commit](https://img.shields.io/github/last-commit/GeekyAnts/NativeBase)](https://github.com/GeekyAnts/NativeBase) - Mobile-first, accessible component library for React Native and web.
- [Shoutem UI ![GitHub Repo Stars](https://img.shields.io/github/stars/shoutem/ui) ![GitHub last commit](https://img.shields.io/github/last-commit/shoutem/ui)](https://github.com/shoutem/ui) - Customizable set of styled components for React Native.
- [react-native-vector-icons ![GitHub Repo Stars](https://img.shields.io/github/stars/oblador/react-native-vector-icons) ![GitHub last commit](https://img.shields.io/github/last-commit/oblador/react-native-vector-icons)](https://github.com/oblador/react-native-vector-icons) - Customizable icon sets with support for styling and image sources.
- [lottie-react-native ![GitHub Repo Stars](https://img.shields.io/github/stars/lottie-react-native/lottie-react-native) ![GitHub last commit](https://img.shields.io/github/last-commit/lottie-react-native/lottie-react-native)](https://github.com/lottie-react-native/lottie-react-native) - Render After Effects animations natively.
- [react-native-svg ![GitHub Repo Stars](https://img.shields.io/github/stars/software-mansion/react-native-svg) ![GitHub last commit](https://img.shields.io/github/last-commit/software-mansion/react-native-svg)](https://github.com/software-mansion/react-native-svg) - SVG rendering for React Native and web.
- [react-native-svg-transformer ![GitHub Repo Stars](https://img.shields.io/github/stars/kristerkari/react-native-svg-transformer) ![GitHub last commit](https://img.shields.io/github/last-commit/kristerkari/react-native-svg-transformer)](https://github.com/kristerkari/react-native-svg-transformer) - Import SVG files as components, like on the web.
- [react-native-modal ![GitHub Repo Stars](https://img.shields.io/github/stars/react-native-modal/react-native-modal) ![GitHub last commit](https://img.shields.io/github/last-commit/react-native-modal/react-native-modal)](https://github.com/react-native-modal/react-native-modal) - Enhanced, animated, customizable modal.
- [react-native-blur ![GitHub Repo Stars](https://img.shields.io/github/stars/margelo/react-native-blur) ![GitHub last commit](https://img.shields.io/github/last-commit/margelo/react-native-blur)](https://github.com/margelo/react-native-blur) - Native blur view component.
- [react-native-blurhash ![GitHub Repo Stars](https://img.shields.io/github/stars/mrousavy/react-native-blurhash) ![GitHub last commit](https://img.shields.io/github/last-commit/mrousavy/react-native-blurhash)](https://github.com/mrousavy/react-native-blurhash) - Colorful blurry placeholders while content loads.
- [react-native-calendars ![GitHub Repo Stars](https://img.shields.io/github/stars/wix/react-native-calendars) ![GitHub last commit](https://img.shields.io/github/last-commit/wix/react-native-calendars)](https://github.com/wix/react-native-calendars) - Feature-rich calendar components.
- [react-native-date-picker ![GitHub Repo Stars](https://img.shields.io/github/stars/henninghall/react-native-date-picker) ![GitHub last commit](https://img.shields.io/github/last-commit/henninghall/react-native-date-picker)](https://github.com/henninghall/react-native-date-picker) - Native date and time picker for Android and iOS.
- [react-native-reanimated-carousel ![GitHub Repo Stars](https://img.shields.io/github/stars/dohooo/react-native-reanimated-carousel) ![GitHub last commit](https://img.shields.io/github/last-commit/dohooo/react-native-reanimated-carousel)](https://github.com/dohooo/react-native-reanimated-carousel) - Swiper/carousel built entirely on Reanimated, the successor to snap-carousel.
- [react-native-pager-view ![GitHub Repo Stars](https://img.shields.io/github/stars/callstack/react-native-pager-view) ![GitHub last commit](https://img.shields.io/github/last-commit/callstack/react-native-pager-view)](https://github.com/callstack/react-native-pager-view) - Native ViewPager and UIPageViewController wrapper.
- [react-native-copilot ![GitHub Repo Stars](https://img.shields.io/github/stars/mohebifar/react-native-copilot) ![GitHub last commit](https://img.shields.io/github/last-commit/mohebifar/react-native-copilot)](https://github.com/mohebifar/react-native-copilot) - Step-by-step walkthrough tooltips for onboarding.
- [react-native-super-grid ![GitHub Repo Stars](https://img.shields.io/github/stars/saleel/react-native-super-grid) ![GitHub last commit](https://img.shields.io/github/last-commit/saleel/react-native-super-grid)](https://github.com/saleel/react-native-super-grid) - Responsive grid view.
- [react-native-circular-progress ![GitHub Repo Stars](https://img.shields.io/github/stars/bartgryszko/react-native-circular-progress) ![GitHub last commit](https://img.shields.io/github/last-commit/bartgryszko/react-native-circular-progress)](https://github.com/bartgryszko/react-native-circular-progress) - Animated circular progress indicators.
- [react-native-progress-steps ![GitHub Repo Stars](https://img.shields.io/github/stars/colbymillerdev/react-native-progress-steps) ![GitHub last commit](https://img.shields.io/github/last-commit/colbymillerdev/react-native-progress-steps)](https://github.com/colbymillerdev/react-native-progress-steps) - Customizable progress stepper.
- [react-native-confirmation-code-field ![GitHub Repo Stars](https://img.shields.io/github/stars/retyui/react-native-confirmation-code-field) ![GitHub last commit](https://img.shields.io/github/last-commit/retyui/react-native-confirmation-code-field)](https://github.com/retyui/react-native-confirmation-code-field) - OTP/confirmation code input for iOS, Android, and web.
- [react-native-qrcode-svg ![GitHub Repo Stars](https://img.shields.io/github/stars/Expensify/react-native-qrcode-svg) ![GitHub last commit](https://img.shields.io/github/last-commit/Expensify/react-native-qrcode-svg)](https://github.com/Expensify/react-native-qrcode-svg) - QR code generator based on react-native-svg.
- [react-native-country-picker-modal ![GitHub Repo Stars](https://img.shields.io/github/stars/xcarpentier/react-native-country-picker-modal) ![GitHub last commit](https://img.shields.io/github/last-commit/xcarpentier/react-native-country-picker-modal)](https://github.com/xcarpentier/react-native-country-picker-modal) - Country picker with flags, search, and localization.
- [react-native-hole-view ![GitHub Repo Stars](https://img.shields.io/github/stars/ibitcy/react-native-hole-view) ![GitHub last commit](https://img.shields.io/github/last-commit/ibitcy/react-native-hole-view)](https://github.com/ibitcy/react-native-hole-view) - Cut touch-through holes anywhere, perfect for onboarding highlights.

### Lists

- [FlashList ![GitHub Repo Stars](https://img.shields.io/github/stars/Shopify/flash-list) ![GitHub last commit](https://img.shields.io/github/last-commit/Shopify/flash-list)](https://github.com/Shopify/flash-list) - Shopify's fast and performant list, a drop-in replacement for FlatList.
- [Legend List ![GitHub Repo Stars](https://img.shields.io/github/stars/LegendApp/legend-list) ![GitHub last commit](https://img.shields.io/github/last-commit/LegendApp/legend-list)](https://github.com/LegendApp/legend-list) - High-performance list in pure JS, built for the New Architecture.
- [recyclerlistview ![GitHub Repo Stars](https://img.shields.io/github/stars/Flipkart/recyclerlistview) ![GitHub last commit](https://img.shields.io/github/last-commit/Flipkart/recyclerlistview)](https://github.com/Flipkart/recyclerlistview) - The recycling listview that pioneered high-performance lists in React Native.

### Navigation

- [React Navigation ![GitHub Repo Stars](https://img.shields.io/github/stars/react-navigation/react-navigation) ![GitHub last commit](https://img.shields.io/github/last-commit/react-navigation/react-navigation)](https://github.com/react-navigation/react-navigation) - The standard routing and navigation library for React Native.
- [Expo Router](https://docs.expo.dev/router/introduction/) - File-based routing for universal React Native apps, built on React Navigation.
- [react-native-navigation ![GitHub Repo Stars](https://img.shields.io/github/stars/wix/react-native-navigation) ![GitHub last commit](https://img.shields.io/github/last-commit/wix/react-native-navigation)](https://github.com/wix/react-native-navigation) - Wix's fully native navigation solution.
- [react-native-screens ![GitHub Repo Stars](https://img.shields.io/github/stars/software-mansion/react-native-screens) ![GitHub last commit](https://img.shields.io/github/last-commit/software-mansion/react-native-screens)](https://github.com/software-mansion/react-native-screens) - Native navigation primitives that back React Navigation's native stack.
- [react-native-bottom-tabs ![GitHub Repo Stars](https://img.shields.io/github/stars/callstack/react-native-bottom-tabs) ![GitHub last commit](https://img.shields.io/github/last-commit/callstack/react-native-bottom-tabs)](https://github.com/callstack/react-native-bottom-tabs) - Truly native bottom tab bars (SwiftUI and Material) for React Native.

### Sheets, Menus & Toasts

- [react-native-bottom-sheet ![GitHub Repo Stars](https://img.shields.io/github/stars/gorhom/react-native-bottom-sheet) ![GitHub last commit](https://img.shields.io/github/last-commit/gorhom/react-native-bottom-sheet)](https://github.com/gorhom/react-native-bottom-sheet) - Performant, interactive bottom sheet with configurable gestures.
- [react-native-true-sheet ![GitHub Repo Stars](https://img.shields.io/github/stars/lodev09/react-native-true-sheet) ![GitHub last commit](https://img.shields.io/github/last-commit/lodev09/react-native-true-sheet)](https://github.com/lodev09/react-native-true-sheet) - The true native bottom sheet experience.
- [react-native-actions-sheet ![GitHub Repo Stars](https://img.shields.io/github/stars/ammarahm-ed/react-native-actions-sheet) ![GitHub last commit](https://img.shields.io/github/last-commit/ammarahm-ed/react-native-actions-sheet)](https://github.com/ammarahm-ed/react-native-actions-sheet) - Cross-platform ActionSheet with a flexible API.
- [Zeego ![GitHub Repo Stars](https://img.shields.io/github/stars/nandorojo/zeego) ![GitHub last commit](https://img.shields.io/github/last-commit/nandorojo/zeego)](https://github.com/nandorojo/zeego) - Menus for React Native done right — truly native dropdown and context menus.
- [Burnt ![GitHub Repo Stars](https://img.shields.io/github/stars/nandorojo/burnt) ![GitHub last commit](https://img.shields.io/github/last-commit/nandorojo/burnt)](https://github.com/nandorojo/burnt) - Native toasts and alerts for iOS and Android.
- [react-native-root-toast ![GitHub Repo Stars](https://img.shields.io/github/stars/magicismight/react-native-root-toast) ![GitHub last commit](https://img.shields.io/github/last-commit/magicismight/react-native-root-toast)](https://github.com/magicismight/react-native-root-toast) - Pure JavaScript toast solution.
- [react-native-flash-message ![GitHub Repo Stars](https://img.shields.io/github/stars/lucasferreira/react-native-flash-message) ![GitHub last commit](https://img.shields.io/github/last-commit/lucasferreira/react-native-flash-message)](https://github.com/lucasferreira/react-native-flash-message) - Flashbar and top-notification alerts.
- [react-native-notifier ![GitHub Repo Stars](https://img.shields.io/github/stars/seniv/react-native-notifier) ![GitHub last commit](https://img.shields.io/github/last-commit/seniv/react-native-notifier)](https://github.com/seniv/react-native-notifier) - Fast and simple in-app notifications.
- [react-native-popup-menu ![GitHub Repo Stars](https://img.shields.io/github/stars/instea/react-native-popup-menu) ![GitHub last commit](https://img.shields.io/github/last-commit/instea/react-native-popup-menu)](https://github.com/instea/react-native-popup-menu) - Extensible popup menu component.

### Forms & Keyboard

- [React Hook Form ![GitHub Repo Stars](https://img.shields.io/github/stars/react-hook-form/react-hook-form) ![GitHub last commit](https://img.shields.io/github/last-commit/react-hook-form/react-hook-form)](https://github.com/react-hook-form/react-hook-form) - Performant form state management and validation for React and React Native.
- [Formik ![GitHub Repo Stars](https://img.shields.io/github/stars/jaredpalmer/formik) ![GitHub last commit](https://img.shields.io/github/last-commit/jaredpalmer/formik)](https://github.com/jaredpalmer/formik) - Build forms without the tears.
- [react-native-keyboard-controller ![GitHub Repo Stars](https://img.shields.io/github/stars/kirillzyusko/react-native-keyboard-controller) ![GitHub last commit](https://img.shields.io/github/last-commit/kirillzyusko/react-native-keyboard-controller)](https://github.com/kirillzyusko/react-native-keyboard-controller) - Keyboard manager that works identically on iOS and Android.
- [react-native-picker-select ![GitHub Repo Stars](https://img.shields.io/github/stars/lawnstarter/react-native-picker-select) ![GitHub last commit](https://img.shields.io/github/last-commit/lawnstarter/react-native-picker-select)](https://github.com/lawnstarter/react-native-picker-select) - Picker emulating the native select interface.
- [react-native-autocomplete-input ![GitHub Repo Stars](https://img.shields.io/github/stars/byteburgers/react-native-autocomplete-input) ![GitHub last commit](https://img.shields.io/github/last-commit/byteburgers/react-native-autocomplete-input)](https://github.com/byteburgers/react-native-autocomplete-input) - Pure JavaScript autocomplete input.
- [react-native-masked-text ![GitHub Repo Stars](https://img.shields.io/github/stars/bhrott/react-native-masked-text) ![GitHub last commit](https://img.shields.io/github/last-commit/bhrott/react-native-masked-text)](https://github.com/bhrott/react-native-masked-text) - Masked text and input components.
- [react-native-credit-card-input ![GitHub Repo Stars](https://img.shields.io/github/stars/sbycrosz/react-native-credit-card-input) ![GitHub last commit](https://img.shields.io/github/last-commit/sbycrosz/react-native-credit-card-input)](https://github.com/sbycrosz/react-native-credit-card-input) - Cross-platform credit card input.
- [react-native-multiple-select ![GitHub Repo Stars](https://img.shields.io/github/stars/toystars/react-native-multiple-select) ![GitHub last commit](https://img.shields.io/github/last-commit/toystars/react-native-multiple-select)](https://github.com/toystars/react-native-multiple-select) - Simple multi-select component.

### Text & Rich Content

- [react-native-live-markdown ![GitHub Repo Stars](https://img.shields.io/github/stars/Expensify/react-native-live-markdown) ![GitHub last commit](https://img.shields.io/github/last-commit/Expensify/react-native-live-markdown)](https://github.com/Expensify/react-native-live-markdown) - Drop-in TextInput replacement with live Markdown formatting, by Expensify.
- [react-native-markdown-display ![GitHub Repo Stars](https://img.shields.io/github/stars/iamacup/react-native-markdown-display) ![GitHub last commit](https://img.shields.io/github/last-commit/iamacup/react-native-markdown-display)](https://github.com/iamacup/react-native-markdown-display) - 100% CommonMark-compatible Markdown renderer.
- [react-native-hyperlink ![GitHub Repo Stars](https://img.shields.io/github/stars/obipawan/react-native-hyperlink) ![GitHub last commit](https://img.shields.io/github/last-commit/obipawan/react-native-hyperlink)](https://github.com/obipawan/react-native-hyperlink) - Make URLs, emails, and fuzzy links clickable.
- [react-native-html-to-pdf ![GitHub Repo Stars](https://img.shields.io/github/stars/christopherdro/react-native-html-to-pdf) ![GitHub last commit](https://img.shields.io/github/last-commit/christopherdro/react-native-html-to-pdf)](https://github.com/christopherdro/react-native-html-to-pdf) - Convert HTML strings to PDF documents.
- [react-native-responsive-fontsize ![GitHub Repo Stars](https://img.shields.io/github/stars/heyman333/react-native-responsive-fontsize) ![GitHub last commit](https://img.shields.io/github/last-commit/heyman333/react-native-responsive-fontsize)](https://github.com/heyman333/react-native-responsive-fontsize) - Responsive font sizes based on device screen size.

### Image & Camera

- [react-native-vision-camera ![GitHub Repo Stars](https://img.shields.io/github/stars/mrousavy/react-native-vision-camera) ![GitHub last commit](https://img.shields.io/github/last-commit/mrousavy/react-native-vision-camera)](https://github.com/mrousavy/react-native-vision-camera) - Powerful, high-performance camera library with frame processors.
- [expo-image](https://docs.expo.dev/versions/latest/sdk/image/) - Fast, modern image component with caching and blurhash support.
- [react-native-image-picker ![GitHub Repo Stars](https://img.shields.io/github/stars/react-native-image-picker/react-native-image-picker) ![GitHub last commit](https://img.shields.io/github/last-commit/react-native-image-picker/react-native-image-picker)](https://github.com/react-native-image-picker/react-native-image-picker) - Native UI for selecting photos and videos.
- [react-native-image-crop-picker ![GitHub Repo Stars](https://img.shields.io/github/stars/ivpusic/react-native-image-crop-picker) ![GitHub last commit](https://img.shields.io/github/last-commit/ivpusic/react-native-image-crop-picker)](https://github.com/ivpusic/react-native-image-crop-picker) - Image picker with camera, cropping, and compression.
- [react-native-camera-kit ![GitHub Repo Stars](https://img.shields.io/github/stars/teslamotors/react-native-camera-kit) ![GitHub last commit](https://img.shields.io/github/last-commit/teslamotors/react-native-camera-kit)](https://github.com/teslamotors/react-native-camera-kit) - High-performance camera library with barcode scanning, by Tesla.
- [react-native-image-resizer ![GitHub Repo Stars](https://img.shields.io/github/stars/bamlab/react-native-image-resizer) ![GitHub last commit](https://img.shields.io/github/last-commit/bamlab/react-native-image-resizer)](https://github.com/bamlab/react-native-image-resizer) - Resize local images natively.

### Video & Audio

- [react-native-video ![GitHub Repo Stars](https://img.shields.io/github/stars/TheWidlarzGroup/react-native-video) ![GitHub last commit](https://img.shields.io/github/last-commit/TheWidlarzGroup/react-native-video)](https://github.com/TheWidlarzGroup/react-native-video) - The Video component for React Native.
- [expo-video](https://docs.expo.dev/versions/latest/sdk/video/) - Modern video playback built for Expo and the New Architecture.
- [react-native-track-player ![GitHub Repo Stars](https://img.shields.io/github/stars/doublesymmetry/react-native-track-player) ![GitHub last commit](https://img.shields.io/github/last-commit/doublesymmetry/react-native-track-player)](https://github.com/doublesymmetry/react-native-track-player) - Full-featured audio player: background playback, Android Auto, CarPlay, lock-screen controls.
- [react-native-audio-api ![GitHub Repo Stars](https://img.shields.io/github/stars/software-mansion/react-native-audio-api) ![GitHub last commit](https://img.shields.io/github/last-commit/software-mansion/react-native-audio-api)](https://github.com/software-mansion/react-native-audio-api) - High-performance audio engine implementing the Web Audio API.
- [react-native-sound ![GitHub Repo Stars](https://img.shields.io/github/stars/zmxv/react-native-sound) ![GitHub last commit](https://img.shields.io/github/last-commit/zmxv/react-native-sound)](https://github.com/zmxv/react-native-sound) - Play sound clips natively.
- [react-native-webrtc ![GitHub Repo Stars](https://img.shields.io/github/stars/react-native-webrtc/react-native-webrtc) ![GitHub last commit](https://img.shields.io/github/last-commit/react-native-webrtc/react-native-webrtc)](https://github.com/react-native-webrtc/react-native-webrtc) - WebRTC for React Native.

### Maps & Location

- [react-native-maps ![GitHub Repo Stars](https://img.shields.io/github/stars/react-native-maps/react-native-maps) ![GitHub last commit](https://img.shields.io/github/last-commit/react-native-maps/react-native-maps)](https://github.com/react-native-maps/react-native-maps) - MapView components for iOS and Android.
- [rnmapbox/maps ![GitHub Repo Stars](https://img.shields.io/github/stars/rnmapbox/maps) ![GitHub last commit](https://img.shields.io/github/last-commit/rnmapbox/maps)](https://github.com/rnmapbox/maps) - Mapbox maps for custom map experiences.
- [react-native-background-geolocation ![GitHub Repo Stars](https://img.shields.io/github/stars/transistorsoft/react-native-background-geolocation) ![GitHub last commit](https://img.shields.io/github/last-commit/transistorsoft/react-native-background-geolocation)](https://github.com/transistorsoft/react-native-background-geolocation) - Battery-conscious background location with motion detection.
- [react-native-map-link ![GitHub Repo Stars](https://img.shields.io/github/stars/tschoffelen/react-native-map-link) ![GitHub last commit](https://img.shields.io/github/last-commit/tschoffelen/react-native-map-link)](https://github.com/tschoffelen/react-native-map-link) - Open the user's preferred maps app.
- [react-native-google-places-autocomplete ![GitHub Repo Stars](https://img.shields.io/github/stars/FaridSafi/react-native-google-places-autocomplete) ![GitHub last commit](https://img.shields.io/github/last-commit/FaridSafi/react-native-google-places-autocomplete)](https://github.com/FaridSafi/react-native-google-places-autocomplete) - Customizable Google Places autocomplete.

### Charts

- [victory-native-xl ![GitHub Repo Stars](https://img.shields.io/github/stars/FormidableLabs/victory-native-xl) ![GitHub last commit](https://img.shields.io/github/last-commit/FormidableLabs/victory-native-xl)](https://github.com/FormidableLabs/victory-native-xl) - Charting built on Skia and Reanimated with a focus on performance.
- [react-native-graph ![GitHub Repo Stars](https://img.shields.io/github/stars/margelo/react-native-graph) ![GitHub last commit](https://img.shields.io/github/last-commit/margelo/react-native-graph)](https://github.com/margelo/react-native-graph) - Beautiful, high-performance line graphs built with Skia.
- [react-native-gifted-charts ![GitHub Repo Stars](https://img.shields.io/github/stars/Abhinandan-Kushwaha/react-native-gifted-charts) ![GitHub last commit](https://img.shields.io/github/last-commit/Abhinandan-Kushwaha/react-native-gifted-charts)](https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts) - Bar, line, area, pie, donut, and stacked charts.

### Animation & Gestures

- [react-native-reanimated ![GitHub Repo Stars](https://img.shields.io/github/stars/software-mansion/react-native-reanimated) ![GitHub last commit](https://img.shields.io/github/last-commit/software-mansion/react-native-reanimated)](https://github.com/software-mansion/react-native-reanimated) - The standard for performant animations, running on the UI thread.
- [react-native-gesture-handler ![GitHub Repo Stars](https://img.shields.io/github/stars/software-mansion/react-native-gesture-handler) ![GitHub last commit](https://img.shields.io/github/last-commit/software-mansion/react-native-gesture-handler)](https://github.com/software-mansion/react-native-gesture-handler) - Declarative, native-driven gesture system.
- [react-native-skia ![GitHub Repo Stars](https://img.shields.io/github/stars/Shopify/react-native-skia) ![GitHub last commit](https://img.shields.io/github/last-commit/Shopify/react-native-skia)](https://github.com/Shopify/react-native-skia) - High-performance 2D graphics with the Skia rendering engine.
- [Moti ![GitHub Repo Stars](https://img.shields.io/github/stars/nandorojo/moti) ![GitHub last commit](https://img.shields.io/github/last-commit/nandorojo/moti)](https://github.com/nandorojo/moti) - Universal animation library powered by Reanimated, with a Framer Motion-like API.
- [react-native-animatable ![GitHub Repo Stars](https://img.shields.io/github/stars/oblador/react-native-animatable) ![GitHub last commit](https://img.shields.io/github/last-commit/oblador/react-native-animatable)](https://github.com/oblador/react-native-animatable) - Declarative transitions and standard animations.
- [TypeGPU ![GitHub Repo Stars](https://img.shields.io/github/stars/software-mansion/TypeGPU) ![GitHub last commit](https://img.shields.io/github/last-commit/software-mansion/TypeGPU)](https://github.com/software-mansion/TypeGPU) - Type-safe WebGPU toolkit for advanced GPU work.

### Styling & Design Systems

- [NativeWind ![GitHub Repo Stars](https://img.shields.io/github/stars/nativewind/nativewind) ![GitHub last commit](https://img.shields.io/github/last-commit/nativewind/nativewind)](https://github.com/nativewind/nativewind) - Tailwind CSS for React Native.
- [Unistyles ![GitHub Repo Stars](https://img.shields.io/github/stars/jpudysz/react-native-unistyles) ![GitHub last commit](https://img.shields.io/github/last-commit/jpudysz/react-native-unistyles)](https://github.com/jpudysz/react-native-unistyles) - C++-powered StyleSheet superset with themes and breakpoints, built for the New Architecture.
- [styled-components ![GitHub Repo Stars](https://img.shields.io/github/stars/styled-components/styled-components) ![GitHub last commit](https://img.shields.io/github/last-commit/styled-components/styled-components)](https://github.com/styled-components/styled-components) - CSS-in-JS styling that also targets React Native.
- [Emotion ![GitHub Repo Stars](https://img.shields.io/github/stars/emotion-js/emotion) ![GitHub last commit](https://img.shields.io/github/last-commit/emotion-js/emotion)](https://github.com/emotion-js/emotion) - High-performance CSS-in-JS style composition.
- [react-native-typography ![GitHub Repo Stars](https://img.shields.io/github/stars/hectahertz/react-native-typography) ![GitHub last commit](https://img.shields.io/github/last-commit/hectahertz/react-native-typography)](https://github.com/hectahertz/react-native-typography) - Pixel-perfect, native-looking typographic styles.
- [Stacks ![GitHub Repo Stars](https://img.shields.io/github/stars/grapp-dev/stacks) ![GitHub last commit](https://img.shields.io/github/last-commit/grapp-dev/stacks)](https://github.com/grapp-dev/stacks) - Layout primitives for building consistent UIs.
- [react-native-edge-to-edge ![GitHub Repo Stars](https://img.shields.io/github/stars/zoontek/react-native-edge-to-edge) ![GitHub last commit](https://img.shields.io/github/last-commit/zoontek/react-native-edge-to-edge)](https://github.com/zoontek/react-native-edge-to-edge) - Effortless edge-to-edge display on Android.
- [react-native-safe-area-context ![GitHub Repo Stars](https://img.shields.io/github/stars/AppAndFlow/react-native-safe-area-context) ![GitHub last commit](https://img.shields.io/github/last-commit/AppAndFlow/react-native-safe-area-context)](https://github.com/AppAndFlow/react-native-safe-area-context) - Flexible safe area inset handling.

### Internationalization

- [react-native-localize ![GitHub Repo Stars](https://img.shields.io/github/stars/zoontek/react-native-localize) ![GitHub last commit](https://img.shields.io/github/last-commit/zoontek/react-native-localize)](https://github.com/zoontek/react-native-localize) - Toolbox for app localization: locales, timezones, currencies.

### System & Device

- [react-native-device-info ![GitHub Repo Stars](https://img.shields.io/github/stars/react-native-device-info/react-native-device-info) ![GitHub last commit](https://img.shields.io/github/last-commit/react-native-device-info/react-native-device-info)](https://github.com/react-native-device-info/react-native-device-info) - Device information for iOS and Android.
- [react-native-permissions ![GitHub Repo Stars](https://img.shields.io/github/stars/zoontek/react-native-permissions) ![GitHub last commit](https://img.shields.io/github/last-commit/zoontek/react-native-permissions)](https://github.com/zoontek/react-native-permissions) - Unified permissions API.
- [react-native-keychain ![GitHub Repo Stars](https://img.shields.io/github/stars/oblador/react-native-keychain) ![GitHub last commit](https://img.shields.io/github/last-commit/oblador/react-native-keychain)](https://github.com/oblador/react-native-keychain) - Secure keychain and keystore access.
- [react-native-config ![GitHub Repo Stars](https://img.shields.io/github/stars/react-native-config/react-native-config) ![GitHub last commit](https://img.shields.io/github/last-commit/react-native-config/react-native-config)](https://github.com/react-native-config/react-native-config) - Expose environment config to your JS and native code.
- [react-native-contacts ![GitHub Repo Stars](https://img.shields.io/github/stars/morenoh149/react-native-contacts) ![GitHub last commit](https://img.shields.io/github/last-commit/morenoh149/react-native-contacts)](https://github.com/morenoh149/react-native-contacts) - Native contacts access.
- [react-native-calendar-events ![GitHub Repo Stars](https://img.shields.io/github/stars/wmcmahan/react-native-calendar-events) ![GitHub last commit](https://img.shields.io/github/last-commit/wmcmahan/react-native-calendar-events)](https://github.com/wmcmahan/react-native-calendar-events) - Calendar event access for iOS and Android.
- [react-native-share ![GitHub Repo Stars](https://img.shields.io/github/stars/react-native-share/react-native-share) ![GitHub last commit](https://img.shields.io/github/last-commit/react-native-share/react-native-share)](https://github.com/react-native-share/react-native-share) - Native share sheet and social sharing.
- [react-native-haptic-feedback ![GitHub Repo Stars](https://img.shields.io/github/stars/mkuczera/react-native-haptic-feedback) ![GitHub last commit](https://img.shields.io/github/last-commit/mkuczera/react-native-haptic-feedback)](https://github.com/mkuczera/react-native-haptic-feedback) - Haptics that feel right, including Core Haptics patterns.
- [react-native-sensors ![GitHub Repo Stars](https://img.shields.io/github/stars/react-native-sensors/react-native-sensors) ![GitHub last commit](https://img.shields.io/github/last-commit/react-native-sensors/react-native-sensors)](https://github.com/react-native-sensors/react-native-sensors) - Developer-friendly access to device sensors.
- [react-native-background-fetch ![GitHub Repo Stars](https://img.shields.io/github/stars/transistorsoft/react-native-background-fetch) ![GitHub last commit](https://img.shields.io/github/last-commit/transistorsoft/react-native-background-fetch)](https://github.com/transistorsoft/react-native-background-fetch) - Periodic background callbacks on iOS and Android.
- [react-native-background-downloader ![GitHub Repo Stars](https://img.shields.io/github/stars/kesha-antonov/react-native-background-downloader) ![GitHub last commit](https://img.shields.io/github/last-commit/kesha-antonov/react-native-background-downloader)](https://github.com/kesha-antonov/react-native-background-downloader) - Download and upload large files, even when the app is backgrounded.
- [document-picker ![GitHub Repo Stars](https://img.shields.io/github/stars/react-native-documents/document-picker) ![GitHub last commit](https://img.shields.io/github/last-commit/react-native-documents/document-picker)](https://github.com/react-native-documents/document-picker) - Document picker and viewer.
- [expo-quick-actions ![GitHub Repo Stars](https://img.shields.io/github/stars/EvanBacon/expo-quick-actions) ![GitHub last commit](https://img.shields.io/github/last-commit/EvanBacon/expo-quick-actions)](https://github.com/EvanBacon/expo-quick-actions) - Home screen quick actions and custom app icons.
- [react-native-ssl-pinning ![GitHub Repo Stars](https://img.shields.io/github/stars/MaxToyberman/react-native-ssl-pinning) ![GitHub last commit](https://img.shields.io/github/last-commit/MaxToyberman/react-native-ssl-pinning)](https://github.com/MaxToyberman/react-native-ssl-pinning) - SSL pinning and cookie handling.

### Notifications

- [Expo Notifications](https://docs.expo.dev/versions/latest/sdk/notifications/) - Push and local notifications for Expo apps.
- [react-native-firebase ![GitHub Repo Stars](https://img.shields.io/github/stars/invertase/react-native-firebase) ![GitHub last commit](https://img.shields.io/github/last-commit/invertase/react-native-firebase)](https://github.com/invertase/react-native-firebase) - Includes FCM messaging alongside the full Firebase suite.
- [react-native-notifications ![GitHub Repo Stars](https://img.shields.io/github/stars/wix/react-native-notifications) ![GitHub last commit](https://img.shields.io/github/last-commit/wix/react-native-notifications)](https://github.com/wix/react-native-notifications) - Wix's notification handling library.
- [react-native-onesignal ![GitHub Repo Stars](https://img.shields.io/github/stars/OneSignal/react-native-onesignal) ![GitHub last commit](https://img.shields.io/github/last-commit/OneSignal/react-native-onesignal)](https://github.com/OneSignal/react-native-onesignal) - OneSignal push notification SDK.

### Web & WebViews

- [react-native-webview ![GitHub Repo Stars](https://img.shields.io/github/stars/react-native-webview/react-native-webview) ![GitHub last commit](https://img.shields.io/github/last-commit/react-native-webview/react-native-webview)](https://github.com/react-native-webview/react-native-webview) - The community WebView component.
- [react-native-inappbrowser ![GitHub Repo Stars](https://img.shields.io/github/stars/proyecto26/react-native-inappbrowser) ![GitHub last commit](https://img.shields.io/github/last-commit/proyecto26/react-native-inappbrowser)](https://github.com/proyecto26/react-native-inappbrowser) - In-app browser using Chrome Custom Tabs and SFSafariViewController.
- [react-native-web ![GitHub Repo Stars](https://img.shields.io/github/stars/necolas/react-native-web) ![GitHub last commit](https://img.shields.io/github/last-commit/necolas/react-native-web)](https://github.com/necolas/react-native-web) - Run React Native components and APIs on the web.
- [Solito ![GitHub Repo Stars](https://img.shields.io/github/stars/nandorojo/solito) ![GitHub last commit](https://img.shields.io/github/last-commit/nandorojo/solito)](https://github.com/nandorojo/solito) - React Native + Next.js, unified navigation for universal apps.

### Other Platforms

- [react-native-windows ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/react-native-windows) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/react-native-windows)](https://github.com/microsoft/react-native-windows) - Build native Windows apps with React.
- [react-native-macos ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/react-native-macos) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/react-native-macos)](https://github.com/microsoft/react-native-macos) - Build native macOS apps with React.

## Data

### State Management

- [Zustand ![GitHub Repo Stars](https://img.shields.io/github/stars/pmndrs/zustand) ![GitHub last commit](https://img.shields.io/github/last-commit/pmndrs/zustand)](https://github.com/pmndrs/zustand) - Bear necessities for state management.
- [Jotai ![GitHub Repo Stars](https://img.shields.io/github/stars/pmndrs/jotai) ![GitHub last commit](https://img.shields.io/github/last-commit/pmndrs/jotai)](https://github.com/pmndrs/jotai) - Primitive and flexible atomic state.
- [Redux Toolkit ![GitHub Repo Stars](https://img.shields.io/github/stars/reduxjs/redux-toolkit) ![GitHub last commit](https://img.shields.io/github/last-commit/reduxjs/redux-toolkit)](https://github.com/reduxjs/redux-toolkit) - The official, batteries-included Redux toolset.
- [Legend State ![GitHub Repo Stars](https://img.shields.io/github/stars/LegendApp/legend-state) ![GitHub last commit](https://img.shields.io/github/last-commit/LegendApp/legend-state)](https://github.com/LegendApp/legend-state) - Super fast state with fine-grained reactivity and built-in sync.

### Storage & Databases

- [react-native-mmkv ![GitHub Repo Stars](https://img.shields.io/github/stars/mrousavy/react-native-mmkv) ![GitHub last commit](https://img.shields.io/github/last-commit/mrousavy/react-native-mmkv)](https://github.com/mrousavy/react-native-mmkv) - The fastest key/value storage for React Native, ~30x faster than AsyncStorage.
- [AsyncStorage ![GitHub Repo Stars](https://img.shields.io/github/stars/react-native-async-storage/async-storage) ![GitHub last commit](https://img.shields.io/github/last-commit/react-native-async-storage/async-storage)](https://github.com/react-native-async-storage/async-storage) - Simple, asynchronous, persistent key-value storage.
- [op-sqlite ![GitHub Repo Stars](https://img.shields.io/github/stars/OP-Engineering/op-sqlite) ![GitHub last commit](https://img.shields.io/github/last-commit/OP-Engineering/op-sqlite)](https://github.com/OP-Engineering/op-sqlite) - The fastest SQLite library for React Native.
- [expo-sqlite](https://docs.expo.dev/versions/latest/sdk/sqlite/) - SQLite database access in Expo, with support for Drizzle ORM.
- [Drizzle ORM ![GitHub Repo Stars](https://img.shields.io/github/stars/drizzle-team/drizzle-orm) ![GitHub last commit](https://img.shields.io/github/last-commit/drizzle-team/drizzle-orm)](https://github.com/drizzle-team/drizzle-orm) - TypeScript ORM with first-class Expo/React Native SQLite support.
- [WatermelonDB ![GitHub Repo Stars](https://img.shields.io/github/stars/Nozbe/WatermelonDB) ![GitHub last commit](https://img.shields.io/github/last-commit/Nozbe/WatermelonDB)](https://github.com/Nozbe/WatermelonDB) - Reactive and asynchronous database for powerful apps that scale.
- [RxDB ![GitHub Repo Stars](https://img.shields.io/github/stars/pubkey/rxdb) ![GitHub last commit](https://img.shields.io/github/last-commit/pubkey/rxdb)](https://github.com/pubkey/rxdb) - Local-first, reactive database that replicates with your backend.
- [Realm ![GitHub Repo Stars](https://img.shields.io/github/stars/realm/realm-js) ![GitHub last commit](https://img.shields.io/github/last-commit/realm/realm-js)](https://github.com/realm/realm-js) - Mobile object database, an alternative to SQLite.

### Networking

- [TanStack Query ![GitHub Repo Stars](https://img.shields.io/github/stars/TanStack/query) ![GitHub last commit](https://img.shields.io/github/last-commit/TanStack/query)](https://github.com/TanStack/query) - Powerful async state management and data fetching.
- [apisauce ![GitHub Repo Stars](https://img.shields.io/github/stars/infinitered/apisauce) ![GitHub last commit](https://img.shields.io/github/last-commit/infinitered/apisauce)](https://github.com/infinitered/apisauce) - Axios with standardized errors and request/response transforms.
- [react-native-netinfo ![GitHub Repo Stars](https://img.shields.io/github/stars/react-native-netinfo/react-native-netinfo) ![GitHub last commit](https://img.shields.io/github/last-commit/react-native-netinfo/react-native-netinfo)](https://github.com/react-native-netinfo/react-native-netinfo) - Network state and connectivity info.
- [react-native-network-logger ![GitHub Repo Stars](https://img.shields.io/github/stars/alexbrazier/react-native-network-logger) ![GitHub last commit](https://img.shields.io/github/last-commit/alexbrazier/react-native-network-logger)](https://github.com/alexbrazier/react-native-network-logger) - In-app HTTP request monitor.
- [react-native-quick-crypto ![GitHub Repo Stars](https://img.shields.io/github/stars/margelo/react-native-quick-crypto) ![GitHub last commit](https://img.shields.io/github/last-commit/margelo/react-native-quick-crypto)](https://github.com/margelo/react-native-quick-crypto) - Fast native implementation of Node's crypto module.

## Services & Integrations

- [react-native-firebase ![GitHub Repo Stars](https://img.shields.io/github/stars/invertase/react-native-firebase) ![GitHub last commit](https://img.shields.io/github/last-commit/invertase/react-native-firebase)](https://github.com/invertase/react-native-firebase) - Well-tested, feature-rich modular Firebase implementation.
- [sentry-react-native ![GitHub Repo Stars](https://img.shields.io/github/stars/getsentry/sentry-react-native) ![GitHub last commit](https://img.shields.io/github/last-commit/getsentry/sentry-react-native)](https://github.com/getsentry/sentry-react-native) - Official Sentry SDK for crash reporting and performance monitoring.
- [react-native-app-auth ![GitHub Repo Stars](https://img.shields.io/github/stars/FormidableLabs/react-native-app-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/FormidableLabs/react-native-app-auth)](https://github.com/FormidableLabs/react-native-app-auth) - PKCE-compliant OAuth2 client based on AppAuth.
- [google-signin ![GitHub Repo Stars](https://img.shields.io/github/stars/react-native-google-signin/google-signin) ![GitHub last commit](https://img.shields.io/github/last-commit/react-native-google-signin/google-signin)](https://github.com/react-native-google-signin/google-signin) - Google Sign-In for React Native.

## Payments & Monetization

- [stripe-react-native ![GitHub Repo Stars](https://img.shields.io/github/stars/stripe/stripe-react-native) ![GitHub last commit](https://img.shields.io/github/last-commit/stripe/stripe-react-native)](https://github.com/stripe/stripe-react-native) - Official Stripe SDK for payments in React Native.
- [react-native-purchases ![GitHub Repo Stars](https://img.shields.io/github/stars/RevenueCat/react-native-purchases) ![GitHub last commit](https://img.shields.io/github/last-commit/RevenueCat/react-native-purchases)](https://github.com/RevenueCat/react-native-purchases) - RevenueCat SDK for in-app purchases and subscriptions.

## Development Tools

### Tooling & IDE

- [Radon IDE ![GitHub Repo Stars](https://img.shields.io/github/stars/software-mansion/radon-ide) ![GitHub last commit](https://img.shields.io/github/last-commit/software-mansion/radon-ide)](https://github.com/software-mansion/radon-ide) - VSCode/Cursor extension that turns your editor into a full-featured React Native IDE with an embedded simulator.
- [EAS CLI ![GitHub Repo Stars](https://img.shields.io/github/stars/expo/eas-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/expo/eas-cli)](https://github.com/expo/eas-cli) - Build, submit, and update iOS and Android apps from the command line.
- [react-native-rename ![GitHub Repo Stars](https://img.shields.io/github/stars/junedomingo/react-native-rename) ![GitHub last commit](https://img.shields.io/github/last-commit/junedomingo/react-native-rename)](https://github.com/junedomingo/react-native-rename) - Rename a React Native app with one command.
- [react-native-bundle-visualizer ![GitHub Repo Stars](https://img.shields.io/github/stars/callstack/react-native-bundle-visualizer) ![GitHub last commit](https://img.shields.io/github/last-commit/callstack/react-native-bundle-visualizer)](https://github.com/callstack/react-native-bundle-visualizer) - See which packages inflate your bundle size.
- [Re.Pack ![GitHub Repo Stars](https://img.shields.io/github/stars/callstack/repack) ![GitHub last commit](https://img.shields.io/github/last-commit/callstack/repack)](https://github.com/callstack/repack) - Webpack/Rspack-based toolkit with code splitting and Module Federation for React Native.

### Debugging

- [Reactotron ![GitHub Repo Stars](https://img.shields.io/github/stars/infinitered/reactotron) ![GitHub last commit](https://img.shields.io/github/last-commit/infinitered/reactotron)](https://github.com/infinitered/reactotron) - Desktop app for inspecting React Native apps: state, API requests, performance.
- [Buoy ![GitHub Repo Stars](https://img.shields.io/github/stars/Buoy-gg/buoy) ![GitHub last commit](https://img.shields.io/github/last-commit/Buoy-gg/buoy)](https://github.com/Buoy-gg/buoy) - Devtools that live in your app — and answer to your AI agent.

### Testing

- [Maestro ![GitHub Repo Stars](https://img.shields.io/github/stars/mobile-dev-inc/Maestro) ![GitHub last commit](https://img.shields.io/github/last-commit/mobile-dev-inc/Maestro)](https://github.com/mobile-dev-inc/Maestro) - Painless declarative E2E automation for mobile.
- [Detox ![GitHub Repo Stars](https://img.shields.io/github/stars/wix/Detox) ![GitHub last commit](https://img.shields.io/github/last-commit/wix/Detox)](https://github.com/wix/Detox) - Gray-box end-to-end testing and automation framework.
- [React Native Testing Library ![GitHub Repo Stars](https://img.shields.io/github/stars/callstack/react-native-testing-library) ![GitHub last commit](https://img.shields.io/github/last-commit/callstack/react-native-testing-library)](https://github.com/callstack/react-native-testing-library) - Testing utilities that encourage good practices.
- [Loki ![GitHub Repo Stars](https://img.shields.io/github/stars/oblador/loki) ![GitHub last commit](https://img.shields.io/github/last-commit/oblador/loki)](https://github.com/oblador/loki) - Visual regression testing for Storybook.

### Builds, Deployment & OTA Updates

- [EAS](https://expo.dev/eas) - Expo Application Services: cloud builds, app store submission, and OTA updates.
- [hot-updater ![GitHub Repo Stars](https://img.shields.io/github/stars/gronxb/hot-updater) ![GitHub last commit](https://img.shields.io/github/last-commit/gronxb/hot-updater)](https://github.com/gronxb/hot-updater) - Self-hostable OTA update solution, a CodePush alternative.
- [Fastlane](https://fastlane.tools) - Automate building, screenshots, and releasing for iOS and Android.

### Building Libraries

- [create-react-native-library ![GitHub Repo Stars](https://img.shields.io/github/stars/callstack/react-native-builder-bob) ![GitHub last commit](https://img.shields.io/github/last-commit/callstack/react-native-builder-bob)](https://github.com/callstack/react-native-builder-bob) - Scaffold and build React Native libraries for distribution.
- [Nitro Modules ![GitHub Repo Stars](https://img.shields.io/github/stars/mrousavy/nitro) ![GitHub last commit](https://img.shields.io/github/last-commit/mrousavy/nitro)](https://github.com/mrousavy/nitro) - Insanely fast native C++, Swift, or Kotlin modules with statically compiled bindings.

## Starters & Boilerplates

- [Ignite ![GitHub Repo Stars](https://img.shields.io/github/stars/infinitered/ignite) ![GitHub last commit](https://img.shields.io/github/last-commit/infinitered/ignite)](https://github.com/infinitered/ignite) - Infinite Red's battle-tested boilerplate with CLI and generators.
- [react-native-boilerplate ![GitHub Repo Stars](https://img.shields.io/github/stars/thecodingmachine/react-native-boilerplate) ![GitHub last commit](https://img.shields.io/github/last-commit/thecodingmachine/react-native-boilerplate)](https://github.com/thecodingmachine/react-native-boilerplate) - TheCodingMachine's template for solid, scalable applications.
- [Expo Templates](https://docs.expo.dev/more/create-expo/) - Official Expo templates, from blank to tabs to full navigation setups.

## Open Source Apps

Production apps you can learn from.

- [Bluesky ![GitHub Repo Stars](https://img.shields.io/github/stars/bluesky-social/social-app) ![GitHub last commit](https://img.shields.io/github/last-commit/bluesky-social/social-app)](https://github.com/bluesky-social/social-app) - The Bluesky social app for web, iOS, and Android.
- [Expensify ![GitHub Repo Stars](https://img.shields.io/github/stars/Expensify/App) ![GitHub last commit](https://img.shields.io/github/last-commit/Expensify/App)](https://github.com/Expensify/App) - New Expensify: financial collaboration, chat-centered.
- [Joplin ![GitHub Repo Stars](https://img.shields.io/github/stars/laurent22/joplin) ![GitHub last commit](https://img.shields.io/github/last-commit/laurent22/joplin)](https://github.com/laurent22/joplin) - Privacy-focused note-taking app with sync, on every platform.
- [Mattermost ![GitHub Repo Stars](https://img.shields.io/github/stars/mattermost/mattermost-mobile) ![GitHub last commit](https://img.shields.io/github/last-commit/mattermost/mattermost-mobile)](https://github.com/mattermost/mattermost-mobile) - Mattermost's mobile apps.
- [Rocket.Chat ![GitHub Repo Stars](https://img.shields.io/github/stars/RocketChat/Rocket.Chat.ReactNative) ![GitHub last commit](https://img.shields.io/github/last-commit/RocketChat/Rocket.Chat.ReactNative)](https://github.com/RocketChat/Rocket.Chat.ReactNative) - Rocket.Chat's mobile client.
- [Artsy ![GitHub Repo Stars](https://img.shields.io/github/stars/artsy/eigen) ![GitHub last commit](https://img.shields.io/github/last-commit/artsy/eigen)](https://github.com/artsy/eigen) - The art world in your pocket.
- [YouTrack Mobile ![GitHub Repo Stars](https://img.shields.io/github/stars/JetBrains/youtrack-mobile) ![GitHub last commit](https://img.shields.io/github/last-commit/JetBrains/youtrack-mobile)](https://github.com/JetBrains/youtrack-mobile) - JetBrains' YouTrack client for iOS and Android.

## Learning

- [React Native Docs](https://reactnative.dev/docs/getting-started) - The official guides, always the right place to start.
- [Expo Tutorial](https://docs.expo.dev/tutorial/introduction/) - Official hands-on tutorial building a universal app.
- [React Native Express](https://www.reactnative.express) - Guided walkthrough of the React Native ecosystem.
- [Start React Native](https://start-react-native.dev) - William Candillon's in-depth course on gestures and animations.
- [Can it be done in React Native?](https://www.youtube.com/@wcandillon) - William Candillon's YouTube series rebuilding famous UIs.

## Staying Up to Date

- [This Week In React](https://thisweekinreact.com) - Weekly newsletter covering React and React Native.
- [React Native Newsletter](https://reactnativenewsletter.com) - Occasional newsletter of React Native news and articles.
- [React Native Radio](https://reactnativeradio.com) - The long-running React Native podcast, by Infinite Red.
- [Chain React](https://chainreactconf.com) - The US React Native conference, Portland, OR.
- [App.js Conf](https://appjs.co) - Expo and React Native conference, Kraków, Poland.
- [React Universe Conf](https://www.reactuniverseconf.com) - Callstack's conference (formerly React Native EU), Wrocław, Poland.

## Contributing

Contributions are welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first: entries should be actively maintained, work with current React Native, and be genuinely useful to most developers.

Many thanks to everyone on the [contributor list ![GitHub Repo Stars](https://img.shields.io/github/stars/jondot/awesome-react-native) ![GitHub last commit](https://img.shields.io/github/last-commit/jondot/awesome-react-native)](https://github.com/jondot/awesome-react-native/graphs/contributors) :)
