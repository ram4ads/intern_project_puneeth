import React,{useContext} from 'react';
import { ClickContext } from '../App';
import axios from 'axios';
import '../App.css'
function Userclick(){
    const {hitLinkOne, setHitLinkOne} = useContext(ClickContext)
    const {hitLinkTwo, setHitLinkTwo} = useContext(ClickContext)
    const handleClickOne=()=>{
        setHitLinkOne(hitLinkOne + 1)
        const output = {
            link:"link 1",
            
        }
        console.log(hitLinkOne)
        axios.post('http://localhost:8000/api/value', output)
        .then(()=>{
            console.log('user Clicked-one Successfull')
        }).catch(error=>{
            console.log("getting error on frontend", error)
        })
    }

    const handleClickTwo=()=>{
        setHitLinkTwo(hitLinkTwo + 1)
        const output = {
            link:"link 2",
        
            
        }
        console.log(output)
        axios.post('http://localhost:8000/api/value', output)
        .then(()=>{
            console.log('user Clicked-two Successfull')
        }).catch(error=>{
            console.log("getting error on frontend", error)
        })
    }


    return(
        
        <ClickContext.Consumer>
            {value =>
            <div>
                <h1>React-JS</h1>
                <button className="glow-on-hover" onClick={handleClickOne}>Click-one <span>{hitLinkOne}</span></button><br/>
                <button className="glow-on-hover" onClick={handleClickTwo}>Click-two <span>{hitLinkTwo}</span></button>
            </div>
            }
        </ClickContext.Consumer>
       
       
    )
}
export default Userclick;