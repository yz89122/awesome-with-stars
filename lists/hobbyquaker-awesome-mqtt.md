# Awesome MQTT

[![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

> A curated list of MQTT related stuff.

MQTT is a lightweight client-server publish/subscribe messaging protocol, optimized for high-latency or unreliable networks. This protocol is a good choice for Internet of Things applications, Telemetry, Sensor Networks, Smart Metering, Home Automation, Messaging and Notification Services.

## Contents

- [Community Resources](#community-resources)
- [Broker](#broker)
- [Cloud](#cloud)
- [Platforms](#platforms)
- [Tools](#tools)
- [Clients](#clients)
- [Scripting](#scripting)
- [Interfaces](#interfaces)
    - [Makers](#makers)
    - [Industry](#industry)
    - [Telephony, PBX](#telephony-pbx)
    - [Operating System](#operating-system)
    - [Monitoring](#monitoring)
    - [Location Tracking](#location-tracking)
    - [Logging](#logging)
    - [Smart Home Hardware Interfaces](#smart-home-hardware-interfaces)
    - [Smart Home Integration Software](#smart-home-integration-software)
    - [Lighting](#lighting)
    - [Home Entertainment](#home-entertainment)
    - [Smart Metering](#smart-metering)
    - [Messaging](#messaging)
    - [Misc](#misc)
- [Visualization, Dashboards](#visualization-dashboards)
- [Architecture, Convention](#architecture-convention)
- [Security, Encryption](#security-encryption)


### Community Resources

* [mqtt.org](https://mqtt.org/).
* [MQTT community wiki ![GitHub Repo Stars](https://img.shields.io/github/stars/mqtt/mqtt.org) ![GitHub last commit](https://img.shields.io/github/last-commit/mqtt/mqtt.org)](https://github.com/mqtt/mqtt.org/wiki).
* [Google Groups: MQTT](https://groups.google.com/forum/#!forum/mqtt).
* [IRC channel #mqtt on the freenode network](irc://irc.freenode.net/mqtt).
* [A list of public brokers](http://moxd.io/2015/10/17/public-mqtt-brokers/).

#### Blogs

* [Ben Hardill](https://www.hardill.me.uk/wordpress/tag/mqtt/)
* [Dominik Obermaier](http://forkbomb-blog.de/category/mqtt)
* [Jan-Piet Mens](https://jpmens.net/)
* [Nick O'Leary](https://knolleary.net/)

#### Talks

* [An Introduction to MQTT: Why HTTP isn't the King of the Internet of Things](https://www.youtube.com/watch?v=LKz1jYngpcU) - Shinji Kim, Robert Bird - Akamai, Samsung Developer Conference 2017.
* [Einführung in MQTT](https://www.youtube.com/watch?v=INYG4-xsa9c) - Dominik Obermaier & Jens Deters, [Building IoT](https://www.buildingiot.de/index.php) conference 2016 (German).

### Broker

* [Ably](https://www.ably.io/documentation/mqtt) - MQTT broker service and protocol adapter
* [ActiveMQ](http://activemq.apache.org/) - A fast Java multiprotocol messaging and Integration Patterns server.
* [Aedes ![GitHub Repo Stars](https://img.shields.io/github/stars/moscajs/aedes) ![GitHub last commit](https://img.shields.io/github/last-commit/moscajs/aedes)](https://github.com/moscajs/aedes) - Barebone MQTT broker that can run on any stream server, the node way.
* [Emitter ![GitHub Repo Stars](https://img.shields.io/github/stars/emitter-io/emitter) ![GitHub last commit](https://img.shields.io/github/last-commit/emitter-io/emitter)](https://github.com/emitter-io/emitter) - A distributed, scalable and fault-tolerant publish-subscribe messaging platform based on MQTT protocol and featuring message storage.
* [EMQ X ![GitHub Repo Stars](https://img.shields.io/github/stars/emqx/emqx) ![GitHub last commit](https://img.shields.io/github/last-commit/emqx/emqx)](https://github.com/emqx/emqx) - Scalable and Reliable Real-time MQTT Messaging Engine for IoT in 5G Era.
* [esp_uMQTT_broker ![GitHub Repo Stars](https://img.shields.io/github/stars/martin-ger/esp_mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/martin-ger/esp_mqtt)](https://github.com/martin-ger/esp_mqtt) - A basic MQTT Broker on the ESP8266.
* [hbmqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/beerfactory/hbmqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/beerfactory/hbmqtt)](https://github.com/beerfactory/hbmqtt) - Python MQTT broker using asyncio.
* [HiveMQ](https://www.hivemq.com/) - Java MQTT Broker that supports MQTT 3.1, 3.1.1 and 5.0. Commercial and open source editions available.
* [hrotti ![GitHub Repo Stars](https://img.shields.io/github/stars/alsm/hrotti) ![GitHub last commit](https://img.shields.io/github/last-commit/alsm/hrotti)](https://github.com/alsm/hrotti) - A MQTT broker written in Go.
* [KMQTT ![GitHub Repo Stars](https://img.shields.io/github/stars/davidepianca98/KMQTT) ![GitHub last commit](https://img.shields.io/github/last-commit/davidepianca98/KMQTT)](https://github.com/davidepianca98/KMQTT) - Kotlin Multiplatform MQTT broker, both embeddable and standalone.
* [Moquette ![GitHub Repo Stars](https://img.shields.io/github/stars/moquette-io/moquette) ![GitHub last commit](https://img.shields.io/github/last-commit/moquette-io/moquette)](https://github.com/moquette-io/moquette) - Java MQTT lightweight broker.
* [Mosca](http://www.mosca.io/) - Mosca is a node.js MQTT broker, which can be used Standalone or Embedded in another Node.js application.
* [Mosquitto](http://mosquitto.org/) - *"*The"** Open Source MQTT Broker. 
     * [Free test server](https://mqtt.eclipseprojects.io) hosted by the Eclipse Foundation.
     * [Authorization Plugin in Go ![GitHub Repo Stars](https://img.shields.io/github/stars/iegomez/mosquitto-go-auth) ![GitHub last commit](https://img.shields.io/github/last-commit/iegomez/mosquitto-go-auth)](https://github.com/iegomez/mosquitto-go-auth) supports many types of logins.
     * [Let's Encrypt Mosquitto Docker Container](https://hub.docker.com/r/pythonlinks/letsencrypt-mosquitto) makes it easy to encrypt. 
* [MyQttHub](https://myqtthub.com) - Cloud MQTT broker.
* [Mystique ![GitHub Repo Stars](https://img.shields.io/github/stars/TheThingsIndustries/mystique) ![GitHub last commit](https://img.shields.io/github/last-commit/TheThingsIndustries/mystique)](https://github.com/TheThingsIndustries/mystique) - An extendable MQTT broker written in Go, with HTTP capabilities for observability. Implements MQTT v3.1.1.
* [RabbitMQ](https://www.rabbitmq.com/mqtt.html) - RabbitMQ offers a MQTT Adapter.
* [SurgeMQ](https://zhen.org/categories/surgemq/) - High Performance MQTT Server and Client Libraries in Go.
* [VerneMQ](https://vernemq.com/) - an Apache2 licensed distributed MQTT broker, developed in Erlang.
* [Vert.x MQTT ![GitHub Repo Stars](https://img.shields.io/github/stars/vert-x3/vertx-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/vert-x3/vertx-mqtt)](https://github.com/vert-x3/vertx-mqtt) - Vert.x component to handle connections, communication and messages exchange with remote MQTT clients.
* [Waterstream](https://waterstream.io/) - MQTT broker leveraging Apache Kafka as its own storage and distribution engine.
* [NanoMQ ![GitHub Repo Stars](https://img.shields.io/github/stars/nanomq/nanomq) ![GitHub last commit](https://img.shields.io/github/last-commit/nanomq/nanomq)](https://github.com/nanomq/nanomq) - A light-weight and Blazing-fast MQTT Broker for IoT Edge platform.

### Cloud

* [Adafruit IO](https://io.adafruit.com) - Adafruit IO is the easiest way to connect your project to the internet. You can easily connect your project to Adafruit IO with your device-of-choice by using your programming language of choice (we have lots of libraries) and control or monitor over the internet. Data stored with Adafruit IO is yours to manage and control.
- [Alibaba Cloud IoT Platform](https://www.alibabacloud.com/product/iot) - Provides secure and reliable communication between devices and the IoT Platform which allows you to manage a large number of devices on a single IoT Platform.
- [AWS IoT Core](https://aws.amazon.com/iot-core/?nc1=h_ls) - AWS IoT Core is a managed cloud service that lets connected devices easily and securely interact with cloud applications and other devices. AWS IoT Core can support billions of devices and trillions of messages, and can process and route those messages to AWS endpoints and to other devices reliably and securely. With AWS IoT Core, your applications can keep track of and communicate with all your devices, all the time, even when they aren’t connected.
- [Azure IoT Hub](https://azure.microsoft.com/en-us/services/iot-hub/) - Enable highly secure and reliable communication between your IoT application and the devices it manages. Azure IoT Hub provides a cloud-hosted solution backend to connect virtually any device. Extend your solution from the cloud to the edge with per-device authentication, built-in device management, and scaled provisioning.
- [CloudMQTT](https://www.cloudmqtt.com/) - Hosted message broker for the Internet of Things. Perfectly configured and optimized message queues for IoT, ready in seconds.
- [EMQ X MQTT Cloud](https://cloud.emqx.io/) - A secure, reliable MQTT cloud service with best pratices from EMQ team.
- [flespi](https://flespi.com/mqtt-broker) - Free and secure cloud MQTT broker with private namespaces, MQTT 3.1.1 and MQTT 5.0 support and gorgeous limits.
- [Google Cloud IoT](https://cloud.google.com/solutions/iot/) - Google Cloud IoT is a complete set of tools to connect, process, store, and analyze data both at the edge and in the cloud. The platform consists of scalable, fully-managed cloud services; an integrated software stack for edge/on-premises computing with machine learning capabilities for all your IoT needs.
- [HiveMQ Cloud](https://www.hivemq.com/cloud/) - HiveMQ Cloud is a fully managed MQTT platform that connects IoT devices to any IoT cloud platform. A cloud native IoT messaging platform that simplifies reliable and scalable IoT device connectivity.
- [IBM WATSON](https://www.ibm.com/watson) - With Watson, you can bring AI tools and apps to your data wherever it resides – whether it's on IBM Cloud, AWS, Azure, Google, or your own private cloud platform.

### Platforms

* [mainflux](https://www.mainflux.com/) - device management, data aggregation, data management, data analytics,connectivity and message routing and event management. Supported by Linux Software Foundation.
Core analytics
* [thingsboard](https://thingsboard.io/) - Device management, data collection, processing, event management, and visualization for your IoT projects.


### Tools
* [hivemq-mqtt-web-client ![GitHub Repo Stars](https://img.shields.io/github/stars/hivemq/hivemq-mqtt-web-client) ![GitHub last commit](https://img.shields.io/github/last-commit/hivemq/hivemq-mqtt-web-client)](https://github.com/hivemq/hivemq-mqtt-web-client) - Browser-based MQTT client that utilizes MQTT over websockets. [Direct Link](http://www.hivemq.com/demos/websocket-client/)
* [imqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/shafreeck/imqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/shafreeck/imqtt)](https://github.com/shafreeck/imqtt) - Interactive MQTT packet manipulation shell based on IPython.
* [IoT-Testware](https://projects.eclipse.org/projects/technology.iottestware) - The Eclipse IoT-Testware is a collection of conformance test suites for IoT protocols enriched with additional tools for fuzzing and performance testing.
* [moxy ![GitHub Repo Stars](https://img.shields.io/github/stars/jvermillard/moxy) ![GitHub last commit](https://img.shields.io/github/last-commit/jvermillard/moxy)](https://github.com/jvermillard/moxy) - A Golang MQTT proxy providing useful output traces to monitor and troubleshoot your MQTT communications.
* [MQTT Board ![GitHub Repo Stars](https://img.shields.io/github/stars/flespi-software/MQTT-Board) ![GitHub last commit](https://img.shields.io/github/last-commit/flespi-software/MQTT-Board)](https://github.com/flespi-software/MQTT-Board) - Open-source diagnostic-oriented MQTT client tool.
* [mqtt-admin ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/mqtt-admin) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/mqtt-admin)](https://github.com/hobbyquaker/mqtt-admin/) - Web based MQTT frontend. [Direct Link](https://hobbyquaker.github.io/mqtt-admin/).
* [mqtt-benchmark ![GitHub Repo Stars](https://img.shields.io/github/stars/chirino/mqtt-benchmark) ![GitHub last commit](https://img.shields.io/github/last-commit/chirino/mqtt-benchmark)](https://github.com/chirino/mqtt-benchmark) - A benchmarking tool for MQTT Servers.
* [MQTT CLI ![GitHub Repo Stars](https://img.shields.io/github/stars/hivemq/mqtt-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/hivemq/mqtt-cli)](https://github.com/hivemq/mqtt-cli) - A command line interface for connecting various MQTT clients supporting MQTT 5.0 and 3.1.1.
* [mqtt-client ![GitHub Repo Stars](https://img.shields.io/github/stars/sdeancos/mqtt-client) ![GitHub last commit](https://img.shields.io/github/last-commit/sdeancos/mqtt-client)](https://github.com/sdeancos/mqtt-client) - A Simple MQTT Client command line (Python) (use paho lib)
* [mqtt-forget ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/mqtt-forget) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/mqtt-forget)](https://github.com/hobbyquaker/mqtt-forget) - Command line tool to remove retained MQTT topics by wildcard.
* [mqtt-fuzz ![GitHub Repo Stars](https://img.shields.io/github/stars/F-Secure/mqtt_fuzz) ![GitHub last commit](https://img.shields.io/github/last-commit/F-Secure/mqtt_fuzz)](https://github.com/F-Secure/mqtt_fuzz) - A simple fuzzer for the MQTT protocol.
* [mqtt-malaria ![GitHub Repo Stars](https://img.shields.io/github/stars/etactica/mqtt-malaria) ![GitHub last commit](https://img.shields.io/github/last-commit/etactica/mqtt-malaria)](https://github.com/etactica/mqtt-malaria) - scalability and load testing utilities for MQTT environments.
* [mqtt-mirror ![GitHub Repo Stars](https://img.shields.io/github/stars/4nte/mqtt-mirror) ![GitHub last commit](https://img.shields.io/github/last-commit/4nte/mqtt-mirror)](https://github.com/4nte/mqtt-mirror) - Mirror MQTT traffic from one broker to another. Available as a CLI tool, helm chart or docker image.
* [MQTT-PWN ![GitHub Repo Stars](https://img.shields.io/github/stars/akamai-threat-research/mqtt-pwn) ![GitHub last commit](https://img.shields.io/github/last-commit/akamai-threat-research/mqtt-pwn)](https://github.com/akamai-threat-research/mqtt-pwn) - MQTT-PWN intends to be a one-stop-shop for IoT Broker penetration-testing and security assessment operations.
* [mqtt_recorder ![GitHub Repo Stars](https://img.shields.io/github/stars/rpdswtk/mqtt_recorder) ![GitHub last commit](https://img.shields.io/github/last-commit/rpdswtk/mqtt_recorder)](https://github.com/rpdswtk/mqtt_recorder) - Simple cli tool for recording and replaying MQTT messages.
* [mqtt-shell ![GitHub Repo Stars](https://img.shields.io/github/stars/pidster-dot-org/mqtt-shell) ![GitHub last commit](https://img.shields.io/github/last-commit/pidster-dot-org/mqtt-shell)](https://github.com/pidster-dot-org/mqtt-shell) - A simple interactive shell for MQTT.
* [mqtt-spy](http://kamilfb.github.io/mqtt-spy/) - Java based MQTT frontend. Supports scripting.
* [mqtt_tree ![GitHub Repo Stars](https://img.shields.io/github/stars/poggenpower/mqtt_tree) ![GitHub last commit](https://img.shields.io/github/last-commit/poggenpower/mqtt_tree)](https://github.com/poggenpower/mqtt_tree) - Displays all Topics in an expandable tree, helps to get an overview if you have a lot of clients publishing. (python, tkinter)
* [mqtt-utils ![GitHub Repo Stars](https://img.shields.io/github/stars/dsell/mqtt-utils) ![GitHub last commit](https://img.shields.io/github/last-commit/dsell/mqtt-utils)](https://github.com/dsell/mqtt-utils) - A collection of MQTT utilities.
* [mqtt-wall ![GitHub Repo Stars](https://img.shields.io/github/stars/bastlirna/mqtt-wall) ![GitHub last commit](https://img.shields.io/github/last-commit/bastlirna/mqtt-wall)](https://github.com/bastlirna/mqtt-wall) - Subscription only web-based client – like Twitter wall for MQTT.
* [mqtt-wildcard ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/mqtt-wildcard) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/mqtt-wildcard)](https://github.com/hobbyquaker/mqtt-wildcard) - Node.js Module to match a MQTT Topic against wildcards.
* [MQTT.fx](https://mqttfx.jensd.de/) - MQTT.fx is a MQTT Client written in Java based on Eclipse Paho. Supports scripting.
* [mqttcli ![GitHub Repo Stars](https://img.shields.io/github/stars/shirou/mqttcli) ![GitHub last commit](https://img.shields.io/github/last-commit/shirou/mqttcli)](https://github.com/shirou/mqttcli) - MQTT Client for shell scripting.
* [MQTTInspector ![GitHub Repo Stars](https://img.shields.io/github/stars/ckrey/MQTTInspector) ![GitHub last commit](https://img.shields.io/github/last-commit/ckrey/MQTTInspector)](https://github.com/ckrey/MQTTInspector) - A general MQTT testing app for iOS (iPhone and iPad).
* [MQTTLens](https://chrome.google.com/webstore/detail/mqttlens/hemojaaeigabkbcookmlgmdigohjobjm) - A Google Chrome application, which connects to a MQTT broker and is able to subscribe and publish to MQTT topics.
* [MQTT Explorer](https://mqtt-explorer.com/) - Tool to visualize your MQTT topics in a topic hierarchy, a MQTT swiss-army knife.
* [MQTT TUI ![GitHub Repo Stars](https://img.shields.io/github/stars/EdJoPaTo/mqttui) ![GitHub last commit](https://img.shields.io/github/last-commit/EdJoPaTo/mqttui)](https://github.com/EdJoPaTo/mqttui) - Simple lightweight terminal based MQTT monitor and publisher.
* [Python MQTT Client Shell ![GitHub Repo Stars](https://img.shields.io/github/stars/bapowell/python-mqtt-client-shell) ![GitHub last commit](https://img.shields.io/github/last-commit/bapowell/python-mqtt-client-shell)](https://github.com/bapowell/python-mqtt-client-shell) - a text console-based, interactive shell for exercising various tasks associated with MQTT client communications.
* [SimpleMQTT](https://simplemqtt.theoi.de/) - A Slack app to send messages from Slack to MQTT brokers with slash commands.
* [Wireshark-MQTT ![GitHub Repo Stars](https://img.shields.io/github/stars/menudoproblema/Wireshark-MQTT) ![GitHub last commit](https://img.shields.io/github/last-commit/menudoproblema/Wireshark-MQTT)](https://github.com/menudoproblema/Wireshark-MQTT) - MQTT dissector for Wireshark.
* [VSMQTT](hhttps://github.com/rpdswtk/vsmqtt) - Simple MQTT client integrated in Visual Studio Code.
* [MQTTX ![GitHub Repo Stars](https://img.shields.io/github/stars/emqx/MQTTX) ![GitHub last commit](https://img.shields.io/github/last-commit/emqx/MQTTX)](https://github.com/emqx/MQTTX) - MQTTX is a cross-platform MQTT desktop client open sourced by EMQ, which supports macOS, Linux, and Windows.
* [MQTT-Tiles ![GitHub Repo Stars](https://img.shields.io/github/stars/flespi-software/MQTT-Tiles) ![GitHub last commit](https://img.shields.io/github/last-commit/flespi-software/MQTT-Tiles)](https://github.com/flespi-software/MQTT-Tiles) - MQTT-based IoT dashboard visualization tool. Allows easy dashboards sharing. Works with any MQTT broker supporting the WSS protocol.

### Clients

* [aiomqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/mossblaser/aiomqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/mossblaser/aiomqtt)](https://github.com/mossblaser/aiomqtt) - Async Python MQTT client based on paho-mqtt.
* [CocoaMQTT ![GitHub Repo Stars](https://img.shields.io/github/stars/emqx/CocoaMQTT) ![GitHub last commit](https://img.shields.io/github/last-commit/emqx/CocoaMQTT)](https://github.com/emqx/CocoaMQTT) - MQTT for iOS and OS X written with Swift.
* [emqttc ![GitHub Repo Stars](https://img.shields.io/github/stars/emqx/emqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/emqx/emqtt)](https://github.com/emqx/emqtt) - Asynchronous Erlang MQTT Client.
* [gmqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/wialon/gmqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/wialon/gmqtt)](https://github.com/wialon/gmqtt) - Python MQTT v5.0 client (asyncio-based).
* [hbmqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/beerfactory/hbmqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/beerfactory/hbmqtt)](https://github.com/beerfactory/hbmqtt) - Python MQTT client using asyncio.
* [hivemq-mqtt-client ![GitHub Repo Stars](https://img.shields.io/github/stars/hivemq/hivemq-mqtt-client) ![GitHub last commit](https://img.shields.io/github/last-commit/hivemq/hivemq-mqtt-client)](https://github.com/hivemq/hivemq-mqtt-client) - High-performance Java MQTT client library with different API flavours for MQTT 5.0 and 3.1.1.
* [Hulaaki ![GitHub Repo Stars](https://img.shields.io/github/stars/suvash/hulaaki) ![GitHub last commit](https://img.shields.io/github/last-commit/suvash/hulaaki)](https://github.com/suvash/hulaaki) - An Elixir library for clients communicating with MQTT brokers.
* [luamqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/xHasKx/luamqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/xHasKx/luamqtt)](https://github.com/xHasKx/luamqtt/) - Pure-lua MQTT v3.1.1 and v5.0 client.
* [Machine Head ![GitHub Repo Stars](https://img.shields.io/github/stars/clojurewerkz/machine_head) ![GitHub last commit](https://img.shields.io/github/last-commit/clojurewerkz/machine_head)](https://github.com/clojurewerkz/machine_head) - A Clojure MQTT Client.
* [MiniMQTT ![GitHub Repo Stars](https://img.shields.io/github/stars/adafruit/Adafruit_CircuitPython_MiniMQTT) ![GitHub last commit](https://img.shields.io/github/last-commit/adafruit/Adafruit_CircuitPython_MiniMQTT)](https://github.com/adafruit/Adafruit_CircuitPython_MiniMQTT) - MQTT Client Library for CircuitPython
* [MIMIC MQTT Simulator](https://www.gambitcomm.com/site/mqttsimulator.php) - Simulate up to 100,000 MQTT clients per server for development/testing/deployment of IoT applications.
* [Moscapsule ![GitHub Repo Stars](https://img.shields.io/github/stars/flightonary/Moscapsule) ![GitHub last commit](https://img.shields.io/github/last-commit/flightonary/Moscapsule)](https://github.com/flightonary/Moscapsule) - MQTT Client for iOS written in Swift.
* [Mosquitto-PHP ![GitHub Repo Stars](https://img.shields.io/github/stars/mgdm/Mosquitto-PHP) ![GitHub last commit](https://img.shields.io/github/last-commit/mgdm/Mosquitto-PHP)](https://github.com/mgdm/Mosquitto-PHP) - A wrapper for the Mosquitto MQTT client library for PHP.
* [mqtt_cpp ![GitHub Repo Stars](https://img.shields.io/github/stars/redboltz/mqtt_cpp) ![GitHub last commit](https://img.shields.io/github/last-commit/redboltz/mqtt_cpp)](https://github.com/redboltz/mqtt_cpp) - MQTT client for C++14 based on Boost.Asio.
* [mqtt_lua](http://geekscape.github.io/mqtt_lua/) - MQTT Client library for the Lua language.
* [MQTT-C ![GitHub Repo Stars](https://img.shields.io/github/stars/LiamBindle/MQTT-C) ![GitHub last commit](https://img.shields.io/github/last-commit/LiamBindle/MQTT-C)](https://github.com/LiamBindle/MQTT-C) - A portable MQTT C client for embedded systems and PCs alike.
* [MQTT-Client-Framework ![GitHub Repo Stars](https://img.shields.io/github/stars/novastone-media/MQTT-Client-Framework) ![GitHub last commit](https://img.shields.io/github/last-commit/novastone-media/MQTT-Client-Framework)](https://github.com/novastone-media/MQTT-Client-Framework) - iOS, OSX, tvOS native ObjectiveC MQTT Client Framework.
* [mqtt-client ![GitHub Repo Stars](https://img.shields.io/github/stars/centamiv/mqtt-client) ![GitHub last commit](https://img.shields.io/github/last-commit/centamiv/mqtt-client)](https://github.com/centamiv/mqtt-client) - A Polymer Web Component that implements a MQTT client (uses Paho mqttws31.js).
* [mqtt-elements ![GitHub Repo Stars](https://img.shields.io/github/stars/mqttjs/mqtt-elements) ![GitHub last commit](https://img.shields.io/github/last-commit/mqttjs/mqtt-elements)](https://github.com/mqttjs/mqtt-elements) - Polymer elements for MQTT.
* [mqtt-rs ![GitHub Repo Stars](https://img.shields.io/github/stars/zonyitoo/mqtt-rs) ![GitHub last commit](https://img.shields.io/github/last-commit/zonyitoo/mqtt-rs)](https://github.com/zonyitoo/mqtt-rs) - MQTT protocol library for Rust.
* [mqtt-stats ![GitHub Repo Stars](https://img.shields.io/github/stars/gambitcomminc/mqtt-stats) ![GitHub last commit](https://img.shields.io/github/last-commit/gambitcomminc/mqtt-stats)](https://github.com/gambitcomminc/mqtt-stats) - Subscriber client to monitor MQTT Topic Statistics
* [mqtt-wrapper](https://www.webcomponents.org/element/hobbyquaker/mqtt-wrapper/elements/mqtt-wrapper) - Polymer Element that wraps other Elements and links them to MQTT topics.
* [mqtt.dart ![GitHub Repo Stars](https://img.shields.io/github/stars/jnguillerme/mqtt.dart) ![GitHub last commit](https://img.shields.io/github/last-commit/jnguillerme/mqtt.dart)](https://github.com/jnguillerme/mqtt.dart) - Dart MQTT client.
* [MQTT.js](https://github.com/mqttjs) - MQTT client for Node.js.
* [mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/jeffallen/mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/jeffallen/mqtt)](https://github.com/jeffallen/mqtt) - MQTT Clients, Servers and Load Testers in Go.
* [mqttex ![GitHub Repo Stars](https://img.shields.io/github/stars/alfert/mqttex) ![GitHub last commit](https://img.shields.io/github/last-commit/alfert/mqttex)](https://github.com/alfert/mqttex) - MQTT implementation in Elixir.
* [MQTTKit ![GitHub Repo Stars](https://img.shields.io/github/stars/mobile-web-messaging/MQTTKit) ![GitHub last commit](https://img.shields.io/github/last-commit/mobile-web-messaging/MQTTKit)](https://github.com/mobile-web-messaging/MQTTKit) - MQTT Objective-C client for iOS.
* [mqtt_monitor ![GitHub Repo Stars](https://img.shields.io/github/stars/filipsPL/mqtt-monitor) ![GitHub last commit](https://img.shields.io/github/last-commit/filipsPL/mqtt-monitor)](https://github.com/filipsPL/mqtt-monitor) - simple and lightweight console moniotor for mqtt topics, with eye-candies, in python 3.
* [Paho](http://www.eclipse.org/paho/) - Open source client implementations (C/C++, Java, Python, Javascript, Go, C#).
* [pubsubclient ![GitHub Repo Stars](https://img.shields.io/github/stars/knolleary/pubsubclient) ![GitHub last commit](https://img.shields.io/github/last-commit/knolleary/pubsubclient)](https://github.com/knolleary/pubsubclient) - A client library for the Arduino Ethernet Shield that provides support for MQTT.
* [ruby-mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/njh/ruby-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/njh/ruby-mqtt)](https://github.com/njh/ruby-mqtt) - Pure Ruby gem that implements the MQTT protocol.
* [rumqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/AtherEnergy/rumqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/AtherEnergy/rumqtt)](https://github.com/AtherEnergy/rumqtt) - A fast, lock free pure Rust MQTT client.
* [tcl-mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/Tingenek/tcl-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/Tingenek/tcl-mqtt)](https://github.com/Tingenek/tcl-mqtt) - Small library to connect to a MQTT broker. Very, very basic.
* [TMQTTClient ![GitHub Repo Stars](https://img.shields.io/github/stars/jamiei/Delphi-TMQTT2) ![GitHub last commit](https://img.shields.io/github/last-commit/jamiei/Delphi-TMQTT2)](https://github.com/jamiei/Delphi-TMQTT2) - MQTT Client Library for Delphi.
* [Vert.x MQTT ![GitHub Repo Stars](https://img.shields.io/github/stars/vert-x3/vertx-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/vert-x3/vertx-mqtt)](https://github.com/vert-x3/vertx-mqtt) - Vert.x component that provides methods for connecting/disconnecting to a broker, publishing messages and subscribing to topics.
* [wolfMQTT](https://www.wolfssl.com/products/wolfmqtt/) - A client implementation of the MQTT written in C for embedded use. It supports SSL/TLS via the wolfSSL library.
* [MQTTnet ![GitHub Repo Stars](https://img.shields.io/github/stars/chkr1011/MQTTnet) ![GitHub last commit](https://img.shields.io/github/last-commit/chkr1011/MQTTnet)](https://github.com/chkr1011/MQTTnet) - MQTT client and broker implementations in .NET.

### Scripting

* [logic4mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/owagner/logic4mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/owagner/logic4mqtt)](https://github.com/owagner/logic4mqtt) - Java based Logic and scripting engine for use with MQTT. Uses Java's general scripting interface, so scripts can be written in a multitude of languages like Javascript, Groovy etc.
* [mqtt-scripts ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/mqtt-scripts) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/mqtt-scripts)](https://github.com/hobbyquaker/mqtt-scripts/) - Node.js based script runner.
* [Node-RED](https://nodered.org/) - A visual tool for wiring the Internet of Things.


### Interfaces


#### Makers

* [arduinoTemps2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/matbor/arduinoTemps2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/matbor/arduinoTemps2mqtt)](https://github.com/matbor/arduinoTemps2mqtt) - Arduino sketch, grab One-wire Temperature's and publish to a MQTT broker.
* [Basecamp ![GitHub Repo Stars](https://img.shields.io/github/stars/ct-Open-Source/Basecamp) ![GitHub last commit](https://img.shields.io/github/last-commit/ct-Open-Source/Basecamp)](https://github.com/ct-Open-Source/Basecamp) - An Arduino library to ease the use of the ESP32 in IoT projects. See [c't Magazin 2'2018 (German)](https://www.heise.de/select/ct/2018/2/1515452111258448).
* [deskmate ![GitHub Repo Stars](https://img.shields.io/github/stars/rbaron/deskmate) ![GitHub last commit](https://img.shields.io/github/last-commit/rbaron/deskmate)](https://github.com/rbaron/deskmate) - A hackable & portable MQTT-powered mini dashboard and control center.
* [MySensors](https://www.mysensors.org/) - Arduino NRF24L01 based sensor network with support for an MQTT gateway
* [pubsubclient ![GitHub Repo Stars](https://img.shields.io/github/stars/knolleary/pubsubclient) ![GitHub last commit](https://img.shields.io/github/last-commit/knolleary/pubsubclient)](https://github.com/knolleary/pubsubclient) - A client library for the Arduino Ethernet Shield that provides support for MQTT.
* [RFM69-MQTT-client ![GitHub Repo Stars](https://img.shields.io/github/stars/computourist/RFM69-MQTT-client) ![GitHub last commit](https://img.shields.io/github/last-commit/computourist/RFM69-MQTT-client)](https://github.com/computourist/RFM69-MQTT-client) - Arduino RFM69 based sensors and MQTT gateway.
* [rpi2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/rpi2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/rpi2mqtt)](https://github.com/hobbyquaker/rpi2mqtt) - Connect a RaspberryPis GPIOs and 1-Wire Temperature Sensors to MQTT.
* [xbee2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/xoseperez/xbee2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/xoseperez/xbee2mqtt)](https://github.com/xoseperez/xbee2mqtt) - XBee to MQTT gateway.

##### ESP

* [ESP32-BLE2MQTT ![GitHub Repo Stars](https://img.shields.io/github/stars/shmuelzon/esp32-ble2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/shmuelzon/esp32-ble2mqtt)](https://github.com/shmuelzon/esp32-ble2mqtt) - BLE to MQTT bridge, exposes BLE GATT characteristics as MQTT topics for bidirectional communication.
* [ESP8266MQTTMesh ![GitHub Repo Stars](https://img.shields.io/github/stars/PhracturedBlue/ESP8266MQTTMesh) ![GitHub last commit](https://img.shields.io/github/last-commit/PhracturedBlue/ESP8266MQTTMesh)](https://github.com/PhracturedBlue/ESP8266MQTTMesh) - MQTT over mesh WiFi integrated library for ESP8266
* [esp_mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/tuanpmt/esp_mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/tuanpmt/esp_mqtt)](https://github.com/tuanpmt/esp_mqtt) - MQTT client library for ESP8266.
* [mqtt-ir-transceiver ![GitHub Repo Stars](https://img.shields.io/github/stars/piotrC4/mqtt-ir-transceiver) ![GitHub last commit](https://img.shields.io/github/last-commit/piotrC4/mqtt-ir-transceiver)](https://github.com/piotrC4/mqtt-ir-transceiver) - ESP8266 based bidirectional gateway between MQTT and IR. Use with PlatformIO.
* [mqtt-with-micropython](https://docs.pycom.io/tutorials/networkprotocols/mqtt/) - Connect to MQTT with micropython and wipy/others (ESP32 inside)
* [nodemcu-gpiomqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/nodemcu-gpiomqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/nodemcu-gpiomqtt)](https://github.com/hobbyquaker/nodemcu-gpiomqtt) - Lua script to connect ESP8266 GPIOs to MQTT.


##### Firmwares for ESP based Devices 

There are many inexpensive smart home Wi-Fi devices based on inexpensive ESP8266 chip _(see: [1](https://templates.blakadder.com/index.html), [2 ![GitHub Repo Stars](https://img.shields.io/github/stars/xoseperez/espurna) ![GitHub last commit](https://img.shields.io/github/last-commit/xoseperez/espurna)](https://github.com/xoseperez/espurna#supported-hardware), [3](https://www.letscontrolit.com/wiki/index.php?title=ESP_Hardware))_. Most of them can be reflashed with custom firmware.
Here are complete firmwares to turn them into MQTT-controlled smart home nodes:

* [ESPEasy](https://www.letscontrolit.com/wiki/index.php?title=ESPEasy) - Turns ESP into a multifunction sensor device for <abbr title="Home automation">HA</abbr> solutions with web-based configuration.
* [ESPHome](https://esphome.io/) - builds ESP8266/ESP32 firmware from concise YAML descriptions, uploads to and manages flashed devices.
* [Espurna ![GitHub Repo Stars](https://img.shields.io/github/stars/xoseperez/espurna) ![GitHub last commit](https://img.shields.io/github/last-commit/xoseperez/espurna)](https://github.com/xoseperez/espurna) - <abbr title="Home automation">HA</abbr> firmware for ESP8266-based devices with rich web UI and ≈120 devices supported out of the box
* [OpenMQTTGateway ![GitHub Repo Stars](https://img.shields.io/github/stars/1technophile/OpenMQTTGateway) ![GitHub last commit](https://img.shields.io/github/last-commit/1technophile/OpenMQTTGateway)](https://github.com/1technophile/OpenMQTTGateway) - MQTT gateway for ESP8266, ESP32, Sonoff RF Bridge or Arduino with bidirectional 433mhz/315mhz/868mhz, Infrared communications, BLE, beacons detection, mi flora, mi jia, LYWSD02, LYWSD03MMC, Mi Scale compatibility, SMS & LORA.
* [Sonoff-Tasmota ![GitHub Repo Stars](https://img.shields.io/github/stars/arendst/Tasmota) ![GitHub last commit](https://img.shields.io/github/last-commit/arendst/Tasmota)](https://github.com/arendst/Tasmota) - Firmware for ESP8266 devices with web-based configuration. ≈500 devices supported (not only Sonoffs).
* [WiFi-IoT](https://wifi-iot.com/p/wiki/) - ESP8266/ESP32 firmware builder. Partly in Russian. Free features are limited.


#### Industry

* [CODESYS-MQTT ![GitHub Repo Stars](https://img.shields.io/github/stars/stefandreyer/CODESYS-MQTT) ![GitHub last commit](https://img.shields.io/github/last-commit/stefandreyer/CODESYS-MQTT)](https://github.com/stefandreyer/CODESYS-MQTT) - A MQTT client for CODESYS PLC
* [spicierModbus2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/mbs38/spicierModbus2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/mbs38/spicierModbus2mqtt)](https://github.com/mbs38/spicierModbus2mqtt) - Modbus master which publishes register values via MQTT.
* [mqtt2opcua ![GitHub Repo Stars](https://img.shields.io/github/stars/nzfarmer1/mqtt2opcua) ![GitHub last commit](https://img.shields.io/github/last-commit/nzfarmer1/mqtt2opcua)](https://github.com/nzfarmer1/mqtt2opcua) - Bi Directional MQTT to OPCUA Bridge.
* [OPC Router](https://www.opc-router.com/4_1-mqtt-client-opc-router-plug-in-en/) - MQTT Gateway (publisher/subscriber) with various plug-ins (OPC UA Bridge, SQL Bridge, REST Bridge, SAP Bridge)

#### Telephony, PBX

* [agi-mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/zeha/agi-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/zeha/agi-mqtt)](https://github.com/zeha/agi-mqtt) - Interface between Asterisk and MQTT.
* [fritz2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/akentner/fritz2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/akentner/fritz2mqtt)](https://github.com/akentner/fritz2mqtt) - Connect FRITZ!Box to MQTT.
* [sip2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/MartyTremblay/sip2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/MartyTremblay/sip2mqtt)](https://github.com/MartyTremblay/sip2mqtt) - A SIP monitoring script that publishes incoming calls with CallerID to MQTT.
* [sms2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/Domochip/sms2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/Domochip/sms2mqtt)](https://github.com/Domochip/sms2mqtt) - Docker Gateway to send/receive SMS through MQTT using an USB GSM dongle (gammu).


#### Operating System

* [mqtt-os-status ![GitHub Repo Stars](https://img.shields.io/github/stars/oskarhagberg/mqtt-os-status) ![GitHub last commit](https://img.shields.io/github/last-commit/oskarhagberg/mqtt-os-status)](https://github.com/oskarhagberg/mqtt-os-status) - Operating-system related data, published to an MQTT broker at fixed intervals.
* [mqttlauncher ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmens/mqtt-launcher) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmens/mqtt-launcher)](https://github.com/jpmens/mqtt-launcher) - Execute shell commands triggered by published MQTT messages.
* [mqttpc ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/mqttpc) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/mqttpc)](https://github.com/hobbyquaker/mqttpc) - Control processes via MQTT. Ability to send signals via MQTT and to publish stdout/stderr or pipe MQTT payloads into stdin.
* [mqttwatchdir ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmens/mqtt-watchdir) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmens/mqtt-watchdir)](https://github.com/jpmens/mqtt-watchdir) - Recursively watch a directory for modifications and publish file content to an MQTT broker.
* [psmqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/eschava/psmqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/eschava/psmqtt)](https://github.com/eschava/psmqtt) - Utility reporting system health and status via MQTT.
* [WinThing ![GitHub Repo Stars](https://img.shields.io/github/stars/msiedlarek/winthing) ![GitHub last commit](https://img.shields.io/github/last-commit/msiedlarek/winthing)](https://github.com/msiedlarek/winthing) - Remotely control Windows through MQTT.


#### Monitoring

* [check-mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmens/check-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmens/check-mqtt)](https://github.com/jpmens/check-mqtt) - A Nagios/Icinga plugin for checking connectivity to an MQTT broker.
* [nag2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/DE-IBH/nag2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/DE-IBH/nag2mqtt)](https://github.com/DE-IBH/nag2mqtt) - Nagios event broker to MQTT gateway.
* [notify-by-mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmens/notify-by-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmens/notify-by-mqtt)](https://github.com/jpmens/notify-by-mqtt) - A Nagios/Icinga notification module which wraps data into JSON and fires it off to an MQTT broker.
* [mqtt2notifysend ![GitHub Repo Stars](https://img.shields.io/github/stars/David-Lor/MQTT2NotifySend) ![GitHub last commit](https://img.shields.io/github/last-commit/David-Lor/MQTT2NotifySend)](https://github.com/David-Lor/MQTT2NotifySend) - Subscribe to a topic and show notifications from MQTT messages on Ubuntu & other notify-send compatible Linux distros.


#### Location tracking

* [OwnTracks](https://owntracks.org/) - Location tracking and geofencing for MQTT.


#### Logging

* [graylog-plugin-mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/graylog-labs/graylog-plugin-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/graylog-labs/graylog-plugin-mqtt)](https://github.com/graylog-labs/graylog-plugin-mqtt) - MQTT Input Plugin for Graylog.
* [influx4mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/influx4mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/influx4mqtt)](https://github.com/hobbyquaker/influx4mqtt) - Subscribe to MQTT topics and insert into InfluxDB.
* [mqtt2elasticsearch ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/mqtt2elasticsearch) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/mqtt2elasticsearch)](https://github.com/hobbyquaker/mqtt2elasticsearch) - Send MQTT messages to Elasticsearch.
* [mqtt2graphite ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmens/mqtt2graphite) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmens/mqtt2graphite)](https://github.com/jpmens/mqtt2graphite) - Archived!  Instead use [mqttwarn ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmens/mqttwarn) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmens/mqttwarn)](https://github.com/jpmens/mqttwarn) with [carbon ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmens/mqttwarn) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmens/mqttwarn)](https://github.com/jpmens/mqttwarn/blob/master/HANDBOOK.md#carbon) plugin.
* [mqttcollect ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmens/mqttcollect) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmens/mqttcollect)](https://github.com/jpmens/mqttcollect) - A collectd "Exec" plugin for MQTT.
* [mqtthandler ![GitHub Repo Stars](https://img.shields.io/github/stars/changyuheng/MQTTHandler) ![GitHub last commit](https://img.shields.io/github/last-commit/changyuheng/MQTTHandler)](https://github.com/changyuheng/MQTTHandler) - A Python logging handler module for MQTT.
* [mqtt2mongodb ![GitHub Repo Stars](https://img.shields.io/github/stars/David-Lor/MQTT2MongoDB) ![GitHub last commit](https://img.shields.io/github/last-commit/David-Lor/MQTT2MongoDB)](https://github.com/David-Lor/MQTT2MongoDB) - Subscribe to MQTT topics and insert into MongoDB.
* [mqtt-firebase](https://www.npmjs.com/package/mqtt-firebase) - A CLI tool for subscribing to MQTT topics and dumping them to a firebase firestore DB.


#### Smart Home Hardware Interfaces

* [aqara-mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/monster1025/aqara-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/monster1025/aqara-mqtt)](https://github.com/monster1025/aqara-mqtt) - Aqara (Xiaomi) Gateway to MQTT bridge.
* [aqara2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/aqara2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/aqara2mqtt)](https://github.com/hobbyquaker/aqara2mqtt) - Attach [Aqara](http://www.aqara.com.cn/us/index.html) Smart Hubs to MQTT.
* [can2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/c3re/can2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/c3re/can2mqtt)](https://github.com/c3re/can2mqtt) - CAN-Bus - MQTT Bridge (also works vice versa).
* [cul2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/cul2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/cul2mqtt)](https://github.com/hobbyquaker/cul2mqtt) - Interface between [Busware CUL](http://shop.busware.de/product_info.php/cPath/1/products_id/29) (868MHz RF-Devices like ELV FS20, HMS, EM, ...) and MQTT.
* [domiqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/etobi/domiqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/etobi/domiqtt)](https://github.com/etobi/domiqtt) - Connects to a Domiq Base (LCN) and translate from and to MQTT.
* [eno2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/owagner/eno2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/owagner/eno2mqtt)](https://github.com/owagner/eno2mqtt) - Interface between an Enocean USB300 (TCM310) adapter and MQTT.
* [Evohome2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/svrooij/evohome2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/svrooij/evohome2mqtt)](https://github.com/svrooij/evohome2mqtt) - MQTT Interface for the Honeywell Evohome system.
* [gardena2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/Domochip/gardena2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/Domochip/gardena2mqtt)](https://github.com/Domochip/gardena2mqtt) - Docker Gateway to control GARDENA Smart system devices (Sileno mower, Irrigation Control, etc.) through MQTT.
* [helios2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/mreschka/helios2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/mreschka/helios2mqtt)](https://github.com/mreschka/helios2mqtt) - A daemon for syncing a helios easy controls system like my KWL EC 220D to MQTT.
* [hm2mqtt.js ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/hm2mqtt.js) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/hm2mqtt.js)](https://github.com/hobbyquaker/hm2mqtt.js) - Interface between EQ-3's Homematic line of smarthome devices and MQTT. Supports Homematic IP.
* [homeeToMqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/odig/homeeToMqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/odig/homeeToMqtt)](https://github.com/odig/homeeToMqtt) - Bidirectional Interface between homee and MQTT.
* [HS100toMQTT ![GitHub Repo Stars](https://img.shields.io/github/stars/dersimn/HS100toMQTT) ![GitHub last commit](https://img.shields.io/github/last-commit/dersimn/HS100toMQTT)](https://github.com/dersimn/HS100toMQTT) - Gateway between TPLink HS100/HS110 and MQTT.
* [ipcam2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/svrooij/ipcam2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/svrooij/ipcam2mqtt)](https://github.com/svrooij/ipcam2mqtt) - A small FTP server to receive movement images from ipcameras and turn them into MQTT alerts.
* [knx-mqtt-bridge ![GitHub Repo Stars](https://img.shields.io/github/stars/pakerfeldt/knx-mqtt-bridge) ![GitHub last commit](https://img.shields.io/github/last-commit/pakerfeldt/knx-mqtt-bridge)](https://github.com/pakerfeldt/knx-mqtt-bridge) - ridges KNX and MQTT using the knx.js library.
* [knx2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/owagner/knx2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/owagner/knx2mqtt)](https://github.com/owagner/knx2mqtt) - Interface between the KNX home automation standard and MQTT.
* [mcsMQTT](https://shop.homeseer.com/products/mcsmqtt-software-plug-in-for-hs3) - Plug-in for HS3 (HomeSeer).
* [mqtt-dss-bridge ![GitHub Repo Stars](https://img.shields.io/github/stars/cgHome/mqtt-dss-bridge) ![GitHub last commit](https://img.shields.io/github/last-commit/cgHome/mqtt-dss-bridge)](https://github.com/cgHome/mqtt-dss-bridge) - MQTT digitalSTROM-Server Bridge.
* [mqtt-unifi-protect-bridge ![GitHub Repo Stars](https://img.shields.io/github/stars/terafin/mqtt-unifi-protect-bridge) ![GitHub last commit](https://img.shields.io/github/last-commit/terafin/mqtt-unifi-protect-bridge)](https://github.com/terafin/mqtt-unifi-protect-bridge) - Adding motion-status from UniFi Protect Cameras to MQTT.
* [mqtt2homekit ![GitHub Repo Stars](https://img.shields.io/github/stars/forty2/mqtt2homekit) ![GitHub last commit](https://img.shields.io/github/last-commit/forty2/mqtt2homekit)](https://github.com/forty2/mqtt2homekit) - Roughly the opposite of [homekit2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/homekit2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/homekit2mqtt)](https://github.com/hobbyquaker/homekit2mqtt): Control your HomeKit-enabled devices with MQTT and without Siri or iPhone.
* [node-lox-mqtt-gateway ![GitHub Repo Stars](https://img.shields.io/github/stars/alladdin/node-lox-mqtt-gateway) ![GitHub last commit](https://img.shields.io/github/last-commit/alladdin/node-lox-mqtt-gateway)](https://github.com/alladdin/node-lox-mqtt-gateway) - Gateway for Loxone™ mini server to communicate with MQTT broker.
* [smartthings-mqtt-bridge ![GitHub Repo Stars](https://img.shields.io/github/stars/stjohnjohnson/smartthings-mqtt-bridge) ![GitHub last commit](https://img.shields.io/github/last-commit/stjohnjohnson/smartthings-mqtt-bridge)](https://github.com/stjohnjohnson/smartthings-mqtt-bridge) - Bridge between [SmartThings](https://www.smartthings.com/) and MQTT.
* [xiaomi2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/svrooij/node-xiaomi2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/svrooij/node-xiaomi2mqtt)](https://github.com/svrooij/node-xiaomi2mqtt) - bridge between the Xiaomi Smart Home Gateway Aquara and a MQTT server.
* [zigbee2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/Koenkk/zigbee2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/Koenkk/zigbee2mqtt)](https://github.com/Koenkk/zigbee2mqtt) - Allows you to use your Zigbee devices without the vendors (Xiaomi/TRADFRI/Hue) bridge/gateway.
* [zwavejs2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/zwave-js/zwavejs2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/zwave-js/zwavejs2mqtt)](https://github.com/zwave-js/zwavejs2mqtt) - Zwave to Mqtt gateway and Control Panel Web UI.


#### Smart Home Integration Software

* [control-freak ![GitHub Repo Stars](https://img.shields.io/github/stars/catx23/control-freak) ![GitHub last commit](https://img.shields.io/github/last-commit/catx23/control-freak)](https://github.com/catx23/control-freak) - IDE for IoT & friends. Built in MQTT support.
* [Domoticz](https://www.domoticz.com/) - Domoticz beta supports MQTT.
* [FHEM](http://fhem.de/fhem.html) has a [MQTT module](http://fhem.de/commandref.html#MQTT) since V5.6.
* [Home Assistant](https://www.home-assistant.io/) has a MQTT component.
* [Home.Pi ![GitHub Repo Stars](https://img.shields.io/github/stars/denschu/home.pi) ![GitHub last commit](https://img.shields.io/github/last-commit/denschu/home.pi)](https://github.com/denschu/home.pi) is based on MQTT.
* [Homegear](https://homegear.eu/index.php/Main_Page) has build in MQTT support.
* [homekit2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/homekit2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/homekit2mqtt)](https://github.com/hobbyquaker/homekit2mqtt) - Interface between [HAP-NodeJS ![GitHub Repo Stars](https://img.shields.io/github/stars/homebridge/HAP-NodeJS) ![GitHub last commit](https://img.shields.io/github/last-commit/homebridge/HAP-NodeJS)](https://github.com/homebridge/HAP-NodeJS) and MQTT. Control MQTT connected devices with Siri or HomeKit Apps.
* [ioBroker](https://github.com/ioBroker) has a [MQTT adapter ![GitHub Repo Stars](https://img.shields.io/github/stars/ioBroker/ioBroker.mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/ioBroker/ioBroker.mqtt)](https://github.com/ioBroker/ioBroker.mqtt).
* [Node-RED](https://nodered.org/) - A visual tool for wiring the Internet of Things, has native MQTT Support.
* [openHAB](https://github.com/openhab) has a [MQTT binding ![GitHub Repo Stars](https://img.shields.io/github/stars/openhab/openhab1-addons) ![GitHub last commit](https://img.shields.io/github/last-commit/openhab/openhab1-addons)](https://github.com/openhab/openhab1-addons/wiki/MQTT-Binding).
* [pimatic](https://pimatic.org/) has a MQTT plugin.


#### Lighting

* [Arilux_AL-LC0X ![GitHub Repo Stars](https://img.shields.io/github/stars/mertenats/Arilux_AL-LC0X) ![GitHub last commit](https://img.shields.io/github/last-commit/mertenats/Arilux_AL-LC0X)](https://github.com/mertenats/Arilux_AL-LC0X) - This is an alternative firmware for Arilux LED controllers which uses MQTT.
* [chromoflex2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/owagner/chromoflex2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/owagner/chromoflex2mqtt)](https://github.com/owagner/chromoflex2mqtt) - Control Chromoflex USP3 RGB LED modules via MQTT.
* [h801/mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/open-homeautomation/h801) ![GitHub last commit](https://img.shields.io/github/last-commit/open-homeautomation/h801)](https://github.com/open-homeautomation/h801/tree/master/mqtt) - Alternative firmware for the H801 LED dimmer that uses MQTT as a control channel.
* [hue2mqtt.js ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/hue2mqtt.js) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/hue2mqtt.js)](https://github.com/hobbyquaker/hue2mqtt.js) - Interface between the Philips Hue bridge and MQTT.
* [MQTT DMX Controller ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/mqtt-dmx-controller) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/mqtt-dmx-controller)](https://github.com/hobbyquaker/mqtt-dmx-controller) - DMX Controller with MQTT support.
* [mqtt-dmx-sequencer ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/mqtt-dmx-sequencer) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/mqtt-dmx-sequencer)](https://github.com/hobbyquaker/mqtt-dmx-sequencer) - Headless counterpart to [MQTT DMX Controller ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/mqtt-dmx-sequencer) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/mqtt-dmx-sequencer)](https://github.com/hobbyquaker/mqtt-dmx-sequencer) - use scenes and sequences exported from the MQTT DMX Controller and control them via MQTT.
* [sunricher-wifi-mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/magcode/sunricher-wifi-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/magcode/sunricher-wifi-mqtt)](https://github.com/magcode/sunricher-wifi-mqtt) - control Sunricher LED devices using MQTT.
* [TRADFRI2MQTT ![GitHub Repo Stars](https://img.shields.io/github/stars/hardillb/TRADFRI2MQTT) ![GitHub last commit](https://img.shields.io/github/last-commit/hardillb/TRADFRI2MQTT)](https://github.com/hardillb/TRADFRI2MQTT) - MQTT Bridge for IKEA TRÅDFRI Light Gateway.


#### Home Entertainment

* [airtunes2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/airtunes2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/airtunes2mqtt)](https://github.com/hobbyquaker/airtunes2mqtt) - MQTT controlled Multi-Room Audio with Airplay/Airtunes Devices.
* [bravia2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/forty2/bravia2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/forty2/bravia2mqtt)](https://github.com/forty2/bravia2mqtt) - Control your Sony Bravia TV with MQTT.
* [broadlink-mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/eschava/broadlink-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/eschava/broadlink-mqtt)](https://github.com/eschava/broadlink-mqtt) - MQTT client to control BroadLink RM devices.
* [chromecast-mqtt-connector ![GitHub Repo Stars](https://img.shields.io/github/stars/nohum/chromecast-mqtt-connector) ![GitHub last commit](https://img.shields.io/github/last-commit/nohum/chromecast-mqtt-connector)](https://github.com/nohum/chromecast-mqtt-connector) - Control your Google Chromecast devices using MQTT.
* [harmony-api ![GitHub Repo Stars](https://img.shields.io/github/stars/maddox/harmony-api) ![GitHub last commit](https://img.shields.io/github/last-commit/maddox/harmony-api)](https://github.com/maddox/harmony-api) - A simple server allowing you to query/control multiple local Harmony Home Hubs over HTTP or MQTT.
* [htd2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/TheOriginalAndrobot/htd2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/TheOriginalAndrobot/htd2mqtt)](https://github.com/TheOriginalAndrobot/htd2mqtt) - Bridge between an HTD Lync audio system and MQTT.
* [kodi2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/owagner/kodi2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/owagner/kodi2mqtt)](https://github.com/owagner/kodi2mqtt) - Interface between a Kodi media center instance and MQTT.
* [lgtv2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/lgtv2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/lgtv2mqtt)](https://github.com/hobbyquaker/lgtv2mqtt) - Interface between LG WebOS Smart TVs and MQTT.
* [lirc2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/lirc2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/lirc2mqtt)](https://github.com/hobbyquaker/lirc2mqtt) - Send and receive infrared via [LIRC](www.lirc.org).
* [mopidy-mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/magcode/mopidy-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/magcode/mopidy-mqtt)](https://github.com/magcode/mopidy-mqtt) - MQTT features for Mopidy.
* [MQTT-DashCast-Docker ![GitHub Repo Stars](https://img.shields.io/github/stars/mukowman/MQTT-DashCast-Docker) ![GitHub last commit](https://img.shields.io/github/last-commit/mukowman/MQTT-DashCast-Docker)](https://github.com/mukowman/MQTT-DashCast-Docker) - MQTT Docker to launch DashCast session on Chromecast.
* [mqtt2atlonamatrix ![GitHub Repo Stars](https://img.shields.io/github/stars/forty2/mqtt2atlonamatrix) ![GitHub last commit](https://img.shields.io/github/last-commit/forty2/mqtt2atlonamatrix)](https://github.com/forty2/mqtt2atlonamatrix) - Control Atlona HDMI matrix switches with MQTT.
* [mqtt2tivoremote ![GitHub Repo Stars](https://img.shields.io/github/stars/forty2/mqtt2tivoremote) ![GitHub last commit](https://img.shields.io/github/last-commit/forty2/mqtt2tivoremote)](https://github.com/forty2/mqtt2tivoremote) - Make TiVo DVR remote control available through an MQTT smarthome style interface.
* [onkyo2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/owagner/onkyo2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/owagner/onkyo2mqtt)](https://github.com/owagner/onkyo2mqtt) - Interface between Onkyo AVR's EISCP network remote protocol and MQTT. Uses the onkyo-eiscp library.
* [sonos2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/svrooij/sonos2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/svrooij/sonos2mqtt)](https://github.com/svrooij/sonos2mqtt) - A bridge between Sonos and MQTT.
* [VLC MQTT Module](https://wiki.videolan.org/Documentation:Modules/mqtt/) - Control VLC via MQTT.
* [xbmc2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/gordonjcp/xbmc-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/gordonjcp/xbmc-mqtt)](https://github.com/gordonjcp/xbmc-mqtt) - A simple plugin for XBMC to listen for a particular topic on an MQTT broker, and display a popup message.
* [yamaha-avr2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/akentner/yamaha-avr2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/akentner/yamaha-avr2mqtt)](https://github.com/akentner/yamaha-avr2mqtt) - A simple adapter for connection Yamaha AVR to MQTT.


#### Smart Metering

* [bcontrol2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/bcontrol2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/bcontrol2mqtt)](https://github.com/hobbyquaker/bcontrol2mqtt) - Publish measurements from TQ Energy Manager / [Busch-Jäger Energy Monitor](https://www.busch-jaeger.de/files/files_ONLINE/Brosch%c3%bcre_EnergyMonitor_druck.pdf) to MQTT.


#### Messaging

* [mqtt-irc-bot ![GitHub Repo Stars](https://img.shields.io/github/stars/dobermai/mqtt-irc-bot) ![GitHub last commit](https://img.shields.io/github/last-commit/dobermai/mqtt-irc-bot)](https://github.com/dobermai/mqtt-irc-bot) - A MQTT to IRC / IRC to MQTT bridge or bot.
* [mqttwarn ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmens/mqttwarn) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmens/mqttwarn)](https://github.com/jpmens/mqttwarn) - Subscribe to MQTT topics (with wildcards) and notify pluggable services.
* [twitter-to-mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/knolleary/twitter-to-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/knolleary/twitter-to-mqtt)](https://github.com/knolleary/twitter-to-mqtt) - A python daemon that uses the Twitter Streaming API to access tweets and republishes them to an MQTT topic.


#### Misc

* [AlexaMqttBridge ![GitHub Repo Stars](https://img.shields.io/github/stars/mhdawson/AlexaMqttBridge) ![GitHub last commit](https://img.shields.io/github/last-commit/mhdawson/AlexaMqttBridge)](https://github.com/mhdawson/AlexaMqttBridge) - Bridge between Amazon Alexa and MQTT.
* [bt-mqtt-gateway ![GitHub Repo Stars](https://img.shields.io/github/stars/zewelor/bt-mqtt-gateway) ![GitHub last commit](https://img.shields.io/github/last-commit/zewelor/bt-mqtt-gateway)](https://github.com/zewelor/bt-mqtt-gateway) - Easily extensible Bluetooth to MQTT gateway, currently supports: EQ3 smart thermostat, Xiaomi Mi Scale, Linak Desk, MySensors and Xiaomi Mi Flora plant sensor.
* [buderus2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/krambox/buderus2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/krambox/buderus2mqtt)](https://github.com/krambox/buderus2mqtt) - Bridge between Buderus KM200 internet gateway and MQTT.
* [chrome2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/tbowmo/chrome2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/tbowmo/chrome2mqtt)](https://github.com/tbowmo/chrome2mqtt) - Python program to enable MQTT control endpoints for chromecasts (both audio and video).
* [dashbutton2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/dashbutton2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/dashbutton2mqtt)](https://github.com/hobbyquaker/dashbutton2mqtt) - Publish Amazon Dash Button presses to MQTT.
* [flowerpower2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/flowerpower2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/flowerpower2mqtt)](https://github.com/hobbyquaker/flowerpower2mqtt) - Publish measurements from Parrot Flower Power plant sensors to MQTT.
* [gBridge ![GitHub Repo Stars](https://img.shields.io/github/stars/kservices/gBridge) ![GitHub last commit](https://img.shields.io/github/last-commit/kservices/gBridge)](https://github.com/kservices/gBridge) - gBridge allows you to control (almost) any smart home device, any smart home software, with Google Assistant. Therefore, it transforms actions received from Google by voice commands to MQTT messages.
* [haiku2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/forty2/haiku2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/forty2/haiku2mqtt)](https://github.com/forty2/haiku2mqtt) - A bridge between Haiku smart fans and MQTT.
* [homely ![GitHub Repo Stars](https://img.shields.io/github/stars/baol/homely) ![GitHub last commit](https://img.shields.io/github/last-commit/baol/homely)](https://github.com/baol/homely) - Collection of Go daemons for connecting Domoticz and other stuff.
* [kobold2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/krambox/kobold2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/krambox/kobold2mqtt)](https://github.com/krambox/kobold2mqtt) - Bridge between Vorwerk Kobold Vr200 internet gateway and MQTT.
* [leaf-python-mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/glynhudson/leaf-python-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/glynhudson/leaf-python-mqtt)](https://github.com/glynhudson/leaf-python-mqtt) - Extract data from Nissan Leaf API and post to MQTT.
* [miflora-mqtt-daemon ![GitHub Repo Stars](https://img.shields.io/github/stars/ThomDietrich/miflora-mqtt-daemon) ![GitHub last commit](https://img.shields.io/github/last-commit/ThomDietrich/miflora-mqtt-daemon)](https://github.com/ThomDietrich/miflora-mqtt-daemon) - Linux service to send Xiaomi Mi Flora plant sensor data to an MQTT broker.
* [MQTT.Cool](https://mqtt.cool) - A web gateway that optimizes any MQTT broker when sending real-time data to web clients with automatic throttling.
* [mqtt2ble ![GitHub Repo Stars](https://img.shields.io/github/stars/hardillb/mqtt2ble) ![GitHub last commit](https://img.shields.io/github/last-commit/hardillb/mqtt2ble)](https://github.com/hardillb/mqtt2ble) - A way to bridge MQTT topics to BLE Gatt characteristics.
* [mqttclpro ![GitHub Repo Stars](https://img.shields.io/github/stars/dc297/mqttclpro) ![GitHub last commit](https://img.shields.io/github/last-commit/dc297/mqttclpro)](https://github.com/dc297/mqttclpro) - MQTT Client with tasker integration Android app.
* [mqttDB ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/mqttDB) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/mqttDB)](https://github.com/hobbyquaker/mqttDB) - A JSON store with MQTT interface.
* [mqtt-camera-streamer ![GitHub Repo Stars](https://img.shields.io/github/stars/robmarkcole/mqtt-camera-streamer) ![GitHub last commit](https://img.shields.io/github/last-commit/robmarkcole/mqtt-camera-streamer)](https://github.com/robmarkcole/mqtt-camera-streamer) - Stream images from a connected camera over MQTT & view using Streamlit
* [MQTT Joystick Controller ![GitHub Repo Stars](https://img.shields.io/github/stars/Vincenzo-Petrolo/MQTT-Joystick-Controller) ![GitHub last commit](https://img.shields.io/github/last-commit/Vincenzo-Petrolo/MQTT-Joystick-Controller)](https://github.com/Vincenzo-Petrolo/MQTT-Joystick-Controller) - Open Source Android app that lets you control everything with your smartphone. Download it from Google Play.
* [mqtt-transformer ![GitHub Repo Stars](https://img.shields.io/github/stars/tg44/mqtt-transformer) ![GitHub last commit](https://img.shields.io/github/last-commit/tg44/mqtt-transformer)](https://github.com/tg44/mqtt-transformer) - A simple service which consumes, transforms and periodically republish json messages on MQTT.
* [node-mqtt-for-anki-overdrive ![GitHub Repo Stars](https://img.shields.io/github/stars/IBM-Cloud/node-mqtt-for-anki-overdrive) ![GitHub last commit](https://img.shields.io/github/last-commit/IBM-Cloud/node-mqtt-for-anki-overdrive)](https://github.com/IBM-Cloud/node-mqtt-for-anki-overdrive) - Node.js Controller and MQTT API for Anki Overdrive.
* [parrot-sample ![GitHub Repo Stars](https://img.shields.io/github/stars/IBM-Cloud/parrot-sample) ![GitHub last commit](https://img.shields.io/github/last-commit/IBM-Cloud/parrot-sample)](https://github.com/IBM-Cloud/parrot-sample) - Sample code which uses MQTT to control a Parrot AR Drone.
* [serial2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/vortex314/serial2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/vortex314/serial2mqtt)](https://github.com/vortex314/serial2mqtt) - A Linux gateway to connect low-cost microcontrollers only with a serial port to MQTT.
* [snowboy2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/snowboy2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/snowboy2mqtt)](https://github.com/hobbyquaker/snowboy2mqtt) - Publish MQTT Messages on Snowboy Hotword Detection.
* [speedtest2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/speedtest2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/speedtest2mqtt)](https://github.com/hobbyquaker/speedtest2mqtt) - Run speedtest-cli and publish results via MQTT.
* [unifi2mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/hobbyquaker/unifi2mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/hobbyquaker/unifi2mqtt)](https://github.com/hobbyquaker/unifi2mqtt) - Publish connected clients from Ubiquiti Unifi to MQTT.
* [Valetudo ![GitHub Repo Stars](https://img.shields.io/github/stars/Hypfer/Valetudo) ![GitHub last commit](https://img.shields.io/github/last-commit/Hypfer/Valetudo)](https://github.com/Hypfer/Valetudo) - Xiaomi (Roborock) Vacuum Robots Firmware with MQTT and Webinterface.
* [wlan-thermo-mqtt-addon](https://bitbucket.org/IOcastor/wlan-thermo-mqtt-addon/) - Addon for a popular DIY barbecue thermometer.
* Tasker (Automation for Android) [MQTT Publisher Plugin](https://play.google.com/store/apps/details?id=net.nosybore.mqttpublishplugin).
* [MQTT2ETCD ![GitHub Repo Stars](https://img.shields.io/github/stars/David-Lor/MQTT2ETCD) ![GitHub last commit](https://img.shields.io/github/last-commit/David-Lor/MQTT2ETCD)](https://github.com/David-Lor/MQTT2ETCD) - MQTT-ETCD gateway: PUT keys on ETCD through MQTT, and watch ETCD key changes on MQTT topics


### Visualization, Dashboards

* [Crouton ![GitHub Repo Stars](https://img.shields.io/github/stars/edfungus/Crouton) ![GitHub last commit](https://img.shields.io/github/last-commit/edfungus/Crouton)](https://github.com/edfungus/Crouton) - A dashboard that taps into your IOT network, using only MQTT and JSON.
* [d3-MQTT-Topic-Tree ![GitHub Repo Stars](https://img.shields.io/github/stars/hardillb/d3-MQTT-Topic-Tree) ![GitHub last commit](https://img.shields.io/github/last-commit/hardillb/d3-MQTT-Topic-Tree)](https://github.com/hardillb/d3-MQTT-Topic-Tree) - A MQTT Topic Tree viewer using the d3 collapsible tree and MQTT over websockets.
* [HelloIoT ![GitHub Repo Stars](https://img.shields.io/github/stars/adrianromero/helloiot) ![GitHub last commit](https://img.shields.io/github/last-commit/adrianromero/helloiot)](https://github.com/adrianromero/helloiot) - HelloIoT is a MQTT client and dashboard application.
* [HOMR-REACT ![GitHub Repo Stars](https://img.shields.io/github/stars/klauserber/homr-react) ![GitHub last commit](https://img.shields.io/github/last-commit/klauserber/homr-react)](https://github.com/klauserber/homr-react) - A configurable MQTT Visualization.
* [IoT OnOff](https://www.iot-onoff.com/) - Configurable iOS/Android app.
* [Linear MQTT Dashboard ![GitHub Repo Stars](https://img.shields.io/github/stars/ravendmaster/linear-mqtt-dashboard) ![GitHub last commit](https://img.shields.io/github/last-commit/ravendmaster/linear-mqtt-dashboard)](https://github.com/ravendmaster/linear-mqtt-dashboard) - Easy, customizable control panel - MQTT-client.
* [MMM-mqtt ![GitHub Repo Stars](https://img.shields.io/github/stars/javiergayala/MMM-mqtt) ![GitHub last commit](https://img.shields.io/github/last-commit/javiergayala/MMM-mqtt)](https://github.com/javiergayala/MMM-mqtt) - This is an extension for the MagicMirror². It provides the ability to subscribe to MQTT topics and display them.
* [MQTT Dash](https://play.google.com/store/apps/details?id=net.routix.mqttdash&hl=de) - Android App: With the app you can create dashboards for your MQTT enabled IoT Smart Home devices and applications.
* [MQTT-Hyperdash ![GitHub Repo Stars](https://img.shields.io/github/stars/kollokollo/MQTT-Hyperdash) ![GitHub last commit](https://img.shields.io/github/last-commit/kollokollo/MQTT-Hyperdash)](https://github.com/kollokollo/MQTT-Hyperdash) - A universal independent MQTT Dashboard for linux/Raspberry Pi.
* [MQTT.Cool Test Client](https://testclient-cloud.mqtt.cool) - A web interface for testing interaction between MQTT.Cool and any MQTT broker.
* [mqtt-panel ![GitHub Repo Stars](https://img.shields.io/github/stars/fabaff/mqtt-panel) ![GitHub last commit](https://img.shields.io/github/last-commit/fabaff/mqtt-panel)](https://github.com/fabaff/mqtt-panel) - A web interface for MQTT.
* [mqtt-prometheus-message-exporter ![GitHub Repo Stars](https://img.shields.io/github/stars/tg44/mqtt-prometheus-message-exporter) ![GitHub last commit](https://img.shields.io/github/last-commit/tg44/mqtt-prometheus-message-exporter)](https://github.com/tg44/mqtt-prometheus-message-exporter) - A small service which will convert mqtt messages to prometheus metrics.
* [mqtt-svg-dash ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmens/mqtt-svg-dash) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmens/mqtt-svg-dash)](https://github.com/jpmens/mqtt-svg-dash) - Subscribe to MQTT, extract JSON from a message and make lights blink on an SVG page.
* [mqtt2highcharts ![GitHub Repo Stars](https://img.shields.io/github/stars/matbor/mqtt2highcharts) ![GitHub last commit](https://img.shields.io/github/last-commit/matbor/mqtt2highcharts)](https://github.com/matbor/mqtt2highcharts) - Plotting live numbered data from a subscribed MQTT topic using Highcharts.
* [MYHELLOIOT](https://adrianromero.github.io/myhelloiot/) - MYHELLOIOT is a MQTT dashboard application inspired in my other MQTT project HelloIoT.
* [node-red-dashboard ![GitHub Repo Stars](https://img.shields.io/github/stars/node-red/node-red-dashboard) ![GitHub last commit](https://img.shields.io/github/last-commit/node-red/node-red-dashboard)](https://github.com/node-red/node-red-dashboard) - A dashboard UI for Node-RED.
* [PlotJuggler ![GitHub Repo Stars](https://img.shields.io/github/stars/facontidavide/PlotJuggler) ![GitHub last commit](https://img.shields.io/github/last-commit/facontidavide/PlotJuggler)](https://github.com/facontidavide/PlotJuggler) - PlotJuggler is a tool to visualize time series (from sources such as: MQTT, Websockets, ZeroMQ, UDP, etc., supports data formats such as JSON, CBOR, BSON, Message Pack, etc.). It is a fast, powerful and intuitive cross-platform tool.



Other tools that can be used to create Visualization/Dashboards can be found under [Platforms](#platforms) and [Smart Home Integration Software](#smart-home-integration-software).


### Architecture, Convention

* [mqtt-smarthome ![GitHub Repo Stars](https://img.shields.io/github/stars/mqtt-smarthome/mqtt-smarthome) ![GitHub last commit](https://img.shields.io/github/last-commit/mqtt-smarthome/mqtt-smarthome)](https://github.com/mqtt-smarthome/mqtt-smarthome) - Smart home automation with MQTT as the central message bus - Architectural proposal.
* [The Homie Convention ![GitHub Repo Stars](https://img.shields.io/github/stars/homieiot/convention) ![GitHub last commit](https://img.shields.io/github/last-commit/homieiot/convention)](https://github.com/homieiot/convention) - A lightweight MQTT convention for the IoT.

### Security, Encryption

* [Teserakt E4](https://teserakt.io/) - End-to-end encryption and key management for MQTT and other M2M protocols ��� Open-source and paid plans.


## Contribute

Contributions welcome! Read the [contribution guidelines](contributing.md) first.


## License

[![CC0](https://i.creativecommons.org/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)
