const express = require('express')
const { loginUser, registerUser } = require('../Controller/userController')

const router = express.Router()

router.post("/",loginUser)
router.post("/register",registerUser)

module.exports = router;