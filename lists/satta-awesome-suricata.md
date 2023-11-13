# Awesome Suricata [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

[<img src="https://suricata.io/wp-content/uploads/2022/01/Logo-SuricataFinal-1-translucent.png" align="right" width="120">](https://suricata.io)

> Curated list of awesome things related to Suricata.

[Suricata](https://suricata.io/features) is a free intrusion detection/prevention system (IDS/IPS) and network security monitoring engine.

## Contents

- [Input Tools](#input-tools)
- [Output Tools](#output-tools)
- [Operations, Monitoring and Troubleshooting](#operations-monitoring-and-troubleshooting)
- [Programming Libraries and Toolkits](#programming-libraries-and-toolkits)
- [Dashboards and Templates](#dashboards-and-templates)
- [Development Tools](#development-tools)
- [Documentation and Guides](#documentation-and-guides)
- [Analysis Tools](#analysis-tools)
- [Rule Sets](#rule-sets)
- [Rule/Security Content Management and Handling](#rulesecurity-content-management-and-handling)
- [Systems Using Suricata](#systems-using-suricata)
- [Training](#training)
- [Simulation and Testing](#simulation-and-testing)
- [Data Sets](#data-sets)
- [Misc](#misc)


## Input Tools

- [PacketStreamer ![GitHub Repo Stars](https://img.shields.io/github/stars/deepfence/PacketStreamer) ![GitHub last commit](https://img.shields.io/github/last-commit/deepfence/PacketStreamer)](https://github.com/deepfence/PacketStreamer) - Distributed tcpdump for cloud native environments.


## Output Tools

- [suricata-kafka-output ![GitHub Repo Stars](https://img.shields.io/github/stars/Center-Sun/suricata-kafka-output) ![GitHub last commit](https://img.shields.io/github/last-commit/Center-Sun/suricata-kafka-output)](https://github.com/Center-Sun/suricata-kafka-output) - Suricata Eve Kafka Output Plugin for Suricata 6.
- [suricata-redis-output ![GitHub Repo Stars](https://img.shields.io/github/stars/jasonish/suricata-redis-output) ![GitHub last commit](https://img.shields.io/github/last-commit/jasonish/suricata-redis-output)](https://github.com/jasonish/suricata-redis-output) - Suricata Eve Redis Output Plugin for Suricata 7.
- [Meer ![GitHub Repo Stars](https://img.shields.io/github/stars/quadrantsec/meer) ![GitHub last commit](https://img.shields.io/github/last-commit/quadrantsec/meer)](https://github.com/quadrantsec/meer) - Meer is a "spooler" for Suricata / Sagan.
- [FEVER ![GitHub Repo Stars](https://img.shields.io/github/stars/DCSO/fever) ![GitHub last commit](https://img.shields.io/github/last-commit/DCSO/fever)](https://github.com/DCSO/fever) - Fast, extensible, versatile event router for Suricata's EVE-JSON format.
- [Suricata-Logstash-Templates ![GitHub Repo Stars](https://img.shields.io/github/stars/pevma/Suricata-Logstash-Templates) ![GitHub last commit](https://img.shields.io/github/last-commit/pevma/Suricata-Logstash-Templates)](https://github.com/pevma/Suricata-Logstash-Templates) - Templates for Kibana/Logstash to use with Suricata IDPS.
- [Lilith ![GitHub Repo Stars](https://img.shields.io/github/stars/VVelox/Lilith) ![GitHub last commit](https://img.shields.io/github/last-commit/VVelox/Lilith)](https://github.com/VVelox/Lilith) - Reads EVE files into SQL as well as search stored data.


## Operations, Monitoring and Troubleshooting

- [slinkwatch ![GitHub Repo Stars](https://img.shields.io/github/stars/DCSO/slinkwatch) ![GitHub last commit](https://img.shields.io/github/last-commit/DCSO/slinkwatch)](https://github.com/DCSO/slinkwatch) - Automatic enumeration and maintenance of Suricata monitoring interfaces.
- [suri-stats ![GitHub Repo Stars](https://img.shields.io/github/stars/regit/suri-stats) ![GitHub last commit](https://img.shields.io/github/last-commit/regit/suri-stats)](https://github.com/regit/suri-stats) - A tool to work on suricata `stats.log` file.
- [Mauerspecht ![GitHub Repo Stars](https://img.shields.io/github/stars/DCSO/mauerspecht) ![GitHub last commit](https://img.shields.io/github/last-commit/DCSO/mauerspecht)](https://github.com/DCSO/mauerspecht) - Simple Probing Tool for Corporate Walled Garden Networks.
- [ansible-suricata ![GitHub Repo Stars](https://img.shields.io/github/stars/GitMirar/ansible-suricata) ![GitHub last commit](https://img.shields.io/github/last-commit/GitMirar/ansible-suricata)](https://github.com/GitMirar/ansible-suricata) - Suricata Ansible role (slightly outdated).
- [MassDeploySuricata ![GitHub Repo Stars](https://img.shields.io/github/stars/pevma/MassDeploySuricata) ![GitHub last commit](https://img.shields.io/github/last-commit/pevma/MassDeploySuricata)](https://github.com/pevma/MassDeploySuricata) - Mass deploy and update Suricata IDPS using Ansible IT automation platform.
- [docker-suricata ![GitHub Repo Stars](https://img.shields.io/github/stars/jasonish/docker-suricata) ![GitHub last commit](https://img.shields.io/github/last-commit/jasonish/docker-suricata)](https://github.com/jasonish/docker-suricata) - Suricata Docker image.
- [Suricata-Monitoring ![GitHub Repo Stars](https://img.shields.io/github/stars/VVelox/Suricata-Monitoring) ![GitHub last commit](https://img.shields.io/github/last-commit/VVelox/Suricata-Monitoring)](https://github.com/VVelox/Suricata-Monitoring) - LibreNMS JSON / Nagios monitor for Suricata stats.
- [Terraform Module for Suricata ![GitHub Repo Stars](https://img.shields.io/github/stars/onetwopunch/terraform-google-suricata) ![GitHub last commit](https://img.shields.io/github/last-commit/onetwopunch/terraform-google-suricata)](https://github.com/onetwopunch/terraform-google-suricata) - Terraform module to setup Google Cloud packet mirroring and send packets to Suricata.
- [InfluxDB Suricata Input Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/influxdata/telegraf) ![GitHub last commit](https://img.shields.io/github/last-commit/influxdata/telegraf)](https://github.com/influxdata/telegraf/tree/master/plugins/inputs/suricata) - Input Plugin for Telegraf to collect and forward Suricata `stats` logs (included out of the box in recent Telegraf releases).
- [suricata_exporter ![GitHub Repo Stars](https://img.shields.io/github/stars/corelight/suricata_exporter) ![GitHub last commit](https://img.shields.io/github/last-commit/corelight/suricata_exporter)](https://github.com/corelight/suricata_exporter) - Simple Prometheus exporter written in Go exporting stats metrics scraped from Suricata socket.

## Programming Libraries and Toolkits

- [rust-suricatax-rule-parser ![GitHub Repo Stars](https://img.shields.io/github/stars/jasonish/rust-suricatax-rule-parser) ![GitHub last commit](https://img.shields.io/github/last-commit/jasonish/rust-suricatax-rule-parser)](https://github.com/jasonish/rust-suricatax-rule-parser) - Experimental Suricata Rule Parser in Rust.
- [go-suricata ![GitHub Repo Stars](https://img.shields.io/github/stars/ks2211/go-suricata) ![GitHub last commit](https://img.shields.io/github/last-commit/ks2211/go-suricata)](https://github.com/ks2211/go-suricata) - Go Client for Suricata (Interacting via Socket).
- [gonids ![GitHub Repo Stars](https://img.shields.io/github/stars/google/gonids) ![GitHub last commit](https://img.shields.io/github/last-commit/google/gonids)](https://github.com/google/gonids) - Go library to parse intrusion detection rules for engines like Snort and Suricata.
- [surevego ![GitHub Repo Stars](https://img.shields.io/github/stars/rhaist/surevego) ![GitHub last commit](https://img.shields.io/github/last-commit/rhaist/surevego)](https://github.com/rhaist/surevego) - Suricata EVE-JSON parser in Go.
- [suricataparser ![GitHub Repo Stars](https://img.shields.io/github/stars/m-chrome/py-suricataparser) ![GitHub last commit](https://img.shields.io/github/last-commit/m-chrome/py-suricataparser)](https://github.com/m-chrome/py-suricataparser) - Pure python parser for Snort/Suricata rules.
- [py-idstools ![GitHub Repo Stars](https://img.shields.io/github/stars/jasonish/py-idstools) ![GitHub last commit](https://img.shields.io/github/last-commit/jasonish/py-idstools)](https://github.com/jasonish/py-idstools) - Snort and Suricata Rule and Event Utilities in Python (Including a Rule Update Tool).


## Dashboards and Templates

- [KTS ![GitHub Repo Stars](https://img.shields.io/github/stars/StamusNetworks/KTS) ![GitHub last commit](https://img.shields.io/github/last-commit/StamusNetworks/KTS)](https://github.com/StamusNetworks/KTS) - Kibana 4 Templates for Suricata IDPS Threat Hunting.
- [KTS5 ![GitHub Repo Stars](https://img.shields.io/github/stars/StamusNetworks/KTS5) ![GitHub last commit](https://img.shields.io/github/last-commit/StamusNetworks/KTS5)](https://github.com/StamusNetworks/KTS5) - Kibana 5 Templates for Suricata IDPS Threat Hunting.
- [KTS6 ![GitHub Repo Stars](https://img.shields.io/github/stars/StamusNetworks/KTS6) ![GitHub last commit](https://img.shields.io/github/last-commit/StamusNetworks/KTS6)](https://github.com/StamusNetworks/KTS6) - Kibana 6 Templates for Suricata IDPS Threat Hunting.
- [KTS7 ![GitHub Repo Stars](https://img.shields.io/github/stars/StamusNetworks/KTS7) ![GitHub last commit](https://img.shields.io/github/last-commit/StamusNetworks/KTS7)](https://github.com/StamusNetworks/KTS7) - Kibana 7 Templates for Suricata IDPS Threat Hunting.


## Development Tools

- [Suricata Language Server ![GitHub Repo Stars](https://img.shields.io/github/stars/StamusNetworks/suricata-language-server) ![GitHub last commit](https://img.shields.io/github/last-commit/StamusNetworks/suricata-language-server)](https://github.com/StamusNetworks/suricata-language-server) - Suricata Language Server is an implementation of the Language Server Protocol for Suricata signatures. It adds syntax check, hints and auto-completion to your preferred editor once it is configured.
- [suricata-ls-vscode ![GitHub Repo Stars](https://img.shields.io/github/stars/StamusNetworks/suricata-ls-vscode) ![GitHub last commit](https://img.shields.io/github/last-commit/StamusNetworks/suricata-ls-vscode)](https://github.com/StamusNetworks/suricata-ls-vscode) - Suricata IntelliSense Extension using the Suricata Language Server.
- [suricata-highlight-vscode ![GitHub Repo Stars](https://img.shields.io/github/stars/dgenzer/suricata-highlight-vscode) ![GitHub last commit](https://img.shields.io/github/last-commit/dgenzer/suricata-highlight-vscode)](https://github.com/dgenzer/suricata-highlight-vscode) - Suricata Rules Support for Visual Studio Code (syntax highlighting, etc).
- [SublimeSuricata ![GitHub Repo Stars](https://img.shields.io/github/stars/ozuriexv/SublimeSuricata) ![GitHub last commit](https://img.shields.io/github/last-commit/ozuriexv/SublimeSuricata)](https://github.com/ozuriexv/SublimeSuricata) - Basic Suricata syntax highlighter for Sublime Text.


## Documentation and Guides

- [SEPTun ![GitHub Repo Stars](https://img.shields.io/github/stars/pevma/SEPTun) ![GitHub last commit](https://img.shields.io/github/last-commit/pevma/SEPTun)](https://github.com/pevma/SEPTun) - Suricata Extreme Performance Tuning guide.
- [SEPTun-Mark-II ![GitHub Repo Stars](https://img.shields.io/github/stars/pevma/SEPTun-Mark-II) ![GitHub last commit](https://img.shields.io/github/last-commit/pevma/SEPTun-Mark-II)](https://github.com/pevma/SEPTun-Mark-II) - Suricata Extreme Performance Tuning guide - Mark II.
- [suricata-4-analysts ![GitHub Repo Stars](https://img.shields.io/github/stars/StamusNetworks/suricata-4-analysts) ![GitHub last commit](https://img.shields.io/github/last-commit/StamusNetworks/suricata-4-analysts)](https://github.com/StamusNetworks/suricata-4-analysts) - The Security Analyst's Guide to Suricata.


## Analysis Tools

- [Suricata Analytics ![GitHub Repo Stars](https://img.shields.io/github/stars/StamusNetworks/suricata-analytics) ![GitHub last commit](https://img.shields.io/github/last-commit/StamusNetworks/suricata-analytics)](https://github.com/StamusNetworks/suricata-analytics) - Various resources that are useful when interacting with Suricata data.
- [Malcolm ![GitHub Repo Stars](https://img.shields.io/github/stars/cisagov/Malcolm) ![GitHub last commit](https://img.shields.io/github/last-commit/cisagov/Malcolm)](https://github.com/cisagov/Malcolm) - A powerful, easily deployable network traffic analysis tool suite for full packet capture artifacts (PCAP files), Zeek logs and Suricata alerts.
- [Evebox ![GitHub Repo Stars](https://img.shields.io/github/stars/jasonish/evebox) ![GitHub last commit](https://img.shields.io/github/last-commit/jasonish/evebox)](https://github.com/jasonish/evebox) - Web Based Event Viewer (GUI) for Suricata EVE Events in Elastic Search.


## Rule Sets

- [nids-rule-library ![GitHub Repo Stars](https://img.shields.io/github/stars/klingerko/nids-rule-library) ![GitHub last commit](https://img.shields.io/github/last-commit/klingerko/nids-rule-library)](https://github.com/klingerko/nids-rule-library#readme) - Collection of various open-source and commercial rulesets.
- [Stamus Lateral Movement Detection Rules](https://www.stamus-networks.com/blog/new-open-ruleset-for-detecting-lateral-movement-with-suricata) - Suricata ruleset to detect lateral movement.
- [QuadrantSec Suricata Rules ![GitHub Repo Stars](https://img.shields.io/github/stars/quadrantsec/suricata-rules) ![GitHub last commit](https://img.shields.io/github/last-commit/quadrantsec/suricata-rules)](https://github.com/quadrantsec/suricata-rules) - QuadrantSec Suricata rules.
- [Cluster25/detection ![GitHub Repo Stars](https://img.shields.io/github/stars/Cluster25/detection) ![GitHub last commit](https://img.shields.io/github/last-commit/Cluster25/detection)](https://github.com/Cluster25/detection) - Cluster25's detection rules.
- Networkforensic.dk (NF) rules sets: 
  - [NF IDS rules](https://networkforensic.dk/SNORT/NF-local.zip)
  - [NF SCADA IDS Rules](https://networkforensic.dk/SNORT/NF-SCADA.zip)
  - [NF Scanners IDS Rules](https://networkforensic.dk/SNORT/NF-Scanners.zip)
- [Quantum Insert detection for Suricata ![GitHub Repo Stars](https://img.shields.io/github/stars/fox-it/quantuminsert) ![GitHub last commit](https://img.shields.io/github/last-commit/fox-it/quantuminsert)](https://github.com/fox-it/quantuminsert/blob/master/detection/suricata/README.md) - Suricata rules accompanying Fox-IT's QUANTUM 2015 blog/BroCon talk.
- [Hunting rules ![GitHub Repo Stars](https://img.shields.io/github/stars/travisbgreen/hunting-rules) ![GitHub last commit](https://img.shields.io/github/last-commit/travisbgreen/hunting-rules)](https://github.com/travisbgreen/hunting-rules) - Suricata IDS alert rules for network anomaly detection from Travis Green.
- [3CORESec NIDS - Lateral Movement](https://dtection.io/ruleset/3cs_lateral) - Suricata ruleset focusing on lateral movement techniques (paid).
- [3CORESec NIDS - Sinkholes](https://dtection.io/ruleset/3cs_sinkholes) - Suricata ruleset focused on a curated list of public malware sinkholes (free).
- [PAW Patrules](https://pawpatrules.fr) - Another free (CC BY-NC-SA) collection of rules for the Suricata engine.


## Rule/Security Content Management and Handling

- [sidallocation.org](https://sidallocation.org/) - Sid Allocation working group, list of SID ranges.
- [Scirius ![GitHub Repo Stars](https://img.shields.io/github/stars/StamusNetworks/scirius) ![GitHub last commit](https://img.shields.io/github/last-commit/StamusNetworks/scirius)](https://github.com/StamusNetworks/scirius) - Web application for Suricata ruleset management and threat hunting.
- [IOCmite ![GitHub Repo Stars](https://img.shields.io/github/stars/sebdraven/IOCmite) ![GitHub last commit](https://img.shields.io/github/last-commit/sebdraven/IOCmite)](https://github.com/sebdraven/IOCmite) - Tool to create dataset for suricata with indicators of MISP instances and add sightings in MISP if an indicator of dataset generates an alert.
- [luaevilbit ![GitHub Repo Stars](https://img.shields.io/github/stars/regit/luaevilbit) ![GitHub last commit](https://img.shields.io/github/last-commit/regit/luaevilbit)](https://github.com/regit/luaevilbit) - An Evil bit implementation in luajit for Suricata.
- [Lawmaker](https://www.3coresec.com/lawmaker) - Suricata IDS rule management system.
- [surify-cli ![GitHub Repo Stars](https://img.shields.io/github/stars/dgenzer/surify-cli) ![GitHub last commit](https://img.shields.io/github/last-commit/dgenzer/surify-cli)](https://github.com/dgenzer/surify-cli) - Generate suricata-rules from collection of IOCs (JSON, CSV or flags) based on your suricata template.
- [suricata-prettifier ![GitHub Repo Stars](https://img.shields.io/github/stars/theY4Kman/suricata-prettifier) ![GitHub last commit](https://img.shields.io/github/last-commit/theY4Kman/suricata-prettifier)](https://github.com/theY4Kman/suricata-prettifier) - Command-line tool to format and syntax highlight Suricata rules.
- [OTX-Suricata ![GitHub Repo Stars](https://img.shields.io/github/stars/AlienVault-OTX/OTX-Suricata) ![GitHub last commit](https://img.shields.io/github/last-commit/AlienVault-OTX/OTX-Suricata)](https://github.com/AlienVault-OTX/OTX-Suricata) - Create rules and configuration for Suricata to alert on indicators from an OTX account.
- [Aristotle ![GitHub Repo Stars](https://img.shields.io/github/stars/secureworks/aristotle) ![GitHub last commit](https://img.shields.io/github/last-commit/secureworks/aristotle)](https://github.com/secureworks/aristotle) - Simple Python program that allows for the filtering and modifying of Suricata and Snort rulesets based on interpreted key-value pairs present in the metadata keyword within each rule.


## Systems Using Suricata

- [SELKS ![GitHub Repo Stars](https://img.shields.io/github/stars/StamusNetworks/SELKS) ![GitHub last commit](https://img.shields.io/github/last-commit/StamusNetworks/SELKS)](https://github.com/StamusNetworks/SELKS) - A Suricata-based intrusion detection system/intrusion prevention system/network security monitoring distribution.
- [Amsterdam ![GitHub Repo Stars](https://img.shields.io/github/stars/StamusNetworks/Amsterdam) ![GitHub last commit](https://img.shields.io/github/last-commit/StamusNetworks/Amsterdam)](https://github.com/StamusNetworks/Amsterdam) - Docker based Suricata, Elasticsearch, Logstash, Kibana, Scirius aka SELKS.
- [pfSense](https://www.pfsense.org) - A free network firewall distribution, based on the FreeBSD operating system with a custom kernel and including third party free software packages for additional functionality.
- [OPNsense](https://opnsense.org) - An open source, easy-to-use and easy-to-build FreeBSD based firewall and routing platform.


## Training

- [Experimental Suricata Training Environment ![GitHub Repo Stars](https://img.shields.io/github/stars/jasonish/experimental-suricata-training) ![GitHub last commit](https://img.shields.io/github/last-commit/jasonish/experimental-suricata-training)](https://github.com/jasonish/experimental-suricata-training) - Experimental Suricata Training Environment.
- [CDMCS ![GitHub Repo Stars](https://img.shields.io/github/stars/ccdcoe/CDMCS) ![GitHub last commit](https://img.shields.io/github/last-commit/ccdcoe/CDMCS)](https://github.com/ccdcoe/CDMCS/tree/master) - Cyber Defence Monitoring Course: Rule-based Threat Detection.


## Simulation and Testing

- [Leonidas ![GitHub Repo Stars](https://img.shields.io/github/stars/WithSecureLabs/leonidas) ![GitHub last commit](https://img.shields.io/github/last-commit/WithSecureLabs/leonidas)](https://github.com/WithSecureLabs/leonidas) - Automated Attack Simulation in the Cloud, complete with detection use cases.
- [speeve ![GitHub Repo Stars](https://img.shields.io/github/stars/satta/speeve) ![GitHub last commit](https://img.shields.io/github/last-commit/satta/speeve)](https://github.com/satta/speeve) - Fast, probabilistic EVE-JSON generator for testing and benchmarking of EVE-consuming applications.
- [Dalton ![GitHub Repo Stars](https://img.shields.io/github/stars/secureworks/dalton) ![GitHub last commit](https://img.shields.io/github/last-commit/secureworks/dalton)](https://github.com/secureworks/dalton) - Suricata and Snort IDS rule and pcap testing system.


## Data Sets

- [suricata-sample-data ![GitHub Repo Stars](https://img.shields.io/github/stars/FrankHassanabad/suricata-sample-data) ![GitHub last commit](https://img.shields.io/github/last-commit/FrankHassanabad/suricata-sample-data)](https://github.com/FrankHassanabad/suricata-sample-data) - Repository of creating different example suricata data sets.


## Misc

- [Suriwire ![GitHub Repo Stars](https://img.shields.io/github/stars/regit/suriwire) ![GitHub last commit](https://img.shields.io/github/last-commit/regit/suriwire)](https://github.com/regit/suriwire) - Wireshark plugin to display Suricata analysis info.
- [bash_cata ![GitHub Repo Stars](https://img.shields.io/github/stars/isMTv/bash_cata) ![GitHub last commit](https://img.shields.io/github/last-commit/isMTv/bash_cata)](https://github.com/isMTv/bash_cata) - A simple script that processes the generated Suricata eve-log in real time and, based on alerts, adds an ip-address to the MikroTik Address Lists for a specified time for subsequent blocking.
- [suriGUI ![GitHub Repo Stars](https://img.shields.io/github/stars/control-owl/suriGUI) ![GitHub last commit](https://img.shields.io/github/last-commit/control-owl/suriGUI)](https://github.com/control-owl/suriGUI) - GUI for Suricata + Qubes OS.
