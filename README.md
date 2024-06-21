# Backend
### Prerequisites
- Node.js (version >= 12.0.0)
- npm (Node Package Manager)
### Install required npm packages:
- npm install express body-parser cors fs
- npm install --save-dev typescript @types/node @types/express ts-node nodemon
### Initialize TypeScript configuration:
- tsc --init
### Install Nodemon globally
- npm install -g nodemon
### Update package.json scripts section to use Nodemon:
-  "start": "nodemon --exec ts-node src/server.ts"
### To run the server
```bash
npm start




