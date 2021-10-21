const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    mother: { type: String },
    father: { type: String },
    relation: { type: String }
});

module.exports = mongoose.model('Member', memberSchema);