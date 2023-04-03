import { Request, Response, Router } from 'express'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository'
import { createSpecificationController } from '../modules/cars/useCases/createSpecification'

const specificationsRoutes = Router()
const specificationsRepository = new SpecificationRepository()


specificationsRoutes
    .post("/specifications", (request: Request, response: Response) => {
        return createSpecificationController.handle(request, response)
    })
    .get("/specifications", (request: Request, response: Response) => {

        const all = specificationsRepository.list()
        return response.status(200).json(all)

    })



export { specificationsRoutes }