import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then(() => {
    console.log("MongoDB connection succeed");

    const PORT = parseInt(process.env.PORT || "3003", 10); // ✅ number ga o‘girildi

    app.listen(PORT, "0.0.0.0", function () {
      console.info(`Server is running successfully on port: ${PORT}`);
      console.info(`Admin project on http://34.64.145.37:${PORT}/admin \n`);
    });
  })
  .catch((err) => console.log("ERROR on connection MongoDB", err));
