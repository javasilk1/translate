## Project structure
```
node-express-typescript-starter
├─ .editorconfig
├─ .eslintrc.json
├─ .github
│  └─ workflows
│     └─ build-test.yml
├─ .gitignore
├─ .nvmrc
├─ CODE_OF_CONDUCT.md
├─ CONTRIBUTING.md
├─ Dockerfile
├─ LICENSE
├─ README.md
├─ error.log
├─ jest.config.ts
├─ package-lock.json
├─ package.json
├─ src
│  ├─ common
│  │  ├─ http-exception.ts
│  │  └─ logger.ts
│  ├─ controllers
│  │  └─ articles.controller.ts
│  ├─ index.ts
│  ├─ middleware
│  │  ├─ error.middleware.ts
│  │  ├─ http-logger.middleware.ts
│  │  ├─ index.ts
│  │  └─ not-found.middleware.ts
│  ├─ routers
│  │  └─ articles.router.ts
│  └─ services
│     └─ articles.service.ts
├─ tests
│  └─ articles.test.ts
├─ tsconfig.json
└─ types
   ├─ articles.d.ts
   └─ service-response.d.ts

```
## General notes
- This is meant to be a starter project. Feel free to remove the articles routes and add your own resources
- ESLint is run as part of the build command 
- This project could be deployed to Google Cloud using [gcloud CLI](https://cloud.google.com/sdk/docs/install) without any modifications
```
gcloud run deploy
```
