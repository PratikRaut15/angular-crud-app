const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./connection");
app.use(cors());
const bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/addUsers", async (req, res) => {
  const result = await db.addUsers(req.body.userFormData);
  if (result) {
    res.send({
      status: true,
      msg: "data inserted successfully",
    });
  } else {
    res.send({
      status: false,
      msg: "error",
    });
  }
  //console.log(result);
});
app.listen(3000, function () {
  console.log("server started on port 3000");
});
