const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const createJwtToken = (username, ep) => {
    const payload = {
      username: username,
    };
    const options = {
      expiresIn: ep,
    };
    return jwt.sign(payload, process.env.SECRET_KEY, options);
}

const decodeJwtToken = (token) => {
  try{
    return jwt.verify(token, process.env.SECRET_KEY);
  }
  catch(err){
    console.error(err);
  }
}

module.exports = {
    createJwtToken,
    decodeJwtToken
}