import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Paginations from './Pagination';
import './App.css';

function App() {
  const [data,setData] = useState([])
  const [perpage, setPerpage] = useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then(
      res=>{setData(res.data); setPerpage(res.data.slice(0,10))}
    )
  },[])

  const pageHandler = (pagenumbers)=>{
    setPerpage(data.slice((pagenumbers*10)-10,pagenumbers*10))
  }
  return (
    <div className="App">
      {data.length>1?
       <div>
        {perpage.map(post => <div className='post-contianer'>{post.title}</div>)}<br/>
        <Paginations data={data} pageHandler={pageHandler}/>
       </div>  
       :
       <p>Data Not Loaded</p>
    }
    </div>
  );
}

export default App;
