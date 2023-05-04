// const { createConnection } = require("mysql2");

// Mydb.js
const { createPool } = require("mysql2/promise");

class Mydb {
  #pool;

  constructor() {
    this.#pool = createPool({
      host: process.env.MYSQL_HOST || "localhost",
      port: process.env.MYSQL_PORT || 3306,
      user: process.env.MYSQL_USER || "root",
      password: process.env.MYSQL_PASSWORD || "123",
      database: process.env.MYSQL_DATABASE || "hospital",
      connectionLimit: 10,
    });
  }

  async query(sql, params) {
    const [rows] = await this.#pool.query(sql, params);
    return rows;
  }

  async close() {
    await this.#pool.end();
  }

  getConn() {
    return this.#pool.getConnection();
  }
}

module.exports = {
  Mydb
};


// class Mydb {
//   #connection;

//   constructor() {
//     this.connection = createConnection({
//       host: process.env.MYSQL_HOST || "mycontainer",
//       user: process.env.MYSQL_USER || "jm",
//       password: process.env.MYSQL_ROOT_PASSWORD || "123",
//       database: process.env.MYSQL_DATABASE || "hospital",
//       port: 3306,
//     });
//   }

//   connect() {
//     this.connection.connect((err) => {
//       if (err) {
//         console.error("Error connecting to database: ", err);
//         return;
//       }
//     });
//   }

//   disconnect() {
//     this.connection.end((err) => {
//       if (err) {
//         console.error("Error disconnecting to database: ", err);
//         return;
//       }
//     });
//   }

//   async query(sql, params) {
//     return new Promise((resolve, reject) => {
//       this.connection.query(sql, params, (err, results) => {
//         if (err) {
//           return reject(err);
//         }
//         resolve(results);
//       });
//     });
//   }
// }

// module.exports = {
//   Mydb
// };