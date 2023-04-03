import { ICategory } from "../model/Category";
import { v4 as uuidV4 } from "uuid"
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";



class CategoryRepository implements ICategoriesRepository {

    private categories: ICategory[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): void {

        const category: ICategory = {
            id: uuidV4(),
            name,
            description,
            created_at: new Date(),
        }

        this.categories.push(category)
    }

    list(): ICategory[] {
        return this.categories;
    }

    findByName(name:string) : ICategory | undefined {

        const category = this.categories.find((category) => category.name === name)
        return category;

    }
}

export { CategoryRepository }