const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    email: {
        type: String, 
        trim: true, 
        required: true 
    }, 
    password:{
        type: String, 
        trim: true, 
        required: true
        }, 
    token: {
        type: String, 
        trim: true, 
        required: true, 
    }

    }, { collection: 'userData'}) 
    
    module.exports = mongoose.model('userData', userSchema)