# Awesome Machine Learning [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome) [![Track Awesome List](https://www.trackawesomelist.com/badge.svg)](https://www.trackawesomelist.com/josephmisiti/awesome-machine-learning/)

A curated list of awesome machine learning frameworks, libraries and software (by language). Inspired by `awesome-php`.

_If you want to contribute to this list (please do), send me a pull request or contact me [@josephmisiti](https://twitter.com/josephmisiti)._
Also, a listed repository should be deprecated if:

* Repository's owner explicitly says that "this library is not maintained".
* Not committed for a long time (2~3 years).

Further resources:

* For a list of free machine learning books available for download, go [here ![GitHub Repo Stars](https://img.shields.io/github/stars/josephmisiti/awesome-machine-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/josephmisiti/awesome-machine-learning)](https://github.com/josephmisiti/awesome-machine-learning/blob/master/books.md).

* For a list of professional machine learning events, go [here ![GitHub Repo Stars](https://img.shields.io/github/stars/josephmisiti/awesome-machine-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/josephmisiti/awesome-machine-learning)](https://github.com/josephmisiti/awesome-machine-learning/blob/master/events.md).

* For a list of (mostly) free machine learning courses available online, go [here ![GitHub Repo Stars](https://img.shields.io/github/stars/josephmisiti/awesome-machine-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/josephmisiti/awesome-machine-learning)](https://github.com/josephmisiti/awesome-machine-learning/blob/master/courses.md).

* For a list of blogs and newsletters on data science and machine learning, go [here ![GitHub Repo Stars](https://img.shields.io/github/stars/josephmisiti/awesome-machine-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/josephmisiti/awesome-machine-learning)](https://github.com/josephmisiti/awesome-machine-learning/blob/master/blogs.md).

* For a list of free-to-attend meetups and local events, go [here ![GitHub Repo Stars](https://img.shields.io/github/stars/josephmisiti/awesome-machine-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/josephmisiti/awesome-machine-learning)](https://github.com/josephmisiti/awesome-machine-learning/blob/master/meetups.md).

## Table of Contents

### Frameworks and Libraries
<!-- MarkdownTOC depth=4 -->

- [Awesome Machine Learning ![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](#awesome-machine-learning-)
  - [Table of Contents](#table-of-contents)
    - [Frameworks and Libraries](#frameworks-and-libraries)
    - [Tools](#tools)
  - [APL](#apl)
      - [General-Purpose Machine Learning](#apl-general-purpose-machine-learning)
  - [C](#c)
      - [General-Purpose Machine Learning](#c-general-purpose-machine-learning)
      - [Computer Vision](#c-computer-vision)
  - [C++](#cpp)
      - [Computer Vision](#cpp-computer-vision)
      - [General-Purpose Machine Learning](#cpp-general-purpose-machine-learning)
      - [Natural Language Processing](#cpp-natural-language-processing)
      - [Speech Recognition](#cpp-speech-recognition)
      - [Sequence Analysis](#cpp-sequence-analysis)
      - [Gesture Detection](#cpp-gesture-detection)
  - [Common Lisp](#common-lisp)
      - [General-Purpose Machine Learning](#common-lisp-general-purpose-machine-learning)
  - [Clojure](#clojure)
      - [Natural Language Processing](#clojure-natural-language-processing)
      - [General-Purpose Machine Learning](#clojure-general-purpose-machine-learning)
      - [Deep Learning](#clojure-deep-learning)
      - [Data Analysis](#clojure-data-analysis--data-visualization)
      - [Data Visualization](#clojure-data-visualization)
      - [Interop](#clojure-interop)
      - [Misc](#clojure-misc)
      - [Extra](#clojure-extra)
  - [Crystal](#crystal)
      - [General-Purpose Machine Learning](#crystal-general-purpose-machine-learning)
  - [Elixir](#elixir)
      - [General-Purpose Machine Learning](#elixir-general-purpose-machine-learning)
      - [Natural Language Processing](#elixir-natural-language-processing)
  - [Erlang](#erlang)
      - [General-Purpose Machine Learning](#erlang-general-purpose-machine-learning)
  - [Fortran](#fortran)
      - [General-Purpose Machine Learning](#fortran-general-purpose-machine-learning)
      - [Data Analysis / Data Visualization](#fortran-data-analysis--data-visualization)
  - [Go](#go)
      - [Natural Language Processing](#go-natural-language-processing)
      - [General-Purpose Machine Learning](#go-general-purpose-machine-learning)
      - [Spatial analysis and geometry](#go-spatial-analysis-and-geometry)
      - [Data Analysis / Data Visualization](#go-data-analysis--data-visualization)
      - [Computer vision](#go-computer-vision)
      - [Reinforcement learning](#go-reinforcement-learning)
  - [Haskell](#haskell)
      - [General-Purpose Machine Learning](#haskell-general-purpose-machine-learning)
  - [Java](#java)
      - [Natural Language Processing](#java-natural-language-processing)
      - [General-Purpose Machine Learning](#java-general-purpose-machine-learning)
      - [Speech Recognition](#java-speech-recognition)
      - [Data Analysis / Data Visualization](#java-data-analysis--data-visualization)
      - [Deep Learning](#java-deep-learning)
  - [Javascript](#javascript)
      - [Natural Language Processing](#javascript-natural-language-processing)
      - [Data Analysis / Data Visualization](#javascript-data-analysis--data-visualization)
      - [General-Purpose Machine Learning](#javascript-general-purpose-machine-learning)
      - [Misc](#javascript-misc)
      - [Demos and Scripts](#javascript-demos-and-scripts)
  - [Julia](#julia)
      - [General-Purpose Machine Learning](#julia-general-purpose-machine-learning)
      - [Natural Language Processing](#julia-natural-language-processing)
      - [Data Analysis / Data Visualization](#julia-data-analysis--data-visualization)
      - [Misc Stuff / Presentations](#julia-misc-stuff--presentations)
  - [Kotlin](#kotlin)
      - [Deep Learning](#kotlin-deep-learning)
  - [Lua](#lua)
      - [General-Purpose Machine Learning](#lua-general-purpose-machine-learning)
      - [Demos and Scripts](#lua-demos-and-scripts)
  - [Matlab](#matlab)
      - [Computer Vision](#matlab-computer-vision)
      - [Natural Language Processing](#matlab-natural-language-processing)
      - [General-Purpose Machine Learning](#matlab-general-purpose-machine-learning)
      - [Data Analysis / Data Visualization](#matlab-data-analysis--data-visualization)
  - [.NET](#net)
      - [Computer Vision](#net-computer-vision)
      - [Natural Language Processing](#net-natural-language-processing)
      - [General-Purpose Machine Learning](#net-general-purpose-machine-learning)
      - [Data Analysis / Data Visualization](#net-data-analysis--data-visualization)
  - [Objective C](#objective-c)
    - [General-Purpose Machine Learning](#objective-c-general-purpose-machine-learning)
  - [OCaml](#ocaml)
    - [General-Purpose Machine Learning](#ocaml-general-purpose-machine-learning)
  - [OpenCV](#opencv)
    - [Computer Vision](#opencv-Computer-Vision)
    - [Text-Detection](#Text-Character-Number-Detection)
  - [Perl](#perl)
    - [Data Analysis / Data Visualization](#perl-data-analysis--data-visualization)
    - [General-Purpose Machine Learning](#perl-general-purpose-machine-learning)
  - [Perl 6](#perl-6)
    - [Data Analysis / Data Visualization](#perl-6-data-analysis--data-visualization)
    - [General-Purpose Machine Learning](#perl-6-general-purpose-machine-learning)
  - [PHP](#php)
    - [Natural Language Processing](#php-natural-language-processing)
    - [General-Purpose Machine Learning](#php-general-purpose-machine-learning)
  - [Python](#python)
      - [Computer Vision](#python-computer-vision)
      - [Natural Language Processing](#python-natural-language-processing)
      - [General-Purpose Machine Learning](#python-general-purpose-machine-learning)
      - [Data Analysis / Data Visualization](#python-data-analysis--data-visualization)
      - [Misc Scripts / iPython Notebooks / Codebases](#python-misc-scripts--ipython-notebooks--codebases)
      - [Neural Networks](#python-neural-networks)
      - [Survival Analysis](#python-survival-analysis)
      - [Federated Learning](#python-federated-learning)
      - [Kaggle Competition Source Code](#python-kaggle-competition-source-code)
      - [Reinforcement Learning](#python-reinforcement-learning)
  - [Ruby](#ruby)
      - [Natural Language Processing](#ruby-natural-language-processing)
      - [General-Purpose Machine Learning](#ruby-general-purpose-machine-learning)
      - [Data Analysis / Data Visualization](#ruby-data-analysis--data-visualization)
      - [Misc](#ruby-misc)
  - [Rust](#rust)
      - [General-Purpose Machine Learning](#rust-general-purpose-machine-learning)
  - [R](#r)
      - [General-Purpose Machine Learning](#r-general-purpose-machine-learning)
      - [Data Analysis / Data Visualization](#r-data-analysis--data-visualization)
  - [SAS](#sas)
      - [General-Purpose Machine Learning](#sas-general-purpose-machine-learning)
      - [Data Analysis / Data Visualization](#sas-data-analysis--data-visualization)
      - [Natural Language Processing](#sas-natural-language-processing)
      - [Demos and Scripts](#sas-demos-and-scripts)
  - [Scala](#scala)
      - [Natural Language Processing](#scala-natural-language-processing)
      - [Data Analysis / Data Visualization](#scala-data-analysis--data-visualization)
      - [General-Purpose Machine Learning](#scala-general-purpose-machine-learning)
  - [Scheme](#scheme)
      - [Neural Networks](#scheme-neural-networks)
  - [Swift](#swift)
      - [General-Purpose Machine Learning](#swift-general-purpose-machine-learning)
  - [TensorFlow](#tensorflow)
      - [General-Purpose Machine Learning](#tensorflow-general-purpose-machine-learning)

### [Tools](#tools-1)

- [Neural Networks](#tools-neural-networks)
- [Misc](#tools-misc)


[Credits](#credits)

<!-- /MarkdownTOC -->

<a name="apl"></a>
## APL

<a name="apl-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning
* [naive-apl ![GitHub Repo Stars](https://img.shields.io/github/stars/mattcunningham/naive-apl) ![GitHub last commit](https://img.shields.io/github/last-commit/mattcunningham/naive-apl)](https://github.com/mattcunningham/naive-apl) - Naive Bayesian Classifier implementation in APL. **[Deprecated]**

<a name="c"></a>
## C

<a name="c-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning
* [Darknet ![GitHub Repo Stars](https://img.shields.io/github/stars/pjreddie/darknet) ![GitHub last commit](https://img.shields.io/github/last-commit/pjreddie/darknet)](https://github.com/pjreddie/darknet) - Darknet is an open source neural network framework written in C and CUDA. It is fast, easy to install, and supports CPU and GPU computation.
* [Recommender ![GitHub Repo Stars](https://img.shields.io/github/stars/GHamrouni/Recommender) ![GitHub last commit](https://img.shields.io/github/last-commit/GHamrouni/Recommender)](https://github.com/GHamrouni/Recommender) - A C library for product recommendations/suggestions using collaborative filtering (CF).
* [Hybrid Recommender System ![GitHub Repo Stars](https://img.shields.io/github/stars/SeniorSA/hybrid-rs-trainner) ![GitHub last commit](https://img.shields.io/github/last-commit/SeniorSA/hybrid-rs-trainner)](https://github.com/SeniorSA/hybrid-rs-trainner) - A hybrid recommender system based upon scikit-learn algorithms. **[Deprecated]**
* [neonrvm ![GitHub Repo Stars](https://img.shields.io/github/stars/siavashserver/neonrvm) ![GitHub last commit](https://img.shields.io/github/last-commit/siavashserver/neonrvm)](https://github.com/siavashserver/neonrvm) - neonrvm is an open source machine learning library based on RVM technique. It's written in C programming language and comes with Python programming language bindings.
* [cONNXr ![GitHub Repo Stars](https://img.shields.io/github/stars/alrevuelta/cONNXr) ![GitHub last commit](https://img.shields.io/github/last-commit/alrevuelta/cONNXr)](https://github.com/alrevuelta/cONNXr) - An `ONNX` runtime written in pure C (99) with zero dependencies focused on small embedded devices. Run inference on your machine learning models no matter which framework you train it with. Easy to install and compiles everywhere, even in very old devices.
* [libonnx ![GitHub Repo Stars](https://img.shields.io/github/stars/xboot/libonnx) ![GitHub last commit](https://img.shields.io/github/last-commit/xboot/libonnx)](https://github.com/xboot/libonnx) - A lightweight, portable pure C99 onnx inference engine for embedded devices with hardware acceleration support.

<a name="c-computer-vision"></a>
#### Computer Vision

* [CCV ![GitHub Repo Stars](https://img.shields.io/github/stars/liuliu/ccv) ![GitHub last commit](https://img.shields.io/github/last-commit/liuliu/ccv)](https://github.com/liuliu/ccv) - C-based/Cached/Core Computer Vision Library, A Modern Computer Vision Library.
* [VLFeat](http://www.vlfeat.org/) - VLFeat is an open and portable library of computer vision algorithms, which has a Matlab toolbox.

<a name="cpp"></a>
## C++

<a name="cpp-computer-vision"></a>
#### Computer Vision

* [DLib](http://dlib.net/imaging.html) - DLib has C++ and Python interfaces for face detection and training general object detectors.
* [EBLearn](http://eblearn.sourceforge.net/) - Eblearn is an object-oriented C++ library that implements various machine learning models **[Deprecated]**
* [OpenCV](https://opencv.org) - OpenCV has C++, C, Python, Java and MATLAB interfaces and supports Windows, Linux, Android and Mac OS.
* [VIGRA ![GitHub Repo Stars](https://img.shields.io/github/stars/ukoethe/vigra) ![GitHub last commit](https://img.shields.io/github/last-commit/ukoethe/vigra)](https://github.com/ukoethe/vigra) - VIGRA is a genertic cross-platform C++ computer vision and machine learning library for volumes of arbitrary dimensionality with Python bindings.
* [Openpose ![GitHub Repo Stars](https://img.shields.io/github/stars/CMU-Perceptual-Computing-Lab/openpose) ![GitHub last commit](https://img.shields.io/github/last-commit/CMU-Perceptual-Computing-Lab/openpose)](https://github.com/CMU-Perceptual-Computing-Lab/openpose) - A real-time multi-person keypoint detection library for body, face, hands, and foot estimation

<a name="cpp-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [Speedster ![GitHub Repo Stars](https://img.shields.io/github/stars/nebuly-ai/nebullvm) ![GitHub last commit](https://img.shields.io/github/last-commit/nebuly-ai/nebullvm)](https://github.com/nebuly-ai/nebullvm/tree/main/apps/accelerate/speedster) -Automatically apply SOTA optimization techniques to achieve the maximum inference speed-up on your hardware. [DEEP LEARNING]
* [BanditLib ![GitHub Repo Stars](https://img.shields.io/github/stars/jkomiyama/banditlib) ![GitHub last commit](https://img.shields.io/github/last-commit/jkomiyama/banditlib)](https://github.com/jkomiyama/banditlib) - A simple Multi-armed Bandit library. **[Deprecated]**
* [Caffe ![GitHub Repo Stars](https://img.shields.io/github/stars/BVLC/caffe) ![GitHub last commit](https://img.shields.io/github/last-commit/BVLC/caffe)](https://github.com/BVLC/caffe) - A deep learning framework developed with cleanliness, readability, and speed in mind. [DEEP LEARNING]
* [CatBoost ![GitHub Repo Stars](https://img.shields.io/github/stars/catboost/catboost) ![GitHub last commit](https://img.shields.io/github/last-commit/catboost/catboost)](https://github.com/catboost/catboost) - General purpose gradient boosting on decision trees library with categorical features support out of the box. It is easy to install, contains fast inference implementation and supports CPU and GPU (even multi-GPU) computation.
* [CNTK ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/CNTK) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/CNTK)](https://github.com/Microsoft/CNTK) - The Computational Network Toolkit (CNTK) by Microsoft Research, is a unified deep-learning toolkit that describes neural networks as a series of computational steps via a directed graph.
* [CUDA](https://code.google.com/p/cuda-convnet/) - This is a fast C++/CUDA implementation of convolutional [DEEP LEARNING]
* [DeepDetect ![GitHub Repo Stars](https://img.shields.io/github/stars/jolibrain/deepdetect) ![GitHub last commit](https://img.shields.io/github/last-commit/jolibrain/deepdetect)](https://github.com/jolibrain/deepdetect) - A machine learning API and server written in C++11. It makes state of the art machine learning easy to work with and integrate into existing applications.
* [Distributed Machine learning Tool Kit (DMTK)](http://www.dmtk.io/) - A distributed machine learning (parameter server) framework by Microsoft. Enables training models on large data sets across multiple machines. Current tools bundled with it include: LightLDA and Distributed (Multisense) Word Embedding.
* [DLib](http://dlib.net/ml.html) - A suite of ML tools designed to be easy to imbed in other applications.
* [DSSTNE ![GitHub Repo Stars](https://img.shields.io/github/stars/amznlabs/amazon-dsstne) ![GitHub last commit](https://img.shields.io/github/last-commit/amznlabs/amazon-dsstne)](https://github.com/amznlabs/amazon-dsstne) - A software library created by Amazon for training and deploying deep neural networks using GPUs which emphasizes speed and scale over experimental flexibility.
* [DyNet ![GitHub Repo Stars](https://img.shields.io/github/stars/clab/dynet) ![GitHub last commit](https://img.shields.io/github/last-commit/clab/dynet)](https://github.com/clab/dynet) - A dynamic neural network library working well with networks that have dynamic structures that change for every training instance. Written in C++ with bindings in Python.
* [Fido ![GitHub Repo Stars](https://img.shields.io/github/stars/FidoProject/Fido) ![GitHub last commit](https://img.shields.io/github/last-commit/FidoProject/Fido)](https://github.com/FidoProject/Fido) - A highly-modular C++ machine learning library for embedded electronics and robotics.
* [igraph](http://igraph.org/) - General purpose graph library.
* [Intel® oneAPI Data Analytics Library ![GitHub Repo Stars](https://img.shields.io/github/stars/oneapi-src/oneDAL) ![GitHub last commit](https://img.shields.io/github/last-commit/oneapi-src/oneDAL)](https://github.com/oneapi-src/oneDAL) - A high performance software library developed by Intel and optimized for Intel's architectures. Library provides algorithmic building blocks for all stages of data analytics and allows to process data in batch, online and distributed modes.
* [LightGBM ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/LightGBM) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/LightGBM)](https://github.com/Microsoft/LightGBM) - Microsoft's fast, distributed, high performance gradient boosting (GBDT, GBRT, GBM or MART) framework based on decision tree algorithms, used for ranking, classification and many other machine learning tasks.
* [libfm ![GitHub Repo Stars](https://img.shields.io/github/stars/srendle/libfm) ![GitHub last commit](https://img.shields.io/github/last-commit/srendle/libfm)](https://github.com/srendle/libfm) - A generic approach that allows to mimic most factorization models by feature engineering.
* [MLDB](https://mldb.ai) - The Machine Learning Database is a database designed for machine learning. Send it commands over a RESTful API to store data, explore it using SQL, then train machine learning models and expose them as APIs.
* [mlpack](https://www.mlpack.org/) - A scalable C++ machine learning library.
* [MXNet ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/incubator-mxnet) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/incubator-mxnet)](https://github.com/apache/incubator-mxnet) - Lightweight, Portable, Flexible Distributed/Mobile Deep Learning with Dynamic, Mutation-aware Dataflow Dep Scheduler; for Python, R, Julia, Go, JavaScript and more.
* [N2D2 ![GitHub Repo Stars](https://img.shields.io/github/stars/CEA-LIST/N2D2) ![GitHub last commit](https://img.shields.io/github/last-commit/CEA-LIST/N2D2)](https://github.com/CEA-LIST/N2D2) - CEA-List's CAD framework for designing and simulating Deep Neural Network, and building full DNN-based applications on embedded platforms
* [oneDNN ![GitHub Repo Stars](https://img.shields.io/github/stars/oneapi-src/oneDNN) ![GitHub last commit](https://img.shields.io/github/last-commit/oneapi-src/oneDNN)](https://github.com/oneapi-src/oneDNN) - An open-source cross-platform performance library for deep learning applications.
* [ParaMonte ![GitHub Repo Stars](https://img.shields.io/github/stars/cdslaborg/paramonte) ![GitHub last commit](https://img.shields.io/github/last-commit/cdslaborg/paramonte)](https://github.com/cdslaborg/paramonte) - A general-purpose library with C/C++ interface for Bayesian data analysis and visualization via serial/parallel Monte Carlo and MCMC simulations. Documentation can be found [here](https://www.cdslab.org/paramonte/).
* [proNet-core ![GitHub Repo Stars](https://img.shields.io/github/stars/cnclabs/proNet-core) ![GitHub last commit](https://img.shields.io/github/last-commit/cnclabs/proNet-core)](https://github.com/cnclabs/proNet-core) - A general-purpose network embedding framework: pair-wise representations optimization Network Edit.
* [PyCaret ![GitHub Repo Stars](https://img.shields.io/github/stars/pycaret/pycaret) ![GitHub last commit](https://img.shields.io/github/last-commit/pycaret/pycaret)](https://github.com/pycaret/pycaret) - An open-source, low-code machine learning library in Python that automates machine learning workflows.
* [PyCUDA](https://mathema.tician.de/software/pycuda/) - Python interface to CUDA
* [ROOT](https://root.cern.ch) - A modular scientific software framework. It provides all the functionalities needed to deal with big data processing, statistical analysis, visualization and storage.
* [shark](http://image.diku.dk/shark/sphinx_pages/build/html/index.html) - A fast, modular, feature-rich open-source C++ machine learning library.
* [Shogun ![GitHub Repo Stars](https://img.shields.io/github/stars/shogun-toolbox/shogun) ![GitHub last commit](https://img.shields.io/github/last-commit/shogun-toolbox/shogun)](https://github.com/shogun-toolbox/shogun) - The Shogun Machine Learning Toolbox.
* [sofia-ml](https://code.google.com/archive/p/sofia-ml) - Suite of fast incremental algorithms.
* [Stan](http://mc-stan.org/) - A probabilistic programming language implementing full Bayesian statistical inference with Hamiltonian Monte Carlo sampling.
* [Timbl](https://languagemachines.github.io/timbl/) - A software package/C++ library implementing several memory-based learning algorithms, among which IB1-IG, an implementation of k-nearest neighbor classification, and IGTree, a decision-tree approximation of IB1-IG. Commonly used for NLP.
* [Vowpal Wabbit (VW) ![GitHub Repo Stars](https://img.shields.io/github/stars/VowpalWabbit/vowpal_wabbit) ![GitHub last commit](https://img.shields.io/github/last-commit/VowpalWabbit/vowpal_wabbit)](https://github.com/VowpalWabbit/vowpal_wabbit) - A fast out-of-core learning system.
* [Warp-CTC ![GitHub Repo Stars](https://img.shields.io/github/stars/baidu-research/warp-ctc) ![GitHub last commit](https://img.shields.io/github/last-commit/baidu-research/warp-ctc)](https://github.com/baidu-research/warp-ctc) - A fast parallel implementation of Connectionist Temporal Classification (CTC), on both CPU and GPU.
* [XGBoost ![GitHub Repo Stars](https://img.shields.io/github/stars/dmlc/xgboost) ![GitHub last commit](https://img.shields.io/github/last-commit/dmlc/xgboost)](https://github.com/dmlc/xgboost) - A parallelized optimized general purpose gradient boosting library.
* [ThunderGBM ![GitHub Repo Stars](https://img.shields.io/github/stars/Xtra-Computing/thundergbm) ![GitHub last commit](https://img.shields.io/github/last-commit/Xtra-Computing/thundergbm)](https://github.com/Xtra-Computing/thundergbm) - A fast library for GBDTs and Random Forests on GPUs.
* [ThunderSVM ![GitHub Repo Stars](https://img.shields.io/github/stars/Xtra-Computing/thundersvm) ![GitHub last commit](https://img.shields.io/github/last-commit/Xtra-Computing/thundersvm)](https://github.com/Xtra-Computing/thundersvm) - A fast SVM library on GPUs and CPUs.
* [LKYDeepNN ![GitHub Repo Stars](https://img.shields.io/github/stars/mosdeo/LKYDeepNN) ![GitHub last commit](https://img.shields.io/github/last-commit/mosdeo/LKYDeepNN)](https://github.com/mosdeo/LKYDeepNN) - A header-only C++11 Neural Network library. Low dependency, native traditional chinese document.
* [xLearn ![GitHub Repo Stars](https://img.shields.io/github/stars/aksnzhy/xlearn) ![GitHub last commit](https://img.shields.io/github/last-commit/aksnzhy/xlearn)](https://github.com/aksnzhy/xlearn) - A high performance, easy-to-use, and scalable machine learning package, which can be used to solve large-scale machine learning problems. xLearn is especially useful for solving machine learning problems on large-scale sparse data, which is very common in Internet services such as online advertising and recommender systems.
* [Featuretools ![GitHub Repo Stars](https://img.shields.io/github/stars/featuretools/featuretools) ![GitHub last commit](https://img.shields.io/github/last-commit/featuretools/featuretools)](https://github.com/featuretools/featuretools) - A library for automated feature engineering. It excels at transforming transactional and relational datasets into feature matrices for machine learning using reusable feature engineering "primitives".
* [skynet ![GitHub Repo Stars](https://img.shields.io/github/stars/Tyill/skynet) ![GitHub last commit](https://img.shields.io/github/last-commit/Tyill/skynet)](https://github.com/Tyill/skynet) - A library for learning neural networks, has C-interface, net set in JSON. Written in C++ with bindings in Python, C++ and C#.
* [Feast ![GitHub Repo Stars](https://img.shields.io/github/stars/gojek/feast) ![GitHub last commit](https://img.shields.io/github/last-commit/gojek/feast)](https://github.com/gojek/feast) - A feature store for the management, discovery, and access of machine learning features. Feast provides a consistent view of feature data for both model training and model serving.
* [Hopsworks ![GitHub Repo Stars](https://img.shields.io/github/stars/logicalclocks/hopsworks) ![GitHub last commit](https://img.shields.io/github/last-commit/logicalclocks/hopsworks)](https://github.com/logicalclocks/hopsworks) - A data-intensive platform for AI with the industry's first open-source feature store. The Hopsworks Feature Store provides both a feature warehouse for training and batch based on Apache Hive and a feature serving database, based on MySQL Cluster, for online applications.
* [Polyaxon ![GitHub Repo Stars](https://img.shields.io/github/stars/polyaxon/polyaxon) ![GitHub last commit](https://img.shields.io/github/last-commit/polyaxon/polyaxon)](https://github.com/polyaxon/polyaxon) - A platform for reproducible and scalable machine learning and deep learning.
* [QuestDB](https://questdb.io/) A relational column-oriented database designed for real-time analytics on time series and event data.
* [Phoenix](https://phoenix.arize.com) Uncover insights, surface problems, monitor and fine tune your generative LLM, CV and tabular models.
* [XAD ![GitHub Repo Stars](https://img.shields.io/github/stars/auto-differentiation/XAD) ![GitHub last commit](https://img.shields.io/github/last-commit/auto-differentiation/XAD)](https://github.com/auto-differentiation/XAD) Comprehensive backpropagation tool for C++.

<a name="cpp-natural-language-processing"></a>
#### Natural Language Processing

* [BLLIP Parser ![GitHub Repo Stars](https://img.shields.io/github/stars/BLLIP/bllip-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/BLLIP/bllip-parser)](https://github.com/BLLIP/bllip-parser) - BLLIP Natural Language Parser (also known as the Charniak-Johnson parser).
* [colibri-core ![GitHub Repo Stars](https://img.shields.io/github/stars/proycon/colibri-core) ![GitHub last commit](https://img.shields.io/github/last-commit/proycon/colibri-core)](https://github.com/proycon/colibri-core) - C++ library, command line tools, and Python binding for extracting and working with basic linguistic constructions such as n-grams and skipgrams in a quick and memory-efficient way.
* [CRF++](https://taku910.github.io/crfpp/) - Open source implementation of Conditional Random Fields (CRFs) for segmenting/labeling sequential data & other Natural Language Processing tasks. **[Deprecated]**
* [CRFsuite](http://www.chokkan.org/software/crfsuite/) - CRFsuite is an implementation of Conditional Random Fields (CRFs) for labeling sequential data. **[Deprecated]**
* [frog ![GitHub Repo Stars](https://img.shields.io/github/stars/LanguageMachines/frog) ![GitHub last commit](https://img.shields.io/github/last-commit/LanguageMachines/frog)](https://github.com/LanguageMachines/frog) - Memory-based NLP suite developed for Dutch: PoS tagger, lemmatiser, dependency parser, NER, shallow parser, morphological analyzer.
* [libfolia ![GitHub Repo Stars](https://img.shields.io/github/stars/LanguageMachines/libfolia) ![GitHub last commit](https://img.shields.io/github/last-commit/LanguageMachines/libfolia)](https://github.com/LanguageMachines/libfolia) - C++ library for the [FoLiA format](https://proycon.github.io/folia/)
* [MeTA ![GitHub Repo Stars](https://img.shields.io/github/stars/meta-toolkit/meta) ![GitHub last commit](https://img.shields.io/github/last-commit/meta-toolkit/meta)](https://github.com/meta-toolkit/meta) - [MeTA : ModErn Text Analysis](https://meta-toolkit.org/) is a C++ Data Sciences Toolkit that facilitates mining big text data.
* [MIT Information Extraction Toolkit ![GitHub Repo Stars](https://img.shields.io/github/stars/mit-nlp/MITIE) ![GitHub last commit](https://img.shields.io/github/last-commit/mit-nlp/MITIE)](https://github.com/mit-nlp/MITIE) - C, C++, and Python tools for named entity recognition and relation extraction
* [ucto ![GitHub Repo Stars](https://img.shields.io/github/stars/LanguageMachines/ucto) ![GitHub last commit](https://img.shields.io/github/last-commit/LanguageMachines/ucto)](https://github.com/LanguageMachines/ucto) - Unicode-aware regular-expression based tokenizer for various languages. Tool and C++ library. Supports FoLiA format.

<a name="cpp-speech-recognition"></a>
#### Speech Recognition
* [Kaldi ![GitHub Repo Stars](https://img.shields.io/github/stars/kaldi-asr/kaldi) ![GitHub last commit](https://img.shields.io/github/last-commit/kaldi-asr/kaldi)](https://github.com/kaldi-asr/kaldi) - Kaldi is a toolkit for speech recognition written in C++ and licensed under the Apache License v2.0. Kaldi is intended for use by speech recognition researchers.

<a name="cpp-sequence-analysis"></a>
#### Sequence Analysis
* [ToPS ![GitHub Repo Stars](https://img.shields.io/github/stars/ayoshiaki/tops) ![GitHub last commit](https://img.shields.io/github/last-commit/ayoshiaki/tops)](https://github.com/ayoshiaki/tops) - This is an object-oriented framework that facilitates the integration of probabilistic models for sequences over a user defined alphabet. **[Deprecated]**

<a name="cpp-gesture-detection"></a>
#### Gesture Detection
* [grt ![GitHub Repo Stars](https://img.shields.io/github/stars/nickgillian/grt) ![GitHub last commit](https://img.shields.io/github/last-commit/nickgillian/grt)](https://github.com/nickgillian/grt) - The Gesture Recognition Toolkit (GRT) is a cross-platform, open-source, C++ machine learning library designed for real-time gesture recognition.

<a name="common-lisp"></a>
## Common Lisp

<a name="common-lisp-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [mgl ![GitHub Repo Stars](https://img.shields.io/github/stars/melisgl/mgl) ![GitHub last commit](https://img.shields.io/github/last-commit/melisgl/mgl)](https://github.com/melisgl/mgl/) - Neural networks (boltzmann machines, feed-forward and recurrent nets), Gaussian Processes.
* [mgl-gpr ![GitHub Repo Stars](https://img.shields.io/github/stars/melisgl/mgl-gpr) ![GitHub last commit](https://img.shields.io/github/last-commit/melisgl/mgl-gpr)](https://github.com/melisgl/mgl-gpr/) - Evolutionary algorithms. **[Deprecated]**
* [cl-libsvm ![GitHub Repo Stars](https://img.shields.io/github/stars/melisgl/cl-libsvm) ![GitHub last commit](https://img.shields.io/github/last-commit/melisgl/cl-libsvm)](https://github.com/melisgl/cl-libsvm/) - Wrapper for the libsvm support vector machine library. **[Deprecated]**
* [cl-online-learning ![GitHub Repo Stars](https://img.shields.io/github/stars/masatoi/cl-online-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/masatoi/cl-online-learning)](https://github.com/masatoi/cl-online-learning) - Online learning algorithms (Perceptron, AROW, SCW, Logistic Regression).
* [cl-random-forest ![GitHub Repo Stars](https://img.shields.io/github/stars/masatoi/cl-random-forest) ![GitHub last commit](https://img.shields.io/github/last-commit/masatoi/cl-random-forest)](https://github.com/masatoi/cl-random-forest) - Implementation of Random Forest in Common Lisp.

<a name="clojure"></a>
## Clojure

<a name="clojure-natural-language-processing"></a>
#### Natural Language Processing

* [Clojure-openNLP ![GitHub Repo Stars](https://img.shields.io/github/stars/dakrone/clojure-opennlp) ![GitHub last commit](https://img.shields.io/github/last-commit/dakrone/clojure-opennlp)](https://github.com/dakrone/clojure-opennlp) - Natural Language Processing in Clojure (opennlp).
* [Infections-clj ![GitHub Repo Stars](https://img.shields.io/github/stars/r0man/inflections-clj) ![GitHub last commit](https://img.shields.io/github/last-commit/r0man/inflections-clj)](https://github.com/r0man/inflections-clj) - Rails-like inflection library for Clojure and ClojureScript.

<a name="clojure-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [scicloj.ml ![GitHub Repo Stars](https://img.shields.io/github/stars/scicloj/scicloj.ml) ![GitHub last commit](https://img.shields.io/github/last-commit/scicloj/scicloj.ml)](https://github.com/scicloj/scicloj.ml) -  A idiomatic Clojure machine learning library based on tech.ml.dataset with a unique approach for immutable data processing pipelines.
* [clj-ml ![GitHub Repo Stars](https://img.shields.io/github/stars/joshuaeckroth/clj-ml) ![GitHub last commit](https://img.shields.io/github/last-commit/joshuaeckroth/clj-ml)](https://github.com/joshuaeckroth/clj-ml/) - A machine learning library for Clojure built on top of Weka and friends.
* [clj-boost](https://gitlab.com/alanmarazzi/clj-boost) - Wrapper for XGBoost
* [Touchstone ![GitHub Repo Stars](https://img.shields.io/github/stars/ptaoussanis/touchstone) ![GitHub last commit](https://img.shields.io/github/last-commit/ptaoussanis/touchstone)](https://github.com/ptaoussanis/touchstone) - Clojure A/B testing library.
* [Clojush ![GitHub Repo Stars](https://img.shields.io/github/stars/lspector/Clojush) ![GitHub last commit](https://img.shields.io/github/last-commit/lspector/Clojush)](https://github.com/lspector/Clojush) - The Push programming language and the PushGP genetic programming system implemented in Clojure.
* [lambda-ml ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudkj/lambda-ml) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudkj/lambda-ml)](https://github.com/cloudkj/lambda-ml) - Simple, concise implementations of machine learning techniques and utilities in Clojure.
* [Infer ![GitHub Repo Stars](https://img.shields.io/github/stars/aria42/infer) ![GitHub last commit](https://img.shields.io/github/last-commit/aria42/infer)](https://github.com/aria42/infer) - Inference and machine learning in Clojure. **[Deprecated]**
* [Encog ![GitHub Repo Stars](https://img.shields.io/github/stars/jimpil/enclog) ![GitHub last commit](https://img.shields.io/github/last-commit/jimpil/enclog)](https://github.com/jimpil/enclog) - Clojure wrapper for Encog (v3) (Machine-Learning framework that specializes in neural-nets). **[Deprecated]**
* [Fungp ![GitHub Repo Stars](https://img.shields.io/github/stars/vollmerm/fungp) ![GitHub last commit](https://img.shields.io/github/last-commit/vollmerm/fungp)](https://github.com/vollmerm/fungp) - A genetic programming library for Clojure. **[Deprecated]**
* [Statistiker ![GitHub Repo Stars](https://img.shields.io/github/stars/clojurewerkz/statistiker) ![GitHub last commit](https://img.shields.io/github/last-commit/clojurewerkz/statistiker)](https://github.com/clojurewerkz/statistiker) - Basic Machine Learning algorithms in Clojure. **[Deprecated]**
* [clortex ![GitHub Repo Stars](https://img.shields.io/github/stars/htm-community/clortex) ![GitHub last commit](https://img.shields.io/github/last-commit/htm-community/clortex)](https://github.com/htm-community/clortex) - General Machine Learning library using Numenta’s Cortical Learning Algorithm. **[Deprecated]**
* [comportex ![GitHub Repo Stars](https://img.shields.io/github/stars/htm-community/comportex) ![GitHub last commit](https://img.shields.io/github/last-commit/htm-community/comportex)](https://github.com/htm-community/comportex) - Functionally composable Machine Learning library using Numenta’s Cortical Learning Algorithm. **[Deprecated]**

<a name="clojure-deep-learning"></a>
#### Deep Learning
* [MXNet](https://mxnet.apache.org/versions/1.7.0/api/clojure) - Bindings to Apache MXNet - part of the MXNet project
* [Deep Diamond ![GitHub Repo Stars](https://img.shields.io/github/stars/uncomplicate/deep-diamond) ![GitHub last commit](https://img.shields.io/github/last-commit/uncomplicate/deep-diamond)](https://github.com/uncomplicate/deep-diamond) - A fast Clojure Tensor & Deep Learning library
* [jutsu.ai ![GitHub Repo Stars](https://img.shields.io/github/stars/hswick/jutsu.ai) ![GitHub last commit](https://img.shields.io/github/last-commit/hswick/jutsu.ai)](https://github.com/hswick/jutsu.ai) - Clojure wrapper for deeplearning4j with some added syntactic sugar.
* [cortex ![GitHub Repo Stars](https://img.shields.io/github/stars/originrose/cortex) ![GitHub last commit](https://img.shields.io/github/last-commit/originrose/cortex)](https://github.com/originrose/cortex) - Neural networks, regression and feature learning in Clojure.
* [Flare ![GitHub Repo Stars](https://img.shields.io/github/stars/aria42/flare) ![GitHub last commit](https://img.shields.io/github/last-commit/aria42/flare)](https://github.com/aria42/flare) - Dynamic Tensor Graph library in Clojure (think PyTorch, DynNet, etc.)
* [dl4clj ![GitHub Repo Stars](https://img.shields.io/github/stars/yetanalytics/dl4clj) ![GitHub last commit](https://img.shields.io/github/last-commit/yetanalytics/dl4clj)](https://github.com/yetanalytics/dl4clj) - Clojure wrapper for Deeplearning4j.

<a name="clojure-data-analysis--data-visualization"></a>
#### Data Analysis
* [tech.ml.dataset ![GitHub Repo Stars](https://img.shields.io/github/stars/techascent/tech.ml.dataset) ![GitHub last commit](https://img.shields.io/github/last-commit/techascent/tech.ml.dataset)](https://github.com/techascent/tech.ml.dataset) - Clojure dataframe library and pipeline for data processing and machine learning
* [Tablecloth ![GitHub Repo Stars](https://img.shields.io/github/stars/scicloj/tablecloth) ![GitHub last commit](https://img.shields.io/github/last-commit/scicloj/tablecloth)](https://github.com/scicloj/tablecloth) - A dataframe grammar wrapping tech.ml.dataset, inspired by several R libraries
* [Panthera ![GitHub Repo Stars](https://img.shields.io/github/stars/alanmarazzi/panthera) ![GitHub last commit](https://img.shields.io/github/last-commit/alanmarazzi/panthera)](https://github.com/alanmarazzi/panthera) - Clojure API wrapping Python's Pandas library
* [Incanter](http://incanter.org/) - Incanter is a Clojure-based, R-like platform for statistical computing and graphics.
* [PigPen ![GitHub Repo Stars](https://img.shields.io/github/stars/Netflix/PigPen) ![GitHub last commit](https://img.shields.io/github/last-commit/Netflix/PigPen)](https://github.com/Netflix/PigPen) - Map-Reduce for Clojure.
* [Geni ![GitHub Repo Stars](https://img.shields.io/github/stars/zero-one-group/geni) ![GitHub last commit](https://img.shields.io/github/last-commit/zero-one-group/geni)](https://github.com/zero-one-group/geni) - a Clojure dataframe library that runs on Apache Spark

<a name="clojure-data-visualization"></a>
#### Data Visualization
* [Hanami ![GitHub Repo Stars](https://img.shields.io/github/stars/jsa-aerial/hanami) ![GitHub last commit](https://img.shields.io/github/last-commit/jsa-aerial/hanami)](https://github.com/jsa-aerial/hanami) : Clojure(Script) library and framework for creating interactive visualization applications based in Vega-Lite (VGL) and/or Vega (VG) specifications. Automatic framing and layouts along with a powerful templating system for abstracting visualization specs
* [Saite ![GitHub Repo Stars](https://img.shields.io/github/stars/jsa-aerial/saite) ![GitHub last commit](https://img.shields.io/github/last-commit/jsa-aerial/saite)](https://github.com/jsa-aerial/saite) -  Clojure(Script) client/server application for dynamic interactive explorations and the creation of live shareable documents capturing them using Vega/Vega-Lite, CodeMirror, markdown, and LaTeX
* [Oz ![GitHub Repo Stars](https://img.shields.io/github/stars/metasoarous/oz) ![GitHub last commit](https://img.shields.io/github/last-commit/metasoarous/oz)](https://github.com/metasoarous/oz) - Data visualisation using Vega/Vega-Lite and Hiccup, and a live-reload platform for literate-programming
* [Envision ![GitHub Repo Stars](https://img.shields.io/github/stars/clojurewerkz/envision) ![GitHub last commit](https://img.shields.io/github/last-commit/clojurewerkz/envision)](https://github.com/clojurewerkz/envision) - Clojure Data Visualisation library, based on Statistiker and D3.
* [Pink Gorilla Notebook ![GitHub Repo Stars](https://img.shields.io/github/stars/pink-gorilla/gorilla-notebook) ![GitHub last commit](https://img.shields.io/github/last-commit/pink-gorilla/gorilla-notebook)](https://github.com/pink-gorilla/gorilla-notebook) - A Clojure/Clojurescript notebook application/-library based on Gorilla-REPL
* [clojupyter ![GitHub Repo Stars](https://img.shields.io/github/stars/clojupyter/clojupyter) ![GitHub last commit](https://img.shields.io/github/last-commit/clojupyter/clojupyter)](https://github.com/clojupyter/clojupyter) -  A Jupyter kernel for Clojure - run Clojure code in Jupyter Lab, Notebook and Console.
* [notespace ![GitHub Repo Stars](https://img.shields.io/github/stars/scicloj/notespace) ![GitHub last commit](https://img.shields.io/github/last-commit/scicloj/notespace)](https://github.com/scicloj/notespace) - Notebook experience in your Clojure namespace
* [Delight ![GitHub Repo Stars](https://img.shields.io/github/stars/datamechanics/delight) ![GitHub last commit](https://img.shields.io/github/last-commit/datamechanics/delight)](https://github.com/datamechanics/delight) - A listener that streams your spark events logs to delight, a free and improved spark UI

<a name="clojure-interop"></a>
#### Interop

* [Java Interop](https://clojure.org/reference/java_interop) - Clojure has Native Java Interop from which Java's ML ecosystem can be accessed
* [JavaScript Interop](https://clojurescript.org/reference/javascript-api) - ClojureScript has Native JavaScript Interop from which JavaScript's ML ecosystem can be accessed
* [Libpython-clj ![GitHub Repo Stars](https://img.shields.io/github/stars/clj-python/libpython-clj) ![GitHub last commit](https://img.shields.io/github/last-commit/clj-python/libpython-clj)](https://github.com/clj-python/libpython-clj) - Interop with Python
* [ClojisR ![GitHub Repo Stars](https://img.shields.io/github/stars/scicloj/clojisr) ![GitHub last commit](https://img.shields.io/github/last-commit/scicloj/clojisr)](https://github.com/scicloj/clojisr) - Interop with R and Renjin (R on the JVM)

<a name="clojure-misc"></a>
#### Misc
* [Neanderthal](https://neanderthal.uncomplicate.org/) - Fast Clojure Matrix Library (native CPU, GPU, OpenCL, CUDA)
* [kixistats ![GitHub Repo Stars](https://img.shields.io/github/stars/MastodonC/kixi.stats) ![GitHub last commit](https://img.shields.io/github/last-commit/MastodonC/kixi.stats)](https://github.com/MastodonC/kixi.stats) - A library of statistical distribution sampling and transducing functions
* [fastmath ![GitHub Repo Stars](https://img.shields.io/github/stars/generateme/fastmath) ![GitHub last commit](https://img.shields.io/github/last-commit/generateme/fastmath)](https://github.com/generateme/fastmath) - A collection of functions for mathematical and statistical computing, macine learning, etc., wrapping several JVM libraries
* [matlib ![GitHub Repo Stars](https://img.shields.io/github/stars/atisharma/matlib) ![GitHub last commit](https://img.shields.io/github/last-commit/atisharma/matlib)](https://github.com/atisharma/matlib) - a Clojure library of optimisation and control theory tools and convenience functions based on Neanderthal.

<a name="clojure-extra"></a>
#### Extra
* [Scicloj](https://scicloj.github.io/pages/libraries/) - Curated list of ML related resources for Clojure.

<a name="crystal"></a>
## Crystal

<a name="crystal-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [machine ![GitHub Repo Stars](https://img.shields.io/github/stars/mathieulaporte/machine) ![GitHub last commit](https://img.shields.io/github/last-commit/mathieulaporte/machine)](https://github.com/mathieulaporte/machine) - Simple machine learning algorithm.
* [crystal-fann ![GitHub Repo Stars](https://img.shields.io/github/stars/NeuraLegion/crystal-fann) ![GitHub last commit](https://img.shields.io/github/last-commit/NeuraLegion/crystal-fann)](https://github.com/NeuraLegion/crystal-fann) - FANN (Fast Artificial Neural Network) binding.

<a name="elixir"></a>
## Elixir

<a name="elixir-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [Simple Bayes ![GitHub Repo Stars](https://img.shields.io/github/stars/fredwu/simple_bayes) ![GitHub last commit](https://img.shields.io/github/last-commit/fredwu/simple_bayes)](https://github.com/fredwu/simple_bayes) - A Simple Bayes / Naive Bayes implementation in Elixir.
* [emel ![GitHub Repo Stars](https://img.shields.io/github/stars/mrdimosthenis/emel) ![GitHub last commit](https://img.shields.io/github/last-commit/mrdimosthenis/emel)](https://github.com/mrdimosthenis/emel) - A simple and functional machine learning library written in Elixir.
* [Tensorflex ![GitHub Repo Stars](https://img.shields.io/github/stars/anshuman23/tensorflex) ![GitHub last commit](https://img.shields.io/github/last-commit/anshuman23/tensorflex)](https://github.com/anshuman23/tensorflex) - Tensorflow bindings for the Elixir programming language.

<a name="elixir-natural-language-processing"></a>
#### Natural Language Processing

* [Stemmer ![GitHub Repo Stars](https://img.shields.io/github/stars/fredwu/stemmer) ![GitHub last commit](https://img.shields.io/github/last-commit/fredwu/stemmer)](https://github.com/fredwu/stemmer) - An English (Porter2) stemming implementation in Elixir.

<a name="erlang"></a>
## Erlang

<a name="erlang-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [Disco ![GitHub Repo Stars](https://img.shields.io/github/stars/discoproject/disco) ![GitHub last commit](https://img.shields.io/github/last-commit/discoproject/disco)](https://github.com/discoproject/disco/) - Map Reduce in Erlang. **[Deprecated]**

<a name="fortran"></a>
## Fortran

<a name="fortran-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [neural-fortran ![GitHub Repo Stars](https://img.shields.io/github/stars/modern-fortran/neural-fortran) ![GitHub last commit](https://img.shields.io/github/last-commit/modern-fortran/neural-fortran)](https://github.com/modern-fortran/neural-fortran) - A parallel neural net microframework.
Read the paper [here](https://arxiv.org/abs/1902.06714).

<a name="fortran-data-analysis--data-visualization"></a>
#### Data Analysis / Data Visualization

* [ParaMonte ![GitHub Repo Stars](https://img.shields.io/github/stars/cdslaborg/paramonte) ![GitHub last commit](https://img.shields.io/github/last-commit/cdslaborg/paramonte)](https://github.com/cdslaborg/paramonte) - A general-purpose Fortran library for Bayesian data analysis and visualization via serial/parallel Monte Carlo and MCMC simulations. Documentation can be found [here](https://www.cdslab.org/paramonte/).

<a name="go"></a>
## Go

<a name="go-natural-language-processing"></a>
#### Natural Language Processing

* [Cybertron ![GitHub Repo Stars](https://img.shields.io/github/stars/nlpodyssey/cybertron) ![GitHub last commit](https://img.shields.io/github/last-commit/nlpodyssey/cybertron)](https://github.com/nlpodyssey/cybertron) - Cybertron: the home planet of the Transformers in Go.
* [snowball ![GitHub Repo Stars](https://img.shields.io/github/stars/tebeka/snowball) ![GitHub last commit](https://img.shields.io/github/last-commit/tebeka/snowball)](https://github.com/tebeka/snowball) - Snowball Stemmer for Go.
* [word-embedding ![GitHub Repo Stars](https://img.shields.io/github/stars/ynqa/word-embedding) ![GitHub last commit](https://img.shields.io/github/last-commit/ynqa/word-embedding)](https://github.com/ynqa/word-embedding) - Word Embeddings: the full implementation of word2vec, GloVe in Go.
* [sentences ![GitHub Repo Stars](https://img.shields.io/github/stars/neurosnap/sentences) ![GitHub last commit](https://img.shields.io/github/last-commit/neurosnap/sentences)](https://github.com/neurosnap/sentences) - Golang implementation of Punkt sentence tokenizer.
* [go-ngram ![GitHub Repo Stars](https://img.shields.io/github/stars/Lazin/go-ngram) ![GitHub last commit](https://img.shields.io/github/last-commit/Lazin/go-ngram)](https://github.com/Lazin/go-ngram) - In-memory n-gram index with compression. *[Deprecated]*
* [paicehusk ![GitHub Repo Stars](https://img.shields.io/github/stars/Rookii/paicehusk) ![GitHub last commit](https://img.shields.io/github/last-commit/Rookii/paicehusk)](https://github.com/Rookii/paicehusk) - Golang implementation of the Paice/Husk Stemming Algorithm. *[Deprecated]*
* [go-porterstemmer ![GitHub Repo Stars](https://img.shields.io/github/stars/reiver/go-porterstemmer) ![GitHub last commit](https://img.shields.io/github/last-commit/reiver/go-porterstemmer)](https://github.com/reiver/go-porterstemmer) - A native Go clean room implementation of the Porter Stemming algorithm. **[Deprecated]**

<a name="go-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [Spago ![GitHub Repo Stars](https://img.shields.io/github/stars/nlpodyssey/spago) ![GitHub last commit](https://img.shields.io/github/last-commit/nlpodyssey/spago)](https://github.com/nlpodyssey/spago) - Self-contained Machine Learning and Natural Language Processing library in Go.
* [birdland ![GitHub Repo Stars](https://img.shields.io/github/stars/rlouf/birdland) ![GitHub last commit](https://img.shields.io/github/last-commit/rlouf/birdland)](https://github.com/rlouf/birdland) - A recommendation library in Go.
* [eaopt ![GitHub Repo Stars](https://img.shields.io/github/stars/MaxHalford/eaopt) ![GitHub last commit](https://img.shields.io/github/last-commit/MaxHalford/eaopt)](https://github.com/MaxHalford/eaopt) - An evolutionary optimization library.
* [leaves ![GitHub Repo Stars](https://img.shields.io/github/stars/dmitryikh/leaves) ![GitHub last commit](https://img.shields.io/github/last-commit/dmitryikh/leaves)](https://github.com/dmitryikh/leaves) - A pure Go implementation of the prediction part of GBRTs, including XGBoost and LightGBM.
* [gobrain ![GitHub Repo Stars](https://img.shields.io/github/stars/goml/gobrain) ![GitHub last commit](https://img.shields.io/github/last-commit/goml/gobrain)](https://github.com/goml/gobrain) - Neural Networks written in Go.
* [go-featureprocessing ![GitHub Repo Stars](https://img.shields.io/github/stars/nikolaydubina/go-featureprocessing) ![GitHub last commit](https://img.shields.io/github/last-commit/nikolaydubina/go-featureprocessing)](https://github.com/nikolaydubina/go-featureprocessing) - Fast and convenient feature processing for low latency machine learning in Go.
* [go-mxnet-predictor ![GitHub Repo Stars](https://img.shields.io/github/stars/songtianyi/go-mxnet-predictor) ![GitHub last commit](https://img.shields.io/github/last-commit/songtianyi/go-mxnet-predictor)](https://github.com/songtianyi/go-mxnet-predictor) - Go binding for MXNet c_predict_api to do inference with a pre-trained model.
* [go-ml-benchmarks ![GitHub Repo Stars](https://img.shields.io/github/stars/nikolaydubina/go-ml-benchmarks) ![GitHub last commit](https://img.shields.io/github/last-commit/nikolaydubina/go-ml-benchmarks)](https://github.com/nikolaydubina/go-ml-benchmarks) — benchmarks of machine learning inference for Go.
* [go-ml-transpiler ![GitHub Repo Stars](https://img.shields.io/github/stars/znly/go-ml-transpiler) ![GitHub last commit](https://img.shields.io/github/last-commit/znly/go-ml-transpiler)](https://github.com/znly/go-ml-transpiler) - An open source Go transpiler for machine learning models.
* [golearn ![GitHub Repo Stars](https://img.shields.io/github/stars/sjwhitworth/golearn) ![GitHub last commit](https://img.shields.io/github/last-commit/sjwhitworth/golearn)](https://github.com/sjwhitworth/golearn) - Machine learning for Go.
* [goml ![GitHub Repo Stars](https://img.shields.io/github/stars/cdipaolo/goml) ![GitHub last commit](https://img.shields.io/github/last-commit/cdipaolo/goml)](https://github.com/cdipaolo/goml) - Machine learning library written in pure Go.
* [gorgonia ![GitHub Repo Stars](https://img.shields.io/github/stars/gorgonia/gorgonia) ![GitHub last commit](https://img.shields.io/github/last-commit/gorgonia/gorgonia)](https://github.com/gorgonia/gorgonia) - Deep learning in Go.
* [goro ![GitHub Repo Stars](https://img.shields.io/github/stars/aunum/goro) ![GitHub last commit](https://img.shields.io/github/last-commit/aunum/goro)](https://github.com/aunum/goro) - A high-level machine learning library in the vein of Keras.
* [gorse ![GitHub Repo Stars](https://img.shields.io/github/stars/zhenghaoz/gorse) ![GitHub last commit](https://img.shields.io/github/last-commit/zhenghaoz/gorse)](https://github.com/zhenghaoz/gorse) - An offline recommender system backend based on collaborative filtering written in Go.
* [therfoo ![GitHub Repo Stars](https://img.shields.io/github/stars/therfoo/therfoo) ![GitHub last commit](https://img.shields.io/github/last-commit/therfoo/therfoo)](https://github.com/therfoo/therfoo) - An embedded deep learning library for Go.
* [neat ![GitHub Repo Stars](https://img.shields.io/github/stars/jinyeom/neat) ![GitHub last commit](https://img.shields.io/github/last-commit/jinyeom/neat)](https://github.com/jinyeom/neat) - Plug-and-play, parallel Go framework for NeuroEvolution of Augmenting Topologies (NEAT). **[Deprecated]**
* [go-pr ![GitHub Repo Stars](https://img.shields.io/github/stars/daviddengcn/go-pr) ![GitHub last commit](https://img.shields.io/github/last-commit/daviddengcn/go-pr)](https://github.com/daviddengcn/go-pr) - Pattern recognition package in Go lang. **[Deprecated]**
* [go-ml ![GitHub Repo Stars](https://img.shields.io/github/stars/alonsovidales/go_ml) ![GitHub last commit](https://img.shields.io/github/last-commit/alonsovidales/go_ml)](https://github.com/alonsovidales/go_ml) - Linear / Logistic regression, Neural Networks, Collaborative Filtering and Gaussian Multivariate Distribution. **[Deprecated]**
* [GoNN ![GitHub Repo Stars](https://img.shields.io/github/stars/fxsjy/gonn) ![GitHub last commit](https://img.shields.io/github/last-commit/fxsjy/gonn)](https://github.com/fxsjy/gonn) - GoNN is an implementation of Neural Network in Go Language, which includes BPNN, RBF, PCN. **[Deprecated]**
* [bayesian ![GitHub Repo Stars](https://img.shields.io/github/stars/jbrukh/bayesian) ![GitHub last commit](https://img.shields.io/github/last-commit/jbrukh/bayesian)](https://github.com/jbrukh/bayesian) - Naive Bayesian Classification for Golang. **[Deprecated]**
* [go-galib ![GitHub Repo Stars](https://img.shields.io/github/stars/thoj/go-galib) ![GitHub last commit](https://img.shields.io/github/last-commit/thoj/go-galib)](https://github.com/thoj/go-galib) - Genetic Algorithms library written in Go / Golang. **[Deprecated]**
* [Cloudforest ![GitHub Repo Stars](https://img.shields.io/github/stars/ryanbressler/CloudForest) ![GitHub last commit](https://img.shields.io/github/last-commit/ryanbressler/CloudForest)](https://github.com/ryanbressler/CloudForest) - Ensembles of decision trees in Go/Golang. **[Deprecated]**
* [go-dnn ![GitHub Repo Stars](https://img.shields.io/github/stars/sudachen/go-dnn) ![GitHub last commit](https://img.shields.io/github/last-commit/sudachen/go-dnn)](https://github.com/sudachen/go-dnn) - Deep Neural Networks for Golang (powered by MXNet)

<a name="go-spatial-analysis-and-geometry"></a>
#### Spatial analysis and geometry

* [go-geom ![GitHub Repo Stars](https://img.shields.io/github/stars/twpayne/go-geom) ![GitHub last commit](https://img.shields.io/github/last-commit/twpayne/go-geom)](https://github.com/twpayne/go-geom) - Go library to handle geometries.
* [gogeo ![GitHub Repo Stars](https://img.shields.io/github/stars/golang/geo) ![GitHub last commit](https://img.shields.io/github/last-commit/golang/geo)](https://github.com/golang/geo) - Spherical geometry in Go.

<a name="go-data-analysis--data-visualization"></a>
#### Data Analysis / Data Visualization

* [dataframe-go ![GitHub Repo Stars](https://img.shields.io/github/stars/rocketlaunchr/dataframe-go) ![GitHub last commit](https://img.shields.io/github/last-commit/rocketlaunchr/dataframe-go)](https://github.com/rocketlaunchr/dataframe-go) - Dataframes for machine-learning and statistics (similar to pandas).
* [gota ![GitHub Repo Stars](https://img.shields.io/github/stars/go-gota/gota) ![GitHub last commit](https://img.shields.io/github/last-commit/go-gota/gota)](https://github.com/go-gota/gota) - Dataframes.
* [gonum/mat](https://godoc.org/gonum.org/v1/gonum/mat) - A linear algebra package for Go.
* [gonum/optimize](https://godoc.org/gonum.org/v1/gonum/optimize) - Implementations of optimization algorithms.
* [gonum/plot](https://godoc.org/gonum.org/v1/plot) - A plotting library.
* [gonum/stat](https://godoc.org/gonum.org/v1/gonum/stat) - A statistics library.
* [SVGo ![GitHub Repo Stars](https://img.shields.io/github/stars/ajstarks/svgo) ![GitHub last commit](https://img.shields.io/github/last-commit/ajstarks/svgo)](https://github.com/ajstarks/svgo) - The Go Language library for SVG generation.
* [glot ![GitHub Repo Stars](https://img.shields.io/github/stars/arafatk/glot) ![GitHub last commit](https://img.shields.io/github/last-commit/arafatk/glot)](https://github.com/arafatk/glot) - Glot is a plotting library for Golang built on top of gnuplot.
* [globe ![GitHub Repo Stars](https://img.shields.io/github/stars/mmcloughlin/globe) ![GitHub last commit](https://img.shields.io/github/last-commit/mmcloughlin/globe)](https://github.com/mmcloughlin/globe) - Globe wireframe visualization.
* [gonum/graph](https://godoc.org/gonum.org/v1/gonum/graph) - General-purpose graph library.
* [go-graph ![GitHub Repo Stars](https://img.shields.io/github/stars/StepLg/go-graph) ![GitHub last commit](https://img.shields.io/github/last-commit/StepLg/go-graph)](https://github.com/StepLg/go-graph) - Graph library for Go/Golang language. **[Deprecated]**
* [RF ![GitHub Repo Stars](https://img.shields.io/github/stars/fxsjy/RF.go) ![GitHub last commit](https://img.shields.io/github/last-commit/fxsjy/RF.go)](https://github.com/fxsjy/RF.go) - Random forests implementation in Go. **[Deprecated]**

<a name="go-computer-vision"></a>
#### Computer vision

* [GoCV ![GitHub Repo Stars](https://img.shields.io/github/stars/hybridgroup/gocv) ![GitHub last commit](https://img.shields.io/github/last-commit/hybridgroup/gocv)](https://github.com/hybridgroup/gocv) - Package for computer vision using OpenCV 4 and beyond.

<a name="go-reinforcement-learning"></a>
#### Reinforcement learning

* [gold ![GitHub Repo Stars](https://img.shields.io/github/stars/aunum/gold) ![GitHub last commit](https://img.shields.io/github/last-commit/aunum/gold)](https://github.com/aunum/gold) - A reinforcement learning library.

<a name="haskell"></a>
## Haskell

<a name="haskell-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning
* [haskell-ml ![GitHub Repo Stars](https://img.shields.io/github/stars/ajtulloch/haskell-ml) ![GitHub last commit](https://img.shields.io/github/last-commit/ajtulloch/haskell-ml)](https://github.com/ajtulloch/haskell-ml) - Haskell implementations of various ML algorithms. **[Deprecated]**
* [HLearn ![GitHub Repo Stars](https://img.shields.io/github/stars/mikeizbicki/HLearn) ![GitHub last commit](https://img.shields.io/github/last-commit/mikeizbicki/HLearn)](https://github.com/mikeizbicki/HLearn) - a suite of libraries for interpreting machine learning models according to their algebraic structure. **[Deprecated]**
* [hnn ![GitHub Repo Stars](https://img.shields.io/github/stars/alpmestan/HNN) ![GitHub last commit](https://img.shields.io/github/last-commit/alpmestan/HNN)](https://github.com/alpmestan/HNN) - Haskell Neural Network library.
* [hopfield-networks ![GitHub Repo Stars](https://img.shields.io/github/stars/ajtulloch/hopfield-networks) ![GitHub last commit](https://img.shields.io/github/last-commit/ajtulloch/hopfield-networks)](https://github.com/ajtulloch/hopfield-networks) - Hopfield Networks for unsupervised learning in Haskell. **[Deprecated]**
* [DNNGraph ![GitHub Repo Stars](https://img.shields.io/github/stars/ajtulloch/dnngraph) ![GitHub last commit](https://img.shields.io/github/last-commit/ajtulloch/dnngraph)](https://github.com/ajtulloch/dnngraph) - A DSL for deep neural networks. **[Deprecated]**
* [LambdaNet ![GitHub Repo Stars](https://img.shields.io/github/stars/jbarrow/LambdaNet) ![GitHub last commit](https://img.shields.io/github/last-commit/jbarrow/LambdaNet)](https://github.com/jbarrow/LambdaNet) - Configurable Neural Networks in Haskell. **[Deprecated]**

<a name="java"></a>
## Java

<a name="java-natural-language-processing"></a>
#### Natural Language Processing
* [Cortical.io](https://www.cortical.io/) - Retina: an API performing complex NLP operations (disambiguation, classification, streaming text filtering, etc...) as quickly and intuitively as the brain.
* [IRIS ![GitHub Repo Stars](https://img.shields.io/github/stars/cortical-io/Iris) ![GitHub last commit](https://img.shields.io/github/last-commit/cortical-io/Iris)](https://github.com/cortical-io/Iris) - [Cortical.io's](https://cortical.io) FREE NLP, Retina API Analysis Tool (written in JavaFX!) - [See the Tutorial Video](https://www.youtube.com/watch?v=CsF4pd7fGF0).
* [CoreNLP](https://nlp.stanford.edu/software/corenlp.shtml) - Stanford CoreNLP provides a set of natural language analysis tools which can take raw English language text input and give the base forms of words.
* [Stanford Parser](https://nlp.stanford.edu/software/lex-parser.shtml) - A natural language parser is a program that works out the grammatical structure of sentences.
* [Stanford POS Tagger](https://nlp.stanford.edu/software/tagger.shtml) - A Part-Of-Speech Tagger (POS Tagger).
* [Stanford Name Entity Recognizer](https://nlp.stanford.edu/software/CRF-NER.shtml) - Stanford NER is a Java implementation of a Named Entity Recognizer.
* [Stanford Word Segmenter](https://nlp.stanford.edu/software/segmenter.shtml) - Tokenization of raw text is a standard pre-processing step for many NLP tasks.
* [Tregex, Tsurgeon and Semgrex](https://nlp.stanford.edu/software/tregex.shtml) - Tregex is a utility for matching patterns in trees, based on tree relationships and regular expression matches on nodes (the name is short for "tree regular expressions").
* [Stanford Phrasal: A Phrase-Based Translation System](https://nlp.stanford.edu/phrasal/)
* [Stanford English Tokenizer](https://nlp.stanford.edu/software/tokenizer.shtml) - Stanford Phrasal is a state-of-the-art statistical phrase-based machine translation system, written in Java.
* [Stanford Tokens Regex](https://nlp.stanford.edu/software/tokensregex.shtml) - A tokenizer divides text into a sequence of tokens, which roughly correspond to "words".
* [Stanford Temporal Tagger](https://nlp.stanford.edu/software/sutime.shtml) - SUTime is a library for recognizing and normalizing time expressions.
* [Stanford SPIED](https://nlp.stanford.edu/software/patternslearning.shtml) - Learning entities from unlabeled text starting with seed sets using patterns in an iterative fashion.
* [Twitter Text Java ![GitHub Repo Stars](https://img.shields.io/github/stars/twitter/twitter-text) ![GitHub last commit](https://img.shields.io/github/last-commit/twitter/twitter-text)](https://github.com/twitter/twitter-text/tree/master/java) - A Java implementation of Twitter's text processing library.
* [MALLET](http://mallet.cs.umass.edu/) - A Java-based package for statistical natural language processing, document classification, clustering, topic modelling, information extraction, and other machine learning applications to text.
* [OpenNLP](https://opennlp.apache.org/) - a machine learning based toolkit for the processing of natural language text.
* [LingPipe](http://alias-i.com/lingpipe/index.html) - A tool kit for processing text using computational linguistics.
* [ClearTK ![GitHub Repo Stars](https://img.shields.io/github/stars/ClearTK/cleartk) ![GitHub last commit](https://img.shields.io/github/last-commit/ClearTK/cleartk)](https://github.com/ClearTK/cleartk) - ClearTK provides a framework for developing statistical natural language processing (NLP) components in Java and is built on top of Apache UIMA. **[Deprecated]**
* [Apache cTAKES](https://ctakes.apache.org/) - Apache Clinical Text Analysis and Knowledge Extraction System (cTAKES) is an open-source natural language processing system for information extraction from electronic medical record clinical free-text.
* [NLP4J ![GitHub Repo Stars](https://img.shields.io/github/stars/emorynlp/nlp4j) ![GitHub last commit](https://img.shields.io/github/last-commit/emorynlp/nlp4j)](https://github.com/emorynlp/nlp4j) - The NLP4J project provides software and resources for natural language processing. The project started at the Center for Computational Language and EducAtion Research, and is currently developed by the Center for Language and Information Research at Emory University. **[Deprecated]**
* [CogcompNLP ![GitHub Repo Stars](https://img.shields.io/github/stars/CogComp/cogcomp-nlp) ![GitHub last commit](https://img.shields.io/github/last-commit/CogComp/cogcomp-nlp)](https://github.com/CogComp/cogcomp-nlp) - This project collects a number of core libraries for Natural Language Processing (NLP) developed in the University of Illinois' Cognitive Computation Group, for example `illinois-core-utilities` which provides a set of NLP-friendly data structures and a number of NLP-related utilities that support writing NLP applications, running experiments, etc, `illinois-edison` a library for feature extraction from illinois-core-utilities data structures and many other packages.

<a name="java-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [aerosolve ![GitHub Repo Stars](https://img.shields.io/github/stars/airbnb/aerosolve) ![GitHub last commit](https://img.shields.io/github/last-commit/airbnb/aerosolve)](https://github.com/airbnb/aerosolve) - A machine learning library by Airbnb designed from the ground up to be human friendly.
* [AMIDST Toolbox](http://www.amidsttoolbox.com/) - A Java Toolbox for Scalable Probabilistic Machine Learning.
* [Chips-n-Salsa ![GitHub Repo Stars](https://img.shields.io/github/stars/cicirello/Chips-n-Salsa) ![GitHub last commit](https://img.shields.io/github/last-commit/cicirello/Chips-n-Salsa)](https://github.com/cicirello/Chips-n-Salsa) - A Java library for genetic algorithms, evolutionary computation, and stochastic local search, with a focus on self-adaptation / self-tuning, as well as parallel execution.
* [Datumbox ![GitHub Repo Stars](https://img.shields.io/github/stars/datumbox/datumbox-framework) ![GitHub last commit](https://img.shields.io/github/last-commit/datumbox/datumbox-framework)](https://github.com/datumbox/datumbox-framework) - Machine Learning framework for rapid development of Machine Learning and Statistical applications.
* [ELKI](https://elki-project.github.io/) - Java toolkit for data mining. (unsupervised: clustering, outlier detection etc.)
* [Encog ![GitHub Repo Stars](https://img.shields.io/github/stars/encog/encog-java-core) ![GitHub last commit](https://img.shields.io/github/last-commit/encog/encog-java-core)](https://github.com/encog/encog-java-core) - An advanced neural network and machine learning framework. Encog contains classes to create a wide variety of networks, as well as support classes to normalize and process data for these neural networks. Encog trainings using multithreaded resilient propagation. Encog can also make use of a GPU to further speed processing time. A GUI based workbench is also provided to help model and train neural networks.
* [FlinkML in Apache Flink](https://ci.apache.org/projects/flink/flink-docs-master/dev/libs/ml/index.html) - Distributed machine learning library in Flink.
* [H2O ![GitHub Repo Stars](https://img.shields.io/github/stars/h2oai/h2o-3) ![GitHub last commit](https://img.shields.io/github/last-commit/h2oai/h2o-3)](https://github.com/h2oai/h2o-3) - ML engine that supports distributed learning on Hadoop, Spark or your laptop via APIs in R, Python, Scala, REST/JSON.
* [htm.java ![GitHub Repo Stars](https://img.shields.io/github/stars/numenta/htm.java) ![GitHub last commit](https://img.shields.io/github/last-commit/numenta/htm.java)](https://github.com/numenta/htm.java) - General Machine Learning library using Numenta’s Cortical Learning Algorithm.
* [liblinear-java ![GitHub Repo Stars](https://img.shields.io/github/stars/bwaldvogel/liblinear-java) ![GitHub last commit](https://img.shields.io/github/last-commit/bwaldvogel/liblinear-java)](https://github.com/bwaldvogel/liblinear-java) - Java version of liblinear.
* [Mahout ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/mahout) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/mahout)](https://github.com/apache/mahout) - Distributed machine learning.
* [Meka](http://meka.sourceforge.net/) - An open source implementation of methods for multi-label classification and evaluation (extension to Weka).
* [MLlib in Apache Spark](https://spark.apache.org/docs/latest/mllib-guide.html) - Distributed machine learning library in Spark.
* [Hydrosphere Mist ![GitHub Repo Stars](https://img.shields.io/github/stars/Hydrospheredata/mist) ![GitHub last commit](https://img.shields.io/github/last-commit/Hydrospheredata/mist)](https://github.com/Hydrospheredata/mist) - a service for deployment Apache Spark MLLib machine learning models as realtime, batch or reactive web services.
* [Neuroph](http://neuroph.sourceforge.net/) - Neuroph is lightweight Java neural network framework.
* [ORYX ![GitHub Repo Stars](https://img.shields.io/github/stars/oryxproject/oryx) ![GitHub last commit](https://img.shields.io/github/last-commit/oryxproject/oryx)](https://github.com/oryxproject/oryx) - Lambda Architecture Framework using Apache Spark and Apache Kafka with a specialization for real-time large-scale machine learning.
* [Samoa](https://samoa.incubator.apache.org/) SAMOA is a framework that includes distributed machine learning for data streams with an interface to plug-in different stream processing platforms.
* [RankLib](https://sourceforge.net/p/lemur/wiki/RankLib/) - RankLib is a library of learning to rank algorithms. **[Deprecated]**
* [rapaio ![GitHub Repo Stars](https://img.shields.io/github/stars/padreati/rapaio) ![GitHub last commit](https://img.shields.io/github/last-commit/padreati/rapaio)](https://github.com/padreati/rapaio) - statistics, data mining and machine learning toolbox in Java.
* [RapidMiner](https://rapidminer.com) - RapidMiner integration into Java code.
* [Stanford Classifier](https://nlp.stanford.edu/software/classifier.shtml) - A classifier is a machine learning tool that will take data items and place them into one of k classes.
* [Smile](https://haifengl.github.io/) - Statistical Machine Intelligence & Learning Engine.
* [SystemML ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/systemml) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/systemml)](https://github.com/apache/systemml) - flexible, scalable machine learning (ML) language.
* [Tribou](https://tribuo.org) - a machine learning library written in Java by Oracle.
* [Weka](https://www.cs.waikato.ac.nz/ml/weka/) - Weka is a collection of machine learning algorithms for data mining tasks.
* [LBJava ![GitHub Repo Stars](https://img.shields.io/github/stars/CogComp/lbjava) ![GitHub last commit](https://img.shields.io/github/last-commit/CogComp/lbjava)](https://github.com/CogComp/lbjava) - Learning Based Java is a modelling language for the rapid development of software systems, offers a convenient, declarative syntax for classifier and constraint definition directly in terms of the objects in the programmer's application.
* [knn-java-library ![GitHub Repo Stars](https://img.shields.io/github/stars/felipexw/knn-java-library) ![GitHub last commit](https://img.shields.io/github/last-commit/felipexw/knn-java-library)](https://github.com/felipexw/knn-java-library) - Just a simple implementation of K-Nearest Neighbors algorithm using with a bunch of similarity measures.

<a name="java-speech-recognition"></a>
#### Speech Recognition
* [CMU Sphinx](https://cmusphinx.github.io) - Open Source Toolkit For Speech Recognition purely based on Java speech recognition library.

<a name="java-data-analysis--data-visualization"></a>
#### Data Analysis / Data Visualization

* [Flink](https://flink.apache.org/) - Open source platform for distributed stream and batch data processing.
* [Hadoop ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/hadoop) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/hadoop)](https://github.com/apache/hadoop) - Hadoop/HDFS.
* [Onyx ![GitHub Repo Stars](https://img.shields.io/github/stars/onyx-platform/onyx) ![GitHub last commit](https://img.shields.io/github/last-commit/onyx-platform/onyx)](https://github.com/onyx-platform/onyx) - Distributed, masterless, high performance, fault tolerant data processing. Written entirely in Clojure.
* [Spark ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/spark) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/spark)](https://github.com/apache/spark) - Spark is a fast and general engine for large-scale data processing.
* [Storm](https://storm.apache.org/) - Storm is a distributed realtime computation system.
* [Impala ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudera/impala) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudera/impala)](https://github.com/cloudera/impala) - Real-time Query for Hadoop.
* [DataMelt](https://jwork.org/dmelt/) - Mathematics software for numeric computation, statistics, symbolic calculations, data analysis and data visualization.
* [Dr. Michael Thomas Flanagan's Java Scientific Library.](https://www.ee.ucl.ac.uk/~mflanaga/java/) **[Deprecated]**

<a name="java-deep-learning"></a>
#### Deep Learning

* [Deeplearning4j ![GitHub Repo Stars](https://img.shields.io/github/stars/deeplearning4j/deeplearning4j) ![GitHub last commit](https://img.shields.io/github/last-commit/deeplearning4j/deeplearning4j)](https://github.com/deeplearning4j/deeplearning4j) - Scalable deep learning for industry with parallel GPUs.
* [Keras Beginner Tutorial](https://victorzhou.com/blog/keras-neural-network-tutorial/) - Friendly guide on using Keras to implement a simple Neural Network in Python.
* [deepjavalibrary/djl ![GitHub Repo Stars](https://img.shields.io/github/stars/deepjavalibrary/djl) ![GitHub last commit](https://img.shields.io/github/last-commit/deepjavalibrary/djl)](https://github.com/deepjavalibrary/djl) - Deep Java Library (DJL) is an open-source, high-level, engine-agnostic Java framework for deep learning, designed to be easy to get started with and simple to use for Java developers.

<a name="javascript"></a>
## JavaScript

<a name="javascript-natural-language-processing"></a>
#### Natural Language Processing

* [Twitter-text ![GitHub Repo Stars](https://img.shields.io/github/stars/twitter/twitter-text) ![GitHub last commit](https://img.shields.io/github/last-commit/twitter/twitter-text)](https://github.com/twitter/twitter-text) - A JavaScript implementation of Twitter's text processing library.
* [natural ![GitHub Repo Stars](https://img.shields.io/github/stars/NaturalNode/natural) ![GitHub last commit](https://img.shields.io/github/last-commit/NaturalNode/natural)](https://github.com/NaturalNode/natural) - General natural language facilities for node.
* [Knwl.js ![GitHub Repo Stars](https://img.shields.io/github/stars/loadfive/Knwl.js) ![GitHub last commit](https://img.shields.io/github/last-commit/loadfive/Knwl.js)](https://github.com/loadfive/Knwl.js) - A Natural Language Processor in JS.
* [Retext ![GitHub Repo Stars](https://img.shields.io/github/stars/retextjs/retext) ![GitHub last commit](https://img.shields.io/github/last-commit/retextjs/retext)](https://github.com/retextjs/retext) - Extensible system for analyzing and manipulating natural language.
* [NLP Compromise ![GitHub Repo Stars](https://img.shields.io/github/stars/spencermountain/compromise) ![GitHub last commit](https://img.shields.io/github/last-commit/spencermountain/compromise)](https://github.com/spencermountain/compromise) - Natural Language processing in the browser.
* [nlp.js ![GitHub Repo Stars](https://img.shields.io/github/stars/axa-group/nlp.js) ![GitHub last commit](https://img.shields.io/github/last-commit/axa-group/nlp.js)](https://github.com/axa-group/nlp.js) - An NLP library built in node over Natural, with entity extraction, sentiment analysis, automatic language identify, and so more.



<a name="javascript-data-analysis--data-visualization"></a>
#### Data Analysis / Data Visualization

* [D3.js](https://d3js.org/)
* [High Charts](https://www.highcharts.com/)
* [NVD3.js](http://nvd3.org/)
* [dc.js](https://dc-js.github.io/dc.js/)
* [chartjs](https://www.chartjs.org/)
* [dimple](http://dimplejs.org/)
* [amCharts](https://www.amcharts.com/)
* [D3xter ![GitHub Repo Stars](https://img.shields.io/github/stars/NathanEpstein/D3xter) ![GitHub last commit](https://img.shields.io/github/last-commit/NathanEpstein/D3xter)](https://github.com/NathanEpstein/D3xter) - Straight forward plotting built on D3. **[Deprecated]**
* [statkit ![GitHub Repo Stars](https://img.shields.io/github/stars/rigtorp/statkit) ![GitHub last commit](https://img.shields.io/github/last-commit/rigtorp/statkit)](https://github.com/rigtorp/statkit) - Statistics kit for JavaScript. **[Deprecated]**
* [datakit ![GitHub Repo Stars](https://img.shields.io/github/stars/nathanepstein/datakit) ![GitHub last commit](https://img.shields.io/github/last-commit/nathanepstein/datakit)](https://github.com/nathanepstein/datakit) - A lightweight framework for data analysis in JavaScript
* [science.js ![GitHub Repo Stars](https://img.shields.io/github/stars/jasondavies/science.js) ![GitHub last commit](https://img.shields.io/github/last-commit/jasondavies/science.js)](https://github.com/jasondavies/science.js/) - Scientific and statistical computing in JavaScript. **[Deprecated]**
* [Z3d ![GitHub Repo Stars](https://img.shields.io/github/stars/NathanEpstein/Z3d) ![GitHub last commit](https://img.shields.io/github/last-commit/NathanEpstein/Z3d)](https://github.com/NathanEpstein/Z3d) - Easily make interactive 3d plots built on Three.js **[Deprecated]**
* [Sigma.js](http://sigmajs.org/) - JavaScript library dedicated to graph drawing.
* [C3.js](https://c3js.org/) - customizable library based on D3.js for easy chart drawing.
* [Datamaps](https://datamaps.github.io/) - Customizable SVG map/geo visualizations using D3.js. **[Deprecated]**
* [ZingChart](https://www.zingchart.com/) - library written on Vanilla JS for big data visualization.
* [cheminfo](https://www.cheminfo.org/) - Platform for data visualization and analysis, using the [visualizer ![GitHub Repo Stars](https://img.shields.io/github/stars/npellet/visualizer) ![GitHub last commit](https://img.shields.io/github/last-commit/npellet/visualizer)](https://github.com/npellet/visualizer) project.
* [Learn JS Data](http://learnjsdata.com/)
* [AnyChart](https://www.anychart.com/)
* [FusionCharts](https://www.fusioncharts.com/)
* [Nivo](https://nivo.rocks) - built on top of the awesome d3 and Reactjs libraries


<a name="javascript-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [Auto ML ![GitHub Repo Stars](https://img.shields.io/github/stars/ClimbsRocks/auto_ml) ![GitHub last commit](https://img.shields.io/github/last-commit/ClimbsRocks/auto_ml)](https://github.com/ClimbsRocks/auto_ml) - Automated machine learning, data formatting, ensembling, and hyperparameter optimization for competitions and exploration- just give it a .csv file! **[Deprecated]**
* [Convnet.js](https://cs.stanford.edu/people/karpathy/convnetjs/) - ConvNetJS is a JavaScript library for training Deep Learning models[DEEP LEARNING] **[Deprecated]**
* [Clusterfck](https://harthur.github.io/clusterfck/) - Agglomerative hierarchical clustering implemented in JavaScript for Node.js and the browser. **[Deprecated]**
* [Clustering.js ![GitHub Repo Stars](https://img.shields.io/github/stars/emilbayes/clustering.js) ![GitHub last commit](https://img.shields.io/github/last-commit/emilbayes/clustering.js)](https://github.com/emilbayes/clustering.js) - Clustering algorithms implemented in JavaScript for Node.js and the browser. **[Deprecated]**
* [Decision Trees ![GitHub Repo Stars](https://img.shields.io/github/stars/serendipious/nodejs-decision-tree-id3) ![GitHub last commit](https://img.shields.io/github/last-commit/serendipious/nodejs-decision-tree-id3)](https://github.com/serendipious/nodejs-decision-tree-id3) - NodeJS Implementation of Decision Tree using ID3 Algorithm. **[Deprecated]**
* [DN2A ![GitHub Repo Stars](https://img.shields.io/github/stars/antoniodeluca/dn2a.js) ![GitHub last commit](https://img.shields.io/github/last-commit/antoniodeluca/dn2a.js)](https://github.com/antoniodeluca/dn2a.js) - Digital Neural Networks Architecture. **[Deprecated]**
* [figue](https://code.google.com/archive/p/figue) - K-means, fuzzy c-means and agglomerative clustering.
* [Gaussian Mixture Model ![GitHub Repo Stars](https://img.shields.io/github/stars/lukapopijac/gaussian-mixture-model) ![GitHub last commit](https://img.shields.io/github/last-commit/lukapopijac/gaussian-mixture-model)](https://github.com/lukapopijac/gaussian-mixture-model) - Unsupervised machine learning with multivariate Gaussian mixture model.
* [Node-fann ![GitHub Repo Stars](https://img.shields.io/github/stars/rlidwka/node-fann) ![GitHub last commit](https://img.shields.io/github/last-commit/rlidwka/node-fann)](https://github.com/rlidwka/node-fann) - FANN (Fast Artificial Neural Network Library) bindings for Node.js **[Deprecated]**
* [Keras.js ![GitHub Repo Stars](https://img.shields.io/github/stars/transcranial/keras-js) ![GitHub last commit](https://img.shields.io/github/last-commit/transcranial/keras-js)](https://github.com/transcranial/keras-js) - Run Keras models in the browser, with GPU support provided by WebGL 2.
* [Kmeans.js ![GitHub Repo Stars](https://img.shields.io/github/stars/emilbayes/kMeans.js) ![GitHub last commit](https://img.shields.io/github/last-commit/emilbayes/kMeans.js)](https://github.com/emilbayes/kMeans.js) - Simple JavaScript implementation of the k-means algorithm, for node.js and the browser. **[Deprecated]**
* [LDA.js ![GitHub Repo Stars](https://img.shields.io/github/stars/primaryobjects/lda) ![GitHub last commit](https://img.shields.io/github/last-commit/primaryobjects/lda)](https://github.com/primaryobjects/lda) - LDA topic modelling for Node.js
* [Learning.js ![GitHub Repo Stars](https://img.shields.io/github/stars/yandongliu/learningjs) ![GitHub last commit](https://img.shields.io/github/last-commit/yandongliu/learningjs)](https://github.com/yandongliu/learningjs) - JavaScript implementation of logistic regression/c4.5 decision tree **[Deprecated]**
* [machinelearn.js ![GitHub Repo Stars](https://img.shields.io/github/stars/machinelearnjs/machinelearnjs) ![GitHub last commit](https://img.shields.io/github/last-commit/machinelearnjs/machinelearnjs)](https://github.com/machinelearnjs/machinelearnjs) - Machine Learning library for the web, Node.js and developers
* [mil-tokyo](https://github.com/mil-tokyo) - List of several machine learning libraries.
* [Node-SVM ![GitHub Repo Stars](https://img.shields.io/github/stars/nicolaspanel/node-svm) ![GitHub last commit](https://img.shields.io/github/last-commit/nicolaspanel/node-svm)](https://github.com/nicolaspanel/node-svm) - Support Vector Machine for Node.js
* [Brain ![GitHub Repo Stars](https://img.shields.io/github/stars/harthur/brain) ![GitHub last commit](https://img.shields.io/github/last-commit/harthur/brain)](https://github.com/harthur/brain) - Neural networks in JavaScript **[Deprecated]**
* [Brain.js ![GitHub Repo Stars](https://img.shields.io/github/stars/BrainJS/brain.js) ![GitHub last commit](https://img.shields.io/github/last-commit/BrainJS/brain.js)](https://github.com/BrainJS/brain.js) - Neural networks in JavaScript - continued community fork of [Brain ![GitHub Repo Stars](https://img.shields.io/github/stars/harthur/brain) ![GitHub last commit](https://img.shields.io/github/last-commit/harthur/brain)](https://github.com/harthur/brain).
* [Bayesian-Bandit ![GitHub Repo Stars](https://img.shields.io/github/stars/omphalos/bayesian-bandit.js) ![GitHub last commit](https://img.shields.io/github/last-commit/omphalos/bayesian-bandit.js)](https://github.com/omphalos/bayesian-bandit.js) - Bayesian bandit implementation for Node and the browser. **[Deprecated]**
* [Synaptic ![GitHub Repo Stars](https://img.shields.io/github/stars/cazala/synaptic) ![GitHub last commit](https://img.shields.io/github/last-commit/cazala/synaptic)](https://github.com/cazala/synaptic) - Architecture-free neural network library for Node.js and the browser.
* [kNear ![GitHub Repo Stars](https://img.shields.io/github/stars/NathanEpstein/kNear) ![GitHub last commit](https://img.shields.io/github/last-commit/NathanEpstein/kNear)](https://github.com/NathanEpstein/kNear) - JavaScript implementation of the k nearest neighbors algorithm for supervised learning.
* [NeuralN ![GitHub Repo Stars](https://img.shields.io/github/stars/totemstech/neuraln) ![GitHub last commit](https://img.shields.io/github/last-commit/totemstech/neuraln)](https://github.com/totemstech/neuraln) - C++ Neural Network library for Node.js. It has advantage on large dataset and multi-threaded training. **[Deprecated]**
* [kalman ![GitHub Repo Stars](https://img.shields.io/github/stars/itamarwe/kalman) ![GitHub last commit](https://img.shields.io/github/last-commit/itamarwe/kalman)](https://github.com/itamarwe/kalman) - Kalman filter for JavaScript. **[Deprecated]**
* [shaman ![GitHub Repo Stars](https://img.shields.io/github/stars/luccastera/shaman) ![GitHub last commit](https://img.shields.io/github/last-commit/luccastera/shaman)](https://github.com/luccastera/shaman) - Node.js library with support for both simple and multiple linear regression. **[Deprecated]**
* [ml.js ![GitHub Repo Stars](https://img.shields.io/github/stars/mljs/ml) ![GitHub last commit](https://img.shields.io/github/last-commit/mljs/ml)](https://github.com/mljs/ml) - Machine learning and numerical analysis tools for Node.js and the Browser!
* [ml5 ![GitHub Repo Stars](https://img.shields.io/github/stars/ml5js/ml5-library) ![GitHub last commit](https://img.shields.io/github/last-commit/ml5js/ml5-library)](https://github.com/ml5js/ml5-library) - Friendly machine learning for the web!
* [Pavlov.js ![GitHub Repo Stars](https://img.shields.io/github/stars/NathanEpstein/Pavlov.js) ![GitHub last commit](https://img.shields.io/github/last-commit/NathanEpstein/Pavlov.js)](https://github.com/NathanEpstein/Pavlov.js) - Reinforcement learning using Markov Decision Processes.
* [MXNet ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/incubator-mxnet) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/incubator-mxnet)](https://github.com/apache/incubator-mxnet) - Lightweight, Portable, Flexible Distributed/Mobile Deep Learning with Dynamic, Mutation-aware Dataflow Dep Scheduler; for Python, R, Julia, Go, JavaScript and more.
* [TensorFlow.js](https://js.tensorflow.org/) - A WebGL accelerated, browser based JavaScript library for training and deploying ML models.
* [JSMLT ![GitHub Repo Stars](https://img.shields.io/github/stars/jsmlt/jsmlt) ![GitHub last commit](https://img.shields.io/github/last-commit/jsmlt/jsmlt)](https://github.com/jsmlt/jsmlt) - Machine learning toolkit with classification and clustering for Node.js; supports visualization (see [visualml.io](https://visualml.io)).
* [xgboost-node ![GitHub Repo Stars](https://img.shields.io/github/stars/nuanio/xgboost-node) ![GitHub last commit](https://img.shields.io/github/last-commit/nuanio/xgboost-node)](https://github.com/nuanio/xgboost-node) - Run XGBoost model and make predictions in Node.js.
* [Netron ![GitHub Repo Stars](https://img.shields.io/github/stars/lutzroeder/netron) ![GitHub last commit](https://img.shields.io/github/last-commit/lutzroeder/netron)](https://github.com/lutzroeder/netron) - Visualizer for machine learning models.
* [tensor-js ![GitHub Repo Stars](https://img.shields.io/github/stars/Hoff97/tensorjs) ![GitHub last commit](https://img.shields.io/github/last-commit/Hoff97/tensorjs)](https://github.com/Hoff97/tensorjs) - A deep learning library for the browser, accelerated by WebGL and WebAssembly.
* [WebDNN ![GitHub Repo Stars](https://img.shields.io/github/stars/mil-tokyo/webdnn) ![GitHub last commit](https://img.shields.io/github/last-commit/mil-tokyo/webdnn)](https://github.com/mil-tokyo/webdnn) - Fast Deep Neural Network JavaScript Framework. WebDNN uses next generation JavaScript API, WebGPU for GPU execution, and WebAssembly for CPU execution.

<a name="javascript-misc"></a>
#### Misc

* [stdlib ![GitHub Repo Stars](https://img.shields.io/github/stars/stdlib-js/stdlib) ![GitHub last commit](https://img.shields.io/github/last-commit/stdlib-js/stdlib)](https://github.com/stdlib-js/stdlib) - A standard library for JavaScript and Node.js, with an emphasis on numeric computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.
* [sylvester ![GitHub Repo Stars](https://img.shields.io/github/stars/jcoglan/sylvester) ![GitHub last commit](https://img.shields.io/github/last-commit/jcoglan/sylvester)](https://github.com/jcoglan/sylvester) - Vector and Matrix math for JavaScript. **[Deprecated]**
* [simple-statistics ![GitHub Repo Stars](https://img.shields.io/github/stars/simple-statistics/simple-statistics) ![GitHub last commit](https://img.shields.io/github/last-commit/simple-statistics/simple-statistics)](https://github.com/simple-statistics/simple-statistics) - A JavaScript implementation of descriptive, regression, and inference statistics. Implemented in literate JavaScript with no dependencies, designed to work in all modern browsers (including IE) as well as in Node.js.
* [regression-js ![GitHub Repo Stars](https://img.shields.io/github/stars/Tom-Alexander/regression-js) ![GitHub last commit](https://img.shields.io/github/last-commit/Tom-Alexander/regression-js)](https://github.com/Tom-Alexander/regression-js) - A javascript library containing a collection of least squares fitting methods for finding a trend in a set of data.
* [Lyric ![GitHub Repo Stars](https://img.shields.io/github/stars/flurry/Lyric) ![GitHub last commit](https://img.shields.io/github/last-commit/flurry/Lyric)](https://github.com/flurry/Lyric) - Linear Regression library. **[Deprecated]**
* [GreatCircle ![GitHub Repo Stars](https://img.shields.io/github/stars/mwgg/GreatCircle) ![GitHub last commit](https://img.shields.io/github/last-commit/mwgg/GreatCircle)](https://github.com/mwgg/GreatCircle) - Library for calculating great circle distance.
* [MLPleaseHelp ![GitHub Repo Stars](https://img.shields.io/github/stars/jgreenemi/MLPleaseHelp) ![GitHub last commit](https://img.shields.io/github/last-commit/jgreenemi/MLPleaseHelp)](https://github.com/jgreenemi/MLPleaseHelp) - MLPleaseHelp is a simple ML resource search engine. You can use this search engine right now at [https://jgreenemi.github.io/MLPleaseHelp/](https://jgreenemi.github.io/MLPleaseHelp/), provided via GitHub Pages.
* [Pipcook ![GitHub Repo Stars](https://img.shields.io/github/stars/alibaba/pipcook) ![GitHub last commit](https://img.shields.io/github/last-commit/alibaba/pipcook)](https://github.com/alibaba/pipcook) - A JavaScript application framework for machine learning and its engineering.

<a name="javascript-demos-and-scripts"></a>
#### Demos and Scripts
* [The Bot ![GitHub Repo Stars](https://img.shields.io/github/stars/sta-ger/TheBot) ![GitHub last commit](https://img.shields.io/github/last-commit/sta-ger/TheBot)](https://github.com/sta-ger/TheBot) - Example of how the neural network learns to predict the angle between two points created with [Synaptic ![GitHub Repo Stars](https://img.shields.io/github/stars/cazala/synaptic) ![GitHub last commit](https://img.shields.io/github/last-commit/cazala/synaptic)](https://github.com/cazala/synaptic).
* [Half Beer ![GitHub Repo Stars](https://img.shields.io/github/stars/sta-ger/HalfBeer) ![GitHub last commit](https://img.shields.io/github/last-commit/sta-ger/HalfBeer)](https://github.com/sta-ger/HalfBeer) - Beer glass classifier created with [Synaptic ![GitHub Repo Stars](https://img.shields.io/github/stars/cazala/synaptic) ![GitHub last commit](https://img.shields.io/github/last-commit/cazala/synaptic)](https://github.com/cazala/synaptic).
* [NSFWJS](http://nsfwjs.com) - Indecent content checker with TensorFlow.js
* [Rock Paper Scissors](https://rps-tfjs.netlify.com/) - Rock Paper Scissors trained in the browser with TensorFlow.js
* [Heroes Wear Masks](https://heroeswearmasks.fun/) - A fun TensorFlow.js-based oracle that tells, whether one wears a face mask or not. It can even tell when one wears the mask incorrectly.

<a name="julia"></a>
## Julia

<a name="julia-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [MachineLearning ![GitHub Repo Stars](https://img.shields.io/github/stars/benhamner/MachineLearning.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/benhamner/MachineLearning.jl)](https://github.com/benhamner/MachineLearning.jl) - Julia Machine Learning library. **[Deprecated]**
* [MLBase ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaStats/MLBase.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaStats/MLBase.jl)](https://github.com/JuliaStats/MLBase.jl) - A set of functions to support the development of machine learning algorithms.
* [PGM ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaStats/PGM.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaStats/PGM.jl)](https://github.com/JuliaStats/PGM.jl) - A Julia framework for probabilistic graphical models.
* [DA ![GitHub Repo Stars](https://img.shields.io/github/stars/trthatcher/DiscriminantAnalysis.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/trthatcher/DiscriminantAnalysis.jl)](https://github.com/trthatcher/DiscriminantAnalysis.jl) - Julia package for Regularized Discriminant Analysis.
* [Regression ![GitHub Repo Stars](https://img.shields.io/github/stars/lindahua/Regression.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/lindahua/Regression.jl)](https://github.com/lindahua/Regression.jl) - Algorithms for regression analysis (e.g. linear regression and logistic regression). **[Deprecated]**
* [Local Regression ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaStats/Loess.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaStats/Loess.jl)](https://github.com/JuliaStats/Loess.jl) - Local regression, so smooooth!
* [Naive Bayes ![GitHub Repo Stars](https://img.shields.io/github/stars/nutsiepully/NaiveBayes.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/nutsiepully/NaiveBayes.jl)](https://github.com/nutsiepully/NaiveBayes.jl) - Simple Naive Bayes implementation in Julia. **[Deprecated]**
* [Mixed Models ![GitHub Repo Stars](https://img.shields.io/github/stars/dmbates/MixedModels.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/dmbates/MixedModels.jl)](https://github.com/dmbates/MixedModels.jl) - A Julia package for fitting (statistical) mixed-effects models.
* [Simple MCMC ![GitHub Repo Stars](https://img.shields.io/github/stars/fredo-dedup/SimpleMCMC.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/fredo-dedup/SimpleMCMC.jl)](https://github.com/fredo-dedup/SimpleMCMC.jl) - basic MCMC sampler implemented in Julia. **[Deprecated]**
* [Distances ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaStats/Distances.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaStats/Distances.jl)](https://github.com/JuliaStats/Distances.jl) - Julia module for Distance evaluation.
* [Decision Tree ![GitHub Repo Stars](https://img.shields.io/github/stars/bensadeghi/DecisionTree.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/bensadeghi/DecisionTree.jl)](https://github.com/bensadeghi/DecisionTree.jl) - Decision Tree Classifier and Regressor.
* [Neural ![GitHub Repo Stars](https://img.shields.io/github/stars/compressed/BackpropNeuralNet.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/compressed/BackpropNeuralNet.jl)](https://github.com/compressed/BackpropNeuralNet.jl) - A neural network in Julia.
* [MCMC ![GitHub Repo Stars](https://img.shields.io/github/stars/doobwa/MCMC.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/doobwa/MCMC.jl)](https://github.com/doobwa/MCMC.jl) - MCMC tools for Julia. **[Deprecated]**
* [Mamba ![GitHub Repo Stars](https://img.shields.io/github/stars/brian-j-smith/Mamba.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/brian-j-smith/Mamba.jl)](https://github.com/brian-j-smith/Mamba.jl) - Markov chain Monte Carlo (MCMC) for Bayesian analysis in Julia.
* [GLM ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaStats/GLM.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaStats/GLM.jl)](https://github.com/JuliaStats/GLM.jl) - Generalized linear models in Julia.
* [Gaussian Processes ![GitHub Repo Stars](https://img.shields.io/github/stars/STOR-i/GaussianProcesses.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/STOR-i/GaussianProcesses.jl)](https://github.com/STOR-i/GaussianProcesses.jl) - Julia package for Gaussian processes.
* [Online Learning ![GitHub Repo Stars](https://img.shields.io/github/stars/lendle/OnlineLearning.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/lendle/OnlineLearning.jl)](https://github.com/lendle/OnlineLearning.jl) **[Deprecated]**
* [GLMNet ![GitHub Repo Stars](https://img.shields.io/github/stars/simonster/GLMNet.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/simonster/GLMNet.jl)](https://github.com/simonster/GLMNet.jl) - Julia wrapper for fitting Lasso/ElasticNet GLM models using glmnet.
* [Clustering ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaStats/Clustering.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaStats/Clustering.jl)](https://github.com/JuliaStats/Clustering.jl) - Basic functions for clustering data: k-means, dp-means, etc.
* [SVM ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaStats/SVM.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaStats/SVM.jl)](https://github.com/JuliaStats/SVM.jl) - SVM for Julia. **[Deprecated]**
* [Kernel Density ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaStats/KernelDensity.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaStats/KernelDensity.jl)](https://github.com/JuliaStats/KernelDensity.jl) - Kernel density estimators for Julia.
* [MultivariateStats ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaStats/MultivariateStats.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaStats/MultivariateStats.jl)](https://github.com/JuliaStats/MultivariateStats.jl) - Methods for dimensionality reduction.
* [NMF ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaStats/NMF.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaStats/NMF.jl)](https://github.com/JuliaStats/NMF.jl) - A Julia package for non-negative matrix factorization.
* [ANN ![GitHub Repo Stars](https://img.shields.io/github/stars/EricChiang/ANN.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/EricChiang/ANN.jl)](https://github.com/EricChiang/ANN.jl) - Julia artificial neural networks. **[Deprecated]**
* [Mocha ![GitHub Repo Stars](https://img.shields.io/github/stars/pluskid/Mocha.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/pluskid/Mocha.jl)](https://github.com/pluskid/Mocha.jl) - Deep Learning framework for Julia inspired by Caffe. **[Deprecated]**
* [XGBoost ![GitHub Repo Stars](https://img.shields.io/github/stars/dmlc/XGBoost.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/dmlc/XGBoost.jl)](https://github.com/dmlc/XGBoost.jl) - eXtreme Gradient Boosting Package in Julia.
* [ManifoldLearning ![GitHub Repo Stars](https://img.shields.io/github/stars/wildart/ManifoldLearning.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/wildart/ManifoldLearning.jl)](https://github.com/wildart/ManifoldLearning.jl) - A Julia package for manifold learning and nonlinear dimensionality reduction.
* [MXNet ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/incubator-mxnet) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/incubator-mxnet)](https://github.com/apache/incubator-mxnet) - Lightweight, Portable, Flexible Distributed/Mobile Deep Learning with Dynamic, Mutation-aware Dataflow Dep Scheduler; for Python, R, Julia, Go, JavaScript and more.
* [Merlin ![GitHub Repo Stars](https://img.shields.io/github/stars/hshindo/Merlin.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/hshindo/Merlin.jl)](https://github.com/hshindo/Merlin.jl) - Flexible Deep Learning Framework in Julia.
* [ROCAnalysis ![GitHub Repo Stars](https://img.shields.io/github/stars/davidavdav/ROCAnalysis.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/davidavdav/ROCAnalysis.jl)](https://github.com/davidavdav/ROCAnalysis.jl) - Receiver Operating Characteristics and functions for evaluation probabilistic binary classifiers.
* [GaussianMixtures ![GitHub Repo Stars](https://img.shields.io/github/stars/davidavdav/GaussianMixtures.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/davidavdav/GaussianMixtures.jl)](https://github.com/davidavdav/GaussianMixtures.jl) - Large scale Gaussian Mixture Models.
* [ScikitLearn ![GitHub Repo Stars](https://img.shields.io/github/stars/cstjean/ScikitLearn.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/cstjean/ScikitLearn.jl)](https://github.com/cstjean/ScikitLearn.jl) - Julia implementation of the scikit-learn API.
* [Knet ![GitHub Repo Stars](https://img.shields.io/github/stars/denizyuret/Knet.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/denizyuret/Knet.jl)](https://github.com/denizyuret/Knet.jl) - Koç University Deep Learning Framework.
* [Flux](https://fluxml.ai/) - Relax! Flux is the ML library that doesn't make you tensor
* [MLJ ![GitHub Repo Stars](https://img.shields.io/github/stars/alan-turing-institute/MLJ.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/alan-turing-institute/MLJ.jl)](https://github.com/alan-turing-institute/MLJ.jl) - A Julia machine learning framework.

<a name="julia-natural-language-processing"></a>
#### Natural Language Processing

* [Topic Models ![GitHub Repo Stars](https://img.shields.io/github/stars/slycoder/TopicModels.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/slycoder/TopicModels.jl)](https://github.com/slycoder/TopicModels.jl) - TopicModels for Julia. **[Deprecated]**
* [Text Analysis ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaText/TextAnalysis.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaText/TextAnalysis.jl)](https://github.com/JuliaText/TextAnalysis.jl) - Julia package for text analysis.
* [Word Tokenizers ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaText/WordTokenizers.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaText/WordTokenizers.jl)](https://github.com/JuliaText/WordTokenizers.jl) - Tokenizers for Natural Language Processing in Julia
* [Corpus Loaders ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaText/CorpusLoaders.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaText/CorpusLoaders.jl)](https://github.com/JuliaText/CorpusLoaders.jl) - A Julia package providing a variety of loaders for various NLP corpora.
* [Embeddings ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaText/Embeddings.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaText/Embeddings.jl)](https://github.com/JuliaText/Embeddings.jl) - Functions and data dependencies for loading various word embeddings
* [Languages ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaText/Languages.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaText/Languages.jl)](https://github.com/JuliaText/Languages.jl) - Julia package for working with various human languages
* [WordNet ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaText/WordNet.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaText/WordNet.jl)](https://github.com/JuliaText/WordNet.jl) - A Julia package for Princeton's WordNet

<a name="julia-data-analysis--data-visualization"></a>
#### Data Analysis / Data Visualization

* [Graph Layout ![GitHub Repo Stars](https://img.shields.io/github/stars/IainNZ/GraphLayout.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/IainNZ/GraphLayout.jl)](https://github.com/IainNZ/GraphLayout.jl) - Graph layout algorithms in pure Julia.
* [LightGraphs ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaGraphs/LightGraphs.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaGraphs/LightGraphs.jl)](https://github.com/JuliaGraphs/LightGraphs.jl) - Graph modelling and analysis.
* [Data Frames Meta ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaData/DataFramesMeta.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaData/DataFramesMeta.jl)](https://github.com/JuliaData/DataFramesMeta.jl) - Metaprogramming tools for DataFrames.
* [Julia Data ![GitHub Repo Stars](https://img.shields.io/github/stars/nfoti/JuliaData) ![GitHub last commit](https://img.shields.io/github/last-commit/nfoti/JuliaData)](https://github.com/nfoti/JuliaData) - library for working with tabular data in Julia. **[Deprecated]**
* [Data Read ![GitHub Repo Stars](https://img.shields.io/github/stars/queryverse/ReadStat.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/queryverse/ReadStat.jl)](https://github.com/queryverse/ReadStat.jl) - Read files from Stata, SAS, and SPSS.
* [Hypothesis Tests ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaStats/HypothesisTests.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaStats/HypothesisTests.jl)](https://github.com/JuliaStats/HypothesisTests.jl) - Hypothesis tests for Julia.
* [Gadfly ![GitHub Repo Stars](https://img.shields.io/github/stars/GiovineItalia/Gadfly.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/GiovineItalia/Gadfly.jl)](https://github.com/GiovineItalia/Gadfly.jl) - Crafty statistical graphics for Julia.
* [Stats ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaStats/StatsKit.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaStats/StatsKit.jl)](https://github.com/JuliaStats/StatsKit.jl) - Statistical tests for Julia.
* [RDataSets ![GitHub Repo Stars](https://img.shields.io/github/stars/johnmyleswhite/RDatasets.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/johnmyleswhite/RDatasets.jl)](https://github.com/johnmyleswhite/RDatasets.jl) - Julia package for loading many of the data sets available in R.
* [DataFrames ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaData/DataFrames.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaData/DataFrames.jl)](https://github.com/JuliaData/DataFrames.jl) - library for working with tabular data in Julia.
* [Distributions ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaStats/Distributions.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaStats/Distributions.jl)](https://github.com/JuliaStats/Distributions.jl) - A Julia package for probability distributions and associated functions.
* [Data Arrays ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaStats/DataArrays.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaStats/DataArrays.jl)](https://github.com/JuliaStats/DataArrays.jl) - Data structures that allow missing values. **[Deprecated]**
* [Time Series ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaStats/TimeSeries.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaStats/TimeSeries.jl)](https://github.com/JuliaStats/TimeSeries.jl) - Time series toolkit for Julia.
* [Sampling ![GitHub Repo Stars](https://img.shields.io/github/stars/lindahua/Sampling.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/lindahua/Sampling.jl)](https://github.com/lindahua/Sampling.jl) - Basic sampling algorithms for Julia.

<a name="julia-misc-stuff--presentations"></a>
#### Misc Stuff / Presentations

* [DSP ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaDSP/DSP.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaDSP/DSP.jl)](https://github.com/JuliaDSP/DSP.jl) - Digital Signal Processing (filtering, periodograms, spectrograms, window functions).
* [JuliaCon Presentations ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaCon/presentations) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaCon/presentations)](https://github.com/JuliaCon/presentations) - Presentations for JuliaCon.
* [SignalProcessing ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaDSP/DSP.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaDSP/DSP.jl)](https://github.com/JuliaDSP/DSP.jl) - Signal Processing tools for Julia.
* [Images ![GitHub Repo Stars](https://img.shields.io/github/stars/JuliaImages/Images.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/JuliaImages/Images.jl)](https://github.com/JuliaImages/Images.jl) - An image library for Julia.
* [DataDeps ![GitHub Repo Stars](https://img.shields.io/github/stars/oxinabox/DataDeps.jl) ![GitHub last commit](https://img.shields.io/github/last-commit/oxinabox/DataDeps.jl)](https://github.com/oxinabox/DataDeps.jl) - Reproducible data setup for reproducible science.

<a name="kotlin"></a>
## Kotlin

<a name="kotlin-deep-learning"></a>
#### Deep Learning
* [KotlinDL ![GitHub Repo Stars](https://img.shields.io/github/stars/JetBrains/KotlinDL) ![GitHub last commit](https://img.shields.io/github/last-commit/JetBrains/KotlinDL)](https://github.com/JetBrains/KotlinDL) - Deep learning framework written in Kotlin.

<a name="lua"></a>
## Lua

<a name="lua-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [Torch7](http://torch.ch/)
  * [cephes ![GitHub Repo Stars](https://img.shields.io/github/stars/deepmind/torch-cephes) ![GitHub last commit](https://img.shields.io/github/last-commit/deepmind/torch-cephes)](https://github.com/deepmind/torch-cephes) - Cephes mathematical functions library, wrapped for Torch. Provides and wraps the 180+ special mathematical functions from the Cephes mathematical library, developed by Stephen L. Moshier. It is used, among many other places, at the heart of SciPy. **[Deprecated]**
  * [autograd ![GitHub Repo Stars](https://img.shields.io/github/stars/twitter/torch-autograd) ![GitHub last commit](https://img.shields.io/github/last-commit/twitter/torch-autograd)](https://github.com/twitter/torch-autograd) - Autograd automatically differentiates native Torch code. Inspired by the original Python version.
  * [graph ![GitHub Repo Stars](https://img.shields.io/github/stars/torch/graph) ![GitHub last commit](https://img.shields.io/github/last-commit/torch/graph)](https://github.com/torch/graph) - Graph package for Torch. **[Deprecated]**
  * [randomkit ![GitHub Repo Stars](https://img.shields.io/github/stars/deepmind/torch-randomkit) ![GitHub last commit](https://img.shields.io/github/last-commit/deepmind/torch-randomkit)](https://github.com/deepmind/torch-randomkit) - Numpy's randomkit, wrapped for Torch. **[Deprecated]**
  * [signal ![GitHub Repo Stars](https://img.shields.io/github/stars/soumith/torch-signal) ![GitHub last commit](https://img.shields.io/github/last-commit/soumith/torch-signal)](https://github.com/soumith/torch-signal) - A signal processing toolbox for Torch-7. FFT, DCT, Hilbert, cepstrums, stft.
  * [nn ![GitHub Repo Stars](https://img.shields.io/github/stars/torch/nn) ![GitHub last commit](https://img.shields.io/github/last-commit/torch/nn)](https://github.com/torch/nn) - Neural Network package for Torch.
  * [torchnet ![GitHub Repo Stars](https://img.shields.io/github/stars/torchnet/torchnet) ![GitHub last commit](https://img.shields.io/github/last-commit/torchnet/torchnet)](https://github.com/torchnet/torchnet) - framework for torch which provides a set of abstractions aiming at encouraging code re-use as well as encouraging modular programming.
  * [nngraph ![GitHub Repo Stars](https://img.shields.io/github/stars/torch/nngraph) ![GitHub last commit](https://img.shields.io/github/last-commit/torch/nngraph)](https://github.com/torch/nngraph) - This package provides graphical computation for nn library in Torch7.
  * [nnx ![GitHub Repo Stars](https://img.shields.io/github/stars/clementfarabet/lua---nnx) ![GitHub last commit](https://img.shields.io/github/last-commit/clementfarabet/lua---nnx)](https://github.com/clementfarabet/lua---nnx) - A completely unstable and experimental package that extends Torch's builtin nn library.
  * [rnn ![GitHub Repo Stars](https://img.shields.io/github/stars/Element-Research/rnn) ![GitHub last commit](https://img.shields.io/github/last-commit/Element-Research/rnn)](https://github.com/Element-Research/rnn) - A Recurrent Neural Network library that extends Torch's nn. RNNs, LSTMs, GRUs, BRNNs, BLSTMs, etc.
  * [dpnn ![GitHub Repo Stars](https://img.shields.io/github/stars/Element-Research/dpnn) ![GitHub last commit](https://img.shields.io/github/last-commit/Element-Research/dpnn)](https://github.com/Element-Research/dpnn) - Many useful features that aren't part of the main nn package.
  * [dp ![GitHub Repo Stars](https://img.shields.io/github/stars/nicholas-leonard/dp) ![GitHub last commit](https://img.shields.io/github/last-commit/nicholas-leonard/dp)](https://github.com/nicholas-leonard/dp) - A deep learning library designed for streamlining research and development using the Torch7 distribution. It emphasizes flexibility through the elegant use of object-oriented design patterns. **[Deprecated]**
  * [optim ![GitHub Repo Stars](https://img.shields.io/github/stars/torch/optim) ![GitHub last commit](https://img.shields.io/github/last-commit/torch/optim)](https://github.com/torch/optim) - An optimization library for Torch. SGD, Adagrad, Conjugate-Gradient, LBFGS, RProp and more.
  * [unsup ![GitHub Repo Stars](https://img.shields.io/github/stars/koraykv/unsup) ![GitHub last commit](https://img.shields.io/github/last-commit/koraykv/unsup)](https://github.com/koraykv/unsup) - A package for unsupervised learning in Torch. Provides modules that are compatible with nn (LinearPsd, ConvPsd, AutoEncoder, ...), and self-contained algorithms (k-means, PCA). **[Deprecated]**
  * [manifold ![GitHub Repo Stars](https://img.shields.io/github/stars/clementfarabet/manifold) ![GitHub last commit](https://img.shields.io/github/last-commit/clementfarabet/manifold)](https://github.com/clementfarabet/manifold) - A package to manipulate manifolds.
  * [svm ![GitHub Repo Stars](https://img.shields.io/github/stars/koraykv/torch-svm) ![GitHub last commit](https://img.shields.io/github/last-commit/koraykv/torch-svm)](https://github.com/koraykv/torch-svm) - Torch-SVM library. **[Deprecated]**
  * [lbfgs ![GitHub Repo Stars](https://img.shields.io/github/stars/clementfarabet/lbfgs) ![GitHub last commit](https://img.shields.io/github/last-commit/clementfarabet/lbfgs)](https://github.com/clementfarabet/lbfgs) - FFI Wrapper for liblbfgs. **[Deprecated]**
  * [vowpalwabbit ![GitHub Repo Stars](https://img.shields.io/github/stars/clementfarabet/vowpal_wabbit) ![GitHub last commit](https://img.shields.io/github/last-commit/clementfarabet/vowpal_wabbit)](https://github.com/clementfarabet/vowpal_wabbit) - An old vowpalwabbit interface to torch. **[Deprecated]**
  * [OpenGM ![GitHub Repo Stars](https://img.shields.io/github/stars/clementfarabet/lua---opengm) ![GitHub last commit](https://img.shields.io/github/last-commit/clementfarabet/lua---opengm)](https://github.com/clementfarabet/lua---opengm) - OpenGM is a C++ library for graphical modelling, and inference. The Lua bindings provide a simple way of describing graphs, from Lua, and then optimizing them with OpenGM. **[Deprecated]**
  * [spaghetti ![GitHub Repo Stars](https://img.shields.io/github/stars/MichaelMathieu/lua---spaghetti) ![GitHub last commit](https://img.shields.io/github/last-commit/MichaelMathieu/lua---spaghetti)](https://github.com/MichaelMathieu/lua---spaghetti) - Spaghetti (sparse linear) module for torch7 by @MichaelMathieu **[Deprecated]**
  * [LuaSHKit ![GitHub Repo Stars](https://img.shields.io/github/stars/ocallaco/LuaSHkit) ![GitHub last commit](https://img.shields.io/github/last-commit/ocallaco/LuaSHkit)](https://github.com/ocallaco/LuaSHkit) - A Lua wrapper around the Locality sensitive hashing library SHKit **[Deprecated]**
  * [kernel smoothing ![GitHub Repo Stars](https://img.shields.io/github/stars/rlowrance/kernel-smoothers) ![GitHub last commit](https://img.shields.io/github/last-commit/rlowrance/kernel-smoothers)](https://github.com/rlowrance/kernel-smoothers) - KNN, kernel-weighted average, local linear regression smoothers. **[Deprecated]**
  * [cutorch ![GitHub Repo Stars](https://img.shields.io/github/stars/torch/cutorch) ![GitHub last commit](https://img.shields.io/github/last-commit/torch/cutorch)](https://github.com/torch/cutorch) - Torch CUDA Implementation.
  * [cunn ![GitHub Repo Stars](https://img.shields.io/github/stars/torch/cunn) ![GitHub last commit](https://img.shields.io/github/last-commit/torch/cunn)](https://github.com/torch/cunn) - Torch CUDA Neural Network Implementation.
  * [imgraph ![GitHub Repo Stars](https://img.shields.io/github/stars/clementfarabet/lua---imgraph) ![GitHub last commit](https://img.shields.io/github/last-commit/clementfarabet/lua---imgraph)](https://github.com/clementfarabet/lua---imgraph) - An image/graph library for Torch. This package provides routines to construct graphs on images, segment them, build trees out of them, and convert them back to images. **[Deprecated]**
  * [videograph ![GitHub Repo Stars](https://img.shields.io/github/stars/clementfarabet/videograph) ![GitHub last commit](https://img.shields.io/github/last-commit/clementfarabet/videograph)](https://github.com/clementfarabet/videograph) - A video/graph library for Torch. This package provides routines to construct graphs on videos, segment them, build trees out of them, and convert them back to videos. **[Deprecated]**
  * [saliency ![GitHub Repo Stars](https://img.shields.io/github/stars/marcoscoffier/torch-saliency) ![GitHub last commit](https://img.shields.io/github/last-commit/marcoscoffier/torch-saliency)](https://github.com/marcoscoffier/torch-saliency) - code and tools around integral images. A library for finding interest points based on fast integral histograms. **[Deprecated]**
  * [stitch ![GitHub Repo Stars](https://img.shields.io/github/stars/marcoscoffier/lua---stitch) ![GitHub last commit](https://img.shields.io/github/last-commit/marcoscoffier/lua---stitch)](https://github.com/marcoscoffier/lua---stitch) - allows us to use hugin to stitch images and apply same stitching to a video sequence. **[Deprecated]**
  * [sfm ![GitHub Repo Stars](https://img.shields.io/github/stars/marcoscoffier/lua---sfm) ![GitHub last commit](https://img.shields.io/github/last-commit/marcoscoffier/lua---sfm)](https://github.com/marcoscoffier/lua---sfm) - A bundle adjustment/structure from motion package. **[Deprecated]**
  * [fex ![GitHub Repo Stars](https://img.shields.io/github/stars/koraykv/fex) ![GitHub last commit](https://img.shields.io/github/last-commit/koraykv/fex)](https://github.com/koraykv/fex) - A package for feature extraction in Torch. Provides SIFT and dSIFT modules. **[Deprecated]**
  * [OverFeat ![GitHub Repo Stars](https://img.shields.io/github/stars/sermanet/OverFeat) ![GitHub last commit](https://img.shields.io/github/last-commit/sermanet/OverFeat)](https://github.com/sermanet/OverFeat) - A state-of-the-art generic dense feature extractor. **[Deprecated]**
  * [wav2letter ![GitHub Repo Stars](https://img.shields.io/github/stars/facebookresearch/wav2letter) ![GitHub last commit](https://img.shields.io/github/last-commit/facebookresearch/wav2letter)](https://github.com/facebookresearch/wav2letter) - a simple and efficient end-to-end Automatic Speech Recognition (ASR) system from Facebook AI Research.
* [Numeric Lua](http://numlua.luaforge.net/)
* [Lunatic Python](https://labix.org/lunatic-python)
* [SciLua](http://scilua.org/)
* [Lua - Numerical Algorithms](https://bitbucket.org/lucashnegri/lna) **[Deprecated]**
* [Lunum ![GitHub Repo Stars](https://img.shields.io/github/stars/jzrake/lunum) ![GitHub last commit](https://img.shields.io/github/last-commit/jzrake/lunum)](https://github.com/jzrake/lunum) **[Deprecated]**
* [Keras GPT Copilot ![GitHub Repo Stars](https://img.shields.io/github/stars/fabprezja/keras-gpt-copilot) ![GitHub last commit](https://img.shields.io/github/last-commit/fabprezja/keras-gpt-copilot)](https://github.com/fabprezja/keras-gpt-copilot) - A python package that integrates an LLM copilot inside the keras model development workflow.

<a name="lua-demos-and-scripts"></a>
#### Demos and Scripts
* [Core torch7 demos repository ![GitHub Repo Stars](https://img.shields.io/github/stars/e-lab/torch7-demos) ![GitHub last commit](https://img.shields.io/github/last-commit/e-lab/torch7-demos)](https://github.com/e-lab/torch7-demos).
  * linear-regression, logistic-regression
  * face detector (training and detection as separate demos)
  * mst-based-segmenter
  * train-a-digit-classifier
  * train-autoencoder
  * optical flow demo
  * train-on-housenumbers
  * train-on-cifar
  * tracking with deep nets
  * kinect demo
  * filter-bank visualization
  * saliency-networks
* [Training a Convnet for the Galaxy-Zoo Kaggle challenge(CUDA demo) ![GitHub Repo Stars](https://img.shields.io/github/stars/soumith/galaxyzoo) ![GitHub last commit](https://img.shields.io/github/last-commit/soumith/galaxyzoo)](https://github.com/soumith/galaxyzoo)
* [torch-datasets ![GitHub Repo Stars](https://img.shields.io/github/stars/rosejn/torch-datasets) ![GitHub last commit](https://img.shields.io/github/last-commit/rosejn/torch-datasets)](https://github.com/rosejn/torch-datasets) - Scripts to load several popular datasets including:
  * BSR 500
  * CIFAR-10
  * COIL
  * Street View House Numbers
  * MNIST
  * NORB
* [Atari2600 ![GitHub Repo Stars](https://img.shields.io/github/stars/fidlej/aledataset) ![GitHub last commit](https://img.shields.io/github/last-commit/fidlej/aledataset)](https://github.com/fidlej/aledataset) - Scripts to generate a dataset with static frames from the Arcade Learning Environment.



<a name="matlab"></a>
## Matlab

<a name="matlab-computer-vision"></a>
#### Computer Vision

* [Contourlets](http://www.ifp.illinois.edu/~minhdo/software/contourlet_toolbox.tar) - MATLAB source code that implements the contourlet transform and its utility functions.
* [Shearlets](https://www3.math.tu-berlin.de/numerik/www.shearlab.org/software) - MATLAB code for shearlet transform.
* [Curvelets](http://www.curvelet.org/software.html) - The Curvelet transform is a higher dimensional generalization of the Wavelet transform designed to represent images at different scales and different angles.
* [Bandlets](http://www.cmap.polytechnique.fr/~peyre/download/) - MATLAB code for bandlet transform.
* [mexopencv](https://kyamagu.github.io/mexopencv/) - Collection and a development kit of MATLAB mex functions for OpenCV library.

<a name="matlab-natural-language-processing"></a>
#### Natural Language Processing

* [NLP](https://amplab.cs.berkeley.edu/an-nlp-library-for-matlab/) - A NLP library for Matlab.

<a name="matlab-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [Training a deep autoencoder or a classifier
on MNIST digits](https://www.cs.toronto.edu/~hinton/MatlabForSciencePaper.html) - Training a deep autoencoder or a classifier
on MNIST digits[DEEP LEARNING].
* [Convolutional-Recursive Deep Learning for 3D Object Classification](https://www.socher.org/index.php/Main/Convolutional-RecursiveDeepLearningFor3DObjectClassification) - Convolutional-Recursive Deep Learning for 3D Object Classification[DEEP LEARNING].
* [Spider](https://people.kyb.tuebingen.mpg.de/spider/) - The spider is intended to be a complete object orientated environment for machine learning in Matlab.
* [LibSVM](https://www.csie.ntu.edu.tw/~cjlin/libsvm/#matlab) - A Library for Support Vector Machines.
* [ThunderSVM ![GitHub Repo Stars](https://img.shields.io/github/stars/Xtra-Computing/thundersvm) ![GitHub last commit](https://img.shields.io/github/last-commit/Xtra-Computing/thundersvm)](https://github.com/Xtra-Computing/thundersvm) - An Open-Source SVM Library on GPUs and CPUs
* [LibLinear](https://www.csie.ntu.edu.tw/~cjlin/liblinear/#download) - A Library for Large Linear Classification.
* [Machine Learning Module ![GitHub Repo Stars](https://img.shields.io/github/stars/josephmisiti/machine-learning-module) ![GitHub last commit](https://img.shields.io/github/last-commit/josephmisiti/machine-learning-module)](https://github.com/josephmisiti/machine-learning-module) - Class on machine w/ PDF, lectures, code
* [Caffe ![GitHub Repo Stars](https://img.shields.io/github/stars/BVLC/caffe) ![GitHub last commit](https://img.shields.io/github/last-commit/BVLC/caffe)](https://github.com/BVLC/caffe) - A deep learning framework developed with cleanliness, readability, and speed in mind.
* [Pattern Recognition Toolbox ![GitHub Repo Stars](https://img.shields.io/github/stars/covartech/PRT) ![GitHub last commit](https://img.shields.io/github/last-commit/covartech/PRT)](https://github.com/covartech/PRT) - A complete object-oriented environment for machine learning in Matlab.
* [Pattern Recognition and Machine Learning ![GitHub Repo Stars](https://img.shields.io/github/stars/PRML/PRMLT) ![GitHub last commit](https://img.shields.io/github/last-commit/PRML/PRMLT)](https://github.com/PRML/PRMLT) - This package contains the matlab implementation of the algorithms described in the book Pattern Recognition and Machine Learning by C. Bishop.
* [Optunity](https://optunity.readthedocs.io/en/latest/) - A library dedicated to automated hyperparameter optimization with a simple, lightweight API to facilitate drop-in replacement of grid search. Optunity is written in Python but interfaces seamlessly with MATLAB.
* [MXNet ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/incubator-mxnet) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/incubator-mxnet)](https://github.com/apache/incubator-mxnet/) - Lightweight, Portable, Flexible Distributed/Mobile Deep Learning with Dynamic, Mutation-aware Dataflow Dep Scheduler; for Python, R, Julia, Go, JavaScript and more.
* [Machine Learning in MatLab/Octave ![GitHub Repo Stars](https://img.shields.io/github/stars/trekhleb/machine-learning-octave) ![GitHub last commit](https://img.shields.io/github/last-commit/trekhleb/machine-learning-octave)](https://github.com/trekhleb/machine-learning-octave) - examples of popular machine learning algorithms (neural networks, linear/logistic regressions, K-Means, etc.) with code examples and mathematics behind them being explained.


<a name="matlab-data-analysis--data-visualization"></a>
#### Data Analysis / Data Visualization

* [ParaMonte ![GitHub Repo Stars](https://img.shields.io/github/stars/cdslaborg/paramonte) ![GitHub last commit](https://img.shields.io/github/last-commit/cdslaborg/paramonte)](https://github.com/cdslaborg/paramonte) - A general-purpose MATLAB library for Bayesian data analysis and visualization via serial/parallel Monte Carlo and MCMC simulations. Documentation can be found [here](https://www.cdslab.org/paramonte/).
* [matlab_bgl](https://www.cs.purdue.edu/homes/dgleich/packages/matlab_bgl/) - MatlabBGL is a Matlab package for working with graphs.
* [gaimc](https://www.mathworks.com/matlabcentral/fileexchange/24134-gaimc---graph-algorithms-in-matlab-code) - Efficient pure-Matlab implementations of graph algorithms to complement MatlabBGL's mex functions.

<a name="net"></a>
## .NET

<a name="net-computer-vision"></a>
#### Computer Vision

* [OpenCVDotNet](https://code.google.com/archive/p/opencvdotnet) - A wrapper for the OpenCV project to be used with .NET applications.
* [Emgu CV](http://www.emgu.com/wiki/index.php/Main_Page) - Cross platform wrapper of OpenCV which can be compiled in Mono to be run on Windows, Linus, Mac OS X, iOS, and Android.
* [AForge.NET](http://www.aforgenet.com/framework/) - Open source C# framework for developers and researchers in the fields of Computer Vision and Artificial Intelligence. Development has now shifted to GitHub.
* [Accord.NET](http://accord-framework.net) - Together with AForge.NET, this library can provide image processing and computer vision algorithms to Windows, Windows RT and Windows Phone. Some components are also available for Java and Android.

<a name="net-natural-language-processing"></a>
#### Natural Language Processing

* [Stanford.NLP for .NET ![GitHub Repo Stars](https://img.shields.io/github/stars/sergey-tihon/Stanford.NLP.NET) ![GitHub last commit](https://img.shields.io/github/last-commit/sergey-tihon/Stanford.NLP.NET)](https://github.com/sergey-tihon/Stanford.NLP.NET/) - A full port of Stanford NLP packages to .NET and also available precompiled as a NuGet package.

<a name="net-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [Accord-Framework](http://accord-framework.net/) -The Accord.NET Framework is a complete framework for building machine learning, computer vision, computer audition, signal processing and statistical applications.
* [Accord.MachineLearning](https://www.nuget.org/packages/Accord.MachineLearning/) - Support Vector Machines, Decision Trees, Naive Bayesian models, K-means, Gaussian Mixture models and general algorithms such as Ransac, Cross-validation and Grid-Search for machine-learning applications. This package is part of the Accord.NET Framework.
* [DiffSharp](https://diffsharp.github.io/DiffSharp/) - An automatic differentiation (AD) library providing exact and efficient derivatives (gradients, Hessians, Jacobians, directional derivatives, and matrix-free Hessian- and Jacobian-vector products) for machine learning and optimization applications. Operations can be nested to any level, meaning that you can compute exact higher-order derivatives and differentiate functions that are internally making use of differentiation, for applications such as hyperparameter optimization.
* [Encog](https://www.nuget.org/packages/encog-dotnet-core/) - An advanced neural network and machine learning framework. Encog contains classes to create a wide variety of networks, as well as support classes to normalize and process data for these neural networks. Encog trains using multithreaded resilient propagation. Encog can also make use of a GPU to further speed processing time. A GUI based workbench is also provided to help model and train neural networks.
* [GeneticSharp ![GitHub Repo Stars](https://img.shields.io/github/stars/giacomelli/GeneticSharp) ![GitHub last commit](https://img.shields.io/github/last-commit/giacomelli/GeneticSharp)](https://github.com/giacomelli/GeneticSharp) - Multi-platform genetic algorithm library for .NET Core and .NET Framework. The library has several implementations of GA operators, like: selection, crossover, mutation, reinsertion and termination.
* [Infer.NET](https://dotnet.github.io/infer/) - Infer.NET is a framework for running Bayesian inference in graphical models. One can use Infer.NET to solve many different kinds of machine learning problems, from standard problems like classification, recommendation or clustering through to customized solutions to domain-specific problems. Infer.NET has been used in a wide variety of domains including information retrieval, bioinformatics, epidemiology, vision, and many others.
* [ML.NET ![GitHub Repo Stars](https://img.shields.io/github/stars/dotnet/machinelearning) ![GitHub last commit](https://img.shields.io/github/last-commit/dotnet/machinelearning)](https://github.com/dotnet/machinelearning) - ML.NET is a cross-platform open-source machine learning framework which makes machine learning accessible to .NET developers. ML.NET was originally developed in Microsoft Research and evolved into a significant framework over the last decade and is used across many product groups in Microsoft like Windows, Bing, PowerPoint, Excel and more.
* [Neural Network Designer](https://sourceforge.net/projects/nnd/) - DBMS management system and designer for neural networks. The designer application is developed using WPF, and is a user interface which allows you to design your neural network, query the network, create and configure chat bots that are capable of asking questions and learning from your feedback. The chat bots can even scrape the internet for information to return in their output as well as to use for learning.
* [Synapses ![GitHub Repo Stars](https://img.shields.io/github/stars/mrdimosthenis/Synapses) ![GitHub last commit](https://img.shields.io/github/last-commit/mrdimosthenis/Synapses)](https://github.com/mrdimosthenis/Synapses) - Neural network library in F#.
* [Vulpes ![GitHub Repo Stars](https://img.shields.io/github/stars/fsprojects/Vulpes) ![GitHub last commit](https://img.shields.io/github/last-commit/fsprojects/Vulpes)](https://github.com/fsprojects/Vulpes) - Deep belief and deep learning implementation written in F# and leverages CUDA GPU execution with Alea.cuBase.
* [MxNet.Sharp ![GitHub Repo Stars](https://img.shields.io/github/stars/tech-quantum/MxNet.Sharp) ![GitHub last commit](https://img.shields.io/github/last-commit/tech-quantum/MxNet.Sharp)](https://github.com/tech-quantum/MxNet.Sharp) - .NET Standard bindings for Apache MxNet with Imperative, Symbolic and Gluon Interface for developing, training and deploying Machine Learning models in C#. https://mxnet.tech-quantum.com/

<a name="net-data-analysis--data-visualization"></a>
#### Data Analysis / Data Visualization

* [numl](https://www.nuget.org/packages/numl/) - numl is a machine learning library intended to ease the use of using standard modelling techniques for both prediction and clustering.
* [Math.NET Numerics](https://www.nuget.org/packages/MathNet.Numerics/) - Numerical foundation of the Math.NET project, aiming to provide methods and algorithms for numerical computations in science, engineering and everyday use. Supports .Net 4.0, .Net 3.5 and Mono on Windows, Linux and Mac; Silverlight 5, WindowsPhone/SL 8, WindowsPhone 8.1 and Windows 8 with PCL Portable Profiles 47 and 344; Android/iOS with Xamarin.
* [Sho](https://www.microsoft.com/en-us/research/project/sho-the-net-playground-for-data/) - Sho is an interactive environment for data analysis and scientific computing that lets you seamlessly connect scripts (in IronPython) with compiled code (in .NET) to enable fast and flexible prototyping. The environment includes powerful and efficient libraries for linear algebra as well as data visualization that can be used from any .NET language, as well as a feature-rich interactive shell for rapid development.

<a name="objective-c"></a>
## Objective C

<a name="objective-c-general-purpose-machine-learning"></a>
### General-Purpose Machine Learning

* [YCML ![GitHub Repo Stars](https://img.shields.io/github/stars/yconst/YCML) ![GitHub last commit](https://img.shields.io/github/last-commit/yconst/YCML)](https://github.com/yconst/YCML) - A Machine Learning framework for Objective-C and Swift (OS X / iOS).
* [MLPNeuralNet ![GitHub Repo Stars](https://img.shields.io/github/stars/nikolaypavlov/MLPNeuralNet) ![GitHub last commit](https://img.shields.io/github/last-commit/nikolaypavlov/MLPNeuralNet)](https://github.com/nikolaypavlov/MLPNeuralNet) - Fast multilayer perceptron neural network library for iOS and Mac OS X. MLPNeuralNet predicts new examples by trained neural networks. It is built on top of the Apple's Accelerate Framework, using vectorized operations and hardware acceleration if available. **[Deprecated]**
* [MAChineLearning ![GitHub Repo Stars](https://img.shields.io/github/stars/gianlucabertani/MAChineLearning) ![GitHub last commit](https://img.shields.io/github/last-commit/gianlucabertani/MAChineLearning)](https://github.com/gianlucabertani/MAChineLearning) - An Objective-C multilayer perceptron library, with full support for training through backpropagation. Implemented using vDSP and vecLib, it's 20 times faster than its Java equivalent. Includes sample code for use from Swift.
* [BPN-NeuralNetwork ![GitHub Repo Stars](https://img.shields.io/github/stars/Kalvar/ios-BPN-NeuralNetwork) ![GitHub last commit](https://img.shields.io/github/last-commit/Kalvar/ios-BPN-NeuralNetwork)](https://github.com/Kalvar/ios-BPN-NeuralNetwork) - It implemented 3 layers of neural networks ( Input Layer, Hidden Layer and Output Layer ) and it was named Back Propagation Neural Networks (BPN). This network can be used in products recommendation, user behavior analysis, data mining and data analysis. **[Deprecated]**
* [Multi-Perceptron-NeuralNetwork ![GitHub Repo Stars](https://img.shields.io/github/stars/Kalvar/ios-Multi-Perceptron-NeuralNetwork) ![GitHub last commit](https://img.shields.io/github/last-commit/Kalvar/ios-Multi-Perceptron-NeuralNetwork)](https://github.com/Kalvar/ios-Multi-Perceptron-NeuralNetwork) - it implemented multi-perceptrons neural network (ニューラルネットワーク) based on Back Propagation Neural Networks (BPN) and designed unlimited-hidden-layers.
* [KRHebbian-Algorithm ![GitHub Repo Stars](https://img.shields.io/github/stars/Kalvar/ios-KRHebbian-Algorithm) ![GitHub last commit](https://img.shields.io/github/last-commit/Kalvar/ios-KRHebbian-Algorithm)](https://github.com/Kalvar/ios-KRHebbian-Algorithm) - It is a non-supervisor and self-learning algorithm (adjust the weights) in the neural network of Machine Learning. **[Deprecated]**
* [KRKmeans-Algorithm ![GitHub Repo Stars](https://img.shields.io/github/stars/Kalvar/ios-KRKmeans-Algorithm) ![GitHub last commit](https://img.shields.io/github/last-commit/Kalvar/ios-KRKmeans-Algorithm)](https://github.com/Kalvar/ios-KRKmeans-Algorithm) - It implemented K-Means  clustering and classification algorithm. It could be used in data mining and image compression. **[Deprecated]**
* [KRFuzzyCMeans-Algorithm ![GitHub Repo Stars](https://img.shields.io/github/stars/Kalvar/ios-KRFuzzyCMeans-Algorithm) ![GitHub last commit](https://img.shields.io/github/last-commit/Kalvar/ios-KRFuzzyCMeans-Algorithm)](https://github.com/Kalvar/ios-KRFuzzyCMeans-Algorithm) - It implemented Fuzzy C-Means (FCM) the fuzzy clustering / classification algorithm on Machine Learning. It could be used in data mining and image compression. **[Deprecated]**

<a name="ocaml"></a>
## OCaml

<a name="ocaml-general-purpose-machine-learning"></a>
### General-Purpose Machine Learning

* [Oml ![GitHub Repo Stars](https://img.shields.io/github/stars/rleonid/oml) ![GitHub last commit](https://img.shields.io/github/last-commit/rleonid/oml)](https://github.com/rleonid/oml) - A general statistics and machine learning library.
* [GPR](https://mmottl.github.io/gpr/) - Efficient Gaussian Process Regression in OCaml.
* [Libra-Tk](https://libra.cs.uoregon.edu) - Algorithms for learning and inference with discrete probabilistic models.
* [TensorFlow ![GitHub Repo Stars](https://img.shields.io/github/stars/LaurentMazare/tensorflow-ocaml) ![GitHub last commit](https://img.shields.io/github/last-commit/LaurentMazare/tensorflow-ocaml)](https://github.com/LaurentMazare/tensorflow-ocaml) - OCaml bindings for TensorFlow.

<a name="opencv"></a>
## OpenCV

<a name="opencv-ComputerVision and Text Detection"></a>
### OpenSource-Computer-Vision

* [OpenCV ![GitHub Repo Stars](https://img.shields.io/github/stars/opencv/opencv) ![GitHub last commit](https://img.shields.io/github/last-commit/opencv/opencv)](https://github.com/opencv/opencv) - A OpenSource Computer Vision Library

<a name="perl"></a>
## Perl

<a name="perl-data-analysis--data-visualization"></a>
### Data Analysis / Data Visualization

* [Perl Data Language](https://metacpan.org/pod/Paws::MachineLearning), a pluggable architecture for data and image processing, which can
be [used for machine learning ![GitHub Repo Stars](https://img.shields.io/github/stars/zenogantner/PDL-ML) ![GitHub last commit](https://img.shields.io/github/last-commit/zenogantner/PDL-ML)](https://github.com/zenogantner/PDL-ML).

<a name="perl-general-purpose-machine-learning"></a>
### General-Purpose Machine Learning

* [MXnet for Deep Learning, in Perl ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/incubator-mxnet) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/incubator-mxnet)](https://github.com/apache/incubator-mxnet/tree/master/perl-package),
also [released in CPAN](https://metacpan.org/pod/AI::MXNet).
* [Perl Data Language](https://metacpan.org/pod/Paws::MachineLearning),
using AWS machine learning platform from Perl.
* [Algorithm::SVMLight](https://metacpan.org/pod/Algorithm::SVMLight),
  implementation of Support Vector Machines with SVMLight under it. **[Deprecated]**
* Several machine learning and artificial intelligence models are
  included in the [`AI`](https://metacpan.org/search?size=20&q=AI)
  namespace. For instance, you can
  find [Naïve Bayes](https://metacpan.org/pod/AI::NaiveBayes).

<a name="perl6"></a>
## Perl 6

* [Support Vector Machines ![GitHub Repo Stars](https://img.shields.io/github/stars/titsuki/p6-Algorithm-LibSVM) ![GitHub last commit](https://img.shields.io/github/last-commit/titsuki/p6-Algorithm-LibSVM)](https://github.com/titsuki/p6-Algorithm-LibSVM)
* [Naïve Bayes ![GitHub Repo Stars](https://img.shields.io/github/stars/titsuki/p6-Algorithm-NaiveBayes) ![GitHub last commit](https://img.shields.io/github/last-commit/titsuki/p6-Algorithm-NaiveBayes)](https://github.com/titsuki/p6-Algorithm-NaiveBayes)

<a name="perl-6-data-analysis--data-visualization"></a>
### Data Analysis / Data Visualization

* [Perl Data Language](https://metacpan.org/pod/Paws::MachineLearning),
a pluggable architecture for data and image processing, which can
be
[used for machine learning ![GitHub Repo Stars](https://img.shields.io/github/stars/zenogantner/PDL-ML) ![GitHub last commit](https://img.shields.io/github/last-commit/zenogantner/PDL-ML)](https://github.com/zenogantner/PDL-ML).

<a name="perl-6-general-purpose-machine-learning"></a>
### General-Purpose Machine Learning

<a name="php"></a>
## PHP

<a name="php-natural-language-processing"></a>
### Natural Language Processing

* [jieba-php ![GitHub Repo Stars](https://img.shields.io/github/stars/fukuball/jieba-php) ![GitHub last commit](https://img.shields.io/github/last-commit/fukuball/jieba-php)](https://github.com/fukuball/jieba-php) - Chinese Words Segmentation Utilities.

<a name="php-general-purpose-machine-learning"></a>
### General-Purpose Machine Learning

* [PHP-ML](https://gitlab.com/php-ai/php-ml) - Machine Learning library for PHP. Algorithms, Cross Validation, Neural Network, Preprocessing, Feature Extraction and much more in one library.
* [PredictionBuilder ![GitHub Repo Stars](https://img.shields.io/github/stars/denissimon/prediction-builder) ![GitHub last commit](https://img.shields.io/github/last-commit/denissimon/prediction-builder)](https://github.com/denissimon/prediction-builder) - A library for machine learning that builds predictions using a linear regression.
* [Rubix ML](https://github.com/RubixML) - A high-level machine learning (ML) library that lets you build programs that learn from data using the PHP language.
* [19 Questions ![GitHub Repo Stars](https://img.shields.io/github/stars/fulldecent/19-questions) ![GitHub last commit](https://img.shields.io/github/last-commit/fulldecent/19-questions)](https://github.com/fulldecent/19-questions) - A machine learning / bayesian inference assigning attributes to objects.

<a name="python"></a>
## Python

<a name="python-computer-vision"></a>
#### Computer Vision

* [Scikit-Image ![GitHub Repo Stars](https://img.shields.io/github/stars/scikit-image/scikit-image) ![GitHub last commit](https://img.shields.io/github/last-commit/scikit-image/scikit-image)](https://github.com/scikit-image/scikit-image) - A collection of algorithms for image processing in Python.
* [Scikit-Opt ![GitHub Repo Stars](https://img.shields.io/github/stars/guofei9987/scikit-opt) ![GitHub last commit](https://img.shields.io/github/last-commit/guofei9987/scikit-opt)](https://github.com/guofei9987/scikit-opt) - Swarm Intelligence in Python (Genetic Algorithm, Particle Swarm Optimization, Simulated Annealing, Ant Colony Algorithm, Immune Algorithm, Artificial Fish Swarm Algorithm in Python)
* [SimpleCV](http://simplecv.org/) - An open source computer vision framework that gives access to several high-powered computer vision libraries, such as OpenCV. Written on Python and runs on Mac, Windows, and Ubuntu Linux.
* [Vigranumpy ![GitHub Repo Stars](https://img.shields.io/github/stars/ukoethe/vigra) ![GitHub last commit](https://img.shields.io/github/last-commit/ukoethe/vigra)](https://github.com/ukoethe/vigra) - Python bindings for the VIGRA C++ computer vision library.
* [OpenFace](https://cmusatyalab.github.io/openface/) - Free and open source face recognition with deep neural networks.
* [PCV ![GitHub Repo Stars](https://img.shields.io/github/stars/jesolem/PCV) ![GitHub last commit](https://img.shields.io/github/last-commit/jesolem/PCV)](https://github.com/jesolem/PCV) - Open source Python module for computer vision. **[Deprecated]**
* [face_recognition ![GitHub Repo Stars](https://img.shields.io/github/stars/ageitgey/face_recognition) ![GitHub last commit](https://img.shields.io/github/last-commit/ageitgey/face_recognition)](https://github.com/ageitgey/face_recognition) - Face recognition library that recognizes and manipulates faces from Python or from the command line.
* [deepface ![GitHub Repo Stars](https://img.shields.io/github/stars/serengil/deepface) ![GitHub last commit](https://img.shields.io/github/last-commit/serengil/deepface)](https://github.com/serengil/deepface) - A lightweight face recognition and facial attribute analysis (age, gender, emotion and race) framework for Python covering cutting-edge models such as VGG-Face, FaceNet, OpenFace, DeepFace, DeepID, Dlib and ArcFace.
* [retinaface ![GitHub Repo Stars](https://img.shields.io/github/stars/serengil/retinaface) ![GitHub last commit](https://img.shields.io/github/last-commit/serengil/retinaface)](https://github.com/serengil/retinaface) - deep learning based cutting-edge facial detector for Python coming with facial landmarks
* [dockerface ![GitHub Repo Stars](https://img.shields.io/github/stars/natanielruiz/dockerface) ![GitHub last commit](https://img.shields.io/github/last-commit/natanielruiz/dockerface)](https://github.com/natanielruiz/dockerface) - Easy to install and use deep learning Faster R-CNN face detection for images and video in a docker container. **[Deprecated]**
* [Detectron ![GitHub Repo Stars](https://img.shields.io/github/stars/facebookresearch/Detectron) ![GitHub last commit](https://img.shields.io/github/last-commit/facebookresearch/Detectron)](https://github.com/facebookresearch/Detectron) - FAIR's software system that implements state-of-the-art object detection algorithms, including Mask R-CNN. It is written in Python and powered by the Caffe2 deep learning framework. **[Deprecated]**
* [detectron2 ![GitHub Repo Stars](https://img.shields.io/github/stars/facebookresearch/detectron2) ![GitHub last commit](https://img.shields.io/github/last-commit/facebookresearch/detectron2)](https://github.com/facebookresearch/detectron2) - FAIR's next-generation research platform for object detection and segmentation. It is a ground-up rewrite of the previous version, Detectron, and is powered by the PyTorch deep learning framework.
* [albumentations ![GitHub Repo Stars](https://img.shields.io/github/stars/albu/albumentations) ![GitHub last commit](https://img.shields.io/github/last-commit/albu/albumentations)](https://github.com/albu/albumentations) - А fast and framework agnostic image augmentation library that implements a diverse set of augmentation techniques. Supports classification, segmentation, detection out of the box. Was used to win a number of Deep Learning competitions at Kaggle, Topcoder and those that were a part of the CVPR workshops.
* [pytessarct ![GitHub Repo Stars](https://img.shields.io/github/stars/madmaze/pytesseract) ![GitHub last commit](https://img.shields.io/github/last-commit/madmaze/pytesseract)](https://github.com/madmaze/pytesseract) - Python-tesseract is an optical character recognition (OCR) tool for python. That is, it will recognize and "read" the text embedded in images. Python-tesseract is a wrapper for [Google's Tesseract-OCR Engine ![GitHub Repo Stars](https://img.shields.io/github/stars/tesseract-ocr/tesseract) ![GitHub last commit](https://img.shields.io/github/last-commit/tesseract-ocr/tesseract)](https://github.com/tesseract-ocr/tesseract).
* [imutils ![GitHub Repo Stars](https://img.shields.io/github/stars/jrosebr1/imutils) ![GitHub last commit](https://img.shields.io/github/last-commit/jrosebr1/imutils)](https://github.com/jrosebr1/imutils) - A library containing Convenience functions to make basic image processing operations such as translation, rotation, resizing, skeletonization, and displaying Matplotlib images easier with OpenCV and Python.
* [PyTorchCV ![GitHub Repo Stars](https://img.shields.io/github/stars/donnyyou/PyTorchCV) ![GitHub last commit](https://img.shields.io/github/last-commit/donnyyou/PyTorchCV)](https://github.com/donnyyou/PyTorchCV) - A PyTorch-Based Framework for Deep Learning in Computer Vision.
* [joliGEN ![GitHub Repo Stars](https://img.shields.io/github/stars/jolibrain/joliGEN) ![GitHub last commit](https://img.shields.io/github/last-commit/jolibrain/joliGEN)](https://github.com/jolibrain/joliGEN) - Generative AI Image Toolset with GANs and Diffusion for Real-World Applications.
* [Self-supervised learning](https://pytorch-lightning-bolts.readthedocs.io/en/latest/self_supervised_models.html)
* [neural-style-pt ![GitHub Repo Stars](https://img.shields.io/github/stars/ProGamerGov/neural-style-pt) ![GitHub last commit](https://img.shields.io/github/last-commit/ProGamerGov/neural-style-pt)](https://github.com/ProGamerGov/neural-style-pt) - A PyTorch implementation of Justin Johnson's neural-style (neural style transfer).
* [Detecto ![GitHub Repo Stars](https://img.shields.io/github/stars/alankbi/detecto) ![GitHub last commit](https://img.shields.io/github/last-commit/alankbi/detecto)](https://github.com/alankbi/detecto) - Train and run a computer vision model with 5-10 lines of code.
* [neural-dream ![GitHub Repo Stars](https://img.shields.io/github/stars/ProGamerGov/neural-dream) ![GitHub last commit](https://img.shields.io/github/last-commit/ProGamerGov/neural-dream)](https://github.com/ProGamerGov/neural-dream) - A PyTorch implementation of DeepDream.
* [Openpose ![GitHub Repo Stars](https://img.shields.io/github/stars/CMU-Perceptual-Computing-Lab/openpose) ![GitHub last commit](https://img.shields.io/github/last-commit/CMU-Perceptual-Computing-Lab/openpose)](https://github.com/CMU-Perceptual-Computing-Lab/openpose) - A real-time multi-person keypoint detection library for body, face, hands, and foot estimation
* [Deep High-Resolution-Net ![GitHub Repo Stars](https://img.shields.io/github/stars/leoxiaobin/deep-high-resolution-net.pytorch) ![GitHub last commit](https://img.shields.io/github/last-commit/leoxiaobin/deep-high-resolution-net.pytorch)](https://github.com/leoxiaobin/deep-high-resolution-net.pytorch) - A PyTorch implementation of CVPR2019 paper "Deep High-Resolution Representation Learning for Human Pose Estimation"
* [TF-GAN ![GitHub Repo Stars](https://img.shields.io/github/stars/tensorflow/gan) ![GitHub last commit](https://img.shields.io/github/last-commit/tensorflow/gan)](https://github.com/tensorflow/gan) - TF-GAN is a lightweight library for training and evaluating Generative Adversarial Networks (GANs).
* [dream-creator ![GitHub Repo Stars](https://img.shields.io/github/stars/ProGamerGov/dream-creator) ![GitHub last commit](https://img.shields.io/github/last-commit/ProGamerGov/dream-creator)](https://github.com/ProGamerGov/dream-creator) - A PyTorch implementation of DeepDream. Allows individuals to quickly and easily train their own custom GoogleNet models with custom datasets for DeepDream.
* [Lucent ![GitHub Repo Stars](https://img.shields.io/github/stars/greentfrapp/lucent) ![GitHub last commit](https://img.shields.io/github/last-commit/greentfrapp/lucent)](https://github.com/greentfrapp/lucent) - Tensorflow and OpenAI Clarity's Lucid adapted for PyTorch.
* [lightly ![GitHub Repo Stars](https://img.shields.io/github/stars/lightly-ai/lightly) ![GitHub last commit](https://img.shields.io/github/last-commit/lightly-ai/lightly)](https://github.com/lightly-ai/lightly) - Lightly is a computer vision framework for self-supervised learning.
* [Learnergy ![GitHub Repo Stars](https://img.shields.io/github/stars/gugarosa/learnergy) ![GitHub last commit](https://img.shields.io/github/last-commit/gugarosa/learnergy)](https://github.com/gugarosa/learnergy) - Energy-based machine learning models built upon PyTorch.
* [OpenVisionAPI](https://github.com/openvisionapi) - Open source computer vision API based on open source models.
* [IoT Owl ![GitHub Repo Stars](https://img.shields.io/github/stars/Ret2Me/IoT-Owl) ![GitHub last commit](https://img.shields.io/github/last-commit/Ret2Me/IoT-Owl)](https://github.com/Ret2Me/IoT-Owl) - Light face detection and recognition system with huge possibilities, based on Microsoft Face API and TensorFlow made for small IoT devices like raspberry pi.
* [Exadel CompreFace ![GitHub Repo Stars](https://img.shields.io/github/stars/exadel-inc/CompreFace) ![GitHub last commit](https://img.shields.io/github/last-commit/exadel-inc/CompreFace)](https://github.com/exadel-inc/CompreFace) - face recognition system that can be easily integrated into any system without prior machine learning skills. CompreFace provides REST API for face recognition, face verification, face detection, face mask detection, landmark detection, age, and gender recognition and is easily deployed with docker.
* [computer-vision-in-action ![GitHub Repo Stars](https://img.shields.io/github/stars/Charmve/computer-vision-in-action) ![GitHub last commit](https://img.shields.io/github/last-commit/Charmve/computer-vision-in-action)](https://github.com/Charmve/computer-vision-in-action) - as known as ``L0CV``, is a new generation of computer vision open source online learning media, a cross-platform interactive learning framework integrating graphics, source code and HTML. the L0CV ecosystem — Notebook, Datasets, Source Code, and from Diving-in to Advanced — as well as the L0CV Hub.
* [timm ![GitHub Repo Stars](https://img.shields.io/github/stars/rwightman/pytorch-image-models) ![GitHub last commit](https://img.shields.io/github/last-commit/rwightman/pytorch-image-models)](https://github.com/rwightman/pytorch-image-models) - PyTorch image models, scripts, pretrained weights -- ResNet, ResNeXT, EfficientNet, EfficientNetV2, NFNet, Vision Transformer, MixNet, MobileNet-V3/V2, RegNet, DPN, CSPNet, and more.
* [segmentation_models.pytorch ![GitHub Repo Stars](https://img.shields.io/github/stars/qubvel/segmentation_models.pytorch) ![GitHub last commit](https://img.shields.io/github/last-commit/qubvel/segmentation_models.pytorch)](https://github.com/qubvel/segmentation_models.pytorch) - A PyTorch-based toolkit that offers pre-trained segmentation models for computer vision tasks. It simplifies the development of image segmentation applications by providing a collection of popular architecture implementations, such as UNet and PSPNet, along with pre-trained weights, making it easier for researchers and developers to achieve high-quality pixel-level object segmentation in images.
* [segmentation_models ![GitHub Repo Stars](https://img.shields.io/github/stars/qubvel/segmentation_models) ![GitHub last commit](https://img.shields.io/github/last-commit/qubvel/segmentation_models)](https://github.com/qubvel/segmentation_models) - A TensorFlow Keras-based toolkit that offers pre-trained segmentation models for computer vision tasks. It simplifies the development of image segmentation applications by providing a collection of popular architecture implementations, such as UNet and PSPNet, along with pre-trained weights, making it easier for researchers and developers to achieve high-quality pixel-level object segmentation in images.

<a name="python-natural-language-processing"></a>
#### Natural Language Processing

* [pkuseg-python ![GitHub Repo Stars](https://img.shields.io/github/stars/lancopku/pkuseg-python) ![GitHub last commit](https://img.shields.io/github/last-commit/lancopku/pkuseg-python)](https://github.com/lancopku/pkuseg-python) - A better version of Jieba, developed by Peking University.
* [NLTK](https://www.nltk.org/) - A leading platform for building Python programs to work with human language data.
* [Pattern ![GitHub Repo Stars](https://img.shields.io/github/stars/clips/pattern) ![GitHub last commit](https://img.shields.io/github/last-commit/clips/pattern)](https://github.com/clips/pattern) - A web mining module for the Python programming language. It has tools for natural language processing, machine learning, among others.
* [Quepy ![GitHub Repo Stars](https://img.shields.io/github/stars/machinalis/quepy) ![GitHub last commit](https://img.shields.io/github/last-commit/machinalis/quepy)](https://github.com/machinalis/quepy) - A python framework to transform natural language questions to queries in a database query language.
* [TextBlob](http://textblob.readthedocs.io/en/dev/) - Providing a consistent API for diving into common natural language processing (NLP) tasks. Stands on the giant shoulders of NLTK and Pattern, and plays nicely with both.
* [YAlign ![GitHub Repo Stars](https://img.shields.io/github/stars/machinalis/yalign) ![GitHub last commit](https://img.shields.io/github/last-commit/machinalis/yalign)](https://github.com/machinalis/yalign) - A sentence aligner, a friendly tool for extracting parallel sentences from comparable corpora. **[Deprecated]**
* [jieba ![GitHub Repo Stars](https://img.shields.io/github/stars/fxsjy/jieba) ![GitHub last commit](https://img.shields.io/github/last-commit/fxsjy/jieba)](https://github.com/fxsjy/jieba#jieba-1) - Chinese Words Segmentation Utilities.
* [SnowNLP ![GitHub Repo Stars](https://img.shields.io/github/stars/isnowfy/snownlp) ![GitHub last commit](https://img.shields.io/github/last-commit/isnowfy/snownlp)](https://github.com/isnowfy/snownlp) - A library for processing Chinese text.
* [spammy ![GitHub Repo Stars](https://img.shields.io/github/stars/tasdikrahman/spammy) ![GitHub last commit](https://img.shields.io/github/last-commit/tasdikrahman/spammy)](https://github.com/tasdikrahman/spammy) - A library for email Spam filtering built on top of NLTK
* [loso ![GitHub Repo Stars](https://img.shields.io/github/stars/fangpenlin/loso) ![GitHub last commit](https://img.shields.io/github/last-commit/fangpenlin/loso)](https://github.com/fangpenlin/loso) - Another Chinese segmentation library. **[Deprecated]**
* [genius ![GitHub Repo Stars](https://img.shields.io/github/stars/duanhongyi/genius) ![GitHub last commit](https://img.shields.io/github/last-commit/duanhongyi/genius)](https://github.com/duanhongyi/genius) - A Chinese segment based on Conditional Random Field.
* [KoNLPy](http://konlpy.org) - A Python package for Korean natural language processing.
* [nut ![GitHub Repo Stars](https://img.shields.io/github/stars/pprett/nut) ![GitHub last commit](https://img.shields.io/github/last-commit/pprett/nut)](https://github.com/pprett/nut) - Natural language Understanding Toolkit. **[Deprecated]**
* [Rosetta ![GitHub Repo Stars](https://img.shields.io/github/stars/columbia-applied-data-science/rosetta) ![GitHub last commit](https://img.shields.io/github/last-commit/columbia-applied-data-science/rosetta)](https://github.com/columbia-applied-data-science/rosetta) - Text processing tools and wrappers (e.g. Vowpal Wabbit)
* [BLLIP Parser](https://pypi.org/project/bllipparser/) - Python bindings for the BLLIP Natural Language Parser (also known as the Charniak-Johnson parser). **[Deprecated]**
* [PyNLPl ![GitHub Repo Stars](https://img.shields.io/github/stars/proycon/pynlpl) ![GitHub last commit](https://img.shields.io/github/last-commit/proycon/pynlpl)](https://github.com/proycon/pynlpl) - Python Natural Language Processing Library. General purpose NLP library for Python. Also contains some specific modules for parsing common NLP formats, most notably for [FoLiA](https://proycon.github.io/folia/), but also ARPA language models, Moses phrasetables, GIZA++ alignments.
* [PySS3 ![GitHub Repo Stars](https://img.shields.io/github/stars/sergioburdisso/pyss3) ![GitHub last commit](https://img.shields.io/github/last-commit/sergioburdisso/pyss3)](https://github.com/sergioburdisso/pyss3) - Python package that implements a novel white-box machine learning model for text classification, called SS3. Since SS3 has the ability to visually explain its rationale, this package also comes with easy-to-use interactive visualizations tools ([online demos](http://tworld.io/ss3/)).
* [python-ucto ![GitHub Repo Stars](https://img.shields.io/github/stars/proycon/python-ucto) ![GitHub last commit](https://img.shields.io/github/last-commit/proycon/python-ucto)](https://github.com/proycon/python-ucto) - Python binding to ucto (a unicode-aware rule-based tokenizer for various languages).
* [python-frog ![GitHub Repo Stars](https://img.shields.io/github/stars/proycon/python-frog) ![GitHub last commit](https://img.shields.io/github/last-commit/proycon/python-frog)](https://github.com/proycon/python-frog) - Python binding to Frog, an NLP suite for Dutch. (pos tagging, lemmatisation, dependency parsing, NER)
* [python-zpar ![GitHub Repo Stars](https://img.shields.io/github/stars/EducationalTestingService/python-zpar) ![GitHub last commit](https://img.shields.io/github/last-commit/EducationalTestingService/python-zpar)](https://github.com/EducationalTestingService/python-zpar) - Python bindings for [ZPar ![GitHub Repo Stars](https://img.shields.io/github/stars/frcchang/zpar) ![GitHub last commit](https://img.shields.io/github/last-commit/frcchang/zpar)](https://github.com/frcchang/zpar), a statistical part-of-speech-tagger, constituency parser, and dependency parser for English.
* [colibri-core ![GitHub Repo Stars](https://img.shields.io/github/stars/proycon/colibri-core) ![GitHub last commit](https://img.shields.io/github/last-commit/proycon/colibri-core)](https://github.com/proycon/colibri-core) - Python binding to C++ library for extracting and working with basic linguistic constructions such as n-grams and skipgrams in a quick and memory-efficient way.
* [spaCy ![GitHub Repo Stars](https://img.shields.io/github/stars/explosion/spaCy) ![GitHub last commit](https://img.shields.io/github/last-commit/explosion/spaCy)](https://github.com/explosion/spaCy) - Industrial strength NLP with Python and Cython.
* [PyStanfordDependencies ![GitHub Repo Stars](https://img.shields.io/github/stars/dmcc/PyStanfordDependencies) ![GitHub last commit](https://img.shields.io/github/last-commit/dmcc/PyStanfordDependencies)](https://github.com/dmcc/PyStanfordDependencies) - Python interface for converting Penn Treebank trees to Stanford Dependencies.
* [Distance ![GitHub Repo Stars](https://img.shields.io/github/stars/doukremt/distance) ![GitHub last commit](https://img.shields.io/github/last-commit/doukremt/distance)](https://github.com/doukremt/distance) - Levenshtein and Hamming distance computation. **[Deprecated]**
* [Fuzzy Wuzzy ![GitHub Repo Stars](https://img.shields.io/github/stars/seatgeek/fuzzywuzzy) ![GitHub last commit](https://img.shields.io/github/last-commit/seatgeek/fuzzywuzzy)](https://github.com/seatgeek/fuzzywuzzy) - Fuzzy String Matching in Python.
* [Neofuzz ![GitHub Repo Stars](https://img.shields.io/github/stars/x-tabdeveloping/neofuzz) ![GitHub last commit](https://img.shields.io/github/last-commit/x-tabdeveloping/neofuzz)](https://github.com/x-tabdeveloping/neofuzz) - Blazing fast, lightweight and customizable fuzzy and semantic text search in Python with fuzzywuzzy/thefuzz compatible API.
* [jellyfish ![GitHub Repo Stars](https://img.shields.io/github/stars/jamesturk/jellyfish) ![GitHub last commit](https://img.shields.io/github/last-commit/jamesturk/jellyfish)](https://github.com/jamesturk/jellyfish) - a python library for doing approximate and phonetic matching of strings.
* [editdistance](https://pypi.org/project/editdistance/) - fast implementation of edit distance.
* [textacy ![GitHub Repo Stars](https://img.shields.io/github/stars/chartbeat-labs/textacy) ![GitHub last commit](https://img.shields.io/github/last-commit/chartbeat-labs/textacy)](https://github.com/chartbeat-labs/textacy) - higher-level NLP built on Spacy.
* [stanford-corenlp-python ![GitHub Repo Stars](https://img.shields.io/github/stars/dasmith/stanford-corenlp-python) ![GitHub last commit](https://img.shields.io/github/last-commit/dasmith/stanford-corenlp-python)](https://github.com/dasmith/stanford-corenlp-python) - Python wrapper for [Stanford CoreNLP ![GitHub Repo Stars](https://img.shields.io/github/stars/stanfordnlp/CoreNLP) ![GitHub last commit](https://img.shields.io/github/last-commit/stanfordnlp/CoreNLP)](https://github.com/stanfordnlp/CoreNLP) **[Deprecated]**
* [CLTK ![GitHub Repo Stars](https://img.shields.io/github/stars/cltk/cltk) ![GitHub last commit](https://img.shields.io/github/last-commit/cltk/cltk)](https://github.com/cltk/cltk) - The Classical Language Toolkit.
* [Rasa ![GitHub Repo Stars](https://img.shields.io/github/stars/RasaHQ/rasa) ![GitHub last commit](https://img.shields.io/github/last-commit/RasaHQ/rasa)](https://github.com/RasaHQ/rasa) - A "machine learning framework to automate text-and voice-based conversations."
* [yase ![GitHub Repo Stars](https://img.shields.io/github/stars/PPACI/yase) ![GitHub last commit](https://img.shields.io/github/last-commit/PPACI/yase)](https://github.com/PPACI/yase) - Transcode sentence (or other sequence) to list of word vector .
* [Polyglot ![GitHub Repo Stars](https://img.shields.io/github/stars/aboSamoor/polyglot) ![GitHub last commit](https://img.shields.io/github/last-commit/aboSamoor/polyglot)](https://github.com/aboSamoor/polyglot) - Multilingual text (NLP) processing toolkit.
* [DrQA ![GitHub Repo Stars](https://img.shields.io/github/stars/facebookresearch/DrQA) ![GitHub last commit](https://img.shields.io/github/last-commit/facebookresearch/DrQA)](https://github.com/facebookresearch/DrQA) - Reading Wikipedia to answer open-domain questions.
* [Dedupe ![GitHub Repo Stars](https://img.shields.io/github/stars/dedupeio/dedupe) ![GitHub last commit](https://img.shields.io/github/last-commit/dedupeio/dedupe)](https://github.com/dedupeio/dedupe) - A python library for accurate and scalable fuzzy matching, record deduplication and entity-resolution.
* [Snips NLU ![GitHub Repo Stars](https://img.shields.io/github/stars/snipsco/snips-nlu) ![GitHub last commit](https://img.shields.io/github/last-commit/snipsco/snips-nlu)](https://github.com/snipsco/snips-nlu) - Natural Language Understanding library for intent classification and entity extraction
* [NeuroNER ![GitHub Repo Stars](https://img.shields.io/github/stars/Franck-Dernoncourt/NeuroNER) ![GitHub last commit](https://img.shields.io/github/last-commit/Franck-Dernoncourt/NeuroNER)](https://github.com/Franck-Dernoncourt/NeuroNER) - Named-entity recognition using neural networks providing state-of-the-art-results
* [DeepPavlov ![GitHub Repo Stars](https://img.shields.io/github/stars/deepmipt/DeepPavlov) ![GitHub last commit](https://img.shields.io/github/last-commit/deepmipt/DeepPavlov)](https://github.com/deepmipt/DeepPavlov/) - conversational AI library with many pre-trained Russian NLP models.
* [BigARTM ![GitHub Repo Stars](https://img.shields.io/github/stars/bigartm/bigartm) ![GitHub last commit](https://img.shields.io/github/last-commit/bigartm/bigartm)](https://github.com/bigartm/bigartm) - topic modelling platform.
* [NALP ![GitHub Repo Stars](https://img.shields.io/github/stars/gugarosa/nalp) ![GitHub last commit](https://img.shields.io/github/last-commit/gugarosa/nalp)](https://github.com/gugarosa/nalp) - A Natural Adversarial Language Processing framework built over Tensorflow.
* [DL Translate ![GitHub Repo Stars](https://img.shields.io/github/stars/xhlulu/dl-translate) ![GitHub last commit](https://img.shields.io/github/last-commit/xhlulu/dl-translate)](https://github.com/xhlulu/dl-translate) - A deep learning-based translation library between 50 languages, built with `transformers`.
* [Haystack ![GitHub Repo Stars](https://img.shields.io/github/stars/deepset-ai/haystack) ![GitHub last commit](https://img.shields.io/github/last-commit/deepset-ai/haystack)](https://github.com/deepset-ai/haystack) - A framework for building industrial-strength applications with Transformer models and LLMs.
* [CometLLM ![GitHub Repo Stars](https://img.shields.io/github/stars/comet-ml/comet-llm) ![GitHub last commit](https://img.shields.io/github/last-commit/comet-ml/comet-llm)](https://github.com/comet-ml/comet-llm) - Track, log, visualize and evaluate your LLM prompts and prompt chains. 

<a name="python-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

 * [Aim ![GitHub Repo Stars](https://img.shields.io/github/stars/aimhubio/aim) ![GitHub last commit](https://img.shields.io/github/last-commit/aimhubio/aim)](https://github.com/aimhubio/aim) -> An easy-to-use & supercharged open-source AI metadata tracker.
 * [RexMex ![GitHub Repo Stars](https://img.shields.io/github/stars/AstraZeneca/rexmex) ![GitHub last commit](https://img.shields.io/github/last-commit/AstraZeneca/rexmex)](https://github.com/AstraZeneca/rexmex) -> A general purpose recommender metrics library for fair evaluation.
 * [ChemicalX ![GitHub Repo Stars](https://img.shields.io/github/stars/AstraZeneca/chemicalx) ![GitHub last commit](https://img.shields.io/github/last-commit/AstraZeneca/chemicalx)](https://github.com/AstraZeneca/chemicalx) -> A PyTorch based deep learning library for drug pair scoring
 * [Microsoft ML for Apache Spark ![GitHub Repo Stars](https://img.shields.io/github/stars/Azure/mmlspark) ![GitHub last commit](https://img.shields.io/github/last-commit/Azure/mmlspark)](https://github.com/Azure/mmlspark) -> A distributed machine learning framework Apache Spark
 * [Shapley ![GitHub Repo Stars](https://img.shields.io/github/stars/benedekrozemberczki/shapley) ![GitHub last commit](https://img.shields.io/github/last-commit/benedekrozemberczki/shapley)](https://github.com/benedekrozemberczki/shapley) -> A data-driven framework to quantify the value of classifiers in a machine learning ensemble.
 * [igel ![GitHub Repo Stars](https://img.shields.io/github/stars/nidhaloff/igel) ![GitHub last commit](https://img.shields.io/github/last-commit/nidhaloff/igel)](https://github.com/nidhaloff/igel) -> A delightful machine learning tool that allows you to train/fit, test and use models **without writing code**
 * [ML Model building ![GitHub Repo Stars](https://img.shields.io/github/stars/Shanky-21/Machine_learning) ![GitHub last commit](https://img.shields.io/github/last-commit/Shanky-21/Machine_learning)](https://github.com/Shanky-21/Machine_learning) -> A Repository Containing Classification, Clustering, Regression, Recommender Notebooks with illustration to make them.
 * [ML/DL project template ![GitHub Repo Stars](https://img.shields.io/github/stars/PyTorchLightning/deep-learning-project-template) ![GitHub last commit](https://img.shields.io/github/last-commit/PyTorchLightning/deep-learning-project-template)](https://github.com/PyTorchLightning/deep-learning-project-template)
 * [PyTorch Geometric Temporal ![GitHub Repo Stars](https://img.shields.io/github/stars/benedekrozemberczki/pytorch_geometric_temporal) ![GitHub last commit](https://img.shields.io/github/last-commit/benedekrozemberczki/pytorch_geometric_temporal)](https://github.com/benedekrozemberczki/pytorch_geometric_temporal) -> A temporal extension of PyTorch Geometric for dynamic graph representation learning.
 * [Little Ball of Fur ![GitHub Repo Stars](https://img.shields.io/github/stars/benedekrozemberczki/littleballoffur) ![GitHub last commit](https://img.shields.io/github/last-commit/benedekrozemberczki/littleballoffur)](https://github.com/benedekrozemberczki/littleballoffur) -> A graph sampling extension library for NetworkX with a Scikit-Learn like API.
 * [Karate Club ![GitHub Repo Stars](https://img.shields.io/github/stars/benedekrozemberczki/karateclub) ![GitHub last commit](https://img.shields.io/github/last-commit/benedekrozemberczki/karateclub)](https://github.com/benedekrozemberczki/karateclub) -> An unsupervised machine learning extension library for NetworkX with a Scikit-Learn like API.
* [Auto_ViML ![GitHub Repo Stars](https://img.shields.io/github/stars/AutoViML/Auto_ViML) ![GitHub last commit](https://img.shields.io/github/last-commit/AutoViML/Auto_ViML)](https://github.com/AutoViML/Auto_ViML) -> Automatically Build Variant Interpretable ML models fast! Auto_ViML is pronounced "auto vimal", is a comprehensive and scalable Python AutoML toolkit with imbalanced handling, ensembling, stacking and built-in feature selection. Featured in <a href="https://towardsdatascience.com/why-automl-is-an-essential-new-tool-for-data-scientists-2d9ab4e25e46?source=friends_link&sk=d03a0cc55c23deb497d546d6b9be0653">Medium article</a>.
* [PyOD ![GitHub Repo Stars](https://img.shields.io/github/stars/yzhao062/pyod) ![GitHub last commit](https://img.shields.io/github/last-commit/yzhao062/pyod)](https://github.com/yzhao062/pyod) -> Python Outlier Detection, comprehensive and scalable Python toolkit for detecting outlying objects in multivariate data. Featured for Advanced models, including Neural Networks/Deep Learning and Outlier Ensembles.
* [steppy ![GitHub Repo Stars](https://img.shields.io/github/stars/neptune-ml/steppy) ![GitHub last commit](https://img.shields.io/github/last-commit/neptune-ml/steppy)](https://github.com/neptune-ml/steppy) -> Lightweight, Python library for fast and reproducible machine learning experimentation. Introduces a very simple interface that enables clean machine learning pipeline design.
* [steppy-toolkit ![GitHub Repo Stars](https://img.shields.io/github/stars/neptune-ml/steppy-toolkit) ![GitHub last commit](https://img.shields.io/github/last-commit/neptune-ml/steppy-toolkit)](https://github.com/neptune-ml/steppy-toolkit) -> Curated collection of the neural networks, transformers and models that make your machine learning work faster and more effective.
* [CNTK ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/CNTK) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/CNTK)](https://github.com/Microsoft/CNTK) - Microsoft Cognitive Toolkit (CNTK), an open source deep-learning toolkit. Documentation can be found [here](https://docs.microsoft.com/cognitive-toolkit/).
* [Couler ![GitHub Repo Stars](https://img.shields.io/github/stars/couler-proj/couler) ![GitHub last commit](https://img.shields.io/github/last-commit/couler-proj/couler)](https://github.com/couler-proj/couler) - Unified interface for constructing and managing machine learning workflows on different workflow engines, such as Argo Workflows, Tekton Pipelines, and Apache Airflow.
* [auto_ml ![GitHub Repo Stars](https://img.shields.io/github/stars/ClimbsRocks/auto_ml) ![GitHub last commit](https://img.shields.io/github/last-commit/ClimbsRocks/auto_ml)](https://github.com/ClimbsRocks/auto_ml) - Automated machine learning for production and analytics. Lets you focus on the fun parts of ML, while outputting production-ready code, and detailed analytics of your dataset and results. Includes support for NLP, XGBoost, CatBoost, LightGBM, and soon, deep learning.
* [dtaidistance ![GitHub Repo Stars](https://img.shields.io/github/stars/wannesm/dtaidistance) ![GitHub last commit](https://img.shields.io/github/last-commit/wannesm/dtaidistance)](https://github.com/wannesm/dtaidistance) - High performance library for time series distances (DTW) and time series clustering.
* [einops ![GitHub Repo Stars](https://img.shields.io/github/stars/arogozhnikov/einops) ![GitHub last commit](https://img.shields.io/github/last-commit/arogozhnikov/einops)](https://github.com/arogozhnikov/einops) - Deep learning operations reinvented (for pytorch, tensorflow, jax and others).
* [machine learning ![GitHub Repo Stars](https://img.shields.io/github/stars/jeff1evesque/machine-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/jeff1evesque/machine-learning)](https://github.com/jeff1evesque/machine-learning) - automated build consisting of a [web-interface ![GitHub Repo Stars](https://img.shields.io/github/stars/jeff1evesque/machine-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/jeff1evesque/machine-learning)](https://github.com/jeff1evesque/machine-learning#web-interface), and set of [programmatic-interface ![GitHub Repo Stars](https://img.shields.io/github/stars/jeff1evesque/machine-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/jeff1evesque/machine-learning)](https://github.com/jeff1evesque/machine-learning#programmatic-interface) API, for support vector machines. Corresponding dataset(s) are stored into a SQL database, then generated model(s) used for prediction(s), are stored into a NoSQL datastore.
* [XGBoost ![GitHub Repo Stars](https://img.shields.io/github/stars/dmlc/xgboost) ![GitHub last commit](https://img.shields.io/github/last-commit/dmlc/xgboost)](https://github.com/dmlc/xgboost) - Python bindings for eXtreme Gradient Boosting (Tree) Library.
* [ChefBoost ![GitHub Repo Stars](https://img.shields.io/github/stars/serengil/chefboost) ![GitHub last commit](https://img.shields.io/github/last-commit/serengil/chefboost)](https://github.com/serengil/chefboost) - a lightweight decision tree framework for Python with categorical feature support covering regular decision tree algorithms such as ID3, C4.5, CART, CHAID and regression tree; also some advanved bagging and boosting techniques such as gradient boosting, random forest and adaboost.
* [Apache SINGA](https://singa.apache.org) - An Apache Incubating project for developing an open source machine learning library.
* [Bayesian Methods for Hackers ![GitHub Repo Stars](https://img.shields.io/github/stars/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers) ![GitHub last commit](https://img.shields.io/github/last-commit/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers)](https://github.com/CamDavidsonPilon/Probabilistic-Programming-and-Bayesian-Methods-for-Hackers) - Book/iPython notebooks on Probabilistic Programming in Python.
* [Featureforge ![GitHub Repo Stars](https://img.shields.io/github/stars/machinalis/featureforge) ![GitHub last commit](https://img.shields.io/github/last-commit/machinalis/featureforge)](https://github.com/machinalis/featureforge) A set of tools for creating and testing machine learning features, with a scikit-learn compatible API.
* [MLlib in Apache Spark](http://spark.apache.org/docs/latest/mllib-guide.html) - Distributed machine learning library in Spark
* [Hydrosphere Mist ![GitHub Repo Stars](https://img.shields.io/github/stars/Hydrospheredata/mist) ![GitHub last commit](https://img.shields.io/github/last-commit/Hydrospheredata/mist)](https://github.com/Hydrospheredata/mist) - a service for deployment Apache Spark MLLib machine learning models as realtime, batch or reactive web services.
* [Towhee](https://towhee.io) - A Python module that encode unstructured data into embeddings.
* [scikit-learn](https://scikit-learn.org/) - A Python module for machine learning built on top of SciPy.
* [metric-learn ![GitHub Repo Stars](https://img.shields.io/github/stars/metric-learn/metric-learn) ![GitHub last commit](https://img.shields.io/github/last-commit/metric-learn/metric-learn)](https://github.com/metric-learn/metric-learn) - A Python module for metric learning.
* [OpenMetricLearning ![GitHub Repo Stars](https://img.shields.io/github/stars/OML-Team/open-metric-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/OML-Team/open-metric-learning)](https://github.com/OML-Team/open-metric-learning) - A PyTorch-based framework to train and validate the models producing high-quality embeddings.
* [Intel(R) Extension for Scikit-learn ![GitHub Repo Stars](https://img.shields.io/github/stars/intel/scikit-learn-intelex) ![GitHub last commit](https://img.shields.io/github/last-commit/intel/scikit-learn-intelex)](https://github.com/intel/scikit-learn-intelex) - A seamless way to speed up your Scikit-learn applications with no accuracy loss and code changes.
* [SimpleAI ![GitHub Repo Stars](https://img.shields.io/github/stars/simpleai-team/simpleai) ![GitHub last commit](https://img.shields.io/github/last-commit/simpleai-team/simpleai)](https://github.com/simpleai-team/simpleai) Python implementation of many of the artificial intelligence algorithms described in the book "Artificial Intelligence, a Modern Approach". It focuses on providing an easy to use, well documented and tested library.
* [astroML](https://www.astroml.org/) - Machine Learning and Data Mining for Astronomy.
* [graphlab-create](https://turi.com/products/create/docs/) - A library with various machine learning models (regression, clustering, recommender systems, graph analytics, etc.) implemented on top of a disk-backed DataFrame.
* [BigML](https://bigml.com) - A library that contacts external servers.
* [pattern ![GitHub Repo Stars](https://img.shields.io/github/stars/clips/pattern) ![GitHub last commit](https://img.shields.io/github/last-commit/clips/pattern)](https://github.com/clips/pattern) - Web mining module for Python.
* [NuPIC ![GitHub Repo Stars](https://img.shields.io/github/stars/numenta/nupic) ![GitHub last commit](https://img.shields.io/github/last-commit/numenta/nupic)](https://github.com/numenta/nupic) - Numenta Platform for Intelligent Computing.
* [Pylearn2 ![GitHub Repo Stars](https://img.shields.io/github/stars/lisa-lab/pylearn2) ![GitHub last commit](https://img.shields.io/github/last-commit/lisa-lab/pylearn2)](https://github.com/lisa-lab/pylearn2) - A Machine Learning library based on [Theano ![GitHub Repo Stars](https://img.shields.io/github/stars/Theano/Theano) ![GitHub last commit](https://img.shields.io/github/last-commit/Theano/Theano)](https://github.com/Theano/Theano). **[Deprecated]**
* [keras ![GitHub Repo Stars](https://img.shields.io/github/stars/keras-team/keras) ![GitHub last commit](https://img.shields.io/github/last-commit/keras-team/keras)](https://github.com/keras-team/keras) - High-level neural networks frontend for [TensorFlow ![GitHub Repo Stars](https://img.shields.io/github/stars/tensorflow/tensorflow) ![GitHub last commit](https://img.shields.io/github/last-commit/tensorflow/tensorflow)](https://github.com/tensorflow/tensorflow), [CNTK ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/CNTK) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/CNTK)](https://github.com/Microsoft/CNTK) and [Theano ![GitHub Repo Stars](https://img.shields.io/github/stars/Theano/Theano) ![GitHub last commit](https://img.shields.io/github/last-commit/Theano/Theano)](https://github.com/Theano/Theano).
* [Lasagne ![GitHub Repo Stars](https://img.shields.io/github/stars/Lasagne/Lasagne) ![GitHub last commit](https://img.shields.io/github/last-commit/Lasagne/Lasagne)](https://github.com/Lasagne/Lasagne) - Lightweight library to build and train neural networks in Theano.
* [hebel ![GitHub Repo Stars](https://img.shields.io/github/stars/hannes-brt/hebel) ![GitHub last commit](https://img.shields.io/github/last-commit/hannes-brt/hebel)](https://github.com/hannes-brt/hebel) - GPU-Accelerated Deep Learning Library in Python. **[Deprecated]**
* [Chainer ![GitHub Repo Stars](https://img.shields.io/github/stars/chainer/chainer) ![GitHub last commit](https://img.shields.io/github/last-commit/chainer/chainer)](https://github.com/chainer/chainer) - Flexible neural network framework.
* [prophet](https://facebook.github.io/prophet/) - Fast and automated time series forecasting framework by Facebook.
* [gensim ![GitHub Repo Stars](https://img.shields.io/github/stars/RaRe-Technologies/gensim) ![GitHub last commit](https://img.shields.io/github/last-commit/RaRe-Technologies/gensim)](https://github.com/RaRe-Technologies/gensim) - Topic Modelling for Humans.
* [tweetopic](https://centre-for-humanities-computing.github.io/tweetopic/) - Blazing fast short-text-topic-modelling for Python.
* [topicwizard ![GitHub Repo Stars](https://img.shields.io/github/stars/x-tabdeveloping/topic-wizard) ![GitHub last commit](https://img.shields.io/github/last-commit/x-tabdeveloping/topic-wizard)](https://github.com/x-tabdeveloping/topic-wizard) - Interactive topic model visualization/interpretation framework.
* [topik ![GitHub Repo Stars](https://img.shields.io/github/stars/ContinuumIO/topik) ![GitHub last commit](https://img.shields.io/github/last-commit/ContinuumIO/topik)](https://github.com/ContinuumIO/topik) - Topic modelling toolkit. **[Deprecated]**
* [PyBrain ![GitHub Repo Stars](https://img.shields.io/github/stars/pybrain/pybrain) ![GitHub last commit](https://img.shields.io/github/last-commit/pybrain/pybrain)](https://github.com/pybrain/pybrain) - Another Python Machine Learning Library.
* [Brainstorm ![GitHub Repo Stars](https://img.shields.io/github/stars/IDSIA/brainstorm) ![GitHub last commit](https://img.shields.io/github/last-commit/IDSIA/brainstorm)](https://github.com/IDSIA/brainstorm) - Fast, flexible and fun neural networks. This is the successor of PyBrain.
* [Surprise](https://surpriselib.com) - A scikit for building and analyzing recommender systems.
* [implicit](https://implicit.readthedocs.io/en/latest/quickstart.html) - Fast Python Collaborative Filtering for Implicit Datasets.
* [LightFM](https://making.lyst.com/lightfm/docs/home.html) -  A Python implementation of a number of popular recommendation algorithms for both implicit and explicit feedback.
* [Crab ![GitHub Repo Stars](https://img.shields.io/github/stars/muricoca/crab) ![GitHub last commit](https://img.shields.io/github/last-commit/muricoca/crab)](https://github.com/muricoca/crab) - A flexible, fast recommender engine. **[Deprecated]**
* [python-recsys ![GitHub Repo Stars](https://img.shields.io/github/stars/ocelma/python-recsys) ![GitHub last commit](https://img.shields.io/github/last-commit/ocelma/python-recsys)](https://github.com/ocelma/python-recsys) - A Python library for implementing a Recommender System.
* [thinking bayes ![GitHub Repo Stars](https://img.shields.io/github/stars/AllenDowney/ThinkBayes) ![GitHub last commit](https://img.shields.io/github/last-commit/AllenDowney/ThinkBayes)](https://github.com/AllenDowney/ThinkBayes) - Book on Bayesian Analysis.
* [Image-to-Image Translation with Conditional Adversarial Networks ![GitHub Repo Stars](https://img.shields.io/github/stars/williamFalcon/pix2pix-keras) ![GitHub last commit](https://img.shields.io/github/last-commit/williamFalcon/pix2pix-keras)](https://github.com/williamFalcon/pix2pix-keras) - Implementation of image to image (pix2pix) translation from the paper by [isola et al](https://arxiv.org/pdf/1611.07004.pdf).[DEEP LEARNING]
* [Restricted Boltzmann Machines ![GitHub Repo Stars](https://img.shields.io/github/stars/echen/restricted-boltzmann-machines) ![GitHub last commit](https://img.shields.io/github/last-commit/echen/restricted-boltzmann-machines)](https://github.com/echen/restricted-boltzmann-machines) -Restricted Boltzmann Machines in Python. [DEEP LEARNING]
* [Bolt ![GitHub Repo Stars](https://img.shields.io/github/stars/pprett/bolt) ![GitHub last commit](https://img.shields.io/github/last-commit/pprett/bolt)](https://github.com/pprett/bolt) - Bolt Online Learning Toolbox. **[Deprecated]**
* [CoverTree ![GitHub Repo Stars](https://img.shields.io/github/stars/patvarilly/CoverTree) ![GitHub last commit](https://img.shields.io/github/last-commit/patvarilly/CoverTree)](https://github.com/patvarilly/CoverTree) - Python implementation of cover trees, near-drop-in replacement for scipy.spatial.kdtree **[Deprecated]**
* [nilearn ![GitHub Repo Stars](https://img.shields.io/github/stars/nilearn/nilearn) ![GitHub last commit](https://img.shields.io/github/last-commit/nilearn/nilearn)](https://github.com/nilearn/nilearn) - Machine learning for NeuroImaging in Python.
* [neuropredict ![GitHub Repo Stars](https://img.shields.io/github/stars/raamana/neuropredict) ![GitHub last commit](https://img.shields.io/github/last-commit/raamana/neuropredict)](https://github.com/raamana/neuropredict) - Aimed at novice machine learners and non-expert programmers, this package offers easy (no coding needed) and comprehensive machine learning (evaluation and full report of predictive performance WITHOUT requiring you to code) in Python for NeuroImaging and any other type of features. This is aimed at absorbing much of the ML workflow, unlike other packages like nilearn and pymvpa, which require you to learn their API and code to produce anything useful.
* [imbalanced-learn](https://imbalanced-learn.org/stable/) - Python module to perform under sampling and oversampling with various techniques.
* [imbalanced-ensemble ![GitHub Repo Stars](https://img.shields.io/github/stars/ZhiningLiu1998/imbalanced-ensemble) ![GitHub last commit](https://img.shields.io/github/last-commit/ZhiningLiu1998/imbalanced-ensemble)](https://github.com/ZhiningLiu1998/imbalanced-ensemble) - Python toolbox for quick implementation, modification, evaluation, and visualization of ensemble learning algorithms for class-imbalanced data. Supports out-of-the-box multi-class imbalanced (long-tailed) classification.
* [Shogun ![GitHub Repo Stars](https://img.shields.io/github/stars/shogun-toolbox/shogun) ![GitHub last commit](https://img.shields.io/github/last-commit/shogun-toolbox/shogun)](https://github.com/shogun-toolbox/shogun) - The Shogun Machine Learning Toolbox.
* [Pyevolve ![GitHub Repo Stars](https://img.shields.io/github/stars/perone/Pyevolve) ![GitHub last commit](https://img.shields.io/github/last-commit/perone/Pyevolve)](https://github.com/perone/Pyevolve) - Genetic algorithm framework. **[Deprecated]**
* [Caffe ![GitHub Repo Stars](https://img.shields.io/github/stars/BVLC/caffe) ![GitHub last commit](https://img.shields.io/github/last-commit/BVLC/caffe)](https://github.com/BVLC/caffe) - A deep learning framework developed with cleanliness, readability, and speed in mind.
* [breze ![GitHub Repo Stars](https://img.shields.io/github/stars/breze-no-salt/breze) ![GitHub last commit](https://img.shields.io/github/last-commit/breze-no-salt/breze)](https://github.com/breze-no-salt/breze) - Theano based library for deep and recurrent neural networks.
* [Cortex ![GitHub Repo Stars](https://img.shields.io/github/stars/cortexlabs/cortex) ![GitHub last commit](https://img.shields.io/github/last-commit/cortexlabs/cortex)](https://github.com/cortexlabs/cortex) - Open source platform for deploying machine learning models in production.
* [pyhsmm ![GitHub Repo Stars](https://img.shields.io/github/stars/mattjj/pyhsmm) ![GitHub last commit](https://img.shields.io/github/last-commit/mattjj/pyhsmm)](https://github.com/mattjj/pyhsmm) - library for approximate unsupervised inference in Bayesian Hidden Markov Models (HMMs) and explicit-duration Hidden semi-Markov Models (HSMMs), focusing on the Bayesian Nonparametric extensions, the HDP-HMM and HDP-HSMM, mostly with weak-limit approximations.
* [SKLL ![GitHub Repo Stars](https://img.shields.io/github/stars/EducationalTestingService/skll) ![GitHub last commit](https://img.shields.io/github/last-commit/EducationalTestingService/skll)](https://github.com/EducationalTestingService/skll) - A wrapper around scikit-learn that makes it simpler to conduct experiments.
* [neurolab ![GitHub Repo Stars](https://img.shields.io/github/stars/zueve/neurolab) ![GitHub last commit](https://img.shields.io/github/last-commit/zueve/neurolab)](https://github.com/zueve/neurolab)
* [Spearmint ![GitHub Repo Stars](https://img.shields.io/github/stars/HIPS/Spearmint) ![GitHub last commit](https://img.shields.io/github/last-commit/HIPS/Spearmint)](https://github.com/HIPS/Spearmint) - Spearmint is a package to perform Bayesian optimization according to the algorithms outlined in the paper: Practical Bayesian Optimization of Machine Learning Algorithms. Jasper Snoek, Hugo Larochelle and Ryan P. Adams. Advances in Neural Information Processing Systems, 2012. **[Deprecated]**
* [Pebl ![GitHub Repo Stars](https://img.shields.io/github/stars/abhik/pebl) ![GitHub last commit](https://img.shields.io/github/last-commit/abhik/pebl)](https://github.com/abhik/pebl/) - Python Environment for Bayesian Learning. **[Deprecated]**
* [Theano ![GitHub Repo Stars](https://img.shields.io/github/stars/Theano/Theano) ![GitHub last commit](https://img.shields.io/github/last-commit/Theano/Theano)](https://github.com/Theano/Theano/) - Optimizing GPU-meta-programming code generating array oriented optimizing math compiler in Python.
* [TensorFlow ![GitHub Repo Stars](https://img.shields.io/github/stars/tensorflow/tensorflow) ![GitHub last commit](https://img.shields.io/github/last-commit/tensorflow/tensorflow)](https://github.com/tensorflow/tensorflow/) - Open source software library for numerical computation using data flow graphs.
* [pomegranate ![GitHub Repo Stars](https://img.shields.io/github/stars/jmschrei/pomegranate) ![GitHub last commit](https://img.shields.io/github/last-commit/jmschrei/pomegranate)](https://github.com/jmschrei/pomegranate) - Hidden Markov Models for Python, implemented in Cython for speed and efficiency.
* [python-timbl ![GitHub Repo Stars](https://img.shields.io/github/stars/proycon/python-timbl) ![GitHub last commit](https://img.shields.io/github/last-commit/proycon/python-timbl)](https://github.com/proycon/python-timbl) - A Python extension module wrapping the full TiMBL C++ programming interface. Timbl is an elaborate k-Nearest Neighbours machine learning toolkit.
* [deap ![GitHub Repo Stars](https://img.shields.io/github/stars/deap/deap) ![GitHub last commit](https://img.shields.io/github/last-commit/deap/deap)](https://github.com/deap/deap) - Evolutionary algorithm framework.
* [pydeep ![GitHub Repo Stars](https://img.shields.io/github/stars/andersbll/deeppy) ![GitHub last commit](https://img.shields.io/github/last-commit/andersbll/deeppy)](https://github.com/andersbll/deeppy) - Deep Learning In Python. **[Deprecated]**
* [mlxtend ![GitHub Repo Stars](https://img.shields.io/github/stars/rasbt/mlxtend) ![GitHub last commit](https://img.shields.io/github/last-commit/rasbt/mlxtend)](https://github.com/rasbt/mlxtend) - A library consisting of useful tools for data science and machine learning tasks.
* [neon ![GitHub Repo Stars](https://img.shields.io/github/stars/NervanaSystems/neon) ![GitHub last commit](https://img.shields.io/github/last-commit/NervanaSystems/neon)](https://github.com/NervanaSystems/neon) - Nervana's [high-performance ![GitHub Repo Stars](https://img.shields.io/github/stars/soumith/convnet-benchmarks) ![GitHub last commit](https://img.shields.io/github/last-commit/soumith/convnet-benchmarks)](https://github.com/soumith/convnet-benchmarks) Python-based Deep Learning framework [DEEP LEARNING]. **[Deprecated]**
* [Optunity](https://optunity.readthedocs.io/en/latest/) - A library dedicated to automated hyperparameter optimization with a simple, lightweight API to facilitate drop-in replacement of grid search.
* [Neural Networks and Deep Learning ![GitHub Repo Stars](https://img.shields.io/github/stars/mnielsen/neural-networks-and-deep-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/mnielsen/neural-networks-and-deep-learning)](https://github.com/mnielsen/neural-networks-and-deep-learning) - Code samples for my book "Neural Networks and Deep Learning" [DEEP LEARNING].
* [Annoy ![GitHub Repo Stars](https://img.shields.io/github/stars/spotify/annoy) ![GitHub last commit](https://img.shields.io/github/last-commit/spotify/annoy)](https://github.com/spotify/annoy) - Approximate nearest neighbours implementation.
* [TPOT ![GitHub Repo Stars](https://img.shields.io/github/stars/EpistasisLab/tpot) ![GitHub last commit](https://img.shields.io/github/last-commit/EpistasisLab/tpot)](https://github.com/EpistasisLab/tpot) - Tool that automatically creates and optimizes machine learning pipelines using genetic programming. Consider it your personal data science assistant, automating a tedious part of machine learning.
* [pgmpy ![GitHub Repo Stars](https://img.shields.io/github/stars/pgmpy/pgmpy) ![GitHub last commit](https://img.shields.io/github/last-commit/pgmpy/pgmpy)](https://github.com/pgmpy/pgmpy) A python library for working with Probabilistic Graphical Models.
* [DIGITS ![GitHub Repo Stars](https://img.shields.io/github/stars/NVIDIA/DIGITS) ![GitHub last commit](https://img.shields.io/github/last-commit/NVIDIA/DIGITS)](https://github.com/NVIDIA/DIGITS) - The Deep Learning GPU Training System (DIGITS) is a web application for training deep learning models.
* [Orange](https://orange.biolab.si/) - Open source data visualization and data analysis for novices and experts.
* [MXNet ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/incubator-mxnet) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/incubator-mxnet)](https://github.com/apache/incubator-mxnet) - Lightweight, Portable, Flexible Distributed/Mobile Deep Learning with Dynamic, Mutation-aware Dataflow Dep Scheduler; for Python, R, Julia, Go, JavaScript and more.
* [milk ![GitHub Repo Stars](https://img.shields.io/github/stars/luispedro/milk) ![GitHub last commit](https://img.shields.io/github/last-commit/luispedro/milk)](https://github.com/luispedro/milk) - Machine learning toolkit focused on supervised classification. **[Deprecated]**
* [TFLearn ![GitHub Repo Stars](https://img.shields.io/github/stars/tflearn/tflearn) ![GitHub last commit](https://img.shields.io/github/last-commit/tflearn/tflearn)](https://github.com/tflearn/tflearn) - Deep learning library featuring a higher-level API for TensorFlow.
* [REP ![GitHub Repo Stars](https://img.shields.io/github/stars/yandex/rep) ![GitHub last commit](https://img.shields.io/github/last-commit/yandex/rep)](https://github.com/yandex/rep) - an IPython-based environment for conducting data-driven research in a consistent and reproducible way. REP is not trying to substitute scikit-learn, but extends it and provides better user experience. **[Deprecated]**
* [rgf_python ![GitHub Repo Stars](https://img.shields.io/github/stars/RGF-team/rgf) ![GitHub last commit](https://img.shields.io/github/last-commit/RGF-team/rgf)](https://github.com/RGF-team/rgf) - Python bindings for Regularized Greedy Forest (Tree) Library.
* [skbayes ![GitHub Repo Stars](https://img.shields.io/github/stars/AmazaspShumik/sklearn-bayes) ![GitHub last commit](https://img.shields.io/github/last-commit/AmazaspShumik/sklearn-bayes)](https://github.com/AmazaspShumik/sklearn-bayes) - Python package for Bayesian Machine Learning with scikit-learn API.
* [fuku-ml ![GitHub Repo Stars](https://img.shields.io/github/stars/fukuball/fuku-ml) ![GitHub last commit](https://img.shields.io/github/last-commit/fukuball/fuku-ml)](https://github.com/fukuball/fuku-ml) - Simple machine learning library, including Perceptron, Regression, Support Vector Machine, Decision Tree and more, it's easy to use and easy to learn for beginners.
* [Xcessiv ![GitHub Repo Stars](https://img.shields.io/github/stars/reiinakano/xcessiv) ![GitHub last commit](https://img.shields.io/github/last-commit/reiinakano/xcessiv)](https://github.com/reiinakano/xcessiv) - A web-based application for quick, scalable, and automated hyperparameter tuning and stacked ensembling.
* [PyTorch ![GitHub Repo Stars](https://img.shields.io/github/stars/pytorch/pytorch) ![GitHub last commit](https://img.shields.io/github/last-commit/pytorch/pytorch)](https://github.com/pytorch/pytorch) - Tensors and Dynamic neural networks in Python with strong GPU acceleration
* [PyTorch Lightning ![GitHub Repo Stars](https://img.shields.io/github/stars/PyTorchLightning/pytorch-lightning) ![GitHub last commit](https://img.shields.io/github/last-commit/PyTorchLightning/pytorch-lightning)](https://github.com/PyTorchLightning/pytorch-lightning) - The lightweight PyTorch wrapper for high-performance AI research.
* [PyTorch Lightning Bolts ![GitHub Repo Stars](https://img.shields.io/github/stars/PyTorchLightning/pytorch-lightning-bolts) ![GitHub last commit](https://img.shields.io/github/last-commit/PyTorchLightning/pytorch-lightning-bolts)](https://github.com/PyTorchLightning/pytorch-lightning-bolts) - Toolbox of models, callbacks, and datasets for AI/ML researchers.
* [skorch ![GitHub Repo Stars](https://img.shields.io/github/stars/skorch-dev/skorch) ![GitHub last commit](https://img.shields.io/github/last-commit/skorch-dev/skorch)](https://github.com/skorch-dev/skorch) - A scikit-learn compatible neural network library that wraps PyTorch.
* [ML-From-Scratch ![GitHub Repo Stars](https://img.shields.io/github/stars/eriklindernoren/ML-From-Scratch) ![GitHub last commit](https://img.shields.io/github/last-commit/eriklindernoren/ML-From-Scratch)](https://github.com/eriklindernoren/ML-From-Scratch) - Implementations of Machine Learning models from scratch in Python with a focus on transparency. Aims to showcase the nuts and bolts of ML in an accessible way.
* [Edward](http://edwardlib.org/) - A library for probabilistic modelling, inference, and criticism. Built on top of TensorFlow.
* [xRBM ![GitHub Repo Stars](https://img.shields.io/github/stars/omimo/xRBM) ![GitHub last commit](https://img.shields.io/github/last-commit/omimo/xRBM)](https://github.com/omimo/xRBM) - A library for Restricted Boltzmann Machine (RBM) and its conditional variants in Tensorflow.
* [CatBoost ![GitHub Repo Stars](https://img.shields.io/github/stars/catboost/catboost) ![GitHub last commit](https://img.shields.io/github/last-commit/catboost/catboost)](https://github.com/catboost/catboost) - General purpose gradient boosting on decision trees library with categorical features support out of the box. It is easy to install, well documented and supports CPU and GPU (even multi-GPU) computation.
* [stacked_generalization ![GitHub Repo Stars](https://img.shields.io/github/stars/fukatani/stacked_generalization) ![GitHub last commit](https://img.shields.io/github/last-commit/fukatani/stacked_generalization)](https://github.com/fukatani/stacked_generalization) - Implementation of machine learning stacking technique as a handy library in Python.
* [modAL ![GitHub Repo Stars](https://img.shields.io/github/stars/modAL-python/modAL) ![GitHub last commit](https://img.shields.io/github/last-commit/modAL-python/modAL)](https://github.com/modAL-python/modAL) - A modular active learning framework for Python, built on top of scikit-learn.
* [Cogitare ![GitHub Repo Stars](https://img.shields.io/github/stars/cogitare-ai/cogitare) ![GitHub last commit](https://img.shields.io/github/last-commit/cogitare-ai/cogitare)](https://github.com/cogitare-ai/cogitare): A Modern, Fast, and Modular Deep Learning and Machine Learning framework for Python.
* [Parris ![GitHub Repo Stars](https://img.shields.io/github/stars/jgreenemi/Parris) ![GitHub last commit](https://img.shields.io/github/last-commit/jgreenemi/Parris)](https://github.com/jgreenemi/Parris) - Parris, the automated infrastructure setup tool for machine learning algorithms.
* [neonrvm ![GitHub Repo Stars](https://img.shields.io/github/stars/siavashserver/neonrvm) ![GitHub last commit](https://img.shields.io/github/last-commit/siavashserver/neonrvm)](https://github.com/siavashserver/neonrvm) - neonrvm is an open source machine learning library based on RVM technique. It's written in C programming language and comes with Python programming language bindings.
* [Turi Create ![GitHub Repo Stars](https://img.shields.io/github/stars/apple/turicreate) ![GitHub last commit](https://img.shields.io/github/last-commit/apple/turicreate)](https://github.com/apple/turicreate) - Machine learning from Apple. Turi Create simplifies the development of custom machine learning models. You don't have to be a machine learning expert to add recommendations, object detection, image classification, image similarity or activity classification to your app.
* [xLearn ![GitHub Repo Stars](https://img.shields.io/github/stars/aksnzhy/xlearn) ![GitHub last commit](https://img.shields.io/github/last-commit/aksnzhy/xlearn)](https://github.com/aksnzhy/xlearn) - A high performance, easy-to-use, and scalable machine learning package, which can be used to solve large-scale machine learning problems. xLearn is especially useful for solving machine learning problems on large-scale sparse data, which is very common in Internet services such as online advertisement and recommender systems.
* [mlens ![GitHub Repo Stars](https://img.shields.io/github/stars/flennerhag/mlens) ![GitHub last commit](https://img.shields.io/github/last-commit/flennerhag/mlens)](https://github.com/flennerhag/mlens) - A high performance, memory efficient, maximally parallelized ensemble learning, integrated with scikit-learn.
* [Thampi ![GitHub Repo Stars](https://img.shields.io/github/stars/scoremedia/thampi) ![GitHub last commit](https://img.shields.io/github/last-commit/scoremedia/thampi)](https://github.com/scoremedia/thampi) - Machine Learning Prediction System on AWS Lambda
* [MindsDB ![GitHub Repo Stars](https://img.shields.io/github/stars/mindsdb/mindsdb) ![GitHub last commit](https://img.shields.io/github/last-commit/mindsdb/mindsdb)](https://github.com/mindsdb/mindsdb) - Open Source framework to streamline use of neural networks.
* [Microsoft Recommenders ![GitHub Repo Stars](https://img.shields.io/github/stars/Microsoft/Recommenders) ![GitHub last commit](https://img.shields.io/github/last-commit/Microsoft/Recommenders)](https://github.com/Microsoft/Recommenders): Examples and best practices for building recommendation systems, provided as Jupyter notebooks. The repo contains some of the latest state of the art algorithms from Microsoft Research as well as from other companies and institutions.
* [StellarGraph ![GitHub Repo Stars](https://img.shields.io/github/stars/stellargraph/stellargraph) ![GitHub last commit](https://img.shields.io/github/last-commit/stellargraph/stellargraph)](https://github.com/stellargraph/stellargraph): Machine Learning on Graphs, a Python library for machine learning on graph-structured (network-structured) data.
* [BentoML ![GitHub Repo Stars](https://img.shields.io/github/stars/bentoml/bentoml) ![GitHub last commit](https://img.shields.io/github/last-commit/bentoml/bentoml)](https://github.com/bentoml/bentoml): Toolkit for package and deploy machine learning models for serving in production
* [MiraiML ![GitHub Repo Stars](https://img.shields.io/github/stars/arthurpaulino/miraiml) ![GitHub last commit](https://img.shields.io/github/last-commit/arthurpaulino/miraiml)](https://github.com/arthurpaulino/miraiml): An asynchronous engine for continuous & autonomous machine learning, built for real-time usage.
* [numpy-ML ![GitHub Repo Stars](https://img.shields.io/github/stars/ddbourgin/numpy-ml) ![GitHub last commit](https://img.shields.io/github/last-commit/ddbourgin/numpy-ml)](https://github.com/ddbourgin/numpy-ml): Reference implementations of ML models written in numpy
* [Neuraxle ![GitHub Repo Stars](https://img.shields.io/github/stars/Neuraxio/Neuraxle) ![GitHub last commit](https://img.shields.io/github/last-commit/Neuraxio/Neuraxle)](https://github.com/Neuraxio/Neuraxle): A framework providing the right abstractions to ease research, development, and deployment of your ML pipelines.
* [Cornac ![GitHub Repo Stars](https://img.shields.io/github/stars/PreferredAI/cornac) ![GitHub last commit](https://img.shields.io/github/last-commit/PreferredAI/cornac)](https://github.com/PreferredAI/cornac) - A comparative framework for multimodal recommender systems with a focus on models leveraging auxiliary data.
* [JAX ![GitHub Repo Stars](https://img.shields.io/github/stars/google/jax) ![GitHub last commit](https://img.shields.io/github/last-commit/google/jax)](https://github.com/google/jax) - JAX is Autograd and XLA, brought together for high-performance machine learning research.
* [Catalyst ![GitHub Repo Stars](https://img.shields.io/github/stars/catalyst-team/catalyst) ![GitHub last commit](https://img.shields.io/github/last-commit/catalyst-team/catalyst)](https://github.com/catalyst-team/catalyst) - High-level utils for PyTorch DL & RL research. It was developed with a focus on reproducibility, fast experimentation and code/ideas reusing. Being able to research/develop something new, rather than write another regular train loop.
* [Fastai ![GitHub Repo Stars](https://img.shields.io/github/stars/fastai/fastai) ![GitHub last commit](https://img.shields.io/github/last-commit/fastai/fastai)](https://github.com/fastai/fastai) - High-level wrapper built on the top of Pytorch which supports vision, text, tabular data and collaborative filtering.
* [scikit-multiflow ![GitHub Repo Stars](https://img.shields.io/github/stars/scikit-multiflow/scikit-multiflow) ![GitHub last commit](https://img.shields.io/github/last-commit/scikit-multiflow/scikit-multiflow)](https://github.com/scikit-multiflow/scikit-multiflow) - A machine learning framework for multi-output/multi-label and stream data.
* [Lightwood ![GitHub Repo Stars](https://img.shields.io/github/stars/mindsdb/lightwood) ![GitHub last commit](https://img.shields.io/github/last-commit/mindsdb/lightwood)](https://github.com/mindsdb/lightwood) - A Pytorch based framework that breaks down machine learning problems into smaller blocks that can be glued together seamlessly with objective to build predictive models with one line of code.
* [bayeso ![GitHub Repo Stars](https://img.shields.io/github/stars/jungtaekkim/bayeso) ![GitHub last commit](https://img.shields.io/github/last-commit/jungtaekkim/bayeso)](https://github.com/jungtaekkim/bayeso) - A simple, but essential Bayesian optimization package, written in Python.
* [mljar-supervised ![GitHub Repo Stars](https://img.shields.io/github/stars/mljar/mljar-supervised) ![GitHub last commit](https://img.shields.io/github/last-commit/mljar/mljar-supervised)](https://github.com/mljar/mljar-supervised) - An Automated Machine Learning (AutoML) python package for tabular data. It can handle: Binary Classification, MultiClass Classification and Regression. It provides explanations and markdown reports.
* [evostra ![GitHub Repo Stars](https://img.shields.io/github/stars/alirezamika/evostra) ![GitHub last commit](https://img.shields.io/github/last-commit/alirezamika/evostra)](https://github.com/alirezamika/evostra) - A fast Evolution Strategy implementation in Python.
* [Determined ![GitHub Repo Stars](https://img.shields.io/github/stars/determined-ai/determined) ![GitHub last commit](https://img.shields.io/github/last-commit/determined-ai/determined)](https://github.com/determined-ai/determined) - Scalable deep learning training platform, including integrated support for distributed training, hyperparameter tuning, experiment tracking, and model management.
* [PySyft ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenMined/PySyft) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenMined/PySyft)](https://github.com/OpenMined/PySyft) - A Python library for secure and private Deep Learning built on PyTorch and TensorFlow.
* [PyGrid ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenMined/PyGrid) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenMined/PyGrid)](https://github.com/OpenMined/PyGrid/) - Peer-to-peer network of data owners and data scientists who can collectively train AI models using PySyft
* [sktime ![GitHub Repo Stars](https://img.shields.io/github/stars/alan-turing-institute/sktime) ![GitHub last commit](https://img.shields.io/github/last-commit/alan-turing-institute/sktime)](https://github.com/alan-turing-institute/sktime) - A unified framework for machine learning with time series
* [OPFython ![GitHub Repo Stars](https://img.shields.io/github/stars/gugarosa/opfython) ![GitHub last commit](https://img.shields.io/github/last-commit/gugarosa/opfython)](https://github.com/gugarosa/opfython) - A Python-inspired implementation of the Optimum-Path Forest classifier.
* [Opytimizer ![GitHub Repo Stars](https://img.shields.io/github/stars/gugarosa/opytimizer) ![GitHub last commit](https://img.shields.io/github/last-commit/gugarosa/opytimizer)](https://github.com/gugarosa/opytimizer) - Python-based meta-heuristic optimization techniques.
* [Gradio ![GitHub Repo Stars](https://img.shields.io/github/stars/gradio-app/gradio) ![GitHub last commit](https://img.shields.io/github/last-commit/gradio-app/gradio)](https://github.com/gradio-app/gradio) - A Python library for quickly creating and sharing demos of models. Debug models interactively in your browser, get feedback from collaborators, and generate public links without deploying anything.
* [Hub ![GitHub Repo Stars](https://img.shields.io/github/stars/activeloopai/Hub) ![GitHub last commit](https://img.shields.io/github/last-commit/activeloopai/Hub)](https://github.com/activeloopai/Hub) - Fastest unstructured dataset management for TensorFlow/PyTorch. Stream & version-control data. Store even petabyte-scale data in a single numpy-like array on the cloud accessible on any machine. Visit [activeloop.ai](https://activeloop.ai) for more info.
* [Synthia ![GitHub Repo Stars](https://img.shields.io/github/stars/dmey/synthia) ![GitHub last commit](https://img.shields.io/github/last-commit/dmey/synthia)](https://github.com/dmey/synthia) - Multidimensional synthetic data generation in Python.
* [ByteHub ![GitHub Repo Stars](https://img.shields.io/github/stars/bytehub-ai/bytehub) ![GitHub last commit](https://img.shields.io/github/last-commit/bytehub-ai/bytehub)](https://github.com/bytehub-ai/bytehub) - An easy-to-use, Python-based feature store. Optimized for time-series data.
* [Backprop ![GitHub Repo Stars](https://img.shields.io/github/stars/backprop-ai/backprop) ![GitHub last commit](https://img.shields.io/github/last-commit/backprop-ai/backprop)](https://github.com/backprop-ai/backprop) - Backprop makes it simple to use, finetune, and deploy state-of-the-art ML models.
* [River ![GitHub Repo Stars](https://img.shields.io/github/stars/online-ml/river) ![GitHub last commit](https://img.shields.io/github/last-commit/online-ml/river)](https://github.com/online-ml/river): A framework for general purpose online machine learning.
* [FEDOT ![GitHub Repo Stars](https://img.shields.io/github/stars/nccr-itmo/FEDOT) ![GitHub last commit](https://img.shields.io/github/last-commit/nccr-itmo/FEDOT)](https://github.com/nccr-itmo/FEDOT): An AutoML framework for the automated design of composite modelling pipelines. It can handle classification, regression, and time series forecasting tasks on different types of data (including multi-modal datasets).
* [Sklearn-genetic-opt ![GitHub Repo Stars](https://img.shields.io/github/stars/rodrigo-arenas/Sklearn-genetic-opt) ![GitHub last commit](https://img.shields.io/github/last-commit/rodrigo-arenas/Sklearn-genetic-opt)](https://github.com/rodrigo-arenas/Sklearn-genetic-opt): An AutoML package for hyperparameters tuning using evolutionary algorithms, with built-in callbacks, plotting, remote logging and more.
* [Evidently ![GitHub Repo Stars](https://img.shields.io/github/stars/evidentlyai/evidently) ![GitHub last commit](https://img.shields.io/github/last-commit/evidentlyai/evidently)](https://github.com/evidentlyai/evidently): Interactive reports to analyze machine learning models during validation or production monitoring.
* [Streamlit ![GitHub Repo Stars](https://img.shields.io/github/stars/streamlit/streamlit) ![GitHub last commit](https://img.shields.io/github/last-commit/streamlit/streamlit)](https://github.com/streamlit/streamlit): Streamlit is an framework to create beautiful data apps in hours, not weeks.
* [Optuna ![GitHub Repo Stars](https://img.shields.io/github/stars/optuna/optuna) ![GitHub last commit](https://img.shields.io/github/last-commit/optuna/optuna)](https://github.com/optuna/optuna): Optuna is an automatic hyperparameter optimization software framework, particularly designed for machine learning.
* [Deepchecks ![GitHub Repo Stars](https://img.shields.io/github/stars/deepchecks/deepchecks) ![GitHub last commit](https://img.shields.io/github/last-commit/deepchecks/deepchecks)](https://github.com/deepchecks/deepchecks): Validation & testing of machine learning models and data during model development, deployment, and production. This includes checks and suites related to various types of issues, such as model performance, data integrity, distribution mismatches, and more.
* [Shapash ![GitHub Repo Stars](https://img.shields.io/github/stars/MAIF/shapash) ![GitHub last commit](https://img.shields.io/github/last-commit/MAIF/shapash)](https://github.com/MAIF/shapash) : Shapash is a Python library that provides several types of visualization that display explicit labels that everyone can understand.
* [Eurybia ![GitHub Repo Stars](https://img.shields.io/github/stars/MAIF/eurybia) ![GitHub last commit](https://img.shields.io/github/last-commit/MAIF/eurybia)](https://github.com/MAIF/eurybia): Eurybia monitors data and model drift over time and securizes model deployment with data validation.
* [Colossal-AI ![GitHub Repo Stars](https://img.shields.io/github/stars/hpcaitech/ColossalAI) ![GitHub last commit](https://img.shields.io/github/last-commit/hpcaitech/ColossalAI)](https://github.com/hpcaitech/ColossalAI): An open-source deep learning system for large-scale model training and inference with high efficiency and low cost.
* [dirty_cat ![GitHub Repo Stars](https://img.shields.io/github/stars/dirty-cat/dirty_cat) ![GitHub last commit](https://img.shields.io/github/last-commit/dirty-cat/dirty_cat)](https://github.com/dirty-cat/dirty_cat) - facilitates machine-learning on dirty, non-curated categories. It provides transformers and encoders robust to morphological variants, such as typos.
* [Upgini ![GitHub Repo Stars](https://img.shields.io/github/stars/upgini/upgini) ![GitHub last commit](https://img.shields.io/github/last-commit/upgini/upgini)](https://github.com/upgini/upgini): Free automated data & feature enrichment library for machine learning - automatically searches through thousands of ready-to-use features from public and community shared data sources and enriches your training dataset with only the accuracy improving features.
* [AutoML-Implementation-for-Static-and-Dynamic-Data-Analytics ![GitHub Repo Stars](https://img.shields.io/github/stars/Western-OC2-Lab/AutoML-Implementation-for-Static-and-Dynamic-Data-Analytics) ![GitHub last commit](https://img.shields.io/github/last-commit/Western-OC2-Lab/AutoML-Implementation-for-Static-and-Dynamic-Data-Analytics)](https://github.com/Western-OC2-Lab/AutoML-Implementation-for-Static-and-Dynamic-Data-Analytics): A tutorial to help machine learning researchers to automatically obtain optimized machine learning models with the optimal learning performance on any specific task.
* [SKBEL ![GitHub Repo Stars](https://img.shields.io/github/stars/robinthibaut/skbel) ![GitHub last commit](https://img.shields.io/github/last-commit/robinthibaut/skbel)](https://github.com/robinthibaut/skbel): A Python library for Bayesian Evidential Learning (BEL) in order to estimate the uncertainty of a prediction.
* [NannyML](https://bit.ly/nannyml-github-machinelearning): Python library capable of fully capturing the impact of data drift on performance. Allows estimation of post-deployment model performance without access to targets.
* [cleanlab ![GitHub Repo Stars](https://img.shields.io/github/stars/cleanlab/cleanlab) ![GitHub last commit](https://img.shields.io/github/last-commit/cleanlab/cleanlab)](https://github.com/cleanlab/cleanlab): The standard data-centric AI package for data quality and machine learning with messy, real-world data and labels.
* [AutoGluon ![GitHub Repo Stars](https://img.shields.io/github/stars/awslabs/autogluon) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/autogluon)](https://github.com/awslabs/autogluon): AutoML for Image, Text, Tabular, Time-Series, and MultiModal Data.
* [PyBroker ![GitHub Repo Stars](https://img.shields.io/github/stars/edtechre/pybroker) ![GitHub last commit](https://img.shields.io/github/last-commit/edtechre/pybroker)](https://github.com/edtechre/pybroker) - Algorithmic Trading with Machine Learning.
* [Frouros ![GitHub Repo Stars](https://img.shields.io/github/stars/IFCA/frouros) ![GitHub last commit](https://img.shields.io/github/last-commit/IFCA/frouros)](https://github.com/IFCA/frouros): Frouros is an open source Python library for drift detection in machine learning systems.
* [CometML ![GitHub Repo Stars](https://img.shields.io/github/stars/comet-ml/comet-examples) ![GitHub last commit](https://img.shields.io/github/last-commit/comet-ml/comet-examples)](https://github.com/comet-ml/comet-examples): The best-in-class MLOps platform with experiment tracking, model production monitoring, a model registry, and data lineage from training straight through to production.


<a name="python-data-analysis--data-visualization"></a>
#### Data Analysis / Data Visualization
* [DataVisualization ![GitHub Repo Stars](https://img.shields.io/github/stars/Shanky-21/Data_visualization) ![GitHub last commit](https://img.shields.io/github/last-commit/Shanky-21/Data_visualization)](https://github.com/Shanky-21/Data_visualization) - A GitHub Repository Where you can Learn Datavisualizatoin Basics to Intermediate level.
* [Cartopy](https://scitools.org.uk/cartopy/docs/latest/) - Cartopy is a Python package designed for geospatial data processing in order to produce maps and other geospatial data analyses.
* [SciPy](https://www.scipy.org/) - A Python-based ecosystem of open-source software for mathematics, science, and engineering.
* [NumPy](https://www.numpy.org/) - A fundamental package for scientific computing with Python.
* [AutoViz ![GitHub Repo Stars](https://img.shields.io/github/stars/AutoViML/AutoViz) ![GitHub last commit](https://img.shields.io/github/last-commit/AutoViML/AutoViz)](https://github.com/AutoViML/AutoViz) AutoViz performs automatic visualization of any dataset with a single line of Python code. Give it any input file (CSV, txt or JSON) of any size and AutoViz will visualize it. See <a href="https://towardsdatascience.com/autoviz-a-new-tool-for-automated-visualization-ec9c1744a6ad?source=friends_link&sk=c9e9503ec424b191c6096d7e3f515d10">Medium article</a>.
* [Numba](https://numba.pydata.org/) - Python JIT (just in time) compiler to LLVM aimed at scientific Python by the developers of Cython and NumPy.
* [Mars ![GitHub Repo Stars](https://img.shields.io/github/stars/mars-project/mars) ![GitHub last commit](https://img.shields.io/github/last-commit/mars-project/mars)](https://github.com/mars-project/mars) - A tensor-based framework for large-scale data computation which is often regarded as a parallel and distributed version of NumPy.
* [NetworkX](https://networkx.github.io/) - A high-productivity software for complex networks.
* [igraph](https://igraph.org/python/) - binding to igraph library - General purpose graph library.
* [Pandas](https://pandas.pydata.org/) - A library providing high-performance, easy-to-use data structures and data analysis tools.
* [ParaMonte ![GitHub Repo Stars](https://img.shields.io/github/stars/cdslaborg/paramonte) ![GitHub last commit](https://img.shields.io/github/last-commit/cdslaborg/paramonte)](https://github.com/cdslaborg/paramonte) - A general-purpose Python library for Bayesian data analysis and visualization via serial/parallel Monte Carlo and MCMC simulations. Documentation can be found [here](https://www.cdslab.org/paramonte/).
* [Vaex ![GitHub Repo Stars](https://img.shields.io/github/stars/vaexio/vaex) ![GitHub last commit](https://img.shields.io/github/last-commit/vaexio/vaex)](https://github.com/vaexio/vaex) - A high performance Python library for lazy Out-of-Core DataFrames (similar to Pandas), to visualize and explore big tabular datasets. Documentation can be found [here](https://vaex.io/docs/index.html).
* [Open Mining ![GitHub Repo Stars](https://img.shields.io/github/stars/mining/mining) ![GitHub last commit](https://img.shields.io/github/last-commit/mining/mining)](https://github.com/mining/mining) - Business Intelligence (BI) in Python (Pandas web interface) **[Deprecated]**
* [PyMC ![GitHub Repo Stars](https://img.shields.io/github/stars/pymc-devs/pymc) ![GitHub last commit](https://img.shields.io/github/last-commit/pymc-devs/pymc)](https://github.com/pymc-devs/pymc) - Markov Chain Monte Carlo sampling toolkit.
* [zipline ![GitHub Repo Stars](https://img.shields.io/github/stars/quantopian/zipline) ![GitHub last commit](https://img.shields.io/github/last-commit/quantopian/zipline)](https://github.com/quantopian/zipline) - A Pythonic algorithmic trading library.
* [PyDy](https://www.pydy.org/) - Short for Python Dynamics, used to assist with workflow in the modelling of dynamic motion based around NumPy, SciPy, IPython, and matplotlib.
* [SymPy ![GitHub Repo Stars](https://img.shields.io/github/stars/sympy/sympy) ![GitHub last commit](https://img.shields.io/github/last-commit/sympy/sympy)](https://github.com/sympy/sympy) - A Python library for symbolic mathematics.
* [statsmodels ![GitHub Repo Stars](https://img.shields.io/github/stars/statsmodels/statsmodels) ![GitHub last commit](https://img.shields.io/github/last-commit/statsmodels/statsmodels)](https://github.com/statsmodels/statsmodels) - Statistical modelling and econometrics in Python.
* [astropy](https://www.astropy.org/) - A community Python library for Astronomy.
* [matplotlib](https://matplotlib.org/) - A Python 2D plotting library.
* [bokeh ![GitHub Repo Stars](https://img.shields.io/github/stars/bokeh/bokeh) ![GitHub last commit](https://img.shields.io/github/last-commit/bokeh/bokeh)](https://github.com/bokeh/bokeh) - Interactive Web Plotting for Python.
* [plotly](https://plot.ly/python/) - Collaborative web plotting for Python and matplotlib.
* [altair ![GitHub Repo Stars](https://img.shields.io/github/stars/altair-viz/altair) ![GitHub last commit](https://img.shields.io/github/last-commit/altair-viz/altair)](https://github.com/altair-viz/altair) - A Python to Vega translator.
* [d3py ![GitHub Repo Stars](https://img.shields.io/github/stars/mikedewar/d3py) ![GitHub last commit](https://img.shields.io/github/last-commit/mikedewar/d3py)](https://github.com/mikedewar/d3py) - A plotting library for Python, based on [D3.js](https://d3js.org/).
* [PyDexter ![GitHub Repo Stars](https://img.shields.io/github/stars/D3xterjs/pydexter) ![GitHub last commit](https://img.shields.io/github/last-commit/D3xterjs/pydexter)](https://github.com/D3xterjs/pydexter) - Simple plotting for Python. Wrapper for D3xterjs; easily render charts in-browser.
* [ggplot ![GitHub Repo Stars](https://img.shields.io/github/stars/yhat/ggpy) ![GitHub last commit](https://img.shields.io/github/last-commit/yhat/ggpy)](https://github.com/yhat/ggpy) - Same API as ggplot2 for R. **[Deprecated]**
* [ggfortify ![GitHub Repo Stars](https://img.shields.io/github/stars/sinhrks/ggfortify) ![GitHub last commit](https://img.shields.io/github/last-commit/sinhrks/ggfortify)](https://github.com/sinhrks/ggfortify) - Unified interface to ggplot2 popular R packages.
* [Kartograph.py ![GitHub Repo Stars](https://img.shields.io/github/stars/kartograph/kartograph.py) ![GitHub last commit](https://img.shields.io/github/last-commit/kartograph/kartograph.py)](https://github.com/kartograph/kartograph.py) - Rendering beautiful SVG maps in Python.
* [pygal](http://pygal.org/en/stable/) - A Python SVG Charts Creator.
* [PyQtGraph ![GitHub Repo Stars](https://img.shields.io/github/stars/pyqtgraph/pyqtgraph) ![GitHub last commit](https://img.shields.io/github/last-commit/pyqtgraph/pyqtgraph)](https://github.com/pyqtgraph/pyqtgraph) - A pure-python graphics and GUI library built on PyQt4 / PySide and NumPy.
* [pycascading ![GitHub Repo Stars](https://img.shields.io/github/stars/twitter/pycascading) ![GitHub last commit](https://img.shields.io/github/last-commit/twitter/pycascading)](https://github.com/twitter/pycascading) **[Deprecated]**
* [Petrel ![GitHub Repo Stars](https://img.shields.io/github/stars/AirSage/Petrel) ![GitHub last commit](https://img.shields.io/github/last-commit/AirSage/Petrel)](https://github.com/AirSage/Petrel) - Tools for writing, submitting, debugging, and monitoring Storm topologies in pure Python.
* [Blaze ![GitHub Repo Stars](https://img.shields.io/github/stars/blaze/blaze) ![GitHub last commit](https://img.shields.io/github/last-commit/blaze/blaze)](https://github.com/blaze/blaze) - NumPy and Pandas interface to Big Data.
* [emcee ![GitHub Repo Stars](https://img.shields.io/github/stars/dfm/emcee) ![GitHub last commit](https://img.shields.io/github/last-commit/dfm/emcee)](https://github.com/dfm/emcee) - The Python ensemble sampling toolkit for affine-invariant MCMC.
* [windML ![GitHub Repo Stars](https://img.shields.io/github/stars/cigroup-ol/windml) ![GitHub last commit](https://img.shields.io/github/last-commit/cigroup-ol/windml)](https://github.com/cigroup-ol/windml) - A Python Framework for Wind Energy Analysis and Prediction.
* [vispy ![GitHub Repo Stars](https://img.shields.io/github/stars/vispy/vispy) ![GitHub last commit](https://img.shields.io/github/last-commit/vispy/vispy)](https://github.com/vispy/vispy) - GPU-based high-performance interactive OpenGL 2D/3D data visualization library.
* [cerebro2 ![GitHub Repo Stars](https://img.shields.io/github/stars/numenta/nupic.cerebro2) ![GitHub last commit](https://img.shields.io/github/last-commit/numenta/nupic.cerebro2)](https://github.com/numenta/nupic.cerebro2) A web-based visualization and debugging platform for NuPIC. **[Deprecated]**
* [NuPIC Studio ![GitHub Repo Stars](https://img.shields.io/github/stars/htm-community/nupic.studio) ![GitHub last commit](https://img.shields.io/github/last-commit/htm-community/nupic.studio)](https://github.com/htm-community/nupic.studio) An all-in-one NuPIC Hierarchical Temporal Memory visualization and debugging super-tool! **[Deprecated]**
* [SparklingPandas ![GitHub Repo Stars](https://img.shields.io/github/stars/sparklingpandas/sparklingpandas) ![GitHub last commit](https://img.shields.io/github/last-commit/sparklingpandas/sparklingpandas)](https://github.com/sparklingpandas/sparklingpandas) Pandas on PySpark (POPS).
* [Seaborn](https://seaborn.pydata.org/) - A python visualization library based on matplotlib.
* [ipychart ![GitHub Repo Stars](https://img.shields.io/github/stars/nicohlr/ipychart) ![GitHub last commit](https://img.shields.io/github/last-commit/nicohlr/ipychart)](https://github.com/nicohlr/ipychart) - The power of Chart.js in Jupyter Notebook.
* [bqplot ![GitHub Repo Stars](https://img.shields.io/github/stars/bloomberg/bqplot) ![GitHub last commit](https://img.shields.io/github/last-commit/bloomberg/bqplot)](https://github.com/bloomberg/bqplot) - An API for plotting in Jupyter (IPython).
* [pastalog ![GitHub Repo Stars](https://img.shields.io/github/stars/rewonc/pastalog) ![GitHub last commit](https://img.shields.io/github/last-commit/rewonc/pastalog)](https://github.com/rewonc/pastalog) - Simple, realtime visualization of neural network training performance.
* [Superset ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/incubator-superset) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/incubator-superset)](https://github.com/apache/incubator-superset) - A data exploration platform designed to be visual, intuitive, and interactive.
* [Dora ![GitHub Repo Stars](https://img.shields.io/github/stars/nathanepstein/dora) ![GitHub last commit](https://img.shields.io/github/last-commit/nathanepstein/dora)](https://github.com/nathanepstein/dora) - Tools for exploratory data analysis in Python.
* [Ruffus](http://www.ruffus.org.uk) - Computation Pipeline library for python.
* [SOMPY ![GitHub Repo Stars](https://img.shields.io/github/stars/sevamoo/SOMPY) ![GitHub last commit](https://img.shields.io/github/last-commit/sevamoo/SOMPY)](https://github.com/sevamoo/SOMPY) - Self Organizing Map written in Python (Uses neural networks for data analysis).
* [somoclu ![GitHub Repo Stars](https://img.shields.io/github/stars/peterwittek/somoclu) ![GitHub last commit](https://img.shields.io/github/last-commit/peterwittek/somoclu)](https://github.com/peterwittek/somoclu) Massively parallel self-organizing maps: accelerate training on multicore CPUs, GPUs, and clusters, has python API.
* [HDBScan ![GitHub Repo Stars](https://img.shields.io/github/stars/lmcinnes/hdbscan) ![GitHub last commit](https://img.shields.io/github/last-commit/lmcinnes/hdbscan)](https://github.com/lmcinnes/hdbscan) - implementation of the hdbscan algorithm in Python - used for clustering
* [visualize_ML ![GitHub Repo Stars](https://img.shields.io/github/stars/ayush1997/visualize_ML) ![GitHub last commit](https://img.shields.io/github/last-commit/ayush1997/visualize_ML)](https://github.com/ayush1997/visualize_ML) - A python package for data exploration and data analysis. **[Deprecated]**
* [scikit-plot ![GitHub Repo Stars](https://img.shields.io/github/stars/reiinakano/scikit-plot) ![GitHub last commit](https://img.shields.io/github/last-commit/reiinakano/scikit-plot)](https://github.com/reiinakano/scikit-plot) - A visualization library for quick and easy generation of common plots in data analysis and machine learning.
* [Bowtie ![GitHub Repo Stars](https://img.shields.io/github/stars/jwkvam/bowtie) ![GitHub last commit](https://img.shields.io/github/last-commit/jwkvam/bowtie)](https://github.com/jwkvam/bowtie) - A dashboard library for interactive visualizations using flask socketio and react.
* [lime ![GitHub Repo Stars](https://img.shields.io/github/stars/marcotcr/lime) ![GitHub last commit](https://img.shields.io/github/last-commit/marcotcr/lime)](https://github.com/marcotcr/lime) - Lime is about explaining what machine learning classifiers (or models) are doing. It is able to explain any black box classifier, with two or more classes.
* [PyCM ![GitHub Repo Stars](https://img.shields.io/github/stars/sepandhaghighi/pycm) ![GitHub last commit](https://img.shields.io/github/last-commit/sepandhaghighi/pycm)](https://github.com/sepandhaghighi/pycm) - PyCM is a multi-class confusion matrix library written in Python that supports both input data vectors and direct matrix, and a proper tool for post-classification model evaluation that supports most classes and overall statistics parameters
* [Dash ![GitHub Repo Stars](https://img.shields.io/github/stars/plotly/dash) ![GitHub last commit](https://img.shields.io/github/last-commit/plotly/dash)](https://github.com/plotly/dash) - A framework for creating analytical web applications built on top of Plotly.js, React, and Flask
* [Lambdo ![GitHub Repo Stars](https://img.shields.io/github/stars/asavinov/lambdo) ![GitHub last commit](https://img.shields.io/github/last-commit/asavinov/lambdo)](https://github.com/asavinov/lambdo) - A workflow engine for solving machine learning problems by combining in one analysis pipeline (i) feature engineering and machine learning (ii) model training and prediction (iii) table population and column evaluation via user-defined (Python) functions.
* [TensorWatch ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/tensorwatch) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/tensorwatch)](https://github.com/microsoft/tensorwatch) - Debugging and visualization tool for machine learning and data science. It extensively leverages Jupyter Notebook to show real-time visualizations of data in running processes such as machine learning training.
* [dowel ![GitHub Repo Stars](https://img.shields.io/github/stars/rlworkgroup/dowel) ![GitHub last commit](https://img.shields.io/github/last-commit/rlworkgroup/dowel)](https://github.com/rlworkgroup/dowel) - A little logger for machine learning research. Output any object to the terminal, CSV, TensorBoard, text logs on disk, and more with just one call to `logger.log()`.

<a name="python-misc-scripts--ipython-notebooks--codebases"></a>
#### Misc Scripts / iPython Notebooks / Codebases
* [MiniGrad ![GitHub Repo Stars](https://img.shields.io/github/stars/kennysong/minigrad) ![GitHub last commit](https://img.shields.io/github/last-commit/kennysong/minigrad)](https://github.com/kennysong/minigrad) – A minimal, educational, Pythonic implementation of autograd (~100 loc).
* [Map/Reduce implementations of common ML algorithms ![GitHub Repo Stars](https://img.shields.io/github/stars/Yannael/BigDataAnalytics_INFOH515) ![GitHub last commit](https://img.shields.io/github/last-commit/Yannael/BigDataAnalytics_INFOH515)](https://github.com/Yannael/BigDataAnalytics_INFOH515): Jupyter notebooks that cover how to implement from scratch different ML algorithms (ordinary least squares, gradient descent, k-means, alternating least squares), using Python NumPy, and how to then make these implementations scalable using Map/Reduce and Spark.
* [BioPy ![GitHub Repo Stars](https://img.shields.io/github/stars/jaredthecoder/BioPy) ![GitHub last commit](https://img.shields.io/github/last-commit/jaredthecoder/BioPy)](https://github.com/jaredthecoder/BioPy) - Biologically-Inspired and Machine Learning Algorithms in Python. **[Deprecated]**
* [CAEs for Data Assimilation ![GitHub Repo Stars](https://img.shields.io/github/stars/julianmack/Data_Assimilation) ![GitHub last commit](https://img.shields.io/github/last-commit/julianmack/Data_Assimilation)](https://github.com/julianmack/Data_Assimilation) - Convolutional autoencoders for 3D image/field compression applied to reduced order [Data Assimilation](https://en.wikipedia.org/wiki/Data_assimilation).
* [handsonml ![GitHub Repo Stars](https://img.shields.io/github/stars/ageron/handson-ml) ![GitHub last commit](https://img.shields.io/github/last-commit/ageron/handson-ml)](https://github.com/ageron/handson-ml) - Fundamentals of machine learning in python.
* [SVM Explorer ![GitHub Repo Stars](https://img.shields.io/github/stars/plotly/dash-svm) ![GitHub last commit](https://img.shields.io/github/last-commit/plotly/dash-svm)](https://github.com/plotly/dash-svm) - Interactive SVM Explorer, using Dash and scikit-learn
* [pattern_classification ![GitHub Repo Stars](https://img.shields.io/github/stars/rasbt/pattern_classification) ![GitHub last commit](https://img.shields.io/github/last-commit/rasbt/pattern_classification)](https://github.com/rasbt/pattern_classification)
* [thinking stats 2 ![GitHub Repo Stars](https://img.shields.io/github/stars/Wavelets/ThinkStats2) ![GitHub last commit](https://img.shields.io/github/last-commit/Wavelets/ThinkStats2)](https://github.com/Wavelets/ThinkStats2)
* [hyperopt ![GitHub Repo Stars](https://img.shields.io/github/stars/hyperopt/hyperopt-sklearn) ![GitHub last commit](https://img.shields.io/github/last-commit/hyperopt/hyperopt-sklearn)](https://github.com/hyperopt/hyperopt-sklearn)
* [numpic ![GitHub Repo Stars](https://img.shields.io/github/stars/numenta/nupic) ![GitHub last commit](https://img.shields.io/github/last-commit/numenta/nupic)](https://github.com/numenta/nupic)
* [2012-paper-diginorm ![GitHub Repo Stars](https://img.shields.io/github/stars/dib-lab/2012-paper-diginorm) ![GitHub last commit](https://img.shields.io/github/last-commit/dib-lab/2012-paper-diginorm)](https://github.com/dib-lab/2012-paper-diginorm)
* [A gallery of interesting IPython notebooks ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyter/jupyter) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyter/jupyter)](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)
* [ipython-notebooks ![GitHub Repo Stars](https://img.shields.io/github/stars/ogrisel/notebooks) ![GitHub last commit](https://img.shields.io/github/last-commit/ogrisel/notebooks)](https://github.com/ogrisel/notebooks)
* [data-science-ipython-notebooks ![GitHub Repo Stars](https://img.shields.io/github/stars/donnemartin/data-science-ipython-notebooks) ![GitHub last commit](https://img.shields.io/github/last-commit/donnemartin/data-science-ipython-notebooks)](https://github.com/donnemartin/data-science-ipython-notebooks) - Continually updated Data Science Python Notebooks: Spark, Hadoop MapReduce, HDFS, AWS, Kaggle, scikit-learn, matplotlib, pandas, NumPy, SciPy, and various command lines.
* [decision-weights ![GitHub Repo Stars](https://img.shields.io/github/stars/CamDavidsonPilon/decision-weights) ![GitHub last commit](https://img.shields.io/github/last-commit/CamDavidsonPilon/decision-weights)](https://github.com/CamDavidsonPilon/decision-weights)
* [Sarah Palin LDA ![GitHub Repo Stars](https://img.shields.io/github/stars/Wavelets/sarah-palin-lda) ![GitHub last commit](https://img.shields.io/github/last-commit/Wavelets/sarah-palin-lda)](https://github.com/Wavelets/sarah-palin-lda) - Topic Modelling the Sarah Palin emails.
* [Diffusion Segmentation ![GitHub Repo Stars](https://img.shields.io/github/stars/Wavelets/diffusion-segmentation) ![GitHub last commit](https://img.shields.io/github/last-commit/Wavelets/diffusion-segmentation)](https://github.com/Wavelets/diffusion-segmentation) - A collection of image segmentation algorithms based on diffusion methods.
* [Scipy Tutorials ![GitHub Repo Stars](https://img.shields.io/github/stars/Wavelets/scipy-tutorials) ![GitHub last commit](https://img.shields.io/github/last-commit/Wavelets/scipy-tutorials)](https://github.com/Wavelets/scipy-tutorials) - SciPy tutorials. This is outdated, check out scipy-lecture-notes.
* [Crab ![GitHub Repo Stars](https://img.shields.io/github/stars/marcelcaraciolo/crab) ![GitHub last commit](https://img.shields.io/github/last-commit/marcelcaraciolo/crab)](https://github.com/marcelcaraciolo/crab) - A recommendation engine library for Python.
* [BayesPy ![GitHub Repo Stars](https://img.shields.io/github/stars/maxsklar/BayesPy) ![GitHub last commit](https://img.shields.io/github/last-commit/maxsklar/BayesPy)](https://github.com/maxsklar/BayesPy) - Bayesian Inference Tools in Python.
* [scikit-learn tutorials ![GitHub Repo Stars](https://img.shields.io/github/stars/GaelVaroquaux/scikit-learn-tutorial) ![GitHub last commit](https://img.shields.io/github/last-commit/GaelVaroquaux/scikit-learn-tutorial)](https://github.com/GaelVaroquaux/scikit-learn-tutorial) - Series of notebooks for learning scikit-learn.
* [sentiment-analyzer ![GitHub Repo Stars](https://img.shields.io/github/stars/madhusudancs/sentiment-analyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/madhusudancs/sentiment-analyzer)](https://github.com/madhusudancs/sentiment-analyzer) - Tweets Sentiment Analyzer
* [sentiment_classifier ![GitHub Repo Stars](https://img.shields.io/github/stars/kevincobain2000/sentiment_classifier) ![GitHub last commit](https://img.shields.io/github/last-commit/kevincobain2000/sentiment_classifier)](https://github.com/kevincobain2000/sentiment_classifier) - Sentiment classifier using word sense disambiguation.
* [group-lasso ![GitHub Repo Stars](https://img.shields.io/github/stars/fabianp/group_lasso) ![GitHub last commit](https://img.shields.io/github/last-commit/fabianp/group_lasso)](https://github.com/fabianp/group_lasso) - Some experiments with the coordinate descent algorithm used in the (Sparse) Group Lasso model.
* [jProcessing ![GitHub Repo Stars](https://img.shields.io/github/stars/kevincobain2000/jProcessing) ![GitHub last commit](https://img.shields.io/github/last-commit/kevincobain2000/jProcessing)](https://github.com/kevincobain2000/jProcessing) - Kanji / Hiragana / Katakana to Romaji Converter. Edict Dictionary & parallel sentences Search. Sentence Similarity between two JP Sentences. Sentiment Analysis of Japanese Text. Run Cabocha(ISO--8859-1 configured) in Python.
* [mne-python-notebooks ![GitHub Repo Stars](https://img.shields.io/github/stars/mne-tools/mne-python-notebooks) ![GitHub last commit](https://img.shields.io/github/last-commit/mne-tools/mne-python-notebooks)](https://github.com/mne-tools/mne-python-notebooks) - IPython notebooks for EEG/MEG data processing using mne-python.
* [Neon Course ![GitHub Repo Stars](https://img.shields.io/github/stars/NervanaSystems/neon_course) ![GitHub last commit](https://img.shields.io/github/last-commit/NervanaSystems/neon_course)](https://github.com/NervanaSystems/neon_course) - IPython notebooks for a complete course around understanding Nervana's Neon.
* [pandas cookbook ![GitHub Repo Stars](https://img.shields.io/github/stars/jvns/pandas-cookbook) ![GitHub last commit](https://img.shields.io/github/last-commit/jvns/pandas-cookbook)](https://github.com/jvns/pandas-cookbook) - Recipes for using Python's pandas library.
* [climin ![GitHub Repo Stars](https://img.shields.io/github/stars/BRML/climin) ![GitHub last commit](https://img.shields.io/github/last-commit/BRML/climin)](https://github.com/BRML/climin) - Optimization library focused on machine learning, pythonic implementations of gradient descent, LBFGS, rmsprop, adadelta and others.
* [Allen Downey’s Data Science Course ![GitHub Repo Stars](https://img.shields.io/github/stars/AllenDowney/DataScience) ![GitHub last commit](https://img.shields.io/github/last-commit/AllenDowney/DataScience)](https://github.com/AllenDowney/DataScience) - Code for Data Science at Olin College, Spring 2014.
* [Allen Downey’s Think Bayes Code ![GitHub Repo Stars](https://img.shields.io/github/stars/AllenDowney/ThinkBayes) ![GitHub last commit](https://img.shields.io/github/last-commit/AllenDowney/ThinkBayes)](https://github.com/AllenDowney/ThinkBayes) - Code repository for Think Bayes.
* [Allen Downey’s Think Complexity Code ![GitHub Repo Stars](https://img.shields.io/github/stars/AllenDowney/ThinkComplexity) ![GitHub last commit](https://img.shields.io/github/last-commit/AllenDowney/ThinkComplexity)](https://github.com/AllenDowney/ThinkComplexity) - Code for Allen Downey's book Think Complexity.
* [Allen Downey’s Think OS Code ![GitHub Repo Stars](https://img.shields.io/github/stars/AllenDowney/ThinkOS) ![GitHub last commit](https://img.shields.io/github/last-commit/AllenDowney/ThinkOS)](https://github.com/AllenDowney/ThinkOS) - Text and supporting code for Think OS: A Brief Introduction to Operating Systems.
* [Python Programming for the Humanities](https://www.karsdorp.io/python-course/) - Course for Python programming for the Humanities, assuming no prior knowledge. Heavy focus on text processing / NLP.
* [GreatCircle ![GitHub Repo Stars](https://img.shields.io/github/stars/mwgg/GreatCircle) ![GitHub last commit](https://img.shields.io/github/last-commit/mwgg/GreatCircle)](https://github.com/mwgg/GreatCircle) - Library for calculating great circle distance.
* [Optunity examples](http://optunity.readthedocs.io/en/latest/notebooks/index.html) - Examples demonstrating how to use Optunity in synergy with machine learning libraries.
* [Dive into Machine Learning  with Python Jupyter notebook and scikit-learn ![GitHub Repo Stars](https://img.shields.io/github/stars/hangtwenty/dive-into-machine-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/hangtwenty/dive-into-machine-learning)](https://github.com/hangtwenty/dive-into-machine-learning) - "I learned Python by hacking first, and getting serious *later.* I wanted to do this with Machine Learning. If this is your style, join me in getting a bit ahead of yourself."
* [TDB ![GitHub Repo Stars](https://img.shields.io/github/stars/ericjang/tdb) ![GitHub last commit](https://img.shields.io/github/last-commit/ericjang/tdb)](https://github.com/ericjang/tdb) - TensorDebugger (TDB) is a visual debugger for deep learning. It features interactive, node-by-node debugging and visualization for TensorFlow.
* [Suiron ![GitHub Repo Stars](https://img.shields.io/github/stars/kendricktan/suiron) ![GitHub last commit](https://img.shields.io/github/last-commit/kendricktan/suiron)](https://github.com/kendricktan/suiron/) - Machine Learning for RC Cars.
* [Introduction to machine learning with scikit-learn ![GitHub Repo Stars](https://img.shields.io/github/stars/justmarkham/scikit-learn-videos) ![GitHub last commit](https://img.shields.io/github/last-commit/justmarkham/scikit-learn-videos)](https://github.com/justmarkham/scikit-learn-videos) - IPython notebooks from Data School's video tutorials on scikit-learn.
* [Practical XGBoost in Python](https://parrotprediction.teachable.com/p/practical-xgboost-in-python) - comprehensive online course about using XGBoost in Python.
* [Introduction to Machine Learning with Python ![GitHub Repo Stars](https://img.shields.io/github/stars/amueller/introduction_to_ml_with_python) ![GitHub last commit](https://img.shields.io/github/last-commit/amueller/introduction_to_ml_with_python)](https://github.com/amueller/introduction_to_ml_with_python) - Notebooks and code for the book "Introduction to Machine Learning with Python"
* [Pydata book ![GitHub Repo Stars](https://img.shields.io/github/stars/wesm/pydata-book) ![GitHub last commit](https://img.shields.io/github/last-commit/wesm/pydata-book)](https://github.com/wesm/pydata-book) - Materials and IPython notebooks for "Python for Data Analysis" by Wes McKinney, published by O'Reilly Media
* [Homemade Machine Learning ![GitHub Repo Stars](https://img.shields.io/github/stars/trekhleb/homemade-machine-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/trekhleb/homemade-machine-learning)](https://github.com/trekhleb/homemade-machine-learning) - Python examples of popular machine learning algorithms with interactive Jupyter demos and math being explained
* [Prodmodel ![GitHub Repo Stars](https://img.shields.io/github/stars/prodmodel/prodmodel) ![GitHub last commit](https://img.shields.io/github/last-commit/prodmodel/prodmodel)](https://github.com/prodmodel/prodmodel) - Build tool for data science pipelines.
* [the-elements-of-statistical-learning ![GitHub Repo Stars](https://img.shields.io/github/stars/maitbayev/the-elements-of-statistical-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/maitbayev/the-elements-of-statistical-learning)](https://github.com/maitbayev/the-elements-of-statistical-learning) - This repository contains Jupyter notebooks implementing the algorithms found in the book and summary of the textbook.
* [Hyperparameter-Optimization-of-Machine-Learning-Algorithms ![GitHub Repo Stars](https://img.shields.io/github/stars/LiYangHart/Hyperparameter-Optimization-of-Machine-Learning-Algorithms) ![GitHub last commit](https://img.shields.io/github/last-commit/LiYangHart/Hyperparameter-Optimization-of-Machine-Learning-Algorithms)](https://github.com/LiYangHart/Hyperparameter-Optimization-of-Machine-Learning-Algorithms) - Code for hyperparameter tuning/optimization of machine learning and deep learning algorithms.
* [Heart_Disease-Prediction ![GitHub Repo Stars](https://img.shields.io/github/stars/ShivamChoudhary17/Heart_Disease) ![GitHub last commit](https://img.shields.io/github/last-commit/ShivamChoudhary17/Heart_Disease)](https://github.com/ShivamChoudhary17/Heart_Disease) - Given clinical parameters about a patient, can we predict whether or not they have heart disease?
* [Flight Fare Prediction ![GitHub Repo Stars](https://img.shields.io/github/stars/ShivamChoudhary17/Flight_Fare_Prediction) ![GitHub last commit](https://img.shields.io/github/last-commit/ShivamChoudhary17/Flight_Fare_Prediction)](https://github.com/ShivamChoudhary17/Flight_Fare_Prediction) - This basically to gauge the understanding of Machine Learning Workflow and Regression technique in specific.
* [Keras Tuner ![GitHub Repo Stars](https://img.shields.io/github/stars/keras-team/keras-tuner) ![GitHub last commit](https://img.shields.io/github/last-commit/keras-team/keras-tuner)](https://github.com/keras-team/keras-tuner) - An easy-to-use, scalable hyperparameter optimization framework that solves the pain points of hyperparameter search.



<a name="python-neural-networks"></a>
#### Neural Networks

* [nn_builder ![GitHub Repo Stars](https://img.shields.io/github/stars/p-christ/nn_builder) ![GitHub last commit](https://img.shields.io/github/last-commit/p-christ/nn_builder)](https://github.com/p-christ/nn_builder) - nn_builder is a python package that lets you build neural networks in 1 line
* [NeuralTalk ![GitHub Repo Stars](https://img.shields.io/github/stars/karpathy/neuraltalk) ![GitHub last commit](https://img.shields.io/github/last-commit/karpathy/neuraltalk)](https://github.com/karpathy/neuraltalk) - NeuralTalk is a Python+numpy project for learning Multimodal Recurrent Neural Networks that describe images with sentences.
* [Neuron ![GitHub Repo Stars](https://img.shields.io/github/stars/molcik/python-neuron) ![GitHub last commit](https://img.shields.io/github/last-commit/molcik/python-neuron)](https://github.com/molcik/python-neuron) - Neuron is simple class for time series predictions. It's utilize LNU (Linear Neural Unit), QNU (Quadratic Neural Unit), RBF (Radial Basis Function), MLP (Multi Layer Perceptron), MLP-ELM (Multi Layer Perceptron - Extreme Learning Machine) neural networks learned with Gradient descent or LeLevenberg–Marquardt algorithm.

* [NeuralTalk ![GitHub Repo Stars](https://img.shields.io/github/stars/karpathy/neuraltalk2) ![GitHub last commit](https://img.shields.io/github/last-commit/karpathy/neuraltalk2)](https://github.com/karpathy/neuraltalk2) - NeuralTalk is a Python+numpy project for learning Multimodal Recurrent Neural Networks that describe images with sentences. **[Deprecated]**
* [Neuron ![GitHub Repo Stars](https://img.shields.io/github/stars/molcik/python-neuron) ![GitHub last commit](https://img.shields.io/github/last-commit/molcik/python-neuron)](https://github.com/molcik/python-neuron) - Neuron is simple class for time series predictions. It's utilize LNU (Linear Neural Unit), QNU (Quadratic Neural Unit), RBF (Radial Basis Function), MLP (Multi Layer Perceptron), MLP-ELM (Multi Layer Perceptron - Extreme Learning Machine) neural networks learned with Gradient descent or LeLevenberg–Marquardt algorithm. **[Deprecated]**
* [Data Driven Code ![GitHub Repo Stars](https://img.shields.io/github/stars/atmb4u/data-driven-code) ![GitHub last commit](https://img.shields.io/github/last-commit/atmb4u/data-driven-code)](https://github.com/atmb4u/data-driven-code) - Very simple implementation of neural networks for dummies in python without using any libraries, with detailed comments.
* [Machine Learning, Data Science and Deep Learning with Python](https://www.manning.com/livevideo/machine-learning-data-science-and-deep-learning-with-python) - LiveVideo course that covers machine learning, Tensorflow, artificial intelligence, and neural networks.
* [TResNet: High Performance GPU-Dedicated Architecture ![GitHub Repo Stars](https://img.shields.io/github/stars/mrT23/TResNet) ![GitHub last commit](https://img.shields.io/github/last-commit/mrT23/TResNet)](https://github.com/mrT23/TResNet) - TResNet models were designed and optimized to give the best speed-accuracy tradeoff out there on GPUs.
* [TResNet: Simple and powerful neural network library for python ![GitHub Repo Stars](https://img.shields.io/github/stars/zueve/neurolab) ![GitHub last commit](https://img.shields.io/github/last-commit/zueve/neurolab)](https://github.com/zueve/neurolab) - Variety of supported types of Artificial Neural Network and learning algorithms.
* [Jina AI](https://jina.ai/) An easier way to build neural search in the cloud. Compatible with Jupyter Notebooks.
* [sequitur ![GitHub Repo Stars](https://img.shields.io/github/stars/shobrook/sequitur) ![GitHub last commit](https://img.shields.io/github/last-commit/shobrook/sequitur)](https://github.com/shobrook/sequitur) PyTorch library for creating and training sequence autoencoders in just two lines of code


<a name="python-spiking-neural-networks"></a>
#### Spiking Neural Networks

* [Rockpool ![GitHub Repo Stars](https://img.shields.io/github/stars/synsense/rockpool) ![GitHub last commit](https://img.shields.io/github/last-commit/synsense/rockpool)](https://github.com/synsense/rockpool) - A machine learning library for spiking neural networks. Supports training with both torch and jax pipelines, and deployment to neuromorphic hardware.
* [Sinabs ![GitHub Repo Stars](https://img.shields.io/github/stars/synsense/sinabs) ![GitHub last commit](https://img.shields.io/github/last-commit/synsense/sinabs)](https://github.com/synsense/sinabs) - A deep learning library for spiking neural networks which is based on PyTorch, focuses on fast training and supports inference on neuromorphic hardware.
* [Tonic ![GitHub Repo Stars](https://img.shields.io/github/stars/neuromorphs/tonic) ![GitHub last commit](https://img.shields.io/github/last-commit/neuromorphs/tonic)](https://github.com/neuromorphs/tonic) - A library that makes downloading publicly available neuromorphic datasets a breeze and provides event-based data transformation/augmentation pipelines.

<a name="python-survival-analysis"></a>
#### Python Survival Analysis
* [lifelines ![GitHub Repo Stars](https://img.shields.io/github/stars/CamDavidsonPilon/lifelines) ![GitHub last commit](https://img.shields.io/github/last-commit/CamDavidsonPilon/lifelines)](https://github.com/CamDavidsonPilon/lifelines) - lifelines is a complete survival analysis library, written in pure Python
* [Scikit-Survival ![GitHub Repo Stars](https://img.shields.io/github/stars/sebp/scikit-survival) ![GitHub last commit](https://img.shields.io/github/last-commit/sebp/scikit-survival)](https://github.com/sebp/scikit-survival) - scikit-survival is a Python module for survival analysis built on top of scikit-learn. It allows doing survival analysis while utilizing the power of scikit-learn, e.g., for pre-processing or doing cross-validation.

<a name="python-federated-learning"></a>
#### Federated Learning
* [Flower](https://flower.dev/) - A unified approach to federated learning, analytics, and evaluation. Federate any workload, any ML framework, and any programming language.
* [PySyft ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenMined/PySyft) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenMined/PySyft)](https://github.com/OpenMined/PySyft) - A Python library for secure and private Deep Learning.
* [Tensorflow-Federated](https://www.tensorflow.org/federated) A federated learning framework for machine learning and other computations on decentralized data.

<a name="python-kaggle-competition-source-code"></a>
#### Kaggle Competition Source Code
* [open-solution-home-credit ![GitHub Repo Stars](https://img.shields.io/github/stars/neptune-ml/open-solution-home-credit) ![GitHub last commit](https://img.shields.io/github/last-commit/neptune-ml/open-solution-home-credit)](https://github.com/neptune-ml/open-solution-home-credit) -> source code and [experiments results](https://app.neptune.ml/neptune-ml/Home-Credit-Default-Risk) for [Home Credit Default Risk](https://www.kaggle.com/c/home-credit-default-risk).
* [open-solution-googleai-object-detection ![GitHub Repo Stars](https://img.shields.io/github/stars/neptune-ml/open-solution-googleai-object-detection) ![GitHub last commit](https://img.shields.io/github/last-commit/neptune-ml/open-solution-googleai-object-detection)](https://github.com/neptune-ml/open-solution-googleai-object-detection) -> source code and [experiments results](https://app.neptune.ml/neptune-ml/Google-AI-Object-Detection-Challenge) for [Google AI Open Images - Object Detection Track](https://www.kaggle.com/c/google-ai-open-images-object-detection-track).
* [open-solution-salt-identification ![GitHub Repo Stars](https://img.shields.io/github/stars/neptune-ml/open-solution-salt-identification) ![GitHub last commit](https://img.shields.io/github/last-commit/neptune-ml/open-solution-salt-identification)](https://github.com/neptune-ml/open-solution-salt-identification) -> source code and [experiments results](https://app.neptune.ml/neptune-ml/Salt-Detection) for [TGS Salt Identification Challenge](https://www.kaggle.com/c/tgs-salt-identification-challenge).
* [open-solution-ship-detection ![GitHub Repo Stars](https://img.shields.io/github/stars/neptune-ml/open-solution-ship-detection) ![GitHub last commit](https://img.shields.io/github/last-commit/neptune-ml/open-solution-ship-detection)](https://github.com/neptune-ml/open-solution-ship-detection) -> source code and [experiments results](https://app.neptune.ml/neptune-ml/Ships) for [Airbus Ship Detection Challenge](https://www.kaggle.com/c/airbus-ship-detection).
* [open-solution-data-science-bowl-2018 ![GitHub Repo Stars](https://img.shields.io/github/stars/neptune-ml/open-solution-data-science-bowl-2018) ![GitHub last commit](https://img.shields.io/github/last-commit/neptune-ml/open-solution-data-science-bowl-2018)](https://github.com/neptune-ml/open-solution-data-science-bowl-2018) -> source code and [experiments results](https://app.neptune.ml/neptune-ml/Data-Science-Bowl-2018) for [2018 Data Science Bowl](https://www.kaggle.com/c/data-science-bowl-2018).
* [open-solution-value-prediction ![GitHub Repo Stars](https://img.shields.io/github/stars/neptune-ml/open-solution-value-prediction) ![GitHub last commit](https://img.shields.io/github/last-commit/neptune-ml/open-solution-value-prediction)](https://github.com/neptune-ml/open-solution-value-prediction) -> source code and [experiments results](https://app.neptune.ml/neptune-ml/Santander-Value-Prediction-Challenge) for [Santander Value Prediction Challenge](https://www.kaggle.com/c/santander-value-prediction-challenge).
* [open-solution-toxic-comments ![GitHub Repo Stars](https://img.shields.io/github/stars/neptune-ml/open-solution-toxic-comments) ![GitHub last commit](https://img.shields.io/github/last-commit/neptune-ml/open-solution-toxic-comments)](https://github.com/neptune-ml/open-solution-toxic-comments) -> source code for [Toxic Comment Classification Challenge](https://www.kaggle.com/c/jigsaw-toxic-comment-classification-challenge).
* [wiki challenge ![GitHub Repo Stars](https://img.shields.io/github/stars/hammer/wikichallenge) ![GitHub last commit](https://img.shields.io/github/last-commit/hammer/wikichallenge)](https://github.com/hammer/wikichallenge) - An implementation of Dell Zhang's solution to Wikipedia's Participation Challenge on Kaggle.
* [kaggle insults ![GitHub Repo Stars](https://img.shields.io/github/stars/amueller/kaggle_insults) ![GitHub last commit](https://img.shields.io/github/last-commit/amueller/kaggle_insults)](https://github.com/amueller/kaggle_insults) - Kaggle Submission for "Detecting Insults in Social Commentary".
* [kaggle_acquire-valued-shoppers-challenge ![GitHub Repo Stars](https://img.shields.io/github/stars/MLWave/kaggle_acquire-valued-shoppers-challenge) ![GitHub last commit](https://img.shields.io/github/last-commit/MLWave/kaggle_acquire-valued-shoppers-challenge)](https://github.com/MLWave/kaggle_acquire-valued-shoppers-challenge) - Code for the Kaggle acquire valued shoppers challenge.
* [kaggle-cifar ![GitHub Repo Stars](https://img.shields.io/github/stars/zygmuntz/kaggle-cifar) ![GitHub last commit](https://img.shields.io/github/last-commit/zygmuntz/kaggle-cifar)](https://github.com/zygmuntz/kaggle-cifar) - Code for the CIFAR-10 competition at Kaggle, uses cuda-convnet.
* [kaggle-blackbox ![GitHub Repo Stars](https://img.shields.io/github/stars/zygmuntz/kaggle-blackbox) ![GitHub last commit](https://img.shields.io/github/last-commit/zygmuntz/kaggle-blackbox)](https://github.com/zygmuntz/kaggle-blackbox) - Deep learning made easy.
* [kaggle-accelerometer ![GitHub Repo Stars](https://img.shields.io/github/stars/zygmuntz/kaggle-accelerometer) ![GitHub last commit](https://img.shields.io/github/last-commit/zygmuntz/kaggle-accelerometer)](https://github.com/zygmuntz/kaggle-accelerometer) - Code for Accelerometer Biometric Competition at Kaggle.
* [kaggle-advertised-salaries ![GitHub Repo Stars](https://img.shields.io/github/stars/zygmuntz/kaggle-advertised-salaries) ![GitHub last commit](https://img.shields.io/github/last-commit/zygmuntz/kaggle-advertised-salaries)](https://github.com/zygmuntz/kaggle-advertised-salaries) - Predicting job salaries from ads - a Kaggle competition.
* [kaggle amazon ![GitHub Repo Stars](https://img.shields.io/github/stars/zygmuntz/kaggle-amazon) ![GitHub last commit](https://img.shields.io/github/last-commit/zygmuntz/kaggle-amazon)](https://github.com/zygmuntz/kaggle-amazon) - Amazon access control challenge.
* [kaggle-bestbuy_big ![GitHub Repo Stars](https://img.shields.io/github/stars/zygmuntz/kaggle-bestbuy_big) ![GitHub last commit](https://img.shields.io/github/last-commit/zygmuntz/kaggle-bestbuy_big)](https://github.com/zygmuntz/kaggle-bestbuy_big) - Code for the Best Buy competition at Kaggle.
* [kaggle-bestbuy_small ![GitHub Repo Stars](https://img.shields.io/github/stars/zygmuntz/kaggle-bestbuy_small) ![GitHub last commit](https://img.shields.io/github/last-commit/zygmuntz/kaggle-bestbuy_small)](https://github.com/zygmuntz/kaggle-bestbuy_small)
* [Kaggle Dogs vs. Cats ![GitHub Repo Stars](https://img.shields.io/github/stars/kastnerkyle/kaggle-dogs-vs-cats) ![GitHub last commit](https://img.shields.io/github/last-commit/kastnerkyle/kaggle-dogs-vs-cats)](https://github.com/kastnerkyle/kaggle-dogs-vs-cats) - Code for Kaggle Dogs vs. Cats competition.
* [Kaggle Galaxy Challenge ![GitHub Repo Stars](https://img.shields.io/github/stars/benanne/kaggle-galaxies) ![GitHub last commit](https://img.shields.io/github/last-commit/benanne/kaggle-galaxies)](https://github.com/benanne/kaggle-galaxies) - Winning solution for the Galaxy Challenge on Kaggle.
* [Kaggle Gender ![GitHub Repo Stars](https://img.shields.io/github/stars/zygmuntz/kaggle-gender) ![GitHub last commit](https://img.shields.io/github/last-commit/zygmuntz/kaggle-gender)](https://github.com/zygmuntz/kaggle-gender) - A Kaggle competition: discriminate gender based on handwriting.
* [Kaggle Merck ![GitHub Repo Stars](https://img.shields.io/github/stars/zygmuntz/kaggle-merck) ![GitHub last commit](https://img.shields.io/github/last-commit/zygmuntz/kaggle-merck)](https://github.com/zygmuntz/kaggle-merck) - Merck challenge at Kaggle.
* [Kaggle Stackoverflow ![GitHub Repo Stars](https://img.shields.io/github/stars/zygmuntz/kaggle-stackoverflow) ![GitHub last commit](https://img.shields.io/github/last-commit/zygmuntz/kaggle-stackoverflow)](https://github.com/zygmuntz/kaggle-stackoverflow) - Predicting closed questions on Stack Overflow.
* [kaggle_acquire-valued-shoppers-challenge ![GitHub Repo Stars](https://img.shields.io/github/stars/MLWave/kaggle_acquire-valued-shoppers-challenge) ![GitHub last commit](https://img.shields.io/github/last-commit/MLWave/kaggle_acquire-valued-shoppers-challenge)](https://github.com/MLWave/kaggle_acquire-valued-shoppers-challenge) - Code for the Kaggle acquire valued shoppers challenge.
* [wine-quality ![GitHub Repo Stars](https://img.shields.io/github/stars/zygmuntz/wine-quality) ![GitHub last commit](https://img.shields.io/github/last-commit/zygmuntz/wine-quality)](https://github.com/zygmuntz/wine-quality) - Predicting wine quality.

<a name="python-reinforcement-learning"></a>
#### Reinforcement Learning
* [DeepMind Lab ![GitHub Repo Stars](https://img.shields.io/github/stars/deepmind/lab) ![GitHub last commit](https://img.shields.io/github/last-commit/deepmind/lab)](https://github.com/deepmind/lab) - DeepMind Lab is a 3D learning environment based on id Software's Quake III Arena via ioquake3 and other open source software. Its primary purpose is to act as a testbed for research in artificial intelligence, especially deep reinforcement learning.
* [Gymnasium ![GitHub Repo Stars](https://img.shields.io/github/stars/Farama-Foundation/Gymnasium) ![GitHub last commit](https://img.shields.io/github/last-commit/Farama-Foundation/Gymnasium)](https://github.com/Farama-Foundation/Gymnasium) - A library for developing and comparing reinforcement learning algorithms (successor of [gym ![GitHub Repo Stars](https://img.shields.io/github/stars/openai/gym) ![GitHub last commit](https://img.shields.io/github/last-commit/openai/gym)](https://github.com/openai/gym).
* [Serpent.AI ![GitHub Repo Stars](https://img.shields.io/github/stars/SerpentAI/SerpentAI) ![GitHub last commit](https://img.shields.io/github/last-commit/SerpentAI/SerpentAI)](https://github.com/SerpentAI/SerpentAI) - Serpent.AI is a game agent framework that allows you to turn any video game you own into a sandbox to develop AI and machine learning experiments. For both researchers and hobbyists.
* [ViZDoom ![GitHub Repo Stars](https://img.shields.io/github/stars/mwydmuch/ViZDoom) ![GitHub last commit](https://img.shields.io/github/last-commit/mwydmuch/ViZDoom)](https://github.com/mwydmuch/ViZDoom) - ViZDoom allows developing AI bots that play Doom using only the visual information (the screen buffer). It is primarily intended for research in machine visual learning, and deep reinforcement learning, in particular.
* [Roboschool ![GitHub Repo Stars](https://img.shields.io/github/stars/openai/roboschool) ![GitHub last commit](https://img.shields.io/github/last-commit/openai/roboschool)](https://github.com/openai/roboschool) - Open-source software for robot simulation, integrated with OpenAI Gym.
* [Retro ![GitHub Repo Stars](https://img.shields.io/github/stars/openai/retro) ![GitHub last commit](https://img.shields.io/github/last-commit/openai/retro)](https://github.com/openai/retro) - Retro Games in Gym
* [SLM Lab ![GitHub Repo Stars](https://img.shields.io/github/stars/kengz/SLM-Lab) ![GitHub last commit](https://img.shields.io/github/last-commit/kengz/SLM-Lab)](https://github.com/kengz/SLM-Lab) - Modular Deep Reinforcement Learning framework in PyTorch.
* [Coach ![GitHub Repo Stars](https://img.shields.io/github/stars/NervanaSystems/coach) ![GitHub last commit](https://img.shields.io/github/last-commit/NervanaSystems/coach)](https://github.com/NervanaSystems/coach) - Reinforcement Learning Coach by Intel® AI Lab enables easy experimentation with state of the art Reinforcement Learning algorithms
* [garage ![GitHub Repo Stars](https://img.shields.io/github/stars/rlworkgroup/garage) ![GitHub last commit](https://img.shields.io/github/last-commit/rlworkgroup/garage)](https://github.com/rlworkgroup/garage) - A toolkit for reproducible reinforcement learning research
* [metaworld ![GitHub Repo Stars](https://img.shields.io/github/stars/rlworkgroup/metaworld) ![GitHub last commit](https://img.shields.io/github/last-commit/rlworkgroup/metaworld)](https://github.com/rlworkgroup/metaworld) - An open source robotics benchmark for meta- and multi-task reinforcement learning
* [acme](https://deepmind.com/research/publications/Acme) - An Open Source Distributed Framework for Reinforcement Learning that makes build and train your agents easily.
* [Spinning Up](https://spinningup.openai.com) - An educational resource designed to let anyone learn to become a skilled practitioner in deep reinforcement learning
* [Maze ![GitHub Repo Stars](https://img.shields.io/github/stars/enlite-ai/maze) ![GitHub last commit](https://img.shields.io/github/last-commit/enlite-ai/maze)](https://github.com/enlite-ai/maze) - Application-oriented deep reinforcement learning framework addressing real-world decision problems.
* [RLlib ![GitHub Repo Stars](https://img.shields.io/github/stars/ray-project/ray) ![GitHub last commit](https://img.shields.io/github/last-commit/ray-project/ray)](https://github.com/ray-project/ray) - RLlib is an industry level, highly scalable RL library for tf and torch, based on Ray. It's used by companies like Amazon and Microsoft to solve real-world decision making problems at scale.
* [DI-engine ![GitHub Repo Stars](https://img.shields.io/github/stars/opendilab/DI-engine) ![GitHub last commit](https://img.shields.io/github/last-commit/opendilab/DI-engine)](https://github.com/opendilab/DI-engine) - DI-engine is a generalized Decision Intelligence engine. It supports most basic deep reinforcement learning (DRL) algorithms, such as DQN, PPO, SAC, and domain-specific algorithms like QMIX in multi-agent RL, GAIL in inverse RL, and RND in exploration problems.

<a name="ruby"></a>
## Ruby

<a name="ruby-natural-language-processing"></a>
#### Natural Language Processing

* [Awesome NLP with Ruby ![GitHub Repo Stars](https://img.shields.io/github/stars/arbox/nlp-with-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/arbox/nlp-with-ruby)](https://github.com/arbox/nlp-with-ruby) - Curated link list for practical natural language processing in Ruby.
* [Treat ![GitHub Repo Stars](https://img.shields.io/github/stars/louismullie/treat) ![GitHub last commit](https://img.shields.io/github/last-commit/louismullie/treat)](https://github.com/louismullie/treat) - Text Retrieval and Annotation Toolkit, definitely the most comprehensive toolkit I’ve encountered so far for Ruby.
* [Stemmer ![GitHub Repo Stars](https://img.shields.io/github/stars/aurelian/ruby-stemmer) ![GitHub last commit](https://img.shields.io/github/last-commit/aurelian/ruby-stemmer)](https://github.com/aurelian/ruby-stemmer) - Expose libstemmer_c to Ruby. **[Deprecated]**
* [Raspell](https://sourceforge.net/projects/raspell/) - raspell is an interface binding for ruby. **[Deprecated]**
* [UEA Stemmer ![GitHub Repo Stars](https://img.shields.io/github/stars/ealdent/uea-stemmer) ![GitHub last commit](https://img.shields.io/github/last-commit/ealdent/uea-stemmer)](https://github.com/ealdent/uea-stemmer) - Ruby port of UEALite Stemmer - a conservative stemmer for search and indexing.
* [Twitter-text-rb ![GitHub Repo Stars](https://img.shields.io/github/stars/twitter/twitter-text) ![GitHub last commit](https://img.shields.io/github/last-commit/twitter/twitter-text)](https://github.com/twitter/twitter-text/tree/master/rb) - A library that does auto linking and extraction of usernames, lists and hashtags in tweets.

<a name="ruby-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [Awesome Machine Learning with Ruby ![GitHub Repo Stars](https://img.shields.io/github/stars/arbox/machine-learning-with-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/arbox/machine-learning-with-ruby)](https://github.com/arbox/machine-learning-with-ruby) - Curated list of ML related resources for Ruby.
* [Ruby Machine Learning ![GitHub Repo Stars](https://img.shields.io/github/stars/tsycho/ruby-machine-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/tsycho/ruby-machine-learning)](https://github.com/tsycho/ruby-machine-learning) - Some Machine Learning algorithms, implemented in Ruby. **[Deprecated]**
* [Machine Learning Ruby ![GitHub Repo Stars](https://img.shields.io/github/stars/mizoR/machine-learning-ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/mizoR/machine-learning-ruby)](https://github.com/mizoR/machine-learning-ruby) **[Deprecated]**
* [jRuby Mahout ![GitHub Repo Stars](https://img.shields.io/github/stars/vasinov/jruby_mahout) ![GitHub last commit](https://img.shields.io/github/last-commit/vasinov/jruby_mahout)](https://github.com/vasinov/jruby_mahout) - JRuby Mahout is a gem that unleashes the power of Apache Mahout in the world of JRuby. **[Deprecated]**
* [CardMagic-Classifier ![GitHub Repo Stars](https://img.shields.io/github/stars/cardmagic/classifier) ![GitHub last commit](https://img.shields.io/github/last-commit/cardmagic/classifier)](https://github.com/cardmagic/classifier) - A general classifier module to allow Bayesian and other types of classifications.
* [rb-libsvm ![GitHub Repo Stars](https://img.shields.io/github/stars/febeling/rb-libsvm) ![GitHub last commit](https://img.shields.io/github/last-commit/febeling/rb-libsvm)](https://github.com/febeling/rb-libsvm) - Ruby language bindings for LIBSVM which is a Library for Support Vector Machines.
* [Scoruby ![GitHub Repo Stars](https://img.shields.io/github/stars/asafschers/scoruby) ![GitHub last commit](https://img.shields.io/github/last-commit/asafschers/scoruby)](https://github.com/asafschers/scoruby) - Creates Random Forest classifiers from PMML files.
* [rumale ![GitHub Repo Stars](https://img.shields.io/github/stars/yoshoku/rumale) ![GitHub last commit](https://img.shields.io/github/last-commit/yoshoku/rumale)](https://github.com/yoshoku/rumale) - Rumale is a machine learning library in Ruby

<a name="ruby-data-analysis--data-visualization"></a>
#### Data Analysis / Data Visualization

* [rsruby ![GitHub Repo Stars](https://img.shields.io/github/stars/alexgutteridge/rsruby) ![GitHub last commit](https://img.shields.io/github/last-commit/alexgutteridge/rsruby)](https://github.com/alexgutteridge/rsruby) - Ruby - R bridge.
* [data-visualization-ruby ![GitHub Repo Stars](https://img.shields.io/github/stars/chrislo/data_visualisation_ruby) ![GitHub last commit](https://img.shields.io/github/last-commit/chrislo/data_visualisation_ruby)](https://github.com/chrislo/data_visualisation_ruby) - Source code and supporting content for my Ruby Manor presentation on Data Visualisation with Ruby. **[Deprecated]**
* [ruby-plot](https://www.ruby-toolbox.com/projects/ruby-plot) - gnuplot wrapper for Ruby, especially for plotting ROC curves into SVG files. **[Deprecated]**
* [plot-rb ![GitHub Repo Stars](https://img.shields.io/github/stars/zuhao/plotrb) ![GitHub last commit](https://img.shields.io/github/last-commit/zuhao/plotrb)](https://github.com/zuhao/plotrb) - A plotting library in Ruby built on top of Vega and D3. **[Deprecated]**
* [scruffy ![GitHub Repo Stars](https://img.shields.io/github/stars/delano/scruffy) ![GitHub last commit](https://img.shields.io/github/last-commit/delano/scruffy)](https://github.com/delano/scruffy) - A beautiful graphing toolkit for Ruby.
* [SciRuby](http://sciruby.com/)
* [Glean ![GitHub Repo Stars](https://img.shields.io/github/stars/glean/glean) ![GitHub last commit](https://img.shields.io/github/last-commit/glean/glean)](https://github.com/glean/glean) - A data management tool for humans. **[Deprecated]**
* [Bioruby ![GitHub Repo Stars](https://img.shields.io/github/stars/bioruby/bioruby) ![GitHub last commit](https://img.shields.io/github/last-commit/bioruby/bioruby)](https://github.com/bioruby/bioruby)
* [Arel ![GitHub Repo Stars](https://img.shields.io/github/stars/nkallen/arel) ![GitHub last commit](https://img.shields.io/github/last-commit/nkallen/arel)](https://github.com/nkallen/arel) **[Deprecated]**

<a name="ruby-misc"></a>
#### Misc

* [Big Data For Chimps ![GitHub Repo Stars](https://img.shields.io/github/stars/infochimps-labs/big_data_for_chimps) ![GitHub last commit](https://img.shields.io/github/last-commit/infochimps-labs/big_data_for_chimps)](https://github.com/infochimps-labs/big_data_for_chimps)
* [Listof ![GitHub Repo Stars](https://img.shields.io/github/stars/kevincobain2000/listof) ![GitHub last commit](https://img.shields.io/github/last-commit/kevincobain2000/listof)](https://github.com/kevincobain2000/listof) - Community based data collection, packed in gem. Get list of pretty much anything (stop words, countries, non words) in txt, JSON or hash. [Demo/Search for a list](http://kevincobain2000.github.io/listof/)


<a name="rust"></a>
## Rust

<a name="rust-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning
* [smartcore ![GitHub Repo Stars](https://img.shields.io/github/stars/smartcorelib/smartcore) ![GitHub last commit](https://img.shields.io/github/last-commit/smartcorelib/smartcore)](https://github.com/smartcorelib/smartcore) - "The Most Advanced Machine Learning Library In Rust."
* [linfa ![GitHub Repo Stars](https://img.shields.io/github/stars/rust-ml/linfa) ![GitHub last commit](https://img.shields.io/github/last-commit/rust-ml/linfa)](https://github.com/rust-ml/linfa) - a comprehensive toolkit to build Machine Learning applications with Rust
* [deeplearn-rs ![GitHub Repo Stars](https://img.shields.io/github/stars/tedsta/deeplearn-rs) ![GitHub last commit](https://img.shields.io/github/last-commit/tedsta/deeplearn-rs)](https://github.com/tedsta/deeplearn-rs) - deeplearn-rs provides simple networks that use matrix multiplication, addition, and ReLU under the MIT license.
* [rustlearn ![GitHub Repo Stars](https://img.shields.io/github/stars/maciejkula/rustlearn) ![GitHub last commit](https://img.shields.io/github/last-commit/maciejkula/rustlearn)](https://github.com/maciejkula/rustlearn) - a machine learning framework featuring logistic regression, support vector machines, decision trees and random forests.
* [rusty-machine ![GitHub Repo Stars](https://img.shields.io/github/stars/AtheMathmo/rusty-machine) ![GitHub last commit](https://img.shields.io/github/last-commit/AtheMathmo/rusty-machine)](https://github.com/AtheMathmo/rusty-machine) - a pure-rust machine learning library.
* [leaf ![GitHub Repo Stars](https://img.shields.io/github/stars/autumnai/leaf) ![GitHub last commit](https://img.shields.io/github/last-commit/autumnai/leaf)](https://github.com/autumnai/leaf) - open source framework for machine intelligence, sharing concepts from TensorFlow and Caffe. Available under the MIT license. [**[Deprecated]**](https://medium.com/@mjhirn/tensorflow-wins-89b78b29aafb#.s0a3uy4cc)
* [RustNN ![GitHub Repo Stars](https://img.shields.io/github/stars/jackm321/RustNN) ![GitHub last commit](https://img.shields.io/github/last-commit/jackm321/RustNN)](https://github.com/jackm321/RustNN) - RustNN is a feedforward neural network library. **[Deprecated]**
* [RusticSOM ![GitHub Repo Stars](https://img.shields.io/github/stars/avinashshenoy97/RusticSOM) ![GitHub last commit](https://img.shields.io/github/last-commit/avinashshenoy97/RusticSOM)](https://github.com/avinashshenoy97/RusticSOM) - A Rust library for Self Organising Maps (SOM).


<a name="r"></a>
## R

<a name="r-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [ahaz](https://cran.r-project.org/web/packages/ahaz/index.html) - ahaz: Regularization for semiparametric additive hazards regression. **[Deprecated]**
* [arules](https://cran.r-project.org/web/packages/arules/index.html) - arules: Mining Association Rules and Frequent Itemsets
* [biglasso](https://cran.r-project.org/web/packages/biglasso/index.html) - biglasso: Extending Lasso Model Fitting to Big Data in R.
* [bmrm](https://cran.r-project.org/web/packages/bmrm/index.html) - bmrm: Bundle Methods for Regularized Risk Minimization Package.
* [Boruta](https://cran.r-project.org/web/packages/Boruta/index.html) - Boruta: A wrapper algorithm for all-relevant feature selection.
* [bst](https://cran.r-project.org/web/packages/bst/index.html) - bst: Gradient Boosting.
* [C50](https://cran.r-project.org/web/packages/C50/index.html) - C50: C5.0 Decision Trees and Rule-Based Models.
* [caret](https://topepo.github.io/caret/index.html) - Classification and Regression Training: Unified interface to ~150 ML algorithms in R.
* [caretEnsemble](https://cran.r-project.org/web/packages/caretEnsemble/index.html) - caretEnsemble: Framework for fitting multiple caret models as well as creating ensembles of such models. **[Deprecated]**
* [CatBoost ![GitHub Repo Stars](https://img.shields.io/github/stars/catboost/catboost) ![GitHub last commit](https://img.shields.io/github/last-commit/catboost/catboost)](https://github.com/catboost/catboost) - General purpose gradient boosting on decision trees library with categorical features support out of the box for R.
* [Clever Algorithms For Machine Learning](https://machinelearningmastery.com/)
* [CORElearn](https://cran.r-project.org/web/packages/CORElearn/index.html) - CORElearn: Classification, regression, feature evaluation and ordinal evaluation.
-* [CoxBoost](https://cran.r-project.org/web/packages/CoxBoost/index.html) - CoxBoost: Cox models by likelihood based boosting for a single survival endpoint or competing risks **[Deprecated]**
* [Cubist](https://cran.r-project.org/web/packages/Cubist/index.html) - Cubist: Rule- and Instance-Based Regression Modelling.
* [e1071](https://cran.r-project.org/web/packages/e1071/index.html) - e1071: Misc Functions of the Department of Statistics (e1071), TU Wien
* [earth](https://cran.r-project.org/web/packages/earth/index.html) - earth: Multivariate Adaptive Regression Spline Models
* [elasticnet](https://cran.r-project.org/web/packages/elasticnet/index.html) - elasticnet: Elastic-Net for Sparse Estimation and Sparse PCA.
* [ElemStatLearn](https://cran.r-project.org/web/packages/ElemStatLearn/index.html) - ElemStatLearn: Data sets, functions and examples from the book: "The Elements of Statistical Learning, Data Mining, Inference, and Prediction" by Trevor Hastie, Robert Tibshirani and Jerome Friedman Prediction" by Trevor Hastie, Robert Tibshirani and Jerome Friedman.
* [evtree](https://cran.r-project.org/web/packages/evtree/index.html) - evtree: Evolutionary Learning of Globally Optimal Trees.
* [forecast](https://cran.r-project.org/web/packages/forecast/index.html) - forecast: Timeseries forecasting using ARIMA, ETS, STLM, TBATS, and neural network models.
* [forecastHybrid](https://cran.r-project.org/web/packages/forecastHybrid/index.html) - forecastHybrid: Automatic ensemble and cross validation of ARIMA, ETS, STLM, TBATS, and neural network models from the "forecast" package.
* [fpc](https://cran.r-project.org/web/packages/fpc/index.html) - fpc: Flexible procedures for clustering.
* [frbs](https://cran.r-project.org/web/packages/frbs/index.html) - frbs: Fuzzy Rule-based Systems for Classification and Regression Tasks. **[Deprecated]**
* [GAMBoost](https://cran.r-project.org/web/packages/GAMBoost/index.html) - GAMBoost: Generalized linear and additive models by likelihood based boosting. **[Deprecated]**
* [gamboostLSS](https://cran.r-project.org/web/packages/gamboostLSS/index.html) - gamboostLSS: Boosting Methods for GAMLSS.
* [gbm](https://cran.r-project.org/web/packages/gbm/index.html) - gbm: Generalized Boosted Regression Models.
* [glmnet](https://cran.r-project.org/web/packages/glmnet/index.html) - glmnet: Lasso and elastic-net regularized generalized linear models.
* [glmpath](https://cran.r-project.org/web/packages/glmpath/index.html) - glmpath: L1 Regularization Path for Generalized Linear Models and Cox Proportional Hazards Model.
* [GMMBoost](https://cran.r-project.org/web/packages/GMMBoost/index.html) - GMMBoost: Likelihood-based Boosting for Generalized mixed models. **[Deprecated]**
* [grplasso](https://cran.r-project.org/web/packages/grplasso/index.html) - grplasso: Fitting user specified models with Group Lasso penalty.
* [grpreg](https://cran.r-project.org/web/packages/grpreg/index.html) - grpreg: Regularization paths for regression models with grouped covariates.
* [h2o](https://cran.r-project.org/web/packages/h2o/index.html) - A framework for fast, parallel, and distributed machine learning algorithms at scale -- Deeplearning, Random forests, GBM, KMeans, PCA, GLM.
* [hda](https://cran.r-project.org/web/packages/hda/index.html) - hda: Heteroscedastic Discriminant Analysis. **[Deprecated]**
* [Introduction to Statistical Learning](https://www-bcf.usc.edu/~gareth/ISL/)
* [ipred](https://cran.r-project.org/web/packages/ipred/index.html) - ipred: Improved Predictors.
* [kernlab](https://cran.r-project.org/web/packages/kernlab/index.html) - kernlab: Kernel-based Machine Learning Lab.
* [klaR](https://cran.r-project.org/web/packages/klaR/index.html) - klaR: Classification and visualization.
* [L0Learn](https://cran.r-project.org/web/packages/L0Learn/index.html) - L0Learn: Fast algorithms for best subset selection.
* [lars](https://cran.r-project.org/web/packages/lars/index.html) - lars: Least Angle Regression, Lasso and Forward Stagewise. **[Deprecated]**
* [lasso2](https://cran.r-project.org/web/packages/lasso2/index.html) - lasso2: L1 constrained estimation aka ‘lasso’.
* [LiblineaR](https://cran.r-project.org/web/packages/LiblineaR/index.html) - LiblineaR: Linear Predictive Models Based On The Liblinear C/C++ Library.
* [LogicReg](https://cran.r-project.org/web/packages/LogicReg/index.html) - LogicReg: Logic Regression.
* [Machine Learning For Hackers ![GitHub Repo Stars](https://img.shields.io/github/stars/johnmyleswhite/ML_for_Hackers) ![GitHub last commit](https://img.shields.io/github/last-commit/johnmyleswhite/ML_for_Hackers)](https://github.com/johnmyleswhite/ML_for_Hackers)
* [maptree](https://cran.r-project.org/web/packages/maptree/index.html) - maptree: Mapping, pruning, and graphing tree models. **[Deprecated]**
* [mboost](https://cran.r-project.org/web/packages/mboost/index.html) - mboost: Model-Based Boosting.
* [medley](https://www.kaggle.com/general/3661) - medley: Blending regression models, using a greedy stepwise approach.
* [mlr](https://cran.r-project.org/web/packages/mlr/index.html) - mlr: Machine Learning in R.
* [ncvreg](https://cran.r-project.org/web/packages/ncvreg/index.html) - ncvreg: Regularization paths for SCAD- and MCP-penalized regression models.
* [nnet](https://cran.r-project.org/web/packages/nnet/index.html) - nnet: Feed-forward Neural Networks and Multinomial Log-Linear Models. **[Deprecated]**
* [pamr](https://cran.r-project.org/web/packages/pamr/index.html) - pamr: Pam: prediction analysis for microarrays. **[Deprecated]**
* [party](https://cran.r-project.org/web/packages/party/index.html) - party: A Laboratory for Recursive Partitioning
* [partykit](https://cran.r-project.org/web/packages/partykit/index.html) - partykit: A Toolkit for Recursive Partitioning.
* [penalized](https://cran.r-project.org/web/packages/penalized/index.html) - penalized: L1 (lasso and fused lasso) and L2 (ridge) penalized estimation in GLMs and in the Cox model.
* [penalizedLDA](https://cran.r-project.org/web/packages/penalizedLDA/index.html) - penalizedLDA: Penalized classification using Fisher's linear discriminant. **[Deprecated]**
* [penalizedSVM](https://cran.r-project.org/web/packages/penalizedSVM/index.html) - penalizedSVM: Feature Selection SVM using penalty functions.
* [quantregForest](https://cran.r-project.org/web/packages/quantregForest/index.html) - quantregForest: Quantile Regression Forests.
* [randomForest](https://cran.r-project.org/web/packages/randomForest/index.html) - randomForest: Breiman and Cutler's random forests for classification and regression.
* [randomForestSRC](https://cran.r-project.org/web/packages/randomForestSRC/index.html) - randomForestSRC: Random Forests for Survival, Regression and Classification (RF-SRC).
* [rattle](https://cran.r-project.org/web/packages/rattle/index.html) - rattle: Graphical user interface for data mining in R.
* [rda](https://cran.r-project.org/web/packages/rda/index.html) - rda: Shrunken Centroids Regularized Discriminant Analysis.
* [rdetools](https://cran.r-project.org/web/packages/rdetools/index.html) - rdetools: Relevant Dimension Estimation (RDE) in Feature Spaces. **[Deprecated]**
* [REEMtree](https://cran.r-project.org/web/packages/REEMtree/index.html) - REEMtree: Regression Trees with Random Effects for Longitudinal (Panel) Data. **[Deprecated]**
* [relaxo](https://cran.r-project.org/web/packages/relaxo/index.html) - relaxo: Relaxed Lasso. **[Deprecated]**
* [rgenoud](https://cran.r-project.org/web/packages/rgenoud/index.html) - rgenoud: R version of GENetic Optimization Using Derivatives
* [Rmalschains](https://cran.r-project.org/web/packages/Rmalschains/index.html) - Rmalschains: Continuous Optimization using Memetic Algorithms with Local Search Chains (MA-LS-Chains) in R.
* [rminer](https://cran.r-project.org/web/packages/rminer/index.html) - rminer: Simpler use of data mining methods (e.g. NN and SVM) in classification and regression. **[Deprecated]**
* [ROCR](https://cran.r-project.org/web/packages/ROCR/index.html) - ROCR: Visualizing the performance of scoring classifiers. **[Deprecated]**
* [RoughSets](https://cran.r-project.org/web/packages/RoughSets/index.html) - RoughSets: Data Analysis Using Rough Set and Fuzzy Rough Set Theories. **[Deprecated]**
* [rpart](https://cran.r-project.org/web/packages/rpart/index.html) - rpart: Recursive Partitioning and Regression Trees.
* [RPMM](https://cran.r-project.org/web/packages/RPMM/index.html) - RPMM: Recursively Partitioned Mixture Model.
* [RSNNS](https://cran.r-project.org/web/packages/RSNNS/index.html) - RSNNS: Neural Networks in R using the Stuttgart Neural Network Simulator (SNNS).
* [RWeka](https://cran.r-project.org/web/packages/RWeka/index.html) - RWeka: R/Weka interface.
* [RXshrink](https://cran.r-project.org/web/packages/RXshrink/index.html) - RXshrink: Maximum Likelihood Shrinkage via Generalized Ridge or Least Angle Regression.
* [sda](https://cran.r-project.org/web/packages/sda/index.html) - sda: Shrinkage Discriminant Analysis and CAT Score Variable Selection. **[Deprecated]**
* [spectralGraphTopology](https://cran.r-project.org/web/packages/spectralGraphTopology/index.html) - spectralGraphTopology: Learning Graphs from Data via Spectral Constraints.
* [SuperLearner ![GitHub Repo Stars](https://img.shields.io/github/stars/ecpolley/SuperLearner) ![GitHub last commit](https://img.shields.io/github/last-commit/ecpolley/SuperLearner)](https://github.com/ecpolley/SuperLearner) - Multi-algorithm ensemble learning packages.
* [svmpath](https://cran.r-project.org/web/packages/svmpath/index.html) - svmpath: svmpath: the SVM Path algorithm. **[Deprecated]**
* [tgp](https://cran.r-project.org/web/packages/tgp/index.html) - tgp: Bayesian treed Gaussian process models. **[Deprecated]**
* [tree](https://cran.r-project.org/web/packages/tree/index.html) - tree: Classification and regression trees.
* [varSelRF](https://cran.r-project.org/web/packages/varSelRF/index.html) - varSelRF: Variable selection using random forests.
* [XGBoost.R ![GitHub Repo Stars](https://img.shields.io/github/stars/tqchen/xgboost) ![GitHub last commit](https://img.shields.io/github/last-commit/tqchen/xgboost)](https://github.com/tqchen/xgboost/tree/master/R-package) - R binding for eXtreme Gradient Boosting (Tree) Library.
* [Optunity](https://optunity.readthedocs.io/en/latest/) - A library dedicated to automated hyperparameter optimization with a simple, lightweight API to facilitate drop-in replacement of grid search. Optunity is written in Python but interfaces seamlessly to R.
* [igraph](https://igraph.org/r/) - binding to igraph library - General purpose graph library.
* [MXNet ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/incubator-mxnet) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/incubator-mxnet)](https://github.com/apache/incubator-mxnet) - Lightweight, Portable, Flexible Distributed/Mobile Deep Learning with Dynamic, Mutation-aware Dataflow Dep Scheduler; for Python, R, Julia, Go, JavaScript and more.
* [TDSP-Utilities ![GitHub Repo Stars](https://img.shields.io/github/stars/Azure/Azure-TDSP-Utilities) ![GitHub last commit](https://img.shields.io/github/last-commit/Azure/Azure-TDSP-Utilities)](https://github.com/Azure/Azure-TDSP-Utilities) - Two data science utilities in R from Microsoft: 1) Interactive Data Exploration, Analysis, and Reporting (IDEAR) ; 2) Automated Modelling and Reporting (AMR).

<a name="r-data-analysis--data-visualization"></a>
#### Data Manipulation | Data Analysis | Data Visualization

* [dplyr](https://www.rdocumentation.org/packages/dplyr/versions/0.7.8) - A data manipulation package that helps to solve the most common data manipulation problems.
* [ggplot2](https://ggplot2.tidyverse.org/) - A data visualization package based on the grammar of graphics.
* [tmap](https://cran.r-project.org/web/packages/tmap/vignettes/tmap-getstarted.html) for visualizing geospatial data with static maps and [leaflet](https://rstudio.github.io/leaflet/) for interactive maps
* [tm](https://www.rdocumentation.org/packages/tm/) and [quanteda](https://quanteda.io/) are the main packages for managing,  analyzing, and visualizing textual data.
* [shiny](https://shiny.rstudio.com/) is the basis for truly interactive displays and dashboards in R. However, some measure of interactivity can be achieved with [htmlwidgets](https://www.htmlwidgets.org/) bringing javascript libraries to R. These include, [plotly](https://plot.ly/r/), [dygraphs](http://rstudio.github.io/dygraphs), [highcharter](http://jkunst.com/highcharter/), and several others.

<a name="sas"></a>
## SAS

<a name="sas-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [Visual Data Mining and Machine Learning](https://www.sas.com/en_us/software/visual-data-mining-machine-learning.html) - Interactive, automated, and programmatic modelling with the latest machine learning algorithms in and end-to-end analytics environment, from data prep to deployment. Free trial available.
* [Enterprise Miner](https://www.sas.com/en_us/software/enterprise-miner.html) - Data mining and machine learning that creates deployable models using a GUI or code.
* [Factory Miner](https://www.sas.com/en_us/software/factory-miner.html) - Automatically creates deployable machine learning models across numerous market or customer segments using a GUI.

<a name="sas-data-analysis--data-visualization"></a>
#### Data Analysis / Data Visualization

* [SAS/STAT](https://www.sas.com/en_us/software/stat.html) - For conducting advanced statistical analysis.
* [University Edition](https://www.sas.com/en_us/software/university-edition.html) - FREE! Includes all SAS packages necessary for data analysis and visualization, and includes online SAS courses.

<a name="sas-natural-language-processing"></a>
#### Natural Language Processing

* [Contextual Analysis](https://www.sas.com/en_us/software/contextual-analysis.html) - Add structure to unstructured text using a GUI.
* [Sentiment Analysis](https://www.sas.com/en_us/software/sentiment-analysis.html) - Extract sentiment from text using a GUI.
* [Text Miner](https://www.sas.com/en_us/software/text-miner.html) - Text mining using a GUI or code.

<a name="sas-demos-and-scripts"></a>
#### Demos and Scripts

* [ML_Tables ![GitHub Repo Stars](https://img.shields.io/github/stars/sassoftware/enlighten-apply) ![GitHub last commit](https://img.shields.io/github/last-commit/sassoftware/enlighten-apply)](https://github.com/sassoftware/enlighten-apply/tree/master/ML_tables) - Concise cheat sheets containing machine learning best practices.
* [enlighten-apply ![GitHub Repo Stars](https://img.shields.io/github/stars/sassoftware/enlighten-apply) ![GitHub last commit](https://img.shields.io/github/last-commit/sassoftware/enlighten-apply)](https://github.com/sassoftware/enlighten-apply) - Example code and materials that illustrate applications of SAS machine learning techniques.
* [enlighten-integration ![GitHub Repo Stars](https://img.shields.io/github/stars/sassoftware/enlighten-integration) ![GitHub last commit](https://img.shields.io/github/last-commit/sassoftware/enlighten-integration)](https://github.com/sassoftware/enlighten-integration) - Example code and materials that illustrate techniques for integrating SAS with other analytics technologies in Java, PMML, Python and R.
* [enlighten-deep ![GitHub Repo Stars](https://img.shields.io/github/stars/sassoftware/enlighten-deep) ![GitHub last commit](https://img.shields.io/github/last-commit/sassoftware/enlighten-deep)](https://github.com/sassoftware/enlighten-deep) - Example code and materials that illustrate using neural networks with several hidden layers in SAS.
* [dm-flow ![GitHub Repo Stars](https://img.shields.io/github/stars/sassoftware/dm-flow) ![GitHub last commit](https://img.shields.io/github/last-commit/sassoftware/dm-flow)](https://github.com/sassoftware/dm-flow) - Library of SAS Enterprise Miner process flow diagrams to help you learn by example about specific data mining topics.


<a name="scala"></a>
## Scala

<a name="scala-natural-language-processing"></a>
#### Natural Language Processing

* [ScalaNLP](http://www.scalanlp.org/) - ScalaNLP is a suite of machine learning and numerical computing libraries.
* [Breeze ![GitHub Repo Stars](https://img.shields.io/github/stars/scalanlp/breeze) ![GitHub last commit](https://img.shields.io/github/last-commit/scalanlp/breeze)](https://github.com/scalanlp/breeze) - Breeze is a numerical processing library for Scala.
* [Chalk ![GitHub Repo Stars](https://img.shields.io/github/stars/scalanlp/chalk) ![GitHub last commit](https://img.shields.io/github/last-commit/scalanlp/chalk)](https://github.com/scalanlp/chalk) - Chalk is a natural language processing library. **[Deprecated]**
* [FACTORIE ![GitHub Repo Stars](https://img.shields.io/github/stars/factorie/factorie) ![GitHub last commit](https://img.shields.io/github/last-commit/factorie/factorie)](https://github.com/factorie/factorie) - FACTORIE is a toolkit for deployable probabilistic modelling, implemented as a software library in Scala. It provides its users with a succinct language for creating relational factor graphs, estimating parameters and performing inference.
* [Montague ![GitHub Repo Stars](https://img.shields.io/github/stars/Workday/upshot-montague) ![GitHub last commit](https://img.shields.io/github/last-commit/Workday/upshot-montague)](https://github.com/Workday/upshot-montague) - Montague is a semantic parsing library for Scala with an easy-to-use DSL.
* [Spark NLP ![GitHub Repo Stars](https://img.shields.io/github/stars/JohnSnowLabs/spark-nlp) ![GitHub last commit](https://img.shields.io/github/last-commit/JohnSnowLabs/spark-nlp)](https://github.com/JohnSnowLabs/spark-nlp) - Natural language processing library built on top of Apache Spark ML to provide simple, performant, and accurate NLP annotations for machine learning pipelines, that scale easily in a distributed environment.

<a name="scala-data-analysis--data-visualization"></a>
#### Data Analysis / Data Visualization

* [NDScala ![GitHub Repo Stars](https://img.shields.io/github/stars/SciScala/NDScala) ![GitHub last commit](https://img.shields.io/github/last-commit/SciScala/NDScala)](https://github.com/SciScala/NDScala) - N-dimensional arrays in Scala 3. Think NumPy ndarray, but with compile-time type-checking/inference over shapes, tensor/axis labels & numeric data types
* [MLlib in Apache Spark](https://spark.apache.org/docs/latest/mllib-guide.html) - Distributed machine learning library in Spark
* [Hydrosphere Mist ![GitHub Repo Stars](https://img.shields.io/github/stars/Hydrospheredata/mist) ![GitHub last commit](https://img.shields.io/github/last-commit/Hydrospheredata/mist)](https://github.com/Hydrospheredata/mist) - a service for deployment Apache Spark MLLib machine learning models as realtime, batch or reactive web services.
* [Scalding ![GitHub Repo Stars](https://img.shields.io/github/stars/twitter/scalding) ![GitHub last commit](https://img.shields.io/github/last-commit/twitter/scalding)](https://github.com/twitter/scalding) - A Scala API for Cascading.
* [Summing Bird ![GitHub Repo Stars](https://img.shields.io/github/stars/twitter/summingbird) ![GitHub last commit](https://img.shields.io/github/last-commit/twitter/summingbird)](https://github.com/twitter/summingbird) - Streaming MapReduce with Scalding and Storm.
* [Algebird ![GitHub Repo Stars](https://img.shields.io/github/stars/twitter/algebird) ![GitHub last commit](https://img.shields.io/github/last-commit/twitter/algebird)](https://github.com/twitter/algebird) - Abstract Algebra for Scala.
* [xerial ![GitHub Repo Stars](https://img.shields.io/github/stars/xerial/xerial) ![GitHub last commit](https://img.shields.io/github/last-commit/xerial/xerial)](https://github.com/xerial/xerial) - Data management utilities for Scala. **[Deprecated]**
* [PredictionIO ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/predictionio) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/predictionio)](https://github.com/apache/predictionio) - PredictionIO, a machine learning server for software developers and data engineers.
* [BIDMat ![GitHub Repo Stars](https://img.shields.io/github/stars/BIDData/BIDMat) ![GitHub last commit](https://img.shields.io/github/last-commit/BIDData/BIDMat)](https://github.com/BIDData/BIDMat) - CPU and GPU-accelerated matrix library intended to support large-scale exploratory data analysis.
* [Flink](https://flink.apache.org/) - Open source platform for distributed stream and batch data processing.
* [Spark Notebook](http://spark-notebook.io) - Interactive and Reactive Data Science using Scala and Spark.

<a name="scala-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [Microsoft ML for Apache Spark ![GitHub Repo Stars](https://img.shields.io/github/stars/Azure/mmlspark) ![GitHub last commit](https://img.shields.io/github/last-commit/Azure/mmlspark)](https://github.com/Azure/mmlspark) -> A distributed machine learning framework Apache Spark
* [ONNX-Scala ![GitHub Repo Stars](https://img.shields.io/github/stars/EmergentOrder/onnx-scala) ![GitHub last commit](https://img.shields.io/github/last-commit/EmergentOrder/onnx-scala)](https://github.com/EmergentOrder/onnx-scala) - An ONNX (Open Neural Network eXchange) API and backend for typeful, functional deep learning in Scala (3).
* [DeepLearning.scala](https://deeplearning.thoughtworks.school/) - Creating statically typed dynamic neural networks from object-oriented & functional programming constructs.
* [Conjecture ![GitHub Repo Stars](https://img.shields.io/github/stars/etsy/Conjecture) ![GitHub last commit](https://img.shields.io/github/last-commit/etsy/Conjecture)](https://github.com/etsy/Conjecture) - Scalable Machine Learning in Scalding.
* [brushfire ![GitHub Repo Stars](https://img.shields.io/github/stars/stripe/brushfire) ![GitHub last commit](https://img.shields.io/github/last-commit/stripe/brushfire)](https://github.com/stripe/brushfire) - Distributed decision tree ensemble learning in Scala.
* [ganitha ![GitHub Repo Stars](https://img.shields.io/github/stars/tresata/ganitha) ![GitHub last commit](https://img.shields.io/github/last-commit/tresata/ganitha)](https://github.com/tresata/ganitha) - Scalding powered machine learning. **[Deprecated]**
* [adam ![GitHub Repo Stars](https://img.shields.io/github/stars/bigdatagenomics/adam) ![GitHub last commit](https://img.shields.io/github/last-commit/bigdatagenomics/adam)](https://github.com/bigdatagenomics/adam) - A genomics processing engine and specialized file format built using Apache Avro, Apache Spark and Parquet. Apache 2 licensed.
* [bioscala ![GitHub Repo Stars](https://img.shields.io/github/stars/bioscala/bioscala) ![GitHub last commit](https://img.shields.io/github/last-commit/bioscala/bioscala)](https://github.com/bioscala/bioscala) - Bioinformatics for the Scala programming language
* [BIDMach ![GitHub Repo Stars](https://img.shields.io/github/stars/BIDData/BIDMach) ![GitHub last commit](https://img.shields.io/github/last-commit/BIDData/BIDMach)](https://github.com/BIDData/BIDMach) - CPU and GPU-accelerated Machine Learning Library.
* [Figaro ![GitHub Repo Stars](https://img.shields.io/github/stars/p2t2/figaro) ![GitHub last commit](https://img.shields.io/github/last-commit/p2t2/figaro)](https://github.com/p2t2/figaro) - a Scala library for constructing probabilistic models.
* [H2O Sparkling Water ![GitHub Repo Stars](https://img.shields.io/github/stars/h2oai/sparkling-water) ![GitHub last commit](https://img.shields.io/github/last-commit/h2oai/sparkling-water)](https://github.com/h2oai/sparkling-water) - H2O and Spark interoperability.
* [FlinkML in Apache Flink](https://ci.apache.org/projects/flink/flink-docs-master/dev/libs/ml/index.html) - Distributed machine learning library in Flink.
* [DynaML ![GitHub Repo Stars](https://img.shields.io/github/stars/transcendent-ai-labs/DynaML) ![GitHub last commit](https://img.shields.io/github/last-commit/transcendent-ai-labs/DynaML)](https://github.com/transcendent-ai-labs/DynaML) - Scala Library/REPL for Machine Learning Research.
* [Saul ![GitHub Repo Stars](https://img.shields.io/github/stars/CogComp/saul) ![GitHub last commit](https://img.shields.io/github/last-commit/CogComp/saul)](https://github.com/CogComp/saul) - Flexible Declarative Learning-Based Programming.
* [SwiftLearner ![GitHub Repo Stars](https://img.shields.io/github/stars/valdanylchuk/swiftlearner) ![GitHub last commit](https://img.shields.io/github/last-commit/valdanylchuk/swiftlearner)](https://github.com/valdanylchuk/swiftlearner/) - Simply written algorithms to help study ML or write your own implementations.
* [Smile](https://haifengl.github.io/) - Statistical Machine Intelligence and Learning Engine.
* [doddle-model ![GitHub Repo Stars](https://img.shields.io/github/stars/picnicml/doddle-model) ![GitHub last commit](https://img.shields.io/github/last-commit/picnicml/doddle-model)](https://github.com/picnicml/doddle-model) - An in-memory machine learning library built on top of Breeze. It provides immutable objects and exposes its functionality through a scikit-learn-like API.
* [TensorFlow Scala ![GitHub Repo Stars](https://img.shields.io/github/stars/eaplatanios/tensorflow_scala) ![GitHub last commit](https://img.shields.io/github/last-commit/eaplatanios/tensorflow_scala)](https://github.com/eaplatanios/tensorflow_scala) -   Strongly-typed Scala API for TensorFlow.

<a name="scheme"></a>
## Scheme

<a name="scheme-neural-networks"></a>
#### Neural Networks

* [layer ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudkj/layer) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudkj/layer)](https://github.com/cloudkj/layer) - Neural network inference from the command line, implemented in [CHICKEN Scheme](https://www.call-cc.org/).

<a name="swift"></a>
## Swift

<a name="swift-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning

* [Bender ![GitHub Repo Stars](https://img.shields.io/github/stars/xmartlabs/Bender) ![GitHub last commit](https://img.shields.io/github/last-commit/xmartlabs/Bender)](https://github.com/xmartlabs/Bender) - Fast Neural Networks framework built on top of Metal. Supports TensorFlow models.
* [Swift AI ![GitHub Repo Stars](https://img.shields.io/github/stars/Swift-AI/Swift-AI) ![GitHub last commit](https://img.shields.io/github/last-commit/Swift-AI/Swift-AI)](https://github.com/Swift-AI/Swift-AI) - Highly optimized artificial intelligence and machine learning library written in Swift.
* [Swift for Tensorflow ![GitHub Repo Stars](https://img.shields.io/github/stars/tensorflow/swift) ![GitHub last commit](https://img.shields.io/github/last-commit/tensorflow/swift)](https://github.com/tensorflow/swift) - a next-generation platform for machine learning, incorporating the latest research across machine learning, compilers, differentiable programming, systems design, and beyond.
* [BrainCore ![GitHub Repo Stars](https://img.shields.io/github/stars/alejandro-isaza/BrainCore) ![GitHub last commit](https://img.shields.io/github/last-commit/alejandro-isaza/BrainCore)](https://github.com/alejandro-isaza/BrainCore) - The iOS and OS X neural network framework.
* [swix ![GitHub Repo Stars](https://img.shields.io/github/stars/stsievert/swix) ![GitHub last commit](https://img.shields.io/github/last-commit/stsievert/swix)](https://github.com/stsievert/swix) - A bare bones library that includes a general matrix language and wraps some OpenCV for iOS development. **[Deprecated]**
* [AIToolbox ![GitHub Repo Stars](https://img.shields.io/github/stars/KevinCoble/AIToolbox) ![GitHub last commit](https://img.shields.io/github/last-commit/KevinCoble/AIToolbox)](https://github.com/KevinCoble/AIToolbox) - A toolbox framework of AI modules written in Swift: Graphs/Trees, Linear Regression, Support Vector Machines, Neural Networks, PCA, KMeans, Genetic Algorithms, MDP, Mixture of Gaussians.
* [MLKit ![GitHub Repo Stars](https://img.shields.io/github/stars/Somnibyte/MLKit) ![GitHub last commit](https://img.shields.io/github/last-commit/Somnibyte/MLKit)](https://github.com/Somnibyte/MLKit) - A simple Machine Learning Framework written in Swift. Currently features Simple Linear Regression, Polynomial Regression, and Ridge Regression.
* [Swift Brain ![GitHub Repo Stars](https://img.shields.io/github/stars/vlall/Swift-Brain) ![GitHub last commit](https://img.shields.io/github/last-commit/vlall/Swift-Brain)](https://github.com/vlall/Swift-Brain) - The first neural network / machine learning library written in Swift. This is a project for AI algorithms in Swift for iOS and OS X development. This project includes algorithms focused on Bayes theorem, neural networks, SVMs, Matrices, etc...
* [Perfect TensorFlow ![GitHub Repo Stars](https://img.shields.io/github/stars/PerfectlySoft/Perfect-TensorFlow) ![GitHub last commit](https://img.shields.io/github/last-commit/PerfectlySoft/Perfect-TensorFlow)](https://github.com/PerfectlySoft/Perfect-TensorFlow) - Swift Language Bindings of TensorFlow. Using native TensorFlow models on both macOS / Linux.
* [PredictionBuilder ![GitHub Repo Stars](https://img.shields.io/github/stars/denissimon/prediction-builder-swift) ![GitHub last commit](https://img.shields.io/github/last-commit/denissimon/prediction-builder-swift)](https://github.com/denissimon/prediction-builder-swift) - A library for machine learning that builds predictions using a linear regression.
* [Awesome CoreML ![GitHub Repo Stars](https://img.shields.io/github/stars/SwiftBrain/awesome-CoreML-models) ![GitHub last commit](https://img.shields.io/github/last-commit/SwiftBrain/awesome-CoreML-models)](https://github.com/SwiftBrain/awesome-CoreML-models) - A curated list of pretrained CoreML models.
* [Awesome Core ML Models ![GitHub Repo Stars](https://img.shields.io/github/stars/likedan/Awesome-CoreML-Models) ![GitHub last commit](https://img.shields.io/github/last-commit/likedan/Awesome-CoreML-Models)](https://github.com/likedan/Awesome-CoreML-Models) - A curated list of machine learning models in CoreML format.

<a name="tensorflow"></a>
## TensorFlow

<a name="tensorflow-general-purpose-machine-learning"></a>
#### General-Purpose Machine Learning
* [Awesome Keras ![GitHub Repo Stars](https://img.shields.io/github/stars/markusschanta/awesome-keras) ![GitHub last commit](https://img.shields.io/github/last-commit/markusschanta/awesome-keras)](https://github.com/markusschanta/awesome-keras) - A curated list of awesome Keras projects, libraries and resources.
* [Awesome TensorFlow ![GitHub Repo Stars](https://img.shields.io/github/stars/jtoy/awesome-tensorflow) ![GitHub last commit](https://img.shields.io/github/last-commit/jtoy/awesome-tensorflow)](https://github.com/jtoy/awesome-tensorflow) - A list of all things related to TensorFlow.
* [Golden TensorFlow](https://golden.com/wiki/TensorFlow) - A page of content on TensorFlow, including academic papers and links to related topics.

<a name="tools"></a>
## Tools

<a name="tools-neural-networks"></a>
#### Neural Networks
* [layer ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudkj/layer) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudkj/layer)](https://github.com/cloudkj/layer) - Neural network inference from the command line

<a name="tools-misc"></a>
#### Misc

* [Synthical](https://synthical.com) - AI-powered collaborative research environment. You can use it to get recommendations of articles based on reading history, simplify papers, find out what articles are trending, search articles by meaning (not just keywords), create and share folders of articles, see lists of articles from specific companies and universities, and add highlights.
* [Humanloop](https://humanloop.com) – Humanloop is a platform for prompt experimentation, finetuning models for better performance, cost optimization, and collecting model generated data and user feedback.
* [Qdrant](https://qdrant.tech) – Qdrant is [open source ![GitHub Repo Stars](https://img.shields.io/github/stars/qdrant/qdrant) ![GitHub last commit](https://img.shields.io/github/last-commit/qdrant/qdrant)](https://github.com/qdrant/qdrant) vector similarity search engine with extended filtering support, written in Rust.
* [milvus](https://milvus.io) – Milvus is [open source ![GitHub Repo Stars](https://img.shields.io/github/stars/milvus-io/milvus) ![GitHub last commit](https://img.shields.io/github/last-commit/milvus-io/milvus)](https://github.com/milvus-io/milvus) vector database for production AI, written in Go and C++, scalable and blazing fast for billions of embedding vectors.
* [Weaviate](https://www.semi.technology/developers/weaviate/current/) – Weaviate is an [open source ![GitHub Repo Stars](https://img.shields.io/github/stars/semi-technologies/weaviate) ![GitHub last commit](https://img.shields.io/github/last-commit/semi-technologies/weaviate)](https://github.com/semi-technologies/weaviate) vector search engine and vector database. Weaviate uses machine learning to vectorize and store data, and to find answers to natural language queries. With Weaviate you can also bring your custom ML models to production scale.
* [txtai ![GitHub Repo Stars](https://img.shields.io/github/stars/neuml/txtai) ![GitHub last commit](https://img.shields.io/github/last-commit/neuml/txtai)](https://github.com/neuml/txtai) - Build semantic search applications and workflows.
* [MLReef](https://about.mlreef.com/) - MLReef is an end-to-end development platform using the power of git to give structure and deep collaboration possibilities to the ML development process.
* [Pinecone](https://www.pinecone.io/) - Vector database for applications that require real-time, scalable vector embedding and similarity search.
* [CatalyzeX](https://chrome.google.com/webstore/detail/code-finder-for-research/aikkeehnlfpamidigaffhfmgbkdeheil) - Browser extension ([Chrome](https://chrome.google.com/webstore/detail/code-finder-for-research/aikkeehnlfpamidigaffhfmgbkdeheil) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/code-finder-catalyzex/)) that automatically finds and shows code implementations for machine learning papers anywhere: Google, Twitter, Arxiv, Scholar, etc.
* [ML Workspace ![GitHub Repo Stars](https://img.shields.io/github/stars/ml-tooling/ml-workspace) ![GitHub last commit](https://img.shields.io/github/last-commit/ml-tooling/ml-workspace)](https://github.com/ml-tooling/ml-workspace) - All-in-one web-based IDE for machine learning and data science. The workspace is deployed as a docker container and is preloaded with a variety of popular data science libraries (e.g., Tensorflow, PyTorch) and dev tools (e.g., Jupyter, VS Code).
* [Notebooks ![GitHub Repo Stars](https://img.shields.io/github/stars/rlan/notebooks) ![GitHub last commit](https://img.shields.io/github/last-commit/rlan/notebooks)](https://github.com/rlan/notebooks) - A starter kit for Jupyter notebooks and machine learning. Companion docker images consist of all combinations of python versions, machine learning frameworks (Keras, PyTorch and Tensorflow) and CPU/CUDA versions.
* [DVC ![GitHub Repo Stars](https://img.shields.io/github/stars/iterative/dvc) ![GitHub last commit](https://img.shields.io/github/last-commit/iterative/dvc)](https://github.com/iterative/dvc) - Data Science Version Control is an open-source version control system for machine learning projects with pipelines support. It makes ML projects reproducible and shareable.
* [DVClive ![GitHub Repo Stars](https://img.shields.io/github/stars/iterative/dvclive) ![GitHub last commit](https://img.shields.io/github/last-commit/iterative/dvclive)](https://github.com/iterative/dvclive) - Python library for experiment metrics logging into simply formatted local files.
* [VDP ![GitHub Repo Stars](https://img.shields.io/github/stars/instill-ai/vdp) ![GitHub last commit](https://img.shields.io/github/last-commit/instill-ai/vdp)](https://github.com/instill-ai/vdp) - open source visual data ETL to streamline the end-to-end visual data processing pipeline: extract unstructured visual data from pre-built data sources, transform it into analysable structured insights by Vision AI models imported from various ML platforms, and load the insights into warehouses or applications.
* [Kedro ![GitHub Repo Stars](https://img.shields.io/github/stars/quantumblacklabs/kedro) ![GitHub last commit](https://img.shields.io/github/last-commit/quantumblacklabs/kedro)](https://github.com/quantumblacklabs/kedro/) - Kedro is a data and development workflow framework that implements best practices for data pipelines with an eye towards productionizing machine learning models.
* [guild.ai](https://guild.ai/) - Tool to log, analyze, compare and "optimize" experiments. It's cross-platform and framework independent, and provided integrated visualizers such as tensorboard.
* [Sacred ![GitHub Repo Stars](https://img.shields.io/github/stars/IDSIA/sacred) ![GitHub last commit](https://img.shields.io/github/last-commit/IDSIA/sacred)](https://github.com/IDSIA/sacred) - Python tool to help  you configure, organize, log and reproduce experiments. Like a notebook lab in the context of Chemistry/Biology. The community has built multiple add-ons leveraging the proposed standard.
* [Comet](https://www.comet.com/) -  ML platform for tracking experiments, hyper-parameters, artifacts and more. It's deeply integrated with over 15+ deep learning frameworks and orchestration tools. Users can also use the platform to monitor their models in production.
* [MLFlow](https://mlflow.org/) - platform to manage the ML lifecycle, including experimentation, reproducibility and deployment. Framework and language agnostic, take a look at all the built-in integrations.
* [Weights & Biases](https://www.wandb.com/) - Machine learning experiment tracking, dataset versioning, hyperparameter search, visualization, and collaboration
* More tools to improve the ML lifecycle: [Catalyst ![GitHub Repo Stars](https://img.shields.io/github/stars/catalyst-team/catalyst) ![GitHub last commit](https://img.shields.io/github/last-commit/catalyst-team/catalyst)](https://github.com/catalyst-team/catalyst), [PachydermIO](https://www.pachyderm.io/). The following are GitHub-alike and targeting teams [Weights & Biases](https://www.wandb.com/), [Neptune.ai](https://neptune.ai/), [Comet.ml](https://www.comet.ml/), [Valohai.ai](https://valohai.com/), [DAGsHub](https://DAGsHub.com/).
* [Arize AI](https://www.arize.com) - Model validaiton and performance monitoring, drift detection, explainability, visualization across structured and unstructured data
* [MachineLearningWithTensorFlow2ed](https://www.manning.com/books/machine-learning-with-tensorflow-second-edition) - a book on general purpose machine learning techniques regression, classification, unsupervised clustering, reinforcement learning, auto encoders, convolutional neural networks, RNNs, LSTMs, using TensorFlow 1.14.1.
* [m2cgen ![GitHub Repo Stars](https://img.shields.io/github/stars/BayesWitnesses/m2cgen) ![GitHub last commit](https://img.shields.io/github/last-commit/BayesWitnesses/m2cgen)](https://github.com/BayesWitnesses/m2cgen) - A tool that allows the conversion of ML models into native code (Java, C, Python, Go, JavaScript, Visual Basic, C#, R, PowerShell, PHP, Dart) with zero dependencies.
* [CML ![GitHub Repo Stars](https://img.shields.io/github/stars/iterative/cml) ![GitHub last commit](https://img.shields.io/github/last-commit/iterative/cml)](https://github.com/iterative/cml) - A library for doing continuous integration with ML projects. Use GitHub Actions & GitLab CI to train and evaluate models in production like environments and automatically generate visual reports with metrics and graphs in pull/merge requests. Framework & language agnostic.
* [Pythonizr](https://pythonizr.com) - An online tool to generate boilerplate machine learning code that uses scikit-learn.
* [Flyte](https://flyte.org/) - Flyte makes it easy to create concurrent, scalable, and maintainable workflows for machine learning and data processing.
* [Chaos Genius ![GitHub Repo Stars](https://img.shields.io/github/stars/chaos-genius/chaos_genius) ![GitHub last commit](https://img.shields.io/github/last-commit/chaos-genius/chaos_genius)](https://github.com/chaos-genius/chaos_genius/) - ML powered analytics engine for outlier/anomaly detection and root cause analysis.
* [MLEM ![GitHub Repo Stars](https://img.shields.io/github/stars/iterative/mlem) ![GitHub last commit](https://img.shields.io/github/last-commit/iterative/mlem)](https://github.com/iterative/mlem) - Version and deploy your ML models following GitOps principles
* [DockerDL ![GitHub Repo Stars](https://img.shields.io/github/stars/matifali/dockerdl) ![GitHub last commit](https://img.shields.io/github/last-commit/matifali/dockerdl)](https://github.com/matifali/dockerdl) - Ready to use deeplearning docker images.
* [Aqueduct ![GitHub Repo Stars](https://img.shields.io/github/stars/aqueducthq/aqueduct) ![GitHub last commit](https://img.shields.io/github/last-commit/aqueducthq/aqueduct)](https://github.com/aqueducthq/aqueduct) - Aqueduct enables you to easily define, run, and manage AI & ML tasks on any cloud infrastructure.
* [Ambrosia ![GitHub Repo Stars](https://img.shields.io/github/stars/reactorsh/ambrosia) ![GitHub last commit](https://img.shields.io/github/last-commit/reactorsh/ambrosia)](https://github.com/reactorsh/ambrosia) - Ambrosia helps you clean up your LLM datasets using _other_ LLMs.

<a name="books"></a>
## Books

* [Distributed Machine Learning Patterns ![GitHub Repo Stars](https://img.shields.io/github/stars/terrytangyuan/distributed-ml-patterns) ![GitHub last commit](https://img.shields.io/github/last-commit/terrytangyuan/distributed-ml-patterns)](https://github.com/terrytangyuan/distributed-ml-patterns)  - This book teaches you how to take machine learning models from your personal laptop to large distributed clusters. You’ll explore key concepts and patterns behind successful distributed machine learning systems, and learn technologies like TensorFlow, Kubernetes, Kubeflow, and Argo Workflows directly from a key maintainer and contributor, with real-world scenarios and hands-on projects.
* [Grokking Machine Learning](https://www.manning.com/books/grokking-machine-learning) - Grokking Machine Learning teaches you how to apply ML to your projects using only standard Python code and high school-level math.
* [Machine Learning Bookcamp](https://www.manning.com/books/machine-learning-bookcamp) - Learn the essentials of machine learning by completing a carefully designed set of real-world projects.
* [Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow](https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1098125975) - Through a recent series of breakthroughs, deep learning has boosted the entire field of machine learning. Now, even programmers who know close to nothing about this technology can use simple, efficient tools to implement programs capable of learning from data. This bestselling book uses concrete examples, minimal theory, and production-ready Python frameworks (Scikit-Learn, Keras, and TensorFlow) to help you gain an intuitive understanding of the concepts and tools for building intelligent systems.


<a name="credits"></a>
* [Netron](https://netron.app/) - An opensource viewer for neural network, deep learning and machine learning models
* [Teachable Machine](https://teachablemachine.withgoogle.com/) - Train Machine Learning models on the fly to recognize your own images, sounds, & poses.
* [Model Zoo](https://modelzoo.co/) - Discover open source deep learning code and pretrained models.

## Credits

* Some of the python libraries were cut-and-pasted from [vinta ![GitHub Repo Stars](https://img.shields.io/github/stars/vinta/awesome-python) ![GitHub last commit](https://img.shields.io/github/last-commit/vinta/awesome-python)](https://github.com/vinta/awesome-python)
* References for Go were mostly cut-and-pasted from [gopherdata ![GitHub Repo Stars](https://img.shields.io/github/stars/gopherdata/resources) ![GitHub last commit](https://img.shields.io/github/last-commit/gopherdata/resources)](https://github.com/gopherdata/resources/tree/master/tooling)
