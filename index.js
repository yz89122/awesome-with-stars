const https = require("https");
const fs = require("fs/promises");

const outputDir = process.argv[2];
if (!outputDir) {
  console.error("output directory not specified");
  process.exit(1);
}

const AWESOME = {
  owner: "sindresorhus",
  name: "awesome",
};

/** @type {({ owner: string, name: string, branch: string? }) => Promise<string>} */
const getReadme = async ({ owner, name, branch = null }) => {
  if (!branch) {
    try {
      return await getReadme({ owner, name, branch: "master" });
    } catch {
      return await getReadme({ owner, name, branch: "main" });
    }
  }
  for (const filename of ["readme.md", "README.md", "README.MD", "readme.MD"]) {
    try {
      return await new Promise(async (resolve, reject) => {
        const req = https.request(
          {
            hostname: "raw.githubusercontent.com",
            port: 443,
            path: `/${owner}/${name}/${branch}/${filename}`,
            method: "GET",
            headers: { "user-agent": "node" },
          },
          (res) => {
            let data = "";
            if (res.statusCode != 200)
              reject(
                JSON.stringify({
                  owner,
                  name,
                  branch,
                  statusCode: res.statusCode,
                })
              );
            res.on("data", (chunk) => (data += chunk));
            res.on("end", () => resolve(data));
          }
        );
        req.on("error", (e) => reject(e));
        req.end();
      });
    } catch {}
  }
  throw new Error("README.md not found");
};

(async () => {
  try {
    await fs.mkdir(outputDir, { recursive: true });
    const awesomeMarkdown = await getReadme(AWESOME);
    const awesomeRepositories = Array.from(
      awesomeMarkdown.matchAll(
        /\[(.*?)\]\(((https?:\/\/)?github\.com\/((?!topics)[^/]+?)\/([^/#]*?)(#.*?)?(\/[^/)]*)*)\)/gi
      ),
      (match) => ({ owner: match[4], name: match[5] })
    );

    await fs.writeFile(
      `${outputDir}/README.md`,
      awesomeMarkdown.replace(
        /\[(.*?)\]\(((https?:\/\/)?github\.com\/((?!topics)[^/]+?)\/([^/#]*?)(#.*?)?(\/[^/)]*)*)\)/gi,
        "[$1 ![GitHub Repo stars](https://img.shields.io/github/stars/$4/$5?style=social)](./$4-$5.md) [origin]($2)"
      )
    );
    console.log("README.md");

    console.error(`${awesomeRepositories.length} awesome repositories`);

    await Promise.all(
      awesomeRepositories.map((repository) =>
        (async () => {
          try {
            await fs.writeFile(
              `${outputDir}/${repository.owner}-${repository.name}.md`,
              (await getReadme(repository)).replace(
                /\[(.*?)\]\(((https?:\/\/)?github\.com\/([^/]+?)\/([^/#]+?)(#.*?)?(\/[^/)]*)*)\)/gi,
                "[$1 ![GitHub Repo stars](https://img.shields.io/github/stars/$4/$5?style=social)]($2)"
              )
            );
            console.log(`${repository.owner}-${repository.name}.md`);
          } catch (err) {
            return console.error(
              `failed to get README.md of ${repository.owner}/${repository.name}: ${err}`
            );
          }
        })()
      )
    );
  } catch (err) {
    console.error(err);
  }
})();
