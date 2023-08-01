import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import 'dotenv/config'

import * as middleware from './middleware'

import translateRouter from './routers/translate.router'

const PORT = process.env.PORT || 4000
const ENV = process.env.NODE_ENV || 'production'

const app: Express = express()
const bodyParser = require('body-parser');


app.use(helmet())

app.use(cors())

app.use(express.json())

app.use(middleware.httpLogger)

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Welcome')
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/translate', translateRouter)

app.use(middleware.errorHandler)

app.use(middleware.notFoundHandler)

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${ENV} environment`)
})

export { app as default, server }
