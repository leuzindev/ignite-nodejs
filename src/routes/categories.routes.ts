import { Router } from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

const categoriesRoutes = Router()

categoriesRoutes
    .post("/categories", (request, response) => { 
        return createCategoryController.handle(request, response) 
    })

    .get("/categories", (request, response) => {
        return listCategoriesController.handle(request, response)
    })



export { categoriesRoutes }