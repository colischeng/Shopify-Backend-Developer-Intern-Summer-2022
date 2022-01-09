import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { createRequire } from "module";

import route from "./routes/router.js";

const require = createRequire(import.meta.url);
require("dotenv").config({ path: "../.env" });

const app = express();

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.set("view engine", "ejs");
app.use(cors());

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Server running on port http://localhost:${process.env.PORT}`
      );
      console.log("Connection to MongoDB successful");
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/", route);
