// index.js
const express = require("express");
const app = express();
const port = 3000;

const flightRoutes = require("./routes/flights");

app.use(express.json());
app.use("/flights", flightRoutes);

app.get("/", (req, res) => {
  res.send("Flight API is running ✅");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

