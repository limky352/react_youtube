// import React, { Component } from 'react';
// import React from 'react';
//보여줄 페이지들 import
// import _App from './client/src/App';
// import _Header from './client/src/components/Header';

//서버 필요
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

//mysql필요
const fs = require('fs');
const mysql = require('mysql');
// const { json } = require('body-parser');
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const db = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  database: conf.database
});
// "port": "5000",
//mysql 연결
db.connect();

//서버
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({ asdf: 'ddddddd' });
  // db.query('SELECT * FROM user', (err, rows, fields) => {
  //   res.send(rows);
  // });
  // res.send({ message: 'Hello Express!' });
});

app.get('/hot', (req, res) => {
  res.send({ asdfas: '_Header' });
});

app.listen(port, () => console.log(`${port}포트 시작`));

db.end();

/* const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello Express!' });
});

app.get('/home', (req, res) => {
  res.send({ message: 'this is main home!!' });
});


app.listen(port, () => console.log(`${port}포트 시작`)); */