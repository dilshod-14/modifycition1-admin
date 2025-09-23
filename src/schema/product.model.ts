import mongoose, { Schema } from "mongoose";
import {
  ProductCollection,
  ProductSize,
  ProductStatus,
  ProductVolume
} from "../libs/enums/product.enum";

const productSchema = new Schema(
  {
    productStatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE
    },

    productCollection: {
      type: String,
      enum: ProductCollection,
      require: true
    },

    productName: {
      type: String,
      required: true
    },

    productPrice: {
      type: Number,
      required: true
    },

    productLeftCount: {
      type: Number,
      required: true
    },

    productSize: {
      type: String,
      enum: ProductSize,
      default: ProductSize.NORMAL
    },

    productVolume: {
      type: Number,
      enum: ProductVolume,
      default: ProductVolume.SINGLE
    },

    productDesc: {
      type: String
    },

    productImages: {
      type: [String],
      default: []
    },

    productViews: {
      type: Number,
      default: 0
    }
  },

  { timestamps: true }
); // updatedAT, createdAT

productSchema.index(
  { productName: 1, productSize: 1, productVolume: 1 },
  { unique: true }
);

export default mongoose.model("Product", productSchema);
