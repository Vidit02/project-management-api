var router = require("express").Router()

var roleController = require("../controller/role.controller")

router.post("/role",roleController.saverole)
router.get("/role/:roleId",roleController.getrolebyid)
router.get("/roles",roleController.getroles)

module.exports = router