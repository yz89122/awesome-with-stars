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

[MicroPython](http://micropython.org/) is a lean and efficient implementation of the Python 3 programming language that includes a small subset of the Python standard library and is optimised to run on microcontrollers and in constrained environments.

## Contents

* [Libraries](#libraries)
  * [AI](#ai)
  * [Analytics](#analytics)
  * [Audio](#audio)
  * [Communications](#communications)
  * [Display](#display)
  * [IO](#io)
  * [Motion](#motion)
  * [Sensors](#sensors)
  * [Scheduling](#scheduling)
  * [Storage](#storage)
* [Community](#community)
* [Books](#books)
* [Frameworks](#frameworks)
* [Resources](#resources)
* [Development](#development)
  * [Code Generation](#code-generation)
  * [Debugging](#debugging)
  * [IDEs](#ides)
  * [Shells](#Shells)
* [Miscellaneous](#miscellaneous)

## Libraries

Other places you can look for MicroPython Libraries:

* [PyPi](https://pypi.org/search/?c=Programming+Language+%3A%3A+Python+%3A%3A+Implementation+%3A%3A+MicroPython) - This filter shows just the MicroPython libraries on PyPi. Note: You cannot pip install micropython libraries. See [MicroPython docs](https://docs.micropython.org/en/latest/reference/packages.html?highlight=upip) for more information on upip.
* [GitHub Search](https://github.com/search?q=micropython) - Search GitHub for repositories containing MicroPython.
* [GitHub Topic - MicroPython ![GitHub Repo stars](https://img.shields.io/github/stars/topics/micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/topics/micropython)](https://github.com/topics/micropython) - Browse GitHub Topics for projects tagged with MicroPython.
* [Libraries.io](https://libraries.io/search?q=micropython) - Libraries.io query for MicroPython.
* [GitLab Explore](https://gitlab.com/explore?sort=latest_activity_desc&utf8=%E2%9C%93&name=micropython&sort=latest_activity_desc) - Explore repositories on GitLab.

### AI

* [MicroMLP ![GitHub Repo stars](https://img.shields.io/github/stars/jczic/MicroMLP) ![GitHub last commit](https://img.shields.io/github/last-commit/jczic/MicroMLP)](https://github.com/jczic/MicroMLP) - A micro neural network multilayer perceptron for MicroPython (used on ESP32 and Pycom modules).

### Analytics

* [uMath ![GitHub Repo stars](https://img.shields.io/github/stars/AaronKel/uMath) ![GitHub last commit](https://img.shields.io/github/last-commit/AaronKel/uMath)](https://github.com/AaronKel/uMath) - Computer Algebra for microcontrollers.
* [micropython-ulab ![GitHub Repo stars](https://img.shields.io/github/stars/v923z/micropython-ulab) ![GitHub last commit](https://img.shields.io/github/last-commit/v923z/micropython-ulab)](https://github.com/v923z/micropython-ulab) - A numpy-like fast vector module for MicroPython.
* [micropython-fourier ![GitHub Repo stars](https://img.shields.io/github/stars/peterhinch/micropython-fourier) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-fourier)](https://github.com/peterhinch/micropython-fourier) - Fast Fourier transform in MicroPython's inline ARM assembler.
* [ulinalg ![GitHub Repo stars](https://img.shields.io/github/stars/jalawson/ulinalg) ![GitHub last commit](https://img.shields.io/github/last-commit/jalawson/ulinalg)](https://github.com/jalawson/ulinalg) - Small size matrix handling module with a few linear algebra operations specifically for MicroPython (Python3).
* [micropython-mtx](https://gitlab.com/nickoala/micropython-mtx) - Fast Matrix Multiplication and Linear Solver on MicroPython.
* [micropython-vec](https://gitlab.com/nickoala/micropython-vec) - Vector Operations on MicroPython.

### Audio

* [JQ6500 ![GitHub Repo stars](https://img.shields.io/github/stars/rdagger/micropython-jq6500) ![GitHub last commit](https://img.shields.io/github/last-commit/rdagger/micropython-jq6500)](https://github.com/rdagger/micropython-jq6500) - Driver for JQ6500 UART MP3 modules.
* [KT403A-MP3 ![GitHub Repo stars](https://img.shields.io/github/stars/jczic/KT403A-MP3) ![GitHub last commit](https://img.shields.io/github/last-commit/jczic/KT403A-MP3)](https://github.com/jczic/KT403A-MP3) - Driver for KT403A, used by DFPlayer Mini and Grove MP3 v2.0.
* [micropython-buzzer ![GitHub Repo stars](https://img.shields.io/github/stars/fruch/micropython-buzzer) ![GitHub last commit](https://img.shields.io/github/last-commit/fruch/micropython-buzzer)](https://github.com/fruch/micropython-buzzer) - Play nokia compose and mid files on buzzers.
* [micropython-dfplayer ![GitHub Repo stars](https://img.shields.io/github/stars/ShrimpingIt/micropython-dfplayer) ![GitHub last commit](https://img.shields.io/github/last-commit/ShrimpingIt/micropython-dfplayer)](https://github.com/ShrimpingIt/micropython-dfplayer) - Driver for DFPlayer Mini using UART.
* [micropython-longwave ![GitHub Repo stars](https://img.shields.io/github/stars/MattMatic/micropython-longwave) ![GitHub last commit](https://img.shields.io/github/last-commit/MattMatic/micropython-longwave)](https://github.com/MattMatic/micropython-longwave) - WAV player for MicroPython board.
* [micropython-vs1053 ![GitHub Repo stars](https://img.shields.io/github/stars/peterhinch/micropython-vs1053) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-vs1053)](https://github.com/peterhinch/micropython-vs1053) - Asynchronous driver for VS1053b MP3 player.
* [micropython-midi ![GitHub Repo stars](https://img.shields.io/github/stars/cjbarnes18/micropython-midi) ![GitHub last commit](https://img.shields.io/github/last-commit/cjbarnes18/micropython-midi)](https://github.com/cjbarnes18/micropython-midi) - A midi implementation example for MicroPython.
* [upy-rtttl ![GitHub Repo stars](https://img.shields.io/github/stars/dhylands/upy-rtttl) ![GitHub last commit](https://img.shields.io/github/last-commit/dhylands/upy-rtttl)](https://github.com/dhylands/upy-rtttl) - Python Parser for Ring Tone Text Transfer Language (RTTTL).

### Communications

#### Bluetooth

* [PyBoard-HC05-Android ![GitHub Repo stars](https://img.shields.io/github/stars/KipCrossing/PyBoard-HC05-Android) ![GitHub last commit](https://img.shields.io/github/last-commit/KipCrossing/PyBoard-HC05-Android)](https://github.com/KipCrossing/PyBoard-HC05-Android) - Pyboard HC05 Bluetooth adaptor example application.

#### CAN

* [micropython-spacecan](https://gitlab.com/alphaaomega/micropython-spacecan) - Spacecan is a MicroPython implementation of the SpaceCAN protocol for embedded systems.

#### Cryptography

* [mpyaes ![GitHub Repo stars](https://img.shields.io/github/stars/iyassou/mpyaes) ![GitHub last commit](https://img.shields.io/github/last-commit/iyassou/mpyaes)](https://github.com/iyassou/mpyaes) - MicroPython module for AES encryption.
* [micropython-aes ![GitHub Repo stars](https://img.shields.io/github/stars/piaca/micropython-aes) ![GitHub last commit](https://img.shields.io/github/last-commit/piaca/micropython-aes)](https://github.com/piaca/micropython-aes) - AES algorithm with pure python implementation.

#### DNS

* [ICantBelieveItsNotDNS ![GitHub Repo stars](https://img.shields.io/github/stars/yschaeff/ICantBelieveItsNotDNS) ![GitHub last commit](https://img.shields.io/github/last-commit/yschaeff/ICantBelieveItsNotDNS)](https://github.com/yschaeff/ICantBelieveItsNotDNS) - "I Can't Believe It's Not DNS!" (ICBIND) is an authoritative DNS server for the ESP8266 written in MicroPython.
* [MicroDNSSrv ![GitHub Repo stars](https://img.shields.io/github/stars/jczic/MicroDNSSrv) ![GitHub last commit](https://img.shields.io/github/last-commit/jczic/MicroDNSSrv)](https://github.com/jczic/MicroDNSSrv) - A micro DNS server for MicroPython to simply respond to A queries on multi-domains with or without wildcards (used on Pycom modules & ESP32).

#### Ethernet

* [Official wiznet5k ![GitHub Repo stars](https://img.shields.io/github/stars/micropython/micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython/micropython)](https://github.com/micropython/micropython/tree/master/drivers/wiznet5k) - Official driver for the WIZnet5x00 series of Ethernet controllers.

#### FTP

* [micropython-ftplib ![GitHub Repo stars](https://img.shields.io/github/stars/SpotlightKid/micropython-ftplib) ![GitHub last commit](https://img.shields.io/github/last-commit/SpotlightKid/micropython-ftplib)](https://github.com/SpotlightKid/micropython-ftplib) - An FTP client library for MicroPython.
* [FTP-Server-for-ESP8266-ESP32-and-PYBD ![GitHub Repo stars](https://img.shields.io/github/stars/robert-hh/FTP-Server-for-ESP8266-ESP32-and-PYBD) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/FTP-Server-for-ESP8266-ESP32-and-PYBD)](https://github.com/robert-hh/FTP-Server-for-ESP8266-ESP32-and-PYBD) - Small FTP server for ESP8266/ESP32/PYBD on the MicroPython platform.
* [MicroFTPServer ![GitHub Repo stars](https://img.shields.io/github/stars/cpopp/MicroFTPServer) ![GitHub last commit](https://img.shields.io/github/last-commit/cpopp/MicroFTPServer)](https://github.com/cpopp/MicroFTPServer) - Minimal FTP Server that can run on an ESP8266 with MicroPython.

#### GPS

* [micropyGPS ![GitHub Repo stars](https://img.shields.io/github/stars/inmcm/micropyGPS) ![GitHub last commit](https://img.shields.io/github/last-commit/inmcm/micropyGPS)](https://github.com/inmcm/micropyGPS) - Full featured GPS NMEA sentence parser.
* [micropython-gnssl76l ![GitHub Repo stars](https://img.shields.io/github/stars/tuupola/micropython-gnssl76l) ![GitHub last commit](https://img.shields.io/github/last-commit/tuupola/micropython-gnssl76l)](https://github.com/tuupola/micropython-gnssl76l) - MicroPython I2C driver for Quectel GNSS L76-L (GPS).
* [mpy-agps ![GitHub Repo stars](https://img.shields.io/github/stars/pulkin/mpy-agps) ![GitHub last commit](https://img.shields.io/github/last-commit/pulkin/mpy-agps)](https://github.com/pulkin/mpy-agps) - MicroPython implementation of assisted location services (AGPS).

#### GSM

* [micropython-upyphone ![GitHub Repo stars](https://img.shields.io/github/stars/jeffmer/micropython-upyphone) ![GitHub last commit](https://img.shields.io/github/last-commit/jeffmer/micropython-upyphone)](https://github.com/jeffmer/micropython-upyphone) - A gsm phone using pyboard and sim800l.

#### IoT

* [microhomie ![GitHub Repo stars](https://img.shields.io/github/stars/microhomie/microhomie) ![GitHub last commit](https://img.shields.io/github/last-commit/microhomie/microhomie)](https://github.com/microhomie/microhomie) - MicroPython implementation of the Homie MQTT convention for IoT.
* [uPyEcho ![GitHub Repo stars](https://img.shields.io/github/stars/lemariva/uPyEcho) ![GitHub last commit](https://img.shields.io/github/last-commit/lemariva/uPyEcho)](https://github.com/lemariva/uPyEcho) - Emulated Belkin WeMo device that works with Amazon Echo (Alexa) using MicroPython on an ESP32.
* [SonosRemote ![GitHub Repo stars](https://img.shields.io/github/stars/foosel/SonosRemote) ![GitHub last commit](https://img.shields.io/github/last-commit/foosel/SonosRemote)](https://github.com/foosel/SonosRemote) - A remote for Sonos installations running on an ESP8266 and using Sonos HTTP API.
* [micropython-home-assistant](https://gitlab.com/aapjeisbaas/micropython-home-assistant) - MicroPython based scripts to extend you home assistant driven home automation projects.

#### IR

* [micropython-necir ![GitHub Repo stars](https://img.shields.io/github/stars/MattMatic/micropython-necir) ![GitHub last commit](https://img.shields.io/github/last-commit/MattMatic/micropython-necir)](https://github.com/MattMatic/micropython-necir) - NEC infrared capture for TL1838 IR receiver LEDs.
* [Micropython-IR ![GitHub Repo stars](https://img.shields.io/github/stars/designerPing/Micropython-IR) ![GitHub last commit](https://img.shields.io/github/last-commit/designerPing/Micropython-IR)](https://github.com/designerPing/Micropython-IR) - Pyboard infrared remote sniff and replay.
* [micropython_ir ![GitHub Repo stars](https://img.shields.io/github/stars/peterhinch/micropython_ir) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython_ir)](https://github.com/peterhinch/micropython_ir) - Nonblocking device drivers to receive from IR remotes and for IR "blaster" apps.
* [micropython-amg88xx ![GitHub Repo stars](https://img.shields.io/github/stars/peterhinch/micropython-amg88xx) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-amg88xx)](https://github.com/peterhinch/micropython-amg88xx) - Driver for Grid-EYE thermal infra red array sensor (Adafruit 3538).
* [micropython-ys-irtm ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-ys-irtm) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-ys-irtm)](https://github.com/mcauser/micropython-ys-irtm) - MicroPython examples for YS-IRTM 5V NEC Infrared UART transceivers.
* [esp8266_ir ![GitHub Repo stars](https://img.shields.io/github/stars/ruoyu0088/esp8266_ir) ![GitHub last commit](https://img.shields.io/github/last-commit/ruoyu0088/esp8266_ir)](https://github.com/ruoyu0088/esp8266_ir) - Control IR signal by websocket.

#### LoRaWAN

* [uPyLoRaWAN ![GitHub Repo stars](https://img.shields.io/github/stars/lemariva/uPyLoRaWAN) ![GitHub last commit](https://img.shields.io/github/last-commit/lemariva/uPyLoRaWAN)](https://github.com/lemariva/uPyLoRaWAN) - ESP32 using MicroPython meets LoRa and LoRaWAN.
* [DeLoReAN ![GitHub Repo stars](https://img.shields.io/github/stars/buehl/DeLoReAN) ![GitHub last commit](https://img.shields.io/github/last-commit/buehl/DeLoReAN)](https://github.com/buehl/DeLoReAN) - DeLoReAN is a (De)dicated (Lo)RaWAN node (Re)cording (A)ny (N)FC tags.

#### MDNS

* [micropython-mdns ![GitHub Repo stars](https://img.shields.io/github/stars/cbrand/micropython-mdns) ![GitHub last commit](https://img.shields.io/github/last-commit/cbrand/micropython-mdns)](https://github.com/cbrand/micropython-mdns) - A pure python implementation of MDNS with support for Service Discovery.

#### MQTT

* [micropython-mqtt ![GitHub Repo stars](https://img.shields.io/github/stars/peterhinch/micropython-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-mqtt)](https://github.com/peterhinch/micropython-mqtt) - A 'resilient' asynchronous MQTT driver. Plus a means of using an ESP8266 to bring MQTT to non-networked targets.
* [MQBoard ![GitHub Repo stars](https://img.shields.io/github/stars/tve/mqboard) ![GitHub last commit](https://img.shields.io/github/last-commit/tve/mqboard)](https://github.com/tve/mqboard) - A micro-framework for using MQTT with asyncio on MicroPython boards, primarily on the ESP32.
* [pysmartnode ![GitHub Repo stars](https://img.shields.io/github/stars/kevinkk525/pysmartnode) ![GitHub last commit](https://img.shields.io/github/last-commit/kevinkk525/pysmartnode)](https://github.com/kevinkk525/pysmartnode) -  MicroPython Smarthome framework.
* [umqtt_aws_iot ![GitHub Repo stars](https://img.shields.io/github/stars/juwul/umqtt_aws_iot) ![GitHub last commit](https://img.shields.io/github/last-commit/juwul/umqtt_aws_iot)](https://github.com/juwul/umqtt_aws_iot) - Publish UMQTT messages with MicroPython to AWS IoT.
* [sonoff-mqtt by davea ![GitHub Repo stars](https://img.shields.io/github/stars/davea/sonoff-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/davea/sonoff-mqtt)](https://github.com/davea/sonoff-mqtt) - MicroPython scripts to control Sonoff/ESP8266 using MQTT.
* [micropython-sonoff-switch ![GitHub Repo stars](https://img.shields.io/github/stars/kfricke/micropython-sonoff-switch) ![GitHub last commit](https://img.shields.io/github/last-commit/kfricke/micropython-sonoff-switch)](https://github.com/kfricke/micropython-sonoff-switch) - Implements a MQTT controllable switch for the iTead Sonoff Switch using MicroPython.
* [micropython-thingspeak-mqtt-esp8266 ![GitHub Repo stars](https://img.shields.io/github/stars/miketeachman/micropython-thingspeak-mqtt-esp8266) ![GitHub last commit](https://img.shields.io/github/last-commit/miketeachman/micropython-thingspeak-mqtt-esp8266)](https://github.com/miketeachman/micropython-thingspeak-mqtt-esp8266) - Publish and Subscribe to Thingspeak using MQTT with MicroPython running on ESP8266/ESP32 platforms.
* [uMQTT ![GitHub Repo stars](https://img.shields.io/github/stars/andrewmk/uMQTT) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewmk/uMQTT)](https://github.com/andrewmk/uMQTT) - MQTT publish for MicroPython on the WiPy board.

#### NTP

* [esp8266_ntp_webserver ![GitHub Repo stars](https://img.shields.io/github/stars/Roterfux/esp8266_ntp_webserver) ![GitHub last commit](https://img.shields.io/github/last-commit/Roterfux/esp8266_ntp_webserver)](https://github.com/Roterfux/esp8266_ntp_webserver) - MicroPython + esp8266 + ntp + webserver.
* [micropython-ntpd ![GitHub Repo stars](https://img.shields.io/github/stars/dave2/micropython-ntpd) ![GitHub last commit](https://img.shields.io/github/last-commit/dave2/micropython-ntpd)](https://github.com/dave2/micropython-ntpd) - An implementation of an ntpd in MicroPython.
* [micropython_ntpserver ![GitHub Repo stars](https://img.shields.io/github/stars/GrantGMiller/micropython_ntpserver) ![GitHub last commit](https://img.shields.io/github/last-commit/GrantGMiller/micropython_ntpserver)](https://github.com/GrantGMiller/micropython_ntpserver) - An NTP server written for MicroPython.
* [micropython-ntpclient ![GitHub Repo stars](https://img.shields.io/github/stars/wieck/micropython-ntpclient) ![GitHub last commit](https://img.shields.io/github/last-commit/wieck/micropython-ntpclient)](https://github.com/wieck/micropython-ntpclient) - NTP client for MicroPython using uasyncio.

#### OneWire

* [Official OneWire ![GitHub Repo stars](https://img.shields.io/github/stars/micropython/micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython/micropython)](https://github.com/micropython/micropython/tree/master/drivers/onewire) - For devices using the OneWire bus, eg Dallas ds18x20.

#### Onkyo EISCP

* [eiscp-micropython ![GitHub Repo stars](https://img.shields.io/github/stars/cbrand/eiscp-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/cbrand/eiscp-micropython)](https://github.com/cbrand/eiscp-micropython) - Micropython port for the Onkyo-EISCP protocol used, among others, by Pioneer.

#### Radio

* [micropython-radio ![GitHub Repo stars](https://img.shields.io/github/stars/peterhinch/micropython-radio) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-radio)](https://github.com/peterhinch/micropython-radio) - Protocols for nRF24L01 2.4Ghz radio modules.
* [micropython-rfsocket ![GitHub Repo stars](https://img.shields.io/github/stars/wuub/micropython-rfsocket) ![GitHub last commit](https://img.shields.io/github/last-commit/wuub/micropython-rfsocket)](https://github.com/wuub/micropython-rfsocket) - MicroPython implementation of popular 433MHzn based RFSockets.
* [Official nRF24L01 ![GitHub Repo stars](https://img.shields.io/github/stars/micropython/micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython/micropython)](https://github.com/micropython/micropython/tree/master/drivers/nrf24l01) - Official driver for nRF24L01 2.4Ghz radio modules.
* [micropython_remote ![GitHub Repo stars](https://img.shields.io/github/stars/peterhinch/micropython_remote) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython_remote)](https://github.com/peterhinch/micropython_remote) - Capture and replay 433MHz remote control codes. Control remote switched power adaptors.
* [micropython-ys-rf34t ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-ys-rf34t) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-ys-rf34t)](https://github.com/mcauser/micropython-ys-rf34t) - MicroPython examples using YS-RF34T 433MHz ASK/OOK UART transceivers.

#### REPL

* [webrepl](https://micropython.org/webrepl) - MicroPython WebREPL.
* [zepl](https://gitlab.com/zepl1/zepl) - MicroPython WebREPL Console Application using ZeroMQ.
* [jupyter_micropython_remote](https://gitlab.com/alelec/jupyter_micropython_remote) - Jupyter kernel to directly execute code on a MicroPython board over the serial/web REPL.

#### RFID

* [micropython-mfrc522 ![GitHub Repo stars](https://img.shields.io/github/stars/wendlers/micropython-mfrc522) ![GitHub last commit](https://img.shields.io/github/last-commit/wendlers/micropython-mfrc522)](https://github.com/wendlers/micropython-mfrc522) - Driver for NXP MFRC522 RFID reader/writer.
* [micropython-wiegand ![GitHub Repo stars](https://img.shields.io/github/stars/pjz/micropython-wiegand) ![GitHub last commit](https://img.shields.io/github/last-commit/pjz/micropython-wiegand)](https://github.com/pjz/micropython-wiegand) - Wiegand protocol reader.

#### RTC

* [micropython-tinyrtc-i2c ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-tinyrtc-i2c) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-tinyrtc-i2c)](https://github.com/mcauser/micropython-tinyrtc-i2c) - Driver for DS1307 RTC and AT24C32N EEPROM.
* [Micropython_TinyRTC ![GitHub Repo stars](https://img.shields.io/github/stars/AnthonyKNorman/Micropython_TinyRTC) ![GitHub last commit](https://img.shields.io/github/last-commit/AnthonyKNorman/Micropython_TinyRTC)](https://github.com/AnthonyKNorman/Micropython_TinyRTC) - Driver for DS1307 RTC.
* [micropython-mcp7940 ![GitHub Repo stars](https://img.shields.io/github/stars/mattytrentini/micropython-mcp7940) ![GitHub last commit](https://img.shields.io/github/last-commit/mattytrentini/micropython-mcp7940)](https://github.com/mattytrentini/micropython-mcp7940) - Driver for the Microchip MCP7940 RTC.

#### Serial

* [mpy-miniterm ![GitHub Repo stars](https://img.shields.io/github/stars/jeffmakes/mpy-miniterm) ![GitHub last commit](https://img.shields.io/github/last-commit/jeffmakes/mpy-miniterm)](https://github.com/jeffmakes/mpy-miniterm) - Tool for seamless serial debug and file synchronisation with MicroPython devices via the serial REPL.
* [micropython-modbus](https://gitlab.com/extel-open-source/micropython-modbus) - MicroPython port of modbus-tk.

#### SMTP

* [uMail ![GitHub Repo stars](https://img.shields.io/github/stars/shawwwn/uMail) ![GitHub last commit](https://img.shields.io/github/last-commit/shawwwn/uMail)](https://github.com/shawwwn/uMail) - A lightweight, scalable SMTP client for sending email in MicroPython.

#### Telnet

* [MicroTelnetServer ![GitHub Repo stars](https://img.shields.io/github/stars/cpopp/MicroTelnetServer) ![GitHub last commit](https://img.shields.io/github/last-commit/cpopp/MicroTelnetServer)](https://github.com/cpopp/MicroTelnetServer) - Simple telnet server for MicroPython and the ESP8266 allowing telnet clients access to the REPL.

#### WiFi

* [HueBridge ![GitHub Repo stars](https://img.shields.io/github/stars/FRC4564/HueBridge) ![GitHub last commit](https://img.shields.io/github/last-commit/FRC4564/HueBridge)](https://github.com/FRC4564/HueBridge) - Philips Hue Bridge.
* [micropython-wifimanager ![GitHub Repo stars](https://img.shields.io/github/stars/mitchins/micropython-wifimanager) ![GitHub last commit](https://img.shields.io/github/last-commit/mitchins/micropython-wifimanager)](https://github.com/mitchins/micropython-wifimanager) - A simple network configuration utility for MicroPython on the ESP8266 board.

#### Web

* [MicroWebSrv ![GitHub Repo stars](https://img.shields.io/github/stars/jczic/MicroWebSrv) ![GitHub last commit](https://img.shields.io/github/last-commit/jczic/MicroWebSrv)](https://github.com/jczic/MicroWebSrv) - A micro HTTP Web server that supports WebSockets, html/python language templating and routing handlers, for MicroPython (used on Pycom modules & ESP32).
* [MicroWebSrv2 ![GitHub Repo stars](https://img.shields.io/github/stars/jczic/MicroWebSrv2) ![GitHub last commit](https://img.shields.io/github/last-commit/jczic/MicroWebSrv2)](https://github.com/jczic/MicroWebSrv2) - The last Micro Web Server for IoTs (MicroPython) or large servers (CPython), that supports WebSockets, routes, template engine and with really optimized architecture (mem allocations, async I/Os).
* [tinyweb ![GitHub Repo stars](https://img.shields.io/github/stars/belyalov/tinyweb) ![GitHub last commit](https://img.shields.io/github/last-commit/belyalov/tinyweb)](https://github.com/belyalov/tinyweb) - Simple and lightweight HTTP async server for MicroPython.
* [upy-websocket-server ![GitHub Repo stars](https://img.shields.io/github/stars/BetaRavener/upy-websocket-server) ![GitHub last commit](https://img.shields.io/github/last-commit/BetaRavener/upy-websocket-server)](https://github.com/BetaRavener/upy-websocket-server) - MicroPython (ESP8266) websocket server implementation.
* [micropython-captive-portal ![GitHub Repo stars](https://img.shields.io/github/stars/amora-labs/micropython-captive-portal) ![GitHub last commit](https://img.shields.io/github/last-commit/amora-labs/micropython-captive-portal)](https://github.com/amora-labs/micropython-captive-portal) - A captive portal demo for MicroPython.
* [uPyPortal ![GitHub Repo stars](https://img.shields.io/github/stars/lemariva/uPyPortal) ![GitHub last commit](https://img.shields.io/github/last-commit/lemariva/uPyPortal)](https://github.com/lemariva/uPyPortal) - A captive portal for MicroPython using ESP32 (WeMos).
* [ESP8266WebServer ![GitHub Repo stars](https://img.shields.io/github/stars/codemee/ESP8266WebServer) ![GitHub last commit](https://img.shields.io/github/last-commit/codemee/ESP8266WebServer)](https://github.com/codemee/ESP8266WebServer) - ESP8266 web server for MicroPython.
* [microCoAPy ![GitHub Repo stars](https://img.shields.io/github/stars/insighio/microCoAPy) ![GitHub last commit](https://img.shields.io/github/last-commit/insighio/microCoAPy)](https://github.com/insighio/microCoAPy) - A mini client/server implementation of CoAP (Constrained Application Protocol) into MicroPython.
* [micropyserver ![GitHub Repo stars](https://img.shields.io/github/stars/troublegum/micropyserver) ![GitHub last commit](https://img.shields.io/github/last-commit/troublegum/micropyserver)](https://github.com/troublegum/micropyserver) - MicroPyServer is a simple HTTP server for MicroPython projects.
* [MicroRESTCli ![GitHub Repo stars](https://img.shields.io/github/stars/jczic/MicroRESTCli) ![GitHub last commit](https://img.shields.io/github/last-commit/jczic/MicroRESTCli)](https://github.com/jczic/MicroRESTCli) - A micro JSON REST Web client based on MicroWebCli for MicroPython (used on Pycom modules & ESP32).
* [micropython-noggin ![GitHub Repo stars](https://img.shields.io/github/stars/larsks/micropython-noggin) ![GitHub last commit](https://img.shields.io/github/last-commit/larsks/micropython-noggin)](https://github.com/larsks/micropython-noggin) - A very simple web server for MicroPython.
* [uwebsockets ![GitHub Repo stars](https://img.shields.io/github/stars/danni/uwebsockets) ![GitHub last commit](https://img.shields.io/github/last-commit/danni/uwebsockets)](https://github.com/danni/uwebsockets) - MicroPython websockets implementation for ESP8266.
* [microdot ![GitHub Repo stars](https://img.shields.io/github/stars/miguelgrinberg/microdot) ![GitHub last commit](https://img.shields.io/github/last-commit/miguelgrinberg/microdot)](https://github.com/miguelgrinberg/microdot) - The impossibly small web framework for MicroPython.
* [micropython-utelegram ![GitHub Repo stars](https://img.shields.io/github/stars/jordiprats/micropython-utelegram) ![GitHub last commit](https://img.shields.io/github/last-commit/jordiprats/micropython-utelegram)](https://github.com/jordiprats/micropython-utelegram) - Telegram API wrapper for MicroPython.

#### Zigbee

* [ZbPy ![GitHub Repo stars](https://img.shields.io/github/stars/osresearch/ZbPy) ![GitHub last commit](https://img.shields.io/github/last-commit/osresearch/ZbPy)](https://github.com/osresearch/ZbPy) - MicroPython IEEE802.15.4 / Zigbee parser.

### Display

#### E-Paper

* [micropython-epaper ![GitHub Repo stars](https://img.shields.io/github/stars/peterhinch/micropython-epaper) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-epaper)](https://github.com/peterhinch/micropython-epaper) - Pyboard driver for Embedded Artists 2.7 inch e-paper display.
* [micropython-ili9341 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-ili9341) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-ili9341)](https://github.com/mcauser/deshipu-micropython-ili9341) - SSD1606 active matrix epaper display 128x180.
* [micropython-waveshare-epaper ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-waveshare-epaper) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-waveshare-epaper)](https://github.com/mcauser/micropython-waveshare-epaper) - Drivers for various Waveshare e-paper modules.
* [micropython-waveshare-epd ![GitHub Repo stars](https://img.shields.io/github/stars/ayoy/micropython-waveshare-epd) ![GitHub last commit](https://img.shields.io/github/last-commit/ayoy/micropython-waveshare-epd)](https://github.com/ayoy/micropython-waveshare-epd) - Waveshare E-Paper Display driver for devices running Pycom-flavored MicroPython.
* [ssd1675a ![GitHub Repo stars](https://img.shields.io/github/stars/mattytrentini/ssd1675a) ![GitHub last commit](https://img.shields.io/github/last-commit/mattytrentini/ssd1675a)](https://github.com/mattytrentini/ssd1675a) - Driver for SSD1675 based E-Paper displays.

#### GUI

* [lvgl ![GitHub Repo stars](https://img.shields.io/github/stars/lvgl/lv_binding_micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/lvgl/lv_binding_micropython)](https://github.com/lvgl/lv_binding_micropython) - An object oriented component based high-level GUI library with MicroPython binding.
* [micropython-lcd160cr-gui ![GitHub Repo stars](https://img.shields.io/github/stars/peterhinch/micropython-lcd160cr-gui) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-lcd160cr-gui)](https://github.com/peterhinch/micropython-lcd160cr-gui) - Simple touch driven event based GUI for the Pyboard and LCD160CR colour display.
* [micropython_ra8875 ![GitHub Repo stars](https://img.shields.io/github/stars/peterhinch/micropython_ra8875) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython_ra8875)](https://github.com/peterhinch/micropython_ra8875) - MicroPython device driver and nano-GUI for RA8875 based displays.
* [micropython-nano-gui ![GitHub Repo stars](https://img.shields.io/github/stars/peterhinch/micropython-nano-gui) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython-nano-gui)](https://github.com/peterhinch/micropython-nano-gui) - Nano-Gui provides a limited set of GUI objects (widgets) for displays whose display driver is subclassed from the framebuf class. Which includes LCD and OLED displays.

#### LCD Character

* [Grove_RGB_LCD ![GitHub Repo stars](https://img.shields.io/github/stars/dda/MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/dda/MicroPython)](https://github.com/dda/MicroPython/blob/master/Grove_RGB_LCD.py) - Driver for SeeedStudio's Grove RGB LCD.
* [lcdi2c ![GitHub Repo stars](https://img.shields.io/github/stars/slothyrulez/lcdi2c) ![GitHub last commit](https://img.shields.io/github/last-commit/slothyrulez/lcdi2c)](https://github.com/slothyrulez/lcdi2c) - Driver for HD44780 compatible dot matrix LCDs.
* [micropython-charlcd ![GitHub Repo stars](https://img.shields.io/github/stars/rdagger/micropython-charlcd) ![GitHub last commit](https://img.shields.io/github/last-commit/rdagger/micropython-charlcd)](https://github.com/rdagger/micropython-charlcd) - Driver for HD44780 compatible LCDs.
* [micropython-i2c-lcd ![GitHub Repo stars](https://img.shields.io/github/stars/Bucknalla/micropython-i2c-lcd) ![GitHub last commit](https://img.shields.io/github/last-commit/Bucknalla/micropython-i2c-lcd)](https://github.com/Bucknalla/micropython-i2c-lcd) - Driver for I2C 2x16 LCD Screens.
* [pyboard-LCD-character-display ![GitHub Repo stars](https://img.shields.io/github/stars/scitoast/pyboard-LCD-character-display) ![GitHub last commit](https://img.shields.io/github/last-commit/scitoast/pyboard-LCD-character-display)](https://github.com/scitoast/pyboard-LCD-character-display) - PyBoard driver for HDD44780 compatible 1602 LCDs.
* [python_lcd ![GitHub Repo stars](https://img.shields.io/github/stars/dhylands/python_lcd) ![GitHub last commit](https://img.shields.io/github/last-commit/dhylands/python_lcd)](https://github.com/dhylands/python_lcd) - Driver for HD44780 compatible dot matrix LCDs.
* [micropython-lcd ![GitHub Repo stars](https://img.shields.io/github/stars/wjdp/micropython-lcd) ![GitHub last commit](https://img.shields.io/github/last-commit/wjdp/micropython-lcd)](https://github.com/wjdp/micropython-lcd) - Class for controlling the HD44780 from a MicroPython pyboard.

#### LCD Graphic

* [micropython-lcd-AQM1248A ![GitHub Repo stars](https://img.shields.io/github/stars/forester3/micropython-lcd-AQM1248A) ![GitHub last commit](https://img.shields.io/github/last-commit/forester3/micropython-lcd-AQM1248A)](https://github.com/forester3/micropython-lcd-AQM1248A) - ESP8266 driver for AQM1248A graphic LCD.
* [micropython-pcd8544 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-pcd8544) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-pcd8544)](https://github.com/mcauser/micropython-pcd8544) - Driver for Nokia 5110 PCD8544 84x48 LCD modules.
* [micropython-st7565 ![GitHub Repo stars](https://img.shields.io/github/stars/nquest/micropython-st7565) ![GitHub last commit](https://img.shields.io/github/last-commit/nquest/micropython-st7565)](https://github.com/nquest/micropython-st7565) - Driver for ST7565 128x64 LCDs.
* [micropython-st7920 ![GitHub Repo stars](https://img.shields.io/github/stars/ShrimpingIt/micropython-st7920) ![GitHub last commit](https://img.shields.io/github/last-commit/ShrimpingIt/micropython-st7920)](https://github.com/ShrimpingIt/micropython-st7920) - Library for simple graphic primitives on ST7920 128x64 monochrome LCD panel using ESP8266 and SPI.
* [MicroPython_PCD8544 ![GitHub Repo stars](https://img.shields.io/github/stars/AnthonyKNorman/MicroPython_PCD8544) ![GitHub last commit](https://img.shields.io/github/last-commit/AnthonyKNorman/MicroPython_PCD8544)](https://github.com/AnthonyKNorman/MicroPython_PCD8544) - ESP8266 driver for Nokia 5110 PCD8544.
* [Official LCD160CR ![GitHub Repo stars](https://img.shields.io/github/stars/micropython/micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython/micropython)](https://github.com/micropython/micropython/tree/master/drivers/display) - Driver for official MicroPython LCD160CR display with resistive touch sensor.
* [micropython-hx1230 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-hx1230) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-hx1230)](https://github.com/mcauser/micropython-hx1230) - MicroPython library for HX1230 96x68 LCD modules.

#### LCD TFT

* [micropython-ili9341 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-ili9341) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-ili9341)](https://github.com/mcauser/deshipu-micropython-ili9341) - Collection of drivers for TFT displays, ILI9341, SH1106, SSD1606, ST7735.
* [micropython-ili934x ![GitHub Repo stars](https://img.shields.io/github/stars/tuupola/micropython-ili934x) ![GitHub last commit](https://img.shields.io/github/last-commit/tuupola/micropython-ili934x)](https://github.com/tuupola/micropython-ili934x) - SPI driver for ILI934X series based TFT / LCD displays.
* [MicroPython-ST7735 ![GitHub Repo stars](https://img.shields.io/github/stars/boochow/MicroPython-ST7735) ![GitHub last commit](https://img.shields.io/github/last-commit/boochow/MicroPython-ST7735)](https://github.com/boochow/MicroPython-ST7735) - ESP32 version of GuyCarvers's ST7735 TFT LCD driver.
* [micropython-st7735 ![GitHub Repo stars](https://img.shields.io/github/stars/hosaka/micropython-st7735) ![GitHub last commit](https://img.shields.io/github/last-commit/hosaka/micropython-st7735)](https://github.com/hosaka/micropython-st7735) - Driver for ST7735 TFT LCDs.
* [MicroPython_ST7735 ![GitHub Repo stars](https://img.shields.io/github/stars/AnthonyKNorman/MicroPython_ST7735) ![GitHub last commit](https://img.shields.io/github/last-commit/AnthonyKNorman/MicroPython_ST7735)](https://github.com/AnthonyKNorman/MicroPython_ST7735) - Driver for ST7735 128x128 TFT.
* [SSD1963-TFT-Library-for-PyBoard-and-RP2040 ![GitHub Repo stars](https://img.shields.io/github/stars/robert-hh/SSD1963-TFT-Library-for-PyBoard-and-RP2040) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/SSD1963-TFT-Library-for-PyBoard-and-RP2040)](https://github.com/robert-hh/SSD1963-TFT-Library-for-PyBoard-and-RP2040) - SSD1963 TFT Library for PyBoard and Raspberry Pi PICO.
* [ST7735 ![GitHub Repo stars](https://img.shields.io/github/stars/GuyCarver/MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/GuyCarver/MicroPython)](https://github.com/GuyCarver/MicroPython/blob/master/lib/ST7735.py) - Driver for ST7735 TFT LCDs.
* [micropython-ili9341 ![GitHub Repo stars](https://img.shields.io/github/stars/rdagger/micropython-ili9341) ![GitHub last commit](https://img.shields.io/github/last-commit/rdagger/micropython-ili9341)](https://github.com/rdagger/micropython-ili9341) - MicroPython ILI9341 display & XPT2046 touch screen driver.
* [st7789_mpy ![GitHub Repo stars](https://img.shields.io/github/stars/devbis/st7789_mpy) ![GitHub last commit](https://img.shields.io/github/last-commit/devbis/st7789_mpy)](https://github.com/devbis/st7789_mpy) - Fast pure-C driver for MicroPython that can handle display modules on ST7789 chip.
* [st7789py_mpy ![GitHub Repo stars](https://img.shields.io/github/stars/devbis/st7789py_mpy) ![GitHub last commit](https://img.shields.io/github/last-commit/devbis/st7789py_mpy)](https://github.com/devbis/st7789py_mpy) - Slow MicroPython driver for 240x240 ST7789 display without CS pin from Ali Express, written in MicroPython.
* [micropython-ili9341 ![GitHub Repo stars](https://img.shields.io/github/stars/jeffmer/micropython-ili9341) ![GitHub last commit](https://img.shields.io/github/last-commit/jeffmer/micropython-ili9341)](https://github.com/jeffmer/micropython-ili9341) - MicroPython Driver for ILI9341 display.
* [micropython-ili9341 ![GitHub Repo stars](https://img.shields.io/github/stars/tkurbad/micropython-ili9341) ![GitHub last commit](https://img.shields.io/github/last-commit/tkurbad/micropython-ili9341)](https://github.com/tkurbad/micropython-ili9341) - ILI9341 TFT driver for MicroPython on ESP32.

#### LED Matrix

* [micropython-ht1632c ![GitHub Repo stars](https://img.shields.io/github/stars/vrialland/micropython-ht1632c) ![GitHub last commit](https://img.shields.io/github/last-commit/vrialland/micropython-ht1632c)](https://github.com/vrialland/micropython-ht1632c) - Driver for HT1632C 32x16 bicolor led matrix.
* [micropython-matrix8x8 ![GitHub Repo stars](https://img.shields.io/github/stars/JanBednarik/micropython-matrix8x8) ![GitHub last commit](https://img.shields.io/github/last-commit/JanBednarik/micropython-matrix8x8)](https://github.com/JanBednarik/micropython-matrix8x8) - Driver for AdaFruit 8x8 LED Matrix display with HT16K33 backpack.
* [micropython-max7219 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-max7219) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-max7219)](https://github.com/mcauser/micropython-max7219) - Driver for MAX7219 8x8 LED matrix modules.
* [micropython-wemos-led-matrix-shield ![GitHub Repo stars](https://img.shields.io/github/stars/mactijn/micropython-wemos-led-matrix-shield) ![GitHub last commit](https://img.shields.io/github/last-commit/mactijn/micropython-wemos-led-matrix-shield)](https://github.com/mactijn/micropython-wemos-led-matrix-shield) - Driver for Wemos D1 Mini Matrix LED shield, using TM1640 chip.
* [micropython-wemos-led-matrix ![GitHub Repo stars](https://img.shields.io/github/stars/mattytrentini/micropython-wemos-led-matrix) ![GitHub last commit](https://img.shields.io/github/last-commit/mattytrentini/micropython-wemos-led-matrix)](https://github.com/mattytrentini/micropython-wemos-led-matrix) - Driver for Wemos D1 Mini Matrix LED shield, using TM1640 chip.
* [micropython-max7219 ![GitHub Repo stars](https://img.shields.io/github/stars/vrialland/micropython-max7219) ![GitHub last commit](https://img.shields.io/github/last-commit/vrialland/micropython-max7219)](https://github.com/vrialland/micropython-max7219) - MicroPython driver for MAX7219 8x8 LED matrix.

#### LED Segment

* [LKM1638 ![GitHub Repo stars](https://img.shields.io/github/stars/arikb/LKM1638) ![GitHub last commit](https://img.shields.io/github/last-commit/arikb/LKM1638)](https://github.com/arikb/LKM1638) - Driver for JY-LKM1638 displays based on TM1638 controller.
* [max7219_8digit ![GitHub Repo stars](https://img.shields.io/github/stars/pdwerryhouse/max7219_8digit) ![GitHub last commit](https://img.shields.io/github/last-commit/pdwerryhouse/max7219_8digit)](https://github.com/pdwerryhouse/max7219_8digit) - Driver for MAX7219 8-digit 7-segment LED modules.
* [micropython-max7219 ![GitHub Repo stars](https://img.shields.io/github/stars/JulienBacquart/micropython-max7219) ![GitHub last commit](https://img.shields.io/github/last-commit/JulienBacquart/micropython-max7219)](https://github.com/JulienBacquart/micropython-max7219) - Driver for MAX7219 8-digit 7-segment LED modules.
* [micropython-my9221 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-my9221) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-my9221)](https://github.com/mcauser/micropython-my9221) - Driver for MY9221 10-segment LED bar graph modules.
* [micropython-tm1637 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-tm1637) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-tm1637)](https://github.com/mcauser/micropython-tm1637) - Driver for TM1637 quad 7-segment LED modules.
* [micropython-tm1638 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-tm1638) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-tm1638)](https://github.com/mcauser/micropython-tm1638) - Driver for TM1638 dual quad 7-segment LED modules with switches.
* [micropython-tm1640 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-tm1640) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-tm1640)](https://github.com/mcauser/micropython-tm1640) - Driver for TM1740 8x8 LED matrix modules.
* [micropython-tm1640](https://gitlab.com/robhamerling/micropython-tm1640) - MicroPython Library for 16 digits 7-segment displays controlled by a TM1640.
* [TM74HC595 ![GitHub Repo stars](https://img.shields.io/github/stars/Sakartu/TM74HC595) ![GitHub last commit](https://img.shields.io/github/last-commit/Sakartu/TM74HC595)](https://github.com/Sakartu/TM74HC595) - Driver for shift register controlled 5 pin display modules.

#### LEDs

* [micropython-morsecode ![GitHub Repo stars](https://img.shields.io/github/stars/mampersat/micropython-morsecode) ![GitHub last commit](https://img.shields.io/github/last-commit/mampersat/micropython-morsecode)](https://github.com/mampersat/micropython-morsecode) - Blink an LED with morse coded message.
* [micropython-p9813 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-p9813) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-p9813)](https://github.com/mcauser/micropython-p9813) - Driver for P9813 RGB LED used in SeeedStudio's Grove Chainable RGB LED.
* [micropython-ws2812-7seg ![GitHub Repo stars](https://img.shields.io/github/stars/HubertD/micropython-ws2812-7seg) ![GitHub last commit](https://img.shields.io/github/last-commit/HubertD/micropython-ws2812-7seg)](https://github.com/HubertD/micropython-ws2812-7seg) - 7-segment display using WS2812 RGB LEDs.
* [micropython-ws2812 ![GitHub Repo stars](https://img.shields.io/github/stars/JanBednarik/micropython-ws2812) ![GitHub last commit](https://img.shields.io/github/last-commit/JanBednarik/micropython-ws2812)](https://github.com/JanBednarik/micropython-ws2812) - Driver for WS2812 RGB LEDs.
* [Official APA102](http://docs.micropython.org/en/latest/esp8266/quickref.html#apa102-driver) - ESP8266 APA102/DotStar RGB LED driver.
* [Official WS2811](http://docs.micropython.org/en/latest/esp8266/quickref.html#neopixel-driver) - ESP8266 WS2811/NeoPixel RGB LED driver.
* [tlc5940-micropython ![GitHub Repo stars](https://img.shields.io/github/stars/oysols/tlc5940-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/oysols/tlc5940-micropython)](https://github.com/oysols/tlc5940-micropython) - Driver for TLC5940 16 channel LED driver.
* [ws2812-SPI ![GitHub Repo stars](https://img.shields.io/github/stars/nickovs/ws2812-SPI) ![GitHub last commit](https://img.shields.io/github/last-commit/nickovs/ws2812-SPI)](https://github.com/nickovs/ws2812-SPI) - An efficient micropython WS2812 (NeoPixel) driver.
* [micropython-ws2801 ![GitHub Repo stars](https://img.shields.io/github/stars/HeMan/micropython-ws2801) ![GitHub last commit](https://img.shields.io/github/last-commit/HeMan/micropython-ws2801)](https://github.com/HeMan/micropython-ws2801) - A MicroPython library to interface with strands of WS2801 RGB LEDs.
* [tlc5947-rgb-micropython](https://gitlab.com/peterzuger/tlc5947-rgb-micropython) - Driver for the TLC5947 24 channel 12-bit PWM LED driver.

#### OLED

* [Grove_OLED ![GitHub Repo stars](https://img.shields.io/github/stars/dda/MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/dda/MicroPython)](https://github.com/dda/MicroPython/blob/master/Grove_OLED.py) - Driver for SSD1327 used by SeeedStudio's Grove OLED Display 1.12" v1.0.
* [micropython-oled ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-oled) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-oled)](https://github.com/mcauser/deshipu-micropython-oled) - Collection of drivers for monochrome OLED displays, PCD8544, SH1106, SSD1306, UC1701X.
* [micropython-ssd1327 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-ssd1327) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-ssd1327)](https://github.com/mcauser/micropython-ssd1327) - Driver for SSD1327 128x128 4-bit greyscale OLED displays.
* [micropython-ssd1351 ![GitHub Repo stars](https://img.shields.io/github/stars/rdagger/micropython-ssd1351) ![GitHub last commit](https://img.shields.io/github/last-commit/rdagger/micropython-ssd1351)](https://github.com/rdagger/micropython-ssd1351) - Driver for SSD1351 OLED displays.
* [MicroPython_SSD1306 ![GitHub Repo stars](https://img.shields.io/github/stars/AnthonyKNorman/MicroPython_SSD1306) ![GitHub last commit](https://img.shields.io/github/last-commit/AnthonyKNorman/MicroPython_SSD1306)](https://github.com/AnthonyKNorman/MicroPython_SSD1306) - ESP8266 driver for SSD1306 OLED 128x64 displays.
* [Official SSD1306 ![GitHub Repo stars](https://img.shields.io/github/stars/micropython/micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython/micropython)](https://github.com/micropython/micropython/tree/master/drivers/display) - Driver for SSD1306 128x64 OLED displays.
* [SH1106 ![GitHub Repo stars](https://img.shields.io/github/stars/robert-hh/SH1106) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/SH1106)](https://github.com/robert-hh/SH1106) - Driver for the SH1106 OLED display.

### IO

#### ADC

* [ads1x15 ![GitHub Repo stars](https://img.shields.io/github/stars/robert-hh/ads1x15) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/ads1x15)](https://github.com/robert-hh/ads1x15) - Driver for the ADS1015/ADS1115 ADC, I2C interface.
* [micropython-ads1015 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-ads1015) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-ads1015)](https://github.com/mcauser/deshipu-micropython-ads1015) - ADS1015 12-Bit and ADS1115 16-bit ADC, 4 channels with programmable gain, I2C interface.
* [Micropython_ADS1115 ![GitHub Repo stars](https://img.shields.io/github/stars/AnthonyKNorman/Micropython_ADS1115) ![GitHub last commit](https://img.shields.io/github/last-commit/AnthonyKNorman/Micropython_ADS1115)](https://github.com/AnthonyKNorman/Micropython_ADS1115) - ADS1115 16-bit ADC, 4 channels with programmable gain, I2C interface.
* [ADS7818 ![GitHub Repo stars](https://img.shields.io/github/stars/robert-hh/ADS7818) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/ADS7818)](https://github.com/robert-hh/ADS7818) - Python class interfacing the ADS7818 AD-converter.
* [micropython-ads1219 ![GitHub Repo stars](https://img.shields.io/github/stars/miketeachman/micropython-ads1219) ![GitHub last commit](https://img.shields.io/github/last-commit/miketeachman/micropython-ads1219)](https://github.com/miketeachman/micropython-ads1219) - MicroPython module for the Texas Instruments ADS1219 ADC.
* [micropython-hx711 ![GitHub Repo stars](https://img.shields.io/github/stars/SergeyPiskunov/micropython-hx711) ![GitHub last commit](https://img.shields.io/github/last-commit/SergeyPiskunov/micropython-hx711)](https://github.com/SergeyPiskunov/micropython-hx711) - MicroPython driver for HX711 24-Bit Analog-to-Digital Converter.
* [MicroPython-ADC_Cal ![GitHub Repo stars](https://img.shields.io/github/stars/matthias-bs/MicroPython-ADC_Cal) ![GitHub last commit](https://img.shields.io/github/last-commit/matthias-bs/MicroPython-ADC_Cal)](https://github.com/matthias-bs/MicroPython-ADC_Cal) - ESP32 ADC driver using reference voltage calibration value from efuse.

#### DAC

* [micropython-mcp4725 ![GitHub Repo stars](https://img.shields.io/github/stars/wayoda/micropython-mcp4725) ![GitHub last commit](https://img.shields.io/github/last-commit/wayoda/micropython-mcp4725)](https://github.com/wayoda/micropython-mcp4725) - Driver for the MCP4725 I2C DAC.
* [mcp4728 ![GitHub Repo stars](https://img.shields.io/github/stars/openfablab/mcp4728) ![GitHub last commit](https://img.shields.io/github/last-commit/openfablab/mcp4728)](https://github.com/openfablab/mcp4728) - Helper library for the Microchip MCP4728 I2C 12-bit Quad DAC.

#### GPIO

* [micropython-inputs ![GitHub Repo stars](https://img.shields.io/github/stars/alanmitchell/micropython-inputs) ![GitHub last commit](https://img.shields.io/github/last-commit/alanmitchell/micropython-inputs)](https://github.com/alanmitchell/micropython-inputs) - Classes to count pulses, debounce digital inputs, and calculate moving averages of analog inputs for a MicroPython board.
* [ubutton](https://gitlab.com/WiLED-Project/ubutton) - A MicroPython library for controlling reading and debouncing pushbutton inputs, including "short" and "long" press callbacks.
* [micropython-debounce-switch ![GitHub Repo stars](https://img.shields.io/github/stars/selfhostedhome/micropython-debounce-switch) ![GitHub last commit](https://img.shields.io/github/last-commit/selfhostedhome/micropython-debounce-switch)](https://github.com/selfhostedhome/micropython-debounce-switch) - MicroPython Class for Debouncing Switches.

#### IO-Expander

* [MCP23017-ESP8266-Miniature-Driver ![GitHub Repo stars](https://img.shields.io/github/stars/forkachild/MCP23017-ESP8266-Miniature-Driver) ![GitHub last commit](https://img.shields.io/github/last-commit/forkachild/MCP23017-ESP8266-Miniature-Driver)](https://github.com/forkachild/MCP23017-ESP8266-Miniature-Driver) - Driver for MCP23017 16-bit I/O Expander.
* [micropython-mcp230xx ![GitHub Repo stars](https://img.shields.io/github/stars/ShrimpingIt/micropython-mcp230xx) ![GitHub last commit](https://img.shields.io/github/last-commit/ShrimpingIt/micropython-mcp230xx)](https://github.com/ShrimpingIt/micropython-mcp230xx) - Driver for MCP23017 and MCP23008 GPIO expanders.
* [micropython-mcp23017 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-mcp23017) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-mcp23017)](https://github.com/mcauser/micropython-mcp23017) - MicroPython driver for MCP23017 16-bit I/O Expander.
* [micropython-pcf8574 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-pcf8574) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-pcf8574)](https://github.com/mcauser/micropython-pcf8574) - MicroPython driver for PCF8574 8-Bit I2C I/O Expander with Interrupt.
* [micropython-pcf8575 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-pcf8575) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-pcf8575)](https://github.com/mcauser/micropython-pcf8575) - MicroPython driver for PCF8575 16-Bit I2C I/O Expander with Interrupt.
* [micropython-pcf8591](https://gitlab.com/cediddi/micropython-pcf8591) - MicroPython driver for PCF8591 8-Bit I2C I/O Expander.
* [micropython-74hc595 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-74hc595) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-74hc595)](https://github.com/mcauser/micropython-74hc595) - MicroPython driver for 74HC595 8-bit shift registers.

#### Joystick

* [micropython-nunchuck ![GitHub Repo stars](https://img.shields.io/github/stars/kfricke/micropython-nunchuck) ![GitHub last commit](https://img.shields.io/github/last-commit/kfricke/micropython-nunchuck)](https://github.com/kfricke/micropython-nunchuck) - Driver for Nunchuk game controller, I2C interface.

#### PWM

* [upwmcontroller](https://gitlab.com/WiLED-Project/upwmcontroller) - A MicroPython library for controlling PWM outputs in an asyncio loop, with features including fading and blinking.

#### Rotary Encoder

* [micropython-rotary ![GitHub Repo stars](https://img.shields.io/github/stars/miketeachman/micropython-rotary) ![GitHub last commit](https://img.shields.io/github/last-commit/miketeachman/micropython-rotary)](https://github.com/miketeachman/micropython-rotary) - MicroPython module to read a rotary encoder.
* [uencoder](https://gitlab.com/WiLED-Project/uencoder) - A MicroPython library for reading from a rotary encoder.
* [encodermenu ![GitHub Repo stars](https://img.shields.io/github/stars/sgall17a/encodermenu) ![GitHub last commit](https://img.shields.io/github/last-commit/sgall17a/encodermenu)](https://github.com/sgall17a/encodermenu) - Simple GUI menu for micropython using a rotary encoder and basic display.

#### Waveform Generator

* [Micropython-AD9833 ![GitHub Repo stars](https://img.shields.io/github/stars/KipCrossing/Micropython-AD9833) ![GitHub last commit](https://img.shields.io/github/last-commit/KipCrossing/Micropython-AD9833)](https://github.com/KipCrossing/Micropython-AD9833) - Pyboard driver for AD9833, spi interface.

### Motion

#### DC Motor

* [L298N ![GitHub Repo stars](https://img.shields.io/github/stars/GuyCarver/MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/GuyCarver/MicroPython)](https://github.com/GuyCarver/MicroPython/blob/master/lib/L298N.py) - Driver for the L298N dual h-bridge motor controller.

#### Servo

* [micropython-pca9685 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-pca9685) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-pca9685)](https://github.com/mcauser/deshipu-micropython-pca9685) - 16-channel 12-bit PWM/servo driver.

#### Stepper

* [micropython-upybbot ![GitHub Repo stars](https://img.shields.io/github/stars/jeffmer/micropython-upybbot) ![GitHub last commit](https://img.shields.io/github/last-commit/jeffmer/micropython-upybbot)](https://github.com/jeffmer/micropython-upybbot) - A4988 driver for bipolar stepper motors.
* [uln2003 ![GitHub Repo stars](https://img.shields.io/github/stars/IDWizard/uln2003) ![GitHub last commit](https://img.shields.io/github/last-commit/IDWizard/uln2003)](https://github.com/IDWizard/uln2003) - Driver for 5V 28BYJ-48 stepper motors.
* [micropython-multiaxis](https://gitlab.com/olivier.len02/micropython-multiaxis) - Multiaxis with MicroPython ESP32 and DRV8825.
* [ticlib ![GitHub Repo stars](https://img.shields.io/github/stars/jphalip/ticlib) ![GitHub last commit](https://img.shields.io/github/last-commit/jphalip/ticlib)](https://github.com/jphalip/ticlib) - Driver for Pololu Tic stepper motor controllers.

### Sensors

#### Accelerometer Digital

* [ADXL345-with-Pyboard ![GitHub Repo stars](https://img.shields.io/github/stars/AbhinayBandaru/ADXL345-with-Pyboard) ![GitHub last commit](https://img.shields.io/github/last-commit/AbhinayBandaru/ADXL345-with-Pyboard)](https://github.com/AbhinayBandaru/ADXL345-with-Pyboard) - Driver for ADXL345 16g 3-axis accelerometer.
* [adxl345_micropython ![GitHub Repo stars](https://img.shields.io/github/stars/fanday/adxl345_micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/fanday/adxl345_micropython)](https://github.com/fanday/adxl345_micropython) - Driver for ADXL345 16g 3-axis accelerometer.
* [micropython-lis2hh12 ![GitHub Repo stars](https://img.shields.io/github/stars/tuupola/micropython-lis2hh12) ![GitHub last commit](https://img.shields.io/github/last-commit/tuupola/micropython-lis2hh12)](https://github.com/tuupola/micropython-lis2hh12) - I2C driver for LIS2HH12 3-axis accelerometer.
* [MMA7660 ![GitHub Repo stars](https://img.shields.io/github/stars/Bucknalla/MicroPython-3-Axis-Accelerometer) ![GitHub last commit](https://img.shields.io/github/last-commit/Bucknalla/MicroPython-3-Axis-Accelerometer)](https://github.com/Bucknalla/MicroPython-3-Axis-Accelerometer/blob/master/MMA7660.py) - Driver for MMA7660 1.5g 3-axis accelerometer.

#### Air Quality

* [CCS811 ![GitHub Repo stars](https://img.shields.io/github/stars/Ledbelly2142/CCS811) ![GitHub last commit](https://img.shields.io/github/last-commit/Ledbelly2142/CCS811)](https://github.com/Ledbelly2142/CCS811) - CCS811 Air Quality Sensor.
* [upython-aq-monitor ![GitHub Repo stars](https://img.shields.io/github/stars/ayoy/upython-aq-monitor) ![GitHub last commit](https://img.shields.io/github/last-commit/ayoy/upython-aq-monitor)](https://github.com/ayoy/upython-aq-monitor) - Air Quality monitor using PMS5003 sensor and WiPy.
* [micropython-pms7003 ![GitHub Repo stars](https://img.shields.io/github/stars/pkucmus/micropython-pms7003) ![GitHub last commit](https://img.shields.io/github/last-commit/pkucmus/micropython-pms7003)](https://github.com/pkucmus/micropython-pms7003) - MicroPython driver for the PMS7003 Air Quality Sensor.
* [pms5003_micropython ![GitHub Repo stars](https://img.shields.io/github/stars/kevinkk525/pms5003_micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/kevinkk525/pms5003_micropython)](https://github.com/kevinkk525/pms5003_micropython) - Driver for pms5003 air quality sensor for MicroPython.
* [micropython-pms5003-minimal ![GitHub Repo stars](https://img.shields.io/github/stars/miketeachman/micropython-pms5003-minimal) ![GitHub last commit](https://img.shields.io/github/last-commit/miketeachman/micropython-pms5003-minimal)](https://github.com/miketeachman/micropython-pms5003-minimal) - Driver for pms5003 air quality sensor for MicroPython.
* [polly ![GitHub Repo stars](https://img.shields.io/github/stars/g-sam/polly) ![GitHub last commit](https://img.shields.io/github/last-commit/g-sam/polly)](https://github.com/g-sam/polly) - SDS011 pollution sensor + Wemos D1 mini pro + MicroPython.

#### Barometer

* [micropython-bme280 ![GitHub Repo stars](https://img.shields.io/github/stars/kevbu/micropython-bme280) ![GitHub last commit](https://img.shields.io/github/last-commit/kevbu/micropython-bme280)](https://github.com/kevbu/micropython-bme280) - Driver for the Bosch BME280 temperature/pressure/humidity sensor.
* [micropython-bmp180 ![GitHub Repo stars](https://img.shields.io/github/stars/micropython-IMU/micropython-bmp180) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython-IMU/micropython-bmp180)](https://github.com/micropython-IMU/micropython-bmp180) - Driver for Bosch BMP180 temperature, pressure and altitude sensor.
* [mpy_bme280_esp8266 ![GitHub Repo stars](https://img.shields.io/github/stars/catdog2/mpy_bme280_esp8266) ![GitHub last commit](https://img.shields.io/github/last-commit/catdog2/mpy_bme280_esp8266)](https://github.com/catdog2/mpy_bme280_esp8266) - Bosch BME280 temperature/pressure/humidity sensor.
* [BME280 ![GitHub Repo stars](https://img.shields.io/github/stars/robert-hh/BME280) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/BME280)](https://github.com/robert-hh/BME280) - MicroPython driver for the BME280 sensor, target platform Pycom devices.
* [micropython-bmp280 ![GitHub Repo stars](https://img.shields.io/github/stars/dafvid/micropython-bmp280) ![GitHub last commit](https://img.shields.io/github/last-commit/dafvid/micropython-bmp280)](https://github.com/dafvid/micropython-bmp280) - Module for the BMP280 sensor.

#### Camera

* [micropython-ov2640 ![GitHub Repo stars](https://img.shields.io/github/stars/namato/micropython-ov2640) ![GitHub last commit](https://img.shields.io/github/last-commit/namato/micropython-ov2640)](https://github.com/namato/micropython-ov2640) - MicroPython class for OV2640 camera.
* [Nikon-Trigger-for-MicroPython ![GitHub Repo stars](https://img.shields.io/github/stars/Thekegman/Nikon-Trigger-for-MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/Thekegman/Nikon-Trigger-for-MicroPython)](https://github.com/Thekegman/Nikon-Trigger-for-MicroPython) - Remote trigger for a Nikon camera using an IR LED. For PyBoard v1.1.
* [micropython-camera-driver ![GitHub Repo stars](https://img.shields.io/github/stars/lemariva/micropython-camera-driver) ![GitHub last commit](https://img.shields.io/github/last-commit/lemariva/micropython-camera-driver)](https://github.com/lemariva/micropython-camera-driver) - OV2640 camera driver for MicroPython on ESP32.

#### Compass

* [micropython-esp8266-hmc5883l ![GitHub Repo stars](https://img.shields.io/github/stars/gvalkov/micropython-esp8266-hmc5883l) ![GitHub last commit](https://img.shields.io/github/last-commit/gvalkov/micropython-esp8266-hmc5883l)](https://github.com/gvalkov/micropython-esp8266-hmc5883l) - 3-axis digital compass on the ESP8266.
* [QMC5883 ![GitHub Repo stars](https://img.shields.io/github/stars/robert-hh/QMC5883) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/QMC5883)](https://github.com/robert-hh/QMC5883) - Python class for the QMC5883 Three-Axis Digital Compass IC.

#### Current

* [micropythonINA219 ![GitHub Repo stars](https://img.shields.io/github/stars/kabel42/micropythonINA219) ![GitHub last commit](https://img.shields.io/github/last-commit/kabel42/micropythonINA219)](https://github.com/kabel42/micropythonINA219) - Driver for INA219 current sensor.
* [pyb_ina219 ![GitHub Repo stars](https://img.shields.io/github/stars/chrisb2/pyb_ina219) ![GitHub last commit](https://img.shields.io/github/last-commit/chrisb2/pyb_ina219)](https://github.com/chrisb2/pyb_ina219) - Driver for INA219 current sensor.

#### Distance IR

* [micropython-gp2y0e03 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-gp2y0e03) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-gp2y0e03)](https://github.com/mcauser/deshipu-micropython-gp2y0e03) - IR-LED distance measuring sensor using Sharp GP2Y0E03.
* [micropython-vl6180 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-vl6180) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-vl6180)](https://github.com/mcauser/deshipu-micropython-vl6180) - Time-of-Flight sensor, ambient light sensor & IR emitter.

#### Distance Laser

* [micropython-vl53l0x ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-vl53l0x) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-vl53l0x)](https://github.com/mcauser/deshipu-micropython-vl53l0x) - Time-of-Flight laser-ranging sensor.
* [Qwiic_TOF_Module_RFD77402 ![GitHub Repo stars](https://img.shields.io/github/stars/ZIOCC/Qwiic_TOF_Module_RFD77402) ![GitHub last commit](https://img.shields.io/github/last-commit/ZIOCC/Qwiic_TOF_Module_RFD77402)](https://github.com/ZIOCC/Qwiic_TOF_Module_RFD77402) - Qwiic TOF Module (RFD77402) time-of-flight rangefinding module.

#### Distance Ultrasonic

* [micropython-hcsr04 ![GitHub Repo stars](https://img.shields.io/github/stars/rsc1975/micropython-hcsr04) ![GitHub last commit](https://img.shields.io/github/last-commit/rsc1975/micropython-hcsr04)](https://github.com/rsc1975/micropython-hcsr04) - Driver for HC-SR04 ultrasonic distance sensors.

#### Energy

* [ATM90E26_Micropython ![GitHub Repo stars](https://img.shields.io/github/stars/whatnick/ATM90E26_Micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/whatnick/ATM90E26_Micropython)](https://github.com/whatnick/ATM90E26_Micropython) - Driver for ATM90E26 energy metering device.
* [MCP39F521 ![GitHub Repo stars](https://img.shields.io/github/stars/warpme/MCP39F521) ![GitHub last commit](https://img.shields.io/github/last-commit/warpme/MCP39F521)](https://github.com/warpme/MCP39F521) - ESP8266 scripts for reading MCP39F521 power monitors.

#### Gaseous

* [micropython-MQ ![GitHub Repo stars](https://img.shields.io/github/stars/kartun83/micropython-MQ) ![GitHub last commit](https://img.shields.io/github/last-commit/kartun83/micropython-MQ)](https://github.com/kartun83/micropython-MQ) - Drivers for MQ series gas sensors.
* [MQ135 ![GitHub Repo stars](https://img.shields.io/github/stars/rubfi/MQ135) ![GitHub last commit](https://img.shields.io/github/last-commit/rubfi/MQ135)](https://github.com/rubfi/MQ135) - Driver for MQ135 gas sensor.
* [CCS811 ![GitHub Repo stars](https://img.shields.io/github/stars/Notthemarsian/CCS811) ![GitHub last commit](https://img.shields.io/github/last-commit/Notthemarsian/CCS811)](https://github.com/Notthemarsian/CCS811) - Basic MicroPython driver for CCS811 on ESP8266 boards.
* [micropython-scd30 ![GitHub Repo stars](https://img.shields.io/github/stars/agners/micropython-scd30) ![GitHub last commit](https://img.shields.io/github/last-commit/agners/micropython-scd30)](https://github.com/agners/micropython-scd30) - MicroPython I2C driver for Sensirion SCD30 CO2 sensor module.

#### Light

* [MicroPython-SI1145 ![GitHub Repo stars](https://img.shields.io/github/stars/neliogodoi/MicroPython-SI1145) ![GitHub last commit](https://img.shields.io/github/last-commit/neliogodoi/MicroPython-SI1145)](https://github.com/neliogodoi/MicroPython-SI1145) - SI1145 UV index, IR, visible light and proximity sensor.
* [micropython-tsl2561 ![GitHub Repo stars](https://img.shields.io/github/stars/kfricke/micropython-tsl2561) ![GitHub last commit](https://img.shields.io/github/last-commit/kfricke/micropython-tsl2561)](https://github.com/kfricke/micropython-tsl2561) - Driver for the TSL2561 illumination sensor from TAOS / ams.
* [mpy_bh1750fvi_esp8266 ![GitHub Repo stars](https://img.shields.io/github/stars/catdog2/mpy_bh1750fvi_esp8266) ![GitHub last commit](https://img.shields.io/github/last-commit/catdog2/mpy_bh1750fvi_esp8266)](https://github.com/catdog2/mpy_bh1750fvi_esp8266) - ESP8266 driver for BH1750FVI sensor.
* [bh1750 ![GitHub Repo stars](https://img.shields.io/github/stars/PinkInk/upylib) ![GitHub last commit](https://img.shields.io/github/last-commit/PinkInk/upylib)](https://github.com/PinkInk/upylib/tree/master/bh1750) - BH1750 i2c digital light sensor driver.

#### Motion Inertial

* [micropython-bmx055 ![GitHub Repo stars](https://img.shields.io/github/stars/micropython-IMU/micropython-bmx055) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython-IMU/micropython-bmx055)](https://github.com/micropython-IMU/micropython-bmx055) - Driver for Bosch BMX055 IMU sensor.
* [micropython-bno055 ![GitHub Repo stars](https://img.shields.io/github/stars/deshipu/micropython-bno055) ![GitHub last commit](https://img.shields.io/github/last-commit/deshipu/micropython-bno055)](https://github.com/deshipu/micropython-bno055) - Bosch Sensortec BNO055 9DOF IMU sensor, I2C interface.
* [micropython-lsm9ds0 ![GitHub Repo stars](https://img.shields.io/github/stars/micropython-IMU/micropython-lsm9ds0) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython-IMU/micropython-lsm9ds0)](https://github.com/micropython-IMU/micropython-lsm9ds0) - LSM9DS0 g-force linear acceleration, gauss magnetic and dps angular rate sensors.
* [micropython-mpu9250 ![GitHub Repo stars](https://img.shields.io/github/stars/tuupola/micropython-mpu9250) ![GitHub last commit](https://img.shields.io/github/last-commit/tuupola/micropython-mpu9250)](https://github.com/tuupola/micropython-mpu9250) - I2C driver for MPU9250 9-axis motion tracking device.
* [micropython-mpu9x50 ![GitHub Repo stars](https://img.shields.io/github/stars/micropython-IMU/micropython-mpu9x50) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython-IMU/micropython-mpu9x50)](https://github.com/micropython-IMU/micropython-mpu9x50) - Driver for the InvenSense MPU9250 inertial measurement unit.
* [MPU6050-ESP8266-MicroPython ![GitHub Repo stars](https://img.shields.io/github/stars/adamjezek98/MPU6050-ESP8266-MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/adamjezek98/MPU6050-ESP8266-MicroPython)](https://github.com/adamjezek98/MPU6050-ESP8266-MicroPython) - ESP8266 driver for MPU6050 accelerometer/gyroscope.
* [py-mpu6050 ![GitHub Repo stars](https://img.shields.io/github/stars/larsks/py-mpu6050) ![GitHub last commit](https://img.shields.io/github/last-commit/larsks/py-mpu6050)](https://github.com/larsks/py-mpu6050) - ESP8266 driver for MPU6050 accelerometer/gyroscope.
* [micropython-mpu6886 ![GitHub Repo stars](https://img.shields.io/github/stars/tuupola/micropython-mpu6886) ![GitHub last commit](https://img.shields.io/github/last-commit/tuupola/micropython-mpu6886)](https://github.com/tuupola/micropython-mpu6886) - MicroPython I2C driver for MPU6886 6-axis motion tracking device.
* [micropython-fusion](https://gitlab.com/nnayo/micropython-fusion) - Sensor fusion calculates heading, pitch and roll from the outputs of motion tracking devices.

#### Pressure

* [ms5803-micropython ![GitHub Repo stars](https://img.shields.io/github/stars/minyiky/ms5803-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/minyiky/ms5803-micropython)](https://github.com/minyiky/ms5803-micropython) - A micropython implimentation of the driver for an MS5803 pressure & temperature sensor.

#### Soil Moisture

* [micropython-chirp ![GitHub Repo stars](https://img.shields.io/github/stars/robberwick/micropython-chirp) ![GitHub last commit](https://img.shields.io/github/last-commit/robberwick/micropython-chirp)](https://github.com/robberwick/micropython-chirp) - Driver for the Chirp Soil Moisture Sensor.
* [MicroPython-MiFlora ![GitHub Repo stars](https://img.shields.io/github/stars/matthias-bs/MicroPython-MiFlora) ![GitHub last commit](https://img.shields.io/github/last-commit/matthias-bs/MicroPython-MiFlora)](https://github.com/matthias-bs/MicroPython-MiFlora) - Xiaomi Mi Flora (aka. flower care) BLE plant sensors (soil moisture/conductivity/light intensity/temperature).

#### Temperature Analog

* [micropython-max31855 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-max31855) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-max31855)](https://github.com/mcauser/deshipu-micropython-max31855) - Thermocouple amplifier, SPI interface.
* [max31856 ![GitHub Repo stars](https://img.shields.io/github/stars/alinbaltaru/max31856) ![GitHub last commit](https://img.shields.io/github/last-commit/alinbaltaru/max31856)](https://github.com/alinbaltaru/max31856) - Precision thermocouple to digital converter with linearization, SPI interface.

#### Temperature Digital

* [bme680-mqtt-micropython ![GitHub Repo stars](https://img.shields.io/github/stars/robmarkcole/bme680-mqtt-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/robmarkcole/bme680-mqtt-micropython)](https://github.com/robmarkcole/bme680-mqtt-micropython) - Driver for BME680 gas, pressure, temperature and humidity sensor.
* [LM75-MicroPython ![GitHub Repo stars](https://img.shields.io/github/stars/OldhamMade/LM75-MicroPython) ![GitHub last commit](https://img.shields.io/github/last-commit/OldhamMade/LM75-MicroPython)](https://github.com/OldhamMade/LM75-MicroPython) - Driver for LM75 digital temperature sensor, I2C interface.
* [micropython-am2320 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-am2320) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-am2320)](https://github.com/mcauser/micropython-am2320) - Aosong AM2320 temperature and humidity sensor, I2C interface.
* [micropython-dht12 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-dht12) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-dht12)](https://github.com/mcauser/micropython-dht12) - Aosong DHT12 temperature and humidity sensor, I2C interface.
* [micropython-hdc1008 ![GitHub Repo stars](https://img.shields.io/github/stars/kfricke/micropython-hdc1008) ![GitHub last commit](https://img.shields.io/github/last-commit/kfricke/micropython-hdc1008)](https://github.com/kfricke/micropython-hdc1008) - Driver for the Texas Instruments HDC1008 humidity and temperature sensor.
* [micropython-mcp9808 ![GitHub Repo stars](https://img.shields.io/github/stars/kfricke/micropython-mcp9808) ![GitHub last commit](https://img.shields.io/github/last-commit/kfricke/micropython-mcp9808)](https://github.com/kfricke/micropython-mcp9808) - Driver for the Microchip MCP9808 temperature sensor.
* [micropython-mpl115a2 ![GitHub Repo stars](https://img.shields.io/github/stars/khoulihan/micropython-mpl115a2) ![GitHub last commit](https://img.shields.io/github/last-commit/khoulihan/micropython-mpl115a2)](https://github.com/khoulihan/micropython-mpl115a2) - Pyboard driver for the MPL115A2 barometric pressure sensor.
* [micropython-sht30 ![GitHub Repo stars](https://img.shields.io/github/stars/rsc1975/micropython-sht30) ![GitHub last commit](https://img.shields.io/github/last-commit/rsc1975/micropython-sht30)](https://github.com/rsc1975/micropython-sht30) - Driver for SHT30 temperature and humidity sensor.
* [micropython-sht31 ![GitHub Repo stars](https://img.shields.io/github/stars/kfricke/micropython-sht31) ![GitHub last commit](https://img.shields.io/github/last-commit/kfricke/micropython-sht31)](https://github.com/kfricke/micropython-sht31) - Driver for the SHT31 temperature and humidity sensor.
* [micropython-Si7005 ![GitHub Repo stars](https://img.shields.io/github/stars/Smrtokvitek/micropython-Si7005) ![GitHub last commit](https://img.shields.io/github/last-commit/Smrtokvitek/micropython-Si7005)](https://github.com/Smrtokvitek/micropython-Si7005) - Driver for Si7005 relative humidity and temperature sensor.
* [micropython-si7021 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/deshipu-micropython-si7021) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/deshipu-micropython-si7021)](https://github.com/mcauser/deshipu-micropython-si7021) - SI7021 Temperature and humidity sensor, I2C interface.
* [micropython-si7021 ![GitHub Repo stars](https://img.shields.io/github/stars/chrisbalmer/micropython-si7021) ![GitHub last commit](https://img.shields.io/github/last-commit/chrisbalmer/micropython-si7021)](https://github.com/chrisbalmer/micropython-si7021) - SI7021 Temperature and humidity sensor, I2C interface.
* [micropython-Si705x ![GitHub Repo stars](https://img.shields.io/github/stars/billyrayvalentine/micropython-Si705x) ![GitHub last commit](https://img.shields.io/github/last-commit/billyrayvalentine/micropython-Si705x)](https://github.com/billyrayvalentine/micropython-Si705x) - Silicon Labs Si705x series of temperature sensors, I2C interface.
* [micropython-Si70xx ![GitHub Repo stars](https://img.shields.io/github/stars/billyrayvalentine/micropython-Si70xx) ![GitHub last commit](https://img.shields.io/github/last-commit/billyrayvalentine/micropython-Si70xx)](https://github.com/billyrayvalentine/micropython-Si70xx) - Silicon Labs Si70xx series of relative humidity and temperature sensors, I2C interface.
* [micropython-tmp102 ![GitHub Repo stars](https://img.shields.io/github/stars/khoulihan/micropython-tmp102) ![GitHub last commit](https://img.shields.io/github/last-commit/khoulihan/micropython-tmp102)](https://github.com/khoulihan/micropython-tmp102) - Driver for TMP102 digital temperature sensor.
* [Official DHT11+DHT12 ![GitHub Repo stars](https://img.shields.io/github/stars/micropython/micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython/micropython)](https://github.com/micropython/micropython/blob/master/drivers/dht/dht.py) - ESP8266 driver for DHT11 and DHT12 temperature and humidity sensor.
* [sht25-micropython ![GitHub Repo stars](https://img.shields.io/github/stars/Miceuz/sht25-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/Miceuz/sht25-micropython)](https://github.com/Miceuz/sht25-micropython) - Driver for SHT25 temperature and humidity sensor.
* [micropython-tmp1075 ![GitHub Repo stars](https://img.shields.io/github/stars/mattytrentini/micropython-tmp1075) ![GitHub last commit](https://img.shields.io/github/last-commit/mattytrentini/micropython-tmp1075)](https://github.com/mattytrentini/micropython-tmp1075) - Driver for the TI TMP1075 temperature sensor.
* [micropython-sht11 ![GitHub Repo stars](https://img.shields.io/github/stars/2black0/micropython-sht11) ![GitHub last commit](https://img.shields.io/github/last-commit/2black0/micropython-sht11)](https://github.com/2black0/micropython-sht11) - Driver for Sensirion SHT11 temperature and humidity sensor.
* [micropython-lm75a ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-lm75a) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-lm75a)](https://github.com/mcauser/micropython-lm75a) - Driver for the NXP LM75A digital temperature sensor.

#### Temperature IR

* [micropython-mlx90614 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-mlx90614) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-mlx90614)](https://github.com/mcauser/micropython-mlx90614) - Driver for Melexis MLX90614 IR temperature sensor.

#### Touch Capacitive

* [micropython-mpr121 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-mpr121) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-mpr121)](https://github.com/mcauser/micropython-mpr121) - Driver for MPR121 capacitive touch keypads and breakout boards.
* [micropython-ttp223 ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/micropython-ttp223) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/micropython-ttp223)](https://github.com/mcauser/micropython-ttp223) - Examples using TTP223 capacitive touch module.

#### Touch Resistive

* [XPT2046-touch-pad-driver ![GitHub Repo stars](https://img.shields.io/github/stars/robert-hh/XPT2046-touch-pad-driver) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/XPT2046-touch-pad-driver)](https://github.com/robert-hh/XPT2046-touch-pad-driver) - Driver for XPT2046 touch pad controller used in many TFT modules.

### Scheduling

* [micropython-mcron ![GitHub Repo stars](https://img.shields.io/github/stars/fizista/micropython-mcron) ![GitHub last commit](https://img.shields.io/github/last-commit/fizista/micropython-mcron)](https://github.com/fizista/micropython-mcron) - MicroCRON is a time-based task scheduling program for MicroPython.

### Storage

#### Database

* [uPyMySQL ![GitHub Repo stars](https://img.shields.io/github/stars/dvrhax/uPyMySQL) ![GitHub last commit](https://img.shields.io/github/last-commit/dvrhax/uPyMySQL)](https://github.com/dvrhax/uPyMySQL) - Pure uPython MySQL Client.
* [micropython-redis ![GitHub Repo stars](https://img.shields.io/github/stars/dwighthubbard/micropython-redis) ![GitHub last commit](https://img.shields.io/github/last-commit/dwighthubbard/micropython-redis)](https://github.com/dwighthubbard/micropython-redis) - A redis client implementation designed for use with MicroPython.
* [picoredis ![GitHub Repo stars](https://img.shields.io/github/stars/SpotlightKid/picoredis) ![GitHub last commit](https://img.shields.io/github/last-commit/SpotlightKid/picoredis)](https://github.com/SpotlightKid/picoredis) - A very minimal Redis client (not only) for MicroPython.
* [micropg ![GitHub Repo stars](https://img.shields.io/github/stars/nakagami/micropg) ![GitHub last commit](https://img.shields.io/github/last-commit/nakagami/micropg)](https://github.com/nakagami/micropg) - PostgreSQL database driver for MicroPython.
* [nmongo ![GitHub Repo stars](https://img.shields.io/github/stars/nakagami/nmongo) ![GitHub last commit](https://img.shields.io/github/last-commit/nakagami/nmongo)](https://github.com/nakagami/nmongo) - MongoDB client for CPython and MicroPython, with mongo shell like APIs.

#### EEPROM

* [micropython_eeprom ![GitHub Repo stars](https://img.shields.io/github/stars/peterhinch/micropython_eeprom) ![GitHub last commit](https://img.shields.io/github/last-commit/peterhinch/micropython_eeprom)](https://github.com/peterhinch/micropython_eeprom) - MicroPython device drivers for nonvolatile memory chips (EEPROM, FRAM, Flash).

#### FRAM

* [micropython-fram ![GitHub Repo stars](https://img.shields.io/github/stars/rolandvs/micropython-fram) ![GitHub last commit](https://img.shields.io/github/last-commit/rolandvs/micropython-fram)](https://github.com/rolandvs/micropython-fram) - Pyboard driver for Ferroelectric RAM module.

## Community

* [MicroPython Forum](https://forum.micropython.org/) - Online community of over 6400 users discussing all things related to MicroPython.
* [MicroPython on Twitter](https://twitter.com/micropython?lang=en) - Follow MicroPython on Twitter for latest news and updates.
* [MicroPython on Facebook](https://www.facebook.com/micropython) - Like MicroPython on Facebook for competitions, news and updates.
* [Melbourne MicroPython Meetup](https://www.meetup.com/en-AU/MicroPython-Meetup) - Regular meetup at CCHS in Melbourne, Australia.
* [Slack](https://slack-micropython.herokuapp.com/) - Get an automated invite to the micropython.slack.com workspace.
* [Discord](https://discord.gg/qw7d8bv) - Get an invite to the MicroPython Discord server.

## Books

* [Programming with MicroPython: Embedded Programming with Microcontrollers and Python](http://shop.oreilly.com/product/0636920056515.do) - By Nicholas H. Tollervey. ISBN 9781491972731.
* [MicroPython for the Internet of Things: A Beginner's Guide to Programming with Python on Microcontrollers](https://www.apress.com/gp/book/9781484231227) - By Charles Bell. ISBN 9781484231227.
* [MicroPython Cookbook](https://www.packtpub.com/au/application-development/micropython-cookbook) - By Marwan Alsabbagh. ISBN 9781838649951.
* [Python for Microcontrollers: Getting Started with MicroPython](https://www.amazon.com.au/Python-Microcontrollers-Getting-Started-MicroPython/dp/1259644537) - By Donald Norris. ISBN 9781259644535.
* [Advanced Programming in MicroPython By Example](https://www.amazon.com/Advanced-Programming-MicroPython-Example-Magda/dp/1090900937) - By Yury Magda. ISBN 9781090900937.
* [MicroPython Projects](https://www.packtpub.com/au/iot-hardware/micropython-projects) - By Jacob Beningo. ISBN 9781789958034.
* [Get Started with MicroPython on Raspberry Pi Pico](https://store.rpipress.cc/products/get-started-with-micropython-on-raspberry-pi-pico) - By Gareth Halfacree and Ben Everard. ISBN 9781912047864.
* [MicroPython for Microcontrollers](https://www.elektor.com/micropython-for-microcontrollers-e-book) - By Günter Spanner. ISBN 9783895764370.
* [MicroPython For Everyone: How To Use ESP32 And ESP8266: Micropython Mqtt](https://www.amazon.com/MicroPython-Everyone-ESP32-ESP8266-Micropython/dp/B094281XK1) - By Mason Milette. ISBN 9798748248822.

## Frameworks

* [micrOS ![GitHub Repo stars](https://img.shields.io/github/stars/BxNxM/micrOS) ![GitHub last commit](https://img.shields.io/github/last-commit/BxNxM/micrOS)](https://github.com/BxNxM/micrOS) - MicroPython based IoT Framework.
* [terkin-datalogger ![GitHub Repo stars](https://img.shields.io/github/stars/hiveeyes/terkin-datalogger) ![GitHub last commit](https://img.shields.io/github/last-commit/hiveeyes/terkin-datalogger)](https://github.com/hiveeyes/terkin-datalogger) - Flexible data logger application for MicroPython and CPython.

## Resources

* [MicroPython](http://micropython.org) - Project website. Test drive the pyboard. Try MicroPython online with unicorn.
* [MicroPython on GitHub ![GitHub Repo stars](https://img.shields.io/github/stars/micropython/micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython/micropython)](https://github.com/micropython/micropython) - Submit bug reports, follow and join in development on GitHub.
* [MicroPython Official Documentation](http://docs.micropython.org/) - For various ports, including quick reference, general information, examples and tutorials.
* [MicroPython Wiki](http://wiki.micropython.org/Home) - Community generated documentation and examples of the features of MicroPython and the pyboard.
* [MicroPython Newsletter](http://micropython.org/newsletter) - Subscribe to the MicroPython newsletter for news and announcements including new features and new products.
* [MicroPython Store](https://store.micropython.org/) - Where you can buy the pyboard, housings, skins, books, connectors and peripherals.
* [MicroPython on Wikipedia](https://en.wikipedia.org/wiki/MicroPython) - MicroPython on Wikipedia.

## Development

### Code Generation

* [micropy-cli ![GitHub Repo stars](https://img.shields.io/github/stars/BradenM/micropy-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/BradenM/micropy-cli)](https://github.com/BradenM/micropy-cli) - Micropy Cli is a project management/generation tool for writing MicroPython code in modern IDEs such as VSCode.
* [micropython-stubber ![GitHub Repo stars](https://img.shields.io/github/stars/Josverl/micropython-stubber) ![GitHub last commit](https://img.shields.io/github/last-commit/Josverl/micropython-stubber)](https://github.com/Josverl/micropython-stubber) - Generate and use stubs for different MicroPython firmwares to use with vscode and/or pylint.
* [micropy-stubs ![GitHub Repo stars](https://img.shields.io/github/stars/BradenM/micropy-stubs) ![GitHub last commit](https://img.shields.io/github/last-commit/BradenM/micropy-stubs)](https://github.com/BradenM/micropy-stubs) - Automatically Generated Stub Packages for Micropy-Cli and whomever else.

### Debugging

* [esp32-backtrace ![GitHub Repo stars](https://img.shields.io/github/stars/tve/esp32-backtrace) ![GitHub last commit](https://img.shields.io/github/last-commit/tve/esp32-backtrace)](https://github.com/tve/esp32-backtrace) - ESP32 Exception Stack Backtrace Analyzer.

### IDEs

* [JetBrains IntelliJ/PyCharm MicroPython Plugin](https://plugins.jetbrains.com/plugin/9777-micropython) - Plugin for MicroPython devices in IntelliJ and PyCharm.
* [Micropython IDE for VSCode](https://marketplace.visualstudio.com/items?itemName=dphans.micropython-ide-vscode) - MicroPython IDE for VSCode README.
* [Micropython-REPLink for VSCode](https://marketplace.visualstudio.com/items?itemName=SWC-Fablab.micropython-replink) - Handy shortcuts for interacting with a MicroPython REPL terminal.
* [Mu Editor](https://codewith.mu/) -  Code with Mu: a simple Python\MicroPythonb\CircuitPython editor for beginner programmers.
* [Thonny IDE](https://thonny.org/) - Thonny: Python IDE for beginners.

### Shells

#### On Device

* [upy-shell ![GitHub Repo stars](https://img.shields.io/github/stars/dhylands/upy-shell) ![GitHub last commit](https://img.shields.io/github/last-commit/dhylands/upy-shell)](https://github.com/dhylands/upy-shell) - A simple command line based shell for MicroPython.
* [Micropython-Editor ![GitHub Repo stars](https://img.shields.io/github/stars/robert-hh/Micropython-Editor) ![GitHub last commit](https://img.shields.io/github/last-commit/robert-hh/Micropython-Editor)](https://github.com/robert-hh/Micropython-Editor) - Small on-board editor for PyBoard, WiPy, ESP8266, ESP32, PyCom and Adafruit devices written in Python.

#### On Host

* [rshell ![GitHub Repo stars](https://img.shields.io/github/stars/dhylands/rshell) ![GitHub last commit](https://img.shields.io/github/last-commit/dhylands/rshell)](https://github.com/dhylands/rshell) - Copy or Sync files to Boards, enter REPL from your terminal.
* [ampy ![GitHub Repo stars](https://img.shields.io/github/stars/scientifichackers/ampy) ![GitHub last commit](https://img.shields.io/github/last-commit/scientifichackers/ampy)](https://github.com/scientifichackers/ampy) - Adafruit MicroPython Tool - Utility to interact with a MicroPython board over a serial connection.
* [mpfshell ![GitHub Repo stars](https://img.shields.io/github/stars/wendlers/mpfshell) ![GitHub last commit](https://img.shields.io/github/last-commit/wendlers/mpfshell)](https://github.com/wendlers/mpfshell) - A simple shell based file explorer for ESP8266 and WiPy.
* [mpsync ![GitHub Repo stars](https://img.shields.io/github/stars/Uhlo/mpsync) ![GitHub last commit](https://img.shields.io/github/last-commit/Uhlo/mpsync)](https://github.com/Uhlo/mpsync) - A small tool that synchronizes a folder to a MicroPython board whenever it detects a change.

## Miscellaneous

* [MicroPython Kickstarter](https://www.kickstarter.com/projects/214379695/micro-python-python-for-microcontrollers) - 1,931 backers pledged £97,803 to help bring this project to life.
* [MicroPython on the ESP8266 Kickstarter](https://www.kickstarter.com/projects/214379695/micropython-on-the-esp8266-beautifully-easy-iot) - 1,399 backers pledged £28,534 to help bring this project to life.

## Contributing

Contributions and suggestions are always welcome! Please take a look at the [contribution guidelines ![GitHub Repo stars](https://img.shields.io/github/stars/mcauser/awesome-micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/mcauser/awesome-micropython)](https://github.com/mcauser/awesome-micropython/blob/master/contributing.md) first.

I will keep some pull requests open if I'm not sure whether those libraries are awesome, you could vote for them by adding 👍 to them.
