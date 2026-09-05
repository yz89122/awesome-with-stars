# Awesome Homematic [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> A curated list of Homematic related links

[Homematic](https://www.homematic.com/) is a series of Smart Home devices from the manufacturer [eQ-3](https://www.eq-3.de), popular especially in Germany.


## Contents

- [Community](#community)
- [Documentation](#documentation)
- [Mobile Apps](#mobile-apps)
- [CCU Alternatives](#ccu-alternatives)
- [Alternative Sensors and Actuators](#alternative-sensors-and-actuators)
- [CCU Addons](#ccu-addons)
- [Interfacing Software](#interfacing-software)
- [Misc Software](#misc-software)
- [Software Modules](#software-modules)
- [Smart Home Software](#smart-home-software-supporting-homematic)
- [Verschiedenes](#misc)
- [License](License)


## Community Ressources (mostly german language)

* [Haus Automatisierung](https://haus-automatisierung.com/) - News, Blog, Youtube, Tutorials, ...
* [Homematic Forum](https://homematic-forum.de/forum/) - Diskussions-Foren
* [Homematic Forum: Link/Skript-Sammlung](https://homematic-forum.de/forum/viewtopic.php?f=26&t=27907) - Curated link list by AndiN.
* [Homematic Forum: Addons & Tools Übersicht](https://homematic-forum.de/forum/viewtopic.php?t=46890) - Übersicht über Addons und Tools für CCU / OpenCCU.
* [Homematic Forum: HomeMatic - Tipps für Anfänger](https://homematic-forum.de/forum/viewtopic.php?f=31&t=22801) - Pflichtlektüre für Einsteiger von Sammy
* [Homematic Guru](https://homematic-guru.de/) - News, Blog, Tutorials und mehr.
* [Homematic Inside](https://www.homematic-inside.de/) - News, Blog, Tutorials und mehr (wird nicht weitergeführt, bleibt als Archiv online).
* [Homematic Blog Lison](https://homematic-blog.lison.ch/) - Blog, Tutorials und mehr..
* [Technikkram](https://technikkram.net) - News, Blog, Tutorials und mehr.
* [Verdrahtet](https://www.verdrahtet.info/) - News, Blog, Youtube, Tutorials, ...
* [Wikimatic](http://www.wikimatic.de/wiki/Hauptseite) - Community Wiki.


## Documentation

* [ccu-addon-howto ![GitHub Repo Stars](https://img.shields.io/github/stars/homematic-community/ccu-addon-howto) ![GitHub last commit](https://img.shields.io/github/last-commit/homematic-community/ccu-addon-howto)](https://github.com/homematic-community/ccu-addon-howto) - Howto für die Entwicklung von Addons für die Homematic CCU und OpenCCU.
* [Direktverknüpfungen im Expertenmodus](https://www.youtube.com/watch?v=1B4iwtK1Rmo) - Vortrag von Frank Grass.
* [Dissecting HomeMatic AES](https://git.zerfleddert.de/hmcfgusb/AES/) - BidCos Protocol AES Handshake description.
* [HomeMatic-Script Dokumentation](https://www.eq-3.de/downloads/download/homematic/hm_web_ui_doku/HM-Skript_Teil_1_Sprachbeschreibung_V2.3.pdf) - Offizielle Dokumentation von eQ-3: [Teil 1 Sprachbeschreibung](https://www.eq-3.de/downloads/download/homematic/hm_web_ui_doku/HM-Skript_Teil_1_Sprachbeschreibung_V2.3.pdf), [Teil 2 Objektmodell](https://www.eq-3.de/Downloads/eq3/download%20bereich/hm_web_ui_doku/HM_Script_Teil_2_Objektmodell_V1.2.pdf), [Teil 3 Beispiele](https://www.eq-3.de/Downloads/eq3/download%20bereich/hm_web_ui_doku/HM_Script_Teil_3_Beispiele_V1.1.pdf), [Teil 4 Datenpunkte](https://www.eq-3.de/Downloads/eq3/download%20bereich/hm_web_ui_doku/HM-Script_4-Datenpunkte.pdf).
* [HomeMatic XML-RPC API](https://www.eq-3.de/Downloads/eq3/download%20bereich/hm_web_ui_doku/HM_XmlRpc_API.pdf) - Offizielle Spezifikation der XML-RPC Schnittstelle der Interface-Prozesse von eQ-3.
* [Keymatic Konfiguration](https://homematic-forum.de/forum/viewtopic.php?f=31&t=19196) - Beitrag von rewe0815 im Homematic Forum.
* [OpenCCU Wiki ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenCCU/OpenCCU) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenCCU/OpenCCU)](https://github.com/OpenCCU/OpenCCU/wiki) - Installation, Administration und Nutzung von OpenCCU.
* [Script Documentation](http://www.wikimatic.de/wiki/Script_Dokumentation) - Inoffizielle Homematic Script Referenz.
* [Virtuelle Aktorkanäle](https://www.youtube.com/watch?v=Cwxwtig6Q1I) - Vortrag von Frank Grass.

## Mobile Apps

* [@home](https://www.athomeapp.de/) - iOS - (💵 inApp-Purchase um Werbung zu entfernen)
* [HistClient](https://www.sa-com.de/smarthome-special/histclient-handbuch/) - (💵 inApp-Purchase) - CCU-Historian Client mit erweitereten Features für iOS und Android
* [TinyMatic](https://www.tinymatic.de/) - 💵 Android (ehemals: HomeDroid)
* [Pocket Control](https://www.penzler.de) - 💵 iOS
* [Battery Status for HomeMatic](https://zeezide.com/en/products/hmbattery/) - 💵 iOS


## CCU Alternatives

* [debmatic ![GitHub Repo Stars](https://img.shields.io/github/stars/alexreinert/debmatic) ![GitHub last commit](https://img.shields.io/github/last-commit/alexreinert/debmatic)](https://github.com/alexreinert/debmatic) - Install the Homematic OCCU on Debian based amd64, armhf and arm64 systems (Debian, Ubuntu, Raspbian, Armbian)
* [Homegear](https://homegear.eu/index.php/Main_Page) - Free and open source program to interface your smart home devices with your home automation software or your own scripts.
* [OCCU ![GitHub Repo Stars](https://img.shields.io/github/stars/eq-3/occu) ![GitHub last commit](https://img.shields.io/github/last-commit/eq-3/occu)](https://github.com/eq-3/occu) - The HM-OCCU-SDK published by eQ-3, the base of debmatic, piVCCU and OpenCCU.
* [OpenCCU ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenCCU/OpenCCU) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenCCU/OpenCCU)](https://github.com/OpenCCU/OpenCCU) - Lightweight, OCCU and Linux/buildroot-based distribution for running a HomeMatic CCU on embedded devices like the RaspberryPi, x86/ARM or as virtual appliance (formerly known as RaspberryMatic).
* [piVCCU ![GitHub Repo Stars](https://img.shields.io/github/stars/alexreinert/piVCCU) ![GitHub last commit](https://img.shields.io/github/last-commit/alexreinert/piVCCU)](https://github.com/alexreinert/piVCCU) - Install the original Homematic CCU firmware inside a virtualized container (lxc) on Raspbian or Armbian.


## Alternative Sensors, Actuators and Hardware Modifications

* [AskSin++](https://asksinpp.de/) - Dokumentation, Sketche und Community-Projekte rund um Selbstbau-Komponenten für HomeMatic auf Basis von Arduino/STM32 und CC1101.
* [AskSinPPCollection](https://jp112sdl.github.io/AskSinPPCollection/) - Einführung, Dokumentation und Projekte rund um Selbstbau-Komponenten mit AskSinPP
* [Beispiel_AskSinPP ![GitHub Repo Stars](https://img.shields.io/github/stars/jp112sdl/Beispiel_AskSinPP) ![GitHub last commit](https://img.shields.io/github/last-commit/jp112sdl/Beispiel_AskSinPP)](https://github.com/jp112sdl/Beispiel_AskSinPP) - Beispiel Sketche für die Verwendung der [AskSinPP ![GitHub Repo Stars](https://img.shields.io/github/stars/pa-pa/AskSinPP) ![GitHub last commit](https://img.shields.io/github/last-commit/pa-pa/AskSinPP)](https://github.com/pa-pa/AskSinPP) Bibliothek
* [HAUS-BUS.DE](http://www.haus-bus.de/) - 💵 Homematic Wired kompatible Geräte.
* [HB-RF-ETH ![GitHub Repo Stars](https://img.shields.io/github/stars/alexreinert/HB-RF-ETH) ![GitHub last commit](https://img.shields.io/github/last-commit/alexreinert/HB-RF-ETH)](https://github.com/alexreinert/HB-RF-ETH) - Platine und Firmware um ein Homematic Funkmodul (HM-MOD-RPI-PCB, RPI-RF-MOD) per Netzwerk an debmatic oder piVCCU anzubinden.
* [HB-RF-ETH-ng ![GitHub Repo Stars](https://img.shields.io/github/stars/Xerolux/HB-RF-ETH-ng) ![GitHub last commit](https://img.shields.io/github/last-commit/Xerolux/HB-RF-ETH-ng)](https://github.com/Xerolux/HB-RF-ETH-ng) - Modernisierte Next-Generation-Firmware für die HB-RF-ETH Platine mit neuer Weboberfläche und MQTT-Monitoring.
* [HB-UNI-Sen-WEA ![GitHub Repo Stars](https://img.shields.io/github/stars/jp112sdl/HB-UNI-Sen-WEA) ![GitHub last commit](https://img.shields.io/github/last-commit/jp112sdl/HB-UNI-Sen-WEA)](https://github.com/jp112sdl/HB-UNI-Sen-WEA) - Selbstbau-Wetterstation für HomeMatic.
* [Homematic Wired Hombrew Hardware](https://github.com/jfische) - Verschiedene Homebrew Sensoren/Aktoren für Homematic Wired.
* [stall.biz](https://www.stall.biz/) - 💵 Alternative Antennen, Multi Sensor für das Wohnzimmer, Wetterstation, ...


## CCU Addons

* [CCU Historian](https://ccu-historian.de/) - Langzeit Archiv und Graphen.
* [ccu-addon-mui ![GitHub Repo Stars](https://img.shields.io/github/stars/firsttris/ccu-addon-mui) ![GitHub last commit](https://img.shields.io/github/last-commit/firsttris/ccu-addon-mui)](https://github.com/firsttris/ccu-addon-mui) - Moderne, responsive Progressive Web App (PWA) für die CCU3 mit integriertem WebSocket-Server.
* [CUxD ![GitHub Repo Stars](https://img.shields.io/github/stars/jens-maus/cuxd) ![GitHub last commit](https://img.shields.io/github/last-commit/jens-maus/cuxd)](https://github.com/jens-maus/cuxd) - Der "Leatherman" f��r die CCU. Verbindet FS20, ... (💵 EnOcean, ...), stellt virtuelle Geräte und hilfreiche Tools zur Verfügung.
* [CUxD-Highcharts ![GitHub Repo Stars](https://img.shields.io/github/stars/homematic-community/CUxD-Highcharts) ![GitHub last commit](https://img.shields.io/github/last-commit/homematic-community/CUxD-Highcharts)](https://github.com/homematic-community/CUxD-Highcharts) - Visualisiert CUxD DEVLOGS mit Highcharts/Highstock (verwaist, Maintainer gesucht).
* [Email ![GitHub Repo Stars](https://img.shields.io/github/stars/homematic-community/hm_email) ![GitHub last commit](https://img.shields.io/github/last-commit/homematic-community/hm_email)](https://github.com/homematic-community/hm_email) - HomeMatic CCU Addon für den Email Versand.
* [HAP-HomeMatic ![GitHub Repo Stars](https://img.shields.io/github/stars/thkl/hap-homematic) ![GitHub last commit](https://img.shields.io/github/last-commit/thkl/hap-homematic)](https://github.com/thkl/hap-homematic) - OpenCCU / CCU3 addon to access your HomeMatic devices from HomeKit. Its much like https://github.com/thkl/homebridge-homematic but without homebridge (archived).
* [hm-influxdb2 ![GitHub Repo Stars](https://img.shields.io/github/stars/cthil/hm-influxdb2) ![GitHub last commit](https://img.shields.io/github/last-commit/cthil/hm-influxdb2)](https://github.com/cthil/hm-influxdb2) - Addon for the CCU3/OpenCCU to log data from devices into an InfluxDB2.
* [hm-print ![GitHub Repo Stars](https://img.shields.io/github/stars/homematic-community/hm-print) ![GitHub last commit](https://img.shields.io/github/last-commit/homematic-community/hm-print)](https://github.com/homematic-community/hm-print) - CCU Programme drucken.
* [hm-sonos ![GitHub Repo Stars](https://img.shields.io/github/stars/homematic-community/hm-sonos) ![GitHub last commit](https://img.shields.io/github/last-commit/homematic-community/hm-sonos)](https://github.com/homematic-community/hm-sonos) - HomeMatic CCU Addon zur Steuerung von Sonos Playern.
* [hm-tools ![GitHub Repo Stars](https://img.shields.io/github/stars/fhetty/hm-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/fhetty/hm-tools)](https://github.com/fhetty/hm-tools) - Sammlung von Tools für OpenCCU.
* [hm_pdetect ![GitHub Repo Stars](https://img.shields.io/github/stars/homematic-community/hm_pdetect) ![GitHub last commit](https://img.shields.io/github/last-commit/homematic-community/hm_pdetect)](https://github.com/homematic-community/hm_pdetect) - Anwesenheitserkennung über die FRITZ!-Box
* [Homematic-addon-hue ![GitHub Repo Stars](https://img.shields.io/github/stars/j-a-n/homematic-addon-hue) ![GitHub last commit](https://img.shields.io/github/last-commit/j-a-n/homematic-addon-hue)](https://github.com/j-a-n/homematic-addon-hue) - HomeMatic Addon für Philips Hue (archiviert).
* [homematic_check_mk ![GitHub Repo Stars](https://img.shields.io/github/stars/alexreinert/homematic_check_mk) ![GitHub last commit](https://img.shields.io/github/last-commit/alexreinert/homematic_check_mk)](https://github.com/alexreinert/homematic_check_mk) - Addon for the Homematic CCU2 or an OpenCCU device which acts as an check_mk_agent.
* [homematic-node-exporter ![GitHub Repo Stars](https://img.shields.io/github/stars/jaroschek/homematic-node-exporter) ![GitHub last commit](https://img.shields.io/github/last-commit/jaroschek/homematic-node-exporter)](https://github.com/jaroschek/homematic-node-exporter) - Prometheus Node Exporter packaged as Addon for the Homematic CCU3 and OpenCCU.
* [HQ-WebUI ![GitHub Repo Stars](https://img.shields.io/github/stars/homematic-community/hq-webui) ![GitHub last commit](https://img.shields.io/github/last-commit/homematic-community/hq-webui)](https://github.com/homematic-community/hq-webui) - Schnelles alternatives WebUI für die Homematic CCU mit Skript-Editor (verwaist, Maintainer gesucht).
* [JP-HB-Devices-addon ![GitHub Repo Stars](https://img.shields.io/github/stars/jp112sdl/JP-HB-Devices-addon) ![GitHub last commit](https://img.shields.io/github/last-commit/jp112sdl/JP-HB-Devices-addon)](https://github.com/jp112sdl/JP-HB-Devices-addon) - Addon das über 80 Selbstbau-Geräte (AskSinPP HomeBrew) in die CCU/OpenCCU Firmware integriert.
* [jq ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/ccu-addon-jq) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/ccu-addon-jq)](https://github.com/hobbyquaker/ccu-addon-jq) - jq packaged as Addon for the Homematic CCU3.
* [Mosquitto ![GitHub Repo Stars](https://img.shields.io/github/stars/homematic-community/ccu-addon-mosquitto) ![GitHub last commit](https://img.shields.io/github/last-commit/homematic-community/ccu-addon-mosquitto)](https://github.com/homematic-community/ccu-addon-mosquitto) - Mosquitto packaged as Addon for the Homematic CCU3 and OpenCCU
* [Patcher ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/Patcher) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/Patcher)](https://github.com/hobbyquaker/Patcher) - CCU3 Addon zur komfortablen Anwendung von Patches.
* [Redis ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/ccu-addon-redis) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/ccu-addon-redis)](https://github.com/hobbyquaker/ccu-addon-redis) - Redis packaged as Addon for the Homematic CCU3 and OpenCCU
* [RedMatic ![GitHub Repo Stars](https://img.shields.io/github/stars/rdmtc/RedMatic) ![GitHub last commit](https://img.shields.io/github/last-commit/rdmtc/RedMatic)](https://github.com/rdmtc/RedMatic) - [Node-RED](https://nodered.org/) als Addon für die Homematic CCU3 und OpenCCU. Liefert u.A. komfortable HomeKit-Integration und spezielle Nodes zur Anbindung der CCU an MQTT mit.
* [ScriptParser ![GitHub Repo Stars](https://img.shields.io/github/stars/homematic-community/scriptparser) ![GitHub last commit](https://img.shields.io/github/last-commit/homematic-community/scriptparser)](https://github.com/homematic-community/scriptparser) - Addon zur Syntaxprüfung von HomeMatic Skripten.
* [WebMatic ![GitHub Repo Stars](https://img.shields.io/github/stars/ldittmar81/webmatic) ![GitHub last commit](https://img.shields.io/github/last-commit/ldittmar81/webmatic)](https://github.com/ldittmar81/webmatic) - Alternative, für Mobilgeräte optimierte Bedienoberfläche, läuft direkt auf der CCU.
* [XML-API ![GitHub Repo Stars](https://img.shields.io/github/stars/homematic-community/XML-API) ![GitHub last commit](https://img.shields.io/github/last-commit/homematic-community/XML-API)](https://github.com/homematic-community/XML-API) - Vereinfachter CCU Zugriff via HTTP/XML.


## Interfacing Software

* [CCU-AI-MCP ![GitHub Repo Stars](https://img.shields.io/github/stars/mdzio/ccu-ai-mcp) ![GitHub last commit](https://img.shields.io/github/last-commit/mdzio/ccu-ai-mcp)](https://github.com/mdzio/ccu-ai-mcp) - MCP-Server für OpenCCU/CCU, gibt KI-Assistenten (LLMs) über konfigurierbare HM-Skripte Zugriff auf das Smart Home.
* [CCU-Jack ![GitHub Repo Stars](https://img.shields.io/github/stars/mdzio/ccu-jack) ![GitHub last commit](https://img.shields.io/github/last-commit/mdzio/ccu-jack)](https://github.com/mdzio/ccu-jack) - CCU-Jack bietet einen einfachen und sicheren REST-basierten Zugriff auf die CCU, auch als Addon verfügbar.
* [ccu-mcp ![GitHub Repo Stars](https://img.shields.io/github/stars/claymore666/ccu-mcp) ![GitHub last commit](https://img.shields.io/github/last-commit/claymore666/ccu-mcp)](https://github.com/claymore666/ccu-mcp) - MCP server enabling AI assistants to control Homematic devices via the CCU's JSON-RPC API, no addon required.
* [hm2mqtt.js ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/hm2mqtt.js) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/hm2mqtt.js)](https://github.com/hobbyquaker/hm2mqtt.js) - Node.js based interface between Homematic and MQTT.
* [homebridge-homematic ![GitHub Repo Stars](https://img.shields.io/github/stars/thkl/homebridge-homematic) ![GitHub last commit](https://img.shields.io/github/last-commit/thkl/homebridge-homematic)](https://github.com/thkl/homebridge-homematic) - [Homebridge ![GitHub Repo Stars](https://img.shields.io/github/stars/nfarina/homebridge) ![GitHub last commit](https://img.shields.io/github/last-commit/nfarina/homebridge)](https://github.com/nfarina/homebridge) Plugin zur Einbindung von Homematic Geräten in HomeKit.
* [homebridge-homematicip ![GitHub Repo Stars](https://img.shields.io/github/stars/marcsowen/homebridge-homematicip) ![GitHub last commit](https://img.shields.io/github/last-commit/marcsowen/homebridge-homematicip)](https://github.com/marcsowen/homebridge-homematicip) - [Homebridge ![GitHub Repo Stars](https://img.shields.io/github/stars/nfarina/homebridge) ![GitHub last commit](https://img.shields.io/github/last-commit/nfarina/homebridge)](https://github.com/nfarina/homebridge) Plugin zur Einbindung von Homematic IP mit HmIP-HAP via Cloud.
* [homematicip-hcu ![GitHub Repo Stars](https://img.shields.io/github/stars/Ediminator/homematicip-hcu) ![GitHub last commit](https://img.shields.io/github/last-commit/Ediminator/homematicip-hcu)](https://github.com/Ediminator/homematicip-hcu) - [Home Assistant](https://www.home-assistant.io/) Integration zur lokalen Anbindung der Homematic IP Home Control Unit (HCU) ohne Cloud.
* [homematicip_local ![GitHub Repo Stars](https://img.shields.io/github/stars/SukramJ/homematicip_local) ![GitHub last commit](https://img.shields.io/github/last-commit/SukramJ/homematicip_local)](https://github.com/SukramJ/homematicip_local) - [Home Assistant](https://www.home-assistant.io/) Custom Component zur lokalen Anbindung von CCU/OpenCCU (Homematic und Homematic IP), basiert auf aiohomematic.
* [matterbridge-homematic ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/matterbridge-homematic) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/matterbridge-homematic)](https://github.com/hobbyquaker/matterbridge-homematic) - [Matterbridge ![GitHub Repo Stars](https://img.shields.io/github/stars/Luligu/matterbridge) ![GitHub last commit](https://img.shields.io/github/last-commit/Luligu/matterbridge)](https://github.com/Luligu/matterbridge) Plugin to bridge a Homematic CCU's devices to the Matter ecosystem.
* [node-red-contrib-ccu ![GitHub Repo Stars](https://img.shields.io/github/stars/rdmtc/node-red-contrib-ccu) ![GitHub last commit](https://img.shields.io/github/last-commit/rdmtc/node-red-contrib-ccu)](https://github.com/rdmtc/node-red-contrib-ccu) - [Node-RED](https://nodered.org) Nodes for the Homematic CCU.
* [OpenCCU-Loom ![GitHub Repo Stars](https://img.shields.io/github/stars/SukramJ/openccu-loom) ![GitHub last commit](https://img.shields.io/github/last-commit/SukramJ/openccu-loom)](https://github.com/SukramJ/openccu-loom) - Standalone Go daemon bridging Homematic / Homematic IP CCUs to MQTT (with Home Assistant Discovery), REST + WebSocket, an MCP server and a native Matter bridge.
* [RedMatic-HomeKit ![GitHub Repo Stars](https://img.shields.io/github/stars/rdmtc/RedMatic-HomeKit) ![GitHub last commit](https://img.shields.io/github/last-commit/rdmtc/RedMatic-HomeKit)](https://github.com/rdmtc/RedMatic-HomeKit) - HAP-Nodejs basierte Node-RED Nodes um (Homematic-)Geräte in HomeKit einzubinden.
* [RedMatic-Matter ![GitHub Repo Stars](https://img.shields.io/github/stars/rdmtc/RedMatic-Matter) ![GitHub last commit](https://img.shields.io/github/last-commit/rdmtc/RedMatic-Matter)](https://github.com/rdmtc/RedMatic-Matter) - Matter.js basierte Node-RED Nodes, die Homematic-Geräte und beliebige Node-RED-Daten als Matter-Bridge bereitstellen.



## Misc Software

* [check_homematic ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/check_homematic) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/check_homematic)](https://github.com/hobbyquaker/check_homematic) - Nagios/Icinga Plugin for checking Homematic CCU.
* [godevccu ![GitHub Repo Stars](https://img.shields.io/github/stars/SukramJ/godevccu) ![GitHub last commit](https://img.shields.io/github/last-commit/SukramJ/godevccu)](https://github.com/SukramJ/godevccu) - Virtual HomeMatic CCU with XML-RPC and JSON-RPC servers written in Go, single static binary for testing integrations.
* [hm-buildroot ![GitHub Repo Stars](https://img.shields.io/github/stars/homematic-community/hm-buildroot) ![GitHub last commit](https://img.shields.io/github/last-commit/homematic-community/hm-buildroot)](https://github.com/homematic-community/hm-buildroot) - Buildroot environments / cross compiler toolchains to build native applications for the CCU and OpenCCU.
* [HM-Explorer ![GitHub Repo Stars](https://img.shields.io/github/stars/thkl/HM-Explorer) ![GitHub last commit](https://img.shields.io/github/last-commit/thkl/HM-Explorer)](https://github.com/thkl/HM-Explorer) - Electron based helper app for the Homematic CCU (macOS/Windows).
* [hm-simulator ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/hm-simulator) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/hm-simulator)](https://github.com/hobbyquaker/hm-simulator) - Simulates (partly) a Homematic CCU.
* [hmcfgusb](https://git.zerfleddert.de/cgi-bin/gitweb.cgi/hmcfgusb) - Utilities to use the HM-CFG-USB(2) on Linux/Unix.
* [HMDeviceFirmware ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenCCU/HMDeviceFirmware) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenCCU/HMDeviceFirmware)](https://github.com/OpenCCU/HMDeviceFirmware) - Archive of current and past firmware update files for HomeMatic and Homematic IP devices.
* [hmGetInfo ![GitHub Repo Stars](https://img.shields.io/github/stars/homematic-community/hmGetInfo) ![GitHub last commit](https://img.shields.io/github/last-commit/homematic-community/hmGetInfo)](https://github.com/homematic-community/hmGetInfo) - Collect paramsets and paramsetDescriptions from your Homematic CCU as JSON.
* [HMScriptEditor](https://zeezide.com/en/products/hmscripteditor/) - A very simple macOS editor and runner for HomeMatic ("Rega") scripts.
* [HomeHub ![GitHub Repo Stars](https://img.shields.io/github/stars/homematic-community/homehub) ![GitHub last commit](https://img.shields.io/github/last-commit/homematic-community/homehub)](https://github.com/homematic-community/homehub) - PHP/XML-API basiertes Webfrontend. [Forum](https://homematic-forum.de/forum/viewtopic.php?f=41&t=50538)
* [Homematic Script Language](https://marketplace.visualstudio.com/items?itemName=HeadCrash.hmscript-language-vscode) - Visual Studio Code extension providing syntax highlighting for HomeMatic Script (.hms) files.
* [homematic-manager ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/homematic-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/homematic-manager)](https://github.com/hobbyquaker/homematic-manager) - Manage homematic interface processes (rfd/hs485d/homegear).
* [language-homematic ![GitHub Repo Stars](https://img.shields.io/github/stars/Ayngush/language-homematic) ![GitHub last commit](https://img.shields.io/github/last-commit/Ayngush/language-homematic)](https://github.com/Ayngush/language-homematic) - Adds syntax highlighting and snippets to HomeMatic Script files in Atom.
* [pydevccu ![GitHub Repo Stars](https://img.shields.io/github/stars/SukramJ/pydevccu) ![GitHub last commit](https://img.shields.io/github/last-commit/SukramJ/pydevccu)](https://github.com/SukramJ/pydevccu) - Virtual HomeMatic CCU XML-RPC and JSON-RPC server with fake devices for development and testing.
* [ReGaHss-Test ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenCCU/ReGaHss-Test) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenCCU/ReGaHss-Test)](https://github.com/OpenCCU/ReGaHss-Test) - Automated System Tests of ReGaHss - the HomeMatic (O)CCU "Logic Layer" (formerly occu-test).

## Software Modules

* [aiohomematic ![GitHub Repo Stars](https://img.shields.io/github/stars/SukramJ/aiohomematic) ![GitHub last commit](https://img.shields.io/github/last-commit/SukramJ/aiohomematic)](https://github.com/SukramJ/aiohomematic) - Python 3 interface to interact with Homematic devices via XML-RPC and JSON-RPC, successor of [pyhomematic ![GitHub Repo Stars](https://img.shields.io/github/stars/danielperna84/pyhomematic) ![GitHub last commit](https://img.shields.io/github/last-commit/danielperna84/pyhomematic)](https://github.com/danielperna84/pyhomematic) and base of homematicip_local.
* [binrpc ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/binrpc) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/binrpc)](https://github.com/hobbyquaker/binrpc) - Xmlrpc_bin protocol client and server Node.js module.
* [go-hmccu ![GitHub Repo Stars](https://img.shields.io/github/stars/mdzio/go-hmccu) ![GitHub last commit](https://img.shields.io/github/last-commit/mdzio/go-hmccu)](https://github.com/mdzio/go-hmccu) - Go library for interfacing the CCU.
* [hm-discover ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/hm-discover) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/hm-discover)](https://github.com/hobbyquaker/hm-discover) - Node.js module to discover Homematic CCUs and interfaces.
* [Homematic IP Connect API ![GitHub Repo Stars](https://img.shields.io/github/stars/homematicip/connect-api) ![GitHub last commit](https://img.shields.io/github/last-commit/homematicip/connect-api)](https://github.com/homematicip/connect-api) - Official WebSocket API and example plugins (Java, Node.js) for developing plugins for the Homematic IP Home Control Unit (HCU).
* [homematic-gqls ![GitHub Repo Stars](https://img.shields.io/github/stars/martin-riedl/homematic-gqls) ![GitHub last commit](https://img.shields.io/github/last-commit/martin-riedl/homematic-gqls)](https://github.com/martin-riedl/homematic-gqls) - A GraphQL service to query Homematic IP components based on [homematicip-rest-api ![GitHub Repo Stars](https://img.shields.io/github/stars/hahn-th/homematicip-rest-api) ![GitHub last commit](https://img.shields.io/github/last-commit/hahn-th/homematicip-rest-api)](https://github.com/hahn-th/homematicip-rest-api).
* [homematic-rega ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/homematic-rega) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/homematic-rega)](https://github.com/hobbyquaker/homematic-rega) - Node.js Homematic CCU ReGaHSS Remote Script Interface.
* [homematic-xmlrpc ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/homematic-xmlrpc) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/homematic-xmlrpc)](https://github.com/hobbyquaker/homematic-xmlrpc) - Xmlrpc client and server Node.js module.
* [homematicip-rest-api ![GitHub Repo Stars](https://img.shields.io/github/stars/hahn-th/homematicip-rest-api) ![GitHub last commit](https://img.shields.io/github/last-commit/hahn-th/homematicip-rest-api)](https://github.com/hahn-th/homematicip-rest-api) - Python wrapper for the homematicIP REST API (Cloud / Access Point Based).
* [openccu-loom-client ![GitHub Repo Stars](https://img.shields.io/github/stars/SukramJ/openccu-loom-client) ![GitHub last commit](https://img.shields.io/github/last-commit/SukramJ/openccu-loom-client)](https://github.com/SukramJ/openccu-loom-client) - Async Python REST + WebSocket client for the OpenCCU-Loom daemon.
* [pmatic ![GitHub Repo Stars](https://img.shields.io/github/stars/LarsMichelsen/pmatic) ![GitHub last commit](https://img.shields.io/github/last-commit/LarsMichelsen/pmatic)](https://github.com/LarsMichelsen/pmatic) - Python API for Homematic. Easy to use.

## Smart Home Software supporting Homematic

* [FHEM](https://fhem.de/) - via [HMCCU](https://wiki.fhem.de/wiki/HMCCU) Modul.
* [Home Assistant](https://www.home-assistant.io/) - via [homematicip_local ![GitHub Repo Stars](https://img.shields.io/github/stars/SukramJ/homematicip_local) ![GitHub last commit](https://img.shields.io/github/last-commit/SukramJ/homematicip_local)](https://github.com/SukramJ/homematicip_local) (CCU/OpenCCU) oder [homematicip-hcu ![GitHub Repo Stars](https://img.shields.io/github/stars/Ediminator/homematicip-hcu) ![GitHub last commit](https://img.shields.io/github/last-commit/Ediminator/homematicip-hcu)](https://github.com/Ediminator/homematicip-hcu) (HCU).
* [ioBroker](https://www.iobroker.net/?lang=de) - via [hm-rpc ![GitHub Repo Stars](https://img.shields.io/github/stars/ioBroker/ioBroker.hm-rpc) ![GitHub last commit](https://img.shields.io/github/last-commit/ioBroker/ioBroker.hm-rpc)](https://github.com/ioBroker/ioBroker.hm-rpc) (Interface-Prozesse) und [hm-rega ![GitHub Repo Stars](https://img.shields.io/github/stars/ioBroker/ioBroker.hm-rega) ![GitHub last commit](https://img.shields.io/github/last-commit/ioBroker/ioBroker.hm-rega)](https://github.com/ioBroker/ioBroker.hm-rega) (ReGaHSS) Adapter, [hmip ![GitHub Repo Stars](https://img.shields.io/github/stars/iobroker-community-adapters/ioBroker.hmip) ![GitHub last commit](https://img.shields.io/github/last-commit/iobroker-community-adapters/ioBroker.hmip)](https://github.com/iobroker-community-adapters/ioBroker.hmip) für den Homematic IP Cloud Access Point.
* [IP-Symcon](https://www.symcon.de/) - 💵
* [Mediola](https://www.mediola.com/) - 💵
* [OpenHAB](https://www.openhab.org/) - via [Homematic Binding](https://www.openhab.org/addons/bindings/homematic/).
* [Pimatic](https://pimatic.org/)
* [SmartHomeNG](https://www.smarthomeng.de/) - via [Plugins ![GitHub Repo Stars](https://img.shields.io/github/stars/smarthomeNG/plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/smarthomeNG/plugins)](https://github.com/smarthomeNG/plugins).

## Misc

* [AskSinAnalyzer ![GitHub Repo Stars](https://img.shields.io/github/stars/jp112sdl/AskSinAnalyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/jp112sdl/AskSinAnalyzer)](https://github.com/jp112sdl/AskSinAnalyzer) - Funktelegramm-Dekodierer für den Einsatz in HomeMatic Umgebungen, hilfreich zur Fehlersuche, z.B. wenn der DutyCycle zu hoch ist.
* [AskSinAnalyzerXS ![GitHub Repo Stars](https://img.shields.io/github/stars/psi-4ward/AskSinAnalyzerXS) ![GitHub last commit](https://img.shields.io/github/last-commit/psi-4ward/AskSinAnalyzerXS)](https://github.com/psi-4ward/AskSinAnalyzerXS) - AskSinAnalyzer als Desktop App, verzichtet auf den Einsatz eines ESP.
* [eagle-homematic ![GitHub Repo Stars](https://img.shields.io/github/stars/dersimn/eagle-homematic) ![GitHub last commit](https://img.shields.io/github/last-commit/dersimn/eagle-homematic)](https://github.com/dersimn/eagle-homematic) - Homematic Modul Eagle Bibliothek.
* [Tablet Wallmount](https://homematic-forum.de/forum/viewtopic.php?f=18&t=49421) - Rahmen für Unterputzmontage von Tablets.
* [Homematic 3D Druck Collection auf Thingiverse](https://www.thingiverse.com/hobbyquaker/collections/homematic) - Diverse Teile rund um Homematic zum selbst drucken.


## Contribute

Contributions welcome! Read the [contribution guidelines](contributing.md) first.


## License

[Public Domain CC0](https://creativecommons.org/publicdomain/zero/1.0/)
