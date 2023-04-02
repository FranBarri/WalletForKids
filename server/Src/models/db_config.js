const {Client}=require('pg')
const dontev=require('dotenv')
dontev.config()

const database= new Client({
    host:'localhost',
    port:5432,
    user:'postgres',
    password:process.env.DB_PASSWORD ,
    database:'Hackathon-ITBA'
})

module.exports=database
