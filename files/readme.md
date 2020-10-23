# {{

    const pack = JSON.parse(require("fs").readFileSync("./package.json")).name
    const path = process.cwd().split(/[\\\/]/)
    const name = pack.name || path[path.length - 1]
    name

}}

{{ JSON.parse(require("fs").readFileSync("./package.json")).description || "Description" }}

## Installation

    $ npm install {{
        const pack = JSON.parse(require("fs").readFileSync("./package.json")).name
        const path = process.cwd().split(/[\\\/]/)
        const name = pack.name || path[path.length - 1]
        name
    }}

## Usage
