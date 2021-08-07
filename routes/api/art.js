const express = require('express');
const router = express.Router();
const artCtrl = require('../../controllers/art');

/*---------- Public Routes ----------*/
router.post('/save', artCtrl.saveArt);
router.get('/', artCtrl.index);

/*---------- Protected Routes ----------*/




module.exports = router;