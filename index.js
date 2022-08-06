const serverless = require('serverless-http');
const express = require('express')
const app = express()
app.get('/', function (req, res) {
    res.send('You successfully called your first Lambda function!')
})
module.exports.handler = serverless(app);