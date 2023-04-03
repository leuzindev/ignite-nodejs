import { ISpecificationRepository } from "../../repositories/implementations/ISpecificationRepository";


interface IRequest {
    name: string;
    description: string;

}

class CreateSpecificationUseCase {

    constructor(private specificationRepository: ISpecificationRepository) { }


    execute({ name, description }: IRequest) {

        const specificationsAlreadyExists = this.specificationRepository.findByName(name)

        if (specificationsAlreadyExists) {
            throw new Error("Specifications already exists !")
        }

        this.specificationRepository.create({ name, description })

    }

}

export { CreateSpecificationUseCase }