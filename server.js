const express = require('express');
const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config');
const open = require('open');


const port = 8080;
const app = express();
const compiler = webpack(config);


app.use(express.static(__dirname + '/client'));

app.get('*', (req, res) => {
    res.send('./client/index.html');
});

app.listen(port, (err) => {
    err ? console.log(err) :  open(`http://localhost:${port}`);
});