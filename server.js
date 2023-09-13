const express=require('express');
const cors=require('cors');
const ConnectDb=require('./config/db')
require('dotenv').config();



const app=express();
ConnectDb()
//CORS for Connection with React

app.use(cors());

//Body Parser for Collection of Data
const bodyParser=require('body-parser');
app.use(bodyParser.json());

//API Port
const apiRouter=require("./Route/apiRouter");
app.use('/api',apiRouter);


const port=process.env.PORT || 2345;

app.listen(port,()=>{
    console.log(`server running port http://localhost:${port}`);
})

