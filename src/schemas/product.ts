import { Schema } from "mongoose";
import { IGetProduct } from "../interfaces";

export const ProductSchema = new Schema<IGetProduct>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
});
