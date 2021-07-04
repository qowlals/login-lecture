"use strict"

// 모듈
const express = require('express');
const app = express();

const PORT = 3000;

// 앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

const home = require('./routes/home/index.js')
app.use("/", home);

module.exports = app;
