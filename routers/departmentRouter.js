const express = require('express')
const departmentBL = require('../models/departmentBL')
const router = express.Router()


router.route('/')
    .get( async function(req, resp) {

        let deps = await departmentBL.getAllDeps()
        return resp.json(deps)
    })


    router.route('/:id')
    .get( async function(req, resp) {

        let id = req.params.id
        let dep = await departmentBL.getDep(id)
        return resp.json(dep)
    })


    router.route('/')
    .post( async function(req, resp) {

       
        let obj = req.body
        let status = await departmentBL.addDep(obj)
        return resp.json(status)
    })


    router.route('/:id')
    .put( async function(req, resp) {

        let id = req.params.id
        let obj = req.body
        let status = await departmentBL.updateDep(id, obj)
        return resp.json(status)
    })


    router.route('/:id')
    .delete( async function(req, resp) {

        let id = req.params.id
        let status = await departmentBL.deleteDep(id)
        return resp.json(status)
    })



    module.exports = router