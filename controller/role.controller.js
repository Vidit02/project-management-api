const roleModel = require("../models/roles.model")

function createRole(req,res){
    let role = new roleModel(req.body)
    roleModel.findOne({"roleName" : req.body.roleName},function(err,data){
        if(data == undefined || data == null ){
            role.save(function(err,success){
                if (err) {
                    console.log(err);
                    res.json({
                        status: -1,
                        msg: "SMW",
                        data: "Please Try After Sometime"
                    })
                } else {
                    res.json({
                        status: 200,
                        msg: "Role save...",
                        data: success
                    })
                }
            })
        
        } else{

            res.json({
                status: -1,
                msg: "SMW",
                data: "Duplicate Role"
            })
        }
    })
}

function getAllRoles(req,res){
    roleModel.find(function (err, success) {
        if (err) {
            console.log(err);
            res.json({
                status: -1,
                msg: "SMW",
                data: "Please Try After Sometime"
            })
        } else {
            res.json({
                status: 200,
                msg: "Role Ret...",
                data: success
            })
        }
    })
}

function getRoleById(req,res){
    let roleId = req.params.roleId
    roleModel.findById(roleId,function(err,success){
        if(err){
            req.json({
                status : 403,
                msg : "Something is Wrong",
                data : "Try after sometime"
            })
        } else {
            res.json({
                status : 200,
                msg : "Role Found",
                data : success
            })
        }
    })
}

module.exports.saverole = createRole
module.exports.getroles = getAllRoles
module.exports.getrolebyid = getRoleById