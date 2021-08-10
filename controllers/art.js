const Art = require('../models/art');

module.exports = {
    saveArt,
    index
}

async function saveArt(req, res) {
    try {
        let artPiece = await Art.create({ compressedFile: JSON.stringify(req.body) });
        res.json(artPiece);
    } catch (err) {
        res.json({err});
    }
}

async function index(req, res) {
    try {
        const artPieces = await Art.find({});
        res.status(200).json({artPieces});
    } catch (err) {} 
}