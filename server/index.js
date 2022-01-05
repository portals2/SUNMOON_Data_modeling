const express = require('express');
const app = express();

const mysql = require('mysql');

const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'dkfvk0302',
    database: 'qp'
});


app.listen(3001, () => {
    console.log('server is running on port 3001');
});

app.post('/create', (req, res) => {
    const id = req.body.id;
    const date = req.body.date;
    const time = req.body.time;
    const type = req.body.type;
    const weather = req.body.weather;
    const temperatuers = req.body.temperatuers;
    const lot = req.body.lot;

    db.query('insert into pak_cars' +
             ' values (?, ?, ?, ?, ?, ?, ?);', 
             [id, date, time, type, weather, temperatuers,lot],
             (err, result) => {
                 if(err)
                    console.log(err);
                else
                    res.send("A new user created")
             });
});

app.get('/read', (req, res) => {
    db.query('select * from pak_cars;',
    (err, result) => {
        if(err)
            console.log(err);
        else
            res.send(result);
    });
});

app.get('/read2', (req, res) => {
    db.query('SELECT * FROM qp.pak_cars where pak_cars_id=5;',
    (err, result) => {
        if(err)
            console.log(err);
        else
            res.send(result);
    });
});