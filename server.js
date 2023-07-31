const express = require("express")
const userRouter = require("./routes/user-routes")
const roleRouter = require("./routes/role-routes")
const mongoose = require("mongoose")
const cors = require("cors")
let app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/user',userRouter)
app.use(roleRouter)
let port = 9898

mongoose.connect('mongodb://localhost:27017/projectmanager',(err,success)=>{
    if(err){
        console.log("db not connected");
    } else {
        console.log("db connected");
    }
})

app.listen(port,()=>{
    console.log("Server started at " + port );
})