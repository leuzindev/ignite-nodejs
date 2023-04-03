import { Request, Response, Router } from 'express'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'

const specificationsRoutes = Router()
const specificationsRepository = new SpecificationRepository()


specificationsRoutes
    .post("/specifications", (request: Request, response: Response) => {
        const { name, description } = request.body;

        const createSpecificationService = new CreateSpecificationService(specificationsRepository)
        createSpecificationService.execute({ name, description })

        return response.status(201).send()
    })
    .get("/specifications", (request: Request, response: Response) => {

        const all = specificationsRepository.list()
        return response.status(200).json(all)

    })



export { specificationsRoutes }