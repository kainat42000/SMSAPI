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
app.get('/student',async(requestAnimationFrame,res)=>{
    try{
        const result = await Pool.query('select * from student');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});
app.get('/jobs',async(requestAnimationFrame,res)=>{
    try{
        const result = await Pool.query('select count(job_id) from jobs');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});
app.get('/countries',async(requestAnimationFrame,res)=>{
    try{
        const result = await Pool.query('select count(country_id) from countries');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});
app.get('/regions',async(requestAnimationFrame,res)=>{
    try{
        const result = await Pool.query('select count(region_id) from regions');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
})
app.get('/employees',async(requestAnimationFrame,res)=>{
    try{
        const result = await Pool.query('select count(employee_id) from employees');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});
app.get('/job_history',async(requestAnimationFrame,res)=>{
    try{
        const result = await Pool.query('select count(job_id) from job_history');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});
app.get('/departments',async(requestAnimationFrame,res)=>{
    try{
        const result = await Pool.query('select count(department_id) from departments');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

const PORT = process.env.PORT;
app.listen(PORT,() =>{
    console.log(`connected successfully...Runing on PORT ${PORT}`)
})