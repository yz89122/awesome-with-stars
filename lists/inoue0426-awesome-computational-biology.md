# Awesome Computational Biology [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

A knowledge collection of databases, software and papers related to computational biology.

> Computational biology involves the development and application of data-analytical and theoretical methods,
> mathematical modelling and computational simulation techniques to the study of biological, ecological,
> behavioural, and social systems. - [Wikipedia](https://en.wikipedia.org/wiki/Computational_biology)

## Contents

- [Databases](#databases)
  - [scRNA](#scrna)
  - [Compound](#compound)
  - [Pathway](#pathway)
  - [Mass Spectra](#mass-spectra)
  - [Protein](#protein)
  - [Genome](#genome)
  - [Disease](#disease)
  - [Interaction](#interaction)
- [API](#api)
- [Preprocess](#preprocess)
- [Machine Learning Tasks and Models](#machine-learning-tasks-and-models)
  - [Drug Response Prediction](#drug-response-prediction)
  - [Drug Repurposing](#drug-repurposing)
  - [Drug Target Interaction](#drug-target-interaction)
  - [Compound Protein Interaction](#compound-protein-interaction)
  - [Pre-trained embedding](#pre-trained-embedding)
  - [LLM for biology](#llm-for-biology)

## Databases
### scRNA
- [Gene Expression Omnibus](https://www.ncbi.nlm.nih.gov/geo/) - Public functional genemics database.
- [Single Cell PORTAL](https://singlecell.broadinstitute.org/single_cell) - Public database for single cell RNA.
- [Single Cell Expression Atlas](https://www.ebi.ac.uk/gxa/sc/home) - Public database for single cell RNA.
### Compound
- [PubChem](https://pubchem.ncbi.nlm.nih.gov/) - One of the biggest chemical database such as compounds, genes and proteins.
- [ChEBI](https://www.ebi.ac.uk/chebi/) - Chemical database  focused on small chemical compounds.
- [ChEMBL](https://www.ebi.ac.uk/chembl/) - Database of bioactive molecules with drug-like properties.
- [ChemSpider](http://www.chemspider.com/) - Chemical structure database.
- [KEGG COMPOUND](https://www.genome.jp/kegg/compound/) - Collection of small molecules and biopolymers.
- [LIPID MAPS](https://www.lipidmaps.org/databases/lmsd/overview) - Database of lipids.
- [Rhea](https://www.rhea-db.org/) - Database of chemical reactions.
- [Drug Repurposing Hub](https://repo-hub.broadinstitute.org/repurposing#download-data) - Collections of drug repurposing data containing drug, moa, target etc.
- [Therapeutic Target Database](https://idrblab.net/ttd/full-data-download) - collections of drug-target, target-disease, and drug-disease dataset.
### Pathway
- [PathwayCommons](https://www.pathwaycommons.org/) - Database of Pathways and Interactions.
- [KEGG PATHWAY](https://www.genome.jp/kegg/pathway.html) - Collection fo drawn pathway maps.
- [WikiPathways](https://wikipathways.org/) - Database of biological pathways.
### Mass Spectra
- [MassBank](http://www.massbank.jp/) - Open souce databases and tools for mass spectrometry reference spectra.
- [MoNA MassBank of North America](https://mona.fiehnlab.ucdavis.edu/) - Meta database of metabolite mass spectra, metadata and associated compounds.
### Protein
- [THE HUMAN PROTEIN ATLAS](https://www.proteinatlas.org/) - One of the biggest human protein database contained cells, tissues, and organs. 
- [PROTEIN DATA BANK](https://www.rcsb.org/) - Database of the 3D shapes of proteins, nucleic acids, and complex assemblies.
- [UniProt](https://www.uniprot.org/) - The collection of functional information on proteins.
- [AlphaFold Protein Structure Database](https://alphafold.ebi.ac.uk/api-docs) - Database of 3D protein structures.
### Genome
- [Human Genome Resources at NCBI](https://www.ncbi.nlm.nih.gov/projects/genome/guide/human/index.shtml) - Database of image, proteomics, transcriptomics and systems biology.
- [GenBank](https://www.ncbi.nlm.nih.gov/genbank/) - Database of genetic sequence offered by NCBI.
- [UCSC Genome Browser](https://genome.ucsc.edu/) - Genome blowser offered by UCSC.
- [cBioPortal](https://www.cbioportal.org/) - Database of Cancer Genomics. This has overall metaview for a lot of patients.
### Disease
- [KEGG DRUG](https://www.genome.jp/kegg/drug/) - Comprehensive drug information resource for approved drugs.
- [DrugBank](https://www.drugbank.com/) - A database of drug and target maintained by the University of Alberta.
### Interaction
- Drug Gene Interaction
  - [DGIdb](https://www.dgidb.org/) - A database of drug-gene interactions and the druggable genome.
  - [Comparative Toxicogenomics Database](http://ctdbase.org/) - A database of Chemical-gene interactions, Chemical-disease associations, Gene-disease associations, and Chemical-phenotype associations.
  - [SNAP](https://snap.stanford.edu/biodata/datasets/10002/10002-ChG-Miner.html#:~:text=Dataset%20information,or%20activation%20of%20the%20drug.) - A dataset which contains Drug-gene interactions. 
  - [Therapeutics Data Commons](https://tdcommons.ai/) - A database for a lot of tasks such as drug-target, drug-response, drug-drug interaction.
- Drug (-Cell line) Response
  - [NCI60](https://dtp.cancer.gov/discovery_development/nci-60/) A database which focus on 60 cancer cell lines with many drugs.
  - [Genomics of Drug Sensitivity in Cancer (GDSC)](https://www.cancerrxgene.org/) - A database of drug sensitibity which has 1000 human cancer cell lines and 100s compounds.
  - [Cancer Cell Line Encyclopedia](https://sites.broadinstitute.org/ccle/) - A database of cancer cell lines. This has 1000 cell lines.
- Chemical Protein Interaction
  - [STITCH](http://stitch.embl.de/) - A database of Chemical Protein Interaction.
  - [BindingDB](https://www.bindingdb.org/rwd/bind/index.jsp) - A database of compounds and targes.
- Protein-Protein Interaction
  - [STRING](https://string-db.org/) - Protein-Protein Interaction Networks for several organisms.
  - [BioGRID](https://thebiogrid.org/) - Database of Protein, Genetic and Chemical Interactions.
  - [HIPPIE](http://cbdm-01.zdv.uni-mainz.de/~mschaefer/hippie/) - Human Protein-Protein Interaction database.
- Knowledge Graph
  - [Drug Mechanism Database (DrugMechDB) ![GitHub Repo Stars](https://img.shields.io/github/stars/SuLab/DrugMechDB) ![GitHub last commit](https://img.shields.io/github/last-commit/SuLab/DrugMechDB)](https://github.com/SuLab/DrugMechDB/tree/2.0.1): database of the mechanism of action from a drug to a disease.
  - [DRKG ![GitHub Repo Stars](https://img.shields.io/github/stars/gnn4dr/DRKG) ![GitHub last commit](https://img.shields.io/github/last-commit/gnn4dr/DRKG)](https://github.com/gnn4dr/DRKG) - A library for biological knowledge graph.
 
## API
- [PubMed esearch](https://www.nlm.nih.gov/dataguide/edirect/esearch.html): API for searching articles in PubMed.

## Preprocess

- [Chemistry Development Kit ![GitHub Repo Stars](https://img.shields.io/github/stars/cdk/cdk) ![GitHub last commit](https://img.shields.io/github/last-commit/cdk/cdk)](https://github.com/cdk/cdk) - A software of cheminformatics and Machine Learning.
- [RDKit ![GitHub Repo Stars](https://img.shields.io/github/stars/rdkit/rdkit) ![GitHub last commit](https://img.shields.io/github/last-commit/rdkit/rdkit)](https://github.com/rdkit/rdkit) - A software of cheminformatics and Machine Learning.
- [Scanpy](https://scanpy.readthedocs.io/en/stable/) - scRNA analysis library in Python.
- [Seurat](https://satijalab.org/seurat/) - scRNA analysis library in R.

## Machine Learning Tasks and Models

## Drug Response Prediction
- [drGAT ![GitHub Repo Stars](https://img.shields.io/github/stars/inoue0426/drGAT) ![GitHub last commit](https://img.shields.io/github/last-commit/inoue0426/drGAT)](https://github.com/inoue0426/drGAT): A model for drug response prediction with gene explainability with attention mechanism.

### Drug Repurposing

- [DeepPurpose ![GitHub Repo Stars](https://img.shields.io/github/stars/kexinhuang12345/DeepPurpose) ![GitHub last commit](https://img.shields.io/github/last-commit/kexinhuang12345/DeepPurpose)](https://github.com/kexinhuang12345/DeepPurpose) - A DL Library for Drug Repurposing. 

### Drug Target Interaction

- [NeoDTI ![GitHub Repo Stars](https://img.shields.io/github/stars/FangpingWan/NeoDTI) ![GitHub last commit](https://img.shields.io/github/last-commit/FangpingWan/NeoDTI)](https://github.com/FangpingWan/NeoDTI) - A library for Drug Target Interaction.

### Compound Protein Interaction

- [MCPINN ![GitHub Repo Stars](https://img.shields.io/github/stars/mhlee0903/multi_channels_PINN) ![GitHub last commit](https://img.shields.io/github/last-commit/mhlee0903/multi_channels_PINN)](https://github.com/mhlee0903/multi_channels_PINN) - A library for drug discovery using Compound Protein Interaction and Machine Learning.
- [TransformerCPI ![GitHub Repo Stars](https://img.shields.io/github/stars/lifanchen-simm/transformerCPI) ![GitHub last commit](https://img.shields.io/github/last-commit/lifanchen-simm/transformerCPI)](https://github.com/lifanchen-simm/transformerCPI) - A library for Compound Protein Interaction prediction using Transformer.

### Pre-trained embedding

- [Evolutionary Scale Modeling ![GitHub Repo Stars](https://img.shields.io/github/stars/facebookresearch/esm) ![GitHub last commit](https://img.shields.io/github/last-commit/facebookresearch/esm)](https://github.com/facebookresearch/esm) - a library for protein embeddings.
- [ChemBERTa-2 ![GitHub Repo Stars](https://img.shields.io/github/stars/seyonechithrananda/bert-loves-chemistry) ![GitHub last commit](https://img.shields.io/github/last-commit/seyonechithrananda/bert-loves-chemistry)](https://github.com/seyonechithrananda/bert-loves-chemistry) - a library for chemical embeddingg and prediction.

### LLM for biology

- [AI4Chem/ChemLLM-7B-Chat](https://huggingface.co/AI4Chem/ChemLLM-7B-Chat) - LLM for chemical and molecule science
- [BioGPT ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/BioGPT) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/BioGPT)](https://github.com/microsoft/BioGPT) - LLM for Biomedical text generation
- [GeneGPT ![GitHub Repo Stars](https://img.shields.io/github/stars/ncbi/GeneGPT) ![GitHub last commit](https://img.shields.io/github/last-commit/ncbi/GeneGPT)](https://github.com/ncbi/GeneGPT) - LLM for biomedical information with several API.
- [GenePT ![GitHub Repo Stars](https://img.shields.io/github/stars/yiqunchen/GenePT) ![GitHub last commit](https://img.shields.io/github/last-commit/yiqunchen/GenePT)](https://github.com/yiqunchen/GenePT) - foundation LLM for single cell data
- [scPRINT ![GitHub Repo Stars](https://img.shields.io/github/stars/cantinilab/scPRINT) ![GitHub last commit](https://img.shields.io/github/last-commit/cantinilab/scPRINT)](https://github.com/cantinilab/scPRINT) - scPRINT is pretrained on 50M cells to denoise and perform zero imputation of any single cell RNAseq profile.



