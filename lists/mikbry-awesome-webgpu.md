# Awesome WebGPU [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[<img src="https://www.w3.org/2023/02/webgpu-logos/webgpu-notext.svg" align="right" height="150">](https://www.w3.org/TR/webgpu/)

> Lovely curated list of WebGPU resources, libraries and tools.

WebGPU is a [W3C](https://www.w3.org/) API for modern 3D graphics and GPU computing on desktop and mobile devices. Unlike WebGL, WebGPU is not a port of an existing native API. It borrows concepts from Metal, Vulkan and Direct3D12.

## Contents

- [Websites](#websites)
- [Browser support](#browser-support)
- [Articles](#articles)
- [Tutorials](#tutorials)
- [Books](#books)
- [Libraries](#libraries)
- [AI libraries](#ai-libraries)
- [Debuggers and Profilers](#debuggers-and-profilers)
- [Gists](#gists)
- [Demos](#demos)
- [Videos](#videos)
- [Community](#community)
- [Bug reporting](#bug-reporting)
- [Historical resources](#historical-resources)

## Websites

### Official websites

- [WebGPU.org](https://webgpu.org/) - Resource hub for browser support, learning materials, and developer tools.
- [GPUWeb ![GitHub Repo Stars](https://img.shields.io/github/stars/gpuweb/gpuweb) ![GitHub last commit](https://img.shields.io/github/last-commit/gpuweb/gpuweb)](https://github.com/gpuweb/gpuweb) - Official GitHub repository.
- [Official WebGPU Explainer](https://gpuweb.github.io/gpuweb/explainer/)

### WebGPU Specifications
- [History](https://www.w3.org/standards/history/webgpu/)
- [Editor's Draft](https://gpuweb.github.io/gpuweb/)
### WGSL (WebGPU Shading Language) Specifications
- [Published specification](https://www.w3.org/TR/WGSL/)
- [Editor's Draft](https://gpuweb.github.io/gpuweb/wgsl/)

### API documentations
- [API quick reference and documentation](https://webgpu.rocks/) - WebGPU.rocks.
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API) - WebGPU API reference.

### Misc
- [Google Developers Site](https://developer.chrome.com/docs/web-platform/webgpu)
- [r/WebGPU - Reddit](https://www.reddit.com/r/webgpu/) - WebGPU Subreddit.
- [compute.toys](https://compute.toys/) - Compute shader playground (like shadertoy).
- [Shadeup](https://shadeup.dev/) - Language/website that makes experimenting with WebGPU easier.
- [Tour of WGSL](https://google.github.io/tour-of-wgsl/) - A quick introduction to the WebGPU Shading Language.
- [WebGPU Experts Blog](https://www.webgpuexperts.com/blog) - News and articles about WebGPU.

## Browser support

Availability depends on the browser version, operating system, GPU, and driver.

- [WebGPU Report](https://webgpureport.org/) - Inspect the WebGPU features and limits available on your device.
- [Implementation status ![GitHub Repo Stars](https://img.shields.io/github/stars/gpuweb/gpuweb) ![GitHub last commit](https://img.shields.io/github/last-commit/gpuweb/gpuweb)](https://github.com/gpuweb/gpuweb/wiki/Implementation-Status) - Platform support and rollout details maintained by GPUWeb.
- [WebGPU browser support overview](https://caniuse.com/webgpu) - Browser compatibility tables.

### Chromium

- [Chrome](https://www.google.com/chrome/) - Enabled on supported Windows, macOS, ChromeOS, Android, and Linux configurations; consult the implementation status for hardware and operating system requirements.
- [Edge](https://www.microsoft.com/edge/) - Chromium-based browser with WebGPU support on supported devices and operating systems.

### Firefox

- [Firefox](https://www.firefox.com/) - Enabled on Windows and Apple Silicon Macs; other platforms have different rollout schedules.
- [Firefox Nightly](https://nightly.mozilla.org/) - Preview implementation for testing upcoming support, including Linux and other Mac configurations.

### Safari

- [Safari 26 release notes](https://developer.apple.com/documentation/safari-release-notes/safari-26-release-notes) - WebGPU ships enabled on macOS Tahoe 26, iOS 26, iPadOS 26, and visionOS 26.
- [Safari Technology Preview](https://developer.apple.com/safari/resources/) - Preview browser for testing upcoming implementation changes.

## Articles

- [Figma rendering: Powered by WebGPU](https://www.figma.com/blog/figma-rendering-powered-by-webgpu/) - Production renderer migration case study covering shaders, batching, and fallbacks (2025).
- [Compatibility mode and transient attachments](https://developer.chrome.com/blog/new-in-webgpu-146) - Chrome 146 implementation update covering broader hardware support and attachment optimizations (2026).
- [Immediates in Chrome 149–150](https://developer.chrome.com/blog/new-in-webgpu-149-150) - Browser implementation update on passing small amounts of frequently changed shader data (2026).
- [WebGPU](https://en.wikipedia.org/wiki/WebGPU) - Wikipedia article.
- [Graphics on the web and beyond with WebGPU](https://dmnsgn.medium.com/13c4ba049039) - By [Damien Seguin](https://dmnsgn.medium.com/).
- [From WebGL to WebGPU in Construct](https://www.construct.net/en/blogs/ashleys-blog-2/webgl-webgpu-construct-1519) - By Ashley Gullen.
- [WebGPU texture best practices](https://toji.dev/webgpu-best-practices/img-textures) - By Brandon Jones.
- [WebGPU Buffer upload best practices](https://toji.dev/webgpu-best-practices/buffer-uploads) - By Brandon Jones.
- [Efficiently rendering glTF models - A WebGPU Case Study](https://toji.dev/webgpu-gltf-case-study/) - By [Brandon Jones](https://github.com/toji).
- [WebGPU - All of the cores, none of the canvas](https://surma.dev/things/webgpu/index.html) - Compute concepts and browser support as of 2022, by [Surma](https://github.com/surma).
- [WebGPU Fundamentals](https://webgpufundamentals.org/) - A set of articles to help learn WebGPU.
- [PBR in WebGPU: implementation details](https://tchayen.com/pbr-in-webgpu-implementation-details) - By [Tomasz Czajecki](https://github.com/tchayen).
- [From WebGL to WebGPU](https://developer.chrome.com/docs/web-platform/webgpu/from-webgl-to-webgpu) - By Google.
- [WebGPU for Dummies](https://people.distributive.network/amir/WebGPU-For-Dummies.html) - By Amir Sojoodi.
- [WebGPU Timestamps](https://amirsojoodi.github.io/posts/WebGPU-Timestamp/) - By Amir Sojoodi.
- [WebAssembly and WebGPU](https://developer.chrome.com/blog/io24-webassembly-webgpu-2) - Browser machine-learning performance enhancements, by Google.

## Tutorials

- [Your first WebGPU app](https://codelabs.developers.google.com/your-first-webgpu-app) - Google codelab introducing rendering and compute with a Game of Life simulation.
- [Get started with GPU Compute on the Web](https://developer.chrome.com/docs/capabilities/web-apis/gpu-compute) - Tutorial on how to use WebGPU for non-graphical applications, by [François Beaufort](https://github.com/beaufortfrancois).
- [From 0 to glTF with WebGPU: Series](https://www.willusher.io/graphics/2023/04/10/0-to-gltf-triangle/) [(repository) ![GitHub Repo Stars](https://img.shields.io/github/stars/Twinklebear/webgpu-0-to-gltf) ![GitHub last commit](https://img.shields.io/github/last-commit/Twinklebear/webgpu-0-to-gltf)](https://github.com/Twinklebear/webgpu-0-to-gltf?tab=readme-ov-file) - A tutorial to create a glTF model viewer, by [Will Usher](https://github.com/Twinklebear).
- [Learn wgpu](https://sotrh.github.io/learn-wgpu/) - Tutorial and examples on wgpu, a Rust implementation of WebGPU, by [@sotrh](https://github.com/sotrh)
- [LearningWebGPU 教程 (Chinese) ![GitHub Repo Stars](https://img.shields.io/github/stars/hjlld/LearningWebGPU) ![GitHub last commit](https://img.shields.io/github/last-commit/hjlld/LearningWebGPU)](https://github.com/hjlld/LearningWebGPU) - Tutorials using WGSL; the older GLSL-to-SPIR-V branch is deprecated.
- [Build a compute rasterizer in WebGPU ![GitHub Repo Stars](https://img.shields.io/github/stars/OmarShehata/webgpu-compute-rasterizer) ![GitHub last commit](https://img.shields.io/github/last-commit/OmarShehata/webgpu-compute-rasterizer)](https://github.com/OmarShehata/webgpu-compute-rasterizer/blob/main/how-to-build-a-compute-rasterizer.md) - How to build a complete rasterizer using compute shaders, by [Omar Shehata](https://github.com/OmarShehata).
- [Learn WebGPU for native C++ development](https://eliemichel.github.io/LearnWebGPU) - A tutorial on WebGPU for Desktop applications using wgpu or Dawn, by [@eliemichel](https://github.com/eliemichel).
- [Learn vgpu](https://endash.us/apps/learn-vgpu) - Interactive introduction to the vgpu API with live WGSL editing.

## Books

- [Practical WebGPU Graphics](https://books.google.com/books?id=tPQyEAAAQBAJ&printsec=frontcover) - by [Jack Xu](https://github.com/jack1232)

## Libraries

- [luma.gl](https://luma.gl/) - Graphics and compute toolkit with WebGPU and WebGL backends.
- [webgpu-utils ![GitHub Repo Stars](https://img.shields.io/github/stars/greggman/webgpu-utils) ![GitHub last commit](https://img.shields.io/github/last-commit/greggman/webgpu-utils)](https://github.com/greggman/webgpu-utils) - Helpers for buffer layouts, textures, mipmaps, and bind groups.
- [Emdawnwebgpu ![GitHub Repo Stars](https://img.shields.io/github/stars/google/dawn) ![GitHub last commit](https://img.shields.io/github/last-commit/google/dawn)](https://github.com/google/dawn/blob/main/src/emdawnwebgpu/pkg/README.md) - Dawn-maintained WebGPU bindings for Emscripten applications.
- [wgpu-native ![GitHub Repo Stars](https://img.shields.io/github/stars/gfx-rs/wgpu-native) ![GitHub last commit](https://img.shields.io/github/last-commit/gfx-rs/wgpu-native)](https://github.com/gfx-rs/wgpu-native) - Native C interface to the Rust wgpu implementation.
- [Vello ![GitHub Repo Stars](https://img.shields.io/github/stars/linebender/vello) ![GitHub last commit](https://img.shields.io/github/last-commit/linebender/vello)](https://github.com/linebender/vello) - Experimental Rust 2D vector renderer using wgpu and GPU compute.
- [Babylon.js](https://doc.babylonjs.com/setup/support/webGPU) - Open game and rendering engine.
- [Three.js](https://threejs.org/) - 3D library with WebGPURenderer and Three.js Shading Language (TSL) for shader authoring.
- [PlayCanvas](https://playcanvas.com/) - Web-based game engine with WebGPU support.
- [PixiJS](https://pixijs.com/) - 2D rendering engine with a WebGPU renderer.
- [Dawn](https://dawn.googlesource.com/dawn) - Google implementation that powers WebGPU in Chromium, can be used as a standalone package.
- [wgpu ![GitHub Repo Stars](https://img.shields.io/github/stars/gfx-rs/wgpu) ![GitHub last commit](https://img.shields.io/github/last-commit/gfx-rs/wgpu)](https://github.com/gfx-rs/wgpu) - Cross-platform Rust graphics API based on WebGPU, used by Firefox and native applications.
- [webgpu-headers ![GitHub Repo Stars](https://img.shields.io/github/stars/webgpu-native/webgpu-headers) ![GitHub last commit](https://img.shields.io/github/last-commit/webgpu-native/webgpu-headers)](https://github.com/webgpu-native/webgpu-headers) - C/C++ headers.
- [sokol ![GitHub Repo Stars](https://img.shields.io/github/stars/floooh/sokol) ![GitHub last commit](https://img.shields.io/github/last-commit/floooh/sokol)](https://github.com/floooh/sokol/) - Simple STB-style cross-platform libraries for C and C++.
- [RedGPU ![GitHub Repo Stars](https://img.shields.io/github/stars/redcamel/RedGPU) ![GitHub last commit](https://img.shields.io/github/last-commit/redcamel/RedGPU)](https://github.com/redcamel/RedGPU) - JavaScript WebGPU library, by [@redcamel](https://github.com/redcamel).
- [WebGPU .NET ![GitHub Repo Stars](https://img.shields.io/github/stars/EvergineTeam/WebGPU.NET) ![GitHub last commit](https://img.shields.io/github/last-commit/EvergineTeam/WebGPU.NET)](https://github.com/EvergineTeam/WebGPU.NET) - Browser-focused .NET bindings for the Emscripten WebGPU API.
- [Deno](https://docs.deno.com/runtime/desktop/webgpu/) - JavaScript and TypeScript runtime with WebGPU support through the `--unstable-webgpu` flag.
- [RedCube ![GitHub Repo Stars](https://img.shields.io/github/stars/Reon90/redcube) ![GitHub last commit](https://img.shields.io/github/last-commit/Reon90/redcube)](https://github.com/Reon90/redcube) - glTF viewer based on a WebGPU backend.
- [hwoa-rang-gpu ![GitHub Repo Stars](https://img.shields.io/github/stars/gnikoloff/hwoa-rang-gpu) ![GitHub last commit](https://img.shields.io/github/last-commit/gnikoloff/hwoa-rang-gpu)](https://github.com/gnikoloff/hwoa-rang-gpu) - Micro WebGPU rendering & compute library.
- [wgsl_reflect ![GitHub Repo Stars](https://img.shields.io/github/stars/brendan-duncan/wgsl_reflect) ![GitHub last commit](https://img.shields.io/github/last-commit/brendan-duncan/wgsl_reflect)](https://github.com/brendan-duncan/wgsl_reflect) - A WebGPU Shading Language parser and reflection library for JavaScript.
- [WebGPU-C++ ![GitHub Repo Stars](https://img.shields.io/github/stars/eliemichel/WebGPU-Cpp) ![GitHub last commit](https://img.shields.io/github/last-commit/eliemichel/WebGPU-Cpp)](https://github.com/eliemichel/WebGPU-Cpp) - A single-file zero-overhead C++ idiomatic wrapper, by @eliemichel.
- [Use.GPU](https://usegpu.live) - Reactive/declarative WebGPU runtime.
- [GEngine ![GitHub Repo Stars](https://img.shields.io/github/stars/GEngine-js/GEngine) ![GitHub last commit](https://img.shields.io/github/last-commit/GEngine-js/GEngine)](https://github.com/GEngine-js/GEngine) - A basic rendering engine based on WebGPU, by junwei.gu.
- [Thimbleberry ![GitHub Repo Stars](https://img.shields.io/github/stars/mighdoll/thimbleberry) ![GitHub last commit](https://img.shields.io/github/last-commit/mighdoll/thimbleberry)](https://github.com/mighdoll/thimbleberry) - Reusable WebGPU shaders and support functions.
- [WebRTX ![GitHub Repo Stars](https://img.shields.io/github/stars/codedhead/webrtx) ![GitHub last commit](https://img.shields.io/github/last-commit/codedhead/webrtx)](https://github.com/codedhead/webrtx) - Experimental ray-tracing layer implemented with WebGPU compute shaders.
- [React Native WebGPU ![GitHub Repo Stars](https://img.shields.io/github/stars/wcandillon/react-native-webgpu) ![GitHub last commit](https://img.shields.io/github/last-commit/wcandillon/react-native-webgpu)](https://github.com/wcandillon/react-native-webgpu) - React Native implementation of WebGPU using Dawn.
- [TypeGPU](https://docs.swmansion.com/TypeGPU/) - Type-safe toolkit for GPU resources and shaders authored in TypeScript.
- [WESL ![GitHub Repo Stars](https://img.shields.io/github/stars/webgpu-tools/wesl-spec) ![GitHub last commit](https://img.shields.io/github/last-commit/webgpu-tools/wesl-spec)](https://github.com/webgpu-tools/wesl-spec) - Community WGSL extensions for `import`, `@if`, and more.
- [WebGpGpu.ts ![GitHub Repo Stars](https://img.shields.io/github/stars/eddow/webgpgpu) ![GitHub last commit](https://img.shields.io/github/last-commit/eddow/webgpgpu)](https://github.com/eddow/webgpgpu) - A WebGPU framework to access compute shaders, browser or server-side, without the steep learning curve.
- [spark.js](https://ludicon.com/sparkjs/) - A real-time GPU texture compression library for WebGPU.
- [zephyr3d](https://zephyr3d.org/) - A TypeScript-based 3D rendering engine with WebGPU/WebGL support.
- [ChartGPU ![GitHub Repo Stars](https://img.shields.io/github/stars/chartgpu/chartgpu) ![GitHub last commit](https://img.shields.io/github/last-commit/chartgpu/chartgpu)](https://github.com/chartgpu/chartgpu) - Interactive charting library using WebGPU for rendering.
- [vgpu](https://vgpu.sh/) - TypeScript WebGPU library with typed WGSL imports and a shared API for browsers, Node.js, and tests.
- [RunMat ![GitHub Repo Stars](https://img.shields.io/github/stars/runmat-org/runmat) ![GitHub last commit](https://img.shields.io/github/last-commit/runmat-org/runmat)](https://github.com/runmat-org/runmat) - GPU-accelerated numerical computing runtime for MATLAB-syntax programs, with browser execution through WebAssembly and WebGPU.
- [Vienna WebGPU Engine ![GitHub Repo Stars](https://img.shields.io/github/stars/hlavacs/Vienna-WebGPU-Engine) ![GitHub last commit](https://img.shields.io/github/last-commit/hlavacs/Vienna-WebGPU-Engine)](https://github.com/hlavacs/Vienna-WebGPU-Engine) - Educational C++ game engine built on WebGPU, with rendering tutorials and native and browser backends.
- [Points ![GitHub Repo Stars](https://img.shields.io/github/stars/Absulit/points) ![GitHub last commit](https://img.shields.io/github/last-commit/Absulit/points)](https://github.com/Absulit/points) - Generative art library built with WebGPU.
- [fisheye.js ![GitHub Repo Stars](https://img.shields.io/github/stars/GyeongHoKim/fisheye.js) ![GitHub last commit](https://img.shields.io/github/last-commit/GyeongHoKim/fisheye.js)](https://github.com/GyeongHoKim/fisheye.js) - WebGPU compute library for fisheye image and video correction using WebCodecs.

## AI libraries

- [WebLLM](https://webllm.mlc.ai/) - Browser language-model inference engine accelerated with WebGPU.
- [ONNX Runtime Web](https://onnxruntime.ai/docs/tutorials/web/ep-webgpu.html) - Browser inference runtime with a WebGPU execution provider for ONNX models.
- [Transformers.js](https://huggingface.co/docs/transformers.js/en/guides/webgpu) - JavaScript machine-learning library with WebGPU acceleration through ONNX Runtime.

## Debuggers and Profilers

- [WebGPU Dev Extension ![GitHub Repo Stars](https://img.shields.io/github/stars/greggman/webgpu-dev-extension) ![GitHub last commit](https://img.shields.io/github/last-commit/greggman/webgpu-dev-extension)](https://github.com/greggman/webgpu-dev-extension) - Browser extension for validation diagnostics, memory tracking, and redundant-state detection.
- [WebGPUReconstruct ![GitHub Repo Stars](https://img.shields.io/github/stars/Chainsawkitten/WebGPUReconstruct) ![GitHub last commit](https://img.shields.io/github/last-commit/Chainsawkitten/WebGPUReconstruct)](https://github.com/Chainsawkitten/WebGPUReconstruct) - Capture browser commands and replay them through native implementations for graphics debugging and profiling.
- [webgpu-inspector ![GitHub Repo Stars](https://img.shields.io/github/stars/brendan-duncan/webgpu_inspector) ![GitHub last commit](https://img.shields.io/github/last-commit/brendan-duncan/webgpu_inspector)](https://github.com/brendan-duncan/webgpu_inspector) - Inspection debugger for WebGPU.
- [wgpu-profiler ![GitHub Repo Stars](https://img.shields.io/github/stars/Wumpf/wgpu-profiler) ![GitHub last commit](https://img.shields.io/github/last-commit/Wumpf/wgpu-profiler)](https://github.com/Wumpf/wgpu-profiler) - GPU timing and profiling utilities for Rust applications using wgpu.

## Gists

- [2D](https://gist.github.com/munrocket/30e645d584b5300ee69295e54674b3e4) and [3D SDF Primitives](https://gist.github.com/munrocket/f247155fc22ecb8edf974d905c677de1) - Signed distance field primitives in WGSL, by [@munrocket](https://github.com/munrocket).

## Demos

Demo compatibility depends on browser support and the features required by each application.

- [WebGPU Samples](https://webgpu.github.io/webgpu-samples/) - A set of samples and demos demonstrating the use of the WebGPU API - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/webgpu/webgpu-samples) ![GitHub last commit](https://img.shields.io/github/last-commit/webgpu/webgpu-samples)](https://github.com/webgpu/webgpu-samples)
- [Darkly.art](https://demo.darkly.art) - Open-source photo editor with an advanced WebGPU compositor written in Rust + WebAssembly - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/darkly-art/darkly) ![GitHub last commit](https://img.shields.io/github/last-commit/darkly-art/darkly)](https://github.com/darkly-art/darkly)
- [WebGPU first-person exploration of the Sponza Palace](https://toji.github.io/webgpu-test/) - Scene render comparison between WebGL, WebGL 2.0 and WebGPU, by Brandon Jones - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/toji/webgpu-test) ![GitHub last commit](https://img.shields.io/github/last-commit/toji/webgpu-test)](https://github.com/toji/webgpu-test)
- [WebGPU Clustered Shading](https://toji.github.io/webgpu-clustered-shading/) - By Brandon Jones - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/toji/webgpu-clustered-shading) ![GitHub last commit](https://img.shields.io/github/last-commit/toji/webgpu-clustered-shading)](https://github.com/toji/webgpu-clustered-shading)
- [WebGPU Metaballs](https://toji.github.io/webgpu-metaballs/) - By Brandon Jones - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/toji/webgpu-metaballs) ![GitHub last commit](https://img.shields.io/github/last-commit/toji/webgpu-metaballs)](https://github.com/toji/webgpu-metaballs)
- [Online WGSL Editor](https://takahirox.github.io/online-wgsl-editor/) - By [Takahiro](https://github.com/takahirox) - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/takahirox/online-wgsl-editor) ![GitHub last commit](https://img.shields.io/github/last-commit/takahirox/online-wgsl-editor)](https://github.com/takahirox/online-wgsl-editor)
- [Three.js WebGPU examples](https://threejs.org/examples/?q=webgpu) - A collection of examples from three.js using the WebGPU renderer - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/mrdoob/three.js) ![GitHub last commit](https://img.shields.io/github/last-commit/mrdoob/three.js)](https://github.com/mrdoob/three.js/tree/dev/examples#:~:text=webgpu_compute.html)
- [Spookyball](https://spookyball.com) - A Halloween-themed, open source Breakout clone, by Brandon Jones - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/toji/spookyball) ![GitHub last commit](https://img.shields.io/github/last-commit/toji/spookyball)](https://github.com/toji/spookyball)
- [Babylon.js Playground](https://playground.babylonjs.com/) - By [Babylon.js](https://www.babylonjs.com/) (Note: Select `WebGPU` in the top right corner).
- [PlayCanvas WebGPU Demos](https://playcanvas.vercel.app/) - By [PlayCanvas](https://playcanvas.com/) (Note: Select `WebGPU` in the top right corner).
- [WebGPU Particles](https://hsimpson.github.io/webgpu-particles/) - Calculate and render particles, by [Daniel Toplak](https://github.com/hsimpson) - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/hsimpson/webgpu-particles) ![GitHub last commit](https://img.shields.io/github/last-commit/hsimpson/webgpu-particles)](https://github.com/hsimpson/webgpu-particles)
- [WebGPU Examples](https://tsherif.github.io/webgpu-examples/) - A few examples of rendering algorithms implemented in WebGPU, by [Tarek Sherif](https://github.com/tsherif) - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/tsherif/webgpu-examples) ![GitHub last commit](https://img.shields.io/github/last-commit/tsherif/webgpu-examples)](https://github.com/tsherif/webgpu-examples)
- [wgpu examples](https://wgpu.rs/examples/) - Official list of examples from the [wgpu](https://wgpu.rs) library - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/gfx-rs/wgpu) ![GitHub last commit](https://img.shields.io/github/last-commit/gfx-rs/wgpu)](https://github.com/gfx-rs/wgpu/tree/trunk/examples)
- [Forest WebGPU](https://www.babylonjs.com/Demos/WebGPU/forestWebGPU.html) - A scene built with Babylon.js.
- [WebGPU-Playground](https://06wj.github.io/WebGPU-Playground/) - A playground to experiment with WebGPU, by [@06wj](https://github.com/06wj) - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/06wj/WebGPU-Playground) ![GitHub last commit](https://img.shields.io/github/last-commit/06wj/WebGPU-Playground)](https://github.com/06wj/WebGPU-Playground)
- [WebGPU 2D Fluid Simulation](https://kishimisu.github.io/WebGPU-Fluid-Simulation/) - An implementation of "Real-Time Fluid Dynamics for Games" paper, by [kishimisu](https://github.com/kishimisu) - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/kishimisu/WebGPU-Fluid-Simulation) ![GitHub last commit](https://img.shields.io/github/last-commit/kishimisu/WebGPU-Fluid-Simulation)](https://github.com/kishimisu/WebGPU-Fluid-Simulation)
- [WebGPU-Lab](https://s-macke.github.io/WebGPU-Lab/) - Demos and experiments, focused on compute shaders, by [Sebastian Macke](https://github.com/s-macke) - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/s-macke/WebGPU-Lab) ![GitHub last commit](https://img.shields.io/github/last-commit/s-macke/WebGPU-Lab)](https://github.com/s-macke/WebGPU-Lab)
- [WebGPU Live Demo Editor](https://www.wgsl.dev/editor) - A collection of WebGPU examples by [Hepp Maccoy](https://github.com/hepp) - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/hepp/webgpu-examples) ![GitHub last commit](https://img.shields.io/github/last-commit/hepp/webgpu-examples)](https://github.com/hepp/webgpu-examples)
- [Thimbleberry Image Transform Demo](https://thimbleberry.dev) - An Image processing app built using Thimbleberry, by [mighdoll](https://vis.social/@mighdoll) - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/mighdoll/thimbleberry) ![GitHub last commit](https://img.shields.io/github/last-commit/mighdoll/thimbleberry)](https://github.com/mighdoll/thimbleberry/tree/main/image-demo)
- [Shadowray Playground](https://www.shadowray.gl/) - Demo of an experimental ray-tracing layer implemented with WebGPU compute shaders.
- [Web Stable Diffusion](https://websd.mlc.ai/) - Early browser image-generation demo using WebGPU, with [source code ![GitHub Repo Stars](https://img.shields.io/github/stars/mlc-ai/web-stable-diffusion) ![GitHub last commit](https://img.shields.io/github/last-commit/mlc-ai/web-stable-diffusion)](https://github.com/mlc-ai/web-stable-diffusion).
- [Shader Graph WGSL](https://deepkolos.github.io/shader-graph-wgsl/) - A node based shader editor, by [deepkolos](https://github.com/deepkolos) - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/deepkolos/shader-graph-wgsl) ![GitHub last commit](https://img.shields.io/github/last-commit/deepkolos/shader-graph-wgsl)](https://github.com/deepkolos/shader-graph-wgsl)
- [WebGPU Memory Model Testing](https://gpuharbor.ucsc.edu/webgpu-mem-testing/) - Memory models testing suite, by [Reese Levine](https://github.com/reeselevine) et al., UC Santa Cruz - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/reeselevine/webgpu-litmus) ![GitHub last commit](https://img.shields.io/github/last-commit/reeselevine/webgpu-litmus)](https://github.com/reeselevine/webgpu-litmus)
- [Marching Cubes WebGPU](https://conorpo.github.io/marching-cubes-webgpu/) - Marching cubes implementation, by [Conor O'Malley](https://github.com/conorpo) - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/conorpo/marching-cubes-webgpu) ![GitHub last commit](https://img.shields.io/github/last-commit/conorpo/marching-cubes-webgpu)](https://github.com/conorpo/marching-cubes-webgpu)
- [WebGPU Path Tracing](https://iamferm.in/webgpu-path-tracing/) - A path tracer powered by WebGPU compute shaders, by [Fermin Lozano](https://github.com/ferminLR) - [Repository ![GitHub Repo Stars](https://img.shields.io/github/stars/ferminLR/webgpu-path-tracing) ![GitHub last commit](https://img.shields.io/github/last-commit/ferminLR/webgpu-path-tracing)](https://github.com/ferminLR/webgpu-path-tracing)
- [WebGPU real-time ray tracer ![GitHub Repo Stars](https://img.shields.io/github/stars/C-none/Web-RTRT) ![GitHub last commit](https://img.shields.io/github/last-commit/C-none/Web-RTRT)](https://github.com/C-none/Web-RTRT/) - A real-time ray tracer implementing the ReSTIR algorithm.
- [Real-Time GPU Texture Compression Demo](https://ludicon.com/sparkjs/gltf-demo/) - Showcases the advantages of real-time texture compression. Compares models using KTX2 textures against AVIF + Spark.
- [vgpu Shader on Live HTML](https://html-in-canvas.dev/demos/vgpu-shader/) - Shader demo applying WebGPU effects to HTML content; requires the experimental canvas-draw-element browser flag.
- [RunMat Browser Sandbox](https://runmat.com/sandbox) - Browser playground for MATLAB-syntax numerical programs accelerated with WebGPU.
- [DoG Studio](https://dougfenstermacher.com/dogpack/) - WebGPU image and video processing demo for configurable Difference-of-Gaussians line art and screentone effects, with [source code ![GitHub Repo Stars](https://img.shields.io/github/stars/dpfens/dogpack) ![GitHub last commit](https://img.shields.io/github/last-commit/dpfens/dogpack)](https://github.com/dpfens/dogpack).
- [Points examples](https://absulit.github.io/points/examples/index.html) - Generative art demos covering particles, render passes, and other WebGPU techniques.

## Videos

- [WebGL to WebGPU (playlist)](https://www.youtube.com/playlist?list=PLMinhigDWz6f5Nm_GYGREYnaf9mzoNdjX) - By [SketchpunkLabs](https://www.youtube.com/c/SketchpunkLabs)
- [WebGPU (playlist)](https://www.youtube.com/playlist?list=PLnTPVrg9-a1Ou2KXUniDr1HC7qgL2JD2x) - By [Genka](https://www.youtube.com/channel/UCBTwKzJg-BR56tKWO5CT7XA)
- [WebGPU Graphics Programming Step-by-Step (playlist)](https://www.youtube.com/playlist?list=PL_UrKDEhALdKh0118flOjuAnVIGKFUJXN) - By [Practical Programming with Dr. Xu](https://www.youtube.com/channel/UCg14XfqXim0vpgabU3T7tRg)
- [Introducing WebGPU: Unlocking modern GPU access for JavaScript](https://www.youtube.com/watch?v=m6T-Mq1BPXg) - By Google.
- [A proper look at WebGPU for native games](https://www.youtube.com/watch?v=DdMl4E7xQEY) - By [Madrigal](https://www.madrigalgames.com/)

## Community

- [GPU for the web community group](https://www.w3.org/community/gpu/) - W3C Community.
- [Public GPU](https://lists.w3.org/Archives/Public/public-gpu/) - W3C Mailing list.
- [Matrix WebGPU](https://matrix.to/#/#WebGPU:matrix.org) - General community chat.

## Bug reporting

- [Webkit](https://bugs.webkit.org/buglist.cgi?bug_status=UNCONFIRMED&bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&component=WebGPU)
- [Firefox](https://bugzilla.mozilla.org/buglist.cgi?product=Core&component=Graphics%3A%20WebGPU)
- [Chromium](https://issues.chromium.org/savedsearches/6760928)

## Historical resources

These resources document earlier implementations, obsolete API versions, or experimental forks. Code and setup instructions may require substantial changes for current WebGPU.

- [A Taste of WebGPU in Firefox](https://hacks.mozilla.org/2020/04/experimental-webgpu-in-firefox/) - Mozilla.org article by Dzmitry Malyshau.
- [Point of WebGPU native](https://kvark.github.io/web/gpu/native/2020/05/03/point-of-webgpu-native) - By Dzmitry Malyshau.
- [Implementing WebGPU in Gecko](https://kvark.github.io/web/gpu/gecko/2019/12/10/gecko-webgpu) - By [Dzmitry Malyshau](https://github.com/kvark).
- [A brief history of graphics on the web and WebGPU](https://www.construct.net/en/blogs/ashleys-blog-2/brief-history-graphics-web-1517) - By Ashley Gullen.
- [wgpu-rs on the web](https://gfx-rs.github.io/2020/04/21/wgpu-web) - Rust Graphics Mages.
- [Compiling Machine Learning to WebAssembly and WebGPU with Apache TVM](https://tvm.apache.org/2020/05/14/compiling-machine-learning-to-webassembly-and-webgpu) - By [Tianqi Chen](https://github.com/tqchen) & [Jared Roesch](https://github.com/jroesch).
- [Next-generation 3D Graphics on the web](https://webkit.org/blog/7380/next-generation-3d-graphics-on-the-web/) - Webkit.org article by [Dean Jackson](https://twitter.com/grorgwork).
- [Raw WebGPU](https://alain.xyz/blog/raw-webgpu) - An overview on how to write a WebGPU application, by [Alain Galvan](https://github.com/alaingalvan).
- [Basic WebGPU Rendering](https://dev.to/ndesmic/basic-webgpu-rendering-2kob) - Summary of the steps to render a scene, by [@ndesmic](https://github.com/ndesmic).
- [WebGPU for Metal Developers Part 1](https://metalbyexample.com/webgpu-part-one/) and [Part 2](https://metalbyexample.com/webgpu-part-two/) - Introduction to WebGPU from Apple's GPU API, Metal, by [Warren Moore](https://twitter.com/warrenm).
- [Real-Time Ray-Tracing in WebGPU](https://maierfelix.github.io/2020-01-13-webgpu-ray-tracing/) - Building a Ray tracer using a modified version of WebGPU implementation with Vulkan and DX12 ray tracing extensions, by [Felix Maier](https://github.com/maierfelix).
- [webgpu-devtools ![GitHub Repo Stars](https://img.shields.io/github/stars/takahirox/webgpu-devtools) ![GitHub last commit](https://img.shields.io/github/last-commit/takahirox/webgpu-devtools)](https://github.com/takahirox/webgpu-devtools) - Legacy alpha browser extension.
- [webgpu-debugger ![GitHub Repo Stars](https://img.shields.io/github/stars/webgpu/webgpu-debugger) ![GitHub last commit](https://img.shields.io/github/last-commit/webgpu/webgpu-debugger)](https://github.com/webgpu/webgpu-debugger) - Legacy alpha debugger.
- [Dawn RT ![GitHub Repo Stars](https://img.shields.io/github/stars/maierfelix/dawn-ray-tracing) ![GitHub last commit](https://img.shields.io/github/last-commit/maierfelix/dawn-ray-tracing)](https://github.com/maierfelix/dawn-ray-tracing) - A fork of dawn with Ray tracing extensions, by Felix Maier.
- [wgpu-load-test ![GitHub Repo Stars](https://img.shields.io/github/stars/MacTuitui/wgpu-load-test) ![GitHub last commit](https://img.shields.io/github/last-commit/MacTuitui/wgpu-load-test)](https://github.com/MacTuitui/wgpu-load-test) - A wgpu stress test, by [Alexis Andre](https://github.com/MacTuitui).
- [From WebGL to WebGPU: A perspective from Babylon js by David Catuhe](https://www.youtube.com/watch?v=A2FxeEl4nWw)
- [Next-Generation 3D Graphics on the Web (Google I/O 2019)](https://www.youtube.com/watch?v=K2JzIUIHIhc)
- [Building WebGPU with Rust](https://archive.fosdem.org/2020/schedule/event/rust_webgpu/) - By Dzmitry Malyshau from Mozilla.
- [YC Point of WebGPU on native](https://news.ycombinator.com/item?id=23079200) - Discussion regarding this article.

---

To the extent possible under law, [Mik Bry](https://github.com/mikbry) has waived all copyright and related or neighboring rights to this work.

Contributions welcome! Read the [contribution guidelines](contributing.md) first.
