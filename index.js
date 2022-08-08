const serverless = require('serverless-http');
const express = require('express');
const app = express();
const book = require("./server/index");

app.get('/api', book, (req, res) => {
    //     res.send('You successfully called your Lambda function!')
    console.log("Success!!!!")
})

app.get('/getData', book, (req, res) => {
    console.log("Success!!!!", res.data);
})

module.exports.handler = serverless(app);