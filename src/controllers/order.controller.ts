import { ExtendedRequest } from "../lips/types/members";
import { T } from "../lips/types/common";
import { Response } from "express";
import Errors, { HttpCode } from "../lips/Errors";
import OrderService from "../models/Order.service";
import { OrderInquery } from "../lips/types/order";
import { OrderStatus } from "../lips/enums/order.enum";

const orderService = new OrderService();
const orderController: T = {};
orderController.createOrder = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("createOrder");
    const result = await orderService.createOrder(req.member, req.body);

    res.status(HttpCode.CREATED).json(result);
  } catch (err) {
    console.log("Error createOrder", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

orderController.getMyOrders = async (req: ExtendedRequest, res: Response) => {
  try {
    console.log("getMyOrders");
    const { page, limit, orderStatus } = req.query;
    const inquiry: OrderInquery = {
      page: Number(page),
      limit: Number(limit),
      orderStatus: orderStatus as OrderStatus
    };
    console.log("inquiry=>", inquiry);
    const rusolt = await orderService.getMyOrders(req.member, inquiry);

    res.status(HttpCode.CREATED).json({ rusolt });
  } catch (err) {
    console.log("Error getMyOrders", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};
export default orderController;
