const express = require("express");
const app = express();
app.get("/sairam", (req, res) => {
  return res.json({
    success: true,
    message: "Welcome to the server",
  });
});

app.listen(25000, async () => {
  console.log("Server is running on port 25000");
});
