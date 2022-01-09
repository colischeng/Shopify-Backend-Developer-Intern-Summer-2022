import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { createRequire } from "module";

import readRoute from "./routes/read.js";

const require = createRequire(import.meta.url);
require("dotenv").config({ path: "../.env" });

const app = express();

app.use("/read", readRoute);

app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port http://localhost:${process.env.PORT}`)
    );
  })
  .catch((error) => {
    console.log(error);
  });
