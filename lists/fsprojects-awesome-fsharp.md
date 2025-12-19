# Awesome F# [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) <img src="https://fsharp.org/img/logo/fsharp.svg" width="48" height="48" align="right"/>

F# is a programming language with focus on immutability, type inference, first-class functions, powerful data types and pattern matching, targeting .NET and other platforms.

This is a curated list of awesome F# frameworks, libraries, software and resources.

## Contents
- [Main Language-Related Repositories](#main-language-related-repositories)
- [F# Wrappers for Popular .NET Libraries](#f-wrappers-for-popular-net-libraries)
- [Actor Frameworks](#actor-frameworks)
- [Build Tools](#build-tools)
- [Cloud](#cloud)
- [Code Analysis](#code-analysis)
- [Code Generation](#code-generation)
- [Compilers for Other Platforms](#compilers-for-other-platforms)
- [Concurrent, Asynchronous, and Parallel Programming](#concurrent-asynchronous-and-parallel-programming)
- [Configuration](#configuration)
- [Data Science](#data-science)
- [Development Tools](#development-tools)
  - [IDE](#ide)
  - [Editor Plugins](#editor-plugins)
  - [Performance Analysis](#performance-analysis)
- [General Purpose Libraries](#general-purpose-libraries)
- [Game Development](#game-development)
- [GUI](#gui)
- [HTTP Clients](#http-clients)
- [Logging](#logging)
- [Package Management](#package-management)
- [Parsing](#parsing)
- [Serialization](#serialization)
- [Simulation](#simulation)
- [Static Site Generators](#static-site-generators)
- [Testing](#testing)
- [Type Providers](#type-providers)
  - [Creating Type Providers](#creating-type-providers)
- [Visualization](#visualization)
- [Web Frameworks](#web-frameworks)
- [.NET Core Templates](#net-core-templates)
- [Resources](#resources)
  - [Blogs](#blogs)
  - [Books](#books)
  - [Cheatsheets](#cheatsheets)
  - [Community](#community)
  - [Other Lists](#other-lists)
  - [Websites](#websites)
  - [Videos](#videos)
  - [Courses](#courses)

## Main Language-Related Repositories

- [F# main repository ![GitHub Repo Stars](https://img.shields.io/github/stars/dotnet/fsharp) ![GitHub last commit](https://img.shields.io/github/last-commit/dotnet/fsharp)](https://github.com/dotnet/fsharp)
- [F# projects](https://github.com/fsprojects)
- [F# suggestions ![GitHub Repo Stars](https://img.shields.io/github/stars/fsharp/fslang-suggestions) ![GitHub last commit](https://img.shields.io/github/last-commit/fsharp/fslang-suggestions)](https://github.com/fsharp/fslang-suggestions)
- [F# RFCs ![GitHub Repo Stars](https://img.shields.io/github/stars/fsharp/fslang-design) ![GitHub last commit](https://img.shields.io/github/last-commit/fsharp/fslang-design)](https://github.com/fsharp/fslang-design)

## F# Wrappers for Popular .NET Libraries
Looking to have a more enjoyable experience when consuming a popular .NET library? Here is a quick table.

<!-- The following table includes some entries that are duplicated in the list below. This is by design. -->  
<!--lint disable double-link -->
|.NET Library                                                                                                                     |F# Wrapper                                                                                                                                                                |
|---------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|[SP.NTCore Blazor ![GitHub Repo Stars](https://img.shields.io/github/stars/dotnet/aspnetcore) ![GitHub last commit](https://img.shields.io/github/last-commit/dotnet/aspnetcore)](https://github.com/dotnet/aspnetcore/tree/main/src/Components)                                                |[Bolero ![GitHub Repo Stars](https://img.shields.io/github/stars/fsbolero/Bolero) ![GitHub last commit](https://img.shields.io/github/last-commit/fsbolero/Bolero)](https://github.com/fsbolero/Bolero)                                                                                                                              |
|[ASP.NTCore ![GitHub Repo Stars](https://img.shields.io/github/stars/dotnet/aspnetcore) ![GitHub last commit](https://img.shields.io/github/last-commit/dotnet/aspnetcore)](https://github.com/dotnet/aspnetcore)                                                                               |[Giraffe ![GitHub Repo Stars](https://img.shields.io/github/stars/giraffe-fsharp/Giraffe) ![GitHub last commit](https://img.shields.io/github/last-commit/giraffe-fsharp/Giraffe)](https://github.com/giraffe-fsharp/Giraffe) (+ optionally [Saturn ![GitHub Repo Stars](https://img.shields.io/github/stars/SaturnFramework/Saturn) ![GitHub last commit](https://img.shields.io/github/last-commit/SaturnFramework/Saturn)](https://github.com/SaturnFramework/Saturn))<br/>[Oxpecker ![GitHub Repo Stars](https://img.shields.io/github/stars/Lanayx/Oxpecker) ![GitHub last commit](https://img.shields.io/github/last-commit/Lanayx/Oxpecker)](https://github.com/Lanayx/Oxpecker)|
|[Avalonia ![GitHub Repo Stars](https://img.shields.io/github/stars/AvaloniaUI/Avalonia) ![GitHub last commit](https://img.shields.io/github/last-commit/AvaloniaUI/Avalonia)](https://github.com/AvaloniaUI/Avalonia)                                                                               |[Avalonia.FuncUI ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/Avalonia.FuncUI) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/Avalonia.FuncUI)](https://github.com/fsprojects/Avalonia.FuncUI)                                                                                                          |
|[MAUI ![GitHub Repo Stars](https://img.shields.io/github/stars/dotnet/maui) ![GitHub last commit](https://img.shields.io/github/last-commit/dotnet/maui)](https://github.com/dotnet/maui)/[Xamarin.Forms ![GitHub Repo Stars](https://img.shields.io/github/stars/xamarin/Xamarin.Forms) ![GitHub last commit](https://img.shields.io/github/last-commit/xamarin/Xamarin.Forms)](https://github.com/xamarin/Xamarin.Forms)                                 |[Fabulous ![GitHub Repo Stars](https://img.shields.io/github/stars/fabulous-dev/Fabulous) ![GitHub last commit](https://img.shields.io/github/last-commit/fabulous-dev/Fabulous)](https://github.com/fabulous-dev/Fabulous)                                                                                                                      |
|[MSTest ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/testfx) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/testfx)](https://github.com/microsoft/testfx)/[NUnit ![GitHub Repo Stars](https://img.shields.io/github/stars/nunit/nunit) ![GitHub last commit](https://img.shields.io/github/last-commit/nunit/nunit)](https://github.com/nunit/nunit)/[xUnit.net ![GitHub Repo Stars](https://img.shields.io/github/stars/xunit/xunit) ![GitHub last commit](https://img.shields.io/github/last-commit/xunit/xunit)](https://github.com/xunit/xunit)|[FsUnit ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/FsUnit) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/FsUnit)](https://github.com/fsprojects/FsUnit)                                                                                                                            |
|[System.TetJson ![GitHub Repo Stars](https://img.shields.io/github/stars/dotnet/runtime) ![GitHub last commit](https://img.shields.io/github/last-commit/dotnet/runtime)](https://github.com/dotnet/runtime/tree/main/src/libraries/System.Text.Json)                                     |[FSharp.SystemTextJson ![GitHub Repo Stars](https://img.shields.io/github/stars/Tarmil/FSharp.SystemTextJson) ![GitHub last commit](https://img.shields.io/github/last-commit/Tarmil/FSharp.SystemTextJson)](https://github.com/Tarmil/FSharp.SystemTextJson)                                                                                                  |
|[WPF ![GitHub Repo Stars](https://img.shields.io/github/stars/dotnet/wpf) ![GitHub last commit](https://img.shields.io/github/last-commit/dotnet/wpf)](https://github.com/dotnet/wpf)                                                                                             |[Elmish.WPF ![GitHub Repo Stars](https://img.shields.io/github/stars/elmish/Elmish.WPF) ![GitHub last commit](https://img.shields.io/github/last-commit/elmish/Elmish.WPF)](https://github.com/elmish/Elmish.WPF)                                                                                                                        |

<!--lint enable double-link -->

## Actor Frameworks

- [Akka.NET ![GitHub Repo Stars](https://img.shields.io/github/stars/akkadotnet/akka.net) ![GitHub last commit](https://img.shields.io/github/last-commit/akkadotnet/akka.net)](https://github.com/akkadotnet/akka.net) - Community-driven port of the popular Java/Scala framework Akka to .NET.
- [Akkling ![GitHub Repo Stars](https://img.shields.io/github/stars/Horusiath/Akkling) ![GitHub last commit](https://img.shields.io/github/last-commit/Horusiath/Akkling)](https://github.com/Horusiath/Akkling) - F# typed API for Akka.NET.
- [Orleankka ![GitHub Repo Stars](https://img.shields.io/github/stars/OrleansContrib/Orleankka) ![GitHub last commit](https://img.shields.io/github/last-commit/OrleansContrib/Orleankka)](https://github.com/OrleansContrib/Orleankka) - Functional extension for Microsoft Orleans framework.
- [Orleans ![GitHub Repo Stars](https://img.shields.io/github/stars/dotnet/orleans) ![GitHub last commit](https://img.shields.io/github/last-commit/dotnet/orleans)](https://github.com/dotnet/orleans) - Distributed virtual actor model.
- [Proto.actor ![GitHub Repo Stars](https://img.shields.io/github/stars/AsynkronIT/protoactor-dotnet) ![GitHub last commit](https://img.shields.io/github/last-commit/AsynkronIT/protoactor-dotnet)](https://github.com/AsynkronIT/protoactor-dotnet) - Cross-platform actor framework for .NET, Go, Java and Kotlin.

## Build Tools

- [FAKE ![GitHub Repo Stars](https://img.shields.io/github/stars/fsharp/FAKE) ![GitHub last commit](https://img.shields.io/github/last-commit/fsharp/FAKE)](https://github.com/fsharp/FAKE) - "F# Make" is a cross platform build automation system.
- [Xake ![GitHub Repo Stars](https://img.shields.io/github/stars/OlegZee/Xake) ![GitHub last commit](https://img.shields.io/github/last-commit/OlegZee/Xake)](https://github.com/OlegZee/Xake) - Another Make utility implementation on F#, fully declarative with no-brain parallelism, inspired by Shake.

## Cloud

- [Chia ![GitHub Repo Stars](https://img.shields.io/github/stars/DanpowerGruppe/Chia) ![GitHub last commit](https://img.shields.io/github/last-commit/DanpowerGruppe/Chia)](https://github.com/DanpowerGruppe/Chia) - An F# library which contains HelperFunctions for reporting, logging and Azure cloud operations.
- [Farmer ![GitHub Repo Stars](https://img.shields.io/github/stars/CompositionalIT/farmer) ![GitHub last commit](https://img.shields.io/github/last-commit/CompositionalIT/farmer)](https://github.com/CompositionalIT/farmer) - Repeatable Azure deployments with ARM templates made easy.
- [FsFirestore ![GitHub Repo Stars](https://img.shields.io/github/stars/mrbandler/FsFirestore) ![GitHub last commit](https://img.shields.io/github/last-commit/mrbandler/FsFirestore)](https://github.com/mrbandler/FsFirestore) - Functional F# library to access Firestore database hosted on Google Cloud Platform (GCP) or Firebase.
- [Pulumi.FSharp.Extensions ![GitHub Repo Stars](https://img.shields.io/github/stars/UnoSD/Pulumi.FSharp.Extensions) ![GitHub last commit](https://img.shields.io/github/last-commit/UnoSD/Pulumi.FSharp.Extensions)](https://github.com/UnoSD/Pulumi.FSharp.Extensions) - F# computational expressions to reduce boilerplate in Pulumi code.

## Code Analysis
- [Ionide FSharp.Analyzers.SDK ![GitHub Repo Stars](https://img.shields.io/github/stars/ionide/FSharp.Analyzers.SDK) ![GitHub last commit](https://img.shields.io/github/last-commit/ionide/FSharp.Analyzers.SDK)](https://github.com/ionide/FSharp.Analyzers.SDK) - Library for building custom analyzers for F# / FSharp.Analyzers.Cli.

## Code Generation

- [Hawaii ![GitHub Repo Stars](https://img.shields.io/github/stars/Zaid-Ajaj/Hawaii) ![GitHub last commit](https://img.shields.io/github/last-commit/Zaid-Ajaj/Hawaii)](https://github.com/Zaid-Ajaj/Hawaii) - A dotnet CLI tool to generate type-safe F# clients from OpenAPI/Swagger services.
- [Myriad ![GitHub Repo Stars](https://img.shields.io/github/stars/MoiraeSoftware/myriad) ![GitHub last commit](https://img.shields.io/github/last-commit/MoiraeSoftware/myriad)](https://github.com/MoiraeSoftware/myriad) - A pre-compilation code generator.

## Compilers for Other Platforms

- [Fable ![GitHub Repo Stars](https://img.shields.io/github/stars/fable-compiler/Fable) ![GitHub last commit](https://img.shields.io/github/last-commit/fable-compiler/Fable)](https://github.com/fable-compiler/Fable) - F# to JavaScript compiler.
- [Fez ![GitHub Repo Stars](https://img.shields.io/github/stars/kjnilsson/fez) ![GitHub last commit](https://img.shields.io/github/last-commit/kjnilsson/fez)](https://github.com/kjnilsson/fez) - F# to Erlang compiler.
- [FunScript ![GitHub Repo Stars](https://img.shields.io/github/stars/ZachBray/FunScript) ![GitHub last commit](https://img.shields.io/github/last-commit/ZachBray/FunScript)](https://github.com/ZachBray/FunScript) - F# to JavaScript compiler with JQuery etc. mappings through a TypeScript type provider.
- [Juniper ![GitHub Repo Stars](https://img.shields.io/github/stars/calebh/Juniper) ![GitHub last commit](https://img.shields.io/github/last-commit/calebh/Juniper)](https://github.com/calebh/Juniper) - Functional Reactive Programming for the Arduino and other microcontrollers.

## Concurrent, Asynchronous, and Parallel Programming

- [FIO ![GitHub Repo Stars](https://img.shields.io/github/stars/iyyel/fio) ![GitHub last commit](https://img.shields.io/github/last-commit/iyyel/fio)](https://github.com/iyyel/fio) - A type-safe, highly concurrent and asynchronous library for F# based on pure functional programming.
- [FSharp.Control.AsyncSeq ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/FSharp.Control.AsyncSeq) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/FSharp.Control.AsyncSeq)](https://github.com/fsprojects/FSharp.Control.AsyncSeq) - Asynchronous sequence support, integration with `IAsyncEnumerable`.
- [FSharp.Control.FusionTasks ![GitHub Repo Stars](https://img.shields.io/github/stars/kekyo/FSharp.Control.FusionTasks) ![GitHub last commit](https://img.shields.io/github/last-commit/kekyo/FSharp.Control.FusionTasks)](https://github.com/kekyo/FSharp.Control.FusionTasks) - F# Async workflow <--> .NET Task/ValueTask easy seamless interoperability library.
- [FSharpx.Async ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/FSharpx.Async) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/FSharpx.Async)](https://github.com/fsprojects/FSharpx.Async) - Collection of asynchronous programming utilities for F#.
- [Hopac ![GitHub Repo Stars](https://img.shields.io/github/stars/Hopac/Hopac) ![GitHub last commit](https://img.shields.io/github/last-commit/Hopac/Hopac)](https://github.com/Hopac/Hopac) - Concurrent ML style concurrent programming library for F#.
- [IcedTasks ![GitHub Repo Stars](https://img.shields.io/github/stars/TheAngryByrd/IcedTasks) ![GitHub last commit](https://img.shields.io/github/last-commit/TheAngryByrd/IcedTasks)](https://github.com/TheAngryByrd/IcedTasks) - Cold tasks, cancellable tasks, and extensions for the `async` workflow.
- [Ply ![GitHub Repo Stars](https://img.shields.io/github/stars/crowded/ply) ![GitHub last commit](https://img.shields.io/github/last-commit/crowded/ply)](https://github.com/crowded/ply) - High performance System.Threading.(Value)Task computation expressions for F#.
- [Reaction.AsyncRx ![GitHub Repo Stars](https://img.shields.io/github/stars/dbrattli/Reaction) ![GitHub last commit](https://img.shields.io/github/last-commit/dbrattli/Reaction)](https://github.com/dbrattli/Reaction) - An implementation of Async Observables in F# for .NET and Fable.
- [TaskBuilder.fs ![GitHub Repo Stars](https://img.shields.io/github/stars/rspeele/TaskBuilder.fs) ![GitHub last commit](https://img.shields.io/github/last-commit/rspeele/TaskBuilder.fs)](https://github.com/rspeele/TaskBuilder.fs) - F# computation expression builder for System.Threading.Tasks.

## Configuration

- [Argu ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/Argu) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/Argu)](https://github.com/fsprojects/Argu) - Declarative CLI argument/XML configuration parser for F# applications.
- [FsConfig ![GitHub Repo Stars](https://img.shields.io/github/stars/demystifyfp/FsConfig) ![GitHub last commit](https://img.shields.io/github/last-commit/demystifyfp/FsConfig)](https://github.com/demystifyfp/FsConfig) - F# library for reading configuration data from environment variables and AppSettings with type safety.
- [Skid ![GitHub Repo Stars](https://img.shields.io/github/stars/Meyhem/Skid) ![GitHub last commit](https://img.shields.io/github/last-commit/Meyhem/Skid)](https://github.com/Meyhem/Skid) - Simple, single-file portable CLI utility for configuration templating.
- [docopt.fs ![GitHub Repo Stars](https://img.shields.io/github/stars/docopt/docopt.fs) ![GitHub last commit](https://img.shields.io/github/last-commit/docopt/docopt.fs)](https://github.com/docopt/docopt.fs/) - Command line arguments parser, F# port of [docopt ![GitHub Repo Stars](https://img.shields.io/github/stars/docopt/docopt) ![GitHub last commit](https://img.shields.io/github/last-commit/docopt/docopt)](https://github.com/docopt/docopt).

## Data Science

- [Deedle ![GitHub Repo Stars](https://img.shields.io/github/stars/BlueMountainCapital/Deedle) ![GitHub last commit](https://img.shields.io/github/last-commit/BlueMountainCapital/Deedle)](https://github.com/BlueMountainCapital/Deedle) - Exploratory data library for .NET.
- [DiffSharp ![GitHub Repo Stars](https://img.shields.io/github/stars/DiffSharp/DiffSharp) ![GitHub last commit](https://img.shields.io/github/last-commit/DiffSharp/DiffSharp)](https://github.com/DiffSharp/DiffSharp) - Functional automatic differentiation (AD) library.
- [FsLab ![GitHub Repo Stars](https://img.shields.io/github/stars/fslaborg/FsLab) ![GitHub last commit](https://img.shields.io/github/last-commit/fslaborg/FsLab)](https://github.com/fslaborg/FsLab) - A collection of libraries for data-science. It provides a rapid development environment that lets you write advanced analysis with few lines of production-quality code.
- [IfSharp ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/IfSharp) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/IfSharp)](https://github.com/fsprojects/IfSharp) - F# for Jupyter Notebooks.
- [Math.NET Numerics ![GitHub Repo Stars](https://img.shields.io/github/stars/mathnet/mathnet-numerics) ![GitHub last commit](https://img.shields.io/github/last-commit/mathnet/mathnet-numerics)](https://github.com/mathnet/mathnet-numerics) - Methods and algorithms for numerical computations in science, engineering and every day use. F# specific bindings available.
- [Math.NET Symbolics ![GitHub Repo Stars](https://img.shields.io/github/stars/mathnet/mathnet-symbolics) ![GitHub last commit](https://img.shields.io/github/last-commit/mathnet/mathnet-symbolics)](https://github.com/mathnet/mathnet-symbolics/) - A basic open source computer algebra library for .NET, Silverlight and Mono written entirely in F#.
- [SIMDArray ![GitHub Repo Stars](https://img.shields.io/github/stars/jackmott/SIMDArray) ![GitHub last commit](https://img.shields.io/github/last-commit/jackmott/SIMDArray)](https://github.com/jackmott/SIMDArray) - SIMD enhanced Array extensions for faster computation.
- [Synapses ![GitHub Repo Stars](https://img.shields.io/github/stars/mrdimosthenis/Synapses) ![GitHub last commit](https://img.shields.io/github/last-commit/mrdimosthenis/Synapses)](https://github.com/mrdimosthenis/Synapses) - Neural network library in F#.
- [m2cgen ![GitHub Repo Stars](https://img.shields.io/github/stars/BayesWitnesses/m2cgen) ![GitHub last commit](https://img.shields.io/github/last-commit/BayesWitnesses/m2cgen)](https://github.com/BayesWitnesses/m2cgen) - A CLI tool to transpile trained classic ML models into a native F# code with zero dependencies.

## Development Tools

### IDE

- [F# Playground ![GitHub Repo Stars](https://img.shields.io/github/stars/Seng-Jik/FSharpPlayground) ![GitHub last commit](https://img.shields.io/github/last-commit/Seng-Jik/FSharpPlayground)](https://github.com/Seng-Jik/FSharpPlayground) - Minimal playground for F#.
- [JetBrains Rider](https://www.jetbrains.com/rider) - Cross-platform .NET IDE with F# support (Proprietary, free for non-commercial use).
- [MonoDevelop](http://www.monodevelop.com/) - Cross-platform IDE mostly aimed at Mono/.NET developers.
- [Visual Studio](https://www.visualstudio.com/) - IDE from Microsoft with first class F# support (Windows only, Proprietary).

### Editor Plugins

- [Emacs F# mode ![GitHub Repo Stars](https://img.shields.io/github/stars/fsharp/emacs-fsharp-mode) ![GitHub last commit](https://img.shields.io/github/last-commit/fsharp/emacs-fsharp-mode)](https://github.com/fsharp/emacs-fsharp-mode) - F# support in Emacs (including Intellisense and Interactive mode).
- [FSharpFar ![GitHub Repo Stars](https://img.shields.io/github/stars/nightroman/FarNet) ![GitHub last commit](https://img.shields.io/github/last-commit/nightroman/FarNet)](https://github.com/nightroman/FarNet) - F# support for Far Manager.
- [FSharpLint ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/FSharpLint) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/FSharpLint)](https://github.com/fsprojects/FSharpLint) - F# code linter.
- [Fantomas ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/fantomas) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/fantomas)](https://github.com/fsprojects/fantomas) - F# code formatter.
- [Ionide](http://ionide.io/) - Atom Editor and Visual Studio Code package suite for cross platform F# development.
- [Vim F# ![GitHub Repo Stars](https://img.shields.io/github/stars/fsharp/vim-fsharp) ![GitHub last commit](https://img.shields.io/github/last-commit/fsharp/vim-fsharp)](https://github.com/fsharp/vim-fsharp) - F# support for Vim.
- [VimSpeak ![GitHub Repo Stars](https://img.shields.io/github/stars/AshleyF/VimSpeak) ![GitHub last commit](https://img.shields.io/github/last-commit/AshleyF/VimSpeak)](https://github.com/AshleyF/VimSpeak) - A tool to control Vim with your voice using speech recognition.
- [fsharp-notebook ![GitHub Repo Stars](https://img.shields.io/github/stars/pablofrommars/fsharp-notebook) ![GitHub last commit](https://img.shields.io/github/last-commit/pablofrommars/fsharp-notebook)](https://github.com/pablofrommars/fsharp-notebook) - Data science notebook for F# Interactive.
- [neofsharp.vim ![GitHub Repo Stars](https://img.shields.io/github/stars/adelarsq/neofsharp.vim) ![GitHub last commit](https://img.shields.io/github/last-commit/adelarsq/neofsharp.vim)](https://github.com/adelarsq/neofsharp.vim) - Basic F# support for (Neo)Vim.

### Performance Analysis

- [fasm ![GitHub Repo Stars](https://img.shields.io/github/stars/d-edge/fasm) ![GitHub last commit](https://img.shields.io/github/last-commit/d-edge/fasm)](https://github.com/d-edge/fasm) - F# JIT disassembler, as a dotnet tool.

## General Purpose Libraries

- [Aether ![GitHub Repo Stars](https://img.shields.io/github/stars/xyncro/aether) ![GitHub last commit](https://img.shields.io/github/last-commit/xyncro/aether)](https://github.com/xyncro/aether) - Optics library for F#, similar to the Haskell Data.Lens package.
- [Chessie ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/Chessie) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/Chessie)](https://github.com/fsprojects/Chessie) - Railway-oriented programming.
- [Donald ![GitHub Repo Stars](https://img.shields.io/github/stars/pimbrouwers/Donald) ![GitHub last commit](https://img.shields.io/github/last-commit/pimbrouwers/Donald)](https://github.com/pimbrouwers/Donald) - A simple F# interface for ADO.NET.
- [DustyTables ![GitHub Repo Stars](https://img.shields.io/github/stars/Zaid-Ajaj/DustyTables) ![GitHub last commit](https://img.shields.io/github/last-commit/Zaid-Ajaj/DustyTables)](https://github.com/Zaid-Ajaj/DustyTables) - Thin F# API for SqlClient for easy data access to ms sql server with functional seasoning on top.
- [ExtCore ![GitHub Repo Stars](https://img.shields.io/github/stars/jack-pappas/ExtCore) ![GitHub last commit](https://img.shields.io/github/last-commit/jack-pappas/ExtCore)](https://github.com/jack-pappas/ExtCore) - Extended core library for F#.
- [FSharp.CosmosDb ![GitHub Repo Stars](https://img.shields.io/github/stars/aaronpowell/fsharp.cosmosdb) ![GitHub last commit](https://img.shields.io/github/last-commit/aaronpowell/fsharp.cosmosdb)](https://github.com/aaronpowell/fsharp.cosmosdb) - An F# wrapper around the CosmosDB SDK, making it more functional-friendly.
- [FSharp.HashCollections ![GitHub Repo Stars](https://img.shields.io/github/stars/mvkara/fsharp-hashcollections) ![GitHub last commit](https://img.shields.io/github/last-commit/mvkara/fsharp-hashcollections)](https://github.com/mvkara/fsharp-hashcollections) - Fast hash-based immutable map and set.
- [FSharpLu ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/fsharplu) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/fsharplu)](https://github.com/Microsoft/fsharplu) - Lightweight utilities for string manipulations, logging, collection data structures, file operations, text processing, security, async, parsing, diagnostics, configuration files and Json serialization.
- [FSharpPlus ![GitHub Repo Stars](https://img.shields.io/github/stars/gmpl/FSharpPlus) ![GitHub last commit](https://img.shields.io/github/last-commit/gmpl/FSharpPlus)](https://github.com/gmpl/FSharpPlus) - Extensions for F#.
- [FSharpx.Extras ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/FSharpx.Extras) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/FSharpx.Extras)](https://github.com/fsprojects/FSharpx.Extras) - A collection of libraries and tools for use with F#.
- [Fli ![GitHub Repo Stars](https://img.shields.io/github/stars/CaptnCodr/Fli) ![GitHub last commit](https://img.shields.io/github/last-commit/CaptnCodr/Fli)](https://github.com/CaptnCodr/Fli) - Computational expression to run system processes and manage their output. 
- [Fling ![GitHub Repo Stars](https://img.shields.io/github/stars/cmeeren/Fling) ![GitHub last commit](https://img.shields.io/github/last-commit/cmeeren/Fling)](https://github.com/cmeeren/Fling) - Significantly reduces boilerplate needed to efficiently save/load complex domain entities to/from multiple tables.
- [FsToolkit.ErrorHandling ![GitHub Repo Stars](https://img.shields.io/github/stars/demystifyfp/FsToolkit.ErrorHandling) ![GitHub last commit](https://img.shields.io/github/last-commit/demystifyfp/FsToolkit.ErrorHandling)](https://github.com/demystifyfp/FsToolkit.ErrorHandling) - Clear, simple and powerful error handling with railway-oriented programming. Inspired by Chessie.
- [Fumble ![GitHub Repo Stars](https://img.shields.io/github/stars/tforkmann/Fumble) ![GitHub last commit](https://img.shields.io/github/last-commit/tforkmann/Fumble)](https://github.com/tforkmann/Fumble) - Thin F# API for SQLite for easy data access to SQLite database with functional seasoning on top.
- [LiteDB.FSharp ![GitHub Repo Stars](https://img.shields.io/github/stars/Zaid-Ajaj/LiteDB.FSharp) ![GitHub last commit](https://img.shields.io/github/last-commit/Zaid-Ajaj/LiteDB.FSharp)](https://github.com/Zaid-Ajaj/LiteDB.FSharp) - F# Support for [LiteDB ![GitHub Repo Stars](https://img.shields.io/github/stars/mbdavid/LiteDB) ![GitHub last commit](https://img.shields.io/github/last-commit/mbdavid/LiteDB)](https://github.com/mbdavid/LiteDB), an embedded single file database for .NET.
- [Npgsql.FSharp ![GitHub Repo Stars](https://img.shields.io/github/stars/Zaid-Ajaj/Npgsql.FSharp) ![GitHub last commit](https://img.shields.io/github/last-commit/Zaid-Ajaj/Npgsql.FSharp)](https://github.com/Zaid-Ajaj/Npgsql.FSharp) - Thin F# wrapper around [Npgsql ![GitHub Repo Stars](https://img.shields.io/github/stars/npgsql/npgsql) ![GitHub last commit](https://img.shields.io/github/last-commit/npgsql/npgsql)](https://github.com/npgsql/npgsql), the PostgreSQL database driver.
- [SqlHydra ![GitHub Repo Stars](https://img.shields.io/github/stars/JordanMarr/SqlHydra) ![GitHub last commit](https://img.shields.io/github/last-commit/JordanMarr/SqlHydra)](https://github.com/JordanMarr/SqlHydra) - Suite of NuGet packages for working with databases in F# including query expressions and code generation tools (for generating strongly typed F# DTO record types based on your database tables). Supports MySQL, PostgreSQL, Oracle, SQL Server, and SQLite.
- [TypeShape ![GitHub Repo Stars](https://img.shields.io/github/stars/eiriktsarpalis/TypeShape) ![GitHub last commit](https://img.shields.io/github/last-commit/eiriktsarpalis/TypeShape)](https://github.com/eiriktsarpalis/TypeShape) - Small, extensible F# library for practical generic programming.
- [Validus ![GitHub Repo Stars](https://img.shields.io/github/stars/pimbrouwers/Validus) ![GitHub last commit](https://img.shields.io/github/last-commit/pimbrouwers/Validus)](https://github.com/pimbrouwers/Validus) - A composable validation library for F#, with built-in validators for most primitive types and easily extended through custom validators.
- [Vp.FSharp.Sql ![GitHub Repo Stars](https://img.shields.io/github/stars/veepee-oss/Vp.FSharp.Sql) ![GitHub last commit](https://img.shields.io/github/last-commit/veepee-oss/Vp.FSharp.Sql)](https://github.com/veepee-oss/Vp.FSharp.Sql) - Generic F# ADO provider wrapper (SqlServer, PostgreSQL, SQLite).

## Game Development

- [FsUnity](https://github.com/FsUnity) - F# libraries, tools, and plugins for the Unity game engine.
- [Garnet ![GitHub Repo Stars](https://img.shields.io/github/stars/bcarruthers/garnet) ![GitHub last commit](https://img.shields.io/github/last-commit/bcarruthers/garnet)](https://github.com/bcarruthers/garnet) - Lightweight game composition library for F# with entity-component-system (ECS) and actor-like messaging features.
- [Godot](https://www.lkokemohr.de/fsharp_godot.html) - Tutorial how to use F# with Godot. 
- [Nu Game Engine ![GitHub Repo Stars](https://img.shields.io/github/stars/bryanedds/Nu) ![GitHub last commit](https://img.shields.io/github/last-commit/bryanedds/Nu)](https://github.com/bryanedds/Nu) - Cross-platform F# 2D game engine built in the functional style. Uses SDL2 and Farseer Physics.

## GUI
<!--lint disable double-link -->
- [Avalonia.FuncUI ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/Avalonia.FuncUI) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/Avalonia.FuncUI)](https://github.com/fsprojects/Avalonia.FuncUI) - Develop cross-platform MVU GUI Applications using F# and Avalonia.
- [Elmish.WPF ![GitHub Repo Stars](https://img.shields.io/github/stars/elmish/Elmish.WPF) ![GitHub last commit](https://img.shields.io/github/last-commit/elmish/Elmish.WPF)](https://github.com/elmish/Elmish.WPF) - Elmish (or MVU) approach to WPF programming.
- [Epoxy ![GitHub Repo Stars](https://img.shields.io/github/stars/kekyo/epoxy) ![GitHub last commit](https://img.shields.io/github/last-commit/kekyo/epoxy)](https://github.com/kekyo/epoxy) - An independent flexible XAML MVVM library for .NET.
- [Fabulous ![GitHub Repo Stars](https://img.shields.io/github/stars/fabulous-dev/Fabulous) ![GitHub last commit](https://img.shields.io/github/last-commit/fabulous-dev/Fabulous)](https://github.com/fabulous-dev/Fabulous) - F# functional app development, using declarative dynamic UI.
<!--lint enable double-link -->

## HTTP Clients

- [FsHttp ![GitHub Repo Stars](https://img.shields.io/github/stars/ronaldschlenker/FsHttp) ![GitHub last commit](https://img.shields.io/github/last-commit/ronaldschlenker/FsHttp)](https://github.com/ronaldschlenker/FsHttp) - A convenient library for consuming HTTP/REST endpoints via F#.
- [Http.fs ![GitHub Repo Stars](https://img.shields.io/github/stars/haf/Http.fs) ![GitHub last commit](https://img.shields.io/github/last-commit/haf/Http.fs)](https://github.com/haf/Http.fs) - A simple, functional HTTP client library for F#.
- [Oryx ![GitHub Repo Stars](https://img.shields.io/github/stars/cognitedata/oryx) ![GitHub last commit](https://img.shields.io/github/last-commit/cognitedata/oryx)](https://github.com/cognitedata/oryx) - A high performance .NET cross-platform functional HTTP request handler library for writing HTTP clients and orchestrating web requests.

## Logging

- [FsLibLog ![GitHub Repo Stars](https://img.shields.io/github/stars/TheAngryByrd/FsLibLog) ![GitHub last commit](https://img.shields.io/github/last-commit/TheAngryByrd/FsLibLog)](https://github.com/TheAngryByrd/FsLibLog) - A single file you can copy and paste or add through Paket GitHub dependencies to provide your F# library with a logging abstraction.
- [Logary ![GitHub Repo Stars](https://img.shields.io/github/stars/logary/logary) ![GitHub last commit](https://img.shields.io/github/last-commit/logary/logary)](https://github.com/logary/logary/) - High performance, multi-target logging, metric, tracing and health-check library for mono and .NET.

## Package Management

- [NuGet](https://www.nuget.org/) - The package manager for the Microsoft development platform including .NET.
- [Paket ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/Paket) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/Paket)](https://github.com/fsprojects/Paket) - Dependency manager for .NET with support for NuGet packages and Git repositories.

## Parsing

- [FParsec ![GitHub Repo Stars](https://img.shields.io/github/stars/stephan-tolksdorf/fparsec) ![GitHub last commit](https://img.shields.io/github/last-commit/stephan-tolksdorf/fparsec)](https://github.com/stephan-tolksdorf/fparsec) - The parser combinator library for F#.
- [FsAttoparsec ![GitHub Repo Stars](https://img.shields.io/github/stars/haf/FsAttoparsec) ![GitHub last commit](https://img.shields.io/github/last-commit/haf/FsAttoparsec)](https://github.com/haf/FsAttoparsec) - Port of Bryan O'Sullivan's attoparsec from Haskell to F#.
- [XParsec ![GitHub Repo Stars](https://img.shields.io/github/stars/corsis/XParsec) ![GitHub last commit](https://img.shields.io/github/last-commit/corsis/XParsec)](https://github.com/corsis/XParsec) - Extensible, type-and-source-polymorphic, non-linear applicative parser combinator library for F# 3.0 and 4.0.

## Serialization
<!--lint disable double-link -->
- [FSharp.Json ![GitHub Repo Stars](https://img.shields.io/github/stars/vsapronov/FSharp.Json) ![GitHub last commit](https://img.shields.io/github/last-commit/vsapronov/FSharp.Json)](https://github.com/vsapronov/FSharp.Json) - Reflection-based serialization library.
- [FSharp.SystemTextJson ![GitHub Repo Stars](https://img.shields.io/github/stars/Tarmil/FSharp.SystemTextJson) ![GitHub last commit](https://img.shields.io/github/last-commit/Tarmil/FSharp.SystemTextJson)](https://github.com/Tarmil/FSharp.SystemTextJson) - System.Text.Json extensions for F# types.
- [Fleece ![GitHub Repo Stars](https://img.shields.io/github/stars/mausch/Fleece) ![GitHub last commit](https://img.shields.io/github/last-commit/mausch/Fleece)](https://github.com/mausch/Fleece) - JSON mapper for F#. It simplifies mapping from a Json library's JsonValue onto your types, and mapping from your types onto JsonValue.
- [FsCodec ![GitHub Repo Stars](https://img.shields.io/github/stars/jet/FsCodec) ![GitHub last commit](https://img.shields.io/github/last-commit/jet/FsCodec)](https://github.com/jet/FsCodec) - F# Event-Union Contract Encoding with versioning tolerant converters.
- [FsPickler ![GitHub Repo Stars](https://img.shields.io/github/stars/mbraceproject/FsPickler) ![GitHub last commit](https://img.shields.io/github/last-commit/mbraceproject/FsPickler)](https://github.com/mbraceproject/FsPickler) - Fast, multi-format messaging serializer for .NET.
- [Legivel ![GitHub Repo Stars](https://img.shields.io/github/stars/fjoppe/Legivel) ![GitHub last commit](https://img.shields.io/github/last-commit/fjoppe/Legivel)](https://github.com/fjoppe/Legivel) - F# Yaml 1.2 parser.
- [Thoth.Json](https://thoth-org.github.io/Thoth.Json/) - JSON encoder/decoder library inspired by Elm.
<!--lint enable double-link -->

## Simulation
 
- [F# RISC-V Instruction Set formal specification ![GitHub Repo Stars](https://img.shields.io/github/stars/mrLSD/riscv-fs) ![GitHub last commit](https://img.shields.io/github/last-commit/mrLSD/riscv-fs)](https://github.com/mrLSD/riscv-fs) - RISC-V CPU formal ISA Specification. RISC-V CPU simulator with ELF files execution.

## Static Site Generators

- [SkunkHTML ![GitHub Repo Stars](https://img.shields.io/github/stars/mg0x7BE/skunk-html) ![GitHub last commit](https://img.shields.io/github/last-commit/mg0x7BE/skunk-html)](https://github.com/mg0x7BE/skunk-html) - Markdown blog with GitHub Pages.

## Testing
<!--lint disable double-link -->
- [Expecto ![GitHub Repo Stars](https://img.shields.io/github/stars/haf/expecto) ![GitHub last commit](https://img.shields.io/github/last-commit/haf/expecto)](https://github.com/haf/expecto) - Smooth testing framework for F# with tests-as-values and parallelism by default.
- [Faqt ![GitHub Repo Stars](https://img.shields.io/github/stars/cmeeren/Faqt) ![GitHub last commit](https://img.shields.io/github/last-commit/cmeeren/Faqt)](https://github.com/cmeeren/Faqt) - Fantastic fluent assertions for your F# tests and domain code.
- [FsCheck ![GitHub Repo Stars](https://img.shields.io/github/stars/fscheck/FsCheck) ![GitHub last commit](https://img.shields.io/github/last-commit/fscheck/FsCheck)](https://github.com/fscheck/FsCheck) - Random testing for .NET.
- [FsUnit ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/FsUnit) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/FsUnit)](https://github.com/fsprojects/FsUnit) - Makes unit-testing with F# more enjoyable. It adds a special syntax to your favorite .NET testing framework.
- [NBomber ![GitHub Repo Stars](https://img.shields.io/github/stars/PragmaticFlow/NBomber) ![GitHub last commit](https://img.shields.io/github/last-commit/PragmaticFlow/NBomber)](https://github.com/PragmaticFlow/NBomber) - Simple load testing framework for Pull and Push scenarios.
- [Persimmon ![GitHub Repo Stars](https://img.shields.io/github/stars/persimmon-projects/Persimmon) ![GitHub last commit](https://img.shields.io/github/last-commit/persimmon-projects/Persimmon)](https://github.com/persimmon-projects/Persimmon) - Unit test framework for F# using computation expressions.
- [altcover ![GitHub Repo Stars](https://img.shields.io/github/stars/SteveGilham/altcover) ![GitHub last commit](https://img.shields.io/github/last-commit/SteveGilham/altcover)](https://github.com/SteveGilham/altcover) - Cross-platform coverage gathering and processing tool set for .NET/.NET core and Mono.
- [canopy ![GitHub Repo Stars](https://img.shields.io/github/stars/lefthandedgoat/canopy) ![GitHub last commit](https://img.shields.io/github/last-commit/lefthandedgoat/canopy)](https://github.com/lefthandedgoat/canopy) - F# web automation and testing framework.
- [fsharp-hedgehog ![GitHub Repo Stars](https://img.shields.io/github/stars/hedgehogqa/fsharp-hedgehog) ![GitHub last commit](https://img.shields.io/github/last-commit/hedgehogqa/fsharp-hedgehog)](https://github.com/hedgehogqa/fsharp-hedgehog) - Property-based testing system for F#.
- [unquote ![GitHub Repo Stars](https://img.shields.io/github/stars/swensensoftware/unquote) ![GitHub last commit](https://img.shields.io/github/last-commit/swensensoftware/unquote)](https://github.com/swensensoftware/unquote) - Write F# unit test assertions as quoted expressions.
- [xUnit.net](https://xunit.net/) - Free, open source, community-focused unit testing tool for the .NET Framework.
<!--lint enable double-link -->

## Type Providers

- [AzureStorageTypeProvider ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/AzureStorageTypeProvider) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/AzureStorageTypeProvider)](https://github.com/fsprojects/AzureStorageTypeProvider) - F# Azure type provider which can be used to explore Blob, Table and Queue Azure Storage assets and easily apply CRUD operations on them.
- [DynamicsCRMProvider ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/DynamicsCRMProvider) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/DynamicsCRMProvider)](https://github.com/fsprojects/DynamicsCRMProvider) - Type provider for Microsoft Dynamics CRM 2011.
- [EasyBuild.FileSystemProvider ![GitHub Repo Stars](https://img.shields.io/github/stars/easybuild-org/EasyBuild.FileSystemProvider) ![GitHub last commit](https://img.shields.io/github/last-commit/easybuild-org/EasyBuild.FileSystemProvider)](https://github.com/easybuild-org/EasyBuild.FileSystemProvider) - Type provider to provide a typed representation of files and directories based on your project structure or a virtual file system.
- [ExcelProvider ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/ExcelProvider) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/ExcelProvider)](https://github.com/fsprojects/ExcelProvider) - Excel type provider.
- [FSharp.Configuration ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/FSharp.Configuration) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/FSharp.Configuration)](https://github.com/fsprojects/FSharp.Configuration) - The project contains type providers for the configuration of .NET projects. Handles AppSettings, ResX, Yaml and Ini files.
- [FSharp.Data.Npgsql ![GitHub Repo Stars](https://img.shields.io/github/stars/demetrixbio/FSharp.Data.Npgsql) ![GitHub last commit](https://img.shields.io/github/last-commit/demetrixbio/FSharp.Data.Npgsql)](https://github.com/demetrixbio/FSharp.Data.Npgsql) - F# type providers library on a top of well-known Npgsql ADO.NET client library.
- [FSharp.Data.SqlClient ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/FSharp.Data.SqlClient) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/FSharp.Data.SqlClient)](https://github.com/fsprojects/FSharp.Data.SqlClient) - F# type provider for statically typed access to T-SQL command parameters and result set.
- [FSharp.Data.Tdms ![GitHub Repo Stars](https://img.shields.io/github/stars/mettekou/FSharp.Data.Tdms) ![GitHub last commit](https://img.shields.io/github/last-commit/mettekou/FSharp.Data.Tdms)](https://github.com/mettekou/FSharp.Data.Tdms) - TDMS support for F#.
- [FSharp.Data.Toolbox ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/FSharp.Data.Toolbox) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/FSharp.Data.Toolbox)](https://github.com/fsprojects/FSharp.Data.Toolbox) - Library for various data access APIs based on FSharp.Data. The library currently includes the Twitter type provider for access to Twitter users and feeds, and SAS type provider to read SAS dataset files.
- [FSharp.Data.TypeProviders ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/FSharp.Data.TypeProviders) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/FSharp.Data.TypeProviders)](https://github.com/fsprojects/FSharp.Data.TypeProviders) - Library that contains type providers for `.edmx` files, `.dbml` files, WSDL services, OData services, and SQL databases.
- [FSharp.Data ![GitHub Repo Stars](https://img.shields.io/github/stars/fsharp/FSharp.Data) ![GitHub last commit](https://img.shields.io/github/last-commit/fsharp/FSharp.Data)](https://github.com/fsharp/FSharp.Data) - Data science library that contains type providers for CSV, HTML, JSON, XML, and WorldBank data.
- [FSharp.Management ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/FSharp.Management) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/FSharp.Management)](https://github.com/fsprojects/FSharp.Management) - The project contains various type providers for the management of the machine. Handles file system, registry,  Windows Management Instrumentation, PowerShell and SystemTimeZones.
- [FSharp.Text.RegexProvider ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/FSharp.Text.RegexProvider) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/FSharp.Text.RegexProvider)](https://github.com/fsprojects/FSharp.Text.RegexProvider) - Type provider for regular expressions.
- [Facil ![GitHub Repo Stars](https://img.shields.io/github/stars/cmeeren/Facil) ![GitHub last commit](https://img.shields.io/github/last-commit/cmeeren/Facil)](https://github.com/cmeeren/Facil) - Generates F# data access source code from SQL queries and stored procedures.
- [FsXaml ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/FsXaml) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/FsXaml)](https://github.com/fsprojects/FsXaml) - F# Tools for working with XAML Projects.
- [FsYaml ![GitHub Repo Stars](https://img.shields.io/github/stars/bleis-tift/FsYaml) ![GitHub last commit](https://img.shields.io/github/last-commit/bleis-tift/FsYaml)](https://github.com/bleis-tift/FsYaml) - Typed Yaml library for F#.
- [GraphProvider ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/GraphProvider) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/GraphProvider)](https://github.com/fsprojects/GraphProvider) - `.dgml` state machine type provider.
- [MatDataProvider ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/matprovider) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/matprovider)](https://github.com/fsprojects/matprovider) - Erased type provider for `.mat` files (binary MATLAB format files).
- [R Type Provider ![GitHub Repo Stars](https://img.shields.io/github/stars/BlueMountainCapital/FSharpRProvider) ![GitHub last commit](https://img.shields.io/github/last-commit/BlueMountainCapital/FSharpRProvider)](https://github.com/BlueMountainCapital/FSharpRProvider) - Type provider to interop with R.
- [Rezoom.SQL ![GitHub Repo Stars](https://img.shields.io/github/stars/rspeele/Rezoom.SQL) ![GitHub last commit](https://img.shields.io/github/last-commit/rspeele/Rezoom.SQL)](https://github.com/rspeele/Rezoom.SQL) - Statically typed SQL for F#.
- [S3Provider ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/S3Provider) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/S3Provider)](https://github.com/fsprojects/S3Provider) - Experimental type provider for Amazon S3.
- [SQLProvider ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/SQLProvider) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/SQLProvider)](https://github.com/fsprojects/SQLProvider) - General F# SQL database erasing type provider, supporting LINQ queries, schema exploration, individuals, CRUD operations and much more besides.
- [SwaggerProvider ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/SwaggerProvider) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/SwaggerProvider)](https://github.com/fsprojects/SwaggerProvider) - Generative type provider for Swagger.

### Creating Type Providers

- [FSharp.TypeProviders.StarterPack ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/FSharp.TypeProviders.StarterPack) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/FSharp.TypeProviders.StarterPack)](https://github.com/fsprojects/FSharp.TypeProviders.StarterPack) - The ProvidedTypes SDK for creating F# type providers.

## Visualization

- [FSharp.Charting ![GitHub Repo Stars](https://img.shields.io/github/stars/fslaborg/FSharp.Charting) ![GitHub last commit](https://img.shields.io/github/last-commit/fslaborg/FSharp.Charting)](https://github.com/fslaborg/FSharp.Charting) - Charting library suitable for interactive F# scripting.
- [GG.Net ![GitHub Repo Stars](https://img.shields.io/github/stars/pablofrommars/GGNet) ![GitHub last commit](https://img.shields.io/github/last-commit/pablofrommars/GGNet)](https://github.com/pablofrommars/GGNet) - Visualization library for data scientists.
- [Plotly.NET ![GitHub Repo Stars](https://img.shields.io/github/stars/plotly/Plotly.NET) ![GitHub last commit](https://img.shields.io/github/last-commit/plotly/Plotly.NET)](https://github.com/plotly/Plotly.NET) - A Plotly-based general purpose plotting library for F#.
- [SharpVG ![GitHub Repo Stars](https://img.shields.io/github/stars/ChrisNikkel/SharpVG) ![GitHub last commit](https://img.shields.io/github/last-commit/ChrisNikkel/SharpVG)](https://github.com/ChrisNikkel/SharpVG) - Create SVG vector graphics in F#.
- [XPlot ![GitHub Repo Stars](https://img.shields.io/github/stars/fslaborg/XPlot) ![GitHub last commit](https://img.shields.io/github/last-commit/fslaborg/XPlot)](https://github.com/fslaborg/XPlot) - A plotting library for the F# programming language.

## Web Frameworks
<!--lint disable double-link -->
- [Bolero ![GitHub Repo Stars](https://img.shields.io/github/stars/fsbolero/Bolero) ![GitHub last commit](https://img.shields.io/github/last-commit/fsbolero/Bolero)](https://github.com/fsbolero/Bolero/) - F# in WebAssembly, develop SPAs with the full power of F# and .NET Blazor.
- [Falco ![GitHub Repo Stars](https://img.shields.io/github/stars/pimbrouwers/Falco) ![GitHub last commit](https://img.shields.io/github/last-commit/pimbrouwers/Falco)](https://github.com/pimbrouwers/Falco/) - A functional-first toolkit for building brilliant ASP.NET Core applications using F#.
- [Felicity ![GitHub Repo Stars](https://img.shields.io/github/stars/cmeeren/Felicity) ![GitHub last commit](https://img.shields.io/github/last-commit/cmeeren/Felicity)](https://github.com/cmeeren/Felicity) - Boilerplate-free, idiomatic JSON:API for your beautiful, idiomatic F# domain model.
- [Feliz ![GitHub Repo Stars](https://img.shields.io/github/stars/Zaid-Ajaj/Feliz) ![GitHub last commit](https://img.shields.io/github/last-commit/Zaid-Ajaj/Feliz)](https://github.com/Zaid-Ajaj/Feliz) - A fresh retake of the React API in Fable and a collection of high-quality components to build React applications in F#.
- [Genit ![GitHub Repo Stars](https://img.shields.io/github/stars/lefthandedgoat/genit) ![GitHub last commit](https://img.shields.io/github/last-commit/lefthandedgoat/genit)](https://github.com/lefthandedgoat/genit) - Cross-platform website generator and server using F#, Suave and PostgreSQL or MS SQL Server.
- [Giraffe ![GitHub Repo Stars](https://img.shields.io/github/stars/giraffe-fsharp/Giraffe) ![GitHub last commit](https://img.shields.io/github/last-commit/giraffe-fsharp/Giraffe)](https://github.com/giraffe-fsharp/Giraffe) - Native functional ASP.NET Core web framework for F# developers.
- [Oxpecker ![GitHub Repo Stars](https://img.shields.io/github/stars/Lanayx/Oxpecker) ![GitHub last commit](https://img.shields.io/github/last-commit/Lanayx/Oxpecker)](https://github.com/Lanayx/Oxpecker) - ASP.NET Core based F# framework + supporting tools (ViewEngine, Htmx, OpenApi).
- [Saturn ![GitHub Repo Stars](https://img.shields.io/github/stars/SaturnFramework/Saturn) ![GitHub last commit](https://img.shields.io/github/last-commit/SaturnFramework/Saturn)](https://github.com/SaturnFramework/Saturn) - Opinionated, web development framework for F# which implements the server-side, functional MVC pattern.
- [Suave ![GitHub Repo Stars](https://img.shields.io/github/stars/SuaveIO/suave) ![GitHub last commit](https://img.shields.io/github/last-commit/SuaveIO/suave)](https://github.com/SuaveIO/suave) - A simple web development F# library providing a lightweight web server and a set of combinators to manipulate route flow and task composition.
- [WebSharper ![GitHub Repo Stars](https://img.shields.io/github/stars/intellifactory/websharper) ![GitHub last commit](https://img.shields.io/github/last-commit/intellifactory/websharper)](https://github.com/intellifactory/websharper) - F#-based web programming platform including a compiler from F# code to JavaScript.
<!--lint enable double-link -->

## .NET Core Templates
<!--lint disable awesome-list-item-->
- [ASP.NET Core WebAPI F# Template ![GitHub Repo Stars](https://img.shields.io/github/stars/MNie/FSharpNetCoreWebApiTemplate) ![GitHub last commit](https://img.shields.io/github/last-commit/MNie/FSharpNetCoreWebApiTemplate)](https://github.com/MNie/FSharpNetCoreWebApiTemplate) - `dotnet new -i WebAPI.FSharp.Template::*`
- [Expecto Template ![GitHub Repo Stars](https://img.shields.io/github/stars/MNie/Expecto.Template) ![GitHub last commit](https://img.shields.io/github/last-commit/MNie/Expecto.Template)](https://github.com/MNie/Expecto.Template) - `dotnet new -i Expecto.Template::*`
- [Fable, F# |> Babel](http://fable.io) - `dotnet new -i Fable.Template::*`
- [Fable-elmish ![GitHub Repo Stars](https://img.shields.io/github/stars/fable-compiler/fable-elmish) ![GitHub last commit](https://img.shields.io/github/last-commit/fable-compiler/fable-elmish)](https://github.com/fable-compiler/fable-elmish) - `dotnet new -i Fable.Template.Elmish.React::*`
- [Giraffe Template ![GitHub Repo Stars](https://img.shields.io/github/stars/giraffe-fsharp/giraffe-template) ![GitHub last commit](https://img.shields.io/github/last-commit/giraffe-fsharp/giraffe-template)](https://github.com/giraffe-fsharp/giraffe-template) - `dotnet new -i "giraffe-template::*"`
- [MiniScaffold ![GitHub Repo Stars](https://img.shields.io/github/stars/TheAngryByrd/MiniScaffold) ![GitHub last commit](https://img.shields.io/github/last-commit/TheAngryByrd/MiniScaffold)](https://github.com/TheAngryByrd/MiniScaffold) - F# Template for creating and publishing libraries targeting .NET Full (net45) and Core (netstandard1.6), `dotnet new -i MiniScaffold::*`
- [NancyFx Template ![GitHub Repo Stars](https://img.shields.io/github/stars/MNie/NancyFxCore) ![GitHub last commit](https://img.shields.io/github/last-commit/MNie/NancyFxCore)](https://github.com/MNie/NancyFxCore) - `dotnet new -i NancyFx.Core.Template::*`
- [SAFE Stack Template ![GitHub Repo Stars](https://img.shields.io/github/stars/SAFE-Stack/SAFE-template) ![GitHub last commit](https://img.shields.io/github/last-commit/SAFE-Stack/SAFE-template)](https://github.com/SAFE-Stack/SAFE-template) - `dotnet new -i SAFE.Template::*`
<!--lint enable awesome-list-item-->

## Resources

### Blogs

- [.NET Blog (F# tag)](https://devblogs.microsoft.com/dotnet/tag/f/) - News and discussions about F# from the .NET team.
- [Codesuji](https://codesuji.com) - A community member blog, focusing on functional aspects on F#.
- [Krzysztof Cieslak](https://kcieslak.io/) - A blog of the Ionide maintainer. 
- [Mark Seemann](https://blog.ploeh.dk/) - A blog discussing various aspects of software design.
- [Sergey Tihon (F# Weekly)](https://sergeytihon.com/) - Weekly newsletter collected across the ecosystem.
- [Tomas Petricek](http://tomasp.net/blog/) - A well-known community member working on a diverse set of topics.

### Books

- [Domain Modeling Made Functional by Scott Wlaschin](https://pragprog.com/titles/swdddf/domain-modeling-made-functional/) - Tackle software complexity with domain-driven design and F#.
- [F# in Action by Isaac Abraham](https://www.manning.com/books/f-sharp-in-action) - A practical guide in software development in F#.

### Cheatsheets

- [F# Snips](https://fssnip.net/) - Share your snippets of F# code.
- [F# cheatsheet](https://fsprojects.github.io/fsharp-cheatsheet/) - Quick reference for the main language features.
- [F# tour](https://docs.microsoft.com/en-us/dotnet/articles/fsharp/tour) - Official language tour from Microsoft.
- [Guide for C# devs to learn F# ![GitHub Repo Stars](https://img.shields.io/github/stars/knocte/2fsharp) ![GitHub last commit](https://img.shields.io/github/last-commit/knocte/2fsharp)](https://github.com/knocte/2fsharp/blob/master/csharp2fsharp.md) - A 30-minute F# tutorial for C# programmers, with back-to-back code snippets.
- [Guide for Python devs to learn F# ![GitHub Repo Stars](https://img.shields.io/github/stars/knocte/2fsharp) ![GitHub last commit](https://img.shields.io/github/last-commit/knocte/2fsharp)](https://github.com/knocte/2fsharp/blob/master/python2fsharp.md) - A 30-minute F# tutorial for Python programmers, with back-to-back code snippets.
- [Guide for Rust devs to learn F# ![GitHub Repo Stars](https://img.shields.io/github/stars/Dhghomon/rust-fsharp) ![GitHub last commit](https://img.shields.io/github/last-commit/Dhghomon/rust-fsharp)](https://github.com/Dhghomon/rust-fsharp) - Informal manual for users of Rust and F# to read through to learn about the other language. 
- [Learn F# in Y minutes](https://learnxinyminutes.com/docs/fsharp) - A guide recommended to quickly start programming in F#.

### Community

- [Amplifying F#](https://amplifyingfsharp.io)
- [F# on BlueSky](https://bsky.app/hashtag/fsharp)
- [F# on Discord](https://discord.com/invite/fsharp-196693847965696000)
- [F# on Discourse](https://forums.fsharp.org/)
- [F# on Reddit](https://www.reddit.com/r/fsharp/)
- [F# on Telegram](https://t.me/fsharp_chat)
- [F# on Twitter](https://x.com/hashtag/fsharp)

### Other Lists

- [Awesome .NET! ![GitHub Repo Stars](https://img.shields.io/github/stars/quozd/awesome-dotnet) ![GitHub last commit](https://img.shields.io/github/last-commit/quozd/awesome-dotnet)](https://github.com/quozd/awesome-dotnet) - Collection of awesome .NET libraries, tools, frameworks and software.
- [Companies using F# ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/fsharp-companies) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/fsharp-companies)](https://github.com/fsprojects/fsharp-companies) - Community curated list of companies that use F# (maybe useful if you're looking for a job?)
- [F# Community Projects](http://fsharp.org/community/projects/) - Everything produced by the F# community. 
- [FSharpest](https://www.fsharpest.xyz) - A directory to discover F# tools, libraries and resources.
- [Fable Resources](https://fable.io/resources.html) - A curated list of useful Fable-related tutorials, libraries and software.

### Websites

- [Community for F#](http://c4fsharp.net/) - Links to dojos and recordings of community presentations.
- [Decompiler.com](https://www.decompiler.com/) - Online C#/VB/F# decompiler.
- [DotNetFiddle](https://dotnetfiddle.net/) - Online REPL.
- [F# Software Foundation](http://fsharp.org/) - Main website.
- [F# for Fun and Profit](https://fsharpforfunandprofit.com/) - Reference tutorials.
- [SharpLab](https://sharplab.io/) - C#/VB/F# compiler playground.
- [Try F#](https://try.fsharp.org/) - Online tutorials, currently without execution of code due to Silverlight dependency.
- [cs2fs](https://jindraivanek.gitlab.io/cs2fs-online) - Transform C# code to F# code.
- [fantomas-tools](https://fsprojects.github.io/fantomas-tools) - A set of Fantomas related tools like AST viewer and online bug reporter.

### Videos

- [Amplifying F# YouTube Channel](https://www.youtube.com/@amplifyingfsharp)
- [F# Online YouTube Channel](https://www.youtube.com/@fonline6018)
- [Austin F# Meetup Group Recorded Presentations](http://usergroup.tv/videos/category/group/austin-f-meetup)
- [F# Chats on performance](https://www.youtube.com/watch?v=EIBRoNEpg6c&list=PLqWncHdBPoD4O1sr2Q3W9gAuJ30s09U2r)
- [Fast Dictionary in F#](https://www.youtube.com/watch?v=KMR2y1vcO-s&list=PLqWncHdBPoD4-d_VSZ0MB0IBKQY0rwYLd)
- [Intro to F#](https://www.youtube.com/watch?v=1ioGr701c5Q&list=PLqWncHdBPoD4YEWoXQlRj1tiTc96HZxH8)
- [Topological Sort](https://www.youtube.com/playlist?list=PLqWncHdBPoD5hEK31CcfmTHP-7icw2Xd0)

### Courses

- [Write yourself a scheme in 48 hours using F#](https://write-yourself-a-scheme.pangwa.com/)
