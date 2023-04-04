import { Document } from "mongoose";

export interface IGetProduct extends Document {
  _id: string;
  image: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface IGetCategories extends Document {
  _id: string;
  name: string;
}

export interface IQueryProduct {
  query?: string;
  category?: string;
  sort?: string;
}
