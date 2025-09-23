import { ProductCollection } from "./../lips/enums/product.enum";
import { shapeIntoMongooseObjectId } from "../lips/config";
import { Request, Response } from "express";
import Errors, { HttpCode, Message } from "../lips/Errors";

import { T } from "../lips/types/common";
import { ProductInput, ProductInquery } from "../lips/types/product";
import { AdminRequest, ExtendedRequest } from "../lips/types/members";
import ProductService from "../models/product.service";
const productService = new ProductService();
const productController: T = {};

/** SPA */
productController.getProducts = async (req: Request, res: Response) => {
  try {
    console.log("getProducts");
    const {
      page,
      limit,
      order,
      productCollection: productCollection,
      search
    } = req.query;
    const inquiry: ProductInquery = {
      order: String(order),
      page: Number(page),
      limit: Number(limit)
    };
    if (productCollection) {
      inquiry.productCollection = productCollection as ProductCollection;
    }
    if (search) inquiry.search = String(search);

    const result = await productService.getProducts(inquiry);
    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error, getProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.getProduct = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("getProduct");

    const { id } = req.params;
    console.log("req.memeber:", req.member);
    const memberId = req.member?._id
      ? shapeIntoMongooseObjectId(req.member._id)
      : null;
    const result = await productService.getProduct(memberId, id);
    res.status(HttpCode.OK).json(result);
  } catch (err) {
    console.log("Error, getProduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

/** SSR */

productController.getAllProducts = async (req: Request, res: Response) => {
  try {
    console.log("getAllProducts");
    const data = await productService.getAllProducts();
    res.render("products", { products: data });
  } catch (err) {
    console.log("Error, getAllProducts", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

productController.createNewProduct = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("createNewProduct");
    console.log("req.body:", req.body);

    if (!req.files?.length)
      throw new Errors(HttpCode.INTERNAL_SERVICE_ERROR, Message.CREATE_FAILED);

    const data: ProductInput = req.body;
    data.productImages = req.files?.map((ele) => {
      return ele.path.replace(/\\/g, "/");
    });
    await productService.createNewProduct(data);
    console.log("productCollection:", data.productCollection);
    res.send(
      `Hi <script> alert(" Sucessful creation"); window .location.replace('/admin/product/all') </script>`
    );
  } catch (err) {
    console.log("Error, createNewProduct", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `Hi <script> alert(" ${message}"); window .location.replace('/admin/product/all') </script>`
    );
  }
};

productController.updateChosenProduct = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenproduct");
    const id = req.params.id;
    const result = await productService.updateChosenProduct(id, req.body);
    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.log("Error, updateChosenproduct", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default productController;
