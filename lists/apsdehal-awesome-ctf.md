# Awesome CTF [![Build Status](https://travis-ci.org/apsdehal/awesome-ctf.svg?branch=master)](https://travis-ci.org/apsdehal/awesome-ctf) [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

A curated list of [Capture The Flag](https://en.wikipedia.org/wiki/Capture_the_flag#Computer_security) (CTF) frameworks, libraries, resources, softwares and tutorials. This list aims to help starters as well as seasoned CTF players to find everything related to CTFs at one place.

### Contributing

Please take a quick look at the [contribution guidelines ![GitHub Repo Stars](https://img.shields.io/github/stars/apsdehal/ctf-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/apsdehal/ctf-tools)](https://github.com/apsdehal/ctf-tools/blob/master/CONTRIBUTING.md) first.

#### _If you know a tool that isn't present here, feel free to open a pull request._

### Why?

It takes time to build up collection of tools used in CTF and remember them all. This repo helps to keep all these scattered tools at one place.

### Contents

- [Awesome CTF](#awesome-ctf)
  - [Create](#create)
    - [Forensics](#forensics)
    - [Platforms](#platforms)
    - [Steganography](#steganography)
    - [Web](#web)
  - [Solve](#solve)
    - [Attacks](#attacks)
    - [Bruteforcers](#bruteforcers)
    - [Cryptography](#crypto)
    - [Exploits](#exploits)
    - [Forensics](#forensics-1)
    - [Networking](#networking)
    - [Reversing](#reversing)
    - [Services](#services)
    - [Steganography](#steganography-1)
    - [Web](#web-1)

- [Resources](#resources)
  - [Operating Systems](#operating-systems)
  - [Starter Packs](#starter-packs)
  - [Tutorials](#tutorials)
  - [Wargames](#wargames)
  - [Websites](#websites)
  - [Wikis](#wikis)
  - [Writeups Collections](#writeups-collections)


# Create

*Tools used for creating CTF challenges*

- [Kali Linux CTF Blueprints](https://www.packtpub.com/eu/networking-and-servers/kali-linux-ctf-blueprints) - Online book on building, testing, and customizing your own Capture the Flag challenges.


## Forensics

*Tools used for creating Forensics challenges*

- [Dnscat2 ![GitHub Repo Stars](https://img.shields.io/github/stars/iagox86/dnscat2) ![GitHub last commit](https://img.shields.io/github/last-commit/iagox86/dnscat2)](https://github.com/iagox86/dnscat2) - Hosts communication through DNS.
- [Kroll Artifact Parser and Extractor (KAPE)](https://learn.duffandphelps.com/kape) - Triage program.
- [Magnet AXIOM](https://www.magnetforensics.com/downloadaxiom) - Artifact-centric DFIR tool.
- [Registry Dumper](http://www.kahusecurity.com/posts/registry_dumper_find_and_dump_hidden_registry_keys.html) - Dump your registry.

## Platforms

*Projects that can be used to host a CTF*

- [CTFd ![GitHub Repo Stars](https://img.shields.io/github/stars/isislab/CTFd) ![GitHub last commit](https://img.shields.io/github/last-commit/isislab/CTFd)](https://github.com/isislab/CTFd) - Platform to host jeopardy style CTFs from ISISLab, NYU Tandon.
- [echoCTF.RED ![GitHub Repo Stars](https://img.shields.io/github/stars/echoCTF/echoCTF.RED) ![GitHub last commit](https://img.shields.io/github/last-commit/echoCTF/echoCTF.RED)](https://github.com/echoCTF/echoCTF.RED) - Develop, deploy and maintain your own CTF infrastructure.
- [FBCTF ![GitHub Repo Stars](https://img.shields.io/github/stars/facebook/fbctf) ![GitHub last commit](https://img.shields.io/github/last-commit/facebook/fbctf)](https://github.com/facebook/fbctf) - Platform to host Capture the Flag competitions from Facebook.
- [Haaukins ![GitHub Repo Stars](https://img.shields.io/github/stars/aau-network-security/haaukins) ![GitHub last commit](https://img.shields.io/github/last-commit/aau-network-security/haaukins)](https://github.com/aau-network-security/haaukins)- A Highly Accessible and Automated Virtualization Platform for Security Education.
- [HackTheArch ![GitHub Repo Stars](https://img.shields.io/github/stars/mcpa-stlouis/hack-the-arch) ![GitHub last commit](https://img.shields.io/github/last-commit/mcpa-stlouis/hack-the-arch)](https://github.com/mcpa-stlouis/hack-the-arch) - CTF scoring platform.
- [Mellivora ![GitHub Repo Stars](https://img.shields.io/github/stars/Nakiami/mellivora) ![GitHub last commit](https://img.shields.io/github/last-commit/Nakiami/mellivora)](https://github.com/Nakiami/mellivora) - A CTF engine written in PHP.
- [MotherFucking-CTF ![GitHub Repo Stars](https://img.shields.io/github/stars/andreafioraldi/motherfucking-ctf) ![GitHub last commit](https://img.shields.io/github/last-commit/andreafioraldi/motherfucking-ctf)](https://github.com/andreafioraldi/motherfucking-ctf) - Badass lightweight plaform to host CTFs. No JS involved.
- [NightShade ![GitHub Repo Stars](https://img.shields.io/github/stars/UnrealAkama/NightShade) ![GitHub last commit](https://img.shields.io/github/last-commit/UnrealAkama/NightShade)](https://github.com/UnrealAkama/NightShade) - A simple security CTF framework.
- [OpenCTF ![GitHub Repo Stars](https://img.shields.io/github/stars/easyctf/openctf) ![GitHub last commit](https://img.shields.io/github/last-commit/easyctf/openctf)](https://github.com/easyctf/openctf) - CTF in a box. Minimal setup required.
- [PicoCTF ![GitHub Repo Stars](https://img.shields.io/github/stars/picoCTF/picoCTF) ![GitHub last commit](https://img.shields.io/github/last-commit/picoCTF/picoCTF)](https://github.com/picoCTF/picoCTF) - The platform used to run picoCTF. A great framework to host any CTF.
- [PyChallFactory ![GitHub Repo Stars](https://img.shields.io/github/stars/pdautry/py_chall_factory) ![GitHub last commit](https://img.shields.io/github/last-commit/pdautry/py_chall_factory)](https://github.com/pdautry/py_chall_factory) - Small framework to create/manage/package jeopardy CTF challenges.
- [RootTheBox ![GitHub Repo Stars](https://img.shields.io/github/stars/moloch--/RootTheBox) ![GitHub last commit](https://img.shields.io/github/last-commit/moloch--/RootTheBox)](https://github.com/moloch--/RootTheBox) - A Game of Hackers (CTF Scoreboard & Game Manager).
- [Scorebot ![GitHub Repo Stars](https://img.shields.io/github/stars/legitbs/scorebot) ![GitHub last commit](https://img.shields.io/github/last-commit/legitbs/scorebot)](https://github.com/legitbs/scorebot) - Platform for CTFs by Legitbs (Defcon).
- [SecGen ![GitHub Repo Stars](https://img.shields.io/github/stars/cliffe/SecGen) ![GitHub last commit](https://img.shields.io/github/last-commit/cliffe/SecGen)](https://github.com/cliffe/SecGen) - Security Scenario Generator. Creates randomly vulnerable virtual machines.

## Steganography

*Tools used to create stego challenges*

Check solve section for steganography.

## Web

*Tools used for creating Web challenges*

*JavaScript Obfustcators*

- [Metasploit JavaScript Obfuscator ![GitHub Repo Stars](https://img.shields.io/github/stars/rapid7/metasploit-framework) ![GitHub last commit](https://img.shields.io/github/last-commit/rapid7/metasploit-framework)](https://github.com/rapid7/metasploit-framework/wiki/How-to-obfuscate-JavaScript-in-Metasploit)
- [Uglify ![GitHub Repo Stars](https://img.shields.io/github/stars/mishoo/UglifyJS) ![GitHub last commit](https://img.shields.io/github/last-commit/mishoo/UglifyJS)](https://github.com/mishoo/UglifyJS)


# Solve

*Tools used for solving CTF challenges*

## Attacks

*Tools used for performing various kinds of attacks*

- [Bettercap ![GitHub Repo Stars](https://img.shields.io/github/stars/bettercap/bettercap) ![GitHub last commit](https://img.shields.io/github/last-commit/bettercap/bettercap)](https://github.com/bettercap/bettercap) - Framework to perform MITM (Man in the Middle) attacks.
- [Yersinia ![GitHub Repo Stars](https://img.shields.io/github/stars/tomac/yersinia) ![GitHub last commit](https://img.shields.io/github/last-commit/tomac/yersinia)](https://github.com/tomac/yersinia) - Attack various protocols on layer 2.

## Crypto

*Tools used for solving Crypto challenges*

- [CyberChef](https://gchq.github.io/CyberChef) - Web app for analysing and decoding data.
- [FeatherDuster ![GitHub Repo Stars](https://img.shields.io/github/stars/nccgroup/featherduster) ![GitHub last commit](https://img.shields.io/github/last-commit/nccgroup/featherduster)](https://github.com/nccgroup/featherduster) - An automated, modular cryptanalysis tool.
- [Hash Extender ![GitHub Repo Stars](https://img.shields.io/github/stars/iagox86/hash_extender) ![GitHub last commit](https://img.shields.io/github/last-commit/iagox86/hash_extender)](https://github.com/iagox86/hash_extender) - A utility tool for performing hash length extension attacks.
- [padding-oracle-attacker ![GitHub Repo Stars](https://img.shields.io/github/stars/KishanBagaria/padding-oracle-attacker) ![GitHub last commit](https://img.shields.io/github/last-commit/KishanBagaria/padding-oracle-attacker)](https://github.com/KishanBagaria/padding-oracle-attacker) - A CLI tool to execute padding oracle attacks.
- [PkCrack](https://www.unix-ag.uni-kl.de/~conrad/krypto/pkcrack.html) - A tool for Breaking PkZip-encryption.
- [QuipQuip](https://quipqiup.com) - An online tool for breaking substitution ciphers or vigenere ciphers (without key).
- [RSACTFTool ![GitHub Repo Stars](https://img.shields.io/github/stars/Ganapati/RsaCtfTool) ![GitHub last commit](https://img.shields.io/github/last-commit/Ganapati/RsaCtfTool)](https://github.com/Ganapati/RsaCtfTool) - A tool for recovering RSA private key with various attack.
- [RSATool ![GitHub Repo Stars](https://img.shields.io/github/stars/ius/rsatool) ![GitHub last commit](https://img.shields.io/github/last-commit/ius/rsatool)](https://github.com/ius/rsatool) - Generate private key with knowledge of p and q.
- [XORTool ![GitHub Repo Stars](https://img.shields.io/github/stars/hellman/xortool) ![GitHub last commit](https://img.shields.io/github/last-commit/hellman/xortool)](https://github.com/hellman/xortool) - A tool to analyze multi-byte xor cipher.

## Bruteforcers

*Tools used for various kind of bruteforcing (passwords etc.)*

- [Hashcat](https://hashcat.net/hashcat/) - Password Cracker
- [Hydra](https://tools.kali.org/password-attacks/hydra) - A parallelized login cracker which supports numerous protocols to attack
- [John The Jumbo ![GitHub Repo Stars](https://img.shields.io/github/stars/magnumripper/JohnTheRipper) ![GitHub last commit](https://img.shields.io/github/last-commit/magnumripper/JohnTheRipper)](https://github.com/magnumripper/JohnTheRipper) - Community enhanced version of John the Ripper.
- [John The Ripper](http://www.openwall.com/john/) - Password Cracker.
- [Nozzlr ![GitHub Repo Stars](https://img.shields.io/github/stars/intrd/nozzlr) ![GitHub last commit](https://img.shields.io/github/last-commit/intrd/nozzlr)](https://github.com/intrd/nozzlr) - Nozzlr is a bruteforce framework, trully modular and script-friendly.
- [Ophcrack](http://ophcrack.sourceforge.net/) - Windows password cracker based on rainbow tables.
- [Patator ![GitHub Repo Stars](https://img.shields.io/github/stars/lanjelot/patator) ![GitHub last commit](https://img.shields.io/github/last-commit/lanjelot/patator)](https://github.com/lanjelot/patator) - Patator is a multi-purpose brute-forcer, with a modular design.
- [Turbo Intruder](https://portswigger.net/research/turbo-intruder-embracing-the-billion-request-attack) - Burp Suite extension for sending large numbers of HTTP requests 

## Exploits

*Tools used for solving Exploits challenges*

- [DLLInjector ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenSecurityResearch/dllinjector) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenSecurityResearch/dllinjector)](https://github.com/OpenSecurityResearch/dllinjector) - Inject dlls in processes.
- [libformatstr ![GitHub Repo Stars](https://img.shields.io/github/stars/hellman/libformatstr) ![GitHub last commit](https://img.shields.io/github/last-commit/hellman/libformatstr)](https://github.com/hellman/libformatstr) - Simplify format string exploitation.
- [Metasploit](http://www.metasploit.com/) - Penetration testing software.
  - [Cheatsheet](https://www.comparitech.com/net-admin/metasploit-cheat-sheet/)
- [one_gadget ![GitHub Repo Stars](https://img.shields.io/github/stars/david942j/one_gadget) ![GitHub last commit](https://img.shields.io/github/last-commit/david942j/one_gadget)](https://github.com/david942j/one_gadget) -  A tool to find the one gadget `execve('/bin/sh', NULL, NULL)` call.
  - `gem install one_gadget`
- [Pwntools ![GitHub Repo Stars](https://img.shields.io/github/stars/Gallopsled/pwntools) ![GitHub last commit](https://img.shields.io/github/last-commit/Gallopsled/pwntools)](https://github.com/Gallopsled/pwntools) - CTF Framework for writing exploits.
- [Qira ![GitHub Repo Stars](https://img.shields.io/github/stars/BinaryAnalysisPlatform/qira) ![GitHub last commit](https://img.shields.io/github/last-commit/BinaryAnalysisPlatform/qira)](https://github.com/BinaryAnalysisPlatform/qira) - QEMU Interactive Runtime Analyser.
- [ROP Gadget ![GitHub Repo Stars](https://img.shields.io/github/stars/JonathanSalwan/ROPgadget) ![GitHub last commit](https://img.shields.io/github/last-commit/JonathanSalwan/ROPgadget)](https://github.com/JonathanSalwan/ROPgadget) - Framework for ROP exploitation.
- [V0lt ![GitHub Repo Stars](https://img.shields.io/github/stars/P1kachu/v0lt) ![GitHub last commit](https://img.shields.io/github/last-commit/P1kachu/v0lt)](https://github.com/P1kachu/v0lt) - Security CTF Toolkit.

## Forensics

*Tools used for solving Forensics challenges*

- [Aircrack-Ng](http://www.aircrack-ng.org/) - Crack 802.11 WEP and WPA-PSK keys.
  - `apt-get install aircrack-ng`
- [Audacity](http://sourceforge.net/projects/audacity/) - Analyze sound files (mp3, m4a, whatever).
  - `apt-get install audacity`
- [Bkhive and Samdump2](http://sourceforge.net/projects/ophcrack/files/samdump2/) - Dump SYSTEM and SAM files.
  - `apt-get install samdump2 bkhive`
- [CFF Explorer](http://www.ntcore.com/exsuite.php) - PE Editor.
- [Creddump ![GitHub Repo Stars](https://img.shields.io/github/stars/moyix/creddump) ![GitHub last commit](https://img.shields.io/github/last-commit/moyix/creddump)](https://github.com/moyix/creddump) - Dump windows credentials.
- [DVCS Ripper ![GitHub Repo Stars](https://img.shields.io/github/stars/kost/dvcs-ripper) ![GitHub last commit](https://img.shields.io/github/last-commit/kost/dvcs-ripper)](https://github.com/kost/dvcs-ripper) - Rips web accessible (distributed) version control systems.
- [Exif Tool](http://www.sno.phy.queensu.ca/~phil/exiftool/) - Read, write and edit file metadata.
- [Extundelete](http://extundelete.sourceforge.net/) - Used for recovering lost data from mountable images.
- [Fibratus ![GitHub Repo Stars](https://img.shields.io/github/stars/rabbitstack/fibratus) ![GitHub last commit](https://img.shields.io/github/last-commit/rabbitstack/fibratus)](https://github.com/rabbitstack/fibratus) - Tool for exploration and tracing of the Windows kernel.
- [Foremost](http://foremost.sourceforge.net/) - Extract particular kind of files using headers.
  - `apt-get install foremost`
- [Fsck.ext4](http://linux.die.net/man/8/fsck.ext3) - Used to fix corrupt filesystems.
- [Malzilla](http://malzilla.sourceforge.net/) - Malware hunting tool.
- [NetworkMiner](http://www.netresec.com/?page=NetworkMiner) - Network Forensic Analysis Tool.
- [PDF Streams Inflater](http://malzilla.sourceforge.net/downloads.html) - Find and extract zlib files compressed in PDF files.
- [Pngcheck](http://www.libpng.org/pub/png/apps/pngcheck.html) - Verifies the integrity of PNG and dump all of the chunk-level information in human-readable form.
  - `apt-get install pngcheck`
- [ResourcesExtract](http://www.nirsoft.net/utils/resources_extract.html) - Extract various filetypes from exes.
- [Shellbags ![GitHub Repo Stars](https://img.shields.io/github/stars/williballenthin/shellbags) ![GitHub last commit](https://img.shields.io/github/last-commit/williballenthin/shellbags)](https://github.com/williballenthin/shellbags) - Investigate NT\_USER.dat files.
- [Snow](https://sbmlabs.com/notes/snow_whitespace_steganography_tool) - A Whitespace Steganography Tool.
- [USBRip ![GitHub Repo Stars](https://img.shields.io/github/stars/snovvcrash/usbrip) ![GitHub last commit](https://img.shields.io/github/last-commit/snovvcrash/usbrip)](https://github.com/snovvcrash/usbrip) - Simple CLI forensics tool for tracking USB device artifacts (history of USB events) on GNU/Linux.
- [Volatility ![GitHub Repo Stars](https://img.shields.io/github/stars/volatilityfoundation/volatility) ![GitHub last commit](https://img.shields.io/github/last-commit/volatilityfoundation/volatility)](https://github.com/volatilityfoundation/volatility) - To investigate memory dumps.
- [Wireshark](https://www.wireshark.org) - Used to analyze pcap or pcapng files

*Registry Viewers*
- [OfflineRegistryView](https://www.nirsoft.net/utils/offline_registry_view.html) - Simple tool for Windows that allows you to read offline Registry files from external drive and view the desired Registry key in .reg file format.
- [Registry Viewer®](https://accessdata.com/product-download/registry-viewer-2-0-0) - Used to view Windows registries.

## Networking

*Tools used for solving Networking challenges*

- [Masscan ![GitHub Repo Stars](https://img.shields.io/github/stars/robertdavidgraham/masscan) ![GitHub last commit](https://img.shields.io/github/last-commit/robertdavidgraham/masscan)](https://github.com/robertdavidgraham/masscan) - Mass IP port scanner, TCP port scanner.
- [Monit](https://linoxide.com/monitoring-2/monit-linux/) - A linux tool to check a host on the network (and other non-network activities).
- [Nipe ![GitHub Repo Stars](https://img.shields.io/github/stars/GouveaHeitor/nipe) ![GitHub last commit](https://img.shields.io/github/last-commit/GouveaHeitor/nipe)](https://github.com/GouveaHeitor/nipe) - Nipe is a script to make Tor Network your default gateway.
- [Nmap](https://nmap.org/) - An open source utility for network discovery and security auditing.
- [Wireshark](https://www.wireshark.org/) - Analyze the network dumps.
  - `apt-get install wireshark`
- [Zeek](https://www.zeek.org) - An open-source network security monitor.
- [Zmap](https://zmap.io/) - An open-source network scanner.

## Reversing

*Tools used for solving Reversing challenges*

- [Androguard ![GitHub Repo Stars](https://img.shields.io/github/stars/androguard/androguard) ![GitHub last commit](https://img.shields.io/github/last-commit/androguard/androguard)](https://github.com/androguard/androguard) - Reverse engineer Android applications.
- [Angr ![GitHub Repo Stars](https://img.shields.io/github/stars/angr/angr) ![GitHub last commit](https://img.shields.io/github/last-commit/angr/angr)](https://github.com/angr/angr) - platform-agnostic binary analysis framework.
- [Apk2Gold ![GitHub Repo Stars](https://img.shields.io/github/stars/lxdvs/apk2gold) ![GitHub last commit](https://img.shields.io/github/last-commit/lxdvs/apk2gold)](https://github.com/lxdvs/apk2gold) - Yet another Android decompiler.
- [ApkTool](http://ibotpeaches.github.io/Apktool/) - Android Decompiler.
- [Barf ![GitHub Repo Stars](https://img.shields.io/github/stars/programa-stic/barf-project) ![GitHub last commit](https://img.shields.io/github/last-commit/programa-stic/barf-project)](https://github.com/programa-stic/barf-project) - Binary Analysis and Reverse engineering Framework.
- [Binary Ninja](https://binary.ninja/) - Binary analysis framework.
- [BinUtils](http://www.gnu.org/software/binutils/binutils.html) - Collection of binary tools.
- [BinWalk ![GitHub Repo Stars](https://img.shields.io/github/stars/devttys0/binwalk) ![GitHub last commit](https://img.shields.io/github/last-commit/devttys0/binwalk)](https://github.com/devttys0/binwalk) - Analyze, reverse engineer, and extract firmware images.
- [Boomerang ![GitHub Repo Stars](https://img.shields.io/github/stars/BoomerangDecompiler/boomerang) ![GitHub last commit](https://img.shields.io/github/last-commit/BoomerangDecompiler/boomerang)](https://github.com/BoomerangDecompiler/boomerang) - Decompile x86/SPARC/PowerPC/ST-20 binaries to C.
- [ctf_import ![GitHub Repo Stars](https://img.shields.io/github/stars/docileninja/ctf_import) ![GitHub last commit](https://img.shields.io/github/last-commit/docileninja/ctf_import)](https://github.com/docileninja/ctf_import) – run basic functions from stripped binaries cross platform.
- [cwe_checker ![GitHub Repo Stars](https://img.shields.io/github/stars/fkie-cad/cwe_checker) ![GitHub last commit](https://img.shields.io/github/last-commit/fkie-cad/cwe_checker)](https://github.com/fkie-cad/cwe_checker) - cwe_checker finds vulnerable patterns in binary executables.
- [demovfuscator ![GitHub Repo Stars](https://img.shields.io/github/stars/kirschju/demovfuscator) ![GitHub last commit](https://img.shields.io/github/last-commit/kirschju/demovfuscator)](https://github.com/kirschju/demovfuscator) - A work-in-progress deobfuscator for movfuscated binaries.
- [Frida](https://github.com/frida/) - Dynamic Code Injection.
- [GDB](https://www.gnu.org/software/gdb/) - The GNU project debugger.
- [GEF ![GitHub Repo Stars](https://img.shields.io/github/stars/hugsy/gef) ![GitHub last commit](https://img.shields.io/github/last-commit/hugsy/gef)](https://github.com/hugsy/gef) - GDB plugin.
- [Ghidra](https://ghidra-sre.org/) - Open Source suite of reverse engineering tools.  Similar to IDA Pro.
- [Hopper](http://www.hopperapp.com/) - Reverse engineering tool (disassembler) for OSX and Linux.
- [IDA Pro](https://www.hex-rays.com/products/ida/) - Most used Reversing software.
- [Jadx ![GitHub Repo Stars](https://img.shields.io/github/stars/skylot/jadx) ![GitHub last commit](https://img.shields.io/github/last-commit/skylot/jadx)](https://github.com/skylot/jadx) - Decompile Android files.
- [Java Decompilers](http://www.javadecompilers.com) - An online decompiler for Java and Android APKs.
- [Krakatau ![GitHub Repo Stars](https://img.shields.io/github/stars/Storyyeller/Krakatau) ![GitHub last commit](https://img.shields.io/github/last-commit/Storyyeller/Krakatau)](https://github.com/Storyyeller/Krakatau) - Java decompiler and disassembler.
- [Objection ![GitHub Repo Stars](https://img.shields.io/github/stars/sensepost/objection) ![GitHub last commit](https://img.shields.io/github/last-commit/sensepost/objection)](https://github.com/sensepost/objection) - Runtime Mobile Exploration.
- [PEDA ![GitHub Repo Stars](https://img.shields.io/github/stars/longld/peda) ![GitHub last commit](https://img.shields.io/github/last-commit/longld/peda)](https://github.com/longld/peda) - GDB plugin (only python2.7).
- [Pin](https://software.intel.com/en-us/articles/pin-a-dynamic-binary-instrumentation-tool) - A dynamic binary instrumentaion tool by Intel.
- [PINCE ![GitHub Repo Stars](https://img.shields.io/github/stars/korcankaraokcu/PINCE) ![GitHub last commit](https://img.shields.io/github/last-commit/korcankaraokcu/PINCE)](https://github.com/korcankaraokcu/PINCE) - GDB front-end/reverse engineering tool, focused on game-hacking and automation.
- [PinCTF ![GitHub Repo Stars](https://img.shields.io/github/stars/ChrisTheCoolHut/PinCTF) ![GitHub last commit](https://img.shields.io/github/last-commit/ChrisTheCoolHut/PinCTF)](https://github.com/ChrisTheCoolHut/PinCTF) - A tool which uses intel pin for Side Channel Analysis.
- [Plasma ![GitHub Repo Stars](https://img.shields.io/github/stars/joelpx/plasma) ![GitHub last commit](https://img.shields.io/github/last-commit/joelpx/plasma)](https://github.com/joelpx/plasma) - An interactive disassembler for x86/ARM/MIPS which can generate indented pseudo-code with colored syntax.
- [Pwndbg ![GitHub Repo Stars](https://img.shields.io/github/stars/pwndbg/pwndbg) ![GitHub last commit](https://img.shields.io/github/last-commit/pwndbg/pwndbg)](https://github.com/pwndbg/pwndbg) - A GDB plugin that provides a suite of utilities to hack around GDB easily.
- [radare2 ![GitHub Repo Stars](https://img.shields.io/github/stars/radare/radare2) ![GitHub last commit](https://img.shields.io/github/last-commit/radare/radare2)](https://github.com/radare/radare2) - A portable reversing framework.
- [Triton ![GitHub Repo Stars](https://img.shields.io/github/stars/JonathanSalwan/Triton) ![GitHub last commit](https://img.shields.io/github/last-commit/JonathanSalwan/Triton)](https://github.com/JonathanSalwan/Triton/) - Dynamic Binary Analysis (DBA) framework.
- [Uncompyle ![GitHub Repo Stars](https://img.shields.io/github/stars/gstarnberger/uncompyle) ![GitHub last commit](https://img.shields.io/github/last-commit/gstarnberger/uncompyle)](https://github.com/gstarnberger/uncompyle) - Decompile Python 2.7 binaries (.pyc).
- [WinDbg](http://www.windbg.org/) - Windows debugger distributed by Microsoft.
- [Xocopy](http://reverse.lostrealm.com/tools/xocopy.html) - Program that can copy executables with execute, but no read permission.
- [Z3 ![GitHub Repo Stars](https://img.shields.io/github/stars/Z3Prover/z3) ![GitHub last commit](https://img.shields.io/github/last-commit/Z3Prover/z3)](https://github.com/Z3Prover/z3) - A theorem prover from Microsoft Research.

*JavaScript Deobfuscators*

- [Detox](http://relentless-coding.org/projects/jsdetox/install) - A Javascript malware analysis tool.
- [Revelo](http://www.kahusecurity.com/posts/revelo_javascript_deobfuscator.html) - Analyze obfuscated Javascript code.

*SWF Analyzers*
- [RABCDAsm ![GitHub Repo Stars](https://img.shields.io/github/stars/CyberShadow/RABCDAsm) ![GitHub last commit](https://img.shields.io/github/last-commit/CyberShadow/RABCDAsm)](https://github.com/CyberShadow/RABCDAsm) - Collection of utilities including an ActionScript 3 assembler/disassembler.
- [Swftools](http://www.swftools.org/) - Collection of utilities to work with SWF files.
- [Xxxswf](https://bitbucket.org/Alexander_Hanel/xxxswf) -  A Python script for analyzing Flash files.

## Services

*Various kind of useful services available around the internet*

- [CSWSH](http://cow.cat/cswsh.html) - Cross-Site WebSocket Hijacking Tester.
- [Request Bin](https://requestbin.com/) - Lets you inspect http requests to a particular url.

## Steganography

*Tools used for solving Steganography challenges*

- [AperiSolve](https://aperisolve.fr/) - Aperi'Solve is a platform which performs layer analysis on image (open-source).
- [Convert](http://www.imagemagick.org/script/convert.php) - Convert images b/w formats and apply filters.
- [Exif](http://manpages.ubuntu.com/manpages/trusty/man1/exif.1.html) - Shows EXIF information in JPEG files.
- [Exiftool](https://linux.die.net/man/1/exiftool) - Read and write meta information in files.
- [Exiv2](http://www.exiv2.org/manpage.html) - Image metadata manipulation tool.
- [Image Steganography](https://sourceforge.net/projects/image-steg/) - Embeds text and files in images with optional encryption. Easy-to-use UI.
- [Image Steganography Online](https://incoherency.co.uk/image-steganography) - This is a client-side Javascript tool to steganographically hide images inside the lower "bits" of other images
- [ImageMagick](http://www.imagemagick.org/script/index.php) - Tool for manipulating images.
- [Outguess](https://www.freebsd.org/cgi/man.cgi?query=outguess+&apropos=0&sektion=0&manpath=FreeBSD+Ports+5.1-RELEASE&format=html) - Universal steganographic tool.
- [Pngtools](https://packages.debian.org/sid/pngtools) - For various analysis related to PNGs.
  - `apt-get install pngtools`
- [SmartDeblur ![GitHub Repo Stars](https://img.shields.io/github/stars/Y-Vladimir/SmartDeblur) ![GitHub last commit](https://img.shields.io/github/last-commit/Y-Vladimir/SmartDeblur)](https://github.com/Y-Vladimir/SmartDeblur) - Used to deblur and fix defocused images.
- [Steganabara](https://www.openhub.net/p/steganabara) -  Tool for stegano analysis written in Java.
- [SteganographyOnline](https://stylesuxx.github.io/steganography/) - Online steganography encoder and decoder.
- [Stegbreak](https://linux.die.net/man/1/stegbreak) - Launches brute-force dictionary attacks on JPG image.
- [StegCracker ![GitHub Repo Stars](https://img.shields.io/github/stars/Paradoxis/StegCracker) ![GitHub last commit](https://img.shields.io/github/last-commit/Paradoxis/StegCracker)](https://github.com/Paradoxis/StegCracker) - Steganography brute-force utility to uncover hidden data inside files.
- [stegextract ![GitHub Repo Stars](https://img.shields.io/github/stars/evyatarmeged/stegextract) ![GitHub last commit](https://img.shields.io/github/last-commit/evyatarmeged/stegextract)](https://github.com/evyatarmeged/stegextract) - Detect hidden files and text in images.
- [Steghide](http://steghide.sourceforge.net/) - Hide data in various kind of images.
- [StegOnline](https://georgeom.net/StegOnline/upload) - Conduct a wide range of image steganography operations, such as concealing/revealing files hidden within bits (open-source).
- [Stegsolve](http://www.caesum.com/handbook/Stegsolve.jar) - Apply various steganography techniques to images.
- [Zsteg ![GitHub Repo Stars](https://img.shields.io/github/stars/zed-0xff/zsteg) ![GitHub last commit](https://img.shields.io/github/last-commit/zed-0xff/zsteg)](https://github.com/zed-0xff/zsteg/) - PNG/BMP analysis.

## Web

*Tools used for solving Web challenges*

- [BurpSuite](https://portswigger.net/burp) - A graphical tool to testing website security.
- [Commix ![GitHub Repo Stars](https://img.shields.io/github/stars/commixproject/commix) ![GitHub last commit](https://img.shields.io/github/last-commit/commixproject/commix)](https://github.com/commixproject/commix) - Automated All-in-One OS Command Injection and Exploitation Tool.
- [Hackbar](https://addons.mozilla.org/en-US/firefox/addon/hackbartool/) - Firefox addon for easy web exploitation.
- [OWASP ZAP](https://www.owasp.org/index.php/Projects/OWASP_Zed_Attack_Proxy_Project) - Intercepting proxy to replay, debug, and fuzz HTTP requests and responses
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) - Add on for chrome for debugging network requests.
- [Raccoon ![GitHub Repo Stars](https://img.shields.io/github/stars/evyatarmeged/Raccoon) ![GitHub last commit](https://img.shields.io/github/last-commit/evyatarmeged/Raccoon)](https://github.com/evyatarmeged/Raccoon) - A high performance offensive security tool for reconnaissance and vulnerability scanning.
- [SQLMap ![GitHub Repo Stars](https://img.shields.io/github/stars/sqlmapproject/sqlmap) ![GitHub last commit](https://img.shields.io/github/last-commit/sqlmapproject/sqlmap)](https://github.com/sqlmapproject/sqlmap) - Automatic SQL injection and database takeover tool.
  ```pip install sqlmap```
- [W3af ![GitHub Repo Stars](https://img.shields.io/github/stars/andresriancho/w3af) ![GitHub last commit](https://img.shields.io/github/last-commit/andresriancho/w3af)](https://github.com/andresriancho/w3af) -  Web Application Attack and Audit Framework.
- [XSSer](http://xsser.sourceforge.net/) - Automated XSS testor.


# Resources

*Where to discover about CTF*

## Operating Systems

*Penetration testing and security lab Operating Systems*

- [Android Tamer](https://androidtamer.com/) - Based on Debian.
- [BackBox](https://backbox.org/) - Based on Ubuntu.
- [BlackArch Linux](https://blackarch.org/) - Based on Arch Linux.
- [Fedora Security Lab](https://labs.fedoraproject.org/security/) - Based on Fedora.
- [Kali Linux](https://www.kali.org/) - Based on Debian.
- [Parrot Security OS](https://www.parrotsec.org/) - Based on Debian.
- [Pentoo](http://www.pentoo.ch/) - Based on Gentoo.
- [URIX OS](http://urix.us/) - Based on openSUSE.
- [Wifislax](http://www.wifislax.com/) - Based on Slackware.

*Malware analysts and reverse-engineering*

- [Flare VM ![GitHub Repo Stars](https://img.shields.io/github/stars/fireeye/flare-vm) ![GitHub last commit](https://img.shields.io/github/last-commit/fireeye/flare-vm)](https://github.com/fireeye/flare-vm/) - Based on Windows.
- [REMnux](https://remnux.org/) - Based on Debian.

## Starter Packs

*Collections of installer scripts, useful tools*

- [CTF Tools ![GitHub Repo Stars](https://img.shields.io/github/stars/zardus/ctf-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/zardus/ctf-tools)](https://github.com/zardus/ctf-tools) - Collection of setup scripts to install various security research tools.
- [LazyKali ![GitHub Repo Stars](https://img.shields.io/github/stars/jlevitsk/lazykali) ![GitHub last commit](https://img.shields.io/github/last-commit/jlevitsk/lazykali)](https://github.com/jlevitsk/lazykali) - A 2016 refresh of LazyKali which simplifies install of tools and configuration.

## Tutorials

*Tutorials to learn how to play CTFs*

- [CTF Field Guide](https://trailofbits.github.io/ctf/) - Field Guide by Trails of Bits.
- [CTF Resources](http://ctfs.github.io/resources/) -  Start Guide maintained by community.
- [How to Get Started in CTF](https://www.endgame.com/blog/how-get-started-ctf) - Short guideline for CTF beginners by Endgame
- [Intro. to CTF Course](https://www.hoppersroppers.org/courseCTF.html) - A free course that teaches beginners the basics of forensics, crypto, and web-ex.
- [IppSec](https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA) - Video tutorials and walkthroughs of popular CTF platforms.
- [LiveOverFlow](https://www.youtube.com/channel/UClcE-kVhqyiHCcjYwcpfj9w) - Video tutorials on Exploitation.
- [MIPT CTF ![GitHub Repo Stars](https://img.shields.io/github/stars/xairy/mipt-ctf) ![GitHub last commit](https://img.shields.io/github/last-commit/xairy/mipt-ctf)](https://github.com/xairy/mipt-ctf) - A small course for beginners in CTFs (in Russian).


## Wargames

*Always online CTFs*

- [Backdoor](https://backdoor.sdslabs.co/) - Security Platform by SDSLabs.
- [Crackmes](https://crackmes.one/) - Reverse Engineering Challenges.
- [CryptoHack](https://cryptohack.org/) - Fun cryptography challenges.
- [echoCTF.RED](https://echoctf.red/) - Online CTF with a variety of targets to attack.
- [Exploit Exercises](https://exploit-exercises.lains.space/) - Variety of VMs to learn variety of computer security issues.
- [Exploit.Education](http://exploit.education) - Variety of VMs to learn variety of computer security issues.
- [Gracker ![GitHub Repo Stars](https://img.shields.io/github/stars/Samuirai/gracker) ![GitHub last commit](https://img.shields.io/github/last-commit/Samuirai/gracker)](https://github.com/Samuirai/gracker) - Binary challenges having a slow learning curve, and write-ups for each level.
- [Hack The Box](https://www.hackthebox.eu) - Weekly CTFs for all types of security enthusiasts.
- [Hack This Site](https://www.hackthissite.org/) - Training ground for hackers.
- [Hacker101](https://www.hacker101.com/) - CTF from HackerOne
- [Hacking-Lab](https://hacking-lab.com/) - Ethical hacking, computer network and security challenge platform.
- [Hone Your Ninja Skills](https://honeyourskills.ninja/) - Web challenges starting from basic ones.
- [IO](http://io.netgarage.org/) - Wargame for binary challenges.
- [Microcorruption](https://microcorruption.com) - Embedded security CTF.
- [Over The Wire](http://overthewire.org/wargames/) - Wargame maintained by OvertheWire Community.
- [PentesterLab](https://pentesterlab.com/) - Variety of VM and online challenges (paid).
- [PicoCTF](https://2019game.picoctf.com) - All year round ctf game. Questions from the yearly picoCTF competition.
- [PWN Challenge](http://pwn.eonew.cn/) - Binary Exploitation Wargame.
- [Pwnable.kr](http://pwnable.kr/) - Pwn Game.
- [Pwnable.tw](https://pwnable.tw/) - Binary wargame.
- [Pwnable.xyz](https://pwnable.xyz/) - Binary Exploitation Wargame.
- [Reversin.kr](http://reversing.kr/) - Reversing challenge.
- [Ringzer0Team](https://ringzer0team.com/) - Ringzer0 Team Online CTF.
- [Root-Me](https://www.root-me.org/) - Hacking and Information Security learning platform.
- [ROP Wargames ![GitHub Repo Stars](https://img.shields.io/github/stars/xelenonz/game) ![GitHub last commit](https://img.shields.io/github/last-commit/xelenonz/game)](https://github.com/xelenonz/game) - ROP Wargames.
- [SANS HHC](https://holidayhackchallenge.com/past-challenges/) - Challenges with a holiday theme
  released annually and maintained by SANS.
- [SmashTheStack](http://smashthestack.org/) - A variety of wargames maintained by the SmashTheStack Community.
- [Viblo CTF](https://ctf.viblo.asia) - Various amazing CTF challenges, in many different categories. Has both Practice mode and Contest mode.
- [VulnHub](https://www.vulnhub.com/) - VM-based for practical in digital security, computer application & network administration.
- [W3Challs](https://w3challs.com) - A penetration testing training platform, which offers various computer challenges, in various categories.
- [WebHacking](http://webhacking.kr) - Hacking challenges for web.


*Self-hosted CTFs*
- [Damn Vulnerable Web Application](http://www.dvwa.co.uk/) - PHP/MySQL web application that is damn vulnerable.
- [Juice Shop CTF ![GitHub Repo Stars](https://img.shields.io/github/stars/bkimminich/juice-shop-ctf) ![GitHub last commit](https://img.shields.io/github/last-commit/bkimminich/juice-shop-ctf)](https://github.com/bkimminich/juice-shop-ctf) - Scripts and tools for hosting a CTF on [OWASP Juice Shop](https://www.owasp.org/index.php/OWASP_Juice_Shop_Project) easily.

## Websites

*Various general websites about and on CTF*

- [Awesome CTF Cheatsheet ![GitHub Repo Stars](https://img.shields.io/github/stars/uppusaikiran/awesome-ctf-cheatsheet) ![GitHub last commit](https://img.shields.io/github/last-commit/uppusaikiran/awesome-ctf-cheatsheet)](https://github.com/uppusaikiran/awesome-ctf-cheatsheet#awesome-ctf-cheatsheet-) - CTF Cheatsheet.
- [CTF Time](https://ctftime.org/) - General information on CTF occuring around the worlds.
- [Reddit Security CTF](http://www.reddit.com/r/securityctf) - Reddit CTF category.

## Wikis

*Various Wikis available for learning about CTFs*

- [Bamboofox](https://bamboofox.github.io/) - Chinese resources to learn CTF.
- [bi0s Wiki](https://teambi0s.gitlab.io/bi0s-wiki/) - Wiki from team bi0s.
- [CTF Cheatsheet](https://uppusaikiran.github.io/hacking/Capture-the-Flag-CheatSheet/) - CTF tips and tricks.
- [ISIS Lab ![GitHub Repo Stars](https://img.shields.io/github/stars/isislab/Project-Ideas) ![GitHub last commit](https://img.shields.io/github/last-commit/isislab/Project-Ideas)](https://github.com/isislab/Project-Ideas/wiki) - CTF Wiki by Isis lab.
- [OpenToAll ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenToAllCTF/Tips) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenToAllCTF/Tips)](https://github.com/OpenToAllCTF/Tips) - CTF tips by OTA CTF team members.

## Writeups Collections

*Collections of CTF write-ups*

- [0e85dc6eaf ![GitHub Repo Stars](https://img.shields.io/github/stars/0e85dc6eaf/CTF-Writeups) ![GitHub last commit](https://img.shields.io/github/last-commit/0e85dc6eaf/CTF-Writeups)](https://github.com/0e85dc6eaf/CTF-Writeups) - Write-ups for CTF challenges by 0e85dc6eaf
- [Captf](http://captf.com/) - Dumped CTF challenges and materials by psifertex.
- [CTF write-ups (community)](https://github.com/ctfs/) - CTF challenges + write-ups archive maintained by the community.
- [CTFTime Scrapper ![GitHub Repo Stars](https://img.shields.io/github/stars/abdilahrf/CTFWriteupScrapper) ![GitHub last commit](https://img.shields.io/github/last-commit/abdilahrf/CTFWriteupScrapper)](https://github.com/abdilahrf/CTFWriteupScrapper) - Scraps all writeup from CTF Time and organize which to read first.
- [HackThisSite ![GitHub Repo Stars](https://img.shields.io/github/stars/HackThisSite/CTF-Writeups) ![GitHub last commit](https://img.shields.io/github/last-commit/HackThisSite/CTF-Writeups)](https://github.com/HackThisSite/CTF-Writeups) - CTF write-ups repo maintained by HackThisSite team.
- [Mzfr ![GitHub Repo Stars](https://img.shields.io/github/stars/mzfr/ctf-writeups) ![GitHub last commit](https://img.shields.io/github/last-commit/mzfr/ctf-writeups)](https://github.com/mzfr/ctf-writeups/) - CTF competition write-ups by mzfr
- [pwntools writeups ![GitHub Repo Stars](https://img.shields.io/github/stars/Gallopsled/pwntools-write-ups) ![GitHub last commit](https://img.shields.io/github/last-commit/Gallopsled/pwntools-write-ups)](https://github.com/Gallopsled/pwntools-write-ups) - A collection of CTF write-ups all using pwntools.
- [SababaSec ![GitHub Repo Stars](https://img.shields.io/github/stars/SababaSec/ctf-writeups) ![GitHub last commit](https://img.shields.io/github/last-commit/SababaSec/ctf-writeups)](https://github.com/SababaSec/ctf-writeups) - A collection of CTF write-ups by the SababaSec team
- [Shell Storm](http://shell-storm.org/repo/CTF/) - CTF challenge archive maintained by Jonathan Salwan.
- [Smoke Leet Everyday ![GitHub Repo Stars](https://img.shields.io/github/stars/smokeleeteveryday/CTF_WRITEUPS) ![GitHub last commit](https://img.shields.io/github/last-commit/smokeleeteveryday/CTF_WRITEUPS)](https://github.com/smokeleeteveryday/CTF_WRITEUPS) - CTF write-ups repo maintained by SmokeLeetEveryday team.

### LICENSE

CC0 :)
