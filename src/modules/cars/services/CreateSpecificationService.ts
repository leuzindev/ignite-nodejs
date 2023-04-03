import { ISpecificationRepository } from "../repositories/ISpecificationRepository";


interface IRequest {
    name: string;
    description: string;

}

class CreateSpecificationService {

    constructor(private specificationRepository : ISpecificationRepository){}


    execute({ name, description }: IRequest) {

        const specificationsAlreadyExists = this.specificationRepository.findByName(name)

        if (specificationsAlreadyExists) {
            throw new Error("Specifications already exists !")
        }

        this.specificationRepository.create({ name, description })

    }

}

export { CreateSpecificationService }