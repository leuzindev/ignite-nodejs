import { v4 as uuidV4 } from 'uuid'

interface ISpecification{
    
    id?: string;
    name: string;
    description: string;
    created_at : Date;
}


export { ISpecification }