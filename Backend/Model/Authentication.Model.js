const { Schema, model } = require('mongoose')
const authenticationSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    phoneNo: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    gmail: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },

},{
    timeseries:true,
    timestamps:true
})
module.exports = model("authentication",authenticationSchema)