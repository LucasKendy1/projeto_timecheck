const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'fatecetop2023',
  database: 'time_check',
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados!');
  // Exemplo de consulta SQL
  const resultado=  connection.query('SELECT * FROM time_check.users', (err, rows) => {
    if (err) {
        console.error('Erro ao executar a consulta:', err);
        return;
    }

    console.log('Resultados da consulta:', rows);
  });
  this.resultadoQuery = JSON.stringify(resultado)
  console.log(this.resultadoQuery)
  // connection.end(); // Encerra a conexão com o banco de dados
});
