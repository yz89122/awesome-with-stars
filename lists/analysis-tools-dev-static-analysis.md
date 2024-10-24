<!-- 🚨🚨 DON'T EDIT THIS FILE DIRECTLY. Edit `data/tools.yml` instead. 🚨🚨 -->

 <a href="https://analysis-tools.dev/">
   <img alt="Analysis Tools Website" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/redesign.svg" />
 </a>

This repository lists **static analysis tools** for all programming languages, build tools, config files and more. The focus is on tools which improve code quality such as linters and formatters.
The official website, [analysis-tools.dev](https://analysis-tools.dev/) is based on this repository and adds rankings, user comments, and additional resources like videos for each tool.

[![Website](https://img.shields.io/badge/Website-Online-2B5BAE)](https://analysis-tools.dev)
![CI](https://github.com/analysis-tools-dev/static-analysis/workflows/CI/badge.svg)
[![Links ![GitHub Repo Stars](https://img.shields.io/github/stars/analysis-tools-dev/static-analysis) ![GitHub last commit](https://img.shields.io/github/last-commit/analysis-tools-dev/static-analysis)](https://github.com/analysis-tools-dev/static-analysis/actions/workflows/links.yml/badge.svg)](https://github.com/analysis-tools-dev/static-analysis/actions/workflows/links.yml)

## Sponsors

This project would not be possible without the generous support of our sponsors.

<table>
   <tr>
      <td>
         <a href="https://bugprove.com">
            <picture >
               <source width="200px" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/bugprove-dark.svg">
               <img width="200px" alt="BugProve" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/bugprove-light.svg">
            </picture>
         </a>
      </td>
      <td>
         <a href="https://www.betterscan.io">
            <picture >
               <source width="200px" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/betterscan-dark.svg">
               <img width="200px" alt="Betterscan" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/betterscan-light.svg">
            </picture>
         </a>
      </td>
      <td>
         <a href="https://www.pixee.ai/">
            <picture >
               <source width="200px" media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/pixee-light.png">
               <img width="200px" alt="Pixee" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/pixee-dark.png">
            </picture>
         </a>
      </td>
      <td>
         <a href="https://coderabbit.ai">
            <img width="200px" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/code-rabbit.svg" />
         </a>
      </td>
      <td>
         <a href="https://semgrep.dev/">
            <img width="200px" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/semgrep.svg" />
         </a>
      </td>
      <td>
         <a href="https://offensive360.com/">
            <img width="200px" src="https://raw.githubusercontent.com/analysis-tools-dev/assets/master/static/sponsors/offensive360.png" />
         </a>
      </td>
   </tr>
</table>

If you also want to support this project, head over to our [Github sponsors page ![GitHub Repo Stars](https://img.shields.io/github/stars/sponsors/analysis-tools-dev) ![GitHub last commit](https://img.shields.io/github/last-commit/sponsors/analysis-tools-dev)](https://github.com/sponsors/analysis-tools-dev).

## Meaning of Symbols:

- :copyright: stands for proprietary software. All other tools are Open Source.
- :information_source: indicates that the community does not recommend to use this tool for new projects anymore. The icon links to the discussion issue.
- :warning: means that this tool was not updated for more than 1 year, or the repo was archived.

Pull requests are very welcome!  
Also check out the sister project, [awesome-dynamic-analysis ![GitHub Repo Stars](https://img.shields.io/github/stars/mre/awesome-dynamic-analysis) ![GitHub last commit](https://img.shields.io/github/last-commit/mre/awesome-dynamic-analysis)](https://github.com/mre/awesome-dynamic-analysis).

## Table of Contents

#### [Programming Languages](#programming-languages-1)


- [ABAP](#abap)
- [Ada](#ada)
- [Assembly](#asm)
- [Awk](#awk)
- [C](#c)
- [C#](#csharp)
- [C++](#cpp)
- [Clojure](#clojure)
- [CoffeeScript](#coffeescript)
- [ColdFusion](#coldfusion)
- [Crystal](#crystal)
- [Dart](#dart)
- [Delphi](#delphi)
- [Dlang](#dlang)
- [Elixir](#elixir)
- [Elm](#elm)
- [Erlang](#erlang)
- [F#](#fsharp)
- [Fortran](#fortran)
- [Go](#go)
- [Groovy](#groovy)
- [Haskell](#haskell)
- [Haxe](#haxe)
- [Java](#java)
- [JavaScript](#javascript)
- [Julia](#julia)
- [Kotlin](#kotlin)
- [Lua](#lua)
- [MATLAB](#matlab)
- [Nim](#nim)
- [Ocaml](#ocaml)
- [PHP](#php)
- [PL/SQL](#plsql)
- [Perl](#perl)
- [Python](#python)
- [R](#r)
- [Rego](#rego)
- [Ruby](#ruby)
- [Rust](#rust)
- [SQL](#sql)
- [Scala](#scala)
- [Shell](#shell)
- [Swift](#swift)
- [Tcl](#tcl)
- [TypeScript](#typescript)
- [Verilog/SystemVerilog](#verilog)
- [Vim Script](#vim-script)

#### [Multiple Languages](#multiple-languages-1)

#### [Other](#other-1)
<details>
 <summary>Show Other</summary>

- [.env](#dotenv)
- [Ansible](#ansible)
- [Archive](#archive)
- [Azure Resource Manager](#arm)
- [Binaries](#binary)
- [Build tools](#buildtool)
- [CSS/SASS/SCSS](#css)
- [Config Files](#configfile)
- [Configuration Management](#configmanagement)
- [Containers](#container)
- [Continuous Integration](#ci)
- [Deno](#deno)
- [Embedded](#embedded)
- [Embedded Ruby (a.k.a. ERB, eRuby)](#erb)
- [Gherkin](#gherkin)
- [HTML](#html)
- [JSON](#json)
- [Kubernetes](#kubernetes)
- [LaTeX](#latex)
- [Laravel](#laravel)
- [Makefiles](#make)
- [Markdown](#markdown)
- [Metalinter](#meta)
- [Mobile](#mobile)
- [Nix](#nix)
- [Node.js](#nodejs)
- [Packages](#package)
- [Prometheus](#prometheus)
- [Protocol Buffers](#protobuf)
- [Puppet](#puppet)
- [Rails](#rails)
- [Security/SAST](#security)
- [Smart Contracts](#smart-contracts)
- [Support](#support)
- [Template-Languages](#template)
- [Terraform](#terraform)
- [Translation](#translation)
- [Vue.js](#vue)
- [Webassembly](#wasm)
- [Writing](#writing)
- [YAML](#yaml)
- [git](#git)
</details>

---

## Programming Languages

<a name="abap" />
<h2>ABAP</h2>


- [abaplint](https://abaplint.org) — Linter for ABAP, written in TypeScript.

- [abapOpenChecks](https://docs.abapopenchecks.org) — Enhances the SAP Code Inspector with new and customizable checks.


<a name="ada" />
<h2>Ada</h2>


- [Codepeer](https://www.adacore.com/static-analysis/codepeer) :copyright: — Detects run-time and logic errors.

- [Polyspace for Ada](https://www.mathworks.com/products/polyspace-ada.html) :copyright: — Provide code verification that proves the absence of overflow, divide-by-zero, out-of-bounds array access, and certain other run-time errors in source code.

- [SPARK](https://www.adacore.com/about-spark) :copyright: — Static analysis and formal verification toolset for Ada.


<a name="asm" />
<h2>Assembly</h2>


- [STOKE ![GitHub Repo Stars](https://img.shields.io/github/stars/StanfordPL/stoke) ![GitHub last commit](https://img.shields.io/github/last-commit/StanfordPL/stoke)](https://github.com/StanfordPL/stoke) :warning: — A programming-language agnostic stochastic optimizer for the x86_64 instruction set. It uses random search to explore the extremely high-dimensional space of all possible program transformations.


<a name="awk" />
<h2>Awk</h2>


- [gawk --lint](https://www.gnu.org/software/gawk/manual/html_node/Options.html) — Warns about constructs that are dubious or nonportable to other awk implementations.


<a name="c" />
<h2>C</h2>


- [Astrée](https://www.absint.com/astree/index.htm) :copyright: — Astrée automatically proves the absence of runtime errors and invalid con­current behavior in C/C++ applications. It is sound for floating-point computations, very fast, and exceptionally precise. The analyzer also checks for MISRA/CERT/CWE/Adaptive Autosar coding rules and supports qualification for ISO 26262, DO-178C level A, and other safety standards. Jenkins and Eclipse plugins are available.

- [CBMC](http://www.cprover.org/cbmc) — Bounded model-checker for C programs, user-defined assertions, standard assertions, several coverage metric analyses.

- [clang-tidy](https://clang.llvm.org/extra/clang-tidy) — Clang-based C++ linter tool with the (limited) ability to fix issues, too.

- [clazy ![GitHub Repo Stars](https://img.shields.io/github/stars/KDE/clazy) ![GitHub last commit](https://img.shields.io/github/last-commit/KDE/clazy)](https://github.com/KDE/clazy) — Qt-oriented static code analyzer based on the Clang framework. clazy is a compiler plugin which allows clang to understand Qt semantics. You get more than 50 Qt related compiler warnings, ranging from unneeded memory allocations to misusage of API, including fix-its for automatic refactoring.

- [CMetrics ![GitHub Repo Stars](https://img.shields.io/github/stars/MetricsGrimoire/CMetrics) ![GitHub last commit](https://img.shields.io/github/last-commit/MetricsGrimoire/CMetrics)](https://github.com/MetricsGrimoire/CMetrics) — Measures size and complexity for C files.

- [CPAchecker](https://cpachecker.sosy-lab.org) — A tool for configurable software verification of C programs.  The name CPAchecker was chosen to reflect that the tool is based on the CPA concepts and is used for checking software programs.

- [cppcheck](https://cppcheck.sourceforge.io) — Static analysis of C/C++ code.

- [CppDepend](https://www.cppdepend.com) :copyright: — Measure, query and visualize your code and avoid unexpected issues, technical debt and complexity.

- [cpplint ![GitHub Repo Stars](https://img.shields.io/github/stars/google/styleguide) ![GitHub last commit](https://img.shields.io/github/last-commit/google/styleguide)](https://github.com/google/styleguide/tree/gh-pages/cpplint) — Automated C++ checker that follows Google's style guide.

- [cqmetrics ![GitHub Repo Stars](https://img.shields.io/github/stars/dspinellis/cqmetrics) ![GitHub last commit](https://img.shields.io/github/last-commit/dspinellis/cqmetrics)](https://github.com/dspinellis/cqmetrics) — Quality metrics for C code.

- [CScout](https://www.spinellis.gr/cscout) — Complexity and quality metrics for C and C preprocessor code.

- [ENRE-cpp ![GitHub Repo Stars](https://img.shields.io/github/stars/xjtu-enre/ENRE-cpp) ![GitHub last commit](https://img.shields.io/github/last-commit/xjtu-enre/ENRE-cpp)](https://github.com/xjtu-enre/ENRE-cpp) — ENRE (ENtity Relationship Extractor) is a tool for extraction of code entity dependencies or relationships from source code. ENRE-cpp is a ENtity Relationship Extractor for C/C++ based on @eclipse/CDT. (Under development)

- [ESBMC](http://esbmc.org) — ESBMC is an open source, permissively licensed, context-bounded model checker based on satisfiability modulo theories for the verification of single- and multi-threaded C/C++ programs.

- [flawfinder](http://dwheeler.com/flawfinder/) :warning: — Finds possible security weaknesses.

- [flint++ ![GitHub Repo Stars](https://img.shields.io/github/stars/JossWhittle/FlintPlusPlus) ![GitHub last commit](https://img.shields.io/github/last-commit/JossWhittle/FlintPlusPlus)](https://github.com/JossWhittle/FlintPlusPlus) :warning: — Cross-platform, zero-dependency port of flint, a lint program for C++ developed and used at Facebook.

- [Frama-C](https://www.frama-c.com) — A sound and extensible static analyzer for C code.

- [GCC](https://gcc.gnu.org/onlinedocs/gcc/Static-Analyzer-Options.html) — The GCC compiler has static analysis capabilities since version 10. This option is only available if GCC was configured with analyzer support enabled.  It can also output its diagnostics to a JSON file in the SARIF format (from v13).

- [Goblint](https://goblint.in.tum.de) — A static analyzer for the analysis of multi-threaded C programs. Its primary focus is the  detection of data races, but it also reports other runtime errors, such as buffer overflows and null-pointer dereferences.

- [Helix QAC](https://www.perforce.com/products/helix-qac) :copyright: — Enterprise-grade static analysis for embedded software. Supports MISRA, CERT, and AUTOSAR coding standards.

- [IKOS ![GitHub Repo Stars](https://img.shields.io/github/stars/nasa-sw-vnv/ikos) ![GitHub last commit](https://img.shields.io/github/last-commit/nasa-sw-vnv/ikos)](https://github.com/nasa-sw-vnv/ikos) — A sound static analyzer for C/C++ code based on LLVM.

- [Joern](https://joern.io) — Open-source code analysis platform for C/C++ based on code property graphs

- [KLEE](http://klee.github.io/) — A dynamic symbolic execution engine built on top of the LLVM compiler infrastructure.  It can auto-generate test cases for programs such that the test cases exercise as much of the program as possible.

- [LDRA](https://ldra.com) :copyright: — A tool suite including static analysis (TBVISION) to various standards including MISRA C & C++, JSF++ AV, CWE, CERT C, CERT C++ & Custom Rules.

- [MATE](https://galoisinc.github.io/MATE/) :warning: — A suite of tools for interactive program analysis with a focus on hunting for bugs in C and C++ code. MATE unifies application-specific and low-level vulnerability analysis using code property graphs (CPGs), enabling the discovery of highly application-specific vulnerabilities that depend on both implementation details and the high-level semantics of target C/C++ programs.

- [PC-lint](https://pclintplus.com/) :copyright: — Static analysis for C/C++. Runs natively under Windows/Linux/MacOS. Analyzes code for virtually any platform, supporting C11/C18 and C++17.

- [Phasar](https://phasar.org) — A LLVM-based static analysis framework which comes with a taint and type state analysis.

- [Polyspace Bug Finder](https://www.mathworks.com/products/polyspace-bug-finder.html) :copyright: — Identifies run-time errors, concurrency issues, security vulnerabilities, and other defects in C and C++ embedded software.

- [Polyspace Code Prover](https://www.mathworks.com/products/polyspace-code-prover.html) :copyright: — Provide code verification that proves the absence of overflow, divide-by-zero, out-of-bounds array access, and certain other run-time errors in C and C++ source code.

- [scan-build](https://clang-analyzer.llvm.org/scan-build.html) — Frontend to drive the Clang Static Analyzer built into Clang via a regular build.

- [splint](http://splint.org) — Annotation-assisted static program checker.

- [SVF](https://svf-tools.github.io/SVF) — A static tool that enables scalable and precise interprocedural dependence analysis for C and C++ programs.

- [TrustInSoft Analyzer](https://trust-in-soft.com) :copyright: — Exhaustive detection of coding errors and their associated security vulnerabilities. This encompasses a sound undefined behavior detection (buffer overflows, out-of-bounds array accesses, null-pointer dereferences, use-after-free, divide-by-zeros, uninitialized memory accesses, signed overflows, invalid pointer arithmetic, etc.), data flow and control flow verification as well as full functional verification of formal specifications. All versions of C up to C18 and C++ up to C++20 are supported. TrustInSoft Analyzer will acquire ISO 26262 qualification in Q2'2023 (TCL3). A MISRA C checker is also bundled.

- [vera++](https://bitbucket.org/verateam/vera/wiki/Introduction) :warning: — Vera++ is a programmable tool for verification, analysis and transformation of C++ source code.


<a name="csharp" />
<h2>C#</h2>


- [.NET Analyzers](https://github.com/DotNetAnalyzers) — An organization for the development of analyzers (diagnostics and code fixes) using the .NET Compiler Platform.

- [ArchUnitNET ![GitHub Repo Stars](https://img.shields.io/github/stars/TNG/ArchUnitNET) ![GitHub last commit](https://img.shields.io/github/last-commit/TNG/ArchUnitNET)](https://github.com/TNG/ArchUnitNET) — A C# architecture test library to specify and assert architecture rules in C# for automated testing.

- [code-cracker](https://code-cracker.github.io) — An analyzer library for C# and VB that uses Roslyn to produce refactorings, code analysis, and other niceties.

- [CSharpEssentials ![GitHub Repo Stars](https://img.shields.io/github/stars/DustinCampbell/CSharpEssentials) ![GitHub last commit](https://img.shields.io/github/last-commit/DustinCampbell/CSharpEssentials)](https://github.com/DustinCampbell/CSharpEssentials) :warning: — C# Essentials is a collection of Roslyn diagnostic analyzers, code fixes and refactorings that make it easy to work with C# 6 language features.

- [Designite](http://www.designite-tools.com) :copyright: — Designite supports detection of various architecture, design, and implementation smells, computation of various code quality metrics, and trend analysis.

- [Gendarme](https://www.mono-project.com/docs/tools+libraries/tools/gendarme) — Gendarme inspects programs and libraries that contain code in ECMA CIL format (Mono and .NET).

- [Infer# ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/infersharp) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/infersharp)](https://github.com/microsoft/infersharp) :warning: — InferSharp (also referred to as Infer#) is an interprocedural and  scalable static code analyzer for C#. Via the capabilities of Facebook's Infer,  this tool detects null pointer dereferences and resource leaks.

- [Meziantou.Analyzer ![GitHub Repo Stars](https://img.shields.io/github/stars/meziantou/Meziantou.Analyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/meziantou/Meziantou.Analyzer)](https://github.com/meziantou/Meziantou.Analyzer) — A Roslyn analyzer to enforce some good practices in C# in terms of design, usage, security, performance, and style.

- [NDepend](http://www.ndepend.com) :copyright: — Measure, query and visualize your code and avoid unexpected issues, technical debt and complexity.

- [Puma Scan](https://pumasecurity.io) — Puma Scan provides real time secure code analysis for common vulnerabilities (XSS, SQLi, CSRF, LDAPi, crypto, deserialization, etc.) as development teams write code in Visual Studio.

- [Roslynator ![GitHub Repo Stars](https://img.shields.io/github/stars/JosefPihrt/Roslynator) ![GitHub last commit](https://img.shields.io/github/last-commit/JosefPihrt/Roslynator)](https://github.com/JosefPihrt/Roslynator) — A collection of 190+ analyzers and 190+ refactorings for C#, powered by Roslyn.

- [SonarAnalyzer.CSharp ![GitHub Repo Stars](https://img.shields.io/github/stars/SonarSource/sonar-dotnet) ![GitHub last commit](https://img.shields.io/github/last-commit/SonarSource/sonar-dotnet)](https://github.com/SonarSource/sonar-dotnet) — These Roslyn analyzers allow you to produce Clean Code that is safe, reliable, and maintainable by helping you find and correct bugs, vulnerabilities, and code smells in your codebase.

- [VSDiagnostics ![GitHub Repo Stars](https://img.shields.io/github/stars/Vannevelj/VSDiagnostics) ![GitHub last commit](https://img.shields.io/github/last-commit/Vannevelj/VSDiagnostics)](https://github.com/Vannevelj/VSDiagnostics) :warning: — A collection of static analyzers based on Roslyn that integrates with VS.

- [Wintellect.Analyzers ![GitHub Repo Stars](https://img.shields.io/github/stars/Wintellect/Wintellect.Analyzers) ![GitHub last commit](https://img.shields.io/github/last-commit/Wintellect/Wintellect.Analyzers)](https://github.com/Wintellect/Wintellect.Analyzers) — .NET Compiler Platform ("Roslyn") diagnostic analyzers and code fixes.


<a name="cpp" />
<h2>C++</h2>


- [Astrée](https://www.absint.com/astree/index.htm) :copyright: — Astrée automatically proves the absence of runtime errors and invalid con­current behavior in C/C++ applications. It is sound for floating-point computations, very fast, and exceptionally precise. The analyzer also checks for MISRA/CERT/CWE/Adaptive Autosar coding rules and supports qualification for ISO 26262, DO-178C level A, and other safety standards. Jenkins and Eclipse plugins are available.

- [CBMC](http://www.cprover.org/cbmc) — Bounded model-checker for C programs, user-defined assertions, standard assertions, several coverage metric analyses.

- [clang-tidy](https://clang.llvm.org/extra/clang-tidy) — Clang-based C++ linter tool with the (limited) ability to fix issues, too.

- [clazy ![GitHub Repo Stars](https://img.shields.io/github/stars/KDE/clazy) ![GitHub last commit](https://img.shields.io/github/last-commit/KDE/clazy)](https://github.com/KDE/clazy) — Qt-oriented static code analyzer based on the Clang framework. clazy is a compiler plugin which allows clang to understand Qt semantics. You get more than 50 Qt related compiler warnings, ranging from unneeded memory allocations to misusage of API, including fix-its for automatic refactoring.

- [CMetrics ![GitHub Repo Stars](https://img.shields.io/github/stars/MetricsGrimoire/CMetrics) ![GitHub last commit](https://img.shields.io/github/last-commit/MetricsGrimoire/CMetrics)](https://github.com/MetricsGrimoire/CMetrics) — Measures size and complexity for C files.

- [cppcheck](https://cppcheck.sourceforge.io) — Static analysis of C/C++ code.

- [CppDepend](https://www.cppdepend.com) :copyright: — Measure, query and visualize your code and avoid unexpected issues, technical debt and complexity.

- [cpplint ![GitHub Repo Stars](https://img.shields.io/github/stars/google/styleguide) ![GitHub last commit](https://img.shields.io/github/last-commit/google/styleguide)](https://github.com/google/styleguide/tree/gh-pages/cpplint) — Automated C++ checker that follows Google's style guide.

- [cqmetrics ![GitHub Repo Stars](https://img.shields.io/github/stars/dspinellis/cqmetrics) ![GitHub last commit](https://img.shields.io/github/last-commit/dspinellis/cqmetrics)](https://github.com/dspinellis/cqmetrics) — Quality metrics for C code.

- [CScout](https://www.spinellis.gr/cscout) — Complexity and quality metrics for C and C preprocessor code.

- [ENRE-cpp ![GitHub Repo Stars](https://img.shields.io/github/stars/xjtu-enre/ENRE-cpp) ![GitHub last commit](https://img.shields.io/github/last-commit/xjtu-enre/ENRE-cpp)](https://github.com/xjtu-enre/ENRE-cpp) — ENRE (ENtity Relationship Extractor) is a tool for extraction of code entity dependencies or relationships from source code. ENRE-cpp is a ENtity Relationship Extractor for C/C++ based on @eclipse/CDT. (Under development)

- [ESBMC](http://esbmc.org) — ESBMC is an open source, permissively licensed, context-bounded model checker based on satisfiability modulo theories for the verification of single- and multi-threaded C/C++ programs.

- [flawfinder](http://dwheeler.com/flawfinder/) :warning: — Finds possible security weaknesses.

- [flint++ ![GitHub Repo Stars](https://img.shields.io/github/stars/JossWhittle/FlintPlusPlus) ![GitHub last commit](https://img.shields.io/github/last-commit/JossWhittle/FlintPlusPlus)](https://github.com/JossWhittle/FlintPlusPlus) :warning: — Cross-platform, zero-dependency port of flint, a lint program for C++ developed and used at Facebook.

- [Frama-C](https://www.frama-c.com) — A sound and extensible static analyzer for C code.

- [Helix QAC](https://www.perforce.com/products/helix-qac) :copyright: — Enterprise-grade static analysis for embedded software. Supports MISRA, CERT, and AUTOSAR coding standards.

- [IKOS ![GitHub Repo Stars](https://img.shields.io/github/stars/nasa-sw-vnv/ikos) ![GitHub last commit](https://img.shields.io/github/last-commit/nasa-sw-vnv/ikos)](https://github.com/nasa-sw-vnv/ikos) — A sound static analyzer for C/C++ code based on LLVM.

- [Joern](https://joern.io) — Open-source code analysis platform for C/C++ based on code property graphs

- [KLEE](http://klee.github.io/) — A dynamic symbolic execution engine built on top of the LLVM compiler infrastructure.  It can auto-generate test cases for programs such that the test cases exercise as much of the program as possible.

- [LDRA](https://ldra.com) :copyright: — A tool suite including static analysis (TBVISION) to various standards including MISRA C & C++, JSF++ AV, CWE, CERT C, CERT C++ & Custom Rules.

- [MATE](https://galoisinc.github.io/MATE/) :warning: — A suite of tools for interactive program analysis with a focus on hunting for bugs in C and C++ code. MATE unifies application-specific and low-level vulnerability analysis using code property graphs (CPGs), enabling the discovery of highly application-specific vulnerabilities that depend on both implementation details and the high-level semantics of target C/C++ programs.

- [PC-lint](https://pclintplus.com/) :copyright: — Static analysis for C/C++. Runs natively under Windows/Linux/MacOS. Analyzes code for virtually any platform, supporting C11/C18 and C++17.

- [Phasar](https://phasar.org) — A LLVM-based static analysis framework which comes with a taint and type state analysis.

- [Polyspace Bug Finder](https://www.mathworks.com/products/polyspace-bug-finder.html) :copyright: — Identifies run-time errors, concurrency issues, security vulnerabilities, and other defects in C and C++ embedded software.

- [Polyspace Code Prover](https://www.mathworks.com/products/polyspace-code-prover.html) :copyright: — Provide code verification that proves the absence of overflow, divide-by-zero, out-of-bounds array access, and certain other run-time errors in C and C++ source code.

- [scan-build](https://clang-analyzer.llvm.org/scan-build.html) — Frontend to drive the Clang Static Analyzer built into Clang via a regular build.

- [splint](http://splint.org) — Annotation-assisted static program checker.

- [SVF](https://svf-tools.github.io/SVF) — A static tool that enables scalable and precise interprocedural dependence analysis for C and C++ programs.

- [TrustInSoft Analyzer](https://trust-in-soft.com) :copyright: — Exhaustive detection of coding errors and their associated security vulnerabilities. This encompasses a sound undefined behavior detection (buffer overflows, out-of-bounds array accesses, null-pointer dereferences, use-after-free, divide-by-zeros, uninitialized memory accesses, signed overflows, invalid pointer arithmetic, etc.), data flow and control flow verification as well as full functional verification of formal specifications. All versions of C up to C18 and C++ up to C++20 are supported. TrustInSoft Analyzer will acquire ISO 26262 qualification in Q2'2023 (TCL3). A MISRA C checker is also bundled.

- [vera++](https://bitbucket.org/verateam/vera/wiki/Introduction) :warning: — Vera++ is a programmable tool for verification, analysis and transformation of C++ source code.


<a name="clojure" />
<h2>Clojure</h2>


- [clj-kondo ![GitHub Repo Stars](https://img.shields.io/github/stars/borkdude/clj-kondo) ![GitHub last commit](https://img.shields.io/github/last-commit/borkdude/clj-kondo)](https://github.com/borkdude/clj-kondo) — A linter for Clojure code that sparks joy. It informs you about potential errors while you are typing.


<a name="coffeescript" />
<h2>CoffeeScript</h2>


- [coffeelint](https://coffeelint.github.io/) :warning: — A style checker that helps keep CoffeeScript code clean and consistent.


<a name="coldfusion" />
<h2>ColdFusion</h2>


- [Fixinator](https://fixinator.app) :copyright: — Static security code analysis for ColdFusion or CFML code. Designed to work within a CI pipeline or from the developers terminal.


<a name="crystal" />
<h2>Crystal</h2>


- [ameba](https://crystal-ameba.github.io) — A static code analysis tool for Crystal.

- [crystal](https://crystal-lang.org) — The Crystal compiler has built-in linting functionality.


<a name="dart" />
<h2>Dart</h2>


- [Dart Code Metrics](https://pub.dev/packages/dart_code_metrics) :warning: — Additional linter for Dart. Reports code metrics, checks for anti-patterns and provides additional rules for Dart analyzer.

- [effective_dart](https://pub.dev/packages/effective_dart) — Linter rules corresponding to the guidelines in Effective Dart

- [lint ![GitHub Repo Stars](https://img.shields.io/github/stars/passsy/dart-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/passsy/dart-lint)](https://github.com/passsy/dart-lint) — An opinionated, community-driven set of lint rules for Dart and Flutter projects. Like pedantic but stricter

- [Linter for dart](https://dart-lang.github.io/linter) — Style linter for Dart.


<a name="delphi" />
<h2>Delphi</h2>


- [DelphiLint ![GitHub Repo Stars](https://img.shields.io/github/stars/integrated-application-development/delphilint) ![GitHub last commit](https://img.shields.io/github/last-commit/integrated-application-development/delphilint)](https://github.com/integrated-application-development/delphilint) — A Delphi IDE package providing on-the-fly code analysis and linting, powered by SonarDelphi.

- [Fix Insight](https://www.tmssoftware.com/site/fixinsight.asp) :copyright: — A free IDE Plugin for static code analysis. A _Pro_ edition includes a command line tool for automation purposes.

- [Pascal Analyzer](https://peganza.com/products_pal.html) :copyright: — A static code analysis tool with numerous reports. A free _Lite_ version is available with limited reporting.

- [Pascal Expert](https://peganza.com/products_pex.html) :copyright: — IDE plugin for code analysis. Includes a subset of Pascal Analyzer reporting capabilities and is available for Delphi versions 2007 and later.

- [SonarDelphi ![GitHub Repo Stars](https://img.shields.io/github/stars/integrated-application-development/sonar-delphi) ![GitHub last commit](https://img.shields.io/github/last-commit/integrated-application-development/sonar-delphi)](https://github.com/integrated-application-development/sonar-delphi) — Delphi static analyzer for the SonarQube code quality platform.


<a name="dlang" />
<h2>Dlang</h2>


- [D-scanner ![GitHub Repo Stars](https://img.shields.io/github/stars/dlang-community/D-Scanner) ![GitHub last commit](https://img.shields.io/github/last-commit/dlang-community/D-Scanner)](https://github.com/dlang-community/D-Scanner) — D-Scanner is a tool for analyzing D source code.


<a name="elixir" />
<h2>Elixir</h2>


- [credo ![GitHub Repo Stars](https://img.shields.io/github/stars/rrrene/credo) ![GitHub last commit](https://img.shields.io/github/last-commit/rrrene/credo)](https://github.com/rrrene/credo) — A static code analysis tool with a focus on code consistency and teaching.

- [dialyxir ![GitHub Repo Stars](https://img.shields.io/github/stars/jeremyjh/dialyxir) ![GitHub last commit](https://img.shields.io/github/last-commit/jeremyjh/dialyxir)](https://github.com/jeremyjh/dialyxir) — Mix tasks to simplify use of Dialyzer in Elixir projects.

- [sobelow ![GitHub Repo Stars](https://img.shields.io/github/stars/nccgroup/sobelow) ![GitHub last commit](https://img.shields.io/github/last-commit/nccgroup/sobelow)](https://github.com/nccgroup/sobelow) — Security-focused static analysis for the Phoenix Framework.


<a name="elm" />
<h2>Elm</h2>


- [elm-analyse](https://stil4m.github.io/elm-analyse) :warning: — A tool that allows you to analyse your Elm code, identify deficiencies and apply best practices.

- [elm-review](https://package.elm-lang.org/packages/jfmengels/elm-review/latest) — Analyzes whole Elm projects, with a focus on shareable and custom rules written in Elm that add guarantees the Elm compiler doesn't give you.


<a name="erlang" />
<h2>Erlang</h2>


- [dialyzer](https://www.erlang.org/doc/man/dialyzer.html) — The DIALYZER, a DIscrepancy AnaLYZer for ERlang programs. Dialyzer is a static analysis tool that identifies software discrepancies,  such as definite type errors, code that has become dead or unreachable  because of programming error, and unnecessary tests,  in single Erlang modules or entire (sets of) applications.
Dialyzer starts its analysis from either debug-compiled BEAM bytecode  or from Erlang source code. The file and line number of a discrepancy  is reported along with an indication of what the discrepancy is about.  Dialyzer bases its analysis on the concept of success typings,  which allows for sound warnings (no false positives).

- [elvis ![GitHub Repo Stars](https://img.shields.io/github/stars/inaka/elvis) ![GitHub last commit](https://img.shields.io/github/last-commit/inaka/elvis)](https://github.com/inaka/elvis) — Erlang Style Reviewer.

- [Primitive Erlang Security Tool (PEST) ![GitHub Repo Stars](https://img.shields.io/github/stars/okeuday/pest) ![GitHub last commit](https://img.shields.io/github/last-commit/okeuday/pest)](https://github.com/okeuday/pest) — A tool to do a basic scan of Erlang source code and report any function calls that may cause Erlang source code to be insecure.


<a name="fsharp" />
<h2>F#</h2>


- [fantomas](https://fsprojects.github.io/fantomas/) — F# source code formatter.

- [FSharpLint](https://fsprojects.github.io/FSharpLint) — Lint tool for F#.

- [ionide-analyzers](https://ionide.io/ionide-analyzers/) — A collection of F# analyzers, built with the FSharp.Analyzers.SDK.


<a name="fortran" />
<h2>Fortran</h2>


- [fprettify](https://pypi.python.org/pypi/fprettify) — Auto-formatter for modern fortran source code, written in Python.
Fprettify is a tool that provides consistent whitespace, indentation, and delimiter alignment in code, including the ability to change letter case and handle preprocessor directives, all while preserving revision history and tested for editor integration.

- [i-Code CNES for Fortran ![GitHub Repo Stars](https://img.shields.io/github/stars/lequal/i-CodeCNES) ![GitHub last commit](https://img.shields.io/github/last-commit/lequal/i-CodeCNES)](https://github.com/lequal/i-CodeCNES) — An open source static code analysis tool for Fortran 77, Fortran 90 and Shell.


<a name="go" />
<h2>Go</h2>


- [aligncheck](https://gitlab.com/opennota/check) — Find inefficiently packed structs.

- [bodyclose ![GitHub Repo Stars](https://img.shields.io/github/stars/timakin/bodyclose) ![GitHub last commit](https://img.shields.io/github/last-commit/timakin/bodyclose)](https://github.com/timakin/bodyclose) — Checks whether HTTP response body is closed.

- [deadcode ![GitHub Repo Stars](https://img.shields.io/github/stars/tsenart/deadcode) ![GitHub last commit](https://img.shields.io/github/last-commit/tsenart/deadcode)](https://github.com/tsenart/deadcode) — Finds unused code.

- [dingo-hunter ![GitHub Repo Stars](https://img.shields.io/github/stars/nickng/dingo-hunter) ![GitHub last commit](https://img.shields.io/github/last-commit/nickng/dingo-hunter)](https://github.com/nickng/dingo-hunter) :warning: — Static analyser for finding deadlocks in Go.

- [dogsled ![GitHub Repo Stars](https://img.shields.io/github/stars/alexkohler/dogsled) ![GitHub last commit](https://img.shields.io/github/last-commit/alexkohler/dogsled)](https://github.com/alexkohler/dogsled) — Finds assignments/declarations with too many blank identifiers.

- [dupl ![GitHub Repo Stars](https://img.shields.io/github/stars/mibk/dupl) ![GitHub last commit](https://img.shields.io/github/last-commit/mibk/dupl)](https://github.com/mibk/dupl) :warning: — Reports potentially duplicated code.

- [errcheck ![GitHub Repo Stars](https://img.shields.io/github/stars/kisielk/errcheck) ![GitHub last commit](https://img.shields.io/github/last-commit/kisielk/errcheck)](https://github.com/kisielk/errcheck) — Check that error return values are used.

- [errwrap ![GitHub Repo Stars](https://img.shields.io/github/stars/fatih/errwrap) ![GitHub last commit](https://img.shields.io/github/last-commit/fatih/errwrap)](https://github.com/fatih/errwrap) — Wrap and fix Go errors with the new %w verb directive.  This tool analyzes fmt.Errorf() calls and reports calls that contain a verb directive that  is different than the new %w verb directive introduced in Go v1.13.  It's also capable of rewriting calls to use the new %w wrap verb directive.

- [flen ![GitHub Repo Stars](https://img.shields.io/github/stars/lafolle/flen) ![GitHub last commit](https://img.shields.io/github/last-commit/lafolle/flen)](https://github.com/lafolle/flen) — Get info on length of functions in a Go package.

- [Go Meta Linter ![GitHub Repo Stars](https://img.shields.io/github/stars/alecthomas/gometalinter) ![GitHub last commit](https://img.shields.io/github/last-commit/alecthomas/gometalinter)](https://github.com/alecthomas/gometalinter) :warning: — Concurrently run Go lint tools and normalise their output. Use `golangci-lint` for new projects.

- [go tool vet --shadow](https://golang.org/cmd/vet#hdr-Shadowed_variables) — Reports variables that may have been unintentionally shadowed.

- [go vet](https://golang.org/cmd/vet) — Examines Go source code and reports suspicious.

- [go-consistent ![GitHub Repo Stars](https://img.shields.io/github/stars/Quasilyte/go-consistent) ![GitHub last commit](https://img.shields.io/github/last-commit/Quasilyte/go-consistent)](https://github.com/Quasilyte/go-consistent) — Analyzer that helps you to make your Go programs more consistent.

- [go-critic ![GitHub Repo Stars](https://img.shields.io/github/stars/go-critic/go-critic) ![GitHub last commit](https://img.shields.io/github/last-commit/go-critic/go-critic)](https://github.com/go-critic/go-critic) — Go source code linter that maintains checks which are currently not implemented in other linters.

- [go/ast](https://golang.org/pkg/go/ast) — Package ast declares the types used to represent syntax trees for Go packages.

- [goast ![GitHub Repo Stars](https://img.shields.io/github/stars/m-mizutani/goast) ![GitHub last commit](https://img.shields.io/github/last-commit/m-mizutani/goast)](https://github.com/m-mizutani/goast) :warning: — Go AST (Abstract Syntax Tree) based static analysis tool with Rego.

- [gochecknoglobals ![GitHub Repo Stars](https://img.shields.io/github/stars/leighmcculloch/gochecknoglobals) ![GitHub last commit](https://img.shields.io/github/last-commit/leighmcculloch/gochecknoglobals)](https://github.com/leighmcculloch/gochecknoglobals) :warning: — Checks that no globals are present.

- [goconst ![GitHub Repo Stars](https://img.shields.io/github/stars/jgautheron/goconst) ![GitHub last commit](https://img.shields.io/github/last-commit/jgautheron/goconst)](https://github.com/jgautheron/goconst) — Finds repeated strings that could be replaced by a constant.

- [gocyclo ![GitHub Repo Stars](https://img.shields.io/github/stars/fzipp/gocyclo) ![GitHub last commit](https://img.shields.io/github/last-commit/fzipp/gocyclo)](https://github.com/fzipp/gocyclo) :warning: — Calculate cyclomatic complexities of functions in Go source code.

- [gofmt -s](https://golang.org/cmd/gofmt) — Checks if the code is properly formatted and could not be further simplified.

- [gofumpt ![GitHub Repo Stars](https://img.shields.io/github/stars/mvdan/gofumpt) ![GitHub last commit](https://img.shields.io/github/last-commit/mvdan/gofumpt)](https://github.com/mvdan/gofumpt) — Enforce a stricter format than `gofmt`, while being backwards-compatible.  That is, `gofumpt` is happy with a subset of the formats that `gofmt` is happy with.
The tool is a fork of `gofmt` as of Go 1.19, and requires Go 1.18 or later.  It can be used as a drop-in replacement to format your Go code, and running gofmt  after gofumpt should produce no changes.
`gofumpt` will never add rules which disagree with `gofmt` formatting. So we extend `gofmt` rather than compete with it.

- [goimports](https://pkg.go.dev/golang.org/x/tools/cmd/goimports) — Checks missing or unreferenced package imports.

- [gokart ![GitHub Repo Stars](https://img.shields.io/github/stars/praetorian-inc/gokart) ![GitHub last commit](https://img.shields.io/github/last-commit/praetorian-inc/gokart)](https://github.com/praetorian-inc/gokart) — Golang security analysis with a focus on minimizing false positives. It is capable of tracing the source of variables and function arguments  to determine whether input sources are safe.

- [GolangCI-Lint](https://golangci-lint.run) — Alternative to `Go Meta Linter`: GolangCI-Lint is a linters aggregator.

- [golint ![GitHub Repo Stars](https://img.shields.io/github/stars/golang/lint) ![GitHub last commit](https://img.shields.io/github/last-commit/golang/lint)](https://github.com/golang/lint) — Prints out coding style mistakes in Go source code.

- [goreporter ![GitHub Repo Stars](https://img.shields.io/github/stars/360EntSecGroup-Skylar/goreporter) ![GitHub last commit](https://img.shields.io/github/last-commit/360EntSecGroup-Skylar/goreporter)](https://github.com/360EntSecGroup-Skylar/goreporter) — Concurrently runs many linters and normalises their output to a report.

- [goroutine-inspect ![GitHub Repo Stars](https://img.shields.io/github/stars/linuxerwang/goroutine-inspect) ![GitHub last commit](https://img.shields.io/github/last-commit/linuxerwang/goroutine-inspect)](https://github.com/linuxerwang/goroutine-inspect) — An interactive tool to analyze Golang goroutine dump.

- [gosec (gas)](https://securego.io) — Inspects source code for security problems by scanning the Go AST.

- [gotype](https://pkg.go.dev/golang.org/x/tools/cmd/gotype) — Syntactic and semantic analysis similar to the Go compiler.

- [govulncheck](https://go.dev/blog/vuln) — Govulncheck reports known vulnerabilities that affect Go code.  It uses static analysis of source code or a binary's symbol table to narrow down reports to only those that could affect the application.
By default, govulncheck makes requests to the Go vulnerability database at https://vuln.go.dev. Requests to the vulnerability database contain only module paths, not code or other properties of your program.

- [ineffassign ![GitHub Repo Stars](https://img.shields.io/github/stars/gordonklaus/ineffassign) ![GitHub last commit](https://img.shields.io/github/last-commit/gordonklaus/ineffassign)](https://github.com/gordonklaus/ineffassign) — Detect ineffectual assignments in Go code.

- [interfacer ![GitHub Repo Stars](https://img.shields.io/github/stars/mvdan/interfacer) ![GitHub last commit](https://img.shields.io/github/last-commit/mvdan/interfacer)](https://github.com/mvdan/interfacer) :warning: — Suggest narrower interfaces that can be used.

- [lll ![GitHub Repo Stars](https://img.shields.io/github/stars/walle/lll) ![GitHub last commit](https://img.shields.io/github/last-commit/walle/lll)](https://github.com/walle/lll) :warning: — Report long lines.

- [maligned ![GitHub Repo Stars](https://img.shields.io/github/stars/mdempsky/maligned) ![GitHub last commit](https://img.shields.io/github/last-commit/mdempsky/maligned)](https://github.com/mdempsky/maligned) :warning: — Detect structs that would take less memory if their fields were sorted.

- [misspell ![GitHub Repo Stars](https://img.shields.io/github/stars/client9/misspell) ![GitHub last commit](https://img.shields.io/github/last-commit/client9/misspell)](https://github.com/client9/misspell) — Finds commonly misspelled English words.

- [nakedret ![GitHub Repo Stars](https://img.shields.io/github/stars/alexkohler/nakedret) ![GitHub last commit](https://img.shields.io/github/last-commit/alexkohler/nakedret)](https://github.com/alexkohler/nakedret) — Finds naked returns.

- [nargs ![GitHub Repo Stars](https://img.shields.io/github/stars/alexkohler/nargs) ![GitHub last commit](https://img.shields.io/github/last-commit/alexkohler/nargs)](https://github.com/alexkohler/nargs) — Finds unused arguments in function declarations.

- [prealloc ![GitHub Repo Stars](https://img.shields.io/github/stars/alexkohler/prealloc) ![GitHub last commit](https://img.shields.io/github/last-commit/alexkohler/prealloc)](https://github.com/alexkohler/prealloc) — Finds slice declarations that could potentially be preallocated.

- [Reviewdog ![GitHub Repo Stars](https://img.shields.io/github/stars/haya14busa/reviewdog) ![GitHub last commit](https://img.shields.io/github/last-commit/haya14busa/reviewdog)](https://github.com/haya14busa/reviewdog) — A tool for posting review comments from any linter in any code hosting service.

- [revive](https://revive.run) — Fast, configurable, extensible, flexible, and beautiful linter for Go. Drop-in replacement of golint.

- [safesql ![GitHub Repo Stars](https://img.shields.io/github/stars/stripe/safesql) ![GitHub last commit](https://img.shields.io/github/last-commit/stripe/safesql)](https://github.com/stripe/safesql) :warning: — Static analysis tool for Golang that protects against SQL injections.

- [shisho ![GitHub Repo Stars](https://img.shields.io/github/stars/flatt-security/shisho) ![GitHub last commit](https://img.shields.io/github/last-commit/flatt-security/shisho)](https://github.com/flatt-security/shisho) :warning: — A lightweight static code analyzer designed for developers and security teams. It allows you to analyze and transform source code with an intuitive DSL similar to sed, but for code.

- [staticcheck](https://staticcheck.io) — Go static analysis that specialises in finding bugs, simplifying code and improving performance.

- [structcheck](https://gitlab.com/opennota/check) — Find unused struct fields.

- [structslop ![GitHub Repo Stars](https://img.shields.io/github/stars/orijtech/structslop) ![GitHub last commit](https://img.shields.io/github/last-commit/orijtech/structslop)](https://github.com/orijtech/structslop) — Static analyzer for Go that recommends struct field rearrangements to provide for maximum space/allocation efficiency

- [test](https://pkg.go.dev/testing) — Show location of test failures from the stdlib testing module.

- [unconvert ![GitHub Repo Stars](https://img.shields.io/github/stars/mdempsky/unconvert) ![GitHub last commit](https://img.shields.io/github/last-commit/mdempsky/unconvert)](https://github.com/mdempsky/unconvert) :warning: — Detect redundant type conversions.

- [unparam ![GitHub Repo Stars](https://img.shields.io/github/stars/mvdan/unparam) ![GitHub last commit](https://img.shields.io/github/last-commit/mvdan/unparam)](https://github.com/mvdan/unparam) — Find unused function parameters.

- [varcheck](https://gitlab.com/opennota/check) — Find unused global variables and constants.

- [wsl ![GitHub Repo Stars](https://img.shields.io/github/stars/bombsimon/wsl) ![GitHub last commit](https://img.shields.io/github/last-commit/bombsimon/wsl)](https://github.com/bombsimon/wsl) — Enforces empty lines at the right places.


<a name="groovy" />
<h2>Groovy</h2>


- [CodeNarc](https://codenarc.github.io/CodeNarc) — A static analysis tool for Groovy source code, enabling monitoring and enforcement of many coding standards and best practices.


<a name="haskell" />
<h2>Haskell</h2>


- [brittany ![GitHub Repo Stars](https://img.shields.io/github/stars/lspitzner/brittany) ![GitHub last commit](https://img.shields.io/github/last-commit/lspitzner/brittany)](https://github.com/lspitzner/brittany) :warning: — Haskell source code formatter

- [HLint ![GitHub Repo Stars](https://img.shields.io/github/stars/ndmitchell/hlint) ![GitHub last commit](https://img.shields.io/github/last-commit/ndmitchell/hlint)](https://github.com/ndmitchell/hlint) — HLint is a tool for suggesting possible improvements to Haskell code.

- [Liquid Haskell](https://ucsd-progsys.github.io/liquidhaskell-blog/) — Liquid Haskell is a refinement type checker for Haskell programs.

- [Stan](https://kowainik.github.io/projects/stan) — Stan is a command-line tool for analysing Haskell projects and outputting discovered vulnerabilities in a helpful way with possible solutions for detected problems.

- [Weeder ![GitHub Repo Stars](https://img.shields.io/github/stars/ocharles/weeder) ![GitHub last commit](https://img.shields.io/github/last-commit/ocharles/weeder)](https://github.com/ocharles/weeder) — A tool for detecting dead exports or package imports in Haskell code.


<a name="haxe" />
<h2>Haxe</h2>


- [Haxe Checkstyle](https://haxecheckstyle.github.io/docs/haxe-checkstyle/home.html) — A static analysis tool to help developers write Haxe code that adheres to a coding standard.


<a name="java" />
<h2>Java</h2>


- [Checker Framework](https://checkerframework.org) — Pluggable type-checking for Java.  This is not just a bug-finder, but a verification tool that gives a guarantee of correctness.  It comes with 27 pre-built type systems, and it enables users to define their own type system; the manual lists over 30 user-contributed type systems.

- [checkstyle](https://checkstyle.org) — Checking Java source code for adherence to a Code Standard or set of validation rules (best practices).

- [ck ![GitHub Repo Stars](https://img.shields.io/github/stars/mauricioaniche/ck) ![GitHub last commit](https://img.shields.io/github/last-commit/mauricioaniche/ck)](https://github.com/mauricioaniche/ck) — Calculates Chidamber and Kemerer object-oriented metrics by processing the source Java files.

- [ckjm](http://www.spinellis.gr/sw/ckjm) — Calculates Chidamber and Kemerer object-oriented metrics by processing the bytecode of compiled Java files.

- [CogniCrypt](https://www.eclipse.org/cognicrypt) — Checks Java source and byte code for incorrect uses of cryptographic APIs.

- [Dataflow Framework ![GitHub Repo Stars](https://img.shields.io/github/stars/typetools/checker-framework) ![GitHub last commit](https://img.shields.io/github/last-commit/typetools/checker-framework)](https://github.com/typetools/checker-framework) — An industrial-strength dataflow framework for Java. The Dataflow Framework is used in the Checker Framework, Google’s Error Prone, Uber’s NullAway, Meta’s Nullsafe, and in other contexts. It is distributed with the Checker Framework.

- [DesigniteJava](http://www.designite-tools.com/designitejava) :copyright: — DesigniteJava supports detection of various architecture, design, and implementation smells along with computation of various code quality metrics.

- [Diffblue](https://www.diffblue.com/) :copyright: — Diffblue is a software company that provides AI-powered code analysis and testing solutions for software development teams.
Its technology helps developers automate testing, find bugs, and reduce manual labor in their software development processes. The company's main product, Diffblue Cover, uses AI to generate and run unit tests for Java code, helping to catch errors and improve code quality.

- [Doop](https://bitbucket.org/yanniss/doop) — Doop is a declarative framework for static analysis of Java/Android programs, centered on pointer analysis algorithms. Doop provides a large variety of analyses and also the surrounding scaffolding to run an analysis end-to-end (fact generation, processing, statistics, etc.).

- [ENRE-java ![GitHub Repo Stars](https://img.shields.io/github/stars/xjtu-enre/ENRE-java) ![GitHub last commit](https://img.shields.io/github/last-commit/xjtu-enre/ENRE-java)](https://github.com/xjtu-enre/ENRE-java) — ENRE (ENtity Relationship Extractor) is a tool for extraction of code entity dependencies or relationships from source code. ENRE-java is a ENtity Relationship Extractor for Java projects based on @Eclipse JDT/parser.

- [Error Prone](https://errorprone.info) — Catch common Java mistakes as compile-time errors.

- [fb-contrib](http://fb-contrib.sourceforge.net) — A plugin for FindBugs with additional bug detectors.

- [forbidden-apis ![GitHub Repo Stars](https://img.shields.io/github/stars/policeman-tools/forbidden-apis) ![GitHub last commit](https://img.shields.io/github/last-commit/policeman-tools/forbidden-apis)](https://github.com/policeman-tools/forbidden-apis) — Detects and forbids invocations of specific method/class/field (like reading from a text stream without a charset). Maven/Gradle/Ant compatible.

- [google-java-format ![GitHub Repo Stars](https://img.shields.io/github/stars/google/google-java-format) ![GitHub last commit](https://img.shields.io/github/last-commit/google/google-java-format)](https://github.com/google/google-java-format) — Reformats Java source code to comply with Google Java Style

- [HuntBugs ![GitHub Repo Stars](https://img.shields.io/github/stars/amaembo/huntbugs) ![GitHub last commit](https://img.shields.io/github/last-commit/amaembo/huntbugs)](https://github.com/amaembo/huntbugs) :warning: — Bytecode static analyzer tool based on Procyon Compiler Tools aimed to supersede FindBugs.

- [IntelliJ IDEA](https://www.jetbrains.com/idea) :copyright: — Comes bundled with a lot of inspections for Java and Kotlin and includes tools for refactoring, formatting and more.

- [JArchitect](https://www.jarchitect.com) :copyright: — Measure, query and visualize your code and avoid unexpected issues, technical debt and complexity.

- [JBMC](https://www.cprover.org/jbmc) — Bounded model-checker for Java (bytecode), verifies user-defined assertions, standard assertions, several coverage metric analyses.

- [Mariana Trench](https://mariana-tren.ch/) — Our security focused static analysis tool for Android and Java applications. Mariana Trench analyzes Dalvik bytecode and is built to run fast on large codebases (10s of millions of lines of code). It can find vulnerabilities as code changes, before it ever lands in your repository.

- [NullAway ![GitHub Repo Stars](https://img.shields.io/github/stars/uber/NullAway) ![GitHub last commit](https://img.shields.io/github/last-commit/uber/NullAway)](https://github.com/uber/NullAway) — Type-based null-pointer checker with low build-time overhead; an [Error Prone](http://errorprone.info/) plugin.

- [OWASP Dependency Check](https://owasp.org/www-project-dependency-check) — Checks dependencies for known, publicly disclosed, vulnerabilities.

- [qulice](https://www.qulice.com) — Combines a few (pre-configured) static analysis tools (checkstyle, PMD, Findbugs, ...).

- [RefactorFirst ![GitHub Repo Stars](https://img.shields.io/github/stars/jimbethancourt/RefactorFirst) ![GitHub last commit](https://img.shields.io/github/last-commit/jimbethancourt/RefactorFirst)](https://github.com/jimbethancourt/RefactorFirst) — Identifies and prioritizes God Classes and Highly Coupled classes in Java codebases you should refactor first.

- [Soot](https://soot-oss.github.io/soot) — A framework for analyzing and transforming Java and Android applications.

- [Spoon](https://spoon.gforge.inria.fr) — Spoon is a metaprogramming library to analyze and transform Java source code (incl Java 9, 10, 11, 12, 13, 14). It parses source files to build a well-designed AST with powerful analysis and transformation API. Can be integrated in Maven and Gradle.

- [SpotBugs](https://spotbugs.github.io) — SpotBugs is FindBugs' successor. A tool for static analysis to look for bugs in Java code.

- [steady](https://eclipse.github.io/steady/) — Analyses your Java applications for open-source dependencies with known vulnerabilities, using both static analysis and testing to determine code context and usage for greater accuracy.

- [Violations Lib ![GitHub Repo Stars](https://img.shields.io/github/stars/tomasbjerre/violations-lib) ![GitHub last commit](https://img.shields.io/github/last-commit/tomasbjerre/violations-lib)](https://github.com/tomasbjerre/violations-lib) — Java library for parsing report files from static code analysis. Used by a bunch of Jenkins, Maven and Gradle plugins.


<a name="javascript" />
<h2>JavaScript</h2>


- [aether](http://aetherjs.com) :warning: — Lint, analyze, normalize, transform, sandbox, run, step through, and visualize user JavaScript, in node or the browser.

- [Closure Compiler](https://developers.google.com/closure/compiler) — A compiler tool to increase efficiency, reduce size, and provide code warnings in JavaScript files.

- [ClosureLinter ![GitHub Repo Stars](https://img.shields.io/github/stars/google/closure-linter) ![GitHub last commit](https://img.shields.io/github/last-commit/google/closure-linter)](https://github.com/google/closure-linter) :warning: — Ensures that all of your project's JavaScript code follows the guidelines in the Google JavaScript Style Guide. It can also automatically fix many common errors.

- [complexity-report ![GitHub Repo Stars](https://img.shields.io/github/stars/escomplex/complexity-report) ![GitHub last commit](https://img.shields.io/github/last-commit/escomplex/complexity-report)](https://github.com/escomplex/complexity-report) :warning: — Software complexity analysis for JavaScript projects.

- [DeepScan](https://deepscan.io) :copyright: — An analyzer for JavaScript which targets runtime errors and quality issues rather than coding conventions.

- [es6-plato ![GitHub Repo Stars](https://img.shields.io/github/stars/the-simian/es6-plato) ![GitHub last commit](https://img.shields.io/github/last-commit/the-simian/es6-plato)](https://github.com/the-simian/es6-plato) :warning: — Visualize JavaScript (ES6) source complexity.

- [escomplex ![GitHub Repo Stars](https://img.shields.io/github/stars/jared-stilwell/escomplex) ![GitHub last commit](https://img.shields.io/github/last-commit/jared-stilwell/escomplex)](https://github.com/jared-stilwell/escomplex) :warning: — Software complexity analysis of JavaScript-family abstract syntax trees.

- [Esprima](https://esprima.org) :warning: — ECMAScript parsing infrastructure for multipurpose analysis.

- [flow](https://flow.org) — A static type checker for JavaScript.

- [hegel](https://hegel.js.org) — A static type checker for JavaScript with a bias on type inference and strong type systems.

- [jshint](https://jshint.com/about) [:information_source:](<https://github.com/analysis-tools-dev/static-analysis/issues/223>) — Detect errors and potential problems in JavaScript code and enforce your team's coding conventions.

- [JSLint ![GitHub Repo Stars](https://img.shields.io/github/stars/douglascrockford/JSLint) ![GitHub last commit](https://img.shields.io/github/last-commit/douglascrockford/JSLint)](https://github.com/douglascrockford/JSLint) [:information_source:](<https://github.com/analysis-tools-dev/static-analysis/issues/223>) — The JavaScript Code Quality Tool.

- [JSPrime](https://dpnishant.github.io/jsprime) :warning: — Static security analysis tool.

- [NodeJSScan](https://opensecurity.in) :warning: — A static security code scanner for Node.js applications powered by libsast and semgrep that builds on the njsscan cli tool. It features a UI with various dashboards about an application's security status.

- [plato ![GitHub Repo Stars](https://img.shields.io/github/stars/es-analysis/plato) ![GitHub last commit](https://img.shields.io/github/last-commit/es-analysis/plato)](https://github.com/es-analysis/plato) :warning: — Visualize JavaScript source complexity.

- [Polymer-analyzer ![GitHub Repo Stars](https://img.shields.io/github/stars/Polymer/tools) ![GitHub last commit](https://img.shields.io/github/last-commit/Polymer/tools)](https://github.com/Polymer/tools/tree/master/packages/analyzer) — A static analysis framework for Web Components.

- [retire.js](https://retirejs.github.io/retire.js) — Scanner detecting the use of JavaScript libraries with known vulnerabilities.

- [RSLint](http://rslint.org/) :warning: — A (WIP) JavaScript linter written in Rust designed to be as fast as possible, customizable, and easy to use.

- [standard](http://standardjs.com) — An npm module that checks for Javascript Styleguide issues.

- [tern](https://ternjs.net) — A JavaScript code analyzer for deep, cross-editor language support.

- [TypL](https://typl.dev) :warning: — With TypL, you just write completely standard JS, and the tool figures out your types via powerful inferencing.

- [xo ![GitHub Repo Stars](https://img.shields.io/github/stars/xojs/xo) ![GitHub last commit](https://img.shields.io/github/last-commit/xojs/xo)](https://github.com/xojs/xo) — Opinionated but configurable ESLint wrapper with lots of goodies included. Enforces strict and readable code.

- [yardstick ![GitHub Repo Stars](https://img.shields.io/github/stars/calmh/yardstick) ![GitHub last commit](https://img.shields.io/github/last-commit/calmh/yardstick)](https://github.com/calmh/yardstick) :warning: — Javascript code metrics.


<a name="julia" />
<h2>Julia</h2>


- [JET ![GitHub Repo Stars](https://img.shields.io/github/stars/aviatesk/JET.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/aviatesk/JET.jl)](https://github.com/aviatesk/JET.jl) — Static type inference system to detect bugs and type instabilities.

- [StaticLint ![GitHub Repo Stars](https://img.shields.io/github/stars/julia-vscode/StaticLint.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/julia-vscode/StaticLint.jl)](https://github.com/julia-vscode/StaticLint.jl) — Static Code Analysis for Julia


<a name="kotlin" />
<h2>Kotlin</h2>


- [detekt](https://detekt.github.io/detekt) — Static code analysis for Kotlin code.

- [diktat](https://diktat.saveourtool.com) — Strict coding standard for Kotlin and a linter that detects and auto-fixes code smells.

- [ktfmt](https://facebook.github.io/ktfmt/) — A program that reformats Kotlin source code to comply with the common community standard for Kotlin code conventions.
A ktfmt IntelliJ plugin is available from the plugin repository. To install it, go to your IDE's settings and select the Plugins category. Click the Marketplace tab, search for the ktfmt plugin, and click the Install button.

- [ktlint](https://ktlint.github.io) — An anti-bikeshedding Kotlin linter with built-in formatter.


<a name="lua" />
<h2>Lua</h2>


- [luacheck ![GitHub Repo Stars](https://img.shields.io/github/stars/lunarmodules/luacheck) ![GitHub last commit](https://img.shields.io/github/last-commit/lunarmodules/luacheck)](https://github.com/lunarmodules/luacheck) — A tool for linting and static analysis of Lua code.

- [lualint ![GitHub Repo Stars](https://img.shields.io/github/stars/philips/lualint) ![GitHub last commit](https://img.shields.io/github/last-commit/philips/lualint)](https://github.com/philips/lualint) — lualint performs luac-based static analysis of global variable usage in Lua source code.

- [Luanalysis](https://plugins.jetbrains.com/plugin/14698-luanalysis) — An IDE for statically typed Lua development.


<a name="matlab" />
<h2>MATLAB</h2>


- [mlint](https://mathworks.com/help/matlab/ref/mlint.html) :copyright: — Check MATLAB code files for possible problems.


<a name="nim" />
<h2>Nim</h2>


- [DrNim](https://nim-lang.org/docs/drnim.html) — DrNim combines the Nim frontend with the Z3 proof engine in order to allow verify / validate software written in Nim.

- [nimfmt ![GitHub Repo Stars](https://img.shields.io/github/stars/FedericoCeratto/nimfmt) ![GitHub last commit](https://img.shields.io/github/last-commit/FedericoCeratto/nimfmt)](https://github.com/FedericoCeratto/nimfmt) — Nim code formatter / linter / style checker


<a name="ocaml" />
<h2>Ocaml</h2>


- [Sys ![GitHub Repo Stars](https://img.shields.io/github/stars/PLSysSec/sys) ![GitHub last commit](https://img.shields.io/github/last-commit/PLSysSec/sys)](https://github.com/PLSysSec/sys) — A static/symbolic Tool for finding bugs in (browser) code. It uses the LLVM AST to find bugs like uninitialized memory access.

- [VeriFast ![GitHub Repo Stars](https://img.shields.io/github/stars/verifast/verifast) ![GitHub last commit](https://img.shields.io/github/last-commit/verifast/verifast)](https://github.com/verifast/verifast) — A tool for modular formal verification of correctness properties of single-threaded and multithreaded  C and Java programs annotated with preconditions and postconditions written in separation logic.  To express rich specifications, the programmer can define inductive datatypes,  primitive recursive pure functions over these datatypes, and abstract separation logic predicates.


<a name="php" />
<h2>PHP</h2>


- [CakeFuzzer](https://zigrin.com/tools/cake-fuzzer/) — Web application security testing tool for CakePHP-based web applications. CakeFuzzer employs a predefined set of attacks that are randomly modified before execution. Leveraging its deep understanding of the Cake PHP framework, Cake Fuzzer launches attacks on all potential application entry points.

- [churn-php ![GitHub Repo Stars](https://img.shields.io/github/stars/bmitch/churn-php) ![GitHub last commit](https://img.shields.io/github/last-commit/bmitch/churn-php)](https://github.com/bmitch/churn-php) — Helps discover good candidates for refactoring.

- [composer-dependency-analyser ![GitHub Repo Stars](https://img.shields.io/github/stars/shipmonk-rnd/composer-dependency-analyser) ![GitHub last commit](https://img.shields.io/github/last-commit/shipmonk-rnd/composer-dependency-analyser)](https://github.com/shipmonk-rnd/composer-dependency-analyser) — Fast detection of composer dependency issues.

* 💪 Powerful: Detects unused, shadow and misplaced composer dependencies
* ⚡ Performant: Scans 15 000 files in 2s!
* ⚙️ Configurable: Fine-grained ignores via PHP config
* 🕸️ Lightweight: No composer dependencies
* 🍰 Easy-to-use: No config needed for first try
* ✨ Compatible: PHP >= 7.2


- [dephpend ![GitHub Repo Stars](https://img.shields.io/github/stars/mihaeu/dephpend) ![GitHub last commit](https://img.shields.io/github/last-commit/mihaeu/dephpend)](https://github.com/mihaeu/dephpend) — Dependency analysis tool.

- [deprecation-detector ![GitHub Repo Stars](https://img.shields.io/github/stars/sensiolabs-de/deprecation-detector) ![GitHub last commit](https://img.shields.io/github/last-commit/sensiolabs-de/deprecation-detector)](https://github.com/sensiolabs-de/deprecation-detector) — Finds usages of deprecated (Symfony) code.

- [deptrac ![GitHub Repo Stars](https://img.shields.io/github/stars/sensiolabs-de/deptrac) ![GitHub last commit](https://img.shields.io/github/last-commit/sensiolabs-de/deptrac)](https://github.com/sensiolabs-de/deptrac) — Enforce rules for dependencies between software layers.

- [DesignPatternDetector ![GitHub Repo Stars](https://img.shields.io/github/stars/Halleck45/DesignPatternDetector) ![GitHub last commit](https://img.shields.io/github/last-commit/Halleck45/DesignPatternDetector)](https://github.com/Halleck45/DesignPatternDetector) — Detection of design patterns in PHP code.

- [EasyCodingStandard](https://www.tomasvotruba.com/blog/2017/05/03/combine-power-of-php-code-sniffer-and-php-cs-fixer-in-3-lines) — Combine [PHP_CodeSniffer ![GitHub Repo Stars](https://img.shields.io/github/stars/squizlabs/PHP_CodeSniffer) ![GitHub last commit](https://img.shields.io/github/last-commit/squizlabs/PHP_CodeSniffer)](https://github.com/squizlabs/PHP_CodeSniffer) and [PHP-CS-Fixer ![GitHub Repo Stars](https://img.shields.io/github/stars/FriendsOfPHP/PHP-CS-Fixer) ![GitHub last commit](https://img.shields.io/github/last-commit/FriendsOfPHP/PHP-CS-Fixer)](https://github.com/FriendsOfPHP/PHP-CS-Fixer).

- [Enlightn](https://www.laravel-enlightn.com/) — A static and dynamic analysis tool for Laravel applications that provides recommendations to improve the performance, security and code reliability of Laravel apps. Contains 120 automated checks.

- [exakat](https://www.exakat.io) — An automated code reviewing engine for PHP.

- [GrumPHP ![GitHub Repo Stars](https://img.shields.io/github/stars/phpro/grumphp) ![GitHub last commit](https://img.shields.io/github/last-commit/phpro/grumphp)](https://github.com/phpro/grumphp) — Checks code on every commit.

- [larastan ![GitHub Repo Stars](https://img.shields.io/github/stars/larastan/larastan) ![GitHub last commit](https://img.shields.io/github/last-commit/larastan/larastan)](https://github.com/larastan/larastan) — Adds static analysis to Laravel improving developer productivity and code quality. It is a wrapper around PHPStan.

- [Mondrian](https://trismegiste.github.io/Mondrian) :warning: — A set of static analysis and refactoring tools which use graph theory.

- [Nitpick CI](https://nitpick-ci.com) :copyright: — Automated PHP code review.

- [parallel-lint ![GitHub Repo Stars](https://img.shields.io/github/stars/php-parallel-lint/PHP-Parallel-Lint) ![GitHub last commit](https://img.shields.io/github/last-commit/php-parallel-lint/PHP-Parallel-Lint)](https://github.com/php-parallel-lint/PHP-Parallel-Lint) — This tool checks syntax of PHP files faster than serial check with a fancier output.

- [Parse ![GitHub Repo Stars](https://img.shields.io/github/stars/psecio/parse) ![GitHub last commit](https://img.shields.io/github/last-commit/psecio/parse)](https://github.com/psecio/parse) — A Static Security Scanner.

- [pdepend](https://pdepend.org) — Calculates software metrics like cyclomatic complexity for PHP code.

- [phan ![GitHub Repo Stars](https://img.shields.io/github/stars/phan/phan) ![GitHub last commit](https://img.shields.io/github/last-commit/phan/phan)](https://github.com/phan/phan/wiki) — A modern static analyzer from etsy.

- [PHP Architecture Tester ![GitHub Repo Stars](https://img.shields.io/github/stars/carlosas/phpat) ![GitHub last commit](https://img.shields.io/github/last-commit/carlosas/phpat)](https://github.com/carlosas/phpat) — Easy to use architecture testing tool for PHP.

- [PHP Assumptions ![GitHub Repo Stars](https://img.shields.io/github/stars/rskuipers/php-assumptions) ![GitHub last commit](https://img.shields.io/github/last-commit/rskuipers/php-assumptions)](https://github.com/rskuipers/php-assumptions) — Checks for weak assumptions.

- [PHP Coding Standards Fixer](https://cs.symfony.com) — Fixes your code according to standards like PSR-1, PSR-2, and the Symfony standard.

- [PHP Insights](https://phpinsights.com) — Instant PHP quality checks from your console. Analysis of code quality and coding style as well as overview of code architecture and its complexity.

- [Php Inspections (EA Extended)](https://plugins.jetbrains.com/plugin/7622-php-inspections-ea-extended-) — A Static Code Analyzer for PHP.

- [PHP Refactoring Browser](https://qafoolabs.github.io/php-refactoring-browser) — Refactoring helper.

- [PHP Semantic Versioning Checker ![GitHub Repo Stars](https://img.shields.io/github/stars/tomzx/php-semver-checker) ![GitHub last commit](https://img.shields.io/github/last-commit/tomzx/php-semver-checker)](https://github.com/tomzx/php-semver-checker) :warning: — Suggests a next version according to semantic versioning.

- [PHP-Parser ![GitHub Repo Stars](https://img.shields.io/github/stars/nikic/PHP-Parser) ![GitHub last commit](https://img.shields.io/github/last-commit/nikic/PHP-Parser)](https://github.com/nikic/PHP-Parser) — A PHP parser written in PHP.

- [php-speller ![GitHub Repo Stars](https://img.shields.io/github/stars/mekras/php-speller) ![GitHub last commit](https://img.shields.io/github/last-commit/mekras/php-speller)](https://github.com/mekras/php-speller) — PHP spell check library.

- [PHP-Token-Reflection ![GitHub Repo Stars](https://img.shields.io/github/stars/Andrewsville/PHP-Token-Reflection) ![GitHub last commit](https://img.shields.io/github/last-commit/Andrewsville/PHP-Token-Reflection)](https://github.com/Andrewsville/PHP-Token-Reflection) :warning: — Library emulating the PHP internal reflection.

- [php7cc ![GitHub Repo Stars](https://img.shields.io/github/stars/sstalle/php7cc) ![GitHub last commit](https://img.shields.io/github/last-commit/sstalle/php7cc)](https://github.com/sstalle/php7cc) :warning: — PHP 7 Compatibility Checker.

- [php7mar ![GitHub Repo Stars](https://img.shields.io/github/stars/Alexia/php7mar) ![GitHub last commit](https://img.shields.io/github/last-commit/Alexia/php7mar)](https://github.com/Alexia/php7mar) :warning: — Assist developers in porting their code quickly to PHP 7.

- [PHP_CodeSniffer](https://pear.php.net/package/PHP_CodeSniffer) — Detects violations of a defined set of coding standards.

- [PHPArkitect ![GitHub Repo Stars](https://img.shields.io/github/stars/phparkitect/arkitect) ![GitHub last commit](https://img.shields.io/github/last-commit/phparkitect/arkitect)](https://github.com/phparkitect/arkitect) — PHPArkitect helps you to keep your PHP codebase coherent and solid, by permitting to add some architectural constraint check to your workflow. You can express the constraint that you want to enforce, in simple and readable PHP code.

- [phpca ![GitHub Repo Stars](https://img.shields.io/github/stars/wapmorgan/PhpCodeAnalyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/wapmorgan/PhpCodeAnalyzer)](https://github.com/wapmorgan/PhpCodeAnalyzer) :warning: — Finds usage of non-built-in extensions.

- [phpcpd ![GitHub Repo Stars](https://img.shields.io/github/stars/sebastianbergmann/phpcpd) ![GitHub last commit](https://img.shields.io/github/last-commit/sebastianbergmann/phpcpd)](https://github.com/sebastianbergmann/phpcpd) :warning: — Copy/Paste Detector for PHP code.

- [phpdcd ![GitHub Repo Stars](https://img.shields.io/github/stars/sebastianbergmann/phpdcd) ![GitHub last commit](https://img.shields.io/github/last-commit/sebastianbergmann/phpdcd)](https://github.com/sebastianbergmann/phpdcd) :warning: — Dead Code Detector (DCD) for PHP code.

- [PhpDependencyAnalysis](https://mamuz.github.io/PhpDependencyAnalysis) :warning: — Builds a dependency graph for a project.

- [PhpDeprecationDetector ![GitHub Repo Stars](https://img.shields.io/github/stars/wapmorgan/PhpDeprecationDetector) ![GitHub last commit](https://img.shields.io/github/last-commit/wapmorgan/PhpDeprecationDetector)](https://github.com/wapmorgan/PhpDeprecationDetector) — Analyzer of PHP code to search issues with deprecated functionality in newer interpreter versions.  It finds removed objects (functions, variables, constants and ini-directives),  deprecated functions functionality, and usage of forbidden names or tricks (e.g. reserved identifiers in newer versions).

- [phpdoc-to-typehint ![GitHub Repo Stars](https://img.shields.io/github/stars/dunglas/phpdoc-to-typehint) ![GitHub last commit](https://img.shields.io/github/last-commit/dunglas/phpdoc-to-typehint)](https://github.com/dunglas/phpdoc-to-typehint) :warning: — Add scalar type hints and return types to existing PHP projects using PHPDoc annotations.

- [phpDocumentor](https://www.phpdoc.org) — Analyzes PHP source code to generate documentation.

- [phploc ![GitHub Repo Stars](https://img.shields.io/github/stars/sebastianbergmann/phploc) ![GitHub last commit](https://img.shields.io/github/last-commit/sebastianbergmann/phploc)](https://github.com/sebastianbergmann/phploc) — A tool for quickly measuring the size and analyzing the structure of a PHP project.

- [PHPMD](https://phpmd.org) — Finds possible bugs in your code.

- [PhpMetrics](http://www.phpmetrics.org) — Calculates and visualizes various code quality metrics.

- [phpmnd ![GitHub Repo Stars](https://img.shields.io/github/stars/povils/phpmnd) ![GitHub last commit](https://img.shields.io/github/last-commit/povils/phpmnd)](https://github.com/povils/phpmnd) — Helps to detect magic numbers.

- [PHPQA](https://edgedesigncz.github.io/phpqa) :warning: — A tool for running QA tools (phploc, phpcpd, phpcs, pdepend, phpmd, phpmetrics).

- [phpqa - jakzal ![GitHub Repo Stars](https://img.shields.io/github/stars/jakzal/phpqa) ![GitHub last commit](https://img.shields.io/github/last-commit/jakzal/phpqa)](https://github.com/jakzal/phpqa) — Many tools for PHP static analysis in one container.

- [phpqa - jmolivas ![GitHub Repo Stars](https://img.shields.io/github/stars/jmolivas/phpqa) ![GitHub last commit](https://img.shields.io/github/last-commit/jmolivas/phpqa)](https://github.com/jmolivas/phpqa) — PHPQA all-in-one Analyzer CLI tool.

- [phpsa ![GitHub Repo Stars](https://img.shields.io/github/stars/ovr/phpsa) ![GitHub last commit](https://img.shields.io/github/last-commit/ovr/phpsa)](https://github.com/ovr/phpsa) :warning: — Static analysis tool for PHP.

- [PHPStan](https://phpstan.org) — PHP Static Analysis Tool - discover bugs in your code without running it!

- [Progpilot ![GitHub Repo Stars](https://img.shields.io/github/stars/designsecurity/progpilot) ![GitHub last commit](https://img.shields.io/github/last-commit/designsecurity/progpilot)](https://github.com/designsecurity/progpilot) — A static analysis tool for security purposes.

- [Psalm](https://psalm.dev) — Static analysis tool for finding type errors in PHP applications.

- [Qafoo Quality Analyzer ![GitHub Repo Stars](https://img.shields.io/github/stars/Qafoo/QualityAnalyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/Qafoo/QualityAnalyzer)](https://github.com/Qafoo/QualityAnalyzer) :warning: — Visualizes metrics and source code.

- [rector](https://getrector.org) — Instant Upgrades and Automated Refactoring of any PHP 5.3+ code. It upgrades your code for PHP 7.4, 8.0 and beyond. Rector promises a low false-positive rate because it looks for narrowly defined AST (abstract syntax tree) patterns.  The main use-case are tackling technical debt in your legacy code and removing dead code. Rector provides a set of special rules for Symfony, Doctrine, PHPUnit, and many more.

- [Reflection ![GitHub Repo Stars](https://img.shields.io/github/stars/phpDocumentor/Reflection) ![GitHub last commit](https://img.shields.io/github/last-commit/phpDocumentor/Reflection)](https://github.com/phpDocumentor/Reflection) — Reflection library to do Static Analysis for PHP Projects

- [Symfony Insight](https://insight.symfony.com/) :copyright: — Detect security risks, find bugs and provide actionable metrics for PHP projects.

- [Tuli ![GitHub Repo Stars](https://img.shields.io/github/stars/ircmaxell/Tuli) ![GitHub last commit](https://img.shields.io/github/last-commit/ircmaxell/Tuli)](https://github.com/ircmaxell/Tuli) — A static analysis engine.

- [twig-lint ![GitHub Repo Stars](https://img.shields.io/github/stars/asm89/twig-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/asm89/twig-lint)](https://github.com/asm89/twig-lint) — twig-lint is a lint tool for your twig files.

- [WAP](https://securityonline.info/owasp-wap-web-application-protection-project) — Tool to detect and correct input validation vulnerabilities in PHP (4.0 or higher) web applications and predicts false positives by combining static analysis and data mining.


<a name="plsql" />
<h2>PL/SQL</h2>


- [ZPA](https://zpa.felipebz.com) — An open source parser and code analyzer for PL/SQL and Oracle SQL code.


<a name="perl" />
<h2>Perl</h2>


- [Perl::Analyzer](https://technix.github.io/Perl-Analyzer/) — Perl-Analyzer is a set of programs and modules that allow users to analyze and visualize Perl  codebases by providing information about namespaces and their relations, dependencies,  inheritance, and methods implemented, inherited, and redefined in packages,  as well as calls to methods from parent packages via SUPER. 

- [Perl::Critic](https://metacpan.org/pod/Perl::Critic) — Critique Perl source code for best-practices.

- [perltidy](https://perltidy.sourceforge.net/) — Perltidy is a Perl script which indents and reformats Perl scripts to make them easier to read. 
The formatting can be controlled with command line parameters. The default parameter settings approximately follow the suggestions in the Perl Style Guide. 
Besides reformatting scripts, Perltidy can be a great help in tracking down errors with missing or extra braces, parentheses, and square brackets because it is very good at localizing errors.

- [zarn ![GitHub Repo Stars](https://img.shields.io/github/stars/htrgouvea/zarn) ![GitHub last commit](https://img.shields.io/github/last-commit/htrgouvea/zarn)](https://github.com/htrgouvea/zarn) — A lightweight static security analysis tool for modern Perl Apps


<a name="python" />
<h2>Python</h2>


- [autoflake ![GitHub Repo Stars](https://img.shields.io/github/stars/PyCQA/autoflake) ![GitHub last commit](https://img.shields.io/github/last-commit/PyCQA/autoflake)](https://github.com/PyCQA/autoflake) — Autoflake removes unused imports and unused variables from Python code.

- [autopep8](https://pypi.org/project/autopep8/) — A tool that automatically formats Python code to conform to the PEP 8 style guide.
It uses the pycodestyle utility to determine what parts of the code needs to be formatted.

- [bandit](https://bandit.readthedocs.io/en/latest) — A tool to find common security issues in Python code.

- [bellybutton ![GitHub Repo Stars](https://img.shields.io/github/stars/hchasestevens/bellybutton) ![GitHub last commit](https://img.shields.io/github/last-commit/hchasestevens/bellybutton)](https://github.com/hchasestevens/bellybutton) — A linting engine supporting custom project-specific rules.

- [Black](https://black.readthedocs.io/en/stable) — The uncompromising Python code formatter.

- [Bowler](https://pybowler.io/) — Safe code refactoring for modern Python.  Bowler is a refactoring tool for manipulating Python at the syntax tree level.  It enables safe, large scale code modifications while guaranteeing that the  resulting code compiles and runs. It provides both a simple command line interface  and a fluent API in Python for generating complex code modifications in code.

- [ciocheck ![GitHub Repo Stars](https://img.shields.io/github/stars/ContinuumIO/ciocheck) ![GitHub last commit](https://img.shields.io/github/last-commit/ContinuumIO/ciocheck)](https://github.com/ContinuumIO/ciocheck) :warning: — Linter, formatter and test suite helper. As a linter, it is a wrapper around `pep8`, `pydocstyle`, `flake8`, and `pylint`.

- [cohesion ![GitHub Repo Stars](https://img.shields.io/github/stars/mschwager/cohesion) ![GitHub last commit](https://img.shields.io/github/last-commit/mschwager/cohesion)](https://github.com/mschwager/cohesion) :warning: — A tool for measuring Python class cohesion.

- [deal](https://deal.readthedocs.io/) — Design by contract for Python. Write bug-free code.  By adding a few decorators to your code, you get for free tests, static analysis, formal verification, and much more.

- [Dlint ![GitHub Repo Stars](https://img.shields.io/github/stars/dlint-py/dlint) ![GitHub last commit](https://img.shields.io/github/last-commit/dlint-py/dlint)](https://github.com/dlint-py/dlint) — A tool for ensuring Python code is secure.

- [Dodgy ![GitHub Repo Stars](https://img.shields.io/github/stars/landscapeio/dodgy) ![GitHub last commit](https://img.shields.io/github/last-commit/landscapeio/dodgy)](https://github.com/landscapeio/dodgy) — Dodgy is a very basic tool to run against your codebase to search for "dodgy" looking values. It is a series of simple regular expressions designed to detect things such as accidental SCM diff checkins, or passwords or secret keys hard coded into files.

- [ENRE-py ![GitHub Repo Stars](https://img.shields.io/github/stars/xjtu-enre/ENRE-py) ![GitHub last commit](https://img.shields.io/github/last-commit/xjtu-enre/ENRE-py)](https://github.com/xjtu-enre/ENRE-py) :warning: — ENRE (ENtity Relationship Extractor) is a tool for extraction of code entity dependencies or relationships from source code. ENRE-py is a ENtity Relationship Extractor for Python based on Python Language Services of The Standard Library.

- [fixit](https://pypi.org/project/fixit) — A framework for creating lint rules and corresponding auto-fixes for source code.

- [flake8 ![GitHub Repo Stars](https://img.shields.io/github/stars/PyCQA/flake8) ![GitHub last commit](https://img.shields.io/github/last-commit/PyCQA/flake8)](https://github.com/PyCQA/flake8) — A wrapper around `pyflakes`, `pycodestyle` and `mccabe`.

- [flakeheaven](https://pypi.org/project/flakeheaven/) — flakeheaven is a python linter built around flake8 to enable inheritable and complex toml configuration.

- [Griffe](https://mkdocstrings.github.io/griffe/) — Signatures for entire Python programs. Extract the structure, the frame, the skeleton of your project, to generate API documentation or find breaking changes in your API.

- [InspectorTiger ![GitHub Repo Stars](https://img.shields.io/github/stars/thg-consulting/it) ![GitHub last commit](https://img.shields.io/github/last-commit/thg-consulting/it)](https://github.com/thg-consulting/it) :warning: — IT, Inspector Tiger, is a modern python code review tool / framework. It comes with bunch of pre-defined handlers which warns you about improvements and possible bugs. Beside these handlers, you can write your own or use community ones.

- [jedi](https://jedi.readthedocs.io/en/latest) — Autocompletion/static analysis library for Python.

- [linty fresh ![GitHub Repo Stars](https://img.shields.io/github/stars/lyft/linty_fresh) ![GitHub last commit](https://img.shields.io/github/last-commit/lyft/linty_fresh)](https://github.com/lyft/linty_fresh) — Parse lint errors and report them to Github as comments on a pull request.

- [mccabe](https://pypi.org/project/mccabe) — Check McCabe complexity.

- [multilint ![GitHub Repo Stars](https://img.shields.io/github/stars/adamchainz/multilint) ![GitHub last commit](https://img.shields.io/github/last-commit/adamchainz/multilint)](https://github.com/adamchainz/multilint) :warning: — A wrapper around `flake8`, `isort` and `modernize`.

- [mypy](http://www.mypy-lang.org) — A static type checker that aims to combine the benefits of duck typing and static typing, frequently used with [MonkeyType ![GitHub Repo Stars](https://img.shields.io/github/stars/Instagram/MonkeyType) ![GitHub last commit](https://img.shields.io/github/last-commit/Instagram/MonkeyType)](https://github.com/Instagram/MonkeyType).

- [prospector ![GitHub Repo Stars](https://img.shields.io/github/stars/PyCQA/prospector) ![GitHub last commit](https://img.shields.io/github/last-commit/PyCQA/prospector)](https://github.com/PyCQA/prospector) — A wrapper around `pylint`, `pep8`, `mccabe` and others.

- [py-find-injection ![GitHub Repo Stars](https://img.shields.io/github/stars/uber/py-find-injection) ![GitHub last commit](https://img.shields.io/github/last-commit/uber/py-find-injection)](https://github.com/uber/py-find-injection) :warning: — Find SQL injection vulnerabilities in Python code.

- [pyanalyze](https://pyanalyze.readthedocs.io/en/latest/) — A tool for programmatically detecting common mistakes in Python code, such as references to undefined variables and type errors. It can be extended to add additional rules and perform checks specific to particular functions.

- [PyCodeQual](https://pycodequ.al) :copyright: — PyCodeQual gives you insights into complexity and bug risks. It adds automatic reviews to your pull requests.

- [pycodestyle](https://pycodestyle.pycqa.org/en/latest) — (Formerly `pep8`) Check Python code against some of the style conventions in PEP 8.

- [pydocstyle](http://www.pydocstyle.org) — Check compliance with Python docstring conventions.

- [pyflakes](https://pypi.org/project/pyflakes) — Check Python source files for errors.

- [pylint](http://pylint.pycqa.org/en/latest) — Looks for programming errors, helps enforcing a coding standard and sniffs for some code smells. It additionally includes `pyreverse` (an UML diagram generator) and `symilar` (a similarities checker).

- [pylyzers](https://mtshiba.github.io/pylyzer/) — A static code analyzer / language server for Python, written in Rust, focused on type checking and readable output.

- [pyre-check](https://pyre-check.org) — A fast, scalable type checker for large Python codebases.

- [pyright ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/pyright) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/pyright)](https://github.com/Microsoft/pyright) — Static type checker for Python, created to address gaps in existing tools like mypy.

- [pyroma ![GitHub Repo Stars](https://img.shields.io/github/stars/regebro/pyroma) ![GitHub last commit](https://img.shields.io/github/last-commit/regebro/pyroma)](https://github.com/regebro/pyroma) :warning: — Rate how well a Python project complies with the best practices of the Python packaging ecosystem, and list issues that could be improved.

- [Pysa](https://pyre-check.org/docs/pysa-basics.html) — A tool based on Facebook's pyre-check to identify potential security issues in Python code identified with taint analysis.

- [PyT - Python Taint ![GitHub Repo Stars](https://img.shields.io/github/stars/python-security/pyt) ![GitHub last commit](https://img.shields.io/github/last-commit/python-security/pyt)](https://github.com/python-security/pyt) :warning: — A static analysis tool for detecting security vulnerabilities in Python web applications.

- [pytype](https://google.github.io/pytype) — A static type analyzer for Python code.

- [pyupgrade](https://pypi.org/project/pyupgrade-docs/) — A tool (and pre-commit hook) to automatically upgrade syntax for newer versions of the language.

- [QuantifiedCode ![GitHub Repo Stars](https://img.shields.io/github/stars/quantifiedcode/quantifiedcode) ![GitHub last commit](https://img.shields.io/github/last-commit/quantifiedcode/quantifiedcode)](https://github.com/quantifiedcode/quantifiedcode) :warning: — Automated code review & repair. It helps you to keep track of issues and metrics in your software projects, and can be easily extended to support new types of analyses.

- [radon](https://radon.readthedocs.io/en/latest) — A Python tool that computes various metrics from the source code.

- [refurb ![GitHub Repo Stars](https://img.shields.io/github/stars/dosisod/refurb) ![GitHub last commit](https://img.shields.io/github/last-commit/dosisod/refurb)](https://github.com/dosisod/refurb) — A tool for refurbishing and modernizing Python codebases. Refurb is heavily inspired by clippy, the built-in linter for Rust.

- [ruff](https://astral.sh/ruff) — Fast Python linter, written in Rust. 10-100x faster than existing linters. Compatible with Python 3.10. Supports file watcher.

- [unimport](https://unimport.hakancelik.dev) — A linter, formatter for finding and removing unused import statements.

- [vulture ![GitHub Repo Stars](https://img.shields.io/github/stars/jendrikseipp/vulture) ![GitHub last commit](https://img.shields.io/github/last-commit/jendrikseipp/vulture)](https://github.com/jendrikseipp/vulture) — Find unused classes, functions and variables in Python code.

- [wemake-python-styleguide](https://wemake-python-styleguide.rtfd.io/) — The strictest and most opinionated python linter ever.

- [wily ![GitHub Repo Stars](https://img.shields.io/github/stars/tonybaloney/wily) ![GitHub last commit](https://img.shields.io/github/last-commit/tonybaloney/wily)](https://github.com/tonybaloney/wily) :warning: — A command-line tool for archiving, exploring and graphing the complexity of Python source code.

- [xenon](https://xenon.readthedocs.io) — Monitor code complexity using [`radon` ![GitHub Repo Stars](https://img.shields.io/github/stars/rubik/radon) ![GitHub last commit](https://img.shields.io/github/last-commit/rubik/radon)](https://github.com/rubik/radon).

- [yapf ![GitHub Repo Stars](https://img.shields.io/github/stars/google/yapf) ![GitHub last commit](https://img.shields.io/github/last-commit/google/yapf)](https://github.com/google/yapf) — A formatter for Python files created by Google
YAPF follows a distinctive methodology, originating from the 'clang-format' tool created by Daniel Jasper. Essentially, the program reframes the code to the most suitable formatting that abides by the style guide, even if the original code already follows the style guide. This concept is similar to the Go programming language's 'gofmt' tool, which aims to put an end to debates about formatting by having the entire codebase of a project pass through YAPF whenever changes are made, thereby maintaining a consistent style throughout the project and eliminating the need to argue about style in every code review.


<a name="r" />
<h2>R</h2>


- [cyclocomp ![GitHub Repo Stars](https://img.shields.io/github/stars/MangoTheCat/cyclocomp) ![GitHub last commit](https://img.shields.io/github/last-commit/MangoTheCat/cyclocomp)](https://github.com/MangoTheCat/cyclocomp) — Quantifies the cyclomatic complexity of R functions / expressions.

- [goodpractice](https://mangothecat.github.io/goodpractice) — Analyses the source code for R packages and provides best-practice recommendations.

- [lintr ![GitHub Repo Stars](https://img.shields.io/github/stars/jimhester/lintr) ![GitHub last commit](https://img.shields.io/github/last-commit/jimhester/lintr)](https://github.com/jimhester/lintr) — Static Code Analysis for R.

- [styler](https://styler.r-lib.org) — Formatting of R source code files and pretty-printing of R code.


<a name="rego" />
<h2>Rego</h2>


- [Regal ![GitHub Repo Stars](https://img.shields.io/github/stars/styrainc/regal) ![GitHub last commit](https://img.shields.io/github/last-commit/styrainc/regal)](https://github.com/styrainc/regal) — Regal is a linter for the policy language Rego. Regal aims to catch bugs and mistakes in policy code, while at the same time helping people learn the language, best practices and idiomatic constructs.


<a name="ruby" />
<h2>Ruby</h2>


- [brakeman](https://brakemanscanner.org) — A static analysis security vulnerability scanner for Ruby on Rails applications.

- [bundler-audit ![GitHub Repo Stars](https://img.shields.io/github/stars/rubysec/bundler-audit) ![GitHub last commit](https://img.shields.io/github/last-commit/rubysec/bundler-audit)](https://github.com/rubysec/bundler-audit) — Audit Gemfile.lock for gems with security vulnerabilities reported in [Ruby Advisory Database ![GitHub Repo Stars](https://img.shields.io/github/stars/rubysec/ruby-advisory-db) ![GitHub last commit](https://img.shields.io/github/last-commit/rubysec/ruby-advisory-db)](https://github.com/rubysec/ruby-advisory-db).

- [cane ![GitHub Repo Stars](https://img.shields.io/github/stars/square/cane) ![GitHub last commit](https://img.shields.io/github/last-commit/square/cane)](https://github.com/square/cane) :warning: — Code quality threshold checking as part of your build.

- [Churn ![GitHub Repo Stars](https://img.shields.io/github/stars/danmayer/churn) ![GitHub last commit](https://img.shields.io/github/last-commit/danmayer/churn)](https://github.com/danmayer/churn) — A Project to give the churn file, class, and method for a project for a given checkin. Over time the tool adds up the history of churns to give the number of times a file, class, or method is changing during the life of a project.

- [dawnscanner ![GitHub Repo Stars](https://img.shields.io/github/stars/thesp0nge/dawnscanner) ![GitHub last commit](https://img.shields.io/github/last-commit/thesp0nge/dawnscanner)](https://github.com/thesp0nge/dawnscanner) — A static analysis security scanner for ruby written web applications. It supports Sinatra, Padrino and Ruby on Rails frameworks.

- [ERB Lint ![GitHub Repo Stars](https://img.shields.io/github/stars/Shopify/erb-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/Shopify/erb-lint)](https://github.com/Shopify/erb-lint) — Lint your ERB or HTML files

- [Fasterer ![GitHub Repo Stars](https://img.shields.io/github/stars/DamirSvrtan/fasterer) ![GitHub last commit](https://img.shields.io/github/last-commit/DamirSvrtan/fasterer)](https://github.com/DamirSvrtan/fasterer) — Common Ruby idioms checker.

- [flay](https://ruby.sadi.st/Flay.html) — Flay analyzes code for structural similarities.

- [flog](https://ruby.sadi.st/Flog.html) :warning: — Flog reports the most tortured code in an easy to read pain report. The higher the score, the more pain the code is in.

- [Fukuzatsu ![GitHub Repo Stars](https://img.shields.io/github/stars/CoralineAda/fukuzatsu) ![GitHub last commit](https://img.shields.io/github/last-commit/CoralineAda/fukuzatsu)](https://github.com/CoralineAda/fukuzatsu) — A tool for measuring code complexity in Ruby class files. Its analysis generates scores based on cyclomatic complexity algorithms with no added "opinions".

- [htmlbeautifier ![GitHub Repo Stars](https://img.shields.io/github/stars/threedaymonk/htmlbeautifier) ![GitHub last commit](https://img.shields.io/github/last-commit/threedaymonk/htmlbeautifier)](https://github.com/threedaymonk/htmlbeautifier) — A normaliser/beautifier for HTML that also understands embedded Ruby. Ideal for tidying up Rails templates.

- [laser ![GitHub Repo Stars](https://img.shields.io/github/stars/michaeledgar/laser) ![GitHub last commit](https://img.shields.io/github/last-commit/michaeledgar/laser)](https://github.com/michaeledgar/laser) :warning: — Static analysis and style linter for Ruby code.

- [MetricFu ![GitHub Repo Stars](https://img.shields.io/github/stars/metricfu/metric_fu) ![GitHub last commit](https://img.shields.io/github/last-commit/metricfu/metric_fu)](https://github.com/metricfu/metric_fu) :warning: — MetricFu is a set of tools to provide reports that show which parts of your code might need extra work.

- [pelusa ![GitHub Repo Stars](https://img.shields.io/github/stars/codegram/pelusa) ![GitHub last commit](https://img.shields.io/github/last-commit/codegram/pelusa)](https://github.com/codegram/pelusa) — Static analysis Lint-type tool to improve your OO Ruby code.

- [quality ![GitHub Repo Stars](https://img.shields.io/github/stars/apiology/quality) ![GitHub last commit](https://img.shields.io/github/last-commit/apiology/quality)](https://github.com/apiology/quality) :warning: — Runs quality checks on your code using community tools, and makes sure your numbers don't get any worse over time.

- [Querly ![GitHub Repo Stars](https://img.shields.io/github/stars/soutaro/querly) ![GitHub last commit](https://img.shields.io/github/last-commit/soutaro/querly)](https://github.com/soutaro/querly) :warning: — Pattern Based Checking Tool for Ruby.

- [Railroader](https://railroader.org) :warning: — An open source static analysis security vulnerability scanner for Ruby on Rails applications.

- [rails_best_practices](https://rails-bestpractices.com) :warning: — A code metric tool for Rails projects

- [reek ![GitHub Repo Stars](https://img.shields.io/github/stars/troessner/reek) ![GitHub last commit](https://img.shields.io/github/last-commit/troessner/reek)](https://github.com/troessner/reek) — Code smell detector for Ruby.

- [Roodi ![GitHub Repo Stars](https://img.shields.io/github/stars/roodi/roodi) ![GitHub last commit](https://img.shields.io/github/last-commit/roodi/roodi)](https://github.com/roodi/roodi) :warning: — Roodi stands for Ruby Object Oriented Design Inferometer. It parses your Ruby code and warns you about design issues you have based on the checks that it has configured.

- [RuboCop](https://docs.rubocop.org/rubocop) — A Ruby static code analyzer, based on the community Ruby style guide.

- [Rubrowser ![GitHub Repo Stars](https://img.shields.io/github/stars/blazeeboy/rubrowser) ![GitHub last commit](https://img.shields.io/github/last-commit/blazeeboy/rubrowser)](https://github.com/blazeeboy/rubrowser) — Ruby classes interactive dependency graph generator.

- [ruby-lint](http://code.yorickpeterse.com/ruby-lint/latest) :warning: — Static code analysis for Ruby.

- [rubycritic ![GitHub Repo Stars](https://img.shields.io/github/stars/whitesmith/rubycritic) ![GitHub last commit](https://img.shields.io/github/last-commit/whitesmith/rubycritic)](https://github.com/whitesmith/rubycritic) — A Ruby code quality reporter.

- [rufo ![GitHub Repo Stars](https://img.shields.io/github/stars/ruby-formatter/rufo) ![GitHub last commit](https://img.shields.io/github/last-commit/ruby-formatter/rufo)](https://github.com/ruby-formatter/rufo) — An opinionated ruby formatter, intended to be used via the command line as a text-editor plugin, to autoformat files on save or on demand.

- [Saikuro](https://metricfu.github.io/Saikuro) :warning: — A Ruby cyclomatic complexity analyzer.

- [SandiMeter](https://rubygems.org/gems/sandi_meter) :warning: — Static analysis tool for checking Ruby code for Sandi Metz' rules.

- [Sorbet](https://sorbet.org) — A fast, powerful type checker designed for Ruby.

- [Standard Ruby ![GitHub Repo Stars](https://img.shields.io/github/stars/testdouble/standard) ![GitHub last commit](https://img.shields.io/github/last-commit/testdouble/standard)](https://github.com/testdouble/standard) — Ruby Style Guide, with linter & automatic code fixer

- [Steep ![GitHub Repo Stars](https://img.shields.io/github/stars/soutaro/steep) ![GitHub last commit](https://img.shields.io/github/last-commit/soutaro/steep)](https://github.com/soutaro/steep) — Gradual Typing for Ruby.


<a name="rust" />
<h2>Rust</h2>


- [C2Rust](https://c2rust.com) — C2Rust helps you migrate C99-compliant code to Rust. The translator (or transpiler) produces unsafe Rust code that closely mirrors the input C code.

- [cargo udeps ![GitHub Repo Stars](https://img.shields.io/github/stars/est31/cargo-udeps) ![GitHub last commit](https://img.shields.io/github/last-commit/est31/cargo-udeps)](https://github.com/est31/cargo-udeps) — Find unused dependencies in Cargo.toml. It either prints out a "unused crates" line listing the crates,  or it prints out a line saying that no crates were unused.

- [cargo-audit](https://rustsec.org) — Audit Cargo.lock for crates with security vulnerabilities reported to the [RustSec Advisory Database ![GitHub Repo Stars](https://img.shields.io/github/stars/RustSec/advisory-db) ![GitHub last commit](https://img.shields.io/github/last-commit/RustSec/advisory-db)](https://github.com/RustSec/advisory-db/).

- [cargo-bloat ![GitHub Repo Stars](https://img.shields.io/github/stars/RazrFalcon/cargo-bloat) ![GitHub last commit](https://img.shields.io/github/last-commit/RazrFalcon/cargo-bloat)](https://github.com/RazrFalcon/cargo-bloat) — Find out what takes most of the space in your executable. supports ELF (Linux, BSD), Mach-O (macOS) and PE (Windows) binaries.

- [cargo-breaking ![GitHub Repo Stars](https://img.shields.io/github/stars/iomentum/cargo-breaking) ![GitHub last commit](https://img.shields.io/github/last-commit/iomentum/cargo-breaking)](https://github.com/iomentum/cargo-breaking) — cargo-breaking compares a crate's public API between two different branches, shows what changed, and suggests the next version according to semver.

- [cargo-call-stack ![GitHub Repo Stars](https://img.shields.io/github/stars/japaric/cargo-call-stack) ![GitHub last commit](https://img.shields.io/github/last-commit/japaric/cargo-call-stack)](https://github.com/japaric/cargo-call-stack) — Whole program static stack analysis The tool produces the full call graph of a program as a dot file.

- [cargo-deny](https://embarkstudios.github.io/cargo-deny) — A cargo plugin for linting your dependencies. It can be used either as a command line too, a Rust crate, or a Github action for CI. It checks for valid license information, duplicate crates, security vulnerabilities, and more.

- [cargo-expand ![GitHub Repo Stars](https://img.shields.io/github/stars/dtolnay/cargo-expand) ![GitHub last commit](https://img.shields.io/github/last-commit/dtolnay/cargo-expand)](https://github.com/dtolnay/cargo-expand) — Cargo subcommand to show result of macro expansion  and #[derive] expansion applied to the current crate.  This is a wrapper around a more verbose compiler command.

- [cargo-geiger ![GitHub Repo Stars](https://img.shields.io/github/stars/geiger-rs/cargo-geiger) ![GitHub last commit](https://img.shields.io/github/last-commit/geiger-rs/cargo-geiger)](https://github.com/geiger-rs/cargo-geiger) — A cargo plugin for analysing the usage of unsafe Rust code Provides statistical output to aid security auditing

- [cargo-inspect ![GitHub Repo Stars](https://img.shields.io/github/stars/mre/cargo-inspect) ![GitHub last commit](https://img.shields.io/github/last-commit/mre/cargo-inspect)](https://github.com/mre/cargo-inspect) :warning: — Inspect Rust code without syntactic sugar to see what the compiler does behind the curtains.

- [cargo-semver-checks](https://crates.io/crates/cargo-semver-checks) — Scan your Rust crate releases for semver violations. It can be used either directly via the CLI, as a GitHub Action in CI,  or via release managers like `release-plz`. It found semver violations in  [more than 1 in 6 of the top 1000 most-downloaded crates](https://predr.ag/blog/semver-violations-are-common-better-tooling-is-the-answer/) on crates.io.

- [cargo-show-asm ![GitHub Repo Stars](https://img.shields.io/github/stars/pacak/cargo-show-asm) ![GitHub last commit](https://img.shields.io/github/last-commit/pacak/cargo-show-asm)](https://github.com/pacak/cargo-show-asm) — cargo subcommand showing the assembly, LLVM-IR and MIR generated for Rust code

- [cargo-spellcheck ![GitHub Repo Stars](https://img.shields.io/github/stars/drahnr/cargo-spellcheck) ![GitHub last commit](https://img.shields.io/github/last-commit/drahnr/cargo-spellcheck)](https://github.com/drahnr/cargo-spellcheck) — Checks all your documentation for spelling and grammar mistakes  with hunspell (ready) and languagetool (preview)

- [cargo-unused-features ![GitHub Repo Stars](https://img.shields.io/github/stars/TimonPost/cargo-unused-features) ![GitHub last commit](https://img.shields.io/github/last-commit/TimonPost/cargo-unused-features)](https://github.com/TimonPost/cargo-unused-features) :warning: — Find potential unused enabled feature flags and prune them. You can generate a simple HTML report from the json to make it easier to inspect results.
It removes a feature of a dependency and then compiles the project to see if it still compiles. If it does, the feature flag can possibly be removed, but it can be a false-positive.

- [clippy](https://rust-lang.github.io/rust-clippy) — A code linter to catch common mistakes and improve your Rust code.

- [diff.rs](https://diff.rs) — Web application (WASM) to render a diff between Rust crate versions.

- [dylint](https://www.trailofbits.com/post/write-rust-lints-without-forking-clippy) — A tool for running Rust lints from dynamic libraries. Dylint makes it easy for developers to maintain their own personal lint collections.

- [electrolysis](https://kha.github.io/electrolysis) :warning: — A tool for formally verifying Rust programs by transpiling them into definitions in the Lean theorem prover.

- [herbie ![GitHub Repo Stars](https://img.shields.io/github/stars/mcarton/rust-herbie-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/mcarton/rust-herbie-lint)](https://github.com/mcarton/rust-herbie-lint) :warning: — Adds warnings or errors to your crate when using a numerically unstable floating point expression.

- [kani ![GitHub Repo Stars](https://img.shields.io/github/stars/model-checking/kani) ![GitHub last commit](https://img.shields.io/github/last-commit/model-checking/kani)](https://github.com/model-checking/kani) — The Kani Rust Verifier is a bit-precise model checker for Rust. 
Kani is particularly useful for verifying unsafe code blocks in Rust, 
where the "unsafe superpowers" are unchecked by the compiler.
Kani verifies:

* Memory safety (e.g., null pointer dereferences)
* User-specified assertions (i.e., assert!(...))
* The absence of panics (e.g., unwrap() on None values)
* The absence of some types of unexpected behavior (e.g., arithmetic overflows)


- [linter-rust ![GitHub Repo Stars](https://img.shields.io/github/stars/AtomLinter/linter-rust) ![GitHub last commit](https://img.shields.io/github/last-commit/AtomLinter/linter-rust)](https://github.com/AtomLinter/linter-rust) :warning: — Linting your Rust-files in Atom, using rustc and cargo.

- [lockbud ![GitHub Repo Stars](https://img.shields.io/github/stars/BurtonQin/lockbud) ![GitHub last commit](https://img.shields.io/github/last-commit/BurtonQin/lockbud)](https://github.com/BurtonQin/lockbud) — Statically detects Rust deadlocks bugs. It currently detects two common kinds of deadlock bugs: doublelock and locks in conflicting order. It will print bugs in JSON format together with the source code location and an explanation of each bug.

- [MIRAI ![GitHub Repo Stars](https://img.shields.io/github/stars/facebookexperimental/MIRAI) ![GitHub last commit](https://img.shields.io/github/last-commit/facebookexperimental/MIRAI)](https://github.com/facebookexperimental/MIRAI) — And abstract interpreter operating on Rust's mid-level intermediate language, and providing warnings based on taint analysis.

- [prae ![GitHub Repo Stars](https://img.shields.io/github/stars/teenjuna/prae) ![GitHub last commit](https://img.shields.io/github/last-commit/teenjuna/prae)](https://github.com/teenjuna/prae) :warning: — Provides a convenient macro that allows you to generate type wrappers  that promise to always uphold arbitrary invariants that you specified. 

- [Prusti](https://www.pm.inf.ethz.ch/research/prusti.html) — A static verifier for Rust, based on the Viper verification infrastructure. By default Prusti verifies absence of panics by proving that statements such as unreachable!() and panic!() are unreachable.

- [Rudra ![GitHub Repo Stars](https://img.shields.io/github/stars/sslab-gatech/Rudra) ![GitHub last commit](https://img.shields.io/github/last-commit/sslab-gatech/Rudra)](https://github.com/sslab-gatech/Rudra) — Rust Memory Safety & Undefined Behavior Detection. It is capable of analyzing single Rust packages as well as all the packages on crates.io.

- [Rust Language Server ![GitHub Repo Stars](https://img.shields.io/github/stars/rust-lang-nursery/rls) ![GitHub last commit](https://img.shields.io/github/last-commit/rust-lang-nursery/rls)](https://github.com/rust-lang-nursery/rls) :warning: — Supports functionality such as 'goto definition', symbol search, reformatting, and code completion, and enables renaming and refactorings.

- [rust-analyzer](https://rust-analyzer.github.io) — Supports functionality such as 'goto definition', type inference, symbol search, reformatting, and code completion, and enables renaming and refactorings.

- [rust-audit ![GitHub Repo Stars](https://img.shields.io/github/stars/Shnatsel/rust-audit) ![GitHub last commit](https://img.shields.io/github/last-commit/Shnatsel/rust-audit)](https://github.com/Shnatsel/rust-audit) — Audit Rust binaries for known bugs or security vulnerabilities. This works by embedding data about the dependency tree (Cargo.lock) in JSON format into a dedicated linker section of the compiled executable.

- [rustfix ![GitHub Repo Stars](https://img.shields.io/github/stars/rust-lang/rustfix) ![GitHub last commit](https://img.shields.io/github/last-commit/rust-lang/rustfix)](https://github.com/rust-lang/rustfix) — Read and apply the suggestions made by rustc (and third-party lints, like those offered by clippy).

- [rustfmt ![GitHub Repo Stars](https://img.shields.io/github/stars/rust-lang/rustfmt) ![GitHub last commit](https://img.shields.io/github/last-commit/rust-lang/rustfmt)](https://github.com/rust-lang/rustfmt) — A tool for formatting Rust code according to style guidelines.

- [RustViz ![GitHub Repo Stars](https://img.shields.io/github/stars/rustviz/rustviz) ![GitHub last commit](https://img.shields.io/github/last-commit/rustviz/rustviz)](https://github.com/rustviz/rustviz) — RustViz is a tool that generates visualizations  from simple Rust programs to assist users in better  understanding the Rust Lifetime and Borrowing mechanism. It generates SVG files with graphical indicators that integrate  with mdbook to render visualizations of data-flow in Rust programs.

- [warnalyzer ![GitHub Repo Stars](https://img.shields.io/github/stars/est31/warnalyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/est31/warnalyzer)](https://github.com/est31/warnalyzer) — Show unused code from multi-crate Rust projects


<a name="sql" />
<h2>SQL</h2>


- [dbcritic ![GitHub Repo Stars](https://img.shields.io/github/stars/channable/dbcritic) ![GitHub last commit](https://img.shields.io/github/last-commit/channable/dbcritic)](https://github.com/channable/dbcritic) — dbcritic finds problems in a database schema, such as a missing primary key constraint in a table.

- [holistic](https://holistic.dev/) — More than 1,300 rules to analyze SQL queries. Takes an SQL schema definition and the query source code to generate improvement recommendations. Detects code smells, unused indexes, unused tables, views, materialized views, and more.

- [pgspot ![GitHub Repo Stars](https://img.shields.io/github/stars/timescale/pgspot) ![GitHub last commit](https://img.shields.io/github/last-commit/timescale/pgspot)](https://github.com/timescale/pgspot) — Spot vulnerabilities in postgres extension scripts. Finds unsafe search_path usage and unsafe object creation in PostgreSQL extension scripts or any other PostgreSQL SQL code.

- [sleek ![GitHub Repo Stars](https://img.shields.io/github/stars/nrempel/sleek) ![GitHub last commit](https://img.shields.io/github/last-commit/nrempel/sleek)](https://github.com/nrempel/sleek) — Sleek is a CLI tool for formatting SQL.  It helps you maintain a consistent style across your SQL code, enhancing readability and productivity. The heavy lifting is done by the sqlformat crate.

- [sqlcheck ![GitHub Repo Stars](https://img.shields.io/github/stars/jarulraj/sqlcheck) ![GitHub last commit](https://img.shields.io/github/last-commit/jarulraj/sqlcheck)](https://github.com/jarulraj/sqlcheck) — Automatically identify anti-patterns in SQL queries.

- [SQLFluff](https://www.sqlfluff.com/) — Multiple dialect SQL linter and formatter.

- [sqlint ![GitHub Repo Stars](https://img.shields.io/github/stars/purcell/sqlint) ![GitHub last commit](https://img.shields.io/github/last-commit/purcell/sqlint)](https://github.com/purcell/sqlint) — Simple SQL linter.

- [squawk](https://squawkhq.com) — Linter for PostgreSQL, focused on migrations. Prevents unexpected downtime caused by database migrations and encourages best practices around Postgres schemas and SQL.

- [tsqllint ![GitHub Repo Stars](https://img.shields.io/github/stars/tsqllint/tsqllint) ![GitHub last commit](https://img.shields.io/github/last-commit/tsqllint/tsqllint)](https://github.com/tsqllint/tsqllint) — T-SQL-specific linter.

- [TSqlRules ![GitHub Repo Stars](https://img.shields.io/github/stars/ashleyglee/TSqlRules) ![GitHub last commit](https://img.shields.io/github/last-commit/ashleyglee/TSqlRules)](https://github.com/ashleyglee/TSqlRules) :warning: — TSQL Static Code Analysis Rules for SQL Server.

- [Visual Expert](https://www.visual-expert.com) :copyright: — Code analysis for PowerBuilder, Oracle, and SQL Server Explores, analyzes, and documents Code 


<a name="scala" />
<h2>Scala</h2>


- [linter ![GitHub Repo Stars](https://img.shields.io/github/stars/HairyFotr/linter) ![GitHub last commit](https://img.shields.io/github/last-commit/HairyFotr/linter)](https://github.com/HairyFotr/linter) :warning: — Linter is a Scala static analysis compiler plugin which adds compile-time checks for various possible bugs, inefficiencies, and style problems.

- [Scalastyle](http://www.scalastyle.org) — Scalastyle examines your Scala code and indicates potential problems with it.

- [scapegoat ![GitHub Repo Stars](https://img.shields.io/github/stars/sksamuel/scapegoat) ![GitHub last commit](https://img.shields.io/github/last-commit/sksamuel/scapegoat)](https://github.com/sksamuel/scapegoat) �� Scala compiler plugin for static code analysis.

- [WartRemover](https://www.wartremover.org) — A flexible Scala code linting tool.


<a name="shell" />
<h2>Shell</h2>


- [bashate ![GitHub Repo Stars](https://img.shields.io/github/stars/openstack/bashate) ![GitHub last commit](https://img.shields.io/github/last-commit/openstack/bashate)](https://github.com/openstack/bashate) — Code style enforcement for bash programs. The output format aims to follow pycodestyle (pep8) default output format.

- [i-Code CNES for Shell ![GitHub Repo Stars](https://img.shields.io/github/stars/lequal/i-CodeCNES) ![GitHub last commit](https://img.shields.io/github/last-commit/lequal/i-CodeCNES)](https://github.com/lequal/i-CodeCNES) — An open source static code analysis tool for Shell and Fortran (77 and 90).

- [kmdr ![GitHub Repo Stars](https://img.shields.io/github/stars/ediardo/kmdr-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/ediardo/kmdr-cli)](https://github.com/ediardo/kmdr-cli) — CLI tool for learning commands from your terminal. kmdr delivers a break down of commands with every attribute explained.

- [sh](https://pkg.go.dev/mvdan.cc/sh/v3) — A shell parser, formatter, and interpreter with bash support; includes shfmt

- [shellcheck](https://www.shellcheck.net) — ShellCheck, a static analysis tool that gives warnings and suggestions for bash/sh shell scripts.

- [shellharden ![GitHub Repo Stars](https://img.shields.io/github/stars/anordal/shellharden) ![GitHub last commit](https://img.shields.io/github/last-commit/anordal/shellharden)](https://github.com/anordal/shellharden) — A syntax highlighter and a tool to semi-automate the rewriting of scripts to ShellCheck conformance, mainly focused on quoting.


<a name="swift" />
<h2>Swift</h2>


- [SwiftFormat ![GitHub Repo Stars](https://img.shields.io/github/stars/nicklockwood/SwiftFormat) ![GitHub last commit](https://img.shields.io/github/last-commit/nicklockwood/SwiftFormat)](https://github.com/nicklockwood/SwiftFormat) — A library and command-line formatting tool for reformatting Swift code.

- [SwiftLint](https://realm.github.io/SwiftLint) — A tool to enforce Swift style and conventions.

- [Tailor](https://sleekbyte.github.io/tailor) :warning: — A static analysis and lint tool for source code written in Apple's Swift programming language.


<a name="tcl" />
<h2>Tcl</h2>


- [Frink](http://catless.ncl.ac.uk/Programs/Frink) — A Tcl formatting and static check program (can prettify the program, minimise, obfuscate or just sanity check it).

- [Nagelfar](https://sourceforge.net/projects/nagelfar) — A static syntax checker for Tcl.

- [tclchecker ![GitHub Repo Stars](https://img.shields.io/github/stars/ActiveState/tdk) ![GitHub last commit](https://img.shields.io/github/last-commit/ActiveState/tdk)](https://github.com/ActiveState/tdk/blob/master/docs/3.0/TDK_3.0_Checker.txt) — A static syntax analysis module (as part of [TDK ![GitHub Repo Stars](https://img.shields.io/github/stars/ActiveState/tdk) ![GitHub last commit](https://img.shields.io/github/last-commit/ActiveState/tdk)](https://github.com/ActiveState/tdk)).


<a name="typescript" />
<h2>TypeScript</h2>


- [Angular ESLint ![GitHub Repo Stars](https://img.shields.io/github/stars/angular-eslint/angular-eslint) ![GitHub last commit](https://img.shields.io/github/last-commit/angular-eslint/angular-eslint)](https://github.com/angular-eslint/angular-eslint#readme) — Linter for Angular projects

- [Codelyzer](http://codelyzer.com) :warning: — A set of tslint rules for static code analysis of Angular 2 TypeScript projects.

- [ENRE-ts ![GitHub Repo Stars](https://img.shields.io/github/stars/xjtu-enre/ENRE-ts) ![GitHub last commit](https://img.shields.io/github/last-commit/xjtu-enre/ENRE-ts)](https://github.com/xjtu-enre/ENRE-ts) — ENRE (ENtity Relationship Extractor) is a tool for extraction of code entity dependencies or relationships from source code. ENRE-ts is a ENtity Relationship Extractor for ECMAScript and TypeScript based on @babel/parser.

- [fta](https://ftaproject.dev/) — Rust-based static analysis for TypeScript projects

- [stc](https://stc.dudy.dev) — Speedy TypeScript type checker written in Rust

- [tslint](https://palantir.github.io/tslint/) :warning: — TSLint has been deprecated as of 2019. Please see [this issue ![GitHub Repo Stars](https://img.shields.io/github/stars/palantir/tslint) ![GitHub last commit](https://img.shields.io/github/last-commit/palantir/tslint)](https://github.com/palantir/tslint/issues/4534) for more details. `typescript-eslint` is now your best option for linting TypeScript.
TSLint is an extensible static analysis tool that checks TypeScript code for readability, maintainability,  and functionality errors. It is widely supported across modern editors & build systems and can be customized  with your own lint rules, configurations, and formatters.

- [tslint-clean-code](https://www.npmjs.com/package/tslint-clean-code) — A set of TSLint rules inspired by the Clean Code handbook.

- [tslint-microsoft-contrib ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/tslint-microsoft-contrib) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/tslint-microsoft-contrib)](https://github.com/Microsoft/tslint-microsoft-contrib) :warning: — A set of tslint rules for static code analysis of TypeScript projects maintained by Microsoft.

- [TypeScript Call Graph ![GitHub Repo Stars](https://img.shields.io/github/stars/whyboris/TypeScript-Call-Graph) ![GitHub last commit](https://img.shields.io/github/last-commit/whyboris/TypeScript-Call-Graph)](https://github.com/whyboris/TypeScript-Call-Graph) :warning: — CLI to generate an interactive graph of functions and calls from your TypeScript files

- [TypeScript ESLint ![GitHub Repo Stars](https://img.shields.io/github/stars/typescript-eslint/typescript-eslint) ![GitHub last commit](https://img.shields.io/github/last-commit/typescript-eslint/typescript-eslint)](https://github.com/typescript-eslint/typescript-eslint) — TypeScript language extension for eslint.

- [zod](https://zod.dev) — TypeScript-first schema validation with static type inference. The goal is to eliminate duplicative type declarations. With Zod, you declare a validator once and Zod will automatically infer the static TypeScript type. It is easy to compose simpler types into complex data structures.


<a name="verilog" />
<h2>Verilog/SystemVerilog</h2>


- [Icarus Verilog ![GitHub Repo Stars](https://img.shields.io/github/stars/steveicarus/iverilog) ![GitHub last commit](https://img.shields.io/github/last-commit/steveicarus/iverilog)](https://github.com/steveicarus/iverilog) — A Verilog simulation and synthesis tool that operates by compiling source code written in IEEE-1364 Verilog into some target format

- [svls ![GitHub Repo Stars](https://img.shields.io/github/stars/dalance/svls) ![GitHub last commit](https://img.shields.io/github/last-commit/dalance/svls)](https://github.com/dalance/svls) — A Language Server Protocol implementation for Verilog and SystemVerilog, including lint capabilities.

- [verible-linter-action ![GitHub Repo Stars](https://img.shields.io/github/stars/chipsalliance/verible-linter-action) ![GitHub last commit](https://img.shields.io/github/last-commit/chipsalliance/verible-linter-action)](https://github.com/chipsalliance/verible-linter-action) — Automatic SystemVerilog linting in github actions with the help of Verible Used to lint Verilog and SystemVerilog source files and comment erroneous lines  of code in Pull Requests automatically.

- [Verilator](https://www.veripool.org/verilator) — A tool which converts Verilog to a cycle-accurate behavioral model in C++ or SystemC. Performs lint code-quality checks.

- [vscode-verilog-hdl-support ![GitHub Repo Stars](https://img.shields.io/github/stars/mshr-h/vscode-verilog-hdl-support) ![GitHub last commit](https://img.shields.io/github/last-commit/mshr-h/vscode-verilog-hdl-support)](https://github.com/mshr-h/vscode-verilog-hdl-support) — Verilog HDL/SystemVerilog/Bluespec SystemVerilog support for VS Code. Provides syntax highlighting and Linting support from Icarus Verilog, Vivado Logical Simulation, Modelsim and Verilator


<a name="vim-script" />
<h2>Vim Script</h2>


- [vint ![GitHub Repo Stars](https://img.shields.io/github/stars/Kuniwak/vint) ![GitHub last commit](https://img.shields.io/github/last-commit/Kuniwak/vint)](https://github.com/Kuniwak/vint) — Fast and Highly Extensible Vim script Language Lint implemented by Python.


## Multiple languages


- [ale ![GitHub Repo Stars](https://img.shields.io/github/stars/w0rp/ale) ![GitHub last commit](https://img.shields.io/github/last-commit/w0rp/ale)](https://github.com/w0rp/ale) — Asynchronous Lint Engine for Vim and NeoVim with support for many languages.

- [Android Studio](https://developer.android.com/studio) — Based on IntelliJ IDEA, and comes bundled with tools for Android including Android Lint.

- [AppChecker](https://npo-echelon.ru/en/solutions/appchecker.php) :copyright: — Static analysis for C/C++/C#, PHP and Java.

- [Application Inspector](https://www.ptsecurity.com/ww-en/products/ai) :copyright: — Commercial Static Code Analysis which generates exploits to verify vulnerabilities.

- [ApplicationInspector ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/ApplicationInspector) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/ApplicationInspector)](https://github.com/microsoft/ApplicationInspector) — Creates reports of over 400 rule patterns for feature detection (e.g. the use of cryptography or version control in apps).

- [ArchUnit](https://www.archunit.org) — Unit test your Java or Kotlin architecture.

- [Atom-Beautify](https://atom.io/packages/atom-beautify) :warning: — Beautify HTML, CSS, JavaScript, PHP, Python, Ruby, Java, C, C++, C#, Objective-C, CoffeeScript, TypeScript, Coldfusion, SQL, and more in Atom editor.

- [autocorrect](https://huacnlee.github.io/autocorrect) — A linter and formatter to help you to improve copywriting, correct spaces, words, punctuations between CJK (Chinese, Japanese, Korean).

- [Axivion Bauhaus Suite](https://www.axivion.com/en/products-services-9#products_bauhaussuite) :copyright: — Tracks down error-prone code locations, style violations, cloned or dead code, cyclic dependencies and more for C/C++, C#/.NET, Java and Ada 83/Ada 95.

- [Bearer ![GitHub Repo Stars](https://img.shields.io/github/stars/bearer/bearer) ![GitHub last commit](https://img.shields.io/github/last-commit/bearer/bearer)](https://github.com/bearer/bearer) — Open-Source static code analysis tool to discover,  filter and prioritize security risks and vulnerabilities  leading to sensitive data exposures (PII, PHI, PD).  Highly configurable and easily extensible,  built for security and engineering teams.

- [Better Code Hub](https://bettercodehub.com) :copyright: — Better Code Hub checks your GitHub codebase against 10 engineering guidelines devised by the authority in software quality, Software Improvement Group.

- [Betterscan CE ![GitHub Repo Stars](https://img.shields.io/github/stars/tcosolutions/betterscan-ce) ![GitHub last commit](https://img.shields.io/github/last-commit/tcosolutions/betterscan-ce)](https://github.com/tcosolutions/betterscan-ce) — Checks your code and infra (various Git repositories supported, cloud stacks, CLI, Web Interface platform, integrationss available) for security and quality issues. Code Scanning/SAST/Linting using many tools/Scanners deduplicated with One Report (AI optional).

- [biome](https://biomejs.dev) — A toolchain for web projects, aimed to provide functionalities to maintain them. Biome formats and lints code in a fraction of a second. It is the successor to Rome. It is designed to eventually replace Biome is designed to eventually replace Babel, ESLint, webpack, Prettier, Jest, and others.

- [BugProve](https://www.bugprove.com) :copyright: — BugProve is a firmware analysis platform featuring both static and dynamic analysis techniques to discover memory corruptions, command injections and other classes or common weaknesses in binary code. It also detects vulnerable dependencies, weak cryptographic parameters, misconfigurations, and more.

- [callGraph ![GitHub Repo Stars](https://img.shields.io/github/stars/koknat/callGraph) ![GitHub last commit](https://img.shields.io/github/last-commit/koknat/callGraph)](https://github.com/koknat/callGraph) — Statically generates a call graph image and displays it on screen.

- [CAST Highlight](https://www.castsoftware.com/products/highlight) :copyright: — Commercial Static Code Analysis which runs locally, but uploads the results to its cloud for presentation.

- [Checkmarx CxSAST](https://www.checkmarx.com/products/static-application-security-testing) :copyright: — Commercial Static Code Analysis which doesn't require pre-compilation.

- [ClassGraph ![GitHub Repo Stars](https://img.shields.io/github/stars/classgraph/classgraph) ![GitHub last commit](https://img.shields.io/github/last-commit/classgraph/classgraph)](https://github.com/classgraph/classgraph) — A classpath and module path scanner for querying or visualizing class metadata or class relatedness.

- [Clayton](https://www.getclayton.com/) :copyright: — AI-powered code reviews for Salesforce. Secure your developments, enforce best practice and control your technical debt in real-time.

- [coala](https://coala.io) :warning: — Language independent framework for creating code analysis - supports [over 60 languages](https://coala.io/languages) by default.

- [Cobra](https://spinroot.com/cobra) :copyright: — Structural source code analyzer by NASA's Jet Propulsion Laboratory.

- [Codacy](https://www.codacy.com) :copyright: — Code Analysis to ship Better Code, Faster.

- [Code Intelligence](https://www.code-intelligence.com) :copyright: — CI/CD-agnostic DevSecOps platform which combines industry-leading fuzzing engines for finding bugs and visualizing code coverage

- [Codeac](https://www.codeac.io/?ref=awesome-static-analysis) :copyright: — Automated code review tool integrates with GitHub, Bitbucket and GitLab (even self-hosted). Available for JavaScript, TypeScript, Python, Ruby, Go, PHP, Java, Docker, and more. (open-source free)

- [codeburner](https://groupon.github.io/codeburner) — Provides a unified interface to sort and act on the issues it finds.

- [codechecker](https://codechecker.readthedocs.io/en/latest) — A defect database and viewer extension for the Clang Static Analyzer with web GUI.

- [CodeFactor](https://codefactor.io) :copyright: — Automated Code Analysis for repos on GitHub or BitBucket.

- [CodeFlow](https://www.getcodeflow.com) :copyright: — Automated code analysis tool to deal with technical depth. Integrates with Bitbucket and Gitlab. (free for Open Source Projects)

- [CodeIt.Right](https://submain.com/products/codeit.right.aspx) :copyright: — CodeIt.Right&trade; provides a fast, automated way to ensure that your source code adheres to (your) predefined design and style guidelines as well as best coding practices.

- [Codemodder](https://codemodder.io/) — Codemodder is a pluggable framework for building expressive codemods. Use Codemodder when you need more than a linter or code formatting tool. Use it to fix non-trivial security issues and other code quality problems.

- [CodePatrol](https://cyber-security.claranet.fr/en/codepatrol) :copyright: — Automated SAST code reviews driven by security, supports 15+ languages and includes security training.

- [codeql ![GitHub Repo Stars](https://img.shields.io/github/stars/github/codeql) ![GitHub last commit](https://img.shields.io/github/last-commit/github/codeql)](https://github.com/github/codeql) — Deep code analysis - semantic queries and dataflow for several languages with VSCode plugin support.

- [CodeQue](https://codeque.co) — Ecosystem for structural matching JavaScript and TypeScript code. Offers search tool that understands code structure. Available as CLI tool and Visual Studio Code extension. It helps to search code faster and more accurately making you workflow more effective. Soon it will offer ESLint plugin to create your own rules in minutes to help with assuring codebase quality.

- [CodeRush](https://www.devexpress.com/products/coderush) :copyright: — Code creation, debugging, navigation, refactoring, analysis and visualization tools that use the Roslyn engine in Visual Studio 2015 and up.

- [CodeScan](https://www.codescan.io/) :copyright: — Code Quality and Security for Salesforce Developers. Made exclusively for the Salesforce platform, CodeScan’s code analysis solutions provide you with total visibility into your code health.

- [CodeScene](https://codescene.com) :copyright: — CodeScene is a quality visualization tool for software. Prioritize technical debt, detect delivery risks, and measure organizational aspects. Fully automated.

- [CodeSee](https://www.codesee.io/) :copyright: — CodeSee is mapping and automating your app's services, directories, file dependencies, and code changes. It's like Google Map, but for code.t

- [CodeSonar from GrammaTech](https://codesecure.com/our-products/codesonar/) :copyright: — Advanced, whole program, deep path, static analysis of C, C++, Java and C# with easy-to-understand explanations and code and path visualization.

- [Codety](https://www.codety.io) :copyright: — Codety Scanner is a comprehensive source code scanner that embeds 5000+ static code analysis rules, which aim to detect code issues for 20+ programming languages and IaC tools.

- [Codiga](https://www.codiga.io) :copyright: — Automated Code Reviews and Technical Debt management platform that supports 12+ languages.

- [Corrode ![GitHub Repo Stars](https://img.shields.io/github/stars/jameysharp/corrode) ![GitHub last commit](https://img.shields.io/github/last-commit/jameysharp/corrode)](https://github.com/jameysharp/corrode) :warning: — Semi-automatic translation from C to Rust. Could reveal bugs in the original implementation by showing Rust compiler warnings and errors. Superseded by C2Rust.

- [Coverity](https://www.synopsys.com/software-integrity/security-testing/static-analysis-sast.html) :copyright: — Synopsys Coverity supports 20 languages and over 70 frameworks including Ruby on rails, Scala, PHP, Python, JavaScript, TypeScript, Java, Fortran, C, C++, C#, VB.NET.

- [cpp-linter-action](https://cpp-linter.github.io/cpp-linter-action/) — A Github Action for linting C/C++ code integrating clang-tidy and clang-format to collect feedback provided in the form of thread comments and/or annotations.

- [cqc ![GitHub Repo Stars](https://img.shields.io/github/stars/xcatliu/cqc) ![GitHub last commit](https://img.shields.io/github/last-commit/xcatliu/cqc)](https://github.com/xcatliu/cqc) :warning: — Check your code quality for js, jsx, vue, css, less, scss, sass and styl files.

- [DeepCode](https://www.deepcode.ai) :warning: :copyright: — DeepCode was acquired by Snyk is now Snyk Code.

- [DeepSource](https://deepsource.com) :copyright: — In-depth static analysis to find issues in verticals of bug risks, security, anti-patterns, performance, documentation and style. Native integrations with GitHub, GitLab and Bitbucket. Less than 5% false positives.

- [Depends ![GitHub Repo Stars](https://img.shields.io/github/stars/multilang-depends/depends) ![GitHub last commit](https://img.shields.io/github/last-commit/multilang-depends/depends)](https://github.com/multilang-depends/depends) — Analyses the comprehensive dependencies of code elements for Java, C/C++, Ruby.

- [DevSkim ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/devskim) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/devskim)](https://github.com/microsoft/devskim) — Regex-based static analysis tool for Visual Studio, VS Code, and Sublime Text - C/C++, C#, PHP, ASP, Python, Ruby, Java, and others.

- [dotenet-format ![GitHub Repo Stars](https://img.shields.io/github/stars/dotnet/format) ![GitHub last commit](https://img.shields.io/github/last-commit/dotnet/format)](https://github.com/dotnet/format) — A code formatter for .NET. Preferences will be read from an `.editorconfig` file, if present, otherwise a default set of preferences will be used. At this time dotnet-format is able to format C# and Visual Basic projects with a subset of supported `.editorconfig` options.

- [Embold](https://embold.io) :copyright: — Intelligent software analytics platform that identifies design issues, code issues, duplication and metrics. Supports Java, C, C++, C#, JavaScript, TypeScript, Python, Go, Kotlin and more.

- [emerge ![GitHub Repo Stars](https://img.shields.io/github/stars/glato/emerge) ![GitHub last commit](https://img.shields.io/github/last-commit/glato/emerge)](https://github.com/glato/emerge) — Emerge is a source code and dependency visualizer that can be used to gather insights about source code structure, metrics, dependencies and complexity of software projects. After scanning the source code of a project it provides you an interactive web interface to explore and analyze your project by using graph structures.

- [ESLint ![GitHub Repo Stars](https://img.shields.io/github/stars/eslint/eslint) ![GitHub last commit](https://img.shields.io/github/last-commit/eslint/eslint)](https://github.com/eslint/eslint) — An extensible linter for JS, following the ECMAScript standard.

- [ezno](https://kaleidawave.github.io/posts/introducing-ezno/) — A JavaScript compiler and TypeScript checker written in Rust with a focus on static analysis and runtime performance. Ezno's type checker is built from scratch.  The checker is fully compatible with TypeScript type annotations and can work without any type annotations at all.

- [Find Security Bugs](https://find-sec-bugs.github.io) — The SpotBugs plugin for security audits of Java web applications and Android applications. (Also work with Kotlin, Groovy and Scala projects)

- [Fortify](https://www.microfocus.com/en-us/cyberres/application-security/static-code-analyzer) :copyright: — A commercial static analysis platform that supports the scanning of C/C++, C#, VB.NET, VB6, ABAP/BSP, ActionScript, Apex, ASP.NET, Classic ASP, VB Script, Cobol, ColdFusion, HTML, Java, JS, JSP, MXML/Flex, Objective-C, PHP, PL/SQL, T-SQL, Python (2.6, 2.7), Ruby (1.9.3), Swift, Scala, VB, and XML.

- [Freeplane Code Explorer](https://docs.freeplane.org/user-documentation/Code_Explorer.html) — The Code Explorer mode in Freeplane is designed for analyzing the structure and dependencies  of code compiled to JVM class files.  It also allows displaying ArchUnit test results directly in Freeplane,  if Freeplane is running and ArchUnit detects rule violations during the tests.


- [Goodcheck](https://sider.github.io/goodcheck) — Regexp based customizable linter.

- [goone ![GitHub Repo Stars](https://img.shields.io/github/stars/masibw/goone) ![GitHub last commit](https://img.shields.io/github/last-commit/masibw/goone)](https://github.com/masibw/goone) :warning: — Finds N+1 queries (SQL calls in a for loop) in go code

- [graudit](http://www.justanotherhacker.com) — Grep rough audit - source code auditing tool.

- [HCL AppScan Source](https://www.hcltechsw.com/products/appscan) :copyright: — Commercial Static Code Analysis.

- [Hopper ![GitHub Repo Stars](https://img.shields.io/github/stars/cuplv/hopper) ![GitHub last commit](https://img.shields.io/github/last-commit/cuplv/hopper)](https://github.com/cuplv/hopper) :warning: — A static analysis tool written in scala for languages that run on JVM.

- [Hound CI](https://houndci.com) :warning: — Comments on style violations in GitHub pull requests. Supports Coffeescript, Go, HAML, JavaScript, Ruby, SCSS and Swift.

- [imhotep ![GitHub Repo Stars](https://img.shields.io/github/stars/justinabrahms/imhotep) ![GitHub last commit](https://img.shields.io/github/last-commit/justinabrahms/imhotep)](https://github.com/justinabrahms/imhotep) :warning: — Comment on commits coming into your repository and check for syntactic errors and general lint warnings.

- [include-gardener ![GitHub Repo Stars](https://img.shields.io/github/stars/feddischson/include_gardener) ![GitHub last commit](https://img.shields.io/github/last-commit/feddischson/include_gardener)](https://github.com/feddischson/include_gardener) :warning: — A multi-language static analyzer for C/C++/Obj-C/Python/Ruby to create a graph (in dot or graphml format) which shows all `#include` relations of a given set of files.

- [Infer](https://fbinfer.com) — A static analyzer for Java, C and Objective-C

- [Kiuwan](https://www.kiuwan.com/code-security-sast) :copyright: — Identify and remediate cyber threats in a blazingly fast, collaborative environment, with seamless integration in your SDLC. Python, C\C++, Java, C#, PHP and more.

- [Klocwork](https://www.perforce.com/products/klocwork) :copyright: — Quality and Security Static analysis for C/C++, Java and C#.

- [LGTM](https://lgtm.com/) :copyright: — Find security vulnerabilities, variants, and critical code quality issues using CodeQL queries over source code. Automatic PR code review; free for open source. Formerly semmle. It supports public Git repositories hosted on Bitbucket Cloud, GitHub.com, GitLab.com.

- [lizard ![GitHub Repo Stars](https://img.shields.io/github/stars/terryyin/lizard) ![GitHub last commit](https://img.shields.io/github/last-commit/terryyin/lizard)](https://github.com/terryyin/lizard) — Lizard is an extensible Cyclomatic Complexity Analyzer for many programming languages  including C/C++ (doesn't require all the header files or Java imports).  It also does copy-paste detection (code clone detection/code duplicate detection) and many other forms of static code analysis. Counts lines of code without comments, CCN (cyclomatic complexity number), token count of functions, parameter count of functions.

- [Mega-Linter](https://nvuillam.github.io/mega-linter/) — Mega-Linter can handle any type of project thanks to its 70+ embedded Linters,
 its advanced reporting, runnable on any CI system or locally,
 with assisted installation and configuration, able to apply formatting and fixes

- [Mobb](https://mobb.ai) :copyright: — Mobb is a trusted, automatic vulnerability fixer that secures applications, reduces security backlogs,  and frees developers to focus on innovation. Mobb is free for open-source projects.

- [MOPSA](https://mopsa.lip6.fr) — A static analyzer designed to easily reuse abstract domains across widely different languages (such as C and Python).

- [oclint](http://oclint.org) :warning: — A static source code analysis tool to improve quality and reduce defects for C, C++ and Objective-C.

- [Offensive 360](https://offensive360.com/) :copyright: — Commercial Static Code Analysis system doesn't require building the source code or pre-compilation.

- [OpenRewrite](https://docs.openrewrite.org/) — OpenRewrite [fixes common static analysis issues](https://docs.openrewrite.org/running-recipes/popular-recipe-guides/common-static-analysis-issue-remediation)  reported through Sonar and other tools using a Maven and Gradle plugin or the Moderne CLI.

- [OpenStaticAnalyzer ![GitHub Repo Stars](https://img.shields.io/github/stars/sed-inf-u-szeged/OpenStaticAnalyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/sed-inf-u-szeged/OpenStaticAnalyzer)](https://github.com/sed-inf-u-szeged/OpenStaticAnalyzer) — OpenStaticAnalyzer is a source code analyzer tool, which can perform deep static analysis of the source code of complex systems.

- [oxc ![GitHub Repo Stars](https://img.shields.io/github/stars/web-infra-dev/oxc) ![GitHub last commit](https://img.shields.io/github/last-commit/web-infra-dev/oxc)](https://github.com/web-infra-dev/oxc) — The Oxidation Compiler is creating a suite of high-performance tools for the JavaScript / TypeScript language re-written in Rust.

- [parasoft](https://www.parasoft.com/) :copyright: — Automated Software Testing Solutions for unit-, API-, and web UI testing. Complies with MISRA, OWASP, and others.

- [pfff ![GitHub Repo Stars](https://img.shields.io/github/stars/facebookarchive/pfff) ![GitHub last commit](https://img.shields.io/github/last-commit/facebookarchive/pfff)](https://github.com/facebookarchive/pfff/wiki/Main) :warning: — Facebook's tools for code analysis, visualizations, or style-preserving source transformation for many languages.

- [Pixee](https://pixee.ai) :copyright: — Pixeebot finds security and code quality issues in your code and creates merge-ready pull requests with recommended fixes.

- [PMD](https://pmd.github.io) — A source code analyzer for Java, Salesforce Apex, Javascript, PLSQL, XML, XSL and others.

- [pre-commit](https://pre-commit.com) — A framework for managing and maintaining multi-language pre-commit hooks.

- [Precaution](https://www.securesauce.dev/) — Precaution is a static analysis security tool (SAST) designed to find potentially critical vulnerabilities in source code prior to production. It is available as a CLI, GitHub Action, and GitHub App.

- [Prettier](https://prettier.io) — An opinionated code formatter.

- [Pronto ![GitHub Repo Stars](https://img.shields.io/github/stars/prontolabs/pronto) ![GitHub last commit](https://img.shields.io/github/last-commit/prontolabs/pronto)](https://github.com/prontolabs/pronto) — Quick automated code review of your changes. Supports more than 40 runners for various languages, including Clang, Elixir, JavaScript, PHP, Ruby and more.

- [PT.PM ![GitHub Repo Stars](https://img.shields.io/github/stars/PositiveTechnologies/PT.PM) ![GitHub last commit](https://img.shields.io/github/last-commit/PositiveTechnologies/PT.PM)](https://github.com/PositiveTechnologies/PT.PM) :warning: — An engine for searching patterns in the source code, based on Unified AST or UST. At present time C#, Java, PHP, PL/SQL, T-SQL, and JavaScript are supported. Patterns can be described within the code or using a DSL.

- [Putout ![GitHub Repo Stars](https://img.shields.io/github/stars/coderaiser/putout) ![GitHub last commit](https://img.shields.io/github/last-commit/coderaiser/putout)](https://github.com/coderaiser/putout) — Pluggable and configurable code transformer with built-in eslint, babel plugins support for js, jsx typescript, flow, markdown, yaml and json.

- [PVS-Studio](https://pvs-studio.com) :copyright: — A ([conditionally free](https://pvs-studio.com/en/order/open-source-license) for FOSS and individual developers) static analysis of C, C++, C# and Java code. For advertising purposes [you can propose a large FOSS project for analysis by PVS employees ![GitHub Repo Stars](https://img.shields.io/github/stars/viva64/pvs-studio-check-list) ![GitHub last commit](https://img.shields.io/github/last-commit/viva64/pvs-studio-check-list)](https://github.com/viva64/pvs-studio-check-list). Supports CWE mapping, OWASP ASVS, MISRA, AUTOSAR and SEI CERT coding standards.

- [pylama](https://klen.github.io/pylama/) — Code audit tool for Python and JavaScript. Wraps pycodestyle, pydocstyle, PyFlakes, Mccabe, Pylint, and more

- [Qwiet AI](https://qwiet.ai/) :copyright: — Identify vulnerabilities that are unique to your code base before they reach production. Leverages the Code Property Graph (CPG) to run its analyses concurrently in a single graph of graphs. Automatically finds business logic flaws in dev like hardcoded secrets and logic bombs

- [Refactoring Essentials](https://marketplace.visualstudio.com/items?itemName=SharpDevelopTeam.RefactoringEssentialsforVisualStudio) — The free Visual Studio 2015 extension for C# and VB.NET refactorings, including code best practice analyzers.

- [relint ![GitHub Repo Stars](https://img.shields.io/github/stars/codingjoe/relint) ![GitHub last commit](https://img.shields.io/github/last-commit/codingjoe/relint)](https://github.com/codingjoe/relint) — A static file linter that allows you to write custom rules using regular expressions (RegEx).

- [ReSharper](https://www.jetbrains.com/resharper) :copyright: — Extends Visual Studio with on-the-fly code inspections for C#, VB.NET, ASP.NET, JavaScript, TypeScript and other technologies.

- [RIPS](https://www.ripstech.com) :copyright: — A static source code analyser for vulnerabilities in PHP scripts.

- [Roslyn Analyzers ![GitHub Repo Stars](https://img.shields.io/github/stars/dotnet/roslyn-analyzers) ![GitHub last commit](https://img.shields.io/github/last-commit/dotnet/roslyn-analyzers)](https://github.com/dotnet/roslyn-analyzers) — Roslyn-based implementation of FxCop analyzers.

- [Roslyn Security Guard](https://security-code-scan.github.io) — Project that focuses on the identification of potential vulnerabilities such as SQL injection, cross-site scripting (XSS), CSRF, cryptography weaknesses, hardcoded passwords and many more.

- [SafeQL](https://safeql.dev) — Validate and auto-generate TypeScript types from raw SQL queries in PostgreSQL. SafeQL is an ESLint plugin for writing SQL queries in a type-safe way.

- [SAST Online](https://sast.online/) :copyright: — Check the Android Source code thoroughly to uncover and address potential security concerns and vulnerabilities. Static application security testing (Static Code Analysis) tool Online

- [Scrutinizer](https://scrutinizer-ci.com) :copyright: — A proprietary code quality checker that can be integrated with GitHub.

- [Security Code Scan](https://security-code-scan.github.io) — Security code analyzer for C# and VB.NET. Detects various security vulnerability patterns: SQLi, XSS, CSRF, XXE, Open Redirect, etc. Integrates into Visual Studio 2015 and newer. Detects various security vulnerability patterns: SQLi, XSS, CSRF, XXE, Open Redirect, etc.

- [Semgrep](https://semgrep.dev) — A fast, open-source, static analysis tool for finding bugs and enforcing code standards at editor, commit, and CI time. Its rules look like the code you already write;  no abstract syntax trees or regex wrestling. Supports 17+ languages.

- [Semgrep Supply Chain](https://semgrep.dev/products/semgrep-supply-chain) :copyright: — Quickly find and remediate high-priority security issues.  Semgrep Supply Chain prioritizes the 2% of vulnerabilities that are reachable from your code.

- [ShiftLeft Scan ![GitHub Repo Stars](https://img.shields.io/github/stars/ShiftLeftSecurity/sast-scan) ![GitHub last commit](https://img.shields.io/github/last-commit/ShiftLeftSecurity/sast-scan)](https://github.com/ShiftLeftSecurity/sast-scan) — Scan is a free open-source DevSecOps platform for detecting security issues in source code and dependencies. It supports a broad range of languages and CI/CD pipelines.

- [shipshape ![GitHub Repo Stars](https://img.shields.io/github/stars/google/shipshape) ![GitHub last commit](https://img.shields.io/github/last-commit/google/shipshape)](https://github.com/google/shipshape) :warning: — Static program analysis platform that allows custom analyzers to plug in through a common interface.

- [Sigrid](https://www.softwareimprovementgroup.com/solutions/sigrid-software-assurance-platform/) :copyright: — Sigrid helps you to improve your software by measuring your system's code quality,  and then compares the results against a benchmark of thousands of industry systems to give you concrete advice on areas where you can improve.

- [Similarity Tester](https://dickgrune.com/Programs/similarity_tester/) — A tool that finds similarities between or within files to support you encountering DRY principle violations.

- [Snyk Code](https://snyk.io) :copyright: — Snyk Code finds security vulnerabilities based on AI. Its speed of analysis allow us to  analyse your code in real time and deliver results when you hit the save button in your IDE.  Supported languages are Java, JavaScript, Python, PHP, C#, Go and TypeScript. Integrations with  GitHub, BitBucket and Gitlab. It is free to try and part of the Snyk platform also covering SCA,  containers and IaC.

- [SonarCloud](https://sonarcloud.io) :copyright: — SonarCloud enables your team to deliver clean code consistently and efficiently with a code review  tool that easily integrates into the cloud DevOps platforms and extend your CI/CD workflow.  SonarCloud is free for open source projects.

- [SonarLint](https://sonarlint.org) — SonarLint is a free IDE extension available for IntelliJ, VS Code, Visual Studio, and Eclipse,  to find and fix coding issues in real-time, flagging issues as you code, just like a spell-checker.  More than a linter, it also delivers rich contextual guidance to help developers understand  why there is an issue, assess the risk, and educate them on how to fix it.

- [SonarQube](https://sonarqube.org) — SonarQube empowers development teams with a code quality and security solution that deeply integrates into your enterprise environment; enabling you to deploy clean code consistently and reliably. SonarQube provides a free and open source Community Edition.

- [Sonatype](https://www.sonatype.com) :copyright: — Reports known vulnerabilities in common dependencies and recommends updated packages to minimize breaking changes

- [Soto Platform](https://www.hello2morrow.com/products/sotograph) :copyright: — Suite of static analysis tools consisting of the three components Sotoarc (Architecture Analysis), Sotograph (Quality Analysis), and Sotoreport (Quality report). Helps find differences between architecture and implementation, interface violations (e.g. external access of private parts of subsystems, detection of all classes, files, packages and subsystems which are strongly coupled by cyclical relationships and more. The Sotograph product family runs on Windows and Linux. 

- [SourceMeter](https://www.sourcemeter.com/) :copyright: — Static Code Analysis for C/C++, Java, C#, Python, and RPG III and RPG IV versions (including free-form).

- [sqlvet ![GitHub Repo Stars](https://img.shields.io/github/stars/houqp/sqlvet) ![GitHub last commit](https://img.shields.io/github/last-commit/houqp/sqlvet)](https://github.com/houqp/sqlvet) — Performs static analysis on raw SQL queries in your Go code base to surface potential runtime errors. It checks for SQL syntax error, identifies unsafe queries that could potentially lead to SQL injections makes sure column count matches value count in INSERT statements and validates table- and column names.

- [StaticReviewer](https://securityreviewer.atlassian.net/wiki/spaces/KC/pages/196633/Static+Reviewer) :copyright: — Static Reviewer executes code checks according to the most relevant Secure Coding Standards, OWASP, CWE, CVE, CVSS, MISRA, CERT, for 40+ programming languages, using 1000+ built-in validation rules for Security, Deadcode & Best Practices Available a module for Software Composition Analysis (SCA) to find vulnerabilities in open source and third party libraries.

- [Super-Linter ![GitHub Repo Stars](https://img.shields.io/github/stars/github/super-linter) ![GitHub last commit](https://img.shields.io/github/last-commit/github/super-linter)](https://github.com/github/super-linter) — Combination of multiple linters to install as a GitHub Action.

- [Svace](https://www.ispras.ru/en/technologies/svace/) :copyright: — Static code analysis tool for Java,C,C++,C#,Go.

- [Synopsys](https://www.synopsys.com/software-integrity/security-testing/static-analysis-sast.html) :copyright: — A commercial static analysis platform that allows for scanning of multiple languages (C/C++, Android, C#, Java, JS, PHP, Python, Node.JS, Ruby, Fortran, and Swift).

- [Teamscale](https://www.cqse.eu/en/teamscale/overview/) :copyright: — Static and dynamic analysis tool supporting more than 25 languages and direct IDE integration. Free hosting for Open Source projects available on request. Free academic licenses available.

- [TencentCodeAnalysis](https://tca.tencent.com/) — Tencent Cloud Code Analysis (TCA for short, code-named CodeDog inside the company early) is a comprehensive platform for code analysis and issue tracking. TCA consist of three components, server, web and client. It integrates of a number of self-developed tools, and also supports dynamic integration of code analysis tools in various programming languages.

- [ThreatMapper ![GitHub Repo Stars](https://img.shields.io/github/stars/deepfence/ThreatMapper) ![GitHub last commit](https://img.shields.io/github/last-commit/deepfence/ThreatMapper)](https://github.com/deepfence/ThreatMapper) — Vulnerability Scanner and Risk Evaluation for containers, serverless and hosts at runtime. ThreatMapper generates runtime BOMs from dependencies and operating system packages, matches against multiple threat feeds, scans for unprotected secrets, and scores issues based on severity and risk-of-exploit.

- [todocheck ![GitHub Repo Stars](https://img.shields.io/github/stars/preslavmihaylov/todocheck) ![GitHub last commit](https://img.shields.io/github/last-commit/preslavmihaylov/todocheck)](https://github.com/preslavmihaylov/todocheck) — Linter for integrating annotated TODOs with your issue trackers

- [trivy ![GitHub Repo Stars](https://img.shields.io/github/stars/aquasecurity/trivy) ![GitHub last commit](https://img.shields.io/github/last-commit/aquasecurity/trivy)](https://github.com/aquasecurity/trivy) — A Simple and Comprehensive Vulnerability Scanner for Containers and other Artifacts, Suitable for CI. Trivy detects vulnerabilities of OS packages (Alpine, RHEL, CentOS, etc.) and application dependencies (Bundler, Composer, npm, yarn, etc.). Checks containers and filesystems.


- [trunk](https://trunk.io) :copyright: — Modern repositories include many technologies, each with its own set of linters. With 30+ linters and counting, Trunk makes it dead-simple to identify, install, configure, and run the right linters, static analyzers, and formatters for all your repos.

- [TscanCode ![GitHub Repo Stars](https://img.shields.io/github/stars/Tencent/TscanCode) ![GitHub last commit](https://img.shields.io/github/last-commit/Tencent/TscanCode)](https://github.com/Tencent/TscanCode) — A fast and accurate static analysis solution for C/C++, C#, Lua codes provided by Tencent. Using GPLv3 license.

- [Undebt ![GitHub Repo Stars](https://img.shields.io/github/stars/Yelp/undebt) ![GitHub last commit](https://img.shields.io/github/last-commit/Yelp/undebt)](https://github.com/Yelp/undebt) — Language-independent tool for massive, automatic, programmable refactoring based on simple pattern definitions.

- [Understand](https://www.scitools.com) :copyright: — Code visualization tool that provides code analysis, standards testing, metrics, graphing, dependency analysis and more for Ada, VHDL, and others.

- [Unibeautify](https://unibeautify.com) :warning: — Universal code beautifier with a GitHub app. Supports HTML, CSS, JavaScript, TypeScript, JSX, Vue, C++, Go, Objective-C, Java, Python, PHP, GraphQL, Markdown, and more.

- [Upsource](https://www.jetbrains.com/upsource) :copyright: — Code review tool with static code analysis and code-aware navigation for Java, PHP, JavaScript and Kotlin.

- [Veracode](https://www.veracode.com/security/static-code-analysis) :copyright: — Find flaws in binaries and bytecode without requiring source. Support all major programming languages: Java, .NET, JavaScript, Swift, Objective-C, C, C++ and more.

- [WALA ![GitHub Repo Stars](https://img.shields.io/github/stars/wala/WALA) ![GitHub last commit](https://img.shields.io/github/last-commit/wala/WALA)](https://github.com/wala/WALA) — Static analysis capabilities for Java bytecode and related languages and for JavaScript.

- [weggli ![GitHub Repo Stars](https://img.shields.io/github/stars/googleprojectzero/weggli) ![GitHub last commit](https://img.shields.io/github/last-commit/googleprojectzero/weggli)](https://github.com/googleprojectzero/weggli) — A fast and robust semantic search tool for C and C++ codebases. It is designed to help security researchers identify interesting functionality in large codebases.

- [WhiteHat Application Security Platform](https://www.whitehatsec.com/platform/static-application-security-testing) :copyright: — WhiteHat Scout (for Developers) combined with WhiteHat Sentinel Source (for Operations) supporting WhiteHat Top 40 and OWASP Top 10.

- [Wotan ![GitHub Repo Stars](https://img.shields.io/github/stars/fimbullinter/wotan) ![GitHub last commit](https://img.shields.io/github/last-commit/fimbullinter/wotan)](https://github.com/fimbullinter/wotan) :warning: — Pluggable TypeScript and JavaScript linter.

- [XCode](https://developer.apple.com/xcode) :copyright: — XCode provides a pretty decent UI for [Clang's](https://clang-analyzer.llvm.org/xcode.html) static code analyzer (C/C++, Obj-C).


## Other



<a name="dotenv" />
<h2>.env</h2>


- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshield is a CLI application that runs in your local environment  or in a CI environment to help you detect more than 350+ types of secrets,  as well as other potential security vulnerabilities or policy breaks affecting your codebase.


<a name="ansible" />
<h2>Ansible</h2>


- [kics](https://kics.io/) — Find security vulnerabilities, compliance issues, and infrastructure misconfigurations in your infrastructure-as-code. Supports Terraform, Kubernetes, Docker, AWS CloudFormation and Ansible

- [Steampunk Spotter](https://steampunk.si/spotter/) :copyright: — Ansible Playbook Scanning Tool that analyzes and offers recommendations for your playbooks.


<a name="archive" />
<h2>Archive</h2>


- [alquitran ![GitHub Repo Stars](https://img.shields.io/github/stars/ferivoz/alquitran) ![GitHub last commit](https://img.shields.io/github/last-commit/ferivoz/alquitran)](https://github.com/ferivoz/alquitran) — Inspects tar archives and tries to spot portability issues in regard  to POSIX 2017 pax specification and common tar implementations.
This project is intended to be used by maintainers of projects who want to offer portable source code archives for as many systems as possible. Checking tar archives with alquitran before publishing them should help spotting issues before they reach distributors and users.

- [packj](https://packj.dev) — Packj (pronounced package) is a command line (CLI) tool to vet open-source software packages for "risky" attributes that make them vulnerable to supply chain attacks. This is the tool behind our large-scale security analysis platform Packj.dev that continuously vets packages and provides free reports.

- [pure ![GitHub Repo Stars](https://img.shields.io/github/stars/ronomon/pure) ![GitHub last commit](https://img.shields.io/github/last-commit/ronomon/pure)](https://github.com/ronomon/pure) :warning: — Pure is a static analysis file format checker that checks ZIP files for dangerous compression ratios, spec deviations, malicious archive signatures, mismatching local and central directory headers, ambiguous UTF-8 filenames, directory and symlink traversals, invalid MS-DOS dates, overlapping headers, overflow, underflow,  sparseness, accidental buffer bleeds etc.


<a name="arm" />
<h2>Azure Resource Manager</h2>


- [AzSK](https://azsk.azurewebsites.net/) — Secure DevOps kit for Azure (AzSK) provides security IntelliSense, Security Verification Tests (SVTs), CICD scan vulnerabilities, compliance issues, and infrastructure misconfiguration in your infrastructure-as-code. Supports Azure via ARM.


<a name="binary" />
<h2>Binaries</h2>


- [angr ![GitHub Repo Stars](https://img.shields.io/github/stars/angr/angr) ![GitHub last commit](https://img.shields.io/github/last-commit/angr/angr)](https://github.com/angr/angr) — Binary code analysis tool that also supports symbolic execution.

- [binbloom ![GitHub Repo Stars](https://img.shields.io/github/stars/quarkslab/binbloom) ![GitHub last commit](https://img.shields.io/github/last-commit/quarkslab/binbloom)](https://github.com/quarkslab/binbloom) — Analyzes a raw binary firmware and determines features like endianness or the loading address.  The tool is compatible with all architectures.
Loading address: binbloom can parse a raw binary firmware and determine its loading address. Endianness: binbloom can use heuristics to determine the endianness of a firmware. UDS Database: binbloom can parse a raw binary firmware and check if it contains an array containing UDS command IDs.

- [BinSkim ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/binskim) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/binskim)](https://github.com/Microsoft/binskim) — A binary static analysis tool that provides security and correctness results for Windows portable executables.

- [Black Duck](https://www.blackducksoftware.com) :copyright: — Tool to analyze source code and binaries for reusable code, necessary licenses and potential security aspects.

- [bloaty ![GitHub Repo Stars](https://img.shields.io/github/stars/google/bloaty) ![GitHub last commit](https://img.shields.io/github/last-commit/google/bloaty)](https://github.com/google/bloaty) — Ever wondered what's making your binary big? Bloaty McBloatface will show you a size profile of the binary so you can understand what's taking up space inside. Bloaty performs a deep analysis of the binary. Using custom ELF, DWARF, and Mach-O parsers,  Bloaty aims to accurately attribute every byte of the binary to the symbol or compileunit that produced it.  It will even disassemble the binary looking for references to anonymous data. F

- [cargo-bloat ![GitHub Repo Stars](https://img.shields.io/github/stars/RazrFalcon/cargo-bloat) ![GitHub last commit](https://img.shields.io/github/last-commit/RazrFalcon/cargo-bloat)](https://github.com/RazrFalcon/cargo-bloat) — Find out what takes most of the space in your executable. supports ELF (Linux, BSD), Mach-O (macOS) and PE (Windows) binaries.

- [cwe_checker ![GitHub Repo Stars](https://img.shields.io/github/stars/fkie-cad/cwe_checker) ![GitHub last commit](https://img.shields.io/github/last-commit/fkie-cad/cwe_checker)](https://github.com/fkie-cad/cwe_checker) — cwe_checker finds vulnerable patterns in binary executables.

- [Ghidra](https://ghidra-sre.org) — A software reverse engineering (SRE) suite of tools developed by NSA's Research Directorate in support of the Cybersecurity mission

- [Hopper](https://www.hopperapp.com/) :copyright: — macOS and Linux reverse engineering tool that lets you disassemble, decompile and debug applications. Hopper displays the code using different representations, e.g. the Control Flow Graph, and the pseudo-code of a procedure. Supports Apple Silicon.

- [IDA Free](https://www.hex-rays.com/products/ida/support/download_freeware) :copyright: — Binary code analysis tool.

- [Jakstab ![GitHub Repo Stars](https://img.shields.io/github/stars/jkinder/jakstab) ![GitHub last commit](https://img.shields.io/github/last-commit/jkinder/jakstab)](https://github.com/jkinder/jakstab) — Jakstab is an Abstract Interpretation-based, integrated disassembly and static analysis framework for designing analyses on executables and recovering reliable control flow graphs.

- [JEB Decompiler](https://www.pnfsoftware.com/) :copyright: — Decompile and debug binary code. Break down and analyze document files. Android Dalvik, MIPS, ARM, Intel x86, Java, WebAssembly & Ethereum Decompilers.

- [ktool](https://ktool.cynder.me/en/latest/ktool.html) — Fully cross-platform toolkit and library for MachO+Obj-C editing/analysis. Includes a cli kit, a curses GUI, ObjC header dumping, and much more.

- [Manalyze ![GitHub Repo Stars](https://img.shields.io/github/stars/JusticeRage/Manalyze) ![GitHub last commit](https://img.shields.io/github/last-commit/JusticeRage/Manalyze)](https://github.com/JusticeRage/Manalyze) — A static analyzer, which checks portable executables for malicious content.

- [mcsema ![GitHub Repo Stars](https://img.shields.io/github/stars/lifting-bits/mcsema) ![GitHub last commit](https://img.shields.io/github/last-commit/lifting-bits/mcsema)](https://github.com/lifting-bits/mcsema) :warning: — Framework for lifting x86, amd64, aarch64, sparc32, and sparc64 program binaries to LLVM bitcode. It translates ("lifts") executable binaries from native machine code to LLVM bitcode, which is very useful for performing program analysis methods.

- [Nauz File Detector ![GitHub Repo Stars](https://img.shields.io/github/stars/horsicq/Nauz-File-Detector) ![GitHub last commit](https://img.shields.io/github/last-commit/horsicq/Nauz-File-Detector)](https://github.com/horsicq/Nauz-File-Detector) — Static Linker/Compiler/Tool detector for Windows, Linux and MacOS.

- [rust-audit ![GitHub Repo Stars](https://img.shields.io/github/stars/Shnatsel/rust-audit) ![GitHub last commit](https://img.shields.io/github/last-commit/Shnatsel/rust-audit)](https://github.com/Shnatsel/rust-audit) — Audit Rust binaries for known bugs or security vulnerabilities. This works by embedding data about the dependency tree (Cargo.lock) in JSON format into a dedicated linker section of the compiled executable.

- [Twiggy](https://rustwasm.github.io/twiggy) — Analyzes a binary's call graph to profile code size. The goal is to slim down wasm binary size.

- [VMware chap ![GitHub Repo Stars](https://img.shields.io/github/stars/vmware/chap) ![GitHub last commit](https://img.shields.io/github/last-commit/vmware/chap)](https://github.com/vmware/chap) — chap analyzes un-instrumented ELF core files for leaks, memory growth, and corruption.  It is sufficiently reliable that it can be used in automation to catch leaks before  they are committed. As an interactive tool, it helps explain memory growth,  can identify some forms of corruption, and supplements a debugger  by giving the status of various memory locations. 

- [zydis](https://zydis.re) — Fast and lightweight x86/x86-64 disassembler library


<a name="buildtool" />
<h2>Build tools</h2>


- [checkmake ![GitHub Repo Stars](https://img.shields.io/github/stars/mrtazz/checkmake) ![GitHub last commit](https://img.shields.io/github/last-commit/mrtazz/checkmake)](https://github.com/mrtazz/checkmake) :warning: — Linter / Analyzer for Makefiles.

- [portlint](https://www.freebsd.org/cgi/man.cgi?query=portlint&sektion=1&manpath=FreeBSD+8.1-RELEASE+and+Ports) — A verifier for FreeBSD and DragonFlyBSD port directories.


<a name="css" />
<h2>CSS/SASS/SCSS</h2>


- [CSS Stats](https://cssstats.com) — Potentially interesting stats on stylesheets.

- [CSScomb ![GitHub Repo Stars](https://img.shields.io/github/stars/csscomb/csscomb.js) ![GitHub last commit](https://img.shields.io/github/last-commit/csscomb/csscomb.js)](https://github.com/csscomb/csscomb.js) — A coding style formatter for CSS. Supports own configurations to make style sheets beautiful and consistent.

- [CSSLint](http://csslint.net) — Does basic syntax checking and finds problematic patterns or signs of inefficiency.

- [GraphMyCSS.com](https://graphmycss.com) — CSS Specificity Graph Generator.

- [Nu Html Checker](https://validator.github.io/validator/) — Helps you catch problems in your HTML/CSS/SVG

- [Parker ![GitHub Repo Stars](https://img.shields.io/github/stars/katiefenn/parker) ![GitHub last commit](https://img.shields.io/github/last-commit/katiefenn/parker)](https://github.com/katiefenn/parker) :warning: — Stylesheet analysis tool.

- [PostCSS](https://postcss.org) — A tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

- [Project Wallace CSS Analyzer](https://www.projectwallace.com) — Analytics for CSS, part of [Project Wallace](https://www.projectwallace.com).

- [sass-lint ![GitHub Repo Stars](https://img.shields.io/github/stars/sasstools/sass-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/sasstools/sass-lint)](https://github.com/sasstools/sass-lint) :warning: — A Node-only Sass linter for both sass and scss syntax.

- [scsslint ![GitHub Repo Stars](https://img.shields.io/github/stars/brigade/scss-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/brigade/scss-lint)](https://github.com/brigade/scss-lint) — Linter for SCSS files.

- [Specificity Graph](https://jonassebastianohlsson.com/specificity-graph) — CSS Specificity Graph Generator.

- [Stylelint](http://stylelint.io) — Linter for SCSS/CSS files.


<a name="configfile" />
<h2>Config Files</h2>


- [dotenv-linter](https://dotenv-linter.readthedocs.io/en/latest) — Linting dotenv files like a charm.

- [dotenv-linter (Rust)](https://dotenv-linter.github.io/#/) — Lightning-fast linter for .env files. Written in Rust

- [gixy ![GitHub Repo Stars](https://img.shields.io/github/stars/yandex/gixy) ![GitHub last commit](https://img.shields.io/github/last-commit/yandex/gixy)](https://github.com/yandex/gixy) — A tool to analyze Nginx configuration. The main goal is to prevent misconfiguration and automate flaw detection.


<a name="configmanagement" />
<h2>Configuration Management</h2>


- [ansible-lint](https://docs.ansible.com/ansible-lint) — Checks playbooks for practices and behaviour that could potentially be improved.

- [AWS CloudFormation Guard ![GitHub Repo Stars](https://img.shields.io/github/stars/aws-cloudformation/cloudformation-guard) ![GitHub last commit](https://img.shields.io/github/last-commit/aws-cloudformation/cloudformation-guard)](https://github.com/aws-cloudformation/cloudformation-guard) — Check local CloudFormation templates against policy-as-code rules  and generate rules from existing templates.

- [AzSK](https://azsk.azurewebsites.net/) — Secure DevOps kit for Azure (AzSK) provides security IntelliSense, Security Verification Tests (SVTs), CICD scan vulnerabilities, compliance issues, and infrastructure misconfiguration in your infrastructure-as-code. Supports Azure via ARM.

- [cfn-lint ![GitHub Repo Stars](https://img.shields.io/github/stars/awslabs/cfn-python-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/cfn-python-lint)](https://github.com/awslabs/cfn-python-lint) — AWS Labs CloudFormation linter.

- [cfn_nag ![GitHub Repo Stars](https://img.shields.io/github/stars/stelligent/cfn_nag) ![GitHub last commit](https://img.shields.io/github/last-commit/stelligent/cfn_nag)](https://github.com/stelligent/cfn_nag) — A linter for AWS CloudFormation templates.

- [checkov](https://www.checkov.io) — Static analysis tool for Terraform files (tf>=v0.12), preventing cloud misconfigs at build time.

- [cookstyle](https://docs.chef.io/cookstyle.html) — Cookstyle is a linting tool based on the RuboCop Ruby linting tool for Chef cookbooks.

- [foodcritic](http://www.foodcritic.io) — A lint tool that checks Chef cookbooks for common problems.

- [kics](https://kics.io/) — Find security vulnerabilities, compliance issues, and infrastructure misconfigurations in your infrastructure-as-code. Supports Terraform, Kubernetes, Docker, AWS CloudFormation and Ansible

- [metadata-json-lint ![GitHub Repo Stars](https://img.shields.io/github/stars/voxpupuli/metadata-json-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/voxpupuli/metadata-json-lint)](https://github.com/voxpupuli/metadata-json-lint) — Tool to check the validity of Puppet metadata.json files.

- [Puppet Lint ![GitHub Repo Stars](https://img.shields.io/github/stars/rodjek/puppet-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/rodjek/puppet-lint)](https://github.com/rodjek/puppet-lint) :warning: — Check that your Puppet manifests conform to the style guide.

- [Steampunk Spotter](https://steampunk.si/spotter/) :copyright: — Ansible Playbook Scanning Tool that analyzes and offers recommendations for your playbooks.

- [terraform-compliance](https://terraform-compliance.com) — A lightweight, compliance- and security focused, BDD test framework against Terraform.

- [terrascan ![GitHub Repo Stars](https://img.shields.io/github/stars/cesar-rodriguez/terrascan) ![GitHub last commit](https://img.shields.io/github/last-commit/cesar-rodriguez/terrascan)](https://github.com/cesar-rodriguez/terrascan) — Collection of security and best practice tests for static code analysis of Terraform templates.

- [tflint ![GitHub Repo Stars](https://img.shields.io/github/stars/wata727/tflint) ![GitHub last commit](https://img.shields.io/github/last-commit/wata727/tflint)](https://github.com/wata727/tflint) — A Terraform linter for detecting errors that can not be detected by `terraform plan`.

- [tfsec ![GitHub Repo Stars](https://img.shields.io/github/stars/tfsec/tfsec) ![GitHub last commit](https://img.shields.io/github/last-commit/tfsec/tfsec)](https://github.com/tfsec/tfsec) — Terraform static analysis tool that prevents potential security issues by checking cloud misconfigurations at build time and directly integrates with the HCL parser for better results. Checks for violations of AWS, Azure and GCP security best practice recommendations.


<a name="container" />
<h2>Containers</h2>


- [anchore](https://anchore.io) — Discover, analyze, and certify container images. A service that analyzes Docker images and applies user-defined acceptance policies  to allow automated container image validation and certification 

- [clair ![GitHub Repo Stars](https://img.shields.io/github/stars/coreos/clair) ![GitHub last commit](https://img.shields.io/github/last-commit/coreos/clair)](https://github.com/coreos/clair) — Vulnerability Static Analysis for Containers.

- [collector ![GitHub Repo Stars](https://img.shields.io/github/stars/banyanops/collector) ![GitHub last commit](https://img.shields.io/github/last-commit/banyanops/collector)](https://github.com/banyanops/collector) :warning: — Run arbitrary scripts inside containers, and gather useful information.

- [dagda ![GitHub Repo Stars](https://img.shields.io/github/stars/eliasgranderubio/dagda) ![GitHub last commit](https://img.shields.io/github/last-commit/eliasgranderubio/dagda)](https://github.com/eliasgranderubio/dagda) :warning: — Perform static analysis of known vulnerabilities in docker images/containers.

- [Docker Label Inspector ![GitHub Repo Stars](https://img.shields.io/github/stars/garethr/docker-label-inspector) ![GitHub last commit](https://img.shields.io/github/last-commit/garethr/docker-label-inspector)](https://github.com/garethr/docker-label-inspector) :warning: — Lint and validate Dockerfile labels.

- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshield is a CLI application that runs in your local environment  or in a CI environment to help you detect more than 350+ types of secrets,  as well as other potential security vulnerabilities or policy breaks affecting your codebase.

- [Haskell Dockerfile Linter ![GitHub Repo Stars](https://img.shields.io/github/stars/lukasmartinelli/hadolint) ![GitHub last commit](https://img.shields.io/github/last-commit/lukasmartinelli/hadolint)](https://github.com/lukasmartinelli/hadolint) — A smarter Dockerfile linter that helps you build best practice Docker images.

- [kics](https://kics.io/) — Find security vulnerabilities, compliance issues, and infrastructure misconfigurations in your infrastructure-as-code. Supports Terraform, Kubernetes, Docker, AWS CloudFormation and Ansible

- [krane ![GitHub Repo Stars](https://img.shields.io/github/stars/appvia/krane) ![GitHub last commit](https://img.shields.io/github/last-commit/appvia/krane)](https://github.com/appvia/krane) :warning: — Krane is a simple Kubernetes RBAC static analysis tool.
It identifies potential security risks in K8s RBAC design and makes suggestions on how to mitigate them. Krane dashboard presents current RBAC security posture and lets you navigate through its definition.

- [OpenSCAP](https://www.open-scap.org/) — Suite of automated audit tools to examine the configuration and  known vulnerabilities following the NIST-certified Security  Content Automation Protocol (SCAP).

- [Qualys Container Security](https://www.qualys.com/apps/container-security) :copyright: — Container native application protection to provide visibility and control of containerized applications.

- [sysdig](https://sysdig.com/) :copyright: — A secure DevOps platform for cloud and container forensics. Built on an open source stack, Sysdig provides Docker image scanning and created Falco, the open standard for runtime threat detection for containers, Kubernetes and cloud. 

- [Vuls](https://vuls.io/) — Agent-less Linux vulnerability scanner based on information from NVD, OVAL, etc.  It has some container image support, although is not a container specific tool.


<a name="ci" />
<h2>Continuous Integration</h2>


- [actionlint](https://rhysd.github.io/actionlint) — Static checker for GitHub Actions workflow files. Provides an online version.

- [AzSK](https://azsk.azurewebsites.net/) — Secure DevOps kit for Azure (AzSK) provides security IntelliSense, Security Verification Tests (SVTs), CICD scan vulnerabilities, compliance issues, and infrastructure misconfiguration in your infrastructure-as-code. Supports Azure via ARM.

- [Code Climate](https://codeclimate.com) — The open and extensible static analysis platform, for everyone.

- [Codecov](https://about.codecov.io/) :copyright: — Codecov is a company that provides code coverage tools for developers and engineering leaders  to gain visibility into their code coverage.
They offer flexible and unified reporting, seamless coverage insights, and robust coverage controls. Codecov supports over 20 languages and is CI/CD agnostic. Over 29,000 organizations and 1 million developers use Codecov. Codecov has recently joined Sentry.

- [CodeRabbit](https://coderabbit.ai) :copyright: — AI-powered code review tool that helps developers write better code faster.  CodeRabbit provides automated code reviews,  identifies security vulnerabilities, and suggests code improvements.  It integrates with GitHub and GitLab.

- [composer-dependency-analyser ![GitHub Repo Stars](https://img.shields.io/github/stars/shipmonk-rnd/composer-dependency-analyser) ![GitHub last commit](https://img.shields.io/github/last-commit/shipmonk-rnd/composer-dependency-analyser)](https://github.com/shipmonk-rnd/composer-dependency-analyser) — Fast detection of composer dependency issues.

* 💪 Powerful: Detects unused, shadow and misplaced composer dependencies
* ⚡ Performant: Scans 15 000 files in 2s!
* ⚙️ Configurable: Fine-grained ignores via PHP config
* 🕸️ Lightweight: No composer dependencies
* 🍰 Easy-to-use: No config needed for first try
* ✨ Compatible: PHP >= 7.2


- [Diffblue](https://www.diffblue.com/) :copyright: — Diffblue is a software company that provides AI-powered code analysis and testing solutions for software development teams.
Its technology helps developers automate testing, find bugs, and reduce manual labor in their software development processes. The company's main product, Diffblue Cover, uses AI to generate and run unit tests for Java code, helping to catch errors and improve code quality.

- [exakat](https://www.exakat.io) — An automated code reviewing engine for PHP.

- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshield is a CLI application that runs in your local environment  or in a CI environment to help you detect more than 350+ types of secrets,  as well as other potential security vulnerabilities or policy breaks affecting your codebase.

- [Goblint](https://goblint.in.tum.de) — A static analyzer for the analysis of multi-threaded C programs. Its primary focus is the  detection of data races, but it also reports other runtime errors, such as buffer overflows and null-pointer dereferences.

- [Nitpick CI](https://nitpick-ci.com) :copyright: — Automated PHP code review.

- [PullRequest](https://www.pullrequest.com) :copyright: — Code review as a service with built-in static analysis.  Increase velocity and reduce technical debt through quality code review by expert engineers backed by best-in-class automation.

- [quality ![GitHub Repo Stars](https://img.shields.io/github/stars/apiology/quality) ![GitHub last commit](https://img.shields.io/github/last-commit/apiology/quality)](https://github.com/apiology/quality) :warning: — Runs quality checks on your code using community tools, and makes sure your numbers don't get any worse over time.

- [QuantifiedCode ![GitHub Repo Stars](https://img.shields.io/github/stars/quantifiedcode/quantifiedcode) ![GitHub last commit](https://img.shields.io/github/last-commit/quantifiedcode/quantifiedcode)](https://github.com/quantifiedcode/quantifiedcode) :warning: — Automated code review & repair. It helps you to keep track of issues and metrics in your software projects, and can be easily extended to support new types of analyses.

- [RefactorFirst ![GitHub Repo Stars](https://img.shields.io/github/stars/jimbethancourt/RefactorFirst) ![GitHub last commit](https://img.shields.io/github/last-commit/jimbethancourt/RefactorFirst)](https://github.com/jimbethancourt/RefactorFirst) — Identifies and prioritizes God Classes and Highly Coupled classes in Java codebases you should refactor first.

- [Reviewdog ![GitHub Repo Stars](https://img.shields.io/github/stars/haya14busa/reviewdog) ![GitHub last commit](https://img.shields.io/github/last-commit/haya14busa/reviewdog)](https://github.com/haya14busa/reviewdog) — A tool for posting review comments from any linter in any code hosting service.

- [Symfony Insight](https://insight.symfony.com/) :copyright: — Detect security risks, find bugs and provide actionable metrics for PHP projects.

- [Violations Lib ![GitHub Repo Stars](https://img.shields.io/github/stars/tomasbjerre/violations-lib) ![GitHub last commit](https://img.shields.io/github/last-commit/tomasbjerre/violations-lib)](https://github.com/tomasbjerre/violations-lib) — Java library for parsing report files from static code analysis. Used by a bunch of Jenkins, Maven and Gradle plugins.


<a name="deno" />
<h2>Deno</h2>


- [deno_lint ![GitHub Repo Stars](https://img.shields.io/github/stars/denoland/deno_lint) ![GitHub last commit](https://img.shields.io/github/last-commit/denoland/deno_lint)](https://github.com/denoland/deno_lint) — Official linter for Deno.


<a name="embedded" />
<h2>Embedded</h2>


- [oelint-adv ![GitHub Repo Stars](https://img.shields.io/github/stars/priv-kweihmann/oelint-adv) ![GitHub last commit](https://img.shields.io/github/last-commit/priv-kweihmann/oelint-adv)](https://github.com/priv-kweihmann/oelint-adv) — Linter for bitbake recipes used in open-embedded and YOCTO


<a name="erb" />
<h2>Embedded Ruby (a.k.a. ERB, eRuby)</h2>


- [ERB Lint ![GitHub Repo Stars](https://img.shields.io/github/stars/Shopify/erb-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/Shopify/erb-lint)](https://github.com/Shopify/erb-lint) — Lint your ERB or HTML files

- [htmlbeautifier ![GitHub Repo Stars](https://img.shields.io/github/stars/threedaymonk/htmlbeautifier) ![GitHub last commit](https://img.shields.io/github/last-commit/threedaymonk/htmlbeautifier)](https://github.com/threedaymonk/htmlbeautifier) — A normaliser/beautifier for HTML that also understands embedded Ruby. Ideal for tidying up Rails templates.


<a name="gherkin" />
<h2>Gherkin</h2>


- [gherkin-lint ![GitHub Repo Stars](https://img.shields.io/github/stars/vsiakka/gherkin-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/vsiakka/gherkin-lint)](https://github.com/vsiakka/gherkin-lint) — A linter for the Gherkin-Syntax written in Javascript.


<a name="html" />
<h2>HTML</h2>


- [Angular ESLint ![GitHub Repo Stars](https://img.shields.io/github/stars/angular-eslint/angular-eslint) ![GitHub last commit](https://img.shields.io/github/last-commit/angular-eslint/angular-eslint)](https://github.com/angular-eslint/angular-eslint#readme) — Linter for Angular projects

- [Bootlint ![GitHub Repo Stars](https://img.shields.io/github/stars/twbs/bootlint) ![GitHub last commit](https://img.shields.io/github/last-commit/twbs/bootlint)](https://github.com/twbs/bootlint) :warning: — An HTML linter for Bootstrap projects.

- [ERB Lint ![GitHub Repo Stars](https://img.shields.io/github/stars/Shopify/erb-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/Shopify/erb-lint)](https://github.com/Shopify/erb-lint) — Lint your ERB or HTML files

- [grunt-bootlint ![GitHub Repo Stars](https://img.shields.io/github/stars/twbs/grunt-bootlint) ![GitHub last commit](https://img.shields.io/github/last-commit/twbs/grunt-bootlint)](https://github.com/twbs/grunt-bootlint) :warning: — A Grunt wrapper for [Bootlint ![GitHub Repo Stars](https://img.shields.io/github/stars/twbs/bootlint) ![GitHub last commit](https://img.shields.io/github/last-commit/twbs/bootlint)](https://github.com/twbs/bootlint), the HTML linter for Bootstrap projects.

- [gulp-bootlint ![GitHub Repo Stars](https://img.shields.io/github/stars/tschortsch/gulp-bootlint) ![GitHub last commit](https://img.shields.io/github/last-commit/tschortsch/gulp-bootlint)](https://github.com/tschortsch/gulp-bootlint) :warning: — A gulp wrapper for [Bootlint ![GitHub Repo Stars](https://img.shields.io/github/stars/twbs/bootlint) ![GitHub last commit](https://img.shields.io/github/last-commit/twbs/bootlint)](https://github.com/twbs/bootlint), the HTML linter for Bootstrap projects.

- [HTML Inspector ![GitHub Repo Stars](https://img.shields.io/github/stars/philipwalton/html-inspector) ![GitHub last commit](https://img.shields.io/github/last-commit/philipwalton/html-inspector)](https://github.com/philipwalton/html-inspector) :warning: — HTML Inspector is a code quality tool to help you and your team write better markup.

- [HTML Tidy](http://www.html-tidy.org) — Corrects and cleans up HTML and XML documents by fixing markup errors and upgrading legacy code to modern standards.

- [HTML-Validate](https://html-validate.org/) — Offline HTML5 validator.

- [htmlbeautifier ![GitHub Repo Stars](https://img.shields.io/github/stars/threedaymonk/htmlbeautifier) ![GitHub last commit](https://img.shields.io/github/last-commit/threedaymonk/htmlbeautifier)](https://github.com/threedaymonk/htmlbeautifier) — A normaliser/beautifier for HTML that also understands embedded Ruby. Ideal for tidying up Rails templates.

- [HTMLHint](https://htmlhint.com) — A Static Code Analysis Tool for HTML.

- [Nu Html Checker](https://validator.github.io/validator/) — Helps you catch problems in your HTML/CSS/SVG

- [Polymer-analyzer ![GitHub Repo Stars](https://img.shields.io/github/stars/Polymer/tools) ![GitHub last commit](https://img.shields.io/github/last-commit/Polymer/tools)](https://github.com/Polymer/tools/tree/master/packages/analyzer) — A static analysis framework for Web Components.


<a name="json" />
<h2>JSON</h2>


- [jsonlint](https://jsonlint.com/) — A JSON parser and validator with a CLI. Standalone version of jsonlint.com

- [Spectral](https://stoplight.io/open-source/spectral) — A flexible JSON/YAML linter, with out-of-the-box support for OpenAPI v2/v3 and AsyncAPI v2.


<a name="kubernetes" />
<h2>Kubernetes</h2>


- [chart-testing ![GitHub Repo Stars](https://img.shields.io/github/stars/helm/chart-testing) ![GitHub last commit](https://img.shields.io/github/last-commit/helm/chart-testing)](https://github.com/helm/chart-testing) — ct is the tool for testing Helm charts.  It is meant to be used for linting and testing pull requests.  It automatically detects charts changed against the target branch.

- [clusterlint ![GitHub Repo Stars](https://img.shields.io/github/stars/digitalocean/clusterlint) ![GitHub last commit](https://img.shields.io/github/last-commit/digitalocean/clusterlint)](https://github.com/digitalocean/clusterlint) — Clusterlint queries live Kubernetes clusters for resources, executes common and  platform specific checks against these resources and provides actionable feedback to cluster operators.  It is a non invasive tool that is run externally. Clusterlint does not alter the resource configurations.

- [Datree](https://datree.io/) — A CLI tool to prevent Kubernetes misconfigurations by ensuring that manifests and Helm charts follow best practices as well as your organization’s policies

- [kics](https://kics.io/) — Find security vulnerabilities, compliance issues, and infrastructure misconfigurations in your infrastructure-as-code. Supports Terraform, Kubernetes, Docker, AWS CloudFormation and Ansible

- [klint ![GitHub Repo Stars](https://img.shields.io/github/stars/uswitch/klint) ![GitHub last commit](https://img.shields.io/github/last-commit/uswitch/klint)](https://github.com/uswitch/klint) — A tool that listens to changes in Kubernetes resources and runs linting rules against them. Identify and debug erroneous objects and nudge objects in line with the policies as both change over time. Klint helps us encode checks and proactively alert teams when they need to take action.

- [krane ![GitHub Repo Stars](https://img.shields.io/github/stars/appvia/krane) ![GitHub last commit](https://img.shields.io/github/last-commit/appvia/krane)](https://github.com/appvia/krane) :warning: — Krane is a simple Kubernetes RBAC static analysis tool.
It identifies potential security risks in K8s RBAC design and makes suggestions on how to mitigate them. Krane dashboard presents current RBAC security posture and lets you navigate through its definition.

- [kube-hunter](https://aquasecurity.github.io/kube-hunter/) — Hunt for security weaknesses in Kubernetes clusters.

- [kube-lint ![GitHub Repo Stars](https://img.shields.io/github/stars/viglesiasce/kube-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/viglesiasce/kube-lint)](https://github.com/viglesiasce/kube-lint) — A linter for Kubernetes resources with a customizable rule set. You define a list of rules that you would like to validate against your  resources and kube-lint will evaluate those rules against them.

- [kube-linter ![GitHub Repo Stars](https://img.shields.io/github/stars/stackrox/kube-linter) ![GitHub last commit](https://img.shields.io/github/last-commit/stackrox/kube-linter)](https://github.com/stackrox/kube-linter) — KubeLinter is a static analysis tool that checks Kubernetes YAML files  and Helm charts to ensure the applications represented in them adhere to best practices.

- [kube-score](https://kube-score.com) — Static code analysis of your Kubernetes object definitions.

- [kubeconform ![GitHub Repo Stars](https://img.shields.io/github/stars/yannh/kubeconform) ![GitHub last commit](https://img.shields.io/github/last-commit/yannh/kubeconform)](https://github.com/yannh/kubeconform) — A fast Kubernetes manifests validator with support for custom resources.

It is inspired by, contains code from and is designed to stay close to [Kubeval](https://analysis-tools.dev/tool/kubeval),
but with the following improvements:
* high performance: will validate & download manifests over multiple routines, caching downloaded files in memory
* configurable list of remote, or local schemas locations, enabling validating Kubernetes custom resources (CRDs) and offline validation capabilities
* uses by default a self-updating fork of the schemas registry maintained by the kubernetes-json-schema project - which guarantees up-to-date schemas for all recent versions of Kubernetes.


- [KubeLinter ![GitHub Repo Stars](https://img.shields.io/github/stars/stackrox/kube-linter) ![GitHub last commit](https://img.shields.io/github/last-commit/stackrox/kube-linter)](https://github.com/stackrox/kube-linter) — KubeLinter is a static analysis tool that checks Kubernetes YAML files and Helm charts to ensure the applications represented in them adhere to best practices.

- [kubeval](https://kubeval.instrumenta.dev) — Validates your Kubernetes configuration files and supports multiple Kubernetes versions.


<a name="latex" />
<h2>LaTeX</h2>


- [ChkTeX](http://www.nongnu.org/chktex) — A linter for LaTex which catches some typographic errors LaTeX oversees.

- [lacheck](https://www.ctan.org/pkg/lacheck) — A tool for finding common mistakes in LaTeX documents.

- [TeXLab](https://texlab.netlify.app) — A Language Server Protocol implementation for TeX/LaTeX, including lint capabilities.


<a name="laravel" />
<h2>Laravel</h2>


- [Enlightn](https://www.laravel-enlightn.com/) — A static and dynamic analysis tool for Laravel applications that provides recommendations to improve the performance, security and code reliability of Laravel apps. Contains 120 automated checks.

- [larastan ![GitHub Repo Stars](https://img.shields.io/github/stars/larastan/larastan) ![GitHub last commit](https://img.shields.io/github/last-commit/larastan/larastan)](https://github.com/larastan/larastan) — Adds static analysis to Laravel improving developer productivity and code quality. It is a wrapper around PHPStan.


<a name="make" />
<h2>Makefiles</h2>


- [checkmake ![GitHub Repo Stars](https://img.shields.io/github/stars/mrtazz/checkmake) ![GitHub last commit](https://img.shields.io/github/last-commit/mrtazz/checkmake)](https://github.com/mrtazz/checkmake) :warning: — Linter / Analyzer for Makefiles.

- [portlint](https://www.freebsd.org/cgi/man.cgi?query=portlint&sektion=1&manpath=FreeBSD+8.1-RELEASE+and+Ports) — A verifier for FreeBSD and DragonFlyBSD port directories.


<a name="markdown" />
<h2>Markdown</h2>


- [markdownlint ![GitHub Repo Stars](https://img.shields.io/github/stars/DavidAnson/markdownlint) ![GitHub last commit](https://img.shields.io/github/last-commit/DavidAnson/markdownlint)](https://github.com/DavidAnson/markdownlint) — Node.js -based style checker and lint tool for Markdown/CommonMark files.

- [mdformat](https://mdformat.rtfd.io) — CommonMark compliant Markdown formatter

- [mdl ![GitHub Repo Stars](https://img.shields.io/github/stars/mivok/markdownlint) ![GitHub last commit](https://img.shields.io/github/last-commit/mivok/markdownlint)](https://github.com/mivok/markdownlint) — A tool to check Markdown files and flag style issues.

- [remark-lint](https://remark.js.org) — Pluggable Markdown code style linter written in JavaScript.

- [textlint](https://textlint.github.io/) — textlint is an open source text linting utility written in JavaScript.


<a name="meta" />
<h2>Metalinter</h2>


- [ciocheck ![GitHub Repo Stars](https://img.shields.io/github/stars/ContinuumIO/ciocheck) ![GitHub last commit](https://img.shields.io/github/last-commit/ContinuumIO/ciocheck)](https://github.com/ContinuumIO/ciocheck) :warning: — Linter, formatter and test suite helper. As a linter, it is a wrapper around `pep8`, `pydocstyle`, `flake8`, and `pylint`.

- [flake8 ![GitHub Repo Stars](https://img.shields.io/github/stars/PyCQA/flake8) ![GitHub last commit](https://img.shields.io/github/last-commit/PyCQA/flake8)](https://github.com/PyCQA/flake8) — A wrapper around `pyflakes`, `pycodestyle` and `mccabe`.

- [flakeheaven](https://pypi.org/project/flakeheaven/) — flakeheaven is a python linter built around flake8 to enable inheritable and complex toml configuration.

- [Go Meta Linter ![GitHub Repo Stars](https://img.shields.io/github/stars/alecthomas/gometalinter) ![GitHub last commit](https://img.shields.io/github/last-commit/alecthomas/gometalinter)](https://github.com/alecthomas/gometalinter) :warning: — Concurrently run Go lint tools and normalise their output. Use `golangci-lint` for new projects.

- [goreporter ![GitHub Repo Stars](https://img.shields.io/github/stars/360EntSecGroup-Skylar/goreporter) ![GitHub last commit](https://img.shields.io/github/last-commit/360EntSecGroup-Skylar/goreporter)](https://github.com/360EntSecGroup-Skylar/goreporter) — Concurrently runs many linters and normalises their output to a report.

- [multilint ![GitHub Repo Stars](https://img.shields.io/github/stars/adamchainz/multilint) ![GitHub last commit](https://img.shields.io/github/last-commit/adamchainz/multilint)](https://github.com/adamchainz/multilint) :warning: — A wrapper around `flake8`, `isort` and `modernize`.

- [prospector ![GitHub Repo Stars](https://img.shields.io/github/stars/PyCQA/prospector) ![GitHub last commit](https://img.shields.io/github/last-commit/PyCQA/prospector)](https://github.com/PyCQA/prospector) — A wrapper around `pylint`, `pep8`, `mccabe` and others.


<a name="mobile" />
<h2>Mobile</h2>


- [Android Lint](http://tools.android.com/tips/lint) — Run static analysis on Android projects.

- [android-lint-summary](https://passy.github.io/android-lint-summary) :warning: — Combines lint errors of multiple projects into one output, check lint results of multiple sub-projects at once.

- [FlowDroid ![GitHub Repo Stars](https://img.shields.io/github/stars/secure-software-engineering/FlowDroid) ![GitHub last commit](https://img.shields.io/github/last-commit/secure-software-engineering/FlowDroid)](https://github.com/secure-software-engineering/FlowDroid) — Static taint analysis tool for Android applications.

- [iblessing](https://www.kitploit.com/2020/08/iblessing-ios-security-exploiting.html) :warning: — iblessing is an iOS security exploiting toolkit. It can be used for reverse engineering, binary analysis and vulnerability mining.

- [Mariana Trench](https://mariana-tren.ch/) — Our security focused static analysis tool for Android and Java applications. Mariana Trench analyzes Dalvik bytecode and is built to run fast on large codebases (10s of millions of lines of code). It can find vulnerabilities as code changes, before it ever lands in your repository.

- [Oversecured](https://oversecured.com) :copyright: — Enterprise vulnerability scanner for Android and iOS apps. It allows app owners and developers to secure each new version of a mobile app by integrating Oversecured into the development process.

- [paprika ![GitHub Repo Stars](https://img.shields.io/github/stars/GeoffreyHecht/paprika) ![GitHub last commit](https://img.shields.io/github/last-commit/GeoffreyHecht/paprika)](https://github.com/GeoffreyHecht/paprika) :warning: — A toolkit to detect some code smells in analyzed Android applications.

- [qark ![GitHub Repo Stars](https://img.shields.io/github/stars/linkedin/qark) ![GitHub last commit](https://img.shields.io/github/last-commit/linkedin/qark)](https://github.com/linkedin/qark) :warning: — Tool to look for several security related Android application vulnerabilities.

- [redex](https://fbredex.com) — Redex provides a framework for reading, writing, and analyzing .dex files, and a set of optimization passes  that use this framework to improve the bytecode. An APK optimized by Redex should be smaller and faster.


<a name="nix" />
<h2>Nix</h2>


- [deadnix ![GitHub Repo Stars](https://img.shields.io/github/stars/astro/deadnix) ![GitHub last commit](https://img.shields.io/github/last-commit/astro/deadnix)](https://github.com/astro/deadnix) — Scan Nix files for dead code (unused variable bindings)

- [statix](https://git.peppe.rs/languages/statix/about/) — Lints and suggestions for the Nix programming language. "statix check" highlights antipatterns in Nix code. "statix fix" can fix several such occurrences.


<a name="nodejs" />
<h2>Node.js</h2>


- [lockfile-lint ![GitHub Repo Stars](https://img.shields.io/github/stars/lirantal/lockfile-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/lirantal/lockfile-lint)](https://github.com/lirantal/lockfile-lint) — Lint an npm or yarn lockfile to analyze and detect security issues

- [njsscan](https://opensecurity.in) — A static application testing (SAST) tool that can find insecure code patterns in your node.js applications using simple pattern matcher from libsast and syntax-aware semantic code pattern search tool semgrep.

- [NodeJSScan](https://opensecurity.in) :warning: — A static security code scanner for Node.js applications powered by libsast and semgrep that builds on the njsscan cli tool. It features a UI with various dashboards about an application's security status.

- [standard](http://standardjs.com) — An npm module that checks for Javascript Styleguide issues.


<a name="package" />
<h2>Packages</h2>


- [composer-dependency-analyser ![GitHub Repo Stars](https://img.shields.io/github/stars/shipmonk-rnd/composer-dependency-analyser) ![GitHub last commit](https://img.shields.io/github/last-commit/shipmonk-rnd/composer-dependency-analyser)](https://github.com/shipmonk-rnd/composer-dependency-analyser) — Fast detection of composer dependency issues.

* 💪 Powerful: Detects unused, shadow and misplaced composer dependencies
* ⚡ Performant: Scans 15 000 files in 2s!
* ⚙️ Configurable: Fine-grained ignores via PHP config
* 🕸️ Lightweight: No composer dependencies
* 🍰 Easy-to-use: No config needed for first try
* ✨ Compatible: PHP >= 7.2


- [lintian](https://wiki.debian.org/Lintian) — Static analysis tool for Debian packages.

- [rpmlint ![GitHub Repo Stars](https://img.shields.io/github/stars/rpm-software-management/rpmlint) ![GitHub last commit](https://img.shields.io/github/last-commit/rpm-software-management/rpmlint)](https://github.com/rpm-software-management/rpmlint) — Tool for checking common errors in rpm packages.


<a name="prometheus" />
<h2>Prometheus</h2>


- [promformat ![GitHub Repo Stars](https://img.shields.io/github/stars/facetoe/promformat) ![GitHub last commit](https://img.shields.io/github/last-commit/facetoe/promformat)](https://github.com/facetoe/promformat) :warning: — Promformat is a PromQL formatter written in Python.

- [promval ![GitHub Repo Stars](https://img.shields.io/github/stars/facetoe/promval) ![GitHub last commit](https://img.shields.io/github/last-commit/facetoe/promval)](https://github.com/facetoe/promval) — PromQL validator written in Python. It can be used to validate that PromQL expressions are written as expected.


<a name="protobuf" />
<h2>Protocol Buffers</h2>


- [buf](https://buf.build) — Provides a CLI linter that enforces good API design choices and structure

- [protolint ![GitHub Repo Stars](https://img.shields.io/github/stars/yoheimuta/protolint) ![GitHub last commit](https://img.shields.io/github/last-commit/yoheimuta/protolint)](https://github.com/yoheimuta/protolint) — Pluggable linter and fixer to enforce Protocol Buffer style and conventions.


<a name="puppet" />
<h2>Puppet</h2>


- [metadata-json-lint ![GitHub Repo Stars](https://img.shields.io/github/stars/voxpupuli/metadata-json-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/voxpupuli/metadata-json-lint)](https://github.com/voxpupuli/metadata-json-lint) — Tool to check the validity of Puppet metadata.json files.


<a name="rails" />
<h2>Rails</h2>


- [dawnscanner ![GitHub Repo Stars](https://img.shields.io/github/stars/thesp0nge/dawnscanner) ![GitHub last commit](https://img.shields.io/github/last-commit/thesp0nge/dawnscanner)](https://github.com/thesp0nge/dawnscanner) — A static analysis security scanner for ruby written web applications. It supports Sinatra, Padrino and Ruby on Rails frameworks.


<a name="security" />
<h2>Security/SAST</h2>


- [AzSK](https://azsk.azurewebsites.net/) — Secure DevOps kit for Azure (AzSK) provides security IntelliSense, Security Verification Tests (SVTs), CICD scan vulnerabilities, compliance issues, and infrastructure misconfiguration in your infrastructure-as-code. Supports Azure via ARM.

- [brakeman](https://brakemanscanner.org) — A static analysis security vulnerability scanner for Ruby on Rails applications.

- [Credential Digger ![GitHub Repo Stars](https://img.shields.io/github/stars/SAP/credential-digger) ![GitHub last commit](https://img.shields.io/github/last-commit/SAP/credential-digger)](https://github.com/SAP/credential-digger) — Credential Digger is a GitHub scanning tool that identifies hardcoded credentials (Passwords, API Keys, Secret Keys, Tokens, personal information, etc),  and filtering the false positive data through a machine learning model called [Password Model](https://huggingface.co/SAPOSS/password-model). This scanner is able to detect passwords and non structured tokens with a low false positive rate. 

- [Datree](https://datree.io/) — A CLI tool to prevent Kubernetes misconfigurations by ensuring that manifests and Helm charts follow best practices as well as your organization’s policies

- [detect-secrets ![GitHub Repo Stars](https://img.shields.io/github/stars/Yelp/detect-secrets) ![GitHub last commit](https://img.shields.io/github/last-commit/Yelp/detect-secrets)](https://github.com/Yelp/detect-secrets) — An enterprise friendly way of detecting and preventing secrets in code.
It does this by running periodic diff outputs against heuristically crafted regex statements,  to identify whether any new secret has been committed. This way, it avoids the overhead of digging  through all git history, as well as the need to scan the entire repository every time.

- [Enlightn](https://www.laravel-enlightn.com/) — A static and dynamic analysis tool for Laravel applications that provides recommendations to improve the performance, security and code reliability of Laravel apps. Contains 120 automated checks.

- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshield is a CLI application that runs in your local environment  or in a CI environment to help you detect more than 350+ types of secrets,  as well as other potential security vulnerabilities or policy breaks affecting your codebase.

- [Gitleaks ![GitHub Repo Stars](https://img.shields.io/github/stars/zricethezav/gitleaks) ![GitHub last commit](https://img.shields.io/github/last-commit/zricethezav/gitleaks)](https://github.com/zricethezav/gitleaks) — A SAST tool for detecting hardcoded secrets like passwords, api keys, and tokens in git repos.

- [gokart ![GitHub Repo Stars](https://img.shields.io/github/stars/praetorian-inc/gokart) ![GitHub last commit](https://img.shields.io/github/last-commit/praetorian-inc/gokart)](https://github.com/praetorian-inc/gokart) — Golang security analysis with a focus on minimizing false positives. It is capable of tracing the source of variables and function arguments  to determine whether input sources are safe.

- [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) :copyright: — HasMySecretLeaked is a project from GitGuardian that aims to help individual users and organizations search across 20 million exposed secrets to verify if their  developer secrets have leaked on public repositories, gists, and issues on GitHub projects.

- [iblessing](https://www.kitploit.com/2020/08/iblessing-ios-security-exploiting.html) :warning: — iblessing is an iOS security exploiting toolkit. It can be used for reverse engineering, binary analysis and vulnerability mining.

- [kani ![GitHub Repo Stars](https://img.shields.io/github/stars/model-checking/kani) ![GitHub last commit](https://img.shields.io/github/last-commit/model-checking/kani)](https://github.com/model-checking/kani) — The Kani Rust Verifier is a bit-precise model checker for Rust. 
Kani is particularly useful for verifying unsafe code blocks in Rust, 
where the "unsafe superpowers" are unchecked by the compiler.
Kani verifies:

* Memory safety (e.g., null pointer dereferences)
* User-specified assertions (i.e., assert!(...))
* The absence of panics (e.g., unwrap() on None values)
* The absence of some types of unexpected behavior (e.g., arithmetic overflows)


- [kics](https://kics.io/) — Find security vulnerabilities, compliance issues, and infrastructure misconfigurations in your infrastructure-as-code. Supports Terraform, Kubernetes, Docker, AWS CloudFormation and Ansible

- [ktool](https://ktool.cynder.me/en/latest/ktool.html) — Fully cross-platform toolkit and library for MachO+Obj-C editing/analysis. Includes a cli kit, a curses GUI, ObjC header dumping, and much more.

- [kube-hunter](https://aquasecurity.github.io/kube-hunter/) — Hunt for security weaknesses in Kubernetes clusters.

- [lockfile-lint ![GitHub Repo Stars](https://img.shields.io/github/stars/lirantal/lockfile-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/lirantal/lockfile-lint)](https://github.com/lirantal/lockfile-lint) — Lint an npm or yarn lockfile to analyze and detect security issues

- [LunaSec](https://www.lunasec.io) — Open Source AppSec platform that automatically notifies you the next time vulnerabilities like Log4Shell or node-ipc happen. Track your dependencies and builds in a centralized service.

- [njsscan](https://opensecurity.in) — A static application testing (SAST) tool that can find insecure code patterns in your node.js applications using simple pattern matcher from libsast and syntax-aware semantic code pattern search tool semgrep.

- [NodeJSScan](https://opensecurity.in) :warning: — A static security code scanner for Node.js applications powered by libsast and semgrep that builds on the njsscan cli tool. It features a UI with various dashboards about an application's security status.

- [Oversecured](https://oversecured.com) :copyright: — Enterprise vulnerability scanner for Android and iOS apps. It allows app owners and developers to secure each new version of a mobile app by integrating Oversecured into the development process.

- [PT Application Inspector](https://www.ptsecurity.com) :copyright: — Identifies code flaws and detects vulnerabilities to prevent web attacks. Demonstrates remote code execution by presenting possible exploits.

- [Qualys Container Security](https://www.qualys.com/apps/container-security) :copyright: — Container native application protection to provide visibility and control of containerized applications.

- [QuantifiedCode ![GitHub Repo Stars](https://img.shields.io/github/stars/quantifiedcode/quantifiedcode) ![GitHub last commit](https://img.shields.io/github/last-commit/quantifiedcode/quantifiedcode)](https://github.com/quantifiedcode/quantifiedcode) :warning: — Automated code review & repair. It helps you to keep track of issues and metrics in your software projects, and can be easily extended to support new types of analyses.

- [Rezilion](https://www.rezilion.com/) :copyright: — Discovers vulnerabilities for all components in your environment, filters out 85% non-exploitable vulnerabilities and creates a  remediation plan and open tickets to upgrade components that violate your security policy and/or patch automatically in CI.

- [scorecard ![GitHub Repo Stars](https://img.shields.io/github/stars/ossf/scorecard) ![GitHub last commit](https://img.shields.io/github/last-commit/ossf/scorecard)](https://github.com/ossf/scorecard) — Security Scorecards - Security health metrics for Open Source

- [SearchDiggity](https://resources.bishopfox.com/resources/tools/google-hacking-diggity/attack-tools/) :copyright: — Identifies vulnerabilities in open source code projects  hosted on Github, Google Code, MS CodePlex, SourceForge, and more.  The tool comes with over 130 default searches that identify SQL injection,  cross-site scripting (XSS), insecure remote and local file includes, hard-coded passwords, etc. 

- [Steampunk Spotter](https://steampunk.si/spotter/) :copyright: — Ansible Playbook Scanning Tool that analyzes and offers recommendations for your playbooks.

- [Symfony Insight](https://insight.symfony.com/) :copyright: — Detect security risks, find bugs and provide actionable metrics for PHP projects.

- [tfsec ![GitHub Repo Stars](https://img.shields.io/github/stars/tfsec/tfsec) ![GitHub last commit](https://img.shields.io/github/last-commit/tfsec/tfsec)](https://github.com/tfsec/tfsec) — Terraform static analysis tool that prevents potential security issues by checking cloud misconfigurations at build time and directly integrates with the HCL parser for better results. Checks for violations of AWS, Azure and GCP security best practice recommendations.

- [trufflehog](https://trufflesecurity.com) — Find credentials all over the place
TruffleHog is an open source secret-scanning engine that resolves exposed secrets across your company’s entire tech stack. 

- [Tsunami Security Scanner ![GitHub Repo Stars](https://img.shields.io/github/stars/google/tsunami-security-scanner) ![GitHub last commit](https://img.shields.io/github/last-commit/google/tsunami-security-scanner)](https://github.com/google/tsunami-security-scanner) — A general purpose network security scanner with an extensible plugin system for  detecting high severity RCE-like vulnerabilities with high confidence. Custom detectors for finding vulnerabilities (e.g. open APIs) can be added.


<a name="smart-contracts" />
<h2>Smart Contracts</h2>


- [mythril ![GitHub Repo Stars](https://img.shields.io/github/stars/ConsenSys/mythril) ![GitHub last commit](https://img.shields.io/github/last-commit/ConsenSys/mythril)](https://github.com/ConsenSys/mythril) — A symbolic execution framework with batteries included, can be used to find and exploit vulnerabilities in smart contracts automatically.

- [MythX](https://mythx.io) :copyright: — MythX is an easy to use analysis platform which integrates several analysis methods like fuzzing, symbolic execution and static analysis to find vulnerabilities with high precision. It can be integrated with toolchains like Remix or VSCode or called from the command-line.

- [slither ![GitHub Repo Stars](https://img.shields.io/github/stars/trailofbits/slither) ![GitHub last commit](https://img.shields.io/github/last-commit/trailofbits/slither)](https://github.com/trailofbits/slither) — Static analysis framework that runs a suite of vulnerability detectors, prints visual information about contract details, and provides an API to easily write custom analyses.

- [solhint](https://protofire.github.io/solhint) — Solhint is an open source project created by https://protofire.io. Its goal is to provide a linting utility for Solidity code.

- [solium](https://ethlint.readthedocs.io/en/latest) — Solium is a linter to identify and fix style and security issues in Solidity smart contracts.


<a name="support" />
<h2>Support</h2>


- [LibVCS4j ![GitHub Repo Stars](https://img.shields.io/github/stars/uni-bremen-agst/libvcs4j) ![GitHub last commit](https://img.shields.io/github/last-commit/uni-bremen-agst/libvcs4j)](https://github.com/uni-bremen-agst/libvcs4j) — A Java library that allows existing tools to analyse the evolution of software systems by providing a common API for different version control systems and issue trackers.

- [RefactorFirst ![GitHub Repo Stars](https://img.shields.io/github/stars/jimbethancourt/RefactorFirst) ![GitHub last commit](https://img.shields.io/github/last-commit/jimbethancourt/RefactorFirst)](https://github.com/jimbethancourt/RefactorFirst) — Identifies and prioritizes God Classes and Highly Coupled classes in Java codebases you should refactor first.

- [Violations Lib ![GitHub Repo Stars](https://img.shields.io/github/stars/tomasbjerre/violations-lib) ![GitHub last commit](https://img.shields.io/github/last-commit/tomasbjerre/violations-lib)](https://github.com/tomasbjerre/violations-lib) — Java library for parsing report files from static code analysis. Used by a bunch of Jenkins, Maven and Gradle plugins.


<a name="template" />
<h2>Template-Languages</h2>


- [ember-template-lint ![GitHub Repo Stars](https://img.shields.io/github/stars/ember-template-lint/ember-template-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/ember-template-lint/ember-template-lint)](https://github.com/ember-template-lint/ember-template-lint) — Linter for Ember or Handlebars templates.

- [haml-lint ![GitHub Repo Stars](https://img.shields.io/github/stars/sds/haml-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/sds/haml-lint)](https://github.com/sds/haml-lint) — Tool for writing clean and consistent HAML.

- [slim-lint ![GitHub Repo Stars](https://img.shields.io/github/stars/sds/slim-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/sds/slim-lint)](https://github.com/sds/slim-lint) — Configurable tool for analyzing Slim templates.

- [yamllint](https://yamllint.readthedocs.io) — Checks YAML files for syntax validity, key repetition and cosmetic problems such as lines length, trailing spaces, and indentation.


<a name="terraform" />
<h2>Terraform</h2>


- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshield is a CLI application that runs in your local environment  or in a CI environment to help you detect more than 350+ types of secrets,  as well as other potential security vulnerabilities or policy breaks affecting your codebase.

- [kics](https://kics.io/) — Find security vulnerabilities, compliance issues, and infrastructure misconfigurations in your infrastructure-as-code. Supports Terraform, Kubernetes, Docker, AWS CloudFormation and Ansible

- [shisho ![GitHub Repo Stars](https://img.shields.io/github/stars/flatt-security/shisho) ![GitHub last commit](https://img.shields.io/github/last-commit/flatt-security/shisho)](https://github.com/flatt-security/shisho) :warning: — A lightweight static code analyzer designed for developers and security teams. It allows you to analyze and transform source code with an intuitive DSL similar to sed, but for code.


<a name="translation" />
<h2>Translation</h2>


- [dennis ![GitHub Repo Stars](https://img.shields.io/github/stars/willkg/dennis) ![GitHub last commit](https://img.shields.io/github/last-commit/willkg/dennis)](https://github.com/willkg/dennis) — A set of utilities for working with PO files to ease development and improve quality.


<a name="vue" />
<h2>Vue.js</h2>


- [HTML-Validate](https://html-validate.org/) — Offline HTML5 validator.

- [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) :warning: — Vue tooling for VS Code, powered by vls (vue language server). Vetur has support for formatting embedded HTML, CSS, SCSS, JS, TypeScript, and more. Vetur only has a "whole document formatter" and cannot format arbitrary ranges.


<a name="wasm" />
<h2>Webassembly</h2>


- [Twiggy](https://rustwasm.github.io/twiggy) — Analyzes a binary's call graph to profile code size. The goal is to slim down wasm binary size.


<a name="writing" />
<h2>Writing</h2>


- [After the Deadline](https://open.afterthedeadline.com) :warning: — Spell, style and grammar checker.

- [alex](https://alexjs.com) — Catch insensitive, inconsiderate writing

- [codespell ![GitHub Repo Stars](https://img.shields.io/github/stars/codespell-project/codespell) ![GitHub last commit](https://img.shields.io/github/last-commit/codespell-project/codespell)](https://github.com/codespell-project/codespell) — Check code for common misspellings.

- [languagetool](https://languagetool.org) — Style and grammar checker for 25+ languages. It finds many errors that a simple spell checker cannot detect.

- [misspell-fixer ![GitHub Repo Stars](https://img.shields.io/github/stars/vlajos/misspell-fixer) ![GitHub last commit](https://img.shields.io/github/last-commit/vlajos/misspell-fixer)](https://github.com/vlajos/misspell-fixer) :warning: — Quick tool for fixing common misspellings, typos in source code.

- [Misspelled Words In Context](https://jwilk.net/software/mwic) — A spell-checker that groups possible misspellings and shows them in their contexts.

- [proselint ![GitHub Repo Stars](https://img.shields.io/github/stars/amperser/proselint) ![GitHub last commit](https://img.shields.io/github/last-commit/amperser/proselint)](https://github.com/amperser/proselint) — A linter for English prose with a focus on writing style instead of grammar.

- [vale](https://vale.sh) — A syntax-aware linter for prose built with speed and extensibility in mind.

- [write-good ![GitHub Repo Stars](https://img.shields.io/github/stars/btford/write-good) ![GitHub last commit](https://img.shields.io/github/last-commit/btford/write-good)](https://github.com/btford/write-good) — A linter with a focus on eliminating "weasel words".


<a name="yaml" />
<h2>YAML</h2>


- [Spectral](https://stoplight.io/open-source/spectral) — A flexible JSON/YAML linter, with out-of-the-box support for OpenAPI v2/v3 and AsyncAPI v2.

- [yamllint](https://yamllint.readthedocs.io) — Checks YAML files for syntax validity, key repetition and cosmetic problems such as lines length, trailing spaces, and indentation.


<a name="git" />
<h2>git</h2>


- [commitlint](https://commitlint.js.org) — checks if your commit messages meet the conventional commit format

- [GitGuardian ggshield](https://www.gitguardian.com/ggshield) — ggshield is a CLI application that runs in your local environment  or in a CI environment to help you detect more than 350+ types of secrets,  as well as other potential security vulnerabilities or policy breaks affecting your codebase.

- [HasMySecretLeaked](https://gitguardian.com/hasmysecretleaked) :copyright: — HasMySecretLeaked is a project from GitGuardian that aims to help individual users and organizations search across 20 million exposed secrets to verify if their  developer secrets have leaked on public repositories, gists, and issues on GitHub projects.


## More Collections

- [Clean code linters ![GitHub Repo Stars](https://img.shields.io/github/stars/collections/clean-code-linters) ![GitHub last commit](https://img.shields.io/github/last-commit/collections/clean-code-linters)](https://github.com/collections/clean-code-linters) — A collection of linters in github collections
- [Code Quality Checker Tools For PHP Projects ![GitHub Repo Stars](https://img.shields.io/github/stars/collections/code-quality-in-php) ![GitHub last commit](https://img.shields.io/github/last-commit/collections/code-quality-in-php)](https://github.com/collections/code-quality-in-php) — A collection of PHP linters in github collections
- [go-tools ![GitHub Repo Stars](https://img.shields.io/github/stars/dominikh/go-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/dominikh/go-tools)](https://github.com/dominikh/go-tools) — A collection of tools and libraries for working with Go code, including linters and static analysis
- [linters ![GitHub Repo Stars](https://img.shields.io/github/stars/mcandre/linters) ![GitHub last commit](https://img.shields.io/github/last-commit/mcandre/linters)](https://github.com/mcandre/linters) — An introduction to static code analysis
- [OWASP Source Code Analysis Tools](https://owasp.org/www-community/Source_Code_Analysis_Tools) — List of tools maintained by the Open Web Application Security Project
- [php-static-analysis-tools ![GitHub Repo Stars](https://img.shields.io/github/stars/exakat/php-static-analysis-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/exakat/php-static-analysis-tools)](https://github.com/exakat/php-static-analysis-tools) — A reviewed list of useful PHP static analysis tools
- [Wikipedia](http://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis) — A list of tools for static code analysis.

## License

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Matthias Endler](https://endler.dev) has waived all copyright and related or neighboring rights to this work.
The underlying source code used to format and display that content is licensed under the MIT license.


Title image [Designed by Freepik](http://www.freepik.com).