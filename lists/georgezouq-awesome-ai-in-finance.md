# Awesome AI in Finance [![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome) [![Community](https://img.shields.io/discord/733027681184251937.svg?style=flat&label=Join%20Community&color=7289DA)](https://discord.gg/cqaUf47)

There are millions of trades made in the global financial market every day. Data grows very quickly and people are hard to understand.
With the power of the latest artificial intelligence research, people analyze & trade automatically and intelligently. This list contains the research, tools and code that people use to beat the market.

[[中文资源](./chinese.md)]

## Contents

- [LLMs](#llms)
- [Papers](#papers)
- [Courses & Books](#courses--books)
- [Strategies & Research](#strategies--research)
  - [Time Series Data](#time-series-data)
  - [Portfolio Management](#portfolio-management)
  - [High Frequency Trading](#high-frequency-trading)
  - [Event Drive](#event-drive)
  - [Crypto Currencies Strategies](#crypto-currencies-strategies)
  - [Technical Analysis](#technical-analysis)
  - [Lottery & Gamble](#lottery--gamble)
  - [Arbitrage](#arbitrage)
- [Data Sources](#data-sources)
- [Research Tools](#research-tools)
- [Trading System](#trading-system)
- [TA Lib](#ta-lib)
- [Exchange API](#exchange-api)
- [Articles](#articles)
- [Others](#others)

## LLMs

- [PIXIU ![GitHub Repo Stars](https://img.shields.io/github/stars/chancefocus/PIXIU) ![GitHub last commit](https://img.shields.io/github/last-commit/chancefocus/PIXIU)](https://github.com/chancefocus/PIXIU) - An open-source resource providing a financial large language model, a dataset with 136K instruction samples, and a comprehensive evaluation benchmark.
- [FinGPT ![GitHub Repo Stars](https://img.shields.io/github/stars/AI4Finance-Foundation/FinGPT) ![GitHub last commit](https://img.shields.io/github/last-commit/AI4Finance-Foundation/FinGPT)](https://github.com/AI4Finance-Foundation/FinGPT) - Provides a playground for all people interested in LLMs and NLP in Finance.
- [MACD + RSI + ADX Strategy (ChatGPT-powered) by TradeSmart](https://www.tradingview.com/script/GxkUyJKW-MACD-RSI-ADX-Strategy-ChatGPT-powered-by-TradeSmart/ ) - Asked ChatGPT on which indicators are the most popular for trading. We used all of the recommendations given.
- [A ChatGPT trading algorithm delivered 500% returns in stock market. My breakdown on what this means for hedge funds and retail investors](https://www.reddit.com/r/ChatGPT/comments/13duech/a_chatgpt_trading_algorithm_delivered_500_returns/)
- [Use chatgpt to adjust strategy parameters](https://twitter.com/0xUnicorn/status/1663413848593031170)
- [Hands-on LLMs: Train and Deploy a Real-time Financial Advisor ![GitHub Repo Stars](https://img.shields.io/github/stars/iusztinpaul/hands-on-llms) ![GitHub last commit](https://img.shields.io/github/last-commit/iusztinpaul/hands-on-llms)](https://github.com/iusztinpaul/hands-on-llms) - Train and deploy a real-time financial advisor chatbot with Falcon 7B and CometLLM.

## Papers

- [The Theory of Speculation L. Bachelier, 1900](http://www.radio.goldseek.com/bachelier-thesis-theory-of-speculation-en.pdf) - The influences which determine the movements of the Stock Exchange are.
- [Brownian Motion in the Stock Market Osborne, 1959](http://m.e-m-h.org/Osbo59.pdf) - The common-stock prices can be regarded as an ensemble of decisions in statistical equilibrium.
- [An Investigation into the Use of Reinforcement Learning Techniques within the Algorithmic Trading Domain, 2015](http://www.doc.ic.ac.uk/teaching/distinguished-projects/2015/j.cumming.pdf)
- [A Deep Reinforcement Learning Framework for the Financial Portfolio Management Problem](https://arxiv.org/pdf/1706.10059.pdf)
- [Reinforcement Learning for Trading, 1994](http://papers.nips.cc/paper/1551-reinforcement-learning-for-trading.pdf)
- [Dragon-Kings, Black Swans and the Prediction of Crises Didier Sornette](https://arxiv.org/pdf/0907.4290.pdf) - The power laws in the distributions of event sizes under a broad range of conditions in a large variety of systems. 
- [Financial Trading as a Game: A Deep Reinforcement Learning Approach](https://arxiv.org/pdf/1807.02787.pdf) - Deep reinforcement learning provides a framework toward end-to-end training of such trading agent.
- [Machine Learning for Trading](https://cims.nyu.edu/~ritter/ritter2017machine.pdf) - With an appropriate choice of the reward function, reinforcement learning techniques can successfully handle the risk-averse case.
- [Ten Financial Applications of Machine Learning, 2018](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3197726) - Slides review few important financial ML applications.
- [FinRL: A Deep Reinforcement Learning Library for Automated Stock Trading in Quantitative Finance, 2020](https://arxiv.org/abs/2011.09607) - Introduce a DRL library FinRL that facilitates beginners to expose themselves to quantitative finance and to develop their own stock trading strategies.
- [Deep Reinforcement Learning for Automated Stock Trading: An Ensemble Strategy, 2020](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3690996) - Propose an ensemble strategy that employs deep reinforcement schemes to learn a stock trading strategy by maximizing investment return.

## Courses & Books & Blogs

- 🌟 [QuantResearch ![GitHub Repo Stars](https://img.shields.io/github/stars/letianzj/QuantResearch) ![GitHub last commit](https://img.shields.io/github/last-commit/letianzj/QuantResearch)](https://github.com/letianzj/QuantResearch) - Quantitative analysis, strategies and backtests https://letianzj.github.io/
- [NYU: Overview of Advanced Methods of Reinforcement Learning in Finance](https://www.coursera.org/learn/advanced-methods-reinforcement-learning-finance/home/welcome)
- [Udacity: Artificial Intelligence for Trading](https://www.udacity.com/course/ai-for-trading--nd880)
- [AI in Finance](https://cfte.education/) - Learn Fintech Online.
- [Advanced-Deep-Trading ![GitHub Repo Stars](https://img.shields.io/github/stars/Rachnog/Advanced-Deep-Trading) ![GitHub last commit](https://img.shields.io/github/last-commit/Rachnog/Advanced-Deep-Trading)](https://github.com/Rachnog/Advanced-Deep-Trading) - Experiments based on "Advances in financial machine learning" book.
- [Advances in Financial Machine Learning](https://www.amazon.com/Advances-Financial-Machine-Learning-Marcos-ebook/dp/B079KLDW21/ref=sr_1_1?s=books&ie=UTF8&qid=1541717436&sr=1-1) - Using advanced ML solutions to overcome real-world investment problems.
- [Mastering Python for Finance ![GitHub Repo Stars](https://img.shields.io/github/stars/jamesmawm/mastering-python-for-finance-second-edition) ![GitHub last commit](https://img.shields.io/github/last-commit/jamesmawm/mastering-python-for-finance-second-edition)](https://github.com/jamesmawm/mastering-python-for-finance-second-edition) - Sources codes for: Mastering Python for Finance, Second Edition.
- [MLSys-NYU-2022 ![GitHub Repo Stars](https://img.shields.io/github/stars/jacopotagliabue/MLSys-NYU-2022) ![GitHub last commit](https://img.shields.io/github/last-commit/jacopotagliabue/MLSys-NYU-2022)](https://github.com/jacopotagliabue/MLSys-NYU-2022/tree/main) - Slides, scripts and materials for the Machine Learning in Finance course at NYU Tandon, 2022.
- [Train and Deploy a Serverless API to predict crypto prices ![GitHub Repo Stars](https://img.shields.io/github/stars/Paulescu/hands-on-train-and-deploy-ml) ![GitHub last commit](https://img.shields.io/github/last-commit/Paulescu/hands-on-train-and-deploy-ml)](https://github.com/Paulescu/hands-on-train-and-deploy-ml) - In this tutorial you won't build an ML system that will make you rich. But you will master the MLOps frameworks and tools you need to build ML systems that, together with tons of experimentation, can take you there.

## Strategies & Research

### Time Series Data

Price and Volume process with Technology Analysis Indices

- 🌟🌟 [stockpredictionai ![GitHub Repo Stars](https://img.shields.io/github/stars/borisbanushev/stockpredictionai) ![GitHub last commit](https://img.shields.io/github/last-commit/borisbanushev/stockpredictionai)](https://github.com/borisbanushev/stockpredictionai) - A complete process for predicting stock price movements.
- 🌟 [Personae ![GitHub Repo Stars](https://img.shields.io/github/stars/Ceruleanacg/Personae) ![GitHub last commit](https://img.shields.io/github/last-commit/Ceruleanacg/Personae)](https://github.com/Ceruleanacg/Personae) - Implements and environment of Deep Reinforcement Learning & Supervised Learning for Quantitative Trading.
- 🌟 [Ensemble-Strategy ![GitHub Repo Stars](https://img.shields.io/github/stars/AI4Finance-LLC/Deep-Reinforcement-Learning-for-Automated-Stock-Trading-Ensemble-Strategy-ICAIF-2020) ![GitHub last commit](https://img.shields.io/github/last-commit/AI4Finance-LLC/Deep-Reinforcement-Learning-for-Automated-Stock-Trading-Ensemble-Strategy-ICAIF-2020)](https://github.com/AI4Finance-LLC/Deep-Reinforcement-Learning-for-Automated-Stock-Trading-Ensemble-Strategy-ICAIF-2020) - Deep Reinforcement Learning for Automated Stock Trading.
- [FinRL ![GitHub Repo Stars](https://img.shields.io/github/stars/AI4Finance-LLC/FinRL-Library) ![GitHub last commit](https://img.shields.io/github/last-commit/AI4Finance-LLC/FinRL-Library)](https://github.com/AI4Finance-LLC/FinRL-Library) - A Deep Reinforcement Learning Library for Automated Stock Trading in Quantitative Finance.
- [AutomatedStockTrading-DeepQ-Learning ![GitHub Repo Stars](https://img.shields.io/github/stars/sachink2010/AutomatedStockTrading-DeepQ-Learning) ![GitHub last commit](https://img.shields.io/github/last-commit/sachink2010/AutomatedStockTrading-DeepQ-Learning)](https://github.com/sachink2010/AutomatedStockTrading-DeepQ-Learning) - Build a Deep Q-learning reinforcement agent model as automated trading robot.
- [tf_deep_rl_trader ![GitHub Repo Stars](https://img.shields.io/github/stars/miroblog/tf_deep_rl_trader) ![GitHub last commit](https://img.shields.io/github/last-commit/miroblog/tf_deep_rl_trader)](https://github.com/miroblog/tf_deep_rl_trader) - Trading environment(OpenAI Gym) + PPO(TensorForce).
- [trading-gym ![GitHub Repo Stars](https://img.shields.io/github/stars/6-Billionaires/trading-gym) ![GitHub last commit](https://img.shields.io/github/last-commit/6-Billionaires/trading-gym)](https://github.com/6-Billionaires/trading-gym) - Trading agent to train with episode of short term trading itself.
- [trading-rl ![GitHub Repo Stars](https://img.shields.io/github/stars/Kostis-S-Z/trading-rl) ![GitHub last commit](https://img.shields.io/github/last-commit/Kostis-S-Z/trading-rl)](https://github.com/Kostis-S-Z/trading-rl) - Deep Reinforcement Learning for Financial Trading using Price Trailing.
- [deep_rl_trader ![GitHub Repo Stars](https://img.shields.io/github/stars/miroblog/deep_rl_trader) ![GitHub last commit](https://img.shields.io/github/last-commit/miroblog/deep_rl_trader)](https://github.com/miroblog/deep_rl_trader) - Trading environment(OpenAI Gym) + DDQN (Keras-RL).
- [Quantitative-Trading ![GitHub Repo Stars](https://img.shields.io/github/stars/Ceruleanacg/Quantitative-Trading) ![GitHub last commit](https://img.shields.io/github/last-commit/Ceruleanacg/Quantitative-Trading)](https://github.com/Ceruleanacg/Quantitative-Trading) - Papers and code implementing Quantitative-Trading.
- [gym-trading ![GitHub Repo Stars](https://img.shields.io/github/stars/hackthemarket/gym-trading) ![GitHub last commit](https://img.shields.io/github/last-commit/hackthemarket/gym-trading)](https://github.com/hackthemarket/gym-trading) - Environment for reinforcement-learning algorithmic trading models.
- [zenbrain ![GitHub Repo Stars](https://img.shields.io/github/stars/carlos8f/zenbrain) ![GitHub last commit](https://img.shields.io/github/last-commit/carlos8f/zenbrain)](https://github.com/carlos8f/zenbrain) - A framework for machine-learning bots.
- [DeepLearningNotes ![GitHub Repo Stars](https://img.shields.io/github/stars/AlphaSmartDog/DeepLearningNotes) ![GitHub last commit](https://img.shields.io/github/last-commit/AlphaSmartDog/DeepLearningNotes)](https://github.com/AlphaSmartDog/DeepLearningNotes) - Machine learning in quant analysis.
- [stock_market_reinforcement_learning ![GitHub Repo Stars](https://img.shields.io/github/stars/kh-kim/stock_market_reinforcement_learning) ![GitHub last commit](https://img.shields.io/github/last-commit/kh-kim/stock_market_reinforcement_learning)](https://github.com/kh-kim/stock_market_reinforcement_learning) - Stock market trading OpenAI Gym environment with Deep Reinforcement Learning using Keras.
- [Chaos Genius ![GitHub Repo Stars](https://img.shields.io/github/stars/chaos-genius/chaos_genius) ![GitHub last commit](https://img.shields.io/github/last-commit/chaos-genius/chaos_genius)](https://github.com/chaos-genius/chaos_genius) - ML powered analytics engine for outlier/anomaly detection and root cause analysis..
- [mlforecast ![GitHub Repo Stars](https://img.shields.io/github/stars/Nixtla/mlforecast) ![GitHub last commit](https://img.shields.io/github/last-commit/Nixtla/mlforecast)](https://github.com/Nixtla/mlforecast) - Scalable machine learning based time series forecasting.

### Portfolio Management

- [Deep-Reinforcement-Stock-Trading ![GitHub Repo Stars](https://img.shields.io/github/stars/Albert-Z-Guo/Deep-Reinforcement-Stock-Trading) ![GitHub last commit](https://img.shields.io/github/last-commit/Albert-Z-Guo/Deep-Reinforcement-Stock-Trading)](https://github.com/Albert-Z-Guo/Deep-Reinforcement-Stock-Trading) - A light-weight deep reinforcement learning framework for portfolio management.
- [qtrader ![GitHub Repo Stars](https://img.shields.io/github/stars/filangel/qtrader) ![GitHub last commit](https://img.shields.io/github/last-commit/filangel/qtrader)](https://github.com/filangel/qtrader) - Reinforcement Learning for portfolio management.
- [PGPortfolio ![GitHub Repo Stars](https://img.shields.io/github/stars/ZhengyaoJiang/PGPortfolio) ![GitHub last commit](https://img.shields.io/github/last-commit/ZhengyaoJiang/PGPortfolio)](https://github.com/ZhengyaoJiang/PGPortfolio) - A Deep Reinforcement Learning framework for the financial portfolio management problem.
- [DeepDow ![GitHub Repo Stars](https://img.shields.io/github/stars/jankrepl/deepdow) ![GitHub last commit](https://img.shields.io/github/last-commit/jankrepl/deepdow)](https://github.com/jankrepl/deepdow) - Portfolio optimization with deep learning.

### High Frequency Trading

- [High-Frequency-Trading-Model-with-IB ![GitHub Repo Stars](https://img.shields.io/github/stars/jamesmawm/High-Frequency-Trading-Model-with-IB) ![GitHub last commit](https://img.shields.io/github/last-commit/jamesmawm/High-Frequency-Trading-Model-with-IB)](https://github.com/jamesmawm/High-Frequency-Trading-Model-with-IB) - A high-frequency trading model using Interactive Brokers API with pairs and mean-reversion.
- 🌟 [SGX-Full-OrderBook-Tick-Data-Trading-Strategy ![GitHub Repo Stars](https://img.shields.io/github/stars/rorysroes/SGX-Full-OrderBook-Tick-Data-Trading-Strategy) ![GitHub last commit](https://img.shields.io/github/last-commit/rorysroes/SGX-Full-OrderBook-Tick-Data-Trading-Strategy)](https://github.com/rorysroes/SGX-Full-OrderBook-Tick-Data-Trading-Strategy) - Solutions for high-frequency trading (HFT) strategies using data science approaches (Machine Learning) on Full Orderbook Tick Data.
- [HFT_Bitcoin ![GitHub Repo Stars](https://img.shields.io/github/stars/ghgr/HFT_Bitcoin) ![GitHub last commit](https://img.shields.io/github/last-commit/ghgr/HFT_Bitcoin)](https://github.com/ghgr/HFT_Bitcoin) - Analysis of High Frequency Trading on Bitcoin exchanges.

### Event Drive

- 🌟🌟 [stockpredictionai ![GitHub Repo Stars](https://img.shields.io/github/stars/borisbanushev/stockpredictionai) ![GitHub last commit](https://img.shields.io/github/last-commit/borisbanushev/stockpredictionai)](https://github.com/borisbanushev/stockpredictionai) - Complete process for predicting stock price movements.
- 🌟 [trump2cash ![GitHub Repo Stars](https://img.shields.io/github/stars/maxbbraun/trump2cash) ![GitHub last commit](https://img.shields.io/github/last-commit/maxbbraun/trump2cash)](https://github.com/maxbbraun/trump2cash) - A stock trading bot powered by Trump tweets.

### Crypto Currencies Strategies

- [LSTM-Crypto-Price-Prediction ![GitHub Repo Stars](https://img.shields.io/github/stars/SC4RECOIN/LSTM-Crypto-Price-Prediction) ![GitHub last commit](https://img.shields.io/github/last-commit/SC4RECOIN/LSTM-Crypto-Price-Prediction)](https://github.com/SC4RECOIN/LSTM-Crypto-Price-Prediction) - Predicting price trends in crypto markets using an LSTM-RNN for trading.
- [tforce_btc_trader ![GitHub Repo Stars](https://img.shields.io/github/stars/lefnire/tforce_btc_trader) ![GitHub last commit](https://img.shields.io/github/last-commit/lefnire/tforce_btc_trader)](https://github.com/lefnire/tforce_btc_trader) - TensorForce Bitcoin trading bot.
- [Tensorflow-NeuroEvolution-Trading-Bot ![GitHub Repo Stars](https://img.shields.io/github/stars/SC4RECOIN/Tensorflow-NeuroEvolution-Trading-Bot) ![GitHub last commit](https://img.shields.io/github/last-commit/SC4RECOIN/Tensorflow-NeuroEvolution-Trading-Bot)](https://github.com/SC4RECOIN/Tensorflow-NeuroEvolution-Trading-Bot) - A population model that trade cyrpto and breed and mutate iteratively.
- [gekkoga ![GitHub Repo Stars](https://img.shields.io/github/stars/gekkowarez/gekkoga) ![GitHub last commit](https://img.shields.io/github/last-commit/gekkowarez/gekkoga)](https://github.com/gekkowarez/gekkoga) - Genetic algorithm for solving optimization of trading strategies using Gekko.
- [Gekko_ANN_Strategies ![GitHub Repo Stars](https://img.shields.io/github/stars/markchen8717/Gekko_ANN_Strategies) ![GitHub last commit](https://img.shields.io/github/last-commit/markchen8717/Gekko_ANN_Strategies)](https://github.com/markchen8717/Gekko_ANN_Strategies) - ANN trading strategies for the Gekko trading bot.
- [gekko-neuralnet ![GitHub Repo Stars](https://img.shields.io/github/stars/zschro/gekko-neuralnet) ![GitHub last commit](https://img.shields.io/github/last-commit/zschro/gekko-neuralnet)](https://github.com/zschro/gekko-neuralnet) - Neural network strategy for Gekko.
- [bitcoin_prediction ![GitHub Repo Stars](https://img.shields.io/github/stars/llSourcell/bitcoin_prediction) ![GitHub last commit](https://img.shields.io/github/last-commit/llSourcell/bitcoin_prediction)](https://github.com/llSourcell/bitcoin_prediction) - Code for "Bitcoin Prediction" by Siraj Raval on YouTube.

### Technical Analysis

- [quant-trading ![GitHub Repo Stars](https://img.shields.io/github/stars/je-suis-tm/quant-trading) ![GitHub last commit](https://img.shields.io/github/last-commit/je-suis-tm/quant-trading)](https://github.com/je-suis-tm/quant-trading) - Python quantitative trading strategies.
- [Gekko-Bot-Resources ![GitHub Repo Stars](https://img.shields.io/github/stars/cloggy45/Gekko-Bot-Resources) ![GitHub last commit](https://img.shields.io/github/last-commit/cloggy45/Gekko-Bot-Resources)](https://github.com/cloggy45/Gekko-Bot-Resources) - Gekko bot resources.
- [gekko_tools ![GitHub Repo Stars](https://img.shields.io/github/stars/tommiehansen/gekko_tools) ![GitHub last commit](https://img.shields.io/github/last-commit/tommiehansen/gekko_tools)](https://github.com/tommiehansen/gekko_tools) - Gekko strategies, tools etc.
- [gekko RSI_WR ![GitHub Repo Stars](https://img.shields.io/github/stars/zzmike76/gekko) ![GitHub last commit](https://img.shields.io/github/last-commit/zzmike76/gekko)](https://github.com/zzmike76/gekko) - Gekko RSI_WR strategies.
- [gekko HL ![GitHub Repo Stars](https://img.shields.io/github/stars/mounirlabaied/gekko-strat-hl) ![GitHub last commit](https://img.shields.io/github/last-commit/mounirlabaied/gekko-strat-hl)](https://github.com/mounirlabaied/gekko-strat-hl) - Calculate down peak and trade on.
- [EthTradingAlgorithm ![GitHub Repo Stars](https://img.shields.io/github/stars/Philipid3s/EthTradingAlgorithm) ![GitHub last commit](https://img.shields.io/github/last-commit/Philipid3s/EthTradingAlgorithm)](https://github.com/Philipid3s/EthTradingAlgorithm) - Ethereum trading algorithm using Python 3.5 and the library ZipLine.
- [gekko_trading_stuff ![GitHub Repo Stars](https://img.shields.io/github/stars/thegamecat/gekko-trading-stuff) ![GitHub last commit](https://img.shields.io/github/last-commit/thegamecat/gekko-trading-stuff)](https://github.com/thegamecat/gekko-trading-stuff) - Awesome crypto currency trading platform.
- [forex.analytics ![GitHub Repo Stars](https://img.shields.io/github/stars/mkmarek/forex.analytics) ![GitHub last commit](https://img.shields.io/github/last-commit/mkmarek/forex.analytics)](https://github.com/mkmarek/forex.analytics) - Node.js native library performing technical analysis over an OHLC dataset with use of genetic algorithmv.
- [Bitcoin_MACD_Strategy ![GitHub Repo Stars](https://img.shields.io/github/stars/VermeirJellen/Bitcoin_MACD_Strategy) ![GitHub last commit](https://img.shields.io/github/last-commit/VermeirJellen/Bitcoin_MACD_Strategy)](https://github.com/VermeirJellen/Bitcoin_MACD_Strategy) - Bitcoin MACD crossover trading strategy backtest.
- [crypto-signal ![GitHub Repo Stars](https://img.shields.io/github/stars/CryptoSignal/crypto-signal) ![GitHub last commit](https://img.shields.io/github/last-commit/CryptoSignal/crypto-signal)](https://github.com/CryptoSignal/crypto-signal) - Automated crypto trading & technical analysis (TA) bot for Bittrex, Binance, GDAX, and more.
- [Gekko-Strategies ![GitHub Repo Stars](https://img.shields.io/github/stars/xFFFFF/Gekko-Strategies) ![GitHub last commit](https://img.shields.io/github/last-commit/xFFFFF/Gekko-Strategies)](https://github.com/xFFFFF/Gekko-Strategies) - Strategies to Gekko trading bot with backtests results and some useful tools.
- [gekko-gannswing ![GitHub Repo Stars](https://img.shields.io/github/stars/johndoe75/gekko-gannswing) ![GitHub last commit](https://img.shields.io/github/last-commit/johndoe75/gekko-gannswing)](https://github.com/johndoe75/gekko-gannswing) - Gann's Swing trade strategy for Gekko trade bot.

### Lottery & Gamble

- [LotteryPredict ![GitHub Repo Stars](https://img.shields.io/github/stars/chengstone/LotteryPredict) ![GitHub last commit](https://img.shields.io/github/last-commit/chengstone/LotteryPredict)](https://github.com/chengstone/LotteryPredict) - Use LSTM to predict lottery.

### Arbitrage

- [ArbitrageBot ![GitHub Repo Stars](https://img.shields.io/github/stars/BatuhanUsluel/ArbitrageBot) ![GitHub last commit](https://img.shields.io/github/last-commit/BatuhanUsluel/ArbitrageBot)](https://github.com/BatuhanUsluel/ArbitrageBot) - Arbitrage bot that currently works on bittrex & poloniex.
- [r2 ![GitHub Repo Stars](https://img.shields.io/github/stars/bitrinjani/r2) ![GitHub last commit](https://img.shields.io/github/last-commit/bitrinjani/r2)](https://github.com/bitrinjani/r2) - Automatic arbitrage trading system powered by Node.js + TypeScript.
- [cryptocurrency-arbitrage ![GitHub Repo Stars](https://img.shields.io/github/stars/manu354/cryptocurrency-arbitrage) ![GitHub last commit](https://img.shields.io/github/last-commit/manu354/cryptocurrency-arbitrage)](https://github.com/manu354/cryptocurrency-arbitrage) - A crypto currency arbitrage opportunity calculator. Over 800 currencies and 50 markets.
- [bitcoin-arbitrage ![GitHub Repo Stars](https://img.shields.io/github/stars/maxme/bitcoin-arbitrage) ![GitHub last commit](https://img.shields.io/github/last-commit/maxme/bitcoin-arbitrage)](https://github.com/maxme/bitcoin-arbitrage) - Bitcoin arbitrage opportunity detector.
- [blackbird ![GitHub Repo Stars](https://img.shields.io/github/stars/butor/blackbird) ![GitHub last commit](https://img.shields.io/github/last-commit/butor/blackbird)](https://github.com/butor/blackbird) - Long / short market-neutral strategy.

## Data Sources

#### Traditional Markets

- 🌟 [Quandl](https://www.quandl.com/tools/api) - Get millions of financial and economic dataset from hundreds of publishers via a single free API.
- [yahoo-finance ![GitHub Repo Stars](https://img.shields.io/github/stars/lukaszbanasiak/yahoo-finance) ![GitHub last commit](https://img.shields.io/github/last-commit/lukaszbanasiak/yahoo-finance)](https://github.com/lukaszbanasiak/yahoo-finance) - Python module to get stock data from Yahoo! Finance.
- [Tushare ![GitHub Repo Stars](https://img.shields.io/github/stars/waditu/tushare) ![GitHub last commit](https://img.shields.io/github/last-commit/waditu/tushare)](https://github.com/waditu/tushare) - Crawling historical data of Chinese stocks.

#### Crypto Currencies

- [CryptoInscriber ![GitHub Repo Stars](https://img.shields.io/github/stars/Optixal/CryptoInscriber) ![GitHub last commit](https://img.shields.io/github/last-commit/Optixal/CryptoInscriber)](https://github.com/Optixal/CryptoInscriber) - A live crypto currency historical trade data blotter. Download live historical trade data from any crypto exchange.
- [Gekko-Datasets ![GitHub Repo Stars](https://img.shields.io/github/stars/xFFFFF/Gekko-Datasets) ![GitHub last commit](https://img.shields.io/github/last-commit/xFFFFF/Gekko-Datasets)](https://github.com/xFFFFF/Gekko-Datasets) - Gekko trading bot dataset dumps. Download and use history files in SQLite format.

## Research Tools

- [Synthical](https://synthical.com) - AI-powered collaborative environment for Research.
- 🌟🌟 [TensorTrade ![GitHub Repo Stars](https://img.shields.io/github/stars/tensortrade-org/tensortrade) ![GitHub last commit](https://img.shields.io/github/last-commit/tensortrade-org/tensortrade)](https://github.com/tensortrade-org/tensortrade) - Trade efficiently with reinforcement learning.
- [ML-Quant](https://www.ml-quant.com/) - Quant resources from ArXiv (sanity), SSRN, RePec, Journals, Podcasts, Videos, and Blogs.
- [JAQS ![GitHub Repo Stars](https://img.shields.io/github/stars/quantOS-org/JAQS) ![GitHub last commit](https://img.shields.io/github/last-commit/quantOS-org/JAQS)](https://github.com/quantOS-org/JAQS) - An open source quant strategies research platform.
- [pyfolio ![GitHub Repo Stars](https://img.shields.io/github/stars/quantopian/pyfolio) ![GitHub last commit](https://img.shields.io/github/last-commit/quantopian/pyfolio)](https://github.com/quantopian/pyfolio) - Portfolio and risk analytics in Python.
- [alphalens ![GitHub Repo Stars](https://img.shields.io/github/stars/quantopian/alphalens) ![GitHub last commit](https://img.shields.io/github/last-commit/quantopian/alphalens)](https://github.com/quantopian/alphalens) - Performance analysis of predictive (alpha) stock factors.
- [empyrical ![GitHub Repo Stars](https://img.shields.io/github/stars/quantopian/empyrical) ![GitHub last commit](https://img.shields.io/github/last-commit/quantopian/empyrical)](https://github.com/quantopian/empyrical) - Common financial risk and performance metrics. Used by Zipline and pyfolio.
- [zvt ![GitHub Repo Stars](https://img.shields.io/github/stars/zvtvz/zvt) ![GitHub last commit](https://img.shields.io/github/last-commit/zvtvz/zvt)](https://github.com/zvtvz/zvt) - Zero vector trader.

## Trading System

For Back Test & Live trading

### Traditional Market

**System**

- 🌟🌟 [zipline ![GitHub Repo Stars](https://img.shields.io/github/stars/quantopian/zipline) ![GitHub last commit](https://img.shields.io/github/last-commit/quantopian/zipline)](https://github.com/quantopian/zipline) - A python algorithmic trading library.
- 🌟 [TradingView](http://tradingview.com/) - Get real-time information and market insights.
- [rqalpha ![GitHub Repo Stars](https://img.shields.io/github/stars/ricequant/rqalpha) ![GitHub last commit](https://img.shields.io/github/last-commit/ricequant/rqalpha)](https://github.com/ricequant/rqalpha) - A extendable, replaceable Python algorithmic backtest & trading framework.
- [backtrader ![GitHub Repo Stars](https://img.shields.io/github/stars/backtrader/backtrader) ![GitHub last commit](https://img.shields.io/github/last-commit/backtrader/backtrader)](https://github.com/backtrader/backtrader) - Python backtesting library for trading strategies.
- [kungfu ![GitHub Repo Stars](https://img.shields.io/github/stars/taurusai/kungfu) ![GitHub last commit](https://img.shields.io/github/last-commit/taurusai/kungfu)](https://github.com/taurusai/kungfu) - Kungfu Master trading system.
- [lean ![GitHub Repo Stars](https://img.shields.io/github/stars/QuantConnect/Lean) ![GitHub last commit](https://img.shields.io/github/last-commit/QuantConnect/Lean)](https://github.com/QuantConnect/Lean) - Algorithmic trading engine built for easy strategy research, backtesting and live trading.

**Combine & Rebuild**

- [pylivetrader ![GitHub Repo Stars](https://img.shields.io/github/stars/alpacahq/pylivetrader) ![GitHub last commit](https://img.shields.io/github/last-commit/alpacahq/pylivetrader)](https://github.com/alpacahq/pylivetrader) - Python live trade execution library with zipline interface.
- [CoinMarketCapBacktesting ![GitHub Repo Stars](https://img.shields.io/github/stars/JimmyWuMadchester/CoinMarketCapBacktesting) ![GitHub last commit](https://img.shields.io/github/last-commit/JimmyWuMadchester/CoinMarketCapBacktesting)](https://github.com/JimmyWuMadchester/CoinMarketCapBacktesting) - As backtest frameworks for coin trading strategy.

### Crypto Currencies

- [zenbot ![GitHub Repo Stars](https://img.shields.io/github/stars/DeviaVir/zenbot) ![GitHub last commit](https://img.shields.io/github/last-commit/DeviaVir/zenbot)](https://github.com/DeviaVir/zenbot) - Command-line crypto currency trading bot using Node.js and MongoDB.
- [bot18 ![GitHub Repo Stars](https://img.shields.io/github/stars/carlos8f/bot18) ![GitHub last commit](https://img.shields.io/github/last-commit/carlos8f/bot18)](https://github.com/carlos8f/bot18) - High-frequency crypto currency trading bot developed by Zenbot.
- [magic8bot ![GitHub Repo Stars](https://img.shields.io/github/stars/magic8bot/magic8bot) ![GitHub last commit](https://img.shields.io/github/last-commit/magic8bot/magic8bot)](https://github.com/magic8bot/magic8bot) - Crypto currency trading bot using Node.js and MongoDB.
- [catalyst ![GitHub Repo Stars](https://img.shields.io/github/stars/enigmampc/catalyst) ![GitHub last commit](https://img.shields.io/github/last-commit/enigmampc/catalyst)](https://github.com/enigmampc/catalyst) - An algorithmic trading library for Crypto-Assets in python.
- [QuantResearchDev ![GitHub Repo Stars](https://img.shields.io/github/stars/mounirlabaied/QuantResearchDev) ![GitHub last commit](https://img.shields.io/github/last-commit/mounirlabaied/QuantResearchDev)](https://github.com/mounirlabaied/QuantResearchDev) - Quant Research dev & Traders open source project.
- [MACD ![GitHub Repo Stars](https://img.shields.io/github/stars/sudoscripter/MACD) ![GitHub last commit](https://img.shields.io/github/last-commit/sudoscripter/MACD)](https://github.com/sudoscripter/MACD) - Zenbot MACD Auto-Trader.
- [abu ![GitHub Repo Stars](https://img.shields.io/github/stars/bbfamily/abu) ![GitHub last commit](https://img.shields.io/github/last-commit/bbfamily/abu)](https://github.com/bbfamily/abu) - A quant trading system base on python.

#### Plugins

- [CoinMarketCapBacktesting ![GitHub Repo Stars](https://img.shields.io/github/stars/JimmyWuMadchester/CoinMarketCapBacktesting) ![GitHub last commit](https://img.shields.io/github/last-commit/JimmyWuMadchester/CoinMarketCapBacktesting)](https://github.com/JimmyWuMadchester/CoinMarketCapBacktesting) - Tests bt and Quantopian Zipline as backtesting frameworks for coin trading strategy.
- [Gekko-BacktestTool ![GitHub Repo Stars](https://img.shields.io/github/stars/xFFFFF/Gekko-BacktestTool) ![GitHub last commit](https://img.shields.io/github/last-commit/xFFFFF/Gekko-BacktestTool)](https://github.com/xFFFFF/Gekko-BacktestTool) - Batch backtest, import and strategy params optimalization for Gekko Trading Bot.

## TA Lib

- [pandas_talib ![GitHub Repo Stars](https://img.shields.io/github/stars/femtotrader/pandas_talib) ![GitHub last commit](https://img.shields.io/github/last-commit/femtotrader/pandas_talib)](https://github.com/femtotrader/pandas_talib) - A Python Pandas implementation of technical analysis indicators.
- [finta ![GitHub Repo Stars](https://img.shields.io/github/stars/peerchemist/finta) ![GitHub last commit](https://img.shields.io/github/last-commit/peerchemist/finta)](https://github.com/peerchemist/finta) - Common financial technical indicators implemented in Python-Pandas (70+ indicators).
- [tulipnode ![GitHub Repo Stars](https://img.shields.io/github/stars/TulipCharts/tulipnode) ![GitHub last commit](https://img.shields.io/github/last-commit/TulipCharts/tulipnode)](https://github.com/TulipCharts/tulipnode) - Official Node.js wrapper for Tulip Indicators. Provides over 100 technical analysis overlay and indicator functions.
- [techan.js ![GitHub Repo Stars](https://img.shields.io/github/stars/andredumas/techan.js) ![GitHub last commit](https://img.shields.io/github/last-commit/andredumas/techan.js)](https://github.com/andredumas/techan.js) - A visual, technical analysis and charting (Candlestick, OHLC, indicators) library built on D3.

## Exchange API

Do it in real world!

- [IbPy ![GitHub Repo Stars](https://img.shields.io/github/stars/blampe/IbPy) ![GitHub last commit](https://img.shields.io/github/last-commit/blampe/IbPy)](https://github.com/blampe/IbPy) - Python API for the Interactive Brokers on-line trading system.
- [HuobiFeeder ![GitHub Repo Stars](https://img.shields.io/github/stars/mmmaaaggg/HuobiFeeder) ![GitHub last commit](https://img.shields.io/github/last-commit/mmmaaaggg/HuobiFeeder)](https://github.com/mmmaaaggg/HuobiFeeder) - Connect HUOBIPRO exchange, get market/historical data for ABAT trading platform backtest analysis and live trading.
- [ctpwrapper ![GitHub Repo Stars](https://img.shields.io/github/stars/nooperpudd/ctpwrapper) ![GitHub last commit](https://img.shields.io/github/last-commit/nooperpudd/ctpwrapper)](https://github.com/nooperpudd/ctpwrapper) - Shanghai future exchange CTP api.
- [PENDAX ![GitHub Repo Stars](https://img.shields.io/github/stars/CompendiumFi/PENDAX-SDK) ![GitHub last commit](https://img.shields.io/github/last-commit/CompendiumFi/PENDAX-SDK)](https://github.com/CompendiumFi/PENDAX-SDK) - Javascript SDK for Trading/Data API and Websockets for cryptocurrency exchanges like FTX, FTXUS, OKX, Bybit, & More

### Framework

- [tf-quant-finance ![GitHub Repo Stars](https://img.shields.io/github/stars/google/tf-quant-finance) ![GitHub last commit](https://img.shields.io/github/last-commit/google/tf-quant-finance)](https://github.com/google/tf-quant-finance) - High-performance TensorFlow library for quantitative finance.

### Visualizing

- [playground ![GitHub Repo Stars](https://img.shields.io/github/stars/tensorflow/playground) ![GitHub last commit](https://img.shields.io/github/last-commit/tensorflow/playground)](https://github.com/tensorflow/playground) - Play with neural networks.
- [netron ![GitHub Repo Stars](https://img.shields.io/github/stars/lutzroeder/netron) ![GitHub last commit](https://img.shields.io/github/last-commit/lutzroeder/netron)](https://github.com/lutzroeder/netron) - Visualizer for deep learning and machine learning models.
- [KLineChart ![GitHub Repo Stars](https://img.shields.io/github/stars/liihuu/KLineChart) ![GitHub last commit](https://img.shields.io/github/last-commit/liihuu/KLineChart)](https://github.com/liihuu/KLineChart) - Highly customizable professional lightweight financial charts

### GYM Environment

- 🌟 [TradingGym ![GitHub Repo Stars](https://img.shields.io/github/stars/Yvictor/TradingGym) ![GitHub last commit](https://img.shields.io/github/last-commit/Yvictor/TradingGym)](https://github.com/Yvictor/TradingGym) - Trading and Backtesting environment for training reinforcement learning agent.
- [TradzQAI ![GitHub Repo Stars](https://img.shields.io/github/stars/kkuette/TradzQAI) ![GitHub last commit](https://img.shields.io/github/last-commit/kkuette/TradzQAI)](https://github.com/kkuette/TradzQAI) - Trading environment for RL agents, backtesting and training.
- [btgym ![GitHub Repo Stars](https://img.shields.io/github/stars/Kismuz/btgym) ![GitHub last commit](https://img.shields.io/github/last-commit/Kismuz/btgym)](https://github.com/Kismuz/btgym) - Scalable, event-driven, deep-learning-friendly backtesting library.

## Articles

- [The-Economist ![GitHub Repo Stars](https://img.shields.io/github/stars/nailperry-zd/The-Economist) ![GitHub last commit](https://img.shields.io/github/last-commit/nailperry-zd/The-Economist)](https://github.com/nailperry-zd/The-Economist) - The Economist.
- [nyu-mlif-notes ![GitHub Repo Stars](https://img.shields.io/github/stars/wizardforcel/nyu-mlif-notes) ![GitHub last commit](https://img.shields.io/github/last-commit/wizardforcel/nyu-mlif-notes)](https://github.com/wizardforcel/nyu-mlif-notes) - NYU machine learning in finance notes.
- [Using LSTMs to Turn Feelings Into Trades](https://www.quantopian.com/posts/watch-our-webinar-buying-happiness-using-lstms-to-turn-feelings-into-trades-now?utm_source=forum&utm_medium=twitter&utm_campaign=sentiment-analysis)

## Others

- [zipline-tensorboard ![GitHub Repo Stars](https://img.shields.io/github/stars/jimgoo/zipline-tensorboard) ![GitHub last commit](https://img.shields.io/github/last-commit/jimgoo/zipline-tensorboard)](https://github.com/jimgoo/zipline-tensorboard) - TensorBoard as a Zipline dashboard.
- [gekko-quasar-ui ![GitHub Repo Stars](https://img.shields.io/github/stars/H256/gekko-quasar-ui) ![GitHub last commit](https://img.shields.io/github/last-commit/H256/gekko-quasar-ui)](https://github.com/H256/gekko-quasar-ui) - An UI port for gekko trading bot using Quasar framework.

#### Other Resource

- 🌟🌟🌟 [Stock-Prediction-Models ![GitHub Repo Stars](https://img.shields.io/github/stars/huseinzol05/Stock-Prediction-Models) ![GitHub last commit](https://img.shields.io/github/last-commit/huseinzol05/Stock-Prediction-Models)](https://github.com/huseinzol05/Stock-Prediction-Models) - Stock-Prediction-Models, Gathers machine learning and deep learning models for Stock forecasting, included trading bots and simulations.
- 🌟🌟 [Financial Machine Learning ![GitHub Repo Stars](https://img.shields.io/github/stars/firmai/financial-machine-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/firmai/financial-machine-learning)](https://github.com/firmai/financial-machine-learning) - A curated list of practical financial machine learning (FinML) tools and applications. This collection is primarily in Python.
- 🌟 [Awesome-Quant-Machine-Learning-Trading ![GitHub Repo Stars](https://img.shields.io/github/stars/grananqvist/Awesome-Quant-Machine-Learning-Trading) ![GitHub last commit](https://img.shields.io/github/last-commit/grananqvist/Awesome-Quant-Machine-Learning-Trading)](https://github.com/grananqvist/Awesome-Quant-Machine-Learning-Trading) - Quant / Algorithm trading resources with an emphasis on Machine Learning.
- [awesome-quant ![GitHub Repo Stars](https://img.shields.io/github/stars/wilsonfreitas/awesome-quant) ![GitHub last commit](https://img.shields.io/github/last-commit/wilsonfreitas/awesome-quant)](https://github.com/wilsonfreitas/awesome-quant) - A curated list of insanely awesome libraries, packages and resources for Quants (Quantitative Finance).
- [FinancePy ![GitHub Repo Stars](https://img.shields.io/github/stars/domokane/FinancePy) ![GitHub last commit](https://img.shields.io/github/last-commit/domokane/FinancePy)](https://github.com/domokane/FinancePy) - A Python Finance Library that focuses on the pricing and risk-management of Financial Derivatives, including fixed-income, equity, FX and credit derivatives.
- [Explore Finance Service Libraries & Projects](https://kandi.openweaver.com/explore/financial-services#Top-Authors) - Explore a curated list of Fintech popular & new libraries, top authors, trending project kits, discussions, tutorials & learning resources on kandi.
