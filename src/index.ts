import express from "express";
require("./ws");

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/ws.html");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
