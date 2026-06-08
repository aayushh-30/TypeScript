function greet(name){
    return `Hello, ${name}!`;
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob"); // Output: Hello, Bob!
greet(10); // Output: Hello, 10! which is not a expectded result.
// From here TS comes into the picture


// Steps to install TypeScript in your project
// 1. npm init -y
// 2. npm install -D typescript:
// 3. npx tsc --init
// This will create a tsconfig.json file in your project which will contain the configuration for TypeScript compiler.
// 4. Create a file with .ts extension and write your TypeScript code in it.
// 5. To compile the TypeScript code to JavaScript, run the command: npx tsc
// This will compile all the .ts files in your project and generate corresponding .js files.
// 6. You can then run the generated JavaScript files using Node.js or any other JavaScript runtime environment.