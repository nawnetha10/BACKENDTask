# BACKEND

In the Package Manager Console, navigate to your project directory:
cd <your-project-directory>
##Install the required npm packages:
npm install express body-parser cors fs
npm install --save-dev typescript @types/node @types/express ts-node nodemon
##Initialize TypeScript Configuration:
In the Package Manager Console, run:
tsc --init
Edit the tsconfig.json File:
{
    "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true
    }
}
##Set Up Nodemon for Development
npm install -g nodemon
"scripts": {
    "start": "nodemon --exec ts-node src/server.ts"
}
##Running the Server
To start the server, run:
npm start
This will launch the server at http://localhost:8000.
