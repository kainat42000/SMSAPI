const express = require('express');
const cors = require('cors');
const pool = require('./db');
const Pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.get('/',async(requestAnimationFrame,res)=>{
    try{
        res.json('WELCOME TO STUDENT API');
    }catch(err){
        res.status(500).json({Error:err.message}
        );
    }
})
app.get('/gettotalstd',async(requestAnimationFrame,res)=>{
    try{
        const result = await Pool.query('select * from student');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
})

const PORT = process.env.PORT;
app.listen(PORT,() =>{
    console.log(`connected successfully...Runing on PORT ${PORT}`)
})