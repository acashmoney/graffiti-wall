const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String,
    compressedFile: String
})

module.exports = mongoose.model('Art', artSchema);