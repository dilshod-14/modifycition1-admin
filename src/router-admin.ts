import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restauran.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./lips/utils/uploader";
/**RTestaurant */
routerAdmin.get("/", restaurantController.goHome);

routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);

routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post(
    "/signup",
    makeUploader("members").single("memberImage"),
    restaurantController.processSignup
  );
routerAdmin.get("/logout", restaurantController.logout);

routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/**Product */

routerAdmin.get(
  "/product/all",
  restaurantController.verifyRestaurant,
  productController.getAllProducts
);  
routerAdmin.post(
  "/product/create",
  restaurantController.verifyRestaurant,
  makeUploader("products").array("productImages", 5),
  productController.craetNewproduct
);

routerAdmin.post(
  "product/:id",
  restaurantController.verifyRestaurant,
  productController.updateChosenproduct
);

/**User */
export default routerAdmin;
