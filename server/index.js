const express = require("express");
require("dotenv").config();
const routes = require("./routes/Route");
const helmet = require('helmet');
const cors=require("cors");
const xss=require("xss-clean");
//create server
const app = express();

//port defined
const PORT = process.env.PORT || 3001;

//db connection
const connectWithDb = require("./config/database");
connectWithDb();

//security
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
app.set('trust proxy', 1);

//use Routes
app.use("/api/v1",routes);


app.listen(PORT, ()=>{
    console.log("server started");
})


app.get("/", (req,res) =>{
    res.send(`<h1> Home Backend: Snake & Ladder</h1>`);
})