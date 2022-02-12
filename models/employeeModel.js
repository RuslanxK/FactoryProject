const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({

    firstname: String,
    lastname: String,
    startwork: Number,
    department: String,
    shifts: [String]
    
    
   
})

module.exports = mongoose.model('employees', employeeSchema )