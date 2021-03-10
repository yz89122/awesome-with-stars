const https = require("https");
const fs = require("fs/promises");

if (process.argv.length < 3) {
  console.error("output directory not specified");
  console.error(
    `Usage: ${process.argv[0]} ${process.argv[1]} <output_directory>`
  );
  return process.exit(1);
}
const outputDir = process.argv[2];

const AWESOME = {
  owner: "sindresorhus",
  name: "awesome",
};

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
      return await getReadme({ owner, name, branch: "main" });
    } catch {
      return await getReadme({ owner, name, branch: "master" });
    }
  }
  for (const filename of [
    "readme.md",
    "README.md",
    "README.MD",
    "Readme.md",
    "readme.MD",
  ]) {
    try {
      return await new Promise(async (resolve, reject) => {
        const data = { owner, name, branch, filename };
        // use native https.request in order to make this script dependency-less
        const req = https.request(
          {
            hostname: "raw.githubusercontent.com",
            port: 443,
            path: `/${owner}/${name}/${branch}/${filename}`,
            method: "GET",
            headers: { "user-agent": "node" }, // github server required user-agent
          },
          (res) => {
            let markdown = "";
            if (res.statusCode != 200)
              return reject(
                new Error(
                  JSON.stringify({ ...data, status_code: res.statusCode })
                )
              );
            res.on("data", (chunk) => (markdown += chunk));
            res.on("end", () => resolve({ ...data, markdown }));
          }
        );
        req.on("error", (error) =>
          reject(new Error(JSON.stringify({ ...data, error })))
        );
        req.end();
      });
    } catch {}
  }
  throw new Error("README.md not found");
};

/** @param {{ owner: string, name: string, branch: string, filename: string, markdown: string }} */
const wrapReadmeObject = ({ owner, name, branch, filename, markdown }) => ({
  owner,
  name,
  branch,
  filename,
  markdown,
  replaceHtmlImage() {
    this.markdown = this.markdown.replace(
      /(<img\s+.*?)src=(('|")?)([^ \t\r\n]+|.*?)\2(.*?\/?>)/gi,
      (match, g1, g2, g3, g4, g5) =>
        g4 ? `${g1}src="${getReadmeImageAbsoluteUrl(g4, this)}"${g5}` : match
    );
    return this;
  },
  replaceMarkdownImage() {
    this.markdown = this.markdown.replace(
      /(!\[.*?\]\(\s*)(.*?)(\s*\))/gi,
      (match, g1, g2, g3) =>
        g2 ? `${g1}${getReadmeImageAbsoluteUrl(g2, this)}${g3}` : match
    );
    return this;
  },
  addGithubStarsBadges() {
    this.markdown = this.markdown.replace(
      /(?<!!)\[(.*?)\]\(((https?:\/\/)?github\.com\/([^\/]+?)\/([^\/#]+?)(#.*?)?(\/[^\/)]*)*)\)/gi,
      "[$1 ![GitHub Repo stars](https://img.shields.io/github/stars/$4/$5?style=social)]($2)"
    );
    return this;
  },
});

/** @type {( src: string, { owner: string, name: string, branch: string } ) => string} */
const getReadmeImageAbsoluteUrl = (src, { owner, name, branch }) => {
  const url = new URL(src, "protocol://hostname");
  if (url.hostname != "hostname") return src;
  return new URL(
    url.pathname.replace(
      /^\/*/,
      `https://github.com/${owner}/${name}/raw/${branch}/`
    )
  ).href;
};

(async () => {
  try {
    await fs.mkdir(outputDir, { recursive: true });
    const awesomeReadme = wrapReadmeObject(await getReadme(AWESOME));
    const awesomeRepositories = Array.from(
      awesomeReadme.markdown.matchAll(
        /(?<!!)\[(.*?)\]\(((https?:\/\/)?github\.com\/((?!topics)[^/]+?)\/([^/#]*?)(#.*?)?(\/[^/)]*)*)\)/gi
      ),
      (match) => ({ owner: match[4], name: match[5] })
    );

    await fs.writeFile(
      `${outputDir}/README.md`,
      awesomeReadme
        .replaceHtmlImage()
        .replaceMarkdownImage()
        .markdown.replace(
          /(?<!!)\[(.*?)\]\(((https?:\/\/)?github\.com\/((?!topics)[^/]+?)\/([^/#]*?)(#.*?)?(\/[^/)]*)*)\)/gi,
          "[$1 ![GitHub Repo stars](https://img.shields.io/github/stars/$4/$5?style=social)](./$4-$5.md) [*Origin*]($2)"
        )
    );
    console.log("README.md");

    console.warn(`${awesomeRepositories.length} awesome repositories`);

    await Promise.all(
      awesomeRepositories.map(async (repository) => {
        try {
          await fs.writeFile(
            `${outputDir}/${repository.owner}-${repository.name}.md`,
            wrapReadmeObject(await getReadme(repository))
              .replaceHtmlImage()
              .replaceMarkdownImage()
              .addGithubStarsBadges().markdown
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
