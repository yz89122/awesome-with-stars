<!--lint ignore awesome-heading-->
<div align="center">

[![Awesome Regex ![GitHub Repo Stars](https://img.shields.io/github/stars/slevithan/awesome-regex) ![GitHub last commit](https://img.shields.io/github/last-commit/slevithan/awesome-regex)](https://github.com/slevithan/awesome-regex/raw/main/media/awesome-regex-banner.svg)](https://github.com/slevithan/awesome-regex)

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re) &nbsp;<sup>Shortcut URL: [`regex.cool`](https://regex.cool/)</sup>
</div>

Awesome Regex curates the best regular expression tools, tutorials, libraries, and other resources, covering all major regex flavors.

> [Regular expressions](https://en.wikipedia.org/wiki/Regular_expression) (regex or regexp) are a powerful and concise way to search, parse, and process text. They're built into many programming languages, text editors, IDEs, database engines, word processors, and other tools.

Contributions are welcome. Add links through pull requests ([guidelines](CONTRIBUTING.md)).

<details>
  <summary>📖 <b>Glossary</b></summary>
  <br>

*A brief glossary of regular expression terms as used in this list.*

- **Regex engine:** Software that interprets and executes regular expressions, either built into a programming language or as a standalone library.
- **Regex flavor:** A unique set of regex syntax and behavior. Basic syntax is typically shared across flavors, but more advanced features often vary, sometimes in subtle or incompatible ways. A flavor might be shared across multiple implementations or programming languages.
  - Ex: The “JavaScript” flavor is defined by the ECMAScript spec; implemented by multiple engines (V8, etc.).
  - Ex: The “PCRE” flavor is the PCRE2 library, used by numerous programming languages and tools.
  - Ex: Ruby swapped its regex implementation twice from version 1.8 ➜ 1.9 ➜ 2.0, so each used a distinct flavor. The Ruby 2.0+ flavor is referred to here as either “Ruby” or “Onigmo” (the underlying regex library).
- **Non-backtracking engine:** A regex implementation that uses a non-backtracking algorithm and runs in linear time. This rules out worst case performance from superlinear backtracking, but it's slower with some patterns and precludes some useful features like backreferences.
</details>

### Featured resource

<a href="https://github.com/slevithan/regex">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/gh/slevithan/regex@5.0.1/media/regex-logo-dark.svg">
    <img alt="regex logo" height="100" align="right" src="https://cdn.jsdelivr.net/gh/slevithan/regex@5.0.1/media/regex-logo.svg">
  </picture>
</a>

[Regex+ ![GitHub Repo Stars](https://img.shields.io/github/stars/slevithan/regex) ![GitHub last commit](https://img.shields.io/github/last-commit/slevithan/regex)](https://github.com/slevithan/regex) is a lightweight JavaScript library for more readable, high-performance, native JavaScript regexes with powerful features including free spacing, atomic groups, possessive quantifiers, subroutines, subroutine definition groups, and context-aware interpolation.

## Contents

- [Testers](#testers)
- [Syntax-free regex builders](#syntax-free-regex-builders)
- [Visualizers](#visualizers)
- [Grep-like tools](#grep-like-tools)
- [Tutorials](#tutorials)
- [Regex engines](#regex-engines)
  - [Documentation](#documentation)
  - [Source code](#source-code)
  - [Flavor differences](#flavor-differences)
- [Performance](#performance)
- [Collections of patterns](#collections-of-patterns)
- [JavaScript regex libraries](#javascript-regex-libraries)
- [JavaScript regex evolution](#javascript-regex-evolution)
- [Books](#books)
- [Articles](#articles)
- [Communities](#communities)
- [Miscellaneous](#miscellaneous)

## Testers

*For building, testing, and playing with regexes.*

- [regex101](https://regex101.com/) - **Best free and best web-based tester**.
  - Flavors: Java, JavaScript, .NET, PCRE, RE2, Rust, and emulates Python.
  - Includes regex debugger (PCRE only).
- [RegexBuddy](https://www.regexbuddy.com/) (<picture><img src="https://github.com/slevithan/awesome-regex/raw/main/media/windows.svg" title="Windows" height="13"></picture>, $40) - **Best tester**.
  - Flavors: Emulates hundreds of flavors/versions, with deep knowledge of differences.
  - Includes regex debugger.
- [RegExr](https://regexr.com/) \[[*GitHub* ![GitHub Repo Stars](https://img.shields.io/github/stars/gskinner/regexr) ![GitHub last commit](https://img.shields.io/github/last-commit/gskinner/regexr)](https://github.com/gskinner/regexr/)] - **Best open source tester**.
  - Flavors: JavaScript, PCRE.
  - Languages: 🇺🇸, 🇨🇳 ([fork](https://regexr-cn.com/)).
- [RegexLearn](https://regexlearn.com/playground) \[[*GitHub* ![GitHub Repo Stars](https://img.shields.io/github/stars/aykutkardas/regexlearn.com) ![GitHub last commit](https://img.shields.io/github/last-commit/aykutkardas/regexlearn.com)](https://github.com/aykutkardas/regexlearn.com/blob/develop/src/pages/%5Blang%5D/playground.tsx)] - **Best multilingual tester** (JavaScript).
  - Languages: 🇺🇸, 🇹🇷, 🇷🇺, 🇪🇸, 🇨🇳, 🇩🇪, 🇺🇦, 🇫🇷, 🇵🇱, 🇰🇷, 🇧🇷, 🇨🇿, 🇬🇪.
- [regexplained](https://regexplained.com/) \[[*GitHub* ![GitHub Repo Stars](https://img.shields.io/github/stars/LeaVerou/regexplained) ![GitHub last commit](https://img.shields.io/github/last-commit/LeaVerou/regexplained)](https://github.com/LeaVerou/regexplained)] - **Best tester for presentations** (JavaScript).

<details>
  <summary>✳️ <b>Notable mentions</b></summary>
  <br>

**Flavors**

- JavaScript: [RegViz](http://regviz.org/).
- .NET: [Regex Storm](http://regexstorm.net/tester) \[[*GitHub* ![GitHub Repo Stars](https://img.shields.io/github/stars/lonekorean/regex-storm) ![GitHub last commit](https://img.shields.io/github/last-commit/lonekorean/regex-storm)](https://github.com/lonekorean/regex-storm)].
- PCRE: [PHP Live Regex](https://www.phpliveregex.com/).
- Python: [Pythex](https://pythex.org/).
- Ruby: [Rubular](https://rubular.com/).
- sed: [GNU sed REPL](https://sed.js.org/).

**Multiple flavors**

- [CyrilEx](https://extendsclass.com/regex-tester.html) \[[*GitHub* ![GitHub Repo Stars](https://img.shields.io/github/stars/cyrilbois/cyrilex) ![GitHub last commit](https://img.shields.io/github/last-commit/cyrilbois/cyrilex)](https://github.com/cyrilbois/cyrilex)] - Java, JavaScript, MySQL, PHP, Python, Ruby.
- [Patterns](https://krillapps.com/patterns/) (<picture><img src="https://github.com/slevithan/awesome-regex/raw/main/media/macos.svg" title="macOS" height="13"></picture>, $3) - Bash, Emacs, grep, Java, Oniguruma, PCRE, POSIX BRE, POSIX ERE, Ruby, sed.
- [RegexPlanet](https://www.regexplanet.com/) \[[*GitHub*](https://github.com/regexplanet)] - Go, Haskell, Java, JavaScript, .NET, Perl, PHP, PostgreSQL, Python, Ruby, Tcl, XRegExp.
</details>

## Syntax-free regex builders

*Build regexes without writing regex syntax or code.*

- [ChatGPT](https://chat.openai.com/) (and other LLMs) - Ex: *"create a regex that matches `X` and explain it step by step"*.
- [RegexMagic](https://www.regexmagic.com/) (<picture><img src="https://github.com/slevithan/awesome-regex/raw/main/media/windows.svg" title="Windows" height="13"></picture>, $40) - Generate regexes using samples and rules.
  - Flavors: Emulates hundreds of flavors/versions.

<details>
  <summary>✳️ <b>Notable mentions</b></summary>
  <br>

- [Regex Generator](https://regex-generator.olafneumann.org/) \[[*GitHub* ![GitHub Repo Stars](https://img.shields.io/github/stars/noxone/regex-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/noxone/regex-generator)](https://github.com/noxone/regex-generator)] - Generate simple regexes from a sample text.
- [Regex.ai](https://regex.ai/) - Mark samples in a text and use AI to generate potential regexes.
</details>

## Visualizers

*Visualize how your regular expressions are structured or operate.*

- [Regex Vis](https://regex-vis.com/) \[[*GitHub* ![GitHub Repo Stars](https://img.shields.io/github/stars/Bowen7/regex-vis) ![GitHub last commit](https://img.shields.io/github/last-commit/Bowen7/regex-vis)](https://github.com/Bowen7/regex-vis)] - Create railroad diagrams, with visual editor. Flavor: JavaScript.
  - Languages: 🇺🇸, 🇨🇳.
- [Regulex](https://jex.im/regulex/) \[[*GitHub* ![GitHub Repo Stars](https://img.shields.io/github/stars/CJex/regulex) ![GitHub last commit](https://img.shields.io/github/last-commit/CJex/regulex)](https://github.com/CJex/regulex)] - Create railroad diagrams. Flavor: JavaScript.
- [Nodexr](https://www.nodexr.net/) \[[*GitHub* ![GitHub Repo Stars](https://img.shields.io/github/stars/Jcparkyn/nodexr) ![GitHub last commit](https://img.shields.io/github/last-commit/Jcparkyn/nodexr)](https://github.com/Jcparkyn/nodexr)] - Graphical editor with visual hierarchy. Flavor: .NET.

<details>
  <summary>✳️ <b>Notable mentions</b></summary>
  <br>

- [Regex Nodes](https://johannesvollmer.com/regex-nodes/) \[[*GitHub* ![GitHub Repo Stars](https://img.shields.io/github/stars/johannesvollmer/regex-nodes) ![GitHub last commit](https://img.shields.io/github/last-commit/johannesvollmer/regex-nodes)](https://github.com/johannesvollmer/regex-nodes)] - Graphical editor with visual hierarchy. Flavor: JavaScript.
- [Debuggex](https://www.debuggex.com/) - Create railroad diagrams. Flavors: JavaScript, PCRE, Python.
- [Regexper](https://regexper.com/) \[[*GitLab*](https://gitlab.com/javallone/regexper-static)] - Create railroad diagrams. Flavor: JavaScript.
</details>

## Grep-like tools

*Search and replace through files.*

### Command line

- [ripgrep ![GitHub Repo Stars](https://img.shields.io/github/stars/BurntSushi/ripgrep) ![GitHub last commit](https://img.shields.io/github/last-commit/BurntSushi/ripgrep)](https://github.com/BurntSushi/ripgrep) - Better and faster grep. Recursively searches directories while respecting gitignore rules and skipping hidden/binary files.
  - Flavors: Rust (default), PCRE.
- [nomino ![GitHub Repo Stars](https://img.shields.io/github/stars/yaa110/nomino) ![GitHub last commit](https://img.shields.io/github/last-commit/yaa110/nomino)](https://github.com/yaa110/nomino) - Rename files uses regexes.
  - Flavor: Rust.

➕ **See also:** [Feature comparison of grep-like tools](https://beyondgrep.com/feature-comparison/).

### GUI

- [Aba Search and Replace](https://www.abareplace.com/) (<picture><img src="https://github.com/slevithan/awesome-regex/raw/main/media/windows.svg" title="Windows" height="13"></picture>, $30) - Displays matches as you type.
- [PowerGREP](https://www.powergrep.com/) (<picture><img src="https://github.com/slevithan/awesome-regex/raw/main/media/windows.svg" title="Windows" height="13"></picture>, $159) - Can search through archives, binary files, PDFs, docs/sheets, emails, etc., via its GUI or the command line.
  - Flavors: Emulates hundreds of flavors/versions.
- [PowerRename ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/PowerToys) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/PowerToys)](https://github.com/microsoft/PowerToys) (<picture><img src="https://github.com/slevithan/awesome-regex/raw/main/media/windows.svg" title="Windows" height="13"></picture>) - Rename files using regexes.

## Tutorials

*Learn how to use regular expressions.*

### Traditional

- [Regular-Expressions.info](https://www.regular-expressions.info/) - Covers numerous regex flavors.
- [The Modern JavaScript Tutorial: Regular expressions](https://javascript.info/regular-expressions) \[[*GitHub* ![GitHub Repo Stars](https://img.shields.io/github/stars/javascript-tutorial/en.javascript.info) ![GitHub last commit](https://img.shields.io/github/last-commit/javascript-tutorial/en.javascript.info)](https://github.com/javascript-tutorial/en.javascript.info)] - Guide to using regexes in JavaScript.
  - Languages: 🇺🇸, 🇪🇸, 🇫🇷, 🇮🇹, 🇯🇵, 🇷🇺, 🇺🇦, 🇨🇳 (partial for [others](https://javascript.info/translate)).

<details>
  <summary>✳️ <b>Notable mentions</b></summary>
  <br>

- [RexEgg](https://rexegg.com/) - Detailed tutorial with advanced topics.
- [learnbyexample](https://learnbyexample.github.io/books/) \[[*GitHub*](https://github.com/learnbyexample)] - Ebooks on regexes ([JavaScript](https://learnbyexample.github.io/learn_js_regexp/), [Python](https://learnbyexample.github.io/py_regular_expressions/), [Ruby](https://learnbyexample.github.io/Ruby_Regexp/)) and command line text processing.
- [Regular Expressions for Regular Folk](https://refrf.dev/) \[[*GitHub* ![GitHub Repo Stars](https://img.shields.io/github/stars/shreyasminocha/regex-for-regular-folk) ![GitHub last commit](https://img.shields.io/github/last-commit/shreyasminocha/regex-for-regular-folk)](https://github.com/shreyasminocha/regex-for-regular-folk)] - Visual, example-based ebook for beginners.
</details>

### With interactive exercises

- [RegexLearn](https://regexlearn.com/) \[[*GitHub* ![GitHub Repo Stars](https://img.shields.io/github/stars/aykutkardas/regexlearn.com) ![GitHub last commit](https://img.shields.io/github/last-commit/aykutkardas/regexlearn.com)](https://github.com/aykutkardas/regexlearn.com)] - Interactive tutorial and practice problems.
  - Languages: 🇺🇸, 🇹🇷, 🇷🇺, 🇪🇸, 🇨🇳, 🇩🇪, 🇺🇦, 🇫🇷, 🇵🇱, 🇰🇷, 🇧🇷, 🇨🇿, 🇬🇪.
- [RegexOne](https://regexone.com/) - Interactive tutorial and practice problems.

### Videos

- [*Demystifying Regular Expressions*](https://www.youtube.com/watch?v=M7vDtxaD7ZU) - Great presentation for beginners, by Lea Verou at HolyJS 2017 (1hr 12m).
- [*Learn Regular Expressions In 20 Minutes*](https://www.youtube.com/watch?v=rhzKDrUiJVk) - Live syntax walkthrough in a regex tester, by Kyle Cook.
- Many options for video courses are available on [Udemy](https://www.udemy.com/topic/regular-expressions/) ($).

## Regex engines

*Major regex implementations, built into programming languages or as standalone libraries.*

### Documentation

*Official regex references and guides.*

#### Regex flavors

- Boost.Regex: [Manual](https://boost.org/libs/regex).
- C++: [Regular expressions library](https://en.cppreference.com/w/cpp/regex).
- Hyperscan: [Introduction](https://www.hyperscan.io/).
- ICU: [Regular Expressions](https://unicode-org.github.io/icu/userguide/strings/regexp.html).
- Java: [Pattern](https://docs.oracle.com/en/java/javase/22/docs/api/java.base/java/util/regex/Pattern.html), [API](https://docs.oracle.com/en/java/javase/22/docs/api/java.base/java/util/regex/package-summary.html).
- JavaScript: [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions), [Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions), [Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet).
- .NET: [Overview](https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions), [Language](https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference), [API](https://learn.microsoft.com/en-us/dotnet/api/system.text.regularexpressions).
- Onigmo: [RE ![GitHub Repo Stars](https://img.shields.io/github/stars/k-takata/Onigmo) ![GitHub last commit](https://img.shields.io/github/last-commit/k-takata/Onigmo)](https://github.com/k-takata/Onigmo/blob/master/doc/RE).
- Oniguruma: [RE ![GitHub Repo Stars](https://img.shields.io/github/stars/kkos/oniguruma) ![GitHub last commit](https://img.shields.io/github/last-commit/kkos/oniguruma)](https://github.com/kkos/oniguruma/blob/master/doc/RE).
- PCRE2: [Pattern](https://pcre2project.github.io/pcre2/doc/html/pcre2pattern.html), [API](https://pcre2project.github.io/pcre2/doc/html/).
- Perl: [Syntax](https://perldoc.perl.org/perlre), [Tutorial](https://perldoc.perl.org/perlretut), [Quick Start](https://perldoc.perl.org/perlrequick).
- Python: [re](https://docs.python.org/library/re.html).
- RE2: [Syntax ![GitHub Repo Stars](https://img.shields.io/github/stars/google/re2) ![GitHub last commit](https://img.shields.io/github/last-commit/google/re2)](https://github.com/google/re2/wiki/Syntax).
- Rust: [regex](https://docs.rs/regex/latest/regex/), [regex_lite](https://docs.rs/regex-lite/latest/regex_lite/).

ℹ️ Raku (formerly Perl 6) reimagines regexes. See: [Grammars](https://docs.raku.org/language/grammars) ([tutorial](https://docs.raku.org/language/grammar_tutorial)), [Regexes](https://docs.raku.org/language/regexes) ([best practices](https://docs.raku.org/language/regexes-best-practices)).

#### Without own flavor

- Go: [regexp](https://pkg.go.dev/regexp) - Flavor: RE2.
- MySQL: [Regular Expressions](https://dev.mysql.com/doc/refman/en/regexp.html) - Flavor: ICU.
- PHP: [Regular Expressions](https://www.php.net/manual/en/book.pcre.php) - Flavor: PCRE.
- Ruby: [Regexp](https://docs.ruby-lang.org/en/master/Regexp.html) - Flavor: Onigmo.
- Swift: [NSRegularExpression](https://developer.apple.com/documentation/foundation/nsregularexpression) - Flavor: ICU.

### Source code

*Read or contribute to the code behind major regex implementations.*

- [Boost.Regex ![GitHub Repo Stars](https://img.shields.io/github/stars/boostorg/regex) ![GitHub last commit](https://img.shields.io/github/last-commit/boostorg/regex)](https://github.com/boostorg/regex) - Popular C++ regex library.
- [Hyperscan ![GitHub Repo Stars](https://img.shields.io/github/stars/intel/hyperscan) ![GitHub last commit](https://img.shields.io/github/last-commit/intel/hyperscan)](https://github.com/intel/hyperscan) - Intel's high-performance library, used for [DPI](https://en.wikipedia.org/wiki/Deep_packet_inspection).
- [ICU ![GitHub Repo Stars](https://img.shields.io/github/stars/unicode-org/icu) ![GitHub last commit](https://img.shields.io/github/last-commit/unicode-org/icu)](https://github.com/unicode-org/icu/blob/main/icu4c/source/i18n/regexcmp.cpp) - Unicode org's package with full Unicode support.
- [Java: java.util.regex ![GitHub Repo Stars](https://img.shields.io/github/stars/openjdk/jdk) ![GitHub last commit](https://img.shields.io/github/last-commit/openjdk/jdk)](https://github.com/openjdk/jdk/tree/master/src/java.base/share/classes/java/util/regex) - JDK standard regexes.
- JavaScript:
  - [JavaScriptCore: RegExp ![GitHub Repo Stars](https://img.shields.io/github/stars/WebKit/WebKit) ![GitHub last commit](https://img.shields.io/github/last-commit/WebKit/WebKit)](https://github.com/WebKit/WebKit/blob/main/Source/JavaScriptCore/runtime/RegExp.cpp) - Regex engine used by Safari.
  - [V8: Irregexp ![GitHub Repo Stars](https://img.shields.io/github/stars/v8/v8) ![GitHub last commit](https://img.shields.io/github/last-commit/v8/v8)](https://github.com/v8/v8/tree/main/src/regexp) - Regex engine used by Chrome, Edge, [Firefox](https://hacks.mozilla.org/2020/06/a-new-regexp-engine-in-spidermonkey/), etc.
- [.NET: System.Text.RegularExpressions ![GitHub Repo Stars](https://img.shields.io/github/stars/dotnet/runtime) ![GitHub last commit](https://img.shields.io/github/last-commit/dotnet/runtime)](https://github.com/dotnet/runtime/tree/main/src/libraries/System.Text.RegularExpressions) - Shared by all .NET languages (C#, VB, etc.).
- [Onigmo ![GitHub Repo Stars](https://img.shields.io/github/stars/k-takata/Onigmo) ![GitHub last commit](https://img.shields.io/github/last-commit/k-takata/Onigmo)](https://github.com/k-takata/Onigmo) - Forked from Oniguruma. Used by Ruby 2.0+.
- [Oniguruma ![GitHub Repo Stars](https://img.shields.io/github/stars/kkos/oniguruma) ![GitHub last commit](https://img.shields.io/github/last-commit/kkos/oniguruma)](https://github.com/kkos/oniguruma) - Popular C regex library used by Ruby 1.9, TextMate grammars, etc.
- [PCRE2 ![GitHub Repo Stars](https://img.shields.io/github/stars/PCRE2Project/pcre2) ![GitHub last commit](https://img.shields.io/github/last-commit/PCRE2Project/pcre2)](https://github.com/PCRE2Project/pcre2) - Popular C regex library used by PHP, R, etc.
- [Perl ![GitHub Repo Stars](https://img.shields.io/github/stars/Perl/perl5) ![GitHub last commit](https://img.shields.io/github/last-commit/Perl/perl5)](https://github.com/Perl/perl5/blob/blead/regexp.h) - See [perlreguts](https://perldoc.perl.org/perlreguts).
- [Python: re ![GitHub Repo Stars](https://img.shields.io/github/stars/python/cpython) ![GitHub last commit](https://img.shields.io/github/last-commit/python/cpython)](https://github.com/python/cpython/tree/main/Lib/re) and [regex ![GitHub Repo Stars](https://img.shields.io/github/stars/mrabarnett/mrab-regex) ![GitHub last commit](https://img.shields.io/github/last-commit/mrabarnett/mrab-regex)](https://github.com/mrabarnett/mrab-regex) - Standard and extended regex libraries.
- [RE2 ![GitHub Repo Stars](https://img.shields.io/github/stars/google/re2) ![GitHub last commit](https://img.shields.io/github/last-commit/google/re2)](https://github.com/google/re2) - Popular C++ regex library used by Go, etc. Non-backtracking engine.
- [Rust: regex ![GitHub Repo Stars](https://img.shields.io/github/stars/rust-lang/regex) ![GitHub last commit](https://img.shields.io/github/last-commit/rust-lang/regex)](https://github.com/rust-lang/regex) - Non-backtracking engine.

### Flavor differences

*Syntax and behavior differences between regex flavors.*

- Ron Buckton: [Regular Expression Feature Comparisons](https://rbuckton.github.io/regexp-features/) \[[*GitHub* ![GitHub Repo Stars](https://img.shields.io/github/stars/rbuckton/regexp-features) ![GitHub last commit](https://img.shields.io/github/last-commit/rbuckton/regexp-features)](https://github.com/rbuckton/regexp-features)].
- Regular-Expressions.info: [Tools & Languages](https://www.regular-expressions.info/tools.html).
- Steven Levithan: [Named capture](https://xregexp.com/syntax/named_capture_comparison/), [Lookbehind](https://stevenlevithan.com/regex/tests/lookbehind.html).
- Wikipedia: [Comparison of regular expression engines](https://en.wikipedia.org/wiki/Comparison_of_regular_expression_engines).

## Performance

*Pattern and engine performance, benchmarks, and [ReDoS](https://en.wikipedia.org/wiki/ReDoS) prevention.*

### Crafting efficient regexes

- [Runaway Regular Expressions: Catastrophic Backtracking](https://www.regular-expressions.info/catastrophic.html) - Exploration and solutions for superlinear backtracking.
- [Book: High Performance JavaScript](https://www.amazon.com/dp/059680279X/?tag=slev-20) (2010) - *Chapter 5: Strings and Regular Expressions*.
- [Book: Mastering Regular Expressions, 3rd Edition](https://www.amazon.com/Mastering-Regular-Expressions-Jeffrey-Friedl/dp/0596528124/?tag=slev-20) (2006) - *Chapter 6: Crafting an Efficient Expression*.
- [Performance of Greedy vs. Lazy Regex Quantifiers](https://blog.stevenlevithan.com/archives/greedy-lazy-performance) - Illustrates the mechanics of backtracking.

ℹ️ With backtracking engines, how you craft a regex can affect how fast it finds matches or reports failures.

<details>
  <summary>✳️ <b>Notable mentions</b></summary>
  <br>

- [Performance of Regular Expressions](https://medium.com/textmaster-engineering/performance-of-regular-expressions-81371f569698) - On backtracking performance, with detailed examples.
</details>

### Regex engine optimization

- [Regular Expression Matching Can Be Simple And Fast](https://swtch.com/~rsc/regexp/regexp1.html) - On non-backtracking engines. A [follow up](https://swtch.com/~rsc/regexp/regexp3.html) includes comparisons of RE2 and PCRE performance.
- [Regular Expression Improvements in .NET 7](https://devblogs.microsoft.com/dotnet/regular-expression-improvements-in-dotnet-7/) and [.NET 5](https://devblogs.microsoft.com/dotnet/regex-performance-improvements-in-net-5/) - Includes detailed explanations of performance optimizations.
- [ripgrep is faster than {grep, …}](https://blog.burntsushi.net/ripgrep/) - Includes details about what makes ripgrep and Rust's `regex` fast.

### Benchmarking

- Cross-engine benchmarking libraries: [rebar ![GitHub Repo Stars](https://img.shields.io/github/stars/BurntSushi/rebar) ![GitHub last commit](https://img.shields.io/github/last-commit/BurntSushi/rebar)](https://github.com/BurntSushi/rebar), [regex-benchmark ![GitHub Repo Stars](https://img.shields.io/github/stars/mariomka/regex-benchmark) ![GitHub last commit](https://img.shields.io/github/last-commit/mariomka/regex-benchmark)](https://github.com/mariomka/regex-benchmark).
- [Boost.Regex: Performance](https://www.boost.org/doc/libs/release/libs/regex/doc/html/boost_regex/background/performance.html) - Compares Boost, C++ `std::regex`, and others.

### ReDoS checkers

- [regex.rip](https://regex.rip/) - Test a regex for ReDoS vulnerability.
- [recheck ![GitHub Repo Stars](https://img.shields.io/github/stars/makenowjust-labs/recheck) ![GitHub last commit](https://img.shields.io/github/last-commit/makenowjust-labs/recheck)](https://github.com/makenowjust-labs/recheck) \[[*home*](https://makenowjust-labs.github.io/recheck/)] - JavaScript and Scala library for detecting ReDoS vulnerability. Can be used as an ESLint plugin.
- [vuln-regex-detector ![GitHub Repo Stars](https://img.shields.io/github/stars/davisjam/vuln-regex-detector) ![GitHub last commit](https://img.shields.io/github/last-commit/davisjam/vuln-regex-detector)](https://github.com/davisjam/vuln-regex-detector) - Perl library for detecting ReDoS vulnerability.

⚠️ These tools have limitations on supported syntax.

## Collections of patterns

*Prewritten regexes for specific tasks.*

- [Book: Regular Expressions Cookbook, 2nd Edition](https://www.amazon.com/Regular-Expressions-Cookbook-Solutions-Programming/dp/1449319432/?tag=slev-20) (2012) - High-quality solutions with detailed explanations.
  - Flavors: Java, JavaScript, .NET, PCRE, Perl, Python, Ruby, XRegExp.
- [Regex DB](https://rgxdb.com/) - Solutions include basic descriptions and examples of matching and non-matching text.

<details>
  <summary>⚠️ <b>Word of warning</b></summary>
  <br>

Many regexes found online are low quality. It's risky to use regexes you don't fully understand in code, since they might have false positives/negatives, be vulnerable to performance problems with certain target strings, or assume a different regex flavor.
</details>

## JavaScript regex libraries

*Open source JavaScript libraries for advanced regex use and processing.*

### Alternative regex builders and engines

- [Regex+ ![GitHub Repo Stars](https://img.shields.io/github/stars/slevithan/regex) ![GitHub last commit](https://img.shields.io/github/last-commit/slevithan/regex)](https://github.com/slevithan/regex) - A template tag for extended, readable, high-performance JavaScript regexes.
- [Oniguruma-To-ES ![GitHub Repo Stars](https://img.shields.io/github/stars/slevithan/oniguruma-to-es) ![GitHub last commit](https://img.shields.io/github/last-commit/slevithan/oniguruma-to-es)](https://github.com/slevithan/oniguruma-to-es) - Convert Oniguruma patterns to native JavaScript regexes.
- [XRegExp ![GitHub Repo Stars](https://img.shields.io/github/stars/slevithan/xregexp) ![GitHub last commit](https://img.shields.io/github/last-commit/slevithan/xregexp)](https://github.com/slevithan/xregexp) \[[*home*](https://xregexp.com/)] - Extended regex syntax, flags, and utils; useful for backcompat.
- [incr-regex-package ![GitHub Repo Stars](https://img.shields.io/github/stars/nurulc/incr-regex-package) ![GitHub last commit](https://img.shields.io/github/last-commit/nurulc/incr-regex-package)](https://github.com/nurulc/incr-regex-package) - Partial/incremental matching, used by [react-rxinput ![GitHub Repo Stars](https://img.shields.io/github/stars/nurulc/react-rxinput) ![GitHub last commit](https://img.shields.io/github/last-commit/nurulc/react-rxinput)](https://github.com/nurulc/react-rxinput) for input validation with a regex mask.
- Use other engines via WASM bindings: [node-re2 ![GitHub Repo Stars](https://img.shields.io/github/stars/uhop/node-re2) ![GitHub last commit](https://img.shields.io/github/last-commit/uhop/node-re2)](https://github.com/uhop/node-re2) (RE2), [rregex ![GitHub Repo Stars](https://img.shields.io/github/stars/2fd/rregex) ![GitHub last commit](https://img.shields.io/github/last-commit/2fd/rregex)](https://github.com/2fd/rregex) (Rust's `regex`), [vscode-oniguruma ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/vscode-oniguruma) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/vscode-oniguruma)](https://github.com/microsoft/vscode-oniguruma) (Oniguruma).

### Abstracted regex syntax

- [Rexx ![GitHub Repo Stars](https://img.shields.io/github/stars/yyytcool/rexx) ![GitHub last commit](https://img.shields.io/github/last-commit/yyytcool/rexx)](https://github.com/yyytcool/rexx) - A template tag that uses structured syntax with variables and comments.
- [Melody ![GitHub Repo Stars](https://img.shields.io/github/stars/yoav-lavi/melody) ![GitHub last commit](https://img.shields.io/github/last-commit/yoav-lavi/melody)](https://github.com/yoav-lavi/melody) \[[*docs*](https://yoav-lavi.github.io/melody/book/)] - A language that compiles to regexes.
- Compose with functions: [compose-regexp.js ![GitHub Repo Stars](https://img.shields.io/github/stars/compose-regexp/compose-regexp.js) ![GitHub last commit](https://img.shields.io/github/last-commit/compose-regexp/compose-regexp.js)](https://github.com/compose-regexp/compose-regexp.js), [VerbalExpressions ![GitHub Repo Stars](https://img.shields.io/github/stars/VerbalExpressions/JSVerbalExpressions) ![GitHub last commit](https://img.shields.io/github/last-commit/VerbalExpressions/JSVerbalExpressions)](https://github.com/VerbalExpressions/JSVerbalExpressions) (implementations for [many languages](https://verbalexpressions.github.io/)), [magic-regexp ![GitHub Repo Stars](https://img.shields.io/github/stars/unjs/magic-regexp) ![GitHub last commit](https://img.shields.io/github/last-commit/unjs/magic-regexp)](https://github.com/unjs/magic-regexp) \[[*home*](https://regexp.dev/)], [Super Expressive ![GitHub Repo Stars](https://img.shields.io/github/stars/francisrstokes/super-expressive) ![GitHub last commit](https://img.shields.io/github/last-commit/francisrstokes/super-expressive)](https://github.com/francisrstokes/super-expressive) \[[*playground*](https://nartc.github.io/ng-super-expressive/)].

### Regex processors

- AST builders: [regexpp ![GitHub Repo Stars](https://img.shields.io/github/stars/eslint-community/regexpp) ![GitHub last commit](https://img.shields.io/github/last-commit/eslint-community/regexpp)](https://github.com/eslint-community/regexpp) (used by ESLint), [regexp-tree ![GitHub Repo Stars](https://img.shields.io/github/stars/DmitrySoshnikov/regexp-tree) ![GitHub last commit](https://img.shields.io/github/last-commit/DmitrySoshnikov/regexp-tree)](https://github.com/DmitrySoshnikov/regexp-tree) (includes optimizer, etc.), [regjsparser ![GitHub Repo Stars](https://img.shields.io/github/stars/jviereck/regjsparser) ![GitHub last commit](https://img.shields.io/github/last-commit/jviereck/regjsparser)](https://github.com/jviereck/regjsparser)/[regjsgen ![GitHub Repo Stars](https://img.shields.io/github/stars/bnjmnt4n/regjsgen) ![GitHub last commit](https://img.shields.io/github/last-commit/bnjmnt4n/regjsgen)](https://github.com/bnjmnt4n/regjsgen).
  - [AST Explorer: RegExp](https://astexplorer.net/#/gist/56d33dc28d07c7f57bdf5ca0f4061320/c6b67a829334151af01ba55960c653e4462df437) - View ASTs generated by regexp-tree, regexpp, and regjsparser.
  - [regexp-ast-analysis ![GitHub Repo Stars](https://img.shields.io/github/stars/RunDevelopment/regexp-ast-analysis) ![GitHub last commit](https://img.shields.io/github/last-commit/RunDevelopment/regexp-ast-analysis)](https://github.com/RunDevelopment/regexp-ast-analysis) \[[*docs*](https://rundevelopment.github.io/regexp-ast-analysis/docs/latest/)] - Analyze AST nodes produced by regexpp.
- Highlight regex syntax: [Regex Colorizer ![GitHub Repo Stars](https://img.shields.io/github/stars/slevithan/regex-colorizer) ![GitHub last commit](https://img.shields.io/github/last-commit/slevithan/regex-colorizer)](https://github.com/slevithan/regex-colorizer) \[[*home*](https://slevithan.github.io/regex-colorizer/demo/)], [CodeMirror PCRE mode ![GitHub Repo Stars](https://img.shields.io/github/stars/xavierog/codemirror-mode-pcre) ![GitHub last commit](https://img.shields.io/github/last-commit/xavierog/codemirror-mode-pcre)](https://github.com/xavierog/codemirror-mode-pcre).
- Find regex mistakes and improvements: [eslint-plugin-regexp ![GitHub Repo Stars](https://img.shields.io/github/stars/ota-meshi/eslint-plugin-regexp) ![GitHub last commit](https://img.shields.io/github/last-commit/ota-meshi/eslint-plugin-regexp)](https://github.com/ota-meshi/eslint-plugin-regexp) \[[*home*](https://ota-meshi.github.io/eslint-plugin-regexp/)], [eslint-plugin-optimize-regex ![GitHub Repo Stars](https://img.shields.io/github/stars/BrainMaestro/eslint-plugin-optimize-regex) ![GitHub last commit](https://img.shields.io/github/last-commit/BrainMaestro/eslint-plugin-optimize-regex)](https://github.com/BrainMaestro/eslint-plugin-optimize-regex).
- Generate strings that match a given regex: [randexp.js ![GitHub Repo Stars](https://img.shields.io/github/stars/fent/randexp.js) ![GitHub last commit](https://img.shields.io/github/last-commit/fent/randexp.js)](https://github.com/fent/randexp.js), [regex-to-strings ![GitHub Repo Stars](https://img.shields.io/github/stars/wimpyprogrammer/regex-to-strings) ![GitHub last commit](https://img.shields.io/github/last-commit/wimpyprogrammer/regex-to-strings)](https://github.com/wimpyprogrammer/regex-to-strings).
- Generate a regex from given strings: [regexgen ![GitHub Repo Stars](https://img.shields.io/github/stars/devongovett/regexgen) ![GitHub last commit](https://img.shields.io/github/last-commit/devongovett/regexgen)](https://github.com/devongovett/regexgen).

## JavaScript regex evolution

*The history of improvements to regular expressions in the JavaScript [standard](https://tc39.es/ecma262/multipage/). Starting with ES2018, includes links to the TC39 proposals where features were developed and discussed.*

- ES3 (1999) introduced regular expressions.
- ES5 (2009) fixed unintuitive behavior by creating a new object every time regex literals are evaluated \[[*explainer*](https://whereswalden.com/2010/01/15/more-es5-incompatible-changes-regular-expressions-now-evaluate-to-a-new-object-not-the-same-object-each-time-theyre-encountered/)], and allowed regex literals to use unescaped forward slashes within character classes (`/[/]/`).
- ES6/ES2015 added: \[[*explainer*](https://2ality.com/2015/07/regexp-es6.html)]
  - Flag `y` (`sticky`), which anchors matches to `lastIndex`.
  - Flag `u` (`unicode`) \[[*explainer*](https://mathiasbynens.be/notes/es6-unicode-regex)] \[[*2016 spec fix* ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/ecma262) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/ecma262)](https://github.com/tc39/ecma262/pull/525)], which adds Unicode code point escapes via `\u{…}`, strict errors (for unreserved escapes, octal escapes, quantified lookahead, and unescaped special characters in some contexts), Unicode case-folding for flag `i`, and code point matching (with impact on quantifiers, character classes, ranges, and built-in sets).
  - Getter `RegExp.prototype.flags`, the ability to copy a regex using `RegExp` (optionally with new flags), and support for subclassing `RegExp` (along with `RegExp.prototype[Symbol.match`/`replace`/`search`/`split]` and `RegExp[Symbol.species]`).
- ES2018 added [flag `s` ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/proposal-regexp-dotall-flag) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/proposal-regexp-dotall-flag)](https://github.com/tc39/proposal-regexp-dotall-flag) (`dotAll`), [lookbehind ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/proposal-regexp-lookbehind) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/proposal-regexp-lookbehind)](https://github.com/tc39/proposal-regexp-lookbehind), [named capture ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/proposal-regexp-named-groups) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/proposal-regexp-named-groups)](https://github.com/tc39/proposal-regexp-named-groups), and [Unicode properties ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/proposal-regexp-unicode-property-escapes) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/proposal-regexp-unicode-property-escapes)](https://github.com/tc39/proposal-regexp-unicode-property-escapes) (via `\p{…}` and `\P{…}` which require flag `u`; see [list ![GitHub Repo Stars](https://img.shields.io/github/stars/mathiasbynens/regexpu-core) ![GitHub last commit](https://img.shields.io/github/last-commit/mathiasbynens/regexpu-core)](https://github.com/mathiasbynens/regexpu-core/blob/main/property-escapes.md)).
- ES2020 added string method [`matchAll` ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/proposal-string-matchall) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/proposal-string-matchall)](https://github.com/tc39/proposal-string-matchall) (which returns an iterator), plus `RegExp.prototype[Symbol.matchAll]`.
- ES2022 added [flag `d` ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/proposal-regexp-match-indices) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/proposal-regexp-match-indices)](https://github.com/tc39/proposal-regexp-match-indices) (`hasIndices`), which provides start/end indices for matched substrings.
- ES2024 added [flag `v` ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/proposal-regexp-v-flag) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/proposal-regexp-v-flag)](https://github.com/tc39/proposal-regexp-v-flag) (`unicodeSets`) \[[*explainer*](https://v8.dev/features/regexp-v-flag)] as an upgrade to flag `u`, which adds a set of multicharacter "properties of strings" to `\p{…}`, multicharacter elements within character classes via `\p{…}` and `\q{…|…}`, nested character classes, set operators `[…--…]` and `[…&&…]`, and different escaping rules within character classes. It also fixes case-insensitive matching for `\p` and `\P` within negated `[^…]`.

> Each edition from ES2019 to ES2023 added additional Unicode properties that can be used via `\p{…}` and `\P{…}` (see [lists ![GitHub Repo Stars](https://img.shields.io/github/stars/eslint-community/regexpp) ![GitHub last commit](https://img.shields.io/github/last-commit/eslint-community/regexpp)](https://github.com/eslint-community/regexpp/blob/main/src/unicode/properties.ts)). ES2021 added string method [`replaceAll` ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/proposal-string-replaceall) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/proposal-string-replaceall)](https://github.com/tc39/proposal-string-replaceall), although, when given a regex, the only difference from ES3's `replace` is that it throws if not using flag `g`.
<details>
  <summary>➕ <b>See also</b></summary>
  <br>

- [*Regexes Got Good: The History And Future Of Regular Expressions In JavaScript*](https://www.smashingmagazine.com/2024/08/history-future-regular-expressions-javascript/)
- Backcompat libraries: [regexpu ![GitHub Repo Stars](https://img.shields.io/github/stars/mathiasbynens/regexpu) ![GitHub last commit](https://img.shields.io/github/last-commit/mathiasbynens/regexpu)](https://github.com/mathiasbynens/regexpu), [regenerate ![GitHub Repo Stars](https://img.shields.io/github/stars/mathiasbynens/regenerate) ![GitHub last commit](https://img.shields.io/github/last-commit/mathiasbynens/regenerate)](https://github.com/mathiasbynens/regenerate) ([Unicode property sets ![GitHub Repo Stars](https://img.shields.io/github/stars/mathiasbynens/regenerate-unicode-properties) ![GitHub last commit](https://img.shields.io/github/last-commit/mathiasbynens/regenerate-unicode-properties)](https://github.com/mathiasbynens/regenerate-unicode-properties)).
- Chrome's `l` (`linear`) regex flag, behind a V8 flag \[[*explainer*](https://v8.dev/blog/non-backtracking-regexp)] \[[*how to run*](https://www.chromium.org/developers/how-tos/run-chromium-with-flags/)].
- [Can I use](https://caniuse.com/) - Up-to-date browser support tables for individual features.
</details>

<details>
  <summary>🔮 <b>Future: Active proposals</b></summary>
  <br>

- [Duplicate named capturing groups ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/proposal-duplicate-named-capturing-groups) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/proposal-duplicate-named-capturing-groups)](https://github.com/tc39/proposal-duplicate-named-capturing-groups) (2022) - Ex: `(?<a>…)|(?<a>…)`.
- [Extended mode and comments ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/proposal-regexp-x-mode) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/proposal-regexp-x-mode)](https://github.com/tc39/proposal-regexp-x-mode) (2021) - Flag `x` (`extended`) with insignificant whitespace and line comments (`#…`), plus inline comments via `(?#…)`.
- [Pattern modifiers ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/proposal-regexp-modifiers) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/proposal-regexp-modifiers)](https://github.com/tc39/proposal-regexp-modifiers) (2021) - Ex: `(?ims:…)`, `(?-ims:…)`, `(?i-ms:…)`.
- [Atomic operators ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/proposal-regexp-atomic-operators) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/proposal-regexp-atomic-operators)](https://github.com/tc39/proposal-regexp-atomic-operators) (2021) - Atomic groups via `(?>��)` and possessive quantifiers (ex: `*+`, `++`).
- [Buffer boundaries ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/proposal-regexp-buffer-boundaries) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/proposal-regexp-buffer-boundaries)](https://github.com/tc39/proposal-regexp-buffer-boundaries) (2021) - Anchors `\A` and `\z`, not affected by flag `m`.
- [\R escape ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/proposal-regexp-r-escape) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/proposal-regexp-r-escape)](https://github.com/tc39/proposal-regexp-r-escape) (2021) - Outside character classes, `\R` matches any line terminator.
- [Restrict subclassing support in built-ins ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/proposal-rm-builtin-subclassing) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/proposal-rm-builtin-subclassing)](https://github.com/tc39/proposal-rm-builtin-subclassing) (2020) - Scaled back `RegExp` subclassing.
- [RegExp escaping ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/proposal-regex-escaping) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/proposal-regex-escaping)](https://github.com/tc39/proposal-regex-escaping) (2015) - `RegExp.escape`.
- [Legacy RegExp features ![GitHub Repo Stars](https://img.shields.io/github/stars/tc39/proposal-regexp-legacy-features) ![GitHub last commit](https://img.shields.io/github/last-commit/tc39/proposal-regexp-legacy-features)](https://github.com/tc39/proposal-regexp-legacy-features) (2015) - Standardization of legacy features.
</details>

## Books

*A curated list of regex books.*

- [*Regular Expressions Cookbook, 2nd Edition*](https://www.amazon.com/dp/1449319432/?tag=slev-20) (2012) by Jan Goyvaerts and Steven Levithan - Regex tutorial with code samples for eight programming languages, 100+ regex recipes for practical problems, and a deep focus on cross-flavor differences.
  - Flavors: Java, JavaScript, .NET, PCRE, Perl, Python, Ruby, XRegExp.
- [*Mastering Regular Expressions, 3rd Edition*](https://www.amazon.com/dp/0596528124/?tag=slev-20) (2006) by Jeffrey Friedl - A computer science classic, best for people who already know the basics. Includes good coverage of crafting efficient regexes.
  - Flavors: Dedicated chapters on Java, .NET, Perl, and PHP (PCRE), with more limited coverage of Python, Tcl, command line tools, etc.
- [*Introducing Regular Expressions*](https://www.amazon.com/dp/1449392687/?tag=slev-20) (2012) by Michael Fitzgerald - An intro for programmers new to regular expressions that sticks to the basics.

## Articles

*A curated list of regex articles.*

- [*The World's Shortest Regex Compiler?*](https://jasonhpriestley.com/regex) and a [follow up](https://jasonhpriestley.com/regex-dfa) on optimization - Introduction to writing a non-backtracking regex engine (in JavaScript).
- [*Regex Legends: The People Behind the Magic*](https://blog.stevenlevithan.com/archives/regex-legends) - Influential people behind the technology.
- [*Fun With .NET Regex Balancing Groups*](https://blog.stevenlevithan.com/archives/balancing-groups) - Advanced usage of a .NET-only regex feature.

## Communities

*Discuss, assist, and get help with regular expressions.*

- [Reddit: r/regex](https://www.reddit.com/r/regex/)
- [Stack Overflow: &lsqb;regex&rsqb;](https://stackoverflow.com/questions/tagged/regex?tab=Votes)

## Miscellaneous

*Other interesting, fun, and useful stuff.*

- Chrome extension: [Regex](https://chromewebstore.google.com/detail/regex/pmihaiejckejbpjdnildimfkpcpnohlo) - Regex search on webpages via `Ctrl+Shift+F`.
- Quiz: [regex101 Regex Quiz](https://regex101.com/quiz) - Requires sign-in.
- Games: [Regex Crossword](https://regexcrossword.com/), [regexle](https://regexle.com/), [The Typing of the RegEX](https://thetypingoftheregex.com/), [Regex Machina](https://codepip.com/games/regex-machina/) ($).
- Comics: [xkcd](https://xkcd.com/208/), [Garabato Kid](https://twitter.com/garabatokid/status/1147063121678389253).
