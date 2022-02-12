const user = require('../models/userModel')


const getAllUsers = () => {

    return new Promise((resolve, reject) => {

        user.find({}, function(err, data) {

            if(err) {

                reject(err)
            }

            else {

                resolve(data)
            }
        })
    })
}


module.exports = { getAllUsers }