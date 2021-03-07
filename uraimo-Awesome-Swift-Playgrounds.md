# Awesome Swift Playgrounds [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)  ![154 playgrounds](https://img.shields.io/badge/Playgrounds:-154-orange.svg)

> A curated list of awesome Swift playgrounds.

### Contributing

Please take a quick look at the [contribution guidelines ![GitHub Repo stars](https://img.shields.io/github/stars/uraimo/awesome-swift-playgrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/uraimo/awesome-swift-playgrounds)](https://github.com/uraimo/awesome-swift-playgrounds/blob/master/CONTRIBUTING.md) first. Thanks to all [contributors ![GitHub Repo stars](https://img.shields.io/github/stars/uraimo/awesome-swift-playgrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/uraimo/awesome-swift-playgrounds)](https://github.com/uraimo/awesome-swift-playgrounds/graphs/contributors); you rock!

If you see a playground here that does not work anymore with the current release of Xcode or is not a good fit, please submit a pull request to improve this file or consider updating it, thank you!

### Downloading all the playgrounds

Unless otherwise indicated, all playgrounds are compatible with Swift 3.

All the playgrounds are available as submodules in the `playgrounds/` directory, to download them all in one go, just clone this repository with `git clone --recursive https://github.com/uraimo/Awesome-Swift-Playgrounds.git` or execute `git submodule update --init` after you have cloned the repository the usual way. 

Apple's playgrounds distributed as zip archives have to be downloaded manually.

### Tags

🌟 = My personal favorites

🍁 = Swift 4+ Playground

⏳ = Pre-Swift 3 Playground

### Contents

- [PlaygroundBooks](#playgroundbooks)
- [Learning Swift](#learning-swift)
- [Learning Swift: Advanced Topics](#learning-swift-advanced-topics)
  - [Design Patterns](#design-patterns)
  - [Protocol Oriented Programming](#protocol-oriented-programming)
  - [Functional Reactive Programming](#functional-reactive-programming)
- [Apple's Playgrounds](#apples-playgrounds)
- [WWDC Students Submissions](#wwdc-students-submissions)
- [Playgrounds about Playgrounds](#playgrounds-about-playgrounds)
- [Playgrounds from Playgroundbooks](#playgrounds-from-playgroundbooks)
- [Theoretical Computer Science](#theoretical-computer-science)
    - [Algorithms and Data Structures](#algorithms-and-data-structures)
    - [Languages](#languages)
    - [Machine Learning](#machine-learning)
- [UIKit And Graphics](#uikit-and-graphics)
  - [Core Image](#core-image)
  - [Metal](#metal)
  - [Animations](#animations)
  - [SpriteKit](#spritekit)
- [Audio](#audio)
- [Mathematics](#mathematics)
- [Libraries and APIs](#libraries-and-apis)
- [Playground sets](#playground-sets)
- [Miscellaneous](#miscellaneous)


## PlaygroundBooks
*Playgrounds that can be run on your iPad*

* [Guilloche Pattern Playground Book ![GitHub Repo stars](https://img.shields.io/github/stars/TheWildHorse/GuillochePlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/TheWildHorse/GuillochePlayground)](https://github.com/TheWildHorse/GuillochePlayground) - Learn more about this pattern you see every day, but probably never knew it was really carefully designed. 🍁
* [Accessibility ![GitHub Repo stars](https://img.shields.io/github/stars/xReee/wwdc2018) ![GitHub last commit](https://img.shields.io/github/last-commit/xReee/wwdc2018)](https://github.com/xReee/wwdc2018) - Accessibility for iOS developers. 🍁 
* [TJBot Playground ![GitHub Repo stars](https://img.shields.io/github/stars/jweisz/tjbot-playground) ![GitHub last commit](https://img.shields.io/github/last-commit/jweisz/tjbot-playground)](https://github.com/jweisz/tjbot-playground) - Swift Playground for interacting with IBM's TJBot. 🍁
* [Tree Trouble Playbook ![GitHub Repo stars](https://img.shields.io/github/stars/joelrorseth/Tree-Trouble) ![GitHub last commit](https://img.shields.io/github/last-commit/joelrorseth/Tree-Trouble)](https://github.com/joelrorseth/Tree-Trouble) - An interactive Swift Playground Book about Binary Search Trees.
* [Auto Pong ![GitHub Repo stars](https://img.shields.io/github/stars/cardoso/AutoPong) ![GitHub last commit](https://img.shields.io/github/last-commit/cardoso/AutoPong)](https://github.com/cardoso/AutoPong) - A tutorial to implement a pong based on a simple AI.
* [Neural Network Playground ![GitHub Repo stars](https://img.shields.io/github/stars/hetelek/Neural-Network-Playground) ![GitHub last commit](https://img.shields.io/github/last-commit/hetelek/Neural-Network-Playground)](https://github.com/hetelek/Neural-Network-Playground) - A neural network Swift playground, with no third party dependencies.
* [Window Manager Playground ![GitHub Repo stars](https://img.shields.io/github/stars/steventroughtonsmith/windowmanager-playgroundbook) ![GitHub last commit](https://img.shields.io/github/last-commit/steventroughtonsmith/windowmanager-playgroundbook)](https://github.com/steventroughtonsmith/windowmanager-playgroundbook) - Playground for an experimental window manager.
* [AudioKit Playground Book ![GitHub Repo stars](https://img.shields.io/github/stars/audiokit/Playgrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/audiokit/Playgrounds)](https://github.com/audiokit/Playgrounds) - A set of playgrounds using AudioKit designed for the iPad Playgrounds app.
* [Numsw ![GitHub Repo stars](https://img.shields.io/github/stars/sonsongithub/numsw) ![GitHub last commit](https://img.shields.io/github/last-commit/sonsongithub/numsw)](https://github.com/sonsongithub/numsw) - A swift playground book that mimics some of the features of numpy and jupyter notebook.
* [File Browser Playground ![GitHub Repo stars](https://img.shields.io/github/stars/steventroughtonsmith/files-playgroundbook) ![GitHub last commit](https://img.shields.io/github/last-commit/steventroughtonsmith/files-playgroundbook)](https://github.com/steventroughtonsmith/files-playgroundbook) - Simple File Browser for Swift Playgrounds on iOS.
* [Geometry with Swift ![GitHub Repo stars](https://img.shields.io/github/stars/dbbudd/Geometry-Swift-PlaygroundBook) ![GitHub last commit](https://img.shields.io/github/last-commit/dbbudd/Geometry-Swift-PlaygroundBook)](https://github.com/dbbudd/Geometry-Swift-PlaygroundBook) - In this course your students will learn the fundamentals of Swift 3 programming, using geometry as their context for learning. 
* [Image Filtering ![GitHub Repo stars](https://img.shields.io/github/stars/lennet/image-filtering) ![GitHub last commit](https://img.shields.io/github/last-commit/lennet/image-filtering)](https://github.com/lennet/image-filtering) - A Swift playgroundbook about Image Filtering. 🍁🌟
* [Spacetime Rhapsody ![GitHub Repo stars](https://img.shields.io/github/stars/hollisliu/Spacetime-Rhapsody) ![GitHub last commit](https://img.shields.io/github/last-commit/hollisliu/Spacetime-Rhapsody)](https://github.com/hollisliu/Spacetime-Rhapsody) - A Swift Playground visualizing gravity based on Einstein's Theory of General Relativity. 🌟
* [Neural Network ![GitHub Repo stars](https://img.shields.io/github/stars/lennet/neuralnetwork) ![GitHub last commit](https://img.shields.io/github/last-commit/lennet/neuralnetwork)](https://github.com/lennet/neuralnetwork) - A Swift PlaygroundBook about Neural Networks. 🍁
* [coreml-playground ![GitHub Repo stars](https://img.shields.io/github/stars/kkk669/coreml-playground) ![GitHub last commit](https://img.shields.io/github/last-commit/kkk669/coreml-playground)](https://github.com/kkk669/coreml-playground) - Core ML examples for Swift Playgrounds. 🍁
* [SF Symbols Viewer ![GitHub Repo stars](https://img.shields.io/github/stars/kkk669/SF-Symbols-Viewer) ![GitHub last commit](https://img.shields.io/github/last-commit/kkk669/SF-Symbols-Viewer)](https://github.com/kkk669/SF-Symbols-Viewer) - An SF Symbols Viewer for Swift Playgrounds. 🍁
* [jscore-playground ![GitHub Repo stars](https://img.shields.io/github/stars/kkk669/jscore-playground) ![GitHub last commit](https://img.shields.io/github/last-commit/kkk669/jscore-playground)](https://github.com/kkk669/jscore-playground) - A JavaScript REPL using JavaScriptCore. 🍁


## Learning Swift
*Some interesting playgrounds to learn Swift*

* [What's new in Swift 4 ![GitHub Repo stars](https://img.shields.io/github/stars/ole/whats-new-in-swift-4) ![GitHub last commit](https://img.shields.io/github/last-commit/ole/whats-new-in-swift-4)](https://github.com/ole/whats-new-in-swift-4) - An Xcode playground showing off the new features in Swift 4.0. 🍁 🌟 
* [What's new in Swift 4.2 ![GitHub Repo stars](https://img.shields.io/github/stars/ole/whats-new-in-swift-4-2) ![GitHub last commit](https://img.shields.io/github/last-commit/ole/whats-new-in-swift-4-2)](https://github.com/ole/whats-new-in-swift-4-2) - An Xcode playground showing off the new features in Swift 4.2. 🍁 🌟 
* [Codable Playground ![GitHub Repo stars](https://img.shields.io/github/stars/filip-zielinski/CodablePlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/filip-zielinski/CodablePlayground)](https://github.com/filip-zielinski/CodablePlayground) - Playground that demonstrates advanced uses of Codable. 🍁
* [Generics In Swift ![GitHub Repo stars](https://img.shields.io/github/stars/LukeSkywalker55/Generics-In-Swift) ![GitHub last commit](https://img.shields.io/github/last-commit/LukeSkywalker55/Generics-In-Swift)](https://github.com/LukeSkywalker55/Generics-In-Swift) - Playground that explains generics. 🍁
* [Swift String Cheat Sheet ![GitHub Repo stars](https://img.shields.io/github/stars/kharrison/Playground-Strings) ![GitHub last commit](https://img.shields.io/github/last-commit/kharrison/Playground-Strings)](https://github.com/kharrison/Playground-Strings) - A quick guide to using Strings with Swift. 🍁
* [About Swift ![GitHub Repo stars](https://img.shields.io/github/stars/NicolaLancellotti-About/About-Swift) ![GitHub last commit](https://img.shields.io/github/last-commit/NicolaLancellotti-About/About-Swift)](https://github.com/NicolaLancellotti-About/About-Swift) - A playground about Swift language.  🍁
* [The Swift Programming Language Playgrounds ![GitHub Repo stars](https://img.shields.io/github/stars/danielpi/Swift-Playgrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/danielpi/Swift-Playgrounds)](https://github.com/danielpi/Swift-Playgrounds) - 40+ playgrounds, one for each chapter of Apple's Swift book. 🌟
* [Swift Hack Pack ![GitHub Repo stars](https://img.shields.io/github/stars/GuildSA/swift-hack-pack) ![GitHub last commit](https://img.shields.io/github/last-commit/GuildSA/swift-hack-pack)](https://github.com/GuildSA/swift-hack-pack) - Collection of playgrounds that teaches Swift.
* [The Swift Summary Book ![GitHub Repo stars](https://img.shields.io/github/stars/jakarmy/swift-summary) ![GitHub last commit](https://img.shields.io/github/last-commit/jakarmy/swift-summary)](https://github.com/jakarmy/swift-summary) - A summary of Apple's Swift language. 🌟
* [Swifter Tips ![GitHub Repo stars](https://img.shields.io/github/stars/swifter-tips/Playground) ![GitHub last commit](https://img.shields.io/github/last-commit/swifter-tips/Playground)](https://github.com/swifter-tips/Playground) - Examples for every feature of the Swift language.
* [MPCS51032 UChicago iOS Course ![GitHub Repo stars](https://img.shields.io/github/stars/uchicago-mobi/mcps51032-2017-spring-playground) ![GitHub last commit](https://img.shields.io/github/last-commit/uchicago-mobi/mcps51032-2017-spring-playground)](https://github.com/uchicago-mobi/mcps51032-2017-spring-playground) - Playgrounds from the 2017 Spring iOS course of the University of Chicago.


## Learning Swift: Advanced Topics
*Advanced topics, useful once you have mastered the basics of the language*

* [A Swift Introduction to Core Data ![GitHub Repo stars](https://img.shields.io/github/stars/andyshep/CoreDataPlaygrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/andyshep/CoreDataPlaygrounds)](https://github.com/andyshep/CoreDataPlaygrounds) - Learn Core Data experimenting directly in this playground. 🌟
* [TDDSwiftPlayground ![GitHub Repo stars](https://img.shields.io/github/stars/sshrpe/TDDSwiftPlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/sshrpe/TDDSwiftPlayground)](https://github.com/sshrpe/TDDSwiftPlayground) - Demonstration of using Swift Playgrounds in Test Driven Development with XCTest.
* [Concurrency on iOS ![GitHub Repo stars](https://img.shields.io/github/stars/sammyd/2017AtSwift_Concurrency) ![GitHub last commit](https://img.shields.io/github/last-commit/sammyd/2017AtSwift_Concurrency)](https://github.com/sammyd/2017AtSwift_Concurrency) - Concurrency and Parallelism in iOS.
* [Modern Core Data ![GitHub Repo stars](https://img.shields.io/github/stars/dfreniche/modern-core-data-playground) ![GitHub last commit](https://img.shields.io/github/last-commit/dfreniche/modern-core-data-playground)](https://github.com/dfreniche/modern-core-data-playground) - An introduction to Core Data.
* [Swift DSL Example ![GitHub Repo stars](https://img.shields.io/github/stars/cfdrake/swift-dsl-example) ![GitHub last commit](https://img.shields.io/github/last-commit/cfdrake/swift-dsl-example)](https://github.com/cfdrake/swift-dsl-example) - Implementation of a DSL in Swift.
* [Katan ![GitHub Repo stars](https://img.shields.io/github/stars/marciok/katan) ![GitHub last commit](https://img.shields.io/github/last-commit/marciok/katan)](https://github.com/marciok/katan) - A micro web server that replies "Hello world!" to every request, an example of how to use sockets in Swift.
* [Swift Regular Expressions ![GitHub Repo stars](https://img.shields.io/github/stars/ogulcan/SwiftRegEx) ![GitHub last commit](https://img.shields.io/github/last-commit/ogulcan/SwiftRegEx)](https://github.com/ogulcan/SwiftRegEx) - A playground to learn regular expressions with Swift.
* [Network Stack ![GitHub Repo stars](https://img.shields.io/github/stars/AndrejKolar/NetworkStack) ![GitHub last commit](https://img.shields.io/github/last-commit/AndrejKolar/NetworkStack)](https://github.com/AndrejKolar/NetworkStack) - Clean & simple Swift networking stack playground.
* [Swiftly Typed Resources ![GitHub Repo stars](https://img.shields.io/github/stars/jstart/Swiftly-Typed-Resources) ![GitHub last commit](https://img.shields.io/github/last-commit/jstart/Swiftly-Typed-Resources)](https://github.com/jstart/Swiftly-Typed-Resources) - A playground showing how Swift makes Strings, Colors, Fonts, Images, etc easier to deal with. ⏳
* [Swift KVO Closures ![GitHub Repo stars](https://img.shields.io/github/stars/rectalogic/KVOPlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/rectalogic/KVOPlayground)](https://github.com/rectalogic/KVOPlayground) - Swift KVO playground. ⏳ 
* [Swift Date Tutorial ![GitHub Repo stars](https://img.shields.io/github/stars/liuyubobobo/Swift-NSDate-Tutorial) ![GitHub last commit](https://img.shields.io/github/last-commit/liuyubobobo/Swift-NSDate-Tutorial)](https://github.com/liuyubobobo/Swift-NSDate-Tutorial) - Learn everythig about NSDate. ⏳ 
* [Swift And C ![GitHub Repo stars](https://img.shields.io/github/stars/MacMark/SwiftAndC) ![GitHub last commit](https://img.shields.io/github/last-commit/MacMark/SwiftAndC)](https://github.com/MacMark/SwiftAndC) - Examples about using C with Swift. ⏳ 
* [Swift Memory Management ![GitHub Repo stars](https://img.shields.io/github/stars/ndethore/swift-memory-management) ![GitHub last commit](https://img.shields.io/github/last-commit/ndethore/swift-memory-management)](https://github.com/ndethore/swift-memory-management) - How to avoid retain cycles, from [this post](http://detho.re/2016/01/21/writing-memory-efficient-swift-code/). ⏳

### Design Patterns

* [The Principles of OOD in Swift 4 ![GitHub Repo stars](https://img.shields.io/github/stars/ochococo/OOD-Principles-In-Swift) ![GitHub last commit](https://img.shields.io/github/last-commit/ochococo/OOD-Principles-In-Swift)](https://github.com/ochococo/OOD-Principles-In-Swift) - The Principles of OOD based on Uncle Bob articles.🍁
* [Design Patterns Playground ![GitHub Repo stars](https://img.shields.io/github/stars/edopelawi/DesignPatternsPlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/edopelawi/DesignPatternsPlayground)](https://github.com/edopelawi/DesignPatternsPlayground) - Learning GoF's Design Patterns in Swift 3.
* [iOS Design Patterns ![GitHub Repo stars](https://img.shields.io/github/stars/haxpor/ios-design-patterns) ![GitHub last commit](https://img.shields.io/github/last-commit/haxpor/ios-design-patterns)](https://github.com/haxpor/ios-design-patterns) - Sample projects for MVC, MVP, MVVM, and VIPER.
* [Design Patterns in Swift ![GitHub Repo stars](https://img.shields.io/github/stars/ochococo/Design-Patterns-In-Swift) ![GitHub last commit](https://img.shields.io/github/last-commit/ochococo/Design-Patterns-In-Swift)](https://github.com/ochococo/Design-Patterns-In-Swift) - Design patterns in Swift 3.
* [GOF Swift ![GitHub Repo stars](https://img.shields.io/github/stars/SebastianBoldt/Gang-of-Four-and-Solid-Principles-in-Swift) ![GitHub last commit](https://img.shields.io/github/last-commit/SebastianBoldt/Gang-of-Four-and-Solid-Principles-in-Swift)](https://github.com/SebastianBoldt/Gang-of-Four-and-Solid-Principles-in-Swift) - Learn all 23 Gang of Four patterns using Swift.

### Protocol Oriented Programming

* [Swift Diagram Playgrounds ![GitHub Repo stars](https://img.shields.io/github/stars/alskipp/Swift-Diagram-Playgrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/alskipp/Swift-Diagram-Playgrounds)](https://github.com/alskipp/Swift-Diagram-Playgrounds) - Adaptation of the Protocol-Oriented Programming in Swift talk from WWDC 2015.
* [Swift Protocol Extensions ![GitHub Repo stars](https://img.shields.io/github/stars/davidahouse/SwiftProtocolExtensions) ![GitHub last commit](https://img.shields.io/github/last-commit/davidahouse/SwiftProtocolExtensions)](https://github.com/davidahouse/SwiftProtocolExtensions) - A playground to explore Protocol Extensions. ⏳ 
* [Battleship Example ![GitHub Repo stars](https://img.shields.io/github/stars/vichudson1/Battleship-POP-Example) ![GitHub last commit](https://img.shields.io/github/last-commit/vichudson1/Battleship-POP-Example)](https://github.com/vichudson1/Battleship-POP-Example) - An example of how to use Protocol Oriented Programming with the battleship game. ⏳ 

### Functional Reactive Programming

* [ReactiveCocoa Playground ![GitHub Repo stars](https://img.shields.io/github/stars/nikita-leonov/ReactiveCocoaPlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/nikita-leonov/ReactiveCocoaPlayground)](https://github.com/nikita-leonov/ReactiveCocoaPlayground) - The easiest way to get a taste of ReactiveCocoa. ⏳ 
* [Swift Reactive Playground ![GitHub Repo stars](https://img.shields.io/github/stars/ColinEberhardt/SwiftReactivePlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/ColinEberhardt/SwiftReactivePlayground)](https://github.com/ColinEberhardt/SwiftReactivePlayground) - Companion to the article: ReactiveCocoa made Simple With Swift. ⏳ 


## Apple's Playgrounds
*Playgrounds from Apple, usually presented at some WWDC*

* [Apple's Mandelbrot Playground ![GitHub Repo stars](https://img.shields.io/github/stars/palmerc/Mandelbrot-Swift-Playground) ![GitHub last commit](https://img.shields.io/github/last-commit/palmerc/Mandelbrot-Swift-Playground)](https://github.com/palmerc/Mandelbrot-Swift-Playground) - A playground with the mandelbrot fractal (updated to Swift 3 by @palmerc, @kemalenver).
* [Interactive Newton's Cradle ![GitHub Repo stars](https://img.shields.io/github/stars/p-sun/iOS-Effects-and-Animations) ![GitHub last commit](https://img.shields.io/github/last-commit/p-sun/iOS-Effects-and-Animations)](https://github.com/p-sun/iOS-Effects-and-Animations/tree/master/Newton'sCradle) - Apple's interactive playground of a Newton's Cradle where collisions and gravity are applyed with UIKit dynamics. 🌟 (updated to Swift 3 by @p-sun) 
* [Apple's Balloons Playground](https://developer.apple.com/swift/blog/downloads/Balloons.zip) - The balloons playground showed at WWDC14. ⏳ 
* [Apple's Crustacean Playground](https://developer.apple.com/sample-code/wwdc/2015/downloads/Crustacean.zip) - Protocol-Oriented Programming with Value Types. ⏳ 
* [Apple's Swift Standard Library Playground](https://developer.apple.com/sample-code/swift/downloads/Standard-Library.zip) - experiment with Swift standard library types and high-level concepts using visualizations and practical examples. ⏳ 

## WWDC Students Submissions
*Playgrounds submitted by students for the WWDC scholarship*

- [2021 ![GitHub Repo stars](https://img.shields.io/github/stars/wwdc/2021) ![GitHub last commit](https://img.shields.io/github/last-commit/wwdc/2021)](https://github.com/wwdc/2021)
- [2020 ![GitHub Repo stars](https://img.shields.io/github/stars/wwdc/2020) ![GitHub last commit](https://img.shields.io/github/last-commit/wwdc/2020)](https://github.com/wwdc/2020)
- [2019 ![GitHub Repo stars](https://img.shields.io/github/stars/wwdc/2019) ![GitHub last commit](https://img.shields.io/github/last-commit/wwdc/2019)](https://github.com/wwdc/2019)
- [2018 ![GitHub Repo stars](https://img.shields.io/github/stars/wwdc/2018) ![GitHub last commit](https://img.shields.io/github/last-commit/wwdc/2018)](https://github.com/wwdc/2018)
- [2017 ![GitHub Repo stars](https://img.shields.io/github/stars/wwdc/2017) ![GitHub last commit](https://img.shields.io/github/last-commit/wwdc/2017)](https://github.com/wwdc/2017)
- [2016 ![GitHub Repo stars](https://img.shields.io/github/stars/wwdc/2016) ![GitHub last commit](https://img.shields.io/github/last-commit/wwdc/2016)](https://github.com/wwdc/2016)
- [2015 ![GitHub Repo stars](https://img.shields.io/github/stars/wwdc/2015) ![GitHub last commit](https://img.shields.io/github/last-commit/wwdc/2015)](https://github.com/wwdc/2015)
- [2014 ![GitHub Repo stars](https://img.shields.io/github/stars/wwdc/2014) ![GitHub last commit](https://img.shields.io/github/last-commit/wwdc/2014)](https://github.com/wwdc/2014)

## Playgrounds about Playgrounds
*Playgrounds that describe what you can do with playgrounds*

* [XCTest Playground ![GitHub Repo stars](https://img.shields.io/github/stars/Liquidsoul/XCTestPlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/Liquidsoul/XCTestPlayground)](https://github.com/Liquidsoul/XCTestPlayground) - Better looking tests for playgrounds.
* [Interactive Playground ![GitHub Repo stars](https://img.shields.io/github/stars/dasdom/InteractivePlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/dasdom/InteractivePlayground)](https://github.com/dasdom/InteractivePlayground) - Exploring interactivity in Playgrounds.
* [Mondrian ![GitHub Repo stars](https://img.shields.io/github/stars/timbellay/Mondrian) ![GitHub last commit](https://img.shields.io/github/last-commit/timbellay/Mondrian)](https://github.com/timbellay/Mondrian) - Make iOS app mockups in Swift 2.x playgrounds. ⏳ 

## Playgrounds from Playgroundbooks
*Playgrounds derived from iPad Swift Playgroundbooks*

* [iPad Swift Playgrounds ![GitHub Repo stars](https://img.shields.io/github/stars/kushtaneja/iPad_Swift_Playgrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/kushtaneja/iPad_Swift_Playgrounds)](https://github.com/kushtaneja/iPad_Swift_Playgrounds) - The sample playgroundbooks converted to playgrounds.

## Theoretical Computer Science

* [Functional Debug View ![GitHub Repo stars](https://img.shields.io/github/stars/tomquist/DebugView) ![GitHub last commit](https://img.shields.io/github/last-commit/tomquist/DebugView)](https://github.com/tomquist/DebugView) - Playground to visualize functional programming with graphical sequences. 🍁 🌟
* [OOP with Functions in Swift ![GitHub Repo stars](https://img.shields.io/github/stars/iamleeg/OOPInFPInSwift) ![GitHub last commit](https://img.shields.io/github/last-commit/iamleeg/OOPInFPInSwift)](https://github.com/iamleeg/OOPInFPInSwift) - Object-Oriented Programming in Functional Programming in Swift. 🍁
* [Logician ![GitHub Repo stars](https://img.shields.io/github/stars/mdiep/Logician) ![GitHub last commit](https://img.shields.io/github/last-commit/mdiep/Logician)](https://github.com/mdiep/Logician) - Logic programming in Swift. 🌟
* [Function Composition in Swift ![GitHub Repo stars](https://img.shields.io/github/stars/ijoshsmith/function-composition-in-swift) ![GitHub last commit](https://img.shields.io/github/last-commit/ijoshsmith/function-composition-in-swift)](https://github.com/ijoshsmith/function-composition-in-swift) - Exploration of function composition in Swift. 🌟
* [Swift Adventures in Monad Land ![GitHub Repo stars](https://img.shields.io/github/stars/alskipp/Swift-Adventures-In-Monad-Land) ![GitHub last commit](https://img.shields.io/github/last-commit/alskipp/Swift-Adventures-In-Monad-Land)](https://github.com/alskipp/Swift-Adventures-In-Monad-Land) - Learn about monads.
* [Functional Design Patterns ![GitHub Repo stars](https://img.shields.io/github/stars/cmvicentehe/FunctionalProgrammingDesignPatterns) ![GitHub last commit](https://img.shields.io/github/last-commit/cmvicentehe/FunctionalProgrammingDesignPatterns)](https://github.com/cmvicentehe/FunctionalProgrammingDesignPatterns) - A few functional programming concept and patterns.
* [Learn about transducers ![GitHub Repo stars](https://img.shields.io/github/stars/mbrandonw/learn-transducers-playground) ![GitHub last commit](https://img.shields.io/github/last-commit/mbrandonw/learn-transducers-playground)](https://github.com/mbrandonw/learn-transducers-playground) - A little tutorial that explains transducers. ⏳ 
* [Swift Functors, Applicatives, and Monads in Pictures ![GitHub Repo stars](https://img.shields.io/github/stars/mokacoding/Swift-Functors-Applicative-Monads-In-Pictures-Playground) ![GitHub last commit](https://img.shields.io/github/last-commit/mokacoding/Swift-Functors-Applicative-Monads-In-Pictures-Playground)](https://github.com/mokacoding/Swift-Functors-Applicative-Monads-In-Pictures-Playground) - Companion to the article: Swift Functors, Applicatves, and Monads in Pictures. ⏳ 
* [Functors in Swift ![GitHub Repo stars](https://img.shields.io/github/stars/mokagio/Swift-Functor-Introduction-Playground) ![GitHub last commit](https://img.shields.io/github/last-commit/mokagio/Swift-Functor-Introduction-Playground)](https://github.com/mokagio/Swift-Functor-Introduction-Playground) - A playground to introduce Functors in Swift, and their practical usage. ⏳ 

### Algorithms and Data Structures
*Algorithms and data structures implemented in Swift*

* [Animated Sorting Algorithms ![GitHub Repo stars](https://img.shields.io/github/stars/p-sun/Animated-Sorting-Algorithms) ![GitHub last commit](https://img.shields.io/github/last-commit/p-sun/Animated-Sorting-Algorithms)](https://github.com/p-sun/Animated-Sorting-Algorithms) - Swift 4 playgrounds to view and manipulate sorting algorithms.🍁
* [Expressions ![GitHub Repo stars](https://img.shields.io/github/stars/mpangburn/Expressions) ![GitHub last commit](https://img.shields.io/github/last-commit/mpangburn/Expressions)](https://github.com/mpangburn/Expressions) - Arithmetic and logical expressions elegantly modeled and visualized using protocol-oriented binary trees.🍁
* [Swift Algorithm Club ![GitHub Repo stars](https://img.shields.io/github/stars/raywenderlich/swift-algorithm-club) ![GitHub last commit](https://img.shields.io/github/last-commit/raywenderlich/swift-algorithm-club)](https://github.com/raywenderlich/swift-algorithm-club) - Algorithms and data structures in Swift with explanations. 🌟
* [Sorting Experiments ![GitHub Repo stars](https://img.shields.io/github/stars/adrfer/Sort) ![GitHub last commit](https://img.shields.io/github/last-commit/adrfer/Sort)](https://github.com/adrfer/Sort) - Alluring experiments with sorting algorithms in Swift, sort of.
* [Visual Binary Trees ![GitHub Repo stars](https://img.shields.io/github/stars/akpw/VisualBinaryTrees) ![GitHub last commit](https://img.shields.io/github/last-commit/akpw/VisualBinaryTrees)](https://github.com/akpw/VisualBinaryTrees) - Effortless visualization of arbitrary Binary Trees, along with their pluggable traversal implementations. 🌟
* [Julia Fractal Playground ![GitHub Repo stars](https://img.shields.io/github/stars/gongzhang/julia-set-playground) ![GitHub last commit](https://img.shields.io/github/last-commit/gongzhang/julia-set-playground)](https://github.com/gongzhang/julia-set-playground#julia-set-playground) - A Swift playground that generates beautiful Julia set fractal images. 
* [A Star ![GitHub Repo stars](https://img.shields.io/github/stars/Dev1an/A-Star) ![GitHub last commit](https://img.shields.io/github/last-commit/Dev1an/A-Star)](https://github.com/Dev1an/A-Star) - Protocol oriented A* pathfinding algorithm implementation in Swift 4.🍁
* [Sorting Algorithms ![GitHub Repo stars](https://img.shields.io/github/stars/bwide/Sorting-Algorithms-Playground) ![GitHub last commit](https://img.shields.io/github/last-commit/bwide/Sorting-Algorithms-Playground)](https://github.com/bwide/Sorting-Algorithms-Playground) - Live Visualization of some famous sorting algorithms and your experiments.
* [DataStructures Playground ![GitHub Repo stars](https://img.shields.io/github/stars/oliverfoggin/DataStructuresPlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/oliverfoggin/DataStructuresPlayground)](https://github.com/oliverfoggin/DataStructuresPlayground) - Data Structures and Algorithms in Swift. ⏳
* [Swiftography ![GitHub Repo stars](https://img.shields.io/github/stars/sketchytech/Swiftography) ![GitHub last commit](https://img.shields.io/github/last-commit/sketchytech/Swiftography)](https://github.com/sketchytech/Swiftography) - Standard cryptographic algorithms in a Swift Playground. ⏳
* [Algorithms Playground ![GitHub Repo stars](https://img.shields.io/github/stars/ashokgelal/AlgorithmsPlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/ashokgelal/AlgorithmsPlayground)](https://github.com/ashokgelal/AlgorithmsPlayground) - Various algorithm implementation in Swift. ⏳
* [The Jelly Bean Problem ![GitHub Repo stars](https://img.shields.io/github/stars/kyleweiner/Jelly-Bean-Problem) ![GitHub last commit](https://img.shields.io/github/last-commit/kyleweiner/Jelly-Bean-Problem)](https://github.com/kyleweiner/Jelly-Bean-Problem) - The Jelly Bean problem from Wait But Why. ⏳
* [Euclidean Strings ![GitHub Repo stars](https://img.shields.io/github/stars/modulusMathews/ReEuclid) ![GitHub last commit](https://img.shields.io/github/last-commit/modulusMathews/ReEuclid)](https://github.com/modulusMathews/ReEuclid) - A playground leveraging ReSwift to generate Euclidean Strings. ⏳

### Languages
*Programming language interpreters implemented in Swift*

* [Introduction to Compilers ![GitHub Repo stars](https://img.shields.io/github/stars/ahoppen/introduction-to-compilers) ![GitHub last commit](https://img.shields.io/github/last-commit/ahoppen/introduction-to-compilers)](https://github.com/ahoppen/introduction-to-compilers) - Great introduction to the inner workings of compilers. 🍁🌟
* [Pascal Interpreter ![GitHub Repo stars](https://img.shields.io/github/stars/igorkulman/SwiftPascalInterpreter) ![GitHub last commit](https://img.shields.io/github/last-commit/igorkulman/SwiftPascalInterpreter)](https://github.com/igorkulman/SwiftPascalInterpreter) - Simple Swift interpreter for the Pascal language inspired by the Let’s Build A Simple Interpreter article series. 🍁
* [Write your own language: Mu ![GitHub Repo stars](https://img.shields.io/github/stars/marciok/Mu) ![GitHub last commit](https://img.shields.io/github/last-commit/marciok/Mu)](https://github.com/marciok/Mu) - A playground explaining how to create a tiny programming language named Mu. 🌟
* [ASM Swift ![GitHub Repo stars](https://img.shields.io/github/stars/NSExceptional/ASM-Swift) ![GitHub last commit](https://img.shields.io/github/last-commit/NSExceptional/ASM-Swift)](https://github.com/NSExceptional/ASM-Swift) - A playground for learning Assembly language through Swift. 🌟
* [Let's build a compiler in Swift ![GitHub Repo stars](https://img.shields.io/github/stars/mkchoi212/LBAC-Swift) ![GitHub last commit](https://img.shields.io/github/last-commit/mkchoi212/LBAC-Swift)](https://github.com/mkchoi212/LBAC-Swift) - Let's Build a Compiler by Jack Crenshaw translated to Swift Playgrounds. 🌟 
* [Register VM ![GitHub Repo stars](https://img.shields.io/github/stars/brianhill/register-vm-in-swift) ![GitHub last commit](https://img.shields.io/github/last-commit/brianhill/register-vm-in-swift)](https://github.com/brianhill/register-vm-in-swift) - A register-based VM in a Swift playground. 🌟 ⏳
* [Turtle Playground ![GitHub Repo stars](https://img.shields.io/github/stars/dimsumthinking/TurtlePlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/dimsumthinking/TurtlePlayground)](https://github.com/dimsumthinking/TurtlePlayground) - A playground with Logo-like commands. 🌟 ⏳
* [Swift Brainfuck ![GitHub Repo stars](https://img.shields.io/github/stars/xavieryao/Swift-Brainfuck) ![GitHub last commit](https://img.shields.io/github/last-commit/xavieryao/Swift-Brainfuck)](https://github.com/xavieryao/Swift-Brainfuck) - Brainfuck interpreter written in Swift using Playground. ⏳

### Machine Learning

* [Emoji Intelligence ![GitHub Repo stars](https://img.shields.io/github/stars/BilalReffas/EmojiIntelligence) ![GitHub last commit](https://img.shields.io/github/last-commit/BilalReffas/EmojiIntelligence)](https://github.com/BilalReffas/EmojiIntelligence) - Neural Network built in Apple Playground using Swift. 🌟  

## UIKit And Graphics
*A list of playgrounds that demostrate various aspect of UIKit and other graphical frameworks*

* [UIStackView Playground ![GitHub Repo stars](https://img.shields.io/github/stars/dasdom/UIStackViewPlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/dasdom/UIStackViewPlayground)](https://github.com/dasdom/UIStackViewPlayground) - Interesting examples of use of UIStackViews.🌟
* [Bezier Path Playgrounds ![GitHub Repo stars](https://img.shields.io/github/stars/DigitalLeaves/BezierPathPlaygrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/DigitalLeaves/BezierPathPlaygrounds)](https://github.com/DigitalLeaves/BezierPathPlaygrounds) - Some playgrounds to better understand UIBezierPaths.
* [UIKit playground ![GitHub Repo stars](https://img.shields.io/github/stars/ralfebert/uikit-playground) ![GitHub last commit](https://img.shields.io/github/last-commit/ralfebert/uikit-playground)](https://github.com/ralfebert/uikit-playground) - Playgrounds to experiment interactively with UIKit views.
* [UIDynamic Playground ![GitHub Repo stars](https://img.shields.io/github/stars/andresbrun/UIDynamicsPlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/andresbrun/UIDynamicsPlayground)](https://github.com/andresbrun/UIDynamicsPlayground) - Multiple Playgrounds using almost every behaviour of UIDynamic.
* [WWDC16 Typography ![GitHub Repo stars](https://img.shields.io/github/stars/tototti/wwdc16_typography_playground) ![GitHub last commit](https://img.shields.io/github/last-commit/tototti/wwdc16_typography_playground)](https://github.com/tototti/wwdc16_typography_playground) 🇯🇵 - Draw a logo or any text with the WWDC16 ASCII texture.  
* [Animated GIF Playground ![GitHub Repo stars](https://img.shields.io/github/stars/danielrhammond/GIF-Playground) ![GitHub last commit](https://img.shields.io/github/last-commit/danielrhammond/GIF-Playground)](https://github.com/danielrhammond/GIF-Playground) - Swift playground for generating animated GIFs.
* [RPClarity ![GitHub Repo stars](https://img.shields.io/github/stars/RobotsAndPencils/RPClarity) ![GitHub last commit](https://img.shields.io/github/last-commit/RobotsAndPencils/RPClarity)](https://github.com/RobotsAndPencils/RPClarity) - Shows a technique for blurring an image behind the characters behind one or more UILabels. ⏳
* [Swift Clock ![GitHub Repo stars](https://img.shields.io/github/stars/nickoneill/swiftclock) ![GitHub last commit](https://img.shields.io/github/last-commit/nickoneill/swiftclock)](https://github.com/nickoneill/swiftclock) - An animated clock in a swift playground. ⏳
* [WatchKit Asset Playground ![GitHub Repo stars](https://img.shields.io/github/stars/cwimberger/WatchKitAssetPlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/cwimberger/WatchKitAssetPlayground)](https://github.com/cwimberger/WatchKitAssetPlayground) - A swift playground for creating awesome animations for your WatchKit Apps. ⏳
* [Swift 2.0 Protocol Extension Example ![GitHub Repo stars](https://img.shields.io/github/stars/jhurray/Swift2-Protocol-Extension-Example) ![GitHub last commit](https://img.shields.io/github/last-commit/jhurray/Swift2-Protocol-Extension-Example)](https://github.com/jhurray/Swift2-Protocol-Extension-Example) - Showing how to use Swift2 protocol extensions to render errors in UIViews and UIViewControllers without subclassing or creating classes. ⏳
* [Tinting ![GitHub Repo stars](https://img.shields.io/github/stars/Jesse-calkin/tinting) ![GitHub last commit](https://img.shields.io/github/last-commit/Jesse-calkin/tinting)](https://github.com/Jesse-calkin/tinting) - A small playground to demonstrate image tinting in UIKit. ⏳
* [Ray tracing Playground ![GitHub Repo stars](https://img.shields.io/github/stars/mhorga/Raytracing) ![GitHub last commit](https://img.shields.io/github/last-commit/mhorga/Raytracing)](https://github.com/mhorga/Raytracing) - A playground and a series of articles on ray tracing, see also part [2 ![GitHub Repo stars](https://img.shields.io/github/stars/mhorga/Raytracing2) ![GitHub last commit](https://img.shields.io/github/last-commit/mhorga/Raytracing2)](https://github.com/mhorga/Raytracing2), [3 ![GitHub Repo stars](https://img.shields.io/github/stars/mhorga/Raytracing3) ![GitHub last commit](https://img.shields.io/github/last-commit/mhorga/Raytracing3)](https://github.com/mhorga/Raytracing3), [4 ![GitHub Repo stars](https://img.shields.io/github/stars/mhorga/Raytracing4) ![GitHub last commit](https://img.shields.io/github/last-commit/mhorga/Raytracing4)](https://github.com/mhorga/Raytracing4), [5 ![GitHub Repo stars](https://img.shields.io/github/stars/mhorga/Raytracing5) ![GitHub last commit](https://img.shields.io/github/last-commit/mhorga/Raytracing5)](https://github.com/mhorga/Raytracing5) 🌟 ⏳
* [WWDC16 Logo Playground ![GitHub Repo stars](https://img.shields.io/github/stars/krutarth/WWDC16Logo) ![GitHub last commit](https://img.shields.io/github/last-commit/krutarth/WWDC16Logo)](https://github.com/krutarth/WWDC16Logo) - Drawing the WWDC16 logo in a playground. ⏳

### Core Image

* [Interpolation Playground ![GitHub Repo stars](https://img.shields.io/github/stars/FlexMonkey/Interpolation-Playground-) ![GitHub last commit](https://img.shields.io/github/last-commit/FlexMonkey/Interpolation-Playground-)](https://github.com/FlexMonkey/Interpolation-Playground-) - Playground demonstrating lerp, smooth step, Catcall-Rom and others! ⏳
* [CoreImage for Swift Playgrounds ![GitHub Repo stars](https://img.shields.io/github/stars/FlexMonkey/CoreImageForSwiftPlaygrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/FlexMonkey/CoreImageForSwiftPlaygrounds)](https://github.com/FlexMonkey/CoreImageForSwiftPlaygrounds) - Growing collection of CoreImage playgrounds from the upcoming book "CoreImage For Swift". 🌟 ⏳
* [Image Processor ![GitHub Repo stars](https://img.shields.io/github/stars/mortenbrudvik/ImageProcessor) ![GitHub last commit](https://img.shields.io/github/last-commit/mortenbrudvik/ImageProcessor)](https://github.com/mortenbrudvik/ImageProcessor) - Implementing different image filter algorithms. ⏳

### Metal

* [Metalbrot ![GitHub Repo stars](https://img.shields.io/github/stars/jtbandes/metalbrot-playground) ![GitHub last commit](https://img.shields.io/github/last-commit/jtbandes/metalbrot-playground)](https://github.com/jtbandes/metalbrot-playground) - Interactive playground that draws the Mandelbrot fractal with Metal. 🌟
* [METAL Playground ![GitHub Repo stars](https://img.shields.io/github/stars/haawa799/METAL_Playground) ![GitHub last commit](https://img.shields.io/github/last-commit/haawa799/METAL_Playground)](https://github.com/haawa799/METAL_Playground) - Apple Metal framework playground. 🌟 ⏳

### Animations

* [Core Animation Swift Playgrounds ![GitHub Repo stars](https://img.shields.io/github/stars/rmirabelli/CoreAnimationSwiftPlaygrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/rmirabelli/CoreAnimationSwiftPlaygrounds)](https://github.com/rmirabelli/CoreAnimationSwiftPlaygrounds) - A set of interesting Core Animation playgounds.
* [UIViewPropertyAnimator Playground ![GitHub Repo stars](https://img.shields.io/github/stars/mathewsanders/Scrubber) ![GitHub last commit](https://img.shields.io/github/last-commit/mathewsanders/Scrubber)](https://github.com/mathewsanders/Scrubber) - Playground demonstrating UIViewPropertyAnimator.
* [WWDC Crowd Simulator 2017 ![GitHub Repo stars](https://img.shields.io/github/stars/neilsardesai/WWDC-Crowd-Simulator-2017) ![GitHub last commit](https://img.shields.io/github/last-commit/neilsardesai/WWDC-Crowd-Simulator-2017)](https://github.com/neilsardesai/WWDC-Crowd-Simulator-2017) - A SpriteKit experiment to simulate the WWDC2017 logo crowd.
* [Duet-Inspired Trail Effect ![GitHub Repo stars](https://img.shields.io/github/stars/dionlarson/Duet-Trail-Effect-SpriteKit-Playground) ![GitHub last commit](https://img.shields.io/github/last-commit/dionlarson/Duet-Trail-Effect-SpriteKit-Playground)](https://github.com/dionlarson/Duet-Trail-Effect-SpriteKit-Playground) - How to get a Duet style trailing effect in SpriteKit.
* [Additive Animations ![GitHub Repo stars](https://img.shields.io/github/stars/d-ronnqvist/Additive-Animations-Playground) ![GitHub last commit](https://img.shields.io/github/last-commit/d-ronnqvist/Additive-Animations-Playground)](https://github.com/d-ronnqvist/Additive-Animations-Playground) - Experiment with multiple additive animations in Core Animation. ⏳
* [Core Animation Playground ![GitHub Repo stars](https://img.shields.io/github/stars/knightsc/CoreAnimationPlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/knightsc/CoreAnimationPlayground)](https://github.com/knightsc/CoreAnimationPlayground) - Companion to Apple's Core Animation Programming Guide. ⏳
* [Core Animation Timing ![GitHub Repo stars](https://img.shields.io/github/stars/Kentzo/CoreAnimationTiming) ![GitHub last commit](https://img.shields.io/github/last-commit/Kentzo/CoreAnimationTiming)](https://github.com/Kentzo/CoreAnimationTiming) - Playground demonstrating effects of CAMediaTiming properties. 🍁

### SpriteKit

* [SceneKit ARKit Demo ![GitHub Repo stars](https://img.shields.io/github/stars/mhanlon/ARKitDemoPlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/mhanlon/ARKitDemoPlayground)](https://github.com/mhanlon/ARKitDemoPlayground) - The Xcode 9 ARKit SpriteKit demo as a playground.🍁
* [SpriteKit Swift 3 ![GitHub Repo stars](https://img.shields.io/github/stars/MacMeDan/SpriteKitCollisions) ![GitHub last commit](https://img.shields.io/github/last-commit/MacMeDan/SpriteKitCollisions)](https://github.com/MacMeDan/SpriteKitCollisions) - Playground for exploring Sprite Kit.
* [SpriteKit Collisions ![GitHub Repo stars](https://img.shields.io/github/stars/jaredmpayne/SpriteKitCollisionsPlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/jaredmpayne/SpriteKitCollisionsPlayground)](https://github.com/jaredmpayne/SpriteKitCollisionsPlayground) - Demonstrates how to perform physics collision detection using Swift and SpriteKit. ⏳
* [SceneKit Examples ![GitHub Repo stars](https://img.shields.io/github/stars/UCh/swift-scene-kit-playgrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/UCh/swift-scene-kit-playgrounds)](https://github.com/UCh/swift-scene-kit-playgrounds) - Experiment with SceneKit and Swift. ⏳
* [Astronomy ![GitHub Repo stars](https://img.shields.io/github/stars/cl7/Astronomy) ![GitHub last commit](https://img.shields.io/github/last-commit/cl7/Astronomy)](https://github.com/cl7/Astronomy) - A 3D earth model written in swift playground using SceneKit.


## Audio
*Sounds and music*

* [Bach Playground ![GitHub Repo stars](https://img.shields.io/github/stars/dreamwieber/BachPlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/dreamwieber/BachPlayground)](https://github.com/dreamwieber/BachPlayground) - A Simple Swift Playground that plays a brief piece by Bach with AVAudioEngine and AVMIDIPlayer.
* [PlayerNode Playground ![GitHub Repo stars](https://img.shields.io/github/stars/genedelisa/PlayerNodePlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/genedelisa/PlayerNodePlayground)](https://github.com/genedelisa/PlayerNodePlayground) - Playground using AVAudioEngine with a playernode and effects to play an audio file. 🌟
* [Miles ![GitHub Repo stars](https://img.shields.io/github/stars/lalomts/Miles) ![GitHub last commit](https://img.shields.io/github/last-commit/lalomts/Miles)](https://github.com/lalomts/Miles) - A Swift Playground that creates jazz improvisations in any key using AudioToolbox and AVFoundation. 

## Mathematics
*Live math with playgrounds*

* [Guilloche Pattern Playground Book ![GitHub Repo stars](https://img.shields.io/github/stars/TheWildHorse/GuillochePlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/TheWildHorse/GuillochePlayground)](https://github.com/TheWildHorse/GuillochePlayground) - Learn more about this pattern you see every day, but probably never knew it was really carefully designed. 🍁
* [Lindenmayer Systems ![GitHub Repo stars](https://img.shields.io/github/stars/henrinormak/lindenmayer) ![GitHub last commit](https://img.shields.io/github/last-commit/henrinormak/lindenmayer)](https://github.com/henrinormak/lindenmayer) - A Swift playground exploring Lindemayer systems.
* [Swift Natural Numbers ![GitHub Repo stars](https://img.shields.io/github/stars/jakebromberg/Swift-Natural-Numbers) ![GitHub last commit](https://img.shields.io/github/last-commit/jakebromberg/Swift-Natural-Numbers)](https://github.com/jakebromberg/Swift-Natural-Numbers) - A playground for implementing the natural numbers and more concepts in number theory.
* [Polydoxical ![GitHub Repo stars](https://img.shields.io/github/stars/kirkbyo/Polydoxical) ![GitHub last commit](https://img.shields.io/github/last-commit/kirkbyo/Polydoxical)](https://github.com/kirkbyo/Polydoxical) - Interactive playground to experiment with roulettes and polygons.
* [Abstract Algebra ![GitHub Repo stars](https://img.shields.io/github/stars/taketo1024/SwiftyMath) ![GitHub last commit](https://img.shields.io/github/last-commit/taketo1024/SwiftyMath)](https://github.com/taketo1024/SwiftyMath) - Abstract algebra concepts implemented in Swift.
* [Swift Accelerate ![GitHub Repo stars](https://img.shields.io/github/stars/haginile/SwiftAccelerate) ![GitHub last commit](https://img.shields.io/github/last-commit/haginile/SwiftAccelerate)](https://github.com/haginile/SwiftAccelerate) - Using the Accelerate framework and Swift for Linear Algebra. ⏳
* [Swifty Mathematics ![GitHub Repo stars](https://img.shields.io/github/stars/DylanModesitt/swiftyMathematics) ![GitHub last commit](https://img.shields.io/github/last-commit/DylanModesitt/swiftyMathematics)](https://github.com/DylanModesitt/swiftyMathematics) - A collection of swift playground about mathematics. ⏳
* [Numerical Algorithms](https://www.raywenderlich.com/99559/numeric-algorithms-using-playgrounds) - Numerical argorithms playground from Ray Wenderlich. ⏳

## Libraries and APIs
*Library tutorials, in a playground*

* [AudioKit Playgrounds](https://audiokit.io/playgrounds/) - 130+ Audio synthesis, processing, playback, and analysis playgrounds with AudioKit.
* [AIToolbox ![GitHub Repo stars](https://img.shields.io/github/stars/KevinCoble/AIToolbox) ![GitHub last commit](https://img.shields.io/github/last-commit/KevinCoble/AIToolbox)](https://github.com/KevinCoble/AIToolbox/tree/master/Playgrounds) - A set of playgrounds showing machine learning algorithms, all implemented with pieces of the AIToolbox framework code.
* [Cognitive Service APIs ![GitHub Repo stars](https://img.shields.io/github/stars/codePrincess/playgrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/codePrincess/playgrounds)](https://github.com/codePrincess/playgrounds) - Get started with the Microsoft Cognitive Services APIs.
* [Rx Playground ![GitHub Repo stars](https://img.shields.io/github/stars/sgr-ksmt/RxPlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/sgr-ksmt/RxPlayground)](https://github.com/sgr-ksmt/RxPlayground) - A playground with RxSwift examples.

## Playground Sets
*Sets of playgrounds about various topics*

* [Parks And Recreation ![GitHub Repo stars](https://img.shields.io/github/stars/zwaldowski/ParksAndRecreation) ![GitHub last commit](https://img.shields.io/github/last-commit/zwaldowski/ParksAndRecreation)](https://github.com/zwaldowski/ParksAndRecreation) - Great collection of interesting playgrounds, for fun and for profit. 🍁🌟
* [URaimo's Playgrounds ![GitHub Repo stars](https://img.shields.io/github/stars/uraimo/Swift-Playgrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/uraimo/Swift-Playgrounds)](https://github.com/uraimo/Swift-Playgrounds) - My playgrounds, various topics. 🍁
* [Public Extensions ![GitHub Repo stars](https://img.shields.io/github/stars/Jasdev/Public-Extension) ![GitHub last commit](https://img.shields.io/github/last-commit/Jasdev/Public-Extension)](https://github.com/Jasdev/Public-Extension) - A set of useful extensions from [@PublicExtension](https://twitter.com/publicextension). 🌟
* [ManuelCarlos's Playgrouds ![GitHub Repo stars](https://img.shields.io/github/stars/manuelCarlos/Swift-Playgrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/manuelCarlos/Swift-Playgrounds)](https://github.com/manuelCarlos/Swift-Playgrounds) - Various playgrounds.
* [Mgrebenets's Playgrounds ![GitHub Repo stars](https://img.shields.io/github/stars/mgrebenets/playgrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/mgrebenets/playgrounds)](https://github.com/mgrebenets/playgrounds) - Various playgrounds.c 🌟
* [Cocoa With Love Playgrounds ![GitHub Repo stars](https://img.shields.io/github/stars/mattgallagher/CocoaWithLovePlaygrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/mattgallagher/CocoaWithLovePlaygrounds)](https://github.com/mattgallagher/CocoaWithLovePlaygrounds) - Playground versions of select articles from Cocoa with Love.  🌟 
* [Sketchytech's Playgrounds ![GitHub Repo stars](https://img.shields.io/github/stars/sketchytech/SwiftPlaygrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/sketchytech/SwiftPlaygrounds)](https://github.com/sketchytech/SwiftPlaygrounds) - Various Playgrounds. 🌟 ⏳
* [Swift fun playgrounds ![GitHub Repo stars](https://img.shields.io/github/stars/madbat/Swift-fun-playgrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/madbat/Swift-fun-playgrounds)](https://github.com/madbat/Swift-fun-playgrounds) - A few playgrounds to showcase Swift peculiar features. ⏳
* [BradLarson's Playgrounds ![GitHub Repo stars](https://img.shields.io/github/stars/BradLarson/PersonalSwiftPlaygrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/BradLarson/PersonalSwiftPlaygrounds)](https://github.com/BradLarson/PersonalSwiftPlaygrounds) - Various playgrounds. ⏳
* [Dmikusa's Playgrounds ![GitHub Repo stars](https://img.shields.io/github/stars/dmikusa/swift_playgrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/dmikusa/swift_playgrounds)](https://github.com/dmikusa/swift_playgrounds) - Playgrounds that show basic Swift, JSON parsing, sending HTTP requests and basic file IO. ⏳
* [Cananito's Playgrounds ![GitHub Repo stars](https://img.shields.io/github/stars/Cananito/Playgrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/Cananito/Playgrounds)](https://github.com/Cananito/Playgrounds) - Various playgrounds. ⏳
* [Uberbruns's Playgrounds ![GitHub Repo stars](https://img.shields.io/github/stars/uberbruns/SwiftPlaygrounds) ![GitHub last commit](https://img.shields.io/github/last-commit/uberbruns/SwiftPlaygrounds)](https://github.com/uberbruns/SwiftPlaygrounds) - Various playgrounds. ⏳

## Miscellaneous
*What doesn't fit anywhere else, but still awesome*

* [Rubik's Cube ![GitHub Repo stars](https://img.shields.io/github/stars/codelynx/CoreRubiksCube) ![GitHub last commit](https://img.shields.io/github/last-commit/codelynx/CoreRubiksCube)](https://github.com/codelynx/CoreRubiksCube) - Implementing basic model and behavior of Rubic's Cube in Swift. 🍁
* [Icon Creator ![GitHub Repo stars](https://img.shields.io/github/stars/tnantoka/IconCreator) ![GitHub last commit](https://img.shields.io/github/last-commit/tnantoka/IconCreator)](https://github.com/tnantoka/IconCreator) - Create app icons on Swift playground.
* [2048 Playground ![GitHub Repo stars](https://img.shields.io/github/stars/robin/2048_Playground) ![GitHub last commit](https://img.shields.io/github/last-commit/robin/2048_Playground)](https://github.com/robin/2048_Playground) - The 2048 game implemented with a playground.
* [SwiftShell ![GitHub Repo stars](https://img.shields.io/github/stars/JustinJiaDev/SwiftShell) ![GitHub last commit](https://img.shields.io/github/last-commit/JustinJiaDev/SwiftShell)](https://github.com/JustinJiaDev/SwiftShell) - Bash shell in a playground.
* [LaunchPad Playground ![GitHub Repo stars](https://img.shields.io/github/stars/Juniorlimaivd/LaunchPad-Playground) ![GitHub last commit](https://img.shields.io/github/last-commit/Juniorlimaivd/LaunchPad-Playground)](https://github.com/Juniorlimaivd/LaunchPad-Playground) - A playground that simulates a real LaunchPad for making music.
* [Super Maze ![GitHub Repo stars](https://img.shields.io/github/stars/W00dL3cs/Super-Maze) ![GitHub last commit](https://img.shields.io/github/last-commit/W00dL3cs/Super-Maze)](https://github.com/W00dL3cs/Super-Maze) - A programmatic maze generator and solver.
* [Tic Tac Toe ![GitHub Repo stars](https://img.shields.io/github/stars/aabosh/Tic-Tac-Toe) ![GitHub last commit](https://img.shields.io/github/last-commit/aabosh/Tic-Tac-Toe)](https://github.com/aabosh/Tic-Tac-Toe) - Tic tac toe in a playground.
* [Pixel Art Maker ![GitHub Repo stars](https://img.shields.io/github/stars/BenEmdon/PixelArtMaker) ![GitHub last commit](https://img.shields.io/github/last-commit/BenEmdon/PixelArtMaker)](https://github.com/BenEmdon/PixelArtMaker) - A playground where you can make pixel art.
* [SwiftCoin ![GitHub Repo stars](https://img.shields.io/github/stars/Thomvis/Swiftcoin) ![GitHub last commit](https://img.shields.io/github/last-commit/Thomvis/Swiftcoin)](https://github.com/Thomvis/Swiftcoin) - A simplistic blockchain & cryptocurrency in a playground.
* [SentimentlySwift ![GitHub Repo stars](https://img.shields.io/github/stars/benbahrenburg/SentimentlySwift) ![GitHub last commit](https://img.shields.io/github/last-commit/benbahrenburg/SentimentlySwift)](https://github.com/benbahrenburg/SentimentlySwift) - Sentiment analysis in Swift. 
* [SwiftChain ![GitHub Repo stars](https://img.shields.io/github/stars/gg2001/SwiftChain) ![GitHub last commit](https://img.shields.io/github/last-commit/gg2001/SwiftChain)](https://github.com/gg2001/SwiftChain) - Simple Cryptocurrency in a Swift Playground.
* [Game Boards ![GitHub Repo stars](https://img.shields.io/github/stars/joalbright/Gameboard) ![GitHub last commit](https://img.shields.io/github/last-commit/joalbright/Gameboard)](https://github.com/joalbright/Gameboard) - Chess, checkers, tic-tac-toe, sudoku and many others in playground. 🌟 ⏳
* [StarWars Seals ![GitHub Repo stars](https://img.shields.io/github/stars/jeremyconkin/StarWarsSeals) ![GitHub last commit](https://img.shields.io/github/last-commit/jeremyconkin/StarWarsSeals)](https://github.com/jeremyconkin/StarWarsSeals) - Emblems from Star Wars in Swift playgrounds via CoreGraphics and UIViews. ⏳
* [SwiftFiles ![GitHub Repo stars](https://img.shields.io/github/stars/sketchytech/SwiftFiles) ![GitHub last commit](https://img.shields.io/github/last-commit/sketchytech/SwiftFiles)](https://github.com/sketchytech/SwiftFiles) - Save, Load and Delete files easily from within a Swift playground. ⏳
* [Earth photos ![GitHub Repo stars](https://img.shields.io/github/stars/jtbandes/DSCOVR.playground) ![GitHub last commit](https://img.shields.io/github/last-commit/jtbandes/DSCOVR.playground)](https://github.com/jtbandes/DSCOVR.playground) - A slideshow of Earth photos taken by DSCOVR/EPIC. 🌟 ⏳


