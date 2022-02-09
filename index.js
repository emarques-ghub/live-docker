/* 
O aplicativo inicia um servidor e escuta a porta 3000 por conexões. O aplicativo responde com “Hello World!” à solicitações para a URL raiz (/) ou rota. Para todos os outros caminhos, ele irá responder com um 404 Não Encontrado.
*/
const express = require('express')
const app = express()
const port = 3000

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "poam8343",
  database: "Students"
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

 console.log('connected as id ' + connection.threadId);
});


app.get('/', (req, res) => {
    var text = 'Hello World! Eduardo';
    res.send(text);
  })

app.get('/list', (req, res) => {
  var text = '';
  
  connection.query('SELECT * FROM Information', function(err, rows, fields) 
  {
    if (err) throw err;
    for (let index = 0; index < rows.length; index++) {
      console.log(rows[index]);
      text = text + " - " + rows[index].firstname;
    }
    res.send(text);
  });

  connection.end();

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})