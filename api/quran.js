const express = require("express");
const router = express.Router();
const quran = require("../data/quran.json");

// Random Ayah
router.get("/random", (req, res) => {
  const random = quran[Math.floor(Math.random() * quran.length)];
  res.json({
    status: true,
    data: random
  });
});

// By ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const result = quran.find(q => q.id === id);

  if (!result) {
    return res.json({
      status: false,
      message: "Ayah not found"
    });
  }

  res.json({
    status: true,
    data: result
  });
});

module.exports = router;
