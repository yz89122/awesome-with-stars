# Awesome Real Time Communications [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> Protocols and methodology for near simultaneous exchange of media and data.


## Contents

- [Server Software](#server-software)
  - [General Purpose](#general-purpose)
  - [SIP Servers](#sip-servers)
  - [Media Servers](#media-servers)
  - [STUN/TURN](#stunturn)
- [Clients](#clients)
- [Operations](#operations)
  - [Monitoring](#monitoring)
  - [Testing](#testing)
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
  - [Media over QUIC](#media-over-quic)
- [Blogs](#blogs)
- [Discussion](#discussion)
- [Events and Talks](#events-and-talks)
- [Contribute](#contribute)


## Server Software

### General Purpose

- [FreeSWITCH ![GitHub Repo Stars](https://img.shields.io/github/stars/signalwire/freeswitch) ![GitHub last commit](https://img.shields.io/github/last-commit/signalwire/freeswitch)](https://github.com/signalwire/freeswitch) - Open source communications server for voice, video, messaging and conferencing.
- [Asterisk](https://www.asterisk.org/) - PBX framework supporting multiple protocols and platforms.

### SIP Servers

- [Kamailio](https://www.kamailio.org/w/) - Open source SIP server for routing, registration, presence and large-scale deployments.
- [OpenSIPS](https://opensips.org/) - Open source SIP proxy and application server for VoIP platforms.
- [Routr](https://routr.io) - Cloud-native SIP proxy, registrar and location service.
- [Sippy B2BUA ![GitHub Repo Stars](https://img.shields.io/github/stars/sippy/b2bua) ![GitHub last commit](https://img.shields.io/github/last-commit/sippy/b2bua)](https://github.com/sippy/b2bua) - Back-to-back user agent server written in Python.
- [Flexisip ![GitHub Repo Stars](https://img.shields.io/github/stars/BelledonneCommunications/flexisip) ![GitHub last commit](https://img.shields.io/github/last-commit/BelledonneCommunications/flexisip)](https://github.com/BelledonneCommunications/flexisip) - SIP server suite comprising proxy, presence and group chat functions.
- [FreeSBC ![GitHub Repo Stars](https://img.shields.io/github/stars/rasonyang/freesbc) ![GitHub last commit](https://img.shields.io/github/last-commit/rasonyang/freesbc)](https://github.com/rasonyang/freesbc) - Open source SIP/WebRTC edge proxy with an embedded RTP relay for FreeSWITCH and Asterisk.
- [P-KISS-SBC ![GitHub Repo Stars](https://img.shields.io/github/stars/mwolff44/pk-sbc) ![GitHub last commit](https://img.shields.io/github/last-commit/mwolff44/pk-sbc)](https://github.com/mwolff44/pk-sbc) - Kamailio and rtpengine-based session border controller for connecting SIP trunks and PBXs.

### Media Servers

- [Janus](https://janus.conf.meetecho.com) - Lightweight open source, general purpose, WebRTC gateway.
- [LiveKit ![GitHub Repo Stars](https://img.shields.io/github/stars/livekit/livekit) ![GitHub last commit](https://img.shields.io/github/last-commit/livekit/livekit)](https://github.com/livekit/livekit) - Open source WebRTC server and SDK ecosystem for real-time audio, video and data.
- [RTPProxy](https://www.rtpproxy.org) - General purpose high performance RTP proxy.
- [rtpengine ![GitHub Repo Stars](https://img.shields.io/github/stars/sipwise/rtpengine) ![GitHub last commit](https://img.shields.io/github/last-commit/sipwise/rtpengine)](https://github.com/sipwise/rtpengine) - RTP and UDP based media traffic proxy, usable as a kernel module.
- [mediasoup](https://mediasoup.org) - Specialized WebRTC conferencing system.
- [SEMS ![GitHub Repo Stars](https://img.shields.io/github/stars/sems-server/sems) ![GitHub last commit](https://img.shields.io/github/last-commit/sems-server/sems)](https://github.com/sems-server/sems) - Open source media and application server for SIP based VoIP services.
- [Jitsi](https://jitsi.org/projects) - A collection of RTC open source projects, with a focus on conferencing software.
- [MediaMTX ![GitHub Repo Stars](https://img.shields.io/github/stars/bluenviron/mediamtx) ![GitHub last commit](https://img.shields.io/github/last-commit/bluenviron/mediamtx)](https://github.com/bluenviron/mediamtx) - Media server and proxy bridging WebRTC, RTSP, RTMP and SRT streams, with recording and playback.
- [go2rtc ![GitHub Repo Stars](https://img.shields.io/github/stars/AlexxIT/go2rtc) ![GitHub last commit](https://img.shields.io/github/last-commit/AlexxIT/go2rtc)](https://github.com/AlexxIT/go2rtc) - Camera streaming gateway with WebRTC viewing, RTSP restreaming and two-way audio integrations.

### STUN/TURN

- [coturn ![GitHub Repo Stars](https://img.shields.io/github/stars/coturn/coturn) ![GitHub last commit](https://img.shields.io/github/last-commit/coturn/coturn)](https://github.com/coturn/coturn) - Fully featured TURN/STUN server supporting multiple platforms.
- [eturnal](https://eturnal.net/) - Modern and scalable STUN/TURN server written in Erlang.
- [STUNner ![GitHub Repo Stars](https://img.shields.io/github/stars/l7mp/stunner) ![GitHub last commit](https://img.shields.io/github/last-commit/l7mp/stunner)](https://github.com/l7mp/stunner) - Kubernetes-native STUN/TURN gateway for WebRTC media.
- [STUNTMAN ![GitHub Repo Stars](https://img.shields.io/github/stars/jselbie/stunserver) ![GitHub last commit](https://img.shields.io/github/last-commit/jselbie/stunserver)](https://github.com/jselbie/stunserver) - RFC compliant open source STUN implementation.


## Clients

- [Web SIP Phone ![GitHub Repo Stars](https://img.shields.io/github/stars/rasonyang/web-sip-phone) ![GitHub last commit](https://img.shields.io/github/last-commit/rasonyang/web-sip-phone)](https://github.com/rasonyang/web-sip-phone) - Chrome extension maintaining SIP/WebRTC audio for server-controlled call center agents.
- [baresip ![GitHub Repo Stars](https://img.shields.io/github/stars/baresip/baresip) ![GitHub last commit](https://img.shields.io/github/last-commit/baresip/baresip)](https://github.com/baresip/baresip) - Modular SIP user agent with command-line controls, audio/video calls and pluggable media modules.


## Operations

### Monitoring

- [sngrep ![GitHub Repo Stars](https://img.shields.io/github/stars/irontec/sngrep) ![GitHub last commit](https://img.shields.io/github/last-commit/irontec/sngrep)](https://github.com/irontec/sngrep) - Terminal based SIP flow viewer.
- [sip-exporter ![GitHub Repo Stars](https://img.shields.io/github/stars/aibudaevv/sip-exporter) ![GitHub last commit](https://img.shields.io/github/last-commit/aibudaevv/sip-exporter)](https://github.com/aibudaevv/sip-exporter) - Open-source eBPF sensor exporting Prometheus metrics and Grafana dashboards for host-observed IPv4/UDP SIP and correlated RTP/RTCP.
- [sipgrep ![GitHub Repo Stars](https://img.shields.io/github/stars/sipcapture/sipgrep) ![GitHub last commit](https://img.shields.io/github/last-commit/sipcapture/sipgrep)](https://github.com/sipcapture/sipgrep) - Console tool for sniffing, capturing and exploring SIP traffic.
- [HOMER ![GitHub Repo Stars](https://img.shields.io/github/stars/sipcapture/homer) ![GitHub last commit](https://img.shields.io/github/last-commit/sipcapture/homer)](https://github.com/sipcapture/homer) - Multi-protocol capturing and monitoring framework for RTC.
- [Trickle ICE](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice) - Exposes client-side NAT traversal debug data.
- [rtcStats ![GitHub Repo Stars](https://img.shields.io/github/stars/rtcstats/rtcstats) ![GitHub last commit](https://img.shields.io/github/last-commit/rtcstats/rtcstats)](https://github.com/rtcstats/rtcstats) - WebRTC API trace and getStats collection, storage and feature extraction tooling.
- [SIP3 Community Edition](https://sip3.io/docs/InstallationGuide.html) - Open source SIP/RTP capture, analysis and monitoring components with community deployment tooling.

### Testing

- [SIPp ![GitHub Repo Stars](https://img.shields.io/github/stars/SIPp/sipp) ![GitHub last commit](https://img.shields.io/github/last-commit/SIPp/sipp)](https://github.com/SIPp/sipp) - Traffic generator and scenario-based test tool for the SIP protocol.
- [SIPVicious ![GitHub Repo Stars](https://img.shields.io/github/stars/EnableSecurity/sipvicious) ![GitHub last commit](https://img.shields.io/github/last-commit/EnableSecurity/sipvicious)](https://github.com/EnableSecurity/sipvicious) - Suite of security tools that can be used to audit SIP based VoIP systems.
- [sipsak ![GitHub Repo Stars](https://img.shields.io/github/stars/nils-ohlmeier/sipsak) ![GitHub last commit](https://img.shields.io/github/last-commit/nils-ohlmeier/sipsak)](https://github.com/nils-ohlmeier/sipsak) - SIP stress and diagnostics utility.
- [sipexer ![GitHub Repo Stars](https://img.shields.io/github/stars/miconda/sipexer) ![GitHub last commit](https://img.shields.io/github/last-commit/miconda/sipexer)](https://github.com/miconda/sipexer) - Modern and flexible SIP command line tool.
- [natcheck ![GitHub Repo Stars](https://img.shields.io/github/stars/1mb-dev/natcheck) ![GitHub last commit](https://img.shields.io/github/last-commit/1mb-dev/natcheck)](https://github.com/1mb-dev/natcheck) - NAT diagnosis CLI that probes STUN servers and reports mapping behaviour and a WebRTC P2P forecast.

### Web/API Interfaces

- [Eqivo](https://eqivo.org) - Open source programmable-voice/telephony API platform.
- [Kazoo ![GitHub Repo Stars](https://img.shields.io/github/stars/2600hz/kazoo) ![GitHub last commit](https://img.shields.io/github/last-commit/2600hz/kazoo)](https://github.com/2600hz/kazoo/tree/4.3) - Legacy open source VoIP API platform built on FreeSWITCH and Kamailio, available in the public 4.3 branch.
- [FusionPBX](https://www.fusionpbx.com) - Multitenant system built on top of FreeSWITCH.
- [FreePBX](https://www.freepbx.org) - Web Manager for Asterisk.
- [Fonoster ![GitHub Repo Stars](https://img.shields.io/github/stars/fonoster/fonoster) ![GitHub last commit](https://img.shields.io/github/last-commit/fonoster/fonoster)](https://github.com/fonoster/fonoster) - Open source platform for programmable voice and voice AI applications.
- [Wazo](https://wazo-platform.org) - VoIP API platform built on top of Asterisk, Kamailio and RTPEngine.
- [jambonz](https://www.jambonz.org) - Open source CPaaS built for communications service providers.
- [IVOZ Provider ![GitHub Repo Stars](https://img.shields.io/github/stars/irontec/ivozprovider) ![GitHub last commit](https://img.shields.io/github/last-commit/irontec/ivozprovider)](https://github.com/irontec/ivozprovider) - Multitenant solution for VoIP telephony providers.
- [Sayna ![GitHub Repo Stars](https://img.shields.io/github/stars/SaynaAI/sayna) ![GitHub last commit](https://img.shields.io/github/last-commit/SaynaAI/sayna)](https://github.com/SaynaAI/sayna) - Real-time speech infrastructure for voice AI with WebSocket streaming, SIP telephony and pluggable STT/TTS providers.
- [AI Native Call Center ![GitHub Repo Stars](https://img.shields.io/github/stars/rasonyang/ai-native-callcenter) ![GitHub last commit](https://img.shields.io/github/last-commit/rasonyang/ai-native-callcenter)](https://github.com/rasonyang/ai-native-callcenter) - FreeSWITCH-based call center with speech-to-speech AI, agent queues and a web interface/API.

### Billing

- [CGRateS ![GitHub Repo Stars](https://img.shields.io/github/stars/cgrates/cgrates) ![GitHub last commit](https://img.shields.io/github/last-commit/cgrates/cgrates)](https://github.com/cgrates/cgrates) - Open source rating, charging and billing engine for telecom and ISP services.


## Developer Resources

### Tutorials

- [WebRTC.org](https://webrtc.org/) - Official WebRTC guides, APIs and project resources.
- [Getting Started With WebRTC](https://webrtc.org/getting-started/overview) - Official introduction to media capture and peer-to-peer connectivity APIs.
- [WebRTC Samples](https://webrtc.github.io/samples) - Collection of samples demonstrating various parts of the WebRTC APIs.
- [WebRTC for the Curious](https://webrtcforthecurious.com/) - Open book explaining WebRTC protocols, architecture and practical debugging.

### JavaScript Libraries

- [drachtio](https://drachtio.org) - Node.js SIP server framework.
- [adapter.js ![GitHub Repo Stars](https://img.shields.io/github/stars/webrtcHacks/adapter) ![GitHub last commit](https://img.shields.io/github/last-commit/webrtcHacks/adapter)](https://github.com/webrtcHacks/adapter) - JavaScript shim for abstracting WebRTC spec changes and inconsistencies.
- [JsSIP](https://jssip.net/) - Open source JavaScript SIP library with WebRTC media support.
- [simple-peer ![GitHub Repo Stars](https://img.shields.io/github/stars/feross/simple-peer) ![GitHub last commit](https://img.shields.io/github/last-commit/feross/simple-peer)](https://github.com/feross/simple-peer) - WebRTC wrapper for browser media streams and data channels.
- [Peerix ![GitHub Repo Stars](https://img.shields.io/github/stars/meefik/peerix) ![GitHub last commit](https://img.shields.io/github/last-commit/meefik/peerix)](https://github.com/meefik/peerix) - TypeScript WebRTC library for peer-to-peer media and data with pluggable signalling drivers.
- [PeerJS](https://peerjs.com) - Data and media peer-to-peer connection API implemented over WebRTC.
- [werift ![GitHub Repo Stars](https://img.shields.io/github/stars/shinyoshiaki/werift-webrtc) ![GitHub last commit](https://img.shields.io/github/last-commit/shinyoshiaki/werift-webrtc)](https://github.com/shinyoshiaki/werift-webrtc) - TypeScript WebRTC implementation for Node.js with media, data channels and RTP/RTCP APIs.
- [Longpipe](https://longpipe.dev) - Real-time video effects for WebRTC streams in the browser: virtual background, background blur, face touch-up and auto-reframe.

### C/C++ Libraries

- [libre ![GitHub Repo Stars](https://img.shields.io/github/stars/baresip/re) ![GitHub last commit](https://img.shields.io/github/last-commit/baresip/re)](https://github.com/baresip/re) - Portable SIP, SDP, RTP, SRTP and ICE/STUN/TURN library with asynchronous I/O.
- [PJSIP](https://www.pjsip.org) - Multi-protocol RTC library written in C.
- [eXosip](http://savannah.nongnu.org/projects/exosip) - eXtended osip is a mature C library for abstracting the SIP protocol.
- [libdatachannel ![GitHub Repo Stars](https://img.shields.io/github/stars/paullouisageneau/libdatachannel) ![GitHub last commit](https://img.shields.io/github/last-commit/paullouisageneau/libdatachannel)](https://github.com/paullouisageneau/libdatachannel) - Standalone C/C++ library for WebRTC data channels, media transport and WebSockets.
- [icey ![GitHub Repo Stars](https://img.shields.io/github/stars/auscaster/icey) ![GitHub last commit](https://img.shields.io/github/last-commit/auscaster/icey)](https://github.com/auscaster/icey) - C++20 media toolkit combining WebRTC, FFmpeg, asynchronous networking and signalling.
- [libSRTP ![GitHub Repo Stars](https://img.shields.io/github/stars/cisco/libsrtp) ![GitHub last commit](https://img.shields.io/github/last-commit/cisco/libsrtp)](https://github.com/cisco/libsrtp) - Secure Real-time Transport Protocol (SRTP) library for C.
- [usrsctp ![GitHub Repo Stars](https://img.shields.io/github/stars/sctplab/usrsctp) ![GitHub last commit](https://img.shields.io/github/last-commit/sctplab/usrsctp)](https://github.com/sctplab/usrsctp) - Portable Stream Control Transmission Protocol (SCTP) user-land stack.
- [Sofia-SIP ![GitHub Repo Stars](https://img.shields.io/github/stars/freeswitch/sofia-sip) ![GitHub last commit](https://img.shields.io/github/last-commit/freeswitch/sofia-sip)](https://github.com/freeswitch/sofia-sip) - Open source SIP library used by FreeSWITCH.
- [GStreamer WebRTC](https://gstreamer.freedesktop.org/documentation/webrtc/) - WebRTC elements for connecting native GStreamer media pipelines to browser peers.

### Go Libraries

- [Pion](https://pion.ly) - Extensive software stack for WebRTC written in Go.
- [go-diameter ![GitHub Repo Stars](https://img.shields.io/github/stars/fiorix/go-diameter) ![GitHub last commit](https://img.shields.io/github/last-commit/fiorix/go-diameter)](https://github.com/fiorix/go-diameter) - RFC compliant Diameter protocol library.

### PHP Libraries

- [RTCKit/SIP ![GitHub Repo Stars](https://img.shields.io/github/stars/rtckit/php-sip) ![GitHub last commit](https://img.shields.io/github/last-commit/rtckit/php-sip)](https://github.com/rtckit/php-sip) - SIP message parsing and rendering library for PHP.

### Python Libraries

- [aiortc ![GitHub Repo Stars](https://img.shields.io/github/stars/aiortc/aiortc) ![GitHub last commit](https://img.shields.io/github/last-commit/aiortc/aiortc)](https://github.com/aiortc/aiortc) - WebRTC and ORTC implementation for Python using asyncio.

### Erlang Libraries

- [ersip ![GitHub Repo Stars](https://img.shields.io/github/stars/poroh/ersip) ![GitHub last commit](https://img.shields.io/github/last-commit/poroh/ersip)](https://github.com/poroh/ersip) - Library comprising building blocks for SIP applications.

### Rust Libraries

- [WebRTC.rs ![GitHub Repo Stars](https://img.shields.io/github/stars/webrtc-rs/webrtc) ![GitHub last commit](https://img.shields.io/github/last-commit/webrtc-rs/webrtc)](https://github.com/webrtc-rs/webrtc) - Asynchronous WebRTC implementation in Rust with SDP, RTP, RTCP and SRTP support.

### Dart Libraries

- [dart-sip-ua ![GitHub Repo Stars](https://img.shields.io/github/stars/flutter-webrtc/dart-sip-ua) ![GitHub last commit](https://img.shields.io/github/last-commit/flutter-webrtc/dart-sip-ua)](https://github.com/flutter-webrtc/dart-sip-ua) - Dart SIP user-agent stack with SIP over WebSocket and WebRTC media support.
- [Flutter WebRTC ![GitHub Repo Stars](https://img.shields.io/github/stars/flutter-webrtc/flutter-webrtc) ![GitHub last commit](https://img.shields.io/github/last-commit/flutter-webrtc/flutter-webrtc)](https://github.com/flutter-webrtc/flutter-webrtc) - WebRTC bindings for Flutter applications on mobile, desktop and the web.

### Media over QUIC

Experimental implementations for live media over QUIC and WebTransport. Supported draft versions and protocol variants differ; check compatibility before combining implementations.

- [moq-rs ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudflare/moq-rs) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudflare/moq-rs)](https://github.com/cloudflare/moq-rs) - Rust implementation of Media over QUIC Transport with a relay and sample publishers.
- [moq ![GitHub Repo Stars](https://img.shields.io/github/stars/moq-dev/moq) ![GitHub last commit](https://img.shields.io/github/last-commit/moq-dev/moq)](https://github.com/moq-dev/moq) - Rust and TypeScript libraries, relay and browser player implementing moq-lite.
- [moqtail ![GitHub Repo Stars](https://img.shields.io/github/stars/moqtail/moqtail) ![GitHub last commit](https://img.shields.io/github/last-commit/moqtail/moqtail)](https://github.com/moqtail/moqtail) - Rust and TypeScript Media over QUIC Transport libraries with a relay and example clients.
- [moxygen ![GitHub Repo Stars](https://img.shields.io/github/stars/facebookexperimental/moxygen) ![GitHub last commit](https://img.shields.io/github/last-commit/facebookexperimental/moxygen)](https://github.com/facebookexperimental/moxygen) - C++ Media over QUIC Transport library with a relay, sample applications and interoperability tools.
- [libquicr ![GitHub Repo Stars](https://img.shields.io/github/stars/Quicr/libquicr) ![GitHub last commit](https://img.shields.io/github/last-commit/Quicr/libquicr)](https://github.com/Quicr/libquicr) - C++ Media over QUIC Transport library with publish, subscribe, capture and replay tools.
- [imquic ![GitHub Repo Stars](https://img.shields.io/github/stars/meetecho/imquic) ![GitHub last commit](https://img.shields.io/github/last-commit/meetecho/imquic)](https://github.com/meetecho/imquic) - Experimental C library for QUIC and WebTransport with RTP over QUIC and Media over QUIC Transport support.


## Blogs

- [BlogGeekMe](https://bloggeek.me/blog) - Blog by Tsahi Levent-Levi with a strong focus on WebRTC.
- [WebRTC For Developers](https://www.webrtc-developers.com/) - Articles, examples and tools for WebRTC application developers.
- [WebRTCHacks](https://webrtchacks.com) - WebRTC blog by independent technologists.


## Discussion

- [FreeSWITCH Community](https://signalwire.community) - Discord community for FreeSWITCH and SignalWire users and developers.
- [discuss-webrtc](https://groups.google.com/g/discuss-webrtc) - Developer discussion group for WebRTC APIs, implementations and interoperability.


## Events and Talks

- [ClueCon](https://www.cluecon.com/) - Conference for communications and voice AI developers.
- [Kamailio World](https://www.kamailio.org/w/category/kamailio-world/) - Conference announcements and technical sessions covering Kamailio and open source RTC systems.
- [AstriCon](https://www.asterisk.org/astricon/) - Conference for Asterisk and FreePBX developers and users.
- [CommCon](https://commcon.xyz/) - RTC and open-media community events with a technical talk archive.
- [OpenSIPS Summit](https://www.opensips.org/Community/Summits) - OpenSIPS community conferences with technical presentations and proceedings.
- [FOSDEM](https://fosdem.org) - Free event for software developers, with a RTC component, held every year in Europe.
- [JanusCon](https://www.januscon.it/2024/) - Conference proceedings and technical talks for Janus and WebRTC developers.
- [TADHack](https://blog.tadhack.com/) - Telecom application hackathons, demos and event announcements.


## Related Lists

- [Awesome RTC Hacking ![GitHub Repo Stars](https://img.shields.io/github/stars/EnableSecurity/awesome-rtc-hacking) ![GitHub last commit](https://img.shields.io/github/last-commit/EnableSecurity/awesome-rtc-hacking)](https://github.com/EnableSecurity/awesome-rtc-hacking) - Real Time Communications hacking and penetration testing resources.
- [Awesome 5G ![GitHub Repo Stars](https://img.shields.io/github/stars/calee0219/awesome-5g) ![GitHub last commit](https://img.shields.io/github/last-commit/calee0219/awesome-5g)](https://github.com/calee0219/awesome-5g) - 5G frameworks, libraries, software and resources.
- [Awesome Cellular Hacking ![GitHub Repo Stars](https://img.shields.io/github/stars/W00t3k/Awesome-Cellular-Hacking) ![GitHub last commit](https://img.shields.io/github/last-commit/W00t3k/Awesome-Cellular-Hacking)](https://github.com/W00t3k/Awesome-Cellular-Hacking) - Research resources in the 3G/4G/5G Cellular security space.
- [Awesome Telco ![GitHub Repo Stars](https://img.shields.io/github/stars/ravens/awesome-telco) ![GitHub last commit](https://img.shields.io/github/last-commit/ravens/awesome-telco)](https://github.com/ravens/awesome-telco) - Telco resources and projects.
- [Awesome Asterisk ![GitHub Repo Stars](https://img.shields.io/github/stars/ictinnovations/awesome-asterisk) ![GitHub last commit](https://img.shields.io/github/last-commit/ictinnovations/awesome-asterisk)](https://github.com/ictinnovations/awesome-asterisk) - Asterisk tooling: ARI, AMI and AGI libraries, call audio streaming, voice AI and testing.
- [Awesome FreeSWITCH ![GitHub Repo Stars](https://img.shields.io/github/stars/ictinnovations/awesome-freeswitch) ![GitHub last commit](https://img.shields.io/github/last-commit/ictinnovations/awesome-freeswitch)](https://github.com/ictinnovations/awesome-freeswitch) - FreeSWITCH tooling: Event Socket libraries, call audio streaming, distributions and monitoring.
- [SIP Resources ![GitHub Repo Stars](https://img.shields.io/github/stars/miconda/sip-resources) ![GitHub last commit](https://img.shields.io/github/last-commit/miconda/sip-resources)](https://github.com/miconda/sip-resources) - Useful SIP resources curated by Kamailio's head developer.


## Contribute

Contributions welcome! Read the [contribution guidelines](CONTRIBUTING.md) first.
