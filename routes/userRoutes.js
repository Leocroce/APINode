const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

router.post('/add', UserController.createUser)
router.get('/', UserController.showUser)
module.exports = router