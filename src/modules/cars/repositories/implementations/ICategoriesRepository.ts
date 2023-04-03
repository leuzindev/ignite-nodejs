import { ICategory } from "../../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;

}

interface ICategoriesRepository {
    findByName(name: string): ICategory | undefined;
    list(): ICategory[]
    create({ name, description }: ICreateCategoryDTO): void
}

export { ICategoriesRepository, ICreateCategoryDTO }