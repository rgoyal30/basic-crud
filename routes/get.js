const express = require('express');
const { getAllUsers } = require('../controllers/controller');
const router = express.Router();


router.get('/users', getAllUsers)


module.exports = router;