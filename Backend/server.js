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
    db.query("SELECT CONCAT(DATE_FORMAT(date, '%H:00'), '-', DATE_FORMAT(DATE_ADD(date, INTERVAL 1 HOUR), '%H:00')) AS Time_between, SUM(CASE WHEN link = 'link 1' THEN 1 ELSE 0 END) AS link1, SUM(CASE WHEN link = 'link 2' THEN 1 ELSE 0 END) AS link2 FROM userdata.content WHERE DATE(date) = '2023-05-12' GROUP BY Time_between ORDER BY Time_between LIMIT 0, 1000;",
    (error,result)=>{
        if(error){
            return res.json(error);
        }
        return res.json(result);
    }
    )
})

app.get('/poll', function(req,res){
    db.query("SELECT link, count(link) as count from content group by link",
    (error,result)=>{
        if(error){
            return res.json(error);
        }
        return res.json(result)
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
