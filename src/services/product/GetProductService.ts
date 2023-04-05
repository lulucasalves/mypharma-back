// import Products from "../models/products";

import { IQueryProduct } from "../../interfaces";
import ProductModel from "../../models/products";

class GetProductService {
  async execute(params: IQueryProduct) {
    const regexName = new RegExp(params.query, "i");
    const regexCategory = new RegExp(params.category, "i");

    const sort = {
      priceD: { price: -1 },
      priceC: { price: 1 },
      nameC: { name: 1 },
      nameD: { name: -1 },
    };

    const data = await ProductModel.find({
      name: { $regex: regexName },
      category: { $regex: regexCategory },
    }).sort(sort[params.sort]);

    return data;
  }
}

export { GetProductService };
