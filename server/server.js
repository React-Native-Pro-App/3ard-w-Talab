const express = require('express')
const cors = require('cors')
const multer = require('multer')
// const  cloudinary = require('cloudinary');
// const cloudinaryStorage = require('multer-storage-cloudinary');
const db = require('./database')

const app = express()
const port = 9000
express(cors)

app.listen(port,()=>console.log(`the server is working on ${port}`))

app.get('/',(request,response)=>{
    response.json(__dirname)
})
app.post('/upload',db.multerUploads,(req,res)=>{
    console.log(req.body , res.body)
})