# Awesome FFmpeg [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> [FFmpeg](http://ffmpeg.org) is a cross-platform solution to record, convert and stream audio and video.

<p align="center">
  <img width="400" src="https://cdn.rawgit.com/transitive-bullshit/awesome-ffmpeg/master/ffmpeg-logo.svg">
</p>


## Contents

- [Docs](#docs)
- [JavaScript](#javascript)
- [Native](#native)
- [Mobile](#mobile)
- [Tutorials](#tutorials)
- [Community](#community)


## Docs

FFmpeg's official docs are notoriously difficult for beginners to understand due to the scope and complexity of FFmpeg's capabilities. With that being said, they're still very useful as a reference.

- [FFmpeg.org](http://ffmpeg.org) - Where it all starts.
- [Filters](https://ffmpeg.org/ffmpeg-filters.html) - Docs for FFmpeg's powerful filter chains (scaling, cropping, concatenating, merging, etc.). This is one of my most visited links when working with FFmpeg.
- [Man page](https://man.cx/ffmpeg) - Official FFmpeg man page.
- [Wiki & Bug Tracker](https://trac.ffmpeg.org) - Lots of great info on here.
- [CLI flags ![GitHub Repo Stars](https://img.shields.io/github/stars/transitive-bullshit/ffmpeg-cli-flags) ![GitHub last commit](https://img.shields.io/github/last-commit/transitive-bullshit/ffmpeg-cli-flags)](https://github.com/transitive-bullshit/ffmpeg-cli-flags/blob/master/readme.md) - A comprehensive list of all FFmpeg commandline flags. Really useful for searching random flags that you come across in the wild.


## JavaScript

- [fluent-ffmpeg ![GitHub Repo Stars](https://img.shields.io/github/stars/fluent-ffmpeg/node-fluent-ffmpeg) ![GitHub last commit](https://img.shields.io/github/last-commit/fluent-ffmpeg/node-fluent-ffmpeg)](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg) - A fluent API to [FFmpeg](http://www.ffmpeg.org). If you only use one tool from this list, it should be this one.
- [ffmpeg-probe ![GitHub Repo Stars](https://img.shields.io/github/stars/transitive-bullshit/ffmpeg-probe) ![GitHub last commit](https://img.shields.io/github/last-commit/transitive-bullshit/ffmpeg-probe)](https://github.com/transitive-bullshit/ffmpeg-probe) - Wrapper around ffprobe for getting info about media files.
- [ffmpeg-concat ![GitHub Repo Stars](https://img.shields.io/github/stars/transitive-bullshit/ffmpeg-concat) ![GitHub last commit](https://img.shields.io/github/last-commit/transitive-bullshit/ffmpeg-concat)](https://github.com/transitive-bullshit/ffmpeg-concat) - Concats a list of videos together using FFmpeg with sexy OpenGL transitions.
- [editly ![GitHub Repo Stars](https://img.shields.io/github/stars/mifi/editly) ![GitHub last commit](https://img.shields.io/github/last-commit/mifi/editly)](https://github.com/mifi/editly) - Declarative video editing tool and library with slick animations and transitions.
- [ffmpeg-generate-video-preview ![GitHub Repo Stars](https://img.shields.io/github/stars/transitive-bullshit/ffmpeg-generate-video-preview) ![GitHub last commit](https://img.shields.io/github/last-commit/transitive-bullshit/ffmpeg-generate-video-preview)](https://github.com/transitive-bullshit/ffmpeg-generate-video-preview) - Generates an attractive image strip or GIF preview from a video.
- [ffmpeg-extract-frame ![GitHub Repo Stars](https://img.shields.io/github/stars/transitive-bullshit/ffmpeg-extract-frame) ![GitHub last commit](https://img.shields.io/github/last-commit/transitive-bullshit/ffmpeg-extract-frame)](https://github.com/transitive-bullshit/ffmpeg-extract-frame) - Extracts a single frame from a video.
- [ffmpeg-extract-frames ![GitHub Repo Stars](https://img.shields.io/github/stars/transitive-bullshit/ffmpeg-extract-frames) ![GitHub last commit](https://img.shields.io/github/last-commit/transitive-bullshit/ffmpeg-extract-frames)](https://github.com/transitive-bullshit/ffmpeg-extract-frames) - Extracts screenshots from a video using FFmpeg.
- [gif-extract-frames ![GitHub Repo Stars](https://img.shields.io/github/stars/transitive-bullshit/gif-extract-frames) ![GitHub last commit](https://img.shields.io/github/last-commit/transitive-bullshit/gif-extract-frames)](https://github.com/transitive-bullshit/gif-extract-frames) - Extracts frames from GIFs including inter-frame coalescing.
- [ffmpeg-extract-audio ![GitHub Repo Stars](https://img.shields.io/github/stars/transitive-bullshit/ffmpeg-extract-audio) ![GitHub last commit](https://img.shields.io/github/last-commit/transitive-bullshit/ffmpeg-extract-audio)](https://github.com/transitive-bullshit/ffmpeg-extract-audio) - Extracts an audio stream from a media file.
- [ffmpeg-on-progress ![GitHub Repo Stars](https://img.shields.io/github/stars/transitive-bullshit/ffmpeg-on-progress) ![GitHub last commit](https://img.shields.io/github/last-commit/transitive-bullshit/ffmpeg-on-progress)](https://github.com/transitive-bullshit/ffmpeg-on-progress) - Utility for robustly reporting progress with fluent-ffmpeg.
- [ffmpeg.js ![GitHub Repo Stars](https://img.shields.io/github/stars/Kagami/ffmpeg.js) ![GitHub last commit](https://img.shields.io/github/last-commit/Kagami/ffmpeg.js)](https://github.com/Kagami/ffmpeg.js) - Port of FFmpeg to JavaScript via Emscripten. Allows for limited FFmpeg use on the client-side.
- [ffmpeg-static ![GitHub Repo Stars](https://img.shields.io/github/stars/eugeneware/ffmpeg-static) ![GitHub last commit](https://img.shields.io/github/last-commit/eugeneware/ffmpeg-static)](https://github.com/eugeneware/ffmpeg-static) - Provides static FFmpeg binaries for macOS, Linux, and Windows. Very useful for CI testing.
- [tangerine ![GitHub Repo Stars](https://img.shields.io/github/stars/niftylettuce/tangerine) ![GitHub last commit](https://img.shields.io/github/last-commit/niftylettuce/tangerine)](https://github.com/niftylettuce/tangerine) - Webcam streaming service using Node.js, FFmpeg, WebSockets, and Lad.
- [ffparser ![GitHub Repo Stars](https://img.shields.io/github/stars/NiKlimenko/FFParser) ![GitHub last commit](https://img.shields.io/github/last-commit/NiKlimenko/FFParser)](https://github.com/NiKlimenko/FFParser) - Parse input stream by frames directly into your code as a buffer.


## Native

- [ffmpeg-gl-transition ![GitHub Repo Stars](https://img.shields.io/github/stars/transitive-bullshit/ffmpeg-gl-transition) ![GitHub last commit](https://img.shields.io/github/last-commit/transitive-bullshit/ffmpeg-gl-transition)](https://github.com/transitive-bullshit/ffmpeg-gl-transition) - FFmpeg filter for applying GLSL transitions between video streams ([gl-transitions](https://gl-transitions.com/)).


## Mobile

- [simplest ffmpeg mobile ![GitHub Repo Stars](https://img.shields.io/github/stars/leixiaohua1020/simplest_ffmpeg_mobile) ![GitHub last commit](https://img.shields.io/github/last-commit/leixiaohua1020/simplest_ffmpeg_mobile)](https://github.com/leixiaohua1020/simplest_ffmpeg_mobile) - FFmpeg examples for Android and iOS.
- [ijkplayer ![GitHub Repo Stars](https://img.shields.io/github/stars/Bilibili/ijkplayer) ![GitHub last commit](https://img.shields.io/github/last-commit/Bilibili/ijkplayer)](https://github.com/Bilibili/ijkplayer) - Android / iOS video player based on FFmpeg.


## Tutorials

- [How to Write a Video Player in Less Than 1k Lines](http://dranger.com/ffmpeg)
- [Learn FFmpeg libav the Hard Way ![GitHub Repo Stars](https://img.shields.io/github/stars/leandromoreira/ffmpeg-libav-tutorial) ![GitHub last commit](https://img.shields.io/github/last-commit/leandromoreira/ffmpeg-libav-tutorial)](https://github.com/leandromoreira/ffmpeg-libav-tutorial)
- [Applying OpenGL Shaders with FFmpeg](https://nervous.io/ffmpeg/opengl/2017/01/31/ffmpeg-opengl) - And [follow-up](https://nervous.io/ffmpeg/opengl/2017/05/15/ffmpeg-pbo-yuv).


## Community

- [Stack Overflow](https://superuser.com/questions/tagged/ffmpeg)
- [Mailing Lists](https://www.ffmpeg.org/contact.html#MailingLists)
- [IRC](https://www.ffmpeg.org/contact.html#IRCChannels)


## Contribute

Contributions welcome! Please read the [contributing guideline](contributing.md) first.


## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](http://creativecommons.org/publicdomain/zero/1.0)

To the extent possible under law, [Travis Fischer](https://github.com/transitive-bullshit) has waived all copyright and related or neighboring rights to this work.

Support my OSS work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
