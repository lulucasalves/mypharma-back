import CategoryModel from "../../models/categories";

class GetCategoryService {
  async execute() {
    const data = await CategoryModel.find();

    return data;
  }
}

export { GetCategoryService };
