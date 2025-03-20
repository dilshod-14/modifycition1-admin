import { Request, Response } from "express";
import { T } from "../lips/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../lips/types/members";
import { MemberType } from "../lips/enums/member.enum";

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

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("procssesLogin");
    res.send("DANE");
  } catch (err) {
    console.log("Error procssesLogin", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");

   
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT; 

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);

    res.send(result);
  } catch (err) {
    console.log("Error procssesSignup", err);  
    res.send(err);  
  }
};

export default restaurantController;
