// ========== routes/flights.js ==========
const express = require("express");
const router = express.Router();
const searchFlights = require("../services/searchFlights");
const flights = require("../data/flights");

router.post("/search", (req, res) => {
  const result = searchFlights(req.body, flights);
  res.status(result.status).json(result.body);
});

// router.all("*", (req, res) => {
//   res.status(404).send("Route not found inside /flights router");
// });

module.exports = router;
