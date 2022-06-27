const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)
connection.connect();
var names = ""
connection.query('SELECT * FROM Person', function (err, rows, fields) {
    rows.forEach(function (row) {


        names += '<h1>' + row.Name + '</h1> <br>'
    })

});

app.get('/', (req, res) => {
    res.send('<h1>Full Cycle</h1> <br>' + names)
});
connection.end();

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})