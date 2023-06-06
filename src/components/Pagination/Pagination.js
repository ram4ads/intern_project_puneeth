import React from "react";
import './Pagination.css'
const Paginations = ({data, nextPage,prevPage, pageHandler, currentPage})=>{
    let pagenumbers = []
    for(let i=1; i<Math.ceil(data.length/10)+1; i++){
        pagenumbers.push(i)
    }
    return(
        <div className="pagination">
            <button className="button-action" onClick={prevPage}>Prev</button>
            {pagenumbers.map((page) => <div  key={page} className={`pageButton ${currentPage === page ? "activePage": ""}}`} onClick={()=>pageHandler(page)}>{page}</div>)}
            <button className="button-action" onClick={nextPage}>Next</button>
        </div>
    )
}
export default Paginations