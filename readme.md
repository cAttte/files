# files

A collection of boilerplate files for my projects and a CLI to copy them!

## Installation

    $ npm install -g cAttte/files

## Usage

    $ files <files>
    $ file  <files>
    $ f     <files>

### Files

Here are the default files, followed by their aliases.

-   `.gitattributes` — `gitattributes`, `ga`
    -   Use LF
-   `.gitignore` — `gitignore`, `gi`
    -   Ignore `node_modules` and `dist`
-   `.npmignore` — `npmignore`, `ni`
    -   Ignore `src/`
-   `license` — `lic`, `l`
    -   MIT License
-   `readme.md` — `readme`, `r`
    -   Name, Installation, Usage
-   `tsconfig.json` — `tsconfig`, `ts`
    -   CJS, ES2015, declaration, out `dist/`, include `src/`

### Example

    $ f r l ts gi ga

    √ Created "readme.md".
    √ Created "license".
    √ Created "tsconfig.json".
    √ Created ".gitignore".
    √ Created ".gitattributes".
