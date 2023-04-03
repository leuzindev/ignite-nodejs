import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'
import { specificationsRoutes } from './routes/specifications.routes'


const app = express()

const PORT = 3000


app.use(express.json())

app.use(categoriesRoutes)
app.use(specificationsRoutes)

app.listen(PORT, () => {
    console.log("Rodando em localhost:" + PORT)
})