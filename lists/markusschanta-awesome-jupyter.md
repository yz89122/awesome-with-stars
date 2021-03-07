# Awesome Jupyter [![Awesome](https://awesome.re/badge.svg)](https://awesome.re) [![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fmarkusschanta%2Fawesome-jupyter&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

A curated list of awesome [Jupyter](http://jupyter.org) projects, libraries and resources. Jupyter is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations and narrative text.

<div align="center" style="border-bottom: 0px;">
	<br>
	<img width="400" src="https://github.com/markusschanta/awesome-jupyter/raw/master/assets/logo.png" alt="Jupyter logo">
	<br>
	<br>
</div>

---

<div align="center" style="border-bottom: 0px;">
	<sub>Awesome Jupyter is proudly supported by our sponsor:</sub>
	<br>
	<br>
	<a href="https://deepnote.com/?utm_source=github&utm_medium=promo&utm_campaign=awesomejupyter"><img width="300" src="https://github.com/markusschanta/awesome-jupyter/raw/master/assets/deepnote.jpeg" alt="Deepnote logo"></a>
	<br>
	<br>
	<b>Deepnote is a collaborative data science notebook built for teams.</b>
	<div>
	<sub>Explore data with Python & SQL from your browser. Add context with data visualizations and rich text editing. Share your work by simply sending a link. <a href="https://deepnote.com/?utm_source=github&utm_medium=promo&utm_campaign=awesomejupyter">Check it out on the Deepnote free plan.</a></sub>
	</div>
</div>

---

## Contents

<!--lint ignore awesome-toc alphabetize-lists-->
- [Runtimes/Frontends](#runtimesfrontends)
- [Collaboration/Education](#collaborationeducation)
- [Visualization](#visualization)
- [Tables](#Tables)
- [Rendering/Publishing/Conversion](#renderingpublishingconversion)
- [Version Control](#version-control)
- [JupyterLab Extensions](#jupyterlab-extensions)
- [Testing](#testing)
- [Domain-Specific Projects](#domain-specific-projects)
- [Hosted Notebook Solutions](#hosted-notebook-solutions)
- [Official Resources and Documentation](#official-resources-and-documentation)
- [Community Resources](#community-resources)
- [Articles/Guides/Tutorials](#articlesguidestutorials)
- [Contributing](#contributing)

---

## Runtimes/Frontends

- [Beaker](http://beakerx.com/) - Development environment with seamless data transmission from one language to another.
- [docker-stacks ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyter/docker-stacks) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyter/docker-stacks)](https://github.com/jupyter/docker-stacks) - Hierarchical stacks of ready-to-run Jupyter applications in Docker.
- [Guild AI](https://my.guild.ai/docs/jupyter-notebook-experiments/) - Execute notebooks as experiments to capture and compare results over time.
- [Hydrogen ![GitHub Repo Stars](https://img.shields.io/github/stars/nteract/hydrogen) ![GitHub last commit](https://img.shields.io/github/last-commit/nteract/hydrogen)](https://github.com/nteract/hydrogen) - Run code inline in Atom using Jupyter kernels.
- [Jupyter Notebook ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyter/notebook) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyter/notebook)](https://github.com/jupyter/notebook) - Main Jupyter notebook runtime.
- [JupyterHub ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyterhub/jupyterhub) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyterhub/jupyterhub)](https://github.com/jupyterhub/jupyterhub) - Multi-user server for Jupyter.
- [JupyterLab ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyterlab/jupyterlab) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyterlab/jupyterlab)](https://github.com/jupyterlab/jupyterlab) - JupyterLab is the next generation user interface for Jupyter.
- [JupyterLab Desktop ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyterlab/jupyterlab-desktop) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyterlab/jupyterlab-desktop)](https://github.com/jupyterlab/jupyterlab-desktop) - A desktop application for JupyterLab, based on Electron.
- [JupyterWith ![GitHub Repo Stars](https://img.shields.io/github/stars/tweag/jupyterWith) ![GitHub last commit](https://img.shields.io/github/last-commit/tweag/jupyterWith)](https://github.com/tweag/jupyterWith) - Nix-based framework for the definition of declarative and reproducible Jupyter environments.
- [kaggle/docker-python ![GitHub Repo Stars](https://img.shields.io/github/stars/kaggle/docker-python) ![GitHub last commit](https://img.shields.io/github/last-commit/kaggle/docker-python)](https://github.com/kaggle/docker-python) - Kaggle Python docker image that includes datasets and packages.
- [ML Workspace ![GitHub Repo Stars](https://img.shields.io/github/stars/ml-tooling/ml-workspace) ![GitHub last commit](https://img.shields.io/github/last-commit/ml-tooling/ml-workspace)](https://github.com/ml-tooling/ml-workspace) - Docker image that includes Jupyter(Lab) and various packages for data science/machine learning.
- [nteract ![GitHub Repo Stars](https://img.shields.io/github/stars/nteract/nteract) ![GitHub last commit](https://img.shields.io/github/last-commit/nteract/nteract)](https://github.com/nteract/nteract) - Native desktop notebook frontend. <!--lint disable double-link-->
- [Panel ![GitHub Repo Stars](https://img.shields.io/github/stars/holoviz/panel) ![GitHub last commit](https://img.shields.io/github/last-commit/holoviz/panel)](https://github.com/holoviz/panel) - Notebooks as static files or interactive and standalone server-/client-side (via pyodide) apps.
- [PaneLite](https://panelite.holoviz.org) - A distribution of [JupyterLite](https://jupyterlite.readthedocs.io/en/latest/) that works with [Panel](https://panel.holoviz.org) and the [HoloViz](https://holoviz.org) ecosystem. <!--lint enable double-link-->
- [Stencila ![GitHub Repo Stars](https://img.shields.io/github/stars/stencila/stencila) ![GitHub last commit](https://img.shields.io/github/last-commit/stencila/stencila)](https://github.com/stencila/stencila) - Native desktop notebook frontend.
- [Visual Studio Code](https://code.visualstudio.com/docs/python/jupyter-support) - Native desktop notebook frontend.
- [voila ![GitHub Repo Stars](https://img.shields.io/github/stars/voila-dashboards/voila) ![GitHub last commit](https://img.shields.io/github/last-commit/voila-dashboards/voila)](https://github.com/voila-dashboards/voila) - Notebooks as interactive standalone web applications.

## Collaboration/Education

- [callgraph ![GitHub Repo Stars](https://img.shields.io/github/stars/osteele/callgraph) ![GitHub last commit](https://img.shields.io/github/last-commit/osteele/callgraph)](https://github.com/osteele/callgraph) - Magic to display a function call graph.
- [IllumiDesk ![GitHub Repo Stars](https://img.shields.io/github/stars/IllumiDesk/illumidesk) ![GitHub last commit](https://img.shields.io/github/last-commit/IllumiDesk/illumidesk)](https://github.com/IllumiDesk/illumidesk) - Docker-based JupyterHub + LTI + nbgrader distribution for education.
- [IPythonBlocks ![GitHub Repo Stars](https://img.shields.io/github/stars/jiffyclub/ipythonblocks) ![GitHub last commit](https://img.shields.io/github/last-commit/jiffyclub/ipythonblocks)](https://github.com/jiffyclub/ipythonblocks) - Practice Python with colored grids in Jupyter.
- [jupyter-drive ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyter/jupyter-drive) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyter/jupyter-drive)](https://github.com/jupyter/jupyter-drive) - Google drive for Jupyter.
- [jupyter-edx-grader-xblock ![GitHub Repo Stars](https://img.shields.io/github/stars/ibleducation/jupyter-edx-grader-xblock) ![GitHub last commit](https://img.shields.io/github/last-commit/ibleducation/jupyter-edx-grader-xblock)](https://github.com/ibleducation/jupyter-edx-grader-xblock) - Auto-grade a student assignment created as a Jupyter notebook and write the score in the Open edX gradebook.
- [jupyter-viewer-xblock ![GitHub Repo Stars](https://img.shields.io/github/stars/ibleducation/jupyter-viewer-xblock) ![GitHub last commit](https://img.shields.io/github/last-commit/ibleducation/jupyter-viewer-xblock)](https://github.com/ibleducation/jupyter-viewer-xblock) - Fetch and display part of, or an entire Jupyter Notebook in an Open edX XBlock.
- [LTI Launch JupyterHub Authenticator ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyterhub/ltiauthenticator) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyterhub/ltiauthenticator)](https://github.com/jupyterhub/ltiauthenticator) - Authentication via Edx.
- [nbautoeval ![GitHub Repo Stars](https://img.shields.io/github/stars/parmentelat/nbautoeval) ![GitHub last commit](https://img.shields.io/github/last-commit/parmentelat/nbautoeval)](https://github.com/parmentelat/nbautoeval) - Create auto-evaluated exercises.
- [nbgitpuller ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyterhub/nbgitpuller) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyterhub/nbgitpuller)](https://github.com/jupyterhub/nbgitpuller) - Sync a git repository one-way to a local path.
- [nbgrader ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyter/nbgrader) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyter/nbgrader)](https://github.com/jupyter/nbgrader) - Assigning and grading of Jupyter notebooks.
- [nbtutor ![GitHub Repo Stars](https://img.shields.io/github/stars/lgpage/nbtutor) ![GitHub last commit](https://img.shields.io/github/last-commit/lgpage/nbtutor)](https://github.com/lgpage/nbtutor) - Visualize Python code execution (line-by-line).

## Visualization

- [Altair ![GitHub Repo Stars](https://img.shields.io/github/stars/altair-viz/altair) ![GitHub last commit](https://img.shields.io/github/last-commit/altair-viz/altair)](https://github.com/altair-viz/altair) - Declarative visualization library for Python, based on [Vega](http://vega.github.io/vega) and [Vega-Lite ![GitHub Repo Stars](https://img.shields.io/github/stars/vega/vega-lite) ![GitHub last commit](https://img.shields.io/github/last-commit/vega/vega-lite)](https://github.com/vega/vega-lite).
- [anywidget](https://anywidget.dev) - A Python library that simplifies creating and publishing custom Jupyter widgets. 
- [Bokeh](https://bokeh.pydata.org/en/latest/) - Interactive visualization library that targets modern web browsers for presentation.
- [bqplot ![GitHub Repo Stars](https://img.shields.io/github/stars/bloomberg/bqplot) ![GitHub last commit](https://img.shields.io/github/last-commit/bloomberg/bqplot)](https://github.com/bloomberg/bqplot) - Grammar of Graphics-based interactive plotting framework for Jupyter.
- [Evidently ![GitHub Repo Stars](https://img.shields.io/github/stars/evidentlyai/evidently) ![GitHub last commit](https://img.shields.io/github/last-commit/evidentlyai/evidently)](https://github.com/evidentlyai/evidently) - Interactive reports to analyze machine learning models during validation or production monitoring.
- [hvplot](https://hvplot.holoviz.org/) - A familiar and high-level API for data exploration and visualization in Jupyter.
- [ipychart ![GitHub Repo Stars](https://img.shields.io/github/stars/nicohlr/ipychart) ![GitHub last commit](https://img.shields.io/github/last-commit/nicohlr/ipychart)](https://github.com/nicohlr/ipychart) - Interactive Chart.js plots in Jupyter.
- [ipycytoscape ![GitHub Repo Stars](https://img.shields.io/github/stars/cytoscape/ipycytoscape) ![GitHub last commit](https://img.shields.io/github/last-commit/cytoscape/ipycytoscape)](https://github.com/cytoscape/ipycytoscape) - Widget for interactive graph visualization in Jupyter using cytoscape.js. <!--lint disable double-link-->
- [ipydagred3 ![GitHub Repo Stars](https://img.shields.io/github/stars/timkpaine/ipydagred3) ![GitHub last commit](https://img.shields.io/github/last-commit/timkpaine/ipydagred3)](https://github.com/timkpaine/ipydagred3) - [ipywidgets ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyter-widgets/ipywidgets) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyter-widgets/ipywidgets)](https://github.com/jupyter-widgets/ipywidgets) library for drawing directed acyclic graphs in jupyterlab using dagre-d3.  <!--lint enable double-link-->
- [ipyleaflet ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyter-widgets/ipyleaflet) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyter-widgets/ipyleaflet)](https://github.com/jupyter-widgets/ipyleaflet) - Interactive visualization library for Leaflet.js maps in Jupyter notebooks.
- [IPySigma ![GitHub Repo Stars](https://img.shields.io/github/stars/bsnacks000/IPySigma-Demo) ![GitHub last commit](https://img.shields.io/github/last-commit/bsnacks000/IPySigma-Demo)](https://github.com/bsnacks000/IPySigma-Demo) - Prototype network visualization frontend for Jupyter notebooks.
- [ipytree ![GitHub Repo Stars](https://img.shields.io/github/stars/QuantStack/ipytree) ![GitHub last commit](https://img.shields.io/github/last-commit/QuantStack/ipytree)](https://github.com/QuantStack/ipytree/) - Tree UI element for Jupyter.
- [ipyvizzu ![GitHub Repo Stars](https://img.shields.io/github/stars/vizzuhq/ipyvizzu) ![GitHub last commit](https://img.shields.io/github/last-commit/vizzuhq/ipyvizzu)](https://github.com/vizzuhq/ipyvizzu) - Animated data storytelling tool.
- [ipyvolume ![GitHub Repo Stars](https://img.shields.io/github/stars/maartenbreddels/ipyvolume) ![GitHub last commit](https://img.shields.io/github/last-commit/maartenbreddels/ipyvolume)](https://github.com/maartenbreddels/ipyvolume) - 3D plotting for Python in Jupyter based on widgets and WebGL.
- [ipywebrtc ![GitHub Repo Stars](https://img.shields.io/github/stars/maartenbreddels/ipywebrtc) ![GitHub last commit](https://img.shields.io/github/last-commit/maartenbreddels/ipywebrtc)](https://github.com/maartenbreddels/ipywebrtc) - Video/Audio streaming in Jupyter. <!--lint disable double-link-->
- [ipywidgets ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyter-widgets/ipywidgets) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyter-widgets/ipywidgets)](https://github.com/jupyter-widgets/ipywidgets) - UI widgets for Jupyter.  <!--lint enable double-link-->
- [itk-jupyter-widgets ![GitHub Repo Stars](https://img.shields.io/github/stars/InsightSoftwareConsortium/itk-jupyter-widgets) ![GitHub last commit](https://img.shields.io/github/last-commit/InsightSoftwareConsortium/itk-jupyter-widgets)](https://github.com/InsightSoftwareConsortium/itk-jupyter-widgets) - Interactive widgets to visualize images in 2D and 3D.
- [jp_doodle ![GitHub Repo Stars](https://img.shields.io/github/stars/AaronWatters/jp_doodle) ![GitHub last commit](https://img.shields.io/github/last-commit/AaronWatters/jp_doodle)](https://github.com/AaronWatters/jp_doodle) - Infrastructure for building special purpose interactive diagrams in 2D and 3D.
- [jupyter-gmaps ![GitHub Repo Stars](https://img.shields.io/github/stars/pbugnion/gmaps) ![GitHub last commit](https://img.shields.io/github/last-commit/pbugnion/gmaps)](https://github.com/pbugnion/gmaps) - Interactive visualization library for Google Maps in Jupyter notebooks.
- [jupyter-manim ![GitHub Repo Stars](https://img.shields.io/github/stars/krassowski/jupyter-manim) ![GitHub last commit](https://img.shields.io/github/last-commit/krassowski/jupyter-manim)](https://github.com/krassowski/jupyter-manim) - Display [manim ![GitHub Repo Stars](https://img.shields.io/github/stars/3b1b/manim) ![GitHub last commit](https://img.shields.io/github/last-commit/3b1b/manim)](https://github.com/3b1b/manim) (Mathematical Animation Engine) videos or GIFs in Jupyter notebooks.
- [lux ![GitHub Repo Stars](https://img.shields.io/github/stars/lux-org/lux) ![GitHub last commit](https://img.shields.io/github/last-commit/lux-org/lux)](https://github.com/lux-org/lux) - Recommends a set of visualizations whenever a dataframe is printed in a notebook.
- [mpld3](http://mpld3.github.io) - Combining Matplotlib and D3js for interactive data visualizations.
- [pd-replicator ![GitHub Repo Stars](https://img.shields.io/github/stars/scwilkinson/pd-replicator) ![GitHub last commit](https://img.shields.io/github/last-commit/scwilkinson/pd-replicator)](https://github.com/scwilkinson/pd-replicator) - Copy a pandas DataFrame to the clipboard with one click.
- [Perspective ![GitHub Repo Stars](https://img.shields.io/github/stars/finos/perspective) ![GitHub last commit](https://img.shields.io/github/last-commit/finos/perspective)](https://github.com/finos/perspective) - Data visualization and analytics component, especially for large/streaming datasets.
- [pyecharts ![GitHub Repo Stars](https://img.shields.io/github/stars/pyecharts/pyecharts) ![GitHub last commit](https://img.shields.io/github/last-commit/pyecharts/pyecharts)](https://github.com/pyecharts/pyecharts) - Python interface for the [ECharts ![GitHub Repo Stars](https://img.shields.io/github/stars/apache/incubator-echarts) ![GitHub last commit](https://img.shields.io/github/last-commit/apache/incubator-echarts)](https://github.com/apache/incubator-echarts) visualization library.
- [pythreejs ![GitHub Repo Stars](https://img.shields.io/github/stars/jovyan/pythreejs) ![GitHub last commit](https://img.shields.io/github/last-commit/jovyan/pythreejs)](https://github.com/jovyan/pythreejs) - Python / ThreeJS bridge utilizing the Jupyter widget infrastructure.
- [tqdm ![GitHub Repo Stars](https://img.shields.io/github/stars/tqdm/tqdm) ![GitHub last commit](https://img.shields.io/github/last-commit/tqdm/tqdm)](https://github.com/tqdm/tqdm) - Fast, extensible progress bar for loops and iterables.
- [tributary ![GitHub Repo Stars](https://img.shields.io/github/stars/timkpaine/tributary) ![GitHub last commit](https://img.shields.io/github/last-commit/timkpaine/tributary)](https://github.com/timkpaine/tributary) - Python data streams with Jupyter support.
- [xleaflet ![GitHub Repo Stars](https://img.shields.io/github/stars/QuantStack/xleaflet) ![GitHub last commit](https://img.shields.io/github/last-commit/QuantStack/xleaflet)](https://github.com/QuantStack/xleaflet) - C++ Backend for ipyleaflet.
- [xwebrtc ![GitHub Repo Stars](https://img.shields.io/github/stars/QuantStack/xwebrtc) ![GitHub last commit](https://img.shields.io/github/last-commit/QuantStack/xwebrtc)](https://github.com/QuantStack/xwebrtc) - C++ Backend for ipywebrtc.
- [xwidgets ![GitHub Repo Stars](https://img.shields.io/github/stars/QuantStack/xwidgets) ![GitHub last commit](https://img.shields.io/github/last-commit/QuantStack/xwidgets)](https://github.com/QuantStack/xwidgets) - C++ Backend for ipywidgets.

## Tables

- [buckaroo ![GitHub Repo Stars](https://img.shields.io/github/stars/paddymul/buckaroo) ![GitHub last commit](https://img.shields.io/github/last-commit/paddymul/buckaroo)](https://github.com/paddymul/buckaroo) - GUI Data Wrangling tool for Jupyter and pandas.
- [ipyaggrid ![GitHub Repo Stars](https://img.shields.io/github/stars/widgetti/ipyaggrid) ![GitHub last commit](https://img.shields.io/github/last-commit/widgetti/ipyaggrid)](https://github.com/widgetti/ipyaggrid) -  The power of ag-Grid in Jupyter.
- [ipydatagrid ![GitHub Repo Stars](https://img.shields.io/github/stars/bloomberg/ipydatagrid) ![GitHub last commit](https://img.shields.io/github/last-commit/bloomberg/ipydatagrid)](https://github.com/bloomberg/ipydatagrid) - Fast datagrid widget for Jupyter.
- [ipyregulartable ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmorganchase/ipyregulartable) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmorganchase/ipyregulartable)](https://github.com/jpmorganchase/ipyregulartable) - High performance, editable, stylable datagrids in Jupyter.
- [ipysheet ![GitHub Repo Stars](https://img.shields.io/github/stars/QuantStack/ipysheet) ![GitHub last commit](https://img.shields.io/github/last-commit/QuantStack/ipysheet)](https://github.com/QuantStack/ipysheet/) - Interactive spreadsheets in Jupyter.
- [Qgrid ![GitHub Repo Stars](https://img.shields.io/github/stars/quantopian/qgrid) ![GitHub last commit](https://img.shields.io/github/last-commit/quantopian/qgrid)](https://github.com/quantopian/qgrid) - Interactive grid for sorting, filtering, and editing DataFrames in Jupyter.

## Rendering/Publishing/Conversion

- [Binder](http://mybinder.org) - Turn a GitHub repo into a collection of interactive notebooks.
- [Bookbook ![GitHub Repo Stars](https://img.shields.io/github/stars/takluyver/bookbook) ![GitHub last commit](https://img.shields.io/github/last-commit/takluyver/bookbook)](https://github.com/takluyver/bookbook) - Bookbook converts a set of notebooks in a directory to HTML or PDF, preserving cross references within and between notebooks.
- [ContainDS Dashboards ![GitHub Repo Stars](https://img.shields.io/github/stars/ideonate/cdsdashboards) ![GitHub last commit](https://img.shields.io/github/last-commit/ideonate/cdsdashboards)](https://github.com/ideonate/cdsdashboards) - JupyterHub extension to host authenticated scripts or notebooks in any framework (Voilà, Streamlit, Plotly Dash etc).
- [Ganimede ![GitHub Repo Stars](https://img.shields.io/github/stars/manugraj/ganimede) ![GitHub last commit](https://img.shields.io/github/last-commit/manugraj/ganimede)](https://github.com/manugraj/ganimede) - Store, version, edit and execute notebooks in sandboxes and integrate them directly via REST interfaces.
- [Jupyter Book ![GitHub Repo Stars](https://img.shields.io/github/stars/executablebooks/jupyter-book) ![GitHub last commit](https://img.shields.io/github/last-commit/executablebooks/jupyter-book)](https://github.com/executablebooks/jupyter-book) - Build publication-quality books and documents from computational material.
- [jupyterlab_nbconvert_nocode ![GitHub Repo Stars](https://img.shields.io/github/stars/timkpaine/jupyterlab_nbconvert_nocode) ![GitHub last commit](https://img.shields.io/github/last-commit/timkpaine/jupyterlab_nbconvert_nocode)](https://github.com/timkpaine/jupyterlab_nbconvert_nocode) - NBConvert exporters for PDF/HTML export without code cells.
- [Jupytext ![GitHub Repo Stars](https://img.shields.io/github/stars/mwouts/jupytext) ![GitHub last commit](https://img.shields.io/github/last-commit/mwouts/jupytext)](https://github.com/mwouts/jupytext) - Convert and synchronize notebooks with text formats (e.g. Python or Markdown files) that work well under version control.
- [jut ![GitHub Repo Stars](https://img.shields.io/github/stars/kracekumar/jut) ![GitHub last commit](https://img.shields.io/github/last-commit/kracekumar/jut)](https://github.com/kracekumar/jut) - CLI to nicely display notebooks in the terminal.
- [Kapitsa ![GitHub Repo Stars](https://img.shields.io/github/stars/gitjeff05/kapitsa) ![GitHub last commit](https://img.shields.io/github/last-commit/gitjeff05/kapitsa)](https://github.com/gitjeff05/kapitsa) - CLI to search local Jupyter notebooks.
- [Mercury ![GitHub Repo Stars](https://img.shields.io/github/stars/mljar/mercury) ![GitHub last commit](https://img.shields.io/github/last-commit/mljar/mercury)](https://github.com/mljar/mercury) - Convert notebooks into web applications.
- [nbconvert](https://nbconvert.readthedocs.io) - Convert notebooks to other formats.
- [nbdev ![GitHub Repo Stars](https://img.shields.io/github/stars/fastai/nbdev) ![GitHub last commit](https://img.shields.io/github/last-commit/fastai/nbdev)](https://github.com/fastai/nbdev) - Develop, package and distribute Python packages to PyPI using Jupyter as a [Literate Programing](https://en.wikipedia.org/wiki/Literate_programming) environment.
- [nbflow ![GitHub Repo Stars](https://img.shields.io/github/stars/jhamrick/nbflow) ![GitHub last commit](https://img.shields.io/github/last-commit/jhamrick/nbflow)](https://github.com/jhamrick/nbflow) - One-button reproducible workflows with Jupyter and Scons.
- [nbinteract](https://www.nbinteract.com) - Create interactive webpages from Jupyter notebooks.
- [nbscan ![GitHub Repo Stars](https://img.shields.io/github/stars/conery/nbscan) ![GitHub last commit](https://img.shields.io/github/last-commit/conery/nbscan)](https://github.com/conery/nbscan) - Search for and print cells contents of Jupyter notebooks.
- [Nikola](https://getnikola.com) - Static Site Generator that converts notebooks into websites.
- [notedown ![GitHub Repo Stars](https://img.shields.io/github/stars/aaren/notedown) ![GitHub last commit](https://img.shields.io/github/last-commit/aaren/notedown)](https://github.com/aaren/notedown/) - Convert Jupyter notebooks to markdown (and back).
- [Papermill ![GitHub Repo Stars](https://img.shields.io/github/stars/nteract/papermill) ![GitHub last commit](https://img.shields.io/github/last-commit/nteract/papermill)](https://github.com/nteract/papermill) - Tool for parameterizing, executing, and analyzing Jupyter notebooks.
- [Ploomber ![GitHub Repo Stars](https://img.shields.io/github/stars/ploomber/ploomber) ![GitHub last commit](https://img.shields.io/github/last-commit/ploomber/ploomber)](https://github.com/ploomber/ploomber) - Run a collection of notebooks and scripts in a reproducible manner using a `pipeline.yaml` file.
- [pynb ![GitHub Repo Stars](https://img.shields.io/github/stars/minodes/pynb) ![GitHub last commit](https://img.shields.io/github/last-commit/minodes/pynb)](https://github.com/minodes/pynb) - Jupyter Notebooks as plain Python code with embedded Markdown text.
- [RISE ![GitHub Repo Stars](https://img.shields.io/github/stars/damianavila/RISE) ![GitHub last commit](https://img.shields.io/github/last-commit/damianavila/RISE)](https://github.com/damianavila/RISE) - Reveal.js Jupyter/IPython Slideshow.
- [rst2ipynb ![GitHub Repo Stars](https://img.shields.io/github/stars/nthiery/rst-to-ipynb) ![GitHub last commit](https://img.shields.io/github/last-commit/nthiery/rst-to-ipynb)](https://github.com/nthiery/rst-to-ipynb) - Convert standalone reStructuredText files to Jupyter notebook file.
- [Voila ![GitHub Repo Stars](https://img.shields.io/github/stars/QuantStack/voila) ![GitHub last commit](https://img.shields.io/github/last-commit/QuantStack/voila)](https://github.com/QuantStack/voila) - Rendering of live Jupyter Notebooks with interactive widgets, allowing dashboarding based on Jupyter Notebooks.

## Version Control

- [databooks ![GitHub Repo Stars](https://img.shields.io/github/stars/datarootsio/databooks) ![GitHub last commit](https://img.shields.io/github/last-commit/datarootsio/databooks)](https://github.com/datarootsio/databooks) - A command-line utility that eases versioning and sharing of notebooks.
- [git ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyterlab/jupyterlab-git) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyterlab/jupyterlab-git)](https://github.com/jupyterlab/jupyterlab-git) - Extension for git integration.
- [jupyter-nbrequirements ![GitHub Repo Stars](https://img.shields.io/github/stars/thoth-station/jupyter-nbrequirements) ![GitHub last commit](https://img.shields.io/github/last-commit/thoth-station/jupyter-nbrequirements)](https://github.com/thoth-station/jupyter-nbrequirements/) - Dependency management and optimization in Jupyter Notebooks.
- [nbdime ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyter/nbdime) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyter/nbdime)](https://github.com/jupyter/nbdime) - Tools for diffing and merging of Jupyter notebooks.
- [nbQA ![GitHub Repo Stars](https://img.shields.io/github/stars/nbQA-dev/nbQA) ![GitHub last commit](https://img.shields.io/github/last-commit/nbQA-dev/nbQA)](https://github.com/nbQA-dev/nbQA) - Run any standard Python code quality tool on a Jupyter Notebook, from the command-line or via pre-commit.
- [Neptune](https://docs.neptune.ai/integrations-and-supported-tools/ide-and-notebooks/jupyter-lab-and-jupyter-notebook) - Version, manage and share notebook checkpoints in your projects.
- [ReviewNB](https://www.reviewnb.com/) - Code reviews for Jupyter Notebooks.

## JupyterLab Extensions

- [celltags ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyterlab/jupyterlab-celltags) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyterlab/jupyterlab-celltags)](https://github.com/jupyterlab/jupyterlab-celltags) - Extension to organise and execute notebooks using cell tags.
- [code_formatter ![GitHub Repo Stars](https://img.shields.io/github/stars/ryantam626/jupyterlab_code_formatter) ![GitHub last commit](https://img.shields.io/github/last-commit/ryantam626/jupyterlab_code_formatter)](https://github.com/ryantam626/jupyterlab_code_formatter) - A universal code formatter.
- [debugger ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyterlab/debugger) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyterlab/debugger)](https://github.com/jupyterlab/debugger) - A visual debugger for Jupyter notebooks, consoles, and source files.
- [drawio ![GitHub Repo Stars](https://img.shields.io/github/stars/QuantStack/jupyterlab-drawio) ![GitHub last commit](https://img.shields.io/github/last-commit/QuantStack/jupyterlab-drawio)](https://github.com/QuantStack/jupyterlab-drawio) - Extension that displays drawio/mxgraph diagrams.
- [elyra ![GitHub Repo Stars](https://img.shields.io/github/stars/elyra-ai/elyra) ![GitHub last commit](https://img.shields.io/github/last-commit/elyra-ai/elyra)](https://github.com/elyra-ai/elyra) - A visual editor for creating and running notebook (or Python script) pipelines locally or remotely.
- [genv ![GitHub Repo Stars](https://img.shields.io/github/stars/run-ai/jupyterlab_genv) ![GitHub last commit](https://img.shields.io/github/last-commit/run-ai/jupyterlab_genv)](https://github.com/run-ai/jupyterlab_genv) - Extension for managing GPU environments in JupyterLab.
- [go-to-definition ![GitHub Repo Stars](https://img.shields.io/github/stars/krassowski/jupyterlab-go-to-definition) ![GitHub last commit](https://img.shields.io/github/last-commit/krassowski/jupyterlab-go-to-definition)](https://github.com/krassowski/jupyterlab-go-to-definition) - Extension for navigating to the definition of a variable or function in JupyterLab.
- [google-drive ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyterlab/jupyterlab-google-drive) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyterlab/jupyterlab-google-drive)](https://github.com/jupyterlab/jupyterlab-google-drive) - Extension for Google Drive integration.
- [jupyter-ai ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyterlab/jupyter-ai) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyterlab/jupyter-ai)](https://github.com/jupyterlab/jupyter-ai) - Work with generative AIs (wide range of models supported) as a conversational assistant in JupyterLab.
- [jupyter-fs ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmorganchase/jupyter-fs) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmorganchase/jupyter-fs)](https://github.com/jpmorganchase/jupyter-fs) - A filesystem-like content manager for multiple backends in Jupyter.
- [jupyter-notify ![GitHub Repo Stars](https://img.shields.io/github/stars/ShopRunner/jupyter-notify) ![GitHub last commit](https://img.shields.io/github/last-commit/ShopRunner/jupyter-notify)](https://github.com/ShopRunner/jupyter-notify) - Cell magic for browser notification of cell completion. <!--lint disable double-link-->
- [jupyter-panel-proxy ![GitHub Repo Stars](https://img.shields.io/github/stars/holoviz/jupyter-panel-proxy) ![GitHub last commit](https://img.shields.io/github/last-commit/holoviz/jupyter-panel-proxy)](https://github.com/holoviz/jupyter-panel-proxy) - Automatically serve notebooks as [Panel](https://panel.holoviz.org) data apps at the `/panel` endpoint of your Jupyter server. <!--lint enable double-link-->
- [jupyterlab-executor ![GitHub Repo Stars](https://img.shields.io/github/stars/gavincyi/jupyterlab-executor) ![GitHub last commit](https://img.shields.io/github/last-commit/gavincyi/jupyterlab-executor)](https://github.com/gavincyi/jupyterlab-executor) - Extension to execute scripts from the Jupyterlab file browser. <!--lint disable double-link-->
- [jupyterlab-kyso ![GitHub Repo Stars](https://img.shields.io/github/stars/kyso-io/jupyterlab-extension) ![GitHub last commit](https://img.shields.io/github/last-commit/kyso-io/jupyterlab-extension)](https://github.com/kyso-io/jupyterlab-extension) - Extension to publish notebooks to the [Kyso](https://kyso.io) platform from Jupyterlab. <!--lint enable double-link-->
- [jupyterlab-notifications ![GitHub Repo Stars](https://img.shields.io/github/stars/mwakaba2/jupyterlab-notifications) ![GitHub last commit](https://img.shields.io/github/last-commit/mwakaba2/jupyterlab-notifications)](https://github.com/mwakaba2/jupyterlab-notifications) - Customizable notebook cell completion browser notifications for JupyterLab.
- [jupyterlab-tensorboard-pro ![GitHub Repo Stars](https://img.shields.io/github/stars/HFAiLab/jupyterlab_tensorboard_pro) ![GitHub last commit](https://img.shields.io/github/last-commit/HFAiLab/jupyterlab_tensorboard_pro)](https://github.com/HFAiLab/jupyterlab_tensorboard_pro) - TensorBoard support for JupyterLab.
- [jupyterlab_autoversion ![GitHub Repo Stars](https://img.shields.io/github/stars/timkpaine/jupyterlab_autoversion) ![GitHub last commit](https://img.shields.io/github/last-commit/timkpaine/jupyterlab_autoversion)](https://github.com/timkpaine/jupyterlab_autoversion) - Automatically version notebooks in JupyterLab.
- [jupyterlab_commands ![GitHub Repo Stars](https://img.shields.io/github/stars/timkpaine/jupyterlab_commands) ![GitHub last commit](https://img.shields.io/github/last-commit/timkpaine/jupyterlab_commands)](https://github.com/timkpaine/jupyterlab_commands) - Add arbitrary python commands to the JupyterLab command palette.
- [jupyterlab_email ![GitHub Repo Stars](https://img.shields.io/github/stars/timkpaine/jupyterlab_email) ![GitHub last commit](https://img.shields.io/github/last-commit/timkpaine/jupyterlab_email)](https://github.com/timkpaine/jupyterlab_email) - Email notebooks and their content from within JupyterLab.
- [jupyterlab_iframe ![GitHub Repo Stars](https://img.shields.io/github/stars/timkpaine/jupyterlab_iframe) ![GitHub last commit](https://img.shields.io/github/last-commit/timkpaine/jupyterlab_iframe)](https://github.com/timkpaine/jupyterlab_iframe) - View HTML as an embedded iframe in JupyterLab.
- [jupyterlab_miami_nights ![GitHub Repo Stars](https://img.shields.io/github/stars/timkpaine/jupyterlab_miami_nights) ![GitHub last commit](https://img.shields.io/github/last-commit/timkpaine/jupyterlab_miami_nights)](https://github.com/timkpaine/jupyterlab_miami_nights) - Combination of VS Code's SynthWave '84 and JupyterLab's Neon Night themes.
- [jupyterlab_templates ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmorganchase/jupyterlab_templates) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmorganchase/jupyterlab_templates)](https://github.com/jpmorganchase/jupyterlab_templates) - Notebook templates in JupyterLab.
- [latex ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyterlab/jupyterlab-latex) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyterlab/jupyterlab-latex)](https://github.com/jupyterlab/jupyterlab-latex) - Extension for live editing of LaTeX documents.
- [lineapy ![GitHub Repo Stars](https://img.shields.io/github/stars/LineaLabs/lineapy) ![GitHub last commit](https://img.shields.io/github/last-commit/LineaLabs/lineapy)](https://github.com/LineaLabs/lineapy) - Extension for transforming messy Jupyter notebooks to production-ready pipelines with two lines of code.
- [lsp ![GitHub Repo Stars](https://img.shields.io/github/stars/krassowski/jupyterlab-lsp) ![GitHub last commit](https://img.shields.io/github/last-commit/krassowski/jupyterlab-lsp)](https://github.com/krassowski/jupyterlab-lsp) - IDE-like features (code navigation, hover suggestions, linters, diagnostics, kernel-less autocompletion etc.)
- [nb_black ![GitHub Repo Stars](https://img.shields.io/github/stars/dnanhkhoa/nb_black) ![GitHub last commit](https://img.shields.io/github/last-commit/dnanhkhoa/nb_black)](https://github.com/dnanhkhoa/nb_black) - Extension to keep Python code automatically formatted using [black ![GitHub Repo Stars](https://img.shields.io/github/stars/psf/black) ![GitHub last commit](https://img.shields.io/github/last-commit/psf/black)](https://github.com/psf/black).
- [python-bytecode ![GitHub Repo Stars](https://img.shields.io/github/stars/jtpio/jupyterlab-python-bytecode) ![GitHub last commit](https://img.shields.io/github/last-commit/jtpio/jupyterlab-python-bytecode)](https://github.com/jtpio/jupyterlab-python-bytecode) - Explore CPython Bytecode in JupyterLab.
- [quickopen ![GitHub Repo Stars](https://img.shields.io/github/stars/parente/jupyterlab-quickopen) ![GitHub last commit](https://img.shields.io/github/last-commit/parente/jupyterlab-quickopen)](https://github.com/parente/jupyterlab-quickopen) - Quickly open a file in JupyterLab by typing part of its name.
- [shortcutui ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyterlab/jupyterlab-shortcutui) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyterlab/jupyterlab-shortcutui)](https://github.com/jupyterlab/jupyterlab-shortcutui) - An extension for managing keyboard shortcuts.
- [sidecar ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyter-widgets/jupyterlab-sidecar) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyter-widgets/jupyterlab-sidecar)](https://github.com/jupyter-widgets/jupyterlab-sidecar) - A sidecar output widget for JupyterLab.
- [sql ![GitHub Repo Stars](https://img.shields.io/github/stars/pbugnion/jupyterlab-sql) ![GitHub last commit](https://img.shields.io/github/last-commit/pbugnion/jupyterlab-sql)](https://github.com/pbugnion/jupyterlab-sql) - SQL GUI for JupyterLab.
- [stickyland ![GitHub Repo Stars](https://img.shields.io/github/stars/xiaohk/stickyland) ![GitHub last commit](https://img.shields.io/github/last-commit/xiaohk/stickyland)](https://github.com/xiaohk/stickyland) - Break the linear presentation of notebooks with sticky cells.
- [system-monitor ![GitHub Repo Stars](https://img.shields.io/github/stars/jtpio/jupyterlab-system-monitor) ![GitHub last commit](https://img.shields.io/github/last-commit/jtpio/jupyterlab-system-monitor)](https://github.com/jtpio/jupyterlab-system-monitor) - Extension to display system metrics.
- [tabnine ![GitHub Repo Stars](https://img.shields.io/github/stars/codota/tabnine-jupyterlab) ![GitHub last commit](https://img.shields.io/github/last-commit/codota/tabnine-jupyterlab)](https://github.com/codota/tabnine-jupyterlab) - Tabnine AI auto completer extension.
- [theme-darcula ![GitHub Repo Stars](https://img.shields.io/github/stars/telamonian/theme-darcula) ![GitHub last commit](https://img.shields.io/github/last-commit/telamonian/theme-darcula)](https://github.com/telamonian/theme-darcula) - A handsome Darcula theme for Jupyterlab.
- [toc ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyterlab/jupyterlab-toc) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyterlab/jupyterlab-toc)](https://github.com/jupyterlab/jupyterlab-toc) - Extension that provides a table of contents for notebooks.
- [topbar ![GitHub Repo Stars](https://img.shields.io/github/stars/jtpio/jupyterlab-topbar) ![GitHub last commit](https://img.shields.io/github/last-commit/jtpio/jupyterlab-topbar)](https://github.com/jtpio/jupyterlab-topbar) - Top Bar extension for JupyterLab.
- [variableinspector ![GitHub Repo Stars](https://img.shields.io/github/stars/lckr/jupyterlab-variableInspector) ![GitHub last commit](https://img.shields.io/github/last-commit/lckr/jupyterlab-variableInspector)](https://github.com/lckr/jupyterlab-variableInspector) - Variable inspector extension that shows variables and their values.
- [vim ![GitHub Repo Stars](https://img.shields.io/github/stars/jwkvam/jupyterlab-vim) ![GitHub last commit](https://img.shields.io/github/last-commit/jwkvam/jupyterlab-vim)](https://github.com/jwkvam/jupyterlab-vim) - Vim notebook cell bindings.
- [voyager ![GitHub Repo Stars](https://img.shields.io/github/stars/altair-viz/jupyterlab_voyager) ![GitHub last commit](https://img.shields.io/github/last-commit/altair-viz/jupyterlab_voyager)](https://github.com/altair-viz/jupyterlab_voyager) - Extension to view CSV and JSON data in [Voyager](http://vega.github.io/voyager/).

## Testing

- [ipytest ![GitHub Repo Stars](https://img.shields.io/github/stars/chmp/ipytest) ![GitHub last commit](https://img.shields.io/github/last-commit/chmp/ipytest)](https://github.com/chmp/ipytest) - Test runner for running unit tests from within a notebook.
- [nbcelltests ![GitHub Repo Stars](https://img.shields.io/github/stars/jpmorganchase/nbcelltests) ![GitHub last commit](https://img.shields.io/github/last-commit/jpmorganchase/nbcelltests)](https://github.com/jpmorganchase/nbcelltests) - Cell-by-cell testing for notebooks in Jupyter.
- [nbval ![GitHub Repo Stars](https://img.shields.io/github/stars/computationalmodelling/nbval) ![GitHub last commit](https://img.shields.io/github/last-commit/computationalmodelling/nbval)](https://github.com/computationalmodelling/nbval) - Py.test plugin for validating Jupyter notebooks.
- [nosebook ![GitHub Repo Stars](https://img.shields.io/github/stars/bollwyvl/nosebook) ![GitHub last commit](https://img.shields.io/github/last-commit/bollwyvl/nosebook)](https://github.com/bollwyvl/nosebook) - Nose plugin for finding and running IPython notebooks as nose tests.
- [sphinxcontrib-jupyter ![GitHub Repo Stars](https://img.shields.io/github/stars/QuantEcon/sphinxcontrib-jupyter) ![GitHub last commit](https://img.shields.io/github/last-commit/QuantEcon/sphinxcontrib-jupyter)](https://github.com/QuantEcon/sphinxcontrib-jupyter) - Sphinx extension for generating Jupyter notebooks.
- [treebeard ![GitHub Repo Stars](https://img.shields.io/github/stars/treebeardtech/treebeard) ![GitHub last commit](https://img.shields.io/github/last-commit/treebeardtech/treebeard)](https://github.com/treebeardtech/treebeard) - GitHub Action for testing/scheduling Jupyter notebooks.
- [treon ![GitHub Repo Stars](https://img.shields.io/github/stars/ReviewNB/treon) ![GitHub last commit](https://img.shields.io/github/last-commit/ReviewNB/treon)](https://github.com/ReviewNB/treon) - Easy-to-use test framework for Jupyter Notebooks.

## Domain-Specific Projects

- [ArcGIS](https://developers.arcgis.com/python/) - Library for working with maps and geospatial data, powered by web GIS.
- [GenePattern Notebook](http://genepattern-notebook.org) - Integrating Genomic Analysis with Interactive Notebooks.
- [GeoNotebook ![GitHub Repo Stars](https://img.shields.io/github/stars/OpenGeoscience/geonotebook) ![GitHub last commit](https://img.shields.io/github/last-commit/OpenGeoscience/geonotebook)](https://github.com/OpenGeoscience/geonotebook) - Extension for exploratory geospatial analysis.
- [Jupylet ![GitHub Repo Stars](https://img.shields.io/github/stars/nir/jupylet) ![GitHub last commit](https://img.shields.io/github/last-commit/nir/jupylet)](https://github.com/nir/jupylet) - Create 2D and 3D games, graphics, live music and sound interactively in a Jupyter notebook.
- [keplergl](https://docs.kepler.gl/docs/keplergl-jupyter) - Jupyter extension for visual exploration of large-scale geolocation data sets.
- [lolviz ![GitHub Repo Stars](https://img.shields.io/github/stars/parrt/lolviz) ![GitHub last commit](https://img.shields.io/github/last-commit/parrt/lolviz)](https://github.com/parrt/lolviz) - Data-structure visualization tool for lists of lists, lists, dictionaries.
- [Quantopian Notebooks](https://www.quantopian.com/notebooks/survey) - Jupyter-based platform for financial research.
- [vpython-jupyter ![GitHub Repo Stars](https://img.shields.io/github/stars/BruceSherwood/vpython-jupyter) ![GitHub last commit](https://img.shields.io/github/last-commit/BruceSherwood/vpython-jupyter)](https://github.com/BruceSherwood/vpython-jupyter) - VPython 3D engine running in a Jupyter notebook.
- [xontrib-jupyter ![GitHub Repo Stars](https://img.shields.io/github/stars/xonsh/xontrib-jupyter) ![GitHub last commit](https://img.shields.io/github/last-commit/xonsh/xontrib-jupyter)](https://github.com/xonsh/xontrib-jupyter) - Jupyter kernel for xonsh, a Python-powered, cross-platform, Unix-gazing shell language.

## Hosted Notebook Solutions

- [Anaconda Enterprise](https://www.anaconda.com/enterprise/) - Multi-user collaboration and one-click deployment of models, notebooks, and dashboards.
- [Azure Notebooks](https://notebooks.azure.com) - Jupyter notebooks running in the cloud on Microsoft Azure.
- [CoCalc](https://cocalc.com) - Notebooks with 17 supported kernel types, course management, LaTeX document authoring, simultaneous document editing and integration with the SageMath computer algebra system.
- [DataBlogs](https://www.datablogs.co/) - DataBlogs is an open-source data journalism platform that converts Jupyter notebooks into published articles on the web.
- [DataCamp Workspace](https://www.datacamp.com/workspace) - Jupyter-backed data science notebooks with built-in collaboration and publishing functionality.
- [Deepnote](https://www.deepnote.com) - Jupyter-compatible data science notebook with real-time collaboration, versioning and easy deployment.
- [Domino Data Lab](https://www.dominodatalab.com) - Data science platform with integrated collaboration tools, environment management and compute grid.
- [Google Cloud AI Platform Notebooks](https://cloud.google.com/ai-platform-notebooks) - Managed JupyterLab notebook instances configured with GPU-enabled machine learning frameworks on Google Cloud Platform.
- [Google Cloud Dataproc Jupyter component](https://cloud.google.com/dataproc/docs/concepts/components/jupyter) - Jupyter and JupyterLab for Apache Spark using Google Cloud Dataproc.
- [Google Colaboratory](https://colab.research.google.com) - Cloud-based Jupyter environment aimed at machine learning education and research.  <!--lint disable double-link-->
- [Kyso](https://kyso.io) - Data science platform to publish and share Jupyter notebooks as data blogs and web applications.  <!--lint enable double-link-->
- [Mineo.app](https://mineo.app) - Data Ops platform with Jupyter-compatible notebooks, no code blocks, and support for creating dashboards.
- [Naas](https://naas.ai) - JupyterLab environment with magic scheduling/notification functionality and assets/dependency/secrets management.
- [Noteable](https://noteable.io/) - Noteable is a collaborative notebook to combine code (SQL, Python & R) and interactive visualizations.
- [Paperspace Gradient](https://gradient.run/) - A Jupyter-backed data science IDE with accelerated hardware (GPUs) and MLOps functionality.
- [PAWS](https://wikitech.wikimedia.org/wiki/PAWS) - Jupyter notebook deployment customized for interacting with Wikimedia wikis.
- [Pinggy](https://pinggy.io) - Create a tunnel to your Jupyter instance even if it is behind a firewall or NAT.
- [qBraid Lab](https://docs.qbraid.com/en/latest/lab/getting_started.html) - JupyterLab deployment providing curated software tools and integrations for quantum computing.
- [Saturn Cloud](https://saturncloud.io/) - Move your data science team into the cloud without having to switch tools.

## Official Resources and Documentation

- [Jupyter documentation](https://docs.jupyter.org/en/latest/index.html)
- [Jupyter kernels ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyter/jupyter) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyter/jupyter)](https://github.com/jupyter/jupyter/wiki/Jupyter-kernels) - List of all programming languages available as Jupyter kernels.
- [JupyterLab documentation](http://jupyterlab.readthedocs.io/en/stable/index.html)
- [Making kernels for Jupyter](https://jupyter-client.readthedocs.io/en/latest/kernels.html)
- [Try Jupyter](https://try.jupyter.org) - Try Jupyter in your browser.

## Community Resources

- Conference Talks - [PyVideo.org](http://pyvideo.org/search.html?q=jupyter), [JupyterCon](https://www.youtube.com/playlist?list=PL055Epbe6d5aP6Ru42r7hk68GTSaclYgi)
- GitHub - Search: [jupyter](https://github.com/search?type=Repositories&q=jupyter)
- GitHub - Topics: [jupyter ![GitHub Repo Stars](https://img.shields.io/github/stars/topics/jupyter) ![GitHub last commit](https://img.shields.io/github/last-commit/topics/jupyter)](https://github.com/topics/jupyter), [jupyter-kernels ![GitHub Repo Stars](https://img.shields.io/github/stars/topics/jupyter-kernels) ![GitHub last commit](https://img.shields.io/github/last-commit/topics/jupyter-kernels)](https://github.com/topics/jupyter-kernels), [jupyter-notebook ![GitHub Repo Stars](https://img.shields.io/github/stars/topics/jupyter-notebook) ![GitHub last commit](https://img.shields.io/github/last-commit/topics/jupyter-notebook)](https://github.com/topics/jupyter-notebook), [jupyterhub ![GitHub Repo Stars](https://img.shields.io/github/stars/topics/jupyterhub) ![GitHub last commit](https://img.shields.io/github/last-commit/topics/jupyterhub)](https://github.com/topics/jupyterhub), [jupyterlab ![GitHub Repo Stars](https://img.shields.io/github/stars/topics/jupyterlab) ![GitHub last commit](https://img.shields.io/github/last-commit/topics/jupyterlab)](https://github.com/topics/jupyterlab), [jupyterlab-extension ![GitHub Repo Stars](https://img.shields.io/github/stars/topics/jupyterlab-extension) ![GitHub last commit](https://img.shields.io/github/last-commit/topics/jupyterlab-extension)](https://github.com/topics/jupyterlab-extension)
- Gitter - [Jupyter Gitter Chatroom](https://gitter.im/jupyter/jupyter)
- [jupyter-map](https://elc.github.io/jupyter-map/) - Map of university institutions that use Jupyter.
- [kandi Kits Topic](https://kandi.openweaver.com/explore/jupyter) - Discover popular Jupyter libraries, top authors, trending project kits, discussions, tutorials & learning resources.  <!--lint disable double-link-->
- Mailing Lists - [Jupyter General Mailing List](https://groups.google.com/forum/#!forum/jupyter), [Jupyter in Education Mailing List](https://groups.google.com/forum/#!forum/jupyter-education) <!--lint enable double-link-->
- PyPI - [``Framework :: Jupyter``](https://pypi.org/search/?&c=Framework+%3A%3A+Jupyter)
is the PyPI trove classifier for Jupyter projects.
- Reddit - Subreddits: [r/IPython](https://www.reddit.com/r/IPython/), [r/Jupyter/](https://www.reddit.com/r/Jupyter/)
- Stack Overflow - Tags: [jupyter](https://stackoverflow.com/questions/tagged/jupyter), [jupyter-notebook](https://stackoverflow.com/questions/tagged/jupyter-notebook)


## Articles/Guides/Tutorials

- [Exploratory computing with Python](http://mbakker7.github.io/exploratory_computing_with_python/) - Collection of notebooks covering scientific computing.
- [How to Grow Neat Software Architecture out of Jupyter Notebooks ![GitHub Repo Stars](https://img.shields.io/github/stars/guillaume-chevalier/How-to-Grow-Neat-Software-Architecture-out-of-Jupyter-Notebooks) ![GitHub last commit](https://img.shields.io/github/last-commit/guillaume-chevalier/How-to-Grow-Neat-Software-Architecture-out-of-Jupyter-Notebooks)](https://github.com/guillaume-chevalier/How-to-Grow-Neat-Software-Architecture-out-of-Jupyter-Notebooks) - Article and [video](https://www.youtube.com/watch?v=K4QN27IKr0g) about growing a neat software architecture from notebooks.
- [Install and run a Jupyter notebook in a Google Cloud Dataproc cluster](https://cloud.google.com/dataproc/docs/tutorials/jupyter-notebook)
- [Interactive Web Plotting with Bokeh ![GitHub Repo Stars](https://img.shields.io/github/stars/bokeh/bokeh-notebooks) ![GitHub last commit](https://img.shields.io/github/last-commit/bokeh/bokeh-notebooks)](https://github.com/bokeh/bokeh-notebooks)
- [Jupyter Notebook Extensions](http://jupyter-contrib-nbextensions.readthedocs.io)
- [Jupyter Notebook Themes ![GitHub Repo Stars](https://img.shields.io/github/stars/dunovank/jupyter-themes) ![GitHub last commit](https://img.shields.io/github/last-commit/dunovank/jupyter-themes)](https://github.com/dunovank/jupyter-themes)
- [Jupyter tips, tricks and shortcuts](https://www.dataquest.io/blog/jupyter-notebook-tips-tricks-shortcuts/)
- [JupyterLab - Your Personal Data Science Workbench ![GitHub Repo Stars](https://img.shields.io/github/stars/markusschanta/talks) ![GitHub last commit](https://img.shields.io/github/last-commit/markusschanta/talks)](https://github.com/markusschanta/talks/tree/master/2018-03%20-%20JupyterLab%20-%20Full%20Stack%20Quants) - Talk about JupyterLab at Full Stack Quants London.
- [Lectures on scientific computing with Python ![GitHub Repo Stars](https://img.shields.io/github/stars/jrjohansson/scientific-python-lectures) ![GitHub last commit](https://img.shields.io/github/last-commit/jrjohansson/scientific-python-lectures)](https://github.com/jrjohansson/scientific-python-lectures)
- [List of Jupyter notebooks ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyter/jupyter) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyter/jupyter)](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)
- [List of Jupyter notebooks II ![GitHub Repo Stars](https://img.shields.io/github/stars/jupyter-naas/awesome-notebooks) ![GitHub last commit](https://img.shields.io/github/last-commit/jupyter-naas/awesome-notebooks)](https://github.com/jupyter-naas/awesome-notebooks)
- [pytudes ![GitHub Repo Stars](https://img.shields.io/github/stars/norvig/pytudes) ![GitHub last commit](https://img.shields.io/github/last-commit/norvig/pytudes)](https://github.com/norvig/pytudes) - List of Jupyter Notebooks by Peter Norvig.
- [ResGuides: research with Jupyter](https://www.gitbook.com/book/dansand/resguides-research-with-jupyter/details)
- [Sharing Jupyter Notebooks from localhost](https://pinggy.io/blog/share_jupyter_notebook_from_localhost/) - Sharing Jupyter Notebooks from localhost.
- [The Littlest JupyterHub](https://the-littlest-jupyterhub.readthedocs.io/en/latest/) - JupyterHub distribution for 1-50 users on a single server; more lightweight than the Zero to JupyterHub setup.
- [Zero to JupyterHub](http://zero-to-jupyterhub.readthedocs.io/en/latest/) - Tutorial to help install and manage JupyterHub.

## Contributing

Your contributions are always welcome! Please take a look at the [contribution guidelines](CONTRIBUTING.md) first.
