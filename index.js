/* 
O aplicativo inicia um servidor e escuta a porta 3000 por conexões. O aplicativo responde com “Hello World!” à solicitações para a URL raiz (/) ou rota. Para todos os outros caminhos, ele irá responder com um 404 Não Encontrado.
*/
const express = require('express')
const app = express()
const port = 3000

async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection({
        host: "db",
        user: "root",
        password: "poam8343",
        database: "Students"
      });
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM Information;');
    console.log(rows[1].firstname);
    return rows;
}

app.get('/', (req, res) => {
    const conn = connect();
    var text = 'Hello World! Eduardo';
    res.send(text);
  })


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})