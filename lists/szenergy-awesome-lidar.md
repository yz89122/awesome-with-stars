# Awesome LIDAR [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

<img src="https://github.com/szenergy/awesome-lidar/raw/main/img/lidar.svg" align="right" width="100">

> A curated list of awesome LIDAR sensors and its applications.

[LIDAR](https://en.wikipedia.org/wiki/Lidar) is a remote sensing sensor that uses laser light to measure the surroundings in ~cm accuracy. The sensory data is usually referred as point cloud which means set of data points in 3D or 2D. The list contains hardwares, datasets, point cloud-processing algorithms, point cloud frameworks, simulators etc.

Contributions are welcome! Please [check out](contributing.md) our guidelines.

## Contents

- [Awesome LIDAR ](#awesome-lidar-)
  - [Contents](#contents)
  - [Conventions](#conventions)
  - [Manufacturers](#manufacturers)
  - [Datasets](#datasets)
  - [Libraries](#libraries)
  - [Frameworks](#frameworks)
  - [Algorithms](#algorithms)
    - [Basic matching algorithms](#basic-matching-algorithms)
    - [Semantic segmentation](#semantic-segmentation)
    - [Ground segmentation](#ground-segmentation)
    - [Simultaneous localization and mapping SLAM and LIDAR-based odometry and or mapping LOAM](#simultaneous-localization-and-mapping-slam-and-lidar-based-odometry-and-or-mapping-loam)
    - [Object detection and object tracking](#object-detection-and-object-tracking)
  - [Simulators](#simulators)
  - [Related awesome](#related-awesome)
  - [Others](#others)

## Conventions

- Any list item with an OctoCat :octocat: has a GitHub repo or organization
- Any list item with a RedCircle :red_circle: has YouTube videos or channel
- Any list item with a Paper :newspaper: has a scientific paper or detailed description

## Manufacturers

- [Velodyne](https://velodynelidar.com/) - Ouster and Velodyne announced the successful completion of their *merger* of equals, effective February 10, 2023. Velodyne was a mechanical and solid-state LIDAR manufacturer. The headquarter is in San Jose, California, USA.
  - [YouTube channel :red_circle:](https://www.youtube.com/user/VelodyneLiDAR)
  - [ROS driver :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/ros-drivers/velodyne) ![GitHub last commit](https://img.shields.io/github/last-commit/ros-drivers/velodyne)](https://github.com/ros-drivers/velodyne)
- [Ouster](https://ouster.com/) - LIDAR manufacturer, specializing in digital-spinning LiDARs. Ouster is headquartered in San Francisco, USA.
  - [YouTube channel :red_circle:](https://www.youtube.com/c/Ouster-lidar)
  - [GitHub organization :octocat:](https://github.com/ouster-lidar)
- [Livox](https://www.livoxtech.com/) - LIDAR manufacturer.
  - [YouTube channel :red_circle:](https://www.youtube.com/channel/UCnLpB5QxlQUexi40vM12mNQ)
  - [GitHub organization :octocat:](https://github.com/Livox-SDK)
- [SICK](https://www.sick.com/ag/en/) - Sensor and automation manufacturer, the headquarter is located in Waldkirch, Germany.
  - [YouTube channel :red_circle:](https://www.youtube.com/user/SICKSensors)
  - [GitHub organization :octocat:](https://github.com/SICKAG)
- [Hokuyo](https://www.hokuyo-aut.jp/) - Sensor and automation manufacturer, headquartered in Osaka, Japan.
  - [YouTube channel :red_circle:](https://www.youtube.com/channel/UCYzJXC82IEy-h-io2REin5g)
- [Pioneer](http://autonomousdriving.pioneer/en/3d-lidar/) - LIDAR manufacturer, specializing in MEMS mirror-based raster scanning LiDARs (3D-LiDAR). Pioneer is headquartered in Tokyo, Japan.
  - [YouTube channel :red_circle:](https://www.youtube.com/user/PioneerCorporationPR)
- [Luminar](https://www.luminartech.com/) - LIDAR manufacturer focusing on compact, auto-grade sensors. Luminar is headquartered Palo Alto, California, USA.
  - [Vimeo channel :red_circle:](https://vimeo.com/luminartech)
  - [GitHub organization :octocat:](https://github.com/luminartech)
- [Hesai](https://www.hesaitech.com/) - Hesai Technology is a LIDAR manufacturer, founded in Shanghai, China.
  - [YouTube channel :red_circle:](https://www.youtube.com/channel/UCG2_ffm6sdMsK-FX8yOLNYQ/videos)
  - [GitHub organization :octocat:](https://github.com/HesaiTechnology)
- [Robosense](http://www.robosense.ai/) - RoboSense (Suteng Innovation Technology Co., Ltd.) is a LIDAR sensor, AI algorithm and IC chipset maufactuirer based in Shenzhen and Beijing (China).
  - [YouTube channel :red_circle:](https://www.youtube.com/channel/UCYCK8j678N6d_ayWE_8F3rQ)
  - [GitHub organization :octocat:](https://github.com/RoboSense-LiDAR)
- [LSLIDAR](https://www.lslidar.com/) - LSLiDAR (Leishen Intelligent System Co., Ltd.) is a LIDAR sensor manufacturer and complete solution provider based in Shenzhen, China.
  - [YouTube channel :red_circle:](https://www.youtube.com/@lslidar2015)
  - [GitHub organization :octocat:](https://github.com/Lslidar)
- [Ibeo](https://www.ibeo-as.com/) - Ibeo Automotive Systems GmbH is an automotive industry / environmental detection laserscanner / LIDAR manufacturer, based in Hamburg, Germany.
  - [YouTube channel :red_circle:](https://www.youtube.com/c/IbeoAutomotive/)
- [Innoviz](https://innoviz.tech/) - Innoviz technologies / specializes in solid-state LIDARs.
  - [YouTube channel :red_circle:](https://www.youtube.com/channel/UCVc1KFsu2eb20M8pKFwGiFQ)
- [Quanenergy](https://quanergy.com/) - Quanenergy Systems / solid-state and mechanical LIDAR sensors / offers End-to-End solutions in Mapping, Industrial Automation, Transportation and Security. The headquarter is located in Sunnyvale, California, USA.
  - [YouTube channel :red_circle:](https://www.youtube.com/c/QuanergySystems)
- [Cepton](https://www.cepton.com/index.html) - Cepton (Cepton Technologies, Inc.) / pioneers in frictionless, and mirrorless design, self-developed MMT (micro motion technology) lidar technology. The headquarter is located in San Jose, California, USA.
  - [YouTube channel :red_circle:](https://www.youtube.com/channel/UCUgkBZZ1UWWkkXJ5zD6o8QQ)
- [Blickfeld](https://www.blickfeld.com/) - Blickfeld is a solid-state LIDAR manufacturer for autonomous mobility and IoT, based in München, Germany.
  - [YouTube channel :red_circle:](https://www.youtube.com/c/BlickfeldLiDAR)
  - [GitHub organization :octocat:](https://github.com/Blickfeld)
- [Neuvition](https://www.neuvition.com/) - Neuvition is a solid-state LIDAR manufacturer based in Wujiang, China.
  - [YouTube channel :red_circle:](https://www.youtube.com/channel/UClFjlekWJo4T5bfzxX0ZW3A)
- [Aeva](https://www.aeva.com/) - Aeva is bringing the next wave of perception technology to all devices for automated driving, consumer electronics, health, industrial robotics and security, Mountain View, California, USA.
  - [YouTube channel :red_circle:](https://www.youtube.com/c/AevaInc)
  - [GitHub organization :octocat:](https://github.com/aevainc)
- [XenomatiX](https://www.xenomatix.com/) - XenomatiX offers true solid-state lidar sensors based on a multi-beam lasers concept. XenomatiX is headquartered in Leuven, Belgium.
  - [YouTube channel :red_circle:](https://www.youtube.com/@XenomatiXTruesolidstatelidar)
- [MicroVision](https://microvision.com/) - A pioneer in MEMS-based laser beam scanning technology, the main focus is on building Automotive grade Lidar sensors
  - [YouTube channel :red_circle:](https://www.youtube.com/user/mvisvideo)
  - GitHub organization :octocat:](https://github.com/MicroVision-Inc)

## Datasets

- [Ford Dataset](https://avdata.ford.com/) - The dataset is time-stamped and contains raw data from all the sensors, calibration values, pose trajectory, ground truth pose, and 3D maps. The data is Robot Operating System (ROS) compatible.
  - [Paper :newspaper:](https://arxiv.org/pdf/2003.07969.pdf)
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/Ford/AVData) ![GitHub last commit](https://img.shields.io/github/last-commit/Ford/AVData)](https://github.com/Ford/AVData)
- [Audi A2D2 Dataset](https://www.a2d2.audi) - The dataset features 2D semantic segmentation, 3D point clouds, 3D bounding boxes, and vehicle bus data.
  - [Paper :newspaper:](https://www.a2d2.audi/content/dam/a2d2/dataset/a2d2-audi-autonomous-driving-dataset.pdf)
- [Waymo Open Dataset](https://waymo.com/open/) - The dataset contains independently-generated labels for lidar and camera data, not simply projections.
- [Oxford RobotCar](https://robotcar-dataset.robots.ox.ac.uk/) - The Oxford RobotCar Dataset contains over 100 repetitions of a consistent route through Oxford, UK, captured over a period of over a year. 
  - [YouTube channel :red_circle:](https://www.youtube.com/c/ORIOxfordRoboticsInstitute)
  - [Paper :newspaper:](https://robotcar-dataset.robots.ox.ac.uk/images/RCD_RTK.pdf)
- [EU Long-term Dataset](https://epan-utbm.github.io/utbm_robocar_dataset/) - This dataset was collected with our robocar (in human driving mode of course), equipped up to eleven heterogeneous sensors, in the downtown (for long-term data) and a suburb (for roundabout data) of Montbéliard in France. The vehicle speed was limited to 50 km/h following the French traffic rules.
- [NuScenes](https://www.nuscenes.org/) - Public large-scale dataset for autonomous driving.
  - [Paper :newspaper:](https://arxiv.org/pdf/1903.11027.pdf)
- [Lyft](https://level5.lyft.com/dataset/) - Public dataset collected by a fleet of Ford Fusion vehicles equipped with LIDAR and camera.
- [KITTI](http://www.cvlibs.net/datasets/kitti/raw_data.php) - Widespread public dataset, pirmarily focusing on computer vision applications, but also contains LIDAR point cloud.
- [Semantic KITTI](http://semantic-kitti.org/) - Dataset for semantic and panoptic scene segmentation.
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=3qNOXvkpK4I)
- [CADC - Canadian Adverse Driving Conditions Dataset](http://cadcd.uwaterloo.ca/) - Public large-scale dataset for autonomous driving in adverse weather conditions (snowy weather).
  - [Paper :newspaper:](https://arxiv.org/pdf/2001.10117.pdf)
- [UofTPed50 Dataset](https://www.autodrive.utoronto.ca/uoftped50) - University of Toronto, aUToronto's self-driving car dataset, which contains GPS/IMU, 3D LIDAR, and Monocular camera data. It can be used for 3D pedestrian detection.
  - [Paper :newspaper:](https://arxiv.org/pdf/1905.08758.pdf)
- [PandaSet Open Dataset](https://scale.com/open-datasets/pandaset) - Public large-scale dataset for autonomous driving provided by Hesai & Scale. It enables researchers to study challenging urban driving situations using the full sensor suit of a real self-driving-car.
- [Cirrus dataset](https://developer.volvocars.com/open-datasets/cirrus/) A public datatset from non-uniform distribution of LIDAR scanning patterns with emphasis on long range. In this dataset Luminar Hydra LIDAR is used. The dataset is available at the Volvo Cars Innovation Portal.
  - [Paper :newspaper:](https://arxiv.org/pdf/2012.02938.pdf)
- [USyd Dataset- The Univerisity of Sydney Campus- Dataset](http://its.acfr.usyd.edu.au/datasets/usyd-campus-dataset/) - Long-term, large-scale dataset collected over the period of 1.5 years on a weekly basis over the University of Sydney campus and surrounds. It includes multiple sensor modalities and covers various environmental conditions. ROS compatible
  - [Paper :newspaper:](https://ieeexplore.ieee.org/document/9109704)
- [Brno Urban Dataset :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/Robotics-BUT/Brno-Urban-Dataset) ![GitHub last commit](https://img.shields.io/github/last-commit/Robotics-BUT/Brno-Urban-Dataset)](https://github.com/Robotics-BUT/Brno-Urban-Dataset) - Navigation and localisation dataset for self driving cars and autonomous robots in Brno, Czechia.
  - [Paper :newspaper:](https://ieeexplore.ieee.org/document/9197277)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=wDFePIViwqY)
- [Argoverse :octocat:](https://www.argoverse.org/) - A dataset designed to support autonomous vehicle perception tasks including 3D tracking and motion forecasting collected in Pittsburgh, Pennsylvania and Miami, Florida, USA.
  - [Paper :newspaper:](https://openaccess.thecvf.com/content_CVPR_2019/papers/Chang_Argoverse_3D_Tracking_and_Forecasting_With_Rich_Maps_CVPR_2019_paper.pdf)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=DM8jWfi69zM)
- [Boreas Dataset](https://www.boreas.utias.utoronto.ca/) - The Boreas dataset was collected by driving a repeated route over the course of 1 year resulting in stark seasonal variations. In total, Boreas contains over 350km of driving data including several sequences with adverse weather conditions such as rain and heavy snow. The Boreas data-taking platform features a unique high-quality sensor suite with a 128-channel Velodyne Alpha Prime lidar, a 360-degree Navtech radar, and accurate ground truth poses obtained from an Applanix POSLV GPS/IMU. 
  - [Paper 📰](https://arxiv.org/abs/2203.10168)
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/utiasASRL/pyboreas) ![GitHub last commit](https://img.shields.io/github/last-commit/utiasASRL/pyboreas)](https://github.com/utiasASRL/pyboreas)

## Libraries

- [Point Cloud Library (PCL)](http://www.pointclouds.org/) - Popular highly parallel programming library, with numerous industrial and research use-cases. 
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/PointCloudLibrary/pcl) ![GitHub last commit](https://img.shields.io/github/last-commit/PointCloudLibrary/pcl)](https://github.com/PointCloudLibrary/pcl)
- [Open3D library](http://www.open3d.org/docs/release/) - Open3D library contanins 3D data processing and visualization algorithms. It is open-source and supports both C++ and Python.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/intel-isl/Open3D) ![GitHub last commit](https://img.shields.io/github/last-commit/intel-isl/Open3D)](https://github.com/intel-isl/Open3D)
  - [YouTube channel :red_circle:](https://www.youtube.com/channel/UCRJBlASPfPBtPXJSPffJV-w)
- [PyTorch Geometric :newspaper:](https://arxiv.org/pdf/1903.02428.pdf) - A geometric deep learning extension library for PyTorch.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/rusty1s/pytorch_geometric) ![GitHub last commit](https://img.shields.io/github/last-commit/rusty1s/pytorch_geometric)](https://github.com/rusty1s/pytorch_geometric)
- [PyTorch3d](https://pytorch3d.org/) - PyTorch3d is a library for deep learning with 3D data written and maintained by the Facebook AI Research Computer Vision Team.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/facebookresearch/pytorch3d) ![GitHub last commit](https://img.shields.io/github/last-commit/facebookresearch/pytorch3d)](https://github.com/facebookresearch/pytorch3d)
- [Kaolin](https://kaolin.readthedocs.io/en/latest/) - Kaolin is a PyTorch Library for Accelerating 3D Deep Learning Research written by NVIDIA Technologies for game and application developers.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/NVIDIAGameWorks/kaolin) ![GitHub last commit](https://img.shields.io/github/last-commit/NVIDIAGameWorks/kaolin)](https://github.com/NVIDIAGameWorks/kaolin/)
  - [Paper :newspaper:](https://arxiv.org/pdf/1911.05063.pdf)
- [PyVista](https://docs.pyvista.org/) - 3D plotting and mesh analysis through a streamlined interface for the Visualization Toolkit.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/pyvista/pyvista) ![GitHub last commit](https://img.shields.io/github/last-commit/pyvista/pyvista)](https://github.com/pyvista/pyvista)
  - [Paper :newspaper:](https://joss.theoj.org/papers/10.21105/joss.01450)
- [pyntcloud](https://pyntcloud.readthedocs.io/en/latest/) - Pyntcloud is a Python 3 library for working with 3D point clouds leveraging the power of the Python scientific stack.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/daavoo/pyntcloud) ![GitHub last commit](https://img.shields.io/github/last-commit/daavoo/pyntcloud)](https://github.com/daavoo/pyntcloud)
- [pointcloudset](https://virtual-vehicle.github.io/pointcloudset/) - Python library for efficient analysis of large datasets of point clouds recorded over time.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/virtual-vehicle/pointcloudset) ![GitHub last commit](https://img.shields.io/github/last-commit/virtual-vehicle/pointcloudset)](https://github.com/virtual-vehicle/pointcloudset) 

## Frameworks

- [Autoware](https://www.autoware.ai/) - Popular framework in academic and research applications of autonomous vehicles.
  - [GitLab repository :octocat:](https://gitlab.com/autowarefoundation/autoware.ai)
  - [Paper :newspaper:](https://www.researchgate.net/profile/Takuya_Azumi/publication/327198306_Autoware_on_Board_Enabling_Autonomous_Vehicles_with_Embedded_Systems/links/5c9085da45851564fae6dcd0/Autoware-on-Board-Enabling-Autonomous-Vehicles-with-Embedded-Systems.pdf)
- [Baidu Apollo](https://apollo.auto/) - Apollo is a popular framework which accelerates the development, testing, and deployment of Autonomous Vehicles.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/ApolloAuto/apollo) ![GitHub last commit](https://img.shields.io/github/last-commit/ApolloAuto/apollo)](https://github.com/ApolloAuto/apollo)
  - [YouTube channel :red_circle:](https://www.youtube.com/c/ApolloAuto)

## Algorithms

### Basic matching algorithms
- [Iterative closest point (ICP) :red_circle:](https://www.youtube.com/watch?v=uzOCS_gdZuM) - The must-have algorithm for feature matching applications (ICP).
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/pglira/simpleICP) ![GitHub last commit](https://img.shields.io/github/last-commit/pglira/simpleICP)](https://github.com/pglira/simpleICP) - simpleICP C++ /Julia / Matlab / Octave / Python implementation.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/ethz-asl/libpointmatcher) ![GitHub last commit](https://img.shields.io/github/last-commit/ethz-asl/libpointmatcher)](https://github.com/ethz-asl/libpointmatcher) - libpointmatcher, a modular library implementing the ICP algorithm.
  - [Paper :newspaper:](https://link.springer.com/content/pdf/10.1007/s10514-013-9327-2.pdf) - libpointmatcher: Comparing ICP variants on real-world data sets.
- [Normal distributions transform :red_circle:](https://www.youtube.com/watch?v=0YV4a2asb8Y) - More recent massively-parallel approach to feature matching (NDT).
- [KISS-ICP :red_circle:](https://www.youtube.com/watch?v=kMMH8rA1ggI) - In Defense of Point-to-Point ICP – Simple, Accurate, and Robust Registration If Done the Right Way.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/PRBonn/kiss-icp) ![GitHub last commit](https://img.shields.io/github/last-commit/PRBonn/kiss-icp)](https://github.com/PRBonn/kiss-icp)
  - [Paper :newspaper:](https://arxiv.org/pdf/2209.15397.pdf)

### Semantic segmentation
- [RangeNet++ :newspaper:](https://www.ipb.uni-bonn.de/wp-content/papercite-data/pdf/milioto2019iros.pdf) - Fast and Accurate LiDAR Sematnic Segmentation with fully convolutional network.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/PRBonn/rangenet_lib) ![GitHub last commit](https://img.shields.io/github/last-commit/PRBonn/rangenet_lib)](https://github.com/PRBonn/rangenet_lib)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=uo3ZuLuFAzk)
- [PolarNet :newspaper:](https://arxiv.org/pdf/2003.14032.pdf) - An Improved Grid Representation for Online LiDAR Point Clouds Semantic Segmentation.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/edwardzhou130/PolarSeg) ![GitHub last commit](https://img.shields.io/github/last-commit/edwardzhou130/PolarSeg)](https://github.com/edwardzhou130/PolarSeg)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=iIhttRSMqjE)
- [Frustum PointNets :newspaper:](https://arxiv.org/pdf/1711.08488.pdf) - Frustum PointNets for 3D Object Detection from RGB-D Data.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/charlesq34/frustum-pointnets) ![GitHub last commit](https://img.shields.io/github/last-commit/charlesq34/frustum-pointnets)](https://github.com/charlesq34/frustum-pointnets)
- [Study of LIDAR Semantic Segmentation](https://larissa.triess.eu/scan-semseg/) - Scan-based Semantic Segmentation of LiDAR Point Clouds: An Experimental Study IV 2020.
  - [Paper :newspaper:](https://arxiv.org/abs/2004.11803)
  - [GitHub repository :octocat:](http://ltriess.github.io/scan-semseg)
- [LIDAR-MOS :newspaper:](https://www.ipb.uni-bonn.de/pdfs/chen2021ral-iros.pdf) - Moving Object Segmentation in 3D LIDAR Data
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/PRBonn/LiDAR-MOS) ![GitHub last commit](https://img.shields.io/github/last-commit/PRBonn/LiDAR-MOS)](https://github.com/PRBonn/LiDAR-MOS)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=NHvsYhk4dhw)
- [SuperPoint Graph :newspaper:](https://arxiv.org/pdf/1711.09869.pdf)- Large-scale Point Cloud Semantic Segmentation with Superpoint Graphs
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/PRBonn/LiDAR-MOS) ![GitHub last commit](https://img.shields.io/github/last-commit/PRBonn/LiDAR-MOS)](https://github.com/PRBonn/LiDAR-MOS)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=Ijr3kGSU_tU)
- [RandLA-Net :newspaper:](https://arxiv.org/pdf/1911.11236.pdf) - Efficient Semantic Segmentation of Large-Scale Point Clouds
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/QingyongHu/RandLA-Net) ![GitHub last commit](https://img.shields.io/github/last-commit/QingyongHu/RandLA-Net)](https://github.com/QingyongHu/RandLA-Net)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=Ar3eY_lwzMk)
- [Automatic labelling :newspaper:](https://arxiv.org/pdf/2108.13757.pdf) - Automatic labelling of urban point clouds using data fusion
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/Amsterdam-AI-Team/Urban_PointCloud_Processing) ![GitHub last commit](https://img.shields.io/github/last-commit/Amsterdam-AI-Team/Urban_PointCloud_Processing)](https://github.com/Amsterdam-AI-Team/Urban_PointCloud_Processing)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=qMj_WM6D0vI)

### Ground segmentation
- [Plane Seg :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/ori-drs/plane_seg) ![GitHub last commit](https://img.shields.io/github/last-commit/ori-drs/plane_seg)](https://github.com/ori-drs/plane_seg) - ROS comapatible ground plane segmentation; a library for fitting planes to LIDAR.
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=YYs4lJ9t-Xo)
- [LineFit Graph :newspaper:](https://ieeexplore.ieee.org/abstract/document/5548059)- Line fitting-based fast ground segmentation for horizontal 3D LiDAR data
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/lorenwel/linefit_ground_segmentation) ![GitHub last commit](https://img.shields.io/github/last-commit/lorenwel/linefit_ground_segmentation)](https://github.com/lorenwel/linefit_ground_segmentation)
- [Patchwork :newspaper:](https://arxiv.org/pdf/2108.05560.pdf)- Region-wise plane fitting-based robust and fast ground segmentation for 3D LiDAR data 
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/LimHyungTae/patchwork) ![GitHub last commit](https://img.shields.io/github/last-commit/LimHyungTae/patchwork)](https://github.com/LimHyungTae/patchwork)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=rclqeDi4gow)
- [Patchwork++ :newspaper:](https://arxiv.org/pdf/2207.11919.pdf)- Improved version of Patchwork. Patchwork++ provides pybinding as well for deep learning users
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/url-kaist/patchwork-plusplus-ros) ![GitHub last commit](https://img.shields.io/github/last-commit/url-kaist/patchwork-plusplus-ros)](https://github.com/url-kaist/patchwork-plusplus-ros)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=fogCM159GRk)


### Simultaneous localization and mapping SLAM and LIDAR-based odometry and or mapping LOAM
- [LOAM J. Zhang and S. Singh :red_circle:](https://youtu.be/8ezyhTAEyHs) - LOAM: Lidar Odometry and Mapping in Real-time.
- [LeGO-LOAM :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/RobustFieldAutonomyLab/LeGO-LOAM) ![GitHub last commit](https://img.shields.io/github/last-commit/RobustFieldAutonomyLab/LeGO-LOAM)](https://github.com/RobustFieldAutonomyLab/LeGO-LOAM) - A lightweight and ground optimized lidar odometry and mapping (LeGO-LOAM) system for ROS compatible UGVs. 
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=7uCxLUs9fwQ)
- [Cartographer :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/cartographer-project/cartographer) ![GitHub last commit](https://img.shields.io/github/last-commit/cartographer-project/cartographer)](https://github.com/cartographer-project/cartographer) - Cartographer is ROS compatible system that provides real-time simultaneous localization and mapping (SLAM) in 2D and 3D across multiple platforms and sensor configurations.
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=29Knm-phAyI)
- [SuMa++ :newspaper:](http://www.ipb.uni-bonn.de/wp-content/papercite-data/pdf/chen2019iros.pdf) - LiDAR-based Semantic SLAM.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/PRBonn/semantic_suma) ![GitHub last commit](https://img.shields.io/github/last-commit/PRBonn/semantic_suma)](https://github.com/PRBonn/semantic_suma/)
  - [YouTube video :red_circle:](https://youtu.be/uo3ZuLuFAzk)
- [OverlapNet :newspaper:](http://www.ipb.uni-bonn.de/wp-content/papercite-data/pdf/chen2020rss.pdf) -  Loop Closing for LiDAR-based SLAM.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/PRBonn/OverlapNet) ![GitHub last commit](https://img.shields.io/github/last-commit/PRBonn/OverlapNet)](https://github.com/PRBonn/OverlapNet)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=YTfliBco6aw)
- [LIO-SAM :newspaper:](https://arxiv.org/pdf/2007.00258.pdf) - Tightly-coupled Lidar Inertial Odometry via Smoothing and Mapping.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/TixiaoShan/LIO-SAM) ![GitHub last commit](https://img.shields.io/github/last-commit/TixiaoShan/LIO-SAM)](https://github.com/TixiaoShan/LIO-SAM)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=A0H8CoORZJU)
- [Removert :newspaper:](http://ras.papercept.net/images/temp/IROS/files/0855.pdf) - Remove, then Revert: Static Point cloud Map Construction using Multiresolution Range Images.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/irapkaist/removert) ![GitHub last commit](https://img.shields.io/github/last-commit/irapkaist/removert)](https://github.com/irapkaist/removert)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=M9PEGi5fAq8)

### Object detection and object tracking
- [Learning to Optimally Segment Point Clouds :newspaper:](https://arxiv.org/abs/1912.04976) - By Peiyun Hu, David Held, and Deva Ramanan at Carnegie Mellon University. IEEE Robotics and Automation Letters, 2020.
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=wLxIAwIL870)
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/peiyunh/opcseg) ![GitHub last commit](https://img.shields.io/github/last-commit/peiyunh/opcseg)](https://github.com/peiyunh/opcseg)
- [Leveraging Heteroscedastic Aleatoric Uncertainties for Robust Real-Time LiDAR 3D Object Detection :newspaper:](https://arxiv.org/pdf/1809.05590.pdf) - By Di Feng, Lars Rosenbaum, Fabian Timm, Klaus Dietmayer. 30th IEEE Intelligent Vehicles Symposium, 2019.
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=2DzH9COLpkU)
- [What You See is What You Get: Exploiting Visibility for 3D Object Detection :newspaper:](https://arxiv.org/pdf/1912.04986.pdf) - By Peiyun Hu, Jason Ziglar, David Held, Deva Ramanan, 2019.
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=497OF-otY2k)
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/peiyunh/WYSIWYG) ![GitHub last commit](https://img.shields.io/github/last-commit/peiyunh/WYSIWYG)](https://github.com/peiyunh/WYSIWYG)
- [urban_road_filter :newspaper:](https://doi.org/10.3390/s22010194)-
Real-Time LIDAR-Based Urban Road and Sidewalk Detection for Autonomous Vehicles
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/jkk-research/urban_road_filter) ![GitHub last commit](https://img.shields.io/github/last-commit/jkk-research/urban_road_filter)](https://github.com/jkk-research/urban_road_filter)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=T2qi4pldR-E)

## Simulators
- [CoppeliaSim](https://www.coppeliarobotics.com/coppeliaSim) - Cross-platform general-purpose robotic simulator (formerly known as V-REP).
  - [YouTube channel :red_circle:](https://www.youtube.com/user/VirtualRobotPlatform)
- [OSRF Gazebo](http://gazebosim.org/) - OGRE-based general-purpose robotic simulator, ROS/ROS 2 compatible.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/osrf/gazebo) ![GitHub last commit](https://img.shields.io/github/last-commit/osrf/gazebo)](https://github.com/osrf/gazebo)
- [CARLA](https://carla.org/) - Unreal Engine based simulator for automotive applications. Compatible with Autoware, Baidu Apollo and ROS/ROS 2.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/carla-simulator/carla) ![GitHub last commit](https://img.shields.io/github/last-commit/carla-simulator/carla)](https://github.com/carla-simulator/carla)
  - [YouTube channel :red_circle:](https://www.youtube.com/channel/UC1llP9ekCwt8nEJzMJBQekg)
- [LGSVL / SVL](https://www.lgsvlsimulator.com/) - Unity Engine based simulator for automotive applications. Compatible with Autoware, Baidu Apollo and ROS/ROS 2. *Note:* LG has made the difficult decision to [suspend](https://www.svlsimulator.com/news/2022-01-20-svl-simulator-sunset) active development of SVL Simulator.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/lgsvl/simulator) ![GitHub last commit](https://img.shields.io/github/last-commit/lgsvl/simulator)](https://github.com/lgsvl/simulator)
  - [YouTube channel :red_circle:](https://www.youtube.com/c/LGSVLSimulator)
- [OSSDC SIM ![GitHub Repo Stars](https://img.shields.io/github/stars/OSSDC/OSSDC-SIM) ![GitHub last commit](https://img.shields.io/github/last-commit/OSSDC/OSSDC-SIM)](https://github.com/OSSDC/OSSDC-SIM) - Unity Engine based simulator for automotive applications, based on the suspended LGSVL simulator, but an active development. Compatible with Autoware, Baidu Apollo and ROS/ROS 2.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/OSSDC/OSSDC-SIM) ![GitHub last commit](https://img.shields.io/github/last-commit/OSSDC/OSSDC-SIM)](https://github.com/OSSDC/OSSDC-SIM)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=fU_C38WEwGw)
- [AirSim](https://microsoft.github.io/AirSim) - Unreal Engine based simulator for drones and automotive. Compatible with ROS.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/microsoft/AirSim) ![GitHub last commit](https://img.shields.io/github/last-commit/microsoft/AirSim)](https://github.com/microsoft/AirSim)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=gnz1X3UNM5Y)
- [AWSIM](https://tier4.github.io/AWSIM) - Unity Engine based simulator for automotive applications. Compatible with Autoware and ROS 2.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/tier4/AWSIM) ![GitHub last commit](https://img.shields.io/github/last-commit/tier4/AWSIM)](https://github.com/tier4/AWSIM)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=FH7aBWDmSNA)


## Related awesome
- [Awesome point cloud analysis :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/Yochengliu/awesome-point-cloud-analysis) ![GitHub last commit](https://img.shields.io/github/last-commit/Yochengliu/awesome-point-cloud-analysis)](https://github.com/Yochengliu/awesome-point-cloud-analysis#readme)
- [Awesome robotics :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/Kiloreux/awesome-robotics) ![GitHub last commit](https://img.shields.io/github/last-commit/Kiloreux/awesome-robotics)](https://github.com/Kiloreux/awesome-robotics#readme)
- [Awesome robotics libraries :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/jslee02/awesome-robotics-libraries) ![GitHub last commit](https://img.shields.io/github/last-commit/jslee02/awesome-robotics-libraries)](https://github.com/jslee02/awesome-robotics-libraries#readme)
- [Awesome ROS 2 :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/fkromer/awesome-ros2) ![GitHub last commit](https://img.shields.io/github/last-commit/fkromer/awesome-ros2)](https://github.com/fkromer/awesome-ros2#readme)
- [Awesome artificial intelligence :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/owainlewis/awesome-artificial-intelligence) ![GitHub last commit](https://img.shields.io/github/last-commit/owainlewis/awesome-artificial-intelligence)](https://github.com/owainlewis/awesome-artificial-intelligence#readme)
- [Awesome computer vision :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/jbhuang0604/awesome-computer-vision) ![GitHub last commit](https://img.shields.io/github/last-commit/jbhuang0604/awesome-computer-vision)](https://github.com/jbhuang0604/awesome-computer-vision#readme)
- [Awesome machine learning :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/josephmisiti/awesome-machine-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/josephmisiti/awesome-machine-learning)](https://github.com/josephmisiti/awesome-machine-learning#readme)
- [Awesome deep learning :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/ChristosChristofidis/awesome-deep-learning) ![GitHub last commit](https://img.shields.io/github/last-commit/ChristosChristofidis/awesome-deep-learning)](https://github.com/ChristosChristofidis/awesome-deep-learning#readme)
- [Awesome reinforcement learning :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/aikorea/awesome-rl) ![GitHub last commit](https://img.shields.io/github/last-commit/aikorea/awesome-rl)](https://github.com/aikorea/awesome-rl/#readme)
- [Awesome SLAM datasets :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/youngguncho/awesome-slam-datasets) ![GitHub last commit](https://img.shields.io/github/last-commit/youngguncho/awesome-slam-datasets)](https://github.com/youngguncho/awesome-slam-datasets#readme)
- [Awesome electronics :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/kitspace/awesome-electronics) ![GitHub last commit](https://img.shields.io/github/last-commit/kitspace/awesome-electronics)](https://github.com/kitspace/awesome-electronics#readme)
- [Awesome vehicle security and car hacking :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/jaredthecoder/awesome-vehicle-security) ![GitHub last commit](https://img.shields.io/github/last-commit/jaredthecoder/awesome-vehicle-security)](https://github.com/jaredthecoder/awesome-vehicle-security#readme)
- [Awesome LIDAR-Camera calibration :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/Deephome/Awesome-LiDAR-Camera-Calibration) ![GitHub last commit](https://img.shields.io/github/last-commit/Deephome/Awesome-LiDAR-Camera-Calibration)](https://github.com/Deephome/Awesome-LiDAR-Camera-Calibration)

## Others
- [ARHeadsetKit ![GitHub Repo Stars](https://img.shields.io/github/stars/philipturner/ARHeadsetKit) ![GitHub last commit](https://img.shields.io/github/last-commit/philipturner/ARHeadsetKit)](https://github.com/philipturner/ARHeadsetKit) - Using $5 Google Cardboard to replicate Microsoft Hololens. Hosts the source code for research on [scene color reconstruction ![GitHub Repo Stars](https://img.shields.io/github/stars/philipturner/scene-color-reconstruction) ![GitHub last commit](https://img.shields.io/github/last-commit/philipturner/scene-color-reconstruction)](https://github.com/philipturner/scene-color-reconstruction).
- [Pointcloudprinter :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/marian42/pointcloudprinter) ![GitHub last commit](https://img.shields.io/github/last-commit/marian42/pointcloudprinter)](https://github.com/marian42/pointcloudprinter) - A tool to turn point cloud data from aerial lidar scans into solid meshes for 3D printing.
- [CloudCompare](https://cloudcompare.org/) - CloudCompare is a free, cross-platform point cloud editor software.
  - [GitHub repository :octocat:](https://github.com/CloudCompare)
- [Pcx :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/keijiro/Pcx) ![GitHub last commit](https://img.shields.io/github/last-commit/keijiro/Pcx)](https://github.com/keijiro/Pcx) - Point cloud importer/renderer for Unity.
- [Bpy :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/uhlik/bpy) ![GitHub last commit](https://img.shields.io/github/last-commit/uhlik/bpy)](https://github.com/uhlik/bpy) - Point cloud importer/renderer/editor for Blender, Point Cloud visualizer.
- [Semantic Segmentation Editor :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/Hitachi-Automotive-And-Industry-Lab/semantic-segmentation-editor) ![GitHub last commit](https://img.shields.io/github/last-commit/Hitachi-Automotive-And-Industry-Lab/semantic-segmentation-editor)](https://github.com/Hitachi-Automotive-And-Industry-Lab/semantic-segmentation-editor) - Point cloud and image semantic segmentation editor by Hitachi Automotive And Industry Laboratory, point cloud annotator / labeling.
- [3D Bounding Box Annotation Tool :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/walzimmer/3d-bat) ![GitHub last commit](https://img.shields.io/github/last-commit/walzimmer/3d-bat)](https://github.com/walzimmer/3d-bat) - 3D BAT: A Semi-Automatic, Web-based 3D Annotation Toolbox for Full-Surround, Multi-Modal Data Streams, point cloud annotator / labeling.
  - [Paper :newspaper:](https://arxiv.org/pdf/1905.00525.pdf)
  - [YouTube video :red_circle:](https://www.youtube.com/watch?v=gSGG4Lw8BSU)
- [Photogrammetry importer :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/SBCV/Blender-Addon-Photogrammetry-Importer) ![GitHub last commit](https://img.shields.io/github/last-commit/SBCV/Blender-Addon-Photogrammetry-Importer)](https://github.com/SBCV/Blender-Addon-Photogrammetry-Importer) - Blender addon to import reconstruction results of several libraries.
- [Foxglove](https://foxglove.dev/) - Foxglove Studio is an integrated visualization and diagnosis tool for robotics, available in your browser or for download as a desktop app on Linux, Windows, and macOS.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/foxglove/studio) ![GitHub last commit](https://img.shields.io/github/last-commit/foxglove/studio)](https://github.com/foxglove/studio)
  - [YouTube channel :red_circle:](https://www.youtube.com/channel/UCrIbrBxb9HBAnlhbx2QycsA)
- [MeshLab](https://www.meshlab.net/) - MeshLab is an open source, portable, and extensible system for the processing and editing 3D triangular meshes and pointcloud.
  - [GitHub repository :octocat: ![GitHub Repo Stars](https://img.shields.io/github/stars/cnr-isti-vclab/meshlab) ![GitHub last commit](https://img.shields.io/github/last-commit/cnr-isti-vclab/meshlab)](https://github.com/cnr-isti-vclab/meshlab) 
