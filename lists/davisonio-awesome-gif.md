# Awesome GIF [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

> A curated list of awesome [GIF](https://en.wikipedia.org/wiki/GIF) resources.

A list of tools, scripts, libraries, examples & other resources related to the Graphics Interchange Format (GIF).

## Contents

<!--lint disable awesome-toc-->
- [General Tools](#general-tools)
- [Utilities](#utilities)
- [Libraries](#libraries)
	- [ActionScript](#actionscript)
	- [C++](#c)
	- [C#](#c-sharp)
	- [Haxe](#haxe)
	- [Java](#java)
	- [JavaScript](#javascript)
	- [PHP](#php)
	- [Objective-C](#objective-c)
	- [Swift](#swift)
- [GUI](#gui)
- [Hosting](#hosting)
- [Online Tools](#online-tools)
- [Community](#community)
- [Scripts](#scripts)
	- [Frames to GIF](#frames-to-gif)
	- [GIF to frames](#gif-to-frames)
	- [High quality GIF](#high-quality-gif)
	- [Optimize GIF](#optimize-gif)
	- [Lossy GIF Compressor](#lossy-gif-compressor)
	- [Making GIF from video](#making-gif-from-video)
	- [Cinemagraphs](#cinemagraphs)
	- [Perfect loop](#perfect-loop)
	- [YouTube video to GIF](#youtube-video-to-gif)
	- [Grabbing each frame of an HTML5 canvas](#grabbing-each-frame-of-an-html5-canvas)
- [Miscellaneous](#miscellaneous)

## General Tools

- [FFmpeg](https://www.ffmpeg.org)
- [ImageMagick](http://www.imagemagick.org/script/index.php)
- [GraphicsMagick](http://www.graphicsmagick.org/) - GraphicsMagick is usually faster than ImageMagick.
- [MoviePy](https://zulko.github.io/moviepy/) - Python module for video editing.

## Utilities

- [Gifgen ![GitHub Repo Stars](https://img.shields.io/github/stars/lukechilds/gifgen) ![GitHub last commit](https://img.shields.io/github/last-commit/lukechilds/gifgen)](https://github.com/lukechilds/gifgen) - Simple high quality GIF encoding.
- [Gifify ![GitHub Repo Stars](https://img.shields.io/github/stars/jclem/gifify) ![GitHub last commit](https://img.shields.io/github/last-commit/jclem/gifify)](https://github.com/jclem/gifify) - Convert screen recording into GIF.
- [Gifs ![GitHub Repo Stars](https://img.shields.io/github/stars/jglovier/gifs) ![GitHub last commit](https://img.shields.io/github/last-commit/jglovier/gifs)](https://github.com/jglovier/gifs) - Storage place for GIFs.
- [Gifshot ![GitHub Repo Stars](https://img.shields.io/github/stars/yahoo/gifshot) ![GitHub last commit](https://img.shields.io/github/last-commit/yahoo/gifshot)](https://github.com/yahoo/gifshot) - Create animated GIFs from media by Yahoo. ([demo](http://yahoo.github.io/gifshot/))
- [Gifsockets ![GitHub Repo Stars](https://img.shields.io/github/stars/videlalvaro/gifsockets) ![GitHub last commit](https://img.shields.io/github/last-commit/videlalvaro/gifsockets)](https://github.com/videlalvaro/gifsockets) - Real Time communication library using Animated GIFs as a transport.
- [X-gif ![GitHub Repo Stars](https://img.shields.io/github/stars/geelen/x-gif) ![GitHub last commit](https://img.shields.io/github/last-commit/geelen/x-gif)](https://github.com/geelen/x-gif) - A web component for flexible GIF playback.
- [GifW00t ![GitHub Repo Stars](https://img.shields.io/github/stars/yaronn/GifW00t) ![GitHub last commit](https://img.shields.io/github/last-commit/yaronn/GifW00t)](https://github.com/yaronn/GifW00t) - JavaScript web recorder.
- [gif-machine ![GitHub Repo Stars](https://img.shields.io/github/stars/lelandbatey/gif-machine) ![GitHub last commit](https://img.shields.io/github/last-commit/lelandbatey/gif-machine)](https://github.com/lelandbatey/gif-machine) - GIF creation from YouTube videos.
- [gifstreaming ![GitHub Repo Stars](https://img.shields.io/github/stars/jbochi/gifstreaming) ![GitHub last commit](https://img.shields.io/github/last-commit/jbochi/gifstreaming)](https://github.com/jbochi/gifstreaming) - Live video streaming server.
- [Screengif ![GitHub Repo Stars](https://img.shields.io/github/stars/dergachev/screengif) ![GitHub last commit](https://img.shields.io/github/last-commit/dergachev/screengif)](https://github.com/dergachev/screengif) - Create animated GIF screencasts.
- [vnc-over-gif ![GitHub Repo Stars](https://img.shields.io/github/stars/sidorares/vnc-over-gif) ![GitHub last commit](https://img.shields.io/github/last-commit/sidorares/vnc-over-gif)](https://github.com/sidorares/vnc-over-gif) - Serves screen updates as animated GIF over http.
- [gifdeck ![GitHub Repo Stars](https://img.shields.io/github/stars/jaipandya/gifdeck) ![GitHub last commit](https://img.shields.io/github/last-commit/jaipandya/gifdeck)](https://github.com/jaipandya/gifdeck) - Convert your SlideShares into animated GIFs.
- [Gifbot ![GitHub Repo Stars](https://img.shields.io/github/stars/schuyler/gifbot) ![GitHub last commit](https://img.shields.io/github/last-commit/schuyler/gifbot)](https://github.com/schuyler/gifbot) - GIF search for Slack.
- [Gif-camera ![GitHub Repo Stars](https://img.shields.io/github/stars/FuzzyWobble/GIF-Camera) ![GitHub last commit](https://img.shields.io/github/last-commit/FuzzyWobble/GIF-Camera)](https://github.com/FuzzyWobble/GIF-Camera) - Create animated GIFs using webcam.
- [Gifline ![GitHub Repo Stars](https://img.shields.io/github/stars/zehfernandes/gifline) ![GitHub last commit](https://img.shields.io/github/last-commit/zehfernandes/gifline)](https://github.com/zehfernandes/gifline) - Chrome extension to put GIFs in your emails.
- [Gifdrop ![GitHub Repo Stars](https://img.shields.io/github/stars/markjaquith/gifdrop) ![GitHub last commit](https://img.shields.io/github/last-commit/markjaquith/gifdrop)](https://github.com/markjaquith/gifdrop) - Create a repository for your collection of GIF images.
- [Gh-gif ![GitHub Repo Stars](https://img.shields.io/github/stars/node-gh/gh-gif) ![GitHub last commit](https://img.shields.io/github/last-commit/node-gh/gh-gif)](https://github.com/node-gh/gh-gif) - NodeGH plugin for commenting on pull requests/issues using GIF reactions.
- [Tty2gif ![GitHub Repo Stars](https://img.shields.io/github/stars/z24/tty2gif) ![GitHub last commit](https://img.shields.io/github/last-commit/z24/tty2gif)](https://github.com/z24/tty2gif) - Record scripts and their outputs into both binary and GIF formats.
- [Giftoppr ![GitHub Repo Stars](https://img.shields.io/github/stars/desktoppr/giftoppr) ![GitHub last commit](https://img.shields.io/github/last-commit/desktoppr/giftoppr)](https://github.com/desktoppr/giftoppr) - Sync your favourite GIFs with Dropbox.
- [Gifit ![GitHub Repo Stars](https://img.shields.io/github/stars/Fauntleroy/GIFit) ![GitHub last commit](https://img.shields.io/github/last-commit/Fauntleroy/GIFit)](https://github.com/Fauntleroy/GIFit) - Chrome extension to make a GIF from a YouTube video.
- [Ccapture.js ![GitHub Repo Stars](https://img.shields.io/github/stars/spite/ccapture.js) ![GitHub last commit](https://img.shields.io/github/last-commit/spite/ccapture.js)](https://github.com/spite/ccapture.js) - Capture animations created with HTML5 canvas.
- [Kap](https://getkap.co/) - Beautiful open-source app to capture your screen and export to GIF.
- [Gifit (the other one) ![GitHub Repo Stars](https://img.shields.io/github/stars/rotblauer/gifit) ![GitHub last commit](https://img.shields.io/github/last-commit/rotblauer/gifit)](https://github.com/rotblauer/gifit) - Get a search resulting giphy GIF in markdown in stdout, ala `$ gifit kittens`.
- [gifski ![GitHub Repo Stars](https://img.shields.io/github/stars/ImageOptim/gifski) ![GitHub last commit](https://img.shields.io/github/last-commit/ImageOptim/gifski)](https://github.com/ImageOptim/gifski) - High-quality GIF encoder based on libimagequant.
- [Gifcurry ![GitHub Repo Stars](https://img.shields.io/github/stars/lettier/gifcurry) ![GitHub last commit](https://img.shields.io/github/last-commit/lettier/gifcurry)](https://github.com/lettier/gifcurry) - Open-source, Haskell-built editor for GIF makers.

## Libraries

### ActionScript

- [Flash Animated GIF Library ![GitHub Repo Stars](https://img.shields.io/github/stars/theturtle32/Flash-Animated-GIF-Library) ![GitHub last commit](https://img.shields.io/github/last-commit/theturtle32/Flash-Animated-GIF-Library)](https://github.com/theturtle32/Flash-Animated-GIF-Library) - AS3 library for playing Animated GIFs in Flash.

### C++

- [Node-gif ![GitHub Repo Stars](https://img.shields.io/github/stars/pkrumins/node-gif) ![GitHub last commit](https://img.shields.io/github/last-commit/pkrumins/node-gif)](https://github.com/pkrumins/node-gif) - C++ library to make GIF.
- [Gif-h ![GitHub Repo Stars](https://img.shields.io/github/stars/charlietangora/gif-h) ![GitHub last commit](https://img.shields.io/github/last-commit/charlietangora/gif-h)](https://github.com/charlietangora/gif-h) - C++ one-header library for the creation of animated GIFs.
- [msf_gif ![GitHub Repo Stars](https://img.shields.io/github/stars/notnullnotvoid/msf_gif) ![GitHub last commit](https://img.shields.io/github/last-commit/notnullnotvoid/msf_gif)](https://github.com/notnullnotvoid/msf_gif) - C/C++ single-header library for creating animated GIFs.

<h3 id="c-sharp">C#</h2>

- [dot-screencap ![GitHub Repo Stars](https://img.shields.io/github/stars/Speiser/dot-screencap) ![GitHub last commit](https://img.shields.io/github/last-commit/Speiser/dot-screencap)](https://github.com/Speiser/dot-screencap) - A simple libary to record your screen and save it as animated GIF.
- [WpfAnimatedGif ![GitHub Repo Stars](https://img.shields.io/github/stars/XamlAnimatedGif/WpfAnimatedGif) ![GitHub last commit](https://img.shields.io/github/last-commit/XamlAnimatedGif/WpfAnimatedGif)](https://github.com/XamlAnimatedGif/WpfAnimatedGif) - A simple library to display animated GIF images in WPF.
- [XamlAnimatedGif ![GitHub Repo Stars](https://img.shields.io/github/stars/XamlAnimatedGif/XamlAnimatedGif) ![GitHub last commit](https://img.shields.io/github/last-commit/XamlAnimatedGif/XamlAnimatedGif)](https://github.com/XamlAnimatedGif/XamlAnimatedGif) - A simple library to display animated GIF images in XAML apps (WPF, WinRT, Windows Phone).
- [AnimatedGif ![GitHub Repo Stars](https://img.shields.io/github/stars/mrousavy/AnimatedGif) ![GitHub last commit](https://img.shields.io/github/last-commit/mrousavy/AnimatedGif)](https://github.com/mrousavy/AnimatedGif) - A high performance .NET library for reading and creating animated GIFs.

### Haxe

- [Gif ![GitHub Repo Stars](https://img.shields.io/github/stars/snowkit/gif) ![GitHub last commit](https://img.shields.io/github/last-commit/snowkit/gif)](https://github.com/snowkit/gif) - Haxe GIF encoder.

### Java

- [Android-gif-drawable ![GitHub Repo Stars](https://img.shields.io/github/stars/koral--/android-gif-drawable) ![GitHub last commit](https://img.shields.io/github/last-commit/koral--/android-gif-drawable)](https://github.com/koral--/android-gif-drawable) - Views and Drawable for displaying animated GIFs on Android.
- [gifanimateddrawable ![GitHub Repo Stars](https://img.shields.io/github/stars/Hipmob/gifanimateddrawable) ![GitHub last commit](https://img.shields.io/github/last-commit/Hipmob/gifanimateddrawable)](https://github.com/Hipmob/gifanimateddrawable) - Use an animated GIF as an Android Drawable.
- [GifView ![GitHub Repo Stars](https://img.shields.io/github/stars/RoiSoleil/GifView) ![GitHub last commit](https://img.shields.io/github/last-commit/RoiSoleil/GifView)](https://github.com/RoiSoleil/GifView) - Android library to deal with GIF.
- [Gif Movie View ![GitHub Repo Stars](https://img.shields.io/github/stars/sbakhtiarov/gif-movie-view) ![GitHub last commit](https://img.shields.io/github/last-commit/sbakhtiarov/gif-movie-view)](https://github.com/sbakhtiarov/gif-movie-view) - Android View widget for displaying GIF animations.
- [GifImageView ![GitHub Repo Stars](https://img.shields.io/github/stars/felipecsl/GifImageView) ![GitHub last commit](https://img.shields.io/github/last-commit/felipecsl/GifImageView)](https://github.com/felipecsl/GifImageView) - Android ImageView that handles animated GIF images.
- [Gif-animation ![GitHub Repo Stars](https://img.shields.io/github/stars/extrapixel/gif-animation) ![GitHub last commit](https://img.shields.io/github/last-commit/extrapixel/gif-animation)](https://github.com/extrapixel/gif-animation) - Processing library to play and export GIF.
- [Android-gif-encoder ![GitHub Repo Stars](https://img.shields.io/github/stars/nbadal/android-gif-encoder) ![GitHub last commit](https://img.shields.io/github/last-commit/nbadal/android-gif-encoder)](https://github.com/nbadal/android-gif-encoder) - Animated GIF encoder for Android.
- [GIFDroid ![GitHub Repo Stars](https://img.shields.io/github/stars/curtislarson/GIFDroid) ![GitHub last commit](https://img.shields.io/github/last-commit/curtislarson/GIFDroid)](https://github.com/curtislarson/GIFDroid) - Android video to GIF converter.
- [Android-GifStitch ![GitHub Repo Stars](https://img.shields.io/github/stars/CaptPhunkosis/Android-GifStitch) ![GitHub last commit](https://img.shields.io/github/last-commit/CaptPhunkosis/Android-GifStitch)](https://github.com/CaptPhunkosis/Android-GifStitch) - Create and share animated GIFs.

### JavaScript

- [Gif.js ![GitHub Repo Stars](https://img.shields.io/github/stars/jnordberg/gif.js) ![GitHub last commit](https://img.shields.io/github/last-commit/jnordberg/gif.js)](https://github.com/jnordberg/gif.js) - Create GIF from the DOM.
- [Omggif ![GitHub Repo Stars](https://img.shields.io/github/stars/deanm/omggif) ![GitHub last commit](https://img.shields.io/github/last-commit/deanm/omggif)](https://github.com/deanm/omggif) - GIF 89a encoder and decoder.
- [Animated_GIF ![GitHub Repo Stars](https://img.shields.io/github/stars/sole/Animated_GIF) ![GitHub last commit](https://img.shields.io/github/last-commit/sole/Animated_GIF)](https://github.com/sole/Animated_GIF) - JavaScript library for creating animated GIFs.
- [Gifffer ![GitHub Repo Stars](https://img.shields.io/github/stars/krasimir/gifffer) ![GitHub last commit](https://img.shields.io/github/last-commit/krasimir/gifffer)](https://github.com/krasimir/gifffer) - JavaScript library that prevents the autoplaying of the animated GIFs.
- [Gifplayer ![GitHub Repo Stars](https://img.shields.io/github/stars/rubentd/gifplayer) ![GitHub last commit](https://img.shields.io/github/last-commit/rubentd/gifplayer)](https://github.com/rubentd/gifplayer) - JQuery plugin to play and stop animated GIFs.
- [Jsgif ![GitHub Repo Stars](https://img.shields.io/github/stars/shachaf/jsgif) ![GitHub last commit](https://img.shields.io/github/last-commit/shachaf/jsgif)](https://github.com/shachaf/jsgif) - JavaScript GIF parser and player.
- [node-gify ![GitHub Repo Stars](https://img.shields.io/github/stars/tj/node-gify) ![GitHub last commit](https://img.shields.io/github/last-commit/tj/node-gify)](https://github.com/tj/node-gify) - JavaScript convert videos to GIFs using ffmpeg and gifsicle.
- [Gifencoder ![GitHub Repo Stars](https://img.shields.io/github/stars/eugeneware/gifencoder) ![GitHub last commit](https://img.shields.io/github/last-commit/eugeneware/gifencoder)](https://github.com/eugeneware/gifencoder) - Server side animated GIF generation for Node.js.
- [Gif-video ![GitHub Repo Stars](https://img.shields.io/github/stars/hughsk/gif-video) ![GitHub last commit](https://img.shields.io/github/last-commit/hughsk/gif-video)](https://github.com/hughsk/gif-video) - JavaScript Convert a GIF image into an HTML5-ready video.
- [Gif-player ![GitHub Repo Stars](https://img.shields.io/github/stars/apankrat/gif-player) ![GitHub last commit](https://img.shields.io/github/last-commit/apankrat/gif-player)](https://github.com/apankrat/gif-player) - On-demand GIF loader/player in JavaScript.
- [GifgifLab-face ![GitHub Repo Stars](https://img.shields.io/github/stars/Viral-MediaLab/gifgifLab-face) ![GitHub last commit](https://img.shields.io/github/last-commit/Viral-MediaLab/gifgifLab-face)](https://github.com/Viral-MediaLab/gifgifLab-face) - Facial-emotion detectors.
- [node-youtube ![GitHub Repo Stars](https://img.shields.io/github/stars/javascipt/node-youtube) ![GitHub last commit](https://img.shields.io/github/last-commit/javascipt/node-youtube)](https://github.com/javascipt/node-youtube) - YouTube to snapshots and GIFs.

### PHP

- [GifCreator ![GitHub Repo Stars](https://img.shields.io/github/stars/Sybio/GifCreator) ![GitHub last commit](https://img.shields.io/github/last-commit/Sybio/GifCreator)](https://github.com/Sybio/GifCreator) - PHP class that creates animated GIF from multiple images.
- [Spacer.gif ![GitHub Repo Stars](https://img.shields.io/github/stars/msng/spacer.gif) ![GitHub last commit](https://img.shields.io/github/last-commit/msng/spacer.gif)](https://github.com/msng/spacer.gif) - PHP script offering spacer.gif 1x1.
- [GifFrameExtractor ![GitHub Repo Stars](https://img.shields.io/github/stars/Sybio/GifFrameExtractor) ![GitHub last commit](https://img.shields.io/github/last-commit/Sybio/GifFrameExtractor)](https://github.com/Sybio/GifFrameExtractor) - PHP class that separates all the frames of an animated GIF.

### Objective-C

- [UIimage from GIF ![GitHub Repo Stars](https://img.shields.io/github/stars/mayoff/uiimage-from-animated-gif) ![GitHub last commit](https://img.shields.io/github/last-commit/mayoff/uiimage-from-animated-gif)](https://github.com/mayoff/uiimage-from-animated-gif) - UIImage category that loads animated GIFs.
- [GIFRefreshControl ![GitHub Repo Stars](https://img.shields.io/github/stars/cyndibaby905/GIFRefreshControl) ![GitHub last commit](https://img.shields.io/github/last-commit/cyndibaby905/GIFRefreshControl)](https://github.com/cyndibaby905/GIFRefreshControl) - "Twitter music" and "Yahoo! Weather" like pull-to-refresh control.
- [UIImageView-PlayGIF ![GitHub Repo Stars](https://img.shields.io/github/stars/yfme/UIImageView-PlayGIF) ![GitHub last commit](https://img.shields.io/github/last-commit/yfme/UIImageView-PlayGIF)](https://github.com/yfme/UIImageView-PlayGIF) - UIImageView category/subclass for playing GIF.
- [FLAnimatedImage ![GitHub Repo Stars](https://img.shields.io/github/stars/Flipboard/FLAnimatedImage) ![GitHub last commit](https://img.shields.io/github/last-commit/Flipboard/FLAnimatedImage)](https://github.com/Flipboard/FLAnimatedImage) - GIF engine for iOS by FlipBoard.
- [Animated-GIF-iPhone ![GitHub Repo Stars](https://img.shields.io/github/stars/arturogutierrez/Animated-GIF-iPhone) ![GitHub last commit](https://img.shields.io/github/last-commit/arturogutierrez/Animated-GIF-iPhone)](https://github.com/arturogutierrez/Animated-GIF-iPhone) - Support for Animated GIF on iOS.
- [UzysAnimatedGifPullToRefresh ![GitHub Repo Stars](https://img.shields.io/github/stars/uzysjung/UzysAnimatedGifPullToRefresh) ![GitHub last commit](https://img.shields.io/github/last-commit/uzysjung/UzysAnimatedGifPullToRefresh)](https://github.com/uzysjung/UzysAnimatedGifPullToRefresh) - PullToRefresh using animated GIF to any scrollView.
- [SvGifView ![GitHub Repo Stars](https://img.shields.io/github/stars/smileEvday/SvGifView) ![GitHub last commit](https://img.shields.io/github/last-commit/smileEvday/SvGifView)](https://github.com/smileEvday/SvGifView) - iOS load and display GIF.
- [GifHUD ![GitHub Repo Stars](https://img.shields.io/github/stars/cemolcay/GiFHUD) ![GitHub last commit](https://img.shields.io/github/last-commit/cemolcay/GiFHUD)](https://github.com/cemolcay/GiFHUD) - iOS progress hud for displaying only animated GIF images.
- [Video-Background GIF ![GitHub Repo Stars](https://img.shields.io/github/stars/ElvinJin/Video-Background-GIF) ![GitHub last commit](https://img.shields.io/github/last-commit/ElvinJin/Video-Background-GIF)](https://github.com/ElvinJin/Video-Background-GIF) - iOS Video Background GIF.
- [AnimatedGifExample ![GitHub Repo Stars](https://img.shields.io/github/stars/kasatani/AnimatedGifExample) ![GitHub last commit](https://img.shields.io/github/last-commit/kasatani/AnimatedGifExample)](https://github.com/kasatani/AnimatedGifExample) - iOS animated and transparent GIFs.

### Swift

- [SwiftyGif ![GitHub Repo Stars](https://img.shields.io/github/stars/kirualex/SwiftyGif) ![GitHub last commit](https://img.shields.io/github/last-commit/kirualex/SwiftyGif)](https://github.com/kirualex/SwiftyGif) - High performance & easy to use Gif engine.
- [Gifu ![GitHub Repo Stars](https://img.shields.io/github/stars/kaishin/gifu) ![GitHub last commit](https://img.shields.io/github/last-commit/kaishin/gifu)](https://github.com/kaishin/gifu) - Animated GIF support for iOS in Swift.

## GUI

- [Glyph](http://www.glyph.video/) - Tool for generating seamlessly looping GIFs and cinemagraphs from videos.
- [Qgifer](https://sourceforge.net/projects/qgifer/)
- [GifPro ![GitHub Repo Stars](https://img.shields.io/github/stars/unixpickle/GifPro) ![GitHub last commit](https://img.shields.io/github/last-commit/unixpickle/GifPro)](https://github.com/unixpickle/GifPro) - GIF encoder for Mac.

## Hosting

- [Gfycat](https://gfycat.com) - Maximum GIF/video length: 15 seconds.  Maximum file upload is 300Mb.
- [Imgur](https://imgur.com) - Maximum file upload is 50MB.

## Online Tools

- [Vid2gif](https://imgur.com/vidgif) - Video to GIF by imgur.
- [EzGif](https://ezgif.com/) - Online GIF maker and image editor.
- [Giflr](https://giflr.com/) - A web app for making or remixing animated GIFs.

## Community

- [Giphy.com](https://giphy.com)
- [/r/educationalgifs](https://www.reddit.com/r/educationalgifs/)

## Scripts

### Frames to GIF

FFmpeg
```bash
ffmpeg -f image2 -i image%d.jpg animated.gif
```

Imagemagick
```bash
convert   -delay 20   -loop 0   frames*.png   animated.gif
```
Bash script (```frames2gif.sh```) for GraphicsMagick, ImageMagick, FFmpeg
```bash
#!/bin/bash
if [ $# -ne 5 ]; then
    echo "please provide the moviename and directory where to store the frames"
    echo "./frames2gif.sh [directory] [movie.mp4] [filename.gif] [gm|im|ffmpeg] [png|jpg]"
    exit 1
fi
    if [ "png" == "$5" ]; then
        suffix="png"
    else
        suffix="jpg"
    fi

    CONVERT=$(which convert)
    GM=$(which gm)
    FFMPEG=$(which ffmpeg)
    FFPROBE=$(which ffprobe)
    FPS=$($FFPROBE -show_streams -select_streams v -i "$2"  2>/dev/null | grep "r_frame_rate" | cut -d'=' -f2 | cut -d'/' -f1)
    echo "FPS: ${FPS}"
if [ "im" == "$4" ]; then # use imagemagick
    FPS=$(echo "1 / ${FPS} * 100" |bc -l)
    $CONVERT "$1/*.${suffix}"  -delay ${FPS} -loop 0 "$3"
elif [ "gm" == "$4" ]; then # use graphicsmagick
    FPS=$(echo "1 / ${FPS} * 100" |bc -l)
    $GM convert "$1/*.${suffix}"  -delay ${FPS} -loop 0 "$3"
else # use crappy gif-algorithm from ffmpeg
    $FFMPEG -f image2 -framerate ${FPS} -i "$1/%08d.${suffix}" "$3"
fi
```
From [DeepDreamVideo ![GitHub Repo Stars](https://img.shields.io/github/stars/graphific/DeepDreamVideo) ![GitHub last commit](https://img.shields.io/github/last-commit/graphific/DeepDreamVideo)](https://github.com/graphific/DeepDreamVideo), [source ![GitHub Repo Stars](https://img.shields.io/github/stars/graphific/DeepDreamVideo) ![GitHub last commit](https://img.shields.io/github/last-commit/graphific/DeepDreamVideo)](https://github.com/graphific/DeepDreamVideo/blob/master/frames2gif.sh)


### GIF to frames

```bash
ffmpeg -i video.mpg image%d.jpg
```
```bash
convert -coalesce animated.gif image%05d.png
```

### High quality GIF

with ffmpeg / based on this [article](http://blog.pkh.me/p/21-high-quality-gif-with-ffmpeg.html)

- Generate a palette :

```bash
#!/bin/sh
start_time=30
duration=3
ffmpeg -y -ss $start_time -t $duration -i input.avi \
-vf fps=10,scale=320:-1:flags=lanczos,palettegen palette.png
```
- Output the GIF using the palette :

```bash
#!/bin/sh
start_time=30
duration=3
ffmpeg -ss $start_time -t $duration -i input.avi -i palette.png -filter_complex \
"fps=10,scale=320:-1:flags=lanczos[x];[x][1:v]paletteuse" output.gif
```

### Optimize GIF

```
convert -layers Optimize output.gif output_optimized.gif
```

### Lossy GIF Compressor

```bash
./gifsicle -O3 --lossy=80 -o lossy-compressed.gif input.gif

```
[Lossy Gif](https://kornel.ski/lossygif)


### Making GIF from video

```python
from moviepy.editor import *

clip = (VideoFileClip("input.avi")
        .subclip((4,00.00),(5,00.00))
        .resize(0.3))
clip.write_gif("output.gif")

```
<!--lint ignore double-link-->
[article](http://zulko.github.io/blog/2014/01/23/making-animated-gifs-from-video-files-with-python/#converting-a-video-excerpt-into-a-gif)

### Cinemagraphs

Freezing a region

```python
from moviepy.editor import *

clip = (VideoFileClip("input.avi")
        .subclip((4,00.00),(5,00.00))
        .resize(0.3)
        .fx(vfx.freeze_region, outside_region=(170, 230, 380, 320)))
clip.write_gif("output.gif", fps=15)
```
<!--lint ignore double-link-->
[article](http://zulko.github.io/blog/2014/01/23/making-animated-gifs-from-video-files-with-python/#freezing-a-region)

```bash
ffmpeg \
-ss ${starttime} -t ${duration} -i ${vidfile}                         `# body of loop` \
-ss TODO ${starttime} MINUS ${duration} -t ${fadetime} -i ${vidfile}  `# lead-in for crossfade` \
-loop 1 -i ${stillfile}                                               `# masked still image` \
-filter_complex "
  [0:v]setpts=PTS-STARTPTS[vid];                                      `# speed adjustment - not needed here, so noop`
  color=white,scale=3840x2160,fade=in:st=0:d=${fadetime}[alpha];      `# crossfade alpha, double length ahead of speed change`
  [1:v][alpha]alphamerge[am];                                         `# apply alpha to lead-in`
  [am]setpts=PTS+(${duration}-${fadetime})/TB[layer2];                  `# speed adjustment and offset for lead-in`
  [vid][layer2]overlay[oo];                                           `# overlay for crossfade`
  [oo][2:v]overlay=shortest=1[out1];                                  `# overlay still image`
  [out1]crop=w=${cropfactor}*iw:h=${cropfactor}*ih:y=${yoffset}*ih,scale=${outputwidth}:-1, `# crop and scale`
  eq=gamma=${gamma}:contrast=${contrast}:saturation=${saturation},unsharp                   `# final adjustments`
" -an output.mp4
```

### Perfect Loop

```python
import moviepy.editor as mp
from moviepy.video.tools.cuts import FramesMatches

clip = mp.VideoFileClip("input.avi").resize(0.3)
scenes = FramesMatches.from_clip(clip, 10, 3)

selected_scenes = scenes.select_scenes(2, 1, 4, 0.5)
selected_scenes.write_gifs(clip.resize(width=450), "./outputs_directory")

```
[article](http://zulko.github.io/blog/2015/02/01/extracting-perfectly-looping-gifs-from-videos-with-python-and-moviepy/)

### YouTube video to GIF

- Download it via youtube-dl and then convert it.

```
youtube-dl https://www.youtube.com/watch?v=V2XpsaLqXc8
```

[Youtube-dl](https://rg3.github.io/youtube-dl/)

### Grabbing each frame of an HTML5 Canvas

Using [PhantomJS](https://phantomjs.org).

Example with this [canvas](http://www.effectgames.com/demos/canvascycle/?sound=0).

```javascript
var webPage = require('webpage');
var fs = require('fs');
var page = webPage.create();

var NB_FRAME = 100;
var current = 0;

page.open('http://www.effectgames.com/demos/canvascycle/?sound=0',
function(status) {
  if (status === "success") {
      var current = 0;
      var grabber = setInterval(function () {
          var frame = page.evaluate(function() {
           return document.getElementById('mycanvas').toDataURL("image/png").split(",")[1];
          });
          fs.write("./frame-" + current + ".png",atob(frame), 'wb');
      if (++current === NB_FRAME) {
         window.clearInterval(grabber);
         phantom.exit(0);
      }
    }, 1000);
  }
});
```

## Miscellaneous

- [Why is the GIF I created so slow?](https://superuser.com/questions/569924/why-is-the-gif-i-created-so-slow/569967) - Using ImageMagick to solve problems concerning GIF speed.

## Use

The best ways to use this list are:

- By browing the [contents](#contents).
- By using <kbd>command</kbd> + <kbd>F</kbd> to search the contents

## Credits

By [Craig Davison](https://davison.io) and contributors.

Based on a [recovered list ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/awesome) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/awesome)](https://github.com/sindresorhus/awesome/issues/872) by [Ismail Baaj](https://ismailbaaj.fr).
