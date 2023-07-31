const express = require("express")
const userModel = require("../models/users.model")

function login(req, res) {
    let emailid = req.body.emailid
    let password = req.body.password
    console.log("emaild :" + emailid + "password " + password);
    if (emailid == "" || password == "") {
        res.json({
            status: 402,
            msg: "Something is wrong",
            data: "dfailuew"
        })
    } else {
        userModel.findOne({ "emailid": emailid }).exec(function (err, success) {
            if (err) {
                res.json({
                    status: 402,
                    msg: "Something is wrong",
                    data: req.body
                })
            } else {
                res.json({
                    status: 402,
                    msg: "Something is wrong",
                    data: success
                })
            }

        })
    }
}
module.exports.login = login