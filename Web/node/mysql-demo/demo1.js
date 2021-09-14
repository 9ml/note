var mysql = require('mysql');

// 1. 创建连接
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'user'
});

// 连接数据库
connection.connect();

// 执行数据操作
connection.query('SELECT * FROM `users`', function (error, results) {
  if (error) throw error;
  console.log('The solution is: ', results);
});

// 新增数据
// connection.query('INSERT INTO `users` VALUES(NULL, "admin", "123456")', (err, res) => {
//   if (err) throw err
//   console.log(res)
// })

// 关闭连接
connection.end();
