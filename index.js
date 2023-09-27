const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const cors = require("cors");
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
const port = process.env.PORT || 8000;

app.use("/v1", require("./router/kit"));

app.listen(port, () => {
  console.log(`running on port ${port}`);
});