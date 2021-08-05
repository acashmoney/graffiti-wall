const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String,
    // file:
})

module.exports = mongoose.model('Art', artSchema);