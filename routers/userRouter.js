const express = require('express')
const userBL = require('../models/userBL')
const router = express.Router()


router.route('/')
    .get( async function(req, resp) {

        let users = await userBL.getAllUsers()
        return resp.json(users)
    })

    module.exports = router