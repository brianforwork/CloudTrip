// ========== routes/bookings.js ==========
import express from 'express';
const router = express.Router();
import getHistory from '../services/getHistory.js';

router.get("/history", (req, res) => {
    const { passport, page = 0, size = 10 } = req.query;

    const result = getHistory({ passport, page: Number(page), size: Number(size) });
    res.status(result.status).json(result.body);
})

export default router;