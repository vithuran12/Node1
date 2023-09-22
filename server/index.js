const express=require('express');
const mongoose =require('mongoose');
const cors=require('cors');
const EmployeeModel=require('./models/Employee')

const app=express()
app.use(express.json())//passing data front end to backend in json format
app.use(cors())//specify which origins are allowed to access your API.

mongoose.connect("mongodb://127.0.0.1:27017/employee")
//data base link to connect database(database name employee) (127.0.0.1=ip address)

app.post('/register',(req,res)=>{//route, request come from register
    EmployeeModel.create(req.body)
    .catch(err=>res.json(err))
})

app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })

})

app.listen(3001, ()=>{
    console.log("server is running");
})

