const express = require('express')
const employeeBL = require('../models/employeeBL')
const router = express.Router()


router.route('/')
    .get( async function(req, resp) {

        let name = req.query.name
        let emps = await employeeBL.getAllEmps(name)
        return resp.json(emps)
    })



    router.route('/:id')
    .get( async function(req, resp) {

        let id = req.params.id
        let emp = await employeeBL.getEmp(id)
        return resp.json(emp)
    })


    router.route('/')
    .post( async function(req, resp) {

        let obj = req.body
        let status = await employeeBL.addEmp(obj)
        return resp.json(status)

    })


    router.route('/:id')
    .put( async function(req, resp) {

        let id = req.params.id
        let obj = req.body
        let status = await employeeBL.updateEmp(id, obj)
        return resp.json(status)
    })


    router.route('/:id')
    .delete( async function(req, resp) {

        let id = req.params.id
        let status = await employeeBL.deleteEmp(id)
        return resp.json(status)
    })

    module.exports = router