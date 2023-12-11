const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    name: {type:String, required: true},
    rollNo: {type:Number, required: true},
    festId: {type:String, required: true}
})

module.exports = mongoose.model('Resistration', registrationSchema)