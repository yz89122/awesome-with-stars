# Awesome Python Typing [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re) [![Gitter](https://img.shields.io/gitter/room/mypy-django/Lobby?color=9cf&style=flat-square)](https://gitter.im/mypy-django/Lobby?source=title)

Collection of awesome Python types, stubs, plugins, and tools to work with them.

## Contents

- [Static type checkers](#static-type-checkers)
- [Dynamic type checkers](#dynamic-type-checkers)
- [Stub packages](#stub-packages)
- [Additional types](#additional-types)
- [Backports and improvements](#backports-and-improvements)
- [Tools](#tools)
- [Integrations](#integrations)
- [Articles](#articles)
- [Communities](#communities)
- [Related](#related)

[Full list of typed projects on PyPi](https://pypi.org/search/?q=&o=&c=Typing+%3A%3A+Typed) is here.

## Static type checkers

- [basedmypy ![GitHub Repo Stars](https://img.shields.io/github/stars/KotlinIsland/basedmypy) ![GitHub last commit](https://img.shields.io/github/last-commit/KotlinIsland/basedmypy)](https://github.com/KotlinIsland/basedmypy) - Based static typing with baseline functionality.
- [mypy ![GitHub Repo Stars](https://img.shields.io/github/stars/python/mypy) ![GitHub last commit](https://img.shields.io/github/last-commit/python/mypy)](https://github.com/python/mypy) - Optional static typing (PEP 484).
- [pyanalyze ![GitHub Repo Stars](https://img.shields.io/github/stars/quora/pyanalyze) ![GitHub last commit](https://img.shields.io/github/last-commit/quora/pyanalyze)](https://github.com/quora/pyanalyze) - Extensible static analyzer and type checker.
- [pycharm](https://www.jetbrains.com/pycharm/) - IDE for Professional Developers.
- [pylyzer ![GitHub Repo Stars](https://img.shields.io/github/stars/mtshiba/pylyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/mtshiba/pylyzer)](https://github.com/mtshiba/pylyzer/) - A fast static code analyzer & language server for Python, written in Rust.
- [pyre](https://pyre-check.org/) - Performant type-checker.
- [pyright ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/pyright) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/pyright)](https://github.com/Microsoft/pyright) - Fast type checker meant for large Python source bases. It can run in a “watch” mode and performs fast incremental updates when files are modified.
- [pytype ![GitHub Repo Stars](https://img.shields.io/github/stars/google/pytype) ![GitHub last commit](https://img.shields.io/github/last-commit/google/pytype)](https://github.com/google/pytype) - Tool to check and infer types - without requiring type annotations.

## Dynamic type checkers

- [beartype ![GitHub Repo Stars](https://img.shields.io/github/stars/beartype/beartype) ![GitHub last commit](https://img.shields.io/github/last-commit/beartype/beartype)](https://github.com/beartype/beartype) - Unbearably fast `O(1)` runtime type-checking in pure Python.
- [pydantic ![GitHub Repo Stars](https://img.shields.io/github/stars/samuelcolvin/pydantic) ![GitHub last commit](https://img.shields.io/github/last-commit/samuelcolvin/pydantic)](https://github.com/samuelcolvin/pydantic) - Data parsing using Python type hinting. Supports dataclasses.
- [pytypes ![GitHub Repo Stars](https://img.shields.io/github/stars/Stewori/pytypes) ![GitHub last commit](https://img.shields.io/github/last-commit/Stewori/pytypes)](https://github.com/Stewori/pytypes) - Provides a rich set of utilities for runtime typechecking.
- [strongtyping ![GitHub Repo Stars](https://img.shields.io/github/stars/FelixTheC/strongtyping) ![GitHub last commit](https://img.shields.io/github/last-commit/FelixTheC/strongtyping)](https://github.com/FelixTheC/strongtyping) - Decorator which checks whether the function is called with the correct type of parameters.
- [typedpy ![GitHub Repo Stars](https://img.shields.io/github/stars/loyada/typedpy) ![GitHub last commit](https://img.shields.io/github/last-commit/loyada/typedpy)](https://github.com/loyada/typedpy) - Type-safe, strict Python. Works well with standard Python.
- [typeguard ![GitHub Repo Stars](https://img.shields.io/github/stars/agronholm/typeguard) ![GitHub last commit](https://img.shields.io/github/last-commit/agronholm/typeguard)](https://github.com/agronholm/typeguard) - Another one runtime type checker.
- [typical ![GitHub Repo Stars](https://img.shields.io/github/stars/seandstewart/typical) ![GitHub last commit](https://img.shields.io/github/last-commit/seandstewart/typical)](https://github.com/seandstewart/typical/) - Data parsing and automatic type-coercion using type hinting. Supports dataclasses, standard classes, function signatures, and more.
- [trycast ![GitHub Repo Stars](https://img.shields.io/github/stars/davidfstr/trycast) ![GitHub last commit](https://img.shields.io/github/last-commit/davidfstr/trycast)](https://github.com/davidfstr/trycast) - Parse JSON-like values whose shape is defined by typed dictionaries (TypedDicts) and other standard Python type hints.

## Stub packages

- [asgiref ![GitHub Repo Stars](https://img.shields.io/github/stars/django/asgiref) ![GitHub last commit](https://img.shields.io/github/last-commit/django/asgiref)](https://github.com/django/asgiref) - ASGI specification, provides [asgiref.typing ![GitHub Repo Stars](https://img.shields.io/github/stars/django/asgiref) ![GitHub last commit](https://img.shields.io/github/last-commit/django/asgiref)](https://github.com/django/asgiref/blob/main/asgiref/typing.py) module with type annotations for ASGI servers.
- [boto3-stubs](https://vemel.github.io/boto3_stubs_docs/) - Stubs for [boto3 ![GitHub Repo Stars](https://img.shields.io/github/stars/boto/boto3) ![GitHub last commit](https://img.shields.io/github/last-commit/boto/boto3)](https://github.com/boto/boto3).
- [botostubs ![GitHub Repo Stars](https://img.shields.io/github/stars/jeshan/botostubs) ![GitHub last commit](https://img.shields.io/github/last-commit/jeshan/botostubs)](https://github.com/jeshan/botostubs) - Gives you code assistance for any boto3 API in any IDE.
- [celery-types ![GitHub Repo Stars](https://img.shields.io/github/stars/sbdchd/celery-types) ![GitHub last commit](https://img.shields.io/github/last-commit/sbdchd/celery-types)](https://github.com/sbdchd/celery-types) - Type stubs for [Celery ![GitHub Repo Stars](https://img.shields.io/github/stars/celery/celery) ![GitHub last commit](https://img.shields.io/github/last-commit/celery/celery)](https://github.com/celery/celery) and its related packages [django-celery-results ![GitHub Repo Stars](https://img.shields.io/github/stars/celery/django-celery-results) ![GitHub last commit](https://img.shields.io/github/last-commit/celery/django-celery-results)](https://github.com/celery/django-celery-results), [ampq ![GitHub Repo Stars](https://img.shields.io/github/stars/celery/py-amqp) ![GitHub last commit](https://img.shields.io/github/last-commit/celery/py-amqp)](https://github.com/celery/py-amqp), [kombu ![GitHub Repo Stars](https://img.shields.io/github/stars/celery/kombu) ![GitHub last commit](https://img.shields.io/github/last-commit/celery/kombu)](https://github.com/celery/kombu), [billiard ![GitHub Repo Stars](https://img.shields.io/github/stars/celery/billiard) ![GitHub last commit](https://img.shields.io/github/last-commit/celery/billiard)](https://github.com/celery/billiard), [vine ![GitHub Repo Stars](https://img.shields.io/github/stars/celery/vine) ![GitHub last commit](https://img.shields.io/github/last-commit/celery/vine)](https://github.com/celery/vine) and [ephem ![GitHub Repo Stars](https://img.shields.io/github/stars/brandon-rhodes/pyephem) ![GitHub last commit](https://img.shields.io/github/last-commit/brandon-rhodes/pyephem)](https://github.com/brandon-rhodes/pyephem).
- [data-science-types ![GitHub Repo Stars](https://img.shields.io/github/stars/predictive-analytics-lab/data-science-types) ![GitHub last commit](https://img.shields.io/github/last-commit/predictive-analytics-lab/data-science-types)](https://github.com/predictive-analytics-lab/data-science-types) - Stubs for [numpy ![GitHub Repo Stars](https://img.shields.io/github/stars/numpy/numpy) ![GitHub last commit](https://img.shields.io/github/last-commit/numpy/numpy)](http://github.com/numpy/numpy), [pandas ![GitHub Repo Stars](https://img.shields.io/github/stars/pandas-dev/pandas) ![GitHub last commit](https://img.shields.io/github/last-commit/pandas-dev/pandas)](https://github.com/pandas-dev/pandas), and [matplotlib ![GitHub Repo Stars](https://img.shields.io/github/stars/matplotlib/matplotlib) ![GitHub last commit](https://img.shields.io/github/last-commit/matplotlib/matplotlib)](https://github.com/matplotlib/matplotlib).
- [django-stubs ![GitHub Repo Stars](https://img.shields.io/github/stars/typeddjango/django-stubs) ![GitHub last commit](https://img.shields.io/github/last-commit/typeddjango/django-stubs)](https://github.com/typeddjango/django-stubs) - Stubs for [Django ![GitHub Repo Stars](https://img.shields.io/github/stars/django/django) ![GitHub last commit](https://img.shields.io/github/last-commit/django/django)](https://github.com/django/django).
- [djangorestframework-stubs ![GitHub Repo Stars](https://img.shields.io/github/stars/typeddjango/djangorestframework-stubs) ![GitHub last commit](https://img.shields.io/github/last-commit/typeddjango/djangorestframework-stubs)](https://github.com/typeddjango/djangorestframework-stubs) - Stubs for [DRF ![GitHub Repo Stars](https://img.shields.io/github/stars/encode/django-rest-framework) ![GitHub last commit](https://img.shields.io/github/last-commit/encode/django-rest-framework)](https://github.com/encode/django-rest-framework).
- [grpc-stubs ![GitHub Repo Stars](https://img.shields.io/github/stars/shabbyrobe/grpc-stubs) ![GitHub last commit](https://img.shields.io/github/last-commit/shabbyrobe/grpc-stubs)](https://github.com/shabbyrobe/grpc-stubs) - Stubs for [grpc ![GitHub Repo Stars](https://img.shields.io/github/stars/grpc/grpc) ![GitHub last commit](https://img.shields.io/github/last-commit/grpc/grpc)](https://github.com/grpc/grpc).
- [lxml-stubs ![GitHub Repo Stars](https://img.shields.io/github/stars/lxml/lxml-stubs) ![GitHub last commit](https://img.shields.io/github/last-commit/lxml/lxml-stubs)](https://github.com/lxml/lxml-stubs) - Stubs for [lxml](https://lxml.de).
- [ordered-set-stubs ![GitHub Repo Stars](https://img.shields.io/github/stars/rominf/ordered-set-stubs) ![GitHub last commit](https://img.shields.io/github/last-commit/rominf/ordered-set-stubs)](https://github.com/rominf/ordered-set-stubs) - Stubs for [OrderedSet ![GitHub Repo Stars](https://img.shields.io/github/stars/LuminosoInsight/ordered-set) ![GitHub last commit](https://img.shields.io/github/last-commit/LuminosoInsight/ordered-set)](https://github.com/LuminosoInsight/ordered-set).
- [PyQt5-stubs ![GitHub Repo Stars](https://img.shields.io/github/stars/stlehmann/PyQt5-stubs) ![GitHub last commit](https://img.shields.io/github/last-commit/stlehmann/PyQt5-stubs)](https://github.com/stlehmann/PyQt5-stubs) - Stubs for [PyQt5](https://www.riverbankcomputing.com/software/pyqt/intro).
- [pyspark-stubs ![GitHub Repo Stars](https://img.shields.io/github/stars/zero323/pyspark-stubs) ![GitHub last commit](https://img.shields.io/github/last-commit/zero323/pyspark-stubs)](https://github.com/zero323/pyspark-stubs) - Stubs for [PySpark](https://spark.apache.org/docs/latest/api/python/index.html).
- [python-phonenumbers-stubs ![GitHub Repo Stars](https://img.shields.io/github/stars/AA-Turner/python-phonenumbers-stubs) ![GitHub last commit](https://img.shields.io/github/last-commit/AA-Turner/python-phonenumbers-stubs)](https://github.com/AA-Turner/python-phonenumbers-stubs) - Stubs for [phonenumbers ![GitHub Repo Stars](https://img.shields.io/github/stars/daviddrysdale/python-phonenumbers) ![GitHub last commit](https://img.shields.io/github/last-commit/daviddrysdale/python-phonenumbers)](https://github.com/daviddrysdale/python-phonenumbers).
- [pythonista-stubs ![GitHub Repo Stars](https://img.shields.io/github/stars/hbmartin/pythonista-stubs) ![GitHub last commit](https://img.shields.io/github/last-commit/hbmartin/pythonista-stubs)](https://github.com/hbmartin/pythonista-stubs) - Stubs for [Pythonista](http://omz-software.com/pythonista/docs/ios/).
- [sqlalchemy-stubs ![GitHub Repo Stars](https://img.shields.io/github/stars/dropbox/sqlalchemy-stubs) ![GitHub last commit](https://img.shields.io/github/last-commit/dropbox/sqlalchemy-stubs)](https://github.com/dropbox/sqlalchemy-stubs) - Stubs for [SQLAlchemy ![GitHub Repo Stars](https://img.shields.io/github/stars/sqlalchemy/sqlalchemy) ![GitHub last commit](https://img.shields.io/github/last-commit/sqlalchemy/sqlalchemy)](https://github.com/sqlalchemy/sqlalchemy).
- [sqlalchemy2-stubs](https://docs.sqlalchemy.org/en/14/orm/extensions/mypy.html) - Official stubs and mypy plugin for [SQLAlchemy](https://www.sqlalchemy.org).
- [torchtyping ![GitHub Repo Stars](https://img.shields.io/github/stars/patrick-kidger/torchtyping) ![GitHub last commit](https://img.shields.io/github/last-commit/patrick-kidger/torchtyping)](https://github.com/patrick-kidger/torchtyping) - Enhanced type annotations for [pytorch](https://pytorch.org/).
- [types-aiobotocore](https://vemel.github.io/types_aiobotocore_docs/) - Stubs for [aiobotocore ![GitHub Repo Stars](https://img.shields.io/github/stars/aio-libs/aiobotocore) ![GitHub last commit](https://img.shields.io/github/last-commit/aio-libs/aiobotocore)](https://github.com/aio-libs/aiobotocore).
- [typeshed ![GitHub Repo Stars](https://img.shields.io/github/stars/python/typeshed) ![GitHub last commit](https://img.shields.io/github/last-commit/python/typeshed)](https://github.com/python/typeshed) - Collection of library stubs, with static types.
- [wsgitypes ![GitHub Repo Stars](https://img.shields.io/github/stars/shabbyrobe/wsgitypes) ![GitHub last commit](https://img.shields.io/github/last-commit/shabbyrobe/wsgitypes)](https://github.com/shabbyrobe/wsgitypes) - Typing for WSGI application implementers. These are not stub files, they're interfaces you mark support for to help typecheck WSGI conformance.

## Additional types

- [meiga ![GitHub Repo Stars](https://img.shields.io/github/stars/alice-biometrics/meiga) ![GitHub last commit](https://img.shields.io/github/last-commit/alice-biometrics/meiga)](https://github.com/alice-biometrics/meiga) - Simple, typed and monad-based Result type.
- [option ![GitHub Repo Stars](https://img.shields.io/github/stars/MaT1g3R/option) ![GitHub last commit](https://img.shields.io/github/last-commit/MaT1g3R/option)](https://github.com/MaT1g3R/option) - Rust like Option and Result types.
- [phantom-types ![GitHub Repo Stars](https://img.shields.io/github/stars/antonagestam/phantom-types) ![GitHub last commit](https://img.shields.io/github/last-commit/antonagestam/phantom-types)](https://github.com/antonagestam/phantom-types) - Phantom types.
- [returns ![GitHub Repo Stars](https://img.shields.io/github/stars/dry-python/returns) ![GitHub last commit](https://img.shields.io/github/last-commit/dry-python/returns)](https://github.com/dry-python/returns) - Make your functions return something meaningful, typed, and safe.
- [safetywrap ![GitHub Repo Stars](https://img.shields.io/github/stars/mplanchard/safetywrap) ![GitHub last commit](https://img.shields.io/github/last-commit/mplanchard/safetywrap)](https://github.com/mplanchard/safetywrap) - Fully typesafe, Rust-like Result and Option types.
- [typet ![GitHub Repo Stars](https://img.shields.io/github/stars/contains-io/typet) ![GitHub last commit](https://img.shields.io/github/last-commit/contains-io/typet)](https://github.com/contains-io/typet) - Length-bounded types, dynamic object validation.
- [useful-types ![GitHub Repo Stars](https://img.shields.io/github/stars/hauntsaninja/useful_types) ![GitHub last commit](https://img.shields.io/github/last-commit/hauntsaninja/useful_types)](https://github.com/hauntsaninja/useful_types) - Collection of useful protocols and type aliases.

## Backports and improvements

- [future-typing ![GitHub Repo Stars](https://img.shields.io/github/stars/PrettyWood/future-typing) ![GitHub last commit](https://img.shields.io/github/last-commit/PrettyWood/future-typing)](https://github.com/PrettyWood/future-typing) - Backport for type hinting generics in standard collections and union types as `X | Y`.
- [typed-ast ![GitHub Repo Stars](https://img.shields.io/github/stars/python/typed_ast) ![GitHub last commit](https://img.shields.io/github/last-commit/python/typed_ast)](https://github.com/python/typed_ast) - Modified fork of CPython's ast module that parses `# type:` comments.
- [typing-extensions ![GitHub Repo Stars](https://img.shields.io/github/stars/python/typing) ![GitHub last commit](https://img.shields.io/github/last-commit/python/typing)](https://github.com/python/typing/tree/master/typing_extensions) - Backported and experimental type hints.
- [typing-utils ![GitHub Repo Stars](https://img.shields.io/github/stars/bojiang/typing_utils) ![GitHub last commit](https://img.shields.io/github/last-commit/bojiang/typing_utils)](https://github.com/bojiang/typing_utils) - Backport 3.8+ runtime typing utils(for eg: get_origin) & add issubtype & more.
- [typingplus ![GitHub Repo Stars](https://img.shields.io/github/stars/contains-io/typingplus) ![GitHub last commit](https://img.shields.io/github/last-commit/contains-io/typingplus)](https://github.com/contains-io/typingplus/) - Backport support, dynamic is_instance and cast for abstract types.

## Tools

### Linters

- [flake8-annotations-complexity ![GitHub Repo Stars](https://img.shields.io/github/stars/best-doctor/flake8-annotations-complexity) ![GitHub last commit](https://img.shields.io/github/last-commit/best-doctor/flake8-annotations-complexity)](https://github.com/best-doctor/flake8-annotations-complexity) - Plugin for flake8 to validate annotations complexity.
- [flake8-annotations ![GitHub Repo Stars](https://img.shields.io/github/stars/sco1/flake8-annotations) ![GitHub last commit](https://img.shields.io/github/last-commit/sco1/flake8-annotations)](https://github.com/sco1/flake8-annotations) - Plugin for flake8 to check for presence of type annotations in function definitions.
- [flake8-pyi ![GitHub Repo Stars](https://img.shields.io/github/stars/ambv/flake8-pyi) ![GitHub last commit](https://img.shields.io/github/last-commit/ambv/flake8-pyi)](https://github.com/ambv/flake8-pyi) - Plugin for Flake8 that provides specializations for type hinting stub files.
- [flake8-type-checking ![GitHub Repo Stars](https://img.shields.io/github/stars/snok/flake8-type-checking) ![GitHub last commit](https://img.shields.io/github/last-commit/snok/flake8-type-checking)](https://github.com/snok/flake8-type-checking) - Plugin to help you guard any type-annotation-only import correctly.
- [flake8-typing-imports ![GitHub Repo Stars](https://img.shields.io/github/stars/asottile/flake8-typing-imports) ![GitHub last commit](https://img.shields.io/github/last-commit/asottile/flake8-typing-imports)](https://github.com/asottile/flake8-typing-imports) - Plugin which checks that typing imports are properly guarded.
- [flake8-typing-only-imports ![GitHub Repo Stars](https://img.shields.io/github/stars/sondrelg/flake8-typing-only-imports) ![GitHub last commit](https://img.shields.io/github/last-commit/sondrelg/flake8-typing-only-imports)](https://github.com/sondrelg/flake8-typing-only-imports) - flake8 plugin that helps identify which imports to put into type-checking blocks, and how to adjust your type annotations once imports are moved.
- [flake8-type-ignore](https://gitlab.com/jonafato/flake8-type-ignore/) - flake8 plugin to disallow type: ignore comments in your typed Python code.
- [wemake-python-styleguide ![GitHub Repo Stars](https://img.shields.io/github/stars/wemake-services/wemake-python-styleguide) ![GitHub last commit](https://img.shields.io/github/last-commit/wemake-services/wemake-python-styleguide)](https://github.com/wemake-services/wemake-python-styleguide) - The strictest and most opinionated Python linter ever.

### Testing

- [mypy-test ![GitHub Repo Stars](https://img.shields.io/github/stars/orsinium-labs/mypy-test) ![GitHub last commit](https://img.shields.io/github/last-commit/orsinium-labs/mypy-test)](https://github.com/orsinium-labs/mypy-test) - Test mypy plugins, stubs, custom types.
- [pytest-mypy-plugins ![GitHub Repo Stars](https://img.shields.io/github/stars/typeddjango/pytest-mypy-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/typeddjango/pytest-mypy-plugins)](https://github.com/typeddjango/pytest-mypy-plugins) - Pytest plugin for testing mypy types, stubs, and plugins.
- [pytest-mypy-testing ![GitHub Repo Stars](https://img.shields.io/github/stars/davidfritzsche/pytest-mypy-testing) ![GitHub last commit](https://img.shields.io/github/last-commit/davidfritzsche/pytest-mypy-testing)](https://github.com/davidfritzsche/pytest-mypy-testing) - Pytest plugin to test mypy static type analysis.
- [pytest-mypy ![GitHub Repo Stars](https://img.shields.io/github/stars/dbader/pytest-mypy) ![GitHub last commit](https://img.shields.io/github/last-commit/dbader/pytest-mypy)](https://github.com/dbader/pytest-mypy) - Mypy static type checker plugin for Pytest.

### Working with types

- [com2ann ![GitHub Repo Stars](https://img.shields.io/github/stars/ilevkivskyi/com2ann) ![GitHub last commit](https://img.shields.io/github/last-commit/ilevkivskyi/com2ann)](https://github.com/ilevkivskyi/com2ann) - Tool for translation of type comments to type annotations.
- [merge-pyi ![GitHub Repo Stars](https://img.shields.io/github/stars/google/pytype) ![GitHub last commit](https://img.shields.io/github/last-commit/google/pytype)](https://github.com/google/pytype/tree/master/pytype/tools/merge_pyi) - Part of pytype toolchain, applies stub files onto source code.
- [mypy-baseline ![GitHub Repo Stars](https://img.shields.io/github/stars/orsinium-labs/mypy-baseline) ![GitHub last commit](https://img.shields.io/github/last-commit/orsinium-labs/mypy-baseline)](https://github.com/orsinium-labs/mypy-baseline) - Integrate mypy with existing codebase. A CLI tool that filters out existing type errors and reports only new ones.
- [mypy-protobuf ![GitHub Repo Stars](https://img.shields.io/github/stars/dropbox/mypy-protobuf) ![GitHub last commit](https://img.shields.io/github/last-commit/dropbox/mypy-protobuf)](https://github.com/dropbox/mypy-protobuf) - Tool to generate mypy stubs from protobufs.
- [mypy-silent ![GitHub Repo Stars](https://img.shields.io/github/stars/whtsky/mypy-silent) ![GitHub last commit](https://img.shields.io/github/last-commit/whtsky/mypy-silent)](https://github.com/whtsky/mypy-silent/) - Silence mypy by adding or removing code comments.
- [mypyc ![GitHub Repo Stars](https://img.shields.io/github/stars/python/mypy) ![GitHub last commit](https://img.shields.io/github/last-commit/python/mypy)](https://github.com/python/mypy/tree/master/mypyc) - Compiles mypy-annotated, statically typed Python modules into CPython C extensions.
- [pep585-upgrade ![GitHub Repo Stars](https://img.shields.io/github/stars/snok/pep585-upgrade) ![GitHub last commit](https://img.shields.io/github/last-commit/snok/pep585-upgrade)](https://github.com/snok/pep585-upgrade) - Pre-commit hook configured to automatically upgrade your type hints to the new native types implemented in PEP 585.
- [retype ![GitHub Repo Stars](https://img.shields.io/github/stars/ambv/retype) ![GitHub last commit](https://img.shields.io/github/last-commit/ambv/retype)](https://github.com/ambv/retype) - Another tool to apply stubs to code.
- [typeforce ![GitHub Repo Stars](https://img.shields.io/github/stars/orsinium-labs/typeforce) ![GitHub last commit](https://img.shields.io/github/last-commit/orsinium-labs/typeforce)](https://github.com/orsinium-labs/typeforce) - CLI tool that enriches your Python environment with type annotations, empowering mypy.
- [typesplainer ![GitHub Repo Stars](https://img.shields.io/github/stars/wasi-master/typesplainer) ![GitHub last commit](https://img.shields.io/github/last-commit/wasi-master/typesplainer)](https://github.com/wasi-master/typesplainer) - A Python type explainer.
- [typing-inspect ![GitHub Repo Stars](https://img.shields.io/github/stars/ilevkivskyi/typing_inspect) ![GitHub last commit](https://img.shields.io/github/last-commit/ilevkivskyi/typing_inspect)](https://github.com/ilevkivskyi/typing_inspect) - The typing_inspect module defines experimental API for runtime inspection of types defined in the `typing` module.
- [typing-json](https://pypi.org/project/typing-json/) - Lib for working with typed objects and JSON.

### Helper tools to add annotations to existing code

- [autotyping ![GitHub Repo Stars](https://img.shields.io/github/stars/JelleZijlstra/autotyping) ![GitHub last commit](https://img.shields.io/github/last-commit/JelleZijlstra/autotyping)](https://github.com/JelleZijlstra/autotyping) - Automatically add simple return type annotations for functions (bool, None, Optional).
- [infer-types ![GitHub Repo Stars](https://img.shields.io/github/stars/orsinium-labs/infer-types) ![GitHub last commit](https://img.shields.io/github/last-commit/orsinium-labs/infer-types)](https://github.com/orsinium-labs/infer-types) - CLI tool to automatically infer and add type annotations into Python code.
- [jsonschema-gentypes ![GitHub Repo Stars](https://img.shields.io/github/stars/camptocamp/jsonschema-gentypes) ![GitHub last commit](https://img.shields.io/github/last-commit/camptocamp/jsonschema-gentypes)](https://github.com/camptocamp/jsonschema-gentypes) - Generate Python types based on TypedDict from a JSON Schema.
- [monkeytype ![GitHub Repo Stars](https://img.shields.io/github/stars/instagram/MonkeyType) ![GitHub last commit](https://img.shields.io/github/last-commit/instagram/MonkeyType)](https://github.com/instagram/MonkeyType) - Collects runtime types of function arguments and return values, and can automatically generate stub files or even add draft type annotations directly to your code based on the types collected at runtime.
- [pyannotate ![GitHub Repo Stars](https://img.shields.io/github/stars/dropbox/pyannotate) ![GitHub last commit](https://img.shields.io/github/last-commit/dropbox/pyannotate)](https://github.com/dropbox/pyannotate) - Insert annotations into your source code based on call arguments and return types observed at runtime.
- [PyTypes ![GitHub Repo Stars](https://img.shields.io/github/stars/pvs-hd-tea/PyTypes) ![GitHub last commit](https://img.shields.io/github/last-commit/pvs-hd-tea/PyTypes)](https://github.com/pvs-hd-tea/PyTypes) - Infer Types by Python Tracing.
- [pyre infer ![GitHub Repo Stars](https://img.shields.io/github/stars/facebook/pyre-check) ![GitHub last commit](https://img.shields.io/github/last-commit/facebook/pyre-check)](https://github.com/facebook/pyre-check) - Pyre has a powerful feature for migrating codebases to a typed format. The [infer](https://pyre-check.org/docs/pysa-coverage/) command-line option ingests a file or directory, makes educated guesses about the types used, and applies the annotations to the files.
- [pytest-annotate ![GitHub Repo Stars](https://img.shields.io/github/stars/kensho-technologies/pytest-annotate) ![GitHub last commit](https://img.shields.io/github/last-commit/kensho-technologies/pytest-annotate)](https://github.com/kensho-technologies/pytest-annotate) - Pyannotate plugin for pytest.
- [pytest-monkeytype ![GitHub Repo Stars](https://img.shields.io/github/stars/mariusvniekerk/pytest-monkeytype) ![GitHub last commit](https://img.shields.io/github/last-commit/mariusvniekerk/pytest-monkeytype)](https://github.com/mariusvniekerk/pytest-monkeytype) - MonkeyType plugin for pytest.
- [pytype annotate-ast ![GitHub Repo Stars](https://img.shields.io/github/stars/google/pytype) ![GitHub last commit](https://img.shields.io/github/last-commit/google/pytype)](https://github.com/google/pytype/tree/master/pytype/tools/annotate_ast) - A work-in-progress tool to annotate the nodes of an AST with their Python types.
- [type4py ![GitHub Repo Stars](https://img.shields.io/github/stars/saltudelft/type4py) ![GitHub last commit](https://img.shields.io/github/last-commit/saltudelft/type4py)](https://github.com/saltudelft/type4py) - Deep Similarity Learning-Based Type Inference.
- [typilus ![GitHub Repo Stars](https://img.shields.io/github/stars/typilus/typilus) ![GitHub last commit](https://img.shields.io/github/last-commit/typilus/typilus)](https://github.com/typilus/typilus) - A deep learning algorithm for predicting types in Python. Also available as a [GitHub action ![GitHub Repo Stars](https://img.shields.io/github/stars/typilus/typilus-action) ![GitHub last commit](https://img.shields.io/github/last-commit/typilus/typilus-action)](https://github.com/typilus/typilus-action)
- [auto-optional ![GitHub Repo Stars](https://img.shields.io/github/stars/Luttik/auto-optional) ![GitHub last commit](https://img.shields.io/github/last-commit/Luttik/auto-optional)](https://github.com/Luttik/auto-optional) - Makes typed arguments Optional when the default argument is `None`.

### Mypy plugins

- [kubernetes-typed ![GitHub Repo Stars](https://img.shields.io/github/stars/gordonbondon/kubernetes-typed) ![GitHub last commit](https://img.shields.io/github/last-commit/gordonbondon/kubernetes-typed)](https://github.com/gordonbondon/kubernetes-typed) - Plugin for kubernetes [CRD](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/) type checking.
- [loguru-mypy ![GitHub Repo Stars](https://img.shields.io/github/stars/kornicameister/loguru-mypy) ![GitHub last commit](https://img.shields.io/github/last-commit/kornicameister/loguru-mypy)](https://github.com/kornicameister/loguru-mypy) - Plugin for [loguru ![GitHub Repo Stars](https://img.shields.io/github/stars/Delgan/loguru) ![GitHub last commit](https://img.shields.io/github/last-commit/Delgan/loguru)](https://github.com/Delgan/loguru) support.
- [mypy-zope ![GitHub Repo Stars](https://img.shields.io/github/stars/Shoobx/mypy-zope) ![GitHub last commit](https://img.shields.io/github/last-commit/Shoobx/mypy-zope)](https://github.com/Shoobx/mypy-zope) - Plugin for [zope.interface](https://zopeinterface.readthedocs.io/en/latest/) support.
- [mypy/plugins ![GitHub Repo Stars](https://img.shields.io/github/stars/python/mypy) ![GitHub last commit](https://img.shields.io/github/last-commit/python/mypy)](https://github.com/python/mypy/tree/master/mypy/plugins) - Plugins already integrated into mypy.
- [numpy](https://numpy.org/devdocs/reference/typing.html) - Plugin for [NumPy](https://numpy.org) support.
- [pynamodb-mypy ![GitHub Repo Stars](https://img.shields.io/github/stars/pynamodb/pynamodb-mypy) ![GitHub last commit](https://img.shields.io/github/last-commit/pynamodb/pynamodb-mypy)](https://github.com/pynamodb/pynamodb-mypy) - Plugin for [PynamoDB ![GitHub Repo Stars](https://img.shields.io/github/stars/pynamodb/PynamoDB) ![GitHub last commit](https://img.shields.io/github/last-commit/pynamodb/PynamoDB)](https://github.com/pynamodb/PynamoDB) support.

## Integrations

- [emacs-flycheck-mypy ![GitHub Repo Stars](https://img.shields.io/github/stars/lbolla/emacs-flycheck-mypy) ![GitHub last commit](https://img.shields.io/github/last-commit/lbolla/emacs-flycheck-mypy)](https://github.com/lbolla/emacs-flycheck-mypy) - Mypy integration for Emacs.
- [linter-mypy](https://atom.io/packages/linter-mypy) - Mypy integration for Atom.
- [mypy-playground ![GitHub Repo Stars](https://img.shields.io/github/stars/ymyzk/mypy-playground) ![GitHub last commit](https://img.shields.io/github/last-commit/ymyzk/mypy-playground)](https://github.com/ymyzk/mypy-playground) - Online playground for mypy.
- [mypy-pycharm-plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/dropbox/mypy-PyCharm-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/dropbox/mypy-PyCharm-plugin)](https://github.com/dropbox/mypy-PyCharm-plugin) - Mypy integration for PyCharm.
- [pylance ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/pylance-release) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/pylance-release)](https://github.com/microsoft/pylance-release) - PyRight integration for VSCode.
- [vim-mypy ![GitHub Repo Stars](https://img.shields.io/github/stars/Integralist/vim-mypy) ![GitHub last commit](https://img.shields.io/github/last-commit/Integralist/vim-mypy)](https://github.com/Integralist/vim-mypy) - Mypy integration for Vim.
- [nbQA ![GitHub Repo Stars](https://img.shields.io/github/stars/nbQA-dev/nbQA) ![GitHub last commit](https://img.shields.io/github/last-commit/nbQA-dev/nbQA)](https://github.com/nbQA-dev/nbQA) - Run type checkers (e.g. Mypy) on Jupyter Notebooks.

## Articles

### PEPs

- [PEP-3107](https://www.python.org/dev/peps/pep-3107) - Function Annotations.
- [PEP-482](https://www.python.org/dev/peps/pep-0482/) - Literature Overview for Type Hints.
- [PEP-483](https://www.python.org/dev/peps/pep-0483/) - The Theory of Type Hints.
- [PEP-484](https://www.python.org/dev/peps/pep-0484/) - Type Hints.
- [PEP-526](https://www.python.org/dev/peps/pep-0526/) - Syntax for Variable Annotations.
- [PEP-544](https://www.python.org/dev/peps/pep-0544/) - Protocols: Structural subtyping (static duck typing).
- [PEP-557](https://www.python.org/dev/peps/pep-0557/) - Data Classes.
- [PEP-560](https://www.python.org/dev/peps/pep-0560/) - Core support for typing module and generic types.
- [PEP-561](https://www.python.org/dev/peps/pep-0561/) - Distributing and Packaging Type Information.
- [PEP-563](https://www.python.org/dev/peps/pep-0563/) - Postponed Evaluation of Annotations.
- [PEP-585](https://www.python.org/dev/peps/pep-0585/) - Type Hinting Generics In Standard Collections.
- [PEP-586](https://www.python.org/dev/peps/pep-0586/) - Literal Types.
- [PEP-589](https://www.python.org/dev/peps/pep-0589/) - TypedDict: Type Hints for Dictionaries with a Fixed Set of Keys.
- [PEP-591](https://www.python.org/dev/peps/pep-0591/) - Adding a final qualifier to typing.
- [PEP-593](https://www.python.org/dev/peps/pep-0593/) - Flexible function and variable annotations.
- [PEP-604](https://www.python.org/dev/peps/pep-0604/) - Complementary syntax for Union[].
- [PEP-612](https://www.python.org/dev/peps/pep-0612/) - Parameter Specification Variables.
- [PEP-613](https://www.python.org/dev/peps/pep-0613/) - Explicit Type Aliases.

### Third-party articles

- [1-minute guide to real constants in Python](https://sobolevn.me/2018/07/real-python-contants) - Full tutorial about `Final` constants and inheritance.
- [Simple dependent types in Python](https://sobolevn.me/2019/01/simple-dependent-types-in-python) - Full tutorial about `Literal` types.
- [Testing mypy stubs, plugins, and types](https://sobolevn.me/2019/08/testing-mypy-types) - Full tutorial about testing mypy types.
- [Our journey to type checking 4 million lines of Python](https://dropbox.tech/application/our-journey-to-type-checking-4-million-lines-of-python) - Dropbox has been one of the first companies to adopt Python static type checking at this scale.
- [PyTest MonkeyType Introduction](https://dev.to/ldrscke/type-annotate-an-existing-python-django-codebase-with-monkeytype-254i) - Type Annotate an existing Python Django Codebase with MonkeyType.
- [The state of type hints in Python](https://bernat.tech/posts/the-state-of-type-hints-in-python/) - As of May 2018.
- [Type hints cheat sheet](https://mypy.readthedocs.io/en/latest/cheat_sheet_py3.html) - Cheat sheet on writing type annotations by MyPy team.
- [Typechecking Django and DRF](https://sobolevn.me/2019/08/typechecking-django-and-drf) - Full tutorial about type-checking django.
- [Type Check Your Django Application](https://kracekumar.com/post/type_check_your_django_app/) - An article based on two recent talks on adding type checks to Django.
- [typing](https://docs.python.org/3/library/typing.html) - Official Python documentation for `typing` module.
- [Python-typing-koans ![GitHub Repo Stars](https://img.shields.io/github/stars/kracekumar/python-typing-koans) ![GitHub last commit](https://img.shields.io/github/last-commit/kracekumar/python-typing-koans)](https://github.com/kracekumar/python-typing-koans/) - A set of examples to learn optional static typing in Python.
- [Python Type Checking (Guide)](https://realpython.com/python-type-checking/) - In this guide, you will get a look into Python type checking.
- [Adding type hints to urllib3](https://sethmlarson.dev/blog/2021-10-18/tests-arent-enough-case-study-after-adding-types-to-urllib3) - Tests are not enough: Case study adding type hints to urllib3.
- [Adam Johnsons Blog](https://adamj.eu/tech/tag/mypy/) - Adam Johnson blogs about typing practices.
- [ParamSpec Guide](https://sobolevn.me/2021/12/paramspec-guide) - Newly released feature in `PEP612` allows you do a lot of advanced typing things with functions and their signatures.
- [Static Typing Python Decorators](https://rednafi.github.io/reflections/static-typing-python-decorators.html) - Accurately static typing decorators in Python is an icky business. The wrapper function obfuscates type information required to statically determine the types of the parameters and the return values of the wrapped function.

## Communities

- [python/typing](https://gitter.im/python/typing) - Official typing gitter chat.
- [TypedDjango](https://gitter.im/mypy-django/Lobby) - Official organisation gitter chat.
- [PythonRu#typing](https://python-ru.slack.com) - Russian slack chat (invites are [here](https://slack.python.ru/)) about types.

## Related

- [awesome-python ![GitHub Repo Stars](https://img.shields.io/github/stars/vinta/awesome-python) ![GitHub last commit](https://img.shields.io/github/last-commit/vinta/awesome-python)](https://github.com/vinta/awesome-python) - Curated list of awesome Python frameworks, libraries, software and resources.
- [python-typecheckers ![GitHub Repo Stars](https://img.shields.io/github/stars/ethanhs/python-typecheckers) ![GitHub last commit](https://img.shields.io/github/last-commit/ethanhs/python-typecheckers)](https://github.com/ethanhs/python-typecheckers) - List of Python type checkers: static and runtime.
