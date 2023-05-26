import React from "react";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from './components/Signup/Signup';
// import Home from './components/Home/Home'
import Card from './components/Card/Card'
import InfiniteScroll from "./components/InfiniteScroll/Infinite";

function App(){
  return(
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<ProtectedRoute/>}> 
      <Route index element={<Card/>} />
      </Route>
      <Route path='/Login' element={<Login/>}/> 
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/InfiniteScroll' element={<InfiniteScroll/>}/>
     </Routes>
    </BrowserRouter>
  )
}
export default App;