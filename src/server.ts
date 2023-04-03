import express from 'express'
import { router } from './routes'
import swaggerUi from "swagger-ui-express"
import swaggerFile from "./swagger.json"

const app = express()

const PORT = 3000
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.listen(PORT, () => {
    console.log("Rodando em localhost:" + PORT)
})