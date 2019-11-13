const mongoose = require('mongoose');
const PersonSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name field is blank, you must fill in something."],
        minlength: [3],
        maxlength: [55],
        trim: true,
    }
}, {timestamps: true})
module.exports = mongoose.model('Person', PersonSchema);