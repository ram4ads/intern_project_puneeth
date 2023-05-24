const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const schema = require('./schema')
const bodyParser = require('body-parser');
const app = express() 
app.use(cors())
app.use(express.json({limit: "30mb"})) 


mongoose.connect("mongodb+srv://puneet:8142424331@cluster-puneet.z85pjmk.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>console.log('mongodb successful connected')) 





app.get('/', (req, res) =>{
    return res.send("From backend side")
})  


app.post('/userData', async(req,res)=>{
    try{
        const {firstName,lastName,dateOfBirth,gender,PhoneNumber,email,password,confirmpassword,userImage,userSignature,userCapture }=req.body
        const EmailFind = await schema.findOne({email})
        if(EmailFind){
            return res.status(400).send("The Email Already Exist")
        }
        if(password !== confirmpassword){
            res.status(400).send('Password does not match')
        }
        const newUser= new schema({
            firstName,
            lastName,
            dateOfBirth,
            gender,
            PhoneNumber,
            email,
            password,
            confirmpassword,
            userImage,
            userSignature,
            userCapture
        })
        console.log(newUser);
        await newUser.save();
        res.status(200).send("Congratulation account is created..!")
    }catch(error){
        console.log(error)
    }
})

app.listen(0969, ()=>{
    console.log('listening')
})
