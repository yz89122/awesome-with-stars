# Awesome Password Cracking	 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

In cryptanalysis and computer security, password cracking is the process of recovering passwords from data that has been stored in or transmitted by a computer system in scrambled form. A common approach ([brute-force attack](https://en.wikipedia.org/wiki/Brute-force_attack)) is to repeatedly try guesses for the password and to check them against an available cryptographic hash of the password.

This is a curated list of awesome tools, research, papers and other projects related to password cracking and password security by [@n0kovo@infosec.exchange](https://infosec.exchange/@n0kovo/?l).


Read [CONTRIBUTING.md ![GitHub Repo Stars](https://img.shields.io/github/stars/narkopolo/awesome-password-cracking) ![GitHub last commit](https://img.shields.io/github/last-commit/narkopolo/awesome-password-cracking)](https://github.com/narkopolo/awesome-password-cracking/blob/main/CONTRIBUTING.md) before contributing! In short:

- List is alphabetically sorted
- If in doubt, use [awesome-lint ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/awesome-lint) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome-lint)](https://github.com/sindresorhus/awesome-lint)
- If you think an item shouldn't be here [open an issue ![GitHub Repo Stars](https://img.shields.io/github/stars/narkopolo/awesome-password-cracking) ![GitHub last commit](https://img.shields.io/github/last-commit/narkopolo/awesome-password-cracking)](https://github.com/narkopolo/awesome-password-cracking/issues/new)



## Contents

- [Books](#books)
- [Cloud](#cloud)
- [Conversion](#conversion)
- [Hashcat](#hashcat)
  - [Automation](#automation)
  - [Distributed cracking](#distributed-cracking)
  - [Rules](#rules)
  - [Rule tools](#rule-tools)
  - [Web interfaces](#web-interfaces)
- [John the Ripper](#john-the-ripper)
- [Misc](#misc)
  - [Notable People](#notable-people)
- [Websites](#websites)
  - [Communities](#communities)
  - [Lookup services](#lookup-services)
- [Wordlist tools](#wordlist-tools)
  - [Analysis](#analysis)
  - [Generation/Manipulation](#generationmanipulation)
- [Wordlists](#wordlists)
  - [Laguage specific](#laguage-specific)
  - [Other](#other)
- [Specific file formats](#specific-file-formats)
  - [PDF](#pdf)
  - [PEM](#pem)
  - [JKS](#jks)
  - [ZIP](#zip)
- [Artificial Intelligence](#artificial-intelligence)
- [Research](#research)
  - [Articles and Blog Posts](#articles-and-blog-posts)
  - [Papers](#papers)
  - [Talks](#talks)



## Books
- [Hash Crack: Password Cracking Manual (v3)](https://www.amazon.com/-/en/Joshua-Picolet/dp/1793458618) - Password Cracking Manual v3 is an expanded reference guide for password recovery (cracking) methods, tools, and analysis techniques.



## Cloud
- [Cloud_crack ![GitHub Repo Stars](https://img.shields.io/github/stars/lordsaibat/Cloud_crack) ![GitHub last commit](https://img.shields.io/github/last-commit/lordsaibat/Cloud_crack)](https://github.com/lordsaibat/Cloud_crack) - Crack passwords using Terraform and AWS.
- [Cloudcat ![GitHub Repo Stars](https://img.shields.io/github/stars/stormfleet/cloudcat) ![GitHub last commit](https://img.shields.io/github/last-commit/stormfleet/cloudcat)](https://github.com/stormfleet/cloudcat) - A script to automate the creation of cloud infrastructure for hash cracking.
- [Cloudstomp ![GitHub Repo Stars](https://img.shields.io/github/stars/Fmstrat/cloudstomp) ![GitHub last commit](https://img.shields.io/github/last-commit/Fmstrat/cloudstomp)](https://github.com/Fmstrat/cloudstomp) - Automated deployment of instances on EC2 via plugin for high CPU/GPU applications at the lowest price.
- [Cloudtopolis ![GitHub Repo Stars](https://img.shields.io/github/stars/JoelGMSec/Cloudtopolis) ![GitHub last commit](https://img.shields.io/github/last-commit/JoelGMSec/Cloudtopolis)](https://github.com/JoelGMSec/Cloudtopolis) - A tool that facilitates the installation and provisioning of Hashtopolis on the Google Cloud Shell platform, quickly and completely unattended (and also, free!).
- [NPK ![GitHub Repo Stars](https://img.shields.io/github/stars/c6fc/npk) ![GitHub last commit](https://img.shields.io/github/last-commit/c6fc/npk)](https://github.com/c6fc/npk) - NPK is a distributed hash-cracking platform built entirely of serverless components in AWS including Cognito, DynamoDB, and S3.
- [Penglab ![GitHub Repo Stars](https://img.shields.io/github/stars/mxrch/penglab) ![GitHub last commit](https://img.shields.io/github/last-commit/mxrch/penglab)](https://github.com/mxrch/penglab) - Abuse of Google Colab for cracking hashes.
- [Rook ![GitHub Repo Stars](https://img.shields.io/github/stars/JumpsecLabs/Rook) ![GitHub last commit](https://img.shields.io/github/last-commit/JumpsecLabs/Rook)](https://github.com/JumpsecLabs/Rook) - Automates the creation of AWS p3 instances for use in GPU-based password cracking.


## Conversion
- [7z2hashcat ![GitHub Repo Stars](https://img.shields.io/github/stars/philsmd/7z2hashcat) ![GitHub last commit](https://img.shields.io/github/last-commit/philsmd/7z2hashcat)](https://github.com/philsmd/7z2hashcat) - Extract information from password-protected .7z archives (and .sfx files) such that you can crack these "hashes" with hashcat.
- [MacinHash ![GitHub Repo Stars](https://img.shields.io/github/stars/jmagers/MacinHash) ![GitHub last commit](https://img.shields.io/github/last-commit/jmagers/MacinHash)](https://github.com/jmagers/MacinHash) - Convert macOS plist password file to hash file for password crackers.
- [NetNTLM-Hashcat ![GitHub Repo Stars](https://img.shields.io/github/stars/ins1gn1a/NetNTLM-Hashcat) ![GitHub last commit](https://img.shields.io/github/last-commit/ins1gn1a/NetNTLM-Hashcat)](https://github.com/ins1gn1a/NetNTLM-Hashcat) - Converts John The Ripper/Cain format hashes (singular, or in bulk) to HashCat compatible hash format.
- [Rubeus-to-Hashcat ![GitHub Repo Stars](https://img.shields.io/github/stars/PwnDexter/Rubeus-to-Hashcat) ![GitHub last commit](https://img.shields.io/github/last-commit/PwnDexter/Rubeus-to-Hashcat)](https://github.com/PwnDexter/Rubeus-to-Hashcat) - Converts / formats Rubeus kerberoasting output into hashcat readable format.
- [WINHELLO2hashcat ![GitHub Repo Stars](https://img.shields.io/github/stars/Banaanhangwagen/WINHELLO2hashcat) ![GitHub last commit](https://img.shields.io/github/last-commit/Banaanhangwagen/WINHELLO2hashcat)](https://github.com/Banaanhangwagen/WINHELLO2hashcat) - With this tool one can extract the "hash" from a WINDOWS HELLO PIN. This hash can be cracked with Hashcat.
- [bitwarden2hashcat ![GitHub Repo Stars](https://img.shields.io/github/stars/0x6470/bitwarden2hashcat) ![GitHub last commit](https://img.shields.io/github/last-commit/0x6470/bitwarden2hashcat)](https://github.com/0x6470/bitwarden2hashcat) - A tool that converts Bitwarden's data into a hashcat-suitable hash.
- [hc\_to\_7z ![GitHub Repo Stars](https://img.shields.io/github/stars/philsmd/hc_to_7z) ![GitHub last commit](https://img.shields.io/github/last-commit/philsmd/hc_to_7z)](https://github.com/philsmd/hc_to_7z) - Convert 7-Zip hashcat hashes back to 7z archives.
- [hcxtools ![GitHub Repo Stars](https://img.shields.io/github/stars/ZerBea/hcxtools) ![GitHub last commit](https://img.shields.io/github/last-commit/ZerBea/hcxtools)](https://github.com/ZerBea/hcxtools) - Portable solution for conversion of cap/pcap/pcapng (gz compressed) WiFi dump files to hashcat formats.
- [itunes_backup2hashcat ![GitHub Repo Stars](https://img.shields.io/github/stars/philsmd/itunes_backup2hashcat) ![GitHub last commit](https://img.shields.io/github/last-commit/philsmd/itunes_backup2hashcat)](https://github.com/philsmd/itunes_backup2hashcat) - Extract the information needed from the Manifest.plist files to convert it to hashes compatible with hashcat.	
- [mongodb2hashcat ![GitHub Repo Stars](https://img.shields.io/github/stars/philsmd/mongodb2hashcat) ![GitHub last commit](https://img.shields.io/github/last-commit/philsmd/mongodb2hashcat)](https://github.com/philsmd/mongodb2hashcat) - Extract hashes from the MongoDB database server to a hash format that hashcat accepts: -m 24100 (SCRAM-SHA-1) or -m 24200 (SCRAM-SHA-256).



## Hashcat
*[Hashcat ![GitHub Repo Stars](https://img.shields.io/github/stars/hashcat/hashcat) ![GitHub last commit](https://img.shields.io/github/last-commit/hashcat/hashcat)](https://github.com/hashcat/hashcat) is the "World's fastest and most advanced password recovery utility." The following are projects directly related to Hashcat in one way or another.*

- [Autocrack ![GitHub Repo Stars](https://img.shields.io/github/stars/pry0cc/autocrack) ![GitHub last commit](https://img.shields.io/github/last-commit/pry0cc/autocrack)](https://github.com/pry0cc/autocrack) - A set of client and server tools for automatically, and lightly automatically cracking hashes.
- [docker-hashcat ![GitHub Repo Stars](https://img.shields.io/github/stars/dizcza/docker-hashcat) ![GitHub last commit](https://img.shields.io/github/last-commit/dizcza/docker-hashcat)](https://github.com/dizcza/docker-hashcat) - Latest hashcat docker for Ubuntu 18.04 CUDA, OpenCL, and POCL.
- [hashcat.launcher ![GitHub Repo Stars](https://img.shields.io/github/stars/s77rt/hashcat.launcher) ![GitHub last commit](https://img.shields.io/github/last-commit/s77rt/hashcat.launcher)](https://github.com/s77rt/hashcat.launcher) - Hashcat.launcher is a cross-platform GUI app that run and control hashcat.
- [Hashcat-Stuffs ![GitHub Repo Stars](https://img.shields.io/github/stars/xfox64x/Hashcat-Stuffs) ![GitHub last commit](https://img.shields.io/github/last-commit/xfox64x/Hashcat-Stuffs)](https://github.com/xfox64x/Hashcat-Stuffs) - Collection of hashcat lists and things.
- [hashcat-utils ![GitHub Repo Stars](https://img.shields.io/github/stars/hashcat/hashcat-utils) ![GitHub last commit](https://img.shields.io/github/last-commit/hashcat/hashcat-utils)](https://github.com/hashcat/hashcat-utils/) - Small utilities that are useful in advanced password cracking.
- [Hashfilter ![GitHub Repo Stars](https://img.shields.io/github/stars/bharshbarger/Hashfilter) ![GitHub last commit](https://img.shields.io/github/last-commit/bharshbarger/Hashfilter)](https://github.com/bharshbarger/Hashfilter) - Read a hashcat potfile and parse different types into a sqlite database.
- [known_hosts-hashcat ![GitHub Repo Stars](https://img.shields.io/github/stars/chris408/known_hosts-hashcat) ![GitHub last commit](https://img.shields.io/github/last-commit/chris408/known_hosts-hashcat)](https://github.com/chris408/known_hosts-hashcat) - A guide and tool for cracking ssh known_hosts files with hashcat.
- [pyhashcat ![GitHub Repo Stars](https://img.shields.io/github/stars/f0cker/pyhashcat) ![GitHub last commit](https://img.shields.io/github/last-commit/f0cker/pyhashcat)](https://github.com/f0cker/pyhashcat) - Python C API binding to libhashcat.


### Automation
- [autocrack ![GitHub Repo Stars](https://img.shields.io/github/stars/timbo05sec/autocrack) ![GitHub last commit](https://img.shields.io/github/last-commit/timbo05sec/autocrack)](https://github.com/timbo05sec/autocrack) - Hashcat wrapper to help automate the cracking process.
- [hat ![GitHub Repo Stars](https://img.shields.io/github/stars/sp00ks-git/hat) ![GitHub last commit](https://img.shields.io/github/last-commit/sp00ks-git/hat)](https://github.com/sp00ks-git/hat) - An Automated Hashcat Tool for common wordlists and rules to speed up the process of cracking hashes during engagements.
- [hate_crack ![GitHub Repo Stars](https://img.shields.io/github/stars/trustedsec/hate_crack) ![GitHub last commit](https://img.shields.io/github/last-commit/trustedsec/hate_crack)](https://github.com/trustedsec/hate_crack) - A tool for automating cracking methodologies through Hashcat from the TrustedSec team.
- [Naive hashcat ![GitHub Repo Stars](https://img.shields.io/github/stars/brannondorsey/naive-hashcat) ![GitHub last commit](https://img.shields.io/github/last-commit/brannondorsey/naive-hashcat)](https://github.com/brannondorsey/naive-hashcat) - Naive hashcat is a plug-and-play script that is pre-configured with naive, emperically-tested, "good enough" parameters/attack types.

### Distributed cracking
- [CrackLord ![GitHub Repo Stars](https://img.shields.io/github/stars/jmmcatee/cracklord) ![GitHub last commit](https://img.shields.io/github/last-commit/jmmcatee/cracklord)](https://github.com/jmmcatee/cracklord) - Queue and resource system for cracking passwords.
- [fitcrack ![GitHub Repo Stars](https://img.shields.io/github/stars/nesfit/fitcrack) ![GitHub last commit](https://img.shields.io/github/last-commit/nesfit/fitcrack)](https://github.com/nesfit/fitcrack) - A hashcat-based distributed password cracking system.
- [Hashtopolis ![GitHub Repo Stars](https://img.shields.io/github/stars/hashtopolis/server) ![GitHub last commit](https://img.shields.io/github/last-commit/hashtopolis/server)](https://github.com/hashtopolis/server) - A multi-platform client-server tool for distributing hashcat tasks to multiple computers.
- [HashtopoloCLI ![GitHub Repo Stars](https://img.shields.io/github/stars/jakewnuk/HashtopoCLI) ![GitHub last commit](https://img.shields.io/github/last-commit/jakewnuk/HashtopoCLI)](https://github.com/jakewnuk/HashtopoCLI) - CLI tool for Hashtopolis API incorporating some of the API functionality into a dynamic Python wrapper.
- [Kraken ![GitHub Repo Stars](https://img.shields.io/github/stars/arcaneiceman/kraken) ![GitHub last commit](https://img.shields.io/github/last-commit/arcaneiceman/kraken)](https://github.com/arcaneiceman/kraken) - A multi-platform distributed brute-force password cracking system.

### Rules
- [clem9669 rules ![GitHub Repo Stars](https://img.shields.io/github/stars/clem9669/hashcat-rule) ![GitHub last commit](https://img.shields.io/github/last-commit/clem9669/hashcat-rule)](https://github.com/clem9669/hashcat-rule) - Rule for hashcat or john.
- [hashcat rules collection ![GitHub Repo Stars](https://img.shields.io/github/stars/narkopolo/hashcat-rules-collection) ![GitHub last commit](https://img.shields.io/github/last-commit/narkopolo/hashcat-rules-collection)](https://github.com/narkopolo/hashcat-rules-collection) - Probably the largest collection of hashcat rules out there.
- [Hob0Rules ![GitHub Repo Stars](https://img.shields.io/github/stars/praetorian-inc/Hob0Rules) ![GitHub last commit](https://img.shields.io/github/last-commit/praetorian-inc/Hob0Rules)](https://github.com/praetorian-inc/Hob0Rules) - Password cracking rules for Hashcat based on statistics and industry patterns.
- [Kaonashi ![GitHub Repo Stars](https://img.shields.io/github/stars/kaonashi-passwords/Kaonashi) ![GitHub last commit](https://img.shields.io/github/last-commit/kaonashi-passwords/Kaonashi)](https://github.com/kaonashi-passwords/Kaonashi) - Wordlist, rules and masks from Kaonashi project (RootedCON 2019).
- [nsa-rules ![GitHub Repo Stars](https://img.shields.io/github/stars/NSAKEY/nsa-rules) ![GitHub last commit](https://img.shields.io/github/last-commit/NSAKEY/nsa-rules)](https://github.com/NSAKEY/nsa-rules) - Password cracking rules and masks for hashcat generated from cracked passwords.
- [nyxgeek-rules ![GitHub Repo Stars](https://img.shields.io/github/stars/nyxgeek/nyxgeek-rules) ![GitHub last commit](https://img.shields.io/github/last-commit/nyxgeek/nyxgeek-rules)](https://github.com/nyxgeek/nyxgeek-rules) - Custom password cracking rules for Hashcat and John the Ripper.
- [OneRuleToRuleThemAll ![GitHub Repo Stars](https://img.shields.io/github/stars/NotSoSecure/password_cracking_rules) ![GitHub last commit](https://img.shields.io/github/last-commit/NotSoSecure/password_cracking_rules)](https://github.com/NotSoSecure/password_cracking_rules) - "One rule to crack all passwords. or atleast we hope so."
- [OneRuleToRuleThemStill ![GitHub Repo Stars](https://img.shields.io/github/stars/stealthsploit/OneRuleToRuleThemStill) ![GitHub last commit](https://img.shields.io/github/last-commit/stealthsploit/OneRuleToRuleThemStill)](https://github.com/stealthsploit/OneRuleToRuleThemStill) - "A revamped and updated version of my original OneRuleToRuleThemAll hashcat rule."
- [pantagrule ![GitHub Repo Stars](https://img.shields.io/github/stars/rarecoil/pantagrule) ![GitHub last commit](https://img.shields.io/github/last-commit/rarecoil/pantagrule)](https://github.com/rarecoil/pantagrule) - Large hashcat rulesets generated from real-world compromised passwords.
- [squid rules ![GitHub Repo Stars](https://img.shields.io/github/stars/jakewnuk/HIBP-578M) ![GitHub last commit](https://img.shields.io/github/last-commit/jakewnuk/HIBP-578M)](https://github.com/jakewnuk/HIBP-578M) - Hashcat rules ordered by effectiveness from testing HIBPv7.

### Rule tools
- [duprule ![GitHub Repo Stars](https://img.shields.io/github/stars/mhasbini/duprule) ![GitHub last commit](https://img.shields.io/github/last-commit/mhasbini/duprule)](https://github.com/mhasbini/duprule) - Detect & filter duplicate hashcat rules.
- [ruleprocessorY ![GitHub Repo Stars](https://img.shields.io/github/stars/TheWorkingDeveloper/ruleprocessorY) ![GitHub last commit](https://img.shields.io/github/last-commit/TheWorkingDeveloper/ruleprocessorY)](https://github.com/TheWorkingDeveloper/ruleprocessorY) - A next-gen Rule processor with complex multibyte character support built to support Hashcat.


### Web interfaces
- [crackerjack ![GitHub Repo Stars](https://img.shields.io/github/stars/ctxis/crackerjack) ![GitHub last commit](https://img.shields.io/github/last-commit/ctxis/crackerjack)](https://github.com/ctxis/crackerjack) - CrackerJack is a Web GUI for Hashcat developed in Python.
- [CrackQ ![GitHub Repo Stars](https://img.shields.io/github/stars/f0cker/crackq) ![GitHub last commit](https://img.shields.io/github/last-commit/f0cker/crackq)](https://github.com/f0cker/crackq) - A Python Hashcat cracking queue system.
- [hashpass ![GitHub Repo Stars](https://img.shields.io/github/stars/dj-zombie/hashpass) ![GitHub last commit](https://img.shields.io/github/last-commit/dj-zombie/hashpass)](https://github.com/dj-zombie/hashpass) - Hash cracking WebApp & Server for hashcat.
- [Hashview ![GitHub Repo Stars](https://img.shields.io/github/stars/hashview/hashview) ![GitHub last commit](https://img.shields.io/github/last-commit/hashview/hashview)](https://github.com/hashview/hashview) - A web front-end for password cracking and analytics.
- [Wavecrack ![GitHub Repo Stars](https://img.shields.io/github/stars/wavestone-cdt/wavecrack) ![GitHub last commit](https://img.shields.io/github/last-commit/wavestone-cdt/wavecrack)](https://github.com/wavestone-cdt/wavecrack) - Wavestone's web interface for password cracking with hashcat.
- [WebHashCat ![GitHub Repo Stars](https://img.shields.io/github/stars/hegusung/WebHashcat) ![GitHub last commit](https://img.shields.io/github/last-commit/hegusung/WebHashcat)](https://github.com/hegusung/WebHashcat) - WebHashcat is a very simple but efficient web interface for hashcat password cracking tool.



## John the Ripper
*[John the Ripper ![GitHub Repo Stars](https://img.shields.io/github/stars/openwall/john) ![GitHub last commit](https://img.shields.io/github/last-commit/openwall/john)](https://github.com/openwall/john) is "an Open Source password security auditing and password recovery tool available for many operating systems." The following are projects directly related to John the Ripper in one way or another.*

- [BitCracker ![GitHub Repo Stars](https://img.shields.io/github/stars/e-ago/bitcracker) ![GitHub last commit](https://img.shields.io/github/last-commit/e-ago/bitcracker)](https://github.com/e-ago/bitcracker) - BitCracker is the first open source password cracking tool for memory units encrypted with BitLocker.
- [johnny ![GitHub Repo Stars](https://img.shields.io/github/stars/openwall/johnny) ![GitHub last commit](https://img.shields.io/github/last-commit/openwall/johnny)](https://github.com/openwall/johnny) - GUI frontend to John the Ripper.



## Misc
- [920mPasswordMasks ![GitHub Repo Stars](https://img.shields.io/github/stars/jakewnuk/920mPasswordMasks) ![GitHub last commit](https://img.shields.io/github/last-commit/jakewnuk/920mPasswordMasks)](https://github.com/jakewnuk/920mPasswordMasks) - Hashcat password masks from 920 million breach passwords filtered into groups.
- [hashgen ![GitHub Repo Stars](https://img.shields.io/github/stars/cyclone-github/hashgen) ![GitHub last commit](https://img.shields.io/github/last-commit/cyclone-github/hashgen)](https://github.com/cyclone-github/hashgen) - Hashgen is a simple yet very fast CLI hash generator written in Go and cross compiled for Linux, Windows & Mac.
- [hashID ![GitHub Repo Stars](https://img.shields.io/github/stars/psypanda/hashID) ![GitHub last commit](https://img.shields.io/github/last-commit/psypanda/hashID)](https://github.com/psypanda/hashID) - Software to identify the different types of hashes.
- [Name That Hash ![GitHub Repo Stars](https://img.shields.io/github/stars/HashPals/Name-That-Hash) ![GitHub last commit](https://img.shields.io/github/last-commit/HashPals/Name-That-Hash)](https://github.com/HashPals/Name-That-Hash) - Don't know what type of hash it is? Name That Hash will name that hash type! Identify MD5, SHA256 and 300+ other hashes. Comes with a neat web app.


### Notable People
- Alotdv - [Twitter](https://twitter.com/AlongExc).
- Clem9669 - [GitHub](https://github.com/clem9669).
- Coolbry95 - [GitHub](https://github.com/coolbry95) / [Twitter](https://twitter.com/coolbry95).
- Dakykilla - [GitHub](https://github.com/dakykilla) / [Twitter](https://twitter.com/dakykilla).
- Dropdeadfu - [GitHub](https://github.com/dropdeadfu) / [Twitter](https://twitter.com/dropdeadfu).
- Epixoip - [GitHub](https://github.com/epixoip) / [Mastodon](https://infosec.exchange/@epixoip) / [Twitter](https://twitter.com/jmgosney).
- Evilmog - [GitHub](https://github.com/evilmog/) / [Mastodon](https://infosec.exchange/@evilmog) / [Twitter](https://twitter.com/Evil_Mog).
- Hydraze - [GitHub](https://github.com/Hydraze) / [Mastodon](https://infosec.exchange/@hydraze) / [Twitter](https://twitter.com/Hydraze).
- JakeWnuk - [GitHub](https://github.com/jakewnuk) / [Mastodon](https://infosec.exchange/@JakeWnuk).
- Kontrast23 - [GitHub](https://github.com/kontrast23) / [Twitter](https://twitter.com/marco_preuss).
- M3g9tr0n - [GitHub](https://github.com/m3g9tr0n) / [Twitter](https://twitter.com/m3g9tr0n).
- Matrix - [GitHub](https://github.com/matrix) / [Twitter](https://twitter.com/gm4tr1x).
- Minga - [Twitter](https://twitter.com/mingadotcom).
- N0kovo - [GitHub](https://github.com/n0kovo) / [Mastodon](https://infosec.exchange/@n0kovo) / [Twitter](https://twitter.com/n0kovos).
- NSAKEY - [GitHub](https://github.com/NSAKEY) / [Twitter](https://twitter.com/_NSAKEY) / [Website](https://abigisp.com/).
- NullMode - [GitHub](https://github.com/NullMode) / [Mastodon](https://infosec.exchange/@nullmode_@twtr.plus) / [Twitter](https://twitter.com/nullmode_).
- Paule965 - [Twitter](https://twitter.com/paule965).
- Philsmd - [GitHub](https://github.com/philsmd) / [Twitter](https://twitter.com/philsmd).
- Roycewilliams - [GitHub](https://github.com/roycewilliams) / [Mastodon](https://infosec.exchange/@tychotithonus) / [Twitter](https://twitter.com/TychoTithonus).
- RuraPenthe - [GitHub](https://github.com/bitcrackcyber) / [Mastodon](https://infosec.exchange/@rurapenthe) / [Twitter](https://twitter.com/RuraPenthe0).
- S3in!c - [GitHub](https://github.com/s3inlc) / [Mastodon](https://infosec.exchange/@s3inlc) / [Twitter](https://twitter.com/s3inlc).
- Tehnlulz - [GitHub](https://github.com/tehnlulz) / [Twitter](https://twitter.com/tehnlulz).
- The_Mechanic - [GitHub](https://github.com/th3mechanic) / [Twitter](https://twitter.com/th3_m3chan1c).
- ToXiC - [Twitter](https://twitter.com/yiannistox).
- Undeath - [GitHub](https://github.com/undeath).
- Unix-ninja - [GitHub](https://github.com/unix-ninja) / [Mastodon](https://infosec.exchange/@unix_ninja@twitterbridge.jannis.rocks) / [Twitter](https://twitter.com/unix_ninja).
- Xan - [GitHub](https://github.com/Xanadrel) / [Mastodon](https://infosec.exchange/@Xanadrel) / [Twitter](https://twitter.com/Xanadrel).



## Websites

### Communities
- [hashcat Forum](https://hashcat.net/forum/) - Forum by the developers of hashcat.
- [Hashmob](https://hashmob.net/) - A growing password recovery community aimed towards being a center point of collaboration for cryptography enthusiasts. Huge wordlist collection and a lookup service too.
- [Hashkiller Forum](https://forum.hashkiller.io/) - A password cracking forum with over 20,000 registered users.

### Lookup services
- [CMD5](https://www.cmd5.org/) - Provides online MD5 / sha1/ mysql / sha256 encryption and decryption services.
- [CrackStation](https://crackstation.net/) - Free hash lookup service supplying wordlists as well.
- [gohashmob ![GitHub Repo Stars](https://img.shields.io/github/stars/n0kovo/gohashmob) ![GitHub last commit](https://img.shields.io/github/last-commit/n0kovo/gohashmob)](https://github.com/n0kovo/gohashmob) - Go CLI app to quickly lookup hashes using the HashMob API.
- [Hashes.com](https://hashes.com/) - A hash lookup service with paid features.
- [Hashkiller](https://hashkiller.io/) - A hash lookup service with a forum.
- [Online Hash Crack](https://www.onlinehashcrack.com/) - Cloud password recovery service.



## Wordlist tools
*Tools for analyzing, generating and manipulating wordlists.*

### Analysis
- [PACK ![GitHub Repo Stars](https://img.shields.io/github/stars/iphelix/pack) ![GitHub last commit](https://img.shields.io/github/last-commit/iphelix/pack)](https://github.com/iphelix/pack) - A collection of utilities developed to aid in analysis of password lists in order to enhance password cracking through pattern detection of masks, rules, character-sets and other password characteristics.
- [password-smelter ![GitHub Repo Stars](https://img.shields.io/github/stars/TheTechromancer/password-smelter) ![GitHub last commit](https://img.shields.io/github/last-commit/TheTechromancer/password-smelter)](https://github.com/TheTechromancer/password-smelter) - Ingests passwords from hashcat, etc. and outputs to HTML, Markdown, XLSX, PNG, JSON. Dark and light themes supported. Compliments password-stretcher.
- [password-stretcher ![GitHub Repo Stars](https://img.shields.io/github/stars/thetechromancer/password-stretcher) ![GitHub last commit](https://img.shields.io/github/last-commit/thetechromancer/password-stretcher)](https://github.com/thetechromancer/password-stretcher) - Generate "disgusting quantities" of passwords from websites, files, or stdin. Compliments password-smelter.
- [pcfg_cracker ![GitHub Repo Stars](https://img.shields.io/github/stars/lakiw/pcfg_cracker) ![GitHub last commit](https://img.shields.io/github/last-commit/lakiw/pcfg_cracker)](https://github.com/lakiw/pcfg_cracker) - This project uses machine learning to identify password creation habits of users.
- [Pipal ![GitHub Repo Stars](https://img.shields.io/github/stars/digininja/pipal) ![GitHub last commit](https://img.shields.io/github/last-commit/digininja/pipal)](https://github.com/digininja/pipal) - THE password analyser.
- [PwdStat ![GitHub Repo Stars](https://img.shields.io/github/stars/jakewnuk/pwdstat) ![GitHub last commit](https://img.shields.io/github/last-commit/jakewnuk/pwdstat)](https://github.com/jakewnuk/pwdstat) - Tool for identifying systemic password usage, creating password masks, and analyzing cracked password samples with human readable statistics to help defenders.
- [Graphcat ![GitHub Repo Stars](https://img.shields.io/github/stars/Orange-Cyberdefense/graphcat) ![GitHub last commit](https://img.shields.io/github/last-commit/Orange-Cyberdefense/graphcat)](https://github.com/Orange-Cyberdefense/graphcat) - Generate graphs and charts based on password cracking result.

### Generation/Manipulation

- [accent_permutator ![GitHub Repo Stars](https://img.shields.io/github/stars/cyclone-github/accent_permutator) ![GitHub last commit](https://img.shields.io/github/last-commit/cyclone-github/accent_permutator)](https://github.com/cyclone-github/accent_permutator) - A tool to transform characters from ASCII / UTF-8 to accented characters such as "o" to "ò".
- [anew ![GitHub Repo Stars](https://img.shields.io/github/stars/tomnomnom/anew) ![GitHub last commit](https://img.shields.io/github/last-commit/tomnomnom/anew)](https://github.com/tomnomnom/anew) - Append lines from stdin to a file, but only if they don't already appear in the file. Outputs new lines to stdout too, making it a bit like a tee -a that removes duplicates.
- [bopscrk ![GitHub Repo Stars](https://img.shields.io/github/stars/r3nt0n/bopscrk) ![GitHub last commit](https://img.shields.io/github/last-commit/r3nt0n/bopscrk)](https://github.com/r3nt0n/bopscrk) - Generate smart and powerful wordlists for targeted attacks. Includes song lyrics fetching and different transforms.
- [common-substr ![GitHub Repo Stars](https://img.shields.io/github/stars/sensepost/common-substr) ![GitHub last commit](https://img.shields.io/github/last-commit/sensepost/common-substr)](https://github.com/sensepost/common-substr) - Simple tool to extract the most common substrings from an input text. Built for password cracking.
- [Crunch](https://sourceforge.net/projects/crunch-wordlist/) - Crunch is a wordlist generator where you can specify a standard character set or a character set you specify. Crunch can generate all possible combinations and permutations.
- [CUPP ![GitHub Repo Stars](https://img.shields.io/github/stars/Mebus/cupp) ![GitHub last commit](https://img.shields.io/github/last-commit/Mebus/cupp)](https://github.com/Mebus/cupp) - A tool that lets you generate wordlists by user profiling data such as birthday, nickname, address, name of a pet or relative etc.
- [duplicut ![GitHub Repo Stars](https://img.shields.io/github/stars/nil0x42/duplicut) ![GitHub last commit](https://img.shields.io/github/last-commit/nil0x42/duplicut)](https://github.com/nil0x42/duplicut) - Remove duplicates from MASSIVE wordlist, without sorting it (for dictionary-based password cracking).
- [Gorilla ![GitHub Repo Stars](https://img.shields.io/github/stars/d4rckh/gorilla) ![GitHub last commit](https://img.shields.io/github/last-commit/d4rckh/gorilla)](https://github.com/d4rckh/gorilla) - Tool for generating wordlists or extending an existing one using mutations.
- [Gramify ![GitHub Repo Stars](https://img.shields.io/github/stars/TheWorkingDeveloper/gramify) ![GitHub last commit](https://img.shields.io/github/last-commit/TheWorkingDeveloper/gramify)](https://github.com/TheWorkingDeveloper/gramify) - Create n-grams of wordlists based on words, characters, or charsets to use in offline password attacks and data analysis.
- [Elpscrk ![GitHub Repo Stars](https://img.shields.io/github/stars/D4Vinci/elpscrk) ![GitHub last commit](https://img.shields.io/github/last-commit/D4Vinci/elpscrk)](https://github.com/D4Vinci/elpscrk) - Elpscrk is like cupp, but it's based on permutations and statistics while being memory efficient.
- [Keyboard-Walk-Generators ![GitHub Repo Stars](https://img.shields.io/github/stars/Rich5/Keyboard-Walk-Generators) ![GitHub last commit](https://img.shields.io/github/last-commit/Rich5/Keyboard-Walk-Generators)](https://github.com/Rich5/Keyboard-Walk-Generators) - Generate Keyboard Walk Dictionaries for cracking.
- [kwprocessor ![GitHub Repo Stars](https://img.shields.io/github/stars/hashcat/kwprocessor) ![GitHub last commit](https://img.shields.io/github/last-commit/hashcat/kwprocessor)](https://github.com/hashcat/kwprocessor) - Advanced keyboard-walk generator with configureable basechars, keymap and routes.
- [maskcat ![GitHub Repo Stars](https://img.shields.io/github/stars/jakewnuk/maskcat) ![GitHub last commit](https://img.shields.io/github/last-commit/jakewnuk/maskcat)](https://github.com/jakewnuk/maskcat) - Utility tool for Hashcat Masks and Password Cracking.
- [maskprocessor ![GitHub Repo Stars](https://img.shields.io/github/stars/hashcat/maskprocessor) ![GitHub last commit](https://img.shields.io/github/last-commit/hashcat/maskprocessor)](https://github.com/hashcat/maskprocessor/) - High-performance word generator with a per-position configureable charset.
- [maskuni ![GitHub Repo Stars](https://img.shields.io/github/stars/flbdx/maskuni) ![GitHub last commit](https://img.shields.io/github/last-commit/flbdx/maskuni)](https://github.com/flbdx/maskuni) - A standalone fast word generator in the spirit of hashcat's mask generator with unicode support.
- [Mentalist ![GitHub Repo Stars](https://img.shields.io/github/stars/sc0tfree/mentalist) ![GitHub last commit](https://img.shields.io/github/last-commit/sc0tfree/mentalist)](https://github.com/sc0tfree/mentalist) - Mentalist is a graphical tool for custom wordlist generation. It utilizes common human paradigms for constructing passwords and can output the full wordlist as well as rules compatible with Hashcat and John the Ripper.
- [Phraser ![GitHub Repo Stars](https://img.shields.io/github/stars/Sparell/Phraser) ![GitHub last commit](https://img.shields.io/github/last-commit/Sparell/Phraser)](https://github.com/Sparell/Phraser) - Phraser is a phrase generator using n-grams and Markov chains to generate phrases for passphrase cracking.
- [princeprocessor ![GitHub Repo Stars](https://img.shields.io/github/stars/hashcat/princeprocessor) ![GitHub last commit](https://img.shields.io/github/last-commit/hashcat/princeprocessor)](https://github.com/hashcat/princeprocessor) - Standalone password candidate generator using the PRINCE algorithm.
- [Rephraser ![GitHub Repo Stars](https://img.shields.io/github/stars/travco/rephraser) ![GitHub last commit](https://img.shields.io/github/last-commit/travco/rephraser)](https://github.com/travco/rephraser) - A Python-based reimagining of Phraser using Markov-chains for linguistically-correct password cracking.
- [Rling ![GitHub Repo Stars](https://img.shields.io/github/stars/Cynosureprime/rling) ![GitHub last commit](https://img.shields.io/github/last-commit/Cynosureprime/rling)](https://github.com/Cynosureprime/rling) - RLI Next Gen (Rling), a faster multi-threaded, feature rich alternative to rli found in hashcat utilities.
- [statsprocessor ![GitHub Repo Stars](https://img.shields.io/github/stars/hashcat/statsprocessor) ![GitHub last commit](https://img.shields.io/github/last-commit/hashcat/statsprocessor)](https://github.com/hashcat/statsprocessor/) - Word generator based on per-position markov-chains.
- [StringZilla ![GitHub Repo Stars](https://img.shields.io/github/stars/ashvardanian/StringZilla) ![GitHub last commit](https://img.shields.io/github/last-commit/ashvardanian/StringZilla)](https://github.com/ashvardanian/StringZilla) - Fastest string sort, search, split, and shuffle for long strings and multi-gigabyte files in Python and C.
- [TTPassGen ![GitHub Repo Stars](https://img.shields.io/github/stars/tp7309/TTPassGen) ![GitHub last commit](https://img.shields.io/github/last-commit/tp7309/TTPassGen)](https://github.com/tp7309/TTPassGen) - Flexible and scriptable password dictionary generator which supportss brute-force, combination, complex rule modes etc.
- [token-reverser ![GitHub Repo Stars](https://img.shields.io/github/stars/dariusztytko/token-reverser) ![GitHub last commit](https://img.shields.io/github/last-commit/dariusztytko/token-reverser)](https://github.com/dariusztytko/token-reverser) - Words list generator to crack security tokens.
- [WikiRaider ![GitHub Repo Stars](https://img.shields.io/github/stars/NorthwaveSecurity/wikiraider) ![GitHub last commit](https://img.shields.io/github/last-commit/NorthwaveSecurity/wikiraider)](https://github.com/NorthwaveSecurity/wikiraider) - WikiRaider enables you to generate wordlists based on country specific databases of Wikipedia.




## Wordlists
### Laguage specific
- [Albanian wordlist ![GitHub Repo Stars](https://img.shields.io/github/stars/its0x08/albanian-wordlist) ![GitHub last commit](https://img.shields.io/github/last-commit/its0x08/albanian-wordlist)](https://github.com/its0x08/albanian-wordlist) - A mix of names, last names and some albanian literature.
- [Danish Phone Wordlist Generator ![GitHub Repo Stars](https://img.shields.io/github/stars/narkopolo/danish_phone_wordlist_generator) ![GitHub last commit](https://img.shields.io/github/last-commit/narkopolo/danish_phone_wordlist_generator)](https://github.com/narkopolo/danish_phone_wordlist_generator) - This tool can generate wordlists of Danish phone numbers by area and/or usage (Mobile, landline etc.) Useful for password cracking or fuzzing Danish targets.
- [Danish Wordlists ![GitHub Repo Stars](https://img.shields.io/github/stars/narkopolo/danish-wordlists) ![GitHub last commit](https://img.shields.io/github/last-commit/narkopolo/danish-wordlists)](https://github.com/narkopolo/danish-wordlists) - Collection of danish wordlists for cracking danish passwords.
- [French Wordlists ![GitHub Repo Stars](https://img.shields.io/github/stars/clem9669/wordlists) ![GitHub last commit](https://img.shields.io/github/last-commit/clem9669/wordlists)](https://github.com/clem9669/wordlists) - This project aim to provide french word list about everything a person could use as a base password.

### Other
- [Packet Storm Wordlists](https://packetstormsecurity.com/Crackers/wordlists/page1/) - A substantial collection of different wordlists in multiple languages.
- [Rocktastic](https://labs.nettitude.com/tools/rocktastic/) - Includes many permutations of passwords and patterns that have been observed in the wild.
- [RockYou2021 ![GitHub Repo Stars](https://img.shields.io/github/stars/ohmybahgosh/RockYou2021.txt) ![GitHub last commit](https://img.shields.io/github/last-commit/ohmybahgosh/RockYou2021.txt)](https://github.com/ohmybahgosh/RockYou2021.txt) - 	RockYou2021.txt is a MASSIVE WORDLIST compiled of various other wordlists.
- [WeakPass](https://weakpass.com/) - Collection of large wordlists.



## Specific file formats
### PDF
- [pdfrip ![GitHub Repo Stars](https://img.shields.io/github/stars/mufeedvh/pdfrip) ![GitHub last commit](https://img.shields.io/github/last-commit/mufeedvh/pdfrip)](https://github.com/mufeedvh/pdfrip) - A multi-threaded PDF password cracking utility equipped with commonly encountered password format builders and dictionary attacks.

### PEM
- [pemcracker ![GitHub Repo Stars](https://img.shields.io/github/stars/bwall/pemcracker) ![GitHub last commit](https://img.shields.io/github/last-commit/bwall/pemcracker)](https://github.com/bwall/pemcracker) - Tool to crack encrypted PEM files.

### JKS
- [JKS private key cracker ![GitHub Repo Stars](https://img.shields.io/github/stars/floyd-fuh/JKS-private-key-cracker-hashcat) ![GitHub last commit](https://img.shields.io/github/last-commit/floyd-fuh/JKS-private-key-cracker-hashcat)](https://github.com/floyd-fuh/JKS-private-key-cracker-hashcat) - Cracking passwords of private key entries in a JKS fileCracking passwords of private key entries in a JKS file.

### ZIP
- [bkcrack ![GitHub Repo Stars](https://img.shields.io/github/stars/kimci86/bkcrack) ![GitHub last commit](https://img.shields.io/github/last-commit/kimci86/bkcrack)](https://github.com/kimci86/bkcrack) - Crack legacy zip encryption with Biham and Kocher's known plaintext attack.
- [frackzip ![GitHub Repo Stars](https://img.shields.io/github/stars/hyc/fcrackzip) ![GitHub last commit](https://img.shields.io/github/last-commit/hyc/fcrackzip)](https://github.com/hyc/fcrackzip) - Small tool for cracking encrypted ZIP archives.



## Artificial Intelligence
- [adams ![GitHub Repo Stars](https://img.shields.io/github/stars/TheAdamProject/adams) ![GitHub last commit](https://img.shields.io/github/last-commit/TheAdamProject/adams)](https://github.com/TheAdamProject/adams) - Reducing Bias in Modeling Real-world Password Strength via Deep Learning and Dynamic Dictionaries.
[ ![GitHub Repo Stars](https://img.shields.io/github/stars/cupslab/neural_network_cracking) ![GitHub last commit](https://img.shields.io/github/last-commit/cupslab/neural_network_cracking)](https://github.com/cupslab/neural_network_cracking) - Code for cracking passwords with neural networks.
- [RNN-Passwords ![GitHub Repo Stars](https://img.shields.io/github/stars/gehaxelt/RNN-Passwords) ![GitHub last commit](https://img.shields.io/github/last-commit/gehaxelt/RNN-Passwords)](https://github.com/gehaxelt/RNN-Passwords) - Using the char-rnn to learn and guess passwords.
- [rulesfinder ![GitHub Repo Stars](https://img.shields.io/github/stars/synacktiv/rulesfinder) ![GitHub last commit](https://img.shields.io/github/last-commit/synacktiv/rulesfinder)](https://github.com/synacktiv/rulesfinder) - This tool finds efficient password mangling rules (for John the Ripper or Hashcat) for a given dictionary and a list of passwords.
- [PassGPT ![GitHub Repo Stars](https://img.shields.io/github/stars/javirandor/passgpt) ![GitHub last commit](https://img.shields.io/github/last-commit/javirandor/passgpt)](https://github.com/javirandor/passgpt) - PassGPT is a GPT-2 model trained from scratch on password leaks.



## Research

### Articles and Blog Posts
- [Optimizing Wordlists with Masks](https://jakewnuk.com/posts/optimizing-wordlists-w-masks/)
- [Purple Rain Attack - Password Cracking With Random Generation](https://www.netmux.com/blog/purple-rain-attack)
- [Smashing Hashes with Token Swapping Attacks](https://jakewnuk.com/posts/token-swapping-attack/)

### Papers
- [Generating Optimized Guessing Candidates toward Better Password Cracking from Multi-Dictionaries Using Relativistic GAN (2020)](https://www.mdpi.com/2076-3417/10/20/7306/htm)
- [GENPass: A General Deep Learning Model for Password Guessing with PCFG Rules and Adversarial Generation (2018)](https://ieeexplore.ieee.org/document/8422243)
- [Password Cracking Using Probabilistic Context-Free Grammars (2009)](https://www.researchgate.net/publication/220713709_Password_Cracking_Using_Probabilistic_Context-Free_Grammars)
- [Reducing Bias in Modeling Real-world Password Strength via Deep Learning and Dynamic Dictionaries (2020)](https://arxiv.org/abs/2010.12269)
- [Fast, Lean, and Accurate: Modeling Password Guessability Using Neural Networks (2016)](https://www.usenix.org/conference/usenixsecurity16/technical-sessions/presentation/melicher)
- [PassGAN: A Deep Learning Approach for Password Guessing (2017)](https://arxiv.org/pdf/1709.00440)
- [PassGPT: Password Modeling and (Guided) Generation with LLMs](https://arxiv.org/abs/2306.01545)

### Talks
- [BsidesKY2023 - Leveling Up Password Attacks with Breach Data ![GitHub Repo Stars](https://img.shields.io/github/stars/JakeWnuk/Security-Conferences) ![GitHub last commit](https://img.shields.io/github/last-commit/JakeWnuk/Security-Conferences)](https://github.com/JakeWnuk/Security-Conferences/blob/main/BsidesKY2023%20-%20Leveling%20Up%20Password%20Attacks%20with%20Breach%20Data.pdf)
- [DEF CON Safe Mode Password Village - Getting Started with Hashcat](https://www.youtube.com/watch?v=MBTJ8f6Fsmg)
- [DEF CON Safe Mode Password Village - Jeremi Gosney - Cracking at Extreme Scale](https://www.youtube.com/watch?v=4Ell1Tt23NI)
- [DEF CON 28 Safe Mode Password Village – 'Let's Crack RockYou Without Using rockyou txt'](https://www.youtube.com/watch?v=8FtXntEsZdU)
- [SecTor 2019 - Will Hunt - Hashes, Hashes Everywhere, But All I See Is Plaintext](https://sector.ca/sessions/hashes-hashes-everywhere-but-all-i-see-is-plaintext/)
- [Tailored, Machine Learning-driven Password Guessing Attacks and Mitigation at DefCamp](https://www.youtube.com/watch?v=iK6ZbD6v9Gg)
- [UNHash - Methods for better password cracking](https://media.ccc.de/v/31c3_-_5966_-_en_-_saal_1_-_201412292245_-_unhash_-_methods_for_better_password_cracking_-_tonimir_kisasondi)
- [USENIX Security '21 - Reducing Bias in Modeling Real-world Password Strength via Deep Learning and Dynamic Dictionaries](https://www.youtube.com/watch?v=Jvp3UTdCeag)
- [USENIX Security '16 - Fast, Lean, and Accurate: Modeling Password Guessability Using Neural Networks
](https://www.youtube.com/watch?v=GgaZ_LxsL_8)
