const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const schema = require('./schema')
const bcrypt = require('bcrypt')
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
        const hashedPassword =await bcrypt.hash(password, 10);
        const hashedConfirmPassword = await bcrypt.hash(confirmpassword, 10);
        const newUser= new schema({
            firstName,
            lastName,
            dateOfBirth,
            gender,
            PhoneNumber,
            email,
            password:hashedPassword,
            confirmpassword:hashedConfirmPassword,
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

app.post('/finalData', async(req,res) => {
  const id = req.body.id  

  const user = await schema.findById(id)
  return res.status(200).json({message : user})
  console.log(id)
  
})

//create login page//
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const password1 = password.toString();
    try {
      const user = await schema.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid email' });
      }
  
      const isPasswordValid = await bcrypt.compare(password1, user.password);
  
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid  password' });
      }
  
      // Successful login
      res.status(200).json({ message: user._id });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'An error occurred. Please try again later.' });
    }
  });
  






app.listen(0969, ()=>{
    console.log('listening')
})
