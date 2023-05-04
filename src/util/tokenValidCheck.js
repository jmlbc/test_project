const {Mydb} = require("../db/connect");

const tokenValidCheck = async (token) => {
    const db = await new Mydb();
    
    const validResult = await db
    .query(`select * from logout_list where token=?;`, [token])

    if (validResult.length > 0){
        return false;
    }
    return true;
}

module.exports = {tokenValidCheck}