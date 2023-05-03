const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const cors = require('cors');
const {corsOptions} = require('./config/cors');
const {
    userRouter,
} = require("./route/index");
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
// app.use(cors(corsOptions));

//route
app.use("/user", userRouter);
  
app.listen(process.env.PORT, () => {
  console.log('Server listening on port', process.env.PORT);
});