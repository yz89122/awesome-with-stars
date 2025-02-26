# android-security-awesome ![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)

[![Link Liveness Checker ![GitHub Repo Stars](https://img.shields.io/github/stars/ashishb/android-security-awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/ashishb/android-security-awesome)](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/validate-links.yml)

[![Lint Shell scripts ![GitHub Repo Stars](https://img.shields.io/github/stars/ashishb/android-security-awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/ashishb/android-security-awesome)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-shell-script.yaml)
[![Lint Markdown ![GitHub Repo Stars](https://img.shields.io/github/stars/ashishb/android-security-awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/ashishb/android-security-awesome)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-markdown.yaml)
[![Lint YAML ![GitHub Repo Stars](https://img.shields.io/github/stars/ashishb/android-security-awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/ashishb/android-security-awesome)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-yaml.yaml)
[![Lint GitHub Actions ![GitHub Repo Stars](https://img.shields.io/github/stars/ashishb/android-security-awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/ashishb/android-security-awesome)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml/badge.svg)](https://github.com/ashishb/android-security-awesome/actions/workflows/lint-github-actions.yaml)

A collection of Android security-related resources.

1. [Tools](#tools)
1. [Academic/Research/Publications/Books](#academic)
1. [Exploits/Vulnerabilities/Bugs](#exploits)

## Tools

### Online Analyzers

1. [AndroTotal](http://andrototal.org/)
1. [Appknox](https://www.appknox.com/) - not free
1. [Virustotal](https://www.virustotal.com/) - max 128MB
1. [Fraunhofer App-ray](http://app-ray.co/) - not free
1. [NowSecure Lab Automated](https://www.nowsecure.com/blog/2016/09/19/announcing-nowsecure-lab-automated/) - Enterprise tool for mobile app security testing both Android and iOS mobile apps. Lab Automated features dynamic and static analysis on real devices in the cloud to return results in minutes. Not free
1. [App Detonator](https://appdetonator.run/) - Detonate APK binary to provide source code level details including app author, signature, build, and manifest information. 3 Analysis/day free quota.
1. [Pithus](https://beta.pithus.org/) - Open-Source APK analyzer. Still in Beta for the moment and limited to static analysis for the moment. It is possible to hunt malware with Yara rules. More [here](https://beta.pithus.org/about/).
1. [Oversecured](https://oversecured.com/) - Enterprise vulnerability scanner for Android and iOS apps, it offers app owners and developers the ability to secure each new version of a mobile app by integrating Oversecured into the development process. Not free.
1. [AppSweep by Guardsquare](https://appsweep.guardsquare.com/) - Free, fast Android application security testing for developers
1. [Koodous](https://koodous.com) - Performs static/dynamic malware analysis over a vast repository of Android samples and checks them against public and private Yara rules.
1. [Immuniweb](https://www.immuniweb.com/mobile/). Does an "OWASP Mobile Top 10 Test", "Mobile App Privacy Check" and an application permissions test. The free tier is 4 tests per day incl. report after registration
1. ~~[BitBaan](https://malab.bitbaan.com/)~~
1. ~~[AVC UnDroid](http://undroid.av-comparatives.info/)~~
1. ~~[AMAaaS](https://amaaas.com) - Free Android Malware Analysis Service. A bare-metal service features static and dynamic analysis for Android applications. A product of [MalwarePot](https://malwarepot.com/index.php/AMAaaS)~~.
1. ~~[AppCritique](https://appcritique.boozallen.com) - Upload your Android APKs and receive comprehensive free security assessments~~
1. ~~[NVISO ApkScan](https://apkscan.nviso.be/) - sunsetting on Oct 31, 2019~~
1. ~~[Mobile Malware Sandbox](http://www.mobilemalware.com.br/analysis/index_en.php)~~
1. ~~[IBM Security AppScan Mobile Analyzer](https://appscan.bluemix.net/mobileAnalyzer) - not free~~
1. ~~[Visual Threat](https://www.visualthreat.com/) - no longer an Android app analyzer~~
1. ~~[Tracedroid](http://tracedroid.few.vu.nl/)~~
1. ~~[habo](https://habo.qq.com/) - 10/day~~
1. ~~[CopperDroid](http://copperdroid.isg.rhul.ac.uk/copperdroid/)~~
1. ~~[SandDroid](http://sanddroid.xjtu.edu.cn/)~~
1. ~~[Stowaway](http://www.android-permissions.org/)~~
1. ~~[Anubis](http://anubis.iseclab.org/)~~
1. ~~[Mobile app insight](http://www.mobile-app-insight.org)~~
1. ~~[Mobile-Sandbox](http://mobile-sandbox.com)~~
1. ~~[Ijiami](http://safe.ijiami.cn/)~~
1. ~~[Comdroid](http://www.comdroid.org/)~~
1. ~~[Android Sandbox](http://www.androidsandbox.net/)~~
1. ~~[Foresafe](http://www.foresafe.com/scan)~~
1. ~~[Dexter](https://dexter.dexlabs.org/)~~
1. ~~[MobiSec Eacus](http://www.mobiseclab.org/eacus.jsp)~~
1. ~~[Fireeye](https://fireeye.ijinshan.com/)- max 60MB 15/day~~
1. ~~[approver](https://approver.talos-sec.com/) - Approver  is a fully automated security analysis and risk assessment platform for Android and iOS apps. Not free.~~

### Static Analysis Tools

1. [Androwarn ![GitHub Repo Stars](https://img.shields.io/github/stars/maaaaz/androwarn) ![GitHub last commit](https://img.shields.io/github/last-commit/maaaaz/androwarn)](https://github.com/maaaaz/androwarn/) - detect and warn the user about potential malicious behaviors developed by an Android application.
1. [ApkAnalyser ![GitHub Repo Stars](https://img.shields.io/github/stars/sonyxperiadev/ApkAnalyser) ![GitHub last commit](https://img.shields.io/github/last-commit/sonyxperiadev/ApkAnalyser)](https://github.com/sonyxperiadev/ApkAnalyser)
1. [APKInspector ![GitHub Repo Stars](https://img.shields.io/github/stars/honeynet/apkinspector) ![GitHub last commit](https://img.shields.io/github/last-commit/honeynet/apkinspector)](https://github.com/honeynet/apkinspector/)
1. [Droid Intent Data Flow Analysis for Information Leakage](https://insights.sei.cmu.edu/library/didfail/)
1. [DroidLegacy](https://bitbucket.org/srl/droidlegacy)
1. [FlowDroid](https://blogs.uni-paderborn.de/sse/tools/flowdroid/)
1. [Android Decompiler](https://www.pnfsoftware.com/) – not free
1. [PSCout](https://security.csl.toronto.edu/pscout/) - A tool that extracts the permission specification from the Android OS source code using static analysis
1. [Amandroid](http://amandroid.sireum.org/)
1. [SmaliSCA ![GitHub Repo Stars](https://img.shields.io/github/stars/dorneanu/smalisca) ![GitHub last commit](https://img.shields.io/github/last-commit/dorneanu/smalisca)](https://github.com/dorneanu/smalisca) - Smali Static Code Analysis
1. [CFGScanDroid ![GitHub Repo Stars](https://img.shields.io/github/stars/douggard/CFGScanDroid) ![GitHub last commit](https://img.shields.io/github/last-commit/douggard/CFGScanDroid)](https://github.com/douggard/CFGScanDroid) - Scans and compares CFG against CFG of malicious applications
1. [Madrolyzer ![GitHub Repo Stars](https://img.shields.io/github/stars/maldroid/maldrolyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/maldroid/maldrolyzer)](https://github.com/maldroid/maldrolyzer) - extracts actionable data like C&C, phone number etc.
1. [ConDroid ![GitHub Repo Stars](https://img.shields.io/github/stars/JulianSchuette/ConDroid) ![GitHub last commit](https://img.shields.io/github/last-commit/JulianSchuette/ConDroid)](https://github.com/JulianSchuette/ConDroid) - Performs a combination of symbolic + concrete execution of the app
1. [DroidRA ![GitHub Repo Stars](https://img.shields.io/github/stars/serval-snt-uni-lu/DroidRA) ![GitHub last commit](https://img.shields.io/github/last-commit/serval-snt-uni-lu/DroidRA)](https://github.com/serval-snt-uni-lu/DroidRA)
1. [RiskInDroid ![GitHub Repo Stars](https://img.shields.io/github/stars/ClaudiuGeorgiu/RiskInDroid) ![GitHub last commit](https://img.shields.io/github/last-commit/ClaudiuGeorgiu/RiskInDroid)](https://github.com/ClaudiuGeorgiu/RiskInDroid) - A tool for calculating the risk of Android apps based on their permissions, with an online demo available.
1. [SUPER ![GitHub Repo Stars](https://img.shields.io/github/stars/SUPERAndroidAnalyzer/super) ![GitHub last commit](https://img.shields.io/github/last-commit/SUPERAndroidAnalyzer/super)](https://github.com/SUPERAndroidAnalyzer/super) - Secure, Unified, Powerful and Extensible Rust Android Analyzer
1. [ClassyShark ![GitHub Repo Stars](https://img.shields.io/github/stars/google/android-classyshark) ![GitHub last commit](https://img.shields.io/github/last-commit/google/android-classyshark)](https://github.com/google/android-classyshark) - Standalone binary inspection tool that can browse any Android executable and show important info.
1. [StaCoAn ![GitHub Repo Stars](https://img.shields.io/github/stars/vincentcox/StaCoAn) ![GitHub last commit](https://img.shields.io/github/last-commit/vincentcox/StaCoAn)](https://github.com/vincentcox/StaCoAn) - Cross-platform tool that aids developers, bug-bounty hunters, and ethical hackers in performing static code analysis on mobile applications. This tool was created with a big focus on usability and graphical guidance in the user interface.
1. [JAADAS ![GitHub Repo Stars](https://img.shields.io/github/stars/flankerhqd/JAADAS) ![GitHub last commit](https://img.shields.io/github/last-commit/flankerhqd/JAADAS)](https://github.com/flankerhqd/JAADAS) - Joint intraprocedural and interprocedural program analysis tool to find vulnerabilities in Android apps, built on Soot and Scala
1. [Quark-Engine ![GitHub Repo Stars](https://img.shields.io/github/stars/quark-engine/quark-engine) ![GitHub last commit](https://img.shields.io/github/last-commit/quark-engine/quark-engine)](https://github.com/quark-engine/quark-engine) - An Obfuscation-Neglect Android Malware Scoring System
1. [One Step Decompiler ![GitHub Repo Stars](https://img.shields.io/github/stars/b-mueller/apkx) ![GitHub last commit](https://img.shields.io/github/last-commit/b-mueller/apkx)](https://github.com/b-mueller/apkx) - Android APK Decompilation for the Lazy
1. [APKLeaks ![GitHub Repo Stars](https://img.shields.io/github/stars/dwisiswant0/apkleaks) ![GitHub last commit](https://img.shields.io/github/last-commit/dwisiswant0/apkleaks)](https://github.com/dwisiswant0/apkleaks) - Scanning APK file for URIs, endpoints & secrets.
1. [Mobile Audit ![GitHub Repo Stars](https://img.shields.io/github/stars/mpast/mobileAudit) ![GitHub last commit](https://img.shields.io/github/last-commit/mpast/mobileAudit)](https://github.com/mpast/mobileAudit) - Web application for performing Static Analysis and detecting malware in Android APKs.
1. ~~[Smali CFG generator ![GitHub Repo Stars](https://img.shields.io/github/stars/EugenioDelfa/Smali-CFGs) ![GitHub last commit](https://img.shields.io/github/last-commit/EugenioDelfa/Smali-CFGs)](https://github.com/EugenioDelfa/Smali-CFGs)~~
1. ~~[Several tools from PSU](http://siis.cse.psu.edu/tools.html)~~
1. ~~[SPARTA](https://www.cs.washington.edu/sparta) - verifies (proves) that an app satisfies an information-flow security policy; built on the [Checker Framework](https://types.cs.washington.edu/checker-framework/)~~

### App Vulnerability Scanners

1. [QARK ![GitHub Repo Stars](https://img.shields.io/github/stars/linkedin/qark) ![GitHub last commit](https://img.shields.io/github/last-commit/linkedin/qark)](https://github.com/linkedin/qark/) - QARK by LinkedIn is for app developers to scan apps for security issues
1. [AndroBugs ![GitHub Repo Stars](https://img.shields.io/github/stars/AndroBugs/AndroBugs_Framework) ![GitHub last commit](https://img.shields.io/github/last-commit/AndroBugs/AndroBugs_Framework)](https://github.com/AndroBugs/AndroBugs_Framework)
1. [Nogotofail ![GitHub Repo Stars](https://img.shields.io/github/stars/google/nogotofail) ![GitHub last commit](https://img.shields.io/github/last-commit/google/nogotofail)](https://github.com/google/nogotofail)
1. ~~[Devknox](https://devknox.io/) - IDE plugin to build secure Android apps. Not maintained anymore.~~

### Dynamic Analysis Tools

1. [Android DBI frameowork](http://www.mulliner.org/blog/blosxom.cgi/security/androiddbiv02.html)
1. [Androl4b ![GitHub Repo Stars](https://img.shields.io/github/stars/sh4hin/Androl4b) ![GitHub last commit](https://img.shields.io/github/last-commit/sh4hin/Androl4b)](https://github.com/sh4hin/Androl4b)- A Virtual Machine For Assessing Android applications, Reverse Engineering and Malware Analysis
1. [House ![GitHub Repo Stars](https://img.shields.io/github/stars/nccgroup/house) ![GitHub last commit](https://img.shields.io/github/last-commit/nccgroup/house)](https://github.com/nccgroup/house)- House: A runtime mobile application analysis toolkit with a Web GUI, powered by Frida, written in Python.
1. [Mobile-Security-Framework MobSF ![GitHub Repo Stars](https://img.shields.io/github/stars/MobSF/Mobile-Security-Framework-MobSF) ![GitHub last commit](https://img.shields.io/github/last-commit/MobSF/Mobile-Security-Framework-MobSF)](https://github.com/MobSF/Mobile-Security-Framework-MobSF) - Mobile Security Framework is an intelligent, all-in-one open-source mobile application (Android/iOS) automated pen-testing framework capable of performing static, dynamic analysis and web API testing.
1. [AppUse](https://appsec-labs.com/AppUse/) – custom build for penetration testing
1. [Droidbox ![GitHub Repo Stars](https://img.shields.io/github/stars/pjlantz/droidbox) ![GitHub last commit](https://img.shields.io/github/last-commit/pjlantz/droidbox)](https://github.com/pjlantz/droidbox)
1. [Drozer ![GitHub Repo Stars](https://img.shields.io/github/stars/mwrlabs/drozer) ![GitHub last commit](https://img.shields.io/github/last-commit/mwrlabs/drozer)](https://github.com/mwrlabs/drozer)
1. [Xposed](https://forum.xda-developers.com/xposed/xposed-installer-versions-changelog-t2714053) - equivalent of doing Stub-based code injection but without any modifications to the binary
1. [Inspeckage ![GitHub Repo Stars](https://img.shields.io/github/stars/ac-pm/Inspeckage) ![GitHub last commit](https://img.shields.io/github/last-commit/ac-pm/Inspeckage)](https://github.com/ac-pm/Inspeckage) - Android Package Inspector - dynamic analysis with API hooks, start unexported activities, and more. (Xposed Module)
1. [Android Hooker ![GitHub Repo Stars](https://img.shields.io/github/stars/AndroidHooker/hooker) ![GitHub last commit](https://img.shields.io/github/last-commit/AndroidHooker/hooker)](https://github.com/AndroidHooker/hooker) - Dynamic Java code instrumentation (requires the Substrate Framework)
1. [ProbeDroid ![GitHub Repo Stars](https://img.shields.io/github/stars/ZSShen/ProbeDroid) ![GitHub last commit](https://img.shields.io/github/last-commit/ZSShen/ProbeDroid)](https://github.com/ZSShen/ProbeDroid) - Dynamic Java code instrumentation
1. [DECAF ![GitHub Repo Stars](https://img.shields.io/github/stars/sycurelab/DECAF) ![GitHub last commit](https://img.shields.io/github/last-commit/sycurelab/DECAF)](https://github.com/sycurelab/DECAF) - Dynamic Executable Code Analysis Framework based on QEMU (DroidScope is now an extension to DECAF)
1. [CuckooDroid ![GitHub Repo Stars](https://img.shields.io/github/stars/idanr1986/cuckoo-droid) ![GitHub last commit](https://img.shields.io/github/last-commit/idanr1986/cuckoo-droid)](https://github.com/idanr1986/cuckoo-droid) - Android extension for Cuckoo sandbox
1. [Mem ![GitHub Repo Stars](https://img.shields.io/github/stars/MobileForensicsResearch/mem) ![GitHub last commit](https://img.shields.io/github/last-commit/MobileForensicsResearch/mem)](https://github.com/MobileForensicsResearch/mem) - Memory analysis of Android (root required)
1. [Crowdroid](http://www.ida.liu.se/labs/rtslab/publications/2011/spsm11-burguera.pdf) – unable to find the actual tool
1. [AuditdAndroid ![GitHub Repo Stars](https://img.shields.io/github/stars/nwhusted/AuditdAndroid) ![GitHub last commit](https://img.shields.io/github/last-commit/nwhusted/AuditdAndroid)](https://github.com/nwhusted/AuditdAndroid) – android port of auditd, not under active development anymore
1. [Android Security Evaluation Framework](https://code.google.com/p/asef/) - not under active development anymore
1. [Aurasium ![GitHub Repo Stars](https://img.shields.io/github/stars/xurubin/aurasium) ![GitHub last commit](https://img.shields.io/github/last-commit/xurubin/aurasium)](https://github.com/xurubin/aurasium) – Practical security policy enforcement for Android apps via bytecode rewriting and in-place reference monitor.
1. [Android Linux Kernel modules ![GitHub Repo Stars](https://img.shields.io/github/stars/strazzere/android-lkms) ![GitHub last commit](https://img.shields.io/github/last-commit/strazzere/android-lkms)](https://github.com/strazzere/android-lkms)
1. [StaDynA ![GitHub Repo Stars](https://img.shields.io/github/stars/zyrikby/StaDynA) ![GitHub last commit](https://img.shields.io/github/last-commit/zyrikby/StaDynA)](https://github.com/zyrikby/StaDynA) - a system supporting security app analysis in the presence of dynamic code update features (dynamic class loading and reflection). This tool combines static and dynamic analysis of Android applications in order to reveal the hidden/updated behavior and extend static analysis results with this information.
1. [DroidAnalytics ![GitHub Repo Stars](https://img.shields.io/github/stars/zhengmin1989/DroidAnalytics) ![GitHub last commit](https://img.shields.io/github/last-commit/zhengmin1989/DroidAnalytics)](https://github.com/zhengmin1989/DroidAnalytics) - incomplete
1. [Vezir Project ![GitHub Repo Stars](https://img.shields.io/github/stars/oguzhantopgul/Vezir-Project) ![GitHub last commit](https://img.shields.io/github/last-commit/oguzhantopgul/Vezir-Project)](https://github.com/oguzhantopgul/Vezir-Project) - Virtual Machine for Mobile Application Pentesting and Mobile Malware Analysis
1. [MARA ![GitHub Repo Stars](https://img.shields.io/github/stars/xtiankisutsa/MARA_Framework) ![GitHub last commit](https://img.shields.io/github/last-commit/xtiankisutsa/MARA_Framework)](https://github.com/xtiankisutsa/MARA_Framework) - Mobile Application Reverse Engineering and Analysis Framework
1. [Taintdroid](http://appanalysis.org) - requires AOSP compilation
1. [ARTist](https://artist.cispa.saarland) - a flexible open-source instrumentation and hybrid analysis framework for Android apps and Android's Java middleware. It is based on the Android Runtime's (ART) compiler and modifies code during on-device compilation.
1. [Android Malware Sandbox ![GitHub Repo Stars](https://img.shields.io/github/stars/Areizen/Android-Malware-Sandbox) ![GitHub last commit](https://img.shields.io/github/last-commit/Areizen/Android-Malware-Sandbox)](https://github.com/Areizen/Android-Malware-Sandbox)
1. [AndroPyTool ![GitHub Repo Stars](https://img.shields.io/github/stars/alexMyG/AndroPyTool) ![GitHub last commit](https://img.shields.io/github/last-commit/alexMyG/AndroPyTool)](https://github.com/alexMyG/AndroPyTool) - a tool for extracting static and dynamic features from Android APKs. It combines different well-known Android app analysis tools such as DroidBox, FlowDroid, Strace, AndroGuard, or VirusTotal analysis.
1. [Runtime Mobile Security (RMS) ![GitHub Repo Stars](https://img.shields.io/github/stars/m0bilesecurity/RMS-Runtime-Mobile-Security) ![GitHub last commit](https://img.shields.io/github/last-commit/m0bilesecurity/RMS-Runtime-Mobile-Security)](https://github.com/m0bilesecurity/RMS-Runtime-Mobile-Security) - is a powerful web interface that helps you to manipulate Android and iOS Apps at Runtime
1. [PAPIMonitor ![GitHub Repo Stars](https://img.shields.io/github/stars/Dado1513/PAPIMonitor) ![GitHub last commit](https://img.shields.io/github/last-commit/Dado1513/PAPIMonitor)](https://github.com/Dado1513/PAPIMonitor) – PAPIMonitor (Python API Monitor for Android apps) is a Python tool based on Frida for monitoring user-select APIs during the app execution.
1. [Android_application_analyzer ![GitHub Repo Stars](https://img.shields.io/github/stars/NotSoSecure/android_application_analyzer) ![GitHub last commit](https://img.shields.io/github/last-commit/NotSoSecure/android_application_analyzer)](https://github.com/NotSoSecure/android_application_analyzer) - The tool is used to analyze the content of the Android application in local storage.
1. [Decompiler.com](https://www.decompiler.com/) - Online APK and Java decompiler
1. [friTap ![GitHub Repo Stars](https://img.shields.io/github/stars/fkie-cad/friTap) ![GitHub last commit](https://img.shields.io/github/last-commit/fkie-cad/friTap)](https://github.com/fkie-cad/friTap)- - Intercept SSL/TLS connections with Frida; Allows TLS key extraction and decryption of TLS payload as PCAP on Android in real-time.
1. ~~[Appie](https://manifestsecurity.com/appie/) - Appie is a software package that has been pre-configured to function as an Android Pentesting Environment. It is completely portable and can be carried on a USB stick or smartphone. This is a one-stop answer for all the tools needed in Android Application Security Assessment and an awesome alternative to existing virtual machines.~~
1. ~~[Android Tamer](https://androidtamer.com/) - Virtual / Live Platform for Android Security Professionals~~
1. ~~[Android Malware Analysis Toolkit](http://www.mobilemalware.com.br/amat/download.html) - (Linux distro) Earlier it use to be an [online analyzer](http://dunkelheit.com.br/amat/analysis/index_en.php)~~
1. ~~[Android Reverse Engineering](https://redmine.honeynet.org/projects/are/wiki) – ARE (android reverse engineering) not under active development anymore~~
1. ~~[ViaLab Community Edition](https://www.nowsecure.com/blog/2014/09/09/introducing-vialab-community-edition/)~~
1. ~~[Mercury](https://labs.mwrinfosecurity.com/tools/2012/03/16/mercury/)~~
1. ~~[Cobradroid](https://thecobraden.com/projects/cobradroid/) – custom image for malware analysis~~

### Reverse Engineering

1. [Smali/Baksmali ![GitHub Repo Stars](https://img.shields.io/github/stars/JesusFreke/smali) ![GitHub last commit](https://img.shields.io/github/last-commit/JesusFreke/smali)](https://github.com/JesusFreke/smali) – apk decompilation
1. [emacs syntax coloring for smali files ![GitHub Repo Stars](https://img.shields.io/github/stars/strazzere/Emacs-Smali) ![GitHub last commit](https://img.shields.io/github/last-commit/strazzere/Emacs-Smali)](https://github.com/strazzere/Emacs-Smali)
1. [vim syntax coloring for smali files](http://codetastrophe.com/smali.vim)
1. [AndBug ![GitHub Repo Stars](https://img.shields.io/github/stars/swdunlop/AndBug) ![GitHub last commit](https://img.shields.io/github/last-commit/swdunlop/AndBug)](https://github.com/swdunlop/AndBug)
1. [Androguard ![GitHub Repo Stars](https://img.shields.io/github/stars/androguard/androguard) ![GitHub last commit](https://img.shields.io/github/last-commit/androguard/androguard)](https://github.com/androguard/androguard) – powerful, integrates well with other tools
1. [Apktool](https://ibotpeaches.github.io/Apktool/) – really useful for compilation/decompilation (uses smali)
1. [Android Framework for Exploitation ![GitHub Repo Stars](https://img.shields.io/github/stars/appknox/AFE) ![GitHub last commit](https://img.shields.io/github/last-commit/appknox/AFE)](https://github.com/appknox/AFE)
1. [Bypass signature and permission checks for IPCs ![GitHub Repo Stars](https://img.shields.io/github/stars/iSECPartners/Android-KillPermAndSigChecks) ![GitHub last commit](https://img.shields.io/github/last-commit/iSECPartners/Android-KillPermAndSigChecks)](https://github.com/iSECPartners/Android-KillPermAndSigChecks)
1. [Android OpenDebug ![GitHub Repo Stars](https://img.shields.io/github/stars/iSECPartners/Android-OpenDebug) ![GitHub last commit](https://img.shields.io/github/last-commit/iSECPartners/Android-OpenDebug)](https://github.com/iSECPartners/Android-OpenDebug) – make any application on the device debuggable (using cydia substrate).
1. [Dex2Jar ![GitHub Repo Stars](https://img.shields.io/github/stars/pxb1988/dex2jar) ![GitHub last commit](https://img.shields.io/github/last-commit/pxb1988/dex2jar)](https://github.com/pxb1988/dex2jar) - dex to jar converter
1. [Enjarify ![GitHub Repo Stars](https://img.shields.io/github/stars/google/enjarify) ![GitHub last commit](https://img.shields.io/github/last-commit/google/enjarify)](https://github.com/google/enjarify) - dex to jar converter from Google
1. [Dedexer](https://sourceforge.net/projects/dedexer/)
1. [Fino ![GitHub Repo Stars](https://img.shields.io/github/stars/sysdream/fino) ![GitHub last commit](https://img.shields.io/github/last-commit/sysdream/fino)](https://github.com/sysdream/fino)
1. [Frida](https://www.frida.re/) - inject javascript to explore applications and a [GUI tool ![GitHub Repo Stars](https://img.shields.io/github/stars/antojoseph/diff-gui) ![GitHub last commit](https://img.shields.io/github/last-commit/antojoseph/diff-gui)](https://github.com/antojoseph/diff-gui) for it
1. [Indroid](https://bitbucket.org/aseemjakhar/indroid) – thread injection kit
1. [IntentSniffer](https://www.nccgroup.com/us/our-research/intent-sniffer/)
1. [Introspy ![GitHub Repo Stars](https://img.shields.io/github/stars/iSECPartners/Introspy-Android) ![GitHub last commit](https://img.shields.io/github/last-commit/iSECPartners/Introspy-Android)](https://github.com/iSECPartners/Introspy-Android)
1. [Jad]( https://varaneckas.com/jad/) - Java decompiler
1. [JD-GUI ![GitHub Repo Stars](https://img.shields.io/github/stars/java-decompiler/jd-gui) ![GitHub last commit](https://img.shields.io/github/last-commit/java-decompiler/jd-gui)](https://github.com/java-decompiler/jd-gui) - Java decompiler
1. [CFR](http://www.benf.org/other/cfr/) - Java decompiler
1. [Krakatau ![GitHub Repo Stars](https://img.shields.io/github/stars/Storyyeller/Krakatau) ![GitHub last commit](https://img.shields.io/github/last-commit/Storyyeller/Krakatau)](https://github.com/Storyyeller/Krakatau) - Java decompiler
1. [FernFlower ![GitHub Repo Stars](https://img.shields.io/github/stars/fesh0r/fernflower) ![GitHub last commit](https://img.shields.io/github/last-commit/fesh0r/fernflower)](https://github.com/fesh0r/fernflower) - Java decompiler
1. [Redexer ![GitHub Repo Stars](https://img.shields.io/github/stars/plum-umd/redexer) ![GitHub last commit](https://img.shields.io/github/last-commit/plum-umd/redexer)](https://github.com/plum-umd/redexer) – apk manipulation
1. [Simplify Android deobfuscator ![GitHub Repo Stars](https://img.shields.io/github/stars/CalebFenton/simplify) ![GitHub last commit](https://img.shields.io/github/last-commit/CalebFenton/simplify)](https://github.com/CalebFenton/simplify)
1. [Bytecode viewer ![GitHub Repo Stars](https://img.shields.io/github/stars/Konloch/bytecode-viewer) ![GitHub last commit](https://img.shields.io/github/last-commit/Konloch/bytecode-viewer)](https://github.com/Konloch/bytecode-viewer)
1. [Radare2 ![GitHub Repo Stars](https://img.shields.io/github/stars/radare/radare2) ![GitHub last commit](https://img.shields.io/github/last-commit/radare/radare2)](https://github.com/radare/radare2)
1. [Jadx ![GitHub Repo Stars](https://img.shields.io/github/stars/skylot/jadx) ![GitHub last commit](https://img.shields.io/github/last-commit/skylot/jadx)](https://github.com/skylot/jadx)
1. [Dwarf ![GitHub Repo Stars](https://img.shields.io/github/stars/iGio90/Dwarf) ![GitHub last commit](https://img.shields.io/github/last-commit/iGio90/Dwarf)](https://github.com/iGio90/Dwarf) - GUI for reverse engineering
1. [Andromeda ![GitHub Repo Stars](https://img.shields.io/github/stars/secrary/Andromeda) ![GitHub last commit](https://img.shields.io/github/last-commit/secrary/Andromeda)](https://github.com/secrary/Andromeda) - Another basic command-line reverse engineering tool
1. [apk-mitm ![GitHub Repo Stars](https://img.shields.io/github/stars/shroudedcode/apk-mitm) ![GitHub last commit](https://img.shields.io/github/last-commit/shroudedcode/apk-mitm)](https://github.com/shroudedcode/apk-mitm) - A CLI application that prepares Android APK files for HTTPS inspection
1. [Noia ![GitHub Repo Stars](https://img.shields.io/github/stars/0x742/noia) ![GitHub last commit](https://img.shields.io/github/last-commit/0x742/noia)](https://github.com/0x742/noia) - Simple Android application sandbox file browser tool
1. [Obfuscapk ![GitHub Repo Stars](https://img.shields.io/github/stars/ClaudiuGeorgiu/Obfuscapk) ![GitHub last commit](https://img.shields.io/github/last-commit/ClaudiuGeorgiu/Obfuscapk)](https://github.com/ClaudiuGeorgiu/Obfuscapk) - Obfuscapk is a modular Python tool for obfuscating Android apps without needing their source code.
1. [ARMANDroid ![GitHub Repo Stars](https://img.shields.io/github/stars/Mobile-IoT-Security-Lab/ARMANDroid) ![GitHub last commit](https://img.shields.io/github/last-commit/Mobile-IoT-Security-Lab/ARMANDroid)](https://github.com/Mobile-IoT-Security-Lab/ARMANDroid) - ARMAND (Anti-Repackaging through Multi-patternAnti-tampering based on Native Detection) is a novel anti-tampering protection scheme that embeds logic bombs and AT detection nodes directly in the apk file without needing their source code.
1. [MVT (Mobile Verification Toolkit) ![GitHub Repo Stars](https://img.shields.io/github/stars/mvt-project/mvt) ![GitHub last commit](https://img.shields.io/github/last-commit/mvt-project/mvt)](https://github.com/mvt-project/mvt) - a collection of utilities to simplify and automate the process of gathering forensic traces helpful to identify a potential compromise of Android and iOS devices
1. [Dexmod ![GitHub Repo Stars](https://img.shields.io/github/stars/google/dexmod) ![GitHub last commit](https://img.shields.io/github/last-commit/google/dexmod)](https://github.com/google/dexmod) - tool to exemplify patching Dalvik bytecode in a DEX (Dalvik Executable) file, and assist in the static analysis of Android applications.
1. ~~[Procyon](https://bitbucket.org/mstrobel/procyon/wiki/Java%20Decompiler) - Java decompiler~~
1. ~~[Smali viewer](http://blog.avlyun.com/wp-content/uploads/2014/04/SmaliViewer.zip)~~
1. ~~[ZjDroid ![GitHub Repo Stars](https://img.shields.io/github/stars/BaiduSecurityLabs/ZjDroid) ![GitHub last commit](https://img.shields.io/github/last-commit/BaiduSecurityLabs/ZjDroid)](https://github.com/BaiduSecurityLabs/ZjDroid)~~, ~~[fork/mirror ![GitHub Repo Stars](https://img.shields.io/github/stars/yangbean9/ZjDroid) ![GitHub last commit](https://img.shields.io/github/last-commit/yangbean9/ZjDroid)](https://github.com/yangbean9/ZjDroid)~~
1. ~~[Dare](http://siis.cse.psu.edu/dare/index.html) – .dex to .class converter~~

### Fuzz Testing

1. [Radamsa Fuzzer ![GitHub Repo Stars](https://img.shields.io/github/stars/anestisb/radamsa-android) ![GitHub last commit](https://img.shields.io/github/last-commit/anestisb/radamsa-android)](https://github.com/anestisb/radamsa-android)
1. [Honggfuzz ![GitHub Repo Stars](https://img.shields.io/github/stars/google/honggfuzz) ![GitHub last commit](https://img.shields.io/github/last-commit/google/honggfuzz)](https://github.com/google/honggfuzz)
1. [An Android port of the Melkor ELF fuzzer ![GitHub Repo Stars](https://img.shields.io/github/stars/anestisb/melkor-android) ![GitHub last commit](https://img.shields.io/github/last-commit/anestisb/melkor-android)](https://github.com/anestisb/melkor-android)
1. [Media Fuzzing Framework for Android ![GitHub Repo Stars](https://img.shields.io/github/stars/fuzzing/MFFA) ![GitHub last commit](https://img.shields.io/github/last-commit/fuzzing/MFFA)](https://github.com/fuzzing/MFFA)
1. [AndroFuzz ![GitHub Repo Stars](https://img.shields.io/github/stars/jonmetz/AndroFuzz) ![GitHub last commit](https://img.shields.io/github/last-commit/jonmetz/AndroFuzz)](https://github.com/jonmetz/AndroFuzz)
1. [QuarksLab's Android Fuzzing ![GitHub Repo Stars](https://img.shields.io/github/stars/quarkslab/android-fuzzing) ![GitHub last commit](https://img.shields.io/github/last-commit/quarkslab/android-fuzzing)](https://github.com/quarkslab/android-fuzzing)
1. ~~[IntentFuzzer](https://www.nccgroup.trust/us/about-us/resources/intent-fuzzer/)~~

### App Repackaging Detectors

1. [FSquaDRA ![GitHub Repo Stars](https://img.shields.io/github/stars/zyrikby/FSquaDRA) ![GitHub last commit](https://img.shields.io/github/last-commit/zyrikby/FSquaDRA)](https://github.com/zyrikby/FSquaDRA) - a tool for detecting repackaged Android applications based on app resources hash comparison.

### Market Crawlers

1. [Google Play crawler (Java) ![GitHub Repo Stars](https://img.shields.io/github/stars/Akdeniz/google-play-crawler) ![GitHub last commit](https://img.shields.io/github/last-commit/Akdeniz/google-play-crawler)](https://github.com/Akdeniz/google-play-crawler)
1. [Google Play crawler (Python) ![GitHub Repo Stars](https://img.shields.io/github/stars/egirault/googleplay-api) ![GitHub last commit](https://img.shields.io/github/last-commit/egirault/googleplay-api)](https://github.com/egirault/googleplay-api)
1. [Google Play crawler (Node) ![GitHub Repo Stars](https://img.shields.io/github/stars/dweinstein/node-google-play) ![GitHub last commit](https://img.shields.io/github/last-commit/dweinstein/node-google-play)](https://github.com/dweinstein/node-google-play) - get app details and download apps from the official Google Play Store.
1. [Aptoide downloader (Node) ![GitHub Repo Stars](https://img.shields.io/github/stars/dweinstein/node-aptoide) ![GitHub last commit](https://img.shields.io/github/last-commit/dweinstein/node-aptoide)](https://github.com/dweinstein/node-aptoide) - download apps from Aptoide third-party Android market
1. [Appland downloader (Node) ![GitHub Repo Stars](https://img.shields.io/github/stars/dweinstein/node-appland) ![GitHub last commit](https://img.shields.io/github/last-commit/dweinstein/node-appland)](https://github.com/dweinstein/node-appland) - download apps from Appland third-party Android market
1. [PlaystoreDownloader ![GitHub Repo Stars](https://img.shields.io/github/stars/ClaudiuGeorgiu/PlaystoreDownloader) ![GitHub last commit](https://img.shields.io/github/last-commit/ClaudiuGeorgiu/PlaystoreDownloader)](https://github.com/ClaudiuGeorgiu/PlaystoreDownloader) - PlaystoreDownloader is a tool for downloading Android applications directly from the Google Play Store. After an initial (one-time) configuration, applications can be downloaded by specifying their package name.
1. [APK Downloader](https://apkcombo.com/apk-downloader/) Online Service to download APK from Playstore for specific Android Device Configuration
1. ~~[Apkpure](https://apkpure.com/) - Online apk downloader. Provides also its own app for downloading.~~

### Misc Tools

1. [smalihook](http://androidcracking.blogspot.com/2011/03/original-smalihook-java-source.html)
1. [AXMLPrinter2](http://code.google.com/p/android4me/downloads/detail?name=AXMLPrinter2.jar) - to convert binary XML files to human-readable XML files
1. [adb autocomplete ![GitHub Repo Stars](https://img.shields.io/github/stars/mbrubeck/android-completion) ![GitHub last commit](https://img.shields.io/github/last-commit/mbrubeck/android-completion)](https://github.com/mbrubeck/android-completion)
1. [mitmproxy ![GitHub Repo Stars](https://img.shields.io/github/stars/mitmproxy/mitmproxy) ![GitHub last commit](https://img.shields.io/github/last-commit/mitmproxy/mitmproxy)](https://github.com/mitmproxy/mitmproxy)
1. [dockerfile/androguard ![GitHub Repo Stars](https://img.shields.io/github/stars/dweinstein/dockerfile-androguard) ![GitHub last commit](https://img.shields.io/github/last-commit/dweinstein/dockerfile-androguard)](https://github.com/dweinstein/dockerfile-androguard)
1. [Android Vulnerability Test Suite ![GitHub Repo Stars](https://img.shields.io/github/stars/AndroidVTS/android-vts) ![GitHub last commit](https://img.shields.io/github/last-commit/AndroidVTS/android-vts)](https://github.com/AndroidVTS/android-vts) - android-vts scans a device for set of vulnerabilities
1. [AppMon ![GitHub Repo Stars](https://img.shields.io/github/stars/dpnishant/appmon) ![GitHub last commit](https://img.shields.io/github/last-commit/dpnishant/appmon)](https://github.com/dpnishant/appmon)- AppMon is an automated framework for monitoring and tampering with system API calls of native macOS, iOS, and Android apps. It is based on Frida.
1. [Internal Blue ![GitHub Repo Stars](https://img.shields.io/github/stars/seemoo-lab/internalblue) ![GitHub last commit](https://img.shields.io/github/last-commit/seemoo-lab/internalblue)](https://github.com/seemoo-lab/internalblue) - Bluetooth experimentation framework based on Reverse Engineering of Broadcom Bluetooth Controllers
1. [Android Mobile Device Hardening ![GitHub Repo Stars](https://img.shields.io/github/stars/SecTheTech/AMDH) ![GitHub last commit](https://img.shields.io/github/last-commit/SecTheTech/AMDH)](https://github.com/SecTheTech/AMDH) - AMDH scans and hardens the device's settings and lists harmful installed Apps based on permissions.
1. ~~[Android Device Security Database](https://www.android-device-security.org/client/datatable) - Database of security features of Android devices~~
1. ~~[Opcodes table for quick reference](http://ww38.xchg.info/corkami/opcodes_tables.pdf)~~
1. ~~[APK-Downloader](http://codekiem.com/2012/02/24/apk-downloader/)~~ - seems dead now
1. ~~[Dalvik opcodes](http://pallergabor.uw.hu/androidblog/dalvik_opcodes.html)~~

### Vulnerable Applications for practice

1. [Damn Insecure Vulnerable Application (DIVA) ![GitHub Repo Stars](https://img.shields.io/github/stars/payatu/diva-android) ![GitHub last commit](https://img.shields.io/github/last-commit/payatu/diva-android)](https://github.com/payatu/diva-android)
1. [Vuldroid ![GitHub Repo Stars](https://img.shields.io/github/stars/jaiswalakshansh/Vuldroid) ![GitHub last commit](https://img.shields.io/github/last-commit/jaiswalakshansh/Vuldroid)](https://github.com/jaiswalakshansh/Vuldroid)
1. [ExploitMe Android Labs](http://securitycompass.github.io/AndroidLabs/setup.html)
1. [GoatDroid ![GitHub Repo Stars](https://img.shields.io/github/stars/jackMannino/OWASP-GoatDroid-Project) ![GitHub last commit](https://img.shields.io/github/last-commit/jackMannino/OWASP-GoatDroid-Project)](https://github.com/jackMannino/OWASP-GoatDroid-Project)
1. [Android InsecureBank ![GitHub Repo Stars](https://img.shields.io/github/stars/dineshshetty/Android-InsecureBankv2) ![GitHub last commit](https://img.shields.io/github/last-commit/dineshshetty/Android-InsecureBankv2)](https://github.com/dineshshetty/Android-InsecureBankv2)
1. [Insecureshop ![GitHub Repo Stars](https://img.shields.io/github/stars/optiv/insecureshop) ![GitHub last commit](https://img.shields.io/github/last-commit/optiv/insecureshop)](https://github.com/optiv/insecureshop)
1. [Oversecured Vulnerable Android App (OVAA) ![GitHub Repo Stars](https://img.shields.io/github/stars/oversecured/ovaa) ![GitHub last commit](https://img.shields.io/github/last-commit/oversecured/ovaa)](https://github.com/oversecured/ovaa)

## Academic/Research/Publications/Books

### Research Papers

1. [Exploit Database](https://www.exploit-db.com/papers/)
1. [Android security-related presentations ![GitHub Repo Stars](https://img.shields.io/github/stars/jacobsoo/AndroidSlides) ![GitHub last commit](https://img.shields.io/github/last-commit/jacobsoo/AndroidSlides)](https://github.com/jacobsoo/AndroidSlides)
1. [A good collection of static analysis papers](https://tthtlc.wordpress.com/2011/09/01/static-analysis-of-android-applications/)

### Books

1. [SEI CERT Android Secure Coding Standard](https://wiki.sei.cmu.edu/confluence/display/android/Android+Secure+Coding+Standard)

### Others

1. [OWASP Mobile Security Testing Guide Manual ![GitHub Repo Stars](https://img.shields.io/github/stars/OWASP/owasp-mstg) ![GitHub last commit](https://img.shields.io/github/last-commit/OWASP/owasp-mstg)](https://github.com/OWASP/owasp-mstg)
1. [doridori/Android-Security-Reference ![GitHub Repo Stars](https://img.shields.io/github/stars/doridori/Android-Security-Reference) ![GitHub last commit](https://img.shields.io/github/last-commit/doridori/Android-Security-Reference)](https://github.com/doridori/Android-Security-Reference)
1. [android app security checklist ![GitHub Repo Stars](https://img.shields.io/github/stars/b-mueller/android_app_security_checklist) ![GitHub last commit](https://img.shields.io/github/last-commit/b-mueller/android_app_security_checklist)](https://github.com/b-mueller/android_app_security_checklist)
1. [Mobile App Pentest Cheat Sheet ![GitHub Repo Stars](https://img.shields.io/github/stars/tanprathan/MobileApp-Pentest-Cheatsheet) ![GitHub last commit](https://img.shields.io/github/last-commit/tanprathan/MobileApp-Pentest-Cheatsheet)](https://github.com/tanprathan/MobileApp-Pentest-Cheatsheet)
1. [Android Reverse Engineering 101 by Daniele Altomare (Web Archive link)](https://web.archive.org/web/20180721134044/http://www.fasteque.com:80/android-reverse-engineering-101-part-1/)
1. ~~[Mobile Security Reading Room](https://mobile-security.zeef.com) - A reading room that contains well-categorized technical reading material about mobile penetration testing, mobile malware, mobile forensics, and all kind of mobile security-related topics~~

## Exploits/Vulnerabilities/Bugs

### List

1. [Android Security Bulletins](https://source.android.com/security/bulletin/)
1. [Android's reported security vulnerabilities](https://www.cvedetails.com/vulnerability-list/vendor_id-1224/product_id-19997/Google-Android.html)
1. [OWASP Mobile Top 10 2016](https://www.owasp.org/index.php/Mobile_Top_10_2016-Top_10)
1. [Exploit Database](https://www.exploit-db.com/search/?action=search&q=android) - click search
1. [Vulnerability Google Doc](https://docs.google.com/spreadsheet/pub?key=0Am5hHW4ATym7dGhFU1A4X2lqbUJtRm1QSWNRc3E0UlE&single=true&gid=0&output=html)
1. [Google Android Security Team’s Classifications for Potentially Harmful Applications (Malware)](https://source.android.com/security/reports/Google_Android_Security_PHA_classifications.pdf)
1. ~~[Android Devices Security Patch Status](https://kb.androidtamer.com/Device_Security_Patch_tracker/)~~

### Malware

1. [androguard - Database Android Malware wiki](https://code.google.com/p/androguard/wiki/DatabaseAndroidMalwares)
1. [Android Malware Github repo ![GitHub Repo Stars](https://img.shields.io/github/stars/ashishb/android-malware) ![GitHub last commit](https://img.shields.io/github/last-commit/ashishb/android-malware)](https://github.com/ashishb/android-malware)
1. [Android Malware Genome Project](http://www.malgenomeproject.org/) - contains 1260 malware samples categorized into 49 different malware families, free for research purposes.
1. [Contagio Mobile Malware Mini Dump](http://contagiominidump.blogspot.com)
1. [Drebin](https://www.sec.tu-bs.de/~danarp/drebin/)
1. [Hudson Rock](https://www.hudsonrock.com/threat-intelligence-cybercrime-tools) - Free cybercrime intelligence toolset that can indicate if a specific APK package was compromised in an Infostealer malware attack.
1. [Kharon Malware Dataset](http://kharon.gforge.inria.fr/dataset/) - 7 malware which have been reverse-engineered and documented
1. [Android Adware and General Malware Dataset](https://www.unb.ca/cic/datasets/android-adware.html)
1. [AndroZoo](https://androzoo.uni.lu/) - AndroZoo is a growing Android application collection from several sources, including the official Google Play app market.
1. ~~[Android PRAGuard Dataset](http://pralab.diee.unica.it/en/AndroidPRAGuardDataset) - The dataset contains 10479 samples, obtained by obfuscating the MalGenome and the Contagio Minidump datasets with seven different obfuscation techniques.~~
1. ~~[Admire](http://admire.necst.it/)~~

### Bounty Programs

1. [Android Security Reward Program](https://www.google.com/about/appsecurity/android-rewards/)

### How to report Security issues

1. [Android - reporting security issues](https://source.android.com/security/overview/updates-resources.html#report-issues)
1. [Android Reports and Resources ![GitHub Repo Stars](https://img.shields.io/github/stars/B3nac/Android-Reports-and-Resources) ![GitHub last commit](https://img.shields.io/github/last-commit/B3nac/Android-Reports-and-Resources)](https://github.com/B3nac/Android-Reports-and-Resources) - List of Android Hackerone disclosed reports and other resources

## Contributing

Your contributions are always welcome!
