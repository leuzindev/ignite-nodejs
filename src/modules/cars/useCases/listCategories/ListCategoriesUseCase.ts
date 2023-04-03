import { ICategory } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/implementations/ICategoriesRepository";



class ListCategoriesUseCase {

    constructor(private categoriesRepository: ICategoriesRepository) { }

    execute(): ICategory[] {
        const categories = this.categoriesRepository.list()

        return categories
    }



}


export { ListCategoriesUseCase }