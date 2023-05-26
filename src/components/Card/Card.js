import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import './Card.css'

const Cards = () =>{
    const [cardData, setCardData] = useState();
    
    useEffect(()=>{
        const id = Cookies.get("jwt_token")
        axios.post("http://localhost:0969/finalData", {id}).then((res) =>{
            let data = Object.entries(res.data.message)
            setCardData(data)
        }).catch(err => {
            console.log(err)
        })
    },[]);
    return(
        <div className='grid-page'>
            <div className='gird-cotainer'>
            <h1 className='heading'>Passport card details</h1>
                {cardData && cardData.map(([key, value], index)=>{
                    console.log(key)
                    if(['password', 'confirmpassword','__v', '_id'].includes(key)){
                        return null;
                    }
                    return(
                        <>
                        {value.includes("image") ? (
                            <div className='box-css'>
                                {key}:<img src={value} alt='data' className='image-css'/>
                            </div>
                        ):(
                            <div className='box-css'> 
                                {key}:<p className='paragraphing'>{value}</p>
                            </div>
                        )}
                        </>
                    )
                })}
            </div>
        </div>
    )
}
export default Cards