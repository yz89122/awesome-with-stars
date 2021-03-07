import sys
import re


# get filename from argv
filename = sys.argv[1]

# read README.md
markdown = list()
with open(filename, "r") as filestream:
    markdown = filestream.readlines()

# adds badges
pattern = re.compile(
    r"\[(.*?)\]\(((https?://)?github\.com/([^/]+?)/([^/]+?)(/[^/]*)*)\)"
)
markdown = list(
    pattern.sub(
        r"[\1 ![GitHub Repo stars](https://img.shields.io/github/stars/\4/\5?style=social)](\2)",
        line,
    )
    for line in markdown
)

# write it back
with open(filename, "w") as filestream:
    filestream.writelines(markdown)
