import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";



const specificationsRepository = new SpecificationRepository()
const createSpecificationsUsecase = new CreateSpecificationUseCase(specificationsRepository)
const createSpecificationController = new CreateSpecificationController(createSpecificationsUsecase)

export { createSpecificationController }