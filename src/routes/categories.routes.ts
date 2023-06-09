import { Router } from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'
import multer from 'multer'
import { importCategoryController } from '../modules/cars/useCases/importCategory'

const categoriesRoutes = Router()
const upload = multer({ dest: "./tmp", })


categoriesRoutes
    .post("/categories", (request, response) => {
        return createCategoryController.handle(request, response);
    })

    .get("/categories", (request, response) => {
        console.log(`osss`)
        return listCategoriesController.handle(request, response);
    })
    .post("/categories/import", upload.single("file") ,(request, response) => {
        return importCategoryController.handle(request, response);
    })


export { categoriesRoutes }