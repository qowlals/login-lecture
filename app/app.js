"use strict";

// const http = require('http');
// const app = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end("여기는 루트입니다.");
//     } else if (req.url === '/login') {
//         res.end("여기는 로그인 화면입니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버 입니다.");
// });

// 모듈
const express = require("express");
const app = express();

// 포트번호
const PORT = 3000;
// 라우팅
const home = require('./src/routes/home');

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`))

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;