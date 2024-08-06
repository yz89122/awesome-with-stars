# Awesome Robot Operating System 2 (ROS 2) [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="https://raw.githubusercontent.com/fkromer/awesome-ros2/master/ros_logo.svg?sanitize=true" align="right" width="86"> ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/ros2) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/ros2)](https://github.com/ros2/ros2/wiki)

> A curated list of awesome Robot Operating System Version 2.0 (ROS 2) resources and libraries.

The Robot Operating System 2 (ROS 2) is a set of software libraries and tools that help you build robot applications. From drivers to state-of-the-art algorithms, and with powerful developer tools, ROS 2 has what you need for your next robotics project. And it’s all open source.

DEPRECATION NOTICE: This repository is in the process of beeing handed over to [Open Robotics](https://www.openrobotics.org).
Feel free to checkout the GitHub [ROS2 organization](https://github.com/ros2) to find the repo there in the future.

## Contents

- [Packages](#packages)
- [Forks](#forks)
- [Operating systems](#operating-systems)
- [Packaging](#packaging)
- [Documentation](#documentation)
- [Community](#community)
- [Books](#books)
- [Courses](#courses)
- [Presentations](#presentations)
- [Papers](#papers)
- [Podcasts](#podcasts)
- [Services](#services)
- [Companies](#companies)
- [Organizations](#organizations)
- [Working groups](#working-groups)

## Packages

### Data collection
- [ros2_data_collection ![GitHub Repo Stars](https://img.shields.io/github/stars/Minipada/ros2_data_collection) ![GitHub last commit](https://img.shields.io/github/last-commit/Minipada/ros2_data_collection)](https://github.com/Minipada/ros2_data_collection) - Collect, validate and send data reliably from ROS 2 to create APIs and dashboards. ![ros2_data_collection](https://img.shields.io/github/stars/minipada/ros2_data_collection.svg)

### Demonstrations

- [adlink_ddsbot ![GitHub Repo Stars](https://img.shields.io/github/stars/Adlink-ROS/adlink_ddsbot) ![GitHub last commit](https://img.shields.io/github/last-commit/Adlink-ROS/adlink_ddsbot)](https://github.com/Adlink-ROS/adlink_ddsbot) - The ROS 2.0/1.0 based robots swarm architecture (opensplice DDS). ![adlink_ddsbot](https://img.shields.io/github/stars/Adlink-ROS/adlink_ddsbot.svg)
- [adlink_neuronbot ![GitHub Repo Stars](https://img.shields.io/github/stars/Adlink-ROS/adlink_neuronbot) ![GitHub last commit](https://img.shields.io/github/last-commit/Adlink-ROS/adlink_neuronbot)](https://github.com/Adlink-ROS/adlink_neuronbot) - ROS2/DDS robot pkg for human following and swarm. ![adlink_neuronbot](https://img.shields.io/github/stars/Adlink-ROS/adlink_neuronbot.svg)
- [turtlebot3 ![GitHub Repo Stars](https://img.shields.io/github/stars/ROBOTIS-GIT/turtlebot3) ![GitHub last commit](https://img.shields.io/github/last-commit/ROBOTIS-GIT/turtlebot3)](https://github.com/ROBOTIS-GIT/turtlebot3/tree/ros2) - ROS2 based TurtleBot3 demo including Bringup, Teleop and Cartographer. ![turtlebot3](https://img.shields.io/github/stars/ROBOTIS-GIT/turtlebot3.svg)

### Examples

- [turtlebot2_demo ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/turtlebot2_demo) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/turtlebot2_demo)](https://github.com/ros2/turtlebot2_demo) - TurtleBot 2 demos using ROS 2. ![turtlebot2_demo](https://img.shields.io/github/stars/ros2/turtlebot2_demo.svg)
- [examples/rclcpp ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/examples) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/examples)](https://github.com/ros2/examples/tree/master/rclcpp) - C++ examples. ![ros2/examples](https://img.shields.io/github/stars/ros2/examples.svg)
- [examples/rclpy ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/examples) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/examples)](https://github.com/ros2/examples/tree/master/rclpy) - Python examples. ![ros2/examples](https://img.shields.io/github/stars/ros2/examples.svg)
- [rcljava_examples ![GitHub Repo Stars](https://img.shields.io/github/stars/esteve/ros2_java_examples) ![GitHub last commit](https://img.shields.io/github/last-commit/esteve/ros2_java_examples)](https://github.com/esteve/ros2_java_examples/tree/master/rcljava_examples) - Package containing examples of how to use the rcljava API. ![ros2_java_examples](https://img.shields.io/github/stars/esteve/ros2_java_examples.svg)
- [ros2_talker_android, ros2_listener_android ![GitHub Repo Stars](https://img.shields.io/github/stars/esteve/ros2_android_examples) ![GitHub last commit](https://img.shields.io/github/last-commit/esteve/ros2_android_examples)](https://github.com/esteve/ros2_android_examples) - Example Android apps for the ROS2 Java bindings. ![ros2_android_examples](https://img.shields.io/github/stars/esteve/ros2_android_examples.svg)  
- [zed-ros2-examples ![GitHub Repo Stars](https://img.shields.io/github/stars/stereolabs/zed-ros2-examples) ![GitHub last commit](https://img.shields.io/github/last-commit/stereolabs/zed-ros2-examples)](https://github.com/stereolabs/zed-ros2-examples) - Examples and tutorials use the ZED cameras in the ROS2. ![zed_ros2_example](https://img.shields.io/github/stars/stereolabs/zed-ros2-examples.svg)  
- [realsense-ros:ros2-branch ![GitHub Repo Stars](https://img.shields.io/github/stars/IntelRealSense/realsense-ros) ![GitHub last commit](https://img.shields.io/github/last-commit/IntelRealSense/realsense-ros)](https://github.com/IntelRealSense/realsense-ros/tree/ros2) - ROS2 Wrapper for Intel® RealSense™ Devices ![realsense-ros](https://img.shields.io/github/stars/IntelRealSense/realsense-ros.svg)  

### Benchmarking

- [ros2_benchmarking ![GitHub Repo Stars](https://img.shields.io/github/stars/piappl/ros2_benchmarking) ![GitHub last commit](https://img.shields.io/github/last-commit/piappl/ros2_benchmarking)](https://github.com/piappl/ros2_benchmarking) - Framework for ROS2 benchmarking. ROS2 communication characteristics can be evaluated on several axes, quickly and in an automated way. ![ros2_benchmarking](https://img.shields.io/github/stars/piappl/ros2_benchmarking.svg)
- [performance_test ![GitHub Repo Stars](https://img.shields.io/github/stars/ApexAI/performance_test) ![GitHub last commit](https://img.shields.io/github/last-commit/ApexAI/performance_test)](https://github.com/ApexAI/performance_test) - Test performance and latency of various communication means like ROS 2, FastRTPS and Connext DDS Micro. ![performance_test](https://img.shields.io/github/stars/ApexAI/performance_test.svg)

### Containerization

- [docker-ros2-ospl-ce ![GitHub Repo Stars](https://img.shields.io/github/stars/Adlink-ROS/docker-ros2-ospl-ce) ![GitHub last commit](https://img.shields.io/github/last-commit/Adlink-ROS/docker-ros2-ospl-ce)](https://github.com/Adlink-ROS/docker-ros2-ospl-ce) - A dockerfile to build a ROS2 + OpenSplice CE container. ![docker-ros2-ospl-ce](https://img.shields.io/github/stars/Adlink-ROS/docker-ros2-ospl-ce.svg)
- [ros2_java_docker ![GitHub Repo Stars](https://img.shields.io/github/stars/esteve/ros2_java_docker) ![GitHub last commit](https://img.shields.io/github/last-commit/esteve/ros2_java_docker)](https://github.com/esteve/ros2_java_docker) - Dockerfiles for building ros2_java with OpenJDK and Android. ![ros2_java_docker](https://img.shields.io/github/stars/esteve/ros2_java_docker.svg)
- [micro-ROS/docker ![GitHub Repo Stars](https://img.shields.io/github/stars/micro-ROS/docker) ![GitHub last commit](https://img.shields.io/github/last-commit/micro-ROS/docker)](https://github.com/micro-ROS/docker) - Docker-related material to setup, configure and develop with micro-ROS hardware.
- [ros-tooling/cross_compile ![GitHub Repo Stars](https://img.shields.io/github/stars/ros-tooling/cross_compile) ![GitHub last commit](https://img.shields.io/github/last-commit/ros-tooling/cross_compile)](https://github.com/ros-tooling/cross_compile) - Cross compile ROS and ROS 2 workspaces to non-native architectures and generate corresponding Docker images.
- [ros2-docker](https://husarnet.com/blog/ros2-docker) - Connecting ROS 2 nodes running in Docker containers over the internet.
- [osrf/docker_images ![GitHub Repo Stars](https://img.shields.io/github/stars/osrf/docker_images) ![GitHub last commit](https://img.shields.io/github/last-commit/osrf/docker_images)](https://github.com/osrf/docker_images) - Dockerfiles of [Official Library on Docker Hub](https://hub.docker.com/_/ros) and [OSRF Organization on Docker Hub](https://hub.docker.com/r/osrf/ros). ![osrf/ros](https://img.shields.io/github/stars/osrf/docker_images.svg)
- [docker-ros2-desktop-vnc ![GitHub Repo Stars](https://img.shields.io/github/stars/Tiryoh/docker-ros2-desktop-vnc) ![GitHub last commit](https://img.shields.io/github/last-commit/Tiryoh/docker-ros2-desktop-vnc)](https://github.com/Tiryoh/docker-ros2-desktop-vnc) - Dockerfiles to provide HTML5 VNC interface to access Ubuntu LXDE + ROS2. ![docker-ros2-desktop-vnc](https://img.shields.io/github/stars/Tiryoh/docker-ros2-desktop-vnc.svg)
- [ros2-lxd](https://ubuntu.com/blog/install-ros-2-humble-in-ubuntu-20-04-or-18-04-using-lxd-containers) - Install ROS 2 Humble in Ubuntu 20.04 or 18.04 using LXD containers.

### Networking

- [Husarnet VPN ![GitHub Repo Stars](https://img.shields.io/github/stars/husarnet/husarnet) ![GitHub last commit](https://img.shields.io/github/last-commit/husarnet/husarnet)](https://github.com/husarnet/husarnet) - A P2P, secure network layer dedicated for ROS & ROS 2. ![husarnet](https://img.shields.io/github/stars/husarnet/husarnet.svg)

### Ecosystem

- [Link ROS](https://www.freedomrobotics.ai/blog/link-ros-cloud-logging-for-ros) - Cloud Logging for ROS 1 and ROS 2.
- [rosbag2 ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rosbag2) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rosbag2)](https://github.com/ros2/rosbag2) - ROS2 native rosbag. ![rosbag2](https://img.shields.io/github/stars/ros2/rosbag2.svg)
- [rviz ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rviz) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rviz)](https://github.com/ros2/rviz) - 3D Robot Visualizer. ![rviz](https://img.shields.io/github/stars/ros2/rviz.svg)
- [urdfdom ![GitHub Repo Stars](https://img.shields.io/github/stars/ros/urdfdom) ![GitHub last commit](https://img.shields.io/github/last-commit/ros/urdfdom)](https://github.com/ros/urdfdom) - URDF (U-Robot Description Format) library which provides core data structures and a simple XML parser ![urdfdom](https://img.shields.io/github/stars/ros/urdfdom.svg)
- [urdfdom_headers ![GitHub Repo Stars](https://img.shields.io/github/stars/ros/urdfdom_headers) ![GitHub last commit](https://img.shields.io/github/last-commit/ros/urdfdom_headers)](https://github.com/ros/urdfdom_headers) - Headers for URDF parsers. ![urdfdom_headers](https://img.shields.io/github/stars/ros/urdfdom_headers.svg)
- [ros2cli ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/ros2cli) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/ros2cli)](https://github.com/ros2/ros2cli) - ROS 2 command line tools. ![ros2cli](https://img.shields.io/github/stars/ros2/ros2cli.svg)
- [orocos_kinematics_dynamics ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/orocos_kinematics_dynamics) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/orocos_kinematics_dynamics)](https://github.com/ros2/orocos_kinematics_dynamics) - Orocos Kinematics and Dynamics C++ library. ![orocos_kinematics_dynamics](https://img.shields.io/github/stars/ros2/orocos_kinematics_dynamics.svg)
- [pydds ![GitHub Repo Stars](https://img.shields.io/github/stars/atolab/pydds) ![GitHub last commit](https://img.shields.io/github/last-commit/atolab/pydds)](https://github.com/atolab/pydds) - Simple DDS Python API for Vortex Lite and for OpenSplice. ![pydds](https://img.shields.io/github/stars/atolab/pydds.svg)
- [Webots](https://cyberbotics.com) - Robot simulator for ROS 2. ![webots](https://img.shields.io/github/stars/cyberbotics/webots.svg)
- [LGSVL](https://www.lgsvlsimulator.com/) - Simulation software to accelerate safe autonomous vehicle development.
- [Unity Robotics Hub ![GitHub Repo Stars](https://img.shields.io/github/stars/Unity-Technologies/Unity-Robotics-Hub) ![GitHub last commit](https://img.shields.io/github/last-commit/Unity-Technologies/Unity-Robotics-Hub)](https://github.com/Unity-Technologies/Unity-Robotics-Hub) - This is a central repository for tools, tutorials, resources, and documentation for robotic simulation in Unity.
- [Foxglove Studio ![GitHub Repo Stars](https://img.shields.io/github/stars/foxglove/studio) ![GitHub last commit](https://img.shields.io/github/last-commit/foxglove/studio)](https://github.com/foxglove/studio) - Integrated visualization and diagnosis tool for robotics. ![foxglove studio](https://img.shields.io/github/stars/foxglove/studio.svg)
- [ROS2 For Unity ![GitHub Repo Stars](https://img.shields.io/github/stars/RobotecAI/ros2-for-unity) ![GitHub last commit](https://img.shields.io/github/last-commit/RobotecAI/ros2-for-unity)](https://github.com/RobotecAI/ros2-for-unity) - An asset package which enables high-performance communication between Unity3D simulations and ROS2 ecosystem. ![ros2-for-unity](https://img.shields.io/github/stars/RobotecAI/ros2-for-unity.svg)

### Interactivity

- [Jupyter ROS2 ![GitHub Repo Stars](https://img.shields.io/github/stars/zmk5/jupyter-ros2) ![GitHub last commit](https://img.shields.io/github/last-commit/zmk5/jupyter-ros2)](https://github.com/zmk5/jupyter-ros2) - Jupyter widget helpers for ROS2.

### Penetration testing

- [aztarna ![GitHub Repo Stars](https://img.shields.io/github/stars/aliasrobotics/aztarna) ![GitHub last commit](https://img.shields.io/github/last-commit/aliasrobotics/aztarna)](https://github.com/aliasrobotics/aztarna) - A footprinting tool for robots.
- [ros2_fuzzer ![GitHub Repo Stars](https://img.shields.io/github/stars/aliasrobotics/ros2_fuzzer) ![GitHub last commit](https://img.shields.io/github/last-commit/aliasrobotics/ros2_fuzzer)](https://github.com/aliasrobotics/ros2_fuzzer) - ROS2 Topic & Service Fuzzer.

### Application layer

- [Apex.Autonomy](https://www.apex.ai/apex-autonomy) - Apex.Autonomy provides autonomy algorithms as individual building blocks and is compatible with Autoware.Auto.
- [Autoware.Auto](https://www.autoware.auto/) - Autoware.Auto provides an open-source software stack based on ROS 2 for self-driving technology.
- [ros2_control ![GitHub Repo Stars](https://img.shields.io/github/stars/ros-controls/ros2_control) ![GitHub last commit](https://img.shields.io/github/last-commit/ros-controls/ros2_control)](https://github.com/ros-controls/ros2_control) - `ros2_control` is a proof of concept on how new features within ROS 2 can be elaborated and used in the context of robot control (`ros2_controllers`). ![ros2_control](https://img.shields.io/github/stars/ros-controls/ros2_control.svg)
- [ros2_controllers ![GitHub Repo Stars](https://img.shields.io/github/stars/ros-controls/ros2_controllers) ![GitHub last commit](https://img.shields.io/github/last-commit/ros-controls/ros2_controllers)](https://github.com/ros-controls/ros2_controllers) - Description of ros_controllers. ![ros2_controllers](https://img.shields.io/github/stars/ros-controls/ros2_controllers.svg)
- [geometry2 ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/geometry2) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/geometry2)](https://github.com/ros2/geometry2) - A set of ROS packages for keeping track of coordinate transforms. ![geometry2](https://img.shields.io/github/stars/ros2/geometry2.svg)
- [ros2-ORB_SLAM2 ![GitHub Repo Stars](https://img.shields.io/github/stars/alsora/ros2-ORB_SLAM2) ![GitHub last commit](https://img.shields.io/github/last-commit/alsora/ros2-ORB_SLAM2)](https://github.com/alsora/ros2-ORB_SLAM2) - ROS2 node wrapping the ORB_SLAM2 library. ![ros2-ORB_SLAM2](https://img.shields.io/github/stars/alsora/ros2-ORB_SLAM2.svg)
- [basalt_ros2 ![GitHub Repo Stars](https://img.shields.io/github/stars/berndpfrommer/basalt_ros2) ![GitHub last commit](https://img.shields.io/github/last-commit/berndpfrommer/basalt_ros2)](https://github.com/berndpfrommer/basalt_ros2) - ROS2 wrapper for Basalt VIO. ![basalt_ros2](https://img.shields.io/github/stars/berndpfrommer/basalt_ros2.svg)
- [cartographer ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/cartographer) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/cartographer)](https://github.com/ros2/cartographer) - Real-time simultaneous localization and mapping (SLAM) in 2D and 3D across multiple platforms and sensor configurations. ![cartographer](https://img.shields.io/github/stars/ros2/cartographer.svg)
- [slam_gmapping ![GitHub Repo Stars](https://img.shields.io/github/stars/Project-MANAS/slam_gmapping) ![GitHub last commit](https://img.shields.io/github/last-commit/Project-MANAS/slam_gmapping)](https://github.com/Project-MANAS/slam_gmapping) - Slam Gmapping for ROS2. ![slam_gmapping](https://img.shields.io/github/stars/Project-MANAS/slam_gmapping.svg)
- [slam_toolbox ![GitHub Repo Stars](https://img.shields.io/github/stars/SteveMacenski/slam_toolbox) ![GitHub last commit](https://img.shields.io/github/last-commit/SteveMacenski/slam_toolbox)](https://github.com/SteveMacenski/slam_toolbox) - Slam Toolbox for lifelong mapping and localization in potentially massive maps with ROS. ![slam_toolbox](https://img.shields.io/github/stars/SteveMacenski/slam_toolbox.svg)
- [lidarslam_ros2 ![GitHub Repo Stars](https://img.shields.io/github/stars/rsasaki0109/lidarslam_ros2) ![GitHub last commit](https://img.shields.io/github/last-commit/rsasaki0109/lidarslam_ros2)](https://github.com/rsasaki0109/lidarslam_ros2) - ROS2 package of 3D lidar slam using ndt/gicp registration and pose-optimization. ![lidarslam_ros2](https://img.shields.io/github/stars/rsasaki0109/lidarslam_ros2.svg)
- [li_slam_ros2 ![GitHub Repo Stars](https://img.shields.io/github/stars/rsasaki0109/li_slam_ros2) ![GitHub last commit](https://img.shields.io/github/last-commit/rsasaki0109/li_slam_ros2)](https://github.com/rsasaki0109/li_slam_ros2) - ROS2 package of tightly-coupled lidar inertial ndt/gicp slam referenced from LIO-SAM. ![li_slam_ros2](https://img.shields.io/github/stars/rsasaki0109/li_slam_ros2.svg)
- [octomap_server2 ![GitHub Repo Stars](https://img.shields.io/github/stars/iKrishneel/octomap_server2) ![GitHub last commit](https://img.shields.io/github/last-commit/iKrishneel/octomap_server2)](https://github.com/iKrishneel/octomap_server2) - ROS2 stack for mapping with OctoMap. Port of the ROS1 [octomap_mapping ![GitHub Repo Stars](https://img.shields.io/github/stars/OctoMap/octomap_mapping) ![GitHub last commit](https://img.shields.io/github/last-commit/OctoMap/octomap_mapping)](https://github.com/OctoMap/octomap_mapping) package. ![octomap_server2](https://img.shields.io/github/stars/iKrishneel/octomap_server2.svg)
- [vision_opencv ![GitHub Repo Stars](https://img.shields.io/github/stars/ros-perception/vision_opencv) ![GitHub last commit](https://img.shields.io/github/last-commit/ros-perception/vision_opencv)](https://github.com/ros-perception/vision_opencv/tree/ros2) - Packages for interfacing ROS2 with OpenCV. ![vision_opencv](https://img.shields.io/github/stars/ros-perception/vision_opencv.svg)
- [teleop_twist_keyboard ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/teleop_twist_keyboard) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/teleop_twist_keyboard)](https://github.com/ros2/teleop_twist_keyboard) - Generic Keyboard Teleop for ROS2. ![teleop_twist_keyboard](https://img.shields.io/github/stars/ros2/teleop_twist_keyboard.svg)
- [teleop_twist_joy ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/teleop_twist_joy) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/teleop_twist_joy)](https://github.com/ros2/teleop_twist_joy) - Simple joystick teleop for twist robots. ![teleop_twist_joy](https://img.shields.io/github/stars/ros2/teleop_twist_joy.svg)
- [navigation ![GitHub Repo Stars](https://img.shields.io/github/stars/ros-planning/navigation2) ![GitHub last commit](https://img.shields.io/github/last-commit/ros-planning/navigation2)](https://github.com/ros-planning/navigation2/) - ROS2 Navigation stack. ![navigation](https://img.shields.io/github/stars/ros-planning/navigation2.svg)
- [diagnostics ![GitHub Repo Stars](https://img.shields.io/github/stars/bponsler/diagnostics) ![GitHub last commit](https://img.shields.io/github/last-commit/bponsler/diagnostics)](https://github.com/bponsler/diagnostics/tree/ros2-devel) - Forked version of the original ROS1 Diagnostics for ROS 2 (currently diagnostics_updater only). ![diagnostics](https://img.shields.io/github/stars/bponsler/diagnostics.svg)
- [robot_state_publisher ![GitHub Repo Stars](https://img.shields.io/github/stars/bponsler/robot_state_publisher) ![GitHub last commit](https://img.shields.io/github/last-commit/bponsler/robot_state_publisher)](https://github.com/bponsler/robot_state_publisher/tree/publish-robot-model) - Forked version of the original ROS Robot State Publisher with all modifications to compile within a ROS2 Ecosystem. ![robot_state_publisher](https://img.shields.io/github/stars/bponsler/robot_state_publisher.svg)
- [common_interfaces ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/common_interfaces) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/common_interfaces)](https://github.com/ros2/common_interfaces) - A set of packages which contain common interface files (.msg and .srv). ![common_interfaces](https://img.shields.io/github/stars/ros2/common_interfaces.svg)
- [ros2_object_map ![GitHub Repo Stars](https://img.shields.io/github/stars/intel/ros2_object_map) ![GitHub last commit](https://img.shields.io/github/last-commit/intel/ros2_object_map)](https://github.com/intel/ros2_object_map) - "Mark tag of objects on map when SLAM". ![ros2_object_map](https://img.shields.io/github/stars/intel/ros2_object_map.svg)
- [ros2_object_analytics ![GitHub Repo Stars](https://img.shields.io/github/stars/intel/ros2_object_analytics) ![GitHub last commit](https://img.shields.io/github/last-commit/intel/ros2_object_analytics)](https://github.com/intel/ros2_object_analytics) - Object Analytics (OA) is ROS2 wrapper for realtime object detection, localization and tracking. ![ros2_object_analytics](https://img.shields.io/github/stars/intel/ros2_object_analytics.svg)
- [ros2_intel_movidius_ncs ![GitHub Repo Stars](https://img.shields.io/github/stars/intel/ros2_intel_movidius_ncs) ![GitHub last commit](https://img.shields.io/github/last-commit/intel/ros2_intel_movidius_ncs)](https://github.com/intel/ros2_intel_movidius_ncs) - ROS2 wrapper for Movidius™ Neural Compute Stick (NCS) Neuronal Compute API. ![ros2_intel_movidius_ncs](https://img.shields.io/github/stars/intel/ros2_intel_movidius_ncs.svg)
- [ros2_moving_object ![GitHub Repo Stars](https://img.shields.io/github/stars/intel/ros2_moving_object) ![GitHub last commit](https://img.shields.io/github/last-commit/intel/ros2_moving_object)](https://github.com/intel/ros2_moving_object) - Addressing moving objects based on messages generated by Object Analytics `ros2_object_analytics`. ![ros2_moving_object](https://img.shields.io/github/stars/intel/ros2_moving_object.svg)
- [ros2_openvino_toolkit ![GitHub Repo Stars](https://img.shields.io/github/stars/intel/ros2_openvino_toolkit) ![GitHub last commit](https://img.shields.io/github/last-commit/intel/ros2_openvino_toolkit)](https://github.com/intel/ros2_openvino_toolkit) - ROS2 wrapper for CV API of OpenVINO™ (human vision emulation). ![ros2_openvino_toolkit](https://img.shields.io/github/stars/intel/ros2_openvino_toolkit.svg)
- [ros2_grasp_library ![GitHub Repo Stars](https://img.shields.io/github/stars/intel/ros2_grasp_library) ![GitHub last commit](https://img.shields.io/github/last-commit/intel/ros2_grasp_library)](https://github.com/intel/ros2_grasp_library) - Probably a grasp library :). ![ros2_grasp_library](https://img.shields.io/github/stars/intel/ros2_grasp_library.svg)
- [apriltag_ros ![GitHub Repo Stars](https://img.shields.io/github/stars/christianrauch/apriltag_ros) ![GitHub last commit](https://img.shields.io/github/last-commit/christianrauch/apriltag_ros)](https://github.com/christianrauch/apriltag_ros) - ROS2 node for AprilTag detection. ![apriltag_ros](https://img.shields.io/github/stars/christianrauch/apriltag_ros.svg)
- [rosbridge_suite ![GitHub Repo Stars](https://img.shields.io/github/stars/RobotWebTools/rosbridge_suite) ![GitHub last commit](https://img.shields.io/github/last-commit/RobotWebTools/rosbridge_suite)](https://github.com/RobotWebTools/rosbridge_suite) - Bridging your browser to the ROS 2.0. ![rosbridge_suite](https://img.shields.io/github/stars/RobotWebTools/rosbridge_suite.svg)
- [ros2_message_filters ![GitHub Repo Stars](https://img.shields.io/github/stars/intel/ros2_message_filters) ![GitHub last commit](https://img.shields.io/github/last-commit/intel/ros2_message_filters)](https://github.com/intel/ros2_message_filters) - ros2_message_filters blends various messages based on the conditions that filter needs to met and derives from ROS2 porting of ROS message_filters. ![ros2_message_filters](https://img.shields.io/github/stars/intel/ros2_message_filters.svg)
- [ros2-tensorflow ![GitHub Repo Stars](https://img.shields.io/github/stars/alsora/ros2-tensorflow) ![GitHub last commit](https://img.shields.io/github/last-commit/alsora/ros2-tensorflow)](https://github.com/alsora/ros2-tensorflow) - ROS2 nodes for computer vision tasks in Tensorflow. ![ros2-tensorflow](https://img.shields.io/github/stars/alsora/ros2-tensorflow.svg)
- [ros2_pytorch ![GitHub Repo Stars](https://img.shields.io/github/stars/klintan/ros2_pytorch) ![GitHub last commit](https://img.shields.io/github/last-commit/klintan/ros2_pytorch)](https://github.com/klintan/ros2_pytorch) - ROS2 nodes for computer vision tasks in PyTorch ![ros2_pytorch](https://img.shields.io/github/stars/klintan/ros2_pytorch.svg).
- [ros2_pytorch_cuda ![GitHub Repo Stars](https://img.shields.io/github/stars/slabban/ros2_pytorch_cuda) ![GitHub last commit](https://img.shields.io/github/last-commit/slabban/ros2_pytorch_cuda)](https://github.com/slabban/ros2_pytorch_cuda) - Extension of [ros2_pytorch ![GitHub Repo Stars](https://img.shields.io/github/stars/klintan/ros2_pytorch) ![GitHub last commit](https://img.shields.io/github/last-commit/klintan/ros2_pytorch)](https://github.com/klintan/ros2_pytorch) for CUDA devices with containerization.
- [pid ![GitHub Repo Stars](https://img.shields.io/github/stars/UTNuclearRoboticsPublic/pid) ![GitHub last commit](https://img.shields.io/github/last-commit/UTNuclearRoboticsPublic/pid)](https://github.com/UTNuclearRoboticsPublic/pid) - A PID controller for ROS2. ![pid](https://img.shields.io/github/stars/UTNuclearRoboticsPublic/pid.svg)
- [system-modes ![GitHub Repo Stars](https://img.shields.io/github/stars/micro-ROS/system_modes) ![GitHub last commit](https://img.shields.io/github/last-commit/micro-ROS/system_modes)](https://github.com/micro-ROS/system_modes) - System modes for ROS 2 and micro-ROS.
- [darknet_ros ![GitHub Repo Stars](https://img.shields.io/github/stars/leggedrobotics/darknet_ros) ![GitHub last commit](https://img.shields.io/github/last-commit/leggedrobotics/darknet_ros)](https://github.com/leggedrobotics/darknet_ros/tree/ros2) - ROS2 wrapper for deploying Darknet's YOLO Computer Vision model.
- [easy_perception_deployment ![GitHub Repo Stars](https://img.shields.io/github/stars/ros-industrial/easy_perception_deployment) ![GitHub last commit](https://img.shields.io/github/last-commit/ros-industrial/easy_perception_deployment)](https://github.com/ros-industrial/easy_perception_deployment) - Package that accelerates training and deployment of Computer Vision models for industries. ![easy_perception_deployment](https://img.shields.io/github/stars/ros-industrial/easy_perception_deployment.svg)
- [easy_manipulation_deployment ![GitHub Repo Stars](https://img.shields.io/github/stars/ros-industrial/easy_manipulation_deployment) ![GitHub last commit](https://img.shields.io/github/last-commit/ros-industrial/easy_manipulation_deployment)](https://github.com/ros-industrial/easy_manipulation_deployment) - Package that integrates perception elements to establish an end-to-end pick and place task. ![easy_manipulation_deployment](https://img.shields.io/github/stars/ros-industrial/easy_manipulation_deployment.svg)
- [ros2_pid_library ![GitHub Repo Stars](https://img.shields.io/github/stars/dottantgal/ros2_pid_library) ![GitHub last commit](https://img.shields.io/github/last-commit/dottantgal/ros2_pid_library)](https://github.com/dottantgal/ros2_pid_library) - A ROS2 Humble fully configurable PID library ![ros2_pid_library](https://img.shields.io/github/stars/dottantgal/ros2_pid_library.svg)
- [wayp_plan_tools ![GitHub Repo Stars](https://img.shields.io/github/stars/jkk-research/wayp_plan_tools) ![GitHub last commit](https://img.shields.io/github/last-commit/jkk-research/wayp_plan_tools)](https://github.com/jkk-research/wayp_plan_tools) - Waypoint and planner tools for ROS 2 with minimal dependencies and an optional Gazebo Fortress simulation. ![wayp_plan_tools](https://img.shields.io/github/stars/jkk-research/wayp_plan_tools.svg)

### Middleware

- [Micro XRCE-DDS Agent ![GitHub Repo Stars](https://img.shields.io/github/stars/eProsima/Micro-XRCE-DDS-Agent) ![GitHub last commit](https://img.shields.io/github/last-commit/eProsima/Micro-XRCE-DDS-Agent)](https://github.com/eProsima/Micro-XRCE-DDS-Agent) - Micro XRCE-DDS Agent acts as a server between DDS Network and Micro XRCE-DDS Clients.
- [Micro XRCE-DDS Agent docker](https://hub.docker.com/r/eprosima/micro-xrce-dds-agent/) - Docker image containing the Micro XRCE-DDS Agent.
- [Micro XRCE-DDS Client ![GitHub Repo Stars](https://img.shields.io/github/stars/eProsima/Micro-XRCE-DDS-Client) ![GitHub last commit](https://img.shields.io/github/last-commit/eProsima/Micro-XRCE-DDS-Client)](https://github.com/eProsima/Micro-XRCE-DDS-Client) - Micro XRCE-DDS implements a client-server protocol to enable resource-constrained devices (clients) to take part in DDS communications.
- [micro-ROS-Agent ![GitHub Repo Stars](https://img.shields.io/github/stars/micro-ROS/micro-ROS-Agent) ![GitHub last commit](https://img.shields.io/github/last-commit/micro-ROS/micro-ROS-Agent)](https://github.com/micro-ROS/micro-ROS-Agent) - ROS 2 package using Micro XRCE-DDS Agent.
- [Eclipse Zenoh ![GitHub Repo Stars](https://img.shields.io/github/stars/eclipse-zenoh/zenoh) ![GitHub last commit](https://img.shields.io/github/last-commit/eclipse-zenoh/zenoh)](https://github.com/eclipse-zenoh/zenoh) - [Zenoh](https://zenoh.io) is a scalable and extremely performant protocol that can be used transparently used to interact with [ROS2 applications](https://zenoh.io/blog/2021-04-28-ros2-integration/) as well as for [R2X communication](https://zenoh.io/blog/2021-03-23-discovery/). (https://img.shields.io/github/stars/eclipse-zenoh/zenoh)
- [Eclipse Zenoh-Plugin-DDS ![GitHub Repo Stars](https://img.shields.io/github/stars/eclipse-zenoh/zenoh-plugin-dds) ![GitHub last commit](https://img.shields.io/github/last-commit/eclipse-zenoh/zenoh-plugin-dds)](https://github.com/eclipse-zenoh/zenoh-plugin-dds) - This is a [zenoh](https://zenoh.io) plugin that allows to transparently route ROS2/DDS data over zenoh. This is commonly used for [R2X communication](https://zenoh.io/blog/2021-03-23-discovery/) over Wireless network or across the Internet. (https://img.shields.io/github/stars/eclipse-zenoh/zenoh-plugin-dds)

### "System" bindings

- [rclandroid ![GitHub Repo Stars](https://img.shields.io/github/stars/esteve/ros2_android) ![GitHub last commit](https://img.shields.io/github/last-commit/esteve/ros2_android)](https://github.com/esteve/ros2_android/tree/master/rclandroid) - Android API for ROS2. ![rclandroid](https://img.shields.io/github/stars/esteve/ros2_android.svg)
- [rclnodejs ![GitHub Repo Stars](https://img.shields.io/github/stars/RobotWebTools/rclnodejs) ![GitHub last commit](https://img.shields.io/github/last-commit/RobotWebTools/rclnodejs)](https://github.com/RobotWebTools/rclnodejs) - Node.js version of ROS2.0 client. ![rclnodejs](https://img.shields.io/github/stars/RobotWebTools/rclnodejs.svg)
- [riot-ros2 ![GitHub Repo Stars](https://img.shields.io/github/stars/astralien3000/riot-ros2) ![GitHub last commit](https://img.shields.io/github/last-commit/astralien3000/riot-ros2)](https://github.com/astralien3000/riot-ros2) - This project enables ROS2 to run on microcontrollers using the RIOT Operating System. ![riot-ros2](https://img.shields.io/github/stars/astralien3000/riot-ros2.svg)
- [ROS2-Integration-Service ![GitHub Repo Stars](https://img.shields.io/github/stars/eProsima/ROS2-Integration-Service) ![GitHub last commit](https://img.shields.io/github/last-commit/eProsima/ROS2-Integration-Service)](https://github.com/eProsima/ROS2-Integration-Service) - ROS2 Integration and Routing which provides a complete tool to integrate other technologies with ROS2 easily and enable ROS2 on WAN/Internet.
- [soss ![GitHub Repo Stars](https://img.shields.io/github/stars/osrf/soss) ![GitHub last commit](https://img.shields.io/github/last-commit/osrf/soss)](https://github.com/osrf/soss) - The System Of Systems Synthesizer is used to integrate ROS2 via ROS2-Integration-Service with other (communication) systems.
- [micro_ros_arduino ![GitHub Repo Stars](https://img.shields.io/github/stars/micro-ROS/micro_ros_arduino) ![GitHub last commit](https://img.shields.io/github/last-commit/micro-ROS/micro_ros_arduino)](https://github.com/micro-ROS/micro_ros_arduino) - Integration of micro-ROS into Arduino software platform projects.
- [micro_ros_zephyr_module ![GitHub Repo Stars](https://img.shields.io/github/stars/micro-ROS/micro_ros_zephyr_module) ![GitHub last commit](https://img.shields.io/github/last-commit/micro-ROS/micro_ros_zephyr_module)](https://github.com/micro-ROS/micro_ros_zephyr_module) - Integration of micro-ROS in Zeyphr OS based projects.

### Driver layer

- [Autoware.IO](https://www.autoware.io/) - Autoware.IO provides a heterogeneous hardware reference platform and enables the integration of member company's solutions onto platforms which support the Autoware.Auto and Autoware.AI software stack.
- [ros2_xmlrpc_interface ![GitHub Repo Stars](https://img.shields.io/github/stars/aarushsesto/ros2_xmlrpc_interface) ![GitHub last commit](https://img.shields.io/github/last-commit/aarushsesto/ros2_xmlrpc_interface)](https://github.com/aarushsesto/ros2_xmlrpc_interface) - ros2 interface package with xmlrpc, to communicate with a Sesto server using Sesto API. ![ros2_xmlrpc](https://img.shields.io/github/stars/aarushsesto/ros2_xmlrpc_interface.svg)
- [cozmo_driver_ros2 ![GitHub Repo Stars](https://img.shields.io/github/stars/FurqanHabibi/cozmo_driver_ros2) ![GitHub last commit](https://img.shields.io/github/last-commit/FurqanHabibi/cozmo_driver_ros2)](https://github.com/FurqanHabibi/cozmo_driver_ros2) - Unofficial Anki Cozmo node for ROS2. ![cozmo_driver_ros2](https://img.shields.io/github/stars/FurqanHabibi/cozmo_driver_ros2.svg)
- [sphero_ros2 ![GitHub Repo Stars](https://img.shields.io/github/stars/athackst/sphero_ros2) ![GitHub last commit](https://img.shields.io/github/last-commit/athackst/sphero_ros2)](https://github.com/athackst/sphero_ros2) - ROS2 sphero driver. ![sphero_ros2](https://img.shields.io/github/stars/athackst/sphero_ros2.svg)
- [flock2 ![GitHub Repo Stars](https://img.shields.io/github/stars/clydemcqueen/flock2) ![GitHub last commit](https://img.shields.io/github/last-commit/clydemcqueen/flock2)](https://github.com/clydemcqueen/flock2) - ROS2 driver for DJI Tello drones. ![flock2](https://img.shields.io/github/stars/clydemcqueen/flock2.svg)
- [ros2_raspicam_node ![GitHub Repo Stars](https://img.shields.io/github/stars/Misterblue/ros2_raspicam_node) ![GitHub last commit](https://img.shields.io/github/last-commit/Misterblue/ros2_raspicam_node)](https://github.com/Misterblue/ros2_raspicam_node) - ROS2 node for Raspberry Pi camera. ![ros2_raspicam_node](https://img.shields.io/github/stars/Misterblue/ros2_raspicam_node.svg)
- [joystick_drivers ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/joystick_drivers) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/joystick_drivers)](https://github.com/ros2/joystick_drivers) - ROS2 drivers for joysticks. ![joystick_drivers](https://img.shields.io/github/stars/ros2/joystick_drivers.svg)
- [joystick_drivers_from_scratch ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/joystick_drivers_from_scratch) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/joystick_drivers_from_scratch)](https://github.com/ros2/joystick_drivers_from_scratch) - Joystick driver packages for ROS 2. ![joystick_drivers_from_scratch](https://img.shields.io/github/stars/ros2/joystick_drivers_from_scratch.svg)
- [joystick_ros2 ![GitHub Repo Stars](https://img.shields.io/github/stars/FurqanHabibi/joystick_ros2) ![GitHub last commit](https://img.shields.io/github/last-commit/FurqanHabibi/joystick_ros2)](https://github.com/FurqanHabibi/joystick_ros2) - Joystick driver for ROS2, support all platforms: Linux, macOS, Windows. ![joystick_ros2](https://img.shields.io/github/stars/FurqanHabibi/joystick_ros2.svg)
- [ros2_teleop_keyboard ![GitHub Repo Stars](https://img.shields.io/github/stars/rohbotics/ros2_teleop_keyboard) ![GitHub last commit](https://img.shields.io/github/last-commit/rohbotics/ros2_teleop_keyboard)](https://github.com/rohbotics/ros2_teleop_keyboard) - Teleop Twist Keyboard for ROS2. ![ros2_teleop_keyboard](https://img.shields.io/github/stars/rohbotics/ros2_teleop_keyboard.svg)
- [ros_astra_camera ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/ros_astra_camera) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/ros_astra_camera)](https://github.com/ros2/ros_astra_camera) - ROS2 wrapper for Astra camera. ![ros_astra_camera](https://img.shields.io/github/stars/ros2/ros_astra_camera.svg)
- [ros2_usb_camera ![GitHub Repo Stars](https://img.shields.io/github/stars/klintan/ros2_usb_camera) ![GitHub last commit](https://img.shields.io/github/last-commit/klintan/ros2_usb_camera)](https://github.com/klintan/ros2_usb_camera) - ROS2 General USB camera driver. ![ros_astra_camera](https://img.shields.io/github/stars/klintan/ros2_usb_camera.svg)
- [ros2_android_drivers ![GitHub Repo Stars](https://img.shields.io/github/stars/esteve/ros2_android_drivers) ![GitHub last commit](https://img.shields.io/github/last-commit/esteve/ros2_android_drivers)](https://github.com/esteve/ros2_android_drivers) - Collection of ROS2 drivers for several Android sensors. ![ros2_android_drivers](https://img.shields.io/github/stars/esteve/ros2_android_drivers.svg)
- [ros2_intel_realsense ![GitHub Repo Stars](https://img.shields.io/github/stars/intel/ros2_intel_realsense) ![GitHub last commit](https://img.shields.io/github/last-commit/intel/ros2_intel_realsense)](https://github.com/intel/ros2_intel_realsense) - ROS2 Wrapper for Intel® RealSense™ Devices. ![ros2_intel_realsense](https://img.shields.io/github/stars/intel/ros2_intel_realsense.svg)
- [raspicam2_node ![GitHub Repo Stars](https://img.shields.io/github/stars/christianrauch/raspicam2_node) ![GitHub last commit](https://img.shields.io/github/last-commit/christianrauch/raspicam2_node)](https://github.com/christianrauch/raspicam2_node) - ROS2 node for camera module of Raspberry Pi. ![raspicam2_node](https://img.shields.io/github/stars/christianrauch/raspicam2_node.svg)
- [ros2_track_imu ![GitHub Repo Stars](https://img.shields.io/github/stars/klintan/ros2_track_imu) ![GitHub last commit](https://img.shields.io/github/last-commit/klintan/ros2_track_imu)](https://github.com/klintan/ros2_track_imu) - ROS2 node for TrackIMU IMU sensor![ros2_track_imu](https://img.shields.io/github/stars/klintan/ros2_track_imu.svg).
- [HRIM ![GitHub Repo Stars](https://img.shields.io/github/stars/AcutronicRobotics/HRIM) ![GitHub last commit](https://img.shields.io/github/last-commit/AcutronicRobotics/HRIM)](https://github.com/AcutronicRobotics/HRIM) - A standard interface for robot modules.
- [FIROS2 ![GitHub Repo Stars](https://img.shields.io/github/stars/eProsima/FIROS2) ![GitHub last commit](https://img.shields.io/github/last-commit/eProsima/FIROS2)](https://github.com/eProsima/FIROS2) - ROS2 integrable tool focused in the intercommunication between ROS2 and FIWARE. ![FIROS2](https://img.shields.io/github/stars/eProsima/FIROS2.svg)
- [lino2_upper ![GitHub Repo Stars](https://img.shields.io/github/stars/linorobot2/lino2_upper) ![GitHub last commit](https://img.shields.io/github/last-commit/linorobot2/lino2_upper)](https://github.com/linorobot2/lino2_upper) - Linorobot on ROS2. ![lino2_upper](https://img.shields.io/github/stars/linorobot2/lino2_upper.svg)
- [RysROS2 ![GitHub Repo Stars](https://img.shields.io/github/stars/GroupOfRobots/RysROS2) ![GitHub last commit](https://img.shields.io/github/last-commit/GroupOfRobots/RysROS2)](https://github.com/GroupOfRobots/RysROS2) - ROS2 software stack for MiniRys robots. ![RysROS2](https://img.shields.io/github/stars/GroupOfRobots/RysROS2.svg)
- [px4_to_ros ![GitHub Repo Stars](https://img.shields.io/github/stars/eProsima/px4_to_ros) ![GitHub last commit](https://img.shields.io/github/last-commit/eProsima/px4_to_ros)](https://github.com/eProsima/px4_to_ros) - ROS2/ROS packages for communicate PX4 with ROS. ![px4_to_ros](https://img.shields.io/github/stars/eProsima/px4_to_ros.svg)
- [multiwii_ros2 ![GitHub Repo Stars](https://img.shields.io/github/stars/christianrauch/multiwii_ros2) ![GitHub last commit](https://img.shields.io/github/last-commit/christianrauch/multiwii_ros2)](https://github.com/christianrauch/multiwii_ros2) - ROS2 Node for MultiWii and Cleanflight flight controllers. ![multiwii_ros2](https://img.shields.io/github/stars/christianrauch/multiwii_ros2.svg)
- [ydlidar_ros2 ![GitHub Repo Stars](https://img.shields.io/github/stars/Adlink-ROS/ydlidar_ros2) ![GitHub last commit](https://img.shields.io/github/last-commit/Adlink-ROS/ydlidar_ros2)](https://github.com/Adlink-ROS/ydlidar_ros2) - ROS2 wrapper for ydlidar. ![ydlidar_ros2](https://img.shields.io/github/stars/Adlink-ROS/ydlidar_ros2.svg)
- [zed-ros2-wrapper ![GitHub Repo Stars](https://img.shields.io/github/stars/stereolabs/zed-ros2-wrapper) ![GitHub last commit](https://img.shields.io/github/last-commit/stereolabs/zed-ros2-wrapper)](https://github.com/stereolabs/zed-ros2-wrapper) - ROS 2 wrapper beta for the ZED SDK.
- [ros2_denso_radar ![GitHub Repo Stars](https://img.shields.io/github/stars/klintan/ros2_denso_radar) ![GitHub last commit](https://img.shields.io/github/last-commit/klintan/ros2_denso_radar)](https://github.com/klintan/ros2_denso_radar) - Toyota/Lexus 2015-2017 Denso Radar driver for ROS2.
- [sick_scan2 ![GitHub Repo Stars](https://img.shields.io/github/stars/SICKAG/sick_scan2) ![GitHub last commit](https://img.shields.io/github/last-commit/SICKAG/sick_scan2)](https://github.com/SICKAG/sick_scan2) - ROS2 driver for the SICK TiM series of laser scanners (TiM551/TiM561/TiM571).
- [ros2_ouster_drivers ![GitHub Repo Stars](https://img.shields.io/github/stars/SteveMacenski/ros2_ouster_drivers) ![GitHub last commit](https://img.shields.io/github/last-commit/SteveMacenski/ros2_ouster_drivers)](https://github.com/SteveMacenski/ros2_ouster_drivers) - ROS2 Drivers for the Ouster OS-1 Lidars. ![ros2_ouster_drivers](https://img.shields.io/github/stars/SteveMacenski/ros2_ouster_drivers)
- [micro-ROS/hardware ![GitHub Repo Stars](https://img.shields.io/github/stars/micro-ROS/hardware) ![GitHub last commit](https://img.shields.io/github/last-commit/micro-ROS/hardware)](https://github.com/micro-ROS/hardware) - Information and documentation about the hardware platforms used and supported in the micro-ROS project.
- [Blickfeld Cube 1 & Cube Range](https://docs.blickfeld.com/cube/latest/external/ros/driver-v2/README.html) - ROS2 drivers for Blickfeld Cube 1 & Cube Range.
- [Universal Robots ![GitHub Repo Stars](https://img.shields.io/github/stars/UniversalRobots/Universal_Robots_ROS2_Driver) ![GitHub last commit](https://img.shields.io/github/last-commit/UniversalRobots/Universal_Robots_ROS2_Driver)](https://github.com/UniversalRobots/Universal_Robots_ROS2_Driver) - ROS2 drivers for UR CB3 and e-Series.
- [odrive_ros2_control ![GitHub Repo Stars](https://img.shields.io/github/stars/Factor-Robotics/odrive_ros2_control) ![GitHub last commit](https://img.shields.io/github/last-commit/Factor-Robotics/odrive_ros2_control)](https://github.com/Factor-Robotics/odrive_ros2_control) - ODrive driver for ros2_control.
- [duro_gps_driver ![GitHub Repo Stars](https://img.shields.io/github/stars/szenergy/duro_gps_driver) ![GitHub last commit](https://img.shields.io/github/last-commit/szenergy/duro_gps_driver)](https://github.com/szenergy/duro_gps_driver) - ROS/ROS2 driver for SwiftNav Duro Inertial GPS / GNSS receivers ![duro_gps_driver](https://img.shields.io/github/stars/szenergy/duro_gps_driver.svg)

### Client libraries

- [rclada ![GitHub Repo Stars](https://img.shields.io/github/stars/ada-ros/rclada) ![GitHub last commit](https://img.shields.io/github/last-commit/ada-ros/rclada)](https://github.com/ada-ros/rclada) - ROS Client Library for Ada. ![rclada](https://img.shields.io/github/stars/ada-ros/rclada.svg)
- [rclcpp ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rclcpp) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rclcpp)](https://github.com/ros2/rclcpp) - ROS Client Library for C++. ![rclcpp](https://img.shields.io/github/stars/ros2/rclcpp.svg)
- [rclgo ![GitHub Repo Stars](https://img.shields.io/github/stars/juaruipav/rclgo) ![GitHub last commit](https://img.shields.io/github/last-commit/juaruipav/rclgo)](https://github.com/juaruipav/rclgo) - ROS Client Library for Go. ![rclgo](https://img.shields.io/github/stars/juaruipav/rclgo.svg)
- [rclpy ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rclpy) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rclpy)](https://github.com/ros2/rclpy) - ROS Client Library for Python. ![rclpy](https://img.shields.io/github/stars/ros2/rclpy.svg)
- [rcljava ![GitHub Repo Stars](https://img.shields.io/github/stars/esteve/ros2_java) ![GitHub last commit](https://img.shields.io/github/last-commit/esteve/ros2_java)](https://github.com/esteve/ros2_java/tree/master/rcljava) - ROS Client Library for Java. ![rcljava](https://img.shields.io/github/stars/esteve/ros2_java.svg)
- [rclnodejs ![GitHub Repo Stars](https://img.shields.io/github/stars/RobotWebTools/rclnodejs) ![GitHub last commit](https://img.shields.io/github/last-commit/RobotWebTools/rclnodejs)](https://github.com/RobotWebTools/rclnodejs) - ROS Client Library for Node.js. ![rclnodejs](https://img.shields.io/github/stars/RobotWebTools/rclnodejs.svg)
- [rclobjc ![GitHub Repo Stars](https://img.shields.io/github/stars/esteve/ros2_objc) ![GitHub last commit](https://img.shields.io/github/last-commit/esteve/ros2_objc)](https://github.com/esteve/ros2_objc) - ROS Client Library for Objective C (for iOS). ![rclobjc](https://img.shields.io/github/stars/esteve/ros2_objc.svg)
- [rclc ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rclc) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rclc)](https://github.com/ros2/rclc) - ROS Client Library for C. ![rclc](https://img.shields.io/github/stars/ros2/rclc.svg)
- [ros2_rust ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2-rust/ros2_rust) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2-rust/ros2_rust)](https://github.com/ros2-rust/ros2_rust) - Rust bindings for ROS2. ![ros2_rust](https://img.shields.io/github/stars/esteve/ros2_rust.svg)
- [ros2_dotnet ![GitHub Repo Stars](https://img.shields.io/github/stars/esteve/ros2_dotnet) ![GitHub last commit](https://img.shields.io/github/last-commit/esteve/ros2_dotnet)](https://github.com/esteve/ros2_dotnet) - .NET bindings for ROS2. ![ros2_dotnet](https://img.shields.io/github/stars/esteve/ros2_dotnet.svg)
- [ros2cs ![GitHub Repo Stars](https://img.shields.io/github/stars/RobotecAI/ros2cs) ![GitHub last commit](https://img.shields.io/github/last-commit/RobotecAI/ros2cs)](https://github.com/RobotecAI/ros2cs) - an alternative to ros2_dotnet, a ROS2 C# interface supporting full range of messages and modern ROS2. ![ros2cs](https://img.shields.io/github/stars/RobotecAI/ros2cs.svg)

### Client libraries common

- [rcl ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rcl) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rcl)](https://github.com/ros2/rcl) - Library to support implementation of language specific ROS Client Libraries. ![rcl](https://img.shields.io/github/stars/ros2/rcl.svg)
- [system_tests ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/system_tests) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/system_tests)](https://github.com/ros2/system_tests) - Tests for rclcpp and rclpy. ![system_tests](https://img.shields.io/github/stars/ros2/system_tests.svg)
- [rcl_interfaces ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rcl_interfaces) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rcl_interfaces)](https://github.com/ros2/rcl_interfaces) - A repository for messages and services used by the ROS client libraries. ![rcl_interfaces](https://img.shields.io/github/stars/ros2/rcl_interfaces.svg)

### IDL generators

- [rosidl_generator_java ![GitHub Repo Stars](https://img.shields.io/github/stars/esteve/ros2_java) ![GitHub last commit](https://img.shields.io/github/last-commit/esteve/ros2_java)](https://github.com/esteve/ros2_java/tree/master/rosidl_generator_java) - Generate the ROS interfaces in Java. ![ros2_java](https://img.shields.io/github/stars/esteve/ros2_java.svg)
- [rosidl_generator_objc ![GitHub Repo Stars](https://img.shields.io/github/stars/esteve/ros2_objc) ![GitHub last commit](https://img.shields.io/github/last-commit/esteve/ros2_objc)](https://github.com/esteve/ros2_objc/tree/master/rosidl_generator_objc) - Generate the ROS interfaces in Objective C. ![ros2_objc](https://img.shields.io/github/stars/esteve/ros2_objc.svg)
- [rosidl_generator_cpp ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rosidl) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rosidl)](https://github.com/ros2/rosidl/tree/master/rosidl_generator_cpp) - Generate the ROS interfaces in C++. ![rosidl](https://img.shields.io/github/stars/ros2/rosidl.svg)
- [rosidl_generator_c ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rosidl) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rosidl)](https://github.com/ros2/rosidl/tree/master/rosidl_generator_c) - Generate the ROS interfaces in C. ![rosidl](https://img.shields.io/github/stars/ros2/rosidl.svg)
- [rosidl ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rosidl) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rosidl)](https://github.com/ros2/rosidl) - Packages which provide the ROS IDL (.msg) definition and code generation. ![rosidl](https://img.shields.io/github/stars/ros2/rosidl.svg)
- [rosidl_dds ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rosidl_dds) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rosidl_dds)](https://github.com/ros2/rosidl_dds) - Generate the DDS interfaces for ROS interfaces. ![rosidl_dds](https://img.shields.io/github/stars/ros2/rosidl_dds.svg)

### RMW (ROS middleware)

- [rmw ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rmw) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rmw)](https://github.com/ros2/rmw/tree/master/rmw) - Contains the ROS middleware API. ![rmw](https://img.shields.io/github/stars/ros2/rmw.svg)
- [rmw_connext_cpp ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rmw_connext) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rmw_connext)](https://github.com/ros2/rmw_connext/tree/master/rmw_connext_cpp) - Implement the ROS middleware interface using RTI Connext static code generation in C++. ![rmw_connext_cpp](https://img.shields.io/github/stars/ros2/rmw_connext.svg)
- [rmw_fastrtps_cpp ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rmw_fastrtps) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rmw_fastrtps)](https://github.com/ros2/rmw_fastrtps/tree/master/rmw_fastrtps_cpp) - Implement the ROS middleware interface using eProsima FastRTPS static code generation in C++. ![rmw_fastrtps_cpp](https://img.shields.io/github/stars/ros2/rmw_fastrtps.svg)
- [rmw_dps ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rmw_dps) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rmw_dps)](https://github.com/ros2/rmw_dps) - Implementation of the ROS Middleware (rmw) Interface using Intel's Distributed Publish & Subscribe. ![rmw_dps](https://img.shields.io/github/stars/ros2/rmw_dps.svg)
- [rmw_opensplice_cpp ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rmw_opensplice) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rmw_opensplice)](https://github.com/ros2/rmw_opensplice/tree/master/rmw_opensplice_cpp) - Implement the ROS middleware interface using PrismTech OpenSplice static code generation in C++. ![rmw_opensplice_cpp](https://img.shields.io/github/stars/ros2/rmw_opensplice.svg)
- [rmw_coredx ![GitHub Repo Stars](https://img.shields.io/github/stars/tocinc/rmw_coredx) ![GitHub last commit](https://img.shields.io/github/last-commit/tocinc/rmw_coredx)](https://github.com/tocinc/rmw_coredx) - CoreDX DDS integration layer for ROS2. ![tocinc/rmw_coredx](https://img.shields.io/github/stars/tocinc/rmw_coredx.svg)
- [rmw_freertps ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rmw_freertps) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rmw_freertps)](https://github.com/ros2/rmw_freertps) - RMW implementation using freertps. ![tocinc/rmw_coredx](https://img.shields.io/github/stars/ros2/rmw_freertps.svg)
- [rmw_zenoh ![GitHub Repo Stars](https://img.shields.io/github/stars/atolab/rmw_zenoh) ![GitHub last commit](https://img.shields.io/github/last-commit/atolab/rmw_zenoh)](https://github.com/atolab/rmw_zenoh) - RMW implementation using Eclipse zenoh: Zero Overhead Pub/sub, Store/Query and Compute. ![atolab/rmw_zenoh](https://img.shields.io/github/stars/atolab/rmw_zenoh.svg)
- [rcutils ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rcutils) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rcutils)](https://github.com/ros2/rcutils) - Common C functions and data structures used in ROS 2. ![rmw](https://img.shields.io/github/stars/ros2/rcutils.svg)
- [freertps ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/freertps) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/freertps)](https://github.com/ros2/freertps) - a free, portable, minimalist, work-in-progress RTPS implementation. ![rmw](https://img.shields.io/github/stars/ros2/freertps.svg)
- [rmw_cyclonedds ![GitHub Repo Stars](https://img.shields.io/github/stars/atolab/rmw_cyclonedds) ![GitHub last commit](https://img.shields.io/github/last-commit/atolab/rmw_cyclonedds)](https://github.com/atolab/rmw_cyclonedds) - ROS2 RMW layer for Eclipse Cyclone DDS. ![rmw_cyclonedds](https://img.shields.io/github/stars/atolab/rmw_cyclonedds.svg)
- [rmw_zenoh ![GitHub Repo Stars](https://img.shields.io/github/stars/atolab/rmw_zenoh) ![GitHub last commit](https://img.shields.io/github/last-commit/atolab/rmw_zenoh)](https://github.com/atolab/rmw_zenoh) - ROS2 RMW layer for [zenoh](https://zenoh.io).
- [rmw_iceoryx ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rmw_iceoryx) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rmw_iceoryx)](https://github.com/ros2/rmw_iceoryx) - Enables usage of the inter-process-communication middleware [Eclipse iceoryx](https://iceoryx.io).

### DDS communication mechanism implementations

- [Connext DDS](https://www.rti.com/products/connext-dds-professional) - Connectivity Software for Developing and Integrating IIoT Systems. :heavy_dollar_sign:
- [Fast-RTPS ![GitHub Repo Stars](https://img.shields.io/github/stars/eProsima/Fast-RTPS) ![GitHub last commit](https://img.shields.io/github/last-commit/eProsima/Fast-RTPS)](https://github.com/eProsima/Fast-RTPS) - Implementation of RTPS Standard (RTPS is the wire interoperability protocol for DDS). ![Fast-RTPS](https://img.shields.io/github/stars/eProsima/Fast-RTPS.svg)
- [OpenSplice ![GitHub Repo Stars](https://img.shields.io/github/stars/ADLINK-IST/opensplice) ![GitHub last commit](https://img.shields.io/github/last-commit/ADLINK-IST/opensplice)](https://github.com/ADLINK-IST/opensplice) - Implementation of the OMG DDS Standard. ![opensplice](https://img.shields.io/github/stars/ADLINK-IST/opensplice.svg) :heavy_dollar_sign:
- [CoreDX DDS](http://www.twinoakscomputing.com/coredx) - Implementation of Twin Oaks Computing, Inc.. :heavy_dollar_sign:
- [freertps ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/freertps) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/freertps)](https://github.com/ros2/freertps) - A free, portable, minimalist, work-in-progress RTPS implementation. ![freertps](https://img.shields.io/github/stars/ros2/freertps.svg)
- [cdds ![GitHub Repo Stars](https://img.shields.io/github/stars/atolab/cdds) ![GitHub last commit](https://img.shields.io/github/last-commit/atolab/cdds)](https://github.com/atolab/cdds) - Cyclone DDS is developed completely in the open and is undergoing the acceptance process to become part of Eclipse IoT. ![cdds](https://img.shields.io/github/stars/atolab/cdds.svg)
- [Micro-XRCE-DDS) ![GitHub Repo Stars](https://img.shields.io/github/stars/eProsima/Micro-XRCE-DDS) ![GitHub last commit](https://img.shields.io/github/last-commit/eProsima/Micro-XRCE-DDS)](https://github.com/eProsima/Micro-XRCE-DDS) - An XRCE DDS implementation (supported by microROS). ![Micro-XRCE-DDS](https://img.shields.io/github/stars/eProsima/Micro-XRCE-DDS.svg)

### Build system (Linux)

- [meta-ros2 ![GitHub Repo Stars](https://img.shields.io/github/stars/erlerobot/meta-ros2) ![GitHub last commit](https://img.shields.io/github/last-commit/erlerobot/meta-ros2)](https://github.com/erlerobot/meta-ros2) - ROS 2 Layer for OpenEmbedded Linux. ![meta-ros2](https://img.shields.io/github/stars/erlerobot/meta-ros2.svg)

### Build system (ROS2)

- [ci ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/ci) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/ci)](https://github.com/ros2/ci) - ROS 2 CI Infrastructure. ![ci](https://img.shields.io/github/stars/ros2/ci.svg)
- [ament_cmake_export_jars ![GitHub Repo Stars](https://img.shields.io/github/stars/esteve/ros2_java) ![GitHub last commit](https://img.shields.io/github/last-commit/esteve/ros2_java)](https://github.com/esteve/ros2_java/tree/master/ament_cmake_export_jars) - The ability to export Java archives to downstream packages in the ament buildsystem in CMake. ![ros2_java](https://img.shields.io/github/stars/esteve/ros2_java.svg)
- [rmw_implementation_cmake ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rmw) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rmw)](https://github.com/ros2/rmw/tree/master/rmw_implementation_cmake) - CMake functions which can discover and enumerate available implementations. ![rmw](https://img.shields.io/github/stars/ros2/rmw.svg)
- [rmw_implementation ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rmw_implementation) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rmw_implementation)](https://github.com/ros2/rmw_implementation) - CMake infrastructure and dependencies for rmw implementations. ![rmw](https://img.shields.io/github/stars/ros2/rmw_implementation.svg)

## Operating systems

- [NuttX ![GitHub Repo Stars](https://img.shields.io/github/stars/micro-ROS/NuttX) ![GitHub last commit](https://img.shields.io/github/last-commit/micro-ROS/NuttX)](https://github.com/micro-ROS/NuttX) - NuttX fork of the official one for use with micro-ROS.
- [RIOT ![GitHub Repo Stars](https://img.shields.io/github/stars/RIOT-OS/RIOT) ![GitHub last commit](https://img.shields.io/github/last-commit/RIOT-OS/RIOT)](https://github.com/RIOT-OS/RIOT) - RIOT is a real-time multi-threading operating system (...,) real-time capabilities, small memory footprint, (...) API offers partial POSIX compliance.
- [eMCOS](https://www.esol.com/embedded/emcos.html) - POSIX-compliant real-time OS for many-core processors expected to support AUTOSAR in the future.
- [PYNQ](http://www.pynq.io/) - Python-based rapid prototyping of high performance ML applications running on XILINX FPGAs.
- [ReconROS ![GitHub Repo Stars](https://img.shields.io/github/stars/Lien182/ReconROS) ![GitHub last commit](https://img.shields.io/github/last-commit/Lien182/ReconROS)](https://github.com/Lien182/ReconROS) - Framework for ROS2 FPGA-based hardware acceleration. Based on [ReconOS ![GitHub Repo Stars](https://img.shields.io/github/stars/reconos/reconos) ![GitHub last commit](https://img.shields.io/github/last-commit/reconos/reconos)](https://github.com/reconos/reconos). ![ReconROS](https://img.shields.io/github/stars/Lien182/ReconROS.svg)
- [Ubuntu Core](https://ubuntu.com/core) - Build secure IoT devices with Ubuntu Core.
- [Ubuntu Server](https://ubuntu.com/server)
- [VxWorks ![GitHub Repo Stars](https://img.shields.io/github/stars/Wind-River/vxworks7-ros2-build) ![GitHub last commit](https://img.shields.io/github/last-commit/Wind-River/vxworks7-ros2-build)](https://github.com/Wind-River/vxworks7-ros2-build) - The Secure, Safe, Reliable, and Certifiable real-time OS for Critical Infrastructure
- [Zephyr](https://www.zephyrproject.org/) - Linux Foundation Projects RTOS aiming at beeing secure and safe.

## Packaging

- [ros2-snap](https://snapcraft.io/docs/ros2-applications) - Create a snap for your ROS 2 application.

## Forks

- [Apex.OS](https://www.apex.ai/apex-os) - Apex.OS is a fork of ROS 2 that has been made so robust and reliable that it can be used in safety-critical applications.

## Documentation

- [ROS Index](https://index.ros.org/) - Future single entry point into ROS2 documentation (BETA).
  - [Foxy packages](https://index.ros.org/packages/page/1/time/#foxy).
  - [Dashing packages](https://index.ros.org/packages/page/1/time/#dashing).
  - [Crystal packages](https://index.ros.org/packages/page/1/time/#crystal).
  - [Bouncy packages](https://index.ros.org/packages/page/1/time/#bouncy).
  - [Ardent packages](https://index.ros.org/packages/page/1/time/#ardent).
- [ROS 2 Design](http://design.ros2.org/) - Articles which inform and guide the ROS 2.0 design efforts.
- [ROS 2 Docs (Overview)](http://docs.ros2.org/beta2/index.html#) - Details about ROS 2 internal design and organisation.
- [ROS 2 Tutorials ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/ros2) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/ros2)](https://github.com/ros2/ros2/wiki/Tutorials) - Study about ROS2 concept, libraries, build, and development with demoes/examples.
- [ROS 2 Wiki ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/ros2) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/ros2)](https://github.com/ros2/ros2/wiki) - Entry point to find all kind of information about ROS 2.
- [ROS 2 Distribution (rosdistro) ![GitHub Repo Stars](https://img.shields.io/github/stars/ros2/rosdistro) ![GitHub last commit](https://img.shields.io/github/last-commit/ros2/rosdistro)](https://github.com/ros2/rosdistro) - Info about distributions and the included packages.
- [ROS2 package status](http://repo.ros2.org/).
  - [Bouncy package status](http://repo.ros2.org/status_page/ros_bouncy_default.html) - Status of ROS Bouncy packages.
  - [Ardent package status](http://repo.ros2.org/status_page/ros_ardent_default.html) - Status of ROS2 Ardent packages.
- [ROS2 Buildfarm](http://build.ros2.org) - Build information (Jenkins build farm).
- [ROS2 CLI cheats sheet ![GitHub Repo Stars](https://img.shields.io/github/stars/artivis/ros2_cheats_sheet) ![GitHub last commit](https://img.shields.io/github/last-commit/artivis/ros2_cheats_sheet)](https://github.com/artivis/ros2_cheats_sheet/blob/master/cli/cli_cheats_sheet.pdf) - A cheats sheet for ROS 2 Command Line Interface.
- [ROS2 Quality Assurance Guidelines ![GitHub Repo Stars](https://img.shields.io/github/stars/ros-industrial/ros2_quality_assurance_guidelines) ![GitHub last commit](https://img.shields.io/github/last-commit/ros-industrial/ros2_quality_assurance_guidelines)](https://github.com/ros-industrial/ros2_quality_assurance_guidelines) - A collection of guidelines and tutorials for improving package quality, following REP-2004 quality standards and integrating Continuous Integration.


## Community

- [ROS Discourse](https://discourse.ros.org/c/ng-ros)
- [ROS Answers](https://answers.ros.org/questions/scope:all/sort:activity-desc/tags:ROS2/)
- [ROS News](http://www.ros.org/news/)
- [ROS Planet](http://planet.ros.org/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/ros2)

## Books

- [A Concise Introduction to Robot Programming with ROS2 ![GitHub Repo Stars](https://img.shields.io/github/stars/fmrico/book_ros2) ![GitHub last commit](https://img.shields.io/github/last-commit/fmrico/book_ros2)](https://github.com/fmrico/book_ros2)

## Courses

- [ROS2 How To: Discover Next Generation ROS (Udemy)](https://www.udemy.com/ros2-how-to/)
- [ROS 2 New Features: Skill-up with the latest features of Robot Operating System 2  (Udemy)](https://www.udemy.com/course/ros-2-new-features/)
- [ROS 2 Basics in 5 Days (C++) - Learn how to start working with ROS 2 (The Construct)](http://www.theconstructsim.com/construct-learn-develop-robots-using-ros/robotigniteacademy_learnros/ros-courses-library/ros2-basics-course/)
- ROS2 Autoware Course
  - [Autoware Course Lecture 1: Development Environment](https://www.youtube.com/watch?v=XTmlhvlmcf8)
  - [Autoware Course Lecture 2: ROS2 101](https://www.youtube.com/watch?v=FTA4Ia2vLS8)
  - [Autoware Course Lecture 3: ROS 2 Tooling - Develop Like a Pro](https://www.youtube.com/watch?v=wcibIqiRb04)
  - [Autoware Course Lecture 4: Platform HW, RTOS and DDS](https://www.youtube.com/watch?v=IyycN6ldsIs)
  - [Autoware Course Lecture 5: Autonomous Driving Stacks](https://www.youtube.com/watch?v=nTI4fnn2tuU)
  - [Autoware Course Lecture 6: Autoware 101](https://www.youtube.com/watch?v=eSHHmJrqpMU)
  - [Autoware Course Lecture 7: Object Perception: LIDAR](https://www.youtube.com/watch?v=xSGCpb24dhI)
  - [Autoware Course Lecture 8: Object Perception: CAMERA](https://www.youtube.com/watch?v=OtjTa-meJ-E)
  - [Autoware Course Lecture 9: Object Perception: Radar](https://www.youtube.com/watch?v=PcVIO-xoNv8)
  - [Autoware Course Lecture 10: State Estimation for Localization](https://www.youtube.com/watch?v=g2YURb-d9vY)
  - [Autoware Course Lecture 11: LGSVL Simulator](https://www.youtube.com/watch?v=OcB6FUbjZXo)
  - [Autoware Course Lecture 12: Motion Control](https://www.youtube.com/watch?v=fQJpAVRQBrI)
- [ROS2-Industrial training material ![GitHub Repo Stars](https://img.shields.io/github/stars/ros-industrial/ros2_i_training) ![GitHub last commit](https://img.shields.io/github/last-commit/ros-industrial/ros2_i_training)](https://github.com/ros-industrial/ros2_i_training)

## Presentations

### ROSCon 2022

[Program announcement](https://roscon.ros.org/2022/#program)(slides + videos)
- Panel: The ROS 2 Developer Experience [video](https://vimeo.com/showcase/9954564/video/767155188)
- Wearable ROS: Development of wearable robot system using ROS 2 [video](https://vimeo.com/showcase/9954564/video/767140298) [slides](http://download.ros.org/downloads/roscon/2022/Wearable%20ROS%20Development%20of%20wearable%20robot%20system%20using%20ROS2.pdf)
- Building ROS 2 enabled Android apps with C++ [video](https://vimeo.com/showcase/9954564/video/767161955) [slides](http://download.ros.org/downloads/roscon/2022/Building%20ROS%202%20enabled%20Android%20apps%20with%20C++.pdf)
- Distributed Robotics Simulator with Unreal Engine [video](https://vimeo.com/showcase/9954564/video/767139975) [slides](http://download.ros.org/downloads/roscon/2022/Distributed%20Robotics%20Simulator%20with%20Unreal%20Engine.pdf)
- Tools and processes for improving the certifiability of ROS 2 [video](https://vimeo.com/showcase/9954564/video/767150613) [slides](http://download.ros.org/downloads/roscon/2022/Tools%20and%20processes%20for%20improving%20the%20certifiability%20of%20ROS%202.pdf)
- Failover ROS Framework : Consensus-based node redundancy [video](https://vimeo.com/showcase/9954564/video/767156308) [slides](http://download.ros.org/downloads/roscon/2022/Failover%20ROS%20Framework%20Consensus-based%20node%20redundancy.pdf)
- ROS 2 and Gazebo Integration Best Practices [video](https://vimeo.com/showcase/9954564/video/767127300) [slides](http://download.ros.org/downloads/roscon/2022/ROS%202%20and%20Gazebo%20Integration%20Best%20Practices.pdf)
- Chain-Aware ROS Evaluation Tool (CARET) [video](https://vimeo.com/showcase/9954564/video/767150288) [slides](http://download.ros.org/downloads/roscon/2022/Chain-Aware%20ROS%20Evaluation%20Tool%20(CARET).pdf)
- ROS 2 network monitoring [video](https://vimeo.com/showcase/9954564/video/767140681) [slides](http://download.ros.org/downloads/roscon/2022/ROS%202%20network%20monitoring.pdf)
- How custom tasks are defined, assigned, and executed in Open-RMF [video](https://vimeo.com/showcase/9954564/video/767157210) [slides](http://download.ros.org/downloads/roscon/2022/How%20custom%20tasks%20are%20defined,%20assigned,%20and%20executed%20in%20Open-RMF.pdf)
- A practitioner's guide to ros2_control [video](https://vimeo.com/showcase/9954564/video/767139648) [slides](http://download.ros.org/downloads/roscon/2022/A%20practitioner_s%20guide%20to%20ros2_control.pdf)
- Zenoh: How to Make ROS 2 Work at any Scale and Integrate with Anything [video](https://vimeo.com/769972405) [slides](http://download.ros.org/downloads/roscon/2022/Zenoh%20How%20to%20Make%20ROS2%20Work%20at%20any%20Scale%20and%20Integrate%20with%20Anything.pdf)
- A case study in optics manufacturing with MoveIt2 and ros2_control [video](https://vimeo.com/showcase/9954564/video/767140351) [slides](http://download.ros.org/downloads/roscon/2022/A%20case%20study%20in%20optics%20manufacturing%20with%20MoveIt2%20and%20ros2_control.pdf)
- 20/20 Robot Vision - How to setup cameras in ROS 1 & ROS 2 using camera_aravis [video](https://vimeo.com/showcase/9954564/video/767140329) [slides](http://download.ros.org/downloads/roscon/2022/20%20-%2020%20Robot%20Vision%20-%20How%20to%20setup%20cameras%20in%20ROS%201%20&%20ROS%202%20using%20camera_aravis.pdf)
- Filter your ROS 2 content [video](https://vimeo.com/767166447) [slides](http://download.ros.org/downloads/roscon/2022/Filter%20your%20ROS%202%20content.pdf)
- Evolving Message Types, and Other Interfaces, Over Time [video](https://vimeo.com/showcase/9954564/video/767140015) [slides](http://download.ros.org/downloads/roscon/2022/Evolving%20Message%20Types,%20and%20Other%20Interfaces,%20Over%20Time.pdf)
- Migrating from ROS1 to ROS 2 - choosing the right bridge [video](https://vimeo.com/showcase/9954564/video/767140113) [slides](http://download.ros.org/downloads/roscon/2022/Migrating%20from%20ROS1%20to%20ROS2%20-%20choosing%20the%20right%20bridge.pdf)
- On Use of Nav2 Smac Planners [video](https://vimeo.com/showcase/9954564/video/767157646) [slides](http://download.ros.org/downloads/roscon/2022/On%20Use%20of%20Nav2%20Smac%20Planners.pdf)
- Bazel and ROS 2 – building large scale safety applications [video](https://vimeo.com/showcase/9954564/video/767139879) [slides](http://download.ros.org/downloads/roscon/2022/Bazel%20and%20ROS%202%20%E2%80%93%20building%20large%20scale%20safety%20applications.pdf)
- Native Rust components for ROS 2 [video](https://vimeo.com/showcase/9954564/video/767140150) [slides](http://download.ros.org/downloads/roscon/2022/Native%20Rust%20components%20for%20ROS2.pdf)
- The ROS build farm and you: How ROS packages you release become binary packages. [video](https://vimeo.com/showcase/9954564/video/767169376) [slides](http://download.ros.org/downloads/roscon/2022/The%20ROS%20build%20farm%20and%20you%20How%20ROS%20packages%20you%20release%20become%20binary%20packages.pdf)
- mROS 2: yet another runtime environment onto embedded devices [video](https://vimeo.com/showcase/9954564/video/767150435) [slides](http://download.ros.org/downloads/roscon/2022/mROS%202%20yet%20another%20runtime%20environment%20onto%20embedded%20devices.pdf)
- ROS 2 & Edge Impulse: Embedded AI in robotics applications [video](https://vimeo.com/showcase/9954564/video/767140724) [slides](http://download.ros.org/downloads/roscon/2022/ROS2%20_%20Edge%20Impulse%20Embedded%20AI%20in%20robotics%20applications.pdf)
- micro-ROS goes Automotive: supporting AUTOSAR-based microcontrollers [video](https://vimeo.com/769963507) [slides](http://download.ros.org/downloads/roscon/2022/micro-ROS%20goes%20Automotive%20supporting%20AUTOSAR-based%20microcontrollers.pdf)
- An open architecture for Hardware Acceleration in ROS 2 [video](https://vimeo.com/769967795) [slides](http://download.ros.org/downloads/roscon/2022/An%20open%20architecture%20for%20Hardware%20Acceleration%20in%20ROS%202.pdf)
- ROS 2 and the Crazyflie: Aerial swarms and Autonomy with a tiny flying robot [video](https://vimeo.com/showcase/9954564/video/767140197) [slides](http://download.ros.org/downloads/roscon/2022/ROS%202%20and%20the%20Crazyflie%20Aerial%20swarms%20and%20Autonomy%20with%20a%20tiny%20flying%20robot.pdf)
- A Raspberry Pi image with ROS 2 + RT and a customizable image builder [video](https://vimeo.com/showcase/9954564/video/767139709) [slides](http://download.ros.org/downloads/roscon/2022/A%20Raspberry%20Pi%20image%20with%20ROS%202%20%2B%20RT%20and%20a%20customizable%20image%20builder.pdf)

### ROSCon 2021

[Program announcement](https://roscon.ros.org/world/2021/#program)(slides + videos)

### ROSCon Jp 2021

[Program announcement](https://roscon.ros.org/jp/2021/#program)(slides + videos)

### ROSCon 2020

[Program announcement](https://roscon.ros.org/world/2020/#program)(slides + videos)

### ROSCon 2019

[Program announcement](https://roscon.ros.org/2019/#program)(slides + videos)

### ROSCon Fr 2019

[Program announcement](https://roscon.fr/#program)(slides + videos)

### ROS-I EU Spring 2019 Workshop

- Current Status of ROS 2 Hands-on Feature Overview [Slides](https://static1.squarespace.com/static/51df34b1e4b08840dcfd2841/t/5ce6c85ca4222fe0ccbd5309/1558628472094/2019-05-07_Current_Status_of_ROS_2.pdf)

### 2019

- Robot Modularity with Xilinx and H-ROS (Xilinx Inc.) [Video](https://www.xilinx.com/video/events/robot-modularity-with-xilinx-and-h-ros.html)

### ROSCon JP 2018 (english slide presentations only)

- What's next for ROS? (from slide 24 onwards) [Slides](https://roscon.jp/2018/presentations/ROSCon_JP_2018_presentation_2.pdf) [Video](https://vimeo.com/292064161)

### ROSCon 2018

[program announcement](https://roscon.ros.org/2018/#program)

- Hands-on ROS 2: A Walkthrough
- ROS 2 on Autonomous Driving Vehicles
- RViz – The tale of a migration to ROS 2.0
- Launch for ROS 2
- Getting involved in ROS 2 development
- Planning to Plan: Plugins All The Way Down
- Leveraging DDS Security in ROS2
- Arm DDS Security library: Adding secure security to ROS2
- ROS2: Supercharging the Jaguar4x4
- Performance Test - A Tool for Communication Middleware Performance Measuring
- ROS2 for Android, iOS and Universal Windows Platform: a demonstration of ROS2��s portability, and cross-platform and cross-language capabilities
- Integrating ROS and ROS2 on mixed-critical robotic systems based on embedded heterogeneous platforms
- Towards ROS 2 microcontroller meta cross-compilation
- Node.js Client & Web Bridge Ready for ROS 2.0
- RCLAda: the Ada client library for ROS2

### Embedded World Conference 2018

- ADLink Neuron: An industrial oriented ROS2-based platform [Slides](https://raw.githubusercontent.com/Adlink-ROS/adlink_neuronbot/master/document/ADLINK_NeuronBot_20180313.pdf) [Video](https://www.youtube.com/watch?v=RC6XvTvTs9Y&feature=youtu.be) [Video](https://www.youtube.com/watch?v=qA4_Hmnd_tM&feature=youtu.be)

### 2018

- ROS2 - The Robot Operating System Version 2 (TNG Technology Consulting GmbH) [Slides](https://www.tngtech.com/fileadmin/Public/Images/BigTechday/BTD11/Folien/ROS2.pdf) [Video](https://www.youtube.com/watch?v=6Vzi0Grrlp8)

### ROS Industrial Conference 2017

- micro Robot Operating System: ROS for highly resource-constrained devices [Slides](https://static1.squarespace.com/static/51df34b1e4b08840dcfd2841/t/5a3bb6d524a6947d9d0cbc68/1513862873907/07_Losa.pdf)
- ROS2 - it's coming [Slides](https://static1.squarespace.com/static/51df34b1e4b08840dcfd2841/t/5a3bb787e4966b606fe227d7/1513863070599/11_Thomas.pdf)

### ROSCon 2017

- The ROS 2 vision for advancing the future of robotics development [Slides](https://roscon.ros.org/2017/presentations/ROSCon%202017%20ROS2%20Vision.pdf) [Video](https://vimeo.com/236161417)
- ROS2 Fine Tuning [Slides](https://roscon.ros.org/2017/presentations/ROSCon%202017%20ROS2%20Fine%20Tuning.pdf) [Video](https://vimeo.com/236168591)
- SLAM on Turtlebot2 using ROS2 [Slides](https://roscon.ros.org/2017/presentations/ROSCon%202017%20ROS2%20SLAM.pdf) [Video](https://vimeo.com/236172294)
- Using ROS2 for Vision-Based Manipulation with Industrial Robots [Slides](https://roscon.ros.org/2017/presentations/ROSCon%202017%20ROS2%20Vision-Based%20Manipulation.pdf) [Video](https://vimeo.com/236182180)

### 2017

- HyphaROS ROS 2.0 Introduction [slides](https://drive.google.com/file/d/1MW_w7MS1DNg1EzhprgbJKY2cqmxksPaw/view)

### ROS Industrial Conference 2016

- ROS 2.0 AND OPC UA: A STATUS UPDATE [Slides](https://static1.squarespace.com/static/51df34b1e4b08840dcfd2841/t/58235f2eb8a79be587899891/1478713139775/ROS-I-Conf2016-day1-09-keinert.pdf)

### ROSCon 2016

- ROS 2 Update [Slides](https://roscon.ros.org/2016/presentations/ROSCon%202016%20-%20ROS%202%20Update.pdf) [Video](https://vimeo.com/187696091)
- Evaluating the resilience of ROS2 communication layer [Slides](https://roscon.ros.org/2016/presentations/rafal.kozik-ros2evaluation.pdf) [Video](https://vimeo.com/187705229)

### ROSCon 2015

- ROS 2 on “small” embedded systems [Slides](https://roscon.ros.org/2015/presentations/ros2_on_small_embedded_systems.pdf) [Video](https://vimeo.com/142150576)
- State of ROS 2 - demos and the technology behind [Slides](https://roscon.ros.org/2015/presentations/state-of-ros2.pdf) [Video](https://vimeo.com/142151734)
- Real-time Performance in ROS 2 [Slides](https://roscon.ros.org/2015/presentations/RealtimeROS2.pdf) [Video](https://vimeo.com/142621778)

## Papers

- [Distributed and Synchronized Setup towards Real-Time Robotic Control using ROS2 on Linux](https://www.semanticscholar.org/paper/Distributed-and-Synchronized-Setup-towards-Robotic-Puck-Keller/10c4eeef9da0c5aa87664037f18a0ab746853757)
- [Time Synchronization in modular collaborative robots](https://arxiv.org/pdf/1809.07295.pdf)
- [Open Problems in Robotic Anomaly Detection](https://arxiv.org/pdf/1809.03565.pdf)
- [Towards a distributed and real-time framework for robots: Evaluation of ROS 2.0 communications for real-time robotic applications](https://arxiv.org/pdf/1809.02595.pdf)
- [An information model for modular robots: the Hardware Robot Information Model (HRIM)](https://arxiv.org/pdf/1802.01459.pdf)
- [Introducting the Robot Security Framework (RSF), A standardized methodology to perform security assessments in robotics](https://arxiv.org/pdf/1806.04042.pdf)
- [Towards an open standard for assessing the severity of robot security vulnerabilities, The Robot Vulnerability Scoring System (RVSS)](https://arxiv.org/pdf/1807.10357.pdf)
- [Real-Time Characteristics of ROS 2.0 in Multiagent Robot Systems: An Empirical Study](https://www.semanticscholar.org/paper/Real-Time-Characteristics-of-ROS-2.0-in-Multiagent-Park-Delgado/8fa5b9443b33dd20c33be9a4259d92b238310a5c)
- [Response-Time Analysis of ROS 2 Processing Chains Under Reservation-Based Scheduling](https://www.semanticscholar.org/paper/Response-Time-Analysis-of-ROS-2-Processing-Chains-Casini-Bla%C3%9F/6fa472cc45f6de22f2a26114441d595534a80a92)
- [Robot Operating System 2 - The need for a holistic security approach to robotic architectures](http://journals.sagepub.com/doi/pdf/10.1177/1729881418770011) - Ubuntu 16.04, ROS 2 Beta 2/3, and RTI 5.3 DDS with
DDS Security.
- [Maruyama, Yuya et al. “Exploring the performance of ROS2.” 2016 International Conference on Embedded Software (EMSOFT) (2016): 1-10.](https://www.semanticscholar.org/paper/Exploring-the-performance-of-ROS2-Maruyama-Kato/07b895f3b584dea4f64e91844f243de382026b20)

## Podcasts

- [ROS 2 and DDS for IoT devices with HaoChih Lin (from 5th minute onwards)](http://www.theconstructsim.com/rdp-017-ros-2-dds-iot-haochih/)
- [Everything about ROS 2 with Dirk Thomas (from 16th minute onwards)](http://www.theconstructsim.com/rdp-012-all-about-ros2-with-dirk-thomas/)

## Services

### Cloud robotics

- [robolaunch](https://www.robolaunch.io/)

### Robotics Capture the Flag (RCTF)

- [rctf-list ![GitHub Repo Stars](https://img.shields.io/github/stars/aliasrobotics/RCTF) ![GitHub last commit](https://img.shields.io/github/last-commit/aliasrobotics/RCTF)](https://github.com/aliasrobotics/RCTF) - A list of Robotics CTF (RCTF) scenarios.

## Companies

- [Acutronic Robotics](https://github.com/AcutronicRobotics) - Not existing anymore. Initiators of the Hardware Robot Information Model (HRIM), Hardware Robot Operating System (H-ROS) and creators of the world's first modular industrial robot arm MARA.
- [ADLINK](https://www.adlinktech.com/en/index.aspx) - "Leading EDGE COMPUTING".
- [Alias Robotics](https://aliasrobotics.com/) - Products and services in the context of robot cybersecurity.
- [Amazon](https://github.com/aws-robotics) - Robotics Team of Amazon Amazon Web Services (AWS).
- [Apex.AI](https://www.apex.ai/) - "Safe and certified software for autonomous mobility".
- [AutonomouStuff](https://autonomoustuff.com) - "The world leader in autonomy systems and solutions".
- [Bosch](https://github.com/boschresearch) - Robotics Team of Bosch Research.
- [Canonical](https://canonical.com/) - The company behind Ubuntu.
- [Eprosima](https://www.eprosima.com/) - "The middleware experts".
- [Ericsson Research](https://discourse.ros.org/t/transport-priority-qos-policy-to-solve-ip-flow-ambiguity-while-requesting-5g-network-qos/15332) - Connect ROS2 applications to 5G networks for M2M communication.
- [FARobot](https://www.farobottech.com/) - Swarm Robot System, a ROS 2/DDS based Fleet Management System.
- [Fraunhofer Institute for Manufacturing Engineering and Automation IPA](https://www.ipa.fraunhofer.de/en/expertise/robot-and-assistive-systems.html) - Robot and assistive systems.
- [GESTALT ROBOTICS](https://www.gestalt-robotics.com/en/home) - Service provider for intelligent automation.
- [Husarnet](https://husarnet.com) - Open Source, P2P, low-latency VPN dedicated for robots.
- [iRobot](https://www.irobot.de/) - Manufacturer of vacuuming and mopping robots.
- [Klepsydra Technologies](https://www.klepsydra.com/).
- [MathWorks](https://de.mathworks.com/help/ros/index.html) - ROS Toolbox.
- [Mission Robotics](https://missionrobotics.us/) - Hardware and Software for a new era of Marine Intelligence.
- [Roboception GmbH](https://roboception.com/en/) - Real-Time Perception for Your Robot.
- [ROBOOX](https://roboox.co/) - OPEN-SOURCE SOFTWARE ECOSYSTEM FOR CONSUMER ROBOTS.
- [Rover Robotics](https://roverrobotics.com/) - Rugged, industrial-grade robots.
- [Sony Corporation](https://www.sony.net/SonyInfo/technology/element/robotics/).
- [synapticon](https://www.synapticon.com/technology) - ROS compatible motion control and drive products with efforts to support ROS2.
- [Wind River](https://labs.windriver.com/ros2-for-vxworks/) - ROS2 for VxWorks.

## Organizations

- [U.S. Department of Transportation](https://discourse.ros.org/t/carma-migrating-to-ros-2-with-cyclonedds-and-zenoh/17541)

## Working Groups

- Edge AI Working Group
  - [Discourse threads tagged "wg-edgeai"](https://discourse.ros.org/tag/wg-edgeai)
- Embedded Working Group
  - [Discourse threads tagged "wg-embedded"](https://discourse.ros.org/tags/wg-embedded)
- Hardware Acceleration Working Group
  - [Discourse threads tagged "wg-acceleration"](https://discourse.ros.org/tag/wg-acceleration)
- Navigation Working Group
  - [Discourse threads tagged "wg-navigation"](https://discourse.ros.org/tags/wg-navigation)
- Safety Working Group
  - [Safety Working Group Landing Page](http://www.ros2.org/safety_working_group/)
  - [Safety Design Pattern Catalogue](http://www.ros2.org/safety_working_group/safety_patterns_catalogue.html)
- Security Working Group
  - [Discourse threads tagged "wg-security"](https://discourse.ros.org/tags/wg-security)
  - [ros-security/community ![GitHub Repo Stars](https://img.shields.io/github/stars/ros-security/community) ![GitHub last commit](https://img.shields.io/github/last-commit/ros-security/community)](https://github.com/ros-security/community) - Outlines the governance of the ROS 2 Security Working Group.
- Technical Steering Committee
  - [Discourse threads tagged "tsc"](https://discourse.ros.org/tags/tsc)
- Tooling Working Group
  - [Discourse threads tagged "wg-tooling"](https://discourse.ros.org/tags/wg-tooling)

## License

[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
