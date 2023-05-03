import { createConnection } from "mysql2";

class Mydb {
  #connection;

  constructor() {
    this.connection = createConnection({
      host: process.env.MYSQL_HOST || "db",
      user: process.env.MYSQL_USER || "myuser",
      password: process.env.MYSQL_PASSWORD || "123",
      database: process.env.MYSQL_DATABASE || "mydb",
      port: 3306,
    });
  }

  connect() {
    this.connection.connect((err) => {
      if (err) {
        console.error("Error connecting to database: ", err);
        return;
      }
    });
  }

  disconnect() {
    this.connection.end((err) => {
      if (err) {
        console.error("Error disconnecting to database: ", err);
        return;
      }
    });
  }

  async query(sql, params) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, params, (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  }
}

export default Mydb;