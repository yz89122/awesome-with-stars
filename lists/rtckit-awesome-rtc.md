# Awesome Real Time Communications [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Protocols and methodology for near simultaneous exchange of media and data.


## Contents

- [Server Software](#server-software)
  - [General Purpose](#general-purpose)
  - [SIP Servers](#sip-servers)
  - [Media Servers](#media-servers)
  - [STUN/TURN](#stunturn)
- [Operations](#operations)
  - [Monitoring](#monitoring)
  - [Testing](#testing)
  - [Deployment](#deployment)
  - [Web/API Interfaces](#webapi-interfaces)
  - [Billing](#billing)
- [Developer Resources](#developer-resources)
  - [Tutorials](#tutorials)
  - [JavaScript Libraries](#javascript-libraries)
  - [C/C++ Libraries](#cc-libraries)
  - [Go Libraries](#go-libraries)
  - [PHP Libraries](#php-libraries)
  - [Python Libraries](#python-libraries)
  - [Erlang Libraries](#erlang-libraries)
  - [Rust Libraries](#rust-libraries)
  - [Dart Libraries](#dart-libraries)
- [Blogs](#blogs)
- [Discussion](#discussion)
- [Events](#events)
- [Related Lists](#related-lists)
- [Contribute](#contribute)


## Server Software

### General Purpose

- [FreeSWITCH](http://freeswitch.org) - Open source multi-protocol, cross-platform and software switch.
- [Asterisk](http://asterisk.org) - PBX framework supporting multiple protocols and platforms.

### SIP Servers

- [Kamailio](http://www.kamailio.org) - Open source SIP server widely deployed by carriers and providers. Formerly known as OpenSER.
- [OpenSIPS](http://www.opensips.org) - Open source SIP server, tracing its roots in OpenSER (presently Kamailio).
- [Routr](https://routr.io) - Lightweight SIP proxy, location server, and registrar written in Node.js.
- [Sippy B2BUA ![GitHub Repo Stars](https://img.shields.io/github/stars/sippy/b2bua) ![GitHub last commit](https://img.shields.io/github/last-commit/sippy/b2bua)](https://github.com/sippy/b2bua) - Back-to-back user agent server written in Python.
- [Flexisip ![GitHub Repo Stars](https://img.shields.io/github/stars/BelledonneCommunications/flexisip) ![GitHub last commit](https://img.shields.io/github/last-commit/BelledonneCommunications/flexisip)](https://github.com/BelledonneCommunications/flexisip) - SIP server suite comprising proxy, presence and group chat functions.

### Media Servers

- [Janus](https://janus.conf.meetecho.com) - Lightweight open source, general purpose, WebRTC gateway.
- [RTPProxy](https://www.rtpproxy.org) - General purpose high performance RTP proxy.
- [RTP:Engine ![GitHub Repo Stars](https://img.shields.io/github/stars/sipwise/rtpengine) ![GitHub last commit](https://img.shields.io/github/last-commit/sipwise/rtpengine)](https://github.com/sipwise/rtpengine) - RTP and UDP based media traffic proxy, usable as a kernel module.
- [mediasoup](https://mediasoup.org) - Specialized WebRTC conferencing system.
- [SEMS ![GitHub Repo Stars](https://img.shields.io/github/stars/sems-server/sems) ![GitHub last commit](https://img.shields.io/github/last-commit/sems-server/sems)](https://github.com/sems-server/sems) - Open source media and application server for SIP based VoIP services.
- [Jitsi](https://jitsi.org/projects) - A collection of RTC open source projects, with a focus on conferencing software.

### STUN/TURN

- [coturn ![GitHub Repo Stars](https://img.shields.io/github/stars/coturn/coturn) ![GitHub last commit](https://img.shields.io/github/last-commit/coturn/coturn)](https://github.com/coturn/coturn) - Fully featured TURN/STUN server supporting multiple platforms.
- [STUNTMAN ![GitHub Repo Stars](https://img.shields.io/github/stars/jselbie/stunserver) ![GitHub last commit](https://img.shields.io/github/last-commit/jselbie/stunserver)](https://github.com/jselbie/stunserver) - RFC compliant open source STUN implementation.


## Operations

### Monitoring

- [sngrep ![GitHub Repo Stars](https://img.shields.io/github/stars/irontec/sngrep) ![GitHub last commit](https://img.shields.io/github/last-commit/irontec/sngrep)](https://github.com/irontec/sngrep) - Terminal based SIP flow viewer.
- [sipgrep ![GitHub Repo Stars](https://img.shields.io/github/stars/sipcapture/sipgrep) ![GitHub last commit](https://img.shields.io/github/last-commit/sipcapture/sipgrep)](https://github.com/sipcapture/sipgrep) - Console tool for sniffing, capturing and exploring SIP traffic.
- [rtpbreak ![GitHub Repo Stars](https://img.shields.io/github/stars/Naishy/rtpsplit) ![GitHub last commit](https://img.shields.io/github/last-commit/Naishy/rtpsplit)](https://github.com/Naishy/rtpsplit) - Detect, reconstruct and analyze RTP sessions.
- [HOMER ![GitHub Repo Stars](https://img.shields.io/github/stars/sipcapture/homer) ![GitHub last commit](https://img.shields.io/github/last-commit/sipcapture/homer)](https://github.com/sipcapture/homer) - Multi-protocol capturing and monitoring framework for RTC.
- [WebRTC Troubleshooter ![GitHub Repo Stars](https://img.shields.io/github/stars/webrtc/testrtc) ![GitHub last commit](https://img.shields.io/github/last-commit/webrtc/testrtc)](https://github.com/webrtc/testrtc) - Self-hosted one stop client-side WebRTC troubleshooter.
- [Trickle ICE](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice) - Exposes client-side NAT traversal debug data.
- [SIP3](https://sip3.io) - VoIP & RTC traffic monitoring and analysis platform.

### Testing

- [SIPp](http://sipp.sourceforge.net) - Traffic generator for the SIP protocol.
- [SIPVicious ![GitHub Repo Stars](https://img.shields.io/github/stars/EnableSecurity/sipvicious) ![GitHub last commit](https://img.shields.io/github/last-commit/EnableSecurity/sipvicious)](https://github.com/EnableSecurity/sipvicious) - Suite of security tools that can be used to audit SIP based VoIP systems.
- [sipsak ![GitHub Repo Stars](https://img.shields.io/github/stars/nils-ohlmeier/sipsak) ![GitHub last commit](https://img.shields.io/github/last-commit/nils-ohlmeier/sipsak)](https://github.com/nils-ohlmeier/sipsak) - SIP stress and diagnostics utility.
- [sipexer ![GitHub Repo Stars](https://img.shields.io/github/stars/miconda/sipexer) ![GitHub last commit](https://img.shields.io/github/last-commit/miconda/sipexer)](https://github.com/miconda/sipexer) - Modern and flexible SIP command line tool.

### Deployment

- [slimswitch ![GitHub Repo Stars](https://img.shields.io/github/stars/rtckit/slimswitch) ![GitHub last commit](https://img.shields.io/github/last-commit/rtckit/slimswitch)](https://github.com/rtckit/slimswitch) - Tooling for creating lean secure FreeSWITCH Docker images.

### Web/API Interfaces

- [Eqivo](https://eqivo.org) - Open source programmable-voice/telephony API platform.
- [Kazoo](https://www.2600hz.org) - Carrier-grade VoIP API platform using FreeSWITCH and Kamailio.
- [FusionPBX](https://www.fusionpbx.com) - Multitenant system built on top of FreeSWITCH.
- [FreePBX](https://www.freepbx.org) - Web Manager for Asterisk.
- [Fonoster ![GitHub Repo Stars](https://img.shields.io/github/stars/fonoster/fonoster) ![GitHub last commit](https://img.shields.io/github/last-commit/fonoster/fonoster)](https://github.com/fonoster/fonoster) - Telecommunication stack built with Node.js.
- [Wazo](https://wazo-platform.org) - VoIP API platform built on top of Asterisk, Kamailio and RTPEngine.
- [jambonz](https://www.jambonz.org) - Open source CPaaS built for communications service providers.
- [IVOZ Provider ![GitHub Repo Stars](https://img.shields.io/github/stars/irontec/ivozprovider) ![GitHub last commit](https://img.shields.io/github/last-commit/irontec/ivozprovider)](https://github.com/irontec/ivozprovider) - Multitenant solution for VoIP telephony providers.

### Billing

- [CGRateS](http://cgrates.org) - Carrier grade open source billing/rating server.
- [A2Billing](http://www.asterisk2billing.org) - Billing system for Asterisk for multiple applications.
- [PyFreeBilling ![GitHub Repo Stars](https://img.shields.io/github/stars/mwolff44/pyfreebilling) ![GitHub last commit](https://img.shields.io/github/last-commit/mwolff44/pyfreebilling)](https://github.com/mwolff44/pyfreebilling) - Wholesale billing platform for Kamailio and FreeSWITCH.


## Developer Resources

### Tutorials

- [Official Website](https://webrtc.org) - Entry level WebRTC resources.
- [Getting Started With WebRTC](https://www.html5rocks.com/en/tutorials/webrtc/basics) - WebRTC tutorial by HTML5 Rocks.
- [WebRTC Samples](https://webrtc.github.io/samples) - Collection of samples demonstrating various parts of the WebRTC APIs.
- [WebRTC Experiments](https://www.webrtc-experiment.com) - Comprehensive list of samples by Muaz Khan.
- [Interactive Codelab](https://codelabs.developers.google.com/codelabs/webrtc-web) - 30 minutes step by step live tutorial by Google.

### JavaScript Libraries

- [drachtio](https://drachtio.org) - Node.js SIP server framework.
- [adapter.js ![GitHub Repo Stars](https://img.shields.io/github/stars/webrtcHacks/adapter) ![GitHub last commit](https://img.shields.io/github/last-commit/webrtcHacks/adapter)](https://github.com/webrtcHacks/adapter) - JavaScript shim for abstracting WebRTC spec changes and inconsistencies.
- [JsSIP](http://jssip.net) - Lightweight open source JavaScript SIP library.
- [sipML5](https://www.doubango.org/sipml5) - Open source JavaScript SIP client with WebRTC media stack.
- [simple-peer ![GitHub Repo Stars](https://img.shields.io/github/stars/feross/simple-peer) ![GitHub last commit](https://img.shields.io/github/last-commit/feross/simple-peer)](https://github.com/feross/simple-peer) - WebRTC video, voice, and data channels abstraction for Node.js and the browser.
- [Netflux ![GitHub Repo Stars](https://img.shields.io/github/stars/coast-team/netflux) ![GitHub last commit](https://img.shields.io/github/last-commit/coast-team/netflux)](https://github.com/coast-team/netflux) - Isomorphic JavaScript peer to peer transport API for client and server.
- [PeerJS](https://peerjs.com) - Data and media peer-to-peer connection API implemented over WebRTC.

### C/C++ Libraries

- [libre ![GitHub Repo Stars](https://img.shields.io/github/stars/creytiv/re) ![GitHub last commit](https://img.shields.io/github/last-commit/creytiv/re)](https://github.com/creytiv/re) - Portable SIP Stack along with companion libraries for media handling, STUN/TURN and a modular user agent.
- [PJSIP](https://www.pjsip.org) - Multi-protocol RTC library written in C.
- [eXosip](http://savannah.nongnu.org/projects/exosip) - eXtended osip is a mature C library for abstracting the SIP protocol.
- [libdatachannel ![GitHub Repo Stars](https://img.shields.io/github/stars/paullouisageneau/libdatachannel) ![GitHub last commit](https://img.shields.io/github/last-commit/paullouisageneau/libdatachannel)](https://github.com/paullouisageneau/libdatachannel) - Standalone WebRTC DataChannels C++ implementation.
- [libSRTP ![GitHub Repo Stars](https://img.shields.io/github/stars/cisco/libsrtp) ![GitHub last commit](https://img.shields.io/github/last-commit/cisco/libsrtp)](https://github.com/cisco/libsrtp) - Secure Real-time Transport Protocol (SRTP) library for C.
- [usrsctp ![GitHub Repo Stars](https://img.shields.io/github/stars/sctplab/usrsctp) ![GitHub last commit](https://img.shields.io/github/last-commit/sctplab/usrsctp)](https://github.com/sctplab/usrsctp) - Portable Stream Control Transmission Protocol (SCTP) user-land stack.
- [rawrtc ![GitHub Repo Stars](https://img.shields.io/github/stars/rawrtc/rawrtc) ![GitHub last commit](https://img.shields.io/github/last-commit/rawrtc/rawrtc)](https://github.com/rawrtc/rawrtc) - WebRTC and ORTC library with a small footprint.
- [OSS Core ![GitHub Repo Stars](https://img.shields.io/github/stars/joegen/oss_core) ![GitHub last commit](https://img.shields.io/github/last-commit/joegen/oss_core)](https://github.com/joegen/oss_core) - General purpose C++ library for Real Time Communications.
- [Open WebRTC Toolkit](https://01.org/open-webrtc-toolkit) - WebRTC development toolkit with bindings for multiple platforms.
- [Sofia-SIP ![GitHub Repo Stars](https://img.shields.io/github/stars/freeswitch/sofia-sip) ![GitHub last commit](https://img.shields.io/github/last-commit/freeswitch/sofia-sip)](https://github.com/freeswitch/sofia-sip) - Open source SIP library used by FreeSWITCH.

### Go Libraries

- [Pion](https://pion.ly) - Extensive software stack for WebRTC written in Go.
- [gossip ![GitHub Repo Stars](https://img.shields.io/github/stars/StefanKopieczek/gossip) ![GitHub last commit](https://img.shields.io/github/last-commit/StefanKopieczek/gossip)](https://github.com/StefanKopieczek/gossip) - SIP stack for stateful user agents written in Go.
- [siprocket ![GitHub Repo Stars](https://img.shields.io/github/stars/marv2097/siprocket) ![GitHub last commit](https://img.shields.io/github/last-commit/marv2097/siprocket)](https://github.com/marv2097/siprocket) - Fast SIP and SDP packet parser.
- [go-diameter ![GitHub Repo Stars](https://img.shields.io/github/stars/fiorix/go-diameter) ![GitHub last commit](https://img.shields.io/github/last-commit/fiorix/go-diameter)](https://github.com/fiorix/go-diameter) - RFC compliant Diameter protocol library.

### PHP Libraries

- [RTCKit/SIP ![GitHub Repo Stars](https://img.shields.io/github/stars/rtckit/php-sip) ![GitHub last commit](https://img.shields.io/github/last-commit/rtckit/php-sip)](https://github.com/rtckit/php-sip) - RFC 3261 compliant SIP parsing and rendering library for PHP 7.4+.

### Python Libraries

- [aiortc ![GitHub Repo Stars](https://img.shields.io/github/stars/aiortc/aiortc) ![GitHub last commit](https://img.shields.io/github/last-commit/aiortc/aiortc)](https://github.com/aiortc/aiortc) - WebRTC and ORTC implementation for Python using asyncio.
- [Katari ![GitHub Repo Stars](https://img.shields.io/github/stars/hyperioxx/Katari) ![GitHub last commit](https://img.shields.io/github/last-commit/hyperioxx/Katari)](https://github.com/hyperioxx/Katari) - SIP stack application framework.
- [peerjs-python ![GitHub Repo Stars](https://img.shields.io/github/stars/ambianic/peerjs-python) ![GitHub last commit](https://img.shields.io/github/last-commit/ambianic/peerjs-python)](https://github.com/ambianic/peerjs-python) - Python port of the PeerJS peer-to-peer connection library.

### Erlang Libraries

- [NkSIP ![GitHub Repo Stars](https://img.shields.io/github/stars/NetComposer/nksip) ![GitHub last commit](https://img.shields.io/github/last-commit/NetComposer/nksip)](https://github.com/NetComposer/nksip) - Extendable SIP server framework.
- [ersip ![GitHub Repo Stars](https://img.shields.io/github/stars/poroh/ersip) ![GitHub last commit](https://img.shields.io/github/last-commit/poroh/ersip)](https://github.com/poroh/ersip) - Library comprising building blocks for SIP applications.

### Rust Libraries

- [libsip](https://docs.rs/libsip/0.2.4/libsip) - SIP implementation, with a focus towards softphone clients.
- [sipcore ![GitHub Repo Stars](https://img.shields.io/github/stars/armatusmiles/sipcore) ![GitHub last commit](https://img.shields.io/github/last-commit/armatusmiles/sipcore)](https://github.com/armatusmiles/sipcore) - Rust framework for creating SIP applications.
- [rtcrs/webrtc ![GitHub Repo Stars](https://img.shields.io/github/stars/rtcrs/webrtc) ![GitHub last commit](https://img.shields.io/github/last-commit/rtcrs/webrtc)](https://github.com/rtcrs/webrtc) - WebRTC stack, supporting SDP, RTP, RTCP and SRTP.

### Dart Libraries

- [dart-sip-ua ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudwebrtc/dart-sip-ua) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudwebrtc/dart-sip-ua)](https://github.com/cloudwebrtc/dart-sip-ua) - Dart-lang port of JsSIP, capable of SIP over WebSocket.


## Blogs

- [BlogGeekMe](https://bloggeek.me/blog) - Blog by Tsahi Levent-Levi with a strong focus on WebRTC.
- [SIP Adventures](https://andrewjprokop.wordpress.com) - Unified communications blog by Andrew Prokop.
- [WebRTCHacks](https://webrtchacks.com) - WebRTC blog by independent technologists.


## Discussion

- [FreeSWITCH Slack](https://signalwire.community) - Join #freeswitch and #freeswitch-dev for user and developer support.
- [discuss-webrtc](https://groups.google.com/forum/?fromgroups#!forum/discuss-webrtc) - Developer oriented Google Group for WebRTC discussions.


## Events

- [ClueCon](http://cluecon.com) - Annual conference held in Chicago for telecommunications developers. Birthplace of FreeSWITCH.
- [Kamailio World](https://www.kamailioworld.com) - Berlin hosted annual event focused on Kamailio as well as VoIP, WebRTC, IMS, VoLTE and more.
- [AstriCon](https://www.asterisk.org/community/astricon-user-conference) - Asterisk focus event held every year across the US.
- [CommCon](https://commcon.xyz) - Annual conference held in the UK focused on telecommunications in general and WebRTC in particular.
- [OpenSIPS Summit](https://www.opensips.org/events) - Meeting place for the OpenSIPS community.
- [Kranky Geek](https://krankygeek.com) - AI and RTC event in San Francisco.
- [FOSDEM](https://fosdem.org) - Free event for software developers, with a RTC component, held every year in Europe.
- [JanusCon](https://www.januscon.it) - JanusCon is a live event for Janus and RTC implementers.
- [TADHack](https://tadhack.com) - Global hackathon focused on programmable communications.


## Related Lists

- [Awesome RIPT ![GitHub Repo Stars](https://img.shields.io/github/stars/rtckit/awesome-ript) ![GitHub last commit](https://img.shields.io/github/last-commit/rtckit/awesome-ript)](https://github.com/rtckit/awesome-ript) - Real Time Internet Peering for Telephony.
- [Awesome RTC Hacking ![GitHub Repo Stars](https://img.shields.io/github/stars/EnableSecurity/awesome-rtc-hacking) ![GitHub last commit](https://img.shields.io/github/last-commit/EnableSecurity/awesome-rtc-hacking)](https://github.com/EnableSecurity/awesome-rtc-hacking) - Real Time Communications hacking and penetration testing resources.
- [Awesome 5G ![GitHub Repo Stars](https://img.shields.io/github/stars/calee0219/awesome-5g) ![GitHub last commit](https://img.shields.io/github/last-commit/calee0219/awesome-5g)](https://github.com/calee0219/awesome-5g) - 5G frameworks, libraries, software and resources.
- [Awesome Cellular Hacking ![GitHub Repo Stars](https://img.shields.io/github/stars/W00t3k/Awesome-Cellular-Hacking) ![GitHub last commit](https://img.shields.io/github/last-commit/W00t3k/Awesome-Cellular-Hacking)](https://github.com/W00t3k/Awesome-Cellular-Hacking) - Research resources in the 3G/4G/5G Cellular security space.
- [Awesome Telco ![GitHub Repo Stars](https://img.shields.io/github/stars/ravens/awesome-telco) ![GitHub last commit](https://img.shields.io/github/last-commit/ravens/awesome-telco)](https://github.com/ravens/awesome-telco) - Telco resources and projects.
- [SIP Resources ![GitHub Repo Stars](https://img.shields.io/github/stars/miconda/sip-resources) ![GitHub last commit](https://img.shields.io/github/last-commit/miconda/sip-resources)](https://github.com/miconda/sip-resources) - Useful SIP resources curated by Kamailio's head developer.


## Contribute

Contributions welcome! Read the [contribution guidelines](CONTRIBUTING.md) first.
