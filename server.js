
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const flash = require('connect-flash');
const logger = require("morgan");
const mongoose = require("mongoose");
const request = require("request");
const app = express();
const PORT = process.env.PORT || 3000;
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const db = require('./config/mongoose/models')(mongoose);
const index = require('./routes/html-routes/html-routes')(express,path);
const API = require('./routes/api-routes/api-routes')(express,db,io);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(flash());
app.use(logger("dev"));

app.use(express.static(path.join(__dirname,'public')));

app.use('/',index);
app.use('/api',API);


mongoose.Promise = Promise;
mongoose.connect("");
const con = mongoose.connection;


listen(3000, (err) => {
  if (err) throw err
  console.log('Listening on 3000...')
})