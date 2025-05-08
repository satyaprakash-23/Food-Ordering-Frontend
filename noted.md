# Notes

## What is a Bundler in React?
- **Bundler**: A tool that combines various modules (JavaScript, CSS, images, etc.) used by applications into one or more files for deployment. These bundled files can be loaded by a web browser.
  
- **Popular Bundlers**:
  1. Webpack
  2. Vite
  3. Parcel

- **Tasks Performed by Bundlers**:
  1. **Minification**: Reduces the size of JavaScript/CSS code.
  2. **Code Splitting**: Breaks down code into smaller pieces to load parts of the app only when needed, improving performance.
  3. **Transpilation**: Converts modern JavaScript (ES6+) or JSX into browser-compatible code.

## What is npm?
- **npm (Node Package Manager)**: The default package manager for Node.js, used to manage JavaScript packages (or modules). It helps developers install, update, and manage third-party libraries and tools needed for JavaScript and Node.js projects, including React applications.

- **Key Functions**:
  1. **Package Management**:
     - Provides access to a vast repository of open-source packages and libraries (the npm registry).
     - Install and update libraries with commands like `npm install` and `npm update`.
  2. **Dependency Management**:
     - Manages project dependencies, including nested dependencies.
     - Stores information in `package.json`.
  3. **Scripts**:
     - Allows running custom scripts defined in `package.json` using `npm run` (e.g., build, test).
  4. **Versioning**:
     - Tracks and manages package versions to ensure consistency across environments.

- **Why We Need npm**:
  - React apps rely on various packages for tasks like minification, bundling, optimization, and more. npm provides the helper functions needed to manage these packages.

  [Reference](https://github.com/satyaprakash-23/react_learning/tree/main)

## The Command `npm install -D parcel`
- **`npm install`**: Installs a package.
- **`-D` (or `--save-dev`)**: Installs the package as a devDependency, meaning it's only required during development.
- **`parcel`**: The name of the package being installed. Parcel is a fast, zero-configuration web application bundler.

## The `package.json` File Overview
- **Project Metadata**:
  - `name`: Project name.
  - `version`: Project version.
  - `description`: Brief project description.
  - `main`: Entry point file (e.g., `index.js`).
  - `author`: Project author.

- **Dependencies**:
  - `dependencies`: Packages needed for production (e.g., `react`, `axios`).
  - `devDependencies`: Packages needed only for development (e.g., `parcel`, `eslint`).

- **Scripts**:
  - Custom commands (e.g., `start`, `build`, `test`) that can be run using `npm run`.

- **Versioning**:
  - `engines`: Specifies required Node.js or npm versions.
  - `license`: Specifies the project’s license (e.g., MIT, Apache-2.0).
  - Other Fields:
    - `repository`: Information about the source code repository.
    - `keywords`: Keywords for the project.

## `package-lock.json` Overview
- **Exact Versions**: Records the exact versions of installed packages and their dependencies, ensuring consistency.
- **Dependency Tree**: Includes the full dependency tree with exact versions for all packages, including nested dependencies.
- **Performance**: Speeds up installs by using the locked versions, avoiding re-resolving version ranges.
- **Integrity**: Stores checksums for each package to verify that downloaded packages haven’t been tampered with.
- **Reproducibility**: Ensures consistent installations across different environments, preventing discrepancies in package versions.
- **Difference from `package.json`**:
  - `package.json` specifies version ranges.
  - `package-lock.json` locks exact versions and their dependencies.

## Versioning in `package.json`

### `~version`
- **Definition**: “Approximately equivalent to version”.
- **Behavior**: Automatically updates to all future patch versions that are backwards-compatible, without incrementing the minor version.
- **Example**: `~1.2.3` will use releases from `1.2.3` to `< 1.3.0`.

### `^version`
- **Definition**: “Compatible with version”.
- **Behavior**: Automatically updates to all future minor/patch versions that are backwards-compatible, without incrementing the major version.
- **Example**: `^1.2.3` will use releases from `1.2.3` to `< 2.0.0`.

## Explanation of `npx parcel index.html`
- **`npx`**: 
  - A command-line tool that comes with npm (version 5.2.0 and higher).
  - Allows you to run Node.js binaries from the local `node_modules/.bin` directory or from a remote package without globally installing them.
- **`parcel`**: 
  - Refers to the Parcel bundler, a fast, zero-configuration web application bundler.
- **`index.html`**: 
  - The entry point of your application. Parcel uses this file to start the build process.

### Development vs. Build Mode
- **Development Mode (`npx parcel index.html`)**: Starts a development server with live reloading and unoptimized assets.
- **Build Mode (`npx parcel build index.html`)**: Creates an optimized production build of the application.

## Parcel Features
- **HMR**: Hot Module Replacement.
- **File Watcher Algorithm**: Monitors changes in files.
- **Bundling**: Combines modules into one or more files.
- **Minification**: Reduces file sizes.
- **Code Cleaning**: Removes unnecessary code.
- **Super Fast Build Algorithm**: Speeds up builds.
- **Image Optimization**: Compresses images.
- **Caching During Development**: Improves performance.
- **Compression**: Reduces file sizes.
- **Browser Compatibility**: Supports older browsers.
- **Port Management**: Handles port numbers.
- **Consistent Hashing Algorithm**: Ensures consistent file naming.
- **Zero Configuration**: Minimal setup required.
- **Server Creation**: Sets up a development server.
- **Tree Shaking**: Removing unwanted code.

- **Note**: Parcel cache can be put inside `.gitignore` as it is auto-generated.

### Transitive Dependency
- Transitive dependencies are dependencies of your dependencies. They are not directly listed in your `package.json` but are required for your dependencies to function properly.


#### some insights from parcel doc

- **Parcel Dev Server** : when we use parcel(a web application bundler), it automatically starts a development server for our project
- **default location** : http://localhost:1234 .
- if port 1234 is already in use , then Parcel will use a fallback port .

- **CLI Options(command line Options)** : We can customize the behaviour of the dev  server using command line options:
  1. 





# **chapter 3**

#### **polyfill** 
- Polyfill is a piece of code used to provide modern functionality on older version of browser that do not natively support it.
and this replacement of code is done by bable and bable uses browserlist to track which browser of application is using.


#### babel-plugin-transform-remove-console 
- to remove the console log from our code

