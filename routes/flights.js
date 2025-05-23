// ========== routes/flights.js ==========
import express from 'express';
const router = express.Router();
import searchFlights from "../services/searchFlights.js";
import bookFlights from "../services/bookFlights.js";
import flights from "../data/flights.js";

router.post("/search", (req, res) => {
  const result = searchFlights(req.body, flights);
  res.status(result.status).json(result.body);
});

router.post("/book", (req, res) => {
  const result = bookFlights(req.body);
  res.status(result.status).json(result.body);
})


export default router;
