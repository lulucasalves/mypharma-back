// import Products from "../models/products";

import ProductModel from "../../models/products";

class GetProductByIdService {
  async execute(_id: string) {
    const data = await ProductModel.findOne({ _id });

    return data;
  }
}

export { GetProductByIdService };
