// index.js
import express from "express";
const app = express();
const port = 3000;

import flightRoutes from "../myapp/routes/flights.js";

app.use(express.json());
app.use("/flights", flightRoutes);

app.get("/", (req, res) => {
  res.send("Flight API is running ✅");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});