const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
    },
    dob: {
        type: String,
        required: true,
    },
    Education: {
        type: Number,
        required: true,
    },
    Lang: {
        type: String,
        required: true
    },
    Experience: {
        type: Number,
        required: true
    }

})
// exporting schemas
module.exports = mongoose.model(formDataSchema);