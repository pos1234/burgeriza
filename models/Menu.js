const { Double } = require('mongodb')
const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    recipe:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true
    },
    foodType:{
        type:String,
        required:true
    }
})

module.exports = new mongoose.model('Menu',menuSchema)
