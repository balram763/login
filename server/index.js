const express = require("express");
const connectDB = require("./backend/config/dbConfig");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

//database connect
connectDB();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Working fine",
  });
});

app.use("/api/user", require("./backend/routes/userRoute"));

app.listen(PORT, () => {
  console.log(`server is running at PORT ${PORT}`);
});
