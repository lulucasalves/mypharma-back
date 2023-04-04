import { model } from "mongoose";

import { CategorySchema } from "../schemas";
import { IGetCategories } from "../interfaces";

const CategoryModel = model<IGetCategories>("Categories", CategorySchema);

export default CategoryModel;
