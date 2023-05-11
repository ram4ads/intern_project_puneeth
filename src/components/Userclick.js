import React from 'react'
import axios from 'axios';

function Userclick(){
    const handleClickOne=()=>{
        const date = new Date();
        const output = {
            link:"link 1",
            click: 1,
            date,
            
        }
        axios.post('http://localhost:8000/api/value', output)
        .then(()=>{
            console.log('user Clicked Successfull')
        }).catch(error=>{
            console.log("getting error on frontend", error)
        })
    }

    const handleClickTwo=()=>{
        const date = new Date();
        const output = {
            link:"link 2",
            click: 1,
            date,
        
            
        }
        axios.post('http://localhost:8000/api/value', output)
        .then(()=>{
            console.log('user Clicked Successfull')
        }).catch(error=>{
            console.log("getting error on frontend", error)
        })
    }


    return(
        <>
        
            <button onClick={handleClickOne}>Click-one</button><br/>
            <button onClick={handleClickTwo}>Click-two</button>
        
        </>
    )
}
export default Userclick;