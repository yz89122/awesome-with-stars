# Awesome Honeypots [![Awesome Honeypots](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

A curated list of awesome honeypots, plus related components and much more, divided into categories such as Web, services, and others, with a focus on free and open source projects.

There is no pre-established order of items in each category, the order is for contribution. If you want to contribute, please read the [guide](CONTRIBUTING.md).

Discover more awesome lists at [sindresorhus/awesome ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome)](https://github.com/sindresorhus/awesome).

# Contents

- [Awesome Honeypots ![Awesome Honeypots ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome)](https://github.com/sindresorhus/awesome)](#awesome-honeypots-)
- [Contents](#contents)
  - [Related Lists](#related-lists)
  - [Honeypots](#honeypots)
  - [Honeyd Tools](#honeyd-tools)
  - [Network and Artifact Analysis](#network-and-artifact-analysis)
  - [Data Tools](#data-tools)
  - [Guides](#guides)

## Related Lists

- [awesome-pcaptools ![GitHub Repo Stars](https://img.shields.io/github/stars/caesar0301/awesome-pcaptools) ![GitHub last commit](https://img.shields.io/github/last-commit/caesar0301/awesome-pcaptools)](https://github.com/caesar0301/awesome-pcaptools) - Useful in network traffic analysis.
- [awesome-malware-analysis ![GitHub Repo Stars](https://img.shields.io/github/stars/rshipp/awesome-malware-analysis) ![GitHub last commit](https://img.shields.io/github/last-commit/rshipp/awesome-malware-analysis)](https://github.com/rshipp/awesome-malware-analysis) - Some overlap here for artifact analysis.

## Honeypots

- Database Honeypots

  - [Delilah ![GitHub Repo Stars](https://img.shields.io/github/stars/SecurityTW/delilah) ![GitHub last commit](https://img.shields.io/github/last-commit/SecurityTW/delilah)](https://github.com/SecurityTW/delilah) - Elasticsearch Honeypot written in Python (originally from Novetta).
  - [ESPot ![GitHub Repo Stars](https://img.shields.io/github/stars/mycert/ESPot) ![GitHub last commit](https://img.shields.io/github/last-commit/mycert/ESPot)](https://github.com/mycert/ESPot) - Elasticsearch honeypot written in NodeJS, to capture every attempts to exploit CVE-2014-3120.
  - [ElasticPot](https://gitlab.com/bontchev/elasticpot) - An Elasticsearch Honeypot.
  - [Elastic honey ![GitHub Repo Stars](https://img.shields.io/github/stars/jordan-wright/elastichoney) ![GitHub last commit](https://img.shields.io/github/last-commit/jordan-wright/elastichoney)](https://github.com/jordan-wright/elastichoney) - Simple Elasticsearch Honeypot.
  - [MongoDB-HoneyProxy ![GitHub Repo Stars](https://img.shields.io/github/stars/Plazmaz/MongoDB-HoneyProxy) ![GitHub last commit](https://img.shields.io/github/last-commit/Plazmaz/MongoDB-HoneyProxy)](https://github.com/Plazmaz/MongoDB-HoneyProxy) - MongoDB honeypot proxy.
  - [NoSQLpot ![GitHub Repo Stars](https://img.shields.io/github/stars/torque59/nosqlpot) ![GitHub last commit](https://img.shields.io/github/last-commit/torque59/nosqlpot)](https://github.com/torque59/nosqlpot) - Honeypot framework built on a NoSQL-style database.
  - [mysql-honeypotd ![GitHub Repo Stars](https://img.shields.io/github/stars/sjinks/mysql-honeypotd) ![GitHub last commit](https://img.shields.io/github/last-commit/sjinks/mysql-honeypotd)](https://github.com/sjinks/mysql-honeypotd) - Low interaction MySQL honeypot written in C.
  - [MysqlPot ![GitHub Repo Stars](https://img.shields.io/github/stars/schmalle/MysqlPot) ![GitHub last commit](https://img.shields.io/github/last-commit/schmalle/MysqlPot)](https://github.com/schmalle/MysqlPot) - MySQL honeypot, still very early stage.
  - [pghoney ![GitHub Repo Stars](https://img.shields.io/github/stars/betheroot/pghoney) ![GitHub last commit](https://img.shields.io/github/last-commit/betheroot/pghoney)](https://github.com/betheroot/pghoney) - Low-interaction Postgres Honeypot.
  - [sticky_elephant ![GitHub Repo Stars](https://img.shields.io/github/stars/betheroot/sticky_elephant) ![GitHub last commit](https://img.shields.io/github/last-commit/betheroot/sticky_elephant)](https://github.com/betheroot/sticky_elephant) - Medium interaction postgresql honeypot.
  - [RedisHoneyPot ![GitHub Repo Stars](https://img.shields.io/github/stars/cypwnpwnsocute/RedisHoneyPot) ![GitHub last commit](https://img.shields.io/github/last-commit/cypwnpwnsocute/RedisHoneyPot)](https://github.com/cypwnpwnsocute/RedisHoneyPot) - High Interaction Honeypot Solution for Redis protocol.

- Web honeypots

  - [Express honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/christophe77/express-honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/christophe77/express-honeypot)](https://github.com/christophe77/express-honeypot) - RFI & LFI honeypot using nodeJS and express.
  - [EoHoneypotBundle ![GitHub Repo Stars](https://img.shields.io/github/stars/eymengunay/EoHoneypotBundle) ![GitHub last commit](https://img.shields.io/github/last-commit/eymengunay/EoHoneypotBundle)](https://github.com/eymengunay/EoHoneypotBundle) - Honeypot type for Symfony2 forms.
  - [Glastopf ![GitHub Repo Stars](https://img.shields.io/github/stars/mushorg/glastopf) ![GitHub last commit](https://img.shields.io/github/last-commit/mushorg/glastopf)](https://github.com/mushorg/glastopf) - Web Application Honeypot.
  - [Google Hack Honeypot](http://ghh.sourceforge.net) - Designed to provide reconnaissance against attackers that use search engines as a hacking tool against your resources.
  - [HellPot ![GitHub Repo Stars](https://img.shields.io/github/stars/yunginnanet/HellPot) ![GitHub last commit](https://img.shields.io/github/last-commit/yunginnanet/HellPot)](https://github.com/yunginnanet/HellPot) - Honeypot that tries to crash the bots and clients that visit it's location.
  - [Laravel Application Honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/msurguy/Honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/msurguy/Honeypot)](https://github.com/msurguy/Honeypot) - Simple spam prevention package for Laravel applications.
  - [Nodepot ![GitHub Repo Stars](https://img.shields.io/github/stars/schmalle/Nodepot) ![GitHub last commit](https://img.shields.io/github/last-commit/schmalle/Nodepot)](https://github.com/schmalle/Nodepot) - NodeJS web application honeypot.
  - [PasitheaHoneypot ![GitHub Repo Stars](https://img.shields.io/github/stars/Marist-Innovation-Lab/PasitheaHoneypot) ![GitHub last commit](https://img.shields.io/github/last-commit/Marist-Innovation-Lab/PasitheaHoneypot)](https://github.com/Marist-Innovation-Lab/PasitheaHoneypot) - RestAPI honeypot.
  - [Servletpot ![GitHub Repo Stars](https://img.shields.io/github/stars/schmalle/servletpot) ![GitHub last commit](https://img.shields.io/github/last-commit/schmalle/servletpot)](https://github.com/schmalle/servletpot) - Web application Honeypot.
  - [Shadow Daemon](https://shadowd.zecure.org/overview/introduction/) - Modular Web Application Firewall / High-Interaction Honeypot for PHP, Perl, and Python apps.
  - [StrutsHoneypot ![GitHub Repo Stars](https://img.shields.io/github/stars/Cymmetria/StrutsHoneypot) ![GitHub last commit](https://img.shields.io/github/last-commit/Cymmetria/StrutsHoneypot)](https://github.com/Cymmetria/StrutsHoneypot) - Struts Apache 2 based honeypot as well as a detection module for Apache 2 servers.
  - [WebTrap ![GitHub Repo Stars](https://img.shields.io/github/stars/IllusiveNetworks-Labs/WebTrap) ![GitHub last commit](https://img.shields.io/github/last-commit/IllusiveNetworks-Labs/WebTrap)](https://github.com/IllusiveNetworks-Labs/WebTrap) - Designed to create deceptive webpages to deceive and redirect attackers away from real websites.
  - [basic-auth-pot (bap) ![GitHub Repo Stars](https://img.shields.io/github/stars/bjeborn/basic-auth-pot) ![GitHub last commit](https://img.shields.io/github/last-commit/bjeborn/basic-auth-pot)](https://github.com/bjeborn/basic-auth-pot) - HTTP Basic Authentication honeypot.
  - [bwpot ![GitHub Repo Stars](https://img.shields.io/github/stars/graneed/bwpot) ![GitHub last commit](https://img.shields.io/github/last-commit/graneed/bwpot)](https://github.com/graneed/bwpot) - Breakable Web applications honeyPot.
  - [django-admin-honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/dmpayton/django-admin-honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/dmpayton/django-admin-honeypot)](https://github.com/dmpayton/django-admin-honeypot) - Fake Django admin login screen to notify admins of attempted unauthorized access.
  - [drupo ![GitHub Repo Stars](https://img.shields.io/github/stars/d1str0/drupot) ![GitHub last commit](https://img.shields.io/github/last-commit/d1str0/drupot)](https://github.com/d1str0/drupot) - Drupal Honeypot.
  - [honeyhttpd ![GitHub Repo Stars](https://img.shields.io/github/stars/bocajspear1/honeyhttpd) ![GitHub last commit](https://img.shields.io/github/last-commit/bocajspear1/honeyhttpd)](https://github.com/bocajspear1/honeyhttpd) - Python-based web server honeypot builder.
  - [honeyup ![GitHub Repo Stars](https://img.shields.io/github/stars/LogoiLab/honeyup) ![GitHub last commit](https://img.shields.io/github/last-commit/LogoiLab/honeyup)](https://github.com/LogoiLab/honeyup) - An uploader honeypot designed to look like poor website security.
  - [owa-honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/joda32/owa-honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/joda32/owa-honeypot)](https://github.com/joda32/owa-honeypot) - A basic flask based Outlook Web Honey pot.
  - [phpmyadmin_honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/gfoss/phpmyadmin_honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/gfoss/phpmyadmin_honeypot)](https://github.com/gfoss/phpmyadmin_honeypot) - Simple and effective phpMyAdmin honeypot.
  - [shockpot ![GitHub Repo Stars](https://img.shields.io/github/stars/threatstream/shockpot) ![GitHub last commit](https://img.shields.io/github/last-commit/threatstream/shockpot)](https://github.com/threatstream/shockpot) - WebApp Honeypot for detecting Shell Shock exploit attempts.
  - [smart-honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/freak3dot/smart-honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/freak3dot/smart-honeypot)](https://github.com/freak3dot/smart-honeypot) - PHP Script demonstrating a smart honey pot.
  - Snare/Tanner - successors to Glastopf
    - [Snare ![GitHub Repo Stars](https://img.shields.io/github/stars/mushorg/snare) ![GitHub last commit](https://img.shields.io/github/last-commit/mushorg/snare)](https://github.com/mushorg/snare) - Super Next generation Advanced Reactive honeypot.
    - [Tanner ![GitHub Repo Stars](https://img.shields.io/github/stars/mushorg/tanner) ![GitHub last commit](https://img.shields.io/github/last-commit/mushorg/tanner)](https://github.com/mushorg/tanner) - Evaluating SNARE events.
  - [stack-honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/CHH/stack-honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/CHH/stack-honeypot)](https://github.com/CHH/stack-honeypot) - Inserts a trap for spam bots into responses.
  - [tomcat-manager-honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/helospark/tomcat-manager-honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/helospark/tomcat-manager-honeypot)](https://github.com/helospark/tomcat-manager-honeypot) - Honeypot that mimics Tomcat manager endpoints. Logs requests and saves attacker's WAR file for later study
  - WordPress honeypots
    - [HonnyPotter ![GitHub Repo Stars](https://img.shields.io/github/stars/MartinIngesen/HonnyPotter) ![GitHub last commit](https://img.shields.io/github/last-commit/MartinIngesen/HonnyPotter)](https://github.com/MartinIngesen/HonnyPotter) - WordPress login honeypot for collection and analysis of failed login attempts.
    - [HoneyPress ![GitHub Repo Stars](https://img.shields.io/github/stars/kungfuguapo/HoneyPress) ![GitHub last commit](https://img.shields.io/github/last-commit/kungfuguapo/HoneyPress)](https://github.com/kungfuguapo/HoneyPress) - Python based WordPress honeypot in a Docker container.
    - [wp-smart-honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/freak3dot/wp-smart-honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/freak3dot/wp-smart-honeypot)](https://github.com/freak3dot/wp-smart-honeypot) - WordPress plugin to reduce comment spam with a smarter honeypot.
    - [wordpot ![GitHub Repo Stars](https://img.shields.io/github/stars/gbrindisi/wordpot) ![GitHub last commit](https://img.shields.io/github/last-commit/gbrindisi/wordpot)](https://github.com/gbrindisi/wordpot) - WordPress Honeypot.
  - [Python-Honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/OWASP/Python-Honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/OWASP/Python-Honeypot)](https://github.com/OWASP/Python-Honeypot) - OWASP Honeypot, Automated Deception Framework.

- Service Honeypots
  - [ADBHoney ![GitHub Repo Stars](https://img.shields.io/github/stars/huuck/ADBHoney) ![GitHub last commit](https://img.shields.io/github/last-commit/huuck/ADBHoney)](https://github.com/huuck/ADBHoney) - Low interaction honeypot that simulates an Android device running Android Debug Bridge (ADB) server process.
  - [AMTHoneypot ![GitHub Repo Stars](https://img.shields.io/github/stars/packetflare/amthoneypot) ![GitHub last commit](https://img.shields.io/github/last-commit/packetflare/amthoneypot)](https://github.com/packetflare/amthoneypot) - Honeypot for Intel's AMT Firmware Vulnerability CVE-2017-5689.
  - [ddospot ![GitHub Repo Stars](https://img.shields.io/github/stars/aelth/ddospot) ![GitHub last commit](https://img.shields.io/github/last-commit/aelth/ddospot)](https://github.com/aelth/ddospot) - NTP, DNS, SSDP, Chargen and generic UDP-based amplification DDoS honeypot.
  - [dionaea ![GitHub Repo Stars](https://img.shields.io/github/stars/DinoTools/dionaea) ![GitHub last commit](https://img.shields.io/github/last-commit/DinoTools/dionaea)](https://github.com/DinoTools/dionaea) - Home of the dionaea honeypot.
  - [dhp ![GitHub Repo Stars](https://img.shields.io/github/stars/ciscocsirt/dhp) ![GitHub last commit](https://img.shields.io/github/last-commit/ciscocsirt/dhp)](https://github.com/ciscocsirt/dhp) - Simple Docker Honeypot server emulating small snippets of the Docker HTTP API.
  - [DolosHoneypot ![GitHub Repo Stars](https://img.shields.io/github/stars/Marist-Innovation-Lab/DolosHoneypot) ![GitHub last commit](https://img.shields.io/github/last-commit/Marist-Innovation-Lab/DolosHoneypot)](https://github.com/Marist-Innovation-Lab/DolosHoneypot) - SDN (software defined networking) honeypot.
  - [Ensnare ![GitHub Repo Stars](https://img.shields.io/github/stars/ahoernecke/ensnare) ![GitHub last commit](https://img.shields.io/github/last-commit/ahoernecke/ensnare)](https://github.com/ahoernecke/ensnare) - Easy to deploy Ruby honeypot.
  - [honeycomb_plugins ![GitHub Repo Stars](https://img.shields.io/github/stars/Cymmetria/honeycomb_plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/Cymmetria/honeycomb_plugins)](https://github.com/Cymmetria/honeycomb_plugins) - Plugin repository for Honeycomb, the honeypot framework by Cymmetria.
  - [honeyntp ![GitHub Repo Stars](https://img.shields.io/github/stars/fygrave/honeyntp) ![GitHub last commit](https://img.shields.io/github/last-commit/fygrave/honeyntp)](https://github.com/fygrave/honeyntp) - NTP logger/honeypot.
  - [honeypot-camera ![GitHub Repo Stars](https://img.shields.io/github/stars/alexbredo/honeypot-camera) ![GitHub last commit](https://img.shields.io/github/last-commit/alexbredo/honeypot-camera)](https://github.com/alexbredo/honeypot-camera) - Observation camera honeypot.
  - [honeypot-ftp ![GitHub Repo Stars](https://img.shields.io/github/stars/alexbredo/honeypot-ftp) ![GitHub last commit](https://img.shields.io/github/last-commit/alexbredo/honeypot-ftp)](https://github.com/alexbredo/honeypot-ftp) - FTP Honeypot.
  - [honeypots ![GitHub Repo Stars](https://img.shields.io/github/stars/qeeqbox/honeypots) ![GitHub last commit](https://img.shields.io/github/last-commit/qeeqbox/honeypots)](https://github.com/qeeqbox/honeypots) - 25 different honeypots in a single pypi package! (dns, ftp, httpproxy, http, https, imap, mysql, pop3, postgres, redis, smb, smtp, socks5, ssh, telnet, vnc, mssql, elastic, ldap, ntp, memcache, snmp, oracle, sip and irc).
  - [honeytrap ![GitHub Repo Stars](https://img.shields.io/github/stars/honeytrap/honeytrap) ![GitHub last commit](https://img.shields.io/github/last-commit/honeytrap/honeytrap)](https://github.com/honeytrap/honeytrap) - Advanced Honeypot framework written in Go that can be connected with other honeypot software.
  - [HoneyPy ![GitHub Repo Stars](https://img.shields.io/github/stars/foospidy/HoneyPy) ![GitHub last commit](https://img.shields.io/github/last-commit/foospidy/HoneyPy)](https://github.com/foospidy/HoneyPy) - Low interaction honeypot.
  - [Honeygrove ![GitHub Repo Stars](https://img.shields.io/github/stars/UHH-ISS/honeygrove) ![GitHub last commit](https://img.shields.io/github/last-commit/UHH-ISS/honeygrove)](https://github.com/UHH-ISS/honeygrove) - Multi-purpose modular honeypot based on Twisted.
  - [Honeyport ![GitHub Repo Stars](https://img.shields.io/github/stars/securitygeneration/Honeyport) ![GitHub last commit](https://img.shields.io/github/last-commit/securitygeneration/Honeyport)](https://github.com/securitygeneration/Honeyport) - Simple honeyport written in Bash and Python.
  - [Honeyprint ![GitHub Repo Stars](https://img.shields.io/github/stars/glaslos/honeyprint) ![GitHub last commit](https://img.shields.io/github/last-commit/glaslos/honeyprint)](https://github.com/glaslos/honeyprint) - Printer honeypot.
  - [Lyrebird](https://hub.docker.com/r/lyrebird/honeypot-base/) - Modern high-interaction honeypot framework.
  - [MICROS honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/Cymmetria/micros_honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/Cymmetria/micros_honeypot)](https://github.com/Cymmetria/micros_honeypot) - Low interaction honeypot to detect CVE-2018-2636 in the Oracle Hospitality Simphony component of Oracle Hospitality Applications (MICROS).
  - [node-ftp-honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/christophe77/node-ftp-honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/christophe77/node-ftp-honeypot)](https://github.com/christophe77/node-ftp-honeypot) - FTP server honeypot in JS.
  - [pyrdp ![GitHub Repo Stars](https://img.shields.io/github/stars/gosecure/pyrdp) ![GitHub last commit](https://img.shields.io/github/last-commit/gosecure/pyrdp)](https://github.com/gosecure/pyrdp) - RDP man-in-the-middle and library for Python 3 with the ability to watch connections live or after the fact.
  - [rdppot ![GitHub Repo Stars](https://img.shields.io/github/stars/kryptoslogic/rdppot) ![GitHub last commit](https://img.shields.io/github/last-commit/kryptoslogic/rdppot)](https://github.com/kryptoslogic/rdppot) - RDP honeypot
  - [RDPy ![GitHub Repo Stars](https://img.shields.io/github/stars/citronneur/rdpy) ![GitHub last commit](https://img.shields.io/github/last-commit/citronneur/rdpy)](https://github.com/citronneur/rdpy) - Microsoft Remote Desktop Protocol (RDP) honeypot implemented in Python.
  - [SMB Honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/r0hi7/HoneySMB) ![GitHub last commit](https://img.shields.io/github/last-commit/r0hi7/HoneySMB)](https://github.com/r0hi7/HoneySMB) - High interaction SMB service honeypot capable of capturing wannacry-like Malware.
  - [Tom's Honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/inguardians/toms_honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/inguardians/toms_honeypot)](https://github.com/inguardians/toms_honeypot) - Low interaction Python honeypot.
  - [troje ![GitHub Repo Stars](https://img.shields.io/github/stars/dutchcoders/troje) ![GitHub last commit](https://img.shields.io/github/last-commit/dutchcoders/troje)](https://github.com/dutchcoders/troje/) - Honeypot that runs each connection with the service within a separate LXC container.
  - [WebLogic honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/Cymmetria/weblogic_honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/Cymmetria/weblogic_honeypot)](https://github.com/Cymmetria/weblogic_honeypot) - Low interaction honeypot to detect CVE-2017-10271 in the Oracle WebLogic Server component of Oracle Fusion Middleware.
  - [WhiteFace Honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/csirtgadgets/csirtg-honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/csirtgadgets/csirtg-honeypot)](https://github.com/csirtgadgets/csirtg-honeypot) - Twisted based honeypot for WhiteFace.
 
- Distributed Honeypots

  - [DemonHunter ![GitHub Repo Stars](https://img.shields.io/github/stars/RevengeComing/DemonHunter) ![GitHub last commit](https://img.shields.io/github/last-commit/RevengeComing/DemonHunter)](https://github.com/RevengeComing/DemonHunter) - Low interaction honeypot server.

- Anti-honeypot stuff

  - [kippo_detect ![GitHub Repo Stars](https://img.shields.io/github/stars/andrew-morris/kippo_detect) ![GitHub last commit](https://img.shields.io/github/last-commit/andrew-morris/kippo_detect)](https://github.com/andrew-morris/kippo_detect) - Offensive component that detects the presence of the kippo honeypot.

- ICS/SCADA honeypots

  - [Conpot ![GitHub Repo Stars](https://img.shields.io/github/stars/mushorg/conpot) ![GitHub last commit](https://img.shields.io/github/last-commit/mushorg/conpot)](https://github.com/mushorg/conpot) - ICS/SCADA honeypot.
  - [GasPot ![GitHub Repo Stars](https://img.shields.io/github/stars/sjhilt/GasPot) ![GitHub last commit](https://img.shields.io/github/last-commit/sjhilt/GasPot)](https://github.com/sjhilt/GasPot) - Veeder Root Gaurdian AST, common in the oil and gas industry.
  - [SCADA honeynet](http://scadahoneynet.sourceforge.net) - Building Honeypots for Industrial Networks.
  - [gridpot ![GitHub Repo Stars](https://img.shields.io/github/stars/sk4ld/gridpot) ![GitHub last commit](https://img.shields.io/github/last-commit/sk4ld/gridpot)](https://github.com/sk4ld/gridpot) - Open source tools for realistic-behaving electric grid honeynets.
  - [scada-honeynet](http://www.digitalbond.com/blog/2007/07/24/scada-honeynet-article-in-infragard-publication/) - Mimics many of the services from a popular PLC and better helps SCADA researchers understand potential risks of exposed control system devices.

- Other/random

  - [CitrixHoneypot ![GitHub Repo Stars](https://img.shields.io/github/stars/MalwareTech/CitrixHoneypot) ![GitHub last commit](https://img.shields.io/github/last-commit/MalwareTech/CitrixHoneypot)](https://github.com/MalwareTech/CitrixHoneypot) - Detect and log CVE-2019-19781 scan and exploitation attempts.
  - [Damn Simple Honeypot (DSHP) ![GitHub Repo Stars](https://img.shields.io/github/stars/naorlivne/dshp) ![GitHub last commit](https://img.shields.io/github/last-commit/naorlivne/dshp)](https://github.com/naorlivne/dshp) - Honeypot framework with pluggable handlers.
  - [dicompot ![GitHub Repo Stars](https://img.shields.io/github/stars/nsmfoo/dicompot) ![GitHub last commit](https://img.shields.io/github/last-commit/nsmfoo/dicompot)](https://github.com/nsmfoo/dicompot) - DICOM Honeypot.
  - [IPP Honey](https://gitlab.com/bontchev/ipphoney) - A honeypot for the Internet Printing Protocol.
  - [Log4Pot ![GitHub Repo Stars](https://img.shields.io/github/stars/thomaspatzke/Log4Pot) ![GitHub last commit](https://img.shields.io/github/last-commit/thomaspatzke/Log4Pot)](https://github.com/thomaspatzke/Log4Pot) - A honeypot for the Log4Shell vulnerability (CVE-2021-44228).
  - [Masscanned ![GitHub Repo Stars](https://img.shields.io/github/stars/ivre/masscanned) ![GitHub last commit](https://img.shields.io/github/last-commit/ivre/masscanned)](https://github.com/ivre/masscanned) - Let's be scanned. A low-interaction honeypot focused on network scanners and bots. It integrates very well with IVRE to build a self-hosted alternative to GreyNoise.
  - [medpot ![GitHub Repo Stars](https://img.shields.io/github/stars/schmalle/medpot) ![GitHub last commit](https://img.shields.io/github/last-commit/schmalle/medpot)](https://github.com/schmalle/medpot) -  HL7 / FHIR honeypot.
  - [NOVA ![GitHub Repo Stars](https://img.shields.io/github/stars/DataSoft/Nova) ![GitHub last commit](https://img.shields.io/github/last-commit/DataSoft/Nova)](https://github.com/DataSoft/Nova) - Uses honeypots as detectors, looks like a complete system.
  - [OpenFlow Honeypot (OFPot) ![GitHub Repo Stars](https://img.shields.io/github/stars/upa/ofpot) ![GitHub last commit](https://img.shields.io/github/last-commit/upa/ofpot)](https://github.com/upa/ofpot) - Redirects traffic for unused IPs to a honeypot, built on POX.
  - [OpenCanary ![GitHub Repo Stars](https://img.shields.io/github/stars/thinkst/opencanary) ![GitHub last commit](https://img.shields.io/github/last-commit/thinkst/opencanary)](https://github.com/thinkst/opencanary) - Modular and decentralised honeypot daemon that runs several canary versions of services that alerts when a service is (ab)used.
  - [ciscoasa_honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/cymmetria/ciscoasa_honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/cymmetria/ciscoasa_honeypot)](https://github.com/cymmetria/ciscoasa_honeypot) A low interaction honeypot for the Cisco ASA component capable of detecting CVE-2018-0101, a DoS and remote code execution vulnerability.
  - [miniprint ![GitHub Repo Stars](https://img.shields.io/github/stars/sa7mon/miniprint) ![GitHub last commit](https://img.shields.io/github/last-commit/sa7mon/miniprint)](https://github.com/sa7mon/miniprint) - A medium interaction printer honeypot.

- Botnet C2 tools

  - [Hale ![GitHub Repo Stars](https://img.shields.io/github/stars/pjlantz/Hale) ![GitHub last commit](https://img.shields.io/github/last-commit/pjlantz/Hale)](https://github.com/pjlantz/Hale) - Botnet command and control monitor.
  - [dnsMole](https://code.google.com/archive/p/dns-mole/) - Analyses DNS traffic and potentionaly detect botnet command and control server activity, along with infected hosts.

- IPv6 attack detection tool

  - [ipv6-attack-detector ![GitHub Repo Stars](https://img.shields.io/github/stars/mzweilin/ipv6-attack-detector) ![GitHub last commit](https://img.shields.io/github/last-commit/mzweilin/ipv6-attack-detector)](https://github.com/mzweilin/ipv6-attack-detector/) - Google Summer of Code 2012 project, supported by The Honeynet Project organization.

- Dynamic code instrumentation toolkit

  - [Frida](https://www.frida.re) - Inject JavaScript to explore native apps on Windows, Mac, Linux, iOS and Android.

- Tool to convert website to server honeypots

  - [HIHAT](http://hihat.sourceforge.net/) - Transform arbitrary PHP applications into web-based high-interaction Honeypots.

- Malware collector

  - [Kippo-Malware](https://bruteforcelab.com/kippo-malware) - Python script that will download all malicious files stored as URLs in a Kippo SSH honeypot database.

- Distributed sensor deployment

  - [Community Honey Network](https://communityhoneynetwork.readthedocs.io/en/stable/) - CHN aims to make deployments honeypots and honeypot management tools easy and flexible. The default deployment method uses Docker Compose and Docker to deploy with a few simple commands.
  - [Modern Honey Network ![GitHub Repo Stars](https://img.shields.io/github/stars/threatstream/mhn) ![GitHub last commit](https://img.shields.io/github/last-commit/threatstream/mhn)](https://github.com/threatstream/mhn) - Multi-snort and honeypot sensor management, uses a network of VMs, small footprint SNORT installations, stealthy dionaeas, and a centralized server for management.

- Network Analysis Tool

  - [Tracexploit](https://code.google.com/archive/p/tracexploit/) - Replay network packets.

- Log anonymizer

  - [LogAnon](http://code.google.com/archive/p/loganon/) - Log anonymization library that helps having anonymous logs consistent between logs and network captures.

- Low interaction honeypot (router back door)

  - [Honeypot-32764 ![GitHub Repo Stars](https://img.shields.io/github/stars/knalli/honeypot-for-tcp-32764) ![GitHub last commit](https://img.shields.io/github/last-commit/knalli/honeypot-for-tcp-32764)](https://github.com/knalli/honeypot-for-tcp-32764) - Honeypot for router backdoor (TCP 32764).
  - [WAPot ![GitHub Repo Stars](https://img.shields.io/github/stars/lcashdol/WAPot) ![GitHub last commit](https://img.shields.io/github/last-commit/lcashdol/WAPot)](https://github.com/lcashdol/WAPot) - Honeypot that can be used to observe traffic directed at home routers.

- honeynet farm traffic redirector

  - [Honeymole](https://web.archive.org/web/20100326040550/http://www.honeynet.org.pt:80/index.php/HoneyMole) - Deploy multiple sensors that redirect traffic to a centralized collection of honeypots.

- HTTPS Proxy

  - [mitmproxy](https://mitmproxy.org/) - Allows traffic flows to be intercepted, inspected, modified, and replayed.

- System instrumentation

  - [Sysdig](https://sysdig.com/opensource/) - Open source, system-level exploration allows one to capture system state and activity from a running GNU/Linux instance, then save, filter, and analyze the results.
  - [Fibratus ![GitHub Repo Stars](https://img.shields.io/github/stars/rabbitstack/fibratus) ![GitHub last commit](https://img.shields.io/github/last-commit/rabbitstack/fibratus)](https://github.com/rabbitstack/fibratus) - Tool for exploration and tracing of the Windows kernel.

- Honeypot for USB-spreading malware

  - [Ghost-usb ![GitHub Repo Stars](https://img.shields.io/github/stars/honeynet/ghost-usb-honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/honeynet/ghost-usb-honeypot)](https://github.com/honeynet/ghost-usb-honeypot) - Honeypot for malware that propagates via USB storage devices.

- Data Collection

  - [Kippo2MySQL](https://bruteforcelab.com/kippo2mysql) - Extracts some very basic stats from Kippo’s text-based log files and inserts them in a MySQL database.
  - [Kippo2ElasticSearch](https://bruteforcelab.com/kippo2elasticsearch) - Python script to transfer data from a Kippo SSH honeypot MySQL database to an ElasticSearch instance (server or cluster).

- Passive network audit framework parser

  - [Passive Network Audit Framework (pnaf) ![GitHub Repo Stars](https://img.shields.io/github/stars/jusafing/pnaf) ![GitHub last commit](https://img.shields.io/github/last-commit/jusafing/pnaf)](https://github.com/jusafing/pnaf) - Framework that combines multiple passive and automated analysis techniques in order to provide a security assessment of network platforms.

- VM monitoring and tools

  - [Antivmdetect ![GitHub Repo Stars](https://img.shields.io/github/stars/nsmfoo/antivmdetection) ![GitHub last commit](https://img.shields.io/github/last-commit/nsmfoo/antivmdetection)](https://github.com/nsmfoo/antivmdetection) - Script to create templates to use with VirtualBox to make VM detection harder.
  - [VMCloak ![GitHub Repo Stars](https://img.shields.io/github/stars/hatching/vmcloak) ![GitHub last commit](https://img.shields.io/github/last-commit/hatching/vmcloak)](https://github.com/hatching/vmcloak) - Automated Virtual Machine Generation and Cloaking for Cuckoo Sandbox.
  - [vmitools](http://libvmi.com/) - C library with Python bindings that makes it easy to monitor the low-level details of a running virtual machine.

- Binary debugger

  - [Hexgolems - Pint Debugger Backend ![GitHub Repo Stars](https://img.shields.io/github/stars/hexgolems/pint) ![GitHub last commit](https://img.shields.io/github/last-commit/hexgolems/pint)](https://github.com/hexgolems/pint) - Debugger backend and LUA wrapper for PIN.
  - [Hexgolems - Schem Debugger Frontend ![GitHub Repo Stars](https://img.shields.io/github/stars/hexgolems/schem) ![GitHub last commit](https://img.shields.io/github/last-commit/hexgolems/schem)](https://github.com/hexgolems/schem) - Debugger frontend.

- Mobile Analysis Tool

  - [Androguard ![GitHub Repo Stars](https://img.shields.io/github/stars/androguard/androguard) ![GitHub last commit](https://img.shields.io/github/last-commit/androguard/androguard)](https://github.com/androguard/androguard) - Reverse engineering, Malware and goodware analysis of Android applications and more.
  - [APKinspector ![GitHub Repo Stars](https://img.shields.io/github/stars/honeynet/apkinspector) ![GitHub last commit](https://img.shields.io/github/last-commit/honeynet/apkinspector)](https://github.com/honeynet/apkinspector/) - Powerful GUI tool for analysts to analyze the Android applications.

- Low interaction honeypot

  - [Honeyperl](https://sourceforge.net/projects/honeyperl/) - Honeypot software based in Perl with plugins developed for many functions like : wingates, telnet, squid, smtp, etc.
  - [T-Pot ![GitHub Repo Stars](https://img.shields.io/github/stars/dtag-dev-sec/tpotce) ![GitHub last commit](https://img.shields.io/github/last-commit/dtag-dev-sec/tpotce)](https://github.com/dtag-dev-sec/tpotce) - All in one honeypot appliance from telecom provider T-Mobile
  - [beelzebub ![GitHub Repo Stars](https://img.shields.io/github/stars/mariocandela/beelzebub) ![GitHub last commit](https://img.shields.io/github/last-commit/mariocandela/beelzebub)](https://github.com/mariocandela/beelzebub) - A secure honeypot framework, extremely easy to configure by yaml 🚀

- Honeynet data fusion

  - [HFlow2](https://projects.honeynet.org/hflow) - Data coalesing tool for honeynet/network analysis.

- Server

  - [Amun](http://amunhoney.sourceforge.net) - Vulnerability emulation honeypot.
  - [Artillery ![GitHub Repo Stars](https://img.shields.io/github/stars/trustedsec/artillery) ![GitHub last commit](https://img.shields.io/github/last-commit/trustedsec/artillery)](https://github.com/trustedsec/artillery/) - Open-source blue team tool designed to protect Linux and Windows operating systems through multiple methods.
  - [Bait and Switch](http://baitnswitch.sourceforge.net) - Redirects all hostile traffic to a honeypot that is partially mirroring your production system.
  - [Bifrozt ![GitHub Repo Stars](https://img.shields.io/github/stars/Ziemeck/bifrozt-ansible) ![GitHub last commit](https://img.shields.io/github/last-commit/Ziemeck/bifrozt-ansible)](https://github.com/Ziemeck/bifrozt-ansible) - Automatic deploy bifrozt with ansible.
  - [Conpot](http://conpot.org/) - Low interactive server side Industrial Control Systems honeypot.
  - [Heralding ![GitHub Repo Stars](https://img.shields.io/github/stars/johnnykv/heralding) ![GitHub last commit](https://img.shields.io/github/last-commit/johnnykv/heralding)](https://github.com/johnnykv/heralding) - Credentials catching honeypot.
  - [HoneyWRT ![GitHub Repo Stars](https://img.shields.io/github/stars/CanadianJeff/honeywrt) ![GitHub last commit](https://img.shields.io/github/last-commit/CanadianJeff/honeywrt)](https://github.com/CanadianJeff/honeywrt) - Low interaction Python honeypot designed to mimic services or ports that might get targeted by attackers.
  - [Honeyd ![GitHub Repo Stars](https://img.shields.io/github/stars/provos/honeyd) ![GitHub last commit](https://img.shields.io/github/last-commit/provos/honeyd)](https://github.com/provos/honeyd) - See [honeyd tools](#honeyd-tools).
  - [Honeysink](http://www.honeynet.org/node/773) - Open source network sinkhole that provides a mechanism for detection and prevention of malicious traffic on a given network.
  - [Hontel ![GitHub Repo Stars](https://img.shields.io/github/stars/stamparm/hontel) ![GitHub last commit](https://img.shields.io/github/last-commit/stamparm/hontel)](https://github.com/stamparm/hontel) - Telnet Honeypot.
  - [KFSensor](http://www.keyfocus.net/kfsensor/) - Windows based honeypot Intrusion Detection System (IDS).
  - [LaBrea](http://labrea.sourceforge.net/labrea-info.html) - Takes over unused IP addresses, and creates virtual servers that are attractive to worms, hackers, and other denizens of the Internet.
  - [MTPot ![GitHub Repo Stars](https://img.shields.io/github/stars/Cymmetria/MTPot) ![GitHub last commit](https://img.shields.io/github/last-commit/Cymmetria/MTPot)](https://github.com/Cymmetria/MTPot) - Open Source Telnet Honeypot, focused on Mirai malware.
  - [SIREN ![GitHub Repo Stars](https://img.shields.io/github/stars/blaverick62/SIREN) ![GitHub last commit](https://img.shields.io/github/last-commit/blaverick62/SIREN)](https://github.com/blaverick62/SIREN) - Semi-Intelligent HoneyPot Network - HoneyNet Intelligent Virtual Environment.
  - [TelnetHoney ![GitHub Repo Stars](https://img.shields.io/github/stars/balte/TelnetHoney) ![GitHub last commit](https://img.shields.io/github/last-commit/balte/TelnetHoney)](https://github.com/balte/TelnetHoney) - Simple telnet honeypot.
  - [UDPot Honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/jekil/UDPot) ![GitHub last commit](https://img.shields.io/github/last-commit/jekil/UDPot)](https://github.com/jekil/UDPot) - Simple UDP/DNS honeypot scripts.
  - [Yet Another Fake Honeypot (YAFH) ![GitHub Repo Stars](https://img.shields.io/github/stars/fnzv/YAFH) ![GitHub last commit](https://img.shields.io/github/last-commit/fnzv/YAFH)](https://github.com/fnzv/YAFH) - Simple honeypot written in Go.
  - [arctic-swallow ![GitHub Repo Stars](https://img.shields.io/github/stars/ajackal/arctic-swallow) ![GitHub last commit](https://img.shields.io/github/last-commit/ajackal/arctic-swallow)](https://github.com/ajackal/arctic-swallow) - Low interaction honeypot.
  - [fapro ![GitHub Repo Stars](https://img.shields.io/github/stars/fofapro/fapro) ![GitHub last commit](https://img.shields.io/github/last-commit/fofapro/fapro)](https://github.com/fofapro/fapro) - Fake Protocol Server.
  - [glutton ![GitHub Repo Stars](https://img.shields.io/github/stars/mushorg/glutton) ![GitHub last commit](https://img.shields.io/github/last-commit/mushorg/glutton)](https://github.com/mushorg/glutton) - All eating honeypot.
  - [go-HoneyPot ![GitHub Repo Stars](https://img.shields.io/github/stars/Mojachieee/go-HoneyPot) ![GitHub last commit](https://img.shields.io/github/last-commit/Mojachieee/go-HoneyPot)](https://github.com/Mojachieee/go-HoneyPot) - Honeypot server written in Go.
  - [go-emulators ![GitHub Repo Stars](https://img.shields.io/github/stars/kingtuna/go-emulators) ![GitHub last commit](https://img.shields.io/github/last-commit/kingtuna/go-emulators)](https://github.com/kingtuna/go-emulators) - Honeypot Golang emulators.
  - [honeymail ![GitHub Repo Stars](https://img.shields.io/github/stars/sec51/honeymail) ![GitHub last commit](https://img.shields.io/github/last-commit/sec51/honeymail)](https://github.com/sec51/honeymail) - SMTP honeypot written in Golang.
  - [honeytrap ![GitHub Repo Stars](https://img.shields.io/github/stars/tillmannw/honeytrap) ![GitHub last commit](https://img.shields.io/github/last-commit/tillmannw/honeytrap)](https://github.com/tillmannw/honeytrap) - Low-interaction honeypot and network security tool written to catch attacks against TCP and UDP services.
  - [imap-honey ![GitHub Repo Stars](https://img.shields.io/github/stars/yvesago/imap-honey) ![GitHub last commit](https://img.shields.io/github/last-commit/yvesago/imap-honey)](https://github.com/yvesago/imap-honey) - IMAP honeypot written in Golang.
  - [mwcollectd](https://www.openhub.net/p/mwcollectd) - Versatile malware collection daemon, uniting the best features of nepenthes and honeytrap.
  - [potd ![GitHub Repo Stars](https://img.shields.io/github/stars/lnslbrty/potd) ![GitHub last commit](https://img.shields.io/github/last-commit/lnslbrty/potd)](https://github.com/lnslbrty/potd) - Highly scalable low- to medium-interaction SSH/TCP honeypot designed for OpenWrt/IoT devices leveraging several Linux kernel features, such as namespaces, seccomp and thread capabilities.
  - [portlurker ![GitHub Repo Stars](https://img.shields.io/github/stars/bartnv/portlurker) ![GitHub last commit](https://img.shields.io/github/last-commit/bartnv/portlurker)](https://github.com/bartnv/portlurker) - Port listener in Rust with protocol guessing and safe string display.
  - [slipm-honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/rshipp/slipm-honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/rshipp/slipm-honeypot)](https://github.com/rshipp/slipm-honeypot) - Simple low-interaction port monitoring honeypot.
  - [telnet-iot-honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/Phype/telnet-iot-honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/Phype/telnet-iot-honeypot)](https://github.com/Phype/telnet-iot-honeypot) - Python telnet honeypot for catching botnet binaries.
  - [telnetlogger ![GitHub Repo Stars](https://img.shields.io/github/stars/robertdavidgraham/telnetlogger) ![GitHub last commit](https://img.shields.io/github/last-commit/robertdavidgraham/telnetlogger)](https://github.com/robertdavidgraham/telnetlogger) - Telnet honeypot designed to track the Mirai botnet.
  - [vnclowpot ![GitHub Repo Stars](https://img.shields.io/github/stars/magisterquis/vnclowpot) ![GitHub last commit](https://img.shields.io/github/last-commit/magisterquis/vnclowpot)](https://github.com/magisterquis/vnclowpot) - Low interaction VNC honeypot.

- IDS signature generation

  - [Honeycomb](http://www.icir.org/christian/honeycomb/) - Automated signature creation using honeypots.

- Lookup service for AS-numbers and prefixes

  - [CC2ASN](http://www.cc2asn.com/) - Simple lookup service for AS-numbers and prefixes belonging to any given country in the world.

- Data Collection / Data Sharing

  - [HPfriends](http://hpfriends.honeycloud.net/#/home) - Honeypot data-sharing platform.
    - [hpfriends - real-time social data-sharing](https://heipei.io/sigint-hpfriends/) - Presentation about HPFriends feed system
  - [HPFeeds ![GitHub Repo Stars](https://img.shields.io/github/stars/rep/hpfeeds) ![GitHub last commit](https://img.shields.io/github/last-commit/rep/hpfeeds)](https://github.com/rep/hpfeeds/) - Lightweight authenticated publish-subscribe protocol.

- Central management tool

  - [PHARM](http://www.nepenthespharm.com/) - Manage, report, and analyze your distributed Nepenthes instances.

- Network connection analyzer

  - [Impost](http://impost.sourceforge.net/) - Network security auditing tool designed to analyze the forensics behind compromised and/or vulnerable daemons.

- Honeypot deployment

  - [Modern Honeynet Network](http://threatstream.github.io/mhn/) - Streamlines deployment and management of secure honeypots.

- Honeypot extensions to Wireshark

  - [Wireshark Extensions](https://www.honeynet.org/project/WiresharkExtensions) - Apply Snort IDS rules and signatures against packet capture files using Wireshark.

- Client

  - [CWSandbox / GFI Sandbox](https://www.gfi.com/products-and-solutions/all-products)
  - [Capture-HPC-Linux](https://redmine.honeynet.org/projects/linux-capture-hpc/wiki)
  - [Capture-HPC-NG ![GitHub Repo Stars](https://img.shields.io/github/stars/CERT-Polska/HSN-Capture-HPC-NG) ![GitHub last commit](https://img.shields.io/github/last-commit/CERT-Polska/HSN-Capture-HPC-NG)](https://github.com/CERT-Polska/HSN-Capture-HPC-NG)
  - [Capture-HPC](https://projects.honeynet.org/capture-hpc) - High interaction client honeypot (also called honeyclient).
  - [HoneyBOT](http://www.atomicsoftwaresolutions.com/)
  - [HoneyC](https://projects.honeynet.org/honeyc)
  - [HoneySpider Network ![GitHub Repo Stars](https://img.shields.io/github/stars/CERT-Polska/hsn2-bundle) ![GitHub last commit](https://img.shields.io/github/last-commit/CERT-Polska/hsn2-bundle)](https://github.com/CERT-Polska/hsn2-bundle) - Highly-scalable system integrating multiple client honeypots to detect malicious websites.
  - [HoneyWeb](https://code.google.com/archive/p/gsoc-honeyweb/) - Web interface created to manage and remotely share Honeyclients resources.
  - [Jsunpack-n ![GitHub Repo Stars](https://img.shields.io/github/stars/urule99/jsunpack-n) ![GitHub last commit](https://img.shields.io/github/last-commit/urule99/jsunpack-n)](https://github.com/urule99/jsunpack-n)
  - [MonkeySpider](http://monkeyspider.sourceforge.net)
  - [PhoneyC ![GitHub Repo Stars](https://img.shields.io/github/stars/honeynet/phoneyc) ![GitHub last commit](https://img.shields.io/github/last-commit/honeynet/phoneyc)](https://github.com/honeynet/phoneyc) - Python honeyclient (later replaced by Thug).
  - [Pwnypot ![GitHub Repo Stars](https://img.shields.io/github/stars/shjalayeri/pwnypot) ![GitHub last commit](https://img.shields.io/github/last-commit/shjalayeri/pwnypot)](https://github.com/shjalayeri/pwnypot) - High Interaction Client Honeypot.
  - [Rumal](https://github.com/thugs-rumal/) - Thug's Rumāl: a Thug's dress and weapon.
  - [Shelia](https://www.cs.vu.nl/~herbertb/misc/shelia/) - Client-side honeypot for attack detection.
  - [Thug](https://buffer.github.io/thug/) - Python-based low-interaction honeyclient.
  - [Thug Distributed Task Queuing](https://thug-distributed.readthedocs.io/en/latest/index.html)
  - [Trigona](https://www.honeynet.org/project/Trigona)
  - [URLQuery](https://urlquery.net/)
  - [YALIH (Yet Another Low Interaction Honeyclient) ![GitHub Repo Stars](https://img.shields.io/github/stars/Masood-M/yalih) ![GitHub last commit](https://img.shields.io/github/last-commit/Masood-M/yalih)](https://github.com/Masood-M/yalih) - Low-interaction client honeypot designed to detect malicious websites through signature, anomaly, and pattern matching techniques.

- Honeypot

  - [Deception Toolkit](http://www.all.net/dtk/dtk.html)
  - [IMHoneypot ![GitHub Repo Stars](https://img.shields.io/github/stars/mushorg/imhoneypot) ![GitHub last commit](https://img.shields.io/github/last-commit/mushorg/imhoneypot)](https://github.com/mushorg/imhoneypot)

- PDF document inspector

  - [peepdf ![GitHub Repo Stars](https://img.shields.io/github/stars/jesparza/peepdf) ![GitHub last commit](https://img.shields.io/github/last-commit/jesparza/peepdf)](https://github.com/jesparza/peepdf) - Powerful Python tool to analyze PDF documents.

- Hybrid low/high interaction honeypot

  - [HoneyBrid](http://honeybrid.sourceforge.net)

- SSH Honeypots

  - [Blacknet ![GitHub Repo Stars](https://img.shields.io/github/stars/morian/blacknet) ![GitHub last commit](https://img.shields.io/github/last-commit/morian/blacknet)](https://github.com/morian/blacknet) - Multi-head SSH honeypot system.
  - [Cowrie ![GitHub Repo Stars](https://img.shields.io/github/stars/cowrie/cowrie) ![GitHub last commit](https://img.shields.io/github/last-commit/cowrie/cowrie)](https://github.com/cowrie/cowrie) - Cowrie SSH Honeypot (based on kippo).
  - [DShield docker ![GitHub Repo Stars](https://img.shields.io/github/stars/xme/dshield-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/xme/dshield-docker)](https://github.com/xme/dshield-docker) - Docker container running cowrie with DShield output enabled.
  - [endlessh ![GitHub Repo Stars](https://img.shields.io/github/stars/skeeto/endlessh) ![GitHub last commit](https://img.shields.io/github/last-commit/skeeto/endlessh)](https://github.com/skeeto/endlessh) - SSH tarpit that slowly sends an endless banner. ([docker image](https://hub.docker.com/r/linuxserver/endlessh))
  - [HonSSH ![GitHub Repo Stars](https://img.shields.io/github/stars/tnich/honssh) ![GitHub last commit](https://img.shields.io/github/last-commit/tnich/honssh)](https://github.com/tnich/honssh) - Logs all SSH communications between a client and server.
  - [HUDINX ![GitHub Repo Stars](https://img.shields.io/github/stars/Cryptix720/HUDINX) ![GitHub last commit](https://img.shields.io/github/last-commit/Cryptix720/HUDINX)](https://github.com/Cryptix720/HUDINX) - Tiny interaction SSH honeypot engineered in Python to log brute force attacks and, most importantly, the entire shell interaction performed by the attacker.
  - [Kippo ![GitHub Repo Stars](https://img.shields.io/github/stars/desaster/kippo) ![GitHub last commit](https://img.shields.io/github/last-commit/desaster/kippo)](https://github.com/desaster/kippo) - Medium interaction SSH honeypot.
  - [Kippo_JunOS ![GitHub Repo Stars](https://img.shields.io/github/stars/gregcmartin/Kippo_JunOS) ![GitHub last commit](https://img.shields.io/github/last-commit/gregcmartin/Kippo_JunOS)](https://github.com/gregcmartin/Kippo_JunOS) - Kippo configured to be a backdoored netscreen.
  - [Kojoney2 ![GitHub Repo Stars](https://img.shields.io/github/stars/madirish/kojoney2) ![GitHub last commit](https://img.shields.io/github/last-commit/madirish/kojoney2)](https://github.com/madirish/kojoney2) - Low interaction SSH honeypot written in Python and based on Kojoney by Jose Antonio Coret.
  - [Kojoney](http://kojoney.sourceforge.net/) - Python-based Low interaction honeypot that emulates an SSH server implemented with Twisted Conch.
  - [Longitudinal Analysis of SSH Cowrie Honeypot Logs ![GitHub Repo Stars](https://img.shields.io/github/stars/deroux/longitudinal-analysis-cowrie) ![GitHub last commit](https://img.shields.io/github/last-commit/deroux/longitudinal-analysis-cowrie)](https://github.com/deroux/longitudinal-analysis-cowrie) - Python based command line tool to analyze cowrie logs over time.
  - [LongTail Log Analysis @ Marist College](http://longtail.it.marist.edu/honey/) - Analyzed SSH honeypot logs.
  - [Malbait ![GitHub Repo Stars](https://img.shields.io/github/stars/batchmcnulty/Malbait) ![GitHub last commit](https://img.shields.io/github/last-commit/batchmcnulty/Malbait)](https://github.com/batchmcnulty/Malbait) - Simple TCP/UDP honeypot implemented in Perl.
  - [MockSSH ![GitHub Repo Stars](https://img.shields.io/github/stars/ncouture/MockSSH) ![GitHub last commit](https://img.shields.io/github/last-commit/ncouture/MockSSH)](https://github.com/ncouture/MockSSH) - Mock an SSH server and define all commands it supports (Python, Twisted).
  - [cowrie2neo ![GitHub Repo Stars](https://img.shields.io/github/stars/xlfe/cowrie2neo) ![GitHub last commit](https://img.shields.io/github/last-commit/xlfe/cowrie2neo)](https://github.com/xlfe/cowrie2neo) - Parse cowrie honeypot logs into a neo4j database.
  - [go-sshoney ![GitHub Repo Stars](https://img.shields.io/github/stars/ashmckenzie/go-sshoney) ![GitHub last commit](https://img.shields.io/github/last-commit/ashmckenzie/go-sshoney)](https://github.com/ashmckenzie/go-sshoney) - SSH Honeypot.
  - [go0r ![GitHub Repo Stars](https://img.shields.io/github/stars/fzerorubigd/go0r) ![GitHub last commit](https://img.shields.io/github/last-commit/fzerorubigd/go0r)](https://github.com/fzerorubigd/go0r) - Simple ssh honeypot in Golang.
  - [gohoney ![GitHub Repo Stars](https://img.shields.io/github/stars/PaulMaddox/gohoney) ![GitHub last commit](https://img.shields.io/github/last-commit/PaulMaddox/gohoney)](https://github.com/PaulMaddox/gohoney) - SSH honeypot written in Go.
  - [hived ![GitHub Repo Stars](https://img.shields.io/github/stars/sahilm/hived) ![GitHub last commit](https://img.shields.io/github/last-commit/sahilm/hived)](https://github.com/sahilm/hived) - Golang-based honeypot.
  - [hnypots-agent) ![GitHub Repo Stars](https://img.shields.io/github/stars/joshrendek/hnypots-agent) ![GitHub last commit](https://img.shields.io/github/last-commit/joshrendek/hnypots-agent)](https://github.com/joshrendek/hnypots-agent) - SSH Server in Go that logs username and password combinations.
  - [honeypot.go ![GitHub Repo Stars](https://img.shields.io/github/stars/mdp/honeypot.go) ![GitHub last commit](https://img.shields.io/github/last-commit/mdp/honeypot.go)](https://github.com/mdp/honeypot.go) - SSH Honeypot written in Go.
  - [honeyssh ![GitHub Repo Stars](https://img.shields.io/github/stars/ppacher/honeyssh) ![GitHub last commit](https://img.shields.io/github/last-commit/ppacher/honeyssh)](https://github.com/ppacher/honeyssh) - Credential dumping SSH honeypot with statistics.
  - [hornet ![GitHub Repo Stars](https://img.shields.io/github/stars/czardoz/hornet) ![GitHub last commit](https://img.shields.io/github/last-commit/czardoz/hornet)](https://github.com/czardoz/hornet) - Medium interaction SSH honeypot that supports multiple virtual hosts.
  - [ssh-auth-logger ![GitHub Repo Stars](https://img.shields.io/github/stars/JustinAzoff/ssh-auth-logger) ![GitHub last commit](https://img.shields.io/github/last-commit/JustinAzoff/ssh-auth-logger)](https://github.com/JustinAzoff/ssh-auth-logger) - Low/zero interaction SSH authentication logging honeypot.
  - [ssh-honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/droberson/ssh-honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/droberson/ssh-honeypot)](https://github.com/droberson/ssh-honeypot) - Fake sshd that logs IP addresses, usernames, and passwords.
  - [ssh-honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/amv42/sshd-honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/amv42/sshd-honeypot)](https://github.com/amv42/sshd-honeypot) - Modified version of the OpenSSH deamon that forwards commands to Cowrie where all commands are interpreted and returned.
  - [ssh-honeypotd ![GitHub Repo Stars](https://img.shields.io/github/stars/sjinks/ssh-honeypotd) ![GitHub last commit](https://img.shields.io/github/last-commit/sjinks/ssh-honeypotd)](https://github.com/sjinks/ssh-honeypotd) - Low-interaction SSH honeypot written in C.
  - [sshForShits ![GitHub Repo Stars](https://img.shields.io/github/stars/traetox/sshForShits) ![GitHub last commit](https://img.shields.io/github/last-commit/traetox/sshForShits)](https://github.com/traetox/sshForShits) - Framework for a high interaction SSH honeypot.
  - [sshesame ![GitHub Repo Stars](https://img.shields.io/github/stars/jaksi/sshesame) ![GitHub last commit](https://img.shields.io/github/last-commit/jaksi/sshesame)](https://github.com/jaksi/sshesame) - Fake SSH server that lets everyone in and logs their activity.
  - [sshhipot ![GitHub Repo Stars](https://img.shields.io/github/stars/magisterquis/sshhipot) ![GitHub last commit](https://img.shields.io/github/last-commit/magisterquis/sshhipot)](https://github.com/magisterquis/sshhipot) - High-interaction MitM SSH honeypot.
  - [sshlowpot ![GitHub Repo Stars](https://img.shields.io/github/stars/magisterquis/sshlowpot) ![GitHub last commit](https://img.shields.io/github/last-commit/magisterquis/sshlowpot)](https://github.com/magisterquis/sshlowpot) - Yet another no-frills low-interaction SSH honeypot in Go.
  - [sshsyrup ![GitHub Repo Stars](https://img.shields.io/github/stars/mkishere/sshsyrup) ![GitHub last commit](https://img.shields.io/github/last-commit/mkishere/sshsyrup)](https://github.com/mkishere/sshsyrup) - Simple SSH Honeypot with features to capture terminal activity and upload to asciinema.org.
  - [twisted-honeypots ![GitHub Repo Stars](https://img.shields.io/github/stars/lanjelot/twisted-honeypots) ![GitHub last commit](https://img.shields.io/github/last-commit/lanjelot/twisted-honeypots)](https://github.com/lanjelot/twisted-honeypots) - SSH, FTP and Telnet honeypots based on Twisted.

- Distributed sensor project

  - [DShield Web Honeypot Project](https://sites.google.com/site/webhoneypotsite/)

- A pcap analyzer

  - [Honeysnap](https://projects.honeynet.org/honeysnap/)

- Network traffic redirector

  - [Honeywall](https://projects.honeynet.org/honeywall/)

- Honeypot Distribution with mixed content

  - [HoneyDrive](https://bruteforcelab.com/honeydrive)

- Honeypot sensor

  - [Honeeepi](https://redmine.honeynet.org/projects/honeeepi/wiki) - Honeypot sensor on a Raspberry Pi based on a customized Raspbian OS.

- File carving

  - [TestDisk & PhotoRec](https://www.cgsecurity.org/)

- Behavioral analysis tool for win32

  - [Capture BAT](https://www.honeynet.org/node/315)

- Live CD

  - [DAVIX](https://www.secviz.org/node/89) - The DAVIX Live CD.

- Spamtrap

  - [Mail::SMTP::Honeypot](https://metacpan.org/pod/release/MIKER/Mail-SMTP-Honeypot-0.11/Honeypot.pm) - Perl module that appears to provide the functionality of a standard SMTP server.
  - [Mailoney ![GitHub Repo Stars](https://img.shields.io/github/stars/awhitehatter/mailoney) ![GitHub last commit](https://img.shields.io/github/last-commit/awhitehatter/mailoney)](https://github.com/awhitehatter/mailoney) - SMTP honeypot, Open Relay, Cred Harvester written in python.
  - [SendMeSpamIDS.py ![GitHub Repo Stars](https://img.shields.io/github/stars/johestephan/VerySimpleHoneypot) ![GitHub last commit](https://img.shields.io/github/last-commit/johestephan/VerySimpleHoneypot)](https://github.com/johestephan/VerySimpleHoneypot) - Simple SMTP fetch all IDS and analyzer.
  - [Shiva ![GitHub Repo Stars](https://img.shields.io/github/stars/shiva-spampot/shiva) ![GitHub last commit](https://img.shields.io/github/last-commit/shiva-spampot/shiva)](https://github.com/shiva-spampot/shiva) - Spam Honeypot with Intelligent Virtual Analyzer.
    - [Shiva The Spam Honeypot Tips And Tricks For Getting It Up And Running](https://www.pentestpartners.com/security-blog/shiva-the-spam-honeypot-tips-and-tricks-for-getting-it-up-and-running/)
  - [SpamHAT ![GitHub Repo Stars](https://img.shields.io/github/stars/miguelraulb/spamhat) ![GitHub last commit](https://img.shields.io/github/last-commit/miguelraulb/spamhat)](https://github.com/miguelraulb/spamhat) - Spam Honeypot Tool.
  - [Spamhole](http://www.spamhole.net/)
  - [honeypot ![GitHub Repo Stars](https://img.shields.io/github/stars/jadb/honeypot) ![GitHub last commit](https://img.shields.io/github/last-commit/jadb/honeypot)](https://github.com/jadb/honeypot) - The Project Honey Pot un-official PHP SDK.
  - [spamd](http://man.openbsd.org/cgi-bin/man.cgi?query=spamd%26apropos=0%26sektion=0%26manpath=OpenBSD+Current%26arch=i386%26format=html)

- Commercial honeynet

  - [Cymmetria Mazerunner](ttps://cymmetria.com/products/mazerunner/) - Leads attackers away from real targets and creates a footprint of the attack.

- Server (Bluetooth)

  - [Bluepot ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewmichaelsmith/bluepot) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewmichaelsmith/bluepot)](https://github.com/andrewmichaelsmith/bluepot)

- Dynamic analysis of Android apps

  - [Droidbox](https://code.google.com/archive/p/droidbox/)

- Dockerized Low Interaction packaging

  - [Docker honeynet ![GitHub Repo Stars](https://img.shields.io/github/stars/sreinhardt/Docker-Honeynet) ![GitHub last commit](https://img.shields.io/github/last-commit/sreinhardt/Docker-Honeynet)](https://github.com/sreinhardt/Docker-Honeynet) - Several Honeynet tools set up for Docker containers.
  - [Dockerized Thug](https://hub.docker.com/r/honeynet/thug/) - Dockerized [Thug ![GitHub Repo Stars](https://img.shields.io/github/stars/buffer/thug) ![GitHub last commit](https://img.shields.io/github/last-commit/buffer/thug)](https://github.com/buffer/thug) to analyze malicious web content.
  - [Dockerpot ![GitHub Repo Stars](https://img.shields.io/github/stars/mrschyte/dockerpot) ![GitHub last commit](https://img.shields.io/github/last-commit/mrschyte/dockerpot)](https://github.com/mrschyte/dockerpot) - Docker based honeypot.
  - [Manuka ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewmichaelsmith/manuka) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewmichaelsmith/manuka)](https://github.com/andrewmichaelsmith/manuka) - Docker based honeypot (Dionaea and Kippo).
  - [honey_ports ![GitHub Repo Stars](https://img.shields.io/github/stars/run41/honey_ports) ![GitHub last commit](https://img.shields.io/github/last-commit/run41/honey_ports)](https://github.com/run41/honey_ports) - Very simple but effective docker deployed honeypot to detect port scanning in your environment.
  - [mhn-core-docker ![GitHub Repo Stars](https://img.shields.io/github/stars/MattCarothers/mhn-core-docker) ![GitHub last commit](https://img.shields.io/github/last-commit/MattCarothers/mhn-core-docker)](https://github.com/MattCarothers/mhn-core-docker) - Core elements of the Modern Honey Network implemented in Docker.

- Network analysis

  - [Quechua](https://bitbucket.org/zaccone/quechua)

- SIP Server

  - [Artemnesia VoIP](http://artemisa.sourceforge.net)

- SIP

  - [SentryPeer ![GitHub Repo Stars](https://img.shields.io/github/stars/SentryPeer/SentryPeer) ![GitHub last commit](https://img.shields.io/github/last-commit/SentryPeer/SentryPeer)](https://github.com/SentryPeer/SentryPeer) - Protect your SIP Servers from bad actors.

- IOT Honeypot

  - [HoneyThing ![GitHub Repo Stars](https://img.shields.io/github/stars/omererdem/honeything) ![GitHub last commit](https://img.shields.io/github/last-commit/omererdem/honeything)](https://github.com/omererdem/honeything) - TR-069 Honeypot.
  - [Kako ![GitHub Repo Stars](https://img.shields.io/github/stars/darkarnium/kako) ![GitHub last commit](https://img.shields.io/github/last-commit/darkarnium/kako)](https://github.com/darkarnium/kako) - Honeypots for a number of well known and deployed embedded device vulnerabilities.

- Honeytokens
  - [CanaryTokens ![GitHub Repo Stars](https://img.shields.io/github/stars/thinkst/canarytokens) ![GitHub last commit](https://img.shields.io/github/last-commit/thinkst/canarytokens)](https://github.com/thinkst/canarytokens) - Self-hostable honeytoken generator and reporting dashboard; demo version available at [CanaryTokens.org](https://canarytokens.org/generate).
  - [Honeybits ![GitHub Repo Stars](https://img.shields.io/github/stars/0x4D31/honeybits) ![GitHub last commit](https://img.shields.io/github/last-commit/0x4D31/honeybits)](https://github.com/0x4D31/honeybits) - Simple tool designed to enhance the effectiveness of your traps by spreading breadcrumbs and honeytokens across your production servers and workstations to lure the attacker toward your honeypots.
  - [Honeyλ (HoneyLambda) ![GitHub Repo Stars](https://img.shields.io/github/stars/0x4D31/honeylambda) ![GitHub last commit](https://img.shields.io/github/last-commit/0x4D31/honeylambda)](https://github.com/0x4D31/honeylambda) - Simple, serverless application designed to create and monitor URL honeytokens, on top of AWS Lambda and Amazon API Gateway.
  - [dcept ![GitHub Repo Stars](https://img.shields.io/github/stars/secureworks/dcept) ![GitHub last commit](https://img.shields.io/github/last-commit/secureworks/dcept)](https://github.com/secureworks/dcept) - Tool for deploying and detecting use of Active Directory honeytokens.
  - [honeyku ![GitHub Repo Stars](https://img.shields.io/github/stars/0x4D31/honeyku) ![GitHub last commit](https://img.shields.io/github/last-commit/0x4D31/honeyku)](https://github.com/0x4D31/honeyku) - Heroku-based web honeypot that can be used to create and monitor fake HTTP endpoints (i.e. honeytokens).

## Honeyd Tools

- Honeyd plugin

  - [Honeycomb](http://www.honeyd.org/tools.php)

- Honeyd viewer

  - [Honeyview](http://honeyview.sourceforge.net/)

- Honeyd to MySQL connector

  - [Honeyd2MySQL](https://bruteforcelab.com/honeyd2mysql)

- A script to visualize statistics from honeyd

  - [Honeyd-Viz](https://bruteforcelab.com/honeyd-viz)

- Honeyd stats
  - [Honeydsum.pl ![GitHub Repo Stars](https://img.shields.io/github/stars/DataSoft/Honeyd) ![GitHub last commit](https://img.shields.io/github/last-commit/DataSoft/Honeyd)](https://github.com/DataSoft/Honeyd/blob/master/scripts/misc/honeydsum-v0.3/honeydsum.pl)

## Network and Artifact Analysis

- Sandbox

  - [Argos](http://www.few.vu.nl/argos/) - Emulator for capturing zero-day attacks.
  - [COMODO automated sandbox](https://help.comodo.com/topic-72-1-451-4768-.html)
  - [Cuckoo](https://cuckoosandbox.org/) - Leading open source automated malware analysis system.
  - [Pylibemu ![GitHub Repo Stars](https://img.shields.io/github/stars/buffer/pylibemu) ![GitHub last commit](https://img.shields.io/github/last-commit/buffer/pylibemu)](https://github.com/buffer/pylibemu) - Libemu Cython wrapper.
  - [RFISandbox](https://monkey.org/~jose/software/rfi-sandbox/) - PHP 5.x script sandbox built on top of [funcall](https://pecl.php.net/package/funcall).
  - [dorothy2 ![GitHub Repo Stars](https://img.shields.io/github/stars/m4rco-/dorothy2) ![GitHub last commit](https://img.shields.io/github/last-commit/m4rco-/dorothy2)](https://github.com/m4rco-/dorothy2) - Malware/botnet analysis framework written in Ruby.
  - [imalse ![GitHub Repo Stars](https://img.shields.io/github/stars/hbhzwj/imalse) ![GitHub last commit](https://img.shields.io/github/last-commit/hbhzwj/imalse)](https://github.com/hbhzwj/imalse) - Integrated MALware Simulator and Emulator.
  - [libemu ![GitHub Repo Stars](https://img.shields.io/github/stars/buffer/libemu) ![GitHub last commit](https://img.shields.io/github/last-commit/buffer/libemu)](https://github.com/buffer/libemu) - Shellcode emulation library, useful for shellcode detection.

- Sandbox-as-a-Service

  - [Hybrid Analysis](https://www.hybrid-analysis.com) - Free malware analysis service powered by Payload Security that detects and analyzes unknown threats using a unique Hybrid Analysis technology.
  - [Joebox Cloud](https://jbxcloud.joesecurity.org/login) - Analyzes the behavior of malicious files including PEs, PDFs, DOCs, PPTs, XLSs, APKs, URLs and MachOs on Windows, Android and Mac OS X for suspicious activities.
  - [VirusTotal](https://www.virustotal.com/) - Analyze suspicious files and URLs to detect types of malware, and automatically share them with the security community.
  - [malwr.com](https://malwr.com/) - Free malware analysis service and community.

## Data Tools

- Front Ends

  - [DionaeaFR ![GitHub Repo Stars](https://img.shields.io/github/stars/rubenespadas/DionaeaFR) ![GitHub last commit](https://img.shields.io/github/last-commit/rubenespadas/DionaeaFR)](https://github.com/rubenespadas/DionaeaFR) - Front Web to Dionaea low-interaction honeypot.
  - [Django-kippo ![GitHub Repo Stars](https://img.shields.io/github/stars/jedie/django-kippo) ![GitHub last commit](https://img.shields.io/github/last-commit/jedie/django-kippo)](https://github.com/jedie/django-kippo) - Django App for kippo SSH Honeypot.
  - [Shockpot-Frontend ![GitHub Repo Stars](https://img.shields.io/github/stars/GovCERT-CZ/Shockpot-Frontend) ![GitHub last commit](https://img.shields.io/github/last-commit/GovCERT-CZ/Shockpot-Frontend)](https://github.com/GovCERT-CZ/Shockpot-Frontend) - Full featured script to visualize statistics from a Shockpot honeypot.
  - [Tango ![GitHub Repo Stars](https://img.shields.io/github/stars/aplura/Tango) ![GitHub last commit](https://img.shields.io/github/last-commit/aplura/Tango)](https://github.com/aplura/Tango) - Honeypot Intelligence with Splunk.
  - [Wordpot-Frontend ![GitHub Repo Stars](https://img.shields.io/github/stars/GovCERT-CZ/Wordpot-Frontend) ![GitHub last commit](https://img.shields.io/github/last-commit/GovCERT-CZ/Wordpot-Frontend)](https://github.com/GovCERT-CZ/Wordpot-Frontend) - Full featured script to visualize statistics from a Wordpot honeypot.
  - [honeyalarmg2 ![GitHub Repo Stars](https://img.shields.io/github/stars/schmalle/honeyalarmg2) ![GitHub last commit](https://img.shields.io/github/last-commit/schmalle/honeyalarmg2)](https://github.com/schmalle/honeyalarmg2) - Simplified UI for showing honeypot alarms.
  - [honeypotDisplay ![GitHub Repo Stars](https://img.shields.io/github/stars/Joss-Steward/honeypotDisplay) ![GitHub last commit](https://img.shields.io/github/last-commit/Joss-Steward/honeypotDisplay)](https://github.com/Joss-Steward/honeypotDisplay) - Flask website which displays data gathered from an SSH Honeypot.

- Visualization

  - [Acapulco ![GitHub Repo Stars](https://img.shields.io/github/stars/hgascon/acapulco) ![GitHub last commit](https://img.shields.io/github/last-commit/hgascon/acapulco)](https://github.com/hgascon/acapulco) - Automated Attack Community Graph Construction.
  - [Afterglow Cloud ![GitHub Repo Stars](https://img.shields.io/github/stars/ayrus/afterglow-cloud) ![GitHub last commit](https://img.shields.io/github/last-commit/ayrus/afterglow-cloud)](https://github.com/ayrus/afterglow-cloud)
  - [Afterglow](http://afterglow.sourceforge.net/)
  - [Glastopf Analytics ![GitHub Repo Stars](https://img.shields.io/github/stars/katkad/Glastopf-Analytics) ![GitHub last commit](https://img.shields.io/github/last-commit/katkad/Glastopf-Analytics)](https://github.com/katkad/Glastopf-Analytics) - Easy honeypot statistics.
  - [HoneyMalt ![GitHub Repo Stars](https://img.shields.io/github/stars/SneakersInc/HoneyMalt) ![GitHub last commit](https://img.shields.io/github/last-commit/SneakersInc/HoneyMalt)](https://github.com/SneakersInc/HoneyMalt) - Maltego tranforms for mapping Honeypot systems.
  - [HoneyMap ![GitHub Repo Stars](https://img.shields.io/github/stars/fw42/honeymap) ![GitHub last commit](https://img.shields.io/github/last-commit/fw42/honeymap)](https://github.com/fw42/honeymap) - Real-time websocket stream of GPS events on a fancy SVG world map.
  - [HoneyStats](https://sourceforge.net/projects/honeystats/) - Statistical view of the recorded activity on a Honeynet.
  - [HpfeedsHoneyGraph ![GitHub Repo Stars](https://img.shields.io/github/stars/yuchincheng/HpfeedsHoneyGraph) ![GitHub last commit](https://img.shields.io/github/last-commit/yuchincheng/HpfeedsHoneyGraph)](https://github.com/yuchincheng/HpfeedsHoneyGraph) - Visualization app to visualize hpfeeds logs.
  - [IVRE ![GitHub Repo Stars](https://img.shields.io/github/stars/ivre/ivre) ![GitHub last commit](https://img.shields.io/github/last-commit/ivre/ivre)](https://github.com/ivre/ivre) - Network recon framework, published by @cea-sec & @ANSSI-FR. Build your own, self-hosted and fully-controlled alternatives to Criminalip / Shodan / ZoomEye / Censys and GreyNoise, run your Passive DNS service, collect and analyse network intelligence from your sensors, and much more!
  - [Kippo stats ![GitHub Repo Stars](https://img.shields.io/github/stars/mfontani/kippo-stats) ![GitHub last commit](https://img.shields.io/github/last-commit/mfontani/kippo-stats)](https://github.com/mfontani/kippo-stats) - Mojolicious app to display statistics for your kippo SSH honeypot.
  - [Kippo-Graph](https://bruteforcelab.com/kippo-graph) - Full featured script to visualize statistics from a Kippo SSH honeypot.
  - [The Intelligent HoneyNet ![GitHub Repo Stars](https://img.shields.io/github/stars/jpyorre/IntelligentHoneyNet) ![GitHub last commit](https://img.shields.io/github/last-commit/jpyorre/IntelligentHoneyNet)](https://github.com/jpyorre/IntelligentHoneyNet) - Create actionable information from honeypots.
  - [ovizart ![GitHub Repo Stars](https://img.shields.io/github/stars/oguzy/ovizart) ![GitHub last commit](https://img.shields.io/github/last-commit/oguzy/ovizart)](https://github.com/oguzy/ovizart) - Visual analysis for network traffic.

## Guides

- [T-Pot: A Multi-Honeypot Platform](https://dtag-dev-sec.github.io/mediator/feature/2015/03/17/concept.html)
- [Honeypot (Dionaea and kippo) setup script ![GitHub Repo Stars](https://img.shields.io/github/stars/andrewmichaelsmith/honeypot-setup-script) ![GitHub last commit](https://img.shields.io/github/last-commit/andrewmichaelsmith/honeypot-setup-script)](https://github.com/andrewmichaelsmith/honeypot-setup-script/)

- Deployment

  - [Dionaea and EC2 in 20 Minutes](http://andrewmichaelsmith.com/2012/03/dionaea-honeypot-on-ec2-in-20-minutes/) - Tutorial on setting up Dionaea on an EC2 instance.
  - [Using a Raspberry Pi honeypot to contribute data to DShield/ISC](https://isc.sans.edu/diary/22680) - The Raspberry Pi based system will allow us to maintain one code base that will make it easier to collect rich logs beyond firewall logs.
  - [honeypotpi ![GitHub Repo Stars](https://img.shields.io/github/stars/free5ty1e/honeypotpi) ![GitHub last commit](https://img.shields.io/github/last-commit/free5ty1e/honeypotpi)](https://github.com/free5ty1e/honeypotpi) - Script for turning a Raspberry Pi into a HoneyPot Pi.

- Research Papers

  - [Honeypot research papers ![GitHub Repo Stars](https://img.shields.io/github/stars/shbhmsingh72/Honeypot-Research-Papers) ![GitHub last commit](https://img.shields.io/github/last-commit/shbhmsingh72/Honeypot-Research-Papers)](https://github.com/shbhmsingh72/Honeypot-Research-Papers) - PDFs of research papers on honeypots.
  - [vEYE](https://link.springer.com/article/10.1007%2Fs10115-008-0137-3) - Behavioral footprinting for self-propagating worm detection and profiling.
