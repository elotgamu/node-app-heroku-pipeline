const express = require("express");

const app = express();

//OK health endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ message: "OK" });
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the api" });
});

module.exports = app;
