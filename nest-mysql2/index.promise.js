const mysql = require('mysql2/promise');

(async function () {
  const connection = await mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'lb17839238512',
    database: 'practice',
  });

  const [results, fields] = await connection.query('SELECT * FROM customers');

  console.log(results);
  console.log(fields.map((item) => item.name));
})();
