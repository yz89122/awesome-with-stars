# Quick Look plugins [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> List of useful [Quick Look](https://en.wikipedia.org/wiki/Quick_Look) plugins for developers

## Install

### Using [Homebrew](https://brew.sh)

- Run `brew install <package>`

#### Install all

```
brew install qlcolorcode qlstephen qlmarkdown quicklook-json qlimagesize suspicious-package apparency quicklookase qlvideo
```

##### Catalina notes

To get plugins working in Catalina, you will need to remove the quarantine attribute.

Run this to see the attributes:

```
xattr -r ~/Library/QuickLook
```

And run this to remove the attributes:

```
xattr -d -r com.apple.quarantine ~/Library/QuickLook
```

### Manually

- Click "download manually"
- Move the downloaded .qlgenerator file to `~/Library/QuickLook`
- Run `qlmanage -r`

## Plugins

### [QLColorCode ![GitHub Repo Stars](https://img.shields.io/github/stars/anthonygelibert/QLColorCode) ![GitHub last commit](https://img.shields.io/github/last-commit/anthonygelibert/QLColorCode)](https://github.com/anthonygelibert/QLColorCode)

> Preview source code files with syntax highlighting

Run `brew install qlcolorcode` or [download manually ![GitHub Repo Stars](https://img.shields.io/github/stars/anthonygelibert/QLColorCode) ![GitHub last commit](https://img.shields.io/github/last-commit/anthonygelibert/QLColorCode)](https://github.com/anthonygelibert/QLColorCode/releases/latest)

[![ ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/quick-look-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/quick-look-plugins)](https://github.com/sindresorhus/quick-look-plugins/raw/main/screenshots/QLColorCode.png)](https://github.com/anthonygelibert/QLColorCode)

### [QLStephen ![GitHub Repo Stars](https://img.shields.io/github/stars/whomwah/qlstephen) ![GitHub last commit](https://img.shields.io/github/last-commit/whomwah/qlstephen)](https://github.com/whomwah/qlstephen)

> Preview plain text files without or with unknown file extension. Example: README, CHANGELOG, index.styl, etc.

Run `brew install qlstephen` or [download manually ![GitHub Repo Stars](https://img.shields.io/github/stars/whomwah/qlstephen) ![GitHub last commit](https://img.shields.io/github/last-commit/whomwah/qlstephen)](https://github.com/whomwah/qlstephen/releases/latest)

[![ ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/quick-look-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/quick-look-plugins)](https://github.com/sindresorhus/quick-look-plugins/raw/main/screenshots/QLStephen.png)](https://github.com/whomwah/qlstephen)

### [QLMarkdown ![GitHub Repo Stars](https://img.shields.io/github/stars/toland/qlmarkdown) ![GitHub last commit](https://img.shields.io/github/last-commit/toland/qlmarkdown)](https://github.com/toland/qlmarkdown)

> Preview Markdown files

Run `brew install qlmarkdown` or [download manually ![GitHub Repo Stars](https://img.shields.io/github/stars/downloads/toland) ![GitHub last commit](https://img.shields.io/github/last-commit/downloads/toland)](https://github.com/downloads/toland/qlmarkdown/QLMarkdown-1.3.zip)

[![ ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/quick-look-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/quick-look-plugins)](https://github.com/sindresorhus/quick-look-plugins/raw/main/screenshots/QLMarkdown.png)](https://github.com/toland/qlmarkdown)

### [QuickLookJSON](http://www.sagtau.com/quicklookjson.html)

> Preview JSON files

Run `brew install quicklook-json` or [download manually](http://www.sagtau.com/media/QuickLookJSON.qlgenerator.zip)

[![ ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/quick-look-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/quick-look-plugins)](https://github.com/sindresorhus/quick-look-plugins/raw/main/screenshots/QuickLookJSON.png)](http://www.sagtau.com/quicklookjson.html)

### [BetterZipQL](https://macitbetter.com/downloads/)

> Preview archives

> Note: The BetterZipQL plugin was integrated with the BetterZip app.

Run `brew install betterzip` to install the BetterZip app and its Quick Look plugin or [download manually](https://macitbetter.com/BetterZip.zip)

The legacy BetterZipQL plugin can be [downloaded here](https://macitbetter.com/dl/BetterZipQL-1.5.zip).

[![ ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/quick-look-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/quick-look-plugins)](https://github.com/sindresorhus/quick-look-plugins/raw/main/screenshots/BetterZipQL.png)](https://macitbetter.com/BetterZip-Quick-Look-Generator/)

### [qlImageSize ![GitHub Repo Stars](https://img.shields.io/github/stars/Nyx0uf/qlImageSize) ![GitHub last commit](https://img.shields.io/github/last-commit/Nyx0uf/qlImageSize)](https://github.com/Nyx0uf/qlImageSize)

> Display image size and resolution

Run `brew install qlimagesize` or [download manually ![GitHub Repo Stars](https://img.shields.io/github/stars/Nyx0uf/qlImageSize) ![GitHub last commit](https://img.shields.io/github/last-commit/Nyx0uf/qlImageSize)](https://github.com/Nyx0uf/qlImageSize#installation)

[![ ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/quick-look-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/quick-look-plugins)](https://github.com/sindresorhus/quick-look-plugins/raw/main/screenshots/qlImageSize.png)](https://github.com/Nyx0uf/qlImageSize)

### [Suspicious Package](https://www.mothersruin.com/software/SuspiciousPackage/)

> Preview the contents of a standard Apple installer package

Run `brew install suspicious-package` or [download manually](https://www.mothersruin.com/software/downloads/SuspiciousPackage.xip)

[![ ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/quick-look-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/quick-look-plugins)](https://github.com/sindresorhus/quick-look-plugins/raw/main/screenshots/SuspiciousPackage.png)](https://www.mothersruin.com/software/SuspiciousPackage/)

### [Apparency](https://www.mothersruin.com/software/Apparency/)

> Preview the contents of a macOS app

Run `brew install apparency` or [download manually](https://mothersruin.com/software/downloads/Apparency.dmg)

[![ ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/quick-look-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/quick-look-plugins)](https://github.com/sindresorhus/quick-look-plugins/raw/main/screenshots/Apparency.png)](https://mothersruin.com/software/Apparency/)

### [QuickLookASE ![GitHub Repo Stars](https://img.shields.io/github/stars/rsodre/QuickLookASE) ![GitHub last commit](https://img.shields.io/github/last-commit/rsodre/QuickLookASE)](https://github.com/rsodre/QuickLookASE)

> Preview Adobe ASE Color Swatches generated with Adobe Photoshop, Adobe Illustrator, [Adobe Color CC](https://color.adobe.com), [Spectrum](http://www.eigenlogik.com/spectrum/mac), [COLOURlovers](https://www.colourlovers.com), [Prisma](http://www.codeadventure.com), among many others.

Run `brew install quicklookase` or [download manually ![GitHub Repo Stars](https://img.shields.io/github/stars/rsodre/QuickLookASE) ![GitHub last commit](https://img.shields.io/github/last-commit/rsodre/QuickLookASE)](https://github.com/rsodre/QuickLookASE/releases/latest)

[![ ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/quick-look-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/quick-look-plugins)](https://github.com/sindresorhus/quick-look-plugins/raw/main/screenshots/QuickLookASE.png)](https://github.com/rsodre/QuickLookASE)

### [QLVideo ![GitHub Repo Stars](https://img.shields.io/github/stars/Marginal/QLVideo) ![GitHub last commit](https://img.shields.io/github/last-commit/Marginal/QLVideo)](https://github.com/Marginal/QLVideo)

> Preview most types of video files, as well as their thumbnails, cover art and metadata

Run `brew install qlvideo` or [download manually ![GitHub Repo Stars](https://img.shields.io/github/stars/Marginal/QLVideo) ![GitHub last commit](https://img.shields.io/github/last-commit/Marginal/QLVideo)](https://github.com/Marginal/QLVideo/releases/latest)

[![ ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/quick-look-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/quick-look-plugins)](https://github.com/sindresorhus/quick-look-plugins/raw/main/screenshots/QLVideo.png)](https://github.com/Marginal/QLVideo)

## More

*These are not included in [Install all](#install-all).*

### [Peek](https://bigzlabs.com/peek) 💰

> Peek allows you to copy and find text, jump to line numbers, render Github-flavored Markdown with a generated table of contents, restore scroll positions, highlight syntax, & more in the Quick Look previews of over 300 file extensions.

Purchase on the [Mac App Store](https://apps.apple.com/app/peek-quick-look-extension/id1554235898)

[![ ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/quick-look-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/quick-look-plugins)](https://github.com/sindresorhus/quick-look-plugins/raw/main/screenshots/Peek.png)](https://bigzlabs.com/peek)

### [ProvisionQL ![GitHub Repo Stars](https://img.shields.io/github/stars/ealeksandrov/ProvisionQL) ![GitHub last commit](https://img.shields.io/github/last-commit/ealeksandrov/ProvisionQL)](https://github.com/ealeksandrov/ProvisionQL)

> Preview iOS / macOS app and provision information

Run `brew install provisionql` or [download manually ![GitHub Repo Stars](https://img.shields.io/github/stars/ealeksandrov/ProvisionQL) ![GitHub last commit](https://img.shields.io/github/last-commit/ealeksandrov/ProvisionQL)](https://github.com/ealeksandrov/ProvisionQL/releases/latest)

[![ ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/quick-look-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/quick-look-plugins)](https://github.com/sindresorhus/quick-look-plugins/raw/main/screenshots/ProvisionQL.png)](https://github.com/ealeksandrov/ProvisionQL)

### [QuickLookAPK ![GitHub Repo Stars](https://img.shields.io/github/stars/hezi/QuickLookAPK) ![GitHub last commit](https://img.shields.io/github/last-commit/hezi/QuickLookAPK)](https://github.com/hezi/QuickLookAPK)

> Preview Android APK files

Run `brew install quicklookapk` or [download manually ![GitHub Repo Stars](https://img.shields.io/github/stars/hezi/QuickLookAPK) ![GitHub last commit](https://img.shields.io/github/last-commit/hezi/QuickLookAPK)](https://github.com/hezi/QuickLookAPK/blob/master/QuickLookAPK.qlgenerator.zip)

[![ ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/quick-look-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/quick-look-plugins)](https://github.com/sindresorhus/quick-look-plugins/raw/main/screenshots/QuickLookAPK.png)](https://github.com/hezi/QuickLookAPK)

### [quicklook-pat ![GitHub Repo Stars](https://img.shields.io/github/stars/pixelrowdies/quicklook-pat) ![GitHub last commit](https://img.shields.io/github/last-commit/pixelrowdies/quicklook-pat)](https://github.com/pixelrowdies/quicklook-pat)

> Preview Adobe Photoshop pattern files

Run `brew install quicklook-pat` or [download manually ![GitHub Repo Stars](https://img.shields.io/github/stars/pixelrowdies/quicklook-pat) ![GitHub last commit](https://img.shields.io/github/last-commit/pixelrowdies/quicklook-pat)](https://github.com/pixelrowdies/quicklook-pat/releases)

[![ ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/quick-look-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/quick-look-plugins)](https://github.com/sindresorhus/quick-look-plugins/raw/main/screenshots/quicklook-pat.png)](https://github.com/pixelrowdies/quicklook-pat)

### [WebP ![GitHub Repo Stars](https://img.shields.io/github/stars/dchest/webp-quicklook) ![GitHub last commit](https://img.shields.io/github/last-commit/dchest/webp-quicklook)](https://github.com/dchest/webp-quicklook)

> Preview WebP images

> NOTE: This is already covered by `qlImageSize`, so this plugin is listed here only in case you do not like `qlImageSize`.

Run `brew install webpquicklook` or [download manually ![GitHub Repo Stars](https://img.shields.io/github/stars/dchest/webp-quicklook) ![GitHub last commit](https://img.shields.io/github/last-commit/dchest/webp-quicklook)](https://github.com/dchest/webp-quicklook/releases/latest)

[![ ![GitHub Repo Stars](https://img.shields.io/github/stars/sindresorhus/quick-look-plugins) ![GitHub last commit](https://img.shields.io/github/last-commit/sindresorhus/quick-look-plugins)](https://github.com/sindresorhus/quick-look-plugins/raw/main/screenshots/WebP.png)](https://github.com/dchest/webp-quicklook)

### [SourceCodeSyntaxHighlight ![GitHub Repo Stars](https://img.shields.io/github/stars/sbarex/SourceCodeSyntaxHighlight) ![GitHub last commit](https://img.shields.io/github/last-commit/sbarex/SourceCodeSyntaxHighlight)](https://github.com/sbarex/SourceCodeSyntaxHighlight)

> Preview many different source code files

Run `brew install --cask --no-quarantine syntax-highlight` or [download manually ![GitHub Repo Stars](https://img.shields.io/github/stars/sbarex/SourceCodeSyntaxHighlight) ![GitHub last commit](https://img.shields.io/github/last-commit/sbarex/SourceCodeSyntaxHighlight)](https://github.com/sbarex/SourceCodeSyntaxHighlight/releases/latest)

[![](https://user-images.githubusercontent.com/8471055/118415204-5f53fc80-b6a9-11eb-93d8-b88c442c5744.png)](https://github.com/sbarex/SourceCodeSyntaxHighlight)

**Note:** This might overwrite some other Quick Look plugins.

## License

[![CC0](https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, [Sindre Sorhus](https://sindresorhus.com) has waived all copyright and related or neighboring rights to this work.
