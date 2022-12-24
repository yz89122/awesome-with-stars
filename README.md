# [Awesome with Stars](https://yz89122.github.io/awesome-with-stars)

![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/yz89122/awesome-with-stars/main.yml?label=Update&branch=main)

See [GitHub Pages](https://yz89122.github.io/awesome-with-stars) or [branch `gh-pages`](https://github.com/yz89122/awesome-with-stars/tree/gh-pages#readme)(contents are auto-generated).

The awesome list is from [sindresorhus/awesome ![GitHub Repo stars](https://img.shields.io/github/stars/sindresorhus/awesome?style=social)](https://github.com/sindresorhus/awesome#readme).

## Too Many Requests(429) or Server Error(5xx) on some pages

It's caused by loading too many badges at once, this problem is fixed by adding [`loading=lazy`](https://web.dev/browser-level-image-lazy-loading/) on `<img>` in [GitHub Pages](https://yz89122.github.io/awesome-with-stars).

[Lazy loading](https://web.dev/browser-level-image-lazy-loading/) is not supported in all browsers. If you're seeing too many request, please check the [supported browsers](https://caniuse.com/loading-lazy-attr) and use one of them to visit [GitHub Pages](https://yz89122.github.io/awesome-with-stars)
