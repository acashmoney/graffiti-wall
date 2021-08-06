const Art = require('../models/art');

module.exports = {
    saveArt,
}

async function saveArt(req, res) {
    console.log(req);
    console.log('saving da art');
    console.log('req.body ---->', req.body);
    Art.find({}, function(err, art) {
        console.log('All art saved to db', art);
    });
    try {
        let artPiece = await Art.create({ compressedFile: JSON.stringify(req.body)});
        res.json(artPiece);
    } catch (err) {
        res.json({err});
    }
    // new art piece = await Art.create(req.body), when req.body is working, user: req.user._id
    // art.save()
    // const art = await Art.

    // res.JSON something when saving is done
}