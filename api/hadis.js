const express = require("express");
const router = express.Router();
const quran = require("../data/hadis.json");

// Random Hadis
router.get("/random", (req, res) => {
  const random = hadis[Math.floor(Math.random() * hadis.length)];
  res.json({
    status: true,
    data: random
  });
});

// By ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const result = hadis.find(q => q.id === id);

  if (!result) {
    return res.json({
      status: false,
      message: "Hadis not found"
    });
  }

  res.json({
    status: true,
    data: result
  });
});

module.exports = router;
