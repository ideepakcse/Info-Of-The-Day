const mongoose = require('mongoose');

const factSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }, 
}, {timestamps: true});

const Fact = mongoose.model('Fact', factSchema);
module.exports = Fact;