import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";

/** 1-ENTRANCE**/
const app = express();
console.log("__dirname", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
/** 2-SESSION**/

/** 3-VIEW**/
app.set("view", path.join(__dirname, "view"));
app.set("view engine", "ejs");
/** 4-ROUTERS**/
app.use("/admin", routerAdmin); //BSSR: EJS
app.use("/", router); // SPA: REACT

export default app;
