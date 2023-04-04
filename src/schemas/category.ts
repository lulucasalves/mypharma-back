import { Schema } from "mongoose";
import { IGetCategories } from "../interfaces";

export const CategorySchema = new Schema<IGetCategories>({
  name: { type: String, required: true, unique: true },
});
