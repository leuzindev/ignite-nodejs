import { ISpecification } from "../model/Specification";


interface ICreateSpecificationDTO {
    name: string;
    description: string;

}

interface ISpecificationRepository {

    create({ name, description } : ICreateSpecificationDTO) : void 
    list(): ISpecification[]
    findByName(name: string): ISpecification | undefined;
    
}


export { ISpecificationRepository, ICreateSpecificationDTO }