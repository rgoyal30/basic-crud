const express = require('express');
const { updateUserById } = require('../controllers/controller');
const router = express.Router();


router.patch('/:id', updateUserById);


module.exports = router;