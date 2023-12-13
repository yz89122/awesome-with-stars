<p align="center">
  <a href="https://awesome-micropython.com/" style="display:block"><img src="https://raw.githubusercontent.com/mcauser/awesome-micropython/master/docs/img/logo.svg"></a>
</p>
<p align="center">
  <a href="https://awesome.re">
    <img alt="Awesome" src="https://awesome.re/badge-flat.svg">
  </a>
</p>
<hr>

A curated list of awesome MicroPython libraries, frameworks, software and resources.

[MicroPython](https://micropython.org/) is a lean and efficient implementation of the Python 3 programming language that includes a small subset of the Python standard library and is optimised to run on microcontrollers and in constrained environments.

## Contents

* [Libraries](#libraries)
  * [AI](#ai)
  * [Audio](#audio)
  * [Communications](#communications)
  * [Display](#display)
  * [IO](#io)
  * [Mathematics](#mathematics)
  * [Motion](#motion)
  * [Sensors](#sensors)
  * [Scheduling](#scheduling)
  * [Storage](#storage)
  * [Threading](#threading)
  * [User Interface](#user-interface)
* [Community](#community)
* [Tutorials](#tutorials)
* [Books](#books)
* [Frameworks](#frameworks)
* [Resources](#resources)
* [Development](#development)
  * [Code Generation](#code-generation)
  * [Debugging](#debugging)
  * [IDEs](#ides)
  * [Logging](#logging)
  * [Shells](#shells)
* [Miscellaneous](#miscellaneous)
* [Contributing](#contributing)

## Libraries

Other places you can look for MicroPython Libraries:

* [PyPi](https://pypi.org/search/?c=Programming+Language+%3A%3A+Python+%3A%3A+Implementation+%3A%3A+MicroPython) - This filter shows just the MicroPython libraries on PyPi. Note: You cannot `pip install` MicroPython libraries. See the [MicroPython docs](https://docs.micropython.org/en/latest/reference/packages.html) for more information on managing packages with MicroPython.
* [GitHub Search](https://github.com/search?q=micropython) - Search GitHub for repositories containing MicroPython.
* [GitHub Topic - MicroPython ![GitHub Repo Stars](https://img.shields.io/github/stars/topics/micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/topics/micropython)](https://github.com/topics/micropython) - Browse GitHub Topics for projects tagged with MicroPython.
* [Libraries.io](https://libraries.io/search?q=micropython) - Libraries.io query for MicroPython.
* [GitLab Explore](https://gitlab.com/explore?sort=latest_activity_desc&utf8=%E2%9C%93&name=micropython&sort=latest_activity_desc) - Explore repositories on GitLab.
* [Codeberg Explore](https://codeberg.org/explore/repos?tab=&sort=recentupdate&q=micropython) - Explore repositories on Codeberg.

### AI

* [MicroMLP ![GitHub Repo Stars](https://img.shields.io/github/stars/jczic/MicroMLP) ![GitHub last commit](https://img.shields.io/github/last-commit/jczic/MicroMLP)](https://github.com/jczic/MicroMLP) - A micro neural network multilayer perceptron for MicroPython (used on ESP32 and Pycom modules).
* [MicroPython-NeuralNetwork](https://gitlab.com/olivierlenoir/MicroPython-NeuralNetwork) - Neural Network for MicroPython.
* [upython-chat-gpt ![GitHub Repo Stars](https://img.shields.io/github/stars/karlsoderby/upython-chat-gpt) ![GitHub last commit](https://img.shields.io/github/last-commit/karlsoderby/upython-chat-gpt)](https://github.com/karlsoderby/upython-chat-gpt) - ChatGPT for MicroPython.
* [emlearn-micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/emlearn/emlearn-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/emlearn/emlearn-micropython)](https://github.com/emlearn/emlearn-micropython) - Efficient Machine Learning engine for MicroPython.

### Audio

* [micropython-jq6500 ![GitHub Repo Stars](https://img.shields.io/github/stars/rdagger/micropython-jq6500) ![GitHub last commit](https://img.shields.io/github/last-commit/rdagger/micropython-jq6500)](https://github.com/rdagger/micropython-jq6500) - Driver for JQ6500 UART MP3 modules.
* [KT403A-MP3 ![GitHub Repo Stars](https://img.shields.io/github/stars/jczic/KT403A-MP3) ![GitHub last commit](https://img.shields.io/github/last-commit/jczic/KT403A-MP3)](https://github.com/jczic/KT403A-MP3) - Driver for KT403A, used by DFPlayer Mini and Grove MP3 v2.0.
* [micropython-buzzer ![GitHub Repo Stars](https://img.shields.io/github/stars/fruch/micropython-buzzer) ![GitHub last commit](https://img.shields.io/github/last-commit/fruch/micropython-buzzer)](https://github.com/fruch/micropython-buzzer) - Play Nokia compose and mid files on buzzers.
* [micropython-dfplayer ![GitHub Repo Stars](https://img.shields.io/github/stars/redoxcode/micropython-dfplayer) ![GitHub last commit](https://img.shields.io/github/last-commit/redoxcode/micropython-dfplayer)](https://github.com/redoxcode/micropython-dfplayer) - Library to control the DFPlayer mini MP3 player module.
* [micropython-dfplayer ![GitHub Repo Stars](https://img.shields.io/github/stars/ShrimpingIt/micropython-dfplayer) ![GitHub last commit](https://img.shields.io/github/last-commit/ShrimpingIt/micropython-dfplayer)](https://github.com/ShrimpingIt/micropython-dfplayer) - Driver for DFPlayer Mini using UART.
* [micropython-longwave ![GitHub Repo Stars](https://img.shields.io/github/stars/MattMatic/micropython-longwave) ![GitHub last commit](https://img.shields.io/github/last-commit/MattMatic/micropython-longwave)](https://github.com/MattMatic/micropython-longwave) - WAV player for MicroPython board.
* [micropython-vs1053 ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-vs1053) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-vs1053)](https://github.com/peterhinch/micropython-vs1053) - Asynchronous driver for VS1053b MP3 player.
* [micropython-midi ![GitHub Repo Stars](https://img.shields.io/github/stars/cjbarnes18/micropython-midi) ![GitHub last commit](https://img.shields.io/github/last-commit/cjbarnes18/micropython-midi)](https://github.com/cjbarnes18/micropython-midi) - A MIDI implementation example for MicroPython.
* [upy-rtttl ![GitHub Repo Stars](https://img.shields.io/github/stars/dhylands/upy-rtttl) ![GitHub last commit](https://img.shields.io/github/last-commit/dhylands/upy-rtttl)](https://github.com/dhylands/upy-rtttl) - Python Parser for Ring Tone Text Transfer Language (RTTTL).
* [micropython-i2s-examples ![GitHub Repo Stars](https://img.shields.io/github/stars/miketeachman/micropython-i2s-examples) ![GitHub last commit](https://img.shields.io/github/last-commit/miketeachman/micropython-i2s-examples)](https://github.com/miketeachman/micropython-i2s-examples) - Examples for I2S support on microcontrollers that run MicroPython.
* [micropython-osc ![GitHub Repo Stars](https://img.shields.io/github/stars/SpotlightKid/micropython-osc) ![GitHub last commit](https://img.shields.io/github/last-commit/SpotlightKid/micropython-osc)](https://github.com/SpotlightKid/micropython-osc) - A minimal OSC client and server library for MicroPython.
* [micropython-sgtl5000 ![GitHub Repo Stars](https://img.shields.io/github/stars/rdagger/micropython-sgtl5000) ![GitHub last commit](https://img.shields.io/github/last-commit/rdagger/micropython-sgtl5000)](https://github.com/rdagger/micropython-sgtl5000) - Library for SGTL5000 Low Power Stereo Codec w/ Headphone Amp.
* [umidiparser ![GitHub Repo Stars](https://img.shields.io/github/stars/bixb922/umidiparser) ![GitHub last commit](https://img.shields.io/github/last-commit/bixb922/umidiparser)](https://github.com/bixb922/umidiparser) - MIDI file parser for MicroPython, CircuitPython and Python.
* [micropython-tas2505 ![GitHub Repo Stars](https://img.shields.io/github/stars/miketeachman/micropython-tas2505) ![GitHub last commit](https://img.shields.io/github/last-commit/miketeachman/micropython-tas2505)](https://github.com/miketeachman/micropython-tas2505) - MicroPython driver for the Texas Instruments TAS2505 Digital Input Class-D Speaker Amplifier.

### Communications

#### APIs

* [micropython-utelegram ![GitHub Repo Stars](https://img.shields.io/github/stars/jordiprats/micropython-utelegram) ![GitHub last commit](https://img.shields.io/github/last-commit/jordiprats/micropython-utelegram)](https://github.com/jordiprats/micropython-utelegram) - Telegram API wrapper for MicroPython.
* [uEagle ![GitHub Repo Stars](https://img.shields.io/github/stars/jcalbert/uEagle) ![GitHub last commit](https://img.shields.io/github/last-commit/jcalbert/uEagle)](https://github.com/jcalbert/uEagle) - MicroPython Rainforest EAGLE client.
* [micropython-youtube-api ![GitHub Repo Stars](https://img.shields.io/github/stars/UnexpectedMaker/micropython-youtube-api) ![GitHub last commit](https://img.shields.io/github/last-commit/UnexpectedMaker/micropython-youtube-api)](https://github.com/UnexpectedMaker/micropython-youtube-api) - YouTube API in MicroPython.
* [micropython_esp8266_tweetbot ![GitHub Repo Stars](https://img.shields.io/github/stars/ayoko/micropython_esp8266_tweetbot) ![GitHub last commit](https://img.shields.io/github/last-commit/ayoko/micropython_esp8266_tweetbot)](https://github.com/ayoko/micropython_esp8266_tweetbot) - Tweet bot for MicroPython v1.8.4 (ESP8266).
* [telegram-upy ![GitHub Repo Stars](https://img.shields.io/github/stars/gabrielebarola/telegram-upy) ![GitHub last commit](https://img.shields.io/github/last-commit/gabrielebarola/telegram-upy)](https://github.com/gabrielebarola/telegram-upy) - Telegram API wrapper for MicroPython.
* [micropython-thingspeak ![GitHub Repo Stars](https://img.shields.io/github/stars/radeklat/micropython-thingspeak) ![GitHub last commit](https://img.shields.io/github/last-commit/radeklat/micropython-thingspeak)](https://github.com/radeklat/micropython-thingspeak) - Library for sending data to thingspeak.com from IoT devices running MicroPython (such as ESP8266).
* [micropython_pushbullet ![GitHub Repo Stars](https://img.shields.io/github/stars/gsampallo/micropython_pushbullet) ![GitHub last commit](https://img.shields.io/github/last-commit/gsampallo/micropython_pushbullet)](https://github.com/gsampallo/micropython_pushbullet) - Simple example of how to use PushBullet with MicroPython on ESP8266.
* [esp32-youtube-display ![GitHub Repo Stars](https://img.shields.io/github/stars/alvarowolfx/esp32-youtube-display) ![GitHub last commit](https://img.shields.io/github/last-commit/alvarowolfx/esp32-youtube-display)](https://github.com/alvarowolfx/esp32-youtube-display) - Display YouTube metrics using Google API and MicroPython.
* [micropython-spotify-web-api ![GitHub Repo Stars](https://img.shields.io/github/stars/tltx/micropython-spotify-web-api) ![GitHub last commit](https://img.shields.io/github/last-commit/tltx/micropython-spotify-web-api)](https://github.com/tltx/micropython-spotify-web-api) - A library for using Spotify's web API from a IoT device with MicroPython.
* [micropython_demo_bot ![GitHub Repo Stars](https://img.shields.io/github/stars/gsampallo/micropython_demo_bot) ![GitHub last commit](https://img.shields.io/github/last-commit/gsampallo/micropython_demo_bot)](https://github.com/gsampallo/micropython_demo_bot) - Little example of how to create a bot for Telegram.
* [micropython-basicdweet ![GitHub Repo Stars](https://img.shields.io/github/stars/jacklinquan/micropython-basicdweet) ![GitHub last commit](https://img.shields.io/github/last-commit/jacklinquan/micropython-basicdweet)](https://github.com/jacklinquan/micropython-basicdweet) - A python module for very basic APIs of the free dweet service.
* [micropython-dweeter ![GitHub Repo Stars](https://img.shields.io/github/stars/jacklinquan/micropython-dweeter) ![GitHub last commit](https://img.shields.io/github/last-commit/jacklinquan/micropython-dweeter)](https://github.com/jacklinquan/micropython-dweeter) - A python module for messaging through the free dweet service.
* [micropython-cryptodweet ![GitHub Repo Stars](https://img.shields.io/github/stars/jacklinquan/micropython-cryptodweet) ![GitHub last commit](https://img.shields.io/github/last-commit/jacklinquan/micropython-cryptodweet)](https://github.com/jacklinquan/micropython-cryptodweet) - A python module for very basic APIs of the free dweet service with encryption.
* [micropython-linenotify ![GitHub Repo Stars](https://img.shields.io/github/stars/PerfecXX/micropython-linenotify) ![GitHub last commit](https://img.shields.io/github/last-commit/PerfecXX/micropython-linenotify)](https://github.com/PerfecXX/micropython-linenotify) - MicroPython library for sending notifications to Line Notify with ESP8266 and ESP32.

#### Authentication

* [micropython-firebase-auth ![GitHub Repo Stars](https://img.shields.io/github/stars/WoolDoughnut310/micropython-firebase-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/WoolDoughnut310/micropython-firebase-auth)](https://github.com/WoolDoughnut310/micropython-firebase-auth) - Firebase Auth implementation for MicroPython.

#### Bluetooth

* [PyBoard-HC05-Android ![GitHub Repo Stars](https://img.shields.io/github/stars/KipCrossing/PyBoard-HC05-Android) ![GitHub last commit](https://img.shields.io/github/last-commit/KipCrossing/PyBoard-HC05-Android)](https://github.com/KipCrossing/PyBoard-HC05-Android) - Pyboard HC05 Bluetooth adapter example application.
* [uble ![GitHub Repo Stars](https://img.shields.io/github/stars/dmazzella/uble) ![GitHub last commit](https://img.shields.io/github/last-commit/dmazzella/uble)](https://github.com/dmazzella/uble) - Lightweight Bluetooth Low Energy driver written in pure Python for MicroPython.
* [MicroPythonBLEHID ![GitHub Repo Stars](https://img.shields.io/github/stars/Heerkog/MicroPythonBLEHID) ![GitHub last commit](https://img.shields.io/github/last-commit/Heerkog/MicroPythonBLEHID)](https://github.com/Heerkog/MicroPythonBLEHID) - Human Interface Device (HID) over Bluetooth Low Energy (BLE) GATT library for MicroPython.
* [upyble ![GitHub Repo Stars](https://img.shields.io/github/stars/Carglglz/upyble) ![GitHub last commit](https://img.shields.io/github/last-commit/Carglglz/upyble)](https://github.com/Carglglz/upyble) - Command line tool for Bluetooth Low Energy MicroPython devices.
* [micropython-xiaomi-ble-adv-parse](https://codeberg.org/scy/micropython-xiaomi-ble-adv-parse) - Passively retrieve sensor data from some Xiaomi Bluetooth Low Energy (BLE) sensors.
* [mijia-temphum-upy](https://codeberg.org/scy/mijia-temphum-upy) - MicroPython library to read certain Xiaomi Mijia BLE temperature & humidity sensors.

#### CAN

* [micropython-spacecan](https://gitlab.com/alphaaomega/micropython-spacecan) - Spacecan is a MicroPython implementation of the SpaceCAN protocol for embedded systems.
* [Robomaster-Micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/JohnieBraaf/Robomaster-Micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/JohnieBraaf/Robomaster-Micropython)](https://github.com/JohnieBraaf/Robomaster-Micropython) - Robomaster S1 - MicroPython CAN BUS controller.
* [micropython-mcp2515 ![GitHub Repo Stars](https://img.shields.io/github/stars/jxltom/micropython-mcp2515) ![GitHub last commit](https://img.shields.io/github/last-commit/jxltom/micropython-mcp2515)](https://github.com/jxltom/micropython-mcp2515) - MicroPython MCP2515 driver, porting from Arduino MCP2515 CAN interface library.
* [microPython_MCP2515 ![GitHub Repo Stars](https://img.shields.io/github/stars/capella-ben/microPython_MCP2515) ![GitHub last commit](https://img.shields.io/github/last-commit/capella-ben/microPython_MCP2515)](https://github.com/capella-ben/microPython_MCP2515) - A MicroPython library for the MCP2515 CAN bus controller.

#### Compression

* [ufastlz ![GitHub Repo Stars](https://img.shields.io/github/stars/dmazzella/ufastlz) ![GitHub last commit](https://img.shields.io/github/last-commit/dmazzella/ufastlz)](https://github.com/dmazzella/ufastlz) - MicroPython wrapper for FastLZ, a lightning-fast lossless compression library.
* [tamp ![GitHub Repo Stars](https://img.shields.io/github/stars/BrianPugh/tamp) ![GitHub last commit](https://img.shields.io/github/last-commit/BrianPugh/tamp)](https://github.com/BrianPugh/tamp) - A low-memory, MicroPython-optimized, DEFLATE-inspired lossless compression library.

#### Cryptography

* [ucryptography ![GitHub Repo Stars](https://img.shields.io/github/stars/dmazzella/ucryptography) ![GitHub last commit](https://img.shields.io/github/last-commit/dmazzella/ucryptography)](https://github.com/dmazzella/ucryptography) - Lightweight porting of pyca/cryptography to MicroPython based on ARM Mbed TLS.
* [mpyaes ![GitHub Repo Stars](https://img.shields.io/github/stars/iyassou/mpyaes) ![GitHub last commit](https://img.shields.io/github/last-commit/iyassou/mpyaes)](https://github.com/iyassou/mpyaes) - MicroPython module for AES encryption.
* [micropython-aes ![GitHub Repo Stars](https://img.shields.io/github/stars/piaca/micropython-aes) ![GitHub last commit](https://img.shields.io/github/last-commit/piaca/micropython-aes)](https://github.com/piaca/micropython-aes) - AES algorithm with pure python implementation.
* [ucrypto ![GitHub Repo Stars](https://img.shields.io/github/stars/dmazzella/ucrypto) ![GitHub last commit](https://img.shields.io/github/last-commit/dmazzella/ucrypto)](https://github.com/dmazzella/ucrypto) - MicroPython package for doing fast RSA and elliptic curve cryptography, specifically digital signatures. ECDSA API design inspired from fastecdsa and implementation based on tomsfastmath.
* [ucryptoauthlib ![GitHub Repo Stars](https://img.shields.io/github/stars/dmazzella/ucryptoauthlib) ![GitHub last commit](https://img.shields.io/github/last-commit/dmazzella/ucryptoauthlib)](https://github.com/dmazzella/ucryptoauthlib) - Lightweight driver for Microchip Crypto Authentication secure elements written in pure Python for MicroPython.
* [embit ![GitHub Repo Stars](https://img.shields.io/github/stars/diybitcoinhardware/embit) ![GitHub last commit](https://img.shields.io/github/last-commit/diybitcoinhardware/embit)](https://github.com/diybitcoinhardware/embit) - A minimal Bitcoin library for MicroPython and Python 3 with a focus on embedded systems.
* [microotp ![GitHub Repo Stars](https://img.shields.io/github/stars/gdassori/microotp) ![GitHub last commit](https://img.shields.io/github/last-commit/gdassori/microotp)](https://github.com/gdassori/microotp) - An ESP8266 MicroPython OTP Generator.
* [micropython-rsa-signing ![GitHub Repo Stars](https://img.shields.io/github/stars/artem-smotrakov/micropython-rsa-signing) ![GitHub last commit](https://img.shields.io/github/last-commit/artem-smotrakov/micropython-rsa-signing)](https://github.com/artem-smotrakov/micropython-rsa-signing) - RSA signing on MicroPython.
* [micropython-cryptomsg ![GitHub Repo Stars](https://img.shields.io/github/stars/jacklinquan/micropython-cryptomsg) ![GitHub last commit](https://img.shields.io/github/last-commit/jacklinquan/micropython-cryptomsg)](https://github.com/jacklinquan/micropython-cryptomsg) - A MicroPython module to encrypt and decrypt messages with AES CBC mode.
* [mprsa ![GitHub Repo Stars](https://img.shields.io/github/stars/git-n-pissed/mprsa) ![GitHub last commit](https://img.shields.io/github/last-commit/git-n-pissed/mprsa)](https://github.com/git-n-pissed/mprsa) - A MicroPython module for creating, importing, and exporting RSA keys in DER and PEM formats with PKCS#1, PKCS#8, and X.509/SPKI structures, and signing/verifying and encryption/decryption using blinding and SHA-1 and SHA-256 hashing algorithms.
* [mpy-mbedtls ![GitHub Repo Stars](https://img.shields.io/github/stars/Carglglz/mpy-mbedtls) ![GitHub last commit](https://img.shields.io/github/last-commit/Carglglz/mpy-mbedtls)](https://github.com/Carglglz/mpy-mbedtls) - MicroPython bindings for some MbedTLS EC and x509 cert/csr functions.
* [micropython-cryptocfb ![GitHub Repo Stars](https://img.shields.io/github/stars/jacklinquan/micropython-cryptocfb) ![GitHub last commit](https://img.shields.io/github/last-commit/jacklinquan/micropython-cryptocfb)](https://github.com/jacklinquan/micropython-cryptocfb) - A Python module to encrypt and decrypt data with AES-128 CFB mode.
* [tscp ![GitHub Repo Stars](https://img.shields.io/github/stars/shariltumin/tscp) ![GitHub last commit](https://img.shields.io/github/last-commit/shariltumin/tscp)](https://github.com/shariltumin/tscp) - An endpoint-to-endpoint encryption based on Diffie-Hellman-Merkle with TLS1.3 styled handshake using MicroPython.

#### DNS

* [ICantBelieveItsNotDNS ![GitHub Repo Stars](https://img.shields.io/github/stars/yschaeff/ICantBelieveItsNotDNS) ![GitHub last commit](https://img.shields.io/github/last-commit/yschaeff/ICantBelieveItsNotDNS)](https://github.com/yschaeff/ICantBelieveItsNotDNS) - "I Can't Believe It's Not DNS!" (ICBIND) is an authoritative DNS server for the ESP8266 written in MicroPython.
* [MicroDNSSrv ![GitHub Repo Stars](https://img.shields.io/github/stars/jczic/MicroDNSSrv) ![GitHub last commit](https://img.shields.io/github/last-commit/jczic/MicroDNSSrv)](https://github.com/jczic/MicroDNSSrv) - A micro DNS server for MicroPython to simply respond to A queries on multi-domains with or without wildcards (used on Pycom modules & ESP32).
* [tinydns ![GitHub Repo Stars](https://img.shields.io/github/stars/belyalov/tinydns) ![GitHub last commit](https://img.shields.io/github/last-commit/belyalov/tinydns)](https://github.com/belyalov/tinydns) - Very simple DNS async server for MicroPython.
* [micropython-captiveportal ![GitHub Repo Stars](https://img.shields.io/github/stars/metachris/micropython-captiveportal) ![GitHub last commit](https://img.shields.io/github/last-commit/metachris/micropython-captiveportal)](https://github.com/metachris/micropython-captiveportal) -  Minimal async captive portal for MicroPython (compatible with uasyncio v3/MicroPython 1.13+ as well as earlier versions).
* [Micropython-DNSServer-Captive-Portal ![GitHub Repo Stars](https://img.shields.io/github/stars/p-doyle/Micropython-DNSServer-Captive-Portal) ![GitHub last commit](https://img.shields.io/github/last-commit/p-doyle/Micropython-DNSServer-Captive-Portal)](https://github.com/p-doyle/Micropython-DNSServer-Captive-Portal) - MicroPython WiFi AP Captive Portal with DNS and Web Server.

#### ESP-NOW

* [mesh-espnow-micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/shariltumin/mesh-espnow-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/shariltumin/mesh-espnow-micropython)](https://github.com/shariltumin/mesh-espnow-micropython) - Dynamic Secure Mesh for Collaborative Nodes of IoT devices.

#### Ethernet

* [Official WIZnet5k ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewleech/wiznet_ioLibrary_Driver) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewleech/wiznet_ioLibrary_Driver)](https://github.com/andrewleech/wiznet_ioLibrary_Driver) - Driver for the WIZnet5x00 series of Ethernet controllers.
* [micropy-ENC28J60 ![GitHub Repo Stars](https://img.shields.io/github/stars/przemobe/micropy-ENC28J60) ![GitHub last commit](https://img.shields.io/github/last-commit/przemobe/micropy-ENC28J60)](https://github.com/przemobe/micropy-ENC28J60) - ENC28J60 Ethernet chip driver for MicroPython (RP2).
* [RP2040 Ethernet example ![GitHub Repo Stars](https://img.shields.io/github/stars/SteveSEK/Raspberry-Pi-Pico-MicroPython-Ethernet) ![GitHub last commit](https://img.shields.io/github/last-commit/SteveSEK/Raspberry-Pi-Pico-MicroPython-Ethernet)](https://github.com/SteveSEK/Raspberry-Pi-Pico-MicroPython-Ethernet) - Ethernet driver, example Python code and YouTube.
* [micropython-ch9121 ![GitHub Repo Stars](https://img.shields.io/github/stars/wybiral/micropython-ch9121) ![GitHub last commit](https://img.shields.io/github/last-commit/wybiral/micropython-ch9121)](https://github.com/wybiral/micropython-ch9121) - MicroPython library for controlling CH9121 Ethernet modules.

#### FTP

* [micropython-ftplib ![GitHub Repo Stars](https://img.shields.io/github/stars/SpotlightKid/micropython-ftplib) ![GitHub last commit](https://img.shields.io/github/last-commit/SpotlightKid/micropython-ftplib)](https://github.com/SpotlightKid/micropython-ftplib) - An FTP client library for MicroPython.
* [FTP-Server-for-ESP8266-ESP32-and-PYBD ![GitHub Repo Stars](https://img.shields.io/github/stars/robert-hh/FTP-Server-for-ESP8266-ESP32-and-PYBD) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/FTP-Server-for-ESP8266-ESP32-and-PYBD)](https://github.com/robert-hh/FTP-Server-for-ESP8266-ESP32-and-PYBD) - Small FTP server for ESP8266/ESP32/Pyboard on the MicroPython platform.
* [MicroFTPServer ![GitHub Repo Stars](https://img.shields.io/github/stars/cpopp/MicroFTPServer) ![GitHub last commit](https://img.shields.io/github/last-commit/cpopp/MicroFTPServer)](https://github.com/cpopp/MicroFTPServer) - Minimal FTP Server that can run on an ESP8266 with MicroPython.
* [micropython-uaioftp ![GitHub Repo Stars](https://img.shields.io/github/stars/cwyark/micropython-uaioftp) ![GitHub last commit](https://img.shields.io/github/last-commit/cwyark/micropython-uaioftp)](https://github.com/cwyark/micropython-uaioftp) - Lightweight FTP library for MicroPython.
* [FtpTiny-Micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/MZachmann/FtpTiny-Micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/MZachmann/FtpTiny-Micropython)](https://github.com/MZachmann/FtpTiny-Micropython) - Really small FTP server that runs in a thread.

#### GPS

* [micropyGPS ![GitHub Repo Stars](https://img.shields.io/github/stars/inmcm/micropyGPS) ![GitHub last commit](https://img.shields.io/github/last-commit/inmcm/micropyGPS)](https://github.com/inmcm/micropyGPS) - Full featured GPS NMEA sentence parser.
* [micropython-gnssl76l ![GitHub Repo Stars](https://img.shields.io/github/stars/tuupola/micropython-gnssl76l) ![GitHub last commit](https://img.shields.io/github/last-commit/tuupola/micropython-gnssl76l)](https://github.com/tuupola/micropython-gnssl76l) - MicroPython I2C driver for Quectel GNSS L76-L (GPS).
* [mpy-agps ![GitHub Repo Stars](https://img.shields.io/github/stars/pulkin/mpy-agps) ![GitHub last commit](https://img.shields.io/github/last-commit/pulkin/mpy-agps)](https://github.com/pulkin/mpy-agps) - MicroPython implementation of assisted location services (AGPS).
* [Asynchronous GPS driver ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-async) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-async)](https://github.com/peterhinch/micropython-async/blob/master/v3/docs/GPS.md) - Receive and parse GPS data as a uasyncio task.

#### GSM

* [micropython-upyphone ![GitHub Repo Stars](https://img.shields.io/github/stars/jeffmer/micropython-upyphone) ![GitHub last commit](https://img.shields.io/github/last-commit/jeffmer/micropython-upyphone)](https://github.com/jeffmer/micropython-upyphone) - A GSM phone using Pyboard and SIM800l.
* [micropython-sim800 ![GitHub Repo Stars](https://img.shields.io/github/stars/olablt/micropython-sim800) ![GitHub last commit](https://img.shields.io/github/last-commit/olablt/micropython-sim800)](https://github.com/olablt/micropython-sim800) - MicroPython driver for SIM800.
* [sim800 ![GitHub Repo Stars](https://img.shields.io/github/stars/basanovase/sim800) ![GitHub last commit](https://img.shields.io/github/last-commit/basanovase/sim800)](https://github.com/basanovase/sim800) - Library for interfacing with SIM800 module in MicroPython.
* [MicroPython-AM7020 ![GitHub Repo Stars](https://img.shields.io/github/stars/JiekangHuang/MicroPython-AM7020) ![GitHub last commit](https://img.shields.io/github/last-commit/JiekangHuang/MicroPython-AM7020)](https://github.com/JiekangHuang/MicroPython-AM7020) - MicroPython driver for AM7020 Narrowband Internet of Things (NBIoT) module.

#### HTTP

* [mrequests ![GitHub Repo Stars](https://img.shields.io/github/stars/SpotlightKid/mrequests) ![GitHub last commit](https://img.shields.io/github/last-commit/SpotlightKid/mrequests)](https://github.com/SpotlightKid/mrequests) - A HTTP client module (not only) for MicroPython with an API similar to requests.

#### IoT

* [microhomie ![GitHub Repo Stars](https://img.shields.io/github/stars/microhomie/microhomie) ![GitHub last commit](https://img.shields.io/github/last-commit/microhomie/microhomie)](https://github.com/microhomie/microhomie) - MicroPython implementation of the Homie MQTT convention for IoT.
* [uPyEcho ![GitHub Repo Stars](https://img.shields.io/github/stars/lemariva/uPyEcho) ![GitHub last commit](https://img.shields.io/github/last-commit/lemariva/uPyEcho)](https://github.com/lemariva/uPyEcho) - Emulated Belkin WeMo device that works with Amazon Echo (Alexa) using MicroPython on an ESP32.
* [SonosRemote ![GitHub Repo Stars](https://img.shields.io/github/stars/foosel/SonosRemote) ![GitHub last commit](https://img.shields.io/github/last-commit/foosel/SonosRemote)](https://github.com/foosel/SonosRemote) - A remote for Sonos installations running on an ESP8266 and using Sonos HTTP API.
* [micropython-home-assistant](https://gitlab.com/aapjeisbaas/micropython-home-assistant) - MicroPython-based scripts to extend your Home Assistant-driven home automation projects.
* [micropython-iot ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-iot) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-iot)](https://github.com/peterhinch/micropython-iot) - An approach to designing IoT applications using ESP8266, ESP32 or Pyboard D endpoints.
* [iot-core-micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/GoogleCloudPlatform/iot-core-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/GoogleCloudPlatform/iot-core-micropython)](https://github.com/GoogleCloudPlatform/iot-core-micropython) - Use MicroPython to connect to Google Cloud IoT Core.
* [SmartUPy ![GitHub Repo Stars](https://img.shields.io/github/stars/lemariva/SmartUPy) ![GitHub last commit](https://img.shields.io/github/last-commit/lemariva/SmartUPy)](https://github.com/lemariva/SmartUPy) - Controlling "Tuya-type" smart power outlets using MicroPython.
* [aws-iot-GET-POST-loop ![GitHub Repo Stars](https://img.shields.io/github/stars/manningt/aws-iot-GET-POST-loop) ![GitHub last commit](https://img.shields.io/github/last-commit/manningt/aws-iot-GET-POST-loop)](https://github.com/manningt/aws-iot-GET-POST-loop) - MicroPython code which uses the AWS IoT REST API to GET/POST device state info.
* [sensor-mqtt-homeassistant ![GitHub Repo Stars](https://img.shields.io/github/stars/DougWilkinson/sensor-mqtt-homeassistant) ![GitHub last commit](https://img.shields.io/github/last-commit/DougWilkinson/sensor-mqtt-homeassistant)](https://github.com/DougWilkinson/sensor-mqtt-homeassistant) - An ESP8266/ESP32 MicroPython-based sensor platform for GPIO, DHT, analog, LED and more. Includes remote updates for .py code from web server and MQTT/Home Assistant integration.
* [micropython-ha-mqtt-device ![GitHub Repo Stars](https://img.shields.io/github/stars/agners/micropython-ha-mqtt-device) ![GitHub last commit](https://img.shields.io/github/last-commit/agners/micropython-ha-mqtt-device)](https://github.com/agners/micropython-ha-mqtt-device) - MicroPython module which allows creating Entites for HomeAssistant using MQTT Discovery.
* [ESP8266-Home-Assistant-Smart-Socket ![GitHub Repo Stars](https://img.shields.io/github/stars/AnthonyKNorman/ESP8266-Home-Assistant-Smart-Socket) ![GitHub last commit](https://img.shields.io/github/last-commit/AnthonyKNorman/ESP8266-Home-Assistant-Smart-Socket)](https://github.com/AnthonyKNorman/ESP8266-Home-Assistant-Smart-Socket) - This MicroPython project is to hack a Hyleton313 cheap WiFi smart socket.
* [ESP8266-Home-Assistant-RGB-Bulb ![GitHub Repo Stars](https://img.shields.io/github/stars/AnthonyKNorman/ESP8266-Home-Assistant-RGB-Bulb) ![GitHub last commit](https://img.shields.io/github/last-commit/AnthonyKNorman/ESP8266-Home-Assistant-RGB-Bulb)](https://github.com/AnthonyKNorman/ESP8266-Home-Assistant-RGB-Bulb) - This MicroPython project is to hack a TYWE3S board in a cheap WiFi RGB Bulb.
* [uPyIoT ![GitHub Repo Stars](https://img.shields.io/github/stars/lemariva/uPyIoT) ![GitHub last commit](https://img.shields.io/github/last-commit/lemariva/uPyIoT)](https://github.com/lemariva/uPyIoT) - Connect an M5Stack ATOM running MicroPython to the Google Cloud Platform (GCP) to collect air-quality variables obtained from reading sensors.
* [micropython-switchbot-thermometer-hygrometer ![GitHub Repo Stars](https://img.shields.io/github/stars/hilch/micropython-switchbot-thermometer-hygrometer) ![GitHub last commit](https://img.shields.io/github/last-commit/hilch/micropython-switchbot-thermometer-hygrometer)](https://github.com/hilch/micropython-switchbot-thermometer-hygrometer) - Read SwitchBot Thermometer/Hygrometer via Bluetooth.

#### IR

* [micropython-necir ![GitHub Repo Stars](https://img.shields.io/github/stars/MattMatic/micropython-necir) ![GitHub last commit](https://img.shields.io/github/last-commit/MattMatic/micropython-necir)](https://github.com/MattMatic/micropython-necir) - NEC infrared capture for TL1838 IR receiver LEDs.
* [Micropython-IR ![GitHub Repo Stars](https://img.shields.io/github/stars/designerPing/Micropython-IR) ![GitHub last commit](https://img.shields.io/github/last-commit/designerPing/Micropython-IR)](https://github.com/designerPing/Micropython-IR) - Pyboard infrared remote sniff and replay.
* [micropython_ir ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython_ir) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython_ir)](https://github.com/peterhinch/micropython_ir) - Nonblocking device drivers to receive from IR remotes and for IR "blaster" apps.
* [micropython-amg88xx ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-amg88xx) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-amg88xx)](https://github.com/peterhinch/micropython-amg88xx) - Driver for Grid-EYE thermal infrared array sensor (Adafruit 3538).
* [micropython-ys-irtm ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-ys-irtm) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-ys-irtm)](https://github.com/mcauser/micropython-ys-irtm) - MicroPython examples for YS-IRTM 5V NEC Infrared UART transceivers.
* [esp8266_ir ![GitHub Repo Stars](https://img.shields.io/github/stars/ruoyu0088/esp8266_ir) ![GitHub last commit](https://img.shields.io/github/last-commit/ruoyu0088/esp8266_ir)](https://github.com/ruoyu0088/esp8266_ir) - Control IR signal by WebSocket.
* [micropython_espX_IR_Transceiver ![GitHub Repo Stars](https://img.shields.io/github/stars/gamefunc/micropython_espX_IR_Transceiver) ![GitHub last commit](https://img.shields.io/github/last-commit/gamefunc/micropython_espX_IR_Transceiver)](https://github.com/gamefunc/micropython_espX_IR_Transceiver) - MicroPython ESP32 IR Transceiver.
* [pico-ir ![GitHub Repo Stars](https://img.shields.io/github/stars/bartoszadamczyk/pico-ir) ![GitHub last commit](https://img.shields.io/github/last-commit/bartoszadamczyk/pico-ir)](https://github.com/bartoszadamczyk/pico-ir) - IR library for Raspberry Pi Pico.
* [esp32-ir-remote ![GitHub Repo Stars](https://img.shields.io/github/stars/cbrand/esp32-ir-remote) ![GitHub last commit](https://img.shields.io/github/last-commit/cbrand/esp32-ir-remote)](https://github.com/cbrand/esp32-ir-remote) - A MicroPython project for running ESP32 IR remotes.

#### LoRa

* [loraE22 ![GitHub Repo Stars](https://img.shields.io/github/stars/matthias-bs/loraE22) ![GitHub last commit](https://img.shields.io/github/last-commit/matthias-bs/loraE22)](https://github.com/matthias-bs/loraE22) - A MicroPython class for the Ebyte E22 Series LoRa modules.
* [micropython-lora ![GitHub Repo Stars](https://img.shields.io/github/stars/wybiral/micropython-lora) ![GitHub last commit](https://img.shields.io/github/last-commit/wybiral/micropython-lora)](https://github.com/wybiral/micropython-lora) - MicroPython library for controlling a Semtech SX127x LoRa module over SPI.
* [micropython-aiolora ![GitHub Repo Stars](https://img.shields.io/github/stars/wybiral/micropython-aiolora) ![GitHub last commit](https://img.shields.io/github/last-commit/wybiral/micropython-aiolora)](https://github.com/wybiral/micropython-aiolora) - MicroPython library for controlling a Semtech SX127x LoRa module with asyncio API.
* [micropython-rylr ![GitHub Repo Stars](https://img.shields.io/github/stars/wybiral/micropython-rylr) ![GitHub last commit](https://img.shields.io/github/last-commit/wybiral/micropython-rylr)](https://github.com/wybiral/micropython-rylr) - MicroPython library for controlling Reyax LoRa modules (RYLR896, RYLR406).
* [silvergeko_rfm9x ![GitHub Repo Stars](https://img.shields.io/github/stars/scopelemanuele/silvergeko_rfm9x) ![GitHub last commit](https://img.shields.io/github/last-commit/scopelemanuele/silvergeko_rfm9x)](https://github.com/scopelemanuele/silvergeko_rfm9x) - Porting to MicroPython of adafruit_rfm9x.py library.

#### LoRaWAN

* [uPyLoRaWAN ![GitHub Repo Stars](https://img.shields.io/github/stars/lemariva/uPyLoRaWAN) ![GitHub last commit](https://img.shields.io/github/last-commit/lemariva/uPyLoRaWAN)](https://github.com/lemariva/uPyLoRaWAN) - ESP32 using MicroPython meets LoRa and LoRaWAN.
* [SX127x_driver_for_MicroPython_on_ESP8266 ![GitHub Repo Stars](https://img.shields.io/github/stars/Wei1234c/SX127x_driver_for_MicroPython_on_ESP8266) ![GitHub last commit](https://img.shields.io/github/last-commit/Wei1234c/SX127x_driver_for_MicroPython_on_ESP8266)](https://github.com/Wei1234c/SX127x_driver_for_MicroPython_on_ESP8266) - SX127x (LoRa transceiver) driver for (Micro)Python on ESP8266/ESP32/Raspberry Pi.
* [LightLora_MicroPython ![GitHub Repo Stars](https://img.shields.io/github/stars/MZachmann/LightLora_MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/MZachmann/LightLora_MicroPython)](https://github.com/MZachmann/LightLora_MicroPython) - Lightweight Interrupt-driven Semtech SX127x Library for MicroPython.
* [u-lora ![GitHub Repo Stars](https://img.shields.io/github/stars/martynwheeler/u-lora) ![GitHub last commit](https://img.shields.io/github/last-commit/martynwheeler/u-lora)](https://github.com/martynwheeler/u-lora) - Raspi-lora for MicroPython.
* [sx127x_esp ![GitHub Repo Stars](https://img.shields.io/github/stars/azorg/sx127x_esp) ![GitHub last commit](https://img.shields.io/github/last-commit/azorg/sx127x_esp)](https://github.com/azorg/sx127x_esp) - Connect Ra-01 module base on LoRaTM sx127x chip to ESP8266/ESP32 under MicroPython.
* [nanoserver ![GitHub Repo Stars](https://img.shields.io/github/stars/gradoj/nanoserver) ![GitHub last commit](https://img.shields.io/github/last-commit/gradoj/nanoserver)](https://github.com/gradoj/nanoserver) - MicroPython embedded LoRaWAN server.
* [micropySX126X ![GitHub Repo Stars](https://img.shields.io/github/stars/ehong-tl/micropySX126X) ![GitHub last commit](https://img.shields.io/github/last-commit/ehong-tl/micropySX126X)](https://github.com/ehong-tl/micropySX126X) - Semtech SX126X LoRa driver for MicroPython and CircuitPython.

#### MDNS

* [micropython-mdns ![GitHub Repo Stars](https://img.shields.io/github/stars/cbrand/micropython-mdns) ![GitHub last commit](https://img.shields.io/github/last-commit/cbrand/micropython-mdns)](https://github.com/cbrand/micropython-mdns) - A pure Python implementation of MDNS with support for Service Discovery.

#### Modbus

* [micropython-modbus](https://gitlab.com/extel-open-source/micropython-modbus) - MicroPython port of modbus-tk.
* [micropython-modbus ![GitHub Repo Stars](https://img.shields.io/github/stars/techbase123/micropython-modbus) ![GitHub last commit](https://img.shields.io/github/last-commit/techbase123/micropython-modbus)](https://github.com/techbase123/micropython-modbus) - Modbus Master library for MicroPython ESP32 devices. Based on pycom-modbus from Pycom.
* [mp_modbus ![GitHub Repo Stars](https://img.shields.io/github/stars/eydam-prototyping/mp_modbus) ![GitHub last commit](https://img.shields.io/github/last-commit/eydam-prototyping/mp_modbus)](https://github.com/eydam-prototyping/mp_modbus) - Modbus library for MicroPython.
* [micropython-modbus ![GitHub Repo Stars](https://img.shields.io/github/stars/brainelectronics/micropython-modbus) ![GitHub last commit](https://img.shields.io/github/last-commit/brainelectronics/micropython-modbus)](https://github.com/brainelectronics/micropython-modbus) - ModBus TCP and RTU library supporting client and host mode. Based on pycom-modbus from Pycom.

#### MQTT

* [micropython-mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-mqtt)](https://github.com/peterhinch/micropython-mqtt) - A 'resilient' asynchronous MQTT driver. Plus a means of using an ESP8266 to bring MQTT to non-networked targets.
* [MQBoard ![GitHub Repo Stars](https://img.shields.io/github/stars/tve/mqboard) ![GitHub last commit](https://img.shields.io/github/last-commit/tve/mqboard)](https://github.com/tve/mqboard) - A micro-framework for using MQTT with asyncio on MicroPython boards, primarily on the ESP32.
* [pysmartnode ![GitHub Repo Stars](https://img.shields.io/github/stars/kevinkk525/pysmartnode) ![GitHub last commit](https://img.shields.io/github/last-commit/kevinkk525/pysmartnode)](https://github.com/kevinkk525/pysmartnode) -  MicroPython Smart Home framework.
* [umqtt_aws_iot ![GitHub Repo Stars](https://img.shields.io/github/stars/juwul/umqtt_aws_iot) ![GitHub last commit](https://img.shields.io/github/last-commit/juwul/umqtt_aws_iot)](https://github.com/juwul/umqtt_aws_iot) - Publish UMQTT messages with MicroPython to AWS IoT.
* [sonoff-mqtt by davea ![GitHub Repo Stars](https://img.shields.io/github/stars/davea/sonoff-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/davea/sonoff-mqtt)](https://github.com/davea/sonoff-mqtt) - MicroPython scripts to control Sonoff/ESP8266 using MQTT.
* [micropython-sonoff-switch ![GitHub Repo Stars](https://img.shields.io/github/stars/kfricke/micropython-sonoff-switch) ![GitHub last commit](https://img.shields.io/github/last-commit/kfricke/micropython-sonoff-switch)](https://github.com/kfricke/micropython-sonoff-switch) - Implements an MQTT-controllable switch for the iTead Sonoff Switch using MicroPython.
* [micropython-thingspeak-mqtt-esp8266 ![GitHub Repo Stars](https://img.shields.io/github/stars/miketeachman/micropython-thingspeak-mqtt-esp8266) ![GitHub last commit](https://img.shields.io/github/last-commit/miketeachman/micropython-thingspeak-mqtt-esp8266)](https://github.com/miketeachman/micropython-thingspeak-mqtt-esp8266) - Publish and Subscribe to ThingSpeak using MQTT with MicroPython running on ESP8266/ESP32 platforms.
* [uMQTT ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewmk/uMQTT) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewmk/uMQTT)](https://github.com/andrewmk/uMQTT) - MQTT publish for MicroPython on the WiPy board.
* [micropython-mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/chrismoorhouse/micropython-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/chrismoorhouse/micropython-mqtt)](https://github.com/chrismoorhouse/micropython-mqtt) - Async MQTT library with auto reconnect for MicroPython devices such as the ESP32 or Pycom devices.
* [micropython-adafruit-mqtt-esp8266 ![GitHub Repo Stars](https://img.shields.io/github/stars/miketeachman/micropython-adafruit-mqtt-esp8266) ![GitHub last commit](https://img.shields.io/github/last-commit/miketeachman/micropython-adafruit-mqtt-esp8266)](https://github.com/miketeachman/micropython-adafruit-mqtt-esp8266) - Using MQTT to Publish/Subscribe to Adafruit IO. MicroPython/CircuitPython implementation on ESP8266/ESP32.
* [MicropythonCayenneMQTTClient ![GitHub Repo Stars](https://img.shields.io/github/stars/uraich/MicropythonCayenneMQTTClient) ![GitHub last commit](https://img.shields.io/github/last-commit/uraich/MicropythonCayenneMQTTClient)](https://github.com/uraich/MicropythonCayenneMQTTClient) - A port of the Python Cayenne MQTT Client to MicroPython.
* [mqtt_upython ![GitHub Repo Stars](https://img.shields.io/github/stars/matbgn/mqtt_upython) ![GitHub last commit](https://img.shields.io/github/last-commit/matbgn/mqtt_upython)](https://github.com/matbgn/mqtt_upython) - MQTT Client using MicroPython on ESP8266.
* [tinymqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/belyalov/tinymqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/belyalov/tinymqtt)](https://github.com/belyalov/tinymqtt) - Async MQTT client for MicroPython.
* [micropython-mqtt-thingspeak ![GitHub Repo Stars](https://img.shields.io/github/stars/miketeachman/micropython-mqtt-thingspeak) ![GitHub last commit](https://img.shields.io/github/last-commit/miketeachman/micropython-mqtt-thingspeak)](https://github.com/miketeachman/micropython-mqtt-thingspeak) - Publish and Subscribe to ThingSpeak using MQTT with MicroPython.

#### NBD

* [unbd ![GitHub Repo Stars](https://img.shields.io/github/stars/pulkin/unbd) ![GitHub last commit](https://img.shields.io/github/last-commit/pulkin/unbd)](https://github.com/pulkin/unbd) - Micro implementation of network block device (NBD) for MicroPython.

#### NFC

* [micropython-nfc ![GitHub Repo Stars](https://img.shields.io/github/stars/rolandvs/micropython-nfc) ![GitHub last commit](https://img.shields.io/github/last-commit/rolandvs/micropython-nfc)](https://github.com/rolandvs/micropython-nfc) - Using NFC with MicroPython.
* [micropython_pn532 ![GitHub Repo Stars](https://img.shields.io/github/stars/luiz-brandao/micropython_pn532) ![GitHub last commit](https://img.shields.io/github/last-commit/luiz-brandao/micropython_pn532)](https://github.com/luiz-brandao/micropython_pn532) - Driver for PN532 NFC/RFID breakout boards based on Adafruit CircuitPython (UART).
* [NFC_PN532_SPI ![GitHub Repo Stars](https://img.shields.io/github/stars/Carglglz/NFC_PN532_SPI) ![GitHub last commit](https://img.shields.io/github/last-commit/Carglglz/NFC_PN532_SPI)](https://github.com/Carglglz/NFC_PN532_SPI) - Partial port of Adafruit CircuitPython to MicroPython of PN532 NFC/RFID control library (SPI).

#### NTP

* [esp8266_ntp_webserver ![GitHub Repo Stars](https://img.shields.io/github/stars/Roterfux/esp8266_ntp_webserver) ![GitHub last commit](https://img.shields.io/github/last-commit/Roterfux/esp8266_ntp_webserver)](https://github.com/Roterfux/esp8266_ntp_webserver) - MicroPython + ESP8266 + NTP + web server.
* [micropython-ntpd ![GitHub Repo Stars](https://img.shields.io/github/stars/dave2/micropython-ntpd) ![GitHub last commit](https://img.shields.io/github/last-commit/dave2/micropython-ntpd)](https://github.com/dave2/micropython-ntpd) - An implementation of an NTP daemon in MicroPython.
* [micropython_ntpserver ![GitHub Repo Stars](https://img.shields.io/github/stars/GrantGMiller/micropython_ntpserver) ![GitHub last commit](https://img.shields.io/github/last-commit/GrantGMiller/micropython_ntpserver)](https://github.com/GrantGMiller/micropython_ntpserver) - An NTP server written for MicroPython.
* [micropython-ntpclient ![GitHub Repo Stars](https://img.shields.io/github/stars/wieck/micropython-ntpclient) ![GitHub last commit](https://img.shields.io/github/last-commit/wieck/micropython-ntpclient)](https://github.com/wieck/micropython-ntpclient) - NTP client for MicroPython using uasyncio.

#### OneWire

* [Official OneWire ![GitHub Repo Stars](https://img.shields.io/github/stars/micropython/micropython-lib) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython/micropython-lib)](https://github.com/micropython/micropython-lib/tree/master/micropython/drivers/bus/onewire) - For devices using the OneWire bus, eg Dallas DS18x20.
* [Onewire_DS18X20 ![GitHub Repo Stars](https://img.shields.io/github/stars/robert-hh/Onewire_DS18X20) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/Onewire_DS18X20)](https://github.com/robert-hh/Onewire_DS18X20) - Classes for driving the DS18x20 sensor with the OneWire protocol for Pycom MicroPython.
* [micropython_arduino_control ![GitHub Repo Stars](https://img.shields.io/github/stars/kevinkk525/micropython_arduino_control) ![GitHub last commit](https://img.shields.io/github/last-commit/kevinkk525/micropython_arduino_control)](https://github.com/kevinkk525/micropython_arduino_control) - MicroPython library to control an Arduino remotely, with corresponding Arduino code.

#### Onkyo EISCP

* [eiscp-micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/cbrand/eiscp-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/cbrand/eiscp-micropython)](https://github.com/cbrand/eiscp-micropython) - MicroPython port for the Onkyo-EISCP protocol used, among others, by Pioneer.

#### OTA

* [micropython-ota-updater ![GitHub Repo Stars](https://img.shields.io/github/stars/rdehuyss/micropython-ota-updater) ![GitHub last commit](https://img.shields.io/github/last-commit/rdehuyss/micropython-ota-updater)](https://github.com/rdehuyss/micropython-ota-updater) - OTA Updater for MicroPython.
* [Micropython-ESP32-OTA ![GitHub Repo Stars](https://img.shields.io/github/stars/AkhileshThorat/Micropython-ESP32-OTA) ![GitHub last commit](https://img.shields.io/github/last-commit/AkhileshThorat/Micropython-ESP32-OTA)](https://github.com/AkhileshThorat/Micropython-ESP32-OTA) - MicroPython updater based on rdehuyss/micropython-ota-updater.
* [senko ![GitHub Repo Stars](https://img.shields.io/github/stars/RangerDigital/senko) ![GitHub last commit](https://img.shields.io/github/last-commit/RangerDigital/senko)](https://github.com/RangerDigital/senko) - Simplest OTA update solution for your MicroPython projects.

#### Radio

* [micropython-radio ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-radio) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-radio)](https://github.com/peterhinch/micropython-radio) - Protocols for nRF24L01 2.4GHz radio modules.
* [micropython-rfsocket ![GitHub Repo Stars](https://img.shields.io/github/stars/wuub/micropython-rfsocket) ![GitHub last commit](https://img.shields.io/github/last-commit/wuub/micropython-rfsocket)](https://github.com/wuub/micropython-rfsocket) - MicroPython implementation of popular 433MHz-based RFSockets.
* [Official nRF24L01 ![GitHub Repo Stars](https://img.shields.io/github/stars/micropython/micropython-lib) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython/micropython-lib)](https://github.com/micropython/micropython-lib/tree/master/micropython/drivers/radio/nrf24l01) - Official driver for nRF24L01 2.4GHz radio modules.
* [micropython_remote ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython_remote) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython_remote)](https://github.com/peterhinch/micropython_remote) - Capture and replay 433MHz remote control codes. Control remote switched power adaptors.
* [micropython-ys-rf34t ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-ys-rf34t) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-ys-rf34t)](https://github.com/mcauser/micropython-ys-rf34t) - MicroPython examples using YS-RF34T 433MHz ASK/OOK UART transceivers.
* [FM_Talkie ![GitHub Repo Stars](https://img.shields.io/github/stars/Wei1234c/FM_Talkie) ![GitHub last commit](https://img.shields.io/github/last-commit/Wei1234c/FM_Talkie)](https://github.com/Wei1234c/FM_Talkie) - FM Walkie Talkie using RDA5820N.
* [micropython-TEA5767 ![GitHub Repo Stars](https://img.shields.io/github/stars/alankrantas/micropython-TEA5767) ![GitHub last commit](https://img.shields.io/github/last-commit/alankrantas/micropython-TEA5767)](https://github.com/alankrantas/micropython-TEA5767) - MicroPython ESP8266/ESP32 driver for TEA5767 FM radio module.
* [micropython-ppm-decoder ![GitHub Repo Stars](https://img.shields.io/github/stars/dastultz/micropython-ppm-decoder) ![GitHub last commit](https://img.shields.io/github/last-commit/dastultz/micropython-ppm-decoder)](https://github.com/dastultz/micropython-ppm-decoder) - Utility for decoding an R/C receiver PPM frame signal.
* [ESP32-433Mhz-Receiver-and-Tools ![GitHub Repo Stars](https://img.shields.io/github/stars/Aschhoff/ESP32-433Mhz-Receiver-and-Tools) ![GitHub last commit](https://img.shields.io/github/last-commit/Aschhoff/ESP32-433Mhz-Receiver-and-Tools)](https://github.com/Aschhoff/ESP32-433Mhz-Receiver-and-Tools) - ESP32 433MHz receiver written in MicroPython and tools for Windows.
* [ESP32-433Mhz-Transmitter ![GitHub Repo Stars](https://img.shields.io/github/stars/Aschhoff/ESP32-433Mhz-Transmitter) ![GitHub last commit](https://img.shields.io/github/last-commit/Aschhoff/ESP32-433Mhz-Transmitter)](https://github.com/Aschhoff/ESP32-433Mhz-Transmitter) - A pure MicroPython RF transmitter. You can create and add your own encoder.
* [pico_jjy_tx ![GitHub Repo Stars](https://img.shields.io/github/stars/elehobica/pico_jjy_tx) ![GitHub last commit](https://img.shields.io/github/last-commit/elehobica/pico_jjy_tx)](https://github.com/elehobica/pico_jjy_tx) - JJY transmitter for Raspberry Pi Pico W.
* [pico_dcf77_tx ![GitHub Repo Stars](https://img.shields.io/github/stars/elehobica/pico_dcf77_tx) ![GitHub last commit](https://img.shields.io/github/last-commit/elehobica/pico_dcf77_tx)](https://github.com/elehobica/pico_dcf77_tx) - DCF77 transmitter for Raspberry Pi Pico W.
* [micropython_dcf77 ![GitHub Repo Stars](https://img.shields.io/github/stars/dsiggi/micropython-dcf77) ![GitHub last commit](https://img.shields.io/github/last-commit/dsiggi/micropython-dcf77)](https://github.com/dsiggi/micropython-dcf77) - DCF77 receiver and decoder.

#### RC receiver

* [micropython-ppm_reader ![GitHub Repo Stars](https://img.shields.io/github/stars/redoxcode/micropython-ppm_reader) ![GitHub last commit](https://img.shields.io/github/last-commit/redoxcode/micropython-ppm_reader)](https://github.com/redoxcode/micropython-ppm_reader) - Library to decode PPM signals coming from a RC receiver.

#### REPL

* [webrepl](https://micropython.org/webrepl) - MicroPython WebREPL.
* [zepl](https://gitlab.com/zepl1/zepl) - MicroPython WebREPL Console Application using ZeroMQ.
* [jupyter_micropython_remote](https://gitlab.com/alelec/jupyter_micropython_remote) - Jupyter kernel to directly execute code on a MicroPython board over the serial/web REPL.
* [FBConsole ![GitHub Repo Stars](https://img.shields.io/github/stars/boochow/FBConsole) ![GitHub last commit](https://img.shields.io/github/last-commit/boochow/FBConsole)](https://github.com/boochow/FBConsole) - Framebuffer console class for MicroPython.

#### RFID

* [micropython-mfrc522 ![GitHub Repo Stars](https://img.shields.io/github/stars/wendlers/micropython-mfrc522) ![GitHub last commit](https://img.shields.io/github/last-commit/wendlers/micropython-mfrc522)](https://github.com/wendlers/micropython-mfrc522) - Driver for NXP MFRC522 RFID reader/writer.
* [micropython-wiegand ![GitHub Repo Stars](https://img.shields.io/github/stars/pjz/micropython-wiegand) ![GitHub last commit](https://img.shields.io/github/last-commit/pjz/micropython-wiegand)](https://github.com/pjz/micropython-wiegand) - Wiegand protocol reader.
* [urdm6300 ![GitHub Repo Stars](https://img.shields.io/github/stars/membermatters/urdm6300) ![GitHub last commit](https://img.shields.io/github/last-commit/membermatters/urdm6300)](https://github.com/membermatters/urdm6300) - A MicroPython driver for the popular RDM6300 RFID card reader.

#### RPC

* [ujrpc ![GitHub Repo Stars](https://img.shields.io/github/stars/zcattacz/ujrpc) ![GitHub last commit](https://img.shields.io/github/last-commit/zcattacz/ujrpc)](https://github.com/zcattacz/ujrpc) - JSON RPC for MicroPython.

#### RTC

* [micropython-tinyrtc-i2c ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-tinyrtc-i2c) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-tinyrtc-i2c)](https://github.com/mcauser/micropython-tinyrtc-i2c) - Driver for DS1307 RTC and AT24C32N EEPROM.
* [Micropython_TinyRTC ![GitHub Repo Stars](https://img.shields.io/github/stars/AnthonyKNorman/Micropython_TinyRTC) ![GitHub last commit](https://img.shields.io/github/last-commit/AnthonyKNorman/Micropython_TinyRTC)](https://github.com/AnthonyKNorman/Micropython_TinyRTC) - Driver for DS1307 RTC.
* [micropython-mcp7940 ![GitHub Repo Stars](https://img.shields.io/github/stars/mattytrentini/micropython-mcp7940) ![GitHub last commit](https://img.shields.io/github/last-commit/mattytrentini/micropython-mcp7940)](https://github.com/mattytrentini/micropython-mcp7940) - Driver for the Microchip MCP7940 RTC.
* [micropython-ds1302-rtc ![GitHub Repo Stars](https://img.shields.io/github/stars/omarbenhamid/micropython-ds1302-rtc) ![GitHub last commit](https://img.shields.io/github/last-commit/omarbenhamid/micropython-ds1302-rtc)](https://github.com/omarbenhamid/micropython-ds1302-rtc) - DS1302 RTC Clock driver for MicroPython.
* [DS3231micro ![GitHub Repo Stars](https://img.shields.io/github/stars/notUnique/DS3231micro) ![GitHub last commit](https://img.shields.io/github/last-commit/notUnique/DS3231micro)](https://github.com/notUnique/DS3231micro) - MicroPython library for DS3231.
* [micropython-ds1307 ![GitHub Repo Stars](https://img.shields.io/github/stars/brainelectronics/micropython-ds1307) ![GitHub last commit](https://img.shields.io/github/last-commit/brainelectronics/micropython-ds1307)](https://github.com/brainelectronics/micropython-ds1307) - MicroPython driver for DS1307 RTC.
* [esp-ds3231-micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/HAIZAKURA/esp-ds3231-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/HAIZAKURA/esp-ds3231-micropython)](https://github.com/HAIZAKURA/esp-ds3231-micropython) - A DS3231 library for ESP8266/ESP32 with MicroPython.
* [PCF8563_PythonLibrary ![GitHub Repo Stars](https://img.shields.io/github/stars/lewisxhe/PCF8563_PythonLibrary) ![GitHub last commit](https://img.shields.io/github/last-commit/lewisxhe/PCF8563_PythonLibrary)](https://github.com/lewisxhe/PCF8563_PythonLibrary) - MicroPython library for NXP PCF8563 Real-time clock/calendar.
* [DS3231 ![GitHub Repo Stars](https://img.shields.io/github/stars/octaprog7/DS3231) ![GitHub last commit](https://img.shields.io/github/last-commit/octaprog7/DS3231)](https://github.com/octaprog7/DS3231) - MicroPython module for the DS3231 clock from Maxim Integrated.
* [DS1307 ![GitHub Repo Stars](https://img.shields.io/github/stars/peter-l5/DS1307) ![GitHub last commit](https://img.shields.io/github/last-commit/peter-l5/DS1307)](https://github.com/peter-l5/DS1307) - MicroPython driver for the DS1307 real time clock.
* [micropython-DS3231-AT24C32 ![GitHub Repo Stars](https://img.shields.io/github/stars/pangopi/micropython-DS3231-AT24C32) ![GitHub last commit](https://img.shields.io/github/last-commit/pangopi/micropython-DS3231-AT24C32)](https://github.com/pangopi/micropython-DS3231-AT24C32) - MicroPython driver for DS3231 RTC.

#### Serial

* [mpy-miniterm ![GitHub Repo Stars](https://img.shields.io/github/stars/jeffmakes/mpy-miniterm) ![GitHub last commit](https://img.shields.io/github/last-commit/jeffmakes/mpy-miniterm)](https://github.com/jeffmakes/mpy-miniterm) - Tool for seamless serial debug and file synchronisation with MicroPython devices via the serial REPL.
* [MicroPython-MorseCode](https://gitlab.com/olivierlenoir/MicroPython-MorseCode) - International Morse Code using a microcontroller with MicroPython.
* [I2C Slave ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-async) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-async)](https://github.com/peterhinch/micropython-async/blob/master/v3/docs/I2C.md) - Uses the Pyboard's I2C slave mode to implement a full duplex asynchronous link. Principal use case is for ESP8266 which has only one UART.
* [microSDI12 ![GitHub Repo Stars](https://img.shields.io/github/stars/insighio/microSDI12) ![GitHub last commit](https://img.shields.io/github/last-commit/insighio/microSDI12)](https://github.com/insighio/microSDI12) - A mini SDI-12 implementation for getting sensor info over RS-485.

#### Serialization

* [micropython-msgpack ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-msgpack) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-msgpack)](https://github.com/peterhinch/micropython-msgpack) - MessagePack serialisation library optimised for MicroPython.
* [micropython-uprotobuf ![GitHub Repo Stars](https://img.shields.io/github/stars/jazzycamel/micropython-uprotobuf) ![GitHub last commit](https://img.shields.io/github/last-commit/jazzycamel/micropython-uprotobuf)](https://github.com/jazzycamel/micropython-uprotobuf) - A lightweight implementation of Google's Protocol Buffers (protobuf) for MicroPython.
* [minipb ![GitHub Repo Stars](https://img.shields.io/github/stars/dogtopus/minipb) ![GitHub last commit](https://img.shields.io/github/last-commit/dogtopus/minipb)](https://github.com/dogtopus/minipb) - Mini Protobuf {de}serializer in pure Python.
* [ucbor ![GitHub Repo Stars](https://img.shields.io/github/stars/dmazzella/ucbor) ![GitHub last commit](https://img.shields.io/github/last-commit/dmazzella/ucbor)](https://github.com/dmazzella/ucbor) - Lightweight implementation of cbor for MicroPython.
* [upy-msgpack ![GitHub Repo Stars](https://img.shields.io/github/stars/SpotlightKid/upy-msgpack) ![GitHub last commit](https://img.shields.io/github/last-commit/SpotlightKid/upy-msgpack)](https://github.com/SpotlightKid/upy-msgpack) - A lightweight MessagePack (de)serialization library (not only) for MicroPython.

#### SMTP

* [uMail ![GitHub Repo Stars](https://img.shields.io/github/stars/shawwwn/uMail) ![GitHub last commit](https://img.shields.io/github/last-commit/shawwwn/uMail)](https://github.com/shawwwn/uMail) - A lightweight, scalable SMTP client for sending email in MicroPython.

#### Sockets

* [XAsyncSockets ![GitHub Repo Stars](https://img.shields.io/github/stars/jczic/XAsyncSockets) ![GitHub last commit](https://img.shields.io/github/last-commit/jczic/XAsyncSockets)](https://github.com/jczic/XAsyncSockets) - XAsyncSockets is an efficient Python/MicroPython library of managed asynchronous sockets.

#### SOCKS

* [micropython-socks ![GitHub Repo Stars](https://img.shields.io/github/stars/kost/micropython-socks) ![GitHub last commit](https://img.shields.io/github/last-commit/kost/micropython-socks)](https://github.com/kost/micropython-socks) - MicroPython library implementing SOCKS server.

#### TCP

* [us2n ![GitHub Repo Stars](https://img.shields.io/github/stars/tiagocoutinho/us2n) ![GitHub last commit](https://img.shields.io/github/last-commit/tiagocoutinho/us2n)](https://github.com/tiagocoutinho/us2n) - MicroPython bridge between UART and TCP for the ESP32.

#### Telnet

* [MicroTelnetServer ![GitHub Repo Stars](https://img.shields.io/github/stars/cpopp/MicroTelnetServer) ![GitHub last commit](https://img.shields.io/github/last-commit/cpopp/MicroTelnetServer)](https://github.com/cpopp/MicroTelnetServer) - Simple telnet server for MicroPython and the ESP8266 allowing telnet clients access to the REPL.

#### Text-to-Speech

* [micropython-SYN6988 ![GitHub Repo Stars](https://img.shields.io/github/stars/scruss/micropython-SYN6988) ![GitHub last commit](https://img.shields.io/github/last-commit/scruss/micropython-SYN6988)](https://github.com/scruss/micropython-SYN6988) - MicroPython library for the VoiceTX SYN6988 text to speech module.

#### VoIP

* [uPyVoip ![GitHub Repo Stars](https://img.shields.io/github/stars/RetepRelleum/uPyVoip) ![GitHub last commit](https://img.shields.io/github/last-commit/RetepRelleum/uPyVoip)](https://github.com/RetepRelleum/uPyVoip) - VoIP for MicroPython ESP32 with Interactive Voice Response.

#### Web

* [MicroWebSrv ![GitHub Repo Stars](https://img.shields.io/github/stars/jczic/MicroWebSrv) ![GitHub last commit](https://img.shields.io/github/last-commit/jczic/MicroWebSrv)](https://github.com/jczic/MicroWebSrv) - A micro HTTP web server that supports WebSockets, HTML/Python language templating and routing handlers, for MicroPython (used on Pycom modules & ESP32).
* [MicroWebSrv2 ![GitHub Repo Stars](https://img.shields.io/github/stars/jczic/MicroWebSrv2) ![GitHub last commit](https://img.shields.io/github/last-commit/jczic/MicroWebSrv2)](https://github.com/jczic/MicroWebSrv2) - The last micro web server for IoTs (MicroPython) or large servers (CPython), that supports WebSocket, routes, template engine and with really optimized architecture (mem allocations, async I/Os).
* [tinyweb ![GitHub Repo Stars](https://img.shields.io/github/stars/belyalov/tinyweb) ![GitHub last commit](https://img.shields.io/github/last-commit/belyalov/tinyweb)](https://github.com/belyalov/tinyweb) - Simple and lightweight HTTP async server for MicroPython.
* [upy-websocket-server ![GitHub Repo Stars](https://img.shields.io/github/stars/BetaRavener/upy-websocket-server) ![GitHub last commit](https://img.shields.io/github/last-commit/BetaRavener/upy-websocket-server)](https://github.com/BetaRavener/upy-websocket-server) - MicroPython (ESP8266) WebSocket server implementation.
* [micropython-captive-portal ![GitHub Repo Stars](https://img.shields.io/github/stars/amora-labs/micropython-captive-portal) ![GitHub last commit](https://img.shields.io/github/last-commit/amora-labs/micropython-captive-portal)](https://github.com/amora-labs/micropython-captive-portal) - A captive portal demo for MicroPython.
* [uPyPortal ![GitHub Repo Stars](https://img.shields.io/github/stars/lemariva/uPyPortal) ![GitHub last commit](https://img.shields.io/github/last-commit/lemariva/uPyPortal)](https://github.com/lemariva/uPyPortal) - A captive portal for MicroPython using ESP32 (Wemos).
* [ESP8266WebServer ![GitHub Repo Stars](https://img.shields.io/github/stars/codemee/ESP8266WebServer) ![GitHub last commit](https://img.shields.io/github/last-commit/codemee/ESP8266WebServer)](https://github.com/codemee/ESP8266WebServer) - ESP8266 web server for MicroPython.
* [microCoAPy ![GitHub Repo Stars](https://img.shields.io/github/stars/insighio/microCoAPy) ![GitHub last commit](https://img.shields.io/github/last-commit/insighio/microCoAPy)](https://github.com/insighio/microCoAPy) - A mini client/server implementation of CoAP (Constrained Application Protocol) into MicroPython.
* [micropyserver ![GitHub Repo Stars](https://img.shields.io/github/stars/troublegum/micropyserver) ![GitHub last commit](https://img.shields.io/github/last-commit/troublegum/micropyserver)](https://github.com/troublegum/micropyserver) - MicroPyServer is a simple HTTP server for MicroPython projects.
* [MicroRESTCli ![GitHub Repo Stars](https://img.shields.io/github/stars/jczic/MicroRESTCli) ![GitHub last commit](https://img.shields.io/github/last-commit/jczic/MicroRESTCli)](https://github.com/jczic/MicroRESTCli) - A micro JSON REST web client based on MicroWebCli for MicroPython (used on Pycom modules & ESP32).
* [micropython-noggin ![GitHub Repo Stars](https://img.shields.io/github/stars/larsks/micropython-noggin) ![GitHub last commit](https://img.shields.io/github/last-commit/larsks/micropython-noggin)](https://github.com/larsks/micropython-noggin) - A very simple web server for MicroPython.
* [uwebsockets ![GitHub Repo Stars](https://img.shields.io/github/stars/danni/uwebsockets) ![GitHub last commit](https://img.shields.io/github/last-commit/danni/uwebsockets)](https://github.com/danni/uwebsockets) - MicroPython WebSocket implementation for ESP8266.
* [microdot ![GitHub Repo Stars](https://img.shields.io/github/stars/miguelgrinberg/microdot) ![GitHub last commit](https://img.shields.io/github/last-commit/miguelgrinberg/microdot)](https://github.com/miguelgrinberg/microdot) - The impossibly small web framework for MicroPython.
* [micropython-nanoweb ![GitHub Repo Stars](https://img.shields.io/github/stars/hugokernel/micropython-nanoweb) ![GitHub last commit](https://img.shields.io/github/last-commit/hugokernel/micropython-nanoweb)](https://github.com/hugokernel/micropython-nanoweb) - Full async MicroPython web server with small memory footprint.
* [MicroWebCli ![GitHub Repo Stars](https://img.shields.io/github/stars/jczic/MicroWebCli) ![GitHub last commit](https://img.shields.io/github/last-commit/jczic/MicroWebCli)](https://github.com/jczic/MicroWebCli) - A micro HTTP web client for MicroPython (used on Pycom modules & ESP32).
* [micropython-configserver ![GitHub Repo Stars](https://img.shields.io/github/stars/carstenblt/micropython-configserver) ![GitHub last commit](https://img.shields.io/github/last-commit/carstenblt/micropython-configserver)](https://github.com/carstenblt/micropython-configserver) - Captive portal for MicroPython including a dumb DNS server and a web server to configure WiFi networks.
* [micropython-aioweb ![GitHub Repo Stars](https://img.shields.io/github/stars/wybiral/micropython-aioweb) ![GitHub last commit](https://img.shields.io/github/last-commit/wybiral/micropython-aioweb)](https://github.com/wybiral/micropython-aioweb) - A minimalist asyncio web framework for MicroPython.
* [thimble ![GitHub Repo Stars](https://img.shields.io/github/stars/DavesCodeMusings/thimble) ![GitHub last commit](https://img.shields.io/github/last-commit/DavesCodeMusings/thimble)](https://github.com/DavesCodeMusings/thimble) - A tiny web framework for MicroPython.
* [CaptiveWebServer ![GitHub Repo Stars](https://img.shields.io/github/stars/joewez/CaptiveWebServer) ![GitHub last commit](https://img.shields.io/github/last-commit/joewez/CaptiveWebServer)](https://github.com/joewez/CaptiveWebServer) - Simple MicroPython web server for serving a website from a captive portal.
* [micropython-urouter ![GitHub Repo Stars](https://img.shields.io/github/stars/whales-chen/micropython-urouter) ![GitHub last commit](https://img.shields.io/github/last-commit/whales-chen/micropython-urouter)](https://github.com/whales-chen/micropython-urouter) - A lightweight HTTP request routing processing support library based on MicroPython. The previous name was micro-route.
* [wlan-relays ![GitHub Repo Stars](https://img.shields.io/github/stars/oliver-joos/wlan-relays) ![GitHub last commit](https://img.shields.io/github/last-commit/oliver-joos/wlan-relays)](https://github.com/oliver-joos/wlan-relays) - Very simple HTTP server written in MicroPython for controlling the pins of an ESP32 board.

#### WiFi

* [HueBridge ![GitHub Repo Stars](https://img.shields.io/github/stars/FRC4564/HueBridge) ![GitHub last commit](https://img.shields.io/github/last-commit/FRC4564/HueBridge)](https://github.com/FRC4564/HueBridge) - Philips Hue Bridge.
* [micropython-wifimanager ![GitHub Repo Stars](https://img.shields.io/github/stars/mitchins/micropython-wifimanager) ![GitHub last commit](https://img.shields.io/github/last-commit/mitchins/micropython-wifimanager)](https://github.com/mitchins/micropython-wifimanager) - A simple network configuration utility for MicroPython on the ESP8266 board.
* [WiFiManager ![GitHub Repo Stars](https://img.shields.io/github/stars/tayfunulu/WiFiManager) ![GitHub last commit](https://img.shields.io/github/last-commit/tayfunulu/WiFiManager)](https://github.com/tayfunulu/WiFiManager) - WiFi manager for ESP8266 - ESP12 - ESP32 - MicroPython.
* [Micropython-ESP-WiFi-Manager ![GitHub Repo Stars](https://img.shields.io/github/stars/brainelectronics/Micropython-ESP-WiFi-Manager) ![GitHub last commit](https://img.shields.io/github/last-commit/brainelectronics/Micropython-ESP-WiFi-Manager)](https://github.com/brainelectronics/Micropython-ESP-WiFi-Manager) - WiFi Manager to configure and connect to networks.
* [mpy-wpa_supplicant ![GitHub Repo Stars](https://img.shields.io/github/stars/Carglglz/mpy-wpa_supplicant) ![GitHub last commit](https://img.shields.io/github/last-commit/Carglglz/mpy-wpa_supplicant)](https://github.com/Carglglz/mpy-wpa_supplicant) - MicroPython module to connect to the nearest known Wifi AP.
* [micropython-wifi_manager ![GitHub Repo Stars](https://img.shields.io/github/stars/ferreira-igor/micropython-wifi_manager) ![GitHub last commit](https://img.shields.io/github/last-commit/ferreira-igor/micropython-wifi_manager)](https://github.com/ferreira-igor/micropython-wifi_manager) - WiFi Manager for ESP8266 and ESP32 using MicroPython.

#### Zigbee

* [ZbPy ![GitHub Repo Stars](https://img.shields.io/github/stars/osresearch/ZbPy) ![GitHub last commit](https://img.shields.io/github/last-commit/osresearch/ZbPy)](https://github.com/osresearch/ZbPy) - MicroPython IEEE802.15.4 / Zigbee parser.

### Display

#### E-Paper

* [micropython-ili9341 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-ili9341) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-ili9341)](https://github.com/mcauser/deshipu-micropython-ili9341) - SSD1606 active matrix ePaper display 128x180.
* [micropython-waveshare-epaper ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-waveshare-epaper) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-waveshare-epaper)](https://github.com/mcauser/micropython-waveshare-epaper) - Drivers for various Waveshare ePaper modules.
* [micropython-waveshare-epd ![GitHub Repo Stars](https://img.shields.io/github/stars/ayoy/micropython-waveshare-epd) ![GitHub last commit](https://img.shields.io/github/last-commit/ayoy/micropython-waveshare-epd)](https://github.com/ayoy/micropython-waveshare-epd) - Waveshare ePaper Display driver for devices running Pycom-flavored MicroPython.
* [ssd1675a ![GitHub Repo Stars](https://img.shields.io/github/stars/mattytrentini/ssd1675a) ![GitHub last commit](https://img.shields.io/github/last-commit/mattytrentini/ssd1675a)](https://github.com/mattytrentini/ssd1675a) - Driver for SSD1675-based e-paper displays.
* [Inkplate-micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/SolderedElectronics/Inkplate-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/SolderedElectronics/Inkplate-micropython)](https://github.com/SolderedElectronics/Inkplate-micropython) - MicroPython driver for Inkplate boards.
* [micropython-inkplate6 ![GitHub Repo Stars](https://img.shields.io/github/stars/tve/micropython-inkplate6) ![GitHub last commit](https://img.shields.io/github/last-commit/tve/micropython-inkplate6)](https://github.com/tve/micropython-inkplate6) - MicroPython driver for the Inkplate 6.
* [eInk-micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/dhallgb/eInk-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/dhallgb/eInk-micropython)](https://github.com/dhallgb/eInk-micropython) - eInk library for Waveshare 4.3inch device on MicroPython.
* [eink ![GitHub Repo Stars](https://img.shields.io/github/stars/chevdor/eink) ![GitHub last commit](https://img.shields.io/github/last-commit/chevdor/eink)](https://github.com/chevdor/eink) - An eInk, ePaper display driver for MicroPython and ESP32.
* [micropython_DEPG0213BN ![GitHub Repo Stars](https://img.shields.io/github/stars/Inqbus/micropython_DEPG0213BN) ![GitHub last commit](https://img.shields.io/github/last-commit/Inqbus/micropython_DEPG0213BN)](https://github.com/Inqbus/micropython_DEPG0213BN) - Pure MicroPython driver for the DEPG0213BN eInk display found on the TTGO T5 V2.3 ESP32 boards.
* [uPyEINK ![GitHub Repo Stars](https://img.shields.io/github/stars/lemariva/uPyEINK) ![GitHub last commit](https://img.shields.io/github/last-commit/lemariva/uPyEINK)](https://github.com/lemariva/uPyEINK) - Control a Waveshare 7.5" E-INK display using an ESP32 running MicroPython.
* [MicroPython-2.9-inch-ePaper-Library ![GitHub Repo Stars](https://img.shields.io/github/stars/rdagger/MicroPython-2.9-inch-ePaper-Library) ![GitHub last commit](https://img.shields.io/github/last-commit/rdagger/MicroPython-2.9-inch-ePaper-Library)](https://github.com/rdagger/MicroPython-2.9-inch-ePaper-Library) - MicroPython Display Driver for WaveShare 2.9inch e-Paper Display (B).

#### Fonts

* [micropython-font-to-py ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-font-to-py) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-font-to-py)](https://github.com/peterhinch/micropython-font-to-py) - A Python 3 utility to convert fonts to Python source capable of being frozen as bytecode.
* [writer ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-font-to-py) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-font-to-py)](https://github.com/peterhinch/micropython-font-to-py/blob/master/writer/WRITER.md) - A simple way to render above Python fonts to displays whose driver is subclassed from `framebuf`.
* [ssd1306big ![GitHub Repo Stars](https://img.shields.io/github/stars/nickpmulder/ssd1306big) ![GitHub last commit](https://img.shields.io/github/last-commit/nickpmulder/ssd1306big)](https://github.com/nickpmulder/ssd1306big) - A font for MicroPython on 128x64 pixel SSD1306 OLED display.
* [framebuf2 ![GitHub Repo Stars](https://img.shields.io/github/stars/peter-l5/framebuf2) ![GitHub last commit](https://img.shields.io/github/last-commit/peter-l5/framebuf2)](https://github.com/peter-l5/framebuf2) - MicroPython FrameBuffer extension: larger and rotated font, triangles and circles.
* [micropython_GT30L24T3Y_big5_font ![GitHub Repo Stars](https://img.shields.io/github/stars/alankrantas/micropython_GT30L24T3Y_big5_font) ![GitHub last commit](https://img.shields.io/github/last-commit/alankrantas/micropython_GT30L24T3Y_big5_font)](https://github.com/alankrantas/micropython_GT30L24T3Y_big5_font) - MicroPython driver for reading BIG-5 Chinese characters from GT30L24T3Y / ER3303-1 SPI module.
* [ttgo-hershey-fonts ![GitHub Repo Stars](https://img.shields.io/github/stars/russhughes/ttgo-hershey-fonts) ![GitHub last commit](https://img.shields.io/github/last-commit/russhughes/ttgo-hershey-fonts)](https://github.com/russhughes/ttgo-hershey-fonts) - MicroPython Hershey font demo for the TTGO-LCD board.
* [packed-font ![GitHub Repo Stars](https://img.shields.io/github/stars/mark-gladding/packed-font) ![GitHub last commit](https://img.shields.io/github/last-commit/mark-gladding/packed-font)](https://github.com/mark-gladding/packed-font) -  Memory efficient MicroPython fonts for the Pico Pi and SSD1306 OLED Display.

#### Graphics

* [micropython-stage ![GitHub Repo Stars](https://img.shields.io/github/stars/python-ugame/micropython-stage) ![GitHub last commit](https://img.shields.io/github/last-commit/python-ugame/micropython-stage)](https://github.com/python-ugame/micropython-stage) - A MicroPython port of the Stage game library.
* [micropython-png ![GitHub Repo Stars](https://img.shields.io/github/stars/Ratfink/micropython-png) ![GitHub last commit](https://img.shields.io/github/last-commit/Ratfink/micropython-png)](https://github.com/Ratfink/micropython-png) - Derivative of PyPNG for use with MicroPython.
* [mpy-img-decoder ![GitHub Repo Stars](https://img.shields.io/github/stars/remixer-dec/mpy-img-decoder) ![GitHub last commit](https://img.shields.io/github/last-commit/remixer-dec/mpy-img-decoder)](https://github.com/remixer-dec/mpy-img-decoder) - PNG and JPEG decoder / parser / renderer in pure MicroPython.
* [micropython-oled-progressbars ![GitHub Repo Stars](https://img.shields.io/github/stars/follower46/micropython-oled-progressbars) ![GitHub last commit](https://img.shields.io/github/last-commit/follower46/micropython-oled-progressbars)](https://github.com/follower46/micropython-oled-progressbars) - A collection of progress bars for use with ESP8266 and ESP32 on OLED displays.
* [microplot ![GitHub Repo Stars](https://img.shields.io/github/stars/romilly/microplot) ![GitHub last commit](https://img.shields.io/github/last-commit/romilly/microplot)](https://github.com/romilly/microplot) - Simple MicroPython plotting package.
* [micropython-microbmp ![GitHub Repo Stars](https://img.shields.io/github/stars/jacklinquan/micropython-microbmp) ![GitHub last commit](https://img.shields.io/github/last-commit/jacklinquan/micropython-microbmp)](https://github.com/jacklinquan/micropython-microbmp) - A small Python module for BMP image processing.

#### GUI

* [lvgl ![GitHub Repo Stars](https://img.shields.io/github/stars/lvgl/lv_binding_micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/lvgl/lv_binding_micropython)](https://github.com/lvgl/lv_binding_micropython) - An object-oriented, component-based high-level GUI library with MicroPython binding.
* [micropython-lcd160cr-gui ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-lcd160cr-gui) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-lcd160cr-gui)](https://github.com/peterhinch/micropython-lcd160cr-gui) - Simple touch-driven event based GUI for the Pyboard and LCD160CR colour display.
* [micropython_ra8875 ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython_ra8875) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython_ra8875)](https://github.com/peterhinch/micropython_ra8875) - MicroPython device driver and nano-GUI for RA8875 based displays.
* [micropython-nano-gui ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-nano-gui) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-nano-gui)](https://github.com/peterhinch/micropython-nano-gui) - A tiny display-only GUI with a limited set of GUI objects (widgets) for displays whose display driver is subclassed from the `framebuf` class. With drivers for TFT, ePaper and OLED displays.
* [micro-gui ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-micro-gui) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-micro-gui)](https://github.com/peterhinch/micropython-micro-gui) - Derived from nano-gui and supporting the same displays and hosts, this provides for user input via push buttons or a navigation joystick and an optional rotary encoder.
* [TFT-GUI ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-tft-gui) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-tft-gui)](https://github.com/peterhinch/micropython-tft-gui) - A fast touch GUI for large displays based on SSD1963 controller with XPT2046 touch controller.
* [micropython-nextion ![GitHub Repo Stars](https://img.shields.io/github/stars/brainelectronics/micropython-nextion) ![GitHub last commit](https://img.shields.io/github/last-commit/brainelectronics/micropython-nextion)](https://github.com/brainelectronics/micropython-nextion) - Control Nextion displays using MicroPython.
* [mp_lvgl_widgets ![GitHub Repo Stars](https://img.shields.io/github/stars/kdschlosser/mp_lvgl_widgets) ![GitHub last commit](https://img.shields.io/github/last-commit/kdschlosser/mp_lvgl_widgets)](https://github.com/kdschlosser/mp_lvgl_widgets) - Widgets for the MicroPython Port of LVGL.
* [micropython-core2 ![GitHub Repo Stars](https://img.shields.io/github/stars/lemariva/micropython-core2) ![GitHub last commit](https://img.shields.io/github/last-commit/lemariva/micropython-core2)](https://github.com/lemariva/micropython-core2) - Extends LV-MicroPython for the M5Stack CORE2 with MPU6886, ILI9342C, BM8563 and AXP192 drivers.

#### LCD Character

* [Grove_RGB_LCD ![GitHub Repo Stars](https://img.shields.io/github/stars/dda/MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/dda/MicroPython)](https://github.com/dda/MicroPython/blob/master/Grove_RGB_LCD.py) - Driver for SeeedStudio's Grove RGB LCD.
* [lcdi2c ![GitHub Repo Stars](https://img.shields.io/github/stars/slothyrulez/lcdi2c) ![GitHub last commit](https://img.shields.io/github/last-commit/slothyrulez/lcdi2c)](https://github.com/slothyrulez/lcdi2c) - Driver for HD44780-compatible dot matrix LCDs.
* [micropython-charlcd ![GitHub Repo Stars](https://img.shields.io/github/stars/rdagger/micropython-charlcd) ![GitHub last commit](https://img.shields.io/github/last-commit/rdagger/micropython-charlcd)](https://github.com/rdagger/micropython-charlcd) - Driver for HD44780-compatible LCDs.
* [micropython-i2c-lcd ![GitHub Repo Stars](https://img.shields.io/github/stars/Bucknalla/micropython-i2c-lcd) ![GitHub last commit](https://img.shields.io/github/last-commit/Bucknalla/micropython-i2c-lcd)](https://github.com/Bucknalla/micropython-i2c-lcd) - Driver for I2C 2x16 LCD Screens.
* [pyboard-LCD-character-display ![GitHub Repo Stars](https://img.shields.io/github/stars/scitoast/pyboard-LCD-character-display) ![GitHub last commit](https://img.shields.io/github/last-commit/scitoast/pyboard-LCD-character-display)](https://github.com/scitoast/pyboard-LCD-character-display) - Pyboar driver for HDD44780-compatible 1602 LCDs.
* [python_lcd ![GitHub Repo Stars](https://img.shields.io/github/stars/dhylands/python_lcd) ![GitHub last commit](https://img.shields.io/github/last-commit/dhylands/python_lcd)](https://github.com/dhylands/python_lcd) - Driver for HD44780-compatible dot matrix LCDs.
* [micropython-lcd ![GitHub Repo Stars](https://img.shields.io/github/stars/wjdp/micropython-lcd) ![GitHub last commit](https://img.shields.io/github/last-commit/wjdp/micropython-lcd)](https://github.com/wjdp/micropython-lcd) - Class for controlling the HD44780 from a MicroPython Pyboard.
* [HD44780-lcd-upy](https://gitlab.com/rafalosa/HD44780-lcd-upy) - MicroPython module for controlling a generic HD44780 LCD.
* [LCM1602-14_LCD_Library ![GitHub Repo Stars](https://img.shields.io/github/stars/Bhavithiran97/LCM1602-14_LCD_Library) ![GitHub last commit](https://img.shields.io/github/last-commit/Bhavithiran97/LCM1602-14_LCD_Library)](https://github.com/Bhavithiran97/LCM1602-14_LCD_Library) - driver for AIP31068L [3.3 V I2C and SPI 1602 Serial Character LCDs](https://www.cytron.io/p-3v3-i2c-and-spi-1602-serial-character-lcd).
* [micropython-i2c-lcd ![GitHub Repo Stars](https://img.shields.io/github/stars/brainelectronics/micropython-i2c-lcd) ![GitHub last commit](https://img.shields.io/github/last-commit/brainelectronics/micropython-i2c-lcd)](https://github.com/brainelectronics/micropython-i2c-lcd) - MicroPython package to control HD44780 LCD displays 1602 and 2004 via I2C.

#### LCD Graphic

* [micropython-lcd-AQM1248A ![GitHub Repo Stars](https://img.shields.io/github/stars/forester3/micropython-lcd-AQM1248A) ![GitHub last commit](https://img.shields.io/github/last-commit/forester3/micropython-lcd-AQM1248A)](https://github.com/forester3/micropython-lcd-AQM1248A) - ESP8266 driver for AQM1248A graphic LCD.
* [micropython-pcd8544 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-pcd8544) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-pcd8544)](https://github.com/mcauser/micropython-pcd8544) - Driver for Nokia 5110 PCD8544 84x48 LCD modules.
* [micropython-st7565 ![GitHub Repo Stars](https://img.shields.io/github/stars/nquest/micropython-st7565) ![GitHub last commit](https://img.shields.io/github/last-commit/nquest/micropython-st7565)](https://github.com/nquest/micropython-st7565) - Driver for ST7565 128x64 LCDs.
* [micropython-st7920 ![GitHub Repo Stars](https://img.shields.io/github/stars/ShrimpingIt/micropython-st7920) ![GitHub last commit](https://img.shields.io/github/last-commit/ShrimpingIt/micropython-st7920)](https://github.com/ShrimpingIt/micropython-st7920) - Library for simple graphic primitives on ST7920 128x64 monochrome LCD panel using ESP8266 and SPI.
* [MicroPython_PCD8544 ![GitHub Repo Stars](https://img.shields.io/github/stars/AnthonyKNorman/MicroPython_PCD8544) ![GitHub last commit](https://img.shields.io/github/last-commit/AnthonyKNorman/MicroPython_PCD8544)](https://github.com/AnthonyKNorman/MicroPython_PCD8544) - ESP8266 driver for Nokia 5110 PCD8544.
* [Official LCD160CR ![GitHub Repo Stars](https://img.shields.io/github/stars/micropython/micropython-lib) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython/micropython-lib)](https://github.com/micropython/micropython-lib/tree/master/micropython/drivers/display/lcd160cr) - Driver for official MicroPython LCD160CR display with resistive touch sensor.
* [micropython-hx1230 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-hx1230) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-hx1230)](https://github.com/mcauser/micropython-hx1230) - MicroPython library for HX1230 96x68 LCD modules.
* [micropython-SHARP_Memory_Display ![GitHub Repo Stars](https://img.shields.io/github/stars/pramasoul/micropython-SHARP_Memory_Display) ![GitHub last commit](https://img.shields.io/github/last-commit/pramasoul/micropython-SHARP_Memory_Display)](https://github.com/pramasoul/micropython-SHARP_Memory_Display) - MicroPython driver for SHARP memory display.

#### LCD TFT

* [micropython-ili9341 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-ili9341) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-ili9341)](https://github.com/mcauser/deshipu-micropython-ili9341) - Collection of drivers for TFT displays, ILI9341, SH1106, SSD1606, ST7735.
* [micropython-ili934x ![GitHub Repo Stars](https://img.shields.io/github/stars/tuupola/micropython-ili934x) ![GitHub last commit](https://img.shields.io/github/last-commit/tuupola/micropython-ili934x)](https://github.com/tuupola/micropython-ili934x) - SPI driver for ILI934X series based TFT / LCD displays.
* [MicroPython-ST7735 ![GitHub Repo Stars](https://img.shields.io/github/stars/boochow/MicroPython-ST7735) ![GitHub last commit](https://img.shields.io/github/last-commit/boochow/MicroPython-ST7735)](https://github.com/boochow/MicroPython-ST7735) - ESP32 version of GuyCarvers's ST7735 TFT LCD driver.
* [micropython-st7735 ![GitHub Repo Stars](https://img.shields.io/github/stars/hosaka/micropython-st7735) ![GitHub last commit](https://img.shields.io/github/last-commit/hosaka/micropython-st7735)](https://github.com/hosaka/micropython-st7735) - Driver for ST7735 TFT LCDs.
* [MicroPython_ST7735 ![GitHub Repo Stars](https://img.shields.io/github/stars/AnthonyKNorman/MicroPython_ST7735) ![GitHub last commit](https://img.shields.io/github/last-commit/AnthonyKNorman/MicroPython_ST7735)](https://github.com/AnthonyKNorman/MicroPython_ST7735) - Driver for ST7735 128x128 TFT.
* [SSD1963-TFT-Library-for-PyBoard-and-RP2040 ![GitHub Repo Stars](https://img.shields.io/github/stars/robert-hh/SSD1963-TFT-Library-for-PyBoard-and-RP2040) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/SSD1963-TFT-Library-for-PyBoard-and-RP2040)](https://github.com/robert-hh/SSD1963-TFT-Library-for-PyBoard-and-RP2040) - SSD1963 TFT Library for Pyboard and Raspberry Pi Pico.
* [ST7735 ![GitHub Repo Stars](https://img.shields.io/github/stars/GuyCarver/MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/GuyCarver/MicroPython)](https://github.com/GuyCarver/MicroPython/blob/master/lib/ST7735.py) - Driver for ST7735 TFT LCDs.
* [micropython-ili9341 ![GitHub Repo Stars](https://img.shields.io/github/stars/rdagger/micropython-ili9341) ![GitHub last commit](https://img.shields.io/github/last-commit/rdagger/micropython-ili9341)](https://github.com/rdagger/micropython-ili9341) - MicroPython ILI9341 display & XPT2046 touch screen driver.
* [st7789_mpy ![GitHub Repo Stars](https://img.shields.io/github/stars/devbis/st7789_mpy) ![GitHub last commit](https://img.shields.io/github/last-commit/devbis/st7789_mpy)](https://github.com/devbis/st7789_mpy) - Fast pure-C driver for MicroPython that can handle display modules on ST7789 chip.
* [st7789py_mpy ![GitHub Repo Stars](https://img.shields.io/github/stars/devbis/st7789py_mpy) ![GitHub last commit](https://img.shields.io/github/last-commit/devbis/st7789py_mpy)](https://github.com/devbis/st7789py_mpy) - Slow MicroPython driver for 240x240 ST7789 display without CS pin from AliExpress, written in MicroPython.
* [micropython-ili9341 ![GitHub Repo Stars](https://img.shields.io/github/stars/jeffmer/micropython-ili9341) ![GitHub last commit](https://img.shields.io/github/last-commit/jeffmer/micropython-ili9341)](https://github.com/jeffmer/micropython-ili9341) - MicroPython Driver for ILI9341 display.
* [micropython-ili9341 ![GitHub Repo Stars](https://img.shields.io/github/stars/tkurbad/micropython-ili9341) ![GitHub last commit](https://img.shields.io/github/last-commit/tkurbad/micropython-ili9341)](https://github.com/tkurbad/micropython-ili9341) - ILI9341 TFT driver for MicroPython on ESP32.
* [st7789_mpy ![GitHub Repo Stars](https://img.shields.io/github/stars/russhughes/st7789_mpy) ![GitHub last commit](https://img.shields.io/github/last-commit/russhughes/st7789_mpy)](https://github.com/russhughes/st7789_mpy) - Fast MicroPython driver for ST7789 display module written in C.
* [st7789py_mpy ![GitHub Repo Stars](https://img.shields.io/github/stars/russhughes/st7789py_mpy) ![GitHub last commit](https://img.shields.io/github/last-commit/russhughes/st7789py_mpy)](https://github.com/russhughes/st7789py_mpy) - Driver for 320x240, 240x240 and 135x240 ST7789 displays written in MicroPython.
* [ili9342c_mpy ![GitHub Repo Stars](https://img.shields.io/github/stars/russhughes/ili9342c_mpy) ![GitHub last commit](https://img.shields.io/github/last-commit/russhughes/ili9342c_mpy)](https://github.com/russhughes/ili9342c_mpy) - ILI9342C Fast 'C' Driver for MicroPython (M5Stack Core).
* [gc9a01py ![GitHub Repo Stars](https://img.shields.io/github/stars/russhughes/gc9a01py) ![GitHub last commit](https://img.shields.io/github/last-commit/russhughes/gc9a01py)](https://github.com/russhughes/gc9a01py) - GC9A01 Display driver in MicroPython.
* [gc9a01_mpy ![GitHub Repo Stars](https://img.shields.io/github/stars/russhughes/gc9a01_mpy) ![GitHub last commit](https://img.shields.io/github/last-commit/russhughes/gc9a01_mpy)](https://github.com/russhughes/gc9a01_mpy) - Fast MicroPython driver for GC9A01 display modules written in C.
* [st7735-esp8266-micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/cheungbx/st7735-esp8266-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/cheungbx/st7735-esp8266-micropython)](https://github.com/cheungbx/st7735-esp8266-micropython) - An ESP8266 MicroPython library for ST7735 160x80, 128x128, 128x160 TFT LCD displays.
* [TTGO-ST7789-MicroPython ![GitHub Repo Stars](https://img.shields.io/github/stars/schumixmd/TTGO-ST7789-MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/schumixmd/TTGO-ST7789-MicroPython)](https://github.com/schumixmd/TTGO-ST7789-MicroPython) - MicroPython ST7789 display driver for TTGO T-Display ESP32 CP2104 WiFi Bluetooth Module 1.14 Inch LCD.
* [st7735_micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/cheungbx/st7735_micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/cheungbx/st7735_micropython)](https://github.com/cheungbx/st7735_micropython) - ST7735 MicroPython drivers for 80x160, 128x128, 128x160 for ESP8266.
* [ili934x-micropython](https://gitlab.com/mhepp63/ili934x-micropython) - Library for using ILI9341 display drivers with MicroPython.
* [micropython-st7735-esp8266](https://gitlab.com/mo_krauti/micropython-st7735-esp8266) - MicroPython driver for ST7735 TFT displays on the ESP8266.
* [st7789s3_esp_lcd ![GitHub Repo Stars](https://img.shields.io/github/stars/russhughes/st7789s3_esp_lcd) ![GitHub last commit](https://img.shields.io/github/last-commit/russhughes/st7789s3_esp_lcd)](https://github.com/russhughes/st7789s3_esp_lcd) - Fast ESP_LCD based MicroPython driver for the TTGO T-Display-S3 st7789 display written in C.
* [s3lcd ![GitHub Repo Stars](https://img.shields.io/github/stars/russhughes/s3lcd) ![GitHub last commit](https://img.shields.io/github/last-commit/russhughes/s3lcd)](https://github.com/russhughes/s3lcd) - ESP_LCD based MicroPython driver for ESP32-S3 Devices with ST7789 or compatible displays.
* [thmi_py ![GitHub Repo Stars](https://img.shields.io/github/stars/russhughes/thmi_py) ![GitHub last commit](https://img.shields.io/github/last-commit/russhughes/thmi_py)](https://github.com/russhughes/thmi_py) - MicroPython display driver for the LILYGO T-HMI written in Python.
* [wt32sc01py ![GitHub Repo Stars](https://img.shields.io/github/stars/russhughes/wt32sc01py) ![GitHub last commit](https://img.shields.io/github/last-commit/russhughes/wt32sc01py)](https://github.com/russhughes/wt32sc01py) - WT32SC01 Plus MicroPython Display Driver.
* [st7789s3_mpy ![GitHub Repo Stars](https://img.shields.io/github/stars/russhughes/st7789s3_mpy) ![GitHub last commit](https://img.shields.io/github/last-commit/russhughes/st7789s3_mpy)](https://github.com/russhughes/st7789s3_mpy) - MicroPython display driver for the TTGO T-Display-S3 ST7789 written in C.
* [t-display-s3 ![GitHub Repo Stars](https://img.shields.io/github/stars/russhughes/t-display-s3) ![GitHub last commit](https://img.shields.io/github/last-commit/russhughes/t-display-s3)](https://github.com/russhughes/t-display-s3) - MicroPython display driver for the TTGO T-Display-S3 ST7789 written in Python.
* [mp-ili9341 ![GitHub Repo Stars](https://img.shields.io/github/stars/tkurbad/mp-ili9341) ![GitHub last commit](https://img.shields.io/github/last-commit/tkurbad/mp-ili9341)](https://github.com/tkurbad/mp-ili9341) - MicroPython Driver for ILI9341 TFT Display.
* [lvgl_esp32_gc9a01 ![GitHub Repo Stars](https://img.shields.io/github/stars/minyiky/lvgl_esp32_gc9a01) ![GitHub last commit](https://img.shields.io/github/last-commit/minyiky/lvgl_esp32_gc9a01)](https://github.com/minyiky/lvgl_esp32_gc9a01) - Driver for displays using the GC901 driver for use with LVGL MicroPython.

#### LED Matrix

* [micropython-ht1632c ![GitHub Repo Stars](https://img.shields.io/github/stars/vrialland/micropython-ht1632c) ![GitHub last commit](https://img.shields.io/github/last-commit/vrialland/micropython-ht1632c)](https://github.com/vrialland/micropython-ht1632c) - Driver for HT1632C 32x16 bicolor LED matrix.
* [micropython-matrix8x8 ![GitHub Repo Stars](https://img.shields.io/github/stars/JanBednarik/micropython-matrix8x8) ![GitHub last commit](https://img.shields.io/github/last-commit/JanBednarik/micropython-matrix8x8)](https://github.com/JanBednarik/micropython-matrix8x8) - Driver for Adafruit 8x8 LED Matrix display with HT16K33 backpack.
* [micropython-max7219 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-max7219) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-max7219)](https://github.com/mcauser/micropython-max7219) - Driver for MAX7219 8x8 LED matrix modules.
* [micropython-wemos-led-matrix-shield ![GitHub Repo Stars](https://img.shields.io/github/stars/mactijn/micropython-wemos-led-matrix-shield) ![GitHub last commit](https://img.shields.io/github/last-commit/mactijn/micropython-wemos-led-matrix-shield)](https://github.com/mactijn/micropython-wemos-led-matrix-shield) - Driver for Wemos D1 Mini Matrix LED shield, using TM1640 chip.
* [micropython-wemos-led-matrix ![GitHub Repo Stars](https://img.shields.io/github/stars/mattytrentini/micropython-wemos-led-matrix) ![GitHub last commit](https://img.shields.io/github/last-commit/mattytrentini/micropython-wemos-led-matrix)](https://github.com/mattytrentini/micropython-wemos-led-matrix) - Driver for Wemos D1 Mini Matrix LED shield, using TM1640 chip.
* [micropython-max7219 ![GitHub Repo Stars](https://img.shields.io/github/stars/vrialland/micropython-max7219) ![GitHub last commit](https://img.shields.io/github/last-commit/vrialland/micropython-max7219)](https://github.com/vrialland/micropython-max7219) - MicroPython driver for MAX7219 8x8 LED matrix.
* [MatrixDisplay ![GitHub Repo Stars](https://img.shields.io/github/stars/octaprog7/MatrixDisplay) ![GitHub last commit](https://img.shields.io/github/last-commit/octaprog7/MatrixDisplay)](https://github.com/octaprog7/MatrixDisplay) - MicroPython module for work with MAX7219 LED matrix 8x8 display.

#### LED Segment

* [LKM1638 ![GitHub Repo Stars](https://img.shields.io/github/stars/arikb/LKM1638) ![GitHub last commit](https://img.shields.io/github/last-commit/arikb/LKM1638)](https://github.com/arikb/LKM1638) - Driver for JY-LKM1638 displays based on TM1638 controller.
* [max7219_8digit ![GitHub Repo Stars](https://img.shields.io/github/stars/pdwerryhouse/max7219_8digit) ![GitHub last commit](https://img.shields.io/github/last-commit/pdwerryhouse/max7219_8digit)](https://github.com/pdwerryhouse/max7219_8digit) - Driver for MAX7219 8-digit 7-segment LED modules.
* [micropython-max7219 ![GitHub Repo Stars](https://img.shields.io/github/stars/JulienBacquart/micropython-max7219) ![GitHub last commit](https://img.shields.io/github/last-commit/JulienBacquart/micropython-max7219)](https://github.com/JulienBacquart/micropython-max7219) - Driver for MAX7219 8-digit 7-segment LED modules.
* [micropython-my9221 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-my9221) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-my9221)](https://github.com/mcauser/micropython-my9221) - Driver for MY9221 10-segment LED bar graph modules.
* [micropython-tm1637 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-tm1637) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-tm1637)](https://github.com/mcauser/micropython-tm1637) - Driver for TM1637 quad 7-segment LED modules.
* [micropython-tm1638 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-tm1638) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-tm1638)](https://github.com/mcauser/micropython-tm1638) - Driver for TM1638 dual quad 7-segment LED modules with switches.
* [micropython-tm1640 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-tm1640) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-tm1640)](https://github.com/mcauser/micropython-tm1640) - Driver for TM1740 8x8 LED matrix modules.
* [micropython-tm1640](https://gitlab.com/robhamerling/micropython-tm1640) - MicroPython Library for 16 digits 7-segment displays controlled by a TM1640.
* [TM74HC595 ![GitHub Repo Stars](https://img.shields.io/github/stars/Sakartu/TM74HC595) ![GitHub last commit](https://img.shields.io/github/last-commit/Sakartu/TM74HC595)](https://github.com/Sakartu/TM74HC595) - Driver for shift register-controlled 5 pin display modules.
* [micropython-tm1638spi](https://gitlab.com/robhamerling/micropython-tm1638spi) - MicroPython Library for a popular board with 8 7-segment digits, 8 separate LEDs and 8 push buttons controlled by a TM1638.

#### LEDs

* [micropython-morsecode ![GitHub Repo Stars](https://img.shields.io/github/stars/mampersat/micropython-morsecode) ![GitHub last commit](https://img.shields.io/github/last-commit/mampersat/micropython-morsecode)](https://github.com/mampersat/micropython-morsecode) - Blink an LED with Morse Coded message.
* [micropython-p9813 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-p9813) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-p9813)](https://github.com/mcauser/micropython-p9813) - Driver for P9813 RGB LED used in SeeedStudio's Grove chainable RGB LED.
* [micropython-ws2812-7seg ![GitHub Repo Stars](https://img.shields.io/github/stars/HubertD/micropython-ws2812-7seg) ![GitHub last commit](https://img.shields.io/github/last-commit/HubertD/micropython-ws2812-7seg)](https://github.com/HubertD/micropython-ws2812-7seg) - 7-segment display using WS2812 RGB LEDs.
* [micropython-ws2812 ![GitHub Repo Stars](https://img.shields.io/github/stars/JanBednarik/micropython-ws2812) ![GitHub last commit](https://img.shields.io/github/last-commit/JanBednarik/micropython-ws2812)](https://github.com/JanBednarik/micropython-ws2812) - Driver for WS2812 RGB LEDs.
* [Official APA102](https://docs.micropython.org/en/latest/esp8266/quickref.html#apa102-driver) - ESP8266 APA102/DotStar RGB LED driver.
* [Official WS2811](https://docs.micropython.org/en/latest/esp8266/quickref.html#neopixel-driver) - ESP8266 WS2811/NeoPixel RGB LED driver.
* [tlc5940-micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/oysols/tlc5940-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/oysols/tlc5940-micropython)](https://github.com/oysols/tlc5940-micropython) - Driver for TLC5940 16 channel LED driver.
* [ws2812-SPI ![GitHub Repo Stars](https://img.shields.io/github/stars/nickovs/ws2812-SPI) ![GitHub last commit](https://img.shields.io/github/last-commit/nickovs/ws2812-SPI)](https://github.com/nickovs/ws2812-SPI) - An efficient MicroPython WS2812 (NeoPixel) driver.
* [micropython-ws2801 ![GitHub Repo Stars](https://img.shields.io/github/stars/HeMan/micropython-ws2801) ![GitHub last commit](https://img.shields.io/github/last-commit/HeMan/micropython-ws2801)](https://github.com/HeMan/micropython-ws2801) - A MicroPython library to interface with strands of WS2801 RGB LEDs.
* [tlc5947-rgb-micropython](https://gitlab.com/peterzuger/tlc5947-rgb-micropython) - Driver for the TLC5947 24 channel 12-bit PWM LED driver.
* [Hybotics_Micropython_HT16K33 ![GitHub Repo Stars](https://img.shields.io/github/stars/hybotics/micropython-ht16k33) ![GitHub last commit](https://img.shields.io/github/last-commit/hybotics/micropython-ht16k33)](https://github.com/hybotics/micropython-ht16k33) - MicroPython driver for the HT16K33, a LED matrix, 7-Segment Numeric, and 14-Segment Alphanumeric display driver IC.
* [micropython-rgbled ![GitHub Repo Stars](https://img.shields.io/github/stars/Warringer/micropython-rgbled) ![GitHub last commit](https://img.shields.io/github/last-commit/Warringer/micropython-rgbled)](https://github.com/Warringer/micropython-rgbled) - This wrapper module aims to reduce the work needed to work with NeoPixel (WS2812) and DotStar (APA102) RGB LED strips and matrixes.
* [micropython_fastled ![GitHub Repo Stars](https://img.shields.io/github/stars/kdschlosser/micropython_fastled) ![GitHub last commit](https://img.shields.io/github/last-commit/kdschlosser/micropython_fastled)](https://github.com/kdschlosser/micropython_fastled) - Port of FastLED to MicroPython.
* [micropython-rgb-led-driver](https://gitlab.com/Athanaze/micropython-rgb-led-driver) - Tiny driver to control an RGB LED with PWM.
* [micropython-dotstar ![GitHub Repo Stars](https://img.shields.io/github/stars/mattytrentini/micropython-dotstar) ![GitHub last commit](https://img.shields.io/github/last-commit/mattytrentini/micropython-dotstar)](https://github.com/mattytrentini/micropython-dotstar) - A MicroPython port of the Adafruit CircuitPython APA102/DotStar library.

#### OLED

* [Grove_OLED ![GitHub Repo Stars](https://img.shields.io/github/stars/dda/MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/dda/MicroPython)](https://github.com/dda/MicroPython/blob/master/Grove_OLED.py) - Driver for SSD1327 used by SeeedStudio's Grove OLED Display 1.12" v1.0.
* [micropython-oled ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-oled) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-oled)](https://github.com/mcauser/deshipu-micropython-oled) - Collection of drivers for monochrome OLED displays, PCD8544, SH1106, SSD1306, UC1701X.
* [micropython-ssd1327 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-ssd1327) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-ssd1327)](https://github.com/mcauser/micropython-ssd1327) - Driver for SSD1327 128x128 4-bit greyscale OLED displays.
* [micropython-ssd1351 ![GitHub Repo Stars](https://img.shields.io/github/stars/rdagger/micropython-ssd1351) ![GitHub last commit](https://img.shields.io/github/last-commit/rdagger/micropython-ssd1351)](https://github.com/rdagger/micropython-ssd1351) - Driver for SSD1351 OLED displays.
* [MicroPython_SSD1306 ![GitHub Repo Stars](https://img.shields.io/github/stars/AnthonyKNorman/MicroPython_SSD1306) ![GitHub last commit](https://img.shields.io/github/last-commit/AnthonyKNorman/MicroPython_SSD1306)](https://github.com/AnthonyKNorman/MicroPython_SSD1306) - ESP8266 driver for SSD1306 OLED 128x64 displays.
* [Official SSD1306 ![GitHub Repo Stars](https://img.shields.io/github/stars/micropython/micropython-lib) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython/micropython-lib)](https://github.com/micropython/micropython-lib/tree/master/micropython/drivers/display/ssd1306) - Driver for SSD1306 128x64 OLED displays.
* [SH1106 ![GitHub Repo Stars](https://img.shields.io/github/stars/robert-hh/SH1106) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/SH1106)](https://github.com/robert-hh/SH1106) - Driver for the SH1106 OLED display.
* [micropython-ssd1309 ![GitHub Repo Stars](https://img.shields.io/github/stars/rdagger/micropython-ssd1309) ![GitHub last commit](https://img.shields.io/github/last-commit/rdagger/micropython-ssd1309)](https://github.com/rdagger/micropython-ssd1309) - MicroPython SSD1309 Monochrome OLED Display Driver.
* [sh1107-micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/nemart69/sh1107-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/nemart69/sh1107-micropython)](https://github.com/nemart69/sh1107-micropython) - MicroPython driver for SH1107-based OLED display (64x128).
* [SH1107 ![GitHub Repo Stars](https://img.shields.io/github/stars/peter-l5/SH1107) ![GitHub last commit](https://img.shields.io/github/last-commit/peter-l5/SH1107)](https://github.com/peter-l5/SH1107) - Driver for SH1107 OLED displays (128x128 and 128x64 pixels).
* [micropython-ssd1322 ![GitHub Repo Stars](https://img.shields.io/github/stars/rdagger/micropython-ssd1322) ![GitHub last commit](https://img.shields.io/github/last-commit/rdagger/micropython-ssd1322)](https://github.com/rdagger/micropython-ssd1322) - MicroPython display driver for SSD1322 grayscale OLED.

#### Printer

* [micropython-thermal-printer ![GitHub Repo Stars](https://img.shields.io/github/stars/ayoy/micropython-thermal-printer) ![GitHub last commit](https://img.shields.io/github/last-commit/ayoy/micropython-thermal-printer)](https://github.com/ayoy/micropython-thermal-printer) - The MicroPython port of Python Thermal Printer by Adafruit.

### IO

#### ADC

* [ads1x15 ![GitHub Repo Stars](https://img.shields.io/github/stars/robert-hh/ads1x15) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/ads1x15)](https://github.com/robert-hh/ads1x15) - Driver for the ADS1015/ADS1115 ADC, I2C interface.
* [micropython-ads1015 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-ads1015) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-ads1015)](https://github.com/mcauser/deshipu-micropython-ads1015) - ADS1015 12-Bit and ADS1115 16-bit ADC, 4 channels with programmable gain, I2C interface.
* [Micropython_ADS1115 ![GitHub Repo Stars](https://img.shields.io/github/stars/AnthonyKNorman/Micropython_ADS1115) ![GitHub last commit](https://img.shields.io/github/last-commit/AnthonyKNorman/Micropython_ADS1115)](https://github.com/AnthonyKNorman/Micropython_ADS1115) - ADS1115 16-bit ADC, 4 channels with programmable gain, I2C interface.
* [ADS7818 ![GitHub Repo Stars](https://img.shields.io/github/stars/robert-hh/ADS7818) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/ADS7818)](https://github.com/robert-hh/ADS7818) - Python class interfacing the ADS7818 AD-converter.
* [micropython-ads1219 ![GitHub Repo Stars](https://img.shields.io/github/stars/miketeachman/micropython-ads1219) ![GitHub last commit](https://img.shields.io/github/last-commit/miketeachman/micropython-ads1219)](https://github.com/miketeachman/micropython-ads1219) - MicroPython module for the Texas Instruments ADS1219 ADC.
* [micropython-hx711 ![GitHub Repo Stars](https://img.shields.io/github/stars/SergeyPiskunov/micropython-hx711) ![GitHub last commit](https://img.shields.io/github/last-commit/SergeyPiskunov/micropython-hx711)](https://github.com/SergeyPiskunov/micropython-hx711) - MicroPython driver for HX711 24-Bit Analog-to-Digital Converter.
* [MicroPython-ADC_Cal ![GitHub Repo Stars](https://img.shields.io/github/stars/matthias-bs/MicroPython-ADC_Cal) ![GitHub last commit](https://img.shields.io/github/last-commit/matthias-bs/MicroPython-ADC_Cal)](https://github.com/matthias-bs/MicroPython-ADC_Cal) - ESP32 ADC driver using reference voltage calibration value from efuse.
* [micropython-pcf8591](https://gitlab.com/cediddi/micropython-pcf8591) - MicroPython driver for PCF8591 ADC/DAC, I2C interface.
* [hx711_mpy-driver ![GitHub Repo Stars](https://img.shields.io/github/stars/HowManyOliversAreThere/hx711_mpy-driver) ![GitHub last commit](https://img.shields.io/github/last-commit/HowManyOliversAreThere/hx711_mpy-driver)](https://github.com/HowManyOliversAreThere/hx711_mpy-driver) - Micropython Driver for the HX711 weighing sensor.
* [MCP342x_LoPy ![GitHub Repo Stars](https://img.shields.io/github/stars/jajberni/MCP342x_LoPy) ![GitHub last commit](https://img.shields.io/github/last-commit/jajberni/MCP342x_LoPy)](https://github.com/jajberni/MCP342x_LoPy) - MicroPython driver for the MCP342x ADC.
* [micropython-ads1220 ![GitHub Repo Stars](https://img.shields.io/github/stars/rdagger/micropython-ads1220) ![GitHub last commit](https://img.shields.io/github/last-commit/rdagger/micropython-ads1220)](https://github.com/rdagger/micropython-ads1220) - MicroPython library for ADS1220 24-bit analog-to-digital converter.
* [PCF8591_micropython_library ![GitHub Repo Stars](https://img.shields.io/github/stars/xreef/PCF8591_micropython_library) ![GitHub last commit](https://img.shields.io/github/last-commit/xreef/PCF8591_micropython_library)](https://github.com/xreef/PCF8591_micropython_library) - MicroPython library for PCF8591 8-bit ADC/DAC.

#### DAC

* [micropython-mcp4725 ![GitHub Repo Stars](https://img.shields.io/github/stars/wayoda/micropython-mcp4725) ![GitHub last commit](https://img.shields.io/github/last-commit/wayoda/micropython-mcp4725)](https://github.com/wayoda/micropython-mcp4725) - Driver for the MCP4725 I2C DAC.
* [mcp4728 ![GitHub Repo Stars](https://img.shields.io/github/stars/openfablab/mcp4728) ![GitHub last commit](https://img.shields.io/github/last-commit/openfablab/mcp4728)](https://github.com/openfablab/mcp4728) - Helper library for the Microchip MCP4728 I2C 12-bit Quad DAC.

#### GPIO

* [micropython-inputs ![GitHub Repo Stars](https://img.shields.io/github/stars/alanmitchell/micropython-inputs) ![GitHub last commit](https://img.shields.io/github/last-commit/alanmitchell/micropython-inputs)](https://github.com/alanmitchell/micropython-inputs) - Classes to count pulses, debounce digital inputs, and calculate moving averages of analog inputs for a MicroPython board.
* [ubutton](https://gitlab.com/WiLED-Project/ubutton) - A MicroPython library for controlling reading and debouncing pushbutton inputs, including "short" and "long" press callbacks.
* [micropython-debounce-switch ![GitHub Repo Stars](https://img.shields.io/github/stars/selfhostedhome/micropython-debounce-switch) ![GitHub last commit](https://img.shields.io/github/last-commit/selfhostedhome/micropython-debounce-switch)](https://github.com/selfhostedhome/micropython-debounce-switch) - MicroPython Class for Debouncing Switches.

#### IO-Expander

* [micropython-mcp230xx ![GitHub Repo Stars](https://img.shields.io/github/stars/ShrimpingIt/micropython-mcp230xx) ![GitHub last commit](https://img.shields.io/github/last-commit/ShrimpingIt/micropython-mcp230xx)](https://github.com/ShrimpingIt/micropython-mcp230xx) - Driver for MCP23017 and MCP23008 GPIO expanders.
* [micropython-mcp23017 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-mcp23017) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-mcp23017)](https://github.com/mcauser/micropython-mcp23017) - MicroPython driver for MCP23017 16-bit I/O Expander.
* [micropython-pcf8574 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-pcf8574) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-pcf8574)](https://github.com/mcauser/micropython-pcf8574) - MicroPython driver for PCF8574 8-Bit I2C I/O Expander with Interrupt.
* [micropython-pcf8575 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-pcf8575) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-pcf8575)](https://github.com/mcauser/micropython-pcf8575) - MicroPython driver for PCF8575 16-Bit I2C I/O Expander with Interrupt.
* [ESP8266_MCP23S17 ![GitHub Repo Stars](https://img.shields.io/github/stars/AnthonyKNorman/ESP8266_MCP23S17) ![GitHub last commit](https://img.shields.io/github/last-commit/AnthonyKNorman/ESP8266_MCP23S17)](https://github.com/AnthonyKNorman/ESP8266_MCP23S17) - MicroPython library for using the MCP23S17 16-bit I/O expander with the ESP8266.
* [pcf8574 ![GitHub Repo Stars](https://img.shields.io/github/stars/octaprog7/pcf8574) ![GitHub last commit](https://img.shields.io/github/last-commit/octaprog7/pcf8574)](https://github.com/octaprog7/pcf8574) - MicroPython module for working with the PCF8574(A) I2C 8-bit I/O expander from NXP.

#### Joystick

* [micropython-nunchuck ![GitHub Repo Stars](https://img.shields.io/github/stars/kfricke/micropython-nunchuck) ![GitHub last commit](https://img.shields.io/github/last-commit/kfricke/micropython-nunchuck)](https://github.com/kfricke/micropython-nunchuck) - Driver for Nunchuk game controller, I2C interface.
* [esp32-microgamepad-ble ![GitHub Repo Stars](https://img.shields.io/github/stars/insighio/esp32-microgamepad-ble) ![GitHub last commit](https://img.shields.io/github/last-commit/insighio/esp32-microgamepad-ble)](https://github.com/insighio/esp32-microgamepad-ble) - Dual analog joystick on ESP32 over BLE (Nordic UART Service - NUS) using MicroPython.

#### Keyboard

* [micropython-keyboard ![GitHub Repo Stars](https://img.shields.io/github/stars/mcameron/micropython-keyboard) ![GitHub last commit](https://img.shields.io/github/last-commit/mcameron/micropython-keyboard)](https://github.com/mcameron/micropython-keyboard) - 47 key keyboard running on a MicroPython Pyboard.
* [pico-rgbkeypad ![GitHub Repo Stars](https://img.shields.io/github/stars/martinohanlon/pico-rgbkeypad) ![GitHub last commit](https://img.shields.io/github/last-commit/martinohanlon/pico-rgbkeypad)](https://github.com/martinohanlon/pico-rgbkeypad) - A Python class for controlling the Pimoroni RGB Keypad for Raspberry Pi Pico.
* [micropython-aiobutton ![GitHub Repo Stars](https://img.shields.io/github/stars/jacklinquan/micropython-aiobutton) ![GitHub last commit](https://img.shields.io/github/last-commit/jacklinquan/micropython-aiobutton)](https://github.com/jacklinquan/micropython-aiobutton) - A MicroPython module for asyncio button.

#### Potentiometers

* [micropython-ad840x ![GitHub Repo Stars](https://img.shields.io/github/stars/dsiggi/micropython-ad840x) ![GitHub last commit](https://img.shields.io/github/last-commit/dsiggi/micropython-ad840x)](https://github.com/dsiggi/micropython-ad840x) - MicroPython SPI-based manipulation of the AD series digital potentiometers AD8400, AD8402 and AD8403.
* [mcp4131 ![GitHub Repo Stars](https://img.shields.io/github/stars/scruss/mcp4131) ![GitHub last commit](https://img.shields.io/github/last-commit/scruss/mcp4131)](https://github.com/scruss/mcp4131) - MicroPython module to control MicroChip's MCP4131 SPI digital potentiometer.
* [MicroPython_DS1841 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_DS1841) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_DS1841)](https://github.com/jposada202020/MicroPython_DS1841) - MicroPython Driver for the DS1841 Potentiometer.
* [MicroPython_DS3502 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_DS3502) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_DS3502)](https://github.com/jposada202020/MicroPython_DS3502) - MicroPython Driver for the DS3502 Potentiometer.

#### Power Management

* [AXP202_PythonLibrary ![GitHub Repo Stars](https://img.shields.io/github/stars/lewisxhe/AXP202_PythonLibrary) ![GitHub last commit](https://img.shields.io/github/last-commit/lewisxhe/AXP202_PythonLibrary)](https://github.com/lewisxhe/AXP202_PythonLibrary) - MicroPython AXP202 Library.
* [micropython_hourly_sleeper_library ![GitHub Repo Stars](https://img.shields.io/github/stars/costastf/micropython_hourly_sleeper_library) ![GitHub last commit](https://img.shields.io/github/last-commit/costastf/micropython_hourly_sleeper_library)](https://github.com/costastf/micropython_hourly_sleeper_library) - A MicroPython library that enables an ESP8266 to sleep for hourly increments for a setup amount of hours.

#### PWM

* [upwmcontroller](https://gitlab.com/WiLED-Project/upwmcontroller) - A MicroPython library for controlling PWM outputs in an asyncio loop, with features including fading and blinking.

#### Rotary Encoder

* [micropython-rotary ![GitHub Repo Stars](https://img.shields.io/github/stars/miketeachman/micropython-rotary) ![GitHub last commit](https://img.shields.io/github/last-commit/miketeachman/micropython-rotary)](https://github.com/miketeachman/micropython-rotary) - MicroPython module to read a rotary encoder.
* [uencoder](https://gitlab.com/WiLED-Project/uencoder) - A MicroPython library for reading from a rotary encoder.
* [encodermenu ![GitHub Repo Stars](https://img.shields.io/github/stars/sgall17a/encodermenu) ![GitHub last commit](https://img.shields.io/github/last-commit/sgall17a/encodermenu)](https://github.com/sgall17a/encodermenu) - Simple GUI menu for MicroPython using a rotary encoder and basic display.
* [encoderLib ![GitHub Repo Stars](https://img.shields.io/github/stars/BramRausch/encoderLib) ![GitHub last commit](https://img.shields.io/github/last-commit/BramRausch/encoderLib)](https://github.com/BramRausch/encoderLib) - MicroPython library to handle a rotary encoder.
* [rotary-encoder ![GitHub Repo Stars](https://img.shields.io/github/stars/gurgleapps/rotary-encoder) ![GitHub last commit](https://img.shields.io/github/last-commit/gurgleapps/rotary-encoder)](https://github.com/gurgleapps/rotary-encoder) - MicroPython code to drive a KY-040 rotary encoder.
* [micropython-encoder-knob ![GitHub Repo Stars](https://img.shields.io/github/stars/infinite-tree/micropython-encoder-knob) ![GitHub last commit](https://img.shields.io/github/last-commit/infinite-tree/micropython-encoder-knob)](https://github.com/infinite-tree/micropython-encoder-knob) - A very simple lightweight encoder knob library with button support.
* [encoders ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-samples) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-samples)](https://github.com/peterhinch/micropython-samples/blob/master/encoders/ENCODERS.md) - Short document explaining issues around encoder technology.
* [asynchronous encoder driver ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-async) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-async)](https://github.com/peterhinch/micropython-async/blob/master/v3/primitives/encoder.py) - Interface an encoder to uasyncio code.
* [micropython-8encoder ![GitHub Repo Stars](https://img.shields.io/github/stars/HowManyOliversAreThere/micropython-8encoder) ![GitHub last commit](https://img.shields.io/github/last-commit/HowManyOliversAreThere/micropython-8encoder)](https://github.com/HowManyOliversAreThere/micropython-8encoder) - Driver for the I2C [M5Stack 8-Encoder Unit](https://shop.m5stack.com/products/8-encoder-unit-stm32f030)
* [micropython-quiic-twist ![GitHub Repo Stars](https://img.shields.io/github/stars/rdagger/micropython-quiic-twist) ![GitHub last commit](https://img.shields.io/github/last-commit/rdagger/micropython-quiic-twist)](https://github.com/rdagger/micropython-quiic-twist) - MicroPython Driver for Quiic Twist RGB Rotary Encoder.
* [AS5600 ![GitHub Repo Stars](https://img.shields.io/github/stars/sgall17a/AS5600) ![GitHub last commit](https://img.shields.io/github/last-commit/sgall17a/AS5600)](https://github.com/sgall17a/AS5600) - AS5600 MicroPython library for reading this magnetic sensor.

#### Shift Registers

* [micropython-74hc595 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-74hc595) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-74hc595)](https://github.com/mcauser/micropython-74hc595) - MicroPython driver for 74HC595 8-bit shift registers.
* [MicroPython-SN74HCS264](https://gitlab.com/olivierlenoir/MicroPython-SN74HCS264) - MicroPython Driver for SN74HCS264 8-Bit Parallel-Out Serial Shift Registers With Schmitt-Trigger Inputs and Inverted Outputs.

#### Waveform Generator

* [Micropython-AD9833 ![GitHub Repo Stars](https://img.shields.io/github/stars/KipCrossing/Micropython-AD9833) ![GitHub last commit](https://img.shields.io/github/last-commit/KipCrossing/Micropython-AD9833)](https://github.com/KipCrossing/Micropython-AD9833) - Pyboard driver for AD9833, SPI interface.
* [Clock_Generators ![GitHub Repo Stars](https://img.shields.io/github/stars/Wei1234c/Clock_Generators) ![GitHub last commit](https://img.shields.io/github/last-commit/Wei1234c/Clock_Generators)](https://github.com/Wei1234c/Clock_Generators) - Clock generators (Si5351 for now) toolbox.
* [Signal_Generators ![GitHub Repo Stars](https://img.shields.io/github/stars/Wei1234c/Signal_Generators) ![GitHub last commit](https://img.shields.io/github/last-commit/Wei1234c/Signal_Generators)](https://github.com/Wei1234c/Signal_Generators) - Signal generators (AD9833, AD9834, AD9850, ADF4351) toolbox.
* [ad9850_signalgen ![GitHub Repo Stars](https://img.shields.io/github/stars/brenn/ad9850_signalgen) ![GitHub last commit](https://img.shields.io/github/last-commit/brenn/ad9850_signalgen)](https://github.com/brenn/ad9850_signalgen) - MicroPython library for AD9850 synthesizer.
* [pico-wave-vibration-generator ![GitHub Repo Stars](https://img.shields.io/github/stars/gurgleapps/pico-wave-vibration-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/gurgleapps/pico-wave-vibration-generator)](https://github.com/gurgleapps/pico-wave-vibration-generator) - A MicroPython-based frequency generator for Raspberry Pi Pico designed to create vibrations on solenoids or speakers, enabling wave experimentation and exploration at home.
* [micropython-m5stack-dds ![GitHub Repo Stars](https://img.shields.io/github/stars/mattytrentini/micropython-m5stack-dds) ![GitHub last commit](https://img.shields.io/github/last-commit/mattytrentini/micropython-m5stack-dds)](https://github.com/mattytrentini/micropython-m5stack-dds) - MicroPython driver for the M5Stack DDS frequency generator.
* [AD9833-MicroPython-Module ![GitHub Repo Stars](https://img.shields.io/github/stars/owainm713/AD9833-MicroPython-Module) ![GitHub last commit](https://img.shields.io/github/last-commit/owainm713/AD9833-MicroPython-Module)](https://github.com/owainm713/AD9833-MicroPython-Module) - MicroPython module to use the AD9833 programable waveform generator.

### Mathematics

* [uMath ![GitHub Repo Stars](https://img.shields.io/github/stars/albaEDA/uMath) ![GitHub last commit](https://img.shields.io/github/last-commit/albaEDA/uMath)](https://github.com/albaEDA/uMath) - Computer Algebra for microcontrollers.
* [micropython-ulab ![GitHub Repo Stars](https://img.shields.io/github/stars/v923z/micropython-ulab) ![GitHub last commit](https://img.shields.io/github/last-commit/v923z/micropython-ulab)](https://github.com/v923z/micropython-ulab) - A NumPy-like fast vector module for MicroPython.
* [micropython-fourier ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-fourier) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-fourier)](https://github.com/peterhinch/micropython-fourier) - Fast Fourier transform in MicroPython's inline ARM assembler.
* [Filters ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-filters) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-filters)](https://github.com/peterhinch/micropython-filters) - FIR filters using ARM Thumb assembler. Using an online utility you can go from a graph of required frequency response to a filter implementation.
* [ulinalg ![GitHub Repo Stars](https://img.shields.io/github/stars/jalawson/ulinalg) ![GitHub last commit](https://img.shields.io/github/last-commit/jalawson/ulinalg)](https://github.com/jalawson/ulinalg) - Small size matrix handling module with a few linear algebra operations specifically for MicroPython (Python 3).
* [micropython-mtx](https://gitlab.com/nickoala/micropython-mtx) - Fast Matrix Multiplication and Linear Solver on MicroPython.
* [micropython-vec](https://gitlab.com/nickoala/micropython-vec) - Vector Operations on MicroPython.
* [MicroPython_Statistics ![GitHub Repo Stars](https://img.shields.io/github/stars/rcolistete/MicroPython_Statistics) ![GitHub last commit](https://img.shields.io/github/last-commit/rcolistete/MicroPython_Statistics)](https://github.com/rcolistete/MicroPython_Statistics) - Statistics module for MicroPython.
* [MicroPython-Matrix](https://gitlab.com/olivierlenoir/MicroPython-Matrix) - MicroPython basic matrix operations.
* [uumpy ![GitHub Repo Stars](https://img.shields.io/github/stars/nickovs/uumpy) ![GitHub last commit](https://img.shields.io/github/last-commit/nickovs/uumpy)](https://github.com/nickovs/uumpy) - A subset of NumPy for MicroPython.
* [upyuncertainties ![GitHub Repo Stars](https://img.shields.io/github/stars/rcolistete/upyuncertainties) ![GitHub last commit](https://img.shields.io/github/last-commit/rcolistete/upyuncertainties)](https://github.com/rcolistete/upyuncertainties) - Uncertainty calculations for MicroPython.
* [umatrix ![GitHub Repo Stars](https://img.shields.io/github/stars/iyassou/umatrix) ![GitHub last commit](https://img.shields.io/github/last-commit/iyassou/umatrix)](https://github.com/iyassou/umatrix) - A matrix library for the MicroPython language.
* [micropython-fractions ![GitHub Repo Stars](https://img.shields.io/github/stars/mattytrentini/micropython-fractions) ![GitHub last commit](https://img.shields.io/github/last-commit/mattytrentini/micropython-fractions)](https://github.com/mattytrentini/micropython-fractions) - A MicroPython port of the CPython standard Fractions library.
* [Sun and Moon ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-samples) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-samples)](https://github.com/peterhinch/micropython-samples/blob/master/astronomy/README.md) - Determine Sun and Moon rise and set times, Moon phases.

### Motion

#### DC Motor

* [L298N ![GitHub Repo Stars](https://img.shields.io/github/stars/GuyCarver/MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/GuyCarver/MicroPython)](https://github.com/GuyCarver/MicroPython/blob/master/lib/L298N.py) - Driver for the L298N dual H-bridge motor controller.
* [MicroPython-L298](https://gitlab.com/olivierlenoir/MicroPython-L298) - Drive L298 dual H-bridge with MicroPython.
* [pyl298 ![GitHub Repo Stars](https://img.shields.io/github/stars/marcio-pessoa/pyl298) ![GitHub last commit](https://img.shields.io/github/last-commit/marcio-pessoa/pyl298)](https://github.com/marcio-pessoa/pyl298) - Driver for the L298 dual full-bridge motor controller.

#### Servo

* [micropython-pca9685 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-pca9685) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-pca9685)](https://github.com/mcauser/deshipu-micropython-pca9685) - 16-channel 12-bit PWM/servo driver.
* [micropython-servo ![GitHub Repo Stars](https://img.shields.io/github/stars/redoxcode/micropython-servo) ![GitHub last commit](https://img.shields.io/github/last-commit/redoxcode/micropython-servo)](https://github.com/redoxcode/micropython-servo) - Library to control RC servos using direct PWM output in a tidy way.
* [MicroPython_PCA9685 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_PCA9685) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_PCA9685)](https://github.com/jposada202020/MicroPython_PCA9685) - MicroPython Driver for the PCA9685 PWM control IC, commonly used to control servos, LEDs and motors.
* [MicroPython_MOTOR ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_MOTOR) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_MOTOR)](https://github.com/jposada202020/MicroPython_MOTOR) - MicroPython Helper for controlling PWM based motors.

#### Stepper

* [micropython-stepper ![GitHub Repo Stars](https://img.shields.io/github/stars/redoxcode/micropython-stepper) ![GitHub last commit](https://img.shields.io/github/last-commit/redoxcode/micropython-stepper)](https://github.com/redoxcode/micropython-stepper) - Library to control common stepper drivers in a tidy way.
* [micropython-upybbot ![GitHub Repo Stars](https://img.shields.io/github/stars/jeffmer/micropython-upybbot) ![GitHub last commit](https://img.shields.io/github/last-commit/jeffmer/micropython-upybbot)](https://github.com/jeffmer/micropython-upybbot) - A4988 driver for bipolar stepper motors.
* [uln2003 ![GitHub Repo Stars](https://img.shields.io/github/stars/IDWizard/uln2003) ![GitHub last commit](https://img.shields.io/github/last-commit/IDWizard/uln2003)](https://github.com/IDWizard/uln2003) - Driver for 5V 28BYJ-48 stepper motors.
* [micropython-multiaxis](https://gitlab.com/olivierlenoir/micropython-multiaxis) - Multiaxis with MicroPython ESP32 and DRV8825.
* [ticlib ![GitHub Repo Stars](https://img.shields.io/github/stars/jphalip/ticlib) ![GitHub last commit](https://img.shields.io/github/last-commit/jphalip/ticlib)](https://github.com/jphalip/ticlib) - Driver for Pololu Tic stepper motor controllers.
* [AccelStepper-MicroPython ![GitHub Repo Stars](https://img.shields.io/github/stars/pedromneto97/AccelStepper-MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/pedromneto97/AccelStepper-MicroPython)](https://github.com/pedromneto97/AccelStepper-MicroPython) - AccelStepper Library for MicroPython - ESP32.
* [pystepper ![GitHub Repo Stars](https://img.shields.io/github/stars/marcio-pessoa/pystepper) ![GitHub last commit](https://img.shields.io/github/last-commit/marcio-pessoa/pystepper)](https://github.com/marcio-pessoa/pystepper) - MicroPython Stepper Motor Sequence Control.
* [uPySteppers ![GitHub Repo Stars](https://img.shields.io/github/stars/lemariva/uPySteppers) ![GitHub last commit](https://img.shields.io/github/last-commit/lemariva/uPySteppers)](https://github.com/lemariva/uPySteppers) - DIY rotating platform using an ESP32 connected to WiFi.
* [microPython_AMIS-30543 ![GitHub Repo Stars](https://img.shields.io/github/stars/capella-ben/microPython_AMIS-30543) ![GitHub last commit](https://img.shields.io/github/last-commit/capella-ben/microPython_AMIS-30543)](https://github.com/capella-ben/microPython_AMIS-30543) - MicroPython library for Stepper Driver control using AMIS-30543 driver.
* [micropython-drv8825](https://gitlab.com/robhamerling/micropython-drv8825) - Driver and example in MicroPython to control a stepper motor via a DRV8825 controller board.
* [microPython_TMC5160 ![GitHub Repo Stars](https://img.shields.io/github/stars/capella-ben/microPython_TMC5160) ![GitHub last commit](https://img.shields.io/github/last-commit/capella-ben/microPython_TMC5160)](https://github.com/capella-ben/microPython_TMC5160) - A MicroPython library for the Trinamic TMC5160 Motion Controller.
* [micropython-stepper-motor ![GitHub Repo Stars](https://img.shields.io/github/stars/larsks/micropython-stepper-motor) ![GitHub last commit](https://img.shields.io/github/last-commit/larsks/micropython-stepper-motor)](https://github.com/larsks/micropython-stepper-motor) - Drive a 28BYJ-48 motor attached to a ULN2003 driver.

### Sensors

#### Accelerometer Digital

* [ADXL345-with-Pyboard ![GitHub Repo Stars](https://img.shields.io/github/stars/AbhinayBandaru/ADXL345-with-Pyboard) ![GitHub last commit](https://img.shields.io/github/last-commit/AbhinayBandaru/ADXL345-with-Pyboard)](https://github.com/AbhinayBandaru/ADXL345-with-Pyboard) - Driver for ADXL345 16g 3-axis accelerometer.
* [adxl345_micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/fanday/adxl345_micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/fanday/adxl345_micropython)](https://github.com/fanday/adxl345_micropython) - Driver for ADXL345 16g 3-axis accelerometer.
* [MicroPython-LIS3DH ![GitHub Repo Stars](https://img.shields.io/github/stars/tinypico/tinypico-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/tinypico/tinypico-micropython)](https://github.com/tinypico/tinypico-micropython/tree/master/lis3dh%20library) - I2C driver for LIS3DH 3-axis accelerometer.
* [micropython-lis2hh12 ![GitHub Repo Stars](https://img.shields.io/github/stars/tuupola/micropython-lis2hh12) ![GitHub last commit](https://img.shields.io/github/last-commit/tuupola/micropython-lis2hh12)](https://github.com/tuupola/micropython-lis2hh12) - I2C driver for LIS2HH12 3-axis accelerometer.
* [MMA7660 ![GitHub Repo Stars](https://img.shields.io/github/stars/Bucknalla/MicroPython-3-Axis-Accelerometer) ![GitHub last commit](https://img.shields.io/github/last-commit/Bucknalla/MicroPython-3-Axis-Accelerometer)](https://github.com/Bucknalla/MicroPython-3-Axis-Accelerometer/blob/master/MMA7660.py) - Driver for MMA7660 1.5g 3-axis accelerometer.
* [ADXL345_spi_micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/AlekseyFedorovich/ADXL345_spi_micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/AlekseyFedorovich/ADXL345_spi_micropython)](https://github.com/AlekseyFedorovich/ADXL345_spi_micropython) - Library for interacting through the SPI protocol with an 'Analog Devices ADXL345' accelerometer from an MCU flashed with MicroPython.
* [MicroPython_ADXL343 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_ADXL343) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_ADXL343)](https://github.com/jposada202020/MicroPython_ADXL343) - MicroPython Driver for the Analog Devices ADXL343 Accelerometer.
* [MicroPython_BMA220 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_BMA220) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_BMA220)](https://github.com/jposada202020/MicroPython_BMA220) - MicroPython Driver for the Bosch BMA220 Accelerometer.
* [MicroPython_BMA400 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_BMA400) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_BMA400)](https://github.com/jposada202020/MicroPython_BMA400) - MicroPython Driver for the Bosch BMA400 Accelerometer.
* [MicroPython_LIS3DH ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_LIS3DH) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_LIS3DH)](https://github.com/jposada202020/MicroPython_LIS3DH) - MicroPython Driver for the LIS3DH 3-axis accelerometer.
* [MicroPython_KX132 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_KX132) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_KX132)](https://github.com/jposada202020/MicroPython_KX132) - MicroPython Driver for the Kionix KX132 Accelerometer.
* [MicroPython_H3LIS200DL ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_H3LIS200DL) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_H3LIS200DL)](https://github.com/jposada202020/MicroPython_H3LIS200DL) - MicroPython Driver for the ST H3LIS200DL Accelerometer.
* [MicroPython_QMC5883L ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_QMC5883L) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_QMC5883L)](https://github.com/jposada202020/MicroPython_QMC5883L) - MicroPython Driver for the QMC5883L Accelerometer.
* [Micropython_MC3479 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/Micropython_MC3479) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/Micropython_MC3479)](https://github.com/jposada202020/Micropython_MC3479) - MicroPython Driver for the MC3479 Accelerometer.
* [MicroPython_MMA8451 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_MMA8451) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_MMA8451)](https://github.com/jposada202020/MicroPython_MMA8451) - MicroPython module for the MMA8451 3-axis accelerometer.
* [MicroPython_MMA8452Q ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_MMA8452Q) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_MMA8452Q)](https://github.com/jposada202020/MicroPython_MMA8452Q) - MicroPython Driver for the NXP MMA8452Q Accelerometer.
* [msa301-micropython-driver ![GitHub Repo Stars](https://img.shields.io/github/stars/wojciech-szmyt/msa301-micropython-driver) ![GitHub last commit](https://img.shields.io/github/last-commit/wojciech-szmyt/msa301-micropython-driver)](https://github.com/wojciech-szmyt/msa301-micropython-driver) - Homebrew MicroPython driver for MSA301 3-axis accelerometer. Tested on Raspberry Pico.

#### Air Quality

* [CCS811 ![GitHub Repo Stars](https://img.shields.io/github/stars/Ledbelly2142/CCS811) ![GitHub last commit](https://img.shields.io/github/last-commit/Ledbelly2142/CCS811)](https://github.com/Ledbelly2142/CCS811) - CCS811 Air Quality Sensor.
* [upython-aq-monitor ![GitHub Repo Stars](https://img.shields.io/github/stars/ayoy/upython-aq-monitor) ![GitHub last commit](https://img.shields.io/github/last-commit/ayoy/upython-aq-monitor)](https://github.com/ayoy/upython-aq-monitor) - Air Quality monitor using PMS5003 sensor and WiPy.
* [micropython-pms7003 ![GitHub Repo Stars](https://img.shields.io/github/stars/pkucmus/micropython-pms7003) ![GitHub last commit](https://img.shields.io/github/last-commit/pkucmus/micropython-pms7003)](https://github.com/pkucmus/micropython-pms7003) - MicroPython driver for the PMS7003 Air Quality Sensor.
* [pms5003_micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/kevinkk525/pms5003_micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/kevinkk525/pms5003_micropython)](https://github.com/kevinkk525/pms5003_micropython) - Driver for PMS5003 air quality sensor for MicroPython.
* [micropython-pms5003-minimal ![GitHub Repo Stars](https://img.shields.io/github/stars/miketeachman/micropython-pms5003-minimal) ![GitHub last commit](https://img.shields.io/github/last-commit/miketeachman/micropython-pms5003-minimal)](https://github.com/miketeachman/micropython-pms5003-minimal) - Driver for P air quality sensor for MicroPython.
* [polly ![GitHub Repo Stars](https://img.shields.io/github/stars/g-sam/polly) ![GitHub last commit](https://img.shields.io/github/last-commit/g-sam/polly)](https://github.com/g-sam/polly) - SDS011 pollution sensor + Wemos D1 mini pro + MicroPython.

#### Barometer

* [micropython-bme280 ![GitHub Repo Stars](https://img.shields.io/github/stars/kevbu/micropython-bme280) ![GitHub last commit](https://img.shields.io/github/last-commit/kevbu/micropython-bme280)](https://github.com/kevbu/micropython-bme280) - Driver for the Bosch BME280 temperature/pressure/humidity sensor.
* [micropython-bmp180 ![GitHub Repo Stars](https://img.shields.io/github/stars/micropython-IMU/micropython-bmp180) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython-IMU/micropython-bmp180)](https://github.com/micropython-IMU/micropython-bmp180) - Driver for Bosch BMP180 temperature, pressure and altitude sensor.
* [mpy_bme280_esp8266 ![GitHub Repo Stars](https://img.shields.io/github/stars/catdog2/mpy_bme280_esp8266) ![GitHub last commit](https://img.shields.io/github/last-commit/catdog2/mpy_bme280_esp8266)](https://github.com/catdog2/mpy_bme280_esp8266) - Bosch BME280 temperature/pressure/humidity sensor.
* [BME280 ![GitHub Repo Stars](https://img.shields.io/github/stars/robert-hh/BME280) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/BME280)](https://github.com/robert-hh/BME280) - MicroPython driver for the BME280 sensor, target platform Pycom devices.
* [micropython-bmp280 ![GitHub Repo Stars](https://img.shields.io/github/stars/dafvid/micropython-bmp280) ![GitHub last commit](https://img.shields.io/github/last-commit/dafvid/micropython-bmp280)](https://github.com/dafvid/micropython-bmp280) - Module for the BMP280 sensor.
* [micropython_bme280_i2c ![GitHub Repo Stars](https://img.shields.io/github/stars/triplepoint/micropython_bme280_i2c) ![GitHub last commit](https://img.shields.io/github/last-commit/triplepoint/micropython_bme280_i2c)](https://github.com/triplepoint/micropython_bme280_i2c) - A MicroPython module for communicating with the Bosch BME280 temperature, humidity, and pressure sensor.
* [MicroPython-BME280 ![GitHub Repo Stars](https://img.shields.io/github/stars/neliogodoi/MicroPython-BME280) ![GitHub last commit](https://img.shields.io/github/last-commit/neliogodoi/MicroPython-BME280)](https://github.com/neliogodoi/MicroPython-BME280) - Driver to digital sensor of Temperature, Pressure and Humidity.
* [micropython-bmp180](https://gitlab.com/flowolf/micropython-bmp180) - A module for MicroPython which provides a class for the BMP180 pressure sensor.
* [BMP390 ![GitHub Repo Stars](https://img.shields.io/github/stars/octaprog7/BMP390) ![GitHub last commit](https://img.shields.io/github/last-commit/octaprog7/BMP390)](https://github.com/octaprog7/BMP390) - MicroPython module for BMP390 pressure & temperature sensor.
* [BMP180 ![GitHub Repo Stars](https://img.shields.io/github/stars/octaprog7/BMP180) ![GitHub last commit](https://img.shields.io/github/last-commit/octaprog7/BMP180)](https://github.com/octaprog7/BMP180) - MicroPython module for BMP180 pressure & temperature sensor.
* [MicroPython_BMP581 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_BMP581) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_BMP581)](https://github.com/jposada202020/MicroPython_BMP581) - MicroPython driver for the Bosch BMP581 pressure & temperature sensor.
* [MicroPython_DPS310 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_DPS310) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_DPS310)](https://github.com/jposada202020/MicroPython_DPS310) - MicroPython Driver for the DPS310 Sensor.
* [MicroPython_ICP10111 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_ICP10111) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_ICP10111)](https://github.com/jposada202020/MicroPython_ICP10111) - MicroPython Driver for the TDK ICP-10111 Barometric Pressure and Temperature sensor.

#### Battery

* [Micropython-LC709203F ![GitHub Repo Stars](https://img.shields.io/github/stars/scopelemanuele/Micropython-LC709203F) ![GitHub last commit](https://img.shields.io/github/last-commit/scopelemanuele/Micropython-LC709203F)](https://github.com/scopelemanuele/Micropython-LC709203F) - A simple MicroPython library for LC709293F Fuel Gauge.

#### Biometric

* [micropython-fingerprint ![GitHub Repo Stars](https://img.shields.io/github/stars/chrisb2/micropython-fingerprint) ![GitHub last commit](https://img.shields.io/github/last-commit/chrisb2/micropython-fingerprint)](https://github.com/chrisb2/micropython-fingerprint) - MicroPython library for reading Grow and ZhianTec fingerprint sensors.
* [MAX30102-MicroPython-driver ![GitHub Repo Stars](https://img.shields.io/github/stars/n-elia/MAX30102-MicroPython-driver) ![GitHub last commit](https://img.shields.io/github/last-commit/n-elia/MAX30102-MicroPython-driver)](https://github.com/n-elia/MAX30102-MicroPython-driver) - A MAX30102 driver ported to MicroPython. It should also work for MAX30105.

#### Camera

* [micropython-ov2640 ![GitHub Repo Stars](https://img.shields.io/github/stars/namato/micropython-ov2640) ![GitHub last commit](https://img.shields.io/github/last-commit/namato/micropython-ov2640)](https://github.com/namato/micropython-ov2640) - MicroPython class for OV2640 camera.
* [Nikon-Trigger-for-MicroPython ![GitHub Repo Stars](https://img.shields.io/github/stars/Thekegman/Nikon-Trigger-for-MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/Thekegman/Nikon-Trigger-for-MicroPython)](https://github.com/Thekegman/Nikon-Trigger-for-MicroPython) - Remote trigger for a Nikon camera using an IR LED. For Pyboard v1.1.
* [micropython-camera-driver ![GitHub Repo Stars](https://img.shields.io/github/stars/lemariva/micropython-camera-driver) ![GitHub last commit](https://img.shields.io/github/last-commit/lemariva/micropython-camera-driver)](https://github.com/lemariva/micropython-camera-driver) - OV2640 camera driver for MicroPython on ESP32.
* [esp32-cam-micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/shariltumin/esp32-cam-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/shariltumin/esp32-cam-micropython)](https://github.com/shariltumin/esp32-cam-micropython) - MicroPython ESP32-CAM.
* [uPyCam ![GitHub Repo Stars](https://img.shields.io/github/stars/lemariva/uPyCam) ![GitHub last commit](https://img.shields.io/github/last-commit/lemariva/uPyCam)](https://github.com/lemariva/uPyCam) - Take a photo with an ESP32-CAM running MicroPython.
* [OV2640_uPy ![GitHub Repo Stars](https://img.shields.io/github/stars/FunPythonEC/OV2640_uPy) ![GitHub last commit](https://img.shields.io/github/last-commit/FunPythonEC/OV2640_uPy)](https://github.com/FunPythonEC/OV2640_uPy) - OV2640 camera library for MicroPython.
* [MQTT-Cam ![GitHub Repo Stars](https://img.shields.io/github/stars/jono-allen/MQTT-Cam) ![GitHub last commit](https://img.shields.io/github/last-commit/jono-allen/MQTT-Cam)](https://github.com/jono-allen/MQTT-Cam) - ESP32-CAM MicroPython MQTT AWS S3 Uploader.

#### Colour

* [micropython-tcs34725](https://gitlab.com/robhamerling/micropython-tcs34725) - Driver class for TCS34725 and TCS34727 color sensors.
* [micropython-as7341](https://gitlab.com/robhamerling/micropython-as7341) - MicroPython library for AS7341.
* [MicroPython_ISL29125 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_ISL29125) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_ISL29125)](https://github.com/jposada202020/MicroPython_ISL29125) - MicroPython Driver for the Intersil ISL29125 Color Sensor.
* [TCS3200-MicroPython ![GitHub Repo Stars](https://img.shields.io/github/stars/uraich/TCS3200-MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/uraich/TCS3200-MicroPython)](https://github.com/uraich/TCS3200-MicroPython) - A MicroPython driver and test programs for the TCS3200 color sensor.
* [MicroPython_TCS3430 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_TCS3430) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_TCS3430)](https://github.com/jposada202020/MicroPython_TCS3430) - MicroPython driver for the AMS TCS3430 Color and ALS sensor.

#### Compass

* [micropython-esp8266-hmc5883l ![GitHub Repo Stars](https://img.shields.io/github/stars/gvalkov/micropython-esp8266-hmc5883l) ![GitHub last commit](https://img.shields.io/github/last-commit/gvalkov/micropython-esp8266-hmc5883l)](https://github.com/gvalkov/micropython-esp8266-hmc5883l) - 3-axis digital compass on the ESP8266.
* [QMC5883 ![GitHub Repo Stars](https://img.shields.io/github/stars/robert-hh/QMC5883) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/QMC5883)](https://github.com/robert-hh/QMC5883) - Python class for the QMC5883 Three-Axis Digital Compass IC.
* [microPython_AS5600L ![GitHub Repo Stars](https://img.shields.io/github/stars/capella-ben/microPython_AS5600L) ![GitHub last commit](https://img.shields.io/github/last-commit/capella-ben/microPython_AS5600L)](https://github.com/capella-ben/microPython_AS5600L) - MicroPython driver for AS5600L magnet rotary position sensor.

#### Current

* [micropythonINA219 ![GitHub Repo Stars](https://img.shields.io/github/stars/kabel42/micropythonINA219) ![GitHub last commit](https://img.shields.io/github/last-commit/kabel42/micropythonINA219)](https://github.com/kabel42/micropythonINA219) - Driver for INA219 current sensor.
* [pyb_ina219 ![GitHub Repo Stars](https://img.shields.io/github/stars/chrisb2/pyb_ina219) ![GitHub last commit](https://img.shields.io/github/last-commit/chrisb2/pyb_ina219)](https://github.com/chrisb2/pyb_ina219) - Driver for INA219 current sensor.
* [INA219 ![GitHub Repo Stars](https://img.shields.io/github/stars/robert-hh/INA219) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/INA219)](https://github.com/robert-hh/INA219) - INA219 MicroPython driver.
* [TI_INA226_micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/elschopi/TI_INA226_micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/elschopi/TI_INA226_micropython)](https://github.com/elschopi/TI_INA226_micropython) - MicroPython driver for Texas Instruments INA226 power measuring IC.
* [micropython-current-monitor](https://gitlab.com/n.rj.powers/micropython-current-monitor) - Current monitor using the INA219 and an SSD1306 OLED.

#### Distance IR

* [micropython-gp2y0e03 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-gp2y0e03) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-gp2y0e03)](https://github.com/mcauser/deshipu-micropython-gp2y0e03) - IR-LED distance measuring sensor using Sharp GP2Y0E03.
* [micropython-vl6180 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-vl6180) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-vl6180)](https://github.com/mcauser/deshipu-micropython-vl6180) - Time-of-Flight sensor, ambient light sensor & IR emitter.

#### Distance Laser

* [micropython-vl53l0x ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-vl53l0x) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-vl53l0x)](https://github.com/mcauser/deshipu-micropython-vl53l0x) - Time-of-Flight laser-ranging sensor.
* [Qwiic_TOF_Module_RFD77402 ![GitHub Repo Stars](https://img.shields.io/github/stars/ZIOCC/Qwiic_TOF_Module_RFD77402) ![GitHub last commit](https://img.shields.io/github/last-commit/ZIOCC/Qwiic_TOF_Module_RFD77402)](https://github.com/ZIOCC/Qwiic_TOF_Module_RFD77402) - Qwiic TOF Module (RFD77402) time-of-flight rangefinding module.
* [VL53L0X ![GitHub Repo Stars](https://img.shields.io/github/stars/uceeatz/VL53L0X) ![GitHub last commit](https://img.shields.io/github/last-commit/uceeatz/VL53L0X)](https://github.com/uceeatz/VL53L0X) - MicroPython Library for LiDAR Sensor VL53L0X.
* [vl53l1x_pico ![GitHub Repo Stars](https://img.shields.io/github/stars/drakxtwo/vl53l1x_pico) ![GitHub last commit](https://img.shields.io/github/last-commit/drakxtwo/vl53l1x_pico)](https://github.com/drakxtwo/vl53l1x_pico) - MicroPython driver for the VL53L1X ToF sensor.
* [tf-luna-micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/davmoz/tf-luna-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/davmoz/tf-luna-micropython)](https://github.com/davmoz/tf-luna-micropython) - A simple MicroPython I2C library for TF-Luna LiDAR Module.
* [vl53l5cx ![GitHub Repo Stars](https://img.shields.io/github/stars/mp-extras/vl53l5cx) ![GitHub last commit](https://img.shields.io/github/last-commit/mp-extras/vl53l5cx)](https://github.com/mp-extras/vl53l5cx) - MicroPython and CircuitPython Package for the [VL53L5CX](https://www.st.com/en/imaging-and-photonics-solutions/vl53l5cx.html) (4x4/8x8 ToF sensor array).
* [VL6180X ![GitHub Repo Stars](https://img.shields.io/github/stars/Ledbelly2142/VL6180X) ![GitHub last commit](https://img.shields.io/github/last-commit/Ledbelly2142/VL6180X)](https://github.com/Ledbelly2142/VL6180X) - MicroPython driver for the VL6180X sensor on the ESP32.

#### Distance Ultrasonic

* [micropython-hcsr04 ![GitHub Repo Stars](https://img.shields.io/github/stars/rsc1975/micropython-hcsr04) ![GitHub last commit](https://img.shields.io/github/last-commit/rsc1975/micropython-hcsr04)](https://github.com/rsc1975/micropython-hcsr04) - Driver for HC-SR04 ultrasonic distance sensors.
* [micropython-us100 ![GitHub Repo Stars](https://img.shields.io/github/stars/kfricke/micropython-us100) ![GitHub last commit](https://img.shields.io/github/last-commit/kfricke/micropython-us100)](https://github.com/kfricke/micropython-us100) - MicroPython driver for the US-100 sonar distance sensor.
* [micropython-i2c-ultrasonic ![GitHub Repo Stars](https://img.shields.io/github/stars/HowManyOliversAreThere/micropython-i2c-ultrasonic) ![GitHub last commit](https://img.shields.io/github/last-commit/HowManyOliversAreThere/micropython-i2c-ultrasonic)](https://github.com/HowManyOliversAreThere/micropython-i2c-ultrasonic) - MicroPython driver for the RCWL-9620-based M5 I2C Ultrasonic Distance Unit.

#### Dust

* [pyGP2Y ![GitHub Repo Stars](https://img.shields.io/github/stars/amigcamel/pyGP2Y) ![GitHub last commit](https://img.shields.io/github/last-commit/amigcamel/pyGP2Y)](https://github.com/amigcamel/pyGP2Y) - MicroPython library for the Sharp GP2Y1014AU0F Dust Sensor.

#### Energy

* [ATM90E26_Micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/whatnick/ATM90E26_Micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/whatnick/ATM90E26_Micropython)](https://github.com/whatnick/ATM90E26_Micropython) - Driver for ATM90E26 energy metering device.
* [MCP39F521 ![GitHub Repo Stars](https://img.shields.io/github/stars/warpme/MCP39F521) ![GitHub last commit](https://img.shields.io/github/last-commit/warpme/MCP39F521)](https://github.com/warpme/MCP39F521) - ESP8266 scripts for reading MCP39F521 power monitors.
* [micropython-p1meter ![GitHub Repo Stars](https://img.shields.io/github/stars/Josverl/micropython-p1meter) ![GitHub last commit](https://img.shields.io/github/last-commit/Josverl/micropython-p1meter)](https://github.com/Josverl/micropython-p1meter) - A ESP32 sensor to read a p1 electricity meter and publish this to MQTT and Home Assistant, written in MicroPython.
* [esp32-solar2 ![GitHub Repo Stars](https://img.shields.io/github/stars/octopusengine/esp32-solar2) ![GitHub last commit](https://img.shields.io/github/last-commit/octopusengine/esp32-solar2)](https://github.com/octopusengine/esp32-solar2) - Simple solar regulator - MicroPython project.
* [cs5490_micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/whatnick/cs5490_micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/whatnick/cs5490_micropython)](https://github.com/whatnick/cs5490_micropython) - MicroPython Driver for CS5490 Energy Monitor IC.

#### Gaseous

* [micropython-MQ ![GitHub Repo Stars](https://img.shields.io/github/stars/kartun83/micropython-MQ) ![GitHub last commit](https://img.shields.io/github/last-commit/kartun83/micropython-MQ)](https://github.com/kartun83/micropython-MQ) - Drivers for MQ series gas sensors.
* [MQ135 ![GitHub Repo Stars](https://img.shields.io/github/stars/rubfi/MQ135) ![GitHub last commit](https://img.shields.io/github/last-commit/rubfi/MQ135)](https://github.com/rubfi/MQ135) - Driver for MQ135 gas sensor.
* [CCS811 ![GitHub Repo Stars](https://img.shields.io/github/stars/Notthemarsian/CCS811) ![GitHub last commit](https://img.shields.io/github/last-commit/Notthemarsian/CCS811)](https://github.com/Notthemarsian/CCS811) - Basic MicroPython driver for CCS811 on ESP8266 boards.
* [micropython-scd30 ![GitHub Repo Stars](https://img.shields.io/github/stars/agners/micropython-scd30) ![GitHub last commit](https://img.shields.io/github/last-commit/agners/micropython-scd30)](https://github.com/agners/micropython-scd30) - MicroPython I2C driver for Sensirion SCD30 CO2 sensor module.
* [MicroPython_SCD4X ![GitHub Repo Stars](https://img.shields.io/github/stars/peter-l5/MicroPython_SCD4X) ![GitHub last commit](https://img.shields.io/github/last-commit/peter-l5/MicroPython_SCD4X)](https://github.com/peter-l5/MicroPython_SCD4X) - MicroPython I2C driver for Sensirion SCD40 and SCD41 CO2 sensors.
* [micropython-sgp40 ![GitHub Repo Stars](https://img.shields.io/github/stars/agners/micropython-sgp40) ![GitHub last commit](https://img.shields.io/github/last-commit/agners/micropython-sgp40)](https://github.com/agners/micropython-sgp40) - MicroPython I2C driver for SGP40 VOC sensor module.
* [MICS6814-Micropython-driver](https://gitlab.com/DanNduati/MICS6814-Micropython-driver) - ESP32 MicroPython driver for the Pimoroni MICS6814 breakout board.
* [MicroPython_AGS02MA ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_AGS02MA) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_AGS02MA)](https://github.com/jposada202020/MicroPython_AGS02MA) - MicroPython Driver for the AGS02MA TVOC sensor.
* [SCD4x ![GitHub Repo Stars](https://img.shields.io/github/stars/octaprog7/SCD4x) ![GitHub last commit](https://img.shields.io/github/last-commit/octaprog7/SCD4x)](https://github.com/octaprog7/SCD4x) - MicroPython module for work with SCD4x (SCD40, SCD41) low power CO2, temperature & humidity electroacoustic sensor from Sensirion.
* [ens160 ![GitHub Repo Stars](https://img.shields.io/github/stars/octaprog7/ens160) ![GitHub last commit](https://img.shields.io/github/last-commit/octaprog7/ens160)](https://github.com/octaprog7/ens160) - MicroPython module for work with ENS160 Digital Metal-Oxide Multi-Gas Sensor.

#### Humidity

* [MicroPython_HTS221 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_HTS221) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_HTS221)](https://github.com/jposada202020/MicroPython_HTS221) - MicroPython Driver for the HTS221 Humidity Sensor.

#### Light

* [MicroPython-SI1145 ![GitHub Repo Stars](https://img.shields.io/github/stars/neliogodoi/MicroPython-SI1145) ![GitHub last commit](https://img.shields.io/github/last-commit/neliogodoi/MicroPython-SI1145)](https://github.com/neliogodoi/MicroPython-SI1145) - SI1145 UV index, IR, visible light and proximity sensor.
* [micropython-tsl2561 ![GitHub Repo Stars](https://img.shields.io/github/stars/kfricke/micropython-tsl2561) ![GitHub last commit](https://img.shields.io/github/last-commit/kfricke/micropython-tsl2561)](https://github.com/kfricke/micropython-tsl2561) - Driver for the TSL2561 illumination sensor from TAOS / ams.
* [mpy_bh1750fvi_esp8266 ![GitHub Repo Stars](https://img.shields.io/github/stars/catdog2/mpy_bh1750fvi_esp8266) ![GitHub last commit](https://img.shields.io/github/last-commit/catdog2/mpy_bh1750fvi_esp8266)](https://github.com/catdog2/mpy_bh1750fvi_esp8266) - ESP8266 driver for BH1750FVI sensor.
* [bh1750 ![GitHub Repo Stars](https://img.shields.io/github/stars/PinkInk/upylib) ![GitHub last commit](https://img.shields.io/github/last-commit/PinkInk/upylib)](https://github.com/PinkInk/upylib/tree/master/bh1750) - BH1750 I2C digital light sensor driver.
* [micropython-max44009 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-max44009) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-max44009)](https://github.com/mcauser/micropython-max44009) - MicroPython driver for the MAX44009 ambient light sensor.
* [veml7700 ![GitHub Repo Stars](https://img.shields.io/github/stars/palouf34/veml7700) ![GitHub last commit](https://img.shields.io/github/last-commit/palouf34/veml7700)](https://github.com/palouf34/veml7700) - Library for MicroPython for VEML7700 light sensor.
* [MicroPython_MAX44009_driver ![GitHub Repo Stars](https://img.shields.io/github/stars/rcolistete/MicroPython_MAX44009_driver) ![GitHub last commit](https://img.shields.io/github/last-commit/rcolistete/MicroPython_MAX44009_driver)](https://github.com/rcolistete/MicroPython_MAX44009_driver) - MicroPython driver for MAX44009 light sensor.
* [MicroPython-VEML6075 ![GitHub Repo Stars](https://img.shields.io/github/stars/neliogodoi/MicroPython-VEML6075) ![GitHub last commit](https://img.shields.io/github/last-commit/neliogodoi/MicroPython-VEML6075)](https://github.com/neliogodoi/MicroPython-VEML6075) - Driver base for the VEML6075 UV light sensor.
* [BH1750 ![GitHub Repo Stars](https://img.shields.io/github/stars/octaprog7/BH1750) ![GitHub last commit](https://img.shields.io/github/last-commit/octaprog7/BH1750)](https://github.com/octaprog7/BH1750) - MicroPython module for the BH1750 ambient light sensor (ALS).
* [veml7700 ![GitHub Repo Stars](https://img.shields.io/github/stars/octaprog7/veml7700) ![GitHub last commit](https://img.shields.io/github/last-commit/octaprog7/veml7700)](https://github.com/octaprog7/veml7700) - MicroPython module for the VEML7700 ambient light sensor (ALS) from Vishay.

#### Magnetometer

* [MicroPython_LIS2MDL ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_LIS2MDL) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_LIS2MDL)](https://github.com/jposada202020/MicroPython_LIS2MDL) - MicroPython Driver for the ST LIS2MDL Magnetometer sensor.
* [MicroPython_LIS3MDL ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_LIS3MDL) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_LIS3MDL)](https://github.com/jposada202020/MicroPython_LIS3MDL) - MicroPython Driver for the ST LIS3MDL magnetometer.
* [MicroPython_MLX90393 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_MLX90393) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_MLX90393)](https://github.com/jposada202020/MicroPython_MLX90393) - MicroPython Driver for the MLX90393 Magnetometer.
* [MicroPython_MMC5603 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_MMC5603) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_MMC5603)](https://github.com/jposada202020/MicroPython_MMC5603) - MicroPython driver for the Memsic MMC5603 Magnetometer.
* [MicroPython_BMM150 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_BMM150) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_BMM150)](https://github.com/jposada202020/MicroPython_BMM150) - MicroPython Driver for the Bosch BMM150 Magnetometer.
* [MicroPython_MMC5983 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_MMC5983) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_MMC5983)](https://github.com/jposada202020/MicroPython_MMC5983) - MicroPython Library for the Memsic MMC5983 Magnetometer.

#### Motion Inertial

* [micropython-bmx055 ![GitHub Repo Stars](https://img.shields.io/github/stars/micropython-IMU/micropython-bmx055) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython-IMU/micropython-bmx055)](https://github.com/micropython-IMU/micropython-bmx055) - Driver for Bosch BMX055 IMU sensor.
* [micropython-bno055 ![GitHub Repo Stars](https://img.shields.io/github/stars/deshipu/micropython-bno055) ![GitHub last commit](https://img.shields.io/github/last-commit/deshipu/micropython-bno055)](https://github.com/deshipu/micropython-bno055) - Bosch Sensortec BNO055 9DOF IMU sensor, I2C interface.
* [micropython-lsm9ds0 ![GitHub Repo Stars](https://img.shields.io/github/stars/micropython-IMU/micropython-lsm9ds0) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython-IMU/micropython-lsm9ds0)](https://github.com/micropython-IMU/micropython-lsm9ds0) - LSM9DS0 g-force linear acceleration, Gauss magnetic and DPS angular rate sensors.
* [micropython-mpu9250 ![GitHub Repo Stars](https://img.shields.io/github/stars/tuupola/micropython-mpu9250) ![GitHub last commit](https://img.shields.io/github/last-commit/tuupola/micropython-mpu9250)](https://github.com/tuupola/micropython-mpu9250) - I2C driver for MPU9250 9-axis motion tracking device.
* [micropython-mpu9x50 ![GitHub Repo Stars](https://img.shields.io/github/stars/micropython-IMU/micropython-mpu9x50) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython-IMU/micropython-mpu9x50)](https://github.com/micropython-IMU/micropython-mpu9x50) - Driver for the InvenSense MPU9250 inertial measurement unit.
* [MPU6050-ESP8266-MicroPython ![GitHub Repo Stars](https://img.shields.io/github/stars/adamjezek98/MPU6050-ESP8266-MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/adamjezek98/MPU6050-ESP8266-MicroPython)](https://github.com/adamjezek98/MPU6050-ESP8266-MicroPython) - ESP8266 driver for MPU6050 accelerometer/gyroscope.
* [py-mpu6050 ![GitHub Repo Stars](https://img.shields.io/github/stars/larsks/py-mpu6050) ![GitHub last commit](https://img.shields.io/github/last-commit/larsks/py-mpu6050)](https://github.com/larsks/py-mpu6050) - ESP8266 driver for MPU6050 accelerometer/gyroscope.
* [micropython-mpu6886 ![GitHub Repo Stars](https://img.shields.io/github/stars/tuupola/micropython-mpu6886) ![GitHub last commit](https://img.shields.io/github/last-commit/tuupola/micropython-mpu6886)](https://github.com/tuupola/micropython-mpu6886) - MicroPython I2C driver for MPU6886 6-axis motion tracking device.
* [micropython-fusion ![GitHub Repo Stars](https://img.shields.io/github/stars/micropython-IMU/micropython-fusion) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython-IMU/micropython-fusion)](https://github.com/micropython-IMU/micropython-fusion) - Sensor fusion calculates heading, pitch and roll from the outputs of motion tracking devices.
* [flight_controller ![GitHub Repo Stars](https://img.shields.io/github/stars/wagnerc4/flight_controller) ![GitHub last commit](https://img.shields.io/github/last-commit/wagnerc4/flight_controller)](https://github.com/wagnerc4/flight_controller) - MicroPython flight controller.
* [micropython-bno055 ![GitHub Repo Stars](https://img.shields.io/github/stars/micropython-IMU/micropython-bno055) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython-IMU/micropython-bno055)](https://github.com/micropython-IMU/micropython-bno055) - Bosch BNO055 driver for MicroPython. IMU with hardware sensor fusion.
* [micropython-mpu6050-mqtt-streamer ![GitHub Repo Stars](https://img.shields.io/github/stars/mozanunal/micropython-mpu6050-mqtt-streamer) ![GitHub last commit](https://img.shields.io/github/last-commit/mozanunal/micropython-mpu6050-mqtt-streamer)](https://github.com/mozanunal/micropython-mpu6050-mqtt-streamer) - Stream data from MPU6050 to MQTT server using MicroPython on ESP8266.
* [upy-motion ![GitHub Repo Stars](https://img.shields.io/github/stars/OneMadGypsy/upy-motion) ![GitHub last commit](https://img.shields.io/github/last-commit/OneMadGypsy/upy-motion)](https://github.com/OneMadGypsy/upy-motion) - A simple MPU6050 driver written in MicroPython.
* [micropython-bno08x-rvc ![GitHub Repo Stars](https://img.shields.io/github/stars/rdagger/micropython-bno08x-rvc) ![GitHub last commit](https://img.shields.io/github/last-commit/rdagger/micropython-bno08x-rvc)](https://github.com/rdagger/micropython-bno08x-rvc) - MicroPython library for BNO08x.
* [micropython-mpu9250](https://gitlab.com/nnayo/micropython-mpu9250) - MicroPython MPU-9250 (MPU-6500 + AK8963) I2C driver.
* [MicroPython_ICM20948 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_ICM20948) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_ICM20948)](https://github.com/jposada202020/MicroPython_ICM20948) - MicroPython Driver for the TDK ICM20948 Accelerometer/Gyro Sensor.
* [MicroPython_BMI160 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_BMI160) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_BMI160)](https://github.com/jposada202020/MicroPython_BMI160) - MicroPython Driver for the Bosch BMI160 Accelerometer/Gyro Sensor.
* [micropython-mpu6050 ![GitHub Repo Stars](https://img.shields.io/github/stars/wybiral/micropython-mpu6050) ![GitHub last commit](https://img.shields.io/github/last-commit/wybiral/micropython-mpu6050)](https://github.com/wybiral/micropython-mpu6050) - MicroPython library for reading from MPU-6050 accelerometer and gyroscope modules.
* [MicroPython_ICG20660 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_ICG20660) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_ICG20660)](https://github.com/jposada202020/MicroPython_ICG20660) - MicroPython Driver for the TDK ICG20660 Accelerometer/Gyro sensor.
* [MicroPython_BMI270 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_BMI270) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_BMI270)](https://github.com/jposada202020/MicroPython_BMI270) - MicroPython Driver for the Bosch BMI270 Accelerometer/Gyro Sensor.
* [MicroPython_LSM6DSOX ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_LSM6DSOX) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_LSM6DSOX)](https://github.com/jposada202020/MicroPython_LSM6DSOX) - MicroPython Library for the ST LSM6DSOX accelerometer/gyro Sensor.

#### Pressure

* [ms5803-micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/minyiky/ms5803-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/minyiky/ms5803-micropython)](https://github.com/minyiky/ms5803-micropython) - A MicroPython implementation of the driver for an MS5803 pressure & temperature sensor.
* [MPL3115A2_MicroPython ![GitHub Repo Stars](https://img.shields.io/github/stars/PinsonJonas/MPL3115A2_MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/PinsonJonas/MPL3115A2_MicroPython)](https://github.com/PinsonJonas/MPL3115A2_MicroPython) - MicroPython library for the MPL3115A2 altimeter.
* [MicroPython_MMR902 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_MMR902) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_MMR902)](https://github.com/jposada202020/MicroPython_MMR902) - MicroPython Driver for the Mitsumi MMR902 Micro Pressure Sensor.
* [MicroPython_MPL3115A2 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_MPL3115A2) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_MPL3115A2)](https://github.com/jposada202020/MicroPython_MPL3115A2) - MicroPython driver for the NXP MPL3115A2 Pressure and Temperature sensor.
* [MicroPython_MS5611 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_MS5611) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_MS5611)](https://github.com/jposada202020/MicroPython_MS5611) - MicroPython Driver for the TE MS5611 Pressure and Temperature Sensor.
* [D6F-PH ![GitHub Repo Stars](https://img.shields.io/github/stars/ekspla/D6F-PH) ![GitHub last commit](https://img.shields.io/github/last-commit/ekspla/D6F-PH)](https://github.com/ekspla/D6F-PH) - MicroPython module for differential pressure sensor, D6F-PH (OMRON).

#### Proximity

* [uPy_APDS9960 ![GitHub Repo Stars](https://img.shields.io/github/stars/rlangoy/uPy_APDS9960) ![GitHub last commit](https://img.shields.io/github/last-commit/rlangoy/uPy_APDS9960)](https://github.com/rlangoy/uPy_APDS9960) - MicroPython proximity library for ESP8266 using APDS9960.
* [MicroPython_VCNL4010 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_VCNL4010) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_VCNL4010)](https://github.com/jposada202020/MicroPython_VCNL4010) - MicroPython Driver for the Vishay VCNL4010 Proximity and Ambient Light Sensor.

#### Radiation

* [micropython-geiger ![GitHub Repo Stars](https://img.shields.io/github/stars/Josep/micropython-geiger) ![GitHub last commit](https://img.shields.io/github/last-commit/Josep/micropython-geiger)](https://github.com/Josep/micropython-geiger) - Geiger counter with MicroPython card.
* [ESPGeiger ![GitHub Repo Stars](https://img.shields.io/github/stars/biemster/ESPGeiger) ![GitHub last commit](https://img.shields.io/github/last-commit/biemster/ESPGeiger)](https://github.com/biemster/ESPGeiger) - MicroPython library for the ESP8266 Geiger counter.

#### Soil Moisture

* [micropython-chirp ![GitHub Repo Stars](https://img.shields.io/github/stars/robberwick/micropython-chirp) ![GitHub last commit](https://img.shields.io/github/last-commit/robberwick/micropython-chirp)](https://github.com/robberwick/micropython-chirp) - Driver for the Chirp Soil Moisture Sensor.
* [MicroPython-MiFlora ![GitHub Repo Stars](https://img.shields.io/github/stars/matthias-bs/MicroPython-MiFlora) ![GitHub last commit](https://img.shields.io/github/last-commit/matthias-bs/MicroPython-MiFlora)](https://github.com/matthias-bs/MicroPython-MiFlora) - Xiaomi Mi Flora (aka flower care) BLE plant sensors (soil moisture/conductivity/light intensity/temperature).
* [micropython-miflora ![GitHub Repo Stars](https://img.shields.io/github/stars/agners/micropython-miflora) ![GitHub last commit](https://img.shields.io/github/last-commit/agners/micropython-miflora)](https://github.com/agners/micropython-miflora) - MicroPython library for Xiaomi Mi Flora BLE plant sensors.

#### Spectral

* [AS726X_LoPy ![GitHub Repo Stars](https://img.shields.io/github/stars/jajberni/AS726X_LoPy) ![GitHub last commit](https://img.shields.io/github/last-commit/jajberni/AS726X_LoPy)](https://github.com/jajberni/AS726X_LoPy) - MicroPython driver for the AS726X spectral sensor.
* [MicroPython_AS7262X_driver ![GitHub Repo Stars](https://img.shields.io/github/stars/rcolistete/MicroPython_AS7262X_driver) ![GitHub last commit](https://img.shields.io/github/last-commit/rcolistete/MicroPython_AS7262X_driver)](https://github.com/rcolistete/MicroPython_AS7262X_driver) - MicroPython driver for AS7262/AS7263 nano spectrometer sensor.

#### Temperature Analog

* [micropython-max31855 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-max31855) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-max31855)](https://github.com/mcauser/deshipu-micropython-max31855) - Thermocouple amplifier, SPI interface.
* [max31856 ![GitHub Repo Stars](https://img.shields.io/github/stars/alinbaltaru/max31856) ![GitHub last commit](https://img.shields.io/github/last-commit/alinbaltaru/max31856)](https://github.com/alinbaltaru/max31856) - Precision thermocouple to digital converter with linearization, SPI interface.
* [mcp9700](https://gitlab.com/CrispyCrafter/mcp9700) - Generic MicroPython driver for MCP9700.

#### Temperature Digital

* [bme680-mqtt-micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/robmarkcole/bme680-mqtt-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/robmarkcole/bme680-mqtt-micropython)](https://github.com/robmarkcole/bme680-mqtt-micropython) - Driver for BME680 gas, pressure, temperature and humidity sensor.
* [LM75-MicroPython ![GitHub Repo Stars](https://img.shields.io/github/stars/OldhamMade/LM75-MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/OldhamMade/LM75-MicroPython)](https://github.com/OldhamMade/LM75-MicroPython) - Driver for LM75 digital temperature sensor, I2C interface.
* [micropython-am2320 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-am2320) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-am2320)](https://github.com/mcauser/micropython-am2320) - Aosong AM2320 temperature and humidity sensor, I2C interface.
* [micropython-dht12 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-dht12) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-dht12)](https://github.com/mcauser/micropython-dht12) - Aosong DHT12 temperature and humidity sensor, I2C interface.
* [micropython-hdc1008 ![GitHub Repo Stars](https://img.shields.io/github/stars/kfricke/micropython-hdc1008) ![GitHub last commit](https://img.shields.io/github/last-commit/kfricke/micropython-hdc1008)](https://github.com/kfricke/micropython-hdc1008) - Driver for the Texas Instruments HDC1008 humidity and temperature sensor.
* [micropython-mcp9808 ![GitHub Repo Stars](https://img.shields.io/github/stars/kfricke/micropython-mcp9808) ![GitHub last commit](https://img.shields.io/github/last-commit/kfricke/micropython-mcp9808)](https://github.com/kfricke/micropython-mcp9808) - Driver for the Microchip MCP9808 temperature sensor.
* [micropython-mpl115a2 ![GitHub Repo Stars](https://img.shields.io/github/stars/khoulihan/micropython-mpl115a2) ![GitHub last commit](https://img.shields.io/github/last-commit/khoulihan/micropython-mpl115a2)](https://github.com/khoulihan/micropython-mpl115a2) - Pyboard driver for the MPL115A2 barometric pressure sensor.
* [micropython-sht30 ![GitHub Repo Stars](https://img.shields.io/github/stars/rsc1975/micropython-sht30) ![GitHub last commit](https://img.shields.io/github/last-commit/rsc1975/micropython-sht30)](https://github.com/rsc1975/micropython-sht30) - Driver for SHT30 temperature and humidity sensor.
* [micropython-sht31 ![GitHub Repo Stars](https://img.shields.io/github/stars/kfricke/micropython-sht31) ![GitHub last commit](https://img.shields.io/github/last-commit/kfricke/micropython-sht31)](https://github.com/kfricke/micropython-sht31) - Driver for the SHT31 temperature and humidity sensor.
* [micropython-Si7005 ![GitHub Repo Stars](https://img.shields.io/github/stars/Smrtokvitek/micropython-Si7005) ![GitHub last commit](https://img.shields.io/github/last-commit/Smrtokvitek/micropython-Si7005)](https://github.com/Smrtokvitek/micropython-Si7005) - Driver for Si7005 relative humidity and temperature sensor.
* [micropython-si7021 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-si7021) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-si7021)](https://github.com/mcauser/deshipu-micropython-si7021) - SI7021 Temperature and humidity sensor, I2C interface.
* [micropython-si7021 ![GitHub Repo Stars](https://img.shields.io/github/stars/chrisbalmer/micropython-si7021) ![GitHub last commit](https://img.shields.io/github/last-commit/chrisbalmer/micropython-si7021)](https://github.com/chrisbalmer/micropython-si7021) - SI7021 Temperature and humidity sensor, I2C interface.
* [micropython-Si705x ![GitHub Repo Stars](https://img.shields.io/github/stars/billyrayvalentine/micropython-Si705x) ![GitHub last commit](https://img.shields.io/github/last-commit/billyrayvalentine/micropython-Si705x)](https://github.com/billyrayvalentine/micropython-Si705x) - Silicon Labs Si705x series of temperature sensors, I2C interface.
* [micropython-Si70xx ![GitHub Repo Stars](https://img.shields.io/github/stars/billyrayvalentine/micropython-Si70xx) ![GitHub last commit](https://img.shields.io/github/last-commit/billyrayvalentine/micropython-Si70xx)](https://github.com/billyrayvalentine/micropython-Si70xx) - Silicon Labs Si70xx series of relative humidity and temperature sensors, I2C interface.
* [micropython-tmp102 ![GitHub Repo Stars](https://img.shields.io/github/stars/khoulihan/micropython-tmp102) ![GitHub last commit](https://img.shields.io/github/last-commit/khoulihan/micropython-tmp102)](https://github.com/khoulihan/micropython-tmp102) - Driver for TMP102 digital temperature sensor.
* [Official DHT11+DHT12 ![GitHub Repo Stars](https://img.shields.io/github/stars/micropython/micropython-lib) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython/micropython-lib)](https://github.com/micropython/micropython-lib/tree/master/micropython/drivers/sensor/dht) - ESP8266 driver for DHT11 and DHT12 temperature and humidity sensor.
* [sht25-micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/Miceuz/sht25-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/Miceuz/sht25-micropython)](https://github.com/Miceuz/sht25-micropython) - Driver for SHT25 temperature and humidity sensor.
* [micropython-tmp1075 ![GitHub Repo Stars](https://img.shields.io/github/stars/mattytrentini/micropython-tmp1075) ![GitHub last commit](https://img.shields.io/github/last-commit/mattytrentini/micropython-tmp1075)](https://github.com/mattytrentini/micropython-tmp1075) - Driver for the TI TMP1075 temperature sensor.
* [micropython-sht11 ![GitHub Repo Stars](https://img.shields.io/github/stars/2black0/micropython-sht11) ![GitHub last commit](https://img.shields.io/github/last-commit/2black0/micropython-sht11)](https://github.com/2black0/micropython-sht11) - Driver for Sensirion SHT11 temperature and humidity sensor.
* [micropython-lm75a ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-lm75a) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-lm75a)](https://github.com/mcauser/micropython-lm75a) - Driver for the NXP LM75A digital temperature sensor.
* [BME680-Micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/robert-hh/BME680-Micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/BME680-Micropython)](https://github.com/robert-hh/BME680-Micropython) - MicroPython driver for the BME680 sensor.
* [htu21d-esp8266 ![GitHub Repo Stars](https://img.shields.io/github/stars/julianhille/htu21d-esp8266) ![GitHub last commit](https://img.shields.io/github/last-commit/julianhille/htu21d-esp8266)](https://github.com/julianhille/htu21d-esp8266) - This is a MicroPython module / class to measure data from the HTU21D.
* [HTU21D ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-async) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-async)](https://github.com/peterhinch/micropython-async/blob/master/v3/docs/HTU21D.md) - Asynchronous driver for HTU21D temperature and humidity sensor.
* [esp-sht3x-micropython ![GitHub Repo Stars](https://img.shields.io/github/stars/HAIZAKURA/esp-sht3x-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/HAIZAKURA/esp-sht3x-micropython)](https://github.com/HAIZAKURA/esp-sht3x-micropython) - A SHT3x (SHT30/31/35) library for ESP8266/ESP32 with MicroPython.
* [sht25-micropython](https://gitlab.com/miceuz/sht25-micropython) - MicroPython implementation of API of SHT25 humidity and temperature sensor.
* [micropython-sht30 ![GitHub Repo Stars](https://img.shields.io/github/stars/schinckel/micropython-sht30) ![GitHub last commit](https://img.shields.io/github/last-commit/schinckel/micropython-sht30)](https://github.com/schinckel/micropython-sht30) - SHT30 sensor driver in pure Python based on I2C bus.
* [micropython_ahtx0 ![GitHub Repo Stars](https://img.shields.io/github/stars/targetblank/micropython_ahtx0) ![GitHub last commit](https://img.shields.io/github/last-commit/targetblank/micropython_ahtx0)](https://github.com/targetblank/micropython_ahtx0) - MicroPython driver for the AHT10 and AHT20 temperature and humidity sensors.
* [sht85 ![GitHub Repo Stars](https://img.shields.io/github/stars/octaprog7/sht85) ![GitHub last commit](https://img.shields.io/github/last-commit/octaprog7/sht85)](https://github.com/octaprog7/sht85) - MicroPython driver for the [Sensiron SHT85](https://sensirion.com/products/catalog/SHT85/) humidity and temperature sensor.
* [micropython-zacwire ![GitHub Repo Stars](https://img.shields.io/github/stars/mdaeron/micropython-zacwire) ![GitHub last commit](https://img.shields.io/github/last-commit/mdaeron/micropython-zacwire)](https://github.com/mdaeron/micropython-zacwire) - MicroPython driver for the ZACwire protocol used in TSic 506F temperature sensors.
* [MicroPython_HTU31D ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_HTU31D) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_HTU31D)](https://github.com/jposada202020/MicroPython_HTU31D) - MicroPython library for TE HTU31D temperature and humidity sensors.
* [MicroPython_SHTC3 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_SHTC3) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_SHTC3)](https://github.com/jposada202020/MicroPython_SHTC3) - MicroPython Driver for the Sensirion SHTC3 Temperature and Humidity Sensor.
* [MicroPython_TMP117 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_TMP117) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_TMP117)](https://github.com/jposada202020/MicroPython_TMP117) - MicroPython Driver for the TMP117 Temperature Sensor.
* [MicroPython_SI7021 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_SI7021) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_SI7021)](https://github.com/jposada202020/MicroPython_SI7021) - MicroPython Library for the Temperature and Humidity SI7021 Sensor.
* [MicroPython_ADT7410 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_ADT7410) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_ADT7410)](https://github.com/jposada202020/MicroPython_ADT7410) - MicroPython Driver for the Analog Devices ADT7410 Temperature Sensor.
* [MicroPython_WSENTIDS ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_WSENTIDS) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_WSENTIDS)](https://github.com/jposada202020/MicroPython_WSENTIDS) - MicroPython library for the WSEN WSEN-TIDS temperature Sensor.
* [MicroPython_HS3003 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_HS3003) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_HS3003)](https://github.com/jposada202020/MicroPython_HS3003) - MicroPython Driver for the Renesas HS3003 Temperature and Humidity Sensor.
* [MicroPython_STTS22H ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_STTS22H) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_STTS22H)](https://github.com/jposada202020/MicroPython_STTS22H) - MicroPython Driver for the STTS22H Temperature Sensor.
* [MicroPython_HTU21DF ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_HTU21DF) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_HTU21DF)](https://github.com/jposada202020/MicroPython_HTU21DF) - MicroPython HTU21D-F Temperature & Humidity driver.
* [MicroPython_SHT4X ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_SHT4X) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_SHT4X)](https://github.com/jposada202020/MicroPython_SHT4X) - MicroPython Driver fot the Sensirion Temperature and Humidity SHT40 and SHT45 Sensor.
* [MicroPython_SHT20 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_SHT20) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_SHT20)](https://github.com/jposada202020/MicroPython_SHT20) - MicroPython Driver for the Sensirion SHT20 Temperature Sensor.
* [MicroPython_MCP9808 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_MCP9808) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_MCP9808)](https://github.com/jposada202020/MicroPython_MCP9808) - MicroPython Driver for the Microchip MCP9808 Temperature Sensor.
* [MicroPython_HDC1080 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_HDC1080) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_HDC1080)](https://github.com/jposada202020/MicroPython_HDC1080) - MicroPython driver for the TI HDC1080 Temperature and Humidity sensor.
* [TMP117 ![GitHub Repo Stars](https://img.shields.io/github/stars/octaprog7/TMP117) ![GitHub last commit](https://img.shields.io/github/last-commit/octaprog7/TMP117)](https://github.com/octaprog7/TMP117) - MicroPython module for the TMP117 temperature sensor from Texas Instruments.
* [BME680 ![GitHub Repo Stars](https://img.shields.io/github/stars/octaprog7/BME680) ![GitHub last commit](https://img.shields.io/github/last-commit/octaprog7/BME680)](https://github.com/octaprog7/BME680) - MicroPython module for the BME680, Bosch low power gas, pressure, temperature & humidity sensor.
* [SHT30 ![GitHub Repo Stars](https://img.shields.io/github/stars/robert-hh/SHT30) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/SHT30)](https://github.com/robert-hh/SHT30) - MicroPython driver for the Sensirion SHT3x sensor.
* [MicroPython_AS6212 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_AS6212) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_AS6212)](https://github.com/jposada202020/MicroPython_AS6212) - MicroPython Library for the ASM AS6212 Temperature Sensor.
* [MicroPython_PCT2075 ![GitHub Repo Stars](https://img.shields.io/github/stars/jposada202020/MicroPython_PCT2075) ![GitHub last commit](https://img.shields.io/github/last-commit/jposada202020/MicroPython_PCT2075)](https://github.com/jposada202020/MicroPython_PCT2075) - MicroPython Driver for the NXP Semiconductors PCT2075 Temperature Sensor.

#### Temperature IR

* [micropython-mlx90614 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-mlx90614) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-mlx90614)](https://github.com/mcauser/micropython-mlx90614) - Driver for Melexis MLX90614 IR temperature sensor.
* [MicroPython_MLX90615_driver ![GitHub Repo Stars](https://img.shields.io/github/stars/rcolistete/MicroPython_MLX90615_driver) ![GitHub last commit](https://img.shields.io/github/last-commit/rcolistete/MicroPython_MLX90615_driver)](https://github.com/rcolistete/MicroPython_MLX90615_driver) - MicroPython driver for Melexis MLX90615 IR temperature sensor.

#### Touch Capacitive

* [micropython-mpr121 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-mpr121) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-mpr121)](https://github.com/mcauser/micropython-mpr121) - Driver for MPR121 capacitive touch keypads and breakout boards.
* [micropython-ttp223 ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/micropython-ttp223) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-ttp223)](https://github.com/mcauser/micropython-ttp223) - Examples using TTP223 capacitive touch module.
* [micropython-TTP229-BSF ![GitHub Repo Stars](https://img.shields.io/github/stars/alankrantas/micropython-TTP229-BSF) ![GitHub last commit](https://img.shields.io/github/last-commit/alankrantas/micropython-TTP229-BSF)](https://github.com/alankrantas/micropython-TTP229-BSF) - MicroPython ESP8266/ESP32 driver for TTP229-BSF 16-key capacitive keypad in serial interface mode.
* [uFT6336U ![GitHub Repo Stars](https://img.shields.io/github/stars/fantasticdonkey/uFT6336U) ![GitHub last commit](https://img.shields.io/github/last-commit/fantasticdonkey/uFT6336U)](https://github.com/fantasticdonkey/uFT6336U) - MicroPython I2C driver for the Focus LCDs FT6336U capacitive touch panel controller IC.
* [MicroPythonTrill ![GitHub Repo Stars](https://img.shields.io/github/stars/Heerkog/MicroPythonTrill) ![GitHub last commit](https://img.shields.io/github/last-commit/Heerkog/MicroPythonTrill)](https://github.com/Heerkog/MicroPythonTrill) - Trill touch sensor library for MicroPython.
* [L58Touch ![GitHub Repo Stars](https://img.shields.io/github/stars/russhughes/L58Touch) ![GitHub last commit](https://img.shields.io/github/last-commit/russhughes/L58Touch)](https://github.com/russhughes/L58Touch) - L58 Multi-Touch MicroPython Module.

#### Touch Resistive

* [XPT2046-touch-pad-driver ![GitHub Repo Stars](https://img.shields.io/github/stars/robert-hh/XPT2046-touch-pad-driver) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/XPT2046-touch-pad-driver)](https://github.com/robert-hh/XPT2046-touch-pad-driver) - Driver for XPT2046 touch pad controller used in many TFT modules.

### Scheduling

* [micropython-mcron ![GitHub Repo Stars](https://img.shields.io/github/stars/fizista/micropython-mcron) ![GitHub last commit](https://img.shields.io/github/last-commit/fizista/micropython-mcron)](https://github.com/fizista/micropython-mcron) - MicroCRON is a time-based task scheduling program for MicroPython.
* [micropython-scron ![GitHub Repo Stars](https://img.shields.io/github/stars/fizista/micropython-scron) ![GitHub last commit](https://img.shields.io/github/last-commit/fizista/micropython-scron)](https://github.com/fizista/micropython-scron) - SimpleCRON is a time-based task scheduling program inspired by the well-known cron program for Unix systems.
* [Schedule ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-async) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-async)](https://github.com/peterhinch/micropython-async/blob/master/v3/docs/SCHEDULE.md) - A scheduler for uasyncio based applications. Schedule events at specified times and dates or with reference to Sun and Moon rise and set.
* [micropython-aioschedule ![GitHub Repo Stars](https://img.shields.io/github/stars/ThinkTransit/micropython-aioschedule) ![GitHub last commit](https://img.shields.io/github/last-commit/ThinkTransit/micropython-aioschedule)](https://github.com/ThinkTransit/micropython-aioschedule) - A persistent uasyncio scheduler that supports deepsleep between task runs.

### Storage

#### Database

* [uPyMySQL ![GitHub Repo Stars](https://img.shields.io/github/stars/dvrhax/uPyMySQL) ![GitHub last commit](https://img.shields.io/github/last-commit/dvrhax/uPyMySQL)](https://github.com/dvrhax/uPyMySQL) - Pure MicroPython MySQL Client.
* [micropython-redis ![GitHub Repo Stars](https://img.shields.io/github/stars/dwighthubbard/micropython-redis) ![GitHub last commit](https://img.shields.io/github/last-commit/dwighthubbard/micropython-redis)](https://github.com/dwighthubbard/micropython-redis) - A Redis client implementation designed for use with MicroPython.
* [picoredis ![GitHub Repo Stars](https://img.shields.io/github/stars/SpotlightKid/picoredis) ![GitHub last commit](https://img.shields.io/github/last-commit/SpotlightKid/picoredis)](https://github.com/SpotlightKid/picoredis) - A very minimal Redis client (not only) for MicroPython.
* [micropg ![GitHub Repo Stars](https://img.shields.io/github/stars/nakagami/micropg) ![GitHub last commit](https://img.shields.io/github/last-commit/nakagami/micropg)](https://github.com/nakagami/micropg) - PostgreSQL database driver for MicroPython.
* [micropg_lite ![GitHub Repo Stars](https://img.shields.io/github/stars/TimonW-Dev/micropg_lite) ![GitHub last commit](https://img.shields.io/github/last-commit/TimonW-Dev/micropg_lite)](https://github.com/TimonW-Dev/micropg_lite) - PostgreSQL database driver for MicroPython, based on micropg but aiming to require less memory with some compromises in functionality.
* [nmongo ![GitHub Repo Stars](https://img.shields.io/github/stars/nakagami/nmongo) ![GitHub last commit](https://img.shields.io/github/last-commit/nakagami/nmongo)](https://github.com/nakagami/nmongo) - MongoDB client for CPython and MicroPython, with MongoDB shell-like APIs.
* [MicroPyDatabase ![GitHub Repo Stars](https://img.shields.io/github/stars/sungkhum/MicroPyDatabase) ![GitHub last commit](https://img.shields.io/github/last-commit/sungkhum/MicroPyDatabase)](https://github.com/sungkhum/MicroPyDatabase) - A low-memory JSON-based database for MicroPython.
* [micropython-firebase-realtime-database ![GitHub Repo Stars](https://img.shields.io/github/stars/ckoever/micropython-firebase-realtime-database) ![GitHub last commit](https://img.shields.io/github/last-commit/ckoever/micropython-firebase-realtime-database)](https://github.com/ckoever/micropython-firebase-realtime-database) - Firebase implementation for MicroPython optimized for ESP32.
* [micropython-firebase-firestore ![GitHub Repo Stars](https://img.shields.io/github/stars/WoolDoughnut310/micropython-firebase-firestore) ![GitHub last commit](https://img.shields.io/github/last-commit/WoolDoughnut310/micropython-firebase-firestore)](https://github.com/WoolDoughnut310/micropython-firebase-firestore) - Firebase Firestore implementation for MicroPython.
* [uSQLite ![GitHub Repo Stars](https://img.shields.io/github/stars/spatialdude/usqlite) ![GitHub last commit](https://img.shields.io/github/last-commit/spatialdude/usqlite)](https://github.com/spatialdude/usqlite) - SQLite library module for MicroPython.

#### EEPROM

* [micropython_eeprom ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython_eeprom) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython_eeprom)](https://github.com/peterhinch/micropython_eeprom) - Cross-platform MicroPython device drivers for memory chips (EEPROM, FRAM, Flash, PSRAM).
* [mb_24x256_512 ![GitHub Repo Stars](https://img.shields.io/github/stars/MarksBench/mb_24x256_512) ![GitHub last commit](https://img.shields.io/github/last-commit/MarksBench/mb_24x256_512)](https://github.com/MarksBench/mb_24x256_512) - Very simple MicroPython module/driver for Microchip 24x256 and 24x512 I2C EEPROM devices.
* [micropython-eeprom ![GitHub Repo Stars](https://img.shields.io/github/stars/brainelectronics/micropython-eeprom) ![GitHub last commit](https://img.shields.io/github/last-commit/brainelectronics/micropython-eeprom)](https://github.com/brainelectronics/micropython-eeprom) - MicroPython driver for AT24Cxx EEPROM.

#### Flash

* [micropython_data_to_py ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython_data_to_py) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython_data_to_py)](https://github.com/peterhinch/micropython_data_to_py) - A Python 3 utility to convert an arbitrary binary file to Python source for freezing as bytecode in Flash.
* [micropython-winbond ![GitHub Repo Stars](https://img.shields.io/github/stars/brainelectronics/micropython-winbond) ![GitHub last commit](https://img.shields.io/github/last-commit/brainelectronics/micropython-winbond)](https://github.com/brainelectronics/micropython-winbond) - Interact with Winbond W25Q Flash chips via SPI.

#### FRAM

* [micropython-fram ![GitHub Repo Stars](https://img.shields.io/github/stars/rolandvs/micropython-fram) ![GitHub last commit](https://img.shields.io/github/last-commit/rolandvs/micropython-fram)](https://github.com/rolandvs/micropython-fram) - Pyboard driver for Ferroelectric RAM module.

#### PSRAM

* [mb_PSRAM_64Mb_SPI ![GitHub Repo Stars](https://img.shields.io/github/stars/MarksBench/mb_PSRAM_64Mb_SPI) ![GitHub last commit](https://img.shields.io/github/last-commit/MarksBench/mb_PSRAM_64Mb_SPI)](https://github.com/MarksBench/mb_PSRAM_64Mb_SPI) - Very simple MicroPython module to use a generic 64Mbit PSRAM (ie Adafruit 4677) with a Raspberry Pi Pico (RP2040).

#### SRAM

* [mb_23LC1024 ![GitHub Repo Stars](https://img.shields.io/github/stars/MarksBench/mb_23LC1024) ![GitHub last commit](https://img.shields.io/github/last-commit/MarksBench/mb_23LC1024)](https://github.com/MarksBench/mb_23LC1024) - Very simple MicroPython module to use a Microchip 23LC1024 SPI SRAM with a Raspberry Pi Pico (RP2040).
* [mb_47x16 ![GitHub Repo Stars](https://img.shields.io/github/stars/MarksBench/mb_47x16) ![GitHub last commit](https://img.shields.io/github/last-commit/MarksBench/mb_47x16)](https://github.com/MarksBench/mb_47x16) - Very simple MicroPython module/driver for Microchip 47x16 EERAM devices (47L/47C).

### Threading

* [MicroWorkers ![GitHub Repo Stars](https://img.shields.io/github/stars/jczic/MicroWorkers) ![GitHub last commit](https://img.shields.io/github/last-commit/jczic/MicroWorkers)](https://github.com/jczic/MicroWorkers) - A micro workers class that easily manages a pool of threads to optimise simultaneous jobs and jobs endings, for MicroPython (used on Pycom modules & ESP32).

### User Interface

* [upymenu ![GitHub Repo Stars](https://img.shields.io/github/stars/jplattel/upymenu) ![GitHub last commit](https://img.shields.io/github/last-commit/jplattel/upymenu)](https://github.com/jplattel/upymenu) - MicroPython Menu for LCD Displays.

## Community

* [MicroPython Discussions on GitHub ![GitHub Repo Stars](https://img.shields.io/github/stars/orgs/micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/orgs/micropython)](https://github.com/orgs/micropython/discussions) - GitHub discussions for all things related to MicroPython.
* [MicroPython Forum (archive)](https://forum.micropython.org/) - Archived community conversations on all things related to MicroPython.
* [Discord](https://discord.com/invite/qw7d8bv) - Get an invite to the MicroPython Discord server.
* [MicroPython on Mastodon / Fediverse](https://fosstodon.org/@MicroPython) - Follow MicroPython in the Fediverse.
* [MicroPython on Twitter](https://twitter.com/micropython) - Follow MicroPython on Twitter for latest news and updates.
* [MicroPython on Facebook](https://www.facebook.com/micropython) - Like MicroPython on Facebook for competitions, news and updates.
* [Melbourne MicroPython Meetup](https://www.meetup.com/en-AU/MicroPython-Meetup) - Regular meetup at CCHS in Melbourne, Australia.

## Tutorials

* [uasyncio ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-async) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-async)](https://github.com/peterhinch/micropython-async/blob/master/v3/docs/TUTORIAL.md) - Write asynchronous code which interfaces to hardware devices.
* [Asynchronous drivers ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-async) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-async)](https://github.com/peterhinch/micropython-async/blob/master/v3/docs/DRIVERS.md) - Tutorial and code for asynchronous interfaces to switches, pushbuttons, encoders and ADCs.
* [Pyboard micropower ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-micropower) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-micropower)](https://github.com/peterhinch/micropython-micropower) - Tutorial and code for low power applications on Pyboard 1.x and Pyboard D.
* [3D rotation with quaternions ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-samples) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-samples)](https://github.com/peterhinch/micropython-samples/blob/master/QUATERNIONS.md) - Tutorial and code for the easy way to do 3D rotation.
* [Miguel Grinberg](https://blog.miguelgrinberg.com/category/MicroPython) - MicroPython and the Internet of Things.
* [Bhavesh Kakwani](https://bhave.sh/) - MicroPython videos + written tutorials.
* [CoderDojo Twin Cities MicroPython](https://www.coderdojotc.org/micropython/) - Full coding curriculum for teaching MicroPython to children.
* [MicroPython Tutorials for ESP32 boards](https://www.upesy.com/blogs/tutorials/tutorials-for-esp32-with-micropython-code) - Tutorials with code examples to learn the basic of MicroPython with ESP32 boards.
* [Learn MicroPython with a Pi Pico board](https://www.upesy.com/blogs/tutorials/tutorials-for-rpi-pi-pico-with-micropython-code) - Tutorials on MicroPython with the Raspberry Pi Pico / RP240 boards.

## Books

* [Programming with MicroPython: Embedded Programming with Microcontrollers and Python](https://www.oreilly.com/library/view/programming-with-micropython/9781491972724/) - By Nicholas H. Tollervey. ISBN 9781491972731.
* [MicroPython for the Internet of Things: A Beginner's Guide to Programming with Python on Microcontrollers](https://link.springer.com/book/10.1007/978-1-4842-3123-4) - By Charles Bell. ISBN 9781484231227.
* [Beginning MicroPython with the Raspberry Pi Pico: Build Electronics and IoT Projects](https://link.springer.com/book/10.1007/978-1-4842-8135-2) - By Charles Bell. ISBN 9781484281345.
* [MicroPython Cookbook](https://www.packtpub.com/au/application-development/micropython-cookbook) - By Marwan Alsabbagh. ISBN 9781838649951.
* [Python for Microcontrollers: Getting Started with MicroPython](https://www.mheducation.com.au/python-for-microcontrollers-getting-started-with-micropython-9781259644535-aus) - By Donald Norris. ISBN 9781259644535.
* [Advanced Programming in MicroPython By Example](https://www.amazon.com/Advanced-Programming-MicroPython-Example-Magda/dp/1090900937) - By Yury Magda. ISBN 9781090900937.
* [MicroPython Projects](https://www.packtpub.com/au/iot-hardware/micropython-projects) - By Jacob Beningo. ISBN 9781789958034.
* [Get Started with MicroPython on Raspberry Pi Pico](https://store.rpipress.cc/products/get-started-with-micropython-on-raspberry-pi-pico) - By Gareth Halfacree and Ben Everard. ISBN 9781912047864.
* [MicroPython for Microcontrollers](https://www.elektor.com/micropython-for-microcontrollers-e-book) - By Günter Spanner. ISBN 9783895764370.
* [MicroPython for the Raspberry Pi Pico W: A gentle introduction to programming digital circuits with Python](https://www.amazon.com/MicroPython-Raspberry-Pico-introduction-programming/dp/B0BKSCV18D) - By Miguel Grinberg. ISBN 9798361302710.

## Frameworks

* [micrOS ![GitHub Repo Stars](https://img.shields.io/github/stars/BxNxM/micrOS) ![GitHub last commit](https://img.shields.io/github/last-commit/BxNxM/micrOS)](https://github.com/BxNxM/micrOS) - MicroPython-based IoT Framework.
* [terkin-datalogger ![GitHub Repo Stars](https://img.shields.io/github/stars/hiveeyes/terkin-datalogger) ![GitHub last commit](https://img.shields.io/github/last-commit/hiveeyes/terkin-datalogger)](https://github.com/hiveeyes/terkin-datalogger) - Flexible data logger application for MicroPython and CPython.
* [perthensis](https://codeberg.org/scy/perthensis) - Perthensis: an asynchronous framework for MicroPython.
* [meerkat ![GitHub Repo Stars](https://img.shields.io/github/stars/crdietrich/meerkat) ![GitHub last commit](https://img.shields.io/github/last-commit/crdietrich/meerkat)](https://github.com/crdietrich/meerkat) - I2C Data Acquisition for MicroPython and Raspberry Pi.

## Resources

* [MicroPython](https://micropython.org) - Project website. Test drive the Pyboard. Try MicroPython online with Unicorn.
* [MicroPython on GitHub ![GitHub Repo Stars](https://img.shields.io/github/stars/micropython/micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython/micropython)](https://github.com/micropython/micropython) - Submit bug reports, follow and join in development on GitHub.
* [MicroPython Official Documentation](https://docs.micropython.org/) - For various ports, including quick reference, general information, examples and tutorials.
* [MicroPython Wiki ![GitHub Repo Stars](https://img.shields.io/github/stars/micropython/micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython/micropython)](https://github.com/micropython/micropython/wiki) - Community generated documentation and examples of the features of MicroPython and the Pyboard.
* [MicroPython Newsletter](https://micropython.org/newsletter) - Subscribe to the MicroPython newsletter for news and announcements including new features and new products.
* [MicroPython Store](https://store.micropython.org/) - Where you can buy the Pyboard, housings, skins, books, connectors and peripherals.
* [MicroPython on Wikipedia](https://en.wikipedia.org/wiki/MicroPython) - MicroPython on Wikipedia.
* [awesome-micropythons ![GitHub Repo Stars](https://img.shields.io/github/stars/adafruit/awesome-micropythons) ![GitHub last commit](https://img.shields.io/github/last-commit/adafruit/awesome-micropythons)](https://github.com/adafruit/awesome-micropythons) - The many forks & ports of MicroPython.

## Development

### Code Generation

* [micropy-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/BradenM/micropy-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/BradenM/micropy-cli)](https://github.com/BradenM/micropy-cli) - Micropy CLI is a project management/generation tool for writing MicroPython code in modern IDEs such as Visual Studio Code.
* [micropython-stubber ![GitHub Repo Stars](https://img.shields.io/github/stars/Josverl/micropython-stubber) ![GitHub last commit](https://img.shields.io/github/last-commit/Josverl/micropython-stubber)](https://github.com/Josverl/micropython-stubber) - Generate and use stubs for different MicroPython firmwares to use with Visual Studio Code or any IDE and linter.
* [micropython-stubs ![GitHub Repo Stars](https://img.shields.io/github/stars/Josverl/micropython-stubs) ![GitHub last commit](https://img.shields.io/github/last-commit/Josverl/micropython-stubs)](https://github.com/Josverl/micropython-stubs) - Stubs of most MicroPython ports, boards and versions to make writing code that much simpler.
* [micropy-stubs ![GitHub Repo Stars](https://img.shields.io/github/stars/BradenM/micropy-stubs) ![GitHub last commit](https://img.shields.io/github/last-commit/BradenM/micropy-stubs)](https://github.com/BradenM/micropy-stubs) - Automatically Generated Stub Packages for Micropy-Cli and whomever else.
* [micropython-extmod-generator ![GitHub Repo Stars](https://img.shields.io/github/stars/prusnak/micropython-extmod-generator) ![GitHub last commit](https://img.shields.io/github/last-commit/prusnak/micropython-extmod-generator)](https://github.com/prusnak/micropython-extmod-generator) - Generator for MicroPython external modules written in C.
* [micropython-package-template ![GitHub Repo Stars](https://img.shields.io/github/stars/brainelectronics/micropython-package-template) ![GitHub last commit](https://img.shields.io/github/last-commit/brainelectronics/micropython-package-template)](https://github.com/brainelectronics/micropython-package-template) - GitHub workflow supported MicroPython package template with deploys to the [Python Package Index](https://pypi.org/) on a push to the main branch and test deploys to the [Test Python Package Index](https://test.pypi.org/) on PRs.
* [micropython-usermod](https://micropython-usermod.readthedocs.io) - Online book about MicroPython external modules writen in C.

### Debugging

* [esp32-backtrace ![GitHub Repo Stars](https://img.shields.io/github/stars/tve/esp32-backtrace) ![GitHub last commit](https://img.shields.io/github/last-commit/tve/esp32-backtrace)](https://github.com/tve/esp32-backtrace) - ESP32 Exception Stack Backtrace Analyzer.
* [micropython-aiosentry ![GitHub Repo Stars](https://img.shields.io/github/stars/devbis/micropython-aiosentry) ![GitHub last commit](https://img.shields.io/github/last-commit/devbis/micropython-aiosentry)](https://github.com/devbis/micropython-aiosentry) - Asynchronous Sentry.io micro client for MicroPython.
* [micropython-usyslog ![GitHub Repo Stars](https://img.shields.io/github/stars/kfricke/micropython-usyslog) ![GitHub last commit](https://img.shields.io/github/last-commit/kfricke/micropython-usyslog)](https://github.com/kfricke/micropython-usyslog) - Simple remote syslog client for MicroPython.
* [Asynchronous monitor ![GitHub Repo Stars](https://img.shields.io/github/stars/peterhinch/micropython-monitor) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-monitor)](https://github.com/peterhinch/micropython-monitor) - Use a Raspberry Pico and a logic analyser or scope to monitor asynchronous code.

### IDEs

* [BIPES](https://bipes.net.br/ide/) - Web-based IDE for MicroPython with file manager, editor, code generation from blocks, IoT dashboard and Serial/USB/Bluetooth/WebREPL console on the web browser. Source: [https://github.com/BIPES](https://github.com/BIPES).
* [ESP32-MPY-Jama ![GitHub Repo Stars](https://img.shields.io/github/stars/jczic/ESP32-MPY-Jama) ![GitHub last commit](https://img.shields.io/github/last-commit/jczic/ESP32-MPY-Jama)](https://github.com/jczic/ESP32-MPY-Jama) - Tool for managing Espressif ESP32 microcontrollers with MicroPython.
* [JetBrains IntelliJ/PyCharm MicroPython Plugin](https://plugins.jetbrains.com/plugin/9777-micropython) - Plugin for MicroPython devices in IntelliJ and PyCharm.
* [MicroPython IDE for VSCode](https://marketplace.visualstudio.com/items?itemName=dphans.micropython-ide-vscode) - MicroPython IDE for Visual Studio Code.
* [MicroPython-REPLink for VSCode](https://marketplace.visualstudio.com/items?itemName=SWC-Fablab.micropython-replink) - Handy shortcuts for interacting with a MicroPython REPL terminal.
* [MPRemote for VSCode](https://marketplace.visualstudio.com/items?itemName=DavesCodeMusings.mpremote) - An extension to provide easy access to some of mpremote's functionality from within Visual Studio Code.
* [Mu Editor](https://codewith.mu/) -  Code with Mu: a simple Python/MicroPython/CircuitPython editor for beginner programmers.
* [Thonny IDE](https://thonny.org/) - Thonny: Python IDE for beginners.
* [Pyboard File Manager ![GitHub Repo Stars](https://img.shields.io/github/stars/joewez/PyboardFileManager) ![GitHub last commit](https://img.shields.io/github/last-commit/joewez/PyboardFileManager)](https://github.com/joewez/PyboardFileManager) - Pyboard File Manager: Windows GUI for Pyboard.py compatible devices.
* [uPIDE ![GitHub Repo Stars](https://img.shields.io/github/stars/harbaum/upide) ![GitHub last commit](https://img.shields.io/github/last-commit/harbaum/upide)](https://github.com/harbaum/upide) - µPIDE is a simple IDE for MicroPython.

### Logging

* [micropython-ulogger ![GitHub Repo Stars](https://img.shields.io/github/stars/whales-chen/micropython-ulogger) ![GitHub last commit](https://img.shields.io/github/last-commit/whales-chen/micropython-ulogger)](https://github.com/whales-chen/micropython-ulogger) - Lightweight log module customized for MicroPython.
* [scd30logger ![GitHub Repo Stars](https://img.shields.io/github/stars/agners/scd30logger) ![GitHub last commit](https://img.shields.io/github/last-commit/agners/scd30logger)](https://github.com/agners/scd30logger) - Sensirion SCD30 based CO2, Humidity and Temperature Logger for MicroPython.
* [sht15logger ![GitHub Repo Stars](https://img.shields.io/github/stars/agners/sht15logger) ![GitHub last commit](https://img.shields.io/github/last-commit/agners/sht15logger)](https://github.com/agners/sht15logger) - MicroPython Temperature and Humidity Logger using Sensirion SHT15.

### Shells

#### Jupyter

* [micropython-magic ![GitHub Repo Stars](https://img.shields.io/github/stars/josverl/micropython-magic) ![GitHub last commit](https://img.shields.io/github/last-commit/josverl/micropython-magic)](https://github.com/josverl/micropython-magic) - MicroPython integrated into Jupyter notebooks.
* [jupyter_upydevice_kernel ![GitHub Repo Stars](https://img.shields.io/github/stars/Carglglz/jupyter_upydevice_kernel) ![GitHub last commit](https://img.shields.io/github/last-commit/Carglglz/jupyter_upydevice_kernel)](https://github.com/Carglglz/jupyter_upydevice_kernel) - Jupyter kernel to interact with a MicroPython board over its REPL interface.

#### On Device

* [upy-shell ![GitHub Repo Stars](https://img.shields.io/github/stars/dhylands/upy-shell) ![GitHub last commit](https://img.shields.io/github/last-commit/dhylands/upy-shell)](https://github.com/dhylands/upy-shell) - A simple command line-based shell for MicroPython.
* [Micropython-Editor ![GitHub Repo Stars](https://img.shields.io/github/stars/robert-hh/Micropython-Editor) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/Micropython-Editor)](https://github.com/robert-hh/Micropython-Editor) - Small on-board editor for Pyboard, WiPy, ESP8266, ESP32, PyCom and Adafruit devices written in Python.

#### On Host

* [rshell ![GitHub Repo Stars](https://img.shields.io/github/stars/dhylands/rshell) ![GitHub last commit](https://img.shields.io/github/last-commit/dhylands/rshell)](https://github.com/dhylands/rshell) - Copy or sync files to boards, enter REPL from your terminal.
* [ampy ![GitHub Repo Stars](https://img.shields.io/github/stars/scientifichackers/ampy) ![GitHub last commit](https://img.shields.io/github/last-commit/scientifichackers/ampy)](https://github.com/scientifichackers/ampy) - Utility to interact with a MicroPython board over a serial connection.
* [mpbridge ![GitHub Repo Stars](https://img.shields.io/github/stars/AmirHmZz/mpbridge) ![GitHub last commit](https://img.shields.io/github/last-commit/AmirHmZz/mpbridge)](https://github.com/AmirHmZz/mpbridge) - A file system bridge to synchronize and manage files on a device running MicroPython.
* [mpfshell ![GitHub Repo Stars](https://img.shields.io/github/stars/wendlers/mpfshell) ![GitHub last commit](https://img.shields.io/github/last-commit/wendlers/mpfshell)](https://github.com/wendlers/mpfshell) - A simple shell-based file explorer for ESP8266 and WiPy.
* [mpsync ![GitHub Repo Stars](https://img.shields.io/github/stars/thilomichael/mpsync) ![GitHub last commit](https://img.shields.io/github/last-commit/thilomichael/mpsync)](https://github.com/thilomichael/mpsync) - A tool that automatically synchronizes code to a MicroPython board.
* [mpremote ![GitHub Repo Stars](https://img.shields.io/github/stars/micropython/micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython/micropython)](https://github.com/micropython/micropython/blob/master/tools/mpremote/README.md) - Powerful official shell that supports mounting the host's current directory on the target. Run code without changing the target's filesystem.
* [MPRemoteEditor ![GitHub Repo Stars](https://img.shields.io/github/stars/joewez/MPRemoteEditor) ![GitHub last commit](https://img.shields.io/github/last-commit/joewez/MPRemoteEditor)](https://github.com/joewez/MPRemoteEditor) - A simple Windows IDE for developing with MicroPython MPRemote devices.
* [uPyExplorer ![GitHub Repo Stars](https://img.shields.io/github/stars/RetepRelleum/uPyExplorer) ![GitHub last commit](https://img.shields.io/github/last-commit/RetepRelleum/uPyExplorer)](https://github.com/RetepRelleum/uPyExplorer) - Explorer for MicroPython Device.
* [mpr ![GitHub Repo Stars](https://img.shields.io/github/stars/bulletmark/mpr) ![GitHub last commit](https://img.shields.io/github/last-commit/bulletmark/mpr)](https://github.com/bulletmark/mpr) - Wrapper for MicroPython mpremote tool.

## Miscellaneous

* [MicroPython Kickstarter](https://www.kickstarter.com/projects/214379695/micro-python-python-for-microcontrollers) - 1,931 backers pledged £97,803 to help bring this project to life.
* [MicroPython on the ESP8266 Kickstarter](https://www.kickstarter.com/projects/214379695/micropython-on-the-esp8266-beautifully-easy-iot) - 1,399 backers pledged £28,534 to help bring this project to life.

## Contributing

Contributions and suggestions are always welcome! Please take a look at the [contribution guidelines ![GitHub Repo Stars](https://img.shields.io/github/stars/mcauser/awesome-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/awesome-micropython)](https://github.com/mcauser/awesome-micropython/blob/master/contributing.md) first.

I will keep some pull requests open if I'm not sure whether those libraries are awesome, you could vote for them by adding 👍 to them.
