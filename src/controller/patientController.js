const {tokenValidCheck} = require("../util/tokenValidCheck");
const {
    createPatient, 
    searchPatient, 
    updatePatient,
    delPatient
} = require("../util/patient");

const create = async (req, res) => {
  const {accessToken} = req.cookies;
  const data = req.body;
  // 유효한 토큰인지 확인
  if(!await tokenValidCheck(accessToken)){
    let msg = {
        code: 401,
        message: "Unauthorized",
    }
    res.status(401).send(msg);
    return
  }
  try {
    const createResult = await createPatient(data);
    if(!createResult){
        const errMsg = 'Failed to create patient';
        throw (new Error(errMsg), errMsg);
    }
    let msg = {
        code: 200,
        message: "Success",
        data: {}
    }
    res.status(200).send(msg);
  } catch (err) {
    let msg = {
      code: 400,
      message: err,
    }
    res.status(400).send(msg);
  }
};

const search = async (req, res) => {
    const {accessToken} = req.cookies;
    const id = req.params.id;
    // 유효한 토큰인지 확인
    if(!await tokenValidCheck(accessToken)){
      let msg = {
          code: 401,
          message: "Unauthorized",
      }
      res.status(401).send(msg);
      return
    }
    try {
      const searchResult = await searchPatient(id);
      if(!searchResult){
        const errMsg = 'Fail search patient';
        throw (new Error(errMsg), errMsg);
      }
      let msg = {
          code: 200,
          message: "Success",
          data: searchResult
      }
      res.status(200).send(msg);
    } catch (err) {
      let msg = {
        code: 400,
        message: err,
      }
      res.status(400).send(msg);
    }
  };


const update = async (req, res) => {
    const {accessToken} = req.cookies;
    const id = req.params.id;
    const data = req.body;
    // 유효한 토큰인지 확인
    if(!await tokenValidCheck(accessToken)){
      let msg = {
          code: 401,
          message: "Unauthorized",
      }
      res.status(401).send(msg);
      return
    }    
    try {
      const updateResult = await updatePatient(id, data);
      if(!updateResult){
        const errMsg = 'Fail update patient';
        throw (new Error(errMsg), errMsg);
      }
      let msg = {
          code: 200,
          message: "Success",
      }
      res.status(200).send(msg);
    } catch (err) {
      let msg = {
        code: 400,
        message: err,
      }
      res.status(400).send(msg);
    }
};

const del = async (req, res) => {
    const {accessToken} = req.cookies;
    const id = req.params.id;
    // 유효한 토큰인지 확인
    if(!await tokenValidCheck(accessToken)){
      let msg = {
          code: 401,
          message: "Unauthorized",
      }
      res.status(401).send(msg);
      return
    }    
    try {
      const delResult = await delPatient(id);
      if(!delResult){
        const errMsg = 'Fail delete patient';
        throw (new Error(errMsg), errMsg);
      }
      let msg = {
          code: 200,
          message: "Success",
      }
      res.status(200).send(msg);
    } catch (err) {
      let msg = {
        code: 400,
        message: err,
      }
      res.status(400).send(msg);
    }
};

module.exports = {
    create,
    search,
    update,
    del
};