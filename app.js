const express = require("express");
const app = express();
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const dbPath = path.join(__dirname, "covid19IndiaPortal.db");
let db = null;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Success");
    });
  } catch (e) {
    console.log("Error");
    process.exit(1);
  }
};
initializeDBAndServer();
module.exports = app;
// API 1
app.post("/login/", async (request, response) => {
  const { username, password } = request.body;
  console.log(username);
});
