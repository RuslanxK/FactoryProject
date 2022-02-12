const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    fullname: String,
    username: { type: String, required: true },
    password: { type: String, required: true },
    actions: Number

})


module.exports = mongoose.model('users', userSchema )