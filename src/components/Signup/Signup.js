//import logo from './logo.svg';
import React,{ useState,createContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import FormReg from '../FormReg/FormReg';
import Signature from '../Signature/SignatureValue';
import ImageUploader from "../ImageUpload/ImageUploader";
import WebCameras from "../WebCamera/WebCamera";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from 'axios'
import "./Signup.css"


export const FormDataContext = createContext();

function App() {
    const[tabFlow, setTabFlow] = useState(0)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        PhoneNumber:'',
        email: '',
        password: '',
        confirmpassword: '',
        userImage:null,
        userSignature:null,
        userCapture:null
      });
       
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const navigate = useNavigate()
      const handleSigning=()=>{
        Cookies.remove("jwt_token")
         navigate('/login')
      }

      
    
    //Submission button// 
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Save:", formData);
      
       axios.post("http://localhost:0969/userData",formData)
       .then(()=> {
        console.log("succesfully sended")
       }).catch((err) => {
          console.log("error from frontend while sending data" , err)
       })
    
    }
    const handleClickTab = ()=>{
        console.log(formData)
        setTabFlow(previous => previous +1)
    }
  return (
    <FormDataContext.Provider value={{formData, handleChange, handleClickTab, handleSubmit}}>
        <div className='App'>
        
        <Tabs className="Tabs" selectedIndex={tabFlow} onSelect={index => setTabFlow(index)}>
         <img src='https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg' className="imagelogo" alt='logo'/>
       
            <TabList>
                <Tab>FormRegistration</Tab>
                <Tab>ImageUploader</Tab>
                <Tab>Web Camera</Tab>
                <Tab>Signature</Tab>
            </TabList>
            <TabPanel>
            <FormReg/>
            </TabPanel>
            <TabPanel>
               <ImageUploader handleClickTab={handleClickTab}/>
                
            </TabPanel>
            <TabPanel>
                <WebCameras handleClickTab={handleClickTab}/>
            </TabPanel>
            <TabPanel>
               <Signature/>
               <button onClick={handleSigning} className="glow-on-hover">Login Here</button>
            </TabPanel>

        </Tabs>
       
       
      
    </div>
    </FormDataContext.Provider>
 
  );
}

export default App;
