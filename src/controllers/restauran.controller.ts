import { Request, Response } from "express";
import { T } from "../lips/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, MemberInput } from "../lips/types/members";
import { MemberType } from "../lips/enums/member.enum";
const memberService = new MemberService();

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
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("Signup Page");
    res.send("Signup Page");
  } catch (err) {
    console.log("Error getSignup", err);
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

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");

    const newMember: MemberInput = req.body;
 newMember.memberType = MemberType.RESTAURANT;
const result = await memberService.processSignup(newMember); // CALL
// TODO: SESSIONS AUTHENTICATION
    res.send(result);
  } catch (err) {
    console.log("Error procssesSignup", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("procssesLogin");
    console.log("body", req.body);
    const input: LoginInput = req.body;

    const result = await memberService.processLogin(input);
   // TODO: SESSIONS AUTHENTICATION
    res.send(result);
  } catch (err) {
    console.log("Error procssesLogin", err);
    res.send(err);
  }
};

export default restaurantController;
