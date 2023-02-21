const mongoose=require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    name:{
        type:String,
        required:true,

    },
    email:String,
    phone:String

})

module.exports=mongoose.model("User",userSchema)