//model->Models are a powerful tool for interacting with MongoDB databases. They provide a simple and easy-to-use interface for creating, reading, updating, and deleting documents.
const mongoose=require('mongoose')

const EmployeeSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})


//create models
const EmployeeModel=mongoose.model("employee",EmployeeSchema)
//employee is database name

module.exports=EmployeeModel