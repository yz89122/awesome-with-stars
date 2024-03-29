// TODO: rewrite with TS

const http = require('http');
const https = require('https');
const path = require('path');
const fs = require('fs/promises');

if (process.argv.length < 3) {
  console.error('output directory not specified');
  console.error(
    `Usage: ${process.argv[0]} ${process.argv[1]} <output_directory>`
  );
  return process.exit(1);
}
const outputDir = process.argv[2];
const listsDirName = 'lists';
const listsDir = path.join(outputDir, listsDirName);

const rootRepo = {
  owner: 'sindresorhus',
  name: 'awesome',
};

/** @type {(options: https.RequestOptions) => Promise<http.IncomingMessage>} */
const request = (options) => {
  return new Promise((resolve, reject) => {
    // use native https.request in order to make this script dependency-less
    const req = https.request(
      {
        headers: { 'user-agent': 'node' },
        ...options,
      },
      (res) => {
        res.data = Buffer.alloc(0);
        res.on('data', (chunk) => (res.data += chunk));
        res.on('end', () => resolve(res));
      }
    );
    req.on('error', reject);
    req.end();
  });
};

/**
 * @param {string[][]} components
 * @return {string[]}
 */
const combination = (components) => {
  if (components.length < 1) {
    return [];
  }
  /** @type {string[]} */
  const result = [];
  /**
   * @param {string} prefix
   * @param {number} index
   */
  const recurse = (prefix, index) => {
    if (index >= components.length) {
      result.push(prefix);
      return;
    }
    for (const element of components[index]) {
      recurse(prefix+element, index+1)
    }
  };
  recurse('', 0)
  return result;
};

const readmeCombination = combination([['', 'docs/'], ['README', 'readme', 'Readme'], ['.md', '.MD']]);

/**
 * @param {{ owner: string, name: string, branch: string? }}
 * @return {Promise<{ owner: string, name: string, branch: string, filename: string, markdown: string }>}
 */
const getReadme = async ({ owner, name, branch = null }) => {
  if (!branch) {
    try {
      // If the default branch is main, request on branch master
      // will get the result, the opposite is not.
      // So we try on branch main first to get the correct branch name.
      return await getReadme({ owner, name, branch: 'main' });
    } catch {
      return await getReadme({ owner, name, branch: 'master' });
    }
  }
  for (const filename of readmeCombination) {
    try {
      const { data, statusCode } = await request({
        hostname: 'raw.githubusercontent.com',
        path: `/${owner}/${name}/${branch}/${filename}`,
      });
      if (statusCode != 200) continue;
      return { owner, name, branch, filename, markdown: data.toString() };
    } catch {}
  }
  throw new Error('README.md not found');
};

/** @param {{ owner: string, name: string, branch: string, filename: string, markdown: string }} */
const wrapReadmeObject = ({ owner, name, branch, filename, markdown }) => ({
  owner,
  name,
  branch,
  filename,
  markdown,
  fix() {
    this.markdown = this.markdown.replace(/^---\n/s, '---\n---\n');
    return this;
  },
  replaceHtmlImage() {
    this.markdown = this.markdown.replace(
      // best effort matching
      /(<img\s+.*?src\s*=\s*(('|")?))([^\s>]+|.*?)(\2.*?\/?>)/gi,
      (match, g1, g2, g3, g4, g5) =>
        g4 ? `${g1}${this.getResourceAbsoluteURL(g4)}${g5}` : match
    );
    return this;
  },
  replaceMarkdownImage() {
    this.markdown = this.markdown.replace(
      // syntax: ![alt](src "title")
      /(!\[(?:[^\\\]]|\\.)*?\]\(\s*)([^\s]*?)(\s*(\s((["'])(?:[^\6\\]|\\.)*?\6|\((?:[^\\)]|\\.)*?\)))?\))/gi,
      (match, g1, g2, g3) =>
        g2 ? `${g1}${this.getResourceAbsoluteURL(g2)}${g3}` : match
    );
    this.markdown = this.markdown.replace(
      // syntax: [key]: href "title"
      /(\[(?:[^\\\]]|\\.)*?\]:\s)([^\s]*)/gi,
      (match, g1, g2) =>
        g2 ? `${g1}${this.getResourceAbsoluteURL(g2)}` : match
    );
    return this;
  },
  addGithubBadges() {
    this.markdown = this.markdown.replace(
      // syntax: [text](href "title")
      /(?<!!)(\[(?:[^\\\]]|\\.)*?)(\]\((((https?:)?\/\/)?github\.com\/([^\s\/?#)]+?)\/([^\s\/?#)]+)([^\s)]*?))\s*(\s((["'])(?:[^\11\\]|\\.)*?\11|\((?:[^\\)]|\\.)*?\)))?\))/gi,
      "$1 ![GitHub Repo Stars](https://img.shields.io/github/stars/$6/$7) ![GitHub last commit](https://img.shields.io/github/last-commit/$6/$7)$2"
    );
    return this;
  },
  /** @type {(src: string) => string)} */
  getResourceAbsoluteURL(src) {
    const url = new URL(src, "protocol://hostname");
    if (url.hostname != "hostname") return src;
    return new URL(
      url.pathname.replace(
        /^\/*/,
        `https://github.com/${this.owner}/${this.name}/raw/${this.branch}/`
      )
    ).href;
  },
});

(async () => {
  try {
    await fs.mkdir(outputDir, { recursive: true });
    const rootReadme = wrapReadmeObject(await getReadme(rootRepo));
    const repositories = Array.from(
      rootReadme.markdown.matchAll(
        /(?<!!)(\[(?:[^\\\]]|\\.)*?)(\]\((((https?:)?\/\/)?github\.com\/((?!topics)[^\s\/?#)]+?)\/([^\s\/?#)]+)([^\s)]*?))\s*(\s((["'])(?:[^\11\\]|\\.)*?\11|\((?:[^\\)]|\\.)*?\)))?\))/gi
      ),
      (match) => ({ owner: match[6], name: match[7] })
    );

    await fs.writeFile(
      `${outputDir}/README.md`,
      rootReadme
        .replaceHtmlImage()
        .replaceMarkdownImage()
        .markdown
        .replace(
          /(?<!!)(\[(?:[^\\\]]|\\.)*?)(\]\((((https?:)?\/\/)?github\.com\/((?!topics)[^\s\/?#)]+?)\/([^\s\/?#)]+)([^\s)]*?))\s*(\s((["'])(?:[^\11\\]|\\.)*?\11|\((?:[^\\)]|\\.)*?\)))?\))/gi,
          `$1 ![GitHub Repo Stars](https://img.shields.io/github/stars/$6/$7) ![GitHub last commit](https://img.shields.io/github/last-commit/$6/$7)](./${listsDirName}/$6-$7.md) [*Origin*]($3)`
        )
    );
    console.log("README.md");

    console.log(`${repositories.length} awesome repositories`);

    await fs.mkdir(listsDir, { recursive: true });

    await Promise.all(
      repositories.map(async (repository) => {
        try {
          await fs.writeFile(
            `${listsDir}/${repository.owner}-${repository.name}.md`,
            wrapReadmeObject(await getReadme(repository))
              .fix()
              .replaceHtmlImage()
              .replaceMarkdownImage()
              .addGithubBadges().markdown
          );
          console.log(`${repository.owner}-${repository.name}.md`);
        } catch (err) {
          return console.error(
            `failed to get README.md of ${repository.owner}/${repository.name}: ${err}`
          );
        }
      })
    );
  } catch (err) {
    console.error(err);
  }
})();
