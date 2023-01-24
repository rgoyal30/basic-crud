const express = require('express');
const { updateUser } = require('../controllers/controller');
const router = express.Router();


router.put('/:id', updateUser);


module.exports = router;