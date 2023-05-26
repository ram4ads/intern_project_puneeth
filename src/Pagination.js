import React from "react";
import './App.css'
const Paginations = ({data, pageHandler})=>{
    let pagenumbers = []
    for (let i=1;i < Math.ceil(data.length/10)+1; i++){
        pagenumbers.push(i)
    }
    return(
        <div className='pagecontianer'>
            
                {pagenumbers.map(page => <button type="button" className="pagemidcon" onClick={()=>pageHandler(page)}>{page}</button>)}
            
        </div>
    )
}
export default Paginations