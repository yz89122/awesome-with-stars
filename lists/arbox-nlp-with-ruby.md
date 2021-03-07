<img src="https://github.com/arbox/nlp-with-ruby/raw/master/header.png" align="center">

[![Awesome](https://awesome.re/badge-flat.svg)](https://github.com/sindresorhus/awesome#readme) [![Support Me](https://img.shields.io/badge/%F0%9F%92%97-Support%20Me-blue.svg?style=flat-square)](https://www.patreon.com/arbox)

[[RubyML ![GitHub Repo Stars](https://img.shields.io/github/stars/arbox/machine-learning-with-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/arbox/machine-learning-with-ruby)](https://github.com/arbox/machine-learning-with-ruby) |
 [RubyDataScience ![GitHub Repo Stars](https://img.shields.io/github/stars/arbox/data-science-with-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/arbox/data-science-with-ruby)](https://github.com/arbox/data-science-with-ruby) |
 [RubyInterop ![GitHub Repo Stars](https://img.shields.io/github/stars/arbox/ruby-interoperability) ![GitHub last commit](https://img.shields.io/github/last-commit/arbox/ruby-interoperability)](https://github.com/arbox/ruby-interoperability)]


# Awesome NLP with Ruby [<img src="https://github.com/arbox/nlp-with-ruby/raw/master/ruby.jpg" align="left" width="30px" height="30px" />][ruby]

> Useful resources for text processing in Ruby

This curated list comprises [_awesome_ ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome)](https://github.com/sindresorhus/awesome/blob/master/awesome.md)
resources, libraries, information sources about computational processing of texts
in human languages with the [Ruby programming language](ruby).
That field is often referred to as
[NLP](https://en.wikipedia.org/wiki/Natural_language_processing),
[Computational Linguistics](https://en.wikipedia.org/wiki/Computational_linguistics),
[HLT](https://en.wikipedia.org/wiki/Language_technology) (Human Language Technology)
and can be brought in conjunction with
[Artificial Intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence),
[Machine Learning](https://en.wikipedia.org/wiki/Machine_learning),
[Information Retrieval](https://en.wikipedia.org/wiki/Information_retrieval),
[Text Mining](https://en.wikipedia.org/wiki/Text_mining),
[Knowledge Extraction](https://en.wikipedia.org/wiki/Knowledge_extraction)
and other related disciplines.

This list comes from our day to day work on Language Models and NLP Tools.
Read [why](motivation.md) this list is awesome. Our [FAQ](FAQ.md) describes the
important decisions and useful answers you may be interested in.

:sparkles: Every [contribution](#contributing) is welcome! Add links through pull
requests or create an issue to start a discussion.

Follow us on [Twitter](https://twitter.com/NonWebRuby)
and please spread the word using the `#RubyNLP` hash tag!

<!-- nodoc -->
## Contents

<!-- toc -->

- [:sparkles: Tutorials](#sparkles-tutorials)
- [NLP Pipeline Subtasks](#nlp-pipeline-subtasks)
  * [Pipeline Generation](#pipeline-generation)
  * [Multipurpose Engines](#multipurpose-engines)
    + [On-line APIs](#on-line-apis)
  * [Language Identification](#language-identification)
  * [Segmentation](#segmentation)
  * [Lexical Processing](#lexical-processing)
    + [Stemming](#stemming)
    + [Lemmatization](#lemmatization)
    + [Lexical Statistics: Counting Types and Tokens](#lexical-statistics-counting-types-and-tokens)
    + [Filtering Stop Words](#filtering-stop-words)
  * [Phrasal Level Processing](#phrasal-level-processing)
  * [Syntactic Processing](#syntactic-processing)
    + [Constituency Parsing](#constituency-parsing)
  * [Semantic Analysis](#semantic-analysis)
  * [Pragmatical Analysis](#pragmatical-analysis)
- [High Level Tasks](#high-level-tasks)
  * [Spelling and Error Correction](#spelling-and-error-correction)
  * [Text Alignment](#text-alignment)
  * [Machine Translation](#machine-translation)
  * [Sentiment Analysis](#sentiment-analysis)
  * [Numbers, Dates, and Time Parsing](#numbers-dates-and-time-parsing)
  * [Named Entity Recognition](#named-entity-recognition)
  * [Text-to-Speech-to-Text](#text-to-speech-to-text)
- [Dialog Agents, Assistants, and Chatbots](#dialog-agents-assistants-and-chatbots)
- [Linguistic Resources](#linguistic-resources)
- [Machine Learning Libraries](#machine-learning-libraries)
- [Data Visualization](#data-visualization)
- [Optical Character Recognition](#optical-character-recognition)
- [Text Extraction](#text-extraction)
- [Full Text Search, Information Retrieval, Indexing](#full-text-search-information-retrieval-indexing)
- [Language Aware String Manipulation](#language-aware-string-manipulation)
- [Articles, Posts, Talks, and Presentations](#articles-posts-talks-and-presentations)
- [Projects and Code Examples](#projects-and-code-examples)
- [Books](#books)
- [Community](#community)
- [Needs your Help!](#needs-your-help)
- [Related Resources](#related-resources)
- [License](#license)

<!-- tocstop -->

<!-- doc -->

## :sparkles: Tutorials

Please help us to fill out this section! :smiley:

## NLP Pipeline Subtasks

An NLP Pipeline starts with a plain text.

### Pipeline Generation

- [composable_operations ![GitHub Repo Stars](https://img.shields.io/github/stars/t6d/composable_operations) ![GitHub last commit](https://img.shields.io/github/last-commit/t6d/composable_operations)](https://github.com/t6d/composable_operations) -
  Definition framework for operation pipelines.
- [ruby-spark ![GitHub Repo Stars](https://img.shields.io/github/stars/ondra-m/ruby-spark) ![GitHub last commit](https://img.shields.io/github/last-commit/ondra-m/ruby-spark)](https://github.com/ondra-m/ruby-spark) -
  Spark bindings with an easy to understand DSL.
- [phobos ![GitHub Repo Stars](https://img.shields.io/github/stars/phobos/phobos) ![GitHub last commit](https://img.shields.io/github/last-commit/phobos/phobos)](https://github.com/phobos/phobos) -
  Simplified Ruby Client for [Apache Kafka](https://kafka.apache.org/).
- [parallel ![GitHub Repo Stars](https://img.shields.io/github/stars/grosser/parallel) ![GitHub last commit](https://img.shields.io/github/last-commit/grosser/parallel)](https://github.com/grosser/parallel) -
  Supervisor for parallel execution on multiple CPUs or in many threads.
- [pwrake ![GitHub Repo Stars](https://img.shields.io/github/stars/masa16/pwrake) ![GitHub last commit](https://img.shields.io/github/last-commit/masa16/pwrake)](https://github.com/masa16/pwrake) -
  Rake extensions to run local and remote tasks in parallel.

### Multipurpose Engines

- [open-nlp ![GitHub Repo Stars](https://img.shields.io/github/stars/louismullie/open-nlp) ![GitHub last commit](https://img.shields.io/github/last-commit/louismullie/open-nlp)](https://github.com/louismullie/open-nlp) -
  Ruby Bindings for the [OpenNLP](https://opennlp.apache.org/) Toolkit.
- [stanford-core-nlp ![GitHub Repo Stars](https://img.shields.io/github/stars/louismullie/stanford-core-nlp) ![GitHub last commit](https://img.shields.io/github/last-commit/louismullie/stanford-core-nlp)](https://github.com/louismullie/stanford-core-nlp) -
  Ruby Bindings for the Stanford [CoreNLP ![GitHub Repo Stars](https://img.shields.io/github/stars/stanfordnlp/CoreNLP) ![GitHub last commit](https://img.shields.io/github/last-commit/stanfordnlp/CoreNLP)](https://github.com/stanfordnlp/CoreNLP) tools.
- [treat ![GitHub Repo Stars](https://img.shields.io/github/stars/louismullie/treat) ![GitHub last commit](https://img.shields.io/github/last-commit/louismullie/treat)](https://github.com/louismullie/treat) -
  Natural Language Processing framework for Ruby (like [NLTK](http://www.nltk.org/) for Python).
- [nlp_toolz ![GitHub Repo Stars](https://img.shields.io/github/stars/LeFnord/nlp_toolz) ![GitHub last commit](https://img.shields.io/github/last-commit/LeFnord/nlp_toolz)](https://github.com/LeFnord/nlp_toolz) -
  Wrapper over some [OpenNLP](https://opennlp.apache.org/) classes and
  the original [Berkeley Parser ![GitHub Repo Stars](https://img.shields.io/github/stars/slavpetrov/berkeleyparser) ![GitHub last commit](https://img.shields.io/github/last-commit/slavpetrov/berkeleyparser)](https://github.com/slavpetrov/berkeleyparser).
- [open_nlp ![GitHub Repo Stars](https://img.shields.io/github/stars/hck/open_nlp) ![GitHub last commit](https://img.shields.io/github/last-commit/hck/open_nlp)](https://github.com/hck/open_nlp) -
  JRuby Bindings for the [OpenNLP](https://opennlp.apache.org/) Toolkit.
- [ruby-spacy ![GitHub Repo Stars](https://img.shields.io/github/stars/yohasebe/ruby-spacy) ![GitHub last commit](https://img.shields.io/github/last-commit/yohasebe/ruby-spacy)](https://github.com/yohasebe/ruby-spacy) &mdash;
  Wrapper module for spaCy NLP library via [PyCall ![GitHub Repo Stars](https://img.shields.io/github/stars/mrkn/pycall.rb) ![GitHub last commit](https://img.shields.io/github/last-commit/mrkn/pycall.rb)](https://github.com/mrkn/pycall.rb).

#### On-line APIs

- [alchemyapi_ruby ![GitHub Repo Stars](https://img.shields.io/github/stars/alchemyapi/alchemyapi_ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/alchemyapi/alchemyapi_ruby)](https://github.com/alchemyapi/alchemyapi_ruby) -
  Legacy Ruby SDK for AlchemyAPI/Bluemix.
- [wit-ruby ![GitHub Repo Stars](https://img.shields.io/github/stars/wit-ai/wit-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/wit-ai/wit-ruby)](https://github.com/wit-ai/wit-ruby) -
  Ruby client library for the [Wit.ai](https://wit.ai/) Language Understanding Platform.
- [wlapi ![GitHub Repo Stars](https://img.shields.io/github/stars/arbox/wlapi) ![GitHub last commit](https://img.shields.io/github/last-commit/arbox/wlapi)](https://github.com/arbox/wlapi) - Ruby client library for
  [Wortschatz Leipzig](http://wortschatz.uni-leipzig.de/de) web services.
- [monkeylearn-ruby ![GitHub Repo Stars](https://img.shields.io/github/stars/monkeylearn/monkeylearn-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/monkeylearn/monkeylearn-ruby)](https://github.com/monkeylearn/monkeylearn-ruby) - Sentiment
  Analysis, Topic Modelling, Language Detection, Named Entity Recognition via
  a Ruby based Web API client.
- [google-cloud-language ![GitHub Repo Stars](https://img.shields.io/github/stars/googleapis/google-cloud-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/googleapis/google-cloud-ruby)](https://github.com/googleapis/google-cloud-ruby/tree/master/google-cloud-language) -
  Google's Natural Language service API for Ruby.

### Language Identification

Language Identification is one of the first crucial steps in every NLP Pipeline.

- [scylla ![GitHub Repo Stars](https://img.shields.io/github/stars/hashwin/scylla) ![GitHub last commit](https://img.shields.io/github/last-commit/hashwin/scylla)](https://github.com/hashwin/scylla) -
  Language Categorization and Identification.

### Segmentation

Tools for Tokenization, Word and Sentence Boundary Detection and Disambiguation.

- [tokenizer ![GitHub Repo Stars](https://img.shields.io/github/stars/arbox/tokenizer) ![GitHub last commit](https://img.shields.io/github/last-commit/arbox/tokenizer)](https://github.com/arbox/tokenizer) -
  Simple multilingual tokenizer.
  <sup>[[tutorial](tutorials/tokenizer.md)]</sup>
- [pragmatic_tokenizer ![GitHub Repo Stars](https://img.shields.io/github/stars/diasks2/pragmatic_tokenizer) ![GitHub last commit](https://img.shields.io/github/last-commit/diasks2/pragmatic_tokenizer)](https://github.com/diasks2/pragmatic_tokenizer) -
  Multilingual tokenizer to split a string into tokens.
- [nlp-pure ![GitHub Repo Stars](https://img.shields.io/github/stars/parhamr/nlp-pure) ![GitHub last commit](https://img.shields.io/github/last-commit/parhamr/nlp-pure)](https://github.com/parhamr/nlp-pure) -
  Natural language processing algorithms implemented in pure Ruby with minimal dependencies.
- [textoken ![GitHub Repo Stars](https://img.shields.io/github/stars/manorie/textoken) ![GitHub last commit](https://img.shields.io/github/last-commit/manorie/textoken)](https://github.com/manorie/textoken) -
  Simple and customizable text tokenization library.
- [pragmatic_segmenter ![GitHub Repo Stars](https://img.shields.io/github/stars/diasks2/pragmatic_segmenter) ![GitHub last commit](https://img.shields.io/github/last-commit/diasks2/pragmatic_segmenter)](https://github.com/diasks2/pragmatic_segmenter) -
  Word Boundary Disambiguation with many cookies.
- [punkt-segmenter ![GitHub Repo Stars](https://img.shields.io/github/stars/lfcipriani/punkt-segmenter) ![GitHub last commit](https://img.shields.io/github/last-commit/lfcipriani/punkt-segmenter)](https://github.com/lfcipriani/punkt-segmenter) -
  Pure Ruby implementation of the Punkt Segmenter.
- [tactful_tokenizer ![GitHub Repo Stars](https://img.shields.io/github/stars/zencephalon/Tactful_Tokenizer) ![GitHub last commit](https://img.shields.io/github/last-commit/zencephalon/Tactful_Tokenizer)](https://github.com/zencephalon/Tactful_Tokenizer) -
  RegExp based tokenizer for different languages.
- [scapel ![GitHub Repo Stars](https://img.shields.io/github/stars/louismullie/scalpel) ![GitHub last commit](https://img.shields.io/github/last-commit/louismullie/scalpel)](https://github.com/louismullie/scalpel) -
  Sentence Boundary Disambiguation tool.

### Lexical Processing

#### Stemming

Stemming is the term used in information retrieval to describe the process for
reducing wordforms to some base representation. Stemming should be distinguished
from [Lemmatization](#lemmatization) since `stems` are not necessarily have
linguistic motivation.

- [ruby-stemmer ![GitHub Repo Stars](https://img.shields.io/github/stars/aurelian/ruby-stemmer) ![GitHub last commit](https://img.shields.io/github/last-commit/aurelian/ruby-stemmer)](https://github.com/aurelian/ruby-stemmer) -
  Ruby-Stemmer exposes the SnowBall API to Ruby.
- [uea-stemmer ![GitHub Repo Stars](https://img.shields.io/github/stars/ealdent/uea-stemmer) ![GitHub last commit](https://img.shields.io/github/last-commit/ealdent/uea-stemmer)](https://github.com/ealdent/uea-stemmer) -
  Conservative stemmer for search and indexing.

#### Lemmatization

Lemmatization is considered a process of finding a base form of a word. Lemmas
are often collected in dictionaries.

- [lemmatizer ![GitHub Repo Stars](https://img.shields.io/github/stars/yohasebe/lemmatizer) ![GitHub last commit](https://img.shields.io/github/last-commit/yohasebe/lemmatizer)](https://github.com/yohasebe/lemmatizer) -
  WordNet based Lemmatizer for English texts.

#### Lexical Statistics: Counting Types and Tokens

- [wc ![GitHub Repo Stars](https://img.shields.io/github/stars/thesp0nge/wc) ![GitHub last commit](https://img.shields.io/github/last-commit/thesp0nge/wc)](https://github.com/thesp0nge/wc) -
  Facilities to count word occurrences in a text.
- [word_count ![GitHub Repo Stars](https://img.shields.io/github/stars/AtelierConvivialite/word_count) ![GitHub last commit](https://img.shields.io/github/last-commit/AtelierConvivialite/word_count)](https://github.com/AtelierConvivialite/word_count) -
  Word counter for `String` and `Hash` objects.
- [words_counted ![GitHub Repo Stars](https://img.shields.io/github/stars/abitdodgy/words_counted) ![GitHub last commit](https://img.shields.io/github/last-commit/abitdodgy/words_counted)](https://github.com/abitdodgy/words_counted) -
  Pure Ruby library counting word statistics with different custom options.

#### Filtering Stop Words

- [stopwords-filter ![GitHub Repo Stars](https://img.shields.io/github/stars/brenes/stopwords-filter) ![GitHub last commit](https://img.shields.io/github/last-commit/brenes/stopwords-filter)](https://github.com/brenes/stopwords-filter) - Filter and
  Stop Word Lexicon based on the SnowBall lemmatizer.

### Phrasal Level Processing

- [n_gram ![GitHub Repo Stars](https://img.shields.io/github/stars/reddavis/N-Gram) ![GitHub last commit](https://img.shields.io/github/last-commit/reddavis/N-Gram)](https://github.com/reddavis/N-Gram) -
  N-Gram generator.
- [ruby-ngram ![GitHub Repo Stars](https://img.shields.io/github/stars/tkellen/ruby-ngram) ![GitHub last commit](https://img.shields.io/github/last-commit/tkellen/ruby-ngram)](https://github.com/tkellen/ruby-ngram) -
  Break words and phrases into ngrams.
- [raingrams ![GitHub Repo Stars](https://img.shields.io/github/stars/postmodern/raingrams) ![GitHub last commit](https://img.shields.io/github/last-commit/postmodern/raingrams)](https://github.com/postmodern/raingrams) -
  Flexible and general-purpose ngrams library written in pure Ruby.

### Syntactic Processing

#### Constituency Parsing

- [stanfordparser](https://rubygems.org/gems/stanfordparser) -
  Ruby based wrapper for the Stanford Parser.
- [rley ![GitHub Repo Stars](https://img.shields.io/github/stars/famished-tiger/Rley) ![GitHub last commit](https://img.shields.io/github/last-commit/famished-tiger/Rley)](https://github.com/famished-tiger/Rley) -
  Pure Ruby implementation of the [Earley](https://en.wikipedia.org/wiki/Earley_parser)
  Parsing Algorithm for Context-Free Constituency Grammars.
- [rsyntaxtree ![GitHub Repo Stars](https://img.shields.io/github/stars/yohasebe/rsyntaxtree) ![GitHub last commit](https://img.shields.io/github/last-commit/yohasebe/rsyntaxtree)](https://github.com/yohasebe/rsyntaxtree) -
  Visualization for syntactic trees in Ruby based on [RMagick ![GitHub Repo Stars](https://img.shields.io/github/stars/rmagick/rmagick) ![GitHub last commit](https://img.shields.io/github/last-commit/rmagick/rmagick)](https://github.com/rmagick/rmagick).
  <sup>[dep: [ImageMagick](#imagemagick)]</sup>

### Semantic Analysis

- [amatch ![GitHub Repo Stars](https://img.shields.io/github/stars/flori/amatch) ![GitHub last commit](https://img.shields.io/github/last-commit/flori/amatch)](https://github.com/flori/amatch) -
  Set of five distance types between strings (including Levenshtein, Sellers, Jaro-Winkler, 'pair distance').
- [damerau-levenshtein ![GitHub Repo Stars](https://img.shields.io/github/stars/GlobalNamesArchitecture/damerau-levenshtein) ![GitHub last commit](https://img.shields.io/github/last-commit/GlobalNamesArchitecture/damerau-levenshtein)](https://github.com/GlobalNamesArchitecture/damerau-levenshtein) -
  Calculates edit distance using the Damerau-Levenshtein algorithm.
- [hotwater ![GitHub Repo Stars](https://img.shields.io/github/stars/colinsurprenant/hotwater) ![GitHub last commit](https://img.shields.io/github/last-commit/colinsurprenant/hotwater)](https://github.com/colinsurprenant/hotwater) -
  Fast Ruby FFI string edit distance algorithms.
- [levenshtein-ffi ![GitHub Repo Stars](https://img.shields.io/github/stars/dbalatero/levenshtein-ffi) ![GitHub last commit](https://img.shields.io/github/last-commit/dbalatero/levenshtein-ffi)](https://github.com/dbalatero/levenshtein-ffi) -
  Fast string edit distance computation, using the Damerau-Levenshtein algorithm.
- [tf_idf ![GitHub Repo Stars](https://img.shields.io/github/stars/reddavis/TF-IDF) ![GitHub last commit](https://img.shields.io/github/last-commit/reddavis/TF-IDF)](https://github.com/reddavis/TF-IDF) -
  Term Frequency / Inverse Document Frequency in pure Ruby.
- [tf-idf-similarity ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmckinney/tf-idf-similarity) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmckinney/tf-idf-similarity)](https://github.com/jpmckinney/tf-idf-similarity) -
  Calculate the similarity between texts using TF/IDF.

### Pragmatical Analysis
- [SentimentLib ![GitHub Repo Stars](https://img.shields.io/github/stars/nzaillian/sentiment_lib) ![GitHub last commit](https://img.shields.io/github/last-commit/nzaillian/sentiment_lib)](https://github.com/nzaillian/sentiment_lib) -
  Simple extensible sentiment analysis gem.

## High Level Tasks

### Spelling and Error Correction

- [gingerice ![GitHub Repo Stars](https://img.shields.io/github/stars/subosito/gingerice) ![GitHub last commit](https://img.shields.io/github/last-commit/subosito/gingerice)](https://github.com/subosito/gingerice) -
  Spelling and Grammar corrections via the [Ginger](https://www.gingersoftware.com/) API.
- [hunspell-i18n ![GitHub Repo Stars](https://img.shields.io/github/stars/romanbsd/hunspell) ![GitHub last commit](https://img.shields.io/github/last-commit/romanbsd/hunspell)](https://github.com/romanbsd/hunspell) -
  Ruby bindings to the standard [Hunspell](https://hunspell.github.io/) Spell Checker.
- [ffi-hunspell ![GitHub Repo Stars](https://img.shields.io/github/stars/postmodern/ffi-hunspell) ![GitHub last commit](https://img.shields.io/github/last-commit/postmodern/ffi-hunspell)](https://github.com/postmodern/ffi-hunspell) -
  FFI based Ruby bindings for [Hunspell](https://hunspell.github.io/).
- [hunspell ![GitHub Repo Stars](https://img.shields.io/github/stars/segabor/Hunspell) ![GitHub last commit](https://img.shields.io/github/last-commit/segabor/Hunspell)](https://github.com/segabor/Hunspell) -
  Ruby bindings to [Hunspell](https://hunspell.github.io/) via Ruby C API.

### Text Alignment

- [alignment ![GitHub Repo Stars](https://img.shields.io/github/stars/povilasjurcys/alignment) ![GitHub last commit](https://img.shields.io/github/last-commit/povilasjurcys/alignment)](https://github.com/povilasjurcys/alignment) -
  Alignment routines for bilingual texts (Gale-Church implementation).

### Machine Translation

- [google-api-client ![GitHub Repo Stars](https://img.shields.io/github/stars/googleapis/google-api-ruby-client) ![GitHub last commit](https://img.shields.io/github/last-commit/googleapis/google-api-ruby-client)](https://github.com/googleapis/google-api-ruby-client) -
  Google API Ruby Client.
- [microsoft_translator ![GitHub Repo Stars](https://img.shields.io/github/stars/ikayzo/microsoft_translator) ![GitHub last commit](https://img.shields.io/github/last-commit/ikayzo/microsoft_translator)](https://github.com/ikayzo/microsoft_translator) -
  Ruby client for the microsoft translator API.
- [termit ![GitHub Repo Stars](https://img.shields.io/github/stars/pawurb/termit) ![GitHub last commit](https://img.shields.io/github/last-commit/pawurb/termit)](https://github.com/pawurb/termit) -
  Google Translate with speech synthesis in your terminal.
- [zipf ![GitHub Repo Stars](https://img.shields.io/github/stars/pks/zipf) ![GitHub last commit](https://img.shields.io/github/last-commit/pks/zipf)](https://github.com/pks/zipf) -
  implementation of BLEU and other base algorithms.

### Sentiment Analysis

- [stimmung ![GitHub Repo Stars](https://img.shields.io/github/stars/pachacamac/stimmung) ![GitHub last commit](https://img.shields.io/github/last-commit/pachacamac/stimmung)](https://github.com/pachacamac/stimmung) -
  Semantic Polarity based on the
  [SentiWS](http://wortschatz.uni-leipzig.de/en/download) lexicon.

### Numbers, Dates, and Time Parsing

- [chronic ![GitHub Repo Stars](https://img.shields.io/github/stars/mojombo/chronic) ![GitHub last commit](https://img.shields.io/github/last-commit/mojombo/chronic)](https://github.com/mojombo/chronic) -
  Pure Ruby natural language date parser.
- [chronic_between ![GitHub Repo Stars](https://img.shields.io/github/stars/jrobertson/chronic_between) ![GitHub last commit](https://img.shields.io/github/last-commit/jrobertson/chronic_between)](https://github.com/jrobertson/chronic_between) -
  Simple Ruby natural language parser for date and time ranges.
- [chronic_duration ![GitHub Repo Stars](https://img.shields.io/github/stars/henrypoydar/chronic_duration) ![GitHub last commit](https://img.shields.io/github/last-commit/henrypoydar/chronic_duration)](https://github.com/henrypoydar/chronic_duration) -
  Pure Ruby parser for elapsed time.
- [kronic ![GitHub Repo Stars](https://img.shields.io/github/stars/xaviershay/kronic) ![GitHub last commit](https://img.shields.io/github/last-commit/xaviershay/kronic)](https://github.com/xaviershay/kronic) -
  Methods for parsing and formatting human readable dates.
- [nickel ![GitHub Repo Stars](https://img.shields.io/github/stars/iainbeeston/nickel) ![GitHub last commit](https://img.shields.io/github/last-commit/iainbeeston/nickel)](https://github.com/iainbeeston/nickel) -
  Extracts date, time, and message information from naturally worded text.
- [tickle ![GitHub Repo Stars](https://img.shields.io/github/stars/yb66/tickle) ![GitHub last commit](https://img.shields.io/github/last-commit/yb66/tickle)](https://github.com/yb66/tickle) -
  Parser for recurring and repeating events.
- [numerizer ![GitHub Repo Stars](https://img.shields.io/github/stars/jduff/numerizer) ![GitHub last commit](https://img.shields.io/github/last-commit/jduff/numerizer)](https://github.com/jduff/numerizer) -
  Ruby parser for English number expressions.

### Named Entity Recognition

- [ruby-ner ![GitHub Repo Stars](https://img.shields.io/github/stars/mblongii/ruby-ner) ![GitHub last commit](https://img.shields.io/github/last-commit/mblongii/ruby-ner)](https://github.com/mblongii/ruby-ner) -
  Named Entity Recognition with Stanford NER and Ruby.
- [ruby-nlp ![GitHub Repo Stars](https://img.shields.io/github/stars/tiendung/ruby-nlp) ![GitHub last commit](https://img.shields.io/github/last-commit/tiendung/ruby-nlp)](https://github.com/tiendung/ruby-nlp) -
  Ruby Binding for Stanford Pos-Tagger and Name Entity Recognizer.

### Text-to-Speech-to-Text

- [espeak-ruby ![GitHub Repo Stars](https://img.shields.io/github/stars/dejan/espeak-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/dejan/espeak-ruby)](https://github.com/dejan/espeak-ruby) -
  Small Ruby API for utilizing 'espeak' and 'lame' to create text-to-speech mp3 files.
- [tts ![GitHub Repo Stars](https://img.shields.io/github/stars/c2h2/tts) ![GitHub last commit](https://img.shields.io/github/last-commit/c2h2/tts)](https://github.com/c2h2/tts) -
  Text-to-Speech conversion using the Google translate service.
- [att_speech ![GitHub Repo Stars](https://img.shields.io/github/stars/adhearsion/att_speech) ![GitHub last commit](https://img.shields.io/github/last-commit/adhearsion/att_speech)](https://github.com/adhearsion/att_speech) -
  Ruby wrapper over the AT&T Speech API for speech to text.
- [pocketsphinx-ruby ![GitHub Repo Stars](https://img.shields.io/github/stars/watsonbox/pocketsphinx-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/watsonbox/pocketsphinx-ruby)](https://github.com/watsonbox/pocketsphinx-ruby) -
  Pocketsphinx bindings.

## Dialog Agents, Assistants, and Chatbots

- [chatterbot ![GitHub Repo Stars](https://img.shields.io/github/stars/muffinista/chatterbot) ![GitHub last commit](https://img.shields.io/github/last-commit/muffinista/chatterbot)](https://github.com/muffinista/chatterbot) -
  Straightforward ruby-based Twitter Bot Framework, using OAuth to authenticate.
- [lita ![GitHub Repo Stars](https://img.shields.io/github/stars/litaio/lita) ![GitHub last commit](https://img.shields.io/github/last-commit/litaio/lita)](https://github.com/litaio/lita) -
  Highly extensible chat operation bot framework written with persistent storage on [Redis](https://redis.io/).

## Linguistic Resources

- [rwordnet ![GitHub Repo Stars](https://img.shields.io/github/stars/doches/rwordnet) ![GitHub last commit](https://img.shields.io/github/last-commit/doches/rwordnet)](https://github.com/doches/rwordnet) -
  Pure Ruby self contained API library for the [Princeton WordNet®](https://wordnet.princeton.edu/).
- [wordnet ![GitHub Repo Stars](https://img.shields.io/github/stars/ged/ruby-wordnet) ![GitHub last commit](https://img.shields.io/github/last-commit/ged/ruby-wordnet)](https://github.com/ged/ruby-wordnet/blob/master/README.rdoc) -
  Performance tuned bindings for the [Princeton WordNet®](https://wordnet.princeton.edu/).

## Machine Learning Libraries

[Machine Learning](https://en.wikipedia.org/wiki/Machine_learning) Algorithms
in pure Ruby or written in other programming languages with appropriate bindings
for Ruby.

For more up-to-date list please look at the [Awesome ML with Ruby][ml-with-ruby] list.

- [rb-libsvm ![GitHub Repo Stars](https://img.shields.io/github/stars/febeling/rb-libsvm) ![GitHub last commit](https://img.shields.io/github/last-commit/febeling/rb-libsvm)](https://github.com/febeling/rb-libsvm) -
  Support Vector Machines with Ruby.
- [weka ![GitHub Repo Stars](https://img.shields.io/github/stars/paulgoetze/weka-jruby) ![GitHub last commit](https://img.shields.io/github/last-commit/paulgoetze/weka-jruby)](https://github.com/paulgoetze/weka-jruby) -
  JRuby bindings for Weka, different ML algorithms implemented through Weka.
- [decisiontree ![GitHub Repo Stars](https://img.shields.io/github/stars/igrigorik/decisiontree) ![GitHub last commit](https://img.shields.io/github/last-commit/igrigorik/decisiontree)](https://github.com/igrigorik/decisiontree) -
  Decision Tree ID3 Algorithm in pure Ruby
  <sup>[[post](https://www.igvita.com/2007/04/16/decision-tree-learning-in-ruby/)]</sup>.
- [rtimbl ![GitHub Repo Stars](https://img.shields.io/github/stars/maspwr/rtimbl) ![GitHub last commit](https://img.shields.io/github/last-commit/maspwr/rtimbl)](https://github.com/maspwr/rtimbl) -
  Memory based learners from the Timbl framework.
- [classifier-reborn ![GitHub Repo Stars](https://img.shields.io/github/stars/jekyll/classifier-reborn) ![GitHub last commit](https://img.shields.io/github/last-commit/jekyll/classifier-reborn)](https://github.com/jekyll/classifier-reborn) -
  General classifier module to allow Bayesian and other types of classifications.
- [lda-ruby ![GitHub Repo Stars](https://img.shields.io/github/stars/ealdent/lda-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/ealdent/lda-ruby)](https://github.com/ealdent/lda-ruby) -
  Ruby implementation of the [LDA](https://en.wikipedia.org/wiki/Latent_Dirichlet_allocation)
  (Latent Dirichlet Allocation) for automatic Topic Modelling and Document Clustering.
- [liblinear-ruby-swig ![GitHub Repo Stars](https://img.shields.io/github/stars/tomz/liblinear-ruby-swig) ![GitHub last commit](https://img.shields.io/github/last-commit/tomz/liblinear-ruby-swig)](https://github.com/tomz/liblinear-ruby-swig) -
  Ruby interface to LIBLINEAR (much more efficient than LIBSVM for text classification).
- [linnaeus ![GitHub Repo Stars](https://img.shields.io/github/stars/djcp/linnaeus) ![GitHub last commit](https://img.shields.io/github/last-commit/djcp/linnaeus)](https://github.com/djcp/linnaeus) -
  Redis-backed Bayesian classifier.
- [maxent_string_classifier ![GitHub Repo Stars](https://img.shields.io/github/stars/mccraigmccraig/maxent_string_classifier) ![GitHub last commit](https://img.shields.io/github/last-commit/mccraigmccraig/maxent_string_classifier)](https://github.com/mccraigmccraig/maxent_string_classifier) -
  JRuby maximum entropy classifier for string data, based on the OpenNLP Maxent framework.
- [naive_bayes ![GitHub Repo Stars](https://img.shields.io/github/stars/reddavis/Naive-Bayes) ![GitHub last commit](https://img.shields.io/github/last-commit/reddavis/Naive-Bayes)](https://github.com/reddavis/Naive-Bayes) -
  Simple Naive Bayes classifier.
- [nbayes ![GitHub Repo Stars](https://img.shields.io/github/stars/oasic/nbayes) ![GitHub last commit](https://img.shields.io/github/last-commit/oasic/nbayes)](https://github.com/oasic/nbayes) -
  Full-featured, Ruby implementation of Naive Bayes.
- [omnicat ![GitHub Repo Stars](https://img.shields.io/github/stars/mustafaturan/omnicat) ![GitHub last commit](https://img.shields.io/github/last-commit/mustafaturan/omnicat)](https://github.com/mustafaturan/omnicat) -
  Generalized rack framework for text classifications.
- [omnicat-bayes ![GitHub Repo Stars](https://img.shields.io/github/stars/mustafaturan/omnicat-bayes) ![GitHub last commit](https://img.shields.io/github/last-commit/mustafaturan/omnicat-bayes)](https://github.com/mustafaturan/omnicat-bayes) -
  Naive Bayes text classification implementation as an OmniCat classifier strategy.
- [ruby-fann ![GitHub Repo Stars](https://img.shields.io/github/stars/tangledpath/ruby-fann) ![GitHub last commit](https://img.shields.io/github/last-commit/tangledpath/ruby-fann)](https://github.com/tangledpath/ruby-fann) -
  Ruby bindings to the [Fast Artificial Neural Network Library (FANN)](http://leenissen.dk/fann/wp/).
- [rblearn ![GitHub Repo Stars](https://img.shields.io/github/stars/himkt/rblearn) ![GitHub last commit](https://img.shields.io/github/last-commit/himkt/rblearn)](https://github.com/himkt/rblearn) - Feature Extraction and Crossvalidation library.

## Data Visualization

Please refer to the [Data Visualization ![GitHub Repo Stars](https://img.shields.io/github/stars/arbox/data-science-with-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/arbox/data-science-with-ruby)](https://github.com/arbox/data-science-with-ruby#visualization)
section on the [Data Science with Ruby][ds-with-ruby] list.

## Optical Character Recognition

* [tesseract-ocr ![GitHub Repo Stars](https://img.shields.io/github/stars/meh/ruby-tesseract-ocr) ![GitHub last commit](https://img.shields.io/github/last-commit/meh/ruby-tesseract-ocr)](https://github.com/meh/ruby-tesseract-ocr) -
  FFI based wrapper over the [Tesseract OCR Engine ![GitHub Repo Stars](https://img.shields.io/github/stars/tesseract-ocr/tesseract) ![GitHub last commit](https://img.shields.io/github/last-commit/tesseract-ocr/tesseract)](https://github.com/tesseract-ocr/tesseract).

## Text Extraction

- [yomu ![GitHub Repo Stars](https://img.shields.io/github/stars/yomurb/yomu) ![GitHub last commit](https://img.shields.io/github/last-commit/yomurb/yomu)](https://github.com/yomurb/yomu) -
  library for extracting text and metadata from files and documents
  using the [Apache Tika](https://tika.apache.org/) content analysis toolkit.

## Full Text Search, Information Retrieval, Indexing

- [rsolr ![GitHub Repo Stars](https://img.shields.io/github/stars/rsolr/rsolr) ![GitHub last commit](https://img.shields.io/github/last-commit/rsolr/rsolr)](https://github.com/rsolr/rsolr) -
  Ruby and Rails client library for [Apache Solr](http://lucene.apache.org/solr/).
- [sunspot ![GitHub Repo Stars](https://img.shields.io/github/stars/sunspot/sunspot) ![GitHub last commit](https://img.shields.io/github/last-commit/sunspot/sunspot)](https://github.com/sunspot/sunspot) -
  Rails centric client for [Apache Solr](http://lucene.apache.org/solr/).
- [thinking-sphinx ![GitHub Repo Stars](https://img.shields.io/github/stars/pat/thinking-sphinx) ![GitHub last commit](https://img.shields.io/github/last-commit/pat/thinking-sphinx)](https://github.com/pat/thinking-sphinx) -
  [Active Record](https://guides.rubyonrails.org/active_record_basics.html)
  plugin for using [Sphinx](http://sphinxsearch.com/) in (not only) Rails based projects.
- [elasticsearch ![GitHub Repo Stars](https://img.shields.io/github/stars/elastic/elasticsearch-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/elastic/elasticsearch-ruby)](https://github.com/elastic/elasticsearch-ruby/tree/master/elasticsearch) -
  Ruby client and API for [Elasticsearch](https://www.elastic.co/).
- [elasticsearch-rails ![GitHub Repo Stars](https://img.shields.io/github/stars/elastic/elasticsearch-rails) ![GitHub last commit](https://img.shields.io/github/last-commit/elastic/elasticsearch-rails)](https://github.com/elastic/elasticsearch-rails) -
  Ruby and Rails integrations for [Elasticsearch](https://www.elastic.co/).
- [google-api-client ![GitHub Repo Stars](https://img.shields.io/github/stars/googleapis/google-api-ruby-client) ![GitHub last commit](https://img.shields.io/github/last-commit/googleapis/google-api-ruby-client)](https://github.com/googleapis/google-api-ruby-client) -
  Ruby API library for [Google](https://developers.google.com/api-client-library/ruby/) services.

## Language Aware String Manipulation

Libraries for language aware string manipulation, i.e. search, pattern matching,
case conversion, transcoding, regular expressions which need information about
the underlying language.

- [fuzzy_match ![GitHub Repo Stars](https://img.shields.io/github/stars/seamusabshere/fuzzy_match) ![GitHub last commit](https://img.shields.io/github/last-commit/seamusabshere/fuzzy_match)](https://github.com/seamusabshere/fuzzy_match) -
  Fuzzy string comparison with Distance measures and Regular Expression.
- [fuzzy-string-match ![GitHub Repo Stars](https://img.shields.io/github/stars/kiyoka/fuzzy-string-match) ![GitHub last commit](https://img.shields.io/github/last-commit/kiyoka/fuzzy-string-match)](https://github.com/kiyoka/fuzzy-string-match) -
  Fuzzy string matching library for Ruby.
- [active_support ![GitHub Repo Stars](https://img.shields.io/github/stars/rails/rails) ![GitHub last commit](https://img.shields.io/github/last-commit/rails/rails)](https://github.com/rails/rails/tree/master/activesupport/lib/active_support) -
  RoR `ActiveSupport` gem has various string extensions that can handle case.
- [fuzzy_tools ![GitHub Repo Stars](https://img.shields.io/github/stars/brianhempel/fuzzy_tools) ![GitHub last commit](https://img.shields.io/github/last-commit/brianhempel/fuzzy_tools)](https://github.com/brianhempel/fuzzy_tools) -
  Toolset for fuzzy searches in Ruby tuned for accuracy.
- [u](http://disu.se/software/u-1.0/) -
  U extends Ruby’s Unicode support.
- [unicode ![GitHub Repo Stars](https://img.shields.io/github/stars/blackwinter/unicode) ![GitHub last commit](https://img.shields.io/github/last-commit/blackwinter/unicode)](https://github.com/blackwinter/unicode) -
  Unicode normalization library.
- [CommonRegexRuby ![GitHub Repo Stars](https://img.shields.io/github/stars/talyssonoc/CommonRegexRuby) ![GitHub last commit](https://img.shields.io/github/last-commit/talyssonoc/CommonRegexRuby)](https://github.com/talyssonoc/CommonRegexRuby) -
  Find a lot of kinds of common information in a string.
- [regexp-examples ![GitHub Repo Stars](https://img.shields.io/github/stars/tom-lord/regexp-examples) ![GitHub last commit](https://img.shields.io/github/last-commit/tom-lord/regexp-examples)](https://github.com/tom-lord/regexp-examples) -
  Generate strings that match a given regular expression.
- [verbal_expressions ![GitHub Repo Stars](https://img.shields.io/github/stars/ryan-endacott/verbal_expressions) ![GitHub last commit](https://img.shields.io/github/last-commit/ryan-endacott/verbal_expressions)](https://github.com/ryan-endacott/verbal_expressions) -
  Make difficult regular expressions easy.
- [translit_kit ![GitHub Repo Stars](https://img.shields.io/github/stars/AnalyzePlatypus/TranslitKit) ![GitHub last commit](https://img.shields.io/github/last-commit/AnalyzePlatypus/TranslitKit)](https://github.com/AnalyzePlatypus/TranslitKit) -
  Transliterate Hebrew & Yiddish text into Latin characters.
- [re2 ![GitHub Repo Stars](https://img.shields.io/github/stars/mudge/re2) ![GitHub last commit](https://img.shields.io/github/last-commit/mudge/re2)](https://github.com/mudge/re2) -
  hight-speed Regular Expression library for Text Mining and Text Extraction.
- [regex_sample ![GitHub Repo Stars](https://img.shields.io/github/stars/mochizukikotaro/regex_sample) ![GitHub last commit](https://img.shields.io/github/last-commit/mochizukikotaro/regex_sample)](https://github.com/mochizukikotaro/regex_sample) -
  sample string generation from a given Regular Expression.
- [iuliia ![GitHub Repo Stars](https://img.shields.io/github/stars/adnikiforov/iuliia-rb) ![GitHub last commit](https://img.shields.io/github/last-commit/adnikiforov/iuliia-rb)](https://github.com/adnikiforov/iuliia-rb) &mdash;
  transliteration Cyrillic to Latin in many possible ways (defined by the [reference implementation ![GitHub Repo Stars](https://img.shields.io/github/stars/nalgeon/iuliia) ![GitHub last commit](https://img.shields.io/github/last-commit/nalgeon/iuliia)](https://github.com/nalgeon/iuliia)).

## Articles, Posts, Talks, and Presentations

- 2019
  - _Extracting Text From Images Using Ruby_ by [aonemd](https://twitter.com/aonemd)
    <sup>[[post](https://aonemd.github.io/blog/extracting-text-from-images-using-ruby) |
    [code](https://gist.github.com/aonemd/7bb3c4760d9e47a9ce8e270198cb40a0)]</sup>
- 2018
  - _Natural Language Processing and Tweet Sentiment Analysis_ by [Cassandra Corrales](https://twitter.com/casita305)
    <sup>[[post](https://medium.com/@cmcorrales3/natural-language-processing-and-tweet-sentiment-analysis-fa1edbb5ddd5)]</sup>
- 2017
  - _The Google NLP API Meets Ruby_ by [Aja Hammerly](https://twitter.com/the_thagomizer)
    <sup>[[post](http://www.thagomizer.com/blog/2017/04/13/the-google-nlp-api-meets-ruby.html)]</sup>
  - _Syntax Isn't Everything: NLP For Rubyists_ by [Aja Hammerly](https://twitter.com/the_thagomizer)
    <sup>[[slides](http://www.thagomizer.com/files/NLP_RailsConf2017.pdf)]</sup>
  - _Scientific Computing on JRuby_ by [Prasun Anand](https://twitter.com/prasun_anand)
    <sup>[[slides](https://www.slideshare.net/PrasunAnand2/fosdem2017-scientific-computing-on-jruby) |
    [video](https://ftp.fau.de/fosdem/2017/K.4.201/ruby_scientific_computing_on_jruby.mp4) |
    [slides](https://www.slideshare.net/PrasunAnand2/scientific-computing-on-jruby) |
    [slides](https://www.slideshare.net/PrasunAnand2/scientific-computation-on-jruby)]</sup>
  - _Unicode Normalization in Ruby_ by [Starr Horne](https://twitter.com/starrhorne)
    <sup>[[post](https://blog.honeybadger.io/ruby_unicode_normalization/)]</sup>
- 2016
  - _Quickly Create a Telegram Bot in Ruby_ by [Ardian Haxha](https://twitter.com/ArdianHaxha)
    <sup>[[tutorial](https://www.sitepoint.com/quickly-create-a-telegram-bot-in-ruby/)]</sup>
  - _Deep Learning: An Introduction for Ruby Developers_ by [Geoffrey Litt](https://twitter.com/geoffreylitt)
    <sup>[[slides](https://speakerdeck.com/geoffreylitt/deep-learning-an-introduction-for-ruby-developers)]</sup>
  - _How I made a pure-Ruby word2vec program more than 3x faster_ by [Kei Sawada](https://twitter.com/remore)
    <sup>[[slides](https://speakerdeck.com/remore/how-i-made-a-pure-ruby-word2vec-program-more-than-3x-faster)]</sup>
  - _Dōmo arigatō, Mr. Roboto: Machine Learning with Ruby_ by [Eric Weinstein](https://twitter.com/ericqweinstein)
    <sup>[[slides](https://speakerdeck.com/ericqweinstein/domo-arigato-mr-roboto-machine-learning-with-ruby) | [video](https://www.youtube.com/watch?v=T1nFQ49TyeA)]</sup>
- 2015
  - _N-gram Analysis for Fun and Profit_ by [Jesus Castello](https://github.com/matugm)
    <sup>[[tutorial](https://www.rubyguides.com/2015/09/ngram-analysis-ruby/)]</sup>
  - _Machine Learning made simple with Ruby_ by [Lorenzo Masini](https://github.com/rugginoso)
    <sup>[[tutorial](https://www.leanpanda.com/blog/2015/08/24/machine-learning-automatic-classification/)]</sup>
  - _Using Ruby Machine Learning to Find Paris Hilton Quotes_ by [Rick Carlino](https://github.com/RickCarlino)
    <sup>[[tutorial](http://web.archive.org/web/20160414072324/http://datamelon.io/blog/2015/using-ruby-machine-learning-id-paris-hilton-quotes.html)]</sup>
  - _Exploring Natural Language Processing in Ruby_ by [Kevin Dias](https://github.com/diasks2)
    <sup>[[slides](https://www.slideshare.net/diasks2/exploring-natural-language-processing-in-ruby)]</sup>
  - _Machine Learning made simple with Ruby_ by [Lorenzo Masini](https://twitter.com/rugginoso)
    <sup>[[post](https://www.leanpanda.com/blog/2015/08/24/machine-learning-automatic-classification/)]</sup>
  - _Practical Data Science in Ruby_ by Bobby Grayson
    <sup>[[slides](http://slides.com/bobbygrayson/p#/)]</sup>
- 2014
  - _Natural Language Parsing with Ruby_ by [Glauco Custódio](https://github.com/glaucocustodio)
    <sup>[[tutorial](http://glaucocustodio.github.io/2014/11/10/natural-language-parsing-with-ruby/)]</sup>
  - _Demystifying Data Science: Analyzing Conference Talks with Rails and Ngrams_ by
    [Todd Schneider](https://github.com/toddwschneider)
    <sup>[[video](https://www.youtube.com/watch?v=2ZDCxwB29Bg) | [code ![GitHub Repo Stars](https://img.shields.io/github/stars/Genius/abstractogram) ![GitHub last commit](https://img.shields.io/github/last-commit/Genius/abstractogram)](https://github.com/Genius/abstractogram)]</sup>
  - _Natural Language Processing with Ruby_ by [Konstantin Tennhard](https://github.com/t6d)
    <sup>[[video](https://www.youtube.com/watch?v=5u86qVh8r0M) | [video](https://www.youtube.com/watch?v=oFmy_QBQ5DU) |
    [video](https://www.youtube.com/watch?v=sPkeeWnsMn0) |
    [slides](http://euruko2013.org/speakers/presentations/natural_language_processing_with_ruby_and_opennlp-tennhard.pdf)]</sup>
- 2013
  - _How to parse 'go' - Natural Language Processing in Ruby_ by
    [Tom Cartwright](https://twitter.com/tomcartwrightuk)
    <sup>[[slides](https://www.slideshare.net/TomCartwright/natual-language-processing-in-ruby) |
    [video](https://skillsmatter.com/skillscasts/4883-how-to-parse-go)]</sup>
  - _Natural Language Processing in Ruby_ by [Brandon Black](https://twitter.com/brandonmblack)
    <sup>[[slides](https://speakerdeck.com/brandonblack/natural-language-processing-in-ruby) |
    [video](http://confreaks.tv/videos/railsconf2013-natural-language-processing-with-ruby)]</sup>
  - _Natural Language Processing with Ruby: n-grams_ by [Nathan Kleyn](https://github.com/nathankleyn)
    <sup>[[tutorial](https://www.sitepoint.com/natural-language-processing-ruby-n-grams/) |
    [code ![GitHub Repo Stars](https://img.shields.io/github/stars/nathankleyn/ruby-nlp) ![GitHub last commit](https://img.shields.io/github/last-commit/nathankleyn/ruby-nlp)](https://github.com/nathankleyn/ruby-nlp)]</sup>
  - _Seeking Lovecraft, Part 1: An introduction to NLP and the Treat Gem_ by
    [Robert Qualls](https://github.com/rlqualls)
    <sup>[[tutorial](https://www.sitepoint.com/seeking-lovecraft-part-1-an-introduction-to-nlp-and-the-treat-gem/)]</sup>
- 2012
  - _Machine Learning with Ruby, Part One_ by [Vasily Vasinov](https://twitter.com/vasinov)
    <sup>[[tutorial](http://www.vasinov.com/blog/machine-learning-with-ruby-part-one/)]</sup>
- 2011
  - _Ruby one-liners_ by [Benoit Hamelin](https://twitter.com/benoithamelin)
    <sup>[[post](http://benoithamelin.tumblr.com/ruby1line)]</sup>
  - _Clustering in Ruby_ by [Colin Drake](https://twitter.com/colinfdrake)
    <sup>[[post](https://colindrake.me/post/k-means-clustering-in-ruby/)/)]</sup>
- 2010
  - _bayes_motel – Bayesian classification for Ruby_ by [Mike Perham](https://twitter.com/mperham)
    <sup>[[post](http://www.mikeperham.com/2010/04/28/bayes_motel-bayesian-classification-for-ruby/)]</sup>
- 2009
  - _Porting the UEA-Lite Stemmer to Ruby_ by [Jason Adams](https://twitter.com/ealdent)
    <sup>[[post](https://ealdent.wordpress.com/2009/07/16/porting-the-uea-lite-stemmer-to-ruby/)]</sup>
  - _NLP Resources for Ruby_ by [Jason Adams](https://twitter.com/ealdent)
    <sup>[[post](https://ealdent.wordpress.com/2009/09/13/nlp-resources-for-ruby/)]</sup>
- 2008
  - _Support Vector Machines (SVM) in Ruby_ by [Ilya Grigorik](https://twitter.com/igrigorik)
    <sup>[[post](https://www.igvita.com/2008/01/07/support-vector-machines-svm-in-ruby/)]</sup>
  - _Practical text classification with Ruby_ by [Gleicon Moraes](https://twitter.com/gleicon)
    <sup>[[post](https://zenmachine.wordpress.com/practical-text-classification-with-ruby/) |
    [code ![GitHub Repo Stars](https://img.shields.io/github/stars/gleicon/zenmachine) ![GitHub last commit](https://img.shields.io/github/last-commit/gleicon/zenmachine)](https://github.com/gleicon/zenmachine)]</sup>
- 2007
  - _Decision Tree Learning in Ruby_ by [Ilya Grigorik](https://twitter.com/igrigorik)
    <sup>[[post](https://www.igvita.com/2007/04/16/decision-tree-learning-in-ruby/)]</sup>
- 2006
  - _Speak My Language: Natural Language Processing With Ruby_ by [Michael Granger](https://deveiate.org/resume.html)
    <sup>[[slides](https://deveiate.org/misc/Speak-My-Language.pdf) |
          [write-up](http://blog.nicksieger.com/articles/2006/10/22/rubyconf-natural-language-generation-and-processing-in-ruby/) |
          [write-up](http://juixe.com/papers/RubyConf2006.pdf)]</sup>

## Projects and Code Examples

- [Going the Distance ![GitHub Repo Stars](https://img.shields.io/github/stars/schneems/going_the_distance) ![GitHub last commit](https://img.shields.io/github/last-commit/schneems/going_the_distance)](https://github.com/schneems/going_the_distance) -
  Implementations of various distance algorithms with example calculations.
- [Named entity recognition with Stanford NER and Ruby ![GitHub Repo Stars](https://img.shields.io/github/stars/mblongii/ruby-ner) ![GitHub last commit](https://img.shields.io/github/last-commit/mblongii/ruby-ner)](https://github.com/mblongii/ruby-ner) -
  NER Examples in Ruby and Java with some [explanations](https://web.archive.org/web/20120722225402/http://mblongii.com/2012/04/15/named-entity-recognition-with-stanford-ner-and-ruby/).
- [Words Counted](http://rubywordcount.com/) -
  examples of customizable word statistics powered by
  [words_counted ![GitHub Repo Stars](https://img.shields.io/github/stars/abitdodgy/words_counted) ![GitHub last commit](https://img.shields.io/github/last-commit/abitdodgy/words_counted)](https://github.com/abitdodgy/words_counted).
- [RSyntaxTree](https://yohasebe.com/rsyntaxtree/) -
  Web based demonstration of the syntactic tree visualization.

## Books

-  [Miller, Rob](https://twitter.com/robmil/).
   _Text Processing with Ruby: Extract Value from the Data That Surrounds You._
   Pragmatic Programmers, 2015.
   <sup>[[link](https://www.amazon.com/Text-Processing-Ruby-Extract-Surrounds/dp/1680500708)]</sup>
-  [Watson, Mark](https://twitter.com/mark_l_watson).
   _Scripting Intelligence: Web 3.0 Information Gathering and Processing._
   APRESS, 2010.
   <sup>[[link](https://www.amazon.de/Scripting-Intelligence-Information-Gathering-Processing/dp/1430223510)]</sup>
-  [Watson, Mark](https://twitter.com/mark_l_watson).
   _Practical Semantic Web and Linked Data Applications._ Lulu, 2010.
   <sup>[[link](http://www.lulu.com/shop/mark-watson/practical-semantic-web-and-linked-data-applications-java-edition/paperback/product-10915016.html)]</sup>

## Community

- [Reddit](https://www.reddit.com/r/LanguageTechnology/search?q=ruby&restrict_sr=on)
- [Stack Overflow](https://stackoverflow.com/search?q=%5Bnlp%5D+and+%5Bruby%5D)
- [Twitter](https://twitter.com/search?q=Ruby%20NLP%20%23ruby%20OR%20%23nlproc%20OR%20%23rubynlp%20OR%20%23nlp&src=typd&lang=en)

## Needs your Help!

All projects in this section are really important for the community but need
more attention. Please if you have spare time and dedication spend some hours
on the code here.

- [ferret ![GitHub Repo Stars](https://img.shields.io/github/stars/dbalmain/ferret) ![GitHub last commit](https://img.shields.io/github/last-commit/dbalmain/ferret)](https://github.com/dbalmain/ferret) -
  Information Retrieval in C and Ruby.
- [summarize ![GitHub Repo Stars](https://img.shields.io/github/stars/ssoper/summarize) ![GitHub last commit](https://img.shields.io/github/last-commit/ssoper/summarize)](https://github.com/ssoper/summarize) -
  Ruby native wrapper for [Open Text Summarizer ![GitHub Repo Stars](https://img.shields.io/github/stars/neopunisher/Open-Text-Summarizer) ![GitHub last commit](https://img.shields.io/github/last-commit/neopunisher/Open-Text-Summarizer)](https://github.com/neopunisher/Open-Text-Summarizer).

## Related Resources

- [Neural Machine Translation Implementations ![GitHub Repo Stars](https://img.shields.io/github/stars/jonsafari/nmt-list) ![GitHub last commit](https://img.shields.io/github/last-commit/jonsafari/nmt-list)](https://github.com/jonsafari/nmt-list)
- [Awesome Ruby ![GitHub Repo Stars](https://img.shields.io/github/stars/markets/awesome-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/markets/awesome-ruby)](https://github.com/markets/awesome-ruby#natural-language-processing) -
  Among other awesome items a short list of NLP related projects.
- [Ruby NLP ![GitHub Repo Stars](https://img.shields.io/github/stars/diasks2/ruby-nlp) ![GitHub last commit](https://img.shields.io/github/last-commit/diasks2/ruby-nlp)](https://github.com/diasks2/ruby-nlp) -
  State-of-Art collection of Ruby libraries for NLP.
- [Speech and Natural Language Processing ![GitHub Repo Stars](https://img.shields.io/github/stars/edobashira/speech-language-processing) ![GitHub last commit](https://img.shields.io/github/last-commit/edobashira/speech-language-processing)](https://github.com/edobashira/speech-language-processing) -
  General List of NLP related resources (mostly not for Ruby programmers).
- [Scientific Ruby](http://sciruby.com/) -
  Linear Algebra, Visualization and Scientific Computing for Ruby.
- [iRuby ![GitHub Repo Stars](https://img.shields.io/github/stars/SciRuby/iruby) ![GitHub last commit](https://img.shields.io/github/last-commit/SciRuby/iruby)](https://github.com/SciRuby/iruby) - IRuby kernel for Jupyter (formelly IPython).
- [Awesome OCR ![GitHub Repo Stars](https://img.shields.io/github/stars/kba/awesome-ocr) ![GitHub last commit](https://img.shields.io/github/last-commit/kba/awesome-ocr)](https://github.com/kba/awesome-ocr) -
  Multitude of OCR (Optical Character Recognition) resources.
- [Awesome TensorFlow ![GitHub Repo Stars](https://img.shields.io/github/stars/jtoy/awesome-tensorflow) ![GitHub last commit](https://img.shields.io/github/last-commit/jtoy/awesome-tensorflow)](https://github.com/jtoy/awesome-tensorflow) -
  Machine Learning with TensorFlow libraries.
- <a name="imagemagic"></a>
  [ImageMagick](https://imagemagick.org/index.php)

## License

[![Creative Commons Zero 1.0](http://mirrors.creativecommons.org/presskit/buttons/80x15/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/) `Awesome NLP with Ruby` by [Andrei Beliankou](https://github.com/arbox) and
[Contributors ![GitHub Repo Stars](https://img.shields.io/github/stars/arbox/nlp-with-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/arbox/nlp-with-ruby)](https://github.com/arbox/nlp-with-ruby/graphs/contributors).

To the extent possible under law, the person who associated CC0 with
`Awesome NLP with Ruby` has waived all copyright and related or neighboring rights
to `Awesome NLP with Ruby`.

You should have received a copy of the CC0 legalcode along with this
work. If not, see <https://creativecommons.org/publicdomain/zero/1.0/>.

<!--- Links --->
[ruby]: https://www.ruby-lang.org/en/
[motivation]: https://github.com/arbox/nlp-with-ruby/blob/master/motivation.md
[faq]: https://github.com/arbox/nlp-with-ruby/blob/master/FAQ.md
[ds-with-ruby]: https://github.com/arbox/data-science-with-ruby
[ml-with-ruby]: https://github.com/arbox/machine-learning-with-ruby
[change-pr]: https://github.com/RichardLitt/knowledge/blob/master/github/amending-a-commit-guide.md
