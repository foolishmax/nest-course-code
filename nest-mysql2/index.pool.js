const mysql = require('mysql2/promise');

(async function () {
  const pool = await mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'lb17839238512',
    database: 'practice',
    port: 3307,
    waitForConnections: true, // 指如果现在没有可用连接就等待，设置为false就直接返回报错
    connectionLimit: 10, // 指定最多可有有多少个连接
    maxIdle: 10, // 指定最多有多少个空闲的，超过这个数量的空闲连接会被释放
    idleTimeout: 60000, // 指空闲多久的连接会断开
    queueLimit: 0, // 排队的请求数量，超过这个数量就直接返回报错
    enableKeepAlive: true, // 保持心跳用
    keepAliveInitialDelay: 0, // 保持心跳用
  });

  //  手动取
  // const connection = await pool.getConnection();

  // const [results] = await connection.query('select * from orders');
  // console.log(results);

  const [results] = await pool.query('select * from customers');
  console.log(results);
})();
