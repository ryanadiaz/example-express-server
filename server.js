// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
let storage = [];

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Takes in JSON input
app.post("/api/create", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  let newPost = req.body;

  console.log(newPost);

  // We then add the json the user sent to the array for storage
  storage.push(newPost);

  // We then display the JSON to the users
  res.json(storage);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});