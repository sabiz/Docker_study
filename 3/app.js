const mysql = require('mysql');

const con = mysql.createConnection({

host: "mysql",

user: "root",

password: "password",

database: 'Customers'

});

con.connect(function (err) {

if (err) throw err;
 console.log("Connected!");
});

const express = require('express')

const app = express()

const port = process.env.PORT

app.get('/', (req, res) => res.send('Hello Chris!'))

app.get("/docker", (req, res) => res.send("hello from docker"))

app.get('/nodemon', (req, res) => res.send('hello from nodemon'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
