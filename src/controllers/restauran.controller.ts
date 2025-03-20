import { Request, Response } from "express";
import { T } from "../lips/types/common";
import {} from "../models/Member.service";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");

    res.send("Home Page");
    //send | json | redirect | end | render
  } catch (err) {
    console.log("Error goHOme", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.send("Login Page");
  } catch (err) {
    console.log("Error getLogin", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("Signup Page");
    res.send("Signup Page");
  } catch (err) {
    console.log("Error getSignup", err);
  }
};

restaurantController.procssesLogin = (req: Request, res: Response) => {
  try {
    console.log("procssesLogin");
    res.send("DANE");
  } catch (err) {
    console.log("Error procssesLogin", err);
  }
};

restaurantController.procssesSignup = (req: Request, res: Response) => {
  try {
    console.log("procssesSignup");
    res.send("DANE");
  } catch (err) {
    console.log("Error procssesSignup", err);
  }
};

export default restaurantController;
