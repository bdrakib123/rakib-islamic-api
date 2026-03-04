const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.API_KEY;

// 🔐 API Key Middleware
app.use("/api", (req, res, next) => {
  const key = req.query.apikey;

  if (!key || key !== API_KEY) {
    return res.status(401).json({
      status: false,
      message: "Unauthorized"
    });
  }

  next();
});

// 📌 Routes
app.use("/api/hadis", require("./api/hadis"));
app.use("/api/quran", require("./api/quran"));
app.use("/api/ask", require("./api/ask"));

app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Rakib Islamic API Running 📖✨"
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log("Islamic API running 🚀")
);
