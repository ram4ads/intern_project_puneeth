const express = require('express') 
const mysql = require('mysql')
const cors = require('cors')

const app = express() 
app.use(cors()) 
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "userdata"
})

//creating-API  

app.get('/', (req, res) =>{
    return res.send("From backend side")
}) 

app.get('/value', function(req,res){
    db.query('SELECT link, date, COUNT(*) AS click_count FROM content GROUP BY link, date;',
    (error,result)=>{
        if(error){
            return res.json(error);
        }
        return res.json(result);
    }
    )
})

app.post('/api/value', (req, res)=>{
    const{link, date} = req.body; 
    db.query('INSERT INTO content (link,  date) VALUES (?,now())',
    [link,  date],
    (error, data)=>{
        if(error){
            console.log("backend error", error)
        }
        res.send(200)
    }
    )
})

app.listen(8000, ()=>{
    console.log("listening")
})