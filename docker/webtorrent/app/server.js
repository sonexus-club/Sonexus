import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    service: "Sonexus WebTorrent Seeder",
    status: "running"
  });
});

app.listen(PORT, () => {
  console.log(`Sonexus Seeder API running on port ${PORT}`);
});
