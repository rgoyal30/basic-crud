const express = require('express');
const { deleteUser } = require('../controllers/controller');
const router = express.Router();


router.delete('/:id', deleteUser);


module.exports = router;