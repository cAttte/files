#!/usr/bin/env node
const fs = require("fs").promises
const path = require("path")

console.log("")
const error = m => console.log(`[31m×[39m ${m}`)
const success = m => console.log(`[32m√[39m ${m}`)

const aliases = [
    ["license", "lic", "l"],
    ["readme.md", "readme", "r"],
    [".gitignore", "gitignore", "gi"],
    [".gitattributes", "gitattributes", "ga"],
    [".npmignore", "npmignore", "ni"],
    ["tsconfig.json", "tsconfig", "tsc", "ts"]
]

async function main() {
    const files = process.argv.slice(2)
    if (!files.join("").trim()) error("No files.")

    for (const file of files) {
        const aliasEntry = aliases.find(a => a.flat().includes(file))
        const filename = aliasEntry ? aliasEntry[0] : file
        const content = await fs
            .readFile(path.join(__dirname, `../files/${filename}`))
            .catch(() => error(`No file "${filename}".`))

        if (content) {
            const finalContent = content
                .toString()
                .replace(/\{\{((\r|\n|.)+?)\}\}/g, (_, c) => eval(c))

            await fs.writeFile(filename, finalContent)
            success(`Created "${filename}".`)
        }
    }
}

main()
