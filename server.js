const express=require('express')
const connectDB = require('./config/connectDB.JS')
const User = require('./models/User')
const app=express()
app.use(express.json())
require('dotenv').config({path:"./config/.env"})


connectDB()

app.post('/addUser',async(req,res)=>{
    const  {name,email,phone}=req.body

    const existingUser= await User.findOne({email})
    if (existingUser){
        return res.status(400).json({msg:"user already exists"} )

    }

    
    try {
        const newUser= new User({
            name,
            email,
            phone
        })
        await newUser.save()
        res.send(newUser)
        
    } catch (error) {
        res.send(error.message)

        
    }
})
app.get('/viwUser',async(req,res)=>{
    try {
        const users = await User.find()
        res.send(users)
        
    } catch (error) {
        res.send(error.message)
        
    }
})

app.delete('/deleteUser/:id',async(req,res)=>{
    try {
        const deleteUser=await User.findByIdAndDelete(req.params.id)
        res.send(`${deleteUser.name} deleted!`)
        
    } catch (error) {
        res.send(error.message)
        
    }
})
app.put('/editUser/:id',async(req,res)=>{
    try {
        const editUser=await User.findByIdAndUpdate(req.params.id,{...req.body},{new:true})
        res.send(editUser)
        
    } catch (error) {
        res.send(error.message)
        
    }
})

const port= process.env.port || 5000



app.listen(port,err=>err?console.log(err):console.log(`server is running on port ${port}`))
