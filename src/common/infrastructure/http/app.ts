import express from 'express'
import cors from 'cors'
import { routes } from './routes'
import { errorHandler } from '@/common/infrastructure/http/middlewares/errorHandler'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

// configurando o swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
    },
  },
  apis: [],
}
const swaggerSpec = swaggerJSDoc(options)

const app = express()

app.use(cors())
app.use(express.json())

// swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(routes) // rotas
app.use(errorHandler) // validacão de erro

export { app }
