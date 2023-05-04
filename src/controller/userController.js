const {loginCheck} = require("../util/loginCheck");
const {createJwtToken, decodeJwtToken} = require("../util/jwt");
const {logout_token} = require("../util/logout");
const {tokenValidCheck} = require("../util/tokenValidCheck");

const login = async (req, res) => {
  const {accessToken, refreshToken} = req.cookies;
  const { username, password } = req.body;
  // 유효한 토큰인지 확인
  if(await tokenValidCheck(accessToken) || await tokenValidCheck(refreshToken)){
    // accessToken이 있는 경우
    if(accessToken){
      const user = decodeJwtToken(accessToken)
      let msg = {
        code: 200,
        message: 'Success 1',
        data: {
          accesstoken: accessToken,
          accesstokenExp: '1h',
          refreshtoken: refreshToken,
          refreshtokenExp: '7h'
        }
      }
      res.status(200).send(msg);
      return
    }
    // refreshToken이 있는 경우
    if(refreshToken){
      const user = decodeJwtToken(refreshToken)
      const accessToken = createJwtToken(user.username, '1h');
      const option = { 
        httpOnly: true,
        maxAge: 3600000
      }
      res.cookie('accessToken', accessToken, option);
      let msg = {
        code: 200,
        message: 'Success 2',
        data: {
          accesstoken: accessToken,
          accesstokenExp: '1h',
          refreshtoken: refreshToken,
          refreshtokenExp: '7h'
        }
      }
      res.status(200).send(msg);
      return
    }
  }
  try {
    // token이 없는 경우
    const user = await loginCheck(username, password);
    if (!user) {
      const errMsg = 'Invalid username or password';
      throw (new Error(errMsg), errMsg);
    } 
    
    // 새로운 accessToken, refreshToken 발급
    const accessToken = createJwtToken(username, '1h');
    const refreshToken = createJwtToken(username, '7h');
    const option = { 
      httpOnly: true,
      maxAge: 3600000
    }
    res.cookie('accessToken', accessToken, option);
    res.cookie('refreshToken', refreshToken, option);

    let msg = {
      code: 200,
      message: 'Success',
      data: {
        accesstoken: accessToken,
        accesstokenExp: '1h',
        refreshtoken: refreshToken,
        refreshtokenExp: '7h'
      }
    }
    res.status(200).send(msg);
  } catch (err) {
    let msg = {
      code: 401,
      message: "Unauthorized",
      data: {
        message: err
      }
    }
    res.status(401).send(msg);
  }
};

const logout = async (req, res) => {
  const {accessToken, refreshToken} = req.cookies;
  console.log(accessToken, refreshToken);
  try {
    if(!accessToken && !refreshToken){
      const errMsg = 'Invalid token';
      throw (new Error(errMsg), errMsg);
    }
    //accessToken, refreshToken을 유효하지 않은 토큰 목록에 저장
    await logout_token(accessToken)
    await logout_token(refreshToken)
    let msg = {
      code: 200,
      message: 'Success',
    }
    res.status(200).send(msg);
  } catch (err) {
    let msg = {
      code: 401,
      message: err,
    }
    res.status(401).send(msg);
  }
};

module.exports = {
  login,
  logout
};