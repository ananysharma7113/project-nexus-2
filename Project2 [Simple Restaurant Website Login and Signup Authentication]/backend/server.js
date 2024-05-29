const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(cors());
app.use(express.json());

const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"signup"
})

db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});


app.post('/signup',(req,res)=>{
    const sql1 = "INSERT INTO login (`username`,`email`,`password`,`confirmPassword`) VALUES (?,?,?,?)";
    const values=[
        req.body.username,
        req.body.email,
        req.body.password,
        req.body.confirmPassword
    ]
    db.query(sql1 , values , (err,data)=>{
        if(err){
            return res.json("Error")
        }
        return res.json(data);
    })
})

app.post('/login',(req,res)=>{
    const sql2 = "SELECT * FROM login WHERE `username` = ? AND `password`=? ";
    const values=[
        req.body.username,
        req.body.password
    ]
    db.query(sql2 , values , (err,data) =>{
        if(err){
            return res.json("Error")
        }
        if (data.length>0){
            return res.json("Success")
        }
        else{
            return res.json("Failed")
        }
    })
})

app.listen(8000, ()=>{
        console.log("listening")
    });