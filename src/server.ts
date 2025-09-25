import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT ?? 3003;

if (!MONGO_URL) {
  throw new Error("❌ MONGO_URL not defined in .env file");
}

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("✅ MongoDB connection succeed");
    app.listen(PORT, () => {
      console.info(`🚀 Server is running on http://localhost:${PORT}/admin\n`);
    });
  })
  .catch((err) => console.error("❌ ERROR on MongoDB connection:", err));

// CLUSTER => DATABASE => COLLECTION => DOCUMENT
 
// console.log("PORT:", process.env.PORT);
// console.log("MONGO_URL:", process.env.MONGO_URL);

//Architectural pattern: MVC, Dependency Injection, MVP

//Design pattern: Middleware, Decotar

// console.log("EXUCUTED!");

// import moment from "moment";

// const currentTime = moment().format("YYYY MM DD");
// console.log(currentTime);

// const person: string = "MArtin";
// const count: number = 100;
