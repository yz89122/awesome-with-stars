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
* [Homematic Forum: HomeMatic - Tipps für Anfänger](https://homematic-forum.de/forum/viewtopic.php?f=31&t=22801) - Pflichtlektüre für Einsteiger von Sammy
* [Homematic Guru](https://homematic-guru.de/) - News, Blog, Tutorials und mehr.
* [Homematic Inside](https://www.homematic-inside.de/) - News, Blog, Tutorials und mehr.
* [Homematic Blog Lison](https://homematic-blog.lison.ch/) - Blog, Tutorials und mehr..
* [Technikkram](https://technikkram.net) - News, Blog, Tutorials und mehr.
* [OwnSmartHome](https://ownsmarthome.de/category/homematic/) - News, Blog, Tutorials und mehr.
* [Verdrahtet](https://www.verdrahtet.info/) - News, Blog, Youtube, Tutorials, ...
* [Wikimatic](http://www.wikimatic.de/wiki/Hauptseite) - Community Wiki.


## Documentation

* [Dissecting HomeMatic AES](https://git.zerfleddert.de/hmcfgusb/AES/) - BidCos Protocol AES Handshake description.
* [Direktverknüpfungen im Expertenmodus](https://www.youtube.com/watch?v=1B4iwtK1Rmo) - Vortrag von Frank Grass.
* [Virtuelle Aktorkanäle](https://www.youtube.com/watch?v=Cwxwtig6Q1I) - Vortrag von Frank Grass.
* [Script Documentation](http://www.wikimatic.de/wiki/Script_Dokumentation) - Inoffizielle Homematic Script Referenz.
* [Keymatic Konfiguration](https://homematic-forum.de/forum/viewtopic.php?f=31&t=19196) - Beitrag von rewe0815 im Homematic Forum.

## Mobile Apps

* [@home](https://www.athomeapp.de/) - iOS - (💵 inApp-Purchase um Werbung zu entfernen)
* [HistClient](https://www.sa-com.de/smarthome-special/histclient-handbuch/) - (���� inApp-Purchase) - CCU-Historian Client mit erweitereten Features für iOS und Android
* [Home-24](http://www.home-24.net/index.php?page=sites/home.php&app=home24) - 💵 Android 
* [HomeControl](http://www.ksquare.de/myhomecontrol/) - 💵 iOS
* [TinyMatic](https://www.tinymatic.de/) - 💵 Android (ehemals: HomeDroid)
* [Pocket Control](https://www.penzler.de) - 💵 iOS
* [Battery Status for HomeMatic](https://zeezide.com/en/products/hmbattery/) - 💵 iOS


## CCU Alternatives

* [debmatic ![GitHub Repo Stars](https://img.shields.io/github/stars/alexreinert/debmatic) ![GitHub last commit](https://img.shields.io/github/last-commit/alexreinert/debmatic)](https://github.com/alexreinert/debmatic) - Install the Homematic OCCU on Debian based amd64, armhf and arm64 systems (Debian, Ubuntu, Raspbian, Armbian)
* [docker-ccu ![GitHub Repo Stars](https://img.shields.io/github/stars/angelnu/docker-ccu) ![GitHub last commit](https://img.shields.io/github/last-commit/angelnu/docker-ccu)](https://github.com/angelnu/docker-ccu) - Homematic CCU firmware running as [Docker](https://www.docker.com) container on arm and (emulated) x86.
* [Homegear](https://homegear.eu/index.php/Main_Page) - Free and open source program to interface your smart home devices with your home automation software or your own scripts.
* [piVCCU ![GitHub Repo Stars](https://img.shields.io/github/stars/alexreinert/piVCCU) ![GitHub last commit](https://img.shields.io/github/last-commit/alexreinert/piVCCU)](https://github.com/alexreinert/piVCCU) - Install the original Homematic CCU firmware inside a virtualized container (lxc) on Raspbian or Armbian.
* [RaspberryMatic ![GitHub Repo Stars](https://img.shields.io/github/stars/jens-maus/RaspberryMatic) ![GitHub last commit](https://img.shields.io/github/last-commit/jens-maus/RaspberryMatic)](https://github.com/jens-maus/RaspberryMatic) - Lightweight, OCCU and Linux/buildroot-based distribution for running a HomeMatic CCU on embedded devices like the RaspberryPi.


## Alternative Sensors, Actuators and Hardware Modifications

* [AskSinPPCollection](https://jp112sdl.github.io/AskSinPPCollection/) - Einführung, Dokumentation und Projekte rund um Selbstbau-Komponenten mit AskSinPP
* [Beispiel_AskSinPP ![GitHub Repo Stars](https://img.shields.io/github/stars/jp112sdl/Beispiel_AskSinPP) ![GitHub last commit](https://img.shields.io/github/last-commit/jp112sdl/Beispiel_AskSinPP)](https://github.com/jp112sdl/Beispiel_AskSinPP) - Beispiel Sketche für die Verwendung der [AskSinPP ![GitHub Repo Stars](https://img.shields.io/github/stars/pa-pa/AskSinPP) ![GitHub last commit](https://img.shields.io/github/last-commit/pa-pa/AskSinPP)](https://github.com/pa-pa/AskSinPP) Bibliothek
* [HAUS-BUS.DE](http://www.haus-bus.de/) - 💵 Homematic Wired kompatible Geräte.
* [Homematic Wired Hombrew Hardware](https://github.com/jfische) - Verschiedene Homebrew Sensoren/Aktoren für Homematic Wired.
* [stall.biz](https://www.stall.biz/) - 💵 Alternative Antennen, Multi Sensor für das Wohnzimmer, Wetterstation, ...


## CCU Addons

* [CCU Historian](https://ccu-historian.de/) - Langzeit Archiv und Graphen.
* [CUxD](https://www.homematic-inside.de/software/tag/Zusatzsoftware ) - Der "Leatherman" für die CCU. Verbindet FS20, ... (💵 EnOcean, ...), stellt virtuelle Geräte und hilfreiche Tools zur Verfügung.
* [Email ![GitHub Repo Stars](https://img.shields.io/github/stars/jens-maus/hm_email) ![GitHub last commit](https://img.shields.io/github/last-commit/jens-maus/hm_email)](https://github.com/jens-maus/hm_email) - HomeMatic CCU Addon für den Email Versand.
* [HAP-HomeMatic ![GitHub Repo Stars](https://img.shields.io/github/stars/thkl/hap-homematic) ![GitHub last commit](https://img.shields.io/github/last-commit/thkl/hap-homematic)](https://github.com/thkl/hap-homematic) - RaspberryMatic / CCU3 addon to access your HomeMatic devices from HomeKit. Its much like https://github.com/thkl/homebridge-homematic but without homebridge.
* [hm-print ![GitHub Repo Stars](https://img.shields.io/github/stars/litti/hm-print) ![GitHub last commit](https://img.shields.io/github/last-commit/litti/hm-print)](https://github.com/litti/hm-print) - CCU Programme drucken.
* [hm-tools ![GitHub Repo Stars](https://img.shields.io/github/stars/fhetty/hm-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/fhetty/hm-tools)](https://github.com/fhetty/hm-tools) - Sammlung von Tools für RaspberryMatic.
* [hm_pdetect ![GitHub Repo Stars](https://img.shields.io/github/stars/jens-maus/hm_pdetect) ![GitHub last commit](https://img.shields.io/github/last-commit/jens-maus/hm_pdetect)](https://github.com/jens-maus/hm_pdetect) - Anwesenheitserkennung über die FRITZ!-Box
* [Homeputer](https://www.contronics.de/shop/HomeMatic-System/Zentralen-und-Software.html) - 💵
* [Homematic-addon-hue ![GitHub Repo Stars](https://img.shields.io/github/stars/j-a-n/homematic-addon-hue) ![GitHub last commit](https://img.shields.io/github/last-commit/j-a-n/homematic-addon-hue)](https://github.com/j-a-n/homematic-addon-hue) - HomeMatic Addon für Philips Hue.
* [homematic_check_mk ![GitHub Repo Stars](https://img.shields.io/github/stars/alexreinert/homematic_check_mk) ![GitHub last commit](https://img.shields.io/github/last-commit/alexreinert/homematic_check_mk)](https://github.com/alexreinert/homematic_check_mk) - Addon for the Homematic CCU2 or a Raspberrymatic device which acts as an check_mk_agent.
* [jq ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/ccu-addon-jq) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/ccu-addon-jq)](https://github.com/hobbyquaker/ccu-addon-jq) - jq packaged as Addon for the Homematic CCU3.
* [Mosquitto ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/ccu-addon-mosquitto) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/ccu-addon-mosquitto)](https://github.com/hobbyquaker/ccu-addon-mosquitto) - Mosquitto packaged as Addon for the Homematic CCU3 and RaspberryMatic
* [Patcher ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/Patcher) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/Patcher)](https://github.com/hobbyquaker/Patcher) - CCU3 Addon zur komfortablen Anwendung von Patches.
* [rmupdate ![GitHub Repo Stars](https://img.shields.io/github/stars/j-a-n/raspberrymatic-addon-rmupdate) ![GitHub last commit](https://img.shields.io/github/last-commit/j-a-n/raspberrymatic-addon-rmupdate)](https://github.com/j-a-n/raspberrymatic-addon-rmupdate) - RaspberryMatic Addon das RaspberryMatic selbst aktualisieren kann, vereinfacht die WLAN Konfiguration mit GUI und kann andere Addons ohne Zwangsreboot installieren und aktualisieren
* [Redis ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/ccu-addon-redis) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/ccu-addon-redis)](https://github.com/hobbyquaker/ccu-addon-redis) - Redis packaged as Addon for the Homematic CCU3 and RaspberryMatic
* [RedMatic ![GitHub Repo Stars](https://img.shields.io/github/stars/rdmtc/RedMatic) ![GitHub last commit](https://img.shields.io/github/last-commit/rdmtc/RedMatic)](https://github.com/rdmtc/RedMatic) - [Node-RED](https://nodered.org/) als Addon für die Homematic CCU3 und RaspberryMatic. Liefert u.A. komfortable HomeKit-Integration und spezielle Nodes zur Anbindung der CCU an MQTT mit.
* [XML-API ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/xml-api) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/xml-api)](https://github.com/hobbyquaker/xml-api) - Vereinfachter CCU Zugriff via HTTP/XML.


## Interfacing Software

* [CCU-Jack ![GitHub Repo Stars](https://img.shields.io/github/stars/mdzio/ccu-jack) ![GitHub last commit](https://img.shields.io/github/last-commit/mdzio/ccu-jack)](https://github.com/mdzio/ccu-jack) - CCU-Jack bietet einen einfachen und sicheren REST-basierten Zugriff auf die CCU, auch als Addon verfügbar.
* [homebridge-homematic ![GitHub Repo Stars](https://img.shields.io/github/stars/thkl/homebridge-homematic) ![GitHub last commit](https://img.shields.io/github/last-commit/thkl/homebridge-homematic)](https://github.com/thkl/homebridge-homematic) - [Homebridge ![GitHub Repo Stars](https://img.shields.io/github/stars/nfarina/homebridge) ![GitHub last commit](https://img.shields.io/github/last-commit/nfarina/homebridge)](https://github.com/nfarina/homebridge) Plugin zur Einbindung von Homematic Geräten in HomeKit.
* [homebridge-homematicip ![GitHub Repo Stars](https://img.shields.io/github/stars/marcsowen/homebridge-homematicip) ![GitHub last commit](https://img.shields.io/github/last-commit/marcsowen/homebridge-homematicip)](https://github.com/marcsowen/homebridge-homematicip) - [Homebridge ![GitHub Repo Stars](https://img.shields.io/github/stars/nfarina/homebridge) ![GitHub last commit](https://img.shields.io/github/last-commit/nfarina/homebridge)](https://github.com/nfarina/homebridge) Plugin zur Einbindung von Homematic IP mit HmIP-HAP via Cloud.
* [hvl - Homematic Virtual Interface ![GitHub Repo Stars](https://img.shields.io/github/stars/thkl/Homematic-Virtual-Interface) ![GitHub last commit](https://img.shields.io/github/last-commit/thkl/Homematic-Virtual-Interface)](https://github.com/thkl/Homematic-Virtual-Interface) - Bindet Fremdgeräte (z.B. Hue, Harmony, Netatmo, Sonos) über Plugins ein, auch als Addon verfügbar.
* [node-red-contrib-ccu ![GitHub Repo Stars](https://img.shields.io/github/stars/rdmtc/node-red-contrib-ccu) ![GitHub last commit](https://img.shields.io/github/last-commit/rdmtc/node-red-contrib-ccu)](https://github.com/rdmtc/node-red-contrib-ccu) - [Node-RED](https://nodered.org) Nodes for the Homematic CCU.



## Misc Software

* [check_homematic ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/check_homematic) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/check_homematic)](https://github.com/hobbyquaker/check_homematic) - Nagios/Icinga Plugin for checking Homematic CCU.
* [hm-simulator ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/hm-simulator) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/hm-simulator)](https://github.com/hobbyquaker/hm-simulator) - Simulates (partly) a Homematic CCU.
* [hmcfgusb](https://git.zerfleddert.de/cgi-bin/gitweb.cgi/hmcfgusb) - Utilities to use the HM-CFG-USB(2) on Linux/Unix.
* [HomeHub ![GitHub Repo Stars](https://img.shields.io/github/stars/Gerti1972/homehub) ![GitHub last commit](https://img.shields.io/github/last-commit/Gerti1972/homehub)](https://github.com/Gerti1972/homehub) - PHP/XML-API basiertes Webfrontend. [Forum](https://homematic-forum.de/forum/viewtopic.php?f=41&t=50538)
* [homematic-manager ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/homematic-manager) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/homematic-manager)](https://github.com/hobbyquaker/homematic-manager) - Manage homematic interface processes (rfd/hs485d/homegear).
* [language-homematic ![GitHub Repo Stars](https://img.shields.io/github/stars/Ayngush/language-homematic) ![GitHub last commit](https://img.shields.io/github/last-commit/Ayngush/language-homematic)](https://github.com/Ayngush/language-homematic) - Adds syntax highlighting and snippets to HomeMatic Script files in Atom.
* [occu-test ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/occu-test) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/occu-test)](https://github.com/hobbyquaker/occu-test) - Automated System Tests of ReGaHss - the HomeMatic (O)CCU "Logic Layer".
* [HMScriptEditor](https://zeezide.com/en/products/hmscripteditor/) - A very simple macOS editor and runner for HomeMatic ("Rega") scripts.

## Software Modules

* [binrpc ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/binrpc) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/binrpc)](https://github.com/hobbyquaker/binrpc) - Xmlrpc_bin protocol client and server Node.js module.
* [hm-discover ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/hm-discover) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/hm-discover)](https://github.com/hobbyquaker/hm-discover) - Node.js module to discover Homematic CCUs and interfaces.
* [homematic-rega ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/homematic-rega) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/homematic-rega)](https://github.com/hobbyquaker/homematic-rega) - Node.js Homematic CCU ReGaHSS Remote Script Interface.
* [homematicip-rest-api ![GitHub Repo Stars](https://img.shields.io/github/stars/coreGreenberet/homematicip-rest-api) ![GitHub last commit](https://img.shields.io/github/last-commit/coreGreenberet/homematicip-rest-api)](https://github.com/coreGreenberet/homematicip-rest-api) - Python wrapper for the homematicIP REST API (Cloud / Access Point Based).
* [homematic-gqls ![GitHub Repo Stars](https://img.shields.io/github/stars/martin-riedl/homematic-gqls) ![GitHub last commit](https://img.shields.io/github/last-commit/martin-riedl/homematic-gqls)](https://github.com/martin-riedl/homematic-gqls) - A GraphQL service to query Homematic IP components based on [homematicip-rest-api ![GitHub Repo Stars](https://img.shields.io/github/stars/coreGreenberet/homematicip-rest-api) ![GitHub last commit](https://img.shields.io/github/last-commit/coreGreenberet/homematicip-rest-api)](https://github.com/coreGreenberet/homematicip-rest-api).
* [homematic-xmlrpc ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/homematic-xmlrpc) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/homematic-xmlrpc)](https://github.com/hobbyquaker/homematic-xmlrpc) - Xmlrpc client and server Node.js module.
* [pmatic ![GitHub Repo Stars](https://img.shields.io/github/stars/LarsMichelsen/pmatic) ![GitHub last commit](https://img.shields.io/github/last-commit/LarsMichelsen/pmatic)](https://github.com/LarsMichelsen/pmatic) - Python API for Homematic. Easy to use.
* [pyhomematic ![GitHub Repo Stars](https://img.shields.io/github/stars/danielperna84/pyhomematic) ![GitHub last commit](https://img.shields.io/github/last-commit/danielperna84/pyhomematic)](https://github.com/danielperna84/pyhomematic) - Python 3 Interface to interact with Homematic devices.

## Smart Home Software supporting Homematic

* [everHome](https://everhome.de) - 💵
* [FHEM](https://fhem.de/)
* [Home Assistant](https://www.home-assistant.io/)
* [ioBroker](https://www.iobroker.net/?lang=de)
* [IP-Symcon](https://www.symcon.de/) - 💵
* [Mediola](https://www.mediola.com/) - 💵
* [OpenHAB](https://www.openhab.org/)
* [Pimatic](https://pimatic.org/)

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
