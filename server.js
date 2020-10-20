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
//mysql
db.connect();
/* 
db.query('select * from user', (err, res, fields) => {
  if (err) {
    console.log(err);
  }
  console.log(res);
});
 */

db.end();

//서버
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ message: 'Hello Express!' });
});

app.get('/home', (req, res) => {
  res.send({ message: 'this is main home!!' });
});


app.listen(port, () => console.log(`${port}포트 시작`));

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