const express= require('express')
const app=express()
const dotenv= require('dotenv')
const body_parser=require('body-parser')
app.use(express.json())
const database= require('./models/db_config')
const port =  process.env.PORT||5050
const host = '0.0.0.0'
app.use(body_parser.json());
dotenv.config()
const cors = require('cors')

app.use(cors())

app.use('/auth',require('./routes/Users'))

database.connect()
.then((res)=>{
    console.log('DB is connected')
})
app.listen(port,host,()=>{
console.log('Api running in port '  +port)
})