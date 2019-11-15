/**
 * Created by Asem Qaffaf
 * https://github.com/asemqaffaf
 *
 * description: database
 *
 */
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error',(error)=> console.err(error))
db.once('open',() => console.log(`Connected to Posts database`))



const postData = new mongoose.Schema({
    sellerID :{
        type : String,
        required : true
    },
    postCategories: {
        type : String,
        required : true
    },
    location :{
        type : String
    },
    name : {
        type : String
    },
    additionalInfo : {
        type : String
    },
    imgUrl : {
        type : String,
        required : true
    },
    post: {
        type: Object,
        default: 'its not working!'
    }
})
/*
        sellerID: "Asem",
        postCategories: "car",
        location: 'Amman',
        name: "BMW",
        additionalInfo: '520i',
        imgUrl: 'https://images.summitmedia-digital.com/topgear/images/2018/07/31/BMW-520d1.jpg',
        buyerOne: {
            price: '20k',
            // date : Date.now(), 
        },
*/

module.exports = mongoose.model('posts',postData)