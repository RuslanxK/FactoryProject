const express = require('express')
const userRouter = require('./routers/userRouter')
const employeeRouter = require('./routers/employeeRouter')
const departmentRouter = require('./routers/departmentRouter')
const cors = require('cors')

const app = express()

app.use(cors())


app.use(express.json())

require('./configs/database')

app.use('/api/users', userRouter)
app.use('/api/employees', employeeRouter)
app.use('/api/departments', departmentRouter)


app.listen(8000)