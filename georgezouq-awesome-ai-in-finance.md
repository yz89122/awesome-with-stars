<div align="center">
	<img width="500" height="350" src="https://github.com/georgezouq/awesome-ai-in-finance/raw/master/media/logo.svg" alt="Awesome">
	<br>
  <p>
    <a href="https://github.com/georgezouq/awesome-deep-reinforcement-learning-in-finance">DL/RL/SL Strategies Research & Tools in Quantitative Finance</a>
  </p>
</div>

# Awesome AI in Finance

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

Machine learning algorithm and useful tools use in financial market. 

We collect all market include traditional market like `stock/futures/currencies` and crypto currency markets.

> We're right 50.75 percent of the time, but we're 100 percent right 50.75 percent of the time, you can make billions that way.
>       --- Robert Mercer, co-CEO of Renaissance Technologies


## Contents

- [Papers](#papers)
- [Courses & Book](#courses--book)
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

## Papers

- [THE THEORY OF SPECULATION L. BACHELIER 1900](http://www.radio.goldseek.com/bachelier-thesis-theory-of-speculation-en.pdf) - The influences which determine the movements of the Stock Exchange are.
- [Brownian Motion in the Stock Market Osborne,1959](http://m.e-m-h.org/Osbo59.pdf) - Events past, present or even anticipated, often showing no apparent.
- [An Investigation into the Use of Reinforcement Learning Techniques within the Algorithmic Trading Domain(2015)](http://www.doc.ic.ac.uk/teaching/distinguished-projects/2015/j.cumming.pdf)
- [Ten Financial Applications of Machine Learning (Presentation Slides)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3197726)
- [A Deep Reinforcement Learning Framework for the Financial Portfolio Management Problem](https://arxiv.org/pdf/1706.10059.pdf)
- [Reinforcement Learning for Trading 1994](http://papers.nips.cc/paper/1551-reinforcement-learning-for-trading.pdf)
- [Dragon-Kings, Black Swans and the Prediction of Crises Didier Sornette](https://arxiv.org/pdf/0907.4290.pdf) - We develop the concept of “dragon-kings” corresponding to meaningful outliers, which are found to coexist with power laws in the distributions of event sizes under a broad range of conditions in a large variety of systems. 
- [Financial Trading as a Game: A Deep Reinforcement Learning Approach](https://arxiv.org/pdf/1807.02787.pdf) - An automatic program that generates constant profit from the financial market is lucrative for every market practitioner. Recent advance in deep reinforcement learning provides a framework toward end-to-end training of such trading agent.
- [MACHINE LEARNING FOR TRADING](https://cims.nyu.edu/~ritter/ritter2017machine.pdf) - With an appropriate choice of the reward function, reinforcement learning techniques (specifically, Q-learning) can successfully handle the risk-averse case.
- [Ten Financial Applications of Machine Learning (Seminar Slides) (2018)](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3197726)

## Courses & Book

- [NYU: Overview of Advanced Methods of Reinforcement Learning in Finance](https://www.coursera.org/learn/advanced-methods-reinforcement-learning-finance/home/welcome)
- [Udacity: Artificial Intelligence for Trading](https://www.udacity.com/course/ai-for-trading--nd880)
- [AI in Finance](https://cfte.education/) - Learn Fintech Online.
- [Advanced-Deep-Trading ![GitHub Repo stars](https://img.shields.io/github/stars/Rachnog/Advanced-Deep-Trading) ![GitHub last commit](https://img.shields.io/github/last-commit/Rachnog/Advanced-Deep-Trading)](https://github.com/Rachnog/Advanced-Deep-Trading) - Mostly experiments based on "Advances in financial machine learning" book.
- [Advances in Financial Machine Learning](https://www.amazon.com/Advances-Financial-Machine-Learning-Marcos-ebook/dp/B079KLDW21/ref=sr_1_1?s=books&ie=UTF8&qid=1541717436&sr=1-1) - Readers will learn how to structure Big data in a way that is amenable to ML algorithms; how to conduct research with ML algorithms on that data; how to use supercomputing methods.

## Strategies & Research

### Time Series Data

Price and Volume process with Technology Analysis Indices

- 🌟🌟 [stockpredictionai ![GitHub Repo stars](https://img.shields.io/github/stars/borisbanushev/stockpredictionai) ![GitHub last commit](https://img.shields.io/github/last-commit/borisbanushev/stockpredictionai)](https://github.com/borisbanushev/stockpredictionai) - In this noteboook I will create a complete process for predicting stock price movements. Follow along and we will achieve some pretty good results. For that purpose we will use a Generative Adversarial Network (GAN) with LSTM, a type of Recurrent Neural Network, as generator, and a Convolutional Neural Network, CNN, as a discriminator.
- 🌟 [Personae ![GitHub Repo stars](https://img.shields.io/github/stars/Ceruleanacg/Personae) ![GitHub last commit](https://img.shields.io/github/last-commit/Ceruleanacg/Personae)](https://github.com/Ceruleanacg/Personae) - Personae is a repo of implements and environment of Deep Reinforcement Learning & Supervised Learning for Quantitative Trading.
- [AutomatedStockTrading-DeepQ-Learning ![GitHub Repo stars](https://img.shields.io/github/stars/sachink2010/AutomatedStockTrading-DeepQ-Learning) ![GitHub last commit](https://img.shields.io/github/last-commit/sachink2010/AutomatedStockTrading-DeepQ-Learning)](https://github.com/sachink2010/AutomatedStockTrading-DeepQ-Learning) - Every day, millions of traders around the world are trying to make money by trading stocks. These days, physical traders are also being replaced by automated trading robots. Algorithmic trading market has experienced significant growth rate and large number of firms are using it. I have tried to build a Deep Q-learning reinforcement agent model.
- [tf_deep_rl_trader ![GitHub Repo stars](https://img.shields.io/github/stars/miroblog/tf_deep_rl_trader) ![GitHub last commit](https://img.shields.io/github/last-commit/miroblog/tf_deep_rl_trader)](https://github.com/miroblog/tf_deep_rl_trader) - Trading Environment(OpenAI Gym) + PPO(TensorForce).
- [trading-gym ![GitHub Repo stars](https://img.shields.io/github/stars/6-Billionaires/trading-gym) ![GitHub last commit](https://img.shields.io/github/last-commit/6-Billionaires/trading-gym)](https://github.com/6-Billionaires/trading-gym) - This trading-gym is the first trading for agent to train with episode of short term trading itself.
- [trading-rl ![GitHub Repo stars](https://img.shields.io/github/stars/Kostis-S-Z/trading-rl) ![GitHub last commit](https://img.shields.io/github/last-commit/Kostis-S-Z/trading-rl)](https://github.com/Kostis-S-Z/trading-rl) - Deep Reinforcement Learning for Financial Trading using Price Trailing.
- [deep_rl_trader ![GitHub Repo stars](https://img.shields.io/github/stars/miroblog/deep_rl_trader) ![GitHub last commit](https://img.shields.io/github/last-commit/miroblog/deep_rl_trader)](https://github.com/miroblog/deep_rl_trader) - Trading Environment(OpenAI Gym) + DDQN (Keras-RL).
- 🌟 [RL-Stock ![GitHub Repo stars](https://img.shields.io/github/stars/wangshub/RL-Stock) ![GitHub last commit](https://img.shields.io/github/last-commit/wangshub/RL-Stock)](https://github.com/wangshub/RL-Stock) - 如何用深度强化学习自动炒股.
- [Quantitative-Trading ![GitHub Repo stars](https://img.shields.io/github/stars/Ceruleanacg/Quantitative-Trading) ![GitHub last commit](https://img.shields.io/github/last-commit/Ceruleanacg/Quantitative-Trading)](https://github.com/Ceruleanacg/Quantitative-Trading) - Papers and Code Implements for Quantitative-Trading.
- [gym-trading ![GitHub Repo stars](https://img.shields.io/github/stars/hackthemarket/gym-trading) ![GitHub last commit](https://img.shields.io/github/last-commit/hackthemarket/gym-trading)](https://github.com/hackthemarket/gym-trading) - Environment for reinforcement-learning algorithmic trading models.
- [zenbrain ![GitHub Repo stars](https://img.shields.io/github/stars/carlos8f/zenbrain) ![GitHub last commit](https://img.shields.io/github/last-commit/carlos8f/zenbrain)](https://github.com/carlos8f/zenbrain) - A framework for machine-learning bots.
- [DeepLearningNotes ![GitHub Repo stars](https://img.shields.io/github/stars/AlphaSmartDog/DeepLearningNotes) ![GitHub last commit](https://img.shields.io/github/last-commit/AlphaSmartDog/DeepLearningNotes)](https://github.com/AlphaSmartDog/DeepLearningNotes) - Machine Learning in Quant analysis.
- [stock_market_reinforcement_learning ![GitHub Repo stars](https://img.shields.io/github/stars/kh-kim/stock_market_reinforcement_learning) ![GitHub last commit](https://img.shields.io/github/last-commit/kh-kim/stock_market_reinforcement_learning)](https://github.com/kh-kim/stock_market_reinforcement_learning) - Stock Trading Market OpenAI Gym Environment with Deep Reinforcement Learning using Keras.

### Portfolio Management

- [Deep-Reinforcement-Stock-Trading ![GitHub Repo stars](https://img.shields.io/github/stars/Albert-Z-Guo/Deep-Reinforcement-Stock-Trading) ![GitHub last commit](https://img.shields.io/github/last-commit/Albert-Z-Guo/Deep-Reinforcement-Stock-Trading)](https://github.com/Albert-Z-Guo/Deep-Reinforcement-Stock-Trading) - A light-weight deep reinforcement learning framework for portfolio management. This project explores the possibility of applying deep reinforcement learning algorithms to stock trading in a highly modular and scalable framework.
- [qtrader ![GitHub Repo stars](https://img.shields.io/github/stars/filangel/qtrader) ![GitHub last commit](https://img.shields.io/github/last-commit/filangel/qtrader)](https://github.com/filangel/qtrader) - Reinforcement Learning for Portfolio Management.
- [PGPortfolio ![GitHub Repo stars](https://img.shields.io/github/stars/ZhengyaoJiang/PGPortfolio) ![GitHub last commit](https://img.shields.io/github/last-commit/ZhengyaoJiang/PGPortfolio)](https://github.com/ZhengyaoJiang/PGPortfolio) - PGPortfolio - Policy Gradient Portfolio, the source code of "A Deep Reinforcement Learning Framework for the Financial Portfolio Management Problem.
- [DeepDow ![GitHub Repo stars](https://img.shields.io/github/stars/jankrepl/deepdow) ![GitHub last commit](https://img.shields.io/github/last-commit/jankrepl/deepdow)](https://github.com/jankrepl/deepdow) - Portfolio optimization with deep learning.

### High Frequency Trading

- 🌟 [SGX-Full-OrderBook-Tick-Data-Trading-Strategy ![GitHub Repo stars](https://img.shields.io/github/stars/rorysroes/SGX-Full-OrderBook-Tick-Data-Trading-Strategy) ![GitHub last commit](https://img.shields.io/github/last-commit/rorysroes/SGX-Full-OrderBook-Tick-Data-Trading-Strategy)](https://github.com/rorysroes/SGX-Full-OrderBook-Tick-Data-Trading-Strategy) - Providing the solutions for high-frequency trading (HFT) strategies using data science approaches (Machine Learning) on Full Orderbook Tick Data.
- [HFT_Bitcoin ![GitHub Repo stars](https://img.shields.io/github/stars/ghgr/HFT_Bitcoin) ![GitHub last commit](https://img.shields.io/github/last-commit/ghgr/HFT_Bitcoin)](https://github.com/ghgr/HFT_Bitcoin) - Analysis of High Frequency Trading on Bitcoin exchanges.

### Event Drive

- 🌟🌟 [stockpredictionai ![GitHub Repo stars](https://img.shields.io/github/stars/borisbanushev/stockpredictionai) ![GitHub last commit](https://img.shields.io/github/last-commit/borisbanushev/stockpredictionai)](https://github.com/borisbanushev/stockpredictionai) - In this noteboook I will create a complete process for predicting stock price movements. Follow along and we will achieve some pretty good results. For that purpose we will use a Generative Adversarial Network (GAN) with LSTM, a type of Recurrent Neural Network, as generator, and a Convolutional Neural Network, CNN, as a discriminator.
- 🌟 [trump2cash ![GitHub Repo stars](https://img.shields.io/github/stars/maxbbraun/trump2cash) ![GitHub last commit](https://img.shields.io/github/last-commit/maxbbraun/trump2cash)](https://github.com/maxbbraun/trump2cash) - A stock trading bot powered by Trump tweets.

### Crypto Currencies Strategies

- [LSTM-Crypto-Price-Prediction ![GitHub Repo stars](https://img.shields.io/github/stars/SC4RECOIN/LSTM-Crypto-Price-Prediction) ![GitHub last commit](https://img.shields.io/github/last-commit/SC4RECOIN/LSTM-Crypto-Price-Prediction)](https://github.com/SC4RECOIN/LSTM-Crypto-Price-Prediction) - Predicting price trends in cryptomarkets using an lstm-RNN for the use of a trading bot.
- [tforce_btc_trader ![GitHub Repo stars](https://img.shields.io/github/stars/lefnire/tforce_btc_trader) ![GitHub last commit](https://img.shields.io/github/last-commit/lefnire/tforce_btc_trader)](https://github.com/lefnire/tforce_btc_trader) - TensorForce Bitcoin Trading Bot.
- [Tensorflow-NeuroEvolution-Trading-Bot ![GitHub Repo stars](https://img.shields.io/github/stars/SC4RECOIN/Tensorflow-NeuroEvolution-Trading-Bot) ![GitHub last commit](https://img.shields.io/github/last-commit/SC4RECOIN/Tensorflow-NeuroEvolution-Trading-Bot)](https://github.com/SC4RECOIN/Tensorflow-NeuroEvolution-Trading-Bot) - Using tensorflow to build a population of models that trade cyrpto and breed and mutate iteratively.
- [gekkoga ![GitHub Repo stars](https://img.shields.io/github/stars/gekkowarez/gekkoga) ![GitHub last commit](https://img.shields.io/github/last-commit/gekkowarez/gekkoga)](https://github.com/gekkowarez/gekkoga) - Genetic Algorithm for solving optimization of trading strategies using Gekko.
- [Gekko_ANN_Strategies ![GitHub Repo stars](https://img.shields.io/github/stars/markchen8717/Gekko_ANN_Strategies) ![GitHub last commit](https://img.shields.io/github/last-commit/markchen8717/Gekko_ANN_Strategies)](https://github.com/markchen8717/Gekko_ANN_Strategies) - ANN trading strategies for the Gekko trading bot.
- [gekko-neuralnet ![GitHub Repo stars](https://img.shields.io/github/stars/zschro/gekko-neuralnet) ![GitHub last commit](https://img.shields.io/github/last-commit/zschro/gekko-neuralnet)](https://github.com/zschro/gekko-neuralnet) - Neural network strategy for Gekko.
- [bitcoin_prediction ![GitHub Repo stars](https://img.shields.io/github/stars/llSourcell/bitcoin_prediction) ![GitHub last commit](https://img.shields.io/github/last-commit/llSourcell/bitcoin_prediction)](https://github.com/llSourcell/bitcoin_prediction) - This is the code for "Bitcoin Prediction" by Siraj Raval on YouTube.

### Technical Analysis

- [quant-trading ![GitHub Repo stars](https://img.shields.io/github/stars/je-suis-tm/quant-trading) ![GitHub last commit](https://img.shields.io/github/last-commit/je-suis-tm/quant-trading)](https://github.com/je-suis-tm/quant-trading) - Python quantitative trading strategies.
- [Gekko-Bot-Resources ![GitHub Repo stars](https://img.shields.io/github/stars/cloggy45/Gekko-Bot-Resources) ![GitHub last commit](https://img.shields.io/github/last-commit/cloggy45/Gekko-Bot-Resources)](https://github.com/cloggy45/Gekko-Bot-Resources) - Gekko bot resources.
- [gekko_tools ![GitHub Repo stars](https://img.shields.io/github/stars/tommiehansen/gekko_tools) ![GitHub last commit](https://img.shields.io/github/last-commit/tommiehansen/gekko_tools)](https://github.com/tommiehansen/gekko_tools) - Gekko strategies, tools etc.
- [gekko RSI_WR ![GitHub Repo stars](https://img.shields.io/github/stars/zzmike76/gekko) ![GitHub last commit](https://img.shields.io/github/last-commit/zzmike76/gekko)](https://github.com/zzmike76/gekko) - Gekko RSI_WR strategies.
- [gekko HL ![GitHub Repo stars](https://img.shields.io/github/stars/mounirlabaied/gekko-strat-hl) ![GitHub last commit](https://img.shields.io/github/last-commit/mounirlabaied/gekko-strat-hl)](https://github.com/mounirlabaied/gekko-strat-hl) - Calculate down peak and trade on.
- [EthTradingAlgorithm ![GitHub Repo stars](https://img.shields.io/github/stars/Philipid3s/EthTradingAlgorithm) ![GitHub last commit](https://img.shields.io/github/last-commit/Philipid3s/EthTradingAlgorithm)](https://github.com/Philipid3s/EthTradingAlgorithm) - Ethereum trading algorithm using Python 3.5 and the library ZipLine.
- [gekko_trading_stuff ![GitHub Repo stars](https://img.shields.io/github/stars/thegamecat/gekko-trading-stuff) ![GitHub last commit](https://img.shields.io/github/last-commit/thegamecat/gekko-trading-stuff)](https://github.com/thegamecat/gekko-trading-stuff) - A dumping ground for my files I use with this awesome crypto currency trading platform.
- [forex.analytics ![GitHub Repo stars](https://img.shields.io/github/stars/mkmarek/forex.analytics) ![GitHub last commit](https://img.shields.io/github/last-commit/mkmarek/forex.analytics)](https://github.com/mkmarek/forex.analytics) - Node.js native library performing technical analysis over an OHLC dataset with use of genetic algorithmv.
- [Bitcoin_MACD_Strategy ![GitHub Repo stars](https://img.shields.io/github/stars/VermeirJellen/Bitcoin_MACD_Strategy) ![GitHub last commit](https://img.shields.io/github/last-commit/VermeirJellen/Bitcoin_MACD_Strategy)](https://github.com/VermeirJellen/Bitcoin_MACD_Strategy) - Bitcoin - MACD Crossover Trading Strategy Backtest.
- [crypto-signal ![GitHub Repo stars](https://img.shields.io/github/stars/CryptoSignal/crypto-signal) ![GitHub last commit](https://img.shields.io/github/last-commit/CryptoSignal/crypto-signal)](https://github.com/CryptoSignal/crypto-signal) - Automated Crypto Trading & Technical Analysis (TA) Bot for Bittrex, Binance, GDAX, and more! (250+ coins).
- [Gekko-Strategies ![GitHub Repo stars](https://img.shields.io/github/stars/xFFFFF/Gekko-Strategies) ![GitHub last commit](https://img.shields.io/github/last-commit/xFFFFF/Gekko-Strategies)](https://github.com/xFFFFF/Gekko-Strategies) - Strategies to Gekko trading bot with backtests results and some useful tools.
- [gekko-gannswing ![GitHub Repo stars](https://img.shields.io/github/stars/johndoe75/gekko-gannswing) ![GitHub last commit](https://img.shields.io/github/last-commit/johndoe75/gekko-gannswing)](https://github.com/johndoe75/gekko-gannswing) - Gann's Swing trade strategy for Gekko trade bot.

### Lottery & Gamble

- [LotteryPredict ![GitHub Repo stars](https://img.shields.io/github/stars/chengstone/LotteryPredict) ![GitHub last commit](https://img.shields.io/github/last-commit/chengstone/LotteryPredict)](https://github.com/chengstone/LotteryPredict) - Use LSTM to predict lottery.

### Arbitrage

- [ArbitrageBot ![GitHub Repo stars](https://img.shields.io/github/stars/BatuhanUsluel/ArbitrageBot) ![GitHub last commit](https://img.shields.io/github/last-commit/BatuhanUsluel/ArbitrageBot)](https://github.com/BatuhanUsluel/ArbitrageBot) - Arbitrage bot that currently works on bittrex & poloniex.
- [r2 ![GitHub Repo stars](https://img.shields.io/github/stars/bitrinjani/r2) ![GitHub last commit](https://img.shields.io/github/last-commit/bitrinjani/r2)](https://github.com/bitrinjani/r2) - R2 Bitcoin Arbitrager is an automatic arbitrage trading system powered by Node.js + TypeScript.
- [cryptocurrency-arbitrage ![GitHub Repo stars](https://img.shields.io/github/stars/manu354/cryptocurrency-arbitrage) ![GitHub last commit](https://img.shields.io/github/last-commit/manu354/cryptocurrency-arbitrage)](https://github.com/manu354/cryptocurrency-arbitrage) - A cryptocurrency arbitrage opportunity calculator. Over 800 currencies and 50 markets.
- [bitcoin-arbitrage ![GitHub Repo stars](https://img.shields.io/github/stars/maxme/bitcoin-arbitrage) ![GitHub last commit](https://img.shields.io/github/last-commit/maxme/bitcoin-arbitrage)](https://github.com/maxme/bitcoin-arbitrage) - Bitcoin arbitrage - opportunity detector.
- [blackbird ![GitHub Repo stars](https://img.shields.io/github/stars/butor/blackbird) ![GitHub last commit](https://img.shields.io/github/last-commit/butor/blackbird)](https://github.com/butor/blackbird) - Blackbird Bitcoin Arbitrage: a long/short market-neutral strategy.

## Data Sources

#### Traditional Markets

- 🌟 [Quandl](https://www.quandl.com/tools/api) - Get millions of financial and economic datasets from hundreds of publishers via a single free API.
- [yahoo-finance ![GitHub Repo stars](https://img.shields.io/github/stars/lukaszbanasiak/yahoo-finance) ![GitHub last commit](https://img.shields.io/github/last-commit/lukaszbanasiak/yahoo-finance)](https://github.com/lukaszbanasiak/yahoo-finance) - Python module to get stock data from Yahoo! Finance.
- [Tushare ![GitHub Repo stars](https://img.shields.io/github/stars/waditu/tushare) ![GitHub last commit](https://img.shields.io/github/last-commit/waditu/tushare)](https://github.com/waditu/tushare) - TuShare is a utility for crawling historical data of China stocks.

#### Crypto Currencies

- [CryptoInscriber ![GitHub Repo stars](https://img.shields.io/github/stars/Optixal/CryptoInscriber) ![GitHub last commit](https://img.shields.io/github/last-commit/Optixal/CryptoInscriber)](https://github.com/Optixal/CryptoInscriber) - A live cryptocurrency historical trade data blotter. Download live historical trade data from any cryptoexchange, be it for machine learning, backtesting/visualizing trading strategies or for Quantopian/Zipline.
- [Gekko-Datasets ![GitHub Repo stars](https://img.shields.io/github/stars/xFFFFF/Gekko-Datasets) ![GitHub last commit](https://img.shields.io/github/last-commit/xFFFFF/Gekko-Datasets)](https://github.com/xFFFFF/Gekko-Datasets) - Gekko Trading Bot dataset dumps. Ready to use and download history files in SQLite format.

## Research Tools

- [JAQS ![GitHub Repo stars](https://img.shields.io/github/stars/quantOS-org/JAQS) ![GitHub last commit](https://img.shields.io/github/last-commit/quantOS-org/JAQS)](https://github.com/quantOS-org/JAQS) - An open source quant strategies research  platform.
- [pyfolio ![GitHub Repo stars](https://img.shields.io/github/stars/quantopian/pyfolio) ![GitHub last commit](https://img.shields.io/github/last-commit/quantopian/pyfolio)](https://github.com/quantopian/pyfolio) - Portfolio and risk analytics in Python.
- [alphalens ![GitHub Repo stars](https://img.shields.io/github/stars/quantopian/alphalens) ![GitHub last commit](https://img.shields.io/github/last-commit/quantopian/alphalens)](https://github.com/quantopian/alphalens) - Performance analysis of predictive (alpha) stock factors.
- [empyrical ![GitHub Repo stars](https://img.shields.io/github/stars/quantopian/empyrical) ![GitHub last commit](https://img.shields.io/github/last-commit/quantopian/empyrical)](https://github.com/quantopian/empyrical) - Common financial risk and performance metrics. Used by zipline and pyfolio.
- [zvt ![GitHub Repo stars](https://img.shields.io/github/stars/zvtvz/zvt) ![GitHub last commit](https://img.shields.io/github/last-commit/zvtvz/zvt)](https://github.com/zvtvz/zvt) - Zero vector trader.

## Trading System

For Back Test & Live trading

### Traditional Market

**System**

- 🌟🌟 [zipline ![GitHub Repo stars](https://img.shields.io/github/stars/quantopian/zipline) ![GitHub last commit](https://img.shields.io/github/last-commit/quantopian/zipline)](https://github.com/quantopian/zipline) - Zipline, a Pythonic Algorithmic Trading Library.
- 🌟 [TradingView](http://tradingview.com/) - Get real-time information and market insights.
- [rqalpha ![GitHub Repo stars](https://img.shields.io/github/stars/ricequant/rqalpha) ![GitHub last commit](https://img.shields.io/github/last-commit/ricequant/rqalpha)](https://github.com/ricequant/rqalpha) - A extendable, replaceable Python algorithmic backtest && trading framework supporting multiple securities.
- [backtrader ![GitHub Repo stars](https://img.shields.io/github/stars/backtrader/backtrader) ![GitHub last commit](https://img.shields.io/github/last-commit/backtrader/backtrader)](https://github.com/backtrader/backtrader) - Python Backtesting library for trading strategies.
- [kungfu ![GitHub Repo stars](https://img.shields.io/github/stars/taurusai/kungfu) ![GitHub last commit](https://img.shields.io/github/last-commit/taurusai/kungfu)](https://github.com/taurusai/kungfu) - Kungfu Master Trading System.

**Combine & Rebuild**

- [pylivetrader ![GitHub Repo stars](https://img.shields.io/github/stars/alpacahq/pylivetrader) ![GitHub last commit](https://img.shields.io/github/last-commit/alpacahq/pylivetrader)](https://github.com/alpacahq/pylivetrader) - Python live trade execution library with zipline interface.
- [CoinMarketCapBacktesting ![GitHub Repo stars](https://img.shields.io/github/stars/JimmyWuMadchester/CoinMarketCapBacktesting) ![GitHub last commit](https://img.shields.io/github/last-commit/JimmyWuMadchester/CoinMarketCapBacktesting)](https://github.com/JimmyWuMadchester/CoinMarketCapBacktesting) - As backtesting frameworks for coin trading strategy.

### Crypto Currencies

- [zenbot ![GitHub Repo stars](https://img.shields.io/github/stars/DeviaVir/zenbot) ![GitHub last commit](https://img.shields.io/github/last-commit/DeviaVir/zenbot)](https://github.com/DeviaVir/zenbot) - Zenbot is a command-line cryptocurrency trading bot using Node.js and MongoDB.
- [bot18 ![GitHub Repo stars](https://img.shields.io/github/stars/carlos8f/bot18) ![GitHub last commit](https://img.shields.io/github/last-commit/carlos8f/bot18)](https://github.com/carlos8f/bot18) - Bot18 is a high-frequency cryptocurrency trading bot developed by Zenbot.
- [magic8bot ![GitHub Repo stars](https://img.shields.io/github/stars/magic8bot/magic8bot) ![GitHub last commit](https://img.shields.io/github/last-commit/magic8bot/magic8bot)](https://github.com/magic8bot/magic8bot) - Magic8bot is a cryptocurrency trading bot using Node.js and MongoDB.
- [catalyst ![GitHub Repo stars](https://img.shields.io/github/stars/enigmampc/catalyst) ![GitHub last commit](https://img.shields.io/github/last-commit/enigmampc/catalyst)](https://github.com/enigmampc/catalyst) - An Algorithmic Trading Library for Crypto-Assets in Python.
- [QuantResearchDev ![GitHub Repo stars](https://img.shields.io/github/stars/mounirlabaied/QuantResearchDev) ![GitHub last commit](https://img.shields.io/github/last-commit/mounirlabaied/QuantResearchDev)](https://github.com/mounirlabaied/QuantResearchDev) - Quant Research dev & Traders open source project.
- [MACD ![GitHub Repo stars](https://img.shields.io/github/stars/sudoscripter/MACD) ![GitHub last commit](https://img.shields.io/github/last-commit/sudoscripter/MACD)](https://github.com/sudoscripter/MACD) - Zenbot Macd Auto-Trader.
- [abu ![GitHub Repo stars](https://img.shields.io/github/stars/bbfamily/abu) ![GitHub last commit](https://img.shields.io/github/last-commit/bbfamily/abu)](https://github.com/bbfamily/abu) - A quant trading system base on python.

#### Plugins

- [easytrader ![GitHub Repo stars](https://img.shields.io/github/stars/shidenggui/easytrader) ![GitHub last commit](https://img.shields.io/github/last-commit/shidenggui/easytrader)](https://github.com/shidenggui/easytrader)
- [CoinMarketCapBacktesting ![GitHub Repo stars](https://img.shields.io/github/stars/JimmyWuMadchester/CoinMarketCapBacktesting) ![GitHub last commit](https://img.shields.io/github/last-commit/JimmyWuMadchester/CoinMarketCapBacktesting)](https://github.com/JimmyWuMadchester/CoinMarketCapBacktesting) - This project tests bt and Quantopian Zipline as backtesting frameworks for coin trading strategy.
- [Gekko-BacktestTool ![GitHub Repo stars](https://img.shields.io/github/stars/xFFFFF/Gekko-BacktestTool) ![GitHub last commit](https://img.shields.io/github/last-commit/xFFFFF/Gekko-BacktestTool)](https://github.com/xFFFFF/Gekko-BacktestTool) - Batch backtest, import and strategy params optimalization for Gekko Trading Bot. With one command you will run any number of backtests.

## TA Lib

- [pandas_talib ![GitHub Repo stars](https://img.shields.io/github/stars/femtotrader/pandas_talib) ![GitHub last commit](https://img.shields.io/github/last-commit/femtotrader/pandas_talib)](https://github.com/femtotrader/pandas_talib) - A Python Pandas implementation of technical analysis indicators.
- [finta ![GitHub Repo stars](https://img.shields.io/github/stars/peerchemist/finta) ![GitHub last commit](https://img.shields.io/github/last-commit/peerchemist/finta)](https://github.com/peerchemist/finta) - Common financial technical indicators implemented in Python-Pandas (70+ indicators).
- [tulipnode ![GitHub Repo stars](https://img.shields.io/github/stars/TulipCharts/tulipnode) ![GitHub last commit](https://img.shields.io/github/last-commit/TulipCharts/tulipnode)](https://github.com/TulipCharts/tulipnode) - Tulip Node is the official Node.js wrapper for Tulip Indicators. It provides over 100 technical analysis overlay and indicator functions.
- [techan.js ![GitHub Repo stars](https://img.shields.io/github/stars/andredumas/techan.js) ![GitHub last commit](https://img.shields.io/github/last-commit/andredumas/techan.js)](https://github.com/andredumas/techan.js) - A visual, technical analysis and charting (Candlestick, OHLC, indicators) library built on D3.

## Exchange API

Do it in real world!

- [IbPy ![GitHub Repo stars](https://img.shields.io/github/stars/blampe/IbPy) ![GitHub last commit](https://img.shields.io/github/last-commit/blampe/IbPy)](https://github.com/blampe/IbPy) - Python API for the Interactive Brokers on-line trading system.
- [HuobiFeeder ![GitHub Repo stars](https://img.shields.io/github/stars/mmmaaaggg/HuobiFeeder) ![GitHub last commit](https://img.shields.io/github/last-commit/mmmaaaggg/HuobiFeeder)](https://github.com/mmmaaaggg/HuobiFeeder) - Connect HUOBIPRO exchange, get market/historical data for ABAT trading platform backtest/analysis and live trading.
- [ctpwrapper ![GitHub Repo stars](https://img.shields.io/github/stars/nooperpudd/ctpwrapper) ![GitHub last commit](https://img.shields.io/github/last-commit/nooperpudd/ctpwrapper)](https://github.com/nooperpudd/ctpwrapper) - Shanghai future exchange CTP api.

### Framework

- [tf-quant-finance ![GitHub Repo stars](https://img.shields.io/github/stars/google/tf-quant-finance) ![GitHub last commit](https://img.shields.io/github/last-commit/google/tf-quant-finance)](https://github.com/google/tf-quant-finance) - High-performance TensorFlow library for quantitative finance.

### Visualizing

- [playground ![GitHub Repo stars](https://img.shields.io/github/stars/tensorflow/playground) ![GitHub last commit](https://img.shields.io/github/last-commit/tensorflow/playground)](https://github.com/tensorflow/playground) - Play with neural networks.
- [netron ![GitHub Repo stars](https://img.shields.io/github/stars/lutzroeder/netron) ![GitHub last commit](https://img.shields.io/github/last-commit/lutzroeder/netron)](https://github.com/lutzroeder/netron) - Visualizer for deep learning and machine learning models.

### GYM Environment

- 🌟 [TradingGym ![GitHub Repo stars](https://img.shields.io/github/stars/Yvictor/TradingGym) ![GitHub last commit](https://img.shields.io/github/last-commit/Yvictor/TradingGym)](https://github.com/Yvictor/TradingGym) - Trading and Backtesting environment for training reinforcement learning agent or simple rule base algo.
- [TradzQAI ![GitHub Repo stars](https://img.shields.io/github/stars/kkuette/TradzQAI) ![GitHub last commit](https://img.shields.io/github/last-commit/kkuette/TradzQAI)](https://github.com/kkuette/TradzQAI) - Trading environnement for RL agents, backtesting and training.
- [btgym ![GitHub Repo stars](https://img.shields.io/github/stars/Kismuz/btgym) ![GitHub last commit](https://img.shields.io/github/last-commit/Kismuz/btgym)](https://github.com/Kismuz/btgym) - Scalable, event-driven, deep-learning-friendly backtesting library.

## Articles

- [The-Economist ![GitHub Repo stars](https://img.shields.io/github/stars/nailperry-zd/The-Economist) ![GitHub last commit](https://img.shields.io/github/last-commit/nailperry-zd/The-Economist)](https://github.com/nailperry-zd/The-Economist) - The Economist 经济学人，持续更新.
- [nyu-mlif-notes ![GitHub Repo stars](https://img.shields.io/github/stars/wizardforcel/nyu-mlif-notes) ![GitHub last commit](https://img.shields.io/github/last-commit/wizardforcel/nyu-mlif-notes)](https://github.com/wizardforcel/nyu-mlif-notes) - NYU machine learning in finance notes.
- [Using LSTMs to Turn Feelings Into Trades](https://www.quantopian.com/posts/watch-our-webinar-buying-happiness-using-lstms-to-turn-feelings-into-trades-now?utm_source=forum&utm_medium=twitter&utm_campaign=sentiment-analysis)
- [Maury Osborne和三文鱼的故事](https://zhuanlan.zhihu.com/p/20586843)
- [布朗运动、伊藤引理——细说Black-Scholes公式��前世今生（上篇）](https://zhuanlan.zhihu.com/p/32664487) 
- [布朗运动、伊藤引理——细说Black-Scholes公式的前世今生（下篇）](https://zhuanlan.zhihu.com/p/32746192)
- [趋势策略小试牛刀，海龟交易体系的构建](https://www.ricequant.com/community/topic/62/%E8%B6%8B%E5%8A%BF%E7%AD%96%E7%95%A5%E5%B0%8F%E8%AF%95%E7%89%9B%E5%88%80-%E6%B5%B7%E9%BE%9F%E4%BA%A4%E6%98%93%E4%BD%93%E7%B3%BB%E7%9A%84%E6%9E%84%E5%BB%BA)

## Others

- [zipline-tensorboard ![GitHub Repo stars](https://img.shields.io/github/stars/jimgoo/zipline-tensorboard) ![GitHub last commit](https://img.shields.io/github/last-commit/jimgoo/zipline-tensorboard)](https://github.com/jimgoo/zipline-tensorboard) - TensorBoard as a Zipline dashboard http://jimgoo.com/tensorboard-and-zip.
- [gekko-quasar-ui ![GitHub Repo stars](https://img.shields.io/github/stars/H256/gekko-quasar-ui) ![GitHub last commit](https://img.shields.io/github/last-commit/H256/gekko-quasar-ui)](https://github.com/H256/gekko-quasar-ui) - An UI port for gekko trading bot using Quasar framework.

#### Other Resource

- 🌟 [Awesome-Quant-Machine-Learning-Trading ![GitHub Repo stars](https://img.shields.io/github/stars/grananqvist/Awesome-Quant-Machine-Learning-Trading) ![GitHub last commit](https://img.shields.io/github/last-commit/grananqvist/Awesome-Quant-Machine-Learning-Trading)](https://github.com/grananqvist/Awesome-Quant-Machine-Learning-Trading) - Quant/Algorithm trading resources with an emphasis on Machine Learning.
- [awesome-quant ![GitHub Repo stars](https://img.shields.io/github/stars/wilsonfreitas/awesome-quant) ![GitHub last commit](https://img.shields.io/github/last-commit/wilsonfreitas/awesome-quant)](https://github.com/wilsonfreitas/awesome-quant) - A curated list of insanely awesome libraries, packages and resources for Quants (Quantitative Finance).
- [awesome-quant-china ![GitHub Repo stars](https://img.shields.io/github/stars/thuquant/awesome-quant) ![GitHub last commit](https://img.shields.io/github/last-commit/thuquant/awesome-quant)](https://github.com/thuquant/awesome-quant) - Quant resource in china.
- [awesome-rl ![GitHub Repo stars](https://img.shields.io/github/stars/aikorea/awesome-rl) ![GitHub last commit](https://img.shields.io/github/last-commit/aikorea/awesome-rl)](https://github.com/aikorea/awesome-rl)
