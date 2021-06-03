<!--lint disable awesome-list-item-->
<!--lint disable awesome-toc-->
<!--lint disable no-blockquote-without-marker-->

# Awesome ESP [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code-of-conduct.md)
A curated list of awesome ESP8266/32 projects and code.

<a href="http://espressif.com/en/products/hardware/esp8266ex/overview"><img src="https://github.com/agucova/awesome-esp/raw/main/img/esp8266.jpg" alt="ESP8266" align="left" style="margin-right: 25px" height=150></a>
<a href="http://espressif.com/en/products/hardware/esp32/overview"><img src="https://pbs.twimg.com/profile_images/863510403120222208/rjVOiTe3.jpg" alt="ESP32" align="left" style="margin-right: 25px" height=150></a>
> Both the [ESP8266](http://espressif.com/en/products/hardware/esp8266ex/overview) and the [ESP32](http://espressif.com/en/products/hardware/esp32/overview) are low-cost Wi-Fi microchips with full TCP/IP stack and microcontroller capabilities produced by the Shanghai-based manufacturer Espressif Systems.
> <br/>
> See [Contributing](contributing.md) for information on how to contribute to this list.
> <br/><br/>
---
<!--lint disable no-repeat-punctuation-->
<!--lint disable remark-lint-double-link-->
## Contents
- [Firmware](#firmware)
- [Tools](#tools)
- [Projects](#projects)
  - [Smart Home and IoT](#smart-home-and-iot)
  - [InfoSec](#infosec)
  - [Biomedical](#biomedical)
  - [Others](#others)
- [Libraries](#libraries)

## Firmware
- [Espressif AT](http://bbs.espressif.com/) - The default vanilla firmware for the ESP8266.
- [NodeMCU ![GitHub Repo stars](https://img.shields.io/github/stars/nodemcu/nodemcu-firmware) ![GitHub last commit](https://img.shields.io/github/last-commit/nodemcu/nodemcu-firmware)](https://github.com/nodemcu/nodemcu-firmware) - An eLua-based firmware for the ESP8266.
- [ESPBasic](http://www.esp8266basic.com/) - A BASIC firmware for easy and wireless programming, ready for the 8266.
- [MicroPython ![GitHub Repo stars](https://img.shields.io/github/stars/micropython/micropython) ![GitHub last commit](https://img.shields.io/github/last-commit/micropython/micropython)](https://github.com/micropython/micropython/) - An implemention of Python3 for the ESP8266 and 32.
- [ESP32 ![GitHub Repo stars](https://img.shields.io/github/stars/luc-github/ESP3D) ![GitHub last commit](https://img.shields.io/github/last-commit/luc-github/ESP3D)](https://github.com/luc-github/ESP3D) - An experimental firmware for 3D Printers, both the ESP32 and 8266.
- [Frankenstein ![GitHub Repo stars](https://img.shields.io/github/stars/nekromant/esp8266-frankenstein) ![GitHub last commit](https://img.shields.io/github/last-commit/nekromant/esp8266-frankenstein)](https://github.com/nekromant/esp8266-frankenstein) - A quick and dirty firmware with cool features for the ESP8266.
- [MongooseOS ![GitHub Repo stars](https://img.shields.io/github/stars/cesanta/mongoose-os) ![GitHub last commit](https://img.shields.io/github/last-commit/cesanta/mongoose-os)](https://github.com/cesanta/mongoose-os) - An IoT specific firmware, with both C and JS. Available for the ESP32/8266.
- [DeviceHive](https://devicehive.com/) - A firmware made as a client for DeviceHive's IoT data platform, only for the 8266.
- [RT-Thread ![GitHub Repo stars](https://img.shields.io/github/stars/RT-Thread/rt-thread) ![GitHub last commit](https://img.shields.io/github/last-commit/RT-Thread/rt-thread)](https://github.com/RT-Thread/rt-thread) - Chinese open source firmware available for the ESP32.
- [Sming Framework ![GitHub Repo stars](https://img.shields.io/github/stars/SmingHub/Sming) ![GitHub last commit](https://img.shields.io/github/last-commit/SmingHub/Sming)](https://github.com/SmingHub/Sming) - Superb C/C++ IoT Framework with support for ESP8266 and ESP32.  

## Tools
- [ESP Flash Tool](http://espressif.com/en/support/download/other-tools) - The vanilla firmware flasher for both ESP's.
- [Arduino Core/8266 ![GitHub Repo stars](https://img.shields.io/github/stars/esp8266/arduino) ![GitHub last commit](https://img.shields.io/github/last-commit/esp8266/arduino)](https://github.com/esp8266/arduino) - The Arduino core for the ESP8266.
- [Arduino Core/32 ![GitHub Repo stars](https://img.shields.io/github/stars/espressif/arduino-esp32) ![GitHub last commit](https://img.shields.io/github/last-commit/espressif/arduino-esp32)](https://github.com/espressif/arduino-esp32) - The other Arduino core for the ESP32.
- [ESPTool ![GitHub Repo stars](https://img.shields.io/github/stars/espressif/esptool) ![GitHub last commit](https://img.shields.io/github/last-commit/espressif/esptool)](https://github.com/espressif/esptool) - Espressif's command line tool for bootloader comms in both ESP's.
- [ESP-Open-SDK ![GitHub Repo stars](https://img.shields.io/github/stars/pfalcon/esp-open-sdk) ![GitHub last commit](https://img.shields.io/github/last-commit/pfalcon/esp-open-sdk)](https://github.com/pfalcon/esp-open-sdk) - An open SDK for the ESP8266.
- [ESPTool-ck ![GitHub Repo stars](https://img.shields.io/github/stars/igrr/esptool-ck) ![GitHub last commit](https://img.shields.io/github/last-commit/igrr/esptool-ck)](https://github.com/igrr/esptool-ck) - A CLI tool for flashing in the ESP8266.
- [ESPTool-gui ![GitHub Repo stars](https://img.shields.io/github/stars/Rodmg/esptool-gui) ![GitHub last commit](https://img.shields.io/github/last-commit/Rodmg/esptool-gui)](https://github.com/Rodmg/esptool-gui) - A flashing GUI tool based on ESPTool-ck.
- [NodeMCU Flasher ![GitHub Repo stars](https://img.shields.io/github/stars/nodemcu/nodemcu-flasher) ![GitHub last commit](https://img.shields.io/github/last-commit/nodemcu/nodemcu-flasher)](https://github.com/nodemcu/nodemcu-flasher) - NodeMCU's official flashing tool for its OS.
- [LuaNode ![GitHub Repo stars](https://img.shields.io/github/stars/Nicholas3388/LuaNode) ![GitHub last commit](https://img.shields.io/github/last-commit/Nicholas3388/LuaNode)](https://github.com/Nicholas3388/LuaNode) - A lua-only SDK for 32/8266.
- [Tuya-Convert ![GitHub Repo stars](https://img.shields.io/github/stars/ct-Open-Source/tuya-convert) ![GitHub last commit](https://img.shields.io/github/last-commit/ct-Open-Source/tuya-convert)](https://github.com/ct-Open-Source/tuya-convert) - A Wi-Fi firmware flasher ESP8266 that has been pre-loaded with Tuya firmware.
- [Tasmotizer ![GitHub Repo stars](https://img.shields.io/github/stars/tasmota/tasmotizer) ![GitHub last commit](https://img.shields.io/github/last-commit/tasmota/tasmotizer)](https://github.com/tasmota/tasmotizer) - A graphical flashing tool for Tasmota firmware. Can manage Wi-Fi & MQTT settings, modules & templates.
- [Arduino FS Plugin ![GitHub Repo stars](https://img.shields.io/github/stars/esp8266/arduino-esp8266fs-plugin) ![GitHub last commit](https://img.shields.io/github/last-commit/esp8266/arduino-esp8266fs-plugin)](https://github.com/esp8266/arduino-esp8266fs-plugin) - An Arduino plugin for filesystem uploads in the 8266.
- [PlatformIO ![GitHub Repo stars](https://img.shields.io/github/stars/platformio/platformio-core) ![GitHub last commit](https://img.shields.io/github/last-commit/platformio/platformio-core)](https://github.com/platformio/platformio-core) - Cross Platform IDE and Debugger that supports both the ESP32 and ESP8266.

## Projects
### Smart Home and IoT
- [OpenMQTTGateway ![GitHub Repo stars](https://img.shields.io/github/stars/1technophile/OpenMQTTGateway) ![GitHub last commit](https://img.shields.io/github/last-commit/1technophile/OpenMQTTGateway)](https://github.com/1technophile/OpenMQTTGateway) - An implementation of a multiprotocol MQTT gateway for both ESP's among other devices.
- [ESPHome](https://esphome.io/) - A full-featured system for controlling ESP's through simple yet powerful configuration files and Home Automation systems.
- [Tasmota](https://tasmota.github.io/docs/) - An alternative firmware for Sonoff & other ESP8266/ESP32 devices. Includes a large collection of sensor drivers & integrates with [Home Assistant](https://www.home-assistant.io/) natively or via MQTT.
- [Sonoff-Homekit ![GitHub Repo stars](https://img.shields.io/github/stars/Gruppio/Sonoff-Homekit) ![GitHub last commit](https://img.shields.io/github/last-commit/Gruppio/Sonoff-Homekit)](https://github.com/Gruppio/Sonoff-Homekit) - An alternative firmware for Sonoff devices (and other 8266 devices) which allows control through Apple's Homekit.
- [DoorsignEPD ![GitHub Repo stars](https://img.shields.io/github/stars/jamct/DoorsignEPD) ![GitHub last commit](https://img.shields.io/github/last-commit/jamct/DoorsignEPD)](https://github.com/jamct/DoorsignEPD) - A smart... doorsign with an E-Paper display using the ESP32.
- [EPaperWeatherDisplay ![GitHub Repo stars](https://img.shields.io/github/stars/henri98/esp32-e-paper-weatherdisplay) ![GitHub last commit](https://img.shields.io/github/last-commit/henri98/esp32-e-paper-weatherdisplay)](https://github.com/henri98/esp32-e-paper-weatherdisplay) - A very cute e-ink weather display using the ESP32.
- [SuperGreenOS ![GitHub Repo stars](https://img.shields.io/github/stars/supergreenlab/SuperGreenOS) ![GitHub last commit](https://img.shields.io/github/last-commit/supergreenlab/SuperGreenOS)](https://github.com/supergreenlab/SuperGreenOS) - A full-featured home farming automation software for the ESP32.
- [CanAirIO ![GitHub Repo stars](https://img.shields.io/github/stars/kike-canaries/canairio_firmware) ![GitHub last commit](https://img.shields.io/github/last-commit/kike-canaries/canairio_firmware)](https://github.com/kike-canaries/canairio_firmware#canairio-firmware) - Citizen science project that uses mobile and fixed stations to measure air quality with ESP32 and smartphones.

### InfoSec
- [ESP32-BLECollector ![GitHub Repo stars](https://img.shields.io/github/stars/tobozo/ESP32-BLECollector) ![GitHub last commit](https://img.shields.io/github/last-commit/tobozo/ESP32-BLECollector)](https://github.com/tobozo/ESP32-BLECollector) - A wardriving device which displays BLE devices and collects data from them, all in a nice screen interface.
- [ESP32Marauder ![GitHub Repo stars](https://img.shields.io/github/stars/justcallmekoko/ESP32Marauder) ![GitHub last commit](https://img.shields.io/github/last-commit/justcallmekoko/ESP32Marauder)](https://github.com/justcallmekoko/ESP32Marauder) - An integrated suite of offensive and defensive tools for WiFi and Bluetooth.
- [ArduinoPcap ![GitHub Repo stars](https://img.shields.io/github/stars/spacehuhn/ArduinoPcap) ![GitHub last commit](https://img.shields.io/github/last-commit/spacehuhn/ArduinoPcap)](https://github.com/spacehuhn/ArduinoPcap) - A library which allows generation of .pcap files with network traffic, for both ESP's.
- [WiFi Satellite](https://hackaday.io/project/28831-wifi-satellite-34c3) - A giant Wifi "satellite" that can monitor all 14 2.4Ghz channels using, well, 14 ESP32s.
- [ESP8266 Deauther ![GitHub Repo stars](https://img.shields.io/github/stars/spacehuhn/esp8266_deauther) ![GitHub last commit](https://img.shields.io/github/last-commit/spacehuhn/esp8266_deauther)](https://github.com/spacehuhn/esp8266_deauther) - A very cool pseudojammer (deauther) of Wifi networks that uses the ESP8266.
- [PacketMonitor ![GitHub Repo stars](https://img.shields.io/github/stars/spacehuhn/PacketMonitor32) ![GitHub last commit](https://img.shields.io/github/last-commit/spacehuhn/PacketMonitor32)](https://github.com/spacehuhn/PacketMonitor32) - A beautiful OLED monitor for packet activity in a WiFi channel. Two versions for each ESP.
- [WiFiDuck ![GitHub Repo stars](https://img.shields.io/github/stars/spacehuhn/WiFiDuck) ![GitHub last commit](https://img.shields.io/github/last-commit/spacehuhn/WiFiDuck)](https://github.com/spacehuhn/WiFiDuck) - A wireless-enabled keystroke injector, analogous, but even more awesome than the Rubber Ducky.
- [ESP8266 Beacon Spam ![GitHub Repo stars](https://img.shields.io/github/stars/spacehuhn/esp8266_beaconSpam) ![GitHub last commit](https://img.shields.io/github/last-commit/spacehuhn/esp8266_beaconSpam)](https://github.com/spacehuhn/esp8266_beaconSpam) - Want to confuse people? This device creates hundreds of fake WiFi networks.
- [DeauthDetector ![GitHub Repo stars](https://img.shields.io/github/stars/spacehuhn/DeauthDetector) ![GitHub last commit](https://img.shields.io/github/last-commit/spacehuhn/DeauthDetector)](https://github.com/spacehuhn/DeauthDetector) - A small device that shines a light if it detects a WiFi deauth attack. Made by the same guy as the last six projects.

### Biomedical
- [HeartyPatch](https://heartypatch.protocentral.com/) - A wearable BLE and WiFi connected ECG-HR patch which uses the ESP32.
- [HealthyPi v4](https://www.crowdsupply.com/protocentral/healthypi-v4-unplugged) - An amazing open source vital signs monitor that can monitor ECG, respiration, pulse oximetry and body temperature, all run by an ESP32.

### LoRa

- [Meshtastic](https://www.meshtastic.org/) - ESP32 LoRA boards as secure, long battery life, mesh GPS communicators.
- [ESP32-Paxcounter ![GitHub Repo stars](https://img.shields.io/github/stars/cyberman54/ESP32-Paxcounter) ![GitHub last commit](https://img.shields.io/github/last-commit/cyberman54/ESP32-Paxcounter)](https://github.com/cyberman54/ESP32-Paxcounter#esp32-paxcounter) Wifi & Bluetooth driven, LoRaWAN enabled, battery powered mini Paxcounter built on cheap ESP32 LoRa IoT boards
- [Disaster Radio](https://disaster.radio/) - A disaster-resilient communications network powered by the sun

### Others
- [Open SmartWatch](https://open-smartwatch.github.io/) - A FOSS smartwatch with GPS, an inertial unit and an extremely cool 3D-printed case.
- [SoftRF ![GitHub Repo stars](https://img.shields.io/github/stars/lyusupov/SoftRF) ![GitHub last commit](https://img.shields.io/github/last-commit/lyusupov/SoftRF)](https://github.com/lyusupov/SoftRF) - A DIY aviation proximity awareness system that can be used in UAV projects.
- [Retro ESP32 ![GitHub Repo stars](https://img.shields.io/github/stars/retro-esp32/RetroESP32) ![GitHub last commit](https://img.shields.io/github/last-commit/retro-esp32/RetroESP32)](https://github.com/retro-esp32/RetroESP32) - An extremely cool launcher for the Odroid Go (with the ESP32), which allows emulating several retro consoles.
- [PedalinoMini ![GitHub Repo stars](https://img.shields.io/github/stars/alf45tar/PedalinoMini) ![GitHub last commit](https://img.shields.io/github/last-commit/alf45tar/PedalinoMini)](https://github.com/alf45tar/PedalinoMini) - A wireless MIDI pedal controller for guitarists, built with the ESP32.
- [StickWatch ![GitHub Repo stars](https://img.shields.io/github/stars/eggfly/StickWatch) ![GitHub last commit](https://img.shields.io/github/last-commit/eggfly/StickWatch)](https://github.com/eggfly/StickWatch) - A smartwatch module based on the M5Stick, using the ESP32.
- [DroneBridge ![GitHub Repo stars](https://img.shields.io/github/stars/DroneBridge/ESP32) ![GitHub last commit](https://img.shields.io/github/last-commit/DroneBridge/ESP32)](https://github.com/DroneBridge/ESP32) - An implementation of DroneBridge, a signal link for drones and UAV's on the ESP32.
## Libraries
- [Wasm3 ![GitHub Repo stars](https://img.shields.io/github/stars/wasm3/wasm3) ![GitHub last commit](https://img.shields.io/github/last-commit/wasm3/wasm3)](https://github.com/wasm3/wasm3) - A lightning fast WebAssembly interpreter designed for embedded devices, compatible with both ESP's.
- [Homie8266 ![GitHub Repo stars](https://img.shields.io/github/stars/marvinroger/homie-esp8266) ![GitHub last commit](https://img.shields.io/github/last-commit/marvinroger/homie-esp8266)](https://github.com/marvinroger/homie-esp8266) - Framework implementation of the Homie protocol for the 8266.
- [ESP-Dash ![GitHub Repo stars](https://img.shields.io/github/stars/ayushsharma82/ESP-DASH) ![GitHub last commit](https://img.shields.io/github/last-commit/ayushsharma82/ESP-DASH)](https://github.com/ayushsharma82/ESP-DASH) - Beautiful and fast framework for creating remote dashboards in the 8266/32. No internet required.
- [ESP_mqtt ![GitHub Repo stars](https://img.shields.io/github/stars/tuanpmt/esp_mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/tuanpmt/esp_mqtt)](https://github.com/tuanpmt/esp_mqtt) - MQTT helper library for the ESP8266.
- [GUIslice ![GitHub Repo stars](https://img.shields.io/github/stars/ImpulseAdventure/GUIslice) ![GitHub last commit](https://img.shields.io/github/last-commit/ImpulseAdventure/GUIslice)](https://github.com/ImpulseAdventure/GUIslice) - A drag and drop GUI framework for several devices and screen controllers. Compatible with 8266 and 32.
- [MicroWebSrv2 ![GitHub Repo stars](https://img.shields.io/github/stars/jczic/MicroWebSrv2) ![GitHub last commit](https://img.shields.io/github/last-commit/jczic/MicroWebSrv2)](https://github.com/jczic/MicroWebSrv2) - A very powerful MicroPython web server which can be used in the ESP32.
- [IRremoteESP8266 ![GitHub Repo stars](https://img.shields.io/github/stars/markszabo/IRremoteESP8266) ![GitHub last commit](https://img.shields.io/github/last-commit/markszabo/IRremoteESP8266)](https://github.com/markszabo/IRremoteESP8266) - Emit and receive IR signals in the ESP8266.
- [esphomelib ![GitHub Repo stars](https://img.shields.io/github/stars/OttoWinter/esphomelib) ![GitHub last commit](https://img.shields.io/github/last-commit/OttoWinter/esphomelib)](https://github.com/OttoWinter/esphomelib) - Framework to integrate with HomeAssistant in the 8266.
- [TTS ![GitHub Repo stars](https://img.shields.io/github/stars/jscrane/TTS) ![GitHub last commit](https://img.shields.io/github/last-commit/jscrane/TTS)](https://github.com/jscrane/TTS) - A somehow good text to speech library for several Arduino devices, both ESP's included.
- [Free802.11 ![GitHub Repo stars](https://img.shields.io/github/stars/Jeija/esp32free80211) ![GitHub last commit](https://img.shields.io/github/last-commit/Jeija/esp32free80211)](https://github.com/Jeija/esp32free80211) - Library to emit arbitrary 802.11 signals with the ESP32.
- [Koyn ![GitHub Repo stars](https://img.shields.io/github/stars/elkrem/koyn) ![GitHub last commit](https://img.shields.io/github/last-commit/elkrem/koyn)](https://github.com/elkrem/koyn) - A decentralized Bitcoin library for the ESP32 and the ESP8266.
- [TFTLibrary ![GitHub Repo stars](https://img.shields.io/github/stars/loboris/ESP32_TFT_library) ![GitHub last commit](https://img.shields.io/github/last-commit/loboris/ESP32_TFT_library)](https://github.com/loboris/ESP32_TFT_library) - TFT compatibility for the ESP32.
- [UTFT-ESP ![GitHub Repo stars](https://img.shields.io/github/stars/gnulabis/UTFT-ESP) ![GitHub last commit](https://img.shields.io/github/last-commit/gnulabis/UTFT-ESP)](https://github.com/gnulabis/UTFT-ESP) - UTFT Support for the ESP32/8266.
- [ESPAudio ![GitHub Repo stars](https://img.shields.io/github/stars/earlephilhower/ESP8266Audio) ![GitHub last commit](https://img.shields.io/github/last-commit/earlephilhower/ESP8266Audio)](https://github.com/earlephilhower/ESP8266Audio) - Library for playing a diverse range of audio formats in the ESP8266/ESP32.
- [AsyncTCP ![GitHub Repo stars](https://img.shields.io/github/stars/me-no-dev/ESPAsyncTCP) ![GitHub last commit](https://img.shields.io/github/last-commit/me-no-dev/ESPAsyncTCP)](https://github.com/me-no-dev/ESPAsyncTCP) - Asynchronous TCP Library for both the 8266 and the 32.
- [ESP-HomeKit ![GitHub Repo stars](https://img.shields.io/github/stars/maximkulkin/esp-homekit) ![GitHub last commit](https://img.shields.io/github/last-commit/maximkulkin/esp-homekit)](https://github.com/maximkulkin/esp-homekit) - Homekit implementation for 8266 on RTOS.
- [ESPHelper ![GitHub Repo stars](https://img.shields.io/github/stars/ItKindaWorks/ESPHelper) ![GitHub last commit](https://img.shields.io/github/last-commit/ItKindaWorks/ESPHelper)](https://github.com/ItKindaWorks/ESPHelper) - MQTT and Wi-fi automation-oriented library for the 8266.
- [ESPHelper/32 ![GitHub Repo stars](https://img.shields.io/github/stars/ItKindaWorks/ESPHelper32) ![GitHub last commit](https://img.shields.io/github/last-commit/ItKindaWorks/ESPHelper32)](https://github.com/ItKindaWorks/ESPHelper32) - Port of the ESPHelper library for the 32.
- [ESP8266Wifi ![GitHub Repo stars](https://img.shields.io/github/stars/ekstrand/ESP8266wifi) ![GitHub last commit](https://img.shields.io/github/last-commit/ekstrand/ESP8266wifi)](https://github.com/ekstrand/ESP8266wifi) - Simple Arduino Wifi library for the 8266.
- [WiFiESP ![GitHub Repo stars](https://img.shields.io/github/stars/bportaluri/WiFiEsp) ![GitHub last commit](https://img.shields.io/github/last-commit/bportaluri/WiFiEsp)](https://github.com/bportaluri/WiFiEsp) - Arduino library for Wifi management, client/server for 8266 board.
- [TinyGSM ![GitHub Repo stars](https://img.shields.io/github/stars/vshymanskyy/TinyGSM) ![GitHub last commit](https://img.shields.io/github/last-commit/vshymanskyy/TinyGSM)](https://github.com/vshymanskyy/TinyGSM) - A quick and simple Arduino library for interaction with GSM modules which can also control the 8266 through AT commands.
- [mJS ![GitHub Repo stars](https://img.shields.io/github/stars/cesanta/mjs) ![GitHub last commit](https://img.shields.io/github/last-commit/cesanta/mjs)](https://github.com/cesanta/mjs) - A lightweight and restricted JS engine that is used by MongooseOS, compatible on the 32 and 8266.
- [ESPUI ![GitHub Repo stars](https://img.shields.io/github/stars/s00500/ESPUI) ![GitHub last commit](https://img.shields.io/github/last-commit/s00500/ESPUI)](https://github.com/s00500/ESPUI) - A simply library for making interactive web interfaces for both ESP's.
- [ESP32 ePaper ![GitHub Repo stars](https://img.shields.io/github/stars/loboris/ESP32_ePaper_example) ![GitHub last commit](https://img.shields.io/github/last-commit/loboris/ESP32_ePaper_example)](https://github.com/loboris/ESP32_ePaper_example) - A full-featured library for using ePaper modules with the ESP32.
- [TinyUPnP ![GitHub Repo stars](https://img.shields.io/github/stars/ofekp/TinyUPnP) ![GitHub last commit](https://img.shields.io/github/last-commit/ofekp/TinyUPnP)](https://github.com/ofekp/TinyUPnP) - A lightweight UPnP IGD library for automatic port forwarding on the 8266 and 32.
- [Esp32SSHClient ![GitHub Repo stars](https://img.shields.io/github/stars/J-Rios/Arduino-esp32sshclient) ![GitHub last commit](https://img.shields.io/github/last-commit/J-Rios/Arduino-esp32sshclient)](https://github.com/J-Rios/Arduino-esp32sshclient) - A library that implements a SSH client in the ESP32.
- [painlessMesh ![GitHub Repo stars](https://img.shields.io/github/stars/gmag11/painlessMesh) ![GitHub last commit](https://img.shields.io/github/last-commit/gmag11/painlessMesh)](https://github.com/gmag11/painlessMesh) - A library that takes care of the particulars of creating a simple mesh network using ESP8266 and ESP32 hardware.
- [WifiEspNow ![GitHub Repo stars](https://img.shields.io/github/stars/yoursunny/WifiEspNow) ![GitHub last commit](https://img.shields.io/github/last-commit/yoursunny/WifiEspNow)](https://github.com/yoursunny/WifiEspNow) - Arduino library for [ESP-NOW](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/network/esp_now.html), a connectionless WiFi communication protocol defined by [Espressif](https://github.com/espressif).
- [go-mcu ![GitHub Repo stars](https://img.shields.io/github/stars/matiasinsaurralde/go-mcu) ![GitHub last commit](https://img.shields.io/github/last-commit/matiasinsaurralde/go-mcu)](https://github.com/matiasinsaurralde/go-mcu) - Golang package for interacting with NodeMCU-based boards.
- [CanAirIO SensorLib ![GitHub Repo stars](https://img.shields.io/github/stars/kike-canaries/canairio_sensorlib) ![GitHub last commit](https://img.shields.io/github/last-commit/kike-canaries/canairio_sensorlib)](https://github.com/kike-canaries/canairio_sensorlib#canairio-air-quality-sensors-library) - ESP32/8266 library with auto-configuration of multiple PM2.5, CO2 and environment sensors.
- [Dhyara ![GitHub Repo stars](https://img.shields.io/github/stars/neel/dhyara) ![GitHub last commit](https://img.shields.io/github/last-commit/neel/dhyara)](https://github.com/neel/dhyara) - A C/C++ library for making a Mobile Ad hoc Network (MANET) using ESP Now.
