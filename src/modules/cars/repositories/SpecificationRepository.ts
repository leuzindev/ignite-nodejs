import { ISpecification } from "../model/Specification";
import { ISpecificationRepository, ICreateSpecificationDTO } from "./ISpecificationRepository";
import { v4 as uuidV4 } from "uuid"

class SpecificationRepository implements ISpecificationRepository{
    private specifications : ISpecification[];

    constructor(){
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecificationDTO): void {

        const specification: ISpecification = {
            id: uuidV4(),
            name,
            description,
            created_at: new Date(),
        }

        this.specifications.push(specification)
    }
    list(): ISpecification[] {
        return this.specifications;
    }
    findByName(name: string): ISpecification | undefined {
        const specification = this.specifications.find((specification) => specification.name === name)
        return specification;
    }
    

}

export { SpecificationRepository }