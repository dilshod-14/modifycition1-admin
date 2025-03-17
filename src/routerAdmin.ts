import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restauran.controller";

routerAdmin.get("/", restaurantController.goHome);

routerAdmin.get("/login", restaurantController.getLogin);

routerAdmin.get("/Signup", restaurantController.getSignup);

export default routerAdmin;
  