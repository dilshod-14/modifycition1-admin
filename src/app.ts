import cors from "cors";
import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});
// 1-ENTRANCE/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser());
app.use(morgan(MORGAN_FORMAT));
// 2-SESSION/
app.use(
  session({
    secret: String(process.env.SESSION_SECRET), // 2ta vazifasi zashita & database codelar bn req codelarni tekshiradi
    cookie: {
      maxAge: 1000 * 3600 * 6, // 6h
    },
    store: store,

    resave: true,
    saveUninitialized: true, // boshqalar ham kirsa session yaratib beradi true bo'lsa false bo'lsa faqat memberlar uchun
  })
);
app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
});
//3-VIEW/
app.set("views", path.join(__dirname, "views"));
// console.log("views", __dirname);
app.set("view engine", "ejs");
//4-ROUTERS/;
app.use("/admin", routerAdmin); //BSSR: EJS
app.use("/", router); // SPA: REACT

export default app;