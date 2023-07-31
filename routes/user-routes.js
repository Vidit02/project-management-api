var router = require("express").Router()
const userController = require("../controller/user.controller")

router.post("/login",userController.login)

module.exports = router