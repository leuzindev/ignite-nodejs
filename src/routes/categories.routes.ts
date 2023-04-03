import { Router } from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'
import multer from 'multer'

const categoriesRoutes = Router()
const upload = multer({ dest: "./tmp", })


categoriesRoutes
    .post("/categories", (request, response) => {
        return createCategoryController.handle(request, response)
    })

    .get("/categories", (request, response) => {
        return listCategoriesController.handle(request, response)
    })

    .post("/categories/import", upload.single("file") ,(request, response) => {
        const { file } = request;
        console.log(file)
        response.send()
    })


export { categoriesRoutes }