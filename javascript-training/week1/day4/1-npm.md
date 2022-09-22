## What is NPM?

NPM stands for Node Package Manager
It comes prebuilt with Node
It allows us to share, use, and reuse code from and with other developers

On npmjs.com, all of the source code/packages are stored. If we need a package, we grab it from there

## NPM Commands

# npm -v
Displays the version of npm installed

# npm init
Creates a package.json and initiales a Node project

# npm install <package-name> (ex. npm install react)
# npm i <package-name>
Installs the desired package to the project

# npm install
# npm i
Install all packages listed in the package.json

# npm uninstall
Uninstalls the specified package and any of it's dependencies that were needed

# npm update <package-name>
Updates the package to the latest version

# npx <package-name>
Instead of installing the dependency, it will just execute and be done

## NPM flags

# -y (npm init -y)
Skips the npm init steps and just uses defaults for everything

# -D (npm i -D jest)
# --save-dev (npm i --save-dev jest)
Installs the dependency as a "devDependency"
Dev Dependencies do NOT appear in the production build
In a development environment, it will be with me. In a production environment, it will not be there

# --production
Run the project in production mode
Dev Dependencies are omitted

# -g (npm i -g typescript)
Globally installs the package so that you can use it in any project

## package.json

## package-lock.json
It "locks down" the dependency tree to ensure all of the peer dependencies are the version we expect them to be
If a dependency of a dependency updates, we don't want that potentially our project, so we lock its version

## node_modules
This is a huge folder containing all of the source code required to run the project
I also obtain any dependencies that dependency needs to run

## Versions

Major Release (1.x.x)
- For major updates, increase the major version
- Switching between major versions typically takes a lot time and effort
- Ex. Windows 10 -> Windows 11 OR Python 2 -> Python 3
Minor Release (x.1.x)
- Takes place in a major release and typically adds new features to the language or package
- Typically not a groundbreaking change, but may change some functionality or add new functionality
- Switching between minor versions doesn't take as much time, but some effort is required
- Ex. 16.8 Added hooks for function components OR adding new features to a programming language/package
Patch Release (x.x.1)
- Takes place in a minor release and typically is reserved for bug fixes/performance improvements
- Typically very small and often require no refactoring at all and typically take no effort to switch between
- Ex. There was a typo somewhere in the program, updated documentation, etc.

^ - Indicates that the package may be updated to the latest minor version (ex. ^18.0.0 allows 18.0.0 -> 18.2.0)
~ - Indicates that the package may be updated to the latest patch version (ex. ~18.0.0 allows 18.0.0 -> 18.0.17)
No symbol indicates that the package may be updated to the version (ex. 18.0.0 allows 18.0.0 -> 19.0.0)