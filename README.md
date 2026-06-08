# TypeScript Project

This repository contains a TypeScript project. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It's a tool that helps you write better JavaScript.

## Installation

### Global Level

To install TypeScript globally, you can use npm (Node Package Manager). If you don't have npm installed, you can download and install it from [here](https://www.npmjs.com/get-npm).

To install TypeScript globally, use the following command:

```bash
npm install -g typescript
```

### Project Level
To install TypeScript at the project level, you can use npm to install it as a dependency in your project.

To install TypeScript at the project level, use the following command:

```bash
npm install typescript --save-dev
```

After installing TypeScript at the project level, you can use it in your project by adding the following to your package.json file:

```json
"devDependencies": {
    "typescript": "^5.0.0"
}
```

## Usage

To use TypeScript in your project, you can add the following to your package.json file:

```json
"scripts": {
    "build": "tsc"
}
```

Then, you can run the build command to compile your TypeScript code to JavaScript.

To Compile the TypeScript code to JavaScript, run the command: 
```bash
    npx tsc
```

This will create a new folder called dist and put all the compiled JavaScript files in it.
