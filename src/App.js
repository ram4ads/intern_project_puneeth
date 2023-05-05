import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <BrowserRouter>
        
            <div>
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/About' element={<About/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                </Routes>
                
            </div>
    </BrowserRouter>
  );
}

export default App;
