# [Awesome Python](https://awesome-python.com/)

The definitive list that answers "I want to do X in Python, which tool should I use?" - An opinionated guide to the best Python frameworks, libraries, tools, and projects.

**Visit the [website](https://awesome-python.com/) to search and filter projects more easily.**

## **Sponsors**

> The **#10 most-starred repo on GitHub**. Put your product in front of Python developers. [Become a sponsor](SPONSORSHIP.md).

## Categories

**AI & ML**

- [AI and Agents](#ai-and-agents)
- [Deep Learning](#deep-learning)
- [Machine Learning](#machine-learning)
- [Natural Language Processing](#natural-language-processing)
- [Computer Vision](#computer-vision)
- [Recommender Systems](#recommender-systems)

**Web Development**

- [Web Frameworks](#web-frameworks)
- [Web APIs](#web-apis)
- [Web Servers](#web-servers)
- [WebSocket](#websocket)
- [Template Engines](#template-engines)
- [Web Asset Management](#web-asset-management)
- [Authentication](#authentication)
- [Admin Panels](#admin-panels)
- [CMS](#cms)
- [ERP](#erp)
- [Static Site Generators](#static-site-generators)

**HTTP & Scraping**

- [HTTP Clients](#http-clients)
- [Web Scraping](#web-scraping)
- [Email](#email)

**Database & Storage**

- [ORM](#orm)
- [Database Drivers](#database-drivers)
- [Database](#database)
- [Caching](#caching)
- [Search](#search)
- [Serialization](#serialization)

**Data & Science**

- [Data Analysis](#data-analysis)
- [Data Ingestion / ETL](#data-ingestion--etl)
- [Data Validation](#data-validation)
- [Data Visualization](#data-visualization)
- [Geolocation](#geolocation)
- [Science](#science)
- [Quantum Computing](#quantum-computing)

**Developer Tools**

- [Algorithms and Design Patterns](#algorithms-and-design-patterns)
- [Interactive Interpreter](#interactive-interpreter)
- [Code Analysis](#code-analysis)
- [Testing](#testing)
- [Debugging Tools](#debugging-tools)
- [Build Tools](#build-tools)
- [Documentation](#documentation)

**DevOps**

- [DevOps Tools](#devops-tools)
- [Distributed Computing](#distributed-computing)
- [Task Queues](#task-queues)
- [Messaging](#messaging)
- [Job Schedulers](#job-schedulers)
- [Logging](#logging)
- [Network Virtualization](#network-virtualization)

**CLI & GUI**

- [CLI Development](#cli-development)
- [CLI Tools](#cli-tools)
- [GUI Development](#gui-development)

**Text & Documents**

- [Text Processing](#text-processing)
- [HTML Manipulation](#html-manipulation)
- [File Format Processing](#file-format-processing)
- [File Manipulation](#file-manipulation)

**Media**

- [Image Processing](#image-processing)
- [Audio & Video Processing](#audio--video-processing)
- [Game Development](#game-development)

**Python Language**

- [Implementations](#implementations)
- [Built-in Classes Enhancement](#built-in-classes-enhancement)
- [Functional Programming](#functional-programming)
- [Asynchronous Programming](#asynchronous-programming)
- [Date and Time](#date-and-time)

**Python Toolchain**

- [Environment Management](#environment-management)
- [Package Management](#package-management)
- [Package Repositories](#package-repositories)
- [Distribution](#distribution)
- [Configuration Files](#configuration-files)

**Security**

- [Cryptography](#cryptography)
- [Penetration Testing](#penetration-testing)
- [Supply Chain Security](#supply-chain-security)
- [Web Security](#web-security)

**Other**

- [Hardware](#hardware)
- [Microsoft Windows](#microsoft-windows)
- [Miscellaneous](#miscellaneous)

## Projects

**AI & ML**

### AI and Agents

_Libraries for building AI applications, LLM integrations, and autonomous agents._

- Agent Skills
  - [django-ai-plugins ![GitHub Repo Stars](https://img.shields.io/github/stars/vintasoftware/django-ai-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/vintasoftware/django-ai-plugins)](https://github.com/vintasoftware/django-ai-plugins) - Django backend agent skills for Django, DRF, Celery, and Django-specific code review.
  - [sentry-skills ![GitHub Repo Stars](https://img.shields.io/github/stars/getsentry/skills) ![GitHub last commit](https://img.shields.io/github/last-commit/getsentry/skills)](https://github.com/getsentry/skills) - Python-focused engineering skills for code review, debugging, and backend workflows.
  - [trailofbits-skills ![GitHub Repo Stars](https://img.shields.io/github/stars/trailofbits/skills) ![GitHub last commit](https://img.shields.io/github/last-commit/trailofbits/skills)](https://github.com/trailofbits/skills) - Python-friendly security skills for auditing, testing, and safer backend development.
- Orchestration
  - [langchain ![GitHub Repo Stars](https://img.shields.io/github/stars/langchain-ai/langchain) ![GitHub last commit](https://img.shields.io/github/last-commit/langchain-ai/langchain)](https://github.com/langchain-ai/langchain) - Building applications with LLMs through composability.
  - [langgraph ![GitHub Repo Stars](https://img.shields.io/github/stars/langchain-ai/langgraph) ![GitHub last commit](https://img.shields.io/github/last-commit/langchain-ai/langgraph)](https://github.com/langchain-ai/langgraph) - Low-level orchestration framework for building stateful, long-running LLM agents.
  - [crewai ![GitHub Repo Stars](https://img.shields.io/github/stars/crewAIInc/crewAI) ![GitHub last commit](https://img.shields.io/github/last-commit/crewAIInc/crewAI)](https://github.com/crewAIInc/crewAI) - A framework for orchestrating role-playing autonomous AI agents for collaborative task solving.
  - [pydantic-ai ![GitHub Repo Stars](https://img.shields.io/github/stars/pydantic/pydantic-ai) ![GitHub last commit](https://img.shields.io/github/last-commit/pydantic/pydantic-ai)](https://github.com/pydantic/pydantic-ai) - A Python agent framework for building generative AI applications with structured schemas.
- Vendor Agent SDKs
  - [openai-agents ![GitHub Repo Stars](https://img.shields.io/github/stars/openai/openai-agents-python) ![GitHub last commit](https://img.shields.io/github/last-commit/openai/openai-agents-python)](https://github.com/openai/openai-agents-python) - OpenAI's framework for building and managing AI agents.
  - [claude-agent-sdk ![GitHub Repo Stars](https://img.shields.io/github/stars/anthropics/claude-agent-sdk-python) ![GitHub last commit](https://img.shields.io/github/last-commit/anthropics/claude-agent-sdk-python)](https://github.com/anthropics/claude-agent-sdk-python) - Anthropic's Python SDK for building AI agents on Claude Code's harness — custom tools, in-process MCP servers, hooks.
- Personal Assistants
  - [hermes-agent ![GitHub Repo Stars](https://img.shields.io/github/stars/nousresearch/hermes-agent) ![GitHub last commit](https://img.shields.io/github/last-commit/nousresearch/hermes-agent)](https://github.com/nousresearch/hermes-agent) - An adaptive personal AI assistant that grows with you.
- Prompt Optimization
  - [dspy ![GitHub Repo Stars](https://img.shields.io/github/stars/stanfordnlp/dspy) ![GitHub last commit](https://img.shields.io/github/last-commit/stanfordnlp/dspy)](https://github.com/stanfordnlp/dspy) - A framework for programming, not prompting, language models.
- Data Layer
  - [instructor ![GitHub Repo Stars](https://img.shields.io/github/stars/567-labs/instructor) ![GitHub last commit](https://img.shields.io/github/last-commit/567-labs/instructor)](https://github.com/567-labs/instructor) - A library for extracting structured data from LLMs, powered by Pydantic.
  - [llama-index ![GitHub Repo Stars](https://img.shields.io/github/stars/run-llama/llama_index) ![GitHub last commit](https://img.shields.io/github/last-commit/run-llama/llama_index)](https://github.com/run-llama/llama_index) - A data framework for your LLM application.
  - [mem0 ![GitHub Repo Stars](https://img.shields.io/github/stars/mem0ai/mem0) ![GitHub last commit](https://img.shields.io/github/last-commit/mem0ai/mem0)](https://github.com/mem0ai/mem0) - An intelligent memory layer for AI agents enabling personalized interactions.
- Pre-trained Models
  - [transformers ![GitHub Repo Stars](https://img.shields.io/github/stars/huggingface/transformers) ![GitHub last commit](https://img.shields.io/github/last-commit/huggingface/transformers)](https://github.com/huggingface/transformers) - A framework that lets you easily use pre-trained transformer models for NLP, vision, and audio tasks.
- LLM Inference and Serving
  - [sglang ![GitHub Repo Stars](https://img.shields.io/github/stars/sgl-project/sglang) ![GitHub last commit](https://img.shields.io/github/last-commit/sgl-project/sglang)](https://github.com/sgl-project/sglang) - A high-performance serving framework for large language models and multimodal models.
  - [vllm ![GitHub Repo Stars](https://img.shields.io/github/stars/vllm-project/vllm) ![GitHub last commit](https://img.shields.io/github/last-commit/vllm-project/vllm)](https://github.com/vllm-project/vllm) - A high-throughput and memory-efficient inference and serving engine for LLMs.
  - [mlx-lm ![GitHub Repo Stars](https://img.shields.io/github/stars/ml-explore/mlx-lm) ![GitHub last commit](https://img.shields.io/github/last-commit/ml-explore/mlx-lm)](https://github.com/ml-explore/mlx-lm) - Run and fine-tune large language models on Apple Silicon with MLX.
- LLM Gateways
  - [LiteLLM ![GitHub Repo Stars](https://img.shields.io/github/stars/BerriAI/litellm) ![GitHub last commit](https://img.shields.io/github/last-commit/BerriAI/litellm)](https://github.com/BerriAI/litellm) - Call 100+ LLMs using OpenAI format.
- Image and Video Generation
  - [diffusers ![GitHub Repo Stars](https://img.shields.io/github/stars/huggingface/diffusers) ![GitHub last commit](https://img.shields.io/github/last-commit/huggingface/diffusers)](https://github.com/huggingface/diffusers) - A library that provides pre-trained diffusion models for generating and editing images, audio, and video.
- Fine-tuning
  - [unsloth ![GitHub Repo Stars](https://img.shields.io/github/stars/unslothai/unsloth) ![GitHub last commit](https://img.shields.io/github/last-commit/unslothai/unsloth)](https://github.com/unslothai/unsloth) - A library for faster LLM fine-tuning and training with reduced memory usage.
- Speech
  - [openai-whisper ![GitHub Repo Stars](https://img.shields.io/github/stars/openai/whisper) ![GitHub last commit](https://img.shields.io/github/last-commit/openai/whisper)](https://github.com/openai/whisper) - A general-purpose automatic speech recognition model trained on 680k hours of multilingual and multitask supervised data.
  - [funasr ![GitHub Repo Stars](https://img.shields.io/github/stars/modelscope/FunASR) ![GitHub last commit](https://img.shields.io/github/last-commit/modelscope/FunASR)](https://github.com/modelscope/FunASR) - Industrial-grade speech recognition toolkit with 170x realtime speed, 50+ languages, speaker diarization, and emotion detection.
  - [vibevoice ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/VibeVoice) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/VibeVoice)](https://github.com/microsoft/VibeVoice) - A family of open-source voice AI models from Microsoft for text-to-speech and long-form speech recognition.
  - [gTTS ![GitHub Repo Stars](https://img.shields.io/github/stars/pndurette/gTTS) ![GitHub last commit](https://img.shields.io/github/last-commit/pndurette/gTTS)](https://github.com/pndurette/gTTS) - Python library and CLI tool for converting text to speech using Google Translate TTS.
  - [kittentts ![GitHub Repo Stars](https://img.shields.io/github/stars/KittenML/KittenTTS) ![GitHub last commit](https://img.shields.io/github/last-commit/KittenML/KittenTTS)](https://github.com/KittenML/KittenTTS) - Lightweight ONNX text-to-speech library with small CPU-friendly models.

### Deep Learning

_Frameworks for Neural Networks and Deep Learning. Also see [awesome-deep-learning ![GitHub Repo Stars](https://img.shields.io/github/stars/ChristosChristofidis/awesome-deep-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/ChristosChristofidis/awesome-deep-learning)](https://github.com/ChristosChristofidis/awesome-deep-learning)._

- Frameworks
  - [pytorch ![GitHub Repo Stars](https://img.shields.io/github/stars/pytorch/pytorch) ![GitHub last commit](https://img.shields.io/github/last-commit/pytorch/pytorch)](https://github.com/pytorch/pytorch) - Tensors and Dynamic neural networks in Python with strong GPU acceleration.
  - [tensorflow ![GitHub Repo Stars](https://img.shields.io/github/stars/tensorflow/tensorflow) ![GitHub last commit](https://img.shields.io/github/last-commit/tensorflow/tensorflow)](https://github.com/tensorflow/tensorflow) - The most popular Deep Learning framework created by Google.
  - [keras ![GitHub Repo Stars](https://img.shields.io/github/stars/keras-team/keras) ![GitHub last commit](https://img.shields.io/github/last-commit/keras-team/keras)](https://github.com/keras-team/keras) - A high-level deep learning library with support for JAX, TensorFlow, and PyTorch backends.
  - [jax ![GitHub Repo Stars](https://img.shields.io/github/stars/jax-ml/jax) ![GitHub last commit](https://img.shields.io/github/last-commit/jax-ml/jax)](https://github.com/jax-ml/jax) - A library for high-performance numerical computing with automatic differentiation and JIT compilation.
  - [pytorch-lightning ![GitHub Repo Stars](https://img.shields.io/github/stars/Lightning-AI/pytorch-lightning) ![GitHub last commit](https://img.shields.io/github/last-commit/Lightning-AI/pytorch-lightning)](https://github.com/Lightning-AI/pytorch-lightning) - Deep learning framework to train, deploy, and ship AI products Lightning fast.
- Reinforcement Learning
  - [gymnasium ![GitHub Repo Stars](https://img.shields.io/github/stars/Farama-Foundation/Gymnasium) ![GitHub last commit](https://img.shields.io/github/last-commit/Farama-Foundation/Gymnasium)](https://github.com/Farama-Foundation/Gymnasium) - A standard API for reinforcement learning environments with popular reference environments ([gym ![GitHub Repo Stars](https://img.shields.io/github/stars/openai/gym) ![GitHub last commit](https://img.shields.io/github/last-commit/openai/gym)](https://github.com/openai/gym) successor).
  - [stable-baselines3 ![GitHub Repo Stars](https://img.shields.io/github/stars/DLR-RM/stable-baselines3) ![GitHub last commit](https://img.shields.io/github/last-commit/DLR-RM/stable-baselines3)](https://github.com/DLR-RM/stable-baselines3) - PyTorch implementations of Stable Baselines (deep) reinforcement learning algorithms.

### Machine Learning

_Libraries for Machine Learning. Also see [awesome-machine-learning ![GitHub Repo Stars](https://img.shields.io/github/stars/josephmisiti/awesome-machine-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/josephmisiti/awesome-machine-learning)](https://github.com/josephmisiti/awesome-machine-learning#python)._

- General
  - [scikit-learn ![GitHub Repo Stars](https://img.shields.io/github/stars/scikit-learn/scikit-learn) ![GitHub last commit](https://img.shields.io/github/last-commit/scikit-learn/scikit-learn)](https://github.com/scikit-learn/scikit-learn) - The most popular Python library for Machine Learning with extensive documentation and community support.
  - [pgmpy ![GitHub Repo Stars](https://img.shields.io/github/stars/pgmpy/pgmpy) ![GitHub last commit](https://img.shields.io/github/last-commit/pgmpy/pgmpy)](https://github.com/pgmpy/pgmpy) - A Python library for probabilistic graphical models and Bayesian networks.
  - [feature-engine ![GitHub Repo Stars](https://img.shields.io/github/stars/feature-engine/feature_engine) ![GitHub last commit](https://img.shields.io/github/last-commit/feature-engine/feature_engine)](https://github.com/feature-engine/feature_engine) - sklearn compatible API with the widest toolset for feature engineering and selection.
- Gradient Boosting
  - [xgboost ![GitHub Repo Stars](https://img.shields.io/github/stars/dmlc/xgboost) ![GitHub last commit](https://img.shields.io/github/last-commit/dmlc/xgboost)](https://github.com/dmlc/xgboost) - A scalable, portable, and distributed gradient boosting library.
  - [lightgbm ![GitHub Repo Stars](https://img.shields.io/github/stars/lightgbm-org/LightGBM) ![GitHub last commit](https://img.shields.io/github/last-commit/lightgbm-org/LightGBM)](https://github.com/lightgbm-org/LightGBM) - A fast, distributed, high performance gradient boosting framework.
  - [catboost ![GitHub Repo Stars](https://img.shields.io/github/stars/catboost/catboost) ![GitHub last commit](https://img.shields.io/github/last-commit/catboost/catboost)](https://github.com/catboost/catboost) - A fast, scalable, high performance gradient boosting on decision trees library.
- Time Series Forecasting
  - [timesfm ![GitHub Repo Stars](https://img.shields.io/github/stars/google-research/timesfm) ![GitHub last commit](https://img.shields.io/github/last-commit/google-research/timesfm)](https://github.com/google-research/timesfm) - A pretrained foundation model from Google Research for time-series forecasting.

### Natural Language Processing

_Libraries for working with human languages._

- General
  - [nltk ![GitHub Repo Stars](https://img.shields.io/github/stars/nltk/nltk) ![GitHub last commit](https://img.shields.io/github/last-commit/nltk/nltk)](https://github.com/nltk/nltk) - A leading platform for building Python programs to work with human language data.
  - [spacy ![GitHub Repo Stars](https://img.shields.io/github/stars/explosion/spaCy) ![GitHub last commit](https://img.shields.io/github/last-commit/explosion/spaCy)](https://github.com/explosion/spaCy) - A library for industrial-strength natural language processing in Python and Cython.
  - [gensim ![GitHub Repo Stars](https://img.shields.io/github/stars/piskvorky/gensim) ![GitHub last commit](https://img.shields.io/github/last-commit/piskvorky/gensim)](https://github.com/piskvorky/gensim) - Topic Modeling for Humans.
  - [stanza ![GitHub Repo Stars](https://img.shields.io/github/stars/stanfordnlp/stanza) ![GitHub last commit](https://img.shields.io/github/last-commit/stanfordnlp/stanza)](https://github.com/stanfordnlp/stanza) - The Stanford NLP Group's official Python library, supporting 60+ languages.
- Chinese
  - [jieba ![GitHub Repo Stars](https://img.shields.io/github/stars/fxsjy/jieba) ![GitHub last commit](https://img.shields.io/github/last-commit/fxsjy/jieba)](https://github.com/fxsjy/jieba) - The most popular Chinese text segmentation library.
  - [pypinyin ![GitHub Repo Stars](https://img.shields.io/github/stars/mozillazg/python-pinyin) ![GitHub last commit](https://img.shields.io/github/last-commit/mozillazg/python-pinyin)](https://github.com/mozillazg/python-pinyin) - Convert Chinese hanzi (漢字) to pinyin (拼音).
  - [pangu.py ![GitHub Repo Stars](https://img.shields.io/github/stars/vinta/pangu.py) ![GitHub last commit](https://img.shields.io/github/last-commit/vinta/pangu.py)](https://github.com/vinta/pangu.py) - Paranoid text spacing.

### Computer Vision

_Libraries for Computer Vision._

- General
  - [opencv-python ![GitHub Repo Stars](https://img.shields.io/github/stars/opencv/opencv-python) ![GitHub last commit](https://img.shields.io/github/last-commit/opencv/opencv-python)](https://github.com/opencv/opencv-python) - Open Source Computer Vision Library.
  - [ultralytics ![GitHub Repo Stars](https://img.shields.io/github/stars/ultralytics/ultralytics) ![GitHub last commit](https://img.shields.io/github/last-commit/ultralytics/ultralytics)](https://github.com/ultralytics/ultralytics) - Ultralytics YOLO for object detection, segmentation, pose estimation, and classification with state-of-the-art accuracy and speed.
  - [kornia ![GitHub Repo Stars](https://img.shields.io/github/stars/kornia/kornia) ![GitHub last commit](https://img.shields.io/github/last-commit/kornia/kornia)](https://github.com/kornia/kornia/) - Open Source Differentiable Computer Vision Library for PyTorch.
  - [fiftyone ![GitHub Repo Stars](https://img.shields.io/github/stars/voxel51/fiftyone) ![GitHub last commit](https://img.shields.io/github/last-commit/voxel51/fiftyone)](https://github.com/voxel51/fiftyone) - The open-source tool for building high-quality datasets and computer vision models.
- OCR
  - [pytesseract ![GitHub Repo Stars](https://img.shields.io/github/stars/madmaze/pytesseract) ![GitHub last commit](https://img.shields.io/github/last-commit/madmaze/pytesseract)](https://github.com/madmaze/pytesseract) - A wrapper for [Google Tesseract OCR](https://github.com/tesseract-ocr).
  - [easyocr ![GitHub Repo Stars](https://img.shields.io/github/stars/JaidedAI/EasyOCR) ![GitHub last commit](https://img.shields.io/github/last-commit/JaidedAI/EasyOCR)](https://github.com/JaidedAI/EasyOCR) - Ready-to-use OCR with 40+ languages supported.

### Recommender Systems

_Libraries for building recommender systems._

- [annoy ![GitHub Repo Stars](https://img.shields.io/github/stars/spotify/annoy) ![GitHub last commit](https://img.shields.io/github/last-commit/spotify/annoy)](https://github.com/spotify/annoy) - Approximate Nearest Neighbors in C++/Python optimized for memory usage.
- [implicit ![GitHub Repo Stars](https://img.shields.io/github/stars/benfred/implicit) ![GitHub last commit](https://img.shields.io/github/last-commit/benfred/implicit)](https://github.com/benfred/implicit) - A fast Python implementation of collaborative filtering for implicit datasets.
- [scikit-surprise ![GitHub Repo Stars](https://img.shields.io/github/stars/NicolasHug/Surprise) ![GitHub last commit](https://img.shields.io/github/last-commit/NicolasHug/Surprise)](https://github.com/NicolasHug/Surprise) - A scikit for building and analyzing recommender systems.

**Web Development**

### Web Frameworks

_Traditional full stack web frameworks. Also see [Web APIs](#web-apis)._

- Synchronous
  - [flask ![GitHub Repo Stars](https://img.shields.io/github/stars/pallets/flask) ![GitHub last commit](https://img.shields.io/github/last-commit/pallets/flask)](https://github.com/pallets/flask) - A microframework for Python.
    - [awesome-flask ![GitHub Repo Stars](https://img.shields.io/github/stars/humiaozuzu/awesome-flask) ![GitHub last commit](https://img.shields.io/github/last-commit/humiaozuzu/awesome-flask)](https://github.com/humiaozuzu/awesome-flask)
  - [django ![GitHub Repo Stars](https://img.shields.io/github/stars/django/django) ![GitHub last commit](https://img.shields.io/github/last-commit/django/django)](https://github.com/django/django) - The most popular web framework in Python.
    - [awesome-django ![GitHub Repo Stars](https://img.shields.io/github/stars/wsvincent/awesome-django) ![GitHub last commit](https://img.shields.io/github/last-commit/wsvincent/awesome-django)](https://github.com/wsvincent/awesome-django)
  - [bottle ![GitHub Repo Stars](https://img.shields.io/github/stars/bottlepy/bottle) ![GitHub last commit](https://img.shields.io/github/last-commit/bottlepy/bottle)](https://github.com/bottlepy/bottle) - A fast and simple micro-framework distributed as a single file with no dependencies.
  - [pyramid ![GitHub Repo Stars](https://img.shields.io/github/stars/Pylons/pyramid) ![GitHub last commit](https://img.shields.io/github/last-commit/Pylons/pyramid)](https://github.com/Pylons/pyramid) - A small, fast, down-to-earth, open source Python web framework.
    - [awesome-pyramid ![GitHub Repo Stars](https://img.shields.io/github/stars/uralbash/awesome-pyramid) ![GitHub last commit](https://img.shields.io/github/last-commit/uralbash/awesome-pyramid)](https://github.com/uralbash/awesome-pyramid)
  - [fasthtml ![GitHub Repo Stars](https://img.shields.io/github/stars/AnswerDotAI/fasthtml) ![GitHub last commit](https://img.shields.io/github/last-commit/AnswerDotAI/fasthtml)](https://github.com/AnswerDotAI/fasthtml) - The fastest way to create an HTML app.
    - [awesome-fasthtml ![GitHub Repo Stars](https://img.shields.io/github/stars/amosgyamfi/awesome-fasthtml) ![GitHub last commit](https://img.shields.io/github/last-commit/amosgyamfi/awesome-fasthtml)](https://github.com/amosgyamfi/awesome-fasthtml)
- Asynchronous
  - [starlette ![GitHub Repo Stars](https://img.shields.io/github/stars/Kludex/starlette) ![GitHub last commit](https://img.shields.io/github/last-commit/Kludex/starlette)](https://github.com/Kludex/starlette) - A lightweight ASGI framework and toolkit for building high-performance async services.
  - [tornado ![GitHub Repo Stars](https://img.shields.io/github/stars/tornadoweb/tornado) ![GitHub last commit](https://img.shields.io/github/last-commit/tornadoweb/tornado)](https://github.com/tornadoweb/tornado) - A web framework and asynchronous networking library.
  - [litestar ![GitHub Repo Stars](https://img.shields.io/github/stars/litestar-org/litestar) ![GitHub last commit](https://img.shields.io/github/last-commit/litestar-org/litestar)](https://github.com/litestar-org/litestar) - Production-ready, capable and extensible ASGI Web framework.
  - [reflex ![GitHub Repo Stars](https://img.shields.io/github/stars/reflex-dev/reflex) ![GitHub last commit](https://img.shields.io/github/last-commit/reflex-dev/reflex)](https://github.com/reflex-dev/reflex) - A framework for building reactive, full-stack web applications entirely with Python.

### Web APIs

_Libraries for building RESTful, GraphQL, and RPC APIs._

- Django
  - [django-rest-framework ![GitHub Repo Stars](https://img.shields.io/github/stars/encode/django-rest-framework) ![GitHub last commit](https://img.shields.io/github/last-commit/encode/django-rest-framework)](https://github.com/encode/django-rest-framework) - A powerful and flexible toolkit to build web APIs.
  - [django-ninja ![GitHub Repo Stars](https://img.shields.io/github/stars/vitalik/django-ninja) ![GitHub last commit](https://img.shields.io/github/last-commit/vitalik/django-ninja)](https://github.com/vitalik/django-ninja) - Fast, Django REST framework based on type hints and Pydantic.
  - [strawberry-django ![GitHub Repo Stars](https://img.shields.io/github/stars/strawberry-graphql/strawberry-django) ![GitHub last commit](https://img.shields.io/github/last-commit/strawberry-graphql/strawberry-django)](https://github.com/strawberry-graphql/strawberry-django) - Strawberry GraphQL integration with Django.
  - [django-modern-rest ![GitHub Repo Stars](https://img.shields.io/github/stars/wemake-services/django-modern-rest) ![GitHub last commit](https://img.shields.io/github/last-commit/wemake-services/django-modern-rest)](https://github.com/wemake-services/django-modern-rest) - Modern REST with speed, types, async, `msgspec`, `pydantic` and other goodies!
- Flask
  - [apiflask ![GitHub Repo Stars](https://img.shields.io/github/stars/apiflask/apiflask) ![GitHub last commit](https://img.shields.io/github/last-commit/apiflask/apiflask)](https://github.com/apiflask/apiflask) - A lightweight Python web API framework based on Flask and Marshmallow.
- Framework Agnostic
  - [fastapi ![GitHub Repo Stars](https://img.shields.io/github/stars/fastapi/fastapi) ![GitHub last commit](https://img.shields.io/github/last-commit/fastapi/fastapi)](https://github.com/fastapi/fastapi) - A modern, fast, web framework for building APIs with standard Python type hints.
  - [connexion ![GitHub Repo Stars](https://img.shields.io/github/stars/spec-first/connexion) ![GitHub last commit](https://img.shields.io/github/last-commit/spec-first/connexion)](https://github.com/spec-first/connexion) - A spec-first framework that automatically handles requests based on your OpenAPI specification.
  - [strawberry ![GitHub Repo Stars](https://img.shields.io/github/stars/strawberry-graphql/strawberry) ![GitHub last commit](https://img.shields.io/github/last-commit/strawberry-graphql/strawberry)](https://github.com/strawberry-graphql/strawberry) - A GraphQL library that leverages Python type annotations for schema definition.
- RPC
  - [grpcio ![GitHub Repo Stars](https://img.shields.io/github/stars/grpc/grpc) ![GitHub last commit](https://img.shields.io/github/last-commit/grpc/grpc)](https://github.com/grpc/grpc) - HTTP/2-based RPC framework with Python bindings, built by Google.

### Web Servers

_ASGI and WSGI compatible web servers._

- ASGI
  - [uvicorn ![GitHub Repo Stars](https://img.shields.io/github/stars/Kludex/uvicorn) ![GitHub last commit](https://img.shields.io/github/last-commit/Kludex/uvicorn)](https://github.com/Kludex/uvicorn) - A lightning-fast ASGI server implementation, using uvloop and httptools.
  - [granian ![GitHub Repo Stars](https://img.shields.io/github/stars/emmett-framework/granian) ![GitHub last commit](https://img.shields.io/github/last-commit/emmett-framework/granian)](https://github.com/emmett-framework/granian) - A Rust HTTP server for Python applications built on top of Hyper and Tokio, supporting WSGI/ASGI/RSGI.
  - [hypercorn ![GitHub Repo Stars](https://img.shields.io/github/stars/pgjones/hypercorn) ![GitHub last commit](https://img.shields.io/github/last-commit/pgjones/hypercorn)](https://github.com/pgjones/hypercorn) - An ASGI and WSGI Server based on Hyper libraries and inspired by Gunicorn.
- WSGI
  - [gunicorn ![GitHub Repo Stars](https://img.shields.io/github/stars/benoitc/gunicorn) ![GitHub last commit](https://img.shields.io/github/last-commit/benoitc/gunicorn)](https://github.com/benoitc/gunicorn) - Pre-forked, ported from Ruby's Unicorn project.
  - [waitress ![GitHub Repo Stars](https://img.shields.io/github/stars/Pylons/waitress) ![GitHub last commit](https://img.shields.io/github/last-commit/Pylons/waitress)](https://github.com/Pylons/waitress) - Multi-threaded, powers Pyramid.

### WebSocket

_Libraries for working with WebSocket._

- [websockets ![GitHub Repo Stars](https://img.shields.io/github/stars/python-websockets/websockets) ![GitHub last commit](https://img.shields.io/github/last-commit/python-websockets/websockets)](https://github.com/python-websockets/websockets) - A library for building WebSocket servers and clients with a focus on correctness and simplicity.
- [channels ![GitHub Repo Stars](https://img.shields.io/github/stars/django/channels) ![GitHub last commit](https://img.shields.io/github/last-commit/django/channels)](https://github.com/django/channels) - Developer-friendly asynchrony for Django.
- [flask-socketio ![GitHub Repo Stars](https://img.shields.io/github/stars/miguelgrinberg/Flask-SocketIO) ![GitHub last commit](https://img.shields.io/github/last-commit/miguelgrinberg/Flask-SocketIO)](https://github.com/miguelgrinberg/Flask-SocketIO) - Socket.IO integration for Flask applications.
- [autobahn-python ![GitHub Repo Stars](https://img.shields.io/github/stars/crossbario/autobahn-python) ![GitHub last commit](https://img.shields.io/github/last-commit/crossbario/autobahn-python)](https://github.com/crossbario/autobahn-python) - WebSocket & WAMP for Python on Twisted and [asyncio](https://docs.python.org/3/library/asyncio.html).

### Template Engines

_Libraries and tools for templating and lexing._

- [jinja ![GitHub Repo Stars](https://img.shields.io/github/stars/pallets/jinja) ![GitHub last commit](https://img.shields.io/github/last-commit/pallets/jinja)](https://github.com/pallets/jinja) - A modern and designer friendly templating language.
- [mako ![GitHub Repo Stars](https://img.shields.io/github/stars/sqlalchemy/mako) ![GitHub last commit](https://img.shields.io/github/last-commit/sqlalchemy/mako)](https://github.com/sqlalchemy/mako) - Hyperfast and lightweight templating for the Python platform.

### Web Asset Management

_Tools for managing, storing, compressing and minifying website assets._

- [django-storages ![GitHub Repo Stars](https://img.shields.io/github/stars/jschneier/django-storages) ![GitHub last commit](https://img.shields.io/github/last-commit/jschneier/django-storages)](https://github.com/jschneier/django-storages) - A collection of custom storage back ends for Django.
- [django-compressor ![GitHub Repo Stars](https://img.shields.io/github/stars/django-compressor/django-compressor) ![GitHub last commit](https://img.shields.io/github/last-commit/django-compressor/django-compressor)](https://github.com/django-compressor/django-compressor) - Compresses linked and inline JavaScript or CSS into a single cached file.

### Authentication

_Libraries for implementing authentication schemes._

- OAuth
  - [oauthlib ![GitHub Repo Stars](https://img.shields.io/github/stars/oauthlib/oauthlib) ![GitHub last commit](https://img.shields.io/github/last-commit/oauthlib/oauthlib)](https://github.com/oauthlib/oauthlib) - A generic and thorough implementation of the OAuth request-signing logic.
  - [authlib ![GitHub Repo Stars](https://img.shields.io/github/stars/authlib/authlib) ![GitHub last commit](https://img.shields.io/github/last-commit/authlib/authlib)](https://github.com/authlib/authlib) - A comprehensive library for building OAuth, OpenID Connect, and JWT/JWS/JWE/JWK/JWA.
  - [django-allauth ![GitHub Repo Stars](https://img.shields.io/github/stars/pennersr/django-allauth) ![GitHub last commit](https://img.shields.io/github/last-commit/pennersr/django-allauth)](https://github.com/pennersr/django-allauth) - Authentication app for Django that "just works."
  - [django-oauth-toolkit ![GitHub Repo Stars](https://img.shields.io/github/stars/django-oauth/django-oauth-toolkit) ![GitHub last commit](https://img.shields.io/github/last-commit/django-oauth/django-oauth-toolkit)](https://github.com/django-oauth/django-oauth-toolkit) - OAuth 2 goodies for Django.
- JWT
  - [pyjwt ![GitHub Repo Stars](https://img.shields.io/github/stars/jpadilla/pyjwt) ![GitHub last commit](https://img.shields.io/github/last-commit/jpadilla/pyjwt)](https://github.com/jpadilla/pyjwt) - JSON Web Token implementation in Python.
- Permissions
  - [django-guardian ![GitHub Repo Stars](https://img.shields.io/github/stars/django-guardian/django-guardian) ![GitHub last commit](https://img.shields.io/github/last-commit/django-guardian/django-guardian)](https://github.com/django-guardian/django-guardian) - Implementation of per-object permissions for Django.
  - [django-rules ![GitHub Repo Stars](https://img.shields.io/github/stars/dfunckt/django-rules) ![GitHub last commit](https://img.shields.io/github/last-commit/dfunckt/django-rules)](https://github.com/dfunckt/django-rules) - A tiny but powerful app providing object-level permissions to Django, without requiring a database.

### Admin Panels

_Libraries for administrative interfaces._

- [flask-admin ![GitHub Repo Stars](https://img.shields.io/github/stars/pallets-eco/flask-admin) ![GitHub last commit](https://img.shields.io/github/last-commit/pallets-eco/flask-admin)](https://github.com/pallets-eco/flask-admin) - Simple and extensible administrative interface framework for Flask.
- [django-unfold ![GitHub Repo Stars](https://img.shields.io/github/stars/unfoldadmin/django-unfold) ![GitHub last commit](https://img.shields.io/github/last-commit/unfoldadmin/django-unfold)](https://github.com/unfoldadmin/django-unfold) - Elevate your Django admin with a stunning modern interface, powerful features, and seamless user experience.
- [django-grappelli ![GitHub Repo Stars](https://img.shields.io/github/stars/sehmaschine/django-grappelli) ![GitHub last commit](https://img.shields.io/github/last-commit/sehmaschine/django-grappelli)](https://github.com/sehmaschine/django-grappelli) - A jazzy skin for the Django Admin-Interface.

### CMS

_Content Management Systems._

- [wagtail ![GitHub Repo Stars](https://img.shields.io/github/stars/wagtail/wagtail) ![GitHub last commit](https://img.shields.io/github/last-commit/wagtail/wagtail)](https://github.com/wagtail/wagtail) - A Django content management system.
- [django-cms ![GitHub Repo Stars](https://img.shields.io/github/stars/django-cms/django-cms) ![GitHub last commit](https://img.shields.io/github/last-commit/django-cms/django-cms)](https://github.com/django-cms/django-cms) - The easy-to-use and developer-friendly enterprise CMS powered by Django.

### ERP

_Enterprise resource planning frameworks._

- [odoo ![GitHub Repo Stars](https://img.shields.io/github/stars/odoo/odoo) ![GitHub last commit](https://img.shields.io/github/last-commit/odoo/odoo)](https://github.com/odoo/odoo) - A suite of open source business apps: CRM, e-commerce, accounting, inventory, and thousands of community modules.

### Static Site Generators

_Static site generator is a software that takes some text + templates as input and produces HTML files on the output._

- [pelican ![GitHub Repo Stars](https://img.shields.io/github/stars/getpelican/pelican) ![GitHub last commit](https://img.shields.io/github/last-commit/getpelican/pelican)](https://github.com/getpelican/pelican) - Static site generator that supports Markdown and reST syntax.
- [nikola ![GitHub Repo Stars](https://img.shields.io/github/stars/getnikola/nikola) ![GitHub last commit](https://img.shields.io/github/last-commit/getnikola/nikola)](https://github.com/getnikola/nikola) - A static website and blog generator.

**HTTP & Scraping**

### HTTP Clients

_Libraries for working with HTTP._

- Clients
  - [requests ![GitHub Repo Stars](https://img.shields.io/github/stars/psf/requests) ![GitHub last commit](https://img.shields.io/github/last-commit/psf/requests)](https://github.com/psf/requests) - HTTP Requests for Humans.
  - [httpx ![GitHub Repo Stars](https://img.shields.io/github/stars/encode/httpx) ![GitHub last commit](https://img.shields.io/github/last-commit/encode/httpx)](https://github.com/encode/httpx) - A next generation HTTP client for Python.
  - [aiohttp ![GitHub Repo Stars](https://img.shields.io/github/stars/aio-libs/aiohttp) ![GitHub last commit](https://img.shields.io/github/last-commit/aio-libs/aiohttp)](https://github.com/aio-libs/aiohttp) - Asynchronous HTTP client/server framework for asyncio and Python.
  - [urllib3 ![GitHub Repo Stars](https://img.shields.io/github/stars/urllib3/urllib3) ![GitHub last commit](https://img.shields.io/github/last-commit/urllib3/urllib3)](https://github.com/urllib3/urllib3) - A HTTP library with thread-safe connection pooling, file post support, sanity friendly.
- URL Manipulation
  - [yarl ![GitHub Repo Stars](https://img.shields.io/github/stars/aio-libs/yarl) ![GitHub last commit](https://img.shields.io/github/last-commit/aio-libs/yarl)](https://github.com/aio-libs/yarl) - Yet another URL library.
  - [httpx.URL](https://www.python-httpx.org/api/) - The immutable URL class bundled with HTTPX.

### Web Scraping

_Libraries to automate web scraping and extract web content._

- Frameworks
  - [browser-use ![GitHub Repo Stars](https://img.shields.io/github/stars/browser-use/browser-use) ![GitHub last commit](https://img.shields.io/github/last-commit/browser-use/browser-use)](https://github.com/browser-use/browser-use) - Make websites accessible for AI agents with easy browser automation.
  - [scrapy ![GitHub Repo Stars](https://img.shields.io/github/stars/scrapy/scrapy) ![GitHub last commit](https://img.shields.io/github/last-commit/scrapy/scrapy)](https://github.com/scrapy/scrapy) - A fast high-level screen scraping and web crawling framework.
  - [crawl4ai ![GitHub Repo Stars](https://img.shields.io/github/stars/unclecode/crawl4ai) ![GitHub last commit](https://img.shields.io/github/last-commit/unclecode/crawl4ai)](https://github.com/unclecode/crawl4ai) - An open-source, LLM-friendly web crawler that provides lightning-fast, structured data extraction specifically designed for AI agents.
- Content Extraction
  - [feedparser ![GitHub Repo Stars](https://img.shields.io/github/stars/kurtmckee/feedparser) ![GitHub last commit](https://img.shields.io/github/last-commit/kurtmckee/feedparser)](https://github.com/kurtmckee/feedparser) - Universal feed parser.
  - [html2text ![GitHub Repo Stars](https://img.shields.io/github/stars/Alir3z4/html2text) ![GitHub last commit](https://img.shields.io/github/last-commit/Alir3z4/html2text)](https://github.com/Alir3z4/html2text) - Convert HTML to Markdown-formatted text.
  - [trafilatura ![GitHub Repo Stars](https://img.shields.io/github/stars/adbar/trafilatura) ![GitHub last commit](https://img.shields.io/github/last-commit/adbar/trafilatura)](https://github.com/adbar/trafilatura) - A tool for gathering text and metadata from the web, with built-in content filtering.

### Email

_Libraries for sending and parsing email, and mail server management._

- [yagmail ![GitHub Repo Stars](https://img.shields.io/github/stars/kootenpv/yagmail) ![GitHub last commit](https://img.shields.io/github/last-commit/kootenpv/yagmail)](https://github.com/kootenpv/yagmail) - Yet another Gmail/SMTP client.

**Database & Storage**

### ORM

_Libraries that implement Object-Relational Mapping or data mapping techniques._

- Relational Databases
  - [sqlalchemy ![GitHub Repo Stars](https://img.shields.io/github/stars/sqlalchemy/sqlalchemy) ![GitHub last commit](https://img.shields.io/github/last-commit/sqlalchemy/sqlalchemy)](https://github.com/sqlalchemy/sqlalchemy) - The Python SQL Toolkit and Object Relational Mapper.
    - [awesome-sqlalchemy ![GitHub Repo Stars](https://img.shields.io/github/stars/dahlia/awesome-sqlalchemy) ![GitHub last commit](https://img.shields.io/github/last-commit/dahlia/awesome-sqlalchemy)](https://github.com/dahlia/awesome-sqlalchemy)
  - [django.db.models ![GitHub Repo Stars](https://img.shields.io/github/stars/django/django) ![GitHub last commit](https://img.shields.io/github/last-commit/django/django)](https://github.com/django/django) - The Django [ORM](https://docs.djangoproject.com/en/dev/topics/db/models/).
  - [peewee ![GitHub Repo Stars](https://img.shields.io/github/stars/coleifer/peewee) ![GitHub last commit](https://img.shields.io/github/last-commit/coleifer/peewee)](https://github.com/coleifer/peewee) - A small, expressive ORM.
  - [sqlmodel ![GitHub Repo Stars](https://img.shields.io/github/stars/fastapi/sqlmodel) ![GitHub last commit](https://img.shields.io/github/last-commit/fastapi/sqlmodel)](https://github.com/fastapi/sqlmodel) - SQLModel is based on Python type annotations, and powered by Pydantic and SQLAlchemy.
- NoSQL Databases
  - [pynamodb ![GitHub Repo Stars](https://img.shields.io/github/stars/pynamodb/PynamoDB) ![GitHub last commit](https://img.shields.io/github/last-commit/pynamodb/PynamoDB)](https://github.com/pynamodb/PynamoDB) - A Pythonic interface for [Amazon DynamoDB](https://aws.amazon.com/dynamodb/).
  - [mongoengine ![GitHub Repo Stars](https://img.shields.io/github/stars/MongoEngine/mongoengine) ![GitHub last commit](https://img.shields.io/github/last-commit/MongoEngine/mongoengine)](https://github.com/MongoEngine/mongoengine) - A Python Object-Document-Mapper for working with MongoDB.
  - [beanie ![GitHub Repo Stars](https://img.shields.io/github/stars/BeanieODM/beanie) ![GitHub last commit](https://img.shields.io/github/last-commit/BeanieODM/beanie)](https://github.com/BeanieODM/beanie) - An asynchronous Python object-document mapper (ODM) for MongoDB.

### Database Drivers

_Libraries for connecting and operating databases._

- MySQL - [awesome-mysql ![GitHub Repo Stars](https://img.shields.io/github/stars/shlomi-noach/awesome-mysql) ![GitHub last commit](https://img.shields.io/github/last-commit/shlomi-noach/awesome-mysql)](https://github.com/shlomi-noach/awesome-mysql)
  - [pymysql ![GitHub Repo Stars](https://img.shields.io/github/stars/PyMySQL/PyMySQL) ![GitHub last commit](https://img.shields.io/github/last-commit/PyMySQL/PyMySQL)](https://github.com/PyMySQL/PyMySQL) - A pure Python MySQL driver compatible to mysql-python.
  - [mysqlclient ![GitHub Repo Stars](https://img.shields.io/github/stars/PyMySQL/mysqlclient) ![GitHub last commit](https://img.shields.io/github/last-commit/PyMySQL/mysqlclient)](https://github.com/PyMySQL/mysqlclient) - MySQL connector with Python 3 support ([mysql-python](https://sourceforge.net/projects/mysql-python/) fork).
- PostgreSQL - [awesome-postgres ![GitHub Repo Stars](https://img.shields.io/github/stars/dhamaniasad/awesome-postgres) ![GitHub last commit](https://img.shields.io/github/last-commit/dhamaniasad/awesome-postgres)](https://github.com/dhamaniasad/awesome-postgres)
  - [psycopg ![GitHub Repo Stars](https://img.shields.io/github/stars/psycopg/psycopg) ![GitHub last commit](https://img.shields.io/github/last-commit/psycopg/psycopg)](https://github.com/psycopg/psycopg) - The most popular PostgreSQL adapter for Python.
  - [asyncpg ![GitHub Repo Stars](https://img.shields.io/github/stars/MagicStack/asyncpg) ![GitHub last commit](https://img.shields.io/github/last-commit/MagicStack/asyncpg)](https://github.com/MagicStack/asyncpg) - A fast PostgreSQL Database Client Library for Python/asyncio.
- SQLite - [awesome-sqlite ![GitHub Repo Stars](https://img.shields.io/github/stars/planetopendata/awesome-sqlite) ![GitHub last commit](https://img.shields.io/github/last-commit/planetopendata/awesome-sqlite)](https://github.com/planetopendata/awesome-sqlite)
  - [sqlite3](https://docs.python.org/3/library/sqlite3.html) - (Python standard library) SQLite interface compliant with DB-API 2.0.
  - [sqlite-utils ![GitHub Repo Stars](https://img.shields.io/github/stars/simonw/sqlite-utils) ![GitHub last commit](https://img.shields.io/github/last-commit/simonw/sqlite-utils)](https://github.com/simonw/sqlite-utils) - Python CLI utility and library for manipulating SQLite databases.
- ClickHouse
  - [clickhouse-connect ![GitHub Repo Stars](https://img.shields.io/github/stars/ClickHouse/clickhouse-connect) ![GitHub last commit](https://img.shields.io/github/last-commit/ClickHouse/clickhouse-connect)](https://github.com/ClickHouse/clickhouse-connect) - The official ClickHouse client, with SQLAlchemy and Superset connectors.
  - [clickhouse-driver ![GitHub Repo Stars](https://img.shields.io/github/stars/mymarilyn/clickhouse-driver) ![GitHub last commit](https://img.shields.io/github/last-commit/mymarilyn/clickhouse-driver)](https://github.com/mymarilyn/clickhouse-driver) - Python driver with native interface for ClickHouse.
- Other Relational Databases
  - [pyodbc ![GitHub Repo Stars](https://img.shields.io/github/stars/mkleehammer/pyodbc) ![GitHub last commit](https://img.shields.io/github/last-commit/mkleehammer/pyodbc)](https://github.com/mkleehammer/pyodbc) - An ODBC bridge for connecting to SQL Server and any other ODBC-accessible database.
  - [oracledb ![GitHub Repo Stars](https://img.shields.io/github/stars/oracle/python-oracledb) ![GitHub last commit](https://img.shields.io/github/last-commit/oracle/python-oracledb)](https://github.com/oracle/python-oracledb) - The official Python driver for Oracle Database, successor to cx_Oracle.
  - [mssql-python ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/mssql-python) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/mssql-python)](https://github.com/microsoft/mssql-python) - Official Microsoft driver for SQL Server and Azure SQL, built on ODBC for high performance and low memory usage.
- NoSQL Databases
  - [redis ![GitHub Repo Stars](https://img.shields.io/github/stars/redis/redis-py) ![GitHub last commit](https://img.shields.io/github/last-commit/redis/redis-py)](https://github.com/redis/redis-py) - The Python client for Redis.
  - [pymongo ![GitHub Repo Stars](https://img.shields.io/github/stars/mongodb/mongo-python-driver) ![GitHub last commit](https://img.shields.io/github/last-commit/mongodb/mongo-python-driver)](https://github.com/mongodb/mongo-python-driver) - The official Python client for MongoDB.
  - [cassandra-driver ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/cassandra-python-driver) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/cassandra-python-driver)](https://github.com/apache/cassandra-python-driver) - The Python Driver for Apache Cassandra.
  - [django-mongodb-backend ![GitHub Repo Stars](https://img.shields.io/github/stars/mongodb/django-mongodb-backend) ![GitHub last commit](https://img.shields.io/github/last-commit/mongodb/django-mongodb-backend)](https://github.com/mongodb/django-mongodb-backend) - Official MongoDB database backend for Django.

### Database

_In-process databases usable directly from Python._

- Analytical
  - [duckdb ![GitHub Repo Stars](https://img.shields.io/github/stars/duckdb/duckdb) ![GitHub last commit](https://img.shields.io/github/last-commit/duckdb/duckdb)](https://github.com/duckdb/duckdb) - An in-process SQL OLAP database management system; optimized for analytics and fast queries, similar to SQLite but for analytical workloads.
  - [chdb ![GitHub Repo Stars](https://img.shields.io/github/stars/chdb-io/chdb) ![GitHub last commit](https://img.shields.io/github/last-commit/chdb-io/chdb)](https://github.com/chdb-io/chdb) - In-process OLAP SQL engine with the full ClickHouse dialect, zero-copy pandas/Arrow interop, and federation to remote ClickHouse clusters via `remoteSecure()`.
- Vector
  - [chromadb ![GitHub Repo Stars](https://img.shields.io/github/stars/chroma-core/chroma) ![GitHub last commit](https://img.shields.io/github/last-commit/chroma-core/chroma)](https://github.com/chroma-core/chroma) - An open-source embedding database for building AI applications with embeddings and semantic search.
  - [lancedb ![GitHub Repo Stars](https://img.shields.io/github/stars/lancedb/lancedb) ![GitHub last commit](https://img.shields.io/github/last-commit/lancedb/lancedb)](https://github.com/lancedb/lancedb) - A developer-friendly embedded retrieval database for multimodal AI.
  - [zvec ![GitHub Repo Stars](https://img.shields.io/github/stars/alibaba/zvec) ![GitHub last commit](https://img.shields.io/github/last-commit/alibaba/zvec)](https://github.com/alibaba/zvec) - An embedded vector database for on-device RAG and edge AI, the SQLite of vector databases.
- Key-Value & Document
  - [tinydb ![GitHub Repo Stars](https://img.shields.io/github/stars/msiemens/tinydb) ![GitHub last commit](https://img.shields.io/github/last-commit/msiemens/tinydb)](https://github.com/msiemens/tinydb) - A tiny, document-oriented database.

### Caching

_Libraries for caching data._

- [cachetools ![GitHub Repo Stars](https://img.shields.io/github/stars/tkem/cachetools) ![GitHub last commit](https://img.shields.io/github/last-commit/tkem/cachetools)](https://github.com/tkem/cachetools) - Extensible memoizing collections and decorators.
- [diskcache ![GitHub Repo Stars](https://img.shields.io/github/stars/grantjenks/python-diskcache) ![GitHub last commit](https://img.shields.io/github/last-commit/grantjenks/python-diskcache)](https://github.com/grantjenks/python-diskcache) - SQLite and file backed cache backend with faster lookups than memcached and redis.
- [dogpile.cache ![GitHub Repo Stars](https://img.shields.io/github/stars/sqlalchemy/dogpile.cache) ![GitHub last commit](https://img.shields.io/github/last-commit/sqlalchemy/dogpile.cache)](https://github.com/sqlalchemy/dogpile.cache) - dogpile.cache is a next generation replacement for Beaker made by the same authors.
- [django-cacheops ![GitHub Repo Stars](https://img.shields.io/github/stars/Suor/django-cacheops) ![GitHub last commit](https://img.shields.io/github/last-commit/Suor/django-cacheops)](https://github.com/Suor/django-cacheops) - A slick ORM cache with automatic granular event-driven invalidation.

### Search

_Libraries and software for indexing and performing search queries on data._

- [elasticsearch ![GitHub Repo Stars](https://img.shields.io/github/stars/elastic/elasticsearch-py) ![GitHub last commit](https://img.shields.io/github/last-commit/elastic/elasticsearch-py)](https://github.com/elastic/elasticsearch-py) - The official low-level Python client for [Elasticsearch](https://www.elastic.co/products/elasticsearch).
- [opensearch-py ![GitHub Repo Stars](https://img.shields.io/github/stars/opensearch-project/opensearch-py) ![GitHub last commit](https://img.shields.io/github/last-commit/opensearch-project/opensearch-py)](https://github.com/opensearch-project/opensearch-py) - The official low-level Python client for [OpenSearch](https://opensearch.org/).
- [meilisearch ![GitHub Repo Stars](https://img.shields.io/github/stars/meilisearch/meilisearch-python) ![GitHub last commit](https://img.shields.io/github/last-commit/meilisearch/meilisearch-python)](https://github.com/meilisearch/meilisearch-python) - The official Python client for the [Meilisearch](https://www.meilisearch.com/) search engine.
- [django-haystack ![GitHub Repo Stars](https://img.shields.io/github/stars/django-haystack/django-haystack) ![GitHub last commit](https://img.shields.io/github/last-commit/django-haystack/django-haystack)](https://github.com/django-haystack/django-haystack) - Modular search for Django.

### Serialization

_Libraries for serializing complex data types._

- [msgpack ![GitHub Repo Stars](https://img.shields.io/github/stars/msgpack/msgpack-python) ![GitHub last commit](https://img.shields.io/github/last-commit/msgpack/msgpack-python)](https://github.com/msgpack/msgpack-python) - MessagePack serializer implementation for Python.
- [orjson ![GitHub Repo Stars](https://img.shields.io/github/stars/ijl/orjson) ![GitHub last commit](https://img.shields.io/github/last-commit/ijl/orjson)](https://github.com/ijl/orjson) - Fast, correct JSON library.
- [marshmallow ![GitHub Repo Stars](https://img.shields.io/github/stars/marshmallow-code/marshmallow) ![GitHub last commit](https://img.shields.io/github/last-commit/marshmallow-code/marshmallow)](https://github.com/marshmallow-code/marshmallow) - A lightweight library for converting complex objects to and from simple Python datatypes.
- [msgspec ![GitHub Repo Stars](https://img.shields.io/github/stars/msgspec/msgspec) ![GitHub last commit](https://img.shields.io/github/last-commit/msgspec/msgspec)](https://github.com/msgspec/msgspec) - A fast serialization and validation library with built-in support for JSON, MessagePack, YAML, and TOML.

**Data & Science**

### Data Analysis

_Libraries for data analysis._

- [pandas ![GitHub Repo Stars](https://img.shields.io/github/stars/pandas-dev/pandas) ![GitHub last commit](https://img.shields.io/github/last-commit/pandas-dev/pandas)](https://github.com/pandas-dev/pandas) - A library providing high-performance, easy-to-use data structures and data analysis tools.
- [polars ![GitHub Repo Stars](https://img.shields.io/github/stars/pola-rs/polars) ![GitHub last commit](https://img.shields.io/github/last-commit/pola-rs/polars)](https://github.com/pola-rs/polars) - A fast DataFrame library implemented in Rust with a Python API.
- [ibis-framework ![GitHub Repo Stars](https://img.shields.io/github/stars/ibis-project/ibis) ![GitHub last commit](https://img.shields.io/github/last-commit/ibis-project/ibis)](https://github.com/ibis-project/ibis) - A portable Python dataframe library with a single API for 20+ backends.

### Data Ingestion / ETL

_Libraries for data extraction, transformation, and loading pipelines across multiple sources and destinations._

- General
  - [awswrangler ![GitHub Repo Stars](https://img.shields.io/github/stars/aws/aws-sdk-pandas) ![GitHub last commit](https://img.shields.io/github/last-commit/aws/aws-sdk-pandas)](https://github.com/aws/aws-sdk-pandas) - Pandas integration with AWS services like Athena, Glue, Redshift, S3, and DynamoDB.
  - [dlt ![GitHub Repo Stars](https://img.shields.io/github/stars/dlt-hub/dlt) ![GitHub last commit](https://img.shields.io/github/last-commit/dlt-hub/dlt)](https://github.com/dlt-hub/dlt) - A Python library for building data pipelines with automatic schema inference, incremental loading, and support for multiple sources and destinations.
  - [pathway ![GitHub Repo Stars](https://img.shields.io/github/stars/pathwaycom/pathway) ![GitHub last commit](https://img.shields.io/github/last-commit/pathwaycom/pathway)](https://github.com/pathwaycom/pathway) - Python ETL framework for stream processing, real-time analytics, LLM pipelines, and RAG.
- Financial Data
  - [yfinance ![GitHub Repo Stars](https://img.shields.io/github/stars/ranaroussi/yfinance) ![GitHub last commit](https://img.shields.io/github/last-commit/ranaroussi/yfinance)](https://github.com/ranaroussi/yfinance) - Easy Pythonic way to download market and financial data from Yahoo Finance.
  - [akshare ![GitHub Repo Stars](https://img.shields.io/github/stars/akfamily/akshare) ![GitHub last commit](https://img.shields.io/github/last-commit/akfamily/akshare)](https://github.com/akfamily/akshare) - A financial data interface library, built for human beings!
  - [edgartools ![GitHub Repo Stars](https://img.shields.io/github/stars/dgunning/edgartools) ![GitHub last commit](https://img.shields.io/github/last-commit/dgunning/edgartools)](https://github.com/dgunning/edgartools) - Library for downloading structured data from SEC EDGAR filings and XBRL financial statements.
  - [openbb ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenBB-finance/OpenBB) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenBB-finance/OpenBB)](https://github.com/OpenBB-finance/OpenBB) - A financial data platform for analysts, quants and AI agents.

### Data Validation

_Libraries for validating data. Used for forms in many cases._

- [pydantic ![GitHub Repo Stars](https://img.shields.io/github/stars/pydantic/pydantic) ![GitHub last commit](https://img.shields.io/github/last-commit/pydantic/pydantic)](https://github.com/pydantic/pydantic) - Data validation using Python type hints.
- [jsonschema ![GitHub Repo Stars](https://img.shields.io/github/stars/python-jsonschema/jsonschema) ![GitHub last commit](https://img.shields.io/github/last-commit/python-jsonschema/jsonschema)](https://github.com/python-jsonschema/jsonschema) - An implementation of [JSON Schema](https://json-schema.org/) for Python.
- [pandera ![GitHub Repo Stars](https://img.shields.io/github/stars/unionai-oss/pandera) ![GitHub last commit](https://img.shields.io/github/last-commit/unionai-oss/pandera)](https://github.com/unionai-oss/pandera) - A data validation library for dataframes, with support for pandas, polars, and Spark.

### Data Visualization

_Libraries for visualizing data. Also see [awesome-javascript ![GitHub Repo Stars](https://img.shields.io/github/stars/sorrycc/awesome-javascript) ![GitHub last commit](https://img.shields.io/github/last-commit/sorrycc/awesome-javascript)](https://github.com/sorrycc/awesome-javascript#data-visualization)._

- Plotting
  - [matplotlib ![GitHub Repo Stars](https://img.shields.io/github/stars/matplotlib/matplotlib) ![GitHub last commit](https://img.shields.io/github/last-commit/matplotlib/matplotlib)](https://github.com/matplotlib/matplotlib) - A Python 2D plotting library.
  - [plotly ![GitHub Repo Stars](https://img.shields.io/github/stars/plotly/plotly.py) ![GitHub last commit](https://img.shields.io/github/last-commit/plotly/plotly.py)](https://github.com/plotly/plotly.py) - Interactive graphing library for Python.
  - [seaborn ![GitHub Repo Stars](https://img.shields.io/github/stars/mwaskom/seaborn) ![GitHub last commit](https://img.shields.io/github/last-commit/mwaskom/seaborn)](https://github.com/mwaskom/seaborn) - Statistical data visualization using Matplotlib.
  - [altair ![GitHub Repo Stars](https://img.shields.io/github/stars/vega/altair) ![GitHub last commit](https://img.shields.io/github/last-commit/vega/altair)](https://github.com/vega/altair) - Declarative statistical visualization library for Python.
  - [bokeh ![GitHub Repo Stars](https://img.shields.io/github/stars/bokeh/bokeh) ![GitHub last commit](https://img.shields.io/github/last-commit/bokeh/bokeh)](https://github.com/bokeh/bokeh) - Interactive Web Plotting for Python.
- Specialized
  - [cartopy ![GitHub Repo Stars](https://img.shields.io/github/stars/SciTools/cartopy) ![GitHub last commit](https://img.shields.io/github/last-commit/SciTools/cartopy)](https://github.com/SciTools/cartopy) - A cartographic python library with matplotlib support.
  - [pygraphviz ![GitHub Repo Stars](https://img.shields.io/github/stars/pygraphviz/pygraphviz) ![GitHub last commit](https://img.shields.io/github/last-commit/pygraphviz/pygraphviz)](https://github.com/pygraphviz/pygraphviz/) - Python interface to [Graphviz](https://www.graphviz.org/).
  - [graphify ![GitHub Repo Stars](https://img.shields.io/github/stars/Graphify-Labs/graphify) ![GitHub last commit](https://img.shields.io/github/last-commit/Graphify-Labs/graphify)](https://github.com/Graphify-Labs/graphify) - Turn any folder of code, SQL schemas, docs, papers, images, or videos into a queryable knowledge graph.
- Dashboards and Apps
  - [streamlit ![GitHub Repo Stars](https://img.shields.io/github/stars/streamlit/streamlit) ![GitHub last commit](https://img.shields.io/github/last-commit/streamlit/streamlit)](https://github.com/streamlit/streamlit) - A framework which lets you build dashboards, generate reports, or create chat apps in minutes.
  - [gradio ![GitHub Repo Stars](https://img.shields.io/github/stars/gradio-app/gradio) ![GitHub last commit](https://img.shields.io/github/last-commit/gradio-app/gradio)](https://github.com/gradio-app/gradio) - Build and share machine learning apps, all in Python.

### Geolocation

_Libraries for geocoding addresses and working with latitudes and longitudes._

- [geopandas ![GitHub Repo Stars](https://img.shields.io/github/stars/geopandas/geopandas) ![GitHub last commit](https://img.shields.io/github/last-commit/geopandas/geopandas)](https://github.com/geopandas/geopandas) - Python tools for geographic data (GeoSeries/GeoDataFrame) built on pandas.
- [geopy ![GitHub Repo Stars](https://img.shields.io/github/stars/geopy/geopy) ![GitHub last commit](https://img.shields.io/github/last-commit/geopy/geopy)](https://github.com/geopy/geopy) - Python Geocoding Toolbox.
- [geojson ![GitHub Repo Stars](https://img.shields.io/github/stars/jazzband/geojson) ![GitHub last commit](https://img.shields.io/github/last-commit/jazzband/geojson)](https://github.com/jazzband/geojson) - Python bindings and utilities for GeoJSON.
- [geodjango ![GitHub Repo Stars](https://img.shields.io/github/stars/django/django) ![GitHub last commit](https://img.shields.io/github/last-commit/django/django)](https://github.com/django/django) - A world-class geographic web framework that is part of [Django](https://docs.djangoproject.com/en/dev/ref/contrib/gis/).

### Science

_Libraries for scientific computing. Also see [Python-for-Scientists ![GitHub Repo Stars](https://img.shields.io/github/stars/TomNicholas/Python-for-Scientists) ![GitHub last commit](https://img.shields.io/github/last-commit/TomNicholas/Python-for-Scientists)](https://github.com/TomNicholas/Python-for-Scientists)._

- Core
  - [numpy ![GitHub Repo Stars](https://img.shields.io/github/stars/numpy/numpy) ![GitHub last commit](https://img.shields.io/github/last-commit/numpy/numpy)](https://github.com/numpy/numpy) - A fundamental package for scientific computing with Python.
  - [scipy ![GitHub Repo Stars](https://img.shields.io/github/stars/scipy/scipy) ![GitHub last commit](https://img.shields.io/github/last-commit/scipy/scipy)](https://github.com/scipy/scipy) - A Python-based ecosystem of open-source software for mathematics, science, and engineering.
  - [numba ![GitHub Repo Stars](https://img.shields.io/github/stars/numba/numba) ![GitHub last commit](https://img.shields.io/github/last-commit/numba/numba)](https://github.com/numba/numba) - Python JIT compiler to LLVM aimed at scientific Python.
- Symbolic Mathematics
  - [sympy ![GitHub Repo Stars](https://img.shields.io/github/stars/sympy/sympy) ![GitHub last commit](https://img.shields.io/github/last-commit/sympy/sympy)](https://github.com/sympy/sympy) - A Python library for symbolic mathematics.
- Statistics
  - [statsmodels ![GitHub Repo Stars](https://img.shields.io/github/stars/statsmodels/statsmodels) ![GitHub last commit](https://img.shields.io/github/last-commit/statsmodels/statsmodels)](https://github.com/statsmodels/statsmodels) - Statistical modeling and econometrics in Python.
- Biology and Chemistry
  - [biopython ![GitHub Repo Stars](https://img.shields.io/github/stars/biopython/biopython) ![GitHub last commit](https://img.shields.io/github/last-commit/biopython/biopython)](https://github.com/biopython/biopython) - Biopython is a set of freely available tools for biological computation.
  - [rdkit ![GitHub Repo Stars](https://img.shields.io/github/stars/rdkit/rdkit) ![GitHub last commit](https://img.shields.io/github/last-commit/rdkit/rdkit)](https://github.com/rdkit/rdkit) - Cheminformatics and Machine Learning Software.
- Physics and Engineering
  - [astropy ![GitHub Repo Stars](https://img.shields.io/github/stars/astropy/astropy) ![GitHub last commit](https://img.shields.io/github/last-commit/astropy/astropy)](https://github.com/astropy/astropy) - A community Python library for Astronomy.
  - [obspy ![GitHub Repo Stars](https://img.shields.io/github/stars/obspy/obspy) ![GitHub last commit](https://img.shields.io/github/last-commit/obspy/obspy)](https://github.com/obspy/obspy) - A Python toolbox for seismology.
- Simulation and Modeling
  - [pymc ![GitHub Repo Stars](https://img.shields.io/github/stars/pymc-devs/pymc) ![GitHub last commit](https://img.shields.io/github/last-commit/pymc-devs/pymc)](https://github.com/pymc-devs/pymc) - Probabilistic programming and Bayesian modeling in Python.
  - [simpy](https://gitlab.com/team-simpy/simpy) - A process-based discrete-event simulation framework.
  - [mesa ![GitHub Repo Stars](https://img.shields.io/github/stars/mesa/mesa) ![GitHub last commit](https://img.shields.io/github/last-commit/mesa/mesa)](https://github.com/mesa/mesa) - An agent-based modeling framework for building, analyzing, and visualizing complex system simulations.
- Graphs and Networks
  - [networkx ![GitHub Repo Stars](https://img.shields.io/github/stars/networkx/networkx) ![GitHub last commit](https://img.shields.io/github/last-commit/networkx/networkx)](https://github.com/networkx/networkx) - A high-productivity software for complex networks.
- Computational Geometry
  - [shapely ![GitHub Repo Stars](https://img.shields.io/github/stars/shapely/shapely) ![GitHub last commit](https://img.shields.io/github/last-commit/shapely/shapely)](https://github.com/shapely/shapely) - Manipulation and analysis of geometric objects in the Cartesian plane.
- Other
  - [colour-science ![GitHub Repo Stars](https://img.shields.io/github/stars/colour-science/colour) ![GitHub last commit](https://img.shields.io/github/last-commit/colour-science/colour)](https://github.com/colour-science/colour) - Implementing a comprehensive number of colour theory transformations and algorithms.
  - [manim ![GitHub Repo Stars](https://img.shields.io/github/stars/ManimCommunity/manim) ![GitHub last commit](https://img.shields.io/github/last-commit/ManimCommunity/manim)](https://github.com/ManimCommunity/manim) - An animation engine for explanatory math videos.

### Quantum Computing

_Libraries for quantum computing._

- [qiskit ![GitHub Repo Stars](https://img.shields.io/github/stars/Qiskit/qiskit) ![GitHub last commit](https://img.shields.io/github/last-commit/Qiskit/qiskit)](https://github.com/Qiskit/qiskit) - An IBM-backed quantum SDK for building, simulating, and running circuits on real quantum hardware.
- [qutip ![GitHub Repo Stars](https://img.shields.io/github/stars/qutip/qutip) ![GitHub last commit](https://img.shields.io/github/last-commit/qutip/qutip)](https://github.com/qutip/qutip) - Quantum Toolbox in Python.
- [pennylane ![GitHub Repo Stars](https://img.shields.io/github/stars/PennyLaneAI/pennylane) ![GitHub last commit](https://img.shields.io/github/last-commit/PennyLaneAI/pennylane)](https://github.com/PennyLaneAI/pennylane) - A hybrid quantum-classical machine learning library with automatic differentiation support.
- [cirq ![GitHub Repo Stars](https://img.shields.io/github/stars/quantumlib/Cirq) ![GitHub last commit](https://img.shields.io/github/last-commit/quantumlib/Cirq)](https://github.com/quantumlib/Cirq) - A Google-developed framework focused on hardware-aware quantum circuit design for NISQ devices.

**Developer Tools**

### Algorithms and Design Patterns

_Python implementation of data structures, algorithms and design patterns. Also see [awesome-algorithms ![GitHub Repo Stars](https://img.shields.io/github/stars/tayllan/awesome-algorithms) ![GitHub last commit](https://img.shields.io/github/last-commit/tayllan/awesome-algorithms)](https://github.com/tayllan/awesome-algorithms)._

- Algorithms
  - [sortedcontainers ![GitHub Repo Stars](https://img.shields.io/github/stars/grantjenks/python-sortedcontainers) ![GitHub last commit](https://img.shields.io/github/last-commit/grantjenks/python-sortedcontainers)](https://github.com/grantjenks/python-sortedcontainers) - Fast and pure-Python implementation of sorted collections.
  - [algorithms ![GitHub Repo Stars](https://img.shields.io/github/stars/keon/algorithms) ![GitHub last commit](https://img.shields.io/github/last-commit/keon/algorithms)](https://github.com/keon/algorithms) - Minimal examples of data structures and algorithms.
  - [thealgorithms ![GitHub Repo Stars](https://img.shields.io/github/stars/TheAlgorithms/Python) ![GitHub last commit](https://img.shields.io/github/last-commit/TheAlgorithms/Python)](https://github.com/TheAlgorithms/Python) - All Algorithms implemented in Python.
- Design Patterns
  - [transitions ![GitHub Repo Stars](https://img.shields.io/github/stars/pytransitions/transitions) ![GitHub last commit](https://img.shields.io/github/last-commit/pytransitions/transitions)](https://github.com/pytransitions/transitions) - A lightweight, object-oriented finite state machine implementation.
  - [python-patterns ![GitHub Repo Stars](https://img.shields.io/github/stars/faif/python-patterns) ![GitHub last commit](https://img.shields.io/github/last-commit/faif/python-patterns)](https://github.com/faif/python-patterns) - A collection of design patterns in Python.

### Interactive Interpreter

_Interactive Python interpreters (REPL)._

- [ipython ![GitHub Repo Stars](https://img.shields.io/github/stars/ipython/ipython) ![GitHub last commit](https://img.shields.io/github/last-commit/ipython/ipython)](https://github.com/ipython/ipython) - A powerful interactive Python shell, and the kernel behind Jupyter notebooks.
- [jupyter ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyter/notebook) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyter/notebook)](https://github.com/jupyter/notebook) - A rich toolkit to help you make the most out of using Python interactively.
  - [awesome-jupyter ![GitHub Repo Stars](https://img.shields.io/github/stars/markusschanta/awesome-jupyter) ![GitHub last commit](https://img.shields.io/github/last-commit/markusschanta/awesome-jupyter)](https://github.com/markusschanta/awesome-jupyter)
- [marimo ![GitHub Repo Stars](https://img.shields.io/github/stars/marimo-team/marimo) ![GitHub last commit](https://img.shields.io/github/last-commit/marimo-team/marimo)](https://github.com/marimo-team/marimo) - Transform data and train models, feels like a next-gen notebook, stored as Git-friendly Python.
- [ptpython ![GitHub Repo Stars](https://img.shields.io/github/stars/prompt-toolkit/ptpython) ![GitHub last commit](https://img.shields.io/github/last-commit/prompt-toolkit/ptpython)](https://github.com/prompt-toolkit/ptpython) - Advanced Python REPL built on top of the [python-prompt-toolkit ![GitHub Repo Stars](https://img.shields.io/github/stars/prompt-toolkit/python-prompt-toolkit) ![GitHub last commit](https://img.shields.io/github/last-commit/prompt-toolkit/python-prompt-toolkit)](https://github.com/prompt-toolkit/python-prompt-toolkit).

### Code Analysis

_Tools of static analysis, linters and code quality checkers. Also see [awesome-static-analysis ![GitHub Repo Stars](https://img.shields.io/github/stars/analysis-tools-dev/static-analysis) ![GitHub last commit](https://img.shields.io/github/last-commit/analysis-tools-dev/static-analysis)](https://github.com/analysis-tools-dev/static-analysis)._

- Code Analysis
  - [vulture ![GitHub Repo Stars](https://img.shields.io/github/stars/jendrikseipp/vulture) ![GitHub last commit](https://img.shields.io/github/last-commit/jendrikseipp/vulture)](https://github.com/jendrikseipp/vulture) - A tool for finding and analyzing dead Python code.
  - [prospector ![GitHub Repo Stars](https://img.shields.io/github/stars/prospector-dev/prospector) ![GitHub last commit](https://img.shields.io/github/last-commit/prospector-dev/prospector)](https://github.com/prospector-dev/prospector) - A tool to analyze Python code.
  - [repowise ![GitHub Repo Stars](https://img.shields.io/github/stars/repowise-dev/repowise) ![GitHub last commit](https://img.shields.io/github/last-commit/repowise-dev/repowise)](https://github.com/repowise-dev/repowise) - Codebase intelligence that indexes repos into dependency graphs, git history, and auto-generated docs with dead code detection.
- Git Hooks
  - [pre-commit ![GitHub Repo Stars](https://img.shields.io/github/stars/pre-commit/pre-commit) ![GitHub last commit](https://img.shields.io/github/last-commit/pre-commit/pre-commit)](https://github.com/pre-commit/pre-commit) - A framework for managing and maintaining multi-language pre-commit hooks.
- Linters and Formatters
  - [ruff ![GitHub Repo Stars](https://img.shields.io/github/stars/astral-sh/ruff) ![GitHub last commit](https://img.shields.io/github/last-commit/astral-sh/ruff)](https://github.com/astral-sh/ruff) - An extremely fast Python linter and code formatter.
  - [black ![GitHub Repo Stars](https://img.shields.io/github/stars/psf/black) ![GitHub last commit](https://img.shields.io/github/last-commit/psf/black)](https://github.com/psf/black) - The uncompromising Python code formatter.
  - [isort ![GitHub Repo Stars](https://img.shields.io/github/stars/PyCQA/isort) ![GitHub last commit](https://img.shields.io/github/last-commit/PyCQA/isort)](https://github.com/PyCQA/isort) - A Python utility / library to sort imports.
  - [pylint ![GitHub Repo Stars](https://img.shields.io/github/stars/pylint-dev/pylint) ![GitHub last commit](https://img.shields.io/github/last-commit/pylint-dev/pylint)](https://github.com/pylint-dev/pylint) - A fully customizable source code analyzer.
  - [flake8 ![GitHub Repo Stars](https://img.shields.io/github/stars/PyCQA/flake8) ![GitHub last commit](https://img.shields.io/github/last-commit/PyCQA/flake8)](https://github.com/PyCQA/flake8) - A wrapper around `pycodestyle`, `pyflakes` and McCabe.
    - [awesome-flake8-extensions ![GitHub Repo Stars](https://img.shields.io/github/stars/DmytroLitvinov/awesome-flake8-extensions) ![GitHub last commit](https://img.shields.io/github/last-commit/DmytroLitvinov/awesome-flake8-extensions)](https://github.com/DmytroLitvinov/awesome-flake8-extensions)
  - [bandit ![GitHub Repo Stars](https://img.shields.io/github/stars/PyCQA/bandit) ![GitHub last commit](https://img.shields.io/github/last-commit/PyCQA/bandit)](https://github.com/PyCQA/bandit) - A tool designed to find common security issues in Python code.
- Refactoring
  - [rope ![GitHub Repo Stars](https://img.shields.io/github/stars/python-rope/rope) ![GitHub last commit](https://img.shields.io/github/last-commit/python-rope/rope)](https://github.com/python-rope/rope) - Rope is a python refactoring library.
- Type Checkers - [awesome-python-typing ![GitHub Repo Stars](https://img.shields.io/github/stars/typeddjango/awesome-python-typing) ![GitHub last commit](https://img.shields.io/github/last-commit/typeddjango/awesome-python-typing)](https://github.com/typeddjango/awesome-python-typing)
  - [mypy ![GitHub Repo Stars](https://img.shields.io/github/stars/python/mypy) ![GitHub last commit](https://img.shields.io/github/last-commit/python/mypy)](https://github.com/python/mypy) - Check variable types during compile time.
  - [ty ![GitHub Repo Stars](https://img.shields.io/github/stars/astral-sh/ty) ![GitHub last commit](https://img.shields.io/github/last-commit/astral-sh/ty)](https://github.com/astral-sh/ty) - An extremely fast Python type checker and language server.
  - [pyright ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/pyright) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/pyright)](https://github.com/microsoft/pyright) - Full-featured static type checker for Python from Microsoft, the engine behind Pylance.
  - [pyrefly ![GitHub Repo Stars](https://img.shields.io/github/stars/facebook/pyrefly) ![GitHub last commit](https://img.shields.io/github/last-commit/facebook/pyrefly)](https://github.com/facebook/pyrefly) - A fast type checker and language server for Python.
- Type Annotations Generators
  - [monkeytype ![GitHub Repo Stars](https://img.shields.io/github/stars/Instagram/MonkeyType) ![GitHub last commit](https://img.shields.io/github/last-commit/Instagram/MonkeyType)](https://github.com/Instagram/MonkeyType) - A system for Python that generates static type annotations by collecting runtime types.

### Testing

_Libraries for testing codebases and generating test data. Also see [awesome-python-testing ![GitHub Repo Stars](https://img.shields.io/github/stars/cleder/awesome-python-testing) ![GitHub last commit](https://img.shields.io/github/last-commit/cleder/awesome-python-testing)](https://github.com/cleder/awesome-python-testing)._

- Frameworks
  - [pytest ![GitHub Repo Stars](https://img.shields.io/github/stars/pytest-dev/pytest) ![GitHub last commit](https://img.shields.io/github/last-commit/pytest-dev/pytest)](https://github.com/pytest-dev/pytest) - A mature full-featured Python testing tool.
    - [awesome-pytest ![GitHub Repo Stars](https://img.shields.io/github/stars/augustogoulart/awesome-pytest) ![GitHub last commit](https://img.shields.io/github/last-commit/augustogoulart/awesome-pytest)](https://github.com/augustogoulart/awesome-pytest)
  - [hypothesis ![GitHub Repo Stars](https://img.shields.io/github/stars/HypothesisWorks/hypothesis) ![GitHub last commit](https://img.shields.io/github/last-commit/HypothesisWorks/hypothesis)](https://github.com/HypothesisWorks/hypothesis) - Hypothesis is an advanced Quickcheck style property based testing library.
  - [robotframework ![GitHub Repo Stars](https://img.shields.io/github/stars/robotframework/robotframework) ![GitHub last commit](https://img.shields.io/github/last-commit/robotframework/robotframework)](https://github.com/robotframework/robotframework) - A generic test automation framework.
- Test Runners
  - [tox ![GitHub Repo Stars](https://img.shields.io/github/stars/tox-dev/tox) ![GitHub last commit](https://img.shields.io/github/last-commit/tox-dev/tox)](https://github.com/tox-dev/tox) - Auto builds and tests distributions in multiple Python versions
  - [nox ![GitHub Repo Stars](https://img.shields.io/github/stars/wntrblm/nox) ![GitHub last commit](https://img.shields.io/github/last-commit/wntrblm/nox)](https://github.com/wntrblm/nox) - Flexible test automation for Python.
- Browser Automation
  - [playwright-python ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/playwright-python) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/playwright-python)](https://github.com/microsoft/playwright-python) - Python version of the Playwright testing and automation library.
  - [selenium ![GitHub Repo Stars](https://img.shields.io/github/stars/SeleniumHQ/selenium) ![GitHub last commit](https://img.shields.io/github/last-commit/SeleniumHQ/selenium)](https://github.com/SeleniumHQ/selenium) - Python bindings for [Selenium](https://selenium.dev/) [WebDriver](https://selenium.dev/documentation/webdriver/).
- Load Testing
  - [locust ![GitHub Repo Stars](https://img.shields.io/github/stars/locustio/locust) ![GitHub last commit](https://img.shields.io/github/last-commit/locustio/locust)](https://github.com/locustio/locust) - Scalable user load testing tool written in Python.
- API Testing
  - [schemathesis ![GitHub Repo Stars](https://img.shields.io/github/stars/schemathesis/schemathesis) ![GitHub last commit](https://img.shields.io/github/last-commit/schemathesis/schemathesis)](https://github.com/schemathesis/schemathesis) - A tool for automatic property-based testing of web applications built with Open API / Swagger specifications.
- Mock
  - [mock](https://docs.python.org/3/library/unittest.mock.html) - (Python standard library) A mocking and patching library.
  - [responses ![GitHub Repo Stars](https://img.shields.io/github/stars/getsentry/responses) ![GitHub last commit](https://img.shields.io/github/last-commit/getsentry/responses)](https://github.com/getsentry/responses) - A utility library for mocking out the requests Python library.
  - [freezegun ![GitHub Repo Stars](https://img.shields.io/github/stars/spulec/freezegun) ![GitHub last commit](https://img.shields.io/github/last-commit/spulec/freezegun)](https://github.com/spulec/freezegun) - Travel through time by mocking the datetime module.
  - [vcrpy ![GitHub Repo Stars](https://img.shields.io/github/stars/kevin1024/vcrpy) ![GitHub last commit](https://img.shields.io/github/last-commit/kevin1024/vcrpy)](https://github.com/kevin1024/vcrpy) - Record and replay HTTP interactions on your tests.
  - [respx ![GitHub Repo Stars](https://img.shields.io/github/stars/lundberg/respx) ![GitHub last commit](https://img.shields.io/github/last-commit/lundberg/respx)](https://github.com/lundberg/respx) - Mock HTTPX with awesome request patterns and response side effects.
- Object Factories
  - [factory_boy ![GitHub Repo Stars](https://img.shields.io/github/stars/FactoryBoy/factory_boy) ![GitHub last commit](https://img.shields.io/github/last-commit/FactoryBoy/factory_boy)](https://github.com/FactoryBoy/factory_boy) - A test fixtures replacement for Python.
  - [polyfactory ![GitHub Repo Stars](https://img.shields.io/github/stars/litestar-org/polyfactory) ![GitHub last commit](https://img.shields.io/github/last-commit/litestar-org/polyfactory)](https://github.com/litestar-org/polyfactory) - mock data generation library with support to classes (continuation of `pydantic-factories`)
- Code Coverage
  - [coverage ![GitHub Repo Stars](https://img.shields.io/github/stars/coveragepy/coveragepy) ![GitHub last commit](https://img.shields.io/github/last-commit/coveragepy/coveragepy)](https://github.com/coveragepy/coveragepy) - Code coverage measurement.
- Fake Data
  - [faker ![GitHub Repo Stars](https://img.shields.io/github/stars/joke2k/faker) ![GitHub last commit](https://img.shields.io/github/last-commit/joke2k/faker)](https://github.com/joke2k/faker) - A Python package that generates fake data.
  - [mimesis ![GitHub Repo Stars](https://img.shields.io/github/stars/lk-geimfari/mimesis) ![GitHub last commit](https://img.shields.io/github/last-commit/lk-geimfari/mimesis)](https://github.com/lk-geimfari/mimesis) - is a Python library that help you generate fake data.

### Debugging Tools

_Libraries for debugging code._

- pdb-like Debugger
  - [ipdb ![GitHub Repo Stars](https://img.shields.io/github/stars/gotcha/ipdb) ![GitHub last commit](https://img.shields.io/github/last-commit/gotcha/ipdb)](https://github.com/gotcha/ipdb) - IPython-enabled [pdb](https://docs.python.org/3/library/pdb.html).
  - [pudb ![GitHub Repo Stars](https://img.shields.io/github/stars/inducer/pudb) ![GitHub last commit](https://img.shields.io/github/last-commit/inducer/pudb)](https://github.com/inducer/pudb) - A full-screen, console-based Python debugger.
- Tracing
  - [hunter ![GitHub Repo Stars](https://img.shields.io/github/stars/ionelmc/python-hunter) ![GitHub last commit](https://img.shields.io/github/last-commit/ionelmc/python-hunter)](https://github.com/ionelmc/python-hunter) - A flexible code tracing toolkit.
- Profiler
  - [py-spy ![GitHub Repo Stars](https://img.shields.io/github/stars/benfred/py-spy) ![GitHub last commit](https://img.shields.io/github/last-commit/benfred/py-spy)](https://github.com/benfred/py-spy) - A sampling profiler for Python programs. Written in Rust.
  - [memray ![GitHub Repo Stars](https://img.shields.io/github/stars/bloomberg/memray) ![GitHub last commit](https://img.shields.io/github/last-commit/bloomberg/memray)](https://github.com/bloomberg/memray) - A memory profiler that tracks allocations in Python code, native extensions, and the interpreter itself.
  - [pyinstrument ![GitHub Repo Stars](https://img.shields.io/github/stars/joerick/pyinstrument) ![GitHub last commit](https://img.shields.io/github/last-commit/joerick/pyinstrument)](https://github.com/joerick/pyinstrument) - A statistical wall-clock profiler with low overhead and readable call-tree output.
  - [scalene ![GitHub Repo Stars](https://img.shields.io/github/stars/plasma-umass/scalene) ![GitHub last commit](https://img.shields.io/github/last-commit/plasma-umass/scalene)](https://github.com/plasma-umass/scalene) - A high-performance, high-precision CPU, GPU, and memory profiler for Python.
- Others
  - [django-debug-toolbar ![GitHub Repo Stars](https://img.shields.io/github/stars/django-commons/django-debug-toolbar) ![GitHub last commit](https://img.shields.io/github/last-commit/django-commons/django-debug-toolbar)](https://github.com/django-commons/django-debug-toolbar) - Display various debug information for Django.
  - [icecream ![GitHub Repo Stars](https://img.shields.io/github/stars/gruns/icecream) ![GitHub last commit](https://img.shields.io/github/last-commit/gruns/icecream)](https://github.com/gruns/icecream) - Inspect variables, expressions, and program execution with a single, simple function call.
  - [flask-debugtoolbar ![GitHub Repo Stars](https://img.shields.io/github/stars/pallets-eco/flask-debugtoolbar) ![GitHub last commit](https://img.shields.io/github/last-commit/pallets-eco/flask-debugtoolbar)](https://github.com/pallets-eco/flask-debugtoolbar) - A port of the django-debug-toolbar to flask.

### Build Tools

_Compile software from source code. If you're looking for Python packaging/build tools, see [Package Management](#package-management)._

- [invoke ![GitHub Repo Stars](https://img.shields.io/github/stars/pyinvoke/invoke) ![GitHub last commit](https://img.shields.io/github/last-commit/pyinvoke/invoke)](https://github.com/pyinvoke/invoke) - A tool for managing shell-oriented subprocesses and organizing executable Python code into CLI-invokable tasks.
- [scons ![GitHub Repo Stars](https://img.shields.io/github/stars/SCons/scons) ![GitHub last commit](https://img.shields.io/github/last-commit/SCons/scons)](https://github.com/SCons/scons) - A software construction tool.
- [doit ![GitHub Repo Stars](https://img.shields.io/github/stars/pydoit/doit) ![GitHub last commit](https://img.shields.io/github/last-commit/pydoit/doit)](https://github.com/pydoit/doit) - A task runner and build tool.

### Documentation

_Libraries for generating project documentation._

- [sphinx ![GitHub Repo Stars](https://img.shields.io/github/stars/sphinx-doc/sphinx) ![GitHub last commit](https://img.shields.io/github/last-commit/sphinx-doc/sphinx)](https://github.com/sphinx-doc/sphinx/) - Python Documentation generator.
  - [awesome-sphinxdoc ![GitHub Repo Stars](https://img.shields.io/github/stars/ygzgxyz/awesome-sphinxdoc) ![GitHub last commit](https://img.shields.io/github/last-commit/ygzgxyz/awesome-sphinxdoc)](https://github.com/ygzgxyz/awesome-sphinxdoc)
- [mkdocs-material ![GitHub Repo Stars](https://img.shields.io/github/stars/squidfunk/mkdocs-material) ![GitHub last commit](https://img.shields.io/github/last-commit/squidfunk/mkdocs-material)](https://github.com/squidfunk/mkdocs-material) - A documentation framework and Material Design theme built on MkDocs.
- [mkdocs ![GitHub Repo Stars](https://img.shields.io/github/stars/mkdocs/mkdocs) ![GitHub last commit](https://img.shields.io/github/last-commit/mkdocs/mkdocs)](https://github.com/mkdocs/mkdocs/) - Markdown friendly documentation generator.
- [diagrams ![GitHub Repo Stars](https://img.shields.io/github/stars/mingrammer/diagrams) ![GitHub last commit](https://img.shields.io/github/last-commit/mingrammer/diagrams)](https://github.com/mingrammer/diagrams) - Diagram as Code.
- [pdoc ![GitHub Repo Stars](https://img.shields.io/github/stars/mitmproxy/pdoc) ![GitHub last commit](https://img.shields.io/github/last-commit/mitmproxy/pdoc)](https://github.com/mitmproxy/pdoc) - Epydoc replacement to auto generate API documentation for Python libraries.

**DevOps**

### DevOps Tools

_Software and libraries for DevOps._

- Cloud Providers
  - [boto3 ![GitHub Repo Stars](https://img.shields.io/github/stars/boto/boto3) ![GitHub last commit](https://img.shields.io/github/last-commit/boto/boto3)](https://github.com/boto/boto3) - Python interface to Amazon Web Services.
  - [awscli ![GitHub Repo Stars](https://img.shields.io/github/stars/aws/aws-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/aws/aws-cli)](https://github.com/aws/aws-cli) - Universal Command Line Interface for Amazon Web Services.
  - [azure-sdk-for-python ![GitHub Repo Stars](https://img.shields.io/github/stars/Azure/azure-sdk-for-python) ![GitHub last commit](https://img.shields.io/github/last-commit/Azure/azure-sdk-for-python)](https://github.com/Azure/azure-sdk-for-python) - Microsoft Azure SDK for Python, published as per-service packages.
  - [google-cloud-python ![GitHub Repo Stars](https://img.shields.io/github/stars/googleapis/google-cloud-python) ![GitHub last commit](https://img.shields.io/github/last-commit/googleapis/google-cloud-python)](https://github.com/googleapis/google-cloud-python) - Google Cloud client libraries for Python, published as per-service packages.
- Configuration Management
  - [ansible ![GitHub Repo Stars](https://img.shields.io/github/stars/ansible/ansible) ![GitHub last commit](https://img.shields.io/github/last-commit/ansible/ansible)](https://github.com/ansible/ansible) - A radically simple IT automation platform.
  - [cloud-init ![GitHub Repo Stars](https://img.shields.io/github/stars/canonical/cloud-init) ![GitHub last commit](https://img.shields.io/github/last-commit/canonical/cloud-init)](https://github.com/canonical/cloud-init) - A multi-distribution package that handles early initialization of a cloud instance.
  - [pyinfra ![GitHub Repo Stars](https://img.shields.io/github/stars/pyinfra-dev/pyinfra) ![GitHub last commit](https://img.shields.io/github/last-commit/pyinfra-dev/pyinfra)](https://github.com/pyinfra-dev/pyinfra) - A versatile CLI tools and python libraries to automate infrastructure.
  - [salt ![GitHub Repo Stars](https://img.shields.io/github/stars/saltstack/salt) ![GitHub last commit](https://img.shields.io/github/last-commit/saltstack/salt)](https://github.com/saltstack/salt) - Infrastructure automation and management system.
- Deployment
  - [fabric ![GitHub Repo Stars](https://img.shields.io/github/stars/fabric/fabric) ![GitHub last commit](https://img.shields.io/github/last-commit/fabric/fabric)](https://github.com/fabric/fabric) - A simple, Pythonic tool for remote execution and deployment.
  - [chalice ![GitHub Repo Stars](https://img.shields.io/github/stars/aws/chalice) ![GitHub last commit](https://img.shields.io/github/last-commit/aws/chalice)](https://github.com/aws/chalice) - A Python serverless microframework for AWS.
- Monitoring and Processes
  - [psutil ![GitHub Repo Stars](https://img.shields.io/github/stars/giampaolo/psutil) ![GitHub last commit](https://img.shields.io/github/last-commit/giampaolo/psutil)](https://github.com/giampaolo/psutil) - A cross-platform process and system utilities module.
  - [sentry-sdk ![GitHub Repo Stars](https://img.shields.io/github/stars/getsentry/sentry-python) ![GitHub last commit](https://img.shields.io/github/last-commit/getsentry/sentry-python)](https://github.com/getsentry/sentry-python) - Sentry SDK for Python.
  - [supervisor ![GitHub Repo Stars](https://img.shields.io/github/stars/Supervisor/supervisor) ![GitHub last commit](https://img.shields.io/github/last-commit/Supervisor/supervisor)](https://github.com/Supervisor/supervisor) - Supervisor process control system for UNIX.
  - [flower ![GitHub Repo Stars](https://img.shields.io/github/stars/mher/flower) ![GitHub last commit](https://img.shields.io/github/last-commit/mher/flower)](https://github.com/mher/flower) - A real-time monitor and web admin for Celery task queues.
  - [sh ![GitHub Repo Stars](https://img.shields.io/github/stars/amoffat/sh) ![GitHub last commit](https://img.shields.io/github/last-commit/amoffat/sh)](https://github.com/amoffat/sh) - A full-fledged subprocess replacement for Python.
- Other
  - [borgbackup ![GitHub Repo Stars](https://img.shields.io/github/stars/borgbackup/borg) ![GitHub last commit](https://img.shields.io/github/last-commit/borgbackup/borg)](https://github.com/borgbackup/borg) - A deduplicating archiver with compression and encryption.
  - [chaostoolkit ![GitHub Repo Stars](https://img.shields.io/github/stars/chaostoolkit/chaostoolkit) ![GitHub last commit](https://img.shields.io/github/last-commit/chaostoolkit/chaostoolkit)](https://github.com/chaostoolkit/chaostoolkit) - A Chaos Engineering toolkit & Orchestration for Developers.

### Distributed Computing

_Frameworks and libraries for Distributed Computing._

- [ray ![GitHub Repo Stars](https://img.shields.io/github/stars/ray-project/ray) ![GitHub last commit](https://img.shields.io/github/last-commit/ray-project/ray)](https://github.com/ray-project/ray/) - A system for parallel and distributed Python that unifies the machine learning ecosystem.
- [pyspark ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/spark) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/spark)](https://github.com/apache/spark) - [Apache Spark](https://spark.apache.org/) Python API.
- [dask ![GitHub Repo Stars](https://img.shields.io/github/stars/dask/dask) ![GitHub last commit](https://img.shields.io/github/last-commit/dask/dask)](https://github.com/dask/dask) - A flexible parallel computing library for analytic computing.
- [joblib ![GitHub Repo Stars](https://img.shields.io/github/stars/joblib/joblib) ![GitHub last commit](https://img.shields.io/github/last-commit/joblib/joblib)](https://github.com/joblib/joblib) - A set of tools to provide lightweight pipelining in Python.
- [mpi4py ![GitHub Repo Stars](https://img.shields.io/github/stars/mpi4py/mpi4py) ![GitHub last commit](https://img.shields.io/github/last-commit/mpi4py/mpi4py)](https://github.com/mpi4py/mpi4py) - Python bindings for MPI.

### Task Queues

_Libraries for working with task queues._

- [celery ![GitHub Repo Stars](https://img.shields.io/github/stars/celery/celery) ![GitHub last commit](https://img.shields.io/github/last-commit/celery/celery)](https://github.com/celery/celery) - An asynchronous task queue/job queue based on distributed message passing.
- [rq ![GitHub Repo Stars](https://img.shields.io/github/stars/rq/rq) ![GitHub last commit](https://img.shields.io/github/last-commit/rq/rq)](https://github.com/rq/rq) - Simple job queues for Python.
- [dramatiq ![GitHub Repo Stars](https://img.shields.io/github/stars/Bogdanp/dramatiq) ![GitHub last commit](https://img.shields.io/github/last-commit/Bogdanp/dramatiq)](https://github.com/Bogdanp/dramatiq) - A fast and reliable background task processing library for Python 3.
- [huey ![GitHub Repo Stars](https://img.shields.io/github/stars/coleifer/huey) ![GitHub last commit](https://img.shields.io/github/last-commit/coleifer/huey)](https://github.com/coleifer/huey) - Little multi-threaded task queue.
- [taskiq ![GitHub Repo Stars](https://img.shields.io/github/stars/taskiq-python/taskiq) ![GitHub last commit](https://img.shields.io/github/last-commit/taskiq-python/taskiq)](https://github.com/taskiq-python/taskiq) - Distributed task queue with native asyncio support and pluggable brokers.

### Messaging

_Libraries for working with message brokers and event streaming._

- [confluent-kafka ![GitHub Repo Stars](https://img.shields.io/github/stars/confluentinc/confluent-kafka-python) ![GitHub last commit](https://img.shields.io/github/last-commit/confluentinc/confluent-kafka-python)](https://github.com/confluentinc/confluent-kafka-python) - Confluent's Python client for Apache Kafka, built on librdkafka.
- [pika ![GitHub Repo Stars](https://img.shields.io/github/stars/pika/pika) ![GitHub last commit](https://img.shields.io/github/last-commit/pika/pika)](https://github.com/pika/pika) - Pure-Python RabbitMQ/AMQP 0-9-1 client library.
- [paho-mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/eclipse-paho/paho.mqtt.python) ![GitHub last commit](https://img.shields.io/github/last-commit/eclipse-paho/paho.mqtt.python)](https://github.com/eclipse-paho/paho.mqtt.python) - The Eclipse Paho MQTT client for Python.
- [faststream ![GitHub Repo Stars](https://img.shields.io/github/stars/ag2ai/faststream) ![GitHub last commit](https://img.shields.io/github/last-commit/ag2ai/faststream)](https://github.com/ag2ai/faststream) - A framework for building asynchronous services over Apache Kafka, RabbitMQ, NATS, MQTT and Redis.

### Job Schedulers

_Libraries for scheduling jobs._

- Task Scheduling
  - [apscheduler ![GitHub Repo Stars](https://img.shields.io/github/stars/agronholm/apscheduler) ![GitHub last commit](https://img.shields.io/github/last-commit/agronholm/apscheduler)](https://github.com/agronholm/apscheduler) - A light but powerful in-process task scheduler that lets you schedule functions.
  - [schedule ![GitHub Repo Stars](https://img.shields.io/github/stars/dbader/schedule) ![GitHub last commit](https://img.shields.io/github/last-commit/dbader/schedule)](https://github.com/dbader/schedule) - Python job scheduling for humans.
- Workflow Orchestration
  - [apache-airflow ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/airflow) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/airflow)](https://github.com/apache/airflow) - Airflow is a platform to programmatically author, schedule and monitor workflows.
  - [prefect ![GitHub Repo Stars](https://img.shields.io/github/stars/PrefectHQ/prefect) ![GitHub last commit](https://img.shields.io/github/last-commit/PrefectHQ/prefect)](https://github.com/PrefectHQ/prefect) - A modern workflow orchestration framework that makes it easy to build, schedule and monitor robust data pipelines.
  - [dagster ![GitHub Repo Stars](https://img.shields.io/github/stars/dagster-io/dagster) ![GitHub last commit](https://img.shields.io/github/last-commit/dagster-io/dagster)](https://github.com/dagster-io/dagster) - An orchestration platform for the development, production, and observation of data assets.

### Logging

_Libraries for generating and working with logs._

- [logging](https://docs.python.org/3/library/logging.html) - (Python standard library) Logging facility for Python.
- [structlog ![GitHub Repo Stars](https://img.shields.io/github/stars/hynek/structlog) ![GitHub last commit](https://img.shields.io/github/last-commit/hynek/structlog)](https://github.com/hynek/structlog) - Structured logging made easy.
- [loguru ![GitHub Repo Stars](https://img.shields.io/github/stars/Delgan/loguru) ![GitHub last commit](https://img.shields.io/github/last-commit/Delgan/loguru)](https://github.com/Delgan/loguru) - Library which aims to bring enjoyable logging in Python.

### Network Virtualization

_Tools and libraries for Virtual Networking and SDN (Software Defined Networking)._

- [scapy ![GitHub Repo Stars](https://img.shields.io/github/stars/secdev/scapy) ![GitHub last commit](https://img.shields.io/github/last-commit/secdev/scapy)](https://github.com/secdev/scapy) - A brilliant packet manipulation library.
- [napalm ![GitHub Repo Stars](https://img.shields.io/github/stars/napalm-automation/napalm) ![GitHub last commit](https://img.shields.io/github/last-commit/napalm-automation/napalm)](https://github.com/napalm-automation/napalm) - Cross-vendor API to manipulate network devices.

**CLI & GUI**

### CLI Development

_Libraries for building command-line applications._

- CLI Development
  - [argparse](https://docs.python.org/3/library/argparse.html) - (Python standard library) Command-line option and argument parsing.
  - [click ![GitHub Repo Stars](https://img.shields.io/github/stars/pallets/click) ![GitHub last commit](https://img.shields.io/github/last-commit/pallets/click)](https://github.com/pallets/click/) - A package for creating beautiful command line interfaces in a composable way.
  - [typer ![GitHub Repo Stars](https://img.shields.io/github/stars/fastapi/typer) ![GitHub last commit](https://img.shields.io/github/last-commit/fastapi/typer)](https://github.com/fastapi/typer) - Modern CLI framework that uses Python type hints. Built on Click and Pydantic.
  - [prompt_toolkit ![GitHub Repo Stars](https://img.shields.io/github/stars/prompt-toolkit/python-prompt-toolkit) ![GitHub last commit](https://img.shields.io/github/last-commit/prompt-toolkit/python-prompt-toolkit)](https://github.com/prompt-toolkit/python-prompt-toolkit) - A library for building powerful interactive command lines.
  - [fire ![GitHub Repo Stars](https://img.shields.io/github/stars/google/python-fire) ![GitHub last commit](https://img.shields.io/github/last-commit/google/python-fire)](https://github.com/google/python-fire) - A library for creating command line interfaces from absolutely any Python object.
- Terminal Rendering
  - [tqdm ![GitHub Repo Stars](https://img.shields.io/github/stars/tqdm/tqdm) ![GitHub last commit](https://img.shields.io/github/last-commit/tqdm/tqdm)](https://github.com/tqdm/tqdm) - Fast, extensible progress bar for loops and CLI.
  - [rich ![GitHub Repo Stars](https://img.shields.io/github/stars/Textualize/rich) ![GitHub last commit](https://img.shields.io/github/last-commit/Textualize/rich)](https://github.com/Textualize/rich) - Python library for rich text and beautiful formatting in the terminal. Also provides a great `RichHandler` log handler.
  - [colorama ![GitHub Repo Stars](https://img.shields.io/github/stars/tartley/colorama) ![GitHub last commit](https://img.shields.io/github/last-commit/tartley/colorama)](https://github.com/tartley/colorama) - Cross-platform colored terminal text.
  - [alive-progress ![GitHub Repo Stars](https://img.shields.io/github/stars/rsalmei/alive-progress) ![GitHub last commit](https://img.shields.io/github/last-commit/rsalmei/alive-progress)](https://github.com/rsalmei/alive-progress) - A new kind of Progress Bar, with real-time throughput, eta and very cool animations.
- TUI Frameworks
  - [textual ![GitHub Repo Stars](https://img.shields.io/github/stars/Textualize/textual) ![GitHub last commit](https://img.shields.io/github/last-commit/Textualize/textual)](https://github.com/Textualize/textual) - A framework for building interactive user interfaces that run in the terminal and the browser.
  - [urwid ![GitHub Repo Stars](https://img.shields.io/github/stars/urwid/urwid) ![GitHub last commit](https://img.shields.io/github/last-commit/urwid/urwid)](https://github.com/urwid/urwid) - A library for creating terminal GUI applications with strong support for widgets, events, rich colors, etc.
  - [asciimatics ![GitHub Repo Stars](https://img.shields.io/github/stars/peterbrittain/asciimatics) ![GitHub last commit](https://img.shields.io/github/last-commit/peterbrittain/asciimatics)](https://github.com/peterbrittain/asciimatics) - A package to create full-screen text UIs (from interactive forms to ASCII animations).

### CLI Tools

_Useful CLI-based tools._

- Database CLIs
  - [pgcli ![GitHub Repo Stars](https://img.shields.io/github/stars/dbcli/pgcli) ![GitHub last commit](https://img.shields.io/github/last-commit/dbcli/pgcli)](https://github.com/dbcli/pgcli) - PostgreSQL CLI with autocompletion and syntax highlighting.
  - [mycli ![GitHub Repo Stars](https://img.shields.io/github/stars/dbcli/mycli) ![GitHub last commit](https://img.shields.io/github/last-commit/dbcli/mycli)](https://github.com/dbcli/mycli) - MySQL CLI with autocompletion and syntax highlighting.
  - [litecli ![GitHub Repo Stars](https://img.shields.io/github/stars/dbcli/litecli) ![GitHub last commit](https://img.shields.io/github/last-commit/dbcli/litecli)](https://github.com/dbcli/litecli) - SQLite CLI with autocompletion and syntax highlighting.
  - [iredis ![GitHub Repo Stars](https://img.shields.io/github/stars/laixintao/iredis) ![GitHub last commit](https://img.shields.io/github/last-commit/laixintao/iredis)](https://github.com/laixintao/iredis) - Redis CLI with autocompletion and syntax highlighting.
- Downloaders
  - [yt-dlp ![GitHub Repo Stars](https://img.shields.io/github/stars/yt-dlp/yt-dlp) ![GitHub last commit](https://img.shields.io/github/last-commit/yt-dlp/yt-dlp)](https://github.com/yt-dlp/yt-dlp) - A command-line program to download videos from YouTube and other video sites, a fork of youtube-dl.
- HTTP Clients
  - [httpie ![GitHub Repo Stars](https://img.shields.io/github/stars/httpie/cli) ![GitHub last commit](https://img.shields.io/github/last-commit/httpie/cli)](https://github.com/httpie/cli) - A command line HTTP client, a user-friendly cURL replacement.
- Project Scaffolding
  - [cookiecutter ![GitHub Repo Stars](https://img.shields.io/github/stars/cookiecutter/cookiecutter) ![GitHub last commit](https://img.shields.io/github/last-commit/cookiecutter/cookiecutter)](https://github.com/cookiecutter/cookiecutter) - A command-line utility that creates projects from cookiecutters (project templates).
  - [copier ![GitHub Repo Stars](https://img.shields.io/github/stars/copier-org/copier) ![GitHub last commit](https://img.shields.io/github/last-commit/copier-org/copier)](https://github.com/copier-org/copier) - A library and command-line utility for rendering projects templates.
- Shells
  - [xonsh ![GitHub Repo Stars](https://img.shields.io/github/stars/xonsh/xonsh) ![GitHub last commit](https://img.shields.io/github/last-commit/xonsh/xonsh)](https://github.com/xonsh/xonsh/) - A Python-powered shell. Full-featured and cross-platform.
- Terminal Workflow
  - [tmuxp ![GitHub Repo Stars](https://img.shields.io/github/stars/tmux-python/tmuxp) ![GitHub last commit](https://img.shields.io/github/last-commit/tmux-python/tmuxp)](https://github.com/tmux-python/tmuxp) - A [tmux ![GitHub Repo Stars](https://img.shields.io/github/stars/tmux/tmux) ![GitHub last commit](https://img.shields.io/github/last-commit/tmux/tmux)](https://github.com/tmux/tmux) session manager.

### GUI Development

_Libraries for working with graphical user interface applications._

- Desktop
  - [pygobject ![GitHub Repo Stars](https://img.shields.io/github/stars/GNOME/pygobject) ![GitHub last commit](https://img.shields.io/github/last-commit/GNOME/pygobject)](https://github.com/GNOME/pygobject) - Python Bindings for GLib/GObject/GIO/GTK+ (GTK+3).
  - [wxPython ![GitHub Repo Stars](https://img.shields.io/github/stars/wxWidgets/Phoenix) ![GitHub last commit](https://img.shields.io/github/last-commit/wxWidgets/Phoenix)](https://github.com/wxWidgets/Phoenix) - A blending of the wxWidgets C++ class library with the Python.
  - [kivy ![GitHub Repo Stars](https://img.shields.io/github/stars/kivy/kivy) ![GitHub last commit](https://img.shields.io/github/last-commit/kivy/kivy)](https://github.com/kivy/kivy) - A library for creating NUI applications, running on Windows, Linux, Mac OS X, Android and iOS.
  - [dearpygui ![GitHub Repo Stars](https://img.shields.io/github/stars/hoffstadt/DearPyGui) ![GitHub last commit](https://img.shields.io/github/last-commit/hoffstadt/DearPyGui)](https://github.com/hoffstadt/DearPyGui) - A Simple GPU accelerated Python GUI framework
  - [toga ![GitHub Repo Stars](https://img.shields.io/github/stars/beeware/toga) ![GitHub last commit](https://img.shields.io/github/last-commit/beeware/toga)](https://github.com/beeware/toga) - A Python native, OS native GUI toolkit.
- Qt
  - [PySide6 ![GitHub Repo Stars](https://img.shields.io/github/stars/pyside/pyside-setup) ![GitHub last commit](https://img.shields.io/github/last-commit/pyside/pyside-setup)](https://github.com/pyside/pyside-setup) - Qt for Python offers the official Python bindings for [Qt](https://www.qt.io/), same as PyQt6 but it's the official binding with different licensing.
  - [PyQt6](https://www.riverbankcomputing.com/static/Docs/PyQt6/) - Python bindings for the [Qt](https://www.qt.io/) cross-platform application and UI framework.
- Tkinter
  - [tkinter](https://docs.python.org/3/library/tkinter.html) - (Python standard library) The standard Python interface to the Tcl/Tk GUI toolkit.
  - [customtkinter ![GitHub Repo Stars](https://img.shields.io/github/stars/tomschimansky/customtkinter) ![GitHub last commit](https://img.shields.io/github/last-commit/tomschimansky/customtkinter)](https://github.com/tomschimansky/customtkinter) - A modern and customizable python UI-library based on Tkinter.
  - [tkdesigner ![GitHub Repo Stars](https://img.shields.io/github/stars/ParthJadhav/Tkinter-Designer) ![GitHub last commit](https://img.shields.io/github/last-commit/ParthJadhav/Tkinter-Designer)](https://github.com/ParthJadhav/Tkinter-Designer) - Generates Tkinter interfaces from Figma designs using the Figma API.
- Web-based
  - [pywebview ![GitHub Repo Stars](https://img.shields.io/github/stars/r0x0r/pywebview) ![GitHub last commit](https://img.shields.io/github/last-commit/r0x0r/pywebview)](https://github.com/r0x0r/pywebview/) - A lightweight cross-platform native wrapper around a webview component.
  - [nicegui ![GitHub Repo Stars](https://img.shields.io/github/stars/zauberzeug/nicegui) ![GitHub last commit](https://img.shields.io/github/last-commit/zauberzeug/nicegui)](https://github.com/zauberzeug/nicegui) - An easy-to-use, Python-based UI framework, which shows up in your web browser.
  - [flet ![GitHub Repo Stars](https://img.shields.io/github/stars/flet-dev/flet) ![GitHub last commit](https://img.shields.io/github/last-commit/flet-dev/flet)](https://github.com/flet-dev/flet) - Cross-platform GUI framework for building modern apps in pure Python.
- Wrappers
  - [gooey ![GitHub Repo Stars](https://img.shields.io/github/stars/chriskiehl/Gooey) ![GitHub last commit](https://img.shields.io/github/last-commit/chriskiehl/Gooey)](https://github.com/chriskiehl/Gooey) - Turn command line programs into a full GUI application with one line.

**Text & Documents**

### Text Processing

_Libraries for parsing and manipulating plain texts._

- Encoding and Unicode
  - [charset-normalizer ![GitHub Repo Stars](https://img.shields.io/github/stars/jawah/charset_normalizer) ![GitHub last commit](https://img.shields.io/github/last-commit/jawah/charset_normalizer)](https://github.com/jawah/charset_normalizer) - Universal character encoding detector, the default of the requests ecosystem.
  - [chardet ![GitHub Repo Stars](https://img.shields.io/github/stars/chardet/chardet) ![GitHub last commit](https://img.shields.io/github/last-commit/chardet/chardet)](https://github.com/chardet/chardet) - Python character encoding detector.
  - [ftfy ![GitHub Repo Stars](https://img.shields.io/github/stars/rspeer/python-ftfy) ![GitHub last commit](https://img.shields.io/github/last-commit/rspeer/python-ftfy)](https://github.com/rspeer/python-ftfy) - Makes Unicode text less broken and more consistent automagically.
- Fuzzy Matching
  - [rapidfuzz ![GitHub Repo Stars](https://img.shields.io/github/stars/rapidfuzz/RapidFuzz) ![GitHub last commit](https://img.shields.io/github/last-commit/rapidfuzz/RapidFuzz)](https://github.com/rapidfuzz/RapidFuzz) - Rapid fuzzy string matching using various string metrics, with a C++ core.
- General
  - [difflib](https://docs.python.org/3/library/difflib.html) - (Python standard library) Helpers for computing deltas.
  - [pyfiglet ![GitHub Repo Stars](https://img.shields.io/github/stars/pwaller/pyfiglet) ![GitHub last commit](https://img.shields.io/github/last-commit/pwaller/pyfiglet)](https://github.com/pwaller/pyfiglet) - An implementation of figlet written in Python.
- Internationalization
  - [babel ![GitHub Repo Stars](https://img.shields.io/github/stars/python-babel/babel) ![GitHub last commit](https://img.shields.io/github/last-commit/python-babel/babel)](https://github.com/python-babel/babel) - An internationalization library for Python.
- Parser
  - [pygments ![GitHub Repo Stars](https://img.shields.io/github/stars/pygments/pygments) ![GitHub last commit](https://img.shields.io/github/last-commit/pygments/pygments)](https://github.com/pygments/pygments) - A generic syntax highlighter.
  - [pyparsing ![GitHub Repo Stars](https://img.shields.io/github/stars/pyparsing/pyparsing) ![GitHub last commit](https://img.shields.io/github/last-commit/pyparsing/pyparsing)](https://github.com/pyparsing/pyparsing) - A general purpose framework for generating parsers.
  - [sqlparse ![GitHub Repo Stars](https://img.shields.io/github/stars/andialbrecht/sqlparse) ![GitHub last commit](https://img.shields.io/github/last-commit/andialbrecht/sqlparse)](https://github.com/andialbrecht/sqlparse) - A non-validating SQL parser.
  - [phonenumbers ![GitHub Repo Stars](https://img.shields.io/github/stars/daviddrysdale/python-phonenumbers) ![GitHub last commit](https://img.shields.io/github/last-commit/daviddrysdale/python-phonenumbers)](https://github.com/daviddrysdale/python-phonenumbers) - Parsing, formatting, storing and validating international phone numbers.
  - [parsy ![GitHub Repo Stars](https://img.shields.io/github/stars/python-parsy/parsy) ![GitHub last commit](https://img.shields.io/github/last-commit/python-parsy/parsy)](https://github.com/python-parsy/parsy) - Easy, generic parser combinator library for creating parsers.
- Transliteration and Slugs
  - [python-slugify ![GitHub Repo Stars](https://img.shields.io/github/stars/un33k/python-slugify) ![GitHub last commit](https://img.shields.io/github/last-commit/un33k/python-slugify)](https://github.com/un33k/python-slugify) - A Python slugify library that translates unicode to ASCII.
  - [unidecode ![GitHub Repo Stars](https://img.shields.io/github/stars/avian2/unidecode) ![GitHub last commit](https://img.shields.io/github/last-commit/avian2/unidecode)](https://github.com/avian2/unidecode) - ASCII transliterations of Unicode text.
- Unique identifiers
  - [shortuuid ![GitHub Repo Stars](https://img.shields.io/github/stars/skorokithakis/shortuuid) ![GitHub last commit](https://img.shields.io/github/last-commit/skorokithakis/shortuuid)](https://github.com/skorokithakis/shortuuid) - A generator library for concise, unambiguous and URL-safe UUIDs.
  - [sqids ![GitHub Repo Stars](https://img.shields.io/github/stars/sqids/sqids-python) ![GitHub last commit](https://img.shields.io/github/last-commit/sqids/sqids-python)](https://github.com/sqids/sqids-python) - A library for generating short unique IDs from numbers.

### HTML Manipulation

_Libraries for working with HTML and XML._

- [beautifulsoup4](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) - Providing Pythonic idioms for iterating, searching, and modifying HTML or XML.
- [lxml ![GitHub Repo Stars](https://img.shields.io/github/stars/lxml/lxml) ![GitHub last commit](https://img.shields.io/github/last-commit/lxml/lxml)](https://github.com/lxml/lxml) - A very fast, easy-to-use and versatile library for handling HTML and XML.
- [xmltodict ![GitHub Repo Stars](https://img.shields.io/github/stars/martinblech/xmltodict) ![GitHub last commit](https://img.shields.io/github/last-commit/martinblech/xmltodict)](https://github.com/martinblech/xmltodict) - Working with XML feel like you are working with JSON.
- [markupsafe ![GitHub Repo Stars](https://img.shields.io/github/stars/pallets/markupsafe) ![GitHub last commit](https://img.shields.io/github/last-commit/pallets/markupsafe)](https://github.com/pallets/markupsafe) - Implements a XML/HTML/XHTML Markup safe string for Python.
- [justhtml ![GitHub Repo Stars](https://img.shields.io/github/stars/EmilStenstrom/justhtml) ![GitHub last commit](https://img.shields.io/github/last-commit/EmilStenstrom/justhtml)](https://github.com/EmilStenstrom/justhtml/) - A pure Python HTML5 parser that just works.

### File Format Processing

_Libraries for parsing and manipulating specific text formats._

- General
  - [pyelftools ![GitHub Repo Stars](https://img.shields.io/github/stars/eliben/pyelftools) ![GitHub last commit](https://img.shields.io/github/last-commit/eliben/pyelftools)](https://github.com/eliben/pyelftools) - Parsing and analyzing ELF files and DWARF debugging information.
  - [tablib ![GitHub Repo Stars](https://img.shields.io/github/stars/jazzband/tablib) ![GitHub last commit](https://img.shields.io/github/last-commit/jazzband/tablib)](https://github.com/jazzband/tablib) - A module for Tabular Datasets in XLS, CSV, JSON, YAML.
- File Conversion
  - [markitdown ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/markitdown) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/markitdown)](https://github.com/microsoft/markitdown) - Python tool for converting files and office documents to Markdown.
  - [docling ![GitHub Repo Stars](https://img.shields.io/github/stars/docling-project/docling) ![GitHub last commit](https://img.shields.io/github/last-commit/docling-project/docling)](https://github.com/docling-project/docling) - Library for converting documents into structured data.
- Excel
  - [openpyxl](https://openpyxl.readthedocs.io/en/stable/) - A library for reading and writing Excel 2010 xlsx/xlsm/xltx/xltm files.
  - [xlsxwriter ![GitHub Repo Stars](https://img.shields.io/github/stars/jmcnamara/XlsxWriter) ![GitHub last commit](https://img.shields.io/github/last-commit/jmcnamara/XlsxWriter)](https://github.com/jmcnamara/XlsxWriter) - A Python module for creating Excel .xlsx files.
- Word
  - [python-docx ![GitHub Repo Stars](https://img.shields.io/github/stars/python-openxml/python-docx) ![GitHub last commit](https://img.shields.io/github/last-commit/python-openxml/python-docx)](https://github.com/python-openxml/python-docx) - Reads, queries and modifies Microsoft Word 2007/2008 docx files.
- PowerPoint
  - [python-pptx ![GitHub Repo Stars](https://img.shields.io/github/stars/scanny/python-pptx) ![GitHub last commit](https://img.shields.io/github/last-commit/scanny/python-pptx)](https://github.com/scanny/python-pptx) - Python library for creating and updating PowerPoint (.pptx) files.
- PDF
  - [pypdf ![GitHub Repo Stars](https://img.shields.io/github/stars/py-pdf/pypdf) ![GitHub last commit](https://img.shields.io/github/last-commit/py-pdf/pypdf)](https://github.com/py-pdf/pypdf) - A library capable of splitting, merging, cropping, and transforming PDF pages.
  - [reportlab](https://www.reportlab.com/opensource/) - Allowing Rapid creation of rich PDF documents.
  - [pdfminer.six ![GitHub Repo Stars](https://img.shields.io/github/stars/pdfminer/pdfminer.six) ![GitHub last commit](https://img.shields.io/github/last-commit/pdfminer/pdfminer.six)](https://github.com/pdfminer/pdfminer.six) - Pdfminer.six is a community maintained fork of the original PDFMiner.
- HTML-to-PDF
  - [weasyprint ![GitHub Repo Stars](https://img.shields.io/github/stars/Kozea/WeasyPrint) ![GitHub last commit](https://img.shields.io/github/last-commit/Kozea/WeasyPrint)](https://github.com/Kozea/WeasyPrint) - A visual rendering engine for HTML and CSS that can export to PDF.
- Markdown
  - [markdown-it-py ![GitHub Repo Stars](https://img.shields.io/github/stars/executablebooks/markdown-it-py) ![GitHub last commit](https://img.shields.io/github/last-commit/executablebooks/markdown-it-py)](https://github.com/executablebooks/markdown-it-py) - Markdown parser with 100% CommonMark support, extensions, and syntax plugins.
  - [markdown ![GitHub Repo Stars](https://img.shields.io/github/stars/Python-Markdown/markdown) ![GitHub last commit](https://img.shields.io/github/last-commit/Python-Markdown/markdown)](https://github.com/Python-Markdown/markdown) - A Python implementation of John Gruber’s Markdown.
  - [mistune ![GitHub Repo Stars](https://img.shields.io/github/stars/lepture/mistune) ![GitHub last commit](https://img.shields.io/github/last-commit/lepture/mistune)](https://github.com/lepture/mistune) - Fastest and full featured pure Python parsers of Markdown.
- Data Formats
  - [tomllib](https://docs.python.org/3/library/tomllib.html) - (Python standard library) Parse TOML files.
  - [pyyaml ![GitHub Repo Stars](https://img.shields.io/github/stars/yaml/pyyaml) ![GitHub last commit](https://img.shields.io/github/last-commit/yaml/pyyaml)](https://github.com/yaml/pyyaml) - YAML implementations for Python.

### File Manipulation

_Libraries for file manipulation._

- [mimetypes](https://docs.python.org/3/library/mimetypes.html) - (Python standard library) Map filenames to MIME types.
- [pathlib](https://docs.python.org/3/library/pathlib.html) - (Python standard library) A cross-platform, object-oriented path library.
- [watchfiles ![GitHub Repo Stars](https://img.shields.io/github/stars/samuelcolvin/watchfiles) ![GitHub last commit](https://img.shields.io/github/last-commit/samuelcolvin/watchfiles)](https://github.com/samuelcolvin/watchfiles) - Simple, modern and fast file watching and code reload in python.
- [watchdog ![GitHub Repo Stars](https://img.shields.io/github/stars/gorakhargosh/watchdog) ![GitHub last commit](https://img.shields.io/github/last-commit/gorakhargosh/watchdog)](https://github.com/gorakhargosh/watchdog) - API and shell utilities to monitor file system events.
- [python-magic ![GitHub Repo Stars](https://img.shields.io/github/stars/ahupp/python-magic) ![GitHub last commit](https://img.shields.io/github/last-commit/ahupp/python-magic)](https://github.com/ahupp/python-magic) - A Python interface to the libmagic file type identification library.

**Media**

### Image Processing

_Libraries for manipulating images._

- Barcodes and QR Codes
  - [qrcode ![GitHub Repo Stars](https://img.shields.io/github/stars/lincolnloop/python-qrcode) ![GitHub last commit](https://img.shields.io/github/last-commit/lincolnloop/python-qrcode)](https://github.com/lincolnloop/python-qrcode) - A pure Python QR Code generator.
  - [python-barcode ![GitHub Repo Stars](https://img.shields.io/github/stars/WhyNotHugo/python-barcode) ![GitHub last commit](https://img.shields.io/github/last-commit/WhyNotHugo/python-barcode)](https://github.com/WhyNotHugo/python-barcode) - Create barcodes in Python with no extra dependencies.
- General
  - [pillow ![GitHub Repo Stars](https://img.shields.io/github/stars/python-pillow/Pillow) ![GitHub last commit](https://img.shields.io/github/last-commit/python-pillow/Pillow)](https://github.com/python-pillow/Pillow) - Pillow is the friendly [PIL](https://www.pythonware.com/products/pil/) fork.
  - [scikit-image ![GitHub Repo Stars](https://img.shields.io/github/stars/scikit-image/scikit-image) ![GitHub last commit](https://img.shields.io/github/last-commit/scikit-image/scikit-image)](https://github.com/scikit-image/scikit-image) - A Python library for (scientific) image processing.
  - [rembg ![GitHub Repo Stars](https://img.shields.io/github/stars/danielgatis/rembg) ![GitHub last commit](https://img.shields.io/github/last-commit/danielgatis/rembg)](https://github.com/danielgatis/rembg) - A tool to remove image backgrounds.
  - [wand ![GitHub Repo Stars](https://img.shields.io/github/stars/emcconville/wand) ![GitHub last commit](https://img.shields.io/github/last-commit/emcconville/wand)](https://github.com/emcconville/wand) - Python bindings for [MagickWand](https://www.imagemagick.org/script/magick-wand.php), C API for ImageMagick.
  - [pyvips ![GitHub Repo Stars](https://img.shields.io/github/stars/libvips/pyvips) ![GitHub last commit](https://img.shields.io/github/last-commit/libvips/pyvips)](https://github.com/libvips/pyvips) - A fast image processing library with low memory needs.
- Image Serving
  - [thumbor ![GitHub Repo Stars](https://img.shields.io/github/stars/thumbor/thumbor) ![GitHub last commit](https://img.shields.io/github/last-commit/thumbor/thumbor)](https://github.com/thumbor/thumbor) - A smart imaging service. It enables on-demand crop, re-sizing and flipping of images.

### Audio & Video Processing

_Libraries for manipulating audio, video, and their metadata._

- Audio
  - [pydub ![GitHub Repo Stars](https://img.shields.io/github/stars/jiaaro/pydub) ![GitHub last commit](https://img.shields.io/github/last-commit/jiaaro/pydub)](https://github.com/jiaaro/pydub) - Manipulate audio with a simple and easy high level interface.
  - [librosa ![GitHub Repo Stars](https://img.shields.io/github/stars/librosa/librosa) ![GitHub last commit](https://img.shields.io/github/last-commit/librosa/librosa)](https://github.com/librosa/librosa) - Python library for audio and music analysis.
- Video
  - [moviepy ![GitHub Repo Stars](https://img.shields.io/github/stars/Zulko/moviepy) ![GitHub last commit](https://img.shields.io/github/last-commit/Zulko/moviepy)](https://github.com/Zulko/moviepy) - A module for script-based movie editing with many formats, including animated GIFs.
  - [vidgear ![GitHub Repo Stars](https://img.shields.io/github/stars/abhiTronix/vidgear) ![GitHub last commit](https://img.shields.io/github/last-commit/abhiTronix/vidgear)](https://github.com/abhiTronix/vidgear) - Most Powerful multi-threaded Video Processing framework.
- Metadata
  - [mutagen ![GitHub Repo Stars](https://img.shields.io/github/stars/quodlibet/mutagen) ![GitHub last commit](https://img.shields.io/github/last-commit/quodlibet/mutagen)](https://github.com/quodlibet/mutagen) - A Python module to handle audio metadata.
  - [tinytag ![GitHub Repo Stars](https://img.shields.io/github/stars/tinytag/tinytag) ![GitHub last commit](https://img.shields.io/github/last-commit/tinytag/tinytag)](https://github.com/tinytag/tinytag) - A library for reading music meta data of MP3, OGG, FLAC and Wave files.
  - [beets ![GitHub Repo Stars](https://img.shields.io/github/stars/beetbox/beets) ![GitHub last commit](https://img.shields.io/github/last-commit/beetbox/beets)](https://github.com/beetbox/beets) - A music library manager and [MusicBrainz](https://musicbrainz.org/) tagger.

### Game Development

_Awesome game development libraries._

- 3D Engines
  - [panda3d ![GitHub Repo Stars](https://img.shields.io/github/stars/panda3d/panda3d) ![GitHub last commit](https://img.shields.io/github/last-commit/panda3d/panda3d)](https://github.com/panda3d/panda3d) - 3D game engine developed by Disney.
- Game Frameworks
  - [pygame ![GitHub Repo Stars](https://img.shields.io/github/stars/pygame/pygame) ![GitHub last commit](https://img.shields.io/github/last-commit/pygame/pygame)](https://github.com/pygame/pygame) - Pygame is a set of Python modules designed for writing games.
  - [pyglet ![GitHub Repo Stars](https://img.shields.io/github/stars/pyglet/pyglet) ![GitHub last commit](https://img.shields.io/github/last-commit/pyglet/pyglet)](https://github.com/pyglet/pyglet) - A cross-platform windowing and multimedia library for Python.
  - [pygame-ce ![GitHub Repo Stars](https://img.shields.io/github/stars/pygame-community/pygame-ce) ![GitHub last commit](https://img.shields.io/github/last-commit/pygame-community/pygame-ce)](https://github.com/pygame-community/pygame-ce) - An actively developed drop-in replacement with new features and performance improvements ([pygame ![GitHub Repo Stars](https://img.shields.io/github/stars/pygame/pygame) ![GitHub last commit](https://img.shields.io/github/last-commit/pygame/pygame)](https://github.com/pygame/pygame) fork).
  - [arcade ![GitHub Repo Stars](https://img.shields.io/github/stars/pythonarcade/arcade) ![GitHub last commit](https://img.shields.io/github/last-commit/pythonarcade/arcade)](https://github.com/pythonarcade/arcade) - Arcade is a modern Python framework for crafting games with compelling graphics and sound.
- Visual Novels
  - [renpy ![GitHub Repo Stars](https://img.shields.io/github/stars/renpy/renpy) ![GitHub last commit](https://img.shields.io/github/last-commit/renpy/renpy)](https://github.com/renpy/renpy) - A Visual Novel engine.

**Python Language**

### Implementations

_Implementations of Python._

- [cpython ![GitHub Repo Stars](https://img.shields.io/github/stars/python/cpython) ![GitHub last commit](https://img.shields.io/github/last-commit/python/cpython)](https://github.com/python/cpython) - Default, most widely used implementation of the Python programming language written in C.
- [micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/micropython/micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython/micropython)](https://github.com/micropython/micropython) - A lean and efficient Python programming language implementation.
- [pypy ![GitHub Repo Stars](https://img.shields.io/github/stars/pypy/pypy) ![GitHub last commit](https://img.shields.io/github/last-commit/pypy/pypy)](https://github.com/pypy/pypy) - A very fast and compliant implementation of the Python language.
- [Cython ![GitHub Repo Stars](https://img.shields.io/github/stars/cython/cython) ![GitHub last commit](https://img.shields.io/github/last-commit/cython/cython)](https://github.com/cython/cython) - Optimizing Static Compiler for Python.
- [pyodide ![GitHub Repo Stars](https://img.shields.io/github/stars/pyodide/pyodide) ![GitHub last commit](https://img.shields.io/github/last-commit/pyodide/pyodide)](https://github.com/pyodide/pyodide) - Python distribution for the browser and Node.js based on WebAssembly.

### Built-in Classes Enhancement

_Libraries for enhancing Python built-in classes._

- [attrs ![GitHub Repo Stars](https://img.shields.io/github/stars/python-attrs/attrs) ![GitHub last commit](https://img.shields.io/github/last-commit/python-attrs/attrs)](https://github.com/python-attrs/attrs) - Replacement for `__init__`, `__eq__`, `__repr__`, etc. boilerplate in class definitions.
- [bidict ![GitHub Repo Stars](https://img.shields.io/github/stars/jab/bidict) ![GitHub last commit](https://img.shields.io/github/last-commit/jab/bidict)](https://github.com/jab/bidict) - Efficient, Pythonic bidirectional map data structures and related functionality.
- [uuid-utils ![GitHub Repo Stars](https://img.shields.io/github/stars/aminalaee/uuid-utils) ![GitHub last commit](https://img.shields.io/github/last-commit/aminalaee/uuid-utils)](https://github.com/aminalaee/uuid-utils) - A fast, Rust-backed drop-in replacement for Python's built-in `uuid` module, supporting RFC 9562 (UUIDv6, UUIDv7, and UUIDv8).
- [python-box ![GitHub Repo Stars](https://img.shields.io/github/stars/cdgriffith/Box) ![GitHub last commit](https://img.shields.io/github/last-commit/cdgriffith/Box)](https://github.com/cdgriffith/Box) - Python dictionaries with advanced dot notation access.

### Functional Programming

_Functional Programming with Python._

- [functools](https://docs.python.org/3/library/functools.html) - (Python standard library) Higher-order functions and operations on callable objects.
- [more-itertools ![GitHub Repo Stars](https://img.shields.io/github/stars/more-itertools/more-itertools) ![GitHub last commit](https://img.shields.io/github/last-commit/more-itertools/more-itertools)](https://github.com/more-itertools/more-itertools) - More routines for operating on iterables, beyond `itertools`.
- [toolz ![GitHub Repo Stars](https://img.shields.io/github/stars/pytoolz/toolz) ![GitHub last commit](https://img.shields.io/github/last-commit/pytoolz/toolz)](https://github.com/pytoolz/toolz) - A collection of functional utilities for iterators, functions, and dictionaries. Also available as [cytoolz ![GitHub Repo Stars](https://img.shields.io/github/stars/pytoolz/cytoolz) ![GitHub last commit](https://img.shields.io/github/last-commit/pytoolz/cytoolz)](https://github.com/pytoolz/cytoolz/) for Cython-accelerated performance.
- [funcy ![GitHub Repo Stars](https://img.shields.io/github/stars/Suor/funcy) ![GitHub last commit](https://img.shields.io/github/last-commit/Suor/funcy)](https://github.com/Suor/funcy) - A fancy and practical functional tools.
- [returns ![GitHub Repo Stars](https://img.shields.io/github/stars/dry-python/returns) ![GitHub last commit](https://img.shields.io/github/last-commit/dry-python/returns)](https://github.com/dry-python/returns) - A set of type-safe monads, transformers, and composition utilities.

### Asynchronous Programming

_Libraries for asynchronous, concurrent and parallel execution. Also see [awesome-asyncio ![GitHub Repo Stars](https://img.shields.io/github/stars/timofurrer/awesome-asyncio) ![GitHub last commit](https://img.shields.io/github/last-commit/timofurrer/awesome-asyncio)](https://github.com/timofurrer/awesome-asyncio)._

- Async I/O
  - [asyncio](https://docs.python.org/3/library/asyncio.html) - (Python standard library) Asynchronous I/O, event loop, coroutines and tasks.
    - [awesome-asyncio ![GitHub Repo Stars](https://img.shields.io/github/stars/timofurrer/awesome-asyncio) ![GitHub last commit](https://img.shields.io/github/last-commit/timofurrer/awesome-asyncio)](https://github.com/timofurrer/awesome-asyncio)
  - [anyio ![GitHub Repo Stars](https://img.shields.io/github/stars/agronholm/anyio) ![GitHub last commit](https://img.shields.io/github/last-commit/agronholm/anyio)](https://github.com/agronholm/anyio) - A high-level async concurrency and networking framework that works on top of asyncio or trio.
  - [uvloop ![GitHub Repo Stars](https://img.shields.io/github/stars/MagicStack/uvloop) ![GitHub last commit](https://img.shields.io/github/last-commit/MagicStack/uvloop)](https://github.com/MagicStack/uvloop) - Ultra fast asyncio event loop.
  - [trio ![GitHub Repo Stars](https://img.shields.io/github/stars/python-trio/trio) ![GitHub last commit](https://img.shields.io/github/last-commit/python-trio/trio)](https://github.com/python-trio/trio) - A friendly library for async concurrency and I/O.
  - [gevent ![GitHub Repo Stars](https://img.shields.io/github/stars/gevent/gevent) ![GitHub last commit](https://img.shields.io/github/last-commit/gevent/gevent)](https://github.com/gevent/gevent) - A coroutine-based Python networking library that uses [greenlet ![GitHub Repo Stars](https://img.shields.io/github/stars/python-greenlet/greenlet) ![GitHub last commit](https://img.shields.io/github/last-commit/python-greenlet/greenlet)](https://github.com/python-greenlet/greenlet).
  - [Twisted ![GitHub Repo Stars](https://img.shields.io/github/stars/twisted/twisted) ![GitHub last commit](https://img.shields.io/github/last-commit/twisted/twisted)](https://github.com/twisted/twisted) - An event-driven networking engine.
- Parallelism
  - [concurrent.futures](https://docs.python.org/3/library/concurrent.futures.html) - (Python standard library) A high-level interface for asynchronously executing callables.
  - [multiprocessing](https://docs.python.org/3/library/multiprocessing.html) - (Python standard library) Process-based parallelism.

### Date and Time

_Libraries for working with dates and times._

- [zoneinfo](https://docs.python.org/3/library/zoneinfo.html) - (Python standard library) IANA time zone support. Brings the [tz database](https://en.wikipedia.org/wiki/Tz_database) into Python.
- [python-dateutil ![GitHub Repo Stars](https://img.shields.io/github/stars/dateutil/dateutil) ![GitHub last commit](https://img.shields.io/github/last-commit/dateutil/dateutil)](https://github.com/dateutil/dateutil) - Extensions to the standard Python [datetime](https://docs.python.org/3/library/datetime.html) module.
- [dateparser ![GitHub Repo Stars](https://img.shields.io/github/stars/scrapinghub/dateparser) ![GitHub last commit](https://img.shields.io/github/last-commit/scrapinghub/dateparser)](https://github.com/scrapinghub/dateparser) - A Python parser for human-readable dates in dozens of languages.
- [pendulum ![GitHub Repo Stars](https://img.shields.io/github/stars/python-pendulum/pendulum) ![GitHub last commit](https://img.shields.io/github/last-commit/python-pendulum/pendulum)](https://github.com/python-pendulum/pendulum) - Python datetimes made easy.
- [whenever ![GitHub Repo Stars](https://img.shields.io/github/stars/ariebovenberg/whenever) ![GitHub last commit](https://img.shields.io/github/last-commit/ariebovenberg/whenever)](https://github.com/ariebovenberg/whenever) - A modern datetime library, type-safe and DST-safe, backed by Rust.

**Python Toolchain**

### Environment Management

_Libraries for Python version and virtual environment management._

- [virtualenv ![GitHub Repo Stars](https://img.shields.io/github/stars/pypa/virtualenv) ![GitHub last commit](https://img.shields.io/github/last-commit/pypa/virtualenv)](https://github.com/pypa/virtualenv) - A tool to create isolated Python environments.
- [uv ![GitHub Repo Stars](https://img.shields.io/github/stars/astral-sh/uv) ![GitHub last commit](https://img.shields.io/github/last-commit/astral-sh/uv)](https://github.com/astral-sh/uv) - An extremely fast Python version, package and project manager, written in Rust.
- [pyenv ![GitHub Repo Stars](https://img.shields.io/github/stars/pyenv/pyenv) ![GitHub last commit](https://img.shields.io/github/last-commit/pyenv/pyenv)](https://github.com/pyenv/pyenv) - Simple Python version management.

### Package Management

_Libraries for package and dependency management._

- Package Managers
  - [pip ![GitHub Repo Stars](https://img.shields.io/github/stars/pypa/pip) ![GitHub last commit](https://img.shields.io/github/last-commit/pypa/pip)](https://github.com/pypa/pip) - The package installer for Python.
  - [uv ![GitHub Repo Stars](https://img.shields.io/github/stars/astral-sh/uv) ![GitHub last commit](https://img.shields.io/github/last-commit/astral-sh/uv)](https://github.com/astral-sh/uv) - An extremely fast Python version, package and project manager, written in Rust.
  - [poetry ![GitHub Repo Stars](https://img.shields.io/github/stars/python-poetry/poetry) ![GitHub last commit](https://img.shields.io/github/last-commit/python-poetry/poetry)](https://github.com/python-poetry/poetry) - Python dependency management and packaging made easy.
  - [hatch ![GitHub Repo Stars](https://img.shields.io/github/stars/pypa/hatch) ![GitHub last commit](https://img.shields.io/github/last-commit/pypa/hatch)](https://github.com/pypa/hatch) - Modern, extensible Python project manager for environments, builds, and publishing.
  - [pipx ![GitHub Repo Stars](https://img.shields.io/github/stars/pypa/pipx) ![GitHub last commit](https://img.shields.io/github/last-commit/pypa/pipx)](https://github.com/pypa/pipx) - Install and Run Python Applications in Isolated Environments. Like `npx` in Node.js.
  - [conda ![GitHub Repo Stars](https://img.shields.io/github/stars/conda/conda) ![GitHub last commit](https://img.shields.io/github/last-commit/conda/conda)](https://github.com/conda/conda/) - Cross-platform, Python-agnostic binary package manager.
- Build Backends
  - [setuptools ![GitHub Repo Stars](https://img.shields.io/github/stars/pypa/setuptools) ![GitHub last commit](https://img.shields.io/github/last-commit/pypa/setuptools)](https://github.com/pypa/setuptools) - The historical and still most widely used pyproject build backend.
  - [hatchling ![GitHub Repo Stars](https://img.shields.io/github/stars/pypa/hatch) ![GitHub last commit](https://img.shields.io/github/last-commit/pypa/hatch)](https://github.com/pypa/hatch) - Modern, extensible build backend from the hatch project.
  - [uv-build ![GitHub Repo Stars](https://img.shields.io/github/stars/astral-sh/uv) ![GitHub last commit](https://img.shields.io/github/last-commit/astral-sh/uv)](https://github.com/astral-sh/uv) - uv's fast, minimal build backend for pure-Python projects.

### Package Repositories

_Local PyPI repository server and proxies._

- [bandersnatch ![GitHub Repo Stars](https://img.shields.io/github/stars/pypa/bandersnatch) ![GitHub last commit](https://img.shields.io/github/last-commit/pypa/bandersnatch)](https://github.com/pypa/bandersnatch/) - PyPI mirroring tool provided by Python Packaging Authority (PyPA).
- [devpi ![GitHub Repo Stars](https://img.shields.io/github/stars/devpi/devpi) ![GitHub last commit](https://img.shields.io/github/last-commit/devpi/devpi)](https://github.com/devpi/devpi) - PyPI server and packaging/testing/release tool.
- [warehouse ![GitHub Repo Stars](https://img.shields.io/github/stars/pypi/warehouse) ![GitHub last commit](https://img.shields.io/github/last-commit/pypi/warehouse)](https://github.com/pypi/warehouse) - Next generation Python Package Repository (PyPI).

### Distribution

_Libraries to create packaged executables for release distribution._

- Executables
  - [pyinstaller ![GitHub Repo Stars](https://img.shields.io/github/stars/pyinstaller/pyinstaller) ![GitHub last commit](https://img.shields.io/github/last-commit/pyinstaller/pyinstaller)](https://github.com/pyinstaller/pyinstaller) - Converts Python programs into stand-alone executables (cross-platform).
  - [Nuitka ![GitHub Repo Stars](https://img.shields.io/github/stars/Nuitka/Nuitka) ![GitHub last commit](https://img.shields.io/github/last-commit/Nuitka/Nuitka)](https://github.com/Nuitka/Nuitka) - Compiles Python programs into high-performance standalone executables (cross-platform, supports all Python versions).
  - [shiv ![GitHub Repo Stars](https://img.shields.io/github/stars/linkedin/shiv) ![GitHub last commit](https://img.shields.io/github/last-commit/linkedin/shiv)](https://github.com/linkedin/shiv) - A command line utility for building fully self-contained zipapps (PEP 441), but with all their dependencies included.
  - [cx-Freeze ![GitHub Repo Stars](https://img.shields.io/github/stars/marcelotduarte/cx_Freeze) ![GitHub last commit](https://img.shields.io/github/last-commit/marcelotduarte/cx_Freeze)](https://github.com/marcelotduarte/cx_Freeze) - It is a Python tool that converts Python scripts into standalone executables and installers for Windows, macOS, and Linux.
- Obfuscation
  - [pyarmor ![GitHub Repo Stars](https://img.shields.io/github/stars/dashingsoft/pyarmor) ![GitHub last commit](https://img.shields.io/github/last-commit/dashingsoft/pyarmor)](https://github.com/dashingsoft/pyarmor) - A tool used to obfuscate python scripts, bind obfuscated scripts to fixed machine or expire obfuscated scripts.

### Configuration Files

_Libraries for storing and parsing configuration options._

- [configparser](https://docs.python.org/3/library/configparser.html) - (Python standard library) INI file parser.
- [python-dotenv ![GitHub Repo Stars](https://img.shields.io/github/stars/theskumar/python-dotenv) ![GitHub last commit](https://img.shields.io/github/last-commit/theskumar/python-dotenv)](https://github.com/theskumar/python-dotenv) - Reads key-value pairs from a `.env` file and sets them as environment variables.
- [pydantic-settings ![GitHub Repo Stars](https://img.shields.io/github/stars/pydantic/pydantic-settings) ![GitHub last commit](https://img.shields.io/github/last-commit/pydantic/pydantic-settings)](https://github.com/pydantic/pydantic-settings) - Settings management using Pydantic models with validation, loading from environment variables and secrets files.
- [hydra-core ![GitHub Repo Stars](https://img.shields.io/github/stars/facebookresearch/hydra) ![GitHub last commit](https://img.shields.io/github/last-commit/facebookresearch/hydra)](https://github.com/facebookresearch/hydra) - Hydra is a framework for elegantly configuring complex applications.
- [dynaconf ![GitHub Repo Stars](https://img.shields.io/github/stars/dynaconf/dynaconf) ![GitHub last commit](https://img.shields.io/github/last-commit/dynaconf/dynaconf)](https://github.com/dynaconf/dynaconf) - Dynaconf is a configuration manager with plugins for Django, Flask and FastAPI.

**Security**

### Cryptography

_Libraries for cryptographic primitives and secure protocols._

- [cryptography ![GitHub Repo Stars](https://img.shields.io/github/stars/pyca/cryptography) ![GitHub last commit](https://img.shields.io/github/last-commit/pyca/cryptography)](https://github.com/pyca/cryptography) - A package designed to expose cryptographic primitives and recipes to Python developers.
- [pynacl ![GitHub Repo Stars](https://img.shields.io/github/stars/pyca/pynacl) ![GitHub last commit](https://img.shields.io/github/last-commit/pyca/pynacl)](https://github.com/pyca/pynacl) - Python binding to the Networking and Cryptography (NaCl) library.
- [paramiko ![GitHub Repo Stars](https://img.shields.io/github/stars/paramiko/paramiko) ![GitHub last commit](https://img.shields.io/github/last-commit/paramiko/paramiko)](https://github.com/paramiko/paramiko) - The leading native Python SSHv2 protocol library.
- [itsdangerous ![GitHub Repo Stars](https://img.shields.io/github/stars/pallets/itsdangerous) ![GitHub last commit](https://img.shields.io/github/last-commit/pallets/itsdangerous)](https://github.com/pallets/itsdangerous) - Various helpers to pass trusted data to untrusted environments.

### Penetration Testing

_Frameworks and tools for penetration testing._

- [mitmproxy ![GitHub Repo Stars](https://img.shields.io/github/stars/mitmproxy/mitmproxy) ![GitHub last commit](https://img.shields.io/github/last-commit/mitmproxy/mitmproxy)](https://github.com/mitmproxy/mitmproxy) - An interactive TLS-capable intercepting HTTP proxy for penetration testers and software developers.
- [sqlmap ![GitHub Repo Stars](https://img.shields.io/github/stars/sqlmapproject/sqlmap) ![GitHub last commit](https://img.shields.io/github/last-commit/sqlmapproject/sqlmap)](https://github.com/sqlmapproject/sqlmap) - Automatic SQL injection and database takeover tool.
- [sherlock-project ![GitHub Repo Stars](https://img.shields.io/github/stars/sherlock-project/sherlock) ![GitHub last commit](https://img.shields.io/github/last-commit/sherlock-project/sherlock)](https://github.com/sherlock-project/sherlock) - Hunt down social media accounts by username across social networks.
- [social-engineer-toolkit ![GitHub Repo Stars](https://img.shields.io/github/stars/trustedsec/social-engineer-toolkit) ![GitHub last commit](https://img.shields.io/github/last-commit/trustedsec/social-engineer-toolkit)](https://github.com/trustedsec/social-engineer-toolkit) - A toolkit for social engineering.

### Supply Chain Security

_Tools for auditing dependencies against known vulnerabilities._

- [pip-audit ![GitHub Repo Stars](https://img.shields.io/github/stars/pypa/pip-audit) ![GitHub last commit](https://img.shields.io/github/last-commit/pypa/pip-audit)](https://github.com/pypa/pip-audit) - Audits Python environments and dependency trees for known vulnerabilities, using the PyPI Advisory Database and OSV.
- [uv audit](https://docs.astral.sh/uv/reference/cli/#uv-audit) - uv's built-in dependency vulnerability and malware scanning backed by OSV.

### Web Security

_Libraries for application-layer web security._

- [secure ![GitHub Repo Stars](https://img.shields.io/github/stars/TypeError/secure) ![GitHub last commit](https://img.shields.io/github/last-commit/TypeError/secure)](https://github.com/TypeError/secure) - HTTP security headers for Python web applications with ASGI and WSGI middleware.

**Other**

### Hardware

_Libraries for programming with hardware._

- [bleak ![GitHub Repo Stars](https://img.shields.io/github/stars/hbldh/bleak) ![GitHub last commit](https://img.shields.io/github/last-commit/hbldh/bleak)](https://github.com/hbldh/bleak) - A cross platform Bluetooth Low Energy Client for Python using asyncio.
- [pynput ![GitHub Repo Stars](https://img.shields.io/github/stars/moses-palmer/pynput) ![GitHub last commit](https://img.shields.io/github/last-commit/moses-palmer/pynput)](https://github.com/moses-palmer/pynput) - A library to control and monitor input devices.
- [jumpstarter ![GitHub Repo Stars](https://img.shields.io/github/stars/jumpstarter-dev/jumpstarter) ![GitHub last commit](https://img.shields.io/github/last-commit/jumpstarter-dev/jumpstarter)](https://github.com/jumpstarter-dev/jumpstarter) - A hardware-in-the-loop testing framework with a Python client library for automated testing on real and virtual hardware.

### Microsoft Windows

_Python programming on Microsoft Windows._

- [pythonnet ![GitHub Repo Stars](https://img.shields.io/github/stars/pythonnet/pythonnet) ![GitHub last commit](https://img.shields.io/github/last-commit/pythonnet/pythonnet)](https://github.com/pythonnet/pythonnet) - Python Integration with the .NET Common Language Runtime (CLR).
- [pywin32 ![GitHub Repo Stars](https://img.shields.io/github/stars/mhammond/pywin32) ![GitHub last commit](https://img.shields.io/github/last-commit/mhammond/pywin32)](https://github.com/mhammond/pywin32) - Python Extensions for Windows.
- [pyenv-win ![GitHub Repo Stars](https://img.shields.io/github/stars/pyenv-win/pyenv-win) ![GitHub last commit](https://img.shields.io/github/last-commit/pyenv-win/pyenv-win)](https://github.com/pyenv-win/pyenv-win) - A Python version manager for Windows ([pyenv ![GitHub Repo Stars](https://img.shields.io/github/stars/pyenv/pyenv) ![GitHub last commit](https://img.shields.io/github/last-commit/pyenv/pyenv)](https://github.com/pyenv/pyenv) fork).
- [winpython ![GitHub Repo Stars](https://img.shields.io/github/stars/winpython/winpython) ![GitHub last commit](https://img.shields.io/github/last-commit/winpython/winpython)](https://github.com/winpython/winpython) - Portable development environment for Windows 10/11.

### Miscellaneous

_Useful libraries or tools that don't fit in the categories above._

- [blinker ![GitHub Repo Stars](https://img.shields.io/github/stars/pallets-eco/blinker) ![GitHub last commit](https://img.shields.io/github/last-commit/pallets-eco/blinker)](https://github.com/pallets-eco/blinker) - A fast Python in-process signal/event dispatching system.
- [boltons ![GitHub Repo Stars](https://img.shields.io/github/stars/mahmoud/boltons) ![GitHub last commit](https://img.shields.io/github/last-commit/mahmoud/boltons)](https://github.com/mahmoud/boltons) - A set of pure-Python utilities.

## Resources

Where to discover learning resources or new Python libraries.

### Newsletters

- [Awesome Python Newsletter](https://python.libhunt.com/newsletter)
- [Pycoder's Weekly](https://pycoders.com/)
- [Python Tricks](https://realpython.com/python-tricks/)
- [Python Weekly](https://www.pythonweekly.com/)

### Podcasts

- [Django Chat](https://djangochat.com/)
- [PyPodcats](https://pypodcats.live)
- [Python Bytes](https://pythonbytes.fm)
- [Talk Python To Me](https://talkpython.fm/)
- [The Real Python Podcast](https://realpython.com/podcasts/rpp/)

### Websites

- [Python Developer Tooling Handbook](https://pydevtools.com/) - Comprehensive guide to modern Python developer tools covering package management, linting, type checking, testing, and more.

## Contributing

Your contributions are always welcome! Please take a look at the [contribution guidelines ![GitHub Repo Stars](https://img.shields.io/github/stars/vinta/awesome-python) ![GitHub last commit](https://img.shields.io/github/last-commit/vinta/awesome-python)](https://github.com/vinta/awesome-python/blob/master/CONTRIBUTING.md) first.

---

If you have any question about this opinionated list, do not hesitate to contact [@vinta](https://x.com/vinta) on X (Twitter).
