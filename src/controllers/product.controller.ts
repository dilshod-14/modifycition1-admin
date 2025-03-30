import { Request, Response } from "express";
import Errors from "../lips/Errors";

import { T } from "../lips/types/common";
import ProductService from "../models/product.servis";

const productService = new ProductService();
const productController: T = {};

productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    res.render("products");
  } catch (err) {
    console.log("Error, getAllProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.craetNewproduct = async (req: Request, res: Response) => {
  try {
    console.log("craetNewproduct");
  } catch (err) {
    console.log("Error, craetNewproduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.updateChosenproduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenproduct");
  } catch (err) {
    console.log("Error, updateChosenproduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default productController;
