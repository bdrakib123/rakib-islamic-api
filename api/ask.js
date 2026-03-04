const express = require("express");
const router = express.Router();
const ask = require("../data/ask.json");

// Random Q&A
router.get("/random", (req, res) => {
  const random = ask[Math.floor(Math.random() * ask.length)];

  res.json({
    status: true,
    data: random
  });
});

// By ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const result = ask.find(q => q.id === id);

  if (!result) {
    return res.json({
      status: false,
      message: "Answer not found"
    });
  }

  res.json({
    status: true,
    data: result
  });
});

module.exports = router;
