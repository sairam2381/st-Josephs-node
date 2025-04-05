const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const userDetails = require("./routes/details");
const database = require("./config/database");
dotenv.config();
database.connect();

app.get("/sairam", (req, res) => {
  return res.json({
    success: false,
    message: "Welcome to the server",
  });
});

const port = process.env.port;
app.use(
  cors({
    origin: ["*", "http://localhost:3000"],
    credentials: true,
  })
);
app.use("/api/v1/user", userDetails);

console.log("PORT NUMBER:", port);
app.listen(port, async () => {
  console.log("Server is running on port 25000");
});
