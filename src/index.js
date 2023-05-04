const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {corsOptions} = require('./config/cors');
const {
    userRouter,
    patientRouter
} = require("./route/index");
const multer = require('multer');
const dotenv = require('dotenv');
dotenv.config();
const upload = multer({ dest: 'uploads/' });

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors(corsOptions));

//route
app.use("/user", userRouter);
app.use("/patients", patientRouter);
app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Upload complete!');
});
  
app.listen(process.env.PORT, () => {
  console.log('Server listening on port', process.env.PORT);
});