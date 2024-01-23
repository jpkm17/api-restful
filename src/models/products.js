const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:String,
    brand:String,
    Price:Number,
})

const Model = mongoose.model('products', schema)

module.exports = Model