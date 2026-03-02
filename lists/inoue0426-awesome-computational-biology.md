# Awesome Computational Biology [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A curated collection of databases, software, and papers related to computational biology.

> Computational biology involves the development and application of data-analytical and theoretical methods, mathematical modelling and computational simulation techniques to the study of biological, ecological, behavioural, and social systems. — [Wikipedia](https://en.wikipedia.org/wiki/Computational_biology)

---

## Table of Contents

- [Awesome Computational Biology ](#awesome-computational-biology-)
  - [Table of Contents](#table-of-contents)
  - [Databases](#databases)
    - [scRNA](#scrna)
    - [Compound](#compound)
    - [Pathway](#pathway)
    - [Mass Spectra](#mass-spectra)
    - [Protein](#protein)
    - [Genome](#genome)
    - [Disease](#disease)
    - [Interaction](#interaction)
      - [Drug-Gene Interaction](#drug-gene-interaction)
      - [Drug (Cell Line) Response](#drug-cell-line-response)
      - [Chemical-Protein Interaction](#chemical-protein-interaction)
      - [Protein-Protein Interaction](#protein-protein-interaction)
      - [Knowledge Graph](#knowledge-graph)
    - [Clinical Trial](#clinical-trial)
  - [Benchmarks & Datasets](#benchmarks--datasets)
  - [API](#api)
  - [Preprocessing Tools](#preprocessing-tools)
  - [Machine Learning Tasks and Models](#machine-learning-tasks-and-models)
    - [Drug Discovery](#drug-discovery)
      - [Drug Response Prediction](#drug-response-prediction)
      - [Drug Repurposing](#drug-repurposing)
      - [Drug Target Interaction](#drug-target-interaction)
      - [Compound-Protein Interaction](#compound-protein-interaction)
      - [Molecular Generation](#molecular-generation)
    - [LLM for Biology](#llm-for-biology)
    - [Foundation Models](#foundation-models)
      - [Single-cell Foundation Models](#single-cell-foundation-models)
        - [Transcriptomics Foundation Models](#transcriptomics-foundation-models)
        - [Spatial Foundation Models](#spatial-foundation-models)
        - [Multi-Omics Foundation Models](#multi-omics-foundation-models)
        - [Domain Alignment](#domain-alignment)
      - [Protein Foundation Models](#protein-foundation-models)
        - [Pre-trained Embedding](#pre-trained-embedding)
        - [Protein Structure Prediction and Design](#protein-structure-prediction-and-design)
      - [Multi-Modal Foundation Models](#multi-modal-foundation-models)
      - [Genomics Foundation Models](#genomics-foundation-models)

---

## Databases

### scRNA

- [CZ CELLxGENE](https://cellxgene.cziscience.com/) — Single-cell dataset repository and interactive explorer from the Chan Zuckerberg Initiative.
- [Gene Expression Omnibus](https://www.ncbi.nlm.nih.gov/geo/) — Public functional genomics database.
- [Human Cell Atlas](https://www.humancellatlas.org/) — Open global atlas of all cells in the human body.
- [Single Cell PORTAL](https://singlecell.broadinstitute.org/single_cell) — Public database for single-cell RNA.
- [Single Cell Expression Atlas](https://www.ebi.ac.uk/gxa/sc/home) — Public database for single-cell RNA.

### Compound

- [PubChem](https://pubchem.ncbi.nlm.nih.gov/) — One of the largest chemical databases (compounds, genes, and proteins).
- [ChEBI](https://www.ebi.ac.uk/chebi/) — Database focused on small chemical compounds.
- [ChEMBL](https://www.ebi.ac.uk/chembl/) — Bioactive molecules with drug-like properties.
- [ChemSpider](http://www.chemspider.com/) — Chemical structure database.
- [HMDB (Human Metabolome Database)](https://hmdb.ca/) — Comprehensive database of small molecule metabolites found in the human body.
- [KEGG COMPOUND](https://www.genome.jp/kegg/compound/) — Collection of small molecules and biopolymers.
- [LIPID MAPS](https://www.lipidmaps.org/databases/lmsd/overview) — Database of lipids.
- [Rhea](https://www.rhea-db.org/) — Database of chemical reactions.
- [DrugCentral](http://drugcentral.org/) — Online drug compendium with drug mode of action and indication information.
- [Drug Repurposing Hub](https://repo-hub.broadinstitute.org/repurposing#download-data) — Collections of drug repurposing data (drug, MoA, target, etc).
- [Therapeutic Target Database](https://idrblab.net/ttd/full-data-download) — Drug-target, target-disease, and drug-disease datasets.
- [ZINC ligand discovery database](https://zinc.docking.org/) — Free database of commercially-available compounds for virtual screening.

### Pathway

- [PathwayCommons](https://www.pathwaycommons.org/) — Database of pathways and interactions.
- [KEGG PATHWAY](https://www.genome.jp/kegg/pathway.html) — Collection of pathway maps.
- [WikiPathways](https://wikipathways.org/) — Database of biological pathways.
- [Reactome](https://reactome.org/) — Expert-curated, peer-reviewed pathway database with detailed reaction mechanisms.
- [BioCyc](https://biocyc.org/) — Collection of pathway/genome databases across thousands of organisms.
- [SIGNOR](https://signor.uniroma2.it/) — Database of causal signaling interactions and pathways.
- [MSigDB (Molecular Signatures Database)](https://www.gsea-msigdb.org/gsea/msigdb) — Curated gene sets derived from pathways and biological processes.

### Mass Spectra

- [MassBank](http://www.massbank.jp/) — Open source databases and tools for mass spectrometry reference spectra.
- [MoNA MassBank of North America](https://mona.fiehnlab.ucdavis.edu/) — Meta-database of metabolite mass spectra, metadata, and associated compounds.

### Protein

- [THE HUMAN PROTEIN ATLAS](https://www.proteinatlas.org/) — Comprehensive human protein database (cells, tissues, organs).
- [PROTEIN DATA BANK (PDB)](https://www.rcsb.org/) — 3D structures of proteins, nucleic acids, complexes.
- [UniProt](https://www.uniprot.org/) — Functional information on proteins.
- [AlphaFold Protein Structure Database](https://alphafold.ebi.ac.uk/api-docs) — 3D protein structure predictions.
- [RCSB Protein Data Bank](https://www.rcsb.org/) — Repository for structural data of biological molecules.
- [Critical Assessment of Structure Prediction (CASP)](https://predictioncenter.org/) — Assessing methods for protein structure prediction.
- [Uniclust](https://uniclust.mmseqs.com/) — Clustered protein sequence databases.
- [CATH database](https://www.cathdb.info/) — Hierarchical classification of protein domain structures.
- [SAbDab](https://opig.stats.ox.ac.uk/webapps/sabdab-sabpred/sabdab) — Structural Antibody Database containing all antibody structures in the PDB.
- [OADB (Observed Antibody Space Database)](http://opig.stats.ox.ac.uk/webapps/oas/) — Database of antibody sequences from immune repertoire sequencing.

### Genome

- [ENCODE](https://www.encodeproject.org/) — Encyclopedia of DNA Elements; regulatory and functional genomic elements across the genome.
- [Ensembl](https://www.ensembl.org/) — Genome browser and annotation database for vertebrate and other eukaryotic genomes.
- [Human Genome Resources at NCBI](https://www.ncbi.nlm.nih.gov/projects/genome/guide/human/index.shtml) — Database for genomics, proteomics, transcriptomics, and systems biology.
- [GenBank](https://www.ncbi.nlm.nih.gov/genbank/) — NCBI's database of genetic sequences.
- [UCSC Genome Browser](https://genome.ucsc.edu/) — UCSC's genome browser.
- [cBioPortal](https://www.cbioportal.org/) — Cancer genomics database; aggregating many patient datasets.
- [10x Genomics Dataset](https://www.10xgenomics.com/resources/datasets) — Collection of single-cell datasets.
- [The Genotype-Tissue Expression (GTEx)](https://gtexportal.org/home/) — Human gene expression and regulation resource.
- [Dependency Map (DepMap)](https://depmap.org/portal/) — CRISPR-Cas9 screens in cancer cell lines.
- [Catalogue Of Somatic Mutations In Cancer (COSMIC)](https://cancer.sanger.ac.uk/cosmic) — Resource on somatic mutations in cancers.
- [MGnify](https://www.ebi.ac.uk/metagenomics/) — Resource for metagenomic and metatranscriptomic data.
- [JASPAR](http://jaspar.genereg.net/) — Database of transcription factor binding profiles.
- [gnomAD](https://gnomad.broadinstitute.org/) — Genome Aggregation Database; genetic variation from large-scale sequencing projects.
- [Rfam](https://rfam.org/) — Database of RNA families with sequence alignments and consensus structures.

### Disease

- [KEGG DRUG](https://www.genome.jp/kegg/drug/) — Comprehensive, approved drug information.
- [DrugBank](https://go.drugbank.com/) — Database of drugs and targets (University of Alberta).
- [DisGeNET](https://www.disgenet.org/) — Database of gene-disease associations integrating expert-curated and GWAS data.
- [OMIM (Online Mendelian Inheritance in Man)](https://www.omim.org/) — Comprehensive database of human genes and genetic disorders.

### Interaction

#### Drug-Gene Interaction

- [DGIdb](https://www.dgidb.org/) — Drug-gene interactions and the druggable genome.
- [Comparative Toxicogenomics Database](http://ctdbase.org/) — Chemical-gene interactions, chemical-disease and gene-disease associations, chemical-phenotype associations.
- [SNAP](https://snap.stanford.edu/biodata/datasets/10002/10002-ChG-Miner.html) — Dataset of drug-gene interactions.

#### Drug (Cell Line) Response

- [NCI60](https://dtp.cancer.gov/discovery_development/nci-60/) — Focuses on 60 cancer cell lines and many drugs.
- [Genomics of Drug Sensitivity in Cancer (GDSC)](https://www.cancerrxgene.org/) — Drug sensitivity for ~1000 human cancer cell lines and hundreds of compounds.
- [Cancer Cell Line Encyclopedia](https://sites.broadinstitute.org/ccle/) — Database of ~1000 cancer cell lines.
- [CellMiner Cross Database (CellMinerCDB)](https://discover.nci.nih.gov/cellminercdb/) — Integrates multiple cancer cell line databases.

#### Chemical-Protein Interaction

- [STITCH](http://stitch.embl.de/) — Chemical-protein interactions.
- [BindingDB](https://www.bindingdb.org/rwd/bind/index.jsp) — Compounds and target database.
- [PDBBind](https://www.pdbbind-plus.org.cn/) — Binding affinity data for biomolecular complexes.

#### Protein-Protein Interaction

- [STRING](https://string-db.org/) — PPI networks for multiple organisms.
- [BioGRID](https://thebiogrid.org/) — Protein, genetic, and chemical interactions.
- [HIPPIE](http://cbdm-01.zdv.uni-mainz.de/~mschaefer/hippie/) — Human protein-protein interaction database.
- [IntAct](https://www.ebi.ac.uk/intact/home) — Open-source molecular interaction database and analysis system from EMBL-EBI.

#### Knowledge Graph

- [Drug Mechanism Database (DrugMechDB) ![GitHub Repo Stars](https://img.shields.io/github/stars/SuLab/DrugMechDB) ![GitHub last commit](https://img.shields.io/github/last-commit/SuLab/DrugMechDB)](https://github.com/SuLab/DrugMechDB/tree/2.0.1) — Mechanisms of action from drug to disease.
- [DRKG ![GitHub Repo Stars](https://img.shields.io/github/stars/gnn4dr/DRKG) ![GitHub last commit](https://img.shields.io/github/last-commit/gnn4dr/DRKG)](https://github.com/gnn4dr/DRKG) — Large-scale biological knowledge graph for drug discovery.
- [Hetionet ![GitHub Repo Stars](https://img.shields.io/github/stars/hetio/hetionet) ![GitHub last commit](https://img.shields.io/github/last-commit/hetio/hetionet)](https://github.com/hetio/hetionet) — Heterogeneous network integrating genes, diseases, drugs, pathways, and more.
- [PrimeKG ![GitHub Repo Stars](https://img.shields.io/github/stars/mims-harvard/PrimeKG) ![GitHub last commit](https://img.shields.io/github/last-commit/mims-harvard/PrimeKG)](https://github.com/mims-harvard/PrimeKG) — Multi-modal precision medicine knowledge graph integrating clinical, genetic, and drug data.

### Clinical Trial

- [ClinicalTrials.gov](https://clinicaltrials.gov/) — Privately and publicly funded clinical studies.
- [ICD10](https://icd.who.int/browse10/2019/en) — International Classification of Diseases, 10th revision.
- [EU Drug Regulating Authorities Clinical Trials DB (EudraCT)](https://eudract.ema.europa.eu/) — European clinical trial database.
- [MIMIC-IV](https://mimic.mit.edu/) — Freely accessible critical care database.

---

## Benchmarks & Datasets

- [CrossDocked2020](https://arxiv.org/abs/2001.01037) — Large-scale dataset for structure-based virtual screening.
- [GuacaMol ![GitHub Repo Stars](https://img.shields.io/github/stars/BenevolentAI/guacamol) ![GitHub last commit](https://img.shields.io/github/last-commit/BenevolentAI/guacamol)](https://github.com/BenevolentAI/guacamol) — Benchmark suite for generative molecular design models.
- [MoleculeNet](http://moleculenet.ai/) — Benchmark datasets for molecular machine learning.
- [MOSES ![GitHub Repo Stars](https://img.shields.io/github/stars/molecularsets/moses) ![GitHub last commit](https://img.shields.io/github/last-commit/molecularsets/moses)](https://github.com/molecularsets/moses) — Benchmarking platform for molecular generation models.
- [OpenBioLink ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenBioLink/OpenBioLink) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenBioLink/OpenBioLink)](https://github.com/OpenBioLink/OpenBioLink) — Benchmark datasets for biological knowledge graph completion.
- [Therapeutics Data Commons](https://tdcommons.ai/) — Datasets for drug-target, response, drug-drug interaction, etc.

---

## API

- [PubMed E-utilities (esearch/efetch)](https://www.nlm.nih.gov/dataguide/edirect/esearch.html) — APIs for searching and retrieving biomedical literature from PubMed.
- [NCBI E-utilities](https://www.ncbi.nlm.nih.gov/books/NBK25501/) — Unified APIs for accessing NCBI databases (Gene, GEO, SRA, PubChem, etc).
- [UniProt REST API](https://www.uniprot.org/help/api) — Programmatic access to protein sequence and functional annotation data.
- [Ensembl REST API](https://rest.ensembl.org/) — API for genomic annotations, variants, genes, and comparative genomics.
- [KEGG REST API](https://www.kegg.jp/kegg/rest/keggapi.html) — API for accessing KEGG pathways, compounds, genes, and reactions.
- [ChEMBL Web Services](https://www.ebi.ac.uk/chembl/ws) — REST API for bioactive molecules, targets, and bioassays.
- [Open Targets Platform API](https://platform.opentargets.org/api) — API for target–disease associations integrating genetics, genomics, and drug data.
- [ClinicalTrials.gov API](https://clinicaltrials.gov/api/gui) — API for querying clinical trial metadata and results.

---

## Preprocessing Tools

- [Chemistry Development Kit ![GitHub Repo Stars](https://img.shields.io/github/stars/cdk/cdk) ![GitHub last commit](https://img.shields.io/github/last-commit/cdk/cdk)](https://github.com/cdk/cdk) — Cheminformatics software & machine learning tools.
- [Biopython](https://biopython.org/) — Collection of Python tools for biological computation including sequence analysis, structure parsing, and database access.
- [FlashDeconv ![GitHub Repo Stars](https://img.shields.io/github/stars/cafferychen777/flashdeconv) ![GitHub last commit](https://img.shields.io/github/last-commit/cafferychen777/flashdeconv)](https://github.com/cafferychen777/flashdeconv) — High-performance spatial transcriptomics deconvolution (~1M spots in ~3 min).
- [RDKit ![GitHub Repo Stars](https://img.shields.io/github/stars/rdkit/rdkit) ![GitHub last commit](https://img.shields.io/github/last-commit/rdkit/rdkit)](https://github.com/rdkit/rdkit) — Cheminformatics software & machine learning toolkit.
- [DeepChem ![GitHub Repo Stars](https://img.shields.io/github/stars/deepchem/deepchem) ![GitHub last commit](https://img.shields.io/github/last-commit/deepchem/deepchem)](https://github.com/deepchem/deepchem) — Deep learning library for drug discovery, quantum chemistry, and materials science.
- [ChatSpatial ![GitHub Repo Stars](https://img.shields.io/github/stars/cafferychen777/ChatSpatial) ![GitHub last commit](https://img.shields.io/github/last-commit/cafferychen777/ChatSpatial)](https://github.com/cafferychen777/ChatSpatial) — MCP server for spatial transcriptomics analysis via natural language.
- [Scanpy](https://scanpy.readthedocs.io/en/stable/) — Python library for scRNA-seq analysis.
- [Seurat](https://satijalab.org/seurat/) — R library for scRNA-seq analysis.
- [scvi-tools](https://scvi-tools.org/) — Probabilistic models for single-cell omics data analysis.
- [CellTypist ![GitHub Repo Stars](https://img.shields.io/github/stars/Teichlab/celltypist) ![GitHub last commit](https://img.shields.io/github/last-commit/Teichlab/celltypist)](https://github.com/Teichlab/celltypist) — Automated cell type annotation for scRNA-seq.
- [Squidpy](https://squidpy.readthedocs.io/) — Python library for spatial single-cell analysis.
- [GROMACS](https://www.gromacs.org/) — Molecular dynamics simulation package for biochemical molecules.
- [MDAnalysis](https://www.mdanalysis.org/) — Python library for analyzing and altering molecular dynamics simulation trajectories.
- [OpenMM](https://openmm.org/) — High-performance toolkit for molecular simulation and GPU-accelerated MD.

---

## Machine Learning Tasks and Models

### Drug Discovery

#### Drug Response Prediction

- [drGAT ![GitHub Repo Stars](https://img.shields.io/github/stars/inoue0426/drGAT) ![GitHub last commit](https://img.shields.io/github/last-commit/inoue0426/drGAT)](https://github.com/inoue0426/drGAT) — Attention-based model for drug response prediction with gene explainability.
- [MOFGCN ![GitHub Repo Stars](https://img.shields.io/github/stars/weiba/MOFGCN) ![GitHub last commit](https://img.shields.io/github/last-commit/weiba/MOFGCN)](https://github.com/weiba/MOFGCN/tree/main) — GCN + heterogeneous network.
- [DeepDSC](https://ieeexplore-ieee-org.ezp2.lib.umn.edu/stamp/stamp.jsp?tp=&arnumber=8723620&tag=1) — Autoencoder + fully connected NN.
- [DGDRP ![GitHub Repo Stars](https://img.shields.io/github/stars/minwoopak/heteronet) ![GitHub last commit](https://img.shields.io/github/last-commit/minwoopak/heteronet)](https://github.com/minwoopak/heteronet) — Multi-view embedding neural network.
- [DeepAEG ![GitHub Repo Stars](https://img.shields.io/github/stars/zhejiangzhuque/DeepAEG) ![GitHub last commit](https://img.shields.io/github/last-commit/zhejiangzhuque/DeepAEG)](https://github.com/zhejiangzhuque/DeepAEG) — GNN embedding + attention mechanism.

#### Drug Repurposing

- [DeepPurpose ![GitHub Repo Stars](https://img.shields.io/github/stars/kexinhuang12345/DeepPurpose) ![GitHub last commit](https://img.shields.io/github/last-commit/kexinhuang12345/DeepPurpose)](https://github.com/kexinhuang12345/DeepPurpose) — Deep learning library for drug repurposing.

#### Drug Target Interaction

- [NeoDTI ![GitHub Repo Stars](https://img.shields.io/github/stars/FangpingWan/NeoDTI) ![GitHub last commit](https://img.shields.io/github/last-commit/FangpingWan/NeoDTI)](https://github.com/FangpingWan/NeoDTI) — Library for drug-target interaction prediction.
- [DTINet ![GitHub Repo Stars](https://img.shields.io/github/stars/luoyunan/DTINet) ![GitHub last commit](https://img.shields.io/github/last-commit/luoyunan/DTINet)](https://github.com/luoyunan/DTINet) — Network-based framework integrating heterogeneous biological data for DTI prediction.
- [DeepDTA ![GitHub Repo Stars](https://img.shields.io/github/stars/hkmztrk/DeepDTA) ![GitHub last commit](https://img.shields.io/github/last-commit/hkmztrk/DeepDTA)](https://github.com/hkmztrk/DeepDTA) — Deep learning model using CNNs on protein sequences and drug SMILES.
- [GraphDTA ![GitHub Repo Stars](https://img.shields.io/github/stars/thinng/GraphDTA) ![GitHub last commit](https://img.shields.io/github/last-commit/thinng/GraphDTA)](https://github.com/thinng/GraphDTA) — Graph neural network–based DTI prediction using molecular graphs.
- [MolTrans ![GitHub Repo Stars](https://img.shields.io/github/stars/kexinhuang12345/MolTrans) ![GitHub last commit](https://img.shields.io/github/last-commit/kexinhuang12345/MolTrans)](https://github.com/kexinhuang12345/MolTrans) — Transformer-based DTI model leveraging molecular substructures.
- [DrugBAN ![GitHub Repo Stars](https://img.shields.io/github/stars/peizhenbai/DrugBAN) ![GitHub last commit](https://img.shields.io/github/last-commit/peizhenbai/DrugBAN)](https://github.com/peizhenbai/DrugBAN) — Bilinear attention network for interpretable DTI prediction.

#### Compound-Protein Interaction

- [MCPINN ![GitHub Repo Stars](https://img.shields.io/github/stars/mhlee0903/multi_channels_PINN) ![GitHub last commit](https://img.shields.io/github/last-commit/mhlee0903/multi_channels_PINN)](https://github.com/mhlee0903/multi_channels_PINN) — Drug discovery via compound-protein interaction and machine learning.
- [TransformerCPI ![GitHub Repo Stars](https://img.shields.io/github/stars/lifanchen-simm/transformerCPI) ![GitHub last commit](https://img.shields.io/github/last-commit/lifanchen-simm/transformerCPI)](https://github.com/lifanchen-simm/transformerCPI) — CPI prediction using Transformer.

#### Molecular Generation

- [REINVENT ![GitHub Repo Stars](https://img.shields.io/github/stars/MolecularAI/Reinvent) ![GitHub last commit](https://img.shields.io/github/last-commit/MolecularAI/Reinvent)](https://github.com/MolecularAI/Reinvent) — Reinforcement learning for de novo drug design.
- [MolGPT ![GitHub Repo Stars](https://img.shields.io/github/stars/devalab/molgpt) ![GitHub last commit](https://img.shields.io/github/last-commit/devalab/molgpt)](https://github.com/devalab/molgpt) — Transformer-based model for molecular generation.
- [Molecular Transformer ![GitHub Repo Stars](https://img.shields.io/github/stars/pschwllr/MolecularTransformer) ![GitHub last commit](https://img.shields.io/github/last-commit/pschwllr/MolecularTransformer)](https://github.com/pschwllr/MolecularTransformer) — Sequence-to-sequence model for retrosynthesis prediction.
- [TargetDiff ![GitHub Repo Stars](https://img.shields.io/github/stars/guanjq/targetdiff) ![GitHub last commit](https://img.shields.io/github/last-commit/guanjq/targetdiff)](https://github.com/guanjq/targetdiff) — 3D equivariant diffusion model for structure-based drug design.

### LLM for Biology

- [AI4Chem/ChemLLM-7B-Chat](https://huggingface.co/AI4Chem/ChemLLM-7B-Chat) — LLM for chemical & molecular science.
- [BioGPT ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/BioGPT) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/BioGPT)](https://github.com/microsoft/BioGPT) — LLM for biomedical text generation.
- [GeneGPT ![GitHub Repo Stars](https://img.shields.io/github/stars/ncbi/GeneGPT) ![GitHub last commit](https://img.shields.io/github/last-commit/ncbi/GeneGPT)](https://github.com/ncbi/GeneGPT) — LLM for biomedical information, integrated with various APIs.
- [GenePT ![GitHub Repo Stars](https://img.shields.io/github/stars/yiqunchen/GenePT) ![GitHub last commit](https://img.shields.io/github/last-commit/yiqunchen/GenePT)](https://github.com/yiqunchen/GenePT) — Foundation LLM for single-cell data.
- [scPRINT ![GitHub Repo Stars](https://img.shields.io/github/stars/cantinilab/scPRINT) ![GitHub last commit](https://img.shields.io/github/last-commit/cantinilab/scPRINT)](https://github.com/cantinilab/scPRINT) — Pretrained on 50M cells for scRNA-seq denoising & zero imputation.
- [ClawBio ![GitHub Repo Stars](https://img.shields.io/github/stars/ClawBio/ClawBio) ![GitHub last commit](https://img.shields.io/github/last-commit/ClawBio/ClawBio)](https://github.com/ClawBio/ClawBio) — Bioinformatics-native AI agent skill library with local-first pharmacogenomics, ancestry PCA, semantic similarity, nutrigenomics, and metagenomics skills.

### Foundation Models

#### Single-cell Foundation Models

##### Transcriptomics Foundation Models

- [scFoundation ![GitHub Repo Stars](https://img.shields.io/github/stars/biomap-research/scFoundation) ![GitHub last commit](https://img.shields.io/github/last-commit/biomap-research/scFoundation)](https://github.com/biomap-research/scFoundation) — Large-scale foundation model for single-cell gene expression, enabling multiple downstream tasks.
- [scGPT ![GitHub Repo Stars](https://img.shields.io/github/stars/bowang-lab/scGPT) ![GitHub last commit](https://img.shields.io/github/last-commit/bowang-lab/scGPT)](https://github.com/bowang-lab/scGPT) — Transformer-based foundation model pretrained on millions of single-cell profiles.
- [Geneformer](https://huggingface.co/ctheodoris/Geneformer) — Context-aware, attention-based deep learning model pretrained on a large corpus of single-cell transcriptomes.
- [BulkFormer ![GitHub Repo Stars](https://img.shields.io/github/stars/KangBoming/BulkFormer) ![GitHub last commit](https://img.shields.io/github/last-commit/KangBoming/BulkFormer)](https://github.com/KangBoming/BulkFormer) — Foundation model for bulk RNA-seq data; learns general transcriptomic representations.
- [scBERT ![GitHub Repo Stars](https://img.shields.io/github/stars/TencentAILabHealthcare/scBERT) ![GitHub last commit](https://img.shields.io/github/last-commit/TencentAILabHealthcare/scBERT)](https://github.com/TencentAILabHealthcare/scBERT) — BERT-based foundation model pretrained on large-scale scRNA-seq data for cell type annotation.
- [CellPLM ![GitHub Repo Stars](https://img.shields.io/github/stars/OmicsML/CellPLM) ![GitHub last commit](https://img.shields.io/github/last-commit/OmicsML/CellPLM)](https://github.com/OmicsML/CellPLM) — Cell pre-trained language model with inter-cell transformer architecture for diverse single-cell analysis tasks.

##### Spatial Foundation Models

- [GigaPath ![GitHub Repo Stars](https://img.shields.io/github/stars/prov-gigapath/prov-gigapath) ![GitHub last commit](https://img.shields.io/github/last-commit/prov-gigapath/prov-gigapath)](https://github.com/prov-gigapath/prov-gigapath) — Slide-level digital pathology foundation model pretrained on 1.3 billion pathology image tokens from whole-slide images.
- [UNI ![GitHub Repo Stars](https://img.shields.io/github/stars/mahmoodlab/UNI) ![GitHub last commit](https://img.shields.io/github/last-commit/mahmoodlab/UNI)](https://github.com/mahmoodlab/UNI) — General-purpose self-supervised pathology foundation model trained on 100K+ whole-slide images for diverse computational pathology tasks.
- [CONCH ![GitHub Repo Stars](https://img.shields.io/github/stars/mahmoodlab/CONCH) ![GitHub last commit](https://img.shields.io/github/last-commit/mahmoodlab/CONCH)](https://github.com/mahmoodlab/CONCH) — Vision-language foundation model for computational pathology trained with contrastive captioning on pathology image–text pairs.
- [Phikon](https://huggingface.co/owkin/phikon) — ViT-based pathology foundation model pretrained with iBOT self-supervision on TCGA whole-slide images.

##### Multi-Omics Foundation Models

- [scMulan ![GitHub Repo Stars](https://img.shields.io/github/stars/SuperBianC/scMulan) ![GitHub last commit](https://img.shields.io/github/last-commit/SuperBianC/scMulan)](https://github.com/SuperBianC/scMulan) — Single-cell multi-omic language model pretrained on ~10M cells spanning transcriptomics, epigenomics, and proteomics for cross-omics transfer tasks.
- [totalVI ![GitHub Repo Stars](https://img.shields.io/github/stars/scverse/scvi-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/scverse/scvi-tools)](https://github.com/scverse/scvi-tools) — Probabilistic framework for joint analysis of paired scRNA-seq and protein (CITE-seq) data enabling multi-modal cell state representation across single-cell datasets.
- [MultiVI ![GitHub Repo Stars](https://img.shields.io/github/stars/scverse/scvi-tools) ![GitHub last commit](https://img.shields.io/github/last-commit/scverse/scvi-tools)](https://github.com/scverse/scvi-tools) — Multi-modal variational autoencoder for integrating paired and unpaired single-cell RNA-seq and ATAC-seq measurements into a unified latent space.
- [MIRA ![GitHub Repo Stars](https://img.shields.io/github/stars/cistrome/MIRA) ![GitHub last commit](https://img.shields.io/github/last-commit/cistrome/MIRA)](https://github.com/cistrome/MIRA) — Probabilistic multimodal topic model jointly modeling single-cell transcriptomics and chromatin accessibility for regulatory network inference.
- [GLUE ![GitHub Repo Stars](https://img.shields.io/github/stars/gao-lab/GLUE) ![GitHub last commit](https://img.shields.io/github/last-commit/gao-lab/GLUE)](https://github.com/gao-lab/GLUE) — Graph-Linked Unified Embedding framework for unpaired single-cell multi-omics data integration across RNA, ATAC, methylation, and protein modalities.
- [BABEL ![GitHub Repo Stars](https://img.shields.io/github/stars/wukevin/babel) ![GitHub last commit](https://img.shields.io/github/last-commit/wukevin/babel)](https://github.com/wukevin/babel) — Cross-modality translation model enabling prediction between scRNA-seq and scATAC-seq profiles without requiring paired single-cell measurements.
- [Multigrate ![GitHub Repo Stars](https://img.shields.io/github/stars/theislab/multigrate) ![GitHub last commit](https://img.shields.io/github/last-commit/theislab/multigrate)](https://github.com/theislab/multigrate) — Asymmetric multi-omics variational autoencoder for integrating single-cell data across RNA, ATAC, and protein modalities with missing-modality support.
- [MOFA+ ![GitHub Repo Stars](https://img.shields.io/github/stars/bioFAM/MOFA2) ![GitHub last commit](https://img.shields.io/github/last-commit/bioFAM/MOFA2)](https://github.com/bioFAM/MOFA2) — Multi-Omics Factor Analysis framework identifying shared axes of variation across bulk and single-cell datasets including RNA, ATAC, proteomics, methylation, and copy number.
- [GeneCompass ![GitHub Repo Stars](https://img.shields.io/github/stars/xCompass-AI/GeneCompass) ![GitHub last commit](https://img.shields.io/github/last-commit/xCompass-AI/GeneCompass)](https://github.com/xCompass-AI/GeneCompass) — Large-scale foundation model integrating DNA regulatory sequences and single-cell transcriptomics from 120M+ cells across multiple species for gene regulation prediction.
- [UnitedNet ![GitHub Repo Stars](https://img.shields.io/github/stars/LiuLab-Bioelectronics-Harvard/UnitedNet) ![GitHub last commit](https://img.shields.io/github/last-commit/LiuLab-Bioelectronics-Harvard/UnitedNet)](https://github.com/LiuLab-Bioelectronics-Harvard/UnitedNet) — Interpretable multi-task deep neural network for single-cell multi-omics integration spanning transcriptomics, chromatin accessibility, and proteomics.
- [SpatialGlue ![GitHub Repo Stars](https://img.shields.io/github/stars/zhanglabtools/SpatialGlue) ![GitHub last commit](https://img.shields.io/github/last-commit/zhanglabtools/SpatialGlue)](https://github.com/zhanglabtools/SpatialGlue) — Graph attention network for spatial multi-omics integration jointly embedding spatial transcriptomics with chromatin accessibility or proteomics.
- [MIDAS ![GitHub Repo Stars](https://img.shields.io/github/stars/labomics/midas) ![GitHub last commit](https://img.shields.io/github/last-commit/labomics/midas)](https://github.com/labomics/midas) — Mosaic integration and differential accessibility model for single-cell multi-omics data that handles arbitrary missing-modality combinations across transcriptomics, chromatin accessibility, and proteomics.

##### Domain Alignment

- [scArches ![GitHub Repo Stars](https://img.shields.io/github/stars/theislab/scarches) ![GitHub last commit](https://img.shields.io/github/last-commit/theislab/scarches)](https://github.com/theislab/scarches) — Transfer learning framework for mapping new single-cell datasets onto pre-trained reference atlases across batches, conditions, and modalities.
- [TOSICA ![GitHub Repo Stars](https://img.shields.io/github/stars/JackieHanlaopo/TOSICA) ![GitHub last commit](https://img.shields.io/github/last-commit/JackieHanlaopo/TOSICA)](https://github.com/JackieHanlaopo/TOSICA) — Transformer-based framework for one-stop interpretable cell-type annotation supporting cross-dataset and cross-species transfer.

#### Protein Foundation Models

##### Pre-trained Embedding

- [Evolutionary Scale Modeling (ESM) ![GitHub Repo Stars](https://img.shields.io/github/stars/facebookresearch/esm) ![GitHub last commit](https://img.shields.io/github/last-commit/facebookresearch/esm)](https://github.com/facebookresearch/esm) — Protein embeddings.
- [ChemBERTa-2 ![GitHub Repo Stars](https://img.shields.io/github/stars/seyonechithrananda/bert-loves-chemistry) ![GitHub last commit](https://img.shields.io/github/last-commit/seyonechithrananda/bert-loves-chemistry)](https://github.com/seyonechithrananda/bert-loves-chemistry) — Chemical embeddings & prediction.

##### Protein Structure Prediction and Design

- [AlphaFold3 ![GitHub Repo Stars](https://img.shields.io/github/stars/google-deepmind/alphafold3) ![GitHub last commit](https://img.shields.io/github/last-commit/google-deepmind/alphafold3)](https://github.com/google-deepmind/alphafold3) — Predicts structures of proteins, nucleic acids, small molecules, and their complexes.
- [Boltz-1 ![GitHub Repo Stars](https://img.shields.io/github/stars/jwohlwend/boltz) ![GitHub last commit](https://img.shields.io/github/last-commit/jwohlwend/boltz)](https://github.com/jwohlwend/boltz) — Open-source all-atom biomolecular structure prediction model for proteins, nucleic acids, small molecules, and their complexes achieving AlphaFold3-level accuracy.
- [Chai-1 ![GitHub Repo Stars](https://img.shields.io/github/stars/chaidiscovery/chai-lab) ![GitHub last commit](https://img.shields.io/github/last-commit/chaidiscovery/chai-lab)](https://github.com/chaidiscovery/chai-lab) — Unified molecular structure prediction model covering proteins, nucleic acids, small molecules, and complexes.
- [ESM3 ![GitHub Repo Stars](https://img.shields.io/github/stars/evolutionaryscale/esm) ![GitHub last commit](https://img.shields.io/github/last-commit/evolutionaryscale/esm)](https://github.com/evolutionaryscale/esm) — Multimodal protein language model that jointly reasons over sequence, structure, and function for generative protein design and engineering.
- [ESMFold ![GitHub Repo Stars](https://img.shields.io/github/stars/facebookresearch/esm) ![GitHub last commit](https://img.shields.io/github/last-commit/facebookresearch/esm)](https://github.com/facebookresearch/esm) — Fast protein structure prediction using language model embeddings.
- [RFdiffusion ![GitHub Repo Stars](https://img.shields.io/github/stars/RosettaCommons/RFdiffusion) ![GitHub last commit](https://img.shields.io/github/last-commit/RosettaCommons/RFdiffusion)](https://github.com/RosettaCommons/RFdiffusion) — Generative model for protein backbone design using diffusion.
- [ProteinMPNN ![GitHub Repo Stars](https://img.shields.io/github/stars/dauparas/ProteinMPNN) ![GitHub last commit](https://img.shields.io/github/last-commit/dauparas/ProteinMPNN)](https://github.com/dauparas/ProteinMPNN) — Deep learning model for protein sequence design given backbone structure.
- [OmegaFold ![GitHub Repo Stars](https://img.shields.io/github/stars/HeliXonProtein/OmegaFold) ![GitHub last commit](https://img.shields.io/github/last-commit/HeliXonProtein/OmegaFold)](https://github.com/HeliXonProtein/OmegaFold) — High-resolution de novo protein structure prediction from sequence.
- [RoseTTAFold ![GitHub Repo Stars](https://img.shields.io/github/stars/RosettaCommons/RoseTTAFold) ![GitHub last commit](https://img.shields.io/github/last-commit/RosettaCommons/RoseTTAFold)](https://github.com/RosettaCommons/RoseTTAFold) — Three-track neural network for protein structure prediction.

#### Multi-Modal Foundation Models

- [CHIEF ![GitHub Repo Stars](https://img.shields.io/github/stars/hms-dbmi/CHIEF) ![GitHub last commit](https://img.shields.io/github/last-commit/hms-dbmi/CHIEF)](https://github.com/hms-dbmi/CHIEF) — Clinical Histopathology Imaging Evaluation Foundation model integrating histology images and clinical context for pan-cancer analysis.
- [BiomedCLIP](https://huggingface.co/microsoft/BiomedCLIP-PubMedBERT_256-vit_g_14) — CLIP-based vision-language foundation model for biomedical images and text trained on PubMed figure–caption pairs.

#### Genomics Foundation Models

- [Nucleotide Transformer ![GitHub Repo Stars](https://img.shields.io/github/stars/instadeepai/nucleotide-transformer) ![GitHub last commit](https://img.shields.io/github/last-commit/instadeepai/nucleotide-transformer)](https://github.com/instadeepai/nucleotide-transformer) — Foundation model for genomic sequences across multiple species.
- [DNABERT ![GitHub Repo Stars](https://img.shields.io/github/stars/jerryji1993/DNABERT) ![GitHub last commit](https://img.shields.io/github/last-commit/jerryji1993/DNABERT)](https://github.com/jerryji1993/DNABERT) — Pre-trained bidirectional encoder for DNA sequence analysis.
- [DNABERT-2 ![GitHub Repo Stars](https://img.shields.io/github/stars/Zhihan1996/DNABERT_2) ![GitHub last commit](https://img.shields.io/github/last-commit/Zhihan1996/DNABERT_2)](https://github.com/Zhihan1996/DNABERT_2) — Improved genome foundation model with efficient tokenization.
- [Enformer ![GitHub Repo Stars](https://img.shields.io/github/stars/deepmind/deepmind-research) ![GitHub last commit](https://img.shields.io/github/last-commit/deepmind/deepmind-research)](https://github.com/deepmind/deepmind-research/tree/master/enformer) — Transformer model predicting gene expression from DNA sequence.
- [Basenji ![GitHub Repo Stars](https://img.shields.io/github/stars/calico/basenji) ![GitHub last commit](https://img.shields.io/github/last-commit/calico/basenji)](https://github.com/calico/basenji) — Sequential regulatory activity prediction from DNA sequences.
- [Caduceus ![GitHub Repo Stars](https://img.shields.io/github/stars/kuleshov-group/caduceus) ![GitHub last commit](https://img.shields.io/github/last-commit/kuleshov-group/caduceus)](https://github.com/kuleshov-group/caduceus) — Bidirectional equivariant long-range DNA sequence model based on Mamba.
- [Evo ![GitHub Repo Stars](https://img.shields.io/github/stars/evo-design/evo) ![GitHub last commit](https://img.shields.io/github/last-commit/evo-design/evo)](https://github.com/evo-design/evo) — Long-context genomic foundation model (up to 1M tokens).
- [HyenaDNA ![GitHub Repo Stars](https://img.shields.io/github/stars/HazyResearch/hyena-dna) ![GitHub last commit](https://img.shields.io/github/last-commit/HazyResearch/hyena-dna)](https://github.com/HazyResearch/hyena-dna) — Long-range genomic foundation model handling sequences up to 1M tokens with sub-quadratic attention.

---
