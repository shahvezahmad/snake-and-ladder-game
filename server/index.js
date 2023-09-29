const express = require("express");
const app = express();
require("dotenv").config();

// FOR EXTRA SECURITY
const helmet = require('helmet');
const cors=require("cors");


const PORT = 3001;

const connectWithDb = require("./config/database");
connectWithDb();

app.set('trust proxy', 1);

app.use(express.json());
app.use(helmet());
app.use(cors());

app.listen(PORT, ()=>{
    console.log("server started");
})


app.get("/", (req,res) =>{
    res.send(`<h1> this is my homepage </h1>`);
})