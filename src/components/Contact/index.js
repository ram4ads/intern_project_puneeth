import React from 'react'
import './index.css' 

const Contact = () => {
    return(
        <div>
            <div>
                <h1>Contact form </h1>
            </div>
            <form className='form-data'>
                <input type='text' name='text' placeholder='firstname'/><br/>
                <input type='text' name='text' placeholder='lastname'/><br/>
                <input type='tel' name='telpjone' placeholder='firstname'/><br/>
                <button> Submit</button>

            </form>
        </div>
    )
}
export default Contact