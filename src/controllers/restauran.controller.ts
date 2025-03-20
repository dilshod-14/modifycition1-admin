import { Request, Response } from "express";
import { T } from "../lips/types/common";
import {} from "../models/Member.service";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome");
    // LOGIC
    //SERVISE MODEL
    //....
    res.send("Home Page");
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

export default restaurantController;
