const mongoose = require("mongoose")
const budgetSchema = new mongoose.Schema({
    title: {
            type : String,
            trim: true, 
            required: true,  
    },
    value: {
            type: Number, 
            required: true
    },
    color: {
            type: String, 
            required: true

    }
}, { collection: 'chart' })
module.exports = mongoose.model('chart', budgetSchema)