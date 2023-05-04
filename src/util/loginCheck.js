const {Mydb} = require("../db/connect");

const loginCheck = async (username, password) => {
    const db = await new Mydb();
    
    const getUserData = await db
    .query(`select * from user where username=? and password=?;`, [username, password])

    if (getUserData.length < 1) {
        return false;
    }
    return true;
}

module.exports = {loginCheck}