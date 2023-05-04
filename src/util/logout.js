const {Mydb} = require("../db/connect");

const logout_token = async (token) => {
    const db = await new Mydb();
    const insertResult = await db
    .query(`INSERT INTO logout_list(token) VALUES(?);`, [token])

    console.log("inssert:",insertResult)
}

module.exports = {logout_token}
