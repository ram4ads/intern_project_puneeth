import React,{useEffect, useState} from 'react'
import Signout from '../Signout/Signout'
import axios from 'axios'
import Cookies from 'js-cookie'
import './Home.css'

const Home =()=>{
    const [userData, setUserData] = useState([]);
    console.log(userData)


    useEffect(() => {
        const id = Cookies.get(
            'jwt_token'
        )
        axios.post("http://localhost:0969/finalData", {id}).then((response) => {
          setUserData(response.data.message);
        });
      }, []);
    
   
    return(
        <div>
            <nav className='nav-bar'>
                <img src='https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg' className="imagelogo" alt='logo'/>
            <div>
             <Signout/>
            </div> 
            </nav>
        <div className='mains-container'>
          <div >
            {userData && 
              <div className='box-container'>
                <div className='boc-container'>
                    <label className='label-caption'>Name:</label>
                    <p className='para'>{userData.firstName + userData.lastName}</p>
                </div>
                <div className='boc-container'>
                <label className='label-caption'>Date of Birth:</label>
                    <p className='para'>{userData.dateOfBirth}</p>
                </div>
                <div className='boc-container'>
                <label className='label-caption'>Gender:</label>
                    <p className='para'>{userData.gender}</p>
                </div>
                <div className='boc-container'>
                    <label className='label-caption'>Phone number:</label>
                    <p className='para'>{userData.PhoneNumber}</p>
                </div>
                <div className='boc-container'>
                    <label className='label-caption'>Photo:</label>
                    <img src={userData.userCapture} alt='user foto' className='image-contianers'/>
                </div>
                <div className='boc-container'>
                    <label className='label-caption'>Signature:</label>
                    <img src={userData.userSignature} alt="user sign" className='image-contianers'/>
                </div>
              </div>

            }
            
        </div>
            
            
            
        </div>
        </div>
    )
}
export default Home