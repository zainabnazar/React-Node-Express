// server/index.js
const path = require('path');
const express = require("express");
const axios = require("axios");

// var fs = require("fs");
// const { readFile } = require('fs');
const jsonfile = require('jsonfile');

//const dataPath = require('./books.json');

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Internal API with inbuild json
app.get("/api", (req, res) => {
  res.json({ title: "The Fault in Our Stars" });
});

// External api
app.set("json spaces", 2) // to make the json readable
app.get("/getData", (req, res) => {
  axios.get("https://openlibrary.org/books/OL7353617M.json")
    .then(function (response) {
      res.json(response.data)
    }).catch(function (error) {
      res.json("Error occured!")
    })
});

// Use internal json file, we will need 
app.get('/book', (req, res) => {
  jsonfile.readFile('./books.json', 'utf8', (err, data) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    res.json(data);
    console.log("File data:", data);
  });
});


//All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;