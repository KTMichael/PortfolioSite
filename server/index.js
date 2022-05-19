const cors = require("cors");
const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 3001;
const HOST = "0.0.0.0";

app.use(express.json());
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors());
app.use(morgan("dev"));


app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
