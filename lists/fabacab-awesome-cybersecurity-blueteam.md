# Awesome Cybersecurity Blue Team [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)

> A collection of awesome resources, tools, and other shiny things for cybersecurity blue teams.

[Cybersecurity blue teams](https://en.wikipedia.org/wiki/Blue_team_(computer_security)) are groups of individuals who identify security flaws in information technology systems, verify the effectiveness of security measures, and monitor the systems to ensure that implemented defensive measures remain effective in the future. While not exclusive, this list is heavily biased towards [Free Software](https://www.gnu.org/philosophy/free-sw.html) projects and against proprietary products or corporate services. For offensive TTPs, please see [awesome-pentest ![GitHub Repo Stars](https://img.shields.io/github/stars/fabacab/awesome-pentest) ![GitHub last commit](https://img.shields.io/github/last-commit/fabacab/awesome-pentest)](https://github.com/fabacab/awesome-pentest).

Your contributions and suggestions are heartily ♥ welcome. (✿◕‿◕). Please check the [Contributing Guidelines](CONTRIBUTING.md) for more details. This work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

Many cybersecurity professionals enable racist state violence, wittingly or unwittingly, by providing services to local, state, and federal policing agencies or otherwise cooperating with similar institutions who do so. This evil most often happens through the coercive mechanism of employment under threat of lack of access to food, shelter, or healthcare. Despite this list's public availability, it is the maintainer's intention and hope that this list supports the people and organizations who work to counter such massive albeit banal evil.

![Image of a raised fist composed of the names of Black people murdered by taxpayer-funded racist police violence.](https://web.archive.org/web/20201028021653if_/https://lauerrealtygroup.com/wp-content/uploads/2020/06/BLM-FIST-scaled.jpg)

![Image of a "Blue Lives Matter" flag with the thin blue line being peeled away to reveal a Nazi swastika underneath.](https://web.archive.org/web/20201123181815if_/https://i.redd.it/86pl28p0dl631.jpg)

**[DEFUND THE POLICE.](https://defundthepolice.org/)**

## Contents

- [Automation](#automation)
  - [Code libraries and bindings](#code-libraries-and-bindings)
  - [Security Orchestration, Automation, and Response (SOAR)](#security-orchestration-automation-and-response-soar)
- [Cloud platform security](#cloud-platform-security)
  - [Distributed monitoring](#distributed-monitoring)
  - [Kubernetes](#kubernetes)
  - [Service meshes](#service-meshes)
- [Communications security (COMSEC)](#communications-security-comsec)
- [DevSecOps](#devsecops)
  - [Application or Binary Hardening](#application-or-binary-hardening)
  - [Compliance testing and reporting](#compliance-testing-and-reporting)
  - [Dependency confusion](#dependency-confusion)
  - [Fuzzing](#fuzzing)
  - [Policy enforcement](#policy-enforcement)
  - [Supply chain security](#supply-chain-security)
- [Honeypots](#honeypots)
  - [Tarpits](#tarpits)
- [Host-based tools](#host-based-tools)
  - [Sandboxes](#sandboxes)
- [Identity and AuthN/AuthZ](#identity-and-authnauthz)
- [Incident Response tools](#incident-response-tools)
  - [IR management consoles](#ir-management-consoles)
  - [Evidence collection](#evidence-collection)
- [Network perimeter defenses](#network-perimeter-defenses)
  - [Firewall appliances or distributions](#firewall-appliances-or-distributions)
- [Operating System distributions](#operating-system-distributions)
- [Phishing awareness and reporting](#phishing-awareness-and-reporting)
- [Preparedness training and wargaming](#preparedness-training-and-wargaming)
  - [Post-engagement analysis and reporting](#post-engagement-analysis-and-reporting)
- [Security configurations](#security-configurations)
- [Security monitoring](#security-monitoring)
  - [Endpoint Detection and Response (EDR)](#endpoint-detection-and-response-edr)
  - [Network Security Monitoring (NSM)](#network-security-monitoring-nsm)
  - [Security Information and Event Management (SIEM)](#security-information-and-event-management-siem)
  - [Service and performance monitoring](#service-and-performance-monitoring)
  - [Threat hunting](#threat-hunting)
- [Threat intelligence](#threat-intelligence)
  - [Fingerprinting](#fingerprinting)
  - [Threat signature packages and collections](#threat-signature-packages-and-collections)
- [Tor Onion service defenses](#tor-onion-service-defenses)
- [Transport-layer defenses](#transport-layer-defenses)
  - [Overlay and Virtual Private Networks (VPNs)](#overlay-and-virtual-private-networks-vpns)
- [macOS-based defenses](#macos-based-defenses)
- [Windows-based defenses](#windows-based-defenses)
  - [Active Directory](#active-directory)

## Automation

- [Ansible Lockdown](https://ansiblelockdown.io/) - Curated collection of information security themed Ansible roles that are both vetted and actively maintained.
- [Clevis ![GitHub Repo Stars](https://img.shields.io/github/stars/latchset/clevis) ![GitHub last commit](https://img.shields.io/github/last-commit/latchset/clevis)](https://github.com/latchset/clevis) - Plugable framework for automated decryption, often used as a Tang client.
- [DShell ![GitHub Repo Stars](https://img.shields.io/github/stars/USArmyResearchLab/Dshell) ![GitHub last commit](https://img.shields.io/github/last-commit/USArmyResearchLab/Dshell)](https://github.com/USArmyResearchLab/Dshell) - Extensible network forensic analysis framework written in Python that enables rapid development of plugins to support the dissection of network packet captures.
- [Dev-Sec.io](https://dev-sec.io/) - Server hardening framework providing Ansible, Chef, and Puppet implementations of various baseline security configurations.
- [peepdf](https://eternal-todo.com/tools/peepdf-pdf-analysis-tool) - Scriptable PDF file analyzer.
- [PyREBox](https://talosintelligence.com/pyrebox) - Python-scriptable reverse engineering sandbox, based on QEMU.
- [Watchtower](https://containrrr.dev/watchtower/) - Container-based solution for automating Docker container base image updates, providing an unattended upgrade experience.

### Code libraries and bindings

- [MultiScanner ![GitHub Repo Stars](https://img.shields.io/github/stars/mitre/multiscanner) ![GitHub last commit](https://img.shields.io/github/last-commit/mitre/multiscanner)](https://github.com/mitre/multiscanner) - File analysis framework written in Python that assists in evaluating a set of files by automatically running a suite of tools against them and aggregating the output.
- [Posh-VirusTotal ![GitHub Repo Stars](https://img.shields.io/github/stars/darkoperator/Posh-VirusTotal) ![GitHub last commit](https://img.shields.io/github/last-commit/darkoperator/Posh-VirusTotal)](https://github.com/darkoperator/Posh-VirusTotal) - PowerShell interface to VirusTotal.com APIs.
- [censys-python ![GitHub Repo Stars](https://img.shields.io/github/stars/censys/censys-python) ![GitHub last commit](https://img.shields.io/github/last-commit/censys/censys-python)](https://github.com/censys/censys-python) - Python wrapper to the Censys REST API.
- [libcrafter ![GitHub Repo Stars](https://img.shields.io/github/stars/pellegre/libcrafter) ![GitHub last commit](https://img.shields.io/github/last-commit/pellegre/libcrafter)](https://github.com/pellegre/libcrafter) - High level C++ network packet sniffing and crafting library.
- [python-dshield ![GitHub Repo Stars](https://img.shields.io/github/stars/rshipp/python-dshield) ![GitHub last commit](https://img.shields.io/github/last-commit/rshipp/python-dshield)](https://github.com/rshipp/python-dshield) - Pythonic interface to the Internet Storm Center/DShield API.
- [python-sandboxapi ![GitHub Repo Stars](https://img.shields.io/github/stars/InQuest/python-sandboxapi) ![GitHub last commit](https://img.shields.io/github/last-commit/InQuest/python-sandboxapi)](https://github.com/InQuest/python-sandboxapi) - Minimal, consistent Python API for building integrations with malware sandboxes.
- [python-stix2 ![GitHub Repo Stars](https://img.shields.io/github/stars/oasis-open/cti-python-stix2) ![GitHub last commit](https://img.shields.io/github/last-commit/oasis-open/cti-python-stix2)](https://github.com/oasis-open/cti-python-stix2) - Python APIs for serializing and de-serializing Structured Threat Information eXpression (STIX) JSON content, plus higher-level APIs for common tasks.

### Security Orchestration, Automation, and Response (SOAR)

See also [Security Information and Event Management (SIEM)](#security-information-and-event-management-siem), and [IR management consoles](#ir-management-consoles).

- [Shuffle](https://shuffler.io/) - Graphical generalized workflow (automation) builder for IT professionals and blue teamers.

## Cloud platform security

See also [asecure.cloud/tools](https://asecure.cloud/tools/).

- [Aaia ![GitHub Repo Stars](https://img.shields.io/github/stars/rams3sh/Aaia) ![GitHub last commit](https://img.shields.io/github/last-commit/rams3sh/Aaia)](https://github.com/rams3sh/Aaia) - Helps in visualizing AWS IAM and Organizations in a graph format with help of Neo4j.
- [Falco](https://falco.org/) - Behavioral activity monitor designed to detect anomalous activity in containerized applications, hosts, and network packet flows by auditing the Linux kernel and enriched by runtime data such as Kubernetes metrics.
- [Kata Containers](https://katacontainers.io/) - Secure container runtime with lightweight virtual machines that feel and perform like containers, but provide stronger workload isolation using hardware virtualization technology as a second layer of defense.
- [Principal Mapper (PMapper) ![GitHub Repo Stars](https://img.shields.io/github/stars/nccgroup/PMapper) ![GitHub last commit](https://img.shields.io/github/last-commit/nccgroup/PMapper)](https://github.com/nccgroup/PMapper) - Quickly evaluate IAM permissions in AWS via script and library capable of identifying risks in the configuration of AWS Identity and Access Management (IAM) for an AWS account or an AWS organization.
- [Prowler ![GitHub Repo Stars](https://img.shields.io/github/stars/toniblyx/prowler) ![GitHub last commit](https://img.shields.io/github/last-commit/toniblyx/prowler)](https://github.com/toniblyx/prowler) - Tool based on AWS-CLI commands for Amazon Web Services account security assessment and hardening.
- [Scout Suite ![GitHub Repo Stars](https://img.shields.io/github/stars/nccgroup/ScoutSuite) ![GitHub last commit](https://img.shields.io/github/last-commit/nccgroup/ScoutSuite)](https://github.com/nccgroup/ScoutSuite) - Open source multi-cloud security-auditing tool, which enables security posture assessment of cloud environments.
- [gVisor ![GitHub Repo Stars](https://img.shields.io/github/stars/google/gvisor) ![GitHub last commit](https://img.shields.io/github/last-commit/google/gvisor)](https://github.com/google/gvisor) - Application kernel, written in Go, that implements a substantial portion of the Linux system surface to provide an isolation boundary between the application and the host kernel.

### Distributed monitoring

See also [§ Service and performance monitoring](#service-and-performance-monitoring).

- [Cortex](https://cortexmetrics.io/) - Provides horizontally scalable, highly available, multi-tenant, long term storage for Prometheus.
- [Jaeger](https://www.jaegertracing.io/) - Distributed tracing platform backend used for monitoring and troubleshooting microservices-based distributed systems.
- [OpenTelemetry](https://opentelemetry.io/) - Observability framework for cloud-native software, comprising a collection of tools, APIs, and SDKs for exporting application performance metrics to a tracing backend (formerly maintained by the OpenTracing and OpenCensus projects).
- [Prometheus](https://prometheus.io/) - Open-source systems monitoring and alerting toolkit originally built at SoundCloud.
- [Zipkin](https://zipkin.io/) - Distributed tracing system backend that helps gather timing data needed to troubleshoot latency problems in service architectures.

### Kubernetes

See also [Kubernetes-Security.info](https://kubernetes-security.info/).

- [KubeSec](https://kubesec.io/) - Static analyzer of Kubernetes manifests that can be run locally, as a Kuberenetes admission controller, or as its own cloud service.
- [Kyverno](https://kyverno.io/) - Policy engine designed for Kubernetes.
- [Linkerd](https://linkerd.io/) - Ultra light Kubernetes-specific service mesh that adds observability, reliability, and security to Kubernetes applications without requiring any modification of the application itself.
- [Managed Kubernetes Inspection Tool (MKIT) ![GitHub Repo Stars](https://img.shields.io/github/stars/darkbitio/mkit) ![GitHub last commit](https://img.shields.io/github/last-commit/darkbitio/mkit)](https://github.com/darkbitio/mkit) - Query and validate several common security-related configuration settings of managed Kubernetes cluster objects and the workloads/resources running inside the cluster.
- [Polaris](https://polaris.docs.fairwinds.com/) - Validates Kubernetes best practices by running tests against code commits, a Kubernetes admission request, or live resources already running in a cluster. 
- [Sealed Secrets ![GitHub Repo Stars](https://img.shields.io/github/stars/bitnami-labs/sealed-secrets) ![GitHub last commit](https://img.shields.io/github/last-commit/bitnami-labs/sealed-secrets)](https://github.com/bitnami-labs/sealed-secrets) - Kubernetes controller and tool for one-way encrypted Secrets.
- [certificate-expiry-monitor ![GitHub Repo Stars](https://img.shields.io/github/stars/muxinc/certificate-expiry-monitor) ![GitHub last commit](https://img.shields.io/github/last-commit/muxinc/certificate-expiry-monitor)](https://github.com/muxinc/certificate-expiry-monitor) - Utility that exposes the expiry of TLS certificates as Prometheus metrics.
- [k-rail ![GitHub Repo Stars](https://img.shields.io/github/stars/cruise-automation/k-rail) ![GitHub last commit](https://img.shields.io/github/last-commit/cruise-automation/k-rail)](https://github.com/cruise-automation/k-rail) - Workload policy enforcement tool for Kubernetes.
- [kube-forensics ![GitHub Repo Stars](https://img.shields.io/github/stars/keikoproj/kube-forensics) ![GitHub last commit](https://img.shields.io/github/last-commit/keikoproj/kube-forensics)](https://github.com/keikoproj/kube-forensics) - Allows a cluster administrator to dump the current state of a running pod and all its containers so that security professionals can perform off-line forensic analysis.
- [kube-hunter](https://kube-hunter.aquasec.com/) - Open-source tool that runs a set of tests ("hunters") for security issues in Kubernetes clusters from either outside ("attacker's view") or inside a cluster.
- [kubernetes-event-exporter ![GitHub Repo Stars](https://img.shields.io/github/stars/opsgenie/kubernetes-event-exporter) ![GitHub last commit](https://img.shields.io/github/last-commit/opsgenie/kubernetes-event-exporter)](https://github.com/opsgenie/kubernetes-event-exporter) - Allows exporting the often missed Kubernetes events to various outputs so that they can be used for observability or alerting purposes.

### Service meshes

See also [ServiceMesh.es](https://servicemesh.es/).

- [Consul](https://consul.io/) - Solution to connect and configure applications across dynamic, distributed infrastructure and, with Consul Connect, enabling secure service-to-service communication with automatic TLS encryption and identity-based authorization.
- [Istio](https://istio.io/) - Open platform for providing a uniform way to integrate microservices, manage traffic flow across microservices, enforce policies and aggregate telemetry data.

## Communications security (COMSEC)

See also [Transport-layer defenses](#transport-layer-defenses).

- [GPG Sync ![GitHub Repo Stars](https://img.shields.io/github/stars/firstlookmedia/gpgsync) ![GitHub last commit](https://img.shields.io/github/last-commit/firstlookmedia/gpgsync)](https://github.com/firstlookmedia/gpgsync) - Centralize and automate OpenPGP public key distribution, revocation, and updates amongst all members of an organization or team.
- [Geneva (Genetic Evasion)](https://censorship.ai/) - Novel experimental genetic algorithm that evolves packet-manipulation-based censorship evasion strategies against nation-state level censors to increase availability of otherwise blocked content.
- [GlobaLeaks](https://www.globaleaks.org/) - Free, open source software enabling anyone to easily set up and maintain a secure whistleblowing platform.
- [SecureDrop](https://securedrop.org/) - Open source whistleblower submission system that media organizations and NGOs can install to securely accept documents from anonymous sources.
- [Teleport](https://goteleport.com/) - Allows engineers and security professionals to unify access for SSH servers, Kubernetes clusters, web applications, and databases across all environments.

## DevSecOps

See also [awesome-devsecops ![GitHub Repo Stars](https://img.shields.io/github/stars/devsecops/awesome-devsecops) ![GitHub last commit](https://img.shields.io/github/last-commit/devsecops/awesome-devsecops)](https://github.com/devsecops/awesome-devsecops).

- [Bane ![GitHub Repo Stars](https://img.shields.io/github/stars/genuinetools/bane) ![GitHub last commit](https://img.shields.io/github/last-commit/genuinetools/bane)](https://github.com/genuinetools/bane) - Custom and better AppArmor profile generator for Docker containers.
- [BlackBox ![GitHub Repo Stars](https://img.shields.io/github/stars/StackExchange/blackbox) ![GitHub last commit](https://img.shields.io/github/last-commit/StackExchange/blackbox)](https://github.com/StackExchange/blackbox) - Safely store secrets in Git/Mercurial/Subversion by encrypting them "at rest" using GnuPG.
- [Checkov](https://www.checkov.io/) - Static analysis for Terraform (infrastructure as code) to help detect CIS policy violations and prevent cloud security misconfiguration.
- [Cilium](https://cilium.io/) - Open source software for transparently securing the network connectivity between application services deployed using Linux container management platforms like Docker and Kubernetes.
- [Clair ![GitHub Repo Stars](https://img.shields.io/github/stars/coreos/clair) ![GitHub last commit](https://img.shields.io/github/last-commit/coreos/clair)](https://github.com/coreos/clair) - Static analysis tool to probe for vulnerabilities introduced via application container (e.g., Docker) images.
- [CodeQL](https://securitylab.github.com/tools/codeql) - Discover vulnerabilities across a codebase by performing queries against code as though it were data.
- [DefectDojo](https://www.defectdojo.org/) - Application vulnerability management tool built for DevOps and continuous security integration.
- [Gauntlt](http://gauntlt.org/) - Pentest applications during routine continuous integration build pipelines.
- [Git Secrets ![GitHub Repo Stars](https://img.shields.io/github/stars/awslabs/git-secrets) ![GitHub last commit](https://img.shields.io/github/last-commit/awslabs/git-secrets)](https://github.com/awslabs/git-secrets) - Prevents you from committing passwords and other sensitive information to a git repository.
- [SOPS ![GitHub Repo Stars](https://img.shields.io/github/stars/mozilla/sops) ![GitHub last commit](https://img.shields.io/github/last-commit/mozilla/sops)](https://github.com/mozilla/sops) - Editor of encrypted files that supports YAML, JSON, ENV, INI and binary formats and encrypts with AWS KMS, GCP KMS, Azure Key Vault, and PGP.
- [Snyk](https://snyk.io/) - Finds and fixes vulnerabilities and license violations in open source dependencies and container images.
- [SonarQube](https://sonarqube.org) - Continuous inspection tool that provides detailed reports during automated testing and alerts on newly introduced security vulnerabilities.
- [Trivy ![GitHub Repo Stars](https://img.shields.io/github/stars/aquasecurity/trivy) ![GitHub last commit](https://img.shields.io/github/last-commit/aquasecurity/trivy)](https://github.com/aquasecurity/trivy) - Simple and comprehensive vulnerability scanner for containers and other artifacts, suitable for use in continuous integration pipelines.
- [Vault](https://www.vaultproject.io/) - Tool for securely accessing secrets such as API keys, passwords, or certificates through a unified interface.
- [git-crypt](https://www.agwa.name/projects/git-crypt/) - Transparent file encryption in git; files which you choose to protect are encrypted when committed, and decrypted when checked out.
- [helm-secrets ![GitHub Repo Stars](https://img.shields.io/github/stars/jkroepke/helm-secrets) ![GitHub last commit](https://img.shields.io/github/last-commit/jkroepke/helm-secrets)](https://github.com/jkroepke/helm-secrets) - Helm plugin that helps manage secrets with Git workflow and stores them anywhere, backed by SOPS.
- [terrascan](https://runterrascan.io/) - Static code analyzer for Infrastructure as Code tools that helps detect compliance and security violations to mitigate risk before provisioning cloud native resources.
- [tfsec](https://aquasecurity.github.io/tfsec/) - Static analysis security scanner for your Terraform code designed to run locally and in CI pipelines.

### Application or Binary Hardening

- [DynInst](https://dyninst.org/dyninst) - Tools for binary instrumentation, analysis, and modification, useful for binary patching.
- [DynamoRIO](https://dynamorio.org/) - Runtime code manipulation system that supports code transformations on any part of a program, while it executes, implemented as a process-level virtual machine.
- [Egalito](https://egalito.org/) - Binary recompiler and instrumentation framework that can fully disassemble, transform, and regenerate ordinary Linux binaries designed for binary hardening and security research.
- [Valgrind](https://www.valgrind.org/) - Instrumentation framework for building dynamic analysis tools.

### Compliance testing and reporting

- [Chef InSpec](https://www.chef.io/products/chef-inspec) - Language for describing security and compliance rules, which become automated tests that can be run against IT infrastructures to discover and report on non-compliance.
- [OpenSCAP Base](https://www.open-scap.org/tools/openscap-base/) - Both a library and a command line tool (`oscap`) used to evaluate a system against SCAP baseline profiles to report on the security posture of the scanned system(s). 

### Dependency confusion

See also [§ Supply chain security](#supply-chain-security).

- [Dependency Combobulator ![GitHub Repo Stars](https://img.shields.io/github/stars/apiiro/combobulator) ![GitHub last commit](https://img.shields.io/github/last-commit/apiiro/combobulator)](https://github.com/apiiro/combobulator) - Open source, modular and extensible framework to detect and prevent dependency confusion leakage and potential attacks.
- [Confusion checker ![GitHub Repo Stars](https://img.shields.io/github/stars/sonatype-nexus-community/repo-diff) ![GitHub last commit](https://img.shields.io/github/last-commit/sonatype-nexus-community/repo-diff)](https://github.com/sonatype-nexus-community/repo-diff) - Script to check if you have artifacts containing the same name between your repositories.
- [snync ![GitHub Repo Stars](https://img.shields.io/github/stars/snyk-labs/snync) ![GitHub last commit](https://img.shields.io/github/last-commit/snyk-labs/snync)](https://github.com/snyk-labs/snync) - Prevent and detect if you're vulnerable to dependency confusion supply chain security attacks.

### Fuzzing

See also [Awesome-Fuzzing ![GitHub Repo Stars](https://img.shields.io/github/stars/secfigo/Awesome-Fuzzing) ![GitHub last commit](https://img.shields.io/github/last-commit/secfigo/Awesome-Fuzzing)](https://github.com/secfigo/Awesome-Fuzzing).

* [Atheris](https://pypi.org/project/atheris/) - Coverage-guided Python fuzzing engine based off of libFuzzer that supports fuzzing of Python code but also native extensions written for CPython.
* [FuzzBench](https://google.github.io/fuzzbench/) - Free service that evaluates fuzzers on a wide variety of real-world benchmarks, at Google scale.
* [OneFuzz ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/onefuzz) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/onefuzz)](https://github.com/microsoft/onefuzz) - Self-hosted Fuzzing-as-a-Service (FaaS) platform.

### Policy enforcement

- [AllStar ![GitHub Repo Stars](https://img.shields.io/github/stars/ossf/allstar) ![GitHub last commit](https://img.shields.io/github/last-commit/ossf/allstar)](https://github.com/ossf/allstar) - GitHub App installed on organizations or repositories to set and enforce security policies.
- [Conftest](https://conftest.dev/) - Utility to help you write tests against structured configuration data.
- [Open Policy Agent (OPA)](https://www.openpolicyagent.org/) - Unified toolset and framework for policy across the cloud native stack.
- [Regula](https://regula.dev/) - Checks infrastructure as code templates (Terraform, CloudFormation, K8s manifests) for AWS, Azure, Google Cloud, and Kubernetes security and compliance using Open Policy Agent/Rego.
- [Tang ![GitHub Repo Stars](https://img.shields.io/github/stars/latchset/tang) ![GitHub last commit](https://img.shields.io/github/last-commit/latchset/tang)](https://github.com/latchset/tang) - Server for binding data to network presence; provides data to clients only when they are on a certain (secured) network.

### Supply chain security

See also [§ Dependency confusion](#dependency-confusion).

- [Grafeas](https://grafeas.io/) - Open artifact metadata API to audit and govern your software supply chain.
- [Helm GPG (GnuPG) Plugin ![GitHub Repo Stars](https://img.shields.io/github/stars/technosophos/helm-gpg) ![GitHub last commit](https://img.shields.io/github/last-commit/technosophos/helm-gpg)](https://github.com/technosophos/helm-gpg) - Chart signing and verification with GnuPG for Helm.
- [Notary ![GitHub Repo Stars](https://img.shields.io/github/stars/theupdateframework/notary) ![GitHub last commit](https://img.shields.io/github/last-commit/theupdateframework/notary)](https://github.com/theupdateframework/notary) - Aims to make the internet more secure by making it easy for people to publish and verify content.
- [in-toto](https://in-toto.io/) - Framework to secure the integrity of software supply chains.

## Honeypots

See also [awesome-honeypots ![GitHub Repo Stars](https://img.shields.io/github/stars/paralax/awesome-honeypots) ![GitHub last commit](https://img.shields.io/github/last-commit/paralax/awesome-honeypots)](https://github.com/paralax/awesome-honeypots).

- [CanaryTokens ![GitHub Repo Stars](https://img.shields.io/github/stars/thinkst/canarytokens) ![GitHub last commit](https://img.shields.io/github/last-commit/thinkst/canarytokens)](https://github.com/thinkst/canarytokens) - Self-hostable honeytoken generator and reporting dashboard; demo version available at [CanaryTokens.org](https://canarytokens.org/).
- [Kushtaka](https://kushtaka.org) - Sustainable all-in-one honeypot and honeytoken orchestrator for under-resourced blue teams.
- [Manuka ![GitHub Repo Stars](https://img.shields.io/github/stars/spaceraccoon/manuka) ![GitHub last commit](https://img.shields.io/github/last-commit/spaceraccoon/manuka)](https://github.com/spaceraccoon/manuka) - Open-sources intelligence (OSINT) honeypot that monitors reconnaissance attempts by threat actors and generates actionable intelligence for Blue Teamers.

### Tarpits

- [Endlessh ![GitHub Repo Stars](https://img.shields.io/github/stars/skeeto/endlessh) ![GitHub last commit](https://img.shields.io/github/last-commit/skeeto/endlessh)](https://github.com/skeeto/endlessh) - SSH tarpit that slowly sends an endless banner.
- [LaBrea](http://labrea.sourceforge.net/labrea-info.html) - Program that answers ARP requests for unused IP space, creating the appearance of fake machines that answer further requests very slowly in order to slow down scanners, worms, etcetera.

## Host-based tools

- [Artillery ![GitHub Repo Stars](https://img.shields.io/github/stars/BinaryDefense/artillery) ![GitHub last commit](https://img.shields.io/github/last-commit/BinaryDefense/artillery)](https://github.com/BinaryDefense/artillery) - Combination honeypot, filesystem monitor, and alerting system designed to protect Linux and Windows operating systems.
- [Crowd Inspect](https://www.crowdstrike.com/resources/community-tools/crowdinspect-tool/) - Free tool for Windows systems aimed to alert you to the presence of malware that may be communicating over the network.
- [Fail2ban](https://www.fail2ban.org/) - Intrusion prevention software framework that protects computer servers from brute-force attacks.
- [Open Source HIDS SECurity (OSSEC)](https://www.ossec.net/) - Fully open source and free, feature-rich, Host-based Instrusion Detection System (HIDS).
- [Rootkit Hunter (rkhunter)](http://rkhunter.sourceforge.net/) - POSIX-compliant Bash script that scans a host for various signs of malware.
- [Shufflecake](https://shufflecake.net/) - Plausible deniability for multiple hidden filesystems on Linux.
- [USB Keystroke Injection Protection ![GitHub Repo Stars](https://img.shields.io/github/stars/google/ukip) ![GitHub last commit](https://img.shields.io/github/last-commit/google/ukip)](https://github.com/google/ukip) - Daemon for blocking USB keystroke injection devices on Linux systems.
- [chkrootkit](http://chkrootkit.org/) - Locally checks for signs of a rootkit on GNU/Linux systems.

### Sandboxes

- [Bubblewrap ![GitHub Repo Stars](https://img.shields.io/github/stars/containers/bubblewrap) ![GitHub last commit](https://img.shields.io/github/last-commit/containers/bubblewrap)](https://github.com/containers/bubblewrap) - Sandboxing tool for use by unprivileged Linux users capable of restricting access to parts of the operating system or user data.
- [Dangerzone](https://dangerzone.rocks/) - Take potentially dangerous PDFs, office documents, or images and convert them to a safe PDF.
- [Firejail](https://firejail.wordpress.com/) - SUID program that reduces the risk of security breaches by restricting the running environment of untrusted applications using Linux namespaces and seccomp-bpf.

## Identity and AuthN/AuthZ

- [Gluu Server](https://gluu.org/) - Central authentication and authorization for Web and mobile applications with a Free and Open Source Software cloud-native community distribution.

## Incident Response tools

See also [awesome-incident-response ![GitHub Repo Stars](https://img.shields.io/github/stars/meirwah/awesome-incident-response) ![GitHub last commit](https://img.shields.io/github/last-commit/meirwah/awesome-incident-response)](https://github.com/meirwah/awesome-incident-response).

- [LogonTracer ![GitHub Repo Stars](https://img.shields.io/github/stars/JPCERTCC/LogonTracer) ![GitHub last commit](https://img.shields.io/github/last-commit/JPCERTCC/LogonTracer)](https://github.com/JPCERTCC/LogonTracer) - Investigate malicious Windows logon by visualizing and analyzing Windows event log.
- [Volatility](https://www.volatilityfoundation.org/) - Advanced memory forensics framework.
- [aws_ir ![GitHub Repo Stars](https://img.shields.io/github/stars/ThreatResponse/aws_ir) ![GitHub last commit](https://img.shields.io/github/last-commit/ThreatResponse/aws_ir)](https://github.com/ThreatResponse/aws_ir) - Automates your incident response with zero security preparedness assumptions.

### IR management consoles

See also [Security Orchestration, Automation, and Response (SOAR)](#security-orchestration-automation-and-response-soar).

- [CIRTKit ![GitHub Repo Stars](https://img.shields.io/github/stars/opensourcesec/CIRTKit) ![GitHub last commit](https://img.shields.io/github/last-commit/opensourcesec/CIRTKit)](https://github.com/opensourcesec/CIRTKit) - Scriptable Digital Forensics and Incident Response (DFIR) toolkit built on Viper.
- [Fast Incident Response (FIR) ![GitHub Repo Stars](https://img.shields.io/github/stars/certsocietegenerale/FIR) ![GitHub last commit](https://img.shields.io/github/last-commit/certsocietegenerale/FIR)](https://github.com/certsocietegenerale/FIR) - Cybersecurity incident management platform allowing for easy creation, tracking, and reporting of cybersecurity incidents.
- [Rekall](http://www.rekall-forensic.com/) - Advanced forensic and incident response framework.
- [TheHive](https://thehive-project.org/) - Scalable, free Security Incident Response Platform designed to make life easier for SOCs, CSIRTs, and CERTs, featuring tight integration with MISP.
- [threat_note ![GitHub Repo Stars](https://img.shields.io/github/stars/defpoint/threat_note) ![GitHub last commit](https://img.shields.io/github/last-commit/defpoint/threat_note)](https://github.com/defpoint/threat_note) - Web application built by Defense Point Security to allow security researchers the ability to add and retrieve indicators related to their research.

### Evidence collection

- [AutoMacTC ![GitHub Repo Stars](https://img.shields.io/github/stars/CrowdStrike/automactc) ![GitHub last commit](https://img.shields.io/github/last-commit/CrowdStrike/automactc)](https://github.com/CrowdStrike/automactc) - Modular, automated forensic triage collection framework designed to access various forensic artifacts on macOS, parse them, and present them in formats viable for analysis.
- [OSXAuditor ![GitHub Repo Stars](https://img.shields.io/github/stars/jipegit/OSXAuditor) ![GitHub last commit](https://img.shields.io/github/last-commit/jipegit/OSXAuditor)](https://github.com/jipegit/OSXAuditor) - Free macOS computer forensics tool.
- [OSXCollector ![GitHub Repo Stars](https://img.shields.io/github/stars/Yelp/osxcollector) ![GitHub last commit](https://img.shields.io/github/last-commit/Yelp/osxcollector)](https://github.com/Yelp/osxcollector) - Forensic evidence collection & analysis toolkit for macOS.
- [ir-rescue ![GitHub Repo Stars](https://img.shields.io/github/stars/diogo-fernan/ir-rescue) ![GitHub last commit](https://img.shields.io/github/last-commit/diogo-fernan/ir-rescue)](https://github.com/diogo-fernan/ir-rescue) - Windows Batch script and a Unix Bash script to comprehensively collect host forensic data during incident response.
- [Margarita Shotgun ![GitHub Repo Stars](https://img.shields.io/github/stars/ThreatResponse/margaritashotgun) ![GitHub last commit](https://img.shields.io/github/last-commit/ThreatResponse/margaritashotgun)](https://github.com/ThreatResponse/margaritashotgun) - Command line utility (that works with or without Amazon EC2 instances) to parallelize remote memory acquisition.
- [Untitled Goose Tool ![GitHub Repo Stars](https://img.shields.io/github/stars/cisagov/untitledgoosetool) ![GitHub last commit](https://img.shields.io/github/last-commit/cisagov/untitledgoosetool)](https://github.com/cisagov/untitledgoosetool) - Assists incident response teams by exporting cloud artifacts from Azure/AzureAD/M365 environments in order to run a full investigation despite lacking in logs ingested by a SIEM.

## Network perimeter defenses

- [Gatekeeper ![GitHub Repo Stars](https://img.shields.io/github/stars/AltraMayor/gatekeeper) ![GitHub last commit](https://img.shields.io/github/last-commit/AltraMayor/gatekeeper)](https://github.com/AltraMayor/gatekeeper) - First open source Distributed Denial of Service (DDoS) protection system.
- [fwknop](https://www.cipherdyne.org/fwknop/) - Protects ports via Single Packet Authorization in your firewall.
- [ssh-audit ![GitHub Repo Stars](https://img.shields.io/github/stars/jtesta/ssh-audit) ![GitHub last commit](https://img.shields.io/github/last-commit/jtesta/ssh-audit)](https://github.com/jtesta/ssh-audit) - Simple tool that makes quick recommendations for improving an SSH server's security posture.

### Firewall appliances or distributions

See also [Wikipedia: List of router and firewall distributions](https://en.wikipedia.org/wiki/List_of_router_and_firewall_distributions).

- [IPFire](https://www.ipfire.org/) - Hardened GNU/Linux based router and firewall distribution forked from IPCop.
- [OPNsense](https://opnsense.org/) - Hardened FreeBSD based firewall and routing platform forked from pfSense.
- [pfSense](https://www.pfsense.org/) - FreeBSD firewall and router distribution forked from m0n0wall.

## Operating System distributions

- [Computer Aided Investigative Environment (CAINE)](https://caine-live.net/) - Italian GNU/Linux live distribution that pre-packages numerous digital forensics and evidence collection tools.
- [Security Onion](https://securityonion.net/) - Free and open source GNU/Linux distribution for intrusion detection, enterprise security monitoring, and log management.
- [Qubes OS](https://qubes-os.org/) - Desktop environment built atop the Xen hypervisor project that runs each end-user program in its own virtual machine intended to provide strict security controls to constrain the reach of any successful malware exploit.

## Phishing awareness and reporting

See also [awesome-pentest § Social Engineering Tools ![GitHub Repo Stars](https://img.shields.io/github/stars/fabacab/awesome-pentest) ![GitHub last commit](https://img.shields.io/github/last-commit/fabacab/awesome-pentest)](https://github.com/fabacab/awesome-pentest#social-engineering-tools).

- [CertSpotter ![GitHub Repo Stars](https://img.shields.io/github/stars/SSLMate/certspotter) ![GitHub last commit](https://img.shields.io/github/last-commit/SSLMate/certspotter)](https://github.com/SSLMate/certspotter) - Certificate Transparency log monitor from SSLMate that alerts you when a SSL/TLS certificate is issued for one of your domains.
- [Gophish](https://getgophish.com/) - Powerful, open-source phishing framework that makes it easy to test your organization's exposure to phishing.
- [King Phisher ![GitHub Repo Stars](https://img.shields.io/github/stars/securestate/king-phisher) ![GitHub last commit](https://img.shields.io/github/last-commit/securestate/king-phisher)](https://github.com/securestate/king-phisher) - Tool for testing and promoting user awareness by simulating real world phishing attacks.
- [NotifySecurity ![GitHub Repo Stars](https://img.shields.io/github/stars/certsocietegenerale/NotifySecurity) ![GitHub last commit](https://img.shields.io/github/last-commit/certsocietegenerale/NotifySecurity)](https://github.com/certsocietegenerale/NotifySecurity) - Outlook add-in used to help your users to report suspicious e-mails to security teams.
- [Phishing Intelligence Engine (PIE) ![GitHub Repo Stars](https://img.shields.io/github/stars/LogRhythm-Labs/PIE) ![GitHub last commit](https://img.shields.io/github/last-commit/LogRhythm-Labs/PIE)](https://github.com/LogRhythm-Labs/PIE) - Framework that will assist with the detection and response to phishing attacks.
- [Swordphish ![GitHub Repo Stars](https://img.shields.io/github/stars/certsocietegenerale/swordphish-awareness) ![GitHub last commit](https://img.shields.io/github/last-commit/certsocietegenerale/swordphish-awareness)](https://github.com/certsocietegenerale/swordphish-awareness) - Platform allowing to create and manage (fake) phishing campaigns intended to train people in identifying suspicious mails. 
- [mailspoof ![GitHub Repo Stars](https://img.shields.io/github/stars/serain/mailspoof) ![GitHub last commit](https://img.shields.io/github/last-commit/serain/mailspoof)](https://github.com/serain/mailspoof) - Scans SPF and DMARC records for issues that could allow email spoofing.
- [phishing_catcher ![GitHub Repo Stars](https://img.shields.io/github/stars/x0rz/phishing_catcher) ![GitHub last commit](https://img.shields.io/github/last-commit/x0rz/phishing_catcher)](https://github.com/x0rz/phishing_catcher) - Configurable script to watch for issuances of suspicious TLS certificates by domain name in the Certificate Transparency Log (CTL) using the [CertStream](https://certstream.calidog.io/) service.

## Preparedness training and wargaming

(Also known as *adversary emulation*, *threat simulation*, or similar.)

- [APTSimulator ![GitHub Repo Stars](https://img.shields.io/github/stars/NextronSystems/APTSimulator) ![GitHub last commit](https://img.shields.io/github/last-commit/NextronSystems/APTSimulator)](https://github.com/NextronSystems/APTSimulator) - Toolset to make a system look as if it was the victim of an APT attack.
- [Atomic Red Team](https://atomicredteam.io/) - Library of simple, automatable tests to execute for testing security controls.
- [BadBlood](https://www.secframe.com/badblood/) - Fills a test (non-production) Windows Domain with data that enables security analysts and engineers to practice using tools to gain an understanding and prescribe to securing Active Directory.
- [Caldera](https://caldera.mitre.org/) - Scalable, automated, and extensible adversary emulation platform developed by MITRE.
- [Drool](https://www.dns-oarc.net/tools/drool) - Replay DNS traffic from packet capture files and send it to a specified server, such as for simulating DDoS attacks on the DNS and measuring normal DNS querying.
- [DumpsterFire ![GitHub Repo Stars](https://img.shields.io/github/stars/TryCatchHCF/DumpsterFire) ![GitHub last commit](https://img.shields.io/github/last-commit/TryCatchHCF/DumpsterFire)](https://github.com/TryCatchHCF/DumpsterFire) - Modular, menu-driven, cross-platform tool for building repeatable, time-delayed, distributed security events for Blue Team drills and sensor/alert mapping.
- [Infection Monkey](https://www.guardicore.com/infectionmonkey/) - Open-source breach and attack simulation (BAS) platform that helps you validate existing controls and identify how attackers might exploit your current network security gaps.
- [Metta ![GitHub Repo Stars](https://img.shields.io/github/stars/uber-common/metta) ![GitHub last commit](https://img.shields.io/github/last-commit/uber-common/metta)](https://github.com/uber-common/metta) - Automated information security preparedness tool to do adversarial simulation.
- [Network Flight Simulator (`flightsim`) ![GitHub Repo Stars](https://img.shields.io/github/stars/alphasoc/flightsim) ![GitHub last commit](https://img.shields.io/github/last-commit/alphasoc/flightsim)](https://github.com/alphasoc/flightsim) - Utility to generate malicious network traffic and help security teams evaluate security controls and audit their network visibility.
- [RedHunt OS ![GitHub Repo Stars](https://img.shields.io/github/stars/redhuntlabs/RedHunt-OS) ![GitHub last commit](https://img.shields.io/github/last-commit/redhuntlabs/RedHunt-OS)](https://github.com/redhuntlabs/RedHunt-OS) - Ubuntu-based Open Virtual Appliance (`.ova`) preconfigured with several threat emulation tools as well as a defender's toolkit.
- [Stratus Red Team](https://stratus-red-team.cloud/) - Emulate offensive attack techniques in a granular and self-contained manner against a cloud environment; think "Atomic Red Team™ for the cloud."
- [tcpreplay](https://tcpreplay.appneta.com/) - Suite of free Open Source utilities for editing and replaying previously captured network traffic originally designed to replay malicious traffic patterns to Intrusion Detection/Prevention Systems.

### Post-engagement analysis and reporting

- [RedEye](https://cisagov.github.io/RedEye/) - Analytic tool to assist both Red and Blue teams with visualizing and reporting command and control activities, replay and demonstrate attack paths, and more clearly communicate remediation recommendations to stakeholders.

## Security configurations

(Also known as *secure-by-default baselines* and *implemented best practices*.)

- [Bunkerized-nginx ![GitHub Repo Stars](https://img.shields.io/github/stars/bunkerity/bunkerized-nginx) ![GitHub last commit](https://img.shields.io/github/last-commit/bunkerity/bunkerized-nginx)](https://github.com/bunkerity/bunkerized-nginx) - Docker image of an NginX configuration and scripts implementing many defensive techniques for Web sites.

## Security monitoring

- [Crossfeed](https://docs.crossfeed.cyber.dhs.gov/) - Continuously enumerates and monitors an organization’s public-facing attack surface in order to discover assets and flag potential security flaws.
- [Starbase ![GitHub Repo Stars](https://img.shields.io/github/stars/JupiterOne/starbase) ![GitHub last commit](https://img.shields.io/github/last-commit/JupiterOne/starbase)](https://github.com/JupiterOne/starbase) - Collects assets and relationships from services and systems into an intuitive graph view to offer graph-based security analysis for everyone.

### Endpoint Detection and Response (EDR)

- [Wazuh](https://wazuh.com/) - Open source, multiplatform agent-based security monitoring based on a fork of OSSEC HIDS.

### Network Security Monitoring (NSM)

See also [awesome-pcaptools ![GitHub Repo Stars](https://img.shields.io/github/stars/caesar0301/awesome-pcaptools) ![GitHub last commit](https://img.shields.io/github/last-commit/caesar0301/awesome-pcaptools)](https://github.com/caesar0301/awesome-pcaptools).

- [Arkime ![GitHub Repo Stars](https://img.shields.io/github/stars/arkime/arkime) ![GitHub last commit](https://img.shields.io/github/last-commit/arkime/arkime)](https://github.com/arkime/arkime) - Augments your current security infrastructure to store and index network traffic in standard PCAP format, providing fast, indexed access.
- [ChopShop ![GitHub Repo Stars](https://img.shields.io/github/stars/MITRECND/chopshop) ![GitHub last commit](https://img.shields.io/github/last-commit/MITRECND/chopshop)](https://github.com/MITRECND/chopshop) - Framework to aid analysts in the creation and execution of pynids-based decoders and detectors of APT tradecraft.
- [Maltrail ![GitHub Repo Stars](https://img.shields.io/github/stars/stamparm/maltrail) ![GitHub last commit](https://img.shields.io/github/last-commit/stamparm/maltrail)](https://github.com/stamparm/maltrail) - Malicious network traffic detection system.
- [OwlH](https://www.owlh.net/) - Helps manage network IDS at scale by visualizing Suricata, Zeek, and Moloch life cycles.
- [Real Intelligence Threat Analysis (RITA) ![GitHub Repo Stars](https://img.shields.io/github/stars/activecm/rita) ![GitHub last commit](https://img.shields.io/github/last-commit/activecm/rita)](https://github.com/activecm/rita) - Open source framework for network traffic analysis that ingests Zeek logs and detects beaconing, DNS tunneling, and more.
- [Respounder ![GitHub Repo Stars](https://img.shields.io/github/stars/codeexpress/respounder) ![GitHub last commit](https://img.shields.io/github/last-commit/codeexpress/respounder)](https://github.com/codeexpress/respounder) - Detects the presence of the Responder LLMNR/NBT-NS/MDNS poisoner on a network.
- [Snort](https://snort.org/) - Widely-deployed, Free Software IPS capable of real-time packet analysis, traffic logging, and custom rule-based triggers.
- [SpoofSpotter ![GitHub Repo Stars](https://img.shields.io/github/stars/NetSPI/SpoofSpotter) ![GitHub last commit](https://img.shields.io/github/last-commit/NetSPI/SpoofSpotter)](https://github.com/NetSPI/SpoofSpotter) - Catch spoofed NetBIOS Name Service (NBNS) responses and alert to an email or log file.
- [Stenographer ![GitHub Repo Stars](https://img.shields.io/github/stars/google/stenographer) ![GitHub last commit](https://img.shields.io/github/last-commit/google/stenographer)](https://github.com/google/stenographer) - Full-packet-capture utility for buffering packets to disk for intrusion detection and incident response purposes.
- [Suricata](https://suricata-ids.org/) - Free, cross-platform, IDS/IPS with on- and off-line analysis modes and deep packet inspection capabilities that is also scriptable with Lua.
- [Tsunami ![GitHub Repo Stars](https://img.shields.io/github/stars/google/tsunami-security-scanner) ![GitHub last commit](https://img.shields.io/github/last-commit/google/tsunami-security-scanner)](https://github.com/google/tsunami-security-scanner) - General purpose network security scanner with an extensible plugin system for detecting high severity vulnerabilities with high confidence. 
- [VAST ![GitHub Repo Stars](https://img.shields.io/github/stars/tenzir/vast) ![GitHub last commit](https://img.shields.io/github/last-commit/tenzir/vast)](https://github.com/tenzir/vast) - Free and open-source network telemetry engine for data-driven security investigations.
- [Wireshark](https://www.wireshark.org) - Free and open-source packet analyzer useful for network troubleshooting or forensic netflow analysis.
- [Zeek](https://zeek.org/) - Powerful network analysis framework focused on security monitoring, formerly known as Bro.
- [netsniff-ng](http://netsniff-ng.org/) -  Free and fast GNU/Linux networking toolkit with numerous utilities such as a connection tracking tool (`flowtop`), traffic generator (`trafgen`), and autonomous system (AS) trace route utility (`astraceroute`).

### Security Information and Event Management (SIEM)

- [AlienVault OSSIM](https://www.alienvault.com/open-threat-exchange/projects) - Single-server open source SIEM platform featuring asset discovery, asset inventorying, behavioral monitoring, and event correlation, driven by AlienVault Open Threat Exchange (OTX).
- [Prelude SIEM OSS](https://www.prelude-siem.org/) - Open source, agentless SIEM with a long history and several commercial variants featuring security event collection, normalization, and alerting from arbitrary log input and numerous popular monitoring tools.

### Service and performance monitoring

See also [awesome-sysadmin#monitoring ![GitHub Repo Stars](https://img.shields.io/github/stars/n1trux/awesome-sysadmin) ![GitHub last commit](https://img.shields.io/github/last-commit/n1trux/awesome-sysadmin)](https://github.com/n1trux/awesome-sysadmin#monitoring).

- [Icinga](https://icinga.com/) - Modular redesign of Nagios with pluggable user interfaces and an expanded set of data connectors, collectors, and reporting tools.
- [Locust](https://locust.io/) - Open source load testing tool in which you can define user behaviour with Python code and swarm your system with millions of simultaneous users.
- [Nagios](https://nagios.org) - Popular network and service monitoring solution and reporting platform.
- [OpenNMS](https://opennms.org/) - Free and feature-rich networking monitoring system supporting multiple configurations, a variety of alerting mechanisms (email, XMPP, SMS), and numerous data collection methods (SNMP, HTTP, JDBC, etc).
- [osquery ![GitHub Repo Stars](https://img.shields.io/github/stars/facebook/osquery) ![GitHub last commit](https://img.shields.io/github/last-commit/facebook/osquery)](https://github.com/facebook/osquery) - Operating system instrumentation framework for macOS, Windows, and Linux, exposing the OS as a high-performance relational database that can be queried with a SQL-like syntax.
- [Zabbix](https://www.zabbix.com/) - Mature, enterprise-level platform to monitor large-scale IT environments.

### Threat hunting

(Also known as *hunt teaming* and *threat detection*.)

See also [awesome-threat-detection ![GitHub Repo Stars](https://img.shields.io/github/stars/0x4D31/awesome-threat-detection) ![GitHub last commit](https://img.shields.io/github/last-commit/0x4D31/awesome-threat-detection)](https://github.com/0x4D31/awesome-threat-detection).

- [CimSweep ![GitHub Repo Stars](https://img.shields.io/github/stars/PowerShellMafia/CimSweep) ![GitHub last commit](https://img.shields.io/github/last-commit/PowerShellMafia/CimSweep)](https://github.com/PowerShellMafia/CimSweep) - Suite of CIM/WMI-based tools enabling remote incident response and hunting operations across all versions of Windows.
- [DeepBlueCLI ![GitHub Repo Stars](https://img.shields.io/github/stars/sans-blue-team/DeepBlueCLI) ![GitHub last commit](https://img.shields.io/github/last-commit/sans-blue-team/DeepBlueCLI)](https://github.com/sans-blue-team/DeepBlueCLI) - PowerShell module for hunt teaming via Windows Event logs.
- [GRR Rapid Response ![GitHub Repo Stars](https://img.shields.io/github/stars/google/grr) ![GitHub last commit](https://img.shields.io/github/last-commit/google/grr)](https://github.com/google/grr) - Incident response framework focused on remote live forensics consisting of a Python agent installed on assets and Python-based server infrastructure enabling analysts to quickly triage attacks and perform analysis remotely.
- [Hunting ELK (HELK) ![GitHub Repo Stars](https://img.shields.io/github/stars/Cyb3rWard0g/HELK) ![GitHub last commit](https://img.shields.io/github/last-commit/Cyb3rWard0g/HELK)](https://github.com/Cyb3rWard0g/HELK) - All-in-one Free Software threat hunting stack based on Elasticsearch, Logstash, Kafka, and Kibana with various built-in integrations for analytics including Jupyter Notebook.
- [Logging Made Easy (LME)](https://www.cisa.gov/resources-tools/services/logging-made-easy) - Free and open logging and protective monitoring solution serving.
- [MozDef ![GitHub Repo Stars](https://img.shields.io/github/stars/mozilla/MozDef) ![GitHub last commit](https://img.shields.io/github/last-commit/mozilla/MozDef)](https://github.com/mozilla/MozDef) - Automate the security incident handling process and facilitate the real-time activities of incident handlers.
- [PSHunt ![GitHub Repo Stars](https://img.shields.io/github/stars/Infocyte/PSHunt) ![GitHub last commit](https://img.shields.io/github/last-commit/Infocyte/PSHunt)](https://github.com/Infocyte/PSHunt) - PowerShell module designed to scan remote endpoints for indicators of compromise or survey them for more comprehensive information related to state of those systems.
- [PSRecon ![GitHub Repo Stars](https://img.shields.io/github/stars/gfoss/PSRecon) ![GitHub last commit](https://img.shields.io/github/last-commit/gfoss/PSRecon)](https://github.com/gfoss/PSRecon) - PSHunt-like tool for analyzing remote Windows systems that also produces a self-contained HTML report of its findings.
- [PowerForensics ![GitHub Repo Stars](https://img.shields.io/github/stars/Invoke-IR/PowerForensics) ![GitHub last commit](https://img.shields.io/github/last-commit/Invoke-IR/PowerForensics)](https://github.com/Invoke-IR/PowerForensics) - All in one PowerShell-based platform to perform live hard disk forensic analysis.
- [Redline](https://www.fireeye.com/services/freeware/redline.html) - Freeware endpoint auditing and analysis tool that provides host-based investigative capabilities, offered by FireEye, Inc.
- [rastrea2r ![GitHub Repo Stars](https://img.shields.io/github/stars/rastrea2r/rastrea2r) ![GitHub last commit](https://img.shields.io/github/last-commit/rastrea2r/rastrea2r)](https://github.com/rastrea2r/rastrea2r) - Multi-platform tool for triaging suspected IOCs on many endpoints simultaneously and that integrates with antivirus consoles.

## Threat intelligence

See also [awesome-threat-intelligence ![GitHub Repo Stars](https://img.shields.io/github/stars/hslatman/awesome-threat-intelligence) ![GitHub last commit](https://img.shields.io/github/last-commit/hslatman/awesome-threat-intelligence)](https://github.com/hslatman/awesome-threat-intelligence).

- [AttackerKB](https://attackerkb.com/) - Free and public crowdsourced vulnerability assessment platform to help prioritize high-risk patch application and combat vulnerability fatigue.
- [DATA ![GitHub Repo Stars](https://img.shields.io/github/stars/hadojae/DATA) ![GitHub last commit](https://img.shields.io/github/last-commit/hadojae/DATA)](https://github.com/hadojae/DATA) - Credential phish analysis and automation tool that can accept suspected phishing URLs directly or trigger on observed network traffic containing such a URL.
- [Forager ![GitHub Repo Stars](https://img.shields.io/github/stars/opensourcesec/Forager) ![GitHub last commit](https://img.shields.io/github/last-commit/opensourcesec/Forager)](https://github.com/opensourcesec/Forager) - Multi-threaded threat intelligence gathering built with Python3 featuring simple text-based configuration and data storage for ease of use and data portability.
- [GRASSMARLIN ![GitHub Repo Stars](https://img.shields.io/github/stars/nsacyber/GRASSMARLIN) ![GitHub last commit](https://img.shields.io/github/last-commit/nsacyber/GRASSMARLIN)](https://github.com/nsacyber/GRASSMARLIN) - Provides IP network situational awareness of industrial control systems (ICS) and Supervisory Control and Data Acquisition (SCADA) by passively mapping, accounting for, and reporting on your ICS/SCADA network topology and endpoints.
- [MLSec Combine ![GitHub Repo Stars](https://img.shields.io/github/stars/mlsecproject/combine) ![GitHub last commit](https://img.shields.io/github/last-commit/mlsecproject/combine)](https://github.com/mlsecproject/combine) - Gather and combine multiple threat intelligence feed sources into one customizable, standardized CSV-based format.
- [Malware Information Sharing Platform and Threat Sharing (MISP)](https://misp-project.org/) - Open source software solution for collecting, storing, distributing and sharing cyber security indicators.
- [Open Source Vulnerabilities (OSV)](https://osv.dev/) - Vulnerability database and triage infrastructure for open source projects aimed at helping both open source maintainers and consumers of open source.
- [Sigma ![GitHub Repo Stars](https://img.shields.io/github/stars/Neo23x0/sigma) ![GitHub last commit](https://img.shields.io/github/last-commit/Neo23x0/sigma)](https://github.com/Neo23x0/sigma) - Generic signature format for SIEM systems, offering an open signature format that allows you to describe relevant log events in a straightforward manner.
- [Threat Bus ![GitHub Repo Stars](https://img.shields.io/github/stars/tenzir/threatbus) ![GitHub last commit](https://img.shields.io/github/last-commit/tenzir/threatbus)](https://github.com/tenzir/threatbus) - Threat intelligence dissemination layer to connect security tools through a distributed publish/subscribe message broker.
- [ThreatIngestor ![GitHub Repo Stars](https://img.shields.io/github/stars/InQuest/ThreatIngestor) ![GitHub last commit](https://img.shields.io/github/last-commit/InQuest/ThreatIngestor)](https://github.com/InQuest/ThreatIngestor) - Extendable tool to extract and aggregate IOCs from threat feeds including Twitter, RSS feeds, or other sources.
- [Unfetter](https://nsacyber.github.io/unfetter/) - Identifies defensive gaps in security posture by leveraging Mitre's ATT&CK framework.
- [Viper ![GitHub Repo Stars](https://img.shields.io/github/stars/viper-framework/viper) ![GitHub last commit](https://img.shields.io/github/last-commit/viper-framework/viper)](https://github.com/viper-framework/viper) - Binary analysis and management framework enabling easy organization of malware and exploit samples.
- [YARA ![GitHub Repo Stars](https://img.shields.io/github/stars/VirusTotal/yara) ![GitHub last commit](https://img.shields.io/github/last-commit/VirusTotal/yara)](https://github.com/VirusTotal/yara) - Tool aimed at (but not limited to) helping malware researchers to identify and classify malware samples, described as "the pattern matching swiss army knife" for file patterns and signatures.

### Fingerprinting

- [HASSH ![GitHub Repo Stars](https://img.shields.io/github/stars/salesforce/hassh) ![GitHub last commit](https://img.shields.io/github/last-commit/salesforce/hassh)](https://github.com/salesforce/hassh) - Network fingerprinting standard which can be used to identify specific client and server SSH implementations.
- [JA3](https://ja3er.com/) - Extracts SSL/TLS handshake settings for fingerprinting and communicating about a given TLS implementation.

### Threat signature packages and collections

- [ESET's Malware IoCs ![GitHub Repo Stars](https://img.shields.io/github/stars/eset/malware-ioc) ![GitHub last commit](https://img.shields.io/github/last-commit/eset/malware-ioc)](https://github.com/eset/malware-ioc) - Indicators of Compromises (IOCs) derived from ESET's various investigations.
- [FireEye's Red Team Tool Countermeasures ![GitHub Repo Stars](https://img.shields.io/github/stars/fireeye/red_team_tool_countermeasures) ![GitHub last commit](https://img.shields.io/github/last-commit/fireeye/red_team_tool_countermeasures)](https://github.com/fireeye/red_team_tool_countermeasures) - Collection of Snort and YARA rules to detect attacks carried out with FireEye's own Red Team tools, first released after FireEye disclosed a breach in December 2020.
- [FireEye's Sunburst Countermeasures ![GitHub Repo Stars](https://img.shields.io/github/stars/fireeye/sunburst_countermeasures) ![GitHub last commit](https://img.shields.io/github/last-commit/fireeye/sunburst_countermeasures)](https://github.com/fireeye/sunburst_countermeasures) - Collection of IoC in various languages for detecting backdoored SolarWinds Orion NMS activities and related vulnerabilities.
- [YARA Rules ![GitHub Repo Stars](https://img.shields.io/github/stars/Yara-Rules/rules) ![GitHub last commit](https://img.shields.io/github/last-commit/Yara-Rules/rules)](https://github.com/Yara-Rules/rules) - Project covering the need for IT security researchers to have a single repository where different Yara signatures are compiled, classified and kept as up to date as possible.

## Tor Onion service defenses

See also [awesome-tor ![GitHub Repo Stars](https://img.shields.io/github/stars/ajvb/awesome-tor) ![GitHub last commit](https://img.shields.io/github/last-commit/ajvb/awesome-tor)](https://github.com/ajvb/awesome-tor).

- [OnionBalance](https://onionbalance.readthedocs.io/) - Provides load-balancing while also making Onion services more resilient and reliable by eliminating single points-of-failure.
- [Vanguards ![GitHub Repo Stars](https://img.shields.io/github/stars/mikeperry-tor/vanguards) ![GitHub last commit](https://img.shields.io/github/last-commit/mikeperry-tor/vanguards)](https://github.com/mikeperry-tor/vanguards) - Version 3 Onion service guard discovery attack mitigation script (intended for eventual inclusion in Tor core).

## Transport-layer defenses

- [Certbot](https://certbot.eff.org/) - Free tool to automate the issuance and renewal of TLS certificates from the [LetsEncrypt Root CA](https://letsencrypt.org/) with plugins that configure various Web and e-mail server software.
- [MITMEngine ![GitHub Repo Stars](https://img.shields.io/github/stars/cloudflare/mitmengine) ![GitHub last commit](https://img.shields.io/github/last-commit/cloudflare/mitmengine)](https://github.com/cloudflare/mitmengine) - Golang library for server-side detection of TLS interception events.
- [Tor](https://torproject.org/) - Censorship circumvention and anonymizing overlay network providing distributed, cryptographically verified name services (`.onion` domains) to enhance publisher privacy and service availability.

### Overlay and Virtual Private Networks (VPNs)

- [Firezone](https://www.firezone.dev/) - Self-hosted VPN server built on WireGuard that supports MFA and SSO.
- [Headscale ![GitHub Repo Stars](https://img.shields.io/github/stars/juanfont/headscale) ![GitHub last commit](https://img.shields.io/github/last-commit/juanfont/headscale)](https://github.com/juanfont/headscale) - Open source, self-hosted implementation of the Tailscale control server.
- [IPsec VPN Server Auto Setup Scripts ![GitHub Repo Stars](https://img.shields.io/github/stars/hwdsl2/setup-ipsec-vpn) ![GitHub last commit](https://img.shields.io/github/last-commit/hwdsl2/setup-ipsec-vpn)](https://github.com/hwdsl2/setup-ipsec-vpn) - Scripts to build your own IPsec VPN server, with IPsec/L2TP, Cisco IPsec and IKEv2.
- [Innernet ![GitHub Repo Stars](https://img.shields.io/github/stars/tonarino/innernet) ![GitHub last commit](https://img.shields.io/github/last-commit/tonarino/innernet)](https://github.com/tonarino/innernet) - Free Software private network system that uses WireGuard under the hood, made to be self-hosted.
- [Nebula ![GitHub Repo Stars](https://img.shields.io/github/stars/slackhq/nebula) ![GitHub last commit](https://img.shields.io/github/last-commit/slackhq/nebula)](https://github.com/slackhq/nebula) - Completely open source and self-hosted, scalable overlay networking tool with a focus on performance, simplicity, and security, inspired by tinc.
- [OpenVPN](https://openvpn.net/) - Longstanding Free Software traditional SSL/TLS-based virtual private network.
- [OpenZITI](https://openziti.github.io/) - Open source initiative focused on bringing Zero Trust to any application via an overlay network, tunelling applications, and numerous SDKs.
- [Tailscale](https://tailscale.com/) - Managed freemium mesh VPN service built on top of WireGuard.
- [WireGuard](https://www.wireguard.com/) - Extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography.
- [tinc](https://tinc-vpn.org/) - Free Software mesh VPN implemented entirely in userspace that supports expandable network space, bridged ethernet segments, and more.

## macOS-based defenses

See also [drduh/macOS-Security-and-Privacy-Guide ![GitHub Repo Stars](https://img.shields.io/github/stars/drduh/macOS-Security-and-Privacy-Guide) ![GitHub last commit](https://img.shields.io/github/last-commit/drduh/macOS-Security-and-Privacy-Guide)](https://github.com/drduh/macOS-Security-and-Privacy-Guide).

- [BlockBlock](https://objective-see.com/products/blockblock.html) - Monitors common persistence locations and alerts whenever a persistent component is added, which helps to detect and prevent malware installation.
- [LuLu](https://objective-see.com/products/lulu.html) - Free macOS firewall.
- [Santa ![GitHub Repo Stars](https://img.shields.io/github/stars/google/santa) ![GitHub last commit](https://img.shields.io/github/last-commit/google/santa)](https://github.com/google/santa) - Keep track of binaries that are naughty or nice in an allow/deny-listing system for macOS.
- [Stronghold ![GitHub Repo Stars](https://img.shields.io/github/stars/alichtman/stronghold) ![GitHub last commit](https://img.shields.io/github/last-commit/alichtman/stronghold)](https://github.com/alichtman/stronghold) - Easily configure macOS security settings from the terminal.
- [macOS Fortress ![GitHub Repo Stars](https://img.shields.io/github/stars/essandess/macOS-Fortress) ![GitHub last commit](https://img.shields.io/github/last-commit/essandess/macOS-Fortress)](https://github.com/essandess/macOS-Fortress) - Automated configuration of kernel-level, OS-level, and client-level security features including privatizing proxying and anti-virus scanning for macOS.

## Windows-based defenses

See also [awesome-windows#security ![GitHub Repo Stars](https://img.shields.io/github/stars/Awesome-Windows/Awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/Awesome-Windows/Awesome)](https://github.com/Awesome-Windows/Awesome#security) and [awesome-windows-domain-hardening ![GitHub Repo Stars](https://img.shields.io/github/stars/PaulSec/awesome-windows-domain-hardening) ![GitHub last commit](https://img.shields.io/github/last-commit/PaulSec/awesome-windows-domain-hardening)](https://github.com/PaulSec/awesome-windows-domain-hardening).

- [CobaltStrikeScan ![GitHub Repo Stars](https://img.shields.io/github/stars/Apr4h/CobaltStrikeScan) ![GitHub last commit](https://img.shields.io/github/last-commit/Apr4h/CobaltStrikeScan)](https://github.com/Apr4h/CobaltStrikeScan) - Scan files or process memory for Cobalt Strike beacons and parse their configuration.
- [HardenTools ![GitHub Repo Stars](https://img.shields.io/github/stars/securitywithoutborders/hardentools) ![GitHub last commit](https://img.shields.io/github/last-commit/securitywithoutborders/hardentools)](https://github.com/securitywithoutborders/hardentools) - Utility that disables a number of risky Windows features.
- [NotRuler ![GitHub Repo Stars](https://img.shields.io/github/stars/sensepost/notruler) ![GitHub last commit](https://img.shields.io/github/last-commit/sensepost/notruler)](https://github.com/sensepost/notruler) - Detect both client-side rules and VBScript enabled forms used by the [Ruler ![GitHub Repo Stars](https://img.shields.io/github/stars/sensepost/ruler) ![GitHub last commit](https://img.shields.io/github/last-commit/sensepost/ruler)](https://github.com/sensepost/ruler) attack tool when attempting to compromise a Microsoft Exchange server.
- [Sandboxie](https://www.sandboxie.com/) - Free and open source general purpose Windows application sandboxing utility.
- [Sigcheck](https://docs.microsoft.com/en-us/sysinternals/downloads/sigcheck) - Audit a Windows host's root certificate store against Microsoft's [Certificate Trust List (CTL)](https://docs.microsoft.com/en-us/windows/desktop/SecCrypto/certificate-trust-list-overview).
- [Sticky Keys Slayer ![GitHub Repo Stars](https://img.shields.io/github/stars/linuz/Sticky-Keys-Slayer) ![GitHub last commit](https://img.shields.io/github/last-commit/linuz/Sticky-Keys-Slayer)](https://github.com/linuz/Sticky-Keys-Slayer) - Establishes a Windows RDP session from a list of hostnames and scans for accessibility tools backdoors, alerting if one is discovered.
- [Windows Secure Host Baseline ![GitHub Repo Stars](https://img.shields.io/github/stars/nsacyber/Windows-Secure-Host-Baseline) ![GitHub last commit](https://img.shields.io/github/last-commit/nsacyber/Windows-Secure-Host-Baseline)](https://github.com/nsacyber/Windows-Secure-Host-Baseline) - Group Policy objects, compliance checks, and configuration tools that provide an automated and flexible approach for securely deploying and maintaining the latest releases of Windows 10.
- [WMI Monitor ![GitHub Repo Stars](https://img.shields.io/github/stars/realparisi/WMI_Monitor) ![GitHub last commit](https://img.shields.io/github/last-commit/realparisi/WMI_Monitor)](https://github.com/realparisi/WMI_Monitor) - Log newly created WMI consumers and processes to the Windows Application event log.

### Active Directory

- [Active Directory Control Paths ![GitHub Repo Stars](https://img.shields.io/github/stars/ANSSI-FR/AD-control-paths) ![GitHub last commit](https://img.shields.io/github/last-commit/ANSSI-FR/AD-control-paths)](https://github.com/ANSSI-FR/AD-control-paths) - Visualize and graph Active Directory permission configs ("control relations") to audit questions such as "Who can read the CEO's email?" and similar.
- [PingCastle](https://www.pingcastle.com/) - Active Directory vulnerability detection and reporting tool.
- [PlumHound ![GitHub Repo Stars](https://img.shields.io/github/stars/PlumHound/PlumHound) ![GitHub last commit](https://img.shields.io/github/last-commit/PlumHound/PlumHound)](https://github.com/PlumHound/PlumHound) - More effectively use BloodHoundAD in continual security life-cycles by utilizing its pathfinding engine to identify Active Directory security vulnerabilities.

## License

[![CC-BY](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by.svg)](https://creativecommons.org/licenses/by/4.0/)

This work is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).
