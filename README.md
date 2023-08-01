[![Build - Tests](https://github.com/elgharabawy/node-express-typescript-starter/actions/workflows/build-test.yml/badge.svg)](https://github.com/elgharabawy/node-express-typescript-starter/actions/workflows/build-test.yml)
# Translate api Project

This project is a simple translation tool built with Node.js and Express.js. It allows you to translate JSON objects with multilevel depth containing strings to a desired language using the Google Translate API.

## Prerequisite
- Node 16
## Nice to have
- [NVM](https://github.com/nvm-sh/nvm)
- [VS Code](https://code.visualstudio.com/)
- [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
## Getting started
- Clone the repository
```
git clone --depth=1 https://github.com/elgharabawy/node-express-typescript-starter.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Run local development server
```
npm run dev
```
- Using postman, curl, or your browser
```
GET http://localhost:4000
GET http://localhost:4000/translate
```
- To use ESLint
```
npm run lint
```
- To run tests
```
npm test
```
Remeber: it's not a good idea to push .env files to your repo!

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
## License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the license.
