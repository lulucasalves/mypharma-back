import { model } from "mongoose";

import { ProductSchema } from "../schemas";
import { IGetProduct } from "../interfaces";

const ProductModel = model<IGetProduct>("Products", ProductSchema);

export default ProductModel;
