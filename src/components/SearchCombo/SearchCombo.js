import React, {useState} from 'react'
import './SearchCombo.css'


const SearchCombination=()=>{
    const [searchTerm, setSearchTerm] = useState('')
    const alphabets = ['A','B','C', 'D','E']
    const combos = []

    for (let a of alphabets){
        for(let b of alphabets){
            for(let c of alphabets){
                for(let d of alphabets){
                    for (let e of alphabets){
                        const combination=a+b+c+d+e;
                        combos.push(combination)
                    }
                }
            }
        }
    }

    const handleSearch = (event) =>{
        setSearchTerm(event.target.value)
    }
    
    const filteredCombo = combos.filter(alpha => alpha.includes(searchTerm.toLocaleUpperCase()))

    const lengthOfCombo = filteredCombo.length
    const lenghtOfCombos = combos.length
    return(
        <div className='main-contianer'>
            <input type='search' placeholder='Search here' onChange={handleSearch}/>
            <h3>Total Combination {lenghtOfCombos} Generation</h3>
             {searchTerm.length >=3 ? (<><h3>Found {lengthOfCombo} alphabets</h3></>): ''}
            <div className='card-contianer'> 
                {searchTerm.length >=3 ? (filteredCombo.map((combos, index)=>(
                    <div className='card-output'>
                        <p key={index}>{combos}</p>
                    </div>
                ))): (combos.map(eachCombo => (
                    <div className='card-output'>
                        <p>{eachCombo}</p>
                    </div>
                )))}
            </div> 
        
        </div>
    )
}
export default SearchCombination;