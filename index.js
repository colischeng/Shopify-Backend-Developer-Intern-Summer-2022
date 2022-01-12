import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { createRequire } from "module";

import route from "./routes/router.js";

const require = createRequire(import.meta.url);
require("dotenv").config({ path: "./.env" });

const app = express();
app.use(cors());

app.use("/static", express.static("./static/"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server running`);
      console.log("Connection to MongoDB successful");
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/", route);
