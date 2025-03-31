import mongoose, { Schema } from "mongoose";
import {
  Productcollection,
  ProductSize,
  ProductStatus,
  ProductVolume
} from "../lips/enums/product.enum";

const productSchema = new Schema(
  {
    productstatus: {
      type: String,
      enum: ProductStatus,
      default: ProductStatus.PAUSE
    },

    Productcollection: {
      type: String,
      enum: Productcollection,
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
      type: String,
      enum: ProductVolume,
      default: ProductVolume.ONE
    },

    productDesc: {
      type: String,
      required: true
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

export default mongoose.models.Product || mongoose.model("Product", productSchema);
