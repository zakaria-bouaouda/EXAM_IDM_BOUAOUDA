const mongoose = require('mongoose');

const vmSchema = new mongoose.Schema({
    
nom : {type: String, required: true},
ip: {type: String , required: true},
se: {type: String , required: true},
etat: {type: String , required: true}

});

module.exports = mongoose.model('Vm',vmSchema);