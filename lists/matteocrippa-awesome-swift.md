# Awesome Swift
 
<!-- 

PLEASE DO NOT UPDATE THIS FILE, UPDATE CONTENTS.JSON INSTEAD. THANK YOU :-)

 -->



| Awesome | Linux | Projects | Updated |
|:-------:|:-----:|:--------:|:-------:|
| [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) | :penguin: | 1047 | September 22, 2023 |

### Contents

- [Guides](#guides)
  - [Newsletter](#newsletter)
  - [Official Guides](#official-guides)
  - [Style Guides](#style-guides)
  - [Third party Guides](#third-party-guides)
- [Boilerplates](#boilerplates)
- [REPL](#repl)
- [Editor Support](#editor-support)
  - [Emacs](#emacs)
  - [Google Colaboratory](#google-colaboratory)
  - [Vim](#vim)
- [Benchmark](#benchmark)
- [Converters](#converters)
- [Other Awesome Lists](#other-awesome-lists)
- [Dependency Managers](#dependency-managers)
- [Patterns](#patterns)
- [Misc](#misc)
- [Libs](#libs)
  - [Accessibility](#accessibility)
  - [AI](#ai)
  - [Algorithm](#algorithm)
  - [Analytics](#analytics)
  - [Animation](#animation)
  - [API](#api)
  - [App Routing](#app-routing)
  - [App Store](#app-store)
  - [Audio](#audio)
  - [Augmented Reality](#augmented-reality)
  - [Authentication](#authentication)
  - [Bots](#bots)
  - [Cache](#cache)
  - [Chart](#chart)
  - [Chat](#chat)
  - [Colors](#colors)
  - [Command Line](#command-line)
  - [Concurrency](#concurrency)
  - [Currency](#currency)
  - [Data Management](#data-management)
    - [CBOR](#cbor)
    - [Core Data](#core-data)
    - [CSV](#csv)
    - [Firebase](#firebase)
    - [GraphQL](#graphql)
    - [JSON](#json)
    - [Key Value Store](#key-value-store)
    - [MongoDB](#mongodb)
    - [Multi Database](#multi-database)
    - [ORM](#orm)
    - [Other Data](#other-data)
    - [Realm](#realm)
    - [SQL drivers](#sql-drivers)
    - [SQLite](#sqlite)
    - [TOML](#toml)
    - [XML](#xml)
    - [YAML](#yaml)
    - [ZIP](#zip)
  - [Date](#date)
  - [Dependency Injection](#dependency-injection)
  - [Device](#device)
  - [Documentation](#documentation)
  - [Email](#email)
  - [Embedded Systems](#embedded-systems)
    - [Peripherals](#peripherals)
  - [Events](#events)
  - [Files](#files)
  - [Fonts](#fonts)
  - [Game Engine](#game-engine)
    - [2D](#game-engine-2d)
  - [Games](#games)
  - [Gesture](#gesture)
  - [Hardware](#hardware)
    - [3D Touch](#3d-touch)
    - [Bluetooth](#bluetooth)
    - [Camera](#camera)
      - [Barcode](#barcode)
    - [Haptic Feedback](#haptic-feedback)
    - [iBeacon](#ibeacon)
    - [Sensors](#sensors)
  - [Images](#images)
  - [Key Value Coding](#key-value-coding)
  - [Keyboard](#keyboard)
  - [Kit](#kit)
  - [Layout](#layout)
    - [Auto Layout](#auto-layout)
  - [Localization](#localization)
  - [Location](#location)
  - [Logging](#logging)
  - [Maps](#maps)
  - [Math](#math)
  - [Natural Language Processing](#natural-language-processing)
  - [Network](#network)
    - [HTML](#html)
    - [Messaging Protocol](#messaging-protocol)
    - [SOAP](#soap)
    - [Socket](#socket)
    - [Webserver](#webserver)
  - [OCR](#ocr)
  - [Optimization](#optimization)
  - [PDF](#pdf)
  - [Quality](#quality)
  - [Scripting](#scripting)
  - [SDK](#sdk)
  - [Security](#security)
    - [Cryptography](#cryptography)
    - [Keychain](#keychain)
  - [Streaming](#streaming)
  - [Styling](#styling)
  - [SVG](#svg)
  - [System](#system)
  - [Testing](#testing)
    - [Mock](#mock)
  - [Text](#text)
  - [Thread](#thread)
  - [UI](#ui)
    - [Alert](#alert)
    - [Blur](#blur)
    - [Button](#button)
    - [Calendar](#calendar)
    - [Cards](#cards)
    - [Form](#form)
    - [HUD](#hud)
    - [Label](#label)
    - [Menu](#menu)
    - [Pagination](#pagination)
    - [Payment](#payment)
    - [Permissions](#permissions)
    - [Scroll Bars](#scroll-bars)
    - [StackView](#stackview)
    - [Switch](#switch)
    - [Tab](#tab)
    - [Template](#template)
    - [TextField](#textfield)
    - [Transition](#transition)
    - [3D](#ui-3d)
    - [UICollectionView](#uicollectionview)
    - [UITableView](#uitableview)
    - [Walkthrough](#walkthrough)
  - [Utility](#utility)
  - [Validation](#validation)
    - [Phone Numbers](#phone-numbers)
  - [Version Manager](#version-manager)
  - [Video](#video)
- [Serverless](#serverless)

## Guides
*An awesome list of Swift related guides.* 

### Newsletter
[back to top](#readme) 

* [Open Source Updates for Swift Projects](https://ossp-updates.beehiiv.com/) - A bi-weekly newsletter to give you the latest updates on popular and unknown open source projects written or related to Swift.

### Official Guides
[back to top](#readme) 

* [API Design Guidelines](https://www.swift.org/documentation/api-design-guidelines/) - Official Swift API design guidelines.
* [Apple eBook](https://books.apple.com/us/book/the-swift-programming-language-swift-5-7/id881256329) - Official Apple eBook for Swift beginners.
* [Getting Started](https://www.swift.org/getting-started/) - Find information about the how to use the Swift programming language.
* [Introducing SwiftUI](https://developer.apple.com/tutorials/swiftui) - Official SwiftUI tutorial with 4+ hours of content and interactive tutorials.

### Style Guides
[back to top](#readme) 

* [Airbnb ![GitHub Repo Stars](https://img.shields.io/github/stars/airbnb/swift) ![GitHub last commit](https://img.shields.io/github/last-commit/airbnb/swift)](https://github.com/airbnb/swift) - Airbnb's Official Style Guide.
* [Google](https://google.github.io/swift/) - This style guide is based on Apple’s excellent Swift standard library style and also incorporates feedback from usage across multiple Swift projects within Google.
* [LinkedIn ![GitHub Repo Stars](https://img.shields.io/github/stars/linkedin/swift-style-guide) ![GitHub last commit](https://img.shields.io/github/last-commit/linkedin/swift-style-guide)](https://github.com/linkedin/swift-style-guide) - LinkedIn's Official Style Guide.
* [Raywenderlich ![GitHub Repo Stars](https://img.shields.io/github/stars/kodecocodes/swift-style-guide) ![GitHub last commit](https://img.shields.io/github/last-commit/kodecocodes/swift-style-guide)](https://github.com/kodecocodes/swift-style-guide) - Raywenderlich guide, a must read.

### Third party Guides
[back to top](#readme) 

* [30 Days of Swift ![GitHub Repo Stars](https://img.shields.io/github/stars/allenwong/30DaysofSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/allenwong/30DaysofSwift)](https://github.com/allenwong/30DaysofSwift) - A cool 30 days tutorial.
* [About Swift ![GitHub Repo Stars](https://img.shields.io/github/stars/NicolaLancellotti-About/About-Swift) ![GitHub last commit](https://img.shields.io/github/last-commit/NicolaLancellotti-About/About-Swift)](https://github.com/NicolaLancellotti-About/About-Swift) - A playground about the Swift language.
* [Awesome Swift Education ![GitHub Repo Stars](https://img.shields.io/github/stars/hsavit1/Awesome-Swift-Education) ![GitHub last commit](https://img.shields.io/github/last-commit/hsavit1/Awesome-Swift-Education)](https://github.com/hsavit1/Awesome-Swift-Education) - An organized list of essential Swift Language Topics.
* [Conferences.digital ![GitHub Repo Stars](https://img.shields.io/github/stars/zagahr/Conferences.digital) ![GitHub last commit](https://img.shields.io/github/last-commit/zagahr/Conferences.digital)](https://github.com/zagahr/Conferences.digital) - Watch conference videos in a native macOS app.
* [Developing iOS Apps with Swift](https://podcasts.apple.com/us/podcast/developing-ios-11-apps-with-swift/id1315130780) - Stanford course by Paul Hegarty.
* [Hacking With Swift](https://www.hackingwithswift.com) - Complete training course that teaches app development through 30 hands-on projects, for free.
* [Ray Wenderlich Tutorials, Videos, Podcasts and books](https://www.kodeco.com) - High quality programming tutorials.
* [Swift & SwiftUI Tutorials](https://janeshswift.com) - SwiftUI learning with Ease.
* [Swift Education](https://github.com/swifteducation) - A community of educators sharing materials for teaching Swift and app development.
* [swift-tips ![GitHub Repo Stars](https://img.shields.io/github/stars/vincent-pradeilles/swift-tips) ![GitHub last commit](https://img.shields.io/github/last-commit/vincent-pradeilles/swift-tips)](https://github.com/vincent-pradeilles/swift-tips) - A series of useful tips by Vincent Pradeilles.
* [SwiftDoc](https://swiftdoc.org/) - Auto-generated documentation.
* [SwiftGuide CN ![GitHub Repo Stars](https://img.shields.io/github/stars/ipader/SwiftGuide) ![GitHub last commit](https://img.shields.io/github/last-commit/ipader/SwiftGuide)](https://github.com/ipader/SwiftGuide) - A Chinese written guide.
* [SwiftTips ![GitHub Repo Stars](https://img.shields.io/github/stars/JohnSundell/SwiftTips) ![GitHub last commit](https://img.shields.io/github/last-commit/JohnSundell/SwiftTips)](https://github.com/JohnSundell/SwiftTips) - A collection of useful tips by John Sundell.

## Boilerplates

* [iOS project template ![GitHub Repo Stars](https://img.shields.io/github/stars/messeb/ios-project-template) ![GitHub last commit](https://img.shields.io/github/last-commit/messeb/ios-project-template)](https://github.com/messeb/ios-project-template) - iOS project template with fastlane lanes, Travis CI jobs and GitHub integrations of Codecov, HoundCI for SwiftLint and Danger.
* [Model-View-Presenter template ![GitHub Repo Stars](https://img.shields.io/github/stars/onl1ner/ios-mvp-template) ![GitHub last commit](https://img.shields.io/github/last-commit/onl1ner/ios-mvp-template)](https://github.com/onl1ner/ios-mvp-template) - A flexible and easy template created to speed up the development of your iOS application based on the MVP pattern.
* [Swift Module Template ![GitHub Repo Stars](https://img.shields.io/github/stars/fulldecent/swift5-module-template) ![GitHub last commit](https://img.shields.io/github/last-commit/fulldecent/swift5-module-template)](https://github.com/fulldecent/swift5-module-template) - An opinionated starting point for awesome, reusable modules.

## REPL

* [Online Swift Playground](http://online.swiftplayground.run) - Online Swift Playground.

## Editor Support
*Support for your favorite editors.* 

### Emacs
[back to top](#readme) 

* [swift-mode ![GitHub Repo Stars](https://img.shields.io/github/stars/swift-emacs/swift-mode) ![GitHub last commit](https://img.shields.io/github/last-commit/swift-emacs/swift-mode)](https://github.com/swift-emacs/swift-mode) - Emacs support, including partial flycheck error support.

### Google Colaboratory
[back to top](#readme) 

* [swift-colab ![GitHub Repo Stars](https://img.shields.io/github/stars/philipturner/swift-colab) ![GitHub last commit](https://img.shields.io/github/last-commit/philipturner/swift-colab)](https://github.com/philipturner/swift-colab) - Run Swift in a browser.

### Vim
[back to top](#readme) 

* [swift-vim ![GitHub Repo Stars](https://img.shields.io/github/stars/keith/swift.vim) ![GitHub last commit](https://img.shields.io/github/last-commit/keith/swift.vim)](https://github.com/keith/swift.vim) - Vim runtime files.
* [vim-polyglot ![GitHub Repo Stars](https://img.shields.io/github/stars/sheerun/vim-polyglot) ![GitHub last commit](https://img.shields.io/github/last-commit/sheerun/vim-polyglot)](https://github.com/sheerun/vim-polyglot) - Language pack for vim that includes vim-swift.

## Benchmark

* [xcprofiler ![GitHub Repo Stars](https://img.shields.io/github/stars/giginet/xcprofiler) ![GitHub last commit](https://img.shields.io/github/last-commit/giginet/xcprofiler)](https://github.com/giginet/xcprofiler) - Command line utility to profile compilation time.

## Converters

* [Swiftify](https://swiftify.com/#/converter/code/) - Objective-C to Swift online code converter and Xcode extension.
* [Zolang ![GitHub Repo Stars](https://img.shields.io/github/stars/Zolang/Zolang) ![GitHub last commit](https://img.shields.io/github/last-commit/Zolang/Zolang)](https://github.com/Zolang/Zolang) :penguin: - A DSL for generating code in multiple programming languages.

## Other Awesome Lists
*Check out apps on these projects:* 
* [Awesome iOS Interview ![GitHub Repo Stars](https://img.shields.io/github/stars/dashvlas/awesome-ios-interview) ![GitHub last commit](https://img.shields.io/github/last-commit/dashvlas/awesome-ios-interview)](https://github.com/dashvlas/awesome-ios-interview) - List of the questions that helps you to prepare for the interview.
* [awesome-macOS ![GitHub Repo Stars](https://img.shields.io/github/stars/iCHAIT/awesome-macOS) ![GitHub last commit](https://img.shields.io/github/last-commit/iCHAIT/awesome-macOS)](https://github.com/iCHAIT/awesome-macOS) - A curated list of awesome applications, softwares, tools and shiny things for macOS.
* [example-ios-apps ![GitHub Repo Stars](https://img.shields.io/github/stars/jogendra/example-ios-apps) ![GitHub last commit](https://img.shields.io/github/last-commit/jogendra/example-ios-apps)](https://github.com/jogendra/example-ios-apps) - An amazing list for people who are beginners and learning ios development and for ios developers who need any example app or feature.
* [open-source-ios-apps ![GitHub Repo Stars](https://img.shields.io/github/stars/dkhamsing/open-source-ios-apps) ![GitHub last commit](https://img.shields.io/github/last-commit/dkhamsing/open-source-ios-apps)](https://github.com/dkhamsing/open-source-ios-apps) - A collaborative list of open-source iOS Apps.
* [open-source-mac-os-apps ![GitHub Repo Stars](https://img.shields.io/github/stars/serhii-londar/open-source-mac-os-apps) ![GitHub last commit](https://img.shields.io/github/last-commit/serhii-londar/open-source-mac-os-apps)](https://github.com/serhii-londar/open-source-mac-os-apps) - Awesome list of open source applications for macOS.

## Dependency Managers
*Dependency manager software for Swift.* 
* [Accio ![GitHub Repo Stars](https://img.shields.io/github/stars/JamitLabs/Accio) ![GitHub last commit](https://img.shields.io/github/last-commit/JamitLabs/Accio)](https://github.com/JamitLabs/Accio) - A SwiftPM based dependency manager for iOS & Co. with improvements over Carthage.
* [Carthage ![GitHub Repo Stars](https://img.shields.io/github/stars/Carthage/Carthage) ![GitHub last commit](https://img.shields.io/github/last-commit/Carthage/Carthage)](https://github.com/Carthage/Carthage) - A new dependency manager.
* [CocoaPods ![GitHub Repo Stars](https://img.shields.io/github/stars/CocoaPods/CocoaPods) ![GitHub last commit](https://img.shields.io/github/last-commit/CocoaPods/CocoaPods)](https://github.com/CocoaPods/CocoaPods) - The most used dependency manager.
* [Mint ![GitHub Repo Stars](https://img.shields.io/github/stars/yonaskolb/Mint) ![GitHub last commit](https://img.shields.io/github/last-commit/yonaskolb/Mint)](https://github.com/yonaskolb/Mint) - A package manager that installs and runs Swift command line tools.
* [swift-package-manager ![GitHub Repo Stars](https://img.shields.io/github/stars/apple/swift-package-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/apple/swift-package-manager)](https://github.com/apple/swift-package-manager) - SPM is the Package Manager for the Swift Programming Language.

## Patterns

* [App Architecture ![GitHub Repo Stars](https://img.shields.io/github/stars/objcio/app-architecture) ![GitHub last commit](https://img.shields.io/github/last-commit/objcio/app-architecture)](https://github.com/objcio/app-architecture) - A sample Code of the App Architecture Book.
* [CleanArchitectureRxSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/sergdort/CleanArchitectureRxSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/sergdort/CleanArchitectureRxSwift)](https://github.com/sergdort/CleanArchitectureRxSwift) - Example of Clean Architecture of iOS app using RxSwift.
* [Design-Patterns-In-Swift ![GitHub Repo Stars](https://img.shields.io/github/stars/ochococo/Design-Patterns-In-Swift) ![GitHub last commit](https://img.shields.io/github/last-commit/ochococo/Design-Patterns-In-Swift)](https://github.com/ochococo/Design-Patterns-In-Swift) - Design Patterns.
* [GoodReactor ![GitHub Repo Stars](https://img.shields.io/github/stars/GoodRequest/GoodReactor) ![GitHub last commit](https://img.shields.io/github/last-commit/GoodRequest/GoodReactor)](https://github.com/GoodRequest/GoodReactor) - ⚛️ GoodReactor is a Redux-inspired Reactor framework for communication between the View Model, View Controller, and Coordinator.
* [Reactant ![GitHub Repo Stars](https://img.shields.io/github/stars/Brightify/Reactant) ![GitHub last commit](https://img.shields.io/github/last-commit/Brightify/Reactant)](https://github.com/Brightify/Reactant) - Reactant is a reactive architecture for iOS.
* [ReduxUI ![GitHub Repo Stars](https://img.shields.io/github/stars/gre4ixin/ReduxUI) ![GitHub last commit](https://img.shields.io/github/last-commit/gre4ixin/ReduxUI)](https://github.com/gre4ixin/ReduxUI) - Redux framework for easy use with SwiftUI.
* [Spin ![GitHub Repo Stars](https://img.shields.io/github/stars/Spinners/Spin.Swift) ![GitHub last commit](https://img.shields.io/github/last-commit/Spinners/Spin.Swift)](https://github.com/Spinners/Spin.Swift) - Provides a versatile Feedback Loop implementation working with RxSwift, ReactiveSwift and Combine.
* [StateViewController ![GitHub Repo Stars](https://img.shields.io/github/stars/davidask/StateViewController) ![GitHub last commit](https://img.shields.io/github/last-commit/davidask/StateViewController)](https://github.com/davidask/StateViewController) - Stateful UIVIewController composition — the MVC cure for Massive View Controllers.
* [SwiftUI Atom Properties ![GitHub Repo Stars](https://img.shields.io/github/stars/ra1028/swiftui-atom-properties) ![GitHub last commit](https://img.shields.io/github/last-commit/ra1028/swiftui-atom-properties)](https://github.com/ra1028/swiftui-atom-properties) - A Reactive Data-Binding and Dependency Injection Library for SwiftUI x Concurrency.
* [The Composable Architecture ![GitHub Repo Stars](https://img.shields.io/github/stars/pointfreeco/swift-composable-architecture) ![GitHub last commit](https://img.shields.io/github/last-commit/pointfreeco/swift-composable-architecture)](https://github.com/pointfreeco/swift-composable-architecture) - A library for building applications in a consistent and understandable way, with composition, testing, and ergonomics in mind.
* [Viperit ![GitHub Repo Stars](https://img.shields.io/github/stars/ferranabello/Viperit) ![GitHub last commit](https://img.shields.io/github/last-commit/ferranabello/Viperit)](https://github.com/ferranabello/Viperit) - Viper Framework for iOS.

## Misc
*Miscellaneous Swift related projects* 
* [Beak ![GitHub Repo Stars](https://img.shields.io/github/stars/yonaskolb/Beak) ![GitHub last commit](https://img.shields.io/github/last-commit/yonaskolb/Beak)](https://github.com/yonaskolb/Beak) - A command line interface for your Swift scripts.
* [BetterCodable ![GitHub Repo Stars](https://img.shields.io/github/stars/marksands/BetterCodable) ![GitHub last commit](https://img.shields.io/github/last-commit/marksands/BetterCodable)](https://github.com/marksands/BetterCodable) - Level up your `Codable` structs through property wrappers. The goal of these property wrappers is to avoid implementing a custom `init(from decoder: Decoder)` throws and suffer through boilerplate.
* [CodableWrappers ![GitHub Repo Stars](https://img.shields.io/github/stars/GottaGetSwifty/CodableWrappers) ![GitHub last commit](https://img.shields.io/github/last-commit/GottaGetSwifty/CodableWrappers)](https://github.com/GottaGetSwifty/CodableWrappers) - A Collection of PropertyWrappers to make custom Serialization of Codable Types easy.
* [Fugen ![GitHub Repo Stars](https://img.shields.io/github/stars/almazrafi/Fugen) ![GitHub last commit](https://img.shields.io/github/last-commit/almazrafi/Fugen)](https://github.com/almazrafi/Fugen) - A command line tool for exporting resources and generating code from your Figma files.
* [Model2App ![GitHub Repo Stars](https://img.shields.io/github/stars/Q-Mobile/Model2App) ![GitHub last commit](https://img.shields.io/github/last-commit/Q-Mobile/Model2App)](https://github.com/Q-Mobile/Model2App) - Turn your data model into a working CRUD app.
* [Surmagic ![GitHub Repo Stars](https://img.shields.io/github/stars/gurhub/surmagic) ![GitHub last commit](https://img.shields.io/github/last-commit/gurhub/surmagic)](https://github.com/gurhub/surmagic) - Create XCFrameworks with ease! A Command Line Tool to create XCFramework for multiple platforms at one shot! iOS, Mac Catalyst, tvOS, macOS, and watchOS.
* [SwagGen ![GitHub Repo Stars](https://img.shields.io/github/stars/yonaskolb/SwagGen) ![GitHub last commit](https://img.shields.io/github/last-commit/yonaskolb/SwagGen)](https://github.com/yonaskolb/SwagGen) :penguin: - A command line tool for generating a REST API from a Swagger spec based off Stencil templates.
* [Swiftbrew ![GitHub Repo Stars](https://img.shields.io/github/stars/swiftbrew/Swiftbrew) ![GitHub last commit](https://img.shields.io/github/last-commit/swiftbrew/Swiftbrew)](https://github.com/swiftbrew/Swiftbrew) - Homebrew for Swift packages.
* [SwiftGen ![GitHub Repo Stars](https://img.shields.io/github/stars/SwiftGen/SwiftGen) ![GitHub last commit](https://img.shields.io/github/last-commit/SwiftGen/SwiftGen)](https://github.com/SwiftGen/SwiftGen) - A suite of tools to auto-generate code for various assets of your project.
* [SwiftKit ![GitHub Repo Stars](https://img.shields.io/github/stars/SvenTiigi/SwiftKit) ![GitHub last commit](https://img.shields.io/github/last-commit/SvenTiigi/SwiftKit)](https://github.com/SvenTiigi/SwiftKit) - Start your next Open-Source Swift Framework 📦.
* [SwiftPlate ![GitHub Repo Stars](https://img.shields.io/github/stars/JohnSundell/SwiftPlate) ![GitHub last commit](https://img.shields.io/github/last-commit/JohnSundell/SwiftPlate)](https://github.com/JohnSundell/SwiftPlate) - Easily generate cross platform framework projects from the command line.
* [Toybox ![GitHub Repo Stars](https://img.shields.io/github/stars/giginet/Toybox) ![GitHub last commit](https://img.shields.io/github/last-commit/giginet/Toybox)](https://github.com/giginet/Toybox) - Xcode Playground management made easy.
* [Tuist ![GitHub Repo Stars](https://img.shields.io/github/stars/tuist/tuist) ![GitHub last commit](https://img.shields.io/github/last-commit/tuist/tuist)](https://github.com/tuist/tuist) - An open source command line tool to create, maintain and interact with your Xcode projects at scale.
* [xc ![GitHub Repo Stars](https://img.shields.io/github/stars/s2mr/xc) ![GitHub last commit](https://img.shields.io/github/last-commit/s2mr/xc)](https://github.com/s2mr/xc) - A tool to open the Xcode project file by the specified version.
* [xcbeautify ![GitHub Repo Stars](https://img.shields.io/github/stars/tuist/xcbeautify) ![GitHub last commit](https://img.shields.io/github/last-commit/tuist/xcbeautify)](https://github.com/tuist/xcbeautify) - Little beautifier tool for xcodebuild.
* [XcodeGen ![GitHub Repo Stars](https://img.shields.io/github/stars/yonaskolb/XcodeGen) ![GitHub last commit](https://img.shields.io/github/last-commit/yonaskolb/XcodeGen)](https://github.com/yonaskolb/XcodeGen) - Tool for generating Xcode projects from a YAML file and your project directory.
* [xcodeproj ![GitHub Repo Stars](https://img.shields.io/github/stars/tuist/xcodeproj) ![GitHub last commit](https://img.shields.io/github/last-commit/tuist/xcodeproj)](https://github.com/tuist/xcodeproj) - A library to read, update and write Xcode projects and workspaces.

## Libs
*Here you can find a list of snippets and libs for your Swift projects.* 

### Accessibility
[back to top](#readme) 

* [Capable ![GitHub Repo Stars](https://img.shields.io/github/stars/chrs1885/Capable) ![GitHub last commit](https://img.shields.io/github/last-commit/chrs1885/Capable)](https://github.com/chrs1885/Capable) - Keep track of accessibility settings, leverage high contrast colors, and use scalable fonts to enable users with disabilities to use your app.

### AI
*Libs for AI based projects (Machine Learning, Neural Networks etc).* [back to top](#readme) 

* [CoreML-Models ![GitHub Repo Stars](https://img.shields.io/github/stars/likedan/Awesome-CoreML-Models) ![GitHub last commit](https://img.shields.io/github/last-commit/likedan/Awesome-CoreML-Models)](https://github.com/likedan/Awesome-CoreML-Models) - A collection of unique Core ML Models.
* [DL4S ![GitHub Repo Stars](https://img.shields.io/github/stars/palle-k/DL4S) ![GitHub last commit](https://img.shields.io/github/last-commit/palle-k/DL4S)](https://github.com/palle-k/DL4S) - Automatic differentiation, fast tensor operations and dynamic neural networks from CNNs and RNNs to transformers.
* [OpenAI ![GitHub Repo Stars](https://img.shields.io/github/stars/MacPaw/OpenAI) ![GitHub last commit](https://img.shields.io/github/last-commit/MacPaw/OpenAI)](https://github.com/MacPaw/OpenAI) - Swift package for OpenAI public API.

### Algorithm
[back to top](#readme) 

* [Algorithm ![GitHub Repo Stars](https://img.shields.io/github/stars/CosmicMind/Algorithm) ![GitHub last commit](https://img.shields.io/github/last-commit/CosmicMind/Algorithm)](https://github.com/CosmicMind/Algorithm) - A toolset for writing algorithms and probability models.
* [BTree ![GitHub Repo Stars](https://img.shields.io/github/stars/attaswift/BTree) ![GitHub last commit](https://img.shields.io/github/last-commit/attaswift/BTree)](https://github.com/attaswift/BTree) - Fast sorted collections for Swift using in-memory B-trees.
* [swift-algorithm-club ![GitHub Repo Stars](https://img.shields.io/github/stars/kodecocodes/swift-algorithm-club) ![GitHub last commit](https://img.shields.io/github/last-commit/kodecocodes/swift-algorithm-club)](https://github.com/kodecocodes/swift-algorithm-club) - Algorithms and data structures, with explanations.
* [SwiftLCS ![GitHub Repo Stars](https://img.shields.io/github/stars/Frugghi/SwiftLCS) ![GitHub last commit](https://img.shields.io/github/last-commit/Frugghi/SwiftLCS)](https://github.com/Frugghi/SwiftLCS) :penguin: - implementation of the longest common subsequence (LCS) algorithm.

### Analytics
*Analytics related libraries to easily track your app usage* [back to top](#readme) 

* [Tracker Aggregator ![GitHub Repo Stars](https://img.shields.io/github/stars/kafejo/Tracker-Aggregator) ![GitHub last commit](https://img.shields.io/github/last-commit/kafejo/Tracker-Aggregator)](https://github.com/kafejo/Tracker-Aggregator) - Versatile analytics abstraction layer.
* [Umbrella ![GitHub Repo Stars](https://img.shields.io/github/stars/devxoul/Umbrella) ![GitHub last commit](https://img.shields.io/github/last-commit/devxoul/Umbrella)](https://github.com/devxoul/Umbrella) - Analytics abstraction layer.

### Animation
*Libs to help with animation* [back to top](#readme) 

* [Advance ![GitHub Repo Stars](https://img.shields.io/github/stars/timdonnelly/Advance) ![GitHub last commit](https://img.shields.io/github/last-commit/timdonnelly/Advance)](https://github.com/timdonnelly/Advance) - A powerful animation framework for iOS, tvOS, and OS X.
* [ChainPageCollectionView ![GitHub Repo Stars](https://img.shields.io/github/stars/jindulys/ChainPageCollectionView) ![GitHub last commit](https://img.shields.io/github/last-commit/jindulys/ChainPageCollectionView)](https://github.com/jindulys/ChainPageCollectionView) - Fancy two-level collection view layout and animation.
* [CocoaSprings ![GitHub Repo Stars](https://img.shields.io/github/stars/MacPaw/CocoaSprings) ![GitHub last commit](https://img.shields.io/github/last-commit/MacPaw/CocoaSprings)](https://github.com/MacPaw/CocoaSprings) - Interactive spring animations for iOS/macOS.
* [Comets ![GitHub Repo Stars](https://img.shields.io/github/stars/cruisediary/Comets) ![GitHub last commit](https://img.shields.io/github/last-commit/cruisediary/Comets)](https://github.com/cruisediary/Comets) - Animating Particles.
* [Ease ![GitHub Repo Stars](https://img.shields.io/github/stars/roberthein/Ease) ![GitHub last commit](https://img.shields.io/github/last-commit/roberthein/Ease)](https://github.com/roberthein/Ease) - Animate everything with Ease.
* [EasyAnimation ![GitHub Repo Stars](https://img.shields.io/github/stars/icanzilb/EasyAnimation) ![GitHub last commit](https://img.shields.io/github/last-commit/icanzilb/EasyAnimation)](https://github.com/icanzilb/EasyAnimation) - A library to take the power of UIView.animateWithDuration(_:, animations:...) to a whole new level.
* [Elephant ![GitHub Repo Stars](https://img.shields.io/github/stars/s2mr/Elephant) ![GitHub last commit](https://img.shields.io/github/last-commit/s2mr/Elephant)](https://github.com/s2mr/Elephant) - Elegant SVG animation kit.
* [FlightAnimator ![GitHub Repo Stars](https://img.shields.io/github/stars/AntonTheDev/FlightAnimator) ![GitHub last commit](https://img.shields.io/github/last-commit/AntonTheDev/FlightAnimator)](https://github.com/AntonTheDev/FlightAnimator) - Natural Blocks Based Core Animation Framework.
* [Gemini ![GitHub Repo Stars](https://img.shields.io/github/stars/shoheiyokoyama/Gemini) ![GitHub last commit](https://img.shields.io/github/last-commit/shoheiyokoyama/Gemini)](https://github.com/shoheiyokoyama/Gemini) - Gemini is rich scroll based animation framework.
* [IBAnimatable ![GitHub Repo Stars](https://img.shields.io/github/stars/IBAnimatable/IBAnimatable) ![GitHub last commit](https://img.shields.io/github/last-commit/IBAnimatable/IBAnimatable)](https://github.com/IBAnimatable/IBAnimatable) - Design and prototype UI, interaction, navigation, transition and animation for App Store ready Apps in Interface Builder with IBAnimatable.
* [Interpolate ![GitHub Repo Stars](https://img.shields.io/github/stars/marmelroy/Interpolate) ![GitHub last commit](https://img.shields.io/github/last-commit/marmelroy/Interpolate)](https://github.com/marmelroy/Interpolate) - Interpolation framework for creating interactive gesture-driven animations.
* [lottie-ios ![GitHub Repo Stars](https://img.shields.io/github/stars/airbnb/lottie-ios) ![GitHub last commit](https://img.shields.io/github/last-commit/airbnb/lottie-ios)](https://github.com/airbnb/lottie-ios) - An iOS library to natively render After Effects vector animations.
* [Pastel ![GitHub Repo Stars](https://img.shields.io/github/stars/cruisediary/Pastel) ![GitHub last commit](https://img.shields.io/github/last-commit/cruisediary/Pastel)](https://github.com/cruisediary/Pastel) - Gradient animation effect like Instagram.
* [Poi ![GitHub Repo Stars](https://img.shields.io/github/stars/HideakiTouhara/Poi) ![GitHub last commit](https://img.shields.io/github/last-commit/HideakiTouhara/Poi)](https://github.com/HideakiTouhara/Poi) - Poi makes you use card UI like tinder UI .You can use it like tableview method.
* [Presentation ![GitHub Repo Stars](https://img.shields.io/github/stars/hyperoslo/Presentation) ![GitHub last commit](https://img.shields.io/github/last-commit/hyperoslo/Presentation)](https://github.com/hyperoslo/Presentation) - A library to help you to make tutorials, release notes and animated pages.
* [Pulsator ![GitHub Repo Stars](https://img.shields.io/github/stars/shu223/pulsator) ![GitHub last commit](https://img.shields.io/github/last-commit/shu223/pulsator)](https://github.com/shu223/pulsator) - Pulse animation for iOS.
* [Sica ![GitHub Repo Stars](https://img.shields.io/github/stars/cats-oss/Sica) ![GitHub last commit](https://img.shields.io/github/last-commit/cats-oss/Sica)](https://github.com/cats-oss/Sica) - Simple Interface Core Animation. Run type-safe animation sequencially or parallelly.
* [Spring ![GitHub Repo Stars](https://img.shields.io/github/stars/MengTo/Spring) ![GitHub last commit](https://img.shields.io/github/last-commit/MengTo/Spring)](https://github.com/MengTo/Spring) - A library to simplify iOS animations.
* [SpriteKitEasingSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/craiggrummitt/SpriteKitEasingSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/craiggrummitt/SpriteKitEasingSwift)](https://github.com/craiggrummitt/SpriteKitEasingSwift) - Better Easing for SpriteKit.
* [spruce-ios ![GitHub Repo Stars](https://img.shields.io/github/stars/willowtreeapps/spruce-ios) ![GitHub last commit](https://img.shields.io/github/last-commit/willowtreeapps/spruce-ios)](https://github.com/willowtreeapps/spruce-ios) - Choreograph animations on the screen.
* [Stellar ![GitHub Repo Stars](https://img.shields.io/github/stars/AugustRush/Stellar) ![GitHub last commit](https://img.shields.io/github/last-commit/AugustRush/Stellar)](https://github.com/AugustRush/Stellar) - A Physical animation library.
* [TheAnimation ![GitHub Repo Stars](https://img.shields.io/github/stars/marty-suzuki/TheAnimation) ![GitHub last commit](https://img.shields.io/github/last-commit/marty-suzuki/TheAnimation)](https://github.com/marty-suzuki/TheAnimation) - Type-safe CAAnimation wrapper. It makes preventing to set wrong type values.
* [ViewAnimator ![GitHub Repo Stars](https://img.shields.io/github/stars/marcosgriselli/ViewAnimator) ![GitHub last commit](https://img.shields.io/github/last-commit/marcosgriselli/ViewAnimator)](https://github.com/marcosgriselli/ViewAnimator) - Brings your UI to life with just one line.
* [YapAnimator ![GitHub Repo Stars](https://img.shields.io/github/stars/yapstudios/YapAnimator) ![GitHub last commit](https://img.shields.io/github/last-commit/yapstudios/YapAnimator)](https://github.com/yapstudios/YapAnimator) - Your fast and friendly physics-based animation system.

### API
*Quick libs to get access to third party API services* [back to top](#readme) 

* [GitHubAPI ![GitHub Repo Stars](https://img.shields.io/github/stars/serhii-londar/GithubAPI) ![GitHub last commit](https://img.shields.io/github/last-commit/serhii-londar/GithubAPI)](https://github.com/serhii-londar/GithubAPI) - Implementation of GitHub REST API v3.
* [PXGoogleDirections ![GitHub Repo Stars](https://img.shields.io/github/stars/poulpix/PXGoogleDirections) ![GitHub last commit](https://img.shields.io/github/last-commit/poulpix/PXGoogleDirections)](https://github.com/poulpix/PXGoogleDirections) - Google Directions API helper.
* [RandomUserSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/dingwilson/RandomUserSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/dingwilson/RandomUserSwift)](https://github.com/dingwilson/RandomUserSwift) - Framework to Generate Random Users - An Unofficial SDK for randomuser.me.
* [reddift ![GitHub Repo Stars](https://img.shields.io/github/stars/sonsongithub/reddift) ![GitHub last commit](https://img.shields.io/github/last-commit/sonsongithub/reddift)](https://github.com/sonsongithub/reddift) - reddit API wrapper.
* [Swifter Twitter ![GitHub Repo Stars](https://img.shields.io/github/stars/mattdonnelly/Swifter) ![GitHub last commit](https://img.shields.io/github/last-commit/mattdonnelly/Swifter)](https://github.com/mattdonnelly/Swifter) - Twitter framework.
* [Swiftkube ![GitHub Repo Stars](https://img.shields.io/github/stars/swiftkube/client) ![GitHub last commit](https://img.shields.io/github/last-commit/swiftkube/client)](https://github.com/swiftkube/client) :penguin: - Swift client for Kubernetes.
* [SwiftlySalesforce ![GitHub Repo Stars](https://img.shields.io/github/stars/mike4aday/SwiftlySalesforce) ![GitHub last commit](https://img.shields.io/github/last-commit/mike4aday/SwiftlySalesforce)](https://github.com/mike4aday/SwiftlySalesforce) - Framework for rapid development of native iOS apps that integrate with Salesforce.
* [SwiftyInsta ![GitHub Repo Stars](https://img.shields.io/github/stars/TheM4hd1/SwiftyInsta) ![GitHub last commit](https://img.shields.io/github/last-commit/TheM4hd1/SwiftyInsta)](https://github.com/TheM4hd1/SwiftyInsta) - Private and Tokenless Instagram RESTful API.

### App Routing
*Internal app routing systems.* [back to top](#readme) 

* [Appz ![GitHub Repo Stars](https://img.shields.io/github/stars/SwiftKitz/Appz) ![GitHub last commit](https://img.shields.io/github/last-commit/SwiftKitz/Appz)](https://github.com/SwiftKitz/Appz) - Launch external apps and deeplink with ease.
* [Crossroad ![GitHub Repo Stars](https://img.shields.io/github/stars/giginet/Crossroad) ![GitHub last commit](https://img.shields.io/github/last-commit/giginet/Crossroad)](https://github.com/giginet/Crossroad) - :oncoming_bus: Crossroad is an URL router focused on handling Custom URL Schemes.
* [LightRoute ![GitHub Repo Stars](https://img.shields.io/github/stars/SpectralDragon/LiteRoute) ![GitHub last commit](https://img.shields.io/github/last-commit/SpectralDragon/LiteRoute)](https://github.com/SpectralDragon/LiteRoute) - Routing between VIPER modules.
* [Linker ![GitHub Repo Stars](https://img.shields.io/github/stars/MaksimKurpa/Linker) ![GitHub last commit](https://img.shields.io/github/last-commit/MaksimKurpa/Linker)](https://github.com/MaksimKurpa/Linker) - Lightweight way to handle internal and external deeplinks for iOS.
* [MonarchRouter ![GitHub Repo Stars](https://img.shields.io/github/stars/nikans/MonarchRouter) ![GitHub last commit](https://img.shields.io/github/last-commit/nikans/MonarchRouter)](https://github.com/nikans/MonarchRouter) - Declarative state- and URL-based router. Complex automatic View Controllers hierarchy transitions. Time-tested server-side conventions.
* [RxFlow ![GitHub Repo Stars](https://img.shields.io/github/stars/RxSwiftCommunity/RxFlow) ![GitHub last commit](https://img.shields.io/github/last-commit/RxSwiftCommunity/RxFlow)](https://github.com/RxSwiftCommunity/RxFlow) - RxFlow is a navigation framework for iOS applications based on a Reactive Flow Coordinator pattern.
* [SwiftCurrent ![GitHub Repo Stars](https://img.shields.io/github/stars/wwt/SwiftCurrent) ![GitHub last commit](https://img.shields.io/github/last-commit/wwt/SwiftCurrent)](https://github.com/wwt/SwiftCurrent) - Manage complex workflows wherever Swift can be built. It comes with built-in support for UIKit, Storyboards, and SwiftUI.
* [SwiftRouter ![GitHub Repo Stars](https://img.shields.io/github/stars/skyline75489/SwiftRouter) ![GitHub last commit](https://img.shields.io/github/last-commit/skyline75489/SwiftRouter)](https://github.com/skyline75489/SwiftRouter) - A URL Router for iOS.
* [URLNavigator ![GitHub Repo Stars](https://img.shields.io/github/stars/devxoul/URLNavigator) ![GitHub last commit](https://img.shields.io/github/last-commit/devxoul/URLNavigator)](https://github.com/devxoul/URLNavigator) - Elegant URL Routing.

### App Store
*Libs to help with apple app store, in app purchases and receipt validation.* [back to top](#readme) 

* [Apphud ![GitHub Repo Stars](https://img.shields.io/github/stars/apphud/ApphudSDK) ![GitHub last commit](https://img.shields.io/github/last-commit/apphud/ApphudSDK)](https://github.com/apphud/ApphudSDK) - Lightweight library to easily handle auto-renewable subscriptions with no backend required.
* [AppReview ![GitHub Repo Stars](https://img.shields.io/github/stars/mezhevikin/AppReview) ![GitHub last commit](https://img.shields.io/github/last-commit/mezhevikin/AppReview)](https://github.com/mezhevikin/AppReview) - A tiny library to request review on the AppStore via SKStoreReviewController.
* [InAppPurchase ![GitHub Repo Stars](https://img.shields.io/github/stars/jinSasaki/InAppPurchase) ![GitHub last commit](https://img.shields.io/github/last-commit/jinSasaki/InAppPurchase)](https://github.com/jinSasaki/InAppPurchase) - A Simple, Lightweight and Safe framework for In App Purchase.
* [merchantkit ![GitHub Repo Stars](https://img.shields.io/github/stars/benjaminmayo/merchantkit) ![GitHub last commit](https://img.shields.io/github/last-commit/benjaminmayo/merchantkit)](https://github.com/benjaminmayo/merchantkit) - A modern In-App Purchases management framework for iOS.
* [SwiftyStoreKit ![GitHub Repo Stars](https://img.shields.io/github/stars/bizz84/SwiftyStoreKit) ![GitHub last commit](https://img.shields.io/github/last-commit/bizz84/SwiftyStoreKit)](https://github.com/bizz84/SwiftyStoreKit) - Lightweight In App Purchases framework.

### Audio
*Libs to work with audio* [back to top](#readme) 

* [AudioKit ![GitHub Repo Stars](https://img.shields.io/github/stars/audiokit/AudioKit) ![GitHub last commit](https://img.shields.io/github/last-commit/audiokit/AudioKit)](https://github.com/audiokit/AudioKit) - Powerful audio synthesis, processing and analysis, without the steep learning curve.
* [AudioPlayer ![GitHub Repo Stars](https://img.shields.io/github/stars/delannoyk/AudioPlayer) ![GitHub last commit](https://img.shields.io/github/last-commit/delannoyk/AudioPlayer)](https://github.com/delannoyk/AudioPlayer) - A wrapper around AVPlayer with some cool features.
* [AudioPlayerSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/tbaranes/AudioPlayerSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/tbaranes/AudioPlayerSwift)](https://github.com/tbaranes/AudioPlayerSwift) - AudioPlayer is a simple class for playing audio (basic and advanced usage) in iOS, OS X and tvOS apps.
* [Beethoven ![GitHub Repo Stars](https://img.shields.io/github/stars/vadymmarkov/Beethoven) ![GitHub last commit](https://img.shields.io/github/last-commit/vadymmarkov/Beethoven)](https://github.com/vadymmarkov/Beethoven) - An audio processing library for pitch detection of musical signals.
* [FDSoundActivatedRecorder ![GitHub Repo Stars](https://img.shields.io/github/stars/fulldecent/FDSoundActivatedRecorder) ![GitHub last commit](https://img.shields.io/github/last-commit/fulldecent/FDSoundActivatedRecorder)](https://github.com/fulldecent/FDSoundActivatedRecorder) - Start recording when the user speaks.
* [FDWaveformView ![GitHub Repo Stars](https://img.shields.io/github/stars/fulldecent/FDWaveformView) ![GitHub last commit](https://img.shields.io/github/last-commit/fulldecent/FDWaveformView)](https://github.com/fulldecent/FDWaveformView) - An easy way to display an audio waveform in your app.
* [ModernAVPlayer ![GitHub Repo Stars](https://img.shields.io/github/stars/noreasonprojects/ModernAVPlayer) ![GitHub last commit](https://img.shields.io/github/last-commit/noreasonprojects/ModernAVPlayer)](https://github.com/noreasonprojects/ModernAVPlayer) - Persistence AVPlayer to resume playback after bad network connection even in background mode.
* [MusicKit ![GitHub Repo Stars](https://img.shields.io/github/stars/benzguo/MusicKit) ![GitHub last commit](https://img.shields.io/github/last-commit/benzguo/MusicKit)](https://github.com/benzguo/MusicKit) - A framework for composing and transforming music.
* [Soundable ![GitHub Repo Stars](https://img.shields.io/github/stars/ThXou/Soundable) ![GitHub last commit](https://img.shields.io/github/last-commit/ThXou/Soundable)](https://github.com/ThXou/Soundable) - Soundable allows you to play sounds, single and in sequence, in a very easy way.
* [SwiftAudioPlayer ![GitHub Repo Stars](https://img.shields.io/github/stars/tanhakabir/SwiftAudioPlayer) ![GitHub last commit](https://img.shields.io/github/last-commit/tanhakabir/SwiftAudioPlayer)](https://github.com/tanhakabir/SwiftAudioPlayer) - Simple audio player for iOS that streams and performs realtime audio manipulations with AVAudioEngine.
* [SwiftySound ![GitHub Repo Stars](https://img.shields.io/github/stars/adamcichy/SwiftySound) ![GitHub last commit](https://img.shields.io/github/last-commit/adamcichy/SwiftySound)](https://github.com/adamcichy/SwiftySound) - Simple library that lets you play sounds with a single line of code.
* [voice-overlay-ios ![GitHub Repo Stars](https://img.shields.io/github/stars/algolia/voice-overlay-ios) ![GitHub last commit](https://img.shields.io/github/last-commit/algolia/voice-overlay-ios)](https://github.com/algolia/voice-overlay-ios) - An overlay that gets your user’s voice permission and input as text in a customizable UI.

### Augmented Reality
[back to top](#readme) 

* [ARHeadsetKit ![GitHub Repo Stars](https://img.shields.io/github/stars/philipturner/ARHeadsetKit) ![GitHub last commit](https://img.shields.io/github/last-commit/philipturner/ARHeadsetKit)](https://github.com/philipturner/ARHeadsetKit) - High-level framework for using $5 Google Cardboard to replicate Microsoft Hololens.
* [ARKit-CoreLocation ![GitHub Repo Stars](https://img.shields.io/github/stars/ProjectDent/ARKit-CoreLocation) ![GitHub last commit](https://img.shields.io/github/last-commit/ProjectDent/ARKit-CoreLocation)](https://github.com/ProjectDent/ARKit-CoreLocation) - Combines the high accuracy of AR with the scale of GPS data.
* [ARKit-Navigation ![GitHub Repo Stars](https://img.shields.io/github/stars/chriswebb09/ARKitNavigationDemo) ![GitHub last commit](https://img.shields.io/github/last-commit/chriswebb09/ARKitNavigationDemo)](https://github.com/chriswebb09/ARKitNavigationDemo) - Navigation in augmented reality with MapKit.
* [ARVideoKit ![GitHub Repo Stars](https://img.shields.io/github/stars/AFathi/ARVideoKit) ![GitHub last commit](https://img.shields.io/github/last-commit/AFathi/ARVideoKit)](https://github.com/AFathi/ARVideoKit) - Capture & record ARKit videos, photos, Live Photos, and GIFs.

### Authentication
*Easy way to manage auth in your apps.* [back to top](#readme) 

* [Cely ![GitHub Repo Stars](https://img.shields.io/github/stars/cely-tools/Cely) ![GitHub last commit](https://img.shields.io/github/last-commit/cely-tools/Cely)](https://github.com/cely-tools/Cely) - A Plug-n-Play login framework.
* [LinkedInSignIn ![GitHub Repo Stars](https://img.shields.io/github/stars/serhii-londar/LinkedInSignIn) ![GitHub last commit](https://img.shields.io/github/last-commit/serhii-londar/LinkedInSignIn)](https://github.com/serhii-londar/LinkedInSignIn) - Simple view controller to log in and retrieve an access token from LinkedIn.
* [LoginKit ![GitHub Repo Stars](https://img.shields.io/github/stars/IcaliaLabs/LoginKit) ![GitHub last commit](https://img.shields.io/github/last-commit/IcaliaLabs/LoginKit)](https://github.com/IcaliaLabs/LoginKit) - LoginKit is a quick and easy way to add a Login/Signup UX to your iOS app.
* [ReCaptcha ![GitHub Repo Stars](https://img.shields.io/github/stars/fjcaetano/ReCaptcha) ![GitHub last commit](https://img.shields.io/github/last-commit/fjcaetano/ReCaptcha)](https://github.com/fjcaetano/ReCaptcha) - [In]visible ReCaptcha for iOS.
* [SpotifyLogin ![GitHub Repo Stars](https://img.shields.io/github/stars/spotify/SpotifyLogin) ![GitHub last commit](https://img.shields.io/github/last-commit/spotify/SpotifyLogin)](https://github.com/spotify/SpotifyLogin) - Authenticate with the Spotify API.

### Bots
*Libs to build bot* [back to top](#readme) 

* [Telegram Bot SDK ![GitHub Repo Stars](https://img.shields.io/github/stars/rapierorg/telegram-bot-swift) ![GitHub last commit](https://img.shields.io/github/last-commit/rapierorg/telegram-bot-swift)](https://github.com/rapierorg/telegram-bot-swift) :penguin: - Unofficial SDK.
* [Telegrammer ![GitHub Repo Stars](https://img.shields.io/github/stars/givip/Telegrammer) ![GitHub last commit](https://img.shields.io/github/last-commit/givip/Telegrammer)](https://github.com/givip/Telegrammer) :penguin: - Open-source framework for Telegram Bots developers. It was built on top of Apple/SwiftNIO which help to demonstrate excellent performance.

### Cache
[back to top](#readme) 

* [AwesomeCache ![GitHub Repo Stars](https://img.shields.io/github/stars/aschuch/AwesomeCache) ![GitHub last commit](https://img.shields.io/github/last-commit/aschuch/AwesomeCache)](https://github.com/aschuch/AwesomeCache) - Manage cache easy.
* [Cache ![GitHub Repo Stars](https://img.shields.io/github/stars/hyperoslo/Cache) ![GitHub last commit](https://img.shields.io/github/last-commit/hyperoslo/Cache)](https://github.com/hyperoslo/Cache) - Nothing but Cache.
* [CachyKit ![GitHub Repo Stars](https://img.shields.io/github/stars/Sadmansamee/CachyKit) ![GitHub last commit](https://img.shields.io/github/last-commit/Sadmansamee/CachyKit)](https://github.com/Sadmansamee/CachyKit) - A Caching Library that can cache JSON, Image, Zip or AnyObject with expiry date/TTYL and force refresh.
* [Cachyr ![GitHub Repo Stars](https://img.shields.io/github/stars/nrkno/yr-cachyr) ![GitHub last commit](https://img.shields.io/github/last-commit/nrkno/yr-cachyr)](https://github.com/nrkno/yr-cachyr) - A small key-value data cache for iOS, macOS and tvOS.
* [Carlos ![GitHub Repo Stars](https://img.shields.io/github/stars/spring-media/Carlos) ![GitHub last commit](https://img.shields.io/github/last-commit/spring-media/Carlos)](https://github.com/spring-media/Carlos) - A simple but flexible cache.
* [EVURLCache ![GitHub Repo Stars](https://img.shields.io/github/stars/evermeer/EVURLCache) ![GitHub last commit](https://img.shields.io/github/last-commit/evermeer/EVURLCache)](https://github.com/evermeer/EVURLCache) - If you want to make your app still works when it's offline.
* [MemoryCache ![GitHub Repo Stars](https://img.shields.io/github/stars/yysskk/MemoryCache) ![GitHub last commit](https://img.shields.io/github/last-commit/yysskk/MemoryCache)](https://github.com/yysskk/MemoryCache) - Type-safe memory cache.

### Chart
[back to top](#readme) 

* [Charts ![GitHub Repo Stars](https://img.shields.io/github/stars/danielgindi/Charts) ![GitHub last commit](https://img.shields.io/github/last-commit/danielgindi/Charts)](https://github.com/danielgindi/Charts) - Beautiful charts for iOS/tvOS/OSX (port of MPAndroidChart).
* [ChartView ![GitHub Repo Stars](https://img.shields.io/github/stars/AppPear/ChartView) ![GitHub last commit](https://img.shields.io/github/last-commit/AppPear/ChartView)](https://github.com/AppPear/ChartView) - Swift package for displaying beautiful charts effortlessly
* [FLCharts ![GitHub Repo Stars](https://img.shields.io/github/stars/francescoleoni98/FLCharts) ![GitHub last commit](https://img.shields.io/github/last-commit/francescoleoni98/FLCharts)](https://github.com/francescoleoni98/FLCharts) - Easy to use and highly customizable charts library for iOS.
* [ScrollableGraphView ![GitHub Repo Stars](https://img.shields.io/github/stars/philackm/ScrollableGraphView) ![GitHub last commit](https://img.shields.io/github/last-commit/philackm/ScrollableGraphView)](https://github.com/philackm/ScrollableGraphView) - Adaptive scrollable graph view for iOS to visualise simple discrete datasets.
* [SwiftChart ![GitHub Repo Stars](https://img.shields.io/github/stars/gpbl/SwiftChart) ![GitHub last commit](https://img.shields.io/github/last-commit/gpbl/SwiftChart)](https://github.com/gpbl/SwiftChart) - A simple line and area charting library for iOS. Supports multiple series, partially filled series and touch events.
* [SwiftCharts ![GitHub Repo Stars](https://img.shields.io/github/stars/ivanschuetz/SwiftCharts) ![GitHub last commit](https://img.shields.io/github/last-commit/ivanschuetz/SwiftCharts)](https://github.com/ivanschuetz/SwiftCharts) - Highly customizable charts for iOS.
* [SwiftUICharts ![GitHub Repo Stars](https://img.shields.io/github/stars/willdale/SwiftUICharts) ![GitHub last commit](https://img.shields.io/github/last-commit/willdale/SwiftUICharts)](https://github.com/willdale/SwiftUICharts) - A charts / plotting library for SwiftUI. Works on macOS, iOS, watchOS, and tvOS and has accessibility and Localization features built in.
* [TKRadarChart ![GitHub Repo Stars](https://img.shields.io/github/stars/TBXark/TKRadarChart) ![GitHub last commit](https://img.shields.io/github/last-commit/TBXark/TKRadarChart)](https://github.com/TBXark/TKRadarChart) - A customizable radar chart.

### Chat
*Libs to get access to build chat app* [back to top](#readme) 

* [Chatto ![GitHub Repo Stars](https://img.shields.io/github/stars/badoo/Chatto) ![GitHub last commit](https://img.shields.io/github/last-commit/badoo/Chatto)](https://github.com/badoo/Chatto) - A lightweight framework to build chat applications.
* [InputBarAccessoryView ![GitHub Repo Stars](https://img.shields.io/github/stars/nathantannar4/InputBarAccessoryView) ![GitHub last commit](https://img.shields.io/github/last-commit/nathantannar4/InputBarAccessoryView)](https://github.com/nathantannar4/InputBarAccessoryView) - A simple and easily customizable InputAccessoryView for making powerful input bars with autocomplete and attachments.
* [MessageKit ![GitHub Repo Stars](https://img.shields.io/github/stars/MessageKit/MessageKit) ![GitHub last commit](https://img.shields.io/github/last-commit/MessageKit/MessageKit)](https://github.com/MessageKit/MessageKit) - A community-driven replacement for JSQMessagesViewController.
* [MessengerKit ![GitHub Repo Stars](https://img.shields.io/github/stars/steve228uk/MessengerKit) ![GitHub last commit](https://img.shields.io/github/last-commit/steve228uk/MessengerKit)](https://github.com/steve228uk/MessengerKit) - A UI framework for building messenger interfaces.
* [Real-time Chat with Firebase ![GitHub Repo Stars](https://img.shields.io/github/stars/instamobile/messenger-iOS-chat-swift-firestore) ![GitHub last commit](https://img.shields.io/github/last-commit/instamobile/messenger-iOS-chat-swift-firestore)](https://github.com/instamobile/messenger-iOS-chat-swift-firestore) - Functional real-time chat app with Firebase Firestore using MessageKit.

### Colors
*Interesting snippets related to color management and utility.* [back to top](#readme) 

* [ChromaColorPicker ![GitHub Repo Stars](https://img.shields.io/github/stars/joncardasis/ChromaColorPicker) ![GitHub last commit](https://img.shields.io/github/last-commit/joncardasis/ChromaColorPicker)](https://github.com/joncardasis/ChromaColorPicker) - An intuitive and fun iOS color picker.
* [ColorKit ![GitHub Repo Stars](https://img.shields.io/github/stars/Boris-Em/ColorKit) ![GitHub last commit](https://img.shields.io/github/last-commit/Boris-Em/ColorKit)](https://github.com/Boris-Em/ColorKit) - Advanced color manipulation for iOS.
* [DynamicColor ![GitHub Repo Stars](https://img.shields.io/github/stars/yannickl/DynamicColor) ![GitHub last commit](https://img.shields.io/github/last-commit/yannickl/DynamicColor)](https://github.com/yannickl/DynamicColor) - An extension to manipulate colors easily.
* [Gradients ![GitHub Repo Stars](https://img.shields.io/github/stars/Gradients/Gradients) ![GitHub last commit](https://img.shields.io/github/last-commit/Gradients/Gradients)](https://github.com/Gradients/Gradients) - A curated collection of splendid 180+ gradients.
* [Hue ![GitHub Repo Stars](https://img.shields.io/github/stars/zenangst/Hue) ![GitHub last commit](https://img.shields.io/github/last-commit/zenangst/Hue)](https://github.com/zenangst/Hue) - Hue is the all-in-one coloring utility that you'll ever need.
* [PrettyColors ![GitHub Repo Stars](https://img.shields.io/github/stars/jdhealy/PrettyColors) ![GitHub last commit](https://img.shields.io/github/last-commit/jdhealy/PrettyColors)](https://github.com/jdhealy/PrettyColors) - Styles and colors text in the Terminal with ANSI escape codes. Conforms to ECMA Standard 48.
* [SheetyColors ![GitHub Repo Stars](https://img.shields.io/github/stars/chrs1885/SheetyColors) ![GitHub last commit](https://img.shields.io/github/last-commit/chrs1885/SheetyColors)](https://github.com/chrs1885/SheetyColors) - An action sheet styled color picker for iOS.
* [SwiftGen-Colors ![GitHub Repo Stars](https://img.shields.io/github/stars/SwiftGen/SwiftGen) ![GitHub last commit](https://img.shields.io/github/last-commit/SwiftGen/SwiftGen)](https://github.com/SwiftGen/SwiftGen#uicolor) - A tool to auto-generate `enums` for your `UIColor` constants.
* [SwiftHEXColors ![GitHub Repo Stars](https://img.shields.io/github/stars/thii/SwiftHEXColors) ![GitHub last commit](https://img.shields.io/github/last-commit/thii/SwiftHEXColors)](https://github.com/thii/SwiftHEXColors) - HEX color handling as an extension for UIColor.
* [UIColor-Hex-Swift ![GitHub Repo Stars](https://img.shields.io/github/stars/yeahdongcn/UIColor-Hex-Swift) ![GitHub last commit](https://img.shields.io/github/last-commit/yeahdongcn/UIColor-Hex-Swift)](https://github.com/yeahdongcn/UIColor-Hex-Swift) - Hex to UIColor converter.
* [UIGradient ![GitHub Repo Stars](https://img.shields.io/github/stars/dqhieu/UIGradient) ![GitHub last commit](https://img.shields.io/github/last-commit/dqhieu/UIGradient)](https://github.com/dqhieu/UIGradient) - A simple and powerful library for using gradient layer, image, color.

### Command Line
*Create command line applications.* [back to top](#readme) 

* [Ashen ![GitHub Repo Stars](https://img.shields.io/github/stars/colinta/Ashen) ![GitHub last commit](https://img.shields.io/github/last-commit/colinta/Ashen)](https://github.com/colinta/Ashen) - A framework for writing terminal applications in Swift. Based on The Elm Architecture.
* [Commander ![GitHub Repo Stars](https://img.shields.io/github/stars/kylef/Commander) ![GitHub last commit](https://img.shields.io/github/last-commit/kylef/Commander)](https://github.com/kylef/Commander) :penguin: - Compose beautiful command line interfaces.
* [Guaka ![GitHub Repo Stars](https://img.shields.io/github/stars/nsomar/Guaka) ![GitHub last commit](https://img.shields.io/github/last-commit/nsomar/Guaka)](https://github.com/nsomar/Guaka) :penguin: - The smart and beautiful (POSIX compliant) command line framework.
* [LineNoise ![GitHub Repo Stars](https://img.shields.io/github/stars/andybest/linenoise-swift) ![GitHub last commit](https://img.shields.io/github/last-commit/andybest/linenoise-swift)](https://github.com/andybest/linenoise-swift) :penguin: - A zero-dependency replacement for readline.
* [nef ![GitHub Repo Stars](https://img.shields.io/github/stars/bow-swift/nef) ![GitHub last commit](https://img.shields.io/github/last-commit/bow-swift/nef)](https://github.com/bow-swift/nef) - A set of command line tools that lets you have compile time verification of your documentation written as Xcode Playground.
* [Progress.swift ![GitHub Repo Stars](https://img.shields.io/github/stars/jkandzi/Progress.swift) ![GitHub last commit](https://img.shields.io/github/last-commit/jkandzi/Progress.swift)](https://github.com/jkandzi/Progress.swift) :penguin: - Add beautiful progress bars to your command line.
* [Swift Argument Parser ![GitHub Repo Stars](https://img.shields.io/github/stars/apple/swift-argument-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/apple/swift-argument-parser)](https://github.com/apple/swift-argument-parser) - Straightforward, type-safe argument parsing for Swift.
* [SwiftCLI ![GitHub Repo Stars](https://img.shields.io/github/stars/jakeheis/SwiftCLI) ![GitHub last commit](https://img.shields.io/github/last-commit/jakeheis/SwiftCLI)](https://github.com/jakeheis/SwiftCLI) :penguin: - A powerful framework that can be used to develop a CLI.
* [Swiftline ![GitHub Repo Stars](https://img.shields.io/github/stars/nsomar/Swiftline) ![GitHub last commit](https://img.shields.io/github/last-commit/nsomar/Swiftline)](https://github.com/nsomar/Swiftline) - A set of tools to help you create command line applications.
* [SwiftShell ![GitHub Repo Stars](https://img.shields.io/github/stars/kareman/SwiftShell) ![GitHub last commit](https://img.shields.io/github/last-commit/kareman/SwiftShell)](https://github.com/kareman/SwiftShell) - A library for creating command-line applications and running shell commands.
* [SwiftyTextTable ![GitHub Repo Stars](https://img.shields.io/github/stars/scottrhoyt/SwiftyTextTable) ![GitHub last commit](https://img.shields.io/github/last-commit/scottrhoyt/SwiftyTextTable)](https://github.com/scottrhoyt/SwiftyTextTable) :penguin: - A lightweight library to generate text tables.

### Concurrency
*Easier ways to work with concurrency.* [back to top](#readme) 

* [async+ ![GitHub Repo Stars](https://img.shields.io/github/stars/async-plus/async-plus) ![GitHub last commit](https://img.shields.io/github/last-commit/async-plus/async-plus)](https://github.com/async-plus/async-plus) :penguin: - A chainable interface for Swift 5.5's async/await.
* [AsyncNinja ![GitHub Repo Stars](https://img.shields.io/github/stars/AsyncNinja/AsyncNinja) ![GitHub last commit](https://img.shields.io/github/last-commit/AsyncNinja/AsyncNinja)](https://github.com/AsyncNinja/AsyncNinja) - A complete set of concurrency and reactive programming primitives.
* [Futures ![GitHub Repo Stars](https://img.shields.io/github/stars/davidask/Futures) ![GitHub last commit](https://img.shields.io/github/last-commit/davidask/Futures)](https://github.com/davidask/Futures) :penguin: - Lightweight promises for iOS, macOS, tvOS, watchOS, and server-side.
* [GroupWork ![GitHub Repo Stars](https://img.shields.io/github/stars/quanvo87/GroupWork) ![GitHub last commit](https://img.shields.io/github/last-commit/quanvo87/GroupWork)](https://github.com/quanvo87/GroupWork) :penguin: - Easy concurrent, asynchronous tasks.
* [Hydra ![GitHub Repo Stars](https://img.shields.io/github/stars/malcommac/Hydra) ![GitHub last commit](https://img.shields.io/github/last-commit/malcommac/Hydra)](https://github.com/malcommac/Hydra) - Promises & Await - Write better async code.
* [Queuer ![GitHub Repo Stars](https://img.shields.io/github/stars/FabrizioBrancati/Queuer) ![GitHub last commit](https://img.shields.io/github/last-commit/FabrizioBrancati/Queuer)](https://github.com/FabrizioBrancati/Queuer) :penguin: - A queue manager, built on top of OperationQueue and Dispatch (aka GCD).
* [SwiftCoroutine ![GitHub Repo Stars](https://img.shields.io/github/stars/belozierov/SwiftCoroutine) ![GitHub last commit](https://img.shields.io/github/last-commit/belozierov/SwiftCoroutine)](https://github.com/belozierov/SwiftCoroutine) :penguin: - Coroutines for iOS, macOS and Linux.
* [Throttler ![GitHub Repo Stars](https://img.shields.io/github/stars/boraseoksoon/Throttler) ![GitHub last commit](https://img.shields.io/github/last-commit/boraseoksoon/Throttler)](https://github.com/boraseoksoon/Throttler) - Throttle massive number of asynchronous inputs in a single drop of one line API.
* [Venice ![GitHub Repo Stars](https://img.shields.io/github/stars/Zewo/Venice) ![GitHub last commit](https://img.shields.io/github/last-commit/Zewo/Venice)](https://github.com/Zewo/Venice) :penguin: - Communicating sequential processes (CSP), Linux ready.

### Currency
[back to top](#readme) 


### Data Management
[back to top](#readme) 


#### CBOR
*Concise Binary Object Representation.* [back to top](#readme) 

* [CBORCoding ![GitHub Repo Stars](https://img.shields.io/github/stars/SomeRandomiOSDev/CBORCoding) ![GitHub last commit](https://img.shields.io/github/last-commit/SomeRandomiOSDev/CBORCoding)](https://github.com/SomeRandomiOSDev/CBORCoding) :penguin: - Easy CBOR encoding and decoding for iOS, macOS, tvOS and watchOS.

#### Core Data
*No more pain with Core Data, here are some interesting libs to handle data management.* [back to top](#readme) 

* [AERecord ![GitHub Repo Stars](https://img.shields.io/github/stars/tadija/AERecord) ![GitHub last commit](https://img.shields.io/github/last-commit/tadija/AERecord)](https://github.com/tadija/AERecord) - Super awesome Core Data wrapper library for iOS.
* [CloudCore ![GitHub Repo Stars](https://img.shields.io/github/stars/deeje/CloudCore) ![GitHub last commit](https://img.shields.io/github/last-commit/deeje/CloudCore)](https://github.com/deeje/CloudCore/) - Robust CloudKit synchronization: offline editing, relationships, shared and public databases, and more.
* [CoreStore ![GitHub Repo Stars](https://img.shields.io/github/stars/JohnEstropia/CoreStore) ![GitHub last commit](https://img.shields.io/github/last-commit/JohnEstropia/CoreStore)](https://github.com/JohnEstropia/CoreStore) - simple and elegant way to handle Core Data.
* [DataKernel ![GitHub Repo Stars](https://img.shields.io/github/stars/mrdekk/DataKernel) ![GitHub last commit](https://img.shields.io/github/last-commit/mrdekk/DataKernel)](https://github.com/mrdekk/DataKernel) - DataKernel is a minimalistic wrapper around Core Data stack to ease persistence operations. No external dependencies.
* [Graph ![GitHub Repo Stars](https://img.shields.io/github/stars/CosmicMind/Graph) ![GitHub last commit](https://img.shields.io/github/last-commit/CosmicMind/Graph)](https://github.com/CosmicMind/Graph) - An elegant data-driven framework for Core Data.
* [JSQCoreDataKit ![GitHub Repo Stars](https://img.shields.io/github/stars/jessesquires/JSQCoreDataKit) ![GitHub last commit](https://img.shields.io/github/last-commit/jessesquires/JSQCoreDataKit)](https://github.com/jessesquires/JSQCoreDataKit) - A swifter Core Data stack.
* [JustPersist ![GitHub Repo Stars](https://img.shields.io/github/stars/justeat/JustPersist) ![GitHub last commit](https://img.shields.io/github/last-commit/justeat/JustPersist)](https://github.com/justeat/JustPersist) - Easiest and safest way to do persistence on iOS with Core Data support out of the box.
* [QueryKit ![GitHub Repo Stars](https://img.shields.io/github/stars/QueryKit/QueryKit) ![GitHub last commit](https://img.shields.io/github/last-commit/QueryKit/QueryKit)](https://github.com/QueryKit/QueryKit) - An easy way to play with Core Data filtering.
* [Skopelos ![GitHub Repo Stars](https://img.shields.io/github/stars/albertodebortoli/Skopelos) ![GitHub last commit](https://img.shields.io/github/last-commit/albertodebortoli/Skopelos)](https://github.com/albertodebortoli/Skopelos) - A minimalistic, thread safe, non-boilerplate and super easy to use version of Active Record on Core Data.
* [SugarRecord ![GitHub Repo Stars](https://img.shields.io/github/stars/modo-studio/SugarRecord) ![GitHub last commit](https://img.shields.io/github/last-commit/modo-studio/SugarRecord)](https://github.com/modo-studio/SugarRecord) - Helps with Core Data and Realm.

#### CSV
*Helpful libraries to parse from and serialize to comma-separated value representations.* [back to top](#readme) 

* [CodableCSV ![GitHub Repo Stars](https://img.shields.io/github/stars/dehesa/CodableCSV) ![GitHub last commit](https://img.shields.io/github/last-commit/dehesa/CodableCSV)](https://github.com/dehesa/CodableCSV) :penguin: - Read and write CSV files row-by-row or through Swift's Codable interface.
* [CSVParser ![GitHub Repo Stars](https://img.shields.io/github/stars/Nero5023/CSVParser) ![GitHub last commit](https://img.shields.io/github/last-commit/Nero5023/CSVParser)](https://github.com/Nero5023/CSVParser) :penguin: - Fast parser for CSV.

#### Firebase
[back to top](#readme) 

* [Ballcap ![GitHub Repo Stars](https://img.shields.io/github/stars/1amageek/Ballcap-iOS) ![GitHub last commit](https://img.shields.io/github/last-commit/1amageek/Ballcap-iOS)](https://github.com/1amageek/Ballcap-iOS) - Ballcap is a database schema design framework for Cloud Firestore.

#### GraphQL
[back to top](#readme) 

* [SociableWeaver ![GitHub Repo Stars](https://img.shields.io/github/stars/NicholasBellucci/SociableWeaver) ![GitHub last commit](https://img.shields.io/github/last-commit/NicholasBellucci/SociableWeaver)](https://github.com/NicholasBellucci/SociableWeaver) - Build declarative GraphQL queries and mutations.

#### JSON
*Struggling using json data? Here are some interesting ways to handle it.* [back to top](#readme) 

* [AlamofireObjectMapper ![GitHub Repo Stars](https://img.shields.io/github/stars/tristanhimmelman/AlamofireObjectMapper) ![GitHub last commit](https://img.shields.io/github/last-commit/tristanhimmelman/AlamofireObjectMapper)](https://github.com/tristanhimmelman/AlamofireObjectMapper) - An Alamofire extension which converts JSON response data into objects using ObjectMapper.
* [Alembic ![GitHub Repo Stars](https://img.shields.io/github/stars/ra1028/Alembic) ![GitHub last commit](https://img.shields.io/github/last-commit/ra1028/Alembic)](https://github.com/ra1028/Alembic) - Functional JSON parsing, mapping to objects, and serialize to JSON.
* [Argo ![GitHub Repo Stars](https://img.shields.io/github/stars/thoughtbot/Argo) ![GitHub last commit](https://img.shields.io/github/last-commit/thoughtbot/Argo)](https://github.com/thoughtbot/Argo) - JSON parsing library.
* [Arrow ![GitHub Repo Stars](https://img.shields.io/github/stars/freshOS/Arrow) ![GitHub last commit](https://img.shields.io/github/last-commit/freshOS/Arrow)](https://github.com/freshOS/Arrow) - Elegant JSON Parsing.
* [Decodable ![GitHub Repo Stars](https://img.shields.io/github/stars/Anviking/Decodable) ![GitHub last commit](https://img.shields.io/github/last-commit/Anviking/Decodable)](https://github.com/Anviking/Decodable) :penguin: - JSON parsing.
* [Elevate ![GitHub Repo Stars](https://img.shields.io/github/stars/Nike-Inc/Elevate) ![GitHub last commit](https://img.shields.io/github/last-commit/Nike-Inc/Elevate)](https://github.com/Nike-Inc/Elevate) - JSON parsing framework that makes parsing simple, reliable and composable.
* [EVReflection ![GitHub Repo Stars](https://img.shields.io/github/stars/evermeer/EVReflection) ![GitHub last commit](https://img.shields.io/github/last-commit/evermeer/EVReflection)](https://github.com/evermeer/EVReflection) - Reflection based JSON encoding and decoding. Including support for NSDictionary, NSCoding, Printable, Hashable and Equatable.
* [HandyJSON ![GitHub Repo Stars](https://img.shields.io/github/stars/alibaba/handyjson) ![GitHub last commit](https://img.shields.io/github/last-commit/alibaba/handyjson)](https://github.com/alibaba/handyjson) - A handy JSON-object serialization/deserialization library.
* [Himotoki ![GitHub Repo Stars](https://img.shields.io/github/stars/ikesyo/Himotoki) ![GitHub last commit](https://img.shields.io/github/last-commit/ikesyo/Himotoki)](https://github.com/ikesyo/Himotoki) - A type-safe JSON decoding library.
* [JASON ![GitHub Repo Stars](https://img.shields.io/github/stars/delba/JASON) ![GitHub last commit](https://img.shields.io/github/last-commit/delba/JASON)](https://github.com/delba/JASON) - JSON parsing with outstanding performances and convenient operators.
* [JSONHelper ![GitHub Repo Stars](https://img.shields.io/github/stars/isair/JSONHelper) ![GitHub last commit](https://img.shields.io/github/last-commit/isair/JSONHelper)](https://github.com/isair/JSONHelper) - Lightning fast JSON deserialization and value conversion library for iOS & OS X.
* [JSONNeverDie ![GitHub Repo Stars](https://img.shields.io/github/stars/johnlui/JSONNeverDie) ![GitHub last commit](https://img.shields.io/github/last-commit/johnlui/JSONNeverDie)](https://github.com/johnlui/JSONNeverDie) - Auto reflection tool from JSON to Model, user friendly JSON encoder / decoder, aims to never die.
* [ObjectMapper ![GitHub Repo Stars](https://img.shields.io/github/stars/tristanhimmelman/ObjectMapper) ![GitHub last commit](https://img.shields.io/github/last-commit/tristanhimmelman/ObjectMapper)](https://github.com/tristanhimmelman/ObjectMapper) - JSON object mapper.
* [PMJSON ![GitHub Repo Stars](https://img.shields.io/github/stars/postmates/PMJSON) ![GitHub last commit](https://img.shields.io/github/last-commit/postmates/PMJSON)](https://github.com/postmates/PMJSON) - JSON encoding/decoding library.
* [Sextant ![GitHub Repo Stars](https://img.shields.io/github/stars/KittyMac/Sextant) ![GitHub last commit](https://img.shields.io/github/last-commit/KittyMac/Sextant)](https://github.com/KittyMac/Sextant) :penguin: - High performance JSONPath queries
* [SwiftyJSON ![GitHub Repo Stars](https://img.shields.io/github/stars/SwiftyJSON/SwiftyJSON) ![GitHub last commit](https://img.shields.io/github/last-commit/SwiftyJSON/SwiftyJSON)](https://github.com/SwiftyJSON/SwiftyJSON) - A lib for JSON with error handling.
* [SwiftyJSONAccelerator ![GitHub Repo Stars](https://img.shields.io/github/stars/insanoid/SwiftyJSONAccelerator) ![GitHub last commit](https://img.shields.io/github/last-commit/insanoid/SwiftyJSONAccelerator)](https://github.com/insanoid/SwiftyJSONAccelerator) - macOS app to generate Swift 5 models for JSON (with Codeable).

#### Key Value Store
[back to top](#readme) 

* [Default ![GitHub Repo Stars](https://img.shields.io/github/stars/Nirma/Default) ![GitHub last commit](https://img.shields.io/github/last-commit/Nirma/Default)](https://github.com/Nirma/Default) - Modern interface to UserDefaults + Codable support.
* [Defaults ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/Defaults) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/Defaults)](https://github.com/sindresorhus/Defaults) - Strongly-typed UserDefaults with support for Codable and key observation.
* [DefaultsKit ![GitHub Repo Stars](https://img.shields.io/github/stars/nmdias/DefaultsKit) ![GitHub last commit](https://img.shields.io/github/last-commit/nmdias/DefaultsKit)](https://github.com/nmdias/DefaultsKit) - Simple, Strongly Typed UserDefaults for iOS, macOS and tvOS.
* [Prephirences ![GitHub Repo Stars](https://img.shields.io/github/stars/phimage/Prephirences) ![GitHub last commit](https://img.shields.io/github/last-commit/phimage/Prephirences)](https://github.com/phimage/Prephirences) - Manage application preferences, NSUserDefaults, iCloud, Keychain and more.
* [SecureDefaults ![GitHub Repo Stars](https://img.shields.io/github/stars/vpeschenkov/SecureDefaults) ![GitHub last commit](https://img.shields.io/github/last-commit/vpeschenkov/SecureDefaults)](https://github.com/vpeschenkov/SecureDefaults) - A lightweight wrapper over UserDefaults & NSUserDefaults with an extra AES-256 encryption layer.
* [Storez ![GitHub Repo Stars](https://img.shields.io/github/stars/SwiftKitz/Storez) ![GitHub last commit](https://img.shields.io/github/last-commit/SwiftKitz/Storez)](https://github.com/SwiftKitz/Storez) - Safe, statically-typed, store-agnostic key-value storage.
* [SwiftStore ![GitHub Repo Stars](https://img.shields.io/github/stars/hemantasapkota/SwiftStore) ![GitHub last commit](https://img.shields.io/github/last-commit/hemantasapkota/SwiftStore)](https://github.com/hemantasapkota/SwiftStore) - A Key-Value store backed by LevelDB.
* [SwiftyUserDefaults ![GitHub Repo Stars](https://img.shields.io/github/stars/sunshinejr/SwiftyUserDefaults) ![GitHub last commit](https://img.shields.io/github/last-commit/sunshinejr/SwiftyUserDefaults)](https://github.com/sunshinejr/SwiftyUserDefaults) - Cleaner, nicer syntax for NSUserDefaults.
* [Zephyr ![GitHub Repo Stars](https://img.shields.io/github/stars/ArtSabintsev/Zephyr) ![GitHub last commit](https://img.shields.io/github/last-commit/ArtSabintsev/Zephyr)](https://github.com/ArtSabintsev/Zephyr) - Effortlessly synchronize NSUserDefaults over iCloud.

#### MongoDB
[back to top](#readme) 

* [MongoKitten ![GitHub Repo Stars](https://img.shields.io/github/stars/orlandos-nl/MongoKitten) ![GitHub last commit](https://img.shields.io/github/last-commit/orlandos-nl/MongoKitten)](https://github.com/orlandos-nl/MongoKitten) :penguin: - MongoDB Connector.
* [Perfect-MongoDB ![GitHub Repo Stars](https://img.shields.io/github/stars/PerfectlySoft/Perfect-MongoDB) ![GitHub last commit](https://img.shields.io/github/last-commit/PerfectlySoft/Perfect-MongoDB)](https://github.com/PerfectlySoft/Perfect-MongoDB) :penguin: - A stand-alone wrapper around the mongo-c client library, enabling access to MongoDB servers.

#### Multi Database
*Data management layers that involve multiple sources.* [back to top](#readme) 

* [ModelAssistant ![GitHub Repo Stars](https://img.shields.io/github/stars/ssamadgh/ModelAssistant) ![GitHub last commit](https://img.shields.io/github/last-commit/ssamadgh/ModelAssistant)](https://github.com/ssamadgh/ModelAssistant) - Elegant library to manage the interactions between view and model.
* [PersistenceKit ![GitHub Repo Stars](https://img.shields.io/github/stars/Teknasyon-Teknoloji/PersistenceKit) ![GitHub last commit](https://img.shields.io/github/last-commit/Teknasyon-Teknoloji/PersistenceKit)](https://github.com/Teknasyon-Teknoloji/PersistenceKit) - Store and retrieve Codable objects to various persistence layers, in a couple lines of code!
* [Shallows ![GitHub Repo Stars](https://img.shields.io/github/stars/dreymonde/Shallows) ![GitHub last commit](https://img.shields.io/github/last-commit/dreymonde/Shallows)](https://github.com/dreymonde/Shallows) - Your lightweight persistence toolbox.

#### ORM
[back to top](#readme) 

* [fluent ![GitHub Repo Stars](https://img.shields.io/github/stars/vapor/fluent) ![GitHub last commit](https://img.shields.io/github/last-commit/vapor/fluent)](https://github.com/vapor/fluent) :penguin: - Simple ActiveRecord implementation.
* [Perfect-CRUD ![GitHub Repo Stars](https://img.shields.io/github/stars/PerfectlySoft/Perfect-CRUD) ![GitHub last commit](https://img.shields.io/github/last-commit/PerfectlySoft/Perfect-CRUD)](https://github.com/PerfectlySoft/Perfect-CRUD) :penguin: - CRUD is an object-relational mapping (ORM) system using Codable protocol.

#### Other Data
*Other ways to persist data* [back to top](#readme) 

* [CoreXLSX ![GitHub Repo Stars](https://img.shields.io/github/stars/CoreOffice/CoreXLSX) ![GitHub last commit](https://img.shields.io/github/last-commit/CoreOffice/CoreXLSX)](https://github.com/CoreOffice/CoreXLSX) - Excel spreadsheet (XLSX) format support.
* [Disk ![GitHub Repo Stars](https://img.shields.io/github/stars/saoudrizwan/Disk) ![GitHub last commit](https://img.shields.io/github/last-commit/saoudrizwan/Disk)](https://github.com/saoudrizwan/Disk) - Delightful framework for iOS to easily persist structs, images, and data.
* [EVCloudKitDao ![GitHub Repo Stars](https://img.shields.io/github/stars/evermeer/EVCloudKitDao) ![GitHub last commit](https://img.shields.io/github/last-commit/evermeer/EVCloudKitDao)](https://github.com/evermeer/EVCloudKitDao) - Simplified access to CloudKit with support for subscriptions and local caching.
* [KeyPathKit ![GitHub Repo Stars](https://img.shields.io/github/stars/vincent-pradeilles/KeyPathKit) ![GitHub last commit](https://img.shields.io/github/last-commit/vincent-pradeilles/KeyPathKit)](https://github.com/vincent-pradeilles/KeyPathKit) - KeyPathKit provides a seamless syntax to manipulate data using typed keypaths.
* [LeetCode-Swift ![GitHub Repo Stars](https://img.shields.io/github/stars/soapyigu/LeetCode-Swift) ![GitHub last commit](https://img.shields.io/github/last-commit/soapyigu/LeetCode-Swift)](https://github.com/soapyigu/LeetCode-Swift) - Solutions to LeetCode interview questions.
* [Pencil ![GitHub Repo Stars](https://img.shields.io/github/stars/naru-jpn/pencil) ![GitHub last commit](https://img.shields.io/github/last-commit/naru-jpn/pencil)](https://github.com/naru-jpn/pencil) - Write any value to file.
* [StorageManager ![GitHub Repo Stars](https://img.shields.io/github/stars/iAmrSalman/StorageManager) ![GitHub last commit](https://img.shields.io/github/last-commit/iAmrSalman/StorageManager)](https://github.com/iAmrSalman/StorageManager) - Safe and easy way to use FileManager as Database.

#### Realm
[back to top](#readme) 

* [Realm ![GitHub Repo Stars](https://img.shields.io/github/stars/realm/realm-swift) ![GitHub last commit](https://img.shields.io/github/last-commit/realm/realm-swift)](https://github.com/realm/realm-swift) - Realm is a mobile database: a replacement for Core Data & SQLite.
* [RealmWrapper ![GitHub Repo Stars](https://img.shields.io/github/stars/k-lpmg/RealmWrapper) ![GitHub last commit](https://img.shields.io/github/last-commit/k-lpmg/RealmWrapper)](https://github.com/k-lpmg/RealmWrapper) - Safe and easy wrappers for RealmSwift.
* [Unrealm ![GitHub Repo Stars](https://img.shields.io/github/stars/arturdev/Unrealm) ![GitHub last commit](https://img.shields.io/github/last-commit/arturdev/Unrealm)](https://github.com/arturdev/Unrealm) - Unrealm enables you to easily store Swift native Classes, Structs and Enums into Realm.

#### SQL drivers
[back to top](#readme) 

* [MySQL Swift ![GitHub Repo Stars](https://img.shields.io/github/stars/novi/mysql-swift) ![GitHub last commit](https://img.shields.io/github/last-commit/novi/mysql-swift)](https://github.com/novi/mysql-swift) :penguin: - MySQL client library.
* [Perfect-MySQL ![GitHub Repo Stars](https://img.shields.io/github/stars/PerfectlySoft/Perfect-MySQL) ![GitHub last commit](https://img.shields.io/github/last-commit/PerfectlySoft/Perfect-MySQL)](https://github.com/PerfectlySoft/Perfect-MySQL) :penguin: - A stand-alone wrapper around the MySQL client library, enabling access to MySQL servers.
* [Perfect-PostgreSQL ![GitHub Repo Stars](https://img.shields.io/github/stars/PerfectlySoft/Perfect-PostgreSQL) ![GitHub last commit](https://img.shields.io/github/last-commit/PerfectlySoft/Perfect-PostgreSQL)](https://github.com/PerfectlySoft/Perfect-PostgreSQL) :penguin: - A stand-alone wrapper around the libpq client library, enabling access to PostgreSQL servers.

#### SQLite
*Are you interested in storing your app data using SQLite? Here are some interesting resources.* [back to top](#readme) 

* [GRDB.swift ![GitHub Repo Stars](https://img.shields.io/github/stars/groue/GRDB.swift) ![GitHub last commit](https://img.shields.io/github/last-commit/groue/GRDB.swift)](https://github.com/groue/GRDB.swift) - A versatile SQLite toolkit.
* [SQLite.swift ![GitHub Repo Stars](https://img.shields.io/github/stars/stephencelis/SQLite.swift) ![GitHub last commit](https://img.shields.io/github/last-commit/stephencelis/SQLite.swift)](https://github.com/stephencelis/SQLite.swift) - Framework wrapping SQLite3. Small. Simple. Safe.
* [SQLiteDB ![GitHub Repo Stars](https://img.shields.io/github/stars/FahimF/SQLiteDB) ![GitHub last commit](https://img.shields.io/github/last-commit/FahimF/SQLiteDB)](https://github.com/FahimF/SQLiteDB) - SQLite wrapper.

#### TOML
*Tom's Obvious, Minimal Language.* [back to top](#readme) 

* [TOMLDecoder ![GitHub Repo Stars](https://img.shields.io/github/stars/dduan/TOMLDecoder) ![GitHub last commit](https://img.shields.io/github/last-commit/dduan/TOMLDecoder)](https://github.com/dduan/TOMLDecoder) - Latest TOML standard, decoded.

#### XML
*If you prefer to manage XML data formatted entries, here are some helpful libs* [back to top](#readme) 

* [AEXML ![GitHub Repo Stars](https://img.shields.io/github/stars/tadija/AEXML) ![GitHub last commit](https://img.shields.io/github/last-commit/tadija/AEXML)](https://github.com/tadija/AEXML) - xml wrapper.
* [CheatyXML ![GitHub Repo Stars](https://img.shields.io/github/stars/lobodart/CheatyXML) ![GitHub last commit](https://img.shields.io/github/last-commit/lobodart/CheatyXML)](https://github.com/lobodart/CheatyXML) - A powerful framework designed to manage XML easily.
* [SwiftyXML ![GitHub Repo Stars](https://img.shields.io/github/stars/chenyunguiMilook/SwiftyXML) ![GitHub last commit](https://img.shields.io/github/last-commit/chenyunguiMilook/SwiftyXML)](https://github.com/chenyunguiMilook/SwiftyXML) - The most swifty way to deal with XML.
* [SWXMLHash ![GitHub Repo Stars](https://img.shields.io/github/stars/drmohundro/SWXMLHash) ![GitHub last commit](https://img.shields.io/github/last-commit/drmohundro/SWXMLHash)](https://github.com/drmohundro/SWXMLHash) - Simple XML parsing.
* [XMLCoder ![GitHub Repo Stars](https://img.shields.io/github/stars/MaxDesiatov/XMLCoder) ![GitHub last commit](https://img.shields.io/github/last-commit/MaxDesiatov/XMLCoder)](https://github.com/MaxDesiatov/XMLCoder) - XMLEncoder & XMLDecoder based on Codable protocols from the standard library.
* [XMLMapper ![GitHub Repo Stars](https://img.shields.io/github/stars/gcharita/XMLMapper) ![GitHub last commit](https://img.shields.io/github/last-commit/gcharita/XMLMapper)](https://github.com/gcharita/XMLMapper) - A simple way to map XML to Objects.

#### YAML
[back to top](#readme) 

* [YamlSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/behrang/YamlSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/behrang/YamlSwift)](https://github.com/behrang/YamlSwift) - Load YAML and JSON documents.
* [Yams ![GitHub Repo Stars](https://img.shields.io/github/stars/jpsim/Yams) ![GitHub last commit](https://img.shields.io/github/last-commit/jpsim/Yams)](https://github.com/jpsim/Yams) :penguin: - Sweet YAML parser.

#### ZIP
[back to top](#readme) 

* [Zip ![GitHub Repo Stars](https://img.shields.io/github/stars/marmelroy/Zip) ![GitHub last commit](https://img.shields.io/github/last-commit/marmelroy/Zip)](https://github.com/marmelroy/Zip) - Framework for zipping and unzipping files.
* [Zip Foundation ![GitHub Repo Stars](https://img.shields.io/github/stars/weichsel/ZIPFoundation) ![GitHub last commit](https://img.shields.io/github/last-commit/weichsel/ZIPFoundation)](https://github.com/weichsel/ZIPFoundation) - A library to create, read and modify ZIP archive files.

### Date
*Handle date formatting easily.* [back to top](#readme) 

* [AnyDate ![GitHub Repo Stars](https://img.shields.io/github/stars/Kawoou/AnyDate) ![GitHub last commit](https://img.shields.io/github/last-commit/Kawoou/AnyDate)](https://github.com/Kawoou/AnyDate) - Date & Time API inspired from Java 8 DateTime API.
* [Chronology ![GitHub Repo Stars](https://img.shields.io/github/stars/davedelong/time) ![GitHub last commit](https://img.shields.io/github/last-commit/davedelong/time)](https://github.com/davedelong/time) - Building a better date/time library.
* [DateHelper ![GitHub Repo Stars](https://img.shields.io/github/stars/melvitax/DateHelper) ![GitHub last commit](https://img.shields.io/github/last-commit/melvitax/DateHelper)](https://github.com/melvitax/DateHelper) - Simple date helper.
* [Datez ![GitHub Repo Stars](https://img.shields.io/github/stars/SwiftKitz/Datez) ![GitHub last commit](https://img.shields.io/github/last-commit/SwiftKitz/Datez)](https://github.com/SwiftKitz/Datez) - Library for dealing with `NSDate`, `NSCalendar`, `NSDateComponents`, and `NSTimeInterval`.
* [Datify ![GitHub Repo Stars](https://img.shields.io/github/stars/hemangshah/Datify) ![GitHub last commit](https://img.shields.io/github/last-commit/hemangshah/Datify)](https://github.com/hemangshah/Datify) - Easypeasy date functions.
* [NVDate ![GitHub Repo Stars](https://img.shields.io/github/stars/novalagung/nvdate) ![GitHub last commit](https://img.shields.io/github/last-commit/novalagung/nvdate)](https://github.com/novalagung/nvdate) - Date extension library.
* [SwiftDate ![GitHub Repo Stars](https://img.shields.io/github/stars/malcommac/SwiftDate) ![GitHub last commit](https://img.shields.io/github/last-commit/malcommac/SwiftDate)](https://github.com/malcommac/SwiftDate) - Easy NSDate Management.
* [Time ![GitHub Repo Stars](https://img.shields.io/github/stars/dreymonde/Time) ![GitHub last commit](https://img.shields.io/github/last-commit/dreymonde/Time)](https://github.com/dreymonde/Time) - Type-safe time calculations, powered by generics.
* [Timepiece ![GitHub Repo Stars](https://img.shields.io/github/stars/naoty/Timepiece) ![GitHub last commit](https://img.shields.io/github/last-commit/naoty/Timepiece)](https://github.com/naoty/Timepiece) - Intuitive NSDate extensions.
* [TrueTime.swift ![GitHub Repo Stars](https://img.shields.io/github/stars/instacart/TrueTime.swift) ![GitHub last commit](https://img.shields.io/github/last-commit/instacart/TrueTime.swift)](https://github.com/instacart/TrueTime.swift) - Get the true current time impervious to device clock time changes (NTP library).

### Dependency Injection
*Dependency injection libs* [back to top](#readme) 

* [Cleanse ![GitHub Repo Stars](https://img.shields.io/github/stars/square/Cleanse) ![GitHub last commit](https://img.shields.io/github/last-commit/square/Cleanse)](https://github.com/square/Cleanse) - A Lightweight Dependency Injection Framework by Square.
* [Corridor ![GitHub Repo Stars](https://img.shields.io/github/stars/symentis/Corridor) ![GitHub last commit](https://img.shields.io/github/last-commit/symentis/Corridor)](https://github.com/symentis/Corridor) - A Coreader-like Dependency Injection μFramework.
* [Deli ![GitHub Repo Stars](https://img.shields.io/github/stars/kawoou/Deli) ![GitHub last commit](https://img.shields.io/github/last-commit/kawoou/Deli)](https://github.com/kawoou/Deli) - Deli is an easy-to-use Dependency Injection(DI).
* [DIKit ![GitHub Repo Stars](https://img.shields.io/github/stars/Liftric/DIKit) ![GitHub last commit](https://img.shields.io/github/last-commit/Liftric/DIKit)](https://github.com/Liftric/DIKit) - Dependency Injection Framework for Swift, inspired by KOIN.
* [Dip ![GitHub Repo Stars](https://img.shields.io/github/stars/AliSoftware/Dip) ![GitHub last commit](https://img.shields.io/github/last-commit/AliSoftware/Dip)](https://github.com/AliSoftware/Dip) - A simple Dependency Injection Container.
* [DITranquillity ![GitHub Repo Stars](https://img.shields.io/github/stars/ivlevAstef/DITranquillity) ![GitHub last commit](https://img.shields.io/github/last-commit/ivlevAstef/DITranquillity)](https://github.com/ivlevAstef/DITranquillity/) - Dependency injection framework with tranquility.
* [Locatable ![GitHub Repo Stars](https://img.shields.io/github/stars/vincent-pradeilles/locatable) ![GitHub last commit](https://img.shields.io/github/last-commit/vincent-pradeilles/locatable)](https://github.com/vincent-pradeilles/locatable) - A micro-framework that leverages Property Wrappers to implement the Service Locator pattern.
* [Pure ![GitHub Repo Stars](https://img.shields.io/github/stars/devxoul/Pure) ![GitHub last commit](https://img.shields.io/github/last-commit/devxoul/Pure)](https://github.com/devxoul/Pure) - A way to do a dependency injection without a DI container.
* [Swinject ![GitHub Repo Stars](https://img.shields.io/github/stars/Swinject/Swinject) ![GitHub last commit](https://img.shields.io/github/last-commit/Swinject/Swinject)](https://github.com/Swinject/Swinject) - A dependency injection framework.
* [Typhoon ![GitHub Repo Stars](https://img.shields.io/github/stars/appsquickly/Typhoon) ![GitHub last commit](https://img.shields.io/github/last-commit/appsquickly/Typhoon)](https://github.com/appsquickly/Typhoon) - Dependency injection toolkit.
* [Weaver ![GitHub Repo Stars](https://img.shields.io/github/stars/scribd/Weaver) ![GitHub last commit](https://img.shields.io/github/last-commit/scribd/Weaver)](https://github.com/scribd/Weaver) - A declarative, easy-to-use and safe Dependency Injection framework.

### Device
*A collection of libs to recognize your device.* [back to top](#readme) 

* [Device ![GitHub Repo Stars](https://img.shields.io/github/stars/Ekhoo/Device) ![GitHub last commit](https://img.shields.io/github/last-commit/Ekhoo/Device)](https://github.com/Ekhoo/Device) - Light weight tool for detecting the current device and screen size.
* [Device.swift ![GitHub Repo Stars](https://img.shields.io/github/stars/schickling/Device.swift) ![GitHub last commit](https://img.shields.io/github/last-commit/schickling/Device.swift)](https://github.com/schickling/Device.swift) - Super-lightweight library to detect used device.
* [DeviceKit ![GitHub Repo Stars](https://img.shields.io/github/stars/devicekit/DeviceKit) ![GitHub last commit](https://img.shields.io/github/last-commit/devicekit/DeviceKit)](https://github.com/devicekit/DeviceKit) - DeviceKit is a value-type replacement of UIDevice.
* [Deviice ![GitHub Repo Stars](https://img.shields.io/github/stars/andrealufino/Deviice) ![GitHub last commit](https://img.shields.io/github/last-commit/andrealufino/Deviice)](https://github.com/andrealufino/Deviice) - Swift library to easily check the current device and some more info about it.
* [Luminous ![GitHub Repo Stars](https://img.shields.io/github/stars/andrealufino/Luminous) ![GitHub last commit](https://img.shields.io/github/last-commit/andrealufino/Luminous)](https://github.com/andrealufino/Luminous) - Get everything you need to know about the device.
* [Thingy ![GitHub Repo Stars](https://img.shields.io/github/stars/bojan/Thingy) ![GitHub last commit](https://img.shields.io/github/last-commit/bojan/Thingy)](https://github.com/bojan/Thingy) - A modern device detection and querying library.
* [UIDeviceComplete ![GitHub Repo Stars](https://img.shields.io/github/stars/Nirma/UIDeviceComplete) ![GitHub last commit](https://img.shields.io/github/last-commit/Nirma/UIDeviceComplete)](https://github.com/Nirma/UIDeviceComplete) - UIDevice extensions that fill in the missing pieces.

### Documentation
*Generate documentation for Swift code* [back to top](#readme) 

* [jazzy ![GitHub Repo Stars](https://img.shields.io/github/stars/realm/jazzy) ![GitHub last commit](https://img.shields.io/github/last-commit/realm/jazzy)](https://github.com/realm/jazzy/) - Soulful docs.
* [SourceDocs ![GitHub Repo Stars](https://img.shields.io/github/stars/SourceDocs/SourceDocs) ![GitHub last commit](https://img.shields.io/github/last-commit/SourceDocs/SourceDocs)](https://github.com/SourceDocs/SourceDocs) - Generate Markdown reference documentation that lives with your code.

### Email
[back to top](#readme) 


### Embedded Systems
*Build your embedded Linux projects on a RaspberryPi, BeagleBone, C.H.I.P. and other boards.* [back to top](#readme) 

* [SwiftyGPIO ![GitHub Repo Stars](https://img.shields.io/github/stars/uraimo/SwiftyGPIO) ![GitHub last commit](https://img.shields.io/github/last-commit/uraimo/SwiftyGPIO)](https://github.com/uraimo/SwiftyGPIO) :penguin: - Interact with Linux GPIO/SPI/PWM on ARM.

#### Peripherals
*Interact with specific external peripherals.* [back to top](#readme) 


### Events
*Alternatives to NSNotificationCenter, Key-Value-Observation, or delegation.* [back to top](#readme) 

* [Bond ![GitHub Repo Stars](https://img.shields.io/github/stars/DeclarativeHub/Bond) ![GitHub last commit](https://img.shields.io/github/last-commit/DeclarativeHub/Bond)](https://github.com/DeclarativeHub/Bond) - Binding framework.
* [Combinative ![GitHub Repo Stars](https://img.shields.io/github/stars/noppefoxwolf/Combinative) ![GitHub last commit](https://img.shields.io/github/last-commit/noppefoxwolf/Combinative)](https://github.com/noppefoxwolf/Combinative) - UI event handling using Apple's combine framework.
* [EmitterKit ![GitHub Repo Stars](https://img.shields.io/github/stars/aleclarson/emitter-kit) ![GitHub last commit](https://img.shields.io/github/last-commit/aleclarson/emitter-kit)](https://github.com/aleclarson/emitter-kit) - Implementation of event emitters and listeners.
* [FutureKit ![GitHub Repo Stars](https://img.shields.io/github/stars/FutureKit/FutureKit) ![GitHub last commit](https://img.shields.io/github/last-commit/FutureKit/FutureKit)](https://github.com/FutureKit/FutureKit) - Future/Promises Library.
* [Katana ![GitHub Repo Stars](https://img.shields.io/github/stars/BendingSpoons/katana-swift) ![GitHub last commit](https://img.shields.io/github/last-commit/BendingSpoons/katana-swift)](https://github.com/BendingSpoons/katana-swift) - Write apps a la React and Redux.
* [LightweightObservable ![GitHub Repo Stars](https://img.shields.io/github/stars/fxm90/LightweightObservable) ![GitHub last commit](https://img.shields.io/github/last-commit/fxm90/LightweightObservable)](https://github.com/fxm90/LightweightObservable) - A lightweight implementation of an observable sequence that you can subscribe to.
* [NoticeObserveKit ![GitHub Repo Stars](https://img.shields.io/github/stars/marty-suzuki/NoticeObserveKit) ![GitHub last commit](https://img.shields.io/github/last-commit/marty-suzuki/NoticeObserveKit)](https://github.com/marty-suzuki/NoticeObserveKit) - NoticeObserveKit is type-safe NotificationCenter wrapper that associates notice type with info type.
* [Notificationz ![GitHub Repo Stars](https://img.shields.io/github/stars/SwiftKitz/Notificationz) ![GitHub last commit](https://img.shields.io/github/last-commit/SwiftKitz/Notificationz)](https://github.com/SwiftKitz/Notificationz) - Helping you own `NSNotificationCenter` by providing a simple, customizable adapter.
* [Observable ![GitHub Repo Stars](https://img.shields.io/github/stars/roberthein/Observable) ![GitHub last commit](https://img.shields.io/github/last-commit/roberthein/Observable)](https://github.com/roberthein/Observable) - The easiest way to observe values.
* [OneWay ![GitHub Repo Stars](https://img.shields.io/github/stars/DevYeom/OneWay) ![GitHub last commit](https://img.shields.io/github/last-commit/DevYeom/OneWay)](https://github.com/DevYeom/OneWay) - State management with unidirectional data flow.
* [OpenCombine ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenCombine/OpenCombine) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenCombine/OpenCombine)](https://github.com/OpenCombine/OpenCombine) - Open source implementation of Apple's Combine framework for processing values over time.
* [PMKVObserver ![GitHub Repo Stars](https://img.shields.io/github/stars/postmates/PMKVObserver) ![GitHub last commit](https://img.shields.io/github/last-commit/postmates/PMKVObserver)](https://github.com/postmates/PMKVObserver/) - Modern thread-safe and type-safe key-value observing.
* [PromiseKit ![GitHub Repo Stars](https://img.shields.io/github/stars/mxcl/PromiseKit) ![GitHub last commit](https://img.shields.io/github/last-commit/mxcl/PromiseKit)](https://github.com/mxcl/PromiseKit) - Async promise programming lib.
* [ReactiveCocoa ![GitHub Repo Stars](https://img.shields.io/github/stars/ReactiveCocoa/ReactiveCocoa) ![GitHub last commit](https://img.shields.io/github/last-commit/ReactiveCocoa/ReactiveCocoa)](https://github.com/ReactiveCocoa/ReactiveCocoa) - ReactiveCocoa (RAC) is a Cocoa framework inspired by Functional Reactive Programming. It provides APIs for composing and transforming streams of values over time.
* [ReactorKit ![GitHub Repo Stars](https://img.shields.io/github/stars/ReactorKit/ReactorKit) ![GitHub last commit](https://img.shields.io/github/last-commit/ReactorKit/ReactorKit)](https://github.com/ReactorKit/ReactorKit) - A framework for reactive and unidirectional application architecture.
* [ReSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/ReSwift/ReSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/ReSwift/ReSwift)](https://github.com/ReSwift/ReSwift) - Unidirectional Data Flow.
* [RxSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/ReactiveX/RxSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/ReactiveX/RxSwift)](https://github.com/ReactiveX/RxSwift) - Microsoft Reactive Extensions (Rx).
* [Signals ![GitHub Repo Stars](https://img.shields.io/github/stars/artman/Signals) ![GitHub last commit](https://img.shields.io/github/last-commit/artman/Signals)](https://github.com/artman/Signals) - Replaces delegates and notifications.
* [SwiftEventBus ![GitHub Repo Stars](https://img.shields.io/github/stars/cesarferreira/SwiftEventBus) ![GitHub last commit](https://img.shields.io/github/last-commit/cesarferreira/SwiftEventBus)](https://github.com/cesarferreira/SwiftEventBus) - A publish/subscribe event bus optimized for iOS.
* [Tempura ![GitHub Repo Stars](https://img.shields.io/github/stars/BendingSpoons/tempura-swift) ![GitHub last commit](https://img.shields.io/github/last-commit/BendingSpoons/tempura-swift)](https://github.com/BendingSpoons/tempura-swift) - A holistic approach to iOS development, inspired by Redux and MVVM.
* [Tokamak ![GitHub Repo Stars](https://img.shields.io/github/stars/TokamakUI/Tokamak) ![GitHub last commit](https://img.shields.io/github/last-commit/TokamakUI/Tokamak)](https://github.com/TokamakUI/Tokamak) - React-like declarative API for building native UI components with easy to use one-way data binding.
* [Tomorrowland ![GitHub Repo Stars](https://img.shields.io/github/stars/lilyball/Tomorrowland) ![GitHub last commit](https://img.shields.io/github/last-commit/lilyball/Tomorrowland)](https://github.com/lilyball/Tomorrowland) - Lightweight Promises.
* [TopicEventBus ![GitHub Repo Stars](https://img.shields.io/github/stars/mcmatan/topicEventBus) ![GitHub last commit](https://img.shields.io/github/last-commit/mcmatan/topicEventBus)](https://github.com/mcmatan/topicEventBus) - Publish–subscribe design pattern implementation framework, with ability to publish events by topic.
* [VueFlux ![GitHub Repo Stars](https://img.shields.io/github/stars/ra1028/VueFlux) ![GitHub last commit](https://img.shields.io/github/last-commit/ra1028/VueFlux)](https://github.com/ra1028/VueFlux) - Unidirectional Data Flow State Management Architecture - Inspired by Vuex and Flux.
* [When ![GitHub Repo Stars](https://img.shields.io/github/stars/vadymmarkov/When) ![GitHub last commit](https://img.shields.io/github/last-commit/vadymmarkov/When)](https://github.com/vadymmarkov/When) - A lightweight implementation of Promises.

### Files
[back to top](#readme) 

* [FileKit ![GitHub Repo Stars](https://img.shields.io/github/stars/nvzqz/FileKit) ![GitHub last commit](https://img.shields.io/github/last-commit/nvzqz/FileKit)](https://github.com/nvzqz/FileKit) - Simple and expressive file management.
* [FileProvider ![GitHub Repo Stars](https://img.shields.io/github/stars/amosavian/FileProvider) ![GitHub last commit](https://img.shields.io/github/last-commit/amosavian/FileProvider)](https://github.com/amosavian/FileProvider) - FileManager replacement for Local, iCloud and Remote (WebDAV/FTP/Dropbox/OneDrive/SMB2) files for iOS/tvOS and macOS.
* [KZFileWatchers ![GitHub Repo Stars](https://img.shields.io/github/stars/krzysztofzablocki/KZFileWatchers) ![GitHub last commit](https://img.shields.io/github/last-commit/krzysztofzablocki/KZFileWatchers)](https://github.com/krzysztofzablocki/KZFileWatchers) - A micro-framework for observing file changes, both local and remote.
* [PathKit ![GitHub Repo Stars](https://img.shields.io/github/stars/kylef/PathKit) ![GitHub last commit](https://img.shields.io/github/last-commit/kylef/PathKit)](https://github.com/kylef/PathKit) :penguin: - Effortless path operations.
* [Pathos ![GitHub Repo Stars](https://img.shields.io/github/stars/dduan/Pathos) ![GitHub last commit](https://img.shields.io/github/last-commit/dduan/Pathos)](https://github.com/dduan/Pathos) :penguin: - Efficient Unix file management.

### Fonts
*A collection of font related snippets.* [back to top](#readme) 

* [FontAwesome.swift ![GitHub Repo Stars](https://img.shields.io/github/stars/thii/FontAwesome.swift) ![GitHub last commit](https://img.shields.io/github/last-commit/thii/FontAwesome.swift)](https://github.com/thii/FontAwesome.swift) - Use FontAwesome in your projects.
* [FontBlaster ![GitHub Repo Stars](https://img.shields.io/github/stars/ArtSabintsev/FontBlaster) ![GitHub last commit](https://img.shields.io/github/last-commit/ArtSabintsev/FontBlaster)](https://github.com/ArtSabintsev/FontBlaster) - Programmatically load custom fonts into your iOS app.
* [Inkwell ![GitHub Repo Stars](https://img.shields.io/github/stars/ninjaprox/Inkwell) ![GitHub last commit](https://img.shields.io/github/last-commit/ninjaprox/Inkwell)](https://github.com/ninjaprox/Inkwell) - An inkwell to use custom fonts on the fly.
* [IoniconsKit ![GitHub Repo Stars](https://img.shields.io/github/stars/keitaoouchi/IoniconsKit) ![GitHub last commit](https://img.shields.io/github/last-commit/keitaoouchi/IoniconsKit)](https://github.com/keitaoouchi/IoniconsKit) - Use ionicons as UIImage / UIFont in your projects.
* [OcticonsKit ![GitHub Repo Stars](https://img.shields.io/github/stars/keitaoouchi/OcticonsKit) ![GitHub last commit](https://img.shields.io/github/last-commit/keitaoouchi/OcticonsKit)](https://github.com/keitaoouchi/OcticonsKit) - Use Octicons as UIImage / UIFont in your projects.
* [SwiftIconFont ![GitHub Repo Stars](https://img.shields.io/github/stars/segecey/SwiftIconFont) ![GitHub last commit](https://img.shields.io/github/last-commit/segecey/SwiftIconFont)](https://github.com/segecey/SwiftIconFont) - Fontawesome, Iconic, Ionicons, Octicon ports.
* [SwiftIcons ![GitHub Repo Stars](https://img.shields.io/github/stars/ranesr/SwiftIcons) ![GitHub last commit](https://img.shields.io/github/last-commit/ranesr/SwiftIcons)](https://github.com/ranesr/SwiftIcons) - Library for Font Icons: dripicons, emoji, font awesome, icofont, ionicons, linear icons, map icons, material icons, open iconic, state, weather.
* [SwiftUI-FontIcon ![GitHub Repo Stars](https://img.shields.io/github/stars/huybuidac/SwiftUIFontIcon) ![GitHub last commit](https://img.shields.io/github/last-commit/huybuidac/SwiftUIFontIcon)](https://github.com/huybuidac/SwiftUIFontIcon) - Font icons for SwiftUI: font awesome, ionicons, material icons.
* [SYSymbol ![GitHub Repo Stars](https://img.shields.io/github/stars/Nirma/SFSymbol) ![GitHub last commit](https://img.shields.io/github/last-commit/Nirma/SFSymbol)](https://github.com/Nirma/SFSymbol) - All the SFSymbols at your fingertips.
* [UIFontComplete ![GitHub Repo Stars](https://img.shields.io/github/stars/Nirma/UIFontComplete) ![GitHub last commit](https://img.shields.io/github/last-commit/Nirma/UIFontComplete)](https://github.com/Nirma/UIFontComplete) - Font management (System & Custom) for iOS and tvOS.

### Game Engine
[back to top](#readme) 

* [glide engine ![GitHub Repo Stars](https://img.shields.io/github/stars/cocoatoucher/Glide) ![GitHub last commit](https://img.shields.io/github/last-commit/cocoatoucher/Glide)](https://github.com/cocoatoucher/Glide) - SpriteKit and GameplayKit based engine for making 2d games, with practical examples and tutorials.
* [Raylib for Swift ![GitHub Repo Stars](https://img.shields.io/github/stars/STREGAsGate/Raylib) ![GitHub last commit](https://img.shields.io/github/last-commit/STREGAsGate/Raylib)](https://github.com/STREGAsGate/Raylib) :penguin: - A Cross-Platform Swift package for Raylib. Builds Raylib from source so no need to fiddle with libraries. Just add as a dependency in you game package and go!

#### 2D
[back to top](#readme) 

* [ImagineEngine ![GitHub Repo Stars](https://img.shields.io/github/stars/JohnSundell/ImagineEngine) ![GitHub last commit](https://img.shields.io/github/last-commit/JohnSundell/ImagineEngine)](https://github.com/JohnSundell/ImagineEngine) - Blazing fasst 2D gaming engine.

### Games
[back to top](#readme) 

* [FDChessboardView ![GitHub Repo Stars](https://img.shields.io/github/stars/fulldecent/FDChessboardView) ![GitHub last commit](https://img.shields.io/github/last-commit/fulldecent/FDChessboardView)](https://github.com/fulldecent/FDChessboardView) - A view controller for chess boards
* [Sage ![GitHub Repo Stars](https://img.shields.io/github/stars/nvzqz/Sage) ![GitHub last commit](https://img.shields.io/github/last-commit/nvzqz/Sage)](https://github.com/nvzqz/Sage) :penguin: - A cross-platform chess library.

### Gesture
[back to top](#readme) 

* [ShowTime ![GitHub Repo Stars](https://img.shields.io/github/stars/KaneCheshire/ShowTime) ![GitHub last commit](https://img.shields.io/github/last-commit/KaneCheshire/ShowTime)](https://github.com/KaneCheshire/ShowTime) - Show off your iOS taps and gestures for demos and videos with just one line of code.
* [SwiftyGestureRecognition ![GitHub Repo Stars](https://img.shields.io/github/stars/b3ll/SwiftyGestureRecognition) ![GitHub last commit](https://img.shields.io/github/last-commit/b3ll/SwiftyGestureRecognition)](https://github.com/b3ll/SwiftyGestureRecognition) - UIGestureRecognizers in Xcode Playgrounds.
* [SwipyCell ![GitHub Repo Stars](https://img.shields.io/github/stars/moritzsternemann/SwipyCell) ![GitHub last commit](https://img.shields.io/github/last-commit/moritzsternemann/SwipyCell)](https://github.com/moritzsternemann/SwipyCell) - UITableViewCell implementing swiping to trigger actions (known from the Mailbox App).
* [Tactile ![GitHub Repo Stars](https://img.shields.io/github/stars/delba/Tactile) ![GitHub last commit](https://img.shields.io/github/last-commit/delba/Tactile)](https://github.com/delba/Tactile) - A safer and more idiomatic way to respond to gestures and control events.

### Hardware
*A category dedicated to hardware related libs* [back to top](#readme) 


#### 3D Touch
*Easy handle new 3D Touch / Force Touch feature thanks to these libs.* [back to top](#readme) 


#### Bluetooth
*Wrappers around CoreBluetooth* [back to top](#readme) 

* [BlueCap ![GitHub Repo Stars](https://img.shields.io/github/stars/troystribling/BlueCap) ![GitHub last commit](https://img.shields.io/github/last-commit/troystribling/BlueCap)](https://github.com/troystribling/BlueCap) - Wrapper around CoreBluetooth and much more.
* [Bluejay ![GitHub Repo Stars](https://img.shields.io/github/stars/steamclock/bluejay) ![GitHub last commit](https://img.shields.io/github/last-commit/steamclock/bluejay)](https://github.com/steamclock/bluejay) - A simple framework for building reliable Bluetooth LE apps.
* [BluetoothKit ![GitHub Repo Stars](https://img.shields.io/github/stars/rhummelmose/BluetoothKit) ![GitHub last commit](https://img.shields.io/github/last-commit/rhummelmose/BluetoothKit)](https://github.com/rhummelmose/BluetoothKit) - Easily communicate between iOS/OSX devices using BLE.
* [RxBluetoothKit ![GitHub Repo Stars](https://img.shields.io/github/stars/polidea/RxBluetoothKit) ![GitHub last commit](https://img.shields.io/github/last-commit/polidea/RxBluetoothKit)](https://github.com/polidea/RxBluetoothKit) - iOS & OSX Bluetooth library for RxSwift.
* [SwiftyBluetooth ![GitHub Repo Stars](https://img.shields.io/github/stars/jordanebelanger/SwiftyBluetooth) ![GitHub last commit](https://img.shields.io/github/last-commit/jordanebelanger/SwiftyBluetooth)](https://github.com/jordanebelanger/SwiftyBluetooth) - Simple and reliable closure based wrapper around CoreBluetooth.

#### Camera
*Awesome camera libs* [back to top](#readme) 

* [CameraBackground ![GitHub Repo Stars](https://img.shields.io/github/stars/yonat/CameraBackground) ![GitHub last commit](https://img.shields.io/github/last-commit/yonat/CameraBackground)](https://github.com/yonat/CameraBackground) - Show camera layer as a background to any UIView.
* [CameraKit-iOS ![GitHub Repo Stars](https://img.shields.io/github/stars/CameraKit/camerakit-ios) ![GitHub last commit](https://img.shields.io/github/last-commit/CameraKit/camerakit-ios)](https://github.com/CameraKit/camerakit-ios) - Massively increase camera performance and ease of use in your next project.
* [FDTake ![GitHub Repo Stars](https://img.shields.io/github/stars/fulldecent/FDTake) ![GitHub last commit](https://img.shields.io/github/last-commit/fulldecent/FDTake)](https://github.com/fulldecent/FDTake) - Easily take a photo or video or choose from library.
* [Fusuma ![GitHub Repo Stars](https://img.shields.io/github/stars/ytakzk/Fusuma) ![GitHub last commit](https://img.shields.io/github/last-commit/ytakzk/Fusuma)](https://github.com/ytakzk/Fusuma) - Instagram-like photo browser and a camera feature.
* [MediaPicker ![GitHub Repo Stars](https://img.shields.io/github/stars/exyte/mediapicker) ![GitHub last commit](https://img.shields.io/github/last-commit/exyte/mediapicker)](https://github.com/exyte/mediapicker) - SwiftUI customizable media picker - supports camera and gallery with albums
* [NextLevel ![GitHub Repo Stars](https://img.shields.io/github/stars/NextLevel/NextLevel) ![GitHub last commit](https://img.shields.io/github/last-commit/NextLevel/NextLevel)](https://github.com/NextLevel/NextLevel) - Rad Media Capture.

##### Barcode
*Barcode, QR-code, other code readers* [back to top](#readme) 

* [BarcodeScanner ![GitHub Repo Stars](https://img.shields.io/github/stars/hyperoslo/BarcodeScanner) ![GitHub last commit](https://img.shields.io/github/last-commit/hyperoslo/BarcodeScanner)](https://github.com/hyperoslo/BarcodeScanner) - A simple and beautiful barcode scanner view controller.
* [EFQRCode ![GitHub Repo Stars](https://img.shields.io/github/stars/EFPrefix/EFQRCode) ![GitHub last commit](https://img.shields.io/github/last-commit/EFPrefix/EFQRCode)](https://github.com/EFPrefix/EFQRCode) - A better way to operate quick response code.
* [QRCodeReader.swift ![GitHub Repo Stars](https://img.shields.io/github/stars/yannickl/QRCodeReader.swift) ![GitHub last commit](https://img.shields.io/github/last-commit/yannickl/QRCodeReader.swift)](https://github.com/yannickl/QRCodeReader.swift) - Simple QRCode reader.

#### Haptic Feedback
*Libraries that involve the use of Haptic Feedback* [back to top](#readme) 

* [Haptica ![GitHub Repo Stars](https://img.shields.io/github/stars/efremidze/Haptica) ![GitHub last commit](https://img.shields.io/github/last-commit/efremidze/Haptica)](https://github.com/efremidze/Haptica) - Easy Haptic Feedback Generator.

#### iBeacon
*Interested in using iBeacon in your Swift project? Here some interesting resources.* [back to top](#readme) 

* [SwiftLocation ![GitHub Repo Stars](https://img.shields.io/github/stars/malcommac/SwiftLocation) ![GitHub last commit](https://img.shields.io/github/last-commit/malcommac/SwiftLocation)](https://github.com/malcommac/SwiftLocation) - Location & Beacon Monitoring.

#### Sensors
*Manage your device sensors in a faster and easier way* [back to top](#readme) 


### Images
*An interesting list of image related libs..* [back to top](#readme) 

* [Agrume ![GitHub Repo Stars](https://img.shields.io/github/stars/JanGorman/Agrume) ![GitHub last commit](https://img.shields.io/github/last-commit/JanGorman/Agrume)](https://github.com/JanGorman/Agrume) - A lemony fresh iOS image viewer.
* [AlamofireImage ![GitHub Repo Stars](https://img.shields.io/github/stars/Alamofire/AlamofireImage) ![GitHub last commit](https://img.shields.io/github/last-commit/Alamofire/AlamofireImage)](https://github.com/Alamofire/AlamofireImage) - AlamofireImage is an image component library for Alamofire.
* [APNGKit ![GitHub Repo Stars](https://img.shields.io/github/stars/onevcat/APNGKit) ![GitHub last commit](https://img.shields.io/github/last-commit/onevcat/APNGKit)](https://github.com/onevcat/APNGKit) - High performance and delightful way to play with APNG format in iOS.
* [ATGMediaBrowser ![GitHub Repo Stars](https://img.shields.io/github/stars/altayer-digital/ATGMediaBrowser) ![GitHub last commit](https://img.shields.io/github/last-commit/altayer-digital/ATGMediaBrowser)](https://github.com/altayer-digital/ATGMediaBrowser) - Image slide-show viewer with multiple predefined transition styles, and with ability to create new transitions with ease.
* [AXPhotoViewer ![GitHub Repo Stars](https://img.shields.io/github/stars/alexhillc/AXPhotoViewer) ![GitHub last commit](https://img.shields.io/github/last-commit/alexhillc/AXPhotoViewer)](https://github.com/alexhillc/AXPhotoViewer) - An iPhone/iPad photo gallery viewer, useful for viewing a large (or small!) number of photos.
* [BlockiesSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/Boilertalk/BlockiesSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/Boilertalk/BlockiesSwift)](https://github.com/Boilertalk/BlockiesSwift) - Unique blocky identicons/profile picture generator.
* [Brightroom ![GitHub Repo Stars](https://img.shields.io/github/stars/muukii/Brightroom) ![GitHub last commit](https://img.shields.io/github/last-commit/muukii/Brightroom)](https://github.com/muukii/Brightroom) - An image editor and engine using CoreImage.
* [CTPanoramaView ![GitHub Repo Stars](https://img.shields.io/github/stars/scihant/CTPanoramaView) ![GitHub last commit](https://img.shields.io/github/last-commit/scihant/CTPanoramaView)](https://github.com/scihant/CTPanoramaView) - A library that displays spherical or cylindrical panoramas with touch or motion based controls.
* [DTPhotoViewerController ![GitHub Repo Stars](https://img.shields.io/github/stars/tungvoduc/DTPhotoViewerController) ![GitHub last commit](https://img.shields.io/github/last-commit/tungvoduc/DTPhotoViewerController)](https://github.com/tungvoduc/DTPhotoViewerController) - A fully customizable photo viewer ViewController to display single photo or collection of photos, inspired by Facebook photo viewer.
* [FacebookImagePicker ![GitHub Repo Stars](https://img.shields.io/github/stars/floriangbh/FacebookImagePicker) ![GitHub last commit](https://img.shields.io/github/last-commit/floriangbh/FacebookImagePicker)](https://github.com/floriangbh/FacebookImagePicker) - Facebook album photo picker.
* [FaceCrop ![GitHub Repo Stars](https://img.shields.io/github/stars/Ancestry/FaceCrop) ![GitHub last commit](https://img.shields.io/github/last-commit/Ancestry/FaceCrop)](https://github.com/Ancestry/FaceCrop) - Detect and center faces in your images using Apple’s Vision Framework.
* [FlexibleImage ![GitHub Repo Stars](https://img.shields.io/github/stars/kawoou/FlexibleImage) ![GitHub last commit](https://img.shields.io/github/last-commit/kawoou/FlexibleImage)](https://github.com/kawoou/FlexibleImage) - A simple way to play with images.
* [FMPhotoPicker ![GitHub Repo Stars](https://img.shields.io/github/stars/congnd/FMPhotoPicker) ![GitHub last commit](https://img.shields.io/github/last-commit/congnd/FMPhotoPicker)](https://github.com/congnd/FMPhotoPicker) - A modern, simple and zero-dependency photo picker with an elegant and customizable image editor.
* [gifu ![GitHub Repo Stars](https://img.shields.io/github/stars/kaishin/gifu) ![GitHub last commit](https://img.shields.io/github/last-commit/kaishin/gifu)](https://github.com/kaishin/gifu) - Highly performant animated GIF support for iOS.
* [GPUImage 2 ![GitHub Repo Stars](https://img.shields.io/github/stars/BradLarson/GPUImage2) ![GitHub last commit](https://img.shields.io/github/last-commit/BradLarson/GPUImage2)](https://github.com/BradLarson/GPUImage2) - GPUImage 2 is a BSD-licensed framework for GPU-accelerated video and image processing.
* [GPUImage 3 ![GitHub Repo Stars](https://img.shields.io/github/stars/BradLarson/GPUImage3) ![GitHub last commit](https://img.shields.io/github/last-commit/BradLarson/GPUImage3)](https://github.com/BradLarson/GPUImage3) - GPUImage 3 is a BSD-licensed framework for GPU-accelerated video and image processing using Metal.
* [HanekeSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/Haneke/HanekeSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/Haneke/HanekeSwift)](https://github.com/Haneke/HanekeSwift) - A lightweight generic cache for iOS with extra love for images.
* [Harbeth ![GitHub Repo Stars](https://img.shields.io/github/stars/yangKJ/Harbeth) ![GitHub last commit](https://img.shields.io/github/last-commit/yangKJ/Harbeth)](https://github.com/yangKJ/Harbeth) - Metal API for GPU accelerated Graphics and Video and Camera filter framework.
* [ImageDetect ![GitHub Repo Stars](https://img.shields.io/github/stars/Feghal/ImageDetect) ![GitHub last commit](https://img.shields.io/github/last-commit/Feghal/ImageDetect)](https://github.com/Feghal/ImageDetect) - Detect and crop faces, barcodes and texts in image with iOS 11 Vision API.
* [ImageLoader ![GitHub Repo Stars](https://img.shields.io/github/stars/hirohisa/ImageLoaderSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/hirohisa/ImageLoaderSwift)](https://github.com/hirohisa/ImageLoaderSwift) - A lightweight and fast image loader for iOS.
* [ImageScout ![GitHub Repo Stars](https://img.shields.io/github/stars/kaishin/ImageScout) ![GitHub last commit](https://img.shields.io/github/last-commit/kaishin/ImageScout)](https://github.com/kaishin/ImageScout) - Implementation of [fastimage](https://pypi.org/project/fastimage/0.2.1/) - supports PNG, GIF, and JPEG.
* [ImageViewer ![GitHub Repo Stars](https://img.shields.io/github/stars/Krisiacik/ImageViewer) ![GitHub last commit](https://img.shields.io/github/last-commit/Krisiacik/ImageViewer)](https://github.com/Krisiacik/ImageViewer) - An image viewer à la Twitter.
* [ImgixSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/imgix/imgix-swift) ![GitHub last commit](https://img.shields.io/github/last-commit/imgix/imgix-swift)](https://github.com/imgix/imgix-swift) - Easily update image urls to be fast and responsive.
* [JLStickerTextView ![GitHub Repo Stars](https://img.shields.io/github/stars/Textcat/JLStickerTextView) ![GitHub last commit](https://img.shields.io/github/last-commit/Textcat/JLStickerTextView)](https://github.com/Textcat/JLStickerTextView) - A UIImageView allow you to add multiple Label (multiple line text support) on it, you can edit, rotate, resize the Label as you want with one finger ,then render the text on Image.
* [Kanvas ![GitHub Repo Stars](https://img.shields.io/github/stars/tumblr/kanvas-ios) ![GitHub last commit](https://img.shields.io/github/last-commit/tumblr/kanvas-ios)](https://github.com/tumblr/kanvas-ios) - A iOS library for adding effects, drawings, text, stickers, and making GIFs from existing media or the camera.
* [Kingfisher ![GitHub Repo Stars](https://img.shields.io/github/stars/onevcat/Kingfisher) ![GitHub last commit](https://img.shields.io/github/last-commit/onevcat/Kingfisher)](https://github.com/onevcat/Kingfisher) - Image download and caching.
* [LetterAvatarKit ![GitHub Repo Stars](https://img.shields.io/github/stars/vpeschenkov/LetterAvatarKit) ![GitHub last commit](https://img.shields.io/github/last-commit/vpeschenkov/LetterAvatarKit)](https://github.com/vpeschenkov/LetterAvatarKit) - A UIImage extension that generates letter-based avatars.
* [Lightbox ![GitHub Repo Stars](https://img.shields.io/github/stars/hyperoslo/Lightbox) ![GitHub last commit](https://img.shields.io/github/last-commit/hyperoslo/Lightbox)](https://github.com/hyperoslo/Lightbox) - A convenient and easy to use image viewer for your iOS app.
* [MapleBacon ![GitHub Repo Stars](https://img.shields.io/github/stars/JanGorman/MapleBacon) ![GitHub last commit](https://img.shields.io/github/last-commit/JanGorman/MapleBacon)](https://github.com/JanGorman/MapleBacon) - Image download and caching library.
* [MCScratchImageView ![GitHub Repo Stars](https://img.shields.io/github/stars/Minecodecraft/MCScratchImageView) ![GitHub last commit](https://img.shields.io/github/last-commit/Minecodecraft/MCScratchImageView)](https://github.com/Minecodecraft/MCScratchImageView) - A custom ImageView that is used to cover the surface of other view like a scratch card, user can swipe the mulch to see the view below.
* [Moa ![GitHub Repo Stars](https://img.shields.io/github/stars/evgenyneu/moa) ![GitHub last commit](https://img.shields.io/github/last-commit/evgenyneu/moa)](https://github.com/evgenyneu/moa) - An image download extension of the image view for iOS, tvOS and macOS.
* [Nuke ![GitHub Repo Stars](https://img.shields.io/github/stars/kean/Nuke) ![GitHub last commit](https://img.shields.io/github/last-commit/kean/Nuke)](https://github.com/kean/Nuke) - Advanced framework for loading, caching, processing, displaying and preheating images.
* [PassportScanner ![GitHub Repo Stars](https://img.shields.io/github/stars/evermeer/PassportScanner) ![GitHub last commit](https://img.shields.io/github/last-commit/evermeer/PassportScanner)](https://github.com/evermeer/PassportScanner) - Scan the MRZ code of a passport and extract the first name, last name, passport number, nationality, date of birth, expiration date and personal number.
* [Rough ![GitHub Repo Stars](https://img.shields.io/github/stars/bakhtiyork/Rough) ![GitHub last commit](https://img.shields.io/github/last-commit/bakhtiyork/Rough)](https://github.com/bakhtiyork/Rough) - Rough lets you draw in a sketchy, hand-drawn-like, style.
* [Sharaku ![GitHub Repo Stars](https://img.shields.io/github/stars/makomori/Sharaku) ![GitHub last commit](https://img.shields.io/github/last-commit/makomori/Sharaku)](https://github.com/makomori/Sharaku) - Image filtering UI library like Instagram.
* [Snowflake ![GitHub Repo Stars](https://img.shields.io/github/stars/onmyway133/Snowflake) ![GitHub last commit](https://img.shields.io/github/last-commit/onmyway133/Snowflake)](https://github.com/onmyway133/Snowflake) - Work with SVG.
* [SwiftDraw ![GitHub Repo Stars](https://img.shields.io/github/stars/swhitty/SwiftDraw) ![GitHub last commit](https://img.shields.io/github/last-commit/swhitty/SwiftDraw)](https://github.com/swhitty/SwiftDraw) - Library that converts SVG images to UIImage, NSImage and generates CoreGraphics source code.
* [SwiftGen-Assets ![GitHub Repo Stars](https://img.shields.io/github/stars/SwiftGen/SwiftGen) ![GitHub last commit](https://img.shields.io/github/last-commit/SwiftGen/SwiftGen)](https://github.com/SwiftGen/SwiftGen#assets-catalogs) - A tool to auto-generate `enums` for all your `UIImages` from your Assets Catalogs.
* [SwiftSVG ![GitHub Repo Stars](https://img.shields.io/github/stars/mchoe/SwiftSVG) ![GitHub last commit](https://img.shields.io/github/last-commit/mchoe/SwiftSVG)](https://github.com/mchoe/SwiftSVG) - A single pass SVG parser with multiple interface options (String, NS/UIBezierPath, CAShapeLayer, and NS/UIView).
* [SwiftWebImage ![GitHub Repo Stars](https://img.shields.io/github/stars/geekaurora/SwiftWebImage) ![GitHub last commit](https://img.shields.io/github/last-commit/geekaurora/SwiftWebImage)](https://github.com/geekaurora/SwiftWebImage) - 🚀SwiftUI Image downloader with performant LRU mem/disk cache.
* [SwiftyGif ![GitHub Repo Stars](https://img.shields.io/github/stars/kirualex/SwiftyGif) ![GitHub last commit](https://img.shields.io/github/last-commit/kirualex/SwiftyGif)](https://github.com/kirualex/SwiftyGif) - High performance GIF engine.
* [TinyCrayon ![GitHub Repo Stars](https://img.shields.io/github/stars/TinyCrayon/TinyCrayon-iOS-SDK) ![GitHub last commit](https://img.shields.io/github/last-commit/TinyCrayon/TinyCrayon-iOS-SDK)](https://github.com/TinyCrayon/TinyCrayon-iOS-SDK) - A smart and easy-to-use image masking and cutout SDK for mobile apps.
* [Toucan ![GitHub Repo Stars](https://img.shields.io/github/stars/gavinbunney/Toucan) ![GitHub last commit](https://img.shields.io/github/last-commit/gavinbunney/Toucan)](https://github.com/gavinbunney/Toucan) - Image processing api.
* [UIImageColors ![GitHub Repo Stars](https://img.shields.io/github/stars/jathu/UIImageColors) ![GitHub last commit](https://img.shields.io/github/last-commit/jathu/UIImageColors)](https://github.com/jathu/UIImageColors) - iTunes style color fetcher for UIImage.
* [YPImagePicker ![GitHub Repo Stars](https://img.shields.io/github/stars/Yummypets/YPImagePicker) ![GitHub last commit](https://img.shields.io/github/last-commit/Yummypets/YPImagePicker)](https://github.com/Yummypets/YPImagePicker) - Instagram-like image picker & filters for iOS.
* [ZImageCropper ![GitHub Repo Stars](https://img.shields.io/github/stars/ZaidPathan/ZImageCropper) ![GitHub last commit](https://img.shields.io/github/last-commit/ZaidPathan/ZImageCropper)](https://github.com/ZaidPathan/ZImageCropper) - Crop image in any shape.

### Key Value Coding
*Libraries for key-value coding* [back to top](#readme) 


### Keyboard
*Do you want to create your own customized keyboard? Here are some interesting resources* [back to top](#readme) 

* [IHKeyboardAvoiding ![GitHub Repo Stars](https://img.shields.io/github/stars/IdleHandsApps/IHKeyboardAvoiding) ![GitHub last commit](https://img.shields.io/github/last-commit/IdleHandsApps/IHKeyboardAvoiding)](https://github.com/IdleHandsApps/IHKeyboardAvoiding) - An elegant solution for keeping any UIView visible when the keyboard is being shown. No UIScrollView required.
* [IQKeyboardManager ![GitHub Repo Stars](https://img.shields.io/github/stars/hackiftekhar/IQKeyboardManager) ![GitHub last commit](https://img.shields.io/github/last-commit/hackiftekhar/IQKeyboardManager)](https://github.com/hackiftekhar/IQKeyboardManager) - Codeless drop-in universal library allows to prevent issues of keyboard sliding up and cover UITextField/UITextView.
* [ISEmojiView ![GitHub Repo Stars](https://img.shields.io/github/stars/isaced/ISEmojiView) ![GitHub last commit](https://img.shields.io/github/last-commit/isaced/ISEmojiView)](https://github.com/isaced/ISEmojiView) - Emoji Keyboard for iOS
* [KeyboardHideManager ![GitHub Repo Stars](https://img.shields.io/github/stars/bonyadmitr/KeyboardHideManager) ![GitHub last commit](https://img.shields.io/github/last-commit/bonyadmitr/KeyboardHideManager)](https://github.com/bonyadmitr/KeyboardHideManager) - Codeless manager to hide keyboard by tapping on views for iOS.
* [KeyboardShortcuts ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/KeyboardShortcuts) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/KeyboardShortcuts)](https://github.com/sindresorhus/KeyboardShortcuts) - Add user-customizable global keyboard shortcuts to your macOS app. Includes a Cocoa and SwiftUI component.
* [Ribbon ![GitHub Repo Stars](https://img.shields.io/github/stars/chriszielinski/Ribbon) ![GitHub last commit](https://img.shields.io/github/last-commit/chriszielinski/Ribbon)](https://github.com/chriszielinski/Ribbon) - 🎀 A simple cross-platform toolbar/custom input accessory view library for iOS & macOS.
* [Typist ![GitHub Repo Stars](https://img.shields.io/github/stars/totocaster/Typist) ![GitHub last commit](https://img.shields.io/github/last-commit/totocaster/Typist)](https://github.com/totocaster/Typist) - Small, drop-in UIKit keyboard manager for iOS apps-helps manage keyboard's screen presence and behavior without notification center.

### Kit
*Libraries for coding with a simplified API* [back to top](#readme) 

* [BFKit-Swift ![GitHub Repo Stars](https://img.shields.io/github/stars/FabrizioBrancati/BFKit-Swift) ![GitHub last commit](https://img.shields.io/github/last-commit/FabrizioBrancati/BFKit-Swift)](https://github.com/FabrizioBrancati/BFKit-Swift) :penguin: - A collection of useful classes, structs and extensions to develop Apps faster.
* [C4iOS ![GitHub Repo Stars](https://img.shields.io/github/stars/C4Labs/C4iOS) ![GitHub last commit](https://img.shields.io/github/last-commit/C4Labs/C4iOS)](https://github.com/C4Labs/C4iOS) - Harnesses the power of native iOS programming with a simplified API.

### Layout
*Libs to help you with layout.* [back to top](#readme) 

* [AnimatedTabBar ![GitHub Repo Stars](https://img.shields.io/github/stars/exyte/AnimatedTabBar) ![GitHub last commit](https://img.shields.io/github/last-commit/exyte/AnimatedTabBar)](https://github.com/exyte/AnimatedTabBar) - A tabbar with a number of preset animations.
* [BrickKit ![GitHub Repo Stars](https://img.shields.io/github/stars/wayfair-archive/brickkit-ios) ![GitHub last commit](https://img.shields.io/github/last-commit/wayfair-archive/brickkit-ios)](https://github.com/wayfair-archive/brickkit-ios) - Create complex and responsive layouts in a simple way.
* [CGLayout ![GitHub Repo Stars](https://img.shields.io/github/stars/k-o-d-e-n/CGLayout) ![GitHub last commit](https://img.shields.io/github/last-commit/k-o-d-e-n/CGLayout)](https://github.com/k-o-d-e-n/CGLayout) :penguin: - Powerful autolayout framework, that can manage UIView(NSView), CALayer, not rendered views and etc. Provides placeholders.
* [FlexLayout ![GitHub Repo Stars](https://img.shields.io/github/stars/layoutBox/FlexLayout) ![GitHub last commit](https://img.shields.io/github/last-commit/layoutBox/FlexLayout)](https://github.com/layoutBox/FlexLayout) - Nice and clean interface to the highly optimized Facebook yoga Flexbox implementation.
* [Grid ![GitHub Repo Stars](https://img.shields.io/github/stars/exyte/Grid) ![GitHub last commit](https://img.shields.io/github/last-commit/exyte/Grid)](https://github.com/exyte/Grid) - The most powerful Grid container missed in SwiftUI.
* [LayoutLess ![GitHub Repo Stars](https://img.shields.io/github/stars/DeclarativeHub/Layoutless) ![GitHub last commit](https://img.shields.io/github/last-commit/DeclarativeHub/Layoutless)](https://github.com/DeclarativeHub/Layoutless) - Write less UI Code.
* [Neon ![GitHub Repo Stars](https://img.shields.io/github/stars/mamaral/Neon) ![GitHub last commit](https://img.shields.io/github/last-commit/mamaral/Neon)](https://github.com/mamaral/Neon) - A powerful programmatic UI layout framework.
* [PinLayout ![GitHub Repo Stars](https://img.shields.io/github/stars/layoutBox/PinLayout) ![GitHub last commit](https://img.shields.io/github/last-commit/layoutBox/PinLayout)](https://github.com/layoutBox/PinLayout) - Fast Views layouting without auto layout. No magic, pure code, full control and blazing fast. Concise syntax, intuitive, readable & chainable. [iOS/macOS/tvOS]
* [Scaling Header Scroll View ![GitHub Repo Stars](https://img.shields.io/github/stars/exyte/ScalingHeaderScrollView) ![GitHub last commit](https://img.shields.io/github/last-commit/exyte/ScalingHeaderScrollView)](https://github.com/exyte/ScalingHeaderScrollView) - A scroll view with a sticky header which shrinks as you scroll. Written with SwiftUI.
* [Static ![GitHub Repo Stars](https://img.shields.io/github/stars/venmo/Static) ![GitHub last commit](https://img.shields.io/github/last-commit/venmo/Static)](https://github.com/venmo/Static) - A simple static table views for iOS.
* [Stevia ![GitHub Repo Stars](https://img.shields.io/github/stars/freshOS/Stevia) ![GitHub last commit](https://img.shields.io/github/last-commit/freshOS/Stevia)](https://github.com/freshOS/Stevia) - Elegant view layout for iOS.

#### Auto Layout
*Bored of using storyboard? Give a try to declarative auto layout libs.* [back to top](#readme) 

* [Bamboo ![GitHub Repo Stars](https://img.shields.io/github/stars/wordlessj/Bamboo) ![GitHub last commit](https://img.shields.io/github/last-commit/wordlessj/Bamboo)](https://github.com/wordlessj/Bamboo) - Auto Layout (and manual layout) in one line.
* [Cartography ![GitHub Repo Stars](https://img.shields.io/github/stars/robb/Cartography) ![GitHub last commit](https://img.shields.io/github/last-commit/robb/Cartography)](https://github.com/robb/Cartography) - Declarative auto layout lib for your project.
* [Cassowary ![GitHub Repo Stars](https://img.shields.io/github/stars/tribalworldwidelondon/CassowarySwift) ![GitHub last commit](https://img.shields.io/github/last-commit/tribalworldwidelondon/CassowarySwift)](https://github.com/tribalworldwidelondon/CassowarySwift) - A linear constraint solving library using the same algorithm as AutoLayout.
* [Cupcake ![GitHub Repo Stars](https://img.shields.io/github/stars/nerdycat/Cupcake) ![GitHub last commit](https://img.shields.io/github/last-commit/nerdycat/Cupcake)](https://github.com/nerdycat/Cupcake) - An easy way to create and layout UI components for iOS.
* [DeviceLayout ![GitHub Repo Stars](https://img.shields.io/github/stars/cruisediary/DeviceLayout) ![GitHub last commit](https://img.shields.io/github/last-commit/cruisediary/DeviceLayout)](https://github.com/cruisediary/DeviceLayout) - AutoLayout can be set differently for each device.
* [EasyPeasy ![GitHub Repo Stars](https://img.shields.io/github/stars/nakiostudio/EasyPeasy) ![GitHub last commit](https://img.shields.io/github/last-commit/nakiostudio/EasyPeasy)](https://github.com/nakiostudio/EasyPeasy) - Auto Layout made easy.
* [EasySwiftLayout ![GitHub Repo Stars](https://img.shields.io/github/stars/Pimine/EasySwiftLayout) ![GitHub last commit](https://img.shields.io/github/last-commit/Pimine/EasySwiftLayout)](https://github.com/Pimine/EasySwiftLayout) - Lightweight Swift framework for Apple's Auto-Layout.
* [EZLayout ![GitHub Repo Stars](https://img.shields.io/github/stars/alexliubj/EZAnchor) ![GitHub last commit](https://img.shields.io/github/last-commit/alexliubj/EZAnchor)](https://github.com/alexliubj/EZAnchor) - An easier and faster way to code Autolayout.
* [HypeUI ![GitHub Repo Stars](https://img.shields.io/github/stars/hyperconnect/HypeUI) ![GitHub last commit](https://img.shields.io/github/last-commit/hyperconnect/HypeUI)](https://github.com/hyperconnect/HypeUI) - 🌺 HypeUI is a implementation of Apple's SwiftUI DSL style based on UIKit
* [KVConstraintKit ![GitHub Repo Stars](https://img.shields.io/github/stars/keshavvishwkarma/KVConstraintKit) ![GitHub last commit](https://img.shields.io/github/last-commit/keshavvishwkarma/KVConstraintKit)](https://github.com/keshavvishwkarma/KVConstraintKit) - An Impressive Autolayout DSL for iOS, tvOS & OSX.
* [MisterFusion ![GitHub Repo Stars](https://img.shields.io/github/stars/marty-suzuki/MisterFusion) ![GitHub last commit](https://img.shields.io/github/last-commit/marty-suzuki/MisterFusion)](https://github.com/marty-suzuki/MisterFusion) - DSL for AutoLayout, supports Size Class.
* [Mortar ![GitHub Repo Stars](https://img.shields.io/github/stars/jmfieldman/Mortar) ![GitHub last commit](https://img.shields.io/github/last-commit/jmfieldman/Mortar)](https://github.com/jmfieldman/Mortar) - A concise but flexible DSL for creating Auto Layout constraints and adding subviews.
* [NorthLayout ![GitHub Repo Stars](https://img.shields.io/github/stars/banjun/NorthLayout) ![GitHub last commit](https://img.shields.io/github/last-commit/banjun/NorthLayout)](https://github.com/banjun/NorthLayout) - Fast path to layout using Visual Format Language (VFL) with extended syntax.
* [PureLayout ![GitHub Repo Stars](https://img.shields.io/github/stars/PureLayout/PureLayout) ![GitHub last commit](https://img.shields.io/github/last-commit/PureLayout/PureLayout)](https://github.com/PureLayout/PureLayout) - The ultimate API for iOS & OS X Auto Layout.
* [SnapKit ![GitHub Repo Stars](https://img.shields.io/github/stars/SnapKit/SnapKit) ![GitHub last commit](https://img.shields.io/github/last-commit/SnapKit/SnapKit)](https://github.com/SnapKit/SnapKit) - Autolayout DSL for iOS & OS X.
* [Swiftstraints ![GitHub Repo Stars](https://img.shields.io/github/stars/Skyvive/Swiftstraints) ![GitHub last commit](https://img.shields.io/github/last-commit/Skyvive/Swiftstraints)](https://github.com/Skyvive/Swiftstraints) - Powerful auto-layout framework that lets you write constraints in one line of code.
* [TinyConstraints ![GitHub Repo Stars](https://img.shields.io/github/stars/roberthein/TinyConstraints) ![GitHub last commit](https://img.shields.io/github/last-commit/roberthein/TinyConstraints)](https://github.com/roberthein/TinyConstraints) - TinyConstraints is the syntactic sugar that makes Auto Layout sweeter for human use.

### Localization
*Frameworks that helps with localizing your app* [back to top](#readme) 

* [BartyCrouch ![GitHub Repo Stars](https://img.shields.io/github/stars/FlineDev/BartyCrouch) ![GitHub last commit](https://img.shields.io/github/last-commit/FlineDev/BartyCrouch)](https://github.com/FlineDev/BartyCrouch) - Incrementally update/translate your Strings files from Code and Storyboards/XIBs.
* [CrowdinSDK ![GitHub Repo Stars](https://img.shields.io/github/stars/crowdin/mobile-sdk-ios) ![GitHub last commit](https://img.shields.io/github/last-commit/crowdin/mobile-sdk-ios)](https://github.com/crowdin/mobile-sdk-ios) - Delivers all new translations from Crowdin project to the application immediately.
* [IBLocalizable ![GitHub Repo Stars](https://img.shields.io/github/stars/PiXeL16/IBLocalizable) ![GitHub last commit](https://img.shields.io/github/last-commit/PiXeL16/IBLocalizable)](https://github.com/PiXeL16/IBLocalizable) - Localize your views directly in Interface Builder with IBLocalizable.
* [L10n-swift ![GitHub Repo Stars](https://img.shields.io/github/stars/Decybel07/L10n-swift) ![GitHub last commit](https://img.shields.io/github/last-commit/Decybel07/L10n-swift)](https://github.com/Decybel07/L10n-swift) - Localization of an application with ability to change language "on the fly" and support for plural forms in any language.
* [LocalizationKit ![GitHub Repo Stars](https://img.shields.io/github/stars/willpowell8/LocalizationKit_iOS) ![GitHub last commit](https://img.shields.io/github/last-commit/willpowell8/LocalizationKit_iOS)](https://github.com/willpowell8/LocalizationKit_iOS) - Realtime dynamic localization of your app with remote management so you can manage maintain and deploy translations without resubmitting app.
* [Localize ![GitHub Repo Stars](https://img.shields.io/github/stars/andresilvagomez/Localize) ![GitHub last commit](https://img.shields.io/github/last-commit/andresilvagomez/Localize)](https://github.com/andresilvagomez/Localize) - Localize apps using e.g. regular expressions in Localizable.strings.
* [Localize-Swift ![GitHub Repo Stars](https://img.shields.io/github/stars/marmelroy/Localize-Swift) ![GitHub last commit](https://img.shields.io/github/last-commit/marmelroy/Localize-Swift)](https://github.com/marmelroy/Localize-Swift) - Localize apps using e.g. regular expressions in Localizable.strings.
* [Locheck ![GitHub Repo Stars](https://img.shields.io/github/stars/Asana/locheck) ![GitHub last commit](https://img.shields.io/github/last-commit/Asana/locheck)](https://github.com/Asana/locheck) - Validate .strings and .stringsdict files for errors
* [SwiftGen-L10n ![GitHub Repo Stars](https://img.shields.io/github/stars/SwiftGen/SwiftGen) ![GitHub last commit](https://img.shields.io/github/last-commit/SwiftGen/SwiftGen)](https://github.com/SwiftGen/SwiftGen#localizablestrings) - A tool to auto-generate `enums` for all your Localizable.strings keys (with appropriate associated values if those strings contains printf-format placeholders like `%@`).
* [Translatio ![GitHub Repo Stars](https://img.shields.io/github/stars/andrealufino/Translatio) ![GitHub last commit](https://img.shields.io/github/last-commit/andrealufino/Translatio)](https://github.com/andrealufino/Translatio) - Super lightweight library that helps you to localize strings, even directly in storyboards.

### Location
[back to top](#readme) 

* [AsyncLocationKit ![GitHub Repo Stars](https://img.shields.io/github/stars/AsyncSwift/AsyncLocationKit) ![GitHub last commit](https://img.shields.io/github/last-commit/AsyncSwift/AsyncLocationKit)](https://github.com/AsyncSwift/AsyncLocationKit) - Wrapper for Apple CoreLocation framework with Modern Concurrency Swift (async/await).
* [STLocationRequest ![GitHub Repo Stars](https://img.shields.io/github/stars/SvenTiigi/STLocationRequest) ![GitHub last commit](https://img.shields.io/github/last-commit/SvenTiigi/STLocationRequest)](https://github.com/SvenTiigi/STLocationRequest) - An elegant and simple 3D Flyover Location Request Screen.

### Logging
*Utilities for writing to and reading from the device log* [back to top](#readme) 

* [AEConsole ![GitHub Repo Stars](https://img.shields.io/github/stars/tadija/AEConsole) ![GitHub last commit](https://img.shields.io/github/last-commit/tadija/AEConsole)](https://github.com/tadija/AEConsole) - Customizable Console UI overlay with debug log on top of your iOS App.
* [CleanroomLogger ![GitHub Repo Stars](https://img.shields.io/github/stars/emaloney/CleanroomLogger) ![GitHub last commit](https://img.shields.io/github/last-commit/emaloney/CleanroomLogger)](https://github.com/emaloney/CleanroomLogger) - Configurable and extensible high-level logging API that is simple, lightweight and performant.
* [Duration ![GitHub Repo Stars](https://img.shields.io/github/stars/SwiftStudies/Duration) ![GitHub last commit](https://img.shields.io/github/last-commit/SwiftStudies/Duration)](https://github.com/SwiftStudies/Duration) :penguin: - Lightweight logging library focused on reporting timings for operations.
* [Gedatsu ![GitHub Repo Stars](https://img.shields.io/github/stars/bannzai/gedatsu) ![GitHub last commit](https://img.shields.io/github/last-commit/bannzai/gedatsu)](https://github.com/bannzai/gedatsu) - Provide readable format about AutoLayout error console log.
* [HeliumLogger ![GitHub Repo Stars](https://img.shields.io/github/stars/Kitura/HeliumLogger) ![GitHub last commit](https://img.shields.io/github/last-commit/Kitura/HeliumLogger)](https://github.com/Kitura/HeliumLogger) :penguin: - IBM's lightweight logging framework.
* [Printer ![GitHub Repo Stars](https://img.shields.io/github/stars/hemangshah/printer) ![GitHub last commit](https://img.shields.io/github/last-commit/hemangshah/printer)](https://github.com/hemangshah/printer) - A fancy logger for your next app.
* [Puppy ![GitHub Repo Stars](https://img.shields.io/github/stars/sushichop/Puppy) ![GitHub last commit](https://img.shields.io/github/last-commit/sushichop/Puppy)](https://github.com/sushichop/Puppy) :penguin: - A flexible logging library that supports multiple transports and platforms.
* [QorumLogs ![GitHub Repo Stars](https://img.shields.io/github/stars/Esqarrouth/QorumLogs) ![GitHub last commit](https://img.shields.io/github/last-commit/Esqarrouth/QorumLogs)](https://github.com/Esqarrouth/QorumLogs) - Logging Utility for Xcode & Google Docs.
* [Rainbow ![GitHub Repo Stars](https://img.shields.io/github/stars/onevcat/Rainbow) ![GitHub last commit](https://img.shields.io/github/last-commit/onevcat/Rainbow)](https://github.com/onevcat/Rainbow) :penguin: - Delightful console output.
* [SwiftyBeaver ![GitHub Repo Stars](https://img.shields.io/github/stars/SwiftyBeaver/SwiftyBeaver) ![GitHub last commit](https://img.shields.io/github/last-commit/SwiftyBeaver/SwiftyBeaver)](https://github.com/SwiftyBeaver/SwiftyBeaver) :penguin: - Multi-platform logging during development & release.
* [TinyConsole ![GitHub Repo Stars](https://img.shields.io/github/stars/Cosmo/TinyConsole) ![GitHub last commit](https://img.shields.io/github/last-commit/Cosmo/TinyConsole)](https://github.com/Cosmo/TinyConsole) - A tiny log console to display information while using your iOS app.
* [TraceLog ![GitHub Repo Stars](https://img.shields.io/github/stars/tonystone/tracelog) ![GitHub last commit](https://img.shields.io/github/last-commit/tonystone/tracelog)](https://github.com/tonystone/tracelog) :penguin: - Dead Simple: logging the way it's meant to be!  Runs on iOS, macOS, and Linux.
* [Watchdog ![GitHub Repo Stars](https://img.shields.io/github/stars/wojteklu/Watchdog) ![GitHub last commit](https://img.shields.io/github/last-commit/wojteklu/Watchdog)](https://github.com/wojteklu/Watchdog) - Utility for logging excessive blocking on the main thread.
* [WatchdogInspector ![GitHub Repo Stars](https://img.shields.io/github/stars/tapwork/WatchdogInspector) ![GitHub last commit](https://img.shields.io/github/last-commit/tapwork/WatchdogInspector)](https://github.com/tapwork/WatchdogInspector) - A logging tool to show the current framerate (fps) in the status bar of your iOS app.
* [Willow ![GitHub Repo Stars](https://img.shields.io/github/stars/Nike-Inc/Willow) ![GitHub last commit](https://img.shields.io/github/last-commit/Nike-Inc/Willow)](https://github.com/Nike-Inc/Willow) - Willow is a powerful, yet lightweight logging library.
* [XCGLogger ![GitHub Repo Stars](https://img.shields.io/github/stars/DaveWoodCom/XCGLogger) ![GitHub last commit](https://img.shields.io/github/last-commit/DaveWoodCom/XCGLogger)](https://github.com/DaveWoodCom/XCGLogger) - Full featured & Configurable logging utility with log levels, timestamps, and line numbers.

### Maps
[back to top](#readme) 

* [Cluster ![GitHub Repo Stars](https://img.shields.io/github/stars/efremidze/Cluster) ![GitHub last commit](https://img.shields.io/github/last-commit/efremidze/Cluster)](https://github.com/efremidze/Cluster) - Easy Map Annotation Clustering.
* [FlyoverKit ![GitHub Repo Stars](https://img.shields.io/github/stars/SvenTiigi/FlyoverKit) ![GitHub last commit](https://img.shields.io/github/last-commit/SvenTiigi/FlyoverKit)](https://github.com/SvenTiigi/FlyoverKit) - FlyoverKit enables you to present stunning 360° flyover views on your MKMapView with zero effort while maintaining full configuration possibilities.
* [GEOSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/GEOSwift/GEOSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/GEOSwift/GEOSwift)](https://github.com/GEOSwift/GEOSwift) - Make it easier to work with geographic models and calculate intersections, overlapping, projections etc.
* [LocoKit ![GitHub Repo Stars](https://img.shields.io/github/stars/sobri909/LocoKit) ![GitHub last commit](https://img.shields.io/github/last-commit/sobri909/LocoKit)](https://github.com/sobri909/LocoKit) - A location and activity recording framework for iOS.

### Math
[back to top](#readme) 

* [Arithmosophi ![GitHub Repo Stars](https://img.shields.io/github/stars/phimage/Arithmosophi) ![GitHub last commit](https://img.shields.io/github/last-commit/phimage/Arithmosophi)](https://github.com/phimage/Arithmosophi) - Set of protocols for Arithmetic and Logical operations.
* [BigInt ![GitHub Repo Stars](https://img.shields.io/github/stars/attaswift/BigInt) ![GitHub last commit](https://img.shields.io/github/last-commit/attaswift/BigInt)](https://github.com/attaswift/BigInt) - Arbitrary-precision arithmetic.
* [DDMathParser ![GitHub Repo Stars](https://img.shields.io/github/stars/davedelong/DDMathParser) ![GitHub last commit](https://img.shields.io/github/last-commit/davedelong/DDMathParser)](https://github.com/davedelong/DDMathParser) - DDMathParser makes it easy to parse a String and evaluate it as a mathematical expression.
* [SigmaSwiftStatistics ![GitHub Repo Stars](https://img.shields.io/github/stars/evgenyneu/SigmaSwiftStatistics) ![GitHub last commit](https://img.shields.io/github/last-commit/evgenyneu/SigmaSwiftStatistics)](https://github.com/evgenyneu/SigmaSwiftStatistics) - A collection of functions for statistical calculation.
* [Upsurge ![GitHub Repo Stars](https://img.shields.io/github/stars/alejandro-isaza/Upsurge) ![GitHub last commit](https://img.shields.io/github/last-commit/alejandro-isaza/Upsurge)](https://github.com/alejandro-isaza/Upsurge) - Simple and fast matrix and vector math.

### Natural Language Processing
[back to top](#readme) 


### Network
*A list of libs that allow you to decrease the amount of time spent dealing with http requests.* [back to top](#readme) 

* [Alamofire ![GitHub Repo Stars](https://img.shields.io/github/stars/Alamofire/Alamofire) ![GitHub last commit](https://img.shields.io/github/last-commit/Alamofire/Alamofire)](https://github.com/Alamofire/Alamofire) :penguin: - Elegant networking.
* [APIKit ![GitHub Repo Stars](https://img.shields.io/github/stars/ishkawa/APIKit) ![GitHub last commit](https://img.shields.io/github/last-commit/ishkawa/APIKit)](https://github.com/ishkawa/APIKit) - Library for building type-safe web API client.
* [Ciao ![GitHub Repo Stars](https://img.shields.io/github/stars/AlTavares/Ciao) ![GitHub last commit](https://img.shields.io/github/last-commit/AlTavares/Ciao)](https://github.com/AlTavares/Ciao) - Publish and discover services using mDNS (Bonjour, Zeroconf).
* [CodyFire ![GitHub Repo Stars](https://img.shields.io/github/stars/CodyFlame/CodyFire) ![GitHub last commit](https://img.shields.io/github/last-commit/CodyFlame/CodyFire)](https://github.com/CodyFlame/CodyFire) - Powerful Codable API requests builder and manager for iOS. Based on Alamofire.
* [Conduit ![GitHub Repo Stars](https://img.shields.io/github/stars/mindbody/Conduit) ![GitHub last commit](https://img.shields.io/github/last-commit/mindbody/Conduit)](https://github.com/mindbody/Conduit) - Robust networking for web APIs.
* [Connectivity ![GitHub Repo Stars](https://img.shields.io/github/stars/rwbutler/Connectivity) ![GitHub last commit](https://img.shields.io/github/last-commit/rwbutler/Connectivity)](https://github.com/rwbutler/Connectivity) - 🌐 Makes Internet connectivity detection more robust by detecting Wi-Fi networks without Internet access.
* [Dots ![GitHub Repo Stars](https://img.shields.io/github/stars/iAmrSalman/Dots) ![GitHub last commit](https://img.shields.io/github/last-commit/iAmrSalman/Dots)](https://github.com/iAmrSalman/Dots) - Lightweight Concurrent Networking Framework.
* [GoodNetworking ![GitHub Repo Stars](https://img.shields.io/github/stars/GoodRequest/GoodNetworking) ![GitHub last commit](https://img.shields.io/github/last-commit/GoodRequest/GoodNetworking)](https://github.com/GoodRequest/GoodNetworking) - 📡 GoodNetworking simplifies HTTP networking.
* [Heimdallr.swift ![GitHub Repo Stars](https://img.shields.io/github/stars/trivago/Heimdallr.swift) ![GitHub last commit](https://img.shields.io/github/last-commit/trivago/Heimdallr.swift)](https://github.com/trivago/Heimdallr.swift) - Easy to use OAuth 2 library for iOS.
* [Just ![GitHub Repo Stars](https://img.shields.io/github/stars/dduan/Just) ![GitHub last commit](https://img.shields.io/github/last-commit/dduan/Just)](https://github.com/dduan/Just) :penguin: - HTTP for Humans (a python-requests style HTTP library).
* [Malibu ![GitHub Repo Stars](https://img.shields.io/github/stars/hyperoslo/Malibu) ![GitHub last commit](https://img.shields.io/github/last-commit/hyperoslo/Malibu)](https://github.com/hyperoslo/Malibu) - A networking library built on promises.
* [Moya ![GitHub Repo Stars](https://img.shields.io/github/stars/Moya/Moya) ![GitHub last commit](https://img.shields.io/github/last-commit/Moya/Moya)](https://github.com/Moya/Moya) - Network abstraction layer.
* [MultiPeer ![GitHub Repo Stars](https://img.shields.io/github/stars/dingwilson/MultiPeer) ![GitHub last commit](https://img.shields.io/github/last-commit/dingwilson/MultiPeer)](https://github.com/dingwilson/MultiPeer) - A wrapper for the MultipeerConnectivity framework for automatic offline data transmission between devices.
* [Netfox ![GitHub Repo Stars](https://img.shields.io/github/stars/kasketis/netfox) ![GitHub last commit](https://img.shields.io/github/last-commit/kasketis/netfox)](https://github.com/kasketis/netfox) - A lightweight, one line setup, network debugging library.
* [Netswift ![GitHub Repo Stars](https://img.shields.io/github/stars/MrSkwiggs/Netswift) ![GitHub last commit](https://img.shields.io/github/last-commit/MrSkwiggs/Netswift)](https://github.com/MrSkwiggs/Netswift) - A type-safe, high-level networking solution.
* [OAuth2 ![GitHub Repo Stars](https://img.shields.io/github/stars/p2/OAuth2) ![GitHub last commit](https://img.shields.io/github/last-commit/p2/OAuth2)](https://github.com/p2/OAuth2) - oauth2 auth lib.
* [OAuthSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/OAuthSwift/OAuthSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/OAuthSwift/OAuthSwift)](https://github.com/OAuthSwift/OAuthSwift) - OAuth library for iOS.
* [Pitaya ![GitHub Repo Stars](https://img.shields.io/github/stars/johnlui/Pitaya) ![GitHub last commit](https://img.shields.io/github/last-commit/johnlui/Pitaya)](https://github.com/johnlui/Pitaya) :penguin: - HTTP / HTTPS networking library just incidentally execute on machines.
* [PMHTTP ![GitHub Repo Stars](https://img.shields.io/github/stars/postmates/PMHTTP) ![GitHub last commit](https://img.shields.io/github/last-commit/postmates/PMHTTP)](https://github.com/postmates/PMHTTP) - HTTP framework with a focus on REST and JSON.
* [Postal ![GitHub Repo Stars](https://img.shields.io/github/stars/snipsco/Postal) ![GitHub last commit](https://img.shields.io/github/last-commit/snipsco/Postal)](https://github.com/snipsco/Postal) - Framework providing simple access to common email providers.
* [Reachability.swift ![GitHub Repo Stars](https://img.shields.io/github/stars/ashleymills/Reachability.swift) ![GitHub last commit](https://img.shields.io/github/last-commit/ashleymills/Reachability.swift)](https://github.com/ashleymills/Reachability.swift) - A replacement for Apple's Reachability with closures.
* [ReactiveAPI ![GitHub Repo Stars](https://img.shields.io/github/stars/sky-uk/ReactiveAPI) ![GitHub last commit](https://img.shields.io/github/last-commit/sky-uk/ReactiveAPI)](https://github.com/sky-uk/ReactiveAPI) - Write clean, concise and declarative network code relying on URLSession, with the power of RxSwift. Inspired by Retrofit.
* [ResponseDetective ![GitHub Repo Stars](https://img.shields.io/github/stars/netguru/ResponseDetective) ![GitHub last commit](https://img.shields.io/github/last-commit/netguru/ResponseDetective)](https://github.com/netguru/ResponseDetective) - A non-intrusive framework for intercepting any outgoing requests and incoming responses between your app and server for debugging purposes.
* [RxNetworks ![GitHub Repo Stars](https://img.shields.io/github/stars/yangKJ/RxNetworks) ![GitHub last commit](https://img.shields.io/github/last-commit/yangKJ/RxNetworks)](https://github.com/yangKJ/RxNetworks) - Network API With RxSwift + Moya + HandyJSON + Plugins.
* [ShadowsocksX-NG ![GitHub Repo Stars](https://img.shields.io/github/stars/shadowsocks/ShadowsocksX-NG) ![GitHub last commit](https://img.shields.io/github/last-commit/shadowsocks/ShadowsocksX-NG)](https://github.com/shadowsocks/ShadowsocksX-NG) - A fast tunnel proxy that helps you bypass firewalls.
* [Siesta](https://bustoutsolutions.github.io/siesta/) - Elegant abstraction for REST APIs that untangles stateful messes. An alternative to callback- and delegate-based networking.
* [SolarNetwork ![GitHub Repo Stars](https://img.shields.io/github/stars/ThreeGayHub/SolarNetwork) ![GitHub last commit](https://img.shields.io/github/last-commit/ThreeGayHub/SolarNetwork)](https://github.com/ThreeGayHub/SolarNetwork) - Elegant network abstraction layer.
* [SwiftHTTP ![GitHub Repo Stars](https://img.shields.io/github/stars/daltoniam/SwiftHTTP) ![GitHub last commit](https://img.shields.io/github/last-commit/daltoniam/SwiftHTTP)](https://github.com/daltoniam/SwiftHTTP) - NSURLSession wrapper.
* [SwiftyOAuth ![GitHub Repo Stars](https://img.shields.io/github/stars/delba/SwiftyOAuth) ![GitHub last commit](https://img.shields.io/github/last-commit/delba/SwiftyOAuth)](https://github.com/delba/SwiftyOAuth) - A small OAuth library with a built-in set of providers.
* [TermiNetwork ![GitHub Repo Stars](https://img.shields.io/github/stars/billp/TermiNetwork) ![GitHub last commit](https://img.shields.io/github/last-commit/billp/TermiNetwork)](https://github.com/billp/TermiNetwork) - 🌏 A zero-dependency networking solution for building modern and secure iOS, watchOS, macOS and tvOS applications.
* [TRON ![GitHub Repo Stars](https://img.shields.io/github/stars/MLSDev/TRON) ![GitHub last commit](https://img.shields.io/github/last-commit/MLSDev/TRON)](https://github.com/MLSDev/TRON) - Lightweight network abstraction layer, written on top of Alamofire.
* [Wormholy ![GitHub Repo Stars](https://img.shields.io/github/stars/pmusolino/Wormholy) ![GitHub last commit](https://img.shields.io/github/last-commit/pmusolino/Wormholy)](https://github.com/pmusolino/Wormholy) - iOS network debugging, like a wizard 🧙‍.

#### HTML
*Need to manipulate contents from html easily?* [back to top](#readme) 

* [Fuzi ![GitHub Repo Stars](https://img.shields.io/github/stars/cezheng/Fuzi) ![GitHub last commit](https://img.shields.io/github/last-commit/cezheng/Fuzi)](https://github.com/cezheng/Fuzi) - A fast & lightweight XML/HTML parser with XPath & CSS support.
* [Kanna ![GitHub Repo Stars](https://img.shields.io/github/stars/tid-kijyun/Kanna) ![GitHub last commit](https://img.shields.io/github/last-commit/tid-kijyun/Kanna)](https://github.com/tid-kijyun/Kanna) - Another XML/HTML parser.
* [SwiftSoup ![GitHub Repo Stars](https://img.shields.io/github/stars/scinfu/SwiftSoup) ![GitHub last commit](https://img.shields.io/github/last-commit/scinfu/SwiftSoup)](https://github.com/scinfu/SwiftSoup) :penguin: - HTML Parser, with best of DOM, CSS, and jquery.
* [WKZombie ![GitHub Repo Stars](https://img.shields.io/github/stars/mkoehnke/WKZombie) ![GitHub last commit](https://img.shields.io/github/last-commit/mkoehnke/WKZombie)](https://github.com/mkoehnke/WKZombie) - Headless browser.

#### Messaging Protocol
[back to top](#readme) 

* [CocoaMQTT ![GitHub Repo Stars](https://img.shields.io/github/stars/emqx/CocoaMQTT) ![GitHub last commit](https://img.shields.io/github/last-commit/emqx/CocoaMQTT)](https://github.com/emqx/CocoaMQTT) - MQTT for iOS and OS X.
* [Perfect-Notifications ![GitHub Repo Stars](https://img.shields.io/github/stars/PerfectlySoft/Perfect-Notifications) ![GitHub last commit](https://img.shields.io/github/last-commit/PerfectlySoft/Perfect-Notifications)](https://github.com/PerfectlySoft/Perfect-Notifications) - iOS Notifications for Linux and OS X.

#### SOAP
[back to top](#readme) 

* [SOAPEngine ![GitHub Repo Stars](https://img.shields.io/github/stars/priore/SOAPEngine) ![GitHub last commit](https://img.shields.io/github/last-commit/priore/SOAPEngine)](https://github.com/priore/SOAPEngine) - Generic SOAP client to access SOAP Web Services using iOS, Mac OS X, and Apple TV.

#### Socket
[back to top](#readme) 

* [BlueSocket ![GitHub Repo Stars](https://img.shields.io/github/stars/Kitura/BlueSocket) ![GitHub last commit](https://img.shields.io/github/last-commit/Kitura/BlueSocket)](https://github.com/Kitura/BlueSocket ) - IBM's cross platform low level socket framework.
* [BlueSSLService ![GitHub Repo Stars](https://img.shields.io/github/stars/Kitura/BlueSSLService) ![GitHub last commit](https://img.shields.io/github/last-commit/Kitura/BlueSSLService)](https://github.com/Kitura/BlueSSLService) - SSL/TLS add-in for IBM's low level socket framework.
* [DNWebSocket ![GitHub Repo Stars](https://img.shields.io/github/stars/GlebRadchenko/DNWebSocket) ![GitHub last commit](https://img.shields.io/github/last-commit/GlebRadchenko/DNWebSocket)](https://github.com/GlebRadchenko/DNWebSocket) - Object-Oriented, Autobahn tested WebSocket Library (RFC 6455).
* [RxWebSocket ![GitHub Repo Stars](https://img.shields.io/github/stars/fjcaetano/RxWebSocket) ![GitHub last commit](https://img.shields.io/github/last-commit/fjcaetano/RxWebSocket)](https://github.com/fjcaetano/RxWebSocket) - Reactive WebSockets.
* [Socket.IO ![GitHub Repo Stars](https://img.shields.io/github/stars/socketio/socket.io-client-swift) ![GitHub last commit](https://img.shields.io/github/last-commit/socketio/socket.io-client-swift)](https://github.com/socketio/socket.io-client-swift) :penguin: - Socket.IO client for iOS/OS X.
* [sockets ![GitHub Repo Stars](https://img.shields.io/github/stars/vapor-community/sockets) ![GitHub last commit](https://img.shields.io/github/last-commit/vapor-community/sockets)](https://github.com/vapor-community/sockets) :penguin: - TCP, UDP; Client, Server; Linux, OS X.
* [Starscream ![GitHub Repo Stars](https://img.shields.io/github/stars/daltoniam/Starscream) ![GitHub last commit](https://img.shields.io/github/last-commit/daltoniam/Starscream)](https://github.com/daltoniam/Starscream) - Websockets for iOS and OSX.
* [SwiftSocket ![GitHub Repo Stars](https://img.shields.io/github/stars/swiftsocket/SwiftSocket) ![GitHub last commit](https://img.shields.io/github/last-commit/swiftsocket/SwiftSocket)](https://github.com/swiftsocket/SwiftSocket) - Simple TCP socket library.
* [SwiftWebSocket ![GitHub Repo Stars](https://img.shields.io/github/stars/tidwall/SwiftWebSocket) ![GitHub last commit](https://img.shields.io/github/last-commit/tidwall/SwiftWebSocket)](https://github.com/tidwall/SwiftWebSocket) - A high performance WebSocket client library .

#### Webserver
*Would you like host a webserver in your device? Here you can find how to do it.* [back to top](#readme) 

* [Ambassador ![GitHub Repo Stars](https://img.shields.io/github/stars/envoy/Ambassador) ![GitHub last commit](https://img.shields.io/github/last-commit/envoy/Ambassador)](https://github.com/envoy/Ambassador) - Super lightweight web framework based on SWSGI.
* [Curassow ![GitHub Repo Stars](https://img.shields.io/github/stars/kylef-archive/Curassow) ![GitHub last commit](https://img.shields.io/github/last-commit/kylef-archive/Curassow)](https://github.com/kylef-archive/Curassow) :penguin: - HTTP server using the pre-fork worker model.
* [Embassy ![GitHub Repo Stars](https://img.shields.io/github/stars/envoy/Embassy) ![GitHub last commit](https://img.shields.io/github/last-commit/envoy/Embassy)](https://github.com/envoy/Embassy) :penguin: - Super lightweight async HTTP server library.
* [Kitura ![GitHub Repo Stars](https://img.shields.io/github/stars/Kitura/Kitura) ![GitHub last commit](https://img.shields.io/github/last-commit/Kitura/Kitura)](https://github.com/Kitura/Kitura) :penguin: - IBM's web framework and server for web services.
* [Lightning ![GitHub Repo Stars](https://img.shields.io/github/stars/skylab-inc/Lightning) ![GitHub last commit](https://img.shields.io/github/last-commit/skylab-inc/Lightning)](https://github.com/skylab-inc/Lightning) :penguin: - Multiplatform Single-threaded Non-blocking Web and Networking Framework.
* [Noze.io ![GitHub Repo Stars](https://img.shields.io/github/stars/NozeIO/Noze.io) ![GitHub last commit](https://img.shields.io/github/last-commit/NozeIO/Noze.io)](https://github.com/NozeIO/Noze.io) :penguin: - Evented I/O streams like Node.js.
* [Perfect ![GitHub Repo Stars](https://img.shields.io/github/stars/PerfectlySoft/Perfect) ![GitHub last commit](https://img.shields.io/github/last-commit/PerfectlySoft/Perfect)](https://github.com/PerfectlySoft/Perfect) :penguin: - Server-side Swift. The Perfect library, application server, connectors and example apps.
* [swifter ![GitHub Repo Stars](https://img.shields.io/github/stars/httpswift/swifter) ![GitHub last commit](https://img.shields.io/github/last-commit/httpswift/swifter)](https://github.com/httpswift/swifter) :penguin: - Http server with routing handler.
* [Vapor ![GitHub Repo Stars](https://img.shields.io/github/stars/vapor/vapor) ![GitHub last commit](https://img.shields.io/github/last-commit/vapor/vapor)](https://github.com/vapor/vapor) :penguin: - Elegant web framework that works on iOS, OS X, and Ubuntu.
* [Zewo ![GitHub Repo Stars](https://img.shields.io/github/stars/Zewo/Zewo) ![GitHub last commit](https://img.shields.io/github/last-commit/Zewo/Zewo)](https://github.com/Zewo/Zewo) :penguin: - Server-Side Swift.

### OCR
[back to top](#readme) 

* [SwiftOCR ![GitHub Repo Stars](https://img.shields.io/github/stars/NMAC427/SwiftOCR) ![GitHub last commit](https://img.shields.io/github/last-commit/NMAC427/SwiftOCR)](https://github.com/NMAC427/SwiftOCR) - Neural Network based OCR lib.

### Optimization
[back to top](#readme) 


### PDF
[back to top](#readme) 

* [PDFGenerator ![GitHub Repo Stars](https://img.shields.io/github/stars/sgr-ksmt/PDFGenerator) ![GitHub last commit](https://img.shields.io/github/last-commit/sgr-ksmt/PDFGenerator)](https://github.com/sgr-ksmt/PDFGenerator) - A simple Generator of PDF. Generate PDF from view(s) or image(s).
* [SimplePDF ![GitHub Repo Stars](https://img.shields.io/github/stars/nRewik/SimplePDF) ![GitHub last commit](https://img.shields.io/github/last-commit/nRewik/SimplePDF)](https://github.com/nRewik/SimplePDF) - Create a simple PDF effortlessly.
* [UXMPDFKit ![GitHub Repo Stars](https://img.shields.io/github/stars/uxmstudio/UXMPDFKit) ![GitHub last commit](https://img.shields.io/github/last-commit/uxmstudio/UXMPDFKit)](https://github.com/uxmstudio/UXMPDFKit) - A PDF viewer and annotator that can be embedded in iOS applications.

### Quality
[back to top](#readme) 

* [AnyLint ![GitHub Repo Stars](https://img.shields.io/github/stars/Flinesoft/AnyLint) ![GitHub last commit](https://img.shields.io/github/last-commit/Flinesoft/AnyLint)](https://github.com/Flinesoft/AnyLint) :penguin: - Lint anything by combining the power of Swift & regular expressions.
* [IBLinter ![GitHub Repo Stars](https://img.shields.io/github/stars/IBDecodable/IBLinter) ![GitHub last commit](https://img.shields.io/github/last-commit/IBDecodable/IBLinter)](https://github.com/IBDecodable/IBLinter) - A linter tool for Interface Builder.
* [L10nLint ![GitHub Repo Stars](https://img.shields.io/github/stars/s2mr/L10nLint) ![GitHub last commit](https://img.shields.io/github/last-commit/s2mr/L10nLint)](https://github.com/s2mr/L10nLint) - A linter tool for Localizable.strings.
* [swift-mod ![GitHub Repo Stars](https://img.shields.io/github/stars/ra1028/swift-mod) ![GitHub last commit](https://img.shields.io/github/last-commit/ra1028/swift-mod)](https://github.com/ra1028/swift-mod) - A tool for Swift code modification intermediating between code generation and formatting.
* [SwiftCop ![GitHub Repo Stars](https://img.shields.io/github/stars/andresinaka/SwiftCop) ![GitHub last commit](https://img.shields.io/github/last-commit/andresinaka/SwiftCop)](https://github.com/andresinaka/SwiftCop) - A validation library which inspired by the clarity of Ruby On Rails Active Record validations.
* [SwiftFormat ![GitHub Repo Stars](https://img.shields.io/github/stars/nicklockwood/SwiftFormat) ![GitHub last commit](https://img.shields.io/github/last-commit/nicklockwood/SwiftFormat)](https://github.com/nicklockwood/SwiftFormat) - A code library and command-line formatting tool for reformatting Swift code.
* [SwiftLint ![GitHub Repo Stars](https://img.shields.io/github/stars/realm/SwiftLint) ![GitHub last commit](https://img.shields.io/github/last-commit/realm/SwiftLint)](https://github.com/realm/SwiftLint) - A tool to enforce coding conventions.
* [Swimat ![GitHub Repo Stars](https://img.shields.io/github/stars/Jintin/Swimat) ![GitHub last commit](https://img.shields.io/github/last-commit/Jintin/Swimat)](https://github.com/Jintin/Swimat) - Xcode plugin to format code.
* [Tailor ![GitHub Repo Stars](https://img.shields.io/github/stars/sleekbyte/tailor) ![GitHub last commit](https://img.shields.io/github/last-commit/sleekbyte/tailor)](https://github.com/sleekbyte/tailor) :penguin: - Cross-platform static analyzer that helps you to write cleaner code and avoid bugs.

### Scripting
[back to top](#readme) 

* [Swift for Scripting ![GitHub Repo Stars](https://img.shields.io/github/stars/artemnovichkov/Swift-For-Scripting) ![GitHub last commit](https://img.shields.io/github/last-commit/artemnovichkov/Swift-For-Scripting)](https://github.com/artemnovichkov/Swift-For-Scripting) - A hand-curated collection of useful and informative scripting material.

### SDK
[back to top](#readme) 


### Security
[back to top](#readme) 

* [SecurePropertyStorage ![GitHub Repo Stars](https://img.shields.io/github/stars/alexruperez/SecurePropertyStorage) ![GitHub last commit](https://img.shields.io/github/last-commit/alexruperez/SecurePropertyStorage)](https://github.com/alexruperez/SecurePropertyStorage) - Helps you define secure storages for your properties using Swift property wrappers.

#### Cryptography
*Deal with cryptography method easily* [back to top](#readme) 

* [BlueCryptor ![GitHub Repo Stars](https://img.shields.io/github/stars/Kitura/BlueCryptor) ![GitHub last commit](https://img.shields.io/github/last-commit/Kitura/BlueCryptor)](https://github.com/Kitura/BlueCryptor) - IBM's Cross Platform Crypto library.
* [BlueRSA ![GitHub Repo Stars](https://img.shields.io/github/stars/Kitura/BlueRSA) ![GitHub last commit](https://img.shields.io/github/last-commit/Kitura/BlueRSA)](https://github.com/Kitura/BlueRSA) - IBM's Cross Platform RSA Crypto library.
* [CryptoSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/krzyzanowskim/CryptoSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/krzyzanowskim/CryptoSwift)](https://github.com/krzyzanowskim/CryptoSwift) :penguin: - Crypto related functions and helpers.
* [IDZSwiftCommonCrypto ![GitHub Repo Stars](https://img.shields.io/github/stars/iosdevzone/IDZSwiftCommonCrypto) ![GitHub last commit](https://img.shields.io/github/last-commit/iosdevzone/IDZSwiftCommonCrypto)](https://github.com/iosdevzone/IDZSwiftCommonCrypto) - A wrapper for Apple's Common Crypto library.
* [JOSESwift ![GitHub Repo Stars](https://img.shields.io/github/stars/airsidemobile/JOSESwift) ![GitHub last commit](https://img.shields.io/github/last-commit/airsidemobile/JOSESwift)](https://github.com/airsidemobile/JOSESwift) - A framework for the JOSE standards JWS, JWE, and JWK.
* [RNCryptor ![GitHub Repo Stars](https://img.shields.io/github/stars/RNCryptor/RNCryptor) ![GitHub last commit](https://img.shields.io/github/last-commit/RNCryptor/RNCryptor)](https://github.com/RNCryptor/RNCryptor) - CCCryptor (Apple's AES encryption) wrappers for iOS and Mac.
* [SCrypto ![GitHub Repo Stars](https://img.shields.io/github/stars/sgl0v/scrypto) ![GitHub last commit](https://img.shields.io/github/last-commit/sgl0v/scrypto)](https://github.com/sgl0v/scrypto) - Elegant interface to access the CommonCrypto routines.
* [Siphash ![GitHub Repo Stars](https://img.shields.io/github/stars/attaswift/SipHash) ![GitHub last commit](https://img.shields.io/github/last-commit/attaswift/SipHash)](https://github.com/attaswift/SipHash) - Simple and secure hashing with the SipHash algorithm.
* [Swift-Sodium ![GitHub Repo Stars](https://img.shields.io/github/stars/jedisct1/swift-sodium) ![GitHub last commit](https://img.shields.io/github/last-commit/jedisct1/swift-sodium)](https://github.com/jedisct1/swift-sodium) - Interface to the Sodium library for common crypto operations for iOS and OS X.
* [Themis ![GitHub Repo Stars](https://img.shields.io/github/stars/cossacklabs/themis) ![GitHub last commit](https://img.shields.io/github/last-commit/cossacklabs/themis)](https://github.com/cossacklabs/themis) - Multilanguage framework for making typical encryption schemes easy to use: data at rest, authenticated data exchange, transport protection, authentication, and so on.

#### Keychain
[back to top](#readme) 

* [GoodPersistence ![GitHub Repo Stars](https://img.shields.io/github/stars/GoodRequest/GoodPersistence) ![GitHub last commit](https://img.shields.io/github/last-commit/GoodRequest/GoodPersistence)](https://github.com/GoodRequest/GoodPersistence) - 💾 GoodPersistence simplifies caching data in keychain and UserDefaults. Using a property wrappers.
* [keychain-swift ![GitHub Repo Stars](https://img.shields.io/github/stars/evgenyneu/keychain-swift) ![GitHub last commit](https://img.shields.io/github/last-commit/evgenyneu/keychain-swift)](https://github.com/evgenyneu/keychain-swift) - Helper functions for saving text in Keychain securely for iOS, OS X, tvOS and watchOS.
* [KeychainAccess ![GitHub Repo Stars](https://img.shields.io/github/stars/kishikawakatsumi/KeychainAccess) ![GitHub last commit](https://img.shields.io/github/last-commit/kishikawakatsumi/KeychainAccess)](https://github.com/kishikawakatsumi/KeychainAccess) - Simple wrapper for Keychain that works on iOS and OS X.
* [Latch ![GitHub Repo Stars](https://img.shields.io/github/stars/endocrimes/Latch) ![GitHub last commit](https://img.shields.io/github/last-commit/endocrimes/Latch)](https://github.com/endocrimes/Latch) - A simple Keychain Wrapper for iOS.
* [SwiftKeychainWrapper ![GitHub Repo Stars](https://img.shields.io/github/stars/jrendel/SwiftKeychainWrapper) ![GitHub last commit](https://img.shields.io/github/last-commit/jrendel/SwiftKeychainWrapper)](https://github.com/jrendel/SwiftKeychainWrapper) - Simple static wrapper for the iOS Keychain to allow you to use it in a similar fashion to user defaults.

### Streaming
[back to top](#readme) 

* [HaishinKit ![GitHub Repo Stars](https://img.shields.io/github/stars/shogo4405/HaishinKit.swift) ![GitHub last commit](https://img.shields.io/github/last-commit/shogo4405/HaishinKit.swift)](https://github.com/shogo4405/HaishinKit.swift) - Camera and Microphone streaming library via RTMP, HLS for iOS, macOS, tvOS.
* [Live ![GitHub Repo Stars](https://img.shields.io/github/stars/ltebean/Live) ![GitHub last commit](https://img.shields.io/github/last-commit/ltebean/Live)](https://github.com/ltebean/Live) - Demonstrate how to build a live broadcast app.

### Styling
[back to top](#readme) 

* [Stylist ![GitHub Repo Stars](https://img.shields.io/github/stars/yonaskolb/Stylist) ![GitHub last commit](https://img.shields.io/github/last-commit/yonaskolb/Stylist)](https://github.com/yonaskolb/Stylist) - Define UI styles in a hot-loadable external yaml or json file.
* [SwiftTheme ![GitHub Repo Stars](https://img.shields.io/github/stars/wxxsw/SwiftTheme) ![GitHub last commit](https://img.shields.io/github/last-commit/wxxsw/SwiftTheme)](https://github.com/wxxsw/SwiftTheme) - Powerful theme/skin manager for iOS 8+.
* [Themes ![GitHub Repo Stars](https://img.shields.io/github/stars/onmyway133/EasyTheme) ![GitHub last commit](https://img.shields.io/github/last-commit/onmyway133/EasyTheme)](https://github.com/onmyway133/EasyTheme) - Theme management.

### SVG
[back to top](#readme) 

* [SVGView ![GitHub Repo Stars](https://img.shields.io/github/stars/exyte/SVGView) ![GitHub last commit](https://img.shields.io/github/last-commit/exyte/SVGView)](https://github.com/exyte/SVGView) - SVG parser and renderer written in SwiftUI.

### System
[back to top](#readme) 

* [BlueSignals ![GitHub Repo Stars](https://img.shields.io/github/stars/Kitura/BlueSignals) ![GitHub last commit](https://img.shields.io/github/last-commit/Kitura/BlueSignals)](https://github.com/Kitura/BlueSignals) - IBM's Cross Platform OS signal handling library.
* [LaunchAtLogin ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/LaunchAtLogin) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/LaunchAtLogin)](https://github.com/sindresorhus/LaunchAtLogin) - Easily add 'Launch at Login' functionality to your sandboxed macOS app.
* [SystemKit ![GitHub Repo Stars](https://img.shields.io/github/stars/beltex/SystemKit) ![GitHub last commit](https://img.shields.io/github/last-commit/beltex/SystemKit)](https://github.com/beltex/SystemKit/) - OS X system library.

### Testing
*A collection of testing frameworks.* [back to top](#readme) 

* [DVR ![GitHub Repo Stars](https://img.shields.io/github/stars/venmo/DVR) ![GitHub last commit](https://img.shields.io/github/last-commit/venmo/DVR)](https://github.com/venmo/DVR) - A simple network testing framework.
* [Erik ![GitHub Repo Stars](https://img.shields.io/github/stars/phimage/Erik) ![GitHub last commit](https://img.shields.io/github/last-commit/phimage/Erik)](https://github.com/phimage/Erik) - An headless browser to access and manipulate webpages using javascript allowing to run functional tests.
* [Fakery ![GitHub Repo Stars](https://img.shields.io/github/stars/vadymmarkov/Fakery) ![GitHub last commit](https://img.shields.io/github/last-commit/vadymmarkov/Fakery)](https://github.com/vadymmarkov/Fakery) - Fake data generator.
* [Mussel ![GitHub Repo Stars](https://img.shields.io/github/stars/UrbanCompass/Mussel) ![GitHub last commit](https://img.shields.io/github/last-commit/UrbanCompass/Mussel)](https://github.com/UrbanCompass/Mussel) - A framework for easily testing Push Notifications, Universal Links and Routing in XCUITests.
* [Nimble ![GitHub Repo Stars](https://img.shields.io/github/stars/Quick/Nimble) ![GitHub last commit](https://img.shields.io/github/last-commit/Quick/Nimble)](https://github.com/Quick/Nimble) - A matcher framework.
* [OHHTTPStubs ![GitHub Repo Stars](https://img.shields.io/github/stars/AliSoftware/OHHTTPStubs) ![GitHub last commit](https://img.shields.io/github/last-commit/AliSoftware/OHHTTPStubs)](https://github.com/AliSoftware/OHHTTPStubs) - A testing library designed to stub your network requests easily.
* [Quick ![GitHub Repo Stars](https://img.shields.io/github/stars/Quick/Quick) ![GitHub last commit](https://img.shields.io/github/last-commit/Quick/Quick)](https://github.com/Quick/Quick) :penguin: - Quick is a behavior-driven development framework.
* [SBTUITestTunnel ![GitHub Repo Stars](https://img.shields.io/github/stars/Subito-it/SBTUITestTunnel) ![GitHub last commit](https://img.shields.io/github/last-commit/Subito-it/SBTUITestTunnel)](https://github.com/Subito-it/SBTUITestTunnel) - UI testing library for interact with network requests, stub CLLocationManager and UNUserNotificationCenter, and fine grain scrolling in table/collection/scroll views
* [Sizes ![GitHub Repo Stars](https://img.shields.io/github/stars/marcosgriselli/Sizes) ![GitHub last commit](https://img.shields.io/github/last-commit/marcosgriselli/Sizes)](https://github.com/marcosgriselli/Sizes) - Test your app on different device and font sizes.
* [SnapshotTest ![GitHub Repo Stars](https://img.shields.io/github/stars/parski/SnapshotTest) ![GitHub last commit](https://img.shields.io/github/last-commit/parski/SnapshotTest)](https://github.com/parski/SnapshotTest) - Snapshot testing tool for iOS and tvOS.
* [Spectre ![GitHub Repo Stars](https://img.shields.io/github/stars/kylef/Spectre) ![GitHub last commit](https://img.shields.io/github/last-commit/kylef/Spectre)](https://github.com/kylef/Spectre) :penguin: - BDD Framework.
* [SwiftCheck ![GitHub Repo Stars](https://img.shields.io/github/stars/typelift/SwiftCheck) ![GitHub last commit](https://img.shields.io/github/last-commit/typelift/SwiftCheck)](https://github.com/typelift/SwiftCheck) - A testing library that automatically generates random data for testing program properties.
* [UI Testing Cheat Sheet ![GitHub Repo Stars](https://img.shields.io/github/stars/joemasilotti/UI-Testing-Cheat-Sheet) ![GitHub last commit](https://img.shields.io/github/last-commit/joemasilotti/UI-Testing-Cheat-Sheet)](https://github.com/joemasilotti/UI-Testing-Cheat-Sheet) - Answers to common "How do I test this with UI Testing?" questions with a working example app.
* [XCTest ![GitHub Repo Stars](https://img.shields.io/github/stars/apple/swift-corelibs-xctest) ![GitHub last commit](https://img.shields.io/github/last-commit/apple/swift-corelibs-xctest)](https://github.com/apple/swift-corelibs-xctest) - The XCTest Project, A Swift core library for providing unit test support.

#### Mock
[back to top](#readme) 

* [AutoMockable ![GitHub Repo Stars](https://img.shields.io/github/stars/vincent-pradeilles/AutoMocker) ![GitHub last commit](https://img.shields.io/github/last-commit/vincent-pradeilles/AutoMocker)](https://github.com/vincent-pradeilles/AutoMocker) - A framework that leverages the type system to let you easily create mocked instances of your data types.
* [Cuckoo ![GitHub Repo Stars](https://img.shields.io/github/stars/Brightify/Cuckoo) ![GitHub last commit](https://img.shields.io/github/last-commit/Brightify/Cuckoo)](https://github.com/Brightify/Cuckoo) - First boilerplate-free mocking framework.
* [Mocker ![GitHub Repo Stars](https://img.shields.io/github/stars/WeTransfer/Mocker) ![GitHub last commit](https://img.shields.io/github/last-commit/WeTransfer/Mocker)](https://github.com/WeTransfer/Mocker) - Mock Alamofire and URLSession requests without touching your code implementation
* [Mockingbird ![GitHub Repo Stars](https://img.shields.io/github/stars/Farfetch/mockingbird) ![GitHub last commit](https://img.shields.io/github/last-commit/Farfetch/mockingbird)](https://github.com/Farfetch/mockingbird) - Simplify software testing, by easily mocking any system using HTTP/HTTPS, allowing a team to test and develop against a service that is not complete, unstable or just to reproduce planned cases.
* [Mockingjay ![GitHub Repo Stars](https://img.shields.io/github/stars/kylef/Mockingjay) ![GitHub last commit](https://img.shields.io/github/last-commit/kylef/Mockingjay)](https://github.com/kylef/Mockingjay) - An elegant library for stubbing HTTP requests with ease.
* [Mockit ![GitHub Repo Stars](https://img.shields.io/github/stars/sabirvirtuoso/Mockit) ![GitHub last commit](https://img.shields.io/github/last-commit/sabirvirtuoso/Mockit)](https://github.com/sabirvirtuoso/Mockit) - A simple mocking framework, inspired by the famous Mockito for Java.
* [MockSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/leoture/MockSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/leoture/MockSwift)](https://github.com/leoture/MockSwift) - Mock Framework that uses the power of property wrappers.

### Text
*A collection of text projects.* [back to top](#readme) 

* [Attributed ![GitHub Repo Stars](https://img.shields.io/github/stars/Nirma/Attributed) ![GitHub last commit](https://img.shields.io/github/last-commit/Nirma/Attributed)](https://github.com/Nirma/Attributed) - Modern µframework for attributed strings.
* [AttributedTextView ![GitHub Repo Stars](https://img.shields.io/github/stars/evermeer/AttributedTextView) ![GitHub last commit](https://img.shields.io/github/last-commit/evermeer/AttributedTextView)](https://github.com/evermeer/AttributedTextView) - Easiest way to create an attributed UITextView with support for multiple links, hashtags and mentions.
* [BonMot ![GitHub Repo Stars](https://img.shields.io/github/stars/Rightpoint/BonMot) ![GitHub last commit](https://img.shields.io/github/last-commit/Rightpoint/BonMot)](https://github.com/Rightpoint/BonMot) - Beautiful, easy attributed strings for iOS.
* [Croc ![GitHub Repo Stars](https://img.shields.io/github/stars/JKalash/Croc) ![GitHub last commit](https://img.shields.io/github/last-commit/JKalash/Croc)](https://github.com/JKalash/Croc) - A lightweight Emoji parsing and querying library.
* [edhita ![GitHub Repo Stars](https://img.shields.io/github/stars/tnantoka/edhita) ![GitHub last commit](https://img.shields.io/github/last-commit/tnantoka/edhita)](https://github.com/tnantoka/edhita) - Fully open source text editor for iOS.
* [MarkdownKit ![GitHub Repo Stars](https://img.shields.io/github/stars/bmoliveira/MarkdownKit) ![GitHub last commit](https://img.shields.io/github/last-commit/bmoliveira/MarkdownKit)](https://github.com/bmoliveira/MarkdownKit) - A simple and customizable Markdown Parser.
* [MarkdownView ![GitHub Repo Stars](https://img.shields.io/github/stars/keitaoouchi/MarkdownView) ![GitHub last commit](https://img.shields.io/github/last-commit/keitaoouchi/MarkdownView)](https://github.com/keitaoouchi/MarkdownView) - iOS Markdown view.
* [MarkyMark ![GitHub Repo Stars](https://img.shields.io/github/stars/M2Mobi/Marky-Mark) ![GitHub last commit](https://img.shields.io/github/last-commit/M2Mobi/Marky-Mark)](https://github.com/M2Mobi/Marky-Mark) - Converts Markdown into native views or attributed strings.
* [Notepad ![GitHub Repo Stars](https://img.shields.io/github/stars/ruddfawcett/Notepad) ![GitHub last commit](https://img.shields.io/github/last-commit/ruddfawcett/Notepad)](https://github.com/ruddfawcett/Notepad) - A fully themeable markdown editor with live syntax highlighting.
* [OEMentions ![GitHub Repo Stars](https://img.shields.io/github/stars/omar14/OEMentions) ![GitHub last commit](https://img.shields.io/github/last-commit/omar14/OEMentions)](https://github.com/omar14/OEMentions) - An easy way to add mentions to uitextview like Facebook and Instagram.
* [Parsey ![GitHub Repo Stars](https://img.shields.io/github/stars/rxwei/Parsey) ![GitHub last commit](https://img.shields.io/github/last-commit/rxwei/Parsey)](https://github.com/rxwei/Parsey) - Parser combinator framework that supports source location tracking, backtracking prevention, and rich error messages.
* [Pluralize.swift ![GitHub Repo Stars](https://img.shields.io/github/stars/joshualat/Pluralize.swift) ![GitHub last commit](https://img.shields.io/github/last-commit/joshualat/Pluralize.swift)](https://github.com/joshualat/Pluralize.swift) - Great String Pluralize Extension.
* [PredicateFlow ![GitHub Repo Stars](https://img.shields.io/github/stars/andreadelfante/PredicateFlow) ![GitHub last commit](https://img.shields.io/github/last-commit/andreadelfante/PredicateFlow)](https://github.com/andreadelfante/PredicateFlow) - PredicateFlow is a builder that allows you to write amazing, strong-typed and easy-to-read NSPredicate.
* [PrediKit ![GitHub Repo Stars](https://img.shields.io/github/stars/KrakenDev/PrediKit) ![GitHub last commit](https://img.shields.io/github/last-commit/KrakenDev/PrediKit)](https://github.com/KrakenDev/PrediKit) - An NSPredicate DSL for iOS & OS X inspired by SnapKit.
* [Regex by crossroadlabs ![GitHub Repo Stars](https://img.shields.io/github/stars/crossroadlabs/Regex) ![GitHub last commit](https://img.shields.io/github/last-commit/crossroadlabs/Regex)](https://github.com/crossroadlabs/Regex) :penguin: - Very easy to use Regular Expressions library with rich functionality. Features both operator `=~` and method based APIs. Unit tests covered.
* [Regex by sindresorhus ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/Regex) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/Regex)](https://github.com/sindresorhus/Regex) - Swifty regular expressions, fully tested & documented, and with correct Unicode handling.
* [RichEditorView ![GitHub Repo Stars](https://img.shields.io/github/stars/cjwirth/RichEditorView) ![GitHub last commit](https://img.shields.io/github/last-commit/cjwirth/RichEditorView)](https://github.com/cjwirth/RichEditorView) -  RichEditorView is a simple, modular, drop-in UIView subclass for Rich Text Editing.
* [Sprinter ![GitHub Repo Stars](https://img.shields.io/github/stars/nicklockwood/Sprinter) ![GitHub last commit](https://img.shields.io/github/last-commit/nicklockwood/Sprinter)](https://github.com/nicklockwood/Sprinter) - A library for formatting strings.
* [SwiftRichString ![GitHub Repo Stars](https://img.shields.io/github/stars/malcommac/SwiftRichString) ![GitHub last commit](https://img.shields.io/github/last-commit/malcommac/SwiftRichString)](https://github.com/malcommac/SwiftRichString) - Elegant & Painless Attributed Strings Management Library.
* [SwiftVerbalExpressions ![GitHub Repo Stars](https://img.shields.io/github/stars/VerbalExpressions/SwiftVerbalExpressions) ![GitHub last commit](https://img.shields.io/github/last-commit/VerbalExpressions/SwiftVerbalExpressions)](https://github.com/VerbalExpressions/SwiftVerbalExpressions) - VerbalExpressions porting.
* [SwiftyAttributes ![GitHub Repo Stars](https://img.shields.io/github/stars/eddiekaiger/SwiftyAttributes) ![GitHub last commit](https://img.shields.io/github/last-commit/eddiekaiger/SwiftyAttributes)](https://github.com/eddiekaiger/SwiftyAttributes) - Extensions that make it a breeze to work with attributed strings.
* [Tagging ![GitHub Repo Stars](https://img.shields.io/github/stars/k-lpmg/Tagging) ![GitHub last commit](https://img.shields.io/github/last-commit/k-lpmg/Tagging)](https://github.com/k-lpmg/Tagging) - A TextView that provides easy to use tagging feature for Mention or Hashtag.
* [Texstyle ![GitHub Repo Stars](https://img.shields.io/github/stars/rosberry/texstyle) ![GitHub last commit](https://img.shields.io/github/last-commit/rosberry/texstyle)](https://github.com/rosberry/texstyle) - Texstyle allows you to format attributed strings easily.
* [TextAttributes ![GitHub Repo Stars](https://img.shields.io/github/stars/delba/TextAttributes) ![GitHub last commit](https://img.shields.io/github/last-commit/delba/TextAttributes)](https://github.com/delba/TextAttributes) - An easier way to compose attributed strings.
* [TextBuilder ![GitHub Repo Stars](https://img.shields.io/github/stars/davdroman/TextBuilder) ![GitHub last commit](https://img.shields.io/github/last-commit/davdroman/TextBuilder)](https://github.com/davdroman/TextBuilder) - Like a SwiftUI ViewBuilder, but for Text.
* [TwitterTextEditor ![GitHub Repo Stars](https://img.shields.io/github/stars/twitter/TwitterTextEditor) ![GitHub last commit](https://img.shields.io/github/last-commit/twitter/TwitterTextEditor)](https://github.com/twitter/TwitterTextEditor) - A standalone, flexible API that provides a full featured rich text editor for iOS applications.
* [VEditorKit ![GitHub Repo Stars](https://img.shields.io/github/stars/GeekTree0101/VEditorKit) ![GitHub last commit](https://img.shields.io/github/last-commit/GeekTree0101/VEditorKit)](https://github.com/GeekTree0101/VEditorKit) - Lightweight and Powerful Editor Kit.

### Thread
*Threading, task-based or asynchronous programming, Grand Central Dispatch (GCD) wrapper* [back to top](#readme) 

* [Async ![GitHub Repo Stars](https://img.shields.io/github/stars/duemunk/Async) ![GitHub last commit](https://img.shields.io/github/last-commit/duemunk/Async)](https://github.com/duemunk/Async) - Syntactic sugar for Grand Central Dispatch.
* [AwaitKit ![GitHub Repo Stars](https://img.shields.io/github/stars/yannickl/AwaitKit) ![GitHub last commit](https://img.shields.io/github/last-commit/yannickl/AwaitKit)](https://github.com/yannickl/AwaitKit) - The ES7 Async/Await control flow.
* [Each ![GitHub Repo Stars](https://img.shields.io/github/stars/dalu93/Each) ![GitHub last commit](https://img.shields.io/github/last-commit/dalu93/Each)](https://github.com/dalu93/Each) - Each is a NSTimer bridge library.
* [GCDTimer ![GitHub Repo Stars](https://img.shields.io/github/stars/hemantasapkota/GCDTimer) ![GitHub last commit](https://img.shields.io/github/last-commit/hemantasapkota/GCDTimer)](https://github.com/hemantasapkota/GCDTimer) - A well-tested GCD timer.
* [Schedule ![GitHub Repo Stars](https://img.shields.io/github/stars/luoxiu/Schedule) ![GitHub last commit](https://img.shields.io/github/last-commit/luoxiu/Schedule)](https://github.com/luoxiu/Schedule) :penguin: - A missing lightweight task scheduler with an incredibly human-friendly syntax.
* [SwiftyTimer ![GitHub Repo Stars](https://img.shields.io/github/stars/radex/SwiftyTimer) ![GitHub last commit](https://img.shields.io/github/last-commit/radex/SwiftyTimer)](https://github.com/radex/SwiftyTimer) - API for NSTimer.

### UI
*A collection of pre-packaged transitions & cool ui stuffs.* [back to top](#readme) 

* [ActivityIndicatorView ![GitHub Repo Stars](https://img.shields.io/github/stars/exyte/ActivityIndicatorView) ![GitHub last commit](https://img.shields.io/github/last-commit/exyte/ActivityIndicatorView)](https://github.com/exyte/ActivityIndicatorView) - A number of preset loading indicators created with SwiftUI.
* [AECoreDataUI ![GitHub Repo Stars](https://img.shields.io/github/stars/tadija/AERecord) ![GitHub last commit](https://img.shields.io/github/last-commit/tadija/AERecord)](https://github.com/tadija/AERecord) - Core Data driven UI.
* [AGCircularPicker ![GitHub Repo Stars](https://img.shields.io/github/stars/agilie/AGCircularPicker) ![GitHub last commit](https://img.shields.io/github/last-commit/agilie/AGCircularPicker)](https://github.com/agilie/AGCircularPicker) - Helpful component for creating a controller aimed to manage any calculated parameter.
* [AMScrollingNavbar ![GitHub Repo Stars](https://img.shields.io/github/stars/andreamazz/AMScrollingNavbar) ![GitHub last commit](https://img.shields.io/github/last-commit/andreamazz/AMScrollingNavbar)](https://github.com/andreamazz/AMScrollingNavbar) - Scrollable UINavigationBar that follows the scrolling of a UIScrollView.
* [Arale ![GitHub Repo Stars](https://img.shields.io/github/stars/supercomputra/Arale) ![GitHub last commit](https://img.shields.io/github/last-commit/supercomputra/Arale)](https://github.com/supercomputra/Arale) - A custom stretchable header view for UIScrollView or any its subclasses with UIActivityIndicatorView support for content reloading.
* [BadgeHub ![GitHub Repo Stars](https://img.shields.io/github/stars/jogendra/BadgeHub) ![GitHub last commit](https://img.shields.io/github/last-commit/jogendra/BadgeHub)](https://github.com/jogendra/BadgeHub) - Make any UIView a full fledged animated notification center. It is a way to quickly add a notification badge icon to a UIView.
* [BatteryView ![GitHub Repo Stars](https://img.shields.io/github/stars/yonat/BatteryView) ![GitHub last commit](https://img.shields.io/github/last-commit/yonat/BatteryView)](https://github.com/yonat/BatteryView) - Simple battery shaped UIView.
* [BetterSafariView ![GitHub Repo Stars](https://img.shields.io/github/stars/stleamist/BetterSafariView) ![GitHub last commit](https://img.shields.io/github/last-commit/stleamist/BetterSafariView)](https://github.com/stleamist/BetterSafariView) - A better way to present a SFSafariViewController or start a ASWebAuthenticationSession in SwiftUI.
* [BottomSheet ![GitHub Repo Stars](https://img.shields.io/github/stars/joomcode/BottomSheet) ![GitHub last commit](https://img.shields.io/github/last-commit/joomcode/BottomSheet)](https://github.com/joomcode/BottomSheet) - Powerful Bottom Sheet component with content based size, interactive dismissal and navigation controller support.
* [BreakOutToRefresh ![GitHub Repo Stars](https://img.shields.io/github/stars/dasdom/BreakOutToRefresh) ![GitHub last commit](https://img.shields.io/github/last-commit/dasdom/BreakOutToRefresh)](https://github.com/dasdom/BreakOutToRefresh) - A playable pull to refresh view using SpriteKit.
* [BulletinBoard ![GitHub Repo Stars](https://img.shields.io/github/stars/alexisakers/BulletinBoard) ![GitHub last commit](https://img.shields.io/github/last-commit/alexisakers/BulletinBoard)](https://github.com/alexisakers/BulletinBoard) - Generates and manages contextual cards displayed at the bottom of the screen.
* [CapturePreventionKit ![GitHub Repo Stars](https://img.shields.io/github/stars/Jaesung-Jung/CapturePreventionKit) ![GitHub last commit](https://img.shields.io/github/last-commit/Jaesung-Jung/CapturePreventionKit)](https://github.com/Jaesung-Jung/CapturePreventionKit) - Provides `Label` and `ImageView` for `screen capture prevention`.
* [CircularProgress ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/CircularProgress) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/CircularProgress)](https://github.com/sindresorhus/CircularProgress) - Circular progress indicator for your macOS app.
* [ClassicKit ![GitHub Repo Stars](https://img.shields.io/github/stars/Baddaboo/ClassicKit) ![GitHub last commit](https://img.shields.io/github/last-commit/Baddaboo/ClassicKit)](https://github.com/Baddaboo/ClassicKit) - A collection of classic-style UI components.
* [ContainerController ![GitHub Repo Stars](https://img.shields.io/github/stars/mrustaa/ContainerController) ![GitHub last commit](https://img.shields.io/github/last-commit/mrustaa/ContainerController)](https://github.com/mrustaa/ContainerController) - UI Component. This is a copy swipe-panel from app: Apple Maps, Stocks
* [CountryPickerView ![GitHub Repo Stars](https://img.shields.io/github/stars/kizitonwose/CountryPickerView) ![GitHub last commit](https://img.shields.io/github/last-commit/kizitonwose/CountryPickerView)](https://github.com/kizitonwose/CountryPickerView) - A simple, customizable view for efficiently collecting country information in iOS apps.
* [CustomSegue ![GitHub Repo Stars](https://img.shields.io/github/stars/phimage/CustomSegue) ![GitHub last commit](https://img.shields.io/github/last-commit/phimage/CustomSegue)](https://github.com/phimage/CustomSegue) - Custom segue for OSX Storyboards with slide and cross fade effects.
* [DeckTransition ![GitHub Repo Stars](https://img.shields.io/github/stars/HarshilShah/DeckTransition) ![GitHub last commit](https://img.shields.io/github/last-commit/HarshilShah/DeckTransition)](https://github.com/HarshilShah/DeckTransition) - A library to recreate the iOS 10 Apple Music now playing transition.
* [DockProgress ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/DockProgress) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/DockProgress)](https://github.com/sindresorhus/DockProgress) - Show progress in your macOS app's Dock icon.
* [Dodo ![GitHub Repo Stars](https://img.shields.io/github/stars/evgenyneu/Dodo) ![GitHub last commit](https://img.shields.io/github/last-commit/evgenyneu/Dodo)](https://github.com/evgenyneu/Dodo) - A message bar for iOS.
* [Doric Design System Foundation ![GitHub Repo Stars](https://img.shields.io/github/stars/jayeshk/Doric) ![GitHub last commit](https://img.shields.io/github/last-commit/jayeshk/Doric)](https://github.com/jayeshk/Doric) - Protocol oriented, type safe, scalable design system foundation framework for iOS.
* [DropDown ![GitHub Repo Stars](https://img.shields.io/github/stars/AssistoLab/DropDown) ![GitHub last commit](https://img.shields.io/github/last-commit/AssistoLab/DropDown)](https://github.com/AssistoLab/DropDown) - A Material Design drop down for iOS.
* [Elissa ![GitHub Repo Stars](https://img.shields.io/github/stars/KitchenStories/Elissa) ![GitHub last commit](https://img.shields.io/github/last-commit/KitchenStories/Elissa)](https://github.com/KitchenStories/Elissa) - Displays a notification on top of a UITabBarItem or any UIView anchor view to reveal additional information.
* [EstMusicIndicator ![GitHub Repo Stars](https://img.shields.io/github/stars/Aufree/ESTMusicIndicator) ![GitHub last commit](https://img.shields.io/github/last-commit/Aufree/ESTMusicIndicator)](https://github.com/Aufree/ESTMusicIndicator) - Music play indicator like iTunes.
* [Family ![GitHub Repo Stars](https://img.shields.io/github/stars/zenangst/Family) ![GitHub last commit](https://img.shields.io/github/last-commit/zenangst/Family)](https://github.com/zenangst/Family) - A child view controller framework that makes setting up your parent controllers as easy as pie.
* [FAQView ![GitHub Repo Stars](https://img.shields.io/github/stars/mukeshthawani/faqview) ![GitHub last commit](https://img.shields.io/github/last-commit/mukeshthawani/faqview)](https://github.com/mukeshthawani/faqview) - An easy to use FAQ view for iOS.
* [Fashion ![GitHub Repo Stars](https://img.shields.io/github/stars/vadymmarkov/Fashion) ![GitHub last commit](https://img.shields.io/github/last-commit/vadymmarkov/Fashion)](https://github.com/vadymmarkov/Fashion) - Fashion accessories and beauty tools to share and reuse UI styles.
* [FlagKit ![GitHub Repo Stars](https://img.shields.io/github/stars/madebybowtie/FlagKit) ![GitHub last commit](https://img.shields.io/github/last-commit/madebybowtie/FlagKit)](https://github.com/madebybowtie/FlagKit) - Beautiful flag icons for usage in apps and on the web.
* [FlexibleHeader ![GitHub Repo Stars](https://img.shields.io/github/stars/k-lpmg/FlexibleHeader) ![GitHub last commit](https://img.shields.io/github/last-commit/k-lpmg/FlexibleHeader)](https://github.com/k-lpmg/FlexibleHeader) - A container view that responds to scrolling of UIScrollView.
* [FloatRatingView ![GitHub Repo Stars](https://img.shields.io/github/stars/glenyi/FloatRatingView) ![GitHub last commit](https://img.shields.io/github/last-commit/glenyi/FloatRatingView)](https://github.com/glenyi/FloatRatingView) - Floating rating system.
* [Fluid Slider ![GitHub Repo Stars](https://img.shields.io/github/stars/Ramotion/fluid-slider) ![GitHub last commit](https://img.shields.io/github/last-commit/Ramotion/fluid-slider)](https://github.com/Ramotion/fluid-slider) - A slider widget with a popup bubble displaying the precise value selected.
* [GaugeKit ![GitHub Repo Stars](https://img.shields.io/github/stars/skywinder/GaugeKit) ![GitHub last commit](https://img.shields.io/github/last-commit/skywinder/GaugeKit)](https://github.com/skywinder/GaugeKit) - Customizable gauges. Easy reproduce Apple's style gauges.
* [GMStepper ![GitHub Repo Stars](https://img.shields.io/github/stars/gmertk/GMStepper) ![GitHub last commit](https://img.shields.io/github/last-commit/gmertk/GMStepper)](https://github.com/gmertk/GMStepper) - A stepper with a sliding label in the middle.
* [GradientProgressBar ![GitHub Repo Stars](https://img.shields.io/github/stars/fxm90/GradientProgressBar) ![GitHub last commit](https://img.shields.io/github/last-commit/fxm90/GradientProgressBar)](https://github.com/fxm90/GradientProgressBar) - An animated gradient progress bar.
* [GRMustache ![GitHub Repo Stars](https://img.shields.io/github/stars/groue/GRMustache.swift) ![GitHub last commit](https://img.shields.io/github/last-commit/groue/GRMustache.swift)](https://github.com/groue/GRMustache.swift) - Flexible Mustache templates.
* [GrowingTextView ![GitHub Repo Stars](https://img.shields.io/github/stars/KennethTsang/GrowingTextView) ![GitHub last commit](https://img.shields.io/github/last-commit/KennethTsang/GrowingTextView)](https://github.com/KennethTsang/GrowingTextView) - UITextView that supports auto growing, placeholder and length limit.
* [HGCircularSlider ![GitHub Repo Stars](https://img.shields.io/github/stars/HamzaGhazouani/HGCircularSlider) ![GitHub last commit](https://img.shields.io/github/last-commit/HamzaGhazouani/HGCircularSlider)](https://github.com/HamzaGhazouani/HGCircularSlider) - A custom reusable circular slider control for iOS application.
* [HidesNavigationBarWhenPushed ![GitHub Repo Stars](https://img.shields.io/github/stars/gontovnik/HidesNavigationBarWhenPushed) ![GitHub last commit](https://img.shields.io/github/last-commit/gontovnik/HidesNavigationBarWhenPushed)](https://github.com/gontovnik/HidesNavigationBarWhenPushed) - A library, which adds the ability to hide navigation bar when view controller is pushed via hidesNavigationBarWhenPushed flag.
* [HorizontalDial ![GitHub Repo Stars](https://img.shields.io/github/stars/kciter/HorizontalDial) ![GitHub last commit](https://img.shields.io/github/last-commit/kciter/HorizontalDial)](https://github.com/kciter/HorizontalDial) - A horizontal scroll dial like Instagram.
* [HPParallaxHeader ![GitHub Repo Stars](https://img.shields.io/github/stars/ngochiencse/HPParallaxHeader) ![GitHub last commit](https://img.shields.io/github/last-commit/ngochiencse/HPParallaxHeader)](https://github.com/ngochiencse/HPParallaxHeader) - Simple parallax header for UIScrollView.
* [IGColorPicker ![GitHub Repo Stars](https://img.shields.io/github/stars/iGenius-Srl/IGColorPicker) ![GitHub last commit](https://img.shields.io/github/last-commit/iGenius-Srl/IGColorPicker)](https://github.com/iGenius-Srl/IGColorPicker) - A customizable color picker for iOS.
* [InstantSearch iOS ![GitHub Repo Stars](https://img.shields.io/github/stars/algolia/instantsearch-ios) ![GitHub last commit](https://img.shields.io/github/last-commit/algolia/instantsearch-ios)](https://github.com/algolia/instantsearch-ios) - A library of widgets and helpers to build instant-search features on iOS.
* [KALoader ![GitHub Repo Stars](https://img.shields.io/github/stars/Kirillzzy/KALoader) ![GitHub last commit](https://img.shields.io/github/last-commit/Kirillzzy/KALoader)](https://github.com/Kirillzzy/KALoader) - Beautiful animated placeholders for showing loading of data.
* [KMNavigationBarTransition ![GitHub Repo Stars](https://img.shields.io/github/stars/MoZhouqi/KMNavigationBarTransition) ![GitHub last commit](https://img.shields.io/github/last-commit/MoZhouqi/KMNavigationBarTransition)](https://github.com/MoZhouqi/KMNavigationBarTransition) - A drop-in universal library helps you to manage the navigation bar styles and makes transition animations smooth between different navigation bar styles while pushing or popping a view controller for all orientations.
* [KMPlaceholderTextView ![GitHub Repo Stars](https://img.shields.io/github/stars/MoZhouqi/KMPlaceholderTextView) ![GitHub last commit](https://img.shields.io/github/last-commit/MoZhouqi/KMPlaceholderTextView)](https://github.com/MoZhouqi/KMPlaceholderTextView) - A UITextView subclass that adds support for multiline placeholder.
* [LeeGo ![GitHub Repo Stars](https://img.shields.io/github/stars/wangshengjia/LeeGo) ![GitHub last commit](https://img.shields.io/github/last-commit/wangshengjia/LeeGo)](https://github.com/wangshengjia/LeeGo) - Declarative, configurable & highly reusable UI development as making Lego bricks.
* [LicensePlist ![GitHub Repo Stars](https://img.shields.io/github/stars/mono0926/LicensePlist) ![GitHub last commit](https://img.shields.io/github/last-commit/mono0926/LicensePlist)](https://github.com/mono0926/LicensePlist) - A command-line tool that automatically generates a Plist of all your dependencies.
* [LiquidLoader ![GitHub Repo Stars](https://img.shields.io/github/stars/yoavlt/LiquidLoader) ![GitHub last commit](https://img.shields.io/github/last-commit/yoavlt/LiquidLoader)](https://github.com/yoavlt/LiquidLoader) - Spinner loader components with liquid animation.
* [LoadingShimmer ![GitHub Repo Stars](https://img.shields.io/github/stars/jogendra/LoadingShimmer) ![GitHub last commit](https://img.shields.io/github/last-commit/jogendra/LoadingShimmer)](https://github.com/jogendra/LoadingShimmer) - An easy way to add a shimmering effect to any view with just one line of code. It is useful as an unobtrusive loading indicator.
* [Macaw ![GitHub Repo Stars](https://img.shields.io/github/stars/exyte/macaw) ![GitHub last commit](https://img.shields.io/github/last-commit/exyte/macaw)](https://github.com/exyte/macaw) - Powerful and easy-to-use vector graphics library with SVG support.
* [Magnetic ![GitHub Repo Stars](https://img.shields.io/github/stars/efremidze/Magnetic) ![GitHub last commit](https://img.shields.io/github/last-commit/efremidze/Magnetic)](https://github.com/efremidze/Magnetic) - SpriteKit Floating Bubble Picker (inspired by Apple Music).
* [Mandoline ![GitHub Repo Stars](https://img.shields.io/github/stars/blueapron/Mandoline) ![GitHub last commit](https://img.shields.io/github/last-commit/blueapron/Mandoline)](https://github.com/blueapron/Mandoline) - An iOS picker view to serve all your 'picking' needs.
* [MantleModal ![GitHub Repo Stars](https://img.shields.io/github/stars/canalesb93/MantleModal) ![GitHub last commit](https://img.shields.io/github/last-commit/canalesb93/MantleModal)](https://github.com/canalesb93/MantleModal) - A simple modal resource that uses a UIScrollView to allow the user to close the modal by dragging it down.
* [Material ![GitHub Repo Stars](https://img.shields.io/github/stars/CosmicMind/Material) ![GitHub last commit](https://img.shields.io/github/last-commit/CosmicMind/Material)](https://github.com/CosmicMind/Material) - Express your creativity with Material, an animation and graphics framework for Google's Material Design and Apple's Flat UI.
* [Material Components for iOS ![GitHub Repo Stars](https://img.shields.io/github/stars/material-components/material-components-ios) ![GitHub last commit](https://img.shields.io/github/last-commit/material-components/material-components-ios)](https://github.com/material-components/material-components-ios) - Modular and customizable Material Design UI components.
* [MaterialKit ![GitHub Repo Stars](https://img.shields.io/github/stars/nghialv/MaterialKit) ![GitHub last commit](https://img.shields.io/github/last-commit/nghialv/MaterialKit)](https://github.com/nghialv/MaterialKit) - Material design components.
* [MediaBrowser ![GitHub Repo Stars](https://img.shields.io/github/stars/younatics/MediaBrowser) ![GitHub last commit](https://img.shields.io/github/last-commit/younatics/MediaBrowser)](https://github.com/younatics/MediaBrowser) - Simple iOS photo and video browser with optional grid view, captions and selections.
* [MPParallaxView ![GitHub Repo Stars](https://img.shields.io/github/stars/DroidsOnRoids/MPParallaxView) ![GitHub last commit](https://img.shields.io/github/last-commit/DroidsOnRoids/MPParallaxView)](https://github.com/DroidsOnRoids/MPParallaxView) - Apple TV Parallax effect.
* [MultiSelectSegmentedControl ![GitHub Repo Stars](https://img.shields.io/github/stars/yonat/MultiSelectSegmentedControl) ![GitHub last commit](https://img.shields.io/github/last-commit/yonat/MultiSelectSegmentedControl)](https://github.com/yonat/MultiSelectSegmentedControl) - UISegmentedControl remake that supports selecting multiple segments, vertical stacking, combining text and images.
* [MultiSlider ![GitHub Repo Stars](https://img.shields.io/github/stars/yonat/MultiSlider) ![GitHub last commit](https://img.shields.io/github/last-commit/yonat/MultiSlider)](https://github.com/yonat/MultiSlider) - UISlider clone with multiple thumbs and values, range highlight, optional snap intervals, optional value labels, either vertical or horizontal.
* [MXParallaxHeader ![GitHub Repo Stars](https://img.shields.io/github/stars/maxep/MXParallaxHeader) ![GitHub last commit](https://img.shields.io/github/last-commit/maxep/MXParallaxHeader)](https://github.com/maxep/MXParallaxHeader) - Simple parallax header for UIScrollView.
* [MZFormSheetPresentationController ![GitHub Repo Stars](https://img.shields.io/github/stars/m1entus/MZFormSheetPresentationController) ![GitHub last commit](https://img.shields.io/github/last-commit/m1entus/MZFormSheetPresentationController)](https://github.com/m1entus/MZFormSheetPresentationController) - Provides an alternative to the native iOS UIModalPresentationFormSheet, adding support for iPhone and additional opportunities to setup controller size and feel form sheet.
* [NeumorphismKit ![GitHub Repo Stars](https://img.shields.io/github/stars/y-okudera/NeumorphismKit) ![GitHub last commit](https://img.shields.io/github/last-commit/y-okudera/NeumorphismKit)](https://github.com/y-okudera/NeumorphismKit) - Neumorphism framework for UIKit.
* [NextGrowingTextView ![GitHub Repo Stars](https://img.shields.io/github/stars/FluidGroup/NextGrowingTextView) ![GitHub last commit](https://img.shields.io/github/last-commit/FluidGroup/NextGrowingTextView)](https://github.com/FluidGroup/NextGrowingTextView) - The next in the generations of 'growing textviews' optimized for iOS 7 and above.
* [NVActivityIndicatorView ![GitHub Repo Stars](https://img.shields.io/github/stars/ninjaprox/NVActivityIndicatorView) ![GitHub last commit](https://img.shields.io/github/last-commit/ninjaprox/NVActivityIndicatorView)](https://github.com/ninjaprox/NVActivityIndicatorView) - Collection of nice loading animations.
* [OverlayContainer ![GitHub Repo Stars](https://img.shields.io/github/stars/applidium/OverlayContainer) ![GitHub last commit](https://img.shields.io/github/last-commit/applidium/OverlayContainer)](https://github.com/applidium/OverlayContainer) - OverlayContainer makes it easier to develop overlay based interfaces, such as the one presented in the Apple Maps or Stocks apps.
* [Partition Kit ![GitHub Repo Stars](https://img.shields.io/github/stars/kieranb662/PartitionKit) ![GitHub last commit](https://img.shields.io/github/last-commit/kieranb662/PartitionKit)](https://github.com/kieranb662/PartitionKit) - A SwiftUI Library for creating resizable partitions for View Content.
* [Popovers ![GitHub Repo Stars](https://img.shields.io/github/stars/aheze/Popovers) ![GitHub last commit](https://img.shields.io/github/last-commit/aheze/Popovers)](https://github.com/aheze/Popovers) - A library to present popovers. Simple, modern, and highly customizable. Not boring!
* [Preferences ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/Preferences) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/Preferences)](https://github.com/sindresorhus/Preferences) - Add a preferences window to your macOS app in minutes.
* [ProgressIndicatorView ![GitHub Repo Stars](https://img.shields.io/github/stars/exyte/ProgressIndicatorView) ![GitHub last commit](https://img.shields.io/github/last-commit/exyte/ProgressIndicatorView)](https://github.com/exyte/ProgressIndicatorView) - A progress indicator view library written in SwiftUI.
* [PullToDismiss ![GitHub Repo Stars](https://img.shields.io/github/stars/sgr-ksmt/PullToDismiss) ![GitHub last commit](https://img.shields.io/github/last-commit/sgr-ksmt/PullToDismiss)](https://github.com/sgr-ksmt/PullToDismiss) - You can dismiss modal viewcontroller by pulling scrollview or navigationbar.
* [RangeSeekSlider ![GitHub Repo Stars](https://img.shields.io/github/stars/WorldDownTown/RangeSeekSlider) ![GitHub last commit](https://img.shields.io/github/last-commit/WorldDownTown/RangeSeekSlider)](https://github.com/WorldDownTown/RangeSeekSlider) - A customizable range slider like a UISlider for iOS.
* [Reel search ![GitHub Repo Stars](https://img.shields.io/github/stars/Ramotion/reel-search) ![GitHub last commit](https://img.shields.io/github/last-commit/Ramotion/reel-search)](https://github.com/Ramotion/reel-search) - Option list managed as a reel.
* [ResizingTokenField ![GitHub Repo Stars](https://img.shields.io/github/stars/tadejr/ResizingTokenField) ![GitHub last commit](https://img.shields.io/github/last-commit/tadejr/ResizingTokenField)](https://github.com/tadejr/ResizingTokenField) - A UICollectionView-based token field which provides intrinsic content height.
* [RetroProgress ![GitHub Repo Stars](https://img.shields.io/github/stars/hyperoslo/RetroProgress) ![GitHub last commit](https://img.shields.io/github/last-commit/hyperoslo/RetroProgress)](https://github.com/hyperoslo/RetroProgress) - Retro looking progress bar straight from the 90s.
* [SectionedSlider ![GitHub Repo Stars](https://img.shields.io/github/stars/LeonardoCardoso/SectionedSlider) ![GitHub last commit](https://img.shields.io/github/last-commit/LeonardoCardoso/SectionedSlider)](https://github.com/LeonardoCardoso/SectionedSlider) - Control Center Slider.
* [SelectionDialog ![GitHub Repo Stars](https://img.shields.io/github/stars/kciter/SelectionDialog) ![GitHub last commit](https://img.shields.io/github/last-commit/kciter/SelectionDialog)](https://github.com/kciter/SelectionDialog) - Simple selection dialog.
* [ShadowView ![GitHub Repo Stars](https://img.shields.io/github/stars/PierrePerrin/ShadowView) ![GitHub last commit](https://img.shields.io/github/last-commit/PierrePerrin/ShadowView)](https://github.com/PierrePerrin/ShadowView) - Make shadows management easy on UIView.
* [Shiny ![GitHub Repo Stars](https://img.shields.io/github/stars/efremidze/Shiny) ![GitHub last commit](https://img.shields.io/github/last-commit/efremidze/Shiny)](https://github.com/efremidze/Shiny) - Iridescent Effect View (inspired by Apple Pay Cash).
* [ShowSomeProgress ![GitHub Repo Stars](https://img.shields.io/github/stars/stoneburner/ShowSomeProgress) ![GitHub last commit](https://img.shields.io/github/last-commit/stoneburner/ShowSomeProgress)](https://github.com/stoneburner/ShowSomeProgress) - Animated Progress and Activity Indicators for iOS apps.
* [SkeletonView ![GitHub Repo Stars](https://img.shields.io/github/stars/Juanpe/SkeletonView) ![GitHub last commit](https://img.shields.io/github/last-commit/Juanpe/SkeletonView)](https://github.com/Juanpe/SkeletonView) - An elegant way to show users that something is happening and also prepare them to which contents he is waiting.
* [SKPhotoBrowser ![GitHub Repo Stars](https://img.shields.io/github/stars/suzuki-0000/SKPhotoBrowser) ![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-0000/SKPhotoBrowser)](https://github.com/suzuki-0000/SKPhotoBrowser) - Simple PhotoBrowser/Viewer inspired by facebook, twitter photo browsers.
* [Spots](https://github.com/hyperoslo) - Spots is a view controller framework that makes your setup and future development blazingly fast.
* [SpreadsheetView ![GitHub Repo Stars](https://img.shields.io/github/stars/kishikawakatsumi/SpreadsheetView) ![GitHub last commit](https://img.shields.io/github/last-commit/kishikawakatsumi/SpreadsheetView)](https://github.com/kishikawakatsumi/SpreadsheetView) - Full configurable spreadsheet view user interfaces for iOS applications.
* [StarryStars ![GitHub Repo Stars](https://img.shields.io/github/stars/peterprokop/StarryStars) ![GitHub last commit](https://img.shields.io/github/last-commit/peterprokop/StarryStars)](https://github.com/peterprokop/StarryStars) - Display & edit ratings, fully customizable from interface builder.
* [StatefulViewController ![GitHub Repo Stars](https://img.shields.io/github/stars/aschuch/StatefulViewController) ![GitHub last commit](https://img.shields.io/github/last-commit/aschuch/StatefulViewController)](https://github.com/aschuch/StatefulViewController) - Placeholder views based on content, loading, error or empty states.
* [StepProgressView ![GitHub Repo Stars](https://img.shields.io/github/stars/yonat/StepProgressView) ![GitHub last commit](https://img.shields.io/github/last-commit/yonat/StepProgressView)](https://github.com/yonat/StepProgressView) - Step-by-step progress view with labels and shapes. A good replacement for UIActivityIndicatorView and UIProgressView.
* [SweetCurtain ![GitHub Repo Stars](https://img.shields.io/github/stars/multimediasuite/SweetCurtain) ![GitHub last commit](https://img.shields.io/github/last-commit/multimediasuite/SweetCurtain)](https://github.com/multimediasuite/SweetCurtain) - Really sweet and easy bottom pullable sheet implementation. You can find a similar implementation in applications like Apple Maps, Find My, Stocks, etc.
* [SwiftyUI ![GitHub Repo Stars](https://img.shields.io/github/stars/haoking/SwiftyUI) ![GitHub last commit](https://img.shields.io/github/last-commit/haoking/SwiftyUI)](https://github.com/haoking/SwiftyUI) - High performance and lightweight UIView, UIImage, UIImageView, UIlabel, UIButton and more.
* [TagListView ![GitHub Repo Stars](https://img.shields.io/github/stars/ElaWorkshop/TagListView) ![GitHub last commit](https://img.shields.io/github/last-commit/ElaWorkshop/TagListView)](https://github.com/ElaWorkshop/TagListView) - Simple but highly customizable iOS tag list view.
* [Toaster ![GitHub Repo Stars](https://img.shields.io/github/stars/devxoul/Toaster) ![GitHub last commit](https://img.shields.io/github/last-commit/devxoul/Toaster)](https://github.com/devxoul/Toaster) - Notification toasts.
* [Twinkle ![GitHub Repo Stars](https://img.shields.io/github/stars/piemonte/Twinkle) ![GitHub last commit](https://img.shields.io/github/last-commit/piemonte/Twinkle)](https://github.com/piemonte/Twinkle) - Easy way to make elements in your iOS app twinkle.
* [UIPheonix ![GitHub Repo Stars](https://img.shields.io/github/stars/MKGitHub/UIPheonix) ![GitHub last commit](https://img.shields.io/github/last-commit/MKGitHub/UIPheonix)](https://github.com/MKGitHub/UIPheonix) - Easy, flexible, dynamic and highly scalable UI framework + concept for reusable component/control-driven apps.
* [UltraDrawerView ![GitHub Repo Stars](https://img.shields.io/github/stars/super-ultra/UltraDrawerView) ![GitHub last commit](https://img.shields.io/github/last-commit/super-ultra/UltraDrawerView)](https://github.com/super-ultra/UltraDrawerView) - Lightweight, fast and customizable Drawer View implementation identical to Apple Maps, Stocks and etc.
* [URLEmbeddedView ![GitHub Repo Stars](https://img.shields.io/github/stars/marty-suzuki/URLEmbeddedView) ![GitHub last commit](https://img.shields.io/github/last-commit/marty-suzuki/URLEmbeddedView)](https://github.com/marty-suzuki/URLEmbeddedView) - Automatically caches the object that is confirmed the Open Graph Protocol, and displays it as URL embedded card.
* [Wallet ![GitHub Repo Stars](https://img.shields.io/github/stars/russ-stamant/Wallet) ![GitHub last commit](https://img.shields.io/github/last-commit/russ-stamant/Wallet)](https://github.com/russ-stamant/Wallet) - A replica of the Apple's Wallet interface. Add, delete or present your cards and passes.
* [Windless ![GitHub Repo Stars](https://img.shields.io/github/stars/ParkGwangBeom/Windless) ![GitHub last commit](https://img.shields.io/github/last-commit/ParkGwangBeom/Windless)](https://github.com/ParkGwangBeom/Windless) - Windless makes it easy to implement invisible layout loading view.
* [WSTagsField ![GitHub Repo Stars](https://img.shields.io/github/stars/whitesmith/WSTagsField) ![GitHub last commit](https://img.shields.io/github/last-commit/whitesmith/WSTagsField)](https://github.com/whitesmith/WSTagsField) - An iOS text field that represents different Tags.
* [YMTreeMap ![GitHub Repo Stars](https://img.shields.io/github/stars/yahoo/YMTreeMap) ![GitHub last commit](https://img.shields.io/github/last-commit/yahoo/YMTreeMap)](https://github.com/yahoo/YMTreeMap) - Treemap / Heatmap layout engine, based on Squarified.
* [YNSearch ![GitHub Repo Stars](https://img.shields.io/github/stars/younatics/YNSearch) ![GitHub last commit](https://img.shields.io/github/last-commit/younatics/YNSearch)](https://github.com/younatics/YNSearch) - Awesome fully customizable search view like Pinterest.

#### Alert
*Libs to display alert, action sheet, notification, popup.* [back to top](#readme) 

* [Alertift ![GitHub Repo Stars](https://img.shields.io/github/stars/sgr-ksmt/Alertift) ![GitHub last commit](https://img.shields.io/github/last-commit/sgr-ksmt/Alertift)](https://github.com/sgr-ksmt/Alertift) - Modern, easy UIAlertController wrapper.
* [Alerts Pickers ![GitHub Repo Stars](https://img.shields.io/github/stars/dillidon/alerts-and-pickers) ![GitHub last commit](https://img.shields.io/github/last-commit/dillidon/alerts-and-pickers)](https://github.com/dillidon/alerts-and-pickers) - Advanced usage of UIAlertController with TextField, DatePicker, PickerView, TableView and CollectionView.
* [ALRT ![GitHub Repo Stars](https://img.shields.io/github/stars/mshrwtnb/alrt) ![GitHub last commit](https://img.shields.io/github/last-commit/mshrwtnb/alrt)](https://github.com/mshrwtnb/alrt) - An easier constructor for UIAlertController. Present an alert from anywhere.
* [AwaitToast ![GitHub Repo Stars](https://img.shields.io/github/stars/k-lpmg/AwaitToast) ![GitHub last commit](https://img.shields.io/github/last-commit/k-lpmg/AwaitToast)](https://github.com/k-lpmg/AwaitToast) - 🍞 An async waiting toast with basic toast. Inspired by facebook posting toast.
* [CDAlertView ![GitHub Repo Stars](https://img.shields.io/github/stars/candostdagdeviren/CDAlertView) ![GitHub last commit](https://img.shields.io/github/last-commit/candostdagdeviren/CDAlertView)](https://github.com/candostdagdeviren/CDAlertView) - Highly customizable alert/notification/success/error/alarm popup.
* [CFNotify ![GitHub Repo Stars](https://img.shields.io/github/stars/JT501/CFNotify) ![GitHub last commit](https://img.shields.io/github/last-commit/JT501/CFNotify)](https://github.com/JT501/CFNotify) - A customizable framework to create draggable alert views.
* [EZAlertController ![GitHub Repo Stars](https://img.shields.io/github/stars/thellimist/EZAlertController) ![GitHub last commit](https://img.shields.io/github/last-commit/thellimist/EZAlertController)](https://github.com/thellimist/EZAlertController) - Easy UIAlertController.
* [GSMessage ![GitHub Repo Stars](https://img.shields.io/github/stars/wxxsw/GSMessages) ![GitHub last commit](https://img.shields.io/github/last-commit/wxxsw/GSMessages)](https://github.com/wxxsw/GSMessages) - A simple style messages/notifications for iOS 7+.
* [Kamagari ![GitHub Repo Stars](https://img.shields.io/github/stars/tasanobu-zz/Kamagari) ![GitHub last commit](https://img.shields.io/github/last-commit/tasanobu-zz/Kamagari)](https://github.com/tasanobu-zz/Kamagari) - Simple UIAlertController builder class.
* [Loaf ![GitHub Repo Stars](https://img.shields.io/github/stars/schmidyy/Loaf) ![GitHub last commit](https://img.shields.io/github/last-commit/schmidyy/Loaf)](https://github.com/schmidyy/Loaf) - A simple framework for easy iOS Toasts.
* [NotificationBanner ![GitHub Repo Stars](https://img.shields.io/github/stars/Daltron/NotificationBanner) ![GitHub last commit](https://img.shields.io/github/last-commit/Daltron/NotificationBanner)](https://github.com/Daltron/NotificationBanner) - The easiest way to display highly customizable in app notification banners in iOS.
* [PMAlertController ![GitHub Repo Stars](https://img.shields.io/github/stars/pmusolino/PMAlertController) ![GitHub last commit](https://img.shields.io/github/last-commit/pmusolino/PMAlertController)](https://github.com/pmusolino/PMAlertController) - PMAlertController is a great and customizable substitute to UIAlertController.
* [PopupDialog ![GitHub Repo Stars](https://img.shields.io/github/stars/orderella/PopupDialog) ![GitHub last commit](https://img.shields.io/github/last-commit/orderella/PopupDialog)](https://github.com/orderella/PopupDialog) - A simple, customizable popup dialog. Replaces UIAlertController alert style.
* [PopupView ![GitHub Repo Stars](https://img.shields.io/github/stars/exyte/PopupView) ![GitHub last commit](https://img.shields.io/github/last-commit/exyte/PopupView)](https://github.com/exyte/PopupView) - Toasts and popups library written with SwiftUI.
* [SCLAlertView ![GitHub Repo Stars](https://img.shields.io/github/stars/vikmeup/SCLAlertView-Swift) ![GitHub last commit](https://img.shields.io/github/last-commit/vikmeup/SCLAlertView-Swift)](https://github.com/vikmeup/SCLAlertView-Swift) - Animated Alert view.
* [Sheet ![GitHub Repo Stars](https://img.shields.io/github/stars/ParkGwangBeom/Sheet) ![GitHub last commit](https://img.shields.io/github/last-commit/ParkGwangBeom/Sheet)](https://github.com/ParkGwangBeom/Sheet) - Actionsheet with navigation features such as the Flipboard App.
* [SPAlert ![GitHub Repo Stars](https://img.shields.io/github/stars/ivanvorobei/SPAlert) ![GitHub last commit](https://img.shields.io/github/last-commit/ivanvorobei/SPAlert)](https://github.com/ivanvorobei/SPAlert) - Native popup from Apple Music & Feedback in AppStore. Contains Done & Heart presets.
* [StatusAlert ![GitHub Repo Stars](https://img.shields.io/github/stars/LowKostKustomz/StatusAlert) ![GitHub last commit](https://img.shields.io/github/last-commit/LowKostKustomz/StatusAlert)](https://github.com/LowKostKustomz/StatusAlert) - Display Apple system-like self-hiding status alerts without interrupting user flow.
* [SweetAlert ![GitHub Repo Stars](https://img.shields.io/github/stars/codestergit/SweetAlert-iOS) ![GitHub last commit](https://img.shields.io/github/last-commit/codestergit/SweetAlert-iOS)](https://github.com/codestergit/SweetAlert-iOS) - Alert system.
* [Swift-Prompts ![GitHub Repo Stars](https://img.shields.io/github/stars/GabrielAlva/Swift-Prompts) ![GitHub last commit](https://img.shields.io/github/last-commit/GabrielAlva/Swift-Prompts)](https://github.com/GabrielAlva/Swift-Prompts) - Design custom prompts with a great scope of options to choose from.
* [SwiftEntryKit ![GitHub Repo Stars](https://img.shields.io/github/stars/huri000/SwiftEntryKit) ![GitHub last commit](https://img.shields.io/github/last-commit/huri000/SwiftEntryKit)](https://github.com/huri000/SwiftEntryKit) - A simple and versatile pop-up presenter.
* [SwiftMessages ![GitHub Repo Stars](https://img.shields.io/github/stars/SwiftKickMobile/SwiftMessages) ![GitHub last commit](https://img.shields.io/github/last-commit/SwiftKickMobile/SwiftMessages)](https://github.com/SwiftKickMobile/SwiftMessages) - A very flexible message bar for iOS.
* [SwiftOverlays ![GitHub Repo Stars](https://img.shields.io/github/stars/peterprokop/SwiftOverlays) ![GitHub last commit](https://img.shields.io/github/last-commit/peterprokop/SwiftOverlays)](https://github.com/peterprokop/SwiftOverlays) - various popups and notifications.
* [Toast-Swift ![GitHub Repo Stars](https://img.shields.io/github/stars/BastiaanJansen/Toast-Swift) ![GitHub last commit](https://img.shields.io/github/last-commit/BastiaanJansen/Toast-Swift)](https://github.com/BastiaanJansen/Toast-Swift) - An easy to use library to create iOS 14 and newer style toasts.
* [XLActionController ![GitHub Repo Stars](https://img.shields.io/github/stars/xmartlabs/XLActionController) ![GitHub last commit](https://img.shields.io/github/last-commit/xmartlabs/XLActionController)](https://github.com/xmartlabs/XLActionController) - Fully customizable and extensible action sheet controller.
* [Zingle ![GitHub Repo Stars](https://img.shields.io/github/stars/hemangshah/Zingle) ![GitHub last commit](https://img.shields.io/github/last-commit/hemangshah/Zingle)](https://github.com/hemangshah/Zingle) - An alert will display underneath your UINavigationBar.

#### Blur
[back to top](#readme) 

* [VisualEffectView ![GitHub Repo Stars](https://img.shields.io/github/stars/efremidze/VisualEffectView) ![GitHub last commit](https://img.shields.io/github/last-commit/efremidze/VisualEffectView)](https://github.com/efremidze/VisualEffectView) - UIVisualEffectView subclass with tint color.

#### Button
[back to top](#readme) 

* [AHDownloadButton ![GitHub Repo Stars](https://img.shields.io/github/stars/amerhukic/AHDownloadButton) ![GitHub last commit](https://img.shields.io/github/last-commit/amerhukic/AHDownloadButton)](https://github.com/amerhukic/AHDownloadButton) - Customizable download button with progress and transition animations. It is based on Apple's App Store download button.
* [DOFavoriteButton ![GitHub Repo Stars](https://img.shields.io/github/stars/okmr-d/DOFavoriteButton) ![GitHub last commit](https://img.shields.io/github/last-commit/okmr-d/DOFavoriteButton)](https://github.com/okmr-d/DOFavoriteButton) - Cute Animated Button.
* [ExpandableButton ![GitHub Repo Stars](https://img.shields.io/github/stars/DimaMishchenko/ExpandableButton) ![GitHub last commit](https://img.shields.io/github/last-commit/DimaMishchenko/ExpandableButton)](https://github.com/DimaMishchenko/ExpandableButton) - Customizable and easy to use expandable button.
* [FloatingButton ![GitHub Repo Stars](https://img.shields.io/github/stars/exyte/FloatingButton) ![GitHub last commit](https://img.shields.io/github/last-commit/exyte/FloatingButton)](https://github.com/exyte/FloatingButton) - Easily customizable floating button menu created with SwiftUI.
* [Floaty ![GitHub Repo Stars](https://img.shields.io/github/stars/kciter/Floaty) ![GitHub last commit](https://img.shields.io/github/last-commit/kciter/Floaty)](https://github.com/kciter/Floaty) - Floating Action Button for iOS.
* [IGStoryButtonKit ![GitHub Repo Stars](https://img.shields.io/github/stars/KaoruMuta/IGStoryButtonKit) ![GitHub last commit](https://img.shields.io/github/last-commit/KaoruMuta/IGStoryButtonKit)](https://github.com/KaoruMuta/IGStoryButtonKit) - Easy-to-use button with rich animation inspired by instagram stories.
* [LGButton ![GitHub Repo Stars](https://img.shields.io/github/stars/loregr/LGButton) ![GitHub last commit](https://img.shields.io/github/last-commit/loregr/LGButton)](https://github.com/loregr/LGButton) - A fully customisable subclass of the native UIControl which allows you to create beautiful buttons without writing any line of code.
* [LTHRadioButton ![GitHub Repo Stars](https://img.shields.io/github/stars/rolandleth/LTHRadioButton) ![GitHub last commit](https://img.shields.io/github/last-commit/rolandleth/LTHRadioButton)](https://github.com/rolandleth/LTHRadioButton) - A radio button with a pretty animation.
* [MultiToggleButton ![GitHub Repo Stars](https://img.shields.io/github/stars/yonat/MultiToggleButton) ![GitHub last commit](https://img.shields.io/github/last-commit/yonat/MultiToggleButton)](https://github.com/yonat/MultiToggleButton) - A UIButton subclass that implements tap-to-toggle button text (like the camera flash and timer buttons).
* [NFDownloadButton ![GitHub Repo Stars](https://img.shields.io/github/stars/LeonardoCardoso/NFDownloadButton) ![GitHub last commit](https://img.shields.io/github/last-commit/LeonardoCardoso/NFDownloadButton)](https://github.com/LeonardoCardoso/NFDownloadButton) - Revamped Download Button. It's kinda a reverse engineering of Netflix's app download button.
* [PMSuperButton ![GitHub Repo Stars](https://img.shields.io/github/stars/pmusolino/PMSuperButton) ![GitHub last commit](https://img.shields.io/github/last-commit/pmusolino/PMSuperButton)](https://github.com/pmusolino/PMSuperButton) - A powerful UIButton with super powers, customizable from Storyboard.
* [RadioGroup ![GitHub Repo Stars](https://img.shields.io/github/stars/yonat/RadioGroup) ![GitHub last commit](https://img.shields.io/github/last-commit/yonat/RadioGroup)](https://github.com/yonat/RadioGroup) - The missing iOS radio buttons group.
* [SwiftShareBubbles ![GitHub Repo Stars](https://img.shields.io/github/stars/takecian/SwiftShareBubbles) ![GitHub last commit](https://img.shields.io/github/last-commit/takecian/SwiftShareBubbles)](https://github.com/takecian/SwiftShareBubbles) - Animated social share buttons control for iOS.
* [TransitionButton ![GitHub Repo Stars](https://img.shields.io/github/stars/AladinWay/TransitionButton) ![GitHub last commit](https://img.shields.io/github/last-commit/AladinWay/TransitionButton)](https://github.com/AladinWay/TransitionButton) - UIButton subclass for loading and transition animation.

#### Calendar
[back to top](#readme) 

* [CalendarKit ![GitHub Repo Stars](https://img.shields.io/github/stars/richardtop/CalendarKit) ![GitHub last commit](https://img.shields.io/github/last-commit/richardtop/CalendarKit)](https://github.com/richardtop/CalendarKit) - Fully customizable calendar day view.
* [CalendarView ![GitHub Repo Stars](https://img.shields.io/github/stars/mmick66/CalendarView) ![GitHub last commit](https://img.shields.io/github/last-commit/mmick66/CalendarView)](https://github.com/mmick66/CalendarView) - Calendar Component, It features both vertical and horizontal layout (and scrolling) and the display of native calendar events.
* [DateTimePicker ![GitHub Repo Stars](https://img.shields.io/github/stars/itsmeichigo/DateTimePicker) ![GitHub last commit](https://img.shields.io/github/last-commit/itsmeichigo/DateTimePicker)](https://github.com/itsmeichigo/DateTimePicker) - A nicer iOS UI component for picking date and time.
* [ElegantCalendar ![GitHub Repo Stars](https://img.shields.io/github/stars/ThasianX/ElegantCalendar) ![GitHub last commit](https://img.shields.io/github/last-commit/ThasianX/ElegantCalendar)](https://github.com/ThasianX/ElegantCalendar) - The elegant full screen calendar missed in SwiftUI.
* [HorizonCalendar ![GitHub Repo Stars](https://img.shields.io/github/stars/airbnb/HorizonCalendar) ![GitHub last commit](https://img.shields.io/github/last-commit/airbnb/HorizonCalendar)](https://github.com/airbnb/HorizonCalendar) - A declarative, performant, iOS calendar UI component that supports use cases ranging from simple date pickers all the way up to fully-featured calendar apps.
* [JTAppleCalendar ![GitHub Repo Stars](https://img.shields.io/github/stars/patchthecode/JTAppleCalendar) ![GitHub last commit](https://img.shields.io/github/last-commit/patchthecode/JTAppleCalendar)](https://github.com/patchthecode/JTAppleCalendar) - UI calendar handler.
* [KVKCalendar ![GitHub Repo Stars](https://img.shields.io/github/stars/kvyatkovskys/KVKCalendar) ![GitHub last commit](https://img.shields.io/github/last-commit/kvyatkovskys/KVKCalendar)](https://github.com/kvyatkovskys/KVKCalendar) - A most fully customization calendar for Apple platforms 📅
* [Workaholic ![GitHub Repo Stars](https://img.shields.io/github/stars/hemangshah/Workaholic) ![GitHub last commit](https://img.shields.io/github/last-commit/hemangshah/Workaholic)](https://github.com/hemangshah/Workaholic) - A GitHub-like work contribution timeline.

#### Cards
[back to top](#readme) 

* [CardNavigation ![GitHub Repo Stars](https://img.shields.io/github/stars/james01/CardNavigation) ![GitHub last commit](https://img.shields.io/github/last-commit/james01/CardNavigation)](https://github.com/james01/CardNavigation) - A navigation controller that displays its view controllers as an interactive stack of cards.
* [CardParts ![GitHub Repo Stars](https://img.shields.io/github/stars/intuit/CardParts) ![GitHub last commit](https://img.shields.io/github/last-commit/intuit/CardParts)](https://github.com/intuit/CardParts) - A reactive, card-based UI framework built on UIKit for iOS developers.
* [VerticalCardSwiper ![GitHub Repo Stars](https://img.shields.io/github/stars/JoniVR/VerticalCardSwiper) ![GitHub last commit](https://img.shields.io/github/last-commit/JoniVR/VerticalCardSwiper)](https://github.com/JoniVR/VerticalCardSwiper) - A marriage between the Shazam Discover UI and Tinder, built with UICollectionView.

#### Form
[back to top](#readme) 

* [Carbon ![GitHub Repo Stars](https://img.shields.io/github/stars/ra1028/Carbon) ![GitHub last commit](https://img.shields.io/github/last-commit/ra1028/Carbon)](https://github.com/ra1028/Carbon) - 🚴 A declarative library for building component-based user interfaces in UITableView and UICollectionView.
* [Eureka ![GitHub Repo Stars](https://img.shields.io/github/stars/xmartlabs/Eureka) ![GitHub last commit](https://img.shields.io/github/last-commit/xmartlabs/Eureka)](https://github.com/xmartlabs/Eureka) - Elegant iOS form builder.
* [FDBarGauge ![GitHub Repo Stars](https://img.shields.io/github/stars/fulldecent/FDBarGauge) ![GitHub last commit](https://img.shields.io/github/last-commit/fulldecent/FDBarGauge)](https://github.com/fulldecent/FDBarGauge) - Simulate the level indicator on an audio mixing board
* [Former ![GitHub Repo Stars](https://img.shields.io/github/stars/ra1028/Former) ![GitHub last commit](https://img.shields.io/github/last-commit/ra1028/Former)](https://github.com/ra1028/Former) - A fully customizable library for easy creating UITableView based form.
* [ObjectForm ![GitHub Repo Stars](https://img.shields.io/github/stars/haojianzong/ObjectForm) ![GitHub last commit](https://img.shields.io/github/last-commit/haojianzong/ObjectForm)](https://github.com/haojianzong/ObjectForm) - A simple yet powerful library to build form for your class models.
* [SwiftyFORM ![GitHub Repo Stars](https://img.shields.io/github/stars/neoneye/SwiftyFORM) ![GitHub last commit](https://img.shields.io/github/last-commit/neoneye/SwiftyFORM)](https://github.com/neoneye/SwiftyFORM) - Forms that can be validated.

#### HUD
[back to top](#readme) 

* [EZLoadingActivity ![GitHub Repo Stars](https://img.shields.io/github/stars/Esqarrouth/EZLoadingActivity) ![GitHub last commit](https://img.shields.io/github/last-commit/Esqarrouth/EZLoadingActivity)](https://github.com/Esqarrouth/EZLoadingActivity) - Lightweight loading activity HUD.
* [GradientLoadingBar ![GitHub Repo Stars](https://img.shields.io/github/stars/fxm90/GradientLoadingBar) ![GitHub last commit](https://img.shields.io/github/last-commit/fxm90/GradientLoadingBar)](https://github.com/fxm90/GradientLoadingBar) - An animated gradient loading bar.
* [KRProgressHUD ![GitHub Repo Stars](https://img.shields.io/github/stars/krimpedance/KRProgressHUD) ![GitHub last commit](https://img.shields.io/github/last-commit/krimpedance/KRProgressHUD)](https://github.com/krimpedance/KRProgressHUD) - A beautiful and customizable progress HUD.
* [PKHUD ![GitHub Repo Stars](https://img.shields.io/github/stars/pkluz/PKHUD) ![GitHub last commit](https://img.shields.io/github/last-commit/pkluz/PKHUD)](https://github.com/pkluz/PKHUD) - Reimplementation of the Apple HUD.

#### Label
[back to top](#readme) 

* [ActiveLabel ![GitHub Repo Stars](https://img.shields.io/github/stars/optonaut/ActiveLabel.swift) ![GitHub last commit](https://img.shields.io/github/last-commit/optonaut/ActiveLabel.swift)](https://github.com/optonaut/ActiveLabel.swift) - UILabel drop-in replacement supporting Hashtags (#), Mentions (@) and URLs (http://).
* [Atributika ![GitHub Repo Stars](https://img.shields.io/github/stars/psharanda/Atributika) ![GitHub last commit](https://img.shields.io/github/last-commit/psharanda/Atributika)](https://github.com/psharanda/Atributika) - TConvert text with HTML tags, links, hashtags, mentions into NSAttributedString. Make them clickable with UILabel drop-in replacement.
* [CountdownLabel ![GitHub Repo Stars](https://img.shields.io/github/stars/suzuki-0000/CountdownLabel) ![GitHub last commit](https://img.shields.io/github/last-commit/suzuki-0000/CountdownLabel)](https://github.com/suzuki-0000/CountdownLabel) - Simple countdown UILabel with morphing animation, and some useful function.
* [GlitchLabel ![GitHub Repo Stars](https://img.shields.io/github/stars/kciter/GlitchLabel) ![GitHub last commit](https://img.shields.io/github/last-commit/kciter/GlitchLabel)](https://github.com/kciter/GlitchLabel) - Glitching UILabel for iOS.
* [IncrementableLabel ![GitHub Repo Stars](https://img.shields.io/github/stars/tbaranes/IncrementableLabel) ![GitHub last commit](https://img.shields.io/github/last-commit/tbaranes/IncrementableLabel)](https://github.com/tbaranes/IncrementableLabel) - An UILabel subclass to (de)increment numbers in an UILabel.
* [KDEDateLabel ![GitHub Repo Stars](https://img.shields.io/github/stars/delannoyk/KDEDateLabel) ![GitHub last commit](https://img.shields.io/github/last-commit/delannoyk/KDEDateLabel)](https://github.com/delannoyk/KDEDateLabel) - An UILabel subclass that updates itself to make time ago's format easier.
* [LTMorphingLabel ![GitHub Repo Stars](https://img.shields.io/github/stars/lexrus/LTMorphingLabel) ![GitHub last commit](https://img.shields.io/github/last-commit/lexrus/LTMorphingLabel)](https://github.com/lexrus/LTMorphingLabel) - Graceful morphing effects for UILabel.
* [Nantes ![GitHub Repo Stars](https://img.shields.io/github/stars/instacart/Nantes) ![GitHub last commit](https://img.shields.io/github/last-commit/instacart/Nantes)](https://github.com/instacart/Nantes) - TTTAttributedLabel replacement.
* [TriLabelView ![GitHub Repo Stars](https://img.shields.io/github/stars/mukeshthawani/TriLabelView) ![GitHub last commit](https://img.shields.io/github/last-commit/mukeshthawani/TriLabelView)](https://github.com/mukeshthawani/TriLabelView) - A triangle shaped corner label view for iOS.

#### Menu
[back to top](#readme) 

* [AKSwiftSlideMenu ![GitHub Repo Stars](https://img.shields.io/github/stars/ashishkakkad8/AKSwiftSlideMenu) ![GitHub last commit](https://img.shields.io/github/last-commit/ashishkakkad8/AKSwiftSlideMenu)](https://github.com/ashishkakkad8/AKSwiftSlideMenu) - Slide Menu (Drawer).
* [CircleMenu ![GitHub Repo Stars](https://img.shields.io/github/stars/Ramotion/circle-menu) ![GitHub last commit](https://img.shields.io/github/last-commit/Ramotion/circle-menu)](https://github.com/Ramotion/circle-menu) - CircleMenu is a simple, elegant UI menu with a circular layout and material design animations.
* [ENSwiftSideMenu ![GitHub Repo Stars](https://img.shields.io/github/stars/evnaz/ENSwiftSideMenu) ![GitHub last commit](https://img.shields.io/github/last-commit/evnaz/ENSwiftSideMenu)](https://github.com/evnaz/ENSwiftSideMenu) - Sliding side menu.
* [FanMenu ![GitHub Repo Stars](https://img.shields.io/github/stars/exyte/fan-menu) ![GitHub last commit](https://img.shields.io/github/last-commit/exyte/fan-menu)](https://github.com/exyte/fan-menu) - Menu with a circular layout based on Macaw.
* [FlowingMenu ![GitHub Repo Stars](https://img.shields.io/github/stars/yannickl/FlowingMenu) ![GitHub last commit](https://img.shields.io/github/last-commit/yannickl/FlowingMenu)](https://github.com/yannickl/FlowingMenu) - Interactive view transition to display menus with flowing and bouncing effects.
* [GuillotineMenu ![GitHub Repo Stars](https://img.shields.io/github/stars/Yalantis/GuillotineMenu) ![GitHub last commit](https://img.shields.io/github/last-commit/Yalantis/GuillotineMenu)](https://github.com/Yalantis/GuillotineMenu) - Guillotine style menu.
* [HHFloatingView ![GitHub Repo Stars](https://img.shields.io/github/stars/hemangshah/HHFloatingView) ![GitHub last commit](https://img.shields.io/github/last-commit/hemangshah/HHFloatingView)](https://github.com/hemangshah/HHFloatingView) - An easy to use and setup floating view for your app.
* [InteractiveSideMenu ![GitHub Repo Stars](https://img.shields.io/github/stars/handsomecode/InteractiveSideMenu) ![GitHub last commit](https://img.shields.io/github/last-commit/handsomecode/InteractiveSideMenu)](https://github.com/handsomecode/InteractiveSideMenu) - Customizable iOS Interactive Side Menu.
* [KWDrawerController ![GitHub Repo Stars](https://img.shields.io/github/stars/Kawoou/KWDrawerController) ![GitHub last commit](https://img.shields.io/github/last-commit/Kawoou/KWDrawerController)](https://github.com/Kawoou/KWDrawerController) - Drawer view controller that easy to use.
* [MenuItemKit ![GitHub Repo Stars](https://img.shields.io/github/stars/cxa/MenuItemKit) ![GitHub last commit](https://img.shields.io/github/last-commit/cxa/MenuItemKit)](https://github.com/cxa/MenuItemKit) - `UIMenuItem` with image and block (closure) support.
* [Pagemenu ![GitHub Repo Stars](https://img.shields.io/github/stars/PageMenu/PageMenu) ![GitHub last commit](https://img.shields.io/github/last-commit/PageMenu/PageMenu)](https://github.com/PageMenu/PageMenu) - Pagination enabled view controller.
* [PagingKit ![GitHub Repo Stars](https://img.shields.io/github/stars/kazuhiro4949/PagingKit) ![GitHub last commit](https://img.shields.io/github/last-commit/kazuhiro4949/PagingKit)](https://github.com/kazuhiro4949/PagingKit) - PagingKit provides customizable menu UI.
* [Panels ![GitHub Repo Stars](https://img.shields.io/github/stars/antoniocasero/Panels) ![GitHub last commit](https://img.shields.io/github/last-commit/antoniocasero/Panels)](https://github.com/antoniocasero/Panels) - Panels is a framework to easily add sliding panels to your application.
* [Parchment ![GitHub Repo Stars](https://img.shields.io/github/stars/rechsteiner/Parchment) ![GitHub last commit](https://img.shields.io/github/last-commit/rechsteiner/Parchment)](https://github.com/rechsteiner/Parchment) - A paging view controller with a highly customizable menu, built on UICollectionView.
* [PopMenu ![GitHub Repo Stars](https://img.shields.io/github/stars/CaliCastle/PopMenu) ![GitHub last commit](https://img.shields.io/github/last-commit/CaliCastle/PopMenu)](https://github.com/CaliCastle/PopMenu) - 😎 A cool and customizable popup style action sheet for iOS.
* [SideMenu ![GitHub Repo Stars](https://img.shields.io/github/stars/jonkykong/SideMenu) ![GitHub last commit](https://img.shields.io/github/last-commit/jonkykong/SideMenu)](https://github.com/jonkykong/SideMenu) - Simple side menu control for iOS inspired by Facebook. Right and Left sides. No coding required.
* [SlideMenuControllerSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/dekatotoro/SlideMenuControllerSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/dekatotoro/SlideMenuControllerSwift)](https://github.com/dekatotoro/SlideMenuControllerSwift) - iOS Slide Menu View based on Google+, iQON, Feedly, Ameba iOS app.
* [SwipeMenuViewController ![GitHub Repo Stars](https://img.shields.io/github/stars/yysskk/SwipeMenuViewController) ![GitHub last commit](https://img.shields.io/github/last-commit/yysskk/SwipeMenuViewController)](https://github.com/yysskk/SwipeMenuViewController) - Swipable tab and menu View and ViewController.
* [XLPagerTabStrip ![GitHub Repo Stars](https://img.shields.io/github/stars/xmartlabs/XLPagerTabStrip) ![GitHub last commit](https://img.shields.io/github/last-commit/xmartlabs/XLPagerTabStrip)](https://github.com/xmartlabs/XLPagerTabStrip) - Android PagerTabStrip for iOS.
* [YNDropDownMenu ![GitHub Repo Stars](https://img.shields.io/github/stars/younatics/YNDropDownMenu) ![GitHub last commit](https://img.shields.io/github/last-commit/younatics/YNDropDownMenu)](https://github.com/younatics/YNDropDownMenu) - Adorable iOS drop down menu.

#### Pagination
[back to top](#readme) 

* [CHIPageControl ![GitHub Repo Stars](https://img.shields.io/github/stars/ChiliLabs/CHIPageControl) ![GitHub last commit](https://img.shields.io/github/last-commit/ChiliLabs/CHIPageControl)](https://github.com/ChiliLabs/CHIPageControl) - A set of cool animated page controls to replace boring UIPageControl.
* [FlexiblePageControl ![GitHub Repo Stars](https://img.shields.io/github/stars/shima11/FlexiblePageControl) ![GitHub last commit](https://img.shields.io/github/last-commit/shima11/FlexiblePageControl)](https://github.com/shima11/FlexiblePageControl) - A flexible UIPageControl like Instagram.
* [iPages ![GitHub Repo Stars](https://img.shields.io/github/stars/benjaminsage/iPages) ![GitHub last commit](https://img.shields.io/github/last-commit/benjaminsage/iPages)](https://github.com/benjaminsage/iPages) - Quickly implement swipable page views in SwiftUI 📝.
* [Pageboy ![GitHub Repo Stars](https://img.shields.io/github/stars/uias/Pageboy) ![GitHub last commit](https://img.shields.io/github/last-commit/uias/Pageboy)](https://github.com/uias/Pageboy) - A simple, highly informative page view controller.
* [PageController ![GitHub Repo Stars](https://img.shields.io/github/stars/hirohisa/PageController) ![GitHub last commit](https://img.shields.io/github/last-commit/hirohisa/PageController)](https://github.com/hirohisa/PageController) - Infinite paging controller.
* [SlideController ![GitHub Repo Stars](https://img.shields.io/github/stars/touchlane/SlideController) ![GitHub last commit](https://img.shields.io/github/last-commit/touchlane/SlideController)](https://github.com/touchlane/SlideController) - It is a nice alternative for UIPageViewController built using power of generic types. Swipe between pages with an interactive title navigation control. Configure horizontal or vertical chains for unlimited pages amount.

#### Payment
[back to top](#readme) 

* [AnimatedCardInput ![GitHub Repo Stars](https://img.shields.io/github/stars/netguru/AnimatedCardInput) ![GitHub last commit](https://img.shields.io/github/last-commit/netguru/AnimatedCardInput)](https://github.com/netguru/AnimatedCardInput) - Customisable and easy to use Credit Card UI.
* [Caishen ![GitHub Repo Stars](https://img.shields.io/github/stars/prolificinteractive/Caishen) ![GitHub last commit](https://img.shields.io/github/last-commit/prolificinteractive/Caishen)](https://github.com/prolificinteractive/Caishen) - A Payment Card UI & Validator for iOS.
* [iCard ![GitHub Repo Stars](https://img.shields.io/github/stars/eliakorkmaz/iCard) ![GitHub last commit](https://img.shields.io/github/last-commit/eliakorkmaz/iCard)](https://github.com/eliakorkmaz/iCard) - Bank Card Generator using SnapKit DSL.
* [MFCard ![GitHub Repo Stars](https://img.shields.io/github/stars/MobileFirstInc/MFCard) ![GitHub last commit](https://img.shields.io/github/last-commit/MobileFirstInc/MFCard)](https://github.com/MobileFirstInc/MFCard) - Easily integrate Credit Card payments in iOS App.
* [TPInAppReceipt ![GitHub Repo Stars](https://img.shields.io/github/stars/tikhop/TPInAppReceipt) ![GitHub last commit](https://img.shields.io/github/last-commit/tikhop/TPInAppReceipt)](https://github.com/tikhop/TPInAppReceipt) - A lightweight, pure-Swift library for reading and validating Apple In App Purchase Receipt locally.

#### Permissions
[back to top](#readme) 

* [AREK ![GitHub Repo Stars](https://img.shields.io/github/stars/ennioma/arek) ![GitHub last commit](https://img.shields.io/github/last-commit/ennioma/arek)](https://github.com/ennioma/arek) - AREK is a clean and easy to use wrapper over any kind of iOS permission.
* [Permission ![GitHub Repo Stars](https://img.shields.io/github/stars/delba/Permission) ![GitHub last commit](https://img.shields.io/github/last-commit/delba/Permission)](https://github.com/delba/Permission) - A unified API to ask for permissions on iOS.
* [SPPermission ![GitHub Repo Stars](https://img.shields.io/github/stars/ivanvorobei/SPPermissions) ![GitHub last commit](https://img.shields.io/github/last-commit/ivanvorobei/SPPermissions)](https://github.com/ivanvorobei/SPPermissions) - Simple request permission with native UI and interactive animation.

#### Scroll Bars
[back to top](#readme) 

* [DMScrollBar ![GitHub Repo Stars](https://img.shields.io/github/stars/batanus/DMScrollBar) ![GitHub last commit](https://img.shields.io/github/last-commit/batanus/DMScrollBar)](https://github.com/batanus/DMScrollBar) - Best in class customizable ScrollBar for any type of ScrollView with Decelerating, Bounce & Rubber band mechanisms and many many more.

#### StackView
[back to top](#readme) 

* [StackViewController ![GitHub Repo Stars](https://img.shields.io/github/stars/seedco/StackViewController) ![GitHub last commit](https://img.shields.io/github/last-commit/seedco/StackViewController)](https://github.com/seedco/StackViewController) - Simplify the use of UIStackView.
* [TZStackView ![GitHub Repo Stars](https://img.shields.io/github/stars/tomvanzummeren/TZStackView) ![GitHub last commit](https://img.shields.io/github/last-commit/tomvanzummeren/TZStackView)](https://github.com/tomvanzummeren/TZStackView) - An iOS9 UIStackView layout component re-implemented for iOS 7 and 8.

#### Switch
[back to top](#readme) 

* [MJMaterialSwitch ![GitHub Repo Stars](https://img.shields.io/github/stars/JaleelNazir/MJMaterialSwitch) ![GitHub last commit](https://img.shields.io/github/last-commit/JaleelNazir/MJMaterialSwitch)](https://github.com/JaleelNazir/MJMaterialSwitch) - A Customizable Switch UI for iOS, Inspired from Google's Material Design.
* [paper-switch ![GitHub Repo Stars](https://img.shields.io/github/stars/Ramotion/paper-switch) ![GitHub last commit](https://img.shields.io/github/last-commit/Ramotion/paper-switch)](https://github.com/Ramotion/paper-switch) - RAMPaperSwitch is a material design UI module which paints over the parent view when the switch is turned on.
* [Switch ![GitHub Repo Stars](https://img.shields.io/github/stars/T-Pham/Switch) ![GitHub last commit](https://img.shields.io/github/last-commit/T-Pham/Switch)](https://github.com/T-Pham/Switch) - A switch control with full Interface Builder support.

#### Tab
[back to top](#readme) 

* [Adaptive Tab Bar ![GitHub Repo Stars](https://img.shields.io/github/stars/Ramotion/adaptive-tab-bar) ![GitHub last commit](https://img.shields.io/github/last-commit/Ramotion/adaptive-tab-bar)](https://github.com/Ramotion/adaptive-tab-bar) - Adaptive tab bar.
* [Animated Tab Bar ![GitHub Repo Stars](https://img.shields.io/github/stars/Ramotion/animated-tab-bar) ![GitHub last commit](https://img.shields.io/github/last-commit/Ramotion/animated-tab-bar)](https://github.com/Ramotion/animated-tab-bar) - RAMAnimatedTabBarController is a module for adding animation to tab bar items.
* [CardTabBar ![GitHub Repo Stars](https://img.shields.io/github/stars/yusadogru/CardTabBar) ![GitHub last commit](https://img.shields.io/github/last-commit/yusadogru/CardTabBar)](https://github.com/yusadogru/CardTabBar) - Adding animation to iOS tabbar items.
* [CircleBar ![GitHub Repo Stars](https://img.shields.io/github/stars/softhausHQ/CircleBar) ![GitHub last commit](https://img.shields.io/github/last-commit/softhausHQ/CircleBar)](https://github.com/softhausHQ/CircleBar) - A fun, easy-to-use tab bar navigation controller for iOS.
* [ColorMatchTabs ![GitHub Repo Stars](https://img.shields.io/github/stars/Yalantis/ColorMatchTabs) ![GitHub last commit](https://img.shields.io/github/last-commit/Yalantis/ColorMatchTabs)](https://github.com/Yalantis/ColorMatchTabs) - Interesting way to display tabs.
* [DTPagerController ![GitHub Repo Stars](https://img.shields.io/github/stars/tungvoduc/DTPagerController) ![GitHub last commit](https://img.shields.io/github/last-commit/tungvoduc/DTPagerController)](https://github.com/tungvoduc/DTPagerController) - Container view controller to display a set of ViewControllers in a horizontal scroll view.
* [ESTabBarController ![GitHub Repo Stars](https://img.shields.io/github/stars/eggswift/ESTabBarController) ![GitHub last commit](https://img.shields.io/github/last-commit/eggswift/ESTabBarController)](https://github.com/eggswift/ESTabBarController) - A highly customizable TabBarController component, which is inherited from UITabBarController.
* [HHTabBarView ![GitHub Repo Stars](https://img.shields.io/github/stars/hemangshah/HHTabBarView) ![GitHub last commit](https://img.shields.io/github/last-commit/hemangshah/HHTabBarView)](https://github.com/hemangshah/HHTabBarView) - A lightweight customized tab bar view.
* [PolioPager ![GitHub Repo Stars](https://img.shields.io/github/stars/YuigaWada/PolioPager) ![GitHub last commit](https://img.shields.io/github/last-commit/YuigaWada/PolioPager)](https://github.com/YuigaWada/PolioPager) - A flexible TabBarController with search tab like SNKRS.
* [TabBar ![GitHub Repo Stars](https://img.shields.io/github/stars/onl1ner/TabBar) ![GitHub last commit](https://img.shields.io/github/last-commit/onl1ner/TabBar)](https://github.com/onl1ner/TabBar) - Highly customizable tab bar for SwiftUI applications.
* [Tabman ![GitHub Repo Stars](https://img.shields.io/github/stars/uias/Tabman) ![GitHub last commit](https://img.shields.io/github/last-commit/uias/Tabman)](https://github.com/uias/Tabman) - A powerful paging view controller with indicator bar.
* [TabPageViewController ![GitHub Repo Stars](https://img.shields.io/github/stars/EndouMari/TabPageViewController) ![GitHub last commit](https://img.shields.io/github/last-commit/EndouMari/TabPageViewController)](https://github.com/EndouMari/TabPageViewController) - Paging view controller and scroll tab view.

#### Template
[back to top](#readme) 

* [Stencil ![GitHub Repo Stars](https://img.shields.io/github/stars/stencilproject/Stencil) ![GitHub last commit](https://img.shields.io/github/last-commit/stencilproject/Stencil)](https://github.com/stencilproject/Stencil) - Simple and powerful template language.
* [SwiftCssParser ![GitHub Repo Stars](https://img.shields.io/github/stars/100mango/SwiftCssParser) ![GitHub last commit](https://img.shields.io/github/last-commit/100mango/SwiftCssParser)](https://github.com/100mango/SwiftCssParser) - Extensible CSS parser.
* [Temple ![GitHub Repo Stars](https://img.shields.io/github/stars/GoodRequest/Temple) ![GitHub last commit](https://img.shields.io/github/last-commit/GoodRequest/Temple)](https://github.com/GoodRequest/Temple) - 🗂️ Most advanced project and file templates.

#### TextField
[back to top](#readme) 

* [CBPinEntryView ![GitHub Repo Stars](https://img.shields.io/github/stars/Fawxy/CBPinEntryView) ![GitHub last commit](https://img.shields.io/github/last-commit/Fawxy/CBPinEntryView)](https://github.com/Fawxy/CBPinEntryView) - Easy to use, very customisable pin entry.
* [CHIOTPField ![GitHub Repo Stars](https://img.shields.io/github/stars/ChiliLabs/CHIOTPField) ![GitHub last commit](https://img.shields.io/github/last-commit/ChiliLabs/CHIOTPField)](https://github.com/ChiliLabs/CHIOTPField) - A set of textfields that can be used for One-time passwords, SMS codes, PIN codes, etc.
* [DTTextField ![GitHub Repo Stars](https://img.shields.io/github/stars/iDhaval/DTTextField) ![GitHub last commit](https://img.shields.io/github/last-commit/iDhaval/DTTextField)](https://github.com/iDhaval/DTTextField) - DTTextField is a custom textfield with floating placeholder and error label.
* [FloatingLabelTextFieldSwiftUI ![GitHub Repo Stars](https://img.shields.io/github/stars/kishanraja/FloatingLabelTextFieldSwiftUI) ![GitHub last commit](https://img.shields.io/github/last-commit/kishanraja/FloatingLabelTextFieldSwiftUI)](https://github.com/kishanraja/FloatingLabelTextFieldSwiftUI) - FloatingLabelTextFieldSwiftUI is a small and lightweight SwiftUI framework written in completely SwiftUI (not using UIViewRepresentable) that allows to create beautiful and customisable floating label textfield!
* [HTYTextField ![GitHub Repo Stars](https://img.shields.io/github/stars/hanton/HTYTextField) ![GitHub last commit](https://img.shields.io/github/last-commit/hanton/HTYTextField)](https://github.com/hanton/HTYTextField) - A UITextField with bouncy placeholder.
* [iTextField ⌨️ ![GitHub Repo Stars](https://img.shields.io/github/stars/benjaminsage/iTextField) ![GitHub last commit](https://img.shields.io/github/last-commit/benjaminsage/iTextField)](https://github.com/benjaminsage/iTextField) - A fully-wrapped `UITextField` that works entirely in SwiftUI 🦅.
* [PasswordTextField ![GitHub Repo Stars](https://img.shields.io/github/stars/PiXeL16/PasswordTextField) ![GitHub last commit](https://img.shields.io/github/last-commit/PiXeL16/PasswordTextField)](https://github.com/PiXeL16/PasswordTextField) - A custom TextField with a switchable icon which shows or hides the password and enforces good password policies.
* [SkyFloatingLabelTextField ![GitHub Repo Stars](https://img.shields.io/github/stars/Skyscanner/SkyFloatingLabelTextField) ![GitHub last commit](https://img.shields.io/github/last-commit/Skyscanner/SkyFloatingLabelTextField)](https://github.com/Skyscanner/SkyFloatingLabelTextField) - A beautiful and flexible text field control implementation of "Float Label Pattern".
* [StyledTextKit ![GitHub Repo Stars](https://img.shields.io/github/stars/GitHawkApp/StyledTextKit) ![GitHub last commit](https://img.shields.io/github/last-commit/GitHawkApp/StyledTextKit)](https://github.com/GitHawkApp/StyledTextKit) - Declarative building and fast rendering attributed string library.
* [TextFieldCounter ![GitHub Repo Stars](https://img.shields.io/github/stars/serralvo/TextFieldCounter) ![GitHub last commit](https://img.shields.io/github/last-commit/serralvo/TextFieldCounter)](https://github.com/serralvo/TextFieldCounter) - UITextField character counter with lovable UX.
* [TextFieldEffects ![GitHub Repo Stars](https://img.shields.io/github/stars/raulriera/TextFieldEffects) ![GitHub last commit](https://img.shields.io/github/last-commit/raulriera/TextFieldEffects)](https://github.com/raulriera/TextFieldEffects) - Several ready to use effects for UITextFields.
* [UITextField-Navigation ![GitHub Repo Stars](https://img.shields.io/github/stars/T-Pham/UITextField-Navigation) ![GitHub last commit](https://img.shields.io/github/last-commit/T-Pham/UITextField-Navigation)](https://github.com/T-Pham/UITextField-Navigation) - UITextField-Navigation adds next, previous and done buttons to the keyboard for your UITextFields. Highly customizable.
* [VKPinCodeView ![GitHub Repo Stars](https://img.shields.io/github/stars/Sunspension/VKPinCodeView) ![GitHub last commit](https://img.shields.io/github/last-commit/Sunspension/VKPinCodeView)](https://github.com/Sunspension/VKPinCodeView) - Simple and elegant UI component for input PIN.

#### Transition
[back to top](#readme) 

* [BubbleTransition ![GitHub Repo Stars](https://img.shields.io/github/stars/andreamazz/BubbleTransition) ![GitHub last commit](https://img.shields.io/github/last-commit/andreamazz/BubbleTransition)](https://github.com/andreamazz/BubbleTransition) - Bubble transition in an easy way.
* [Cards XI ![GitHub Repo Stars](https://img.shields.io/github/stars/PaoloCuscela/Cards) ![GitHub last commit](https://img.shields.io/github/last-commit/PaoloCuscela/Cards)](https://github.com/PaoloCuscela/Cards) - Awesome iOS 11 AppStore's Card Views.
* [EasyTransitions ![GitHub Repo Stars](https://img.shields.io/github/stars/marcosgriselli/EasyTransitions) ![GitHub last commit](https://img.shields.io/github/last-commit/marcosgriselli/EasyTransitions)](https://github.com/marcosgriselli/EasyTransitions) - A simple way to create custom interactive UIViewController transitions.
* [Hero ![GitHub Repo Stars](https://img.shields.io/github/stars/HeroTransitions/Hero) ![GitHub last commit](https://img.shields.io/github/last-commit/HeroTransitions/Hero)](https://github.com/HeroTransitions/Hero) - Elegant transition library for iOS.
* [ImageTransition ![GitHub Repo Stars](https://img.shields.io/github/stars/shtnkgm/ImageTransition) ![GitHub last commit](https://img.shields.io/github/last-commit/shtnkgm/ImageTransition)](https://github.com/shtnkgm/ImageTransition) - ImageTransition is a library for smooth animation of images during transitions.
* [Jelly ![GitHub Repo Stars](https://img.shields.io/github/stars/SebastianBoldt/Jelly) ![GitHub last commit](https://img.shields.io/github/last-commit/SebastianBoldt/Jelly)](https://github.com/SebastianBoldt/Jelly) - Jelly provides custom view controller transitions with just a few lines of code.
* [LiquidSwipe ![GitHub Repo Stars](https://img.shields.io/github/stars/exyte/LiquidSwipe) ![GitHub last commit](https://img.shields.io/github/last-commit/exyte/LiquidSwipe)](https://github.com/exyte/LiquidSwipe) - Liquid navigation animation
* [MusicPlayerTransition ![GitHub Repo Stars](https://img.shields.io/github/stars/xxxAIRINxxx/MusicPlayerTransition) ![GitHub last commit](https://img.shields.io/github/last-commit/xxxAIRINxxx/MusicPlayerTransition)](https://github.com/xxxAIRINxxx/MusicPlayerTransition) - Custom interactive transition like Apple Music iOS App.
* [NavigationTransitions ![GitHub Repo Stars](https://img.shields.io/github/stars/davdroman/swiftui-navigation-transitions) ![GitHub last commit](https://img.shields.io/github/last-commit/davdroman/swiftui-navigation-transitions)](https://github.com/davdroman/swiftui-navigation-transitions) - Pure SwiftUI Navigation transitions.
* [PanSlip ![GitHub Repo Stars](https://img.shields.io/github/stars/k-lpmg/PanSlip) ![GitHub last commit](https://img.shields.io/github/last-commit/k-lpmg/PanSlip)](https://github.com/k-lpmg/PanSlip) - Use PanGesture to dismiss view on UIViewController and UIView.
* [PinterestSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/demonnico/PinterestSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/demonnico/PinterestSwift)](https://github.com/demonnico/PinterestSwift) - Pinterest style transition.
* [RevealingSplashView ![GitHub Repo Stars](https://img.shields.io/github/stars/PiXeL16/RevealingSplashView) ![GitHub last commit](https://img.shields.io/github/last-commit/PiXeL16/RevealingSplashView)](https://github.com/PiXeL16/RevealingSplashView) - A Splash view that animates and reveals its content, inspired by the Twitter splash.
* [SamuraiTransition ![GitHub Repo Stars](https://img.shields.io/github/stars/hachinobu/SamuraiTransition) ![GitHub last commit](https://img.shields.io/github/last-commit/hachinobu/SamuraiTransition)](https://github.com/hachinobu/SamuraiTransition) - Swift based library providing a collection of ViewController transitions featuring a number of neat cutting animations.
* [SPLarkController ![GitHub Repo Stars](https://img.shields.io/github/stars/ivanvorobei/SPLarkController) ![GitHub last commit](https://img.shields.io/github/last-commit/ivanvorobei/SPLarkController)](https://github.com/ivanvorobei/SPLarkController) - Custom transition between two controller. Translate to top.
* [SPStorkController ![GitHub Repo Stars](https://img.shields.io/github/stars/ivanvorobei/SPStorkController) ![GitHub last commit](https://img.shields.io/github/last-commit/ivanvorobei/SPStorkController)](https://github.com/ivanvorobei/SPStorkController) - Now playing controller from Apple Music. Customisable height.
* [StarWars.iOS ![GitHub Repo Stars](https://img.shields.io/github/stars/Yalantis/StarWars.iOS) ![GitHub last commit](https://img.shields.io/github/last-commit/Yalantis/StarWars.iOS)](https://github.com/Yalantis/StarWars.iOS) - Transition animation to crumble view-controller into tiny pieces.
* [Transition ![GitHub Repo Stars](https://img.shields.io/github/stars/Touchwonders/Transition) ![GitHub last commit](https://img.shields.io/github/last-commit/Touchwonders/Transition)](https://github.com/Touchwonders/Transition) - Easy interactive interruptible custom ViewController transitions.

#### 3D
[back to top](#readme) 

* [Insert3D ![GitHub Repo Stars](https://img.shields.io/github/stars/Viktoo/Insert3D) ![GitHub last commit](https://img.shields.io/github/last-commit/Viktoo/Insert3D)](https://github.com/Viktoo/Insert3D) - The fastest 🚀 way to embed a 3D model.

#### UICollectionView
[back to top](#readme) 

* [ASCollectionView ![GitHub Repo Stars](https://img.shields.io/github/stars/abdullahselek/ASCollectionView) ![GitHub last commit](https://img.shields.io/github/last-commit/abdullahselek/ASCollectionView)](https://github.com/abdullahselek/ASCollectionView) - Lightweight custom collection view inspired by Airbnb.
* [AZCollectionViewController ![GitHub Repo Stars](https://img.shields.io/github/stars/AfrozZaheer/AZCollectionViewController) ![GitHub last commit](https://img.shields.io/github/last-commit/AfrozZaheer/AZCollectionViewController)](https://github.com/AfrozZaheer/AZCollectionViewController) - Easy way to integrate pagination with dummy views in CollectionView, make Instagram Discover withing minutes.
* [Blueprints ![GitHub Repo Stars](https://img.shields.io/github/stars/zenangst/Blueprints) ![GitHub last commit](https://img.shields.io/github/last-commit/zenangst/Blueprints)](https://github.com/zenangst/Blueprints) - A framework that is meant to make your life easier when working with collection view flow layouts.
* [BouncyLayout ![GitHub Repo Stars](https://img.shields.io/github/stars/roberthein/BouncyLayout) ![GitHub last commit](https://img.shields.io/github/last-commit/roberthein/BouncyLayout)](https://github.com/roberthein/BouncyLayout) - Collection view layout that makes your cells bounce.
* [CardsLayout ![GitHub Repo Stars](https://img.shields.io/github/stars/filletofish/CardsLayout) ![GitHub last commit](https://img.shields.io/github/last-commit/filletofish/CardsLayout)](https://github.com/filletofish/CardsLayout) - Nice card-designed custom CollectionView layout.
* [CenteredCollectionView ![GitHub Repo Stars](https://img.shields.io/github/stars/BenEmdon/CenteredCollectionView) ![GitHub last commit](https://img.shields.io/github/last-commit/BenEmdon/CenteredCollectionView)](https://github.com/BenEmdon/CenteredCollectionView) - A lightweight UICollectionViewLayout that pages and centers it's cells.
* [CheckmarkCollectionViewCell ![GitHub Repo Stars](https://img.shields.io/github/stars/yonat/CheckmarkCollectionViewCell) ![GitHub last commit](https://img.shields.io/github/last-commit/yonat/CheckmarkCollectionViewCell)](https://github.com/yonat/CheckmarkCollectionViewCell) - UICollectionViewCell with checkbox when it isSelected and empty circle when not - like Photos.app 'Select' mode.
* [CollectionViewShelfLayout ![GitHub Repo Stars](https://img.shields.io/github/stars/pitiphong-p/CollectionViewShelfLayout) ![GitHub last commit](https://img.shields.io/github/last-commit/pitiphong-p/CollectionViewShelfLayout)](https://github.com/pitiphong-p/CollectionViewShelfLayout) - A UICollectionViewLayout subclass displays its items as rows of items similar to the App Store Feature tab without a nested UITableView/UICollectionView hack.
* [CollectionViewSlantedLayout ![GitHub Repo Stars](https://img.shields.io/github/stars/yacir/CollectionViewSlantedLayout) ![GitHub last commit](https://img.shields.io/github/last-commit/yacir/CollectionViewSlantedLayout)](https://github.com/yacir/CollectionViewSlantedLayout) - UICollectionViewLayout to show slanted content.
* [Drag and Drop UICollectionView ![GitHub Repo Stars](https://img.shields.io/github/stars/mmick66/KDDragAndDropCollectionView) ![GitHub last commit](https://img.shields.io/github/last-commit/mmick66/KDDragAndDropCollectionView)](https://github.com/mmick66/KDDragAndDropCollectionView) - Dragging and Dropping data across multiple UICollectionViews.
* [FSPagerView ![GitHub Repo Stars](https://img.shields.io/github/stars/WenchaoD/FSPagerView) ![GitHub last commit](https://img.shields.io/github/last-commit/WenchaoD/FSPagerView)](https://github.com/WenchaoD/FSPagerView) - Elegant Screen Slide Library. It is extremely helpful for making Banner View、Product Show、Welcome/Guide Pages、Screen/ViewController Sliders.
* [Gliding Collection ![GitHub Repo Stars](https://img.shields.io/github/stars/Ramotion/gliding-collection) ![GitHub last commit](https://img.shields.io/github/last-commit/Ramotion/gliding-collection)](https://github.com/Ramotion/gliding-collection) - Gliding Collection is a smooth, flowing, customizable decision for a UICollectionView Controller.
* [GoodProvider ![GitHub Repo Stars](https://img.shields.io/github/stars/GoodRequest/GRProvider) ![GitHub last commit](https://img.shields.io/github/last-commit/GoodRequest/GRProvider)](https://github.com/GoodRequest/GRProvider) - 🚀 UITableView and UICollectionView provider to simplify basic scenarios of showing the data.
* [GravitySlider ![GitHub Repo Stars](https://img.shields.io/github/stars/ApplikeySolutions/GravitySlider) ![GitHub last commit](https://img.shields.io/github/last-commit/ApplikeySolutions/GravitySlider)](https://github.com/ApplikeySolutions/GravitySlider) - Beautiful alternative to the standard UICollectionView flow layout.
* [ShelfView-iOS ![GitHub Repo Stars](https://img.shields.io/github/stars/tdscientist/ShelfView-iOS) ![GitHub last commit](https://img.shields.io/github/last-commit/tdscientist/ShelfView-iOS)](https://github.com/tdscientist/ShelfView-iOS) - iOS custom view to display books on shelf.
* [SimpleSource ![GitHub Repo Stars](https://img.shields.io/github/stars/Squarespace/simple-source) ![GitHub last commit](https://img.shields.io/github/last-commit/Squarespace/simple-source)](https://github.com/Squarespace/simple-source ) - Easy and type-safe iOS table and collection views.
* [SwiftSpreadsheet ![GitHub Repo Stars](https://img.shields.io/github/stars/stuffrabbit/SwiftSpreadsheet) ![GitHub last commit](https://img.shields.io/github/last-commit/stuffrabbit/SwiftSpreadsheet)](https://github.com/stuffrabbit/SwiftSpreadsheet) - Fully customizable spreadsheet CollectionViewLayout.
* [TagCellLayout ![GitHub Repo Stars](https://img.shields.io/github/stars/riteshhgupta/TagCellLayout) ![GitHub last commit](https://img.shields.io/github/last-commit/riteshhgupta/TagCellLayout)](https://github.com/riteshhgupta/TagCellLayout) - UICollectionView layout for Tags with Left, Center & Right alignments.
* [UICollectionViewSplitLayout ![GitHub Repo Stars](https://img.shields.io/github/stars/yahoojapan/UICollectionViewSplitLayout) ![GitHub last commit](https://img.shields.io/github/last-commit/yahoojapan/UICollectionViewSplitLayout)](https://github.com/yahoojapan/UICollectionViewSplitLayout) - UICollectionViewSplitLayout makes collection view more responsive.
* [VegaScroll ![GitHub Repo Stars](https://img.shields.io/github/stars/AppliKeySolutions/VegaScroll) ![GitHub last commit](https://img.shields.io/github/last-commit/AppliKeySolutions/VegaScroll)](https://github.com/AppliKeySolutions/VegaScroll) - Lightweight animation flowlayout for UICollectionView.

#### UITableView
[back to top](#readme) 

* [AZTableViewController ![GitHub Repo Stars](https://img.shields.io/github/stars/AfrozZaheer/AZTableViewController) ![GitHub last commit](https://img.shields.io/github/last-commit/AfrozZaheer/AZTableViewController)](https://github.com/AfrozZaheer/AZTableViewController) - Elegant and easy way to integrate pagination with placeholder views.
* [CollapsibleTableSectionViewController ![GitHub Repo Stars](https://img.shields.io/github/stars/jeantimex/CollapsibleTableSectionViewController) ![GitHub last commit](https://img.shields.io/github/last-commit/jeantimex/CollapsibleTableSectionViewController)](https://github.com/jeantimex/CollapsibleTableSectionViewController) - A library to support collapsible sections in a table view.
* [DGElasticPullToRefresh ![GitHub Repo Stars](https://img.shields.io/github/stars/gontovnik/DGElasticPullToRefresh) ![GitHub last commit](https://img.shields.io/github/last-commit/gontovnik/DGElasticPullToRefresh)](https://github.com/gontovnik/DGElasticPullToRefresh) - Elastic pull to refresh.
* [DiffableDataSources ![GitHub Repo Stars](https://img.shields.io/github/stars/ra1028/DiffableDataSources) ![GitHub last commit](https://img.shields.io/github/last-commit/ra1028/DiffableDataSources)](https://github.com/ra1028/DiffableDataSources) - 💾 A library for backporting UITableView/UICollectionViewDiffableDataSource.
* [DTTableViewManager ![GitHub Repo Stars](https://img.shields.io/github/stars/DenTelezhkin/DTTableViewManager) ![GitHub last commit](https://img.shields.io/github/last-commit/DenTelezhkin/DTTableViewManager)](https://github.com/DenTelezhkin/DTTableViewManager) - Protocol-oriented UITableView management, powered by generics and associated types.
* [ExpandableCell ![GitHub Repo Stars](https://img.shields.io/github/stars/younatics/ExpandableCell) ![GitHub last commit](https://img.shields.io/github/last-commit/younatics/ExpandableCell)](https://github.com/younatics/ExpandableCell) - Fully refactored YNExapnadableCell with more concise, bug free. Easiest usage of expandable & collapsible cell for iOS. You can customize expandable UITableViewCell whatever you like. ExpandableCell is made because insertRows and deleteRows is hard to use. Just inheirt ExpandableDelegate.
* [FDTextFieldTableViewCell ![GitHub Repo Stars](https://img.shields.io/github/stars/fulldecent/FDTextFieldTableViewCell) ![GitHub last commit](https://img.shields.io/github/last-commit/fulldecent/FDTextFieldTableViewCell)](https://github.com/fulldecent/FDTextFieldTableViewCell) - Adds a UITextField to the cell and places it correctly.
* [folding-cell ![GitHub Repo Stars](https://img.shields.io/github/stars/Ramotion/folding-cell) ![GitHub last commit](https://img.shields.io/github/last-commit/Ramotion/folding-cell)](https://github.com/Ramotion/folding-cell) - Folding cell transition.
* [GridView ![GitHub Repo Stars](https://img.shields.io/github/stars/KyoheiG3/GridView) ![GitHub last commit](https://img.shields.io/github/last-commit/KyoheiG3/GridView)](https://github.com/KyoheiG3/GridView) - Can be customized as a time table, spreadsheet, paging and more.
* [HGPlaceholders ![GitHub Repo Stars](https://img.shields.io/github/stars/HamzaGhazouani/HGPlaceholders) ![GitHub last commit](https://img.shields.io/github/last-commit/HamzaGhazouani/HGPlaceholders)](https://github.com/HamzaGhazouani/HGPlaceholders) - Nice library to show placeholders and Empty States for any UITableView/UICollectionView in your project.
* [OKTableViewLiaison ![GitHub Repo Stars](https://img.shields.io/github/stars/okcupid/OKTableViewLiaison) ![GitHub last commit](https://img.shields.io/github/last-commit/okcupid/OKTableViewLiaison)](https://github.com/okcupid/OKTableViewLiaison) - Framework to help you better manage UITableViews.
* [ParallaxHeader ![GitHub Repo Stars](https://img.shields.io/github/stars/romansorochak/ParallaxHeader) ![GitHub last commit](https://img.shields.io/github/last-commit/romansorochak/ParallaxHeader)](https://github.com/romansorochak/ParallaxHeader) - Simple way to add parallax header to UIScrollView/UITableView.
* [Persei ![GitHub Repo Stars](https://img.shields.io/github/stars/Yalantis/Persei) ![GitHub last commit](https://img.shields.io/github/last-commit/Yalantis/Persei)](https://github.com/Yalantis/Persei) - Animated top menu for UITableView / UICollectionView / UIScrollView.
* [PullToRefreshSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/dekatotoro/PullToRefreshSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/dekatotoro/PullToRefreshSwift)](https://github.com/dekatotoro/PullToRefreshSwift) - PullToRefresh library.
* [QuickTableViewController ![GitHub Repo Stars](https://img.shields.io/github/stars/bcylin/QuickTableViewController) ![GitHub last commit](https://img.shields.io/github/last-commit/bcylin/QuickTableViewController)](https://github.com/bcylin/QuickTableViewController) - A simple way to create a UITableView for settings.
* [ReverseExtension ![GitHub Repo Stars](https://img.shields.io/github/stars/marty-suzuki/ReverseExtension) ![GitHub last commit](https://img.shields.io/github/last-commit/marty-suzuki/ReverseExtension)](https://github.com/marty-suzuki/ReverseExtension) - UITableView extension that enables the insertion of cells the from bottom of a table view.
* [SelectionList ![GitHub Repo Stars](https://img.shields.io/github/stars/yonat/SelectionList) ![GitHub last commit](https://img.shields.io/github/last-commit/yonat/SelectionList)](https://github.com/yonat/SelectionList) - Simple single-selection or multiple-selection checklist, based on UITableView.
* [Shoyu ![GitHub Repo Stars](https://img.shields.io/github/stars/xai3/Shoyu) ![GitHub last commit](https://img.shields.io/github/last-commit/xai3/Shoyu)](https://github.com/xai3/Shoyu) - Easier way to represent the structure of UITableView.
* [SwiftyComments ![GitHub Repo Stars](https://img.shields.io/github/stars/tsucres/SwiftyComments) ![GitHub last commit](https://img.shields.io/github/last-commit/tsucres/SwiftyComments)](https://github.com/tsucres/SwiftyComments) - Nested hierarchy of expandable/collapsible cells to easily build elegant discussion threads.
* [SwipeCellKit ![GitHub Repo Stars](https://img.shields.io/github/stars/SwipeCellKit/SwipeCellKit) ![GitHub last commit](https://img.shields.io/github/last-commit/SwipeCellKit/SwipeCellKit)](https://github.com/SwipeCellKit/SwipeCellKit) - Swipeable UITableViewCell based on the stock Mail.app.
* [WLEmptyState ![GitHub Repo Stars](https://img.shields.io/github/stars/wizeline/WLEmptyState) ![GitHub last commit](https://img.shields.io/github/last-commit/wizeline/WLEmptyState)](https://github.com/wizeline/WLEmptyState) - A component that lets you customize the view when the dataset of UITableView is empty.
* [YNExpandableCell ![GitHub Repo Stars](https://img.shields.io/github/stars/younatics/YNExpandableCell) ![GitHub last commit](https://img.shields.io/github/last-commit/younatics/YNExpandableCell)](https://github.com/younatics/YNExpandableCell) - Awesome expandable, collapsible tableview cell for iOS.

#### Walkthrough
[back to top](#readme) 

* [AwesomeSpotlightView ![GitHub Repo Stars](https://img.shields.io/github/stars/aleksandrshoshiashvili/AwesomeSpotlightView) ![GitHub last commit](https://img.shields.io/github/last-commit/aleksandrshoshiashvili/AwesomeSpotlightView)](https://github.com/aleksandrshoshiashvili/AwesomeSpotlightView) - Create tutorial or coach tour.
* [BWWalkthrough ![GitHub Repo Stars](https://img.shields.io/github/stars/ariok/BWWalkthrough) ![GitHub last commit](https://img.shields.io/github/last-commit/ariok/BWWalkthrough)](https://github.com/ariok/BWWalkthrough) - A class to build custom walkthroughs for your iOS App.
* [ConcentricOnboarding ![GitHub Repo Stars](https://img.shields.io/github/stars/exyte/ConcentricOnboarding) ![GitHub last commit](https://img.shields.io/github/last-commit/exyte/ConcentricOnboarding)](https://github.com/exyte/ConcentricOnboarding) - SwiftUI library for a walkthrough or onboarding flow with tap actions.
* [Gecco ![GitHub Repo Stars](https://img.shields.io/github/stars/xai3/Gecco) ![GitHub last commit](https://img.shields.io/github/last-commit/xai3/Gecco)](https://github.com/xai3/Gecco) - Spotlight view for iOS.
* [Instructions ![GitHub Repo Stars](https://img.shields.io/github/stars/ephread/Instructions) ![GitHub last commit](https://img.shields.io/github/last-commit/ephread/Instructions)](https://github.com/ephread/Instructions) - A library to create app walkthroughs and guided tours.
* [OnboardKit ![GitHub Repo Stars](https://img.shields.io/github/stars/NikolaKirev/OnboardKit) ![GitHub last commit](https://img.shields.io/github/last-commit/NikolaKirev/OnboardKit)](https://github.com/NikolaKirev/OnboardKit) - Customisable user onboarding for your iOS app.
* [PaperOnboarding ![GitHub Repo Stars](https://img.shields.io/github/stars/Ramotion/paper-onboarding) ![GitHub last commit](https://img.shields.io/github/last-commit/Ramotion/paper-onboarding)](https://github.com/Ramotion/paper-onboarding) - PaperOnboarding is a material design UI slider.
* [SuggestionsKit ![GitHub Repo Stars](https://img.shields.io/github/stars/huemae/SuggestionsKit) ![GitHub last commit](https://img.shields.io/github/last-commit/huemae/SuggestionsKit)](https://github.com/huemae/SuggestionsKit) - Library for educating users about features in app.
* [SwiftyOnboard ![GitHub Repo Stars](https://img.shields.io/github/stars/juanpablofernandez/SwiftyOnboard) ![GitHub last commit](https://img.shields.io/github/last-commit/juanpablofernandez/SwiftyOnboard)](https://github.com/juanpablofernandez/SwiftyOnboard) - An iOS framework that allows developers to create beautiful onboarding experiences.
* [SwiftyWalkthrough ![GitHub Repo Stars](https://img.shields.io/github/stars/ruipfcosta/SwiftyWalkthrough) ![GitHub last commit](https://img.shields.io/github/last-commit/ruipfcosta/SwiftyWalkthrough)](https://github.com/ruipfcosta/SwiftyWalkthrough) - The easiest way to create a great walkthrough experience in your apps.

### Utility
*Some interesting utilities to help you in your projects* [back to top](#readme) 

* [AlexaSkillsKit ![GitHub Repo Stars](https://img.shields.io/github/stars/choefele/AlexaSkillsKit) ![GitHub last commit](https://img.shields.io/github/last-commit/choefele/AlexaSkillsKit)](https://github.com/choefele/AlexaSkillsKit) - Develop custom Alexa Skills.
* [ApplyStyleKit ![GitHub Repo Stars](https://img.shields.io/github/stars/shindyu/ApplyStyleKit) ![GitHub last commit](https://img.shields.io/github/last-commit/shindyu/ApplyStyleKit)](https://github.com/shindyu/ApplyStyleKit) - Elegantly, Apply style to UIKit using Method Chain.
* [Basis ![GitHub Repo Stars](https://img.shields.io/github/stars/typelift/Basis) ![GitHub last commit](https://img.shields.io/github/last-commit/typelift/Basis)](https://github.com/typelift/Basis) - Pure Declarative Programming.
* [Bow ![GitHub Repo Stars](https://img.shields.io/github/stars/bow-swift/bow) ![GitHub last commit](https://img.shields.io/github/last-commit/bow-swift/bow)](https://github.com/bow-swift/bow) - Companion library for Typed Functional Programming.
* [CallbackURLKit ![GitHub Repo Stars](https://img.shields.io/github/stars/phimage/CallbackURLKit) ![GitHub last commit](https://img.shields.io/github/last-commit/phimage/CallbackURLKit)](https://github.com/phimage/CallbackURLKit) - Implementation of x-callback-url (Inter app communication).
* [Closures ![GitHub Repo Stars](https://img.shields.io/github/stars/vhesener/Closures) ![GitHub last commit](https://img.shields.io/github/last-commit/vhesener/Closures)](https://github.com/vhesener/Closures) - Swifty closures for UIKit and Foundation.
* [Codextended ![GitHub Repo Stars](https://img.shields.io/github/stars/JohnSundell/Codextended) ![GitHub last commit](https://img.shields.io/github/last-commit/JohnSundell/Codextended)](https://github.com/JohnSundell/Codextended) - Extensions giving Codable API type inference super powers.
* [Curry ![GitHub Repo Stars](https://img.shields.io/github/stars/thoughtbot/Curry) ![GitHub last commit](https://img.shields.io/github/last-commit/thoughtbot/Curry)](https://github.com/thoughtbot/Curry) - Function currying.
* [Delegated ![GitHub Repo Stars](https://img.shields.io/github/stars/dreymonde/Delegated) ![GitHub last commit](https://img.shields.io/github/last-commit/dreymonde/Delegated)](https://github.com/dreymonde/Delegated) - Closure-based delegation without memory leaks.
* [DifferenceKit ![GitHub Repo Stars](https://img.shields.io/github/stars/ra1028/DifferenceKit) ![GitHub last commit](https://img.shields.io/github/last-commit/ra1028/DifferenceKit)](https://github.com/ra1028/DifferenceKit) - 💻 A fast and flexible O(n) difference algorithm framework.
* [Differific ![GitHub Repo Stars](https://img.shields.io/github/stars/zenangst/Differific) ![GitHub last commit](https://img.shields.io/github/last-commit/zenangst/Differific)](https://github.com/zenangst/Differific) - A fast and convenient diffing framework.
* [Dollar ![GitHub Repo Stars](https://img.shields.io/github/stars/ankurp/Dollar) ![GitHub last commit](https://img.shields.io/github/last-commit/ankurp/Dollar)](https://github.com/ankurp/Dollar) - Similar to Lo-Dash or Underscore in Javascript.
* [DuctTape ![GitHub Repo Stars](https://img.shields.io/github/stars/marty-suzuki/DuctTape) ![GitHub last commit](https://img.shields.io/github/last-commit/marty-suzuki/DuctTape)](https://github.com/marty-suzuki/DuctTape) - 📦 KeyPath dynamicMemberLookup based syntax sugar for Swift.
* [EtherWalletKit ![GitHub Repo Stars](https://img.shields.io/github/stars/SteadyAction/EtherWalletKit) ![GitHub last commit](https://img.shields.io/github/last-commit/SteadyAction/EtherWalletKit)](https://github.com/SteadyAction/EtherWalletKit) - Ethereum Wallet Toolkit for iOS - You can implement Ethereum wallet without a server and blockchain knowledge.
* [ExceptionCatcher ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/ExceptionCatcher) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/ExceptionCatcher)](https://github.com/sindresorhus/ExceptionCatcher) - Catch Objective-C exceptions.
* [EZSwiftExtensions ![GitHub Repo Stars](https://img.shields.io/github/stars/goktugyil/EZSwiftExtensions) ![GitHub last commit](https://img.shields.io/github/last-commit/goktugyil/EZSwiftExtensions)](https://github.com/goktugyil/EZSwiftExtensions) - How standard types and classes were supposed to work.
* [FluentQuery ![GitHub Repo Stars](https://img.shields.io/github/stars/MihaelIsaev/FluentQuery) ![GitHub last commit](https://img.shields.io/github/last-commit/MihaelIsaev/FluentQuery)](https://github.com/MihaelIsaev/FluentQuery) :penguin: - Powerful and easy to use Query Builder.
* [GoodExtensions-iOS ![GitHub Repo Stars](https://img.shields.io/github/stars/GoodRequest/GoodExtensions-iOS) ![GitHub last commit](https://img.shields.io/github/last-commit/GoodRequest/GoodExtensions-iOS)](https://github.com/GoodRequest/GoodExtensions-iOS) - 📑 GoodExtensions is a collection of useful and frequently used extensions.
* [GoodUIKit ![GitHub Repo Stars](https://img.shields.io/github/stars/GoodRequest/GoodUIKit) ![GitHub last commit](https://img.shields.io/github/last-commit/GoodRequest/GoodUIKit)](https://github.com/GoodRequest/GoodUIKit) - 📑 GoodUIKit is an extensions library filled with reusable UI snippets for faster and more efficient development.
* [Highlighter ![GitHub Repo Stars](https://img.shields.io/github/stars/younatics/Highlighter) ![GitHub last commit](https://img.shields.io/github/last-commit/younatics/Highlighter)](https://github.com/younatics/Highlighter) - Highlight whatever you want! Highlighter will magically find UI objects such as UILabel, UITextView, UITexTfield, UIButton in your UITableViewCell or other Class.
* [LifetimeTracker ![GitHub Repo Stars](https://img.shields.io/github/stars/krzysztofzablocki/LifetimeTracker) ![GitHub last commit](https://img.shields.io/github/last-commit/krzysztofzablocki/LifetimeTracker)](https://github.com/krzysztofzablocki/LifetimeTracker) - Surface retain cycle / memory issues right as you develop your application.
* [Lumos ![GitHub Repo Stars](https://img.shields.io/github/stars/sushinoya/Lumos) ![GitHub last commit](https://img.shields.io/github/last-commit/sushinoya/Lumos)](https://github.com/sushinoya/Lumos) - An easy-to-use API for Objective-C runtime functions.
* [ObjectiveKit ![GitHub Repo Stars](https://img.shields.io/github/stars/marmelroy/ObjectiveKit) ![GitHub last commit](https://img.shields.io/github/last-commit/marmelroy/ObjectiveKit)](https://github.com/marmelroy/ObjectiveKit) - API for Objective C runtime functions.
* [OpenSourceController ![GitHub Repo Stars](https://img.shields.io/github/stars/floriangbh/OpenSourceController) ![GitHub last commit](https://img.shields.io/github/last-commit/floriangbh/OpenSourceController)](https://github.com/floriangbh/OpenSourceController) - The simplest way to display the librarie's licences used in your application.
* [Percentage ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/Percentage) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/Percentage)](https://github.com/sindresorhus/Percentage) - Make percentages more readable and type-safe.
* [Periphery ![GitHub Repo Stars](https://img.shields.io/github/stars/peripheryapp/periphery) ![GitHub last commit](https://img.shields.io/github/last-commit/peripheryapp/periphery)](https://github.com/peripheryapp/periphery) - A tool to identify unused code in Swift projects.
* [Playbook ![GitHub Repo Stars](https://img.shields.io/github/stars/playbook-ui/playbook-ios) ![GitHub last commit](https://img.shields.io/github/last-commit/playbook-ui/playbook-ios)](https://github.com/playbook-ui/playbook-ios) - 📘A library for isolated developing UI components and automatically snapshots of them.
* [PrivacyFlash Pro ![GitHub Repo Stars](https://img.shields.io/github/stars/privacy-tech-lab/privacyflash-pro) ![GitHub last commit](https://img.shields.io/github/last-commit/privacy-tech-lab/privacyflash-pro)](https://github.com/privacy-tech-lab/privacyflash-pro) - Generate a privacy policy for your Swift iOS app from its code.
* [protobuf-swift ![GitHub Repo Stars](https://img.shields.io/github/stars/alexeyxo/protobuf-swift) ![GitHub last commit](https://img.shields.io/github/last-commit/alexeyxo/protobuf-swift)](https://github.com/alexeyxo/protobuf-swift) - ProtocolBuffers.
* [Prototope](http://khan.github.io/Prototope/) - Library of lightweight interfaces for prototyping, bridged to JS.
* [R.swift ![GitHub Repo Stars](https://img.shields.io/github/stars/mac-cain13/R.swift) ![GitHub last commit](https://img.shields.io/github/last-commit/mac-cain13/R.swift)](https://github.com/mac-cain13/R.swift) - Tool to get strong typed, autocompleted resources like images, cells and segues.
* [RandomKit ![GitHub Repo Stars](https://img.shields.io/github/stars/nvzqz/RandomKit) ![GitHub last commit](https://img.shields.io/github/last-commit/nvzqz/RandomKit)](https://github.com/nvzqz/RandomKit/) :penguin: - Random data generation.
* [ReadabilityKit ![GitHub Repo Stars](https://img.shields.io/github/stars/exyte/ReadabilityKit) ![GitHub last commit](https://img.shields.io/github/last-commit/exyte/ReadabilityKit)](https://github.com/exyte/ReadabilityKit) - Preview extractor for news, articles and full-texts.
* [ResourceKit ![GitHub Repo Stars](https://img.shields.io/github/stars/bannzai/ResourceKit) ![GitHub last commit](https://img.shields.io/github/last-commit/bannzai/ResourceKit)](https://github.com/bannzai/ResourceKit) - Enable autocomplete use resources.
* [Result ![GitHub Repo Stars](https://img.shields.io/github/stars/antitypical/Result) ![GitHub last commit](https://img.shields.io/github/last-commit/antitypical/Result)](https://github.com/antitypical/Result) - Type modelling the success/failure of arbitrary operations.
* [Rugby ![GitHub Repo Stars](https://img.shields.io/github/stars/swiftyfinch/Rugby) ![GitHub last commit](https://img.shields.io/github/last-commit/swiftyfinch/Rugby)](https://github.com/swiftyfinch/Rugby) - 🏈 Cache CocoaPods for faster rebuild and indexing Xcode project.
* [Runes ![GitHub Repo Stars](https://img.shields.io/github/stars/thoughtbot/Runes) ![GitHub last commit](https://img.shields.io/github/last-commit/thoughtbot/Runes)](https://github.com/thoughtbot/Runes) - Functional operators: flatMap, map, apply.
* [Solar ![GitHub Repo Stars](https://img.shields.io/github/stars/ceeK/Solar) ![GitHub last commit](https://img.shields.io/github/last-commit/ceeK/Solar)](https://github.com/ceeK/Solar) - Calculate sunrise and sunset times given a location.
* [SpriteKit+Spring ![GitHub Repo Stars](https://img.shields.io/github/stars/ataugeron/SpriteKit-Spring) ![GitHub last commit](https://img.shields.io/github/last-commit/ataugeron/SpriteKit-Spring)](https://github.com/ataugeron/SpriteKit-Spring) - SpriteKit API reproducing UIView's spring animations with SKAction.
* [Sugar ![GitHub Repo Stars](https://img.shields.io/github/stars/hyperoslo/Sugar) ![GitHub last commit](https://img.shields.io/github/last-commit/hyperoslo/Sugar)](https://github.com/hyperoslo/Sugar) - Something sweet that goes great with your Cocoa.
* [swift-protobuf ![GitHub Repo Stars](https://img.shields.io/github/stars/apple/swift-protobuf) ![GitHub last commit](https://img.shields.io/github/last-commit/apple/swift-protobuf)](https://github.com/apple/swift-protobuf) :penguin: - A plugin and runtime library for using Google's Protocol Buffer.
* [SwiftAutoGUI ![GitHub Repo Stars](https://img.shields.io/github/stars/NakaokaRei/SwiftAutoGUI) ![GitHub last commit](https://img.shields.io/github/last-commit/NakaokaRei/SwiftAutoGUI)](https://github.com/NakaokaRei/SwiftAutoGUI) - Used to programmatically control the mouse & keyboard. A library for manipulating macOS with Swift.
* [SwiftBoost ![GitHub Repo Stars](https://img.shields.io/github/stars/sparrowcode/SwiftBoost) ![GitHub last commit](https://img.shields.io/github/last-commit/sparrowcode/SwiftBoost)](https://github.com/sparrowcode/SwiftBoost) - Collection of Swift-extensions to boost development process.
* [Swiftbot ![GitHub Repo Stars](https://img.shields.io/github/stars/noppefoxwolf/Swiftbot) ![GitHub last commit](https://img.shields.io/github/last-commit/noppefoxwolf/Swiftbot)](https://github.com/noppefoxwolf/Swiftbot) - run swift code on slack.
* [SwifterSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/SwifterSwift/SwifterSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/SwifterSwift/SwifterSwift)](https://github.com/SwifterSwift/SwifterSwift) - A handy collection of more than 500 native extensions to boost your productivity.
* [SwiftGen-Storyboard ![GitHub Repo Stars](https://img.shields.io/github/stars/SwiftGen/SwiftGen) ![GitHub last commit](https://img.shields.io/github/last-commit/SwiftGen/SwiftGen)](https://github.com/SwiftGen/SwiftGen#uistoryboard) - A tool to auto-generate `enums` for all your Storyboards, Scenes and Segues constants + appropriate convenience accessors.
* [SwiftLinkPreview ![GitHub Repo Stars](https://img.shields.io/github/stars/LeonardoCardoso/SwiftLinkPreview) ![GitHub last commit](https://img.shields.io/github/last-commit/LeonardoCardoso/SwiftLinkPreview)](https://github.com/LeonardoCardoso/SwiftLinkPreview) - It makes a preview from an url, grabbing all information such as title, relevant texts and images.
* [SwiftPlantUML ![GitHub Repo Stars](https://img.shields.io/github/stars/MarcoEidinger/SwiftPlantUML) ![GitHub last commit](https://img.shields.io/github/last-commit/MarcoEidinger/SwiftPlantUML)](https://github.com/MarcoEidinger/SwiftPlantUML) - A command-line tool and Swift Package to generate UML class from your Swift source code. Also available as Xcode Source Editor Extension.
* [SwiftRandom ![GitHub Repo Stars](https://img.shields.io/github/stars/thellimist/SwiftRandom) ![GitHub last commit](https://img.shields.io/github/last-commit/thellimist/SwiftRandom)](https://github.com/thellimist/SwiftRandom) - A tiny generator of random data.
* [SwiftRater ![GitHub Repo Stars](https://img.shields.io/github/stars/takecian/SwiftRater) ![GitHub last commit](https://img.shields.io/github/last-commit/takecian/SwiftRater)](https://github.com/takecian/SwiftRater) - A utility that reminds your iPhone app's users to review the app.
* [SwiftTweaks ![GitHub Repo Stars](https://img.shields.io/github/stars/khan/swifttweaks) ![GitHub last commit](https://img.shields.io/github/last-commit/khan/swifttweaks)](https://github.com/khan/swifttweaks) - Tweak your iOS app without recompiling.
* [Swiftx ![GitHub Repo Stars](https://img.shields.io/github/stars/typelift/Swiftx) ![GitHub last commit](https://img.shields.io/github/last-commit/typelift/Swiftx)](https://github.com/typelift/Swiftx) - Functional data types and functions for any project.
* [SwiftyUtils ![GitHub Repo Stars](https://img.shields.io/github/stars/tbaranes/SwiftyUtils) ![GitHub last commit](https://img.shields.io/github/last-commit/tbaranes/SwiftyUtils)](https://github.com/tbaranes/SwiftyUtils) - All the reusable code that we need in each project.
* [Swiftz ![GitHub Repo Stars](https://img.shields.io/github/stars/typelift/Swiftz) ![GitHub last commit](https://img.shields.io/github/last-commit/typelift/Swiftz)](https://github.com/typelift/Swiftz) - Functional programming.
* [Then ![GitHub Repo Stars](https://img.shields.io/github/stars/devxoul/Then) ![GitHub last commit](https://img.shields.io/github/last-commit/devxoul/Then)](https://github.com/devxoul/Then) - Super sweet syntactic sugar for initializers.
* [TSAO ![GitHub Repo Stars](https://img.shields.io/github/stars/lilyball/swift-tsao) ![GitHub last commit](https://img.shields.io/github/last-commit/lilyball/swift-tsao)](https://github.com/lilyball/swift-tsao) - Type-Safe Associated Objects.
* [URLQueryItemEncoder ![GitHub Repo Stars](https://img.shields.io/github/stars/pitiphong-p/URLQueryItemEncoder) ![GitHub last commit](https://img.shields.io/github/last-commit/pitiphong-p/URLQueryItemEncoder)](https://github.com/pitiphong-p/URLQueryItemEncoder) - An Encoder for encoding any Encodable value into an array of URLQueryItem.
* [UTIKit ![GitHub Repo Stars](https://img.shields.io/github/stars/cockscomb/UTIKit) ![GitHub last commit](https://img.shields.io/github/last-commit/cockscomb/UTIKit)](https://github.com/cockscomb/UTIKit) - an UTI (Uniform Type Identifier) wrapper.
* [Vaccine ![GitHub Repo Stars](https://img.shields.io/github/stars/zenangst/Vaccine) ![GitHub last commit](https://img.shields.io/github/last-commit/zenangst/Vaccine)](https://github.com/zenangst/Vaccine) - Make your apps immune to recompile-decease.
* [WeakableSelf ![GitHub Repo Stars](https://img.shields.io/github/stars/vincent-pradeilles/weakable-self) ![GitHub last commit](https://img.shields.io/github/last-commit/vincent-pradeilles/weakable-self)](https://github.com/vincent-pradeilles/weakable-self) - A micro-framework to encapsulate [weak self] and guard statements within closures.
* [WhatsNew ![GitHub Repo Stars](https://img.shields.io/github/stars/BalestraPatrick/WhatsNew) ![GitHub last commit](https://img.shields.io/github/last-commit/BalestraPatrick/WhatsNew)](https://github.com/BalestraPatrick/WhatsNew) - Showcase new features after an app update similar to Pages, Numbers and Keynote.
* [WhatsNewKit ![GitHub Repo Stars](https://img.shields.io/github/stars/SvenTiigi/WhatsNewKit) ![GitHub last commit](https://img.shields.io/github/last-commit/SvenTiigi/WhatsNewKit)](https://github.com/SvenTiigi/WhatsNewKit) - Showcase your awesome new app features.
* [XestiMonitors ![GitHub Repo Stars](https://img.shields.io/github/stars/eBardX/XestiMonitors) ![GitHub last commit](https://img.shields.io/github/last-commit/eBardX/XestiMonitors)](https://github.com/eBardX/XestiMonitors) - An extensible monitoring framework.
* [ZamzamKit ![GitHub Repo Stars](https://img.shields.io/github/stars/ZamzamInc/ZamzamKit) ![GitHub last commit](https://img.shields.io/github/last-commit/ZamzamInc/ZamzamKit)](https://github.com/ZamzamInc/ZamzamKit) - A collection of micro utilities and extensions for Standard Library, Foundation and UIKit.

### Validation
*A collection of validation libs.* [back to top](#readme) 

* [ATGValidator ![GitHub Repo Stars](https://img.shields.io/github/stars/altayer-digital/ATGValidator) ![GitHub last commit](https://img.shields.io/github/last-commit/altayer-digital/ATGValidator)](https://github.com/altayer-digital/ATGValidator) - Rule based validation framework with form and card validation support for iOS.
* [FormValidatorSwift ![GitHub Repo Stars](https://img.shields.io/github/stars/ustwo/formvalidator-swift) ![GitHub last commit](https://img.shields.io/github/last-commit/ustwo/formvalidator-swift)](https://github.com/ustwo/formvalidator-swift) - Allows you to validate inputs of text fields and text views in a convenient way.
* [Input Mask ![GitHub Repo Stars](https://img.shields.io/github/stars/RedMadRobot/input-mask-ios) ![GitHub last commit](https://img.shields.io/github/last-commit/RedMadRobot/input-mask-ios)](https://github.com/RedMadRobot/input-mask-ios) - Pattern-based user input formatter, parser and validator for iOS.
* [RxValidator ![GitHub Repo Stars](https://img.shields.io/github/stars/vbmania/RxValidator) ![GitHub last commit](https://img.shields.io/github/last-commit/vbmania/RxValidator)](https://github.com/vbmania/RxValidator) - Simple, Extensible, Flexible Validation Checker.
* [SwiftValidator ![GitHub Repo Stars](https://img.shields.io/github/stars/SwiftValidatorCommunity/SwiftValidator) ![GitHub last commit](https://img.shields.io/github/last-commit/SwiftValidatorCommunity/SwiftValidator)](https://github.com/SwiftValidatorCommunity/SwiftValidator) - A rule-based validation library.
* [SwiftValidators ![GitHub Repo Stars](https://img.shields.io/github/stars/gkaimakas/SwiftValidators) ![GitHub last commit](https://img.shields.io/github/last-commit/gkaimakas/SwiftValidators)](https://github.com/gkaimakas/SwiftValidators) - String validation for iOS (inspired by validator.js).
* [ValidatedPropertyKit ![GitHub Repo Stars](https://img.shields.io/github/stars/SvenTiigi/ValidatedPropertyKit) ![GitHub last commit](https://img.shields.io/github/last-commit/SvenTiigi/ValidatedPropertyKit)](https://github.com/SvenTiigi/ValidatedPropertyKit) - Easily validate your Properties with Property Wrappers 👮.

#### Phone Numbers
*Libs to manage phone numbers.* [back to top](#readme) 

* [NKVPhonePicker ![GitHub Repo Stars](https://img.shields.io/github/stars/NikKovIos/NKVPhonePicker) ![GitHub last commit](https://img.shields.io/github/last-commit/NikKovIos/NKVPhonePicker)](https://github.com/NikKovIos/NKVPhonePicker) - An UITextField subclass to simplify country code's picking.
* [PhoneNumberKit ![GitHub Repo Stars](https://img.shields.io/github/stars/marmelroy/PhoneNumberKit) ![GitHub last commit](https://img.shields.io/github/last-commit/marmelroy/PhoneNumberKit)](https://github.com/marmelroy/PhoneNumberKit) - Framework for parsing, formatting and validating international phone numbers. Inspired by Google's libphonenumber.

### Version Manager
[back to top](#readme) 

* [AppVersionMonitor ![GitHub Repo Stars](https://img.shields.io/github/stars/eure/AppVersionMonitor) ![GitHub last commit](https://img.shields.io/github/last-commit/eure/AppVersionMonitor)](https://github.com/eure/AppVersionMonitor) - Monitor iOS app version easily.
* [Siren ![GitHub Repo Stars](https://img.shields.io/github/stars/ArtSabintsev/Siren) ![GitHub last commit](https://img.shields.io/github/last-commit/ArtSabintsev/Siren)](https://github.com/ArtSabintsev/Siren) - Notify users when a new version of your app is available and prompt them to upgrade.
* [Version ![GitHub Repo Stars](https://img.shields.io/github/stars/mrackwitz/Version) ![GitHub last commit](https://img.shields.io/github/last-commit/mrackwitz/Version)](https://github.com/mrackwitz/Version) - Version represents and compares semantic versions.
* [Version Tracker Swift ![GitHub Repo Stars](https://img.shields.io/github/stars/tbaranes/VersionTrackerSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/tbaranes/VersionTrackerSwift)](https://github.com/tbaranes/VersionTrackerSwift) - Versions tracker for your iOS, OS X, and tvOS app.

### Video
[back to top](#readme) 

* [BMPlayer ![GitHub Repo Stars](https://img.shields.io/github/stars/BrikerMan/BMPlayer) ![GitHub last commit](https://img.shields.io/github/last-commit/BrikerMan/BMPlayer)](https://github.com/BrikerMan/BMPlayer) - A video player for iOS, based on AVPlayer, support the horizontal, vertical screen. support adjust volume, brigtness and seek by slide.
* [Cabbage ![GitHub Repo Stars](https://img.shields.io/github/stars/VideoFlint/Cabbage) ![GitHub last commit](https://img.shields.io/github/last-commit/VideoFlint/Cabbage)](https://github.com/VideoFlint/Cabbage) - A video composition framework build on top of AVFoundation.
* [Kitsunebi ![GitHub Repo Stars](https://img.shields.io/github/stars/noppefoxwolf/Kitsunebi) ![GitHub last commit](https://img.shields.io/github/last-commit/noppefoxwolf/Kitsunebi)](https://github.com/noppefoxwolf/Kitsunebi) - Overlay alpha channel video animation player view using OpenGLES.
* [MMPlayerView ![GitHub Repo Stars](https://img.shields.io/github/stars/MillmanY/MMPlayerView) ![GitHub last commit](https://img.shields.io/github/last-commit/MillmanY/MMPlayerView)](https://github.com/MillmanY/MMPlayerView) - Custom AVPlayerLayer on view and transition player with good effect like YouTube and Facebook.
* [MobilePlayer ![GitHub Repo Stars](https://img.shields.io/github/stars/sahin/mobileplayer-ios) ![GitHub last commit](https://img.shields.io/github/last-commit/sahin/mobileplayer-ios)](https://github.com/sahin/mobileplayer-ios) - A powerful and completely customizable media player for iOS.
* [NextLevelSessionExporter ![GitHub Repo Stars](https://img.shields.io/github/stars/NextLevel/NextLevelSessionExporter) ![GitHub last commit](https://img.shields.io/github/last-commit/NextLevel/NextLevelSessionExporter)](https://github.com/NextLevel/NextLevelSessionExporter) - Export and transcode media.
* [Player ![GitHub Repo Stars](https://img.shields.io/github/stars/piemonte/Player) ![GitHub last commit](https://img.shields.io/github/last-commit/piemonte/Player)](https://github.com/piemonte/Player) - iOS video player, simple drop in component for playing and streaming media.
* [PlayerView ![GitHub Repo Stars](https://img.shields.io/github/stars/davidlondono/PlayerView) ![GitHub last commit](https://img.shields.io/github/last-commit/davidlondono/PlayerView)](https://github.com/davidlondono/PlayerView) - Easy to use video player using a UIView, manage rate of reproduction, screenshots and callbacks-delegate for player state.
* [PryntTrimmerView ![GitHub Repo Stars](https://img.shields.io/github/stars/HHK1/PryntTrimmerView) ![GitHub last commit](https://img.shields.io/github/last-commit/HHK1/PryntTrimmerView)](https://github.com/HHK1/PryntTrimmerView) - Trim and crop videos.
* [SwiftFFmpeg ![GitHub Repo Stars](https://img.shields.io/github/stars/sunlubo/SwiftFFmpeg) ![GitHub last commit](https://img.shields.io/github/last-commit/sunlubo/SwiftFFmpeg)](https://github.com/sunlubo/SwiftFFmpeg) - A wrapper for the FFmpeg C API.
* [SwiftVideoBackground ![GitHub Repo Stars](https://img.shields.io/github/stars/dingwilson/SwiftVideoBackground) ![GitHub last commit](https://img.shields.io/github/last-commit/dingwilson/SwiftVideoBackground)](https://github.com/dingwilson/SwiftVideoBackground) - Easy to Use UIView subclass for implementating a video background.
* [Swifty360Player ![GitHub Repo Stars](https://img.shields.io/github/stars/abdullahselek/Swifty360Player) ![GitHub last commit](https://img.shields.io/github/last-commit/abdullahselek/Swifty360Player)](https://github.com/abdullahselek/Swifty360Player) - iOS 360-degree video player streaming from an AVPlayer.
* [YiVideoEditor ![GitHub Repo Stars](https://img.shields.io/github/stars/coderyi/YiVideoEditor) ![GitHub last commit](https://img.shields.io/github/last-commit/coderyi/YiVideoEditor)](https://github.com/coderyi/YiVideoEditor) - a library for rotating, cropping, adding layers (watermark) and as well as adding audio (music) to the videos.

## Serverless

* [Azure Functions for Swift ![GitHub Repo Stars](https://img.shields.io/github/stars/SalehAlbuga/azure-functions-swift) ![GitHub last commit](https://img.shields.io/github/last-commit/SalehAlbuga/azure-functions-swift)](https://github.com/SalehAlbuga/azure-functions-swift) :penguin: - Swift Worker for Azure Functions.


### Contributing

Please take a quick look at the [contribution guidelines](.github/CONTRIBUTING.md) first. If you see a package or project here that is no longer maintained or is not a good fit, please submit a pull request to improve this file. Thank you to all [contributors ![GitHub Repo Stars](https://img.shields.io/github/stars/matteocrippa/awesome-swift) ![GitHub last commit](https://img.shields.io/github/last-commit/matteocrippa/awesome-swift)](https://github.com/matteocrippa/awesome-swift/graphs/contributors); you rock!!