const express = require('express')
const app = express()
const conn = require('./db/conn')

const Task = require('./models/Task')
const User = require('./models/User')
const userRoutes = require('./routes/userRoutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/users', userRoutes)


conn
.sync()
//.sync({ force: true })
.then(() => {
    app.listen(3000)
}).catch((err) => console.log(err))
