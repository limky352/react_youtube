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
const { json } = require('body-parser');
// const { json } = require('body-parser');
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const db = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  database: conf.database
});

// 4 test
app.listen(port, () => console.log(`${port}포트 시작`));

app.get('/user', function (req, res) {
  db.query('select * from user', function (queryErr, queryRes) {
    if (queryErr) {
      res.send(queryErr);
    } else {
      // let parseData = JSON.parse(queryRes); //그대로 출력하면 에러
      res.send(queryRes);
    }
  })
})
app.get('/main', function (req, res) {
  db.query('select video.id,title,description,views,videoURL,video.created,picture from video left join user on video.id = user.id', function (queryErr, queryRes) {
    if (queryErr) {
      res.send(queryErr);
    } else {
      // let parseData = JSON.parse(queryRes); //그대로 출력하면 에러
      res.send(queryRes);
    }
  })
})

app.get('/trend', function (req, res) {
  db.query('select video.id,title,description,views,videoURL,video.created,picture from video left join user on video.id = user.id order by views desc', function (queryErr, queryRes) {
    if (queryErr) {
      res.send(queryErr);
    } else {
      res.send(queryRes);
    }
  })
})

app.get('/result', function (req, res) {
  // res.send(req.query.search);
  db.query(`select video.id,title,description,views,videoURL,video.created,picture from video left join user on video.id = user.id where title like '%${req.query.search}%'`, function (queryErr, queryRes) {
    if (queryErr) {
      res.send(queryErr);
    } else {
      res.send(queryRes);
    }
  })
  // res.send(req);
})


//3 test
// let rout = express.Router();

// "port": "5000",
//mysql 연결 //2복구
// db.connect();

// //3 test
// rout.get('/', function (req, res, next) {
//   db.connect();
//   db.query('select * from user', function (err, rows, fields) {
//     db.end();
//     if (!err) {
//       console.log(rows);
//       console.log(fields);
//       let result = 'rows: ' + JSON.stringify(rows) + '<br><br>' +
//         'fields: ' + JSON.stringify(fields);
//       res.send(result);
//     } else {
//       console.log('query error : ' + err);
//       res.send(err);
//     }
//   });
// });

//서버 2복구
/* app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`${port}포트 시작`));

app.get('/', (req, res) => {
  res.send(req.query);
  db.query('select * from user', function (err, rows, fields) {
    // console.log('app.get /');
    if (!err) {
      console.log('fields');
      let res = JSON.stringify(fields);
      res.send(res);
    }
    else if (err) {
      console.log('err');
      res.send('<h1>err</h1>');
    }
  });
});

app.get('/hot/:name', (req, res) => {
  res.send(req.params);
});


//

db.end(); */