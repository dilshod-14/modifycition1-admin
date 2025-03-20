import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restauran.controller";

/**RTestaurant */
routerAdmin.get("/", restaurantController.goHome);

routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.procssesLogin);

routerAdmin
  .get("/Signup", restaurantController.getSignup)
  .post("/signup", restaurantController.procssesSignup);

  /**Product */
  /**User */
export default routerAdmin;
