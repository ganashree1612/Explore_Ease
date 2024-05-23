const mongoose = require('mongoose');
const optionSchema= mongoose.Schema({
    name: {
        type:String
    }
})
const optionModel = mongoose.model('Options', optionSchema);
module.exports = optionModel;