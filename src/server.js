const express = require("express");
const router = require("./router");
const cors = require("cors");
require("dotenv/config");

const app = express();

app.use(cors());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
