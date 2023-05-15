import React, {createContext, useState} from 'react' 
import Userclick from './components/Userclick'
import Charts from './components/charts'

export const ClickContext = createContext()
function App(){
    const [hitLinkOne, setHitLinkOne] = useState(0)
    const [hitLinkTwo, setHitLinkTwo] = useState(0)
    return(
        <>
        <div>
         
            <ClickContext.Provider value ={{hitLinkOne,setHitLinkOne,hitLinkTwo,setHitLinkTwo}}>
                <center>
                <Userclick/>
                <hr/>
                <Userclick/>
                <hr/>
                <Charts/>
                </center>
            </ClickContext.Provider>
            
        </div>
        </>
    )
}
export default App