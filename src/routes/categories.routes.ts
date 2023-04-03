import { Request, Response, Router } from 'express'
import { CategoryRepository } from '../modules/cars/repositories/CategoriesRepository'
import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService'

const categoriesRoutes = Router()
const categoriesRepository = new CategoryRepository()


categoriesRoutes
    .post("/categories", (request: Request, response: Response) => {
        const { name, description } = request.body;

        const createCategoryService = new CreateCategoryService(categoriesRepository)
        createCategoryService.execute({ name, description })

        return response.status(201).send()
    })
    .get("/categories", (request: Request, response: Response) => {

        const all = categoriesRepository.list()
        return response.status(200).json(all)

    })



export { categoriesRoutes }