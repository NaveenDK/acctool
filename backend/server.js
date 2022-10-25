const express = require('express')
const cors = require('cors')
const mongoose=require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())

app.use(express.json())



const uri = process.env.ATLAS_URI
mongoose.connect(uri,{useNewUrlParser:true })

const connection = mongoose.connection

connection.once('open',()=>{
    console.log("mongodb db connection established")
})


const cyclesRouter=require('./routes/cycles')
const usersRouter=require('./routes/users')

app.use('/cycles', cyclesRouter)
app.use('/users',usersRouter)


app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})