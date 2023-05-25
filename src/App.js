import React from "react";
import Login from "./components/Login/Login";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home'


function App(){
  return(
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<ProtectedRoute/>}> 
      <Route index element={<Home/>} />
      </Route>
      <Route path='/Login' element={<Login/>}/> 
      <Route path='/Signup' element={<Signup/>}/>
     </Routes>
    </BrowserRouter>
  )
}
export default App;