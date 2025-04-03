import { ObjectId } from "mongoose";
import {
  Productcollection,
  ProductSize,
  ProductStatus
} from "../enums/product.enum";

export interface Product {
  _id: ObjectId;
  productstatus: ProductStatus;
  Productcollection: Productcollection;
  productName: String;
  productPrice: Number;
  productLeftCount: Number;
  productSize: ProductSize;
  productVolume: Number;
  productDesc?: String;
  productImages: String[];
  productViews: Number;
}

export interface ProductInput {
  productstatus: ProductStatus;
  Productcollection: Productcollection;
  productName: String;
  productPrice: Number;
  productLeftCount: Number;
  productSize?: ProductSize;
  productVolume?: Number;
  productDesc?: String;
  productImages?: String[];
  productViews?: Number;
}
